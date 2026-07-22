var _l=Object.defineProperty;var ml=(o,l,f)=>l in o?_l(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var te=(o,l,f)=>(ml(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))k(x);new MutationObserver(x=>{for(const C of x)if(C.type==="childList")for(const M of C.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&k(M)}).observe(document,{childList:!0,subtree:!0});function f(x){const C={};return x.integrity&&(C.integrity=x.integrity),x.referrerPolicy&&(C.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?C.credentials="include":x.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function k(x){if(x.ep)return;x.ep=!0;const C=f(x);fetch(x.href,C)}})();function bl(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const vl=bl(Array,o=>o.fill(0));let Le=1e-6;function gl(o){function l(y=0,S=0){const E=new o(2);return y!==void 0&&(E[0]=y,S!==void 0&&(E[1]=S)),E}const f=l;function k(y,S,E){const r=E??new o(2);return r[0]=y,r[1]=S,r}function x(y,S){const E=S??new o(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function C(y,S){const E=S??new o(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function M(y,S){const E=S??new o(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function G(y,S=0,E=1,r){const m=r??new o(2);return m[0]=Math.min(E,Math.max(S,y[0])),m[1]=Math.min(E,Math.max(S,y[1])),m}function A(y,S,E){const r=E??new o(2);return r[0]=y[0]+S[0],r[1]=y[1]+S[1],r}function L(y,S,E,r){const m=r??new o(2);return m[0]=y[0]+S[0]*E,m[1]=y[1]+S[1]*E,m}function U(y,S){const E=y[0],r=y[1],m=S[0],u=S[1],p=Math.sqrt(E*E+r*r),a=Math.sqrt(m*m+u*u),_=p*a,w=_&&ne(y,S)/_;return Math.acos(w)}function N(y,S,E){const r=E??new o(2);return r[0]=y[0]-S[0],r[1]=y[1]-S[1],r}const Y=N;function Q(y,S){return Math.abs(y[0]-S[0])<Le&&Math.abs(y[1]-S[1])<Le}function F(y,S){return y[0]===S[0]&&y[1]===S[1]}function O(y,S,E,r){const m=r??new o(2);return m[0]=y[0]+E*(S[0]-y[0]),m[1]=y[1]+E*(S[1]-y[1]),m}function $(y,S,E,r){const m=r??new o(2);return m[0]=y[0]+E[0]*(S[0]-y[0]),m[1]=y[1]+E[1]*(S[1]-y[1]),m}function le(y,S,E){const r=E??new o(2);return r[0]=Math.max(y[0],S[0]),r[1]=Math.max(y[1],S[1]),r}function V(y,S,E){const r=E??new o(2);return r[0]=Math.min(y[0],S[0]),r[1]=Math.min(y[1],S[1]),r}function R(y,S,E){const r=E??new o(2);return r[0]=y[0]*S,r[1]=y[1]*S,r}const z=R;function ce(y,S,E){const r=E??new o(2);return r[0]=y[0]/S,r[1]=y[1]/S,r}function K(y,S){const E=S??new o(2);return E[0]=1/y[0],E[1]=1/y[1],E}const X=K;function H(y,S,E){const r=E??new o(3),m=y[0]*S[1]-y[1]*S[0];return r[0]=0,r[1]=0,r[2]=m,r}function ne(y,S){return y[0]*S[0]+y[1]*S[1]}function be(y){const S=y[0],E=y[1];return Math.sqrt(S*S+E*E)}const Ue=be;function Ie(y){const S=y[0],E=y[1];return S*S+E*E}const Ae=Ie;function fe(y,S){const E=y[0]-S[0],r=y[1]-S[1];return Math.sqrt(E*E+r*r)}const ke=fe;function ye(y,S){const E=y[0]-S[0],r=y[1]-S[1];return E*E+r*r}const J=ye;function ee(y,S){const E=S??new o(2),r=y[0],m=y[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(E[0]=r/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function Te(y,S){const E=S??new o(2);return E[0]=-y[0],E[1]=-y[1],E}function Me(y,S){const E=S??new o(2);return E[0]=y[0],E[1]=y[1],E}const Ve=Me;function De(y,S,E){const r=E??new o(2);return r[0]=y[0]*S[0],r[1]=y[1]*S[1],r}const Oe=De;function Pe(y,S,E){const r=E??new o(2);return r[0]=y[0]/S[0],r[1]=y[1]/S[1],r}const _e=Pe;function We(y=1,S){const E=S??new o(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function B(y){const S=y??new o(2);return S[0]=0,S[1]=0,S}function j(y,S,E){const r=E??new o(2),m=y[0],u=y[1];return r[0]=m*S[0]+u*S[4]+S[12],r[1]=m*S[1]+u*S[5]+S[13],r}function g(y,S,E){const r=E??new o(2),m=y[0],u=y[1];return r[0]=S[0]*m+S[4]*u+S[8],r[1]=S[1]*m+S[5]*u+S[9],r}function i(y,S,E,r){const m=r??new o(2),u=y[0]-S[0],p=y[1]-S[1],a=Math.sin(E),_=Math.cos(E);return m[0]=u*_-p*a+S[0],m[1]=u*a+p*_+S[1],m}function h(y,S,E){const r=E??new o(2);return ee(y,r),R(r,S,r)}function d(y,S,E){const r=E??new o(2);return be(y)>S?h(y,S,r):Me(y,r)}function b(y,S,E){const r=E??new o(2);return O(y,S,.5,r)}return{create:l,fromValues:f,set:k,ceil:x,floor:C,round:M,clamp:G,add:A,addScaled:L,angle:U,subtract:N,sub:Y,equalsApproximately:Q,equals:F,lerp:O,lerpV:$,max:le,min:V,mulScalar:R,scale:z,divScalar:ce,inverse:K,invert:X,cross:H,dot:ne,length:be,len:Ue,lengthSq:Ie,lenSq:Ae,distance:fe,dist:ke,distanceSq:ye,distSq:J,normalize:ee,negate:Te,copy:Me,clone:Ve,multiply:De,mul:Oe,divide:Pe,div:_e,random:We,zero:B,transformMat4:j,transformMat3:g,rotate:i,setLength:h,truncate:d,midpoint:b}}const Tr=new Map;function jr(o){let l=Tr.get(o);return l||(l=gl(o),Tr.set(o,l)),l}function wl(o){function l(a,_,w){const v=new o(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,w!==void 0&&(v[2]=w))),v}const f=l;function k(a,_,w,v){const D=v??new o(3);return D[0]=a,D[1]=_,D[2]=w,D}function x(a,_){const w=_??new o(3);return w[0]=Math.ceil(a[0]),w[1]=Math.ceil(a[1]),w[2]=Math.ceil(a[2]),w}function C(a,_){const w=_??new o(3);return w[0]=Math.floor(a[0]),w[1]=Math.floor(a[1]),w[2]=Math.floor(a[2]),w}function M(a,_){const w=_??new o(3);return w[0]=Math.round(a[0]),w[1]=Math.round(a[1]),w[2]=Math.round(a[2]),w}function G(a,_=0,w=1,v){const D=v??new o(3);return D[0]=Math.min(w,Math.max(_,a[0])),D[1]=Math.min(w,Math.max(_,a[1])),D[2]=Math.min(w,Math.max(_,a[2])),D}function A(a,_,w){const v=w??new o(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function L(a,_,w,v){const D=v??new o(3);return D[0]=a[0]+_[0]*w,D[1]=a[1]+_[1]*w,D[2]=a[2]+_[2]*w,D}function U(a,_){const w=a[0],v=a[1],D=a[2],q=_[0],W=_[1],ue=_[2],oe=Math.sqrt(w*w+v*v+D*D),ie=Math.sqrt(q*q+W*W+ue*ue),me=oe*ie,Se=me&&ne(a,_)/me;return Math.acos(Se)}function N(a,_,w){const v=w??new o(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const Y=N;function Q(a,_){return Math.abs(a[0]-_[0])<Le&&Math.abs(a[1]-_[1])<Le&&Math.abs(a[2]-_[2])<Le}function F(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function O(a,_,w,v){const D=v??new o(3);return D[0]=a[0]+w*(_[0]-a[0]),D[1]=a[1]+w*(_[1]-a[1]),D[2]=a[2]+w*(_[2]-a[2]),D}function $(a,_,w,v){const D=v??new o(3);return D[0]=a[0]+w[0]*(_[0]-a[0]),D[1]=a[1]+w[1]*(_[1]-a[1]),D[2]=a[2]+w[2]*(_[2]-a[2]),D}function le(a,_,w){const v=w??new o(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function V(a,_,w){const v=w??new o(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function R(a,_,w){const v=w??new o(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const z=R;function ce(a,_,w){const v=w??new o(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function K(a,_){const w=_??new o(3);return w[0]=1/a[0],w[1]=1/a[1],w[2]=1/a[2],w}const X=K;function H(a,_,w){const v=w??new o(3),D=a[2]*_[0]-a[0]*_[2],q=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=D,v[2]=q,v}function ne(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function be(a){const _=a[0],w=a[1],v=a[2];return Math.sqrt(_*_+w*w+v*v)}const Ue=be;function Ie(a){const _=a[0],w=a[1],v=a[2];return _*_+w*w+v*v}const Ae=Ie;function fe(a,_){const w=a[0]-_[0],v=a[1]-_[1],D=a[2]-_[2];return Math.sqrt(w*w+v*v+D*D)}const ke=fe;function ye(a,_){const w=a[0]-_[0],v=a[1]-_[1],D=a[2]-_[2];return w*w+v*v+D*D}const J=ye;function ee(a,_){const w=_??new o(3),v=a[0],D=a[1],q=a[2],W=Math.sqrt(v*v+D*D+q*q);return W>1e-5?(w[0]=v/W,w[1]=D/W,w[2]=q/W):(w[0]=0,w[1]=0,w[2]=0),w}function Te(a,_){const w=_??new o(3);return w[0]=-a[0],w[1]=-a[1],w[2]=-a[2],w}function Me(a,_){const w=_??new o(3);return w[0]=a[0],w[1]=a[1],w[2]=a[2],w}const Ve=Me;function De(a,_,w){const v=w??new o(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const Oe=De;function Pe(a,_,w){const v=w??new o(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const _e=Pe;function We(a=1,_){const w=_??new o(3),v=Math.random()*2*Math.PI,D=Math.random()*2-1,q=Math.sqrt(1-D*D)*a;return w[0]=Math.cos(v)*q,w[1]=Math.sin(v)*q,w[2]=D*a,w}function B(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function j(a,_,w){const v=w??new o(3),D=a[0],q=a[1],W=a[2],ue=_[3]*D+_[7]*q+_[11]*W+_[15]||1;return v[0]=(_[0]*D+_[4]*q+_[8]*W+_[12])/ue,v[1]=(_[1]*D+_[5]*q+_[9]*W+_[13])/ue,v[2]=(_[2]*D+_[6]*q+_[10]*W+_[14])/ue,v}function g(a,_,w){const v=w??new o(3),D=a[0],q=a[1],W=a[2];return v[0]=D*_[0*4+0]+q*_[1*4+0]+W*_[2*4+0],v[1]=D*_[0*4+1]+q*_[1*4+1]+W*_[2*4+1],v[2]=D*_[0*4+2]+q*_[1*4+2]+W*_[2*4+2],v}function i(a,_,w){const v=w??new o(3),D=a[0],q=a[1],W=a[2];return v[0]=D*_[0]+q*_[4]+W*_[8],v[1]=D*_[1]+q*_[5]+W*_[9],v[2]=D*_[2]+q*_[6]+W*_[10],v}function h(a,_,w){const v=w??new o(3),D=_[0],q=_[1],W=_[2],ue=_[3]*2,oe=a[0],ie=a[1],me=a[2],Se=q*me-W*ie,de=W*oe-D*me,ge=D*ie-q*oe;return v[0]=oe+Se*ue+(q*ge-W*de)*2,v[1]=ie+de*ue+(W*Se-D*ge)*2,v[2]=me+ge*ue+(D*de-q*Se)*2,v}function d(a,_){const w=_??new o(3);return w[0]=a[12],w[1]=a[13],w[2]=a[14],w}function b(a,_,w){const v=w??new o(3),D=_*4;return v[0]=a[D+0],v[1]=a[D+1],v[2]=a[D+2],v}function y(a,_){const w=_??new o(3),v=a[0],D=a[1],q=a[2],W=a[4],ue=a[5],oe=a[6],ie=a[8],me=a[9],Se=a[10];return w[0]=Math.sqrt(v*v+D*D+q*q),w[1]=Math.sqrt(W*W+ue*ue+oe*oe),w[2]=Math.sqrt(ie*ie+me*me+Se*Se),w}function S(a,_,w,v){const D=v??new o(3),q=[],W=[];return q[0]=a[0]-_[0],q[1]=a[1]-_[1],q[2]=a[2]-_[2],W[0]=q[0],W[1]=q[1]*Math.cos(w)-q[2]*Math.sin(w),W[2]=q[1]*Math.sin(w)+q[2]*Math.cos(w),D[0]=W[0]+_[0],D[1]=W[1]+_[1],D[2]=W[2]+_[2],D}function E(a,_,w,v){const D=v??new o(3),q=[],W=[];return q[0]=a[0]-_[0],q[1]=a[1]-_[1],q[2]=a[2]-_[2],W[0]=q[2]*Math.sin(w)+q[0]*Math.cos(w),W[1]=q[1],W[2]=q[2]*Math.cos(w)-q[0]*Math.sin(w),D[0]=W[0]+_[0],D[1]=W[1]+_[1],D[2]=W[2]+_[2],D}function r(a,_,w,v){const D=v??new o(3),q=[],W=[];return q[0]=a[0]-_[0],q[1]=a[1]-_[1],q[2]=a[2]-_[2],W[0]=q[0]*Math.cos(w)-q[1]*Math.sin(w),W[1]=q[0]*Math.sin(w)+q[1]*Math.cos(w),W[2]=q[2],D[0]=W[0]+_[0],D[1]=W[1]+_[1],D[2]=W[2]+_[2],D}function m(a,_,w){const v=w??new o(3);return ee(a,v),R(v,_,v)}function u(a,_,w){const v=w??new o(3);return be(a)>_?m(a,_,v):Me(a,v)}function p(a,_,w){const v=w??new o(3);return O(a,_,.5,v)}return{create:l,fromValues:f,set:k,ceil:x,floor:C,round:M,clamp:G,add:A,addScaled:L,angle:U,subtract:N,sub:Y,equalsApproximately:Q,equals:F,lerp:O,lerpV:$,max:le,min:V,mulScalar:R,scale:z,divScalar:ce,inverse:K,invert:X,cross:H,dot:ne,length:be,len:Ue,lengthSq:Ie,lenSq:Ae,distance:fe,dist:ke,distanceSq:ye,distSq:J,normalize:ee,negate:Te,copy:Me,clone:Ve,multiply:De,mul:Oe,divide:Pe,div:_e,random:We,zero:B,transformMat4:j,transformMat4Upper3x3:g,transformMat3:i,transformQuat:h,getTranslation:d,getAxis:b,getScaling:y,rotateX:S,rotateY:E,rotateZ:r,setLength:m,truncate:u,midpoint:p}}const Dr=new Map;function Ln(o){let l=Dr.get(o);return l||(l=wl(o),Dr.set(o,l)),l}function xl(o){const l=jr(o),f=Ln(o);function k(i,h,d,b,y,S,E,r,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,y!==void 0&&(u[5]=y,S!==void 0&&(u[6]=S,E!==void 0&&(u[8]=E,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function x(i,h,d,b,y,S,E,r,m,u){const p=u??new o(12);return p[0]=i,p[1]=h,p[2]=d,p[3]=0,p[4]=b,p[5]=y,p[6]=S,p[7]=0,p[8]=E,p[9]=r,p[10]=m,p[11]=0,p}function C(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function M(i,h){const d=h??new o(12),b=i[0],y=i[1],S=i[2],E=i[3],r=b+b,m=y+y,u=S+S,p=b*r,a=y*r,_=y*m,w=S*r,v=S*m,D=S*u,q=E*r,W=E*m,ue=E*u;return d[0]=1-_-D,d[1]=a+ue,d[2]=w-W,d[3]=0,d[4]=a-ue,d[5]=1-p-D,d[6]=v+q,d[7]=0,d[8]=w+W,d[9]=v-q,d[10]=1-p-_,d[11]=0,d}function G(i,h){const d=h??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function A(i,h,d){const b=d??new o(12);return b[0]=i[0]*h,b[1]=i[1]*h,b[2]=i[2]*h,b[4]=i[4]*h,b[5]=i[5]*h,b[6]=i[6]*h,b[8]=i[8]*h,b[9]=i[9]*h,b[10]=i[10]*h,b}const L=A;function U(i,h,d){const b=d??new o(12);return b[0]=i[0]+h[0],b[1]=i[1]+h[1],b[2]=i[2]+h[2],b[4]=i[4]+h[4],b[5]=i[5]+h[5],b[6]=i[6]+h[6],b[8]=i[8]+h[8],b[9]=i[9]+h[9],b[10]=i[10]+h[10],b}function N(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const Y=N;function Q(i,h){return Math.abs(i[0]-h[0])<Le&&Math.abs(i[1]-h[1])<Le&&Math.abs(i[2]-h[2])<Le&&Math.abs(i[4]-h[4])<Le&&Math.abs(i[5]-h[5])<Le&&Math.abs(i[6]-h[6])<Le&&Math.abs(i[8]-h[8])<Le&&Math.abs(i[9]-h[9])<Le&&Math.abs(i[10]-h[10])<Le}function F(i,h){return i[0]===h[0]&&i[1]===h[1]&&i[2]===h[2]&&i[4]===h[4]&&i[5]===h[5]&&i[6]===h[6]&&i[8]===h[8]&&i[9]===h[9]&&i[10]===h[10]}function O(i){const h=i??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function $(i,h){const d=h??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const b=i[0*4+0],y=i[0*4+1],S=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2];return d[0]=b,d[1]=E,d[2]=u,d[4]=y,d[5]=r,d[6]=p,d[8]=S,d[9]=m,d[10]=a,d}function le(i,h){const d=h??new o(12),b=i[0*4+0],y=i[0*4+1],S=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2],_=a*r-m*p,w=-a*E+m*u,v=p*E-r*u,D=1/(b*_+y*w+S*v);return d[0]=_*D,d[1]=(-a*y+S*p)*D,d[2]=(m*y-S*r)*D,d[4]=w*D,d[5]=(a*b-S*u)*D,d[6]=(-m*b+S*E)*D,d[8]=v*D,d[9]=(-p*b+y*u)*D,d[10]=(r*b-y*E)*D,d}function V(i){const h=i[0],d=i[0*4+1],b=i[0*4+2],y=i[1*4+0],S=i[1*4+1],E=i[1*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2];return h*(S*u-m*E)-y*(d*u-m*b)+r*(d*E-S*b)}const R=le;function z(i,h,d){const b=d??new o(12),y=i[0],S=i[1],E=i[2],r=i[4+0],m=i[4+1],u=i[4+2],p=i[8+0],a=i[8+1],_=i[8+2],w=h[0],v=h[1],D=h[2],q=h[4+0],W=h[4+1],ue=h[4+2],oe=h[8+0],ie=h[8+1],me=h[8+2];return b[0]=y*w+r*v+p*D,b[1]=S*w+m*v+a*D,b[2]=E*w+u*v+_*D,b[4]=y*q+r*W+p*ue,b[5]=S*q+m*W+a*ue,b[6]=E*q+u*W+_*ue,b[8]=y*oe+r*ie+p*me,b[9]=S*oe+m*ie+a*me,b[10]=E*oe+u*ie+_*me,b}const ce=z;function K(i,h,d){const b=d??O();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function X(i,h){const d=h??l.create();return d[0]=i[8],d[1]=i[9],d}function H(i,h,d){const b=d??l.create(),y=h*4;return b[0]=i[y+0],b[1]=i[y+1],b}function ne(i,h,d,b){const y=b===i?i:N(i,b),S=d*4;return y[S+0]=h[0],y[S+1]=h[1],y}function be(i,h){const d=h??l.create(),b=i[0],y=i[1],S=i[4],E=i[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(S*S+E*E),d}function Ue(i,h){const d=h??f.create(),b=i[0],y=i[1],S=i[2],E=i[4],r=i[5],m=i[6],u=i[8],p=i[9],a=i[10];return d[0]=Math.sqrt(b*b+y*y+S*S),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Ie(i,h){const d=h??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Ae(i,h,d){const b=d??new o(12),y=h[0],S=h[1],E=i[0],r=i[1],m=i[2],u=i[1*4+0],p=i[1*4+1],a=i[1*4+2],_=i[2*4+0],w=i[2*4+1],v=i[2*4+2];return i!==b&&(b[0]=E,b[1]=r,b[2]=m,b[4]=u,b[5]=p,b[6]=a),b[8]=E*y+u*S+_,b[9]=r*y+p*S+w,b[10]=m*y+a*S+v,b}function fe(i,h){const d=h??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ke(i,h,d){const b=d??new o(12),y=i[0*4+0],S=i[0*4+1],E=i[0*4+2],r=i[1*4+0],m=i[1*4+1],u=i[1*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y+a*r,b[1]=p*S+a*m,b[2]=p*E+a*u,b[4]=p*r-a*y,b[5]=p*m-a*S,b[6]=p*u-a*E,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ye(i,h){const d=h??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function J(i,h,d){const b=d??new o(12),y=i[4],S=i[5],E=i[6],r=i[8],m=i[9],u=i[10],p=Math.cos(h),a=Math.sin(h);return b[4]=p*y+a*r,b[5]=p*S+a*m,b[6]=p*E+a*u,b[8]=p*r-a*y,b[9]=p*m-a*S,b[10]=p*u-a*E,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function ee(i,h){const d=h??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function Te(i,h,d){const b=d??new o(12),y=i[0*4+0],S=i[0*4+1],E=i[0*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y-a*r,b[1]=p*S-a*m,b[2]=p*E-a*u,b[8]=p*r+a*y,b[9]=p*m+a*S,b[10]=p*u+a*E,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Me=fe,Ve=ke;function De(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Oe(i,h,d){const b=d??new o(12),y=h[0],S=h[1];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=S*i[1*4+0],b[5]=S*i[1*4+1],b[6]=S*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Pe(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function _e(i,h,d){const b=d??new o(12),y=h[0],S=h[1],E=h[2];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=S*i[1*4+0],b[5]=S*i[1*4+1],b[6]=S*i[1*4+2],b[8]=E*i[2*4+0],b[9]=E*i[2*4+1],b[10]=E*i[2*4+2],b}function We(i,h){const d=h??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(i,h,d){const b=d??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function j(i,h){const d=h??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function g(i,h,d){const b=d??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],b[8]=h*i[2*4+0],b[9]=h*i[2*4+1],b[10]=h*i[2*4+2],b}return{add:U,clone:Y,copy:N,create:k,determinant:V,equals:F,equalsApproximately:Q,fromMat4:C,fromQuat:M,get3DScaling:Ue,getAxis:H,getScaling:be,getTranslation:X,identity:O,inverse:le,invert:R,mul:ce,mulScalar:L,multiply:z,multiplyScalar:A,negate:G,rotate:ke,rotateX:J,rotateY:Te,rotateZ:Ve,rotation:fe,rotationX:ye,rotationY:ee,rotationZ:Me,scale:Oe,scale3D:_e,scaling:De,scaling3D:Pe,set:x,setAxis:ne,setTranslation:K,translate:Ae,translation:Ie,transpose:$,uniformScale:B,uniformScale3D:g,uniformScaling:We,uniformScaling3D:j}}const Ar=new Map;function yl(o){let l=Ar.get(o);return l||(l=xl(o),Ar.set(o,l)),l}function Pl(o){const l=Ln(o);function f(r,m,u,p,a,_,w,v,D,q,W,ue,oe,ie,me,Se){const de=new o(16);return r!==void 0&&(de[0]=r,m!==void 0&&(de[1]=m,u!==void 0&&(de[2]=u,p!==void 0&&(de[3]=p,a!==void 0&&(de[4]=a,_!==void 0&&(de[5]=_,w!==void 0&&(de[6]=w,v!==void 0&&(de[7]=v,D!==void 0&&(de[8]=D,q!==void 0&&(de[9]=q,W!==void 0&&(de[10]=W,ue!==void 0&&(de[11]=ue,oe!==void 0&&(de[12]=oe,ie!==void 0&&(de[13]=ie,me!==void 0&&(de[14]=me,Se!==void 0&&(de[15]=Se)))))))))))))))),de}function k(r,m,u,p,a,_,w,v,D,q,W,ue,oe,ie,me,Se,de){const ge=de??new o(16);return ge[0]=r,ge[1]=m,ge[2]=u,ge[3]=p,ge[4]=a,ge[5]=_,ge[6]=w,ge[7]=v,ge[8]=D,ge[9]=q,ge[10]=W,ge[11]=ue,ge[12]=oe,ge[13]=ie,ge[14]=me,ge[15]=Se,ge}function x(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function C(r,m){const u=m??new o(16),p=r[0],a=r[1],_=r[2],w=r[3],v=p+p,D=a+a,q=_+_,W=p*v,ue=a*v,oe=a*D,ie=_*v,me=_*D,Se=_*q,de=w*v,ge=w*D,Ce=w*q;return u[0]=1-oe-Se,u[1]=ue+Ce,u[2]=ie-ge,u[3]=0,u[4]=ue-Ce,u[5]=1-W-Se,u[6]=me+de,u[7]=0,u[8]=ie+ge,u[9]=me-de,u[10]=1-W-oe,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(r,m){const u=m??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function G(r,m,u){const p=u??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function A(r,m,u){const p=u??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const L=A;function U(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const N=U;function Y(r,m){return Math.abs(r[0]-m[0])<Le&&Math.abs(r[1]-m[1])<Le&&Math.abs(r[2]-m[2])<Le&&Math.abs(r[3]-m[3])<Le&&Math.abs(r[4]-m[4])<Le&&Math.abs(r[5]-m[5])<Le&&Math.abs(r[6]-m[6])<Le&&Math.abs(r[7]-m[7])<Le&&Math.abs(r[8]-m[8])<Le&&Math.abs(r[9]-m[9])<Le&&Math.abs(r[10]-m[10])<Le&&Math.abs(r[11]-m[11])<Le&&Math.abs(r[12]-m[12])<Le&&Math.abs(r[13]-m[13])<Le&&Math.abs(r[14]-m[14])<Le&&Math.abs(r[15]-m[15])<Le}function Q(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function F(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function O(r,m){const u=m??new o(16);if(u===r){let Re;return Re=r[1],r[1]=r[4],r[4]=Re,Re=r[2],r[2]=r[8],r[8]=Re,Re=r[3],r[3]=r[12],r[12]=Re,Re=r[6],r[6]=r[9],r[9]=Re,Re=r[7],r[7]=r[13],r[13]=Re,Re=r[11],r[11]=r[14],r[14]=Re,u}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],w=r[0*4+3],v=r[1*4+0],D=r[1*4+1],q=r[1*4+2],W=r[1*4+3],ue=r[2*4+0],oe=r[2*4+1],ie=r[2*4+2],me=r[2*4+3],Se=r[3*4+0],de=r[3*4+1],ge=r[3*4+2],Ce=r[3*4+3];return u[0]=p,u[1]=v,u[2]=ue,u[3]=Se,u[4]=a,u[5]=D,u[6]=oe,u[7]=de,u[8]=_,u[9]=q,u[10]=ie,u[11]=ge,u[12]=w,u[13]=W,u[14]=me,u[15]=Ce,u}function $(r,m){const u=m??new o(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],w=r[0*4+3],v=r[1*4+0],D=r[1*4+1],q=r[1*4+2],W=r[1*4+3],ue=r[2*4+0],oe=r[2*4+1],ie=r[2*4+2],me=r[2*4+3],Se=r[3*4+0],de=r[3*4+1],ge=r[3*4+2],Ce=r[3*4+3],Re=ie*Ce,Z=ge*me,ae=q*Ce,se=ge*W,pe=q*me,we=ie*W,xe=_*Ce,he=ge*w,ve=_*me,Ge=ie*w,ze=_*W,Ne=q*w,Ke=ue*de,Xe=Se*oe,He=v*de,tt=Se*D,Qe=v*oe,bt=ue*D,ft=p*de,_t=Se*a,mt=p*oe,vt=ue*a,Je=p*D,ut=v*a,gt=Re*D+se*oe+pe*de-(Z*D+ae*oe+we*de),ot=Z*a+xe*oe+Ge*de-(Re*a+he*oe+ve*de),wt=ae*a+he*D+ze*de-(se*a+xe*D+Ne*de),xt=we*a+ve*D+Ne*oe-(pe*a+Ge*D+ze*oe),Ye=1/(p*gt+v*ot+ue*wt+Se*xt);return u[0]=Ye*gt,u[1]=Ye*ot,u[2]=Ye*wt,u[3]=Ye*xt,u[4]=Ye*(Z*v+ae*ue+we*Se-(Re*v+se*ue+pe*Se)),u[5]=Ye*(Re*p+he*ue+ve*Se-(Z*p+xe*ue+Ge*Se)),u[6]=Ye*(se*p+xe*v+Ne*Se-(ae*p+he*v+ze*Se)),u[7]=Ye*(pe*p+Ge*v+ze*ue-(we*p+ve*v+Ne*ue)),u[8]=Ye*(Ke*W+tt*me+Qe*Ce-(Xe*W+He*me+bt*Ce)),u[9]=Ye*(Xe*w+ft*me+vt*Ce-(Ke*w+_t*me+mt*Ce)),u[10]=Ye*(He*w+_t*W+Je*Ce-(tt*w+ft*W+ut*Ce)),u[11]=Ye*(bt*w+mt*W+ut*me-(Qe*w+vt*W+Je*me)),u[12]=Ye*(He*ie+bt*ge+Xe*q-(Qe*ge+Ke*q+tt*ie)),u[13]=Ye*(mt*ge+Ke*_+_t*ie-(ft*ie+vt*ge+Xe*_)),u[14]=Ye*(ft*q+ut*ge+tt*_-(Je*ge+He*_+_t*q)),u[15]=Ye*(Je*ie+Qe*_+vt*q-(mt*q+ut*ie+bt*_)),u}function le(r){const m=r[0],u=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],w=r[1*4+1],v=r[1*4+2],D=r[1*4+3],q=r[2*4+0],W=r[2*4+1],ue=r[2*4+2],oe=r[2*4+3],ie=r[3*4+0],me=r[3*4+1],Se=r[3*4+2],de=r[3*4+3],ge=ue*de,Ce=Se*oe,Re=v*de,Z=Se*D,ae=v*oe,se=ue*D,pe=p*de,we=Se*a,xe=p*oe,he=ue*a,ve=p*D,Ge=v*a,ze=ge*w+Z*W+ae*me-(Ce*w+Re*W+se*me),Ne=Ce*u+pe*W+he*me-(ge*u+we*W+xe*me),Ke=Re*u+we*w+ve*me-(Z*u+pe*w+Ge*me),Xe=se*u+xe*w+Ge*W-(ae*u+he*w+ve*W);return m*ze+_*Ne+q*Ke+ie*Xe}const V=$;function R(r,m,u){const p=u??new o(16),a=r[0],_=r[1],w=r[2],v=r[3],D=r[4+0],q=r[4+1],W=r[4+2],ue=r[4+3],oe=r[8+0],ie=r[8+1],me=r[8+2],Se=r[8+3],de=r[12+0],ge=r[12+1],Ce=r[12+2],Re=r[12+3],Z=m[0],ae=m[1],se=m[2],pe=m[3],we=m[4+0],xe=m[4+1],he=m[4+2],ve=m[4+3],Ge=m[8+0],ze=m[8+1],Ne=m[8+2],Ke=m[8+3],Xe=m[12+0],He=m[12+1],tt=m[12+2],Qe=m[12+3];return p[0]=a*Z+D*ae+oe*se+de*pe,p[1]=_*Z+q*ae+ie*se+ge*pe,p[2]=w*Z+W*ae+me*se+Ce*pe,p[3]=v*Z+ue*ae+Se*se+Re*pe,p[4]=a*we+D*xe+oe*he+de*ve,p[5]=_*we+q*xe+ie*he+ge*ve,p[6]=w*we+W*xe+me*he+Ce*ve,p[7]=v*we+ue*xe+Se*he+Re*ve,p[8]=a*Ge+D*ze+oe*Ne+de*Ke,p[9]=_*Ge+q*ze+ie*Ne+ge*Ke,p[10]=w*Ge+W*ze+me*Ne+Ce*Ke,p[11]=v*Ge+ue*ze+Se*Ne+Re*Ke,p[12]=a*Xe+D*He+oe*tt+de*Qe,p[13]=_*Xe+q*He+ie*tt+ge*Qe,p[14]=w*Xe+W*He+me*tt+Ce*Qe,p[15]=v*Xe+ue*He+Se*tt+Re*Qe,p}const z=R;function ce(r,m,u){const p=u??F();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function K(r,m){const u=m??l.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function X(r,m,u){const p=u??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function H(r,m,u,p){const a=p===r?p:U(r,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function ne(r,m){const u=m??l.create(),p=r[0],a=r[1],_=r[2],w=r[4],v=r[5],D=r[6],q=r[8],W=r[9],ue=r[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(w*w+v*v+D*D),u[2]=Math.sqrt(q*q+W*W+ue*ue),u}function be(r,m,u,p,a){const _=a??new o(16),w=Math.tan(Math.PI*.5-.5*r);if(_[0]=w/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=w,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(u-p);_[10]=p*v,_[14]=p*u*v}else _[10]=-1,_[14]=-u;return _}function Ue(r,m,u,p=1/0,a){const _=a??new o(16),w=1/Math.tan(r*.5);if(_[0]=w/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=w,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const v=1/(p-u);_[10]=u*v,_[14]=p*u*v}return _}function Ie(r,m,u,p,a,_,w){const v=w??new o(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(p+u)/(u-p),v[14]=a/(a-_),v[15]=1,v}function Ae(r,m,u,p,a,_,w){const v=w??new o(16),D=m-r,q=p-u,W=a-_;return v[0]=2*a/D,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/q,v[6]=0,v[7]=0,v[8]=(r+m)/D,v[9]=(p+u)/q,v[10]=_/W,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/W,v[15]=0,v}function fe(r,m,u,p,a,_=1/0,w){const v=w??new o(16),D=m-r,q=p-u;if(v[0]=2*a/D,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/q,v[6]=0,v[7]=0,v[8]=(r+m)/D,v[9]=(p+u)/q,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const W=1/(_-a);v[10]=a*W,v[14]=_*a*W}return v}const ke=l.create(),ye=l.create(),J=l.create();function ee(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(m,r,J),J),l.normalize(l.cross(u,J,ke),ke),l.normalize(l.cross(J,ke,ye),ye),a[0]=ke[0],a[1]=ke[1],a[2]=ke[2],a[3]=0,a[4]=ye[0],a[5]=ye[1],a[6]=ye[2],a[7]=0,a[8]=J[0],a[9]=J[1],a[10]=J[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Te(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,J),J),l.normalize(l.cross(u,J,ke),ke),l.normalize(l.cross(J,ke,ye),ye),a[0]=ke[0],a[1]=ke[1],a[2]=ke[2],a[3]=0,a[4]=ye[0],a[5]=ye[1],a[6]=ye[2],a[7]=0,a[8]=J[0],a[9]=J[1],a[10]=J[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Me(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,J),J),l.normalize(l.cross(u,J,ke),ke),l.normalize(l.cross(J,ke,ye),ye),a[0]=ke[0],a[1]=ye[0],a[2]=J[0],a[3]=0,a[4]=ke[1],a[5]=ye[1],a[6]=J[1],a[7]=0,a[8]=ke[2],a[9]=ye[2],a[10]=J[2],a[11]=0,a[12]=-(ke[0]*r[0]+ke[1]*r[1]+ke[2]*r[2]),a[13]=-(ye[0]*r[0]+ye[1]*r[1]+ye[2]*r[2]),a[14]=-(J[0]*r[0]+J[1]*r[1]+J[2]*r[2]),a[15]=1,a}function Ve(r,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function De(r,m,u){const p=u??new o(16),a=m[0],_=m[1],w=m[2],v=r[0],D=r[1],q=r[2],W=r[3],ue=r[1*4+0],oe=r[1*4+1],ie=r[1*4+2],me=r[1*4+3],Se=r[2*4+0],de=r[2*4+1],ge=r[2*4+2],Ce=r[2*4+3],Re=r[3*4+0],Z=r[3*4+1],ae=r[3*4+2],se=r[3*4+3];return r!==p&&(p[0]=v,p[1]=D,p[2]=q,p[3]=W,p[4]=ue,p[5]=oe,p[6]=ie,p[7]=me,p[8]=Se,p[9]=de,p[10]=ge,p[11]=Ce),p[12]=v*a+ue*_+Se*w+Re,p[13]=D*a+oe*_+de*w+Z,p[14]=q*a+ie*_+ge*w+ae,p[15]=W*a+me*_+Ce*w+se,p}function Oe(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Pe(r,m,u){const p=u??new o(16),a=r[4],_=r[5],w=r[6],v=r[7],D=r[8],q=r[9],W=r[10],ue=r[11],oe=Math.cos(m),ie=Math.sin(m);return p[4]=oe*a+ie*D,p[5]=oe*_+ie*q,p[6]=oe*w+ie*W,p[7]=oe*v+ie*ue,p[8]=oe*D-ie*a,p[9]=oe*q-ie*_,p[10]=oe*W-ie*w,p[11]=oe*ue-ie*v,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function _e(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function We(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],w=r[0*4+2],v=r[0*4+3],D=r[2*4+0],q=r[2*4+1],W=r[2*4+2],ue=r[2*4+3],oe=Math.cos(m),ie=Math.sin(m);return p[0]=oe*a-ie*D,p[1]=oe*_-ie*q,p[2]=oe*w-ie*W,p[3]=oe*v-ie*ue,p[8]=oe*D+ie*a,p[9]=oe*q+ie*_,p[10]=oe*W+ie*w,p[11]=oe*ue+ie*v,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function j(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],w=r[0*4+2],v=r[0*4+3],D=r[1*4+0],q=r[1*4+1],W=r[1*4+2],ue=r[1*4+3],oe=Math.cos(m),ie=Math.sin(m);return p[0]=oe*a+ie*D,p[1]=oe*_+ie*q,p[2]=oe*w+ie*W,p[3]=oe*v+ie*ue,p[4]=oe*D-ie*a,p[5]=oe*q-ie*_,p[6]=oe*W-ie*w,p[7]=oe*ue-ie*v,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function g(r,m,u){const p=u??new o(16);let a=r[0],_=r[1],w=r[2];const v=Math.sqrt(a*a+_*_+w*w);a/=v,_/=v,w/=v;const D=a*a,q=_*_,W=w*w,ue=Math.cos(m),oe=Math.sin(m),ie=1-ue;return p[0]=D+(1-D)*ue,p[1]=a*_*ie+w*oe,p[2]=a*w*ie-_*oe,p[3]=0,p[4]=a*_*ie-w*oe,p[5]=q+(1-q)*ue,p[6]=_*w*ie+a*oe,p[7]=0,p[8]=a*w*ie+_*oe,p[9]=_*w*ie-a*oe,p[10]=W+(1-W)*ue,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=g;function h(r,m,u,p){const a=p??new o(16);let _=m[0],w=m[1],v=m[2];const D=Math.sqrt(_*_+w*w+v*v);_/=D,w/=D,v/=D;const q=_*_,W=w*w,ue=v*v,oe=Math.cos(u),ie=Math.sin(u),me=1-oe,Se=q+(1-q)*oe,de=_*w*me+v*ie,ge=_*v*me-w*ie,Ce=_*w*me-v*ie,Re=W+(1-W)*oe,Z=w*v*me+_*ie,ae=_*v*me+w*ie,se=w*v*me-_*ie,pe=ue+(1-ue)*oe,we=r[0],xe=r[1],he=r[2],ve=r[3],Ge=r[4],ze=r[5],Ne=r[6],Ke=r[7],Xe=r[8],He=r[9],tt=r[10],Qe=r[11];return a[0]=Se*we+de*Ge+ge*Xe,a[1]=Se*xe+de*ze+ge*He,a[2]=Se*he+de*Ne+ge*tt,a[3]=Se*ve+de*Ke+ge*Qe,a[4]=Ce*we+Re*Ge+Z*Xe,a[5]=Ce*xe+Re*ze+Z*He,a[6]=Ce*he+Re*Ne+Z*tt,a[7]=Ce*ve+Re*Ke+Z*Qe,a[8]=ae*we+se*Ge+pe*Xe,a[9]=ae*xe+se*ze+pe*He,a[10]=ae*he+se*Ne+pe*tt,a[11]=ae*ve+se*Ke+pe*Qe,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const d=h;function b(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(r,m,u){const p=u??new o(16),a=m[0],_=m[1],w=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=w*r[2*4+0],p[9]=w*r[2*4+1],p[10]=w*r[2*4+2],p[11]=w*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function S(r,m){const u=m??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(r,m,u){const p=u??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:G,aim:ee,axisRotate:h,axisRotation:g,cameraAim:Te,clone:N,copy:U,create:f,determinant:le,equals:Q,equalsApproximately:Y,fromMat3:x,fromQuat:C,frustum:Ae,frustumReverseZ:fe,getAxis:X,getScaling:ne,getTranslation:K,identity:F,inverse:$,invert:V,lookAt:Me,mul:z,mulScalar:L,multiply:R,multiplyScalar:A,negate:M,ortho:Ie,perspective:be,perspectiveReverseZ:Ue,rotate:d,rotateX:Pe,rotateY:We,rotateZ:j,rotation:i,rotationX:Oe,rotationY:_e,rotationZ:B,scale:y,scaling:b,set:k,setAxis:H,setTranslation:ce,translate:De,translation:Ve,transpose:O,uniformScale:E,uniformScaling:S}}const Rr=new Map;function Sl(o){let l=Rr.get(o);return l||(l=Pl(o),Rr.set(o,l)),l}function El(o){const l=Ln(o);function f(B,j,g,i){const h=new o(4);return B!==void 0&&(h[0]=B,j!==void 0&&(h[1]=j,g!==void 0&&(h[2]=g,i!==void 0&&(h[3]=i)))),h}const k=f;function x(B,j,g,i,h){const d=h??new o(4);return d[0]=B,d[1]=j,d[2]=g,d[3]=i,d}function C(B,j,g){const i=g??new o(4),h=j*.5,d=Math.sin(h);return i[0]=d*B[0],i[1]=d*B[1],i[2]=d*B[2],i[3]=Math.cos(h),i}function M(B,j){const g=j??l.create(3),i=Math.acos(B[3])*2,h=Math.sin(i*.5);return h>Le?(g[0]=B[0]/h,g[1]=B[1]/h,g[2]=B[2]/h):(g[0]=1,g[1]=0,g[2]=0),{angle:i,axis:g}}function G(B,j){const g=be(B,j);return Math.acos(2*g*g-1)}function A(B,j,g){const i=g??new o(4),h=B[0],d=B[1],b=B[2],y=B[3],S=j[0],E=j[1],r=j[2],m=j[3];return i[0]=h*m+y*S+d*r-b*E,i[1]=d*m+y*E+b*S-h*r,i[2]=b*m+y*r+h*E-d*S,i[3]=y*m-h*S-d*E-b*r,i}const L=A;function U(B,j,g){const i=g??new o(4),h=j*.5,d=B[0],b=B[1],y=B[2],S=B[3],E=Math.sin(h),r=Math.cos(h);return i[0]=d*r+S*E,i[1]=b*r+y*E,i[2]=y*r-b*E,i[3]=S*r-d*E,i}function N(B,j,g){const i=g??new o(4),h=j*.5,d=B[0],b=B[1],y=B[2],S=B[3],E=Math.sin(h),r=Math.cos(h);return i[0]=d*r-y*E,i[1]=b*r+S*E,i[2]=y*r+d*E,i[3]=S*r-b*E,i}function Y(B,j,g){const i=g??new o(4),h=j*.5,d=B[0],b=B[1],y=B[2],S=B[3],E=Math.sin(h),r=Math.cos(h);return i[0]=d*r+b*E,i[1]=b*r-d*E,i[2]=y*r+S*E,i[3]=S*r-y*E,i}function Q(B,j,g,i){const h=i??new o(4),d=B[0],b=B[1],y=B[2],S=B[3];let E=j[0],r=j[1],m=j[2],u=j[3],p=d*E+b*r+y*m+S*u;p<0&&(p=-p,E=-E,r=-r,m=-m,u=-u);let a,_;if(1-p>Le){const w=Math.acos(p),v=Math.sin(w);a=Math.sin((1-g)*w)/v,_=Math.sin(g*w)/v}else a=1-g,_=g;return h[0]=a*d+_*E,h[1]=a*b+_*r,h[2]=a*y+_*m,h[3]=a*S+_*u,h}function F(B,j){const g=j??new o(4),i=B[0],h=B[1],d=B[2],b=B[3],y=i*i+h*h+d*d+b*b,S=y?1/y:0;return g[0]=-i*S,g[1]=-h*S,g[2]=-d*S,g[3]=b*S,g}function O(B,j){const g=j??new o(4);return g[0]=-B[0],g[1]=-B[1],g[2]=-B[2],g[3]=B[3],g}function $(B,j){const g=j??new o(4),i=B[0]+B[5]+B[10];if(i>0){const h=Math.sqrt(i+1);g[3]=.5*h;const d=.5/h;g[0]=(B[6]-B[9])*d,g[1]=(B[8]-B[2])*d,g[2]=(B[1]-B[4])*d}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const d=(h+1)%3,b=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[d*4+d]-B[b*4+b]+1);g[h]=.5*y;const S=.5/y;g[3]=(B[d*4+b]-B[b*4+d])*S,g[d]=(B[d*4+h]+B[h*4+d])*S,g[b]=(B[b*4+h]+B[h*4+b])*S}return g}function le(B,j,g,i,h){const d=h??new o(4),b=B*.5,y=j*.5,S=g*.5,E=Math.sin(b),r=Math.cos(b),m=Math.sin(y),u=Math.cos(y),p=Math.sin(S),a=Math.cos(S);switch(i){case"xyz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function V(B,j){const g=j??new o(4);return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g}const R=V;function z(B,j,g){const i=g??new o(4);return i[0]=B[0]+j[0],i[1]=B[1]+j[1],i[2]=B[2]+j[2],i[3]=B[3]+j[3],i}function ce(B,j,g){const i=g??new o(4);return i[0]=B[0]-j[0],i[1]=B[1]-j[1],i[2]=B[2]-j[2],i[3]=B[3]-j[3],i}const K=ce;function X(B,j,g){const i=g??new o(4);return i[0]=B[0]*j,i[1]=B[1]*j,i[2]=B[2]*j,i[3]=B[3]*j,i}const H=X;function ne(B,j,g){const i=g??new o(4);return i[0]=B[0]/j,i[1]=B[1]/j,i[2]=B[2]/j,i[3]=B[3]/j,i}function be(B,j){return B[0]*j[0]+B[1]*j[1]+B[2]*j[2]+B[3]*j[3]}function Ue(B,j,g,i){const h=i??new o(4);return h[0]=B[0]+g*(j[0]-B[0]),h[1]=B[1]+g*(j[1]-B[1]),h[2]=B[2]+g*(j[2]-B[2]),h[3]=B[3]+g*(j[3]-B[3]),h}function Ie(B){const j=B[0],g=B[1],i=B[2],h=B[3];return Math.sqrt(j*j+g*g+i*i+h*h)}const Ae=Ie;function fe(B){const j=B[0],g=B[1],i=B[2],h=B[3];return j*j+g*g+i*i+h*h}const ke=fe;function ye(B,j){const g=j??new o(4),i=B[0],h=B[1],d=B[2],b=B[3],y=Math.sqrt(i*i+h*h+d*d+b*b);return y>1e-5?(g[0]=i/y,g[1]=h/y,g[2]=d/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function J(B,j){return Math.abs(B[0]-j[0])<Le&&Math.abs(B[1]-j[1])<Le&&Math.abs(B[2]-j[2])<Le&&Math.abs(B[3]-j[3])<Le}function ee(B,j){return B[0]===j[0]&&B[1]===j[1]&&B[2]===j[2]&&B[3]===j[3]}function Te(B){const j=B??new o(4);return j[0]=0,j[1]=0,j[2]=0,j[3]=1,j}const Me=l.create(),Ve=l.create(),De=l.create();function Oe(B,j,g){const i=g??new o(4),h=l.dot(B,j);return h<-.999999?(l.cross(Ve,B,Me),l.len(Me)<1e-6&&l.cross(De,B,Me),l.normalize(Me,Me),C(Me,Math.PI,i),i):h>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(B,j,Me),i[0]=Me[0],i[1]=Me[1],i[2]=Me[2],i[3]=1+h,ye(i,i))}const Pe=new o(4),_e=new o(4);function We(B,j,g,i,h,d){const b=d??new o(4);return Q(B,i,h,Pe),Q(j,g,h,_e),Q(Pe,_e,2*h*(1-h),b),b}return{create:f,fromValues:k,set:x,fromAxisAngle:C,toAxisAngle:M,angle:G,multiply:A,mul:L,rotateX:U,rotateY:N,rotateZ:Y,slerp:Q,inverse:F,conjugate:O,fromMat:$,fromEuler:le,copy:V,clone:R,add:z,subtract:ce,sub:K,mulScalar:X,scale:H,divScalar:ne,dot:be,lerp:Ue,length:Ie,len:Ae,lengthSq:fe,lenSq:ke,normalize:ye,equalsApproximately:J,equals:ee,identity:Te,rotationTo:Oe,sqlerp:We}}const Ir=new Map;function kl(o){let l=Ir.get(o);return l||(l=El(o),Ir.set(o,l)),l}function Cl(o){function l(g,i,h,d){const b=new o(4);return g!==void 0&&(b[0]=g,i!==void 0&&(b[1]=i,h!==void 0&&(b[2]=h,d!==void 0&&(b[3]=d)))),b}const f=l;function k(g,i,h,d,b){const y=b??new o(4);return y[0]=g,y[1]=i,y[2]=h,y[3]=d,y}function x(g,i){const h=i??new o(4);return h[0]=Math.ceil(g[0]),h[1]=Math.ceil(g[1]),h[2]=Math.ceil(g[2]),h[3]=Math.ceil(g[3]),h}function C(g,i){const h=i??new o(4);return h[0]=Math.floor(g[0]),h[1]=Math.floor(g[1]),h[2]=Math.floor(g[2]),h[3]=Math.floor(g[3]),h}function M(g,i){const h=i??new o(4);return h[0]=Math.round(g[0]),h[1]=Math.round(g[1]),h[2]=Math.round(g[2]),h[3]=Math.round(g[3]),h}function G(g,i=0,h=1,d){const b=d??new o(4);return b[0]=Math.min(h,Math.max(i,g[0])),b[1]=Math.min(h,Math.max(i,g[1])),b[2]=Math.min(h,Math.max(i,g[2])),b[3]=Math.min(h,Math.max(i,g[3])),b}function A(g,i,h){const d=h??new o(4);return d[0]=g[0]+i[0],d[1]=g[1]+i[1],d[2]=g[2]+i[2],d[3]=g[3]+i[3],d}function L(g,i,h,d){const b=d??new o(4);return b[0]=g[0]+i[0]*h,b[1]=g[1]+i[1]*h,b[2]=g[2]+i[2]*h,b[3]=g[3]+i[3]*h,b}function U(g,i,h){const d=h??new o(4);return d[0]=g[0]-i[0],d[1]=g[1]-i[1],d[2]=g[2]-i[2],d[3]=g[3]-i[3],d}const N=U;function Y(g,i){return Math.abs(g[0]-i[0])<Le&&Math.abs(g[1]-i[1])<Le&&Math.abs(g[2]-i[2])<Le&&Math.abs(g[3]-i[3])<Le}function Q(g,i){return g[0]===i[0]&&g[1]===i[1]&&g[2]===i[2]&&g[3]===i[3]}function F(g,i,h,d){const b=d??new o(4);return b[0]=g[0]+h*(i[0]-g[0]),b[1]=g[1]+h*(i[1]-g[1]),b[2]=g[2]+h*(i[2]-g[2]),b[3]=g[3]+h*(i[3]-g[3]),b}function O(g,i,h,d){const b=d??new o(4);return b[0]=g[0]+h[0]*(i[0]-g[0]),b[1]=g[1]+h[1]*(i[1]-g[1]),b[2]=g[2]+h[2]*(i[2]-g[2]),b[3]=g[3]+h[3]*(i[3]-g[3]),b}function $(g,i,h){const d=h??new o(4);return d[0]=Math.max(g[0],i[0]),d[1]=Math.max(g[1],i[1]),d[2]=Math.max(g[2],i[2]),d[3]=Math.max(g[3],i[3]),d}function le(g,i,h){const d=h??new o(4);return d[0]=Math.min(g[0],i[0]),d[1]=Math.min(g[1],i[1]),d[2]=Math.min(g[2],i[2]),d[3]=Math.min(g[3],i[3]),d}function V(g,i,h){const d=h??new o(4);return d[0]=g[0]*i,d[1]=g[1]*i,d[2]=g[2]*i,d[3]=g[3]*i,d}const R=V;function z(g,i,h){const d=h??new o(4);return d[0]=g[0]/i,d[1]=g[1]/i,d[2]=g[2]/i,d[3]=g[3]/i,d}function ce(g,i){const h=i??new o(4);return h[0]=1/g[0],h[1]=1/g[1],h[2]=1/g[2],h[3]=1/g[3],h}const K=ce;function X(g,i){return g[0]*i[0]+g[1]*i[1]+g[2]*i[2]+g[3]*i[3]}function H(g){const i=g[0],h=g[1],d=g[2],b=g[3];return Math.sqrt(i*i+h*h+d*d+b*b)}const ne=H;function be(g){const i=g[0],h=g[1],d=g[2],b=g[3];return i*i+h*h+d*d+b*b}const Ue=be;function Ie(g,i){const h=g[0]-i[0],d=g[1]-i[1],b=g[2]-i[2],y=g[3]-i[3];return Math.sqrt(h*h+d*d+b*b+y*y)}const Ae=Ie;function fe(g,i){const h=g[0]-i[0],d=g[1]-i[1],b=g[2]-i[2],y=g[3]-i[3];return h*h+d*d+b*b+y*y}const ke=fe;function ye(g,i){const h=i??new o(4),d=g[0],b=g[1],y=g[2],S=g[3],E=Math.sqrt(d*d+b*b+y*y+S*S);return E>1e-5?(h[0]=d/E,h[1]=b/E,h[2]=y/E,h[3]=S/E):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function J(g,i){const h=i??new o(4);return h[0]=-g[0],h[1]=-g[1],h[2]=-g[2],h[3]=-g[3],h}function ee(g,i){const h=i??new o(4);return h[0]=g[0],h[1]=g[1],h[2]=g[2],h[3]=g[3],h}const Te=ee;function Me(g,i,h){const d=h??new o(4);return d[0]=g[0]*i[0],d[1]=g[1]*i[1],d[2]=g[2]*i[2],d[3]=g[3]*i[3],d}const Ve=Me;function De(g,i,h){const d=h??new o(4);return d[0]=g[0]/i[0],d[1]=g[1]/i[1],d[2]=g[2]/i[2],d[3]=g[3]/i[3],d}const Oe=De;function Pe(g){const i=g??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function _e(g,i,h){const d=h??new o(4),b=g[0],y=g[1],S=g[2],E=g[3];return d[0]=i[0]*b+i[4]*y+i[8]*S+i[12]*E,d[1]=i[1]*b+i[5]*y+i[9]*S+i[13]*E,d[2]=i[2]*b+i[6]*y+i[10]*S+i[14]*E,d[3]=i[3]*b+i[7]*y+i[11]*S+i[15]*E,d}function We(g,i,h){const d=h??new o(4);return ye(g,d),V(d,i,d)}function B(g,i,h){const d=h??new o(4);return H(g)>i?We(g,i,d):ee(g,d)}function j(g,i,h){const d=h??new o(4);return F(g,i,.5,d)}return{create:l,fromValues:f,set:k,ceil:x,floor:C,round:M,clamp:G,add:A,addScaled:L,subtract:U,sub:N,equalsApproximately:Y,equals:Q,lerp:F,lerpV:O,max:$,min:le,mulScalar:V,scale:R,divScalar:z,inverse:ce,invert:K,dot:X,length:H,len:ne,lengthSq:be,lenSq:Ue,distance:Ie,dist:Ae,distanceSq:fe,distSq:ke,normalize:ye,negate:J,copy:ee,clone:Te,multiply:Me,mul:Ve,divide:De,div:Oe,zero:Pe,transformMat4:_e,setLength:We,truncate:B,midpoint:j}}const Lr=new Map;function Ml(o){let l=Lr.get(o);return l||(l=Cl(o),Lr.set(o,l)),l}function fs(o,l,f,k,x,C){return{mat3:yl(o),mat4:Sl(l),quat:kl(f),vec2:jr(k),vec3:Ln(x),vec4:Ml(C)}}const{mat3:ht,mat4:je,quat:st,vec2:zr,vec3:I,vec4:zc}=fs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);fs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);fs(vl,Array,Array,Array,Array,Array);const Ur=document.querySelector("#log");let lt=null,Wt=null;function Kr(){if(lt)return lt;lt=document.createElement("div"),lt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",lt.appendChild(o),Wt=document.createElement("div"),Wt.className="ply-spinner-label",lt.appendChild(Wt),lt.style.display="none",document.body.appendChild(lt),lt}function _s(o){Kr(),Wt&&o&&(Wt.textContent=o),lt&&(lt.style.opacity="1",lt.style.display="flex")}function qt(o){Kr(),Wt&&(Wt.textContent=o)}function gn(){if(!lt)return;const o=lt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Hr(o,l){if(!Ur)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),Ur.appendChild(f)}async function it(o){console.log(o),Hr(o)}async function Bl(o){console.error(o),Hr(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Yr;function Zr(){Yr=performance.now()}function Gr(o){const l=performance.now()-Yr;it(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Tl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function tn(o){return o+3&-4}const Dl=2,Al=3,wn=5,$t=6,xn=7;function Rl(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const k=new DataView(o),x=4,C=k.getUint32(x+0,!0),M=k.getUint32(x+4,!0),G=k.getUint32(x+8,!0),A=k.getUint32(x+12,!0),L=k.getUint32(x+16,!0),U=k.getFloat32(x+20,!0),N=k.getUint32(x+24,!0),Y=k.getUint32(x+28,!0),Q=k.getFloat32(x+32,!0),F=k.getFloat32(x+36,!0),O=k.getFloat32(x+40,!0),$=k.getUint32(x+44,!0),le=k.getFloat32(x+48,!0),V=k.getFloat32(x+52,!0),R=k.getUint32(x+56,!0),z=k.getUint32(x+60,!0),ce=z>0?z:1;if(Y!==Dl&&Y!==Al&&Y!==wn&&Y!==$t&&Y!==xn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Y}`);if(Y!==wn&&Y!==$t&&(C%4!==0||$%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${$}`);let K=x+64;const X=(R+1)*4,H=new Uint32Array(o.slice(K,K+X));K+=X;let ne;if(ce>1){const J=(ce+1)*4;if(K+J>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${J} from ${K})`);ne=new Uint32Array(o.slice(K,K+J)),K+=J}else ne=new Uint32Array([0,C]);let be=0;for(let J=0;J<ce;J++){const ee=ne[J+1]-ne[J];ee>be&&(be=ee)}const Ue=L*4*4;if(K+Ue>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ue} more bytes from offset ${K}, have ${o.byteLength-K}`);const Ie=new Float32Array(o.slice(K,K+Ue));K+=Ue;const Ae=new Float32Array(L*5);for(let J=0;J<L;J++){const ee=Ie[J*4+0],Te=Ie[J*4+1],Me=Ie[J*4+2],Ve=Ie[J*4+3];let De=0;for(let B=1;B<=R&&H[B]<=Te;B++)De=B;let Oe=0;for(let B=1;B<=ce&&ne[B]<=ee;B++)Oe=B;const Pe=Te-H[De],_e=ee-ne[Oe],We=Oe*R+De;Ae[J*5+0]=_e,Ae[J*5+1]=Pe,Ae[J*5+2]=Me,Ae[J*5+3]=Ve,Ae[J*5+4]=We}if(Y===wn||Y===$t){if(K+24>o.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const J=l.decode(new Uint8Array(o,K,4));if(J!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${J}'`);const ee=k.getUint32(K+4,!0),Te=k.getUint32(K+8,!0),Me=k.getUint32(K+12,!0),Ve=k.getUint32(K+16,!0),De=k.getUint32(K+20,!0);if(ee!==1)throw new Error(`NAT2 RVQP unsupported version ${ee}`);if(Ve!==L)throw new Error(`NAT2 RVQP num_rects ${Ve} != header num_rects ${L}`);if(K+=24,K+16>o.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const Oe=new Float32Array(o.slice(K,K+8)),Pe=new Float32Array(o.slice(K+8,K+16));K+=16;const _e=Te*Me,We=2*Te*Me,B=Y===$t?(_e>>2)*(We>>2)*16:_e*We*4;if(K+B>o.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${o.byteLength-K})`);const j=new Uint8Array(o.slice(K,K+B));K+=B;const g=De*4;if(K+g>o.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${o.byteLength-K})`);const i=new Uint32Array(o.slice(K,K+g));K+=g;const h=(L+1)*4;if(K+h>o.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${o.byteLength-K})`);const d=new Uint32Array(o.slice(K,K+h));return K+=h,{width:C,height:M,channels:G,kernel_type:A,num_rects:L,uv_extent:U,sb_number:N,format:Y,sh_bias:Q,res_bias:F,compact_mult:O,layer_h:$,atlas_scale:le,atlas_offset:V,n_layers:R,n_cols:ce,layer_cuts:H,column_cuts:ne,slice_width:be,rects_expanded:Ae,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:Te,B:Me,N_used:De,pair_scale:Oe,pair_offset:Pe,codebook_image:j,packed_indices:i,surfel_offsets:d}}}let fe;const ye=C/4*16;if(Y===xn){if(K+24>o.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const J=l.decode(new Uint8Array(o,K,4));if(J!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${J}'`);const ee=k.getUint32(K+4,!0),Te=k.getUint32(K+8,!0),Me=k.getUint32(K+12,!0),Ve=k.getUint32(K+16,!0),De=k.getUint32(K+20,!0);if(ee!==1)throw new Error(`NAT2 BCCB unsupported version ${ee}`);if(Me!==M/4||Ve!==C/4||De!==Me*Ve)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${M}, sub-header ${Ve}×${Me} (${De} blocks)`);K+=24;const Oe=Te*16;if(K+Oe>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Oe}, have ${o.byteLength-K})`);const Pe=new Uint8Array(o,K,Oe);K+=Oe;const _e=De*2;if(K+_e>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${_e}, have ${o.byteLength-K})`);const We=new Uint16Array(o.slice(K,K+_e));K+=_e;const B=new Uint8Array(De*16);for(let j=0;j<De;j++){const g=We[j]*16;B.set(Pe.subarray(g,g+16),j*16)}fe=B}else{let J=0;for(let ee=0;ee<R;ee++){const Te=H[ee+1]-H[ee];if(Te%4!==0)throw new Error(`NAT2 BC7 layer ${ee} rows ${Te} not 4-aligned`);J+=Te/4*ye}if(K+J>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${J} more bytes from offset ${K}, have ${o.byteLength-K}`);fe=new Uint8Array(o.slice(K,K+J))}return{width:C,height:M,channels:G,kernel_type:A,num_rects:L,uv_extent:U,sb_number:N,format:Y,sh_bias:Q,res_bias:F,compact_mult:O,layer_h:$,atlas_scale:le,atlas_offset:V,n_layers:R,n_cols:ce,layer_cuts:H,column_cuts:ne,slice_width:be,rects_expanded:Ae,atlas_bytes:fe}}const Il=32;function Ll(o){const l=o.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),k=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:f,sampler:k}}function zl(o){const l=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d"}),k=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),x=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),C=x.createView({dimension:"2d"}),M=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:f,cbSamp:k,packedTex:x,packedView:C,offsetsBuf:M}}function Ul(o,l,f){const k=l.format===wn||l.format===$t,x=l.format===$t;let C,M,G,A;if(k){const V=Ll(o);C=V.tex,M=V.view,G=V.sampler,A="RVQ-paired atlas"}else if(l.format===2||l.format===xn){if(!o.features.has("texture-compression-bc"))return it(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;A=l.format===xn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:C,view:M,sampler:G}=Vr(o,l,"bc7-rgba-unorm",A)}else if(l.format===3){if(!o.features.has("texture-compression-astc"))return it("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;A="ASTC 4x4 atlas",{texture:C,view:M,sampler:G}=Vr(o,l,"astc-4x4-unorm",A)}else return it(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:L}=l,U=o.createBuffer({label:"atlas rects (5-stride)",size:tn(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(U,0,L);let N,Y,Q,F,O,$;if(k){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const V=l.rvq_paired,R=V.K_orig*V.B,z=2*V.K_orig*V.B;if(R>o.limits.maxTextureDimension2D||z>o.limits.maxTextureDimension2D)return it(`⚠️  RVQ codebook ${R}x${z} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;let ce,K;if(x){if(!o.features.has("texture-compression-bc"))return it("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ce="bc7-rgba-unorm",K=(R>>2)*16}else ce="rgba8unorm",K=R*4;const X=o.createTexture({label:x?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:R,height:z,depthOrArrayLayers:1},format:ce,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});o.queue.writeTexture({texture:X},V.codebook_image,{offset:0,bytesPerRow:K,rowsPerImage:z},{width:R,height:z,depthOrArrayLayers:1}),N=X,Y=X.createView({dimension:"2d"}),Q=o.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const H=8192,ne=V.N_used,be=Math.ceil(ne/H);if(be>o.limits.maxTextureDimension2D||H>o.limits.maxTextureDimension2D)return it(`⚠️  RVQ packed_indices texture ${H}x${be} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;F=o.createTexture({label:"rvq packed_indices (r32uint)",size:{width:H,height:be,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Ue=H*be;let Ie;if(Ue===ne)Ie=new Uint8Array(V.packed_indices.buffer,V.packed_indices.byteOffset,V.packed_indices.byteLength);else{const Ae=new Uint32Array(Ue);Ae.set(V.packed_indices),Ie=new Uint8Array(Ae.buffer)}o.queue.writeTexture({texture:F},Ie,{offset:0,bytesPerRow:H*4,rowsPerImage:be},{width:H,height:be,depthOrArrayLayers:1}),O=F.createView({dimension:"2d"}),$=o.createBuffer({label:"rvq surfel_offsets",size:tn(V.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer($,0,V.surfel_offsets),it(`🪡 RVQ-paired atlas wired: codebook ${R}x${z} (${(V.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${ne.toLocaleString()} packed indices as r32uint ${H}x${be} (${(V.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${V.surfel_offsets.length} surfel_offsets`)}else{const V=zl(o);N=V.cbTex,Y=V.cbView,Q=V.cbSamp,F=V.packedTex,O=V.packedView,$=V.offsetsBuf}const le=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Xr(o,le,l,f),{texture:C,view:M,sampler:G,rectsBuffer:U,texParamsBuffer:le,meta:l,rvqCodebookTexture:N,rvqCodebookView:Y,rvqCodebookSampler:Q,rvqPackedIndicesTexture:F,rvqPackedIndicesView:O,rvqSurfelOffsetsBuffer:$}}function Vr(o,l,f,k){const{width:x,layer_h:C,n_layers:M,n_cols:G,layer_cuts:A,column_cuts:L,slice_width:U,atlas_bytes:N}=l,Q=x/4*16,F=o.limits.maxTextureDimension2D;if(C>F||U>F)throw new Error(`⚠️  atlas slice dims ${U}x${C} exceed maxTextureDimension2D=${F}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const O=G*M;if(O>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${G} cols × ${M} layers = ${O} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const $=o.createTexture({label:k,size:{width:U,height:C,depthOrArrayLayers:O},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let R=0;R<G;R++){const z=L[R]/4,ce=(L[R+1]-L[R])/4;for(let K=0;K<M;K++){const X=A[K]/4,H=(A[K+1]-A[K])/4,ne=R*M+K,be=X*Q+z*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:ne},aspect:"all"},N,{offset:be,bytesPerRow:Q,rowsPerImage:H},{width:ce*4,height:H*4,depthOrArrayLayers:1})}}const le=$.createView({label:`${k} view`,dimension:"2d-array"}),V=o.createSampler({label:`${k} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:$,view:le,sampler:V}}function Xr(o,l,f,k){const x=new ArrayBuffer(48),C=new Uint32Array(x),M=new Float32Array(x),G=f.slice_width||f.width;C[0]=k?G:0,C[1]=f.layer_h;let A=f.format;A===$t&&(A=wn),A===xn&&(A=2),C[2]=A,M[3]=f.atlas_scale,M[4]=f.atlas_offset,M[5]=f.uv_extent,M[6]=f.res_bias,f.rvq_paired?(C[7]=f.rvq_paired.B,M[8]=f.rvq_paired.pair_scale[0],M[9]=f.rvq_paired.pair_scale[1],M[10]=f.rvq_paired.pair_offset[0],M[11]=f.rvq_paired.pair_offset[1]):(C[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),o.queue.writeBuffer(l,0,x)}async function cs(o,l){it(`loading ply file from File... : ${o.name}`),_s("downloading PLY...");const f=await o.arrayBuffer();try{return await Qr(f,l)}finally{gn()}}async function Gl(o,l){it(`loading ply file from URL... : ${o}`),_s("downloading PLY...");try{Zr();const f=new URL(o,self.location.href).href;return await Qr({url:f},l)}finally{gn()}}async function Qr(o,l){return new Promise((f,k)=>{const x=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});x.onmessage=C=>{var G,A,L,U,N,Y,Q,F,O,$,le,V;const M=C.data;if((M==null?void 0:M.type)==="error"){Bl(`PLY worker error: ${M.message??"unknown error"}`),x.terminate(),k(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const R=M.totalBytes,z=M.loadedBytes/(1024*1024),ce=R?R/(1024*1024):void 0,K=(M.speedBps??0)/(1024*1024),X=R?Math.min(99,Math.floor(M.loadedBytes/R*100)):void 0,H=ce?`total ${ce.toFixed(1)} MB`:"total -- MB",ne=ce&&X!==void 0?`${z.toFixed(1)} MB downloaded (${X}%)`:`${z.toFixed(1)} MB downloaded`,be=`${K.toFixed(2)} MB/s`;qt(`downloading PLY ...
${H}, ${ne}
${be}`);return}else if((M==null?void 0:M.type)==="fetched"){it(`💾 Fetched (${M.byteLength} bytes)`),Gr("Download"),qt("parsing PLY..."),Zr();return}else if((M==null?void 0:M.type)==="parse_progress"){const R=M.total??0,z=M.read??0,ce=R>0?Math.floor(z/R*100):0;qt(`parsing PLY ...
${z}/${R} surfels (${ce}%)`);return}else if((M==null?void 0:M.type)==="done"){const R=M.num_points,z=M.K,ce=M.feature_mode??0,K=M.sh_bias,X=M.kernel_type,H=M.surfelBuffer,ne=M.svParamsBuffer;it(`🪐 Total surfels: ${R}, mode=${ce===1?"SB":"SV"}, K=${z}, sh_bias=${K}, kernel_type=${X}`);const Ue=l.createBuffer({label:"surfel input buffer",size:tn(R*Il),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ue,0,H);const Ie=ne.byteLength>0?ne.byteLength:16,Ae=l.createBuffer({label:ce===1?"color_params buffer (SB)":"color_params buffer (SV)",size:tn(Ie),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ne.byteLength>0&&l.queue.writeBuffer(Ae,0,ne),x.terminate(),Gr("Parse"),f({num_points:R,K:z,feature_mode:ce,sh_bias:K,kernel_type:X,surfel_buffer:Ue,surfel_data:new Float32Array(H),sv_params_buffer:Ae,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(G=M.bbox)==null?void 0:G.min)==null?void 0:A[0])??-1)+(((U=(L=M.bbox)==null?void 0:L.max)==null?void 0:U[0])??1))/2,((((Y=(N=M.bbox)==null?void 0:N.min)==null?void 0:Y[1])??-1)+(((F=(Q=M.bbox)==null?void 0:Q.max)==null?void 0:F[1])??1))/2,(((($=(O=M.bbox)==null?void 0:O.min)==null?void 0:$[2])??-1)+(((V=(le=M.bbox)==null?void 0:le.max)==null?void 0:V[2])??1))/2]})}},x.onerror=C=>{x.terminate(),k(C)},o instanceof ArrayBuffer?(qt("parsing PLY..."),x.postMessage({type:"start",plyBuffer:o},[o])):x.postMessage({type:"start_url",url:o.url})})}var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},us={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,k){k(l)})(Vl,function(f){class k{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class x{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class M extends C{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class G extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends C{constructor(e,t){super(e),this.expanded=t}}class L extends C{constructor(e,t){super(e),this.index=t}}function U(n){return n}function N(n){return n==null}function Y(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Q(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const F={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class O{static alreadyDisposed(){return new O({type:"alreadydisposed"})}static notBindable(){return new O({type:"notbindable"})}static propertyNotFound(e){return new O({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new O({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=F[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class ${constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!$.isBindable(s))throw O.notBindable();if(!(e in s))throw O.propertyNotFound(e);s[e]=t}}class le extends x{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class V{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const R="tp";function z(n){return(t,s)=>[R,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ce(n,e){return t=>e(n(t))}function K(n){return n.rawValue}function X(n,e){n.emitter.on("change",ce(K,e)),e(n.rawValue)}function H(n,e,t){X(n.value(e),t)}function ne(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function be(n,e){return t=>{ne(n,e,t)}}function Ue(n,e){X(n,t=>{e.textContent=t??""})}const Ie=z("btn");class Ae{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ie()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ie("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ie("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class fe{constructor(e,t){this.emitter=new V,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ae(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ke{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new V,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class ye{constructor(e){this.emitter=new V,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function J(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ye(n):new ke(n,e)}class ee{constructor(e){this.emitter=new V,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:J(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new ee(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function Te(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const T=e[P],re=T(n[P]);return re.succeeded?Object.assign(Object.assign({},c),{[P]:re.value}):void 0},{});return s}function Me(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Ve(n){return n===null?!1:typeof n=="object"}function De(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Oe(n){return{custom:e=>De(e)(n),boolean:De(e=>typeof e=="boolean"?e:void 0)(n),number:De(e=>typeof e=="number"?e:void 0)(n),string:De(e=>typeof e=="string"?e:void 0)(n),function:De(e=>typeof e=="function"?e:void 0)(n),constant:e=>De(t=>t===e?e:void 0)(n),raw:De(e=>e)(n),object:e=>De(t=>{if(Ve(t))return Te(t,e)})(n),array:e=>De(t=>{if(Array.isArray(t))return Me(t,e)})(n)}}const Pe={optional:Oe(!0),required:Oe(!1)};function _e(n,e){const t=Pe.required.object(e)(n);return t.succeeded?t.value:void 0}function We(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class j{constructor(e){this.value_=e}static create(e){return[new j(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=z("");function i(n,e){return be(n,g(void 0,e))}class h extends ee{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=j.create(J(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new h(ee.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){X(this.globalDisabled_,i(e,"disabled")),H(this,"hidden",i(e,"hidden"))}bindDisabled(e){X(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){X(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=z(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class S{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){We({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const w={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=w[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function q(n){n.parentElement&&n.parentElement.removeChild(n)}function W(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ue(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function oe(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ie=z("lbl");function me(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Se{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ie()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ie("l")),H(t.props,"label",P=>{N(P)?this.element.classList.add(ie(void 0,"nol")):(this.element.classList.remove(ie(void 0,"nol")),ue(s),s.appendChild(me(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(ie("v")),this.element.appendChild(c),this.valueElement=c}}class de extends S{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Se(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ge={id:"button",type:"blade",accept(n){const e=Pe,t=_e(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new de(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:new fe(n.document,{props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof fe)?null:new le(n.controller)}};class Ce extends S{constructor(e){super(e),this.value=e.value}}function Re(){return new ee({positions:J([],{equals:Y})})}class Z extends ee{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=ee.createCore(t);return new Z(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!N(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};H(this,"expanded",s),H(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ae(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function se(n,e){e.style.height=n.styleHeight}function pe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),N(n.get("expandedHeight"))){const t=ae(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{se(n,e)}),se(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class we extends x{constructor(e,t){super(e),this.rackApi_=t}}function xe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function he(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ve(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Ge(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class ze{constructor(e){this.emitter=new V,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw O.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Ne extends x{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new V,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Ke extends de{constructor(e,t){super(e,t),this.binding=t.binding}}class Xe extends x{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new V,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new G(this,t,this.controller_.binding.target.presetKey)})}}class He extends de{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function tt(n){return n instanceof ft?n.apiSet_:n instanceof we?n.rackApi_.apiSet_:null}function Qe(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw O.shouldNeverHappen();return t}function bt(n,e,t){if(!$.isBindable(n))throw O.notBindable();return new $(n,e,t)}class ft extends x{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new V,this.apiSet_=new ze(tt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>Qe(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createInput(P,bt(e,t,c.presetKey),c),re=new Ne(T);return this.add(re,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createMonitor(P,bt(e,t),c),re=new Xe(T);return this.add(re,c.index)}addFolder(e){return he(this,e)}addButton(e){return xe(this,e)}addSeparator(e){return ve(this,e)}addTab(e){return Ge(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Qe(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Ke){const s=Qe(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ce){const s=Qe(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof He))throw O.shouldNeverHappen();const t=Qe(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new G(t,s.target.read(),s.target.presetKey)})}}class _t extends we{constructor(e,t){super(e,new ft(e.rackController,t)),this.emitter_=new V,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class mt extends S{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class vt{constructor(e,t){const s=z(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Je(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function ut(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof He&&s.binding===e)return s}return null}function gt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ce&&s.value===e)return s}return null}function ot(n){return n instanceof Ye?n.rack:n instanceof mt?n.rackController.rack:null}function wt(n){const e=ot(n);return e?e.bcSet_:null}class xt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new V,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new ze(wt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),Q(e,"parent")?e.parent=this:(e.parent_=this,We({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){Q(e,"parent")?e.parent=null:(e.parent_=null,We({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Ke)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ce)s.value.emitter.on("change",this.onChildValueChange_);else{const c=ot(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Ke)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ce)s.value.emitter.off("change",this.onChildValueChange_);else{const c=ot(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Je(this.find(Ke),e.sender);if(!t)throw O.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=ut(this.find(He),e.sender);if(!t)throw O.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=gt(this.find(Ce),e.sender);if(!t)throw O.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ye extends S{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new vt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new xt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&q(e.bladeController.view.element)}}const jt=z("cnt");class li{constructor(e,t){var s;this.className_=z((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),jt()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),H(this.foldable_,"completed",be(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),H(t.props,"title",Be=>{N(Be)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const T=e.createElement("div");T.classList.add(this.className_("t")),Ue(t.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T;const re=e.createElement("div");re.classList.add(this.className_("m")),this.buttonElement.appendChild(re);const Ee=t.containerElement;Ee.classList.add(this.className_("c")),this.element.appendChild(Ee),this.containerElement=Ee}}class Un extends mt{constructor(e,t){var s;const c=Z.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new Ye(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new li(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,pe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ci={id:"folder",type:"blade",accept(n){const e=Pe,t=_e(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Un(n.document,{blade:n.blade,expanded:n.params.expanded,props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Un?new _t(n.controller,n.pool):null}};class Kt extends Ce{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Se(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class bs extends x{}const vs=z("spr");class ui{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(vs("r")),this.element.appendChild(s)}}class gs extends S{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new ui(e,{viewProps:t.viewProps})}))}}const di={id:"separator",type:"blade",accept(n){const t=_e(n,{view:Pe.required.constant("separator")});return t?{params:t}:null},controller(n){return new gs(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof gs?new bs(n.controller):null}},nn=z("tbi");class pi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),H(t.props,"selected",P=>{P?this.element.classList.add(nn(void 0,"sel")):this.element.classList.remove(nn(void 0,"sel"))});const s=e.createElement("button");s.classList.add(nn("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(nn("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class hi{constructor(e,t){this.emitter=new V,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new pi(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ws{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new hi(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ye(e,{blade:Re(),viewProps:h.create()}),this.props=t.props,H(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class xs{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class ys extends we{constructor(e,t){super(e,new ft(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new V,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw O.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ws(t,{itemProps:ee.fromObject({selected:!1,title:e.title}),props:ee.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw O.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw O.shouldNeverHappen();const s=new xs(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw O.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new L(this,e.rawValue)})}}const Ps=-1;class fi{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=J(!0),this.selectedIndex=J(Ps),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ps,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const sn=z("tab");class _i{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn(),jt()),t.viewProps.bindClassModifiers(this.element),X(t.empty,be(this.element,sn(void 0,"nop")));const s=e.createElement("div");s.classList.add(sn("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(sn("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(sn("c")),this.element.appendChild(P),this.contentsElement=P}}class Ss extends mt{constructor(e,t){const s=new Ye(e,{blade:t.blade,viewProps:t.viewProps}),c=new fi;super({blade:t.blade,rackController:s,view:new _i(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ze(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;q(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Es={id:"tab",type:"blade",accept(n){const e=Pe,t=_e(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Ss(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ws(n.document,{itemProps:ee.fromObject({selected:!1,title:t.title}),props:ee.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Ss?new ys(n.controller,n.pool):null}};function mi(n,e){const t=n.accept(e.params);if(!t)return null;const s=Pe.optional.boolean(e.params.disabled).value,c=Pe.optional.boolean(e.params.hidden).value;return n.controller({blade:Re(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class bi{constructor(){this.disabled=!1,this.emitter=new V}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class vi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new V,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class gi{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new V,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function ks(n,e){for(;n.length<e;)n.push(void 0)}function wi(n){const e=[];return ks(e,n),J(e)}function xi(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function yi(n,e){const t=[...xi(n),e];return t.length>n.length?t.splice(0,t.length-n.length):ks(t,n.length),t}class Pi{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new V,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=yi(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class rn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function yt(n,e){if(n instanceof e)return n;if(n instanceof rn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Ht{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class on{constructor(e){this.values=ee.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Cs{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return N(s)||(c=Math.max(c,s)),N(t)||(c=Math.min(c,t)),c}}class yn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Gn=z("lst");class Si{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Gn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Gn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Gn("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,H(this.props_,"options",P=>{W(this.selectElement),P.forEach(T=>{const re=e.createElement("option");re.textContent=T.text,this.selectElement.appendChild(re)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class an{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Si(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ms=z("pop");class Ei{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ms()),t.viewProps.bindClassModifiers(this.element),X(t.shows,be(this.element,Ms(void 0,"v")))}}class Bs{constructor(e,t){this.shows=J(!1),this.viewProps=t.viewProps,this.view=new Ei(e,{shows:this.shows,viewProps:this.viewProps})}}const Ts=z("txt");class ki{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ts("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Pn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new ki(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);N(c)||(this.value.rawValue=c),this.view.refresh()}}function Ci(n){return String(n)}function Ds(n){return n==="false"?!1:!!n}function As(n){return Ci(n)}class Mi{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Bi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ti{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Bi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Di={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ai{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Di[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Vn(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function ln(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ri(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function cn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ii(n,e){const t=cn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=cn(n,e);return c===""?"":s+c}function On(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ii(n,e);return s===""?"":t+s}function Rs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ri(n,e);return e+=s.length,s===""?"":s+cn(n,e)}function Li(n,e){const t=Rs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=cn(n,e);return e+=c.length,t+s+c+On(n,e)}function zi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=cn(n,e);return e+=s.length,s===""?"":t+s+On(n,e)}function Ui(n,e){const t=Rs(n,e);return e+=t.length,t===""?"":t+On(n,e)}const Gi=Vn([Li,zi,Ui]);function Vi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Vi(n,e);return s===""?"":t+s}function Fi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ni(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Fi(n,e);return s===""?"":t+s}function qi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=qi(n,e);return s===""?"":t+s}const Wi=Vn([Oi,Ni,$i]),ji=Vn([Wi,Gi]);function Ki(n,e){const t=ji(n,e);return e+=t.length,t===""?null:{evaluable:new Mi(t),cursor:e}}function Hi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Ls(n,e);if(!s)return null;e=s.cursor,e+=ln(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Yi(n,e){var t;return(t=Ki(n,e))!==null&&t!==void 0?t:Hi(n,e)}function Is(n,e){const t=Yi(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Is(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ai(s,c.evaluable)}):null}function Zi(n,e,t){t+=ln(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=ln(e,t).length,{cursor:t,operator:s}):null}function Xi(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const T=Zi(e,t,s);if(!T)break;s=T.cursor;const re=n(t,s);if(!re)return null;s=re.cursor,P=new Ti(T.operator,P,re.evaluable)}return P?{cursor:s,evaluable:P}:null}}const Qi=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Xi(n,e),Is);function Ls(n,e){return e+=ln(n,e).length,Qi(n,e)}function Ji(n){const e=Ls(n,0);return!e||e.cursor+ln(n,e.cursor).length!==n.length?null:e.evaluable}function Pt(n){var e;const t=Ji(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function zs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Pt(n);if(!N(e))return e}return 0}function eo(n){return String(n)}function nt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const to=nt(0);function Sn(n){return to(n)+"%"}function Us(n){return String(n)}function Fn(n){return n}function un({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(T){c||(c=!0,T(),c=!1)}n.emitter.on("change",T=>{P(()=>{e.setRawValue(t(n,e),T.options)})}),e.emitter.on("change",T=>{P(()=>{n.setRawValue(s(n,e),T.options)}),P(()=>{e.setRawValue(t(n,e),T.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function at(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function dn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function St(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function no(n){return n==="ArrowUp"||n==="ArrowDown"}function Gs(n){return no(n)||n==="ArrowLeft"||n==="ArrowRight"}function Nn(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Lt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new V,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Nn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Nn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Nn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ze(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function Vs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function et(n,e,t){return Math.min(Math.max(n,e),t)}function Os(n,e){return(n%e+e)%e}const dt=z("txt");class so{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(dt(),dt(void 0,"num")),t.arrayPosition&&this.element.classList.add(dt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(dt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(dt()),this.inputElement.classList.add(dt("i"));const c=e.createElement("div");c.classList.add(dt("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(E,"svg");P.classList.add(dt("g")),this.knobElement.appendChild(P);const T=e.createElementNS(E,"path");T.classList.add(dt("gb")),P.appendChild(T),this.guideBodyElem_=T;const re=e.createElementNS(E,"path");re.classList.add(dt("gh")),P.appendChild(re),this.guideHeadElem_=re;const Ee=e.createElement("div");Ee.classList.add(z("tt")()),this.knobElement.appendChild(Ee),this.tooltipElem_=Ee,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(dt(void 0,"drg"));return}this.element.classList.add(dt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=et(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class pn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=J(null),this.view=new so(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Lt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let T=e;return c!==void 0&&(T=Math.max(T,c)),P!==void 0&&(T=Math.min(T,P)),T}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);N(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=at(this.baseStep_,dn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){at(this.baseStep_,dn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const qn=z("sld");class ro{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(qn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qn("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(qn("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=et(Ze(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class io{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new ro(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Lt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(et(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=at(this.baseStep_,St(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){at(this.baseStep_,St(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $n=z("sldtxt");class oo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add($n());const s=e.createElement("div");s.classList.add($n("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add($n("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Wn{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new io(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new pn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new oo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function hn(n,e){n.write(e)}function En(n){const e=Pe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Fs(n){if(n==="inline"||n==="popup")return n}function Ct(n){const e=Pe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Ns(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function jn(n){return N(n)?null:new on(Ns(n))}function ao(n){const e=n?yt(n,yn):null;return e?e.step:null}function kn(n,e){const t=n&&yt(n,yn);return t?Vs(t.step):Math.max(Vs(e),2)}function Yt(n){const e=ao(n);return e??1}function Zt(n,e){var t;const s=n&&yt(n,yn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Cn=z("ckb");class lo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Cn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Cn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Cn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Cn("w")),s.appendChild(P);const T=v(e,"check");P.appendChild(T),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class co{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new lo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function uo(n){const e=[],t=jn(n.options);return t&&e.push(t),new rn(e)}const po={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=_e(e,{options:Pe.optional.custom(En)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ds,constraint:n=>uo(n.params),writer:n=>hn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&yt(s,on);return c?new an(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new co(e,{value:t,viewProps:n.viewProps})}},zt=z("col");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(zt()),t.foldable.bindExpandedClass(this.element,zt(void 0,"expanded")),H(t.foldable,"completed",be(this.element,zt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(zt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(zt("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(zt("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(zt("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}function fo(n,e,t){const s=et(n/255,0,1),c=et(e/255,0,1),P=et(t/255,0,1),T=Math.max(s,c,P),re=Math.min(s,c,P),Ee=T-re;let Be=0,qe=0;const $e=(re+T)/2;return Ee!==0&&(qe=Ee/(1-Math.abs(T+re-1)),s===T?Be=(c-P)/Ee:c===T?Be=2+(P-s)/Ee:Be=4+(s-c)/Ee,Be=Be/6+(Be<0?1:0)),[Be*360,qe*100,$e*100]}function _o(n,e,t){const s=(n%360+360)%360,c=et(e/100,0,1),P=et(t/100,0,1),T=(1-Math.abs(2*P-1))*c,re=T*(1-Math.abs(s/60%2-1)),Ee=P-T/2;let Be,qe,$e;return s>=0&&s<60?[Be,qe,$e]=[T,re,0]:s>=60&&s<120?[Be,qe,$e]=[re,T,0]:s>=120&&s<180?[Be,qe,$e]=[0,T,re]:s>=180&&s<240?[Be,qe,$e]=[0,re,T]:s>=240&&s<300?[Be,qe,$e]=[re,0,T]:[Be,qe,$e]=[T,0,re],[(Be+Ee)*255,(qe+Ee)*255,($e+Ee)*255]}function mo(n,e,t){const s=et(n/255,0,1),c=et(e/255,0,1),P=et(t/255,0,1),T=Math.max(s,c,P),re=Math.min(s,c,P),Ee=T-re;let Be;Ee===0?Be=0:T===s?Be=60*(((c-P)/Ee%6+6)%6):T===c?Be=60*((P-s)/Ee+2):Be=60*((s-c)/Ee+4);const qe=T===0?0:Ee/T,$e=T;return[Be,qe*100,$e*100]}function qs(n,e,t){const s=Os(n,360),c=et(e/100,0,1),P=et(t/100,0,1),T=P*c,re=T*(1-Math.abs(s/60%2-1)),Ee=P-T;let Be,qe,$e;return s>=0&&s<60?[Be,qe,$e]=[T,re,0]:s>=60&&s<120?[Be,qe,$e]=[re,T,0]:s>=120&&s<180?[Be,qe,$e]=[0,T,re]:s>=180&&s<240?[Be,qe,$e]=[0,re,T]:s>=240&&s<300?[Be,qe,$e]=[re,0,T]:[Be,qe,$e]=[T,0,re],[(Be+Ee)*255,(qe+Ee)*255,($e+Ee)*255]}function bo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function vo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Ut(n){return[n[0],n[1],n[2]]}function $s(n,e){return[n[0],n[1],n[2],e]}const go={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:bo,rgb:_o},hsv:{hsl:vo,hsv:(n,e,t)=>[n,e,t],rgb:qs},rgb:{hsl:fo,hsv:mo,rgb:(n,e,t)=>[n,e,t]}};function Mn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function wo(n,e){return n===e?e:Os(n,e)}function xo(n,e,t){var s;const c=Mn(e,t);return[e==="rgb"?et(n[0],0,c[0]):wo(n[0],c[0]),et(n[1],0,c[1]),et(n[2],0,c[2]),et((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Ws(n,e,t,s){const c=Mn(e,t),P=Mn(e,s);return n.map((T,re)=>T/c[re]*P[re])}function yo(n,e,t){const s=Ws(n,e.mode,e.type,"int"),c=go[e.mode][t.mode](...s);return Ws(c,t.mode,"int",t.type)}function Bn(n,e){return typeof n!="object"||N(n)?!1:e in n&&typeof n[e]=="number"}class Fe{static black(e="int"){return new Fe([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Fe(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Bn(e,"r")&&Bn(e,"g")&&Bn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Bn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=xo(e,t,s)}getComponents(e,t="int"){return $s(yo(Ut(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Mt=z("colp");class Po{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Mt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Mt("hsv"));const c=e.createElement("div");c.classList.add(Mt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Mt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const T=e.createElement("div");if(T.classList.add(Mt("rgb")),this.textView_=t.textView,T.appendChild(this.textView_.element),this.element.appendChild(T),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const re=e.createElement("div");re.classList.add(Mt("a"));const Ee=e.createElement("div");Ee.classList.add(Mt("ap")),Ee.appendChild(this.alphaViews_.palette.element),re.appendChild(Ee);const Be=e.createElement("div");Be.classList.add(Mt("at")),Be.appendChild(this.alphaViews_.text.element),re.appendChild(Be),this.element.appendChild(re)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function So(n){return n==="int"?"int":n==="float"?"float":void 0}function Kn(n){const e=Pe;return _e(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(So)}),expanded:e.optional.boolean,picker:e.optional.custom(Fs)})}function Gt(n){return n?.1:1}function Vt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Eo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function pt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const ko={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function js(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return ko[s](t)}function Ks(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[pt(e[1],255),pt(e[2],255),pt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Hs(n){return e=>{const t=Ks(e);return t?new Fe(t,"rgb",n):null}}function Ys(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[pt(e[1],255),pt(e[2],255),pt(e[3],255),pt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Zs(n){return e=>{const t=Ys(e);return t?new Fe(t,"rgb",n):null}}function Xs(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[js(e[1]),pt(e[2],100),pt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Qs(n){return e=>{const t=Xs(e);return t?new Fe(t,"hsl",n):null}}function Js(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[js(e[1]),pt(e[2],100),pt(e[3],100),pt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function er(n){return e=>{const t=Js(e);return t?new Fe(t,"hsl",n):null}}function tr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Co(n){const e=tr(n);return e?new Fe(e,"rgb","int"):null}function nr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function Mo(n){const e=nr(n);return e?new Fe(e,"rgb","int"):null}function sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function rr(n){return e=>{const t=sr(e);return t?new Fe(t,"rgb",n):null}}function ir(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function or(n){return e=>{const t=ir(e);return t?new Fe(t,"rgb",n):null}}const Bo=[{parser:tr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:nr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ks,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ys,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Xs,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Js,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:sr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ir,result:{alpha:!0,mode:"rgb",notation:"object"}}];function To(n){return Bo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Hn(n,e="int"){const t=To(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const ar={int:[Co,Mo,Hs("int"),Zs("int"),Qs("int"),er("int"),rr("int"),or("int")],float:[Hs("float"),Zs("float"),Qs("float"),er("float"),rr("float"),or("float")]};function Do(n){const e=ar[n];return t=>{if(typeof t!="string")return Fe.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Fe.black(n)}}function Yn(n){const e=ar[n];return t=>e.reduce((s,c)=>s||c(t),null)}function lr(n){const e=et(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function cr(n,e="#"){const t=Ut(n.getComponents("rgb")).map(lr).join("");return`${e}${t}`}function Zn(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(lr).join("");return`${e}${s}`}function ur(n,e){const t=nt(e==="float"?2:0);return`rgb(${Ut(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Ao(n){return e=>ur(e,n)}function Tn(n,e){const t=nt(2),s=nt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,T)=>(T===3?t:s)(P)).join(", ")})`}function Ro(n){return e=>Tn(e,n)}function Io(n){const e=[nt(0),Sn,Sn];return`hsl(${Ut(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Lo(n){const e=[nt(0),Sn,Sn,nt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function dr(n,e){const t=nt(e==="float"?2:0),s=["r","g","b"];return`{${Ut(n.getComponents("rgb",e)).map((P,T)=>`${s[T]}: ${t(P)}`).join(", ")}}`}function zo(n){return e=>dr(e,n)}function pr(n,e){const t=nt(2),s=nt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((T,re)=>{const Ee=re===3?t:s;return`${c[re]}: ${Ee(T)}`}).join(", ")}}`}function Uo(n){return e=>pr(e,n)}const Go=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:cr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Zn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Io},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Lo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Ao(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Ro(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:zo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Uo(e)}],[])];function Xn(n){return Go.reduce((e,t)=>e||(Eo(t.format,n)?t.stringifier:null),null)}const fn=z("apl");class Vo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(fn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(fn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(fn("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(fn("m")),this.element.appendChild(P),this.markerElem_=P;const T=e.createElement("div");T.classList.add(fn("p")),this.markerElem_.appendChild(T),this.previewElem_=T,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Fe([t[0],t[1],t[2],0],"rgb"),c=new Fe([t[0],t[1],t[2],255],"rgb"),P=["to right",Tn(s),Tn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Tn(e);const T=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${T}%`}onValueChange_(){this.update_()}}class Oo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Vo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Lt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,T,re]=c.getComponents("hsv");this.value.setRawValue(new Fe([P,T,re,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=at(Gt(!0),St(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,re]=s.getComponents("hsv");this.value.setRawValue(new Fe([c,P,T,re+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){at(Gt(!0),St(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Xt=z("coltxt");function Fo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class No{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Xt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Xt("m")),this.modeElem_=Fo(e),this.modeElem_.classList.add(Xt("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(Xt("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(Xt("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),X(t.colorMode,T=>{this.modeElem_.value=T})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){W(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Xt("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function qo(n){return nt(n==="float"?2:0)}function $o(n,e,t){const s=Mn(n,e)[t];return new Ht({min:0,max:s})}function Qn(n,e,t){return new pn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Gt(!1),parser:e.parser,props:ee.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:qo(e.colorType)}),value:J(0,{constraint:$o(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Wo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=J(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new No(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Qn(e,t,0),Qn(e,t,1),Qn(e,t,2)];return s.forEach((c,P)=>{un({primary:this.value,secondary:c.value,forward:T=>T.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(T,re)=>{const Ee=this.colorMode.rawValue,Be=T.rawValue.getComponents(Ee,this.colorType_);return Be[P]=re.rawValue,new Fe($s(Ut(Be),Be[3]),Ee,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Jn=z("hpl");class jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Jn("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Jn("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=ur(new Fe([t,100,100],"hsv"));const s=Ze(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Ko{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Lt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(et(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,T,re]=c.getComponents("hsv");this.value.setRawValue(new Fe([s,P,T,re],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=at(Gt(!1),St(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,re]=s.getComponents("hsv");this.value.setRawValue(new Fe([c+t,P,T,re],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){at(Gt(!1),St(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const es=z("svp"),hr=64;class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(es()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=hr,s.width=hr,s.classList.add(es("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(es("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,T=e.getImageData(0,0,c,P),re=T.data;for(let qe=0;qe<P;qe++)for(let $e=0;$e<c;$e++){const Ot=Ze($e,0,c,0,100),mn=Ze(qe,0,P,100,0),bn=qs(s[0],Ot,mn),Dn=(qe*c+$e)*4;re[Dn]=bn[0],re[Dn+1]=bn[1],re[Dn+2]=bn[2],re[Dn+3]=255}e.putImageData(T,0,0);const Ee=Ze(s[1],0,100,0,100);this.markerElem_.style.left=`${Ee}%`;const Be=Ze(s[2],0,100,100,0);this.markerElem_.style.top=`${Be}%`}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Lt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(e.point.x,0,e.bounds.width,0,100),c=Ze(e.point.y,0,e.bounds.height,100,0),[P,,,T]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Fe([P,s,c,T],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Gs(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),T=Gt(!1),re=at(T,St(e)),Ee=at(T,dn(e));re===0&&Ee===0||this.value.setRawValue(new Fe([t,s+re,c+Ee,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Gt(!1),s=at(t,St(e)),c=at(t,dn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Zo{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Ko(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Oo(e,{value:this.value,viewProps:this.viewProps}),text:new pn(e,{parser:Pt,baseStep:.1,props:ee.fromObject({draggingScale:.01,formatter:nt(2)}),value:J(0,{constraint:new Ht({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&un({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Fe(P,s.rawValue.mode)}}),this.textC_=new Wo(e,{colorType:t.colorType,parser:Pt,value:this.value,viewProps:this.viewProps}),this.view=new Po(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ts=z("colsw");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ts()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ts("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ts("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Zn(e)}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps})}}class ns{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Z.create(t.expanded),this.swatchC_=new Qo(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Pn(e,{parser:t.parser,props:ee.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new ho(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Bs(e,{viewProps:this.viewProps}):null;const c=new Zo(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),un({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,T)=>T.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),pe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=oe(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Jo(n,e){return Fe.isColorObject(n)?Fe.fromObject(n,e):Fe.black(e)}function ea(n){return Ut(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ta(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function na(n){return new Fe([n>>16&255,n>>8&255,n&255],"rgb")}function sa(n){return new Fe([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function ra(n){return typeof n!="number"?Fe.black():na(n)}function ia(n){return typeof n!="number"?Fe.black():sa(n)}function oa(n){const e=Xn(n);return e?(t,s)=>{hn(t,e(s))}:null}function aa(n){const e=n?ta:ea;return(t,s)=>{hn(t,e(s))}}function la(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ca(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ua(n,e){return(t,s)=>{n?la(t,s,e):ca(t,s,e)}}function ss(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function da(n){return n?e=>Zn(e,"0x"):e=>cr(e,"0x")}function pa(n){return"color"in n||"view"in n&&n.view==="color"}const ha={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!pa(e))return null;const t=Kn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ss(n.params)?ia:ra,equals:Fe.equals,writer:n=>aa(ss(n.params))},controller:n=>{const e=ss(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:"int",expanded:t??!1,formatter:da(e),parser:Yn("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function fa(n){return Fe.isRgbaColorObject(n)}function _a(n){return e=>Jo(e,n)}function ma(n,e){return t=>n?pr(t,e):dr(t,e)}const ba={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Fe.isColorObject(n))return null;const t=Kn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>_a(Vt(n.params)),equals:Fe.equals,writer:n=>ua(fa(n.initialValue),Vt(n.params))},controller:n=>{var e;const t=Fe.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=Vt(n.params))!==null&&e!==void 0?e:"int";return new ns(n.document,{colorType:P,expanded:s??!1,formatter:ma(t,P),parser:Yn(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},va={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Hn(n,Vt(e));if(!t||!Xn(t))return null;const c=Kn(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Do((e=Vt(n.params))!==null&&e!==void 0?e:"int")},equals:Fe.equals,writer:n=>{const e=Hn(n.initialValue,Vt(n.params));if(!e)throw O.shouldNeverHappen();const t=oa(e);if(!t)throw O.notBindable();return t}},controller:n=>{const e=Hn(n.initialValue,Vt(n.params));if(!e)throw O.shouldNeverHappen();const t=Xn(e);if(!t)throw O.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Yn(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Bt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,T;return(T=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&T!==void 0?T:s});return this.asm_.fromComponents(t)}}const fr=z("pndtxt");class ga{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(fr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(fr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function wa(n,e,t){return new pn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:J(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class rs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>wa(e,t,c)),this.acs_.forEach((s,c)=>{un({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,T)=>{const re=t.assembly.toComponents(P.rawValue);return re[c]=T.rawValue,t.assembly.fromComponents(re)}})}),this.view=new ga(e,{textViews:this.acs_.map(s=>s.view)})}}function _r(n,e){return"step"in n&&!N(n.step)?new yn(n.step,e):null}function mr(n){return!N(n.max)&&!N(n.min)?new Ht({max:n.max,min:n.min}):!N(n.max)||!N(n.min)?new Cs({max:n.max,min:n.min}):null}function xa(n){const e=yt(n,Ht);if(e)return[e.values.get("min"),e.values.get("max")];const t=yt(n,Cs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function ya(n,e){const t=[],s=_r(n,e);s&&t.push(s);const c=mr(n);c&&t.push(c);const P=jn(n.options);return P&&t.push(P),new rn(t)}const Pa={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,s=_e(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(En),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>zs,constraint:n=>ya(n.params,n.initialValue),writer:n=>hn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&yt(s,on);if(c)return new an(n.document,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:nt(kn(s,t.rawValue)),T=s&&yt(s,Ht);return T?new Wn(n.document,{baseStep:Yt(s),parser:Pt,sliderProps:new ee({maxValue:T.values.value("max"),minValue:T.values.value("min")}),textProps:ee.fromObject({draggingScale:Zt(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new pn(n.document,{baseStep:Yt(s),parser:Pt,props:ee.fromObject({draggingScale:Zt(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Tt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const br={toComponents:n=>n.getComponents(),fromComponents:n=>new Tt(...n)},Qt=z("p2d");class Sa{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element),X(t.expanded,be(this.element,Qt(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Qt("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(Qt("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(Qt("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(Qt("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}const Dt=z("p2dp");class Ea{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Dt()),t.layout==="popup"&&this.element.classList.add(Dt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Dt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(Dt("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(E,"line");P.classList.add(Dt("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const T=e.createElementNS(E,"line");T.classList.add(Dt("ax")),T.setAttributeNS(null,"x1","50%"),T.setAttributeNS(null,"y1","0"),T.setAttributeNS(null,"x2","50%"),T.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(T);const re=e.createElementNS(E,"line");re.classList.add(Dt("l")),re.setAttributeNS(null,"x1","50%"),re.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(re),this.lineElem_=re;const Ee=e.createElement("div");Ee.classList.add(Dt("m")),this.padElement.appendChild(Ee),this.markerElem_=Ee,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ze(e,-s,+s,0,100),P=Ze(t,-s,+s,0,100),T=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${T}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${T}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function vr(n,e,t){return[at(e[0],St(n)),at(e[1],dn(n))*(t?1:-1)]}class ka{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ea(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Lt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ze(e.point.x,0,e.bounds.width,-s,+s),P=Ze(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Tt(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Gs(e.key)&&e.preventDefault();const[t,s]=vr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Tt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=vr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ca{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Z.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Bs(e,{viewProps:this.viewProps}):null;const P=new ka(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new rs(e,{assembly:br,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Sa(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),un({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,re)=>re.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),pe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=oe(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Jt{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const gr={toComponents:n=>n.getComponents(),fromComponents:n=>new Jt(...n)};function Ma(n){return Jt.isObject(n)?new Jt(n.x,n.y,n.z):new Jt}function Ba(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ta(n,e){return new Bt({assembly:gr,components:[Et("x"in n?n.x:void 0,e.x),Et("y"in n?n.y:void 0,e.y),Et("z"in n?n.z:void 0,e.z)]})}function is(n,e){return{baseStep:Yt(e),constraint:e,textProps:ee.fromObject({draggingScale:Zt(e,n),formatter:nt(kn(e,n))})}}const Da={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Jt.isObject(n))return null;const t=Pe,s=_e(e,{x:t.optional.custom(Ct),y:t.optional.custom(Ct),z:t.optional.custom(Ct)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ma,constraint:n=>Ta(n.params,n.initialValue),equals:Jt.equals,writer:n=>Ba},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Bt))throw O.shouldNeverHappen();return new rs(n.document,{assembly:gr,axes:[is(e.rawValue.x,t.components[0]),is(e.rawValue.y,t.components[1]),is(e.rawValue.z,t.components[2])],parser:Pt,value:e,viewProps:n.viewProps})}};class en{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const wr={toComponents:n=>n.getComponents(),fromComponents:n=>new en(...n)};function Aa(n){return en.isObject(n)?new en(n.x,n.y,n.z,n.w):new en}function Ra(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ia(n,e){return new Bt({assembly:wr,components:[Et("x"in n?n.x:void 0,e.x),Et("y"in n?n.y:void 0,e.y),Et("z"in n?n.z:void 0,e.z),Et("w"in n?n.w:void 0,e.w)]})}function La(n,e){return{baseStep:Yt(e),constraint:e,textProps:ee.fromObject({draggingScale:Zt(e,n),formatter:nt(kn(e,n))})}}const za={id:"input-point4d",type:"input",accept:(n,e)=>{if(!en.isObject(n))return null;const t=Pe,s=_e(e,{x:t.optional.custom(Ct),y:t.optional.custom(Ct),z:t.optional.custom(Ct),w:t.optional.custom(Ct)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>Ia(n.params,n.initialValue),equals:en.equals,writer:n=>Ra},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Bt))throw O.shouldNeverHappen();return new rs(n.document,{assembly:wr,axes:e.rawValue.getComponents().map((s,c)=>La(s,t.components[c])),parser:Pt,value:e,viewProps:n.viewProps})}};function Ua(n){const e=[],t=jn(n.options);return t&&e.push(t),new rn(e)}const Ga={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=_e(e,{options:Pe.optional.custom(En)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us,constraint:n=>Ua(n.params),writer:n=>hn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&yt(s,on);return c?new an(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Pn(e,{parser:P=>P,props:ee.fromObject({formatter:Fn}),value:t,viewProps:n.viewProps})}},_n={monitor:{defaultInterval:200,defaultLineCount:3}},xr=z("mll");class Va{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(xr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(xr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class os{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Va(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const yr=z("sgl");class Oa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(yr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(yr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class as{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Oa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Fa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=_e(e,{lineCount:Pe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ds},controller:n=>{var e;return n.value.rawValue.length===1?new as(n.document,{formatter:As,value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:As,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_n.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},At=z("grl");class Na{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(At()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(At("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(At("t"),z("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((qe,$e)=>{if(qe===void 0)return;const Ot=Ze($e,0,t,0,e.width),mn=Ze(qe,s,c,e.height,0);P.push([Ot,mn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const T=this.tooltipElem_,re=this.value.rawValue[this.cursor_.rawValue];if(re===void 0){T.classList.remove(At("t","a"));return}const Ee=Ze(this.cursor_.rawValue,0,t,0,e.width),Be=Ze(re,s,c,e.height,0);T.style.left=`${Ee}px`,T.style.top=`${Be}px`,T.textContent=`${this.formatter_(re)}`,T.classList.contains(At("t","a"))||(T.classList.add(At("t","a"),At("t","in")),r(T),T.classList.remove(At("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class qa{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=J(-1),this.view=new Na(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Lt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ls(n){return"format"in n&&!N(n.format)?n.format:nt(2)}function $a(n){var e;return n.value.rawValue.length===1?new as(n.document,{formatter:ls(n.params),value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_n.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Wa(n){var e,t,s;return new qa(n.document,{formatter:ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_n.monitor.defaultLineCount,props:ee.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Pr(n){return"view"in n&&n.view==="graph"}const ja={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,s=_e(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Pr(n)?64:1,reader:n=>zs},controller:n=>Pr(n.params)?Wa(n):$a(n)},Ka={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Pe,s=_e(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new os(n.document,{formatter:Fn,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:_n.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new as(n.document,{formatter:Fn,value:t,viewProps:n.viewProps})}};function Ha(n,e){var t;const s=n.accept(e.target.read(),e.params);if(N(s))return null;const c=Pe,P={target:e.target,initialValue:s.initialValue,params:s.params},T=n.binding.reader(P),re=n.binding.constraint?n.binding.constraint(P):void 0,Ee=J(T(s.initialValue),{constraint:re,equals:n.binding.equals}),Be=new gi({reader:T,target:e.target,value:Ee,writer:n.binding.writer(P)}),qe=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,Ot=n.controller({constraint:re,document:e.document,initialValue:s.initialValue,params:s.params,value:Be.value,viewProps:h.create({disabled:qe,hidden:$e})});return new Ke(e.document,{binding:Be,blade:Re(),props:ee.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Ot})}function Ya(n,e){return e===0?new bi:new vi(n,e??_n.monitor.defaultInterval)}function Za(n,e){var t,s,c;const P=Pe,T=n.accept(e.target.read(),e.params);if(N(T))return null;const re={target:e.target,initialValue:T.initialValue,params:T.params},Ee=n.binding.reader(re),Be=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(T.params))!==null&&s!==void 0?s:1,qe=P.optional.number(e.params.interval).value,$e=new Pi({reader:Ee,target:e.target,ticker:Ya(e.document,qe),value:wi(Be)}),Ot=P.optional.boolean(e.params.disabled).value,mn=P.optional.boolean(e.params.hidden).value,bn=n.controller({document:e.document,params:T.params,value:$e.value,viewProps:h.create({disabled:Ot,hidden:mn})});return new He(e.document,{binding:$e,blade:Re(),props:ee.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:bn})}class Xa{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(N(c))throw new O({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((T,re)=>T??Ha(re,{document:e,target:t,params:s}),null);if(P)return P;throw new O({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,T)=>P??Za(T,{document:e,params:s,target:t}),null);if(c)return c;throw new O({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??mi(P,{document:e,params:t}),null);if(!s)throw new O({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Ke)return new Ne(e);if(e instanceof He)return new Xe(e);if(e instanceof Ye)return new ft(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw O.shouldNeverHappen();return t}}function Qa(){const n=new Xa;return[rl,Da,za,Ga,Pa,va,ba,ha,po,Fa,Ka,ja,ge,ci,di,Es].forEach(e=>{n.register(e)}),n}function Ja(n){return Tt.isObject(n)?new Tt(n.x,n.y):new Tt}function el(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Et(n,e){if(!n)return;const t=[],s=_r(n,e);s&&t.push(s);const c=mr(n);return c&&t.push(c),new rn(t)}function tl(n,e){return new Bt({assembly:br,components:[Et("x"in n?n.x:void 0,e.x),Et("y"in n?n.y:void 0,e.y)]})}function Sr(n,e){const[t,s]=n?xa(n):[];if(!N(t)||!N(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Yt(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function nl(n,e){const t=e instanceof Bt?e.components[0]:void 0,s=e instanceof Bt?e.components[1]:void 0,c=Sr(t,n.x),P=Sr(s,n.y);return Math.max(c,P)}function Er(n,e){return{baseStep:Yt(e),constraint:e,textProps:ee.fromObject({draggingScale:Zt(e,n),formatter:nt(kn(e,n))})}}function sl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const rl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Tt.isObject(n))return null;const t=Pe,s=_e(e,{expanded:t.optional.boolean,picker:t.optional.custom(Fs),x:t.optional.custom(Ct),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ja,constraint:n=>tl(n.params,n.initialValue),equals:Tt.equals,writer:n=>el},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Bt))throw O.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Ca(e,{axes:[Er(t.rawValue.x,s.components[0]),Er(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:sl(n.params),maxValue:nl(t.rawValue,s),parser:Pt,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class kr extends x{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Cr extends x{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Mr extends x{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const il=function(){return{id:"list",type:"blade",accept(n){const e=Pe,t=_e(n,{options:e.required.custom(En),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new on(Ns(n.params.options)),t=J(n.params.value,{constraint:e}),s=new an(n.document,{props:new ee({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Kt(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Kt)||!(n.controller.valueController instanceof an)?null:new kr(n.controller)}}}();function ol(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function al(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class ll extends _t{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Ke).map(s=>s.binding);al(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Ke).map(t=>t.binding.target);return ol(e)}refresh(){this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()})}}class cl extends Un{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ul={id:"slider",type:"blade",accept(n){const e=Pe,t=_e(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Ht({max:n.params.max,min:n.params.min}),P=new Wn(n.document,{baseStep:1,parser:Pt,sliderProps:new ee({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:ee.fromObject({draggingScale:Zt(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:eo}),value:J(s,{constraint:c}),viewProps:n.viewProps});return new Kt(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof Kt)||!(n.controller.valueController instanceof Wn)?null:new Cr(n.controller)}},dl=function(){return{id:"text",type:"blade",accept(n){const e=Pe,t=_e(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Pn(n.document,{parser:n.params.parse,props:ee.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:J(n.params.value),viewProps:n.viewProps});return new Kt(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Kt)||!(n.controller.valueController instanceof Pn)?null:new Mr(n.controller)}}}();function pl(n){const e=n.createElement("div");return e.classList.add(z("dfw")()),n.body&&n.body.appendChild(e),e}function Br(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class hl extends ll{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),T=Qa(),re=new cl(P,{expanded:c.expanded,blade:Re(),props:ee.fromObject({title:c.title}),viewProps:h.create()});super(re,T),this.pool_=T,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:pl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw O.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw O.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Br(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Br(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ul,il,Es,dl]})}}const fl=new k("3.1.10");f.BladeApi=x,f.ButtonApi=le,f.FolderApi=_t,f.InputBindingApi=Ne,f.ListApi=kr,f.MonitorBindingApi=Xe,f.Pane=hl,f.SeparatorApi=bs,f.SliderApi=Cr,f.TabApi=ys,f.TabPageApi=xs,f.TextApi=Mr,f.TpChangeEvent=M,f.VERSION=fl,Object.defineProperty(f,"__esModule",{value:!0})})})(us,us.exports);var Ol=us.exports;const Fl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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

// Compile-time constant: 1 = beta_scaled bake (--kernel beta_scaled,
// shape > 0 per Gauss), 0 = Gaussian bake (--kernel gaussian, shape == 0
// always). The host picks the value at pipeline-build time from the
// bake_meta.json kernel field, and the shader dead-strips the unused
// branch. Saves one per-fragment compare + conditional branch that was
// really per-bake, not per-fragment.
override BETA_KERNEL : u32 = 1u;

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

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch).  Skips
    // the per-fragment cross-product + perspective divide.  Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both
    // linear in pix → u = p.x/p.z is a rational function of pix, and:
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
    // boundary. Past that boundary the formula's sign flips → wrong colors
    // (foggy tile-discontinuity artifact on large near-camera Gauss). Cull.
    if denom < 0.1 { discard; }
    let inv_d  = 1.0 / denom;
    let s      = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    let rho3d  = dot(s, s);

    // Screen-space low-pass (alpha_lp) for sub-pixel splats.
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);

    let depth = dot(in.depth_plane, vec3<f32>(s, 1.0));
    if depth < 0.2 { discard; }

    // Kernel dispatch — BETA_KERNEL is a compile-time constant set from
    // the bake's kernel field, so exactly one branch survives after
    // pipeline-constant folding:
    //   beta_scaled (BETA_KERNEL=1): (1 − ρ3d/9)^β, hard cutoff at ρ3d = 9.
    //   gaussian    (BETA_KERNEL=0): exp(-ρ3d / 2), unbounded analytically.
    // The previous per-fragment \`if sh < 1e-6\` was really a per-bake switch,
    // so this saves one predicate + conditional branch per pixel.
    var alpha_beta : f32;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        let sh = in.shape;
        // Fast paths for shape ∈ {0.5, 1, 2, 4}. Bakes that have been
        // shape-quantized (see scripts/quantize_shape.py / \`*_quant\`
        // bundles) will hit one of these every fragment, skipping pow()
        // entirely. Non-quantized bakes fall through to pow on most
        // surfels — only the small subset that happen to have shape near
        // an integer power get the speedup naturally.
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
`,ql=`const WG_SIZE = 256u;
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
        // Stable tie-break for the LSD radix sort. Pack the sort key as
        //   (depth_top_24 << 8) | (idx & 0xFF)
        // so that ties on the top 24 bits of fp32 depth (very common at
        // close range where many surfels share near-identical depths) get
        // broken deterministically by the low 8 bits of the source-array
        // index — which is stable across frames. Without this, the cull's
        // atomicAdd-based compact emits non-deterministically → sort ties
        // flip every frame → visible close-range flicker (documented in
        // memory: project_sort_depth_precision.md).  Depth precision loss
        // is ~1 part in 2^24 (~1e-7 relative), invisible.
        sort_depths[store_idx]  = (bitcast<u32>(depth) & 0xFFFFFF00u) | (idx & 0xFFu);
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
}`,Jr=32,ds=1,ps=2,Or=4,Hl=0,Rt=new ArrayBuffer(Jr),ct={canvas_size:new Uint32Array(Rt,0,2),accel_flags:new Uint32Array(Rt,8,1),feature_mode:new Uint32Array(Rt,12,1),gaussian_scaling:new Float32Array(Rt,16,1),sh_bias:new Float32Array(Rt,20,1),color_K:new Uint32Array(Rt,24,1),walltime:new Float32Array(Rt,28,1)};function Yl(o){ct.canvas_size[0]=o.width>>>0,ct.canvas_size[1]=o.height>>>0,ct.accel_flags[0]=(o.accel_flags??ds|ps)>>>0,ct.feature_mode[0]=(o.feature_mode??Hl)>>>0,ct.gaussian_scaling[0]=o.gaussian_scaling??1,ct.sh_bias[0]=o.sh_bias??.5,ct.color_K[0]=(o.color_K??0)>>>0,ct.walltime[0]=o.walltime??0}function ei(o,l){o.queue.writeBuffer(l,0,Rt)}function zn(o,l,f){f&&o&&l&&ei(o,l)}function vn(o,l,f,k,x=!0){ct.canvas_size[0]=o>>>0,ct.canvas_size[1]=l>>>0,zn(f??null,k??null,x)}function Fr(o,l,f,k=!0){ct.gaussian_scaling[0]=o,zn(l??null,f??null,k)}function Nr(o,l,f,k=!0){ct.sh_bias[0]=o,zn(l??null,f??null,k)}function Zl(o,l,f,k=!0){let x=ct.accel_flags[0];o.oac!==void 0&&(x=o.oac?x|ds:x&~ds),o.spr!==void 0&&(x=o.spr?x|ps:x&~ps),o.bfc!==void 0&&(x=o.bfc?x|Or:x&~Or),ct.accel_flags[0]=x>>>0,zn(l??null,f??null,k)}const qr=256,Xl=Jr,Ql=8,Jl=80,ec=12,ms=8,kt=1<<ms,Ft=256,Rn=32/ms;function $r(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function tc(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[f]}),x=C=>o.createComputePipeline({layout:k,compute:{module:l,entryPoint:C,constants:{WG_SIZE:Ft}}});return{l0TileScan:x("prefix_l0_tile_scan"),l1TileScanOnL0:x("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:x("prefix_scan_l1_sums"),addL1ToL0:x("prefix_add_l1_to_l0_offsets"),addL0ToElems:x("prefix_add_l0_to_elements"),computeDigitBase:x("compute_digit_base"),prefixBindGroupLayout:f}}function nc(o,l,f){const k=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[k]}),M=o.createPipelineLayout({bindGroupLayouts:[x]}),G=[];for(let A=0;A<Rn;A++){const L={PASS_ID:A,RS_RADIX_LOG2:ms,RS_RADIX_SIZE:kt};G.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:l,entryPoint:"local_histogram_pass",constants:L}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:L}})})}return{passes:G,localHistogramBindGroupLayout:k,scatterBindGroupLayout:x}}function sc(o){const l=o.createShaderModule({label:"local histogram",code:jl}),f=o.createShaderModule({label:"scatter",code:Wl}),k=o.createShaderModule({label:"blelloch prefix",code:Kl}),x=tc(o,k),C=nc(o,l,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:x}}function rc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),k=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),x=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(48));const M=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),G=M.createView({dimension:"2d"}),A=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),L=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),U=L.createView({dimension:"2d"}),N=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Y={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:k,rectsBuffer:x,texParamsBuffer:C,meta:Y,rvqCodebookTexture:M,rvqCodebookView:G,rvqCodebookSampler:A,rvqPackedIndicesTexture:L,rvqPackedIndicesView:U,rvqSurfelOffsetsBuffer:N}}class ic{constructor(l,f,k,x,C,M=null){te(this,"device");te(this,"pc");te(this,"presentationFormat");te(this,"camera_buffer");te(this,"render_settings_buffer");te(this,"draw_indirect_buffer");te(this,"splat_2d_buffer");te(this,"querySet");te(this,"resolveBuffer");te(this,"resultBuffer");te(this,"queriesPerFrame",Ql);te(this,"queryCapacityFrames",200);te(this,"sort_prefixBindGroup");te(this,"sort_pipelines");te(this,"sort_localHistogramBindGroups");te(this,"sort_scatterBindGroups");te(this,"lastFrame",0);te(this,"frameCount",0);te(this,"preprocessPipeline");te(this,"cullPipeline");te(this,"renderPipeline");te(this,"indirectPipeline");te(this,"sort_info_buffer");te(this,"sort_ping_pong");te(this,"crsBg");te(this,"gsBg");te(this,"cullBg2");te(this,"preprocessBg1");te(this,"renderSplatsBindGroup");te(this,"renderSettingsBindGroup");te(this,"atlasBindGroup");te(this,"indirectBindGroup");te(this,"sh_solvers_buffer");te(this,"bgColor",[0,0,0,0]);te(this,"showPerfDialogNext",!1);te(this,"requestReorderNextFrame",!1);te(this,"reorderInFlight",!1);te(this,"downloadOnceNextRead",!1);te(this,"downloadOnceFileName","fps_metrics");te(this,"allFrameTimes",[]);te(this,"lastStageBreakdownMs",null);te(this,"timeQueryEnabled");te(this,"atlas");const G=C.includes("timestamp-query");this.timeQueryEnabled=G,G&&it("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=k,this.camera_buffer=x,this.atlas=M??rc(f),f.addEventListener("uncapturederror",ee=>{console.error("A WebGPU error was not captured:",ee.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Ft-1)/Ft)+1)*Ft,L=Math.ceil(A/Ft);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const U=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});{const ee=window.__halloumiProgress??(Te=>{});ee("pipeline: radix sort (buildPipelines) compile…"),this.sort_pipelines=sc(f),ee("pipeline: radix sort OK")}const N=[$r(A,f),$r(A,f)],Y=f.createBuffer({label:"workgroup histograms",size:L*kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=f.createBuffer({label:"workgroup prefixes",size:L*kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=f.createBuffer({label:"digit base",size:kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=Math.ceil(L/Ft),$=Math.ceil(O/Ft),le=f.createBuffer({label:"prefix l0 sums",size:O*kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),V=f.createBuffer({label:"prefix l0 offsets",size:O*kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=f.createBuffer({label:"prefix l1 sums",size:$*kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=f.createBuffer({label:"prefix l1 offsets",size:$*kt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:Q}},{binding:3,resource:{buffer:le}},{binding:4,resource:{buffer:V}},{binding:5,resource:{buffer:R}},{binding:6,resource:{buffer:z}},{binding:7,resource:{buffer:F}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:N[0].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:N[1].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:N[0].sort_depths_buffer}},{binding:3,resource:{buffer:N[1].sort_depths_buffer}},{binding:4,resource:{buffer:N[0].sort_indices_buffer}},{binding:5,resource:{buffer:N[1].sort_indices_buffer}},{binding:6,resource:{buffer:Q}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:N[1].sort_depths_buffer}},{binding:3,resource:{buffer:N[0].sort_depths_buffer}},{binding:4,resource:{buffer:N[1].sort_indices_buffer}},{binding:5,resource:{buffer:N[0].sort_indices_buffer}},{binding:6,resource:{buffer:Q}}]})],this.sort_info_buffer=U,this.sort_ping_pong=N;const ce=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),K=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),X=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),H=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ce,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:K,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:X,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:H,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const ne=window.__halloumiProgress??(ee=>{});ne("pipeline: indirect_dispatch compile…");const be=this.device.createShaderModule({code:ql});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:be,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),ne("pipeline: indirect_dispatch OK"),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),ne("pipeline: surfel_cull compile…");const Ue=this.device.createShaderModule({code:$l});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ce,K,X]}),compute:{module:Ue,entryPoint:"surfel_cull"}}),ne("pipeline: surfel_cull OK"),ne("pipeline: preprocess_2dgs compile…");const Ie=this.device.createShaderModule({code:Fl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ce,H]}),compute:{module:Ie,entryPoint:"preprocess"}}),ne("pipeline: preprocess_2dgs OK"),ne("pipeline: render_2dgs shader compile…");const Ae=this.device.createShaderModule({code:Nl});Ae.getCompilationInfo().then(ee=>{ee.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ee.messages.forEach(Te=>{(Te.type==="error"?console.error:Te.type==="warning"?console.warn:console.log)(`${Te.type} (line ${Te.lineNum}:${Te.linePos}): ${Te.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const fe=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ke=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ye=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),J=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),ne("pipeline: render_2dgs createRenderPipeline…"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,ke,ye]}),vertex:{module:Ae,entryPoint:"vs_main"},fragment:{module:Ae,entryPoint:"fs_main",constants:{BETA_KERNEL:J},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(ee=>{ee?(ne("render_2dgs pipeline VALIDATION ERROR: "+ee.message),console.error("[render_2dgs] pipeline create validation error:",ee.message)):(ne("pipeline: render_2dgs OK"),console.log("[render_2dgs] pipeline created OK"))}),ne("all pipelines dispatched (async validation pending)"),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:fe,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ke,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ye,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&Xr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),k=f*Uint32Array.BYTES_PER_ELEMENT;if(k===0){console.log("[DEBUG] No indices to read.");return}const x=this.device.createBuffer({size:k,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[0].sort_indices_buffer,0,x,0,k),this.device.queue.submit([C.finish()]),await x.mapAsync(GPUMapMode.READ);const M=new Uint32Array(x.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),x.unmap()}frame(l,f,k=!0){const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=k&&this.timeQueryEnabled,G=this.frameCount<3&&window.__halloumiProgress?window.__halloumiProgress:F=>{};G(`frame#${this.frameCount} begin (num_points=${this.pc.num_points}, tsw=${M})`);const A=new URLSearchParams(window.location.search).get("nocull")==="1",L=new URLSearchParams(window.location.search).get("noprep")==="1";if(!A){l.clearBuffer(this.sort_info_buffer,0,4),G(`  cull dispatch: wg=${Math.ceil(this.pc.num_points/qr)}`);const F={label:"cull"};M&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const O=l.beginComputePass(F);O.setPipeline(this.cullPipeline),O.setBindGroup(0,this.crsBg),O.setBindGroup(1,this.gsBg),O.setBindGroup(2,this.cullBg2);const $=Math.ceil(this.pc.num_points/qr);O.dispatchWorkgroups($,1,1),O.end()}G("  indirect dispatch pass");{const F=l.beginComputePass({label:"calculate indirect dispatch"});F.setPipeline(this.indirectPipeline),F.setBindGroup(0,this.indirectBindGroup),F.dispatchWorkgroups(1,1,1),F.end()}if(G("  preprocess pass"+(L?" — SKIPPED via ?noprep=1":"")),!L){const F={label:"preprocess"};M&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const O=l.beginComputePass(F);O.setPipeline(this.preprocessPipeline),O.setBindGroup(0,this.crsBg),O.setBindGroup(1,this.preprocessBg1),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}const U=new URLSearchParams(window.location.search).get("nosort")==="1",N=new URLSearchParams(window.location.search).get("noprep")==="1",Y=new URLSearchParams(window.location.search).get("nocull")==="1";(N||Y||U)&&G(`  DEBUG flags: nocull=${Y} noprep=${N} nosort=${U}`),G("  radix sort loop begin (TOTAL_PASSES="+Rn+(U?", SKIPPED via ?nosort=1":"")+")");const Q=U?0:Rn;for(let F=0;F<Q;F++){const O=F&1,$=this.sort_pipelines.passes[F],le=this.sort_localHistogramBindGroups[O],V=this.sort_scatterBindGroups[O];{const R={label:`upsweep_round${F}`};M&&F==0&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const z=l.beginComputePass(R);z.setPipeline($.localHistogram),z.setBindGroup(0,le),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),z.end()}{const R=l.beginComputePass({label:`prefix_round${F} - l0TileScan`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - l1TileScanOnL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - l1ScanSums`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,kt,1),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - addL1ToL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - addL0ToElems`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=l.beginComputePass({label:`prefix_round${F} - computeDigitBase`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,1,1),R.end()}{const R={label:`scatter_round${F}`};M&&F==Rn-1&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const z=l.beginComputePass(R);z.setPipeline($.scatterElements),z.setBindGroup(0,V),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),z.end()}}{const F={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(F.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,endOfPassWriteIndex:C+7});const O=new URLSearchParams(window.location.search).get("nodraw")==="1",$=new URLSearchParams(window.location.search).get("cyan")==="1";$&&(F.colorAttachments[0].clearValue={r:0,g:.7,b:.9,a:1}),G("  render pass begin"+(O?" — DRAWINDIRECT SKIPPED via ?nodraw=1":"")+($?" (cyan clear)":""));const le=l.beginRenderPass(F);O||(le.setPipeline(this.renderPipeline),le.setBindGroup(0,this.renderSettingsBindGroup),le.setBindGroup(1,this.renderSplatsBindGroup),le.setBindGroup(2,this.atlasBindGroup),le.drawIndirect(this.draw_indirect_buffer,0)),le.end()}G("  frame encoded (submit is caller's responsibility)"),this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const k=this.device.createCommandEncoder({label:"timestamp resolve encoder"});k.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),k.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([k.finish()]),await this.device.queue.onSubmittedWorkDone();const x=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),G=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:x.length},()=>[]);let L=0;for(let le=0;le<M;le++){const V=(G+le)%this.queryCapacityFrames,R=V*this.queriesPerFrame;let z=!0;for(let ce=0;ce<x.length;ce++){const[K,X,H]=x[ce];if(C[R+H]===0n||C[R+X]===0n||C[R+X]<C[R+H]){z=!1;break}}if(!z){!f&&V%60===0&&console.debug("[timestamp] frame slot",V,"contains unwritten (0) timestamps, skipped in stats");continue}L++;for(let ce=0;ce<x.length;ce++){const[K,X,H]=x[ce],ne=Number(C[R+H]),be=Number(C[R+X]);A[ce].push((be-ne)/1e6)}}if(L===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const U=[];let N=0,Y=0,Q=0;for(let le=0;le<x.length;le++){const V=x[le][0],R=A[le];let z=0;if(V==="Total"){const ce=this.allFrameTimes;z=ce.reduce((H,ne)=>H+ne,0)/ce.length;const K=[...ce].sort((H,ne)=>H-ne);N=K[Math.floor(K.length*.99)]||0;const X=ce.reduce((H,ne)=>H+Math.pow(ne-z,2),0)/ce.length;Y=Math.sqrt(X),Q=z}else z=R.reduce((ce,K)=>ce+K,0)/R.length;U.push([V,z])}this.lastFrame+=this.frameCount,this.frameCount=0;const F=Object.fromEntries(U);this.lastStageBreakdownMs={cull:F.Culling??0,preprocess:F.Preprocess??0,sort:F.Sort??0,render:F.Render??0,total:F.Total??0};const $=`[TIMESTAMP - ${this.constructor.name}]
`+U.map(([le,V])=>`${le}: ${V.toFixed(3)}ms`).join(`
`)+`
Total P99: ${N.toFixed(3)}ms
Total STD: ${Y.toFixed(3)}ms
Total AVG: ${Q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log($),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const le=`Stage,ms
`,V=U.map(([ce,K])=>`${ce},${K.toFixed(3)}`).join(`
`),R="data:text/csv;charset=utf-8,"+encodeURIComponent(le+V),z=document.createElement("a");z.href=R,z.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(z),z.click(),z.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert($)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Xl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,k=l?l.height:1;Yl({width:f,height:k,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ei(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:tn(this.pc.num_points*Jl),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:tn(this.pc.num_points*ec),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,k=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${k}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function oc(o,l){return 2*Math.atan(l/(2*o))}function ac(o,l,f,k){const x=Math.tan(k/2),C=Math.tan(f/2),M=x*o,G=-M,A=C*o,L=-A,U=je.create();return U[0]=2*o/(A-L),U[5]=-2*o/(M-G),U[2]=(A+L)/(A-L),U[6]=(M+G)/(M-G),U[14]=1,U[10]=l/(l-o),U[11]=-(l*o)/(l-o),je.transpose(U,U),U}async function lc(o){it(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return it(`loaded cameras count: ${f.length}`),f.map(k=>{const x=I.clone(k.position),C=ht.create(...k.rotation.flat()),M=C[0],G=C[4],A=C[8],L=C[1],U=C[5],N=C[9],Y=C[2],Q=C[6],F=C[10];M*(U*F-N*Q)-G*(L*F-N*Y)+A*(L*Q-U*Y)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const $=je.fromMat3(C);return{position:x,rotation:$,img_name:k.img_name,id:k.id}})}const cc=4*2,uc=4*16,ti=4*uc+2*cc;function dc(o){return o.createBuffer({label:"camera uniform",size:ti,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const rt=new Float32Array(ti/Float32Array.BYTES_PER_ELEMENT);function pc(o,l,f,k,x,C){const M=new Float32Array(16),G=new Float32Array(16);je.inverse(f,M),je.inverse(k,G);const A=.5*x*k[0],L=.5*C*k[5];let U=0;rt.set(f,U),U+=16,rt.set(M,U),U+=16,rt.set(k,U),U+=16,rt.set(G,U),U+=16,rt[U++]=x,rt[U++]=C,rt[U++]=A,rt[U++]=L,o.queue.writeBuffer(l,0,rt)}const In=class In{constructor(l,f){te(this,"uniform_buffer");te(this,"position",I.create());te(this,"rotation",je.create());te(this,"fovY",45/180*Math.PI);te(this,"fovX");te(this,"focal",zr.create());te(this,"viewport",zr.create());te(this,"view_matrix",je.identity());te(this,"view_inv_matrix",je.identity());te(this,"proj_matrix",je.identity());te(this,"proj_inv_matrix",je.identity());te(this,"_negPos",I.create());te(this,"look",I.create(0,0,1));te(this,"up",I.create(0,1,0));te(this,"right",I.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=dc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=oc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=ac(.01,100,this.fovX,this.fovY),je.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],je.copy(this.rotation,this.view_matrix),je.translate(this.view_matrix,this._negPos,this.view_matrix),je.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(In.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;rt.set(this.view_matrix,l),l+=16,rt.set(this.view_inv_matrix,l),l+=16,rt.set(this.proj_matrix,l),l+=16,rt.set(this.proj_inv_matrix,l),l+=16,rt.set(this.viewport,l),l+=2,rt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,rt)}set_preset(l){I.copy(l.position,this.position),je.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};te(In,"Z_AXIS",I.create(0,0,1));let hs=In;const hc=I.create(1,0,0),fc=I.create(0,1,0);function _c(o,l){const f=o[0],k=o[4],x=o[8],C=o[1],M=o[5],G=o[9],A=o[2],L=o[6],U=o[10],N=f+M+U;let Y,Q,F,O;if(N>0){const $=.5/Math.sqrt(N+1);Y=.25/$,Q=(L-G)*$,F=(x-A)*$,O=(C-k)*$}else if(f>M&&f>U){const $=2*Math.sqrt(1+f-M-U);Y=(L-G)/$,Q=.25*$,F=(k+C)/$,O=(x+A)/$}else if(M>U){const $=2*Math.sqrt(1+M-f-U);Y=(x-A)/$,Q=(k+C)/$,F=.25*$,O=(G+L)/$}else{const $=2*Math.sqrt(1+U-f-M);Y=(C-k)/$,Q=(x+A)/$,F=(G+L)/$,O=.25*$}return l[0]=Q,l[1]=F,l[2]=O,l[3]=Y,l}class mc{constructor(l){te(this,"element");te(this,"enabled",!0);te(this,"center",I.create(0,0,0));te(this,"up",I.create(0,1,0));te(this,"rotation",[0,0]);te(this,"shift",[0,0]);te(this,"scroll",0);te(this,"speed",.1);te(this,"sensitivity",.08);te(this,"leftPressed",!1);te(this,"rightPressed",!1);te(this,"leftDragPans",!1);te(this,"lastX",0);te(this,"lastY",0);te(this,"touches",new Map);te(this,"lastTouchCenter",null);te(this,"lastPinchDistance",null);te(this,"lastTwoFingerAngle",null);te(this,"lastTouchCount",0);te(this,"roll",0);te(this,"_dir",I.create());te(this,"_right",I.create());te(this,"_upCam",I.create());te(this,"_scratch",I.create());te(this,"_qY",st.create());te(this,"_qX",st.create());te(this,"_qRot",st.create());te(this,"_qLocal",st.create());te(this,"_qWorldToCam",st.create());te(this,"_scratchMat3",ht.create());te(this,"bboxMin",null);te(this,"bboxMax",null);te(this,"anchor",I.create(0,0,0));te(this,"downCallback",l=>{var f,k,x,C;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(k=(f=l.target)==null?void 0:f.setPointerCapture)==null||k.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(C=(x=l.target)==null?void 0:x.setPointerCapture)==null||C.call(x,l.pointerId),l.preventDefault())}});te(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,k=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=k):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=k)});te(this,"upCallback",l=>{var f,k,x,C;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(k=(f=l.target)==null?void 0:f.releasePointerCapture)==null||k.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(x=l.target)==null?void 0:x.releasePointerCapture)==null||C.call(x,l.pointerId),l.preventDefault()});te(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;I.set(f[2],f[6],f[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(f[0],f[1],f[2]);const k=(l[0]+f[0])*.5,x=(l[1]+f[1])*.5,C=(l[2]+f[2])*.5;I.set(k,x,C,this.center),I.set(k,x,C,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let k=-1/0,x=1/0,C=!1;for(let M=0;M<3;M++){const G=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],L=this.bboxMax[M]-this.camera.position[M];if(Math.abs(G)>1e-8){const U=A/G,N=L/G;k=Math.max(k,Math.min(U,N)),x=Math.min(x,Math.max(U,N))}else if(A>0||L<0){C=!0;break}}!C&&k<=x&&x>0&&(f=(Math.max(k,0)+x)*.5)}if(f===null||!isFinite(f)||f<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const k=I.dot(this._scratch,this._dir);f=k>.001?k:I.length(this._scratch)}f=Math.max(.1,f),I.scale(this._dir,f,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const k=f.x-this.lastTouchCenter[0],x=f.y-this.lastTouchCenter[1];this.rotation[0]+=k*.3,this.rotation[1]-=x*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),k=(f[0].x+f[1].x)*.5,x=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,M=f[1].y-f[0].y,G=Math.hypot(C,M),A=Math.atan2(M,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const L=k-this.lastTouchCenter[0],U=x-this.lastTouchCenter[1],N=Math.hypot(L,U),Y=Math.abs(G-this.lastPinchDistance);let Q=A-this.lastTwoFingerAngle;Q>Math.PI&&(Q-=2*Math.PI),Q<-Math.PI&&(Q+=2*Math.PI),N>.5&&(this.shift[1]-=L,this.shift[0]+=U),Y>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(G/this.lastPinchDistance)*10),Math.abs(Q)>.0087&&(this.roll+=-Q)}this.lastTouchCenter=[k,x],this.lastPinchDistance=G,this.lastTwoFingerAngle=A}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const O=f.rotation;this.up[0]=O[1],this.up[1]=O[5],this.up[2]=O[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let k=!1;if(Math.abs(this.roll)>1e-4){const O=f.rotation;I.set(O[2],O[6],O[10],this._scratch),I.normalize(this._scratch,this._scratch),st.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,k=!0}I.subtract(f.position,this.center,this._dir);let x=I.length(this._dir);x<1e-6&&(x=1e-6);const C=Math.exp(Math.log(x)+this.scroll*l*10*this.speed);I.scale(this._dir,C/x,this._dir),x=C;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const G=I.create(M[1],M[5],M[9]);I.normalize(G,G),I.length(G)<1e-6&&I.set(0,1,0,G);const A=l*this.speed*.1*x,L=this.shift[1]*A,U=-this.shift[0]*A;I.scale(this._right,L,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position),I.scale(G,U,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position);const N=this.rotation[0]*l*this.sensitivity,Y=this.rotation[1]*l*this.sensitivity;if(Math.abs(N)>1e-5||Math.abs(Y)>1e-5||k){const O=f.rotation;_c(O,this._qWorldToCam),st.fromAxisAngle(hc,-Y,this._qX),st.fromAxisAngle(fc,-N,this._qY),st.multiply(this._qX,this._qY,this._qLocal),st.normalize(this._qLocal,this._qLocal),st.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),st.normalize(this._qWorldToCam,this._qWorldToCam),ht.fromQuat(this._qWorldToCam,this._scratchMat3),je.fromMat3(this._scratchMat3,f.rotation);const $=f.rotation,le=$[2],V=$[6],R=$[10];f.position[0]=this.center[0]-le*x,f.position[1]=this.center[1]-V*x,f.position[2]=this.center[2]-R*x,this.up[0]=$[1],this.up[1]=$[5],this.up[2]=$[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,f.position);f.update_buffer();const F=Math.pow(.8,l*60);this.rotation[0]*=F,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=F,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=F,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=F,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=F,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ni(o){const l=I.create();for(const f of o)I.add(l,f,l);return I.scale(l,1/Math.max(o.length,1),l)}function si(o,l){const f=ht.create();ht.inverse(o,f);const k=I.create();return k[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],k[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],k[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],k}function bc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],k=(A,L)=>l[A*3+L],x=(A,L,U)=>{l[A*3+L]=U},C=(A,L)=>f[A*3+L],M=(A,L,U)=>{f[A*3+L]=U};for(let A=0;A<30;A++){let L=0,U=1,N=Math.abs(k(0,1));if(Math.abs(k(0,2))>N&&(L=0,U=2,N=Math.abs(k(0,2))),Math.abs(k(1,2))>N&&(L=1,U=2,N=Math.abs(k(1,2))),N<1e-12)break;const Y=k(L,L),Q=k(U,U),F=k(L,U);let O;Math.abs(Y-Q)<1e-30?O=Math.PI/4*Math.sign(F):O=.5*Math.atan2(2*F,Y-Q);const $=Math.cos(O),le=Math.sin(O);for(let V=0;V<3;V++){const R=k(V,L),z=k(V,U);x(V,L,$*R+le*z),x(V,U,-le*R+$*z)}for(let V=0;V<3;V++){const R=k(L,V),z=k(U,V);x(L,V,$*R+le*z),x(U,V,-le*R+$*z)}for(let V=0;V<3;V++){const R=C(V,L),z=C(V,U);M(V,L,$*R+le*z),M(V,U,-le*R+$*z)}}const G=[];for(let A=0;A<3;A++)G.push({val:k(A,A),vec:I.create(C(0,A),C(1,A),C(2,A))});return G.sort((A,L)=>L.val-A.val),{vals:[G[0].val,G[1].val,G[2].val],vecs:[G[0].vec,G[1].vec,G[2].vec]}}function vc(o,l){const f=ni(o);let k=0,x=0,C=0,M=0,G=0,A=0;for(const F of o){const O=F[0]-f[0],$=F[1]-f[1],le=F[2]-f[2];k+=O*O,x+=O*$,C+=O*le,M+=$*$,G+=$*le,A+=le*le}const L=[k,x,C,x,M,G,C,G,A],{vecs:U}=bc(L);let N=U[0],Y=U[1],Q=U[2];return I.dot(Q,l)<0&&(I.scale(Q,-1,Q),I.scale(Y,-1,Y)),{centroid:f,normal:Q,u:N,v:Y}}function gc(o){let l=0,f=0,k=0,x=0,C=0,M=0,G=0,A=0,L=0;for(const[$,le]of o){const V=-2*$,R=-2*le,z=1,ce=-($*$+le*le);l+=V*V,f+=V*R,k+=V*z,x+=R*R,C+=R*z,M+=z*z,G+=V*ce,A+=R*ce,L+=z*ce}const U=ht.create(l,f,k,f,x,C,k,C,M),N=si(U,I.create(G,A,L)),Y=N[0],Q=N[1],F=N[2],O=Y*Y+Q*Q-F;return{center:[Y,Q],radius:Math.sqrt(Math.max(O,1e-12))}}function wc(o,l){let f=0,k=0,x=0,C=0,M=0,G=0,A=0,L=0,U=0;for(let Y=0;Y<o.length;Y++){const Q=o[Y],F=I.normalize(l[Y],I.create()),O=1-F[0]*F[0],$=-F[0]*F[1],le=-F[0]*F[2],V=1-F[1]*F[1],R=-F[1]*F[2],z=1-F[2]*F[2];f+=O,k+=$,x+=le,C+=V,M+=R,G+=z,A+=O*Q[0]+$*Q[1]+le*Q[2],L+=$*Q[0]+V*Q[1]+R*Q[2],U+=le*Q[0]+R*Q[1]+z*Q[2]}const N=ht.create(f,k,x,k,C,M,x,M,G);return si(N,I.create(A,L,U))}function ri(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,k=l.radiusScale??1,x=l.alignFirst??!0,C=(l.direction??"ccw")==="ccw"?1:-1,M=o.map(H=>I.clone(H.position)),G=o.map(H=>{const ne=H.rotation;return I.create(ne[8],ne[9],ne[10])}),A=o.map(H=>{const ne=H.rotation;return I.create(ne[4],ne[5],ne[6])}),L=ni(A),U=I.normalize(I.scale(L,-1,I.create())),{centroid:N,normal:Y,u:Q,v:F}=vc(M,U),O=M.map(H=>{const ne=I.sub(H,N,I.create());return[I.dot(ne,Q),I.dot(ne,F)]}),{center:$,radius:le}=gc(O),V=le*k,R=I.add(N,I.add(I.scale(Q,$[0],I.create()),I.scale(F,$[1],I.create()),I.create()),I.create()),z=wc(M,G),ce=V*Math.tan(f*Math.PI/180),K=I.sub(z,I.scale(Y,ce,I.create()),I.create());let X=0;if(x){const H=I.sub(M[0],R,I.create());X=Math.atan2(I.dot(H,F),I.dot(H,Q))/(2*Math.PI)%1,X<0&&(X+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${V.toFixed(2)}, tilt=${f}°, normal=[${Y[0].toFixed(2)}, ${Y[1].toFixed(2)}, ${Y[2].toFixed(2)}], startPhase=${X.toFixed(3)}`),{center:R,radius:V,normal:Y,u:Q,v:F,lookAt:K,startPhase:X,direction:C}}function ii(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,k=Math.cos(f),x=Math.sin(f),C=I.add(o.center,I.add(I.scale(o.u,o.radius*k,I.create()),I.scale(o.v,o.radius*x,I.create()),I.create()),I.create()),M=I.normalize(I.sub(o.lookAt,C,I.create())),G=I.cross(M,o.normal,I.create());I.length(G)<1e-6&&I.copy(o.u,G),I.normalize(G,G);const A=I.cross(M,G,I.create());I.normalize(A,A);const L=je.create();return L[0]=G[0],L[1]=A[0],L[2]=M[0],L[3]=0,L[4]=G[1],L[5]=A[1],L[6]=M[1],L[7]=0,L[8]=G[2],L[9]=A[2],L[10]=M[2],L[11]=0,L[12]=0,L[13]=0,L[14]=0,L[15]=1,{position:C,rotation:L,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function xc(o,l={}){const f=ri(o,l);if(!f)return[];const k=l.numViews??120;return Array.from({length:k},(x,C)=>({...ii(f,C/k),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}async function yc(){if(!("xr"in navigator)||!navigator.xr)return!1;try{return await navigator.xr.isSessionSupported("immersive-vr")}catch{return!1}}async function Pc(o){const l=window.XRGPUBinding??window.XRWebGPUBinding;if(!l)throw new Error("XRGPUBinding is not available in this browser. On Quest Browser you may need to enable it under chrome://flags/#webxr-webgpu-binding (inspect via ADB). Falling back to a WebGL2 XR layer is a future TODO.");const f=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local"],optionalFeatures:["local-floor","bounded-floor","hand-tracking"]}),k=new l(f,o.device),x=k.createProjectionLayer({colorFormat:"rgba8unorm-srgb",depthStencilFormat:"depth24plus",scaleFactor:1});f.updateRenderState({layers:[x]});const C=await f.requestReferenceSpace("local"),M=I.create(0,0,-1.5),G=je.identity(),A=je.create(),L=je.create(),U=new Promise(Y=>{f.addEventListener("end",()=>{o.onExit(),Y()})}),N=performance.now();f.requestAnimationFrame(function Y(Q,F){f.requestAnimationFrame(Y);const O=F.getViewerPose(C);if(!O)return;Sc(f,F,C,M,G),je.copy(G,A);const $=I.create(-M[0],-M[1],-M[2]);je.translate(A,$,A);const le=o.device.createCommandEncoder({label:"xr-frame"});for(const V of O.views){const R=k.getViewSubImage(x,V),z=R.colorTexture.createView(),ce=R.viewport,K=V.transform.inverse.matrix;je.multiply(K,A,L),pc(o.device,o.camera.uniform_buffer,L,V.projectionMatrix,ce.width,ce.height),o.renderer.frame(le,z,!1)}o.device.queue.submit([le.finish()])}),console.log(`[XR] session started in ${(performance.now()-N).toFixed(1)} ms; ${f.inputSources.length} controllers`),await U}function Sc(o,l,f,k,x){const M=.013888888888888888,G=1.5/72,A=.8/72;for(const L of o.inputSources){const U=L.gamepad;if(!U||U.axes.length<2)continue;const N=U.axes[2]??U.axes[0],Y=U.axes[3]??U.axes[1];if(!(Math.abs(N)<.15&&Math.abs(Y)<.15)){if(L.handedness==="left"){const Q=Math.abs(N)>.15?N*M:0,F=Math.abs(Y)>.15?-Y*M:0;k[0]+=Q,k[1]+=F}else if(L.handedness==="right"&&(Math.abs(Y)>.15&&(k[2]+=Y*G),Math.abs(N)>.15)){const Q=-N*A,F=je.rotateY(je.identity(),Q);je.multiply(F,x,x)}}}}const oi="BITYMI01",Ec=0,kc=1,Cc=2,Mc=3,Bc=4,Tc=5;function An(o){const l=(o&32768)>>15,f=(o&31744)>>10,k=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(k/1024):f===31?k?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+k/1024)}function Wr(o,l,f,k,x,C){const M=(o-f.width*.5)/k.focal[0],G=-((l-f.height*.5)/k.focal[1]),A=k.rotation,L=A[0],U=A[4],N=A[8],Y=A[1],Q=A[5],F=A[9],O=A[2],$=A[6],le=A[10];let V=M*L+G*Y+O,R=M*U+G*Q+$,z=M*N+G*F+le;const ce=Math.hypot(V,R,z)||1;V/=ce,R/=ce,z/=ce;const K=k.position[0],X=k.position[1],H=k.position[2],ne=C*.005,be=ne*ne,Ue=new Uint32Array(x.buffer,x.byteOffset,x.length),Ie=x.length/8;let Ae=1/0,fe=0,ke=0,ye=0,J=-1;for(let ee=0;ee<Ie;ee++){const Te=ee*8,Me=x[Te+0]-K,Ve=x[Te+1]-X,De=x[Te+2]-H,Oe=Me*V+Ve*R+De*z;if(Oe<=0)continue;const Pe=Me-Oe*V,_e=Ve-Oe*R,We=De-Oe*z;if(Pe*Pe+_e*_e+We*We>=be||!(Ue[Te+7]>>>16&1))continue;const g=Ue[Te+5],i=Ue[Te+6],h=An(g&65535),d=An(g>>>16&65535),b=An(i&65535),y=An(i>>>16&65535),S=Math.hypot(h,d,b,y)||1,E=h/S,r=d/S,m=b/S,u=y/S,p=2*(r*u+E*m),a=2*(m*u-E*r),_=1-2*(r*r+m*m),w=V*p+R*a+z*_;let v;Math.abs(w)>1e-6?(v=(Me*p+Ve*a+De*_)/w,(!isFinite(v)||v<=0)&&(v=Oe)):v=Oe,v<Ae&&(Ae=v,fe=K+v*V,ke=X+v*R,ye=H+v*z,J=ee)}return J<0?null:[fe,ke,ye]}function ai(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==oi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const k=new DataView(o),x=k.getUint32(8,!0),C=12,M=20;let G=null,A=null,L=null;for(let U=0;U<x;U++){const N=C+U*M,Y=k.getUint32(N+0,!0),Q=Number(k.getBigUint64(N+4,!0)),F=Number(k.getBigUint64(N+12,!0)),O=l.slice(Q,Q+F).buffer;Y===Ec||Y===kc||Y===Tc?G=O:Y===Cc?A=O:(Y===Mc||Y===Bc)&&(L=O)}if(G===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:G,camerasBuffer:A,atlasBuffer:L}}async function Dc(o,l){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const k=(()=>{const G=f.headers.get("content-length");return G&&parseInt(G,10)||void 0})(),x=(M=f.body)==null?void 0:M.getReader();let C;if(!x)C=await f.arrayBuffer(),l&&l(C.byteLength,k,0);else{const G=[];let A=0,L=performance.now(),U=0;for(;;){const{done:Q,value:F}=await x.read();if(Q)break;G.push(F),A+=F.byteLength;const O=performance.now();if(O-L>=150&&l){const $=(A-U)/((O-L)/1e3);l(A,k,$),L=O,U=A}}const N=new Uint8Array(A);let Y=0;for(const Q of G)N.set(Q,Y),Y+=Q.byteLength;C=N.buffer,l&&l(A,k,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===oi?{bundle:ai(C),rawPly:null}:{bundle:null,rawPly:C}}function Ac(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var k;return l(((k=f.files)==null?void 0:k[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Rc(o,l,f){const k=document.getElementById("ui-panel-container"),x=document.getElementById("load-button"),C=document.getElementById("quick-links");x&&(x.onclick=async()=>{const L=await Ac(".ply,.bitymi");if(L)if(k&&(k.style.display="none"),L.name.toLowerCase().endsWith(".bitymi")){const U=await L.arrayBuffer(),{pcBuffer:N}=ai(U),Y=new File([N],L.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),Q=await cs(Y,o);l(Q)}else{const U=await cs(L,o);l(U)}}),C&&(C.innerHTML="");const M=new URLSearchParams(window.location.search),G=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");G&&(k&&(k.style.display="none"),f(G,A))}async function Ic(o,l,f,k){const x=new hs(o,f),C=new mc(x);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const G="rgba8unorm";l.configure({device:f,format:G,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let A=null;const L=()=>{x.on_update_canvas(),A!==null&&vn(o.width,o.height,f,A.render_settings_buffer)};new ResizeObserver(()=>{const X=Math.max(.25,R.render_scale),H=Math.max(1,Math.ceil(X*o.clientWidth)),ne=Math.max(1,Math.ceil(X*o.clientHeight));o.width===H&&o.height===ne||(o.width=H,o.height=ne,L())}).observe(o);let N=0,Y=0;const Q=()=>{(o.width!==N||o.height!==Y)&&(N=o.width,Y=o.height,L())},F=new URLSearchParams(window.location.search);let $=F.get("animation")==="1";C.enabled=!$;const le=F.get("camera_url"),V=Math.max(1,window.devicePixelRatio||1),R={gaussian_scaling:1,sh_bias:.5,animate:$,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,render_scale:1},z=new Ol.Pane({title:"Config",expanded:!0});z.addInput(R,"animate",{label:"Animate"}).on("change",X=>{const H=$;$=X.value,C.enabled=!X.value,!H&&$&&ce.value&&ce.value.onAnimateStart(),H&&!$&&ce.value&&ce.value.onAnimateStop()}),z.addInput(R,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ce={value:null};Rc(f,X=>K(X,[],null),async(X,H)=>{let ne=H??le,be,Ue=null;const Ie=X.toLowerCase();if(Ie.endsWith(".bitymi")||Ie.includes(".bitymi?")){_s("downloading bundle ...");try{const{bundle:fe}=await Dc(X,(ye,J,ee)=>{const Te=ye/1048576,Me=J?J/(1024*1024):void 0,Ve=ee/(1024*1024),De=J?Math.min(99,Math.floor(ye/J*100)):void 0,Oe=Me?`total ${Me.toFixed(1)} MB`:"total -- MB",Pe=Me&&De!==void 0?`${Te.toFixed(1)} MB downloaded (${De}%)`:`${Te.toFixed(1)} MB downloaded`,_e=`${Ve.toFixed(2)} MB/s`;qt(`downloading bundle ...
${Oe}, ${Pe}
${_e}`)});if(!fe)throw new Error("Expected a .bitymi bundle");qt("parsing PLY ...");const ke=new File([fe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(be=await cs(ke,f),!ne&&fe.camerasBuffer&&(ne=URL.createObjectURL(new Blob([fe.camerasBuffer],{type:"application/json"}))),fe.atlasBuffer){const ye=fe.atlasBuffer.byteLength/1048576;qt(`uploading atlas ...
${ye.toFixed(1)} MB BC7`);try{const J=Rl(fe.atlasBuffer);Ue=Ul(f,J,!0)}catch(J){console.warn("[atlas] failed to parse/upload atlas:",J)}}}catch(fe){throw gn(),fe}}else be=await Gl(X,f);const Ae=ne?await lc(ne):[];Ae.length>0&&x.set_preset(Ae[0]),K(be,Ae,Ue)});function K(X,H=[],ne=null){const be=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];C.setBbox(X.bbox.min,X.bbox.max);const Ue=.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function Ie(Z,ae){const se=Wr(Z,ae,o,x,X.surfel_data,Ue);se&&(C.setOrbitPivot(se),console.log(`[pick] orbit pivot → (${se[0].toFixed(3)}, ${se[1].toFixed(3)}, ${se[2].toFixed(3)})`))}function Ae(){const Z=o.width*.5,ae=o.height*.5,se=Wr(Z,ae,o,x,X.surfel_data,Ue);if(!se)return;const pe=x.rotation,we=pe[2],xe=pe[6],he=pe[10],ve=se[0]-x.position[0],Ge=se[1]-x.position[1],ze=se[2]-x.position[2],Ne=ve*we+Ge*xe+ze*he;Ne>0&&C.setOrbitDepth(Ne)}if(H.length===0){const Z=X.bbox.max[0]-X.bbox.min[0],ae=X.bbox.max[1]-X.bbox.min[1],se=X.bbox.max[2]-X.bbox.min[2],we=.5*Math.sqrt(Z*Z+ae*ae+se*se)*.5;I.set(be[0]-we,be[1]-we,be[2]-we,x.position);const xe=I.create(we,we,we);I.normalize(xe,xe);const he=I.create(0,1,0),ve=I.create();I.cross(he,xe,ve),I.normalize(ve,ve);const Ge=I.create();I.cross(xe,ve,Ge);const ze=ht.create(ve[0],Ge[0],xe[0],ve[1],Ge[1],xe[1],ve[2],Ge[2],xe[2]);je.fromMat3(ze,x.rotation),x.update_buffer()}C.setCenter(I.create(X.centroid[0],X.centroid[1],X.centroid[2]));const fe=new ic(X,f,G,x.uniform_buffer,k,ne);A=fe;let ke=!1;(async()=>{const Z=document.getElementById("enter-vr-button"),ae=window.__halloumiError,se=document.createElement("div");se.id="halloumi-xr-status",se.style.cssText="position:fixed;top:8px;right:8px;padding:4px 10px;border-radius:12px;font:11px ui-monospace,SFMono-Regular,Menlo,monospace;z-index:9997;pointer-events:none;",document.body.appendChild(se);const pe=(xe,he,ve)=>{se.style.background=xe,se.style.color=he,se.textContent=ve};if(!("xr"in navigator)||!navigator.xr){pe("#502020","#ffb0b0","❌ WebXR API missing");return}if(!await yc()){pe("#503820","#ffdc80","❌ immersive-vr not supported");return}if(!window.XRGPUBinding&&!window.XRWebGPUBinding){pe("#503820","#ffdc80","❌ XRGPUBinding missing — enable in chrome://flags");return}pe("#204830","#a0f0a0","✅ XR ready · tap anywhere");const we=async()=>{if(!ke){ke=!0,Z&&(Z.disabled=!0,Z.textContent="🥽 In VR…"),pe("#204020","#a0f0a0","⏳ entering VR…");try{await Pc({device:f,renderer:fe,camera:x,onExit:()=>{ke=!1,Z&&(Z.disabled=!1,Z.textContent="🥽 Enter VR"),pe("#204830","#a0f0a0","✅ XR ready · tap anywhere"),vn(o.width,o.height,f,fe.render_settings_buffer),x.on_update_canvas(),document.addEventListener("pointerdown",we,{once:!0})}})}catch(xe){const he=xe.message??String(xe);console.error("[XR] session failed:",xe),ke=!1,Z&&(Z.disabled=!1,Z.textContent="🥽 Enter VR"),pe("#502020","#ffb0b0","❌ XR failed — see banner"),ae==null||ae(`XR enter failed: ${he}`),document.addEventListener("pointerdown",we,{once:!0})}}};Z&&(Z.style.display="",Z.addEventListener("click",we)),document.addEventListener("pointerdown",we,{once:!0})})(),window.__xrActive=()=>ke,vn(o.width,o.height,f,fe.render_settings_buffer),R.atlas_enabled=ne!==null;let ye=!1;const J=(()=>{if(ne!==null)return`${ne.meta.format===2?"BC7":ne.meta.format===3?"ASTC 4×4":ne.meta.format===5?"RVQ-paired (typeA)":ne.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":ne.meta.format===7?"BC7 codebook gather (typeD)":`format=${ne.meta.format}`} ${ne.meta.width}×${ne.meta.height}, ${ne.meta.n_layers} layers`;const Z=f.features.has("texture-compression-bc"),ae=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(Z?["BC7"]:[]).concat(ae?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",J),Nr(X.sh_bias,f,fe.render_settings_buffer),Fr(R.gaussian_scaling,f,fe.render_settings_buffer),R.sh_bias=X.sh_bias;const ee=X.num_points.toLocaleString(),Te={stats:`${ee} surfels · -- fps`};z.addMonitor(Te,"stats",{label:"Stats",interval:200}),z.addMonitor({atlas:J},"atlas",{label:"Atlas"});const Me={stages:"— ms · awaiting timestamp data"};z.addMonitor(Me,"stages",{label:"Stages",interval:500});let Ve=null;if(fe.timeQueryEnabled){Ve=document.createElement("canvas"),Ve.width=280,Ve.height=24,Ve.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(Ve);const Z=se=>{const pe=Ve.getContext("2d");if(!pe)return;const we=Ve.width,xe=Ve.height;if(pe.clearRect(0,0,we,xe),!se||se.total<=0){pe.fillStyle="#888",pe.font="11px ui-monospace,Menlo,monospace",pe.fillText("awaiting GPU timestamps…",8,16);return}const he=[{label:"cull",ms:se.cull,color:"#3aa3ff"},{label:"pre",ms:se.preprocess,color:"#3ad27a"},{label:"sort",ms:se.sort,color:"#ffa53a"},{label:"render",ms:se.render,color:"#ff5566"}],ve=Math.max(.001,he.reduce((ze,Ne)=>ze+Ne.ms,0));let Ge=0;pe.font="10px ui-monospace,Menlo,monospace",pe.textBaseline="middle";for(const ze of he){const Ne=ze.ms/ve*we;pe.fillStyle=ze.color,pe.fillRect(Ge,0,Ne,xe),Ne>=38&&(pe.fillStyle="#000c",pe.fillText(`${ze.label} ${ze.ms.toFixed(1)}`,Ge+4,xe/2)),Ge+=Ne}};setInterval(()=>{ye||fe.readPerfMetrics({silent:!0}).then(()=>{const se=fe.lastStageBreakdownMs;Z(se),se&&(Me.stages=`${se.total.toFixed(1)} ms · cull ${se.cull.toFixed(1)} / pre ${se.preprocess.toFixed(1)} / sort ${se.sort.toFixed(1)} / render ${se.render.toFixed(1)}`)}).catch(se=>console.warn("[perf] readPerfMetrics failed:",se))},500)}const De=.4,Oe=3,Pe=.3;let _e=null,We=0,B=0;const j=st.create(),g=ht.create();let i=H.length>0?0:-1;const h={view:H.length>0?`${i+1} / ${H.length}: ${H[i].img_name??i}`:"— no presets —"};z.addMonitor(h,"view",{label:"View",interval:100});function d(Z){const ae=ht.create(Z[0],Z[1],Z[2],Z[4],Z[5],Z[6],Z[8],Z[9],Z[10]);return st.fromMat(ae)}function b(Z,ae){_e={fromPos:I.clone(x.position),toPos:I.clone(Z.position),fromQuat:st.normalize(d(x.rotation)),toQuat:st.normalize(d(Z.rotation)),target:Z,t:0,duration:Math.max(.01,ae)}}const y=(Z,ae=!0)=>{if(H.length===0)return;i=(Z%H.length+H.length)%H.length;const se=H[i];ae?b(se,De):(x.set_preset(se),C.resetToCamera(),Ae()),h.view=`${i+1} / ${H.length}: ${H[i].img_name??i}`};H.length>0&&(z.addButton({title:"◀ Prev view"}).on("click",()=>y(i-1)),z.addButton({title:"Next view ▶"}).on("click",()=>y(i+1)));const S=H.length>0?ri(H,{tiltDownDeg:15,alignFirst:!0}):null,E=S?xc(H,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let r=0;const m=12;ce.value={onAnimateStart:()=>{r=0},onAnimateStop:()=>{C.resetToCamera(),Ae()}},z.addInput(R,"render_scale",{label:"Render scale",min:.25,max:V,step:.25}).on("change",Z=>{const ae=Math.max(.25,Z.value),se=Math.max(1,Math.ceil(ae*o.clientWidth)),pe=Math.max(1,Math.ceil(ae*o.clientHeight));(o.width!==se||o.height!==pe)&&(o.width=se,o.height=pe,L())}),z.addInput(R,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",Z=>Fr(Z.value,f,fe.render_settings_buffer)),z.addInput(R,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",Z=>Nr(Z.value,f,fe.render_settings_buffer)),z.addInput(R,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",Z=>{fe.bgColor=[Z.value.r,Z.value.g,Z.value.b,Z.value.a]});const u=ne?ne.meta.format===3?"Atlas (ASTC)":ne.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";z.addInput(R,"atlas_enabled",{label:u}).on("change",Z=>fe.setAtlasEnabled(Z.value)),z.addInput(R,"bfc",{label:"Backface"}).on("change",Z=>Zl({bfc:Z.value},f,fe.render_settings_buffer)),z.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(H.length>0)x.set_preset(H[0]);else{const Z=X.bbox.max[0]-X.bbox.min[0],ae=X.bbox.max[1]-X.bbox.min[1],se=X.bbox.max[2]-X.bbox.min[2],we=.5*Math.sqrt(Z*Z+ae*ae+se*se)*.5;I.set(be[0]-we,be[1]-we,be[2]-we,x.position);const xe=I.create(we,we,we);I.normalize(xe,xe);const he=I.create();I.cross(I.create(0,1,0),xe,he),I.normalize(he,he);const ve=I.create();I.cross(xe,he,ve);const Ge=ht.create(he[0],ve[0],xe[0],he[1],ve[1],xe[1],he[2],ve[2],xe[2]);je.fromMat3(Ge,x.rotation),x.update_buffer()}C.resetToCamera(),Ae()});const p={result:"— click Benchmark —"};z.addMonitor(p,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const a={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function _(){const ae=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const se of Object.keys(a))if(ae.startsWith(se))return se;return null}const w=document.createElement("div");w.id="bench-overlay",w.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(w);function v(Z,ae,se){const pe=Math.floor(ae/Math.max(1,se)*100),we=32,xe=Math.floor(ae/Math.max(1,se)*we),he="█".repeat(xe)+"░".repeat(we-xe);w.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${Z}</div><div>[${he}] ${pe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ae} / ${se} frames · offscreen · pipelined · no vsync</div>`,w.style.display="block"}function D(){w.style.display="none"}async function q(Z=10,ae=200){if(ye)return;if(H.length===0){p.result="no cameras to benchmark";return}ye=!0;const se=$,pe=R.animate,we=new Float32Array(x.position),xe=new Float32Array(x.rotation);$=!1,R.animate=!1,z.refresh(),_e=null,C.enabled=!1;const he=_(),ve=he?a[he]:null,Ge=(ve==null?void 0:ve.w)??o.width,ze=(ve==null?void 0:ve.h)??o.height,Ne=(ve==null?void 0:ve.fovY)??x.getFov(),Ke=he?`${he} · ${Ge>=4e3/4+500?"images_4":"images_2"}`:"custom",Xe=o.width,He=o.height,tt=x.getFov();o.width=Ge,o.height=ze,x.setFov(Ne),vn(Ge,ze,f,fe.render_settings_buffer);const Qe=f.createTexture({size:[Ge,ze,1],format:G,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),bt=Qe.createView(),ft=()=>{const Je=f.createCommandEncoder();fe.frame(Je,bt,!1),f.queue.submit([Je.finish()])},_t=()=>new Promise(Je=>setTimeout(Je,0)),mt=20,vt=async(Je,ut)=>{let gt=0,ot=0;for(v(ut,0,Je),await _t();ot<Je;){const wt=Math.min(mt,Je-ot),xt=performance.now();for(let jt=0;jt<wt;jt++)x.set_preset(H[(ot+jt)%H.length]),ft();await f.queue.onSubmittedWorkDone();const Ye=performance.now();gt+=Ye-xt,ot+=wt,v(ut,ot,Je),await _t()}return gt};try{await vt(Z,"Warming up");const ut=await vt(ae,"Benchmarking")/ae,gt=1e3/ut,ot=X.num_points??X.surfel_data.length/8,wt=(Ne*180/Math.PI).toFixed(1),xt=`${gt.toFixed(1)} FPS  (${ut.toFixed(2)} ms/frame)
${Ge}×${ze} · fovY ${wt}° · ${Ke}
${ot.toLocaleString()} surfels · ${Z}w+${ae}b · pipelined`;p.result=xt,console.log("[bench]",xt.replace(/\n/g,"  |  "))}catch(Je){console.error("[bench] failed:",Je),p.result=`bench failed: ${Je}`}finally{D(),Qe.destroy(),o.width=Xe,o.height=He,x.setFov(tt),vn(Xe,He,f,fe.render_settings_buffer),x.position.set(we),x.rotation.set(xe),x.update_buffer(),C.enabled=!se,$=se,R.animate=pe,z.refresh(),ye=!1}}z.addButton({title:"📊 Benchmark"}).on("click",()=>q()),document.addEventListener("keydown",Z=>{const ae=Z.key;if(ae>="0"&&ae<="9"&&H.length>0){const se=parseInt(ae);se<H.length&&y(se)}else ae==="ArrowLeft"||ae==="PageUp"?(y(i-1),Z.preventDefault()):ae==="ArrowRight"||ae==="PageDown"?(y(i+1),Z.preventDefault()):(ae==="d"||ae==="D")&&fe.debugReadSortedIndices(30).catch(se=>console.error("[DEBUG] readback failed:",se))});function W(Z,ae){const se=o.getBoundingClientRect(),pe=window.devicePixelRatio||1;return[(Z-se.left)*pe,(ae-se.top)*pe]}o.addEventListener("dblclick",Z=>{const[ae,se]=W(Z.clientX,Z.clientY);Ie(ae,se)});let ue=0,oe=0,ie=0;o.addEventListener("pointerdown",Z=>{if(Z.pointerType!=="touch")return;const ae=performance.now(),se=ae-ue,pe=Z.clientX-oe,we=Z.clientY-ie;if(se>0&&se<300&&pe*pe+we*we<40*40){const[xe,he]=W(Z.clientX,Z.clientY);Ie(xe,he),ue=0}else ue=ae,oe=Z.clientX,ie=Z.clientY});function me(){return M}let Se=performance.now(),de=60,ge=Promise.resolve(),Ce=0;async function Re(){var xe;const Z=performance.now(),ae=Math.min((Z-Se)/1e3,.1);if(Se=Z,ae>0){const he=((xe=fe.lastStageBreakdownMs)==null?void 0:xe.total)??0,ve=he>.5?1e3/he:1/ae;de=de*.9+ve*.1,Te.stats=`${ee} surfels · ${Math.round(de)} fps`}if(ye||ke){requestAnimationFrame(Re);return}if(me()&&(_e||$)&&(_e=null,C.resetToCamera(),Ae(),$&&($=!1,R.animate=!1,z.refresh())),$&&R.animateMode==="circle"&&S){r+=ae/m,r>=1&&(r-=1);const he=ii(S,r);x.set_preset(he),C.update(ae);const ve=f.createCommandEncoder();fe.frame(ve,l.getCurrentTexture().createView()),f.queue.submit([ve.finish()]),Ce++,Ce===2&&gn(),requestAnimationFrame(Re);return}if(_e){_e.t+=ae/_e.duration;const he=Math.min(1,_e.t),ve=he*he*(3-2*he);I.lerp(_e.fromPos,_e.toPos,ve,x.position),st.slerp(_e.fromQuat,_e.toQuat,ve,j),ht.fromQuat(j,g),je.fromMat3(g,x.rotation),x.update_buffer(),_e.t>=1&&(x.set_preset(_e.target),_e=null,$?H.length>0&&(We=Pe):(C.resetToCamera(),Ae()))}else if($&&!me()){const he=R.animateMode==="circle"&&E.length>0,ve=he?E:H;if(ve.length!==0){if(We-=ae,We<=0){const ze=((he?B:i)+1)%ve.length;he?B=ze:i=ze;const Ne=he?Oe/8:Oe;b(ve[ze],Ne),he||(h.view=`${i+1} / ${H.length}: ${H[i].img_name??i}`)}}}C.update(ae),Q(),await ge;const se=f.createCommandEncoder(),pe=l.getCurrentTexture().createView(),we=window.__halloumiProgress??(he=>{});Ce<3&&we("flat-frame#"+Ce+" encoding…"),fe.frame(se,pe),Ce<3&&we("flat-frame#"+Ce+" submitting…"),f.queue.submit([se.finish()]),Ce<3&&we("flat-frame#"+Ce+" submit OK"),ge=f.queue.onSubmittedWorkDone().then(()=>{Ce<=3&&we("flat-frame#"+(Ce-1)+" GPU work done")}),Ce++,Ce===2&&gn(),requestAnimationFrame(Re)}requestAnimationFrame(Re)}}(function(){let l="dev";for(const k of Array.from(document.querySelectorAll('script[type="module"]'))){const C=k.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){l=C[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();function It(o){let l=document.getElementById("halloumi-xr-error");l||(l=document.createElement("div"),l.id="halloumi-xr-error",l.style.cssText="position:fixed;top:0;left:0;right:0;padding:1em;background:#3a0000;color:#ffb0b0;font-family:system-ui,monospace;font-size:0.85rem;z-index:9999;white-space:pre-wrap;overflow-x:auto;max-height:60vh;border-bottom:2px solid #7a0000",document.body.appendChild(l)),l.textContent+=(l.textContent?`
`:"")+o,console.error(o)}function Nt(o){console.log(o)}window.__halloumiProgress=Nt;window.__halloumiError=It;(async()=>{var o;try{if(Nt("boot: main.ts entered"),navigator.gpu===void 0){It("WebGPU is not supported in this browser. (navigator.gpu is undefined)");return}Nt("requesting adapter…");const l=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(l===null){It("WebGPU adapter unavailable. requestAdapter returned null.");return}Nt("adapter OK; vendor="+(((o=l.info)==null?void 0:o.vendor)??"?"));const f=[];l.features.has("timestamp-query")&&f.push("timestamp-query"),l.features.has("texture-compression-bc")&&f.push("texture-compression-bc"),l.features.has("texture-compression-astc")&&f.push("texture-compression-astc"),console.log("[adapter]",l.info??"(unknown)"),console.log("[adapter] features:",Array.from(l.features)),console.log("[adapter] BC7:",l.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",l.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:l.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize,maxTextureDimension2D:l.limits.maxTextureDimension2D});const k=10,x=Math.min(k,l.limits.maxStorageBuffersPerShaderStage);x<k&&console.warn(`[adapter] adapter exposes only ${x} storage buffers per stage; viewer wants ${k}. Cull stage may fail to compile.`),Nt("requesting device (features="+f.join(",")+")…");let C;try{C=await l.requestDevice({requiredFeatures:f,requiredLimits:{maxStorageBuffersPerShaderStage:x,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize}}),Nt("device OK")}catch(A){It(`WebGPU device creation FAILED.
error: ${A.message}

Adapter info: `+JSON.stringify(l.info??{})+`
Requested features: `+f.join(", ")+`
Requested maxStorageBuffersPerShaderStage: `+x);return}C.addEventListener("uncapturederror",A=>{const L=A.error;It(`WebGPU uncaptured error (${L.constructor.name}):
${L.message}`)}),C.lost.then(A=>{It(`WebGPU device LOST: ${A.reason} — ${A.message}`)});const M=document.querySelector("#webgpu-canvas");Tl(M!==null);const G=M.getContext("webgpu");if(G===null){It('canvas.getContext("webgpu") returned null.');return}Nt("canvas ctx OK; entering splat-app init…"),Ic(M,G,C,f)}catch(l){It(`Bootstrap failed: ${l.message}
${l.stack??""}`)}})();
