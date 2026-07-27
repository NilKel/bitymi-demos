var gl=Object.defineProperty;var wl=(o,l,f)=>l in o?gl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var j=(o,l,f)=>(wl(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))P(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&P(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function P(w){if(w.ep)return;w.ep=!0;const k=f(w);fetch(w.href,k)}})();function xl(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const yl=xl(Array,o=>o.fill(0));let Le=1e-6;function Pl(o){function l(y=0,C=0){const E=new o(2);return y!==void 0&&(E[0]=y,C!==void 0&&(E[1]=C)),E}const f=l;function P(y,C,E){const r=E??new o(2);return r[0]=y,r[1]=C,r}function w(y,C){const E=C??new o(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function k(y,C){const E=C??new o(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function M(y,C){const E=C??new o(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function V(y,C=0,E=1,r){const m=r??new o(2);return m[0]=Math.min(E,Math.max(C,y[0])),m[1]=Math.min(E,Math.max(C,y[1])),m}function T(y,C,E){const r=E??new o(2);return r[0]=y[0]+C[0],r[1]=y[1]+C[1],r}function A(y,C,E,r){const m=r??new o(2);return m[0]=y[0]+C[0]*E,m[1]=y[1]+C[1]*E,m}function U(y,C){const E=y[0],r=y[1],m=C[0],u=C[1],p=Math.sqrt(E*E+r*r),a=Math.sqrt(m*m+u*u),_=p*a,x=_&&de(y,C)/_;return Math.acos(x)}function G(y,C,E){const r=E??new o(2);return r[0]=y[0]-C[0],r[1]=y[1]-C[1],r}const Z=G;function z(y,C){return Math.abs(y[0]-C[0])<Le&&Math.abs(y[1]-C[1])<Le}function K(y,C){return y[0]===C[0]&&y[1]===C[1]}function Y(y,C,E,r){const m=r??new o(2);return m[0]=y[0]+E*(C[0]-y[0]),m[1]=y[1]+E*(C[1]-y[1]),m}function $(y,C,E,r){const m=r??new o(2);return m[0]=y[0]+E[0]*(C[0]-y[0]),m[1]=y[1]+E[1]*(C[1]-y[1]),m}function ce(y,C,E){const r=E??new o(2);return r[0]=Math.max(y[0],C[0]),r[1]=Math.max(y[1],C[1]),r}function H(y,C,E){const r=E??new o(2);return r[0]=Math.min(y[0],C[0]),r[1]=Math.min(y[1],C[1]),r}function X(y,C,E){const r=E??new o(2);return r[0]=y[0]*C,r[1]=y[1]*C,r}const W=X;function le(y,C,E){const r=E??new o(2);return r[0]=y[0]/C,r[1]=y[1]/C,r}function ee(y,C){const E=C??new o(2);return E[0]=1/y[0],E[1]=1/y[1],E}const pe=ee;function ie(y,C,E){const r=E??new o(3),m=y[0]*C[1]-y[1]*C[0];return r[0]=0,r[1]=0,r[2]=m,r}function de(y,C){return y[0]*C[0]+y[1]*C[1]}function ke(y){const C=y[0],E=y[1];return Math.sqrt(C*C+E*E)}const Ve=ke;function ze(y){const C=y[0],E=y[1];return C*C+E*E}const Re=ze;function Te(y,C){const E=y[0]-C[0],r=y[1]-C[1];return Math.sqrt(E*E+r*r)}const we=Te;function Me(y,C){const E=y[0]-C[0],r=y[1]-C[1];return E*E+r*r}const R=Me;function q(y,C){const E=C??new o(2),r=y[0],m=y[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(E[0]=r/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function se(y,C){const E=C??new o(2);return E[0]=-y[0],E[1]=-y[1],E}function he(y,C){const E=C??new o(2);return E[0]=y[0],E[1]=y[1],E}const re=he;function oe(y,C,E){const r=E??new o(2);return r[0]=y[0]*C[0],r[1]=y[1]*C[1],r}const be=oe;function ve(y,C,E){const r=E??new o(2);return r[0]=y[0]/C[0],r[1]=y[1]/C[1],r}const Se=ve;function Oe(y=1,C){const E=C??new o(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function B(y){const C=y??new o(2);return C[0]=0,C[1]=0,C}function F(y,C,E){const r=E??new o(2),m=y[0],u=y[1];return r[0]=m*C[0]+u*C[4]+C[12],r[1]=m*C[1]+u*C[5]+C[13],r}function v(y,C,E){const r=E??new o(2),m=y[0],u=y[1];return r[0]=C[0]*m+C[4]*u+C[8],r[1]=C[1]*m+C[5]*u+C[9],r}function i(y,C,E,r){const m=r??new o(2),u=y[0]-C[0],p=y[1]-C[1],a=Math.sin(E),_=Math.cos(E);return m[0]=u*_-p*a+C[0],m[1]=u*a+p*_+C[1],m}function h(y,C,E){const r=E??new o(2);return q(y,r),X(r,C,r)}function d(y,C,E){const r=E??new o(2);return ke(y)>C?h(y,C,r):he(y,r)}function g(y,C,E){const r=E??new o(2);return Y(y,C,.5,r)}return{create:l,fromValues:f,set:P,ceil:w,floor:k,round:M,clamp:V,add:T,addScaled:A,angle:U,subtract:G,sub:Z,equalsApproximately:z,equals:K,lerp:Y,lerpV:$,max:ce,min:H,mulScalar:X,scale:W,divScalar:le,inverse:ee,invert:pe,cross:ie,dot:de,length:ke,len:Ve,lengthSq:ze,lenSq:Re,distance:Te,dist:we,distanceSq:Me,distSq:R,normalize:q,negate:se,copy:he,clone:re,multiply:oe,mul:be,divide:ve,div:Se,random:Oe,zero:B,transformMat4:F,transformMat3:v,rotate:i,setLength:h,truncate:d,midpoint:g}}const Ur=new Map;function ti(o){let l=Ur.get(o);return l||(l=Pl(o),Ur.set(o,l)),l}function Sl(o){function l(a,_,x){const b=new o(3);return a!==void 0&&(b[0]=a,_!==void 0&&(b[1]=_,x!==void 0&&(b[2]=x))),b}const f=l;function P(a,_,x,b){const L=b??new o(3);return L[0]=a,L[1]=_,L[2]=x,L}function w(a,_){const x=_??new o(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,_){const x=_??new o(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function M(a,_){const x=_??new o(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function V(a,_=0,x=1,b){const L=b??new o(3);return L[0]=Math.min(x,Math.max(_,a[0])),L[1]=Math.min(x,Math.max(_,a[1])),L[2]=Math.min(x,Math.max(_,a[2])),L}function T(a,_,x){const b=x??new o(3);return b[0]=a[0]+_[0],b[1]=a[1]+_[1],b[2]=a[2]+_[2],b}function A(a,_,x,b){const L=b??new o(3);return L[0]=a[0]+_[0]*x,L[1]=a[1]+_[1]*x,L[2]=a[2]+_[2]*x,L}function U(a,_){const x=a[0],b=a[1],L=a[2],O=_[0],N=_[1],ae=_[2],te=Math.sqrt(x*x+b*b+L*L),J=Math.sqrt(O*O+N*N+ae*ae),fe=te*J,xe=fe&&de(a,_)/fe;return Math.acos(xe)}function G(a,_,x){const b=x??new o(3);return b[0]=a[0]-_[0],b[1]=a[1]-_[1],b[2]=a[2]-_[2],b}const Z=G;function z(a,_){return Math.abs(a[0]-_[0])<Le&&Math.abs(a[1]-_[1])<Le&&Math.abs(a[2]-_[2])<Le}function K(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function Y(a,_,x,b){const L=b??new o(3);return L[0]=a[0]+x*(_[0]-a[0]),L[1]=a[1]+x*(_[1]-a[1]),L[2]=a[2]+x*(_[2]-a[2]),L}function $(a,_,x,b){const L=b??new o(3);return L[0]=a[0]+x[0]*(_[0]-a[0]),L[1]=a[1]+x[1]*(_[1]-a[1]),L[2]=a[2]+x[2]*(_[2]-a[2]),L}function ce(a,_,x){const b=x??new o(3);return b[0]=Math.max(a[0],_[0]),b[1]=Math.max(a[1],_[1]),b[2]=Math.max(a[2],_[2]),b}function H(a,_,x){const b=x??new o(3);return b[0]=Math.min(a[0],_[0]),b[1]=Math.min(a[1],_[1]),b[2]=Math.min(a[2],_[2]),b}function X(a,_,x){const b=x??new o(3);return b[0]=a[0]*_,b[1]=a[1]*_,b[2]=a[2]*_,b}const W=X;function le(a,_,x){const b=x??new o(3);return b[0]=a[0]/_,b[1]=a[1]/_,b[2]=a[2]/_,b}function ee(a,_){const x=_??new o(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const pe=ee;function ie(a,_,x){const b=x??new o(3),L=a[2]*_[0]-a[0]*_[2],O=a[0]*_[1]-a[1]*_[0];return b[0]=a[1]*_[2]-a[2]*_[1],b[1]=L,b[2]=O,b}function de(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function ke(a){const _=a[0],x=a[1],b=a[2];return Math.sqrt(_*_+x*x+b*b)}const Ve=ke;function ze(a){const _=a[0],x=a[1],b=a[2];return _*_+x*x+b*b}const Re=ze;function Te(a,_){const x=a[0]-_[0],b=a[1]-_[1],L=a[2]-_[2];return Math.sqrt(x*x+b*b+L*L)}const we=Te;function Me(a,_){const x=a[0]-_[0],b=a[1]-_[1],L=a[2]-_[2];return x*x+b*b+L*L}const R=Me;function q(a,_){const x=_??new o(3),b=a[0],L=a[1],O=a[2],N=Math.sqrt(b*b+L*L+O*O);return N>1e-5?(x[0]=b/N,x[1]=L/N,x[2]=O/N):(x[0]=0,x[1]=0,x[2]=0),x}function se(a,_){const x=_??new o(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function he(a,_){const x=_??new o(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const re=he;function oe(a,_,x){const b=x??new o(3);return b[0]=a[0]*_[0],b[1]=a[1]*_[1],b[2]=a[2]*_[2],b}const be=oe;function ve(a,_,x){const b=x??new o(3);return b[0]=a[0]/_[0],b[1]=a[1]/_[1],b[2]=a[2]/_[2],b}const Se=ve;function Oe(a=1,_){const x=_??new o(3),b=Math.random()*2*Math.PI,L=Math.random()*2-1,O=Math.sqrt(1-L*L)*a;return x[0]=Math.cos(b)*O,x[1]=Math.sin(b)*O,x[2]=L*a,x}function B(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function F(a,_,x){const b=x??new o(3),L=a[0],O=a[1],N=a[2],ae=_[3]*L+_[7]*O+_[11]*N+_[15]||1;return b[0]=(_[0]*L+_[4]*O+_[8]*N+_[12])/ae,b[1]=(_[1]*L+_[5]*O+_[9]*N+_[13])/ae,b[2]=(_[2]*L+_[6]*O+_[10]*N+_[14])/ae,b}function v(a,_,x){const b=x??new o(3),L=a[0],O=a[1],N=a[2];return b[0]=L*_[0*4+0]+O*_[1*4+0]+N*_[2*4+0],b[1]=L*_[0*4+1]+O*_[1*4+1]+N*_[2*4+1],b[2]=L*_[0*4+2]+O*_[1*4+2]+N*_[2*4+2],b}function i(a,_,x){const b=x??new o(3),L=a[0],O=a[1],N=a[2];return b[0]=L*_[0]+O*_[4]+N*_[8],b[1]=L*_[1]+O*_[5]+N*_[9],b[2]=L*_[2]+O*_[6]+N*_[10],b}function h(a,_,x){const b=x??new o(3),L=_[0],O=_[1],N=_[2],ae=_[3]*2,te=a[0],J=a[1],fe=a[2],xe=O*fe-N*J,me=N*te-L*fe,ge=L*J-O*te;return b[0]=te+xe*ae+(O*ge-N*me)*2,b[1]=J+me*ae+(N*xe-L*ge)*2,b[2]=fe+ge*ae+(L*me-O*xe)*2,b}function d(a,_){const x=_??new o(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function g(a,_,x){const b=x??new o(3),L=_*4;return b[0]=a[L+0],b[1]=a[L+1],b[2]=a[L+2],b}function y(a,_){const x=_??new o(3),b=a[0],L=a[1],O=a[2],N=a[4],ae=a[5],te=a[6],J=a[8],fe=a[9],xe=a[10];return x[0]=Math.sqrt(b*b+L*L+O*O),x[1]=Math.sqrt(N*N+ae*ae+te*te),x[2]=Math.sqrt(J*J+fe*fe+xe*xe),x}function C(a,_,x,b){const L=b??new o(3),O=[],N=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],N[0]=O[0],N[1]=O[1]*Math.cos(x)-O[2]*Math.sin(x),N[2]=O[1]*Math.sin(x)+O[2]*Math.cos(x),L[0]=N[0]+_[0],L[1]=N[1]+_[1],L[2]=N[2]+_[2],L}function E(a,_,x,b){const L=b??new o(3),O=[],N=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],N[0]=O[2]*Math.sin(x)+O[0]*Math.cos(x),N[1]=O[1],N[2]=O[2]*Math.cos(x)-O[0]*Math.sin(x),L[0]=N[0]+_[0],L[1]=N[1]+_[1],L[2]=N[2]+_[2],L}function r(a,_,x,b){const L=b??new o(3),O=[],N=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],N[0]=O[0]*Math.cos(x)-O[1]*Math.sin(x),N[1]=O[0]*Math.sin(x)+O[1]*Math.cos(x),N[2]=O[2],L[0]=N[0]+_[0],L[1]=N[1]+_[1],L[2]=N[2]+_[2],L}function m(a,_,x){const b=x??new o(3);return q(a,b),X(b,_,b)}function u(a,_,x){const b=x??new o(3);return ke(a)>_?m(a,_,b):he(a,b)}function p(a,_,x){const b=x??new o(3);return Y(a,_,.5,b)}return{create:l,fromValues:f,set:P,ceil:w,floor:k,round:M,clamp:V,add:T,addScaled:A,angle:U,subtract:G,sub:Z,equalsApproximately:z,equals:K,lerp:Y,lerpV:$,max:ce,min:H,mulScalar:X,scale:W,divScalar:le,inverse:ee,invert:pe,cross:ie,dot:de,length:ke,len:Ve,lengthSq:ze,lenSq:Re,distance:Te,dist:we,distanceSq:Me,distSq:R,normalize:q,negate:se,copy:he,clone:re,multiply:oe,mul:be,divide:ve,div:Se,random:Oe,zero:B,transformMat4:F,transformMat4Upper3x3:v,transformMat3:i,transformQuat:h,getTranslation:d,getAxis:g,getScaling:y,rotateX:C,rotateY:E,rotateZ:r,setLength:m,truncate:u,midpoint:p}}const Rr=new Map;function jn(o){let l=Rr.get(o);return l||(l=Sl(o),Rr.set(o,l)),l}function Cl(o){const l=ti(o),f=jn(o);function P(i,h,d,g,y,C,E,r,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,g!==void 0&&(u[4]=g,y!==void 0&&(u[5]=y,C!==void 0&&(u[6]=C,E!==void 0&&(u[8]=E,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function w(i,h,d,g,y,C,E,r,m,u){const p=u??new o(12);return p[0]=i,p[1]=h,p[2]=d,p[3]=0,p[4]=g,p[5]=y,p[6]=C,p[7]=0,p[8]=E,p[9]=r,p[10]=m,p[11]=0,p}function k(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function M(i,h){const d=h??new o(12),g=i[0],y=i[1],C=i[2],E=i[3],r=g+g,m=y+y,u=C+C,p=g*r,a=y*r,_=y*m,x=C*r,b=C*m,L=C*u,O=E*r,N=E*m,ae=E*u;return d[0]=1-_-L,d[1]=a+ae,d[2]=x-N,d[3]=0,d[4]=a-ae,d[5]=1-p-L,d[6]=b+O,d[7]=0,d[8]=x+N,d[9]=b-O,d[10]=1-p-_,d[11]=0,d}function V(i,h){const d=h??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function T(i,h,d){const g=d??new o(12);return g[0]=i[0]*h,g[1]=i[1]*h,g[2]=i[2]*h,g[4]=i[4]*h,g[5]=i[5]*h,g[6]=i[6]*h,g[8]=i[8]*h,g[9]=i[9]*h,g[10]=i[10]*h,g}const A=T;function U(i,h,d){const g=d??new o(12);return g[0]=i[0]+h[0],g[1]=i[1]+h[1],g[2]=i[2]+h[2],g[4]=i[4]+h[4],g[5]=i[5]+h[5],g[6]=i[6]+h[6],g[8]=i[8]+h[8],g[9]=i[9]+h[9],g[10]=i[10]+h[10],g}function G(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const Z=G;function z(i,h){return Math.abs(i[0]-h[0])<Le&&Math.abs(i[1]-h[1])<Le&&Math.abs(i[2]-h[2])<Le&&Math.abs(i[4]-h[4])<Le&&Math.abs(i[5]-h[5])<Le&&Math.abs(i[6]-h[6])<Le&&Math.abs(i[8]-h[8])<Le&&Math.abs(i[9]-h[9])<Le&&Math.abs(i[10]-h[10])<Le}function K(i,h){return i[0]===h[0]&&i[1]===h[1]&&i[2]===h[2]&&i[4]===h[4]&&i[5]===h[5]&&i[6]===h[6]&&i[8]===h[8]&&i[9]===h[9]&&i[10]===h[10]}function Y(i){const h=i??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function $(i,h){const d=h??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const g=i[0*4+0],y=i[0*4+1],C=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2];return d[0]=g,d[1]=E,d[2]=u,d[4]=y,d[5]=r,d[6]=p,d[8]=C,d[9]=m,d[10]=a,d}function ce(i,h){const d=h??new o(12),g=i[0*4+0],y=i[0*4+1],C=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2],_=a*r-m*p,x=-a*E+m*u,b=p*E-r*u,L=1/(g*_+y*x+C*b);return d[0]=_*L,d[1]=(-a*y+C*p)*L,d[2]=(m*y-C*r)*L,d[4]=x*L,d[5]=(a*g-C*u)*L,d[6]=(-m*g+C*E)*L,d[8]=b*L,d[9]=(-p*g+y*u)*L,d[10]=(r*g-y*E)*L,d}function H(i){const h=i[0],d=i[0*4+1],g=i[0*4+2],y=i[1*4+0],C=i[1*4+1],E=i[1*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2];return h*(C*u-m*E)-y*(d*u-m*g)+r*(d*E-C*g)}const X=ce;function W(i,h,d){const g=d??new o(12),y=i[0],C=i[1],E=i[2],r=i[4+0],m=i[4+1],u=i[4+2],p=i[8+0],a=i[8+1],_=i[8+2],x=h[0],b=h[1],L=h[2],O=h[4+0],N=h[4+1],ae=h[4+2],te=h[8+0],J=h[8+1],fe=h[8+2];return g[0]=y*x+r*b+p*L,g[1]=C*x+m*b+a*L,g[2]=E*x+u*b+_*L,g[4]=y*O+r*N+p*ae,g[5]=C*O+m*N+a*ae,g[6]=E*O+u*N+_*ae,g[8]=y*te+r*J+p*fe,g[9]=C*te+m*J+a*fe,g[10]=E*te+u*J+_*fe,g}const le=W;function ee(i,h,d){const g=d??Y();return i!==g&&(g[0]=i[0],g[1]=i[1],g[2]=i[2],g[4]=i[4],g[5]=i[5],g[6]=i[6]),g[8]=h[0],g[9]=h[1],g[10]=1,g}function pe(i,h){const d=h??l.create();return d[0]=i[8],d[1]=i[9],d}function ie(i,h,d){const g=d??l.create(),y=h*4;return g[0]=i[y+0],g[1]=i[y+1],g}function de(i,h,d,g){const y=g===i?i:G(i,g),C=d*4;return y[C+0]=h[0],y[C+1]=h[1],y}function ke(i,h){const d=h??l.create(),g=i[0],y=i[1],C=i[4],E=i[5];return d[0]=Math.sqrt(g*g+y*y),d[1]=Math.sqrt(C*C+E*E),d}function Ve(i,h){const d=h??f.create(),g=i[0],y=i[1],C=i[2],E=i[4],r=i[5],m=i[6],u=i[8],p=i[9],a=i[10];return d[0]=Math.sqrt(g*g+y*y+C*C),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function ze(i,h){const d=h??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Re(i,h,d){const g=d??new o(12),y=h[0],C=h[1],E=i[0],r=i[1],m=i[2],u=i[1*4+0],p=i[1*4+1],a=i[1*4+2],_=i[2*4+0],x=i[2*4+1],b=i[2*4+2];return i!==g&&(g[0]=E,g[1]=r,g[2]=m,g[4]=u,g[5]=p,g[6]=a),g[8]=E*y+u*C+_,g[9]=r*y+p*C+x,g[10]=m*y+a*C+b,g}function Te(i,h){const d=h??new o(12),g=Math.cos(i),y=Math.sin(i);return d[0]=g,d[1]=y,d[2]=0,d[4]=-y,d[5]=g,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function we(i,h,d){const g=d??new o(12),y=i[0*4+0],C=i[0*4+1],E=i[0*4+2],r=i[1*4+0],m=i[1*4+1],u=i[1*4+2],p=Math.cos(h),a=Math.sin(h);return g[0]=p*y+a*r,g[1]=p*C+a*m,g[2]=p*E+a*u,g[4]=p*r-a*y,g[5]=p*m-a*C,g[6]=p*u-a*E,i!==g&&(g[8]=i[8],g[9]=i[9],g[10]=i[10]),g}function Me(i,h){const d=h??new o(12),g=Math.cos(i),y=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=g,d[6]=y,d[8]=0,d[9]=-y,d[10]=g,d}function R(i,h,d){const g=d??new o(12),y=i[4],C=i[5],E=i[6],r=i[8],m=i[9],u=i[10],p=Math.cos(h),a=Math.sin(h);return g[4]=p*y+a*r,g[5]=p*C+a*m,g[6]=p*E+a*u,g[8]=p*r-a*y,g[9]=p*m-a*C,g[10]=p*u-a*E,i!==g&&(g[0]=i[0],g[1]=i[1],g[2]=i[2]),g}function q(i,h){const d=h??new o(12),g=Math.cos(i),y=Math.sin(i);return d[0]=g,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=g,d}function se(i,h,d){const g=d??new o(12),y=i[0*4+0],C=i[0*4+1],E=i[0*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2],p=Math.cos(h),a=Math.sin(h);return g[0]=p*y-a*r,g[1]=p*C-a*m,g[2]=p*E-a*u,g[8]=p*r+a*y,g[9]=p*m+a*C,g[10]=p*u+a*E,i!==g&&(g[4]=i[4],g[5]=i[5],g[6]=i[6]),g}const he=Te,re=we;function oe(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function be(i,h,d){const g=d??new o(12),y=h[0],C=h[1];return g[0]=y*i[0*4+0],g[1]=y*i[0*4+1],g[2]=y*i[0*4+2],g[4]=C*i[1*4+0],g[5]=C*i[1*4+1],g[6]=C*i[1*4+2],i!==g&&(g[8]=i[8],g[9]=i[9],g[10]=i[10]),g}function ve(i,h){const d=h??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function Se(i,h,d){const g=d??new o(12),y=h[0],C=h[1],E=h[2];return g[0]=y*i[0*4+0],g[1]=y*i[0*4+1],g[2]=y*i[0*4+2],g[4]=C*i[1*4+0],g[5]=C*i[1*4+1],g[6]=C*i[1*4+2],g[8]=E*i[2*4+0],g[9]=E*i[2*4+1],g[10]=E*i[2*4+2],g}function Oe(i,h){const d=h??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(i,h,d){const g=d??new o(12);return g[0]=h*i[0*4+0],g[1]=h*i[0*4+1],g[2]=h*i[0*4+2],g[4]=h*i[1*4+0],g[5]=h*i[1*4+1],g[6]=h*i[1*4+2],i!==g&&(g[8]=i[8],g[9]=i[9],g[10]=i[10]),g}function F(i,h){const d=h??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function v(i,h,d){const g=d??new o(12);return g[0]=h*i[0*4+0],g[1]=h*i[0*4+1],g[2]=h*i[0*4+2],g[4]=h*i[1*4+0],g[5]=h*i[1*4+1],g[6]=h*i[1*4+2],g[8]=h*i[2*4+0],g[9]=h*i[2*4+1],g[10]=h*i[2*4+2],g}return{add:U,clone:Z,copy:G,create:P,determinant:H,equals:K,equalsApproximately:z,fromMat4:k,fromQuat:M,get3DScaling:Ve,getAxis:ie,getScaling:ke,getTranslation:pe,identity:Y,inverse:ce,invert:X,mul:le,mulScalar:A,multiply:W,multiplyScalar:T,negate:V,rotate:we,rotateX:R,rotateY:se,rotateZ:re,rotation:Te,rotationX:Me,rotationY:q,rotationZ:he,scale:be,scale3D:Se,scaling:oe,scaling3D:ve,set:w,setAxis:de,setTranslation:ee,translate:Re,translation:ze,transpose:$,uniformScale:B,uniformScale3D:v,uniformScaling:Oe,uniformScaling3D:F}}const Vr=new Map;function El(o){let l=Vr.get(o);return l||(l=Cl(o),Vr.set(o,l)),l}function kl(o){const l=jn(o);function f(r,m,u,p,a,_,x,b,L,O,N,ae,te,J,fe,xe){const me=new o(16);return r!==void 0&&(me[0]=r,m!==void 0&&(me[1]=m,u!==void 0&&(me[2]=u,p!==void 0&&(me[3]=p,a!==void 0&&(me[4]=a,_!==void 0&&(me[5]=_,x!==void 0&&(me[6]=x,b!==void 0&&(me[7]=b,L!==void 0&&(me[8]=L,O!==void 0&&(me[9]=O,N!==void 0&&(me[10]=N,ae!==void 0&&(me[11]=ae,te!==void 0&&(me[12]=te,J!==void 0&&(me[13]=J,fe!==void 0&&(me[14]=fe,xe!==void 0&&(me[15]=xe)))))))))))))))),me}function P(r,m,u,p,a,_,x,b,L,O,N,ae,te,J,fe,xe,me){const ge=me??new o(16);return ge[0]=r,ge[1]=m,ge[2]=u,ge[3]=p,ge[4]=a,ge[5]=_,ge[6]=x,ge[7]=b,ge[8]=L,ge[9]=O,ge[10]=N,ge[11]=ae,ge[12]=te,ge[13]=J,ge[14]=fe,ge[15]=xe,ge}function w(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,m){const u=m??new o(16),p=r[0],a=r[1],_=r[2],x=r[3],b=p+p,L=a+a,O=_+_,N=p*b,ae=a*b,te=a*L,J=_*b,fe=_*L,xe=_*O,me=x*b,ge=x*L,De=x*O;return u[0]=1-te-xe,u[1]=ae+De,u[2]=J-ge,u[3]=0,u[4]=ae-De,u[5]=1-N-xe,u[6]=fe+me,u[7]=0,u[8]=J+ge,u[9]=fe-me,u[10]=1-N-te,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(r,m){const u=m??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function V(r,m,u){const p=u??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function T(r,m,u){const p=u??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const A=T;function U(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const G=U;function Z(r,m){return Math.abs(r[0]-m[0])<Le&&Math.abs(r[1]-m[1])<Le&&Math.abs(r[2]-m[2])<Le&&Math.abs(r[3]-m[3])<Le&&Math.abs(r[4]-m[4])<Le&&Math.abs(r[5]-m[5])<Le&&Math.abs(r[6]-m[6])<Le&&Math.abs(r[7]-m[7])<Le&&Math.abs(r[8]-m[8])<Le&&Math.abs(r[9]-m[9])<Le&&Math.abs(r[10]-m[10])<Le&&Math.abs(r[11]-m[11])<Le&&Math.abs(r[12]-m[12])<Le&&Math.abs(r[13]-m[13])<Le&&Math.abs(r[14]-m[14])<Le&&Math.abs(r[15]-m[15])<Le}function z(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function K(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Y(r,m){const u=m??new o(16);if(u===r){let Be;return Be=r[1],r[1]=r[4],r[4]=Be,Be=r[2],r[2]=r[8],r[8]=Be,Be=r[3],r[3]=r[12],r[12]=Be,Be=r[6],r[6]=r[9],r[9]=Be,Be=r[7],r[7]=r[13],r[13]=Be,Be=r[11],r[11]=r[14],r[14]=Be,u}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],b=r[1*4+0],L=r[1*4+1],O=r[1*4+2],N=r[1*4+3],ae=r[2*4+0],te=r[2*4+1],J=r[2*4+2],fe=r[2*4+3],xe=r[3*4+0],me=r[3*4+1],ge=r[3*4+2],De=r[3*4+3];return u[0]=p,u[1]=b,u[2]=ae,u[3]=xe,u[4]=a,u[5]=L,u[6]=te,u[7]=me,u[8]=_,u[9]=O,u[10]=J,u[11]=ge,u[12]=x,u[13]=N,u[14]=fe,u[15]=De,u}function $(r,m){const u=m??new o(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],b=r[1*4+0],L=r[1*4+1],O=r[1*4+2],N=r[1*4+3],ae=r[2*4+0],te=r[2*4+1],J=r[2*4+2],fe=r[2*4+3],xe=r[3*4+0],me=r[3*4+1],ge=r[3*4+2],De=r[3*4+3],Be=J*De,qe=ge*fe,Ze=O*De,je=ge*N,We=O*fe,Qe=J*N,rt=_*De,He=ge*x,nt=_*fe,it=J*x,st=_*N,Je=O*x,$e=ae*me,et=xe*te,Ke=b*me,lt=xe*L,tt=b*te,Pt=ae*L,gt=p*me,vt=xe*a,bt=p*te,ne=ae*a,_e=p*L,ue=b*a,Ie=Be*L+je*te+We*me-(qe*L+Ze*te+Qe*me),Ue=qe*a+rt*te+it*me-(Be*a+He*te+nt*me),Ce=Ze*a+He*L+st*me-(je*a+rt*L+Je*me),Ae=Qe*a+nt*L+Je*te-(We*a+it*L+st*te),Pe=1/(p*Ie+b*Ue+ae*Ce+xe*Ae);return u[0]=Pe*Ie,u[1]=Pe*Ue,u[2]=Pe*Ce,u[3]=Pe*Ae,u[4]=Pe*(qe*b+Ze*ae+Qe*xe-(Be*b+je*ae+We*xe)),u[5]=Pe*(Be*p+He*ae+nt*xe-(qe*p+rt*ae+it*xe)),u[6]=Pe*(je*p+rt*b+Je*xe-(Ze*p+He*b+st*xe)),u[7]=Pe*(We*p+it*b+st*ae-(Qe*p+nt*b+Je*ae)),u[8]=Pe*($e*N+lt*fe+tt*De-(et*N+Ke*fe+Pt*De)),u[9]=Pe*(et*x+gt*fe+ne*De-($e*x+vt*fe+bt*De)),u[10]=Pe*(Ke*x+vt*N+_e*De-(lt*x+gt*N+ue*De)),u[11]=Pe*(Pt*x+bt*N+ue*fe-(tt*x+ne*N+_e*fe)),u[12]=Pe*(Ke*J+Pt*ge+et*O-(tt*ge+$e*O+lt*J)),u[13]=Pe*(bt*ge+$e*_+vt*J-(gt*J+ne*ge+et*_)),u[14]=Pe*(gt*O+ue*ge+lt*_-(_e*ge+Ke*_+vt*O)),u[15]=Pe*(_e*J+tt*_+ne*O-(bt*O+ue*J+Pt*_)),u}function ce(r){const m=r[0],u=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],x=r[1*4+1],b=r[1*4+2],L=r[1*4+3],O=r[2*4+0],N=r[2*4+1],ae=r[2*4+2],te=r[2*4+3],J=r[3*4+0],fe=r[3*4+1],xe=r[3*4+2],me=r[3*4+3],ge=ae*me,De=xe*te,Be=b*me,qe=xe*L,Ze=b*te,je=ae*L,We=p*me,Qe=xe*a,rt=p*te,He=ae*a,nt=p*L,it=b*a,st=ge*x+qe*N+Ze*fe-(De*x+Be*N+je*fe),Je=De*u+We*N+He*fe-(ge*u+Qe*N+rt*fe),$e=Be*u+Qe*x+nt*fe-(qe*u+We*x+it*fe),et=je*u+rt*x+it*N-(Ze*u+He*x+nt*N);return m*st+_*Je+O*$e+J*et}const H=$;function X(r,m,u){const p=u??new o(16),a=r[0],_=r[1],x=r[2],b=r[3],L=r[4+0],O=r[4+1],N=r[4+2],ae=r[4+3],te=r[8+0],J=r[8+1],fe=r[8+2],xe=r[8+3],me=r[12+0],ge=r[12+1],De=r[12+2],Be=r[12+3],qe=m[0],Ze=m[1],je=m[2],We=m[3],Qe=m[4+0],rt=m[4+1],He=m[4+2],nt=m[4+3],it=m[8+0],st=m[8+1],Je=m[8+2],$e=m[8+3],et=m[12+0],Ke=m[12+1],lt=m[12+2],tt=m[12+3];return p[0]=a*qe+L*Ze+te*je+me*We,p[1]=_*qe+O*Ze+J*je+ge*We,p[2]=x*qe+N*Ze+fe*je+De*We,p[3]=b*qe+ae*Ze+xe*je+Be*We,p[4]=a*Qe+L*rt+te*He+me*nt,p[5]=_*Qe+O*rt+J*He+ge*nt,p[6]=x*Qe+N*rt+fe*He+De*nt,p[7]=b*Qe+ae*rt+xe*He+Be*nt,p[8]=a*it+L*st+te*Je+me*$e,p[9]=_*it+O*st+J*Je+ge*$e,p[10]=x*it+N*st+fe*Je+De*$e,p[11]=b*it+ae*st+xe*Je+Be*$e,p[12]=a*et+L*Ke+te*lt+me*tt,p[13]=_*et+O*Ke+J*lt+ge*tt,p[14]=x*et+N*Ke+fe*lt+De*tt,p[15]=b*et+ae*Ke+xe*lt+Be*tt,p}const W=X;function le(r,m,u){const p=u??K();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function ee(r,m){const u=m??l.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function pe(r,m,u){const p=u??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function ie(r,m,u,p){const a=p===r?p:U(r,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function de(r,m){const u=m??l.create(),p=r[0],a=r[1],_=r[2],x=r[4],b=r[5],L=r[6],O=r[8],N=r[9],ae=r[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(x*x+b*b+L*L),u[2]=Math.sqrt(O*O+N*N+ae*ae),u}function ke(r,m,u,p,a){const _=a??new o(16),x=Math.tan(Math.PI*.5-.5*r);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const b=1/(u-p);_[10]=p*b,_[14]=p*u*b}else _[10]=-1,_[14]=-u;return _}function Ve(r,m,u,p=1/0,a){const _=a??new o(16),x=1/Math.tan(r*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const b=1/(p-u);_[10]=u*b,_[14]=p*u*b}return _}function ze(r,m,u,p,a,_,x){const b=x??new o(16);return b[0]=2/(m-r),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(p-u),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(a-_),b[11]=0,b[12]=(m+r)/(r-m),b[13]=(p+u)/(u-p),b[14]=a/(a-_),b[15]=1,b}function Re(r,m,u,p,a,_,x){const b=x??new o(16),L=m-r,O=p-u,N=a-_;return b[0]=2*a/L,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*a/O,b[6]=0,b[7]=0,b[8]=(r+m)/L,b[9]=(p+u)/O,b[10]=_/N,b[11]=-1,b[12]=0,b[13]=0,b[14]=a*_/N,b[15]=0,b}function Te(r,m,u,p,a,_=1/0,x){const b=x??new o(16),L=m-r,O=p-u;if(b[0]=2*a/L,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*a/O,b[6]=0,b[7]=0,b[8]=(r+m)/L,b[9]=(p+u)/O,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,_===1/0)b[10]=0,b[14]=a;else{const N=1/(_-a);b[10]=a*N,b[14]=_*a*N}return b}const we=l.create(),Me=l.create(),R=l.create();function q(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(m,r,R),R),l.normalize(l.cross(u,R,we),we),l.normalize(l.cross(R,we,Me),Me),a[0]=we[0],a[1]=we[1],a[2]=we[2],a[3]=0,a[4]=Me[0],a[5]=Me[1],a[6]=Me[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function se(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,R),R),l.normalize(l.cross(u,R,we),we),l.normalize(l.cross(R,we,Me),Me),a[0]=we[0],a[1]=we[1],a[2]=we[2],a[3]=0,a[4]=Me[0],a[5]=Me[1],a[6]=Me[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function he(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,R),R),l.normalize(l.cross(u,R,we),we),l.normalize(l.cross(R,we,Me),Me),a[0]=we[0],a[1]=Me[0],a[2]=R[0],a[3]=0,a[4]=we[1],a[5]=Me[1],a[6]=R[1],a[7]=0,a[8]=we[2],a[9]=Me[2],a[10]=R[2],a[11]=0,a[12]=-(we[0]*r[0]+we[1]*r[1]+we[2]*r[2]),a[13]=-(Me[0]*r[0]+Me[1]*r[1]+Me[2]*r[2]),a[14]=-(R[0]*r[0]+R[1]*r[1]+R[2]*r[2]),a[15]=1,a}function re(r,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function oe(r,m,u){const p=u??new o(16),a=m[0],_=m[1],x=m[2],b=r[0],L=r[1],O=r[2],N=r[3],ae=r[1*4+0],te=r[1*4+1],J=r[1*4+2],fe=r[1*4+3],xe=r[2*4+0],me=r[2*4+1],ge=r[2*4+2],De=r[2*4+3],Be=r[3*4+0],qe=r[3*4+1],Ze=r[3*4+2],je=r[3*4+3];return r!==p&&(p[0]=b,p[1]=L,p[2]=O,p[3]=N,p[4]=ae,p[5]=te,p[6]=J,p[7]=fe,p[8]=xe,p[9]=me,p[10]=ge,p[11]=De),p[12]=b*a+ae*_+xe*x+Be,p[13]=L*a+te*_+me*x+qe,p[14]=O*a+J*_+ge*x+Ze,p[15]=N*a+fe*_+De*x+je,p}function be(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ve(r,m,u){const p=u??new o(16),a=r[4],_=r[5],x=r[6],b=r[7],L=r[8],O=r[9],N=r[10],ae=r[11],te=Math.cos(m),J=Math.sin(m);return p[4]=te*a+J*L,p[5]=te*_+J*O,p[6]=te*x+J*N,p[7]=te*b+J*ae,p[8]=te*L-J*a,p[9]=te*O-J*_,p[10]=te*N-J*x,p[11]=te*ae-J*b,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function Se(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Oe(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],b=r[0*4+3],L=r[2*4+0],O=r[2*4+1],N=r[2*4+2],ae=r[2*4+3],te=Math.cos(m),J=Math.sin(m);return p[0]=te*a-J*L,p[1]=te*_-J*O,p[2]=te*x-J*N,p[3]=te*b-J*ae,p[8]=te*L+J*a,p[9]=te*O+J*_,p[10]=te*N+J*x,p[11]=te*ae+J*b,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function F(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],b=r[0*4+3],L=r[1*4+0],O=r[1*4+1],N=r[1*4+2],ae=r[1*4+3],te=Math.cos(m),J=Math.sin(m);return p[0]=te*a+J*L,p[1]=te*_+J*O,p[2]=te*x+J*N,p[3]=te*b+J*ae,p[4]=te*L-J*a,p[5]=te*O-J*_,p[6]=te*N-J*x,p[7]=te*ae-J*b,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function v(r,m,u){const p=u??new o(16);let a=r[0],_=r[1],x=r[2];const b=Math.sqrt(a*a+_*_+x*x);a/=b,_/=b,x/=b;const L=a*a,O=_*_,N=x*x,ae=Math.cos(m),te=Math.sin(m),J=1-ae;return p[0]=L+(1-L)*ae,p[1]=a*_*J+x*te,p[2]=a*x*J-_*te,p[3]=0,p[4]=a*_*J-x*te,p[5]=O+(1-O)*ae,p[6]=_*x*J+a*te,p[7]=0,p[8]=a*x*J+_*te,p[9]=_*x*J-a*te,p[10]=N+(1-N)*ae,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=v;function h(r,m,u,p){const a=p??new o(16);let _=m[0],x=m[1],b=m[2];const L=Math.sqrt(_*_+x*x+b*b);_/=L,x/=L,b/=L;const O=_*_,N=x*x,ae=b*b,te=Math.cos(u),J=Math.sin(u),fe=1-te,xe=O+(1-O)*te,me=_*x*fe+b*J,ge=_*b*fe-x*J,De=_*x*fe-b*J,Be=N+(1-N)*te,qe=x*b*fe+_*J,Ze=_*b*fe+x*J,je=x*b*fe-_*J,We=ae+(1-ae)*te,Qe=r[0],rt=r[1],He=r[2],nt=r[3],it=r[4],st=r[5],Je=r[6],$e=r[7],et=r[8],Ke=r[9],lt=r[10],tt=r[11];return a[0]=xe*Qe+me*it+ge*et,a[1]=xe*rt+me*st+ge*Ke,a[2]=xe*He+me*Je+ge*lt,a[3]=xe*nt+me*$e+ge*tt,a[4]=De*Qe+Be*it+qe*et,a[5]=De*rt+Be*st+qe*Ke,a[6]=De*He+Be*Je+qe*lt,a[7]=De*nt+Be*$e+qe*tt,a[8]=Ze*Qe+je*it+We*et,a[9]=Ze*rt+je*st+We*Ke,a[10]=Ze*He+je*Je+We*lt,a[11]=Ze*nt+je*$e+We*tt,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const d=h;function g(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(r,m,u){const p=u??new o(16),a=m[0],_=m[1],x=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=x*r[2*4+0],p[9]=x*r[2*4+1],p[10]=x*r[2*4+2],p[11]=x*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function C(r,m){const u=m??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(r,m,u){const p=u??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:V,aim:q,axisRotate:h,axisRotation:v,cameraAim:se,clone:G,copy:U,create:f,determinant:ce,equals:z,equalsApproximately:Z,fromMat3:w,fromQuat:k,frustum:Re,frustumReverseZ:Te,getAxis:pe,getScaling:de,getTranslation:ee,identity:K,inverse:$,invert:H,lookAt:he,mul:W,mulScalar:A,multiply:X,multiplyScalar:T,negate:M,ortho:ze,perspective:ke,perspectiveReverseZ:Ve,rotate:d,rotateX:ve,rotateY:Oe,rotateZ:F,rotation:i,rotationX:be,rotationY:Se,rotationZ:B,scale:y,scaling:g,set:P,setAxis:ie,setTranslation:le,translate:oe,translation:re,transpose:Y,uniformScale:E,uniformScaling:C}}const Or=new Map;function Ml(o){let l=Or.get(o);return l||(l=kl(o),Or.set(o,l)),l}function Bl(o){const l=jn(o);function f(B,F,v,i){const h=new o(4);return B!==void 0&&(h[0]=B,F!==void 0&&(h[1]=F,v!==void 0&&(h[2]=v,i!==void 0&&(h[3]=i)))),h}const P=f;function w(B,F,v,i,h){const d=h??new o(4);return d[0]=B,d[1]=F,d[2]=v,d[3]=i,d}function k(B,F,v){const i=v??new o(4),h=F*.5,d=Math.sin(h);return i[0]=d*B[0],i[1]=d*B[1],i[2]=d*B[2],i[3]=Math.cos(h),i}function M(B,F){const v=F??l.create(3),i=Math.acos(B[3])*2,h=Math.sin(i*.5);return h>Le?(v[0]=B[0]/h,v[1]=B[1]/h,v[2]=B[2]/h):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function V(B,F){const v=ke(B,F);return Math.acos(2*v*v-1)}function T(B,F,v){const i=v??new o(4),h=B[0],d=B[1],g=B[2],y=B[3],C=F[0],E=F[1],r=F[2],m=F[3];return i[0]=h*m+y*C+d*r-g*E,i[1]=d*m+y*E+g*C-h*r,i[2]=g*m+y*r+h*E-d*C,i[3]=y*m-h*C-d*E-g*r,i}const A=T;function U(B,F,v){const i=v??new o(4),h=F*.5,d=B[0],g=B[1],y=B[2],C=B[3],E=Math.sin(h),r=Math.cos(h);return i[0]=d*r+C*E,i[1]=g*r+y*E,i[2]=y*r-g*E,i[3]=C*r-d*E,i}function G(B,F,v){const i=v??new o(4),h=F*.5,d=B[0],g=B[1],y=B[2],C=B[3],E=Math.sin(h),r=Math.cos(h);return i[0]=d*r-y*E,i[1]=g*r+C*E,i[2]=y*r+d*E,i[3]=C*r-g*E,i}function Z(B,F,v){const i=v??new o(4),h=F*.5,d=B[0],g=B[1],y=B[2],C=B[3],E=Math.sin(h),r=Math.cos(h);return i[0]=d*r+g*E,i[1]=g*r-d*E,i[2]=y*r+C*E,i[3]=C*r-y*E,i}function z(B,F,v,i){const h=i??new o(4),d=B[0],g=B[1],y=B[2],C=B[3];let E=F[0],r=F[1],m=F[2],u=F[3],p=d*E+g*r+y*m+C*u;p<0&&(p=-p,E=-E,r=-r,m=-m,u=-u);let a,_;if(1-p>Le){const x=Math.acos(p),b=Math.sin(x);a=Math.sin((1-v)*x)/b,_=Math.sin(v*x)/b}else a=1-v,_=v;return h[0]=a*d+_*E,h[1]=a*g+_*r,h[2]=a*y+_*m,h[3]=a*C+_*u,h}function K(B,F){const v=F??new o(4),i=B[0],h=B[1],d=B[2],g=B[3],y=i*i+h*h+d*d+g*g,C=y?1/y:0;return v[0]=-i*C,v[1]=-h*C,v[2]=-d*C,v[3]=g*C,v}function Y(B,F){const v=F??new o(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function $(B,F){const v=F??new o(4),i=B[0]+B[5]+B[10];if(i>0){const h=Math.sqrt(i+1);v[3]=.5*h;const d=.5/h;v[0]=(B[6]-B[9])*d,v[1]=(B[8]-B[2])*d,v[2]=(B[1]-B[4])*d}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const d=(h+1)%3,g=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[d*4+d]-B[g*4+g]+1);v[h]=.5*y;const C=.5/y;v[3]=(B[d*4+g]-B[g*4+d])*C,v[d]=(B[d*4+h]+B[h*4+d])*C,v[g]=(B[g*4+h]+B[h*4+g])*C}return v}function ce(B,F,v,i,h){const d=h??new o(4),g=B*.5,y=F*.5,C=v*.5,E=Math.sin(g),r=Math.cos(g),m=Math.sin(y),u=Math.cos(y),p=Math.sin(C),a=Math.cos(C);switch(i){case"xyz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function H(B,F){const v=F??new o(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const X=H;function W(B,F,v){const i=v??new o(4);return i[0]=B[0]+F[0],i[1]=B[1]+F[1],i[2]=B[2]+F[2],i[3]=B[3]+F[3],i}function le(B,F,v){const i=v??new o(4);return i[0]=B[0]-F[0],i[1]=B[1]-F[1],i[2]=B[2]-F[2],i[3]=B[3]-F[3],i}const ee=le;function pe(B,F,v){const i=v??new o(4);return i[0]=B[0]*F,i[1]=B[1]*F,i[2]=B[2]*F,i[3]=B[3]*F,i}const ie=pe;function de(B,F,v){const i=v??new o(4);return i[0]=B[0]/F,i[1]=B[1]/F,i[2]=B[2]/F,i[3]=B[3]/F,i}function ke(B,F){return B[0]*F[0]+B[1]*F[1]+B[2]*F[2]+B[3]*F[3]}function Ve(B,F,v,i){const h=i??new o(4);return h[0]=B[0]+v*(F[0]-B[0]),h[1]=B[1]+v*(F[1]-B[1]),h[2]=B[2]+v*(F[2]-B[2]),h[3]=B[3]+v*(F[3]-B[3]),h}function ze(B){const F=B[0],v=B[1],i=B[2],h=B[3];return Math.sqrt(F*F+v*v+i*i+h*h)}const Re=ze;function Te(B){const F=B[0],v=B[1],i=B[2],h=B[3];return F*F+v*v+i*i+h*h}const we=Te;function Me(B,F){const v=F??new o(4),i=B[0],h=B[1],d=B[2],g=B[3],y=Math.sqrt(i*i+h*h+d*d+g*g);return y>1e-5?(v[0]=i/y,v[1]=h/y,v[2]=d/y,v[3]=g/y):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function R(B,F){return Math.abs(B[0]-F[0])<Le&&Math.abs(B[1]-F[1])<Le&&Math.abs(B[2]-F[2])<Le&&Math.abs(B[3]-F[3])<Le}function q(B,F){return B[0]===F[0]&&B[1]===F[1]&&B[2]===F[2]&&B[3]===F[3]}function se(B){const F=B??new o(4);return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}const he=l.create(),re=l.create(),oe=l.create();function be(B,F,v){const i=v??new o(4),h=l.dot(B,F);return h<-.999999?(l.cross(re,B,he),l.len(he)<1e-6&&l.cross(oe,B,he),l.normalize(he,he),k(he,Math.PI,i),i):h>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(B,F,he),i[0]=he[0],i[1]=he[1],i[2]=he[2],i[3]=1+h,Me(i,i))}const ve=new o(4),Se=new o(4);function Oe(B,F,v,i,h,d){const g=d??new o(4);return z(B,i,h,ve),z(F,v,h,Se),z(ve,Se,2*h*(1-h),g),g}return{create:f,fromValues:P,set:w,fromAxisAngle:k,toAxisAngle:M,angle:V,multiply:T,mul:A,rotateX:U,rotateY:G,rotateZ:Z,slerp:z,inverse:K,conjugate:Y,fromMat:$,fromEuler:ce,copy:H,clone:X,add:W,subtract:le,sub:ee,mulScalar:pe,scale:ie,divScalar:de,dot:ke,lerp:Ve,length:ze,len:Re,lengthSq:Te,lenSq:we,normalize:Me,equalsApproximately:R,equals:q,identity:se,rotationTo:be,sqlerp:Oe}}const Fr=new Map;function Tl(o){let l=Fr.get(o);return l||(l=Bl(o),Fr.set(o,l)),l}function Dl(o){function l(v,i,h,d){const g=new o(4);return v!==void 0&&(g[0]=v,i!==void 0&&(g[1]=i,h!==void 0&&(g[2]=h,d!==void 0&&(g[3]=d)))),g}const f=l;function P(v,i,h,d,g){const y=g??new o(4);return y[0]=v,y[1]=i,y[2]=h,y[3]=d,y}function w(v,i){const h=i??new o(4);return h[0]=Math.ceil(v[0]),h[1]=Math.ceil(v[1]),h[2]=Math.ceil(v[2]),h[3]=Math.ceil(v[3]),h}function k(v,i){const h=i??new o(4);return h[0]=Math.floor(v[0]),h[1]=Math.floor(v[1]),h[2]=Math.floor(v[2]),h[3]=Math.floor(v[3]),h}function M(v,i){const h=i??new o(4);return h[0]=Math.round(v[0]),h[1]=Math.round(v[1]),h[2]=Math.round(v[2]),h[3]=Math.round(v[3]),h}function V(v,i=0,h=1,d){const g=d??new o(4);return g[0]=Math.min(h,Math.max(i,v[0])),g[1]=Math.min(h,Math.max(i,v[1])),g[2]=Math.min(h,Math.max(i,v[2])),g[3]=Math.min(h,Math.max(i,v[3])),g}function T(v,i,h){const d=h??new o(4);return d[0]=v[0]+i[0],d[1]=v[1]+i[1],d[2]=v[2]+i[2],d[3]=v[3]+i[3],d}function A(v,i,h,d){const g=d??new o(4);return g[0]=v[0]+i[0]*h,g[1]=v[1]+i[1]*h,g[2]=v[2]+i[2]*h,g[3]=v[3]+i[3]*h,g}function U(v,i,h){const d=h??new o(4);return d[0]=v[0]-i[0],d[1]=v[1]-i[1],d[2]=v[2]-i[2],d[3]=v[3]-i[3],d}const G=U;function Z(v,i){return Math.abs(v[0]-i[0])<Le&&Math.abs(v[1]-i[1])<Le&&Math.abs(v[2]-i[2])<Le&&Math.abs(v[3]-i[3])<Le}function z(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function K(v,i,h,d){const g=d??new o(4);return g[0]=v[0]+h*(i[0]-v[0]),g[1]=v[1]+h*(i[1]-v[1]),g[2]=v[2]+h*(i[2]-v[2]),g[3]=v[3]+h*(i[3]-v[3]),g}function Y(v,i,h,d){const g=d??new o(4);return g[0]=v[0]+h[0]*(i[0]-v[0]),g[1]=v[1]+h[1]*(i[1]-v[1]),g[2]=v[2]+h[2]*(i[2]-v[2]),g[3]=v[3]+h[3]*(i[3]-v[3]),g}function $(v,i,h){const d=h??new o(4);return d[0]=Math.max(v[0],i[0]),d[1]=Math.max(v[1],i[1]),d[2]=Math.max(v[2],i[2]),d[3]=Math.max(v[3],i[3]),d}function ce(v,i,h){const d=h??new o(4);return d[0]=Math.min(v[0],i[0]),d[1]=Math.min(v[1],i[1]),d[2]=Math.min(v[2],i[2]),d[3]=Math.min(v[3],i[3]),d}function H(v,i,h){const d=h??new o(4);return d[0]=v[0]*i,d[1]=v[1]*i,d[2]=v[2]*i,d[3]=v[3]*i,d}const X=H;function W(v,i,h){const d=h??new o(4);return d[0]=v[0]/i,d[1]=v[1]/i,d[2]=v[2]/i,d[3]=v[3]/i,d}function le(v,i){const h=i??new o(4);return h[0]=1/v[0],h[1]=1/v[1],h[2]=1/v[2],h[3]=1/v[3],h}const ee=le;function pe(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function ie(v){const i=v[0],h=v[1],d=v[2],g=v[3];return Math.sqrt(i*i+h*h+d*d+g*g)}const de=ie;function ke(v){const i=v[0],h=v[1],d=v[2],g=v[3];return i*i+h*h+d*d+g*g}const Ve=ke;function ze(v,i){const h=v[0]-i[0],d=v[1]-i[1],g=v[2]-i[2],y=v[3]-i[3];return Math.sqrt(h*h+d*d+g*g+y*y)}const Re=ze;function Te(v,i){const h=v[0]-i[0],d=v[1]-i[1],g=v[2]-i[2],y=v[3]-i[3];return h*h+d*d+g*g+y*y}const we=Te;function Me(v,i){const h=i??new o(4),d=v[0],g=v[1],y=v[2],C=v[3],E=Math.sqrt(d*d+g*g+y*y+C*C);return E>1e-5?(h[0]=d/E,h[1]=g/E,h[2]=y/E,h[3]=C/E):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function R(v,i){const h=i??new o(4);return h[0]=-v[0],h[1]=-v[1],h[2]=-v[2],h[3]=-v[3],h}function q(v,i){const h=i??new o(4);return h[0]=v[0],h[1]=v[1],h[2]=v[2],h[3]=v[3],h}const se=q;function he(v,i,h){const d=h??new o(4);return d[0]=v[0]*i[0],d[1]=v[1]*i[1],d[2]=v[2]*i[2],d[3]=v[3]*i[3],d}const re=he;function oe(v,i,h){const d=h??new o(4);return d[0]=v[0]/i[0],d[1]=v[1]/i[1],d[2]=v[2]/i[2],d[3]=v[3]/i[3],d}const be=oe;function ve(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Se(v,i,h){const d=h??new o(4),g=v[0],y=v[1],C=v[2],E=v[3];return d[0]=i[0]*g+i[4]*y+i[8]*C+i[12]*E,d[1]=i[1]*g+i[5]*y+i[9]*C+i[13]*E,d[2]=i[2]*g+i[6]*y+i[10]*C+i[14]*E,d[3]=i[3]*g+i[7]*y+i[11]*C+i[15]*E,d}function Oe(v,i,h){const d=h??new o(4);return Me(v,d),H(d,i,d)}function B(v,i,h){const d=h??new o(4);return ie(v)>i?Oe(v,i,d):q(v,d)}function F(v,i,h){const d=h??new o(4);return K(v,i,.5,d)}return{create:l,fromValues:f,set:P,ceil:w,floor:k,round:M,clamp:V,add:T,addScaled:A,subtract:U,sub:G,equalsApproximately:Z,equals:z,lerp:K,lerpV:Y,max:$,min:ce,mulScalar:H,scale:X,divScalar:W,inverse:le,invert:ee,dot:pe,length:ie,len:de,lengthSq:ke,lenSq:Ve,distance:ze,dist:Re,distanceSq:Te,distSq:we,normalize:Me,negate:R,copy:q,clone:se,multiply:he,mul:re,divide:oe,div:be,zero:ve,transformMat4:Se,setLength:Oe,truncate:B,midpoint:F}}const Nr=new Map;function Al(o){let l=Nr.get(o);return l||(l=Dl(o),Nr.set(o,l)),l}function Bs(o,l,f,P,w,k){return{mat3:El(o),mat4:Ml(l),quat:Tl(f),vec2:ti(P),vec3:jn(w),vec4:Al(k)}}const{mat3:yt,mat4:ct,quat:dt,vec2:$r,vec3:I,vec4:jc}=Bs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Bs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Bs(yl,Array,Array,Array,Array,Array);const qr=document.querySelector("#log");let mt=null,Qt=null;function ni(){if(mt)return mt;mt=document.createElement("div"),mt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",mt.appendChild(o),Qt=document.createElement("div"),Qt.className="ply-spinner-label",mt.appendChild(Qt),mt.style.display="none",document.body.appendChild(mt),mt}function Ts(o){ni(),Qt&&o&&(Qt.textContent=o),mt&&(mt.style.opacity="1",mt.style.display="flex")}function Lt(o){ni(),Qt&&(Qt.textContent=o)}function Sn(){if(!mt)return;const o=mt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function si(o,l){if(!qr)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),qr.appendChild(f)}async function St(o){console.log(o),si(o)}async function Ll(o){console.error(o),si(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ri;function ii(){ri=performance.now()}function Wr(o){const l=performance.now()-ri;St(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Il(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function En(o){return o+3&-4}const zl=2,Gl=3,Ul=5,Rl=6,Cn=7,$n=8;function Vl(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const P=new DataView(o),w=4,k=P.getUint32(w+0,!0),M=P.getUint32(w+4,!0),V=P.getUint32(w+8,!0),T=P.getUint32(w+12,!0),A=P.getUint32(w+16,!0),U=P.getFloat32(w+20,!0),G=P.getUint32(w+24,!0),Z=P.getUint32(w+28,!0),z=P.getFloat32(w+32,!0),K=P.getFloat32(w+36,!0),Y=P.getFloat32(w+40,!0),$=P.getUint32(w+44,!0),ce=P.getFloat32(w+48,!0),H=P.getFloat32(w+52,!0),X=P.getUint32(w+56,!0),W=P.getUint32(w+60,!0),le=W>0?W:1;if(Z===Ul||Z===Rl)throw new Error(`NAT2: paired-RVQ format=${Z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);if(Z!==zl&&Z!==Gl&&Z!==Cn&&Z!==$n)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7) or ASTC-codebook (8); got format=${Z}`);if(k%4!==0||$%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${$}`);let ee=w+64;const pe=(X+1)*4,ie=new Uint32Array(o.slice(ee,ee+pe));ee+=pe;let de;if(le>1){const R=(le+1)*4;if(ee+R>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${R} from ${ee})`);de=new Uint32Array(o.slice(ee,ee+R)),ee+=R}else de=new Uint32Array([0,k]);let ke=0;for(let R=0;R<le;R++){const q=de[R+1]-de[R];q>ke&&(ke=q)}const Ve=A*4*4;if(ee+Ve>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ve} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const ze=new Float32Array(o.slice(ee,ee+Ve));ee+=Ve;const Re=new Float32Array(A*5);for(let R=0;R<A;R++){const q=ze[R*4+0],se=ze[R*4+1],he=ze[R*4+2],re=ze[R*4+3];let oe=0;for(let B=1;B<=X&&ie[B]<=se;B++)oe=B;let be=0;for(let B=1;B<=le&&de[B]<=q;B++)be=B;const ve=se-ie[oe],Se=q-de[be],Oe=be*X+oe;Re[R*5+0]=Se,Re[R*5+1]=ve,Re[R*5+2]=he,Re[R*5+3]=re,Re[R*5+4]=Oe}let Te;const Me=k/4*16;if(Z===Cn||Z===$n){if(ee+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const R=Z===Cn?"BCCB":"ACCB",q=l.decode(new Uint8Array(o,ee,4));if(q!==R)throw new Error(`NAT2 typeD bad sub-magic: expected '${R}' got '${q}'`);const se=P.getUint32(ee+4,!0),he=P.getUint32(ee+8,!0),re=P.getUint32(ee+12,!0),oe=P.getUint32(ee+16,!0),be=P.getUint32(ee+20,!0);if(se!==1)throw new Error(`NAT2 BCCB unsupported version ${se}`);if(re!==M/4||oe!==k/4||be!==re*oe)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${oe}×${re} (${be} blocks)`);ee+=24;const ve=he*16;if(ee+ve>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${ve}, have ${o.byteLength-ee})`);const Se=new Uint8Array(o,ee,ve);ee+=ve;const Oe=be*2;if(ee+Oe>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${Oe}, have ${o.byteLength-ee})`);const B=new Uint16Array(o.slice(ee,ee+Oe));ee+=Oe;const F=new Uint8Array(be*16);for(let v=0;v<be;v++){const i=B[v]*16;F.set(Se.subarray(i,i+16),v*16)}Te=F}else{let R=0;for(let q=0;q<X;q++){const se=ie[q+1]-ie[q];if(se%4!==0)throw new Error(`NAT2 BC7 layer ${q} rows ${se} not 4-aligned`);R+=se/4*Me}if(ee+R>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${R} more bytes from offset ${ee}, have ${o.byteLength-ee}`);Te=new Uint8Array(o.slice(ee,ee+R))}return{width:k,height:M,channels:V,kernel_type:T,num_rects:A,uv_extent:U,sb_number:G,format:Z,sh_bias:z,res_bias:K,compact_mult:Y,layer_h:$,atlas_scale:ce,atlas_offset:H,n_layers:X,n_cols:le,layer_cuts:ie,column_cuts:de,slice_width:ke,rects_expanded:Re,atlas_bytes:Te}}const Ol=32;function Fl(o,l,f){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let P,w,k,M;if(l.format===2||l.format===Cn){if(!o.features.has("texture-compression-bc"))return St(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;M=l.format===Cn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:P,view:w,sampler:k}=jr(o,l,"bc7-rgba-unorm",M)}else if(l.format===3||l.format===$n){if(!o.features.has("texture-compression-astc"))return St(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;M=l.format===$n?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:P,view:w,sampler:k}=jr(o,l,"astc-4x4-unorm",M)}else return St(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:V}=l,T=o.createBuffer({label:"atlas rects (5-stride)",size:En(V.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(T,0,V);const A=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return oi(o,A,l,f),{texture:P,view:w,sampler:k,rectsBuffer:T,texParamsBuffer:A,meta:l}}function jr(o,l,f,P){const{width:w,layer_h:k,n_layers:M,n_cols:V,layer_cuts:T,column_cuts:A,slice_width:U,atlas_bytes:G}=l,z=w/4*16,K=o.limits.maxTextureDimension2D;if(k>K||U>K)throw new Error(`⚠️  atlas slice dims ${U}x${k} exceed maxTextureDimension2D=${K}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Y=V*M;if(Y>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${V} cols × ${M} layers = ${Y} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const $=o.createTexture({label:P,size:{width:U,height:k,depthOrArrayLayers:Y},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let X=0;X<V;X++){const W=A[X]/4,le=(A[X+1]-A[X])/4;for(let ee=0;ee<M;ee++){const pe=T[ee]/4,ie=(T[ee+1]-T[ee])/4,de=X*M+ee,ke=pe*z+W*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:de},aspect:"all"},G,{offset:ke,bytesPerRow:z,rowsPerImage:ie},{width:le*4,height:ie*4,depthOrArrayLayers:1})}}const ce=$.createView({label:`${P} view`,dimension:"2d-array"}),H=o.createSampler({label:`${P} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:$,view:ce,sampler:H}}function oi(o,l,f,P){const w=new ArrayBuffer(32),k=new Uint32Array(w),M=new Float32Array(w);k[0]=P?1:0,M[1]=f.atlas_scale,M[2]=f.atlas_offset,M[3]=f.res_bias,o.queue.writeBuffer(l,0,w)}async function Ps(o,l){St(`loading ply file from File... : ${o.name}`),Ts("downloading PLY...");const f=await o.arrayBuffer();try{return await ai(f,l)}finally{Sn()}}async function Nl(o,l){St(`loading ply file from URL... : ${o}`),Ts("downloading PLY...");try{ii();const f=new URL(o,self.location.href).href;return await ai({url:f},l)}finally{Sn()}}async function ai(o,l){return new Promise((f,P)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var V,T,A,U,G,Z,z,K,Y,$,ce,H;const M=k.data;if((M==null?void 0:M.type)==="error"){Ll(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),P(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const X=M.totalBytes,W=M.loadedBytes/(1024*1024),le=X?X/(1024*1024):void 0,ee=(M.speedBps??0)/(1024*1024),pe=X?Math.min(99,Math.floor(M.loadedBytes/X*100)):void 0,ie=le?`total ${le.toFixed(1)} MB`:"total -- MB",de=le&&pe!==void 0?`${W.toFixed(1)} MB downloaded (${pe}%)`:`${W.toFixed(1)} MB downloaded`,ke=`${ee.toFixed(2)} MB/s`;Lt(`downloading PLY ...
${ie}, ${de}
${ke}`);return}else if((M==null?void 0:M.type)==="fetched"){St(`💾 Fetched (${M.byteLength} bytes)`),Wr("Download"),Lt("parsing PLY..."),ii();return}else if((M==null?void 0:M.type)==="parse_progress"){const X=M.total??0,W=M.read??0,le=X>0?Math.floor(W/X*100):0;Lt(`parsing PLY ...
${W}/${X} surfels (${le}%)`);return}else if((M==null?void 0:M.type)==="done"){const X=M.num_points,W=M.K,le=M.feature_mode??0,ee=M.sh_bias,pe=M.kernel_type,ie=M.surfelBuffer,de=M.svParamsBuffer;St(`🪐 Total surfels: ${X}, mode=${le===1?"SB":"SV"}, K=${W}, sh_bias=${ee}, kernel_type=${pe}`);const Ve=l.createBuffer({label:"surfel input buffer",size:En(X*Ol),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ve,0,ie);const ze=de.byteLength>0?de.byteLength:16,Re=l.createBuffer({label:le===1?"color_params buffer (SB)":"color_params buffer (SV)",size:En(ze),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});de.byteLength>0&&l.queue.writeBuffer(Re,0,de),w.terminate(),Wr("Parse"),f({num_points:X,K:W,feature_mode:le,sh_bias:ee,kernel_type:pe,surfel_buffer:Ve,surfel_data:new Float32Array(ie),sv_params_buffer:Re,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(V=M.bbox)==null?void 0:V.min)==null?void 0:T[0])??-1)+(((U=(A=M.bbox)==null?void 0:A.max)==null?void 0:U[0])??1))/2,((((Z=(G=M.bbox)==null?void 0:G.min)==null?void 0:Z[1])??-1)+(((K=(z=M.bbox)==null?void 0:z.max)==null?void 0:K[1])??1))/2,(((($=(Y=M.bbox)==null?void 0:Y.min)==null?void 0:$[2])??-1)+(((H=(ce=M.bbox)==null?void 0:ce.max)==null?void 0:H[2])??1))/2]})}},w.onerror=k=>{w.terminate(),P(k)},o instanceof ArrayBuffer?(Lt("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ss={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,P){P(l)})($l,function(f){class P{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class V extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class A extends k{constructor(e,t){super(e),this.index=t}}function U(n){return n}function G(n){return n==null}function Z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const K={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Y{static alreadyDisposed(){return new Y({type:"alreadydisposed"})}static notBindable(){return new Y({type:"notbindable"})}static propertyNotFound(e){return new Y({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Y({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=K[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class ${constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!$.isBindable(s))throw Y.notBindable();if(!(e in s))throw Y.propertyNotFound(e);s[e]=t}}class ce extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class H{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const X="tp";function W(n){return(t,s)=>[X,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function le(n,e){return t=>e(n(t))}function ee(n){return n.rawValue}function pe(n,e){n.emitter.on("change",le(ee,e)),e(n.rawValue)}function ie(n,e,t){pe(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ke(n,e){return t=>{de(n,e,t)}}function Ve(n,e){pe(n,t=>{e.textContent=t??""})}const ze=W("btn");class Re{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ze()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(ze("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(ze("t")),Ve(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Te{constructor(e,t){this.emitter=new H,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Re(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class we{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,S)=>c===S,this.emitter=new H,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:c,sender:this}))}}class Me{constructor(e){this.emitter=new H,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function R(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Me(n):new we(n,e)}class q{constructor(e){this.emitter=new H,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:R(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new q(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function se(n,e){const s=Object.keys(e).reduce((c,S)=>{if(c===void 0)return;const D=e[S],Q=D(n[S]);return Q.succeeded?Object.assign(Object.assign({},c),{[S]:Q.value}):void 0},{});return s}function he(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function re(n){return n===null?!1:typeof n=="object"}function oe(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function be(n){return{custom:e=>oe(e)(n),boolean:oe(e=>typeof e=="boolean"?e:void 0)(n),number:oe(e=>typeof e=="number"?e:void 0)(n),string:oe(e=>typeof e=="string"?e:void 0)(n),function:oe(e=>typeof e=="function"?e:void 0)(n),constant:e=>oe(t=>t===e?e:void 0)(n),raw:oe(e=>e)(n),object:e=>oe(t=>{if(re(t))return se(t,e)})(n),array:e=>oe(t=>{if(Array.isArray(t))return he(t,e)})(n)}}const ve={optional:be(!0),required:be(!1)};function Se(n,e){const t=ve.required.object(e)(n);return t.succeeded?t.value:void 0}function Oe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class F{constructor(e){this.value_=e}static create(e){return[new F(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=W("");function i(n,e){return ke(n,v(void 0,e))}class h extends q{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=F.create(R(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const S=e??{};return new h(q.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(c=S.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){pe(this.globalDisabled_,i(e,"disabled")),ie(this,"hidden",i(e,"hidden"))}bindDisabled(e){pe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){pe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const g=W(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(g(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(g(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Oe({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function L(n,e,t){n.insertBefore(e,n.children[t])}function O(n){n.parentElement&&n.parentElement.removeChild(n)}function N(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ae(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function te(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const J=W("lbl");function fe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class xe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(J()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(J("l")),ie(t.props,"label",S=>{G(S)?this.element.classList.add(J(void 0,"nol")):(this.element.classList.remove(J(void 0,"nol")),ae(s),s.appendChild(fe(e,S)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(J("v")),this.element.appendChild(c),this.valueElement=c}}class me extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new xe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ge={id:"button",type:"blade",accept(n){const e=ve,t=Se(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new me(n.document,{blade:n.blade,props:q.fromObject({label:n.params.label}),valueController:new Te(n.document,{props:q.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof me)||!(n.controller.valueController instanceof Te)?null:new ce(n.controller)}};class De extends C{constructor(e){super(e),this.value=e.value}}function Be(){return new q({positions:R([],{equals:Z})})}class qe extends q{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=q.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ie(this,"expanded",s),ie(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ze(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function je(n,e){e.style.height=n.styleHeight}function We(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ze(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends w{constructor(e,t){super(e),this.rackApi_=t}}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function He(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class st{constructor(e){this.emitter=new H,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Y.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Je extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new H,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class $e extends me{constructor(e,t){super(e,t),this.binding=t.binding}}class et extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new H,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new V(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends me{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function lt(n){return n instanceof gt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function tt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Y.shouldNeverHappen();return t}function Pt(n,e,t){if(!$.isBindable(n))throw Y.notBindable();return new $(n,e,t)}class gt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new H,this.apiSet_=new st(lt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>tt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(S,Pt(e,t,c.presetKey),c),Q=new Je(D);return this.add(Q,c.index)}addMonitor(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(S,Pt(e,t),c),Q=new et(D);return this.add(Q,c.index)}addFolder(e){return He(this,e)}addButton(e){return rt(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return it(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=tt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof $e){const s=tt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof De){const s=tt(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw Y.shouldNeverHappen();const t=tt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new V(t,s.target.read(),s.target.presetKey)})}}class vt extends Qe{constructor(e,t){super(e,new gt(e.rackController,t)),this.emitter_=new H,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class bt extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class ne{constructor(e,t){const s=W(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function _e(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof $e&&s.binding===e)return s}return null}function ue(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function Ie(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof De&&s.value===e)return s}return null}function Ue(n){return n instanceof Pe?n.rack:n instanceof bt?n.rackController.rack:null}function Ce(n){const e=Ue(n);return e?e.bcSet_:null}class Ae{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new H,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new st(Ce),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),z(e,"parent")?e.parent=this:(e.parent_=this,Oe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){z(e,"parent")?e.parent=null:(e.parent_=null,Oe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof $e)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof De)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Ue(s);if(c){const S=c.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof $e)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof De)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Ue(s);if(c){const S=c.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const S=[];c===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),c===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),c.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=_e(this.find($e),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=ue(this.find(Ke),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ie(this.find(De),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Pe extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new ne(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Ae({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&L(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&O(e.bladeController.view.element)}}const Ye=W("cnt");class ot{constructor(e,t){var s;this.className_=W((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Ye()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ie(this.foldable_,"completed",ke(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ie(t.props,"title",Ee=>{G(Ee)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const D=e.createElement("div");D.classList.add(this.className_("t")),Ve(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const Q=e.createElement("div");Q.classList.add(this.className_("m")),this.buttonElement.appendChild(Q);const ye=t.containerElement;ye.classList.add(this.className_("c")),this.element.appendChild(ye),this.containerElement=ye}}class ft extends bt{constructor(e,t){var s;const c=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new Pe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new ot(e,{containerElement:S.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,We(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Kn={id:"folder",type:"blade",accept(n){const e=ve,t=Se(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new ft(n.document,{blade:n.blade,expanded:n.params.expanded,props:q.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof ft?new vt(n.controller,n.pool):null}};class kt extends De{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new xe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class un extends w{}const kn=W("spr");class Mn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(kn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(kn("r")),this.element.appendChild(s)}}class Bn extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Mn(e,{viewProps:t.viewProps})}))}}const Yn={id:"separator",type:"blade",accept(n){const t=Se(n,{view:ve.required.constant("separator")});return t?{params:t}:null},controller(n){return new Bn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Bn?new un(n.controller):null}},It=W("tbi");class Zn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(It()),t.viewProps.bindClassModifiers(this.element),ie(t.props,"selected",S=>{S?this.element.classList.add(It(void 0,"sel")):this.element.classList.remove(It(void 0,"sel"))});const s=e.createElement("button");s.classList.add(It("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(It("t")),Ve(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class Tn{constructor(e,t){this.emitter=new H,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Zn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ht{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Tn(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Pe(e,{blade:Be(),viewProps:h.create()}),this.props=t.props,ie(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class zt{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class $t extends Qe{constructor(e,t){super(e,new gt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new H,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Y.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ht(t,{itemProps:q.fromObject({selected:!1,title:e.title}),props:q.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Y.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Y.shouldNeverHappen();const s=new zt(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Y.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const Ct=-1;class Jt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=R(!0),this.selectedIndex=R(Ct),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ct,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Et=W("tab");class Xn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Et(),Ye()),t.viewProps.bindClassModifiers(this.element),pe(t.empty,ke(this.element,Et(void 0,"nop")));const s=e.createElement("div");s.classList.add(Et("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Et("i")),this.element.appendChild(c);const S=t.contentsElement;S.classList.add(Et("c")),this.element.appendChild(S),this.contentsElement=S}}class en extends bt{constructor(e,t){const s=new Pe(e,{blade:t.blade,viewProps:t.viewProps}),c=new Jt;super({blade:t.blade,rackController:s,view:new Xn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new st(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;L(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;O(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const As={id:"tab",type:"blade",accept(n){const e=ve,t=Se(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new en(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ht(n.document,{itemProps:q.fromObject({selected:!1,title:t.title}),props:q.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof en?new $t(n.controller,n.pool):null}};function wi(n,e){const t=n.accept(e.params);if(!t)return null;const s=ve.optional.boolean(e.params.disabled).value,c=ve.optional.boolean(e.params.hidden).value;return n.controller({blade:Be(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class xi{constructor(){this.disabled=!1,this.emitter=new H}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class yi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new H,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Pi{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new H,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Ls(n,e){for(;n.length<e;)n.push(void 0)}function Si(n){const e=[];return Ls(e,n),R(e)}function Ci(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Ei(n,e){const t=[...Ci(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Ls(t,n.length),t}class ki{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new H,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Ei(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class dn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Mt(n,e){if(n instanceof e)return n;if(n instanceof dn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class tn{constructor(e){this.values=q.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class pn{constructor(e){this.values=q.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Is{constructor(e){this.values=q.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class Dn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Qn=W("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Qn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Qn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Qn("m")),c.appendChild(b(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ie(this.props_,"options",S=>{N(this.selectElement),S.forEach(D=>{const Q=e.createElement("option");Q.textContent=D.text,this.selectElement.appendChild(Q)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class hn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const zs=W("pop");class Bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(zs()),t.viewProps.bindClassModifiers(this.element),pe(t.shows,ke(this.element,zs(void 0,"v")))}}class Gs{constructor(e,t){this.shows=R(!1),this.viewProps=t.viewProps,this.view=new Bi(e,{shows:this.shows,viewProps:this.viewProps})}}const Us=W("txt");class Ti{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Us()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Us("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class An{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Di(n){return String(n)}function Rs(n){return n==="false"?!1:!!n}function Vs(n){return Di(n)}class Ai{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Li={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ii{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const zi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Jn(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function fn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function _n(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ri(n,e){const t=_n(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=_n(n,e);return c===""?"":s+c}function es(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ri(n,e);return s===""?"":t+s}function Os(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ui(n,e);return e+=s.length,s===""?"":s+_n(n,e)}function Vi(n,e){const t=Os(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=_n(n,e);return e+=c.length,t+s+c+es(n,e)}function Oi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=_n(n,e);return e+=s.length,s===""?"":t+s+es(n,e)}function Fi(n,e){const t=Os(n,e);return e+=t.length,t===""?"":t+es(n,e)}const Ni=Jn([Vi,Oi,Fi]);function $i(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$i(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Wi(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Yi=Jn([qi,ji,Ki]),Zi=Jn([Yi,Ni]);function Xi(n,e){const t=Zi(n,e);return e+=t.length,t===""?null:{evaluable:new Ai(t),cursor:e}}function Qi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Ns(n,e);if(!s)return null;e=s.cursor,e+=fn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Ji(n,e){var t;return(t=Xi(n,e))!==null&&t!==void 0?t:Qi(n,e)}function Fs(n,e){const t=Ji(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Fs(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gi(s,c.evaluable)}):null}function eo(n,e,t){t+=fn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=fn(e,t).length,{cursor:t,operator:s}):null}function to(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let S=c.evaluable;for(;;){const D=eo(e,t,s);if(!D)break;s=D.cursor;const Q=n(t,s);if(!Q)return null;s=Q.cursor,S=new Ii(D.operator,S,Q.evaluable)}return S?{cursor:s,evaluable:S}:null}}const no=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>to(n,e),Fs);function Ns(n,e){return e+=fn(n,e).length,no(n,e)}function so(n){const e=Ns(n,0);return!e||e.cursor+fn(n,e.cursor).length!==n.length?null:e.evaluable}function Bt(n){var e;const t=so(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function $s(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Bt(n);if(!G(e))return e}return 0}function ro(n){return String(n)}function ut(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const io=ut(0);function Ln(n){return io(n)+"%"}function qs(n){return String(n)}function ts(n){return n}function mn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function S(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{S(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{S(()=>{n.setRawValue(s(n,e),D.options)}),S(()=>{e.setRawValue(t(n,e),D.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function _t(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function vn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Tt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function oo(n){return n==="ArrowUp"||n==="ArrowDown"}function Ws(n){return oo(n)||n==="ArrowLeft"||n==="ArrowRight"}function ns(n,e){var t,s;const c=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class qt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new H,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ns(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ns(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ns(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Xe(n,e,t,s,c){const S=(n-e)/(t-e);return s+S*(c-s)}function js(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function at(n,e,t){return Math.min(Math.max(n,e),t)}function Hs(n,e){return(n%e+e)%e}const wt=W("txt");class ao{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(wt(),wt(void 0,"num")),t.arrayPosition&&this.element.classList.add(wt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(wt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(wt()),this.inputElement.classList.add(wt("i"));const c=e.createElement("div");c.classList.add(wt("k")),this.element.appendChild(c),this.knobElement=c;const S=e.createElementNS(E,"svg");S.classList.add(wt("g")),this.knobElement.appendChild(S);const D=e.createElementNS(E,"path");D.classList.add(wt("gb")),S.appendChild(D),this.guideBodyElem_=D;const Q=e.createElementNS(E,"path");Q.classList.add(wt("gh")),S.appendChild(Q),this.guideHeadElem_=Q;const ye=e.createElement("div");ye.classList.add(W("tt")()),this.knobElement.appendChild(ye),this.tooltipElem_=ye,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(wt(void 0,"drg"));return}this.element.classList.add(wt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=at(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class bn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=R(null),this.view=new ao(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new qt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),S!==void 0&&(D=Math.min(D,S)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=_t(this.baseStep_,vn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){_t(this.baseStep_,vn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ss=W("sld");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ss()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ss("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(ss("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=at(Xe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Xe(at(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=_t(this.baseStep_,Tt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){_t(this.baseStep_,Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const rs=W("sldtxt");class uo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(rs());const s=e.createElement("div");s.classList.add(rs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(rs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new bn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new uo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function gn(n,e){n.write(e)}function In(n){const e=ve;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Ks(n){if(n==="inline"||n==="popup")return n}function Gt(n){const e=ve;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Ys(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function os(n){return G(n)?null:new pn(Ys(n))}function po(n){const e=n?Mt(n,Dn):null;return e?e.step:null}function zn(n,e){const t=n&&Mt(n,Dn);return t?js(t.step):Math.max(js(e),2)}function nn(n){const e=po(n);return e??1}function sn(n,e){var t;const s=n&&Mt(n,Dn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Gn=W("ckb");class ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Gn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Gn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Gn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Gn("w")),s.appendChild(S);const D=b(e,"check");S.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function _o(n){const e=[],t=os(n.options);return t&&e.push(t),new dn(e)}const mo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Se(e,{options:ve.optional.custom(In)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs,constraint:n=>_o(n.params),writer:n=>gn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Mt(s,pn);return c?new hn(e,{props:new q({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new fo(e,{value:t,viewProps:n.viewProps})}},Wt=W("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wt()),t.foldable.bindExpandedClass(this.element,Wt(void 0,"expanded")),ie(t.foldable,"completed",ke(this.element,Wt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Wt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Wt("s")),s.appendChild(c),this.swatchElement=c;const S=e.createElement("div");if(S.classList.add(Wt("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Wt("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function bo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),S=at(t/255,0,1),D=Math.max(s,c,S),Q=Math.min(s,c,S),ye=D-Q;let Ee=0,Fe=0;const Ne=(Q+D)/2;return ye!==0&&(Fe=ye/(1-Math.abs(D+Q-1)),s===D?Ee=(c-S)/ye:c===D?Ee=2+(S-s)/ye:Ee=4+(s-c)/ye,Ee=Ee/6+(Ee<0?1:0)),[Ee*360,Fe*100,Ne*100]}function go(n,e,t){const s=(n%360+360)%360,c=at(e/100,0,1),S=at(t/100,0,1),D=(1-Math.abs(2*S-1))*c,Q=D*(1-Math.abs(s/60%2-1)),ye=S-D/2;let Ee,Fe,Ne;return s>=0&&s<60?[Ee,Fe,Ne]=[D,Q,0]:s>=60&&s<120?[Ee,Fe,Ne]=[Q,D,0]:s>=120&&s<180?[Ee,Fe,Ne]=[0,D,Q]:s>=180&&s<240?[Ee,Fe,Ne]=[0,Q,D]:s>=240&&s<300?[Ee,Fe,Ne]=[Q,0,D]:[Ee,Fe,Ne]=[D,0,Q],[(Ee+ye)*255,(Fe+ye)*255,(Ne+ye)*255]}function wo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),S=at(t/255,0,1),D=Math.max(s,c,S),Q=Math.min(s,c,S),ye=D-Q;let Ee;ye===0?Ee=0:D===s?Ee=60*(((c-S)/ye%6+6)%6):D===c?Ee=60*((S-s)/ye+2):Ee=60*((s-c)/ye+4);const Fe=D===0?0:ye/D,Ne=D;return[Ee,Fe*100,Ne*100]}function Zs(n,e,t){const s=Hs(n,360),c=at(e/100,0,1),S=at(t/100,0,1),D=S*c,Q=D*(1-Math.abs(s/60%2-1)),ye=S-D;let Ee,Fe,Ne;return s>=0&&s<60?[Ee,Fe,Ne]=[D,Q,0]:s>=60&&s<120?[Ee,Fe,Ne]=[Q,D,0]:s>=120&&s<180?[Ee,Fe,Ne]=[0,D,Q]:s>=180&&s<240?[Ee,Fe,Ne]=[0,Q,D]:s>=240&&s<300?[Ee,Fe,Ne]=[Q,0,D]:[Ee,Fe,Ne]=[D,0,Q],[(Ee+ye)*255,(Fe+ye)*255,(Ne+ye)*255]}function xo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function jt(n){return[n[0],n[1],n[2]]}function Xs(n,e){return[n[0],n[1],n[2],e]}const Po={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:xo,rgb:go},hsv:{hsl:yo,hsv:(n,e,t)=>[n,e,t],rgb:Zs},rgb:{hsl:bo,hsv:wo,rgb:(n,e,t)=>[n,e,t]}};function Un(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function So(n,e){return n===e?e:Hs(n,e)}function Co(n,e,t){var s;const c=Un(e,t);return[e==="rgb"?at(n[0],0,c[0]):So(n[0],c[0]),at(n[1],0,c[1]),at(n[2],0,c[2]),at((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Qs(n,e,t,s){const c=Un(e,t),S=Un(e,s);return n.map((D,Q)=>D/c[Q]*S[Q])}function Eo(n,e,t){const s=Qs(n,e.mode,e.type,"int"),c=Po[e.mode][t.mode](...s);return Qs(c,t.mode,"int",t.type)}function Rn(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Ge{static black(e="int"){return new Ge([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ge(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Rn(e,"r")&&Rn(e,"g")&&Rn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Rn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==c[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Co(e,t,s)}getComponents(e,t="int"){return Xs(Eo(jt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ut=W("colp");class ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Ut()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ut("hsv"));const c=e.createElement("div");c.classList.add(Ut("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const S=e.createElement("div");S.classList.add(Ut("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Ut("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const Q=e.createElement("div");Q.classList.add(Ut("a"));const ye=e.createElement("div");ye.classList.add(Ut("ap")),ye.appendChild(this.alphaViews_.palette.element),Q.appendChild(ye);const Ee=e.createElement("div");Ee.classList.add(Ut("at")),Ee.appendChild(this.alphaViews_.text.element),Q.appendChild(Ee),this.element.appendChild(Q)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function as(n){const e=ve;return Se(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(Ks)})}function Ht(n){return n?.1:1}function Kt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Bo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function xt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const To={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Js(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return To[s](t)}function er(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[xt(e[1],255),xt(e[2],255),xt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function tr(n){return e=>{const t=er(e);return t?new Ge(t,"rgb",n):null}}function nr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[xt(e[1],255),xt(e[2],255),xt(e[3],255),xt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function sr(n){return e=>{const t=nr(e);return t?new Ge(t,"rgb",n):null}}function rr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Js(e[1]),xt(e[2],100),xt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ir(n){return e=>{const t=rr(e);return t?new Ge(t,"hsl",n):null}}function or(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Js(e[1]),xt(e[2],100),xt(e[3],100),xt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ar(n){return e=>{const t=or(e);return t?new Ge(t,"hsl",n):null}}function lr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=lr(n);return e?new Ge(e,"rgb","int"):null}function cr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Xe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Xe(parseInt(t[4],16),0,255,0,1)]:null}function Ao(n){const e=cr(n);return e?new Ge(e,"rgb","int"):null}function ur(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ge(t,"rgb",n):null}}function pr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ge(t,"rgb",n):null}}const Lo=[{parser:lr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:cr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:er,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:nr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:rr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:or,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ur,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:pr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function ls(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const fr={int:[Do,Ao,tr("int"),sr("int"),ir("int"),ar("int"),dr("int"),hr("int")],float:[tr("float"),sr("float"),ir("float"),ar("float"),dr("float"),hr("float")]};function zo(n){const e=fr[n];return t=>{if(typeof t!="string")return Ge.black(n);const s=e.reduce((c,S)=>c||S(t),null);return s??Ge.black(n)}}function cs(n){const e=fr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function _r(n){const e=at(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function mr(n,e="#"){const t=jt(n.getComponents("rgb")).map(_r).join("");return`${e}${t}`}function us(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(_r).join("");return`${e}${s}`}function vr(n,e){const t=ut(e==="float"?2:0);return`rgb(${jt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>vr(e,n)}function Vn(n,e){const t=ut(2),s=ut(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,D)=>(D===3?t:s)(S)).join(", ")})`}function Uo(n){return e=>Vn(e,n)}function Ro(n){const e=[ut(0),Ln,Ln];return`hsl(${jt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Vo(n){const e=[ut(0),Ln,Ln,ut(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function br(n,e){const t=ut(e==="float"?2:0),s=["r","g","b"];return`{${jt(n.getComponents("rgb",e)).map((S,D)=>`${s[D]}: ${t(S)}`).join(", ")}}`}function Oo(n){return e=>br(e,n)}function gr(n,e){const t=ut(2),s=ut(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,Q)=>{const ye=Q===3?t:s;return`${c[Q]}: ${ye(D)}`}).join(", ")}}`}function Fo(n){return e=>gr(e,n)}const No=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:mr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:us},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ro},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)}],[])];function ds(n){return No.reduce((e,t)=>e||(Bo(t.format,n)?t.stringifier:null),null)}const wn=W("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(wn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(wn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(wn("c")),s.appendChild(c),this.colorElem_=c;const S=e.createElement("div");S.classList.add(wn("m")),this.element.appendChild(S),this.markerElem_=S;const D=e.createElement("div");D.classList.add(wn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ge([t[0],t[1],t[2],0],"rgb"),c=new Ge([t[0],t[1],t[2],255],"rgb"),S=["to right",Vn(s),Vn(c)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=Vn(e);const D=Xe(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[S,D,Q]=c.getComponents("hsv");this.value.setRawValue(new Ge([S,D,Q,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=_t(Ht(!0),Tt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,Q]=s.getComponents("hsv");this.value.setRawValue(new Ge([c,S,D,Q+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){_t(Ht(!0),Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const rn=W("coltxt");function Wo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const S=n.createElement("option");return S.textContent=c.text,S.value=c.value,s.appendChild(S),s},n.createDocumentFragment())),e}class jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(rn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(rn("m")),this.modeElem_=Wo(e),this.modeElem_.classList.add(rn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(rn("mm")),c.appendChild(b(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(rn("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),pe(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){N(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(rn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return ut(n==="float"?2:0)}function Ko(n,e,t){const s=Un(n,e)[t];return new tn({min:0,max:s})}function ps(n,e,t){return new bn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Ht(!1),parser:e.parser,props:q.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:R(0,{constraint:Ko(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Yo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=R(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new jo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ps(e,t,0),ps(e,t,1),ps(e,t,2)];return s.forEach((c,S)=>{mn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(D,Q)=>{const ye=this.colorMode.rawValue,Ee=D.rawValue.getComponents(ye,this.colorType_);return Ee[S]=Q.rawValue,new Ge(Xs(jt(Ee),Ee[3]),ye,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const hs=W("hpl");class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(hs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(hs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(hs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=vr(new Ge([t,100,100],"hsv"));const s=Xe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(at(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,S,D,Q]=c.getComponents("hsv");this.value.setRawValue(new Ge([s,S,D,Q],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=_t(Ht(!1),Tt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,Q]=s.getComponents("hsv");this.value.setRawValue(new Ge([c+t,S,D,Q],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){_t(Ht(!1),Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fs=W("svp"),wr=64;class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(fs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=wr,s.width=wr,s.classList.add(fs("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(fs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,S=this.canvasElement.height,D=e.getImageData(0,0,c,S),Q=D.data;for(let Fe=0;Fe<S;Fe++)for(let Ne=0;Ne<c;Ne++){const Yt=Xe(Ne,0,c,0,100),yn=Xe(Fe,0,S,100,0),Pn=Zs(s[0],Yt,yn),On=(Fe*c+Ne)*4;Q[On]=Pn[0],Q[On+1]=Pn[1],Q[On+2]=Pn[2],Q[On+3]=255}e.putImageData(D,0,0);const ye=Xe(s[1],0,100,0,100);this.markerElem_.style.left=`${ye}%`;const Ee=Xe(s[2],0,100,100,0);this.markerElem_.style.top=`${Ee}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(e.point.x,0,e.bounds.width,0,100),c=Xe(e.point.y,0,e.bounds.height,100,0),[S,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ge([S,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ws(e.key)&&e.preventDefault();const[t,s,c,S]=this.value.rawValue.getComponents("hsv"),D=Ht(!1),Q=_t(D,Tt(e)),ye=_t(D,vn(e));Q===0&&ye===0||this.value.setRawValue(new Ge([t,s+Q,c+ye,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Ht(!1),s=_t(t,Tt(e)),c=_t(t,vn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new qo(e,{value:this.value,viewProps:this.viewProps}),text:new bn(e,{parser:Bt,baseStep:.1,props:q.fromObject({draggingScale:.01,formatter:ut(2)}),value:R(0,{constraint:new tn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&mn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const S=s.rawValue.getComponents();return S[3]=c.rawValue,new Ge(S,s.rawValue.mode)}}),this.textC_=new Yo(e,{colorType:t.colorType,parser:Bt,value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const _s=W("colsw");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(_s("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(_s("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=us(e)}onValueChange_(){this.update_()}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps})}}class ms{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new na(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new An(e,{parser:t.parser,props:q.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Gs(e,{viewProps:this.viewProps}):null;const c=new ea(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),mn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),We(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=te(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sa(n,e){return Ge.isColorObject(n)?Ge.fromObject(n,e):Ge.black(e)}function ra(n){return jt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ia(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function oa(n){return new Ge([n>>16&255,n>>8&255,n&255],"rgb")}function aa(n){return new Ge([n>>24&255,n>>16&255,n>>8&255,Xe(n&255,0,255,0,1)],"rgb")}function la(n){return typeof n!="number"?Ge.black():oa(n)}function ca(n){return typeof n!="number"?Ge.black():aa(n)}function ua(n){const e=ds(n);return e?(t,s)=>{gn(t,e(s))}:null}function da(n){const e=n?ia:ra;return(t,s)=>{gn(t,e(s))}}function pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function fa(n,e){return(t,s)=>{n?pa(t,s,e):ha(t,s,e)}}function vs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function _a(n){return n?e=>us(e,"0x"):e=>mr(e,"0x")}function ma(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ma(e))return null;const t=as(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>vs(n.params)?ca:la,equals:Ge.equals,writer:n=>da(vs(n.params))},controller:n=>{const e=vs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new ms(n.document,{colorType:"int",expanded:t??!1,formatter:_a(e),parser:cs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ba(n){return Ge.isRgbaColorObject(n)}function ga(n){return e=>sa(e,n)}function wa(n,e){return t=>n?gr(t,e):br(t,e)}const xa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ge.isColorObject(n))return null;const t=as(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ga(Kt(n.params)),equals:Ge.equals,writer:n=>fa(ba(n.initialValue),Kt(n.params))},controller:n=>{var e;const t=Ge.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,S=(e=Kt(n.params))!==null&&e!==void 0?e:"int";return new ms(n.document,{colorType:S,expanded:s??!1,formatter:wa(t,S),parser:cs(S),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ls(n,Kt(e));if(!t||!ds(t))return null;const c=as(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return zo((e=Kt(n.params))!==null&&e!==void 0?e:"int")},equals:Ge.equals,writer:n=>{const e=ls(n.initialValue,Kt(n.params));if(!e)throw Y.shouldNeverHappen();const t=ua(e);if(!t)throw Y.notBindable();return t}},controller:n=>{const e=ls(n.initialValue,Kt(n.params));if(!e)throw Y.shouldNeverHappen();const t=ds(e);if(!t)throw Y.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new ms(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:cs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Rt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var S,D;return(D=(S=this.components[c])===null||S===void 0?void 0:S.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const xr=W("pndtxt");class Pa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(xr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(xr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Sa(n,e,t){return new bn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:R(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class bs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Sa(e,t,c)),this.acs_.forEach((s,c)=>{mn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[c],backward:(S,D)=>{const Q=t.assembly.toComponents(S.rawValue);return Q[c]=D.rawValue,t.assembly.fromComponents(Q)}})}),this.view=new Pa(e,{textViews:this.acs_.map(s=>s.view)})}}function yr(n,e){return"step"in n&&!G(n.step)?new Dn(n.step,e):null}function Pr(n){return!G(n.max)&&!G(n.min)?new tn({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Is({max:n.max,min:n.min}):null}function Ca(n){const e=Mt(n,tn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Mt(n,Is);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ea(n,e){const t=[],s=yr(n,e);s&&t.push(s);const c=Pr(n);c&&t.push(c);const S=os(n.options);return S&&t.push(S),new dn(t)}const ka={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=Se(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(In),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s,constraint:n=>Ea(n.params,n.initialValue),writer:n=>gn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Mt(s,pn);if(c)return new hn(n.document,{props:new q({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ut(zn(s,t.rawValue)),D=s&&Mt(s,tn);return D?new is(n.document,{baseStep:nn(s),parser:Bt,sliderProps:new q({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:q.fromObject({draggingScale:sn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new bn(n.document,{baseStep:nn(s),parser:Bt,props:q.fromObject({draggingScale:sn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Vt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Sr={toComponents:n=>n.getComponents(),fromComponents:n=>new Vt(...n)},on=W("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element),pe(t.expanded,ke(this.element,on(void 0,"expanded")));const s=e.createElement("div");s.classList.add(on("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(on("b")),c.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const S=e.createElement("div");if(S.classList.add(on("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(on("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Ot=W("p2dp");class Ba{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Ot()),t.layout==="popup"&&this.element.classList.add(Ot(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ot("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(Ot("g")),this.padElement.appendChild(c),this.svgElem_=c;const S=e.createElementNS(E,"line");S.classList.add(Ot("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const D=e.createElementNS(E,"line");D.classList.add(Ot("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const Q=e.createElementNS(E,"line");Q.classList.add(Ot("l")),Q.setAttributeNS(null,"x1","50%"),Q.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(Q),this.lineElem_=Q;const ye=e.createElement("div");ye.classList.add(Ot("m")),this.padElement.appendChild(ye),this.markerElem_=ye,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Xe(e,-s,+s,0,100),S=Xe(t,-s,+s,0,100),D=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Cr(n,e,t){return[_t(e[0],Tt(n)),_t(e[1],vn(n))*(t?1:-1)]}class Ta{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ba(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Xe(e.point.x,0,e.bounds.width,-s,+s),S=Xe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Vt(c,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ws(e.key)&&e.preventDefault();const[t,s]=Cr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Vt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Cr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Gs(e,{viewProps:this.viewProps}):null;const S=new Ta(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new bs(e,{assembly:Sr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),mn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,Q)=>Q.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),We(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=te(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class an{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Er={toComponents:n=>n.getComponents(),fromComponents:n=>new an(...n)};function Aa(n){return an.isObject(n)?new an(n.x,n.y,n.z):new an}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new Rt({assembly:Er,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y),Dt("z"in n?n.z:void 0,e.z)]})}function gs(n,e){return{baseStep:nn(e),constraint:e,textProps:q.fromObject({draggingScale:sn(e,n),formatter:ut(zn(e,n))})}}const za={id:"input-point3d",type:"input",accept:(n,e)=>{if(!an.isObject(n))return null;const t=ve,s=Se(e,{x:t.optional.custom(Gt),y:t.optional.custom(Gt),z:t.optional.custom(Gt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>Ia(n.params,n.initialValue),equals:an.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Rt))throw Y.shouldNeverHappen();return new bs(n.document,{assembly:Er,axes:[gs(e.rawValue.x,t.components[0]),gs(e.rawValue.y,t.components[1]),gs(e.rawValue.z,t.components[2])],parser:Bt,value:e,viewProps:n.viewProps})}};class ln{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const kr={toComponents:n=>n.getComponents(),fromComponents:n=>new ln(...n)};function Ga(n){return ln.isObject(n)?new ln(n.x,n.y,n.z,n.w):new ln}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ra(n,e){return new Rt({assembly:kr,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y),Dt("z"in n?n.z:void 0,e.z),Dt("w"in n?n.w:void 0,e.w)]})}function Va(n,e){return{baseStep:nn(e),constraint:e,textProps:q.fromObject({draggingScale:sn(e,n),formatter:ut(zn(e,n))})}}const Oa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!ln.isObject(n))return null;const t=ve,s=Se(e,{x:t.optional.custom(Gt),y:t.optional.custom(Gt),z:t.optional.custom(Gt),w:t.optional.custom(Gt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Ra(n.params,n.initialValue),equals:ln.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Rt))throw Y.shouldNeverHappen();return new bs(n.document,{assembly:kr,axes:e.rawValue.getComponents().map((s,c)=>Va(s,t.components[c])),parser:Bt,value:e,viewProps:n.viewProps})}};function Fa(n){const e=[],t=os(n.options);return t&&e.push(t),new dn(e)}const Na={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Se(e,{options:ve.optional.custom(In)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qs,constraint:n=>Fa(n.params),writer:n=>gn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Mt(s,pn);return c?new hn(e,{props:new q({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new An(e,{parser:S=>S,props:q.fromObject({formatter:ts}),value:t,viewProps:n.viewProps})}},xn={monitor:{defaultInterval:200,defaultLineCount:3}},Mr=W("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Mr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Mr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class ws{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Br=W("sgl");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Br()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Br("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class xs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Wa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Se(e,{lineCount:ve.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs},controller:n=>{var e;return n.value.rawValue.length===1?new xs(n.document,{formatter:Vs,value:n.value,viewProps:n.viewProps}):new ws(n.document,{formatter:Vs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:xn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ft=W("grl");class ja{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(Ft("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const S=e.createElement("div");S.classList.add(Ft("t"),W("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const Yt=Xe(Ne,0,t,0,e.width),yn=Xe(Fe,s,c,e.height,0);S.push([Yt,yn].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const D=this.tooltipElem_,Q=this.value.rawValue[this.cursor_.rawValue];if(Q===void 0){D.classList.remove(Ft("t","a"));return}const ye=Xe(this.cursor_.rawValue,0,t,0,e.width),Ee=Xe(Q,s,c,e.height,0);D.style.left=`${ye}px`,D.style.top=`${Ee}px`,D.textContent=`${this.formatter_(Q)}`,D.classList.contains(Ft("t","a"))||(D.classList.add(Ft("t","a"),Ft("t","in")),r(D),D.classList.remove(Ft("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=R(-1),this.view=new ja(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new qt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Xe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Xe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ys(n){return"format"in n&&!G(n.format)?n.format:ut(2)}function Ka(n){var e;return n.value.rawValue.length===1?new xs(n.document,{formatter:ys(n.params),value:n.value,viewProps:n.viewProps}):new ws(n.document,{formatter:ys(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:xn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ya(n){var e,t,s;return new Ha(n.document,{formatter:ys(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:xn.monitor.defaultLineCount,props:q.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Tr(n){return"view"in n&&n.view==="graph"}const Za={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=Se(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Tr(n)?64:1,reader:n=>$s},controller:n=>Tr(n.params)?Ya(n):Ka(n)},Xa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ve,s=Se(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ws(n.document,{formatter:ts,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:xn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new xs(n.document,{formatter:ts,value:t,viewProps:n.viewProps})}};function Qa(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=ve,S={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(S),Q=n.binding.constraint?n.binding.constraint(S):void 0,ye=R(D(s.initialValue),{constraint:Q,equals:n.binding.equals}),Ee=new Pi({reader:D,target:e.target,value:ye,writer:n.binding.writer(S)}),Fe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,Yt=n.controller({constraint:Q,document:e.document,initialValue:s.initialValue,params:s.params,value:Ee.value,viewProps:h.create({disabled:Fe,hidden:Ne})});return new $e(e.document,{binding:Ee,blade:Be(),props:q.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Yt})}function Ja(n,e){return e===0?new xi:new yi(n,e??xn.monitor.defaultInterval)}function el(n,e){var t,s,c;const S=ve,D=n.accept(e.target.read(),e.params);if(G(D))return null;const Q={target:e.target,initialValue:D.initialValue,params:D.params},ye=n.binding.reader(Q),Ee=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Fe=S.optional.number(e.params.interval).value,Ne=new ki({reader:ye,target:e.target,ticker:Ja(e.document,Fe),value:Si(Ee)}),Yt=S.optional.boolean(e.params.disabled).value,yn=S.optional.boolean(e.params.hidden).value,Pn=n.controller({document:e.document,params:D.params,value:Ne.value,viewProps:h.create({disabled:Yt,hidden:yn})});return new Ke(e.document,{binding:Ne,blade:Be(),props:q.fromObject({label:"label"in e.params?(c=S.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Pn})}class tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new Y({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((D,Q)=>D??Qa(Q,{document:e,target:t,params:s}),null);if(S)return S;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((S,D)=>S??el(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,S)=>c??wi(S,{document:e,params:t}),null);if(!s)throw new Y({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof $e)return new Je(e);if(e instanceof Ke)return new et(e);if(e instanceof Pe)return new gt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Y.shouldNeverHappen();return t}}function nl(){const n=new tl;return[ll,za,Oa,Na,ka,ya,xa,va,mo,Wa,Xa,Za,ge,Kn,Yn,As].forEach(e=>{n.register(e)}),n}function sl(n){return Vt.isObject(n)?new Vt(n.x,n.y):new Vt}function rl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Dt(n,e){if(!n)return;const t=[],s=yr(n,e);s&&t.push(s);const c=Pr(n);return c&&t.push(c),new dn(t)}function il(n,e){return new Rt({assembly:Sr,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y)]})}function Dr(n,e){const[t,s]=n?Ca(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=nn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ol(n,e){const t=e instanceof Rt?e.components[0]:void 0,s=e instanceof Rt?e.components[1]:void 0,c=Dr(t,n.x),S=Dr(s,n.y);return Math.max(c,S)}function Ar(n,e){return{baseStep:nn(e),constraint:e,textProps:q.fromObject({draggingScale:sn(e,n),formatter:ut(zn(e,n))})}}function al(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ll={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Vt.isObject(n))return null;const t=ve,s=Se(e,{expanded:t.optional.boolean,picker:t.optional.custom(Ks),x:t.optional.custom(Gt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sl,constraint:n=>il(n.params,n.initialValue),equals:Vt.equals,writer:n=>rl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Rt))throw Y.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[Ar(t.rawValue.x,s.components[0]),Ar(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:al(n.params),maxValue:ol(t.rawValue,s),parser:Bt,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class Lr extends w{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ir extends w{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class zr extends w{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const cl=function(){return{id:"list",type:"blade",accept(n){const e=ve,t=Se(n,{options:e.required.custom(In),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new pn(Ys(n.params.options)),t=R(n.params.value,{constraint:e}),s=new hn(n.document,{props:new q({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:q.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof hn)?null:new Lr(n.controller)}}}();function ul(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function dl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class pl extends vt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find($e).map(s=>s.binding);dl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find($e).map(t=>t.binding.target);return ul(e)}refresh(){this.controller_.rackController.rack.find($e).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class hl extends ft{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const fl={id:"slider",type:"blade",accept(n){const e=ve,t=Se(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new tn({max:n.params.max,min:n.params.min}),S=new is(n.document,{baseStep:1,parser:Bt,sliderProps:new q({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:q.fromObject({draggingScale:sn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ro}),value:R(s,{constraint:c}),viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:q.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof is)?null:new Ir(n.controller)}},_l=function(){return{id:"text",type:"blade",accept(n){const e=ve,t=Se(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new An(n.document,{parser:n.params.parse,props:q.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:R(n.params.value),viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:q.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof An)?null:new zr(n.controller)}}}();function ml(n){const e=n.createElement("div");return e.classList.add(W("dfw")()),n.body&&n.body.appendChild(e),e}function Gr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends pl{constructor(e){var t,s;const c=e??{},S=(t=c.document)!==null&&t!==void 0?t:a(),D=nl(),Q=new hl(S,{expanded:c.expanded,blade:Be(),props:q.fromObject({title:c.title}),viewProps:h.create()});super(Q,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:ml(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Y.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Y.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Gr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Gr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[fl,cl,As,_l]})}}const bl=new P("3.1.10");f.BladeApi=w,f.ButtonApi=ce,f.FolderApi=vt,f.InputBindingApi=Je,f.ListApi=Lr,f.MonitorBindingApi=et,f.Pane=vl,f.SeparatorApi=un,f.SliderApi=Ir,f.TabApi=$t,f.TabPageApi=zt,f.TextApi=zr,f.TpChangeEvent=M,f.VERSION=bl,Object.defineProperty(f,"__esModule",{value:!0})})})(Ss,Ss.exports);var ql=Ss.exports;const Wl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  _pad          : f32,
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
    if is_texd && atlas_params.atlas_width > 0u {
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
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
    }
}
`,jl=`// 2DGS render — vertex+fragment.
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
  _pad0         : vec4<f32>,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;

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
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
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
        return vec4<f32>(color_e, 1.0) * alpha_e;
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

    let depth = dot(in.depth_plane, vec3<f32>(s, 1.0));
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
        let uv = in.uv_base + s * in.uv_scale;
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, i32(in.layer), 0.0);
        color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
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
`,Yl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,Zl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
`,Xl=`// shader implementing gpu radix sort.

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
`,Ql=`// shader implementing gpu radix sort.

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
`,Jl=`// ============================================================================
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
}`,li=32,Cs=1,Es=2,Hr=4,ks=8,ci=4,ec=7<<ci,Kr=128,Yr=256,tc=0,Nt=new ArrayBuffer(li),pt={canvas_size:new Uint32Array(Nt,0,2),accel_flags:new Uint32Array(Nt,8,1),feature_mode:new Uint32Array(Nt,12,1),gaussian_scaling:new Float32Array(Nt,16,1),sh_bias:new Float32Array(Nt,20,1),color_K:new Uint32Array(Nt,24,1),walltime:new Float32Array(Nt,28,1)};function nc(o){pt.canvas_size[0]=o.width>>>0,pt.canvas_size[1]=o.height>>>0,pt.accel_flags[0]=(o.accel_flags??Cs|Es)>>>0,pt.feature_mode[0]=(o.feature_mode??tc)>>>0,pt.gaussian_scaling[0]=o.gaussian_scaling??1,pt.sh_bias[0]=o.sh_bias??.5,pt.color_K[0]=(o.color_K??0)>>>0,pt.walltime[0]=o.walltime??0}function ui(o,l){o.queue.writeBuffer(l,0,Nt)}function Hn(o,l,f){f&&o&&l&&ui(o,l)}function Fn(o,l,f,P,w=!0){pt.canvas_size[0]=o>>>0,pt.canvas_size[1]=l>>>0,Hn(f??null,P??null,w)}function Zr(o,l,f,P=!0){pt.gaussian_scaling[0]=o,Hn(l??null,f??null,P)}function Xr(o,l,f,P=!0){pt.sh_bias[0]=o,Hn(l??null,f??null,P)}function cn(o,l,f,P=!0){let w=pt.accel_flags[0];if(o.oac!==void 0&&(w=o.oac?w|Cs:w&~Cs),o.spr!==void 0&&(w=o.spr?w|Es:w&~Es),o.bfc!==void 0&&(w=o.bfc?w|Hr:w&~Hr),o.meshCull!==void 0&&(w=o.meshCull?w|ks:w&~ks),o.meshSampleMode!==void 0){const k=(o.meshSampleMode&7)<<ci;w=w&~ec|k}o.meshSilhouetteCull!==void 0&&(w=o.meshSilhouetteCull?w|Kr:w&~Kr),o.meshInvertDepth!==void 0&&(w=o.meshInvertDepth?w|Yr:w&~Yr),pt.accel_flags[0]=w>>>0,Hn(l??null,f??null,P)}const sc=256,rc=li,ic=8,oc=96,ac=12,Ds=8,At=1<<Ds,Xt=256,qn=32/Ds,lc=0,Qr=qn&1;function Jr(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function cc(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),P=o.createPipelineLayout({bindGroupLayouts:[f]}),w=k=>o.createComputePipeline({layout:P,compute:{module:l,entryPoint:k,constants:{WG_SIZE:Xt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function uc(o,l,f){const P=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[P]}),M=o.createPipelineLayout({bindGroupLayouts:[w]}),V=[];for(let T=0;T<qn;T++){const A={PASS_ID:T+lc,RS_RADIX_LOG2:Ds,RS_RADIX_SIZE:At};V.push({localHistogram:o.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:A}})})}return{passes:V,localHistogramBindGroupLayout:P,scatterBindGroupLayout:w}}function dc(o){const l=o.createShaderModule({label:"local histogram",code:Ql}),f=o.createShaderModule({label:"scatter",code:Xl}),P=o.createShaderModule({label:"blelloch prefix",code:Jl}),w=cc(o,P),k=uc(o,l,f);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function pc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),P=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(k,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:P,rectsBuffer:w,texParamsBuffer:k,meta:M}}class hc{constructor(l,f,P,w,k,M=null,V=null){j(this,"device");j(this,"pc");j(this,"presentationFormat");j(this,"camera_buffer");j(this,"render_settings_buffer");j(this,"draw_indirect_buffer");j(this,"splat_2d_buffer");j(this,"querySet");j(this,"resolveBuffer");j(this,"resultBuffer");j(this,"queriesPerFrame",ic);j(this,"queryCapacityFrames",200);j(this,"sort_prefixBindGroup");j(this,"sort_pipelines");j(this,"sort_localHistogramBindGroups");j(this,"sort_scatterBindGroups");j(this,"lastFrame",0);j(this,"frameCount",0);j(this,"preprocessPipeline");j(this,"cullPipeline");j(this,"renderPipeline");j(this,"indirectPipeline");j(this,"sort_info_buffer");j(this,"sort_ping_pong");j(this,"crsBg");j(this,"gsBg");j(this,"cullBg2");j(this,"preprocessBg1");j(this,"renderSplatsBindGroup");j(this,"renderSettingsBindGroup");j(this,"atlasBindGroup");j(this,"indirectBindGroup");j(this,"sh_solvers_buffer");j(this,"mesh");j(this,"meshDepthPipeline",null);j(this,"meshDepthCameraBindGroup",null);j(this,"meshDepthMarginBindGroup",null);j(this,"meshMarginBuffer",null);j(this,"meshDepthTexture",null);j(this,"meshDepthView",null);j(this,"meshCullBindGroupLayout");j(this,"meshCullBindGroup");j(this,"meshCullWidth",0);j(this,"meshCullHeight",0);j(this,"meshStubTexture");j(this,"meshStubView");j(this,"meshOverlayPipeline",null);j(this,"meshOverlayEnabled",!1);j(this,"bgColor",[0,0,0,0]);j(this,"showPerfDialogNext",!1);j(this,"requestReorderNextFrame",!1);j(this,"reorderInFlight",!1);j(this,"downloadOnceNextRead",!1);j(this,"downloadOnceFileName","fps_metrics");j(this,"allFrameTimes",[]);j(this,"lastStageBreakdownMs",null);j(this,"timeQueryEnabled");j(this,"atlas");j(this,"atlasParamsBuffer");this.mesh=V;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&St("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=P,this.camera_buffer=w,this.atlas=M??pc(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",q=>{console.error("A WebGPU error was not captured:",q.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Xt-1)/Xt)+1)*Xt,U=Math.ceil(A/Xt);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const G=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=dc(f);const Z=[Jr(A,f),Jr(A,f)],z=f.createBuffer({label:"workgroup histograms",size:U*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=f.createBuffer({label:"workgroup prefixes",size:U*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"digit base",size:At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=Math.ceil(U/Xt),ce=Math.ceil($/Xt),H=f.createBuffer({label:"prefix l0 sums",size:$*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=f.createBuffer({label:"prefix l0 offsets",size:$*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=f.createBuffer({label:"prefix l1 sums",size:ce*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),le=f.createBuffer({label:"prefix l1 offsets",size:ce*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:K}},{binding:3,resource:{buffer:H}},{binding:4,resource:{buffer:X}},{binding:5,resource:{buffer:W}},{binding:6,resource:{buffer:le}},{binding:7,resource:{buffer:Y}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:K}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:K}}]})],this.sort_info_buffer=G,this.sort_ping_pong=Z;const ee=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),pe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ie=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ee,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:pe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ie,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const ke=this.device.createShaderModule({code:Hl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ke,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const Ve=this.device.createShaderModule({code:Kl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ee,pe,ie,this.meshCullBindGroupLayout]}),compute:{module:Ve,entryPoint:"surfel_cull"}}),this.mesh!==null){const q=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:q,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const se=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:se,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const he=this.device.createShaderModule({code:Yl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[q,se]}),vertex:{module:he,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const ze=this.device.createShaderModule({code:Wl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ee,de]}),compute:{module:ze,entryPoint:"preprocess"}});const Re=this.device.createShaderModule({code:jl});Re.getCompilationInfo().then(q=>{q.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),q.messages.forEach(se=>{(se.type==="error"?console.error:se.type==="warning"?console.warn:console.log)(`${se.type} (line ${se.lineNum}:${se.linePos}): ${se.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Te=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),we=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Me=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),R=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Te,we,Me]}),vertex:{module:Re,entryPoint:"vs_main"},fragment:{module:Re,entryPoint:"fs_main",constants:{BETA_KERNEL:R},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(q=>{q?console.error("[render_2dgs] pipeline create validation error:",q.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Te,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Qr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Me,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){cn({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),f=new Uint32Array(l),P=new Float32Array(l);f[0]=this.atlas.meta.width|0,f[1]=this.atlas.meta.layer_h|0,P[2]=this.atlas.meta.uv_extent||0,P[3]=0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureMeshDepthTexture(l,f){var P;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((P=this.meshDepthTexture)==null||P.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&oi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),P=f*Uint32Array.BYTES_PER_ELEMENT;if(P===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[Qr].sort_indices_buffer,0,w,0,P),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(l,f,P=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=P&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(pt.accel_flags[0]&ks)!==0){const T=pt.canvas_size[0],A=pt.canvas_size[1];this.ensureMeshDepthTexture(T,A);const U={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(U);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setVertexBuffer(1,this.mesh.normalBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const A=l.beginComputePass(T);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.meshCullBindGroup);const U=Math.ceil(this.pc.num_points/sc);A.dispatchWorkgroups(U,1,1),A.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const A=l.beginComputePass(T);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let T=0;T<qn;T++){const A=T&1,U=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[A],Z=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${T}`};M&&T==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const K=l.beginComputePass(z);K.setPipeline(U.localHistogram),K.setBindGroup(0,G),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,At,1),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${T}`};M&&T==qn-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const K=l.beginComputePass(z);K.setPipeline(U.scatterElements),K.setBindGroup(0,Z),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}{const T={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const A=l.beginRenderPass(T);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const U=this.device.createShaderModule({code:Zl}),G=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Z=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[G,Z]}),vertex:{module:U,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:U,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},A=l.beginRenderPass(T);A.setPipeline(this.meshOverlayPipeline),A.setBindGroup(0,this.meshDepthCameraBindGroup),A.setBindGroup(1,this.meshDepthMarginBindGroup),A.setVertexBuffer(0,this.mesh.vertexBuffer),A.setVertexBuffer(1,this.mesh.normalBuffer),A.setIndexBuffer(this.mesh.indexBuffer,"uint32"),A.drawIndexed(this.mesh.numIndices),A.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const P=this.device.createCommandEncoder({label:"timestamp resolve encoder"});P.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),P.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([P.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),V=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let A=0;for(let ce=0;ce<M;ce++){const H=(V+ce)%this.queryCapacityFrames,X=H*this.queriesPerFrame;let W=!0;for(let le=0;le<w.length;le++){const[ee,pe,ie]=w[le];if(k[X+ie]===0n||k[X+pe]===0n||k[X+pe]<k[X+ie]){W=!1;break}}if(!W){!f&&H%60===0&&console.debug("[timestamp] frame slot",H,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let le=0;le<w.length;le++){const[ee,pe,ie]=w[le],de=Number(k[X+ie]),ke=Number(k[X+pe]);T[le].push((ke-de)/1e6)}}if(A===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const U=[];let G=0,Z=0,z=0;for(let ce=0;ce<w.length;ce++){const H=w[ce][0],X=T[ce];let W=0;if(H==="Total"){const le=this.allFrameTimes;W=le.reduce((ie,de)=>ie+de,0)/le.length;const ee=[...le].sort((ie,de)=>ie-de);G=ee[Math.floor(ee.length*.99)]||0;const pe=le.reduce((ie,de)=>ie+Math.pow(de-W,2),0)/le.length;Z=Math.sqrt(pe),z=W}else W=X.reduce((le,ee)=>le+ee,0)/X.length;U.push([H,W])}this.lastFrame+=this.frameCount,this.frameCount=0;const K=Object.fromEntries(U);this.lastStageBreakdownMs={cull:K.Culling??0,preprocess:K.Preprocess??0,sort:K.Sort??0,render:K.Render??0,total:K.Total??0};const $=`[TIMESTAMP - ${this.constructor.name}]
`+U.map(([ce,H])=>`${ce}: ${H.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log($),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ce=`Stage,ms
`,H=U.map(([le,ee])=>`${le},${ee.toFixed(3)}`).join(`
`),X="data:text/csv;charset=utf-8,"+encodeURIComponent(ce+H),W=document.createElement("a");W.href=X,W.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(W),W.click(),W.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert($)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,P=l?l.height:1;nc({width:f,height:P,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ui(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:En(this.pc.num_points*oc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:En(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,P=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${P}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function fc(o,l){return 2*Math.atan(l/(2*o))}function _c(o,l,f,P){const w=Math.tan(P/2),k=Math.tan(f/2),M=w*o,V=-M,T=k*o,A=-T,U=ct.create();return U[0]=2*o/(T-A),U[5]=-2*o/(M-V),U[2]=(T+A)/(T-A),U[6]=(M+V)/(M-V),U[14]=1,U[10]=l/(l-o),U[11]=-(l*o)/(l-o),ct.transpose(U,U),U}async function mc(o){St(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return St(`loaded cameras count: ${f.length}`),f.map(P=>{const w=I.clone(P.position),k=yt.create(...P.rotation.flat()),M=k[0],V=k[4],T=k[8],A=k[1],U=k[5],G=k[9],Z=k[2],z=k[6],K=k[10];M*(U*K-G*z)-V*(A*K-G*Z)+T*(A*z-U*Z)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const $=ct.fromMat3(k);return{position:w,rotation:$,img_name:P.img_name,id:P.id}})}const vc=4*2,bc=4*16,di=4*bc+2*vc;function gc(o){return o.createBuffer({label:"camera uniform",size:di,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Zt=new Float32Array(di/Float32Array.BYTES_PER_ELEMENT),Wn=class Wn{constructor(l,f){j(this,"uniform_buffer");j(this,"position",I.create());j(this,"rotation",ct.create());j(this,"fovY",45/180*Math.PI);j(this,"fovX");j(this,"focal",$r.create());j(this,"viewport",$r.create());j(this,"view_matrix",ct.identity());j(this,"view_inv_matrix",ct.identity());j(this,"proj_matrix",ct.identity());j(this,"proj_inv_matrix",ct.identity());j(this,"_negPos",I.create());j(this,"look",I.create(0,0,1));j(this,"up",I.create(0,1,0));j(this,"right",I.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=gc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=fc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=_c(.01,100,this.fovX,this.fovY),ct.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ct.copy(this.rotation,this.view_matrix),ct.translate(this.view_matrix,this._negPos,this.view_matrix),ct.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(Wn.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;Zt.set(this.view_matrix,l),l+=16,Zt.set(this.view_inv_matrix,l),l+=16,Zt.set(this.proj_matrix,l),l+=16,Zt.set(this.proj_inv_matrix,l),l+=16,Zt.set(this.viewport,l),l+=2,Zt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Zt)}set_preset(l){I.copy(l.position,this.position),ct.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};j(Wn,"Z_AXIS",I.create(0,0,1));let Ms=Wn;const wc=I.create(1,0,0),xc=I.create(0,1,0);function yc(o,l){const f=o[0],P=o[4],w=o[8],k=o[1],M=o[5],V=o[9],T=o[2],A=o[6],U=o[10],G=f+M+U;let Z,z,K,Y;if(G>0){const $=.5/Math.sqrt(G+1);Z=.25/$,z=(A-V)*$,K=(w-T)*$,Y=(k-P)*$}else if(f>M&&f>U){const $=2*Math.sqrt(1+f-M-U);Z=(A-V)/$,z=.25*$,K=(P+k)/$,Y=(w+T)/$}else if(M>U){const $=2*Math.sqrt(1+M-f-U);Z=(w-T)/$,z=(P+k)/$,K=.25*$,Y=(V+A)/$}else{const $=2*Math.sqrt(1+U-f-M);Z=(k-P)/$,z=(w+T)/$,K=(V+A)/$,Y=.25*$}return l[0]=z,l[1]=K,l[2]=Y,l[3]=Z,l}class Pc{constructor(l){j(this,"element");j(this,"enabled",!0);j(this,"center",I.create(0,0,0));j(this,"up",I.create(0,1,0));j(this,"rotation",[0,0]);j(this,"shift",[0,0]);j(this,"scroll",0);j(this,"speed",.1);j(this,"sensitivity",.08);j(this,"leftPressed",!1);j(this,"rightPressed",!1);j(this,"leftDragPans",!1);j(this,"lastX",0);j(this,"lastY",0);j(this,"touches",new Map);j(this,"lastTouchCenter",null);j(this,"lastPinchDistance",null);j(this,"lastTwoFingerAngle",null);j(this,"lastTouchCount",0);j(this,"roll",0);j(this,"_dir",I.create());j(this,"_right",I.create());j(this,"_upCam",I.create());j(this,"_scratch",I.create());j(this,"_qY",dt.create());j(this,"_qX",dt.create());j(this,"_qRot",dt.create());j(this,"_qLocal",dt.create());j(this,"_qWorldToCam",dt.create());j(this,"_scratchMat3",yt.create());j(this,"bboxMin",null);j(this,"bboxMax",null);j(this,"anchor",I.create(0,0,0));j(this,"downCallback",l=>{var f,P,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(P=(f=l.target)==null?void 0:f.setPointerCapture)==null||P.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});j(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,P=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=P):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=P)});j(this,"upCallback",l=>{var f,P,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(P=(f=l.target)==null?void 0:f.releasePointerCapture)==null||P.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});j(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;I.set(f[2],f[6],f[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(f[0],f[1],f[2]);const P=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,k=(l[2]+f[2])*.5;I.set(P,w,k,this.center),I.set(P,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let P=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const V=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],A=this.bboxMax[M]-this.camera.position[M];if(Math.abs(V)>1e-8){const U=T/V,G=A/V;P=Math.max(P,Math.min(U,G)),w=Math.min(w,Math.max(U,G))}else if(T>0||A<0){k=!0;break}}!k&&P<=w&&w>0&&(f=(Math.max(P,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const P=I.dot(this._scratch,this._dir);f=P>.001?P:I.length(this._scratch)}f=Math.max(.1,f),I.scale(this._dir,f,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const P=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=P*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),P=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,k=f[1].x-f[0].x,M=f[1].y-f[0].y,V=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=P-this.lastTouchCenter[0],U=w-this.lastTouchCenter[1],G=Math.hypot(A,U),Z=Math.abs(V-this.lastPinchDistance);let z=T-this.lastTwoFingerAngle;z>Math.PI&&(z-=2*Math.PI),z<-Math.PI&&(z+=2*Math.PI),G>.5&&(this.shift[1]-=A,this.shift[0]+=U),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(V/this.lastPinchDistance)*10),Math.abs(z)>.0087&&(this.roll+=-z)}this.lastTouchCenter=[P,w],this.lastPinchDistance=V,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const Y=f.rotation;this.up[0]=Y[1],this.up[1]=Y[5],this.up[2]=Y[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let P=!1;if(Math.abs(this.roll)>1e-4){const Y=f.rotation;I.set(Y[2],Y[6],Y[10],this._scratch),I.normalize(this._scratch,this._scratch),dt.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,P=!0}I.subtract(f.position,this.center,this._dir);let w=I.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);I.scale(this._dir,k/w,this._dir),w=k;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const V=I.create(M[1],M[5],M[9]);I.normalize(V,V),I.length(V)<1e-6&&I.set(0,1,0,V);const T=l*this.speed*.1*w,A=this.shift[1]*T,U=-this.shift[0]*T;I.scale(this._right,A,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position),I.scale(V,U,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position);const G=this.rotation[0]*l*this.sensitivity,Z=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Z)>1e-5||P){const Y=f.rotation;yc(Y,this._qWorldToCam),dt.fromAxisAngle(wc,-Z,this._qX),dt.fromAxisAngle(xc,-G,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),yt.fromQuat(this._qWorldToCam,this._scratchMat3),ct.fromMat3(this._scratchMat3,f.rotation);const $=f.rotation,ce=$[2],H=$[6],X=$[10];f.position[0]=this.center[0]-ce*w,f.position[1]=this.center[1]-H*w,f.position[2]=this.center[2]-X*w,this.up[0]=$[1],this.up[1]=$[5],this.up[2]=$[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,f.position);f.update_buffer();const K=Math.pow(.8,l*60);this.rotation[0]*=K,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=K,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=K,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=K,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=K,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function pi(o){const l=I.create();for(const f of o)I.add(l,f,l);return I.scale(l,1/Math.max(o.length,1),l)}function hi(o,l){const f=yt.create();yt.inverse(o,f);const P=I.create();return P[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],P[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],P[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],P}function Sc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],P=(T,A)=>l[T*3+A],w=(T,A,U)=>{l[T*3+A]=U},k=(T,A)=>f[T*3+A],M=(T,A,U)=>{f[T*3+A]=U};for(let T=0;T<30;T++){let A=0,U=1,G=Math.abs(P(0,1));if(Math.abs(P(0,2))>G&&(A=0,U=2,G=Math.abs(P(0,2))),Math.abs(P(1,2))>G&&(A=1,U=2,G=Math.abs(P(1,2))),G<1e-12)break;const Z=P(A,A),z=P(U,U),K=P(A,U);let Y;Math.abs(Z-z)<1e-30?Y=Math.PI/4*Math.sign(K):Y=.5*Math.atan2(2*K,Z-z);const $=Math.cos(Y),ce=Math.sin(Y);for(let H=0;H<3;H++){const X=P(H,A),W=P(H,U);w(H,A,$*X+ce*W),w(H,U,-ce*X+$*W)}for(let H=0;H<3;H++){const X=P(A,H),W=P(U,H);w(A,H,$*X+ce*W),w(U,H,-ce*X+$*W)}for(let H=0;H<3;H++){const X=k(H,A),W=k(H,U);M(H,A,$*X+ce*W),M(H,U,-ce*X+$*W)}}const V=[];for(let T=0;T<3;T++)V.push({val:P(T,T),vec:I.create(k(0,T),k(1,T),k(2,T))});return V.sort((T,A)=>A.val-T.val),{vals:[V[0].val,V[1].val,V[2].val],vecs:[V[0].vec,V[1].vec,V[2].vec]}}function Cc(o,l){const f=pi(o);let P=0,w=0,k=0,M=0,V=0,T=0;for(const K of o){const Y=K[0]-f[0],$=K[1]-f[1],ce=K[2]-f[2];P+=Y*Y,w+=Y*$,k+=Y*ce,M+=$*$,V+=$*ce,T+=ce*ce}const A=[P,w,k,w,M,V,k,V,T],{vecs:U}=Sc(A);let G=U[0],Z=U[1],z=U[2];return I.dot(z,l)<0&&(I.scale(z,-1,z),I.scale(Z,-1,Z)),{centroid:f,normal:z,u:G,v:Z}}function Ec(o){let l=0,f=0,P=0,w=0,k=0,M=0,V=0,T=0,A=0;for(const[$,ce]of o){const H=-2*$,X=-2*ce,W=1,le=-($*$+ce*ce);l+=H*H,f+=H*X,P+=H*W,w+=X*X,k+=X*W,M+=W*W,V+=H*le,T+=X*le,A+=W*le}const U=yt.create(l,f,P,f,w,k,P,k,M),G=hi(U,I.create(V,T,A)),Z=G[0],z=G[1],K=G[2],Y=Z*Z+z*z-K;return{center:[Z,z],radius:Math.sqrt(Math.max(Y,1e-12))}}function kc(o,l){let f=0,P=0,w=0,k=0,M=0,V=0,T=0,A=0,U=0;for(let Z=0;Z<o.length;Z++){const z=o[Z],K=I.normalize(l[Z],I.create()),Y=1-K[0]*K[0],$=-K[0]*K[1],ce=-K[0]*K[2],H=1-K[1]*K[1],X=-K[1]*K[2],W=1-K[2]*K[2];f+=Y,P+=$,w+=ce,k+=H,M+=X,V+=W,T+=Y*z[0]+$*z[1]+ce*z[2],A+=$*z[0]+H*z[1]+X*z[2],U+=ce*z[0]+X*z[1]+W*z[2]}const G=yt.create(f,P,w,P,k,M,w,M,V);return hi(G,I.create(T,A,U))}function fi(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,P=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,M=o.map(ie=>I.clone(ie.position)),V=o.map(ie=>{const de=ie.rotation;return I.create(de[8],de[9],de[10])}),T=o.map(ie=>{const de=ie.rotation;return I.create(de[4],de[5],de[6])}),A=pi(T),U=I.normalize(I.scale(A,-1,I.create())),{centroid:G,normal:Z,u:z,v:K}=Cc(M,U),Y=M.map(ie=>{const de=I.sub(ie,G,I.create());return[I.dot(de,z),I.dot(de,K)]}),{center:$,radius:ce}=Ec(Y),H=ce*P,X=I.add(G,I.add(I.scale(z,$[0],I.create()),I.scale(K,$[1],I.create()),I.create()),I.create()),W=kc(M,V),le=H*Math.tan(f*Math.PI/180),ee=I.sub(W,I.scale(Z,le,I.create()),I.create());let pe=0;if(w){const ie=I.sub(M[0],X,I.create());pe=Math.atan2(I.dot(ie,K),I.dot(ie,z))/(2*Math.PI)%1,pe<0&&(pe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${H.toFixed(2)}, tilt=${f}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${pe.toFixed(3)}`),{center:X,radius:H,normal:Z,u:z,v:K,lookAt:ee,startPhase:pe,direction:k}}function _i(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,P=Math.cos(f),w=Math.sin(f),k=I.add(o.center,I.add(I.scale(o.u,o.radius*P,I.create()),I.scale(o.v,o.radius*w,I.create()),I.create()),I.create()),M=I.normalize(I.sub(o.lookAt,k,I.create())),V=I.cross(M,o.normal,I.create());I.length(V)<1e-6&&I.copy(o.u,V),I.normalize(V,V);const T=I.cross(M,V,I.create());I.normalize(T,T);const A=ct.create();return A[0]=V[0],A[1]=T[0],A[2]=M[0],A[3]=0,A[4]=V[1],A[5]=T[1],A[6]=M[1],A[7]=0,A[8]=V[2],A[9]=T[2],A[10]=M[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:k,rotation:A,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Mc(o,l={}){const f=fi(o,l);if(!f)return[];const P=l.numViews??120;return Array.from({length:P},(w,k)=>({..._i(f,k/P),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Bc(o){const l=new Uint8Array(o),f=Math.min(l.byteLength,65536),P=new TextDecoder("ascii").decode(l.subarray(0,f)),w=P.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=P.slice(0,w).split(/\r?\n/).map(se=>se.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const V=M.find(se=>se.startsWith("format"));if(!V||!V.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${V??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},A=[];let U=null;for(const se of M)if(se.startsWith("element ")){const[,he,re]=se.split(/\s+/);U={name:he,count:parseInt(re,10),props:[],bytesPerRecord:0,hasList:!1},A.push(U)}else if(se.startsWith("property ")&&U){const he=se.split(/\s+/);if(he[1]==="list"){const re=he[2],oe=he[3],be=he[4];U.props.push({name:be,type:oe,isList:!0,listCountType:re,listItemType:oe}),U.hasList=!0}else{const re=he[1],oe=he[2];if(U.props.push({name:oe,type:re,isList:!1}),T[re]===void 0)throw new Error(`mesh PLY: unsupported prop type '${re}'`);U.bytesPerRecord+=T[re]}}const G=A.find(se=>se.name==="vertex"),Z=A.find(se=>se.name==="face"||se.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!Z)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const z=G.props.find(se=>se.name==="x"),K=G.props.find(se=>se.name==="y"),Y=G.props.find(se=>se.name==="z");if(!z||!K||!Y)throw new Error("mesh PLY: vertex must have x/y/z");let $=0;const ce=new Map;for(const se of G.props)ce.set(se.name,{off:$,type:se.type}),$+=T[se.type];const H=ce.get("x"),X=ce.get("y"),W=ce.get("z");if(H.type!==X.type||H.type!==W.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${H.type}/${X.type}/${W.type})`);const le=H.type,ee=le==="double"||le==="float64";if(!ee&&le!=="float"&&le!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${le}')`);const pe=new Float32Array(G.count*3),ie=new DataView(o),de=k,ke=G.bytesPerRecord;for(let se=0;se<G.count;se++){const he=de+se*ke;ee?(pe[se*3+0]=ie.getFloat64(he+H.off,!0),pe[se*3+1]=ie.getFloat64(he+X.off,!0),pe[se*3+2]=ie.getFloat64(he+W.off,!0)):(pe[se*3+0]=ie.getFloat32(he+H.off,!0),pe[se*3+1]=ie.getFloat32(he+X.off,!0),pe[se*3+2]=ie.getFloat32(he+W.off,!0))}const Ve=de+G.count*ke,ze=Z.props.find(se=>se.isList);if(!ze)throw new Error("mesh PLY: face element has no list property");const Re=T[ze.listCountType],Te=T[ze.listItemType];if(Re!==1)throw new Error(`mesh PLY: unsupported face list count size ${Re}`);let we=Ve,Me=0;for(let se=0;se<Z.count;se++){const he=ie.getUint8(we);he===3&&Me++,we+=1+he*Te}const R=new Uint32Array(Me*3);we=Ve;let q=0;for(let se=0;se<Z.count;se++){const he=ie.getUint8(we);if(we+=1,he===3)for(let re=0;re<3;re++){const oe=we+re*Te;let be;if(Te===4)be=ie.getUint32(oe,!0);else if(Te===2)be=ie.getUint16(oe,!0);else if(Te===1)be=ie.getUint8(oe);else throw new Error(`mesh PLY: unsupported face index size ${Te}`);R[q++]=be}we+=he*Te}return{positions:pe,indices:R}}function Tc(o){const l=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),P=l.getUint32(4,!0),w=f*12,k=P*4;if(o.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${o.byteLength} B)`);const M=new Float32Array(o.slice(8,8+w)),V=new Uint32Array(o.slice(8+w,8+w+k));return{positions:M,indices:V}}function mi(o,l){return(l??"").toLowerCase().endsWith(".ply")?Bc(o):Tc(o)}function Dc(o,l){const f=o.length/3,P=new Float32Array(f*3);for(let w=0;w<l.length;w+=3){const k=l[w]*3,M=l[w+1]*3,V=l[w+2]*3,T=o[k],A=o[k+1],U=o[k+2],G=o[M],Z=o[M+1],z=o[M+2],K=o[V],Y=o[V+1],$=o[V+2],ce=G-T,H=Z-A,X=z-U,W=K-T,le=Y-A,ee=$-U,pe=H*ee-X*le,ie=X*W-ce*ee,de=ce*le-H*W;P[k]+=pe,P[k+1]+=ie,P[k+2]+=de,P[M]+=pe,P[M+1]+=ie,P[M+2]+=de,P[V]+=pe,P[V+1]+=ie,P[V+2]+=de}for(let w=0;w<f;w++){const k=w*3,M=P[k],V=P[k+1],T=P[k+2],A=Math.sqrt(M*M+V*V+T*T);if(A>1e-12){const U=1/A;P[k]=M*U,P[k+1]=V*U,P[k+2]=T*U}}return P}function vi(o,l){const f=o.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(f,0,l.positions);const P=Dc(l.positions,l.indices),w=o.createBuffer({label:"mesh-cull normal buffer",size:P.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(w,0,P);const k=o.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(k,0,l.indices),{vertexBuffer:f,normalBuffer:w,indexBuffer:k,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function Ac(o,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const P=await f.arrayBuffer(),w=mi(P,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),vi(o,w)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Lc(o,l,f){try{const P=mi(l,f);return console.log(`[mesh-cull] loaded from bundle: ${P.positions.length/3} verts, ${P.indices.length/3} tris`),vi(o,P)}catch(P){return console.warn("[mesh-cull] parse error:",P),null}}const bi="BITYMI01",Ic=0,zc=1,Gc=2,Uc=3,Rc=4,Vc=5,Oc=6;function Nn(o){const l=(o&32768)>>15,f=(o&31744)>>10,P=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(P/1024):f===31?P?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+P/1024)}function ei(o,l,f,P,w,k){const M=(o-f.width*.5)/P.focal[0],V=-((l-f.height*.5)/P.focal[1]),T=P.rotation,A=T[0],U=T[4],G=T[8],Z=T[1],z=T[5],K=T[9],Y=T[2],$=T[6],ce=T[10];let H=M*A+V*Z+Y,X=M*U+V*z+$,W=M*G+V*K+ce;const le=Math.hypot(H,X,W)||1;H/=le,X/=le,W/=le;const ee=P.position[0],pe=P.position[1],ie=P.position[2],de=k*.005,ke=de*de,Ve=new Uint32Array(w.buffer,w.byteOffset,w.length),ze=w.length/8;let Re=1/0,Te=0,we=0,Me=0,R=-1;for(let q=0;q<ze;q++){const se=q*8,he=w[se+0]-ee,re=w[se+1]-pe,oe=w[se+2]-ie,be=he*H+re*X+oe*W;if(be<=0)continue;const ve=he-be*H,Se=re-be*X,Oe=oe-be*W;if(ve*ve+Se*Se+Oe*Oe>=ke||!(Ve[se+7]>>>16&1))continue;const v=Ve[se+5],i=Ve[se+6],h=Nn(v&65535),d=Nn(v>>>16&65535),g=Nn(i&65535),y=Nn(i>>>16&65535),C=Math.hypot(h,d,g,y)||1,E=h/C,r=d/C,m=g/C,u=y/C,p=2*(r*u+E*m),a=2*(m*u-E*r),_=1-2*(r*r+m*m),x=H*p+X*a+W*_;let b;Math.abs(x)>1e-6?(b=(he*p+re*a+oe*_)/x,(!isFinite(b)||b<=0)&&(b=be)):b=be,b<Re&&(Re=b,Te=ee+b*H,we=pe+b*X,Me=ie+b*W,R=q)}return R<0?null:[Te,we,Me]}function gi(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==bi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const P=new DataView(o),w=P.getUint32(8,!0),k=12,M=20;let V=null,T=null,A=null,U=null;for(let G=0;G<w;G++){const Z=k+G*M,z=P.getUint32(Z+0,!0),K=Number(P.getBigUint64(Z+4,!0)),Y=Number(P.getBigUint64(Z+12,!0)),$=l.slice(K,K+Y).buffer;z===Ic||z===zc||z===Vc?V=$:z===Gc?T=$:z===Uc||z===Rc?A=$:z===Oc&&(U=$)}if(V===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:V,camerasBuffer:T,atlasBuffer:A,meshBuffer:U}}async function Fc(o,l){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const P=(()=>{const V=f.headers.get("content-length");return V&&parseInt(V,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let k;if(!w)k=await f.arrayBuffer(),l&&l(k.byteLength,P,0);else{const V=[];let T=0,A=performance.now(),U=0;for(;;){const{done:z,value:K}=await w.read();if(z)break;V.push(K),T+=K.byteLength;const Y=performance.now();if(Y-A>=150&&l){const $=(T-U)/((Y-A)/1e3);l(T,P,$),A=Y,U=T}}const G=new Uint8Array(T);let Z=0;for(const z of V)G.set(z,Z),Z+=z.byteLength;k=G.buffer,l&&l(T,P,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===bi?{bundle:gi(k),rawPly:null}:{bundle:null,rawPly:k}}function Nc(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var P;return l(((P=f.files)==null?void 0:P[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function $c(o,l,f){const P=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const U=await Nc(".ply,.bitymi");if(U)if(P&&(P.style.display="none"),U.name.toLowerCase().endsWith(".bitymi")){const G=await U.arrayBuffer(),{pcBuffer:Z}=gi(G),z=new File([Z],U.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),K=await Ps(z,o);l(K)}else{const G=await Ps(U,o);l(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),V=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),A=M.get("mesh_url");V&&(P&&(P.style.display="none"),f(V,T,A))}async function qc(o,l,f,P){const w=new Ms(o,f),k=new Pc(w);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const V="rgba8unorm";l.configure({device:f,format:V,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const A=()=>{w.on_update_canvas(),T!==null&&Fn(o.width,o.height,f,T.render_settings_buffer)};new ResizeObserver(()=>{const re=Math.max(.25,R.render_scale),oe=Math.max(1,Math.ceil(re*o.clientWidth)),be=Math.max(1,Math.ceil(re*o.clientHeight));o.width===oe&&o.height===be||(o.width=oe,o.height=be,A())}).observe(o);let G=0,Z=0;const z=()=>{(o.width!==G||o.height!==Z)&&(G=o.width,Z=o.height,A())},K=new URLSearchParams(window.location.search);let $=K.get("animation")==="1";k.enabled=!$;const ce=K.get("camera_url"),H=K.get("mesh_cull"),X=H==="1"||H==="true",W=K.get("mesh_normal_margin")??K.get("mesh_margin"),le=W!==null?Number(W):NaN,ee=Number.isFinite(le)?le:0,pe=K.get("mesh_debug"),ie=pe==="1"||pe==="true",de=K.get("mesh_sample_mode"),ke=de!==null?parseInt(de,10):NaN,Ve=Number.isFinite(ke)&&ke>=0&&ke<=7?ke:1,ze=K.get("mesh_silhouette"),Re=ze==="1"||ze==="true",Te=K.get("mesh_invert_depth"),we=Te==="1"||Te==="true",Me=Math.max(1,window.devicePixelRatio||1),R={gaussian_scaling:1,sh_bias:.5,animate:$,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:X,mesh_margin:ee,mesh_debug:ie,mesh_sample_mode:Ve,mesh_silhouette:Re,mesh_invert_depth:we,render_scale:1},q=new ql.Pane({title:"Config",expanded:!0});q.addInput(R,"animate",{label:"Animate"}).on("change",re=>{const oe=$;$=re.value,k.enabled=!re.value,!oe&&$&&se.value&&se.value.onAnimateStart(),oe&&!$&&se.value&&se.value.onAnimateStop()}),q.addInput(R,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const se={value:null};$c(f,re=>he(re,[],null,null),async(re,oe,be)=>{let ve=oe??ce,Se,Oe=null,B=null;const F=re.toLowerCase();if(F.endsWith(".bitymi")||F.includes(".bitymi?")){Ts("downloading bundle ...");try{const{bundle:i}=await Fc(re,(d,g,y)=>{const C=d/1048576,E=g?g/(1024*1024):void 0,r=y/(1024*1024),m=g?Math.min(99,Math.floor(d/g*100)):void 0,u=E?`total ${E.toFixed(1)} MB`:"total -- MB",p=E&&m!==void 0?`${C.toFixed(1)} MB downloaded (${m}%)`:`${C.toFixed(1)} MB downloaded`,a=`${r.toFixed(2)} MB/s`;Lt(`downloading bundle ...
${u}, ${p}
${a}`)});if(!i)throw new Error("Expected a .bitymi bundle");Lt("parsing PLY ...");const h=new File([i.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(Se=await Ps(h,f),!ve&&i.camerasBuffer&&(ve=URL.createObjectURL(new Blob([i.camerasBuffer],{type:"application/json"}))),i.atlasBuffer){const d=i.atlasBuffer.byteLength/1048576;Lt(`uploading atlas ...
${d.toFixed(1)} MB BC7`);try{const g=Vl(i.atlasBuffer);Oe=Fl(f,g,!0)}catch(g){console.warn("[atlas] failed to parse/upload atlas:",g)}}i.meshBuffer&&!be&&(Lt("uploading mesh ..."),B=Lc(f,i.meshBuffer,"bundle.mesh"))}catch(i){throw Sn(),i}}else Se=await Nl(re,f);be&&(Lt("loading mesh ..."),B=await Ac(f,be));const v=ve?await mc(ve):[];v.length>0&&w.set_preset(v[0]),he(Se,v,Oe,B)});function he(re,oe=[],be=null,ve=null){const Se=[(re.bbox.min[0]+re.bbox.max[0])/2,(re.bbox.min[1]+re.bbox.max[1])/2,(re.bbox.min[2]+re.bbox.max[2])/2];k.setBbox(re.bbox.min,re.bbox.max);const Oe=.5*Math.sqrt((re.bbox.max[0]-re.bbox.min[0])**2+(re.bbox.max[1]-re.bbox.min[1])**2+(re.bbox.max[2]-re.bbox.min[2])**2);function B(ne,_e){const ue=ei(ne,_e,o,w,re.surfel_data,Oe);ue&&(k.setOrbitPivot(ue),console.log(`[pick] orbit pivot → (${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)})`))}function F(){const ne=o.width*.5,_e=o.height*.5,ue=ei(ne,_e,o,w,re.surfel_data,Oe);if(!ue)return;const Ie=w.rotation,Ue=Ie[2],Ce=Ie[6],Ae=Ie[10],Pe=ue[0]-w.position[0],Ye=ue[1]-w.position[1],ot=ue[2]-w.position[2],ft=Pe*Ue+Ye*Ce+ot*Ae;ft>0&&k.setOrbitDepth(ft)}if(oe.length===0){const ne=re.bbox.max[0]-re.bbox.min[0],_e=re.bbox.max[1]-re.bbox.min[1],ue=re.bbox.max[2]-re.bbox.min[2],Ue=.5*Math.sqrt(ne*ne+_e*_e+ue*ue)*.5;I.set(Se[0]-Ue,Se[1]-Ue,Se[2]-Ue,w.position);const Ce=I.create(Ue,Ue,Ue);I.normalize(Ce,Ce);const Ae=I.create(0,1,0),Pe=I.create();I.cross(Ae,Ce,Pe),I.normalize(Pe,Pe);const Ye=I.create();I.cross(Ce,Pe,Ye);const ot=yt.create(Pe[0],Ye[0],Ce[0],Pe[1],Ye[1],Ce[1],Pe[2],Ye[2],Ce[2]);ct.fromMat3(ot,w.rotation),w.update_buffer()}k.setCenter(I.create(re.centroid[0],re.centroid[1],re.centroid[2]));const v=new hc(re,f,V,w.uniform_buffer,P,be,ve);T=v,Fn(o.width,o.height,f,v.render_settings_buffer),R.atlas_enabled=be!==null,ve===null&&(R.mesh_cull=!1),v.setMeshCullEnabled(R.mesh_cull),v.setMeshMargin(R.mesh_margin),ve===null&&(R.mesh_debug=!1),v.setMeshOverlayEnabled(R.mesh_debug),cn({meshSampleMode:R.mesh_sample_mode,meshSilhouetteCull:R.mesh_silhouette,meshInvertDepth:R.mesh_invert_depth},f,v.render_settings_buffer),console.log(`[mesh-cull] ${ve!==null?"mesh loaded":"no mesh"} · toggle=${R.mesh_cull} · margin=${R.mesh_margin}m · debug=${R.mesh_debug} · sample_mode=${R.mesh_sample_mode} · silhouette=${R.mesh_silhouette} · invert=${R.mesh_invert_depth}`);let i=!1;const h=(()=>{if(be!==null)return`${be.meta.format===2?"BC7":be.meta.format===3?"ASTC 4×4":be.meta.format===7?"BC7 codebook gather (typeD)":`format=${be.meta.format}`} ${be.meta.width}×${be.meta.height}, ${be.meta.n_layers} layers`;const ne=f.features.has("texture-compression-bc"),_e=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(ne?["BC7"]:[]).concat(_e?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",h),Xr(re.sh_bias,f,v.render_settings_buffer),Zr(R.gaussian_scaling,f,v.render_settings_buffer),R.sh_bias=re.sh_bias;const d=re.num_points.toLocaleString(),g={stats:`${d} surfels · -- fps`};q.addMonitor(g,"stats",{label:"Stats",interval:200}),q.addMonitor({atlas:h},"atlas",{label:"Atlas"});const y={stages:"— ms · awaiting timestamp data"};q.addMonitor(y,"stages",{label:"Stages",interval:500});let C=null;if(v.timeQueryEnabled){C=document.createElement("canvas"),C.width=280,C.height=24,C.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(C);const ne=ue=>{const Ie=C.getContext("2d");if(!Ie)return;const Ue=C.width,Ce=C.height;if(Ie.clearRect(0,0,Ue,Ce),!ue||ue.total<=0){Ie.fillStyle="#888",Ie.font="11px ui-monospace,Menlo,monospace",Ie.fillText("awaiting GPU timestamps…",8,16);return}const Ae=[{label:"cull",ms:ue.cull,color:"#3aa3ff"},{label:"pre",ms:ue.preprocess,color:"#3ad27a"},{label:"sort",ms:ue.sort,color:"#ffa53a"},{label:"render",ms:ue.render,color:"#ff5566"}],Pe=Math.max(.001,Ae.reduce((ot,ft)=>ot+ft.ms,0));let Ye=0;Ie.font="10px ui-monospace,Menlo,monospace",Ie.textBaseline="middle";for(const ot of Ae){const ft=ot.ms/Pe*Ue;Ie.fillStyle=ot.color,Ie.fillRect(Ye,0,ft,Ce),ft>=38&&(Ie.fillStyle="#000c",Ie.fillText(`${ot.label} ${ot.ms.toFixed(1)}`,Ye+4,Ce/2)),Ye+=ft}};setInterval(()=>{i||v.readPerfMetrics({silent:!0}).then(()=>{const ue=v.lastStageBreakdownMs;ne(ue),ue&&(y.stages=`${ue.total.toFixed(1)} ms · cull ${ue.cull.toFixed(1)} / pre ${ue.preprocess.toFixed(1)} / sort ${ue.sort.toFixed(1)} / render ${ue.render.toFixed(1)}`)}).catch(ue=>console.warn("[perf] readPerfMetrics failed:",ue))},500)}const E=.4,r=3,m=.3;let u=null,p=0,a=0;const _=dt.create(),x=yt.create();let b=oe.length>0?0:-1;const L={view:oe.length>0?`${b+1} / ${oe.length}: ${oe[b].img_name??b}`:"— no presets —"};q.addMonitor(L,"view",{label:"View",interval:100});function O(ne){const _e=yt.create(ne[0],ne[1],ne[2],ne[4],ne[5],ne[6],ne[8],ne[9],ne[10]);return dt.fromMat(_e)}function N(ne,_e){u={fromPos:I.clone(w.position),toPos:I.clone(ne.position),fromQuat:dt.normalize(O(w.rotation)),toQuat:dt.normalize(O(ne.rotation)),target:ne,t:0,duration:Math.max(.01,_e)}}const ae=(ne,_e=!0)=>{if(oe.length===0)return;b=(ne%oe.length+oe.length)%oe.length;const ue=oe[b];_e?N(ue,E):(w.set_preset(ue),k.resetToCamera(),F()),L.view=`${b+1} / ${oe.length}: ${oe[b].img_name??b}`};oe.length>0&&(q.addButton({title:"◀ Prev view"}).on("click",()=>ae(b-1)),q.addButton({title:"Next view ▶"}).on("click",()=>ae(b+1)));const te=oe.length>0?fi(oe,{tiltDownDeg:15,alignFirst:!0}):null,J=te?Mc(oe,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let fe=0;const xe=12;se.value={onAnimateStart:()=>{fe=0},onAnimateStop:()=>{k.resetToCamera(),F()}},q.addInput(R,"render_scale",{label:"Render scale",min:.25,max:Me,step:.25}).on("change",ne=>{const _e=Math.max(.25,ne.value),ue=Math.max(1,Math.ceil(_e*o.clientWidth)),Ie=Math.max(1,Math.ceil(_e*o.clientHeight));(o.width!==ue||o.height!==Ie)&&(o.width=ue,o.height=Ie,A())}),q.addInput(R,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",ne=>Zr(ne.value,f,v.render_settings_buffer)),q.addInput(R,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",ne=>Xr(ne.value,f,v.render_settings_buffer)),q.addInput(R,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",ne=>{v.bgColor=[ne.value.r,ne.value.g,ne.value.b,ne.value.a]});const me=be?be.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";q.addInput(R,"atlas_enabled",{label:me}).on("change",ne=>v.setAtlasEnabled(ne.value)),q.addInput(R,"bfc",{label:"Backface"}).on("change",ne=>cn({bfc:ne.value},f,v.render_settings_buffer));const ge=q.addInput(R,"mesh_cull",{label:"Mesh cull"});ge.on("change",ne=>v.setMeshCullEnabled(ne.value)),v.hasMesh||(ge.disabled=!0);const De=q.addInput(R,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});De.on("change",ne=>v.setMeshMargin(ne.value)),v.hasMesh||(De.disabled=!0);const Be=q.addInput(R,"mesh_debug",{label:"Mesh debug"});Be.on("change",ne=>v.setMeshOverlayEnabled(ne.value)),v.hasMesh||(Be.disabled=!0);const qe=q.addInput(R,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});qe.on("change",ne=>cn({meshSampleMode:ne.value},f,v.render_settings_buffer)),v.hasMesh||(qe.disabled=!0);const Ze=q.addInput(R,"mesh_silhouette",{label:"Silhouette cull"});Ze.on("change",ne=>cn({meshSilhouetteCull:ne.value},f,v.render_settings_buffer)),v.hasMesh||(Ze.disabled=!0);const je=q.addInput(R,"mesh_invert_depth",{label:"Invert depth cull"});je.on("change",ne=>cn({meshInvertDepth:ne.value},f,v.render_settings_buffer)),v.hasMesh||(je.disabled=!0),q.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(oe.length>0)w.set_preset(oe[0]);else{const ne=re.bbox.max[0]-re.bbox.min[0],_e=re.bbox.max[1]-re.bbox.min[1],ue=re.bbox.max[2]-re.bbox.min[2],Ue=.5*Math.sqrt(ne*ne+_e*_e+ue*ue)*.5;I.set(Se[0]-Ue,Se[1]-Ue,Se[2]-Ue,w.position);const Ce=I.create(Ue,Ue,Ue);I.normalize(Ce,Ce);const Ae=I.create();I.cross(I.create(0,1,0),Ce,Ae),I.normalize(Ae,Ae);const Pe=I.create();I.cross(Ce,Ae,Pe);const Ye=yt.create(Ae[0],Pe[0],Ce[0],Ae[1],Pe[1],Ce[1],Ae[2],Pe[2],Ce[2]);ct.fromMat3(Ye,w.rotation),w.update_buffer()}k.resetToCamera(),F()});const We={result:"— click Benchmark —"};q.addMonitor(We,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Qe={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function rt(){const _e=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ue of Object.keys(Qe))if(_e.startsWith(ue))return ue;return null}const He=document.createElement("div");He.id="bench-overlay",He.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(He);function nt(ne,_e,ue){const Ie=Math.floor(_e/Math.max(1,ue)*100),Ue=32,Ce=Math.floor(_e/Math.max(1,ue)*Ue),Ae="█".repeat(Ce)+"░".repeat(Ue-Ce);He.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${ne}</div><div>[${Ae}] ${Ie}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${_e} / ${ue} frames · offscreen · pipelined · no vsync</div>`,He.style.display="block"}function it(){He.style.display="none"}async function st(ne=10,_e=200){if(i)return;if(oe.length===0){We.result="no cameras to benchmark";return}i=!0;const ue=$,Ie=R.animate,Ue=new Float32Array(w.position),Ce=new Float32Array(w.rotation);$=!1,R.animate=!1,q.refresh(),u=null,k.enabled=!1;const Ae=rt(),Pe=Ae?Qe[Ae]:null,Ye=(Pe==null?void 0:Pe.w)??o.width,ot=(Pe==null?void 0:Pe.h)??o.height,ft=(Pe==null?void 0:Pe.fovY)??w.getFov(),Kn=Ae?`${Ae} · ${Ye>=4e3/4+500?"images_4":"images_2"}`:"custom",kt=o.width,un=o.height,kn=w.getFov();o.width=Ye,o.height=ot,w.setFov(ft),Fn(Ye,ot,f,v.render_settings_buffer);const Mn=f.createTexture({size:[Ye,ot,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Bn=Mn.createView(),Yn=()=>{const ht=f.createCommandEncoder();v.frame(ht,Bn,!1),f.queue.submit([ht.finish()])},It=()=>new Promise(ht=>setTimeout(ht,0)),Zn=20,Tn=async(ht,zt)=>{let $t=0,Ct=0;for(nt(zt,0,ht),await It();Ct<ht;){const Jt=Math.min(Zn,ht-Ct),Et=performance.now();for(let en=0;en<Jt;en++)w.set_preset(oe[(Ct+en)%oe.length]),Yn();await f.queue.onSubmittedWorkDone();const Xn=performance.now();$t+=Xn-Et,Ct+=Jt,nt(zt,Ct,ht),await It()}return $t};try{await Tn(ne,"Warming up");const zt=await Tn(_e,"Benchmarking")/_e,$t=1e3/zt,Ct=re.num_points??re.surfel_data.length/8,Jt=(ft*180/Math.PI).toFixed(1),Et=`${$t.toFixed(1)} FPS  (${zt.toFixed(2)} ms/frame)
${Ye}×${ot} · fovY ${Jt}° · ${Kn}
${Ct.toLocaleString()} surfels · ${ne}w+${_e}b · pipelined`;We.result=Et,console.log("[bench]",Et.replace(/\n/g,"  |  "))}catch(ht){console.error("[bench] failed:",ht),We.result=`bench failed: ${ht}`}finally{it(),Mn.destroy(),o.width=kt,o.height=un,w.setFov(kn),Fn(kt,un,f,v.render_settings_buffer),w.position.set(Ue),w.rotation.set(Ce),w.update_buffer(),k.enabled=!ue,$=ue,R.animate=Ie,q.refresh(),i=!1}}q.addButton({title:"📊 Benchmark"}).on("click",()=>st()),document.addEventListener("keydown",ne=>{const _e=ne.key;if(_e>="0"&&_e<="9"&&oe.length>0){const ue=parseInt(_e);ue<oe.length&&ae(ue)}else _e==="ArrowLeft"||_e==="PageUp"?(ae(b-1),ne.preventDefault()):_e==="ArrowRight"||_e==="PageDown"?(ae(b+1),ne.preventDefault()):(_e==="d"||_e==="D")&&v.debugReadSortedIndices(30).catch(ue=>console.error("[DEBUG] readback failed:",ue))});function Je(ne,_e){const ue=o.getBoundingClientRect(),Ie=window.devicePixelRatio||1;return[(ne-ue.left)*Ie,(_e-ue.top)*Ie]}o.addEventListener("dblclick",ne=>{const[_e,ue]=Je(ne.clientX,ne.clientY);B(_e,ue)});let $e=0,et=0,Ke=0;o.addEventListener("pointerdown",ne=>{if(ne.pointerType!=="touch")return;const _e=performance.now(),ue=_e-$e,Ie=ne.clientX-et,Ue=ne.clientY-Ke;if(ue>0&&ue<300&&Ie*Ie+Ue*Ue<40*40){const[Ce,Ae]=Je(ne.clientX,ne.clientY);B(Ce,Ae),$e=0}else $e=_e,et=ne.clientX,Ke=ne.clientY});function lt(){return M}let tt=performance.now(),Pt=60,gt=Promise.resolve(),vt=0;async function bt(){var Ue;const ne=performance.now(),_e=Math.min((ne-tt)/1e3,.1);if(tt=ne,_e>0){const Ce=((Ue=v.lastStageBreakdownMs)==null?void 0:Ue.total)??0,Ae=Ce>.5?1e3/Ce:1/_e;Pt=Pt*.9+Ae*.1,g.stats=`${d} surfels · ${Math.round(Pt)} fps`}if(i){requestAnimationFrame(bt);return}if(lt()&&(u||$)&&(u=null,k.resetToCamera(),F(),$&&($=!1,R.animate=!1,q.refresh())),$&&R.animateMode==="circle"&&te){fe+=_e/xe,fe>=1&&(fe-=1);const Ce=_i(te,fe);w.set_preset(Ce),k.update(_e);const Ae=f.createCommandEncoder();v.frame(Ae,l.getCurrentTexture().createView()),f.queue.submit([Ae.finish()]),vt++,vt===2&&Sn(),requestAnimationFrame(bt);return}if(u){u.t+=_e/u.duration;const Ce=Math.min(1,u.t),Ae=Ce*Ce*(3-2*Ce);I.lerp(u.fromPos,u.toPos,Ae,w.position),dt.slerp(u.fromQuat,u.toQuat,Ae,_),yt.fromQuat(_,x),ct.fromMat3(x,w.rotation),w.update_buffer(),u.t>=1&&(w.set_preset(u.target),u=null,$?oe.length>0&&(p=m):(k.resetToCamera(),F()))}else if($&&!lt()){const Ce=R.animateMode==="circle"&&J.length>0,Ae=Ce?J:oe;if(Ae.length!==0){if(p-=_e,p<=0){const Ye=((Ce?a:b)+1)%Ae.length;Ce?a=Ye:b=Ye;const ot=Ce?r/8:r;N(Ae[Ye],ot),Ce||(L.view=`${b+1} / ${oe.length}: ${oe[b].img_name??b}`)}}}k.update(_e),z(),await gt;const ue=f.createCommandEncoder(),Ie=l.getCurrentTexture().createView();v.frame(ue,Ie),f.queue.submit([ue.finish()]),gt=f.queue.onSubmittedWorkDone(),vt++,vt===2&&Sn(),requestAnimationFrame(bt)}requestAnimationFrame(bt)}}(function(){let l="dev";for(const P of Array.from(document.querySelectorAll('script[type="module"]'))){const k=P.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),P=document.querySelector("#webgpu-canvas");Il(P!==null);const w=P.getContext("webgpu");qc(P,w,f,l)})();
