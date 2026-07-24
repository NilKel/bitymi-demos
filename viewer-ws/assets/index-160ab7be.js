var bl=Object.defineProperty;var vl=(i,l,f)=>l in i?bl(i,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[l]=f;var Q=(i,l,f)=>(vl(i,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))S(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&S(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function S(w){if(w.ep)return;w.ep=!0;const k=f(w);fetch(w.href,k)}})();function gl(i,l){return class extends i{constructor(...f){super(...f),l(this)}}}const wl=gl(Array,i=>i.fill(0));let Ve=1e-6;function xl(i){function l(y=0,E=0){const C=new i(2);return y!==void 0&&(C[0]=y,E!==void 0&&(C[1]=E)),C}const f=l;function S(y,E,C){const r=C??new i(2);return r[0]=y,r[1]=E,r}function w(y,E){const C=E??new i(2);return C[0]=Math.ceil(y[0]),C[1]=Math.ceil(y[1]),C}function k(y,E){const C=E??new i(2);return C[0]=Math.floor(y[0]),C[1]=Math.floor(y[1]),C}function M(y,E){const C=E??new i(2);return C[0]=Math.round(y[0]),C[1]=Math.round(y[1]),C}function F(y,E=0,C=1,r){const m=r??new i(2);return m[0]=Math.min(C,Math.max(E,y[0])),m[1]=Math.min(C,Math.max(E,y[1])),m}function T(y,E,C){const r=C??new i(2);return r[0]=y[0]+E[0],r[1]=y[1]+E[1],r}function L(y,E,C,r){const m=r??new i(2);return m[0]=y[0]+E[0]*C,m[1]=y[1]+E[1]*C,m}function O(y,E){const C=y[0],r=y[1],m=E[0],d=E[1],p=Math.sqrt(C*C+r*r),a=Math.sqrt(m*m+d*d),_=p*a,x=_&&K(y,E)/_;return Math.acos(x)}function G(y,E,C){const r=C??new i(2);return r[0]=y[0]-E[0],r[1]=y[1]-E[1],r}const Z=G;function U(y,E){return Math.abs(y[0]-E[0])<Ve&&Math.abs(y[1]-E[1])<Ve}function X(y,E){return y[0]===E[0]&&y[1]===E[1]}function H(y,E,C,r){const m=r??new i(2);return m[0]=y[0]+C*(E[0]-y[0]),m[1]=y[1]+C*(E[1]-y[1]),m}function q(y,E,C,r){const m=r??new i(2);return m[0]=y[0]+C[0]*(E[0]-y[0]),m[1]=y[1]+C[1]*(E[1]-y[1]),m}function de(y,E,C){const r=C??new i(2);return r[0]=Math.max(y[0],E[0]),r[1]=Math.max(y[1],E[1]),r}function R(y,E,C){const r=C??new i(2);return r[0]=Math.min(y[0],E[0]),r[1]=Math.min(y[1],E[1]),r}function J(y,E,C){const r=C??new i(2);return r[0]=y[0]*E,r[1]=y[1]*E,r}const j=J;function ee(y,E,C){const r=C??new i(2);return r[0]=y[0]/E,r[1]=y[1]/E,r}function I(y,E){const C=E??new i(2);return C[0]=1/y[0],C[1]=1/y[1],C}const he=I;function re(y,E,C){const r=C??new i(3),m=y[0]*E[1]-y[1]*E[0];return r[0]=0,r[1]=0,r[2]=m,r}function K(y,E){return y[0]*E[0]+y[1]*E[1]}function ae(y){const E=y[0],C=y[1];return Math.sqrt(E*E+C*C)}const be=ae;function ze(y){const E=y[0],C=y[1];return E*E+C*C}const Te=ze;function Ue(y,E){const C=y[0]-E[0],r=y[1]-E[1];return Math.sqrt(C*C+r*r)}const ge=Ue;function ye(y,E){const C=y[0]-E[0],r=y[1]-E[1];return C*C+r*r}const W=ye;function Y(y,E){const C=E??new i(2),r=y[0],m=y[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(C[0]=r/d,C[1]=m/d):(C[0]=0,C[1]=0),C}function ie(y,E){const C=E??new i(2);return C[0]=-y[0],C[1]=-y[1],C}function pe(y,E){const C=E??new i(2);return C[0]=y[0],C[1]=y[1],C}const Ee=pe;function we(y,E,C){const r=C??new i(2);return r[0]=y[0]*E[0],r[1]=y[1]*E[1],r}const ke=we;function Pe(y,E,C){const r=C??new i(2);return r[0]=y[0]/E[0],r[1]=y[1]/E[1],r}const De=Pe;function $e(y=1,E){const C=E??new i(2),r=Math.random()*2*Math.PI;return C[0]=Math.cos(r)*y,C[1]=Math.sin(r)*y,C}function B(y){const E=y??new i(2);return E[0]=0,E[1]=0,E}function N(y,E,C){const r=C??new i(2),m=y[0],d=y[1];return r[0]=m*E[0]+d*E[4]+E[12],r[1]=m*E[1]+d*E[5]+E[13],r}function g(y,E,C){const r=C??new i(2),m=y[0],d=y[1];return r[0]=E[0]*m+E[4]*d+E[8],r[1]=E[1]*m+E[5]*d+E[9],r}function o(y,E,C,r){const m=r??new i(2),d=y[0]-E[0],p=y[1]-E[1],a=Math.sin(C),_=Math.cos(C);return m[0]=d*_-p*a+E[0],m[1]=d*a+p*_+E[1],m}function h(y,E,C){const r=C??new i(2);return Y(y,r),J(r,E,r)}function u(y,E,C){const r=C??new i(2);return ae(y)>E?h(y,E,r):pe(y,r)}function b(y,E,C){const r=C??new i(2);return H(y,E,.5,r)}return{create:l,fromValues:f,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:L,angle:O,subtract:G,sub:Z,equalsApproximately:U,equals:X,lerp:H,lerpV:q,max:de,min:R,mulScalar:J,scale:j,divScalar:ee,inverse:I,invert:he,cross:re,dot:K,length:ae,len:be,lengthSq:ze,lenSq:Te,distance:Ue,dist:ge,distanceSq:ye,distSq:W,normalize:Y,negate:ie,copy:pe,clone:Ee,multiply:we,mul:ke,divide:Pe,div:De,random:$e,zero:B,transformMat4:N,transformMat3:g,rotate:o,setLength:h,truncate:u,midpoint:b}}const Dr=new Map;function Kr(i){let l=Dr.get(i);return l||(l=xl(i),Dr.set(i,l)),l}function yl(i){function l(a,_,x){const v=new i(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,x!==void 0&&(v[2]=x))),v}const f=l;function S(a,_,x,v){const A=v??new i(3);return A[0]=a,A[1]=_,A[2]=x,A}function w(a,_){const x=_??new i(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,_){const x=_??new i(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function M(a,_){const x=_??new i(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function F(a,_=0,x=1,v){const A=v??new i(3);return A[0]=Math.min(x,Math.max(_,a[0])),A[1]=Math.min(x,Math.max(_,a[1])),A[2]=Math.min(x,Math.max(_,a[2])),A}function T(a,_,x){const v=x??new i(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function L(a,_,x,v){const A=v??new i(3);return A[0]=a[0]+_[0]*x,A[1]=a[1]+_[1]*x,A[2]=a[2]+_[2]*x,A}function O(a,_){const x=a[0],v=a[1],A=a[2],V=_[0],$=_[1],ce=_[2],oe=Math.sqrt(x*x+v*v+A*A),se=Math.sqrt(V*V+$*$+ce*ce),me=oe*se,Se=me&&K(a,_)/me;return Math.acos(Se)}function G(a,_,x){const v=x??new i(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const Z=G;function U(a,_){return Math.abs(a[0]-_[0])<Ve&&Math.abs(a[1]-_[1])<Ve&&Math.abs(a[2]-_[2])<Ve}function X(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function H(a,_,x,v){const A=v??new i(3);return A[0]=a[0]+x*(_[0]-a[0]),A[1]=a[1]+x*(_[1]-a[1]),A[2]=a[2]+x*(_[2]-a[2]),A}function q(a,_,x,v){const A=v??new i(3);return A[0]=a[0]+x[0]*(_[0]-a[0]),A[1]=a[1]+x[1]*(_[1]-a[1]),A[2]=a[2]+x[2]*(_[2]-a[2]),A}function de(a,_,x){const v=x??new i(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function R(a,_,x){const v=x??new i(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function J(a,_,x){const v=x??new i(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const j=J;function ee(a,_,x){const v=x??new i(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function I(a,_){const x=_??new i(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const he=I;function re(a,_,x){const v=x??new i(3),A=a[2]*_[0]-a[0]*_[2],V=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=A,v[2]=V,v}function K(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function ae(a){const _=a[0],x=a[1],v=a[2];return Math.sqrt(_*_+x*x+v*v)}const be=ae;function ze(a){const _=a[0],x=a[1],v=a[2];return _*_+x*x+v*v}const Te=ze;function Ue(a,_){const x=a[0]-_[0],v=a[1]-_[1],A=a[2]-_[2];return Math.sqrt(x*x+v*v+A*A)}const ge=Ue;function ye(a,_){const x=a[0]-_[0],v=a[1]-_[1],A=a[2]-_[2];return x*x+v*v+A*A}const W=ye;function Y(a,_){const x=_??new i(3),v=a[0],A=a[1],V=a[2],$=Math.sqrt(v*v+A*A+V*V);return $>1e-5?(x[0]=v/$,x[1]=A/$,x[2]=V/$):(x[0]=0,x[1]=0,x[2]=0),x}function ie(a,_){const x=_??new i(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function pe(a,_){const x=_??new i(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const Ee=pe;function we(a,_,x){const v=x??new i(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const ke=we;function Pe(a,_,x){const v=x??new i(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const De=Pe;function $e(a=1,_){const x=_??new i(3),v=Math.random()*2*Math.PI,A=Math.random()*2-1,V=Math.sqrt(1-A*A)*a;return x[0]=Math.cos(v)*V,x[1]=Math.sin(v)*V,x[2]=A*a,x}function B(a){const _=a??new i(3);return _[0]=0,_[1]=0,_[2]=0,_}function N(a,_,x){const v=x??new i(3),A=a[0],V=a[1],$=a[2],ce=_[3]*A+_[7]*V+_[11]*$+_[15]||1;return v[0]=(_[0]*A+_[4]*V+_[8]*$+_[12])/ce,v[1]=(_[1]*A+_[5]*V+_[9]*$+_[13])/ce,v[2]=(_[2]*A+_[6]*V+_[10]*$+_[14])/ce,v}function g(a,_,x){const v=x??new i(3),A=a[0],V=a[1],$=a[2];return v[0]=A*_[0*4+0]+V*_[1*4+0]+$*_[2*4+0],v[1]=A*_[0*4+1]+V*_[1*4+1]+$*_[2*4+1],v[2]=A*_[0*4+2]+V*_[1*4+2]+$*_[2*4+2],v}function o(a,_,x){const v=x??new i(3),A=a[0],V=a[1],$=a[2];return v[0]=A*_[0]+V*_[4]+$*_[8],v[1]=A*_[1]+V*_[5]+$*_[9],v[2]=A*_[2]+V*_[6]+$*_[10],v}function h(a,_,x){const v=x??new i(3),A=_[0],V=_[1],$=_[2],ce=_[3]*2,oe=a[0],se=a[1],me=a[2],Se=V*me-$*se,fe=$*oe-A*me,ve=A*se-V*oe;return v[0]=oe+Se*ce+(V*ve-$*fe)*2,v[1]=se+fe*ce+($*Se-A*ve)*2,v[2]=me+ve*ce+(A*fe-V*Se)*2,v}function u(a,_){const x=_??new i(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function b(a,_,x){const v=x??new i(3),A=_*4;return v[0]=a[A+0],v[1]=a[A+1],v[2]=a[A+2],v}function y(a,_){const x=_??new i(3),v=a[0],A=a[1],V=a[2],$=a[4],ce=a[5],oe=a[6],se=a[8],me=a[9],Se=a[10];return x[0]=Math.sqrt(v*v+A*A+V*V),x[1]=Math.sqrt($*$+ce*ce+oe*oe),x[2]=Math.sqrt(se*se+me*me+Se*Se),x}function E(a,_,x,v){const A=v??new i(3),V=[],$=[];return V[0]=a[0]-_[0],V[1]=a[1]-_[1],V[2]=a[2]-_[2],$[0]=V[0],$[1]=V[1]*Math.cos(x)-V[2]*Math.sin(x),$[2]=V[1]*Math.sin(x)+V[2]*Math.cos(x),A[0]=$[0]+_[0],A[1]=$[1]+_[1],A[2]=$[2]+_[2],A}function C(a,_,x,v){const A=v??new i(3),V=[],$=[];return V[0]=a[0]-_[0],V[1]=a[1]-_[1],V[2]=a[2]-_[2],$[0]=V[2]*Math.sin(x)+V[0]*Math.cos(x),$[1]=V[1],$[2]=V[2]*Math.cos(x)-V[0]*Math.sin(x),A[0]=$[0]+_[0],A[1]=$[1]+_[1],A[2]=$[2]+_[2],A}function r(a,_,x,v){const A=v??new i(3),V=[],$=[];return V[0]=a[0]-_[0],V[1]=a[1]-_[1],V[2]=a[2]-_[2],$[0]=V[0]*Math.cos(x)-V[1]*Math.sin(x),$[1]=V[0]*Math.sin(x)+V[1]*Math.cos(x),$[2]=V[2],A[0]=$[0]+_[0],A[1]=$[1]+_[1],A[2]=$[2]+_[2],A}function m(a,_,x){const v=x??new i(3);return Y(a,v),J(v,_,v)}function d(a,_,x){const v=x??new i(3);return ae(a)>_?m(a,_,v):pe(a,v)}function p(a,_,x){const v=x??new i(3);return H(a,_,.5,v)}return{create:l,fromValues:f,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:L,angle:O,subtract:G,sub:Z,equalsApproximately:U,equals:X,lerp:H,lerpV:q,max:de,min:R,mulScalar:J,scale:j,divScalar:ee,inverse:I,invert:he,cross:re,dot:K,length:ae,len:be,lengthSq:ze,lenSq:Te,distance:Ue,dist:ge,distanceSq:ye,distSq:W,normalize:Y,negate:ie,copy:pe,clone:Ee,multiply:we,mul:ke,divide:Pe,div:De,random:$e,zero:B,transformMat4:N,transformMat4Upper3x3:g,transformMat3:o,transformQuat:h,getTranslation:u,getAxis:b,getScaling:y,rotateX:E,rotateY:C,rotateZ:r,setLength:m,truncate:d,midpoint:p}}const Ar=new Map;function Un(i){let l=Ar.get(i);return l||(l=yl(i),Ar.set(i,l)),l}function Pl(i){const l=Kr(i),f=Un(i);function S(o,h,u,b,y,E,C,r,m){const d=new i(12);return d[3]=0,d[7]=0,d[11]=0,o!==void 0&&(d[0]=o,h!==void 0&&(d[1]=h,u!==void 0&&(d[2]=u,b!==void 0&&(d[4]=b,y!==void 0&&(d[5]=y,E!==void 0&&(d[6]=E,C!==void 0&&(d[8]=C,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(o,h,u,b,y,E,C,r,m,d){const p=d??new i(12);return p[0]=o,p[1]=h,p[2]=u,p[3]=0,p[4]=b,p[5]=y,p[6]=E,p[7]=0,p[8]=C,p[9]=r,p[10]=m,p[11]=0,p}function k(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=o[1],u[2]=o[2],u[3]=0,u[4]=o[4],u[5]=o[5],u[6]=o[6],u[7]=0,u[8]=o[8],u[9]=o[9],u[10]=o[10],u[11]=0,u}function M(o,h){const u=h??new i(12),b=o[0],y=o[1],E=o[2],C=o[3],r=b+b,m=y+y,d=E+E,p=b*r,a=y*r,_=y*m,x=E*r,v=E*m,A=E*d,V=C*r,$=C*m,ce=C*d;return u[0]=1-_-A,u[1]=a+ce,u[2]=x-$,u[3]=0,u[4]=a-ce,u[5]=1-p-A,u[6]=v+V,u[7]=0,u[8]=x+$,u[9]=v-V,u[10]=1-p-_,u[11]=0,u}function F(o,h){const u=h??new i(12);return u[0]=-o[0],u[1]=-o[1],u[2]=-o[2],u[4]=-o[4],u[5]=-o[5],u[6]=-o[6],u[8]=-o[8],u[9]=-o[9],u[10]=-o[10],u}function T(o,h,u){const b=u??new i(12);return b[0]=o[0]*h,b[1]=o[1]*h,b[2]=o[2]*h,b[4]=o[4]*h,b[5]=o[5]*h,b[6]=o[6]*h,b[8]=o[8]*h,b[9]=o[9]*h,b[10]=o[10]*h,b}const L=T;function O(o,h,u){const b=u??new i(12);return b[0]=o[0]+h[0],b[1]=o[1]+h[1],b[2]=o[2]+h[2],b[4]=o[4]+h[4],b[5]=o[5]+h[5],b[6]=o[6]+h[6],b[8]=o[8]+h[8],b[9]=o[9]+h[9],b[10]=o[10]+h[10],b}function G(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=o[1],u[2]=o[2],u[4]=o[4],u[5]=o[5],u[6]=o[6],u[8]=o[8],u[9]=o[9],u[10]=o[10],u}const Z=G;function U(o,h){return Math.abs(o[0]-h[0])<Ve&&Math.abs(o[1]-h[1])<Ve&&Math.abs(o[2]-h[2])<Ve&&Math.abs(o[4]-h[4])<Ve&&Math.abs(o[5]-h[5])<Ve&&Math.abs(o[6]-h[6])<Ve&&Math.abs(o[8]-h[8])<Ve&&Math.abs(o[9]-h[9])<Ve&&Math.abs(o[10]-h[10])<Ve}function X(o,h){return o[0]===h[0]&&o[1]===h[1]&&o[2]===h[2]&&o[4]===h[4]&&o[5]===h[5]&&o[6]===h[6]&&o[8]===h[8]&&o[9]===h[9]&&o[10]===h[10]}function H(o){const h=o??new i(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function q(o,h){const u=h??new i(12);if(u===o){let _;return _=o[1],o[1]=o[4],o[4]=_,_=o[2],o[2]=o[8],o[8]=_,_=o[6],o[6]=o[9],o[9]=_,u}const b=o[0*4+0],y=o[0*4+1],E=o[0*4+2],C=o[1*4+0],r=o[1*4+1],m=o[1*4+2],d=o[2*4+0],p=o[2*4+1],a=o[2*4+2];return u[0]=b,u[1]=C,u[2]=d,u[4]=y,u[5]=r,u[6]=p,u[8]=E,u[9]=m,u[10]=a,u}function de(o,h){const u=h??new i(12),b=o[0*4+0],y=o[0*4+1],E=o[0*4+2],C=o[1*4+0],r=o[1*4+1],m=o[1*4+2],d=o[2*4+0],p=o[2*4+1],a=o[2*4+2],_=a*r-m*p,x=-a*C+m*d,v=p*C-r*d,A=1/(b*_+y*x+E*v);return u[0]=_*A,u[1]=(-a*y+E*p)*A,u[2]=(m*y-E*r)*A,u[4]=x*A,u[5]=(a*b-E*d)*A,u[6]=(-m*b+E*C)*A,u[8]=v*A,u[9]=(-p*b+y*d)*A,u[10]=(r*b-y*C)*A,u}function R(o){const h=o[0],u=o[0*4+1],b=o[0*4+2],y=o[1*4+0],E=o[1*4+1],C=o[1*4+2],r=o[2*4+0],m=o[2*4+1],d=o[2*4+2];return h*(E*d-m*C)-y*(u*d-m*b)+r*(u*C-E*b)}const J=de;function j(o,h,u){const b=u??new i(12),y=o[0],E=o[1],C=o[2],r=o[4+0],m=o[4+1],d=o[4+2],p=o[8+0],a=o[8+1],_=o[8+2],x=h[0],v=h[1],A=h[2],V=h[4+0],$=h[4+1],ce=h[4+2],oe=h[8+0],se=h[8+1],me=h[8+2];return b[0]=y*x+r*v+p*A,b[1]=E*x+m*v+a*A,b[2]=C*x+d*v+_*A,b[4]=y*V+r*$+p*ce,b[5]=E*V+m*$+a*ce,b[6]=C*V+d*$+_*ce,b[8]=y*oe+r*se+p*me,b[9]=E*oe+m*se+a*me,b[10]=C*oe+d*se+_*me,b}const ee=j;function I(o,h,u){const b=u??H();return o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[4]=o[4],b[5]=o[5],b[6]=o[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function he(o,h){const u=h??l.create();return u[0]=o[8],u[1]=o[9],u}function re(o,h,u){const b=u??l.create(),y=h*4;return b[0]=o[y+0],b[1]=o[y+1],b}function K(o,h,u,b){const y=b===o?o:G(o,b),E=u*4;return y[E+0]=h[0],y[E+1]=h[1],y}function ae(o,h){const u=h??l.create(),b=o[0],y=o[1],E=o[4],C=o[5];return u[0]=Math.sqrt(b*b+y*y),u[1]=Math.sqrt(E*E+C*C),u}function be(o,h){const u=h??f.create(),b=o[0],y=o[1],E=o[2],C=o[4],r=o[5],m=o[6],d=o[8],p=o[9],a=o[10];return u[0]=Math.sqrt(b*b+y*y+E*E),u[1]=Math.sqrt(C*C+r*r+m*m),u[2]=Math.sqrt(d*d+p*p+a*a),u}function ze(o,h){const u=h??new i(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=o[0],u[9]=o[1],u[10]=1,u}function Te(o,h,u){const b=u??new i(12),y=h[0],E=h[1],C=o[0],r=o[1],m=o[2],d=o[1*4+0],p=o[1*4+1],a=o[1*4+2],_=o[2*4+0],x=o[2*4+1],v=o[2*4+2];return o!==b&&(b[0]=C,b[1]=r,b[2]=m,b[4]=d,b[5]=p,b[6]=a),b[8]=C*y+d*E+_,b[9]=r*y+p*E+x,b[10]=m*y+a*E+v,b}function Ue(o,h){const u=h??new i(12),b=Math.cos(o),y=Math.sin(o);return u[0]=b,u[1]=y,u[2]=0,u[4]=-y,u[5]=b,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ge(o,h,u){const b=u??new i(12),y=o[0*4+0],E=o[0*4+1],C=o[0*4+2],r=o[1*4+0],m=o[1*4+1],d=o[1*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y+a*r,b[1]=p*E+a*m,b[2]=p*C+a*d,b[4]=p*r-a*y,b[5]=p*m-a*E,b[6]=p*d-a*C,o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function ye(o,h){const u=h??new i(12),b=Math.cos(o),y=Math.sin(o);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=b,u[6]=y,u[8]=0,u[9]=-y,u[10]=b,u}function W(o,h,u){const b=u??new i(12),y=o[4],E=o[5],C=o[6],r=o[8],m=o[9],d=o[10],p=Math.cos(h),a=Math.sin(h);return b[4]=p*y+a*r,b[5]=p*E+a*m,b[6]=p*C+a*d,b[8]=p*r-a*y,b[9]=p*m-a*E,b[10]=p*d-a*C,o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2]),b}function Y(o,h){const u=h??new i(12),b=Math.cos(o),y=Math.sin(o);return u[0]=b,u[1]=0,u[2]=-y,u[4]=0,u[5]=1,u[6]=0,u[8]=y,u[9]=0,u[10]=b,u}function ie(o,h,u){const b=u??new i(12),y=o[0*4+0],E=o[0*4+1],C=o[0*4+2],r=o[2*4+0],m=o[2*4+1],d=o[2*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y-a*r,b[1]=p*E-a*m,b[2]=p*C-a*d,b[8]=p*r+a*y,b[9]=p*m+a*E,b[10]=p*d+a*C,o!==b&&(b[4]=o[4],b[5]=o[5],b[6]=o[6]),b}const pe=Ue,Ee=ge;function we(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=0,u[2]=0,u[4]=0,u[5]=o[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ke(o,h,u){const b=u??new i(12),y=h[0],E=h[1];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=E*o[1*4+0],b[5]=E*o[1*4+1],b[6]=E*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function Pe(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=0,u[2]=0,u[4]=0,u[5]=o[1],u[6]=0,u[8]=0,u[9]=0,u[10]=o[2],u}function De(o,h,u){const b=u??new i(12),y=h[0],E=h[1],C=h[2];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=E*o[1*4+0],b[5]=E*o[1*4+1],b[6]=E*o[1*4+2],b[8]=C*o[2*4+0],b[9]=C*o[2*4+1],b[10]=C*o[2*4+2],b}function $e(o,h){const u=h??new i(12);return u[0]=o,u[1]=0,u[2]=0,u[4]=0,u[5]=o,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function B(o,h,u){const b=u??new i(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function N(o,h){const u=h??new i(12);return u[0]=o,u[1]=0,u[2]=0,u[4]=0,u[5]=o,u[6]=0,u[8]=0,u[9]=0,u[10]=o,u}function g(o,h,u){const b=u??new i(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],b[8]=h*o[2*4+0],b[9]=h*o[2*4+1],b[10]=h*o[2*4+2],b}return{add:O,clone:Z,copy:G,create:S,determinant:R,equals:X,equalsApproximately:U,fromMat4:k,fromQuat:M,get3DScaling:be,getAxis:re,getScaling:ae,getTranslation:he,identity:H,inverse:de,invert:J,mul:ee,mulScalar:L,multiply:j,multiplyScalar:T,negate:F,rotate:ge,rotateX:W,rotateY:ie,rotateZ:Ee,rotation:Ue,rotationX:ye,rotationY:Y,rotationZ:pe,scale:ke,scale3D:De,scaling:we,scaling3D:Pe,set:w,setAxis:K,setTranslation:I,translate:Te,translation:ze,transpose:q,uniformScale:B,uniformScale3D:g,uniformScaling:$e,uniformScaling3D:N}}const Lr=new Map;function Sl(i){let l=Lr.get(i);return l||(l=Pl(i),Lr.set(i,l)),l}function Cl(i){const l=Un(i);function f(r,m,d,p,a,_,x,v,A,V,$,ce,oe,se,me,Se){const fe=new i(16);return r!==void 0&&(fe[0]=r,m!==void 0&&(fe[1]=m,d!==void 0&&(fe[2]=d,p!==void 0&&(fe[3]=p,a!==void 0&&(fe[4]=a,_!==void 0&&(fe[5]=_,x!==void 0&&(fe[6]=x,v!==void 0&&(fe[7]=v,A!==void 0&&(fe[8]=A,V!==void 0&&(fe[9]=V,$!==void 0&&(fe[10]=$,ce!==void 0&&(fe[11]=ce,oe!==void 0&&(fe[12]=oe,se!==void 0&&(fe[13]=se,me!==void 0&&(fe[14]=me,Se!==void 0&&(fe[15]=Se)))))))))))))))),fe}function S(r,m,d,p,a,_,x,v,A,V,$,ce,oe,se,me,Se,fe){const ve=fe??new i(16);return ve[0]=r,ve[1]=m,ve[2]=d,ve[3]=p,ve[4]=a,ve[5]=_,ve[6]=x,ve[7]=v,ve[8]=A,ve[9]=V,ve[10]=$,ve[11]=ce,ve[12]=oe,ve[13]=se,ve[14]=me,ve[15]=Se,ve}function w(r,m){const d=m??new i(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function k(r,m){const d=m??new i(16),p=r[0],a=r[1],_=r[2],x=r[3],v=p+p,A=a+a,V=_+_,$=p*v,ce=a*v,oe=a*A,se=_*v,me=_*A,Se=_*V,fe=x*v,ve=x*A,Ge=x*V;return d[0]=1-oe-Se,d[1]=ce+Ge,d[2]=se-ve,d[3]=0,d[4]=ce-Ge,d[5]=1-$-Se,d[6]=me+fe,d[7]=0,d[8]=se+ve,d[9]=me-fe,d[10]=1-$-oe,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new i(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function F(r,m,d){const p=d??new i(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function T(r,m,d){const p=d??new i(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const L=T;function O(r,m){const d=m??new i(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const G=O;function Z(r,m){return Math.abs(r[0]-m[0])<Ve&&Math.abs(r[1]-m[1])<Ve&&Math.abs(r[2]-m[2])<Ve&&Math.abs(r[3]-m[3])<Ve&&Math.abs(r[4]-m[4])<Ve&&Math.abs(r[5]-m[5])<Ve&&Math.abs(r[6]-m[6])<Ve&&Math.abs(r[7]-m[7])<Ve&&Math.abs(r[8]-m[8])<Ve&&Math.abs(r[9]-m[9])<Ve&&Math.abs(r[10]-m[10])<Ve&&Math.abs(r[11]-m[11])<Ve&&Math.abs(r[12]-m[12])<Ve&&Math.abs(r[13]-m[13])<Ve&&Math.abs(r[14]-m[14])<Ve&&Math.abs(r[15]-m[15])<Ve}function U(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function X(r){const m=r??new i(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function H(r,m){const d=m??new i(16);if(d===r){let Re;return Re=r[1],r[1]=r[4],r[4]=Re,Re=r[2],r[2]=r[8],r[8]=Re,Re=r[3],r[3]=r[12],r[12]=Re,Re=r[6],r[6]=r[9],r[9]=Re,Re=r[7],r[7]=r[13],r[13]=Re,Re=r[11],r[11]=r[14],r[14]=Re,d}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],v=r[1*4+0],A=r[1*4+1],V=r[1*4+2],$=r[1*4+3],ce=r[2*4+0],oe=r[2*4+1],se=r[2*4+2],me=r[2*4+3],Se=r[3*4+0],fe=r[3*4+1],ve=r[3*4+2],Ge=r[3*4+3];return d[0]=p,d[1]=v,d[2]=ce,d[3]=Se,d[4]=a,d[5]=A,d[6]=oe,d[7]=fe,d[8]=_,d[9]=V,d[10]=se,d[11]=ve,d[12]=x,d[13]=$,d[14]=me,d[15]=Ge,d}function q(r,m){const d=m??new i(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],v=r[1*4+0],A=r[1*4+1],V=r[1*4+2],$=r[1*4+3],ce=r[2*4+0],oe=r[2*4+1],se=r[2*4+2],me=r[2*4+3],Se=r[3*4+0],fe=r[3*4+1],ve=r[3*4+2],Ge=r[3*4+3],Re=se*Ge,Ke=ve*me,Ye=V*Ge,He=ve*$,te=V*me,ue=se*$,le=_*Ge,Ce=ve*x,Ae=_*me,_e=se*x,xe=_*$,Ie=V*x,Me=ce*fe,Oe=Se*oe,Ne=v*fe,tt=Se*A,Xe=v*oe,ht=ce*A,dt=p*fe,pt=Se*a,ft=p*oe,St=ce*a,mt=p*A,Ct=v*a,Lt=Re*A+He*oe+te*fe-(Ke*A+Ye*oe+ue*fe),Qe=Ke*a+le*oe+_e*fe-(Re*a+Ce*oe+Ae*fe),_t=Ye*a+Ce*A+xe*fe-(He*a+le*A+Ie*fe),bt=ue*a+Ae*A+Ie*oe-(te*a+_e*A+xe*oe),je=1/(p*Lt+v*Qe+ce*_t+Se*bt);return d[0]=je*Lt,d[1]=je*Qe,d[2]=je*_t,d[3]=je*bt,d[4]=je*(Ke*v+Ye*ce+ue*Se-(Re*v+He*ce+te*Se)),d[5]=je*(Re*p+Ce*ce+Ae*Se-(Ke*p+le*ce+_e*Se)),d[6]=je*(He*p+le*v+Ie*Se-(Ye*p+Ce*v+xe*Se)),d[7]=je*(te*p+_e*v+xe*ce-(ue*p+Ae*v+Ie*ce)),d[8]=je*(Me*$+tt*me+Xe*Ge-(Oe*$+Ne*me+ht*Ge)),d[9]=je*(Oe*x+dt*me+St*Ge-(Me*x+pt*me+ft*Ge)),d[10]=je*(Ne*x+pt*$+mt*Ge-(tt*x+dt*$+Ct*Ge)),d[11]=je*(ht*x+ft*$+Ct*me-(Xe*x+St*$+mt*me)),d[12]=je*(Ne*se+ht*ve+Oe*V-(Xe*ve+Me*V+tt*se)),d[13]=je*(ft*ve+Me*_+pt*se-(dt*se+St*ve+Oe*_)),d[14]=je*(dt*V+Ct*ve+tt*_-(mt*ve+Ne*_+pt*V)),d[15]=je*(mt*se+Xe*_+St*V-(ft*V+Ct*se+ht*_)),d}function de(r){const m=r[0],d=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],x=r[1*4+1],v=r[1*4+2],A=r[1*4+3],V=r[2*4+0],$=r[2*4+1],ce=r[2*4+2],oe=r[2*4+3],se=r[3*4+0],me=r[3*4+1],Se=r[3*4+2],fe=r[3*4+3],ve=ce*fe,Ge=Se*oe,Re=v*fe,Ke=Se*A,Ye=v*oe,He=ce*A,te=p*fe,ue=Se*a,le=p*oe,Ce=ce*a,Ae=p*A,_e=v*a,xe=ve*x+Ke*$+Ye*me-(Ge*x+Re*$+He*me),Ie=Ge*d+te*$+Ce*me-(ve*d+ue*$+le*me),Me=Re*d+ue*x+Ae*me-(Ke*d+te*x+_e*me),Oe=He*d+le*x+_e*$-(Ye*d+Ce*x+Ae*$);return m*xe+_*Ie+V*Me+se*Oe}const R=q;function J(r,m,d){const p=d??new i(16),a=r[0],_=r[1],x=r[2],v=r[3],A=r[4+0],V=r[4+1],$=r[4+2],ce=r[4+3],oe=r[8+0],se=r[8+1],me=r[8+2],Se=r[8+3],fe=r[12+0],ve=r[12+1],Ge=r[12+2],Re=r[12+3],Ke=m[0],Ye=m[1],He=m[2],te=m[3],ue=m[4+0],le=m[4+1],Ce=m[4+2],Ae=m[4+3],_e=m[8+0],xe=m[8+1],Ie=m[8+2],Me=m[8+3],Oe=m[12+0],Ne=m[12+1],tt=m[12+2],Xe=m[12+3];return p[0]=a*Ke+A*Ye+oe*He+fe*te,p[1]=_*Ke+V*Ye+se*He+ve*te,p[2]=x*Ke+$*Ye+me*He+Ge*te,p[3]=v*Ke+ce*Ye+Se*He+Re*te,p[4]=a*ue+A*le+oe*Ce+fe*Ae,p[5]=_*ue+V*le+se*Ce+ve*Ae,p[6]=x*ue+$*le+me*Ce+Ge*Ae,p[7]=v*ue+ce*le+Se*Ce+Re*Ae,p[8]=a*_e+A*xe+oe*Ie+fe*Me,p[9]=_*_e+V*xe+se*Ie+ve*Me,p[10]=x*_e+$*xe+me*Ie+Ge*Me,p[11]=v*_e+ce*xe+Se*Ie+Re*Me,p[12]=a*Oe+A*Ne+oe*tt+fe*Xe,p[13]=_*Oe+V*Ne+se*tt+ve*Xe,p[14]=x*Oe+$*Ne+me*tt+Ge*Xe,p[15]=v*Oe+ce*Ne+Se*tt+Re*Xe,p}const j=J;function ee(r,m,d){const p=d??X();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function I(r,m){const d=m??l.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function he(r,m,d){const p=d??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function re(r,m,d,p){const a=p===r?p:O(r,p),_=d*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function K(r,m){const d=m??l.create(),p=r[0],a=r[1],_=r[2],x=r[4],v=r[5],A=r[6],V=r[8],$=r[9],ce=r[10];return d[0]=Math.sqrt(p*p+a*a+_*_),d[1]=Math.sqrt(x*x+v*v+A*A),d[2]=Math.sqrt(V*V+$*$+ce*ce),d}function ae(r,m,d,p,a){const _=a??new i(16),x=Math.tan(Math.PI*.5-.5*r);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(d-p);_[10]=p*v,_[14]=p*d*v}else _[10]=-1,_[14]=-d;return _}function be(r,m,d,p=1/0,a){const _=a??new i(16),x=1/Math.tan(r*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=d;else{const v=1/(p-d);_[10]=d*v,_[14]=p*d*v}return _}function ze(r,m,d,p,a,_,x){const v=x??new i(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-d),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(p+d)/(d-p),v[14]=a/(a-_),v[15]=1,v}function Te(r,m,d,p,a,_,x){const v=x??new i(16),A=m-r,V=p-d,$=a-_;return v[0]=2*a/A,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/V,v[6]=0,v[7]=0,v[8]=(r+m)/A,v[9]=(p+d)/V,v[10]=_/$,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/$,v[15]=0,v}function Ue(r,m,d,p,a,_=1/0,x){const v=x??new i(16),A=m-r,V=p-d;if(v[0]=2*a/A,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/V,v[6]=0,v[7]=0,v[8]=(r+m)/A,v[9]=(p+d)/V,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const $=1/(_-a);v[10]=a*$,v[14]=_*a*$}return v}const ge=l.create(),ye=l.create(),W=l.create();function Y(r,m,d,p){const a=p??new i(16);return l.normalize(l.subtract(m,r,W),W),l.normalize(l.cross(d,W,ge),ge),l.normalize(l.cross(W,ge,ye),ye),a[0]=ge[0],a[1]=ge[1],a[2]=ge[2],a[3]=0,a[4]=ye[0],a[5]=ye[1],a[6]=ye[2],a[7]=0,a[8]=W[0],a[9]=W[1],a[10]=W[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function ie(r,m,d,p){const a=p??new i(16);return l.normalize(l.subtract(r,m,W),W),l.normalize(l.cross(d,W,ge),ge),l.normalize(l.cross(W,ge,ye),ye),a[0]=ge[0],a[1]=ge[1],a[2]=ge[2],a[3]=0,a[4]=ye[0],a[5]=ye[1],a[6]=ye[2],a[7]=0,a[8]=W[0],a[9]=W[1],a[10]=W[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function pe(r,m,d,p){const a=p??new i(16);return l.normalize(l.subtract(r,m,W),W),l.normalize(l.cross(d,W,ge),ge),l.normalize(l.cross(W,ge,ye),ye),a[0]=ge[0],a[1]=ye[0],a[2]=W[0],a[3]=0,a[4]=ge[1],a[5]=ye[1],a[6]=W[1],a[7]=0,a[8]=ge[2],a[9]=ye[2],a[10]=W[2],a[11]=0,a[12]=-(ge[0]*r[0]+ge[1]*r[1]+ge[2]*r[2]),a[13]=-(ye[0]*r[0]+ye[1]*r[1]+ye[2]*r[2]),a[14]=-(W[0]*r[0]+W[1]*r[1]+W[2]*r[2]),a[15]=1,a}function Ee(r,m){const d=m??new i(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function we(r,m,d){const p=d??new i(16),a=m[0],_=m[1],x=m[2],v=r[0],A=r[1],V=r[2],$=r[3],ce=r[1*4+0],oe=r[1*4+1],se=r[1*4+2],me=r[1*4+3],Se=r[2*4+0],fe=r[2*4+1],ve=r[2*4+2],Ge=r[2*4+3],Re=r[3*4+0],Ke=r[3*4+1],Ye=r[3*4+2],He=r[3*4+3];return r!==p&&(p[0]=v,p[1]=A,p[2]=V,p[3]=$,p[4]=ce,p[5]=oe,p[6]=se,p[7]=me,p[8]=Se,p[9]=fe,p[10]=ve,p[11]=Ge),p[12]=v*a+ce*_+Se*x+Re,p[13]=A*a+oe*_+fe*x+Ke,p[14]=V*a+se*_+ve*x+Ye,p[15]=$*a+me*_+Ge*x+He,p}function ke(r,m){const d=m??new i(16),p=Math.cos(r),a=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=a,d[7]=0,d[8]=0,d[9]=-a,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Pe(r,m,d){const p=d??new i(16),a=r[4],_=r[5],x=r[6],v=r[7],A=r[8],V=r[9],$=r[10],ce=r[11],oe=Math.cos(m),se=Math.sin(m);return p[4]=oe*a+se*A,p[5]=oe*_+se*V,p[6]=oe*x+se*$,p[7]=oe*v+se*ce,p[8]=oe*A-se*a,p[9]=oe*V-se*_,p[10]=oe*$-se*x,p[11]=oe*ce-se*v,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function De(r,m){const d=m??new i(16),p=Math.cos(r),a=Math.sin(r);return d[0]=p,d[1]=0,d[2]=-a,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=a,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function $e(r,m,d){const p=d??new i(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],v=r[0*4+3],A=r[2*4+0],V=r[2*4+1],$=r[2*4+2],ce=r[2*4+3],oe=Math.cos(m),se=Math.sin(m);return p[0]=oe*a-se*A,p[1]=oe*_-se*V,p[2]=oe*x-se*$,p[3]=oe*v-se*ce,p[8]=oe*A+se*a,p[9]=oe*V+se*_,p[10]=oe*$+se*x,p[11]=oe*ce+se*v,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const d=m??new i(16),p=Math.cos(r),a=Math.sin(r);return d[0]=p,d[1]=a,d[2]=0,d[3]=0,d[4]=-a,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function N(r,m,d){const p=d??new i(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],v=r[0*4+3],A=r[1*4+0],V=r[1*4+1],$=r[1*4+2],ce=r[1*4+3],oe=Math.cos(m),se=Math.sin(m);return p[0]=oe*a+se*A,p[1]=oe*_+se*V,p[2]=oe*x+se*$,p[3]=oe*v+se*ce,p[4]=oe*A-se*a,p[5]=oe*V-se*_,p[6]=oe*$-se*x,p[7]=oe*ce-se*v,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function g(r,m,d){const p=d??new i(16);let a=r[0],_=r[1],x=r[2];const v=Math.sqrt(a*a+_*_+x*x);a/=v,_/=v,x/=v;const A=a*a,V=_*_,$=x*x,ce=Math.cos(m),oe=Math.sin(m),se=1-ce;return p[0]=A+(1-A)*ce,p[1]=a*_*se+x*oe,p[2]=a*x*se-_*oe,p[3]=0,p[4]=a*_*se-x*oe,p[5]=V+(1-V)*ce,p[6]=_*x*se+a*oe,p[7]=0,p[8]=a*x*se+_*oe,p[9]=_*x*se-a*oe,p[10]=$+(1-$)*ce,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const o=g;function h(r,m,d,p){const a=p??new i(16);let _=m[0],x=m[1],v=m[2];const A=Math.sqrt(_*_+x*x+v*v);_/=A,x/=A,v/=A;const V=_*_,$=x*x,ce=v*v,oe=Math.cos(d),se=Math.sin(d),me=1-oe,Se=V+(1-V)*oe,fe=_*x*me+v*se,ve=_*v*me-x*se,Ge=_*x*me-v*se,Re=$+(1-$)*oe,Ke=x*v*me+_*se,Ye=_*v*me+x*se,He=x*v*me-_*se,te=ce+(1-ce)*oe,ue=r[0],le=r[1],Ce=r[2],Ae=r[3],_e=r[4],xe=r[5],Ie=r[6],Me=r[7],Oe=r[8],Ne=r[9],tt=r[10],Xe=r[11];return a[0]=Se*ue+fe*_e+ve*Oe,a[1]=Se*le+fe*xe+ve*Ne,a[2]=Se*Ce+fe*Ie+ve*tt,a[3]=Se*Ae+fe*Me+ve*Xe,a[4]=Ge*ue+Re*_e+Ke*Oe,a[5]=Ge*le+Re*xe+Ke*Ne,a[6]=Ge*Ce+Re*Ie+Ke*tt,a[7]=Ge*Ae+Re*Me+Ke*Xe,a[8]=Ye*ue+He*_e+te*Oe,a[9]=Ye*le+He*xe+te*Ne,a[10]=Ye*Ce+He*Ie+te*tt,a[11]=Ye*Ae+He*Me+te*Xe,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const u=h;function b(r,m){const d=m??new i(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function y(r,m,d){const p=d??new i(16),a=m[0],_=m[1],x=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=x*r[2*4+0],p[9]=x*r[2*4+1],p[10]=x*r[2*4+2],p[11]=x*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function E(r,m){const d=m??new i(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,m,d){const p=d??new i(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:F,aim:Y,axisRotate:h,axisRotation:g,cameraAim:ie,clone:G,copy:O,create:f,determinant:de,equals:U,equalsApproximately:Z,fromMat3:w,fromQuat:k,frustum:Te,frustumReverseZ:Ue,getAxis:he,getScaling:K,getTranslation:I,identity:X,inverse:q,invert:R,lookAt:pe,mul:j,mulScalar:L,multiply:J,multiplyScalar:T,negate:M,ortho:ze,perspective:ae,perspectiveReverseZ:be,rotate:u,rotateX:Pe,rotateY:$e,rotateZ:N,rotation:o,rotationX:ke,rotationY:De,rotationZ:B,scale:y,scaling:b,set:S,setAxis:re,setTranslation:ee,translate:we,translation:Ee,transpose:H,uniformScale:C,uniformScaling:E}}const zr=new Map;function El(i){let l=zr.get(i);return l||(l=Cl(i),zr.set(i,l)),l}function kl(i){const l=Un(i);function f(B,N,g,o){const h=new i(4);return B!==void 0&&(h[0]=B,N!==void 0&&(h[1]=N,g!==void 0&&(h[2]=g,o!==void 0&&(h[3]=o)))),h}const S=f;function w(B,N,g,o,h){const u=h??new i(4);return u[0]=B,u[1]=N,u[2]=g,u[3]=o,u}function k(B,N,g){const o=g??new i(4),h=N*.5,u=Math.sin(h);return o[0]=u*B[0],o[1]=u*B[1],o[2]=u*B[2],o[3]=Math.cos(h),o}function M(B,N){const g=N??l.create(3),o=Math.acos(B[3])*2,h=Math.sin(o*.5);return h>Ve?(g[0]=B[0]/h,g[1]=B[1]/h,g[2]=B[2]/h):(g[0]=1,g[1]=0,g[2]=0),{angle:o,axis:g}}function F(B,N){const g=ae(B,N);return Math.acos(2*g*g-1)}function T(B,N,g){const o=g??new i(4),h=B[0],u=B[1],b=B[2],y=B[3],E=N[0],C=N[1],r=N[2],m=N[3];return o[0]=h*m+y*E+u*r-b*C,o[1]=u*m+y*C+b*E-h*r,o[2]=b*m+y*r+h*C-u*E,o[3]=y*m-h*E-u*C-b*r,o}const L=T;function O(B,N,g){const o=g??new i(4),h=N*.5,u=B[0],b=B[1],y=B[2],E=B[3],C=Math.sin(h),r=Math.cos(h);return o[0]=u*r+E*C,o[1]=b*r+y*C,o[2]=y*r-b*C,o[3]=E*r-u*C,o}function G(B,N,g){const o=g??new i(4),h=N*.5,u=B[0],b=B[1],y=B[2],E=B[3],C=Math.sin(h),r=Math.cos(h);return o[0]=u*r-y*C,o[1]=b*r+E*C,o[2]=y*r+u*C,o[3]=E*r-b*C,o}function Z(B,N,g){const o=g??new i(4),h=N*.5,u=B[0],b=B[1],y=B[2],E=B[3],C=Math.sin(h),r=Math.cos(h);return o[0]=u*r+b*C,o[1]=b*r-u*C,o[2]=y*r+E*C,o[3]=E*r-y*C,o}function U(B,N,g,o){const h=o??new i(4),u=B[0],b=B[1],y=B[2],E=B[3];let C=N[0],r=N[1],m=N[2],d=N[3],p=u*C+b*r+y*m+E*d;p<0&&(p=-p,C=-C,r=-r,m=-m,d=-d);let a,_;if(1-p>Ve){const x=Math.acos(p),v=Math.sin(x);a=Math.sin((1-g)*x)/v,_=Math.sin(g*x)/v}else a=1-g,_=g;return h[0]=a*u+_*C,h[1]=a*b+_*r,h[2]=a*y+_*m,h[3]=a*E+_*d,h}function X(B,N){const g=N??new i(4),o=B[0],h=B[1],u=B[2],b=B[3],y=o*o+h*h+u*u+b*b,E=y?1/y:0;return g[0]=-o*E,g[1]=-h*E,g[2]=-u*E,g[3]=b*E,g}function H(B,N){const g=N??new i(4);return g[0]=-B[0],g[1]=-B[1],g[2]=-B[2],g[3]=B[3],g}function q(B,N){const g=N??new i(4),o=B[0]+B[5]+B[10];if(o>0){const h=Math.sqrt(o+1);g[3]=.5*h;const u=.5/h;g[0]=(B[6]-B[9])*u,g[1]=(B[8]-B[2])*u,g[2]=(B[1]-B[4])*u}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const u=(h+1)%3,b=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[u*4+u]-B[b*4+b]+1);g[h]=.5*y;const E=.5/y;g[3]=(B[u*4+b]-B[b*4+u])*E,g[u]=(B[u*4+h]+B[h*4+u])*E,g[b]=(B[b*4+h]+B[h*4+b])*E}return g}function de(B,N,g,o,h){const u=h??new i(4),b=B*.5,y=N*.5,E=g*.5,C=Math.sin(b),r=Math.cos(b),m=Math.sin(y),d=Math.cos(y),p=Math.sin(E),a=Math.cos(E);switch(o){case"xyz":u[0]=C*d*a+r*m*p,u[1]=r*m*a-C*d*p,u[2]=r*d*p+C*m*a,u[3]=r*d*a-C*m*p;break;case"xzy":u[0]=C*d*a-r*m*p,u[1]=r*m*a-C*d*p,u[2]=r*d*p+C*m*a,u[3]=r*d*a+C*m*p;break;case"yxz":u[0]=C*d*a+r*m*p,u[1]=r*m*a-C*d*p,u[2]=r*d*p-C*m*a,u[3]=r*d*a+C*m*p;break;case"yzx":u[0]=C*d*a+r*m*p,u[1]=r*m*a+C*d*p,u[2]=r*d*p-C*m*a,u[3]=r*d*a-C*m*p;break;case"zxy":u[0]=C*d*a-r*m*p,u[1]=r*m*a+C*d*p,u[2]=r*d*p+C*m*a,u[3]=r*d*a-C*m*p;break;case"zyx":u[0]=C*d*a-r*m*p,u[1]=r*m*a+C*d*p,u[2]=r*d*p-C*m*a,u[3]=r*d*a+C*m*p;break;default:throw new Error(`Unknown rotation order: ${o}`)}return u}function R(B,N){const g=N??new i(4);return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g}const J=R;function j(B,N,g){const o=g??new i(4);return o[0]=B[0]+N[0],o[1]=B[1]+N[1],o[2]=B[2]+N[2],o[3]=B[3]+N[3],o}function ee(B,N,g){const o=g??new i(4);return o[0]=B[0]-N[0],o[1]=B[1]-N[1],o[2]=B[2]-N[2],o[3]=B[3]-N[3],o}const I=ee;function he(B,N,g){const o=g??new i(4);return o[0]=B[0]*N,o[1]=B[1]*N,o[2]=B[2]*N,o[3]=B[3]*N,o}const re=he;function K(B,N,g){const o=g??new i(4);return o[0]=B[0]/N,o[1]=B[1]/N,o[2]=B[2]/N,o[3]=B[3]/N,o}function ae(B,N){return B[0]*N[0]+B[1]*N[1]+B[2]*N[2]+B[3]*N[3]}function be(B,N,g,o){const h=o??new i(4);return h[0]=B[0]+g*(N[0]-B[0]),h[1]=B[1]+g*(N[1]-B[1]),h[2]=B[2]+g*(N[2]-B[2]),h[3]=B[3]+g*(N[3]-B[3]),h}function ze(B){const N=B[0],g=B[1],o=B[2],h=B[3];return Math.sqrt(N*N+g*g+o*o+h*h)}const Te=ze;function Ue(B){const N=B[0],g=B[1],o=B[2],h=B[3];return N*N+g*g+o*o+h*h}const ge=Ue;function ye(B,N){const g=N??new i(4),o=B[0],h=B[1],u=B[2],b=B[3],y=Math.sqrt(o*o+h*h+u*u+b*b);return y>1e-5?(g[0]=o/y,g[1]=h/y,g[2]=u/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function W(B,N){return Math.abs(B[0]-N[0])<Ve&&Math.abs(B[1]-N[1])<Ve&&Math.abs(B[2]-N[2])<Ve&&Math.abs(B[3]-N[3])<Ve}function Y(B,N){return B[0]===N[0]&&B[1]===N[1]&&B[2]===N[2]&&B[3]===N[3]}function ie(B){const N=B??new i(4);return N[0]=0,N[1]=0,N[2]=0,N[3]=1,N}const pe=l.create(),Ee=l.create(),we=l.create();function ke(B,N,g){const o=g??new i(4),h=l.dot(B,N);return h<-.999999?(l.cross(Ee,B,pe),l.len(pe)<1e-6&&l.cross(we,B,pe),l.normalize(pe,pe),k(pe,Math.PI,o),o):h>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(l.cross(B,N,pe),o[0]=pe[0],o[1]=pe[1],o[2]=pe[2],o[3]=1+h,ye(o,o))}const Pe=new i(4),De=new i(4);function $e(B,N,g,o,h,u){const b=u??new i(4);return U(B,o,h,Pe),U(N,g,h,De),U(Pe,De,2*h*(1-h),b),b}return{create:f,fromValues:S,set:w,fromAxisAngle:k,toAxisAngle:M,angle:F,multiply:T,mul:L,rotateX:O,rotateY:G,rotateZ:Z,slerp:U,inverse:X,conjugate:H,fromMat:q,fromEuler:de,copy:R,clone:J,add:j,subtract:ee,sub:I,mulScalar:he,scale:re,divScalar:K,dot:ae,lerp:be,length:ze,len:Te,lengthSq:Ue,lenSq:ge,normalize:ye,equalsApproximately:W,equals:Y,identity:ie,rotationTo:ke,sqlerp:$e}}const Ir=new Map;function Bl(i){let l=Ir.get(i);return l||(l=kl(i),Ir.set(i,l)),l}function Ml(i){function l(g,o,h,u){const b=new i(4);return g!==void 0&&(b[0]=g,o!==void 0&&(b[1]=o,h!==void 0&&(b[2]=h,u!==void 0&&(b[3]=u)))),b}const f=l;function S(g,o,h,u,b){const y=b??new i(4);return y[0]=g,y[1]=o,y[2]=h,y[3]=u,y}function w(g,o){const h=o??new i(4);return h[0]=Math.ceil(g[0]),h[1]=Math.ceil(g[1]),h[2]=Math.ceil(g[2]),h[3]=Math.ceil(g[3]),h}function k(g,o){const h=o??new i(4);return h[0]=Math.floor(g[0]),h[1]=Math.floor(g[1]),h[2]=Math.floor(g[2]),h[3]=Math.floor(g[3]),h}function M(g,o){const h=o??new i(4);return h[0]=Math.round(g[0]),h[1]=Math.round(g[1]),h[2]=Math.round(g[2]),h[3]=Math.round(g[3]),h}function F(g,o=0,h=1,u){const b=u??new i(4);return b[0]=Math.min(h,Math.max(o,g[0])),b[1]=Math.min(h,Math.max(o,g[1])),b[2]=Math.min(h,Math.max(o,g[2])),b[3]=Math.min(h,Math.max(o,g[3])),b}function T(g,o,h){const u=h??new i(4);return u[0]=g[0]+o[0],u[1]=g[1]+o[1],u[2]=g[2]+o[2],u[3]=g[3]+o[3],u}function L(g,o,h,u){const b=u??new i(4);return b[0]=g[0]+o[0]*h,b[1]=g[1]+o[1]*h,b[2]=g[2]+o[2]*h,b[3]=g[3]+o[3]*h,b}function O(g,o,h){const u=h??new i(4);return u[0]=g[0]-o[0],u[1]=g[1]-o[1],u[2]=g[2]-o[2],u[3]=g[3]-o[3],u}const G=O;function Z(g,o){return Math.abs(g[0]-o[0])<Ve&&Math.abs(g[1]-o[1])<Ve&&Math.abs(g[2]-o[2])<Ve&&Math.abs(g[3]-o[3])<Ve}function U(g,o){return g[0]===o[0]&&g[1]===o[1]&&g[2]===o[2]&&g[3]===o[3]}function X(g,o,h,u){const b=u??new i(4);return b[0]=g[0]+h*(o[0]-g[0]),b[1]=g[1]+h*(o[1]-g[1]),b[2]=g[2]+h*(o[2]-g[2]),b[3]=g[3]+h*(o[3]-g[3]),b}function H(g,o,h,u){const b=u??new i(4);return b[0]=g[0]+h[0]*(o[0]-g[0]),b[1]=g[1]+h[1]*(o[1]-g[1]),b[2]=g[2]+h[2]*(o[2]-g[2]),b[3]=g[3]+h[3]*(o[3]-g[3]),b}function q(g,o,h){const u=h??new i(4);return u[0]=Math.max(g[0],o[0]),u[1]=Math.max(g[1],o[1]),u[2]=Math.max(g[2],o[2]),u[3]=Math.max(g[3],o[3]),u}function de(g,o,h){const u=h??new i(4);return u[0]=Math.min(g[0],o[0]),u[1]=Math.min(g[1],o[1]),u[2]=Math.min(g[2],o[2]),u[3]=Math.min(g[3],o[3]),u}function R(g,o,h){const u=h??new i(4);return u[0]=g[0]*o,u[1]=g[1]*o,u[2]=g[2]*o,u[3]=g[3]*o,u}const J=R;function j(g,o,h){const u=h??new i(4);return u[0]=g[0]/o,u[1]=g[1]/o,u[2]=g[2]/o,u[3]=g[3]/o,u}function ee(g,o){const h=o??new i(4);return h[0]=1/g[0],h[1]=1/g[1],h[2]=1/g[2],h[3]=1/g[3],h}const I=ee;function he(g,o){return g[0]*o[0]+g[1]*o[1]+g[2]*o[2]+g[3]*o[3]}function re(g){const o=g[0],h=g[1],u=g[2],b=g[3];return Math.sqrt(o*o+h*h+u*u+b*b)}const K=re;function ae(g){const o=g[0],h=g[1],u=g[2],b=g[3];return o*o+h*h+u*u+b*b}const be=ae;function ze(g,o){const h=g[0]-o[0],u=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return Math.sqrt(h*h+u*u+b*b+y*y)}const Te=ze;function Ue(g,o){const h=g[0]-o[0],u=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return h*h+u*u+b*b+y*y}const ge=Ue;function ye(g,o){const h=o??new i(4),u=g[0],b=g[1],y=g[2],E=g[3],C=Math.sqrt(u*u+b*b+y*y+E*E);return C>1e-5?(h[0]=u/C,h[1]=b/C,h[2]=y/C,h[3]=E/C):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function W(g,o){const h=o??new i(4);return h[0]=-g[0],h[1]=-g[1],h[2]=-g[2],h[3]=-g[3],h}function Y(g,o){const h=o??new i(4);return h[0]=g[0],h[1]=g[1],h[2]=g[2],h[3]=g[3],h}const ie=Y;function pe(g,o,h){const u=h??new i(4);return u[0]=g[0]*o[0],u[1]=g[1]*o[1],u[2]=g[2]*o[2],u[3]=g[3]*o[3],u}const Ee=pe;function we(g,o,h){const u=h??new i(4);return u[0]=g[0]/o[0],u[1]=g[1]/o[1],u[2]=g[2]/o[2],u[3]=g[3]/o[3],u}const ke=we;function Pe(g){const o=g??new i(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function De(g,o,h){const u=h??new i(4),b=g[0],y=g[1],E=g[2],C=g[3];return u[0]=o[0]*b+o[4]*y+o[8]*E+o[12]*C,u[1]=o[1]*b+o[5]*y+o[9]*E+o[13]*C,u[2]=o[2]*b+o[6]*y+o[10]*E+o[14]*C,u[3]=o[3]*b+o[7]*y+o[11]*E+o[15]*C,u}function $e(g,o,h){const u=h??new i(4);return ye(g,u),R(u,o,u)}function B(g,o,h){const u=h??new i(4);return re(g)>o?$e(g,o,u):Y(g,u)}function N(g,o,h){const u=h??new i(4);return X(g,o,.5,u)}return{create:l,fromValues:f,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:L,subtract:O,sub:G,equalsApproximately:Z,equals:U,lerp:X,lerpV:H,max:q,min:de,mulScalar:R,scale:J,divScalar:j,inverse:ee,invert:I,dot:he,length:re,len:K,lengthSq:ae,lenSq:be,distance:ze,dist:Te,distanceSq:Ue,distSq:ge,normalize:ye,negate:W,copy:Y,clone:ie,multiply:pe,mul:Ee,divide:we,div:ke,zero:Pe,transformMat4:De,setLength:$e,truncate:B,midpoint:N}}const Ur=new Map;function Tl(i){let l=Ur.get(i);return l||(l=Ml(i),Ur.set(i,l)),l}function _s(i,l,f,S,w,k){return{mat3:Sl(i),mat4:El(l),quat:Bl(f),vec2:Kr(S),vec3:Un(w),vec4:Tl(k)}}const{mat3:ut,mat4:et,quat:st,vec2:Rr,vec3:z,vec4:Fc}=_s(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);_s(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);_s(wl,Array,Array,Array,Array,Array);const Gr=document.querySelector("#log");let at=null,$t=null;function Hr(){if(at)return at;at=document.createElement("div"),at.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",at.appendChild(i),$t=document.createElement("div"),$t.className="ply-spinner-label",at.appendChild($t),at.style.display="none",document.body.appendChild(at),at}function ms(i){Hr(),$t&&i&&($t.textContent=i),at&&(at.style.opacity="1",at.style.display="flex")}function Pt(i){Hr(),$t&&($t.textContent=i)}function gn(){if(!at)return;const i=at;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function Yr(i,l){if(!Gr)return;const f=document.createElement("p");f.innerText=i,l&&Object.assign(f.style,l),Gr.appendChild(f)}async function it(i){console.log(i),Yr(i)}async function Dl(i){console.error(i),Yr(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Zr;function Xr(){Zr=performance.now()}function Vr(i){const l=performance.now()-Zr;it(`⏱️ ${i} Time: ${l.toFixed(0)} ms`)}function Al(i,l){if(!i)throw new Error(l&&(typeof l=="string"?l:l()))}function en(i){return i+3&-4}const Ll=2,zl=3,wn=5,qt=6,xn=7;function Il(i){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(i,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const S=new DataView(i),w=4,k=S.getUint32(w+0,!0),M=S.getUint32(w+4,!0),F=S.getUint32(w+8,!0),T=S.getUint32(w+12,!0),L=S.getUint32(w+16,!0),O=S.getFloat32(w+20,!0),G=S.getUint32(w+24,!0),Z=S.getUint32(w+28,!0),U=S.getFloat32(w+32,!0),X=S.getFloat32(w+36,!0),H=S.getFloat32(w+40,!0),q=S.getUint32(w+44,!0),de=S.getFloat32(w+48,!0),R=S.getFloat32(w+52,!0),J=S.getUint32(w+56,!0),j=S.getUint32(w+60,!0),ee=j>0?j:1;if(Z!==Ll&&Z!==zl&&Z!==wn&&Z!==qt&&Z!==xn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Z}`);if(Z!==wn&&Z!==qt&&(k%4!==0||q%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${q}`);let I=w+64;const he=(J+1)*4,re=new Uint32Array(i.slice(I,I+he));I+=he;let K;if(ee>1){const W=(ee+1)*4;if(I+W>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${W} from ${I})`);K=new Uint32Array(i.slice(I,I+W)),I+=W}else K=new Uint32Array([0,k]);let ae=0;for(let W=0;W<ee;W++){const Y=K[W+1]-K[W];Y>ae&&(ae=Y)}const be=L*4*4;if(I+be>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${be} more bytes from offset ${I}, have ${i.byteLength-I}`);const ze=new Float32Array(i.slice(I,I+be));I+=be;const Te=new Float32Array(L*5);for(let W=0;W<L;W++){const Y=ze[W*4+0],ie=ze[W*4+1],pe=ze[W*4+2],Ee=ze[W*4+3];let we=0;for(let B=1;B<=J&&re[B]<=ie;B++)we=B;let ke=0;for(let B=1;B<=ee&&K[B]<=Y;B++)ke=B;const Pe=ie-re[we],De=Y-K[ke],$e=ke*J+we;Te[W*5+0]=De,Te[W*5+1]=Pe,Te[W*5+2]=pe,Te[W*5+3]=Ee,Te[W*5+4]=$e}if(Z===wn||Z===qt){if(I+24>i.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const W=l.decode(new Uint8Array(i,I,4));if(W!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${W}'`);const Y=S.getUint32(I+4,!0),ie=S.getUint32(I+8,!0),pe=S.getUint32(I+12,!0),Ee=S.getUint32(I+16,!0),we=S.getUint32(I+20,!0);if(Y!==1)throw new Error(`NAT2 RVQP unsupported version ${Y}`);if(Ee!==L)throw new Error(`NAT2 RVQP num_rects ${Ee} != header num_rects ${L}`);if(I+=24,I+16>i.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const ke=new Float32Array(i.slice(I,I+8)),Pe=new Float32Array(i.slice(I+8,I+16));I+=16;const De=ie*pe,$e=2*ie*pe,B=Z===qt?(De>>2)*($e>>2)*16:De*$e*4;if(I+B>i.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${i.byteLength-I})`);const N=new Uint8Array(i.slice(I,I+B));I+=B;const g=we*4;if(I+g>i.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${i.byteLength-I})`);const o=new Uint32Array(i.slice(I,I+g));I+=g;const h=(L+1)*4;if(I+h>i.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${i.byteLength-I})`);const u=new Uint32Array(i.slice(I,I+h));return I+=h,{width:k,height:M,channels:F,kernel_type:T,num_rects:L,uv_extent:O,sb_number:G,format:Z,sh_bias:U,res_bias:X,compact_mult:H,layer_h:q,atlas_scale:de,atlas_offset:R,n_layers:J,n_cols:ee,layer_cuts:re,column_cuts:K,slice_width:ae,rects_expanded:Te,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:ie,B:pe,N_used:we,pair_scale:ke,pair_offset:Pe,codebook_image:N,packed_indices:o,surfel_offsets:u}}}let Ue;const ye=k/4*16;if(Z===xn){if(I+24>i.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const W=l.decode(new Uint8Array(i,I,4));if(W!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${W}'`);const Y=S.getUint32(I+4,!0),ie=S.getUint32(I+8,!0),pe=S.getUint32(I+12,!0),Ee=S.getUint32(I+16,!0),we=S.getUint32(I+20,!0);if(Y!==1)throw new Error(`NAT2 BCCB unsupported version ${Y}`);if(pe!==M/4||Ee!==k/4||we!==pe*Ee)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${Ee}×${pe} (${we} blocks)`);I+=24;const ke=ie*16;if(I+ke>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${ke}, have ${i.byteLength-I})`);const Pe=new Uint8Array(i,I,ke);I+=ke;const De=we*2;if(I+De>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${De}, have ${i.byteLength-I})`);const $e=new Uint16Array(i.slice(I,I+De));I+=De;const B=new Uint8Array(we*16);for(let N=0;N<we;N++){const g=$e[N]*16;B.set(Pe.subarray(g,g+16),N*16)}Ue=B}else{let W=0;for(let Y=0;Y<J;Y++){const ie=re[Y+1]-re[Y];if(ie%4!==0)throw new Error(`NAT2 BC7 layer ${Y} rows ${ie} not 4-aligned`);W+=ie/4*ye}if(I+W>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${W} more bytes from offset ${I}, have ${i.byteLength-I}`);Ue=new Uint8Array(i.slice(I,I+W))}return{width:k,height:M,channels:F,kernel_type:T,num_rects:L,uv_extent:O,sb_number:G,format:Z,sh_bias:U,res_bias:X,compact_mult:H,layer_h:q,atlas_scale:de,atlas_offset:R,n_layers:J,n_cols:ee,layer_cuts:re,column_cuts:K,slice_width:ae,rects_expanded:Te,atlas_bytes:Ue}}const Ul=32;function Rl(i){const l=i.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),S=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:f,sampler:S}}function Gl(i){const l=i.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d"}),S=i.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),w=i.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),k=w.createView({dimension:"2d"}),M=i.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:f,cbSamp:S,packedTex:w,packedView:k,offsetsBuf:M}}function Vl(i,l,f){const S=l.format===wn||l.format===qt,w=l.format===qt;let k,M,F,T;if(S){const R=Rl(i);k=R.tex,M=R.view,F=R.sampler,T="RVQ-paired atlas"}else if(l.format===2||l.format===xn){if(!i.features.has("texture-compression-bc"))return it(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;T=l.format===xn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:k,view:M,sampler:F}=Or(i,l,"bc7-rgba-unorm",T)}else if(l.format===3){if(!i.features.has("texture-compression-astc"))return it("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;T="ASTC 4x4 atlas",{texture:k,view:M,sampler:F}=Or(i,l,"astc-4x4-unorm",T)}else return it(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:L}=l,O=i.createBuffer({label:"atlas rects (5-stride)",size:en(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(O,0,L);let G,Z,U,X,H,q;if(S){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const R=l.rvq_paired,J=R.K_orig*R.B,j=2*R.K_orig*R.B;if(J>i.limits.maxTextureDimension2D||j>i.limits.maxTextureDimension2D)return it(`⚠️  RVQ codebook ${J}x${j} exceeds maxTextureDimension2D=${i.limits.maxTextureDimension2D} — atlas disabled`),null;let ee,I;if(w){if(!i.features.has("texture-compression-bc"))return it("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ee="bc7-rgba-unorm",I=(J>>2)*16}else ee="rgba8unorm",I=J*4;const he=i.createTexture({label:w?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:J,height:j,depthOrArrayLayers:1},format:ee,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});i.queue.writeTexture({texture:he},R.codebook_image,{offset:0,bytesPerRow:I,rowsPerImage:j},{width:J,height:j,depthOrArrayLayers:1}),G=he,Z=he.createView({dimension:"2d"}),U=i.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const re=8192,K=R.N_used,ae=Math.ceil(K/re);if(ae>i.limits.maxTextureDimension2D||re>i.limits.maxTextureDimension2D)return it(`⚠️  RVQ packed_indices texture ${re}x${ae} exceeds maxTextureDimension2D=${i.limits.maxTextureDimension2D} — atlas disabled`),null;X=i.createTexture({label:"rvq packed_indices (r32uint)",size:{width:re,height:ae,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const be=re*ae;let ze;if(be===K)ze=new Uint8Array(R.packed_indices.buffer,R.packed_indices.byteOffset,R.packed_indices.byteLength);else{const Te=new Uint32Array(be);Te.set(R.packed_indices),ze=new Uint8Array(Te.buffer)}i.queue.writeTexture({texture:X},ze,{offset:0,bytesPerRow:re*4,rowsPerImage:ae},{width:re,height:ae,depthOrArrayLayers:1}),H=X.createView({dimension:"2d"}),q=i.createBuffer({label:"rvq surfel_offsets",size:en(R.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(q,0,R.surfel_offsets),it(`🪡 RVQ-paired atlas wired: codebook ${J}x${j} (${(R.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${K.toLocaleString()} packed indices as r32uint ${re}x${ae} (${(R.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${R.surfel_offsets.length} surfel_offsets`)}else{const R=Gl(i);G=R.cbTex,Z=R.cbView,U=R.cbSamp,X=R.packedTex,H=R.packedView,q=R.offsetsBuf}const de=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Qr(i,de,l,f),{texture:k,view:M,sampler:F,rectsBuffer:O,texParamsBuffer:de,meta:l,rvqCodebookTexture:G,rvqCodebookView:Z,rvqCodebookSampler:U,rvqPackedIndicesTexture:X,rvqPackedIndicesView:H,rvqSurfelOffsetsBuffer:q}}function Or(i,l,f,S){const{width:w,layer_h:k,n_layers:M,n_cols:F,layer_cuts:T,column_cuts:L,slice_width:O,atlas_bytes:G}=l,U=w/4*16,X=i.limits.maxTextureDimension2D;if(k>X||O>X)throw new Error(`⚠️  atlas slice dims ${O}x${k} exceed maxTextureDimension2D=${X}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const H=F*M;if(H>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${F} cols × ${M} layers = ${H} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const q=i.createTexture({label:S,size:{width:O,height:k,depthOrArrayLayers:H},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let J=0;J<F;J++){const j=L[J]/4,ee=(L[J+1]-L[J])/4;for(let I=0;I<M;I++){const he=T[I]/4,re=(T[I+1]-T[I])/4,K=J*M+I,ae=he*U+j*16;i.queue.writeTexture({texture:q,mipLevel:0,origin:{x:0,y:0,z:K},aspect:"all"},G,{offset:ae,bytesPerRow:U,rowsPerImage:re},{width:ee*4,height:re*4,depthOrArrayLayers:1})}}const de=q.createView({label:`${S} view`,dimension:"2d-array"}),R=i.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:q,view:de,sampler:R}}function Qr(i,l,f,S){const w=new ArrayBuffer(48),k=new Uint32Array(w),M=new Float32Array(w),F=f.slice_width||f.width;k[0]=S?F:0,k[1]=f.layer_h;let T=f.format;T===qt&&(T=wn),T===xn&&(T=2),k[2]=T,M[3]=f.atlas_scale,M[4]=f.atlas_offset,M[5]=f.uv_extent,M[6]=f.res_bias,f.rvq_paired?(k[7]=f.rvq_paired.B,M[8]=f.rvq_paired.pair_scale[0],M[9]=f.rvq_paired.pair_scale[1],M[10]=f.rvq_paired.pair_offset[0],M[11]=f.rvq_paired.pair_offset[1]):(k[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),i.queue.writeBuffer(l,0,w)}async function cs(i,l){it(`loading ply file from File... : ${i.name}`),ms("downloading PLY...");const f=await i.arrayBuffer();try{return await Jr(f,l)}finally{gn()}}async function Ol(i,l){it(`loading ply file from URL... : ${i}`),ms("downloading PLY...");try{Xr();const f=new URL(i,self.location.href).href;return await Jr({url:f},l)}finally{gn()}}async function Jr(i,l){return new Promise((f,S)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var F,T,L,O,G,Z,U,X,H,q,de,R;const M=k.data;if((M==null?void 0:M.type)==="error"){Dl(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),S(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const J=M.totalBytes,j=M.loadedBytes/(1024*1024),ee=J?J/(1024*1024):void 0,I=(M.speedBps??0)/(1024*1024),he=J?Math.min(99,Math.floor(M.loadedBytes/J*100)):void 0,re=ee?`total ${ee.toFixed(1)} MB`:"total -- MB",K=ee&&he!==void 0?`${j.toFixed(1)} MB downloaded (${he}%)`:`${j.toFixed(1)} MB downloaded`,ae=`${I.toFixed(2)} MB/s`;Pt(`downloading PLY ...
${re}, ${K}
${ae}`);return}else if((M==null?void 0:M.type)==="fetched"){it(`💾 Fetched (${M.byteLength} bytes)`),Vr("Download"),Pt("parsing PLY..."),Xr();return}else if((M==null?void 0:M.type)==="parse_progress"){const J=M.total??0,j=M.read??0,ee=J>0?Math.floor(j/J*100):0;Pt(`parsing PLY ...
${j}/${J} surfels (${ee}%)`);return}else if((M==null?void 0:M.type)==="done"){const J=M.num_points,j=M.K,ee=M.feature_mode??0,I=M.sh_bias,he=M.kernel_type,re=M.surfelBuffer,K=M.svParamsBuffer;it(`🪐 Total surfels: ${J}, mode=${ee===1?"SB":"SV"}, K=${j}, sh_bias=${I}, kernel_type=${he}`);const be=l.createBuffer({label:"surfel input buffer",size:en(J*Ul),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(be,0,re);const ze=K.byteLength>0?K.byteLength:16,Te=l.createBuffer({label:ee===1?"color_params buffer (SB)":"color_params buffer (SV)",size:en(ze),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});K.byteLength>0&&l.queue.writeBuffer(Te,0,K),w.terminate(),Vr("Parse"),f({num_points:J,K:j,feature_mode:ee,sh_bias:I,kernel_type:he,surfel_buffer:be,surfel_data:new Float32Array(re),sv_params_buffer:Te,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(F=M.bbox)==null?void 0:F.min)==null?void 0:T[0])??-1)+(((O=(L=M.bbox)==null?void 0:L.max)==null?void 0:O[0])??1))/2,((((Z=(G=M.bbox)==null?void 0:G.min)==null?void 0:Z[1])??-1)+(((X=(U=M.bbox)==null?void 0:U.max)==null?void 0:X[1])??1))/2,((((q=(H=M.bbox)==null?void 0:H.min)==null?void 0:q[2])??-1)+(((R=(de=M.bbox)==null?void 0:de.max)==null?void 0:R[2])??1))/2]})}},w.onerror=k=>{w.terminate(),S(k)},i instanceof ArrayBuffer?(Pt("parsing PLY..."),w.postMessage({type:"start",plyBuffer:i},[i])):w.postMessage({type:"start_url",url:i.url})})}var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},us={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,l){(function(f,S){S(l)})(Fl,function(f){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class F extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class L extends k{constructor(e,t){super(e),this.index=t}}function O(n){return n}function G(n){return n==null}function Z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function U(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const X={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class H{static alreadyDisposed(){return new H({type:"alreadydisposed"})}static notBindable(){return new H({type:"notbindable"})}static propertyNotFound(e){return new H({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new H({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=X[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!q.isBindable(s))throw H.notBindable();if(!(e in s))throw H.propertyNotFound(e);s[e]=t}}class de extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class R{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const J="tp";function j(n){return(t,s)=>[J,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ee(n,e){return t=>e(n(t))}function I(n){return n.rawValue}function he(n,e){n.emitter.on("change",ee(I,e)),e(n.rawValue)}function re(n,e,t){he(n.value(e),t)}function K(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ae(n,e){return t=>{K(n,e,t)}}function be(n,e){he(n,t=>{e.textContent=t??""})}const ze=j("btn");class Te{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ze()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(ze("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(ze("t")),be(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Ue{constructor(e,t){this.emitter=new R,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Te(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ge{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new R,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class ye{constructor(e){this.emitter=new R,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function W(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ye(n):new ge(n,e)}class Y{constructor(e){this.emitter=new R,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:W(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new Y(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const D=e[P],ne=D(n[P]);return ne.succeeded?Object.assign(Object.assign({},c),{[P]:ne.value}):void 0},{});return s}function pe(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Ee(n){return n===null?!1:typeof n=="object"}function we(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function ke(n){return{custom:e=>we(e)(n),boolean:we(e=>typeof e=="boolean"?e:void 0)(n),number:we(e=>typeof e=="number"?e:void 0)(n),string:we(e=>typeof e=="string"?e:void 0)(n),function:we(e=>typeof e=="function"?e:void 0)(n),constant:e=>we(t=>t===e?e:void 0)(n),raw:we(e=>e)(n),object:e=>we(t=>{if(Ee(t))return ie(t,e)})(n),array:e=>we(t=>{if(Array.isArray(t))return pe(t,e)})(n)}}const Pe={optional:ke(!0),required:ke(!1)};function De(n,e){const t=Pe.required.object(e)(n);return t.succeeded?t.value:void 0}function $e(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class N{constructor(e){this.value_=e}static create(e){return[new N(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=j("");function o(n,e){return ae(n,g(void 0,e))}class h extends Y{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=N.create(W(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new h(Y.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,o(e,"disabled")),re(this,"hidden",o(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const b=j(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class E{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){$e({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const C="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(C,"svg");return t.innerHTML=x[e],t}function A(n,e,t){n.insertBefore(e,n.children[t])}function V(n){n.parentElement&&n.parentElement.removeChild(n)}function $(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ce(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function oe(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=j("lbl");function me(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Se{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(se("l")),re(t.props,"label",P=>{G(P)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),ce(s),s.appendChild(me(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(se("v")),this.element.appendChild(c),this.valueElement=c}}class fe extends E{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Se(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ve={id:"button",type:"blade",accept(n){const e=Pe,t=De(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new fe(n.document,{blade:n.blade,props:Y.fromObject({label:n.params.label}),valueController:new Ue(n.document,{props:Y.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof fe)||!(n.controller.valueController instanceof Ue)?null:new de(n.controller)}};class Ge extends E{constructor(e){super(e),this.value=e.value}}function Re(){return new Y({positions:W([],{equals:Z})})}class Ke extends Y{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=Y.createCore(t);return new Ke(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};re(this,"expanded",s),re(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ye(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function te(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ye(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class ue extends w{constructor(e,t){super(e),this.rackApi_=t}}function le(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ce(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Ae(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function _e(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class xe{constructor(e){this.emitter=new R,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw H.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Ie extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new R,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Me extends fe{constructor(e,t){super(e,t),this.binding=t.binding}}class Oe extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new R,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new F(this,t,this.controller_.binding.target.presetKey)})}}class Ne extends fe{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function tt(n){return n instanceof dt?n.apiSet_:n instanceof ue?n.rackApi_.apiSet_:null}function Xe(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw H.shouldNeverHappen();return t}function ht(n,e,t){if(!q.isBindable(n))throw H.notBindable();return new q(n,e,t)}class dt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new R,this.apiSet_=new xe(tt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>Xe(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(P,ht(e,t,c.presetKey),c),ne=new Ie(D);return this.add(ne,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(P,ht(e,t),c),ne=new Oe(D);return this.add(ne,c.index)}addFolder(e){return Ce(this,e)}addButton(e){return le(this,e)}addSeparator(e){return Ae(this,e)}addTab(e){return _e(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Xe(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Me){const s=Xe(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ge){const s=Xe(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ne))throw H.shouldNeverHappen();const t=Xe(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new F(t,s.target.read(),s.target.presetKey)})}}class pt extends ue{constructor(e,t){super(e,new dt(e.rackController,t)),this.emitter_=new R,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class ft extends E{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class St{constructor(e,t){const s=j(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function mt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Me&&s.binding===e)return s}return null}function Ct(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ne&&s.binding===e)return s}return null}function Lt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ge&&s.value===e)return s}return null}function Qe(n){return n instanceof je?n.rack:n instanceof ft?n.rackController.rack:null}function _t(n){const e=Qe(n);return e?e.bcSet_:null}class bt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new R,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new xe(_t),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),U(e,"parent")?e.parent=this:(e.parent_=this,$e({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){U(e,"parent")?e.parent=null:(e.parent_=null,$e({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Me)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ne)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ge)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Qe(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Me)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ne)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ge)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Qe(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=mt(this.find(Me),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ct(this.find(Ne),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Lt(this.find(Ge),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class je extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new St(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new bt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&A(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&V(e.bladeController.view.element)}}const zt=j("cnt");class Wt{constructor(e,t){var s;this.className_=j((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),zt()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),re(this.foldable_,"completed",ae(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),re(t.props,"title",Le=>{G(Le)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const D=e.createElement("div");D.classList.add(this.className_("t")),be(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const ne=e.createElement("div");ne.classList.add(this.className_("m")),this.buttonElement.appendChild(ne);const Be=t.containerElement;Be.classList.add(this.className_("c")),this.element.appendChild(Be),this.containerElement=Be}}class tn extends ft{constructor(e,t){var s;const c=Ke.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new je(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new Wt(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,te(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const nn={id:"folder",type:"blade",accept(n){const e=Pe,t=De(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new tn(n.document,{blade:n.blade,expanded:n.params.expanded,props:Y.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof tn?new pt(n.controller,n.pool):null}};class jt extends Ge{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Se(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class vs extends w{}const gs=j("spr");class pi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(gs("r")),this.element.appendChild(s)}}class ws extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new pi(e,{viewProps:t.viewProps})}))}}const hi={id:"separator",type:"blade",accept(n){const t=De(n,{view:Pe.required.constant("separator")});return t?{params:t}:null},controller(n){return new ws(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ws?new vs(n.controller):null}},sn=j("tbi");class fi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn()),t.viewProps.bindClassModifiers(this.element),re(t.props,"selected",P=>{P?this.element.classList.add(sn(void 0,"sel")):this.element.classList.remove(sn(void 0,"sel"))});const s=e.createElement("button");s.classList.add(sn("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(sn("t")),be(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class _i{constructor(e,t){this.emitter=new R,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new fi(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class xs{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new _i(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new je(e,{blade:Re(),viewProps:h.create()}),this.props=t.props,re(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ys{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Ps extends ue{constructor(e,t){super(e,new dt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new R,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw H.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new xs(t,{itemProps:Y.fromObject({selected:!1,title:e.title}),props:Y.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw H.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw H.shouldNeverHappen();const s=new ys(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw H.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new L(this,e.rawValue)})}}const Ss=-1;class mi{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=W(!0),this.selectedIndex=W(Ss),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ss,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const rn=j("tab");class bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(rn(),zt()),t.viewProps.bindClassModifiers(this.element),he(t.empty,ae(this.element,rn(void 0,"nop")));const s=e.createElement("div");s.classList.add(rn("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(rn("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(rn("c")),this.element.appendChild(P),this.contentsElement=P}}class Cs extends ft{constructor(e,t){const s=new je(e,{blade:t.blade,viewProps:t.viewProps}),c=new mi;super({blade:t.blade,rackController:s,view:new bi(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new xe(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;A(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;V(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Es={id:"tab",type:"blade",accept(n){const e=Pe,t=De(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Cs(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new xs(n.document,{itemProps:Y.fromObject({selected:!1,title:t.title}),props:Y.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Cs?new Ps(n.controller,n.pool):null}};function vi(n,e){const t=n.accept(e.params);if(!t)return null;const s=Pe.optional.boolean(e.params.disabled).value,c=Pe.optional.boolean(e.params.hidden).value;return n.controller({blade:Re(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class gi{constructor(){this.disabled=!1,this.emitter=new R}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class wi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new R,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class xi{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new R,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function ks(n,e){for(;n.length<e;)n.push(void 0)}function yi(n){const e=[];return ks(e,n),W(e)}function Pi(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Si(n,e){const t=[...Pi(n),e];return t.length>n.length?t.splice(0,t.length-n.length):ks(t,n.length),t}class Ci{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new R,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Si(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class on{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function vt(n,e){if(n instanceof e)return n;if(n instanceof on){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Kt{constructor(e){this.values=Y.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class an{constructor(e){this.values=Y.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Bs{constructor(e){this.values=Y.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class yn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Gn=j("lst");class Ei{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Gn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Gn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Gn("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,re(this.props_,"options",P=>{$(this.selectElement),P.forEach(D=>{const ne=e.createElement("option");ne.textContent=D.text,this.selectElement.appendChild(ne)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ln{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ei(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ms=j("pop");class ki{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ms()),t.viewProps.bindClassModifiers(this.element),he(t.shows,ae(this.element,Ms(void 0,"v")))}}class Ts{constructor(e,t){this.shows=W(!1),this.viewProps=t.viewProps,this.view=new ki(e,{shows:this.shows,viewProps:this.viewProps})}}const Ds=j("txt");class Bi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ds()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ds("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Pn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Bi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Mi(n){return String(n)}function As(n){return n==="false"?!1:!!n}function Ls(n){return Mi(n)}class Ti{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Di={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ai{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Di[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Li={"+":n=>n,"-":n=>-n,"~":n=>~n};class zi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Vn(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function cn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ii(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function un(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=un(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=un(n,e);return c===""?"":s+c}function On(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ui(n,e);return s===""?"":t+s}function zs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ii(n,e);return e+=s.length,s===""?"":s+un(n,e)}function Ri(n,e){const t=zs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=un(n,e);return e+=c.length,t+s+c+On(n,e)}function Gi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=un(n,e);return e+=s.length,s===""?"":t+s+On(n,e)}function Vi(n,e){const t=zs(n,e);return e+=t.length,t===""?"":t+On(n,e)}const Oi=Vn([Ri,Gi,Vi]);function Fi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ni(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Fi(n,e);return s===""?"":t+s}function qi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=qi(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Wi(n,e);return s===""?"":t+s}const Ki=Vn([Ni,$i,ji]),Hi=Vn([Ki,Oi]);function Yi(n,e){const t=Hi(n,e);return e+=t.length,t===""?null:{evaluable:new Ti(t),cursor:e}}function Zi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Us(n,e);if(!s)return null;e=s.cursor,e+=cn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Xi(n,e){var t;return(t=Yi(n,e))!==null&&t!==void 0?t:Zi(n,e)}function Is(n,e){const t=Xi(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Is(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new zi(s,c.evaluable)}):null}function Qi(n,e,t){t+=cn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=cn(e,t).length,{cursor:t,operator:s}):null}function Ji(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const D=Qi(e,t,s);if(!D)break;s=D.cursor;const ne=n(t,s);if(!ne)return null;s=ne.cursor,P=new Ai(D.operator,P,ne.evaluable)}return P?{cursor:s,evaluable:P}:null}}const eo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Ji(n,e),Is);function Us(n,e){return e+=cn(n,e).length,eo(n,e)}function to(n){const e=Us(n,0);return!e||e.cursor+cn(n,e.cursor).length!==n.length?null:e.evaluable}function gt(n){var e;const t=to(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Rs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=gt(n);if(!G(e))return e}return 0}function no(n){return String(n)}function nt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const so=nt(0);function Sn(n){return so(n)+"%"}function Gs(n){return String(n)}function Fn(n){return n}function dn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{P(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{P(()=>{n.setRawValue(s(n,e),D.options)}),P(()=>{e.setRawValue(t(n,e),D.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function ot(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function pn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function wt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ro(n){return n==="ArrowUp"||n==="ArrowDown"}function Vs(n){return ro(n)||n==="ArrowLeft"||n==="ArrowRight"}function Nn(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class It{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new R,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Nn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Nn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Nn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ze(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function Os(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Je(n,e,t){return Math.min(Math.max(n,e),t)}function Fs(n,e){return(n%e+e)%e}const lt=j("txt");class io{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(lt(),lt(void 0,"num")),t.arrayPosition&&this.element.classList.add(lt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(lt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(lt()),this.inputElement.classList.add(lt("i"));const c=e.createElement("div");c.classList.add(lt("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(C,"svg");P.classList.add(lt("g")),this.knobElement.appendChild(P);const D=e.createElementNS(C,"path");D.classList.add(lt("gb")),P.appendChild(D),this.guideBodyElem_=D;const ne=e.createElementNS(C,"path");ne.classList.add(lt("gh")),P.appendChild(ne),this.guideHeadElem_=ne;const Be=e.createElement("div");Be.classList.add(j("tt")()),this.knobElement.appendChild(Be),this.tooltipElem_=Be,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(lt(void 0,"drg"));return}this.element.classList.add(lt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=Je(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class hn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=W(null),this.view=new io(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new It(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),P!==void 0&&(D=Math.min(D,P)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=ot(this.baseStep_,pn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){ot(this.baseStep_,pn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const qn=j("sld");class oo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(qn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qn("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(qn("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=Je(Ze(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class ao{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new oo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new It(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(Je(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ot(this.baseStep_,wt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){ot(this.baseStep_,wt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $n=j("sldtxt");class lo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add($n());const s=e.createElement("div");s.classList.add($n("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add($n("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Wn{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new ao(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new hn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new lo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function fn(n,e){n.write(e)}function Cn(n){const e=Pe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Ns(n){if(n==="inline"||n==="popup")return n}function Et(n){const e=Pe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function qs(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function jn(n){return G(n)?null:new an(qs(n))}function co(n){const e=n?vt(n,yn):null;return e?e.step:null}function En(n,e){const t=n&&vt(n,yn);return t?Os(t.step):Math.max(Os(e),2)}function Ht(n){const e=co(n);return e??1}function Yt(n,e){var t;const s=n&&vt(n,yn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const kn=j("ckb");class uo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(kn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(kn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(kn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(kn("w")),s.appendChild(P);const D=v(e,"check");P.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class po{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new uo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function ho(n){const e=[],t=jn(n.options);return t&&e.push(t),new on(e)}const fo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=De(e,{options:Pe.optional.custom(Cn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>As,constraint:n=>ho(n.params),writer:n=>fn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&vt(s,an);return c?new ln(e,{props:new Y({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new po(e,{value:t,viewProps:n.viewProps})}},Ut=j("col");class _o{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ut()),t.foldable.bindExpandedClass(this.element,Ut(void 0,"expanded")),re(t.foldable,"completed",ae(this.element,Ut(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Ut("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ut("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(Ut("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Ut("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function mo(n,e,t){const s=Je(n/255,0,1),c=Je(e/255,0,1),P=Je(t/255,0,1),D=Math.max(s,c,P),ne=Math.min(s,c,P),Be=D-ne;let Le=0,qe=0;const We=(ne+D)/2;return Be!==0&&(qe=Be/(1-Math.abs(D+ne-1)),s===D?Le=(c-P)/Be:c===D?Le=2+(P-s)/Be:Le=4+(s-c)/Be,Le=Le/6+(Le<0?1:0)),[Le*360,qe*100,We*100]}function bo(n,e,t){const s=(n%360+360)%360,c=Je(e/100,0,1),P=Je(t/100,0,1),D=(1-Math.abs(2*P-1))*c,ne=D*(1-Math.abs(s/60%2-1)),Be=P-D/2;let Le,qe,We;return s>=0&&s<60?[Le,qe,We]=[D,ne,0]:s>=60&&s<120?[Le,qe,We]=[ne,D,0]:s>=120&&s<180?[Le,qe,We]=[0,D,ne]:s>=180&&s<240?[Le,qe,We]=[0,ne,D]:s>=240&&s<300?[Le,qe,We]=[ne,0,D]:[Le,qe,We]=[D,0,ne],[(Le+Be)*255,(qe+Be)*255,(We+Be)*255]}function vo(n,e,t){const s=Je(n/255,0,1),c=Je(e/255,0,1),P=Je(t/255,0,1),D=Math.max(s,c,P),ne=Math.min(s,c,P),Be=D-ne;let Le;Be===0?Le=0:D===s?Le=60*(((c-P)/Be%6+6)%6):D===c?Le=60*((P-s)/Be+2):Le=60*((s-c)/Be+4);const qe=D===0?0:Be/D,We=D;return[Le,qe*100,We*100]}function $s(n,e,t){const s=Fs(n,360),c=Je(e/100,0,1),P=Je(t/100,0,1),D=P*c,ne=D*(1-Math.abs(s/60%2-1)),Be=P-D;let Le,qe,We;return s>=0&&s<60?[Le,qe,We]=[D,ne,0]:s>=60&&s<120?[Le,qe,We]=[ne,D,0]:s>=120&&s<180?[Le,qe,We]=[0,D,ne]:s>=180&&s<240?[Le,qe,We]=[0,ne,D]:s>=240&&s<300?[Le,qe,We]=[ne,0,D]:[Le,qe,We]=[D,0,ne],[(Le+Be)*255,(qe+Be)*255,(We+Be)*255]}function go(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function wo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Rt(n){return[n[0],n[1],n[2]]}function Ws(n,e){return[n[0],n[1],n[2],e]}const xo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:go,rgb:bo},hsv:{hsl:wo,hsv:(n,e,t)=>[n,e,t],rgb:$s},rgb:{hsl:mo,hsv:vo,rgb:(n,e,t)=>[n,e,t]}};function Bn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function yo(n,e){return n===e?e:Fs(n,e)}function Po(n,e,t){var s;const c=Bn(e,t);return[e==="rgb"?Je(n[0],0,c[0]):yo(n[0],c[0]),Je(n[1],0,c[1]),Je(n[2],0,c[2]),Je((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function js(n,e,t,s){const c=Bn(e,t),P=Bn(e,s);return n.map((D,ne)=>D/c[ne]*P[ne])}function So(n,e,t){const s=js(n,e.mode,e.type,"int"),c=xo[e.mode][t.mode](...s);return js(c,t.mode,"int",t.type)}function Mn(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Fe{static black(e="int"){return new Fe([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Fe(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Mn(e,"r")&&Mn(e,"g")&&Mn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Mn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Po(e,t,s)}getComponents(e,t="int"){return Ws(So(Rt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const kt=j("colp");class Co{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(kt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(kt("hsv"));const c=e.createElement("div");c.classList.add(kt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(kt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(kt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ne=e.createElement("div");ne.classList.add(kt("a"));const Be=e.createElement("div");Be.classList.add(kt("ap")),Be.appendChild(this.alphaViews_.palette.element),ne.appendChild(Be);const Le=e.createElement("div");Le.classList.add(kt("at")),Le.appendChild(this.alphaViews_.text.element),ne.appendChild(Le),this.element.appendChild(ne)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Eo(n){return n==="int"?"int":n==="float"?"float":void 0}function Kn(n){const e=Pe;return De(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Eo)}),expanded:e.optional.boolean,picker:e.optional.custom(Ns)})}function Gt(n){return n?.1:1}function Vt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function ko(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function ct(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Bo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ks(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Bo[s](t)}function Hs(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ct(e[1],255),ct(e[2],255),ct(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ys(n){return e=>{const t=Hs(e);return t?new Fe(t,"rgb",n):null}}function Zs(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ct(e[1],255),ct(e[2],255),ct(e[3],255),ct(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Xs(n){return e=>{const t=Zs(e);return t?new Fe(t,"rgb",n):null}}function Qs(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ks(e[1]),ct(e[2],100),ct(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Js(n){return e=>{const t=Qs(e);return t?new Fe(t,"hsl",n):null}}function er(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ks(e[1]),ct(e[2],100),ct(e[3],100),ct(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function tr(n){return e=>{const t=er(e);return t?new Fe(t,"hsl",n):null}}function nr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Mo(n){const e=nr(n);return e?new Fe(e,"rgb","int"):null}function sr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function To(n){const e=sr(n);return e?new Fe(e,"rgb","int"):null}function rr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ir(n){return e=>{const t=rr(e);return t?new Fe(t,"rgb",n):null}}function or(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ar(n){return e=>{const t=or(e);return t?new Fe(t,"rgb",n):null}}const Do=[{parser:nr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:sr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Hs,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Zs,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Qs,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:er,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:rr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:or,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ao(n){return Do.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Hn(n,e="int"){const t=Ao(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const lr={int:[Mo,To,Ys("int"),Xs("int"),Js("int"),tr("int"),ir("int"),ar("int")],float:[Ys("float"),Xs("float"),Js("float"),tr("float"),ir("float"),ar("float")]};function Lo(n){const e=lr[n];return t=>{if(typeof t!="string")return Fe.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Fe.black(n)}}function Yn(n){const e=lr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function cr(n){const e=Je(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function ur(n,e="#"){const t=Rt(n.getComponents("rgb")).map(cr).join("");return`${e}${t}`}function Zn(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(cr).join("");return`${e}${s}`}function dr(n,e){const t=nt(e==="float"?2:0);return`rgb(${Rt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function zo(n){return e=>dr(e,n)}function Tn(n,e){const t=nt(2),s=nt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,D)=>(D===3?t:s)(P)).join(", ")})`}function Io(n){return e=>Tn(e,n)}function Uo(n){const e=[nt(0),Sn,Sn];return`hsl(${Rt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Ro(n){const e=[nt(0),Sn,Sn,nt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function pr(n,e){const t=nt(e==="float"?2:0),s=["r","g","b"];return`{${Rt(n.getComponents("rgb",e)).map((P,D)=>`${s[D]}: ${t(P)}`).join(", ")}}`}function Go(n){return e=>pr(e,n)}function hr(n,e){const t=nt(2),s=nt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,ne)=>{const Be=ne===3?t:s;return`${c[ne]}: ${Be(D)}`}).join(", ")}}`}function Vo(n){return e=>hr(e,n)}const Oo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ur},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Zn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Uo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ro},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:zo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Io(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Vo(e)}],[])];function Xn(n){return Oo.reduce((e,t)=>e||(ko(t.format,n)?t.stringifier:null),null)}const _n=j("apl");class Fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(_n("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(_n("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(_n("m")),this.element.appendChild(P),this.markerElem_=P;const D=e.createElement("div");D.classList.add(_n("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Fe([t[0],t[1],t[2],0],"rgb"),c=new Fe([t[0],t[1],t[2],255],"rgb"),P=["to right",Tn(s),Tn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Tn(e);const D=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class No{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Fo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new It(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,D,ne]=c.getComponents("hsv");this.value.setRawValue(new Fe([P,D,ne,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ot(Gt(!0),wt(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,ne]=s.getComponents("hsv");this.value.setRawValue(new Fe([c,P,D,ne+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){ot(Gt(!0),wt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Zt=j("coltxt");function qo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class $o{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Zt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Zt("m")),this.modeElem_=qo(e),this.modeElem_.classList.add(Zt("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(Zt("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(Zt("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){$(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Zt("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Wo(n){return nt(n==="float"?2:0)}function jo(n,e,t){const s=Bn(n,e)[t];return new Kt({min:0,max:s})}function Qn(n,e,t){return new hn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Gt(!1),parser:e.parser,props:Y.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Wo(e.colorType)}),value:W(0,{constraint:jo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Ko{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=W(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new $o(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Qn(e,t,0),Qn(e,t,1),Qn(e,t,2)];return s.forEach((c,P)=>{dn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(D,ne)=>{const Be=this.colorMode.rawValue,Le=D.rawValue.getComponents(Be,this.colorType_);return Le[P]=ne.rawValue,new Fe(Ws(Rt(Le),Le[3]),Be,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Jn=j("hpl");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Jn("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Jn("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=dr(new Fe([t,100,100],"hsv"));const s=Ze(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new It(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(Je(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,D,ne]=c.getComponents("hsv");this.value.setRawValue(new Fe([s,P,D,ne],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ot(Gt(!1),wt(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,ne]=s.getComponents("hsv");this.value.setRawValue(new Fe([c+t,P,D,ne],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){ot(Gt(!1),wt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const es=j("svp"),fr=64;class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(es()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=fr,s.width=fr,s.classList.add(es("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(es("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,D=e.getImageData(0,0,c,P),ne=D.data;for(let qe=0;qe<P;qe++)for(let We=0;We<c;We++){const Ot=Ze(We,0,c,0,100),bn=Ze(qe,0,P,100,0),vn=$s(s[0],Ot,bn),Dn=(qe*c+We)*4;ne[Dn]=vn[0],ne[Dn+1]=vn[1],ne[Dn+2]=vn[2],ne[Dn+3]=255}e.putImageData(D,0,0);const Be=Ze(s[1],0,100,0,100);this.markerElem_.style.left=`${Be}%`;const Le=Ze(s[2],0,100,100,0);this.markerElem_.style.top=`${Le}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new It(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(e.point.x,0,e.bounds.width,0,100),c=Ze(e.point.y,0,e.bounds.height,100,0),[P,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Fe([P,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Vs(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),D=Gt(!1),ne=ot(D,wt(e)),Be=ot(D,pn(e));ne===0&&Be===0||this.value.setRawValue(new Fe([t,s+ne,c+Be,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Gt(!1),s=ot(t,wt(e)),c=ot(t,pn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Qo{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new No(e,{value:this.value,viewProps:this.viewProps}),text:new hn(e,{parser:gt,baseStep:.1,props:Y.fromObject({draggingScale:.01,formatter:nt(2)}),value:W(0,{constraint:new Kt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&dn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Fe(P,s.rawValue.mode)}}),this.textC_=new Ko(e,{colorType:t.colorType,parser:gt,value:this.value,viewProps:this.viewProps}),this.view=new Co(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ts=j("colsw");class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ts()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ts("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ts("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Zn(e)}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps})}}class ns{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ke.create(t.expanded),this.swatchC_=new ea(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Pn(e,{parser:t.parser,props:Y.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new _o(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ts(e,{viewProps:this.viewProps}):null;const c=new Qo(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),dn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),te(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=oe(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ta(n,e){return Fe.isColorObject(n)?Fe.fromObject(n,e):Fe.black(e)}function na(n){return Rt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function sa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function ra(n){return new Fe([n>>16&255,n>>8&255,n&255],"rgb")}function ia(n){return new Fe([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function oa(n){return typeof n!="number"?Fe.black():ra(n)}function aa(n){return typeof n!="number"?Fe.black():ia(n)}function la(n){const e=Xn(n);return e?(t,s)=>{fn(t,e(s))}:null}function ca(n){const e=n?sa:na;return(t,s)=>{fn(t,e(s))}}function ua(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function da(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function pa(n,e){return(t,s)=>{n?ua(t,s,e):da(t,s,e)}}function ss(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ha(n){return n?e=>Zn(e,"0x"):e=>ur(e,"0x")}function fa(n){return"color"in n||"view"in n&&n.view==="color"}const _a={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!fa(e))return null;const t=Kn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ss(n.params)?aa:oa,equals:Fe.equals,writer:n=>ca(ss(n.params))},controller:n=>{const e=ss(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:"int",expanded:t??!1,formatter:ha(e),parser:Yn("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ma(n){return Fe.isRgbaColorObject(n)}function ba(n){return e=>ta(e,n)}function va(n,e){return t=>n?hr(t,e):pr(t,e)}const ga={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Fe.isColorObject(n))return null;const t=Kn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ba(Vt(n.params)),equals:Fe.equals,writer:n=>pa(ma(n.initialValue),Vt(n.params))},controller:n=>{var e;const t=Fe.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=Vt(n.params))!==null&&e!==void 0?e:"int";return new ns(n.document,{colorType:P,expanded:s??!1,formatter:va(t,P),parser:Yn(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},wa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Hn(n,Vt(e));if(!t||!Xn(t))return null;const c=Kn(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Lo((e=Vt(n.params))!==null&&e!==void 0?e:"int")},equals:Fe.equals,writer:n=>{const e=Hn(n.initialValue,Vt(n.params));if(!e)throw H.shouldNeverHappen();const t=la(e);if(!t)throw H.notBindable();return t}},controller:n=>{const e=Hn(n.initialValue,Vt(n.params));if(!e)throw H.shouldNeverHappen();const t=Xn(e);if(!t)throw H.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new ns(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Yn(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Bt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,D;return(D=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const _r=j("pndtxt");class xa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(_r()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(_r("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function ya(n,e,t){return new hn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:W(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class rs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>ya(e,t,c)),this.acs_.forEach((s,c)=>{dn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,D)=>{const ne=t.assembly.toComponents(P.rawValue);return ne[c]=D.rawValue,t.assembly.fromComponents(ne)}})}),this.view=new xa(e,{textViews:this.acs_.map(s=>s.view)})}}function mr(n,e){return"step"in n&&!G(n.step)?new yn(n.step,e):null}function br(n){return!G(n.max)&&!G(n.min)?new Kt({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Bs({max:n.max,min:n.min}):null}function Pa(n){const e=vt(n,Kt);if(e)return[e.values.get("min"),e.values.get("max")];const t=vt(n,Bs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Sa(n,e){const t=[],s=mr(n,e);s&&t.push(s);const c=br(n);c&&t.push(c);const P=jn(n.options);return P&&t.push(P),new on(t)}const Ca={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,s=De(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Cn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs,constraint:n=>Sa(n.params,n.initialValue),writer:n=>fn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&vt(s,an);if(c)return new ln(n.document,{props:new Y({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:nt(En(s,t.rawValue)),D=s&&vt(s,Kt);return D?new Wn(n.document,{baseStep:Ht(s),parser:gt,sliderProps:new Y({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:Y.fromObject({draggingScale:Yt(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new hn(n.document,{baseStep:Ht(s),parser:gt,props:Y.fromObject({draggingScale:Yt(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Mt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const vr={toComponents:n=>n.getComponents(),fromComponents:n=>new Mt(...n)},Xt=j("p2d");class Ea{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Xt()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,ae(this.element,Xt(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Xt("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(Xt("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(Xt("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Xt("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Tt=j("p2dp");class ka{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Tt()),t.layout==="popup"&&this.element.classList.add(Tt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Tt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(C,"svg");c.classList.add(Tt("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(C,"line");P.classList.add(Tt("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const D=e.createElementNS(C,"line");D.classList.add(Tt("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const ne=e.createElementNS(C,"line");ne.classList.add(Tt("l")),ne.setAttributeNS(null,"x1","50%"),ne.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ne),this.lineElem_=ne;const Be=e.createElement("div");Be.classList.add(Tt("m")),this.padElement.appendChild(Be),this.markerElem_=Be,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ze(e,-s,+s,0,100),P=Ze(t,-s,+s,0,100),D=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function gr(n,e,t){return[ot(e[0],wt(n)),ot(e[1],pn(n))*(t?1:-1)]}class Ba{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new ka(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new It(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ze(e.point.x,0,e.bounds.width,-s,+s),P=Ze(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Mt(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Vs(e.key)&&e.preventDefault();const[t,s]=gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Mt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ma{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ke.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ts(e,{viewProps:this.viewProps}):null;const P=new Ba(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new rs(e,{assembly:vr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ea(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),dn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,ne)=>ne.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),te(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=oe(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Qt{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const wr={toComponents:n=>n.getComponents(),fromComponents:n=>new Qt(...n)};function Ta(n){return Qt.isObject(n)?new Qt(n.x,n.y,n.z):new Qt}function Da(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Aa(n,e){return new Bt({assembly:wr,components:[xt("x"in n?n.x:void 0,e.x),xt("y"in n?n.y:void 0,e.y),xt("z"in n?n.z:void 0,e.z)]})}function is(n,e){return{baseStep:Ht(e),constraint:e,textProps:Y.fromObject({draggingScale:Yt(e,n),formatter:nt(En(e,n))})}}const La={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Qt.isObject(n))return null;const t=Pe,s=De(e,{x:t.optional.custom(Et),y:t.optional.custom(Et),z:t.optional.custom(Et)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ta,constraint:n=>Aa(n.params,n.initialValue),equals:Qt.equals,writer:n=>Da},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Bt))throw H.shouldNeverHappen();return new rs(n.document,{assembly:wr,axes:[is(e.rawValue.x,t.components[0]),is(e.rawValue.y,t.components[1]),is(e.rawValue.z,t.components[2])],parser:gt,value:e,viewProps:n.viewProps})}};class Jt{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const xr={toComponents:n=>n.getComponents(),fromComponents:n=>new Jt(...n)};function za(n){return Jt.isObject(n)?new Jt(n.x,n.y,n.z,n.w):new Jt}function Ia(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ua(n,e){return new Bt({assembly:xr,components:[xt("x"in n?n.x:void 0,e.x),xt("y"in n?n.y:void 0,e.y),xt("z"in n?n.z:void 0,e.z),xt("w"in n?n.w:void 0,e.w)]})}function Ra(n,e){return{baseStep:Ht(e),constraint:e,textProps:Y.fromObject({draggingScale:Yt(e,n),formatter:nt(En(e,n))})}}const Ga={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Jt.isObject(n))return null;const t=Pe,s=De(e,{x:t.optional.custom(Et),y:t.optional.custom(Et),z:t.optional.custom(Et),w:t.optional.custom(Et)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>za,constraint:n=>Ua(n.params,n.initialValue),equals:Jt.equals,writer:n=>Ia},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Bt))throw H.shouldNeverHappen();return new rs(n.document,{assembly:xr,axes:e.rawValue.getComponents().map((s,c)=>Ra(s,t.components[c])),parser:gt,value:e,viewProps:n.viewProps})}};function Va(n){const e=[],t=jn(n.options);return t&&e.push(t),new on(e)}const Oa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=De(e,{options:Pe.optional.custom(Cn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Gs,constraint:n=>Va(n.params),writer:n=>fn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&vt(s,an);return c?new ln(e,{props:new Y({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Pn(e,{parser:P=>P,props:Y.fromObject({formatter:Fn}),value:t,viewProps:n.viewProps})}},mn={monitor:{defaultInterval:200,defaultLineCount:3}},yr=j("mll");class Fa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(yr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(yr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class os{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Fa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Pr=j("sgl");class Na{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Pr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Pr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class as{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Na(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const qa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=De(e,{lineCount:Pe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>As},controller:n=>{var e;return n.value.rawValue.length===1?new as(n.document,{formatter:Ls,value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:Ls,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:mn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Dt=j("grl");class $a{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Dt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(C,"svg");s.classList.add(Dt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(C,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(Dt("t"),j("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((qe,We)=>{if(qe===void 0)return;const Ot=Ze(We,0,t,0,e.width),bn=Ze(qe,s,c,e.height,0);P.push([Ot,bn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const D=this.tooltipElem_,ne=this.value.rawValue[this.cursor_.rawValue];if(ne===void 0){D.classList.remove(Dt("t","a"));return}const Be=Ze(this.cursor_.rawValue,0,t,0,e.width),Le=Ze(ne,s,c,e.height,0);D.style.left=`${Be}px`,D.style.top=`${Le}px`,D.textContent=`${this.formatter_(ne)}`,D.classList.contains(Dt("t","a"))||(D.classList.add(Dt("t","a"),Dt("t","in")),r(D),D.classList.remove(Dt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Wa{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=W(-1),this.view=new $a(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new It(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ls(n){return"format"in n&&!G(n.format)?n.format:nt(2)}function ja(n){var e;return n.value.rawValue.length===1?new as(n.document,{formatter:ls(n.params),value:n.value,viewProps:n.viewProps}):new os(n.document,{formatter:ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:mn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ka(n){var e,t,s;return new Wa(n.document,{formatter:ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:mn.monitor.defaultLineCount,props:Y.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Sr(n){return"view"in n&&n.view==="graph"}const Ha={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,s=De(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Sr(n)?64:1,reader:n=>Rs},controller:n=>Sr(n.params)?Ka(n):ja(n)},Ya={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Pe,s=De(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Gs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new os(n.document,{formatter:Fn,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:mn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new as(n.document,{formatter:Fn,value:t,viewProps:n.viewProps})}};function Za(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=Pe,P={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(P),ne=n.binding.constraint?n.binding.constraint(P):void 0,Be=W(D(s.initialValue),{constraint:ne,equals:n.binding.equals}),Le=new xi({reader:D,target:e.target,value:Be,writer:n.binding.writer(P)}),qe=c.optional.boolean(e.params.disabled).value,We=c.optional.boolean(e.params.hidden).value,Ot=n.controller({constraint:ne,document:e.document,initialValue:s.initialValue,params:s.params,value:Le.value,viewProps:h.create({disabled:qe,hidden:We})});return new Me(e.document,{binding:Le,blade:Re(),props:Y.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Ot})}function Xa(n,e){return e===0?new gi:new wi(n,e??mn.monitor.defaultInterval)}function Qa(n,e){var t,s,c;const P=Pe,D=n.accept(e.target.read(),e.params);if(G(D))return null;const ne={target:e.target,initialValue:D.initialValue,params:D.params},Be=n.binding.reader(ne),Le=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,qe=P.optional.number(e.params.interval).value,We=new Ci({reader:Be,target:e.target,ticker:Xa(e.document,qe),value:yi(Le)}),Ot=P.optional.boolean(e.params.disabled).value,bn=P.optional.boolean(e.params.hidden).value,vn=n.controller({document:e.document,params:D.params,value:We.value,viewProps:h.create({disabled:Ot,hidden:bn})});return new Ne(e.document,{binding:We,blade:Re(),props:Y.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:vn})}class Ja{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new H({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((D,ne)=>D??Za(ne,{document:e,target:t,params:s}),null);if(P)return P;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,D)=>P??Qa(D,{document:e,params:s,target:t}),null);if(c)return c;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??vi(P,{document:e,params:t}),null);if(!s)throw new H({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Me)return new Ie(e);if(e instanceof Ne)return new Oe(e);if(e instanceof je)return new dt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw H.shouldNeverHappen();return t}}function el(){const n=new Ja;return[ol,La,Ga,Oa,Ca,wa,ga,_a,fo,qa,Ya,Ha,ve,nn,hi,Es].forEach(e=>{n.register(e)}),n}function tl(n){return Mt.isObject(n)?new Mt(n.x,n.y):new Mt}function nl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function xt(n,e){if(!n)return;const t=[],s=mr(n,e);s&&t.push(s);const c=br(n);return c&&t.push(c),new on(t)}function sl(n,e){return new Bt({assembly:vr,components:[xt("x"in n?n.x:void 0,e.x),xt("y"in n?n.y:void 0,e.y)]})}function Cr(n,e){const[t,s]=n?Pa(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Ht(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function rl(n,e){const t=e instanceof Bt?e.components[0]:void 0,s=e instanceof Bt?e.components[1]:void 0,c=Cr(t,n.x),P=Cr(s,n.y);return Math.max(c,P)}function Er(n,e){return{baseStep:Ht(e),constraint:e,textProps:Y.fromObject({draggingScale:Yt(e,n),formatter:nt(En(e,n))})}}function il(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ol={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Mt.isObject(n))return null;const t=Pe,s=De(e,{expanded:t.optional.boolean,picker:t.optional.custom(Ns),x:t.optional.custom(Et),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tl,constraint:n=>sl(n.params,n.initialValue),equals:Mt.equals,writer:n=>nl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Bt))throw H.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Ma(e,{axes:[Er(t.rawValue.x,s.components[0]),Er(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:il(n.params),maxValue:rl(t.rawValue,s),parser:gt,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class kr extends w{constructor(e){super(e),this.emitter_=new R,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Br extends w{constructor(e){super(e),this.emitter_=new R,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Mr extends w{constructor(e){super(e),this.emitter_=new R,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const al=function(){return{id:"list",type:"blade",accept(n){const e=Pe,t=De(n,{options:e.required.custom(Cn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new an(qs(n.params.options)),t=W(n.params.value,{constraint:e}),s=new ln(n.document,{props:new Y({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:Y.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof ln)?null:new kr(n.controller)}}}();function ll(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function cl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class ul extends pt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Me).map(s=>s.binding);cl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Me).map(t=>t.binding.target);return ll(e)}refresh(){this.controller_.rackController.rack.find(Me).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ne).forEach(e=>{e.binding.read()})}}class dl extends tn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const pl={id:"slider",type:"blade",accept(n){const e=Pe,t=De(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Kt({max:n.params.max,min:n.params.min}),P=new Wn(n.document,{baseStep:1,parser:gt,sliderProps:new Y({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:Y.fromObject({draggingScale:Yt(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:no}),value:W(s,{constraint:c}),viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:Y.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof Wn)?null:new Br(n.controller)}},hl=function(){return{id:"text",type:"blade",accept(n){const e=Pe,t=De(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Pn(n.document,{parser:n.params.parse,props:Y.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:W(n.params.value),viewProps:n.viewProps});return new jt(n.document,{blade:n.blade,props:Y.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof jt)||!(n.controller.valueController instanceof Pn)?null:new Mr(n.controller)}}}();function fl(n){const e=n.createElement("div");return e.classList.add(j("dfw")()),n.body&&n.body.appendChild(e),e}function Tr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class _l extends ul{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),D=el(),ne=new dl(P,{expanded:c.expanded,blade:Re(),props:Y.fromObject({title:c.title}),viewProps:h.create()});super(ne,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:fl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw H.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw H.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Tr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Tr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[pl,al,Es,hl]})}}const ml=new S("3.1.10");f.BladeApi=w,f.ButtonApi=de,f.FolderApi=pt,f.InputBindingApi=Ie,f.ListApi=kr,f.MonitorBindingApi=Oe,f.Pane=_l,f.SeparatorApi=vs,f.SliderApi=Br,f.TabApi=Ps,f.TabPageApi=ys,f.TextApi=Mr,f.TpChangeEvent=M,f.VERSION=ml,Object.defineProperty(f,"__esModule",{value:!0})})})(us,us.exports);var Nl=us.exports;const ql=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,$l=`// 2DGS render — vertex+fragment.
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
`,Wl=`const WG_SIZE = 256u;
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
}`,jl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
            // scan barrier with \`alive = 0\`. We compute pixel coords with the
            // wgpu framebuffer convention (ndc.xy·0.5 + 0.5)·(W,H) — camera.proj
            // has the y-flip baked in already (see camera.ts::get_projection_matrix)
            // so ndc.y is Y-down and matches the depth texture row-major layout.
            // The margin (1e-4 in NDC z) hides fp32 fighting between the
            // projected surfel center and the mesh's rasterized depth.
            var mesh_occluded : bool = false;
            if (render_settings.accel_flags & 8u) != 0u {
                let W_c = camera.viewport.x;
                let H_c = camera.viewport.y;
                let inv_w_c = 1.0 / pos2d.w;
                let ndc_c = pos2d.xy * inv_w_c;
                let px_f = (ndc_c.x * 0.5 + 0.5) * W_c;
                let py_f = (ndc_c.y * 0.5 + 0.5) * H_c;
                // View-clip lets surfels project up to ±1.2× outside the
                // frame; textureLoad past texture bounds returns 0 (near),
                // which would false-cull edge surfels. Range-check first;
                // out-of-range → skip the cull (keep the surfel).
                if px_f >= 0.0 && py_f >= 0.0 && px_f < W_c && py_f < H_c {
                    let tex_dims = vec2<i32>(textureDimensions(mesh_depth_tex));
                    let tx = clamp(i32(px_f), 0, tex_dims.x - 1);
                    let ty = clamp(i32(py_f), 0, tex_dims.y - 1);
                    let mesh_z = textureLoad(mesh_depth_tex, vec2<i32>(tx, ty), 0);
                    // Small margin absorbs the half-pixel offset between
                    // sample point and rasterized triangle center + fp32
                    // fighting on grazing planes.
                    if z_ndc > mesh_z + 1e-4 {
                        mesh_occluded = true;
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
`,Kl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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

@vertex
fn vs_main(@location(0) position : vec3<f32>) -> @builtin(position) vec4<f32> {
    // Same view*proj chain the surfel_cull shader uses for z_ndc — critical
    // so the depths are directly comparable without any rescaling.
    return camera.proj * camera.view * vec4<f32>(position, 1.0);
}
`,Hl=`// shader implementing gpu radix sort.

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
`,Yl=`// shader implementing gpu radix sort.

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
`,Zl=`// ============================================================================
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
}`,ei=32,ds=1,ps=2,Fr=4,hs=8,Xl=0,At=new ArrayBuffer(ei),rt={canvas_size:new Uint32Array(At,0,2),accel_flags:new Uint32Array(At,8,1),feature_mode:new Uint32Array(At,12,1),gaussian_scaling:new Float32Array(At,16,1),sh_bias:new Float32Array(At,20,1),color_K:new Uint32Array(At,24,1),walltime:new Float32Array(At,28,1)};function Ql(i){rt.canvas_size[0]=i.width>>>0,rt.canvas_size[1]=i.height>>>0,rt.accel_flags[0]=(i.accel_flags??ds|ps)>>>0,rt.feature_mode[0]=(i.feature_mode??Xl)>>>0,rt.gaussian_scaling[0]=i.gaussian_scaling??1,rt.sh_bias[0]=i.sh_bias??.5,rt.color_K[0]=(i.color_K??0)>>>0,rt.walltime[0]=i.walltime??0}function ti(i,l){i.queue.writeBuffer(l,0,At)}function Rn(i,l,f){f&&i&&l&&ti(i,l)}function An(i,l,f,S,w=!0){rt.canvas_size[0]=i>>>0,rt.canvas_size[1]=l>>>0,Rn(f??null,S??null,w)}function Nr(i,l,f,S=!0){rt.gaussian_scaling[0]=i,Rn(l??null,f??null,S)}function qr(i,l,f,S=!0){rt.sh_bias[0]=i,Rn(l??null,f??null,S)}function ni(i,l,f,S=!0){let w=rt.accel_flags[0];i.oac!==void 0&&(w=i.oac?w|ds:w&~ds),i.spr!==void 0&&(w=i.spr?w|ps:w&~ps),i.bfc!==void 0&&(w=i.bfc?w|Fr:w&~Fr),i.meshCull!==void 0&&(w=i.meshCull?w|hs:w&~hs),rt.accel_flags[0]=w>>>0,Rn(l??null,f??null,S)}const Jl=256,ec=ei,tc=8,nc=80,sc=12,bs=8,yt=1<<bs,Nt=256,zn=32/bs,rc=0,$r=zn&1;function Wr(i,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ic(i,l){const f=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=i.createPipelineLayout({bindGroupLayouts:[f]}),w=k=>i.createComputePipeline({layout:S,compute:{module:l,entryPoint:k,constants:{WG_SIZE:Nt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function oc(i,l,f){const S=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=i.createPipelineLayout({bindGroupLayouts:[S]}),M=i.createPipelineLayout({bindGroupLayouts:[w]}),F=[];for(let T=0;T<zn;T++){const L={PASS_ID:T+rc,RS_RADIX_LOG2:bs,RS_RADIX_SIZE:yt};F.push({localHistogram:i.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:L}}),scatterElements:i.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:L}})})}return{passes:F,localHistogramBindGroupLayout:S,scatterBindGroupLayout:w}}function ac(i){const l=i.createShaderModule({label:"local histogram",code:Yl}),f=i.createShaderModule({label:"scatter",code:Hl}),S=i.createShaderModule({label:"blelloch prefix",code:Zl}),w=ic(i,S),k=oc(i,l,f);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function lc(i){const l=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),S=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=i.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(k,0,new ArrayBuffer(48));const M=i.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),F=M.createView({dimension:"2d"}),T=i.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),L=i.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),O=L.createView({dimension:"2d"}),G=i.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Z={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:S,rectsBuffer:w,texParamsBuffer:k,meta:Z,rvqCodebookTexture:M,rvqCodebookView:F,rvqCodebookSampler:T,rvqPackedIndicesTexture:L,rvqPackedIndicesView:O,rvqSurfelOffsetsBuffer:G}}class cc{constructor(l,f,S,w,k,M=null,F=null){Q(this,"device");Q(this,"pc");Q(this,"presentationFormat");Q(this,"camera_buffer");Q(this,"render_settings_buffer");Q(this,"draw_indirect_buffer");Q(this,"splat_2d_buffer");Q(this,"querySet");Q(this,"resolveBuffer");Q(this,"resultBuffer");Q(this,"queriesPerFrame",tc);Q(this,"queryCapacityFrames",200);Q(this,"sort_prefixBindGroup");Q(this,"sort_pipelines");Q(this,"sort_localHistogramBindGroups");Q(this,"sort_scatterBindGroups");Q(this,"lastFrame",0);Q(this,"frameCount",0);Q(this,"preprocessPipeline");Q(this,"cullPipeline");Q(this,"renderPipeline");Q(this,"indirectPipeline");Q(this,"sort_info_buffer");Q(this,"sort_ping_pong");Q(this,"crsBg");Q(this,"gsBg");Q(this,"cullBg2");Q(this,"preprocessBg1");Q(this,"renderSplatsBindGroup");Q(this,"renderSettingsBindGroup");Q(this,"atlasBindGroup");Q(this,"indirectBindGroup");Q(this,"sh_solvers_buffer");Q(this,"mesh");Q(this,"meshDepthPipeline",null);Q(this,"meshDepthCameraBindGroup",null);Q(this,"meshDepthTexture",null);Q(this,"meshDepthView",null);Q(this,"meshCullBindGroupLayout");Q(this,"meshCullBindGroup");Q(this,"meshCullWidth",0);Q(this,"meshCullHeight",0);Q(this,"meshStubTexture");Q(this,"meshStubView");Q(this,"bgColor",[0,0,0,0]);Q(this,"showPerfDialogNext",!1);Q(this,"requestReorderNextFrame",!1);Q(this,"reorderInFlight",!1);Q(this,"downloadOnceNextRead",!1);Q(this,"downloadOnceFileName","fps_metrics");Q(this,"allFrameTimes",[]);Q(this,"lastStageBreakdownMs",null);Q(this,"timeQueryEnabled");Q(this,"atlas");this.mesh=F;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&it("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=S,this.camera_buffer=w,this.atlas=M??lc(f),f.addEventListener("uncapturederror",Y=>{console.error("A WebGPU error was not captured:",Y.error)}),this._setupTimestampQueries(),this._setupBuffers();const L=(Math.floor((this.pc.num_points+Nt-1)/Nt)+1)*Nt,O=Math.ceil(L/Nt);console.log(`keys count adjusted: ${L}`),console.log(`key size: ${this.pc.num_points}`);const G=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ac(f);const Z=[Wr(L,f),Wr(L,f)],U=f.createBuffer({label:"workgroup histograms",size:O*yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=f.createBuffer({label:"workgroup prefixes",size:O*yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"digit base",size:yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=Math.ceil(O/Nt),de=Math.ceil(q/Nt),R=f.createBuffer({label:"prefix l0 sums",size:q*yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=f.createBuffer({label:"prefix l0 offsets",size:q*yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=f.createBuffer({label:"prefix l1 sums",size:de*yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=f.createBuffer({label:"prefix l1 offsets",size:de*yt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:U}},{binding:2,resource:{buffer:X}},{binding:3,resource:{buffer:R}},{binding:4,resource:{buffer:J}},{binding:5,resource:{buffer:j}},{binding:6,resource:{buffer:ee}},{binding:7,resource:{buffer:H}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:U}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:U}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:X}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:X}}]})],this.sort_info_buffer=G,this.sort_ping_pong=Z;const I=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),re=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),K=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:I,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:re,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:K,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const ae=this.device.createShaderModule({code:Wl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ae,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const be=this.device.createShaderModule({code:jl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[I,he,re,this.meshCullBindGroupLayout]}),compute:{module:be,entryPoint:"surfel_cull"}}),this.mesh!==null){const Y=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:Y,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createShaderModule({code:Kl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[Y]}),vertex:{module:ie,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const ze=this.device.createShaderModule({code:ql});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[I,K]}),compute:{module:ze,entryPoint:"preprocess"}});const Te=this.device.createShaderModule({code:$l});Te.getCompilationInfo().then(Y=>{Y.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Y.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Ue=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ge=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ye=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),W=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Ue,ge,ye]}),vertex:{module:Te,entryPoint:"vs_main"},fragment:{module:Te,entryPoint:"fs_main",constants:{BETA_KERNEL:W},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(Y=>{Y?console.error("[render_2dgs] pipeline create validation error:",Y.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Ue,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[$r].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ye,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshCullEnabled(l){ni({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}ensureMeshDepthTexture(l,f){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&Qr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),S=f*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[$r].sort_indices_buffer,0,w,0,S),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(l,f,S=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(rt.accel_flags[0]&hs)!==0){const T=rt.canvas_size[0],L=rt.canvas_size[1];this.ensureMeshDepthTexture(T,L);const O={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(O);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const L=l.beginComputePass(T);L.setPipeline(this.cullPipeline),L.setBindGroup(0,this.crsBg),L.setBindGroup(1,this.gsBg),L.setBindGroup(2,this.cullBg2),L.setBindGroup(3,this.meshCullBindGroup);const O=Math.ceil(this.pc.num_points/Jl);L.dispatchWorkgroups(O,1,1),L.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const L=l.beginComputePass(T);L.setPipeline(this.preprocessPipeline),L.setBindGroup(0,this.crsBg),L.setBindGroup(1,this.preprocessBg1),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),L.end()}for(let T=0;T<zn;T++){const L=T&1,O=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[L],Z=this.sort_scatterBindGroups[L];{const U={label:`upsweep_round${T}`};M&&T==0&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const X=l.beginComputePass(U);X.setPipeline(O.localHistogram),X.setBindGroup(0,G),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const U=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),U.end()}{const U=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),U.end()}{const U=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroups(1,yt,1),U.end()}{const U=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),U.end()}{const U=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),U.end()}{const U=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroups(1,1,1),U.end()}{const U={label:`scatter_round${T}`};M&&T==zn-1&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const X=l.beginComputePass(U);X.setPipeline(O.scatterElements),X.setBindGroup(0,Z),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{const T={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const L=l.beginRenderPass(T);L.setPipeline(this.renderPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),F=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let L=0;for(let de=0;de<M;de++){const R=(F+de)%this.queryCapacityFrames,J=R*this.queriesPerFrame;let j=!0;for(let ee=0;ee<w.length;ee++){const[I,he,re]=w[ee];if(k[J+re]===0n||k[J+he]===0n||k[J+he]<k[J+re]){j=!1;break}}if(!j){!f&&R%60===0&&console.debug("[timestamp] frame slot",R,"contains unwritten (0) timestamps, skipped in stats");continue}L++;for(let ee=0;ee<w.length;ee++){const[I,he,re]=w[ee],K=Number(k[J+re]),ae=Number(k[J+he]);T[ee].push((ae-K)/1e6)}}if(L===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const O=[];let G=0,Z=0,U=0;for(let de=0;de<w.length;de++){const R=w[de][0],J=T[de];let j=0;if(R==="Total"){const ee=this.allFrameTimes;j=ee.reduce((re,K)=>re+K,0)/ee.length;const I=[...ee].sort((re,K)=>re-K);G=I[Math.floor(I.length*.99)]||0;const he=ee.reduce((re,K)=>re+Math.pow(K-j,2),0)/ee.length;Z=Math.sqrt(he),U=j}else j=J.reduce((ee,I)=>ee+I,0)/J.length;O.push([R,j])}this.lastFrame+=this.frameCount,this.frameCount=0;const X=Object.fromEntries(O);this.lastStageBreakdownMs={cull:X.Culling??0,preprocess:X.Preprocess??0,sort:X.Sort??0,render:X.Render??0,total:X.Total??0};const q=`[TIMESTAMP - ${this.constructor.name}]
`+O.map(([de,R])=>`${de}: ${R.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${U.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const de=`Stage,ms
`,R=O.map(([ee,I])=>`${ee},${I.toFixed(3)}`).join(`
`),J="data:text/csv;charset=utf-8,"+encodeURIComponent(de+R),j=document.createElement("a");j.href=J,j.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(j),j.click(),j.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ec,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,S=l?l.height:1;Ql({width:f,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ti(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:en(this.pc.num_points*nc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:en(this.pc.num_points*sc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,S=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function uc(i,l){return 2*Math.atan(l/(2*i))}function dc(i,l,f,S){const w=Math.tan(S/2),k=Math.tan(f/2),M=w*i,F=-M,T=k*i,L=-T,O=et.create();return O[0]=2*i/(T-L),O[5]=-2*i/(M-F),O[2]=(T+L)/(T-L),O[6]=(M+F)/(M-F),O[14]=1,O[10]=l/(l-i),O[11]=-(l*i)/(l-i),et.transpose(O,O),O}async function pc(i){it(`loading scene camera file... : ${i}`);const f=await(await fetch(i)).json();return it(`loaded cameras count: ${f.length}`),f.map(S=>{const w=z.clone(S.position),k=ut.create(...S.rotation.flat()),M=k[0],F=k[4],T=k[8],L=k[1],O=k[5],G=k[9],Z=k[2],U=k[6],X=k[10];M*(O*X-G*U)-F*(L*X-G*Z)+T*(L*U-O*Z)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const q=et.fromMat3(k);return{position:w,rotation:q,img_name:S.img_name,id:S.id}})}const hc=4*2,fc=4*16,si=4*fc+2*hc;function _c(i){return i.createBuffer({label:"camera uniform",size:si,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Ft=new Float32Array(si/Float32Array.BYTES_PER_ELEMENT),In=class In{constructor(l,f){Q(this,"uniform_buffer");Q(this,"position",z.create());Q(this,"rotation",et.create());Q(this,"fovY",45/180*Math.PI);Q(this,"fovX");Q(this,"focal",Rr.create());Q(this,"viewport",Rr.create());Q(this,"view_matrix",et.identity());Q(this,"view_inv_matrix",et.identity());Q(this,"proj_matrix",et.identity());Q(this,"proj_inv_matrix",et.identity());Q(this,"_negPos",z.create());Q(this,"look",z.create(0,0,1));Q(this,"up",z.create(0,1,0));Q(this,"right",z.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=_c(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=uc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=dc(.01,100,this.fovX,this.fovY),et.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],et.copy(this.rotation,this.view_matrix),et.translate(this.view_matrix,this._negPos,this.view_matrix),et.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(In.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let l=0;Ft.set(this.view_matrix,l),l+=16,Ft.set(this.view_inv_matrix,l),l+=16,Ft.set(this.proj_matrix,l),l+=16,Ft.set(this.proj_inv_matrix,l),l+=16,Ft.set(this.viewport,l),l+=2,Ft.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Ft)}set_preset(l){z.copy(l.position,this.position),et.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};Q(In,"Z_AXIS",z.create(0,0,1));let fs=In;const mc=z.create(1,0,0),bc=z.create(0,1,0);function vc(i,l){const f=i[0],S=i[4],w=i[8],k=i[1],M=i[5],F=i[9],T=i[2],L=i[6],O=i[10],G=f+M+O;let Z,U,X,H;if(G>0){const q=.5/Math.sqrt(G+1);Z=.25/q,U=(L-F)*q,X=(w-T)*q,H=(k-S)*q}else if(f>M&&f>O){const q=2*Math.sqrt(1+f-M-O);Z=(L-F)/q,U=.25*q,X=(S+k)/q,H=(w+T)/q}else if(M>O){const q=2*Math.sqrt(1+M-f-O);Z=(w-T)/q,U=(S+k)/q,X=.25*q,H=(F+L)/q}else{const q=2*Math.sqrt(1+O-f-M);Z=(k-S)/q,U=(w+T)/q,X=(F+L)/q,H=.25*q}return l[0]=U,l[1]=X,l[2]=H,l[3]=Z,l}class gc{constructor(l){Q(this,"element");Q(this,"enabled",!0);Q(this,"center",z.create(0,0,0));Q(this,"up",z.create(0,1,0));Q(this,"rotation",[0,0]);Q(this,"shift",[0,0]);Q(this,"scroll",0);Q(this,"speed",.1);Q(this,"sensitivity",.08);Q(this,"leftPressed",!1);Q(this,"rightPressed",!1);Q(this,"leftDragPans",!1);Q(this,"lastX",0);Q(this,"lastY",0);Q(this,"touches",new Map);Q(this,"lastTouchCenter",null);Q(this,"lastPinchDistance",null);Q(this,"lastTwoFingerAngle",null);Q(this,"lastTouchCount",0);Q(this,"roll",0);Q(this,"_dir",z.create());Q(this,"_right",z.create());Q(this,"_upCam",z.create());Q(this,"_scratch",z.create());Q(this,"_qY",st.create());Q(this,"_qX",st.create());Q(this,"_qRot",st.create());Q(this,"_qLocal",st.create());Q(this,"_qWorldToCam",st.create());Q(this,"_scratchMat3",ut.create());Q(this,"bboxMin",null);Q(this,"bboxMax",null);Q(this,"anchor",z.create(0,0,0));Q(this,"downCallback",l=>{var f,S,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.setPointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});Q(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,S=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=S)});Q(this,"upCallback",l=>{var f,S,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.releasePointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});Q(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){z.copy(l,this.center),z.copy(l,this.anchor)}setOrbitPivot(l){z.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;z.set(f[2],f[6],f[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,l,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(z.subtract(this.center,l.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=z.create(l[0],l[1],l[2]),this.bboxMax=z.create(f[0],f[1],f[2]);const S=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,k=(l[2]+f[2])*.5;z.set(S,w,k,this.center),z.set(S,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;z.set(l[2],l[6],l[10],this._dir),z.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const F=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],L=this.bboxMax[M]-this.camera.position[M];if(Math.abs(F)>1e-8){const O=T/F,G=L/F;S=Math.max(S,Math.min(O,G)),w=Math.min(w,Math.max(O,G))}else if(T>0||L<0){k=!0;break}}!k&&S<=w&&w>0&&(f=(Math.max(S,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const S=z.dot(this._scratch,this._dir);f=S>.001?S:z.length(this._scratch)}f=Math.max(.1,f),z.scale(this._dir,f,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const S=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),S=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,k=f[1].x-f[0].x,M=f[1].y-f[0].y,F=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const L=S-this.lastTouchCenter[0],O=w-this.lastTouchCenter[1],G=Math.hypot(L,O),Z=Math.abs(F-this.lastPinchDistance);let U=T-this.lastTwoFingerAngle;U>Math.PI&&(U-=2*Math.PI),U<-Math.PI&&(U+=2*Math.PI),G>.5&&(this.shift[1]-=L,this.shift[0]+=O),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(F/this.lastPinchDistance)*10),Math.abs(U)>.0087&&(this.roll+=-U)}this.lastTouchCenter=[S,w],this.lastPinchDistance=F,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const H=f.rotation;this.up[0]=H[1],this.up[1]=H[5],this.up[2]=H[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const H=f.rotation;z.set(H[2],H[6],H[10],this._scratch),z.normalize(this._scratch,this._scratch),st.fromAxisAngle(this._scratch,this.roll,this._qRot),z.transformQuat(this.up,this._qRot,this.up),z.normalize(this.up,this.up),this.roll=0,S=!0}z.subtract(f.position,this.center,this._dir);let w=z.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);z.scale(this._dir,k/w,this._dir),w=k;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const F=z.create(M[1],M[5],M[9]);z.normalize(F,F),z.length(F)<1e-6&&z.set(0,1,0,F);const T=l*this.speed*.1*w,L=this.shift[1]*T,O=-this.shift[0]*T;z.scale(this._right,L,this._scratch),z.add(this.center,this._scratch,this.center),z.add(f.position,this._scratch,f.position),z.scale(F,O,this._scratch),z.add(this.center,this._scratch,this.center),z.add(f.position,this._scratch,f.position);const G=this.rotation[0]*l*this.sensitivity,Z=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Z)>1e-5||S){const H=f.rotation;vc(H,this._qWorldToCam),st.fromAxisAngle(mc,-Z,this._qX),st.fromAxisAngle(bc,-G,this._qY),st.multiply(this._qX,this._qY,this._qLocal),st.normalize(this._qLocal,this._qLocal),st.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),st.normalize(this._qWorldToCam,this._qWorldToCam),ut.fromQuat(this._qWorldToCam,this._scratchMat3),et.fromMat3(this._scratchMat3,f.rotation);const q=f.rotation,de=q[2],R=q[6],J=q[10];f.position[0]=this.center[0]-de*w,f.position[1]=this.center[1]-R*w,f.position[2]=this.center[2]-J*w,this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,f.position);f.update_buffer();const X=Math.pow(.8,l*60);this.rotation[0]*=X,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=X,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=X,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=X,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=X,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ri(i){const l=z.create();for(const f of i)z.add(l,f,l);return z.scale(l,1/Math.max(i.length,1),l)}function ii(i,l){const f=ut.create();ut.inverse(i,f);const S=z.create();return S[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],S[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],S[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],S}function wc(i){const l=i.slice(),f=[1,0,0,0,1,0,0,0,1],S=(T,L)=>l[T*3+L],w=(T,L,O)=>{l[T*3+L]=O},k=(T,L)=>f[T*3+L],M=(T,L,O)=>{f[T*3+L]=O};for(let T=0;T<30;T++){let L=0,O=1,G=Math.abs(S(0,1));if(Math.abs(S(0,2))>G&&(L=0,O=2,G=Math.abs(S(0,2))),Math.abs(S(1,2))>G&&(L=1,O=2,G=Math.abs(S(1,2))),G<1e-12)break;const Z=S(L,L),U=S(O,O),X=S(L,O);let H;Math.abs(Z-U)<1e-30?H=Math.PI/4*Math.sign(X):H=.5*Math.atan2(2*X,Z-U);const q=Math.cos(H),de=Math.sin(H);for(let R=0;R<3;R++){const J=S(R,L),j=S(R,O);w(R,L,q*J+de*j),w(R,O,-de*J+q*j)}for(let R=0;R<3;R++){const J=S(L,R),j=S(O,R);w(L,R,q*J+de*j),w(O,R,-de*J+q*j)}for(let R=0;R<3;R++){const J=k(R,L),j=k(R,O);M(R,L,q*J+de*j),M(R,O,-de*J+q*j)}}const F=[];for(let T=0;T<3;T++)F.push({val:S(T,T),vec:z.create(k(0,T),k(1,T),k(2,T))});return F.sort((T,L)=>L.val-T.val),{vals:[F[0].val,F[1].val,F[2].val],vecs:[F[0].vec,F[1].vec,F[2].vec]}}function xc(i,l){const f=ri(i);let S=0,w=0,k=0,M=0,F=0,T=0;for(const X of i){const H=X[0]-f[0],q=X[1]-f[1],de=X[2]-f[2];S+=H*H,w+=H*q,k+=H*de,M+=q*q,F+=q*de,T+=de*de}const L=[S,w,k,w,M,F,k,F,T],{vecs:O}=wc(L);let G=O[0],Z=O[1],U=O[2];return z.dot(U,l)<0&&(z.scale(U,-1,U),z.scale(Z,-1,Z)),{centroid:f,normal:U,u:G,v:Z}}function yc(i){let l=0,f=0,S=0,w=0,k=0,M=0,F=0,T=0,L=0;for(const[q,de]of i){const R=-2*q,J=-2*de,j=1,ee=-(q*q+de*de);l+=R*R,f+=R*J,S+=R*j,w+=J*J,k+=J*j,M+=j*j,F+=R*ee,T+=J*ee,L+=j*ee}const O=ut.create(l,f,S,f,w,k,S,k,M),G=ii(O,z.create(F,T,L)),Z=G[0],U=G[1],X=G[2],H=Z*Z+U*U-X;return{center:[Z,U],radius:Math.sqrt(Math.max(H,1e-12))}}function Pc(i,l){let f=0,S=0,w=0,k=0,M=0,F=0,T=0,L=0,O=0;for(let Z=0;Z<i.length;Z++){const U=i[Z],X=z.normalize(l[Z],z.create()),H=1-X[0]*X[0],q=-X[0]*X[1],de=-X[0]*X[2],R=1-X[1]*X[1],J=-X[1]*X[2],j=1-X[2]*X[2];f+=H,S+=q,w+=de,k+=R,M+=J,F+=j,T+=H*U[0]+q*U[1]+de*U[2],L+=q*U[0]+R*U[1]+J*U[2],O+=de*U[0]+J*U[1]+j*U[2]}const G=ut.create(f,S,w,S,k,M,w,M,F);return ii(G,z.create(T,L,O))}function oi(i,l={}){if(i.length===0)return null;const f=l.tiltDownDeg??8,S=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,M=i.map(re=>z.clone(re.position)),F=i.map(re=>{const K=re.rotation;return z.create(K[8],K[9],K[10])}),T=i.map(re=>{const K=re.rotation;return z.create(K[4],K[5],K[6])}),L=ri(T),O=z.normalize(z.scale(L,-1,z.create())),{centroid:G,normal:Z,u:U,v:X}=xc(M,O),H=M.map(re=>{const K=z.sub(re,G,z.create());return[z.dot(K,U),z.dot(K,X)]}),{center:q,radius:de}=yc(H),R=de*S,J=z.add(G,z.add(z.scale(U,q[0],z.create()),z.scale(X,q[1],z.create()),z.create()),z.create()),j=Pc(M,F),ee=R*Math.tan(f*Math.PI/180),I=z.sub(j,z.scale(Z,ee,z.create()),z.create());let he=0;if(w){const re=z.sub(M[0],J,z.create());he=Math.atan2(z.dot(re,X),z.dot(re,U))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${R.toFixed(2)}, tilt=${f}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:J,radius:R,normal:Z,u:U,v:X,lookAt:I,startPhase:he,direction:k}}function ai(i,l){const f=(i.startPhase+l*i.direction)*2*Math.PI,S=Math.cos(f),w=Math.sin(f),k=z.add(i.center,z.add(z.scale(i.u,i.radius*S,z.create()),z.scale(i.v,i.radius*w,z.create()),z.create()),z.create()),M=z.normalize(z.sub(i.lookAt,k,z.create())),F=z.cross(M,i.normal,z.create());z.length(F)<1e-6&&z.copy(i.u,F),z.normalize(F,F);const T=z.cross(M,F,z.create());z.normalize(T,T);const L=et.create();return L[0]=F[0],L[1]=T[0],L[2]=M[0],L[3]=0,L[4]=F[1],L[5]=T[1],L[6]=M[1],L[7]=0,L[8]=F[2],L[9]=T[2],L[10]=M[2],L[11]=0,L[12]=0,L[13]=0,L[14]=0,L[15]=1,{position:k,rotation:L,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Sc(i,l={}){const f=oi(i,l);if(!f)return[];const S=l.numViews??120;return Array.from({length:S},(w,k)=>({...ai(f,k/S),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Cc(i){const l=new Uint8Array(i),f=Math.min(l.byteLength,65536),S=new TextDecoder("ascii").decode(l.subarray(0,f)),w=S.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=S.slice(0,w).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const F=M.find(ie=>ie.startsWith("format"));if(!F||!F.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${F??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},L=[];let O=null;for(const ie of M)if(ie.startsWith("element ")){const[,pe,Ee]=ie.split(/\s+/);O={name:pe,count:parseInt(Ee,10),props:[],bytesPerRecord:0,hasList:!1},L.push(O)}else if(ie.startsWith("property ")&&O){const pe=ie.split(/\s+/);if(pe[1]==="list"){const Ee=pe[2],we=pe[3],ke=pe[4];O.props.push({name:ke,type:we,isList:!0,listCountType:Ee,listItemType:we}),O.hasList=!0}else{const Ee=pe[1],we=pe[2];if(O.props.push({name:we,type:Ee,isList:!1}),T[Ee]===void 0)throw new Error(`mesh PLY: unsupported prop type '${Ee}'`);O.bytesPerRecord+=T[Ee]}}const G=L.find(ie=>ie.name==="vertex"),Z=L.find(ie=>ie.name==="face"||ie.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!Z)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const U=G.props.find(ie=>ie.name==="x"),X=G.props.find(ie=>ie.name==="y"),H=G.props.find(ie=>ie.name==="z");if(!U||!X||!H)throw new Error("mesh PLY: vertex must have x/y/z");let q=0;const de=new Map;for(const ie of G.props)de.set(ie.name,{off:q,type:ie.type}),q+=T[ie.type];const R=de.get("x"),J=de.get("y"),j=de.get("z");if(R.type!==J.type||R.type!==j.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${R.type}/${J.type}/${j.type})`);const ee=R.type,I=ee==="double"||ee==="float64";if(!I&&ee!=="float"&&ee!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ee}')`);const he=new Float32Array(G.count*3),re=new DataView(i),K=k,ae=G.bytesPerRecord;for(let ie=0;ie<G.count;ie++){const pe=K+ie*ae;I?(he[ie*3+0]=re.getFloat64(pe+R.off,!0),he[ie*3+1]=re.getFloat64(pe+J.off,!0),he[ie*3+2]=re.getFloat64(pe+j.off,!0)):(he[ie*3+0]=re.getFloat32(pe+R.off,!0),he[ie*3+1]=re.getFloat32(pe+J.off,!0),he[ie*3+2]=re.getFloat32(pe+j.off,!0))}const be=K+G.count*ae,ze=Z.props.find(ie=>ie.isList);if(!ze)throw new Error("mesh PLY: face element has no list property");const Te=T[ze.listCountType],Ue=T[ze.listItemType];if(Te!==1)throw new Error(`mesh PLY: unsupported face list count size ${Te}`);let ge=be,ye=0;for(let ie=0;ie<Z.count;ie++){const pe=re.getUint8(ge);pe===3&&ye++,ge+=1+pe*Ue}const W=new Uint32Array(ye*3);ge=be;let Y=0;for(let ie=0;ie<Z.count;ie++){const pe=re.getUint8(ge);if(ge+=1,pe===3)for(let Ee=0;Ee<3;Ee++){const we=ge+Ee*Ue;let ke;if(Ue===4)ke=re.getUint32(we,!0);else if(Ue===2)ke=re.getUint16(we,!0);else if(Ue===1)ke=re.getUint8(we);else throw new Error(`mesh PLY: unsupported face index size ${Ue}`);W[Y++]=ke}ge+=pe*Ue}return{positions:he,indices:W}}function Ec(i){const l=new DataView(i);if(i.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),S=l.getUint32(4,!0),w=f*12,k=S*4;if(i.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${i.byteLength} B)`);const M=new Float32Array(i.slice(8,8+w)),F=new Uint32Array(i.slice(8+w,8+w+k));return{positions:M,indices:F}}function li(i,l){return(l??"").toLowerCase().endsWith(".ply")?Cc(i):Ec(i)}function ci(i,l){const f=i.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(f,0,l.positions);const S=i.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return i.queue.writeBuffer(S,0,l.indices),{vertexBuffer:f,indexBuffer:S,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function kc(i,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const S=await f.arrayBuffer(),w=li(S,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),ci(i,w)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Bc(i,l,f){try{const S=li(l,f);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),ci(i,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const ui="BITYMI01",Mc=0,Tc=1,Dc=2,Ac=3,Lc=4,zc=5,Ic=6;function Ln(i){const l=(i&32768)>>15,f=(i&31744)>>10,S=i&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(S/1024):f===31?S?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+S/1024)}function jr(i,l,f,S,w,k){const M=(i-f.width*.5)/S.focal[0],F=-((l-f.height*.5)/S.focal[1]),T=S.rotation,L=T[0],O=T[4],G=T[8],Z=T[1],U=T[5],X=T[9],H=T[2],q=T[6],de=T[10];let R=M*L+F*Z+H,J=M*O+F*U+q,j=M*G+F*X+de;const ee=Math.hypot(R,J,j)||1;R/=ee,J/=ee,j/=ee;const I=S.position[0],he=S.position[1],re=S.position[2],K=k*.005,ae=K*K,be=new Uint32Array(w.buffer,w.byteOffset,w.length),ze=w.length/8;let Te=1/0,Ue=0,ge=0,ye=0,W=-1;for(let Y=0;Y<ze;Y++){const ie=Y*8,pe=w[ie+0]-I,Ee=w[ie+1]-he,we=w[ie+2]-re,ke=pe*R+Ee*J+we*j;if(ke<=0)continue;const Pe=pe-ke*R,De=Ee-ke*J,$e=we-ke*j;if(Pe*Pe+De*De+$e*$e>=ae||!(be[ie+7]>>>16&1))continue;const g=be[ie+5],o=be[ie+6],h=Ln(g&65535),u=Ln(g>>>16&65535),b=Ln(o&65535),y=Ln(o>>>16&65535),E=Math.hypot(h,u,b,y)||1,C=h/E,r=u/E,m=b/E,d=y/E,p=2*(r*d+C*m),a=2*(m*d-C*r),_=1-2*(r*r+m*m),x=R*p+J*a+j*_;let v;Math.abs(x)>1e-6?(v=(pe*p+Ee*a+we*_)/x,(!isFinite(v)||v<=0)&&(v=ke)):v=ke,v<Te&&(Te=v,Ue=I+v*R,ge=he+v*J,ye=re+v*j,W=Y)}return W<0?null:[Ue,ge,ye]}function di(i){const l=new Uint8Array(i),f=new TextDecoder().decode(l.subarray(0,8));if(f!==ui)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const S=new DataView(i),w=S.getUint32(8,!0),k=12,M=20;let F=null,T=null,L=null,O=null;for(let G=0;G<w;G++){const Z=k+G*M,U=S.getUint32(Z+0,!0),X=Number(S.getBigUint64(Z+4,!0)),H=Number(S.getBigUint64(Z+12,!0)),q=l.slice(X,X+H).buffer;U===Mc||U===Tc||U===zc?F=q:U===Dc?T=q:U===Ac||U===Lc?L=q:U===Ic&&(O=q)}if(F===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:F,camerasBuffer:T,atlasBuffer:L,meshBuffer:O}}async function Uc(i,l){var M;const f=await fetch(i);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const S=(()=>{const F=f.headers.get("content-length");return F&&parseInt(F,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let k;if(!w)k=await f.arrayBuffer(),l&&l(k.byteLength,S,0);else{const F=[];let T=0,L=performance.now(),O=0;for(;;){const{done:U,value:X}=await w.read();if(U)break;F.push(X),T+=X.byteLength;const H=performance.now();if(H-L>=150&&l){const q=(T-O)/((H-L)/1e3);l(T,S,q),L=H,O=T}}const G=new Uint8Array(T);let Z=0;for(const U of F)G.set(U,Z),Z+=U.byteLength;k=G.buffer,l&&l(T,S,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===ui?{bundle:di(k),rawPly:null}:{bundle:null,rawPly:k}}function Rc(i){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=i,f.style.display="none",f.onchange=()=>{var S;return l(((S=f.files)==null?void 0:S[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Gc(i,l,f){const S=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const O=await Rc(".ply,.bitymi");if(O)if(S&&(S.style.display="none"),O.name.toLowerCase().endsWith(".bitymi")){const G=await O.arrayBuffer(),{pcBuffer:Z}=di(G),U=new File([Z],O.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),X=await cs(U,i);l(X)}else{const G=await cs(O,i);l(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),F=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),L=M.get("mesh_url");F&&(S&&(S.style.display="none"),f(F,T,L))}async function Vc(i,l,f,S){const w=new fs(i,f),k=new gc(w);let M=!1;i.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const F="rgba8unorm";l.configure({device:f,format:F,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const L=()=>{w.on_update_canvas(),T!==null&&An(i.width,i.height,f,T.render_settings_buffer)};new ResizeObserver(()=>{const K=Math.max(.25,ee.render_scale),ae=Math.max(1,Math.ceil(K*i.clientWidth)),be=Math.max(1,Math.ceil(K*i.clientHeight));i.width===ae&&i.height===be||(i.width=ae,i.height=be,L())}).observe(i);let G=0,Z=0;const U=()=>{(i.width!==G||i.height!==Z)&&(G=i.width,Z=i.height,L())},X=new URLSearchParams(window.location.search);let q=X.get("animation")==="1";k.enabled=!q;const de=X.get("camera_url"),R=X.get("mesh_cull"),J=R==="1"||R==="true",j=Math.max(1,window.devicePixelRatio||1),ee={gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:J,render_scale:1},I=new Nl.Pane({title:"Config",expanded:!0});I.addInput(ee,"animate",{label:"Animate"}).on("change",K=>{const ae=q;q=K.value,k.enabled=!K.value,!ae&&q&&he.value&&he.value.onAnimateStart(),ae&&!q&&he.value&&he.value.onAnimateStop()}),I.addInput(ee,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const he={value:null};Gc(f,K=>re(K,[],null,null),async(K,ae,be)=>{let ze=ae??de,Te,Ue=null,ge=null;const ye=K.toLowerCase();if(ye.endsWith(".bitymi")||ye.includes(".bitymi?")){ms("downloading bundle ...");try{const{bundle:Y}=await Uc(K,(pe,Ee,we)=>{const ke=pe/1048576,Pe=Ee?Ee/(1024*1024):void 0,De=we/(1024*1024),$e=Ee?Math.min(99,Math.floor(pe/Ee*100)):void 0,B=Pe?`total ${Pe.toFixed(1)} MB`:"total -- MB",N=Pe&&$e!==void 0?`${ke.toFixed(1)} MB downloaded (${$e}%)`:`${ke.toFixed(1)} MB downloaded`,g=`${De.toFixed(2)} MB/s`;Pt(`downloading bundle ...
${B}, ${N}
${g}`)});if(!Y)throw new Error("Expected a .bitymi bundle");Pt("parsing PLY ...");const ie=new File([Y.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(Te=await cs(ie,f),!ze&&Y.camerasBuffer&&(ze=URL.createObjectURL(new Blob([Y.camerasBuffer],{type:"application/json"}))),Y.atlasBuffer){const pe=Y.atlasBuffer.byteLength/1048576;Pt(`uploading atlas ...
${pe.toFixed(1)} MB BC7`);try{const Ee=Il(Y.atlasBuffer);Ue=Vl(f,Ee,!0)}catch(Ee){console.warn("[atlas] failed to parse/upload atlas:",Ee)}}Y.meshBuffer&&!be&&(Pt("uploading mesh ..."),ge=Bc(f,Y.meshBuffer,"bundle.mesh"))}catch(Y){throw gn(),Y}}else Te=await Ol(K,f);be&&(Pt("loading mesh ..."),ge=await kc(f,be));const W=ze?await pc(ze):[];W.length>0&&w.set_preset(W[0]),re(Te,W,Ue,ge)});function re(K,ae=[],be=null,ze=null){const Te=[(K.bbox.min[0]+K.bbox.max[0])/2,(K.bbox.min[1]+K.bbox.max[1])/2,(K.bbox.min[2]+K.bbox.max[2])/2];k.setBbox(K.bbox.min,K.bbox.max);const Ue=.5*Math.sqrt((K.bbox.max[0]-K.bbox.min[0])**2+(K.bbox.max[1]-K.bbox.min[1])**2+(K.bbox.max[2]-K.bbox.min[2])**2);function ge(te,ue){const le=jr(te,ue,i,w,K.surfel_data,Ue);le&&(k.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function ye(){const te=i.width*.5,ue=i.height*.5,le=jr(te,ue,i,w,K.surfel_data,Ue);if(!le)return;const Ce=w.rotation,Ae=Ce[2],_e=Ce[6],xe=Ce[10],Ie=le[0]-w.position[0],Me=le[1]-w.position[1],Oe=le[2]-w.position[2],Ne=Ie*Ae+Me*_e+Oe*xe;Ne>0&&k.setOrbitDepth(Ne)}if(ae.length===0){const te=K.bbox.max[0]-K.bbox.min[0],ue=K.bbox.max[1]-K.bbox.min[1],le=K.bbox.max[2]-K.bbox.min[2],Ae=.5*Math.sqrt(te*te+ue*ue+le*le)*.5;z.set(Te[0]-Ae,Te[1]-Ae,Te[2]-Ae,w.position);const _e=z.create(Ae,Ae,Ae);z.normalize(_e,_e);const xe=z.create(0,1,0),Ie=z.create();z.cross(xe,_e,Ie),z.normalize(Ie,Ie);const Me=z.create();z.cross(_e,Ie,Me);const Oe=ut.create(Ie[0],Me[0],_e[0],Ie[1],Me[1],_e[1],Ie[2],Me[2],_e[2]);et.fromMat3(Oe,w.rotation),w.update_buffer()}k.setCenter(z.create(K.centroid[0],K.centroid[1],K.centroid[2]));const W=new cc(K,f,F,w.uniform_buffer,S,be,ze);T=W,An(i.width,i.height,f,W.render_settings_buffer),ee.atlas_enabled=be!==null,ze===null&&(ee.mesh_cull=!1),W.setMeshCullEnabled(ee.mesh_cull),console.log(`[mesh-cull] ${ze!==null?"mesh loaded":"no mesh"} · toggle=${ee.mesh_cull}`);let Y=!1;const ie=(()=>{if(be!==null)return`${be.meta.format===2?"BC7":be.meta.format===3?"ASTC 4×4":be.meta.format===5?"RVQ-paired (typeA)":be.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":be.meta.format===7?"BC7 codebook gather (typeD)":`format=${be.meta.format}`} ${be.meta.width}×${be.meta.height}, ${be.meta.n_layers} layers`;const te=f.features.has("texture-compression-bc"),ue=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(te?["BC7"]:[]).concat(ue?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",ie),qr(K.sh_bias,f,W.render_settings_buffer),Nr(ee.gaussian_scaling,f,W.render_settings_buffer),ee.sh_bias=K.sh_bias;const pe=K.num_points.toLocaleString(),Ee={stats:`${pe} surfels · -- fps`};I.addMonitor(Ee,"stats",{label:"Stats",interval:200}),I.addMonitor({atlas:ie},"atlas",{label:"Atlas"});const we={stages:"— ms · awaiting timestamp data"};I.addMonitor(we,"stages",{label:"Stages",interval:500});let ke=null;if(W.timeQueryEnabled){ke=document.createElement("canvas"),ke.width=280,ke.height=24,ke.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(ke);const te=le=>{const Ce=ke.getContext("2d");if(!Ce)return;const Ae=ke.width,_e=ke.height;if(Ce.clearRect(0,0,Ae,_e),!le||le.total<=0){Ce.fillStyle="#888",Ce.font="11px ui-monospace,Menlo,monospace",Ce.fillText("awaiting GPU timestamps…",8,16);return}const xe=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],Ie=Math.max(.001,xe.reduce((Oe,Ne)=>Oe+Ne.ms,0));let Me=0;Ce.font="10px ui-monospace,Menlo,monospace",Ce.textBaseline="middle";for(const Oe of xe){const Ne=Oe.ms/Ie*Ae;Ce.fillStyle=Oe.color,Ce.fillRect(Me,0,Ne,_e),Ne>=38&&(Ce.fillStyle="#000c",Ce.fillText(`${Oe.label} ${Oe.ms.toFixed(1)}`,Me+4,_e/2)),Me+=Ne}};setInterval(()=>{Y||W.readPerfMetrics({silent:!0}).then(()=>{const le=W.lastStageBreakdownMs;te(le),le&&(we.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const Pe=.4,De=3,$e=.3;let B=null,N=0,g=0;const o=st.create(),h=ut.create();let u=ae.length>0?0:-1;const b={view:ae.length>0?`${u+1} / ${ae.length}: ${ae[u].img_name??u}`:"— no presets —"};I.addMonitor(b,"view",{label:"View",interval:100});function y(te){const ue=ut.create(te[0],te[1],te[2],te[4],te[5],te[6],te[8],te[9],te[10]);return st.fromMat(ue)}function E(te,ue){B={fromPos:z.clone(w.position),toPos:z.clone(te.position),fromQuat:st.normalize(y(w.rotation)),toQuat:st.normalize(y(te.rotation)),target:te,t:0,duration:Math.max(.01,ue)}}const C=(te,ue=!0)=>{if(ae.length===0)return;u=(te%ae.length+ae.length)%ae.length;const le=ae[u];ue?E(le,Pe):(w.set_preset(le),k.resetToCamera(),ye()),b.view=`${u+1} / ${ae.length}: ${ae[u].img_name??u}`};ae.length>0&&(I.addButton({title:"◀ Prev view"}).on("click",()=>C(u-1)),I.addButton({title:"Next view ▶"}).on("click",()=>C(u+1)));const r=ae.length>0?oi(ae,{tiltDownDeg:15,alignFirst:!0}):null,m=r?Sc(ae,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let d=0;const p=12;he.value={onAnimateStart:()=>{d=0},onAnimateStop:()=>{k.resetToCamera(),ye()}},I.addInput(ee,"render_scale",{label:"Render scale",min:.25,max:j,step:.25}).on("change",te=>{const ue=Math.max(.25,te.value),le=Math.max(1,Math.ceil(ue*i.clientWidth)),Ce=Math.max(1,Math.ceil(ue*i.clientHeight));(i.width!==le||i.height!==Ce)&&(i.width=le,i.height=Ce,L())}),I.addInput(ee,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",te=>Nr(te.value,f,W.render_settings_buffer)),I.addInput(ee,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",te=>qr(te.value,f,W.render_settings_buffer)),I.addInput(ee,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",te=>{W.bgColor=[te.value.r,te.value.g,te.value.b,te.value.a]});const a=be?be.meta.format===3?"Atlas (ASTC)":be.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";I.addInput(ee,"atlas_enabled",{label:a}).on("change",te=>W.setAtlasEnabled(te.value)),I.addInput(ee,"bfc",{label:"Backface"}).on("change",te=>ni({bfc:te.value},f,W.render_settings_buffer));const _=I.addInput(ee,"mesh_cull",{label:"Mesh cull"});_.on("change",te=>W.setMeshCullEnabled(te.value)),W.hasMesh||(_.disabled=!0),I.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(ae.length>0)w.set_preset(ae[0]);else{const te=K.bbox.max[0]-K.bbox.min[0],ue=K.bbox.max[1]-K.bbox.min[1],le=K.bbox.max[2]-K.bbox.min[2],Ae=.5*Math.sqrt(te*te+ue*ue+le*le)*.5;z.set(Te[0]-Ae,Te[1]-Ae,Te[2]-Ae,w.position);const _e=z.create(Ae,Ae,Ae);z.normalize(_e,_e);const xe=z.create();z.cross(z.create(0,1,0),_e,xe),z.normalize(xe,xe);const Ie=z.create();z.cross(_e,xe,Ie);const Me=ut.create(xe[0],Ie[0],_e[0],xe[1],Ie[1],_e[1],xe[2],Ie[2],_e[2]);et.fromMat3(Me,w.rotation),w.update_buffer()}k.resetToCamera(),ye()});const x={result:"— click Benchmark —"};I.addMonitor(x,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const v={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function A(){const ue=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(v))if(ue.startsWith(le))return le;return null}const V=document.createElement("div");V.id="bench-overlay",V.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(V);function $(te,ue,le){const Ce=Math.floor(ue/Math.max(1,le)*100),Ae=32,_e=Math.floor(ue/Math.max(1,le)*Ae),xe="█".repeat(_e)+"░".repeat(Ae-_e);V.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${te}</div><div>[${xe}] ${Ce}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ue} / ${le} frames · offscreen · pipelined · no vsync</div>`,V.style.display="block"}function ce(){V.style.display="none"}async function oe(te=10,ue=200){if(Y)return;if(ae.length===0){x.result="no cameras to benchmark";return}Y=!0;const le=q,Ce=ee.animate,Ae=new Float32Array(w.position),_e=new Float32Array(w.rotation);q=!1,ee.animate=!1,I.refresh(),B=null,k.enabled=!1;const xe=A(),Ie=xe?v[xe]:null,Me=(Ie==null?void 0:Ie.w)??i.width,Oe=(Ie==null?void 0:Ie.h)??i.height,Ne=(Ie==null?void 0:Ie.fovY)??w.getFov(),tt=xe?`${xe} · ${Me>=4e3/4+500?"images_4":"images_2"}`:"custom",Xe=i.width,ht=i.height,dt=w.getFov();i.width=Me,i.height=Oe,w.setFov(Ne),An(Me,Oe,f,W.render_settings_buffer);const pt=f.createTexture({size:[Me,Oe,1],format:F,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ft=pt.createView(),St=()=>{const Qe=f.createCommandEncoder();W.frame(Qe,ft,!1),f.queue.submit([Qe.finish()])},mt=()=>new Promise(Qe=>setTimeout(Qe,0)),Ct=20,Lt=async(Qe,_t)=>{let bt=0,je=0;for($(_t,0,Qe),await mt();je<Qe;){const zt=Math.min(Ct,Qe-je),Wt=performance.now();for(let nn=0;nn<zt;nn++)w.set_preset(ae[(je+nn)%ae.length]),St();await f.queue.onSubmittedWorkDone();const tn=performance.now();bt+=tn-Wt,je+=zt,$(_t,je,Qe),await mt()}return bt};try{await Lt(te,"Warming up");const _t=await Lt(ue,"Benchmarking")/ue,bt=1e3/_t,je=K.num_points??K.surfel_data.length/8,zt=(Ne*180/Math.PI).toFixed(1),Wt=`${bt.toFixed(1)} FPS  (${_t.toFixed(2)} ms/frame)
${Me}×${Oe} · fovY ${zt}° · ${tt}
${je.toLocaleString()} surfels · ${te}w+${ue}b · pipelined`;x.result=Wt,console.log("[bench]",Wt.replace(/\n/g,"  |  "))}catch(Qe){console.error("[bench] failed:",Qe),x.result=`bench failed: ${Qe}`}finally{ce(),pt.destroy(),i.width=Xe,i.height=ht,w.setFov(dt),An(Xe,ht,f,W.render_settings_buffer),w.position.set(Ae),w.rotation.set(_e),w.update_buffer(),k.enabled=!le,q=le,ee.animate=Ce,I.refresh(),Y=!1}}I.addButton({title:"📊 Benchmark"}).on("click",()=>oe()),document.addEventListener("keydown",te=>{const ue=te.key;if(ue>="0"&&ue<="9"&&ae.length>0){const le=parseInt(ue);le<ae.length&&C(le)}else ue==="ArrowLeft"||ue==="PageUp"?(C(u-1),te.preventDefault()):ue==="ArrowRight"||ue==="PageDown"?(C(u+1),te.preventDefault()):(ue==="d"||ue==="D")&&W.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function se(te,ue){const le=i.getBoundingClientRect(),Ce=window.devicePixelRatio||1;return[(te-le.left)*Ce,(ue-le.top)*Ce]}i.addEventListener("dblclick",te=>{const[ue,le]=se(te.clientX,te.clientY);ge(ue,le)});let me=0,Se=0,fe=0;i.addEventListener("pointerdown",te=>{if(te.pointerType!=="touch")return;const ue=performance.now(),le=ue-me,Ce=te.clientX-Se,Ae=te.clientY-fe;if(le>0&&le<300&&Ce*Ce+Ae*Ae<40*40){const[_e,xe]=se(te.clientX,te.clientY);ge(_e,xe),me=0}else me=ue,Se=te.clientX,fe=te.clientY});function ve(){return M}let Ge=performance.now(),Re=60,Ke=Promise.resolve(),Ye=0;async function He(){var Ae;const te=performance.now(),ue=Math.min((te-Ge)/1e3,.1);if(Ge=te,ue>0){const _e=((Ae=W.lastStageBreakdownMs)==null?void 0:Ae.total)??0,xe=_e>.5?1e3/_e:1/ue;Re=Re*.9+xe*.1,Ee.stats=`${pe} surfels · ${Math.round(Re)} fps`}if(Y){requestAnimationFrame(He);return}if(ve()&&(B||q)&&(B=null,k.resetToCamera(),ye(),q&&(q=!1,ee.animate=!1,I.refresh())),q&&ee.animateMode==="circle"&&r){d+=ue/p,d>=1&&(d-=1);const _e=ai(r,d);w.set_preset(_e),k.update(ue);const xe=f.createCommandEncoder();W.frame(xe,l.getCurrentTexture().createView()),f.queue.submit([xe.finish()]),Ye++,Ye===2&&gn(),requestAnimationFrame(He);return}if(B){B.t+=ue/B.duration;const _e=Math.min(1,B.t),xe=_e*_e*(3-2*_e);z.lerp(B.fromPos,B.toPos,xe,w.position),st.slerp(B.fromQuat,B.toQuat,xe,o),ut.fromQuat(o,h),et.fromMat3(h,w.rotation),w.update_buffer(),B.t>=1&&(w.set_preset(B.target),B=null,q?ae.length>0&&(N=$e):(k.resetToCamera(),ye()))}else if(q&&!ve()){const _e=ee.animateMode==="circle"&&m.length>0,xe=_e?m:ae;if(xe.length!==0){if(N-=ue,N<=0){const Me=((_e?g:u)+1)%xe.length;_e?g=Me:u=Me;const Oe=_e?De/8:De;E(xe[Me],Oe),_e||(b.view=`${u+1} / ${ae.length}: ${ae[u].img_name??u}`)}}}k.update(ue),U(),await Ke;const le=f.createCommandEncoder(),Ce=l.getCurrentTexture().createView();W.frame(le,Ce),f.queue.submit([le.finish()]),Ke=f.queue.onSubmittedWorkDone(),Ye++,Ye===2&&gn(),requestAnimationFrame(He)}requestAnimationFrame(He)}}(function(){let l="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const k=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const i=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(i===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];i.features.has("timestamp-query")&&l.push("timestamp-query"),i.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),i.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",i.info??"(unknown)"),console.log("[adapter] features:",Array.from(i.features)),console.log("[adapter] BC7:",i.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",i.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:i.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxTextureDimension2D:i.limits.maxTextureDimension2D});const f=await i.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Al(S!==null);const w=S.getContext("webgpu");Vc(S,w,f,l)})();
