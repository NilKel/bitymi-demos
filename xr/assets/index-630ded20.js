var _l=Object.defineProperty;var ml=(o,l,f)=>l in o?_l(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var tt=(o,l,f)=>(ml(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))E(x);new MutationObserver(x=>{for(const C of x)if(C.type==="childList")for(const M of C.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&E(M)}).observe(document,{childList:!0,subtree:!0});function f(x){const C={};return x.integrity&&(C.integrity=x.integrity),x.referrerPolicy&&(C.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?C.credentials="include":x.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function E(x){if(x.ep)return;x.ep=!0;const C=f(x);fetch(x.href,C)}})();function bl(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const vl=bl(Array,o=>o.fill(0));let Lt=1e-6;function gl(o){function l(y=0,S=0){const k=new o(2);return y!==void 0&&(k[0]=y,S!==void 0&&(k[1]=S)),k}const f=l;function E(y,S,k){const r=k??new o(2);return r[0]=y,r[1]=S,r}function x(y,S){const k=S??new o(2);return k[0]=Math.ceil(y[0]),k[1]=Math.ceil(y[1]),k}function C(y,S){const k=S??new o(2);return k[0]=Math.floor(y[0]),k[1]=Math.floor(y[1]),k}function M(y,S){const k=S??new o(2);return k[0]=Math.round(y[0]),k[1]=Math.round(y[1]),k}function G(y,S=0,k=1,r){const m=r??new o(2);return m[0]=Math.min(k,Math.max(S,y[0])),m[1]=Math.min(k,Math.max(S,y[1])),m}function A(y,S,k){const r=k??new o(2);return r[0]=y[0]+S[0],r[1]=y[1]+S[1],r}function L(y,S,k,r){const m=r??new o(2);return m[0]=y[0]+S[0]*k,m[1]=y[1]+S[1]*k,m}function V(y,S){const k=y[0],r=y[1],m=S[0],u=S[1],p=Math.sqrt(k*k+r*r),a=Math.sqrt(m*m+u*u),_=p*a,w=_&&et(y,S)/_;return Math.acos(w)}function q(y,S,k){const r=k??new o(2);return r[0]=y[0]-S[0],r[1]=y[1]-S[1],r}const Z=q;function J(y,S){return Math.abs(y[0]-S[0])<Lt&&Math.abs(y[1]-S[1])<Lt}function F(y,S){return y[0]===S[0]&&y[1]===S[1]}function O(y,S,k,r){const m=r??new o(2);return m[0]=y[0]+k*(S[0]-y[0]),m[1]=y[1]+k*(S[1]-y[1]),m}function $(y,S,k,r){const m=r??new o(2);return m[0]=y[0]+k[0]*(S[0]-y[0]),m[1]=y[1]+k[1]*(S[1]-y[1]),m}function lt(y,S,k){const r=k??new o(2);return r[0]=Math.max(y[0],S[0]),r[1]=Math.max(y[1],S[1]),r}function z(y,S,k){const r=k??new o(2);return r[0]=Math.min(y[0],S[0]),r[1]=Math.min(y[1],S[1]),r}function R(y,S,k){const r=k??new o(2);return r[0]=y[0]*S,r[1]=y[1]*S,r}const U=R;function ct(y,S,k){const r=k??new o(2);return r[0]=y[0]/S,r[1]=y[1]/S,r}function K(y,S){const k=S??new o(2);return k[0]=1/y[0],k[1]=1/y[1],k}const Q=K;function Y(y,S,k){const r=k??new o(3),m=y[0]*S[1]-y[1]*S[0];return r[0]=0,r[1]=0,r[2]=m,r}function et(y,S){return y[0]*S[0]+y[1]*S[1]}function bt(y){const S=y[0],k=y[1];return Math.sqrt(S*S+k*k)}const Vt=bt;function Rt(y){const S=y[0],k=y[1];return S*S+k*k}const Tt=Rt;function ft(y,S){const k=y[0]-S[0],r=y[1]-S[1];return Math.sqrt(k*k+r*r)}const Et=ft;function yt(y,S){const k=y[0]-S[0],r=y[1]-S[1];return k*k+r*r}const H=yt;function rt(y,S){const k=S??new o(2),r=y[0],m=y[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(k[0]=r/u,k[1]=m/u):(k[0]=0,k[1]=0),k}function It(y,S){const k=S??new o(2);return k[0]=-y[0],k[1]=-y[1],k}function Mt(y,S){const k=S??new o(2);return k[0]=y[0],k[1]=y[1],k}const zt=Mt;function Dt(y,S,k){const r=k??new o(2);return r[0]=y[0]*S[0],r[1]=y[1]*S[1],r}const Ot=Dt;function Pt(y,S,k){const r=k??new o(2);return r[0]=y[0]/S[0],r[1]=y[1]/S[1],r}const _t=Pt;function Wt(y=1,S){const k=S??new o(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*y,k[1]=Math.sin(r)*y,k}function B(y){const S=y??new o(2);return S[0]=0,S[1]=0,S}function j(y,S,k){const r=k??new o(2),m=y[0],u=y[1];return r[0]=m*S[0]+u*S[4]+S[12],r[1]=m*S[1]+u*S[5]+S[13],r}function g(y,S,k){const r=k??new o(2),m=y[0],u=y[1];return r[0]=S[0]*m+S[4]*u+S[8],r[1]=S[1]*m+S[5]*u+S[9],r}function i(y,S,k,r){const m=r??new o(2),u=y[0]-S[0],p=y[1]-S[1],a=Math.sin(k),_=Math.cos(k);return m[0]=u*_-p*a+S[0],m[1]=u*a+p*_+S[1],m}function h(y,S,k){const r=k??new o(2);return rt(y,r),R(r,S,r)}function d(y,S,k){const r=k??new o(2);return bt(y)>S?h(y,S,r):Mt(y,r)}function b(y,S,k){const r=k??new o(2);return O(y,S,.5,r)}return{create:l,fromValues:f,set:E,ceil:x,floor:C,round:M,clamp:G,add:A,addScaled:L,angle:V,subtract:q,sub:Z,equalsApproximately:J,equals:F,lerp:O,lerpV:$,max:lt,min:z,mulScalar:R,scale:U,divScalar:ct,inverse:K,invert:Q,cross:Y,dot:et,length:bt,len:Vt,lengthSq:Rt,lenSq:Tt,distance:ft,dist:Et,distanceSq:yt,distSq:H,normalize:rt,negate:It,copy:Mt,clone:zt,multiply:Dt,mul:Ot,divide:Pt,div:_t,random:Wt,zero:B,transformMat4:j,transformMat3:g,rotate:i,setLength:h,truncate:d,midpoint:b}}const Dr=new Map;function jr(o){let l=Dr.get(o);return l||(l=gl(o),Dr.set(o,l)),l}function wl(o){function l(a,_,w){const v=new o(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,w!==void 0&&(v[2]=w))),v}const f=l;function E(a,_,w,v){const T=v??new o(3);return T[0]=a,T[1]=_,T[2]=w,T}function x(a,_){const w=_??new o(3);return w[0]=Math.ceil(a[0]),w[1]=Math.ceil(a[1]),w[2]=Math.ceil(a[2]),w}function C(a,_){const w=_??new o(3);return w[0]=Math.floor(a[0]),w[1]=Math.floor(a[1]),w[2]=Math.floor(a[2]),w}function M(a,_){const w=_??new o(3);return w[0]=Math.round(a[0]),w[1]=Math.round(a[1]),w[2]=Math.round(a[2]),w}function G(a,_=0,w=1,v){const T=v??new o(3);return T[0]=Math.min(w,Math.max(_,a[0])),T[1]=Math.min(w,Math.max(_,a[1])),T[2]=Math.min(w,Math.max(_,a[2])),T}function A(a,_,w){const v=w??new o(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function L(a,_,w,v){const T=v??new o(3);return T[0]=a[0]+_[0]*w,T[1]=a[1]+_[1]*w,T[2]=a[2]+_[2]*w,T}function V(a,_){const w=a[0],v=a[1],T=a[2],N=_[0],W=_[1],ut=_[2],ot=Math.sqrt(w*w+v*v+T*T),it=Math.sqrt(N*N+W*W+ut*ut),mt=ot*it,St=mt&&et(a,_)/mt;return Math.acos(St)}function q(a,_,w){const v=w??new o(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const Z=q;function J(a,_){return Math.abs(a[0]-_[0])<Lt&&Math.abs(a[1]-_[1])<Lt&&Math.abs(a[2]-_[2])<Lt}function F(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function O(a,_,w,v){const T=v??new o(3);return T[0]=a[0]+w*(_[0]-a[0]),T[1]=a[1]+w*(_[1]-a[1]),T[2]=a[2]+w*(_[2]-a[2]),T}function $(a,_,w,v){const T=v??new o(3);return T[0]=a[0]+w[0]*(_[0]-a[0]),T[1]=a[1]+w[1]*(_[1]-a[1]),T[2]=a[2]+w[2]*(_[2]-a[2]),T}function lt(a,_,w){const v=w??new o(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function z(a,_,w){const v=w??new o(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function R(a,_,w){const v=w??new o(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const U=R;function ct(a,_,w){const v=w??new o(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function K(a,_){const w=_??new o(3);return w[0]=1/a[0],w[1]=1/a[1],w[2]=1/a[2],w}const Q=K;function Y(a,_,w){const v=w??new o(3),T=a[2]*_[0]-a[0]*_[2],N=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=T,v[2]=N,v}function et(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function bt(a){const _=a[0],w=a[1],v=a[2];return Math.sqrt(_*_+w*w+v*v)}const Vt=bt;function Rt(a){const _=a[0],w=a[1],v=a[2];return _*_+w*w+v*v}const Tt=Rt;function ft(a,_){const w=a[0]-_[0],v=a[1]-_[1],T=a[2]-_[2];return Math.sqrt(w*w+v*v+T*T)}const Et=ft;function yt(a,_){const w=a[0]-_[0],v=a[1]-_[1],T=a[2]-_[2];return w*w+v*v+T*T}const H=yt;function rt(a,_){const w=_??new o(3),v=a[0],T=a[1],N=a[2],W=Math.sqrt(v*v+T*T+N*N);return W>1e-5?(w[0]=v/W,w[1]=T/W,w[2]=N/W):(w[0]=0,w[1]=0,w[2]=0),w}function It(a,_){const w=_??new o(3);return w[0]=-a[0],w[1]=-a[1],w[2]=-a[2],w}function Mt(a,_){const w=_??new o(3);return w[0]=a[0],w[1]=a[1],w[2]=a[2],w}const zt=Mt;function Dt(a,_,w){const v=w??new o(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const Ot=Dt;function Pt(a,_,w){const v=w??new o(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const _t=Pt;function Wt(a=1,_){const w=_??new o(3),v=Math.random()*2*Math.PI,T=Math.random()*2-1,N=Math.sqrt(1-T*T)*a;return w[0]=Math.cos(v)*N,w[1]=Math.sin(v)*N,w[2]=T*a,w}function B(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function j(a,_,w){const v=w??new o(3),T=a[0],N=a[1],W=a[2],ut=_[3]*T+_[7]*N+_[11]*W+_[15]||1;return v[0]=(_[0]*T+_[4]*N+_[8]*W+_[12])/ut,v[1]=(_[1]*T+_[5]*N+_[9]*W+_[13])/ut,v[2]=(_[2]*T+_[6]*N+_[10]*W+_[14])/ut,v}function g(a,_,w){const v=w??new o(3),T=a[0],N=a[1],W=a[2];return v[0]=T*_[0*4+0]+N*_[1*4+0]+W*_[2*4+0],v[1]=T*_[0*4+1]+N*_[1*4+1]+W*_[2*4+1],v[2]=T*_[0*4+2]+N*_[1*4+2]+W*_[2*4+2],v}function i(a,_,w){const v=w??new o(3),T=a[0],N=a[1],W=a[2];return v[0]=T*_[0]+N*_[4]+W*_[8],v[1]=T*_[1]+N*_[5]+W*_[9],v[2]=T*_[2]+N*_[6]+W*_[10],v}function h(a,_,w){const v=w??new o(3),T=_[0],N=_[1],W=_[2],ut=_[3]*2,ot=a[0],it=a[1],mt=a[2],St=N*mt-W*it,dt=W*ot-T*mt,gt=T*it-N*ot;return v[0]=ot+St*ut+(N*gt-W*dt)*2,v[1]=it+dt*ut+(W*St-T*gt)*2,v[2]=mt+gt*ut+(T*dt-N*St)*2,v}function d(a,_){const w=_??new o(3);return w[0]=a[12],w[1]=a[13],w[2]=a[14],w}function b(a,_,w){const v=w??new o(3),T=_*4;return v[0]=a[T+0],v[1]=a[T+1],v[2]=a[T+2],v}function y(a,_){const w=_??new o(3),v=a[0],T=a[1],N=a[2],W=a[4],ut=a[5],ot=a[6],it=a[8],mt=a[9],St=a[10];return w[0]=Math.sqrt(v*v+T*T+N*N),w[1]=Math.sqrt(W*W+ut*ut+ot*ot),w[2]=Math.sqrt(it*it+mt*mt+St*St),w}function S(a,_,w,v){const T=v??new o(3),N=[],W=[];return N[0]=a[0]-_[0],N[1]=a[1]-_[1],N[2]=a[2]-_[2],W[0]=N[0],W[1]=N[1]*Math.cos(w)-N[2]*Math.sin(w),W[2]=N[1]*Math.sin(w)+N[2]*Math.cos(w),T[0]=W[0]+_[0],T[1]=W[1]+_[1],T[2]=W[2]+_[2],T}function k(a,_,w,v){const T=v??new o(3),N=[],W=[];return N[0]=a[0]-_[0],N[1]=a[1]-_[1],N[2]=a[2]-_[2],W[0]=N[2]*Math.sin(w)+N[0]*Math.cos(w),W[1]=N[1],W[2]=N[2]*Math.cos(w)-N[0]*Math.sin(w),T[0]=W[0]+_[0],T[1]=W[1]+_[1],T[2]=W[2]+_[2],T}function r(a,_,w,v){const T=v??new o(3),N=[],W=[];return N[0]=a[0]-_[0],N[1]=a[1]-_[1],N[2]=a[2]-_[2],W[0]=N[0]*Math.cos(w)-N[1]*Math.sin(w),W[1]=N[0]*Math.sin(w)+N[1]*Math.cos(w),W[2]=N[2],T[0]=W[0]+_[0],T[1]=W[1]+_[1],T[2]=W[2]+_[2],T}function m(a,_,w){const v=w??new o(3);return rt(a,v),R(v,_,v)}function u(a,_,w){const v=w??new o(3);return bt(a)>_?m(a,_,v):Mt(a,v)}function p(a,_,w){const v=w??new o(3);return O(a,_,.5,v)}return{create:l,fromValues:f,set:E,ceil:x,floor:C,round:M,clamp:G,add:A,addScaled:L,angle:V,subtract:q,sub:Z,equalsApproximately:J,equals:F,lerp:O,lerpV:$,max:lt,min:z,mulScalar:R,scale:U,divScalar:ct,inverse:K,invert:Q,cross:Y,dot:et,length:bt,len:Vt,lengthSq:Rt,lenSq:Tt,distance:ft,dist:Et,distanceSq:yt,distSq:H,normalize:rt,negate:It,copy:Mt,clone:zt,multiply:Dt,mul:Ot,divide:Pt,div:_t,random:Wt,zero:B,transformMat4:j,transformMat4Upper3x3:g,transformMat3:i,transformQuat:h,getTranslation:d,getAxis:b,getScaling:y,rotateX:S,rotateY:k,rotateZ:r,setLength:m,truncate:u,midpoint:p}}const Tr=new Map;function Ln(o){let l=Tr.get(o);return l||(l=wl(o),Tr.set(o,l)),l}function xl(o){const l=jr(o),f=Ln(o);function E(i,h,d,b,y,S,k,r,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,y!==void 0&&(u[5]=y,S!==void 0&&(u[6]=S,k!==void 0&&(u[8]=k,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function x(i,h,d,b,y,S,k,r,m,u){const p=u??new o(12);return p[0]=i,p[1]=h,p[2]=d,p[3]=0,p[4]=b,p[5]=y,p[6]=S,p[7]=0,p[8]=k,p[9]=r,p[10]=m,p[11]=0,p}function C(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function M(i,h){const d=h??new o(12),b=i[0],y=i[1],S=i[2],k=i[3],r=b+b,m=y+y,u=S+S,p=b*r,a=y*r,_=y*m,w=S*r,v=S*m,T=S*u,N=k*r,W=k*m,ut=k*u;return d[0]=1-_-T,d[1]=a+ut,d[2]=w-W,d[3]=0,d[4]=a-ut,d[5]=1-p-T,d[6]=v+N,d[7]=0,d[8]=w+W,d[9]=v-N,d[10]=1-p-_,d[11]=0,d}function G(i,h){const d=h??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function A(i,h,d){const b=d??new o(12);return b[0]=i[0]*h,b[1]=i[1]*h,b[2]=i[2]*h,b[4]=i[4]*h,b[5]=i[5]*h,b[6]=i[6]*h,b[8]=i[8]*h,b[9]=i[9]*h,b[10]=i[10]*h,b}const L=A;function V(i,h,d){const b=d??new o(12);return b[0]=i[0]+h[0],b[1]=i[1]+h[1],b[2]=i[2]+h[2],b[4]=i[4]+h[4],b[5]=i[5]+h[5],b[6]=i[6]+h[6],b[8]=i[8]+h[8],b[9]=i[9]+h[9],b[10]=i[10]+h[10],b}function q(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const Z=q;function J(i,h){return Math.abs(i[0]-h[0])<Lt&&Math.abs(i[1]-h[1])<Lt&&Math.abs(i[2]-h[2])<Lt&&Math.abs(i[4]-h[4])<Lt&&Math.abs(i[5]-h[5])<Lt&&Math.abs(i[6]-h[6])<Lt&&Math.abs(i[8]-h[8])<Lt&&Math.abs(i[9]-h[9])<Lt&&Math.abs(i[10]-h[10])<Lt}function F(i,h){return i[0]===h[0]&&i[1]===h[1]&&i[2]===h[2]&&i[4]===h[4]&&i[5]===h[5]&&i[6]===h[6]&&i[8]===h[8]&&i[9]===h[9]&&i[10]===h[10]}function O(i){const h=i??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function $(i,h){const d=h??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const b=i[0*4+0],y=i[0*4+1],S=i[0*4+2],k=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2];return d[0]=b,d[1]=k,d[2]=u,d[4]=y,d[5]=r,d[6]=p,d[8]=S,d[9]=m,d[10]=a,d}function lt(i,h){const d=h??new o(12),b=i[0*4+0],y=i[0*4+1],S=i[0*4+2],k=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2],_=a*r-m*p,w=-a*k+m*u,v=p*k-r*u,T=1/(b*_+y*w+S*v);return d[0]=_*T,d[1]=(-a*y+S*p)*T,d[2]=(m*y-S*r)*T,d[4]=w*T,d[5]=(a*b-S*u)*T,d[6]=(-m*b+S*k)*T,d[8]=v*T,d[9]=(-p*b+y*u)*T,d[10]=(r*b-y*k)*T,d}function z(i){const h=i[0],d=i[0*4+1],b=i[0*4+2],y=i[1*4+0],S=i[1*4+1],k=i[1*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2];return h*(S*u-m*k)-y*(d*u-m*b)+r*(d*k-S*b)}const R=lt;function U(i,h,d){const b=d??new o(12),y=i[0],S=i[1],k=i[2],r=i[4+0],m=i[4+1],u=i[4+2],p=i[8+0],a=i[8+1],_=i[8+2],w=h[0],v=h[1],T=h[2],N=h[4+0],W=h[4+1],ut=h[4+2],ot=h[8+0],it=h[8+1],mt=h[8+2];return b[0]=y*w+r*v+p*T,b[1]=S*w+m*v+a*T,b[2]=k*w+u*v+_*T,b[4]=y*N+r*W+p*ut,b[5]=S*N+m*W+a*ut,b[6]=k*N+u*W+_*ut,b[8]=y*ot+r*it+p*mt,b[9]=S*ot+m*it+a*mt,b[10]=k*ot+u*it+_*mt,b}const ct=U;function K(i,h,d){const b=d??O();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function Q(i,h){const d=h??l.create();return d[0]=i[8],d[1]=i[9],d}function Y(i,h,d){const b=d??l.create(),y=h*4;return b[0]=i[y+0],b[1]=i[y+1],b}function et(i,h,d,b){const y=b===i?i:q(i,b),S=d*4;return y[S+0]=h[0],y[S+1]=h[1],y}function bt(i,h){const d=h??l.create(),b=i[0],y=i[1],S=i[4],k=i[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(S*S+k*k),d}function Vt(i,h){const d=h??f.create(),b=i[0],y=i[1],S=i[2],k=i[4],r=i[5],m=i[6],u=i[8],p=i[9],a=i[10];return d[0]=Math.sqrt(b*b+y*y+S*S),d[1]=Math.sqrt(k*k+r*r+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Rt(i,h){const d=h??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Tt(i,h,d){const b=d??new o(12),y=h[0],S=h[1],k=i[0],r=i[1],m=i[2],u=i[1*4+0],p=i[1*4+1],a=i[1*4+2],_=i[2*4+0],w=i[2*4+1],v=i[2*4+2];return i!==b&&(b[0]=k,b[1]=r,b[2]=m,b[4]=u,b[5]=p,b[6]=a),b[8]=k*y+u*S+_,b[9]=r*y+p*S+w,b[10]=m*y+a*S+v,b}function ft(i,h){const d=h??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Et(i,h,d){const b=d??new o(12),y=i[0*4+0],S=i[0*4+1],k=i[0*4+2],r=i[1*4+0],m=i[1*4+1],u=i[1*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y+a*r,b[1]=p*S+a*m,b[2]=p*k+a*u,b[4]=p*r-a*y,b[5]=p*m-a*S,b[6]=p*u-a*k,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function yt(i,h){const d=h??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function H(i,h,d){const b=d??new o(12),y=i[4],S=i[5],k=i[6],r=i[8],m=i[9],u=i[10],p=Math.cos(h),a=Math.sin(h);return b[4]=p*y+a*r,b[5]=p*S+a*m,b[6]=p*k+a*u,b[8]=p*r-a*y,b[9]=p*m-a*S,b[10]=p*u-a*k,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function rt(i,h){const d=h??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function It(i,h,d){const b=d??new o(12),y=i[0*4+0],S=i[0*4+1],k=i[0*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y-a*r,b[1]=p*S-a*m,b[2]=p*k-a*u,b[8]=p*r+a*y,b[9]=p*m+a*S,b[10]=p*u+a*k,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Mt=ft,zt=Et;function Dt(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ot(i,h,d){const b=d??new o(12),y=h[0],S=h[1];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=S*i[1*4+0],b[5]=S*i[1*4+1],b[6]=S*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Pt(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function _t(i,h,d){const b=d??new o(12),y=h[0],S=h[1],k=h[2];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=S*i[1*4+0],b[5]=S*i[1*4+1],b[6]=S*i[1*4+2],b[8]=k*i[2*4+0],b[9]=k*i[2*4+1],b[10]=k*i[2*4+2],b}function Wt(i,h){const d=h??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(i,h,d){const b=d??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function j(i,h){const d=h??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function g(i,h,d){const b=d??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],b[8]=h*i[2*4+0],b[9]=h*i[2*4+1],b[10]=h*i[2*4+2],b}return{add:V,clone:Z,copy:q,create:E,determinant:z,equals:F,equalsApproximately:J,fromMat4:C,fromQuat:M,get3DScaling:Vt,getAxis:Y,getScaling:bt,getTranslation:Q,identity:O,inverse:lt,invert:R,mul:ct,mulScalar:L,multiply:U,multiplyScalar:A,negate:G,rotate:Et,rotateX:H,rotateY:It,rotateZ:zt,rotation:ft,rotationX:yt,rotationY:rt,rotationZ:Mt,scale:Ot,scale3D:_t,scaling:Dt,scaling3D:Pt,set:x,setAxis:et,setTranslation:K,translate:Tt,translation:Rt,transpose:$,uniformScale:B,uniformScale3D:g,uniformScaling:Wt,uniformScaling3D:j}}const Ar=new Map;function yl(o){let l=Ar.get(o);return l||(l=xl(o),Ar.set(o,l)),l}function Pl(o){const l=Ln(o);function f(r,m,u,p,a,_,w,v,T,N,W,ut,ot,it,mt,St){const dt=new o(16);return r!==void 0&&(dt[0]=r,m!==void 0&&(dt[1]=m,u!==void 0&&(dt[2]=u,p!==void 0&&(dt[3]=p,a!==void 0&&(dt[4]=a,_!==void 0&&(dt[5]=_,w!==void 0&&(dt[6]=w,v!==void 0&&(dt[7]=v,T!==void 0&&(dt[8]=T,N!==void 0&&(dt[9]=N,W!==void 0&&(dt[10]=W,ut!==void 0&&(dt[11]=ut,ot!==void 0&&(dt[12]=ot,it!==void 0&&(dt[13]=it,mt!==void 0&&(dt[14]=mt,St!==void 0&&(dt[15]=St)))))))))))))))),dt}function E(r,m,u,p,a,_,w,v,T,N,W,ut,ot,it,mt,St,dt){const gt=dt??new o(16);return gt[0]=r,gt[1]=m,gt[2]=u,gt[3]=p,gt[4]=a,gt[5]=_,gt[6]=w,gt[7]=v,gt[8]=T,gt[9]=N,gt[10]=W,gt[11]=ut,gt[12]=ot,gt[13]=it,gt[14]=mt,gt[15]=St,gt}function x(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function C(r,m){const u=m??new o(16),p=r[0],a=r[1],_=r[2],w=r[3],v=p+p,T=a+a,N=_+_,W=p*v,ut=a*v,ot=a*T,it=_*v,mt=_*T,St=_*N,dt=w*v,gt=w*T,Ct=w*N;return u[0]=1-ot-St,u[1]=ut+Ct,u[2]=it-gt,u[3]=0,u[4]=ut-Ct,u[5]=1-W-St,u[6]=mt+dt,u[7]=0,u[8]=it+gt,u[9]=mt-dt,u[10]=1-W-ot,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(r,m){const u=m??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function G(r,m,u){const p=u??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function A(r,m,u){const p=u??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const L=A;function V(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const q=V;function Z(r,m){return Math.abs(r[0]-m[0])<Lt&&Math.abs(r[1]-m[1])<Lt&&Math.abs(r[2]-m[2])<Lt&&Math.abs(r[3]-m[3])<Lt&&Math.abs(r[4]-m[4])<Lt&&Math.abs(r[5]-m[5])<Lt&&Math.abs(r[6]-m[6])<Lt&&Math.abs(r[7]-m[7])<Lt&&Math.abs(r[8]-m[8])<Lt&&Math.abs(r[9]-m[9])<Lt&&Math.abs(r[10]-m[10])<Lt&&Math.abs(r[11]-m[11])<Lt&&Math.abs(r[12]-m[12])<Lt&&Math.abs(r[13]-m[13])<Lt&&Math.abs(r[14]-m[14])<Lt&&Math.abs(r[15]-m[15])<Lt}function J(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function F(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function O(r,m){const u=m??new o(16);if(u===r){let At;return At=r[1],r[1]=r[4],r[4]=At,At=r[2],r[2]=r[8],r[8]=At,At=r[3],r[3]=r[12],r[12]=At,At=r[6],r[6]=r[9],r[9]=At,At=r[7],r[7]=r[13],r[13]=At,At=r[11],r[11]=r[14],r[14]=At,u}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],w=r[0*4+3],v=r[1*4+0],T=r[1*4+1],N=r[1*4+2],W=r[1*4+3],ut=r[2*4+0],ot=r[2*4+1],it=r[2*4+2],mt=r[2*4+3],St=r[3*4+0],dt=r[3*4+1],gt=r[3*4+2],Ct=r[3*4+3];return u[0]=p,u[1]=v,u[2]=ut,u[3]=St,u[4]=a,u[5]=T,u[6]=ot,u[7]=dt,u[8]=_,u[9]=N,u[10]=it,u[11]=gt,u[12]=w,u[13]=W,u[14]=mt,u[15]=Ct,u}function $(r,m){const u=m??new o(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],w=r[0*4+3],v=r[1*4+0],T=r[1*4+1],N=r[1*4+2],W=r[1*4+3],ut=r[2*4+0],ot=r[2*4+1],it=r[2*4+2],mt=r[2*4+3],St=r[3*4+0],dt=r[3*4+1],gt=r[3*4+2],Ct=r[3*4+3],At=it*Ct,X=gt*mt,at=N*Ct,nt=gt*W,pt=N*mt,wt=it*W,xt=_*Ct,ht=gt*w,vt=_*mt,Gt=it*w,Ut=_*W,qt=N*w,Kt=ut*dt,Xt=St*ot,Ht=v*dt,ee=St*T,Qt=v*ot,be=ut*T,fe=p*dt,_e=St*a,me=p*ot,ve=ut*a,Jt=p*T,ue=v*a,ge=At*T+nt*ot+pt*dt-(X*T+at*ot+wt*dt),oe=X*a+xt*ot+Gt*dt-(At*a+ht*ot+vt*dt),we=at*a+ht*T+Ut*dt-(nt*a+xt*T+qt*dt),xe=wt*a+vt*T+qt*ot-(pt*a+Gt*T+Ut*ot),Yt=1/(p*ge+v*oe+ut*we+St*xe);return u[0]=Yt*ge,u[1]=Yt*oe,u[2]=Yt*we,u[3]=Yt*xe,u[4]=Yt*(X*v+at*ut+wt*St-(At*v+nt*ut+pt*St)),u[5]=Yt*(At*p+ht*ut+vt*St-(X*p+xt*ut+Gt*St)),u[6]=Yt*(nt*p+xt*v+qt*St-(at*p+ht*v+Ut*St)),u[7]=Yt*(pt*p+Gt*v+Ut*ut-(wt*p+vt*v+qt*ut)),u[8]=Yt*(Kt*W+ee*mt+Qt*Ct-(Xt*W+Ht*mt+be*Ct)),u[9]=Yt*(Xt*w+fe*mt+ve*Ct-(Kt*w+_e*mt+me*Ct)),u[10]=Yt*(Ht*w+_e*W+Jt*Ct-(ee*w+fe*W+ue*Ct)),u[11]=Yt*(be*w+me*W+ue*mt-(Qt*w+ve*W+Jt*mt)),u[12]=Yt*(Ht*it+be*gt+Xt*N-(Qt*gt+Kt*N+ee*it)),u[13]=Yt*(me*gt+Kt*_+_e*it-(fe*it+ve*gt+Xt*_)),u[14]=Yt*(fe*N+ue*gt+ee*_-(Jt*gt+Ht*_+_e*N)),u[15]=Yt*(Jt*it+Qt*_+ve*N-(me*N+ue*it+be*_)),u}function lt(r){const m=r[0],u=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],w=r[1*4+1],v=r[1*4+2],T=r[1*4+3],N=r[2*4+0],W=r[2*4+1],ut=r[2*4+2],ot=r[2*4+3],it=r[3*4+0],mt=r[3*4+1],St=r[3*4+2],dt=r[3*4+3],gt=ut*dt,Ct=St*ot,At=v*dt,X=St*T,at=v*ot,nt=ut*T,pt=p*dt,wt=St*a,xt=p*ot,ht=ut*a,vt=p*T,Gt=v*a,Ut=gt*w+X*W+at*mt-(Ct*w+At*W+nt*mt),qt=Ct*u+pt*W+ht*mt-(gt*u+wt*W+xt*mt),Kt=At*u+wt*w+vt*mt-(X*u+pt*w+Gt*mt),Xt=nt*u+xt*w+Gt*W-(at*u+ht*w+vt*W);return m*Ut+_*qt+N*Kt+it*Xt}const z=$;function R(r,m,u){const p=u??new o(16),a=r[0],_=r[1],w=r[2],v=r[3],T=r[4+0],N=r[4+1],W=r[4+2],ut=r[4+3],ot=r[8+0],it=r[8+1],mt=r[8+2],St=r[8+3],dt=r[12+0],gt=r[12+1],Ct=r[12+2],At=r[12+3],X=m[0],at=m[1],nt=m[2],pt=m[3],wt=m[4+0],xt=m[4+1],ht=m[4+2],vt=m[4+3],Gt=m[8+0],Ut=m[8+1],qt=m[8+2],Kt=m[8+3],Xt=m[12+0],Ht=m[12+1],ee=m[12+2],Qt=m[12+3];return p[0]=a*X+T*at+ot*nt+dt*pt,p[1]=_*X+N*at+it*nt+gt*pt,p[2]=w*X+W*at+mt*nt+Ct*pt,p[3]=v*X+ut*at+St*nt+At*pt,p[4]=a*wt+T*xt+ot*ht+dt*vt,p[5]=_*wt+N*xt+it*ht+gt*vt,p[6]=w*wt+W*xt+mt*ht+Ct*vt,p[7]=v*wt+ut*xt+St*ht+At*vt,p[8]=a*Gt+T*Ut+ot*qt+dt*Kt,p[9]=_*Gt+N*Ut+it*qt+gt*Kt,p[10]=w*Gt+W*Ut+mt*qt+Ct*Kt,p[11]=v*Gt+ut*Ut+St*qt+At*Kt,p[12]=a*Xt+T*Ht+ot*ee+dt*Qt,p[13]=_*Xt+N*Ht+it*ee+gt*Qt,p[14]=w*Xt+W*Ht+mt*ee+Ct*Qt,p[15]=v*Xt+ut*Ht+St*ee+At*Qt,p}const U=R;function ct(r,m,u){const p=u??F();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function K(r,m){const u=m??l.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function Q(r,m,u){const p=u??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function Y(r,m,u,p){const a=p===r?p:V(r,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function et(r,m){const u=m??l.create(),p=r[0],a=r[1],_=r[2],w=r[4],v=r[5],T=r[6],N=r[8],W=r[9],ut=r[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(w*w+v*v+T*T),u[2]=Math.sqrt(N*N+W*W+ut*ut),u}function bt(r,m,u,p,a){const _=a??new o(16),w=Math.tan(Math.PI*.5-.5*r);if(_[0]=w/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=w,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(u-p);_[10]=p*v,_[14]=p*u*v}else _[10]=-1,_[14]=-u;return _}function Vt(r,m,u,p=1/0,a){const _=a??new o(16),w=1/Math.tan(r*.5);if(_[0]=w/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=w,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const v=1/(p-u);_[10]=u*v,_[14]=p*u*v}return _}function Rt(r,m,u,p,a,_,w){const v=w??new o(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(p+u)/(u-p),v[14]=a/(a-_),v[15]=1,v}function Tt(r,m,u,p,a,_,w){const v=w??new o(16),T=m-r,N=p-u,W=a-_;return v[0]=2*a/T,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/N,v[6]=0,v[7]=0,v[8]=(r+m)/T,v[9]=(p+u)/N,v[10]=_/W,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/W,v[15]=0,v}function ft(r,m,u,p,a,_=1/0,w){const v=w??new o(16),T=m-r,N=p-u;if(v[0]=2*a/T,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/N,v[6]=0,v[7]=0,v[8]=(r+m)/T,v[9]=(p+u)/N,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const W=1/(_-a);v[10]=a*W,v[14]=_*a*W}return v}const Et=l.create(),yt=l.create(),H=l.create();function rt(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(m,r,H),H),l.normalize(l.cross(u,H,Et),Et),l.normalize(l.cross(H,Et,yt),yt),a[0]=Et[0],a[1]=Et[1],a[2]=Et[2],a[3]=0,a[4]=yt[0],a[5]=yt[1],a[6]=yt[2],a[7]=0,a[8]=H[0],a[9]=H[1],a[10]=H[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function It(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,H),H),l.normalize(l.cross(u,H,Et),Et),l.normalize(l.cross(H,Et,yt),yt),a[0]=Et[0],a[1]=Et[1],a[2]=Et[2],a[3]=0,a[4]=yt[0],a[5]=yt[1],a[6]=yt[2],a[7]=0,a[8]=H[0],a[9]=H[1],a[10]=H[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Mt(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,H),H),l.normalize(l.cross(u,H,Et),Et),l.normalize(l.cross(H,Et,yt),yt),a[0]=Et[0],a[1]=yt[0],a[2]=H[0],a[3]=0,a[4]=Et[1],a[5]=yt[1],a[6]=H[1],a[7]=0,a[8]=Et[2],a[9]=yt[2],a[10]=H[2],a[11]=0,a[12]=-(Et[0]*r[0]+Et[1]*r[1]+Et[2]*r[2]),a[13]=-(yt[0]*r[0]+yt[1]*r[1]+yt[2]*r[2]),a[14]=-(H[0]*r[0]+H[1]*r[1]+H[2]*r[2]),a[15]=1,a}function zt(r,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function Dt(r,m,u){const p=u??new o(16),a=m[0],_=m[1],w=m[2],v=r[0],T=r[1],N=r[2],W=r[3],ut=r[1*4+0],ot=r[1*4+1],it=r[1*4+2],mt=r[1*4+3],St=r[2*4+0],dt=r[2*4+1],gt=r[2*4+2],Ct=r[2*4+3],At=r[3*4+0],X=r[3*4+1],at=r[3*4+2],nt=r[3*4+3];return r!==p&&(p[0]=v,p[1]=T,p[2]=N,p[3]=W,p[4]=ut,p[5]=ot,p[6]=it,p[7]=mt,p[8]=St,p[9]=dt,p[10]=gt,p[11]=Ct),p[12]=v*a+ut*_+St*w+At,p[13]=T*a+ot*_+dt*w+X,p[14]=N*a+it*_+gt*w+at,p[15]=W*a+mt*_+Ct*w+nt,p}function Ot(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Pt(r,m,u){const p=u??new o(16),a=r[4],_=r[5],w=r[6],v=r[7],T=r[8],N=r[9],W=r[10],ut=r[11],ot=Math.cos(m),it=Math.sin(m);return p[4]=ot*a+it*T,p[5]=ot*_+it*N,p[6]=ot*w+it*W,p[7]=ot*v+it*ut,p[8]=ot*T-it*a,p[9]=ot*N-it*_,p[10]=ot*W-it*w,p[11]=ot*ut-it*v,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function _t(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Wt(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],w=r[0*4+2],v=r[0*4+3],T=r[2*4+0],N=r[2*4+1],W=r[2*4+2],ut=r[2*4+3],ot=Math.cos(m),it=Math.sin(m);return p[0]=ot*a-it*T,p[1]=ot*_-it*N,p[2]=ot*w-it*W,p[3]=ot*v-it*ut,p[8]=ot*T+it*a,p[9]=ot*N+it*_,p[10]=ot*W+it*w,p[11]=ot*ut+it*v,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function j(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],w=r[0*4+2],v=r[0*4+3],T=r[1*4+0],N=r[1*4+1],W=r[1*4+2],ut=r[1*4+3],ot=Math.cos(m),it=Math.sin(m);return p[0]=ot*a+it*T,p[1]=ot*_+it*N,p[2]=ot*w+it*W,p[3]=ot*v+it*ut,p[4]=ot*T-it*a,p[5]=ot*N-it*_,p[6]=ot*W-it*w,p[7]=ot*ut-it*v,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function g(r,m,u){const p=u??new o(16);let a=r[0],_=r[1],w=r[2];const v=Math.sqrt(a*a+_*_+w*w);a/=v,_/=v,w/=v;const T=a*a,N=_*_,W=w*w,ut=Math.cos(m),ot=Math.sin(m),it=1-ut;return p[0]=T+(1-T)*ut,p[1]=a*_*it+w*ot,p[2]=a*w*it-_*ot,p[3]=0,p[4]=a*_*it-w*ot,p[5]=N+(1-N)*ut,p[6]=_*w*it+a*ot,p[7]=0,p[8]=a*w*it+_*ot,p[9]=_*w*it-a*ot,p[10]=W+(1-W)*ut,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=g;function h(r,m,u,p){const a=p??new o(16);let _=m[0],w=m[1],v=m[2];const T=Math.sqrt(_*_+w*w+v*v);_/=T,w/=T,v/=T;const N=_*_,W=w*w,ut=v*v,ot=Math.cos(u),it=Math.sin(u),mt=1-ot,St=N+(1-N)*ot,dt=_*w*mt+v*it,gt=_*v*mt-w*it,Ct=_*w*mt-v*it,At=W+(1-W)*ot,X=w*v*mt+_*it,at=_*v*mt+w*it,nt=w*v*mt-_*it,pt=ut+(1-ut)*ot,wt=r[0],xt=r[1],ht=r[2],vt=r[3],Gt=r[4],Ut=r[5],qt=r[6],Kt=r[7],Xt=r[8],Ht=r[9],ee=r[10],Qt=r[11];return a[0]=St*wt+dt*Gt+gt*Xt,a[1]=St*xt+dt*Ut+gt*Ht,a[2]=St*ht+dt*qt+gt*ee,a[3]=St*vt+dt*Kt+gt*Qt,a[4]=Ct*wt+At*Gt+X*Xt,a[5]=Ct*xt+At*Ut+X*Ht,a[6]=Ct*ht+At*qt+X*ee,a[7]=Ct*vt+At*Kt+X*Qt,a[8]=at*wt+nt*Gt+pt*Xt,a[9]=at*xt+nt*Ut+pt*Ht,a[10]=at*ht+nt*qt+pt*ee,a[11]=at*vt+nt*Kt+pt*Qt,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const d=h;function b(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(r,m,u){const p=u??new o(16),a=m[0],_=m[1],w=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=w*r[2*4+0],p[9]=w*r[2*4+1],p[10]=w*r[2*4+2],p[11]=w*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function S(r,m){const u=m??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,m,u){const p=u??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:G,aim:rt,axisRotate:h,axisRotation:g,cameraAim:It,clone:q,copy:V,create:f,determinant:lt,equals:J,equalsApproximately:Z,fromMat3:x,fromQuat:C,frustum:Tt,frustumReverseZ:ft,getAxis:Q,getScaling:et,getTranslation:K,identity:F,inverse:$,invert:z,lookAt:Mt,mul:U,mulScalar:L,multiply:R,multiplyScalar:A,negate:M,ortho:Rt,perspective:bt,perspectiveReverseZ:Vt,rotate:d,rotateX:Pt,rotateY:Wt,rotateZ:j,rotation:i,rotationX:Ot,rotationY:_t,rotationZ:B,scale:y,scaling:b,set:E,setAxis:Y,setTranslation:ct,translate:Dt,translation:zt,transpose:O,uniformScale:k,uniformScaling:S}}const Rr=new Map;function Sl(o){let l=Rr.get(o);return l||(l=Pl(o),Rr.set(o,l)),l}function kl(o){const l=Ln(o);function f(B,j,g,i){const h=new o(4);return B!==void 0&&(h[0]=B,j!==void 0&&(h[1]=j,g!==void 0&&(h[2]=g,i!==void 0&&(h[3]=i)))),h}const E=f;function x(B,j,g,i,h){const d=h??new o(4);return d[0]=B,d[1]=j,d[2]=g,d[3]=i,d}function C(B,j,g){const i=g??new o(4),h=j*.5,d=Math.sin(h);return i[0]=d*B[0],i[1]=d*B[1],i[2]=d*B[2],i[3]=Math.cos(h),i}function M(B,j){const g=j??l.create(3),i=Math.acos(B[3])*2,h=Math.sin(i*.5);return h>Lt?(g[0]=B[0]/h,g[1]=B[1]/h,g[2]=B[2]/h):(g[0]=1,g[1]=0,g[2]=0),{angle:i,axis:g}}function G(B,j){const g=bt(B,j);return Math.acos(2*g*g-1)}function A(B,j,g){const i=g??new o(4),h=B[0],d=B[1],b=B[2],y=B[3],S=j[0],k=j[1],r=j[2],m=j[3];return i[0]=h*m+y*S+d*r-b*k,i[1]=d*m+y*k+b*S-h*r,i[2]=b*m+y*r+h*k-d*S,i[3]=y*m-h*S-d*k-b*r,i}const L=A;function V(B,j,g){const i=g??new o(4),h=j*.5,d=B[0],b=B[1],y=B[2],S=B[3],k=Math.sin(h),r=Math.cos(h);return i[0]=d*r+S*k,i[1]=b*r+y*k,i[2]=y*r-b*k,i[3]=S*r-d*k,i}function q(B,j,g){const i=g??new o(4),h=j*.5,d=B[0],b=B[1],y=B[2],S=B[3],k=Math.sin(h),r=Math.cos(h);return i[0]=d*r-y*k,i[1]=b*r+S*k,i[2]=y*r+d*k,i[3]=S*r-b*k,i}function Z(B,j,g){const i=g??new o(4),h=j*.5,d=B[0],b=B[1],y=B[2],S=B[3],k=Math.sin(h),r=Math.cos(h);return i[0]=d*r+b*k,i[1]=b*r-d*k,i[2]=y*r+S*k,i[3]=S*r-y*k,i}function J(B,j,g,i){const h=i??new o(4),d=B[0],b=B[1],y=B[2],S=B[3];let k=j[0],r=j[1],m=j[2],u=j[3],p=d*k+b*r+y*m+S*u;p<0&&(p=-p,k=-k,r=-r,m=-m,u=-u);let a,_;if(1-p>Lt){const w=Math.acos(p),v=Math.sin(w);a=Math.sin((1-g)*w)/v,_=Math.sin(g*w)/v}else a=1-g,_=g;return h[0]=a*d+_*k,h[1]=a*b+_*r,h[2]=a*y+_*m,h[3]=a*S+_*u,h}function F(B,j){const g=j??new o(4),i=B[0],h=B[1],d=B[2],b=B[3],y=i*i+h*h+d*d+b*b,S=y?1/y:0;return g[0]=-i*S,g[1]=-h*S,g[2]=-d*S,g[3]=b*S,g}function O(B,j){const g=j??new o(4);return g[0]=-B[0],g[1]=-B[1],g[2]=-B[2],g[3]=B[3],g}function $(B,j){const g=j??new o(4),i=B[0]+B[5]+B[10];if(i>0){const h=Math.sqrt(i+1);g[3]=.5*h;const d=.5/h;g[0]=(B[6]-B[9])*d,g[1]=(B[8]-B[2])*d,g[2]=(B[1]-B[4])*d}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const d=(h+1)%3,b=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[d*4+d]-B[b*4+b]+1);g[h]=.5*y;const S=.5/y;g[3]=(B[d*4+b]-B[b*4+d])*S,g[d]=(B[d*4+h]+B[h*4+d])*S,g[b]=(B[b*4+h]+B[h*4+b])*S}return g}function lt(B,j,g,i,h){const d=h??new o(4),b=B*.5,y=j*.5,S=g*.5,k=Math.sin(b),r=Math.cos(b),m=Math.sin(y),u=Math.cos(y),p=Math.sin(S),a=Math.cos(S);switch(i){case"xyz":d[0]=k*u*a+r*m*p,d[1]=r*m*a-k*u*p,d[2]=r*u*p+k*m*a,d[3]=r*u*a-k*m*p;break;case"xzy":d[0]=k*u*a-r*m*p,d[1]=r*m*a-k*u*p,d[2]=r*u*p+k*m*a,d[3]=r*u*a+k*m*p;break;case"yxz":d[0]=k*u*a+r*m*p,d[1]=r*m*a-k*u*p,d[2]=r*u*p-k*m*a,d[3]=r*u*a+k*m*p;break;case"yzx":d[0]=k*u*a+r*m*p,d[1]=r*m*a+k*u*p,d[2]=r*u*p-k*m*a,d[3]=r*u*a-k*m*p;break;case"zxy":d[0]=k*u*a-r*m*p,d[1]=r*m*a+k*u*p,d[2]=r*u*p+k*m*a,d[3]=r*u*a-k*m*p;break;case"zyx":d[0]=k*u*a-r*m*p,d[1]=r*m*a+k*u*p,d[2]=r*u*p-k*m*a,d[3]=r*u*a+k*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function z(B,j){const g=j??new o(4);return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g}const R=z;function U(B,j,g){const i=g??new o(4);return i[0]=B[0]+j[0],i[1]=B[1]+j[1],i[2]=B[2]+j[2],i[3]=B[3]+j[3],i}function ct(B,j,g){const i=g??new o(4);return i[0]=B[0]-j[0],i[1]=B[1]-j[1],i[2]=B[2]-j[2],i[3]=B[3]-j[3],i}const K=ct;function Q(B,j,g){const i=g??new o(4);return i[0]=B[0]*j,i[1]=B[1]*j,i[2]=B[2]*j,i[3]=B[3]*j,i}const Y=Q;function et(B,j,g){const i=g??new o(4);return i[0]=B[0]/j,i[1]=B[1]/j,i[2]=B[2]/j,i[3]=B[3]/j,i}function bt(B,j){return B[0]*j[0]+B[1]*j[1]+B[2]*j[2]+B[3]*j[3]}function Vt(B,j,g,i){const h=i??new o(4);return h[0]=B[0]+g*(j[0]-B[0]),h[1]=B[1]+g*(j[1]-B[1]),h[2]=B[2]+g*(j[2]-B[2]),h[3]=B[3]+g*(j[3]-B[3]),h}function Rt(B){const j=B[0],g=B[1],i=B[2],h=B[3];return Math.sqrt(j*j+g*g+i*i+h*h)}const Tt=Rt;function ft(B){const j=B[0],g=B[1],i=B[2],h=B[3];return j*j+g*g+i*i+h*h}const Et=ft;function yt(B,j){const g=j??new o(4),i=B[0],h=B[1],d=B[2],b=B[3],y=Math.sqrt(i*i+h*h+d*d+b*b);return y>1e-5?(g[0]=i/y,g[1]=h/y,g[2]=d/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function H(B,j){return Math.abs(B[0]-j[0])<Lt&&Math.abs(B[1]-j[1])<Lt&&Math.abs(B[2]-j[2])<Lt&&Math.abs(B[3]-j[3])<Lt}function rt(B,j){return B[0]===j[0]&&B[1]===j[1]&&B[2]===j[2]&&B[3]===j[3]}function It(B){const j=B??new o(4);return j[0]=0,j[1]=0,j[2]=0,j[3]=1,j}const Mt=l.create(),zt=l.create(),Dt=l.create();function Ot(B,j,g){const i=g??new o(4),h=l.dot(B,j);return h<-.999999?(l.cross(zt,B,Mt),l.len(Mt)<1e-6&&l.cross(Dt,B,Mt),l.normalize(Mt,Mt),C(Mt,Math.PI,i),i):h>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(B,j,Mt),i[0]=Mt[0],i[1]=Mt[1],i[2]=Mt[2],i[3]=1+h,yt(i,i))}const Pt=new o(4),_t=new o(4);function Wt(B,j,g,i,h,d){const b=d??new o(4);return J(B,i,h,Pt),J(j,g,h,_t),J(Pt,_t,2*h*(1-h),b),b}return{create:f,fromValues:E,set:x,fromAxisAngle:C,toAxisAngle:M,angle:G,multiply:A,mul:L,rotateX:V,rotateY:q,rotateZ:Z,slerp:J,inverse:F,conjugate:O,fromMat:$,fromEuler:lt,copy:z,clone:R,add:U,subtract:ct,sub:K,mulScalar:Q,scale:Y,divScalar:et,dot:bt,lerp:Vt,length:Rt,len:Tt,lengthSq:ft,lenSq:Et,normalize:yt,equalsApproximately:H,equals:rt,identity:It,rotationTo:Ot,sqlerp:Wt}}const Ir=new Map;function El(o){let l=Ir.get(o);return l||(l=kl(o),Ir.set(o,l)),l}function Cl(o){function l(g,i,h,d){const b=new o(4);return g!==void 0&&(b[0]=g,i!==void 0&&(b[1]=i,h!==void 0&&(b[2]=h,d!==void 0&&(b[3]=d)))),b}const f=l;function E(g,i,h,d,b){const y=b??new o(4);return y[0]=g,y[1]=i,y[2]=h,y[3]=d,y}function x(g,i){const h=i??new o(4);return h[0]=Math.ceil(g[0]),h[1]=Math.ceil(g[1]),h[2]=Math.ceil(g[2]),h[3]=Math.ceil(g[3]),h}function C(g,i){const h=i??new o(4);return h[0]=Math.floor(g[0]),h[1]=Math.floor(g[1]),h[2]=Math.floor(g[2]),h[3]=Math.floor(g[3]),h}function M(g,i){const h=i??new o(4);return h[0]=Math.round(g[0]),h[1]=Math.round(g[1]),h[2]=Math.round(g[2]),h[3]=Math.round(g[3]),h}function G(g,i=0,h=1,d){const b=d??new o(4);return b[0]=Math.min(h,Math.max(i,g[0])),b[1]=Math.min(h,Math.max(i,g[1])),b[2]=Math.min(h,Math.max(i,g[2])),b[3]=Math.min(h,Math.max(i,g[3])),b}function A(g,i,h){const d=h??new o(4);return d[0]=g[0]+i[0],d[1]=g[1]+i[1],d[2]=g[2]+i[2],d[3]=g[3]+i[3],d}function L(g,i,h,d){const b=d??new o(4);return b[0]=g[0]+i[0]*h,b[1]=g[1]+i[1]*h,b[2]=g[2]+i[2]*h,b[3]=g[3]+i[3]*h,b}function V(g,i,h){const d=h??new o(4);return d[0]=g[0]-i[0],d[1]=g[1]-i[1],d[2]=g[2]-i[2],d[3]=g[3]-i[3],d}const q=V;function Z(g,i){return Math.abs(g[0]-i[0])<Lt&&Math.abs(g[1]-i[1])<Lt&&Math.abs(g[2]-i[2])<Lt&&Math.abs(g[3]-i[3])<Lt}function J(g,i){return g[0]===i[0]&&g[1]===i[1]&&g[2]===i[2]&&g[3]===i[3]}function F(g,i,h,d){const b=d??new o(4);return b[0]=g[0]+h*(i[0]-g[0]),b[1]=g[1]+h*(i[1]-g[1]),b[2]=g[2]+h*(i[2]-g[2]),b[3]=g[3]+h*(i[3]-g[3]),b}function O(g,i,h,d){const b=d??new o(4);return b[0]=g[0]+h[0]*(i[0]-g[0]),b[1]=g[1]+h[1]*(i[1]-g[1]),b[2]=g[2]+h[2]*(i[2]-g[2]),b[3]=g[3]+h[3]*(i[3]-g[3]),b}function $(g,i,h){const d=h??new o(4);return d[0]=Math.max(g[0],i[0]),d[1]=Math.max(g[1],i[1]),d[2]=Math.max(g[2],i[2]),d[3]=Math.max(g[3],i[3]),d}function lt(g,i,h){const d=h??new o(4);return d[0]=Math.min(g[0],i[0]),d[1]=Math.min(g[1],i[1]),d[2]=Math.min(g[2],i[2]),d[3]=Math.min(g[3],i[3]),d}function z(g,i,h){const d=h??new o(4);return d[0]=g[0]*i,d[1]=g[1]*i,d[2]=g[2]*i,d[3]=g[3]*i,d}const R=z;function U(g,i,h){const d=h??new o(4);return d[0]=g[0]/i,d[1]=g[1]/i,d[2]=g[2]/i,d[3]=g[3]/i,d}function ct(g,i){const h=i??new o(4);return h[0]=1/g[0],h[1]=1/g[1],h[2]=1/g[2],h[3]=1/g[3],h}const K=ct;function Q(g,i){return g[0]*i[0]+g[1]*i[1]+g[2]*i[2]+g[3]*i[3]}function Y(g){const i=g[0],h=g[1],d=g[2],b=g[3];return Math.sqrt(i*i+h*h+d*d+b*b)}const et=Y;function bt(g){const i=g[0],h=g[1],d=g[2],b=g[3];return i*i+h*h+d*d+b*b}const Vt=bt;function Rt(g,i){const h=g[0]-i[0],d=g[1]-i[1],b=g[2]-i[2],y=g[3]-i[3];return Math.sqrt(h*h+d*d+b*b+y*y)}const Tt=Rt;function ft(g,i){const h=g[0]-i[0],d=g[1]-i[1],b=g[2]-i[2],y=g[3]-i[3];return h*h+d*d+b*b+y*y}const Et=ft;function yt(g,i){const h=i??new o(4),d=g[0],b=g[1],y=g[2],S=g[3],k=Math.sqrt(d*d+b*b+y*y+S*S);return k>1e-5?(h[0]=d/k,h[1]=b/k,h[2]=y/k,h[3]=S/k):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function H(g,i){const h=i??new o(4);return h[0]=-g[0],h[1]=-g[1],h[2]=-g[2],h[3]=-g[3],h}function rt(g,i){const h=i??new o(4);return h[0]=g[0],h[1]=g[1],h[2]=g[2],h[3]=g[3],h}const It=rt;function Mt(g,i,h){const d=h??new o(4);return d[0]=g[0]*i[0],d[1]=g[1]*i[1],d[2]=g[2]*i[2],d[3]=g[3]*i[3],d}const zt=Mt;function Dt(g,i,h){const d=h??new o(4);return d[0]=g[0]/i[0],d[1]=g[1]/i[1],d[2]=g[2]/i[2],d[3]=g[3]/i[3],d}const Ot=Dt;function Pt(g){const i=g??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function _t(g,i,h){const d=h??new o(4),b=g[0],y=g[1],S=g[2],k=g[3];return d[0]=i[0]*b+i[4]*y+i[8]*S+i[12]*k,d[1]=i[1]*b+i[5]*y+i[9]*S+i[13]*k,d[2]=i[2]*b+i[6]*y+i[10]*S+i[14]*k,d[3]=i[3]*b+i[7]*y+i[11]*S+i[15]*k,d}function Wt(g,i,h){const d=h??new o(4);return yt(g,d),z(d,i,d)}function B(g,i,h){const d=h??new o(4);return Y(g)>i?Wt(g,i,d):rt(g,d)}function j(g,i,h){const d=h??new o(4);return F(g,i,.5,d)}return{create:l,fromValues:f,set:E,ceil:x,floor:C,round:M,clamp:G,add:A,addScaled:L,subtract:V,sub:q,equalsApproximately:Z,equals:J,lerp:F,lerpV:O,max:$,min:lt,mulScalar:z,scale:R,divScalar:U,inverse:ct,invert:K,dot:Q,length:Y,len:et,lengthSq:bt,lenSq:Vt,distance:Rt,dist:Tt,distanceSq:ft,distSq:Et,normalize:yt,negate:H,copy:rt,clone:It,multiply:Mt,mul:zt,divide:Dt,div:Ot,zero:Pt,transformMat4:_t,setLength:Wt,truncate:B,midpoint:j}}const Lr=new Map;function Ml(o){let l=Lr.get(o);return l||(l=Cl(o),Lr.set(o,l)),l}function fs(o,l,f,E,x,C){return{mat3:yl(o),mat4:Sl(l),quat:El(f),vec2:jr(E),vec3:Ln(x),vec4:Ml(C)}}const{mat3:he,mat4:jt,quat:se,vec2:Ur,vec3:I,vec4:Uc}=fs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);fs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);fs(vl,Array,Array,Array,Array,Array);const Vr=document.querySelector("#log");let le=null,We=null;function Kr(){if(le)return le;le=document.createElement("div"),le.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",le.appendChild(o),We=document.createElement("div"),We.className="ply-spinner-label",le.appendChild(We),le.style.display="none",document.body.appendChild(le),le}function _s(o){Kr(),We&&o&&(We.textContent=o),le&&(le.style.opacity="1",le.style.display="flex")}function Ne(o){Kr(),We&&(We.textContent=o)}function gn(){if(!le)return;const o=le;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Hr(o,l){if(!Vr)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),Vr.appendChild(f)}async function ie(o){console.log(o),Hr(o)}async function Bl(o){console.error(o),Hr(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Yr;function Zr(){Yr=performance.now()}function Gr(o){const l=performance.now()-Yr;ie(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Dl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function en(o){return o+3&-4}const Tl=2,Al=3,wn=5,$e=6,xn=7;function Rl(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const E=new DataView(o),x=4,C=E.getUint32(x+0,!0),M=E.getUint32(x+4,!0),G=E.getUint32(x+8,!0),A=E.getUint32(x+12,!0),L=E.getUint32(x+16,!0),V=E.getFloat32(x+20,!0),q=E.getUint32(x+24,!0),Z=E.getUint32(x+28,!0),J=E.getFloat32(x+32,!0),F=E.getFloat32(x+36,!0),O=E.getFloat32(x+40,!0),$=E.getUint32(x+44,!0),lt=E.getFloat32(x+48,!0),z=E.getFloat32(x+52,!0),R=E.getUint32(x+56,!0),U=E.getUint32(x+60,!0),ct=U>0?U:1;if(Z!==Tl&&Z!==Al&&Z!==wn&&Z!==$e&&Z!==xn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Z}`);if(Z!==wn&&Z!==$e&&(C%4!==0||$%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${$}`);let K=x+64;const Q=(R+1)*4,Y=new Uint32Array(o.slice(K,K+Q));K+=Q;let et;if(ct>1){const H=(ct+1)*4;if(K+H>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${H} from ${K})`);et=new Uint32Array(o.slice(K,K+H)),K+=H}else et=new Uint32Array([0,C]);let bt=0;for(let H=0;H<ct;H++){const rt=et[H+1]-et[H];rt>bt&&(bt=rt)}const Vt=L*4*4;if(K+Vt>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Vt} more bytes from offset ${K}, have ${o.byteLength-K}`);const Rt=new Float32Array(o.slice(K,K+Vt));K+=Vt;const Tt=new Float32Array(L*5);for(let H=0;H<L;H++){const rt=Rt[H*4+0],It=Rt[H*4+1],Mt=Rt[H*4+2],zt=Rt[H*4+3];let Dt=0;for(let B=1;B<=R&&Y[B]<=It;B++)Dt=B;let Ot=0;for(let B=1;B<=ct&&et[B]<=rt;B++)Ot=B;const Pt=It-Y[Dt],_t=rt-et[Ot],Wt=Ot*R+Dt;Tt[H*5+0]=_t,Tt[H*5+1]=Pt,Tt[H*5+2]=Mt,Tt[H*5+3]=zt,Tt[H*5+4]=Wt}if(Z===wn||Z===$e){if(K+24>o.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const H=l.decode(new Uint8Array(o,K,4));if(H!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${H}'`);const rt=E.getUint32(K+4,!0),It=E.getUint32(K+8,!0),Mt=E.getUint32(K+12,!0),zt=E.getUint32(K+16,!0),Dt=E.getUint32(K+20,!0);if(rt!==1)throw new Error(`NAT2 RVQP unsupported version ${rt}`);if(zt!==L)throw new Error(`NAT2 RVQP num_rects ${zt} != header num_rects ${L}`);if(K+=24,K+16>o.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const Ot=new Float32Array(o.slice(K,K+8)),Pt=new Float32Array(o.slice(K+8,K+16));K+=16;const _t=It*Mt,Wt=2*It*Mt,B=Z===$e?(_t>>2)*(Wt>>2)*16:_t*Wt*4;if(K+B>o.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${o.byteLength-K})`);const j=new Uint8Array(o.slice(K,K+B));K+=B;const g=Dt*4;if(K+g>o.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${o.byteLength-K})`);const i=new Uint32Array(o.slice(K,K+g));K+=g;const h=(L+1)*4;if(K+h>o.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${o.byteLength-K})`);const d=new Uint32Array(o.slice(K,K+h));return K+=h,{width:C,height:M,channels:G,kernel_type:A,num_rects:L,uv_extent:V,sb_number:q,format:Z,sh_bias:J,res_bias:F,compact_mult:O,layer_h:$,atlas_scale:lt,atlas_offset:z,n_layers:R,n_cols:ct,layer_cuts:Y,column_cuts:et,slice_width:bt,rects_expanded:Tt,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:It,B:Mt,N_used:Dt,pair_scale:Ot,pair_offset:Pt,codebook_image:j,packed_indices:i,surfel_offsets:d}}}let ft;const yt=C/4*16;if(Z===xn){if(K+24>o.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const H=l.decode(new Uint8Array(o,K,4));if(H!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${H}'`);const rt=E.getUint32(K+4,!0),It=E.getUint32(K+8,!0),Mt=E.getUint32(K+12,!0),zt=E.getUint32(K+16,!0),Dt=E.getUint32(K+20,!0);if(rt!==1)throw new Error(`NAT2 BCCB unsupported version ${rt}`);if(Mt!==M/4||zt!==C/4||Dt!==Mt*zt)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${M}, sub-header ${zt}×${Mt} (${Dt} blocks)`);K+=24;const Ot=It*16;if(K+Ot>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Ot}, have ${o.byteLength-K})`);const Pt=new Uint8Array(o,K,Ot);K+=Ot;const _t=Dt*2;if(K+_t>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${_t}, have ${o.byteLength-K})`);const Wt=new Uint16Array(o.slice(K,K+_t));K+=_t;const B=new Uint8Array(Dt*16);for(let j=0;j<Dt;j++){const g=Wt[j]*16;B.set(Pt.subarray(g,g+16),j*16)}ft=B}else{let H=0;for(let rt=0;rt<R;rt++){const It=Y[rt+1]-Y[rt];if(It%4!==0)throw new Error(`NAT2 BC7 layer ${rt} rows ${It} not 4-aligned`);H+=It/4*yt}if(K+H>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${H} more bytes from offset ${K}, have ${o.byteLength-K}`);ft=new Uint8Array(o.slice(K,K+H))}return{width:C,height:M,channels:G,kernel_type:A,num_rects:L,uv_extent:V,sb_number:q,format:Z,sh_bias:J,res_bias:F,compact_mult:O,layer_h:$,atlas_scale:lt,atlas_offset:z,n_layers:R,n_cols:ct,layer_cuts:Y,column_cuts:et,slice_width:bt,rects_expanded:Tt,atlas_bytes:ft}}const Il=32;function Ll(o){const l=o.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:f,sampler:E}}function Ul(o){const l=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d"}),E=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),x=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),C=x.createView({dimension:"2d"}),M=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:f,cbSamp:E,packedTex:x,packedView:C,offsetsBuf:M}}function Vl(o,l,f){const E=l.format===wn||l.format===$e,x=l.format===$e;let C,M,G,A;if(E){const z=Ll(o);C=z.tex,M=z.view,G=z.sampler,A="RVQ-paired atlas"}else if(l.format===2||l.format===xn){if(!o.features.has("texture-compression-bc"))return ie(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;A=l.format===xn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:C,view:M,sampler:G}=zr(o,l,"bc7-rgba-unorm",A)}else if(l.format===3){if(!o.features.has("texture-compression-astc"))return ie("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;A="ASTC 4x4 atlas",{texture:C,view:M,sampler:G}=zr(o,l,"astc-4x4-unorm",A)}else return ie(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:L}=l,V=o.createBuffer({label:"atlas rects (5-stride)",size:en(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(V,0,L);let q,Z,J,F,O,$;if(E){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const z=l.rvq_paired,R=z.K_orig*z.B,U=2*z.K_orig*z.B;if(R>o.limits.maxTextureDimension2D||U>o.limits.maxTextureDimension2D)return ie(`⚠️  RVQ codebook ${R}x${U} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;let ct,K;if(x){if(!o.features.has("texture-compression-bc"))return ie("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ct="bc7-rgba-unorm",K=(R>>2)*16}else ct="rgba8unorm",K=R*4;const Q=o.createTexture({label:x?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:R,height:U,depthOrArrayLayers:1},format:ct,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});o.queue.writeTexture({texture:Q},z.codebook_image,{offset:0,bytesPerRow:K,rowsPerImage:U},{width:R,height:U,depthOrArrayLayers:1}),q=Q,Z=Q.createView({dimension:"2d"}),J=o.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const Y=8192,et=z.N_used,bt=Math.ceil(et/Y);if(bt>o.limits.maxTextureDimension2D||Y>o.limits.maxTextureDimension2D)return ie(`⚠️  RVQ packed_indices texture ${Y}x${bt} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;F=o.createTexture({label:"rvq packed_indices (r32uint)",size:{width:Y,height:bt,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Vt=Y*bt;let Rt;if(Vt===et)Rt=new Uint8Array(z.packed_indices.buffer,z.packed_indices.byteOffset,z.packed_indices.byteLength);else{const Tt=new Uint32Array(Vt);Tt.set(z.packed_indices),Rt=new Uint8Array(Tt.buffer)}o.queue.writeTexture({texture:F},Rt,{offset:0,bytesPerRow:Y*4,rowsPerImage:bt},{width:Y,height:bt,depthOrArrayLayers:1}),O=F.createView({dimension:"2d"}),$=o.createBuffer({label:"rvq surfel_offsets",size:en(z.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer($,0,z.surfel_offsets),ie(`🪡 RVQ-paired atlas wired: codebook ${R}x${U} (${(z.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${et.toLocaleString()} packed indices as r32uint ${Y}x${bt} (${(z.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${z.surfel_offsets.length} surfel_offsets`)}else{const z=Ul(o);q=z.cbTex,Z=z.cbView,J=z.cbSamp,F=z.packedTex,O=z.packedView,$=z.offsetsBuf}const lt=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Xr(o,lt,l,f),{texture:C,view:M,sampler:G,rectsBuffer:V,texParamsBuffer:lt,meta:l,rvqCodebookTexture:q,rvqCodebookView:Z,rvqCodebookSampler:J,rvqPackedIndicesTexture:F,rvqPackedIndicesView:O,rvqSurfelOffsetsBuffer:$}}function zr(o,l,f,E){const{width:x,layer_h:C,n_layers:M,n_cols:G,layer_cuts:A,column_cuts:L,slice_width:V,atlas_bytes:q}=l,J=x/4*16,F=o.limits.maxTextureDimension2D;if(C>F||V>F)throw new Error(`⚠️  atlas slice dims ${V}x${C} exceed maxTextureDimension2D=${F}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const O=G*M;if(O>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${G} cols × ${M} layers = ${O} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const $=o.createTexture({label:E,size:{width:V,height:C,depthOrArrayLayers:O},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let R=0;R<G;R++){const U=L[R]/4,ct=(L[R+1]-L[R])/4;for(let K=0;K<M;K++){const Q=A[K]/4,Y=(A[K+1]-A[K])/4,et=R*M+K,bt=Q*J+U*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:et},aspect:"all"},q,{offset:bt,bytesPerRow:J,rowsPerImage:Y},{width:ct*4,height:Y*4,depthOrArrayLayers:1})}}const lt=$.createView({label:`${E} view`,dimension:"2d-array"}),z=o.createSampler({label:`${E} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:$,view:lt,sampler:z}}function Xr(o,l,f,E){const x=new ArrayBuffer(48),C=new Uint32Array(x),M=new Float32Array(x),G=f.slice_width||f.width;C[0]=E?G:0,C[1]=f.layer_h;let A=f.format;A===$e&&(A=wn),A===xn&&(A=2),C[2]=A,M[3]=f.atlas_scale,M[4]=f.atlas_offset,M[5]=f.uv_extent,M[6]=f.res_bias,f.rvq_paired?(C[7]=f.rvq_paired.B,M[8]=f.rvq_paired.pair_scale[0],M[9]=f.rvq_paired.pair_scale[1],M[10]=f.rvq_paired.pair_offset[0],M[11]=f.rvq_paired.pair_offset[1]):(C[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),o.queue.writeBuffer(l,0,x)}async function cs(o,l){ie(`loading ply file from File... : ${o.name}`),_s("downloading PLY...");const f=await o.arrayBuffer();try{return await Qr(f,l)}finally{gn()}}async function Gl(o,l){ie(`loading ply file from URL... : ${o}`),_s("downloading PLY...");try{Zr();const f=new URL(o,self.location.href).href;return await Qr({url:f},l)}finally{gn()}}async function Qr(o,l){return new Promise((f,E)=>{const x=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});x.onmessage=C=>{var G,A,L,V,q,Z,J,F,O,$,lt,z;const M=C.data;if((M==null?void 0:M.type)==="error"){Bl(`PLY worker error: ${M.message??"unknown error"}`),x.terminate(),E(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const R=M.totalBytes,U=M.loadedBytes/(1024*1024),ct=R?R/(1024*1024):void 0,K=(M.speedBps??0)/(1024*1024),Q=R?Math.min(99,Math.floor(M.loadedBytes/R*100)):void 0,Y=ct?`total ${ct.toFixed(1)} MB`:"total -- MB",et=ct&&Q!==void 0?`${U.toFixed(1)} MB downloaded (${Q}%)`:`${U.toFixed(1)} MB downloaded`,bt=`${K.toFixed(2)} MB/s`;Ne(`downloading PLY ...
${Y}, ${et}
${bt}`);return}else if((M==null?void 0:M.type)==="fetched"){ie(`💾 Fetched (${M.byteLength} bytes)`),Gr("Download"),Ne("parsing PLY..."),Zr();return}else if((M==null?void 0:M.type)==="parse_progress"){const R=M.total??0,U=M.read??0,ct=R>0?Math.floor(U/R*100):0;Ne(`parsing PLY ...
${U}/${R} surfels (${ct}%)`);return}else if((M==null?void 0:M.type)==="done"){const R=M.num_points,U=M.K,ct=M.feature_mode??0,K=M.sh_bias,Q=M.kernel_type,Y=M.surfelBuffer,et=M.svParamsBuffer;ie(`🪐 Total surfels: ${R}, mode=${ct===1?"SB":"SV"}, K=${U}, sh_bias=${K}, kernel_type=${Q}`);const Vt=l.createBuffer({label:"surfel input buffer",size:en(R*Il),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Vt,0,Y);const Rt=et.byteLength>0?et.byteLength:16,Tt=l.createBuffer({label:ct===1?"color_params buffer (SB)":"color_params buffer (SV)",size:en(Rt),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});et.byteLength>0&&l.queue.writeBuffer(Tt,0,et),x.terminate(),Gr("Parse"),f({num_points:R,K:U,feature_mode:ct,sh_bias:K,kernel_type:Q,surfel_buffer:Vt,surfel_data:new Float32Array(Y),sv_params_buffer:Tt,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(G=M.bbox)==null?void 0:G.min)==null?void 0:A[0])??-1)+(((V=(L=M.bbox)==null?void 0:L.max)==null?void 0:V[0])??1))/2,((((Z=(q=M.bbox)==null?void 0:q.min)==null?void 0:Z[1])??-1)+(((F=(J=M.bbox)==null?void 0:J.max)==null?void 0:F[1])??1))/2,(((($=(O=M.bbox)==null?void 0:O.min)==null?void 0:$[2])??-1)+(((z=(lt=M.bbox)==null?void 0:lt.max)==null?void 0:z[2])??1))/2]})}},x.onerror=C=>{x.terminate(),E(C)},o instanceof ArrayBuffer?(Ne("parsing PLY..."),x.postMessage({type:"start",plyBuffer:o},[o])):x.postMessage({type:"start_url",url:o.url})})}var zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},us={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,E){E(l)})(zl,function(f){class E{constructor(t){const[e,s]=t.split("-"),c=e.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}class x{constructor(t){this.controller_=t}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(t){this.controller_.viewProps.set("disabled",t)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(t){this.controller_.viewProps.set("hidden",t)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(t){this.target=t}}class M extends C{constructor(t,e,s,c){super(t),this.value=e,this.presetKey=s,this.last=c??!0}}class G extends C{constructor(t,e,s){super(t),this.value=e,this.presetKey=s}}class A extends C{constructor(t,e){super(t),this.expanded=e}}class L extends C{constructor(t,e){super(t),this.index=e}}function V(n){return n}function q(n){return n==null}function Z(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function J(n,t){let e=n;do{const s=Object.getOwnPropertyDescriptor(e,t);if(s&&(s.set!==void 0||s.writable===!0))return!0;e=Object.getPrototypeOf(e)}while(e!==null);return!1}const F={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class O{static alreadyDisposed(){return new O({type:"alreadydisposed"})}static notBindable(){return new O({type:"notbindable"})}static propertyNotFound(t){return new O({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new O({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=F[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}}class ${constructor(t,e,s){this.obj_=t,this.key_=e,this.presetKey_=s??e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(t){this.obj_[this.key_]=t}writeProperty(t,e){const s=this.read();if(!$.isBindable(s))throw O.notBindable();if(!(t in s))throw O.propertyNotFound(t);s[t]=e}}class lt extends x{get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get title(){var t;return(t=this.controller_.valueController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.valueController.props.set("title",t)}on(t,e){const s=e.bind(this);return this.controller_.valueController.emitter.on(t,()=>{s(new C(this))}),this}}class z{constructor(){this.observers_={}}on(t,e){let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e}),this}off(t,e){const s=this.observers_[t];return s&&(this.observers_[t]=s.filter(c=>c.handler!==e)),this}emit(t,e){const s=this.observers_[t];s&&s.forEach(c=>{c.handler(e)})}}const R="tp";function U(n){return(e,s)=>[R,"-",n,"v",e?`_${e}`:"",s?`-${s}`:""].join("")}function ct(n,t){return e=>t(n(e))}function K(n){return n.rawValue}function Q(n,t){n.emitter.on("change",ct(K,t)),t(n.rawValue)}function Y(n,t,e){Q(n.value(t),e)}function et(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function bt(n,t){return e=>{et(n,t,e)}}function Vt(n,t){Q(n,e=>{t.textContent=e??""})}const Rt=U("btn");class Tt{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Rt()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("button");s.classList.add(Rt("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=t.createElement("div");c.classList.add(Rt("t")),Vt(e.props.value("title"),c),this.buttonElement.appendChild(c)}}class ft{constructor(t,e){this.emitter=new z,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Tt(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Et{constructor(t,e){var s;this.constraint_=e==null?void 0:e.constraint,this.equals_=(s=e==null?void 0:e.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new z,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(t):t,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class yt{constructor(t){this.emitter=new z,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e??{forceEmit:!1,last:!0},c=this.value_;c===t&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function H(n,t){const e=t==null?void 0:t.constraint,s=t==null?void 0:t.equals;return!e&&!s?new yt(n):new Et(n,t)}class rt{constructor(t){this.emitter=new z,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((s,c)=>Object.assign(s,{[c]:H(t[c])}),{})}static fromObject(t){const e=this.createCore(t);return new rt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}function It(n,t){const s=Object.keys(t).reduce((c,P)=>{if(c===void 0)return;const D=t[P],st=D(n[P]);return st.succeeded?Object.assign(Object.assign({},c),{[P]:st.value}):void 0},{});return s}function Mt(n,t){return n.reduce((e,s)=>{if(e===void 0)return;const c=t(s);if(!(!c.succeeded||c.value===void 0))return[...e,c.value]},[])}function zt(n){return n===null?!1:typeof n=="object"}function Dt(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const s=n(e);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ot(n){return{custom:t=>Dt(t)(n),boolean:Dt(t=>typeof t=="boolean"?t:void 0)(n),number:Dt(t=>typeof t=="number"?t:void 0)(n),string:Dt(t=>typeof t=="string"?t:void 0)(n),function:Dt(t=>typeof t=="function"?t:void 0)(n),constant:t=>Dt(e=>e===t?t:void 0)(n),raw:Dt(t=>t)(n),object:t=>Dt(e=>{if(zt(e))return It(e,t)})(n),array:t=>Dt(e=>{if(Array.isArray(e))return Mt(e,t)})(n)}}const Pt={optional:Ot(!0),required:Ot(!1)};function _t(n,t){const e=Pt.required.object(t)(n);return e.succeeded?e.value:void 0}function Wt(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class j{constructor(t){this.value_=t}static create(t){return[new j(t),(e,s)=>{t.setRawValue(e,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=U("");function i(n,t){return bt(n,g(void 0,t))}class h extends rt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=j.create(H(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,s,c;const P=t??{};return new h(rt.createCore({disabled:(e=P.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Q(this.globalDisabled_,i(t,"disabled")),Y(this,"hidden",i(t,"hidden"))}bindDisabled(t){Q(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Q(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const s=t.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=U(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class S{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{e.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{e.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(e)})}get parent(){return this.parent_}set parent(t){if(this.parent_=t,!("parent"in this.viewProps.valMap_)){Wt({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const w={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,t){const e=n.createElementNS(k,"svg");return e.innerHTML=w[t],e}function T(n,t,e){n.insertBefore(t,n.children[e])}function N(n){n.parentElement&&n.parentElement.removeChild(n)}function W(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ut(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ot(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const it=U("lbl");function mt(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&e.appendChild(n.createElement("br")),e.appendChild(c)}),e}class St{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(it()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(it("l")),Y(e.props,"label",P=>{q(P)?this.element.classList.add(it(void 0,"nol")):(this.element.classList.remove(it(void 0,"nol")),ut(s),s.appendChild(mt(t,P)))}),this.element.appendChild(s),this.labelElement=s;const c=t.createElement("div");c.classList.add(it("v")),this.element.appendChild(c),this.valueElement=c}}class dt extends S{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{view:new St(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const gt={id:"button",type:"blade",accept(n){const t=Pt,e=_t(n,{title:t.required.string,view:t.required.constant("button"),label:t.optional.string});return e?{params:e}:null},controller(n){return new dt(n.document,{blade:n.blade,props:rt.fromObject({label:n.params.label}),valueController:new ft(n.document,{props:rt.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof dt)||!(n.controller.valueController instanceof ft)?null:new lt(n.controller)}};class Ct extends S{constructor(t){super(t),this.value=t.value}}function At(){return new rt({positions:H([],{equals:Z})})}class X extends rt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=rt.createCore(e);return new X(s)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!q(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const s=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};Y(this,"expanded",s),Y(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function at(n,t){let e=0;return m(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(t),e=t.clientHeight,n.set("temporaryExpanded",null),r(t)}),e}function nt(n,t){t.style.height=n.styleHeight}function pt(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),q(n.get("expandedHeight"))){const e=at(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),r(t)}),n.emitter.on("change",()=>{nt(n,t)}),nt(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class wt extends x{constructor(t,e){super(t),this.rackApi_=e}}function xt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function ht(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function vt(n,t){const e=t??{};return n.addBlade(Object.assign(Object.assign({},e),{view:"separator"}))}function Gt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}class Ut{constructor(t){this.emitter=new z,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw O.shouldNeverHappen();const s=e!==void 0?e:this.items_.length;this.items_.splice(s,0,t),this.cache_.add(t);const c=this.extract_(t);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const s=this.extract_(t);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}class qt extends x{constructor(t){super(t),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new z,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(t){const e=t.sender.target.read();this.emitter_.emit("change",{event:new M(this,e,this.controller_.binding.target.presetKey,t.options.last)})}}class Kt extends dt{constructor(t,e){super(t,e),this.binding=e.binding}}class Xt extends x{constructor(t){super(t),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new z,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(t){const e=t.sender.target.read();this.emitter_.emit("update",{event:new G(this,e,this.controller_.binding.target.presetKey)})}}class Ht extends dt{constructor(t,e){super(t,e),this.binding=e.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ee(n){return n instanceof fe?n.apiSet_:n instanceof wt?n.rackApi_.apiSet_:null}function Qt(n,t){const e=n.find(s=>s.controller_===t);if(!e)throw O.shouldNeverHappen();return e}function be(n,t,e){if(!$.isBindable(n))throw O.notBindable();return new $(n,t,e)}class fe extends x{constructor(t,e){super(t),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new z,this.apiSet_=new Ut(ee),this.pool_=e;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(t=>Qt(this.apiSet_,t))}addInput(t,e,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(P,be(t,e,c.presetKey),c),st=new qt(D);return this.add(st,c.index)}addMonitor(t,e,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(P,be(t,e),c),st=new Xt(D);return this.add(st,c.index)}addFolder(t){return ht(this,t)}addButton(t){return xt(this,t)}addSeparator(t){return vt(this,t)}addTab(t){return Gt(this,t)}add(t,e){this.controller_.rack.add(t.controller_,e);const s=this.apiSet_.find(c=>c.controller_===t.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(t),t}remove(t){this.controller_.rack.remove(t.controller_)}addBlade(t){const e=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(e,t),c=this.pool_.createBladeApi(s);return this.add(c,t.index)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}setUpApi_(t){this.apiSet_.find(s=>s.controller_===t)||this.apiSet_.add(this.pool_.createBladeApi(t))}onRackAdd_(t){this.setUpApi_(t.bladeController)}onRackRemove_(t){if(t.isRoot){const e=Qt(this.apiSet_,t.bladeController);this.apiSet_.remove(e)}}onRackInputChange_(t){const e=t.bladeController;if(e instanceof Kt){const s=Qt(this.apiSet_,e),c=e.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,t.options.last)})}else if(e instanceof Ct){const s=Qt(this.apiSet_,e);this.emitter_.emit("change",{event:new M(s,e.value.rawValue,void 0,t.options.last)})}}onRackMonitorUpdate_(t){if(!(t.bladeController instanceof Ht))throw O.shouldNeverHappen();const e=Qt(this.apiSet_,t.bladeController),s=t.bladeController.binding;this.emitter_.emit("update",{event:new G(e,s.target.read(),s.target.presetKey)})}}class _e extends wt{constructor(t,e){super(t,new fe(t.rackController,e)),this.emitter_=new z,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(t){this.controller_.foldable.set("expanded",t)}get title(){return this.controller_.props.get("title")}set title(t){this.controller_.props.set("title",t)}get children(){return this.rackApi_.children}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}class me extends S{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}}class ve{constructor(t,e){const s=U(e.viewName);this.element=t.createElement("div"),this.element.classList.add(s()),e.viewProps.bindClassModifiers(this.element)}}function Jt(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Kt&&s.binding===t)return s}return null}function ue(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Ht&&s.binding===t)return s}return null}function ge(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Ct&&s.value===t)return s}return null}function oe(n){return n instanceof Yt?n.rack:n instanceof me?n.rackController.rack:null}function we(n){const t=oe(n);return t?t.bcSet_:null}class xe{constructor(t){var e,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new z,this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Ut(we),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var s;(s=t.parent)===null||s===void 0||s.remove(t),J(t,"parent")?t.parent=this:(t.parent_=this,Wt({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(t,e)}remove(t){J(t,"parent")?t.parent=null:(t.parent_=null,Wt({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(e=>e instanceof t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,isRoot:e,sender:this}),!e)return;const s=t.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Kt)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ht)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ct)s.value.emitter.on("change",this.onChildValueChange_);else{const c=oe(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,isRoot:e,sender:this}),!e)return;const s=t.item;if(s instanceof Kt)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ht)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ct)s.value.emitter.off("change",this.onChildValueChange_);else{const c=oe(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const t=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),e=t[0],s=t[t.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===e&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildInputChange_(t){const e=Jt(this.find(Kt),t.sender);if(!e)throw O.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onChildMonitorUpdate_(t){const e=ue(this.find(Ht),t.sender);if(!e)throw O.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:e,sender:this})}onChildValueChange_(t){const e=ge(this.find(Ct),t.sender);if(!e)throw O.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onDescendantLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(t){this.emitter.emit("inputchange",{bladeController:t.bladeController,options:t.options,sender:this})}onDescendantMonitorUpdate_(t){this.emitter.emit("monitorupdate",{bladeController:t.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Yt extends S{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new ve(t,{viewName:"brk",viewProps:e.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new xe({blade:e.root?void 0:e.blade,viewProps:e.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(t){t.isRoot&&T(this.view.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.isRoot&&N(t.bladeController.view.element)}}const je=U("cnt");class li{constructor(t,e){var s;this.className_=U((s=e.viewName)!==null&&s!==void 0?s:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),je()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),Y(this.foldable_,"completed",bt(this.element,this.className_(void 0,"cpl")));const c=t.createElement("button");c.classList.add(this.className_("b")),Y(e.props,"title",Bt=>{q(Bt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=t.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const D=t.createElement("div");D.classList.add(this.className_("t")),Vt(e.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const st=t.createElement("div");st.classList.add(this.className_("m")),this.buttonElement.appendChild(st);const kt=e.containerElement;kt.classList.add(this.className_("c")),this.element.appendChild(kt),this.containerElement=kt}}class Vn extends me{constructor(t,e){var s;const c=X.create((s=e.expanded)!==null&&s!==void 0?s:!0),P=new Yt(t,{blade:e.blade,root:e.root,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:P,view:new li(t,{containerElement:P.view.element,foldable:c,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=c,pt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ci={id:"folder",type:"blade",accept(n){const t=Pt,e=_t(n,{title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean});return e?{params:e}:null},controller(n){return new Vn(n.document,{blade:n.blade,expanded:n.params.expanded,props:rt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Vn?new _e(n.controller,n.pool):null}};class Ke extends Ct{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{value:e.valueController.value,view:new St(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class bs extends x{}const vs=U("spr");class ui{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(vs()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("hr");s.classList.add(vs("r")),this.element.appendChild(s)}}class gs extends S{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new ui(t,{viewProps:e.viewProps})}))}}const di={id:"separator",type:"blade",accept(n){const e=_t(n,{view:Pt.required.constant("separator")});return e?{params:e}:null},controller(n){return new gs(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof gs?new bs(n.controller):null}},nn=U("tbi");class pi{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(nn()),e.viewProps.bindClassModifiers(this.element),Y(e.props,"selected",P=>{P?this.element.classList.add(nn(void 0,"sel")):this.element.classList.remove(nn(void 0,"sel"))});const s=t.createElement("button");s.classList.add(nn("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=t.createElement("div");c.classList.add(nn("t")),Vt(e.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class hi{constructor(t,e){this.emitter=new z,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new pi(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ws{constructor(t,e){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new hi(t,{props:e.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Yt(t,{blade:At(),viewProps:h.create()}),this.props=e.props,Y(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class xs{constructor(t,e){this.controller_=t,this.rackApi_=e}get title(){var t;return(t=this.controller_.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.itemController.props.set("title",t)}get selected(){return this.controller_.props.get("selected")}set selected(t){this.controller_.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addBlade(t){return this.rackApi_.addBlade(t)}}class ys extends wt{constructor(t,e){super(t,new fe(t.rackController,e)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new z,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(t=>{const e=this.pageApiMap_.get(t);if(!e)throw O.shouldNeverHappen();return e})}addPage(t){const e=this.controller_.view.element.ownerDocument,s=new ws(e,{itemProps:rt.fromObject({selected:!1,title:t.title}),props:rt.fromObject({selected:!1})});this.controller_.add(s,t.index);const c=this.pageApiMap_.get(s);if(!c)throw O.shouldNeverHappen();return c}removePage(t){this.controller_.remove(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}setUpPageApi_(t){const e=this.rackApi_.apiSet_.find(c=>c.controller_===t.contentController);if(!e)throw O.shouldNeverHappen();const s=new xs(t,e);this.pageApiMap_.set(t,s)}onPageAdd_(t){this.setUpPageApi_(t.item)}onPageRemove_(t){if(!this.pageApiMap_.get(t.item))throw O.shouldNeverHappen();this.pageApiMap_.delete(t.item)}onSelect_(t){this.emitter_.emit("select",{event:new L(this,t.rawValue)})}}const Ps=-1;class fi{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(Ps),this.items_=[]}add(t,e){const s=e??this.items_.length;this.items_.splice(s,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ps,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,s)=>{e.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,s)=>{e.rawValue=s===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(s=>s===t.sender);this.items_.forEach((s,c)=>{s.rawValue=c===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const sn=U("tab");class _i{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(sn(),je()),e.viewProps.bindClassModifiers(this.element),Q(e.empty,bt(this.element,sn(void 0,"nop")));const s=t.createElement("div");s.classList.add(sn("t")),this.element.appendChild(s),this.itemsElement=s;const c=t.createElement("div");c.classList.add(sn("i")),this.element.appendChild(c);const P=e.contentsElement;P.classList.add(sn("c")),this.element.appendChild(P),this.contentsElement=P}}class Ss extends me{constructor(t,e){const s=new Yt(t,{blade:e.blade,viewProps:e.viewProps}),c=new fi;super({blade:e.blade,rackController:s,view:new _i(t,{contentsElement:s.view.element,empty:c.empty,viewProps:e.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ut(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(t,e){this.pageSet_.add(t,e)}remove(t){this.pageSet_.remove(this.pageSet_.items[t])}onPageAdd_(t){const e=t.item;T(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(e.contentController,t.index),this.tab.add(e.props.value("selected"))}onPageRemove_(t){const e=t.item;N(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.rackController.rack.remove(e.contentController),this.tab.remove(e.props.value("selected"))}}const ks={id:"tab",type:"blade",accept(n){const t=Pt,e=_t(n,{pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")});return!e||e.pages.length===0?null:{params:e}},controller(n){const t=new Ss(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const s=new ws(n.document,{itemProps:rt.fromObject({selected:!1,title:e.title}),props:rt.fromObject({selected:!1})});t.add(s)}),t},api(n){return n.controller instanceof Ss?new ys(n.controller,n.pool):null}};function mi(n,t){const e=n.accept(t.params);if(!e)return null;const s=Pt.optional.boolean(t.params.disabled).value,c=Pt.optional.boolean(t.params.hidden).value;return n.controller({blade:At(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class bi{constructor(){this.disabled=!1,this.emitter=new z}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class vi{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new z,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class gi{constructor(t){this.onValueChange_=this.onValueChange_.bind(this),this.reader=t.reader,this.writer=t.writer,this.emitter=new z,this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.target=t.target,this.read()}read(){const t=this.target.read();t!==void 0&&(this.value.rawValue=this.reader(t))}write_(t){this.writer(this.target,t)}onValueChange_(t){this.write_(t.rawValue),this.emitter.emit("change",{options:t.options,rawValue:t.rawValue,sender:this})}}function Es(n,t){for(;n.length<t;)n.push(void 0)}function wi(n){const t=[];return Es(t,n),H(t)}function xi(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function yi(n,t){const e=[...xi(n),t];return e.length>n.length?e.splice(0,e.length-n.length):Es(e,n.length),e}class Pi{constructor(t){this.onTick_=this.onTick_.bind(this),this.reader_=t.reader,this.target=t.target,this.emitter=new z,this.value=t.value,this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const t=this.target.read();if(t===void 0)return;const e=this.value.rawValue,s=this.reader_(t);this.value.rawValue=yi(e,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(t){this.read()}}class rn{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,s)=>s.constrain(e),t)}}function ye(n,t){if(n instanceof t)return n;if(n instanceof rn){const e=n.constraints.reduce((s,c)=>s||(c instanceof t?c:null),null);if(e)return e}return null}class He{constructor(t){this.values=rt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(t,s),e)}}class on{constructor(t){this.values=rt.fromObject({options:t})}get options(){return this.values.get("options")}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(c=>c.value===t).length>0?t:e[0].value}}class Cs{constructor(t){this.values=rt.fromObject({max:t.max,min:t.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(t){const e=this.values.get("max"),s=this.values.get("min");let c=t;return q(s)||(c=Math.max(c,s)),q(e)||(c=Math.min(c,e)),c}}class yn{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,s=Math.round((t-e)/this.step);return e+s*this.step}}const Gn=U("lst");class Si{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Gn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("select");s.classList.add(Gn("s")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=t.createElement("div");c.classList.add(Gn("m")),c.appendChild(v(t,"dropdown")),this.element.appendChild(c),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,Y(this.props_,"options",P=>{W(this.selectElement),P.forEach(D=>{const st=t.createElement("option");st.textContent=D.text,this.selectElement.appendChild(st)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class an{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Si(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}}const Ms=U("pop");class ki{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ms()),e.viewProps.bindClassModifiers(this.element),Q(e.shows,bt(this.element,Ms(void 0,"v")))}}class Bs{constructor(t,e){this.shows=H(!1),this.viewProps=e.viewProps,this.view=new ki(t,{shows:this.shows,viewProps:this.viewProps})}}const Ds=U("txt");class Ei{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ds()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const s=t.createElement("input");s.classList.add(Ds("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Pn{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Ei(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const s=t.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=c),this.view.refresh()}}function Ci(n){return String(n)}function Ts(n){return n==="false"?!1:!!n}function As(n){return Ci(n)}class Mi{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Bi={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Di{constructor(t,e,s){this.left=e,this.operator=t,this.right=s}evaluate(){const t=Bi[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ti={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ai{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Ti[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function zn(n){return(t,e)=>{for(let s=0;s<n.length;s++){const c=n[s](t,e);if(c!=="")return c}return""}}function ln(n,t){var e;const s=n.substr(t).match(/^\s+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Ri(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function cn(n,t){var e;const s=n.substr(t).match(/^[0-9]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Ii(n,t){const e=cn(n,t);if(e!=="")return e;const s=n.substr(t,1);if(t+=1,s!=="-"&&s!=="+")return"";const c=cn(n,t);return c===""?"":s+c}function On(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const s=Ii(n,t);return s===""?"":e+s}function Rs(n,t){const e=n.substr(t,1);if(e==="0")return e;const s=Ri(n,t);return t+=s.length,s===""?"":s+cn(n,t)}function Li(n,t){const e=Rs(n,t);if(t+=e.length,e==="")return"";const s=n.substr(t,1);if(t+=s.length,s!==".")return"";const c=cn(n,t);return t+=c.length,e+s+c+On(n,t)}function Ui(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const s=cn(n,t);return t+=s.length,s===""?"":e+s+On(n,t)}function Vi(n,t){const e=Rs(n,t);return t+=e.length,e===""?"":e+On(n,t)}const Gi=zn([Li,Ui,Vi]);function zi(n,t){var e;const s=n.substr(t).match(/^[01]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Oi(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const s=zi(n,t);return s===""?"":e+s}function Fi(n,t){var e;const s=n.substr(t).match(/^[0-7]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function qi(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const s=Fi(n,t);return s===""?"":e+s}function Ni(n,t){var e;const s=n.substr(t).match(/^[0-9a-f]+/i);return(e=s&&s[0])!==null&&e!==void 0?e:""}function $i(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const s=Ni(n,t);return s===""?"":e+s}const Wi=zn([Oi,qi,$i]),ji=zn([Wi,Gi]);function Ki(n,t){const e=ji(n,t);return t+=e.length,e===""?null:{evaluable:new Mi(e),cursor:t}}function Hi(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const s=Ls(n,t);if(!s)return null;t=s.cursor,t+=ln(n,t).length;const c=n.substr(t,1);return t+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:t}}function Yi(n,t){var e;return(e=Ki(n,t))!==null&&e!==void 0?e:Hi(n,t)}function Is(n,t){const e=Yi(n,t);if(e)return e;const s=n.substr(t,1);if(t+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Is(n,t);return c?(t=c.cursor,{cursor:t,evaluable:new Ai(s,c.evaluable)}):null}function Zi(n,t,e){e+=ln(t,e).length;const s=n.filter(c=>t.startsWith(c,e))[0];return s?(e+=s.length,e+=ln(t,e).length,{cursor:e,operator:s}):null}function Xi(n,t){return(e,s)=>{const c=n(e,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const D=Zi(t,e,s);if(!D)break;s=D.cursor;const st=n(e,s);if(!st)return null;s=st.cursor,P=new Di(D.operator,P,st.evaluable)}return P?{cursor:s,evaluable:P}:null}}const Qi=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Xi(n,t),Is);function Ls(n,t){return t+=ln(n,t).length,Qi(n,t)}function Ji(n){const t=Ls(n,0);return!t||t.cursor+ln(n,t.cursor).length!==n.length?null:t.evaluable}function Pe(n){var t;const e=Ji(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Us(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=Pe(n);if(!q(t))return t}return 0}function to(n){return String(n)}function ne(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}const eo=ne(0);function Sn(n){return eo(n)+"%"}function Vs(n){return String(n)}function Fn(n){return n}function un({primary:n,secondary:t,forward:e,backward:s}){let c=!1;function P(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{P(()=>{t.setRawValue(e(n,t),D.options)})}),t.emitter.on("change",D=>{P(()=>{n.setRawValue(s(n,t),D.options)}),P(()=>{t.setRawValue(e(n,t),D.options)})}),P(()=>{t.setRawValue(e(n,t),{forceEmit:!1,last:!0})})}function ae(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function dn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Se(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function no(n){return n==="ArrowUp"||n==="ArrowDown"}function Gs(n){return no(n)||n==="ArrowLeft"||n==="ArrowRight"}function qn(n,t){var e,s;const c=t.ownerDocument.defaultView,P=t.getBoundingClientRect();return{x:n.pageX-(((e=c&&c.scrollX)!==null&&e!==void 0?e:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Le{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new z,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(qn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(qn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(qn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const s=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:t.shiftKey})}}function Zt(n,t,e,s,c){const P=(n-t)/(e-t);return s+P*(c-s)}function zs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function te(n,t,e){return Math.min(Math.max(n,t),e)}function Os(n,t){return(n%t+t)%t}const de=U("txt");class so{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(de(),de(void 0,"num")),e.arrayPosition&&this.element.classList.add(de(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(de("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(de()),this.inputElement.classList.add(de("i"));const c=t.createElement("div");c.classList.add(de("k")),this.element.appendChild(c),this.knobElement=c;const P=t.createElementNS(k,"svg");P.classList.add(de("g")),this.knobElement.appendChild(P);const D=t.createElementNS(k,"path");D.classList.add(de("gb")),P.appendChild(D),this.guideBodyElem_=D;const st=t.createElementNS(k,"path");st.classList.add(de("gh")),P.appendChild(st),this.guideHeadElem_=st;const kt=t.createElement("div");kt.classList.add(U("tt")()),this.knobElement.appendChild(kt),this.tooltipElem_=kt,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(de(void 0,"drg"));return}this.element.classList.add(de(void 0,"drg"));const e=t.rawValue/this.props_.get("draggingScale"),s=e+(e>0?-1:e<0?1:0),c=te(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class pn{constructor(t,e){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.parser_=e.parser,this.props=e.props,this.sliderProps_=(s=e.sliderProps)!==null&&s!==void 0?s:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=H(null),this.view=new so(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Le(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,s;const c=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=t;return c!==void 0&&(D=Math.max(D,c)),P!==void 0&&(D=Math.min(D,P)),D}onInputChange_(t){const s=t.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(t){const e=ae(this.baseStep_,dn(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){ae(this.baseStep_,dn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("draggingScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Nn=U("sld");class ro{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Nn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Nn("t")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=t.createElement("div");c.classList.add(Nn("k")),this.trackElement.appendChild(c),this.knobElement=c,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=te(Zt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class io{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new ro(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Le(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Zt(te(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=ae(this.baseStep_,Se(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){ae(this.baseStep_,Se(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $n=U("sldtxt");class oo{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add($n());const s=t.createElement("div");s.classList.add($n("s")),this.sliderView_=e.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=t.createElement("div");c.classList.add($n("t")),this.textView_=e.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Wn{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new io(t,{baseStep:e.baseStep,props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new pn(t,{baseStep:e.baseStep,parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new oo(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function hn(n,t){n.write(t)}function kn(n){const t=Pt;if(Array.isArray(n))return t.required.array(t.required.object({text:t.required.string,value:t.required.raw}))(n).value;if(typeof n=="object")return t.required.raw(n).value}function Fs(n){if(n==="inline"||n==="popup")return n}function Ce(n){const t=Pt;return t.required.object({max:t.optional.number,min:t.optional.number,step:t.optional.number})(n).value}function qs(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function jn(n){return q(n)?null:new on(qs(n))}function ao(n){const t=n?ye(n,yn):null;return t?t.step:null}function En(n,t){const e=n&&ye(n,yn);return e?zs(e.step):Math.max(zs(t),2)}function Ye(n){const t=ao(n);return t??1}function Ze(n,t){var e;const s=n&&ye(n,yn),c=Math.abs((e=s==null?void 0:s.step)!==null&&e!==void 0?e:t);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Cn=U("ckb");class lo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Cn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("label");s.classList.add(Cn("l")),this.element.appendChild(s);const c=t.createElement("input");c.classList.add(Cn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,e.viewProps.bindDisabled(this.inputElement);const P=t.createElement("div");P.classList.add(Cn("w")),s.appendChild(P);const D=v(t,"check");P.appendChild(D),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class co{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new lo(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked}}function uo(n){const t=[],e=jn(n.options);return e&&t.push(e),new rn(t)}const po={id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=_t(t,{options:Pt.optional.custom(kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ts,constraint:n=>uo(n.params),writer:n=>hn},controller:n=>{const t=n.document,e=n.value,s=n.constraint,c=s&&ye(s,on);return c?new an(t,{props:new rt({options:c.values.value("options")}),value:e,viewProps:n.viewProps}):new co(t,{value:e,viewProps:n.viewProps})}},Ue=U("col");class ho{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ue()),e.foldable.bindExpandedClass(this.element,Ue(void 0,"expanded")),Y(e.foldable,"completed",bt(this.element,Ue(void 0,"cpl")));const s=t.createElement("div");s.classList.add(Ue("h")),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(Ue("s")),s.appendChild(c),this.swatchElement=c;const P=t.createElement("div");if(P.classList.add(Ue("t")),s.appendChild(P),this.textElement=P,e.pickerLayout==="inline"){const D=t.createElement("div");D.classList.add(Ue("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function fo(n,t,e){const s=te(n/255,0,1),c=te(t/255,0,1),P=te(e/255,0,1),D=Math.max(s,c,P),st=Math.min(s,c,P),kt=D-st;let Bt=0,Nt=0;const $t=(st+D)/2;return kt!==0&&(Nt=kt/(1-Math.abs(D+st-1)),s===D?Bt=(c-P)/kt:c===D?Bt=2+(P-s)/kt:Bt=4+(s-c)/kt,Bt=Bt/6+(Bt<0?1:0)),[Bt*360,Nt*100,$t*100]}function _o(n,t,e){const s=(n%360+360)%360,c=te(t/100,0,1),P=te(e/100,0,1),D=(1-Math.abs(2*P-1))*c,st=D*(1-Math.abs(s/60%2-1)),kt=P-D/2;let Bt,Nt,$t;return s>=0&&s<60?[Bt,Nt,$t]=[D,st,0]:s>=60&&s<120?[Bt,Nt,$t]=[st,D,0]:s>=120&&s<180?[Bt,Nt,$t]=[0,D,st]:s>=180&&s<240?[Bt,Nt,$t]=[0,st,D]:s>=240&&s<300?[Bt,Nt,$t]=[st,0,D]:[Bt,Nt,$t]=[D,0,st],[(Bt+kt)*255,(Nt+kt)*255,($t+kt)*255]}function mo(n,t,e){const s=te(n/255,0,1),c=te(t/255,0,1),P=te(e/255,0,1),D=Math.max(s,c,P),st=Math.min(s,c,P),kt=D-st;let Bt;kt===0?Bt=0:D===s?Bt=60*(((c-P)/kt%6+6)%6):D===c?Bt=60*((P-s)/kt+2):Bt=60*((s-c)/kt+4);const Nt=D===0?0:kt/D,$t=D;return[Bt,Nt*100,$t*100]}function Ns(n,t,e){const s=Os(n,360),c=te(t/100,0,1),P=te(e/100,0,1),D=P*c,st=D*(1-Math.abs(s/60%2-1)),kt=P-D;let Bt,Nt,$t;return s>=0&&s<60?[Bt,Nt,$t]=[D,st,0]:s>=60&&s<120?[Bt,Nt,$t]=[st,D,0]:s>=120&&s<180?[Bt,Nt,$t]=[0,D,st]:s>=180&&s<240?[Bt,Nt,$t]=[0,st,D]:s>=240&&s<300?[Bt,Nt,$t]=[st,0,D]:[Bt,Nt,$t]=[D,0,st],[(Bt+kt)*255,(Nt+kt)*255,($t+kt)*255]}function bo(n,t,e){const s=e+t*(100-Math.abs(2*e-100))/200;return[n,s!==0?t*(100-Math.abs(2*e-100))/s:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function vo(n,t,e){const s=100-Math.abs(e*(200-t)/100-100);return[n,s!==0?t*e/s:0,e*(200-t)/(2*100)]}function Ve(n){return[n[0],n[1],n[2]]}function $s(n,t){return[n[0],n[1],n[2],t]}const go={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:bo,rgb:_o},hsv:{hsl:vo,hsv:(n,t,e)=>[n,t,e],rgb:Ns},rgb:{hsl:fo,hsv:mo,rgb:(n,t,e)=>[n,t,e]}};function Mn(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function wo(n,t){return n===t?t:Os(n,t)}function xo(n,t,e){var s;const c=Mn(t,e);return[t==="rgb"?te(n[0],0,c[0]):wo(n[0],c[0]),te(n[1],0,c[1]),te(n[2],0,c[2]),te((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Ws(n,t,e,s){const c=Mn(t,e),P=Mn(t,s);return n.map((D,st)=>D/c[st]*P[st])}function yo(n,t,e){const s=Ws(n,t.mode,t.type,"int"),c=go[t.mode][e.mode](...s);return Ws(c,e.mode,"int",e.type)}function Bn(n,t){return typeof n!="object"||q(n)?!1:t in n&&typeof n[t]=="number"}class Ft{static black(t="int"){return new Ft([0,0,0],"rgb",t)}static fromObject(t,e="int"){const s="a"in t?[t.r,t.g,t.b,t.a]:[t.r,t.g,t.b];return new Ft(s,"rgb",e)}static toRgbaObject(t,e="int"){return t.toRgbaObject(e)}static isRgbColorObject(t){return Bn(t,"r")&&Bn(t,"g")&&Bn(t,"b")}static isRgbaColorObject(t){return this.isRgbColorObject(t)&&Bn(t,"a")}static isColorObject(t){return this.isRgbColorObject(t)}static equals(t,e){if(t.mode!==e.mode)return!1;const s=t.comps_,c=e.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(t,e,s="int"){this.mode=e,this.type=s,this.comps_=xo(t,e,s)}getComponents(t,e="int"){return $s(yo(Ve(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:e}),this.comps_[3])}toRgbaObject(t="int"){const e=this.getComponents("rgb",t);return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Me=U("colp");class Po{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Me()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Me("hsv"));const c=t.createElement("div");c.classList.add(Me("sv")),this.svPaletteView_=e.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=t.createElement("div");P.classList.add(Me("h")),this.hPaletteView_=e.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const D=t.createElement("div");if(D.classList.add(Me("rgb")),this.textView_=e.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const st=t.createElement("div");st.classList.add(Me("a"));const kt=t.createElement("div");kt.classList.add(Me("ap")),kt.appendChild(this.alphaViews_.palette.element),st.appendChild(kt);const Bt=t.createElement("div");Bt.classList.add(Me("at")),Bt.appendChild(this.alphaViews_.text.element),st.appendChild(Bt),this.element.appendChild(st)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function So(n){return n==="int"?"int":n==="float"?"float":void 0}function Kn(n){const t=Pt;return _t(n,{alpha:t.optional.boolean,color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(So)}),expanded:t.optional.boolean,picker:t.optional.custom(Fs)})}function Ge(n){return n?.1:1}function ze(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}function ko(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function pe(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const Eo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function js(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),s=t[2];return Eo[s](e)}function Ks(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[pe(t[1],255),pe(t[2],255),pe(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Hs(n){return t=>{const e=Ks(t);return e?new Ft(e,"rgb",n):null}}function Ys(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[pe(t[1],255),pe(t[2],255),pe(t[3],255),pe(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Zs(n){return t=>{const e=Ys(t);return e?new Ft(e,"rgb",n):null}}function Xs(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[js(t[1]),pe(t[2],100),pe(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Qs(n){return t=>{const e=Xs(t);return e?new Ft(e,"hsl",n):null}}function Js(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[js(t[1]),pe(t[2],100),pe(t[3],100),pe(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function tr(n){return t=>{const e=Js(t);return e?new Ft(e,"hsl",n):null}}function er(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function Co(n){const t=er(n);return t?new Ft(t,"rgb","int"):null}function nr(n){const t=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Zt(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Zt(parseInt(e[4],16),0,255,0,1)]:null}function Mo(n){const t=nr(n);return t?new Ft(t,"rgb","int"):null}function sr(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function rr(n){return t=>{const e=sr(t);return e?new Ft(e,"rgb",n):null}}function ir(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function or(n){return t=>{const e=ir(t);return e?new Ft(e,"rgb",n):null}}const Bo=[{parser:er,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:nr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ks,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ys,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Xs,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Js,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:sr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ir,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Do(n){return Bo.reduce((t,{parser:e,result:s})=>t||(e(n)?s:null),null)}function Hn(n,t="int"){const e=Do(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}const ar={int:[Co,Mo,Hs("int"),Zs("int"),Qs("int"),tr("int"),rr("int"),or("int")],float:[Hs("float"),Zs("float"),Qs("float"),tr("float"),rr("float"),or("float")]};function To(n){const t=ar[n];return e=>{if(typeof e!="string")return Ft.black(n);const s=t.reduce((c,P)=>c||P(e),null);return s??Ft.black(n)}}function Yn(n){const t=ar[n];return e=>t.reduce((s,c)=>s||c(e),null)}function lr(n){const t=te(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function cr(n,t="#"){const e=Ve(n.getComponents("rgb")).map(lr).join("");return`${t}${e}`}function Zn(n,t="#"){const e=n.getComponents("rgb"),s=[e[0],e[1],e[2],e[3]*255].map(lr).join("");return`${t}${s}`}function ur(n,t){const e=ne(t==="float"?2:0);return`rgb(${Ve(n.getComponents("rgb",t)).map(c=>e(c)).join(", ")})`}function Ao(n){return t=>ur(t,n)}function Dn(n,t){const e=ne(2),s=ne(t==="float"?2:0);return`rgba(${n.getComponents("rgb",t).map((P,D)=>(D===3?e:s)(P)).join(", ")})`}function Ro(n){return t=>Dn(t,n)}function Io(n){const t=[ne(0),Sn,Sn];return`hsl(${Ve(n.getComponents("hsl")).map((s,c)=>t[c](s)).join(", ")})`}function Lo(n){const t=[ne(0),Sn,Sn,ne(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>t[c](s)).join(", ")})`}function dr(n,t){const e=ne(t==="float"?2:0),s=["r","g","b"];return`{${Ve(n.getComponents("rgb",t)).map((P,D)=>`${s[D]}: ${e(P)}`).join(", ")}}`}function Uo(n){return t=>dr(t,n)}function pr(n,t){const e=ne(2),s=ne(t==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",t).map((D,st)=>{const kt=st===3?e:s;return`${c[st]}: ${kt(D)}`}).join(", ")}}`}function Vo(n){return t=>pr(t,n)}const Go=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:cr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Zn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Io},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Lo},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:t},stringifier:Ao(t)},{format:{alpha:!0,mode:"rgb",notation:"func",type:t},stringifier:Ro(t)},{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Uo(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Vo(t)}],[])];function Xn(n){return Go.reduce((t,e)=>t||(ko(e.format,n)?e.stringifier:null),null)}const fn=U("apl");class zo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(fn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(fn("b")),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(fn("c")),s.appendChild(c),this.colorElem_=c;const P=t.createElement("div");P.classList.add(fn("m")),this.element.appendChild(P),this.markerElem_=P;const D=t.createElement("div");D.classList.add(fn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),s=new Ft([e[0],e[1],e[2],0],"rgb"),c=new Ft([e[0],e[1],e[2],255],"rgb"),P=["to right",Dn(s),Dn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Dn(t);const D=Zt(e[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Oo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new zo(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Le(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=t.point.x/t.bounds.width,c=this.value.rawValue,[P,D,st]=c.getComponents("hsv");this.value.setRawValue(new Ft([P,D,st,s],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=ae(Ge(!0),Se(t));if(e===0)return;const s=this.value.rawValue,[c,P,D,st]=s.getComponents("hsv");this.value.setRawValue(new Ft([c,P,D,st+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){ae(Ge(!0),Se(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Xe=U("coltxt");function Fo(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return t.appendChild(e.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),t}class qo{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xe()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Xe("m")),this.modeElem_=Fo(t),this.modeElem_.classList.add(Xe("ms")),s.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const c=t.createElement("div");c.classList.add(Xe("mm")),c.appendChild(v(t,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=t.createElement("div");P.classList.add(Xe("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=e.textViews,this.applyTextViews_(),Q(e.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(t){this.textViews_=t,this.applyTextViews_()}applyTextViews_(){W(this.textsElem_);const t=this.element.ownerDocument;this.textViews_.forEach(e=>{const s=t.createElement("div");s.classList.add(Xe("c")),s.appendChild(e.element),this.textsElem_.appendChild(s)})}}function No(n){return ne(n==="float"?2:0)}function $o(n,t,e){const s=Mn(n,t)[e];return new He({min:0,max:s})}function Qn(n,t,e){return new pn(n,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",baseStep:Ge(!1),parser:t.parser,props:rt.fromObject({draggingScale:t.colorType==="float"?.01:1,formatter:No(t.colorType)}),value:H(0,{constraint:$o(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}class Wo{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.parser_=e.parser,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new qo(t,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Qn(t,e,0),Qn(t,e,1),Qn(t,e,2)];return s.forEach((c,P)=>{un({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(D,st)=>{const kt=this.colorMode.rawValue,Bt=D.rawValue.getComponents(kt,this.colorType_);return Bt[P]=st.rawValue,new Ft($s(Ve(Bt),Bt[3]),kt,this.colorType_)}})}),s}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Jn=U("hpl");class jo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Jn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(Jn("c")),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(Jn("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=ur(new Ft([e,100,100],"hsv"));const s=Zt(e,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Ko{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new jo(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Le(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=Zt(te(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),c=this.value.rawValue,[,P,D,st]=c.getComponents("hsv");this.value.setRawValue(new Ft([s,P,D,st],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=ae(Ge(!1),Se(t));if(e===0)return;const s=this.value.rawValue,[c,P,D,st]=s.getComponents("hsv");this.value.setRawValue(new Ft([c+e,P,D,st],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){ae(Ge(!1),Se(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ts=U("svp"),hr=64;class Ho{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ts()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("canvas");s.height=hr,s.width=hr,s.classList.add(ts("c")),this.element.appendChild(s),this.canvasElement=s;const c=t.createElement("div");c.classList.add(ts("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const t=_(this.canvasElement);if(!t)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,D=t.getImageData(0,0,c,P),st=D.data;for(let Nt=0;Nt<P;Nt++)for(let $t=0;$t<c;$t++){const Oe=Zt($t,0,c,0,100),mn=Zt(Nt,0,P,100,0),bn=Ns(s[0],Oe,mn),Tn=(Nt*c+$t)*4;st[Tn]=bn[0],st[Tn+1]=bn[1],st[Tn+2]=bn[2],st[Tn+3]=255}t.putImageData(D,0,0);const kt=Zt(s[1],0,100,0,100);this.markerElem_.style.left=`${kt}%`;const Bt=Zt(s[2],0,100,100,0);this.markerElem_.style.top=`${Bt}%`}onValueChange_(){this.update_()}}class Yo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Ho(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Le(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=Zt(t.point.x,0,t.bounds.width,0,100),c=Zt(t.point.y,0,t.bounds.height,100,0),[P,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ft([P,s,c,D],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Gs(t.key)&&t.preventDefault();const[e,s,c,P]=this.value.rawValue.getComponents("hsv"),D=Ge(!1),st=ae(D,Se(t)),kt=ae(D,dn(t));st===0&&kt===0||this.value.setRawValue(new Ft([e,s+st,c+kt,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Ge(!1),s=ae(e,Se(t)),c=ae(e,dn(t));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Zo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Ko(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Yo(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Oo(t,{value:this.value,viewProps:this.viewProps}),text:new pn(t,{parser:Pe,baseStep:.1,props:rt.fromObject({draggingScale:.01,formatter:ne(2)}),value:H(0,{constraint:new He({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&un({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Ft(P,s.rawValue.mode)}}),this.textC_=new Wo(t,{colorType:e.colorType,parser:Pe,value:this.value,viewProps:this.viewProps}),this.view=new Po(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const es=U("colsw");class Xo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(es()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(es("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=t.createElement("button");c.classList.add(es("b")),e.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Zn(t)}onValueChange_(){this.update_()}}class Qo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Xo(t,{value:this.value,viewProps:this.viewProps})}}class ns{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=X.create(e.expanded),this.swatchC_=new Qo(t,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Pn(t,{parser:e.parser,props:rt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new ho(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Bs(t,{viewProps:this.viewProps}):null;const c=new Zo(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),un({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),pt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=ot(t);s&&e.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Jo(n,t){return Ft.isColorObject(n)?Ft.fromObject(n,t):Ft.black(t)}function ta(n){return Ve(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function ea(n){return n.getComponents("rgb").reduce((t,e,s)=>{const c=Math.floor(s===3?e*255:e)&255;return t<<8|c},0)>>>0}function na(n){return new Ft([n>>16&255,n>>8&255,n&255],"rgb")}function sa(n){return new Ft([n>>24&255,n>>16&255,n>>8&255,Zt(n&255,0,255,0,1)],"rgb")}function ra(n){return typeof n!="number"?Ft.black():na(n)}function ia(n){return typeof n!="number"?Ft.black():sa(n)}function oa(n){const t=Xn(n);return t?(e,s)=>{hn(e,t(s))}:null}function aa(n){const t=n?ea:ta;return(e,s)=>{hn(e,t(s))}}function la(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ca(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ua(n,t){return(e,s)=>{n?la(e,s,t):ca(e,s,t)}}function ss(n){var t;return!!(n!=null&&n.alpha||!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function da(n){return n?t=>Zn(t,"0x"):t=>cr(t,"0x")}function pa(n){return"color"in n||"view"in n&&n.view==="color"}const ha={id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!pa(t))return null;const e=Kn(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>ss(n.params)?ia:ra,equals:Ft.equals,writer:n=>aa(ss(n.params))},controller:n=>{const t=ss(n.params),e="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:"int",expanded:e??!1,formatter:da(t),parser:Yn("int"),pickerLayout:s??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}};function fa(n){return Ft.isRgbaColorObject(n)}function _a(n){return t=>Jo(t,n)}function ma(n,t){return e=>n?pr(e,t):dr(e,t)}const ba={id:"input-color-object",type:"input",accept:(n,t)=>{if(!Ft.isColorObject(n))return null;const e=Kn(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>_a(ze(n.params)),equals:Ft.equals,writer:n=>ua(fa(n.initialValue),ze(n.params))},controller:n=>{var t;const e=Ft.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(t=ze(n.params))!==null&&t!==void 0?t:"int";return new ns(n.document,{colorType:P,expanded:s??!1,formatter:ma(e,P),parser:Yn(P),pickerLayout:c??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}},va={id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||"view"in t&&t.view==="text")return null;const e=Hn(n,ze(t));if(!e||!Xn(e))return null;const c=Kn(t);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var t;return To((t=ze(n.params))!==null&&t!==void 0?t:"int")},equals:Ft.equals,writer:n=>{const t=Hn(n.initialValue,ze(n.params));if(!t)throw O.shouldNeverHappen();const e=oa(t);if(!e)throw O.notBindable();return e}},controller:n=>{const t=Hn(n.initialValue,ze(n.params));if(!t)throw O.shouldNeverHappen();const e=Xn(t);if(!e)throw O.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:t.type,expanded:s??!1,formatter:e,parser:Yn(t.type),pickerLayout:c??"popup",supportsAlpha:t.alpha,value:n.value,viewProps:n.viewProps})}};class Be{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((s,c)=>{var P,D;return(D=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(e)}}const fr=U("pndtxt");class ga{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(fr()),this.textViews.forEach(s=>{const c=t.createElement("div");c.classList.add(fr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function wa(n,t,e){return new pn(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",baseStep:t.axes[e].baseStep,parser:t.parser,props:t.axes[e].textProps,value:H(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class rs{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((s,c)=>wa(t,e,c)),this.acs_.forEach((s,c)=>{un({primary:this.value,secondary:s.value,forward:P=>e.assembly.toComponents(P.rawValue)[c],backward:(P,D)=>{const st=e.assembly.toComponents(P.rawValue);return st[c]=D.rawValue,e.assembly.fromComponents(st)}})}),this.view=new ga(t,{textViews:this.acs_.map(s=>s.view)})}}function _r(n,t){return"step"in n&&!q(n.step)?new yn(n.step,t):null}function mr(n){return!q(n.max)&&!q(n.min)?new He({max:n.max,min:n.min}):!q(n.max)||!q(n.min)?new Cs({max:n.max,min:n.min}):null}function xa(n){const t=ye(n,He);if(t)return[t.values.get("min"),t.values.get("max")];const e=ye(n,Cs);return e?[e.minValue,e.maxValue]:[void 0,void 0]}function ya(n,t){const e=[],s=_r(n,t);s&&e.push(s);const c=mr(n);c&&e.push(c);const P=jn(n.options);return P&&e.push(P),new rn(e)}const Pa={id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=Pt,s=_t(t,{format:e.optional.function,max:e.optional.number,min:e.optional.number,options:e.optional.custom(kn),step:e.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us,constraint:n=>ya(n.params,n.initialValue),writer:n=>hn},controller:n=>{var t;const e=n.value,s=n.constraint,c=s&&ye(s,on);if(c)return new an(n.document,{props:new rt({options:c.values.value("options")}),value:e,viewProps:n.viewProps});const P=(t="format"in n.params?n.params.format:void 0)!==null&&t!==void 0?t:ne(En(s,e.rawValue)),D=s&&ye(s,He);return D?new Wn(n.document,{baseStep:Ye(s),parser:Pe,sliderProps:new rt({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:rt.fromObject({draggingScale:Ze(s,e.rawValue),formatter:P}),value:e,viewProps:n.viewProps}):new pn(n.document,{baseStep:Ye(s),parser:Pe,props:rt.fromObject({draggingScale:Ze(s,e.rawValue),formatter:P}),value:e,viewProps:n.viewProps})}};class De{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(q(t))return!1;const e=t.x,s=t.y;return!(typeof e!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const br={toComponents:n=>n.getComponents(),fromComponents:n=>new De(...n)},Qe=U("p2d");class Sa{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Qe()),e.viewProps.bindClassModifiers(this.element),Q(e.expanded,bt(this.element,Qe(void 0,"expanded")));const s=t.createElement("div");s.classList.add(Qe("h")),this.element.appendChild(s);const c=t.createElement("button");c.classList.add(Qe("b")),c.appendChild(v(t,"p2dpad")),e.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=t.createElement("div");if(P.classList.add(Qe("t")),s.appendChild(P),this.textElement=P,e.pickerLayout==="inline"){const D=t.createElement("div");D.classList.add(Qe("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Te=U("p2dp");class ka{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=e.invertsY,this.maxValue_=e.maxValue,this.element=t.createElement("div"),this.element.classList.add(Te()),e.layout==="popup"&&this.element.classList.add(Te(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Te("p")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=t.createElementNS(k,"svg");c.classList.add(Te("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=t.createElementNS(k,"line");P.classList.add(Te("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const D=t.createElementNS(k,"line");D.classList.add(Te("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const st=t.createElementNS(k,"line");st.classList.add(Te("l")),st.setAttributeNS(null,"x1","50%"),st.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(st),this.lineElem_=st;const kt=t.createElement("div");kt.classList.add(Te("m")),this.padElement.appendChild(kt),this.markerElem_=kt,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Zt(t,-s,+s,0,100),P=Zt(e,-s,+s,0,100),D=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function vr(n,t,e){return[ae(t[0],Se(n)),ae(t[1],dn(n))*(e?1:-1)]}class Ea{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.baseSteps_=e.baseSteps,this.maxValue_=e.maxValue,this.invertsY_=e.invertsY,this.view=new ka(t,{invertsY:this.invertsY_,layout:e.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Le(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=this.maxValue_,c=Zt(t.point.x,0,t.bounds.width,-s,+s),P=Zt(this.invertsY_?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-s,+s);this.value.setRawValue(new De(c,P),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Gs(t.key)&&t.preventDefault();const[e,s]=vr(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(new De(this.value.rawValue.x+e,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,s]=vr(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ca{constructor(t,e){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=X.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Bs(t,{viewProps:this.viewProps}):null;const P=new Ea(t,{baseSteps:[e.axes[0].baseStep,e.axes[1].baseStep],invertsY:e.invertsY,layout:e.pickerLayout,maxValue:e.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new rs(t,{assembly:br,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new Sa(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),un({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,st)=>st.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),pt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=ot(t);s&&e.contains(s)||s&&s===this.view.buttonElement&&!u(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}class Je{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(q(t))return!1;const e=t.x,s=t.y,c=t.z;return!(typeof e!="number"||typeof s!="number"||typeof c!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const gr={toComponents:n=>n.getComponents(),fromComponents:n=>new Je(...n)};function Ma(n){return Je.isObject(n)?new Je(n.x,n.y,n.z):new Je}function Ba(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function Da(n,t){return new Be({assembly:gr,components:[ke("x"in n?n.x:void 0,t.x),ke("y"in n?n.y:void 0,t.y),ke("z"in n?n.z:void 0,t.z)]})}function is(n,t){return{baseStep:Ye(t),constraint:t,textProps:rt.fromObject({draggingScale:Ze(t,n),formatter:ne(En(t,n))})}}const Ta={id:"input-point3d",type:"input",accept:(n,t)=>{if(!Je.isObject(n))return null;const e=Pt,s=_t(t,{x:e.optional.custom(Ce),y:e.optional.custom(Ce),z:e.optional.custom(Ce)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ma,constraint:n=>Da(n.params,n.initialValue),equals:Je.equals,writer:n=>Ba},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Be))throw O.shouldNeverHappen();return new rs(n.document,{assembly:gr,axes:[is(t.rawValue.x,e.components[0]),is(t.rawValue.y,e.components[1]),is(t.rawValue.z,e.components[2])],parser:Pe,value:t,viewProps:n.viewProps})}};class tn{constructor(t=0,e=0,s=0,c=0){this.x=t,this.y=e,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(q(t))return!1;const e=t.x,s=t.y,c=t.z,P=t.w;return!(typeof e!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const wr={toComponents:n=>n.getComponents(),fromComponents:n=>new tn(...n)};function Aa(n){return tn.isObject(n)?new tn(n.x,n.y,n.z,n.w):new tn}function Ra(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function Ia(n,t){return new Be({assembly:wr,components:[ke("x"in n?n.x:void 0,t.x),ke("y"in n?n.y:void 0,t.y),ke("z"in n?n.z:void 0,t.z),ke("w"in n?n.w:void 0,t.w)]})}function La(n,t){return{baseStep:Ye(t),constraint:t,textProps:rt.fromObject({draggingScale:Ze(t,n),formatter:ne(En(t,n))})}}const Ua={id:"input-point4d",type:"input",accept:(n,t)=>{if(!tn.isObject(n))return null;const e=Pt,s=_t(t,{x:e.optional.custom(Ce),y:e.optional.custom(Ce),z:e.optional.custom(Ce),w:e.optional.custom(Ce)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>Ia(n.params,n.initialValue),equals:tn.equals,writer:n=>Ra},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Be))throw O.shouldNeverHappen();return new rs(n.document,{assembly:wr,axes:t.rawValue.getComponents().map((s,c)=>La(s,e.components[c])),parser:Pe,value:t,viewProps:n.viewProps})}};function Va(n){const t=[],e=jn(n.options);return e&&t.push(e),new rn(t)}const Ga={id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const s=_t(t,{options:Pt.optional.custom(kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs,constraint:n=>Va(n.params),writer:n=>hn},controller:n=>{const t=n.document,e=n.value,s=n.constraint,c=s&&ye(s,on);return c?new an(t,{props:new rt({options:c.values.value("options")}),value:e,viewProps:n.viewProps}):new Pn(t,{parser:P=>P,props:rt.fromObject({formatter:Fn}),value:e,viewProps:n.viewProps})}},_n={monitor:{defaultInterval:200,defaultLineCount:3}},xr=U("mll");class za{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(xr()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("textarea");s.classList.add(xr("i")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,s.readOnly=!0,e.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),t.textContent=s.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class os{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new za(t,{formatter:e.formatter,lineCount:e.lineCount,value:this.value,viewProps:this.viewProps})}}const yr=U("sgl");class Oa{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(yr()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(yr("i")),s.readOnly=!0,s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class as{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Oa(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const Fa={id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=_t(t,{lineCount:Pt.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ts},controller:n=>{var t;return n.value.rawValue.length===1?new as(n.document,{formatter:As,value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:As,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ae=U("grl");class qa{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ae()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=t.createElementNS(k,"svg");s.classList.add(Ae("g")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=t.createElementNS(k,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=t.createElement("div");P.classList.add(Ae("t"),U("tt")()),this.element.appendChild(P),this.tooltipElem_=P,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const t=this.svgElem_.getBoundingClientRect(),e=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Nt,$t)=>{if(Nt===void 0)return;const Oe=Zt($t,0,e,0,t.width),mn=Zt(Nt,s,c,t.height,0);P.push([Oe,mn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const D=this.tooltipElem_,st=this.value.rawValue[this.cursor_.rawValue];if(st===void 0){D.classList.remove(Ae("t","a"));return}const kt=Zt(this.cursor_.rawValue,0,e,0,t.width),Bt=Zt(st,s,c,t.height,0);D.style.left=`${kt}px`,D.style.top=`${Bt}px`,D.textContent=`${this.formatter_(st)}`,D.classList.contains(Ae("t","a"))||(D.classList.add(Ae("t","a"),Ae("t","in")),r(D),D.classList.remove(Ae("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Na{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=H(-1),this.view=new qa(t,{cursor:this.cursor_,formatter:e.formatter,lineCount:e.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Le(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const e=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Zt(t.offsetX,0,e.width,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Zt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ls(n){return"format"in n&&!q(n.format)?n.format:ne(2)}function $a(n){var t;return n.value.rawValue.length===1?new as(n.document,{formatter:ls(n.params),value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:ls(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Wa(n){var t,e,s;return new Na(n.document,{formatter:ls(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,props:rt.fromObject({maxValue:(e="max"in n.params?n.params.max:null)!==null&&e!==void 0?e:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Pr(n){return"view"in n&&n.view==="graph"}const ja={id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=Pt,s=_t(t,{format:e.optional.function,lineCount:e.optional.number,max:e.optional.number,min:e.optional.number,view:e.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Pr(n)?64:1,reader:n=>Us},controller:n=>Pr(n.params)?Wa(n):$a(n)},Ka={id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=Pt,s=_t(t,{lineCount:e.optional.number,multiline:e.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new os(n.document,{formatter:Fn,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,value:e,viewProps:n.viewProps}):new as(n.document,{formatter:Fn,value:e,viewProps:n.viewProps})}};function Ha(n,t){var e;const s=n.accept(t.target.read(),t.params);if(q(s))return null;const c=Pt,P={target:t.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(P),st=n.binding.constraint?n.binding.constraint(P):void 0,kt=H(D(s.initialValue),{constraint:st,equals:n.binding.equals}),Bt=new gi({reader:D,target:t.target,value:kt,writer:n.binding.writer(P)}),Nt=c.optional.boolean(t.params.disabled).value,$t=c.optional.boolean(t.params.hidden).value,Oe=n.controller({constraint:st,document:t.document,initialValue:s.initialValue,params:s.params,value:Bt.value,viewProps:h.create({disabled:Nt,hidden:$t})});return new Kt(t.document,{binding:Bt,blade:At(),props:rt.fromObject({label:"label"in t.params?(e=c.optional.string(t.params.label).value)!==null&&e!==void 0?e:null:t.target.key}),valueController:Oe})}function Ya(n,t){return t===0?new bi:new vi(n,t??_n.monitor.defaultInterval)}function Za(n,t){var e,s,c;const P=Pt,D=n.accept(t.target.read(),t.params);if(q(D))return null;const st={target:t.target,initialValue:D.initialValue,params:D.params},kt=n.binding.reader(st),Bt=(s=(e=P.optional.number(t.params.bufferSize).value)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Nt=P.optional.number(t.params.interval).value,$t=new Pi({reader:kt,target:t.target,ticker:Ya(t.document,Nt),value:wi(Bt)}),Oe=P.optional.boolean(t.params.disabled).value,mn=P.optional.boolean(t.params.hidden).value,bn=n.controller({document:t.document,params:D.params,value:$t.value,viewProps:h.create({disabled:Oe,hidden:mn})});return new Ht(t.document,{binding:$t,blade:At(),props:rt.fromObject({label:"label"in t.params?(c=P.optional.string(t.params.label).value)!==null&&c!==void 0?c:null:t.target.key}),valueController:bn})}class Xa{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t){t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput(t,e,s){const c=e.read();if(q(c))throw new O({context:{key:e.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((D,st)=>D??Ha(st,{document:t,target:e,params:s}),null);if(P)return P;throw new O({context:{key:e.key},type:"nomatchingcontroller"})}createMonitor(t,e,s){const c=this.pluginsMap_.monitors.reduce((P,D)=>P??Za(D,{document:t,params:s,target:e}),null);if(c)return c;throw new O({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const s=this.pluginsMap_.blades.reduce((c,P)=>c??mi(P,{document:t,params:e}),null);if(!s)throw new O({type:"nomatchingview",context:{params:e}});return s}createBladeApi(t){if(t instanceof Kt)return new qt(t);if(t instanceof Ht)return new Xt(t);if(t instanceof Yt)return new fe(t,this);const e=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:t,pool:this}),null);if(!e)throw O.shouldNeverHappen();return e}}function Qa(){const n=new Xa;return[rl,Ta,Ua,Ga,Pa,va,ba,ha,po,Fa,Ka,ja,gt,ci,di,ks].forEach(t=>{n.register(t)}),n}function Ja(n){return De.isObject(n)?new De(n.x,n.y):new De}function tl(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function ke(n,t){if(!n)return;const e=[],s=_r(n,t);s&&e.push(s);const c=mr(n);return c&&e.push(c),new rn(e)}function el(n,t){return new Be({assembly:br,components:[ke("x"in n?n.x:void 0,t.x),ke("y"in n?n.y:void 0,t.y)]})}function Sr(n,t){const[e,s]=n?xa(n):[];if(!q(e)||!q(s))return Math.max(Math.abs(e??0),Math.abs(s??0));const c=Ye(n);return Math.max(Math.abs(c)*10,Math.abs(t)*10)}function nl(n,t){const e=t instanceof Be?t.components[0]:void 0,s=t instanceof Be?t.components[1]:void 0,c=Sr(e,n.x),P=Sr(s,n.y);return Math.max(c,P)}function kr(n,t){return{baseStep:Ye(t),constraint:t,textProps:rt.fromObject({draggingScale:Ze(t,n),formatter:ne(En(t,n))})}}function sl(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const rl={id:"input-point2d",type:"input",accept:(n,t)=>{if(!De.isObject(n))return null;const e=Pt,s=_t(t,{expanded:e.optional.boolean,picker:e.optional.custom(Fs),x:e.optional.custom(Ce),y:e.optional.object({inverted:e.optional.boolean,max:e.optional.number,min:e.optional.number,step:e.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ja,constraint:n=>el(n.params,n.initialValue),equals:De.equals,writer:n=>tl},controller:n=>{const t=n.document,e=n.value,s=n.constraint;if(!(s instanceof Be))throw O.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Ca(t,{axes:[kr(e.rawValue.x,s.components[0]),kr(e.rawValue.y,s.components[1])],expanded:c??!1,invertsY:sl(n.params),maxValue:nl(e.rawValue,s),parser:Pe,pickerLayout:P??"popup",value:e,viewProps:n.viewProps})}};class Er extends x{constructor(t){super(t),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get options(){return this.controller_.valueController.props.get("options")}set options(t){this.controller_.valueController.props.set("options",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}class Cr extends x{constructor(t){super(t),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(t){this.controller_.valueController.sliderController.props.set("maxValue",t)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(t){this.controller_.valueController.sliderController.props.set("minValue",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}class Mr extends x{constructor(t){super(t),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(t){this.controller_.valueController.props.set("formatter",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}const il=function(){return{id:"list",type:"blade",accept(n){const t=Pt,e=_t(n,{options:t.required.custom(kn),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string});return e?{params:e}:null},controller(n){const t=new on(qs(n.params.options)),e=H(n.params.value,{constraint:t}),s=new an(n.document,{props:new rt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Ke(n.document,{blade:n.blade,props:rt.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Ke)||!(n.controller.valueController instanceof an)?null:new Er(n.controller)}}}();function ol(n){return n.reduce((t,e)=>Object.assign(t,{[e.presetKey]:e.read()}),{})}function al(n,t){n.forEach(e=>{const s=t[e.target.presetKey];s!==void 0&&e.writer(e.target,e.reader(s))})}class ll extends _e{constructor(t,e){super(t,e)}get element(){return this.controller_.view.element}importPreset(t){const e=this.controller_.rackController.rack.find(Kt).map(s=>s.binding);al(e,t),this.refresh()}exportPreset(){const t=this.controller_.rackController.rack.find(Kt).map(e=>e.binding.target);return ol(t)}refresh(){this.controller_.rackController.rack.find(Kt).forEach(t=>{t.binding.read()}),this.controller_.rackController.rack.find(Ht).forEach(t=>{t.binding.read()})}}class cl extends Vn{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const ul={id:"slider",type:"blade",accept(n){const t=Pt,e=_t(n,{max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number});return e?{params:e}:null},controller(n){var t,e;const s=(t=n.params.value)!==null&&t!==void 0?t:0,c=new He({max:n.params.max,min:n.params.min}),P=new Wn(n.document,{baseStep:1,parser:Pe,sliderProps:new rt({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:rt.fromObject({draggingScale:Ze(void 0,s),formatter:(e=n.params.format)!==null&&e!==void 0?e:to}),value:H(s,{constraint:c}),viewProps:n.viewProps});return new Ke(n.document,{blade:n.blade,props:rt.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof Ke)||!(n.controller.valueController instanceof Wn)?null:new Cr(n.controller)}},dl=function(){return{id:"text",type:"blade",accept(n){const t=Pt,e=_t(n,{parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string});return e?{params:e}:null},controller(n){var t;const e=new Pn(n.document,{parser:n.params.parse,props:rt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:s=>String(s)}),value:H(n.params.value),viewProps:n.viewProps});return new Ke(n.document,{blade:n.blade,props:rt.fromObject({label:n.params.label}),valueController:e})},api(n){return!(n.controller instanceof Ke)||!(n.controller.valueController instanceof Pn)?null:new Mr(n.controller)}}}();function pl(n){const t=n.createElement("div");return t.classList.add(U("dfw")()),n.body&&n.body.appendChild(t),t}function Br(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const s=n.createElement("style");s.dataset.tpStyle=t,s.textContent=e,n.head.appendChild(s)}class hl extends ll{constructor(t){var e,s;const c=t??{},P=(e=c.document)!==null&&e!==void 0?e:a(),D=Qa(),st=new cl(P,{expanded:c.expanded,blade:At(),props:rt.fromObject({title:c.title}),viewProps:h.create()});super(st,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:pl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw O.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw O.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(t){t.css&&Br(this.document,`plugin-${t.id}`,t.css)}setUpDefaultPlugins_(){Br(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(t=>{this.embedPluginStyle_(t)}),this.registerPlugin({plugins:[ul,il,ks,dl]})}}const fl=new E("3.1.10");f.BladeApi=x,f.ButtonApi=lt,f.FolderApi=_e,f.InputBindingApi=qt,f.ListApi=Er,f.MonitorBindingApi=Xt,f.Pane=hl,f.SeparatorApi=bs,f.SliderApi=Cr,f.TabApi=ys,f.TabPageApi=xs,f.TextApi=Mr,f.TpChangeEvent=M,f.VERSION=fl,Object.defineProperty(f,"__esModule",{value:!0})})})(us,us.exports);var Ol=us.exports;const Fl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  _pad         : u32,
};

struct SHSolver {
  dir_xy        : u32,
  dir_z_opacity : u32,
  idx           : u32,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       sort_infos : GeneralInfo;
@group(1) @binding(1) var<storage, read>       sh_solvers : array<SHSolver>;
@group(1) @binding(2) var<storage, read_write> splats_2d  : array<Splat2DGS>;
@group(1) @binding(3) var<storage, read>       color_params : array<f32>;

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
}
`,ql=`// 2DGS render — vertex+fragment.
// Forked from gaussian_render_f32.wgsl. Vertex expands a tight pixel-space
// quad sized from preprocess's center_pix + extent_pix. Fragment runs a
// ray-disk intersection through Tu/Tv/Tw (the CUDA cross-product formula) and
// evaluates the BetaScaled kernel \`(1 − ρ²/9)^shape\` (k = 3).
//
// Color is read straight from Splat2DGS's color_rg/color_b_shape (filled by
// preprocess_2dgs); shape is the per-Gaussian beta exponent.
//
// Interpolation qualifiers:
//   • Tu/Tv/Tw, gauss_id, shape, center_pix, depth_plane → flat (constant
//     across the quad — instance-uniform).
// We keep \`flat\` (not \`flat, either\`) because WebSplatter ships exactly that
// pattern in their 3DGS render shader and runs on iPhone 15 Pro Max,
// Snapdragon 8 Gen 3, and Snapdragon 865 per the paper. Compat-mode rules
// don't apply on those devices.

const FILTER_INV_SQUARE : f32 = 2.0;             // 1 / (2 · FilterSize²) with FilterSize=√2/2
const FILTER_SIZE       : f32 = 0.7071067811865476;
const K_BETA            : f32 = 3.0;
const K_BETA_SQ         : f32 = 9.0;

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
  _pad         : u32,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) @interpolate(flat) Tu          : vec3<f32>,
  @location(1) @interpolate(flat) Tv          : vec3<f32>,
  @location(2) @interpolate(flat) Tw          : vec3<f32>,
  @location(3) @interpolate(flat) color       : vec4<f32>,
  @location(4) @interpolate(flat) shape       : f32,
  @location(5) @interpolate(flat) center_pix  : vec2<f32>,
  @location(6) @interpolate(flat) depth_plane : vec3<f32>,
  @location(7) @interpolate(flat) gauss_id    : u32,
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

// 48-byte TexParams — populated by ply-loader.buildAtlasResources(). When the
// bundle has no atlas (or the user disables it via the tweakpane toggle), the
// host writes \`atlas_width = 0\` and the fragment shader's single
// \`if atlas_width > 0u\` short-circuits — same trick Halloumi uses to avoid a
// per-fragment uniform fetch + branch. Tail half holds the RVQ-paired dequant
// params (pair_scale/pair_offset for the two collapsed pair codebooks); zeroed
// when atlas_format != 5.
struct TexParams {
  atlas_width   : u32,
  atlas_layer_h : u32,
  atlas_format  : u32,    // 2 = BC7, 3 = ASTC 4x4, 5 = RVQ-paired
  atlas_scale   : f32,
  atlas_offset  : f32,
  uv_extent     : f32,    // surfel UV cutoff used at bake time (≈ 4.0)
  res_bias      : f32,    // additive RGB bias after the residual is folded in
  rvq_block     : u32,    // RVQ codeword tile size in pixels (4 for typeA/B, 8+ for typeC)
  pair_scale    : vec2<f32>,
  pair_offset   : vec2<f32>,
};

const ATLAS_FORMAT_RVQ_PAIRED : u32 = 5u;
// RVQ-paired compile-time constants. K_orig stays at 256 across all typeA/B/C
// variants (per-stage codebook size); B (the per-codeword patch size) is now
// uniform-driven so the shader handles both B=4 (typeA/B) and B=8+ (typeC).
const RVQ_K_ORIG : u32 = 256u;
// rvq_packed_idx is a 2D r32uint texture (was a storage buffer). On TBDR
// rvq_packed_idx is a 2D r32uint texture (was a storage buffer). On TBDR
// mobile (Adreno / Mali / Apple), random-access storage-buffer reads go
// through a slower cache hierarchy than texture reads; encoding the
// per-block packed index as a u32 texture gets us the texture-cache
// fast path. Width is a fixed power of two so the per-fragment
// (bid → (x,y)) decompose is two shifts/masks.
const RVQ_IDX_TEX_W      : u32 = 8192u;
const RVQ_IDX_TEX_W_MASK : u32 = 8191u;
const RVQ_IDX_TEX_W_SHIFT: u32 = 13u;    // log2(8192)

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var<storage, read> atlas_rects     : array<f32>;
@group(2) @binding(2) var                atlas_samp      : sampler;
@group(2) @binding(3) var<uniform>       tex_params      : TexParams;
@group(2) @binding(4) var                rvq_codebook    : texture_2d<f32>;
@group(2) @binding(5) var                rvq_cb_samp     : sampler;
@group(2) @binding(6) var                rvq_packed_idx  : texture_2d<u32>;
@group(2) @binding(7) var<storage, read> rvq_surfel_off  : array<u32>;

// One paired-RVQ decode tap: returns the summed (pair0 + pair1) residual RGB
// at integer rect-local pixel (au_local, av_local) of surfel \`g\`. Each tap
// does 1 storage load (packed index) + 2 nearest-tex samples + a dequant MAD.
fn sample_rvq_paired(g: u32, au_local: i32, av_local: i32,
                     w_span: i32, h_span: i32) -> vec3<f32> {
    let B = i32(tex_params.rvq_block);
    let K_B = i32(RVQ_K_ORIG) * B;          // pair row-stride in the codebook texture
    let w_tex = f32(K_B);                    // codebook texture width  = K_orig * B
    let h_tex = f32(2 * K_B);                // codebook texture height = 2 * K_orig * B
    let lu = clamp(au_local, 0, w_span - 1);
    let lv = clamp(av_local, 0, h_span - 1);
    let bu = lu / B;
    let bv = lv / B;
    let iu = lu - bu * B;
    let iv = lv - bv * B;
    let bw_g = w_span / B;
    let bid = rvq_surfel_off[g] + u32(bv) * u32(bw_g) + u32(bu);

    // bid → (x, y) inside the r32uint index texture. Width is power-of-two
    // so the decompose is \`x = bid & (W-1); y = bid >> log2(W)\`.
    let ix = i32(bid & RVQ_IDX_TEX_W_MASK);
    let iy = i32(bid >> RVQ_IDX_TEX_W_SHIFT);
    let packed = textureLoad(rvq_packed_idx, vec2<i32>(ix, iy), 0).x;
    let p0 = packed & 0xFFFFu;
    let p1 = packed >> 16u;
    let c0_hi = i32(p0 >> 8u);   let c0_lo = i32(p0 & 0xFFu);
    let c1_hi = i32(p1 >> 8u);   let c1_lo = i32(p1 & 0xFFu);

    // Codebook tile layout: pair p row-stride = K_orig*B; within a pair,
    // codeword (c_hi, c_lo) occupies B×B at (c_lo*B + iu, c_hi*B + iv).
    let uv0 = vec2<f32>(
        (f32(c0_lo * B + iu) + 0.5) / w_tex,
        (f32(c0_hi * B + iv) + 0.5) / h_tex);
    let uv1 = vec2<f32>(
        (f32(c1_lo * B + iu) + 0.5) / w_tex,
        (f32(K_B + c1_hi * B + iv) + 0.5) / h_tex);

    let rgba0 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv0, 0.0);
    let rgba1 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv1, 0.0);

    let s = tex_params.pair_scale;
    let o = tex_params.pair_offset;
    return rgba0.rgb * s.x + vec3<f32>(o.x)
         + rgba1.rgb * s.y + vec3<f32>(o.y);
}

// Fast path: hw-bilinear within a single codeword tile. Replaces the 4 sw
// atlas taps + sw mix with ONE hw-bilinear codebook sample per pair (= 2
// codebook samples total instead of 8). Caller must verify the 2×2 texel
// neighborhood is fully inside one codeword tile AND inside the surfel rect.
fn sample_rvq_paired_hw_bilinear(g: u32, au_local_f: f32, av_local_f: f32,
                                  w_span: i32, h_span: i32) -> vec3<f32> {
    let B = i32(tex_params.rvq_block);
    let K_B = i32(RVQ_K_ORIG) * B;
    let w_tex = f32(K_B);
    let h_tex = f32(2 * K_B);
    let au0 = i32(floor(au_local_f));
    let av0 = i32(floor(av_local_f));
    let fu = au_local_f - f32(au0);
    let fv = av_local_f - f32(av0);
    let bu = au0 / B;
    let bv = av0 / B;
    let iu = au0 - bu * B;
    let iv = av0 - bv * B;
    let bw_g = w_span / B;
    let bid = rvq_surfel_off[g] + u32(bv) * u32(bw_g) + u32(bu);

    let ix = i32(bid & RVQ_IDX_TEX_W_MASK);
    let iy = i32(bid >> RVQ_IDX_TEX_W_SHIFT);
    let packed = textureLoad(rvq_packed_idx, vec2<i32>(ix, iy), 0).x;
    let p0 = packed & 0xFFFFu;
    let p1 = packed >> 16u;
    let c0_hi = i32(p0 >> 8u);   let c0_lo = i32(p0 & 0xFFu);
    let c1_hi = i32(p1 >> 8u);   let c1_lo = i32(p1 & 0xFFu);

    // UV at fractional position (c_lo*B + iu + fu, c_hi*B + iv + fv) — the
    // hw bilinear blends texels (iu, iu+1) × (iv, iv+1) with weights fu / fv,
    // which is exactly the atlas-level bilinear result.
    let uv0 = vec2<f32>(
        (f32(c0_lo * B + iu) + fu + 0.5) / w_tex,
        (f32(c0_hi * B + iv) + fv + 0.5) / h_tex);
    let uv1 = vec2<f32>(
        (f32(c1_lo * B + iu) + fu + 0.5) / w_tex,
        (f32(K_B + c1_hi * B + iv) + fv + 0.5) / h_tex);

    let rgba0 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv0, 0.0);
    let rgba1 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv1, 0.0);

    let s = tex_params.pair_scale;
    let o = tex_params.pair_offset;
    return rgba0.rgb * s.x + vec3<f32>(o.x)
         + rgba1.rgb * s.y + vec3<f32>(o.y);
}

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
    // The strip 0→1→2→3 forms two triangles tiling the unit square; the
    // unrolled bit-math here is a one-shader-cycle replacement for the
    // 8-case switch we used to stamp an octagon. Octagon was ~34% smaller
    // fragment area at 2× the vertex shader invocations — net loss after
    // OAC+SnugBox tightened the bbox enough that the corner-cut barely
    // mattered, and the extra vertex traffic was visible in the render-
    // pass timing on most GPUs.
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
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    // CUDA renderBakedCUDA pixel convention: integer pixel coord with origin
    // at top-left.
    let pixf = floor(in.position.xy);

    // \`--method mixed_3d\` untextured branch — Gauss is a 3D EWA ellipsoid,
    // not a 2DGS surfel. Top bit of gauss_id is the untextured flag (set in
    // surfel_cull at store time). When set:
    //   * Tu carries the inverse 2D covariance (a, b, c), NOT the transmat;
    //     Tv, Tw, depth_u, depth_v are zero (unused).
    //   * Falloff is \`α·exp(-½·m)\` with Mahalanobis
    //     \`m = a·dx² + 2b·dx·dy + c·dy²\` (dx = pixel − center).
    //   * No atlas residual — untextured Gausses carry a zero atlas rect at
    //     bake time, so the skip-texture branch even on the textured path
    //     would just add zero. Bypassing the atlas tap saves the sample.
    //   * Depth = depth_center (no surfel-plane interpolation).
    // Matches the CUDA bake-render's untex_ewa branch at
    // diff_surfel_bake_render/cuda_rasterizer/forward.cu:457.
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
        return vec4<f32>(color_e, 1.0) * alpha_e;
    }

    // Ray-disk intersection via the Tu/Tv/Tw cross-product formula. \`s\` is
    // the splat-local UV coordinate; ρ3d = s.s² + s.t².
    let k_vec = pixf.x * in.Tw - in.Tu;
    let l_vec = pixf.y * in.Tw - in.Tv;
    let p_vec = cross(k_vec, l_vec);
    if abs(p_vec.z) < 1e-12 { discard; }
    let s     = vec2<f32>(p_vec.x / p_vec.z, p_vec.y / p_vec.z);
    let rho3d = dot(s, s);

    // Screen-space low-pass (alpha_lp) for sub-pixel splats.
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);

    let depth = dot(in.depth_plane, vec3<f32>(s, 1.0));
    if depth < 0.2 { discard; }

    // Kernel dispatch — shape > 0 ⇒ trained with --kernel beta_scaled
    // (kernel_type 4); shape == 0 ⇒ bake came from --kernel gaussian (no
    // \`shape\` column in PLY → parser defaults to 0). The two paths differ in
    // both the falloff and the compact-support cutoff:
    //   beta_scaled: (1 − ρ3d/9)^β, hard cutoff at ρ3d = 9.
    //   gaussian:    exp(-ρ3d / 2), unbounded analytically (b<1/255 cull
    //                handles the far tail at ~ρ3d≈11 for α=1).
    var alpha_beta : f32;
    let sh = in.shape;
    if sh < 1e-6 {
        // --kernel gaussian: no pow, no beta cutoff. Skips the entire
        // pow/fast-path tree — the perf A/B point of this branch.
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        // Fast paths for shape ∈ {0.5, 1, 2, 4}. Bakes that have been
        // shape-quantized (see scripts/quantize_shape.py / \`*_quant\`
        // bundles) will hit one of these every fragment, skipping pow()
        // entirely. Non-quantized bakes fall through to pow on most
        // surfels — only the small subset that happen to have shape near
        // an integer power get the speedup naturally. pow is ~30-50
        // cycles, the integer-power paths are 0-3 mul; near-pure
        // quantized bakes get a ~10× win on this op.
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

    // Atlas residual lookup. Three paths share one fragment shader:
    //   • BC7 / ASTC: surfel UV → atlas pixel coord → hw bilinear sample +
    //     dequantize (resid = rgba * atlas_scale + atlas_offset).
    //   • RVQ-paired (format=5): per-fragment codebook lookup. Bilinear over
    //     adjacent codewords MUST happen in software (the codebook texture
    //     packs unrelated codewords next to each other, so hw bilinear within
    //     it would average across codeword boundaries).
    // Skipped when atlas_width = 0 (no atlas in the bundle, or user disabled
    // via tweakpane → host writes 0).
    if tex_params.atlas_width > 0u {
        let E      = tex_params.uv_extent;
        let r_base = in.gauss_id * 5u;
        let u0       = atlas_rects[r_base + 0u];
        let v0_local = atlas_rects[r_base + 1u];
        let w_span   = atlas_rects[r_base + 2u];
        let h_span   = atlas_rects[r_base + 3u];

        if tex_params.atlas_format == ATLAS_FORMAT_RVQ_PAIRED {
            // Rect-local floating-point sample point. Dispatch fast / slow:
            //   Fast path (1 hw-bilinear cb sample per pair = 2 cb samples
            //     total): the 2×2 atlas-texel neighborhood needed for the
            //     bilinear is fully inside ONE codeword tile AND inside the
            //     surfel rect. Hw bilinear inside the tile gives the exact
            //     atlas-level bilinear result for free.
            //   Slow path (4 sw taps × 2 cb samples = 8 cb samples): the
            //     2×2 neighborhood crosses a codeword-tile boundary, or the
            //     surfel rect's right/bottom edge. Fall back to the original
            //     4-tap sw mix.
            // Fast-path coverage: ~56% at B=4, ~77% at B=8. Codebook sampler
            // is \`linear\` everywhere; the slow path's integer-centered UVs
            // produce frac=0 → hw bilinear collapses to a single texel value
            // (bit-equivalent to the old \`nearest\` behavior).
            let au_local_f = (s.x + E) / (2.0 * E) * w_span;
            let av_local_f = (s.y + E) / (2.0 * E) * h_span;
            let au0 = i32(floor(au_local_f));
            let av0 = i32(floor(av_local_f));
            let w_i = i32(w_span);
            let h_i = i32(h_span);
            let B = i32(tex_params.rvq_block);
            let iu_mod = au0 - (au0 / B) * B;
            let iv_mod = av0 - (av0 / B) * B;
            let fast = (iu_mod  < B   - 1) && (iv_mod  < B   - 1) &&
                       (au0    < w_i - 1) && (av0     < h_i - 1) &&
                       (au0   >= 0)       && (av0    >= 0);
            var residual : vec3<f32>;
            if fast {
                residual = sample_rvq_paired_hw_bilinear(
                    in.gauss_id, au_local_f, av_local_f, w_i, h_i);
            } else {
                let fu = au_local_f - f32(au0);
                let fv = av_local_f - f32(av0);
                let c00 = sample_rvq_paired(in.gauss_id, au0,     av0,     w_i, h_i);
                let c10 = sample_rvq_paired(in.gauss_id, au0 + 1, av0,     w_i, h_i);
                let c01 = sample_rvq_paired(in.gauss_id, au0,     av0 + 1, w_i, h_i);
                let c11 = sample_rvq_paired(in.gauss_id, au0 + 1, av0 + 1, w_i, h_i);
                let top = mix(c00, c10, fu);
                let bot = mix(c01, c11, fu);
                residual = mix(top, bot, fv);
            }
            color = color + residual;
        } else {
            // BC7 / ASTC path.
            let layer = i32(atlas_rects[r_base + 4u]);
            let au = u0       + (s.x + E) / (2.0 * E) * w_span;
            let av = v0_local + (s.y + E) / (2.0 * E) * h_span;
            let uv = vec2<f32>(
                (au + 0.5) / f32(tex_params.atlas_width),
                (av + 0.5) / f32(tex_params.atlas_layer_h),
            );
            let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, 0.0);
            color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
        }
    }
    color = max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));

    return vec4<f32>(color, 1.0) * b;
}
`,Nl=`const WG_SIZE = 256u;
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
}`,$l=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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

// 80-byte output splat — full transmat columns + screen bbox + color slot
// (filled by preprocess) + depth plane for ray-disk in fragment.
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
                if dot(R[2], xyz - camera_pos) > 0.0 {
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
                tu = T_mat[0];
                tv = T_mat[1];
                tw = T_mat[2];
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
        // We leave color_* zero — preprocess fills it (per-frame view-dep eval).
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
            0u,
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
`,Wl=`// shader implementing gpu radix sort.

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
`,jl=`// shader implementing gpu radix sort.

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
`,Kl=`// ============================================================================
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
}`,Jr=32,ds=1,ps=2,Or=4,Hl=0,Re=new ArrayBuffer(Jr),ce={canvas_size:new Uint32Array(Re,0,2),accel_flags:new Uint32Array(Re,8,1),feature_mode:new Uint32Array(Re,12,1),gaussian_scaling:new Float32Array(Re,16,1),sh_bias:new Float32Array(Re,20,1),color_K:new Uint32Array(Re,24,1),walltime:new Float32Array(Re,28,1)};function Yl(o){ce.canvas_size[0]=o.width>>>0,ce.canvas_size[1]=o.height>>>0,ce.accel_flags[0]=(o.accel_flags??ds|ps)>>>0,ce.feature_mode[0]=(o.feature_mode??Hl)>>>0,ce.gaussian_scaling[0]=o.gaussian_scaling??1,ce.sh_bias[0]=o.sh_bias??.5,ce.color_K[0]=(o.color_K??0)>>>0,ce.walltime[0]=o.walltime??0}function ti(o,l){o.queue.writeBuffer(l,0,Re)}function Un(o,l,f){f&&o&&l&&ti(o,l)}function vn(o,l,f,E,x=!0){ce.canvas_size[0]=o>>>0,ce.canvas_size[1]=l>>>0,Un(f??null,E??null,x)}function Fr(o,l,f,E=!0){ce.gaussian_scaling[0]=o,Un(l??null,f??null,E)}function qr(o,l,f,E=!0){ce.sh_bias[0]=o,Un(l??null,f??null,E)}function Zl(o,l,f,E=!0){let x=ce.accel_flags[0];o.oac!==void 0&&(x=o.oac?x|ds:x&~ds),o.spr!==void 0&&(x=o.spr?x|ps:x&~ps),o.bfc!==void 0&&(x=o.bfc?x|Or:x&~Or),ce.accel_flags[0]=x>>>0,Un(l??null,f??null,E)}const Nr=256,Xl=Jr,Ql=8,Jl=80,tc=12,ms=8,Ee=1<<ms,Fe=256,Rn=32/ms;function $r(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ec(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[f]}),x=C=>o.createComputePipeline({layout:E,compute:{module:l,entryPoint:C,constants:{WG_SIZE:Fe}}});return{l0TileScan:x("prefix_l0_tile_scan"),l1TileScanOnL0:x("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:x("prefix_scan_l1_sums"),addL1ToL0:x("prefix_add_l1_to_l0_offsets"),addL0ToElems:x("prefix_add_l0_to_elements"),computeDigitBase:x("compute_digit_base"),prefixBindGroupLayout:f}}function nc(o,l,f){const E=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[E]}),M=o.createPipelineLayout({bindGroupLayouts:[x]}),G=[];for(let A=0;A<Rn;A++){const L={PASS_ID:A,RS_RADIX_LOG2:ms,RS_RADIX_SIZE:Ee};G.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:l,entryPoint:"local_histogram_pass",constants:L}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:L}})})}return{passes:G,localHistogramBindGroupLayout:E,scatterBindGroupLayout:x}}function sc(o){const l=o.createShaderModule({label:"local histogram",code:jl}),f=o.createShaderModule({label:"scatter",code:Wl}),E=o.createShaderModule({label:"blelloch prefix",code:Kl}),x=ec(o,E),C=nc(o,l,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:x}}function rc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),x=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(48));const M=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),G=M.createView({dimension:"2d"}),A=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),L=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),V=L.createView({dimension:"2d"}),q=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Z={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:E,rectsBuffer:x,texParamsBuffer:C,meta:Z,rvqCodebookTexture:M,rvqCodebookView:G,rvqCodebookSampler:A,rvqPackedIndicesTexture:L,rvqPackedIndicesView:V,rvqSurfelOffsetsBuffer:q}}class ic{constructor(l,f,E,x,C,M=null){tt(this,"device");tt(this,"pc");tt(this,"presentationFormat");tt(this,"camera_buffer");tt(this,"render_settings_buffer");tt(this,"draw_indirect_buffer");tt(this,"splat_2d_buffer");tt(this,"querySet");tt(this,"resolveBuffer");tt(this,"resultBuffer");tt(this,"queriesPerFrame",Ql);tt(this,"queryCapacityFrames",200);tt(this,"sort_prefixBindGroup");tt(this,"sort_pipelines");tt(this,"sort_localHistogramBindGroups");tt(this,"sort_scatterBindGroups");tt(this,"lastFrame",0);tt(this,"frameCount",0);tt(this,"preprocessPipeline");tt(this,"cullPipeline");tt(this,"renderPipeline");tt(this,"indirectPipeline");tt(this,"sort_info_buffer");tt(this,"sort_ping_pong");tt(this,"crsBg");tt(this,"gsBg");tt(this,"cullBg2");tt(this,"preprocessBg1");tt(this,"renderSplatsBindGroup");tt(this,"renderSettingsBindGroup");tt(this,"atlasBindGroup");tt(this,"indirectBindGroup");tt(this,"sh_solvers_buffer");tt(this,"bgColor",[0,0,0,0]);tt(this,"showPerfDialogNext",!1);tt(this,"requestReorderNextFrame",!1);tt(this,"reorderInFlight",!1);tt(this,"downloadOnceNextRead",!1);tt(this,"downloadOnceFileName","fps_metrics");tt(this,"allFrameTimes",[]);tt(this,"lastStageBreakdownMs",null);tt(this,"timeQueryEnabled");tt(this,"atlas");const G=C.includes("timestamp-query");this.timeQueryEnabled=G,G&&ie("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=E,this.camera_buffer=x,this.atlas=M??rc(f),f.addEventListener("uncapturederror",H=>{console.error("A WebGPU error was not captured:",H.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Fe-1)/Fe)+1)*Fe,L=Math.ceil(A/Fe);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const V=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});{const H=window.__halloumiProgress??(rt=>{});H("pipeline: radix sort (buildPipelines) compile…"),this.sort_pipelines=sc(f),H("pipeline: radix sort OK")}const q=[$r(A,f),$r(A,f)],Z=f.createBuffer({label:"workgroup histograms",size:L*Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=f.createBuffer({label:"workgroup prefixes",size:L*Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=f.createBuffer({label:"digit base",size:Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=Math.ceil(L/Fe),$=Math.ceil(O/Fe),lt=f.createBuffer({label:"prefix l0 sums",size:O*Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=f.createBuffer({label:"prefix l0 offsets",size:O*Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=f.createBuffer({label:"prefix l1 sums",size:$*Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=f.createBuffer({label:"prefix l1 offsets",size:$*Ee*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:J}},{binding:3,resource:{buffer:lt}},{binding:4,resource:{buffer:z}},{binding:5,resource:{buffer:R}},{binding:6,resource:{buffer:U}},{binding:7,resource:{buffer:F}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:q[0].sort_depths_buffer}},{binding:2,resource:{buffer:Z}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:q[1].sort_depths_buffer}},{binding:2,resource:{buffer:Z}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:q[0].sort_depths_buffer}},{binding:3,resource:{buffer:q[1].sort_depths_buffer}},{binding:4,resource:{buffer:q[0].sort_indices_buffer}},{binding:5,resource:{buffer:q[1].sort_indices_buffer}},{binding:6,resource:{buffer:J}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:q[1].sort_depths_buffer}},{binding:3,resource:{buffer:q[0].sort_depths_buffer}},{binding:4,resource:{buffer:q[1].sort_indices_buffer}},{binding:5,resource:{buffer:q[0].sort_indices_buffer}},{binding:6,resource:{buffer:J}}]})],this.sort_info_buffer=V,this.sort_ping_pong=q;const ct=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),K=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Q=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Y=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ct,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:K,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:Q,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Y,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const et=window.__halloumiProgress??(H=>{});et("pipeline: indirect_dispatch compile…");const bt=this.device.createShaderModule({code:Nl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:bt,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),et("pipeline: indirect_dispatch OK"),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),et("pipeline: surfel_cull compile…");const Vt=this.device.createShaderModule({code:$l});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ct,K,Q]}),compute:{module:Vt,entryPoint:"surfel_cull"}}),et("pipeline: surfel_cull OK"),et("pipeline: preprocess_2dgs compile…");const Rt=this.device.createShaderModule({code:Fl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ct,Y]}),compute:{module:Rt,entryPoint:"preprocess"}}),et("pipeline: preprocess_2dgs OK"),et("pipeline: render_2dgs shader compile…");const Tt=this.device.createShaderModule({code:ql});Tt.getCompilationInfo().then(H=>{H.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),H.messages.forEach(rt=>{(rt.type==="error"?console.error:rt.type==="warning"?console.warn:console.log)(`${rt.type} (line ${rt.lineNum}:${rt.linePos}): ${rt.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ft=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Et=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),yt=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]});this.device.pushErrorScope("validation"),et("pipeline: render_2dgs createRenderPipeline…"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ft,Et,yt]}),vertex:{module:Tt,entryPoint:"vs_main"},fragment:{module:Tt,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(H=>{H?(et("render_2dgs pipeline VALIDATION ERROR: "+H.message),console.error("[render_2dgs] pipeline create validation error:",H.message)):(et("pipeline: render_2dgs OK"),console.log("[render_2dgs] pipeline created OK"))}),et("all pipelines dispatched (async validation pending)"),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ft,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:Et,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:yt,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&Xr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),E=f*Uint32Array.BYTES_PER_ELEMENT;if(E===0){console.log("[DEBUG] No indices to read.");return}const x=this.device.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[0].sort_indices_buffer,0,x,0,E),this.device.queue.submit([C.finish()]),await x.mapAsync(GPUMapMode.READ);const M=new Uint32Array(x.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),x.unmap()}frame(l,f,E=!0){const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=E&&this.timeQueryEnabled,G=this.frameCount<3&&window.__halloumiProgress?window.__halloumiProgress:F=>{};G(`frame#${this.frameCount} begin (num_points=${this.pc.num_points}, tsw=${M})`);const A=new URLSearchParams(window.location.search).get("nocull")==="1",L=new URLSearchParams(window.location.search).get("noprep")==="1";if(!A){l.clearBuffer(this.sort_info_buffer,0,4),G(`  cull dispatch: wg=${Math.ceil(this.pc.num_points/Nr)}`);const F={label:"cull"};M&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const O=l.beginComputePass(F);O.setPipeline(this.cullPipeline),O.setBindGroup(0,this.crsBg),O.setBindGroup(1,this.gsBg),O.setBindGroup(2,this.cullBg2);const $=Math.ceil(this.pc.num_points/Nr);O.dispatchWorkgroups($,1,1),O.end()}G("  indirect dispatch pass");{const F=l.beginComputePass({label:"calculate indirect dispatch"});F.setPipeline(this.indirectPipeline),F.setBindGroup(0,this.indirectBindGroup),F.dispatchWorkgroups(1,1,1),F.end()}if(G("  preprocess pass"+(L?" — SKIPPED via ?noprep=1":"")),!L){const F={label:"preprocess"};M&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const O=l.beginComputePass(F);O.setPipeline(this.preprocessPipeline),O.setBindGroup(0,this.crsBg),O.setBindGroup(1,this.preprocessBg1),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}const V=new URLSearchParams(window.location.search).get("nosort")==="1",q=new URLSearchParams(window.location.search).get("noprep")==="1",Z=new URLSearchParams(window.location.search).get("nocull")==="1";(q||Z||V)&&G(`  DEBUG flags: nocull=${Z} noprep=${q} nosort=${V}`),G("  radix sort loop begin (TOTAL_PASSES="+Rn+(V?", SKIPPED via ?nosort=1":"")+")");const J=V?0:Rn;for(let F=0;F<J;F++){const O=F&1,$=this.sort_pipelines.passes[F],lt=this.sort_localHistogramBindGroups[O],z=this.sort_scatterBindGroups[O];{const R={label:`upsweep_round${F}`};M&&F==0&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const U=l.beginComputePass(R);U.setPipeline($.localHistogram),U.setBindGroup(0,lt),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),U.end()}{const R=l.beginComputePass({label:`prefix_round${F} - l0TileScan`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - l1TileScanOnL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - l1ScanSums`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,Ee,1),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - addL1ToL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - addL0ToElems`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - computeDigitBase`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,1,1),R.end()}{const R={label:`scatter_round${F}`};M&&F==Rn-1&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const U=l.beginComputePass(R);U.setPipeline($.scatterElements),U.setBindGroup(0,z),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),U.end()}}{const F={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,endOfPassWriteIndex:C+7});const O=new URLSearchParams(window.location.search).get("nodraw")==="1",$=new URLSearchParams(window.location.search).get("cyan")==="1";$&&(F.colorAttachments[0].clearValue={r:0,g:.7,b:.9,a:1}),G("  render pass begin"+(O?" — DRAWINDIRECT SKIPPED via ?nodraw=1":"")+($?" (cyan clear)":""));const lt=l.beginRenderPass(F);O||(lt.setPipeline(this.renderPipeline),lt.setBindGroup(0,this.renderSettingsBindGroup),lt.setBindGroup(1,this.renderSplatsBindGroup),lt.setBindGroup(2,this.atlasBindGroup),lt.drawIndirect(this.draw_indirect_buffer,0)),lt.end()}G("  frame encoded (submit is caller's responsibility)"),this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const E=this.device.createCommandEncoder({label:"timestamp resolve encoder"});E.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),E.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([E.finish()]),await this.device.queue.onSubmittedWorkDone();const x=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),G=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:x.length},()=>[]);let L=0;for(let lt=0;lt<M;lt++){const z=(G+lt)%this.queryCapacityFrames,R=z*this.queriesPerFrame;let U=!0;for(let ct=0;ct<x.length;ct++){const[K,Q,Y]=x[ct];if(C[R+Y]===0n||C[R+Q]===0n||C[R+Q]<C[R+Y]){U=!1;break}}if(!U){!f&&z%60===0&&console.debug("[timestamp] frame slot",z,"contains unwritten (0) timestamps, skipped in stats");continue}L++;for(let ct=0;ct<x.length;ct++){const[K,Q,Y]=x[ct],et=Number(C[R+Y]),bt=Number(C[R+Q]);A[ct].push((bt-et)/1e6)}}if(L===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const V=[];let q=0,Z=0,J=0;for(let lt=0;lt<x.length;lt++){const z=x[lt][0],R=A[lt];let U=0;if(z==="Total"){const ct=this.allFrameTimes;U=ct.reduce((Y,et)=>Y+et,0)/ct.length;const K=[...ct].sort((Y,et)=>Y-et);q=K[Math.floor(K.length*.99)]||0;const Q=ct.reduce((Y,et)=>Y+Math.pow(et-U,2),0)/ct.length;Z=Math.sqrt(Q),J=U}else U=R.reduce((ct,K)=>ct+K,0)/R.length;V.push([z,U])}this.lastFrame+=this.frameCount,this.frameCount=0;const F=Object.fromEntries(V);this.lastStageBreakdownMs={cull:F.Culling??0,preprocess:F.Preprocess??0,sort:F.Sort??0,render:F.Render??0,total:F.Total??0};const $=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([lt,z])=>`${lt}: ${z.toFixed(3)}ms`).join(`
`)+`
Total P99: ${q.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${J.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log($),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const lt=`Stage,ms
`,z=V.map(([ct,K])=>`${ct},${K.toFixed(3)}`).join(`
`),R="data:text/csv;charset=utf-8,"+encodeURIComponent(lt+z),U=document.createElement("a");U.href=R,U.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(U),U.click(),U.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert($)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Xl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,E=l?l.height:1;Yl({width:f,height:E,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ti(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:en(this.pc.num_points*Jl),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:en(this.pc.num_points*tc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,E=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${E}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function oc(o,l){return 2*Math.atan(l/(2*o))}function ac(o,l,f,E){const x=Math.tan(E/2),C=Math.tan(f/2),M=x*o,G=-M,A=C*o,L=-A,V=jt.create();return V[0]=2*o/(A-L),V[5]=-2*o/(M-G),V[2]=(A+L)/(A-L),V[6]=(M+G)/(M-G),V[14]=1,V[10]=l/(l-o),V[11]=-(l*o)/(l-o),jt.transpose(V,V),V}async function lc(o){ie(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return ie(`loaded cameras count: ${f.length}`),f.map(E=>{const x=I.clone(E.position),C=he.create(...E.rotation.flat()),M=C[0],G=C[4],A=C[8],L=C[1],V=C[5],q=C[9],Z=C[2],J=C[6],F=C[10];M*(V*F-q*J)-G*(L*F-q*Z)+A*(L*J-V*Z)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const $=jt.fromMat3(C);return{position:x,rotation:$,img_name:E.img_name,id:E.id}})}const cc=4*2,uc=4*16,ei=4*uc+2*cc;function dc(o){return o.createBuffer({label:"camera uniform",size:ei,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const re=new Float32Array(ei/Float32Array.BYTES_PER_ELEMENT);function pc(o,l,f,E,x,C){const M=new Float32Array(16),G=new Float32Array(16);jt.inverse(f,M),jt.inverse(E,G);const A=.5*x*E[0],L=.5*C*E[5];let V=0;re.set(f,V),V+=16,re.set(M,V),V+=16,re.set(E,V),V+=16,re.set(G,V),V+=16,re[V++]=x,re[V++]=C,re[V++]=A,re[V++]=L,o.queue.writeBuffer(l,0,re)}const In=class In{constructor(l,f){tt(this,"uniform_buffer");tt(this,"position",I.create());tt(this,"rotation",jt.create());tt(this,"fovY",45/180*Math.PI);tt(this,"fovX");tt(this,"focal",Ur.create());tt(this,"viewport",Ur.create());tt(this,"view_matrix",jt.identity());tt(this,"view_inv_matrix",jt.identity());tt(this,"proj_matrix",jt.identity());tt(this,"proj_inv_matrix",jt.identity());tt(this,"_negPos",I.create());tt(this,"look",I.create(0,0,1));tt(this,"up",I.create(0,1,0));tt(this,"right",I.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=dc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=oc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=ac(.01,100,this.fovX,this.fovY),jt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],jt.copy(this.rotation,this.view_matrix),jt.translate(this.view_matrix,this._negPos,this.view_matrix),jt.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(In.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;re.set(this.view_matrix,l),l+=16,re.set(this.view_inv_matrix,l),l+=16,re.set(this.proj_matrix,l),l+=16,re.set(this.proj_inv_matrix,l),l+=16,re.set(this.viewport,l),l+=2,re.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,re)}set_preset(l){I.copy(l.position,this.position),jt.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};tt(In,"Z_AXIS",I.create(0,0,1));let hs=In;const hc=I.create(1,0,0),fc=I.create(0,1,0);function _c(o,l){const f=o[0],E=o[4],x=o[8],C=o[1],M=o[5],G=o[9],A=o[2],L=o[6],V=o[10],q=f+M+V;let Z,J,F,O;if(q>0){const $=.5/Math.sqrt(q+1);Z=.25/$,J=(L-G)*$,F=(x-A)*$,O=(C-E)*$}else if(f>M&&f>V){const $=2*Math.sqrt(1+f-M-V);Z=(L-G)/$,J=.25*$,F=(E+C)/$,O=(x+A)/$}else if(M>V){const $=2*Math.sqrt(1+M-f-V);Z=(x-A)/$,J=(E+C)/$,F=.25*$,O=(G+L)/$}else{const $=2*Math.sqrt(1+V-f-M);Z=(C-E)/$,J=(x+A)/$,F=(G+L)/$,O=.25*$}return l[0]=J,l[1]=F,l[2]=O,l[3]=Z,l}class mc{constructor(l){tt(this,"element");tt(this,"enabled",!0);tt(this,"center",I.create(0,0,0));tt(this,"up",I.create(0,1,0));tt(this,"rotation",[0,0]);tt(this,"shift",[0,0]);tt(this,"scroll",0);tt(this,"speed",.1);tt(this,"sensitivity",.08);tt(this,"leftPressed",!1);tt(this,"rightPressed",!1);tt(this,"leftDragPans",!1);tt(this,"lastX",0);tt(this,"lastY",0);tt(this,"touches",new Map);tt(this,"lastTouchCenter",null);tt(this,"lastPinchDistance",null);tt(this,"lastTwoFingerAngle",null);tt(this,"lastTouchCount",0);tt(this,"roll",0);tt(this,"_dir",I.create());tt(this,"_right",I.create());tt(this,"_upCam",I.create());tt(this,"_scratch",I.create());tt(this,"_qY",se.create());tt(this,"_qX",se.create());tt(this,"_qRot",se.create());tt(this,"_qLocal",se.create());tt(this,"_qWorldToCam",se.create());tt(this,"_scratchMat3",he.create());tt(this,"bboxMin",null);tt(this,"bboxMax",null);tt(this,"anchor",I.create(0,0,0));tt(this,"downCallback",l=>{var f,E,x,C;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(E=(f=l.target)==null?void 0:f.setPointerCapture)==null||E.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(C=(x=l.target)==null?void 0:x.setPointerCapture)==null||C.call(x,l.pointerId),l.preventDefault())}});tt(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,E=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=E):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=E)});tt(this,"upCallback",l=>{var f,E,x,C;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(E=(f=l.target)==null?void 0:f.releasePointerCapture)==null||E.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(x=l.target)==null?void 0:x.releasePointerCapture)==null||C.call(x,l.pointerId),l.preventDefault()});tt(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;I.set(f[2],f[6],f[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(f[0],f[1],f[2]);const E=(l[0]+f[0])*.5,x=(l[1]+f[1])*.5,C=(l[2]+f[2])*.5;I.set(E,x,C,this.center),I.set(E,x,C,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let E=-1/0,x=1/0,C=!1;for(let M=0;M<3;M++){const G=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],L=this.bboxMax[M]-this.camera.position[M];if(Math.abs(G)>1e-8){const V=A/G,q=L/G;E=Math.max(E,Math.min(V,q)),x=Math.min(x,Math.max(V,q))}else if(A>0||L<0){C=!0;break}}!C&&E<=x&&x>0&&(f=(Math.max(E,0)+x)*.5)}if(f===null||!isFinite(f)||f<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const E=I.dot(this._scratch,this._dir);f=E>.001?E:I.length(this._scratch)}f=Math.max(.1,f),I.scale(this._dir,f,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const E=f.x-this.lastTouchCenter[0],x=f.y-this.lastTouchCenter[1];this.rotation[0]+=E*.3,this.rotation[1]-=x*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),E=(f[0].x+f[1].x)*.5,x=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,M=f[1].y-f[0].y,G=Math.hypot(C,M),A=Math.atan2(M,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const L=E-this.lastTouchCenter[0],V=x-this.lastTouchCenter[1],q=Math.hypot(L,V),Z=Math.abs(G-this.lastPinchDistance);let J=A-this.lastTwoFingerAngle;J>Math.PI&&(J-=2*Math.PI),J<-Math.PI&&(J+=2*Math.PI),q>.5&&(this.shift[1]-=L,this.shift[0]+=V),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(G/this.lastPinchDistance)*10),Math.abs(J)>.0087&&(this.roll+=-J)}this.lastTouchCenter=[E,x],this.lastPinchDistance=G,this.lastTwoFingerAngle=A}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const O=f.rotation;this.up[0]=O[1],this.up[1]=O[5],this.up[2]=O[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let E=!1;if(Math.abs(this.roll)>1e-4){const O=f.rotation;I.set(O[2],O[6],O[10],this._scratch),I.normalize(this._scratch,this._scratch),se.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,E=!0}I.subtract(f.position,this.center,this._dir);let x=I.length(this._dir);x<1e-6&&(x=1e-6);const C=Math.exp(Math.log(x)+this.scroll*l*10*this.speed);I.scale(this._dir,C/x,this._dir),x=C;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const G=I.create(M[1],M[5],M[9]);I.normalize(G,G),I.length(G)<1e-6&&I.set(0,1,0,G);const A=l*this.speed*.1*x,L=this.shift[1]*A,V=-this.shift[0]*A;I.scale(this._right,L,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position),I.scale(G,V,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position);const q=this.rotation[0]*l*this.sensitivity,Z=this.rotation[1]*l*this.sensitivity;if(Math.abs(q)>1e-5||Math.abs(Z)>1e-5||E){const O=f.rotation;_c(O,this._qWorldToCam),se.fromAxisAngle(hc,-Z,this._qX),se.fromAxisAngle(fc,-q,this._qY),se.multiply(this._qX,this._qY,this._qLocal),se.normalize(this._qLocal,this._qLocal),se.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),se.normalize(this._qWorldToCam,this._qWorldToCam),he.fromQuat(this._qWorldToCam,this._scratchMat3),jt.fromMat3(this._scratchMat3,f.rotation);const $=f.rotation,lt=$[2],z=$[6],R=$[10];f.position[0]=this.center[0]-lt*x,f.position[1]=this.center[1]-z*x,f.position[2]=this.center[2]-R*x,this.up[0]=$[1],this.up[1]=$[5],this.up[2]=$[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,f.position);f.update_buffer();const F=Math.pow(.8,l*60);this.rotation[0]*=F,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=F,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=F,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=F,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=F,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ni(o){const l=I.create();for(const f of o)I.add(l,f,l);return I.scale(l,1/Math.max(o.length,1),l)}function si(o,l){const f=he.create();he.inverse(o,f);const E=I.create();return E[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],E[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],E[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],E}function bc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],E=(A,L)=>l[A*3+L],x=(A,L,V)=>{l[A*3+L]=V},C=(A,L)=>f[A*3+L],M=(A,L,V)=>{f[A*3+L]=V};for(let A=0;A<30;A++){let L=0,V=1,q=Math.abs(E(0,1));if(Math.abs(E(0,2))>q&&(L=0,V=2,q=Math.abs(E(0,2))),Math.abs(E(1,2))>q&&(L=1,V=2,q=Math.abs(E(1,2))),q<1e-12)break;const Z=E(L,L),J=E(V,V),F=E(L,V);let O;Math.abs(Z-J)<1e-30?O=Math.PI/4*Math.sign(F):O=.5*Math.atan2(2*F,Z-J);const $=Math.cos(O),lt=Math.sin(O);for(let z=0;z<3;z++){const R=E(z,L),U=E(z,V);x(z,L,$*R+lt*U),x(z,V,-lt*R+$*U)}for(let z=0;z<3;z++){const R=E(L,z),U=E(V,z);x(L,z,$*R+lt*U),x(V,z,-lt*R+$*U)}for(let z=0;z<3;z++){const R=C(z,L),U=C(z,V);M(z,L,$*R+lt*U),M(z,V,-lt*R+$*U)}}const G=[];for(let A=0;A<3;A++)G.push({val:E(A,A),vec:I.create(C(0,A),C(1,A),C(2,A))});return G.sort((A,L)=>L.val-A.val),{vals:[G[0].val,G[1].val,G[2].val],vecs:[G[0].vec,G[1].vec,G[2].vec]}}function vc(o,l){const f=ni(o);let E=0,x=0,C=0,M=0,G=0,A=0;for(const F of o){const O=F[0]-f[0],$=F[1]-f[1],lt=F[2]-f[2];E+=O*O,x+=O*$,C+=O*lt,M+=$*$,G+=$*lt,A+=lt*lt}const L=[E,x,C,x,M,G,C,G,A],{vecs:V}=bc(L);let q=V[0],Z=V[1],J=V[2];return I.dot(J,l)<0&&(I.scale(J,-1,J),I.scale(Z,-1,Z)),{centroid:f,normal:J,u:q,v:Z}}function gc(o){let l=0,f=0,E=0,x=0,C=0,M=0,G=0,A=0,L=0;for(const[$,lt]of o){const z=-2*$,R=-2*lt,U=1,ct=-($*$+lt*lt);l+=z*z,f+=z*R,E+=z*U,x+=R*R,C+=R*U,M+=U*U,G+=z*ct,A+=R*ct,L+=U*ct}const V=he.create(l,f,E,f,x,C,E,C,M),q=si(V,I.create(G,A,L)),Z=q[0],J=q[1],F=q[2],O=Z*Z+J*J-F;return{center:[Z,J],radius:Math.sqrt(Math.max(O,1e-12))}}function wc(o,l){let f=0,E=0,x=0,C=0,M=0,G=0,A=0,L=0,V=0;for(let Z=0;Z<o.length;Z++){const J=o[Z],F=I.normalize(l[Z],I.create()),O=1-F[0]*F[0],$=-F[0]*F[1],lt=-F[0]*F[2],z=1-F[1]*F[1],R=-F[1]*F[2],U=1-F[2]*F[2];f+=O,E+=$,x+=lt,C+=z,M+=R,G+=U,A+=O*J[0]+$*J[1]+lt*J[2],L+=$*J[0]+z*J[1]+R*J[2],V+=lt*J[0]+R*J[1]+U*J[2]}const q=he.create(f,E,x,E,C,M,x,M,G);return si(q,I.create(A,L,V))}function ri(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,E=l.radiusScale??1,x=l.alignFirst??!0,C=(l.direction??"ccw")==="ccw"?1:-1,M=o.map(Y=>I.clone(Y.position)),G=o.map(Y=>{const et=Y.rotation;return I.create(et[8],et[9],et[10])}),A=o.map(Y=>{const et=Y.rotation;return I.create(et[4],et[5],et[6])}),L=ni(A),V=I.normalize(I.scale(L,-1,I.create())),{centroid:q,normal:Z,u:J,v:F}=vc(M,V),O=M.map(Y=>{const et=I.sub(Y,q,I.create());return[I.dot(et,J),I.dot(et,F)]}),{center:$,radius:lt}=gc(O),z=lt*E,R=I.add(q,I.add(I.scale(J,$[0],I.create()),I.scale(F,$[1],I.create()),I.create()),I.create()),U=wc(M,G),ct=z*Math.tan(f*Math.PI/180),K=I.sub(U,I.scale(Z,ct,I.create()),I.create());let Q=0;if(x){const Y=I.sub(M[0],R,I.create());Q=Math.atan2(I.dot(Y,F),I.dot(Y,J))/(2*Math.PI)%1,Q<0&&(Q+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${z.toFixed(2)}, tilt=${f}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${Q.toFixed(3)}`),{center:R,radius:z,normal:Z,u:J,v:F,lookAt:K,startPhase:Q,direction:C}}function ii(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,E=Math.cos(f),x=Math.sin(f),C=I.add(o.center,I.add(I.scale(o.u,o.radius*E,I.create()),I.scale(o.v,o.radius*x,I.create()),I.create()),I.create()),M=I.normalize(I.sub(o.lookAt,C,I.create())),G=I.cross(M,o.normal,I.create());I.length(G)<1e-6&&I.copy(o.u,G),I.normalize(G,G);const A=I.cross(M,G,I.create());I.normalize(A,A);const L=jt.create();return L[0]=G[0],L[1]=A[0],L[2]=M[0],L[3]=0,L[4]=G[1],L[5]=A[1],L[6]=M[1],L[7]=0,L[8]=G[2],L[9]=A[2],L[10]=M[2],L[11]=0,L[12]=0,L[13]=0,L[14]=0,L[15]=1,{position:C,rotation:L,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function xc(o,l={}){const f=ri(o,l);if(!f)return[];const E=l.numViews??120;return Array.from({length:E},(x,C)=>({...ii(f,C/E),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}async function yc(){if(!("xr"in navigator)||!navigator.xr)return!1;try{return await navigator.xr.isSessionSupported("immersive-vr")}catch{return!1}}async function Pc(o){const l=window.XRGPUBinding??window.XRWebGPUBinding;if(!l)throw new Error("XRGPUBinding is not available in this browser. On Quest Browser you may need to enable it under chrome://flags/#webxr-webgpu-binding (inspect via ADB). Falling back to a WebGL2 XR layer is a future TODO.");const f=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local"],optionalFeatures:["local-floor","bounded-floor","hand-tracking"]}),E=new l(f,o.device),x=E.createProjectionLayer({colorFormat:"rgba8unorm-srgb",depthStencilFormat:"depth24plus",scaleFactor:1});f.updateRenderState({layers:[x]});const C=await f.requestReferenceSpace("local"),M=I.create(0,0,-1.5),G=jt.identity(),A=jt.create(),L=jt.create(),V=new Promise(Z=>{f.addEventListener("end",()=>{o.onExit(),Z()})}),q=performance.now();f.requestAnimationFrame(function Z(J,F){f.requestAnimationFrame(Z);const O=F.getViewerPose(C);if(!O)return;Sc(f,F,C,M,G),jt.copy(G,A);const $=I.create(-M[0],-M[1],-M[2]);jt.translate(A,$,A);const lt=o.device.createCommandEncoder({label:"xr-frame"});for(const z of O.views){const R=E.getViewSubImage(x,z),U=R.colorTexture.createView(),ct=R.viewport,K=z.transform.inverse.matrix;jt.multiply(K,A,L),pc(o.device,o.camera.uniform_buffer,L,z.projectionMatrix,ct.width,ct.height),o.renderer.frame(lt,U,!1)}o.device.queue.submit([lt.finish()])}),console.log(`[XR] session started in ${(performance.now()-q).toFixed(1)} ms; ${f.inputSources.length} controllers`),await V}function Sc(o,l,f,E,x){const M=.013888888888888888,G=1.5/72,A=.8/72;for(const L of o.inputSources){const V=L.gamepad;if(!V||V.axes.length<2)continue;const q=V.axes[2]??V.axes[0],Z=V.axes[3]??V.axes[1];if(!(Math.abs(q)<.15&&Math.abs(Z)<.15)){if(L.handedness==="left"){const J=Math.abs(q)>.15?q*M:0,F=Math.abs(Z)>.15?-Z*M:0;E[0]+=J,E[1]+=F}else if(L.handedness==="right"&&(Math.abs(Z)>.15&&(E[2]+=Z*G),Math.abs(q)>.15)){const J=-q*A,F=jt.rotateY(jt.identity(),J);jt.multiply(F,x,x)}}}}const oi="BITYMI01",kc=0,Ec=1,Cc=2,Mc=3,Bc=4,Dc=5;function An(o){const l=(o&32768)>>15,f=(o&31744)>>10,E=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(E/1024):f===31?E?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+E/1024)}function Wr(o,l,f,E,x,C){const M=(o-f.width*.5)/E.focal[0],G=-((l-f.height*.5)/E.focal[1]),A=E.rotation,L=A[0],V=A[4],q=A[8],Z=A[1],J=A[5],F=A[9],O=A[2],$=A[6],lt=A[10];let z=M*L+G*Z+O,R=M*V+G*J+$,U=M*q+G*F+lt;const ct=Math.hypot(z,R,U)||1;z/=ct,R/=ct,U/=ct;const K=E.position[0],Q=E.position[1],Y=E.position[2],et=C*.005,bt=et*et,Vt=new Uint32Array(x.buffer,x.byteOffset,x.length),Rt=x.length/8;let Tt=1/0,ft=0,Et=0,yt=0,H=-1;for(let rt=0;rt<Rt;rt++){const It=rt*8,Mt=x[It+0]-K,zt=x[It+1]-Q,Dt=x[It+2]-Y,Ot=Mt*z+zt*R+Dt*U;if(Ot<=0)continue;const Pt=Mt-Ot*z,_t=zt-Ot*R,Wt=Dt-Ot*U;if(Pt*Pt+_t*_t+Wt*Wt>=bt||!(Vt[It+7]>>>16&1))continue;const g=Vt[It+5],i=Vt[It+6],h=An(g&65535),d=An(g>>>16&65535),b=An(i&65535),y=An(i>>>16&65535),S=Math.hypot(h,d,b,y)||1,k=h/S,r=d/S,m=b/S,u=y/S,p=2*(r*u+k*m),a=2*(m*u-k*r),_=1-2*(r*r+m*m),w=z*p+R*a+U*_;let v;Math.abs(w)>1e-6?(v=(Mt*p+zt*a+Dt*_)/w,(!isFinite(v)||v<=0)&&(v=Ot)):v=Ot,v<Tt&&(Tt=v,ft=K+v*z,Et=Q+v*R,yt=Y+v*U,H=rt)}return H<0?null:[ft,Et,yt]}function ai(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==oi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const E=new DataView(o),x=E.getUint32(8,!0),C=12,M=20;let G=null,A=null,L=null;for(let V=0;V<x;V++){const q=C+V*M,Z=E.getUint32(q+0,!0),J=Number(E.getBigUint64(q+4,!0)),F=Number(E.getBigUint64(q+12,!0)),O=l.slice(J,J+F).buffer;Z===kc||Z===Ec||Z===Dc?G=O:Z===Cc?A=O:(Z===Mc||Z===Bc)&&(L=O)}if(G===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:G,camerasBuffer:A,atlasBuffer:L}}async function Tc(o,l){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const E=(()=>{const G=f.headers.get("content-length");return G&&parseInt(G,10)||void 0})(),x=(M=f.body)==null?void 0:M.getReader();let C;if(!x)C=await f.arrayBuffer(),l&&l(C.byteLength,E,0);else{const G=[];let A=0,L=performance.now(),V=0;for(;;){const{done:J,value:F}=await x.read();if(J)break;G.push(F),A+=F.byteLength;const O=performance.now();if(O-L>=150&&l){const $=(A-V)/((O-L)/1e3);l(A,E,$),L=O,V=A}}const q=new Uint8Array(A);let Z=0;for(const J of G)q.set(J,Z),Z+=J.byteLength;C=q.buffer,l&&l(A,E,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===oi?{bundle:ai(C),rawPly:null}:{bundle:null,rawPly:C}}function Ac(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var E;return l(((E=f.files)==null?void 0:E[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Rc(o,l,f){const E=document.getElementById("ui-panel-container"),x=document.getElementById("load-button"),C=document.getElementById("quick-links");x&&(x.onclick=async()=>{const L=await Ac(".ply,.bitymi");if(L)if(E&&(E.style.display="none"),L.name.toLowerCase().endsWith(".bitymi")){const V=await L.arrayBuffer(),{pcBuffer:q}=ai(V),Z=new File([q],L.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),J=await cs(Z,o);l(J)}else{const V=await cs(L,o);l(V)}}),C&&(C.innerHTML="");const M=new URLSearchParams(window.location.search),G=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");G&&(E&&(E.style.display="none"),f(G,A))}async function Ic(o,l,f,E){const x=new hs(o,f),C=new mc(x);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const G="rgba8unorm";l.configure({device:f,format:G,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let A=null;const L=()=>{x.on_update_canvas(),A!==null&&vn(o.width,o.height,f,A.render_settings_buffer)};new ResizeObserver(()=>{const Q=Math.max(.25,R.render_scale),Y=Math.max(1,Math.ceil(Q*o.clientWidth)),et=Math.max(1,Math.ceil(Q*o.clientHeight));o.width===Y&&o.height===et||(o.width=Y,o.height=et,L())}).observe(o);let q=0,Z=0;const J=()=>{(o.width!==q||o.height!==Z)&&(q=o.width,Z=o.height,L())},F=new URLSearchParams(window.location.search);let $=F.get("animation")==="1";C.enabled=!$;const lt=F.get("camera_url"),z=Math.max(1,window.devicePixelRatio||1),R={gaussian_scaling:1,sh_bias:.5,animate:$,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,render_scale:1},U=new Ol.Pane({title:"Config",expanded:!0});U.addInput(R,"animate",{label:"Animate"}).on("change",Q=>{const Y=$;$=Q.value,C.enabled=!Q.value,!Y&&$&&ct.value&&ct.value.onAnimateStart(),Y&&!$&&ct.value&&ct.value.onAnimateStop()}),U.addInput(R,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ct={value:null};Rc(f,Q=>K(Q,[],null),async(Q,Y)=>{let et=Y??lt,bt,Vt=null;const Rt=Q.toLowerCase();if(Rt.endsWith(".bitymi")||Rt.includes(".bitymi?")){_s("downloading bundle ...");try{const{bundle:ft}=await Tc(Q,(yt,H,rt)=>{const It=yt/1048576,Mt=H?H/(1024*1024):void 0,zt=rt/(1024*1024),Dt=H?Math.min(99,Math.floor(yt/H*100)):void 0,Ot=Mt?`total ${Mt.toFixed(1)} MB`:"total -- MB",Pt=Mt&&Dt!==void 0?`${It.toFixed(1)} MB downloaded (${Dt}%)`:`${It.toFixed(1)} MB downloaded`,_t=`${zt.toFixed(2)} MB/s`;Ne(`downloading bundle ...
${Ot}, ${Pt}
${_t}`)});if(!ft)throw new Error("Expected a .bitymi bundle");Ne("parsing PLY ...");const Et=new File([ft.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(bt=await cs(Et,f),!et&&ft.camerasBuffer&&(et=URL.createObjectURL(new Blob([ft.camerasBuffer],{type:"application/json"}))),ft.atlasBuffer){const yt=ft.atlasBuffer.byteLength/1048576;Ne(`uploading atlas ...
${yt.toFixed(1)} MB BC7`);try{const H=Rl(ft.atlasBuffer);Vt=Vl(f,H,!0)}catch(H){console.warn("[atlas] failed to parse/upload atlas:",H)}}}catch(ft){throw gn(),ft}}else bt=await Gl(Q,f);const Tt=et?await lc(et):[];Tt.length>0&&x.set_preset(Tt[0]),K(bt,Tt,Vt)});function K(Q,Y=[],et=null){const bt=[(Q.bbox.min[0]+Q.bbox.max[0])/2,(Q.bbox.min[1]+Q.bbox.max[1])/2,(Q.bbox.min[2]+Q.bbox.max[2])/2];C.setBbox(Q.bbox.min,Q.bbox.max);const Vt=.5*Math.sqrt((Q.bbox.max[0]-Q.bbox.min[0])**2+(Q.bbox.max[1]-Q.bbox.min[1])**2+(Q.bbox.max[2]-Q.bbox.min[2])**2);function Rt(X,at){const nt=Wr(X,at,o,x,Q.surfel_data,Vt);nt&&(C.setOrbitPivot(nt),console.log(`[pick] orbit pivot → (${nt[0].toFixed(3)}, ${nt[1].toFixed(3)}, ${nt[2].toFixed(3)})`))}function Tt(){const X=o.width*.5,at=o.height*.5,nt=Wr(X,at,o,x,Q.surfel_data,Vt);if(!nt)return;const pt=x.rotation,wt=pt[2],xt=pt[6],ht=pt[10],vt=nt[0]-x.position[0],Gt=nt[1]-x.position[1],Ut=nt[2]-x.position[2],qt=vt*wt+Gt*xt+Ut*ht;qt>0&&C.setOrbitDepth(qt)}if(Y.length===0){const X=Q.bbox.max[0]-Q.bbox.min[0],at=Q.bbox.max[1]-Q.bbox.min[1],nt=Q.bbox.max[2]-Q.bbox.min[2],wt=.5*Math.sqrt(X*X+at*at+nt*nt)*.5;I.set(bt[0]-wt,bt[1]-wt,bt[2]-wt,x.position);const xt=I.create(wt,wt,wt);I.normalize(xt,xt);const ht=I.create(0,1,0),vt=I.create();I.cross(ht,xt,vt),I.normalize(vt,vt);const Gt=I.create();I.cross(xt,vt,Gt);const Ut=he.create(vt[0],Gt[0],xt[0],vt[1],Gt[1],xt[1],vt[2],Gt[2],xt[2]);jt.fromMat3(Ut,x.rotation),x.update_buffer()}C.setCenter(I.create(Q.centroid[0],Q.centroid[1],Q.centroid[2]));const ft=new ic(Q,f,G,x.uniform_buffer,E,et);A=ft;let Et=!1;(async()=>{const X=document.getElementById("enter-vr-button"),at=window.__halloumiError,nt=document.createElement("div");nt.id="halloumi-xr-status",nt.style.cssText="position:fixed;top:8px;right:8px;padding:4px 10px;border-radius:12px;font:11px ui-monospace,SFMono-Regular,Menlo,monospace;z-index:9997;pointer-events:none;",document.body.appendChild(nt);const pt=(xt,ht,vt)=>{nt.style.background=xt,nt.style.color=ht,nt.textContent=vt};if(!("xr"in navigator)||!navigator.xr){pt("#502020","#ffb0b0","❌ WebXR API missing");return}if(!await yc()){pt("#503820","#ffdc80","❌ immersive-vr not supported");return}if(!window.XRGPUBinding&&!window.XRWebGPUBinding){pt("#503820","#ffdc80","❌ XRGPUBinding missing — enable in chrome://flags");return}pt("#204830","#a0f0a0","✅ XR ready · tap anywhere");const wt=async()=>{if(!Et){Et=!0,X&&(X.disabled=!0,X.textContent="🥽 In VR…"),pt("#204020","#a0f0a0","⏳ entering VR…");try{await Pc({device:f,renderer:ft,camera:x,onExit:()=>{Et=!1,X&&(X.disabled=!1,X.textContent="🥽 Enter VR"),pt("#204830","#a0f0a0","✅ XR ready · tap anywhere"),vn(o.width,o.height,f,ft.render_settings_buffer),x.on_update_canvas(),document.addEventListener("pointerdown",wt,{once:!0})}})}catch(xt){const ht=xt.message??String(xt);console.error("[XR] session failed:",xt),Et=!1,X&&(X.disabled=!1,X.textContent="🥽 Enter VR"),pt("#502020","#ffb0b0","❌ XR failed — see banner"),at==null||at(`XR enter failed: ${ht}`),document.addEventListener("pointerdown",wt,{once:!0})}}};X&&(X.style.display="",X.addEventListener("click",wt)),document.addEventListener("pointerdown",wt,{once:!0})})(),window.__xrActive=()=>Et,vn(o.width,o.height,f,ft.render_settings_buffer),R.atlas_enabled=et!==null;let yt=!1;const H=(()=>{if(et!==null)return`${et.meta.format===2?"BC7":et.meta.format===3?"ASTC 4×4":et.meta.format===5?"RVQ-paired (typeA)":et.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":et.meta.format===7?"BC7 codebook gather (typeD)":`format=${et.meta.format}`} ${et.meta.width}×${et.meta.height}, ${et.meta.n_layers} layers`;const X=f.features.has("texture-compression-bc"),at=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(X?["BC7"]:[]).concat(at?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",H),qr(Q.sh_bias,f,ft.render_settings_buffer),Fr(R.gaussian_scaling,f,ft.render_settings_buffer),R.sh_bias=Q.sh_bias;const rt=Q.num_points.toLocaleString(),It={stats:`${rt} surfels · -- fps`};U.addMonitor(It,"stats",{label:"Stats",interval:200}),U.addMonitor({atlas:H},"atlas",{label:"Atlas"});const Mt={stages:"— ms · awaiting timestamp data"};U.addMonitor(Mt,"stages",{label:"Stages",interval:500});let zt=null;if(ft.timeQueryEnabled){zt=document.createElement("canvas"),zt.width=280,zt.height=24,zt.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(zt);const X=nt=>{const pt=zt.getContext("2d");if(!pt)return;const wt=zt.width,xt=zt.height;if(pt.clearRect(0,0,wt,xt),!nt||nt.total<=0){pt.fillStyle="#888",pt.font="11px ui-monospace,Menlo,monospace",pt.fillText("awaiting GPU timestamps…",8,16);return}const ht=[{label:"cull",ms:nt.cull,color:"#3aa3ff"},{label:"pre",ms:nt.preprocess,color:"#3ad27a"},{label:"sort",ms:nt.sort,color:"#ffa53a"},{label:"render",ms:nt.render,color:"#ff5566"}],vt=Math.max(.001,ht.reduce((Ut,qt)=>Ut+qt.ms,0));let Gt=0;pt.font="10px ui-monospace,Menlo,monospace",pt.textBaseline="middle";for(const Ut of ht){const qt=Ut.ms/vt*wt;pt.fillStyle=Ut.color,pt.fillRect(Gt,0,qt,xt),qt>=38&&(pt.fillStyle="#000c",pt.fillText(`${Ut.label} ${Ut.ms.toFixed(1)}`,Gt+4,xt/2)),Gt+=qt}};setInterval(()=>{yt||ft.readPerfMetrics({silent:!0}).then(()=>{const nt=ft.lastStageBreakdownMs;X(nt),nt&&(Mt.stages=`${nt.total.toFixed(1)} ms · cull ${nt.cull.toFixed(1)} / pre ${nt.preprocess.toFixed(1)} / sort ${nt.sort.toFixed(1)} / render ${nt.render.toFixed(1)}`)}).catch(nt=>console.warn("[perf] readPerfMetrics failed:",nt))},500)}const Dt=.4,Ot=3,Pt=.3;let _t=null,Wt=0,B=0;const j=se.create(),g=he.create();let i=Y.length>0?0:-1;const h={view:Y.length>0?`${i+1} / ${Y.length}: ${Y[i].img_name??i}`:"— no presets —"};U.addMonitor(h,"view",{label:"View",interval:100});function d(X){const at=he.create(X[0],X[1],X[2],X[4],X[5],X[6],X[8],X[9],X[10]);return se.fromMat(at)}function b(X,at){_t={fromPos:I.clone(x.position),toPos:I.clone(X.position),fromQuat:se.normalize(d(x.rotation)),toQuat:se.normalize(d(X.rotation)),target:X,t:0,duration:Math.max(.01,at)}}const y=(X,at=!0)=>{if(Y.length===0)return;i=(X%Y.length+Y.length)%Y.length;const nt=Y[i];at?b(nt,Dt):(x.set_preset(nt),C.resetToCamera(),Tt()),h.view=`${i+1} / ${Y.length}: ${Y[i].img_name??i}`};Y.length>0&&(U.addButton({title:"◀ Prev view"}).on("click",()=>y(i-1)),U.addButton({title:"Next view ▶"}).on("click",()=>y(i+1)));const S=Y.length>0?ri(Y,{tiltDownDeg:15,alignFirst:!0}):null,k=S?xc(Y,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let r=0;const m=12;ct.value={onAnimateStart:()=>{r=0},onAnimateStop:()=>{C.resetToCamera(),Tt()}},U.addInput(R,"render_scale",{label:"Render scale",min:.25,max:z,step:.25}).on("change",X=>{const at=Math.max(.25,X.value),nt=Math.max(1,Math.ceil(at*o.clientWidth)),pt=Math.max(1,Math.ceil(at*o.clientHeight));(o.width!==nt||o.height!==pt)&&(o.width=nt,o.height=pt,L())}),U.addInput(R,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",X=>Fr(X.value,f,ft.render_settings_buffer)),U.addInput(R,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",X=>qr(X.value,f,ft.render_settings_buffer)),U.addInput(R,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",X=>{ft.bgColor=[X.value.r,X.value.g,X.value.b,X.value.a]});const u=et?et.meta.format===3?"Atlas (ASTC)":et.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";U.addInput(R,"atlas_enabled",{label:u}).on("change",X=>ft.setAtlasEnabled(X.value)),U.addInput(R,"bfc",{label:"Backface"}).on("change",X=>Zl({bfc:X.value},f,ft.render_settings_buffer)),U.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(Y.length>0)x.set_preset(Y[0]);else{const X=Q.bbox.max[0]-Q.bbox.min[0],at=Q.bbox.max[1]-Q.bbox.min[1],nt=Q.bbox.max[2]-Q.bbox.min[2],wt=.5*Math.sqrt(X*X+at*at+nt*nt)*.5;I.set(bt[0]-wt,bt[1]-wt,bt[2]-wt,x.position);const xt=I.create(wt,wt,wt);I.normalize(xt,xt);const ht=I.create();I.cross(I.create(0,1,0),xt,ht),I.normalize(ht,ht);const vt=I.create();I.cross(xt,ht,vt);const Gt=he.create(ht[0],vt[0],xt[0],ht[1],vt[1],xt[1],ht[2],vt[2],xt[2]);jt.fromMat3(Gt,x.rotation),x.update_buffer()}C.resetToCamera(),Tt()});const p={result:"— click Benchmark —"};U.addMonitor(p,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const a={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function _(){const at=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const nt of Object.keys(a))if(at.startsWith(nt))return nt;return null}const w=document.createElement("div");w.id="bench-overlay",w.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(w);function v(X,at,nt){const pt=Math.floor(at/Math.max(1,nt)*100),wt=32,xt=Math.floor(at/Math.max(1,nt)*wt),ht="█".repeat(xt)+"░".repeat(wt-xt);w.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${X}</div><div>[${ht}] ${pt}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${at} / ${nt} frames · offscreen · pipelined · no vsync</div>`,w.style.display="block"}function T(){w.style.display="none"}async function N(X=10,at=200){if(yt)return;if(Y.length===0){p.result="no cameras to benchmark";return}yt=!0;const nt=$,pt=R.animate,wt=new Float32Array(x.position),xt=new Float32Array(x.rotation);$=!1,R.animate=!1,U.refresh(),_t=null,C.enabled=!1;const ht=_(),vt=ht?a[ht]:null,Gt=(vt==null?void 0:vt.w)??o.width,Ut=(vt==null?void 0:vt.h)??o.height,qt=(vt==null?void 0:vt.fovY)??x.getFov(),Kt=ht?`${ht} · ${Gt>=4e3/4+500?"images_4":"images_2"}`:"custom",Xt=o.width,Ht=o.height,ee=x.getFov();o.width=Gt,o.height=Ut,x.setFov(qt),vn(Gt,Ut,f,ft.render_settings_buffer);const Qt=f.createTexture({size:[Gt,Ut,1],format:G,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),be=Qt.createView(),fe=()=>{const Jt=f.createCommandEncoder();ft.frame(Jt,be,!1),f.queue.submit([Jt.finish()])},_e=()=>new Promise(Jt=>setTimeout(Jt,0)),me=20,ve=async(Jt,ue)=>{let ge=0,oe=0;for(v(ue,0,Jt),await _e();oe<Jt;){const we=Math.min(me,Jt-oe),xe=performance.now();for(let je=0;je<we;je++)x.set_preset(Y[(oe+je)%Y.length]),fe();await f.queue.onSubmittedWorkDone();const Yt=performance.now();ge+=Yt-xe,oe+=we,v(ue,oe,Jt),await _e()}return ge};try{await ve(X,"Warming up");const ue=await ve(at,"Benchmarking")/at,ge=1e3/ue,oe=Q.num_points??Q.surfel_data.length/8,we=(qt*180/Math.PI).toFixed(1),xe=`${ge.toFixed(1)} FPS  (${ue.toFixed(2)} ms/frame)
${Gt}×${Ut} · fovY ${we}° · ${Kt}
${oe.toLocaleString()} surfels · ${X}w+${at}b · pipelined`;p.result=xe,console.log("[bench]",xe.replace(/\n/g,"  |  "))}catch(Jt){console.error("[bench] failed:",Jt),p.result=`bench failed: ${Jt}`}finally{T(),Qt.destroy(),o.width=Xt,o.height=Ht,x.setFov(ee),vn(Xt,Ht,f,ft.render_settings_buffer),x.position.set(wt),x.rotation.set(xt),x.update_buffer(),C.enabled=!nt,$=nt,R.animate=pt,U.refresh(),yt=!1}}U.addButton({title:"📊 Benchmark"}).on("click",()=>N()),document.addEventListener("keydown",X=>{const at=X.key;if(at>="0"&&at<="9"&&Y.length>0){const nt=parseInt(at);nt<Y.length&&y(nt)}else at==="ArrowLeft"||at==="PageUp"?(y(i-1),X.preventDefault()):at==="ArrowRight"||at==="PageDown"?(y(i+1),X.preventDefault()):(at==="d"||at==="D")&&ft.debugReadSortedIndices(30).catch(nt=>console.error("[DEBUG] readback failed:",nt))});function W(X,at){const nt=o.getBoundingClientRect(),pt=window.devicePixelRatio||1;return[(X-nt.left)*pt,(at-nt.top)*pt]}o.addEventListener("dblclick",X=>{const[at,nt]=W(X.clientX,X.clientY);Rt(at,nt)});let ut=0,ot=0,it=0;o.addEventListener("pointerdown",X=>{if(X.pointerType!=="touch")return;const at=performance.now(),nt=at-ut,pt=X.clientX-ot,wt=X.clientY-it;if(nt>0&&nt<300&&pt*pt+wt*wt<40*40){const[xt,ht]=W(X.clientX,X.clientY);Rt(xt,ht),ut=0}else ut=at,ot=X.clientX,it=X.clientY});function mt(){return M}let St=performance.now(),dt=60,gt=Promise.resolve(),Ct=0;async function At(){var xt;const X=performance.now(),at=Math.min((X-St)/1e3,.1);if(St=X,at>0){const ht=((xt=ft.lastStageBreakdownMs)==null?void 0:xt.total)??0,vt=ht>.5?1e3/ht:1/at;dt=dt*.9+vt*.1,It.stats=`${rt} surfels · ${Math.round(dt)} fps`}if(yt||Et){requestAnimationFrame(At);return}if(mt()&&(_t||$)&&(_t=null,C.resetToCamera(),Tt(),$&&($=!1,R.animate=!1,U.refresh())),$&&R.animateMode==="circle"&&S){r+=at/m,r>=1&&(r-=1);const ht=ii(S,r);x.set_preset(ht),C.update(at);const vt=f.createCommandEncoder();ft.frame(vt,l.getCurrentTexture().createView()),f.queue.submit([vt.finish()]),Ct++,Ct===2&&gn(),requestAnimationFrame(At);return}if(_t){_t.t+=at/_t.duration;const ht=Math.min(1,_t.t),vt=ht*ht*(3-2*ht);I.lerp(_t.fromPos,_t.toPos,vt,x.position),se.slerp(_t.fromQuat,_t.toQuat,vt,j),he.fromQuat(j,g),jt.fromMat3(g,x.rotation),x.update_buffer(),_t.t>=1&&(x.set_preset(_t.target),_t=null,$?Y.length>0&&(Wt=Pt):(C.resetToCamera(),Tt()))}else if($&&!mt()){const ht=R.animateMode==="circle"&&k.length>0,vt=ht?k:Y;if(vt.length!==0){if(Wt-=at,Wt<=0){const Ut=((ht?B:i)+1)%vt.length;ht?B=Ut:i=Ut;const qt=ht?Ot/8:Ot;b(vt[Ut],qt),ht||(h.view=`${i+1} / ${Y.length}: ${Y[i].img_name??i}`)}}}C.update(at),J(),await gt;const nt=f.createCommandEncoder(),pt=l.getCurrentTexture().createView(),wt=window.__halloumiProgress??(ht=>{});Ct<3&&wt("flat-frame#"+Ct+" encoding…"),ft.frame(nt,pt),Ct<3&&wt("flat-frame#"+Ct+" submitting…"),f.queue.submit([nt.finish()]),Ct<3&&wt("flat-frame#"+Ct+" submit OK"),gt=f.queue.onSubmittedWorkDone().then(()=>{Ct<=3&&wt("flat-frame#"+(Ct-1)+" GPU work done")}),Ct++,Ct===2&&gn(),requestAnimationFrame(At)}requestAnimationFrame(At)}}(function(){let l="dev";for(const E of Array.from(document.querySelectorAll('script[type="module"]'))){const C=E.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){l=C[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();function Ie(o){let l=document.getElementById("halloumi-xr-error");l||(l=document.createElement("div"),l.id="halloumi-xr-error",l.style.cssText="position:fixed;top:0;left:0;right:0;padding:1em;background:#3a0000;color:#ffb0b0;font-family:system-ui,monospace;font-size:0.85rem;z-index:9999;white-space:pre-wrap;overflow-x:auto;max-height:60vh;border-bottom:2px solid #7a0000",document.body.appendChild(l)),l.textContent+=(l.textContent?`
`:"")+o,console.error(o)}function qe(o){console.log(o)}window.__halloumiProgress=qe;window.__halloumiError=Ie;(async()=>{var o;try{if(qe("boot: main.ts entered"),navigator.gpu===void 0){Ie("WebGPU is not supported in this browser. (navigator.gpu is undefined)");return}qe("requesting adapter…");const l=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(l===null){Ie("WebGPU adapter unavailable. requestAdapter returned null.");return}qe("adapter OK; vendor="+(((o=l.info)==null?void 0:o.vendor)??"?"));const f=[];l.features.has("timestamp-query")&&f.push("timestamp-query"),l.features.has("texture-compression-bc")&&f.push("texture-compression-bc"),l.features.has("texture-compression-astc")&&f.push("texture-compression-astc"),console.log("[adapter]",l.info??"(unknown)"),console.log("[adapter] features:",Array.from(l.features)),console.log("[adapter] BC7:",l.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",l.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:l.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize,maxTextureDimension2D:l.limits.maxTextureDimension2D});const E=10,x=Math.min(E,l.limits.maxStorageBuffersPerShaderStage);x<E&&console.warn(`[adapter] adapter exposes only ${x} storage buffers per stage; viewer wants ${E}. Cull stage may fail to compile.`),qe("requesting device (features="+f.join(",")+")…");let C;try{C=await l.requestDevice({requiredFeatures:f,requiredLimits:{maxStorageBuffersPerShaderStage:x,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize}}),qe("device OK")}catch(A){Ie(`WebGPU device creation FAILED.
error: ${A.message}

Adapter info: `+JSON.stringify(l.info??{})+`
Requested features: `+f.join(", ")+`
Requested maxStorageBuffersPerShaderStage: `+x);return}C.addEventListener("uncapturederror",A=>{const L=A.error;Ie(`WebGPU uncaptured error (${L.constructor.name}):
${L.message}`)}),C.lost.then(A=>{Ie(`WebGPU device LOST: ${A.reason} — ${A.message}`)});const M=document.querySelector("#webgpu-canvas");Dl(M!==null);const G=M.getContext("webgpu");if(G===null){Ie('canvas.getContext("webgpu") returned null.');return}qe("canvas ctx OK; entering splat-app init…"),Ic(M,G,C,f)}catch(l){Ie(`Bootstrap failed: ${l.message}
${l.stack??""}`)}})();
