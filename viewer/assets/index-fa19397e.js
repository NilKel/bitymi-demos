var xl=Object.defineProperty;var yl=(o,l,f)=>l in o?xl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var G=(o,l,f)=>(yl(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))S(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&S(B)}).observe(document,{childList:!0,subtree:!0});function f(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function S(g){if(g.ep)return;g.ep=!0;const C=f(g);fetch(g.href,C)}})();function Pl(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const Sl=Pl(Array,o=>o.fill(0));let De=1e-6;function El(o){function l(P=0,k=0){const w=new o(2);return P!==void 0&&(w[0]=P,k!==void 0&&(w[1]=k)),w}const f=l;function S(P,k,w){const r=w??new o(2);return r[0]=P,r[1]=k,r}function g(P,k){const w=k??new o(2);return w[0]=Math.ceil(P[0]),w[1]=Math.ceil(P[1]),w}function C(P,k){const w=k??new o(2);return w[0]=Math.floor(P[0]),w[1]=Math.floor(P[1]),w}function B(P,k){const w=k??new o(2);return w[0]=Math.round(P[0]),w[1]=Math.round(P[1]),w}function W(P,k=0,w=1,r){const m=r??new o(2);return m[0]=Math.min(w,Math.max(k,P[0])),m[1]=Math.min(w,Math.max(k,P[1])),m}function I(P,k,w){const r=w??new o(2);return r[0]=P[0]+k[0],r[1]=P[1]+k[1],r}function U(P,k,w,r){const m=r??new o(2);return m[0]=P[0]+k[0]*w,m[1]=P[1]+k[1]*w,m}function q(P,k){const w=P[0],r=P[1],m=k[0],p=k[1],c=Math.sqrt(w*w+r*r),a=Math.sqrt(m*m+p*p),d=c*a,x=d&&_e(P,k)/d;return Math.acos(x)}function R(P,k,w){const r=w??new o(2);return r[0]=P[0]-k[0],r[1]=P[1]-k[1],r}const Z=R;function X(P,k){return Math.abs(P[0]-k[0])<De&&Math.abs(P[1]-k[1])<De}function V(P,k){return P[0]===k[0]&&P[1]===k[1]}function L(P,k,w,r){const m=r??new o(2);return m[0]=P[0]+w*(k[0]-P[0]),m[1]=P[1]+w*(k[1]-P[1]),m}function O(P,k,w,r){const m=r??new o(2);return m[0]=P[0]+w[0]*(k[0]-P[0]),m[1]=P[1]+w[1]*(k[1]-P[1]),m}function F(P,k,w){const r=w??new o(2);return r[0]=Math.max(P[0],k[0]),r[1]=Math.max(P[1],k[1]),r}function j(P,k,w){const r=w??new o(2);return r[0]=Math.min(P[0],k[0]),r[1]=Math.min(P[1],k[1]),r}function T(P,k,w){const r=w??new o(2);return r[0]=P[0]*k,r[1]=P[1]*k,r}const H=T;function oe(P,k,w){const r=w??new o(2);return r[0]=P[0]/k,r[1]=P[1]/k,r}function we(P,k){const w=k??new o(2);return w[0]=1/P[0],w[1]=1/P[1],w}const ce=we;function se(P,k,w){const r=w??new o(3),m=P[0]*k[1]-P[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function _e(P,k){return P[0]*k[0]+P[1]*k[1]}function ne(P){const k=P[0],w=P[1];return Math.sqrt(k*k+w*w)}const Ne=ne;function Ge(P){const k=P[0],w=P[1];return k*k+w*w}const Ie=Ge;function Me(P,k){const w=P[0]-k[0],r=P[1]-k[1];return Math.sqrt(w*w+r*r)}const ge=Me;function ye(P,k){const w=P[0]-k[0],r=P[1]-k[1];return w*w+r*r}const le=ye;function re(P,k){const w=k??new o(2),r=P[0],m=P[1],p=Math.sqrt(r*r+m*m);return p>1e-5?(w[0]=r/p,w[1]=m/p):(w[0]=0,w[1]=0),w}function ie(P,k){const w=k??new o(2);return w[0]=-P[0],w[1]=-P[1],w}function me(P,k){const w=k??new o(2);return w[0]=P[0],w[1]=P[1],w}const he=me;function ve(P,k,w){const r=w??new o(2);return r[0]=P[0]*k[0],r[1]=P[1]*k[1],r}const Ae=ve;function xe(P,k,w){const r=w??new o(2);return r[0]=P[0]/k[0],r[1]=P[1]/k[1],r}const Ce=xe;function Oe(P=1,k){const w=k??new o(2),r=Math.random()*2*Math.PI;return w[0]=Math.cos(r)*P,w[1]=Math.sin(r)*P,w}function M(P){const k=P??new o(2);return k[0]=0,k[1]=0,k}function Y(P,k,w){const r=w??new o(2),m=P[0],p=P[1];return r[0]=m*k[0]+p*k[4]+k[12],r[1]=m*k[1]+p*k[5]+k[13],r}function y(P,k,w){const r=w??new o(2),m=P[0],p=P[1];return r[0]=k[0]*m+k[4]*p+k[8],r[1]=k[1]*m+k[5]*p+k[9],r}function i(P,k,w,r){const m=r??new o(2),p=P[0]-k[0],c=P[1]-k[1],a=Math.sin(w),d=Math.cos(w);return m[0]=p*d-c*a+k[0],m[1]=p*a+c*d+k[1],m}function _(P,k,w){const r=w??new o(2);return re(P,r),T(r,k,r)}function h(P,k,w){const r=w??new o(2);return ne(P)>k?_(P,k,r):me(P,r)}function b(P,k,w){const r=w??new o(2);return L(P,k,.5,r)}return{create:l,fromValues:f,set:S,ceil:g,floor:C,round:B,clamp:W,add:I,addScaled:U,angle:q,subtract:R,sub:Z,equalsApproximately:X,equals:V,lerp:L,lerpV:O,max:F,min:j,mulScalar:T,scale:H,divScalar:oe,inverse:we,invert:ce,cross:se,dot:_e,length:ne,len:Ne,lengthSq:Ge,lenSq:Ie,distance:Me,dist:ge,distanceSq:ye,distSq:le,normalize:re,negate:ie,copy:me,clone:he,multiply:ve,mul:Ae,divide:xe,div:Ce,random:Oe,zero:M,transformMat4:Y,transformMat3:y,rotate:i,setLength:_,truncate:h,midpoint:b}}const Hr=new Map;function pi(o){let l=Hr.get(o);return l||(l=El(o),Hr.set(o,l)),l}function Cl(o){function l(a,d,x){const v=new o(3);return a!==void 0&&(v[0]=a,d!==void 0&&(v[1]=d,x!==void 0&&(v[2]=x))),v}const f=l;function S(a,d,x,v){const D=v??new o(3);return D[0]=a,D[1]=d,D[2]=x,D}function g(a,d){const x=d??new o(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function C(a,d){const x=d??new o(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function B(a,d){const x=d??new o(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function W(a,d=0,x=1,v){const D=v??new o(3);return D[0]=Math.min(x,Math.max(d,a[0])),D[1]=Math.min(x,Math.max(d,a[1])),D[2]=Math.min(x,Math.max(d,a[2])),D}function I(a,d,x){const v=x??new o(3);return v[0]=a[0]+d[0],v[1]=a[1]+d[1],v[2]=a[2]+d[2],v}function U(a,d,x,v){const D=v??new o(3);return D[0]=a[0]+d[0]*x,D[1]=a[1]+d[1]*x,D[2]=a[2]+d[2]*x,D}function q(a,d){const x=a[0],v=a[1],D=a[2],$=d[0],K=d[1],N=d[2],Q=Math.sqrt(x*x+v*v+D*D),ee=Math.sqrt($*$+K*K+N*N),de=Q*ee,be=de&&_e(a,d)/de;return Math.acos(be)}function R(a,d,x){const v=x??new o(3);return v[0]=a[0]-d[0],v[1]=a[1]-d[1],v[2]=a[2]-d[2],v}const Z=R;function X(a,d){return Math.abs(a[0]-d[0])<De&&Math.abs(a[1]-d[1])<De&&Math.abs(a[2]-d[2])<De}function V(a,d){return a[0]===d[0]&&a[1]===d[1]&&a[2]===d[2]}function L(a,d,x,v){const D=v??new o(3);return D[0]=a[0]+x*(d[0]-a[0]),D[1]=a[1]+x*(d[1]-a[1]),D[2]=a[2]+x*(d[2]-a[2]),D}function O(a,d,x,v){const D=v??new o(3);return D[0]=a[0]+x[0]*(d[0]-a[0]),D[1]=a[1]+x[1]*(d[1]-a[1]),D[2]=a[2]+x[2]*(d[2]-a[2]),D}function F(a,d,x){const v=x??new o(3);return v[0]=Math.max(a[0],d[0]),v[1]=Math.max(a[1],d[1]),v[2]=Math.max(a[2],d[2]),v}function j(a,d,x){const v=x??new o(3);return v[0]=Math.min(a[0],d[0]),v[1]=Math.min(a[1],d[1]),v[2]=Math.min(a[2],d[2]),v}function T(a,d,x){const v=x??new o(3);return v[0]=a[0]*d,v[1]=a[1]*d,v[2]=a[2]*d,v}const H=T;function oe(a,d,x){const v=x??new o(3);return v[0]=a[0]/d,v[1]=a[1]/d,v[2]=a[2]/d,v}function we(a,d){const x=d??new o(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const ce=we;function se(a,d,x){const v=x??new o(3),D=a[2]*d[0]-a[0]*d[2],$=a[0]*d[1]-a[1]*d[0];return v[0]=a[1]*d[2]-a[2]*d[1],v[1]=D,v[2]=$,v}function _e(a,d){return a[0]*d[0]+a[1]*d[1]+a[2]*d[2]}function ne(a){const d=a[0],x=a[1],v=a[2];return Math.sqrt(d*d+x*x+v*v)}const Ne=ne;function Ge(a){const d=a[0],x=a[1],v=a[2];return d*d+x*x+v*v}const Ie=Ge;function Me(a,d){const x=a[0]-d[0],v=a[1]-d[1],D=a[2]-d[2];return Math.sqrt(x*x+v*v+D*D)}const ge=Me;function ye(a,d){const x=a[0]-d[0],v=a[1]-d[1],D=a[2]-d[2];return x*x+v*v+D*D}const le=ye;function re(a,d){const x=d??new o(3),v=a[0],D=a[1],$=a[2],K=Math.sqrt(v*v+D*D+$*$);return K>1e-5?(x[0]=v/K,x[1]=D/K,x[2]=$/K):(x[0]=0,x[1]=0,x[2]=0),x}function ie(a,d){const x=d??new o(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function me(a,d){const x=d??new o(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const he=me;function ve(a,d,x){const v=x??new o(3);return v[0]=a[0]*d[0],v[1]=a[1]*d[1],v[2]=a[2]*d[2],v}const Ae=ve;function xe(a,d,x){const v=x??new o(3);return v[0]=a[0]/d[0],v[1]=a[1]/d[1],v[2]=a[2]/d[2],v}const Ce=xe;function Oe(a=1,d){const x=d??new o(3),v=Math.random()*2*Math.PI,D=Math.random()*2-1,$=Math.sqrt(1-D*D)*a;return x[0]=Math.cos(v)*$,x[1]=Math.sin(v)*$,x[2]=D*a,x}function M(a){const d=a??new o(3);return d[0]=0,d[1]=0,d[2]=0,d}function Y(a,d,x){const v=x??new o(3),D=a[0],$=a[1],K=a[2],N=d[3]*D+d[7]*$+d[11]*K+d[15]||1;return v[0]=(d[0]*D+d[4]*$+d[8]*K+d[12])/N,v[1]=(d[1]*D+d[5]*$+d[9]*K+d[13])/N,v[2]=(d[2]*D+d[6]*$+d[10]*K+d[14])/N,v}function y(a,d,x){const v=x??new o(3),D=a[0],$=a[1],K=a[2];return v[0]=D*d[0*4+0]+$*d[1*4+0]+K*d[2*4+0],v[1]=D*d[0*4+1]+$*d[1*4+1]+K*d[2*4+1],v[2]=D*d[0*4+2]+$*d[1*4+2]+K*d[2*4+2],v}function i(a,d,x){const v=x??new o(3),D=a[0],$=a[1],K=a[2];return v[0]=D*d[0]+$*d[4]+K*d[8],v[1]=D*d[1]+$*d[5]+K*d[9],v[2]=D*d[2]+$*d[6]+K*d[10],v}function _(a,d,x){const v=x??new o(3),D=d[0],$=d[1],K=d[2],N=d[3]*2,Q=a[0],ee=a[1],de=a[2],be=$*de-K*ee,pe=K*Q-D*de,ue=D*ee-$*Q;return v[0]=Q+be*N+($*ue-K*pe)*2,v[1]=ee+pe*N+(K*be-D*ue)*2,v[2]=de+ue*N+(D*pe-$*be)*2,v}function h(a,d){const x=d??new o(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function b(a,d,x){const v=x??new o(3),D=d*4;return v[0]=a[D+0],v[1]=a[D+1],v[2]=a[D+2],v}function P(a,d){const x=d??new o(3),v=a[0],D=a[1],$=a[2],K=a[4],N=a[5],Q=a[6],ee=a[8],de=a[9],be=a[10];return x[0]=Math.sqrt(v*v+D*D+$*$),x[1]=Math.sqrt(K*K+N*N+Q*Q),x[2]=Math.sqrt(ee*ee+de*de+be*be),x}function k(a,d,x,v){const D=v??new o(3),$=[],K=[];return $[0]=a[0]-d[0],$[1]=a[1]-d[1],$[2]=a[2]-d[2],K[0]=$[0],K[1]=$[1]*Math.cos(x)-$[2]*Math.sin(x),K[2]=$[1]*Math.sin(x)+$[2]*Math.cos(x),D[0]=K[0]+d[0],D[1]=K[1]+d[1],D[2]=K[2]+d[2],D}function w(a,d,x,v){const D=v??new o(3),$=[],K=[];return $[0]=a[0]-d[0],$[1]=a[1]-d[1],$[2]=a[2]-d[2],K[0]=$[2]*Math.sin(x)+$[0]*Math.cos(x),K[1]=$[1],K[2]=$[2]*Math.cos(x)-$[0]*Math.sin(x),D[0]=K[0]+d[0],D[1]=K[1]+d[1],D[2]=K[2]+d[2],D}function r(a,d,x,v){const D=v??new o(3),$=[],K=[];return $[0]=a[0]-d[0],$[1]=a[1]-d[1],$[2]=a[2]-d[2],K[0]=$[0]*Math.cos(x)-$[1]*Math.sin(x),K[1]=$[0]*Math.sin(x)+$[1]*Math.cos(x),K[2]=$[2],D[0]=K[0]+d[0],D[1]=K[1]+d[1],D[2]=K[2]+d[2],D}function m(a,d,x){const v=x??new o(3);return re(a,v),T(v,d,v)}function p(a,d,x){const v=x??new o(3);return ne(a)>d?m(a,d,v):me(a,v)}function c(a,d,x){const v=x??new o(3);return L(a,d,.5,v)}return{create:l,fromValues:f,set:S,ceil:g,floor:C,round:B,clamp:W,add:I,addScaled:U,angle:q,subtract:R,sub:Z,equalsApproximately:X,equals:V,lerp:L,lerpV:O,max:F,min:j,mulScalar:T,scale:H,divScalar:oe,inverse:we,invert:ce,cross:se,dot:_e,length:ne,len:Ne,lengthSq:Ge,lenSq:Ie,distance:Me,dist:ge,distanceSq:ye,distSq:le,normalize:re,negate:ie,copy:me,clone:he,multiply:ve,mul:Ae,divide:xe,div:Ce,random:Oe,zero:M,transformMat4:Y,transformMat4Upper3x3:y,transformMat3:i,transformQuat:_,getTranslation:h,getAxis:b,getScaling:P,rotateX:k,rotateY:w,rotateZ:r,setLength:m,truncate:p,midpoint:c}}const Yr=new Map;function is(o){let l=Yr.get(o);return l||(l=Cl(o),Yr.set(o,l)),l}function kl(o){const l=pi(o),f=is(o);function S(i,_,h,b,P,k,w,r,m){const p=new o(12);return p[3]=0,p[7]=0,p[11]=0,i!==void 0&&(p[0]=i,_!==void 0&&(p[1]=_,h!==void 0&&(p[2]=h,b!==void 0&&(p[4]=b,P!==void 0&&(p[5]=P,k!==void 0&&(p[6]=k,w!==void 0&&(p[8]=w,r!==void 0&&(p[9]=r,m!==void 0&&(p[10]=m))))))))),p}function g(i,_,h,b,P,k,w,r,m,p){const c=p??new o(12);return c[0]=i,c[1]=_,c[2]=h,c[3]=0,c[4]=b,c[5]=P,c[6]=k,c[7]=0,c[8]=w,c[9]=r,c[10]=m,c[11]=0,c}function C(i,_){const h=_??new o(12);return h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=0,h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=0,h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=0,h}function B(i,_){const h=_??new o(12),b=i[0],P=i[1],k=i[2],w=i[3],r=b+b,m=P+P,p=k+k,c=b*r,a=P*r,d=P*m,x=k*r,v=k*m,D=k*p,$=w*r,K=w*m,N=w*p;return h[0]=1-d-D,h[1]=a+N,h[2]=x-K,h[3]=0,h[4]=a-N,h[5]=1-c-D,h[6]=v+$,h[7]=0,h[8]=x+K,h[9]=v-$,h[10]=1-c-d,h[11]=0,h}function W(i,_){const h=_??new o(12);return h[0]=-i[0],h[1]=-i[1],h[2]=-i[2],h[4]=-i[4],h[5]=-i[5],h[6]=-i[6],h[8]=-i[8],h[9]=-i[9],h[10]=-i[10],h}function I(i,_,h){const b=h??new o(12);return b[0]=i[0]*_,b[1]=i[1]*_,b[2]=i[2]*_,b[4]=i[4]*_,b[5]=i[5]*_,b[6]=i[6]*_,b[8]=i[8]*_,b[9]=i[9]*_,b[10]=i[10]*_,b}const U=I;function q(i,_,h){const b=h??new o(12);return b[0]=i[0]+_[0],b[1]=i[1]+_[1],b[2]=i[2]+_[2],b[4]=i[4]+_[4],b[5]=i[5]+_[5],b[6]=i[6]+_[6],b[8]=i[8]+_[8],b[9]=i[9]+_[9],b[10]=i[10]+_[10],b}function R(i,_){const h=_??new o(12);return h[0]=i[0],h[1]=i[1],h[2]=i[2],h[4]=i[4],h[5]=i[5],h[6]=i[6],h[8]=i[8],h[9]=i[9],h[10]=i[10],h}const Z=R;function X(i,_){return Math.abs(i[0]-_[0])<De&&Math.abs(i[1]-_[1])<De&&Math.abs(i[2]-_[2])<De&&Math.abs(i[4]-_[4])<De&&Math.abs(i[5]-_[5])<De&&Math.abs(i[6]-_[6])<De&&Math.abs(i[8]-_[8])<De&&Math.abs(i[9]-_[9])<De&&Math.abs(i[10]-_[10])<De}function V(i,_){return i[0]===_[0]&&i[1]===_[1]&&i[2]===_[2]&&i[4]===_[4]&&i[5]===_[5]&&i[6]===_[6]&&i[8]===_[8]&&i[9]===_[9]&&i[10]===_[10]}function L(i){const _=i??new o(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function O(i,_){const h=_??new o(12);if(h===i){let d;return d=i[1],i[1]=i[4],i[4]=d,d=i[2],i[2]=i[8],i[8]=d,d=i[6],i[6]=i[9],i[9]=d,h}const b=i[0*4+0],P=i[0*4+1],k=i[0*4+2],w=i[1*4+0],r=i[1*4+1],m=i[1*4+2],p=i[2*4+0],c=i[2*4+1],a=i[2*4+2];return h[0]=b,h[1]=w,h[2]=p,h[4]=P,h[5]=r,h[6]=c,h[8]=k,h[9]=m,h[10]=a,h}function F(i,_){const h=_??new o(12),b=i[0*4+0],P=i[0*4+1],k=i[0*4+2],w=i[1*4+0],r=i[1*4+1],m=i[1*4+2],p=i[2*4+0],c=i[2*4+1],a=i[2*4+2],d=a*r-m*c,x=-a*w+m*p,v=c*w-r*p,D=1/(b*d+P*x+k*v);return h[0]=d*D,h[1]=(-a*P+k*c)*D,h[2]=(m*P-k*r)*D,h[4]=x*D,h[5]=(a*b-k*p)*D,h[6]=(-m*b+k*w)*D,h[8]=v*D,h[9]=(-c*b+P*p)*D,h[10]=(r*b-P*w)*D,h}function j(i){const _=i[0],h=i[0*4+1],b=i[0*4+2],P=i[1*4+0],k=i[1*4+1],w=i[1*4+2],r=i[2*4+0],m=i[2*4+1],p=i[2*4+2];return _*(k*p-m*w)-P*(h*p-m*b)+r*(h*w-k*b)}const T=F;function H(i,_,h){const b=h??new o(12),P=i[0],k=i[1],w=i[2],r=i[4+0],m=i[4+1],p=i[4+2],c=i[8+0],a=i[8+1],d=i[8+2],x=_[0],v=_[1],D=_[2],$=_[4+0],K=_[4+1],N=_[4+2],Q=_[8+0],ee=_[8+1],de=_[8+2];return b[0]=P*x+r*v+c*D,b[1]=k*x+m*v+a*D,b[2]=w*x+p*v+d*D,b[4]=P*$+r*K+c*N,b[5]=k*$+m*K+a*N,b[6]=w*$+p*K+d*N,b[8]=P*Q+r*ee+c*de,b[9]=k*Q+m*ee+a*de,b[10]=w*Q+p*ee+d*de,b}const oe=H;function we(i,_,h){const b=h??L();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=_[0],b[9]=_[1],b[10]=1,b}function ce(i,_){const h=_??l.create();return h[0]=i[8],h[1]=i[9],h}function se(i,_,h){const b=h??l.create(),P=_*4;return b[0]=i[P+0],b[1]=i[P+1],b}function _e(i,_,h,b){const P=b===i?i:R(i,b),k=h*4;return P[k+0]=_[0],P[k+1]=_[1],P}function ne(i,_){const h=_??l.create(),b=i[0],P=i[1],k=i[4],w=i[5];return h[0]=Math.sqrt(b*b+P*P),h[1]=Math.sqrt(k*k+w*w),h}function Ne(i,_){const h=_??f.create(),b=i[0],P=i[1],k=i[2],w=i[4],r=i[5],m=i[6],p=i[8],c=i[9],a=i[10];return h[0]=Math.sqrt(b*b+P*P+k*k),h[1]=Math.sqrt(w*w+r*r+m*m),h[2]=Math.sqrt(p*p+c*c+a*a),h}function Ge(i,_){const h=_??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=i[0],h[9]=i[1],h[10]=1,h}function Ie(i,_,h){const b=h??new o(12),P=_[0],k=_[1],w=i[0],r=i[1],m=i[2],p=i[1*4+0],c=i[1*4+1],a=i[1*4+2],d=i[2*4+0],x=i[2*4+1],v=i[2*4+2];return i!==b&&(b[0]=w,b[1]=r,b[2]=m,b[4]=p,b[5]=c,b[6]=a),b[8]=w*P+p*k+d,b[9]=r*P+c*k+x,b[10]=m*P+a*k+v,b}function Me(i,_){const h=_??new o(12),b=Math.cos(i),P=Math.sin(i);return h[0]=b,h[1]=P,h[2]=0,h[4]=-P,h[5]=b,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function ge(i,_,h){const b=h??new o(12),P=i[0*4+0],k=i[0*4+1],w=i[0*4+2],r=i[1*4+0],m=i[1*4+1],p=i[1*4+2],c=Math.cos(_),a=Math.sin(_);return b[0]=c*P+a*r,b[1]=c*k+a*m,b[2]=c*w+a*p,b[4]=c*r-a*P,b[5]=c*m-a*k,b[6]=c*p-a*w,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ye(i,_){const h=_??new o(12),b=Math.cos(i),P=Math.sin(i);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=b,h[6]=P,h[8]=0,h[9]=-P,h[10]=b,h}function le(i,_,h){const b=h??new o(12),P=i[4],k=i[5],w=i[6],r=i[8],m=i[9],p=i[10],c=Math.cos(_),a=Math.sin(_);return b[4]=c*P+a*r,b[5]=c*k+a*m,b[6]=c*w+a*p,b[8]=c*r-a*P,b[9]=c*m-a*k,b[10]=c*p-a*w,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function re(i,_){const h=_??new o(12),b=Math.cos(i),P=Math.sin(i);return h[0]=b,h[1]=0,h[2]=-P,h[4]=0,h[5]=1,h[6]=0,h[8]=P,h[9]=0,h[10]=b,h}function ie(i,_,h){const b=h??new o(12),P=i[0*4+0],k=i[0*4+1],w=i[0*4+2],r=i[2*4+0],m=i[2*4+1],p=i[2*4+2],c=Math.cos(_),a=Math.sin(_);return b[0]=c*P-a*r,b[1]=c*k-a*m,b[2]=c*w-a*p,b[8]=c*r+a*P,b[9]=c*m+a*k,b[10]=c*p+a*w,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const me=Me,he=ge;function ve(i,_){const h=_??new o(12);return h[0]=i[0],h[1]=0,h[2]=0,h[4]=0,h[5]=i[1],h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function Ae(i,_,h){const b=h??new o(12),P=_[0],k=_[1];return b[0]=P*i[0*4+0],b[1]=P*i[0*4+1],b[2]=P*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function xe(i,_){const h=_??new o(12);return h[0]=i[0],h[1]=0,h[2]=0,h[4]=0,h[5]=i[1],h[6]=0,h[8]=0,h[9]=0,h[10]=i[2],h}function Ce(i,_,h){const b=h??new o(12),P=_[0],k=_[1],w=_[2];return b[0]=P*i[0*4+0],b[1]=P*i[0*4+1],b[2]=P*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],b[8]=w*i[2*4+0],b[9]=w*i[2*4+1],b[10]=w*i[2*4+2],b}function Oe(i,_){const h=_??new o(12);return h[0]=i,h[1]=0,h[2]=0,h[4]=0,h[5]=i,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function M(i,_,h){const b=h??new o(12);return b[0]=_*i[0*4+0],b[1]=_*i[0*4+1],b[2]=_*i[0*4+2],b[4]=_*i[1*4+0],b[5]=_*i[1*4+1],b[6]=_*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Y(i,_){const h=_??new o(12);return h[0]=i,h[1]=0,h[2]=0,h[4]=0,h[5]=i,h[6]=0,h[8]=0,h[9]=0,h[10]=i,h}function y(i,_,h){const b=h??new o(12);return b[0]=_*i[0*4+0],b[1]=_*i[0*4+1],b[2]=_*i[0*4+2],b[4]=_*i[1*4+0],b[5]=_*i[1*4+1],b[6]=_*i[1*4+2],b[8]=_*i[2*4+0],b[9]=_*i[2*4+1],b[10]=_*i[2*4+2],b}return{add:q,clone:Z,copy:R,create:S,determinant:j,equals:V,equalsApproximately:X,fromMat4:C,fromQuat:B,get3DScaling:Ne,getAxis:se,getScaling:ne,getTranslation:ce,identity:L,inverse:F,invert:T,mul:oe,mulScalar:U,multiply:H,multiplyScalar:I,negate:W,rotate:ge,rotateX:le,rotateY:ie,rotateZ:he,rotation:Me,rotationX:ye,rotationY:re,rotationZ:me,scale:Ae,scale3D:Ce,scaling:ve,scaling3D:xe,set:g,setAxis:_e,setTranslation:we,translate:Ie,translation:Ge,transpose:O,uniformScale:M,uniformScale3D:y,uniformScaling:Oe,uniformScaling3D:Y}}const Zr=new Map;function Bl(o){let l=Zr.get(o);return l||(l=kl(o),Zr.set(o,l)),l}function Tl(o){const l=is(o);function f(r,m,p,c,a,d,x,v,D,$,K,N,Q,ee,de,be){const pe=new o(16);return r!==void 0&&(pe[0]=r,m!==void 0&&(pe[1]=m,p!==void 0&&(pe[2]=p,c!==void 0&&(pe[3]=c,a!==void 0&&(pe[4]=a,d!==void 0&&(pe[5]=d,x!==void 0&&(pe[6]=x,v!==void 0&&(pe[7]=v,D!==void 0&&(pe[8]=D,$!==void 0&&(pe[9]=$,K!==void 0&&(pe[10]=K,N!==void 0&&(pe[11]=N,Q!==void 0&&(pe[12]=Q,ee!==void 0&&(pe[13]=ee,de!==void 0&&(pe[14]=de,be!==void 0&&(pe[15]=be)))))))))))))))),pe}function S(r,m,p,c,a,d,x,v,D,$,K,N,Q,ee,de,be,pe){const ue=pe??new o(16);return ue[0]=r,ue[1]=m,ue[2]=p,ue[3]=c,ue[4]=a,ue[5]=d,ue[6]=x,ue[7]=v,ue[8]=D,ue[9]=$,ue[10]=K,ue[11]=N,ue[12]=Q,ue[13]=ee,ue[14]=de,ue[15]=be,ue}function g(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=0,p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=0,p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function C(r,m){const p=m??new o(16),c=r[0],a=r[1],d=r[2],x=r[3],v=c+c,D=a+a,$=d+d,K=c*v,N=a*v,Q=a*D,ee=d*v,de=d*D,be=d*$,pe=x*v,ue=x*D,ke=x*$;return p[0]=1-Q-be,p[1]=N+ke,p[2]=ee-ue,p[3]=0,p[4]=N-ke,p[5]=1-K-be,p[6]=de+pe,p[7]=0,p[8]=ee+ue,p[9]=de-pe,p[10]=1-K-Q,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function B(r,m){const p=m??new o(16);return p[0]=-r[0],p[1]=-r[1],p[2]=-r[2],p[3]=-r[3],p[4]=-r[4],p[5]=-r[5],p[6]=-r[6],p[7]=-r[7],p[8]=-r[8],p[9]=-r[9],p[10]=-r[10],p[11]=-r[11],p[12]=-r[12],p[13]=-r[13],p[14]=-r[14],p[15]=-r[15],p}function W(r,m,p){const c=p??new o(16);return c[0]=r[0]+m[0],c[1]=r[1]+m[1],c[2]=r[2]+m[2],c[3]=r[3]+m[3],c[4]=r[4]+m[4],c[5]=r[5]+m[5],c[6]=r[6]+m[6],c[7]=r[7]+m[7],c[8]=r[8]+m[8],c[9]=r[9]+m[9],c[10]=r[10]+m[10],c[11]=r[11]+m[11],c[12]=r[12]+m[12],c[13]=r[13]+m[13],c[14]=r[14]+m[14],c[15]=r[15]+m[15],c}function I(r,m,p){const c=p??new o(16);return c[0]=r[0]*m,c[1]=r[1]*m,c[2]=r[2]*m,c[3]=r[3]*m,c[4]=r[4]*m,c[5]=r[5]*m,c[6]=r[6]*m,c[7]=r[7]*m,c[8]=r[8]*m,c[9]=r[9]*m,c[10]=r[10]*m,c[11]=r[11]*m,c[12]=r[12]*m,c[13]=r[13]*m,c[14]=r[14]*m,c[15]=r[15]*m,c}const U=I;function q(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15],p}const R=q;function Z(r,m){return Math.abs(r[0]-m[0])<De&&Math.abs(r[1]-m[1])<De&&Math.abs(r[2]-m[2])<De&&Math.abs(r[3]-m[3])<De&&Math.abs(r[4]-m[4])<De&&Math.abs(r[5]-m[5])<De&&Math.abs(r[6]-m[6])<De&&Math.abs(r[7]-m[7])<De&&Math.abs(r[8]-m[8])<De&&Math.abs(r[9]-m[9])<De&&Math.abs(r[10]-m[10])<De&&Math.abs(r[11]-m[11])<De&&Math.abs(r[12]-m[12])<De&&Math.abs(r[13]-m[13])<De&&Math.abs(r[14]-m[14])<De&&Math.abs(r[15]-m[15])<De}function X(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function V(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function L(r,m){const p=m??new o(16);if(p===r){let Be;return Be=r[1],r[1]=r[4],r[4]=Be,Be=r[2],r[2]=r[8],r[8]=Be,Be=r[3],r[3]=r[12],r[12]=Be,Be=r[6],r[6]=r[9],r[9]=Be,Be=r[7],r[7]=r[13],r[13]=Be,Be=r[11],r[11]=r[14],r[14]=Be,p}const c=r[0*4+0],a=r[0*4+1],d=r[0*4+2],x=r[0*4+3],v=r[1*4+0],D=r[1*4+1],$=r[1*4+2],K=r[1*4+3],N=r[2*4+0],Q=r[2*4+1],ee=r[2*4+2],de=r[2*4+3],be=r[3*4+0],pe=r[3*4+1],ue=r[3*4+2],ke=r[3*4+3];return p[0]=c,p[1]=v,p[2]=N,p[3]=be,p[4]=a,p[5]=D,p[6]=Q,p[7]=pe,p[8]=d,p[9]=$,p[10]=ee,p[11]=ue,p[12]=x,p[13]=K,p[14]=de,p[15]=ke,p}function O(r,m){const p=m??new o(16),c=r[0*4+0],a=r[0*4+1],d=r[0*4+2],x=r[0*4+3],v=r[1*4+0],D=r[1*4+1],$=r[1*4+2],K=r[1*4+3],N=r[2*4+0],Q=r[2*4+1],ee=r[2*4+2],de=r[2*4+3],be=r[3*4+0],pe=r[3*4+1],ue=r[3*4+2],ke=r[3*4+3],Be=ee*ke,qe=ue*de,Le=$*ke,Ke=ue*K,Ye=$*de,et=ee*K,it=d*ke,Ue=ue*x,nt=d*de,ot=ee*x,st=d*K,Ze=$*x,je=N*pe,rt=be*Q,He=v*pe,pt=be*D,at=v*Q,Bt=N*D,vt=c*pe,Pt=be*a,St=c*Q,Dt=N*a,Gt=c*D,Et=v*a,Qt=Be*D+Ke*Q+Ye*pe-(qe*D+Le*Q+et*pe),Nt=qe*a+it*Q+ot*pe-(Be*a+Ue*Q+nt*pe),Ct=Le*a+Ue*D+st*pe-(Ke*a+it*D+Ze*pe),Jt=et*a+nt*D+Ze*Q-(Ye*a+ot*D+st*Q),Xe=1/(c*Qt+v*Nt+N*Ct+be*Jt);return p[0]=Xe*Qt,p[1]=Xe*Nt,p[2]=Xe*Ct,p[3]=Xe*Jt,p[4]=Xe*(qe*v+Le*N+et*be-(Be*v+Ke*N+Ye*be)),p[5]=Xe*(Be*c+Ue*N+nt*be-(qe*c+it*N+ot*be)),p[6]=Xe*(Ke*c+it*v+Ze*be-(Le*c+Ue*v+st*be)),p[7]=Xe*(Ye*c+ot*v+st*N-(et*c+nt*v+Ze*N)),p[8]=Xe*(je*K+pt*de+at*ke-(rt*K+He*de+Bt*ke)),p[9]=Xe*(rt*x+vt*de+Dt*ke-(je*x+Pt*de+St*ke)),p[10]=Xe*(He*x+Pt*K+Gt*ke-(pt*x+vt*K+Et*ke)),p[11]=Xe*(Bt*x+St*K+Et*de-(at*x+Dt*K+Gt*de)),p[12]=Xe*(He*ee+Bt*ue+rt*$-(at*ue+je*$+pt*ee)),p[13]=Xe*(St*ue+je*d+Pt*ee-(vt*ee+Dt*ue+rt*d)),p[14]=Xe*(vt*$+Et*ue+pt*d-(Gt*ue+He*d+Pt*$)),p[15]=Xe*(Gt*ee+at*d+Dt*$-(St*$+Et*ee+Bt*d)),p}function F(r){const m=r[0],p=r[0*4+1],c=r[0*4+2],a=r[0*4+3],d=r[1*4+0],x=r[1*4+1],v=r[1*4+2],D=r[1*4+3],$=r[2*4+0],K=r[2*4+1],N=r[2*4+2],Q=r[2*4+3],ee=r[3*4+0],de=r[3*4+1],be=r[3*4+2],pe=r[3*4+3],ue=N*pe,ke=be*Q,Be=v*pe,qe=be*D,Le=v*Q,Ke=N*D,Ye=c*pe,et=be*a,it=c*Q,Ue=N*a,nt=c*D,ot=v*a,st=ue*x+qe*K+Le*de-(ke*x+Be*K+Ke*de),Ze=ke*p+Ye*K+Ue*de-(ue*p+et*K+it*de),je=Be*p+et*x+nt*de-(qe*p+Ye*x+ot*de),rt=Ke*p+it*x+ot*K-(Le*p+Ue*x+nt*K);return m*st+d*Ze+$*je+ee*rt}const j=O;function T(r,m,p){const c=p??new o(16),a=r[0],d=r[1],x=r[2],v=r[3],D=r[4+0],$=r[4+1],K=r[4+2],N=r[4+3],Q=r[8+0],ee=r[8+1],de=r[8+2],be=r[8+3],pe=r[12+0],ue=r[12+1],ke=r[12+2],Be=r[12+3],qe=m[0],Le=m[1],Ke=m[2],Ye=m[3],et=m[4+0],it=m[4+1],Ue=m[4+2],nt=m[4+3],ot=m[8+0],st=m[8+1],Ze=m[8+2],je=m[8+3],rt=m[12+0],He=m[12+1],pt=m[12+2],at=m[12+3];return c[0]=a*qe+D*Le+Q*Ke+pe*Ye,c[1]=d*qe+$*Le+ee*Ke+ue*Ye,c[2]=x*qe+K*Le+de*Ke+ke*Ye,c[3]=v*qe+N*Le+be*Ke+Be*Ye,c[4]=a*et+D*it+Q*Ue+pe*nt,c[5]=d*et+$*it+ee*Ue+ue*nt,c[6]=x*et+K*it+de*Ue+ke*nt,c[7]=v*et+N*it+be*Ue+Be*nt,c[8]=a*ot+D*st+Q*Ze+pe*je,c[9]=d*ot+$*st+ee*Ze+ue*je,c[10]=x*ot+K*st+de*Ze+ke*je,c[11]=v*ot+N*st+be*Ze+Be*je,c[12]=a*rt+D*He+Q*pt+pe*at,c[13]=d*rt+$*He+ee*pt+ue*at,c[14]=x*rt+K*He+de*pt+ke*at,c[15]=v*rt+N*He+be*pt+Be*at,c}const H=T;function oe(r,m,p){const c=p??V();return r!==c&&(c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=r[3],c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=r[7],c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=r[11]),c[12]=m[0],c[13]=m[1],c[14]=m[2],c[15]=1,c}function we(r,m){const p=m??l.create();return p[0]=r[12],p[1]=r[13],p[2]=r[14],p}function ce(r,m,p){const c=p??l.create(),a=m*4;return c[0]=r[a+0],c[1]=r[a+1],c[2]=r[a+2],c}function se(r,m,p,c){const a=c===r?c:q(r,c),d=p*4;return a[d+0]=m[0],a[d+1]=m[1],a[d+2]=m[2],a}function _e(r,m){const p=m??l.create(),c=r[0],a=r[1],d=r[2],x=r[4],v=r[5],D=r[6],$=r[8],K=r[9],N=r[10];return p[0]=Math.sqrt(c*c+a*a+d*d),p[1]=Math.sqrt(x*x+v*v+D*D),p[2]=Math.sqrt($*$+K*K+N*N),p}function ne(r,m,p,c,a){const d=a??new o(16),x=Math.tan(Math.PI*.5-.5*r);if(d[0]=x/m,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=x,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,Number.isFinite(c)){const v=1/(p-c);d[10]=c*v,d[14]=c*p*v}else d[10]=-1,d[14]=-p;return d}function Ne(r,m,p,c=1/0,a){const d=a??new o(16),x=1/Math.tan(r*.5);if(d[0]=x/m,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=x,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,c===1/0)d[10]=0,d[14]=p;else{const v=1/(c-p);d[10]=p*v,d[14]=c*p*v}return d}function Ge(r,m,p,c,a,d,x){const v=x??new o(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(c-p),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-d),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(c+p)/(p-c),v[14]=a/(a-d),v[15]=1,v}function Ie(r,m,p,c,a,d,x){const v=x??new o(16),D=m-r,$=c-p,K=a-d;return v[0]=2*a/D,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/$,v[6]=0,v[7]=0,v[8]=(r+m)/D,v[9]=(c+p)/$,v[10]=d/K,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*d/K,v[15]=0,v}function Me(r,m,p,c,a,d=1/0,x){const v=x??new o(16),D=m-r,$=c-p;if(v[0]=2*a/D,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/$,v[6]=0,v[7]=0,v[8]=(r+m)/D,v[9]=(c+p)/$,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,d===1/0)v[10]=0,v[14]=a;else{const K=1/(d-a);v[10]=a*K,v[14]=d*a*K}return v}const ge=l.create(),ye=l.create(),le=l.create();function re(r,m,p,c){const a=c??new o(16);return l.normalize(l.subtract(m,r,le),le),l.normalize(l.cross(p,le,ge),ge),l.normalize(l.cross(le,ge,ye),ye),a[0]=ge[0],a[1]=ge[1],a[2]=ge[2],a[3]=0,a[4]=ye[0],a[5]=ye[1],a[6]=ye[2],a[7]=0,a[8]=le[0],a[9]=le[1],a[10]=le[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function ie(r,m,p,c){const a=c??new o(16);return l.normalize(l.subtract(r,m,le),le),l.normalize(l.cross(p,le,ge),ge),l.normalize(l.cross(le,ge,ye),ye),a[0]=ge[0],a[1]=ge[1],a[2]=ge[2],a[3]=0,a[4]=ye[0],a[5]=ye[1],a[6]=ye[2],a[7]=0,a[8]=le[0],a[9]=le[1],a[10]=le[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function me(r,m,p,c){const a=c??new o(16);return l.normalize(l.subtract(r,m,le),le),l.normalize(l.cross(p,le,ge),ge),l.normalize(l.cross(le,ge,ye),ye),a[0]=ge[0],a[1]=ye[0],a[2]=le[0],a[3]=0,a[4]=ge[1],a[5]=ye[1],a[6]=le[1],a[7]=0,a[8]=ge[2],a[9]=ye[2],a[10]=le[2],a[11]=0,a[12]=-(ge[0]*r[0]+ge[1]*r[1]+ge[2]*r[2]),a[13]=-(ye[0]*r[0]+ye[1]*r[1]+ye[2]*r[2]),a[14]=-(le[0]*r[0]+le[1]*r[1]+le[2]*r[2]),a[15]=1,a}function he(r,m){const p=m??new o(16);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=r[0],p[13]=r[1],p[14]=r[2],p[15]=1,p}function ve(r,m,p){const c=p??new o(16),a=m[0],d=m[1],x=m[2],v=r[0],D=r[1],$=r[2],K=r[3],N=r[1*4+0],Q=r[1*4+1],ee=r[1*4+2],de=r[1*4+3],be=r[2*4+0],pe=r[2*4+1],ue=r[2*4+2],ke=r[2*4+3],Be=r[3*4+0],qe=r[3*4+1],Le=r[3*4+2],Ke=r[3*4+3];return r!==c&&(c[0]=v,c[1]=D,c[2]=$,c[3]=K,c[4]=N,c[5]=Q,c[6]=ee,c[7]=de,c[8]=be,c[9]=pe,c[10]=ue,c[11]=ke),c[12]=v*a+N*d+be*x+Be,c[13]=D*a+Q*d+pe*x+qe,c[14]=$*a+ee*d+ue*x+Le,c[15]=K*a+de*d+ke*x+Ke,c}function Ae(r,m){const p=m??new o(16),c=Math.cos(r),a=Math.sin(r);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=c,p[6]=a,p[7]=0,p[8]=0,p[9]=-a,p[10]=c,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function xe(r,m,p){const c=p??new o(16),a=r[4],d=r[5],x=r[6],v=r[7],D=r[8],$=r[9],K=r[10],N=r[11],Q=Math.cos(m),ee=Math.sin(m);return c[4]=Q*a+ee*D,c[5]=Q*d+ee*$,c[6]=Q*x+ee*K,c[7]=Q*v+ee*N,c[8]=Q*D-ee*a,c[9]=Q*$-ee*d,c[10]=Q*K-ee*x,c[11]=Q*N-ee*v,r!==c&&(c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=r[3],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15]),c}function Ce(r,m){const p=m??new o(16),c=Math.cos(r),a=Math.sin(r);return p[0]=c,p[1]=0,p[2]=-a,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=a,p[9]=0,p[10]=c,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function Oe(r,m,p){const c=p??new o(16),a=r[0*4+0],d=r[0*4+1],x=r[0*4+2],v=r[0*4+3],D=r[2*4+0],$=r[2*4+1],K=r[2*4+2],N=r[2*4+3],Q=Math.cos(m),ee=Math.sin(m);return c[0]=Q*a-ee*D,c[1]=Q*d-ee*$,c[2]=Q*x-ee*K,c[3]=Q*v-ee*N,c[8]=Q*D+ee*a,c[9]=Q*$+ee*d,c[10]=Q*K+ee*x,c[11]=Q*N+ee*v,r!==c&&(c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=r[7],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15]),c}function M(r,m){const p=m??new o(16),c=Math.cos(r),a=Math.sin(r);return p[0]=c,p[1]=a,p[2]=0,p[3]=0,p[4]=-a,p[5]=c,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function Y(r,m,p){const c=p??new o(16),a=r[0*4+0],d=r[0*4+1],x=r[0*4+2],v=r[0*4+3],D=r[1*4+0],$=r[1*4+1],K=r[1*4+2],N=r[1*4+3],Q=Math.cos(m),ee=Math.sin(m);return c[0]=Q*a+ee*D,c[1]=Q*d+ee*$,c[2]=Q*x+ee*K,c[3]=Q*v+ee*N,c[4]=Q*D-ee*a,c[5]=Q*$-ee*d,c[6]=Q*K-ee*x,c[7]=Q*N-ee*v,r!==c&&(c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=r[11],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15]),c}function y(r,m,p){const c=p??new o(16);let a=r[0],d=r[1],x=r[2];const v=Math.sqrt(a*a+d*d+x*x);a/=v,d/=v,x/=v;const D=a*a,$=d*d,K=x*x,N=Math.cos(m),Q=Math.sin(m),ee=1-N;return c[0]=D+(1-D)*N,c[1]=a*d*ee+x*Q,c[2]=a*x*ee-d*Q,c[3]=0,c[4]=a*d*ee-x*Q,c[5]=$+(1-$)*N,c[6]=d*x*ee+a*Q,c[7]=0,c[8]=a*x*ee+d*Q,c[9]=d*x*ee-a*Q,c[10]=K+(1-K)*N,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}const i=y;function _(r,m,p,c){const a=c??new o(16);let d=m[0],x=m[1],v=m[2];const D=Math.sqrt(d*d+x*x+v*v);d/=D,x/=D,v/=D;const $=d*d,K=x*x,N=v*v,Q=Math.cos(p),ee=Math.sin(p),de=1-Q,be=$+(1-$)*Q,pe=d*x*de+v*ee,ue=d*v*de-x*ee,ke=d*x*de-v*ee,Be=K+(1-K)*Q,qe=x*v*de+d*ee,Le=d*v*de+x*ee,Ke=x*v*de-d*ee,Ye=N+(1-N)*Q,et=r[0],it=r[1],Ue=r[2],nt=r[3],ot=r[4],st=r[5],Ze=r[6],je=r[7],rt=r[8],He=r[9],pt=r[10],at=r[11];return a[0]=be*et+pe*ot+ue*rt,a[1]=be*it+pe*st+ue*He,a[2]=be*Ue+pe*Ze+ue*pt,a[3]=be*nt+pe*je+ue*at,a[4]=ke*et+Be*ot+qe*rt,a[5]=ke*it+Be*st+qe*He,a[6]=ke*Ue+Be*Ze+qe*pt,a[7]=ke*nt+Be*je+qe*at,a[8]=Le*et+Ke*ot+Ye*rt,a[9]=Le*it+Ke*st+Ye*He,a[10]=Le*Ue+Ke*Ze+Ye*pt,a[11]=Le*nt+Ke*je+Ye*at,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const h=_;function b(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=r[1],p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=r[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function P(r,m,p){const c=p??new o(16),a=m[0],d=m[1],x=m[2];return c[0]=a*r[0*4+0],c[1]=a*r[0*4+1],c[2]=a*r[0*4+2],c[3]=a*r[0*4+3],c[4]=d*r[1*4+0],c[5]=d*r[1*4+1],c[6]=d*r[1*4+2],c[7]=d*r[1*4+3],c[8]=x*r[2*4+0],c[9]=x*r[2*4+1],c[10]=x*r[2*4+2],c[11]=x*r[2*4+3],r!==c&&(c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15]),c}function k(r,m){const p=m??new o(16);return p[0]=r,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=r,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=r,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function w(r,m,p){const c=p??new o(16);return c[0]=m*r[0*4+0],c[1]=m*r[0*4+1],c[2]=m*r[0*4+2],c[3]=m*r[0*4+3],c[4]=m*r[1*4+0],c[5]=m*r[1*4+1],c[6]=m*r[1*4+2],c[7]=m*r[1*4+3],c[8]=m*r[2*4+0],c[9]=m*r[2*4+1],c[10]=m*r[2*4+2],c[11]=m*r[2*4+3],r!==c&&(c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15]),c}return{add:W,aim:re,axisRotate:_,axisRotation:y,cameraAim:ie,clone:R,copy:q,create:f,determinant:F,equals:X,equalsApproximately:Z,fromMat3:g,fromQuat:C,frustum:Ie,frustumReverseZ:Me,getAxis:ce,getScaling:_e,getTranslation:we,identity:V,inverse:O,invert:j,lookAt:me,mul:H,mulScalar:U,multiply:T,multiplyScalar:I,negate:B,ortho:Ge,perspective:ne,perspectiveReverseZ:Ne,rotate:h,rotateX:xe,rotateY:Oe,rotateZ:Y,rotation:i,rotationX:Ae,rotationY:Ce,rotationZ:M,scale:P,scaling:b,set:S,setAxis:se,setTranslation:oe,translate:ve,translation:he,transpose:L,uniformScale:w,uniformScaling:k}}const Xr=new Map;function Ml(o){let l=Xr.get(o);return l||(l=Tl(o),Xr.set(o,l)),l}function Al(o){const l=is(o);function f(M,Y,y,i){const _=new o(4);return M!==void 0&&(_[0]=M,Y!==void 0&&(_[1]=Y,y!==void 0&&(_[2]=y,i!==void 0&&(_[3]=i)))),_}const S=f;function g(M,Y,y,i,_){const h=_??new o(4);return h[0]=M,h[1]=Y,h[2]=y,h[3]=i,h}function C(M,Y,y){const i=y??new o(4),_=Y*.5,h=Math.sin(_);return i[0]=h*M[0],i[1]=h*M[1],i[2]=h*M[2],i[3]=Math.cos(_),i}function B(M,Y){const y=Y??l.create(3),i=Math.acos(M[3])*2,_=Math.sin(i*.5);return _>De?(y[0]=M[0]/_,y[1]=M[1]/_,y[2]=M[2]/_):(y[0]=1,y[1]=0,y[2]=0),{angle:i,axis:y}}function W(M,Y){const y=ne(M,Y);return Math.acos(2*y*y-1)}function I(M,Y,y){const i=y??new o(4),_=M[0],h=M[1],b=M[2],P=M[3],k=Y[0],w=Y[1],r=Y[2],m=Y[3];return i[0]=_*m+P*k+h*r-b*w,i[1]=h*m+P*w+b*k-_*r,i[2]=b*m+P*r+_*w-h*k,i[3]=P*m-_*k-h*w-b*r,i}const U=I;function q(M,Y,y){const i=y??new o(4),_=Y*.5,h=M[0],b=M[1],P=M[2],k=M[3],w=Math.sin(_),r=Math.cos(_);return i[0]=h*r+k*w,i[1]=b*r+P*w,i[2]=P*r-b*w,i[3]=k*r-h*w,i}function R(M,Y,y){const i=y??new o(4),_=Y*.5,h=M[0],b=M[1],P=M[2],k=M[3],w=Math.sin(_),r=Math.cos(_);return i[0]=h*r-P*w,i[1]=b*r+k*w,i[2]=P*r+h*w,i[3]=k*r-b*w,i}function Z(M,Y,y){const i=y??new o(4),_=Y*.5,h=M[0],b=M[1],P=M[2],k=M[3],w=Math.sin(_),r=Math.cos(_);return i[0]=h*r+b*w,i[1]=b*r-h*w,i[2]=P*r+k*w,i[3]=k*r-P*w,i}function X(M,Y,y,i){const _=i??new o(4),h=M[0],b=M[1],P=M[2],k=M[3];let w=Y[0],r=Y[1],m=Y[2],p=Y[3],c=h*w+b*r+P*m+k*p;c<0&&(c=-c,w=-w,r=-r,m=-m,p=-p);let a,d;if(1-c>De){const x=Math.acos(c),v=Math.sin(x);a=Math.sin((1-y)*x)/v,d=Math.sin(y*x)/v}else a=1-y,d=y;return _[0]=a*h+d*w,_[1]=a*b+d*r,_[2]=a*P+d*m,_[3]=a*k+d*p,_}function V(M,Y){const y=Y??new o(4),i=M[0],_=M[1],h=M[2],b=M[3],P=i*i+_*_+h*h+b*b,k=P?1/P:0;return y[0]=-i*k,y[1]=-_*k,y[2]=-h*k,y[3]=b*k,y}function L(M,Y){const y=Y??new o(4);return y[0]=-M[0],y[1]=-M[1],y[2]=-M[2],y[3]=M[3],y}function O(M,Y){const y=Y??new o(4),i=M[0]+M[5]+M[10];if(i>0){const _=Math.sqrt(i+1);y[3]=.5*_;const h=.5/_;y[0]=(M[6]-M[9])*h,y[1]=(M[8]-M[2])*h,y[2]=(M[1]-M[4])*h}else{let _=0;M[5]>M[0]&&(_=1),M[10]>M[_*4+_]&&(_=2);const h=(_+1)%3,b=(_+2)%3,P=Math.sqrt(M[_*4+_]-M[h*4+h]-M[b*4+b]+1);y[_]=.5*P;const k=.5/P;y[3]=(M[h*4+b]-M[b*4+h])*k,y[h]=(M[h*4+_]+M[_*4+h])*k,y[b]=(M[b*4+_]+M[_*4+b])*k}return y}function F(M,Y,y,i,_){const h=_??new o(4),b=M*.5,P=Y*.5,k=y*.5,w=Math.sin(b),r=Math.cos(b),m=Math.sin(P),p=Math.cos(P),c=Math.sin(k),a=Math.cos(k);switch(i){case"xyz":h[0]=w*p*a+r*m*c,h[1]=r*m*a-w*p*c,h[2]=r*p*c+w*m*a,h[3]=r*p*a-w*m*c;break;case"xzy":h[0]=w*p*a-r*m*c,h[1]=r*m*a-w*p*c,h[2]=r*p*c+w*m*a,h[3]=r*p*a+w*m*c;break;case"yxz":h[0]=w*p*a+r*m*c,h[1]=r*m*a-w*p*c,h[2]=r*p*c-w*m*a,h[3]=r*p*a+w*m*c;break;case"yzx":h[0]=w*p*a+r*m*c,h[1]=r*m*a+w*p*c,h[2]=r*p*c-w*m*a,h[3]=r*p*a-w*m*c;break;case"zxy":h[0]=w*p*a-r*m*c,h[1]=r*m*a+w*p*c,h[2]=r*p*c+w*m*a,h[3]=r*p*a-w*m*c;break;case"zyx":h[0]=w*p*a-r*m*c,h[1]=r*m*a+w*p*c,h[2]=r*p*c-w*m*a,h[3]=r*p*a+w*m*c;break;default:throw new Error(`Unknown rotation order: ${i}`)}return h}function j(M,Y){const y=Y??new o(4);return y[0]=M[0],y[1]=M[1],y[2]=M[2],y[3]=M[3],y}const T=j;function H(M,Y,y){const i=y??new o(4);return i[0]=M[0]+Y[0],i[1]=M[1]+Y[1],i[2]=M[2]+Y[2],i[3]=M[3]+Y[3],i}function oe(M,Y,y){const i=y??new o(4);return i[0]=M[0]-Y[0],i[1]=M[1]-Y[1],i[2]=M[2]-Y[2],i[3]=M[3]-Y[3],i}const we=oe;function ce(M,Y,y){const i=y??new o(4);return i[0]=M[0]*Y,i[1]=M[1]*Y,i[2]=M[2]*Y,i[3]=M[3]*Y,i}const se=ce;function _e(M,Y,y){const i=y??new o(4);return i[0]=M[0]/Y,i[1]=M[1]/Y,i[2]=M[2]/Y,i[3]=M[3]/Y,i}function ne(M,Y){return M[0]*Y[0]+M[1]*Y[1]+M[2]*Y[2]+M[3]*Y[3]}function Ne(M,Y,y,i){const _=i??new o(4);return _[0]=M[0]+y*(Y[0]-M[0]),_[1]=M[1]+y*(Y[1]-M[1]),_[2]=M[2]+y*(Y[2]-M[2]),_[3]=M[3]+y*(Y[3]-M[3]),_}function Ge(M){const Y=M[0],y=M[1],i=M[2],_=M[3];return Math.sqrt(Y*Y+y*y+i*i+_*_)}const Ie=Ge;function Me(M){const Y=M[0],y=M[1],i=M[2],_=M[3];return Y*Y+y*y+i*i+_*_}const ge=Me;function ye(M,Y){const y=Y??new o(4),i=M[0],_=M[1],h=M[2],b=M[3],P=Math.sqrt(i*i+_*_+h*h+b*b);return P>1e-5?(y[0]=i/P,y[1]=_/P,y[2]=h/P,y[3]=b/P):(y[0]=0,y[1]=0,y[2]=0,y[3]=1),y}function le(M,Y){return Math.abs(M[0]-Y[0])<De&&Math.abs(M[1]-Y[1])<De&&Math.abs(M[2]-Y[2])<De&&Math.abs(M[3]-Y[3])<De}function re(M,Y){return M[0]===Y[0]&&M[1]===Y[1]&&M[2]===Y[2]&&M[3]===Y[3]}function ie(M){const Y=M??new o(4);return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y}const me=l.create(),he=l.create(),ve=l.create();function Ae(M,Y,y){const i=y??new o(4),_=l.dot(M,Y);return _<-.999999?(l.cross(he,M,me),l.len(me)<1e-6&&l.cross(ve,M,me),l.normalize(me,me),C(me,Math.PI,i),i):_>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(M,Y,me),i[0]=me[0],i[1]=me[1],i[2]=me[2],i[3]=1+_,ye(i,i))}const xe=new o(4),Ce=new o(4);function Oe(M,Y,y,i,_,h){const b=h??new o(4);return X(M,i,_,xe),X(Y,y,_,Ce),X(xe,Ce,2*_*(1-_),b),b}return{create:f,fromValues:S,set:g,fromAxisAngle:C,toAxisAngle:B,angle:W,multiply:I,mul:U,rotateX:q,rotateY:R,rotateZ:Z,slerp:X,inverse:V,conjugate:L,fromMat:O,fromEuler:F,copy:j,clone:T,add:H,subtract:oe,sub:we,mulScalar:ce,scale:se,divScalar:_e,dot:ne,lerp:Ne,length:Ge,len:Ie,lengthSq:Me,lenSq:ge,normalize:ye,equalsApproximately:le,equals:re,identity:ie,rotationTo:Ae,sqlerp:Oe}}const Qr=new Map;function Dl(o){let l=Qr.get(o);return l||(l=Al(o),Qr.set(o,l)),l}function Gl(o){function l(y,i,_,h){const b=new o(4);return y!==void 0&&(b[0]=y,i!==void 0&&(b[1]=i,_!==void 0&&(b[2]=_,h!==void 0&&(b[3]=h)))),b}const f=l;function S(y,i,_,h,b){const P=b??new o(4);return P[0]=y,P[1]=i,P[2]=_,P[3]=h,P}function g(y,i){const _=i??new o(4);return _[0]=Math.ceil(y[0]),_[1]=Math.ceil(y[1]),_[2]=Math.ceil(y[2]),_[3]=Math.ceil(y[3]),_}function C(y,i){const _=i??new o(4);return _[0]=Math.floor(y[0]),_[1]=Math.floor(y[1]),_[2]=Math.floor(y[2]),_[3]=Math.floor(y[3]),_}function B(y,i){const _=i??new o(4);return _[0]=Math.round(y[0]),_[1]=Math.round(y[1]),_[2]=Math.round(y[2]),_[3]=Math.round(y[3]),_}function W(y,i=0,_=1,h){const b=h??new o(4);return b[0]=Math.min(_,Math.max(i,y[0])),b[1]=Math.min(_,Math.max(i,y[1])),b[2]=Math.min(_,Math.max(i,y[2])),b[3]=Math.min(_,Math.max(i,y[3])),b}function I(y,i,_){const h=_??new o(4);return h[0]=y[0]+i[0],h[1]=y[1]+i[1],h[2]=y[2]+i[2],h[3]=y[3]+i[3],h}function U(y,i,_,h){const b=h??new o(4);return b[0]=y[0]+i[0]*_,b[1]=y[1]+i[1]*_,b[2]=y[2]+i[2]*_,b[3]=y[3]+i[3]*_,b}function q(y,i,_){const h=_??new o(4);return h[0]=y[0]-i[0],h[1]=y[1]-i[1],h[2]=y[2]-i[2],h[3]=y[3]-i[3],h}const R=q;function Z(y,i){return Math.abs(y[0]-i[0])<De&&Math.abs(y[1]-i[1])<De&&Math.abs(y[2]-i[2])<De&&Math.abs(y[3]-i[3])<De}function X(y,i){return y[0]===i[0]&&y[1]===i[1]&&y[2]===i[2]&&y[3]===i[3]}function V(y,i,_,h){const b=h??new o(4);return b[0]=y[0]+_*(i[0]-y[0]),b[1]=y[1]+_*(i[1]-y[1]),b[2]=y[2]+_*(i[2]-y[2]),b[3]=y[3]+_*(i[3]-y[3]),b}function L(y,i,_,h){const b=h??new o(4);return b[0]=y[0]+_[0]*(i[0]-y[0]),b[1]=y[1]+_[1]*(i[1]-y[1]),b[2]=y[2]+_[2]*(i[2]-y[2]),b[3]=y[3]+_[3]*(i[3]-y[3]),b}function O(y,i,_){const h=_??new o(4);return h[0]=Math.max(y[0],i[0]),h[1]=Math.max(y[1],i[1]),h[2]=Math.max(y[2],i[2]),h[3]=Math.max(y[3],i[3]),h}function F(y,i,_){const h=_??new o(4);return h[0]=Math.min(y[0],i[0]),h[1]=Math.min(y[1],i[1]),h[2]=Math.min(y[2],i[2]),h[3]=Math.min(y[3],i[3]),h}function j(y,i,_){const h=_??new o(4);return h[0]=y[0]*i,h[1]=y[1]*i,h[2]=y[2]*i,h[3]=y[3]*i,h}const T=j;function H(y,i,_){const h=_??new o(4);return h[0]=y[0]/i,h[1]=y[1]/i,h[2]=y[2]/i,h[3]=y[3]/i,h}function oe(y,i){const _=i??new o(4);return _[0]=1/y[0],_[1]=1/y[1],_[2]=1/y[2],_[3]=1/y[3],_}const we=oe;function ce(y,i){return y[0]*i[0]+y[1]*i[1]+y[2]*i[2]+y[3]*i[3]}function se(y){const i=y[0],_=y[1],h=y[2],b=y[3];return Math.sqrt(i*i+_*_+h*h+b*b)}const _e=se;function ne(y){const i=y[0],_=y[1],h=y[2],b=y[3];return i*i+_*_+h*h+b*b}const Ne=ne;function Ge(y,i){const _=y[0]-i[0],h=y[1]-i[1],b=y[2]-i[2],P=y[3]-i[3];return Math.sqrt(_*_+h*h+b*b+P*P)}const Ie=Ge;function Me(y,i){const _=y[0]-i[0],h=y[1]-i[1],b=y[2]-i[2],P=y[3]-i[3];return _*_+h*h+b*b+P*P}const ge=Me;function ye(y,i){const _=i??new o(4),h=y[0],b=y[1],P=y[2],k=y[3],w=Math.sqrt(h*h+b*b+P*P+k*k);return w>1e-5?(_[0]=h/w,_[1]=b/w,_[2]=P/w,_[3]=k/w):(_[0]=0,_[1]=0,_[2]=0,_[3]=0),_}function le(y,i){const _=i??new o(4);return _[0]=-y[0],_[1]=-y[1],_[2]=-y[2],_[3]=-y[3],_}function re(y,i){const _=i??new o(4);return _[0]=y[0],_[1]=y[1],_[2]=y[2],_[3]=y[3],_}const ie=re;function me(y,i,_){const h=_??new o(4);return h[0]=y[0]*i[0],h[1]=y[1]*i[1],h[2]=y[2]*i[2],h[3]=y[3]*i[3],h}const he=me;function ve(y,i,_){const h=_??new o(4);return h[0]=y[0]/i[0],h[1]=y[1]/i[1],h[2]=y[2]/i[2],h[3]=y[3]/i[3],h}const Ae=ve;function xe(y){const i=y??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Ce(y,i,_){const h=_??new o(4),b=y[0],P=y[1],k=y[2],w=y[3];return h[0]=i[0]*b+i[4]*P+i[8]*k+i[12]*w,h[1]=i[1]*b+i[5]*P+i[9]*k+i[13]*w,h[2]=i[2]*b+i[6]*P+i[10]*k+i[14]*w,h[3]=i[3]*b+i[7]*P+i[11]*k+i[15]*w,h}function Oe(y,i,_){const h=_??new o(4);return ye(y,h),j(h,i,h)}function M(y,i,_){const h=_??new o(4);return se(y)>i?Oe(y,i,h):re(y,h)}function Y(y,i,_){const h=_??new o(4);return V(y,i,.5,h)}return{create:l,fromValues:f,set:S,ceil:g,floor:C,round:B,clamp:W,add:I,addScaled:U,subtract:q,sub:R,equalsApproximately:Z,equals:X,lerp:V,lerpV:L,max:O,min:F,mulScalar:j,scale:T,divScalar:H,inverse:oe,invert:we,dot:ce,length:se,len:_e,lengthSq:ne,lenSq:Ne,distance:Ge,dist:Ie,distanceSq:Me,distSq:ge,normalize:ye,negate:le,copy:re,clone:ie,multiply:me,mul:he,divide:ve,div:Ae,zero:xe,transformMat4:Ce,setLength:Oe,truncate:M,midpoint:Y}}const Jr=new Map;function Ll(o){let l=Jr.get(o);return l||(l=Gl(o),Jr.set(o,l)),l}function Ws(o,l,f,S,g,C){return{mat3:Bl(o),mat4:Ml(l),quat:Dl(f),vec2:pi(S),vec3:is(g),vec4:Ll(C)}}const{mat3:yt,mat4:dt,quat:ft,vec2:ei,vec3:z,vec4:Yc}=Ws(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ws(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ws(Sl,Array,Array,Array,Array,Array);const ti=document.querySelector("#log");let bt=null,dn=null;function hi(){if(bt)return bt;bt=document.createElement("div"),bt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",bt.appendChild(o),dn=document.createElement("div"),dn.className="ply-spinner-label",bt.appendChild(dn),bt.style.display="none",document.body.appendChild(bt),bt}function $s(o){hi(),dn&&o&&(dn.textContent=o),bt&&(bt.style.opacity="1",bt.style.display="flex")}function Ft(o){hi(),dn&&(dn.textContent=o)}function Ln(){if(!bt)return;const o=bt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function fi(o,l){if(!ti)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),ti.appendChild(f)}async function kt(o){console.log(o),fi(o)}async function zl(o){console.error(o),fi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let _i;function mi(){_i=performance.now()}function ni(o){const l=performance.now()-_i;kt(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Il(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function In(o){return o+3&-4}const Rl=2,Ul=3,Vl=5,Ol=6,zn=7,es=8,ts=9,ns=10;function Fl(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),g=4,C=S.getUint32(g+0,!0),B=S.getUint32(g+4,!0),W=S.getUint32(g+8,!0),I=S.getUint32(g+12,!0),U=S.getUint32(g+16,!0),q=S.getFloat32(g+20,!0),R=S.getUint32(g+24,!0),Z=S.getUint32(g+28,!0),X=S.getFloat32(g+32,!0),V=S.getFloat32(g+36,!0),L=S.getFloat32(g+40,!0),O=S.getUint32(g+44,!0),F=S.getFloat32(g+48,!0),j=S.getFloat32(g+52,!0),T=S.getUint32(g+56,!0),H=S.getUint32(g+60,!0),oe=Z===ts||Z===ns,we=oe?H:0,ce=oe?0:H,se=ce>0?ce:1;if(Z===Vl||Z===Ol)throw new Error(`NAT2: paired-RVQ format=${Z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const _e=Z===ts||Z===ns;if(Z!==Rl&&Z!==Ul&&Z!==zn&&Z!==es&&!_e)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Z}`);if(C%4!==0||O%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${O}`);let ne=g+64;const Ne=(T+1)*4,Ge=new Uint32Array(o.slice(ne,ne+Ne));ne+=Ne;let Ie;if(se>1){const he=(se+1)*4;if(ne+he>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${he} from ${ne})`);Ie=new Uint32Array(o.slice(ne,ne+he)),ne+=he}else Ie=new Uint32Array([0,C]);let Me=0;for(let he=0;he<se;he++){const ve=Ie[he+1]-Ie[he];ve>Me&&(Me=ve)}if(_e){const he=we&1?7:6,ve=U*he*4;if(ne+ve>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ve} more bytes from offset ${ne}, have ${o.byteLength-ne}`);const Ae=new Float32Array(o.slice(ne,ne+ve));ne+=ve;const xe=C/4,Ce=O/4,Oe=xe*Ce*16,M=o.byteLength-ne;if(M<Oe)throw new Error(`NAT2 probe atlas truncated: need ${Oe} bytes for ${C}x${O}, have ${M}`);const Y=new Uint8Array(o.slice(ne,ne+Oe));return{width:C,height:B,channels:W,kernel_type:I,num_rects:U,uv_extent:q,sb_number:R,format:Z,sh_bias:X,res_bias:V,compact_mult:L,layer_h:O,atlas_scale:F,atlas_offset:j,n_layers:T,n_cols:se,layer_cuts:Ge,column_cuts:Ie,slice_width:Me,rects_expanded:Ae,atlas_bytes:Y,probe_mode:we&1?2:1}}const ge=U*4*4;if(ne+ge>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${ge} more bytes from offset ${ne}, have ${o.byteLength-ne}`);const ye=new Float32Array(o.slice(ne,ne+ge));ne+=ge;const le=new Float32Array(U*5);for(let he=0;he<U;he++){const ve=ye[he*4+0],Ae=ye[he*4+1],xe=ye[he*4+2],Ce=ye[he*4+3];let Oe=0;for(let _=1;_<=T&&Ge[_]<=Ae;_++)Oe=_;let M=0;for(let _=1;_<=se&&Ie[_]<=ve;_++)M=_;const Y=Ae-Ge[Oe],y=ve-Ie[M],i=M*T+Oe;le[he*5+0]=y,le[he*5+1]=Y,le[he*5+2]=xe,le[he*5+3]=Ce,le[he*5+4]=i}let re;const me=C/4*16;if(Z===zn||Z===es){if(ne+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const he=Z===zn?"BCCB":"ACCB",ve=l.decode(new Uint8Array(o,ne,4));if(ve!==he)throw new Error(`NAT2 typeD bad sub-magic: expected '${he}' got '${ve}'`);const Ae=S.getUint32(ne+4,!0),xe=S.getUint32(ne+8,!0),Ce=S.getUint32(ne+12,!0),Oe=S.getUint32(ne+16,!0),M=S.getUint32(ne+20,!0);if(Ae!==1)throw new Error(`NAT2 BCCB unsupported version ${Ae}`);if(Ce!==B/4||Oe!==C/4||M!==Ce*Oe)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${B}, sub-header ${Oe}×${Ce} (${M} blocks)`);ne+=24;const Y=xe*16;if(ne+Y>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Y}, have ${o.byteLength-ne})`);const y=new Uint8Array(o,ne,Y);ne+=Y;const i=M*2;if(ne+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-ne})`);const _=new Uint16Array(o.slice(ne,ne+i));ne+=i;const h=new Uint8Array(M*16);for(let b=0;b<M;b++){const P=_[b]*16;h.set(y.subarray(P,P+16),b*16)}re=h}else{let he=0;for(let ve=0;ve<T;ve++){const Ae=Ge[ve+1]-Ge[ve];if(Ae%4!==0)throw new Error(`NAT2 BC7 layer ${ve} rows ${Ae} not 4-aligned`);he+=Ae/4*me}if(ne+he>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${he} more bytes from offset ${ne}, have ${o.byteLength-ne}`);re=new Uint8Array(o.slice(ne,ne+he))}return{width:C,height:B,channels:W,kernel_type:I,num_rects:U,uv_extent:q,sb_number:R,format:Z,sh_bias:X,res_bias:V,compact_mult:L,layer_h:O,atlas_scale:F,atlas_offset:j,n_layers:T,n_cols:se,layer_cuts:Ge,column_cuts:Ie,slice_width:Me,rects_expanded:le,atlas_bytes:re}}const Nl=32;function Wl(o,l,f){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,g,C,B;if(l.format===2||l.format===zn||l.format===ts){if(!o.features.has("texture-compression-bc"))return kt(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===ts?"BC7 atlas (proberes: shared probe texture)":l.format===zn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:g,sampler:C}=si(o,l,"bc7-rgba-unorm",B)}else if(l.format===3||l.format===es||l.format===ns){if(!o.features.has("texture-compression-astc"))return kt(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;B=l.format===ns?"ASTC 4x4 atlas (proberes: shared probe texture)":l.format===es?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:g,sampler:C}=si(o,l,"astc-4x4-unorm",B)}else return kt(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:W}=l,I=o.createBuffer({label:"atlas rects (5-stride)",size:In(W.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(I,0,W);const U=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return bi(o,U,l,f),{texture:S,view:g,sampler:C,rectsBuffer:I,texParamsBuffer:U,meta:l}}function si(o,l,f,S){const{width:g,layer_h:C,n_layers:B,n_cols:W,layer_cuts:I,column_cuts:U,slice_width:q,atlas_bytes:R}=l,X=g/4*16,V=o.limits.maxTextureDimension2D;if(C>V||q>V)throw new Error(`⚠️  atlas slice dims ${q}x${C} exceed maxTextureDimension2D=${V}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const L=W*B;if(L>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${W} cols × ${B} layers = ${L} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const O=o.createTexture({label:S,size:{width:q,height:C,depthOrArrayLayers:L},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let T=0;T<W;T++){const H=U[T]/4,oe=(U[T+1]-U[T])/4;for(let we=0;we<B;we++){const ce=I[we]/4,se=(I[we+1]-I[we])/4,_e=T*B+we,ne=ce*X+H*16;o.queue.writeTexture({texture:O,mipLevel:0,origin:{x:0,y:0,z:_e},aspect:"all"},R,{offset:ne,bytesPerRow:X,rowsPerImage:se},{width:oe*4,height:se*4,depthOrArrayLayers:1})}}const F=O.createView({label:`${S} view`,dimension:"2d-array"}),j=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:O,view:F,sampler:j}}function bi(o,l,f,S){const g=new ArrayBuffer(32),C=new Uint32Array(g),B=new Float32Array(g);C[0]=S?1:0,B[1]=f.atlas_scale,B[2]=f.atlas_offset,B[3]=f.res_bias,C[4]=f.probe_mode?f.probe_mode|0:0,o.queue.writeBuffer(l,0,g)}async function Rs(o,l){kt(`loading ply file from File... : ${o.name}`),$s("downloading PLY...");const f=await o.arrayBuffer();try{return await vi(f,l)}finally{Ln()}}async function $l(o,l){kt(`loading ply file from URL... : ${o}`),$s("downloading PLY...");try{mi();const f=new URL(o,self.location.href).href;return await vi({url:f},l)}finally{Ln()}}async function vi(o,l){return new Promise((f,S)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=C=>{var W,I,U,q,R,Z,X,V,L,O,F,j;const B=C.data;if((B==null?void 0:B.type)==="error"){zl(`PLY worker error: ${B.message??"unknown error"}`),g.terminate(),S(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const T=B.totalBytes,H=B.loadedBytes/(1024*1024),oe=T?T/(1024*1024):void 0,we=(B.speedBps??0)/(1024*1024),ce=T?Math.min(99,Math.floor(B.loadedBytes/T*100)):void 0,se=oe?`total ${oe.toFixed(1)} MB`:"total -- MB",_e=oe&&ce!==void 0?`${H.toFixed(1)} MB downloaded (${ce}%)`:`${H.toFixed(1)} MB downloaded`,ne=`${we.toFixed(2)} MB/s`;Ft(`downloading PLY ...
${se}, ${_e}
${ne}`);return}else if((B==null?void 0:B.type)==="fetched"){kt(`💾 Fetched (${B.byteLength} bytes)`),ni("Download"),Ft("parsing PLY..."),mi();return}else if((B==null?void 0:B.type)==="parse_progress"){const T=B.total??0,H=B.read??0,oe=T>0?Math.floor(H/T*100):0;Ft(`parsing PLY ...
${H}/${T} surfels (${oe}%)`);return}else if((B==null?void 0:B.type)==="done"){const T=B.num_points,H=B.K,oe=B.feature_mode??0,we=B.sh_bias,ce=B.kernel_type,se=B.surfelBuffer,_e=B.svParamsBuffer;kt(`🪐 Total surfels: ${T}, mode=${oe===1?"SB":"SV"}, K=${H}, sh_bias=${we}, kernel_type=${ce}`);const Ne=l.createBuffer({label:"surfel input buffer",size:In(T*Nl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ne,0,se);const Ge=_e.byteLength>0?_e.byteLength:16,Ie=l.createBuffer({label:oe===1?"color_params buffer (SB)":"color_params buffer (SV)",size:In(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});_e.byteLength>0&&l.queue.writeBuffer(Ie,0,_e),g.terminate(),ni("Parse"),f({num_points:T,K:H,feature_mode:oe,sh_bias:we,kernel_type:ce,surfel_buffer:Ne,surfel_data:new Float32Array(se),sv_params_buffer:Ie,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((I=(W=B.bbox)==null?void 0:W.min)==null?void 0:I[0])??-1)+(((q=(U=B.bbox)==null?void 0:U.max)==null?void 0:q[0])??1))/2,((((Z=(R=B.bbox)==null?void 0:R.min)==null?void 0:Z[1])??-1)+(((V=(X=B.bbox)==null?void 0:X.max)==null?void 0:V[1])??1))/2,((((O=(L=B.bbox)==null?void 0:L.min)==null?void 0:O[2])??-1)+(((j=(F=B.bbox)==null?void 0:F.max)==null?void 0:j[2])??1))/2]})}},g.onerror=C=>{g.terminate(),S(C)},o instanceof ArrayBuffer?(Ft("parsing PLY..."),g.postMessage({type:"start",plyBuffer:o},[o])):g.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Us={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,S){S(l)})(ql,function(f){class S{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class B extends C{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class W extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class I extends C{constructor(e,t){super(e),this.expanded=t}}class U extends C{constructor(e,t){super(e),this.index=t}}function q(n){return n}function R(n){return n==null}function Z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function X(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const V={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class L{static alreadyDisposed(){return new L({type:"alreadydisposed"})}static notBindable(){return new L({type:"notbindable"})}static propertyNotFound(e){return new L({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new L({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=V[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class O{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!O.isBindable(s))throw L.notBindable();if(!(e in s))throw L.propertyNotFound(e);s[e]=t}}class F extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class j{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const T="tp";function H(n){return(t,s)=>[T,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function oe(n,e){return t=>e(n(t))}function we(n){return n.rawValue}function ce(n,e){n.emitter.on("change",oe(we,e)),e(n.rawValue)}function se(n,e,t){ce(n.value(e),t)}function _e(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ne(n,e){return t=>{_e(n,e,t)}}function Ne(n,e){ce(n,t=>{e.textContent=t??""})}const Ge=H("btn");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Ge("t")),Ne(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Me{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ge{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,E)=>u===E,this.emitter=new j,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:u,sender:this}))}}class ye{constructor(e){this.emitter=new j,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function le(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ye(n):new ge(n,e)}class re{constructor(e){this.emitter=new j,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:le(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new re(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((u,E)=>{if(u===void 0)return;const A=e[E],te=A(n[E]);return te.succeeded?Object.assign(Object.assign({},u),{[E]:te.value}):void 0},{});return s}function me(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function he(n){return n===null?!1:typeof n=="object"}function ve(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ae(n){return{custom:e=>ve(e)(n),boolean:ve(e=>typeof e=="boolean"?e:void 0)(n),number:ve(e=>typeof e=="number"?e:void 0)(n),string:ve(e=>typeof e=="string"?e:void 0)(n),function:ve(e=>typeof e=="function"?e:void 0)(n),constant:e=>ve(t=>t===e?e:void 0)(n),raw:ve(e=>e)(n),object:e=>ve(t=>{if(he(t))return ie(t,e)})(n),array:e=>ve(t=>{if(Array.isArray(t))return me(t,e)})(n)}}const xe={optional:Ae(!0),required:Ae(!1)};function Ce(n,e){const t=xe.required.object(e)(n);return t.succeeded?t.value:void 0}function Oe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Y{constructor(e){this.value_=e}static create(e){return[new Y(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const y=H("");function i(n,e){return ne(n,y(void 0,e))}class _ extends re{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Y.create(le(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const E=e??{};return new _(re.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(u=E.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ce(this.globalDisabled_,i(e,"disabled")),se(this,"hidden",i(e,"hidden"))}bindDisabled(e){ce(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ce(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function h(){return["veryfirst","first","last","verylast"]}const b=H(""),P={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{h().forEach(s=>{t.classList.remove(b(void 0,P[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,P[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Oe({key:"parent",target:_.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const w="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function p(n){return n.ontouchstart!==void 0}function c(){return globalThis}function a(){return c().document}function d(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(w,"svg");return t.innerHTML=x[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function $(n){n.parentElement&&n.parentElement.removeChild(n)}function K(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function N(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Q(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ee=H("lbl");function de(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ee()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ee("l")),se(t.props,"label",E=>{R(E)?this.element.classList.add(ee(void 0,"nol")):(this.element.classList.remove(ee(void 0,"nol")),N(s),s.appendChild(de(e,E)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(ee("v")),this.element.appendChild(u),this.valueElement=u}}class pe extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ue={id:"button",type:"blade",accept(n){const e=xe,t=Ce(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new pe(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:new Me(n.document,{props:re.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof pe)||!(n.controller.valueController instanceof Me)?null:new F(n.controller)}};class ke extends k{constructor(e){super(e),this.value=e.value}}function Be(){return new re({positions:le([],{equals:Z})})}class qe extends re{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=re.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!R(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};se(this,"expanded",s),se(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Le(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function Ye(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),R(n.get("expandedHeight"))){const t=Le(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class et extends g{constructor(e,t){super(e),this.rackApi_=t}}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ue(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class st{constructor(e){this.emitter=new j,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw L.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Ze extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class je extends pe{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new W(this,t,this.controller_.binding.target.presetKey)})}}class He extends pe{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function pt(n){return n instanceof vt?n.apiSet_:n instanceof et?n.rackApi_.apiSet_:null}function at(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw L.shouldNeverHappen();return t}function Bt(n,e,t){if(!O.isBindable(n))throw L.notBindable();return new O(n,e,t)}class vt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new j,this.apiSet_=new st(pt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>at(this.apiSet_,e))}addInput(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,A=this.pool_.createInput(E,Bt(e,t,u.presetKey),u),te=new Ze(A);return this.add(te,u.index)}addMonitor(e,t,s){const u=s??{},E=this.controller_.view.element.ownerDocument,A=this.pool_.createMonitor(E,Bt(e,t),u),te=new rt(A);return this.add(te,u.index)}addFolder(e){return Ue(this,e)}addButton(e){return it(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return ot(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=at(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof je){const s=at(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new B(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof ke){const s=at(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof He))throw L.shouldNeverHappen();const t=at(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new W(t,s.target.read(),s.target.presetKey)})}}class Pt extends et{constructor(e,t){super(e,new vt(e.rackController,t)),this.emitter_=new j,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new I(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class St extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Dt{constructor(e,t){const s=H(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Gt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof je&&s.binding===e)return s}return null}function Et(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof He&&s.binding===e)return s}return null}function Qt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof ke&&s.value===e)return s}return null}function Nt(n){return n instanceof Xe?n.rack:n instanceof St?n.rackController.rack:null}function Ct(n){const e=Nt(n);return e?e.bcSet_:null}class Jt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new j,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new st(Ct),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),X(e,"parent")?e.parent=this:(e.parent_=this,Oe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){X(e,"parent")?e.parent=null:(e.parent_=null,Oe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof je)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof ke)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Nt(s);if(u){const E=u.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof je)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof ke)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Nt(s);if(u){const E=u.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const E=[];u===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),u===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),u.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Gt(this.find(je),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Et(this.find(He),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Qt(this.find(ke),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Xe extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Dt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Jt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&$(e.bladeController.view.element)}}const Rn=H("cnt");class Un{constructor(e,t){var s;this.className_=H((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Rn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),se(this.foldable_,"completed",ne(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),se(t.props,"title",Ee=>{R(Ee)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const A=e.createElement("div");A.classList.add(this.className_("t")),Ne(t.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A;const te=e.createElement("div");te.classList.add(this.className_("m")),this.buttonElement.appendChild(te);const Se=t.containerElement;Se.classList.add(this.className_("c")),this.element.appendChild(Se),this.containerElement=Se}}class en extends St{constructor(e,t){var s;const u=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new Xe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new Un(e,{containerElement:E.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,Ye(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Vn={id:"folder",type:"blade",accept(n){const e=xe,t=Ce(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new en(n.document,{blade:n.blade,expanded:n.params.expanded,props:re.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof en?new Pt(n.controller,n.pool):null}};class Lt extends ke{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class gn extends g{}const wn=H("spr");class xn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(wn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(wn("r")),this.element.appendChild(s)}}class yn extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new xn(e,{viewProps:t.viewProps})}))}}const pn={id:"separator",type:"blade",accept(n){const t=Ce(n,{view:xe.required.constant("separator")});return t?{params:t}:null},controller(n){return new yn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof yn?new gn(n.controller):null}},Tt=H("tbi");class J{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tt()),t.viewProps.bindClassModifiers(this.element),se(t.props,"selected",E=>{E?this.element.classList.add(Tt(void 0,"sel")):this.element.classList.remove(Tt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Tt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Tt("t")),Ne(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class fe{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new J(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ae{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new fe(e,{props:t.itemProps,viewProps:_.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Xe(e,{blade:Be(),viewProps:_.create()}),this.props=t.props,se(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ze{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Ve extends et{constructor(e,t){super(e,new vt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new j,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw L.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ae(t,{itemProps:re.fromObject({selected:!1,title:e.title}),props:re.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw L.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw L.shouldNeverHappen();const s=new ze(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw L.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new U(this,e.rawValue)})}}const Pe=-1;class Te{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=le(!0),this.selectedIndex=le(Pe),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Pe,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Fe=H("tab");class Qe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Fe(),Rn()),t.viewProps.bindClassModifiers(this.element),ce(t.empty,ne(this.element,Fe(void 0,"nop")));const s=e.createElement("div");s.classList.add(Fe("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(Fe("i")),this.element.appendChild(u);const E=t.contentsElement;E.classList.add(Fe("c")),this.element.appendChild(E),this.contentsElement=E}}class ct extends St{constructor(e,t){const s=new Xe(e,{blade:t.blade,viewProps:t.viewProps}),u=new Te;super({blade:t.blade,rackController:s,view:new Qe(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new st(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;$(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const _t={id:"tab",type:"blade",accept(n){const e=xe,t=Ce(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new ct(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ae(n.document,{itemProps:re.fromObject({selected:!1,title:t.title}),props:re.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof ct?new Ve(n.controller,n.pool):null}};function as(n,e){const t=n.accept(e.params);if(!t)return null;const s=xe.optional.boolean(e.params.disabled).value,u=xe.optional.boolean(e.params.hidden).value;return n.controller({blade:Be(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:_.create({disabled:s,hidden:u})})}class On{constructor(){this.disabled=!1,this.emitter=new j}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Fn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new j,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ls{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new j,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Pn(n,e){for(;n.length<e;)n.push(void 0)}function cs(n){const e=[];return Pn(e,n),le(e)}function us(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Nn(n,e){const t=[...us(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Pn(t,n.length),t}class ds{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new j,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Nn(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Wt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function tt(n,e){if(n instanceof e)return n;if(n instanceof Wt){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class gt{constructor(e){this.values=re.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Mt{constructor(e){this.values=re.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class At{constructor(e){this.values=re.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return R(s)||(u=Math.max(u,s)),R(t)||(u=Math.min(u,t)),u}}class zt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const $t=H("lst");class ps{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add($t()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add($t("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add($t("m")),u.appendChild(v(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,se(this.props_,"options",E=>{K(this.selectElement),E.forEach(A=>{const te=e.createElement("option");te.textContent=A.text,this.selectElement.appendChild(te)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class It{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new ps(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const js=H("pop");class Ai{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(js()),t.viewProps.bindClassModifiers(this.element),ce(t.shows,ne(this.element,js(void 0,"v")))}}class Ks{constructor(e,t){this.shows=le(!1),this.viewProps=t.viewProps,this.view=new Ai(e,{shows:this.shows,viewProps:this.viewProps})}}const Hs=H("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Hs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Wn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);R(u)||(this.value.rawValue=u),this.view.refresh()}}function Gi(n){return String(n)}function Ys(n){return n==="false"?!1:!!n}function Zs(n){return Gi(n)}class Li{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const zi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ii{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ri={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ui{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ri[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function hs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function Sn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function En(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=En(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=En(n,e);return u===""?"":s+u}function fs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Oi(n,e);return s===""?"":t+s}function Xs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+En(n,e)}function Fi(n,e){const t=Xs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=En(n,e);return e+=u.length,t+s+u+fs(n,e)}function Ni(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=En(n,e);return e+=s.length,s===""?"":t+s+fs(n,e)}function Wi(n,e){const t=Xs(n,e);return e+=t.length,t===""?"":t+fs(n,e)}const $i=hs([Fi,Ni,Wi]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function Ki(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ki(n,e);return s===""?"":t+s}function Yi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Yi(n,e);return s===""?"":t+s}const Xi=hs([ji,Hi,Zi]),Qi=hs([Xi,$i]);function Ji(n,e){const t=Qi(n,e);return e+=t.length,t===""?null:{evaluable:new Li(t),cursor:e}}function eo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Js(n,e);if(!s)return null;e=s.cursor,e+=Sn(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function to(n,e){var t;return(t=Ji(n,e))!==null&&t!==void 0?t:eo(n,e)}function Qs(n,e){const t=to(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=Qs(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new Ui(s,u.evaluable)}):null}function no(n,e,t){t+=Sn(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=Sn(e,t).length,{cursor:t,operator:s}):null}function so(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let E=u.evaluable;for(;;){const A=no(e,t,s);if(!A)break;s=A.cursor;const te=n(t,s);if(!te)return null;s=te.cursor,E=new Ii(A.operator,E,te.evaluable)}return E?{cursor:s,evaluable:E}:null}}const ro=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>so(n,e),Qs);function Js(n,e){return e+=Sn(n,e).length,ro(n,e)}function io(n){const e=Js(n,0);return!e||e.cursor+Sn(n,e.cursor).length!==n.length?null:e.evaluable}function Rt(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function er(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Rt(n);if(!R(e))return e}return 0}function oo(n){return String(n)}function ht(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ao=ht(0);function $n(n){return ao(n)+"%"}function tr(n){return String(n)}function _s(n){return n}function Cn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function E(A){u||(u=!0,A(),u=!1)}n.emitter.on("change",A=>{E(()=>{e.setRawValue(t(n,e),A.options)})}),e.emitter.on("change",A=>{E(()=>{n.setRawValue(s(n,e),A.options)}),E(()=>{e.setRawValue(t(n,e),A.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function kn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Ut(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function lo(n){return n==="ArrowUp"||n==="ArrowDown"}function nr(n){return lo(n)||n==="ArrowLeft"||n==="ArrowRight"}function ms(n,e){var t,s;const u=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class tn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new j,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ms(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ms(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ms(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Je(n,e,t,s,u){const E=(n-e)/(t-e);return s+E*(u-s)}function sr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function rr(n,e){return(n%e+e)%e}const wt=H("txt");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(wt(),wt(void 0,"num")),t.arrayPosition&&this.element.classList.add(wt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(wt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(wt()),this.inputElement.classList.add(wt("i"));const u=e.createElement("div");u.classList.add(wt("k")),this.element.appendChild(u),this.knobElement=u;const E=e.createElementNS(w,"svg");E.classList.add(wt("g")),this.knobElement.appendChild(E);const A=e.createElementNS(w,"path");A.classList.add(wt("gb")),E.appendChild(A),this.guideBodyElem_=A;const te=e.createElementNS(w,"path");te.classList.add(wt("gh")),E.appendChild(te),this.guideHeadElem_=te;const Se=e.createElement("div");Se.classList.add(H("tt")()),this.knobElement.appendChild(Se),this.tooltipElem_=Se,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(wt(void 0,"drg"));return}this.element.classList.add(wt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Bn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=le(null),this.view=new co(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new tn(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let A=e;return u!==void 0&&(A=Math.max(A,u)),E!==void 0&&(A=Math.min(A,E)),A}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);R(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,kn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,kn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const bs=H("sld");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(bs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(bs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(bs("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(Je(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class po{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new uo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new tn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Je(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,Ut(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,Ut(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vs=H("sldtxt");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vs());const s=e.createElement("div");s.classList.add(vs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(vs("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new po(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Bn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new ho(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Tn(n,e){n.write(e)}function qn(n){const e=xe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function ir(n){if(n==="inline"||n==="popup")return n}function qt(n){const e=xe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function or(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ws(n){return R(n)?null:new Mt(or(n))}function fo(n){const e=n?tt(n,zt):null;return e?e.step:null}function jn(n,e){const t=n&&tt(n,zt);return t?sr(t.step):Math.max(sr(e),2)}function hn(n){const e=fo(n);return e??1}function fn(n,e){var t;const s=n&&tt(n,zt),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const Kn=H("ckb");class _o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Kn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Kn("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(Kn("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(Kn("w")),s.appendChild(E);const A=v(e,"check");E.appendChild(A),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class mo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new _o(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function bo(n){const e=[],t=ws(n.options);return t&&e.push(t),new Wt(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ce(e,{options:xe.optional.custom(qn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ys,constraint:n=>bo(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&tt(s,Mt);return u?new It(e,{props:new re({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new mo(e,{value:t,viewProps:n.viewProps})}},nn=H("col");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(nn()),t.foldable.bindExpandedClass(this.element,nn(void 0,"expanded")),se(t.foldable,"completed",ne(this.element,nn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(nn("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(nn("s")),s.appendChild(u),this.swatchElement=u;const E=e.createElement("div");if(E.classList.add(nn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(nn("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}function wo(n,e,t){const s=ut(n/255,0,1),u=ut(e/255,0,1),E=ut(t/255,0,1),A=Math.max(s,u,E),te=Math.min(s,u,E),Se=A-te;let Ee=0,We=0;const $e=(te+A)/2;return Se!==0&&(We=Se/(1-Math.abs(A+te-1)),s===A?Ee=(u-E)/Se:u===A?Ee=2+(E-s)/Se:Ee=4+(s-u)/Se,Ee=Ee/6+(Ee<0?1:0)),[Ee*360,We*100,$e*100]}function xo(n,e,t){const s=(n%360+360)%360,u=ut(e/100,0,1),E=ut(t/100,0,1),A=(1-Math.abs(2*E-1))*u,te=A*(1-Math.abs(s/60%2-1)),Se=E-A/2;let Ee,We,$e;return s>=0&&s<60?[Ee,We,$e]=[A,te,0]:s>=60&&s<120?[Ee,We,$e]=[te,A,0]:s>=120&&s<180?[Ee,We,$e]=[0,A,te]:s>=180&&s<240?[Ee,We,$e]=[0,te,A]:s>=240&&s<300?[Ee,We,$e]=[te,0,A]:[Ee,We,$e]=[A,0,te],[(Ee+Se)*255,(We+Se)*255,($e+Se)*255]}function yo(n,e,t){const s=ut(n/255,0,1),u=ut(e/255,0,1),E=ut(t/255,0,1),A=Math.max(s,u,E),te=Math.min(s,u,E),Se=A-te;let Ee;Se===0?Ee=0:A===s?Ee=60*(((u-E)/Se%6+6)%6):A===u?Ee=60*((E-s)/Se+2):Ee=60*((s-u)/Se+4);const We=A===0?0:Se/A,$e=A;return[Ee,We*100,$e*100]}function ar(n,e,t){const s=rr(n,360),u=ut(e/100,0,1),E=ut(t/100,0,1),A=E*u,te=A*(1-Math.abs(s/60%2-1)),Se=E-A;let Ee,We,$e;return s>=0&&s<60?[Ee,We,$e]=[A,te,0]:s>=60&&s<120?[Ee,We,$e]=[te,A,0]:s>=120&&s<180?[Ee,We,$e]=[0,A,te]:s>=180&&s<240?[Ee,We,$e]=[0,te,A]:s>=240&&s<300?[Ee,We,$e]=[te,0,A]:[Ee,We,$e]=[A,0,te],[(Ee+Se)*255,(We+Se)*255,($e+Se)*255]}function Po(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function So(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function sn(n){return[n[0],n[1],n[2]]}function lr(n,e){return[n[0],n[1],n[2],e]}const Eo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Po,rgb:xo},hsv:{hsl:So,hsv:(n,e,t)=>[n,e,t],rgb:ar},rgb:{hsl:wo,hsv:yo,rgb:(n,e,t)=>[n,e,t]}};function Hn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:rr(n,e)}function ko(n,e,t){var s;const u=Hn(e,t);return[e==="rgb"?ut(n[0],0,u[0]):Co(n[0],u[0]),ut(n[1],0,u[1]),ut(n[2],0,u[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function cr(n,e,t,s){const u=Hn(e,t),E=Hn(e,s);return n.map((A,te)=>A/u[te]*E[te])}function Bo(n,e,t){const s=cr(n,e.mode,e.type,"int"),u=Eo[e.mode][t.mode](...s);return cr(u,t.mode,"int",t.type)}function Yn(n,e){return typeof n!="object"||R(n)?!1:e in n&&typeof n[e]=="number"}class Re{static black(e="int"){return new Re([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Re(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Yn(e,"r")&&Yn(e,"g")&&Yn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Yn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==u[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=ko(e,t,s)}getComponents(e,t="int"){return lr(Bo(sn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const jt=H("colp");class To{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(jt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(jt("hsv"));const u=e.createElement("div");u.classList.add(jt("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const E=e.createElement("div");E.classList.add(jt("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const A=e.createElement("div");if(A.classList.add(jt("rgb")),this.textView_=t.textView,A.appendChild(this.textView_.element),this.element.appendChild(A),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const te=e.createElement("div");te.classList.add(jt("a"));const Se=e.createElement("div");Se.classList.add(jt("ap")),Se.appendChild(this.alphaViews_.palette.element),te.appendChild(Se);const Ee=e.createElement("div");Ee.classList.add(jt("at")),Ee.appendChild(this.alphaViews_.text.element),te.appendChild(Ee),this.element.appendChild(te)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function xs(n){const e=xe;return Ce(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(ir)})}function rn(n){return n?.1:1}function on(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ao(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function xt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function ur(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function dr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[xt(e[1],255),xt(e[2],255),xt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function pr(n){return e=>{const t=dr(e);return t?new Re(t,"rgb",n):null}}function hr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[xt(e[1],255),xt(e[2],255),xt(e[3],255),xt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function fr(n){return e=>{const t=hr(e);return t?new Re(t,"rgb",n):null}}function _r(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ur(e[1]),xt(e[2],100),xt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function mr(n){return e=>{const t=_r(e);return t?new Re(t,"hsl",n):null}}function br(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ur(e[1]),xt(e[2],100),xt(e[3],100),xt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=br(e);return t?new Re(t,"hsl",n):null}}function gr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Go(n){const e=gr(n);return e?new Re(e,"rgb","int"):null}function wr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Je(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Je(parseInt(t[4],16),0,255,0,1)]:null}function Lo(n){const e=wr(n);return e?new Re(e,"rgb","int"):null}function xr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function yr(n){return e=>{const t=xr(e);return t?new Re(t,"rgb",n):null}}function Pr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Sr(n){return e=>{const t=Pr(e);return t?new Re(t,"rgb",n):null}}const zo=[{parser:gr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:wr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:dr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:hr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:_r,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:xr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Pr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return zo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function ys(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Er={int:[Go,Lo,pr("int"),fr("int"),mr("int"),vr("int"),yr("int"),Sr("int")],float:[pr("float"),fr("float"),mr("float"),vr("float"),yr("float"),Sr("float")]};function Ro(n){const e=Er[n];return t=>{if(typeof t!="string")return Re.black(n);const s=e.reduce((u,E)=>u||E(t),null);return s??Re.black(n)}}function Ps(n){const e=Er[n];return t=>e.reduce((s,u)=>s||u(t),null)}function Cr(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function kr(n,e="#"){const t=sn(n.getComponents("rgb")).map(Cr).join("");return`${e}${t}`}function Ss(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Cr).join("");return`${e}${s}`}function Br(n,e){const t=ht(e==="float"?2:0);return`rgb(${sn(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function Uo(n){return e=>Br(e,n)}function Zn(n,e){const t=ht(2),s=ht(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,A)=>(A===3?t:s)(E)).join(", ")})`}function Vo(n){return e=>Zn(e,n)}function Oo(n){const e=[ht(0),$n,$n];return`hsl(${sn(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function Fo(n){const e=[ht(0),$n,$n,ht(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Tr(n,e){const t=ht(e==="float"?2:0),s=["r","g","b"];return`{${sn(n.getComponents("rgb",e)).map((E,A)=>`${s[A]}: ${t(E)}`).join(", ")}}`}function No(n){return e=>Tr(e,n)}function Mr(n,e){const t=ht(2),s=ht(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((A,te)=>{const Se=te===3?t:s;return`${u[te]}: ${Se(A)}`}).join(", ")}}`}function Wo(n){return e=>Mr(e,n)}const $o=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:kr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ss},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Wo(e)}],[])];function Es(n){return $o.reduce((e,t)=>e||(Ao(t.format,n)?t.stringifier:null),null)}const Mn=H("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Mn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Mn("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Mn("c")),s.appendChild(u),this.colorElem_=u;const E=e.createElement("div");E.classList.add(Mn("m")),this.element.appendChild(E),this.markerElem_=E;const A=e.createElement("div");A.classList.add(Mn("p")),this.markerElem_.appendChild(A),this.previewElem_=A,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Re([t[0],t[1],t[2],0],"rgb"),u=new Re([t[0],t[1],t[2],255],"rgb"),E=["to right",Zn(s),Zn(u)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=Zn(e);const A=Je(t[3],0,1,0,100);this.markerElem_.style.left=`${A}%`}onValueChange_(){this.update_()}}class jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new tn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[E,A,te]=u.getComponents("hsv");this.value.setRawValue(new Re([E,A,te,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(rn(!0),Ut(e));if(t===0)return;const s=this.value.rawValue,[u,E,A,te]=s.getComponents("hsv");this.value.setRawValue(new Re([u,E,A,te+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(rn(!0),Ut(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const _n=H("coltxt");function Ko(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const E=n.createElement("option");return E.textContent=u.text,E.value=u.value,s.appendChild(E),s},n.createDocumentFragment())),e}class Ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(_n("m")),this.modeElem_=Ko(e),this.modeElem_.classList.add(_n("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(_n("mm")),u.appendChild(v(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(_n("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),ce(t.colorMode,A=>{this.modeElem_.value=A})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(_n("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Yo(n){return ht(n==="float"?2:0)}function Zo(n,e,t){const s=Hn(n,e)[t];return new gt({min:0,max:s})}function Cs(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:rn(!1),parser:e.parser,props:re.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Yo(e.colorType)}),value:le(0,{constraint:Zo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Xo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=le(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ho(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Cs(e,t,0),Cs(e,t,1),Cs(e,t,2)];return s.forEach((u,E)=>{Cn({primary:this.value,secondary:u.value,forward:A=>A.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(A,te)=>{const Se=this.colorMode.rawValue,Ee=A.rawValue.getComponents(Se,this.colorType_);return Ee[E]=te.rawValue,new Re(lr(sn(Ee),Ee[3]),Se,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ks=H("hpl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ks("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(ks("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Br(new Re([t,100,100],"hsv"));const s=Je(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new tn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,E,A,te]=u.getComponents("hsv");this.value.setRawValue(new Re([s,E,A,te],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(rn(!1),Ut(e));if(t===0)return;const s=this.value.rawValue,[u,E,A,te]=s.getComponents("hsv");this.value.setRawValue(new Re([u+t,E,A,te],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(rn(!1),Ut(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Bs=H("svp"),Ar=64;class ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Bs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Ar,s.width=Ar,s.classList.add(Bs("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(Bs("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=d(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,E=this.canvasElement.height,A=e.getImageData(0,0,u,E),te=A.data;for(let We=0;We<E;We++)for(let $e=0;$e<u;$e++){const an=Je($e,0,u,0,100),Dn=Je(We,0,E,100,0),Gn=ar(s[0],an,Dn),Xn=(We*u+$e)*4;te[Xn]=Gn[0],te[Xn+1]=Gn[1],te[Xn+2]=Gn[2],te[Xn+3]=255}e.putImageData(A,0,0);const Se=Je(s[1],0,100,0,100);this.markerElem_.style.left=`${Se}%`;const Ee=Je(s[2],0,100,100,0);this.markerElem_.style.top=`${Ee}%`}onValueChange_(){this.update_()}}class ta{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new tn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(e.point.x,0,e.bounds.width,0,100),u=Je(e.point.y,0,e.bounds.height,100,0),[E,,,A]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Re([E,s,u,A],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){nr(e.key)&&e.preventDefault();const[t,s,u,E]=this.value.rawValue.getComponents("hsv"),A=rn(!1),te=mt(A,Ut(e)),Se=mt(A,kn(e));te===0&&Se===0||this.value.setRawValue(new Re([t,s+te,u+Se,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=rn(!1),s=mt(t,Ut(e)),u=mt(t,kn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ta(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new jo(e,{value:this.value,viewProps:this.viewProps}),text:new Bn(e,{parser:Rt,baseStep:.1,props:re.fromObject({draggingScale:.01,formatter:ht(2)}),value:le(0,{constraint:new gt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Cn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const E=s.rawValue.getComponents();return E[3]=u.rawValue,new Re(E,s.rawValue.mode)}}),this.textC_=new Xo(e,{colorType:t.colorType,parser:Rt,value:this.value,viewProps:this.viewProps}),this.view=new To(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ts=H("colsw");class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ts("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Ts("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ss(e)}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps})}}class Ms{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new ra(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Wn(e,{parser:t.parser,props:re.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new go(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ks(e,{viewProps:this.viewProps}):null;const u=new na(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,A)=>A.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ye(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Q(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Re.isColorObject(n)?Re.fromObject(n,e):Re.black(e)}function oa(n){return sn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function aa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function la(n){return new Re([n>>16&255,n>>8&255,n&255],"rgb")}function ca(n){return new Re([n>>24&255,n>>16&255,n>>8&255,Je(n&255,0,255,0,1)],"rgb")}function ua(n){return typeof n!="number"?Re.black():la(n)}function da(n){return typeof n!="number"?Re.black():ca(n)}function pa(n){const e=Es(n);return e?(t,s)=>{Tn(t,e(s))}:null}function ha(n){const e=n?aa:oa;return(t,s)=>{Tn(t,e(s))}}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ma(n,e){return(t,s)=>{n?fa(t,s,e):_a(t,s,e)}}function As(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ba(n){return n?e=>Ss(e,"0x"):e=>kr(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ga={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=xs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>As(n.params)?da:ua,equals:Re.equals,writer:n=>ha(As(n.params))},controller:n=>{const e=As(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:"int",expanded:t??!1,formatter:ba(e),parser:Ps("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function wa(n){return Re.isRgbaColorObject(n)}function xa(n){return e=>ia(e,n)}function ya(n,e){return t=>n?Mr(t,e):Tr(t,e)}const Pa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Re.isColorObject(n))return null;const t=xs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>xa(on(n.params)),equals:Re.equals,writer:n=>ma(wa(n.initialValue),on(n.params))},controller:n=>{var e;const t=Re.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,E=(e=on(n.params))!==null&&e!==void 0?e:"int";return new Ms(n.document,{colorType:E,expanded:s??!1,formatter:ya(t,E),parser:Ps(E),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ys(n,on(e));if(!t||!Es(t))return null;const u=xs(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return Ro((e=on(n.params))!==null&&e!==void 0?e:"int")},equals:Re.equals,writer:n=>{const e=ys(n.initialValue,on(n.params));if(!e)throw L.shouldNeverHappen();const t=pa(e);if(!t)throw L.notBindable();return t}},controller:n=>{const e=ys(n.initialValue,on(n.params));if(!e)throw L.shouldNeverHappen();const t=Es(e);if(!t)throw L.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Ps(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Kt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var E,A;return(A=(E=this.components[u])===null||E===void 0?void 0:E.constrain(s))!==null&&A!==void 0?A:s});return this.asm_.fromComponents(t)}}const Dr=H("pndtxt");class Ea{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Dr()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(Dr("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function Ca(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:le(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ds{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>Ca(e,t,u)),this.acs_.forEach((s,u)=>{Cn({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[u],backward:(E,A)=>{const te=t.assembly.toComponents(E.rawValue);return te[u]=A.rawValue,t.assembly.fromComponents(te)}})}),this.view=new Ea(e,{textViews:this.acs_.map(s=>s.view)})}}function Gr(n,e){return"step"in n&&!R(n.step)?new zt(n.step,e):null}function Lr(n){return!R(n.max)&&!R(n.min)?new gt({max:n.max,min:n.min}):!R(n.max)||!R(n.min)?new At({max:n.max,min:n.min}):null}function ka(n){const e=tt(n,gt);if(e)return[e.values.get("min"),e.values.get("max")];const t=tt(n,At);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ba(n,e){const t=[],s=Gr(n,e);s&&t.push(s);const u=Lr(n);u&&t.push(u);const E=ws(n.options);return E&&t.push(E),new Wt(t)}const Ta={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=Ce(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(qn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er,constraint:n=>Ba(n.params,n.initialValue),writer:n=>Tn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&tt(s,Mt);if(u)return new It(n.document,{props:new re({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ht(jn(s,t.rawValue)),A=s&&tt(s,gt);return A?new gs(n.document,{baseStep:hn(s),parser:Rt,sliderProps:new re({maxValue:A.values.value("max"),minValue:A.values.value("min")}),textProps:re.fromObject({draggingScale:fn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new Bn(n.document,{baseStep:hn(s),parser:Rt,props:re.fromObject({draggingScale:fn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class Ht{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(R(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const zr={toComponents:n=>n.getComponents(),fromComponents:n=>new Ht(...n)},mn=H("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element),ce(t.expanded,ne(this.element,mn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(mn("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(mn("b")),u.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const E=e.createElement("div");if(E.classList.add(mn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(mn("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}const Yt=H("p2dp");class Aa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Yt()),t.layout==="popup"&&this.element.classList.add(Yt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Yt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(w,"svg");u.classList.add(Yt("g")),this.padElement.appendChild(u),this.svgElem_=u;const E=e.createElementNS(w,"line");E.classList.add(Yt("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const A=e.createElementNS(w,"line");A.classList.add(Yt("ax")),A.setAttributeNS(null,"x1","50%"),A.setAttributeNS(null,"y1","0"),A.setAttributeNS(null,"x2","50%"),A.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(A);const te=e.createElementNS(w,"line");te.classList.add(Yt("l")),te.setAttributeNS(null,"x1","50%"),te.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(te),this.lineElem_=te;const Se=e.createElement("div");Se.classList.add(Yt("m")),this.padElement.appendChild(Se),this.markerElem_=Se,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=Je(e,-s,+s,0,100),E=Je(t,-s,+s,0,100),A=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${A}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${A}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Ir(n,e,t){return[mt(e[0],Ut(n)),mt(e[1],kn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Aa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new tn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=Je(e.point.x,0,e.bounds.width,-s,+s),E=Je(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Ht(u,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){nr(e.key)&&e.preventDefault();const[t,s]=Ir(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Ht(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Ir(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ga{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ks(e,{viewProps:this.viewProps}):null;const E=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new Ds(e,{assembly:zr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Cn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,te)=>te.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ye(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Q(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class bn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(R(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Rr={toComponents:n=>n.getComponents(),fromComponents:n=>new bn(...n)};function La(n){return bn.isObject(n)?new bn(n.x,n.y,n.z):new bn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new Kt({assembly:Rr,components:[Vt("x"in n?n.x:void 0,e.x),Vt("y"in n?n.y:void 0,e.y),Vt("z"in n?n.z:void 0,e.z)]})}function Gs(n,e){return{baseStep:hn(e),constraint:e,textProps:re.fromObject({draggingScale:fn(e,n),formatter:ht(jn(e,n))})}}const Ra={id:"input-point3d",type:"input",accept:(n,e)=>{if(!bn.isObject(n))return null;const t=xe,s=Ce(e,{x:t.optional.custom(qt),y:t.optional.custom(qt),z:t.optional.custom(qt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>La,constraint:n=>Ia(n.params,n.initialValue),equals:bn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Kt))throw L.shouldNeverHappen();return new Ds(n.document,{assembly:Rr,axes:[Gs(e.rawValue.x,t.components[0]),Gs(e.rawValue.y,t.components[1]),Gs(e.rawValue.z,t.components[2])],parser:Rt,value:e,viewProps:n.viewProps})}};class vn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(R(e))return!1;const t=e.x,s=e.y,u=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function Ua(n){return vn.isObject(n)?new vn(n.x,n.y,n.z,n.w):new vn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Oa(n,e){return new Kt({assembly:Ur,components:[Vt("x"in n?n.x:void 0,e.x),Vt("y"in n?n.y:void 0,e.y),Vt("z"in n?n.z:void 0,e.z),Vt("w"in n?n.w:void 0,e.w)]})}function Fa(n,e){return{baseStep:hn(e),constraint:e,textProps:re.fromObject({draggingScale:fn(e,n),formatter:ht(jn(e,n))})}}const Na={id:"input-point4d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=xe,s=Ce(e,{x:t.optional.custom(qt),y:t.optional.custom(qt),z:t.optional.custom(qt),w:t.optional.custom(qt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:vn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Kt))throw L.shouldNeverHappen();return new Ds(n.document,{assembly:Ur,axes:e.rawValue.getComponents().map((s,u)=>Fa(s,t.components[u])),parser:Rt,value:e,viewProps:n.viewProps})}};function Wa(n){const e=[],t=ws(n.options);return t&&e.push(t),new Wt(e)}const $a={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Ce(e,{options:xe.optional.custom(qn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Wa(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&tt(s,Mt);return u?new It(e,{props:new re({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new Wn(e,{parser:E=>E,props:re.fromObject({formatter:_s}),value:t,viewProps:n.viewProps})}},An={monitor:{defaultInterval:200,defaultLineCount:3}},Vr=H("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Vr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Or=H("sgl");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Or()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Or("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class zs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ka={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ce(e,{lineCount:xe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ys},controller:n=>{var e;return n.value.rawValue.length===1?new zs(n.document,{formatter:Zs,value:n.value,viewProps:n.viewProps}):new Ls(n.document,{formatter:Zs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Zt=H("grl");class Ha{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Zt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(w,"svg");s.classList.add(Zt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(w,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const E=e.createElement("div");E.classList.add(Zt("t"),H("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach((We,$e)=>{if(We===void 0)return;const an=Je($e,0,t,0,e.width),Dn=Je(We,s,u,e.height,0);E.push([an,Dn].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const A=this.tooltipElem_,te=this.value.rawValue[this.cursor_.rawValue];if(te===void 0){A.classList.remove(Zt("t","a"));return}const Se=Je(this.cursor_.rawValue,0,t,0,e.width),Ee=Je(te,s,u,e.height,0);A.style.left=`${Se}px`,A.style.top=`${Ee}px`,A.textContent=`${this.formatter_(te)}`,A.classList.contains(Zt("t","a"))||(A.classList.add(Zt("t","a"),Zt("t","in")),r(A),A.classList.remove(Zt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ya{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=le(-1),this.view=new Ha(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!p(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new tn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Je(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Je(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Is(n){return"format"in n&&!R(n.format)?n.format:ht(2)}function Za(n){var e;return n.value.rawValue.length===1?new zs(n.document,{formatter:Is(n.params),value:n.value,viewProps:n.viewProps}):new Ls(n.document,{formatter:Is(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Xa(n){var e,t,s;return new Ya(n.document,{formatter:Is(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,props:re.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Fr(n){return"view"in n&&n.view==="graph"}const Qa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=Ce(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Fr(n)?64:1,reader:n=>er},controller:n=>Fr(n.params)?Xa(n):Za(n)},Ja={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=xe,s=Ce(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ls(n.document,{formatter:_s,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new zs(n.document,{formatter:_s,value:t,viewProps:n.viewProps})}};function el(n,e){var t;const s=n.accept(e.target.read(),e.params);if(R(s))return null;const u=xe,E={target:e.target,initialValue:s.initialValue,params:s.params},A=n.binding.reader(E),te=n.binding.constraint?n.binding.constraint(E):void 0,Se=le(A(s.initialValue),{constraint:te,equals:n.binding.equals}),Ee=new ls({reader:A,target:e.target,value:Se,writer:n.binding.writer(E)}),We=u.optional.boolean(e.params.disabled).value,$e=u.optional.boolean(e.params.hidden).value,an=n.controller({constraint:te,document:e.document,initialValue:s.initialValue,params:s.params,value:Ee.value,viewProps:_.create({disabled:We,hidden:$e})});return new je(e.document,{binding:Ee,blade:Be(),props:re.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:an})}function tl(n,e){return e===0?new On:new Fn(n,e??An.monitor.defaultInterval)}function nl(n,e){var t,s,u;const E=xe,A=n.accept(e.target.read(),e.params);if(R(A))return null;const te={target:e.target,initialValue:A.initialValue,params:A.params},Se=n.binding.reader(te),Ee=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(A.params))!==null&&s!==void 0?s:1,We=E.optional.number(e.params.interval).value,$e=new ds({reader:Se,target:e.target,ticker:tl(e.document,We),value:cs(Ee)}),an=E.optional.boolean(e.params.disabled).value,Dn=E.optional.boolean(e.params.hidden).value,Gn=n.controller({document:e.document,params:A.params,value:$e.value,viewProps:_.create({disabled:an,hidden:Dn})});return new He(e.document,{binding:$e,blade:Be(),props:re.fromObject({label:"label"in e.params?(u=E.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:Gn})}class sl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(R(u))throw new L({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((A,te)=>A??el(te,{document:e,target:t,params:s}),null);if(E)return E;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((E,A)=>E??nl(A,{document:e,params:s,target:t}),null);if(u)return u;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,E)=>u??as(E,{document:e,params:t}),null);if(!s)throw new L({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof je)return new Ze(e);if(e instanceof He)return new rt(e);if(e instanceof Xe)return new vt(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw L.shouldNeverHappen();return t}}function rl(){const n=new sl;return[ul,Ra,Na,$a,Ta,Sa,Pa,ga,vo,Ka,Ja,Qa,ue,Vn,pn,_t].forEach(e=>{n.register(e)}),n}function il(n){return Ht.isObject(n)?new Ht(n.x,n.y):new Ht}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Vt(n,e){if(!n)return;const t=[],s=Gr(n,e);s&&t.push(s);const u=Lr(n);return u&&t.push(u),new Wt(t)}function al(n,e){return new Kt({assembly:zr,components:[Vt("x"in n?n.x:void 0,e.x),Vt("y"in n?n.y:void 0,e.y)]})}function Nr(n,e){const[t,s]=n?ka(n):[];if(!R(t)||!R(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=hn(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function ll(n,e){const t=e instanceof Kt?e.components[0]:void 0,s=e instanceof Kt?e.components[1]:void 0,u=Nr(t,n.x),E=Nr(s,n.y);return Math.max(u,E)}function Wr(n,e){return{baseStep:hn(e),constraint:e,textProps:re.fromObject({draggingScale:fn(e,n),formatter:ht(jn(e,n))})}}function cl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Ht.isObject(n))return null;const t=xe,s=Ce(e,{expanded:t.optional.boolean,picker:t.optional.custom(ir),x:t.optional.custom(qt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:Ht.equals,writer:n=>ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Kt))throw L.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new Ga(e,{axes:[Wr(t.rawValue.x,s.components[0]),Wr(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:cl(n.params),maxValue:ll(t.rawValue,s),parser:Rt,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class $r extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class qr extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class jr extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const dl=function(){return{id:"list",type:"blade",accept(n){const e=xe,t=Ce(n,{options:e.required.custom(qn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Mt(or(n.params.options)),t=le(n.params.value,{constraint:e}),s=new It(n.document,{props:new re({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof It)?null:new $r(n.controller)}}}();function pl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function hl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class fl extends Pt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(je).map(s=>s.binding);hl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(je).map(t=>t.binding.target);return pl(e)}refresh(){this.controller_.rackController.rack.find(je).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()})}}class _l extends en{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ml={id:"slider",type:"blade",accept(n){const e=xe,t=Ce(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new gt({max:n.params.max,min:n.params.min}),E=new gs(n.document,{baseStep:1,parser:Rt,sliderProps:new re({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:re.fromObject({draggingScale:fn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:oo}),value:le(s,{constraint:u}),viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof gs)?null:new qr(n.controller)}},bl=function(){return{id:"text",type:"blade",accept(n){const e=xe,t=Ce(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Wn(n.document,{parser:n.params.parse,props:re.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:le(n.params.value),viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:re.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof Wn)?null:new jr(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(H("dfw")()),n.body&&n.body.appendChild(e),e}function Kr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class gl extends fl{constructor(e){var t,s;const u=e??{},E=(t=u.document)!==null&&t!==void 0?t:a(),A=rl(),te=new _l(E,{expanded:u.expanded,blade:Be(),props:re.fromObject({title:u.title}),viewProps:_.create()});super(te,A),this.pool_=A,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:vl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw L.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw L.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Kr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Kr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ml,dl,_t,bl]})}}const wl=new S("3.1.10");f.BladeApi=g,f.ButtonApi=F,f.FolderApi=Pt,f.InputBindingApi=Ze,f.ListApi=$r,f.MonitorBindingApi=rt,f.Pane=gl,f.SeparatorApi=gn,f.SliderApi=qr,f.TabApi=Ve,f.TabPageApi=ze,f.TextApi=jr,f.TpChangeEvent=B,f.VERSION=wl,Object.defineProperty(f,"__esModule",{value:!0})})})(Us,Us.exports);var jl=Us.exports;const Kl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
struct HtParams { tail_k : f32, wsr_sat_t : f32, _p1 : f32, _p2 : f32 };
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
const WSR_DGATE_MARGIN : f32 = 0.15;

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
    let t0 = Dbar * (1.0 + 0.5 * WSR_DGATE_MARGIN);
    let t1 = Dbar * (1.0 + 1.5 * WSR_DGATE_MARGIN);
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
}`,gi=32,Vs=1,Os=2,ri=4,Fs=8,wi=4,sc=7<<wi,ii=128,oi=256,rc=0,Xt=new ArrayBuffer(gi),lt={canvas_size:new Uint32Array(Xt,0,2),accel_flags:new Uint32Array(Xt,8,1),feature_mode:new Uint32Array(Xt,12,1),gaussian_scaling:new Float32Array(Xt,16,1),sh_bias:new Float32Array(Xt,20,1),color_K:new Uint32Array(Xt,24,1),walltime:new Float32Array(Xt,28,1)};function ic(o){lt.canvas_size[0]=o.width>>>0,lt.canvas_size[1]=o.height>>>0,lt.accel_flags[0]=(o.accel_flags??Vs|Os)>>>0,lt.feature_mode[0]=(o.feature_mode??rc)>>>0,lt.gaussian_scaling[0]=o.gaussian_scaling??1,lt.sh_bias[0]=o.sh_bias??.5,lt.color_K[0]=(o.color_K??0)>>>0,lt.walltime[0]=o.walltime??0}function xi(o,l){o.queue.writeBuffer(l,0,Xt)}function os(o,l,f){f&&o&&l&&xi(o,l)}function Qn(o,l,f,S,g=!0){lt.canvas_size[0]=o>>>0,lt.canvas_size[1]=l>>>0,os(f??null,S??null,g)}function ai(o,l,f,S=!0){lt.gaussian_scaling[0]=o,os(l??null,f??null,S)}function li(o,l,f,S=!0){lt.sh_bias[0]=o,os(l??null,f??null,S)}function cn(o,l,f,S=!0){let g=lt.accel_flags[0];if(o.oac!==void 0&&(g=o.oac?g|Vs:g&~Vs),o.spr!==void 0&&(g=o.spr?g|Os:g&~Os),o.bfc!==void 0&&(g=o.bfc?g|ri:g&~ri),o.meshCull!==void 0&&(g=o.meshCull?g|Fs:g&~Fs),o.meshSampleMode!==void 0){const C=(o.meshSampleMode&7)<<wi;g=g&~sc|C}o.meshSilhouetteCull!==void 0&&(g=o.meshSilhouetteCull?g|ii:g&~ii),o.meshInvertDepth!==void 0&&(g=o.meshInvertDepth?g|oi:g&~oi),lt.accel_flags[0]=g>>>0,os(l??null,f??null,S)}const oc=256,ac=gi,lc=8,cc=96,uc=12,qs=8,Ot=1<<qs,un=256,ss=32/qs,dc=0,ci=ss&1;function ui(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pc(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[f]}),g=C=>o.createComputePipeline({layout:S,compute:{module:l,entryPoint:C,constants:{WG_SIZE:un}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:f}}function hc(o,l,f){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[S]}),B=o.createPipelineLayout({bindGroupLayouts:[g]}),W=[];for(let I=0;I<ss;I++){const U={PASS_ID:I+dc,RS_RADIX_LOG2:qs,RS_RADIX_SIZE:Ot};W.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:l,entryPoint:"local_histogram_pass",constants:U}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:f,entryPoint:"scatter_elements",constants:U}})})}return{passes:W,localHistogramBindGroupLayout:S,scatterBindGroupLayout:g}}function fc(o){const l=o.createShaderModule({label:"local histogram",code:tc}),f=o.createShaderModule({label:"scatter",code:ec}),S=o.createShaderModule({label:"blelloch prefix",code:nc}),g=pc(o,S),C=hc(o,l,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:g}}function _c(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:S,rectsBuffer:g,texParamsBuffer:C,meta:B}}class mc{constructor(l,f,S,g,C,B=null,W=null){G(this,"device");G(this,"pc");G(this,"presentationFormat");G(this,"camera_buffer");G(this,"render_settings_buffer");G(this,"draw_indirect_buffer");G(this,"splat_2d_buffer");G(this,"querySet");G(this,"resolveBuffer");G(this,"resultBuffer");G(this,"queriesPerFrame",lc);G(this,"queryCapacityFrames",200);G(this,"sort_prefixBindGroup");G(this,"sort_pipelines");G(this,"sort_localHistogramBindGroups");G(this,"sort_scatterBindGroups");G(this,"lastFrame",0);G(this,"frameCount",0);G(this,"preprocessPipeline");G(this,"cullPipeline");G(this,"renderPipeline");G(this,"indirectPipeline");G(this,"htEnabled",!1);G(this,"wsrEnabled",!1);G(this,"wsrPipeline",null);G(this,"wsrCompositePipeline",null);G(this,"wsrGateEnabled",!1);G(this,"wsrBinsPipeline",null);G(this,"wsrGatedPipeline",null);G(this,"wsrBinsBgl",null);G(this,"wsrBinsBindGroup",null);G(this,"wsrBinTextures",[null,null,null,null]);G(this,"wsrBinViews",[null,null,null,null]);G(this,"wsrDGateEnabled",!1);G(this,"wsrDepthPipeline",null);G(this,"wsrGatedDPipeline",null);G(this,"wsrDbufBgl",null);G(this,"wsrDbufBindGroup",null);G(this,"wsrDbufTexture",null);G(this,"wsrDbufView",null);G(this,"htSortedTail",!1);G(this,"htOccTail",!1);G(this,"htTailOccPipeline",null);G(this,"renderShaderModule");G(this,"betaKernel",1);G(this,"renderSettingsBgl");G(this,"renderSplatsBgl");G(this,"atlasBgl");G(this,"htCorePipeline",null);G(this,"htTailPipeline",null);G(this,"htTail2Pipeline",null);G(this,"htCompositePipeline",null);G(this,"htComposite2Pipeline",null);G(this,"htCompositeBgl",null);G(this,"htCompositeBindGroup",null);G(this,"htDepthTexture",null);G(this,"htDepthView",null);G(this,"htCoreTexture",null);G(this,"htCoreView",null);G(this,"htAccumTexture",null);G(this,"htAccumView",null);G(this,"htTransTexture",null);G(this,"htTransView",null);G(this,"htW",0);G(this,"htH",0);G(this,"htTailBgl",null);G(this,"htTailBindGroup",null);G(this,"htParamsBuffer",null);G(this,"htTailK",150);G(this,"wsrSatT",.05);G(this,"sort_info_buffer");G(this,"sort_ping_pong");G(this,"crsBg");G(this,"gsBg");G(this,"cullBg2");G(this,"preprocessBg1");G(this,"renderSplatsBindGroup");G(this,"renderSettingsBindGroup");G(this,"atlasBindGroup");G(this,"indirectBindGroup");G(this,"sh_solvers_buffer");G(this,"mesh");G(this,"meshDepthPipeline",null);G(this,"meshDepthCameraBindGroup",null);G(this,"meshDepthMarginBindGroup",null);G(this,"meshMarginBuffer",null);G(this,"meshDepthTexture",null);G(this,"meshDepthView",null);G(this,"meshCullBindGroupLayout");G(this,"meshCullBindGroup");G(this,"meshCullWidth",0);G(this,"meshCullHeight",0);G(this,"meshStubTexture");G(this,"meshStubView");G(this,"bfcParamsBuffer");G(this,"meshOverlayPipeline",null);G(this,"meshOverlayEnabled",!1);G(this,"bgColor",[0,0,0,0]);G(this,"showPerfDialogNext",!1);G(this,"requestReorderNextFrame",!1);G(this,"reorderInFlight",!1);G(this,"downloadOnceNextRead",!1);G(this,"downloadOnceFileName","fps_metrics");G(this,"allFrameTimes",[]);G(this,"lastStageBreakdownMs",null);G(this,"timeQueryEnabled");G(this,"atlas");G(this,"atlasParamsBuffer");this.mesh=W;const I=C.includes("timestamp-query");this.timeQueryEnabled=I,I&&kt("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=S,this.camera_buffer=g,this.atlas=B??_c(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",re=>{console.error("A WebGPU error was not captured:",re.error)}),this._setupTimestampQueries(),this._setupBuffers();const U=(Math.floor((this.pc.num_points+un-1)/un)+1)*un,q=Math.ceil(U/un);console.log(`keys count adjusted: ${U}`),console.log(`key size: ${this.pc.num_points}`);const R=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=fc(f);const Z=[ui(U,f),ui(U,f)],X=f.createBuffer({label:"workgroup histograms",size:q*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),V=f.createBuffer({label:"workgroup prefixes",size:q*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=f.createBuffer({label:"digit base",size:Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=Math.ceil(q/un),F=Math.ceil(O/un),j=f.createBuffer({label:"prefix l0 sums",size:O*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),T=f.createBuffer({label:"prefix l0 offsets",size:O*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"prefix l1 sums",size:F*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"prefix l1 offsets",size:F*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:R}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:V}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:T}},{binding:5,resource:{buffer:H}},{binding:6,resource:{buffer:oe}},{binding:7,resource:{buffer:L}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:R}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:R}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:R}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:V}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:R}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:V}}]})],this.sort_info_buffer=R,this.sort_ping_pong=Z;const we=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ce=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),se=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),_e=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:we,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ce,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:_e,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const ne=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ne,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Ne=this.device.createShaderModule({code:Xl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,ce,se,this.meshCullBindGroupLayout]}),compute:{module:Ne,entryPoint:"surfel_cull"}}),this.mesh!==null){const re=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:re,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ie,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const me=this.device.createShaderModule({code:Ql});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[re,ie]}),vertex:{module:me,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ge=this.device.createShaderModule({code:Kl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,_e]}),compute:{module:Ge,entryPoint:"preprocess"}});const Ie=this.device.createShaderModule({code:Hl});Ie.getCompilationInfo().then(re=>{re.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),re.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Me=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ge=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ye=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),le=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Me,ge,ye]}),vertex:{module:Ie,entryPoint:"vs_main"},fragment:{module:Ie,entryPoint:"fs_main",constants:{BETA_KERNEL:le},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(re=>{re?console.error("[render_2dgs] pipeline create validation error:",re.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Me,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ci].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ye,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Ie,this.betaKernel=le,this.renderSettingsBgl=Me,this.renderSplatsBgl=ge,this.atlasBgl=ye}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setWsrSatT(l){this.wsrSatT=l,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,0,0]))}setHtTailK(l){this.htTailK=l,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([l,this.wsrSatT,0,0]))}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){cn({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}setBfcParams(l,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,f[0],f[1],f[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),f=new Uint32Array(l),S=new Float32Array(l);f[0]=this.atlas.meta.width|0,f[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureHtResources(l,f){var C,B,W,I,U,q;if(this.htCorePipeline===null){const R=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,this.wsrSatT,0,0]));const Z=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:Z,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTailOccPipeline=this.device.createRenderPipeline({label:"ht_tail_occ",layout:Z,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_occ",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.wsrPipeline=this.device.createRenderPipeline({label:"wsr_accumulate",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const X={format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}};this.wsrBinsPipeline=this.device.createRenderPipeline({label:"wsr_bins_prepass",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_bins",constants:{BETA_KERNEL:this.betaKernel},targets:[X,X,X,X]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrBinsBgl=this.device.createBindGroupLayout({label:"wsr gate bins (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},...[4,5,6,7].map(L=>({binding:L,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}))]}),this.wsrGatedPipeline=this.device.createRenderPipeline({label:"wsr_gated_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrBinsBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDepthPipeline=this.device.createRenderPipeline({label:"wsr_depth_anchor",layout:R,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_depth",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.wsrDbufBgl=this.device.createBindGroupLayout({label:"wsr dgate dbuf (group 3)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.wsrGatedDPipeline=this.device.createRenderPipeline({label:"wsr_gated_d_accumulate",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.wsrDbufBgl]}),vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_wsr_gated_d",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const V=this.device.createShaderModule({label:"ht_composite",code:Yl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:V,entryPoint:"vs_main"},fragment:{module:V,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.wsrCompositePipeline=this.device.createRenderPipeline({label:"wsr_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:V,entryPoint:"vs_main"},fragment:{module:V,entryPoint:"fs_wsr_composite",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:V,entryPoint:"vs_main"},fragment:{module:V,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===l&&this.htH===f)return;(C=this.htDepthTexture)==null||C.destroy(),(B=this.htCoreTexture)==null||B.destroy(),(W=this.htAccumTexture)==null||W.destroy(),(I=this.htTransTexture)==null||I.destroy();const S={width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},g=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:S,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:S,format:"rgba16float",usage:g}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:S,format:"rgba16float",usage:g}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:S,format:"r16float",usage:g}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]});for(let R=0;R<4;R++)(U=this.wsrBinTextures[R])==null||U.destroy(),this.wsrBinTextures[R]=this.device.createTexture({label:`wsr bins ${R}`,size:S,format:"rgba16float",usage:g}),this.wsrBinViews[R]=this.wsrBinTextures[R].createView();this.wsrBinsBindGroup=this.device.createBindGroup({label:"wsr gate bins bind (group 3)",layout:this.wsrBinsBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},...[0,1,2,3].map(R=>({binding:4+R,resource:this.wsrBinViews[R]}))]}),(q=this.wsrDbufTexture)==null||q.destroy(),this.wsrDbufTexture=this.device.createTexture({label:"wsr dgate dbuf",size:S,format:"rgba16float",usage:g}),this.wsrDbufView=this.wsrDbufTexture.createView(),this.wsrDbufBindGroup=this.device.createBindGroup({label:"wsr dgate dbuf bind (group 3)",layout:this.wsrDbufBgl,entries:[{binding:1,resource:{buffer:this.htParamsBuffer}},{binding:8,resource:this.wsrDbufView}]}),this.htW=l,this.htH=f}ensureMeshDepthTexture(l,f){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&bi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),S=f*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[ci].sort_indices_buffer,0,g,0,S),this.device.queue.submit([C.finish()]),await g.mapAsync(GPUMapMode.READ);const B=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(B)),g.unmap()}frame(l,f,S=!0){var q,R,Z,X;const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(lt.accel_flags[0]&Fs)!==0){const V=lt.canvas_size[0],L=lt.canvas_size[1];this.ensureMeshDepthTexture(V,L);const O={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},F=l.beginRenderPass(O);F.setPipeline(this.meshDepthPipeline),F.setBindGroup(0,this.meshDepthCameraBindGroup),F.setBindGroup(1,this.meshDepthMarginBindGroup),F.setVertexBuffer(0,this.mesh.vertexBuffer),F.setVertexBuffer(1,this.mesh.normalBuffer),F.setIndexBuffer(this.mesh.indexBuffer,"uint32"),F.drawIndexed(this.mesh.numIndices),F.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const V={label:"cull"};B&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const L=l.beginComputePass(V);L.setPipeline(this.cullPipeline),L.setBindGroup(0,this.crsBg),L.setBindGroup(1,this.gsBg),L.setBindGroup(2,this.cullBg2),L.setBindGroup(3,this.meshCullBindGroup);const O=Math.ceil(this.pc.num_points/oc);L.dispatchWorkgroups(O,1,1),L.end()}{const V=l.beginComputePass({label:"calculate indirect dispatch"});V.setPipeline(this.indirectPipeline),V.setBindGroup(0,this.indirectBindGroup),V.dispatchWorkgroups(1,1,1),V.end()}{const V={label:"preprocess"};B&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const L=l.beginComputePass(V);L.setPipeline(this.preprocessPipeline),L.setBindGroup(0,this.crsBg),L.setBindGroup(1,this.preprocessBg1),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),L.end()}const I=this.wsrEnabled&&(((R=(q=this.atlas)==null?void 0:q.meta)==null?void 0:R.probe_mode)|0)===2,U=I&&this.wsrDGateEnabled;if(!this.htEnabled&&!I||this.htSortedTail||U)for(let V=0;V<ss;V++){const L=V&1,O=this.sort_pipelines.passes[V],F=this.sort_localHistogramBindGroups[L],j=this.sort_scatterBindGroups[L];{const T={label:`upsweep_round${V}`};B&&!this.htEnabled&&V==0&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const H=l.beginComputePass(T);H.setPipeline(O.localHistogram),H.setBindGroup(0,F),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const T=l.beginComputePass({label:`prefix_round${V} - l0TileScan`});T.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),T.setBindGroup(0,this.sort_prefixBindGroup),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),T.end()}{const T=l.beginComputePass({label:`prefix_round${V} - l1TileScanOnL0`});T.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),T.setBindGroup(0,this.sort_prefixBindGroup),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),T.end()}{const T=l.beginComputePass({label:`prefix_round${V} - l1ScanSums`});T.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),T.setBindGroup(0,this.sort_prefixBindGroup),T.dispatchWorkgroups(1,Ot,1),T.end()}{const T=l.beginComputePass({label:`prefix_round${V} - addL1ToL0`});T.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),T.setBindGroup(0,this.sort_prefixBindGroup),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),T.end()}{const T=l.beginComputePass({label:`prefix_round${V} - addL0ToElems`});T.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),T.setBindGroup(0,this.sort_prefixBindGroup),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),T.end()}{const T=l.beginComputePass({label:`prefix_round${V} - computeDigitBase`});T.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),T.setBindGroup(0,this.sort_prefixBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:`scatter_round${V}`};B&&!this.htEnabled&&V==ss-1&&(T.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const H=l.beginComputePass(T);H.setPipeline(O.scatterElements),H.setBindGroup(0,j),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}if(I){const V=lt.canvas_size[0],L=lt.canvas_size[1];this.ensureHtResources(V,L);const O=this.wsrDGateEnabled,F=this.wsrGateEnabled&&!O;if(F){const j={label:"wsr_bins_prepass",colorAttachments:this.wsrBinViews.map(H=>({view:H,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}))};B&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5});const T=l.beginRenderPass(j);T.setPipeline(this.wsrBinsPipeline),T.setBindGroup(0,this.renderSettingsBindGroup),T.setBindGroup(1,this.renderSplatsBindGroup),T.setBindGroup(2,this.atlasBindGroup),T.drawIndirect(this.draw_indirect_buffer,0),T.end()}else!O&&B&&l.beginComputePass({label:"wsr_no_sort_stamp",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5}}).end();if(O){const j={label:"wsr_depth_anchor",colorAttachments:[{view:this.wsrDbufView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]};B&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const T=l.beginRenderPass(j);T.setPipeline(this.wsrDepthPipeline),T.setBindGroup(0,this.renderSettingsBindGroup),T.setBindGroup(1,this.renderSplatsBindGroup),T.setBindGroup(2,this.atlasBindGroup),T.drawIndirect(this.draw_indirect_buffer,0),T.end()}{const j={label:"wsr_accumulate",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}]};B&&!O&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const T=l.beginRenderPass(j);T.setPipeline(O?this.wsrGatedDPipeline:F?this.wsrGatedPipeline:this.wsrPipeline),T.setBindGroup(0,this.renderSettingsBindGroup),T.setBindGroup(1,this.renderSplatsBindGroup),T.setBindGroup(2,this.atlasBindGroup),O?T.setBindGroup(3,this.wsrDbufBindGroup):F&&T.setBindGroup(3,this.wsrBinsBindGroup),T.drawIndirect(this.draw_indirect_buffer,0),T.end()}{const j={label:"wsr_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(j.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const T=l.beginRenderPass(j);T.setPipeline(this.wsrCompositePipeline),T.setBindGroup(0,this.htCompositeBindGroup),T.draw(3),T.end()}}else if(this.htEnabled){const V=lt.canvas_size[0],L=lt.canvas_size[1];this.ensureHtResources(V,L);{const O={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4,endOfPassWriteIndex:C+5});const F=l.beginRenderPass(O);F.setPipeline(this.htCorePipeline),F.setBindGroup(0,this.renderSettingsBindGroup),F.setBindGroup(1,this.renderSplatsBindGroup),F.setBindGroup(2,this.atlasBindGroup),F.drawIndirect(this.draw_indirect_buffer,0),F.end()}if(this.htSortedTail){const O={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const F=l.beginRenderPass(O);F.setPipeline(this.htTail2Pipeline),F.setBindGroup(0,this.renderSettingsBindGroup),F.setBindGroup(1,this.renderSplatsBindGroup),F.setBindGroup(2,this.atlasBindGroup),F.drawIndirect(this.draw_indirect_buffer,0),F.end()}else{const O={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(O.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6});const F=l.beginRenderPass(O),j=this.htOccTail&&(((X=(Z=this.atlas)==null?void 0:Z.meta)==null?void 0:X.probe_mode)|0)===2;F.setPipeline(j?this.htTailOccPipeline:this.htTailPipeline),F.setBindGroup(0,this.renderSettingsBindGroup),F.setBindGroup(1,this.renderSplatsBindGroup),F.setBindGroup(2,this.atlasBindGroup),F.setBindGroup(3,this.htTailBindGroup),F.drawIndirect(this.draw_indirect_buffer,0),F.end()}{const O={label:"ht_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(O.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const F=l.beginRenderPass(O);F.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),F.setBindGroup(0,this.htCompositeBindGroup),F.draw(3),F.end()}}else{const V={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,endOfPassWriteIndex:C+7});const L=l.beginRenderPass(V);L.setPipeline(this.renderPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const O=this.device.createShaderModule({code:Jl}),F=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),j=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[F,j]}),vertex:{module:O,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:O,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const V={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},L=l.beginRenderPass(V);L.setPipeline(this.meshOverlayPipeline),L.setBindGroup(0,this.meshDepthCameraBindGroup),L.setBindGroup(1,this.meshDepthMarginBindGroup),L.setVertexBuffer(0,this.mesh.vertexBuffer),L.setVertexBuffer(1,this.mesh.normalBuffer),L.setIndexBuffer(this.mesh.indexBuffer,"uint32"),L.drawIndexed(this.mesh.numIndices),L.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),W=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,I=Array.from({length:g.length},()=>[]);let U=0;for(let F=0;F<B;F++){const j=(W+F)%this.queryCapacityFrames,T=j*this.queriesPerFrame;let H=!0;for(let oe=0;oe<g.length;oe++){const[we,ce,se]=g[oe];if(C[T+se]===0n||C[T+ce]===0n||C[T+ce]<C[T+se]){H=!1;break}}if(!H){!f&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}U++;for(let oe=0;oe<g.length;oe++){const[we,ce,se]=g[oe],_e=Number(C[T+se]),ne=Number(C[T+ce]);I[oe].push((ne-_e)/1e6)}}if(U===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...I[0]);const q=[];let R=0,Z=0,X=0;for(let F=0;F<g.length;F++){const j=g[F][0],T=I[F];let H=0;if(j==="Total"){const oe=this.allFrameTimes;H=oe.reduce((se,_e)=>se+_e,0)/oe.length;const we=[...oe].sort((se,_e)=>se-_e);R=we[Math.floor(we.length*.99)]||0;const ce=oe.reduce((se,_e)=>se+Math.pow(_e-H,2),0)/oe.length;Z=Math.sqrt(ce),X=H}else H=T.reduce((oe,we)=>oe+we,0)/T.length;q.push([j,H])}this.lastFrame+=this.frameCount,this.frameCount=0;const V=Object.fromEntries(q);this.lastStageBreakdownMs={cull:V.Culling??0,preprocess:V.Preprocess??0,sort:V.Sort??0,render:V.Render??0,total:V.Total??0};const O=`[TIMESTAMP - ${this.constructor.name}]
`+q.map(([F,j])=>`${F}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${R.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(O),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const F=`Stage,ms
`,j=q.map(([oe,we])=>`${oe},${we.toFixed(3)}`).join(`
`),T="data:text/csv;charset=utf-8,"+encodeURIComponent(F+j),H=document.createElement("a");H.href=T,H.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(H),H.click(),H.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(O)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ac,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,S=l?l.height:1;ic({width:f,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),xi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:In(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:In(this.pc.num_points*uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,S=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function bc(o,l){return 2*Math.atan(l/(2*o))}function vc(o,l,f,S){const g=Math.tan(S/2),C=Math.tan(f/2),B=g*o,W=-B,I=C*o,U=-I,q=dt.create();return q[0]=2*o/(I-U),q[5]=-2*o/(B-W),q[2]=(I+U)/(I-U),q[6]=(B+W)/(B-W),q[14]=1,q[10]=l/(l-o),q[11]=-(l*o)/(l-o),dt.transpose(q,q),q}async function gc(o){kt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return kt(`loaded cameras count: ${f.length}`),f.map(S=>{const g=z.clone(S.position),C=yt.create(...S.rotation.flat()),B=C[0],W=C[4],I=C[8],U=C[1],q=C[5],R=C[9],Z=C[2],X=C[6],V=C[10];B*(q*V-R*X)-W*(U*V-R*Z)+I*(U*X-q*Z)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const O=dt.fromMat3(C);return{position:g,rotation:O,img_name:S.img_name,id:S.id}})}const wc=4*2,xc=4*16,yi=4*xc+2*wc;function yc(o){return o.createBuffer({label:"camera uniform",size:yi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const ln=new Float32Array(yi/Float32Array.BYTES_PER_ELEMENT),rs=class rs{constructor(l,f){G(this,"uniform_buffer");G(this,"position",z.create());G(this,"rotation",dt.create());G(this,"fovY",45/180*Math.PI);G(this,"fovX");G(this,"focal",ei.create());G(this,"viewport",ei.create());G(this,"view_matrix",dt.identity());G(this,"view_inv_matrix",dt.identity());G(this,"proj_matrix",dt.identity());G(this,"proj_inv_matrix",dt.identity());G(this,"_negPos",z.create());G(this,"look",z.create(0,0,1));G(this,"up",z.create(0,1,0));G(this,"right",z.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=yc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=bc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=vc(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(rs.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let l=0;ln.set(this.view_matrix,l),l+=16,ln.set(this.view_inv_matrix,l),l+=16,ln.set(this.proj_matrix,l),l+=16,ln.set(this.proj_inv_matrix,l),l+=16,ln.set(this.viewport,l),l+=2,ln.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,ln)}set_preset(l){z.copy(l.position,this.position),dt.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};G(rs,"Z_AXIS",z.create(0,0,1));let Ns=rs;const Pc=z.create(1,0,0),Sc=z.create(0,1,0);function Ec(o,l){const f=o[0],S=o[4],g=o[8],C=o[1],B=o[5],W=o[9],I=o[2],U=o[6],q=o[10],R=f+B+q;let Z,X,V,L;if(R>0){const O=.5/Math.sqrt(R+1);Z=.25/O,X=(U-W)*O,V=(g-I)*O,L=(C-S)*O}else if(f>B&&f>q){const O=2*Math.sqrt(1+f-B-q);Z=(U-W)/O,X=.25*O,V=(S+C)/O,L=(g+I)/O}else if(B>q){const O=2*Math.sqrt(1+B-f-q);Z=(g-I)/O,X=(S+C)/O,V=.25*O,L=(W+U)/O}else{const O=2*Math.sqrt(1+q-f-B);Z=(C-S)/O,X=(g+I)/O,V=(W+U)/O,L=.25*O}return l[0]=X,l[1]=V,l[2]=L,l[3]=Z,l}class Cc{constructor(l){G(this,"element");G(this,"enabled",!0);G(this,"center",z.create(0,0,0));G(this,"up",z.create(0,1,0));G(this,"rotation",[0,0]);G(this,"shift",[0,0]);G(this,"scroll",0);G(this,"speed",.1);G(this,"sensitivity",.08);G(this,"leftPressed",!1);G(this,"rightPressed",!1);G(this,"leftDragPans",!1);G(this,"lastX",0);G(this,"lastY",0);G(this,"touches",new Map);G(this,"lastTouchCenter",null);G(this,"lastPinchDistance",null);G(this,"lastTwoFingerAngle",null);G(this,"lastTouchCount",0);G(this,"roll",0);G(this,"_dir",z.create());G(this,"_right",z.create());G(this,"_upCam",z.create());G(this,"_scratch",z.create());G(this,"_qY",ft.create());G(this,"_qX",ft.create());G(this,"_qRot",ft.create());G(this,"_qLocal",ft.create());G(this,"_qWorldToCam",ft.create());G(this,"_scratchMat3",yt.create());G(this,"bboxMin",null);G(this,"bboxMax",null);G(this,"anchor",z.create(0,0,0));G(this,"downCallback",l=>{var f,S,g,C;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.setPointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(C=(g=l.target)==null?void 0:g.setPointerCapture)==null||C.call(g,l.pointerId),l.preventDefault())}});G(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,S=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=S)});G(this,"upCallback",l=>{var f,S,g,C;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.releasePointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(g=l.target)==null?void 0:g.releasePointerCapture)==null||C.call(g,l.pointerId),l.preventDefault()});G(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){z.copy(l,this.center),z.copy(l,this.anchor)}setOrbitPivot(l){z.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;z.set(f[2],f[6],f[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,l,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(z.subtract(this.center,l.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=z.create(l[0],l[1],l[2]),this.bboxMax=z.create(f[0],f[1],f[2]);const S=(l[0]+f[0])*.5,g=(l[1]+f[1])*.5,C=(l[2]+f[2])*.5;z.set(S,g,C,this.center),z.set(S,g,C,this.anchor)}resetToCamera(){const l=this.camera.rotation;z.set(l[2],l[6],l[10],this._dir),z.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,g=1/0,C=!1;for(let B=0;B<3;B++){const W=this._dir[B],I=this.bboxMin[B]-this.camera.position[B],U=this.bboxMax[B]-this.camera.position[B];if(Math.abs(W)>1e-8){const q=I/W,R=U/W;S=Math.max(S,Math.min(q,R)),g=Math.min(g,Math.max(q,R))}else if(I>0||U<0){C=!0;break}}!C&&S<=g&&g>0&&(f=(Math.max(S,0)+g)*.5)}if(f===null||!isFinite(f)||f<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const S=z.dot(this._scratch,this._dir);f=S>.001?S:z.length(this._scratch)}f=Math.max(.1,f),z.scale(this._dir,f,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const S=f.x-this.lastTouchCenter[0],g=f.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),S=(f[0].x+f[1].x)*.5,g=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,B=f[1].y-f[0].y,W=Math.hypot(C,B),I=Math.atan2(B,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const U=S-this.lastTouchCenter[0],q=g-this.lastTouchCenter[1],R=Math.hypot(U,q),Z=Math.abs(W-this.lastPinchDistance);let X=I-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),R>.5&&(this.shift[1]-=U,this.shift[0]+=q),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(W/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=-X)}this.lastTouchCenter=[S,g],this.lastPinchDistance=W,this.lastTwoFingerAngle=I}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const L=f.rotation;this.up[0]=L[1],this.up[1]=L[5],this.up[2]=L[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const L=f.rotation;z.set(L[2],L[6],L[10],this._scratch),z.normalize(this._scratch,this._scratch),ft.fromAxisAngle(this._scratch,this.roll,this._qRot),z.transformQuat(this.up,this._qRot,this.up),z.normalize(this.up,this.up),this.roll=0,S=!0}z.subtract(f.position,this.center,this._dir);let g=z.length(this._dir);g<1e-6&&(g=1e-6);const C=Math.exp(Math.log(g)+this.scroll*l*10*this.speed);z.scale(this._dir,C/g,this._dir),g=C;const B=f.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const W=z.create(B[1],B[5],B[9]);z.normalize(W,W),z.length(W)<1e-6&&z.set(0,1,0,W);const I=l*this.speed*.1*g,U=this.shift[1]*I,q=-this.shift[0]*I;z.scale(this._right,U,this._scratch),z.add(this.center,this._scratch,this.center),z.add(f.position,this._scratch,f.position),z.scale(W,q,this._scratch),z.add(this.center,this._scratch,this.center),z.add(f.position,this._scratch,f.position);const R=this.rotation[0]*l*this.sensitivity,Z=this.rotation[1]*l*this.sensitivity;if(Math.abs(R)>1e-5||Math.abs(Z)>1e-5||S){const L=f.rotation;Ec(L,this._qWorldToCam),ft.fromAxisAngle(Pc,-Z,this._qX),ft.fromAxisAngle(Sc,-R,this._qY),ft.multiply(this._qX,this._qY,this._qLocal),ft.normalize(this._qLocal,this._qLocal),ft.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ft.normalize(this._qWorldToCam,this._qWorldToCam),yt.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,f.rotation);const O=f.rotation,F=O[2],j=O[6],T=O[10];f.position[0]=this.center[0]-F*g,f.position[1]=this.center[1]-j*g,f.position[2]=this.center[2]-T*g,this.up[0]=O[1],this.up[1]=O[5],this.up[2]=O[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,f.position);f.update_buffer();const V=Math.pow(.8,l*60);this.rotation[0]*=V,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=V,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=V,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=V,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=V,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Pi(o){const l=z.create();for(const f of o)z.add(l,f,l);return z.scale(l,1/Math.max(o.length,1),l)}function Si(o,l){const f=yt.create();yt.inverse(o,f);const S=z.create();return S[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],S[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],S[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],S}function kc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],S=(I,U)=>l[I*3+U],g=(I,U,q)=>{l[I*3+U]=q},C=(I,U)=>f[I*3+U],B=(I,U,q)=>{f[I*3+U]=q};for(let I=0;I<30;I++){let U=0,q=1,R=Math.abs(S(0,1));if(Math.abs(S(0,2))>R&&(U=0,q=2,R=Math.abs(S(0,2))),Math.abs(S(1,2))>R&&(U=1,q=2,R=Math.abs(S(1,2))),R<1e-12)break;const Z=S(U,U),X=S(q,q),V=S(U,q);let L;Math.abs(Z-X)<1e-30?L=Math.PI/4*Math.sign(V):L=.5*Math.atan2(2*V,Z-X);const O=Math.cos(L),F=Math.sin(L);for(let j=0;j<3;j++){const T=S(j,U),H=S(j,q);g(j,U,O*T+F*H),g(j,q,-F*T+O*H)}for(let j=0;j<3;j++){const T=S(U,j),H=S(q,j);g(U,j,O*T+F*H),g(q,j,-F*T+O*H)}for(let j=0;j<3;j++){const T=C(j,U),H=C(j,q);B(j,U,O*T+F*H),B(j,q,-F*T+O*H)}}const W=[];for(let I=0;I<3;I++)W.push({val:S(I,I),vec:z.create(C(0,I),C(1,I),C(2,I))});return W.sort((I,U)=>U.val-I.val),{vals:[W[0].val,W[1].val,W[2].val],vecs:[W[0].vec,W[1].vec,W[2].vec]}}function Bc(o,l){const f=Pi(o);let S=0,g=0,C=0,B=0,W=0,I=0;for(const V of o){const L=V[0]-f[0],O=V[1]-f[1],F=V[2]-f[2];S+=L*L,g+=L*O,C+=L*F,B+=O*O,W+=O*F,I+=F*F}const U=[S,g,C,g,B,W,C,W,I],{vecs:q}=kc(U);let R=q[0],Z=q[1],X=q[2];return z.dot(X,l)<0&&(z.scale(X,-1,X),z.scale(Z,-1,Z)),{centroid:f,normal:X,u:R,v:Z}}function Tc(o){let l=0,f=0,S=0,g=0,C=0,B=0,W=0,I=0,U=0;for(const[O,F]of o){const j=-2*O,T=-2*F,H=1,oe=-(O*O+F*F);l+=j*j,f+=j*T,S+=j*H,g+=T*T,C+=T*H,B+=H*H,W+=j*oe,I+=T*oe,U+=H*oe}const q=yt.create(l,f,S,f,g,C,S,C,B),R=Si(q,z.create(W,I,U)),Z=R[0],X=R[1],V=R[2],L=Z*Z+X*X-V;return{center:[Z,X],radius:Math.sqrt(Math.max(L,1e-12))}}function Mc(o,l){let f=0,S=0,g=0,C=0,B=0,W=0,I=0,U=0,q=0;for(let Z=0;Z<o.length;Z++){const X=o[Z],V=z.normalize(l[Z],z.create()),L=1-V[0]*V[0],O=-V[0]*V[1],F=-V[0]*V[2],j=1-V[1]*V[1],T=-V[1]*V[2],H=1-V[2]*V[2];f+=L,S+=O,g+=F,C+=j,B+=T,W+=H,I+=L*X[0]+O*X[1]+F*X[2],U+=O*X[0]+j*X[1]+T*X[2],q+=F*X[0]+T*X[1]+H*X[2]}const R=yt.create(f,S,g,S,C,B,g,B,W);return Si(R,z.create(I,U,q))}function Ei(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,S=l.radiusScale??1,g=l.alignFirst??!0,C=(l.direction??"ccw")==="ccw"?1:-1,B=o.map(se=>z.clone(se.position)),W=o.map(se=>{const _e=se.rotation;return z.create(_e[8],_e[9],_e[10])}),I=o.map(se=>{const _e=se.rotation;return z.create(_e[4],_e[5],_e[6])}),U=Pi(I),q=z.normalize(z.scale(U,-1,z.create())),{centroid:R,normal:Z,u:X,v:V}=Bc(B,q),L=B.map(se=>{const _e=z.sub(se,R,z.create());return[z.dot(_e,X),z.dot(_e,V)]}),{center:O,radius:F}=Tc(L),j=F*S,T=z.add(R,z.add(z.scale(X,O[0],z.create()),z.scale(V,O[1],z.create()),z.create()),z.create()),H=Mc(B,W),oe=j*Math.tan(f*Math.PI/180),we=z.sub(H,z.scale(Z,oe,z.create()),z.create());let ce=0;if(g){const se=z.sub(B[0],T,z.create());ce=Math.atan2(z.dot(se,V),z.dot(se,X))/(2*Math.PI)%1,ce<0&&(ce+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${j.toFixed(2)}, tilt=${f}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${ce.toFixed(3)}`),{center:T,radius:j,normal:Z,u:X,v:V,lookAt:we,startPhase:ce,direction:C}}function Ci(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,S=Math.cos(f),g=Math.sin(f),C=z.add(o.center,z.add(z.scale(o.u,o.radius*S,z.create()),z.scale(o.v,o.radius*g,z.create()),z.create()),z.create()),B=z.normalize(z.sub(o.lookAt,C,z.create())),W=z.cross(B,o.normal,z.create());z.length(W)<1e-6&&z.copy(o.u,W),z.normalize(W,W);const I=z.cross(B,W,z.create());z.normalize(I,I);const U=dt.create();return U[0]=W[0],U[1]=I[0],U[2]=B[0],U[3]=0,U[4]=W[1],U[5]=I[1],U[6]=B[1],U[7]=0,U[8]=W[2],U[9]=I[2],U[10]=B[2],U[11]=0,U[12]=0,U[13]=0,U[14]=0,U[15]=1,{position:C,rotation:U,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Ac(o,l={}){const f=Ei(o,l);if(!f)return[];const S=l.numViews??120;return Array.from({length:S},(g,C)=>({...Ci(f,C/S),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}function Dc(o){const l=new Uint8Array(o),f=Math.min(l.byteLength,65536),S=new TextDecoder("ascii").decode(l.subarray(0,f)),g=S.indexOf("end_header");if(g<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const C=g+10+1,B=S.slice(0,g).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(B[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const W=B.find(ie=>ie.startsWith("format"));if(!W||!W.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${W??"<none>"})`);const I={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},U=[];let q=null;for(const ie of B)if(ie.startsWith("element ")){const[,me,he]=ie.split(/\s+/);q={name:me,count:parseInt(he,10),props:[],bytesPerRecord:0,hasList:!1},U.push(q)}else if(ie.startsWith("property ")&&q){const me=ie.split(/\s+/);if(me[1]==="list"){const he=me[2],ve=me[3],Ae=me[4];q.props.push({name:Ae,type:ve,isList:!0,listCountType:he,listItemType:ve}),q.hasList=!0}else{const he=me[1],ve=me[2];if(q.props.push({name:ve,type:he,isList:!1}),I[he]===void 0)throw new Error(`mesh PLY: unsupported prop type '${he}'`);q.bytesPerRecord+=I[he]}}const R=U.find(ie=>ie.name==="vertex"),Z=U.find(ie=>ie.name==="face"||ie.name==="faces");if(!R)throw new Error("mesh PLY: missing 'element vertex'");if(!Z)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(R.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const X=R.props.find(ie=>ie.name==="x"),V=R.props.find(ie=>ie.name==="y"),L=R.props.find(ie=>ie.name==="z");if(!X||!V||!L)throw new Error("mesh PLY: vertex must have x/y/z");let O=0;const F=new Map;for(const ie of R.props)F.set(ie.name,{off:O,type:ie.type}),O+=I[ie.type];const j=F.get("x"),T=F.get("y"),H=F.get("z");if(j.type!==T.type||j.type!==H.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${j.type}/${T.type}/${H.type})`);const oe=j.type,we=oe==="double"||oe==="float64";if(!we&&oe!=="float"&&oe!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${oe}')`);const ce=new Float32Array(R.count*3),se=new DataView(o),_e=C,ne=R.bytesPerRecord;for(let ie=0;ie<R.count;ie++){const me=_e+ie*ne;we?(ce[ie*3+0]=se.getFloat64(me+j.off,!0),ce[ie*3+1]=se.getFloat64(me+T.off,!0),ce[ie*3+2]=se.getFloat64(me+H.off,!0)):(ce[ie*3+0]=se.getFloat32(me+j.off,!0),ce[ie*3+1]=se.getFloat32(me+T.off,!0),ce[ie*3+2]=se.getFloat32(me+H.off,!0))}const Ne=_e+R.count*ne,Ge=Z.props.find(ie=>ie.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Ie=I[Ge.listCountType],Me=I[Ge.listItemType];if(Ie!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ie}`);let ge=Ne,ye=0;for(let ie=0;ie<Z.count;ie++){const me=se.getUint8(ge);me===3&&ye++,ge+=1+me*Me}const le=new Uint32Array(ye*3);ge=Ne;let re=0;for(let ie=0;ie<Z.count;ie++){const me=se.getUint8(ge);if(ge+=1,me===3)for(let he=0;he<3;he++){const ve=ge+he*Me;let Ae;if(Me===4)Ae=se.getUint32(ve,!0);else if(Me===2)Ae=se.getUint16(ve,!0);else if(Me===1)Ae=se.getUint8(ve);else throw new Error(`mesh PLY: unsupported face index size ${Me}`);le[re++]=Ae}ge+=me*Me}return{positions:ce,indices:le}}function Gc(o){const l=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),S=l.getUint32(4,!0),g=f*12,C=S*4;if(o.byteLength<8+g+C)throw new Error(`mesh .bin: truncated (expected ${8+g+C} B, got ${o.byteLength} B)`);const B=new Float32Array(o.slice(8,8+g)),W=new Uint32Array(o.slice(8+g,8+g+C));return{positions:B,indices:W}}function ki(o,l){return(l??"").toLowerCase().endsWith(".ply")?Dc(o):Gc(o)}function Lc(o,l){const f=o.length/3,S=new Float32Array(f*3);for(let g=0;g<l.length;g+=3){const C=l[g]*3,B=l[g+1]*3,W=l[g+2]*3,I=o[C],U=o[C+1],q=o[C+2],R=o[B],Z=o[B+1],X=o[B+2],V=o[W],L=o[W+1],O=o[W+2],F=R-I,j=Z-U,T=X-q,H=V-I,oe=L-U,we=O-q,ce=j*we-T*oe,se=T*H-F*we,_e=F*oe-j*H;S[C]+=ce,S[C+1]+=se,S[C+2]+=_e,S[B]+=ce,S[B+1]+=se,S[B+2]+=_e,S[W]+=ce,S[W+1]+=se,S[W+2]+=_e}for(let g=0;g<f;g++){const C=g*3,B=S[C],W=S[C+1],I=S[C+2],U=Math.sqrt(B*B+W*W+I*I);if(U>1e-12){const q=1/U;S[C]=B*q,S[C+1]=W*q,S[C+2]=I*q}}return S}function Bi(o,l){const f=o.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(f,0,l.positions);const S=Lc(l.positions,l.indices),g=o.createBuffer({label:"mesh-cull normal buffer",size:S.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(g,0,S);const C=o.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(C,0,l.indices),{vertexBuffer:f,normalBuffer:g,indexBuffer:C,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function zc(o,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const S=await f.arrayBuffer(),g=ki(S,l);return console.log(`[mesh-cull] loaded ${l}: ${g.positions.length/3} verts, ${g.indices.length/3} tris`),Bi(o,g)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Ic(o,l,f){try{const S=ki(l,f);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),Bi(o,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const Ti="BITYMI01",Rc=0,Uc=1,Vc=2,Oc=3,Fc=4,Nc=5,Wc=6;function Jn(o){const l=(o&32768)>>15,f=(o&31744)>>10,S=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(S/1024):f===31?S?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+S/1024)}function di(o,l,f,S,g,C){const B=(o-f.width*.5)/S.focal[0],W=-((l-f.height*.5)/S.focal[1]),I=S.rotation,U=I[0],q=I[4],R=I[8],Z=I[1],X=I[5],V=I[9],L=I[2],O=I[6],F=I[10];let j=B*U+W*Z+L,T=B*q+W*X+O,H=B*R+W*V+F;const oe=Math.hypot(j,T,H)||1;j/=oe,T/=oe,H/=oe;const we=S.position[0],ce=S.position[1],se=S.position[2],_e=C*.005,ne=_e*_e,Ne=new Uint32Array(g.buffer,g.byteOffset,g.length),Ge=g.length/8;let Ie=1/0,Me=0,ge=0,ye=0,le=-1;for(let re=0;re<Ge;re++){const ie=re*8,me=g[ie+0]-we,he=g[ie+1]-ce,ve=g[ie+2]-se,Ae=me*j+he*T+ve*H;if(Ae<=0)continue;const xe=me-Ae*j,Ce=he-Ae*T,Oe=ve-Ae*H;if(xe*xe+Ce*Ce+Oe*Oe>=ne||!(Ne[ie+7]>>>16&1))continue;const y=Ne[ie+5],i=Ne[ie+6],_=Jn(y&65535),h=Jn(y>>>16&65535),b=Jn(i&65535),P=Jn(i>>>16&65535),k=Math.hypot(_,h,b,P)||1,w=_/k,r=h/k,m=b/k,p=P/k,c=2*(r*p+w*m),a=2*(m*p-w*r),d=1-2*(r*r+m*m),x=j*c+T*a+H*d;let v;Math.abs(x)>1e-6?(v=(me*c+he*a+ve*d)/x,(!isFinite(v)||v<=0)&&(v=Ae)):v=Ae,v<Ie&&(Ie=v,Me=we+v*j,ge=ce+v*T,ye=se+v*H,le=re)}return le<0?null:[Me,ge,ye]}function Mi(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==Ti)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const S=new DataView(o),g=S.getUint32(8,!0),C=12,B=20;let W=null,I=null,U=null,q=null;for(let R=0;R<g;R++){const Z=C+R*B,X=S.getUint32(Z+0,!0),V=Number(S.getBigUint64(Z+4,!0)),L=Number(S.getBigUint64(Z+12,!0)),O=l.slice(V,V+L).buffer;X===Rc||X===Uc||X===Nc?W=O:X===Vc?I=O:X===Oc||X===Fc?U=O:X===Wc&&(q=O)}if(W===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:W,camerasBuffer:I,atlasBuffer:U,meshBuffer:q}}async function $c(o,l){var B;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const S=(()=>{const W=f.headers.get("content-length");return W&&parseInt(W,10)||void 0})(),g=(B=f.body)==null?void 0:B.getReader();let C;if(!g)C=await f.arrayBuffer(),l&&l(C.byteLength,S,0);else{const W=[];let I=0,U=performance.now(),q=0;for(;;){const{done:X,value:V}=await g.read();if(X)break;W.push(V),I+=V.byteLength;const L=performance.now();if(L-U>=150&&l){const O=(I-q)/((L-U)/1e3);l(I,S,O),U=L,q=I}}const R=new Uint8Array(I);let Z=0;for(const X of W)R.set(X,Z),Z+=X.byteLength;C=R.buffer,l&&l(I,S,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===Ti?{bundle:Mi(C),rawPly:null}:{bundle:null,rawPly:C}}function qc(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var S;return l(((S=f.files)==null?void 0:S[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function jc(o,l,f){const S=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),C=document.getElementById("quick-links");g&&(g.onclick=async()=>{const q=await qc(".ply,.bitymi");if(q)if(S&&(S.style.display="none"),q.name.toLowerCase().endsWith(".bitymi")){const R=await q.arrayBuffer(),{pcBuffer:Z}=Mi(R),X=new File([Z],q.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),V=await Rs(X,o);l(V)}else{const R=await Rs(q,o);l(R)}}),C&&(C.innerHTML="");const B=new URLSearchParams(window.location.search),W=B.get("bundle")??B.get("model_url"),I=B.get("camera_url"),U=B.get("mesh_url");W&&(S&&(S.style.display="none"),f(W,I,U))}async function Kc(o,l,f,S){const g=new Ns(o,f),C=new Cc(g);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const W=typeof window<"u"&&window.parent!==window,I={pos:new Float32Array(3),rot:new Float32Array(16)};if(W){window.addEventListener("message",c=>{const a=c.data;if(!(!a||a.type!=="halloumi_sync_pose")&&!(!Array.isArray(a.position)||a.position.length!==3)&&!(!Array.isArray(a.rotation)||a.rotation.length!==16)){for(let d=0;d<3;d++)g.position[d]=a.position[d];for(let d=0;d<16;d++)g.rotation[d]=a.rotation[d];g.update_buffer(),C.resetToCamera();for(let d=0;d<3;d++)I.pos[d]=g.position[d];for(let d=0;d<16;d++)I.rot[d]=g.rotation[d]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const U=()=>{if(!W)return;const c=g.position,a=g.rotation;let d=!1;for(let x=0;x<3;x++)if(Math.abs(c[x]-I.pos[x])>1e-6){d=!0;break}if(!d){for(let x=0;x<16;x++)if(Math.abs(a[x]-I.rot[x])>1e-6){d=!0;break}}if(d){for(let x=0;x<3;x++)I.pos[x]=c[x];for(let x=0;x<16;x++)I.rot[x]=a[x];try{window.parent.postMessage({type:"halloumi_camera_state",position:[c[0],c[1],c[2]],rotation:Array.from(a)},"*")}catch{}}},q="rgba8unorm";l.configure({device:f,format:q,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let R=null;const Z=()=>{g.on_update_canvas(),R!==null&&Qn(o.width,o.height,f,R.render_settings_buffer)};new ResizeObserver(()=>{const c=Math.max(.25,w.render_scale),a=Math.max(1,Math.ceil(c*o.clientWidth)),d=Math.max(1,Math.ceil(c*o.clientHeight));o.width===a&&o.height===d||(o.width=a,o.height=d,Z())}).observe(o);let V=0,L=0;const O=()=>{(o.width!==V||o.height!==L)&&(V=o.width,L=o.height,Z())},F=new URLSearchParams(window.location.search);let T=F.get("animation")==="1";C.enabled=!T;const H=F.get("camera_url"),oe=F.get("mesh_cull"),we=oe==="1"||oe==="true",ce=F.get("mesh_normal_margin")??F.get("mesh_margin"),se=ce!==null?Number(ce):NaN,_e=Number.isFinite(se)?se:0,ne=F.get("mesh_debug"),Ne=ne==="1"||ne==="true",Ge=F.get("bfc"),Ie=Ge==="1"||Ge==="true",Me=F.get("bfc_cos"),ge=Me!==null?Number(Me):NaN,ye=Number.isFinite(ge)?ge:2,le=F.get("mesh_sample_mode"),re=le!==null?parseInt(le,10):NaN,ie=Number.isFinite(re)&&re>=0&&re<=7?re:1,me=F.get("mesh_silhouette"),he=me==="1"||me==="true",ve=F.get("mesh_invert_depth"),Ae=ve==="1"||ve==="true",xe=F.get("ht"),Ce=xe==="3"?3:xe==="2"?2:xe==="1"||xe==="true"?1:0,Oe=F.get("ht_k"),M=Oe!==null?Number(Oe):NaN,Y=Number.isFinite(M)?M:150,y=F.get("wsr"),i=y==="1"||y==="true"||y==="2"||y==="3",_=y==="2",h=y==="3",b=Number(F.get("sat_t")),P=Number.isFinite(b)&&b>0?b:_?.05:.1,k=Math.max(1,window.devicePixelRatio||1),w={gaussian_scaling:1,sh_bias:.5,animate:T,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Ie,bfc_cos:ye,ht_mode:Ce,ht_k:Y,wsr:i,wsr_gate:_,wsr_dgate:h,sat_t:P,mesh_cull:we,mesh_margin:_e,mesh_debug:Ne,mesh_sample_mode:ie,mesh_silhouette:he,mesh_invert_depth:Ae,render_scale:1},r=new jl.Pane({title:"Config",expanded:!0});r.addInput(w,"animate",{label:"Animate"}).on("change",c=>{const a=T;T=c.value,C.enabled=!c.value,!a&&T&&m.value&&m.value.onAnimateStart(),a&&!T&&m.value&&m.value.onAnimateStop()}),r.addInput(w,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const m={value:null};jc(f,c=>p(c,[],null,null),async(c,a,d)=>{let x=a??H,v,D=null,$=null;const K=c.toLowerCase();if(K.endsWith(".bitymi")||K.includes(".bitymi?")){$s("downloading bundle ...");try{const{bundle:Q}=await $c(c,(de,be,pe)=>{const ue=de/1048576,ke=be?be/(1024*1024):void 0,Be=pe/(1024*1024),qe=be?Math.min(99,Math.floor(de/be*100)):void 0,Le=ke?`total ${ke.toFixed(1)} MB`:"total -- MB",Ke=ke&&qe!==void 0?`${ue.toFixed(1)} MB downloaded (${qe}%)`:`${ue.toFixed(1)} MB downloaded`,Ye=`${Be.toFixed(2)} MB/s`;Ft(`downloading bundle ...
${Le}, ${Ke}
${Ye}`)});if(!Q)throw new Error("Expected a .bitymi bundle");Ft("parsing PLY ...");const ee=new File([Q.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(v=await Rs(ee,f),!x&&Q.camerasBuffer&&(x=URL.createObjectURL(new Blob([Q.camerasBuffer],{type:"application/json"}))),Q.atlasBuffer){const de=Q.atlasBuffer.byteLength/1048576;Ft(`uploading atlas ...
${de.toFixed(1)} MB BC7`);try{const be=Fl(Q.atlasBuffer);D=Wl(f,be,!0)}catch(be){console.warn("[atlas] failed to parse/upload atlas:",be)}}Q.meshBuffer&&!d&&(Ft("uploading mesh ..."),$=Ic(f,Q.meshBuffer,"bundle.mesh"))}catch(Q){throw Ln(),Q}}else v=await $l(c,f);d&&(Ft("loading mesh ..."),$=await zc(f,d));const N=x?await gc(x):[];N.length>0&&g.set_preset(N[0]),p(v,N,D,$)});function p(c,a=[],d=null,x=null){const v=[(c.bbox.min[0]+c.bbox.max[0])/2,(c.bbox.min[1]+c.bbox.max[1])/2,(c.bbox.min[2]+c.bbox.max[2])/2];C.setBbox(c.bbox.min,c.bbox.max);const D=.5*Math.sqrt((c.bbox.max[0]-c.bbox.min[0])**2+(c.bbox.max[1]-c.bbox.min[1])**2+(c.bbox.max[2]-c.bbox.min[2])**2);function $(J,fe){const ae=di(J,fe,o,g,c.surfel_data,D);ae&&(C.setOrbitPivot(ae),console.log(`[pick] orbit pivot → (${ae[0].toFixed(3)}, ${ae[1].toFixed(3)}, ${ae[2].toFixed(3)})`))}function K(){const J=o.width*.5,fe=o.height*.5,ae=di(J,fe,o,g,c.surfel_data,D);if(!ae)return;const ze=g.rotation,Ve=ze[2],Pe=ze[6],Te=ze[10],Fe=ae[0]-g.position[0],Qe=ae[1]-g.position[1],ct=ae[2]-g.position[2],_t=Fe*Ve+Qe*Pe+ct*Te;_t>0&&C.setOrbitDepth(_t)}if(a.length===0){const J=c.bbox.max[0]-c.bbox.min[0],fe=c.bbox.max[1]-c.bbox.min[1],ae=c.bbox.max[2]-c.bbox.min[2],Ve=.5*Math.sqrt(J*J+fe*fe+ae*ae)*.5;z.set(v[0]-Ve,v[1]-Ve,v[2]-Ve,g.position);const Pe=z.create(Ve,Ve,Ve);z.normalize(Pe,Pe);const Te=z.create(0,1,0),Fe=z.create();z.cross(Te,Pe,Fe),z.normalize(Fe,Fe);const Qe=z.create();z.cross(Pe,Fe,Qe);const ct=yt.create(Fe[0],Qe[0],Pe[0],Fe[1],Qe[1],Pe[1],Fe[2],Qe[2],Pe[2]);dt.fromMat3(ct,g.rotation),g.update_buffer()}C.setCenter(z.create(c.centroid[0],c.centroid[1],c.centroid[2]));const N=new mc(c,f,q,g.uniform_buffer,S,d,x);R=N,Qn(o.width,o.height,f,N.render_settings_buffer),w.atlas_enabled=d!==null,x===null&&(w.mesh_cull=!1),N.setMeshCullEnabled(w.mesh_cull),N.setMeshMargin(w.mesh_margin),x===null&&(w.mesh_debug=!1),N.setMeshOverlayEnabled(w.mesh_debug);{const J=c.surfel_data,fe=J.length/8;let ae=0,ze=0,Ve=0;for(let Te=0;Te<fe;Te++)ae+=J[Te*8],ze+=J[Te*8+1],Ve+=J[Te*8+2];const Pe=fe>0?[ae/fe,ze/fe,Ve/fe]:[0,0,0];N.setBfcParams(w.bfc_cos,Pe),cn({bfc:w.bfc},f,N.render_settings_buffer),console.log(`[bfc] flag=${w.bfc} cos=${w.bfc_cos} centroid=(${Pe[0].toFixed(3)}, ${Pe[1].toFixed(3)}, ${Pe[2].toFixed(3)})`)}N.htEnabled=w.ht_mode>0,N.htSortedTail=w.ht_mode===2,N.htOccTail=w.ht_mode===3,N.setHtTailK(w.ht_k),w.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${w.ht_mode}: ${w.ht_mode===2?"exact core + SORTED tail":w.ht_mode===3?"K=1 core + OCC tail (learned occlusion)":"K=1 core + OIT tail"}, tail_k=${w.ht_k})`),N.wsrEnabled=w.wsr,N.wsrGateEnabled=w.wsr_gate,N.wsrDGateEnabled=w.wsr_dgate,N.setWsrSatT(w.sat_t),w.wsr&&console.log("[wsr] sort-free weighted-sum mode requested — active only on probe_mode-2 bundles (stride-7 probes with learned occlusion)"),cn({meshSampleMode:w.mesh_sample_mode,meshSilhouetteCull:w.mesh_silhouette,meshInvertDepth:w.mesh_invert_depth},f,N.render_settings_buffer),console.log(`[mesh-cull] ${x!==null?"mesh loaded":"no mesh"} · toggle=${w.mesh_cull} · margin=${w.mesh_margin}m · debug=${w.mesh_debug} · sample_mode=${w.mesh_sample_mode} · silhouette=${w.mesh_silhouette} · invert=${w.mesh_invert_depth}`);let Q=!1;const ee=(()=>{if(d!==null)return`${d.meta.format===2?"BC7":d.meta.format===3?"ASTC 4×4":d.meta.format===7?"BC7 codebook gather (typeD)":`format=${d.meta.format}`} ${d.meta.width}×${d.meta.height}, ${d.meta.n_layers} layers`;const J=f.features.has("texture-compression-bc"),fe=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(J?["BC7"]:[]).concat(fe?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",ee),li(c.sh_bias,f,N.render_settings_buffer),ai(w.gaussian_scaling,f,N.render_settings_buffer),w.sh_bias=c.sh_bias;const de=c.num_points.toLocaleString(),be={stats:`${de} surfels · -- fps`};r.addMonitor(be,"stats",{label:"Stats",interval:200}),r.addMonitor({atlas:ee},"atlas",{label:"Atlas"});const pe={stages:"— ms · awaiting timestamp data"};r.addMonitor(pe,"stages",{label:"Stages",interval:500});let ue=null;if(N.timeQueryEnabled){ue=document.createElement("canvas"),ue.width=280,ue.height=24,ue.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(ue);const J=ae=>{const ze=ue.getContext("2d");if(!ze)return;const Ve=ue.width,Pe=ue.height;if(ze.clearRect(0,0,Ve,Pe),!ae||ae.total<=0){ze.fillStyle="#888",ze.font="11px ui-monospace,Menlo,monospace",ze.fillText("awaiting GPU timestamps…",8,16);return}const Te=[{label:"cull",ms:ae.cull,color:"#3aa3ff"},{label:"pre",ms:ae.preprocess,color:"#3ad27a"},{label:"sort",ms:ae.sort,color:"#ffa53a"},{label:"render",ms:ae.render,color:"#ff5566"}],Fe=Math.max(.001,Te.reduce((ct,_t)=>ct+_t.ms,0));let Qe=0;ze.font="10px ui-monospace,Menlo,monospace",ze.textBaseline="middle";for(const ct of Te){const _t=ct.ms/Fe*Ve;ze.fillStyle=ct.color,ze.fillRect(Qe,0,_t,Pe),_t>=38&&(ze.fillStyle="#000c",ze.fillText(`${ct.label} ${ct.ms.toFixed(1)}`,Qe+4,Pe/2)),Qe+=_t}};setInterval(()=>{Q||N.readPerfMetrics({silent:!0}).then(()=>{const ae=N.lastStageBreakdownMs;J(ae),ae&&(pe.stages=`${ae.total.toFixed(1)} ms · cull ${ae.cull.toFixed(1)} / pre ${ae.preprocess.toFixed(1)} / sort ${ae.sort.toFixed(1)} / render ${ae.render.toFixed(1)}`)}).catch(ae=>console.warn("[perf] readPerfMetrics failed:",ae))},500)}const ke=.4,Be=3,qe=.3;let Le=null,Ke=0,Ye=0;const et=ft.create(),it=yt.create();let Ue=a.length>0?0:-1;const nt={view:a.length>0?`${Ue+1} / ${a.length}: ${a[Ue].img_name??Ue}`:"— no presets —"};r.addMonitor(nt,"view",{label:"View",interval:100});function ot(J){const fe=yt.create(J[0],J[1],J[2],J[4],J[5],J[6],J[8],J[9],J[10]);return ft.fromMat(fe)}function st(J,fe){Le={fromPos:z.clone(g.position),toPos:z.clone(J.position),fromQuat:ft.normalize(ot(g.rotation)),toQuat:ft.normalize(ot(J.rotation)),target:J,t:0,duration:Math.max(.01,fe)}}const Ze=(J,fe=!0)=>{if(a.length===0)return;Ue=(J%a.length+a.length)%a.length;const ae=a[Ue];fe?st(ae,ke):(g.set_preset(ae),C.resetToCamera(),K()),nt.view=`${Ue+1} / ${a.length}: ${a[Ue].img_name??Ue}`};a.length>0&&(r.addButton({title:"◀ Prev view"}).on("click",()=>Ze(Ue-1)),r.addButton({title:"Next view ▶"}).on("click",()=>Ze(Ue+1)));const je=a.length>0?Ei(a,{tiltDownDeg:15,alignFirst:!0}):null,rt=je?Ac(a,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let He=0;const pt=12;m.value={onAnimateStart:()=>{He=0},onAnimateStop:()=>{C.resetToCamera(),K()}},r.addInput(w,"render_scale",{label:"Render scale",min:.25,max:k,step:.25}).on("change",J=>{const fe=Math.max(.25,J.value),ae=Math.max(1,Math.ceil(fe*o.clientWidth)),ze=Math.max(1,Math.ceil(fe*o.clientHeight));(o.width!==ae||o.height!==ze)&&(o.width=ae,o.height=ze,Z())}),r.addInput(w,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",J=>ai(J.value,f,N.render_settings_buffer)),r.addInput(w,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",J=>li(J.value,f,N.render_settings_buffer)),r.addInput(w,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",J=>{N.bgColor=[J.value.r,J.value.g,J.value.b,J.value.a]});const at=d?d.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";r.addInput(w,"atlas_enabled",{label:at}).on("change",J=>N.setAtlasEnabled(J.value)),r.addInput(w,"bfc",{label:"Backface"}).on("change",J=>cn({bfc:J.value},f,N.render_settings_buffer)),r.addInput(w,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2,"occ tail (learned)":3}}).on("change",J=>{N.htEnabled=J.value>0,N.htSortedTail=J.value===2,N.htOccTail=J.value===3}),r.addInput(w,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",J=>N.setHtTailK(J.value)),r.addInput(w,"wsr",{label:"WSR (sort-free)"}).on("change",J=>{N.wsrEnabled=J.value}),r.addInput(w,"wsr_gate",{label:"WSR sat-gate"}).on("change",J=>{N.wsrGateEnabled=J.value}),r.addInput(w,"wsr_dgate",{label:"WSR D-gate"}).on("change",J=>{N.wsrDGateEnabled=J.value}),r.addInput(w,"sat_t",{label:"sat tolerance T",min:.01,max:.5,step:.005}).on("change",J=>{N.setWsrSatT(J.value)});const Bt=r.addInput(w,"mesh_cull",{label:"Mesh cull"});Bt.on("change",J=>N.setMeshCullEnabled(J.value)),N.hasMesh||(Bt.disabled=!0);const vt=r.addInput(w,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});vt.on("change",J=>N.setMeshMargin(J.value)),N.hasMesh||(vt.disabled=!0);const Pt=r.addInput(w,"mesh_debug",{label:"Mesh debug"});Pt.on("change",J=>N.setMeshOverlayEnabled(J.value)),N.hasMesh||(Pt.disabled=!0);const St=r.addInput(w,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});St.on("change",J=>cn({meshSampleMode:J.value},f,N.render_settings_buffer)),N.hasMesh||(St.disabled=!0);const Dt=r.addInput(w,"mesh_silhouette",{label:"Silhouette cull"});Dt.on("change",J=>cn({meshSilhouetteCull:J.value},f,N.render_settings_buffer)),N.hasMesh||(Dt.disabled=!0);const Gt=r.addInput(w,"mesh_invert_depth",{label:"Invert depth cull"});Gt.on("change",J=>cn({meshInvertDepth:J.value},f,N.render_settings_buffer)),N.hasMesh||(Gt.disabled=!0),r.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(a.length>0)g.set_preset(a[0]);else{const J=c.bbox.max[0]-c.bbox.min[0],fe=c.bbox.max[1]-c.bbox.min[1],ae=c.bbox.max[2]-c.bbox.min[2],Ve=.5*Math.sqrt(J*J+fe*fe+ae*ae)*.5;z.set(v[0]-Ve,v[1]-Ve,v[2]-Ve,g.position);const Pe=z.create(Ve,Ve,Ve);z.normalize(Pe,Pe);const Te=z.create();z.cross(z.create(0,1,0),Pe,Te),z.normalize(Te,Te);const Fe=z.create();z.cross(Pe,Te,Fe);const Qe=yt.create(Te[0],Fe[0],Pe[0],Te[1],Fe[1],Pe[1],Te[2],Fe[2],Pe[2]);dt.fromMat3(Qe,g.rotation),g.update_buffer()}C.resetToCamera(),K()});const Et={result:"— click Benchmark —"};r.addMonitor(Et,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Qt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Nt(){const fe=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ae of Object.keys(Qt))if(fe.startsWith(ae))return ae;return null}const Ct=document.createElement("div");Ct.id="bench-overlay",Ct.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ct);function Jt(J,fe,ae){const ze=Math.floor(fe/Math.max(1,ae)*100),Ve=32,Pe=Math.floor(fe/Math.max(1,ae)*Ve),Te="█".repeat(Pe)+"░".repeat(Ve-Pe);Ct.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${J}</div><div>[${Te}] ${ze}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${fe} / ${ae} frames · offscreen · pipelined · no vsync</div>`,Ct.style.display="block"}function Xe(){Ct.style.display="none"}async function Rn(J=10,fe=200){if(Q)return;if(a.length===0){Et.result="no cameras to benchmark";return}Q=!0;const ae=T,ze=w.animate,Ve=new Float32Array(g.position),Pe=new Float32Array(g.rotation);T=!1,w.animate=!1,r.refresh(),Le=null,C.enabled=!1;const Te=Nt(),Fe=Te?Qt[Te]:null,Qe=(Fe==null?void 0:Fe.w)??o.width,ct=(Fe==null?void 0:Fe.h)??o.height,_t=(Fe==null?void 0:Fe.fovY)??g.getFov(),as=Te?`${Te} · ${Qe>=4e3/4+500?"images_4":"images_2"}`:"custom",On=o.width,Fn=o.height,ls=g.getFov();o.width=Qe,o.height=ct,g.setFov(_t),Qn(Qe,ct,f,N.render_settings_buffer);const Pn=f.createTexture({size:[Qe,ct,1],format:q,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),cs=Pn.createView(),us=()=>{const tt=f.createCommandEncoder();N.frame(tt,cs,!1),f.queue.submit([tt.finish()])},Nn=()=>new Promise(tt=>setTimeout(tt,0)),ds=20,Wt=async(tt,gt)=>{let Mt=0,At=0;for(Jt(gt,0,tt),await Nn();At<tt;){const zt=Math.min(ds,tt-At),$t=performance.now();for(let It=0;It<zt;It++)g.set_preset(a[(At+It)%a.length]),us();await f.queue.onSubmittedWorkDone();const ps=performance.now();Mt+=ps-$t,At+=zt,Jt(gt,At,tt),await Nn()}return Mt};try{await Wt(J,"Warming up");const gt=await Wt(fe,"Benchmarking")/fe,Mt=1e3/gt,At=c.num_points??c.surfel_data.length/8,zt=(_t*180/Math.PI).toFixed(1),$t=`${Mt.toFixed(1)} FPS  (${gt.toFixed(2)} ms/frame)
${Qe}×${ct} · fovY ${zt}° · ${as}
${At.toLocaleString()} surfels · ${J}w+${fe}b · pipelined`;Et.result=$t,console.log("[bench]",$t.replace(/\n/g,"  |  "))}catch(tt){console.error("[bench] failed:",tt),Et.result=`bench failed: ${tt}`}finally{Xe(),Pn.destroy(),o.width=On,o.height=Fn,g.setFov(ls),Qn(On,Fn,f,N.render_settings_buffer),g.position.set(Ve),g.rotation.set(Pe),g.update_buffer(),C.enabled=!ae,T=ae,w.animate=ze,r.refresh(),Q=!1}}r.addButton({title:"📊 Benchmark"}).on("click",()=>Rn()),document.addEventListener("keydown",J=>{const fe=J.key;if(fe>="0"&&fe<="9"&&a.length>0){const ae=parseInt(fe);ae<a.length&&Ze(ae)}else fe==="ArrowLeft"||fe==="PageUp"?(Ze(Ue-1),J.preventDefault()):fe==="ArrowRight"||fe==="PageDown"?(Ze(Ue+1),J.preventDefault()):(fe==="d"||fe==="D")&&N.debugReadSortedIndices(30).catch(ae=>console.error("[DEBUG] readback failed:",ae))});function Un(J,fe){const ae=o.getBoundingClientRect(),ze=window.devicePixelRatio||1;return[(J-ae.left)*ze,(fe-ae.top)*ze]}o.addEventListener("dblclick",J=>{const[fe,ae]=Un(J.clientX,J.clientY);$(fe,ae)});let en=0,Vn=0,Lt=0;o.addEventListener("pointerdown",J=>{if(J.pointerType!=="touch")return;const fe=performance.now(),ae=fe-en,ze=J.clientX-Vn,Ve=J.clientY-Lt;if(ae>0&&ae<300&&ze*ze+Ve*Ve<40*40){const[Pe,Te]=Un(J.clientX,J.clientY);$(Pe,Te),en=0}else en=fe,Vn=J.clientX,Lt=J.clientY});function gn(){return B}let wn=performance.now(),xn=60,yn=Promise.resolve(),pn=0;async function Tt(){var Ve;const J=performance.now(),fe=Math.min((J-wn)/1e3,.1);if(wn=J,fe>0){const Pe=((Ve=N.lastStageBreakdownMs)==null?void 0:Ve.total)??0,Te=Pe>.5?1e3/Pe:1/fe;xn=xn*.9+Te*.1,be.stats=`${de} surfels · ${Math.round(xn)} fps`}if(Q){requestAnimationFrame(Tt);return}if(gn()&&(Le||T)&&(Le=null,C.resetToCamera(),K(),T&&(T=!1,w.animate=!1,r.refresh())),T&&w.animateMode==="circle"&&je){He+=fe/pt,He>=1&&(He-=1);const Pe=Ci(je,He);g.set_preset(Pe),C.update(fe);const Te=f.createCommandEncoder();N.frame(Te,l.getCurrentTexture().createView()),f.queue.submit([Te.finish()]),pn++,pn===2&&Ln(),requestAnimationFrame(Tt);return}if(Le){Le.t+=fe/Le.duration;const Pe=Math.min(1,Le.t),Te=Pe*Pe*(3-2*Pe);z.lerp(Le.fromPos,Le.toPos,Te,g.position),ft.slerp(Le.fromQuat,Le.toQuat,Te,et),yt.fromQuat(et,it),dt.fromMat3(it,g.rotation),g.update_buffer(),Le.t>=1&&(g.set_preset(Le.target),Le=null,T?a.length>0&&(Ke=qe):(C.resetToCamera(),K()))}else if(T&&!gn()){const Pe=w.animateMode==="circle"&&rt.length>0,Te=Pe?rt:a;if(Te.length!==0){if(Ke-=fe,Ke<=0){const Qe=((Pe?Ye:Ue)+1)%Te.length;Pe?Ye=Qe:Ue=Qe;const ct=Pe?Be/8:Be;st(Te[Qe],ct),Pe||(nt.view=`${Ue+1} / ${a.length}: ${a[Ue].img_name??Ue}`)}}}C.update(fe),U(),O(),await yn;const ae=f.createCommandEncoder(),ze=l.getCurrentTexture().createView();N.frame(ae,ze),f.queue.submit([ae.finish()]),yn=f.queue.onSubmittedWorkDone(),pn++,pn===2&&Ln(),requestAnimationFrame(Tt)}requestAnimationFrame(Tt)}}(function(){let l="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const C=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){l=C[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Il(S!==null);const g=S.getContext("webgpu");Kc(S,g,f,l)})();
