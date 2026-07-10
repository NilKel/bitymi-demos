var ml=Object.defineProperty;var bl=(o,l,h)=>l in o?ml(o,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[l]=h;var tt=(o,l,h)=>(bl(o,typeof l!="symbol"?l+"":l,h),h);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))C(x);new MutationObserver(x=>{for(const E of x)if(E.type==="childList")for(const M of E.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&C(M)}).observe(document,{childList:!0,subtree:!0});function h(x){const E={};return x.integrity&&(E.integrity=x.integrity),x.referrerPolicy&&(E.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?E.credentials="include":x.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function C(x){if(x.ep)return;x.ep=!0;const E=h(x);fetch(x.href,E)}})();function vl(o,l){return class extends o{constructor(...h){super(...h),l(this)}}}const gl=vl(Array,o=>o.fill(0));let Lt=1e-6;function wl(o){function l(y=0,S=0){const k=new o(2);return y!==void 0&&(k[0]=y,S!==void 0&&(k[1]=S)),k}const h=l;function C(y,S,k){const i=k??new o(2);return i[0]=y,i[1]=S,i}function x(y,S){const k=S??new o(2);return k[0]=Math.ceil(y[0]),k[1]=Math.ceil(y[1]),k}function E(y,S){const k=S??new o(2);return k[0]=Math.floor(y[0]),k[1]=Math.floor(y[1]),k}function M(y,S){const k=S??new o(2);return k[0]=Math.round(y[0]),k[1]=Math.round(y[1]),k}function V(y,S=0,k=1,i){const m=i??new o(2);return m[0]=Math.min(k,Math.max(S,y[0])),m[1]=Math.min(k,Math.max(S,y[1])),m}function B(y,S,k){const i=k??new o(2);return i[0]=y[0]+S[0],i[1]=y[1]+S[1],i}function A(y,S,k,i){const m=i??new o(2);return m[0]=y[0]+S[0]*k,m[1]=y[1]+S[1]*k,m}function L(y,S){const k=y[0],i=y[1],m=S[0],u=S[1],p=Math.sqrt(k*k+i*i),a=Math.sqrt(m*m+u*u),_=p*a,w=_&&et(y,S)/_;return Math.acos(w)}function O(y,S,k){const i=k??new o(2);return i[0]=y[0]-S[0],i[1]=y[1]-S[1],i}const Z=O;function U(y,S){return Math.abs(y[0]-S[0])<Lt&&Math.abs(y[1]-S[1])<Lt}function X(y,S){return y[0]===S[0]&&y[1]===S[1]}function K(y,S,k,i){const m=i??new o(2);return m[0]=y[0]+k*(S[0]-y[0]),m[1]=y[1]+k*(S[1]-y[1]),m}function j(y,S,k,i){const m=i??new o(2);return m[0]=y[0]+k[0]*(S[0]-y[0]),m[1]=y[1]+k[1]*(S[1]-y[1]),m}function ut(y,S,k){const i=k??new o(2);return i[0]=Math.max(y[0],S[0]),i[1]=Math.max(y[1],S[1]),i}function z(y,S,k){const i=k??new o(2);return i[0]=Math.min(y[0],S[0]),i[1]=Math.min(y[1],S[1]),i}function N(y,S,k){const i=k??new o(2);return i[0]=y[0]*S,i[1]=y[1]*S,i}const G=N;function lt(y,S,k){const i=k??new o(2);return i[0]=y[0]/S,i[1]=y[1]/S,i}function W(y,S){const k=S??new o(2);return k[0]=1/y[0],k[1]=1/y[1],k}const Q=W;function Y(y,S,k){const i=k??new o(3),m=y[0]*S[1]-y[1]*S[0];return i[0]=0,i[1]=0,i[2]=m,i}function et(y,S){return y[0]*S[0]+y[1]*S[1]}function _t(y){const S=y[0],k=y[1];return Math.sqrt(S*S+k*k)}const Ut=_t;function Rt(y){const S=y[0],k=y[1];return S*S+k*k}const Dt=Rt;function pt(y,S){const k=y[0]-S[0],i=y[1]-S[1];return Math.sqrt(k*k+i*i)}const kt=pt;function wt(y,S){const k=y[0]-S[0],i=y[1]-S[1];return k*k+i*i}const H=wt;function st(y,S){const k=S??new o(2),i=y[0],m=y[1],u=Math.sqrt(i*i+m*m);return u>1e-5?(k[0]=i/u,k[1]=m/u):(k[0]=0,k[1]=0),k}function It(y,S){const k=S??new o(2);return k[0]=-y[0],k[1]=-y[1],k}function Mt(y,S){const k=S??new o(2);return k[0]=y[0],k[1]=y[1],k}const zt=Mt;function Tt(y,S,k){const i=k??new o(2);return i[0]=y[0]*S[0],i[1]=y[1]*S[1],i}const Ot=Tt;function xt(y,S,k){const i=k??new o(2);return i[0]=y[0]/S[0],i[1]=y[1]/S[1],i}const ht=xt;function Wt(y=1,S){const k=S??new o(2),i=Math.random()*2*Math.PI;return k[0]=Math.cos(i)*y,k[1]=Math.sin(i)*y,k}function T(y){const S=y??new o(2);return S[0]=0,S[1]=0,S}function $(y,S,k){const i=k??new o(2),m=y[0],u=y[1];return i[0]=m*S[0]+u*S[4]+S[12],i[1]=m*S[1]+u*S[5]+S[13],i}function g(y,S,k){const i=k??new o(2),m=y[0],u=y[1];return i[0]=S[0]*m+S[4]*u+S[8],i[1]=S[1]*m+S[5]*u+S[9],i}function r(y,S,k,i){const m=i??new o(2),u=y[0]-S[0],p=y[1]-S[1],a=Math.sin(k),_=Math.cos(k);return m[0]=u*_-p*a+S[0],m[1]=u*a+p*_+S[1],m}function f(y,S,k){const i=k??new o(2);return st(y,i),N(i,S,i)}function d(y,S,k){const i=k??new o(2);return _t(y)>S?f(y,S,i):Mt(y,i)}function b(y,S,k){const i=k??new o(2);return K(y,S,.5,i)}return{create:l,fromValues:h,set:C,ceil:x,floor:E,round:M,clamp:V,add:B,addScaled:A,angle:L,subtract:O,sub:Z,equalsApproximately:U,equals:X,lerp:K,lerpV:j,max:ut,min:z,mulScalar:N,scale:G,divScalar:lt,inverse:W,invert:Q,cross:Y,dot:et,length:_t,len:Ut,lengthSq:Rt,lenSq:Dt,distance:pt,dist:kt,distanceSq:wt,distSq:H,normalize:st,negate:It,copy:Mt,clone:zt,multiply:Tt,mul:Ot,divide:xt,div:ht,random:Wt,zero:T,transformMat4:$,transformMat3:g,rotate:r,setLength:f,truncate:d,midpoint:b}}const Ti=new Map;function Ki(o){let l=Ti.get(o);return l||(l=wl(o),Ti.set(o,l)),l}function xl(o){function l(a,_,w){const v=new o(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,w!==void 0&&(v[2]=w))),v}const h=l;function C(a,_,w,v){const R=v??new o(3);return R[0]=a,R[1]=_,R[2]=w,R}function x(a,_){const w=_??new o(3);return w[0]=Math.ceil(a[0]),w[1]=Math.ceil(a[1]),w[2]=Math.ceil(a[2]),w}function E(a,_){const w=_??new o(3);return w[0]=Math.floor(a[0]),w[1]=Math.floor(a[1]),w[2]=Math.floor(a[2]),w}function M(a,_){const w=_??new o(3);return w[0]=Math.round(a[0]),w[1]=Math.round(a[1]),w[2]=Math.round(a[2]),w}function V(a,_=0,w=1,v){const R=v??new o(3);return R[0]=Math.min(w,Math.max(_,a[0])),R[1]=Math.min(w,Math.max(_,a[1])),R[2]=Math.min(w,Math.max(_,a[2])),R}function B(a,_,w){const v=w??new o(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function A(a,_,w,v){const R=v??new o(3);return R[0]=a[0]+_[0]*w,R[1]=a[1]+_[1]*w,R[2]=a[2]+_[2]*w,R}function L(a,_){const w=a[0],v=a[1],R=a[2],F=_[0],q=_[1],ct=_[2],rt=Math.sqrt(w*w+v*v+R*R),it=Math.sqrt(F*F+q*q+ct*ct),ft=rt*it,yt=ft&&et(a,_)/ft;return Math.acos(yt)}function O(a,_,w){const v=w??new o(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const Z=O;function U(a,_){return Math.abs(a[0]-_[0])<Lt&&Math.abs(a[1]-_[1])<Lt&&Math.abs(a[2]-_[2])<Lt}function X(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function K(a,_,w,v){const R=v??new o(3);return R[0]=a[0]+w*(_[0]-a[0]),R[1]=a[1]+w*(_[1]-a[1]),R[2]=a[2]+w*(_[2]-a[2]),R}function j(a,_,w,v){const R=v??new o(3);return R[0]=a[0]+w[0]*(_[0]-a[0]),R[1]=a[1]+w[1]*(_[1]-a[1]),R[2]=a[2]+w[2]*(_[2]-a[2]),R}function ut(a,_,w){const v=w??new o(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function z(a,_,w){const v=w??new o(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function N(a,_,w){const v=w??new o(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const G=N;function lt(a,_,w){const v=w??new o(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function W(a,_){const w=_??new o(3);return w[0]=1/a[0],w[1]=1/a[1],w[2]=1/a[2],w}const Q=W;function Y(a,_,w){const v=w??new o(3),R=a[2]*_[0]-a[0]*_[2],F=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=R,v[2]=F,v}function et(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function _t(a){const _=a[0],w=a[1],v=a[2];return Math.sqrt(_*_+w*w+v*v)}const Ut=_t;function Rt(a){const _=a[0],w=a[1],v=a[2];return _*_+w*w+v*v}const Dt=Rt;function pt(a,_){const w=a[0]-_[0],v=a[1]-_[1],R=a[2]-_[2];return Math.sqrt(w*w+v*v+R*R)}const kt=pt;function wt(a,_){const w=a[0]-_[0],v=a[1]-_[1],R=a[2]-_[2];return w*w+v*v+R*R}const H=wt;function st(a,_){const w=_??new o(3),v=a[0],R=a[1],F=a[2],q=Math.sqrt(v*v+R*R+F*F);return q>1e-5?(w[0]=v/q,w[1]=R/q,w[2]=F/q):(w[0]=0,w[1]=0,w[2]=0),w}function It(a,_){const w=_??new o(3);return w[0]=-a[0],w[1]=-a[1],w[2]=-a[2],w}function Mt(a,_){const w=_??new o(3);return w[0]=a[0],w[1]=a[1],w[2]=a[2],w}const zt=Mt;function Tt(a,_,w){const v=w??new o(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const Ot=Tt;function xt(a,_,w){const v=w??new o(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const ht=xt;function Wt(a=1,_){const w=_??new o(3),v=Math.random()*2*Math.PI,R=Math.random()*2-1,F=Math.sqrt(1-R*R)*a;return w[0]=Math.cos(v)*F,w[1]=Math.sin(v)*F,w[2]=R*a,w}function T(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function $(a,_,w){const v=w??new o(3),R=a[0],F=a[1],q=a[2],ct=_[3]*R+_[7]*F+_[11]*q+_[15]||1;return v[0]=(_[0]*R+_[4]*F+_[8]*q+_[12])/ct,v[1]=(_[1]*R+_[5]*F+_[9]*q+_[13])/ct,v[2]=(_[2]*R+_[6]*F+_[10]*q+_[14])/ct,v}function g(a,_,w){const v=w??new o(3),R=a[0],F=a[1],q=a[2];return v[0]=R*_[0*4+0]+F*_[1*4+0]+q*_[2*4+0],v[1]=R*_[0*4+1]+F*_[1*4+1]+q*_[2*4+1],v[2]=R*_[0*4+2]+F*_[1*4+2]+q*_[2*4+2],v}function r(a,_,w){const v=w??new o(3),R=a[0],F=a[1],q=a[2];return v[0]=R*_[0]+F*_[4]+q*_[8],v[1]=R*_[1]+F*_[5]+q*_[9],v[2]=R*_[2]+F*_[6]+q*_[10],v}function f(a,_,w){const v=w??new o(3),R=_[0],F=_[1],q=_[2],ct=_[3]*2,rt=a[0],it=a[1],ft=a[2],yt=F*ft-q*it,dt=q*rt-R*ft,bt=R*it-F*rt;return v[0]=rt+yt*ct+(F*bt-q*dt)*2,v[1]=it+dt*ct+(q*yt-R*bt)*2,v[2]=ft+bt*ct+(R*dt-F*yt)*2,v}function d(a,_){const w=_??new o(3);return w[0]=a[12],w[1]=a[13],w[2]=a[14],w}function b(a,_,w){const v=w??new o(3),R=_*4;return v[0]=a[R+0],v[1]=a[R+1],v[2]=a[R+2],v}function y(a,_){const w=_??new o(3),v=a[0],R=a[1],F=a[2],q=a[4],ct=a[5],rt=a[6],it=a[8],ft=a[9],yt=a[10];return w[0]=Math.sqrt(v*v+R*R+F*F),w[1]=Math.sqrt(q*q+ct*ct+rt*rt),w[2]=Math.sqrt(it*it+ft*ft+yt*yt),w}function S(a,_,w,v){const R=v??new o(3),F=[],q=[];return F[0]=a[0]-_[0],F[1]=a[1]-_[1],F[2]=a[2]-_[2],q[0]=F[0],q[1]=F[1]*Math.cos(w)-F[2]*Math.sin(w),q[2]=F[1]*Math.sin(w)+F[2]*Math.cos(w),R[0]=q[0]+_[0],R[1]=q[1]+_[1],R[2]=q[2]+_[2],R}function k(a,_,w,v){const R=v??new o(3),F=[],q=[];return F[0]=a[0]-_[0],F[1]=a[1]-_[1],F[2]=a[2]-_[2],q[0]=F[2]*Math.sin(w)+F[0]*Math.cos(w),q[1]=F[1],q[2]=F[2]*Math.cos(w)-F[0]*Math.sin(w),R[0]=q[0]+_[0],R[1]=q[1]+_[1],R[2]=q[2]+_[2],R}function i(a,_,w,v){const R=v??new o(3),F=[],q=[];return F[0]=a[0]-_[0],F[1]=a[1]-_[1],F[2]=a[2]-_[2],q[0]=F[0]*Math.cos(w)-F[1]*Math.sin(w),q[1]=F[0]*Math.sin(w)+F[1]*Math.cos(w),q[2]=F[2],R[0]=q[0]+_[0],R[1]=q[1]+_[1],R[2]=q[2]+_[2],R}function m(a,_,w){const v=w??new o(3);return st(a,v),N(v,_,v)}function u(a,_,w){const v=w??new o(3);return _t(a)>_?m(a,_,v):Mt(a,v)}function p(a,_,w){const v=w??new o(3);return K(a,_,.5,v)}return{create:l,fromValues:h,set:C,ceil:x,floor:E,round:M,clamp:V,add:B,addScaled:A,angle:L,subtract:O,sub:Z,equalsApproximately:U,equals:X,lerp:K,lerpV:j,max:ut,min:z,mulScalar:N,scale:G,divScalar:lt,inverse:W,invert:Q,cross:Y,dot:et,length:_t,len:Ut,lengthSq:Rt,lenSq:Dt,distance:pt,dist:kt,distanceSq:wt,distSq:H,normalize:st,negate:It,copy:Mt,clone:zt,multiply:Tt,mul:Ot,divide:xt,div:ht,random:Wt,zero:T,transformMat4:$,transformMat4Upper3x3:g,transformMat3:r,transformQuat:f,getTranslation:d,getAxis:b,getScaling:y,rotateX:S,rotateY:k,rotateZ:i,setLength:m,truncate:u,midpoint:p}}const Di=new Map;function Ln(o){let l=Di.get(o);return l||(l=xl(o),Di.set(o,l)),l}function yl(o){const l=Ki(o),h=Ln(o);function C(r,f,d,b,y,S,k,i,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,r!==void 0&&(u[0]=r,f!==void 0&&(u[1]=f,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,y!==void 0&&(u[5]=y,S!==void 0&&(u[6]=S,k!==void 0&&(u[8]=k,i!==void 0&&(u[9]=i,m!==void 0&&(u[10]=m))))))))),u}function x(r,f,d,b,y,S,k,i,m,u){const p=u??new o(12);return p[0]=r,p[1]=f,p[2]=d,p[3]=0,p[4]=b,p[5]=y,p[6]=S,p[7]=0,p[8]=k,p[9]=i,p[10]=m,p[11]=0,p}function E(r,f){const d=f??new o(12);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d}function M(r,f){const d=f??new o(12),b=r[0],y=r[1],S=r[2],k=r[3],i=b+b,m=y+y,u=S+S,p=b*i,a=y*i,_=y*m,w=S*i,v=S*m,R=S*u,F=k*i,q=k*m,ct=k*u;return d[0]=1-_-R,d[1]=a+ct,d[2]=w-q,d[3]=0,d[4]=a-ct,d[5]=1-p-R,d[6]=v+F,d[7]=0,d[8]=w+q,d[9]=v-F,d[10]=1-p-_,d[11]=0,d}function V(r,f){const d=f??new o(12);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d}function B(r,f,d){const b=d??new o(12);return b[0]=r[0]*f,b[1]=r[1]*f,b[2]=r[2]*f,b[4]=r[4]*f,b[5]=r[5]*f,b[6]=r[6]*f,b[8]=r[8]*f,b[9]=r[9]*f,b[10]=r[10]*f,b}const A=B;function L(r,f,d){const b=d??new o(12);return b[0]=r[0]+f[0],b[1]=r[1]+f[1],b[2]=r[2]+f[2],b[4]=r[4]+f[4],b[5]=r[5]+f[5],b[6]=r[6]+f[6],b[8]=r[8]+f[8],b[9]=r[9]+f[9],b[10]=r[10]+f[10],b}function O(r,f){const d=f??new o(12);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[8]=r[8],d[9]=r[9],d[10]=r[10],d}const Z=O;function U(r,f){return Math.abs(r[0]-f[0])<Lt&&Math.abs(r[1]-f[1])<Lt&&Math.abs(r[2]-f[2])<Lt&&Math.abs(r[4]-f[4])<Lt&&Math.abs(r[5]-f[5])<Lt&&Math.abs(r[6]-f[6])<Lt&&Math.abs(r[8]-f[8])<Lt&&Math.abs(r[9]-f[9])<Lt&&Math.abs(r[10]-f[10])<Lt}function X(r,f){return r[0]===f[0]&&r[1]===f[1]&&r[2]===f[2]&&r[4]===f[4]&&r[5]===f[5]&&r[6]===f[6]&&r[8]===f[8]&&r[9]===f[9]&&r[10]===f[10]}function K(r){const f=r??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function j(r,f){const d=f??new o(12);if(d===r){let _;return _=r[1],r[1]=r[4],r[4]=_,_=r[2],r[2]=r[8],r[8]=_,_=r[6],r[6]=r[9],r[9]=_,d}const b=r[0*4+0],y=r[0*4+1],S=r[0*4+2],k=r[1*4+0],i=r[1*4+1],m=r[1*4+2],u=r[2*4+0],p=r[2*4+1],a=r[2*4+2];return d[0]=b,d[1]=k,d[2]=u,d[4]=y,d[5]=i,d[6]=p,d[8]=S,d[9]=m,d[10]=a,d}function ut(r,f){const d=f??new o(12),b=r[0*4+0],y=r[0*4+1],S=r[0*4+2],k=r[1*4+0],i=r[1*4+1],m=r[1*4+2],u=r[2*4+0],p=r[2*4+1],a=r[2*4+2],_=a*i-m*p,w=-a*k+m*u,v=p*k-i*u,R=1/(b*_+y*w+S*v);return d[0]=_*R,d[1]=(-a*y+S*p)*R,d[2]=(m*y-S*i)*R,d[4]=w*R,d[5]=(a*b-S*u)*R,d[6]=(-m*b+S*k)*R,d[8]=v*R,d[9]=(-p*b+y*u)*R,d[10]=(i*b-y*k)*R,d}function z(r){const f=r[0],d=r[0*4+1],b=r[0*4+2],y=r[1*4+0],S=r[1*4+1],k=r[1*4+2],i=r[2*4+0],m=r[2*4+1],u=r[2*4+2];return f*(S*u-m*k)-y*(d*u-m*b)+i*(d*k-S*b)}const N=ut;function G(r,f,d){const b=d??new o(12),y=r[0],S=r[1],k=r[2],i=r[4+0],m=r[4+1],u=r[4+2],p=r[8+0],a=r[8+1],_=r[8+2],w=f[0],v=f[1],R=f[2],F=f[4+0],q=f[4+1],ct=f[4+2],rt=f[8+0],it=f[8+1],ft=f[8+2];return b[0]=y*w+i*v+p*R,b[1]=S*w+m*v+a*R,b[2]=k*w+u*v+_*R,b[4]=y*F+i*q+p*ct,b[5]=S*F+m*q+a*ct,b[6]=k*F+u*q+_*ct,b[8]=y*rt+i*it+p*ft,b[9]=S*rt+m*it+a*ft,b[10]=k*rt+u*it+_*ft,b}const lt=G;function W(r,f,d){const b=d??K();return r!==b&&(b[0]=r[0],b[1]=r[1],b[2]=r[2],b[4]=r[4],b[5]=r[5],b[6]=r[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function Q(r,f){const d=f??l.create();return d[0]=r[8],d[1]=r[9],d}function Y(r,f,d){const b=d??l.create(),y=f*4;return b[0]=r[y+0],b[1]=r[y+1],b}function et(r,f,d,b){const y=b===r?r:O(r,b),S=d*4;return y[S+0]=f[0],y[S+1]=f[1],y}function _t(r,f){const d=f??l.create(),b=r[0],y=r[1],S=r[4],k=r[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(S*S+k*k),d}function Ut(r,f){const d=f??h.create(),b=r[0],y=r[1],S=r[2],k=r[4],i=r[5],m=r[6],u=r[8],p=r[9],a=r[10];return d[0]=Math.sqrt(b*b+y*y+S*S),d[1]=Math.sqrt(k*k+i*i+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Rt(r,f){const d=f??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=r[0],d[9]=r[1],d[10]=1,d}function Dt(r,f,d){const b=d??new o(12),y=f[0],S=f[1],k=r[0],i=r[1],m=r[2],u=r[1*4+0],p=r[1*4+1],a=r[1*4+2],_=r[2*4+0],w=r[2*4+1],v=r[2*4+2];return r!==b&&(b[0]=k,b[1]=i,b[2]=m,b[4]=u,b[5]=p,b[6]=a),b[8]=k*y+u*S+_,b[9]=i*y+p*S+w,b[10]=m*y+a*S+v,b}function pt(r,f){const d=f??new o(12),b=Math.cos(r),y=Math.sin(r);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function kt(r,f,d){const b=d??new o(12),y=r[0*4+0],S=r[0*4+1],k=r[0*4+2],i=r[1*4+0],m=r[1*4+1],u=r[1*4+2],p=Math.cos(f),a=Math.sin(f);return b[0]=p*y+a*i,b[1]=p*S+a*m,b[2]=p*k+a*u,b[4]=p*i-a*y,b[5]=p*m-a*S,b[6]=p*u-a*k,r!==b&&(b[8]=r[8],b[9]=r[9],b[10]=r[10]),b}function wt(r,f){const d=f??new o(12),b=Math.cos(r),y=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function H(r,f,d){const b=d??new o(12),y=r[4],S=r[5],k=r[6],i=r[8],m=r[9],u=r[10],p=Math.cos(f),a=Math.sin(f);return b[4]=p*y+a*i,b[5]=p*S+a*m,b[6]=p*k+a*u,b[8]=p*i-a*y,b[9]=p*m-a*S,b[10]=p*u-a*k,r!==b&&(b[0]=r[0],b[1]=r[1],b[2]=r[2]),b}function st(r,f){const d=f??new o(12),b=Math.cos(r),y=Math.sin(r);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function It(r,f,d){const b=d??new o(12),y=r[0*4+0],S=r[0*4+1],k=r[0*4+2],i=r[2*4+0],m=r[2*4+1],u=r[2*4+2],p=Math.cos(f),a=Math.sin(f);return b[0]=p*y-a*i,b[1]=p*S-a*m,b[2]=p*k-a*u,b[8]=p*i+a*y,b[9]=p*m+a*S,b[10]=p*u+a*k,r!==b&&(b[4]=r[4],b[5]=r[5],b[6]=r[6]),b}const Mt=pt,zt=kt;function Tt(r,f){const d=f??new o(12);return d[0]=r[0],d[1]=0,d[2]=0,d[4]=0,d[5]=r[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ot(r,f,d){const b=d??new o(12),y=f[0],S=f[1];return b[0]=y*r[0*4+0],b[1]=y*r[0*4+1],b[2]=y*r[0*4+2],b[4]=S*r[1*4+0],b[5]=S*r[1*4+1],b[6]=S*r[1*4+2],r!==b&&(b[8]=r[8],b[9]=r[9],b[10]=r[10]),b}function xt(r,f){const d=f??new o(12);return d[0]=r[0],d[1]=0,d[2]=0,d[4]=0,d[5]=r[1],d[6]=0,d[8]=0,d[9]=0,d[10]=r[2],d}function ht(r,f,d){const b=d??new o(12),y=f[0],S=f[1],k=f[2];return b[0]=y*r[0*4+0],b[1]=y*r[0*4+1],b[2]=y*r[0*4+2],b[4]=S*r[1*4+0],b[5]=S*r[1*4+1],b[6]=S*r[1*4+2],b[8]=k*r[2*4+0],b[9]=k*r[2*4+1],b[10]=k*r[2*4+2],b}function Wt(r,f){const d=f??new o(12);return d[0]=r,d[1]=0,d[2]=0,d[4]=0,d[5]=r,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function T(r,f,d){const b=d??new o(12);return b[0]=f*r[0*4+0],b[1]=f*r[0*4+1],b[2]=f*r[0*4+2],b[4]=f*r[1*4+0],b[5]=f*r[1*4+1],b[6]=f*r[1*4+2],r!==b&&(b[8]=r[8],b[9]=r[9],b[10]=r[10]),b}function $(r,f){const d=f??new o(12);return d[0]=r,d[1]=0,d[2]=0,d[4]=0,d[5]=r,d[6]=0,d[8]=0,d[9]=0,d[10]=r,d}function g(r,f,d){const b=d??new o(12);return b[0]=f*r[0*4+0],b[1]=f*r[0*4+1],b[2]=f*r[0*4+2],b[4]=f*r[1*4+0],b[5]=f*r[1*4+1],b[6]=f*r[1*4+2],b[8]=f*r[2*4+0],b[9]=f*r[2*4+1],b[10]=f*r[2*4+2],b}return{add:L,clone:Z,copy:O,create:C,determinant:z,equals:X,equalsApproximately:U,fromMat4:E,fromQuat:M,get3DScaling:Ut,getAxis:Y,getScaling:_t,getTranslation:Q,identity:K,inverse:ut,invert:N,mul:lt,mulScalar:A,multiply:G,multiplyScalar:B,negate:V,rotate:kt,rotateX:H,rotateY:It,rotateZ:zt,rotation:pt,rotationX:wt,rotationY:st,rotationZ:Mt,scale:Ot,scale3D:ht,scaling:Tt,scaling3D:xt,set:x,setAxis:et,setTranslation:W,translate:Dt,translation:Rt,transpose:j,uniformScale:T,uniformScale3D:g,uniformScaling:Wt,uniformScaling3D:$}}const Ai=new Map;function Pl(o){let l=Ai.get(o);return l||(l=yl(o),Ai.set(o,l)),l}function Sl(o){const l=Ln(o);function h(i,m,u,p,a,_,w,v,R,F,q,ct,rt,it,ft,yt){const dt=new o(16);return i!==void 0&&(dt[0]=i,m!==void 0&&(dt[1]=m,u!==void 0&&(dt[2]=u,p!==void 0&&(dt[3]=p,a!==void 0&&(dt[4]=a,_!==void 0&&(dt[5]=_,w!==void 0&&(dt[6]=w,v!==void 0&&(dt[7]=v,R!==void 0&&(dt[8]=R,F!==void 0&&(dt[9]=F,q!==void 0&&(dt[10]=q,ct!==void 0&&(dt[11]=ct,rt!==void 0&&(dt[12]=rt,it!==void 0&&(dt[13]=it,ft!==void 0&&(dt[14]=ft,yt!==void 0&&(dt[15]=yt)))))))))))))))),dt}function C(i,m,u,p,a,_,w,v,R,F,q,ct,rt,it,ft,yt,dt){const bt=dt??new o(16);return bt[0]=i,bt[1]=m,bt[2]=u,bt[3]=p,bt[4]=a,bt[5]=_,bt[6]=w,bt[7]=v,bt[8]=R,bt[9]=F,bt[10]=q,bt[11]=ct,bt[12]=rt,bt[13]=it,bt[14]=ft,bt[15]=yt,bt}function x(i,m){const u=m??new o(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(i,m){const u=m??new o(16),p=i[0],a=i[1],_=i[2],w=i[3],v=p+p,R=a+a,F=_+_,q=p*v,ct=a*v,rt=a*R,it=_*v,ft=_*R,yt=_*F,dt=w*v,bt=w*R,Ct=w*F;return u[0]=1-rt-yt,u[1]=ct+Ct,u[2]=it-bt,u[3]=0,u[4]=ct-Ct,u[5]=1-q-yt,u[6]=ft+dt,u[7]=0,u[8]=it+bt,u[9]=ft-dt,u[10]=1-q-rt,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(i,m){const u=m??new o(16);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[3]=-i[3],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[7]=-i[7],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u[11]=-i[11],u[12]=-i[12],u[13]=-i[13],u[14]=-i[14],u[15]=-i[15],u}function V(i,m,u){const p=u??new o(16);return p[0]=i[0]+m[0],p[1]=i[1]+m[1],p[2]=i[2]+m[2],p[3]=i[3]+m[3],p[4]=i[4]+m[4],p[5]=i[5]+m[5],p[6]=i[6]+m[6],p[7]=i[7]+m[7],p[8]=i[8]+m[8],p[9]=i[9]+m[9],p[10]=i[10]+m[10],p[11]=i[11]+m[11],p[12]=i[12]+m[12],p[13]=i[13]+m[13],p[14]=i[14]+m[14],p[15]=i[15]+m[15],p}function B(i,m,u){const p=u??new o(16);return p[0]=i[0]*m,p[1]=i[1]*m,p[2]=i[2]*m,p[3]=i[3]*m,p[4]=i[4]*m,p[5]=i[5]*m,p[6]=i[6]*m,p[7]=i[7]*m,p[8]=i[8]*m,p[9]=i[9]*m,p[10]=i[10]*m,p[11]=i[11]*m,p[12]=i[12]*m,p[13]=i[13]*m,p[14]=i[14]*m,p[15]=i[15]*m,p}const A=B;function L(i,m){const u=m??new o(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=i[3],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=i[7],u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=i[11],u[12]=i[12],u[13]=i[13],u[14]=i[14],u[15]=i[15],u}const O=L;function Z(i,m){return Math.abs(i[0]-m[0])<Lt&&Math.abs(i[1]-m[1])<Lt&&Math.abs(i[2]-m[2])<Lt&&Math.abs(i[3]-m[3])<Lt&&Math.abs(i[4]-m[4])<Lt&&Math.abs(i[5]-m[5])<Lt&&Math.abs(i[6]-m[6])<Lt&&Math.abs(i[7]-m[7])<Lt&&Math.abs(i[8]-m[8])<Lt&&Math.abs(i[9]-m[9])<Lt&&Math.abs(i[10]-m[10])<Lt&&Math.abs(i[11]-m[11])<Lt&&Math.abs(i[12]-m[12])<Lt&&Math.abs(i[13]-m[13])<Lt&&Math.abs(i[14]-m[14])<Lt&&Math.abs(i[15]-m[15])<Lt}function U(i,m){return i[0]===m[0]&&i[1]===m[1]&&i[2]===m[2]&&i[3]===m[3]&&i[4]===m[4]&&i[5]===m[5]&&i[6]===m[6]&&i[7]===m[7]&&i[8]===m[8]&&i[9]===m[9]&&i[10]===m[10]&&i[11]===m[11]&&i[12]===m[12]&&i[13]===m[13]&&i[14]===m[14]&&i[15]===m[15]}function X(i){const m=i??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function K(i,m){const u=m??new o(16);if(u===i){let At;return At=i[1],i[1]=i[4],i[4]=At,At=i[2],i[2]=i[8],i[8]=At,At=i[3],i[3]=i[12],i[12]=At,At=i[6],i[6]=i[9],i[9]=At,At=i[7],i[7]=i[13],i[13]=At,At=i[11],i[11]=i[14],i[14]=At,u}const p=i[0*4+0],a=i[0*4+1],_=i[0*4+2],w=i[0*4+3],v=i[1*4+0],R=i[1*4+1],F=i[1*4+2],q=i[1*4+3],ct=i[2*4+0],rt=i[2*4+1],it=i[2*4+2],ft=i[2*4+3],yt=i[3*4+0],dt=i[3*4+1],bt=i[3*4+2],Ct=i[3*4+3];return u[0]=p,u[1]=v,u[2]=ct,u[3]=yt,u[4]=a,u[5]=R,u[6]=rt,u[7]=dt,u[8]=_,u[9]=F,u[10]=it,u[11]=bt,u[12]=w,u[13]=q,u[14]=ft,u[15]=Ct,u}function j(i,m){const u=m??new o(16),p=i[0*4+0],a=i[0*4+1],_=i[0*4+2],w=i[0*4+3],v=i[1*4+0],R=i[1*4+1],F=i[1*4+2],q=i[1*4+3],ct=i[2*4+0],rt=i[2*4+1],it=i[2*4+2],ft=i[2*4+3],yt=i[3*4+0],dt=i[3*4+1],bt=i[3*4+2],Ct=i[3*4+3],At=it*Ct,J=bt*ft,at=F*Ct,ot=bt*q,gt=F*ft,Pt=it*q,Et=_*Ct,mt=bt*w,vt=_*ft,Gt=it*w,Vt=_*q,qt=F*w,Kt=ct*dt,Xt=yt*rt,Ht=v*dt,ee=yt*R,Qt=v*rt,be=ct*R,fe=p*dt,_e=yt*a,me=p*rt,ve=ct*a,Jt=p*R,ue=v*a,ge=At*R+ot*rt+gt*dt-(J*R+at*rt+Pt*dt),oe=J*a+Et*rt+Gt*dt-(At*a+mt*rt+vt*dt),we=at*a+mt*R+Vt*dt-(ot*a+Et*R+qt*dt),xe=Pt*a+vt*R+qt*rt-(gt*a+Gt*R+Vt*rt),Yt=1/(p*ge+v*oe+ct*we+yt*xe);return u[0]=Yt*ge,u[1]=Yt*oe,u[2]=Yt*we,u[3]=Yt*xe,u[4]=Yt*(J*v+at*ct+Pt*yt-(At*v+ot*ct+gt*yt)),u[5]=Yt*(At*p+mt*ct+vt*yt-(J*p+Et*ct+Gt*yt)),u[6]=Yt*(ot*p+Et*v+qt*yt-(at*p+mt*v+Vt*yt)),u[7]=Yt*(gt*p+Gt*v+Vt*ct-(Pt*p+vt*v+qt*ct)),u[8]=Yt*(Kt*q+ee*ft+Qt*Ct-(Xt*q+Ht*ft+be*Ct)),u[9]=Yt*(Xt*w+fe*ft+ve*Ct-(Kt*w+_e*ft+me*Ct)),u[10]=Yt*(Ht*w+_e*q+Jt*Ct-(ee*w+fe*q+ue*Ct)),u[11]=Yt*(be*w+me*q+ue*ft-(Qt*w+ve*q+Jt*ft)),u[12]=Yt*(Ht*it+be*bt+Xt*F-(Qt*bt+Kt*F+ee*it)),u[13]=Yt*(me*bt+Kt*_+_e*it-(fe*it+ve*bt+Xt*_)),u[14]=Yt*(fe*F+ue*bt+ee*_-(Jt*bt+Ht*_+_e*F)),u[15]=Yt*(Jt*it+Qt*_+ve*F-(me*F+ue*it+be*_)),u}function ut(i){const m=i[0],u=i[0*4+1],p=i[0*4+2],a=i[0*4+3],_=i[1*4+0],w=i[1*4+1],v=i[1*4+2],R=i[1*4+3],F=i[2*4+0],q=i[2*4+1],ct=i[2*4+2],rt=i[2*4+3],it=i[3*4+0],ft=i[3*4+1],yt=i[3*4+2],dt=i[3*4+3],bt=ct*dt,Ct=yt*rt,At=v*dt,J=yt*R,at=v*rt,ot=ct*R,gt=p*dt,Pt=yt*a,Et=p*rt,mt=ct*a,vt=p*R,Gt=v*a,Vt=bt*w+J*q+at*ft-(Ct*w+At*q+ot*ft),qt=Ct*u+gt*q+mt*ft-(bt*u+Pt*q+Et*ft),Kt=At*u+Pt*w+vt*ft-(J*u+gt*w+Gt*ft),Xt=ot*u+Et*w+Gt*q-(at*u+mt*w+vt*q);return m*Vt+_*qt+F*Kt+it*Xt}const z=j;function N(i,m,u){const p=u??new o(16),a=i[0],_=i[1],w=i[2],v=i[3],R=i[4+0],F=i[4+1],q=i[4+2],ct=i[4+3],rt=i[8+0],it=i[8+1],ft=i[8+2],yt=i[8+3],dt=i[12+0],bt=i[12+1],Ct=i[12+2],At=i[12+3],J=m[0],at=m[1],ot=m[2],gt=m[3],Pt=m[4+0],Et=m[4+1],mt=m[4+2],vt=m[4+3],Gt=m[8+0],Vt=m[8+1],qt=m[8+2],Kt=m[8+3],Xt=m[12+0],Ht=m[12+1],ee=m[12+2],Qt=m[12+3];return p[0]=a*J+R*at+rt*ot+dt*gt,p[1]=_*J+F*at+it*ot+bt*gt,p[2]=w*J+q*at+ft*ot+Ct*gt,p[3]=v*J+ct*at+yt*ot+At*gt,p[4]=a*Pt+R*Et+rt*mt+dt*vt,p[5]=_*Pt+F*Et+it*mt+bt*vt,p[6]=w*Pt+q*Et+ft*mt+Ct*vt,p[7]=v*Pt+ct*Et+yt*mt+At*vt,p[8]=a*Gt+R*Vt+rt*qt+dt*Kt,p[9]=_*Gt+F*Vt+it*qt+bt*Kt,p[10]=w*Gt+q*Vt+ft*qt+Ct*Kt,p[11]=v*Gt+ct*Vt+yt*qt+At*Kt,p[12]=a*Xt+R*Ht+rt*ee+dt*Qt,p[13]=_*Xt+F*Ht+it*ee+bt*Qt,p[14]=w*Xt+q*Ht+ft*ee+Ct*Qt,p[15]=v*Xt+ct*Ht+yt*ee+At*Qt,p}const G=N;function lt(i,m,u){const p=u??X();return i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function W(i,m){const u=m??l.create();return u[0]=i[12],u[1]=i[13],u[2]=i[14],u}function Q(i,m,u){const p=u??l.create(),a=m*4;return p[0]=i[a+0],p[1]=i[a+1],p[2]=i[a+2],p}function Y(i,m,u,p){const a=p===i?p:L(i,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function et(i,m){const u=m??l.create(),p=i[0],a=i[1],_=i[2],w=i[4],v=i[5],R=i[6],F=i[8],q=i[9],ct=i[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(w*w+v*v+R*R),u[2]=Math.sqrt(F*F+q*q+ct*ct),u}function _t(i,m,u,p,a){const _=a??new o(16),w=Math.tan(Math.PI*.5-.5*i);if(_[0]=w/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=w,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(u-p);_[10]=p*v,_[14]=p*u*v}else _[10]=-1,_[14]=-u;return _}function Ut(i,m,u,p=1/0,a){const _=a??new o(16),w=1/Math.tan(i*.5);if(_[0]=w/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=w,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const v=1/(p-u);_[10]=u*v,_[14]=p*u*v}return _}function Rt(i,m,u,p,a,_,w){const v=w??new o(16);return v[0]=2/(m-i),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+i)/(i-m),v[13]=(p+u)/(u-p),v[14]=a/(a-_),v[15]=1,v}function Dt(i,m,u,p,a,_,w){const v=w??new o(16),R=m-i,F=p-u,q=a-_;return v[0]=2*a/R,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/F,v[6]=0,v[7]=0,v[8]=(i+m)/R,v[9]=(p+u)/F,v[10]=_/q,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/q,v[15]=0,v}function pt(i,m,u,p,a,_=1/0,w){const v=w??new o(16),R=m-i,F=p-u;if(v[0]=2*a/R,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/F,v[6]=0,v[7]=0,v[8]=(i+m)/R,v[9]=(p+u)/F,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const q=1/(_-a);v[10]=a*q,v[14]=_*a*q}return v}const kt=l.create(),wt=l.create(),H=l.create();function st(i,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(m,i,H),H),l.normalize(l.cross(u,H,kt),kt),l.normalize(l.cross(H,kt,wt),wt),a[0]=kt[0],a[1]=kt[1],a[2]=kt[2],a[3]=0,a[4]=wt[0],a[5]=wt[1],a[6]=wt[2],a[7]=0,a[8]=H[0],a[9]=H[1],a[10]=H[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function It(i,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(i,m,H),H),l.normalize(l.cross(u,H,kt),kt),l.normalize(l.cross(H,kt,wt),wt),a[0]=kt[0],a[1]=kt[1],a[2]=kt[2],a[3]=0,a[4]=wt[0],a[5]=wt[1],a[6]=wt[2],a[7]=0,a[8]=H[0],a[9]=H[1],a[10]=H[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function Mt(i,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(i,m,H),H),l.normalize(l.cross(u,H,kt),kt),l.normalize(l.cross(H,kt,wt),wt),a[0]=kt[0],a[1]=wt[0],a[2]=H[0],a[3]=0,a[4]=kt[1],a[5]=wt[1],a[6]=H[1],a[7]=0,a[8]=kt[2],a[9]=wt[2],a[10]=H[2],a[11]=0,a[12]=-(kt[0]*i[0]+kt[1]*i[1]+kt[2]*i[2]),a[13]=-(wt[0]*i[0]+wt[1]*i[1]+wt[2]*i[2]),a[14]=-(H[0]*i[0]+H[1]*i[1]+H[2]*i[2]),a[15]=1,a}function zt(i,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=i[0],u[13]=i[1],u[14]=i[2],u[15]=1,u}function Tt(i,m,u){const p=u??new o(16),a=m[0],_=m[1],w=m[2],v=i[0],R=i[1],F=i[2],q=i[3],ct=i[1*4+0],rt=i[1*4+1],it=i[1*4+2],ft=i[1*4+3],yt=i[2*4+0],dt=i[2*4+1],bt=i[2*4+2],Ct=i[2*4+3],At=i[3*4+0],J=i[3*4+1],at=i[3*4+2],ot=i[3*4+3];return i!==p&&(p[0]=v,p[1]=R,p[2]=F,p[3]=q,p[4]=ct,p[5]=rt,p[6]=it,p[7]=ft,p[8]=yt,p[9]=dt,p[10]=bt,p[11]=Ct),p[12]=v*a+ct*_+yt*w+At,p[13]=R*a+rt*_+dt*w+J,p[14]=F*a+it*_+bt*w+at,p[15]=q*a+ft*_+Ct*w+ot,p}function Ot(i,m){const u=m??new o(16),p=Math.cos(i),a=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function xt(i,m,u){const p=u??new o(16),a=i[4],_=i[5],w=i[6],v=i[7],R=i[8],F=i[9],q=i[10],ct=i[11],rt=Math.cos(m),it=Math.sin(m);return p[4]=rt*a+it*R,p[5]=rt*_+it*F,p[6]=rt*w+it*q,p[7]=rt*v+it*ct,p[8]=rt*R-it*a,p[9]=rt*F-it*_,p[10]=rt*q-it*w,p[11]=rt*ct-it*v,i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function ht(i,m){const u=m??new o(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Wt(i,m,u){const p=u??new o(16),a=i[0*4+0],_=i[0*4+1],w=i[0*4+2],v=i[0*4+3],R=i[2*4+0],F=i[2*4+1],q=i[2*4+2],ct=i[2*4+3],rt=Math.cos(m),it=Math.sin(m);return p[0]=rt*a-it*R,p[1]=rt*_-it*F,p[2]=rt*w-it*q,p[3]=rt*v-it*ct,p[8]=rt*R+it*a,p[9]=rt*F+it*_,p[10]=rt*q+it*w,p[11]=rt*ct+it*v,i!==p&&(p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function T(i,m){const u=m??new o(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function $(i,m,u){const p=u??new o(16),a=i[0*4+0],_=i[0*4+1],w=i[0*4+2],v=i[0*4+3],R=i[1*4+0],F=i[1*4+1],q=i[1*4+2],ct=i[1*4+3],rt=Math.cos(m),it=Math.sin(m);return p[0]=rt*a+it*R,p[1]=rt*_+it*F,p[2]=rt*w+it*q,p[3]=rt*v+it*ct,p[4]=rt*R-it*a,p[5]=rt*F-it*_,p[6]=rt*q-it*w,p[7]=rt*ct-it*v,i!==p&&(p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function g(i,m,u){const p=u??new o(16);let a=i[0],_=i[1],w=i[2];const v=Math.sqrt(a*a+_*_+w*w);a/=v,_/=v,w/=v;const R=a*a,F=_*_,q=w*w,ct=Math.cos(m),rt=Math.sin(m),it=1-ct;return p[0]=R+(1-R)*ct,p[1]=a*_*it+w*rt,p[2]=a*w*it-_*rt,p[3]=0,p[4]=a*_*it-w*rt,p[5]=F+(1-F)*ct,p[6]=_*w*it+a*rt,p[7]=0,p[8]=a*w*it+_*rt,p[9]=_*w*it-a*rt,p[10]=q+(1-q)*ct,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const r=g;function f(i,m,u,p){const a=p??new o(16);let _=m[0],w=m[1],v=m[2];const R=Math.sqrt(_*_+w*w+v*v);_/=R,w/=R,v/=R;const F=_*_,q=w*w,ct=v*v,rt=Math.cos(u),it=Math.sin(u),ft=1-rt,yt=F+(1-F)*rt,dt=_*w*ft+v*it,bt=_*v*ft-w*it,Ct=_*w*ft-v*it,At=q+(1-q)*rt,J=w*v*ft+_*it,at=_*v*ft+w*it,ot=w*v*ft-_*it,gt=ct+(1-ct)*rt,Pt=i[0],Et=i[1],mt=i[2],vt=i[3],Gt=i[4],Vt=i[5],qt=i[6],Kt=i[7],Xt=i[8],Ht=i[9],ee=i[10],Qt=i[11];return a[0]=yt*Pt+dt*Gt+bt*Xt,a[1]=yt*Et+dt*Vt+bt*Ht,a[2]=yt*mt+dt*qt+bt*ee,a[3]=yt*vt+dt*Kt+bt*Qt,a[4]=Ct*Pt+At*Gt+J*Xt,a[5]=Ct*Et+At*Vt+J*Ht,a[6]=Ct*mt+At*qt+J*ee,a[7]=Ct*vt+At*Kt+J*Qt,a[8]=at*Pt+ot*Gt+gt*Xt,a[9]=at*Et+ot*Vt+gt*Ht,a[10]=at*mt+ot*qt+gt*ee,a[11]=at*vt+ot*Kt+gt*Qt,i!==a&&(a[12]=i[12],a[13]=i[13],a[14]=i[14],a[15]=i[15]),a}const d=f;function b(i,m){const u=m??new o(16);return u[0]=i[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(i,m,u){const p=u??new o(16),a=m[0],_=m[1],w=m[2];return p[0]=a*i[0*4+0],p[1]=a*i[0*4+1],p[2]=a*i[0*4+2],p[3]=a*i[0*4+3],p[4]=_*i[1*4+0],p[5]=_*i[1*4+1],p[6]=_*i[1*4+2],p[7]=_*i[1*4+3],p[8]=w*i[2*4+0],p[9]=w*i[2*4+1],p[10]=w*i[2*4+2],p[11]=w*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function S(i,m){const u=m??new o(16);return u[0]=i,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(i,m,u){const p=u??new o(16);return p[0]=m*i[0*4+0],p[1]=m*i[0*4+1],p[2]=m*i[0*4+2],p[3]=m*i[0*4+3],p[4]=m*i[1*4+0],p[5]=m*i[1*4+1],p[6]=m*i[1*4+2],p[7]=m*i[1*4+3],p[8]=m*i[2*4+0],p[9]=m*i[2*4+1],p[10]=m*i[2*4+2],p[11]=m*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}return{add:V,aim:st,axisRotate:f,axisRotation:g,cameraAim:It,clone:O,copy:L,create:h,determinant:ut,equals:U,equalsApproximately:Z,fromMat3:x,fromQuat:E,frustum:Dt,frustumReverseZ:pt,getAxis:Q,getScaling:et,getTranslation:W,identity:X,inverse:j,invert:z,lookAt:Mt,mul:G,mulScalar:A,multiply:N,multiplyScalar:B,negate:M,ortho:Rt,perspective:_t,perspectiveReverseZ:Ut,rotate:d,rotateX:xt,rotateY:Wt,rotateZ:$,rotation:r,rotationX:Ot,rotationY:ht,rotationZ:T,scale:y,scaling:b,set:C,setAxis:Y,setTranslation:lt,translate:Tt,translation:zt,transpose:K,uniformScale:k,uniformScaling:S}}const Ri=new Map;function kl(o){let l=Ri.get(o);return l||(l=Sl(o),Ri.set(o,l)),l}function Cl(o){const l=Ln(o);function h(T,$,g,r){const f=new o(4);return T!==void 0&&(f[0]=T,$!==void 0&&(f[1]=$,g!==void 0&&(f[2]=g,r!==void 0&&(f[3]=r)))),f}const C=h;function x(T,$,g,r,f){const d=f??new o(4);return d[0]=T,d[1]=$,d[2]=g,d[3]=r,d}function E(T,$,g){const r=g??new o(4),f=$*.5,d=Math.sin(f);return r[0]=d*T[0],r[1]=d*T[1],r[2]=d*T[2],r[3]=Math.cos(f),r}function M(T,$){const g=$??l.create(3),r=Math.acos(T[3])*2,f=Math.sin(r*.5);return f>Lt?(g[0]=T[0]/f,g[1]=T[1]/f,g[2]=T[2]/f):(g[0]=1,g[1]=0,g[2]=0),{angle:r,axis:g}}function V(T,$){const g=_t(T,$);return Math.acos(2*g*g-1)}function B(T,$,g){const r=g??new o(4),f=T[0],d=T[1],b=T[2],y=T[3],S=$[0],k=$[1],i=$[2],m=$[3];return r[0]=f*m+y*S+d*i-b*k,r[1]=d*m+y*k+b*S-f*i,r[2]=b*m+y*i+f*k-d*S,r[3]=y*m-f*S-d*k-b*i,r}const A=B;function L(T,$,g){const r=g??new o(4),f=$*.5,d=T[0],b=T[1],y=T[2],S=T[3],k=Math.sin(f),i=Math.cos(f);return r[0]=d*i+S*k,r[1]=b*i+y*k,r[2]=y*i-b*k,r[3]=S*i-d*k,r}function O(T,$,g){const r=g??new o(4),f=$*.5,d=T[0],b=T[1],y=T[2],S=T[3],k=Math.sin(f),i=Math.cos(f);return r[0]=d*i-y*k,r[1]=b*i+S*k,r[2]=y*i+d*k,r[3]=S*i-b*k,r}function Z(T,$,g){const r=g??new o(4),f=$*.5,d=T[0],b=T[1],y=T[2],S=T[3],k=Math.sin(f),i=Math.cos(f);return r[0]=d*i+b*k,r[1]=b*i-d*k,r[2]=y*i+S*k,r[3]=S*i-y*k,r}function U(T,$,g,r){const f=r??new o(4),d=T[0],b=T[1],y=T[2],S=T[3];let k=$[0],i=$[1],m=$[2],u=$[3],p=d*k+b*i+y*m+S*u;p<0&&(p=-p,k=-k,i=-i,m=-m,u=-u);let a,_;if(1-p>Lt){const w=Math.acos(p),v=Math.sin(w);a=Math.sin((1-g)*w)/v,_=Math.sin(g*w)/v}else a=1-g,_=g;return f[0]=a*d+_*k,f[1]=a*b+_*i,f[2]=a*y+_*m,f[3]=a*S+_*u,f}function X(T,$){const g=$??new o(4),r=T[0],f=T[1],d=T[2],b=T[3],y=r*r+f*f+d*d+b*b,S=y?1/y:0;return g[0]=-r*S,g[1]=-f*S,g[2]=-d*S,g[3]=b*S,g}function K(T,$){const g=$??new o(4);return g[0]=-T[0],g[1]=-T[1],g[2]=-T[2],g[3]=T[3],g}function j(T,$){const g=$??new o(4),r=T[0]+T[5]+T[10];if(r>0){const f=Math.sqrt(r+1);g[3]=.5*f;const d=.5/f;g[0]=(T[6]-T[9])*d,g[1]=(T[8]-T[2])*d,g[2]=(T[1]-T[4])*d}else{let f=0;T[5]>T[0]&&(f=1),T[10]>T[f*4+f]&&(f=2);const d=(f+1)%3,b=(f+2)%3,y=Math.sqrt(T[f*4+f]-T[d*4+d]-T[b*4+b]+1);g[f]=.5*y;const S=.5/y;g[3]=(T[d*4+b]-T[b*4+d])*S,g[d]=(T[d*4+f]+T[f*4+d])*S,g[b]=(T[b*4+f]+T[f*4+b])*S}return g}function ut(T,$,g,r,f){const d=f??new o(4),b=T*.5,y=$*.5,S=g*.5,k=Math.sin(b),i=Math.cos(b),m=Math.sin(y),u=Math.cos(y),p=Math.sin(S),a=Math.cos(S);switch(r){case"xyz":d[0]=k*u*a+i*m*p,d[1]=i*m*a-k*u*p,d[2]=i*u*p+k*m*a,d[3]=i*u*a-k*m*p;break;case"xzy":d[0]=k*u*a-i*m*p,d[1]=i*m*a-k*u*p,d[2]=i*u*p+k*m*a,d[3]=i*u*a+k*m*p;break;case"yxz":d[0]=k*u*a+i*m*p,d[1]=i*m*a-k*u*p,d[2]=i*u*p-k*m*a,d[3]=i*u*a+k*m*p;break;case"yzx":d[0]=k*u*a+i*m*p,d[1]=i*m*a+k*u*p,d[2]=i*u*p-k*m*a,d[3]=i*u*a-k*m*p;break;case"zxy":d[0]=k*u*a-i*m*p,d[1]=i*m*a+k*u*p,d[2]=i*u*p+k*m*a,d[3]=i*u*a-k*m*p;break;case"zyx":d[0]=k*u*a-i*m*p,d[1]=i*m*a+k*u*p,d[2]=i*u*p-k*m*a,d[3]=i*u*a+k*m*p;break;default:throw new Error(`Unknown rotation order: ${r}`)}return d}function z(T,$){const g=$??new o(4);return g[0]=T[0],g[1]=T[1],g[2]=T[2],g[3]=T[3],g}const N=z;function G(T,$,g){const r=g??new o(4);return r[0]=T[0]+$[0],r[1]=T[1]+$[1],r[2]=T[2]+$[2],r[3]=T[3]+$[3],r}function lt(T,$,g){const r=g??new o(4);return r[0]=T[0]-$[0],r[1]=T[1]-$[1],r[2]=T[2]-$[2],r[3]=T[3]-$[3],r}const W=lt;function Q(T,$,g){const r=g??new o(4);return r[0]=T[0]*$,r[1]=T[1]*$,r[2]=T[2]*$,r[3]=T[3]*$,r}const Y=Q;function et(T,$,g){const r=g??new o(4);return r[0]=T[0]/$,r[1]=T[1]/$,r[2]=T[2]/$,r[3]=T[3]/$,r}function _t(T,$){return T[0]*$[0]+T[1]*$[1]+T[2]*$[2]+T[3]*$[3]}function Ut(T,$,g,r){const f=r??new o(4);return f[0]=T[0]+g*($[0]-T[0]),f[1]=T[1]+g*($[1]-T[1]),f[2]=T[2]+g*($[2]-T[2]),f[3]=T[3]+g*($[3]-T[3]),f}function Rt(T){const $=T[0],g=T[1],r=T[2],f=T[3];return Math.sqrt($*$+g*g+r*r+f*f)}const Dt=Rt;function pt(T){const $=T[0],g=T[1],r=T[2],f=T[3];return $*$+g*g+r*r+f*f}const kt=pt;function wt(T,$){const g=$??new o(4),r=T[0],f=T[1],d=T[2],b=T[3],y=Math.sqrt(r*r+f*f+d*d+b*b);return y>1e-5?(g[0]=r/y,g[1]=f/y,g[2]=d/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function H(T,$){return Math.abs(T[0]-$[0])<Lt&&Math.abs(T[1]-$[1])<Lt&&Math.abs(T[2]-$[2])<Lt&&Math.abs(T[3]-$[3])<Lt}function st(T,$){return T[0]===$[0]&&T[1]===$[1]&&T[2]===$[2]&&T[3]===$[3]}function It(T){const $=T??new o(4);return $[0]=0,$[1]=0,$[2]=0,$[3]=1,$}const Mt=l.create(),zt=l.create(),Tt=l.create();function Ot(T,$,g){const r=g??new o(4),f=l.dot(T,$);return f<-.999999?(l.cross(zt,T,Mt),l.len(Mt)<1e-6&&l.cross(Tt,T,Mt),l.normalize(Mt,Mt),E(Mt,Math.PI,r),r):f>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(l.cross(T,$,Mt),r[0]=Mt[0],r[1]=Mt[1],r[2]=Mt[2],r[3]=1+f,wt(r,r))}const xt=new o(4),ht=new o(4);function Wt(T,$,g,r,f,d){const b=d??new o(4);return U(T,r,f,xt),U($,g,f,ht),U(xt,ht,2*f*(1-f),b),b}return{create:h,fromValues:C,set:x,fromAxisAngle:E,toAxisAngle:M,angle:V,multiply:B,mul:A,rotateX:L,rotateY:O,rotateZ:Z,slerp:U,inverse:X,conjugate:K,fromMat:j,fromEuler:ut,copy:z,clone:N,add:G,subtract:lt,sub:W,mulScalar:Q,scale:Y,divScalar:et,dot:_t,lerp:Ut,length:Rt,len:Dt,lengthSq:pt,lenSq:kt,normalize:wt,equalsApproximately:H,equals:st,identity:It,rotationTo:Ot,sqlerp:Wt}}const Ii=new Map;function El(o){let l=Ii.get(o);return l||(l=Cl(o),Ii.set(o,l)),l}function Ml(o){function l(g,r,f,d){const b=new o(4);return g!==void 0&&(b[0]=g,r!==void 0&&(b[1]=r,f!==void 0&&(b[2]=f,d!==void 0&&(b[3]=d)))),b}const h=l;function C(g,r,f,d,b){const y=b??new o(4);return y[0]=g,y[1]=r,y[2]=f,y[3]=d,y}function x(g,r){const f=r??new o(4);return f[0]=Math.ceil(g[0]),f[1]=Math.ceil(g[1]),f[2]=Math.ceil(g[2]),f[3]=Math.ceil(g[3]),f}function E(g,r){const f=r??new o(4);return f[0]=Math.floor(g[0]),f[1]=Math.floor(g[1]),f[2]=Math.floor(g[2]),f[3]=Math.floor(g[3]),f}function M(g,r){const f=r??new o(4);return f[0]=Math.round(g[0]),f[1]=Math.round(g[1]),f[2]=Math.round(g[2]),f[3]=Math.round(g[3]),f}function V(g,r=0,f=1,d){const b=d??new o(4);return b[0]=Math.min(f,Math.max(r,g[0])),b[1]=Math.min(f,Math.max(r,g[1])),b[2]=Math.min(f,Math.max(r,g[2])),b[3]=Math.min(f,Math.max(r,g[3])),b}function B(g,r,f){const d=f??new o(4);return d[0]=g[0]+r[0],d[1]=g[1]+r[1],d[2]=g[2]+r[2],d[3]=g[3]+r[3],d}function A(g,r,f,d){const b=d??new o(4);return b[0]=g[0]+r[0]*f,b[1]=g[1]+r[1]*f,b[2]=g[2]+r[2]*f,b[3]=g[3]+r[3]*f,b}function L(g,r,f){const d=f??new o(4);return d[0]=g[0]-r[0],d[1]=g[1]-r[1],d[2]=g[2]-r[2],d[3]=g[3]-r[3],d}const O=L;function Z(g,r){return Math.abs(g[0]-r[0])<Lt&&Math.abs(g[1]-r[1])<Lt&&Math.abs(g[2]-r[2])<Lt&&Math.abs(g[3]-r[3])<Lt}function U(g,r){return g[0]===r[0]&&g[1]===r[1]&&g[2]===r[2]&&g[3]===r[3]}function X(g,r,f,d){const b=d??new o(4);return b[0]=g[0]+f*(r[0]-g[0]),b[1]=g[1]+f*(r[1]-g[1]),b[2]=g[2]+f*(r[2]-g[2]),b[3]=g[3]+f*(r[3]-g[3]),b}function K(g,r,f,d){const b=d??new o(4);return b[0]=g[0]+f[0]*(r[0]-g[0]),b[1]=g[1]+f[1]*(r[1]-g[1]),b[2]=g[2]+f[2]*(r[2]-g[2]),b[3]=g[3]+f[3]*(r[3]-g[3]),b}function j(g,r,f){const d=f??new o(4);return d[0]=Math.max(g[0],r[0]),d[1]=Math.max(g[1],r[1]),d[2]=Math.max(g[2],r[2]),d[3]=Math.max(g[3],r[3]),d}function ut(g,r,f){const d=f??new o(4);return d[0]=Math.min(g[0],r[0]),d[1]=Math.min(g[1],r[1]),d[2]=Math.min(g[2],r[2]),d[3]=Math.min(g[3],r[3]),d}function z(g,r,f){const d=f??new o(4);return d[0]=g[0]*r,d[1]=g[1]*r,d[2]=g[2]*r,d[3]=g[3]*r,d}const N=z;function G(g,r,f){const d=f??new o(4);return d[0]=g[0]/r,d[1]=g[1]/r,d[2]=g[2]/r,d[3]=g[3]/r,d}function lt(g,r){const f=r??new o(4);return f[0]=1/g[0],f[1]=1/g[1],f[2]=1/g[2],f[3]=1/g[3],f}const W=lt;function Q(g,r){return g[0]*r[0]+g[1]*r[1]+g[2]*r[2]+g[3]*r[3]}function Y(g){const r=g[0],f=g[1],d=g[2],b=g[3];return Math.sqrt(r*r+f*f+d*d+b*b)}const et=Y;function _t(g){const r=g[0],f=g[1],d=g[2],b=g[3];return r*r+f*f+d*d+b*b}const Ut=_t;function Rt(g,r){const f=g[0]-r[0],d=g[1]-r[1],b=g[2]-r[2],y=g[3]-r[3];return Math.sqrt(f*f+d*d+b*b+y*y)}const Dt=Rt;function pt(g,r){const f=g[0]-r[0],d=g[1]-r[1],b=g[2]-r[2],y=g[3]-r[3];return f*f+d*d+b*b+y*y}const kt=pt;function wt(g,r){const f=r??new o(4),d=g[0],b=g[1],y=g[2],S=g[3],k=Math.sqrt(d*d+b*b+y*y+S*S);return k>1e-5?(f[0]=d/k,f[1]=b/k,f[2]=y/k,f[3]=S/k):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function H(g,r){const f=r??new o(4);return f[0]=-g[0],f[1]=-g[1],f[2]=-g[2],f[3]=-g[3],f}function st(g,r){const f=r??new o(4);return f[0]=g[0],f[1]=g[1],f[2]=g[2],f[3]=g[3],f}const It=st;function Mt(g,r,f){const d=f??new o(4);return d[0]=g[0]*r[0],d[1]=g[1]*r[1],d[2]=g[2]*r[2],d[3]=g[3]*r[3],d}const zt=Mt;function Tt(g,r,f){const d=f??new o(4);return d[0]=g[0]/r[0],d[1]=g[1]/r[1],d[2]=g[2]/r[2],d[3]=g[3]/r[3],d}const Ot=Tt;function xt(g){const r=g??new o(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r}function ht(g,r,f){const d=f??new o(4),b=g[0],y=g[1],S=g[2],k=g[3];return d[0]=r[0]*b+r[4]*y+r[8]*S+r[12]*k,d[1]=r[1]*b+r[5]*y+r[9]*S+r[13]*k,d[2]=r[2]*b+r[6]*y+r[10]*S+r[14]*k,d[3]=r[3]*b+r[7]*y+r[11]*S+r[15]*k,d}function Wt(g,r,f){const d=f??new o(4);return wt(g,d),z(d,r,d)}function T(g,r,f){const d=f??new o(4);return Y(g)>r?Wt(g,r,d):st(g,d)}function $(g,r,f){const d=f??new o(4);return X(g,r,.5,d)}return{create:l,fromValues:h,set:C,ceil:x,floor:E,round:M,clamp:V,add:B,addScaled:A,subtract:L,sub:O,equalsApproximately:Z,equals:U,lerp:X,lerpV:K,max:j,min:ut,mulScalar:z,scale:N,divScalar:G,inverse:lt,invert:W,dot:Q,length:Y,len:et,lengthSq:_t,lenSq:Ut,distance:Rt,dist:Dt,distanceSq:pt,distSq:kt,normalize:wt,negate:H,copy:st,clone:It,multiply:Mt,mul:zt,divide:Tt,div:Ot,zero:xt,transformMat4:ht,setLength:Wt,truncate:T,midpoint:$}}const Li=new Map;function Bl(o){let l=Li.get(o);return l||(l=Ml(o),Li.set(o,l)),l}function fs(o,l,h,C,x,E){return{mat3:Pl(o),mat4:kl(l),quat:El(h),vec2:Ki(C),vec3:Ln(x),vec4:Bl(E)}}const{mat3:he,mat4:jt,quat:se,vec2:Vi,vec3:I,vec4:Uc}=fs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);fs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);fs(gl,Array,Array,Array,Array,Array);const Ui=document.querySelector("#log");let le=null,We=null;function Hi(){if(le)return le;le=document.createElement("div"),le.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",le.appendChild(o),We=document.createElement("div"),We.className="ply-spinner-label",le.appendChild(We),le.style.display="none",document.body.appendChild(le),le}function _s(o){Hi(),We&&o&&(We.textContent=o),le&&(le.style.opacity="1",le.style.display="flex")}function Ne(o){Hi(),We&&(We.textContent=o)}function gn(){if(!le)return;const o=le;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Yi(o,l){if(!Ui)return;const h=document.createElement("p");h.innerText=o,l&&Object.assign(h.style,l),Ui.appendChild(h)}async function re(o){console.log(o),Yi(o)}async function Tl(o){console.error(o),Yi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Zi;function Xi(){Zi=performance.now()}function Gi(o){const l=performance.now()-Zi;re(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Dl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function en(o){return o+3&-4}const Al=2,Rl=3,wn=5,$e=6,xn=7;function Il(o){const l=new TextDecoder("ascii"),h=l.decode(new Uint8Array(o,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const C=new DataView(o),x=4,E=C.getUint32(x+0,!0),M=C.getUint32(x+4,!0),V=C.getUint32(x+8,!0),B=C.getUint32(x+12,!0),A=C.getUint32(x+16,!0),L=C.getFloat32(x+20,!0),O=C.getUint32(x+24,!0),Z=C.getUint32(x+28,!0),U=C.getFloat32(x+32,!0),X=C.getFloat32(x+36,!0),K=C.getFloat32(x+40,!0),j=C.getUint32(x+44,!0),ut=C.getFloat32(x+48,!0),z=C.getFloat32(x+52,!0),N=C.getUint32(x+56,!0),G=C.getUint32(x+60,!0),lt=G>0?G:1;if(Z!==Al&&Z!==Rl&&Z!==wn&&Z!==$e&&Z!==xn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Z}`);if(Z!==wn&&Z!==$e&&(E%4!==0||j%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${E} layer_h=${j}`);let W=x+64;const Q=(N+1)*4,Y=new Uint32Array(o.slice(W,W+Q));W+=Q;let et;if(lt>1){const H=(lt+1)*4;if(W+H>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${H} from ${W})`);et=new Uint32Array(o.slice(W,W+H)),W+=H}else et=new Uint32Array([0,E]);let _t=0;for(let H=0;H<lt;H++){const st=et[H+1]-et[H];st>_t&&(_t=st)}const Ut=A*4*4;if(W+Ut>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ut} more bytes from offset ${W}, have ${o.byteLength-W}`);const Rt=new Float32Array(o.slice(W,W+Ut));W+=Ut;const Dt=new Float32Array(A*5);for(let H=0;H<A;H++){const st=Rt[H*4+0],It=Rt[H*4+1],Mt=Rt[H*4+2],zt=Rt[H*4+3];let Tt=0;for(let T=1;T<=N&&Y[T]<=It;T++)Tt=T;let Ot=0;for(let T=1;T<=lt&&et[T]<=st;T++)Ot=T;const xt=It-Y[Tt],ht=st-et[Ot],Wt=Ot*N+Tt;Dt[H*5+0]=ht,Dt[H*5+1]=xt,Dt[H*5+2]=Mt,Dt[H*5+3]=zt,Dt[H*5+4]=Wt}if(Z===wn||Z===$e){if(W+24>o.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const H=l.decode(new Uint8Array(o,W,4));if(H!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${H}'`);const st=C.getUint32(W+4,!0),It=C.getUint32(W+8,!0),Mt=C.getUint32(W+12,!0),zt=C.getUint32(W+16,!0),Tt=C.getUint32(W+20,!0);if(st!==1)throw new Error(`NAT2 RVQP unsupported version ${st}`);if(zt!==A)throw new Error(`NAT2 RVQP num_rects ${zt} != header num_rects ${A}`);if(W+=24,W+16>o.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const Ot=new Float32Array(o.slice(W,W+8)),xt=new Float32Array(o.slice(W+8,W+16));W+=16;const ht=It*Mt,Wt=2*It*Mt,T=Z===$e?(ht>>2)*(Wt>>2)*16:ht*Wt*4;if(W+T>o.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${T}, have ${o.byteLength-W})`);const $=new Uint8Array(o.slice(W,W+T));W+=T;const g=Tt*4;if(W+g>o.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${o.byteLength-W})`);const r=new Uint32Array(o.slice(W,W+g));W+=g;const f=(A+1)*4;if(W+f>o.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${f}, have ${o.byteLength-W})`);const d=new Uint32Array(o.slice(W,W+f));return W+=f,{width:E,height:M,channels:V,kernel_type:B,num_rects:A,uv_extent:L,sb_number:O,format:Z,sh_bias:U,res_bias:X,compact_mult:K,layer_h:j,atlas_scale:ut,atlas_offset:z,n_layers:N,n_cols:lt,layer_cuts:Y,column_cuts:et,slice_width:_t,rects_expanded:Dt,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:It,B:Mt,N_used:Tt,pair_scale:Ot,pair_offset:xt,codebook_image:$,packed_indices:r,surfel_offsets:d}}}let pt;const wt=E/4*16;if(Z===xn){if(W+24>o.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const H=l.decode(new Uint8Array(o,W,4));if(H!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${H}'`);const st=C.getUint32(W+4,!0),It=C.getUint32(W+8,!0),Mt=C.getUint32(W+12,!0),zt=C.getUint32(W+16,!0),Tt=C.getUint32(W+20,!0);if(st!==1)throw new Error(`NAT2 BCCB unsupported version ${st}`);if(Mt!==M/4||zt!==E/4||Tt!==Mt*zt)throw new Error(`NAT2 BCCB block grid mismatch: header ${E}×${M}, sub-header ${zt}×${Mt} (${Tt} blocks)`);W+=24;const Ot=It*16;if(W+Ot>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Ot}, have ${o.byteLength-W})`);const xt=new Uint8Array(o,W,Ot);W+=Ot;const ht=Tt*2;if(W+ht>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${ht}, have ${o.byteLength-W})`);const Wt=new Uint16Array(o.slice(W,W+ht));W+=ht;const T=new Uint8Array(Tt*16);for(let $=0;$<Tt;$++){const g=Wt[$]*16;T.set(xt.subarray(g,g+16),$*16)}pt=T}else{let H=0;for(let st=0;st<N;st++){const It=Y[st+1]-Y[st];if(It%4!==0)throw new Error(`NAT2 BC7 layer ${st} rows ${It} not 4-aligned`);H+=It/4*wt}if(W+H>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${H} more bytes from offset ${W}, have ${o.byteLength-W}`);pt=new Uint8Array(o.slice(W,W+H))}return{width:E,height:M,channels:V,kernel_type:B,num_rects:A,uv_extent:L,sb_number:O,format:Z,sh_bias:U,res_bias:X,compact_mult:K,layer_h:j,atlas_scale:ut,atlas_offset:z,n_layers:N,n_cols:lt,layer_cuts:Y,column_cuts:et,slice_width:_t,rects_expanded:Dt,atlas_bytes:pt}}const Ll=32;function Vl(o){const l=o.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d-array"}),C=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:h,sampler:C}}function Ul(o){const l=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d"}),C=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),x=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),E=x.createView({dimension:"2d"}),M=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:h,cbSamp:C,packedTex:x,packedView:E,offsetsBuf:M}}function Gl(o,l,h){const C=l.format===wn||l.format===$e,x=l.format===$e;let E,M,V,B;if(C){const z=Vl(o);E=z.tex,M=z.view,V=z.sampler,B="RVQ-paired atlas"}else if(l.format===2||l.format===xn){if(!o.features.has("texture-compression-bc"))return re(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===xn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:M,sampler:V}=zi(o,l,"bc7-rgba-unorm",B)}else if(l.format===3){if(!o.features.has("texture-compression-astc"))return re("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;B="ASTC 4x4 atlas",{texture:E,view:M,sampler:V}=zi(o,l,"astc-4x4-unorm",B)}else return re(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:A}=l,L=o.createBuffer({label:"atlas rects (5-stride)",size:en(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(L,0,A);let O,Z,U,X,K,j;if(C){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const z=l.rvq_paired,N=z.K_orig*z.B,G=2*z.K_orig*z.B;if(N>o.limits.maxTextureDimension2D||G>o.limits.maxTextureDimension2D)return re(`⚠️  RVQ codebook ${N}x${G} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;let lt,W;if(x){if(!o.features.has("texture-compression-bc"))return re("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;lt="bc7-rgba-unorm",W=(N>>2)*16}else lt="rgba8unorm",W=N*4;const Q=o.createTexture({label:x?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:N,height:G,depthOrArrayLayers:1},format:lt,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});o.queue.writeTexture({texture:Q},z.codebook_image,{offset:0,bytesPerRow:W,rowsPerImage:G},{width:N,height:G,depthOrArrayLayers:1}),O=Q,Z=Q.createView({dimension:"2d"}),U=o.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const Y=8192,et=z.N_used,_t=Math.ceil(et/Y);if(_t>o.limits.maxTextureDimension2D||Y>o.limits.maxTextureDimension2D)return re(`⚠️  RVQ packed_indices texture ${Y}x${_t} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;X=o.createTexture({label:"rvq packed_indices (r32uint)",size:{width:Y,height:_t,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Ut=Y*_t;let Rt;if(Ut===et)Rt=new Uint8Array(z.packed_indices.buffer,z.packed_indices.byteOffset,z.packed_indices.byteLength);else{const Dt=new Uint32Array(Ut);Dt.set(z.packed_indices),Rt=new Uint8Array(Dt.buffer)}o.queue.writeTexture({texture:X},Rt,{offset:0,bytesPerRow:Y*4,rowsPerImage:_t},{width:Y,height:_t,depthOrArrayLayers:1}),K=X.createView({dimension:"2d"}),j=o.createBuffer({label:"rvq surfel_offsets",size:en(z.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer(j,0,z.surfel_offsets),re(`🪡 RVQ-paired atlas wired: codebook ${N}x${G} (${(z.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${et.toLocaleString()} packed indices as r32uint ${Y}x${_t} (${(z.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${z.surfel_offsets.length} surfel_offsets`)}else{const z=Ul(o);O=z.cbTex,Z=z.cbView,U=z.cbSamp,X=z.packedTex,K=z.packedView,j=z.offsetsBuf}const ut=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Qi(o,ut,l,h),{texture:E,view:M,sampler:V,rectsBuffer:L,texParamsBuffer:ut,meta:l,rvqCodebookTexture:O,rvqCodebookView:Z,rvqCodebookSampler:U,rvqPackedIndicesTexture:X,rvqPackedIndicesView:K,rvqSurfelOffsetsBuffer:j}}function zi(o,l,h,C){const{width:x,layer_h:E,n_layers:M,n_cols:V,layer_cuts:B,column_cuts:A,slice_width:L,atlas_bytes:O}=l,U=x/4*16,X=o.limits.maxTextureDimension2D;if(E>X||L>X)throw new Error(`⚠️  atlas slice dims ${L}x${E} exceed maxTextureDimension2D=${X}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const K=V*M;if(K>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${V} cols × ${M} layers = ${K} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const j=o.createTexture({label:C,size:{width:L,height:E,depthOrArrayLayers:K},mipLevelCount:1,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let N=0;N<V;N++){const G=A[N]/4,lt=(A[N+1]-A[N])/4;for(let W=0;W<M;W++){const Q=B[W]/4,Y=(B[W+1]-B[W])/4,et=N*M+W,_t=Q*U+G*16;o.queue.writeTexture({texture:j,mipLevel:0,origin:{x:0,y:0,z:et},aspect:"all"},O,{offset:_t,bytesPerRow:U,rowsPerImage:Y},{width:lt*4,height:Y*4,depthOrArrayLayers:1})}}const ut=j.createView({label:`${C} view`,dimension:"2d-array"}),z=o.createSampler({label:`${C} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:j,view:ut,sampler:z}}function Qi(o,l,h,C){const x=new ArrayBuffer(48),E=new Uint32Array(x),M=new Float32Array(x),V=h.slice_width||h.width;E[0]=C?V:0,E[1]=h.layer_h;let B=h.format;B===$e&&(B=wn),B===xn&&(B=2),E[2]=B,M[3]=h.atlas_scale,M[4]=h.atlas_offset,M[5]=h.uv_extent,M[6]=h.res_bias,h.rvq_paired?(E[7]=h.rvq_paired.B,M[8]=h.rvq_paired.pair_scale[0],M[9]=h.rvq_paired.pair_scale[1],M[10]=h.rvq_paired.pair_offset[0],M[11]=h.rvq_paired.pair_offset[1]):(E[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),o.queue.writeBuffer(l,0,x)}async function cs(o,l){re(`loading ply file from File... : ${o.name}`),_s("downloading PLY...");const h=await o.arrayBuffer();try{return await Ji(h,l)}finally{gn()}}async function zl(o,l){re(`loading ply file from URL... : ${o}`),_s("downloading PLY...");try{Xi();const h=new URL(o,self.location.href).href;return await Ji({url:h},l)}finally{gn()}}async function Ji(o,l){return new Promise((h,C)=>{const x=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});x.onmessage=E=>{var V,B,A,L,O,Z,U,X,K,j,ut,z;const M=E.data;if((M==null?void 0:M.type)==="error"){Tl(`PLY worker error: ${M.message??"unknown error"}`),x.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const N=M.totalBytes,G=M.loadedBytes/(1024*1024),lt=N?N/(1024*1024):void 0,W=(M.speedBps??0)/(1024*1024),Q=N?Math.min(99,Math.floor(M.loadedBytes/N*100)):void 0,Y=lt?`total ${lt.toFixed(1)} MB`:"total -- MB",et=lt&&Q!==void 0?`${G.toFixed(1)} MB downloaded (${Q}%)`:`${G.toFixed(1)} MB downloaded`,_t=`${W.toFixed(2)} MB/s`;Ne(`downloading PLY ...
${Y}, ${et}
${_t}`);return}else if((M==null?void 0:M.type)==="fetched"){re(`💾 Fetched (${M.byteLength} bytes)`),Gi("Download"),Ne("parsing PLY..."),Xi();return}else if((M==null?void 0:M.type)==="parse_progress"){const N=M.total??0,G=M.read??0,lt=N>0?Math.floor(G/N*100):0;Ne(`parsing PLY ...
${G}/${N} surfels (${lt}%)`);return}else if((M==null?void 0:M.type)==="done"){const N=M.num_points,G=M.K,lt=M.feature_mode??0,W=M.sh_bias,Q=M.kernel_type,Y=M.surfelBuffer,et=M.svParamsBuffer;re(`🪐 Total surfels: ${N}, mode=${lt===1?"SB":"SV"}, K=${G}, sh_bias=${W}, kernel_type=${Q}`);const Ut=l.createBuffer({label:"surfel input buffer",size:en(N*Ll),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ut,0,Y);const Rt=et.byteLength>0?et.byteLength:16,Dt=l.createBuffer({label:lt===1?"color_params buffer (SB)":"color_params buffer (SV)",size:en(Rt),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});et.byteLength>0&&l.queue.writeBuffer(Dt,0,et),x.terminate(),Gi("Parse"),h({num_points:N,K:G,feature_mode:lt,sh_bias:W,kernel_type:Q,surfel_buffer:Ut,surfel_data:new Float32Array(Y),sv_params_buffer:Dt,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((B=(V=M.bbox)==null?void 0:V.min)==null?void 0:B[0])??-1)+(((L=(A=M.bbox)==null?void 0:A.max)==null?void 0:L[0])??1))/2,((((Z=(O=M.bbox)==null?void 0:O.min)==null?void 0:Z[1])??-1)+(((X=(U=M.bbox)==null?void 0:U.max)==null?void 0:X[1])??1))/2,((((j=(K=M.bbox)==null?void 0:K.min)==null?void 0:j[2])??-1)+(((z=(ut=M.bbox)==null?void 0:ut.max)==null?void 0:z[2])??1))/2]})}},x.onerror=E=>{x.terminate(),C(E)},o instanceof ArrayBuffer?(Ne("parsing PLY..."),x.postMessage({type:"start",plyBuffer:o},[o])):x.postMessage({type:"start_url",url:o.url})})}var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},us={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(h,C){C(l)})(Ol,function(h){class C{constructor(t){const[e,s]=t.split("-"),c=e.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}class x{constructor(t){this.controller_=t}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(t){this.controller_.viewProps.set("disabled",t)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(t){this.controller_.viewProps.set("hidden",t)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class E{constructor(t){this.target=t}}class M extends E{constructor(t,e,s,c){super(t),this.value=e,this.presetKey=s,this.last=c??!0}}class V extends E{constructor(t,e,s){super(t),this.value=e,this.presetKey=s}}class B extends E{constructor(t,e){super(t),this.expanded=e}}class A extends E{constructor(t,e){super(t),this.index=e}}function L(n){return n}function O(n){return n==null}function Z(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function U(n,t){let e=n;do{const s=Object.getOwnPropertyDescriptor(e,t);if(s&&(s.set!==void 0||s.writable===!0))return!0;e=Object.getPrototypeOf(e)}while(e!==null);return!1}const X={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class K{static alreadyDisposed(){return new K({type:"alreadydisposed"})}static notBindable(){return new K({type:"notbindable"})}static propertyNotFound(t){return new K({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new K({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=X[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}}class j{constructor(t,e,s){this.obj_=t,this.key_=e,this.presetKey_=s??e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(t){this.obj_[this.key_]=t}writeProperty(t,e){const s=this.read();if(!j.isBindable(s))throw K.notBindable();if(!(t in s))throw K.propertyNotFound(t);s[t]=e}}class ut extends x{get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get title(){var t;return(t=this.controller_.valueController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.valueController.props.set("title",t)}on(t,e){const s=e.bind(this);return this.controller_.valueController.emitter.on(t,()=>{s(new E(this))}),this}}class z{constructor(){this.observers_={}}on(t,e){let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e}),this}off(t,e){const s=this.observers_[t];return s&&(this.observers_[t]=s.filter(c=>c.handler!==e)),this}emit(t,e){const s=this.observers_[t];s&&s.forEach(c=>{c.handler(e)})}}const N="tp";function G(n){return(e,s)=>[N,"-",n,"v",e?`_${e}`:"",s?`-${s}`:""].join("")}function lt(n,t){return e=>t(n(e))}function W(n){return n.rawValue}function Q(n,t){n.emitter.on("change",lt(W,t)),t(n.rawValue)}function Y(n,t,e){Q(n.value(t),e)}function et(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function _t(n,t){return e=>{et(n,t,e)}}function Ut(n,t){Q(n,e=>{t.textContent=e??""})}const Rt=G("btn");class Dt{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Rt()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("button");s.classList.add(Rt("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=t.createElement("div");c.classList.add(Rt("t")),Ut(e.props.value("title"),c),this.buttonElement.appendChild(c)}}class pt{constructor(t,e){this.emitter=new z,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Dt(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class kt{constructor(t,e){var s;this.constraint_=e==null?void 0:e.constraint,this.equals_=(s=e==null?void 0:e.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new z,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(t):t,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class wt{constructor(t){this.emitter=new z,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e??{forceEmit:!1,last:!0},c=this.value_;c===t&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function H(n,t){const e=t==null?void 0:t.constraint,s=t==null?void 0:t.equals;return!e&&!s?new wt(n):new kt(n,t)}class st{constructor(t){this.emitter=new z,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((s,c)=>Object.assign(s,{[c]:H(t[c])}),{})}static fromObject(t){const e=this.createCore(t);return new st(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}function It(n,t){const s=Object.keys(t).reduce((c,P)=>{if(c===void 0)return;const D=t[P],nt=D(n[P]);return nt.succeeded?Object.assign(Object.assign({},c),{[P]:nt.value}):void 0},{});return s}function Mt(n,t){return n.reduce((e,s)=>{if(e===void 0)return;const c=t(s);if(!(!c.succeeded||c.value===void 0))return[...e,c.value]},[])}function zt(n){return n===null?!1:typeof n=="object"}function Tt(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const s=n(e);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ot(n){return{custom:t=>Tt(t)(n),boolean:Tt(t=>typeof t=="boolean"?t:void 0)(n),number:Tt(t=>typeof t=="number"?t:void 0)(n),string:Tt(t=>typeof t=="string"?t:void 0)(n),function:Tt(t=>typeof t=="function"?t:void 0)(n),constant:t=>Tt(e=>e===t?t:void 0)(n),raw:Tt(t=>t)(n),object:t=>Tt(e=>{if(zt(e))return It(e,t)})(n),array:t=>Tt(e=>{if(Array.isArray(e))return Mt(e,t)})(n)}}const xt={optional:Ot(!0),required:Ot(!1)};function ht(n,t){const e=xt.required.object(t)(n);return e.succeeded?e.value:void 0}function Wt(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function T(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class ${constructor(t){this.value_=t}static create(t){return[new $(t),(e,s)=>{t.setRawValue(e,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=G("");function r(n,t){return _t(n,g(void 0,t))}class f extends st{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=$.create(H(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,s,c;const P=t??{};return new f(st.createCore({disabled:(e=P.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Q(this.globalDisabled_,r(t,"disabled")),Y(this,"hidden",r(t,"hidden"))}bindDisabled(t){Q(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Q(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const s=t.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=G(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class S{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{e.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{e.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{T(e)})}get parent(){return this.parent_}set parent(t){if(this.parent_=t,!("parent"in this.viewProps.valMap_)){Wt({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function m(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const w={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,t){const e=n.createElementNS(k,"svg");return e.innerHTML=w[t],e}function R(n,t,e){n.insertBefore(t,n.children[e])}function F(n){n.parentElement&&n.parentElement.removeChild(n)}function q(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ct(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function rt(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const it=G("lbl");function ft(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&e.appendChild(n.createElement("br")),e.appendChild(c)}),e}class yt{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(it()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(it("l")),Y(e.props,"label",P=>{O(P)?this.element.classList.add(it(void 0,"nol")):(this.element.classList.remove(it(void 0,"nol")),ct(s),s.appendChild(ft(t,P)))}),this.element.appendChild(s),this.labelElement=s;const c=t.createElement("div");c.classList.add(it("v")),this.element.appendChild(c),this.valueElement=c}}class dt extends S{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{view:new yt(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const bt={id:"button",type:"blade",accept(n){const t=xt,e=ht(n,{title:t.required.string,view:t.required.constant("button"),label:t.optional.string});return e?{params:e}:null},controller(n){return new dt(n.document,{blade:n.blade,props:st.fromObject({label:n.params.label}),valueController:new pt(n.document,{props:st.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof dt)||!(n.controller.valueController instanceof pt)?null:new ut(n.controller)}};class Ct extends S{constructor(t){super(t),this.value=t.value}}function At(){return new st({positions:H([],{equals:Z})})}class J extends st{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=st.createCore(e);return new J(s)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!O(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const s=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};Y(this,"expanded",s),Y(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function at(n,t){let e=0;return m(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(t),e=t.clientHeight,n.set("temporaryExpanded",null),i(t)}),e}function ot(n,t){t.style.height=n.styleHeight}function gt(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),O(n.get("expandedHeight"))){const e=at(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),i(t)}),n.emitter.on("change",()=>{ot(n,t)}),ot(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class Pt extends x{constructor(t,e){super(t),this.rackApi_=e}}function Et(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function mt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function vt(n,t){const e=t??{};return n.addBlade(Object.assign(Object.assign({},e),{view:"separator"}))}function Gt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}class Vt{constructor(t){this.emitter=new z,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw K.shouldNeverHappen();const s=e!==void 0?e:this.items_.length;this.items_.splice(s,0,t),this.cache_.add(t);const c=this.extract_(t);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const s=this.extract_(t);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}class qt extends x{constructor(t){super(t),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new z,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(t){const e=t.sender.target.read();this.emitter_.emit("change",{event:new M(this,e,this.controller_.binding.target.presetKey,t.options.last)})}}class Kt extends dt{constructor(t,e){super(t,e),this.binding=e.binding}}class Xt extends x{constructor(t){super(t),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new z,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(t){const e=t.sender.target.read();this.emitter_.emit("update",{event:new V(this,e,this.controller_.binding.target.presetKey)})}}class Ht extends dt{constructor(t,e){super(t,e),this.binding=e.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ee(n){return n instanceof fe?n.apiSet_:n instanceof Pt?n.rackApi_.apiSet_:null}function Qt(n,t){const e=n.find(s=>s.controller_===t);if(!e)throw K.shouldNeverHappen();return e}function be(n,t,e){if(!j.isBindable(n))throw K.notBindable();return new j(n,t,e)}class fe extends x{constructor(t,e){super(t),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new z,this.apiSet_=new Vt(ee),this.pool_=e;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(t=>Qt(this.apiSet_,t))}addInput(t,e,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(P,be(t,e,c.presetKey),c),nt=new qt(D);return this.add(nt,c.index)}addMonitor(t,e,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(P,be(t,e),c),nt=new Xt(D);return this.add(nt,c.index)}addFolder(t){return mt(this,t)}addButton(t){return Et(this,t)}addSeparator(t){return vt(this,t)}addTab(t){return Gt(this,t)}add(t,e){this.controller_.rack.add(t.controller_,e);const s=this.apiSet_.find(c=>c.controller_===t.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(t),t}remove(t){this.controller_.rack.remove(t.controller_)}addBlade(t){const e=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(e,t),c=this.pool_.createBladeApi(s);return this.add(c,t.index)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}setUpApi_(t){this.apiSet_.find(s=>s.controller_===t)||this.apiSet_.add(this.pool_.createBladeApi(t))}onRackAdd_(t){this.setUpApi_(t.bladeController)}onRackRemove_(t){if(t.isRoot){const e=Qt(this.apiSet_,t.bladeController);this.apiSet_.remove(e)}}onRackInputChange_(t){const e=t.bladeController;if(e instanceof Kt){const s=Qt(this.apiSet_,e),c=e.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,t.options.last)})}else if(e instanceof Ct){const s=Qt(this.apiSet_,e);this.emitter_.emit("change",{event:new M(s,e.value.rawValue,void 0,t.options.last)})}}onRackMonitorUpdate_(t){if(!(t.bladeController instanceof Ht))throw K.shouldNeverHappen();const e=Qt(this.apiSet_,t.bladeController),s=t.bladeController.binding;this.emitter_.emit("update",{event:new V(e,s.target.read(),s.target.presetKey)})}}class _e extends Pt{constructor(t,e){super(t,new fe(t.rackController,e)),this.emitter_=new z,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new B(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(t){this.controller_.foldable.set("expanded",t)}get title(){return this.controller_.props.get("title")}set title(t){this.controller_.props.set("title",t)}get children(){return this.rackApi_.children}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}class me extends S{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}}class ve{constructor(t,e){const s=G(e.viewName);this.element=t.createElement("div"),this.element.classList.add(s()),e.viewProps.bindClassModifiers(this.element)}}function Jt(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Kt&&s.binding===t)return s}return null}function ue(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Ht&&s.binding===t)return s}return null}function ge(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Ct&&s.value===t)return s}return null}function oe(n){return n instanceof Yt?n.rack:n instanceof me?n.rackController.rack:null}function we(n){const t=oe(n);return t?t.bcSet_:null}class xe{constructor(t){var e,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new z,this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Vt(we),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var s;(s=t.parent)===null||s===void 0||s.remove(t),U(t,"parent")?t.parent=this:(t.parent_=this,Wt({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(t,e)}remove(t){U(t,"parent")?t.parent=null:(t.parent_=null,Wt({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(e=>e instanceof t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,isRoot:e,sender:this}),!e)return;const s=t.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Kt)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ht)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ct)s.value.emitter.on("change",this.onChildValueChange_);else{const c=oe(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,isRoot:e,sender:this}),!e)return;const s=t.item;if(s instanceof Kt)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ht)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ct)s.value.emitter.off("change",this.onChildValueChange_);else{const c=oe(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const t=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),e=t[0],s=t[t.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===e&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildInputChange_(t){const e=Jt(this.find(Kt),t.sender);if(!e)throw K.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onChildMonitorUpdate_(t){const e=ue(this.find(Ht),t.sender);if(!e)throw K.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:e,sender:this})}onChildValueChange_(t){const e=ge(this.find(Ct),t.sender);if(!e)throw K.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onDescendantLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(t){this.emitter.emit("inputchange",{bladeController:t.bladeController,options:t.options,sender:this})}onDescendantMonitorUpdate_(t){this.emitter.emit("monitorupdate",{bladeController:t.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Yt extends S{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new ve(t,{viewName:"brk",viewProps:e.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new xe({blade:e.root?void 0:e.blade,viewProps:e.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(t){t.isRoot&&R(this.view.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.isRoot&&F(t.bladeController.view.element)}}const je=G("cnt");class cr{constructor(t,e){var s;this.className_=G((s=e.viewName)!==null&&s!==void 0?s:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),je()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),Y(this.foldable_,"completed",_t(this.element,this.className_(void 0,"cpl")));const c=t.createElement("button");c.classList.add(this.className_("b")),Y(e.props,"title",Bt=>{O(Bt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=t.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const D=t.createElement("div");D.classList.add(this.className_("t")),Ut(e.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const nt=t.createElement("div");nt.classList.add(this.className_("m")),this.buttonElement.appendChild(nt);const St=e.containerElement;St.classList.add(this.className_("c")),this.element.appendChild(St),this.containerElement=St}}class Un extends me{constructor(t,e){var s;const c=J.create((s=e.expanded)!==null&&s!==void 0?s:!0),P=new Yt(t,{blade:e.blade,root:e.root,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:P,view:new cr(t,{containerElement:P.view.element,foldable:c,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=c,gt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ur={id:"folder",type:"blade",accept(n){const t=xt,e=ht(n,{title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean});return e?{params:e}:null},controller(n){return new Un(n.document,{blade:n.blade,expanded:n.params.expanded,props:st.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Un?new _e(n.controller,n.pool):null}};class Ke extends Ct{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{value:e.valueController.value,view:new yt(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class bs extends x{}const vs=G("spr");class dr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(vs()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("hr");s.classList.add(vs("r")),this.element.appendChild(s)}}class gs extends S{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new dr(t,{viewProps:e.viewProps})}))}}const pr={id:"separator",type:"blade",accept(n){const e=ht(n,{view:xt.required.constant("separator")});return e?{params:e}:null},controller(n){return new gs(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof gs?new bs(n.controller):null}},nn=G("tbi");class hr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(nn()),e.viewProps.bindClassModifiers(this.element),Y(e.props,"selected",P=>{P?this.element.classList.add(nn(void 0,"sel")):this.element.classList.remove(nn(void 0,"sel"))});const s=t.createElement("button");s.classList.add(nn("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=t.createElement("div");c.classList.add(nn("t")),Ut(e.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class fr{constructor(t,e){this.emitter=new z,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new hr(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ws{constructor(t,e){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new fr(t,{props:e.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Yt(t,{blade:At(),viewProps:f.create()}),this.props=e.props,Y(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class xs{constructor(t,e){this.controller_=t,this.rackApi_=e}get title(){var t;return(t=this.controller_.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.itemController.props.set("title",t)}get selected(){return this.controller_.props.get("selected")}set selected(t){this.controller_.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addBlade(t){return this.rackApi_.addBlade(t)}}class ys extends Pt{constructor(t,e){super(t,new fe(t.rackController,e)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new z,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(t=>{const e=this.pageApiMap_.get(t);if(!e)throw K.shouldNeverHappen();return e})}addPage(t){const e=this.controller_.view.element.ownerDocument,s=new ws(e,{itemProps:st.fromObject({selected:!1,title:t.title}),props:st.fromObject({selected:!1})});this.controller_.add(s,t.index);const c=this.pageApiMap_.get(s);if(!c)throw K.shouldNeverHappen();return c}removePage(t){this.controller_.remove(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}setUpPageApi_(t){const e=this.rackApi_.apiSet_.find(c=>c.controller_===t.contentController);if(!e)throw K.shouldNeverHappen();const s=new xs(t,e);this.pageApiMap_.set(t,s)}onPageAdd_(t){this.setUpPageApi_(t.item)}onPageRemove_(t){if(!this.pageApiMap_.get(t.item))throw K.shouldNeverHappen();this.pageApiMap_.delete(t.item)}onSelect_(t){this.emitter_.emit("select",{event:new A(this,t.rawValue)})}}const Ps=-1;class _r{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=H(!0),this.selectedIndex=H(Ps),this.items_=[]}add(t,e){const s=e??this.items_.length;this.items_.splice(s,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ps,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,s)=>{e.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,s)=>{e.rawValue=s===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(s=>s===t.sender);this.items_.forEach((s,c)=>{s.rawValue=c===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const sn=G("tab");class mr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(sn(),je()),e.viewProps.bindClassModifiers(this.element),Q(e.empty,_t(this.element,sn(void 0,"nop")));const s=t.createElement("div");s.classList.add(sn("t")),this.element.appendChild(s),this.itemsElement=s;const c=t.createElement("div");c.classList.add(sn("i")),this.element.appendChild(c);const P=e.contentsElement;P.classList.add(sn("c")),this.element.appendChild(P),this.contentsElement=P}}class Ss extends me{constructor(t,e){const s=new Yt(t,{blade:e.blade,viewProps:e.viewProps}),c=new _r;super({blade:e.blade,rackController:s,view:new mr(t,{contentsElement:s.view.element,empty:c.empty,viewProps:e.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Vt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(t,e){this.pageSet_.add(t,e)}remove(t){this.pageSet_.remove(this.pageSet_.items[t])}onPageAdd_(t){const e=t.item;R(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(e.contentController,t.index),this.tab.add(e.props.value("selected"))}onPageRemove_(t){const e=t.item;F(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.rackController.rack.remove(e.contentController),this.tab.remove(e.props.value("selected"))}}const ks={id:"tab",type:"blade",accept(n){const t=xt,e=ht(n,{pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")});return!e||e.pages.length===0?null:{params:e}},controller(n){const t=new Ss(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const s=new ws(n.document,{itemProps:st.fromObject({selected:!1,title:e.title}),props:st.fromObject({selected:!1})});t.add(s)}),t},api(n){return n.controller instanceof Ss?new ys(n.controller,n.pool):null}};function br(n,t){const e=n.accept(t.params);if(!e)return null;const s=xt.optional.boolean(t.params.disabled).value,c=xt.optional.boolean(t.params.hidden).value;return n.controller({blade:At(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class vr{constructor(){this.disabled=!1,this.emitter=new z}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class gr{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new z,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class wr{constructor(t){this.onValueChange_=this.onValueChange_.bind(this),this.reader=t.reader,this.writer=t.writer,this.emitter=new z,this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.target=t.target,this.read()}read(){const t=this.target.read();t!==void 0&&(this.value.rawValue=this.reader(t))}write_(t){this.writer(this.target,t)}onValueChange_(t){this.write_(t.rawValue),this.emitter.emit("change",{options:t.options,rawValue:t.rawValue,sender:this})}}function Cs(n,t){for(;n.length<t;)n.push(void 0)}function xr(n){const t=[];return Cs(t,n),H(t)}function yr(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function Pr(n,t){const e=[...yr(n),t];return e.length>n.length?e.splice(0,e.length-n.length):Cs(e,n.length),e}class Sr{constructor(t){this.onTick_=this.onTick_.bind(this),this.reader_=t.reader,this.target=t.target,this.emitter=new z,this.value=t.value,this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const t=this.target.read();if(t===void 0)return;const e=this.value.rawValue,s=this.reader_(t);this.value.rawValue=Pr(e,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(t){this.read()}}class rn{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,s)=>s.constrain(e),t)}}function ye(n,t){if(n instanceof t)return n;if(n instanceof rn){const e=n.constraints.reduce((s,c)=>s||(c instanceof t?c:null),null);if(e)return e}return null}class He{constructor(t){this.values=st.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(t,s),e)}}class on{constructor(t){this.values=st.fromObject({options:t})}get options(){return this.values.get("options")}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(c=>c.value===t).length>0?t:e[0].value}}class Es{constructor(t){this.values=st.fromObject({max:t.max,min:t.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(t){const e=this.values.get("max"),s=this.values.get("min");let c=t;return O(s)||(c=Math.max(c,s)),O(e)||(c=Math.min(c,e)),c}}class yn{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,s=Math.round((t-e)/this.step);return e+s*this.step}}const Gn=G("lst");class kr{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Gn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("select");s.classList.add(Gn("s")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=t.createElement("div");c.classList.add(Gn("m")),c.appendChild(v(t,"dropdown")),this.element.appendChild(c),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,Y(this.props_,"options",P=>{q(this.selectElement),P.forEach(D=>{const nt=t.createElement("option");nt.textContent=D.text,this.selectElement.appendChild(nt)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class an{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new kr(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}}const Ms=G("pop");class Cr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ms()),e.viewProps.bindClassModifiers(this.element),Q(e.shows,_t(this.element,Ms(void 0,"v")))}}class Bs{constructor(t,e){this.shows=H(!1),this.viewProps=e.viewProps,this.view=new Cr(t,{shows:this.shows,viewProps:this.viewProps})}}const Ts=G("txt");class Er{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ts()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const s=t.createElement("input");s.classList.add(Ts("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Pn{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Er(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const s=t.currentTarget.value,c=this.parser_(s);O(c)||(this.value.rawValue=c),this.view.refresh()}}function Mr(n){return String(n)}function Ds(n){return n==="false"?!1:!!n}function As(n){return Mr(n)}class Br{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Tr={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Dr{constructor(t,e,s){this.left=e,this.operator=t,this.right=s}evaluate(){const t=Tr[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ar={"+":n=>n,"-":n=>-n,"~":n=>~n};class Rr{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Ar[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function zn(n){return(t,e)=>{for(let s=0;s<n.length;s++){const c=n[s](t,e);if(c!=="")return c}return""}}function ln(n,t){var e;const s=n.substr(t).match(/^\s+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Ir(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function cn(n,t){var e;const s=n.substr(t).match(/^[0-9]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Lr(n,t){const e=cn(n,t);if(e!=="")return e;const s=n.substr(t,1);if(t+=1,s!=="-"&&s!=="+")return"";const c=cn(n,t);return c===""?"":s+c}function On(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const s=Lr(n,t);return s===""?"":e+s}function Rs(n,t){const e=n.substr(t,1);if(e==="0")return e;const s=Ir(n,t);return t+=s.length,s===""?"":s+cn(n,t)}function Vr(n,t){const e=Rs(n,t);if(t+=e.length,e==="")return"";const s=n.substr(t,1);if(t+=s.length,s!==".")return"";const c=cn(n,t);return t+=c.length,e+s+c+On(n,t)}function Ur(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const s=cn(n,t);return t+=s.length,s===""?"":e+s+On(n,t)}function Gr(n,t){const e=Rs(n,t);return t+=e.length,e===""?"":e+On(n,t)}const zr=zn([Vr,Ur,Gr]);function Or(n,t){var e;const s=n.substr(t).match(/^[01]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Fr(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const s=Or(n,t);return s===""?"":e+s}function qr(n,t){var e;const s=n.substr(t).match(/^[0-7]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Nr(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const s=qr(n,t);return s===""?"":e+s}function $r(n,t){var e;const s=n.substr(t).match(/^[0-9a-f]+/i);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Wr(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const s=$r(n,t);return s===""?"":e+s}const jr=zn([Fr,Nr,Wr]),Kr=zn([jr,zr]);function Hr(n,t){const e=Kr(n,t);return t+=e.length,e===""?null:{evaluable:new Br(e),cursor:t}}function Yr(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const s=Ls(n,t);if(!s)return null;t=s.cursor,t+=ln(n,t).length;const c=n.substr(t,1);return t+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:t}}function Zr(n,t){var e;return(e=Hr(n,t))!==null&&e!==void 0?e:Yr(n,t)}function Is(n,t){const e=Zr(n,t);if(e)return e;const s=n.substr(t,1);if(t+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Is(n,t);return c?(t=c.cursor,{cursor:t,evaluable:new Rr(s,c.evaluable)}):null}function Xr(n,t,e){e+=ln(t,e).length;const s=n.filter(c=>t.startsWith(c,e))[0];return s?(e+=s.length,e+=ln(t,e).length,{cursor:e,operator:s}):null}function Qr(n,t){return(e,s)=>{const c=n(e,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const D=Xr(t,e,s);if(!D)break;s=D.cursor;const nt=n(e,s);if(!nt)return null;s=nt.cursor,P=new Dr(D.operator,P,nt.evaluable)}return P?{cursor:s,evaluable:P}:null}}const Jr=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Qr(n,t),Is);function Ls(n,t){return t+=ln(n,t).length,Jr(n,t)}function to(n){const t=Ls(n,0);return!t||t.cursor+ln(n,t.cursor).length!==n.length?null:t.evaluable}function Pe(n){var t;const e=to(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Vs(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=Pe(n);if(!O(t))return t}return 0}function eo(n){return String(n)}function ne(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}const no=ne(0);function Sn(n){return no(n)+"%"}function Us(n){return String(n)}function Fn(n){return n}function un({primary:n,secondary:t,forward:e,backward:s}){let c=!1;function P(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{P(()=>{t.setRawValue(e(n,t),D.options)})}),t.emitter.on("change",D=>{P(()=>{n.setRawValue(s(n,t),D.options)}),P(()=>{t.setRawValue(e(n,t),D.options)})}),P(()=>{t.setRawValue(e(n,t),{forceEmit:!1,last:!0})})}function ae(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function dn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Se(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function so(n){return n==="ArrowUp"||n==="ArrowDown"}function Gs(n){return so(n)||n==="ArrowLeft"||n==="ArrowRight"}function qn(n,t){var e,s;const c=t.ownerDocument.defaultView,P=t.getBoundingClientRect();return{x:n.pageX-(((e=c&&c.scrollX)!==null&&e!==void 0?e:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Ie{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new z,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(qn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(qn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(qn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const s=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:t.shiftKey})}}function Zt(n,t,e,s,c){const P=(n-t)/(e-t);return s+P*(c-s)}function zs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function te(n,t,e){return Math.min(Math.max(n,t),e)}function Os(n,t){return(n%t+t)%t}const de=G("txt");class io{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(de(),de(void 0,"num")),e.arrayPosition&&this.element.classList.add(de(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(de("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(de()),this.inputElement.classList.add(de("i"));const c=t.createElement("div");c.classList.add(de("k")),this.element.appendChild(c),this.knobElement=c;const P=t.createElementNS(k,"svg");P.classList.add(de("g")),this.knobElement.appendChild(P);const D=t.createElementNS(k,"path");D.classList.add(de("gb")),P.appendChild(D),this.guideBodyElem_=D;const nt=t.createElementNS(k,"path");nt.classList.add(de("gh")),P.appendChild(nt),this.guideHeadElem_=nt;const St=t.createElement("div");St.classList.add(G("tt")()),this.knobElement.appendChild(St),this.tooltipElem_=St,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(de(void 0,"drg"));return}this.element.classList.add(de(void 0,"drg"));const e=t.rawValue/this.props_.get("draggingScale"),s=e+(e>0?-1:e<0?1:0),c=te(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class pn{constructor(t,e){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.parser_=e.parser,this.props=e.props,this.sliderProps_=(s=e.sliderProps)!==null&&s!==void 0?s:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=H(null),this.view=new io(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Ie(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,s;const c=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=t;return c!==void 0&&(D=Math.max(D,c)),P!==void 0&&(D=Math.min(D,P)),D}onInputChange_(t){const s=t.currentTarget.value,c=this.parser_(s);O(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(t){const e=ae(this.baseStep_,dn(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){ae(this.baseStep_,dn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("draggingScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Nn=G("sld");class ro{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Nn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Nn("t")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=t.createElement("div");c.classList.add(Nn("k")),this.trackElement.appendChild(c),this.knobElement=c,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=te(Zt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class oo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new ro(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ie(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Zt(te(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=ae(this.baseStep_,Se(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){ae(this.baseStep_,Se(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $n=G("sldtxt");class ao{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add($n());const s=t.createElement("div");s.classList.add($n("s")),this.sliderView_=e.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=t.createElement("div");c.classList.add($n("t")),this.textView_=e.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Wn{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new oo(t,{baseStep:e.baseStep,props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new pn(t,{baseStep:e.baseStep,parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new ao(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function hn(n,t){n.write(t)}function kn(n){const t=xt;if(Array.isArray(n))return t.required.array(t.required.object({text:t.required.string,value:t.required.raw}))(n).value;if(typeof n=="object")return t.required.raw(n).value}function Fs(n){if(n==="inline"||n==="popup")return n}function Ee(n){const t=xt;return t.required.object({max:t.optional.number,min:t.optional.number,step:t.optional.number})(n).value}function qs(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function jn(n){return O(n)?null:new on(qs(n))}function lo(n){const t=n?ye(n,yn):null;return t?t.step:null}function Cn(n,t){const e=n&&ye(n,yn);return e?zs(e.step):Math.max(zs(t),2)}function Ye(n){const t=lo(n);return t??1}function Ze(n,t){var e;const s=n&&ye(n,yn),c=Math.abs((e=s==null?void 0:s.step)!==null&&e!==void 0?e:t);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const En=G("ckb");class co{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(En()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("label");s.classList.add(En("l")),this.element.appendChild(s);const c=t.createElement("input");c.classList.add(En("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,e.viewProps.bindDisabled(this.inputElement);const P=t.createElement("div");P.classList.add(En("w")),s.appendChild(P);const D=v(t,"check");P.appendChild(D),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class uo{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new co(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked}}function po(n){const t=[],e=jn(n.options);return e&&t.push(e),new rn(t)}const ho={id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=ht(t,{options:xt.optional.custom(kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ds,constraint:n=>po(n.params),writer:n=>hn},controller:n=>{const t=n.document,e=n.value,s=n.constraint,c=s&&ye(s,on);return c?new an(t,{props:new st({options:c.values.value("options")}),value:e,viewProps:n.viewProps}):new uo(t,{value:e,viewProps:n.viewProps})}},Le=G("col");class fo{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Le()),e.foldable.bindExpandedClass(this.element,Le(void 0,"expanded")),Y(e.foldable,"completed",_t(this.element,Le(void 0,"cpl")));const s=t.createElement("div");s.classList.add(Le("h")),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(Le("s")),s.appendChild(c),this.swatchElement=c;const P=t.createElement("div");if(P.classList.add(Le("t")),s.appendChild(P),this.textElement=P,e.pickerLayout==="inline"){const D=t.createElement("div");D.classList.add(Le("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function _o(n,t,e){const s=te(n/255,0,1),c=te(t/255,0,1),P=te(e/255,0,1),D=Math.max(s,c,P),nt=Math.min(s,c,P),St=D-nt;let Bt=0,Nt=0;const $t=(nt+D)/2;return St!==0&&(Nt=St/(1-Math.abs(D+nt-1)),s===D?Bt=(c-P)/St:c===D?Bt=2+(P-s)/St:Bt=4+(s-c)/St,Bt=Bt/6+(Bt<0?1:0)),[Bt*360,Nt*100,$t*100]}function mo(n,t,e){const s=(n%360+360)%360,c=te(t/100,0,1),P=te(e/100,0,1),D=(1-Math.abs(2*P-1))*c,nt=D*(1-Math.abs(s/60%2-1)),St=P-D/2;let Bt,Nt,$t;return s>=0&&s<60?[Bt,Nt,$t]=[D,nt,0]:s>=60&&s<120?[Bt,Nt,$t]=[nt,D,0]:s>=120&&s<180?[Bt,Nt,$t]=[0,D,nt]:s>=180&&s<240?[Bt,Nt,$t]=[0,nt,D]:s>=240&&s<300?[Bt,Nt,$t]=[nt,0,D]:[Bt,Nt,$t]=[D,0,nt],[(Bt+St)*255,(Nt+St)*255,($t+St)*255]}function bo(n,t,e){const s=te(n/255,0,1),c=te(t/255,0,1),P=te(e/255,0,1),D=Math.max(s,c,P),nt=Math.min(s,c,P),St=D-nt;let Bt;St===0?Bt=0:D===s?Bt=60*(((c-P)/St%6+6)%6):D===c?Bt=60*((P-s)/St+2):Bt=60*((s-c)/St+4);const Nt=D===0?0:St/D,$t=D;return[Bt,Nt*100,$t*100]}function Ns(n,t,e){const s=Os(n,360),c=te(t/100,0,1),P=te(e/100,0,1),D=P*c,nt=D*(1-Math.abs(s/60%2-1)),St=P-D;let Bt,Nt,$t;return s>=0&&s<60?[Bt,Nt,$t]=[D,nt,0]:s>=60&&s<120?[Bt,Nt,$t]=[nt,D,0]:s>=120&&s<180?[Bt,Nt,$t]=[0,D,nt]:s>=180&&s<240?[Bt,Nt,$t]=[0,nt,D]:s>=240&&s<300?[Bt,Nt,$t]=[nt,0,D]:[Bt,Nt,$t]=[D,0,nt],[(Bt+St)*255,(Nt+St)*255,($t+St)*255]}function vo(n,t,e){const s=e+t*(100-Math.abs(2*e-100))/200;return[n,s!==0?t*(100-Math.abs(2*e-100))/s:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function go(n,t,e){const s=100-Math.abs(e*(200-t)/100-100);return[n,s!==0?t*e/s:0,e*(200-t)/(2*100)]}function Ve(n){return[n[0],n[1],n[2]]}function $s(n,t){return[n[0],n[1],n[2],t]}const wo={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:vo,rgb:mo},hsv:{hsl:go,hsv:(n,t,e)=>[n,t,e],rgb:Ns},rgb:{hsl:_o,hsv:bo,rgb:(n,t,e)=>[n,t,e]}};function Mn(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function xo(n,t){return n===t?t:Os(n,t)}function yo(n,t,e){var s;const c=Mn(t,e);return[t==="rgb"?te(n[0],0,c[0]):xo(n[0],c[0]),te(n[1],0,c[1]),te(n[2],0,c[2]),te((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Ws(n,t,e,s){const c=Mn(t,e),P=Mn(t,s);return n.map((D,nt)=>D/c[nt]*P[nt])}function Po(n,t,e){const s=Ws(n,t.mode,t.type,"int"),c=wo[t.mode][e.mode](...s);return Ws(c,e.mode,"int",e.type)}function Bn(n,t){return typeof n!="object"||O(n)?!1:t in n&&typeof n[t]=="number"}class Ft{static black(t="int"){return new Ft([0,0,0],"rgb",t)}static fromObject(t,e="int"){const s="a"in t?[t.r,t.g,t.b,t.a]:[t.r,t.g,t.b];return new Ft(s,"rgb",e)}static toRgbaObject(t,e="int"){return t.toRgbaObject(e)}static isRgbColorObject(t){return Bn(t,"r")&&Bn(t,"g")&&Bn(t,"b")}static isRgbaColorObject(t){return this.isRgbColorObject(t)&&Bn(t,"a")}static isColorObject(t){return this.isRgbColorObject(t)}static equals(t,e){if(t.mode!==e.mode)return!1;const s=t.comps_,c=e.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(t,e,s="int"){this.mode=e,this.type=s,this.comps_=yo(t,e,s)}getComponents(t,e="int"){return $s(Po(Ve(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:e}),this.comps_[3])}toRgbaObject(t="int"){const e=this.getComponents("rgb",t);return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Me=G("colp");class So{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Me()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Me("hsv"));const c=t.createElement("div");c.classList.add(Me("sv")),this.svPaletteView_=e.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=t.createElement("div");P.classList.add(Me("h")),this.hPaletteView_=e.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const D=t.createElement("div");if(D.classList.add(Me("rgb")),this.textView_=e.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const nt=t.createElement("div");nt.classList.add(Me("a"));const St=t.createElement("div");St.classList.add(Me("ap")),St.appendChild(this.alphaViews_.palette.element),nt.appendChild(St);const Bt=t.createElement("div");Bt.classList.add(Me("at")),Bt.appendChild(this.alphaViews_.text.element),nt.appendChild(Bt),this.element.appendChild(nt)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function ko(n){return n==="int"?"int":n==="float"?"float":void 0}function Kn(n){const t=xt;return ht(n,{alpha:t.optional.boolean,color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(ko)}),expanded:t.optional.boolean,picker:t.optional.custom(Fs)})}function Ue(n){return n?.1:1}function Ge(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}function Co(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function pe(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const Eo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function js(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),s=t[2];return Eo[s](e)}function Ks(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[pe(t[1],255),pe(t[2],255),pe(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Hs(n){return t=>{const e=Ks(t);return e?new Ft(e,"rgb",n):null}}function Ys(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[pe(t[1],255),pe(t[2],255),pe(t[3],255),pe(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Zs(n){return t=>{const e=Ys(t);return e?new Ft(e,"rgb",n):null}}function Xs(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[js(t[1]),pe(t[2],100),pe(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Qs(n){return t=>{const e=Xs(t);return e?new Ft(e,"hsl",n):null}}function Js(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[js(t[1]),pe(t[2],100),pe(t[3],100),pe(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function ti(n){return t=>{const e=Js(t);return e?new Ft(e,"hsl",n):null}}function ei(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function Mo(n){const t=ei(n);return t?new Ft(t,"rgb","int"):null}function ni(n){const t=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Zt(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Zt(parseInt(e[4],16),0,255,0,1)]:null}function Bo(n){const t=ni(n);return t?new Ft(t,"rgb","int"):null}function si(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function ii(n){return t=>{const e=si(t);return e?new Ft(e,"rgb",n):null}}function ri(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function oi(n){return t=>{const e=ri(t);return e?new Ft(e,"rgb",n):null}}const To=[{parser:ei,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ni,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ks,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ys,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Xs,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Js,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:si,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ri,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Do(n){return To.reduce((t,{parser:e,result:s})=>t||(e(n)?s:null),null)}function Hn(n,t="int"){const e=Do(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}const ai={int:[Mo,Bo,Hs("int"),Zs("int"),Qs("int"),ti("int"),ii("int"),oi("int")],float:[Hs("float"),Zs("float"),Qs("float"),ti("float"),ii("float"),oi("float")]};function Ao(n){const t=ai[n];return e=>{if(typeof e!="string")return Ft.black(n);const s=t.reduce((c,P)=>c||P(e),null);return s??Ft.black(n)}}function Yn(n){const t=ai[n];return e=>t.reduce((s,c)=>s||c(e),null)}function li(n){const t=te(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function ci(n,t="#"){const e=Ve(n.getComponents("rgb")).map(li).join("");return`${t}${e}`}function Zn(n,t="#"){const e=n.getComponents("rgb"),s=[e[0],e[1],e[2],e[3]*255].map(li).join("");return`${t}${s}`}function ui(n,t){const e=ne(t==="float"?2:0);return`rgb(${Ve(n.getComponents("rgb",t)).map(c=>e(c)).join(", ")})`}function Ro(n){return t=>ui(t,n)}function Tn(n,t){const e=ne(2),s=ne(t==="float"?2:0);return`rgba(${n.getComponents("rgb",t).map((P,D)=>(D===3?e:s)(P)).join(", ")})`}function Io(n){return t=>Tn(t,n)}function Lo(n){const t=[ne(0),Sn,Sn];return`hsl(${Ve(n.getComponents("hsl")).map((s,c)=>t[c](s)).join(", ")})`}function Vo(n){const t=[ne(0),Sn,Sn,ne(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>t[c](s)).join(", ")})`}function di(n,t){const e=ne(t==="float"?2:0),s=["r","g","b"];return`{${Ve(n.getComponents("rgb",t)).map((P,D)=>`${s[D]}: ${e(P)}`).join(", ")}}`}function Uo(n){return t=>di(t,n)}function pi(n,t){const e=ne(2),s=ne(t==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",t).map((D,nt)=>{const St=nt===3?e:s;return`${c[nt]}: ${St(D)}`}).join(", ")}}`}function Go(n){return t=>pi(t,n)}const zo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ci},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Zn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Lo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:t},stringifier:Ro(t)},{format:{alpha:!0,mode:"rgb",notation:"func",type:t},stringifier:Io(t)},{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Uo(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Go(t)}],[])];function Xn(n){return zo.reduce((t,e)=>t||(Co(e.format,n)?e.stringifier:null),null)}const fn=G("apl");class Oo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(fn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(fn("b")),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(fn("c")),s.appendChild(c),this.colorElem_=c;const P=t.createElement("div");P.classList.add(fn("m")),this.element.appendChild(P),this.markerElem_=P;const D=t.createElement("div");D.classList.add(fn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),s=new Ft([e[0],e[1],e[2],0],"rgb"),c=new Ft([e[0],e[1],e[2],255],"rgb"),P=["to right",Tn(s),Tn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Tn(t);const D=Zt(e[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Fo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Oo(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ie(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=t.point.x/t.bounds.width,c=this.value.rawValue,[P,D,nt]=c.getComponents("hsv");this.value.setRawValue(new Ft([P,D,nt,s],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=ae(Ue(!0),Se(t));if(e===0)return;const s=this.value.rawValue,[c,P,D,nt]=s.getComponents("hsv");this.value.setRawValue(new Ft([c,P,D,nt+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){ae(Ue(!0),Se(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Xe=G("coltxt");function qo(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return t.appendChild(e.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),t}class No{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xe()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Xe("m")),this.modeElem_=qo(t),this.modeElem_.classList.add(Xe("ms")),s.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const c=t.createElement("div");c.classList.add(Xe("mm")),c.appendChild(v(t,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=t.createElement("div");P.classList.add(Xe("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=e.textViews,this.applyTextViews_(),Q(e.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(t){this.textViews_=t,this.applyTextViews_()}applyTextViews_(){q(this.textsElem_);const t=this.element.ownerDocument;this.textViews_.forEach(e=>{const s=t.createElement("div");s.classList.add(Xe("c")),s.appendChild(e.element),this.textsElem_.appendChild(s)})}}function $o(n){return ne(n==="float"?2:0)}function Wo(n,t,e){const s=Mn(n,t)[e];return new He({min:0,max:s})}function Qn(n,t,e){return new pn(n,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",baseStep:Ue(!1),parser:t.parser,props:st.fromObject({draggingScale:t.colorType==="float"?.01:1,formatter:$o(t.colorType)}),value:H(0,{constraint:Wo(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}class jo{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.parser_=e.parser,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=H(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new No(t,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Qn(t,e,0),Qn(t,e,1),Qn(t,e,2)];return s.forEach((c,P)=>{un({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(D,nt)=>{const St=this.colorMode.rawValue,Bt=D.rawValue.getComponents(St,this.colorType_);return Bt[P]=nt.rawValue,new Ft($s(Ve(Bt),Bt[3]),St,this.colorType_)}})}),s}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Jn=G("hpl");class Ko{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Jn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(Jn("c")),this.element.appendChild(s);const c=t.createElement("div");c.classList.add(Jn("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=ui(new Ft([e,100,100],"hsv"));const s=Zt(e,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Ho{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Ko(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ie(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=Zt(te(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),c=this.value.rawValue,[,P,D,nt]=c.getComponents("hsv");this.value.setRawValue(new Ft([s,P,D,nt],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=ae(Ue(!1),Se(t));if(e===0)return;const s=this.value.rawValue,[c,P,D,nt]=s.getComponents("hsv");this.value.setRawValue(new Ft([c+e,P,D,nt],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){ae(Ue(!1),Se(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ts=G("svp"),hi=64;class Yo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ts()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("canvas");s.height=hi,s.width=hi,s.classList.add(ts("c")),this.element.appendChild(s),this.canvasElement=s;const c=t.createElement("div");c.classList.add(ts("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const t=_(this.canvasElement);if(!t)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,D=t.getImageData(0,0,c,P),nt=D.data;for(let Nt=0;Nt<P;Nt++)for(let $t=0;$t<c;$t++){const ze=Zt($t,0,c,0,100),mn=Zt(Nt,0,P,100,0),bn=Ns(s[0],ze,mn),Dn=(Nt*c+$t)*4;nt[Dn]=bn[0],nt[Dn+1]=bn[1],nt[Dn+2]=bn[2],nt[Dn+3]=255}t.putImageData(D,0,0);const St=Zt(s[1],0,100,0,100);this.markerElem_.style.left=`${St}%`;const Bt=Zt(s[2],0,100,100,0);this.markerElem_.style.top=`${Bt}%`}onValueChange_(){this.update_()}}class Zo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Yo(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ie(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=Zt(t.point.x,0,t.bounds.width,0,100),c=Zt(t.point.y,0,t.bounds.height,100,0),[P,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ft([P,s,c,D],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Gs(t.key)&&t.preventDefault();const[e,s,c,P]=this.value.rawValue.getComponents("hsv"),D=Ue(!1),nt=ae(D,Se(t)),St=ae(D,dn(t));nt===0&&St===0||this.value.setRawValue(new Ft([e,s+nt,c+St,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Ue(!1),s=ae(e,Se(t)),c=ae(e,dn(t));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Xo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Ho(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Zo(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Fo(t,{value:this.value,viewProps:this.viewProps}),text:new pn(t,{parser:Pe,baseStep:.1,props:st.fromObject({draggingScale:.01,formatter:ne(2)}),value:H(0,{constraint:new He({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&un({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Ft(P,s.rawValue.mode)}}),this.textC_=new jo(t,{colorType:e.colorType,parser:Pe,value:this.value,viewProps:this.viewProps}),this.view=new So(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const es=G("colsw");class Qo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(es()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(es("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=t.createElement("button");c.classList.add(es("b")),e.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Zn(t)}onValueChange_(){this.update_()}}class Jo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Qo(t,{value:this.value,viewProps:this.viewProps})}}class ns{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=J.create(e.expanded),this.swatchC_=new Jo(t,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Pn(t,{parser:e.parser,props:st.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new fo(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Bs(t,{viewProps:this.viewProps}):null;const c=new Xo(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),un({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),gt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=rt(t);s&&e.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ta(n,t){return Ft.isColorObject(n)?Ft.fromObject(n,t):Ft.black(t)}function ea(n){return Ve(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function na(n){return n.getComponents("rgb").reduce((t,e,s)=>{const c=Math.floor(s===3?e*255:e)&255;return t<<8|c},0)>>>0}function sa(n){return new Ft([n>>16&255,n>>8&255,n&255],"rgb")}function ia(n){return new Ft([n>>24&255,n>>16&255,n>>8&255,Zt(n&255,0,255,0,1)],"rgb")}function ra(n){return typeof n!="number"?Ft.black():sa(n)}function oa(n){return typeof n!="number"?Ft.black():ia(n)}function aa(n){const t=Xn(n);return t?(e,s)=>{hn(e,t(s))}:null}function la(n){const t=n?na:ea;return(e,s)=>{hn(e,t(s))}}function ca(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ua(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function da(n,t){return(e,s)=>{n?ca(e,s,t):ua(e,s,t)}}function ss(n){var t;return!!(n!=null&&n.alpha||!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function pa(n){return n?t=>Zn(t,"0x"):t=>ci(t,"0x")}function ha(n){return"color"in n||"view"in n&&n.view==="color"}const fa={id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!ha(t))return null;const e=Kn(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>ss(n.params)?oa:ra,equals:Ft.equals,writer:n=>la(ss(n.params))},controller:n=>{const t=ss(n.params),e="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:"int",expanded:e??!1,formatter:pa(t),parser:Yn("int"),pickerLayout:s??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}};function _a(n){return Ft.isRgbaColorObject(n)}function ma(n){return t=>ta(t,n)}function ba(n,t){return e=>n?pi(e,t):di(e,t)}const va={id:"input-color-object",type:"input",accept:(n,t)=>{if(!Ft.isColorObject(n))return null;const e=Kn(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>ma(Ge(n.params)),equals:Ft.equals,writer:n=>da(_a(n.initialValue),Ge(n.params))},controller:n=>{var t;const e=Ft.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(t=Ge(n.params))!==null&&t!==void 0?t:"int";return new ns(n.document,{colorType:P,expanded:s??!1,formatter:ba(e,P),parser:Yn(P),pickerLayout:c??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}},ga={id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||"view"in t&&t.view==="text")return null;const e=Hn(n,Ge(t));if(!e||!Xn(e))return null;const c=Kn(t);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var t;return Ao((t=Ge(n.params))!==null&&t!==void 0?t:"int")},equals:Ft.equals,writer:n=>{const t=Hn(n.initialValue,Ge(n.params));if(!t)throw K.shouldNeverHappen();const e=aa(t);if(!e)throw K.notBindable();return e}},controller:n=>{const t=Hn(n.initialValue,Ge(n.params));if(!t)throw K.shouldNeverHappen();const e=Xn(t);if(!e)throw K.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:t.type,expanded:s??!1,formatter:e,parser:Yn(t.type),pickerLayout:c??"popup",supportsAlpha:t.alpha,value:n.value,viewProps:n.viewProps})}};class Be{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((s,c)=>{var P,D;return(D=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(e)}}const fi=G("pndtxt");class wa{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(fi()),this.textViews.forEach(s=>{const c=t.createElement("div");c.classList.add(fi("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function xa(n,t,e){return new pn(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",baseStep:t.axes[e].baseStep,parser:t.parser,props:t.axes[e].textProps,value:H(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class is{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((s,c)=>xa(t,e,c)),this.acs_.forEach((s,c)=>{un({primary:this.value,secondary:s.value,forward:P=>e.assembly.toComponents(P.rawValue)[c],backward:(P,D)=>{const nt=e.assembly.toComponents(P.rawValue);return nt[c]=D.rawValue,e.assembly.fromComponents(nt)}})}),this.view=new wa(t,{textViews:this.acs_.map(s=>s.view)})}}function _i(n,t){return"step"in n&&!O(n.step)?new yn(n.step,t):null}function mi(n){return!O(n.max)&&!O(n.min)?new He({max:n.max,min:n.min}):!O(n.max)||!O(n.min)?new Es({max:n.max,min:n.min}):null}function ya(n){const t=ye(n,He);if(t)return[t.values.get("min"),t.values.get("max")];const e=ye(n,Es);return e?[e.minValue,e.maxValue]:[void 0,void 0]}function Pa(n,t){const e=[],s=_i(n,t);s&&e.push(s);const c=mi(n);c&&e.push(c);const P=jn(n.options);return P&&e.push(P),new rn(e)}const Sa={id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=xt,s=ht(t,{format:e.optional.function,max:e.optional.number,min:e.optional.number,options:e.optional.custom(kn),step:e.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs,constraint:n=>Pa(n.params,n.initialValue),writer:n=>hn},controller:n=>{var t;const e=n.value,s=n.constraint,c=s&&ye(s,on);if(c)return new an(n.document,{props:new st({options:c.values.value("options")}),value:e,viewProps:n.viewProps});const P=(t="format"in n.params?n.params.format:void 0)!==null&&t!==void 0?t:ne(Cn(s,e.rawValue)),D=s&&ye(s,He);return D?new Wn(n.document,{baseStep:Ye(s),parser:Pe,sliderProps:new st({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:st.fromObject({draggingScale:Ze(s,e.rawValue),formatter:P}),value:e,viewProps:n.viewProps}):new pn(n.document,{baseStep:Ye(s),parser:Pe,props:st.fromObject({draggingScale:Ze(s,e.rawValue),formatter:P}),value:e,viewProps:n.viewProps})}};class Te{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(O(t))return!1;const e=t.x,s=t.y;return!(typeof e!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const bi={toComponents:n=>n.getComponents(),fromComponents:n=>new Te(...n)},Qe=G("p2d");class ka{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Qe()),e.viewProps.bindClassModifiers(this.element),Q(e.expanded,_t(this.element,Qe(void 0,"expanded")));const s=t.createElement("div");s.classList.add(Qe("h")),this.element.appendChild(s);const c=t.createElement("button");c.classList.add(Qe("b")),c.appendChild(v(t,"p2dpad")),e.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=t.createElement("div");if(P.classList.add(Qe("t")),s.appendChild(P),this.textElement=P,e.pickerLayout==="inline"){const D=t.createElement("div");D.classList.add(Qe("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const De=G("p2dp");class Ca{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=e.invertsY,this.maxValue_=e.maxValue,this.element=t.createElement("div"),this.element.classList.add(De()),e.layout==="popup"&&this.element.classList.add(De(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(De("p")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=t.createElementNS(k,"svg");c.classList.add(De("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=t.createElementNS(k,"line");P.classList.add(De("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const D=t.createElementNS(k,"line");D.classList.add(De("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const nt=t.createElementNS(k,"line");nt.classList.add(De("l")),nt.setAttributeNS(null,"x1","50%"),nt.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(nt),this.lineElem_=nt;const St=t.createElement("div");St.classList.add(De("m")),this.padElement.appendChild(St),this.markerElem_=St,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Zt(t,-s,+s,0,100),P=Zt(e,-s,+s,0,100),D=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function vi(n,t,e){return[ae(t[0],Se(n)),ae(t[1],dn(n))*(e?1:-1)]}class Ea{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.baseSteps_=e.baseSteps,this.maxValue_=e.maxValue,this.invertsY_=e.invertsY,this.view=new Ca(t,{invertsY:this.invertsY_,layout:e.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ie(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=this.maxValue_,c=Zt(t.point.x,0,t.bounds.width,-s,+s),P=Zt(this.invertsY_?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-s,+s);this.value.setRawValue(new Te(c,P),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Gs(t.key)&&t.preventDefault();const[e,s]=vi(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(new Te(this.value.rawValue.x+e,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,s]=vi(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ma{constructor(t,e){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=J.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Bs(t,{viewProps:this.viewProps}):null;const P=new Ea(t,{baseSteps:[e.axes[0].baseStep,e.axes[1].baseStep],invertsY:e.invertsY,layout:e.pickerLayout,maxValue:e.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new is(t,{assembly:bi,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new ka(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),un({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,nt)=>nt.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),gt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=rt(t);s&&e.contains(s)||s&&s===this.view.buttonElement&&!u(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}class Je{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(O(t))return!1;const e=t.x,s=t.y,c=t.z;return!(typeof e!="number"||typeof s!="number"||typeof c!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const gi={toComponents:n=>n.getComponents(),fromComponents:n=>new Je(...n)};function Ba(n){return Je.isObject(n)?new Je(n.x,n.y,n.z):new Je}function Ta(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function Da(n,t){return new Be({assembly:gi,components:[ke("x"in n?n.x:void 0,t.x),ke("y"in n?n.y:void 0,t.y),ke("z"in n?n.z:void 0,t.z)]})}function rs(n,t){return{baseStep:Ye(t),constraint:t,textProps:st.fromObject({draggingScale:Ze(t,n),formatter:ne(Cn(t,n))})}}const Aa={id:"input-point3d",type:"input",accept:(n,t)=>{if(!Je.isObject(n))return null;const e=xt,s=ht(t,{x:e.optional.custom(Ee),y:e.optional.custom(Ee),z:e.optional.custom(Ee)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ba,constraint:n=>Da(n.params,n.initialValue),equals:Je.equals,writer:n=>Ta},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Be))throw K.shouldNeverHappen();return new is(n.document,{assembly:gi,axes:[rs(t.rawValue.x,e.components[0]),rs(t.rawValue.y,e.components[1]),rs(t.rawValue.z,e.components[2])],parser:Pe,value:t,viewProps:n.viewProps})}};class tn{constructor(t=0,e=0,s=0,c=0){this.x=t,this.y=e,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(O(t))return!1;const e=t.x,s=t.y,c=t.z,P=t.w;return!(typeof e!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const wi={toComponents:n=>n.getComponents(),fromComponents:n=>new tn(...n)};function Ra(n){return tn.isObject(n)?new tn(n.x,n.y,n.z,n.w):new tn}function Ia(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function La(n,t){return new Be({assembly:wi,components:[ke("x"in n?n.x:void 0,t.x),ke("y"in n?n.y:void 0,t.y),ke("z"in n?n.z:void 0,t.z),ke("w"in n?n.w:void 0,t.w)]})}function Va(n,t){return{baseStep:Ye(t),constraint:t,textProps:st.fromObject({draggingScale:Ze(t,n),formatter:ne(Cn(t,n))})}}const Ua={id:"input-point4d",type:"input",accept:(n,t)=>{if(!tn.isObject(n))return null;const e=xt,s=ht(t,{x:e.optional.custom(Ee),y:e.optional.custom(Ee),z:e.optional.custom(Ee),w:e.optional.custom(Ee)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ra,constraint:n=>La(n.params,n.initialValue),equals:tn.equals,writer:n=>Ia},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Be))throw K.shouldNeverHappen();return new is(n.document,{assembly:wi,axes:t.rawValue.getComponents().map((s,c)=>Va(s,e.components[c])),parser:Pe,value:t,viewProps:n.viewProps})}};function Ga(n){const t=[],e=jn(n.options);return e&&t.push(e),new rn(t)}const za={id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const s=ht(t,{options:xt.optional.custom(kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us,constraint:n=>Ga(n.params),writer:n=>hn},controller:n=>{const t=n.document,e=n.value,s=n.constraint,c=s&&ye(s,on);return c?new an(t,{props:new st({options:c.values.value("options")}),value:e,viewProps:n.viewProps}):new Pn(t,{parser:P=>P,props:st.fromObject({formatter:Fn}),value:e,viewProps:n.viewProps})}},_n={monitor:{defaultInterval:200,defaultLineCount:3}},xi=G("mll");class Oa{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(xi()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("textarea");s.classList.add(xi("i")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,s.readOnly=!0,e.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),t.textContent=s.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class os{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Oa(t,{formatter:e.formatter,lineCount:e.lineCount,value:this.value,viewProps:this.viewProps})}}const yi=G("sgl");class Fa{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(yi()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(yi("i")),s.readOnly=!0,s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class as{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Fa(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const qa={id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=ht(t,{lineCount:xt.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ds},controller:n=>{var t;return n.value.rawValue.length===1?new as(n.document,{formatter:As,value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:As,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ae=G("grl");class Na{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ae()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=t.createElementNS(k,"svg");s.classList.add(Ae("g")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=t.createElementNS(k,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=t.createElement("div");P.classList.add(Ae("t"),G("tt")()),this.element.appendChild(P),this.tooltipElem_=P,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const t=this.svgElem_.getBoundingClientRect(),e=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Nt,$t)=>{if(Nt===void 0)return;const ze=Zt($t,0,e,0,t.width),mn=Zt(Nt,s,c,t.height,0);P.push([ze,mn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const D=this.tooltipElem_,nt=this.value.rawValue[this.cursor_.rawValue];if(nt===void 0){D.classList.remove(Ae("t","a"));return}const St=Zt(this.cursor_.rawValue,0,e,0,t.width),Bt=Zt(nt,s,c,t.height,0);D.style.left=`${St}px`,D.style.top=`${Bt}px`,D.textContent=`${this.formatter_(nt)}`,D.classList.contains(Ae("t","a"))||(D.classList.add(Ae("t","a"),Ae("t","in")),i(D),D.classList.remove(Ae("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class $a{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=H(-1),this.view=new Na(t,{cursor:this.cursor_,formatter:e.formatter,lineCount:e.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Ie(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const e=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Zt(t.offsetX,0,e.width,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Zt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ls(n){return"format"in n&&!O(n.format)?n.format:ne(2)}function Wa(n){var t;return n.value.rawValue.length===1?new as(n.document,{formatter:ls(n.params),value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:ls(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function ja(n){var t,e,s;return new $a(n.document,{formatter:ls(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,props:st.fromObject({maxValue:(e="max"in n.params?n.params.max:null)!==null&&e!==void 0?e:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Pi(n){return"view"in n&&n.view==="graph"}const Ka={id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=xt,s=ht(t,{format:e.optional.function,lineCount:e.optional.number,max:e.optional.number,min:e.optional.number,view:e.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Pi(n)?64:1,reader:n=>Vs},controller:n=>Pi(n.params)?ja(n):Wa(n)},Ha={id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=xt,s=ht(t,{lineCount:e.optional.number,multiline:e.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new os(n.document,{formatter:Fn,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:_n.monitor.defaultLineCount,value:e,viewProps:n.viewProps}):new as(n.document,{formatter:Fn,value:e,viewProps:n.viewProps})}};function Ya(n,t){var e;const s=n.accept(t.target.read(),t.params);if(O(s))return null;const c=xt,P={target:t.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(P),nt=n.binding.constraint?n.binding.constraint(P):void 0,St=H(D(s.initialValue),{constraint:nt,equals:n.binding.equals}),Bt=new wr({reader:D,target:t.target,value:St,writer:n.binding.writer(P)}),Nt=c.optional.boolean(t.params.disabled).value,$t=c.optional.boolean(t.params.hidden).value,ze=n.controller({constraint:nt,document:t.document,initialValue:s.initialValue,params:s.params,value:Bt.value,viewProps:f.create({disabled:Nt,hidden:$t})});return new Kt(t.document,{binding:Bt,blade:At(),props:st.fromObject({label:"label"in t.params?(e=c.optional.string(t.params.label).value)!==null&&e!==void 0?e:null:t.target.key}),valueController:ze})}function Za(n,t){return t===0?new vr:new gr(n,t??_n.monitor.defaultInterval)}function Xa(n,t){var e,s,c;const P=xt,D=n.accept(t.target.read(),t.params);if(O(D))return null;const nt={target:t.target,initialValue:D.initialValue,params:D.params},St=n.binding.reader(nt),Bt=(s=(e=P.optional.number(t.params.bufferSize).value)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Nt=P.optional.number(t.params.interval).value,$t=new Sr({reader:St,target:t.target,ticker:Za(t.document,Nt),value:xr(Bt)}),ze=P.optional.boolean(t.params.disabled).value,mn=P.optional.boolean(t.params.hidden).value,bn=n.controller({document:t.document,params:D.params,value:$t.value,viewProps:f.create({disabled:ze,hidden:mn})});return new Ht(t.document,{binding:$t,blade:At(),props:st.fromObject({label:"label"in t.params?(c=P.optional.string(t.params.label).value)!==null&&c!==void 0?c:null:t.target.key}),valueController:bn})}class Qa{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t){t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput(t,e,s){const c=e.read();if(O(c))throw new K({context:{key:e.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((D,nt)=>D??Ya(nt,{document:t,target:e,params:s}),null);if(P)return P;throw new K({context:{key:e.key},type:"nomatchingcontroller"})}createMonitor(t,e,s){const c=this.pluginsMap_.monitors.reduce((P,D)=>P??Xa(D,{document:t,params:s,target:e}),null);if(c)return c;throw new K({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const s=this.pluginsMap_.blades.reduce((c,P)=>c??br(P,{document:t,params:e}),null);if(!s)throw new K({type:"nomatchingview",context:{params:e}});return s}createBladeApi(t){if(t instanceof Kt)return new qt(t);if(t instanceof Ht)return new Xt(t);if(t instanceof Yt)return new fe(t,this);const e=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:t,pool:this}),null);if(!e)throw K.shouldNeverHappen();return e}}function Ja(){const n=new Qa;return[rl,Aa,Ua,za,Sa,ga,va,fa,ho,qa,Ha,Ka,bt,ur,pr,ks].forEach(t=>{n.register(t)}),n}function tl(n){return Te.isObject(n)?new Te(n.x,n.y):new Te}function el(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function ke(n,t){if(!n)return;const e=[],s=_i(n,t);s&&e.push(s);const c=mi(n);return c&&e.push(c),new rn(e)}function nl(n,t){return new Be({assembly:bi,components:[ke("x"in n?n.x:void 0,t.x),ke("y"in n?n.y:void 0,t.y)]})}function Si(n,t){const[e,s]=n?ya(n):[];if(!O(e)||!O(s))return Math.max(Math.abs(e??0),Math.abs(s??0));const c=Ye(n);return Math.max(Math.abs(c)*10,Math.abs(t)*10)}function sl(n,t){const e=t instanceof Be?t.components[0]:void 0,s=t instanceof Be?t.components[1]:void 0,c=Si(e,n.x),P=Si(s,n.y);return Math.max(c,P)}function ki(n,t){return{baseStep:Ye(t),constraint:t,textProps:st.fromObject({draggingScale:Ze(t,n),formatter:ne(Cn(t,n))})}}function il(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const rl={id:"input-point2d",type:"input",accept:(n,t)=>{if(!Te.isObject(n))return null;const e=xt,s=ht(t,{expanded:e.optional.boolean,picker:e.optional.custom(Fs),x:e.optional.custom(Ee),y:e.optional.object({inverted:e.optional.boolean,max:e.optional.number,min:e.optional.number,step:e.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tl,constraint:n=>nl(n.params,n.initialValue),equals:Te.equals,writer:n=>el},controller:n=>{const t=n.document,e=n.value,s=n.constraint;if(!(s instanceof Be))throw K.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Ma(t,{axes:[ki(e.rawValue.x,s.components[0]),ki(e.rawValue.y,s.components[1])],expanded:c??!1,invertsY:il(n.params),maxValue:sl(e.rawValue,s),parser:Pe,pickerLayout:P??"popup",value:e,viewProps:n.viewProps})}};class Ci extends x{constructor(t){super(t),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get options(){return this.controller_.valueController.props.get("options")}set options(t){this.controller_.valueController.props.set("options",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}class Ei extends x{constructor(t){super(t),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(t){this.controller_.valueController.sliderController.props.set("maxValue",t)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(t){this.controller_.valueController.sliderController.props.set("minValue",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}class Mi extends x{constructor(t){super(t),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(t){this.controller_.valueController.props.set("formatter",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,c=>{s(c.event)}),this}}const ol=function(){return{id:"list",type:"blade",accept(n){const t=xt,e=ht(n,{options:t.required.custom(kn),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string});return e?{params:e}:null},controller(n){const t=new on(qs(n.params.options)),e=H(n.params.value,{constraint:t}),s=new an(n.document,{props:new st({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Ke(n.document,{blade:n.blade,props:st.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Ke)||!(n.controller.valueController instanceof an)?null:new Ci(n.controller)}}}();function al(n){return n.reduce((t,e)=>Object.assign(t,{[e.presetKey]:e.read()}),{})}function ll(n,t){n.forEach(e=>{const s=t[e.target.presetKey];s!==void 0&&e.writer(e.target,e.reader(s))})}class cl extends _e{constructor(t,e){super(t,e)}get element(){return this.controller_.view.element}importPreset(t){const e=this.controller_.rackController.rack.find(Kt).map(s=>s.binding);ll(e,t),this.refresh()}exportPreset(){const t=this.controller_.rackController.rack.find(Kt).map(e=>e.binding.target);return al(t)}refresh(){this.controller_.rackController.rack.find(Kt).forEach(t=>{t.binding.read()}),this.controller_.rackController.rack.find(Ht).forEach(t=>{t.binding.read()})}}class ul extends Un{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const dl={id:"slider",type:"blade",accept(n){const t=xt,e=ht(n,{max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number});return e?{params:e}:null},controller(n){var t,e;const s=(t=n.params.value)!==null&&t!==void 0?t:0,c=new He({max:n.params.max,min:n.params.min}),P=new Wn(n.document,{baseStep:1,parser:Pe,sliderProps:new st({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:st.fromObject({draggingScale:Ze(void 0,s),formatter:(e=n.params.format)!==null&&e!==void 0?e:eo}),value:H(s,{constraint:c}),viewProps:n.viewProps});return new Ke(n.document,{blade:n.blade,props:st.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof Ke)||!(n.controller.valueController instanceof Wn)?null:new Ei(n.controller)}},pl=function(){return{id:"text",type:"blade",accept(n){const t=xt,e=ht(n,{parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string});return e?{params:e}:null},controller(n){var t;const e=new Pn(n.document,{parser:n.params.parse,props:st.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:s=>String(s)}),value:H(n.params.value),viewProps:n.viewProps});return new Ke(n.document,{blade:n.blade,props:st.fromObject({label:n.params.label}),valueController:e})},api(n){return!(n.controller instanceof Ke)||!(n.controller.valueController instanceof Pn)?null:new Mi(n.controller)}}}();function hl(n){const t=n.createElement("div");return t.classList.add(G("dfw")()),n.body&&n.body.appendChild(t),t}function Bi(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const s=n.createElement("style");s.dataset.tpStyle=t,s.textContent=e,n.head.appendChild(s)}class fl extends cl{constructor(t){var e,s;const c=t??{},P=(e=c.document)!==null&&e!==void 0?e:a(),D=Ja(),nt=new ul(P,{expanded:c.expanded,blade:At(),props:st.fromObject({title:c.title}),viewProps:f.create()});super(nt,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:hl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw K.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw K.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(t){t.css&&Bi(this.document,`plugin-${t.id}`,t.css)}setUpDefaultPlugins_(){Bi(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(t=>{this.embedPluginStyle_(t)}),this.registerPlugin({plugins:[dl,ol,ks,pl]})}}const _l=new C("3.1.10");h.BladeApi=x,h.ButtonApi=ut,h.FolderApi=_e,h.InputBindingApi=qt,h.ListApi=Ci,h.MonitorBindingApi=Xt,h.Pane=fl,h.SeparatorApi=bs,h.SliderApi=Ei,h.TabApi=ys,h.TabPageApi=xs,h.TextApi=Mi,h.TpChangeEvent=M,h.VERSION=_l,Object.defineProperty(h,"__esModule",{value:!0})})})(us,us.exports);var Fl=us.exports;const ql=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Nl=`// 2DGS render — vertex+fragment.
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
`,$l=`const WG_SIZE = 256u;
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
}`,Wl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,jl=`// shader implementing gpu radix sort.

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
`,Kl=`// shader implementing gpu radix sort.

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
`,Hl=`// ============================================================================
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
}`,tr=32,ds=1,ps=2,Oi=4,Yl=0,Re=new ArrayBuffer(tr),ce={canvas_size:new Uint32Array(Re,0,2),accel_flags:new Uint32Array(Re,8,1),feature_mode:new Uint32Array(Re,12,1),gaussian_scaling:new Float32Array(Re,16,1),sh_bias:new Float32Array(Re,20,1),color_K:new Uint32Array(Re,24,1),walltime:new Float32Array(Re,28,1)};function Zl(o){ce.canvas_size[0]=o.width>>>0,ce.canvas_size[1]=o.height>>>0,ce.accel_flags[0]=(o.accel_flags??ds|ps)>>>0,ce.feature_mode[0]=(o.feature_mode??Yl)>>>0,ce.gaussian_scaling[0]=o.gaussian_scaling??1,ce.sh_bias[0]=o.sh_bias??.5,ce.color_K[0]=(o.color_K??0)>>>0,ce.walltime[0]=o.walltime??0}function er(o,l){o.queue.writeBuffer(l,0,Re)}function Vn(o,l,h){h&&o&&l&&er(o,l)}function vn(o,l,h,C,x=!0){ce.canvas_size[0]=o>>>0,ce.canvas_size[1]=l>>>0,Vn(h??null,C??null,x)}function Fi(o,l,h,C=!0){ce.gaussian_scaling[0]=o,Vn(l??null,h??null,C)}function qi(o,l,h,C=!0){ce.sh_bias[0]=o,Vn(l??null,h??null,C)}function Xl(o,l,h,C=!0){let x=ce.accel_flags[0];o.oac!==void 0&&(x=o.oac?x|ds:x&~ds),o.spr!==void 0&&(x=o.spr?x|ps:x&~ps),o.bfc!==void 0&&(x=o.bfc?x|Oi:x&~Oi),ce.accel_flags[0]=x>>>0,Vn(l??null,h??null,C)}const Ni=256,Ql=tr,Jl=8,tc=80,ec=12,ms=8,Ce=1<<ms,Fe=256,Rn=32/ms;function $i(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function nc(o,l){const h=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[h]}),x=E=>o.createComputePipeline({layout:C,compute:{module:l,entryPoint:E,constants:{WG_SIZE:Fe}}});return{l0TileScan:x("prefix_l0_tile_scan"),l1TileScanOnL0:x("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:x("prefix_scan_l1_sums"),addL1ToL0:x("prefix_add_l1_to_l0_offsets"),addL0ToElems:x("prefix_add_l0_to_elements"),computeDigitBase:x("compute_digit_base"),prefixBindGroupLayout:h}}function sc(o,l,h){const C=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[C]}),M=o.createPipelineLayout({bindGroupLayouts:[x]}),V=[];for(let B=0;B<Rn;B++){const A={PASS_ID:B,RS_RADIX_LOG2:ms,RS_RADIX_SIZE:Ce};V.push({localHistogram:o.createComputePipeline({layout:E,compute:{module:l,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:h,entryPoint:"scatter_elements",constants:A}})})}return{passes:V,localHistogramBindGroupLayout:C,scatterBindGroupLayout:x}}function ic(o){const l=o.createShaderModule({label:"local histogram",code:Kl}),h=o.createShaderModule({label:"scatter",code:jl}),C=o.createShaderModule({label:"blelloch prefix",code:Hl}),x=nc(o,C),E=sc(o,l,h);return{localHistogramBindGroupLayout:E.localHistogramBindGroupLayout,scatterBindGroupLayout:E.scatterBindGroupLayout,passes:E.passes,hierarchicalBlelloch:x}}function rc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d-array"}),C=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),x=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),E=o.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(E,0,new ArrayBuffer(48));const M=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),V=M.createView({dimension:"2d"}),B=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),A=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),L=A.createView({dimension:"2d"}),O=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Z={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:h,sampler:C,rectsBuffer:x,texParamsBuffer:E,meta:Z,rvqCodebookTexture:M,rvqCodebookView:V,rvqCodebookSampler:B,rvqPackedIndicesTexture:A,rvqPackedIndicesView:L,rvqSurfelOffsetsBuffer:O}}class oc{constructor(l,h,C,x,E,M=null){tt(this,"device");tt(this,"pc");tt(this,"presentationFormat");tt(this,"camera_buffer");tt(this,"render_settings_buffer");tt(this,"draw_indirect_buffer");tt(this,"splat_2d_buffer");tt(this,"querySet");tt(this,"resolveBuffer");tt(this,"resultBuffer");tt(this,"queriesPerFrame",Jl);tt(this,"queryCapacityFrames",200);tt(this,"sort_prefixBindGroup");tt(this,"sort_pipelines");tt(this,"sort_localHistogramBindGroups");tt(this,"sort_scatterBindGroups");tt(this,"lastFrame",0);tt(this,"frameCount",0);tt(this,"preprocessPipeline");tt(this,"cullPipeline");tt(this,"renderPipeline");tt(this,"indirectPipeline");tt(this,"sort_info_buffer");tt(this,"sort_ping_pong");tt(this,"crsBg");tt(this,"gsBg");tt(this,"cullBg2");tt(this,"preprocessBg1");tt(this,"renderSplatsBindGroup");tt(this,"renderSettingsBindGroup");tt(this,"atlasBindGroup");tt(this,"indirectBindGroup");tt(this,"sh_solvers_buffer");tt(this,"bgColor",[0,0,0,0]);tt(this,"showPerfDialogNext",!1);tt(this,"requestReorderNextFrame",!1);tt(this,"reorderInFlight",!1);tt(this,"downloadOnceNextRead",!1);tt(this,"downloadOnceFileName","fps_metrics");tt(this,"allFrameTimes",[]);tt(this,"lastStageBreakdownMs",null);tt(this,"timeQueryEnabled");tt(this,"atlas");const V=E.includes("timestamp-query");this.timeQueryEnabled=V,V&&re("⏰ using timestamp-query"),this.pc=l,this.device=h,this.presentationFormat=C,this.camera_buffer=x,this.atlas=M??rc(h),h.addEventListener("uncapturederror",H=>{console.error("A WebGPU error was not captured:",H.error)}),this._setupTimestampQueries(),this._setupBuffers();const B=(Math.floor((this.pc.num_points+Fe-1)/Fe)+1)*Fe,A=Math.ceil(B/Fe);console.log(`keys count adjusted: ${B}`),console.log(`key size: ${this.pc.num_points}`);const L=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});{const H=window.__halloumiProgress??(st=>{});H("pipeline: radix sort (buildPipelines) compile…"),this.sort_pipelines=ic(h),H("pipeline: radix sort OK")}const O=[$i(B,h),$i(B,h)],Z=h.createBuffer({label:"workgroup histograms",size:A*Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=h.createBuffer({label:"workgroup prefixes",size:A*Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=h.createBuffer({label:"digit base",size:Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=Math.ceil(A/Fe),j=Math.ceil(K/Fe),ut=h.createBuffer({label:"prefix l0 sums",size:K*Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=h.createBuffer({label:"prefix l0 offsets",size:K*Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=h.createBuffer({label:"prefix l1 sums",size:j*Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),G=h.createBuffer({label:"prefix l1 offsets",size:j*Ce*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:U}},{binding:3,resource:{buffer:ut}},{binding:4,resource:{buffer:z}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:G}},{binding:7,resource:{buffer:X}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:O[0].sort_depths_buffer}},{binding:2,resource:{buffer:Z}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:O[1].sort_depths_buffer}},{binding:2,resource:{buffer:Z}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:O[0].sort_depths_buffer}},{binding:3,resource:{buffer:O[1].sort_depths_buffer}},{binding:4,resource:{buffer:O[0].sort_indices_buffer}},{binding:5,resource:{buffer:O[1].sort_indices_buffer}},{binding:6,resource:{buffer:U}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:O[1].sort_depths_buffer}},{binding:3,resource:{buffer:O[0].sort_depths_buffer}},{binding:4,resource:{buffer:O[1].sort_indices_buffer}},{binding:5,resource:{buffer:O[0].sort_indices_buffer}},{binding:6,resource:{buffer:U}}]})],this.sort_info_buffer=L,this.sort_ping_pong=O;const lt=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),W=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Q=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Y=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:lt,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:W,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:Q,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Y,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const et=window.__halloumiProgress??(H=>{});et("pipeline: indirect_dispatch compile…");const _t=this.device.createShaderModule({code:$l});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:_t,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),et("pipeline: indirect_dispatch OK"),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),et("pipeline: surfel_cull compile…");const Ut=this.device.createShaderModule({code:Wl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[lt,W,Q]}),compute:{module:Ut,entryPoint:"surfel_cull"}}),et("pipeline: surfel_cull OK"),et("pipeline: preprocess_2dgs compile…");const Rt=this.device.createShaderModule({code:ql});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[lt,Y]}),compute:{module:Rt,entryPoint:"preprocess"}}),et("pipeline: preprocess_2dgs OK"),et("pipeline: render_2dgs shader compile…");const Dt=this.device.createShaderModule({code:Nl});Dt.getCompilationInfo().then(H=>{H.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),H.messages.forEach(st=>{(st.type==="error"?console.error:st.type==="warning"?console.warn:console.log)(`${st.type} (line ${st.lineNum}:${st.linePos}): ${st.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const pt=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),kt=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),wt=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]});this.device.pushErrorScope("validation"),et("pipeline: render_2dgs createRenderPipeline…"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[pt,kt,wt]}),vertex:{module:Dt,entryPoint:"vs_main"},fragment:{module:Dt,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(H=>{H?(et("render_2dgs pipeline VALIDATION ERROR: "+H.message),console.error("[render_2dgs] pipeline create validation error:",H.message)):(et("pipeline: render_2dgs OK"),console.log("[render_2dgs] pipeline created OK"))}),et("all pipelines dispatched (async validation pending)"),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:pt,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:kt,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:wt,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&Qi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const h=Math.max(0,Math.min(l,this.pc.num_points)),C=h*Uint32Array.BYTES_PER_ELEMENT;if(C===0){console.log("[DEBUG] No indices to read.");return}const x=this.device.createBuffer({size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),E=this.device.createCommandEncoder();E.copyBufferToBuffer(this.sort_ping_pong[0].sort_indices_buffer,0,x,0,C),this.device.queue.submit([E.finish()]),await x.mapAsync(GPUMapMode.READ);const M=new Uint32Array(x.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(M)),x.unmap()}frame(l,h,C=!0){const E=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=C&&this.timeQueryEnabled,V=this.frameCount<3&&window.__halloumiProgress?window.__halloumiProgress:B=>{};V(`frame#${this.frameCount} begin (num_points=${this.pc.num_points}, tsw=${M})`);{l.clearBuffer(this.sort_info_buffer,0,4),V(`  cull dispatch: wg=${Math.ceil(this.pc.num_points/Ni)}`);const B={label:"cull"};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+0,endOfPassWriteIndex:E+1});const A=l.beginComputePass(B);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2);const L=Math.ceil(this.pc.num_points/Ni);A.dispatchWorkgroups(L,1,1),A.end()}V("  indirect dispatch pass");{const B=l.beginComputePass({label:"calculate indirect dispatch"});B.setPipeline(this.indirectPipeline),B.setBindGroup(0,this.indirectBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}V("  preprocess pass");{const B={label:"preprocess"};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+2,endOfPassWriteIndex:E+3});const A=l.beginComputePass(B);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}V("  radix sort loop begin (TOTAL_PASSES="+Rn+")");for(let B=0;B<Rn;B++){const A=B&1,L=this.sort_pipelines.passes[B],O=this.sort_localHistogramBindGroups[A],Z=this.sort_scatterBindGroups[A];{const U={label:`upsweep_round${B}`};M&&B==0&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4});const X=l.beginComputePass(U);X.setPipeline(L.localHistogram),X.setBindGroup(0,O),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const U=l.beginComputePass({label:`prefix_round${B} - l0TileScan`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),U.end()}{const U=l.beginComputePass({label:`prefix_round${B} - l1TileScanOnL0`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),U.end()}{const U=l.beginComputePass({label:`prefix_round${B} - l1ScanSums`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroups(1,Ce,1),U.end()}{const U=l.beginComputePass({label:`prefix_round${B} - addL1ToL0`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),U.end()}{const U=l.beginComputePass({label:`prefix_round${B} - addL0ToElems`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),U.end()}{const U=l.beginComputePass({label:`prefix_round${B} - computeDigitBase`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroups(1,1,1),U.end()}{const U={label:`scatter_round${B}`};M&&B==Rn-1&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+5});const X=l.beginComputePass(U);X.setPipeline(L.scatterElements),X.setBindGroup(0,Z),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{const B={label:"render",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6,endOfPassWriteIndex:E+7}),V("  render pass begin");const A=l.beginRenderPass(B);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}V("  frame encoded (submit is caller's responsibility)"),this.frameCount++}async readPerfMetrics(l){const h=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const C=this.device.createCommandEncoder({label:"timestamp resolve encoder"});C.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),C.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([C.finish()]),await this.device.queue.onSubmittedWorkDone();const x=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const E=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),V=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,B=Array.from({length:x.length},()=>[]);let A=0;for(let ut=0;ut<M;ut++){const z=(V+ut)%this.queryCapacityFrames,N=z*this.queriesPerFrame;let G=!0;for(let lt=0;lt<x.length;lt++){const[W,Q,Y]=x[lt];if(E[N+Y]===0n||E[N+Q]===0n||E[N+Q]<E[N+Y]){G=!1;break}}if(!G){!h&&z%60===0&&console.debug("[timestamp] frame slot",z,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let lt=0;lt<x.length;lt++){const[W,Q,Y]=x[lt],et=Number(E[N+Y]),_t=Number(E[N+Q]);B[lt].push((_t-et)/1e6)}}if(A===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...B[0]);const L=[];let O=0,Z=0,U=0;for(let ut=0;ut<x.length;ut++){const z=x[ut][0],N=B[ut];let G=0;if(z==="Total"){const lt=this.allFrameTimes;G=lt.reduce((Y,et)=>Y+et,0)/lt.length;const W=[...lt].sort((Y,et)=>Y-et);O=W[Math.floor(W.length*.99)]||0;const Q=lt.reduce((Y,et)=>Y+Math.pow(et-G,2),0)/lt.length;Z=Math.sqrt(Q),U=G}else G=N.reduce((lt,W)=>lt+W,0)/N.length;L.push([z,G])}this.lastFrame+=this.frameCount,this.frameCount=0;const X=Object.fromEntries(L);this.lastStageBreakdownMs={cull:X.Culling??0,preprocess:X.Preprocess??0,sort:X.Sort??0,render:X.Render??0,total:X.Total??0};const j=`[TIMESTAMP - ${this.constructor.name}]
`+L.map(([ut,z])=>`${ut}: ${z.toFixed(3)}ms`).join(`
`)+`
Total P99: ${O.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${U.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(j),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ut=`Stage,ms
`,z=L.map(([lt,W])=>`${lt},${W.toFixed(3)}`).join(`
`),N="data:text/csv;charset=utf-8,"+encodeURIComponent(ut+z),G=document.createElement("a");G.href=N,G.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(G),G.click(),G.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(j)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Ql,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),h=l?l.width:1,C=l?l.height:1;Zl({width:h,height:C,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),er(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:en(this.pc.num_points*tc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:en(this.pc.num_points*ec),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const h=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,C=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${C}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function ac(o,l){return 2*Math.atan(l/(2*o))}function lc(o,l,h,C){const x=Math.tan(C/2),E=Math.tan(h/2),M=x*o,V=-M,B=E*o,A=-B,L=jt.create();return L[0]=2*o/(B-A),L[5]=-2*o/(M-V),L[2]=(B+A)/(B-A),L[6]=(M+V)/(M-V),L[14]=1,L[10]=l/(l-o),L[11]=-(l*o)/(l-o),jt.transpose(L,L),L}async function cc(o){re(`loading scene camera file... : ${o}`);const h=await(await fetch(o)).json();return re(`loaded cameras count: ${h.length}`),h.map(C=>{const x=I.clone(C.position),E=he.create(...C.rotation.flat()),M=E[0],V=E[4],B=E[8],A=E[1],L=E[5],O=E[9],Z=E[2],U=E[6],X=E[10];M*(L*X-O*U)-V*(A*X-O*Z)+B*(A*U-L*Z)<0&&(E[1]=-E[1],E[5]=-E[5],E[9]=-E[9]);const j=jt.fromMat3(E);return{position:x,rotation:j,img_name:C.img_name,id:C.id}})}const uc=4*2,dc=4*16,nr=4*dc+2*uc;function pc(o){return o.createBuffer({label:"camera uniform",size:nr,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const ie=new Float32Array(nr/Float32Array.BYTES_PER_ELEMENT);function hc(o,l,h,C,x,E){const M=new Float32Array(16),V=new Float32Array(16);jt.inverse(h,M),jt.inverse(C,V);const B=.5*x*C[0],A=.5*E*C[5];let L=0;ie.set(h,L),L+=16,ie.set(M,L),L+=16,ie.set(C,L),L+=16,ie.set(V,L),L+=16,ie[L++]=x,ie[L++]=E,ie[L++]=B,ie[L++]=A,o.queue.writeBuffer(l,0,ie)}const In=class In{constructor(l,h){tt(this,"uniform_buffer");tt(this,"position",I.create());tt(this,"rotation",jt.create());tt(this,"fovY",45/180*Math.PI);tt(this,"fovX");tt(this,"focal",Vi.create());tt(this,"viewport",Vi.create());tt(this,"view_matrix",jt.identity());tt(this,"view_inv_matrix",jt.identity());tt(this,"proj_matrix",jt.identity());tt(this,"proj_inv_matrix",jt.identity());tt(this,"_negPos",I.create());tt(this,"look",I.create(0,0,1));tt(this,"up",I.create(0,1,0));tt(this,"right",I.create(1,0,0));this.canvas=l,this.device=h,this.uniform_buffer=pc(h),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=ac(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=lc(.01,100,this.fovX,this.fovY),jt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],jt.copy(this.rotation,this.view_matrix),jt.translate(this.view_matrix,this._negPos,this.view_matrix),jt.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(In.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;ie.set(this.view_matrix,l),l+=16,ie.set(this.view_inv_matrix,l),l+=16,ie.set(this.proj_matrix,l),l+=16,ie.set(this.proj_inv_matrix,l),l+=16,ie.set(this.viewport,l),l+=2,ie.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,ie)}set_preset(l){I.copy(l.position,this.position),jt.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};tt(In,"Z_AXIS",I.create(0,0,1));let hs=In;const fc=I.create(1,0,0),_c=I.create(0,1,0);function mc(o,l){const h=o[0],C=o[4],x=o[8],E=o[1],M=o[5],V=o[9],B=o[2],A=o[6],L=o[10],O=h+M+L;let Z,U,X,K;if(O>0){const j=.5/Math.sqrt(O+1);Z=.25/j,U=(A-V)*j,X=(x-B)*j,K=(E-C)*j}else if(h>M&&h>L){const j=2*Math.sqrt(1+h-M-L);Z=(A-V)/j,U=.25*j,X=(C+E)/j,K=(x+B)/j}else if(M>L){const j=2*Math.sqrt(1+M-h-L);Z=(x-B)/j,U=(C+E)/j,X=.25*j,K=(V+A)/j}else{const j=2*Math.sqrt(1+L-h-M);Z=(E-C)/j,U=(x+B)/j,X=(V+A)/j,K=.25*j}return l[0]=U,l[1]=X,l[2]=K,l[3]=Z,l}class bc{constructor(l){tt(this,"element");tt(this,"enabled",!0);tt(this,"center",I.create(0,0,0));tt(this,"up",I.create(0,1,0));tt(this,"rotation",[0,0]);tt(this,"shift",[0,0]);tt(this,"scroll",0);tt(this,"speed",.1);tt(this,"sensitivity",.08);tt(this,"leftPressed",!1);tt(this,"rightPressed",!1);tt(this,"leftDragPans",!1);tt(this,"lastX",0);tt(this,"lastY",0);tt(this,"touches",new Map);tt(this,"lastTouchCenter",null);tt(this,"lastPinchDistance",null);tt(this,"lastTwoFingerAngle",null);tt(this,"lastTouchCount",0);tt(this,"roll",0);tt(this,"_dir",I.create());tt(this,"_right",I.create());tt(this,"_upCam",I.create());tt(this,"_scratch",I.create());tt(this,"_qY",se.create());tt(this,"_qX",se.create());tt(this,"_qRot",se.create());tt(this,"_qLocal",se.create());tt(this,"_qWorldToCam",se.create());tt(this,"_scratchMat3",he.create());tt(this,"bboxMin",null);tt(this,"bboxMax",null);tt(this,"anchor",I.create(0,0,0));tt(this,"downCallback",l=>{var h,C,x,E;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(C=(h=l.target)==null?void 0:h.setPointerCapture)==null||C.call(h,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(E=(x=l.target)==null?void 0:x.setPointerCapture)==null||E.call(x,l.pointerId),l.preventDefault())}});tt(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const h=l.pageX-this.lastX,C=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=C):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=C)});tt(this,"upCallback",l=>{var h,C,x,E;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(C=(h=l.target)==null?void 0:h.releasePointerCapture)==null||C.call(h,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(E=(x=l.target)==null?void 0:x.releasePointerCapture)==null||E.call(x,l.pointerId),l.preventDefault()});tt(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let h=l.deltaY;l.deltaMode===1?h*=16:l.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const h=this.camera.rotation;I.set(h[2],h[6],h[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const h=l.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,l.update_buffer()}setBbox(l,h){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(h[0],h[1],h[2]);const C=(l[0]+h[0])*.5,x=(l[1]+h[1])*.5,E=(l[2]+h[2])*.5;I.set(C,x,E,this.center),I.set(C,x,E,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let C=-1/0,x=1/0,E=!1;for(let M=0;M<3;M++){const V=this._dir[M],B=this.bboxMin[M]-this.camera.position[M],A=this.bboxMax[M]-this.camera.position[M];if(Math.abs(V)>1e-8){const L=B/V,O=A/V;C=Math.max(C,Math.min(L,O)),x=Math.min(x,Math.max(L,O))}else if(B>0||A<0){E=!0;break}}!E&&C<=x&&x>0&&(h=(Math.max(C,0)+x)*.5)}if(h===null||!isFinite(h)||h<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const C=I.dot(this._scratch,this._dir);h=C>.001?C:I.length(this._scratch)}h=Math.max(.1,h),I.scale(this._dir,h,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const C=h.x-this.lastTouchCenter[0],x=h.y-this.lastTouchCenter[1];this.rotation[0]+=C*.3,this.rotation[1]-=x*.3}this.lastTouchCenter=[h.x,h.y]}else if(l===2){const h=Array.from(this.touches.values()),C=(h[0].x+h[1].x)*.5,x=(h[0].y+h[1].y)*.5,E=h[1].x-h[0].x,M=h[1].y-h[0].y,V=Math.hypot(E,M),B=Math.atan2(M,E);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=C-this.lastTouchCenter[0],L=x-this.lastTouchCenter[1],O=Math.hypot(A,L),Z=Math.abs(V-this.lastPinchDistance);let U=B-this.lastTwoFingerAngle;U>Math.PI&&(U-=2*Math.PI),U<-Math.PI&&(U+=2*Math.PI),O>.5&&(this.shift[1]-=A,this.shift[0]+=L),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(V/this.lastPinchDistance)*10),Math.abs(U)>.0087&&(this.roll+=-U)}this.lastTouchCenter=[C,x],this.lastPinchDistance=V,this.lastTwoFingerAngle=B}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const K=h.rotation;this.up[0]=K[1],this.up[1]=K[5],this.up[2]=K[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let C=!1;if(Math.abs(this.roll)>1e-4){const K=h.rotation;I.set(K[2],K[6],K[10],this._scratch),I.normalize(this._scratch,this._scratch),se.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,C=!0}I.subtract(h.position,this.center,this._dir);let x=I.length(this._dir);x<1e-6&&(x=1e-6);const E=Math.exp(Math.log(x)+this.scroll*l*10*this.speed);I.scale(this._dir,E/x,this._dir),x=E;const M=h.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const V=I.create(M[1],M[5],M[9]);I.normalize(V,V),I.length(V)<1e-6&&I.set(0,1,0,V);const B=l*this.speed*.1*x,A=this.shift[1]*B,L=-this.shift[0]*B;I.scale(this._right,A,this._scratch),I.add(this.center,this._scratch,this.center),I.add(h.position,this._scratch,h.position),I.scale(V,L,this._scratch),I.add(this.center,this._scratch,this.center),I.add(h.position,this._scratch,h.position);const O=this.rotation[0]*l*this.sensitivity,Z=this.rotation[1]*l*this.sensitivity;if(Math.abs(O)>1e-5||Math.abs(Z)>1e-5||C){const K=h.rotation;mc(K,this._qWorldToCam),se.fromAxisAngle(fc,-Z,this._qX),se.fromAxisAngle(_c,-O,this._qY),se.multiply(this._qX,this._qY,this._qLocal),se.normalize(this._qLocal,this._qLocal),se.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),se.normalize(this._qWorldToCam,this._qWorldToCam),he.fromQuat(this._qWorldToCam,this._scratchMat3),jt.fromMat3(this._scratchMat3,h.rotation);const j=h.rotation,ut=j[2],z=j[6],N=j[10];h.position[0]=this.center[0]-ut*x,h.position[1]=this.center[1]-z*x,h.position[2]=this.center[2]-N*x,this.up[0]=j[1],this.up[1]=j[5],this.up[2]=j[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,h.position);h.update_buffer();const X=Math.pow(.8,l*60);this.rotation[0]*=X,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=X,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=X,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=X,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=X,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function sr(o){const l=I.create();for(const h of o)I.add(l,h,l);return I.scale(l,1/Math.max(o.length,1),l)}function ir(o,l){const h=he.create();he.inverse(o,h);const C=I.create();return C[0]=h[0]*l[0]+h[4]*l[1]+h[8]*l[2],C[1]=h[1]*l[0]+h[5]*l[1]+h[9]*l[2],C[2]=h[2]*l[0]+h[6]*l[1]+h[10]*l[2],C}function vc(o){const l=o.slice(),h=[1,0,0,0,1,0,0,0,1],C=(B,A)=>l[B*3+A],x=(B,A,L)=>{l[B*3+A]=L},E=(B,A)=>h[B*3+A],M=(B,A,L)=>{h[B*3+A]=L};for(let B=0;B<30;B++){let A=0,L=1,O=Math.abs(C(0,1));if(Math.abs(C(0,2))>O&&(A=0,L=2,O=Math.abs(C(0,2))),Math.abs(C(1,2))>O&&(A=1,L=2,O=Math.abs(C(1,2))),O<1e-12)break;const Z=C(A,A),U=C(L,L),X=C(A,L);let K;Math.abs(Z-U)<1e-30?K=Math.PI/4*Math.sign(X):K=.5*Math.atan2(2*X,Z-U);const j=Math.cos(K),ut=Math.sin(K);for(let z=0;z<3;z++){const N=C(z,A),G=C(z,L);x(z,A,j*N+ut*G),x(z,L,-ut*N+j*G)}for(let z=0;z<3;z++){const N=C(A,z),G=C(L,z);x(A,z,j*N+ut*G),x(L,z,-ut*N+j*G)}for(let z=0;z<3;z++){const N=E(z,A),G=E(z,L);M(z,A,j*N+ut*G),M(z,L,-ut*N+j*G)}}const V=[];for(let B=0;B<3;B++)V.push({val:C(B,B),vec:I.create(E(0,B),E(1,B),E(2,B))});return V.sort((B,A)=>A.val-B.val),{vals:[V[0].val,V[1].val,V[2].val],vecs:[V[0].vec,V[1].vec,V[2].vec]}}function gc(o,l){const h=sr(o);let C=0,x=0,E=0,M=0,V=0,B=0;for(const X of o){const K=X[0]-h[0],j=X[1]-h[1],ut=X[2]-h[2];C+=K*K,x+=K*j,E+=K*ut,M+=j*j,V+=j*ut,B+=ut*ut}const A=[C,x,E,x,M,V,E,V,B],{vecs:L}=vc(A);let O=L[0],Z=L[1],U=L[2];return I.dot(U,l)<0&&(I.scale(U,-1,U),I.scale(Z,-1,Z)),{centroid:h,normal:U,u:O,v:Z}}function wc(o){let l=0,h=0,C=0,x=0,E=0,M=0,V=0,B=0,A=0;for(const[j,ut]of o){const z=-2*j,N=-2*ut,G=1,lt=-(j*j+ut*ut);l+=z*z,h+=z*N,C+=z*G,x+=N*N,E+=N*G,M+=G*G,V+=z*lt,B+=N*lt,A+=G*lt}const L=he.create(l,h,C,h,x,E,C,E,M),O=ir(L,I.create(V,B,A)),Z=O[0],U=O[1],X=O[2],K=Z*Z+U*U-X;return{center:[Z,U],radius:Math.sqrt(Math.max(K,1e-12))}}function xc(o,l){let h=0,C=0,x=0,E=0,M=0,V=0,B=0,A=0,L=0;for(let Z=0;Z<o.length;Z++){const U=o[Z],X=I.normalize(l[Z],I.create()),K=1-X[0]*X[0],j=-X[0]*X[1],ut=-X[0]*X[2],z=1-X[1]*X[1],N=-X[1]*X[2],G=1-X[2]*X[2];h+=K,C+=j,x+=ut,E+=z,M+=N,V+=G,B+=K*U[0]+j*U[1]+ut*U[2],A+=j*U[0]+z*U[1]+N*U[2],L+=ut*U[0]+N*U[1]+G*U[2]}const O=he.create(h,C,x,C,E,M,x,M,V);return ir(O,I.create(B,A,L))}function rr(o,l={}){if(o.length===0)return null;const h=l.tiltDownDeg??8,C=l.radiusScale??1,x=l.alignFirst??!0,E=(l.direction??"ccw")==="ccw"?1:-1,M=o.map(Y=>I.clone(Y.position)),V=o.map(Y=>{const et=Y.rotation;return I.create(et[8],et[9],et[10])}),B=o.map(Y=>{const et=Y.rotation;return I.create(et[4],et[5],et[6])}),A=sr(B),L=I.normalize(I.scale(A,-1,I.create())),{centroid:O,normal:Z,u:U,v:X}=gc(M,L),K=M.map(Y=>{const et=I.sub(Y,O,I.create());return[I.dot(et,U),I.dot(et,X)]}),{center:j,radius:ut}=wc(K),z=ut*C,N=I.add(O,I.add(I.scale(U,j[0],I.create()),I.scale(X,j[1],I.create()),I.create()),I.create()),G=xc(M,V),lt=z*Math.tan(h*Math.PI/180),W=I.sub(G,I.scale(Z,lt,I.create()),I.create());let Q=0;if(x){const Y=I.sub(M[0],N,I.create());Q=Math.atan2(I.dot(Y,X),I.dot(Y,U))/(2*Math.PI)%1,Q<0&&(Q+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${z.toFixed(2)}, tilt=${h}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${Q.toFixed(3)}`),{center:N,radius:z,normal:Z,u:U,v:X,lookAt:W,startPhase:Q,direction:E}}function or(o,l){const h=(o.startPhase+l*o.direction)*2*Math.PI,C=Math.cos(h),x=Math.sin(h),E=I.add(o.center,I.add(I.scale(o.u,o.radius*C,I.create()),I.scale(o.v,o.radius*x,I.create()),I.create()),I.create()),M=I.normalize(I.sub(o.lookAt,E,I.create())),V=I.cross(M,o.normal,I.create());I.length(V)<1e-6&&I.copy(o.u,V),I.normalize(V,V);const B=I.cross(M,V,I.create());I.normalize(B,B);const A=jt.create();return A[0]=V[0],A[1]=B[0],A[2]=M[0],A[3]=0,A[4]=V[1],A[5]=B[1],A[6]=M[1],A[7]=0,A[8]=V[2],A[9]=B[2],A[10]=M[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:E,rotation:A,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function yc(o,l={}){const h=rr(o,l);if(!h)return[];const C=l.numViews??120;return Array.from({length:C},(x,E)=>({...or(h,E/C),img_name:`circle_${E.toString().padStart(4,"0")}`,id:E}))}async function Pc(){if(!("xr"in navigator)||!navigator.xr)return!1;try{return await navigator.xr.isSessionSupported("immersive-vr")}catch{return!1}}async function Sc(o){const l=window.XRGPUBinding??window.XRWebGPUBinding;if(!l)throw new Error("XRGPUBinding is not available in this browser. On Quest Browser you may need to enable it under chrome://flags/#webxr-webgpu-binding (inspect via ADB). Falling back to a WebGL2 XR layer is a future TODO.");const h=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local"],optionalFeatures:["local-floor","bounded-floor","hand-tracking"]}),C=new l(h,o.device),x=C.createProjectionLayer({colorFormat:"rgba8unorm-srgb",depthStencilFormat:"depth24plus",scaleFactor:1});h.updateRenderState({layers:[x]});const E=await h.requestReferenceSpace("local"),M=I.create(0,0,-1.5),V=jt.identity(),B=jt.create(),A=jt.create(),L=new Promise(Z=>{h.addEventListener("end",()=>{o.onExit(),Z()})}),O=performance.now();h.requestAnimationFrame(function Z(U,X){h.requestAnimationFrame(Z);const K=X.getViewerPose(E);if(!K)return;kc(h,X,E,M,V),jt.copy(V,B);const j=I.create(-M[0],-M[1],-M[2]);jt.translate(B,j,B);const ut=o.device.createCommandEncoder({label:"xr-frame"});for(const z of K.views){const N=C.getViewSubImage(x,z),G=N.colorTexture.createView(),lt=N.viewport,W=z.transform.inverse.matrix;jt.multiply(W,B,A),hc(o.device,o.camera.uniform_buffer,A,z.projectionMatrix,lt.width,lt.height),o.renderer.frame(ut,G,!1)}o.device.queue.submit([ut.finish()])}),console.log(`[XR] session started in ${(performance.now()-O).toFixed(1)} ms; ${h.inputSources.length} controllers`),await L}function kc(o,l,h,C,x){const M=.013888888888888888,V=1.5/72,B=.8/72;for(const A of o.inputSources){const L=A.gamepad;if(!L||L.axes.length<2)continue;const O=L.axes[2]??L.axes[0],Z=L.axes[3]??L.axes[1];if(!(Math.abs(O)<.15&&Math.abs(Z)<.15)){if(A.handedness==="left"){const U=Math.abs(O)>.15?O*M:0,X=Math.abs(Z)>.15?-Z*M:0;C[0]+=U,C[1]+=X}else if(A.handedness==="right"&&(Math.abs(Z)>.15&&(C[2]+=Z*V),Math.abs(O)>.15)){const U=-O*B,X=jt.rotateY(jt.identity(),U);jt.multiply(X,x,x)}}}}const ar="BITYMI01",Cc=0,Ec=1,Mc=2,Bc=3,Tc=4,Dc=5;function An(o){const l=(o&32768)>>15,h=(o&31744)>>10,C=o&1023;return h===0?(l?-1:1)*Math.pow(2,-14)*(C/1024):h===31?C?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,h-15)*(1+C/1024)}function Wi(o,l,h,C,x,E){const M=(o-h.width*.5)/C.focal[0],V=-((l-h.height*.5)/C.focal[1]),B=C.rotation,A=B[0],L=B[4],O=B[8],Z=B[1],U=B[5],X=B[9],K=B[2],j=B[6],ut=B[10];let z=M*A+V*Z+K,N=M*L+V*U+j,G=M*O+V*X+ut;const lt=Math.hypot(z,N,G)||1;z/=lt,N/=lt,G/=lt;const W=C.position[0],Q=C.position[1],Y=C.position[2],et=E*.005,_t=et*et,Ut=new Uint32Array(x.buffer,x.byteOffset,x.length),Rt=x.length/8;let Dt=1/0,pt=0,kt=0,wt=0,H=-1;for(let st=0;st<Rt;st++){const It=st*8,Mt=x[It+0]-W,zt=x[It+1]-Q,Tt=x[It+2]-Y,Ot=Mt*z+zt*N+Tt*G;if(Ot<=0)continue;const xt=Mt-Ot*z,ht=zt-Ot*N,Wt=Tt-Ot*G;if(xt*xt+ht*ht+Wt*Wt>=_t||!(Ut[It+7]>>>16&1))continue;const g=Ut[It+5],r=Ut[It+6],f=An(g&65535),d=An(g>>>16&65535),b=An(r&65535),y=An(r>>>16&65535),S=Math.hypot(f,d,b,y)||1,k=f/S,i=d/S,m=b/S,u=y/S,p=2*(i*u+k*m),a=2*(m*u-k*i),_=1-2*(i*i+m*m),w=z*p+N*a+G*_;let v;Math.abs(w)>1e-6?(v=(Mt*p+zt*a+Tt*_)/w,(!isFinite(v)||v<=0)&&(v=Ot)):v=Ot,v<Dt&&(Dt=v,pt=W+v*z,kt=Q+v*N,wt=Y+v*G,H=st)}return H<0?null:[pt,kt,wt]}function lr(o){const l=new Uint8Array(o),h=new TextDecoder().decode(l.subarray(0,8));if(h!==ar)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const C=new DataView(o),x=C.getUint32(8,!0),E=12,M=20;let V=null,B=null,A=null;for(let L=0;L<x;L++){const O=E+L*M,Z=C.getUint32(O+0,!0),U=Number(C.getBigUint64(O+4,!0)),X=Number(C.getBigUint64(O+12,!0)),K=l.slice(U,U+X).buffer;Z===Cc||Z===Ec||Z===Dc?V=K:Z===Mc?B=K:(Z===Bc||Z===Tc)&&(A=K)}if(V===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:V,camerasBuffer:B,atlasBuffer:A}}async function Ac(o,l){var M;const h=await fetch(o);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const C=(()=>{const V=h.headers.get("content-length");return V&&parseInt(V,10)||void 0})(),x=(M=h.body)==null?void 0:M.getReader();let E;if(!x)E=await h.arrayBuffer(),l&&l(E.byteLength,C,0);else{const V=[];let B=0,A=performance.now(),L=0;for(;;){const{done:U,value:X}=await x.read();if(U)break;V.push(X),B+=X.byteLength;const K=performance.now();if(K-A>=150&&l){const j=(B-L)/((K-A)/1e3);l(B,C,j),A=K,L=B}}const O=new Uint8Array(B);let Z=0;for(const U of V)O.set(U,Z),Z+=U.byteLength;E=O.buffer,l&&l(B,C,0)}return E.byteLength>=8&&new TextDecoder().decode(new Uint8Array(E,0,8))===ar?{bundle:lr(E),rawPly:null}:{bundle:null,rawPly:E}}function Rc(o){return new Promise(l=>{const h=document.createElement("input");h.type="file",h.accept=o,h.style.display="none",h.onchange=()=>{var C;return l(((C=h.files)==null?void 0:C[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function Ic(o,l,h){const C=document.getElementById("ui-panel-container"),x=document.getElementById("load-button"),E=document.getElementById("quick-links");x&&(x.onclick=async()=>{const A=await Rc(".ply,.bitymi");if(A)if(C&&(C.style.display="none"),A.name.toLowerCase().endsWith(".bitymi")){const L=await A.arrayBuffer(),{pcBuffer:O}=lr(L),Z=new File([O],A.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),U=await cs(Z,o);l(U)}else{const L=await cs(A,o);l(L)}}),E&&(E.innerHTML="");const M=new URLSearchParams(window.location.search),V=M.get("bundle")??M.get("model_url"),B=M.get("camera_url");V&&(C&&(C.style.display="none"),h(V,B))}async function Lc(o,l,h,C){const x=new hs(o,h),E=new bc(x);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const V="rgba8unorm";l.configure({device:h,format:V,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let B=null;const A=()=>{x.on_update_canvas(),B!==null&&vn(o.width,o.height,h,B.render_settings_buffer)};new ResizeObserver(()=>{const Q=Math.max(.25,N.render_scale),Y=Math.max(1,Math.ceil(Q*o.clientWidth)),et=Math.max(1,Math.ceil(Q*o.clientHeight));o.width===Y&&o.height===et||(o.width=Y,o.height=et,A())}).observe(o);let O=0,Z=0;const U=()=>{(o.width!==O||o.height!==Z)&&(O=o.width,Z=o.height,A())},X=new URLSearchParams(window.location.search);let j=X.get("animation")==="1";E.enabled=!j;const ut=X.get("camera_url"),z=Math.max(1,window.devicePixelRatio||1),N={gaussian_scaling:1,sh_bias:.5,animate:j,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,render_scale:1},G=new Fl.Pane({title:"Config",expanded:!0});G.addInput(N,"animate",{label:"Animate"}).on("change",Q=>{const Y=j;j=Q.value,E.enabled=!Q.value,!Y&&j&&lt.value&&lt.value.onAnimateStart(),Y&&!j&&lt.value&&lt.value.onAnimateStop()}),G.addInput(N,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const lt={value:null};Ic(h,Q=>W(Q,[],null),async(Q,Y)=>{let et=Y??ut,_t,Ut=null;const Rt=Q.toLowerCase();if(Rt.endsWith(".bitymi")||Rt.includes(".bitymi?")){_s("downloading bundle ...");try{const{bundle:pt}=await Ac(Q,(wt,H,st)=>{const It=wt/1048576,Mt=H?H/(1024*1024):void 0,zt=st/(1024*1024),Tt=H?Math.min(99,Math.floor(wt/H*100)):void 0,Ot=Mt?`total ${Mt.toFixed(1)} MB`:"total -- MB",xt=Mt&&Tt!==void 0?`${It.toFixed(1)} MB downloaded (${Tt}%)`:`${It.toFixed(1)} MB downloaded`,ht=`${zt.toFixed(2)} MB/s`;Ne(`downloading bundle ...
${Ot}, ${xt}
${ht}`)});if(!pt)throw new Error("Expected a .bitymi bundle");Ne("parsing PLY ...");const kt=new File([pt.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(_t=await cs(kt,h),!et&&pt.camerasBuffer&&(et=URL.createObjectURL(new Blob([pt.camerasBuffer],{type:"application/json"}))),pt.atlasBuffer){const wt=pt.atlasBuffer.byteLength/1048576;Ne(`uploading atlas ...
${wt.toFixed(1)} MB BC7`);try{const H=Il(pt.atlasBuffer);Ut=Gl(h,H,!0)}catch(H){console.warn("[atlas] failed to parse/upload atlas:",H)}}}catch(pt){throw gn(),pt}}else _t=await zl(Q,h);const Dt=et?await cc(et):[];Dt.length>0&&x.set_preset(Dt[0]),W(_t,Dt,Ut)});function W(Q,Y=[],et=null){const _t=[(Q.bbox.min[0]+Q.bbox.max[0])/2,(Q.bbox.min[1]+Q.bbox.max[1])/2,(Q.bbox.min[2]+Q.bbox.max[2])/2];E.setBbox(Q.bbox.min,Q.bbox.max);const Ut=.5*Math.sqrt((Q.bbox.max[0]-Q.bbox.min[0])**2+(Q.bbox.max[1]-Q.bbox.min[1])**2+(Q.bbox.max[2]-Q.bbox.min[2])**2);function Rt(J,at){const ot=Wi(J,at,o,x,Q.surfel_data,Ut);ot&&(E.setOrbitPivot(ot),console.log(`[pick] orbit pivot → (${ot[0].toFixed(3)}, ${ot[1].toFixed(3)}, ${ot[2].toFixed(3)})`))}function Dt(){const J=o.width*.5,at=o.height*.5,ot=Wi(J,at,o,x,Q.surfel_data,Ut);if(!ot)return;const gt=x.rotation,Pt=gt[2],Et=gt[6],mt=gt[10],vt=ot[0]-x.position[0],Gt=ot[1]-x.position[1],Vt=ot[2]-x.position[2],qt=vt*Pt+Gt*Et+Vt*mt;qt>0&&E.setOrbitDepth(qt)}if(Y.length===0){const J=Q.bbox.max[0]-Q.bbox.min[0],at=Q.bbox.max[1]-Q.bbox.min[1],ot=Q.bbox.max[2]-Q.bbox.min[2],Pt=.5*Math.sqrt(J*J+at*at+ot*ot)*.5;I.set(_t[0]-Pt,_t[1]-Pt,_t[2]-Pt,x.position);const Et=I.create(Pt,Pt,Pt);I.normalize(Et,Et);const mt=I.create(0,1,0),vt=I.create();I.cross(mt,Et,vt),I.normalize(vt,vt);const Gt=I.create();I.cross(Et,vt,Gt);const Vt=he.create(vt[0],Gt[0],Et[0],vt[1],Gt[1],Et[1],vt[2],Gt[2],Et[2]);jt.fromMat3(Vt,x.rotation),x.update_buffer()}E.setCenter(I.create(Q.centroid[0],Q.centroid[1],Q.centroid[2]));const pt=new oc(Q,h,V,x.uniform_buffer,C,et);B=pt;let kt=!1;(async()=>{if(!await Pc())return;const J=document.getElementById("enter-vr-button");J&&(J.style.display="",J.addEventListener("click",async()=>{if(!kt){kt=!0,J.disabled=!0,J.textContent="🥽 In VR…";try{await Sc({device:h,renderer:pt,camera:x,onExit:()=>{kt=!1,J.disabled=!1,J.textContent="🥽 Enter VR",vn(o.width,o.height,h,pt.render_settings_buffer),x.on_update_canvas()}})}catch(at){console.error("[XR] session failed:",at),alert(`XR session failed: ${at.message}`),kt=!1,J.disabled=!1,J.textContent="🥽 Enter VR"}}}))})(),window.__xrActive=()=>kt,vn(o.width,o.height,h,pt.render_settings_buffer),N.atlas_enabled=et!==null;let wt=!1;const H=(()=>{if(et!==null)return`${et.meta.format===2?"BC7":et.meta.format===3?"ASTC 4×4":et.meta.format===5?"RVQ-paired (typeA)":et.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":et.meta.format===7?"BC7 codebook gather (typeD)":`format=${et.meta.format}`} ${et.meta.width}×${et.meta.height}, ${et.meta.n_layers} layers`;const J=h.features.has("texture-compression-bc"),at=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(J?["BC7"]:[]).concat(at?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",H),qi(Q.sh_bias,h,pt.render_settings_buffer),Fi(N.gaussian_scaling,h,pt.render_settings_buffer),N.sh_bias=Q.sh_bias;const st=Q.num_points.toLocaleString(),It={stats:`${st} surfels · -- fps`};G.addMonitor(It,"stats",{label:"Stats",interval:200}),G.addMonitor({atlas:H},"atlas",{label:"Atlas"});const Mt={stages:"— ms · awaiting timestamp data"};G.addMonitor(Mt,"stages",{label:"Stages",interval:500});let zt=null;if(pt.timeQueryEnabled){zt=document.createElement("canvas"),zt.width=280,zt.height=24,zt.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(zt);const J=ot=>{const gt=zt.getContext("2d");if(!gt)return;const Pt=zt.width,Et=zt.height;if(gt.clearRect(0,0,Pt,Et),!ot||ot.total<=0){gt.fillStyle="#888",gt.font="11px ui-monospace,Menlo,monospace",gt.fillText("awaiting GPU timestamps…",8,16);return}const mt=[{label:"cull",ms:ot.cull,color:"#3aa3ff"},{label:"pre",ms:ot.preprocess,color:"#3ad27a"},{label:"sort",ms:ot.sort,color:"#ffa53a"},{label:"render",ms:ot.render,color:"#ff5566"}],vt=Math.max(.001,mt.reduce((Vt,qt)=>Vt+qt.ms,0));let Gt=0;gt.font="10px ui-monospace,Menlo,monospace",gt.textBaseline="middle";for(const Vt of mt){const qt=Vt.ms/vt*Pt;gt.fillStyle=Vt.color,gt.fillRect(Gt,0,qt,Et),qt>=38&&(gt.fillStyle="#000c",gt.fillText(`${Vt.label} ${Vt.ms.toFixed(1)}`,Gt+4,Et/2)),Gt+=qt}};setInterval(()=>{wt||pt.readPerfMetrics({silent:!0}).then(()=>{const ot=pt.lastStageBreakdownMs;J(ot),ot&&(Mt.stages=`${ot.total.toFixed(1)} ms · cull ${ot.cull.toFixed(1)} / pre ${ot.preprocess.toFixed(1)} / sort ${ot.sort.toFixed(1)} / render ${ot.render.toFixed(1)}`)}).catch(ot=>console.warn("[perf] readPerfMetrics failed:",ot))},500)}const Tt=.4,Ot=3,xt=.3;let ht=null,Wt=0,T=0;const $=se.create(),g=he.create();let r=Y.length>0?0:-1;const f={view:Y.length>0?`${r+1} / ${Y.length}: ${Y[r].img_name??r}`:"— no presets —"};G.addMonitor(f,"view",{label:"View",interval:100});function d(J){const at=he.create(J[0],J[1],J[2],J[4],J[5],J[6],J[8],J[9],J[10]);return se.fromMat(at)}function b(J,at){ht={fromPos:I.clone(x.position),toPos:I.clone(J.position),fromQuat:se.normalize(d(x.rotation)),toQuat:se.normalize(d(J.rotation)),target:J,t:0,duration:Math.max(.01,at)}}const y=(J,at=!0)=>{if(Y.length===0)return;r=(J%Y.length+Y.length)%Y.length;const ot=Y[r];at?b(ot,Tt):(x.set_preset(ot),E.resetToCamera(),Dt()),f.view=`${r+1} / ${Y.length}: ${Y[r].img_name??r}`};Y.length>0&&(G.addButton({title:"◀ Prev view"}).on("click",()=>y(r-1)),G.addButton({title:"Next view ▶"}).on("click",()=>y(r+1)));const S=Y.length>0?rr(Y,{tiltDownDeg:15,alignFirst:!0}):null,k=S?yc(Y,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let i=0;const m=12;lt.value={onAnimateStart:()=>{i=0},onAnimateStop:()=>{E.resetToCamera(),Dt()}},G.addInput(N,"render_scale",{label:"Render scale",min:.25,max:z,step:.25}).on("change",J=>{const at=Math.max(.25,J.value),ot=Math.max(1,Math.ceil(at*o.clientWidth)),gt=Math.max(1,Math.ceil(at*o.clientHeight));(o.width!==ot||o.height!==gt)&&(o.width=ot,o.height=gt,A())}),G.addInput(N,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",J=>Fi(J.value,h,pt.render_settings_buffer)),G.addInput(N,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",J=>qi(J.value,h,pt.render_settings_buffer)),G.addInput(N,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",J=>{pt.bgColor=[J.value.r,J.value.g,J.value.b,J.value.a]});const u=et?et.meta.format===3?"Atlas (ASTC)":et.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";G.addInput(N,"atlas_enabled",{label:u}).on("change",J=>pt.setAtlasEnabled(J.value)),G.addInput(N,"bfc",{label:"Backface"}).on("change",J=>Xl({bfc:J.value},h,pt.render_settings_buffer)),G.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(Y.length>0)x.set_preset(Y[0]);else{const J=Q.bbox.max[0]-Q.bbox.min[0],at=Q.bbox.max[1]-Q.bbox.min[1],ot=Q.bbox.max[2]-Q.bbox.min[2],Pt=.5*Math.sqrt(J*J+at*at+ot*ot)*.5;I.set(_t[0]-Pt,_t[1]-Pt,_t[2]-Pt,x.position);const Et=I.create(Pt,Pt,Pt);I.normalize(Et,Et);const mt=I.create();I.cross(I.create(0,1,0),Et,mt),I.normalize(mt,mt);const vt=I.create();I.cross(Et,mt,vt);const Gt=he.create(mt[0],vt[0],Et[0],mt[1],vt[1],Et[1],mt[2],vt[2],Et[2]);jt.fromMat3(Gt,x.rotation),x.update_buffer()}E.resetToCamera(),Dt()});const p={result:"— click Benchmark —"};G.addMonitor(p,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const a={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function _(){const at=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ot of Object.keys(a))if(at.startsWith(ot))return ot;return null}const w=document.createElement("div");w.id="bench-overlay",w.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(w);function v(J,at,ot){const gt=Math.floor(at/Math.max(1,ot)*100),Pt=32,Et=Math.floor(at/Math.max(1,ot)*Pt),mt="█".repeat(Et)+"░".repeat(Pt-Et);w.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${J}</div><div>[${mt}] ${gt}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${at} / ${ot} frames · offscreen · pipelined · no vsync</div>`,w.style.display="block"}function R(){w.style.display="none"}async function F(J=10,at=200){if(wt)return;if(Y.length===0){p.result="no cameras to benchmark";return}wt=!0;const ot=j,gt=N.animate,Pt=new Float32Array(x.position),Et=new Float32Array(x.rotation);j=!1,N.animate=!1,G.refresh(),ht=null,E.enabled=!1;const mt=_(),vt=mt?a[mt]:null,Gt=(vt==null?void 0:vt.w)??o.width,Vt=(vt==null?void 0:vt.h)??o.height,qt=(vt==null?void 0:vt.fovY)??x.getFov(),Kt=mt?`${mt} · ${Gt>=4e3/4+500?"images_4":"images_2"}`:"custom",Xt=o.width,Ht=o.height,ee=x.getFov();o.width=Gt,o.height=Vt,x.setFov(qt),vn(Gt,Vt,h,pt.render_settings_buffer);const Qt=h.createTexture({size:[Gt,Vt,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),be=Qt.createView(),fe=()=>{const Jt=h.createCommandEncoder();pt.frame(Jt,be,!1),h.queue.submit([Jt.finish()])},_e=()=>new Promise(Jt=>setTimeout(Jt,0)),me=20,ve=async(Jt,ue)=>{let ge=0,oe=0;for(v(ue,0,Jt),await _e();oe<Jt;){const we=Math.min(me,Jt-oe),xe=performance.now();for(let je=0;je<we;je++)x.set_preset(Y[(oe+je)%Y.length]),fe();await h.queue.onSubmittedWorkDone();const Yt=performance.now();ge+=Yt-xe,oe+=we,v(ue,oe,Jt),await _e()}return ge};try{await ve(J,"Warming up");const ue=await ve(at,"Benchmarking")/at,ge=1e3/ue,oe=Q.num_points??Q.surfel_data.length/8,we=(qt*180/Math.PI).toFixed(1),xe=`${ge.toFixed(1)} FPS  (${ue.toFixed(2)} ms/frame)
${Gt}×${Vt} · fovY ${we}° · ${Kt}
${oe.toLocaleString()} surfels · ${J}w+${at}b · pipelined`;p.result=xe,console.log("[bench]",xe.replace(/\n/g,"  |  "))}catch(Jt){console.error("[bench] failed:",Jt),p.result=`bench failed: ${Jt}`}finally{R(),Qt.destroy(),o.width=Xt,o.height=Ht,x.setFov(ee),vn(Xt,Ht,h,pt.render_settings_buffer),x.position.set(Pt),x.rotation.set(Et),x.update_buffer(),E.enabled=!ot,j=ot,N.animate=gt,G.refresh(),wt=!1}}G.addButton({title:"📊 Benchmark"}).on("click",()=>F()),document.addEventListener("keydown",J=>{const at=J.key;if(at>="0"&&at<="9"&&Y.length>0){const ot=parseInt(at);ot<Y.length&&y(ot)}else at==="ArrowLeft"||at==="PageUp"?(y(r-1),J.preventDefault()):at==="ArrowRight"||at==="PageDown"?(y(r+1),J.preventDefault()):(at==="d"||at==="D")&&pt.debugReadSortedIndices(30).catch(ot=>console.error("[DEBUG] readback failed:",ot))});function q(J,at){const ot=o.getBoundingClientRect(),gt=window.devicePixelRatio||1;return[(J-ot.left)*gt,(at-ot.top)*gt]}o.addEventListener("dblclick",J=>{const[at,ot]=q(J.clientX,J.clientY);Rt(at,ot)});let ct=0,rt=0,it=0;o.addEventListener("pointerdown",J=>{if(J.pointerType!=="touch")return;const at=performance.now(),ot=at-ct,gt=J.clientX-rt,Pt=J.clientY-it;if(ot>0&&ot<300&&gt*gt+Pt*Pt<40*40){const[Et,mt]=q(J.clientX,J.clientY);Rt(Et,mt),ct=0}else ct=at,rt=J.clientX,it=J.clientY});function ft(){return M}let yt=performance.now(),dt=60,bt=Promise.resolve(),Ct=0;async function At(){var Et;const J=performance.now(),at=Math.min((J-yt)/1e3,.1);if(yt=J,at>0){const mt=((Et=pt.lastStageBreakdownMs)==null?void 0:Et.total)??0,vt=mt>.5?1e3/mt:1/at;dt=dt*.9+vt*.1,It.stats=`${st} surfels · ${Math.round(dt)} fps`}if(wt||kt){requestAnimationFrame(At);return}if(ft()&&(ht||j)&&(ht=null,E.resetToCamera(),Dt(),j&&(j=!1,N.animate=!1,G.refresh())),j&&N.animateMode==="circle"&&S){i+=at/m,i>=1&&(i-=1);const mt=or(S,i);x.set_preset(mt),E.update(at);const vt=h.createCommandEncoder();pt.frame(vt,l.getCurrentTexture().createView()),h.queue.submit([vt.finish()]),Ct++,Ct===2&&gn(),requestAnimationFrame(At);return}if(ht){ht.t+=at/ht.duration;const mt=Math.min(1,ht.t),vt=mt*mt*(3-2*mt);I.lerp(ht.fromPos,ht.toPos,vt,x.position),se.slerp(ht.fromQuat,ht.toQuat,vt,$),he.fromQuat($,g),jt.fromMat3(g,x.rotation),x.update_buffer(),ht.t>=1&&(x.set_preset(ht.target),ht=null,j?Y.length>0&&(Wt=xt):(E.resetToCamera(),Dt()))}else if(j&&!ft()){const mt=N.animateMode==="circle"&&k.length>0,vt=mt?k:Y;if(vt.length!==0){if(Wt-=at,Wt<=0){const Vt=((mt?T:r)+1)%vt.length;mt?T=Vt:r=Vt;const qt=mt?Ot/8:Ot;b(vt[Vt],qt),mt||(f.view=`${r+1} / ${Y.length}: ${Y[r].img_name??r}`)}}}E.update(at),U(),await bt;const ot=h.createCommandEncoder(),gt=l.getCurrentTexture().createView(),Pt=window.__halloumiProgress??(mt=>{});Ct<3&&Pt("flat-frame#"+Ct+" encoding…"),pt.frame(ot,gt),Ct<3&&Pt("flat-frame#"+Ct+" submitting…"),h.queue.submit([ot.finish()]),Ct<3&&Pt("flat-frame#"+Ct+" submit OK"),bt=h.queue.onSubmittedWorkDone().then(()=>{Ct<=3&&Pt("flat-frame#"+(Ct-1)+" GPU work done")}),Ct++,Ct===2&&gn(),requestAnimationFrame(At)}requestAnimationFrame(At)}}(function(){let l="dev";for(const C of Array.from(document.querySelectorAll('script[type="module"]'))){const E=C.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(E){l=E[1];break}}const h=document.createElement("div");h.textContent="v "+l,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();function Oe(o){let l=document.getElementById("halloumi-xr-error");l||(l=document.createElement("div"),l.id="halloumi-xr-error",l.style.cssText="position:fixed;top:0;left:0;right:0;padding:1em;background:#3a0000;color:#ffb0b0;font-family:system-ui,monospace;font-size:0.85rem;z-index:9999;white-space:pre-wrap;overflow-x:auto;max-height:60vh;border-bottom:2px solid #7a0000",document.body.appendChild(l)),l.textContent+=(l.textContent?`
`:"")+o,console.error(o)}const ji=[];function qe(o){const l=performance.now().toFixed(0);ji.push(`[${l}ms] ${o}`);let h=document.getElementById("halloumi-xr-progress");h||(h=document.createElement("div"),h.id="halloumi-xr-progress",h.style.cssText="position:fixed;bottom:20px;left:0;right:0;padding:0.6em;background:rgba(0,20,40,0.85);color:#a0c8ff;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:0.75rem;z-index:9998;white-space:pre-wrap;max-height:35vh;overflow-y:auto;border-top:1px solid #204080",document.body.appendChild(h)),h.textContent=ji.slice(-40).join(`
`),console.log(o)}window.__halloumiProgress=qe;(async()=>{var o;try{if(qe("boot: main.ts entered"),navigator.gpu===void 0){Oe("WebGPU is not supported in this browser. (navigator.gpu is undefined)");return}qe("requesting adapter…");const l=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(l===null){Oe("WebGPU adapter unavailable. requestAdapter returned null.");return}qe("adapter OK; vendor="+(((o=l.info)==null?void 0:o.vendor)??"?"));const h=[];l.features.has("timestamp-query")&&h.push("timestamp-query"),l.features.has("texture-compression-bc")&&h.push("texture-compression-bc"),l.features.has("texture-compression-astc")&&h.push("texture-compression-astc"),console.log("[adapter]",l.info??"(unknown)"),console.log("[adapter] features:",Array.from(l.features)),console.log("[adapter] BC7:",l.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",l.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:l.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize,maxTextureDimension2D:l.limits.maxTextureDimension2D});const C=10,x=Math.min(C,l.limits.maxStorageBuffersPerShaderStage);x<C&&console.warn(`[adapter] adapter exposes only ${x} storage buffers per stage; viewer wants ${C}. Cull stage may fail to compile.`),qe("requesting device (features="+h.join(",")+")…");let E;try{E=await l.requestDevice({requiredFeatures:h,requiredLimits:{maxStorageBuffersPerShaderStage:x,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize}}),qe("device OK")}catch(B){Oe(`WebGPU device creation FAILED.
error: ${B.message}

Adapter info: `+JSON.stringify(l.info??{})+`
Requested features: `+h.join(", ")+`
Requested maxStorageBuffersPerShaderStage: `+x);return}E.addEventListener("uncapturederror",B=>{const A=B.error;Oe(`WebGPU uncaptured error (${A.constructor.name}):
${A.message}`)}),E.lost.then(B=>{Oe(`WebGPU device LOST: ${B.reason} — ${B.message}`)});const M=document.querySelector("#webgpu-canvas");Dl(M!==null);const V=M.getContext("webgpu");if(V===null){Oe('canvas.getContext("webgpu") returned null.');return}qe("canvas ctx OK; entering splat-app init…"),Lc(M,V,E,h)}catch(l){Oe(`Bootstrap failed: ${l.message}
${l.stack??""}`)}})();
