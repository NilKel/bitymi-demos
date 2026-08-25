var gl=Object.defineProperty;var wl=(o,l,_)=>l in o?gl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[l]=_;var O=(o,l,_)=>(wl(o,typeof l!="symbol"?l+"":l,_),_);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))E(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const B of k.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&E(B)}).observe(document,{childList:!0,subtree:!0});function _(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function E(w){if(w.ep)return;w.ep=!0;const k=_(w);fetch(w.href,k)}})();function xl(o,l){return class extends o{constructor(..._){super(..._),l(this)}}}const yl=xl(Array,o=>o.fill(0));let Le=1e-6;function Pl(o){function l(y=0,S=0){const C=new o(2);return y!==void 0&&(C[0]=y,S!==void 0&&(C[1]=S)),C}const _=l;function E(y,S,C){const r=C??new o(2);return r[0]=y,r[1]=S,r}function w(y,S){const C=S??new o(2);return C[0]=Math.ceil(y[0]),C[1]=Math.ceil(y[1]),C}function k(y,S){const C=S??new o(2);return C[0]=Math.floor(y[0]),C[1]=Math.floor(y[1]),C}function B(y,S){const C=S??new o(2);return C[0]=Math.round(y[0]),C[1]=Math.round(y[1]),C}function L(y,S=0,C=1,r){const m=r??new o(2);return m[0]=Math.min(C,Math.max(S,y[0])),m[1]=Math.min(C,Math.max(S,y[1])),m}function D(y,S,C){const r=C??new o(2);return r[0]=y[0]+S[0],r[1]=y[1]+S[1],r}function z(y,S,C,r){const m=r??new o(2);return m[0]=y[0]+S[0]*C,m[1]=y[1]+S[1]*C,m}function F(y,S){const C=y[0],r=y[1],m=S[0],d=S[1],h=Math.sqrt(C*C+r*r),a=Math.sqrt(m*m+d*d),f=h*a,x=f&&ye(y,S)/f;return Math.acos(x)}function N(y,S,C){const r=C??new o(2);return r[0]=y[0]-S[0],r[1]=y[1]-S[1],r}const R=N;function X(y,S){return Math.abs(y[0]-S[0])<Le&&Math.abs(y[1]-S[1])<Le}function se(y,S){return y[0]===S[0]&&y[1]===S[1]}function q(y,S,C,r){const m=r??new o(2);return m[0]=y[0]+C*(S[0]-y[0]),m[1]=y[1]+C*(S[1]-y[1]),m}function Q(y,S,C,r){const m=r??new o(2);return m[0]=y[0]+C[0]*(S[0]-y[0]),m[1]=y[1]+C[1]*(S[1]-y[1]),m}function ae(y,S,C){const r=C??new o(2);return r[0]=Math.max(y[0],S[0]),r[1]=Math.max(y[1],S[1]),r}function K(y,S,C){const r=C??new o(2);return r[0]=Math.min(y[0],S[0]),r[1]=Math.min(y[1],S[1]),r}function Y(y,S,C){const r=C??new o(2);return r[0]=y[0]*S,r[1]=y[1]*S,r}const W=Y;function ce(y,S,C){const r=C??new o(2);return r[0]=y[0]/S,r[1]=y[1]/S,r}function Me(y,S){const C=S??new o(2);return C[0]=1/y[0],C[1]=1/y[1],C}const ve=Me;function ue(y,S,C){const r=C??new o(3),m=y[0]*S[1]-y[1]*S[0];return r[0]=0,r[1]=0,r[2]=m,r}function ye(y,S){return y[0]*S[0]+y[1]*S[1]}function oe(y){const S=y[0],C=y[1];return Math.sqrt(S*S+C*C)}const fe=oe;function be(y){const S=y[0],C=y[1];return S*S+C*C}const ze=be;function Ve(y,S){const C=y[0]-S[0],r=y[1]-S[1];return Math.sqrt(C*C+r*r)}const H=Ve;function J(y,S){const C=y[0]-S[0],r=y[1]-S[1];return C*C+r*r}const $=J;function Z(y,S){const C=S??new o(2),r=y[0],m=y[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(C[0]=r/d,C[1]=m/d):(C[0]=0,C[1]=0),C}function $e(y,S){const C=S??new o(2);return C[0]=-y[0],C[1]=-y[1],C}function Ee(y,S){const C=S??new o(2);return C[0]=y[0],C[1]=y[1],C}const de=Ee;function pe(y,S,C){const r=C??new o(2);return r[0]=y[0]*S[0],r[1]=y[1]*S[1],r}const De=pe;function _e(y,S,C){const r=C??new o(2);return r[0]=y[0]/S[0],r[1]=y[1]/S[1],r}const Pe=_e;function Re(y=1,S){const C=S??new o(2),r=Math.random()*2*Math.PI;return C[0]=Math.cos(r)*y,C[1]=Math.sin(r)*y,C}function M(y){const S=y??new o(2);return S[0]=0,S[1]=0,S}function G(y,S,C){const r=C??new o(2),m=y[0],d=y[1];return r[0]=m*S[0]+d*S[4]+S[12],r[1]=m*S[1]+d*S[5]+S[13],r}function g(y,S,C){const r=C??new o(2),m=y[0],d=y[1];return r[0]=S[0]*m+S[4]*d+S[8],r[1]=S[1]*m+S[5]*d+S[9],r}function i(y,S,C,r){const m=r??new o(2),d=y[0]-S[0],h=y[1]-S[1],a=Math.sin(C),f=Math.cos(C);return m[0]=d*f-h*a+S[0],m[1]=d*a+h*f+S[1],m}function p(y,S,C){const r=C??new o(2);return Z(y,r),Y(r,S,r)}function u(y,S,C){const r=C??new o(2);return oe(y)>S?p(y,S,r):Ee(y,r)}function v(y,S,C){const r=C??new o(2);return q(y,S,.5,r)}return{create:l,fromValues:_,set:E,ceil:w,floor:k,round:B,clamp:L,add:D,addScaled:z,angle:F,subtract:N,sub:R,equalsApproximately:X,equals:se,lerp:q,lerpV:Q,max:ae,min:K,mulScalar:Y,scale:W,divScalar:ce,inverse:Me,invert:ve,cross:ue,dot:ye,length:oe,len:fe,lengthSq:be,lenSq:ze,distance:Ve,dist:H,distanceSq:J,distSq:$,normalize:Z,negate:$e,copy:Ee,clone:de,multiply:pe,mul:De,divide:_e,div:Pe,random:Re,zero:M,transformMat4:G,transformMat3:g,rotate:i,setLength:p,truncate:u,midpoint:v}}const Gr=new Map;function si(o){let l=Gr.get(o);return l||(l=Pl(o),Gr.set(o,l)),l}function Sl(o){function l(a,f,x){const b=new o(3);return a!==void 0&&(b[0]=a,f!==void 0&&(b[1]=f,x!==void 0&&(b[2]=x))),b}const _=l;function E(a,f,x,b){const A=b??new o(3);return A[0]=a,A[1]=f,A[2]=x,A}function w(a,f){const x=f??new o(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,f){const x=f??new o(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function B(a,f){const x=f??new o(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function L(a,f=0,x=1,b){const A=b??new o(3);return A[0]=Math.min(x,Math.max(f,a[0])),A[1]=Math.min(x,Math.max(f,a[1])),A[2]=Math.min(x,Math.max(f,a[2])),A}function D(a,f,x){const b=x??new o(3);return b[0]=a[0]+f[0],b[1]=a[1]+f[1],b[2]=a[2]+f[2],b}function z(a,f,x,b){const A=b??new o(3);return A[0]=a[0]+f[0]*x,A[1]=a[1]+f[1]*x,A[2]=a[2]+f[2]*x,A}function F(a,f){const x=a[0],b=a[1],A=a[2],U=f[0],V=f[1],le=f[2],te=Math.sqrt(x*x+b*b+A*A),ne=Math.sqrt(U*U+V*V+le*le),me=te*ne,Se=me&&ye(a,f)/me;return Math.acos(Se)}function N(a,f,x){const b=x??new o(3);return b[0]=a[0]-f[0],b[1]=a[1]-f[1],b[2]=a[2]-f[2],b}const R=N;function X(a,f){return Math.abs(a[0]-f[0])<Le&&Math.abs(a[1]-f[1])<Le&&Math.abs(a[2]-f[2])<Le}function se(a,f){return a[0]===f[0]&&a[1]===f[1]&&a[2]===f[2]}function q(a,f,x,b){const A=b??new o(3);return A[0]=a[0]+x*(f[0]-a[0]),A[1]=a[1]+x*(f[1]-a[1]),A[2]=a[2]+x*(f[2]-a[2]),A}function Q(a,f,x,b){const A=b??new o(3);return A[0]=a[0]+x[0]*(f[0]-a[0]),A[1]=a[1]+x[1]*(f[1]-a[1]),A[2]=a[2]+x[2]*(f[2]-a[2]),A}function ae(a,f,x){const b=x??new o(3);return b[0]=Math.max(a[0],f[0]),b[1]=Math.max(a[1],f[1]),b[2]=Math.max(a[2],f[2]),b}function K(a,f,x){const b=x??new o(3);return b[0]=Math.min(a[0],f[0]),b[1]=Math.min(a[1],f[1]),b[2]=Math.min(a[2],f[2]),b}function Y(a,f,x){const b=x??new o(3);return b[0]=a[0]*f,b[1]=a[1]*f,b[2]=a[2]*f,b}const W=Y;function ce(a,f,x){const b=x??new o(3);return b[0]=a[0]/f,b[1]=a[1]/f,b[2]=a[2]/f,b}function Me(a,f){const x=f??new o(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const ve=Me;function ue(a,f,x){const b=x??new o(3),A=a[2]*f[0]-a[0]*f[2],U=a[0]*f[1]-a[1]*f[0];return b[0]=a[1]*f[2]-a[2]*f[1],b[1]=A,b[2]=U,b}function ye(a,f){return a[0]*f[0]+a[1]*f[1]+a[2]*f[2]}function oe(a){const f=a[0],x=a[1],b=a[2];return Math.sqrt(f*f+x*x+b*b)}const fe=oe;function be(a){const f=a[0],x=a[1],b=a[2];return f*f+x*x+b*b}const ze=be;function Ve(a,f){const x=a[0]-f[0],b=a[1]-f[1],A=a[2]-f[2];return Math.sqrt(x*x+b*b+A*A)}const H=Ve;function J(a,f){const x=a[0]-f[0],b=a[1]-f[1],A=a[2]-f[2];return x*x+b*b+A*A}const $=J;function Z(a,f){const x=f??new o(3),b=a[0],A=a[1],U=a[2],V=Math.sqrt(b*b+A*A+U*U);return V>1e-5?(x[0]=b/V,x[1]=A/V,x[2]=U/V):(x[0]=0,x[1]=0,x[2]=0),x}function $e(a,f){const x=f??new o(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function Ee(a,f){const x=f??new o(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const de=Ee;function pe(a,f,x){const b=x??new o(3);return b[0]=a[0]*f[0],b[1]=a[1]*f[1],b[2]=a[2]*f[2],b}const De=pe;function _e(a,f,x){const b=x??new o(3);return b[0]=a[0]/f[0],b[1]=a[1]/f[1],b[2]=a[2]/f[2],b}const Pe=_e;function Re(a=1,f){const x=f??new o(3),b=Math.random()*2*Math.PI,A=Math.random()*2-1,U=Math.sqrt(1-A*A)*a;return x[0]=Math.cos(b)*U,x[1]=Math.sin(b)*U,x[2]=A*a,x}function M(a){const f=a??new o(3);return f[0]=0,f[1]=0,f[2]=0,f}function G(a,f,x){const b=x??new o(3),A=a[0],U=a[1],V=a[2],le=f[3]*A+f[7]*U+f[11]*V+f[15]||1;return b[0]=(f[0]*A+f[4]*U+f[8]*V+f[12])/le,b[1]=(f[1]*A+f[5]*U+f[9]*V+f[13])/le,b[2]=(f[2]*A+f[6]*U+f[10]*V+f[14])/le,b}function g(a,f,x){const b=x??new o(3),A=a[0],U=a[1],V=a[2];return b[0]=A*f[0*4+0]+U*f[1*4+0]+V*f[2*4+0],b[1]=A*f[0*4+1]+U*f[1*4+1]+V*f[2*4+1],b[2]=A*f[0*4+2]+U*f[1*4+2]+V*f[2*4+2],b}function i(a,f,x){const b=x??new o(3),A=a[0],U=a[1],V=a[2];return b[0]=A*f[0]+U*f[4]+V*f[8],b[1]=A*f[1]+U*f[5]+V*f[9],b[2]=A*f[2]+U*f[6]+V*f[10],b}function p(a,f,x){const b=x??new o(3),A=f[0],U=f[1],V=f[2],le=f[3]*2,te=a[0],ne=a[1],me=a[2],Se=U*me-V*ne,he=V*te-A*me,we=A*ne-U*te;return b[0]=te+Se*le+(U*we-V*he)*2,b[1]=ne+he*le+(V*Se-A*we)*2,b[2]=me+we*le+(A*he-U*Se)*2,b}function u(a,f){const x=f??new o(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function v(a,f,x){const b=x??new o(3),A=f*4;return b[0]=a[A+0],b[1]=a[A+1],b[2]=a[A+2],b}function y(a,f){const x=f??new o(3),b=a[0],A=a[1],U=a[2],V=a[4],le=a[5],te=a[6],ne=a[8],me=a[9],Se=a[10];return x[0]=Math.sqrt(b*b+A*A+U*U),x[1]=Math.sqrt(V*V+le*le+te*te),x[2]=Math.sqrt(ne*ne+me*me+Se*Se),x}function S(a,f,x,b){const A=b??new o(3),U=[],V=[];return U[0]=a[0]-f[0],U[1]=a[1]-f[1],U[2]=a[2]-f[2],V[0]=U[0],V[1]=U[1]*Math.cos(x)-U[2]*Math.sin(x),V[2]=U[1]*Math.sin(x)+U[2]*Math.cos(x),A[0]=V[0]+f[0],A[1]=V[1]+f[1],A[2]=V[2]+f[2],A}function C(a,f,x,b){const A=b??new o(3),U=[],V=[];return U[0]=a[0]-f[0],U[1]=a[1]-f[1],U[2]=a[2]-f[2],V[0]=U[2]*Math.sin(x)+U[0]*Math.cos(x),V[1]=U[1],V[2]=U[2]*Math.cos(x)-U[0]*Math.sin(x),A[0]=V[0]+f[0],A[1]=V[1]+f[1],A[2]=V[2]+f[2],A}function r(a,f,x,b){const A=b??new o(3),U=[],V=[];return U[0]=a[0]-f[0],U[1]=a[1]-f[1],U[2]=a[2]-f[2],V[0]=U[0]*Math.cos(x)-U[1]*Math.sin(x),V[1]=U[0]*Math.sin(x)+U[1]*Math.cos(x),V[2]=U[2],A[0]=V[0]+f[0],A[1]=V[1]+f[1],A[2]=V[2]+f[2],A}function m(a,f,x){const b=x??new o(3);return Z(a,b),Y(b,f,b)}function d(a,f,x){const b=x??new o(3);return oe(a)>f?m(a,f,b):Ee(a,b)}function h(a,f,x){const b=x??new o(3);return q(a,f,.5,b)}return{create:l,fromValues:_,set:E,ceil:w,floor:k,round:B,clamp:L,add:D,addScaled:z,angle:F,subtract:N,sub:R,equalsApproximately:X,equals:se,lerp:q,lerpV:Q,max:ae,min:K,mulScalar:Y,scale:W,divScalar:ce,inverse:Me,invert:ve,cross:ue,dot:ye,length:oe,len:fe,lengthSq:be,lenSq:ze,distance:Ve,dist:H,distanceSq:J,distSq:$,normalize:Z,negate:$e,copy:Ee,clone:de,multiply:pe,mul:De,divide:_e,div:Pe,random:Re,zero:M,transformMat4:G,transformMat4Upper3x3:g,transformMat3:i,transformQuat:p,getTranslation:u,getAxis:v,getScaling:y,rotateX:S,rotateY:C,rotateZ:r,setLength:m,truncate:d,midpoint:h}}const Ur=new Map;function Nn(o){let l=Ur.get(o);return l||(l=Sl(o),Ur.set(o,l)),l}function Cl(o){const l=si(o),_=Nn(o);function E(i,p,u,v,y,S,C,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,p!==void 0&&(d[1]=p,u!==void 0&&(d[2]=u,v!==void 0&&(d[4]=v,y!==void 0&&(d[5]=y,S!==void 0&&(d[6]=S,C!==void 0&&(d[8]=C,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(i,p,u,v,y,S,C,r,m,d){const h=d??new o(12);return h[0]=i,h[1]=p,h[2]=u,h[3]=0,h[4]=v,h[5]=y,h[6]=S,h[7]=0,h[8]=C,h[9]=r,h[10]=m,h[11]=0,h}function k(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function B(i,p){const u=p??new o(12),v=i[0],y=i[1],S=i[2],C=i[3],r=v+v,m=y+y,d=S+S,h=v*r,a=y*r,f=y*m,x=S*r,b=S*m,A=S*d,U=C*r,V=C*m,le=C*d;return u[0]=1-f-A,u[1]=a+le,u[2]=x-V,u[3]=0,u[4]=a-le,u[5]=1-h-A,u[6]=b+U,u[7]=0,u[8]=x+V,u[9]=b-U,u[10]=1-h-f,u[11]=0,u}function L(i,p){const u=p??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function D(i,p,u){const v=u??new o(12);return v[0]=i[0]*p,v[1]=i[1]*p,v[2]=i[2]*p,v[4]=i[4]*p,v[5]=i[5]*p,v[6]=i[6]*p,v[8]=i[8]*p,v[9]=i[9]*p,v[10]=i[10]*p,v}const z=D;function F(i,p,u){const v=u??new o(12);return v[0]=i[0]+p[0],v[1]=i[1]+p[1],v[2]=i[2]+p[2],v[4]=i[4]+p[4],v[5]=i[5]+p[5],v[6]=i[6]+p[6],v[8]=i[8]+p[8],v[9]=i[9]+p[9],v[10]=i[10]+p[10],v}function N(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const R=N;function X(i,p){return Math.abs(i[0]-p[0])<Le&&Math.abs(i[1]-p[1])<Le&&Math.abs(i[2]-p[2])<Le&&Math.abs(i[4]-p[4])<Le&&Math.abs(i[5]-p[5])<Le&&Math.abs(i[6]-p[6])<Le&&Math.abs(i[8]-p[8])<Le&&Math.abs(i[9]-p[9])<Le&&Math.abs(i[10]-p[10])<Le}function se(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[4]===p[4]&&i[5]===p[5]&&i[6]===p[6]&&i[8]===p[8]&&i[9]===p[9]&&i[10]===p[10]}function q(i){const p=i??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Q(i,p){const u=p??new o(12);if(u===i){let f;return f=i[1],i[1]=i[4],i[4]=f,f=i[2],i[2]=i[8],i[8]=f,f=i[6],i[6]=i[9],i[9]=f,u}const v=i[0*4+0],y=i[0*4+1],S=i[0*4+2],C=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],a=i[2*4+2];return u[0]=v,u[1]=C,u[2]=d,u[4]=y,u[5]=r,u[6]=h,u[8]=S,u[9]=m,u[10]=a,u}function ae(i,p){const u=p??new o(12),v=i[0*4+0],y=i[0*4+1],S=i[0*4+2],C=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],a=i[2*4+2],f=a*r-m*h,x=-a*C+m*d,b=h*C-r*d,A=1/(v*f+y*x+S*b);return u[0]=f*A,u[1]=(-a*y+S*h)*A,u[2]=(m*y-S*r)*A,u[4]=x*A,u[5]=(a*v-S*d)*A,u[6]=(-m*v+S*C)*A,u[8]=b*A,u[9]=(-h*v+y*d)*A,u[10]=(r*v-y*C)*A,u}function K(i){const p=i[0],u=i[0*4+1],v=i[0*4+2],y=i[1*4+0],S=i[1*4+1],C=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return p*(S*d-m*C)-y*(u*d-m*v)+r*(u*C-S*v)}const Y=ae;function W(i,p,u){const v=u??new o(12),y=i[0],S=i[1],C=i[2],r=i[4+0],m=i[4+1],d=i[4+2],h=i[8+0],a=i[8+1],f=i[8+2],x=p[0],b=p[1],A=p[2],U=p[4+0],V=p[4+1],le=p[4+2],te=p[8+0],ne=p[8+1],me=p[8+2];return v[0]=y*x+r*b+h*A,v[1]=S*x+m*b+a*A,v[2]=C*x+d*b+f*A,v[4]=y*U+r*V+h*le,v[5]=S*U+m*V+a*le,v[6]=C*U+d*V+f*le,v[8]=y*te+r*ne+h*me,v[9]=S*te+m*ne+a*me,v[10]=C*te+d*ne+f*me,v}const ce=W;function Me(i,p,u){const v=u??q();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=p[0],v[9]=p[1],v[10]=1,v}function ve(i,p){const u=p??l.create();return u[0]=i[8],u[1]=i[9],u}function ue(i,p,u){const v=u??l.create(),y=p*4;return v[0]=i[y+0],v[1]=i[y+1],v}function ye(i,p,u,v){const y=v===i?i:N(i,v),S=u*4;return y[S+0]=p[0],y[S+1]=p[1],y}function oe(i,p){const u=p??l.create(),v=i[0],y=i[1],S=i[4],C=i[5];return u[0]=Math.sqrt(v*v+y*y),u[1]=Math.sqrt(S*S+C*C),u}function fe(i,p){const u=p??_.create(),v=i[0],y=i[1],S=i[2],C=i[4],r=i[5],m=i[6],d=i[8],h=i[9],a=i[10];return u[0]=Math.sqrt(v*v+y*y+S*S),u[1]=Math.sqrt(C*C+r*r+m*m),u[2]=Math.sqrt(d*d+h*h+a*a),u}function be(i,p){const u=p??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function ze(i,p,u){const v=u??new o(12),y=p[0],S=p[1],C=i[0],r=i[1],m=i[2],d=i[1*4+0],h=i[1*4+1],a=i[1*4+2],f=i[2*4+0],x=i[2*4+1],b=i[2*4+2];return i!==v&&(v[0]=C,v[1]=r,v[2]=m,v[4]=d,v[5]=h,v[6]=a),v[8]=C*y+d*S+f,v[9]=r*y+h*S+x,v[10]=m*y+a*S+b,v}function Ve(i,p){const u=p??new o(12),v=Math.cos(i),y=Math.sin(i);return u[0]=v,u[1]=y,u[2]=0,u[4]=-y,u[5]=v,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function H(i,p,u){const v=u??new o(12),y=i[0*4+0],S=i[0*4+1],C=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],h=Math.cos(p),a=Math.sin(p);return v[0]=h*y+a*r,v[1]=h*S+a*m,v[2]=h*C+a*d,v[4]=h*r-a*y,v[5]=h*m-a*S,v[6]=h*d-a*C,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function J(i,p){const u=p??new o(12),v=Math.cos(i),y=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=v,u[6]=y,u[8]=0,u[9]=-y,u[10]=v,u}function $(i,p,u){const v=u??new o(12),y=i[4],S=i[5],C=i[6],r=i[8],m=i[9],d=i[10],h=Math.cos(p),a=Math.sin(p);return v[4]=h*y+a*r,v[5]=h*S+a*m,v[6]=h*C+a*d,v[8]=h*r-a*y,v[9]=h*m-a*S,v[10]=h*d-a*C,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function Z(i,p){const u=p??new o(12),v=Math.cos(i),y=Math.sin(i);return u[0]=v,u[1]=0,u[2]=-y,u[4]=0,u[5]=1,u[6]=0,u[8]=y,u[9]=0,u[10]=v,u}function $e(i,p,u){const v=u??new o(12),y=i[0*4+0],S=i[0*4+1],C=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],h=Math.cos(p),a=Math.sin(p);return v[0]=h*y-a*r,v[1]=h*S-a*m,v[2]=h*C-a*d,v[8]=h*r+a*y,v[9]=h*m+a*S,v[10]=h*d+a*C,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const Ee=Ve,de=H;function pe(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function De(i,p,u){const v=u??new o(12),y=p[0],S=p[1];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=S*i[1*4+0],v[5]=S*i[1*4+1],v[6]=S*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function _e(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function Pe(i,p,u){const v=u??new o(12),y=p[0],S=p[1],C=p[2];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=S*i[1*4+0],v[5]=S*i[1*4+1],v[6]=S*i[1*4+2],v[8]=C*i[2*4+0],v[9]=C*i[2*4+1],v[10]=C*i[2*4+2],v}function Re(i,p){const u=p??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function M(i,p,u){const v=u??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function G(i,p){const u=p??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function g(i,p,u){const v=u??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],v[8]=p*i[2*4+0],v[9]=p*i[2*4+1],v[10]=p*i[2*4+2],v}return{add:F,clone:R,copy:N,create:E,determinant:K,equals:se,equalsApproximately:X,fromMat4:k,fromQuat:B,get3DScaling:fe,getAxis:ue,getScaling:oe,getTranslation:ve,identity:q,inverse:ae,invert:Y,mul:ce,mulScalar:z,multiply:W,multiplyScalar:D,negate:L,rotate:H,rotateX:$,rotateY:$e,rotateZ:de,rotation:Ve,rotationX:J,rotationY:Z,rotationZ:Ee,scale:De,scale3D:Pe,scaling:pe,scaling3D:_e,set:w,setAxis:ye,setTranslation:Me,translate:ze,translation:be,transpose:Q,uniformScale:M,uniformScale3D:g,uniformScaling:Re,uniformScaling3D:G}}const Vr=new Map;function El(o){let l=Vr.get(o);return l||(l=Cl(o),Vr.set(o,l)),l}function kl(o){const l=Nn(o);function _(r,m,d,h,a,f,x,b,A,U,V,le,te,ne,me,Se){const he=new o(16);return r!==void 0&&(he[0]=r,m!==void 0&&(he[1]=m,d!==void 0&&(he[2]=d,h!==void 0&&(he[3]=h,a!==void 0&&(he[4]=a,f!==void 0&&(he[5]=f,x!==void 0&&(he[6]=x,b!==void 0&&(he[7]=b,A!==void 0&&(he[8]=A,U!==void 0&&(he[9]=U,V!==void 0&&(he[10]=V,le!==void 0&&(he[11]=le,te!==void 0&&(he[12]=te,ne!==void 0&&(he[13]=ne,me!==void 0&&(he[14]=me,Se!==void 0&&(he[15]=Se)))))))))))))))),he}function E(r,m,d,h,a,f,x,b,A,U,V,le,te,ne,me,Se,he){const we=he??new o(16);return we[0]=r,we[1]=m,we[2]=d,we[3]=h,we[4]=a,we[5]=f,we[6]=x,we[7]=b,we[8]=A,we[9]=U,we[10]=V,we[11]=le,we[12]=te,we[13]=ne,we[14]=me,we[15]=Se,we}function w(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function k(r,m){const d=m??new o(16),h=r[0],a=r[1],f=r[2],x=r[3],b=h+h,A=a+a,U=f+f,V=h*b,le=a*b,te=a*A,ne=f*b,me=f*A,Se=f*U,he=x*b,we=x*A,Te=x*U;return d[0]=1-te-Se,d[1]=le+Te,d[2]=ne-we,d[3]=0,d[4]=le-Te,d[5]=1-V-Se,d[6]=me+he,d[7]=0,d[8]=ne+we,d[9]=me-he,d[10]=1-V-te,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function B(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function L(r,m,d){const h=d??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function D(r,m,d){const h=d??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const z=D;function F(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const N=F;function R(r,m){return Math.abs(r[0]-m[0])<Le&&Math.abs(r[1]-m[1])<Le&&Math.abs(r[2]-m[2])<Le&&Math.abs(r[3]-m[3])<Le&&Math.abs(r[4]-m[4])<Le&&Math.abs(r[5]-m[5])<Le&&Math.abs(r[6]-m[6])<Le&&Math.abs(r[7]-m[7])<Le&&Math.abs(r[8]-m[8])<Le&&Math.abs(r[9]-m[9])<Le&&Math.abs(r[10]-m[10])<Le&&Math.abs(r[11]-m[11])<Le&&Math.abs(r[12]-m[12])<Le&&Math.abs(r[13]-m[13])<Le&&Math.abs(r[14]-m[14])<Le&&Math.abs(r[15]-m[15])<Le}function X(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function se(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function q(r,m){const d=m??new o(16);if(d===r){let Ae;return Ae=r[1],r[1]=r[4],r[4]=Ae,Ae=r[2],r[2]=r[8],r[8]=Ae,Ae=r[3],r[3]=r[12],r[12]=Ae,Ae=r[6],r[6]=r[9],r[9]=Ae,Ae=r[7],r[7]=r[13],r[13]=Ae,Ae=r[11],r[11]=r[14],r[14]=Ae,d}const h=r[0*4+0],a=r[0*4+1],f=r[0*4+2],x=r[0*4+3],b=r[1*4+0],A=r[1*4+1],U=r[1*4+2],V=r[1*4+3],le=r[2*4+0],te=r[2*4+1],ne=r[2*4+2],me=r[2*4+3],Se=r[3*4+0],he=r[3*4+1],we=r[3*4+2],Te=r[3*4+3];return d[0]=h,d[1]=b,d[2]=le,d[3]=Se,d[4]=a,d[5]=A,d[6]=te,d[7]=he,d[8]=f,d[9]=U,d[10]=ne,d[11]=we,d[12]=x,d[13]=V,d[14]=me,d[15]=Te,d}function Q(r,m){const d=m??new o(16),h=r[0*4+0],a=r[0*4+1],f=r[0*4+2],x=r[0*4+3],b=r[1*4+0],A=r[1*4+1],U=r[1*4+2],V=r[1*4+3],le=r[2*4+0],te=r[2*4+1],ne=r[2*4+2],me=r[2*4+3],Se=r[3*4+0],he=r[3*4+1],we=r[3*4+2],Te=r[3*4+3],Ae=ne*Te,We=we*me,Qe=U*Te,je=we*V,Ke=U*me,Je=ne*V,nt=f*Te,st=we*x,rt=f*me,et=ne*x,tt=f*V,Ye=U*x,Fe=le*he,j=Se*te,re=b*he,ie=Se*A,xe=b*te,Ie=le*A,ge=h*he,ke=Se*a,Ue=h*te,qe=le*a,Ze=h*A,ot=b*a,jt=Ae*A+je*te+Ke*he-(We*A+Qe*te+Je*he),wt=We*a+nt*te+et*he-(Ae*a+st*te+rt*he),zt=Qe*a+st*A+tt*he-(je*a+nt*A+Ye*he),Kt=Je*a+rt*A+Ye*te-(Ke*a+et*A+tt*te),He=1/(h*jt+b*wt+le*zt+Se*Kt);return d[0]=He*jt,d[1]=He*wt,d[2]=He*zt,d[3]=He*Kt,d[4]=He*(We*b+Qe*le+Je*Se-(Ae*b+je*le+Ke*Se)),d[5]=He*(Ae*h+st*le+rt*Se-(We*h+nt*le+et*Se)),d[6]=He*(je*h+nt*b+Ye*Se-(Qe*h+st*b+tt*Se)),d[7]=He*(Ke*h+et*b+tt*le-(Je*h+rt*b+Ye*le)),d[8]=He*(Fe*V+ie*me+xe*Te-(j*V+re*me+Ie*Te)),d[9]=He*(j*x+ge*me+qe*Te-(Fe*x+ke*me+Ue*Te)),d[10]=He*(re*x+ke*V+Ze*Te-(ie*x+ge*V+ot*Te)),d[11]=He*(Ie*x+Ue*V+ot*me-(xe*x+qe*V+Ze*me)),d[12]=He*(re*ne+Ie*we+j*U-(xe*we+Fe*U+ie*ne)),d[13]=He*(Ue*we+Fe*f+ke*ne-(ge*ne+qe*we+j*f)),d[14]=He*(ge*U+ot*we+ie*f-(Ze*we+re*f+ke*U)),d[15]=He*(Ze*ne+xe*f+qe*U-(Ue*U+ot*ne+Ie*f)),d}function ae(r){const m=r[0],d=r[0*4+1],h=r[0*4+2],a=r[0*4+3],f=r[1*4+0],x=r[1*4+1],b=r[1*4+2],A=r[1*4+3],U=r[2*4+0],V=r[2*4+1],le=r[2*4+2],te=r[2*4+3],ne=r[3*4+0],me=r[3*4+1],Se=r[3*4+2],he=r[3*4+3],we=le*he,Te=Se*te,Ae=b*he,We=Se*A,Qe=b*te,je=le*A,Ke=h*he,Je=Se*a,nt=h*te,st=le*a,rt=h*A,et=b*a,tt=we*x+We*V+Qe*me-(Te*x+Ae*V+je*me),Ye=Te*d+Ke*V+st*me-(we*d+Je*V+nt*me),Fe=Ae*d+Je*x+rt*me-(We*d+Ke*x+et*me),j=je*d+nt*x+et*V-(Qe*d+st*x+rt*V);return m*tt+f*Ye+U*Fe+ne*j}const K=Q;function Y(r,m,d){const h=d??new o(16),a=r[0],f=r[1],x=r[2],b=r[3],A=r[4+0],U=r[4+1],V=r[4+2],le=r[4+3],te=r[8+0],ne=r[8+1],me=r[8+2],Se=r[8+3],he=r[12+0],we=r[12+1],Te=r[12+2],Ae=r[12+3],We=m[0],Qe=m[1],je=m[2],Ke=m[3],Je=m[4+0],nt=m[4+1],st=m[4+2],rt=m[4+3],et=m[8+0],tt=m[8+1],Ye=m[8+2],Fe=m[8+3],j=m[12+0],re=m[12+1],ie=m[12+2],xe=m[12+3];return h[0]=a*We+A*Qe+te*je+he*Ke,h[1]=f*We+U*Qe+ne*je+we*Ke,h[2]=x*We+V*Qe+me*je+Te*Ke,h[3]=b*We+le*Qe+Se*je+Ae*Ke,h[4]=a*Je+A*nt+te*st+he*rt,h[5]=f*Je+U*nt+ne*st+we*rt,h[6]=x*Je+V*nt+me*st+Te*rt,h[7]=b*Je+le*nt+Se*st+Ae*rt,h[8]=a*et+A*tt+te*Ye+he*Fe,h[9]=f*et+U*tt+ne*Ye+we*Fe,h[10]=x*et+V*tt+me*Ye+Te*Fe,h[11]=b*et+le*tt+Se*Ye+Ae*Fe,h[12]=a*j+A*re+te*ie+he*xe,h[13]=f*j+U*re+ne*ie+we*xe,h[14]=x*j+V*re+me*ie+Te*xe,h[15]=b*j+le*re+Se*ie+Ae*xe,h}const W=Y;function ce(r,m,d){const h=d??se();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function Me(r,m){const d=m??l.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function ve(r,m,d){const h=d??l.create(),a=m*4;return h[0]=r[a+0],h[1]=r[a+1],h[2]=r[a+2],h}function ue(r,m,d,h){const a=h===r?h:F(r,h),f=d*4;return a[f+0]=m[0],a[f+1]=m[1],a[f+2]=m[2],a}function ye(r,m){const d=m??l.create(),h=r[0],a=r[1],f=r[2],x=r[4],b=r[5],A=r[6],U=r[8],V=r[9],le=r[10];return d[0]=Math.sqrt(h*h+a*a+f*f),d[1]=Math.sqrt(x*x+b*b+A*A),d[2]=Math.sqrt(U*U+V*V+le*le),d}function oe(r,m,d,h,a){const f=a??new o(16),x=Math.tan(Math.PI*.5-.5*r);if(f[0]=x/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=x,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,Number.isFinite(h)){const b=1/(d-h);f[10]=h*b,f[14]=h*d*b}else f[10]=-1,f[14]=-d;return f}function fe(r,m,d,h=1/0,a){const f=a??new o(16),x=1/Math.tan(r*.5);if(f[0]=x/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=x,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,h===1/0)f[10]=0,f[14]=d;else{const b=1/(h-d);f[10]=d*b,f[14]=h*d*b}return f}function be(r,m,d,h,a,f,x){const b=x??new o(16);return b[0]=2/(m-r),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(h-d),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(a-f),b[11]=0,b[12]=(m+r)/(r-m),b[13]=(h+d)/(d-h),b[14]=a/(a-f),b[15]=1,b}function ze(r,m,d,h,a,f,x){const b=x??new o(16),A=m-r,U=h-d,V=a-f;return b[0]=2*a/A,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*a/U,b[6]=0,b[7]=0,b[8]=(r+m)/A,b[9]=(h+d)/U,b[10]=f/V,b[11]=-1,b[12]=0,b[13]=0,b[14]=a*f/V,b[15]=0,b}function Ve(r,m,d,h,a,f=1/0,x){const b=x??new o(16),A=m-r,U=h-d;if(b[0]=2*a/A,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*a/U,b[6]=0,b[7]=0,b[8]=(r+m)/A,b[9]=(h+d)/U,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,f===1/0)b[10]=0,b[14]=a;else{const V=1/(f-a);b[10]=a*V,b[14]=f*a*V}return b}const H=l.create(),J=l.create(),$=l.create();function Z(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(m,r,$),$),l.normalize(l.cross(d,$,H),H),l.normalize(l.cross($,H,J),J),a[0]=H[0],a[1]=H[1],a[2]=H[2],a[3]=0,a[4]=J[0],a[5]=J[1],a[6]=J[2],a[7]=0,a[8]=$[0],a[9]=$[1],a[10]=$[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function $e(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(r,m,$),$),l.normalize(l.cross(d,$,H),H),l.normalize(l.cross($,H,J),J),a[0]=H[0],a[1]=H[1],a[2]=H[2],a[3]=0,a[4]=J[0],a[5]=J[1],a[6]=J[2],a[7]=0,a[8]=$[0],a[9]=$[1],a[10]=$[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Ee(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(r,m,$),$),l.normalize(l.cross(d,$,H),H),l.normalize(l.cross($,H,J),J),a[0]=H[0],a[1]=J[0],a[2]=$[0],a[3]=0,a[4]=H[1],a[5]=J[1],a[6]=$[1],a[7]=0,a[8]=H[2],a[9]=J[2],a[10]=$[2],a[11]=0,a[12]=-(H[0]*r[0]+H[1]*r[1]+H[2]*r[2]),a[13]=-(J[0]*r[0]+J[1]*r[1]+J[2]*r[2]),a[14]=-($[0]*r[0]+$[1]*r[1]+$[2]*r[2]),a[15]=1,a}function de(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function pe(r,m,d){const h=d??new o(16),a=m[0],f=m[1],x=m[2],b=r[0],A=r[1],U=r[2],V=r[3],le=r[1*4+0],te=r[1*4+1],ne=r[1*4+2],me=r[1*4+3],Se=r[2*4+0],he=r[2*4+1],we=r[2*4+2],Te=r[2*4+3],Ae=r[3*4+0],We=r[3*4+1],Qe=r[3*4+2],je=r[3*4+3];return r!==h&&(h[0]=b,h[1]=A,h[2]=U,h[3]=V,h[4]=le,h[5]=te,h[6]=ne,h[7]=me,h[8]=Se,h[9]=he,h[10]=we,h[11]=Te),h[12]=b*a+le*f+Se*x+Ae,h[13]=A*a+te*f+he*x+We,h[14]=U*a+ne*f+we*x+Qe,h[15]=V*a+me*f+Te*x+je,h}function De(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=h,d[6]=a,d[7]=0,d[8]=0,d[9]=-a,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function _e(r,m,d){const h=d??new o(16),a=r[4],f=r[5],x=r[6],b=r[7],A=r[8],U=r[9],V=r[10],le=r[11],te=Math.cos(m),ne=Math.sin(m);return h[4]=te*a+ne*A,h[5]=te*f+ne*U,h[6]=te*x+ne*V,h[7]=te*b+ne*le,h[8]=te*A-ne*a,h[9]=te*U-ne*f,h[10]=te*V-ne*x,h[11]=te*le-ne*b,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function Pe(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=h,d[1]=0,d[2]=-a,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=a,d[9]=0,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Re(r,m,d){const h=d??new o(16),a=r[0*4+0],f=r[0*4+1],x=r[0*4+2],b=r[0*4+3],A=r[2*4+0],U=r[2*4+1],V=r[2*4+2],le=r[2*4+3],te=Math.cos(m),ne=Math.sin(m);return h[0]=te*a-ne*A,h[1]=te*f-ne*U,h[2]=te*x-ne*V,h[3]=te*b-ne*le,h[8]=te*A+ne*a,h[9]=te*U+ne*f,h[10]=te*V+ne*x,h[11]=te*le+ne*b,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function M(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=h,d[1]=a,d[2]=0,d[3]=0,d[4]=-a,d[5]=h,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function G(r,m,d){const h=d??new o(16),a=r[0*4+0],f=r[0*4+1],x=r[0*4+2],b=r[0*4+3],A=r[1*4+0],U=r[1*4+1],V=r[1*4+2],le=r[1*4+3],te=Math.cos(m),ne=Math.sin(m);return h[0]=te*a+ne*A,h[1]=te*f+ne*U,h[2]=te*x+ne*V,h[3]=te*b+ne*le,h[4]=te*A-ne*a,h[5]=te*U-ne*f,h[6]=te*V-ne*x,h[7]=te*le-ne*b,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function g(r,m,d){const h=d??new o(16);let a=r[0],f=r[1],x=r[2];const b=Math.sqrt(a*a+f*f+x*x);a/=b,f/=b,x/=b;const A=a*a,U=f*f,V=x*x,le=Math.cos(m),te=Math.sin(m),ne=1-le;return h[0]=A+(1-A)*le,h[1]=a*f*ne+x*te,h[2]=a*x*ne-f*te,h[3]=0,h[4]=a*f*ne-x*te,h[5]=U+(1-U)*le,h[6]=f*x*ne+a*te,h[7]=0,h[8]=a*x*ne+f*te,h[9]=f*x*ne-a*te,h[10]=V+(1-V)*le,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=g;function p(r,m,d,h){const a=h??new o(16);let f=m[0],x=m[1],b=m[2];const A=Math.sqrt(f*f+x*x+b*b);f/=A,x/=A,b/=A;const U=f*f,V=x*x,le=b*b,te=Math.cos(d),ne=Math.sin(d),me=1-te,Se=U+(1-U)*te,he=f*x*me+b*ne,we=f*b*me-x*ne,Te=f*x*me-b*ne,Ae=V+(1-V)*te,We=x*b*me+f*ne,Qe=f*b*me+x*ne,je=x*b*me-f*ne,Ke=le+(1-le)*te,Je=r[0],nt=r[1],st=r[2],rt=r[3],et=r[4],tt=r[5],Ye=r[6],Fe=r[7],j=r[8],re=r[9],ie=r[10],xe=r[11];return a[0]=Se*Je+he*et+we*j,a[1]=Se*nt+he*tt+we*re,a[2]=Se*st+he*Ye+we*ie,a[3]=Se*rt+he*Fe+we*xe,a[4]=Te*Je+Ae*et+We*j,a[5]=Te*nt+Ae*tt+We*re,a[6]=Te*st+Ae*Ye+We*ie,a[7]=Te*rt+Ae*Fe+We*xe,a[8]=Qe*Je+je*et+Ke*j,a[9]=Qe*nt+je*tt+Ke*re,a[10]=Qe*st+je*Ye+Ke*ie,a[11]=Qe*rt+je*Fe+Ke*xe,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const u=p;function v(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function y(r,m,d){const h=d??new o(16),a=m[0],f=m[1],x=m[2];return h[0]=a*r[0*4+0],h[1]=a*r[0*4+1],h[2]=a*r[0*4+2],h[3]=a*r[0*4+3],h[4]=f*r[1*4+0],h[5]=f*r[1*4+1],h[6]=f*r[1*4+2],h[7]=f*r[1*4+3],h[8]=x*r[2*4+0],h[9]=x*r[2*4+1],h[10]=x*r[2*4+2],h[11]=x*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function S(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,m,d){const h=d??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:L,aim:Z,axisRotate:p,axisRotation:g,cameraAim:$e,clone:N,copy:F,create:_,determinant:ae,equals:X,equalsApproximately:R,fromMat3:w,fromQuat:k,frustum:ze,frustumReverseZ:Ve,getAxis:ve,getScaling:ye,getTranslation:Me,identity:se,inverse:Q,invert:K,lookAt:Ee,mul:W,mulScalar:z,multiply:Y,multiplyScalar:D,negate:B,ortho:be,perspective:oe,perspectiveReverseZ:fe,rotate:u,rotateX:_e,rotateY:Re,rotateZ:G,rotation:i,rotationX:De,rotationY:Pe,rotationZ:M,scale:y,scaling:v,set:E,setAxis:ue,setTranslation:ce,translate:pe,translation:de,transpose:q,uniformScale:C,uniformScaling:S}}const Or=new Map;function Ml(o){let l=Or.get(o);return l||(l=kl(o),Or.set(o,l)),l}function Bl(o){const l=Nn(o);function _(M,G,g,i){const p=new o(4);return M!==void 0&&(p[0]=M,G!==void 0&&(p[1]=G,g!==void 0&&(p[2]=g,i!==void 0&&(p[3]=i)))),p}const E=_;function w(M,G,g,i,p){const u=p??new o(4);return u[0]=M,u[1]=G,u[2]=g,u[3]=i,u}function k(M,G,g){const i=g??new o(4),p=G*.5,u=Math.sin(p);return i[0]=u*M[0],i[1]=u*M[1],i[2]=u*M[2],i[3]=Math.cos(p),i}function B(M,G){const g=G??l.create(3),i=Math.acos(M[3])*2,p=Math.sin(i*.5);return p>Le?(g[0]=M[0]/p,g[1]=M[1]/p,g[2]=M[2]/p):(g[0]=1,g[1]=0,g[2]=0),{angle:i,axis:g}}function L(M,G){const g=oe(M,G);return Math.acos(2*g*g-1)}function D(M,G,g){const i=g??new o(4),p=M[0],u=M[1],v=M[2],y=M[3],S=G[0],C=G[1],r=G[2],m=G[3];return i[0]=p*m+y*S+u*r-v*C,i[1]=u*m+y*C+v*S-p*r,i[2]=v*m+y*r+p*C-u*S,i[3]=y*m-p*S-u*C-v*r,i}const z=D;function F(M,G,g){const i=g??new o(4),p=G*.5,u=M[0],v=M[1],y=M[2],S=M[3],C=Math.sin(p),r=Math.cos(p);return i[0]=u*r+S*C,i[1]=v*r+y*C,i[2]=y*r-v*C,i[3]=S*r-u*C,i}function N(M,G,g){const i=g??new o(4),p=G*.5,u=M[0],v=M[1],y=M[2],S=M[3],C=Math.sin(p),r=Math.cos(p);return i[0]=u*r-y*C,i[1]=v*r+S*C,i[2]=y*r+u*C,i[3]=S*r-v*C,i}function R(M,G,g){const i=g??new o(4),p=G*.5,u=M[0],v=M[1],y=M[2],S=M[3],C=Math.sin(p),r=Math.cos(p);return i[0]=u*r+v*C,i[1]=v*r-u*C,i[2]=y*r+S*C,i[3]=S*r-y*C,i}function X(M,G,g,i){const p=i??new o(4),u=M[0],v=M[1],y=M[2],S=M[3];let C=G[0],r=G[1],m=G[2],d=G[3],h=u*C+v*r+y*m+S*d;h<0&&(h=-h,C=-C,r=-r,m=-m,d=-d);let a,f;if(1-h>Le){const x=Math.acos(h),b=Math.sin(x);a=Math.sin((1-g)*x)/b,f=Math.sin(g*x)/b}else a=1-g,f=g;return p[0]=a*u+f*C,p[1]=a*v+f*r,p[2]=a*y+f*m,p[3]=a*S+f*d,p}function se(M,G){const g=G??new o(4),i=M[0],p=M[1],u=M[2],v=M[3],y=i*i+p*p+u*u+v*v,S=y?1/y:0;return g[0]=-i*S,g[1]=-p*S,g[2]=-u*S,g[3]=v*S,g}function q(M,G){const g=G??new o(4);return g[0]=-M[0],g[1]=-M[1],g[2]=-M[2],g[3]=M[3],g}function Q(M,G){const g=G??new o(4),i=M[0]+M[5]+M[10];if(i>0){const p=Math.sqrt(i+1);g[3]=.5*p;const u=.5/p;g[0]=(M[6]-M[9])*u,g[1]=(M[8]-M[2])*u,g[2]=(M[1]-M[4])*u}else{let p=0;M[5]>M[0]&&(p=1),M[10]>M[p*4+p]&&(p=2);const u=(p+1)%3,v=(p+2)%3,y=Math.sqrt(M[p*4+p]-M[u*4+u]-M[v*4+v]+1);g[p]=.5*y;const S=.5/y;g[3]=(M[u*4+v]-M[v*4+u])*S,g[u]=(M[u*4+p]+M[p*4+u])*S,g[v]=(M[v*4+p]+M[p*4+v])*S}return g}function ae(M,G,g,i,p){const u=p??new o(4),v=M*.5,y=G*.5,S=g*.5,C=Math.sin(v),r=Math.cos(v),m=Math.sin(y),d=Math.cos(y),h=Math.sin(S),a=Math.cos(S);switch(i){case"xyz":u[0]=C*d*a+r*m*h,u[1]=r*m*a-C*d*h,u[2]=r*d*h+C*m*a,u[3]=r*d*a-C*m*h;break;case"xzy":u[0]=C*d*a-r*m*h,u[1]=r*m*a-C*d*h,u[2]=r*d*h+C*m*a,u[3]=r*d*a+C*m*h;break;case"yxz":u[0]=C*d*a+r*m*h,u[1]=r*m*a-C*d*h,u[2]=r*d*h-C*m*a,u[3]=r*d*a+C*m*h;break;case"yzx":u[0]=C*d*a+r*m*h,u[1]=r*m*a+C*d*h,u[2]=r*d*h-C*m*a,u[3]=r*d*a-C*m*h;break;case"zxy":u[0]=C*d*a-r*m*h,u[1]=r*m*a+C*d*h,u[2]=r*d*h+C*m*a,u[3]=r*d*a-C*m*h;break;case"zyx":u[0]=C*d*a-r*m*h,u[1]=r*m*a+C*d*h,u[2]=r*d*h-C*m*a,u[3]=r*d*a+C*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function K(M,G){const g=G??new o(4);return g[0]=M[0],g[1]=M[1],g[2]=M[2],g[3]=M[3],g}const Y=K;function W(M,G,g){const i=g??new o(4);return i[0]=M[0]+G[0],i[1]=M[1]+G[1],i[2]=M[2]+G[2],i[3]=M[3]+G[3],i}function ce(M,G,g){const i=g??new o(4);return i[0]=M[0]-G[0],i[1]=M[1]-G[1],i[2]=M[2]-G[2],i[3]=M[3]-G[3],i}const Me=ce;function ve(M,G,g){const i=g??new o(4);return i[0]=M[0]*G,i[1]=M[1]*G,i[2]=M[2]*G,i[3]=M[3]*G,i}const ue=ve;function ye(M,G,g){const i=g??new o(4);return i[0]=M[0]/G,i[1]=M[1]/G,i[2]=M[2]/G,i[3]=M[3]/G,i}function oe(M,G){return M[0]*G[0]+M[1]*G[1]+M[2]*G[2]+M[3]*G[3]}function fe(M,G,g,i){const p=i??new o(4);return p[0]=M[0]+g*(G[0]-M[0]),p[1]=M[1]+g*(G[1]-M[1]),p[2]=M[2]+g*(G[2]-M[2]),p[3]=M[3]+g*(G[3]-M[3]),p}function be(M){const G=M[0],g=M[1],i=M[2],p=M[3];return Math.sqrt(G*G+g*g+i*i+p*p)}const ze=be;function Ve(M){const G=M[0],g=M[1],i=M[2],p=M[3];return G*G+g*g+i*i+p*p}const H=Ve;function J(M,G){const g=G??new o(4),i=M[0],p=M[1],u=M[2],v=M[3],y=Math.sqrt(i*i+p*p+u*u+v*v);return y>1e-5?(g[0]=i/y,g[1]=p/y,g[2]=u/y,g[3]=v/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function $(M,G){return Math.abs(M[0]-G[0])<Le&&Math.abs(M[1]-G[1])<Le&&Math.abs(M[2]-G[2])<Le&&Math.abs(M[3]-G[3])<Le}function Z(M,G){return M[0]===G[0]&&M[1]===G[1]&&M[2]===G[2]&&M[3]===G[3]}function $e(M){const G=M??new o(4);return G[0]=0,G[1]=0,G[2]=0,G[3]=1,G}const Ee=l.create(),de=l.create(),pe=l.create();function De(M,G,g){const i=g??new o(4),p=l.dot(M,G);return p<-.999999?(l.cross(de,M,Ee),l.len(Ee)<1e-6&&l.cross(pe,M,Ee),l.normalize(Ee,Ee),k(Ee,Math.PI,i),i):p>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(M,G,Ee),i[0]=Ee[0],i[1]=Ee[1],i[2]=Ee[2],i[3]=1+p,J(i,i))}const _e=new o(4),Pe=new o(4);function Re(M,G,g,i,p,u){const v=u??new o(4);return X(M,i,p,_e),X(G,g,p,Pe),X(_e,Pe,2*p*(1-p),v),v}return{create:_,fromValues:E,set:w,fromAxisAngle:k,toAxisAngle:B,angle:L,multiply:D,mul:z,rotateX:F,rotateY:N,rotateZ:R,slerp:X,inverse:se,conjugate:q,fromMat:Q,fromEuler:ae,copy:K,clone:Y,add:W,subtract:ce,sub:Me,mulScalar:ve,scale:ue,divScalar:ye,dot:oe,lerp:fe,length:be,len:ze,lengthSq:Ve,lenSq:H,normalize:J,equalsApproximately:$,equals:Z,identity:$e,rotationTo:De,sqlerp:Re}}const Fr=new Map;function Tl(o){let l=Fr.get(o);return l||(l=Bl(o),Fr.set(o,l)),l}function Al(o){function l(g,i,p,u){const v=new o(4);return g!==void 0&&(v[0]=g,i!==void 0&&(v[1]=i,p!==void 0&&(v[2]=p,u!==void 0&&(v[3]=u)))),v}const _=l;function E(g,i,p,u,v){const y=v??new o(4);return y[0]=g,y[1]=i,y[2]=p,y[3]=u,y}function w(g,i){const p=i??new o(4);return p[0]=Math.ceil(g[0]),p[1]=Math.ceil(g[1]),p[2]=Math.ceil(g[2]),p[3]=Math.ceil(g[3]),p}function k(g,i){const p=i??new o(4);return p[0]=Math.floor(g[0]),p[1]=Math.floor(g[1]),p[2]=Math.floor(g[2]),p[3]=Math.floor(g[3]),p}function B(g,i){const p=i??new o(4);return p[0]=Math.round(g[0]),p[1]=Math.round(g[1]),p[2]=Math.round(g[2]),p[3]=Math.round(g[3]),p}function L(g,i=0,p=1,u){const v=u??new o(4);return v[0]=Math.min(p,Math.max(i,g[0])),v[1]=Math.min(p,Math.max(i,g[1])),v[2]=Math.min(p,Math.max(i,g[2])),v[3]=Math.min(p,Math.max(i,g[3])),v}function D(g,i,p){const u=p??new o(4);return u[0]=g[0]+i[0],u[1]=g[1]+i[1],u[2]=g[2]+i[2],u[3]=g[3]+i[3],u}function z(g,i,p,u){const v=u??new o(4);return v[0]=g[0]+i[0]*p,v[1]=g[1]+i[1]*p,v[2]=g[2]+i[2]*p,v[3]=g[3]+i[3]*p,v}function F(g,i,p){const u=p??new o(4);return u[0]=g[0]-i[0],u[1]=g[1]-i[1],u[2]=g[2]-i[2],u[3]=g[3]-i[3],u}const N=F;function R(g,i){return Math.abs(g[0]-i[0])<Le&&Math.abs(g[1]-i[1])<Le&&Math.abs(g[2]-i[2])<Le&&Math.abs(g[3]-i[3])<Le}function X(g,i){return g[0]===i[0]&&g[1]===i[1]&&g[2]===i[2]&&g[3]===i[3]}function se(g,i,p,u){const v=u??new o(4);return v[0]=g[0]+p*(i[0]-g[0]),v[1]=g[1]+p*(i[1]-g[1]),v[2]=g[2]+p*(i[2]-g[2]),v[3]=g[3]+p*(i[3]-g[3]),v}function q(g,i,p,u){const v=u??new o(4);return v[0]=g[0]+p[0]*(i[0]-g[0]),v[1]=g[1]+p[1]*(i[1]-g[1]),v[2]=g[2]+p[2]*(i[2]-g[2]),v[3]=g[3]+p[3]*(i[3]-g[3]),v}function Q(g,i,p){const u=p??new o(4);return u[0]=Math.max(g[0],i[0]),u[1]=Math.max(g[1],i[1]),u[2]=Math.max(g[2],i[2]),u[3]=Math.max(g[3],i[3]),u}function ae(g,i,p){const u=p??new o(4);return u[0]=Math.min(g[0],i[0]),u[1]=Math.min(g[1],i[1]),u[2]=Math.min(g[2],i[2]),u[3]=Math.min(g[3],i[3]),u}function K(g,i,p){const u=p??new o(4);return u[0]=g[0]*i,u[1]=g[1]*i,u[2]=g[2]*i,u[3]=g[3]*i,u}const Y=K;function W(g,i,p){const u=p??new o(4);return u[0]=g[0]/i,u[1]=g[1]/i,u[2]=g[2]/i,u[3]=g[3]/i,u}function ce(g,i){const p=i??new o(4);return p[0]=1/g[0],p[1]=1/g[1],p[2]=1/g[2],p[3]=1/g[3],p}const Me=ce;function ve(g,i){return g[0]*i[0]+g[1]*i[1]+g[2]*i[2]+g[3]*i[3]}function ue(g){const i=g[0],p=g[1],u=g[2],v=g[3];return Math.sqrt(i*i+p*p+u*u+v*v)}const ye=ue;function oe(g){const i=g[0],p=g[1],u=g[2],v=g[3];return i*i+p*p+u*u+v*v}const fe=oe;function be(g,i){const p=g[0]-i[0],u=g[1]-i[1],v=g[2]-i[2],y=g[3]-i[3];return Math.sqrt(p*p+u*u+v*v+y*y)}const ze=be;function Ve(g,i){const p=g[0]-i[0],u=g[1]-i[1],v=g[2]-i[2],y=g[3]-i[3];return p*p+u*u+v*v+y*y}const H=Ve;function J(g,i){const p=i??new o(4),u=g[0],v=g[1],y=g[2],S=g[3],C=Math.sqrt(u*u+v*v+y*y+S*S);return C>1e-5?(p[0]=u/C,p[1]=v/C,p[2]=y/C,p[3]=S/C):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function $(g,i){const p=i??new o(4);return p[0]=-g[0],p[1]=-g[1],p[2]=-g[2],p[3]=-g[3],p}function Z(g,i){const p=i??new o(4);return p[0]=g[0],p[1]=g[1],p[2]=g[2],p[3]=g[3],p}const $e=Z;function Ee(g,i,p){const u=p??new o(4);return u[0]=g[0]*i[0],u[1]=g[1]*i[1],u[2]=g[2]*i[2],u[3]=g[3]*i[3],u}const de=Ee;function pe(g,i,p){const u=p??new o(4);return u[0]=g[0]/i[0],u[1]=g[1]/i[1],u[2]=g[2]/i[2],u[3]=g[3]/i[3],u}const De=pe;function _e(g){const i=g??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Pe(g,i,p){const u=p??new o(4),v=g[0],y=g[1],S=g[2],C=g[3];return u[0]=i[0]*v+i[4]*y+i[8]*S+i[12]*C,u[1]=i[1]*v+i[5]*y+i[9]*S+i[13]*C,u[2]=i[2]*v+i[6]*y+i[10]*S+i[14]*C,u[3]=i[3]*v+i[7]*y+i[11]*S+i[15]*C,u}function Re(g,i,p){const u=p??new o(4);return J(g,u),K(u,i,u)}function M(g,i,p){const u=p??new o(4);return ue(g)>i?Re(g,i,u):Z(g,u)}function G(g,i,p){const u=p??new o(4);return se(g,i,.5,u)}return{create:l,fromValues:_,set:E,ceil:w,floor:k,round:B,clamp:L,add:D,addScaled:z,subtract:F,sub:N,equalsApproximately:R,equals:X,lerp:se,lerpV:q,max:Q,min:ae,mulScalar:K,scale:Y,divScalar:W,inverse:ce,invert:Me,dot:ve,length:ue,len:ye,lengthSq:oe,lenSq:fe,distance:be,dist:ze,distanceSq:Ve,distSq:H,normalize:J,negate:$,copy:Z,clone:$e,multiply:Ee,mul:de,divide:pe,div:De,zero:_e,transformMat4:Pe,setLength:Re,truncate:M,midpoint:G}}const Nr=new Map;function Dl(o){let l=Nr.get(o);return l||(l=Al(o),Nr.set(o,l)),l}function Ss(o,l,_,E,w,k){return{mat3:El(o),mat4:Ml(l),quat:Tl(_),vec2:si(E),vec3:Nn(w),vec4:Dl(k)}}const{mat3:vt,mat4:at,quat:ct,vec2:$r,vec3:I,vec4:Rc}=Ss(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ss(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ss(yl,Array,Array,Array,Array,Array);const qr=document.querySelector("#log");let ht=null,Wt=null;function ri(){if(ht)return ht;ht=document.createElement("div"),ht.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",ht.appendChild(o),Wt=document.createElement("div"),Wt.className="ply-spinner-label",ht.appendChild(Wt),ht.style.display="none",document.body.appendChild(ht),ht}function Cs(o){ri(),Wt&&o&&(Wt.textContent=o),ht&&(ht.style.opacity="1",ht.style.display="flex")}function qt(o){ri(),Wt&&(Wt.textContent=o)}function wn(){if(!ht)return;const o=ht;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function ii(o,l){if(!qr)return;const _=document.createElement("p");_.innerText=o,l&&Object.assign(_.style,l),qr.appendChild(_)}async function ft(o){console.log(o),ii(o)}async function Il(o){console.error(o),ii(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let oi;function ai(){oi=performance.now()}function Wr(o){const l=performance.now()-oi;ft(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Ll(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function yn(o){return o+3&-4}const zl=2,Rl=3,Gl=5,Ul=6,xn=7,Gn=8,Un=9,Vn=10;function Vl(o){const l=new TextDecoder("ascii"),_=l.decode(new Uint8Array(o,0,4));if(_!=="NAT2")throw new Error(`NAT2 bad magic: '${_}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const E=new DataView(o),w=4,k=E.getUint32(w+0,!0),B=E.getUint32(w+4,!0),L=E.getUint32(w+8,!0),D=E.getUint32(w+12,!0),z=E.getUint32(w+16,!0),F=E.getFloat32(w+20,!0),N=E.getUint32(w+24,!0),R=E.getUint32(w+28,!0),X=E.getFloat32(w+32,!0),se=E.getFloat32(w+36,!0),q=E.getFloat32(w+40,!0),Q=E.getUint32(w+44,!0),ae=E.getFloat32(w+48,!0),K=E.getFloat32(w+52,!0),Y=E.getUint32(w+56,!0),W=E.getUint32(w+60,!0),ce=R===Un||R===Vn,Me=ce?W:0,ve=ce?0:W,ue=ve>0?ve:1;if(R===Gl||R===Ul)throw new Error(`NAT2: paired-RVQ format=${R} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ye=R===Un||R===Vn;if(R!==zl&&R!==Rl&&R!==xn&&R!==Gn&&!ye)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${R}`);if(k%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${Q}`);let oe=w+64;const fe=(Y+1)*4,be=new Uint32Array(o.slice(oe,oe+fe));oe+=fe;let ze;if(ue>1){const de=(ue+1)*4;if(oe+de>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${de} from ${oe})`);ze=new Uint32Array(o.slice(oe,oe+de)),oe+=de}else ze=new Uint32Array([0,k]);let Ve=0;for(let de=0;de<ue;de++){const pe=ze[de+1]-ze[de];pe>Ve&&(Ve=pe)}if(ye){const de=Me&1?7:6,pe=z*de*4;if(oe+pe>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${pe} more bytes from offset ${oe}, have ${o.byteLength-oe}`);const De=new Float32Array(o.slice(oe,oe+pe));oe+=pe;const _e=Math.max(1,Me>>8&255),Pe=[];let Re=0;for(let p=0,u=k,v=Q;p<_e;p++,u>>=1,v>>=1){const y=Math.max(1,u>>2)*Math.max(1,v>>2)*16;Pe.push(y),Re+=y}const M=o.byteLength-oe;if(M<Re)throw new Error(`NAT2 probe atlas truncated: need ${Re} bytes for ${k}x${Q} x${_e} mips, have ${M}`);const G=[];let g=oe;for(const p of Pe)G.push(new Uint8Array(o.slice(g,g+p))),g+=p;const i=G[0];return{width:k,height:B,channels:L,kernel_type:D,num_rects:z,uv_extent:F,sb_number:N,format:R,sh_bias:X,res_bias:se,compact_mult:q,layer_h:Q,atlas_scale:ae,atlas_offset:K,n_layers:Y,n_cols:ue,layer_cuts:be,column_cuts:ze,slice_width:Ve,rects_expanded:De,atlas_bytes:i,mip_bytes:G,probe_mode:Me&1?2:1}}const H=z*4*4;if(oe+H>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${H} more bytes from offset ${oe}, have ${o.byteLength-oe}`);const J=new Float32Array(o.slice(oe,oe+H));oe+=H;const $=new Float32Array(z*5);for(let de=0;de<z;de++){const pe=J[de*4+0],De=J[de*4+1],_e=J[de*4+2],Pe=J[de*4+3];let Re=0;for(let p=1;p<=Y&&be[p]<=De;p++)Re=p;let M=0;for(let p=1;p<=ue&&ze[p]<=pe;p++)M=p;const G=De-be[Re],g=pe-ze[M],i=M*Y+Re;$[de*5+0]=g,$[de*5+1]=G,$[de*5+2]=_e,$[de*5+3]=Pe,$[de*5+4]=i}let Z;const Ee=k/4*16;if(R===xn||R===Gn){if(oe+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const de=R===xn?"BCCB":"ACCB",pe=l.decode(new Uint8Array(o,oe,4));if(pe!==de)throw new Error(`NAT2 typeD bad sub-magic: expected '${de}' got '${pe}'`);const De=E.getUint32(oe+4,!0),_e=E.getUint32(oe+8,!0),Pe=E.getUint32(oe+12,!0),Re=E.getUint32(oe+16,!0),M=E.getUint32(oe+20,!0);if(De!==1)throw new Error(`NAT2 BCCB unsupported version ${De}`);if(Pe!==B/4||Re!==k/4||M!==Pe*Re)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${B}, sub-header ${Re}×${Pe} (${M} blocks)`);oe+=24;const G=_e*16;if(oe+G>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${G}, have ${o.byteLength-oe})`);const g=new Uint8Array(o,oe,G);oe+=G;const i=M*2;if(oe+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-oe})`);const p=new Uint16Array(o.slice(oe,oe+i));oe+=i;const u=new Uint8Array(M*16);for(let v=0;v<M;v++){const y=p[v]*16;u.set(g.subarray(y,y+16),v*16)}Z=u}else{let de=0;for(let pe=0;pe<Y;pe++){const De=be[pe+1]-be[pe];if(De%4!==0)throw new Error(`NAT2 BC7 layer ${pe} rows ${De} not 4-aligned`);de+=De/4*Ee}if(oe+de>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${de} more bytes from offset ${oe}, have ${o.byteLength-oe}`);Z=new Uint8Array(o.slice(oe,oe+de))}return{width:k,height:B,channels:L,kernel_type:D,num_rects:z,uv_extent:F,sb_number:N,format:R,sh_bias:X,res_bias:se,compact_mult:q,layer_h:Q,atlas_scale:ae,atlas_offset:K,n_layers:Y,n_cols:ue,layer_cuts:be,column_cuts:ze,slice_width:Ve,rects_expanded:$,atlas_bytes:Z}}const Ol=32;function Fl(o,l,_){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let E,w,k,B;if(l.format===2||l.format===xn||l.format===Un){if(!o.features.has("texture-compression-bc"))return ft(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===Un?"BC7 atlas (proberes: shared probe texture)":l.format===xn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:w,sampler:k}=jr(o,l,"bc7-rgba-unorm",B)}else if(l.format===3||l.format===Gn||l.format===Vn){if(!o.features.has("texture-compression-astc"))return ft(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;B=l.format===Vn?"ASTC 4x4 atlas (proberes: shared probe texture)":l.format===Gn?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:E,view:w,sampler:k}=jr(o,l,"astc-4x4-unorm",B)}else return ft(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:L}=l,D=o.createBuffer({label:"atlas rects (5-stride)",size:yn(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(D,0,L);const z=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return bs(o,z,l,_),{texture:E,view:w,sampler:k,rectsBuffer:D,texParamsBuffer:z,meta:l}}function jr(o,l,_,E){const{width:w,layer_h:k,n_layers:B,n_cols:L,layer_cuts:D,column_cuts:z,slice_width:F,atlas_bytes:N}=l,X=w/4*16,se=o.limits.maxTextureDimension2D;if(k>se||F>se)throw new Error(`⚠️  atlas slice dims ${F}x${k} exceed maxTextureDimension2D=${se}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const q=L*B;if(q>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${L} cols × ${B} layers = ${q} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=l.mip_bytes??[N],ae=Q.length,K=o.createTexture({label:E,size:{width:F,height:k,depthOrArrayLayers:q},mipLevelCount:ae,sampleCount:1,dimension:"2d",format:_,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let ce=0;ce<L;ce++){const Me=z[ce]/4,ve=(z[ce+1]-z[ce])/4;for(let ue=0;ue<B;ue++){const ye=D[ue]/4,oe=(D[ue+1]-D[ue])/4,fe=ce*B+ue,be=ye*X+Me*16;o.queue.writeTexture({texture:K,mipLevel:0,origin:{x:0,y:0,z:fe},aspect:"all"},N,{offset:be,bytesPerRow:X,rowsPerImage:oe},{width:ve*4,height:oe*4,depthOrArrayLayers:1})}}for(let ce=1;ce<ae;ce++){const Me=Math.max(1,F>>ce),ve=Math.max(1,k>>ce);o.queue.writeTexture({texture:K,mipLevel:ce,origin:{x:0,y:0,z:0},aspect:"all"},Q[ce],{offset:0,bytesPerRow:Math.max(1,Me>>2)*16,rowsPerImage:Math.max(1,ve>>2)},{width:Me,height:ve,depthOrArrayLayers:1})}ae>1&&console.log(`[atlas] ${ae} mip levels uploaded (trilinear minification)`);const Y=K.createView({label:`${E} view`,dimension:"2d-array"}),W=o.createSampler({label:`${E} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:ae>1?"linear":"nearest"});return{texture:K,view:Y,sampler:W}}function bs(o,l,_,E,w=1){var z;const k=new ArrayBuffer(32),B=new Uint32Array(k),L=new Float32Array(k);B[0]=E?1:0,L[1]=_.atlas_scale,L[2]=_.atlas_offset,L[3]=_.res_bias,B[4]=_.probe_mode?_.probe_mode|0:0,B[5]=_.width|0;const D=(((z=_.mip_bytes)==null?void 0:z.length)??1)>1;B[6]=D&&w!==0?1:0,o.queue.writeBuffer(l,0,k)}async function gs(o,l){ft(`loading ply file from File... : ${o.name}`),Cs("downloading PLY...");const _=await o.arrayBuffer();try{return await li(_,l)}finally{wn()}}async function Nl(o,l){ft(`loading ply file from URL... : ${o}`),Cs("downloading PLY...");try{ai();const _=new URL(o,self.location.href).href;return await li({url:_},l)}finally{wn()}}async function li(o,l){return new Promise((_,E)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var L,D,z,F,N,R,X,se,q,Q,ae,K;const B=k.data;if((B==null?void 0:B.type)==="error"){Il(`PLY worker error: ${B.message??"unknown error"}`),w.terminate(),E(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const Y=B.totalBytes,W=B.loadedBytes/(1024*1024),ce=Y?Y/(1024*1024):void 0,Me=(B.speedBps??0)/(1024*1024),ve=Y?Math.min(99,Math.floor(B.loadedBytes/Y*100)):void 0,ue=ce?`total ${ce.toFixed(1)} MB`:"total -- MB",ye=ce&&ve!==void 0?`${W.toFixed(1)} MB downloaded (${ve}%)`:`${W.toFixed(1)} MB downloaded`,oe=`${Me.toFixed(2)} MB/s`;qt(`downloading PLY ...
${ue}, ${ye}
${oe}`);return}else if((B==null?void 0:B.type)==="fetched"){ft(`💾 Fetched (${B.byteLength} bytes)`),Wr("Download"),qt("parsing PLY..."),ai();return}else if((B==null?void 0:B.type)==="parse_progress"){const Y=B.total??0,W=B.read??0,ce=Y>0?Math.floor(W/Y*100):0;qt(`parsing PLY ...
${W}/${Y} surfels (${ce}%)`);return}else if((B==null?void 0:B.type)==="done"){const Y=B.num_points,W=B.K,ce=B.feature_mode??0,Me=B.sh_bias,ve=B.kernel_type,ue=B.surfelBuffer,ye=B.svParamsBuffer;ft(`🪐 Total surfels: ${Y}, mode=${ce===1?"SB":"SV"}, K=${W}, sh_bias=${Me}, kernel_type=${ve}`);const fe=l.createBuffer({label:"surfel input buffer",size:yn(Y*Ol),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(fe,0,ue);const be=ye.byteLength>0?ye.byteLength:16,ze=l.createBuffer({label:ce===1?"color_params buffer (SB)":"color_params buffer (SV)",size:yn(be),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ye.byteLength>0&&l.queue.writeBuffer(ze,0,ye),w.terminate(),Wr("Parse"),_({num_points:Y,K:W,feature_mode:ce,sh_bias:Me,kernel_type:ve,surfel_buffer:fe,surfel_data:new Float32Array(ue),sv_params_buffer:ze,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((D=(L=B.bbox)==null?void 0:L.min)==null?void 0:D[0])??-1)+(((F=(z=B.bbox)==null?void 0:z.max)==null?void 0:F[0])??1))/2,((((R=(N=B.bbox)==null?void 0:N.min)==null?void 0:R[1])??-1)+(((se=(X=B.bbox)==null?void 0:X.max)==null?void 0:se[1])??1))/2,((((Q=(q=B.bbox)==null?void 0:q.min)==null?void 0:Q[2])??-1)+(((K=(ae=B.bbox)==null?void 0:ae.max)==null?void 0:K[2])??1))/2]})}},w.onerror=k=>{w.terminate(),E(k)},o instanceof ArrayBuffer?(qt("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ws={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(_,E){E(l)})($l,function(_){class E{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class B extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class L extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class D extends k{constructor(e,t){super(e),this.expanded=t}}class z extends k{constructor(e,t){super(e),this.index=t}}function F(n){return n}function N(n){return n==null}function R(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function X(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const se={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class q{static alreadyDisposed(){return new q({type:"alreadydisposed"})}static notBindable(){return new q({type:"notbindable"})}static propertyNotFound(e){return new q({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new q({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=se[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw q.notBindable();if(!(e in s))throw q.propertyNotFound(e);s[e]=t}}class ae extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class K{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Y="tp";function W(n){return(t,s)=>[Y,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ce(n,e){return t=>e(n(t))}function Me(n){return n.rawValue}function ve(n,e){n.emitter.on("change",ce(Me,e)),e(n.rawValue)}function ue(n,e,t){ve(n.value(e),t)}function ye(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function oe(n,e){return t=>{ye(n,e,t)}}function fe(n,e){ve(n,t=>{e.textContent=t??""})}const be=W("btn");class ze{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(be()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(be("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(be("t")),fe(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Ve{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ze(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class H{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new K,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class J{constructor(e){this.emitter=new K,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function $(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new J(n):new H(n,e)}class Z{constructor(e){this.emitter=new K,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:$(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new Z(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function $e(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const T=e[P],ee=T(n[P]);return ee.succeeded?Object.assign(Object.assign({},c),{[P]:ee.value}):void 0},{});return s}function Ee(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function de(n){return n===null?!1:typeof n=="object"}function pe(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function De(n){return{custom:e=>pe(e)(n),boolean:pe(e=>typeof e=="boolean"?e:void 0)(n),number:pe(e=>typeof e=="number"?e:void 0)(n),string:pe(e=>typeof e=="string"?e:void 0)(n),function:pe(e=>typeof e=="function"?e:void 0)(n),constant:e=>pe(t=>t===e?e:void 0)(n),raw:pe(e=>e)(n),object:e=>pe(t=>{if(de(t))return $e(t,e)})(n),array:e=>pe(t=>{if(Array.isArray(t))return Ee(t,e)})(n)}}const _e={optional:De(!0),required:De(!1)};function Pe(n,e){const t=_e.required.object(e)(n);return t.succeeded?t.value:void 0}function Re(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class G{constructor(e){this.value_=e}static create(e){return[new G(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=W("");function i(n,e){return oe(n,g(void 0,e))}class p extends Z{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=G.create($(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new p(Z.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ve(this.globalDisabled_,i(e,"disabled")),ue(this,"hidden",i(e,"hidden"))}bindDisabled(e){ve(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ve(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const v=W(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class S{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(v(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Re({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const C="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function h(){return globalThis}function a(){return h().document}function f(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(C,"svg");return t.innerHTML=x[e],t}function A(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function V(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function le(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function te(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=W("lbl");function me(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Se{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ne("l")),ue(t.props,"label",P=>{N(P)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),le(s),s.appendChild(me(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(ne("v")),this.element.appendChild(c),this.valueElement=c}}class he extends S{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Se(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const we={id:"button",type:"blade",accept(n){const e=_e,t=Pe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new he(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:new Ve(n.document,{props:Z.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof he)||!(n.controller.valueController instanceof Ve)?null:new ae(n.controller)}};class Te extends S{constructor(e){super(e),this.value=e.value}}function Ae(){return new Z({positions:$([],{equals:R})})}class We extends Z{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=Z.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!N(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ue(this,"expanded",s),ue(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Qe(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function je(n,e){e.style.height=n.styleHeight}function Ke(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),N(n.get("expandedHeight"))){const t=Qe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Je extends w{constructor(e,t){super(e),this.rackApi_=t}}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function rt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class tt{constructor(e){this.emitter=new K,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw q.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Ye extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Fe extends he{constructor(e,t){super(e,t),this.binding=t.binding}}class j extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new L(this,t,this.controller_.binding.target.presetKey)})}}class re extends he{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ie(n){return n instanceof ge?n.apiSet_:n instanceof Je?n.rackApi_.apiSet_:null}function xe(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw q.shouldNeverHappen();return t}function Ie(n,e,t){if(!Q.isBindable(n))throw q.notBindable();return new Q(n,e,t)}class ge extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new K,this.apiSet_=new tt(ie),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>xe(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createInput(P,Ie(e,t,c.presetKey),c),ee=new Ye(T);return this.add(ee,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createMonitor(P,Ie(e,t),c),ee=new j(T);return this.add(ee,c.index)}addFolder(e){return st(this,e)}addButton(e){return nt(this,e)}addSeparator(e){return rt(this,e)}addTab(e){return et(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=xe(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Fe){const s=xe(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new B(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Te){const s=xe(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof re))throw q.shouldNeverHappen();const t=xe(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new L(t,s.target.read(),s.target.presetKey)})}}class ke extends Je{constructor(e,t){super(e,new ge(e.rackController,t)),this.emitter_=new K,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new D(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ue extends S{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class qe{constructor(e,t){const s=W(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Ze(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.binding===e)return s}return null}function ot(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof re&&s.binding===e)return s}return null}function jt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Te&&s.value===e)return s}return null}function wt(n){return n instanceof He?n.rack:n instanceof Ue?n.rackController.rack:null}function zt(n){const e=wt(n);return e?e.bcSet_:null}class Kt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new K,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new tt(zt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),X(e,"parent")?e.parent=this:(e.parent_=this,Re({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){X(e,"parent")?e.parent=null:(e.parent_=null,Re({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Fe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof re)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Te)s.value.emitter.on("change",this.onChildValueChange_);else{const c=wt(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Fe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof re)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Te)s.value.emitter.off("change",this.onChildValueChange_);else{const c=wt(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Ze(this.find(Fe),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=ot(this.find(re),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=jt(this.find(Te),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class He extends S{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new qe(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Kt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&A(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const Pn=W("cnt");class qn{constructor(e,t){var s;this.className_=W((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Pn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ue(this.foldable_,"completed",oe(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ue(t.props,"title",Be=>{N(Be)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const T=e.createElement("div");T.classList.add(this.className_("t")),fe(t.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Ce=t.containerElement;Ce.classList.add(this.className_("c")),this.element.appendChild(Ce),this.containerElement=Ce}}class Ht extends Ue{constructor(e,t){var s;const c=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new He(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new qn(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Ke(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Wn={id:"folder",type:"blade",accept(n){const e=_e,t=Pe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Ht(n.document,{blade:n.blade,expanded:n.params.expanded,props:Z.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ht?new ke(n.controller,n.pool):null}};class xt extends Te{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Se(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class ut extends w{}const kt=W("spr");class Yt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(kt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(kt("r")),this.element.appendChild(s)}}class bt extends S{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Yt(e,{viewProps:t.viewProps})}))}}const Zt={id:"separator",type:"blade",accept(n){const t=Pe(n,{view:_e.required.constant("separator")});return t?{params:t}:null},controller(n){return new bt(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof bt?new ut(n.controller):null}},gt=W("tbi");class jn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gt()),t.viewProps.bindClassModifiers(this.element),ue(t.props,"selected",P=>{P?this.element.classList.add(gt(void 0,"sel")):this.element.classList.remove(gt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(gt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(gt("t")),fe(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class rn{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new jn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ks{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new rn(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new He(e,{blade:Ae(),viewProps:p.create()}),this.props=t.props,ue(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ms{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Bs extends Je{constructor(e,t){super(e,new ge(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new K,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw q.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ks(t,{itemProps:Z.fromObject({selected:!1,title:e.title}),props:Z.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw q.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw q.shouldNeverHappen();const s=new Ms(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw q.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new z(this,e.rawValue)})}}const Ts=-1;class bi{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=$(!0),this.selectedIndex=$(Ts),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ts,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const on=W("tab");class gi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on(),Pn()),t.viewProps.bindClassModifiers(this.element),ve(t.empty,oe(this.element,on(void 0,"nop")));const s=e.createElement("div");s.classList.add(on("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(on("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(on("c")),this.element.appendChild(P),this.contentsElement=P}}class As extends Ue{constructor(e,t){const s=new He(e,{blade:t.blade,viewProps:t.viewProps}),c=new bi;super({blade:t.blade,rackController:s,view:new gi(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new tt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;A(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Ds={id:"tab",type:"blade",accept(n){const e=_e,t=Pe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new As(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ks(n.document,{itemProps:Z.fromObject({selected:!1,title:t.title}),props:Z.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof As?new Bs(n.controller,n.pool):null}};function wi(n,e){const t=n.accept(e.params);if(!t)return null;const s=_e.optional.boolean(e.params.disabled).value,c=_e.optional.boolean(e.params.hidden).value;return n.controller({blade:Ae(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:p.create({disabled:s,hidden:c})})}class xi{constructor(){this.disabled=!1,this.emitter=new K}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class yi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new K,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Pi{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new K,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Is(n,e){for(;n.length<e;)n.push(void 0)}function Si(n){const e=[];return Is(e,n),$(e)}function Ci(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Ei(n,e){const t=[...Ci(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Is(t,n.length),t}class ki{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new K,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Ei(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class an{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function yt(n,e){if(n instanceof e)return n;if(n instanceof an){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Xt{constructor(e){this.values=Z.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class ln{constructor(e){this.values=Z.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Ls{constructor(e){this.values=Z.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return N(s)||(c=Math.max(c,s)),N(t)||(c=Math.min(c,t)),c}}class Sn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Kn=W("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Kn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Kn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Kn("m")),c.appendChild(b(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ue(this.props_,"options",P=>{V(this.selectElement),P.forEach(T=>{const ee=e.createElement("option");ee.textContent=T.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class cn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const zs=W("pop");class Bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(zs()),t.viewProps.bindClassModifiers(this.element),ve(t.shows,oe(this.element,zs(void 0,"v")))}}class Rs{constructor(e,t){this.shows=$(!1),this.viewProps=t.viewProps,this.view=new Bi(e,{shows:this.shows,viewProps:this.viewProps})}}const Gs=W("txt");class Ti{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Gs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Gs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Cn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);N(c)||(this.value.rawValue=c),this.view.refresh()}}function Ai(n){return String(n)}function Us(n){return n==="false"?!1:!!n}function Vs(n){return Ai(n)}class Di{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Ii={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Li{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Ii[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const zi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ri{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Hn(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function un(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Gi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function dn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=dn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=dn(n,e);return c===""?"":s+c}function Yn(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ui(n,e);return s===""?"":t+s}function Os(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Gi(n,e);return e+=s.length,s===""?"":s+dn(n,e)}function Vi(n,e){const t=Os(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=dn(n,e);return e+=c.length,t+s+c+Yn(n,e)}function Oi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=dn(n,e);return e+=s.length,s===""?"":t+s+Yn(n,e)}function Fi(n,e){const t=Os(n,e);return e+=t.length,t===""?"":t+Yn(n,e)}const Ni=Hn([Vi,Oi,Fi]);function $i(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$i(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Wi(n,e);return s===""?"":t+s}function Ki(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Ki(n,e);return s===""?"":t+s}const Yi=Hn([qi,ji,Hi]),Zi=Hn([Yi,Ni]);function Xi(n,e){const t=Zi(n,e);return e+=t.length,t===""?null:{evaluable:new Di(t),cursor:e}}function Qi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Ns(n,e);if(!s)return null;e=s.cursor,e+=un(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Ji(n,e){var t;return(t=Xi(n,e))!==null&&t!==void 0?t:Qi(n,e)}function Fs(n,e){const t=Ji(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Fs(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ri(s,c.evaluable)}):null}function eo(n,e,t){t+=un(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=un(e,t).length,{cursor:t,operator:s}):null}function to(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const T=eo(e,t,s);if(!T)break;s=T.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,P=new Li(T.operator,P,ee.evaluable)}return P?{cursor:s,evaluable:P}:null}}const no=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>to(n,e),Fs);function Ns(n,e){return e+=un(n,e).length,no(n,e)}function so(n){const e=Ns(n,0);return!e||e.cursor+un(n,e.cursor).length!==n.length?null:e.evaluable}function Pt(n){var e;const t=so(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function $s(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Pt(n);if(!N(e))return e}return 0}function ro(n){return String(n)}function lt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const io=lt(0);function En(n){return io(n)+"%"}function qs(n){return String(n)}function Zn(n){return n}function pn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(T){c||(c=!0,T(),c=!1)}n.emitter.on("change",T=>{P(()=>{e.setRawValue(t(n,e),T.options)})}),e.emitter.on("change",T=>{P(()=>{n.setRawValue(s(n,e),T.options)}),P(()=>{e.setRawValue(t(n,e),T.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function pt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function hn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function St(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function oo(n){return n==="ArrowUp"||n==="ArrowDown"}function Ws(n){return oo(n)||n==="ArrowLeft"||n==="ArrowRight"}function Xn(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Rt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new K,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Xn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Xn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Xn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Xe(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function js(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function it(n,e,t){return Math.min(Math.max(n,e),t)}function Ks(n,e){return(n%e+e)%e}const _t=W("txt");class ao{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(_t(),_t(void 0,"num")),t.arrayPosition&&this.element.classList.add(_t(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(_t("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(_t()),this.inputElement.classList.add(_t("i"));const c=e.createElement("div");c.classList.add(_t("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(C,"svg");P.classList.add(_t("g")),this.knobElement.appendChild(P);const T=e.createElementNS(C,"path");T.classList.add(_t("gb")),P.appendChild(T),this.guideBodyElem_=T;const ee=e.createElementNS(C,"path");ee.classList.add(_t("gh")),P.appendChild(ee),this.guideHeadElem_=ee;const Ce=e.createElement("div");Ce.classList.add(W("tt")()),this.knobElement.appendChild(Ce),this.tooltipElem_=Ce,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(_t(void 0,"drg"));return}this.element.classList.add(_t(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=it(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class fn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=$(null),this.view=new ao(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Rt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let T=e;return c!==void 0&&(T=Math.max(T,c)),P!==void 0&&(T=Math.min(T,P)),T}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);N(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=pt(this.baseStep_,hn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){pt(this.baseStep_,hn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Qn=W("sld");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Qn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Qn("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(Qn("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=it(Xe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Xe(it(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=pt(this.baseStep_,St(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){pt(this.baseStep_,St(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Jn=W("sldtxt");class uo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jn());const s=e.createElement("div");s.classList.add(Jn("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Jn("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class es{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new fn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new uo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function _n(n,e){n.write(e)}function kn(n){const e=_e;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Hs(n){if(n==="inline"||n==="popup")return n}function Mt(n){const e=_e;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Ys(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ts(n){return N(n)?null:new ln(Ys(n))}function po(n){const e=n?yt(n,Sn):null;return e?e.step:null}function Mn(n,e){const t=n&&yt(n,Sn);return t?js(t.step):Math.max(js(e),2)}function Qt(n){const e=po(n);return e??1}function Jt(n,e){var t;const s=n&&yt(n,Sn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Bn=W("ckb");class ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Bn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Bn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Bn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Bn("w")),s.appendChild(P);const T=b(e,"check");P.appendChild(T),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function _o(n){const e=[],t=ts(n.options);return t&&e.push(t),new an(e)}const mo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Pe(e,{options:_e.optional.custom(kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us,constraint:n=>_o(n.params),writer:n=>_n},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&yt(s,ln);return c?new cn(e,{props:new Z({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new fo(e,{value:t,viewProps:n.viewProps})}},Gt=W("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Gt()),t.foldable.bindExpandedClass(this.element,Gt(void 0,"expanded")),ue(t.foldable,"completed",oe(this.element,Gt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Gt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Gt("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(Gt("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(Gt("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}function bo(n,e,t){const s=it(n/255,0,1),c=it(e/255,0,1),P=it(t/255,0,1),T=Math.max(s,c,P),ee=Math.min(s,c,P),Ce=T-ee;let Be=0,Oe=0;const Ne=(ee+T)/2;return Ce!==0&&(Oe=Ce/(1-Math.abs(T+ee-1)),s===T?Be=(c-P)/Ce:c===T?Be=2+(P-s)/Ce:Be=4+(s-c)/Ce,Be=Be/6+(Be<0?1:0)),[Be*360,Oe*100,Ne*100]}function go(n,e,t){const s=(n%360+360)%360,c=it(e/100,0,1),P=it(t/100,0,1),T=(1-Math.abs(2*P-1))*c,ee=T*(1-Math.abs(s/60%2-1)),Ce=P-T/2;let Be,Oe,Ne;return s>=0&&s<60?[Be,Oe,Ne]=[T,ee,0]:s>=60&&s<120?[Be,Oe,Ne]=[ee,T,0]:s>=120&&s<180?[Be,Oe,Ne]=[0,T,ee]:s>=180&&s<240?[Be,Oe,Ne]=[0,ee,T]:s>=240&&s<300?[Be,Oe,Ne]=[ee,0,T]:[Be,Oe,Ne]=[T,0,ee],[(Be+Ce)*255,(Oe+Ce)*255,(Ne+Ce)*255]}function wo(n,e,t){const s=it(n/255,0,1),c=it(e/255,0,1),P=it(t/255,0,1),T=Math.max(s,c,P),ee=Math.min(s,c,P),Ce=T-ee;let Be;Ce===0?Be=0:T===s?Be=60*(((c-P)/Ce%6+6)%6):T===c?Be=60*((P-s)/Ce+2):Be=60*((s-c)/Ce+4);const Oe=T===0?0:Ce/T,Ne=T;return[Be,Oe*100,Ne*100]}function Zs(n,e,t){const s=Ks(n,360),c=it(e/100,0,1),P=it(t/100,0,1),T=P*c,ee=T*(1-Math.abs(s/60%2-1)),Ce=P-T;let Be,Oe,Ne;return s>=0&&s<60?[Be,Oe,Ne]=[T,ee,0]:s>=60&&s<120?[Be,Oe,Ne]=[ee,T,0]:s>=120&&s<180?[Be,Oe,Ne]=[0,T,ee]:s>=180&&s<240?[Be,Oe,Ne]=[0,ee,T]:s>=240&&s<300?[Be,Oe,Ne]=[ee,0,T]:[Be,Oe,Ne]=[T,0,ee],[(Be+Ce)*255,(Oe+Ce)*255,(Ne+Ce)*255]}function xo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Ut(n){return[n[0],n[1],n[2]]}function Xs(n,e){return[n[0],n[1],n[2],e]}const Po={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:xo,rgb:go},hsv:{hsl:yo,hsv:(n,e,t)=>[n,e,t],rgb:Zs},rgb:{hsl:bo,hsv:wo,rgb:(n,e,t)=>[n,e,t]}};function Tn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function So(n,e){return n===e?e:Ks(n,e)}function Co(n,e,t){var s;const c=Tn(e,t);return[e==="rgb"?it(n[0],0,c[0]):So(n[0],c[0]),it(n[1],0,c[1]),it(n[2],0,c[2]),it((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Qs(n,e,t,s){const c=Tn(e,t),P=Tn(e,s);return n.map((T,ee)=>T/c[ee]*P[ee])}function Eo(n,e,t){const s=Qs(n,e.mode,e.type,"int"),c=Po[e.mode][t.mode](...s);return Qs(c,t.mode,"int",t.type)}function An(n,e){return typeof n!="object"||N(n)?!1:e in n&&typeof n[e]=="number"}class Ge{static black(e="int"){return new Ge([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ge(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return An(e,"r")&&An(e,"g")&&An(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&An(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Co(e,t,s)}getComponents(e,t="int"){return Xs(Eo(Ut(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Bt=W("colp");class ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Bt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Bt("hsv"));const c=e.createElement("div");c.classList.add(Bt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Bt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const T=e.createElement("div");if(T.classList.add(Bt("rgb")),this.textView_=t.textView,T.appendChild(this.textView_.element),this.element.appendChild(T),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Bt("a"));const Ce=e.createElement("div");Ce.classList.add(Bt("ap")),Ce.appendChild(this.alphaViews_.palette.element),ee.appendChild(Ce);const Be=e.createElement("div");Be.classList.add(Bt("at")),Be.appendChild(this.alphaViews_.text.element),ee.appendChild(Be),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function ns(n){const e=_e;return Pe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(Hs)})}function Vt(n){return n?.1:1}function Ot(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Bo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function mt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const To={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Js(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return To[s](t)}function er(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[mt(e[1],255),mt(e[2],255),mt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function tr(n){return e=>{const t=er(e);return t?new Ge(t,"rgb",n):null}}function nr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[mt(e[1],255),mt(e[2],255),mt(e[3],255),mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function sr(n){return e=>{const t=nr(e);return t?new Ge(t,"rgb",n):null}}function rr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Js(e[1]),mt(e[2],100),mt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ir(n){return e=>{const t=rr(e);return t?new Ge(t,"hsl",n):null}}function or(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Js(e[1]),mt(e[2],100),mt(e[3],100),mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ar(n){return e=>{const t=or(e);return t?new Ge(t,"hsl",n):null}}function lr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Ao(n){const e=lr(n);return e?new Ge(e,"rgb","int"):null}function cr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Xe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Xe(parseInt(t[4],16),0,255,0,1)]:null}function Do(n){const e=cr(n);return e?new Ge(e,"rgb","int"):null}function ur(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ge(t,"rgb",n):null}}function pr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ge(t,"rgb",n):null}}const Io=[{parser:lr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:cr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:er,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:nr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:rr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:or,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ur,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:pr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Lo(n){return Io.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function ss(n,e="int"){const t=Lo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const fr={int:[Ao,Do,tr("int"),sr("int"),ir("int"),ar("int"),dr("int"),hr("int")],float:[tr("float"),sr("float"),ir("float"),ar("float"),dr("float"),hr("float")]};function zo(n){const e=fr[n];return t=>{if(typeof t!="string")return Ge.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Ge.black(n)}}function rs(n){const e=fr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function _r(n){const e=it(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function mr(n,e="#"){const t=Ut(n.getComponents("rgb")).map(_r).join("");return`${e}${t}`}function is(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(_r).join("");return`${e}${s}`}function vr(n,e){const t=lt(e==="float"?2:0);return`rgb(${Ut(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Ro(n){return e=>vr(e,n)}function Dn(n,e){const t=lt(2),s=lt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,T)=>(T===3?t:s)(P)).join(", ")})`}function Go(n){return e=>Dn(e,n)}function Uo(n){const e=[lt(0),En,En];return`hsl(${Ut(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Vo(n){const e=[lt(0),En,En,lt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function br(n,e){const t=lt(e==="float"?2:0),s=["r","g","b"];return`{${Ut(n.getComponents("rgb",e)).map((P,T)=>`${s[T]}: ${t(P)}`).join(", ")}}`}function Oo(n){return e=>br(e,n)}function gr(n,e){const t=lt(2),s=lt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((T,ee)=>{const Ce=ee===3?t:s;return`${c[ee]}: ${Ce(T)}`}).join(", ")}}`}function Fo(n){return e=>gr(e,n)}const No=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:mr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:is},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Uo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Ro(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)}],[])];function os(n){return No.reduce((e,t)=>e||(Bo(t.format,n)?t.stringifier:null),null)}const mn=W("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(mn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(mn("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(mn("m")),this.element.appendChild(P),this.markerElem_=P;const T=e.createElement("div");T.classList.add(mn("p")),this.markerElem_.appendChild(T),this.previewElem_=T,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ge([t[0],t[1],t[2],0],"rgb"),c=new Ge([t[0],t[1],t[2],255],"rgb"),P=["to right",Dn(s),Dn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Dn(e);const T=Xe(t[3],0,1,0,100);this.markerElem_.style.left=`${T}%`}onValueChange_(){this.update_()}}class qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,T,ee]=c.getComponents("hsv");this.value.setRawValue(new Ge([P,T,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=pt(Vt(!0),St(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,ee]=s.getComponents("hsv");this.value.setRawValue(new Ge([c,P,T,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){pt(Vt(!0),St(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const en=W("coltxt");function Wo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(en()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(en("m")),this.modeElem_=Wo(e),this.modeElem_.classList.add(en("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(en("mm")),c.appendChild(b(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(en("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),ve(t.colorMode,T=>{this.modeElem_.value=T})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){V(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(en("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ko(n){return lt(n==="float"?2:0)}function Ho(n,e,t){const s=Tn(n,e)[t];return new Xt({min:0,max:s})}function as(n,e,t){return new fn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Vt(!1),parser:e.parser,props:Z.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ko(e.colorType)}),value:$(0,{constraint:Ho(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Yo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=$(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new jo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[as(e,t,0),as(e,t,1),as(e,t,2)];return s.forEach((c,P)=>{pn({primary:this.value,secondary:c.value,forward:T=>T.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(T,ee)=>{const Ce=this.colorMode.rawValue,Be=T.rawValue.getComponents(Ce,this.colorType_);return Be[P]=ee.rawValue,new Ge(Xs(Ut(Be),Be[3]),Ce,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ls=W("hpl");class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ls()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ls("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ls("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=vr(new Ge([t,100,100],"hsv"));const s=Xe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(it(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,T,ee]=c.getComponents("hsv");this.value.setRawValue(new Ge([s,P,T,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=pt(Vt(!1),St(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,ee]=s.getComponents("hsv");this.value.setRawValue(new Ge([c+t,P,T,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){pt(Vt(!1),St(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const cs=W("svp"),wr=64;class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(cs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=wr,s.width=wr,s.classList.add(cs("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(cs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=f(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,T=e.getImageData(0,0,c,P),ee=T.data;for(let Oe=0;Oe<P;Oe++)for(let Ne=0;Ne<c;Ne++){const Ft=Xe(Ne,0,c,0,100),bn=Xe(Oe,0,P,100,0),gn=Zs(s[0],Ft,bn),In=(Oe*c+Ne)*4;ee[In]=gn[0],ee[In+1]=gn[1],ee[In+2]=gn[2],ee[In+3]=255}e.putImageData(T,0,0);const Ce=Xe(s[1],0,100,0,100);this.markerElem_.style.left=`${Ce}%`;const Be=Xe(s[2],0,100,100,0);this.markerElem_.style.top=`${Be}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(e.point.x,0,e.bounds.width,0,100),c=Xe(e.point.y,0,e.bounds.height,100,0),[P,,,T]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ge([P,s,c,T],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ws(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),T=Vt(!1),ee=pt(T,St(e)),Ce=pt(T,hn(e));ee===0&&Ce===0||this.value.setRawValue(new Ge([t,s+ee,c+Ce,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Vt(!1),s=pt(t,St(e)),c=pt(t,hn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new qo(e,{value:this.value,viewProps:this.viewProps}),text:new fn(e,{parser:Pt,baseStep:.1,props:Z.fromObject({draggingScale:.01,formatter:lt(2)}),value:$(0,{constraint:new Xt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&pn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Ge(P,s.rawValue.mode)}}),this.textC_=new Yo(e,{colorType:t.colorType,parser:Pt,value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const us=W("colsw");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(us()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(us("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(us("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=is(e)}onValueChange_(){this.update_()}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps})}}class ds{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new na(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Cn(e,{parser:t.parser,props:Z.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Rs(e,{viewProps:this.viewProps}):null;const c=new ea(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),pn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,T)=>T.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ke(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=te(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sa(n,e){return Ge.isColorObject(n)?Ge.fromObject(n,e):Ge.black(e)}function ra(n){return Ut(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ia(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function oa(n){return new Ge([n>>16&255,n>>8&255,n&255],"rgb")}function aa(n){return new Ge([n>>24&255,n>>16&255,n>>8&255,Xe(n&255,0,255,0,1)],"rgb")}function la(n){return typeof n!="number"?Ge.black():oa(n)}function ca(n){return typeof n!="number"?Ge.black():aa(n)}function ua(n){const e=os(n);return e?(t,s)=>{_n(t,e(s))}:null}function da(n){const e=n?ia:ra;return(t,s)=>{_n(t,e(s))}}function pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function fa(n,e){return(t,s)=>{n?pa(t,s,e):ha(t,s,e)}}function ps(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function _a(n){return n?e=>is(e,"0x"):e=>mr(e,"0x")}function ma(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ma(e))return null;const t=ns(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ps(n.params)?ca:la,equals:Ge.equals,writer:n=>da(ps(n.params))},controller:n=>{const e=ps(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ds(n.document,{colorType:"int",expanded:t??!1,formatter:_a(e),parser:rs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ba(n){return Ge.isRgbaColorObject(n)}function ga(n){return e=>sa(e,n)}function wa(n,e){return t=>n?gr(t,e):br(t,e)}const xa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ge.isColorObject(n))return null;const t=ns(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ga(Ot(n.params)),equals:Ge.equals,writer:n=>fa(ba(n.initialValue),Ot(n.params))},controller:n=>{var e;const t=Ge.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=Ot(n.params))!==null&&e!==void 0?e:"int";return new ds(n.document,{colorType:P,expanded:s??!1,formatter:wa(t,P),parser:rs(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ss(n,Ot(e));if(!t||!os(t))return null;const c=ns(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return zo((e=Ot(n.params))!==null&&e!==void 0?e:"int")},equals:Ge.equals,writer:n=>{const e=ss(n.initialValue,Ot(n.params));if(!e)throw q.shouldNeverHappen();const t=ua(e);if(!t)throw q.notBindable();return t}},controller:n=>{const e=ss(n.initialValue,Ot(n.params));if(!e)throw q.shouldNeverHappen();const t=os(e);if(!t)throw q.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new ds(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:rs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Tt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,T;return(T=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&T!==void 0?T:s});return this.asm_.fromComponents(t)}}const xr=W("pndtxt");class Pa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(xr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(xr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Sa(n,e,t){return new fn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:$(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class hs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Sa(e,t,c)),this.acs_.forEach((s,c)=>{pn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,T)=>{const ee=t.assembly.toComponents(P.rawValue);return ee[c]=T.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Pa(e,{textViews:this.acs_.map(s=>s.view)})}}function yr(n,e){return"step"in n&&!N(n.step)?new Sn(n.step,e):null}function Pr(n){return!N(n.max)&&!N(n.min)?new Xt({max:n.max,min:n.min}):!N(n.max)||!N(n.min)?new Ls({max:n.max,min:n.min}):null}function Ca(n){const e=yt(n,Xt);if(e)return[e.values.get("min"),e.values.get("max")];const t=yt(n,Ls);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ea(n,e){const t=[],s=yr(n,e);s&&t.push(s);const c=Pr(n);c&&t.push(c);const P=ts(n.options);return P&&t.push(P),new an(t)}const ka={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=_e,s=Pe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(kn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s,constraint:n=>Ea(n.params,n.initialValue),writer:n=>_n},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&yt(s,ln);if(c)return new cn(n.document,{props:new Z({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:lt(Mn(s,t.rawValue)),T=s&&yt(s,Xt);return T?new es(n.document,{baseStep:Qt(s),parser:Pt,sliderProps:new Z({maxValue:T.values.value("max"),minValue:T.values.value("min")}),textProps:Z.fromObject({draggingScale:Jt(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new fn(n.document,{baseStep:Qt(s),parser:Pt,props:Z.fromObject({draggingScale:Jt(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class At{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Sr={toComponents:n=>n.getComponents(),fromComponents:n=>new At(...n)},tn=W("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(tn()),t.viewProps.bindClassModifiers(this.element),ve(t.expanded,oe(this.element,tn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(tn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(tn("b")),c.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(tn("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(tn("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}const Dt=W("p2dp");class Ba{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Dt()),t.layout==="popup"&&this.element.classList.add(Dt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Dt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(C,"svg");c.classList.add(Dt("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(C,"line");P.classList.add(Dt("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const T=e.createElementNS(C,"line");T.classList.add(Dt("ax")),T.setAttributeNS(null,"x1","50%"),T.setAttributeNS(null,"y1","0"),T.setAttributeNS(null,"x2","50%"),T.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(T);const ee=e.createElementNS(C,"line");ee.classList.add(Dt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Ce=e.createElement("div");Ce.classList.add(Dt("m")),this.padElement.appendChild(Ce),this.markerElem_=Ce,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Xe(e,-s,+s,0,100),P=Xe(t,-s,+s,0,100),T=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${T}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${T}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Cr(n,e,t){return[pt(e[0],St(n)),pt(e[1],hn(n))*(t?1:-1)]}class Ta{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ba(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Xe(e.point.x,0,e.bounds.width,-s,+s),P=Xe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new At(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ws(e.key)&&e.preventDefault();const[t,s]=Cr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new At(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Cr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Aa{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Rs(e,{viewProps:this.viewProps}):null;const P=new Ta(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new hs(e,{assembly:Sr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),pn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ke(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=te(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class nn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Er={toComponents:n=>n.getComponents(),fromComponents:n=>new nn(...n)};function Da(n){return nn.isObject(n)?new nn(n.x,n.y,n.z):new nn}function Ia(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function La(n,e){return new Tt({assembly:Er,components:[Ct("x"in n?n.x:void 0,e.x),Ct("y"in n?n.y:void 0,e.y),Ct("z"in n?n.z:void 0,e.z)]})}function fs(n,e){return{baseStep:Qt(e),constraint:e,textProps:Z.fromObject({draggingScale:Jt(e,n),formatter:lt(Mn(e,n))})}}const za={id:"input-point3d",type:"input",accept:(n,e)=>{if(!nn.isObject(n))return null;const t=_e,s=Pe(e,{x:t.optional.custom(Mt),y:t.optional.custom(Mt),z:t.optional.custom(Mt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Da,constraint:n=>La(n.params,n.initialValue),equals:nn.equals,writer:n=>Ia},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Tt))throw q.shouldNeverHappen();return new hs(n.document,{assembly:Er,axes:[fs(e.rawValue.x,t.components[0]),fs(e.rawValue.y,t.components[1]),fs(e.rawValue.z,t.components[2])],parser:Pt,value:e,viewProps:n.viewProps})}};class sn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(N(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const kr={toComponents:n=>n.getComponents(),fromComponents:n=>new sn(...n)};function Ra(n){return sn.isObject(n)?new sn(n.x,n.y,n.z,n.w):new sn}function Ga(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ua(n,e){return new Tt({assembly:kr,components:[Ct("x"in n?n.x:void 0,e.x),Ct("y"in n?n.y:void 0,e.y),Ct("z"in n?n.z:void 0,e.z),Ct("w"in n?n.w:void 0,e.w)]})}function Va(n,e){return{baseStep:Qt(e),constraint:e,textProps:Z.fromObject({draggingScale:Jt(e,n),formatter:lt(Mn(e,n))})}}const Oa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!sn.isObject(n))return null;const t=_e,s=Pe(e,{x:t.optional.custom(Mt),y:t.optional.custom(Mt),z:t.optional.custom(Mt),w:t.optional.custom(Mt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ra,constraint:n=>Ua(n.params,n.initialValue),equals:sn.equals,writer:n=>Ga},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Tt))throw q.shouldNeverHappen();return new hs(n.document,{assembly:kr,axes:e.rawValue.getComponents().map((s,c)=>Va(s,t.components[c])),parser:Pt,value:e,viewProps:n.viewProps})}};function Fa(n){const e=[],t=ts(n.options);return t&&e.push(t),new an(e)}const Na={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Pe(e,{options:_e.optional.custom(kn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qs,constraint:n=>Fa(n.params),writer:n=>_n},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&yt(s,ln);return c?new cn(e,{props:new Z({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Cn(e,{parser:P=>P,props:Z.fromObject({formatter:Zn}),value:t,viewProps:n.viewProps})}},vn={monitor:{defaultInterval:200,defaultLineCount:3}},Mr=W("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Mr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Mr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class _s{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Br=W("sgl");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Br()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Br("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ms{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Wa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Pe(e,{lineCount:_e.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Us},controller:n=>{var e;return n.value.rawValue.length===1?new ms(n.document,{formatter:Vs,value:n.value,viewProps:n.viewProps}):new _s(n.document,{formatter:Vs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},It=W("grl");class ja{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(It()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(C,"svg");s.classList.add(It("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(C,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(It("t"),W("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Oe,Ne)=>{if(Oe===void 0)return;const Ft=Xe(Ne,0,t,0,e.width),bn=Xe(Oe,s,c,e.height,0);P.push([Ft,bn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const T=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){T.classList.remove(It("t","a"));return}const Ce=Xe(this.cursor_.rawValue,0,t,0,e.width),Be=Xe(ee,s,c,e.height,0);T.style.left=`${Ce}px`,T.style.top=`${Be}px`,T.textContent=`${this.formatter_(ee)}`,T.classList.contains(It("t","a"))||(T.classList.add(It("t","a"),It("t","in")),r(T),T.classList.remove(It("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ka{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=$(-1),this.view=new ja(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Rt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Xe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Xe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function vs(n){return"format"in n&&!N(n.format)?n.format:lt(2)}function Ha(n){var e;return n.value.rawValue.length===1?new ms(n.document,{formatter:vs(n.params),value:n.value,viewProps:n.viewProps}):new _s(n.document,{formatter:vs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ya(n){var e,t,s;return new Ka(n.document,{formatter:vs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,props:Z.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Tr(n){return"view"in n&&n.view==="graph"}const Za={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=_e,s=Pe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Tr(n)?64:1,reader:n=>$s},controller:n=>Tr(n.params)?Ya(n):Ha(n)},Xa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=_e,s=Pe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new _s(n.document,{formatter:Zn,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ms(n.document,{formatter:Zn,value:t,viewProps:n.viewProps})}};function Qa(n,e){var t;const s=n.accept(e.target.read(),e.params);if(N(s))return null;const c=_e,P={target:e.target,initialValue:s.initialValue,params:s.params},T=n.binding.reader(P),ee=n.binding.constraint?n.binding.constraint(P):void 0,Ce=$(T(s.initialValue),{constraint:ee,equals:n.binding.equals}),Be=new Pi({reader:T,target:e.target,value:Ce,writer:n.binding.writer(P)}),Oe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,Ft=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Be.value,viewProps:p.create({disabled:Oe,hidden:Ne})});return new Fe(e.document,{binding:Be,blade:Ae(),props:Z.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Ft})}function Ja(n,e){return e===0?new xi:new yi(n,e??vn.monitor.defaultInterval)}function el(n,e){var t,s,c;const P=_e,T=n.accept(e.target.read(),e.params);if(N(T))return null;const ee={target:e.target,initialValue:T.initialValue,params:T.params},Ce=n.binding.reader(ee),Be=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(T.params))!==null&&s!==void 0?s:1,Oe=P.optional.number(e.params.interval).value,Ne=new ki({reader:Ce,target:e.target,ticker:Ja(e.document,Oe),value:Si(Be)}),Ft=P.optional.boolean(e.params.disabled).value,bn=P.optional.boolean(e.params.hidden).value,gn=n.controller({document:e.document,params:T.params,value:Ne.value,viewProps:p.create({disabled:Ft,hidden:bn})});return new re(e.document,{binding:Ne,blade:Ae(),props:Z.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:gn})}class tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(N(c))throw new q({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((T,ee)=>T??Qa(ee,{document:e,target:t,params:s}),null);if(P)return P;throw new q({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,T)=>P??el(T,{document:e,params:s,target:t}),null);if(c)return c;throw new q({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??wi(P,{document:e,params:t}),null);if(!s)throw new q({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Fe)return new Ye(e);if(e instanceof re)return new j(e);if(e instanceof He)return new ge(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw q.shouldNeverHappen();return t}}function nl(){const n=new tl;return[ll,za,Oa,Na,ka,ya,xa,va,mo,Wa,Xa,Za,we,Wn,Zt,Ds].forEach(e=>{n.register(e)}),n}function sl(n){return At.isObject(n)?new At(n.x,n.y):new At}function rl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Ct(n,e){if(!n)return;const t=[],s=yr(n,e);s&&t.push(s);const c=Pr(n);return c&&t.push(c),new an(t)}function il(n,e){return new Tt({assembly:Sr,components:[Ct("x"in n?n.x:void 0,e.x),Ct("y"in n?n.y:void 0,e.y)]})}function Ar(n,e){const[t,s]=n?Ca(n):[];if(!N(t)||!N(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Qt(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ol(n,e){const t=e instanceof Tt?e.components[0]:void 0,s=e instanceof Tt?e.components[1]:void 0,c=Ar(t,n.x),P=Ar(s,n.y);return Math.max(c,P)}function Dr(n,e){return{baseStep:Qt(e),constraint:e,textProps:Z.fromObject({draggingScale:Jt(e,n),formatter:lt(Mn(e,n))})}}function al(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ll={id:"input-point2d",type:"input",accept:(n,e)=>{if(!At.isObject(n))return null;const t=_e,s=Pe(e,{expanded:t.optional.boolean,picker:t.optional.custom(Hs),x:t.optional.custom(Mt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sl,constraint:n=>il(n.params,n.initialValue),equals:At.equals,writer:n=>rl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Tt))throw q.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Aa(e,{axes:[Dr(t.rawValue.x,s.components[0]),Dr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:al(n.params),maxValue:ol(t.rawValue,s),parser:Pt,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class Ir extends w{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Lr extends w{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class zr extends w{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const cl=function(){return{id:"list",type:"blade",accept(n){const e=_e,t=Pe(n,{options:e.required.custom(kn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new ln(Ys(n.params.options)),t=$(n.params.value,{constraint:e}),s=new cn(n.document,{props:new Z({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new xt(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof xt)||!(n.controller.valueController instanceof cn)?null:new Ir(n.controller)}}}();function ul(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function dl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class pl extends ke{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Fe).map(s=>s.binding);dl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Fe).map(t=>t.binding.target);return ul(e)}refresh(){this.controller_.rackController.rack.find(Fe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(re).forEach(e=>{e.binding.read()})}}class hl extends Ht{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const fl={id:"slider",type:"blade",accept(n){const e=_e,t=Pe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Xt({max:n.params.max,min:n.params.min}),P=new es(n.document,{baseStep:1,parser:Pt,sliderProps:new Z({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:Z.fromObject({draggingScale:Jt(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ro}),value:$(s,{constraint:c}),viewProps:n.viewProps});return new xt(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof xt)||!(n.controller.valueController instanceof es)?null:new Lr(n.controller)}},_l=function(){return{id:"text",type:"blade",accept(n){const e=_e,t=Pe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Cn(n.document,{parser:n.params.parse,props:Z.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:$(n.params.value),viewProps:n.viewProps});return new xt(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof xt)||!(n.controller.valueController instanceof Cn)?null:new zr(n.controller)}}}();function ml(n){const e=n.createElement("div");return e.classList.add(W("dfw")()),n.body&&n.body.appendChild(e),e}function Rr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends pl{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),T=nl(),ee=new hl(P,{expanded:c.expanded,blade:Ae(),props:Z.fromObject({title:c.title}),viewProps:p.create()});super(ee,T),this.pool_=T,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:ml(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw q.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw q.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Rr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Rr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[fl,cl,Ds,_l]})}}const bl=new E("3.1.10");_.BladeApi=w,_.ButtonApi=ae,_.FolderApi=ke,_.InputBindingApi=Ye,_.ListApi=Ir,_.MonitorBindingApi=j,_.Pane=vl,_.SeparatorApi=ut,_.SliderApi=Lr,_.TabApi=Bs,_.TabPageApi=Ms,_.TextApi=zr,_.TpChangeEvent=B,_.VERSION=bl,Object.defineProperty(_,"__esModule",{value:!0})})})(ws,ws.exports);var ql=ws.exports;const Wl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Kr=`// 2DGS render — vertex+fragment.
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
// fs_main calls this; a discard inside culls the fragment.
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
`,jl=`const WG_SIZE = 256u;
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
}`,Kl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
}`,ci=32,xs=1,ys=2,Hr=4,Yr=512,Zr=1024,Xl=0,Lt=new ArrayBuffer(ci),dt={canvas_size:new Uint32Array(Lt,0,2),accel_flags:new Uint32Array(Lt,8,1),feature_mode:new Uint32Array(Lt,12,1),gaussian_scaling:new Float32Array(Lt,16,1),sh_bias:new Float32Array(Lt,20,1),color_K:new Uint32Array(Lt,24,1),walltime:new Float32Array(Lt,28,1)};function Ql(o){dt.canvas_size[0]=o.width>>>0,dt.canvas_size[1]=o.height>>>0,dt.accel_flags[0]=(o.accel_flags??xs|ys)>>>0,dt.feature_mode[0]=(o.feature_mode??Xl)>>>0,dt.gaussian_scaling[0]=o.gaussian_scaling??1,dt.sh_bias[0]=o.sh_bias??.5,dt.color_K[0]=(o.color_K??0)>>>0,dt.walltime[0]=o.walltime??0}function ui(o,l){o.queue.writeBuffer(l,0,Lt)}function $n(o,l,_){_&&o&&l&&ui(o,l)}function Ln(o,l,_,E,w=!0){dt.canvas_size[0]=o>>>0,dt.canvas_size[1]=l>>>0,$n(_??null,E??null,w)}function Xr(o,l,_,E=!0){dt.gaussian_scaling[0]=o,$n(l??null,_??null,E)}function Qr(o,l,_,E=!0){dt.sh_bias[0]=o,$n(l??null,_??null,E)}function Rn(o,l,_,E=!0){let w=dt.accel_flags[0];o.oac!==void 0&&(w=o.oac?w|xs:w&~xs),o.spr!==void 0&&(w=o.spr?w|ys:w&~ys),o.bfc!==void 0&&(w=o.bfc?w|Hr:w&~Hr),o.hypLegacy!==void 0&&(w=o.hypLegacy?w|Yr:w&~Yr),o.legacyPos!==void 0&&(w=o.legacyPos?w|Zr:w&~Zr),dt.accel_flags[0]=w>>>0,$n(l??null,_??null,E)}const Jl=256;function Jr(o,l){const _=[],E=[];let w=!0;for(const k of o.split(`
`)){const B=k.trim();let L;if((L=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const D=!!l[L[1]];E.push({parent:w,taken:D}),w=w&&D;continue}if(/^\/\/#else\s*$/.test(B)){const D=E[E.length-1];if(D===void 0)throw new Error("preprocessWGSL: #else without #if");w=D.parent&&!D.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const D=E.pop();if(D===void 0)throw new Error("preprocessWGSL: #endif without #if");w=D.parent;continue}w&&_.push(k)}if(E.length!==0)throw new Error("preprocessWGSL: unterminated #if");return _.join(`
`)}const ec=ci,tc=8,nc=96,sc=12,Es=8,Et=1<<Es,$t=256,On=32/Es,rc=0,ei=On&1;function ti(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ic(o,l){const _=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[_]}),w=k=>o.createComputePipeline({layout:E,compute:{module:l,entryPoint:k,constants:{WG_SIZE:$t}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:_}}function oc(o,l,_){const E=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[E]}),B=o.createPipelineLayout({bindGroupLayouts:[w]}),L=[];for(let D=0;D<On;D++){const z={PASS_ID:D+rc,RS_RADIX_LOG2:Es,RS_RADIX_SIZE:Et};L.push({localHistogram:o.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:z}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:_,entryPoint:"scatter_elements",constants:z}})})}return{passes:L,localHistogramBindGroupLayout:E,scatterBindGroupLayout:w}}function ac(o){const l=o.createShaderModule({label:"local histogram",code:Yl}),_=o.createShaderModule({label:"scatter",code:Hl}),E=o.createShaderModule({label:"blelloch prefix",code:Zl}),w=ic(o,E),k=oc(o,l,_);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function lc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=l.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(k,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:_,sampler:E,rectsBuffer:w,texParamsBuffer:k,meta:B}}class cc{constructor(l,_,E,w,k,B=null,L={}){O(this,"device");O(this,"pc");O(this,"presentationFormat");O(this,"camera_buffer");O(this,"render_settings_buffer");O(this,"draw_indirect_buffer");O(this,"splat_2d_buffer");O(this,"querySet");O(this,"resolveBuffer");O(this,"resultBuffer");O(this,"queriesPerFrame",tc);O(this,"queryCapacityFrames",200);O(this,"sort_prefixBindGroup");O(this,"sort_pipelines");O(this,"sort_localHistogramBindGroups");O(this,"sort_scatterBindGroups");O(this,"lastFrame",0);O(this,"frameCount",0);O(this,"preprocessPipeline");O(this,"cullPipeline");O(this,"renderPipeline");O(this,"indirectPipeline");O(this,"renderShaderModule");O(this,"betaKernel",1);O(this,"fetchById");O(this,"octBound");O(this,"acc16");O(this,"accTexture",null);O(this,"accView",null);O(this,"accW",0);O(this,"accH",0);O(this,"legacyRenderPipeline",null);O(this,"varyingsPipeline",null);O(this,"legacyRenderer",!1);O(this,"accResolvePipeline",null);O(this,"accResolveBgl",null);O(this,"accResolveBindGroup",null);O(this,"renderSettingsBgl");O(this,"renderSplatsBgl");O(this,"atlasBgl");O(this,"sort_info_buffer");O(this,"sort_ping_pong");O(this,"crsBg");O(this,"gsBg");O(this,"cullBg2");O(this,"preprocessBg1");O(this,"renderSplatsBindGroup");O(this,"renderSettingsBindGroup");O(this,"atlasBindGroup");O(this,"indirectBindGroup");O(this,"sh_solvers_buffer");O(this,"bfcParamsBuffer");O(this,"bfcBindGroupLayout");O(this,"bfcBindGroup");O(this,"bgColor",[0,0,0,0]);O(this,"showPerfDialogNext",!1);O(this,"requestReorderNextFrame",!1);O(this,"reorderInFlight",!1);O(this,"downloadOnceNextRead",!1);O(this,"downloadOnceFileName","fps_metrics");O(this,"allFrameTimes",[]);O(this,"lastStageBreakdownMs",null);O(this,"timeQueryEnabled");O(this,"atlas");O(this,"atlasParamsBuffer");O(this,"_atlasEnabled",!0);O(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,ft(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const D=k.includes("timestamp-query");this.timeQueryEnabled=D,D&&ft("⏰ using timestamp-query"),this.pc=l,this.device=_,this.presentationFormat=E,this.camera_buffer=w,this.atlas=B??lc(_),this.atlasParamsBuffer=_.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),_.addEventListener("uncapturederror",Ee=>{console.error("A WebGPU error was not captured:",Ee.error)}),this._setupTimestampQueries(),this._setupBuffers();const z=(Math.floor((this.pc.num_points+$t-1)/$t)+1)*$t,F=Math.ceil(z/$t);console.log(`keys count adjusted: ${z}`),console.log(`key size: ${this.pc.num_points}`);const N=_.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ac(_);const R=[ti(z,_),ti(z,_)],X=_.createBuffer({label:"workgroup histograms",size:F*Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),se=_.createBuffer({label:"workgroup prefixes",size:F*Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=_.createBuffer({label:"digit base",size:Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(F/$t),ae=Math.ceil(Q/$t),K=_.createBuffer({label:"prefix l0 sums",size:Q*Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=_.createBuffer({label:"prefix l0 offsets",size:Q*Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=_.createBuffer({label:"prefix l1 sums",size:ae*Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ce=_.createBuffer({label:"prefix l1 offsets",size:ae*Et*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=_.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:se}},{binding:3,resource:{buffer:K}},{binding:4,resource:{buffer:Y}},{binding:5,resource:{buffer:W}},{binding:6,resource:{buffer:ce}},{binding:7,resource:{buffer:q}}]}),this.sort_localHistogramBindGroups=[_.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:R[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),_.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:R[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[_.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:R[0].sort_depths_buffer}},{binding:3,resource:{buffer:R[1].sort_depths_buffer}},{binding:4,resource:{buffer:R[0].sort_indices_buffer}},{binding:5,resource:{buffer:R[1].sort_indices_buffer}},{binding:6,resource:{buffer:se}}]}),_.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:R[1].sort_depths_buffer}},{binding:3,resource:{buffer:R[0].sort_depths_buffer}},{binding:4,resource:{buffer:R[1].sort_indices_buffer}},{binding:5,resource:{buffer:R[0].sort_indices_buffer}},{binding:6,resource:{buffer:se}}]})],this.sort_info_buffer=N,this.sort_ping_pong=R;const Me=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ve=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ye=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:Me,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ve,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ye,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const oe=this.device.createShaderModule({code:jl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:oe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const fe=this.device.createShaderModule({code:Kl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[Me,ve,ue,this.bfcBindGroupLayout]}),compute:{module:fe,entryPoint:"surfel_cull"}});const be=this.device.createShaderModule({code:Wl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Me,ye]}),compute:{module:be,entryPoint:"preprocess"}});const ze=this.device.createShaderModule({label:"render_2dgs",code:Jr(Kr,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ze.getCompilationInfo().then(Ee=>{Ee.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ee.messages.forEach(de=>{(de.type==="error"?console.error:de.type==="warning"?console.warn:console.log)(`${de.type} (line ${de.lineNum}:${de.linePos}): ${de.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Ve=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),H=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,J=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:H,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),$=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Z=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Ve,J,$]}),vertex:{module:ze,entryPoint:"vs_main"},fragment:{module:ze,entryPoint:"fs_main",constants:{BETA_KERNEL:Z},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const $e=(Ee,de,pe)=>{const De=this.device.createShaderModule({label:`render_2dgs (${Ee})`,code:Jr(Kr,{FETCH_BY_ID:de,OCT:pe})});return this.device.createRenderPipeline({label:`render_2dgs_${Ee}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Ve,J,$]}),vertex:{module:De,entryPoint:"vs_main"},fragment:{module:De,entryPoint:"fs_main",constants:{BETA_KERNEL:Z},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=$e("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?$e("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Ee=>{Ee?console.error("[render_2dgs] pipeline create validation error:",Ee.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Ve,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:J,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ei].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:$,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ze,this.betaKernel=Z,this.renderSettingsBgl=Ve,this.renderSplatsBgl=J,this.atlasBgl=$}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(l,_){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,_[0],_[1],_[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),_=new Uint32Array(l),E=new Float32Array(l);_[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,_[1]=this.atlas.meta.layer_h|0,E[2]=this.atlas.meta.uv_extent||0,_[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureAccResources(l,_){var E;if(this.accResolvePipeline===null){const w=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,k=this.device.createShaderModule({label:"acc16_resolve",code:w});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:k,entryPoint:"vs_main"},fragment:{module:k,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===l&&this.accH===_||((E=this.accTexture)==null||E.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,l),height:Math.max(1,_),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=l,this.accH=_)}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=l,bs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l,this._mipMode))}setFetchById(l){l!==this.fetchById&&(this.fetchById=l,ft(`[render_2dgs] fragment inputs: ${l?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(l){if(l===this.legacyRenderer)return;this.legacyRenderer=l,Rn({legacyPos:l,hypLegacy:l},this.device,this.render_settings_buffer);const _=!l&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([_])),ft(`[render_2dgs] renderer: ${l?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(l){this.atlas.meta.format!==4294967295&&(this._mipMode=l?1:0,bs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var l;return(((l=this.atlas.meta.mip_bytes)==null?void 0:l.length)??1)>1}async debugReadSortedIndices(l=30){const _=Math.max(0,Math.min(l,this.pc.num_points)),E=_*Uint32Array.BYTES_PER_ELEMENT;if(E===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[ei].sort_indices_buffer,0,w,0,E),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const B=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",_,"):",Array.from(B)),w.unmap()}frame(l,_,E=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=E&&this.timeQueryEnabled;{l.clearBuffer(this.sort_info_buffer,0,4);const L={label:"cull"};B&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const D=l.beginComputePass(L);D.setPipeline(this.cullPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.gsBg),D.setBindGroup(2,this.cullBg2),D.setBindGroup(3,this.bfcBindGroup);const z=Math.ceil(this.pc.num_points/Jl);D.dispatchWorkgroups(z,1,1),D.end()}{const L=l.beginComputePass({label:"calculate indirect dispatch"});L.setPipeline(this.indirectPipeline),L.setBindGroup(0,this.indirectBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:"preprocess"};B&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const D=l.beginComputePass(L);D.setPipeline(this.preprocessPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.preprocessBg1),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),D.end()}for(let L=0;L<On;L++){const D=L&1,z=this.sort_pipelines.passes[L],F=this.sort_localHistogramBindGroups[D],N=this.sort_scatterBindGroups[D];{const R={label:`upsweep_round${L}`};B&&L==0&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const X=l.beginComputePass(R);X.setPipeline(z.localHistogram),X.setBindGroup(0,F),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const R=l.beginComputePass({label:`prefix_round${L} - l0TileScan`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=l.beginComputePass({label:`prefix_round${L} - l1TileScanOnL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=l.beginComputePass({label:`prefix_round${L} - l1ScanSums`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,Et,1),R.end()}{const R=l.beginComputePass({label:`prefix_round${L} - addL1ToL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=l.beginComputePass({label:`prefix_round${L} - addL0ToElems`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=l.beginComputePass({label:`prefix_round${L} - computeDigitBase`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,1,1),R.end()}{const R={label:`scatter_round${L}`};B&&L==On-1&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const X=l.beginComputePass(R);X.setPipeline(z.scatterElements),X.setBindGroup(0,N),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{let L=_;this.acc16&&(this.ensureAccResources(dt.canvas_size[0],dt.canvas_size[1]),L=this.accView);const D={label:"render",colorAttachments:[{view:L,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(D.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,...this.acc16?{}:{endOfPassWriteIndex:k+7}});const z=l.beginRenderPass(D);if(z.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end(),this.acc16){const F={label:"acc16_resolve",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(F.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+7});const N=l.beginRenderPass(F);N.setPipeline(this.accResolvePipeline),N.setBindGroup(0,this.accResolveBindGroup),N.draw(3),N.end()}}this.frameCount++}async readPerfMetrics(l){const _=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const E=this.device.createCommandEncoder({label:"timestamp resolve encoder"});E.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),E.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([E.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),L=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,D=Array.from({length:w.length},()=>[]);let z=0;for(let ae=0;ae<B;ae++){const K=(L+ae)%this.queryCapacityFrames,Y=K*this.queriesPerFrame;let W=!0;for(let ce=0;ce<w.length;ce++){const[Me,ve,ue]=w[ce];if(k[Y+ue]===0n||k[Y+ve]===0n||k[Y+ve]<k[Y+ue]){W=!1;break}}if(!W){!_&&K%60===0&&console.debug("[timestamp] frame slot",K,"contains unwritten (0) timestamps, skipped in stats");continue}z++;for(let ce=0;ce<w.length;ce++){const[Me,ve,ue]=w[ce],ye=Number(k[Y+ue]),oe=Number(k[Y+ve]);D[ce].push((oe-ye)/1e6)}}if(z===0){this.resultBuffer.unmap(),_||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...D[0]);const F=[];let N=0,R=0,X=0;for(let ae=0;ae<w.length;ae++){const K=w[ae][0],Y=D[ae];let W=0;if(K==="Total"){const ce=this.allFrameTimes;W=ce.reduce((ue,ye)=>ue+ye,0)/ce.length;const Me=[...ce].sort((ue,ye)=>ue-ye);N=Me[Math.floor(Me.length*.99)]||0;const ve=ce.reduce((ue,ye)=>ue+Math.pow(ye-W,2),0)/ce.length;R=Math.sqrt(ve),X=W}else W=Y.reduce((ce,Me)=>ce+Me,0)/Y.length;F.push([K,W])}this.lastFrame+=this.frameCount,this.frameCount=0;const se=Object.fromEntries(F);this.lastStageBreakdownMs={cull:se.Culling??0,preprocess:se.Preprocess??0,sort:se.Sort??0,render:se.Render??0,total:se.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+F.map(([ae,K])=>`${ae}: ${K.toFixed(3)}ms`).join(`
`)+`
Total P99: ${N.toFixed(3)}ms
Total STD: ${R.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(_||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ae=`Stage,ms
`,K=F.map(([ce,Me])=>`${ce},${Me.toFixed(3)}`).join(`
`),Y="data:text/csv;charset=utf-8,"+encodeURIComponent(ae+K),W=document.createElement("a");W.href=Y,W.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(W),W.click(),W.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ec,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),_=l?l.width:1,E=l?l.height:1;Ql({width:_,height:E,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ui(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:yn(this.pc.num_points*nc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:yn(this.pc.num_points*sc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const _=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=_.length>0?_:this.downloadOnceFileName}else{const _=new Date,E=`${_.getFullYear()}${String(_.getMonth()+1).padStart(2,"0")}${String(_.getDate()).padStart(2,"0")}_${String(_.getHours()).padStart(2,"0")}${String(_.getMinutes()).padStart(2,"0")}${String(_.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${E}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function uc(o,l){return 2*Math.atan(l/(2*o))}function dc(o,l,_,E){const w=Math.tan(E/2),k=Math.tan(_/2),B=w*o,L=-B,D=k*o,z=-D,F=at.create();return F[0]=2*o/(D-z),F[5]=-2*o/(B-L),F[2]=(D+z)/(D-z),F[6]=(B+L)/(B-L),F[14]=1,F[10]=l/(l-o),F[11]=-(l*o)/(l-o),at.transpose(F,F),F}async function pc(o){ft(`loading scene camera file... : ${o}`);const _=await(await fetch(o)).json();return ft(`loaded cameras count: ${_.length}`),_.map(E=>{const w=I.clone(E.position),k=vt.create(...E.rotation.flat()),B=k[0],L=k[4],D=k[8],z=k[1],F=k[5],N=k[9],R=k[2],X=k[6],se=k[10];B*(F*se-N*X)-L*(z*se-N*R)+D*(z*X-F*R)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const Q=at.fromMat3(k);return{position:w,rotation:Q,img_name:E.img_name,id:E.id}})}const hc=4*2,fc=4*16,di=4*fc+2*hc;function _c(o){return o.createBuffer({label:"camera uniform",size:di,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Nt=new Float32Array(di/Float32Array.BYTES_PER_ELEMENT),Fn=class Fn{constructor(l,_){O(this,"uniform_buffer");O(this,"position",I.create());O(this,"rotation",at.create());O(this,"fovY",45/180*Math.PI);O(this,"fovX");O(this,"focal",$r.create());O(this,"viewport",$r.create());O(this,"view_matrix",at.identity());O(this,"view_inv_matrix",at.identity());O(this,"proj_matrix",at.identity());O(this,"proj_inv_matrix",at.identity());O(this,"_negPos",I.create());O(this,"look",I.create(0,0,1));O(this,"up",I.create(0,1,0));O(this,"right",I.create(1,0,0));this.canvas=l,this.device=_,this.uniform_buffer=_c(_),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=uc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=dc(.01,100,this.fovX,this.fovY),at.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],at.copy(this.rotation,this.view_matrix),at.translate(this.view_matrix,this._negPos,this.view_matrix),at.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(Fn.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;Nt.set(this.view_matrix,l),l+=16,Nt.set(this.view_inv_matrix,l),l+=16,Nt.set(this.proj_matrix,l),l+=16,Nt.set(this.proj_inv_matrix,l),l+=16,Nt.set(this.viewport,l),l+=2,Nt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Nt)}set_preset(l){I.copy(l.position,this.position),at.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};O(Fn,"Z_AXIS",I.create(0,0,1));let Ps=Fn;const mc=I.create(1,0,0),vc=I.create(0,1,0);function bc(o,l){const _=o[0],E=o[4],w=o[8],k=o[1],B=o[5],L=o[9],D=o[2],z=o[6],F=o[10],N=_+B+F;let R,X,se,q;if(N>0){const Q=.5/Math.sqrt(N+1);R=.25/Q,X=(z-L)*Q,se=(w-D)*Q,q=(k-E)*Q}else if(_>B&&_>F){const Q=2*Math.sqrt(1+_-B-F);R=(z-L)/Q,X=.25*Q,se=(E+k)/Q,q=(w+D)/Q}else if(B>F){const Q=2*Math.sqrt(1+B-_-F);R=(w-D)/Q,X=(E+k)/Q,se=.25*Q,q=(L+z)/Q}else{const Q=2*Math.sqrt(1+F-_-B);R=(k-E)/Q,X=(w+D)/Q,se=(L+z)/Q,q=.25*Q}return l[0]=X,l[1]=se,l[2]=q,l[3]=R,l}class gc{constructor(l){O(this,"element");O(this,"enabled",!0);O(this,"center",I.create(0,0,0));O(this,"up",I.create(0,1,0));O(this,"rotation",[0,0]);O(this,"shift",[0,0]);O(this,"scroll",0);O(this,"speed",.1);O(this,"sensitivity",.08);O(this,"leftPressed",!1);O(this,"rightPressed",!1);O(this,"leftDragPans",!1);O(this,"lastX",0);O(this,"lastY",0);O(this,"touches",new Map);O(this,"lastTouchCenter",null);O(this,"lastPinchDistance",null);O(this,"lastTwoFingerAngle",null);O(this,"lastTouchCount",0);O(this,"roll",0);O(this,"_dir",I.create());O(this,"_right",I.create());O(this,"_upCam",I.create());O(this,"_scratch",I.create());O(this,"_qY",ct.create());O(this,"_qX",ct.create());O(this,"_qRot",ct.create());O(this,"_qLocal",ct.create());O(this,"_qWorldToCam",ct.create());O(this,"_scratchMat3",vt.create());O(this,"bboxMin",null);O(this,"bboxMax",null);O(this,"anchor",I.create(0,0,0));O(this,"downCallback",l=>{var _,E,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(E=(_=l.target)==null?void 0:_.setPointerCapture)==null||E.call(_,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});O(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const _=l.pageX-this.lastX,E=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=_,this.rotation[1]-=E):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=_,this.shift[0]+=E)});O(this,"upCallback",l=>{var _,E,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(E=(_=l.target)==null?void 0:_.releasePointerCapture)==null||E.call(_,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});O(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let _=l.deltaY;l.deltaMode===1?_*=16:l.deltaMode===2&&(_*=100),this.scroll+=_*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",_=>_.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const _=this.camera.rotation;I.set(_[2],_[6],_[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const _=l.rotation;_[0]=this._right[0],_[1]=this._upCam[0],_[2]=this._scratch[0],_[3]=0,_[4]=this._right[1],_[5]=this._upCam[1],_[6]=this._scratch[1],_[7]=0,_[8]=this._right[2],_[9]=this._upCam[2],_[10]=this._scratch[2],_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,l.update_buffer()}setBbox(l,_){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(_[0],_[1],_[2]);const E=(l[0]+_[0])*.5,w=(l[1]+_[1])*.5,k=(l[2]+_[2])*.5;I.set(E,w,k,this.center),I.set(E,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let _=null;if(this.bboxMin&&this.bboxMax){let E=-1/0,w=1/0,k=!1;for(let B=0;B<3;B++){const L=this._dir[B],D=this.bboxMin[B]-this.camera.position[B],z=this.bboxMax[B]-this.camera.position[B];if(Math.abs(L)>1e-8){const F=D/L,N=z/L;E=Math.max(E,Math.min(F,N)),w=Math.min(w,Math.max(F,N))}else if(D>0||z<0){k=!0;break}}!k&&E<=w&&w>0&&(_=(Math.max(E,0)+w)*.5)}if(_===null||!isFinite(_)||_<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const E=I.dot(this._scratch,this._dir);_=E>.001?E:I.length(this._scratch)}_=Math.max(.1,_),I.scale(this._dir,_,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const _=this.touches.values().next().value;if(this.lastTouchCenter){const E=_.x-this.lastTouchCenter[0],w=_.y-this.lastTouchCenter[1];this.rotation[0]+=E*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[_.x,_.y]}else if(l===2){const _=Array.from(this.touches.values()),E=(_[0].x+_[1].x)*.5,w=(_[0].y+_[1].y)*.5,k=_[1].x-_[0].x,B=_[1].y-_[0].y,L=Math.hypot(k,B),D=Math.atan2(B,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const z=E-this.lastTouchCenter[0],F=w-this.lastTouchCenter[1],N=Math.hypot(z,F),R=Math.abs(L-this.lastPinchDistance);let X=D-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),N>.5&&(this.shift[1]-=z,this.shift[0]+=F),R>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(L/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=-X)}this.lastTouchCenter=[E,w],this.lastPinchDistance=L,this.lastTwoFingerAngle=D}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const _=this.camera;{const q=_.rotation;this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let E=!1;if(Math.abs(this.roll)>1e-4){const q=_.rotation;I.set(q[2],q[6],q[10],this._scratch),I.normalize(this._scratch,this._scratch),ct.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,E=!0}I.subtract(_.position,this.center,this._dir);let w=I.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);I.scale(this._dir,k/w,this._dir),w=k;const B=_.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const L=I.create(B[1],B[5],B[9]);I.normalize(L,L),I.length(L)<1e-6&&I.set(0,1,0,L);const D=l*this.speed*.1*w,z=this.shift[1]*D,F=-this.shift[0]*D;I.scale(this._right,z,this._scratch),I.add(this.center,this._scratch,this.center),I.add(_.position,this._scratch,_.position),I.scale(L,F,this._scratch),I.add(this.center,this._scratch,this.center),I.add(_.position,this._scratch,_.position);const N=this.rotation[0]*l*this.sensitivity,R=this.rotation[1]*l*this.sensitivity;if(Math.abs(N)>1e-5||Math.abs(R)>1e-5||E){const q=_.rotation;bc(q,this._qWorldToCam),ct.fromAxisAngle(mc,-R,this._qX),ct.fromAxisAngle(vc,-N,this._qY),ct.multiply(this._qX,this._qY,this._qLocal),ct.normalize(this._qLocal,this._qLocal),ct.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ct.normalize(this._qWorldToCam,this._qWorldToCam),vt.fromQuat(this._qWorldToCam,this._scratchMat3),at.fromMat3(this._scratchMat3,_.rotation);const Q=_.rotation,ae=Q[2],K=Q[6],Y=Q[10];_.position[0]=this.center[0]-ae*w,_.position[1]=this.center[1]-K*w,_.position[2]=this.center[2]-Y*w,this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,_.position);_.update_buffer();const se=Math.pow(.8,l*60);this.rotation[0]*=se,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=se,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=se,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=se,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=se,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function pi(o){const l=I.create();for(const _ of o)I.add(l,_,l);return I.scale(l,1/Math.max(o.length,1),l)}function hi(o,l){const _=vt.create();vt.inverse(o,_);const E=I.create();return E[0]=_[0]*l[0]+_[4]*l[1]+_[8]*l[2],E[1]=_[1]*l[0]+_[5]*l[1]+_[9]*l[2],E[2]=_[2]*l[0]+_[6]*l[1]+_[10]*l[2],E}function wc(o){const l=o.slice(),_=[1,0,0,0,1,0,0,0,1],E=(D,z)=>l[D*3+z],w=(D,z,F)=>{l[D*3+z]=F},k=(D,z)=>_[D*3+z],B=(D,z,F)=>{_[D*3+z]=F};for(let D=0;D<30;D++){let z=0,F=1,N=Math.abs(E(0,1));if(Math.abs(E(0,2))>N&&(z=0,F=2,N=Math.abs(E(0,2))),Math.abs(E(1,2))>N&&(z=1,F=2,N=Math.abs(E(1,2))),N<1e-12)break;const R=E(z,z),X=E(F,F),se=E(z,F);let q;Math.abs(R-X)<1e-30?q=Math.PI/4*Math.sign(se):q=.5*Math.atan2(2*se,R-X);const Q=Math.cos(q),ae=Math.sin(q);for(let K=0;K<3;K++){const Y=E(K,z),W=E(K,F);w(K,z,Q*Y+ae*W),w(K,F,-ae*Y+Q*W)}for(let K=0;K<3;K++){const Y=E(z,K),W=E(F,K);w(z,K,Q*Y+ae*W),w(F,K,-ae*Y+Q*W)}for(let K=0;K<3;K++){const Y=k(K,z),W=k(K,F);B(K,z,Q*Y+ae*W),B(K,F,-ae*Y+Q*W)}}const L=[];for(let D=0;D<3;D++)L.push({val:E(D,D),vec:I.create(k(0,D),k(1,D),k(2,D))});return L.sort((D,z)=>z.val-D.val),{vals:[L[0].val,L[1].val,L[2].val],vecs:[L[0].vec,L[1].vec,L[2].vec]}}function xc(o,l){const _=pi(o);let E=0,w=0,k=0,B=0,L=0,D=0;for(const se of o){const q=se[0]-_[0],Q=se[1]-_[1],ae=se[2]-_[2];E+=q*q,w+=q*Q,k+=q*ae,B+=Q*Q,L+=Q*ae,D+=ae*ae}const z=[E,w,k,w,B,L,k,L,D],{vecs:F}=wc(z);let N=F[0],R=F[1],X=F[2];return I.dot(X,l)<0&&(I.scale(X,-1,X),I.scale(R,-1,R)),{centroid:_,normal:X,u:N,v:R}}function yc(o){let l=0,_=0,E=0,w=0,k=0,B=0,L=0,D=0,z=0;for(const[Q,ae]of o){const K=-2*Q,Y=-2*ae,W=1,ce=-(Q*Q+ae*ae);l+=K*K,_+=K*Y,E+=K*W,w+=Y*Y,k+=Y*W,B+=W*W,L+=K*ce,D+=Y*ce,z+=W*ce}const F=vt.create(l,_,E,_,w,k,E,k,B),N=hi(F,I.create(L,D,z)),R=N[0],X=N[1],se=N[2],q=R*R+X*X-se;return{center:[R,X],radius:Math.sqrt(Math.max(q,1e-12))}}function Pc(o,l){let _=0,E=0,w=0,k=0,B=0,L=0,D=0,z=0,F=0;for(let R=0;R<o.length;R++){const X=o[R],se=I.normalize(l[R],I.create()),q=1-se[0]*se[0],Q=-se[0]*se[1],ae=-se[0]*se[2],K=1-se[1]*se[1],Y=-se[1]*se[2],W=1-se[2]*se[2];_+=q,E+=Q,w+=ae,k+=K,B+=Y,L+=W,D+=q*X[0]+Q*X[1]+ae*X[2],z+=Q*X[0]+K*X[1]+Y*X[2],F+=ae*X[0]+Y*X[1]+W*X[2]}const N=vt.create(_,E,w,E,k,B,w,B,L);return hi(N,I.create(D,z,F))}function fi(o,l={}){if(o.length===0)return null;const _=l.tiltDownDeg??8,E=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,B=o.map(ue=>I.clone(ue.position)),L=o.map(ue=>{const ye=ue.rotation;return I.create(ye[8],ye[9],ye[10])}),D=o.map(ue=>{const ye=ue.rotation;return I.create(ye[4],ye[5],ye[6])}),z=pi(D),F=I.normalize(I.scale(z,-1,I.create())),{centroid:N,normal:R,u:X,v:se}=xc(B,F),q=B.map(ue=>{const ye=I.sub(ue,N,I.create());return[I.dot(ye,X),I.dot(ye,se)]}),{center:Q,radius:ae}=yc(q),K=ae*E,Y=I.add(N,I.add(I.scale(X,Q[0],I.create()),I.scale(se,Q[1],I.create()),I.create()),I.create()),W=Pc(B,L),ce=K*Math.tan(_*Math.PI/180),Me=I.sub(W,I.scale(R,ce,I.create()),I.create());let ve=0;if(w){const ue=I.sub(B[0],Y,I.create());ve=Math.atan2(I.dot(ue,se),I.dot(ue,X))/(2*Math.PI)%1,ve<0&&(ve+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${K.toFixed(2)}, tilt=${_}°, normal=[${R[0].toFixed(2)}, ${R[1].toFixed(2)}, ${R[2].toFixed(2)}], startPhase=${ve.toFixed(3)}`),{center:Y,radius:K,normal:R,u:X,v:se,lookAt:Me,startPhase:ve,direction:k}}function _i(o,l){const _=(o.startPhase+l*o.direction)*2*Math.PI,E=Math.cos(_),w=Math.sin(_),k=I.add(o.center,I.add(I.scale(o.u,o.radius*E,I.create()),I.scale(o.v,o.radius*w,I.create()),I.create()),I.create()),B=I.normalize(I.sub(o.lookAt,k,I.create())),L=I.cross(B,o.normal,I.create());I.length(L)<1e-6&&I.copy(o.u,L),I.normalize(L,L);const D=I.cross(B,L,I.create());I.normalize(D,D);const z=at.create();return z[0]=L[0],z[1]=D[0],z[2]=B[0],z[3]=0,z[4]=L[1],z[5]=D[1],z[6]=B[1],z[7]=0,z[8]=L[2],z[9]=D[2],z[10]=B[2],z[11]=0,z[12]=0,z[13]=0,z[14]=0,z[15]=1,{position:k,rotation:z,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Sc(o,l={}){const _=fi(o,l);if(!_)return[];const E=l.numViews??120;return Array.from({length:E},(w,k)=>({..._i(_,k/E),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}const mi="BITYMI01",Cc=0,Ec=1,kc=2,Mc=3,Bc=4,Tc=5;function zn(o){const l=(o&32768)>>15,_=(o&31744)>>10,E=o&1023;return _===0?(l?-1:1)*Math.pow(2,-14)*(E/1024):_===31?E?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,_-15)*(1+E/1024)}function ni(o,l,_,E,w,k){const B=(o-_.width*.5)/E.focal[0],L=-((l-_.height*.5)/E.focal[1]),D=E.rotation,z=D[0],F=D[4],N=D[8],R=D[1],X=D[5],se=D[9],q=D[2],Q=D[6],ae=D[10];let K=B*z+L*R+q,Y=B*F+L*X+Q,W=B*N+L*se+ae;const ce=Math.hypot(K,Y,W)||1;K/=ce,Y/=ce,W/=ce;const Me=E.position[0],ve=E.position[1],ue=E.position[2],ye=k*.005,oe=ye*ye,fe=new Uint32Array(w.buffer,w.byteOffset,w.length),be=w.length/8;let ze=1/0,Ve=0,H=0,J=0,$=-1;for(let Z=0;Z<be;Z++){const $e=Z*8,Ee=w[$e+0]-Me,de=w[$e+1]-ve,pe=w[$e+2]-ue,De=Ee*K+de*Y+pe*W;if(De<=0)continue;const _e=Ee-De*K,Pe=de-De*Y,Re=pe-De*W;if(_e*_e+Pe*Pe+Re*Re>=oe||!(fe[$e+7]>>>16&1))continue;const g=fe[$e+5],i=fe[$e+6],p=zn(g&65535),u=zn(g>>>16&65535),v=zn(i&65535),y=zn(i>>>16&65535),S=Math.hypot(p,u,v,y)||1,C=p/S,r=u/S,m=v/S,d=y/S,h=2*(r*d+C*m),a=2*(m*d-C*r),f=1-2*(r*r+m*m),x=K*h+Y*a+W*f;let b;Math.abs(x)>1e-6?(b=(Ee*h+de*a+pe*f)/x,(!isFinite(b)||b<=0)&&(b=De)):b=De,b<ze&&(ze=b,Ve=Me+b*K,H=ve+b*Y,J=ue+b*W,$=Z)}return $<0?null:[Ve,H,J]}function vi(o){const l=new Uint8Array(o),_=new TextDecoder().decode(l.subarray(0,8));if(_!==mi)throw new Error(`Not a BITYMI bundle (bad magic '${_}')`);const E=new DataView(o),w=E.getUint32(8,!0),k=12,B=20;let L=null,D=null,z=null;for(let F=0;F<w;F++){const N=k+F*B,R=E.getUint32(N+0,!0),X=Number(E.getBigUint64(N+4,!0)),se=Number(E.getBigUint64(N+12,!0)),q=l.slice(X,X+se).buffer;R===Cc||R===Ec||R===Tc?L=q:R===kc?D=q:(R===Mc||R===Bc)&&(z=q)}if(L===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:L,camerasBuffer:D,atlasBuffer:z}}async function Ac(o,l){var B;const _=await fetch(o);if(!_.ok)throw new Error(`fetch failed: ${_.status} ${_.statusText}`);const E=(()=>{const L=_.headers.get("content-length");return L&&parseInt(L,10)||void 0})(),w=(B=_.body)==null?void 0:B.getReader();let k;if(!w)k=await _.arrayBuffer(),l&&l(k.byteLength,E,0);else{const L=[];let D=0,z=performance.now(),F=0;for(;;){const{done:X,value:se}=await w.read();if(X)break;L.push(se),D+=se.byteLength;const q=performance.now();if(q-z>=150&&l){const Q=(D-F)/((q-z)/1e3);l(D,E,Q),z=q,F=D}}const N=new Uint8Array(D);let R=0;for(const X of L)N.set(X,R),R+=X.byteLength;k=N.buffer,l&&l(D,E,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===mi?{bundle:vi(k),rawPly:null}:{bundle:null,rawPly:k}}function Dc(o){return new Promise(l=>{const _=document.createElement("input");_.type="file",_.accept=o,_.style.display="none",_.onchange=()=>{var E;return l(((E=_.files)==null?void 0:E[0])??null)},document.body.appendChild(_),_.click(),setTimeout(()=>document.body.removeChild(_),1e3)})}function Ic(o,l,_){const E=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const z=await Dc(".ply,.bitymi");if(z)if(E&&(E.style.display="none"),z.name.toLowerCase().endsWith(".bitymi")){const F=await z.arrayBuffer(),{pcBuffer:N}=vi(F),R=new File([N],z.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),X=await gs(R,o);l(X)}else{const F=await gs(z,o);l(F)}}),k&&(k.innerHTML="");const B=new URLSearchParams(window.location.search),L=B.get("bundle")??B.get("model_url"),D=B.get("camera_url");L&&(E&&(E.style.display="none"),_(L,D))}async function Lc(o,l,_,E){const w=new Ps(o,_),k=new gc(w);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const L=typeof window<"u"&&window.parent!==window,D={pos:new Float32Array(3),rot:new Float32Array(16)};if(L){window.addEventListener("message",H=>{const J=H.data;if(!(!J||J.type!=="halloumi_sync_pose")&&!(!Array.isArray(J.position)||J.position.length!==3)&&!(!Array.isArray(J.rotation)||J.rotation.length!==16)){for(let $=0;$<3;$++)w.position[$]=J.position[$];for(let $=0;$<16;$++)w.rotation[$]=J.rotation[$];w.update_buffer(),k.resetToCamera();for(let $=0;$<3;$++)D.pos[$]=w.position[$];for(let $=0;$<16;$++)D.rot[$]=w.rotation[$]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const z=()=>{if(!L)return;const H=w.position,J=w.rotation;let $=!1;for(let Z=0;Z<3;Z++)if(Math.abs(H[Z]-D.pos[Z])>1e-6){$=!0;break}if(!$){for(let Z=0;Z<16;Z++)if(Math.abs(J[Z]-D.rot[Z])>1e-6){$=!0;break}}if($){for(let Z=0;Z<3;Z++)D.pos[Z]=H[Z];for(let Z=0;Z<16;Z++)D.rot[Z]=J[Z];try{window.parent.postMessage({type:"halloumi_camera_state",position:[H[0],H[1],H[2]],rotation:Array.from(J)},"*")}catch{}}},F="rgba8unorm";l.configure({device:_,format:F,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let N=null;const R=()=>{w.on_update_canvas(),N!==null&&Ln(o.width,o.height,_,N.render_settings_buffer)};new ResizeObserver(()=>{const H=Math.max(.25,fe.render_scale),J=Math.max(1,Math.ceil(H*o.clientWidth)),$=Math.max(1,Math.ceil(H*o.clientHeight));o.width===J&&o.height===$||(o.width=J,o.height=$,R())}).observe(o);let se=0,q=0;const Q=()=>{(o.width!==se||o.height!==q)&&(se=o.width,q=o.height,R())},ae=new URLSearchParams(window.location.search);let Y=ae.get("animation")==="1";k.enabled=!Y;const W=ae.get("camera_url"),ce=ae.get("bfc"),Me=ce==="1"||ce==="true",ve=ae.get("bfc_cos"),ue=ve!==null?Number(ve):NaN,ye=Number.isFinite(ue)?ue:2,oe=Math.max(1,window.devicePixelRatio||1),fe={gaussian_scaling:1,sh_bias:.5,animate:Y,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Me,bfc_cos:ye,legacy_renderer:!1,fetch_by_id:!0,render_scale:1},be=new ql.Pane({title:"Config",expanded:!0});be.addInput(fe,"animate",{label:"Animate"}).on("change",H=>{const J=Y;Y=H.value,k.enabled=!H.value,!J&&Y&&ze.value&&ze.value.onAnimateStart(),J&&!Y&&ze.value&&ze.value.onAnimateStop()}),be.addInput(fe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ze={value:null};Ic(_,H=>Ve(H,[],null),async(H,J)=>{let $=J??W,Z,$e=null;const Ee=H.toLowerCase();if(Ee.endsWith(".bitymi")||Ee.includes(".bitymi?")){Cs("downloading bundle ...");try{const{bundle:pe}=await Ac(H,(_e,Pe,Re)=>{const M=_e/1048576,G=Pe?Pe/(1024*1024):void 0,g=Re/(1024*1024),i=Pe?Math.min(99,Math.floor(_e/Pe*100)):void 0,p=G?`total ${G.toFixed(1)} MB`:"total -- MB",u=G&&i!==void 0?`${M.toFixed(1)} MB downloaded (${i}%)`:`${M.toFixed(1)} MB downloaded`,v=`${g.toFixed(2)} MB/s`;qt(`downloading bundle ...
${p}, ${u}
${v}`)});if(!pe)throw new Error("Expected a .bitymi bundle");qt("parsing PLY ...");const De=new File([pe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(Z=await gs(De,_),!$&&pe.camerasBuffer&&($=URL.createObjectURL(new Blob([pe.camerasBuffer],{type:"application/json"}))),pe.atlasBuffer){const _e=pe.atlasBuffer.byteLength/1048576;qt(`uploading atlas ...
${_e.toFixed(1)} MB BC7`);try{const Pe=Vl(pe.atlasBuffer);$e=Fl(_,Pe,!0)}catch(Pe){console.warn("[atlas] failed to parse/upload atlas:",Pe)}}}catch(pe){throw wn(),pe}}else Z=await Nl(H,_);const de=$?await pc($):[];de.length>0&&w.set_preset(de[0]),Ve(Z,de,$e)});function Ve(H,J=[],$=null){const Z=[(H.bbox.min[0]+H.bbox.max[0])/2,(H.bbox.min[1]+H.bbox.max[1])/2,(H.bbox.min[2]+H.bbox.max[2])/2];k.setBbox(H.bbox.min,H.bbox.max);const $e=.5*Math.sqrt((H.bbox.max[0]-H.bbox.min[0])**2+(H.bbox.max[1]-H.bbox.min[1])**2+(H.bbox.max[2]-H.bbox.min[2])**2);function Ee(j,re){const ie=ni(j,re,o,w,H.surfel_data,$e);ie&&(k.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function de(){const j=o.width*.5,re=o.height*.5,ie=ni(j,re,o,w,H.surfel_data,$e);if(!ie)return;const xe=w.rotation,Ie=xe[2],ge=xe[6],ke=xe[10],Ue=ie[0]-w.position[0],qe=ie[1]-w.position[1],Ze=ie[2]-w.position[2],ot=Ue*Ie+qe*ge+Ze*ke;ot>0&&k.setOrbitDepth(ot)}if(J.length===0){const j=H.bbox.max[0]-H.bbox.min[0],re=H.bbox.max[1]-H.bbox.min[1],ie=H.bbox.max[2]-H.bbox.min[2],Ie=.5*Math.sqrt(j*j+re*re+ie*ie)*.5;I.set(Z[0]-Ie,Z[1]-Ie,Z[2]-Ie,w.position);const ge=I.create(Ie,Ie,Ie);I.normalize(ge,ge);const ke=I.create(0,1,0),Ue=I.create();I.cross(ke,ge,Ue),I.normalize(Ue,Ue);const qe=I.create();I.cross(ge,Ue,qe);const Ze=vt.create(Ue[0],qe[0],ge[0],Ue[1],qe[1],ge[1],Ue[2],qe[2],ge[2]);at.fromMat3(Ze,w.rotation),w.update_buffer()}k.setCenter(I.create(H.centroid[0],H.centroid[1],H.centroid[2]));const pe=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),De="halloumi.fetch_by_id";let _e=null;try{const j=localStorage.getItem(De);(j==="0"||j==="1")&&(_e=j==="1")}catch{}const Pe=ae.get("byid"),Re={fetchById:Pe!==null?Pe==="1":_e!==null?_e:!pe,octBound:ae.get("oct")==="1",acc16:ae.get("acc16")==="1"},M=new cc(H,_,F,w.uniform_buffer,E,$,Re);Rn({hypLegacy:ae.get("hyp_legacy")==="1"},_,M.render_settings_buffer),fe.legacy_renderer=ae.get("legacy")==="1",fe.legacy_renderer&&M.setLegacyRenderer(!0),fe.fetch_by_id=Re.fetchById,console.log(`[render_2dgs] fetch_by_id=${Re.fetchById} (source: ${Pe!==null?"?byid":_e!==null?"remembered":`handheld=${pe}`})`),N=M,Ln(o.width,o.height,_,M.render_settings_buffer),fe.atlas_enabled=$!==null;{const j=H.surfel_data,re=j.length/8;let ie=0,xe=0,Ie=0;for(let ke=0;ke<re;ke++)ie+=j[ke*8],xe+=j[ke*8+1],Ie+=j[ke*8+2];const ge=re>0?[ie/re,xe/re,Ie/re]:[0,0,0];M.setBfcParams(fe.bfc_cos,ge),Rn({bfc:fe.bfc},_,M.render_settings_buffer),console.log(`[bfc] flag=${fe.bfc} cos=${fe.bfc_cos} centroid=(${ge[0].toFixed(3)}, ${ge[1].toFixed(3)}, ${ge[2].toFixed(3)})`)}let G=!1;const g=(()=>{if($!==null)return`${$.meta.format===2?"BC7":$.meta.format===3?"ASTC 4×4":$.meta.format===7?"BC7 codebook gather (typeD)":`format=${$.meta.format}`} ${$.meta.width}×${$.meta.height}, ${$.meta.n_layers} layers`;const j=_.features.has("texture-compression-bc"),re=_.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(j?["BC7"]:[]).concat(re?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",g),Qr(H.sh_bias,_,M.render_settings_buffer),Xr(fe.gaussian_scaling,_,M.render_settings_buffer),fe.sh_bias=H.sh_bias;const i=H.num_points.toLocaleString(),p={stats:`${i} surfels · -- fps`};be.addMonitor(p,"stats",{label:"Stats",interval:200}),be.addMonitor({atlas:g},"atlas",{label:"Atlas"});const u={stages:"— ms · awaiting timestamp data"};be.addMonitor(u,"stages",{label:"Stages",interval:500});let v=null;if(M.timeQueryEnabled){v=document.createElement("canvas"),v.width=280,v.height=24,v.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(v);const j=ie=>{const xe=v.getContext("2d");if(!xe)return;const Ie=v.width,ge=v.height;if(xe.clearRect(0,0,Ie,ge),!ie||ie.total<=0){xe.fillStyle="#888",xe.font="11px ui-monospace,Menlo,monospace",xe.fillText("awaiting GPU timestamps…",8,16);return}const ke=[{label:"cull",ms:ie.cull,color:"#3aa3ff"},{label:"pre",ms:ie.preprocess,color:"#3ad27a"},{label:"sort",ms:ie.sort,color:"#ffa53a"},{label:"render",ms:ie.render,color:"#ff5566"}],Ue=Math.max(.001,ke.reduce((Ze,ot)=>Ze+ot.ms,0));let qe=0;xe.font="10px ui-monospace,Menlo,monospace",xe.textBaseline="middle";for(const Ze of ke){const ot=Ze.ms/Ue*Ie;xe.fillStyle=Ze.color,xe.fillRect(qe,0,ot,ge),ot>=38&&(xe.fillStyle="#000c",xe.fillText(`${Ze.label} ${Ze.ms.toFixed(1)}`,qe+4,ge/2)),qe+=ot}};setInterval(()=>{G||M.readPerfMetrics({silent:!0}).then(()=>{const ie=M.lastStageBreakdownMs;j(ie),ie&&(u.stages=`${ie.total.toFixed(1)} ms · cull ${ie.cull.toFixed(1)} / pre ${ie.preprocess.toFixed(1)} / sort ${ie.sort.toFixed(1)} / render ${ie.render.toFixed(1)}`)}).catch(ie=>console.warn("[perf] readPerfMetrics failed:",ie))},500)}const y=.4,S=3,C=.3;let r=null,m=0,d=0;const h=ct.create(),a=vt.create();let f=J.length>0?0:-1;const x={view:J.length>0?`${f+1} / ${J.length}: ${J[f].img_name??f}`:"— no presets —"};be.addMonitor(x,"view",{label:"View",interval:100});function b(j){const re=vt.create(j[0],j[1],j[2],j[4],j[5],j[6],j[8],j[9],j[10]);return ct.fromMat(re)}function A(j,re){r={fromPos:I.clone(w.position),toPos:I.clone(j.position),fromQuat:ct.normalize(b(w.rotation)),toQuat:ct.normalize(b(j.rotation)),target:j,t:0,duration:Math.max(.01,re)}}const U=(j,re=!0)=>{if(J.length===0)return;f=(j%J.length+J.length)%J.length;const ie=J[f];re?A(ie,y):(w.set_preset(ie),k.resetToCamera(),de()),x.view=`${f+1} / ${J.length}: ${J[f].img_name??f}`};J.length>0&&(be.addButton({title:"◀ Prev view"}).on("click",()=>U(f-1)),be.addButton({title:"Next view ▶"}).on("click",()=>U(f+1)));const V=J.length>0?fi(J,{tiltDownDeg:15,alignFirst:!0}):null,le=V?Sc(J,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let te=0;const ne=12;ze.value={onAnimateStart:()=>{te=0},onAnimateStop:()=>{k.resetToCamera(),de()}},be.addInput(fe,"render_scale",{label:"Render scale",min:.25,max:oe,step:.25}).on("change",j=>{const re=Math.max(.25,j.value),ie=Math.max(1,Math.ceil(re*o.clientWidth)),xe=Math.max(1,Math.ceil(re*o.clientHeight));(o.width!==ie||o.height!==xe)&&(o.width=ie,o.height=xe,R())}),be.addInput(fe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",j=>Xr(j.value,_,M.render_settings_buffer)),be.addInput(fe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",j=>Qr(j.value,_,M.render_settings_buffer)),be.addInput(fe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",j=>{M.bgColor=[j.value.r,j.value.g,j.value.b,j.value.a]});const me=$?$.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";be.addInput(fe,"atlas_enabled",{label:me}).on("change",j=>M.setAtlasEnabled(j.value)),M.hasMips&&(M.setMipMode(fe.mips),be.addInput(fe,"mips",{label:"Mips (trilinear)"}).on("change",j=>M.setMipMode(j.value))),be.addInput(fe,"legacy_renderer",{label:"Legacy renderer"}).on("change",j=>M.setLegacyRenderer(j.value)),be.addInput(fe,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",j=>{M.setFetchById(j.value);try{localStorage.setItem("halloumi.fetch_by_id",j.value?"1":"0")}catch{}}),be.addInput(fe,"bfc",{label:"Backface"}).on("change",j=>Rn({bfc:j.value},_,M.render_settings_buffer)),be.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(J.length>0)w.set_preset(J[0]);else{const j=H.bbox.max[0]-H.bbox.min[0],re=H.bbox.max[1]-H.bbox.min[1],ie=H.bbox.max[2]-H.bbox.min[2],Ie=.5*Math.sqrt(j*j+re*re+ie*ie)*.5;I.set(Z[0]-Ie,Z[1]-Ie,Z[2]-Ie,w.position);const ge=I.create(Ie,Ie,Ie);I.normalize(ge,ge);const ke=I.create();I.cross(I.create(0,1,0),ge,ke),I.normalize(ke,ke);const Ue=I.create();I.cross(ge,ke,Ue);const qe=vt.create(ke[0],Ue[0],ge[0],ke[1],Ue[1],ge[1],ke[2],Ue[2],ge[2]);at.fromMat3(qe,w.rotation),w.update_buffer()}k.resetToCamera(),de()});const Se={result:"— click Benchmark —"};be.addMonitor(Se,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const he={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function we(){const re=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(he))if(re.startsWith(ie))return ie;return null}const Te=document.createElement("div");Te.id="bench-overlay",Te.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Te);function Ae(j,re,ie){const xe=Math.floor(re/Math.max(1,ie)*100),Ie=32,ge=Math.floor(re/Math.max(1,ie)*Ie),ke="█".repeat(ge)+"░".repeat(Ie-ge);Te.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${j}</div><div>[${ke}] ${xe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${re} / ${ie} frames · offscreen · pipelined · no vsync</div>`,Te.style.display="block"}function We(){Te.style.display="none"}async function Qe(j=10,re=200){if(G)return;if(J.length===0){Se.result="no cameras to benchmark";return}G=!0;const ie=Y,xe=fe.animate,Ie=new Float32Array(w.position),ge=new Float32Array(w.rotation);Y=!1,fe.animate=!1,be.refresh(),r=null,k.enabled=!1;const ke=we(),Ue=ke?he[ke]:null,qe=(Ue==null?void 0:Ue.w)??o.width,Ze=(Ue==null?void 0:Ue.h)??o.height,ot=(Ue==null?void 0:Ue.fovY)??w.getFov(),jt=ke?`${ke} · ${qe>=4e3/4+500?"images_4":"images_2"}`:"custom",wt=o.width,zt=o.height,Kt=w.getFov();o.width=qe,o.height=Ze,w.setFov(ot),Ln(qe,Ze,_,M.render_settings_buffer);const He=_.createTexture({size:[qe,Ze,1],format:F,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Pn=He.createView(),qn=()=>{const ut=_.createCommandEncoder();M.frame(ut,Pn,!1),_.queue.submit([ut.finish()])},Ht=()=>new Promise(ut=>setTimeout(ut,0)),Wn=20,xt=async(ut,kt)=>{let Yt=0,bt=0;for(Ae(kt,0,ut),await Ht();bt<ut;){const Zt=Math.min(Wn,ut-bt),gt=performance.now();for(let rn=0;rn<Zt;rn++)w.set_preset(J[(bt+rn)%J.length]),qn();await _.queue.onSubmittedWorkDone();const jn=performance.now();Yt+=jn-gt,bt+=Zt,Ae(kt,bt,ut),await Ht()}return Yt};try{await xt(j,"Warming up");const kt=await xt(re,"Benchmarking")/re,Yt=1e3/kt,bt=H.num_points??H.surfel_data.length/8,Zt=(ot*180/Math.PI).toFixed(1),gt=`${Yt.toFixed(1)} FPS  (${kt.toFixed(2)} ms/frame)
${qe}×${Ze} · fovY ${Zt}° · ${jt}
${bt.toLocaleString()} surfels · ${j}w+${re}b · pipelined`;Se.result=gt,console.log("[bench]",gt.replace(/\n/g,"  |  "))}catch(ut){console.error("[bench] failed:",ut),Se.result=`bench failed: ${ut}`}finally{We(),He.destroy(),o.width=wt,o.height=zt,w.setFov(Kt),Ln(wt,zt,_,M.render_settings_buffer),w.position.set(Ie),w.rotation.set(ge),w.update_buffer(),k.enabled=!ie,Y=ie,fe.animate=xe,be.refresh(),G=!1}}be.addButton({title:"📊 Benchmark"}).on("click",()=>Qe()),document.addEventListener("keydown",j=>{const re=j.key;if(re>="0"&&re<="9"&&J.length>0){const ie=parseInt(re);ie<J.length&&U(ie)}else re==="ArrowLeft"||re==="PageUp"?(U(f-1),j.preventDefault()):re==="ArrowRight"||re==="PageDown"?(U(f+1),j.preventDefault()):(re==="d"||re==="D")&&M.debugReadSortedIndices(30).catch(ie=>console.error("[DEBUG] readback failed:",ie))});function je(j,re){const ie=o.getBoundingClientRect(),xe=window.devicePixelRatio||1;return[(j-ie.left)*xe,(re-ie.top)*xe]}o.addEventListener("dblclick",j=>{const[re,ie]=je(j.clientX,j.clientY);Ee(re,ie)});let Ke=0,Je=0,nt=0;o.addEventListener("pointerdown",j=>{if(j.pointerType!=="touch")return;const re=performance.now(),ie=re-Ke,xe=j.clientX-Je,Ie=j.clientY-nt;if(ie>0&&ie<300&&xe*xe+Ie*Ie<40*40){const[ge,ke]=je(j.clientX,j.clientY);Ee(ge,ke),Ke=0}else Ke=re,Je=j.clientX,nt=j.clientY});function st(){return B}let rt=performance.now(),et=60,tt=Promise.resolve(),Ye=0;async function Fe(){var Ie;const j=performance.now(),re=Math.min((j-rt)/1e3,.1);if(rt=j,re>0){const ge=((Ie=M.lastStageBreakdownMs)==null?void 0:Ie.total)??0,ke=ge>.5?1e3/ge:1/re;et=et*.9+ke*.1,p.stats=`${i} surfels · ${Math.round(et)} fps`}if(G){requestAnimationFrame(Fe);return}if(st()&&(r||Y)&&(r=null,k.resetToCamera(),de(),Y&&(Y=!1,fe.animate=!1,be.refresh())),Y&&fe.animateMode==="circle"&&V){te+=re/ne,te>=1&&(te-=1);const ge=_i(V,te);w.set_preset(ge),k.update(re);const ke=_.createCommandEncoder();M.frame(ke,l.getCurrentTexture().createView()),_.queue.submit([ke.finish()]),Ye++,Ye===2&&wn(),requestAnimationFrame(Fe);return}if(r){r.t+=re/r.duration;const ge=Math.min(1,r.t),ke=ge*ge*(3-2*ge);I.lerp(r.fromPos,r.toPos,ke,w.position),ct.slerp(r.fromQuat,r.toQuat,ke,h),vt.fromQuat(h,a),at.fromMat3(a,w.rotation),w.update_buffer(),r.t>=1&&(w.set_preset(r.target),r=null,Y?J.length>0&&(m=C):(k.resetToCamera(),de()))}else if(Y&&!st()){const ge=fe.animateMode==="circle"&&le.length>0,ke=ge?le:J;if(ke.length!==0){if(m-=re,m<=0){const qe=((ge?d:f)+1)%ke.length;ge?d=qe:f=qe;const Ze=ge?S/8:S;A(ke[qe],Ze),ge||(x.view=`${f+1} / ${J.length}: ${J[f].img_name??f}`)}}}k.update(re),z(),Q(),await tt;const ie=_.createCommandEncoder(),xe=l.getCurrentTexture().createView();M.frame(ie,xe),_.queue.submit([ie.finish()]),tt=_.queue.onSubmittedWorkDone(),Ye++,Ye===2&&wn(),requestAnimationFrame(Fe)}requestAnimationFrame(Fe)}}(function(){let l="dev";for(const E of Array.from(document.querySelectorAll('script[type="module"]'))){const k=E.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const _=document.createElement("div");_.textContent="v "+l,_.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(_.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(_)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const _=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),E=document.querySelector("#webgpu-canvas");Ll(E!==null);const w=E.getContext("webgpu");Lc(E,w,_,l)})();
