var wl=Object.defineProperty;var xl=(i,l,h)=>l in i?wl(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h;var X=(i,l,h)=>(xl(i,typeof l!="symbol"?l+"":l,h),h);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))P(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&P(M)}).observe(document,{childList:!0,subtree:!0});function h(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function P(w){if(w.ep)return;w.ep=!0;const k=h(w);fetch(w.href,k)}})();function yl(i,l){return class extends i{constructor(...h){super(...h),l(this)}}}const Pl=yl(Array,i=>i.fill(0));let Le=1e-6;function Sl(i){function l(y=0,C=0){const E=new i(2);return y!==void 0&&(E[0]=y,C!==void 0&&(E[1]=C)),E}const h=l;function P(y,C,E){const r=E??new i(2);return r[0]=y,r[1]=C,r}function w(y,C){const E=C??new i(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function k(y,C){const E=C??new i(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function M(y,C){const E=C??new i(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function R(y,C=0,E=1,r){const m=r??new i(2);return m[0]=Math.min(E,Math.max(C,y[0])),m[1]=Math.min(E,Math.max(C,y[1])),m}function T(y,C,E){const r=E??new i(2);return r[0]=y[0]+C[0],r[1]=y[1]+C[1],r}function D(y,C,E,r){const m=r??new i(2);return m[0]=y[0]+C[0]*E,m[1]=y[1]+C[1]*E,m}function V(y,C){const E=y[0],r=y[1],m=C[0],u=C[1],p=Math.sqrt(E*E+r*r),a=Math.sqrt(m*m+u*u),_=p*a,x=_&&ue(y,C)/_;return Math.acos(x)}function G(y,C,E){const r=E??new i(2);return r[0]=y[0]-C[0],r[1]=y[1]-C[1],r}const Y=G;function z(y,C){return Math.abs(y[0]-C[0])<Le&&Math.abs(y[1]-C[1])<Le}function H(y,C){return y[0]===C[0]&&y[1]===C[1]}function Z(y,C,E,r){const m=r??new i(2);return m[0]=y[0]+E*(C[0]-y[0]),m[1]=y[1]+E*(C[1]-y[1]),m}function q(y,C,E,r){const m=r??new i(2);return m[0]=y[0]+E[0]*(C[0]-y[0]),m[1]=y[1]+E[1]*(C[1]-y[1]),m}function ce(y,C,E){const r=E??new i(2);return r[0]=Math.max(y[0],C[0]),r[1]=Math.max(y[1],C[1]),r}function U(y,C,E){const r=E??new i(2);return r[0]=Math.min(y[0],C[0]),r[1]=Math.min(y[1],C[1]),r}function Q(y,C,E){const r=E??new i(2);return r[0]=y[0]*C,r[1]=y[1]*C,r}const W=Q;function ae(y,C,E){const r=E??new i(2);return r[0]=y[0]/C,r[1]=y[1]/C,r}function $(y,C){const E=C??new i(2);return E[0]=1/y[0],E[1]=1/y[1],E}const pe=$;function J(y,C,E){const r=E??new i(3),m=y[0]*C[1]-y[1]*C[0];return r[0]=0,r[1]=0,r[2]=m,r}function ue(y,C){return y[0]*C[0]+y[1]*C[1]}function we(y){const C=y[0],E=y[1];return Math.sqrt(C*C+E*E)}const Ge=we;function Be(y){const C=y[0],E=y[1];return C*C+E*E}const ze=Be;function De(y,C){const E=y[0]-C[0],r=y[1]-C[1];return Math.sqrt(E*E+r*r)}const ye=De;function Me(y,C){const E=y[0]-C[0],r=y[1]-C[1];return E*E+r*r}const O=Me;function K(y,C){const E=C??new i(2),r=y[0],m=y[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(E[0]=r/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function ne(y,C){const E=C??new i(2);return E[0]=-y[0],E[1]=-y[1],E}function he(y,C){const E=C??new i(2);return E[0]=y[0],E[1]=y[1],E}const re=he;function oe(y,C,E){const r=E??new i(2);return r[0]=y[0]*C[0],r[1]=y[1]*C[1],r}const me=oe;function ve(y,C,E){const r=E??new i(2);return r[0]=y[0]/C[0],r[1]=y[1]/C[1],r}const xe=ve;function Oe(y=1,C){const E=C??new i(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function B(y){const C=y??new i(2);return C[0]=0,C[1]=0,C}function F(y,C,E){const r=E??new i(2),m=y[0],u=y[1];return r[0]=m*C[0]+u*C[4]+C[12],r[1]=m*C[1]+u*C[5]+C[13],r}function b(y,C,E){const r=E??new i(2),m=y[0],u=y[1];return r[0]=C[0]*m+C[4]*u+C[8],r[1]=C[1]*m+C[5]*u+C[9],r}function o(y,C,E,r){const m=r??new i(2),u=y[0]-C[0],p=y[1]-C[1],a=Math.sin(E),_=Math.cos(E);return m[0]=u*_-p*a+C[0],m[1]=u*a+p*_+C[1],m}function f(y,C,E){const r=E??new i(2);return K(y,r),Q(r,C,r)}function d(y,C,E){const r=E??new i(2);return we(y)>C?f(y,C,r):he(y,r)}function g(y,C,E){const r=E??new i(2);return Z(y,C,.5,r)}return{create:l,fromValues:h,set:P,ceil:w,floor:k,round:M,clamp:R,add:T,addScaled:D,angle:V,subtract:G,sub:Y,equalsApproximately:z,equals:H,lerp:Z,lerpV:q,max:ce,min:U,mulScalar:Q,scale:W,divScalar:ae,inverse:$,invert:pe,cross:J,dot:ue,length:we,len:Ge,lengthSq:Be,lenSq:ze,distance:De,dist:ye,distanceSq:Me,distSq:O,normalize:K,negate:ne,copy:he,clone:re,multiply:oe,mul:me,divide:ve,div:xe,random:Oe,zero:B,transformMat4:F,transformMat3:b,rotate:o,setLength:f,truncate:d,midpoint:g}}const Rr=new Map;function ni(i){let l=Rr.get(i);return l||(l=Sl(i),Rr.set(i,l)),l}function Cl(i){function l(a,_,x){const v=new i(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,x!==void 0&&(v[2]=x))),v}const h=l;function P(a,_,x,v){const I=v??new i(3);return I[0]=a,I[1]=_,I[2]=x,I}function w(a,_){const x=_??new i(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,_){const x=_??new i(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function M(a,_){const x=_??new i(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function R(a,_=0,x=1,v){const I=v??new i(3);return I[0]=Math.min(x,Math.max(_,a[0])),I[1]=Math.min(x,Math.max(_,a[1])),I[2]=Math.min(x,Math.max(_,a[2])),I}function T(a,_,x){const v=x??new i(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function D(a,_,x,v){const I=v??new i(3);return I[0]=a[0]+_[0]*x,I[1]=a[1]+_[1]*x,I[2]=a[2]+_[2]*x,I}function V(a,_){const x=a[0],v=a[1],I=a[2],N=_[0],j=_[1],le=_[2],se=Math.sqrt(x*x+v*v+I*I),te=Math.sqrt(N*N+j*j+le*le),fe=se*te,Pe=fe&&ue(a,_)/fe;return Math.acos(Pe)}function G(a,_,x){const v=x??new i(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const Y=G;function z(a,_){return Math.abs(a[0]-_[0])<Le&&Math.abs(a[1]-_[1])<Le&&Math.abs(a[2]-_[2])<Le}function H(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function Z(a,_,x,v){const I=v??new i(3);return I[0]=a[0]+x*(_[0]-a[0]),I[1]=a[1]+x*(_[1]-a[1]),I[2]=a[2]+x*(_[2]-a[2]),I}function q(a,_,x,v){const I=v??new i(3);return I[0]=a[0]+x[0]*(_[0]-a[0]),I[1]=a[1]+x[1]*(_[1]-a[1]),I[2]=a[2]+x[2]*(_[2]-a[2]),I}function ce(a,_,x){const v=x??new i(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function U(a,_,x){const v=x??new i(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function Q(a,_,x){const v=x??new i(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const W=Q;function ae(a,_,x){const v=x??new i(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function $(a,_){const x=_??new i(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const pe=$;function J(a,_,x){const v=x??new i(3),I=a[2]*_[0]-a[0]*_[2],N=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=I,v[2]=N,v}function ue(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function we(a){const _=a[0],x=a[1],v=a[2];return Math.sqrt(_*_+x*x+v*v)}const Ge=we;function Be(a){const _=a[0],x=a[1],v=a[2];return _*_+x*x+v*v}const ze=Be;function De(a,_){const x=a[0]-_[0],v=a[1]-_[1],I=a[2]-_[2];return Math.sqrt(x*x+v*v+I*I)}const ye=De;function Me(a,_){const x=a[0]-_[0],v=a[1]-_[1],I=a[2]-_[2];return x*x+v*v+I*I}const O=Me;function K(a,_){const x=_??new i(3),v=a[0],I=a[1],N=a[2],j=Math.sqrt(v*v+I*I+N*N);return j>1e-5?(x[0]=v/j,x[1]=I/j,x[2]=N/j):(x[0]=0,x[1]=0,x[2]=0),x}function ne(a,_){const x=_??new i(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function he(a,_){const x=_??new i(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const re=he;function oe(a,_,x){const v=x??new i(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const me=oe;function ve(a,_,x){const v=x??new i(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const xe=ve;function Oe(a=1,_){const x=_??new i(3),v=Math.random()*2*Math.PI,I=Math.random()*2-1,N=Math.sqrt(1-I*I)*a;return x[0]=Math.cos(v)*N,x[1]=Math.sin(v)*N,x[2]=I*a,x}function B(a){const _=a??new i(3);return _[0]=0,_[1]=0,_[2]=0,_}function F(a,_,x){const v=x??new i(3),I=a[0],N=a[1],j=a[2],le=_[3]*I+_[7]*N+_[11]*j+_[15]||1;return v[0]=(_[0]*I+_[4]*N+_[8]*j+_[12])/le,v[1]=(_[1]*I+_[5]*N+_[9]*j+_[13])/le,v[2]=(_[2]*I+_[6]*N+_[10]*j+_[14])/le,v}function b(a,_,x){const v=x??new i(3),I=a[0],N=a[1],j=a[2];return v[0]=I*_[0*4+0]+N*_[1*4+0]+j*_[2*4+0],v[1]=I*_[0*4+1]+N*_[1*4+1]+j*_[2*4+1],v[2]=I*_[0*4+2]+N*_[1*4+2]+j*_[2*4+2],v}function o(a,_,x){const v=x??new i(3),I=a[0],N=a[1],j=a[2];return v[0]=I*_[0]+N*_[4]+j*_[8],v[1]=I*_[1]+N*_[5]+j*_[9],v[2]=I*_[2]+N*_[6]+j*_[10],v}function f(a,_,x){const v=x??new i(3),I=_[0],N=_[1],j=_[2],le=_[3]*2,se=a[0],te=a[1],fe=a[2],Pe=N*fe-j*te,be=j*se-I*fe,ge=I*te-N*se;return v[0]=se+Pe*le+(N*ge-j*be)*2,v[1]=te+be*le+(j*Pe-I*ge)*2,v[2]=fe+ge*le+(I*be-N*Pe)*2,v}function d(a,_){const x=_??new i(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function g(a,_,x){const v=x??new i(3),I=_*4;return v[0]=a[I+0],v[1]=a[I+1],v[2]=a[I+2],v}function y(a,_){const x=_??new i(3),v=a[0],I=a[1],N=a[2],j=a[4],le=a[5],se=a[6],te=a[8],fe=a[9],Pe=a[10];return x[0]=Math.sqrt(v*v+I*I+N*N),x[1]=Math.sqrt(j*j+le*le+se*se),x[2]=Math.sqrt(te*te+fe*fe+Pe*Pe),x}function C(a,_,x,v){const I=v??new i(3),N=[],j=[];return N[0]=a[0]-_[0],N[1]=a[1]-_[1],N[2]=a[2]-_[2],j[0]=N[0],j[1]=N[1]*Math.cos(x)-N[2]*Math.sin(x),j[2]=N[1]*Math.sin(x)+N[2]*Math.cos(x),I[0]=j[0]+_[0],I[1]=j[1]+_[1],I[2]=j[2]+_[2],I}function E(a,_,x,v){const I=v??new i(3),N=[],j=[];return N[0]=a[0]-_[0],N[1]=a[1]-_[1],N[2]=a[2]-_[2],j[0]=N[2]*Math.sin(x)+N[0]*Math.cos(x),j[1]=N[1],j[2]=N[2]*Math.cos(x)-N[0]*Math.sin(x),I[0]=j[0]+_[0],I[1]=j[1]+_[1],I[2]=j[2]+_[2],I}function r(a,_,x,v){const I=v??new i(3),N=[],j=[];return N[0]=a[0]-_[0],N[1]=a[1]-_[1],N[2]=a[2]-_[2],j[0]=N[0]*Math.cos(x)-N[1]*Math.sin(x),j[1]=N[0]*Math.sin(x)+N[1]*Math.cos(x),j[2]=N[2],I[0]=j[0]+_[0],I[1]=j[1]+_[1],I[2]=j[2]+_[2],I}function m(a,_,x){const v=x??new i(3);return K(a,v),Q(v,_,v)}function u(a,_,x){const v=x??new i(3);return we(a)>_?m(a,_,v):he(a,v)}function p(a,_,x){const v=x??new i(3);return Z(a,_,.5,v)}return{create:l,fromValues:h,set:P,ceil:w,floor:k,round:M,clamp:R,add:T,addScaled:D,angle:V,subtract:G,sub:Y,equalsApproximately:z,equals:H,lerp:Z,lerpV:q,max:ce,min:U,mulScalar:Q,scale:W,divScalar:ae,inverse:$,invert:pe,cross:J,dot:ue,length:we,len:Ge,lengthSq:Be,lenSq:ze,distance:De,dist:ye,distanceSq:Me,distSq:O,normalize:K,negate:ne,copy:he,clone:re,multiply:oe,mul:me,divide:ve,div:xe,random:Oe,zero:B,transformMat4:F,transformMat4Upper3x3:b,transformMat3:o,transformQuat:f,getTranslation:d,getAxis:g,getScaling:y,rotateX:C,rotateY:E,rotateZ:r,setLength:m,truncate:u,midpoint:p}}const Vr=new Map;function Kn(i){let l=Vr.get(i);return l||(l=Cl(i),Vr.set(i,l)),l}function El(i){const l=ni(i),h=Kn(i);function P(o,f,d,g,y,C,E,r,m){const u=new i(12);return u[3]=0,u[7]=0,u[11]=0,o!==void 0&&(u[0]=o,f!==void 0&&(u[1]=f,d!==void 0&&(u[2]=d,g!==void 0&&(u[4]=g,y!==void 0&&(u[5]=y,C!==void 0&&(u[6]=C,E!==void 0&&(u[8]=E,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function w(o,f,d,g,y,C,E,r,m,u){const p=u??new i(12);return p[0]=o,p[1]=f,p[2]=d,p[3]=0,p[4]=g,p[5]=y,p[6]=C,p[7]=0,p[8]=E,p[9]=r,p[10]=m,p[11]=0,p}function k(o,f){const d=f??new i(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[3]=0,d[4]=o[4],d[5]=o[5],d[6]=o[6],d[7]=0,d[8]=o[8],d[9]=o[9],d[10]=o[10],d[11]=0,d}function M(o,f){const d=f??new i(12),g=o[0],y=o[1],C=o[2],E=o[3],r=g+g,m=y+y,u=C+C,p=g*r,a=y*r,_=y*m,x=C*r,v=C*m,I=C*u,N=E*r,j=E*m,le=E*u;return d[0]=1-_-I,d[1]=a+le,d[2]=x-j,d[3]=0,d[4]=a-le,d[5]=1-p-I,d[6]=v+N,d[7]=0,d[8]=x+j,d[9]=v-N,d[10]=1-p-_,d[11]=0,d}function R(o,f){const d=f??new i(12);return d[0]=-o[0],d[1]=-o[1],d[2]=-o[2],d[4]=-o[4],d[5]=-o[5],d[6]=-o[6],d[8]=-o[8],d[9]=-o[9],d[10]=-o[10],d}function T(o,f,d){const g=d??new i(12);return g[0]=o[0]*f,g[1]=o[1]*f,g[2]=o[2]*f,g[4]=o[4]*f,g[5]=o[5]*f,g[6]=o[6]*f,g[8]=o[8]*f,g[9]=o[9]*f,g[10]=o[10]*f,g}const D=T;function V(o,f,d){const g=d??new i(12);return g[0]=o[0]+f[0],g[1]=o[1]+f[1],g[2]=o[2]+f[2],g[4]=o[4]+f[4],g[5]=o[5]+f[5],g[6]=o[6]+f[6],g[8]=o[8]+f[8],g[9]=o[9]+f[9],g[10]=o[10]+f[10],g}function G(o,f){const d=f??new i(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[4]=o[4],d[5]=o[5],d[6]=o[6],d[8]=o[8],d[9]=o[9],d[10]=o[10],d}const Y=G;function z(o,f){return Math.abs(o[0]-f[0])<Le&&Math.abs(o[1]-f[1])<Le&&Math.abs(o[2]-f[2])<Le&&Math.abs(o[4]-f[4])<Le&&Math.abs(o[5]-f[5])<Le&&Math.abs(o[6]-f[6])<Le&&Math.abs(o[8]-f[8])<Le&&Math.abs(o[9]-f[9])<Le&&Math.abs(o[10]-f[10])<Le}function H(o,f){return o[0]===f[0]&&o[1]===f[1]&&o[2]===f[2]&&o[4]===f[4]&&o[5]===f[5]&&o[6]===f[6]&&o[8]===f[8]&&o[9]===f[9]&&o[10]===f[10]}function Z(o){const f=o??new i(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function q(o,f){const d=f??new i(12);if(d===o){let _;return _=o[1],o[1]=o[4],o[4]=_,_=o[2],o[2]=o[8],o[8]=_,_=o[6],o[6]=o[9],o[9]=_,d}const g=o[0*4+0],y=o[0*4+1],C=o[0*4+2],E=o[1*4+0],r=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2];return d[0]=g,d[1]=E,d[2]=u,d[4]=y,d[5]=r,d[6]=p,d[8]=C,d[9]=m,d[10]=a,d}function ce(o,f){const d=f??new i(12),g=o[0*4+0],y=o[0*4+1],C=o[0*4+2],E=o[1*4+0],r=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2],_=a*r-m*p,x=-a*E+m*u,v=p*E-r*u,I=1/(g*_+y*x+C*v);return d[0]=_*I,d[1]=(-a*y+C*p)*I,d[2]=(m*y-C*r)*I,d[4]=x*I,d[5]=(a*g-C*u)*I,d[6]=(-m*g+C*E)*I,d[8]=v*I,d[9]=(-p*g+y*u)*I,d[10]=(r*g-y*E)*I,d}function U(o){const f=o[0],d=o[0*4+1],g=o[0*4+2],y=o[1*4+0],C=o[1*4+1],E=o[1*4+2],r=o[2*4+0],m=o[2*4+1],u=o[2*4+2];return f*(C*u-m*E)-y*(d*u-m*g)+r*(d*E-C*g)}const Q=ce;function W(o,f,d){const g=d??new i(12),y=o[0],C=o[1],E=o[2],r=o[4+0],m=o[4+1],u=o[4+2],p=o[8+0],a=o[8+1],_=o[8+2],x=f[0],v=f[1],I=f[2],N=f[4+0],j=f[4+1],le=f[4+2],se=f[8+0],te=f[8+1],fe=f[8+2];return g[0]=y*x+r*v+p*I,g[1]=C*x+m*v+a*I,g[2]=E*x+u*v+_*I,g[4]=y*N+r*j+p*le,g[5]=C*N+m*j+a*le,g[6]=E*N+u*j+_*le,g[8]=y*se+r*te+p*fe,g[9]=C*se+m*te+a*fe,g[10]=E*se+u*te+_*fe,g}const ae=W;function $(o,f,d){const g=d??Z();return o!==g&&(g[0]=o[0],g[1]=o[1],g[2]=o[2],g[4]=o[4],g[5]=o[5],g[6]=o[6]),g[8]=f[0],g[9]=f[1],g[10]=1,g}function pe(o,f){const d=f??l.create();return d[0]=o[8],d[1]=o[9],d}function J(o,f,d){const g=d??l.create(),y=f*4;return g[0]=o[y+0],g[1]=o[y+1],g}function ue(o,f,d,g){const y=g===o?o:G(o,g),C=d*4;return y[C+0]=f[0],y[C+1]=f[1],y}function we(o,f){const d=f??l.create(),g=o[0],y=o[1],C=o[4],E=o[5];return d[0]=Math.sqrt(g*g+y*y),d[1]=Math.sqrt(C*C+E*E),d}function Ge(o,f){const d=f??h.create(),g=o[0],y=o[1],C=o[2],E=o[4],r=o[5],m=o[6],u=o[8],p=o[9],a=o[10];return d[0]=Math.sqrt(g*g+y*y+C*C),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Be(o,f){const d=f??new i(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=o[0],d[9]=o[1],d[10]=1,d}function ze(o,f,d){const g=d??new i(12),y=f[0],C=f[1],E=o[0],r=o[1],m=o[2],u=o[1*4+0],p=o[1*4+1],a=o[1*4+2],_=o[2*4+0],x=o[2*4+1],v=o[2*4+2];return o!==g&&(g[0]=E,g[1]=r,g[2]=m,g[4]=u,g[5]=p,g[6]=a),g[8]=E*y+u*C+_,g[9]=r*y+p*C+x,g[10]=m*y+a*C+v,g}function De(o,f){const d=f??new i(12),g=Math.cos(o),y=Math.sin(o);return d[0]=g,d[1]=y,d[2]=0,d[4]=-y,d[5]=g,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ye(o,f,d){const g=d??new i(12),y=o[0*4+0],C=o[0*4+1],E=o[0*4+2],r=o[1*4+0],m=o[1*4+1],u=o[1*4+2],p=Math.cos(f),a=Math.sin(f);return g[0]=p*y+a*r,g[1]=p*C+a*m,g[2]=p*E+a*u,g[4]=p*r-a*y,g[5]=p*m-a*C,g[6]=p*u-a*E,o!==g&&(g[8]=o[8],g[9]=o[9],g[10]=o[10]),g}function Me(o,f){const d=f??new i(12),g=Math.cos(o),y=Math.sin(o);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=g,d[6]=y,d[8]=0,d[9]=-y,d[10]=g,d}function O(o,f,d){const g=d??new i(12),y=o[4],C=o[5],E=o[6],r=o[8],m=o[9],u=o[10],p=Math.cos(f),a=Math.sin(f);return g[4]=p*y+a*r,g[5]=p*C+a*m,g[6]=p*E+a*u,g[8]=p*r-a*y,g[9]=p*m-a*C,g[10]=p*u-a*E,o!==g&&(g[0]=o[0],g[1]=o[1],g[2]=o[2]),g}function K(o,f){const d=f??new i(12),g=Math.cos(o),y=Math.sin(o);return d[0]=g,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=g,d}function ne(o,f,d){const g=d??new i(12),y=o[0*4+0],C=o[0*4+1],E=o[0*4+2],r=o[2*4+0],m=o[2*4+1],u=o[2*4+2],p=Math.cos(f),a=Math.sin(f);return g[0]=p*y-a*r,g[1]=p*C-a*m,g[2]=p*E-a*u,g[8]=p*r+a*y,g[9]=p*m+a*C,g[10]=p*u+a*E,o!==g&&(g[4]=o[4],g[5]=o[5],g[6]=o[6]),g}const he=De,re=ye;function oe(o,f){const d=f??new i(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function me(o,f,d){const g=d??new i(12),y=f[0],C=f[1];return g[0]=y*o[0*4+0],g[1]=y*o[0*4+1],g[2]=y*o[0*4+2],g[4]=C*o[1*4+0],g[5]=C*o[1*4+1],g[6]=C*o[1*4+2],o!==g&&(g[8]=o[8],g[9]=o[9],g[10]=o[10]),g}function ve(o,f){const d=f??new i(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=o[2],d}function xe(o,f,d){const g=d??new i(12),y=f[0],C=f[1],E=f[2];return g[0]=y*o[0*4+0],g[1]=y*o[0*4+1],g[2]=y*o[0*4+2],g[4]=C*o[1*4+0],g[5]=C*o[1*4+1],g[6]=C*o[1*4+2],g[8]=E*o[2*4+0],g[9]=E*o[2*4+1],g[10]=E*o[2*4+2],g}function Oe(o,f){const d=f??new i(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(o,f,d){const g=d??new i(12);return g[0]=f*o[0*4+0],g[1]=f*o[0*4+1],g[2]=f*o[0*4+2],g[4]=f*o[1*4+0],g[5]=f*o[1*4+1],g[6]=f*o[1*4+2],o!==g&&(g[8]=o[8],g[9]=o[9],g[10]=o[10]),g}function F(o,f){const d=f??new i(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=o,d}function b(o,f,d){const g=d??new i(12);return g[0]=f*o[0*4+0],g[1]=f*o[0*4+1],g[2]=f*o[0*4+2],g[4]=f*o[1*4+0],g[5]=f*o[1*4+1],g[6]=f*o[1*4+2],g[8]=f*o[2*4+0],g[9]=f*o[2*4+1],g[10]=f*o[2*4+2],g}return{add:V,clone:Y,copy:G,create:P,determinant:U,equals:H,equalsApproximately:z,fromMat4:k,fromQuat:M,get3DScaling:Ge,getAxis:J,getScaling:we,getTranslation:pe,identity:Z,inverse:ce,invert:Q,mul:ae,mulScalar:D,multiply:W,multiplyScalar:T,negate:R,rotate:ye,rotateX:O,rotateY:ne,rotateZ:re,rotation:De,rotationX:Me,rotationY:K,rotationZ:he,scale:me,scale3D:xe,scaling:oe,scaling3D:ve,set:w,setAxis:ue,setTranslation:$,translate:ze,translation:Be,transpose:q,uniformScale:B,uniformScale3D:b,uniformScaling:Oe,uniformScaling3D:F}}const Or=new Map;function kl(i){let l=Or.get(i);return l||(l=El(i),Or.set(i,l)),l}function Ml(i){const l=Kn(i);function h(r,m,u,p,a,_,x,v,I,N,j,le,se,te,fe,Pe){const be=new i(16);return r!==void 0&&(be[0]=r,m!==void 0&&(be[1]=m,u!==void 0&&(be[2]=u,p!==void 0&&(be[3]=p,a!==void 0&&(be[4]=a,_!==void 0&&(be[5]=_,x!==void 0&&(be[6]=x,v!==void 0&&(be[7]=v,I!==void 0&&(be[8]=I,N!==void 0&&(be[9]=N,j!==void 0&&(be[10]=j,le!==void 0&&(be[11]=le,se!==void 0&&(be[12]=se,te!==void 0&&(be[13]=te,fe!==void 0&&(be[14]=fe,Pe!==void 0&&(be[15]=Pe)))))))))))))))),be}function P(r,m,u,p,a,_,x,v,I,N,j,le,se,te,fe,Pe,be){const ge=be??new i(16);return ge[0]=r,ge[1]=m,ge[2]=u,ge[3]=p,ge[4]=a,ge[5]=_,ge[6]=x,ge[7]=v,ge[8]=I,ge[9]=N,ge[10]=j,ge[11]=le,ge[12]=se,ge[13]=te,ge[14]=fe,ge[15]=Pe,ge}function w(r,m){const u=m??new i(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,m){const u=m??new i(16),p=r[0],a=r[1],_=r[2],x=r[3],v=p+p,I=a+a,N=_+_,j=p*v,le=a*v,se=a*I,te=_*v,fe=_*I,Pe=_*N,be=x*v,ge=x*I,Ae=x*N;return u[0]=1-se-Pe,u[1]=le+Ae,u[2]=te-ge,u[3]=0,u[4]=le-Ae,u[5]=1-j-Pe,u[6]=fe+be,u[7]=0,u[8]=te+ge,u[9]=fe-be,u[10]=1-j-se,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(r,m){const u=m??new i(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function R(r,m,u){const p=u??new i(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function T(r,m,u){const p=u??new i(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const D=T;function V(r,m){const u=m??new i(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const G=V;function Y(r,m){return Math.abs(r[0]-m[0])<Le&&Math.abs(r[1]-m[1])<Le&&Math.abs(r[2]-m[2])<Le&&Math.abs(r[3]-m[3])<Le&&Math.abs(r[4]-m[4])<Le&&Math.abs(r[5]-m[5])<Le&&Math.abs(r[6]-m[6])<Le&&Math.abs(r[7]-m[7])<Le&&Math.abs(r[8]-m[8])<Le&&Math.abs(r[9]-m[9])<Le&&Math.abs(r[10]-m[10])<Le&&Math.abs(r[11]-m[11])<Le&&Math.abs(r[12]-m[12])<Le&&Math.abs(r[13]-m[13])<Le&&Math.abs(r[14]-m[14])<Le&&Math.abs(r[15]-m[15])<Le}function z(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function H(r){const m=r??new i(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Z(r,m){const u=m??new i(16);if(u===r){let Te;return Te=r[1],r[1]=r[4],r[4]=Te,Te=r[2],r[2]=r[8],r[8]=Te,Te=r[3],r[3]=r[12],r[12]=Te,Te=r[6],r[6]=r[9],r[9]=Te,Te=r[7],r[7]=r[13],r[13]=Te,Te=r[11],r[11]=r[14],r[14]=Te,u}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],v=r[1*4+0],I=r[1*4+1],N=r[1*4+2],j=r[1*4+3],le=r[2*4+0],se=r[2*4+1],te=r[2*4+2],fe=r[2*4+3],Pe=r[3*4+0],be=r[3*4+1],ge=r[3*4+2],Ae=r[3*4+3];return u[0]=p,u[1]=v,u[2]=le,u[3]=Pe,u[4]=a,u[5]=I,u[6]=se,u[7]=be,u[8]=_,u[9]=N,u[10]=te,u[11]=ge,u[12]=x,u[13]=j,u[14]=fe,u[15]=Ae,u}function q(r,m){const u=m??new i(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],v=r[1*4+0],I=r[1*4+1],N=r[1*4+2],j=r[1*4+3],le=r[2*4+0],se=r[2*4+1],te=r[2*4+2],fe=r[2*4+3],Pe=r[3*4+0],be=r[3*4+1],ge=r[3*4+2],Ae=r[3*4+3],Te=te*Ae,$e=ge*fe,Ze=N*Ae,je=ge*j,We=N*fe,Qe=te*j,rt=_*Ae,Ke=ge*x,nt=_*fe,it=te*x,st=_*j,Je=N*x,qe=le*be,et=Pe*se,He=v*be,lt=Pe*I,tt=v*se,St=le*I,wt=p*be,vt=Pe*a,gt=p*se,ie=le*a,_e=p*I,de=v*a,Ue=Te*I+je*se+We*be-($e*I+Ze*se+Qe*be),Ve=$e*a+rt*se+it*be-(Te*a+Ke*se+nt*be),Ee=Ze*a+Ke*I+st*be-(je*a+rt*I+Je*be),Ie=Qe*a+nt*I+Je*se-(We*a+it*I+st*se),Ce=1/(p*Ue+v*Ve+le*Ee+Pe*Ie);return u[0]=Ce*Ue,u[1]=Ce*Ve,u[2]=Ce*Ee,u[3]=Ce*Ie,u[4]=Ce*($e*v+Ze*le+Qe*Pe-(Te*v+je*le+We*Pe)),u[5]=Ce*(Te*p+Ke*le+nt*Pe-($e*p+rt*le+it*Pe)),u[6]=Ce*(je*p+rt*v+Je*Pe-(Ze*p+Ke*v+st*Pe)),u[7]=Ce*(We*p+it*v+st*le-(Qe*p+nt*v+Je*le)),u[8]=Ce*(qe*j+lt*fe+tt*Ae-(et*j+He*fe+St*Ae)),u[9]=Ce*(et*x+wt*fe+ie*Ae-(qe*x+vt*fe+gt*Ae)),u[10]=Ce*(He*x+vt*j+_e*Ae-(lt*x+wt*j+de*Ae)),u[11]=Ce*(St*x+gt*j+de*fe-(tt*x+ie*j+_e*fe)),u[12]=Ce*(He*te+St*ge+et*N-(tt*ge+qe*N+lt*te)),u[13]=Ce*(gt*ge+qe*_+vt*te-(wt*te+ie*ge+et*_)),u[14]=Ce*(wt*N+de*ge+lt*_-(_e*ge+He*_+vt*N)),u[15]=Ce*(_e*te+tt*_+ie*N-(gt*N+de*te+St*_)),u}function ce(r){const m=r[0],u=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],x=r[1*4+1],v=r[1*4+2],I=r[1*4+3],N=r[2*4+0],j=r[2*4+1],le=r[2*4+2],se=r[2*4+3],te=r[3*4+0],fe=r[3*4+1],Pe=r[3*4+2],be=r[3*4+3],ge=le*be,Ae=Pe*se,Te=v*be,$e=Pe*I,Ze=v*se,je=le*I,We=p*be,Qe=Pe*a,rt=p*se,Ke=le*a,nt=p*I,it=v*a,st=ge*x+$e*j+Ze*fe-(Ae*x+Te*j+je*fe),Je=Ae*u+We*j+Ke*fe-(ge*u+Qe*j+rt*fe),qe=Te*u+Qe*x+nt*fe-($e*u+We*x+it*fe),et=je*u+rt*x+it*j-(Ze*u+Ke*x+nt*j);return m*st+_*Je+N*qe+te*et}const U=q;function Q(r,m,u){const p=u??new i(16),a=r[0],_=r[1],x=r[2],v=r[3],I=r[4+0],N=r[4+1],j=r[4+2],le=r[4+3],se=r[8+0],te=r[8+1],fe=r[8+2],Pe=r[8+3],be=r[12+0],ge=r[12+1],Ae=r[12+2],Te=r[12+3],$e=m[0],Ze=m[1],je=m[2],We=m[3],Qe=m[4+0],rt=m[4+1],Ke=m[4+2],nt=m[4+3],it=m[8+0],st=m[8+1],Je=m[8+2],qe=m[8+3],et=m[12+0],He=m[12+1],lt=m[12+2],tt=m[12+3];return p[0]=a*$e+I*Ze+se*je+be*We,p[1]=_*$e+N*Ze+te*je+ge*We,p[2]=x*$e+j*Ze+fe*je+Ae*We,p[3]=v*$e+le*Ze+Pe*je+Te*We,p[4]=a*Qe+I*rt+se*Ke+be*nt,p[5]=_*Qe+N*rt+te*Ke+ge*nt,p[6]=x*Qe+j*rt+fe*Ke+Ae*nt,p[7]=v*Qe+le*rt+Pe*Ke+Te*nt,p[8]=a*it+I*st+se*Je+be*qe,p[9]=_*it+N*st+te*Je+ge*qe,p[10]=x*it+j*st+fe*Je+Ae*qe,p[11]=v*it+le*st+Pe*Je+Te*qe,p[12]=a*et+I*He+se*lt+be*tt,p[13]=_*et+N*He+te*lt+ge*tt,p[14]=x*et+j*He+fe*lt+Ae*tt,p[15]=v*et+le*He+Pe*lt+Te*tt,p}const W=Q;function ae(r,m,u){const p=u??H();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function $(r,m){const u=m??l.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function pe(r,m,u){const p=u??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function J(r,m,u,p){const a=p===r?p:V(r,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function ue(r,m){const u=m??l.create(),p=r[0],a=r[1],_=r[2],x=r[4],v=r[5],I=r[6],N=r[8],j=r[9],le=r[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(x*x+v*v+I*I),u[2]=Math.sqrt(N*N+j*j+le*le),u}function we(r,m,u,p,a){const _=a??new i(16),x=Math.tan(Math.PI*.5-.5*r);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(u-p);_[10]=p*v,_[14]=p*u*v}else _[10]=-1,_[14]=-u;return _}function Ge(r,m,u,p=1/0,a){const _=a??new i(16),x=1/Math.tan(r*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const v=1/(p-u);_[10]=u*v,_[14]=p*u*v}return _}function Be(r,m,u,p,a,_,x){const v=x??new i(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(p+u)/(u-p),v[14]=a/(a-_),v[15]=1,v}function ze(r,m,u,p,a,_,x){const v=x??new i(16),I=m-r,N=p-u,j=a-_;return v[0]=2*a/I,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/N,v[6]=0,v[7]=0,v[8]=(r+m)/I,v[9]=(p+u)/N,v[10]=_/j,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/j,v[15]=0,v}function De(r,m,u,p,a,_=1/0,x){const v=x??new i(16),I=m-r,N=p-u;if(v[0]=2*a/I,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/N,v[6]=0,v[7]=0,v[8]=(r+m)/I,v[9]=(p+u)/N,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const j=1/(_-a);v[10]=a*j,v[14]=_*a*j}return v}const ye=l.create(),Me=l.create(),O=l.create();function K(r,m,u,p){const a=p??new i(16);return l.normalize(l.subtract(m,r,O),O),l.normalize(l.cross(u,O,ye),ye),l.normalize(l.cross(O,ye,Me),Me),a[0]=ye[0],a[1]=ye[1],a[2]=ye[2],a[3]=0,a[4]=Me[0],a[5]=Me[1],a[6]=Me[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function ne(r,m,u,p){const a=p??new i(16);return l.normalize(l.subtract(r,m,O),O),l.normalize(l.cross(u,O,ye),ye),l.normalize(l.cross(O,ye,Me),Me),a[0]=ye[0],a[1]=ye[1],a[2]=ye[2],a[3]=0,a[4]=Me[0],a[5]=Me[1],a[6]=Me[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function he(r,m,u,p){const a=p??new i(16);return l.normalize(l.subtract(r,m,O),O),l.normalize(l.cross(u,O,ye),ye),l.normalize(l.cross(O,ye,Me),Me),a[0]=ye[0],a[1]=Me[0],a[2]=O[0],a[3]=0,a[4]=ye[1],a[5]=Me[1],a[6]=O[1],a[7]=0,a[8]=ye[2],a[9]=Me[2],a[10]=O[2],a[11]=0,a[12]=-(ye[0]*r[0]+ye[1]*r[1]+ye[2]*r[2]),a[13]=-(Me[0]*r[0]+Me[1]*r[1]+Me[2]*r[2]),a[14]=-(O[0]*r[0]+O[1]*r[1]+O[2]*r[2]),a[15]=1,a}function re(r,m){const u=m??new i(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function oe(r,m,u){const p=u??new i(16),a=m[0],_=m[1],x=m[2],v=r[0],I=r[1],N=r[2],j=r[3],le=r[1*4+0],se=r[1*4+1],te=r[1*4+2],fe=r[1*4+3],Pe=r[2*4+0],be=r[2*4+1],ge=r[2*4+2],Ae=r[2*4+3],Te=r[3*4+0],$e=r[3*4+1],Ze=r[3*4+2],je=r[3*4+3];return r!==p&&(p[0]=v,p[1]=I,p[2]=N,p[3]=j,p[4]=le,p[5]=se,p[6]=te,p[7]=fe,p[8]=Pe,p[9]=be,p[10]=ge,p[11]=Ae),p[12]=v*a+le*_+Pe*x+Te,p[13]=I*a+se*_+be*x+$e,p[14]=N*a+te*_+ge*x+Ze,p[15]=j*a+fe*_+Ae*x+je,p}function me(r,m){const u=m??new i(16),p=Math.cos(r),a=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ve(r,m,u){const p=u??new i(16),a=r[4],_=r[5],x=r[6],v=r[7],I=r[8],N=r[9],j=r[10],le=r[11],se=Math.cos(m),te=Math.sin(m);return p[4]=se*a+te*I,p[5]=se*_+te*N,p[6]=se*x+te*j,p[7]=se*v+te*le,p[8]=se*I-te*a,p[9]=se*N-te*_,p[10]=se*j-te*x,p[11]=se*le-te*v,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function xe(r,m){const u=m??new i(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Oe(r,m,u){const p=u??new i(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],v=r[0*4+3],I=r[2*4+0],N=r[2*4+1],j=r[2*4+2],le=r[2*4+3],se=Math.cos(m),te=Math.sin(m);return p[0]=se*a-te*I,p[1]=se*_-te*N,p[2]=se*x-te*j,p[3]=se*v-te*le,p[8]=se*I+te*a,p[9]=se*N+te*_,p[10]=se*j+te*x,p[11]=se*le+te*v,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const u=m??new i(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function F(r,m,u){const p=u??new i(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],v=r[0*4+3],I=r[1*4+0],N=r[1*4+1],j=r[1*4+2],le=r[1*4+3],se=Math.cos(m),te=Math.sin(m);return p[0]=se*a+te*I,p[1]=se*_+te*N,p[2]=se*x+te*j,p[3]=se*v+te*le,p[4]=se*I-te*a,p[5]=se*N-te*_,p[6]=se*j-te*x,p[7]=se*le-te*v,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function b(r,m,u){const p=u??new i(16);let a=r[0],_=r[1],x=r[2];const v=Math.sqrt(a*a+_*_+x*x);a/=v,_/=v,x/=v;const I=a*a,N=_*_,j=x*x,le=Math.cos(m),se=Math.sin(m),te=1-le;return p[0]=I+(1-I)*le,p[1]=a*_*te+x*se,p[2]=a*x*te-_*se,p[3]=0,p[4]=a*_*te-x*se,p[5]=N+(1-N)*le,p[6]=_*x*te+a*se,p[7]=0,p[8]=a*x*te+_*se,p[9]=_*x*te-a*se,p[10]=j+(1-j)*le,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const o=b;function f(r,m,u,p){const a=p??new i(16);let _=m[0],x=m[1],v=m[2];const I=Math.sqrt(_*_+x*x+v*v);_/=I,x/=I,v/=I;const N=_*_,j=x*x,le=v*v,se=Math.cos(u),te=Math.sin(u),fe=1-se,Pe=N+(1-N)*se,be=_*x*fe+v*te,ge=_*v*fe-x*te,Ae=_*x*fe-v*te,Te=j+(1-j)*se,$e=x*v*fe+_*te,Ze=_*v*fe+x*te,je=x*v*fe-_*te,We=le+(1-le)*se,Qe=r[0],rt=r[1],Ke=r[2],nt=r[3],it=r[4],st=r[5],Je=r[6],qe=r[7],et=r[8],He=r[9],lt=r[10],tt=r[11];return a[0]=Pe*Qe+be*it+ge*et,a[1]=Pe*rt+be*st+ge*He,a[2]=Pe*Ke+be*Je+ge*lt,a[3]=Pe*nt+be*qe+ge*tt,a[4]=Ae*Qe+Te*it+$e*et,a[5]=Ae*rt+Te*st+$e*He,a[6]=Ae*Ke+Te*Je+$e*lt,a[7]=Ae*nt+Te*qe+$e*tt,a[8]=Ze*Qe+je*it+We*et,a[9]=Ze*rt+je*st+We*He,a[10]=Ze*Ke+je*Je+We*lt,a[11]=Ze*nt+je*qe+We*tt,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const d=f;function g(r,m){const u=m??new i(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(r,m,u){const p=u??new i(16),a=m[0],_=m[1],x=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=x*r[2*4+0],p[9]=x*r[2*4+1],p[10]=x*r[2*4+2],p[11]=x*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function C(r,m){const u=m??new i(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(r,m,u){const p=u??new i(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:R,aim:K,axisRotate:f,axisRotation:b,cameraAim:ne,clone:G,copy:V,create:h,determinant:ce,equals:z,equalsApproximately:Y,fromMat3:w,fromQuat:k,frustum:ze,frustumReverseZ:De,getAxis:pe,getScaling:ue,getTranslation:$,identity:H,inverse:q,invert:U,lookAt:he,mul:W,mulScalar:D,multiply:Q,multiplyScalar:T,negate:M,ortho:Be,perspective:we,perspectiveReverseZ:Ge,rotate:d,rotateX:ve,rotateY:Oe,rotateZ:F,rotation:o,rotationX:me,rotationY:xe,rotationZ:B,scale:y,scaling:g,set:P,setAxis:J,setTranslation:ae,translate:oe,translation:re,transpose:Z,uniformScale:E,uniformScaling:C}}const Fr=new Map;function Bl(i){let l=Fr.get(i);return l||(l=Ml(i),Fr.set(i,l)),l}function Tl(i){const l=Kn(i);function h(B,F,b,o){const f=new i(4);return B!==void 0&&(f[0]=B,F!==void 0&&(f[1]=F,b!==void 0&&(f[2]=b,o!==void 0&&(f[3]=o)))),f}const P=h;function w(B,F,b,o,f){const d=f??new i(4);return d[0]=B,d[1]=F,d[2]=b,d[3]=o,d}function k(B,F,b){const o=b??new i(4),f=F*.5,d=Math.sin(f);return o[0]=d*B[0],o[1]=d*B[1],o[2]=d*B[2],o[3]=Math.cos(f),o}function M(B,F){const b=F??l.create(3),o=Math.acos(B[3])*2,f=Math.sin(o*.5);return f>Le?(b[0]=B[0]/f,b[1]=B[1]/f,b[2]=B[2]/f):(b[0]=1,b[1]=0,b[2]=0),{angle:o,axis:b}}function R(B,F){const b=we(B,F);return Math.acos(2*b*b-1)}function T(B,F,b){const o=b??new i(4),f=B[0],d=B[1],g=B[2],y=B[3],C=F[0],E=F[1],r=F[2],m=F[3];return o[0]=f*m+y*C+d*r-g*E,o[1]=d*m+y*E+g*C-f*r,o[2]=g*m+y*r+f*E-d*C,o[3]=y*m-f*C-d*E-g*r,o}const D=T;function V(B,F,b){const o=b??new i(4),f=F*.5,d=B[0],g=B[1],y=B[2],C=B[3],E=Math.sin(f),r=Math.cos(f);return o[0]=d*r+C*E,o[1]=g*r+y*E,o[2]=y*r-g*E,o[3]=C*r-d*E,o}function G(B,F,b){const o=b??new i(4),f=F*.5,d=B[0],g=B[1],y=B[2],C=B[3],E=Math.sin(f),r=Math.cos(f);return o[0]=d*r-y*E,o[1]=g*r+C*E,o[2]=y*r+d*E,o[3]=C*r-g*E,o}function Y(B,F,b){const o=b??new i(4),f=F*.5,d=B[0],g=B[1],y=B[2],C=B[3],E=Math.sin(f),r=Math.cos(f);return o[0]=d*r+g*E,o[1]=g*r-d*E,o[2]=y*r+C*E,o[3]=C*r-y*E,o}function z(B,F,b,o){const f=o??new i(4),d=B[0],g=B[1],y=B[2],C=B[3];let E=F[0],r=F[1],m=F[2],u=F[3],p=d*E+g*r+y*m+C*u;p<0&&(p=-p,E=-E,r=-r,m=-m,u=-u);let a,_;if(1-p>Le){const x=Math.acos(p),v=Math.sin(x);a=Math.sin((1-b)*x)/v,_=Math.sin(b*x)/v}else a=1-b,_=b;return f[0]=a*d+_*E,f[1]=a*g+_*r,f[2]=a*y+_*m,f[3]=a*C+_*u,f}function H(B,F){const b=F??new i(4),o=B[0],f=B[1],d=B[2],g=B[3],y=o*o+f*f+d*d+g*g,C=y?1/y:0;return b[0]=-o*C,b[1]=-f*C,b[2]=-d*C,b[3]=g*C,b}function Z(B,F){const b=F??new i(4);return b[0]=-B[0],b[1]=-B[1],b[2]=-B[2],b[3]=B[3],b}function q(B,F){const b=F??new i(4),o=B[0]+B[5]+B[10];if(o>0){const f=Math.sqrt(o+1);b[3]=.5*f;const d=.5/f;b[0]=(B[6]-B[9])*d,b[1]=(B[8]-B[2])*d,b[2]=(B[1]-B[4])*d}else{let f=0;B[5]>B[0]&&(f=1),B[10]>B[f*4+f]&&(f=2);const d=(f+1)%3,g=(f+2)%3,y=Math.sqrt(B[f*4+f]-B[d*4+d]-B[g*4+g]+1);b[f]=.5*y;const C=.5/y;b[3]=(B[d*4+g]-B[g*4+d])*C,b[d]=(B[d*4+f]+B[f*4+d])*C,b[g]=(B[g*4+f]+B[f*4+g])*C}return b}function ce(B,F,b,o,f){const d=f??new i(4),g=B*.5,y=F*.5,C=b*.5,E=Math.sin(g),r=Math.cos(g),m=Math.sin(y),u=Math.cos(y),p=Math.sin(C),a=Math.cos(C);switch(o){case"xyz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${o}`)}return d}function U(B,F){const b=F??new i(4);return b[0]=B[0],b[1]=B[1],b[2]=B[2],b[3]=B[3],b}const Q=U;function W(B,F,b){const o=b??new i(4);return o[0]=B[0]+F[0],o[1]=B[1]+F[1],o[2]=B[2]+F[2],o[3]=B[3]+F[3],o}function ae(B,F,b){const o=b??new i(4);return o[0]=B[0]-F[0],o[1]=B[1]-F[1],o[2]=B[2]-F[2],o[3]=B[3]-F[3],o}const $=ae;function pe(B,F,b){const o=b??new i(4);return o[0]=B[0]*F,o[1]=B[1]*F,o[2]=B[2]*F,o[3]=B[3]*F,o}const J=pe;function ue(B,F,b){const o=b??new i(4);return o[0]=B[0]/F,o[1]=B[1]/F,o[2]=B[2]/F,o[3]=B[3]/F,o}function we(B,F){return B[0]*F[0]+B[1]*F[1]+B[2]*F[2]+B[3]*F[3]}function Ge(B,F,b,o){const f=o??new i(4);return f[0]=B[0]+b*(F[0]-B[0]),f[1]=B[1]+b*(F[1]-B[1]),f[2]=B[2]+b*(F[2]-B[2]),f[3]=B[3]+b*(F[3]-B[3]),f}function Be(B){const F=B[0],b=B[1],o=B[2],f=B[3];return Math.sqrt(F*F+b*b+o*o+f*f)}const ze=Be;function De(B){const F=B[0],b=B[1],o=B[2],f=B[3];return F*F+b*b+o*o+f*f}const ye=De;function Me(B,F){const b=F??new i(4),o=B[0],f=B[1],d=B[2],g=B[3],y=Math.sqrt(o*o+f*f+d*d+g*g);return y>1e-5?(b[0]=o/y,b[1]=f/y,b[2]=d/y,b[3]=g/y):(b[0]=0,b[1]=0,b[2]=0,b[3]=1),b}function O(B,F){return Math.abs(B[0]-F[0])<Le&&Math.abs(B[1]-F[1])<Le&&Math.abs(B[2]-F[2])<Le&&Math.abs(B[3]-F[3])<Le}function K(B,F){return B[0]===F[0]&&B[1]===F[1]&&B[2]===F[2]&&B[3]===F[3]}function ne(B){const F=B??new i(4);return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}const he=l.create(),re=l.create(),oe=l.create();function me(B,F,b){const o=b??new i(4),f=l.dot(B,F);return f<-.999999?(l.cross(re,B,he),l.len(he)<1e-6&&l.cross(oe,B,he),l.normalize(he,he),k(he,Math.PI,o),o):f>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(l.cross(B,F,he),o[0]=he[0],o[1]=he[1],o[2]=he[2],o[3]=1+f,Me(o,o))}const ve=new i(4),xe=new i(4);function Oe(B,F,b,o,f,d){const g=d??new i(4);return z(B,o,f,ve),z(F,b,f,xe),z(ve,xe,2*f*(1-f),g),g}return{create:h,fromValues:P,set:w,fromAxisAngle:k,toAxisAngle:M,angle:R,multiply:T,mul:D,rotateX:V,rotateY:G,rotateZ:Y,slerp:z,inverse:H,conjugate:Z,fromMat:q,fromEuler:ce,copy:U,clone:Q,add:W,subtract:ae,sub:$,mulScalar:pe,scale:J,divScalar:ue,dot:we,lerp:Ge,length:Be,len:ze,lengthSq:De,lenSq:ye,normalize:Me,equalsApproximately:O,equals:K,identity:ne,rotationTo:me,sqlerp:Oe}}const Nr=new Map;function Dl(i){let l=Nr.get(i);return l||(l=Tl(i),Nr.set(i,l)),l}function Al(i){function l(b,o,f,d){const g=new i(4);return b!==void 0&&(g[0]=b,o!==void 0&&(g[1]=o,f!==void 0&&(g[2]=f,d!==void 0&&(g[3]=d)))),g}const h=l;function P(b,o,f,d,g){const y=g??new i(4);return y[0]=b,y[1]=o,y[2]=f,y[3]=d,y}function w(b,o){const f=o??new i(4);return f[0]=Math.ceil(b[0]),f[1]=Math.ceil(b[1]),f[2]=Math.ceil(b[2]),f[3]=Math.ceil(b[3]),f}function k(b,o){const f=o??new i(4);return f[0]=Math.floor(b[0]),f[1]=Math.floor(b[1]),f[2]=Math.floor(b[2]),f[3]=Math.floor(b[3]),f}function M(b,o){const f=o??new i(4);return f[0]=Math.round(b[0]),f[1]=Math.round(b[1]),f[2]=Math.round(b[2]),f[3]=Math.round(b[3]),f}function R(b,o=0,f=1,d){const g=d??new i(4);return g[0]=Math.min(f,Math.max(o,b[0])),g[1]=Math.min(f,Math.max(o,b[1])),g[2]=Math.min(f,Math.max(o,b[2])),g[3]=Math.min(f,Math.max(o,b[3])),g}function T(b,o,f){const d=f??new i(4);return d[0]=b[0]+o[0],d[1]=b[1]+o[1],d[2]=b[2]+o[2],d[3]=b[3]+o[3],d}function D(b,o,f,d){const g=d??new i(4);return g[0]=b[0]+o[0]*f,g[1]=b[1]+o[1]*f,g[2]=b[2]+o[2]*f,g[3]=b[3]+o[3]*f,g}function V(b,o,f){const d=f??new i(4);return d[0]=b[0]-o[0],d[1]=b[1]-o[1],d[2]=b[2]-o[2],d[3]=b[3]-o[3],d}const G=V;function Y(b,o){return Math.abs(b[0]-o[0])<Le&&Math.abs(b[1]-o[1])<Le&&Math.abs(b[2]-o[2])<Le&&Math.abs(b[3]-o[3])<Le}function z(b,o){return b[0]===o[0]&&b[1]===o[1]&&b[2]===o[2]&&b[3]===o[3]}function H(b,o,f,d){const g=d??new i(4);return g[0]=b[0]+f*(o[0]-b[0]),g[1]=b[1]+f*(o[1]-b[1]),g[2]=b[2]+f*(o[2]-b[2]),g[3]=b[3]+f*(o[3]-b[3]),g}function Z(b,o,f,d){const g=d??new i(4);return g[0]=b[0]+f[0]*(o[0]-b[0]),g[1]=b[1]+f[1]*(o[1]-b[1]),g[2]=b[2]+f[2]*(o[2]-b[2]),g[3]=b[3]+f[3]*(o[3]-b[3]),g}function q(b,o,f){const d=f??new i(4);return d[0]=Math.max(b[0],o[0]),d[1]=Math.max(b[1],o[1]),d[2]=Math.max(b[2],o[2]),d[3]=Math.max(b[3],o[3]),d}function ce(b,o,f){const d=f??new i(4);return d[0]=Math.min(b[0],o[0]),d[1]=Math.min(b[1],o[1]),d[2]=Math.min(b[2],o[2]),d[3]=Math.min(b[3],o[3]),d}function U(b,o,f){const d=f??new i(4);return d[0]=b[0]*o,d[1]=b[1]*o,d[2]=b[2]*o,d[3]=b[3]*o,d}const Q=U;function W(b,o,f){const d=f??new i(4);return d[0]=b[0]/o,d[1]=b[1]/o,d[2]=b[2]/o,d[3]=b[3]/o,d}function ae(b,o){const f=o??new i(4);return f[0]=1/b[0],f[1]=1/b[1],f[2]=1/b[2],f[3]=1/b[3],f}const $=ae;function pe(b,o){return b[0]*o[0]+b[1]*o[1]+b[2]*o[2]+b[3]*o[3]}function J(b){const o=b[0],f=b[1],d=b[2],g=b[3];return Math.sqrt(o*o+f*f+d*d+g*g)}const ue=J;function we(b){const o=b[0],f=b[1],d=b[2],g=b[3];return o*o+f*f+d*d+g*g}const Ge=we;function Be(b,o){const f=b[0]-o[0],d=b[1]-o[1],g=b[2]-o[2],y=b[3]-o[3];return Math.sqrt(f*f+d*d+g*g+y*y)}const ze=Be;function De(b,o){const f=b[0]-o[0],d=b[1]-o[1],g=b[2]-o[2],y=b[3]-o[3];return f*f+d*d+g*g+y*y}const ye=De;function Me(b,o){const f=o??new i(4),d=b[0],g=b[1],y=b[2],C=b[3],E=Math.sqrt(d*d+g*g+y*y+C*C);return E>1e-5?(f[0]=d/E,f[1]=g/E,f[2]=y/E,f[3]=C/E):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function O(b,o){const f=o??new i(4);return f[0]=-b[0],f[1]=-b[1],f[2]=-b[2],f[3]=-b[3],f}function K(b,o){const f=o??new i(4);return f[0]=b[0],f[1]=b[1],f[2]=b[2],f[3]=b[3],f}const ne=K;function he(b,o,f){const d=f??new i(4);return d[0]=b[0]*o[0],d[1]=b[1]*o[1],d[2]=b[2]*o[2],d[3]=b[3]*o[3],d}const re=he;function oe(b,o,f){const d=f??new i(4);return d[0]=b[0]/o[0],d[1]=b[1]/o[1],d[2]=b[2]/o[2],d[3]=b[3]/o[3],d}const me=oe;function ve(b){const o=b??new i(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function xe(b,o,f){const d=f??new i(4),g=b[0],y=b[1],C=b[2],E=b[3];return d[0]=o[0]*g+o[4]*y+o[8]*C+o[12]*E,d[1]=o[1]*g+o[5]*y+o[9]*C+o[13]*E,d[2]=o[2]*g+o[6]*y+o[10]*C+o[14]*E,d[3]=o[3]*g+o[7]*y+o[11]*C+o[15]*E,d}function Oe(b,o,f){const d=f??new i(4);return Me(b,d),U(d,o,d)}function B(b,o,f){const d=f??new i(4);return J(b)>o?Oe(b,o,d):K(b,d)}function F(b,o,f){const d=f??new i(4);return H(b,o,.5,d)}return{create:l,fromValues:h,set:P,ceil:w,floor:k,round:M,clamp:R,add:T,addScaled:D,subtract:V,sub:G,equalsApproximately:Y,equals:z,lerp:H,lerpV:Z,max:q,min:ce,mulScalar:U,scale:Q,divScalar:W,inverse:ae,invert:$,dot:pe,length:J,len:ue,lengthSq:we,lenSq:Ge,distance:Be,dist:ze,distanceSq:De,distSq:ye,normalize:Me,negate:O,copy:K,clone:ne,multiply:he,mul:re,divide:oe,div:me,zero:ve,transformMat4:xe,setLength:Oe,truncate:B,midpoint:F}}const qr=new Map;function Il(i){let l=qr.get(i);return l||(l=Al(i),qr.set(i,l)),l}function Ts(i,l,h,P,w,k){return{mat3:kl(i),mat4:Bl(l),quat:Dl(h),vec2:ni(P),vec3:Kn(w),vec4:Il(k)}}const{mat3:Pt,mat4:ct,quat:dt,vec2:$r,vec3:L,vec4:Kc}=Ts(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ts(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ts(Pl,Array,Array,Array,Array,Array);const Wr=document.querySelector("#log");let bt=null,Jt=null;function si(){if(bt)return bt;bt=document.createElement("div"),bt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",bt.appendChild(i),Jt=document.createElement("div"),Jt.className="ply-spinner-label",bt.appendChild(Jt),bt.style.display="none",document.body.appendChild(bt),bt}function Ds(i){si(),Jt&&i&&(Jt.textContent=i),bt&&(bt.style.opacity="1",bt.style.display="flex")}function It(i){si(),Jt&&(Jt.textContent=i)}function En(){if(!bt)return;const i=bt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function ri(i,l){if(!Wr)return;const h=document.createElement("p");h.innerText=i,l&&Object.assign(h.style,l),Wr.appendChild(h)}async function _t(i){console.log(i),ri(i)}async function Ll(i){console.error(i),ri(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ii;function oi(){ii=performance.now()}function jr(i){const l=performance.now()-ii;_t(`⏱️ ${i} Time: ${l.toFixed(0)} ms`)}function zl(i,l){if(!i)throw new Error(l&&(typeof l=="string"?l:l()))}function dn(i){return i+3&-4}const Ul=2,Gl=3,kn=5,Qt=6,Mn=7;function Rl(i){const l=new TextDecoder("ascii"),h=l.decode(new Uint8Array(i,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const P=new DataView(i),w=4,k=P.getUint32(w+0,!0),M=P.getUint32(w+4,!0),R=P.getUint32(w+8,!0),T=P.getUint32(w+12,!0),D=P.getUint32(w+16,!0),V=P.getFloat32(w+20,!0),G=P.getUint32(w+24,!0),Y=P.getUint32(w+28,!0),z=P.getFloat32(w+32,!0),H=P.getFloat32(w+36,!0),Z=P.getFloat32(w+40,!0),q=P.getUint32(w+44,!0),ce=P.getFloat32(w+48,!0),U=P.getFloat32(w+52,!0),Q=P.getUint32(w+56,!0),W=P.getUint32(w+60,!0),ae=W>0?W:1;if(Y!==Ul&&Y!==Gl&&Y!==kn&&Y!==Qt&&Y!==Mn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Y}`);if(Y!==kn&&Y!==Qt&&(k%4!==0||q%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${q}`);let $=w+64;const pe=(Q+1)*4,J=new Uint32Array(i.slice($,$+pe));$+=pe;let ue;if(ae>1){const O=(ae+1)*4;if($+O>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${O} from ${$})`);ue=new Uint32Array(i.slice($,$+O)),$+=O}else ue=new Uint32Array([0,k]);let we=0;for(let O=0;O<ae;O++){const K=ue[O+1]-ue[O];K>we&&(we=K)}const Ge=D*4*4;if($+Ge>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ge} more bytes from offset ${$}, have ${i.byteLength-$}`);const Be=new Float32Array(i.slice($,$+Ge));$+=Ge;const ze=new Float32Array(D*5);for(let O=0;O<D;O++){const K=Be[O*4+0],ne=Be[O*4+1],he=Be[O*4+2],re=Be[O*4+3];let oe=0;for(let B=1;B<=Q&&J[B]<=ne;B++)oe=B;let me=0;for(let B=1;B<=ae&&ue[B]<=K;B++)me=B;const ve=ne-J[oe],xe=K-ue[me],Oe=me*Q+oe;ze[O*5+0]=xe,ze[O*5+1]=ve,ze[O*5+2]=he,ze[O*5+3]=re,ze[O*5+4]=Oe}if(Y===kn||Y===Qt){if($+24>i.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const O=l.decode(new Uint8Array(i,$,4));if(O!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${O}'`);const K=P.getUint32($+4,!0),ne=P.getUint32($+8,!0),he=P.getUint32($+12,!0),re=P.getUint32($+16,!0),oe=P.getUint32($+20,!0);if(K!==1)throw new Error(`NAT2 RVQP unsupported version ${K}`);if(re!==D)throw new Error(`NAT2 RVQP num_rects ${re} != header num_rects ${D}`);if($+=24,$+16>i.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const me=new Float32Array(i.slice($,$+8)),ve=new Float32Array(i.slice($+8,$+16));$+=16;const xe=ne*he,Oe=2*ne*he,B=Y===Qt?(xe>>2)*(Oe>>2)*16:xe*Oe*4;if($+B>i.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${i.byteLength-$})`);const F=new Uint8Array(i.slice($,$+B));$+=B;const b=oe*4;if($+b>i.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${b}, have ${i.byteLength-$})`);const o=new Uint32Array(i.slice($,$+b));$+=b;const f=(D+1)*4;if($+f>i.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${f}, have ${i.byteLength-$})`);const d=new Uint32Array(i.slice($,$+f));return $+=f,{width:k,height:M,channels:R,kernel_type:T,num_rects:D,uv_extent:V,sb_number:G,format:Y,sh_bias:z,res_bias:H,compact_mult:Z,layer_h:q,atlas_scale:ce,atlas_offset:U,n_layers:Q,n_cols:ae,layer_cuts:J,column_cuts:ue,slice_width:we,rects_expanded:ze,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:ne,B:he,N_used:oe,pair_scale:me,pair_offset:ve,codebook_image:F,packed_indices:o,surfel_offsets:d}}}let De;const Me=k/4*16;if(Y===Mn){if($+24>i.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const O=l.decode(new Uint8Array(i,$,4));if(O!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${O}'`);const K=P.getUint32($+4,!0),ne=P.getUint32($+8,!0),he=P.getUint32($+12,!0),re=P.getUint32($+16,!0),oe=P.getUint32($+20,!0);if(K!==1)throw new Error(`NAT2 BCCB unsupported version ${K}`);if(he!==M/4||re!==k/4||oe!==he*re)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${re}×${he} (${oe} blocks)`);$+=24;const me=ne*16;if($+me>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${me}, have ${i.byteLength-$})`);const ve=new Uint8Array(i,$,me);$+=me;const xe=oe*2;if($+xe>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${xe}, have ${i.byteLength-$})`);const Oe=new Uint16Array(i.slice($,$+xe));$+=xe;const B=new Uint8Array(oe*16);for(let F=0;F<oe;F++){const b=Oe[F]*16;B.set(ve.subarray(b,b+16),F*16)}De=B}else{let O=0;for(let K=0;K<Q;K++){const ne=J[K+1]-J[K];if(ne%4!==0)throw new Error(`NAT2 BC7 layer ${K} rows ${ne} not 4-aligned`);O+=ne/4*Me}if($+O>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${O} more bytes from offset ${$}, have ${i.byteLength-$}`);De=new Uint8Array(i.slice($,$+O))}return{width:k,height:M,channels:R,kernel_type:T,num_rects:D,uv_extent:V,sb_number:G,format:Y,sh_bias:z,res_bias:H,compact_mult:Z,layer_h:q,atlas_scale:ce,atlas_offset:U,n_layers:Q,n_cols:ae,layer_cuts:J,column_cuts:ue,slice_width:we,rects_expanded:ze,atlas_bytes:De}}const Vl=32;function Ol(i){const l=i.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d-array"}),P=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:h,sampler:P}}function Fl(i){const l=i.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d"}),P=i.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),w=i.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),k=w.createView({dimension:"2d"}),M=i.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:h,cbSamp:P,packedTex:w,packedView:k,offsetsBuf:M}}function Nl(i,l,h){const P=l.format===kn||l.format===Qt,w=l.format===Qt;let k,M,R,T;if(P){const U=Ol(i);k=U.tex,M=U.view,R=U.sampler,T="RVQ-paired atlas"}else if(l.format===2||l.format===Mn){if(!i.features.has("texture-compression-bc"))return _t(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;T=l.format===Mn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:k,view:M,sampler:R}=Kr(i,l,"bc7-rgba-unorm",T)}else if(l.format===3){if(!i.features.has("texture-compression-astc"))return _t("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;T="ASTC 4x4 atlas",{texture:k,view:M,sampler:R}=Kr(i,l,"astc-4x4-unorm",T)}else return _t(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:D}=l,V=i.createBuffer({label:"atlas rects (5-stride)",size:dn(D.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(V,0,D);let G,Y,z,H,Z,q;if(P){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const U=l.rvq_paired,Q=U.K_orig*U.B,W=2*U.K_orig*U.B;if(Q>i.limits.maxTextureDimension2D||W>i.limits.maxTextureDimension2D)return _t(`⚠️  RVQ codebook ${Q}x${W} exceeds maxTextureDimension2D=${i.limits.maxTextureDimension2D} — atlas disabled`),null;let ae,$;if(w){if(!i.features.has("texture-compression-bc"))return _t("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ae="bc7-rgba-unorm",$=(Q>>2)*16}else ae="rgba8unorm",$=Q*4;const pe=i.createTexture({label:w?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:Q,height:W,depthOrArrayLayers:1},format:ae,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});i.queue.writeTexture({texture:pe},U.codebook_image,{offset:0,bytesPerRow:$,rowsPerImage:W},{width:Q,height:W,depthOrArrayLayers:1}),G=pe,Y=pe.createView({dimension:"2d"}),z=i.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const J=8192,ue=U.N_used,we=Math.ceil(ue/J);if(we>i.limits.maxTextureDimension2D||J>i.limits.maxTextureDimension2D)return _t(`⚠️  RVQ packed_indices texture ${J}x${we} exceeds maxTextureDimension2D=${i.limits.maxTextureDimension2D} — atlas disabled`),null;H=i.createTexture({label:"rvq packed_indices (r32uint)",size:{width:J,height:we,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Ge=J*we;let Be;if(Ge===ue)Be=new Uint8Array(U.packed_indices.buffer,U.packed_indices.byteOffset,U.packed_indices.byteLength);else{const ze=new Uint32Array(Ge);ze.set(U.packed_indices),Be=new Uint8Array(ze.buffer)}i.queue.writeTexture({texture:H},Be,{offset:0,bytesPerRow:J*4,rowsPerImage:we},{width:J,height:we,depthOrArrayLayers:1}),Z=H.createView({dimension:"2d"}),q=i.createBuffer({label:"rvq surfel_offsets",size:dn(U.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(q,0,U.surfel_offsets),_t(`🪡 RVQ-paired atlas wired: codebook ${Q}x${W} (${(U.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${ue.toLocaleString()} packed indices as r32uint ${J}x${we} (${(U.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${U.surfel_offsets.length} surfel_offsets`)}else{const U=Fl(i);G=U.cbTex,Y=U.cbView,z=U.cbSamp,H=U.packedTex,Z=U.packedView,q=U.offsetsBuf}const ce=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ai(i,ce,l,h),{texture:k,view:M,sampler:R,rectsBuffer:V,texParamsBuffer:ce,meta:l,rvqCodebookTexture:G,rvqCodebookView:Y,rvqCodebookSampler:z,rvqPackedIndicesTexture:H,rvqPackedIndicesView:Z,rvqSurfelOffsetsBuffer:q}}function Kr(i,l,h,P){const{width:w,layer_h:k,n_layers:M,n_cols:R,layer_cuts:T,column_cuts:D,slice_width:V,atlas_bytes:G}=l,z=w/4*16,H=i.limits.maxTextureDimension2D;if(k>H||V>H)throw new Error(`⚠️  atlas slice dims ${V}x${k} exceed maxTextureDimension2D=${H}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Z=R*M;if(Z>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${R} cols × ${M} layers = ${Z} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const q=i.createTexture({label:P,size:{width:V,height:k,depthOrArrayLayers:Z},mipLevelCount:1,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Q=0;Q<R;Q++){const W=D[Q]/4,ae=(D[Q+1]-D[Q])/4;for(let $=0;$<M;$++){const pe=T[$]/4,J=(T[$+1]-T[$])/4,ue=Q*M+$,we=pe*z+W*16;i.queue.writeTexture({texture:q,mipLevel:0,origin:{x:0,y:0,z:ue},aspect:"all"},G,{offset:we,bytesPerRow:z,rowsPerImage:J},{width:ae*4,height:J*4,depthOrArrayLayers:1})}}const ce=q.createView({label:`${P} view`,dimension:"2d-array"}),U=i.createSampler({label:`${P} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:q,view:ce,sampler:U}}function ai(i,l,h,P){const w=new ArrayBuffer(48),k=new Uint32Array(w),M=new Float32Array(w),R=h.slice_width||h.width;k[0]=P?R:0,k[1]=h.layer_h;let T=h.format;T===Qt&&(T=kn),T===Mn&&(T=2),k[2]=T,M[3]=h.atlas_scale,M[4]=h.atlas_offset,M[5]=h.uv_extent,M[6]=h.res_bias,h.rvq_paired?(k[7]=h.rvq_paired.B,M[8]=h.rvq_paired.pair_scale[0],M[9]=h.rvq_paired.pair_scale[1],M[10]=h.rvq_paired.pair_offset[0],M[11]=h.rvq_paired.pair_offset[1]):(k[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),i.queue.writeBuffer(l,0,w)}async function Ss(i,l){_t(`loading ply file from File... : ${i.name}`),Ds("downloading PLY...");const h=await i.arrayBuffer();try{return await li(h,l)}finally{En()}}async function ql(i,l){_t(`loading ply file from URL... : ${i}`),Ds("downloading PLY...");try{oi();const h=new URL(i,self.location.href).href;return await li({url:h},l)}finally{En()}}async function li(i,l){return new Promise((h,P)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var R,T,D,V,G,Y,z,H,Z,q,ce,U;const M=k.data;if((M==null?void 0:M.type)==="error"){Ll(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),P(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const Q=M.totalBytes,W=M.loadedBytes/(1024*1024),ae=Q?Q/(1024*1024):void 0,$=(M.speedBps??0)/(1024*1024),pe=Q?Math.min(99,Math.floor(M.loadedBytes/Q*100)):void 0,J=ae?`total ${ae.toFixed(1)} MB`:"total -- MB",ue=ae&&pe!==void 0?`${W.toFixed(1)} MB downloaded (${pe}%)`:`${W.toFixed(1)} MB downloaded`,we=`${$.toFixed(2)} MB/s`;It(`downloading PLY ...
${J}, ${ue}
${we}`);return}else if((M==null?void 0:M.type)==="fetched"){_t(`💾 Fetched (${M.byteLength} bytes)`),jr("Download"),It("parsing PLY..."),oi();return}else if((M==null?void 0:M.type)==="parse_progress"){const Q=M.total??0,W=M.read??0,ae=Q>0?Math.floor(W/Q*100):0;It(`parsing PLY ...
${W}/${Q} surfels (${ae}%)`);return}else if((M==null?void 0:M.type)==="done"){const Q=M.num_points,W=M.K,ae=M.feature_mode??0,$=M.sh_bias,pe=M.kernel_type,J=M.surfelBuffer,ue=M.svParamsBuffer;_t(`🪐 Total surfels: ${Q}, mode=${ae===1?"SB":"SV"}, K=${W}, sh_bias=${$}, kernel_type=${pe}`);const Ge=l.createBuffer({label:"surfel input buffer",size:dn(Q*Vl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ge,0,J);const Be=ue.byteLength>0?ue.byteLength:16,ze=l.createBuffer({label:ae===1?"color_params buffer (SB)":"color_params buffer (SV)",size:dn(Be),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ue.byteLength>0&&l.queue.writeBuffer(ze,0,ue),w.terminate(),jr("Parse"),h({num_points:Q,K:W,feature_mode:ae,sh_bias:$,kernel_type:pe,surfel_buffer:Ge,surfel_data:new Float32Array(J),sv_params_buffer:ze,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(R=M.bbox)==null?void 0:R.min)==null?void 0:T[0])??-1)+(((V=(D=M.bbox)==null?void 0:D.max)==null?void 0:V[0])??1))/2,((((Y=(G=M.bbox)==null?void 0:G.min)==null?void 0:Y[1])??-1)+(((H=(z=M.bbox)==null?void 0:z.max)==null?void 0:H[1])??1))/2,((((q=(Z=M.bbox)==null?void 0:Z.min)==null?void 0:q[2])??-1)+(((U=(ce=M.bbox)==null?void 0:ce.max)==null?void 0:U[2])??1))/2]})}},w.onerror=k=>{w.terminate(),P(k)},i instanceof ArrayBuffer?(It("parsing PLY..."),w.postMessage({type:"start",plyBuffer:i},[i])):w.postMessage({type:"start_url",url:i.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,l){(function(h,P){P(l)})($l,function(h){class P{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class R extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class D extends k{constructor(e,t){super(e),this.index=t}}function V(n){return n}function G(n){return n==null}function Y(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const H={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Z{static alreadyDisposed(){return new Z({type:"alreadydisposed"})}static notBindable(){return new Z({type:"notbindable"})}static propertyNotFound(e){return new Z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=H[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!q.isBindable(s))throw Z.notBindable();if(!(e in s))throw Z.propertyNotFound(e);s[e]=t}}class ce extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class U{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Q="tp";function W(n){return(t,s)=>[Q,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ae(n,e){return t=>e(n(t))}function $(n){return n.rawValue}function pe(n,e){n.emitter.on("change",ae($,e)),e(n.rawValue)}function J(n,e,t){pe(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function we(n,e){return t=>{ue(n,e,t)}}function Ge(n,e){pe(n,t=>{e.textContent=t??""})}const Be=W("btn");class ze{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Be()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Be("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Be("t")),Ge(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class De{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ze(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ye{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,S)=>c===S,this.emitter=new U,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:c,sender:this}))}}class Me{constructor(e){this.emitter=new U,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function O(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Me(n):new ye(n,e)}class K{constructor(e){this.emitter=new U,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:O(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new K(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ne(n,e){const s=Object.keys(e).reduce((c,S)=>{if(c===void 0)return;const A=e[S],ee=A(n[S]);return ee.succeeded?Object.assign(Object.assign({},c),{[S]:ee.value}):void 0},{});return s}function he(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function re(n){return n===null?!1:typeof n=="object"}function oe(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function me(n){return{custom:e=>oe(e)(n),boolean:oe(e=>typeof e=="boolean"?e:void 0)(n),number:oe(e=>typeof e=="number"?e:void 0)(n),string:oe(e=>typeof e=="string"?e:void 0)(n),function:oe(e=>typeof e=="function"?e:void 0)(n),constant:e=>oe(t=>t===e?e:void 0)(n),raw:oe(e=>e)(n),object:e=>oe(t=>{if(re(t))return ne(t,e)})(n),array:e=>oe(t=>{if(Array.isArray(t))return he(t,e)})(n)}}const ve={optional:me(!0),required:me(!1)};function xe(n,e){const t=ve.required.object(e)(n);return t.succeeded?t.value:void 0}function Oe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class F{constructor(e){this.value_=e}static create(e){return[new F(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const b=W("");function o(n,e){return we(n,b(void 0,e))}class f extends K{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=F.create(O(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const S=e??{};return new f(K.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(c=S.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){pe(this.globalDisabled_,o(e,"disabled")),J(this,"hidden",o(e,"hidden"))}bindDisabled(e){pe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){pe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const g=W(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(g(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(g(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Oe({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function I(n,e,t){n.insertBefore(e,n.children[t])}function N(n){n.parentElement&&n.parentElement.removeChild(n)}function j(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function le(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const te=W("lbl");function fe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Pe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(te()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(te("l")),J(t.props,"label",S=>{G(S)?this.element.classList.add(te(void 0,"nol")):(this.element.classList.remove(te(void 0,"nol")),le(s),s.appendChild(fe(e,S)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(te("v")),this.element.appendChild(c),this.valueElement=c}}class be extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Pe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ge={id:"button",type:"blade",accept(n){const e=ve,t=xe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new be(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:new De(n.document,{props:K.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof be)||!(n.controller.valueController instanceof De)?null:new ce(n.controller)}};class Ae extends C{constructor(e){super(e),this.value=e.value}}function Te(){return new K({positions:O([],{equals:Y})})}class $e extends K{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=K.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};J(this,"expanded",s),J(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ze(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function je(n,e){e.style.height=n.styleHeight}function We(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ze(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends w{constructor(e,t){super(e),this.rackApi_=t}}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ke(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class st{constructor(e){this.emitter=new U,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Je extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends be{constructor(e,t){super(e,t),this.binding=t.binding}}class et extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new R(this,t,this.controller_.binding.target.presetKey)})}}class He extends be{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function lt(n){return n instanceof wt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function tt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Z.shouldNeverHappen();return t}function St(n,e,t){if(!q.isBindable(n))throw Z.notBindable();return new q(n,e,t)}class wt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new U,this.apiSet_=new st(lt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>tt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,A=this.pool_.createInput(S,St(e,t,c.presetKey),c),ee=new Je(A);return this.add(ee,c.index)}addMonitor(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,A=this.pool_.createMonitor(S,St(e,t),c),ee=new et(A);return this.add(ee,c.index)}addFolder(e){return Ke(this,e)}addButton(e){return rt(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return it(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=tt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=tt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ae){const s=tt(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof He))throw Z.shouldNeverHappen();const t=tt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new R(t,s.target.read(),s.target.presetKey)})}}class vt extends Qe{constructor(e,t){super(e,new wt(e.rackController,t)),this.emitter_=new U,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class gt extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class ie{constructor(e,t){const s=W(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function _e(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function de(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof He&&s.binding===e)return s}return null}function Ue(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ae&&s.value===e)return s}return null}function Ve(n){return n instanceof Ce?n.rack:n instanceof gt?n.rackController.rack:null}function Ee(n){const e=Ve(n);return e?e.bcSet_:null}class Ie{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new U,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new st(Ee),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),z(e,"parent")?e.parent=this:(e.parent_=this,Oe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){z(e,"parent")?e.parent=null:(e.parent_=null,Oe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Ve(s);if(c){const S=c.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Ve(s);if(c){const S=c.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const S=[];c===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),c===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),c.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=_e(this.find(qe),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=de(this.find(He),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ue(this.find(Ae),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ce extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new ie(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Ie({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&I(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&N(e.bladeController.view.element)}}const Ye=W("cnt");class ot{constructor(e,t){var s;this.className_=W((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Ye()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),J(this.foldable_,"completed",we(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),J(t.props,"title",ke=>{G(ke)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const A=e.createElement("div");A.classList.add(this.className_("t")),Ge(t.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Se=t.containerElement;Se.classList.add(this.className_("c")),this.element.appendChild(Se),this.containerElement=Se}}class ft extends gt{constructor(e,t){var s;const c=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new Ce(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new ot(e,{containerElement:S.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,We(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Yn={id:"folder",type:"blade",accept(n){const e=ve,t=xe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new ft(n.document,{blade:n.blade,expanded:n.params.expanded,props:K.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof ft?new vt(n.controller,n.pool):null}};class kt extends Ae{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Pe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class pn extends w{}const Bn=W("spr");class Tn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Bn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Bn("r")),this.element.appendChild(s)}}class Dn extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Tn(e,{viewProps:t.viewProps})}))}}const Zn={id:"separator",type:"blade",accept(n){const t=xe(n,{view:ve.required.constant("separator")});return t?{params:t}:null},controller(n){return new Dn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Dn?new pn(n.controller):null}},Lt=W("tbi");class Xn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Lt()),t.viewProps.bindClassModifiers(this.element),J(t.props,"selected",S=>{S?this.element.classList.add(Lt(void 0,"sel")):this.element.classList.remove(Lt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Lt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Lt("t")),Ge(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class An{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Xn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ht{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new An(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ce(e,{blade:Te(),viewProps:f.create()}),this.props=t.props,J(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class zt{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class qt extends Qe{constructor(e,t){super(e,new wt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new U,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ht(t,{itemProps:K.fromObject({selected:!1,title:e.title}),props:K.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Z.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Z.shouldNeverHappen();const s=new zt(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new D(this,e.rawValue)})}}const Ct=-1;class en{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=O(!0),this.selectedIndex=O(Ct),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ct,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Et=W("tab");class Qn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Et(),Ye()),t.viewProps.bindClassModifiers(this.element),pe(t.empty,we(this.element,Et(void 0,"nop")));const s=e.createElement("div");s.classList.add(Et("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Et("i")),this.element.appendChild(c);const S=t.contentsElement;S.classList.add(Et("c")),this.element.appendChild(S),this.contentsElement=S}}class tn extends gt{constructor(e,t){const s=new Ce(e,{blade:t.blade,viewProps:t.viewProps}),c=new en;super({blade:t.blade,rackController:s,view:new Qn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new st(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;I(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;N(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Is={id:"tab",type:"blade",accept(n){const e=ve,t=xe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new tn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ht(n.document,{itemProps:K.fromObject({selected:!1,title:t.title}),props:K.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof tn?new qt(n.controller,n.pool):null}};function xi(n,e){const t=n.accept(e.params);if(!t)return null;const s=ve.optional.boolean(e.params.disabled).value,c=ve.optional.boolean(e.params.hidden).value;return n.controller({blade:Te(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class yi{constructor(){this.disabled=!1,this.emitter=new U}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Pi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new U,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Si{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new U,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Ls(n,e){for(;n.length<e;)n.push(void 0)}function Ci(n){const e=[];return Ls(e,n),O(e)}function Ei(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function ki(n,e){const t=[...Ei(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Ls(t,n.length),t}class Mi{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new U,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=ki(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class hn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Mt(n,e){if(n instanceof e)return n;if(n instanceof hn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class nn{constructor(e){this.values=K.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class fn{constructor(e){this.values=K.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class zs{constructor(e){this.values=K.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class In{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Jn=W("lst");class Bi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Jn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Jn("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,J(this.props_,"options",S=>{j(this.selectElement),S.forEach(A=>{const ee=e.createElement("option");ee.textContent=A.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class _n{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Bi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Us=W("pop");class Ti{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Us()),t.viewProps.bindClassModifiers(this.element),pe(t.shows,we(this.element,Us(void 0,"v")))}}class Gs{constructor(e,t){this.shows=O(!1),this.viewProps=t.viewProps,this.view=new Ti(e,{shows:this.shows,viewProps:this.viewProps})}}const Rs=W("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Rs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Rs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Ln{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Ai(n){return String(n)}function Vs(n){return n==="false"?!1:!!n}function Os(n){return Ai(n)}class Ii{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Li={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class zi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ui={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ui[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function es(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function mn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ri(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function bn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=bn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=bn(n,e);return c===""?"":s+c}function ts(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Vi(n,e);return s===""?"":t+s}function Fs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ri(n,e);return e+=s.length,s===""?"":s+bn(n,e)}function Oi(n,e){const t=Fs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=bn(n,e);return e+=c.length,t+s+c+ts(n,e)}function Fi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=bn(n,e);return e+=s.length,s===""?"":t+s+ts(n,e)}function Ni(n,e){const t=Fs(n,e);return e+=t.length,t===""?"":t+ts(n,e)}const qi=es([Oi,Fi,Ni]);function $i(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$i(n,e);return s===""?"":t+s}function ji(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=ji(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Yi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Zi=es([Wi,Ki,Yi]),Xi=es([Zi,qi]);function Qi(n,e){const t=Xi(n,e);return e+=t.length,t===""?null:{evaluable:new Ii(t),cursor:e}}function Ji(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=qs(n,e);if(!s)return null;e=s.cursor,e+=mn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function eo(n,e){var t;return(t=Qi(n,e))!==null&&t!==void 0?t:Ji(n,e)}function Ns(n,e){const t=eo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Ns(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gi(s,c.evaluable)}):null}function to(n,e,t){t+=mn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=mn(e,t).length,{cursor:t,operator:s}):null}function no(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let S=c.evaluable;for(;;){const A=to(e,t,s);if(!A)break;s=A.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,S=new zi(A.operator,S,ee.evaluable)}return S?{cursor:s,evaluable:S}:null}}const so=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>no(n,e),Ns);function qs(n,e){return e+=mn(n,e).length,so(n,e)}function ro(n){const e=qs(n,0);return!e||e.cursor+mn(n,e.cursor).length!==n.length?null:e.evaluable}function Bt(n){var e;const t=ro(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function $s(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Bt(n);if(!G(e))return e}return 0}function io(n){return String(n)}function ut(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const oo=ut(0);function zn(n){return oo(n)+"%"}function Ws(n){return String(n)}function ns(n){return n}function vn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function S(A){c||(c=!0,A(),c=!1)}n.emitter.on("change",A=>{S(()=>{e.setRawValue(t(n,e),A.options)})}),e.emitter.on("change",A=>{S(()=>{n.setRawValue(s(n,e),A.options)}),S(()=>{e.setRawValue(t(n,e),A.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function gn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Tt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ao(n){return n==="ArrowUp"||n==="ArrowDown"}function js(n){return ao(n)||n==="ArrowLeft"||n==="ArrowRight"}function ss(n,e){var t,s;const c=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class $t{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new U,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ss(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ss(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ss(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Xe(n,e,t,s,c){const S=(n-e)/(t-e);return s+S*(c-s)}function Ks(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function at(n,e,t){return Math.min(Math.max(n,e),t)}function Hs(n,e){return(n%e+e)%e}const xt=W("txt");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(xt(),xt(void 0,"num")),t.arrayPosition&&this.element.classList.add(xt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(xt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xt()),this.inputElement.classList.add(xt("i"));const c=e.createElement("div");c.classList.add(xt("k")),this.element.appendChild(c),this.knobElement=c;const S=e.createElementNS(E,"svg");S.classList.add(xt("g")),this.knobElement.appendChild(S);const A=e.createElementNS(E,"path");A.classList.add(xt("gb")),S.appendChild(A),this.guideBodyElem_=A;const ee=e.createElementNS(E,"path");ee.classList.add(xt("gh")),S.appendChild(ee),this.guideHeadElem_=ee;const Se=e.createElement("div");Se.classList.add(W("tt")()),this.knobElement.appendChild(Se),this.tooltipElem_=Se,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(xt(void 0,"drg"));return}this.element.classList.add(xt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=at(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class wn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=O(null),this.view=new lo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new $t(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let A=e;return c!==void 0&&(A=Math.max(A,c)),S!==void 0&&(A=Math.min(A,S)),A}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,gn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,gn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const rs=W("sld");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(rs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(rs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(rs("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=at(Xe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class uo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new co(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Xe(at(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,Tt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const is=W("sldtxt");class po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(is());const s=e.createElement("div");s.classList.add(is("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(is("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class os{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new uo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new wn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new po(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function xn(n,e){n.write(e)}function Un(n){const e=ve;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Ys(n){if(n==="inline"||n==="popup")return n}function Ut(n){const e=ve;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Zs(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function as(n){return G(n)?null:new fn(Zs(n))}function ho(n){const e=n?Mt(n,In):null;return e?e.step:null}function Gn(n,e){const t=n&&Mt(n,In);return t?Ks(t.step):Math.max(Ks(e),2)}function sn(n){const e=ho(n);return e??1}function rn(n,e){var t;const s=n&&Mt(n,In),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Rn=W("ckb");class fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Rn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Rn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Rn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Rn("w")),s.appendChild(S);const A=v(e,"check");S.appendChild(A),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class _o{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new fo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function mo(n){const e=[],t=as(n.options);return t&&e.push(t),new hn(e)}const bo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{options:ve.optional.custom(Un)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs,constraint:n=>mo(n.params),writer:n=>xn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Mt(s,fn);return c?new _n(e,{props:new K({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new _o(e,{value:t,viewProps:n.viewProps})}},Wt=W("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wt()),t.foldable.bindExpandedClass(this.element,Wt(void 0,"expanded")),J(t.foldable,"completed",we(this.element,Wt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Wt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Wt("s")),s.appendChild(c),this.swatchElement=c;const S=e.createElement("div");if(S.classList.add(Wt("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(Wt("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}function go(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),S=at(t/255,0,1),A=Math.max(s,c,S),ee=Math.min(s,c,S),Se=A-ee;let ke=0,Fe=0;const Ne=(ee+A)/2;return Se!==0&&(Fe=Se/(1-Math.abs(A+ee-1)),s===A?ke=(c-S)/Se:c===A?ke=2+(S-s)/Se:ke=4+(s-c)/Se,ke=ke/6+(ke<0?1:0)),[ke*360,Fe*100,Ne*100]}function wo(n,e,t){const s=(n%360+360)%360,c=at(e/100,0,1),S=at(t/100,0,1),A=(1-Math.abs(2*S-1))*c,ee=A*(1-Math.abs(s/60%2-1)),Se=S-A/2;let ke,Fe,Ne;return s>=0&&s<60?[ke,Fe,Ne]=[A,ee,0]:s>=60&&s<120?[ke,Fe,Ne]=[ee,A,0]:s>=120&&s<180?[ke,Fe,Ne]=[0,A,ee]:s>=180&&s<240?[ke,Fe,Ne]=[0,ee,A]:s>=240&&s<300?[ke,Fe,Ne]=[ee,0,A]:[ke,Fe,Ne]=[A,0,ee],[(ke+Se)*255,(Fe+Se)*255,(Ne+Se)*255]}function xo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),S=at(t/255,0,1),A=Math.max(s,c,S),ee=Math.min(s,c,S),Se=A-ee;let ke;Se===0?ke=0:A===s?ke=60*(((c-S)/Se%6+6)%6):A===c?ke=60*((S-s)/Se+2):ke=60*((s-c)/Se+4);const Fe=A===0?0:Se/A,Ne=A;return[ke,Fe*100,Ne*100]}function Xs(n,e,t){const s=Hs(n,360),c=at(e/100,0,1),S=at(t/100,0,1),A=S*c,ee=A*(1-Math.abs(s/60%2-1)),Se=S-A;let ke,Fe,Ne;return s>=0&&s<60?[ke,Fe,Ne]=[A,ee,0]:s>=60&&s<120?[ke,Fe,Ne]=[ee,A,0]:s>=120&&s<180?[ke,Fe,Ne]=[0,A,ee]:s>=180&&s<240?[ke,Fe,Ne]=[0,ee,A]:s>=240&&s<300?[ke,Fe,Ne]=[ee,0,A]:[ke,Fe,Ne]=[A,0,ee],[(ke+Se)*255,(Fe+Se)*255,(Ne+Se)*255]}function yo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Po(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function jt(n){return[n[0],n[1],n[2]]}function Qs(n,e){return[n[0],n[1],n[2],e]}const So={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:yo,rgb:wo},hsv:{hsl:Po,hsv:(n,e,t)=>[n,e,t],rgb:Xs},rgb:{hsl:go,hsv:xo,rgb:(n,e,t)=>[n,e,t]}};function Vn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:Hs(n,e)}function Eo(n,e,t){var s;const c=Vn(e,t);return[e==="rgb"?at(n[0],0,c[0]):Co(n[0],c[0]),at(n[1],0,c[1]),at(n[2],0,c[2]),at((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Js(n,e,t,s){const c=Vn(e,t),S=Vn(e,s);return n.map((A,ee)=>A/c[ee]*S[ee])}function ko(n,e,t){const s=Js(n,e.mode,e.type,"int"),c=So[e.mode][t.mode](...s);return Js(c,t.mode,"int",t.type)}function On(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Re{static black(e="int"){return new Re([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Re(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return On(e,"r")&&On(e,"g")&&On(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&On(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==c[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Eo(e,t,s)}getComponents(e,t="int"){return Qs(ko(jt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Gt=W("colp");class Mo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Gt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Gt("hsv"));const c=e.createElement("div");c.classList.add(Gt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const S=e.createElement("div");S.classList.add(Gt("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const A=e.createElement("div");if(A.classList.add(Gt("rgb")),this.textView_=t.textView,A.appendChild(this.textView_.element),this.element.appendChild(A),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Gt("a"));const Se=e.createElement("div");Se.classList.add(Gt("ap")),Se.appendChild(this.alphaViews_.palette.element),ee.appendChild(Se);const ke=e.createElement("div");ke.classList.add(Gt("at")),ke.appendChild(this.alphaViews_.text.element),ee.appendChild(ke),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Bo(n){return n==="int"?"int":n==="float"?"float":void 0}function ls(n){const e=ve;return xe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Bo)}),expanded:e.optional.boolean,picker:e.optional.custom(Ys)})}function Kt(n){return n?.1:1}function Ht(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function To(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function yt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function er(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function tr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function nr(n){return e=>{const t=tr(e);return t?new Re(t,"rgb",n):null}}function sr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function rr(n){return e=>{const t=sr(e);return t?new Re(t,"rgb",n):null}}function ir(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[er(e[1]),yt(e[2],100),yt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function or(n){return e=>{const t=ir(e);return t?new Re(t,"hsl",n):null}}function ar(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[er(e[1]),yt(e[2],100),yt(e[3],100),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function lr(n){return e=>{const t=ar(e);return t?new Re(t,"hsl",n):null}}function cr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Ao(n){const e=cr(n);return e?new Re(e,"rgb","int"):null}function ur(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Xe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Xe(parseInt(t[4],16),0,255,0,1)]:null}function Io(n){const e=ur(n);return e?new Re(e,"rgb","int"):null}function dr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function pr(n){return e=>{const t=dr(e);return t?new Re(t,"rgb",n):null}}function hr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function fr(n){return e=>{const t=hr(e);return t?new Re(t,"rgb",n):null}}const Lo=[{parser:cr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ur,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:tr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:sr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ir,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ar,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:dr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:hr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function zo(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function cs(n,e="int"){const t=zo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const _r={int:[Ao,Io,nr("int"),rr("int"),or("int"),lr("int"),pr("int"),fr("int")],float:[nr("float"),rr("float"),or("float"),lr("float"),pr("float"),fr("float")]};function Uo(n){const e=_r[n];return t=>{if(typeof t!="string")return Re.black(n);const s=e.reduce((c,S)=>c||S(t),null);return s??Re.black(n)}}function us(n){const e=_r[n];return t=>e.reduce((s,c)=>s||c(t),null)}function mr(n){const e=at(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function br(n,e="#"){const t=jt(n.getComponents("rgb")).map(mr).join("");return`${e}${t}`}function ds(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(mr).join("");return`${e}${s}`}function vr(n,e){const t=ut(e==="float"?2:0);return`rgb(${jt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>vr(e,n)}function Fn(n,e){const t=ut(2),s=ut(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,A)=>(A===3?t:s)(S)).join(", ")})`}function Ro(n){return e=>Fn(e,n)}function Vo(n){const e=[ut(0),zn,zn];return`hsl(${jt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Oo(n){const e=[ut(0),zn,zn,ut(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function gr(n,e){const t=ut(e==="float"?2:0),s=["r","g","b"];return`{${jt(n.getComponents("rgb",e)).map((S,A)=>`${s[A]}: ${t(S)}`).join(", ")}}`}function Fo(n){return e=>gr(e,n)}function wr(n,e){const t=ut(2),s=ut(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((A,ee)=>{const Se=ee===3?t:s;return`${c[ee]}: ${Se(A)}`}).join(", ")}}`}function No(n){return e=>wr(e,n)}const qo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:br},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ds},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Ro(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:No(e)}],[])];function ps(n){return qo.reduce((e,t)=>e||(To(t.format,n)?t.stringifier:null),null)}const yn=W("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(yn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(yn("c")),s.appendChild(c),this.colorElem_=c;const S=e.createElement("div");S.classList.add(yn("m")),this.element.appendChild(S),this.markerElem_=S;const A=e.createElement("div");A.classList.add(yn("p")),this.markerElem_.appendChild(A),this.previewElem_=A,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Re([t[0],t[1],t[2],0],"rgb"),c=new Re([t[0],t[1],t[2],255],"rgb"),S=["to right",Fn(s),Fn(c)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=Fn(e);const A=Xe(t[3],0,1,0,100);this.markerElem_.style.left=`${A}%`}onValueChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[S,A,ee]=c.getComponents("hsv");this.value.setRawValue(new Re([S,A,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Kt(!0),Tt(e));if(t===0)return;const s=this.value.rawValue,[c,S,A,ee]=s.getComponents("hsv");this.value.setRawValue(new Re([c,S,A,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Kt(!0),Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const on=W("coltxt");function jo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const S=n.createElement("option");return S.textContent=c.text,S.value=c.value,s.appendChild(S),s},n.createDocumentFragment())),e}class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(on("m")),this.modeElem_=jo(e),this.modeElem_.classList.add(on("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(on("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(on("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),pe(t.colorMode,A=>{this.modeElem_.value=A})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){j(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(on("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return ut(n==="float"?2:0)}function Yo(n,e,t){const s=Vn(n,e)[t];return new nn({min:0,max:s})}function hs(n,e,t){return new wn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Kt(!1),parser:e.parser,props:K.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:O(0,{constraint:Yo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Zo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=O(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ko(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[hs(e,t,0),hs(e,t,1),hs(e,t,2)];return s.forEach((c,S)=>{vn({primary:this.value,secondary:c.value,forward:A=>A.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(A,ee)=>{const Se=this.colorMode.rawValue,ke=A.rawValue.getComponents(Se,this.colorType_);return ke[S]=ee.rawValue,new Re(Qs(jt(ke),ke[3]),Se,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const fs=W("hpl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(fs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(fs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(fs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=vr(new Re([t,100,100],"hsv"));const s=Xe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(at(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,S,A,ee]=c.getComponents("hsv");this.value.setRawValue(new Re([s,S,A,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Kt(!1),Tt(e));if(t===0)return;const s=this.value.rawValue,[c,S,A,ee]=s.getComponents("hsv");this.value.setRawValue(new Re([c+t,S,A,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Kt(!1),Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const _s=W("svp"),xr=64;class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=xr,s.width=xr,s.classList.add(_s("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(_s("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,S=this.canvasElement.height,A=e.getImageData(0,0,c,S),ee=A.data;for(let Fe=0;Fe<S;Fe++)for(let Ne=0;Ne<c;Ne++){const Yt=Xe(Ne,0,c,0,100),Sn=Xe(Fe,0,S,100,0),Cn=Xs(s[0],Yt,Sn),Nn=(Fe*c+Ne)*4;ee[Nn]=Cn[0],ee[Nn+1]=Cn[1],ee[Nn+2]=Cn[2],ee[Nn+3]=255}e.putImageData(A,0,0);const Se=Xe(s[1],0,100,0,100);this.markerElem_.style.left=`${Se}%`;const ke=Xe(s[2],0,100,100,0);this.markerElem_.style.top=`${ke}%`}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(e.point.x,0,e.bounds.width,0,100),c=Xe(e.point.y,0,e.bounds.height,100,0),[S,,,A]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Re([S,s,c,A],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){js(e.key)&&e.preventDefault();const[t,s,c,S]=this.value.rawValue.getComponents("hsv"),A=Kt(!1),ee=mt(A,Tt(e)),Se=mt(A,gn(e));ee===0&&Se===0||this.value.setRawValue(new Re([t,s+ee,c+Se,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Kt(!1),s=mt(t,Tt(e)),c=mt(t,gn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ta{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ea(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Wo(e,{value:this.value,viewProps:this.viewProps}),text:new wn(e,{parser:Bt,baseStep:.1,props:K.fromObject({draggingScale:.01,formatter:ut(2)}),value:O(0,{constraint:new nn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&vn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const S=s.rawValue.getComponents();return S[3]=c.rawValue,new Re(S,s.rawValue.mode)}}),this.textC_=new Zo(e,{colorType:t.colorType,parser:Bt,value:this.value,viewProps:this.viewProps}),this.view=new Mo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ms=W("colsw");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ms("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ms("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ds(e)}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps})}}class bs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new sa(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Ln(e,{parser:t.parser,props:K.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Gs(e,{viewProps:this.viewProps}):null;const c=new ta(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),vn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,A)=>A.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),We(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ra(n,e){return Re.isColorObject(n)?Re.fromObject(n,e):Re.black(e)}function ia(n){return jt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function oa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function aa(n){return new Re([n>>16&255,n>>8&255,n&255],"rgb")}function la(n){return new Re([n>>24&255,n>>16&255,n>>8&255,Xe(n&255,0,255,0,1)],"rgb")}function ca(n){return typeof n!="number"?Re.black():aa(n)}function ua(n){return typeof n!="number"?Re.black():la(n)}function da(n){const e=ps(n);return e?(t,s)=>{xn(t,e(s))}:null}function pa(n){const e=n?oa:ia;return(t,s)=>{xn(t,e(s))}}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function _a(n,e){return(t,s)=>{n?ha(t,s,e):fa(t,s,e)}}function vs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ma(n){return n?e=>ds(e,"0x"):e=>br(e,"0x")}function ba(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ba(e))return null;const t=ls(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>vs(n.params)?ua:ca,equals:Re.equals,writer:n=>pa(vs(n.params))},controller:n=>{const e=vs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new bs(n.document,{colorType:"int",expanded:t??!1,formatter:ma(e),parser:us("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ga(n){return Re.isRgbaColorObject(n)}function wa(n){return e=>ra(e,n)}function xa(n,e){return t=>n?wr(t,e):gr(t,e)}const ya={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Re.isColorObject(n))return null;const t=ls(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>wa(Ht(n.params)),equals:Re.equals,writer:n=>_a(ga(n.initialValue),Ht(n.params))},controller:n=>{var e;const t=Re.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,S=(e=Ht(n.params))!==null&&e!==void 0?e:"int";return new bs(n.document,{colorType:S,expanded:s??!1,formatter:xa(t,S),parser:us(S),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Pa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=cs(n,Ht(e));if(!t||!ps(t))return null;const c=ls(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Uo((e=Ht(n.params))!==null&&e!==void 0?e:"int")},equals:Re.equals,writer:n=>{const e=cs(n.initialValue,Ht(n.params));if(!e)throw Z.shouldNeverHappen();const t=da(e);if(!t)throw Z.notBindable();return t}},controller:n=>{const e=cs(n.initialValue,Ht(n.params));if(!e)throw Z.shouldNeverHappen();const t=ps(e);if(!t)throw Z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new bs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:us(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Rt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var S,A;return(A=(S=this.components[c])===null||S===void 0?void 0:S.constrain(s))!==null&&A!==void 0?A:s});return this.asm_.fromComponents(t)}}const yr=W("pndtxt");class Sa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(yr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(yr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ca(n,e,t){return new wn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:O(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ca(e,t,c)),this.acs_.forEach((s,c)=>{vn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[c],backward:(S,A)=>{const ee=t.assembly.toComponents(S.rawValue);return ee[c]=A.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Sa(e,{textViews:this.acs_.map(s=>s.view)})}}function Pr(n,e){return"step"in n&&!G(n.step)?new In(n.step,e):null}function Sr(n){return!G(n.max)&&!G(n.min)?new nn({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new zs({max:n.max,min:n.min}):null}function Ea(n){const e=Mt(n,nn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Mt(n,zs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function ka(n,e){const t=[],s=Pr(n,e);s&&t.push(s);const c=Sr(n);c&&t.push(c);const S=as(n.options);return S&&t.push(S),new hn(t)}const Ma={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=xe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Un),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s,constraint:n=>ka(n.params,n.initialValue),writer:n=>xn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Mt(s,fn);if(c)return new _n(n.document,{props:new K({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ut(Gn(s,t.rawValue)),A=s&&Mt(s,nn);return A?new os(n.document,{baseStep:sn(s),parser:Bt,sliderProps:new K({maxValue:A.values.value("max"),minValue:A.values.value("min")}),textProps:K.fromObject({draggingScale:rn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new wn(n.document,{baseStep:sn(s),parser:Bt,props:K.fromObject({draggingScale:rn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Vt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Cr={toComponents:n=>n.getComponents(),fromComponents:n=>new Vt(...n)},an=W("p2d");class Ba{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(an()),t.viewProps.bindClassModifiers(this.element),pe(t.expanded,we(this.element,an(void 0,"expanded")));const s=e.createElement("div");s.classList.add(an("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(an("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const S=e.createElement("div");if(S.classList.add(an("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(an("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}const Ot=W("p2dp");class Ta{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Ot()),t.layout==="popup"&&this.element.classList.add(Ot(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ot("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(Ot("g")),this.padElement.appendChild(c),this.svgElem_=c;const S=e.createElementNS(E,"line");S.classList.add(Ot("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const A=e.createElementNS(E,"line");A.classList.add(Ot("ax")),A.setAttributeNS(null,"x1","50%"),A.setAttributeNS(null,"y1","0"),A.setAttributeNS(null,"x2","50%"),A.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(A);const ee=e.createElementNS(E,"line");ee.classList.add(Ot("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Se=e.createElement("div");Se.classList.add(Ot("m")),this.padElement.appendChild(Se),this.markerElem_=Se,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Xe(e,-s,+s,0,100),S=Xe(t,-s,+s,0,100),A=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${A}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${A}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Er(n,e,t){return[mt(e[0],Tt(n)),mt(e[1],gn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ta(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Xe(e.point.x,0,e.bounds.width,-s,+s),S=Xe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Vt(c,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){js(e.key)&&e.preventDefault();const[t,s]=Er(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Vt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Er(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Aa{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Gs(e,{viewProps:this.viewProps}):null;const S=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new gs(e,{assembly:Cr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ba(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),vn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),We(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class ln{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const kr={toComponents:n=>n.getComponents(),fromComponents:n=>new ln(...n)};function Ia(n){return ln.isObject(n)?new ln(n.x,n.y,n.z):new ln}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function za(n,e){return new Rt({assembly:kr,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y),Dt("z"in n?n.z:void 0,e.z)]})}function ws(n,e){return{baseStep:sn(e),constraint:e,textProps:K.fromObject({draggingScale:rn(e,n),formatter:ut(Gn(e,n))})}}const Ua={id:"input-point3d",type:"input",accept:(n,e)=>{if(!ln.isObject(n))return null;const t=ve,s=xe(e,{x:t.optional.custom(Ut),y:t.optional.custom(Ut),z:t.optional.custom(Ut)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>za(n.params,n.initialValue),equals:ln.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Rt))throw Z.shouldNeverHappen();return new gs(n.document,{assembly:kr,axes:[ws(e.rawValue.x,t.components[0]),ws(e.rawValue.y,t.components[1]),ws(e.rawValue.z,t.components[2])],parser:Bt,value:e,viewProps:n.viewProps})}};class cn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Mr={toComponents:n=>n.getComponents(),fromComponents:n=>new cn(...n)};function Ga(n){return cn.isObject(n)?new cn(n.x,n.y,n.z,n.w):new cn}function Ra(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Va(n,e){return new Rt({assembly:Mr,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y),Dt("z"in n?n.z:void 0,e.z),Dt("w"in n?n.w:void 0,e.w)]})}function Oa(n,e){return{baseStep:sn(e),constraint:e,textProps:K.fromObject({draggingScale:rn(e,n),formatter:ut(Gn(e,n))})}}const Fa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!cn.isObject(n))return null;const t=ve,s=xe(e,{x:t.optional.custom(Ut),y:t.optional.custom(Ut),z:t.optional.custom(Ut),w:t.optional.custom(Ut)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Va(n.params,n.initialValue),equals:cn.equals,writer:n=>Ra},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Rt))throw Z.shouldNeverHappen();return new gs(n.document,{assembly:Mr,axes:e.rawValue.getComponents().map((s,c)=>Oa(s,t.components[c])),parser:Bt,value:e,viewProps:n.viewProps})}};function Na(n){const e=[],t=as(n.options);return t&&e.push(t),new hn(e)}const qa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=xe(e,{options:ve.optional.custom(Un)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ws,constraint:n=>Na(n.params),writer:n=>xn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Mt(s,fn);return c?new _n(e,{props:new K({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Ln(e,{parser:S=>S,props:K.fromObject({formatter:ns}),value:t,viewProps:n.viewProps})}},Pn={monitor:{defaultInterval:200,defaultLineCount:3}},Br=W("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Br()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Br("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class xs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Tr=W("sgl");class Wa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Tr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Tr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ys{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Wa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const ja={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{lineCount:ve.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs},controller:n=>{var e;return n.value.rawValue.length===1?new ys(n.document,{formatter:Os,value:n.value,viewProps:n.viewProps}):new xs(n.document,{formatter:Os,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ft=W("grl");class Ka{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(Ft("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const S=e.createElement("div");S.classList.add(Ft("t"),W("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const Yt=Xe(Ne,0,t,0,e.width),Sn=Xe(Fe,s,c,e.height,0);S.push([Yt,Sn].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const A=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){A.classList.remove(Ft("t","a"));return}const Se=Xe(this.cursor_.rawValue,0,t,0,e.width),ke=Xe(ee,s,c,e.height,0);A.style.left=`${Se}px`,A.style.top=`${ke}px`,A.textContent=`${this.formatter_(ee)}`,A.classList.contains(Ft("t","a"))||(A.classList.add(Ft("t","a"),Ft("t","in")),r(A),A.classList.remove(Ft("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=O(-1),this.view=new Ka(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new $t(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Xe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Xe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ps(n){return"format"in n&&!G(n.format)?n.format:ut(2)}function Ya(n){var e;return n.value.rawValue.length===1?new ys(n.document,{formatter:Ps(n.params),value:n.value,viewProps:n.viewProps}):new xs(n.document,{formatter:Ps(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Za(n){var e,t,s;return new Ha(n.document,{formatter:Ps(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,props:K.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Dr(n){return"view"in n&&n.view==="graph"}const Xa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=xe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Dr(n)?64:1,reader:n=>$s},controller:n=>Dr(n.params)?Za(n):Ya(n)},Qa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ve,s=xe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ws},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new xs(n.document,{formatter:ns,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ys(n.document,{formatter:ns,value:t,viewProps:n.viewProps})}};function Ja(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=ve,S={target:e.target,initialValue:s.initialValue,params:s.params},A=n.binding.reader(S),ee=n.binding.constraint?n.binding.constraint(S):void 0,Se=O(A(s.initialValue),{constraint:ee,equals:n.binding.equals}),ke=new Si({reader:A,target:e.target,value:Se,writer:n.binding.writer(S)}),Fe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,Yt=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:ke.value,viewProps:f.create({disabled:Fe,hidden:Ne})});return new qe(e.document,{binding:ke,blade:Te(),props:K.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Yt})}function el(n,e){return e===0?new yi:new Pi(n,e??Pn.monitor.defaultInterval)}function tl(n,e){var t,s,c;const S=ve,A=n.accept(e.target.read(),e.params);if(G(A))return null;const ee={target:e.target,initialValue:A.initialValue,params:A.params},Se=n.binding.reader(ee),ke=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(A.params))!==null&&s!==void 0?s:1,Fe=S.optional.number(e.params.interval).value,Ne=new Mi({reader:Se,target:e.target,ticker:el(e.document,Fe),value:Ci(ke)}),Yt=S.optional.boolean(e.params.disabled).value,Sn=S.optional.boolean(e.params.hidden).value,Cn=n.controller({document:e.document,params:A.params,value:Ne.value,viewProps:f.create({disabled:Yt,hidden:Sn})});return new He(e.document,{binding:Ne,blade:Te(),props:K.fromObject({label:"label"in e.params?(c=S.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Cn})}class nl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new Z({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((A,ee)=>A??Ja(ee,{document:e,target:t,params:s}),null);if(S)return S;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((S,A)=>S??tl(A,{document:e,params:s,target:t}),null);if(c)return c;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,S)=>c??xi(S,{document:e,params:t}),null);if(!s)throw new Z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new Je(e);if(e instanceof He)return new et(e);if(e instanceof Ce)return new wt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Z.shouldNeverHappen();return t}}function sl(){const n=new nl;return[cl,Ua,Fa,qa,Ma,Pa,ya,va,bo,ja,Qa,Xa,ge,Yn,Zn,Is].forEach(e=>{n.register(e)}),n}function rl(n){return Vt.isObject(n)?new Vt(n.x,n.y):new Vt}function il(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Dt(n,e){if(!n)return;const t=[],s=Pr(n,e);s&&t.push(s);const c=Sr(n);return c&&t.push(c),new hn(t)}function ol(n,e){return new Rt({assembly:Cr,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y)]})}function Ar(n,e){const[t,s]=n?Ea(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=sn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function al(n,e){const t=e instanceof Rt?e.components[0]:void 0,s=e instanceof Rt?e.components[1]:void 0,c=Ar(t,n.x),S=Ar(s,n.y);return Math.max(c,S)}function Ir(n,e){return{baseStep:sn(e),constraint:e,textProps:K.fromObject({draggingScale:rn(e,n),formatter:ut(Gn(e,n))})}}function ll(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const cl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Vt.isObject(n))return null;const t=ve,s=xe(e,{expanded:t.optional.boolean,picker:t.optional.custom(Ys),x:t.optional.custom(Ut),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>rl,constraint:n=>ol(n.params,n.initialValue),equals:Vt.equals,writer:n=>il},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Rt))throw Z.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Aa(e,{axes:[Ir(t.rawValue.x,s.components[0]),Ir(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:ll(n.params),maxValue:al(t.rawValue,s),parser:Bt,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class Lr extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class zr extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ur extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const ul=function(){return{id:"list",type:"blade",accept(n){const e=ve,t=xe(n,{options:e.required.custom(Un),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new fn(Zs(n.params.options)),t=O(n.params.value,{constraint:e}),s=new _n(n.document,{props:new K({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof _n)?null:new Lr(n.controller)}}}();function dl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function pl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class hl extends vt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);pl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return dl(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()})}}class fl extends ft{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const _l={id:"slider",type:"blade",accept(n){const e=ve,t=xe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new nn({max:n.params.max,min:n.params.min}),S=new os(n.document,{baseStep:1,parser:Bt,sliderProps:new K({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:K.fromObject({draggingScale:rn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:io}),value:O(s,{constraint:c}),viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof os)?null:new zr(n.controller)}},ml=function(){return{id:"text",type:"blade",accept(n){const e=ve,t=xe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Ln(n.document,{parser:n.params.parse,props:K.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:O(n.params.value),viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof Ln)?null:new Ur(n.controller)}}}();function bl(n){const e=n.createElement("div");return e.classList.add(W("dfw")()),n.body&&n.body.appendChild(e),e}function Gr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends hl{constructor(e){var t,s;const c=e??{},S=(t=c.document)!==null&&t!==void 0?t:a(),A=sl(),ee=new fl(S,{expanded:c.expanded,blade:Te(),props:K.fromObject({title:c.title}),viewProps:f.create()});super(ee,A),this.pool_=A,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:bl(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Gr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Gr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[_l,ul,Is,ml]})}}const gl=new P("3.1.10");h.BladeApi=w,h.ButtonApi=ce,h.FolderApi=vt,h.InputBindingApi=Je,h.ListApi=Lr,h.MonitorBindingApi=et,h.Pane=vl,h.SeparatorApi=pn,h.SliderApi=zr,h.TabApi=qt,h.TabPageApi=zt,h.TextApi=Ur,h.TpChangeEvent=M,h.VERSION=gl,Object.defineProperty(h,"__esModule",{value:!0})})})(Cs,Cs.exports);var Wl=Cs.exports;const jl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Kl=`// 2DGS render — vertex+fragment.
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
`,Hl=`const WG_SIZE = 256u;
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
}`,Yl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
                    let tx = clamp(i32(px_f), 0, tex_dims.x - 1);
                    let ty = clamp(i32(py_f), 0, tex_dims.y - 1);
                    let mesh_z = textureLoad(mesh_depth_tex, vec2<i32>(tx, ty), 0);
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
                        // Standard: cull surfels BEHIND the mesh. Small margin
                        // absorbs the half-pixel offset between sample point
                        // and rasterized triangle center + fp32 fighting on
                        // grazing planes.
                        if z_ndc > mesh_z + 1e-4 {
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
`,Zl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,Xl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
`,Ql=`// shader implementing gpu radix sort.

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
`,Jl=`// shader implementing gpu radix sort.

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
`,ec=`// ============================================================================
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
}`,ci=32,Es=1,ks=2,Hr=4,Ms=8,ui=4,tc=7<<ui,Yr=128,Zr=256,nc=0,Nt=new ArrayBuffer(ci),pt={canvas_size:new Uint32Array(Nt,0,2),accel_flags:new Uint32Array(Nt,8,1),feature_mode:new Uint32Array(Nt,12,1),gaussian_scaling:new Float32Array(Nt,16,1),sh_bias:new Float32Array(Nt,20,1),color_K:new Uint32Array(Nt,24,1),walltime:new Float32Array(Nt,28,1)};function sc(i){pt.canvas_size[0]=i.width>>>0,pt.canvas_size[1]=i.height>>>0,pt.accel_flags[0]=(i.accel_flags??Es|ks)>>>0,pt.feature_mode[0]=(i.feature_mode??nc)>>>0,pt.gaussian_scaling[0]=i.gaussian_scaling??1,pt.sh_bias[0]=i.sh_bias??.5,pt.color_K[0]=(i.color_K??0)>>>0,pt.walltime[0]=i.walltime??0}function di(i,l){i.queue.writeBuffer(l,0,Nt)}function Hn(i,l,h){h&&i&&l&&di(i,l)}function qn(i,l,h,P,w=!0){pt.canvas_size[0]=i>>>0,pt.canvas_size[1]=l>>>0,Hn(h??null,P??null,w)}function Xr(i,l,h,P=!0){pt.gaussian_scaling[0]=i,Hn(l??null,h??null,P)}function Qr(i,l,h,P=!0){pt.sh_bias[0]=i,Hn(l??null,h??null,P)}function un(i,l,h,P=!0){let w=pt.accel_flags[0];if(i.oac!==void 0&&(w=i.oac?w|Es:w&~Es),i.spr!==void 0&&(w=i.spr?w|ks:w&~ks),i.bfc!==void 0&&(w=i.bfc?w|Hr:w&~Hr),i.meshCull!==void 0&&(w=i.meshCull?w|Ms:w&~Ms),i.meshSampleMode!==void 0){const k=(i.meshSampleMode&7)<<ui;w=w&~tc|k}i.meshSilhouetteCull!==void 0&&(w=i.meshSilhouetteCull?w|Yr:w&~Yr),i.meshInvertDepth!==void 0&&(w=i.meshInvertDepth?w|Zr:w&~Zr),pt.accel_flags[0]=w>>>0,Hn(l??null,h??null,P)}const rc=256,ic=ci,oc=8,ac=80,lc=12,As=8,At=1<<As,Xt=256,Wn=32/As,cc=0,Jr=Wn&1;function ei(i,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function uc(i,l){const h=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),P=i.createPipelineLayout({bindGroupLayouts:[h]}),w=k=>i.createComputePipeline({layout:P,compute:{module:l,entryPoint:k,constants:{WG_SIZE:Xt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:h}}function dc(i,l,h){const P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=i.createPipelineLayout({bindGroupLayouts:[P]}),M=i.createPipelineLayout({bindGroupLayouts:[w]}),R=[];for(let T=0;T<Wn;T++){const D={PASS_ID:T+cc,RS_RADIX_LOG2:As,RS_RADIX_SIZE:At};R.push({localHistogram:i.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:D}}),scatterElements:i.createComputePipeline({layout:M,compute:{module:h,entryPoint:"scatter_elements",constants:D}})})}return{passes:R,localHistogramBindGroupLayout:P,scatterBindGroupLayout:w}}function pc(i){const l=i.createShaderModule({label:"local histogram",code:Jl}),h=i.createShaderModule({label:"scatter",code:Ql}),P=i.createShaderModule({label:"blelloch prefix",code:ec}),w=uc(i,P),k=dc(i,l,h);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function hc(i){const l=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d-array"}),P=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=i.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(k,0,new ArrayBuffer(48));const M=i.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),R=M.createView({dimension:"2d"}),T=i.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),D=i.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),V=D.createView({dimension:"2d"}),G=i.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Y={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:h,sampler:P,rectsBuffer:w,texParamsBuffer:k,meta:Y,rvqCodebookTexture:M,rvqCodebookView:R,rvqCodebookSampler:T,rvqPackedIndicesTexture:D,rvqPackedIndicesView:V,rvqSurfelOffsetsBuffer:G}}class fc{constructor(l,h,P,w,k,M=null,R=null){X(this,"device");X(this,"pc");X(this,"presentationFormat");X(this,"camera_buffer");X(this,"render_settings_buffer");X(this,"draw_indirect_buffer");X(this,"splat_2d_buffer");X(this,"querySet");X(this,"resolveBuffer");X(this,"resultBuffer");X(this,"queriesPerFrame",oc);X(this,"queryCapacityFrames",200);X(this,"sort_prefixBindGroup");X(this,"sort_pipelines");X(this,"sort_localHistogramBindGroups");X(this,"sort_scatterBindGroups");X(this,"lastFrame",0);X(this,"frameCount",0);X(this,"preprocessPipeline");X(this,"cullPipeline");X(this,"renderPipeline");X(this,"indirectPipeline");X(this,"sort_info_buffer");X(this,"sort_ping_pong");X(this,"crsBg");X(this,"gsBg");X(this,"cullBg2");X(this,"preprocessBg1");X(this,"renderSplatsBindGroup");X(this,"renderSettingsBindGroup");X(this,"atlasBindGroup");X(this,"indirectBindGroup");X(this,"sh_solvers_buffer");X(this,"mesh");X(this,"meshDepthPipeline",null);X(this,"meshDepthCameraBindGroup",null);X(this,"meshDepthMarginBindGroup",null);X(this,"meshMarginBuffer",null);X(this,"meshDepthTexture",null);X(this,"meshDepthView",null);X(this,"meshCullBindGroupLayout");X(this,"meshCullBindGroup");X(this,"meshCullWidth",0);X(this,"meshCullHeight",0);X(this,"meshStubTexture");X(this,"meshStubView");X(this,"meshOverlayPipeline",null);X(this,"meshOverlayEnabled",!1);X(this,"bgColor",[0,0,0,0]);X(this,"showPerfDialogNext",!1);X(this,"requestReorderNextFrame",!1);X(this,"reorderInFlight",!1);X(this,"downloadOnceNextRead",!1);X(this,"downloadOnceFileName","fps_metrics");X(this,"allFrameTimes",[]);X(this,"lastStageBreakdownMs",null);X(this,"timeQueryEnabled");X(this,"atlas");this.mesh=R;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&_t("⏰ using timestamp-query"),this.pc=l,this.device=h,this.presentationFormat=P,this.camera_buffer=w,this.atlas=M??hc(h),h.addEventListener("uncapturederror",K=>{console.error("A WebGPU error was not captured:",K.error)}),this._setupTimestampQueries(),this._setupBuffers();const D=(Math.floor((this.pc.num_points+Xt-1)/Xt)+1)*Xt,V=Math.ceil(D/Xt);console.log(`keys count adjusted: ${D}`),console.log(`key size: ${this.pc.num_points}`);const G=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=pc(h);const Y=[ei(D,h),ei(D,h)],z=h.createBuffer({label:"workgroup histograms",size:V*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=h.createBuffer({label:"workgroup prefixes",size:V*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=h.createBuffer({label:"digit base",size:At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=Math.ceil(V/Xt),ce=Math.ceil(q/Xt),U=h.createBuffer({label:"prefix l0 sums",size:q*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=h.createBuffer({label:"prefix l0 offsets",size:q*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=h.createBuffer({label:"prefix l1 sums",size:ce*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=h.createBuffer({label:"prefix l1 offsets",size:ce*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:H}},{binding:3,resource:{buffer:U}},{binding:4,resource:{buffer:Q}},{binding:5,resource:{buffer:W}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:Z}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y[0].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y[1].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:Y[0].sort_depths_buffer}},{binding:3,resource:{buffer:Y[1].sort_depths_buffer}},{binding:4,resource:{buffer:Y[0].sort_indices_buffer}},{binding:5,resource:{buffer:Y[1].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:Y[1].sort_depths_buffer}},{binding:3,resource:{buffer:Y[0].sort_depths_buffer}},{binding:4,resource:{buffer:Y[1].sort_indices_buffer}},{binding:5,resource:{buffer:Y[0].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]})],this.sort_info_buffer=G,this.sort_ping_pong=Y;const $=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),pe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),J=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:$,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:pe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:J,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const we=this.device.createShaderModule({code:Hl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:we,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const Ge=this.device.createShaderModule({code:Yl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,pe,J,this.meshCullBindGroupLayout]}),compute:{module:Ge,entryPoint:"surfel_cull"}}),this.mesh!==null){const K=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:K,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ne=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ne,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const he=this.device.createShaderModule({code:Zl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[K,ne]}),vertex:{module:he,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Be=this.device.createShaderModule({code:jl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,ue]}),compute:{module:Be,entryPoint:"preprocess"}});const ze=this.device.createShaderModule({code:Kl});ze.getCompilationInfo().then(K=>{K.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),K.messages.forEach(ne=>{(ne.type==="error"?console.error:ne.type==="warning"?console.warn:console.log)(`${ne.type} (line ${ne.lineNum}:${ne.linePos}): ${ne.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const De=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ye=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Me=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),O=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[De,ye,Me]}),vertex:{module:ze,entryPoint:"vs_main"},fragment:{module:ze,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(K=>{K?console.error("[render_2dgs] pipeline create validation error:",K.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:De,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ye,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Jr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Me,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){un({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}ensureMeshDepthTexture(l,h){var P;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===h||((P=this.meshDepthTexture)==null||P.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,h),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=h))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&ai(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const h=Math.max(0,Math.min(l,this.pc.num_points)),P=h*Uint32Array.BYTES_PER_ELEMENT;if(P===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[Jr].sort_indices_buffer,0,w,0,P),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(M)),w.unmap()}frame(l,h,P=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=P&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(pt.accel_flags[0]&Ms)!==0){const T=pt.canvas_size[0],D=pt.canvas_size[1];this.ensureMeshDepthTexture(T,D);const V={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(V);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setVertexBuffer(1,this.mesh.normalBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const D=l.beginComputePass(T);D.setPipeline(this.cullPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.gsBg),D.setBindGroup(2,this.cullBg2),D.setBindGroup(3,this.meshCullBindGroup);const V=Math.ceil(this.pc.num_points/rc);D.dispatchWorkgroups(V,1,1),D.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const D=l.beginComputePass(T);D.setPipeline(this.preprocessPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.preprocessBg1),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),D.end()}for(let T=0;T<Wn;T++){const D=T&1,V=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[D],Y=this.sort_scatterBindGroups[D];{const z={label:`upsweep_round${T}`};M&&T==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const H=l.beginComputePass(z);H.setPipeline(V.localHistogram),H.setBindGroup(0,G),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,At,1),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${T}`};M&&T==Wn-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const H=l.beginComputePass(z);H.setPipeline(V.scatterElements),H.setBindGroup(0,Y),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}{const T={label:"render",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const D=l.beginRenderPass(T);D.setPipeline(this.renderPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const V=this.device.createShaderModule({code:Xl}),G=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Y=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[G,Y]}),vertex:{module:V,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:V,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:h,loadOp:"load",storeOp:"store"}]},D=l.beginRenderPass(T);D.setPipeline(this.meshOverlayPipeline),D.setBindGroup(0,this.meshDepthCameraBindGroup),D.setBindGroup(1,this.meshDepthMarginBindGroup),D.setVertexBuffer(0,this.mesh.vertexBuffer),D.setVertexBuffer(1,this.mesh.normalBuffer),D.setIndexBuffer(this.mesh.indexBuffer,"uint32"),D.drawIndexed(this.mesh.numIndices),D.end()}this.frameCount++}async readPerfMetrics(l){const h=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const P=this.device.createCommandEncoder({label:"timestamp resolve encoder"});P.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),P.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([P.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),R=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let D=0;for(let ce=0;ce<M;ce++){const U=(R+ce)%this.queryCapacityFrames,Q=U*this.queriesPerFrame;let W=!0;for(let ae=0;ae<w.length;ae++){const[$,pe,J]=w[ae];if(k[Q+J]===0n||k[Q+pe]===0n||k[Q+pe]<k[Q+J]){W=!1;break}}if(!W){!h&&U%60===0&&console.debug("[timestamp] frame slot",U,"contains unwritten (0) timestamps, skipped in stats");continue}D++;for(let ae=0;ae<w.length;ae++){const[$,pe,J]=w[ae],ue=Number(k[Q+J]),we=Number(k[Q+pe]);T[ae].push((we-ue)/1e6)}}if(D===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const V=[];let G=0,Y=0,z=0;for(let ce=0;ce<w.length;ce++){const U=w[ce][0],Q=T[ce];let W=0;if(U==="Total"){const ae=this.allFrameTimes;W=ae.reduce((J,ue)=>J+ue,0)/ae.length;const $=[...ae].sort((J,ue)=>J-ue);G=$[Math.floor($.length*.99)]||0;const pe=ae.reduce((J,ue)=>J+Math.pow(ue-W,2),0)/ae.length;Y=Math.sqrt(pe),z=W}else W=Q.reduce((ae,$)=>ae+$,0)/Q.length;V.push([U,W])}this.lastFrame+=this.frameCount,this.frameCount=0;const H=Object.fromEntries(V);this.lastStageBreakdownMs={cull:H.Culling??0,preprocess:H.Preprocess??0,sort:H.Sort??0,render:H.Render??0,total:H.Total??0};const q=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([ce,U])=>`${ce}: ${U.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${Y.toFixed(3)}ms
Total AVG: ${z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ce=`Stage,ms
`,U=V.map(([ae,$])=>`${ae},${$.toFixed(3)}`).join(`
`),Q="data:text/csv;charset=utf-8,"+encodeURIComponent(ce+U),W=document.createElement("a");W.href=Q,W.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(W),W.click(),W.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ic,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),h=l?l.width:1,P=l?l.height:1;sc({width:h,height:P,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),di(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:dn(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:dn(this.pc.num_points*lc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const h=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,P=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${P}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function _c(i,l){return 2*Math.atan(l/(2*i))}function mc(i,l,h,P){const w=Math.tan(P/2),k=Math.tan(h/2),M=w*i,R=-M,T=k*i,D=-T,V=ct.create();return V[0]=2*i/(T-D),V[5]=-2*i/(M-R),V[2]=(T+D)/(T-D),V[6]=(M+R)/(M-R),V[14]=1,V[10]=l/(l-i),V[11]=-(l*i)/(l-i),ct.transpose(V,V),V}async function bc(i){_t(`loading scene camera file... : ${i}`);const h=await(await fetch(i)).json();return _t(`loaded cameras count: ${h.length}`),h.map(P=>{const w=L.clone(P.position),k=Pt.create(...P.rotation.flat()),M=k[0],R=k[4],T=k[8],D=k[1],V=k[5],G=k[9],Y=k[2],z=k[6],H=k[10];M*(V*H-G*z)-R*(D*H-G*Y)+T*(D*z-V*Y)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const q=ct.fromMat3(k);return{position:w,rotation:q,img_name:P.img_name,id:P.id}})}const vc=4*2,gc=4*16,pi=4*gc+2*vc;function wc(i){return i.createBuffer({label:"camera uniform",size:pi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Zt=new Float32Array(pi/Float32Array.BYTES_PER_ELEMENT),jn=class jn{constructor(l,h){X(this,"uniform_buffer");X(this,"position",L.create());X(this,"rotation",ct.create());X(this,"fovY",45/180*Math.PI);X(this,"fovX");X(this,"focal",$r.create());X(this,"viewport",$r.create());X(this,"view_matrix",ct.identity());X(this,"view_inv_matrix",ct.identity());X(this,"proj_matrix",ct.identity());X(this,"proj_inv_matrix",ct.identity());X(this,"_negPos",L.create());X(this,"look",L.create(0,0,1));X(this,"up",L.create(0,1,0));X(this,"right",L.create(1,0,0));this.canvas=l,this.device=h,this.uniform_buffer=wc(h),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=_c(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=mc(.01,100,this.fovX,this.fovY),ct.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ct.copy(this.rotation,this.view_matrix),ct.translate(this.view_matrix,this._negPos,this.view_matrix),ct.inverse(this.view_matrix,this.view_inv_matrix),L.transformMat4Upper3x3(jn.Z_AXIS,this.view_inv_matrix,this.look),L.normalize(this.look,this.look),L.cross(this.up,this.look,this.right),L.normalize(this.right,this.right);let l=0;Zt.set(this.view_matrix,l),l+=16,Zt.set(this.view_inv_matrix,l),l+=16,Zt.set(this.proj_matrix,l),l+=16,Zt.set(this.proj_inv_matrix,l),l+=16,Zt.set(this.viewport,l),l+=2,Zt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Zt)}set_preset(l){L.copy(l.position,this.position),ct.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};X(jn,"Z_AXIS",L.create(0,0,1));let Bs=jn;const xc=L.create(1,0,0),yc=L.create(0,1,0);function Pc(i,l){const h=i[0],P=i[4],w=i[8],k=i[1],M=i[5],R=i[9],T=i[2],D=i[6],V=i[10],G=h+M+V;let Y,z,H,Z;if(G>0){const q=.5/Math.sqrt(G+1);Y=.25/q,z=(D-R)*q,H=(w-T)*q,Z=(k-P)*q}else if(h>M&&h>V){const q=2*Math.sqrt(1+h-M-V);Y=(D-R)/q,z=.25*q,H=(P+k)/q,Z=(w+T)/q}else if(M>V){const q=2*Math.sqrt(1+M-h-V);Y=(w-T)/q,z=(P+k)/q,H=.25*q,Z=(R+D)/q}else{const q=2*Math.sqrt(1+V-h-M);Y=(k-P)/q,z=(w+T)/q,H=(R+D)/q,Z=.25*q}return l[0]=z,l[1]=H,l[2]=Z,l[3]=Y,l}class Sc{constructor(l){X(this,"element");X(this,"enabled",!0);X(this,"center",L.create(0,0,0));X(this,"up",L.create(0,1,0));X(this,"rotation",[0,0]);X(this,"shift",[0,0]);X(this,"scroll",0);X(this,"speed",.1);X(this,"sensitivity",.08);X(this,"leftPressed",!1);X(this,"rightPressed",!1);X(this,"leftDragPans",!1);X(this,"lastX",0);X(this,"lastY",0);X(this,"touches",new Map);X(this,"lastTouchCenter",null);X(this,"lastPinchDistance",null);X(this,"lastTwoFingerAngle",null);X(this,"lastTouchCount",0);X(this,"roll",0);X(this,"_dir",L.create());X(this,"_right",L.create());X(this,"_upCam",L.create());X(this,"_scratch",L.create());X(this,"_qY",dt.create());X(this,"_qX",dt.create());X(this,"_qRot",dt.create());X(this,"_qLocal",dt.create());X(this,"_qWorldToCam",dt.create());X(this,"_scratchMat3",Pt.create());X(this,"bboxMin",null);X(this,"bboxMax",null);X(this,"anchor",L.create(0,0,0));X(this,"downCallback",l=>{var h,P,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(P=(h=l.target)==null?void 0:h.setPointerCapture)==null||P.call(h,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});X(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const h=l.pageX-this.lastX,P=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=P):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=P)});X(this,"upCallback",l=>{var h,P,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(P=(h=l.target)==null?void 0:h.releasePointerCapture)==null||P.call(h,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});X(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let h=l.deltaY;l.deltaMode===1?h*=16:l.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(l){L.copy(l,this.center),L.copy(l,this.anchor)}setOrbitPivot(l){L.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const h=this.camera.rotation;L.set(h[2],h[6],h[10],this._dir),L.normalize(this._dir,this._dir),L.scale(this._dir,l,this._dir),L.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(L.subtract(this.center,l.position,this._scratch),L.length(this._scratch)<1e-6)return;L.normalize(this._scratch,this._scratch),L.cross(this.up,this._scratch,this._right),L.length(this._right)<1e-6&&L.set(1,0,0,this._right),L.normalize(this._right,this._right),L.cross(this._scratch,this._right,this._upCam),L.normalize(this._upCam,this._upCam);const h=l.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,l.update_buffer()}setBbox(l,h){this.bboxMin=L.create(l[0],l[1],l[2]),this.bboxMax=L.create(h[0],h[1],h[2]);const P=(l[0]+h[0])*.5,w=(l[1]+h[1])*.5,k=(l[2]+h[2])*.5;L.set(P,w,k,this.center),L.set(P,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;L.set(l[2],l[6],l[10],this._dir),L.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let P=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const R=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],D=this.bboxMax[M]-this.camera.position[M];if(Math.abs(R)>1e-8){const V=T/R,G=D/R;P=Math.max(P,Math.min(V,G)),w=Math.min(w,Math.max(V,G))}else if(T>0||D<0){k=!0;break}}!k&&P<=w&&w>0&&(h=(Math.max(P,0)+w)*.5)}if(h===null||!isFinite(h)||h<.001){L.subtract(this.anchor,this.camera.position,this._scratch);const P=L.dot(this._scratch,this._dir);h=P>.001?P:L.length(this._scratch)}h=Math.max(.1,h),L.scale(this._dir,h,this._dir),L.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const P=h.x-this.lastTouchCenter[0],w=h.y-this.lastTouchCenter[1];this.rotation[0]+=P*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[h.x,h.y]}else if(l===2){const h=Array.from(this.touches.values()),P=(h[0].x+h[1].x)*.5,w=(h[0].y+h[1].y)*.5,k=h[1].x-h[0].x,M=h[1].y-h[0].y,R=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const D=P-this.lastTouchCenter[0],V=w-this.lastTouchCenter[1],G=Math.hypot(D,V),Y=Math.abs(R-this.lastPinchDistance);let z=T-this.lastTwoFingerAngle;z>Math.PI&&(z-=2*Math.PI),z<-Math.PI&&(z+=2*Math.PI),G>.5&&(this.shift[1]-=D,this.shift[0]+=V),Y>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(R/this.lastPinchDistance)*10),Math.abs(z)>.0087&&(this.roll+=-z)}this.lastTouchCenter=[P,w],this.lastPinchDistance=R,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const Z=h.rotation;this.up[0]=Z[1],this.up[1]=Z[5],this.up[2]=Z[9],L.length(this.up)>1e-6?L.normalize(this.up,this.up):L.set(0,1,0,this.up)}let P=!1;if(Math.abs(this.roll)>1e-4){const Z=h.rotation;L.set(Z[2],Z[6],Z[10],this._scratch),L.normalize(this._scratch,this._scratch),dt.fromAxisAngle(this._scratch,this.roll,this._qRot),L.transformQuat(this.up,this._qRot,this.up),L.normalize(this.up,this.up),this.roll=0,P=!0}L.subtract(h.position,this.center,this._dir);let w=L.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);L.scale(this._dir,k/w,this._dir),w=k;const M=h.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],L.normalize(this._right,this._right),L.length(this._right)<1e-6&&L.set(1,0,0,this._right);const R=L.create(M[1],M[5],M[9]);L.normalize(R,R),L.length(R)<1e-6&&L.set(0,1,0,R);const T=l*this.speed*.1*w,D=this.shift[1]*T,V=-this.shift[0]*T;L.scale(this._right,D,this._scratch),L.add(this.center,this._scratch,this.center),L.add(h.position,this._scratch,h.position),L.scale(R,V,this._scratch),L.add(this.center,this._scratch,this.center),L.add(h.position,this._scratch,h.position);const G=this.rotation[0]*l*this.sensitivity,Y=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Y)>1e-5||P){const Z=h.rotation;Pc(Z,this._qWorldToCam),dt.fromAxisAngle(xc,-Y,this._qX),dt.fromAxisAngle(yc,-G,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),Pt.fromQuat(this._qWorldToCam,this._scratchMat3),ct.fromMat3(this._scratchMat3,h.rotation);const q=h.rotation,ce=q[2],U=q[6],Q=q[10];h.position[0]=this.center[0]-ce*w,h.position[1]=this.center[1]-U*w,h.position[2]=this.center[2]-Q*w,this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],L.normalize(this.up,this.up)}else L.add(this.center,this._dir,h.position);h.update_buffer();const H=Math.pow(.8,l*60);this.rotation[0]*=H,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=H,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=H,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=H,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=H,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function hi(i){const l=L.create();for(const h of i)L.add(l,h,l);return L.scale(l,1/Math.max(i.length,1),l)}function fi(i,l){const h=Pt.create();Pt.inverse(i,h);const P=L.create();return P[0]=h[0]*l[0]+h[4]*l[1]+h[8]*l[2],P[1]=h[1]*l[0]+h[5]*l[1]+h[9]*l[2],P[2]=h[2]*l[0]+h[6]*l[1]+h[10]*l[2],P}function Cc(i){const l=i.slice(),h=[1,0,0,0,1,0,0,0,1],P=(T,D)=>l[T*3+D],w=(T,D,V)=>{l[T*3+D]=V},k=(T,D)=>h[T*3+D],M=(T,D,V)=>{h[T*3+D]=V};for(let T=0;T<30;T++){let D=0,V=1,G=Math.abs(P(0,1));if(Math.abs(P(0,2))>G&&(D=0,V=2,G=Math.abs(P(0,2))),Math.abs(P(1,2))>G&&(D=1,V=2,G=Math.abs(P(1,2))),G<1e-12)break;const Y=P(D,D),z=P(V,V),H=P(D,V);let Z;Math.abs(Y-z)<1e-30?Z=Math.PI/4*Math.sign(H):Z=.5*Math.atan2(2*H,Y-z);const q=Math.cos(Z),ce=Math.sin(Z);for(let U=0;U<3;U++){const Q=P(U,D),W=P(U,V);w(U,D,q*Q+ce*W),w(U,V,-ce*Q+q*W)}for(let U=0;U<3;U++){const Q=P(D,U),W=P(V,U);w(D,U,q*Q+ce*W),w(V,U,-ce*Q+q*W)}for(let U=0;U<3;U++){const Q=k(U,D),W=k(U,V);M(U,D,q*Q+ce*W),M(U,V,-ce*Q+q*W)}}const R=[];for(let T=0;T<3;T++)R.push({val:P(T,T),vec:L.create(k(0,T),k(1,T),k(2,T))});return R.sort((T,D)=>D.val-T.val),{vals:[R[0].val,R[1].val,R[2].val],vecs:[R[0].vec,R[1].vec,R[2].vec]}}function Ec(i,l){const h=hi(i);let P=0,w=0,k=0,M=0,R=0,T=0;for(const H of i){const Z=H[0]-h[0],q=H[1]-h[1],ce=H[2]-h[2];P+=Z*Z,w+=Z*q,k+=Z*ce,M+=q*q,R+=q*ce,T+=ce*ce}const D=[P,w,k,w,M,R,k,R,T],{vecs:V}=Cc(D);let G=V[0],Y=V[1],z=V[2];return L.dot(z,l)<0&&(L.scale(z,-1,z),L.scale(Y,-1,Y)),{centroid:h,normal:z,u:G,v:Y}}function kc(i){let l=0,h=0,P=0,w=0,k=0,M=0,R=0,T=0,D=0;for(const[q,ce]of i){const U=-2*q,Q=-2*ce,W=1,ae=-(q*q+ce*ce);l+=U*U,h+=U*Q,P+=U*W,w+=Q*Q,k+=Q*W,M+=W*W,R+=U*ae,T+=Q*ae,D+=W*ae}const V=Pt.create(l,h,P,h,w,k,P,k,M),G=fi(V,L.create(R,T,D)),Y=G[0],z=G[1],H=G[2],Z=Y*Y+z*z-H;return{center:[Y,z],radius:Math.sqrt(Math.max(Z,1e-12))}}function Mc(i,l){let h=0,P=0,w=0,k=0,M=0,R=0,T=0,D=0,V=0;for(let Y=0;Y<i.length;Y++){const z=i[Y],H=L.normalize(l[Y],L.create()),Z=1-H[0]*H[0],q=-H[0]*H[1],ce=-H[0]*H[2],U=1-H[1]*H[1],Q=-H[1]*H[2],W=1-H[2]*H[2];h+=Z,P+=q,w+=ce,k+=U,M+=Q,R+=W,T+=Z*z[0]+q*z[1]+ce*z[2],D+=q*z[0]+U*z[1]+Q*z[2],V+=ce*z[0]+Q*z[1]+W*z[2]}const G=Pt.create(h,P,w,P,k,M,w,M,R);return fi(G,L.create(T,D,V))}function _i(i,l={}){if(i.length===0)return null;const h=l.tiltDownDeg??8,P=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,M=i.map(J=>L.clone(J.position)),R=i.map(J=>{const ue=J.rotation;return L.create(ue[8],ue[9],ue[10])}),T=i.map(J=>{const ue=J.rotation;return L.create(ue[4],ue[5],ue[6])}),D=hi(T),V=L.normalize(L.scale(D,-1,L.create())),{centroid:G,normal:Y,u:z,v:H}=Ec(M,V),Z=M.map(J=>{const ue=L.sub(J,G,L.create());return[L.dot(ue,z),L.dot(ue,H)]}),{center:q,radius:ce}=kc(Z),U=ce*P,Q=L.add(G,L.add(L.scale(z,q[0],L.create()),L.scale(H,q[1],L.create()),L.create()),L.create()),W=Mc(M,R),ae=U*Math.tan(h*Math.PI/180),$=L.sub(W,L.scale(Y,ae,L.create()),L.create());let pe=0;if(w){const J=L.sub(M[0],Q,L.create());pe=Math.atan2(L.dot(J,H),L.dot(J,z))/(2*Math.PI)%1,pe<0&&(pe+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${U.toFixed(2)}, tilt=${h}°, normal=[${Y[0].toFixed(2)}, ${Y[1].toFixed(2)}, ${Y[2].toFixed(2)}], startPhase=${pe.toFixed(3)}`),{center:Q,radius:U,normal:Y,u:z,v:H,lookAt:$,startPhase:pe,direction:k}}function mi(i,l){const h=(i.startPhase+l*i.direction)*2*Math.PI,P=Math.cos(h),w=Math.sin(h),k=L.add(i.center,L.add(L.scale(i.u,i.radius*P,L.create()),L.scale(i.v,i.radius*w,L.create()),L.create()),L.create()),M=L.normalize(L.sub(i.lookAt,k,L.create())),R=L.cross(M,i.normal,L.create());L.length(R)<1e-6&&L.copy(i.u,R),L.normalize(R,R);const T=L.cross(M,R,L.create());L.normalize(T,T);const D=ct.create();return D[0]=R[0],D[1]=T[0],D[2]=M[0],D[3]=0,D[4]=R[1],D[5]=T[1],D[6]=M[1],D[7]=0,D[8]=R[2],D[9]=T[2],D[10]=M[2],D[11]=0,D[12]=0,D[13]=0,D[14]=0,D[15]=1,{position:k,rotation:D,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Bc(i,l={}){const h=_i(i,l);if(!h)return[];const P=l.numViews??120;return Array.from({length:P},(w,k)=>({...mi(h,k/P),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Tc(i){const l=new Uint8Array(i),h=Math.min(l.byteLength,65536),P=new TextDecoder("ascii").decode(l.subarray(0,h)),w=P.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=P.slice(0,w).split(/\r?\n/).map(ne=>ne.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const R=M.find(ne=>ne.startsWith("format"));if(!R||!R.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${R??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},D=[];let V=null;for(const ne of M)if(ne.startsWith("element ")){const[,he,re]=ne.split(/\s+/);V={name:he,count:parseInt(re,10),props:[],bytesPerRecord:0,hasList:!1},D.push(V)}else if(ne.startsWith("property ")&&V){const he=ne.split(/\s+/);if(he[1]==="list"){const re=he[2],oe=he[3],me=he[4];V.props.push({name:me,type:oe,isList:!0,listCountType:re,listItemType:oe}),V.hasList=!0}else{const re=he[1],oe=he[2];if(V.props.push({name:oe,type:re,isList:!1}),T[re]===void 0)throw new Error(`mesh PLY: unsupported prop type '${re}'`);V.bytesPerRecord+=T[re]}}const G=D.find(ne=>ne.name==="vertex"),Y=D.find(ne=>ne.name==="face"||ne.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!Y)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const z=G.props.find(ne=>ne.name==="x"),H=G.props.find(ne=>ne.name==="y"),Z=G.props.find(ne=>ne.name==="z");if(!z||!H||!Z)throw new Error("mesh PLY: vertex must have x/y/z");let q=0;const ce=new Map;for(const ne of G.props)ce.set(ne.name,{off:q,type:ne.type}),q+=T[ne.type];const U=ce.get("x"),Q=ce.get("y"),W=ce.get("z");if(U.type!==Q.type||U.type!==W.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${U.type}/${Q.type}/${W.type})`);const ae=U.type,$=ae==="double"||ae==="float64";if(!$&&ae!=="float"&&ae!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ae}')`);const pe=new Float32Array(G.count*3),J=new DataView(i),ue=k,we=G.bytesPerRecord;for(let ne=0;ne<G.count;ne++){const he=ue+ne*we;$?(pe[ne*3+0]=J.getFloat64(he+U.off,!0),pe[ne*3+1]=J.getFloat64(he+Q.off,!0),pe[ne*3+2]=J.getFloat64(he+W.off,!0)):(pe[ne*3+0]=J.getFloat32(he+U.off,!0),pe[ne*3+1]=J.getFloat32(he+Q.off,!0),pe[ne*3+2]=J.getFloat32(he+W.off,!0))}const Ge=ue+G.count*we,Be=Y.props.find(ne=>ne.isList);if(!Be)throw new Error("mesh PLY: face element has no list property");const ze=T[Be.listCountType],De=T[Be.listItemType];if(ze!==1)throw new Error(`mesh PLY: unsupported face list count size ${ze}`);let ye=Ge,Me=0;for(let ne=0;ne<Y.count;ne++){const he=J.getUint8(ye);he===3&&Me++,ye+=1+he*De}const O=new Uint32Array(Me*3);ye=Ge;let K=0;for(let ne=0;ne<Y.count;ne++){const he=J.getUint8(ye);if(ye+=1,he===3)for(let re=0;re<3;re++){const oe=ye+re*De;let me;if(De===4)me=J.getUint32(oe,!0);else if(De===2)me=J.getUint16(oe,!0);else if(De===1)me=J.getUint8(oe);else throw new Error(`mesh PLY: unsupported face index size ${De}`);O[K++]=me}ye+=he*De}return{positions:pe,indices:O}}function Dc(i){const l=new DataView(i);if(i.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const h=l.getUint32(0,!0),P=l.getUint32(4,!0),w=h*12,k=P*4;if(i.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${i.byteLength} B)`);const M=new Float32Array(i.slice(8,8+w)),R=new Uint32Array(i.slice(8+w,8+w+k));return{positions:M,indices:R}}function bi(i,l){return(l??"").toLowerCase().endsWith(".ply")?Tc(i):Dc(i)}function Ac(i,l){const h=i.length/3,P=new Float32Array(h*3);for(let w=0;w<l.length;w+=3){const k=l[w]*3,M=l[w+1]*3,R=l[w+2]*3,T=i[k],D=i[k+1],V=i[k+2],G=i[M],Y=i[M+1],z=i[M+2],H=i[R],Z=i[R+1],q=i[R+2],ce=G-T,U=Y-D,Q=z-V,W=H-T,ae=Z-D,$=q-V,pe=U*$-Q*ae,J=Q*W-ce*$,ue=ce*ae-U*W;P[k]+=pe,P[k+1]+=J,P[k+2]+=ue,P[M]+=pe,P[M+1]+=J,P[M+2]+=ue,P[R]+=pe,P[R+1]+=J,P[R+2]+=ue}for(let w=0;w<h;w++){const k=w*3,M=P[k],R=P[k+1],T=P[k+2],D=Math.sqrt(M*M+R*R+T*T);if(D>1e-12){const V=1/D;P[k]=M*V,P[k+1]=R*V,P[k+2]=T*V}}return P}function vi(i,l){const h=i.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(h,0,l.positions);const P=Ac(l.positions,l.indices),w=i.createBuffer({label:"mesh-cull normal buffer",size:P.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(w,0,P);const k=i.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return i.queue.writeBuffer(k,0,l.indices),{vertexBuffer:h,normalBuffer:w,indexBuffer:k,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function Ic(i,l){try{const h=await fetch(l);if(!h.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${h.status}`),null;const P=await h.arrayBuffer(),w=bi(P,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),vi(i,w)}catch(h){return console.warn(`[mesh-cull] load error for ${l}:`,h),null}}function Lc(i,l,h){try{const P=bi(l,h);return console.log(`[mesh-cull] loaded from bundle: ${P.positions.length/3} verts, ${P.indices.length/3} tris`),vi(i,P)}catch(P){return console.warn("[mesh-cull] parse error:",P),null}}const gi="BITYMI01",zc=0,Uc=1,Gc=2,Rc=3,Vc=4,Oc=5,Fc=6;function $n(i){const l=(i&32768)>>15,h=(i&31744)>>10,P=i&1023;return h===0?(l?-1:1)*Math.pow(2,-14)*(P/1024):h===31?P?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,h-15)*(1+P/1024)}function ti(i,l,h,P,w,k){const M=(i-h.width*.5)/P.focal[0],R=-((l-h.height*.5)/P.focal[1]),T=P.rotation,D=T[0],V=T[4],G=T[8],Y=T[1],z=T[5],H=T[9],Z=T[2],q=T[6],ce=T[10];let U=M*D+R*Y+Z,Q=M*V+R*z+q,W=M*G+R*H+ce;const ae=Math.hypot(U,Q,W)||1;U/=ae,Q/=ae,W/=ae;const $=P.position[0],pe=P.position[1],J=P.position[2],ue=k*.005,we=ue*ue,Ge=new Uint32Array(w.buffer,w.byteOffset,w.length),Be=w.length/8;let ze=1/0,De=0,ye=0,Me=0,O=-1;for(let K=0;K<Be;K++){const ne=K*8,he=w[ne+0]-$,re=w[ne+1]-pe,oe=w[ne+2]-J,me=he*U+re*Q+oe*W;if(me<=0)continue;const ve=he-me*U,xe=re-me*Q,Oe=oe-me*W;if(ve*ve+xe*xe+Oe*Oe>=we||!(Ge[ne+7]>>>16&1))continue;const b=Ge[ne+5],o=Ge[ne+6],f=$n(b&65535),d=$n(b>>>16&65535),g=$n(o&65535),y=$n(o>>>16&65535),C=Math.hypot(f,d,g,y)||1,E=f/C,r=d/C,m=g/C,u=y/C,p=2*(r*u+E*m),a=2*(m*u-E*r),_=1-2*(r*r+m*m),x=U*p+Q*a+W*_;let v;Math.abs(x)>1e-6?(v=(he*p+re*a+oe*_)/x,(!isFinite(v)||v<=0)&&(v=me)):v=me,v<ze&&(ze=v,De=$+v*U,ye=pe+v*Q,Me=J+v*W,O=K)}return O<0?null:[De,ye,Me]}function wi(i){const l=new Uint8Array(i),h=new TextDecoder().decode(l.subarray(0,8));if(h!==gi)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const P=new DataView(i),w=P.getUint32(8,!0),k=12,M=20;let R=null,T=null,D=null,V=null;for(let G=0;G<w;G++){const Y=k+G*M,z=P.getUint32(Y+0,!0),H=Number(P.getBigUint64(Y+4,!0)),Z=Number(P.getBigUint64(Y+12,!0)),q=l.slice(H,H+Z).buffer;z===zc||z===Uc||z===Oc?R=q:z===Gc?T=q:z===Rc||z===Vc?D=q:z===Fc&&(V=q)}if(R===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:R,camerasBuffer:T,atlasBuffer:D,meshBuffer:V}}async function Nc(i,l){var M;const h=await fetch(i);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const P=(()=>{const R=h.headers.get("content-length");return R&&parseInt(R,10)||void 0})(),w=(M=h.body)==null?void 0:M.getReader();let k;if(!w)k=await h.arrayBuffer(),l&&l(k.byteLength,P,0);else{const R=[];let T=0,D=performance.now(),V=0;for(;;){const{done:z,value:H}=await w.read();if(z)break;R.push(H),T+=H.byteLength;const Z=performance.now();if(Z-D>=150&&l){const q=(T-V)/((Z-D)/1e3);l(T,P,q),D=Z,V=T}}const G=new Uint8Array(T);let Y=0;for(const z of R)G.set(z,Y),Y+=z.byteLength;k=G.buffer,l&&l(T,P,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===gi?{bundle:wi(k),rawPly:null}:{bundle:null,rawPly:k}}function qc(i){return new Promise(l=>{const h=document.createElement("input");h.type="file",h.accept=i,h.style.display="none",h.onchange=()=>{var P;return l(((P=h.files)==null?void 0:P[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function $c(i,l,h){const P=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const V=await qc(".ply,.bitymi");if(V)if(P&&(P.style.display="none"),V.name.toLowerCase().endsWith(".bitymi")){const G=await V.arrayBuffer(),{pcBuffer:Y}=wi(G),z=new File([Y],V.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),H=await Ss(z,i);l(H)}else{const G=await Ss(V,i);l(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),R=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),D=M.get("mesh_url");R&&(P&&(P.style.display="none"),h(R,T,D))}async function Wc(i,l,h,P){const w=new Bs(i,h),k=new Sc(w);let M=!1;i.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const R="rgba8unorm";l.configure({device:h,format:R,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const D=()=>{w.on_update_canvas(),T!==null&&qn(i.width,i.height,h,T.render_settings_buffer)};new ResizeObserver(()=>{const re=Math.max(.25,O.render_scale),oe=Math.max(1,Math.ceil(re*i.clientWidth)),me=Math.max(1,Math.ceil(re*i.clientHeight));i.width===oe&&i.height===me||(i.width=oe,i.height=me,D())}).observe(i);let G=0,Y=0;const z=()=>{(i.width!==G||i.height!==Y)&&(G=i.width,Y=i.height,D())},H=new URLSearchParams(window.location.search);let q=H.get("animation")==="1";k.enabled=!q;const ce=H.get("camera_url"),U=H.get("mesh_cull"),Q=U==="1"||U==="true",W=H.get("mesh_normal_margin")??H.get("mesh_margin"),ae=W!==null?Number(W):NaN,$=Number.isFinite(ae)?ae:0,pe=H.get("mesh_debug"),J=pe==="1"||pe==="true",ue=H.get("mesh_sample_mode"),we=ue!==null?parseInt(ue,10):NaN,Ge=Number.isFinite(we)&&we>=0&&we<=7?we:1,Be=H.get("mesh_silhouette"),ze=Be==="1"||Be==="true",De=H.get("mesh_invert_depth"),ye=De==="1"||De==="true",Me=Math.max(1,window.devicePixelRatio||1),O={gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:Q,mesh_margin:$,mesh_debug:J,mesh_sample_mode:Ge,mesh_silhouette:ze,mesh_invert_depth:ye,render_scale:1},K=new Wl.Pane({title:"Config",expanded:!0});K.addInput(O,"animate",{label:"Animate"}).on("change",re=>{const oe=q;q=re.value,k.enabled=!re.value,!oe&&q&&ne.value&&ne.value.onAnimateStart(),oe&&!q&&ne.value&&ne.value.onAnimateStop()}),K.addInput(O,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ne={value:null};$c(h,re=>he(re,[],null,null),async(re,oe,me)=>{let ve=oe??ce,xe,Oe=null,B=null;const F=re.toLowerCase();if(F.endsWith(".bitymi")||F.includes(".bitymi?")){Ds("downloading bundle ...");try{const{bundle:o}=await Nc(re,(d,g,y)=>{const C=d/1048576,E=g?g/(1024*1024):void 0,r=y/(1024*1024),m=g?Math.min(99,Math.floor(d/g*100)):void 0,u=E?`total ${E.toFixed(1)} MB`:"total -- MB",p=E&&m!==void 0?`${C.toFixed(1)} MB downloaded (${m}%)`:`${C.toFixed(1)} MB downloaded`,a=`${r.toFixed(2)} MB/s`;It(`downloading bundle ...
${u}, ${p}
${a}`)});if(!o)throw new Error("Expected a .bitymi bundle");It("parsing PLY ...");const f=new File([o.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(xe=await Ss(f,h),!ve&&o.camerasBuffer&&(ve=URL.createObjectURL(new Blob([o.camerasBuffer],{type:"application/json"}))),o.atlasBuffer){const d=o.atlasBuffer.byteLength/1048576;It(`uploading atlas ...
${d.toFixed(1)} MB BC7`);try{const g=Rl(o.atlasBuffer);Oe=Nl(h,g,!0)}catch(g){console.warn("[atlas] failed to parse/upload atlas:",g)}}o.meshBuffer&&!me&&(It("uploading mesh ..."),B=Lc(h,o.meshBuffer,"bundle.mesh"))}catch(o){throw En(),o}}else xe=await ql(re,h);me&&(It("loading mesh ..."),B=await Ic(h,me));const b=ve?await bc(ve):[];b.length>0&&w.set_preset(b[0]),he(xe,b,Oe,B)});function he(re,oe=[],me=null,ve=null){const xe=[(re.bbox.min[0]+re.bbox.max[0])/2,(re.bbox.min[1]+re.bbox.max[1])/2,(re.bbox.min[2]+re.bbox.max[2])/2];k.setBbox(re.bbox.min,re.bbox.max);const Oe=.5*Math.sqrt((re.bbox.max[0]-re.bbox.min[0])**2+(re.bbox.max[1]-re.bbox.min[1])**2+(re.bbox.max[2]-re.bbox.min[2])**2);function B(ie,_e){const de=ti(ie,_e,i,w,re.surfel_data,Oe);de&&(k.setOrbitPivot(de),console.log(`[pick] orbit pivot → (${de[0].toFixed(3)}, ${de[1].toFixed(3)}, ${de[2].toFixed(3)})`))}function F(){const ie=i.width*.5,_e=i.height*.5,de=ti(ie,_e,i,w,re.surfel_data,Oe);if(!de)return;const Ue=w.rotation,Ve=Ue[2],Ee=Ue[6],Ie=Ue[10],Ce=de[0]-w.position[0],Ye=de[1]-w.position[1],ot=de[2]-w.position[2],ft=Ce*Ve+Ye*Ee+ot*Ie;ft>0&&k.setOrbitDepth(ft)}if(oe.length===0){const ie=re.bbox.max[0]-re.bbox.min[0],_e=re.bbox.max[1]-re.bbox.min[1],de=re.bbox.max[2]-re.bbox.min[2],Ve=.5*Math.sqrt(ie*ie+_e*_e+de*de)*.5;L.set(xe[0]-Ve,xe[1]-Ve,xe[2]-Ve,w.position);const Ee=L.create(Ve,Ve,Ve);L.normalize(Ee,Ee);const Ie=L.create(0,1,0),Ce=L.create();L.cross(Ie,Ee,Ce),L.normalize(Ce,Ce);const Ye=L.create();L.cross(Ee,Ce,Ye);const ot=Pt.create(Ce[0],Ye[0],Ee[0],Ce[1],Ye[1],Ee[1],Ce[2],Ye[2],Ee[2]);ct.fromMat3(ot,w.rotation),w.update_buffer()}k.setCenter(L.create(re.centroid[0],re.centroid[1],re.centroid[2]));const b=new fc(re,h,R,w.uniform_buffer,P,me,ve);T=b,qn(i.width,i.height,h,b.render_settings_buffer),O.atlas_enabled=me!==null,ve===null&&(O.mesh_cull=!1),b.setMeshCullEnabled(O.mesh_cull),b.setMeshMargin(O.mesh_margin),ve===null&&(O.mesh_debug=!1),b.setMeshOverlayEnabled(O.mesh_debug),un({meshSampleMode:O.mesh_sample_mode,meshSilhouetteCull:O.mesh_silhouette,meshInvertDepth:O.mesh_invert_depth},h,b.render_settings_buffer),console.log(`[mesh-cull] ${ve!==null?"mesh loaded":"no mesh"} · toggle=${O.mesh_cull} · margin=${O.mesh_margin}m · debug=${O.mesh_debug} · sample_mode=${O.mesh_sample_mode} · silhouette=${O.mesh_silhouette} · invert=${O.mesh_invert_depth}`);let o=!1;const f=(()=>{if(me!==null)return`${me.meta.format===2?"BC7":me.meta.format===3?"ASTC 4×4":me.meta.format===5?"RVQ-paired (typeA)":me.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":me.meta.format===7?"BC7 codebook gather (typeD)":`format=${me.meta.format}`} ${me.meta.width}×${me.meta.height}, ${me.meta.n_layers} layers`;const ie=h.features.has("texture-compression-bc"),_e=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(ie?["BC7"]:[]).concat(_e?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",f),Qr(re.sh_bias,h,b.render_settings_buffer),Xr(O.gaussian_scaling,h,b.render_settings_buffer),O.sh_bias=re.sh_bias;const d=re.num_points.toLocaleString(),g={stats:`${d} surfels · -- fps`};K.addMonitor(g,"stats",{label:"Stats",interval:200}),K.addMonitor({atlas:f},"atlas",{label:"Atlas"});const y={stages:"— ms · awaiting timestamp data"};K.addMonitor(y,"stages",{label:"Stages",interval:500});let C=null;if(b.timeQueryEnabled){C=document.createElement("canvas"),C.width=280,C.height=24,C.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(C);const ie=de=>{const Ue=C.getContext("2d");if(!Ue)return;const Ve=C.width,Ee=C.height;if(Ue.clearRect(0,0,Ve,Ee),!de||de.total<=0){Ue.fillStyle="#888",Ue.font="11px ui-monospace,Menlo,monospace",Ue.fillText("awaiting GPU timestamps…",8,16);return}const Ie=[{label:"cull",ms:de.cull,color:"#3aa3ff"},{label:"pre",ms:de.preprocess,color:"#3ad27a"},{label:"sort",ms:de.sort,color:"#ffa53a"},{label:"render",ms:de.render,color:"#ff5566"}],Ce=Math.max(.001,Ie.reduce((ot,ft)=>ot+ft.ms,0));let Ye=0;Ue.font="10px ui-monospace,Menlo,monospace",Ue.textBaseline="middle";for(const ot of Ie){const ft=ot.ms/Ce*Ve;Ue.fillStyle=ot.color,Ue.fillRect(Ye,0,ft,Ee),ft>=38&&(Ue.fillStyle="#000c",Ue.fillText(`${ot.label} ${ot.ms.toFixed(1)}`,Ye+4,Ee/2)),Ye+=ft}};setInterval(()=>{o||b.readPerfMetrics({silent:!0}).then(()=>{const de=b.lastStageBreakdownMs;ie(de),de&&(y.stages=`${de.total.toFixed(1)} ms · cull ${de.cull.toFixed(1)} / pre ${de.preprocess.toFixed(1)} / sort ${de.sort.toFixed(1)} / render ${de.render.toFixed(1)}`)}).catch(de=>console.warn("[perf] readPerfMetrics failed:",de))},500)}const E=.4,r=3,m=.3;let u=null,p=0,a=0;const _=dt.create(),x=Pt.create();let v=oe.length>0?0:-1;const I={view:oe.length>0?`${v+1} / ${oe.length}: ${oe[v].img_name??v}`:"— no presets —"};K.addMonitor(I,"view",{label:"View",interval:100});function N(ie){const _e=Pt.create(ie[0],ie[1],ie[2],ie[4],ie[5],ie[6],ie[8],ie[9],ie[10]);return dt.fromMat(_e)}function j(ie,_e){u={fromPos:L.clone(w.position),toPos:L.clone(ie.position),fromQuat:dt.normalize(N(w.rotation)),toQuat:dt.normalize(N(ie.rotation)),target:ie,t:0,duration:Math.max(.01,_e)}}const le=(ie,_e=!0)=>{if(oe.length===0)return;v=(ie%oe.length+oe.length)%oe.length;const de=oe[v];_e?j(de,E):(w.set_preset(de),k.resetToCamera(),F()),I.view=`${v+1} / ${oe.length}: ${oe[v].img_name??v}`};oe.length>0&&(K.addButton({title:"◀ Prev view"}).on("click",()=>le(v-1)),K.addButton({title:"Next view ▶"}).on("click",()=>le(v+1)));const se=oe.length>0?_i(oe,{tiltDownDeg:15,alignFirst:!0}):null,te=se?Bc(oe,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let fe=0;const Pe=12;ne.value={onAnimateStart:()=>{fe=0},onAnimateStop:()=>{k.resetToCamera(),F()}},K.addInput(O,"render_scale",{label:"Render scale",min:.25,max:Me,step:.25}).on("change",ie=>{const _e=Math.max(.25,ie.value),de=Math.max(1,Math.ceil(_e*i.clientWidth)),Ue=Math.max(1,Math.ceil(_e*i.clientHeight));(i.width!==de||i.height!==Ue)&&(i.width=de,i.height=Ue,D())}),K.addInput(O,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",ie=>Xr(ie.value,h,b.render_settings_buffer)),K.addInput(O,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",ie=>Qr(ie.value,h,b.render_settings_buffer)),K.addInput(O,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",ie=>{b.bgColor=[ie.value.r,ie.value.g,ie.value.b,ie.value.a]});const be=me?me.meta.format===3?"Atlas (ASTC)":me.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";K.addInput(O,"atlas_enabled",{label:be}).on("change",ie=>b.setAtlasEnabled(ie.value)),K.addInput(O,"bfc",{label:"Backface"}).on("change",ie=>un({bfc:ie.value},h,b.render_settings_buffer));const ge=K.addInput(O,"mesh_cull",{label:"Mesh cull"});ge.on("change",ie=>b.setMeshCullEnabled(ie.value)),b.hasMesh||(ge.disabled=!0);const Ae=K.addInput(O,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});Ae.on("change",ie=>b.setMeshMargin(ie.value)),b.hasMesh||(Ae.disabled=!0);const Te=K.addInput(O,"mesh_debug",{label:"Mesh debug"});Te.on("change",ie=>b.setMeshOverlayEnabled(ie.value)),b.hasMesh||(Te.disabled=!0);const $e=K.addInput(O,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});$e.on("change",ie=>un({meshSampleMode:ie.value},h,b.render_settings_buffer)),b.hasMesh||($e.disabled=!0);const Ze=K.addInput(O,"mesh_silhouette",{label:"Silhouette cull"});Ze.on("change",ie=>un({meshSilhouetteCull:ie.value},h,b.render_settings_buffer)),b.hasMesh||(Ze.disabled=!0);const je=K.addInput(O,"mesh_invert_depth",{label:"Invert depth cull"});je.on("change",ie=>un({meshInvertDepth:ie.value},h,b.render_settings_buffer)),b.hasMesh||(je.disabled=!0),K.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(oe.length>0)w.set_preset(oe[0]);else{const ie=re.bbox.max[0]-re.bbox.min[0],_e=re.bbox.max[1]-re.bbox.min[1],de=re.bbox.max[2]-re.bbox.min[2],Ve=.5*Math.sqrt(ie*ie+_e*_e+de*de)*.5;L.set(xe[0]-Ve,xe[1]-Ve,xe[2]-Ve,w.position);const Ee=L.create(Ve,Ve,Ve);L.normalize(Ee,Ee);const Ie=L.create();L.cross(L.create(0,1,0),Ee,Ie),L.normalize(Ie,Ie);const Ce=L.create();L.cross(Ee,Ie,Ce);const Ye=Pt.create(Ie[0],Ce[0],Ee[0],Ie[1],Ce[1],Ee[1],Ie[2],Ce[2],Ee[2]);ct.fromMat3(Ye,w.rotation),w.update_buffer()}k.resetToCamera(),F()});const We={result:"— click Benchmark —"};K.addMonitor(We,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Qe={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function rt(){const _e=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const de of Object.keys(Qe))if(_e.startsWith(de))return de;return null}const Ke=document.createElement("div");Ke.id="bench-overlay",Ke.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ke);function nt(ie,_e,de){const Ue=Math.floor(_e/Math.max(1,de)*100),Ve=32,Ee=Math.floor(_e/Math.max(1,de)*Ve),Ie="█".repeat(Ee)+"░".repeat(Ve-Ee);Ke.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${ie}</div><div>[${Ie}] ${Ue}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${_e} / ${de} frames · offscreen · pipelined · no vsync</div>`,Ke.style.display="block"}function it(){Ke.style.display="none"}async function st(ie=10,_e=200){if(o)return;if(oe.length===0){We.result="no cameras to benchmark";return}o=!0;const de=q,Ue=O.animate,Ve=new Float32Array(w.position),Ee=new Float32Array(w.rotation);q=!1,O.animate=!1,K.refresh(),u=null,k.enabled=!1;const Ie=rt(),Ce=Ie?Qe[Ie]:null,Ye=(Ce==null?void 0:Ce.w)??i.width,ot=(Ce==null?void 0:Ce.h)??i.height,ft=(Ce==null?void 0:Ce.fovY)??w.getFov(),Yn=Ie?`${Ie} · ${Ye>=4e3/4+500?"images_4":"images_2"}`:"custom",kt=i.width,pn=i.height,Bn=w.getFov();i.width=Ye,i.height=ot,w.setFov(ft),qn(Ye,ot,h,b.render_settings_buffer);const Tn=h.createTexture({size:[Ye,ot,1],format:R,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Dn=Tn.createView(),Zn=()=>{const ht=h.createCommandEncoder();b.frame(ht,Dn,!1),h.queue.submit([ht.finish()])},Lt=()=>new Promise(ht=>setTimeout(ht,0)),Xn=20,An=async(ht,zt)=>{let qt=0,Ct=0;for(nt(zt,0,ht),await Lt();Ct<ht;){const en=Math.min(Xn,ht-Ct),Et=performance.now();for(let tn=0;tn<en;tn++)w.set_preset(oe[(Ct+tn)%oe.length]),Zn();await h.queue.onSubmittedWorkDone();const Qn=performance.now();qt+=Qn-Et,Ct+=en,nt(zt,Ct,ht),await Lt()}return qt};try{await An(ie,"Warming up");const zt=await An(_e,"Benchmarking")/_e,qt=1e3/zt,Ct=re.num_points??re.surfel_data.length/8,en=(ft*180/Math.PI).toFixed(1),Et=`${qt.toFixed(1)} FPS  (${zt.toFixed(2)} ms/frame)
${Ye}×${ot} · fovY ${en}° · ${Yn}
${Ct.toLocaleString()} surfels · ${ie}w+${_e}b · pipelined`;We.result=Et,console.log("[bench]",Et.replace(/\n/g,"  |  "))}catch(ht){console.error("[bench] failed:",ht),We.result=`bench failed: ${ht}`}finally{it(),Tn.destroy(),i.width=kt,i.height=pn,w.setFov(Bn),qn(kt,pn,h,b.render_settings_buffer),w.position.set(Ve),w.rotation.set(Ee),w.update_buffer(),k.enabled=!de,q=de,O.animate=Ue,K.refresh(),o=!1}}K.addButton({title:"📊 Benchmark"}).on("click",()=>st()),document.addEventListener("keydown",ie=>{const _e=ie.key;if(_e>="0"&&_e<="9"&&oe.length>0){const de=parseInt(_e);de<oe.length&&le(de)}else _e==="ArrowLeft"||_e==="PageUp"?(le(v-1),ie.preventDefault()):_e==="ArrowRight"||_e==="PageDown"?(le(v+1),ie.preventDefault()):(_e==="d"||_e==="D")&&b.debugReadSortedIndices(30).catch(de=>console.error("[DEBUG] readback failed:",de))});function Je(ie,_e){const de=i.getBoundingClientRect(),Ue=window.devicePixelRatio||1;return[(ie-de.left)*Ue,(_e-de.top)*Ue]}i.addEventListener("dblclick",ie=>{const[_e,de]=Je(ie.clientX,ie.clientY);B(_e,de)});let qe=0,et=0,He=0;i.addEventListener("pointerdown",ie=>{if(ie.pointerType!=="touch")return;const _e=performance.now(),de=_e-qe,Ue=ie.clientX-et,Ve=ie.clientY-He;if(de>0&&de<300&&Ue*Ue+Ve*Ve<40*40){const[Ee,Ie]=Je(ie.clientX,ie.clientY);B(Ee,Ie),qe=0}else qe=_e,et=ie.clientX,He=ie.clientY});function lt(){return M}let tt=performance.now(),St=60,wt=Promise.resolve(),vt=0;async function gt(){var Ve;const ie=performance.now(),_e=Math.min((ie-tt)/1e3,.1);if(tt=ie,_e>0){const Ee=((Ve=b.lastStageBreakdownMs)==null?void 0:Ve.total)??0,Ie=Ee>.5?1e3/Ee:1/_e;St=St*.9+Ie*.1,g.stats=`${d} surfels · ${Math.round(St)} fps`}if(o){requestAnimationFrame(gt);return}if(lt()&&(u||q)&&(u=null,k.resetToCamera(),F(),q&&(q=!1,O.animate=!1,K.refresh())),q&&O.animateMode==="circle"&&se){fe+=_e/Pe,fe>=1&&(fe-=1);const Ee=mi(se,fe);w.set_preset(Ee),k.update(_e);const Ie=h.createCommandEncoder();b.frame(Ie,l.getCurrentTexture().createView()),h.queue.submit([Ie.finish()]),vt++,vt===2&&En(),requestAnimationFrame(gt);return}if(u){u.t+=_e/u.duration;const Ee=Math.min(1,u.t),Ie=Ee*Ee*(3-2*Ee);L.lerp(u.fromPos,u.toPos,Ie,w.position),dt.slerp(u.fromQuat,u.toQuat,Ie,_),Pt.fromQuat(_,x),ct.fromMat3(x,w.rotation),w.update_buffer(),u.t>=1&&(w.set_preset(u.target),u=null,q?oe.length>0&&(p=m):(k.resetToCamera(),F()))}else if(q&&!lt()){const Ee=O.animateMode==="circle"&&te.length>0,Ie=Ee?te:oe;if(Ie.length!==0){if(p-=_e,p<=0){const Ye=((Ee?a:v)+1)%Ie.length;Ee?a=Ye:v=Ye;const ot=Ee?r/8:r;j(Ie[Ye],ot),Ee||(I.view=`${v+1} / ${oe.length}: ${oe[v].img_name??v}`)}}}k.update(_e),z(),await wt;const de=h.createCommandEncoder(),Ue=l.getCurrentTexture().createView();b.frame(de,Ue),h.queue.submit([de.finish()]),wt=h.queue.onSubmittedWorkDone(),vt++,vt===2&&En(),requestAnimationFrame(gt)}requestAnimationFrame(gt)}}(function(){let l="dev";for(const P of Array.from(document.querySelectorAll('script[type="module"]'))){const k=P.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const h=document.createElement("div");h.textContent="v "+l,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const i=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(i===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];i.features.has("timestamp-query")&&l.push("timestamp-query"),i.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),i.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",i.info??"(unknown)"),console.log("[adapter] features:",Array.from(i.features)),console.log("[adapter] BC7:",i.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",i.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:i.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxTextureDimension2D:i.limits.maxTextureDimension2D});const h=await i.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize}}),P=document.querySelector("#webgpu-canvas");zl(P!==null);const w=P.getContext("webgpu");Wc(P,w,h,l)})();
