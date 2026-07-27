var gl=Object.defineProperty;var wl=(o,a,f)=>a in o?gl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f;var R=(o,a,f)=>(wl(o,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))P(g);new MutationObserver(g=>{for(const k of g)if(k.type==="childList")for(const B of k.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&P(B)}).observe(document,{childList:!0,subtree:!0});function f(g){const k={};return g.integrity&&(k.integrity=g.integrity),g.referrerPolicy&&(k.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?k.credentials="include":g.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function P(g){if(g.ep)return;g.ep=!0;const k=f(g);fetch(g.href,k)}})();function xl(o,a){return class extends o{constructor(...f){super(...f),a(this)}}}const yl=xl(Array,o=>o.fill(0));let De=1e-6;function Pl(o){function a(y=0,C=0){const E=new o(2);return y!==void 0&&(E[0]=y,C!==void 0&&(E[1]=C)),E}const f=a;function P(y,C,E){const r=E??new o(2);return r[0]=y,r[1]=C,r}function g(y,C){const E=C??new o(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function k(y,C){const E=C??new o(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function B(y,C){const E=C??new o(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function O(y,C=0,E=1,r){const m=r??new o(2);return m[0]=Math.min(E,Math.max(C,y[0])),m[1]=Math.min(E,Math.max(C,y[1])),m}function T(y,C,E){const r=E??new o(2);return r[0]=y[0]+C[0],r[1]=y[1]+C[1],r}function D(y,C,E,r){const m=r??new o(2);return m[0]=y[0]+C[0]*E,m[1]=y[1]+C[1]*E,m}function I(y,C){const E=y[0],r=y[1],m=C[0],c=C[1],h=Math.sqrt(E*E+r*r),l=Math.sqrt(m*m+c*c),_=h*l,x=_&&ue(y,C)/_;return Math.acos(x)}function L(y,C,E){const r=E??new o(2);return r[0]=y[0]-C[0],r[1]=y[1]-C[1],r}const K=L;function V(y,C){return Math.abs(y[0]-C[0])<De&&Math.abs(y[1]-C[1])<De}function W(y,C){return y[0]===C[0]&&y[1]===C[1]}function H(y,C,E,r){const m=r??new o(2);return m[0]=y[0]+E*(C[0]-y[0]),m[1]=y[1]+E*(C[1]-y[1]),m}function $(y,C,E,r){const m=r??new o(2);return m[0]=y[0]+E[0]*(C[0]-y[0]),m[1]=y[1]+E[1]*(C[1]-y[1]),m}function le(y,C,E){const r=E??new o(2);return r[0]=Math.max(y[0],C[0]),r[1]=Math.max(y[1],C[1]),r}function j(y,C,E){const r=E??new o(2);return r[0]=Math.min(y[0],C[0]),r[1]=Math.min(y[1],C[1]),r}function Z(y,C,E){const r=E??new o(2);return r[0]=y[0]*C,r[1]=y[1]*C,r}const q=Z;function oe(y,C,E){const r=E??new o(2);return r[0]=y[0]/C,r[1]=y[1]/C,r}function ne(y,C){const E=C??new o(2);return E[0]=1/y[0],E[1]=1/y[1],E}const de=ne;function re(y,C,E){const r=E??new o(3),m=y[0]*C[1]-y[1]*C[0];return r[0]=0,r[1]=0,r[2]=m,r}function ue(y,C){return y[0]*C[0]+y[1]*C[1]}function Se(y){const C=y[0],E=y[1];return Math.sqrt(C*C+E*E)}const Ue=Se;function Le(y){const C=y[0],E=y[1];return C*C+E*E}const Ie=Le;function Ee(y,C){const E=y[0]-C[0],r=y[1]-C[1];return Math.sqrt(E*E+r*r)}const me=Ee;function xe(y,C){const E=y[0]-C[0],r=y[1]-C[1];return E*E+r*r}const J=xe;function te(y,C){const E=C??new o(2),r=y[0],m=y[1],c=Math.sqrt(r*r+m*m);return c>1e-5?(E[0]=r/c,E[1]=m/c):(E[0]=0,E[1]=0),E}function se(y,C){const E=C??new o(2);return E[0]=-y[0],E[1]=-y[1],E}function fe(y,C){const E=C??new o(2);return E[0]=y[0],E[1]=y[1],E}const Te=fe;function Pe(y,C,E){const r=E??new o(2);return r[0]=y[0]*C[0],r[1]=y[1]*C[1],r}const ke=Pe;function ve(y,C,E){const r=E??new o(2);return r[0]=y[0]/C[0],r[1]=y[1]/C[1],r}const Ae=ve;function $e(y=1,C){const E=C??new o(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function M(y){const C=y??new o(2);return C[0]=0,C[1]=0,C}function U(y,C,E){const r=E??new o(2),m=y[0],c=y[1];return r[0]=m*C[0]+c*C[4]+C[12],r[1]=m*C[1]+c*C[5]+C[13],r}function w(y,C,E){const r=E??new o(2),m=y[0],c=y[1];return r[0]=C[0]*m+C[4]*c+C[8],r[1]=C[1]*m+C[5]*c+C[9],r}function i(y,C,E,r){const m=r??new o(2),c=y[0]-C[0],h=y[1]-C[1],l=Math.sin(E),_=Math.cos(E);return m[0]=c*_-h*l+C[0],m[1]=c*l+h*_+C[1],m}function p(y,C,E){const r=E??new o(2);return te(y,r),Z(r,C,r)}function d(y,C,E){const r=E??new o(2);return Se(y)>C?p(y,C,r):fe(y,r)}function v(y,C,E){const r=E??new o(2);return H(y,C,.5,r)}return{create:a,fromValues:f,set:P,ceil:g,floor:k,round:B,clamp:O,add:T,addScaled:D,angle:I,subtract:L,sub:K,equalsApproximately:V,equals:W,lerp:H,lerpV:$,max:le,min:j,mulScalar:Z,scale:q,divScalar:oe,inverse:ne,invert:de,cross:re,dot:ue,length:Se,len:Ue,lengthSq:Le,lenSq:Ie,distance:Ee,dist:me,distanceSq:xe,distSq:J,normalize:te,negate:se,copy:fe,clone:Te,multiply:Pe,mul:ke,divide:ve,div:Ae,random:$e,zero:M,transformMat4:U,transformMat3:w,rotate:i,setLength:p,truncate:d,midpoint:v}}const Wr=new Map;function ci(o){let a=Wr.get(o);return a||(a=Pl(o),Wr.set(o,a)),a}function Sl(o){function a(l,_,x){const b=new o(3);return l!==void 0&&(b[0]=l,_!==void 0&&(b[1]=_,x!==void 0&&(b[2]=x))),b}const f=a;function P(l,_,x,b){const A=b??new o(3);return A[0]=l,A[1]=_,A[2]=x,A}function g(l,_){const x=_??new o(3);return x[0]=Math.ceil(l[0]),x[1]=Math.ceil(l[1]),x[2]=Math.ceil(l[2]),x}function k(l,_){const x=_??new o(3);return x[0]=Math.floor(l[0]),x[1]=Math.floor(l[1]),x[2]=Math.floor(l[2]),x}function B(l,_){const x=_??new o(3);return x[0]=Math.round(l[0]),x[1]=Math.round(l[1]),x[2]=Math.round(l[2]),x}function O(l,_=0,x=1,b){const A=b??new o(3);return A[0]=Math.min(x,Math.max(_,l[0])),A[1]=Math.min(x,Math.max(_,l[1])),A[2]=Math.min(x,Math.max(_,l[2])),A}function T(l,_,x){const b=x??new o(3);return b[0]=l[0]+_[0],b[1]=l[1]+_[1],b[2]=l[2]+_[2],b}function D(l,_,x,b){const A=b??new o(3);return A[0]=l[0]+_[0]*x,A[1]=l[1]+_[1]*x,A[2]=l[2]+_[2]*x,A}function I(l,_){const x=l[0],b=l[1],A=l[2],F=_[0],N=_[1],ie=_[2],Y=Math.sqrt(x*x+b*b+A*A),Q=Math.sqrt(F*F+N*N+ie*ie),_e=Y*Q,be=_e&&ue(l,_)/_e;return Math.acos(be)}function L(l,_,x){const b=x??new o(3);return b[0]=l[0]-_[0],b[1]=l[1]-_[1],b[2]=l[2]-_[2],b}const K=L;function V(l,_){return Math.abs(l[0]-_[0])<De&&Math.abs(l[1]-_[1])<De&&Math.abs(l[2]-_[2])<De}function W(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function H(l,_,x,b){const A=b??new o(3);return A[0]=l[0]+x*(_[0]-l[0]),A[1]=l[1]+x*(_[1]-l[1]),A[2]=l[2]+x*(_[2]-l[2]),A}function $(l,_,x,b){const A=b??new o(3);return A[0]=l[0]+x[0]*(_[0]-l[0]),A[1]=l[1]+x[1]*(_[1]-l[1]),A[2]=l[2]+x[2]*(_[2]-l[2]),A}function le(l,_,x){const b=x??new o(3);return b[0]=Math.max(l[0],_[0]),b[1]=Math.max(l[1],_[1]),b[2]=Math.max(l[2],_[2]),b}function j(l,_,x){const b=x??new o(3);return b[0]=Math.min(l[0],_[0]),b[1]=Math.min(l[1],_[1]),b[2]=Math.min(l[2],_[2]),b}function Z(l,_,x){const b=x??new o(3);return b[0]=l[0]*_,b[1]=l[1]*_,b[2]=l[2]*_,b}const q=Z;function oe(l,_,x){const b=x??new o(3);return b[0]=l[0]/_,b[1]=l[1]/_,b[2]=l[2]/_,b}function ne(l,_){const x=_??new o(3);return x[0]=1/l[0],x[1]=1/l[1],x[2]=1/l[2],x}const de=ne;function re(l,_,x){const b=x??new o(3),A=l[2]*_[0]-l[0]*_[2],F=l[0]*_[1]-l[1]*_[0];return b[0]=l[1]*_[2]-l[2]*_[1],b[1]=A,b[2]=F,b}function ue(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function Se(l){const _=l[0],x=l[1],b=l[2];return Math.sqrt(_*_+x*x+b*b)}const Ue=Se;function Le(l){const _=l[0],x=l[1],b=l[2];return _*_+x*x+b*b}const Ie=Le;function Ee(l,_){const x=l[0]-_[0],b=l[1]-_[1],A=l[2]-_[2];return Math.sqrt(x*x+b*b+A*A)}const me=Ee;function xe(l,_){const x=l[0]-_[0],b=l[1]-_[1],A=l[2]-_[2];return x*x+b*b+A*A}const J=xe;function te(l,_){const x=_??new o(3),b=l[0],A=l[1],F=l[2],N=Math.sqrt(b*b+A*A+F*F);return N>1e-5?(x[0]=b/N,x[1]=A/N,x[2]=F/N):(x[0]=0,x[1]=0,x[2]=0),x}function se(l,_){const x=_??new o(3);return x[0]=-l[0],x[1]=-l[1],x[2]=-l[2],x}function fe(l,_){const x=_??new o(3);return x[0]=l[0],x[1]=l[1],x[2]=l[2],x}const Te=fe;function Pe(l,_,x){const b=x??new o(3);return b[0]=l[0]*_[0],b[1]=l[1]*_[1],b[2]=l[2]*_[2],b}const ke=Pe;function ve(l,_,x){const b=x??new o(3);return b[0]=l[0]/_[0],b[1]=l[1]/_[1],b[2]=l[2]/_[2],b}const Ae=ve;function $e(l=1,_){const x=_??new o(3),b=Math.random()*2*Math.PI,A=Math.random()*2-1,F=Math.sqrt(1-A*A)*l;return x[0]=Math.cos(b)*F,x[1]=Math.sin(b)*F,x[2]=A*l,x}function M(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function U(l,_,x){const b=x??new o(3),A=l[0],F=l[1],N=l[2],ie=_[3]*A+_[7]*F+_[11]*N+_[15]||1;return b[0]=(_[0]*A+_[4]*F+_[8]*N+_[12])/ie,b[1]=(_[1]*A+_[5]*F+_[9]*N+_[13])/ie,b[2]=(_[2]*A+_[6]*F+_[10]*N+_[14])/ie,b}function w(l,_,x){const b=x??new o(3),A=l[0],F=l[1],N=l[2];return b[0]=A*_[0*4+0]+F*_[1*4+0]+N*_[2*4+0],b[1]=A*_[0*4+1]+F*_[1*4+1]+N*_[2*4+1],b[2]=A*_[0*4+2]+F*_[1*4+2]+N*_[2*4+2],b}function i(l,_,x){const b=x??new o(3),A=l[0],F=l[1],N=l[2];return b[0]=A*_[0]+F*_[4]+N*_[8],b[1]=A*_[1]+F*_[5]+N*_[9],b[2]=A*_[2]+F*_[6]+N*_[10],b}function p(l,_,x){const b=x??new o(3),A=_[0],F=_[1],N=_[2],ie=_[3]*2,Y=l[0],Q=l[1],_e=l[2],be=F*_e-N*Q,he=N*Y-A*_e,ce=A*Q-F*Y;return b[0]=Y+be*ie+(F*ce-N*he)*2,b[1]=Q+he*ie+(N*be-A*ce)*2,b[2]=_e+ce*ie+(A*he-F*be)*2,b}function d(l,_){const x=_??new o(3);return x[0]=l[12],x[1]=l[13],x[2]=l[14],x}function v(l,_,x){const b=x??new o(3),A=_*4;return b[0]=l[A+0],b[1]=l[A+1],b[2]=l[A+2],b}function y(l,_){const x=_??new o(3),b=l[0],A=l[1],F=l[2],N=l[4],ie=l[5],Y=l[6],Q=l[8],_e=l[9],be=l[10];return x[0]=Math.sqrt(b*b+A*A+F*F),x[1]=Math.sqrt(N*N+ie*ie+Y*Y),x[2]=Math.sqrt(Q*Q+_e*_e+be*be),x}function C(l,_,x,b){const A=b??new o(3),F=[],N=[];return F[0]=l[0]-_[0],F[1]=l[1]-_[1],F[2]=l[2]-_[2],N[0]=F[0],N[1]=F[1]*Math.cos(x)-F[2]*Math.sin(x),N[2]=F[1]*Math.sin(x)+F[2]*Math.cos(x),A[0]=N[0]+_[0],A[1]=N[1]+_[1],A[2]=N[2]+_[2],A}function E(l,_,x,b){const A=b??new o(3),F=[],N=[];return F[0]=l[0]-_[0],F[1]=l[1]-_[1],F[2]=l[2]-_[2],N[0]=F[2]*Math.sin(x)+F[0]*Math.cos(x),N[1]=F[1],N[2]=F[2]*Math.cos(x)-F[0]*Math.sin(x),A[0]=N[0]+_[0],A[1]=N[1]+_[1],A[2]=N[2]+_[2],A}function r(l,_,x,b){const A=b??new o(3),F=[],N=[];return F[0]=l[0]-_[0],F[1]=l[1]-_[1],F[2]=l[2]-_[2],N[0]=F[0]*Math.cos(x)-F[1]*Math.sin(x),N[1]=F[0]*Math.sin(x)+F[1]*Math.cos(x),N[2]=F[2],A[0]=N[0]+_[0],A[1]=N[1]+_[1],A[2]=N[2]+_[2],A}function m(l,_,x){const b=x??new o(3);return te(l,b),Z(b,_,b)}function c(l,_,x){const b=x??new o(3);return Se(l)>_?m(l,_,b):fe(l,b)}function h(l,_,x){const b=x??new o(3);return H(l,_,.5,b)}return{create:a,fromValues:f,set:P,ceil:g,floor:k,round:B,clamp:O,add:T,addScaled:D,angle:I,subtract:L,sub:K,equalsApproximately:V,equals:W,lerp:H,lerpV:$,max:le,min:j,mulScalar:Z,scale:q,divScalar:oe,inverse:ne,invert:de,cross:re,dot:ue,length:Se,len:Ue,lengthSq:Le,lenSq:Ie,distance:Ee,dist:me,distanceSq:xe,distSq:J,normalize:te,negate:se,copy:fe,clone:Te,multiply:Pe,mul:ke,divide:ve,div:Ae,random:$e,zero:M,transformMat4:U,transformMat4Upper3x3:w,transformMat3:i,transformQuat:p,getTranslation:d,getAxis:v,getScaling:y,rotateX:C,rotateY:E,rotateZ:r,setLength:m,truncate:c,midpoint:h}}const jr=new Map;function rs(o){let a=jr.get(o);return a||(a=Sl(o),jr.set(o,a)),a}function Cl(o){const a=ci(o),f=rs(o);function P(i,p,d,v,y,C,E,r,m){const c=new o(12);return c[3]=0,c[7]=0,c[11]=0,i!==void 0&&(c[0]=i,p!==void 0&&(c[1]=p,d!==void 0&&(c[2]=d,v!==void 0&&(c[4]=v,y!==void 0&&(c[5]=y,C!==void 0&&(c[6]=C,E!==void 0&&(c[8]=E,r!==void 0&&(c[9]=r,m!==void 0&&(c[10]=m))))))))),c}function g(i,p,d,v,y,C,E,r,m,c){const h=c??new o(12);return h[0]=i,h[1]=p,h[2]=d,h[3]=0,h[4]=v,h[5]=y,h[6]=C,h[7]=0,h[8]=E,h[9]=r,h[10]=m,h[11]=0,h}function k(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function B(i,p){const d=p??new o(12),v=i[0],y=i[1],C=i[2],E=i[3],r=v+v,m=y+y,c=C+C,h=v*r,l=y*r,_=y*m,x=C*r,b=C*m,A=C*c,F=E*r,N=E*m,ie=E*c;return d[0]=1-_-A,d[1]=l+ie,d[2]=x-N,d[3]=0,d[4]=l-ie,d[5]=1-h-A,d[6]=b+F,d[7]=0,d[8]=x+N,d[9]=b-F,d[10]=1-h-_,d[11]=0,d}function O(i,p){const d=p??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function T(i,p,d){const v=d??new o(12);return v[0]=i[0]*p,v[1]=i[1]*p,v[2]=i[2]*p,v[4]=i[4]*p,v[5]=i[5]*p,v[6]=i[6]*p,v[8]=i[8]*p,v[9]=i[9]*p,v[10]=i[10]*p,v}const D=T;function I(i,p,d){const v=d??new o(12);return v[0]=i[0]+p[0],v[1]=i[1]+p[1],v[2]=i[2]+p[2],v[4]=i[4]+p[4],v[5]=i[5]+p[5],v[6]=i[6]+p[6],v[8]=i[8]+p[8],v[9]=i[9]+p[9],v[10]=i[10]+p[10],v}function L(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const K=L;function V(i,p){return Math.abs(i[0]-p[0])<De&&Math.abs(i[1]-p[1])<De&&Math.abs(i[2]-p[2])<De&&Math.abs(i[4]-p[4])<De&&Math.abs(i[5]-p[5])<De&&Math.abs(i[6]-p[6])<De&&Math.abs(i[8]-p[8])<De&&Math.abs(i[9]-p[9])<De&&Math.abs(i[10]-p[10])<De}function W(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[4]===p[4]&&i[5]===p[5]&&i[6]===p[6]&&i[8]===p[8]&&i[9]===p[9]&&i[10]===p[10]}function H(i){const p=i??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function $(i,p){const d=p??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const v=i[0*4+0],y=i[0*4+1],C=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],c=i[2*4+0],h=i[2*4+1],l=i[2*4+2];return d[0]=v,d[1]=E,d[2]=c,d[4]=y,d[5]=r,d[6]=h,d[8]=C,d[9]=m,d[10]=l,d}function le(i,p){const d=p??new o(12),v=i[0*4+0],y=i[0*4+1],C=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],c=i[2*4+0],h=i[2*4+1],l=i[2*4+2],_=l*r-m*h,x=-l*E+m*c,b=h*E-r*c,A=1/(v*_+y*x+C*b);return d[0]=_*A,d[1]=(-l*y+C*h)*A,d[2]=(m*y-C*r)*A,d[4]=x*A,d[5]=(l*v-C*c)*A,d[6]=(-m*v+C*E)*A,d[8]=b*A,d[9]=(-h*v+y*c)*A,d[10]=(r*v-y*E)*A,d}function j(i){const p=i[0],d=i[0*4+1],v=i[0*4+2],y=i[1*4+0],C=i[1*4+1],E=i[1*4+2],r=i[2*4+0],m=i[2*4+1],c=i[2*4+2];return p*(C*c-m*E)-y*(d*c-m*v)+r*(d*E-C*v)}const Z=le;function q(i,p,d){const v=d??new o(12),y=i[0],C=i[1],E=i[2],r=i[4+0],m=i[4+1],c=i[4+2],h=i[8+0],l=i[8+1],_=i[8+2],x=p[0],b=p[1],A=p[2],F=p[4+0],N=p[4+1],ie=p[4+2],Y=p[8+0],Q=p[8+1],_e=p[8+2];return v[0]=y*x+r*b+h*A,v[1]=C*x+m*b+l*A,v[2]=E*x+c*b+_*A,v[4]=y*F+r*N+h*ie,v[5]=C*F+m*N+l*ie,v[6]=E*F+c*N+_*ie,v[8]=y*Y+r*Q+h*_e,v[9]=C*Y+m*Q+l*_e,v[10]=E*Y+c*Q+_*_e,v}const oe=q;function ne(i,p,d){const v=d??H();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=p[0],v[9]=p[1],v[10]=1,v}function de(i,p){const d=p??a.create();return d[0]=i[8],d[1]=i[9],d}function re(i,p,d){const v=d??a.create(),y=p*4;return v[0]=i[y+0],v[1]=i[y+1],v}function ue(i,p,d,v){const y=v===i?i:L(i,v),C=d*4;return y[C+0]=p[0],y[C+1]=p[1],y}function Se(i,p){const d=p??a.create(),v=i[0],y=i[1],C=i[4],E=i[5];return d[0]=Math.sqrt(v*v+y*y),d[1]=Math.sqrt(C*C+E*E),d}function Ue(i,p){const d=p??f.create(),v=i[0],y=i[1],C=i[2],E=i[4],r=i[5],m=i[6],c=i[8],h=i[9],l=i[10];return d[0]=Math.sqrt(v*v+y*y+C*C),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(c*c+h*h+l*l),d}function Le(i,p){const d=p??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Ie(i,p,d){const v=d??new o(12),y=p[0],C=p[1],E=i[0],r=i[1],m=i[2],c=i[1*4+0],h=i[1*4+1],l=i[1*4+2],_=i[2*4+0],x=i[2*4+1],b=i[2*4+2];return i!==v&&(v[0]=E,v[1]=r,v[2]=m,v[4]=c,v[5]=h,v[6]=l),v[8]=E*y+c*C+_,v[9]=r*y+h*C+x,v[10]=m*y+l*C+b,v}function Ee(i,p){const d=p??new o(12),v=Math.cos(i),y=Math.sin(i);return d[0]=v,d[1]=y,d[2]=0,d[4]=-y,d[5]=v,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function me(i,p,d){const v=d??new o(12),y=i[0*4+0],C=i[0*4+1],E=i[0*4+2],r=i[1*4+0],m=i[1*4+1],c=i[1*4+2],h=Math.cos(p),l=Math.sin(p);return v[0]=h*y+l*r,v[1]=h*C+l*m,v[2]=h*E+l*c,v[4]=h*r-l*y,v[5]=h*m-l*C,v[6]=h*c-l*E,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function xe(i,p){const d=p??new o(12),v=Math.cos(i),y=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=v,d[6]=y,d[8]=0,d[9]=-y,d[10]=v,d}function J(i,p,d){const v=d??new o(12),y=i[4],C=i[5],E=i[6],r=i[8],m=i[9],c=i[10],h=Math.cos(p),l=Math.sin(p);return v[4]=h*y+l*r,v[5]=h*C+l*m,v[6]=h*E+l*c,v[8]=h*r-l*y,v[9]=h*m-l*C,v[10]=h*c-l*E,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function te(i,p){const d=p??new o(12),v=Math.cos(i),y=Math.sin(i);return d[0]=v,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=v,d}function se(i,p,d){const v=d??new o(12),y=i[0*4+0],C=i[0*4+1],E=i[0*4+2],r=i[2*4+0],m=i[2*4+1],c=i[2*4+2],h=Math.cos(p),l=Math.sin(p);return v[0]=h*y-l*r,v[1]=h*C-l*m,v[2]=h*E-l*c,v[8]=h*r+l*y,v[9]=h*m+l*C,v[10]=h*c+l*E,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const fe=Ee,Te=me;function Pe(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ke(i,p,d){const v=d??new o(12),y=p[0],C=p[1];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=C*i[1*4+0],v[5]=C*i[1*4+1],v[6]=C*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ve(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function Ae(i,p,d){const v=d??new o(12),y=p[0],C=p[1],E=p[2];return v[0]=y*i[0*4+0],v[1]=y*i[0*4+1],v[2]=y*i[0*4+2],v[4]=C*i[1*4+0],v[5]=C*i[1*4+1],v[6]=C*i[1*4+2],v[8]=E*i[2*4+0],v[9]=E*i[2*4+1],v[10]=E*i[2*4+2],v}function $e(i,p){const d=p??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function M(i,p,d){const v=d??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function U(i,p){const d=p??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function w(i,p,d){const v=d??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],v[8]=p*i[2*4+0],v[9]=p*i[2*4+1],v[10]=p*i[2*4+2],v}return{add:I,clone:K,copy:L,create:P,determinant:j,equals:W,equalsApproximately:V,fromMat4:k,fromQuat:B,get3DScaling:Ue,getAxis:re,getScaling:Se,getTranslation:de,identity:H,inverse:le,invert:Z,mul:oe,mulScalar:D,multiply:q,multiplyScalar:T,negate:O,rotate:me,rotateX:J,rotateY:se,rotateZ:Te,rotation:Ee,rotationX:xe,rotationY:te,rotationZ:fe,scale:ke,scale3D:Ae,scaling:Pe,scaling3D:ve,set:g,setAxis:ue,setTranslation:ne,translate:Ie,translation:Le,transpose:$,uniformScale:M,uniformScale3D:w,uniformScaling:$e,uniformScaling3D:U}}const Hr=new Map;function El(o){let a=Hr.get(o);return a||(a=Cl(o),Hr.set(o,a)),a}function kl(o){const a=rs(o);function f(r,m,c,h,l,_,x,b,A,F,N,ie,Y,Q,_e,be){const he=new o(16);return r!==void 0&&(he[0]=r,m!==void 0&&(he[1]=m,c!==void 0&&(he[2]=c,h!==void 0&&(he[3]=h,l!==void 0&&(he[4]=l,_!==void 0&&(he[5]=_,x!==void 0&&(he[6]=x,b!==void 0&&(he[7]=b,A!==void 0&&(he[8]=A,F!==void 0&&(he[9]=F,N!==void 0&&(he[10]=N,ie!==void 0&&(he[11]=ie,Y!==void 0&&(he[12]=Y,Q!==void 0&&(he[13]=Q,_e!==void 0&&(he[14]=_e,be!==void 0&&(he[15]=be)))))))))))))))),he}function P(r,m,c,h,l,_,x,b,A,F,N,ie,Y,Q,_e,be,he){const ce=he??new o(16);return ce[0]=r,ce[1]=m,ce[2]=c,ce[3]=h,ce[4]=l,ce[5]=_,ce[6]=x,ce[7]=b,ce[8]=A,ce[9]=F,ce[10]=N,ce[11]=ie,ce[12]=Y,ce[13]=Q,ce[14]=_e,ce[15]=be,ce}function g(r,m){const c=m??new o(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=0,c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=0,c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function k(r,m){const c=m??new o(16),h=r[0],l=r[1],_=r[2],x=r[3],b=h+h,A=l+l,F=_+_,N=h*b,ie=l*b,Y=l*A,Q=_*b,_e=_*A,be=_*F,he=x*b,ce=x*A,Me=x*F;return c[0]=1-Y-be,c[1]=ie+Me,c[2]=Q-ce,c[3]=0,c[4]=ie-Me,c[5]=1-N-be,c[6]=_e+he,c[7]=0,c[8]=Q+ce,c[9]=_e-he,c[10]=1-N-Y,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function B(r,m){const c=m??new o(16);return c[0]=-r[0],c[1]=-r[1],c[2]=-r[2],c[3]=-r[3],c[4]=-r[4],c[5]=-r[5],c[6]=-r[6],c[7]=-r[7],c[8]=-r[8],c[9]=-r[9],c[10]=-r[10],c[11]=-r[11],c[12]=-r[12],c[13]=-r[13],c[14]=-r[14],c[15]=-r[15],c}function O(r,m,c){const h=c??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function T(r,m,c){const h=c??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const D=T;function I(r,m){const c=m??new o(16);return c[0]=r[0],c[1]=r[1],c[2]=r[2],c[3]=r[3],c[4]=r[4],c[5]=r[5],c[6]=r[6],c[7]=r[7],c[8]=r[8],c[9]=r[9],c[10]=r[10],c[11]=r[11],c[12]=r[12],c[13]=r[13],c[14]=r[14],c[15]=r[15],c}const L=I;function K(r,m){return Math.abs(r[0]-m[0])<De&&Math.abs(r[1]-m[1])<De&&Math.abs(r[2]-m[2])<De&&Math.abs(r[3]-m[3])<De&&Math.abs(r[4]-m[4])<De&&Math.abs(r[5]-m[5])<De&&Math.abs(r[6]-m[6])<De&&Math.abs(r[7]-m[7])<De&&Math.abs(r[8]-m[8])<De&&Math.abs(r[9]-m[9])<De&&Math.abs(r[10]-m[10])<De&&Math.abs(r[11]-m[11])<De&&Math.abs(r[12]-m[12])<De&&Math.abs(r[13]-m[13])<De&&Math.abs(r[14]-m[14])<De&&Math.abs(r[15]-m[15])<De}function V(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function W(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function H(r,m){const c=m??new o(16);if(c===r){let Be;return Be=r[1],r[1]=r[4],r[4]=Be,Be=r[2],r[2]=r[8],r[8]=Be,Be=r[3],r[3]=r[12],r[12]=Be,Be=r[6],r[6]=r[9],r[9]=Be,Be=r[7],r[7]=r[13],r[13]=Be,Be=r[11],r[11]=r[14],r[14]=Be,c}const h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],x=r[0*4+3],b=r[1*4+0],A=r[1*4+1],F=r[1*4+2],N=r[1*4+3],ie=r[2*4+0],Y=r[2*4+1],Q=r[2*4+2],_e=r[2*4+3],be=r[3*4+0],he=r[3*4+1],ce=r[3*4+2],Me=r[3*4+3];return c[0]=h,c[1]=b,c[2]=ie,c[3]=be,c[4]=l,c[5]=A,c[6]=Y,c[7]=he,c[8]=_,c[9]=F,c[10]=Q,c[11]=ce,c[12]=x,c[13]=N,c[14]=_e,c[15]=Me,c}function $(r,m){const c=m??new o(16),h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],x=r[0*4+3],b=r[1*4+0],A=r[1*4+1],F=r[1*4+2],N=r[1*4+3],ie=r[2*4+0],Y=r[2*4+1],Q=r[2*4+2],_e=r[2*4+3],be=r[3*4+0],he=r[3*4+1],ce=r[3*4+2],Me=r[3*4+3],Be=Q*Me,qe=ce*_e,je=F*Me,Ke=ce*N,Xe=F*_e,Ye=Q*N,it=_*Me,ot=ce*x,nt=_*_e,st=Q*x,Je=_*N,et=F*x,Fe=ie*he,tt=be*Y,He=b*he,ut=be*A,rt=b*Y,_t=ie*A,gt=h*he,St=be*l,Ct=h*Y,Mt=ie*l,Et=h*A,Bt=b*l,Wt=Be*A+Ke*Y+Xe*he-(qe*A+je*Y+Ye*he),Tt=qe*l+it*Y+st*he-(Be*l+ot*Y+nt*he),jt=je*l+ot*A+Je*he-(Ke*l+it*A+et*he),Ut=Ye*l+nt*A+et*Y-(Xe*l+st*A+Je*Y),Ze=1/(h*Wt+b*Tt+ie*jt+be*Ut);return c[0]=Ze*Wt,c[1]=Ze*Tt,c[2]=Ze*jt,c[3]=Ze*Ut,c[4]=Ze*(qe*b+je*ie+Ye*be-(Be*b+Ke*ie+Xe*be)),c[5]=Ze*(Be*h+ot*ie+nt*be-(qe*h+it*ie+st*be)),c[6]=Ze*(Ke*h+it*b+et*be-(je*h+ot*b+Je*be)),c[7]=Ze*(Xe*h+st*b+Je*ie-(Ye*h+nt*b+et*ie)),c[8]=Ze*(Fe*N+ut*_e+rt*Me-(tt*N+He*_e+_t*Me)),c[9]=Ze*(tt*x+gt*_e+Mt*Me-(Fe*x+St*_e+Ct*Me)),c[10]=Ze*(He*x+St*N+Et*Me-(ut*x+gt*N+Bt*Me)),c[11]=Ze*(_t*x+Ct*N+Bt*_e-(rt*x+Mt*N+Et*_e)),c[12]=Ze*(He*Q+_t*ce+tt*F-(rt*ce+Fe*F+ut*Q)),c[13]=Ze*(Ct*ce+Fe*_+St*Q-(gt*Q+Mt*ce+tt*_)),c[14]=Ze*(gt*F+Bt*ce+ut*_-(Et*ce+He*_+St*F)),c[15]=Ze*(Et*Q+rt*_+Mt*F-(Ct*F+Bt*Q+_t*_)),c}function le(r){const m=r[0],c=r[0*4+1],h=r[0*4+2],l=r[0*4+3],_=r[1*4+0],x=r[1*4+1],b=r[1*4+2],A=r[1*4+3],F=r[2*4+0],N=r[2*4+1],ie=r[2*4+2],Y=r[2*4+3],Q=r[3*4+0],_e=r[3*4+1],be=r[3*4+2],he=r[3*4+3],ce=ie*he,Me=be*Y,Be=b*he,qe=be*A,je=b*Y,Ke=ie*A,Xe=h*he,Ye=be*l,it=h*Y,ot=ie*l,nt=h*A,st=b*l,Je=ce*x+qe*N+je*_e-(Me*x+Be*N+Ke*_e),et=Me*c+Xe*N+ot*_e-(ce*c+Ye*N+it*_e),Fe=Be*c+Ye*x+nt*_e-(qe*c+Xe*x+st*_e),tt=Ke*c+it*x+st*N-(je*c+ot*x+nt*N);return m*Je+_*et+F*Fe+Q*tt}const j=$;function Z(r,m,c){const h=c??new o(16),l=r[0],_=r[1],x=r[2],b=r[3],A=r[4+0],F=r[4+1],N=r[4+2],ie=r[4+3],Y=r[8+0],Q=r[8+1],_e=r[8+2],be=r[8+3],he=r[12+0],ce=r[12+1],Me=r[12+2],Be=r[12+3],qe=m[0],je=m[1],Ke=m[2],Xe=m[3],Ye=m[4+0],it=m[4+1],ot=m[4+2],nt=m[4+3],st=m[8+0],Je=m[8+1],et=m[8+2],Fe=m[8+3],tt=m[12+0],He=m[12+1],ut=m[12+2],rt=m[12+3];return h[0]=l*qe+A*je+Y*Ke+he*Xe,h[1]=_*qe+F*je+Q*Ke+ce*Xe,h[2]=x*qe+N*je+_e*Ke+Me*Xe,h[3]=b*qe+ie*je+be*Ke+Be*Xe,h[4]=l*Ye+A*it+Y*ot+he*nt,h[5]=_*Ye+F*it+Q*ot+ce*nt,h[6]=x*Ye+N*it+_e*ot+Me*nt,h[7]=b*Ye+ie*it+be*ot+Be*nt,h[8]=l*st+A*Je+Y*et+he*Fe,h[9]=_*st+F*Je+Q*et+ce*Fe,h[10]=x*st+N*Je+_e*et+Me*Fe,h[11]=b*st+ie*Je+be*et+Be*Fe,h[12]=l*tt+A*He+Y*ut+he*rt,h[13]=_*tt+F*He+Q*ut+ce*rt,h[14]=x*tt+N*He+_e*ut+Me*rt,h[15]=b*tt+ie*He+be*ut+Be*rt,h}const q=Z;function oe(r,m,c){const h=c??W();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function ne(r,m){const c=m??a.create();return c[0]=r[12],c[1]=r[13],c[2]=r[14],c}function de(r,m,c){const h=c??a.create(),l=m*4;return h[0]=r[l+0],h[1]=r[l+1],h[2]=r[l+2],h}function re(r,m,c,h){const l=h===r?h:I(r,h),_=c*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function ue(r,m){const c=m??a.create(),h=r[0],l=r[1],_=r[2],x=r[4],b=r[5],A=r[6],F=r[8],N=r[9],ie=r[10];return c[0]=Math.sqrt(h*h+l*l+_*_),c[1]=Math.sqrt(x*x+b*b+A*A),c[2]=Math.sqrt(F*F+N*N+ie*ie),c}function Se(r,m,c,h,l){const _=l??new o(16),x=Math.tan(Math.PI*.5-.5*r);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const b=1/(c-h);_[10]=h*b,_[14]=h*c*b}else _[10]=-1,_[14]=-c;return _}function Ue(r,m,c,h=1/0,l){const _=l??new o(16),x=1/Math.tan(r*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=c;else{const b=1/(h-c);_[10]=c*b,_[14]=h*c*b}return _}function Le(r,m,c,h,l,_,x){const b=x??new o(16);return b[0]=2/(m-r),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(h-c),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(l-_),b[11]=0,b[12]=(m+r)/(r-m),b[13]=(h+c)/(c-h),b[14]=l/(l-_),b[15]=1,b}function Ie(r,m,c,h,l,_,x){const b=x??new o(16),A=m-r,F=h-c,N=l-_;return b[0]=2*l/A,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/F,b[6]=0,b[7]=0,b[8]=(r+m)/A,b[9]=(h+c)/F,b[10]=_/N,b[11]=-1,b[12]=0,b[13]=0,b[14]=l*_/N,b[15]=0,b}function Ee(r,m,c,h,l,_=1/0,x){const b=x??new o(16),A=m-r,F=h-c;if(b[0]=2*l/A,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*l/F,b[6]=0,b[7]=0,b[8]=(r+m)/A,b[9]=(h+c)/F,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,_===1/0)b[10]=0,b[14]=l;else{const N=1/(_-l);b[10]=l*N,b[14]=_*l*N}return b}const me=a.create(),xe=a.create(),J=a.create();function te(r,m,c,h){const l=h??new o(16);return a.normalize(a.subtract(m,r,J),J),a.normalize(a.cross(c,J,me),me),a.normalize(a.cross(J,me,xe),xe),l[0]=me[0],l[1]=me[1],l[2]=me[2],l[3]=0,l[4]=xe[0],l[5]=xe[1],l[6]=xe[2],l[7]=0,l[8]=J[0],l[9]=J[1],l[10]=J[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function se(r,m,c,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,J),J),a.normalize(a.cross(c,J,me),me),a.normalize(a.cross(J,me,xe),xe),l[0]=me[0],l[1]=me[1],l[2]=me[2],l[3]=0,l[4]=xe[0],l[5]=xe[1],l[6]=xe[2],l[7]=0,l[8]=J[0],l[9]=J[1],l[10]=J[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function fe(r,m,c,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,J),J),a.normalize(a.cross(c,J,me),me),a.normalize(a.cross(J,me,xe),xe),l[0]=me[0],l[1]=xe[0],l[2]=J[0],l[3]=0,l[4]=me[1],l[5]=xe[1],l[6]=J[1],l[7]=0,l[8]=me[2],l[9]=xe[2],l[10]=J[2],l[11]=0,l[12]=-(me[0]*r[0]+me[1]*r[1]+me[2]*r[2]),l[13]=-(xe[0]*r[0]+xe[1]*r[1]+xe[2]*r[2]),l[14]=-(J[0]*r[0]+J[1]*r[1]+J[2]*r[2]),l[15]=1,l}function Te(r,m){const c=m??new o(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=r[0],c[13]=r[1],c[14]=r[2],c[15]=1,c}function Pe(r,m,c){const h=c??new o(16),l=m[0],_=m[1],x=m[2],b=r[0],A=r[1],F=r[2],N=r[3],ie=r[1*4+0],Y=r[1*4+1],Q=r[1*4+2],_e=r[1*4+3],be=r[2*4+0],he=r[2*4+1],ce=r[2*4+2],Me=r[2*4+3],Be=r[3*4+0],qe=r[3*4+1],je=r[3*4+2],Ke=r[3*4+3];return r!==h&&(h[0]=b,h[1]=A,h[2]=F,h[3]=N,h[4]=ie,h[5]=Y,h[6]=Q,h[7]=_e,h[8]=be,h[9]=he,h[10]=ce,h[11]=Me),h[12]=b*l+ie*_+be*x+Be,h[13]=A*l+Y*_+he*x+qe,h[14]=F*l+Q*_+ce*x+je,h[15]=N*l+_e*_+Me*x+Ke,h}function ke(r,m){const c=m??new o(16),h=Math.cos(r),l=Math.sin(r);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=l,c[7]=0,c[8]=0,c[9]=-l,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function ve(r,m,c){const h=c??new o(16),l=r[4],_=r[5],x=r[6],b=r[7],A=r[8],F=r[9],N=r[10],ie=r[11],Y=Math.cos(m),Q=Math.sin(m);return h[4]=Y*l+Q*A,h[5]=Y*_+Q*F,h[6]=Y*x+Q*N,h[7]=Y*b+Q*ie,h[8]=Y*A-Q*l,h[9]=Y*F-Q*_,h[10]=Y*N-Q*x,h[11]=Y*ie-Q*b,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function Ae(r,m){const c=m??new o(16),h=Math.cos(r),l=Math.sin(r);return c[0]=h,c[1]=0,c[2]=-l,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=l,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function $e(r,m,c){const h=c??new o(16),l=r[0*4+0],_=r[0*4+1],x=r[0*4+2],b=r[0*4+3],A=r[2*4+0],F=r[2*4+1],N=r[2*4+2],ie=r[2*4+3],Y=Math.cos(m),Q=Math.sin(m);return h[0]=Y*l-Q*A,h[1]=Y*_-Q*F,h[2]=Y*x-Q*N,h[3]=Y*b-Q*ie,h[8]=Y*A+Q*l,h[9]=Y*F+Q*_,h[10]=Y*N+Q*x,h[11]=Y*ie+Q*b,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function M(r,m){const c=m??new o(16),h=Math.cos(r),l=Math.sin(r);return c[0]=h,c[1]=l,c[2]=0,c[3]=0,c[4]=-l,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function U(r,m,c){const h=c??new o(16),l=r[0*4+0],_=r[0*4+1],x=r[0*4+2],b=r[0*4+3],A=r[1*4+0],F=r[1*4+1],N=r[1*4+2],ie=r[1*4+3],Y=Math.cos(m),Q=Math.sin(m);return h[0]=Y*l+Q*A,h[1]=Y*_+Q*F,h[2]=Y*x+Q*N,h[3]=Y*b+Q*ie,h[4]=Y*A-Q*l,h[5]=Y*F-Q*_,h[6]=Y*N-Q*x,h[7]=Y*ie-Q*b,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function w(r,m,c){const h=c??new o(16);let l=r[0],_=r[1],x=r[2];const b=Math.sqrt(l*l+_*_+x*x);l/=b,_/=b,x/=b;const A=l*l,F=_*_,N=x*x,ie=Math.cos(m),Y=Math.sin(m),Q=1-ie;return h[0]=A+(1-A)*ie,h[1]=l*_*Q+x*Y,h[2]=l*x*Q-_*Y,h[3]=0,h[4]=l*_*Q-x*Y,h[5]=F+(1-F)*ie,h[6]=_*x*Q+l*Y,h[7]=0,h[8]=l*x*Q+_*Y,h[9]=_*x*Q-l*Y,h[10]=N+(1-N)*ie,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=w;function p(r,m,c,h){const l=h??new o(16);let _=m[0],x=m[1],b=m[2];const A=Math.sqrt(_*_+x*x+b*b);_/=A,x/=A,b/=A;const F=_*_,N=x*x,ie=b*b,Y=Math.cos(c),Q=Math.sin(c),_e=1-Y,be=F+(1-F)*Y,he=_*x*_e+b*Q,ce=_*b*_e-x*Q,Me=_*x*_e-b*Q,Be=N+(1-N)*Y,qe=x*b*_e+_*Q,je=_*b*_e+x*Q,Ke=x*b*_e-_*Q,Xe=ie+(1-ie)*Y,Ye=r[0],it=r[1],ot=r[2],nt=r[3],st=r[4],Je=r[5],et=r[6],Fe=r[7],tt=r[8],He=r[9],ut=r[10],rt=r[11];return l[0]=be*Ye+he*st+ce*tt,l[1]=be*it+he*Je+ce*He,l[2]=be*ot+he*et+ce*ut,l[3]=be*nt+he*Fe+ce*rt,l[4]=Me*Ye+Be*st+qe*tt,l[5]=Me*it+Be*Je+qe*He,l[6]=Me*ot+Be*et+qe*ut,l[7]=Me*nt+Be*Fe+qe*rt,l[8]=je*Ye+Ke*st+Xe*tt,l[9]=je*it+Ke*Je+Xe*He,l[10]=je*ot+Ke*et+Xe*ut,l[11]=je*nt+Ke*Fe+Xe*rt,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const d=p;function v(r,m){const c=m??new o(16);return c[0]=r[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function y(r,m,c){const h=c??new o(16),l=m[0],_=m[1],x=m[2];return h[0]=l*r[0*4+0],h[1]=l*r[0*4+1],h[2]=l*r[0*4+2],h[3]=l*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=x*r[2*4+0],h[9]=x*r[2*4+1],h[10]=x*r[2*4+2],h[11]=x*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function C(r,m){const c=m??new o(16);return c[0]=r,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=r,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=r,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(r,m,c){const h=c??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:O,aim:te,axisRotate:p,axisRotation:w,cameraAim:se,clone:L,copy:I,create:f,determinant:le,equals:V,equalsApproximately:K,fromMat3:g,fromQuat:k,frustum:Ie,frustumReverseZ:Ee,getAxis:de,getScaling:ue,getTranslation:ne,identity:W,inverse:$,invert:j,lookAt:fe,mul:q,mulScalar:D,multiply:Z,multiplyScalar:T,negate:B,ortho:Le,perspective:Se,perspectiveReverseZ:Ue,rotate:d,rotateX:ve,rotateY:$e,rotateZ:U,rotation:i,rotationX:ke,rotationY:Ae,rotationZ:M,scale:y,scaling:v,set:P,setAxis:re,setTranslation:oe,translate:Pe,translation:Te,transpose:H,uniformScale:E,uniformScaling:C}}const Kr=new Map;function Ml(o){let a=Kr.get(o);return a||(a=kl(o),Kr.set(o,a)),a}function Bl(o){const a=rs(o);function f(M,U,w,i){const p=new o(4);return M!==void 0&&(p[0]=M,U!==void 0&&(p[1]=U,w!==void 0&&(p[2]=w,i!==void 0&&(p[3]=i)))),p}const P=f;function g(M,U,w,i,p){const d=p??new o(4);return d[0]=M,d[1]=U,d[2]=w,d[3]=i,d}function k(M,U,w){const i=w??new o(4),p=U*.5,d=Math.sin(p);return i[0]=d*M[0],i[1]=d*M[1],i[2]=d*M[2],i[3]=Math.cos(p),i}function B(M,U){const w=U??a.create(3),i=Math.acos(M[3])*2,p=Math.sin(i*.5);return p>De?(w[0]=M[0]/p,w[1]=M[1]/p,w[2]=M[2]/p):(w[0]=1,w[1]=0,w[2]=0),{angle:i,axis:w}}function O(M,U){const w=Se(M,U);return Math.acos(2*w*w-1)}function T(M,U,w){const i=w??new o(4),p=M[0],d=M[1],v=M[2],y=M[3],C=U[0],E=U[1],r=U[2],m=U[3];return i[0]=p*m+y*C+d*r-v*E,i[1]=d*m+y*E+v*C-p*r,i[2]=v*m+y*r+p*E-d*C,i[3]=y*m-p*C-d*E-v*r,i}const D=T;function I(M,U,w){const i=w??new o(4),p=U*.5,d=M[0],v=M[1],y=M[2],C=M[3],E=Math.sin(p),r=Math.cos(p);return i[0]=d*r+C*E,i[1]=v*r+y*E,i[2]=y*r-v*E,i[3]=C*r-d*E,i}function L(M,U,w){const i=w??new o(4),p=U*.5,d=M[0],v=M[1],y=M[2],C=M[3],E=Math.sin(p),r=Math.cos(p);return i[0]=d*r-y*E,i[1]=v*r+C*E,i[2]=y*r+d*E,i[3]=C*r-v*E,i}function K(M,U,w){const i=w??new o(4),p=U*.5,d=M[0],v=M[1],y=M[2],C=M[3],E=Math.sin(p),r=Math.cos(p);return i[0]=d*r+v*E,i[1]=v*r-d*E,i[2]=y*r+C*E,i[3]=C*r-y*E,i}function V(M,U,w,i){const p=i??new o(4),d=M[0],v=M[1],y=M[2],C=M[3];let E=U[0],r=U[1],m=U[2],c=U[3],h=d*E+v*r+y*m+C*c;h<0&&(h=-h,E=-E,r=-r,m=-m,c=-c);let l,_;if(1-h>De){const x=Math.acos(h),b=Math.sin(x);l=Math.sin((1-w)*x)/b,_=Math.sin(w*x)/b}else l=1-w,_=w;return p[0]=l*d+_*E,p[1]=l*v+_*r,p[2]=l*y+_*m,p[3]=l*C+_*c,p}function W(M,U){const w=U??new o(4),i=M[0],p=M[1],d=M[2],v=M[3],y=i*i+p*p+d*d+v*v,C=y?1/y:0;return w[0]=-i*C,w[1]=-p*C,w[2]=-d*C,w[3]=v*C,w}function H(M,U){const w=U??new o(4);return w[0]=-M[0],w[1]=-M[1],w[2]=-M[2],w[3]=M[3],w}function $(M,U){const w=U??new o(4),i=M[0]+M[5]+M[10];if(i>0){const p=Math.sqrt(i+1);w[3]=.5*p;const d=.5/p;w[0]=(M[6]-M[9])*d,w[1]=(M[8]-M[2])*d,w[2]=(M[1]-M[4])*d}else{let p=0;M[5]>M[0]&&(p=1),M[10]>M[p*4+p]&&(p=2);const d=(p+1)%3,v=(p+2)%3,y=Math.sqrt(M[p*4+p]-M[d*4+d]-M[v*4+v]+1);w[p]=.5*y;const C=.5/y;w[3]=(M[d*4+v]-M[v*4+d])*C,w[d]=(M[d*4+p]+M[p*4+d])*C,w[v]=(M[v*4+p]+M[p*4+v])*C}return w}function le(M,U,w,i,p){const d=p??new o(4),v=M*.5,y=U*.5,C=w*.5,E=Math.sin(v),r=Math.cos(v),m=Math.sin(y),c=Math.cos(y),h=Math.sin(C),l=Math.cos(C);switch(i){case"xyz":d[0]=E*c*l+r*m*h,d[1]=r*m*l-E*c*h,d[2]=r*c*h+E*m*l,d[3]=r*c*l-E*m*h;break;case"xzy":d[0]=E*c*l-r*m*h,d[1]=r*m*l-E*c*h,d[2]=r*c*h+E*m*l,d[3]=r*c*l+E*m*h;break;case"yxz":d[0]=E*c*l+r*m*h,d[1]=r*m*l-E*c*h,d[2]=r*c*h-E*m*l,d[3]=r*c*l+E*m*h;break;case"yzx":d[0]=E*c*l+r*m*h,d[1]=r*m*l+E*c*h,d[2]=r*c*h-E*m*l,d[3]=r*c*l-E*m*h;break;case"zxy":d[0]=E*c*l-r*m*h,d[1]=r*m*l+E*c*h,d[2]=r*c*h+E*m*l,d[3]=r*c*l-E*m*h;break;case"zyx":d[0]=E*c*l-r*m*h,d[1]=r*m*l+E*c*h,d[2]=r*c*h-E*m*l,d[3]=r*c*l+E*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function j(M,U){const w=U??new o(4);return w[0]=M[0],w[1]=M[1],w[2]=M[2],w[3]=M[3],w}const Z=j;function q(M,U,w){const i=w??new o(4);return i[0]=M[0]+U[0],i[1]=M[1]+U[1],i[2]=M[2]+U[2],i[3]=M[3]+U[3],i}function oe(M,U,w){const i=w??new o(4);return i[0]=M[0]-U[0],i[1]=M[1]-U[1],i[2]=M[2]-U[2],i[3]=M[3]-U[3],i}const ne=oe;function de(M,U,w){const i=w??new o(4);return i[0]=M[0]*U,i[1]=M[1]*U,i[2]=M[2]*U,i[3]=M[3]*U,i}const re=de;function ue(M,U,w){const i=w??new o(4);return i[0]=M[0]/U,i[1]=M[1]/U,i[2]=M[2]/U,i[3]=M[3]/U,i}function Se(M,U){return M[0]*U[0]+M[1]*U[1]+M[2]*U[2]+M[3]*U[3]}function Ue(M,U,w,i){const p=i??new o(4);return p[0]=M[0]+w*(U[0]-M[0]),p[1]=M[1]+w*(U[1]-M[1]),p[2]=M[2]+w*(U[2]-M[2]),p[3]=M[3]+w*(U[3]-M[3]),p}function Le(M){const U=M[0],w=M[1],i=M[2],p=M[3];return Math.sqrt(U*U+w*w+i*i+p*p)}const Ie=Le;function Ee(M){const U=M[0],w=M[1],i=M[2],p=M[3];return U*U+w*w+i*i+p*p}const me=Ee;function xe(M,U){const w=U??new o(4),i=M[0],p=M[1],d=M[2],v=M[3],y=Math.sqrt(i*i+p*p+d*d+v*v);return y>1e-5?(w[0]=i/y,w[1]=p/y,w[2]=d/y,w[3]=v/y):(w[0]=0,w[1]=0,w[2]=0,w[3]=1),w}function J(M,U){return Math.abs(M[0]-U[0])<De&&Math.abs(M[1]-U[1])<De&&Math.abs(M[2]-U[2])<De&&Math.abs(M[3]-U[3])<De}function te(M,U){return M[0]===U[0]&&M[1]===U[1]&&M[2]===U[2]&&M[3]===U[3]}function se(M){const U=M??new o(4);return U[0]=0,U[1]=0,U[2]=0,U[3]=1,U}const fe=a.create(),Te=a.create(),Pe=a.create();function ke(M,U,w){const i=w??new o(4),p=a.dot(M,U);return p<-.999999?(a.cross(Te,M,fe),a.len(fe)<1e-6&&a.cross(Pe,M,fe),a.normalize(fe,fe),k(fe,Math.PI,i),i):p>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(M,U,fe),i[0]=fe[0],i[1]=fe[1],i[2]=fe[2],i[3]=1+p,xe(i,i))}const ve=new o(4),Ae=new o(4);function $e(M,U,w,i,p,d){const v=d??new o(4);return V(M,i,p,ve),V(U,w,p,Ae),V(ve,Ae,2*p*(1-p),v),v}return{create:f,fromValues:P,set:g,fromAxisAngle:k,toAxisAngle:B,angle:O,multiply:T,mul:D,rotateX:I,rotateY:L,rotateZ:K,slerp:V,inverse:W,conjugate:H,fromMat:$,fromEuler:le,copy:j,clone:Z,add:q,subtract:oe,sub:ne,mulScalar:de,scale:re,divScalar:ue,dot:Se,lerp:Ue,length:Le,len:Ie,lengthSq:Ee,lenSq:me,normalize:xe,equalsApproximately:J,equals:te,identity:se,rotationTo:ke,sqlerp:$e}}const Yr=new Map;function Tl(o){let a=Yr.get(o);return a||(a=Bl(o),Yr.set(o,a)),a}function Dl(o){function a(w,i,p,d){const v=new o(4);return w!==void 0&&(v[0]=w,i!==void 0&&(v[1]=i,p!==void 0&&(v[2]=p,d!==void 0&&(v[3]=d)))),v}const f=a;function P(w,i,p,d,v){const y=v??new o(4);return y[0]=w,y[1]=i,y[2]=p,y[3]=d,y}function g(w,i){const p=i??new o(4);return p[0]=Math.ceil(w[0]),p[1]=Math.ceil(w[1]),p[2]=Math.ceil(w[2]),p[3]=Math.ceil(w[3]),p}function k(w,i){const p=i??new o(4);return p[0]=Math.floor(w[0]),p[1]=Math.floor(w[1]),p[2]=Math.floor(w[2]),p[3]=Math.floor(w[3]),p}function B(w,i){const p=i??new o(4);return p[0]=Math.round(w[0]),p[1]=Math.round(w[1]),p[2]=Math.round(w[2]),p[3]=Math.round(w[3]),p}function O(w,i=0,p=1,d){const v=d??new o(4);return v[0]=Math.min(p,Math.max(i,w[0])),v[1]=Math.min(p,Math.max(i,w[1])),v[2]=Math.min(p,Math.max(i,w[2])),v[3]=Math.min(p,Math.max(i,w[3])),v}function T(w,i,p){const d=p??new o(4);return d[0]=w[0]+i[0],d[1]=w[1]+i[1],d[2]=w[2]+i[2],d[3]=w[3]+i[3],d}function D(w,i,p,d){const v=d??new o(4);return v[0]=w[0]+i[0]*p,v[1]=w[1]+i[1]*p,v[2]=w[2]+i[2]*p,v[3]=w[3]+i[3]*p,v}function I(w,i,p){const d=p??new o(4);return d[0]=w[0]-i[0],d[1]=w[1]-i[1],d[2]=w[2]-i[2],d[3]=w[3]-i[3],d}const L=I;function K(w,i){return Math.abs(w[0]-i[0])<De&&Math.abs(w[1]-i[1])<De&&Math.abs(w[2]-i[2])<De&&Math.abs(w[3]-i[3])<De}function V(w,i){return w[0]===i[0]&&w[1]===i[1]&&w[2]===i[2]&&w[3]===i[3]}function W(w,i,p,d){const v=d??new o(4);return v[0]=w[0]+p*(i[0]-w[0]),v[1]=w[1]+p*(i[1]-w[1]),v[2]=w[2]+p*(i[2]-w[2]),v[3]=w[3]+p*(i[3]-w[3]),v}function H(w,i,p,d){const v=d??new o(4);return v[0]=w[0]+p[0]*(i[0]-w[0]),v[1]=w[1]+p[1]*(i[1]-w[1]),v[2]=w[2]+p[2]*(i[2]-w[2]),v[3]=w[3]+p[3]*(i[3]-w[3]),v}function $(w,i,p){const d=p??new o(4);return d[0]=Math.max(w[0],i[0]),d[1]=Math.max(w[1],i[1]),d[2]=Math.max(w[2],i[2]),d[3]=Math.max(w[3],i[3]),d}function le(w,i,p){const d=p??new o(4);return d[0]=Math.min(w[0],i[0]),d[1]=Math.min(w[1],i[1]),d[2]=Math.min(w[2],i[2]),d[3]=Math.min(w[3],i[3]),d}function j(w,i,p){const d=p??new o(4);return d[0]=w[0]*i,d[1]=w[1]*i,d[2]=w[2]*i,d[3]=w[3]*i,d}const Z=j;function q(w,i,p){const d=p??new o(4);return d[0]=w[0]/i,d[1]=w[1]/i,d[2]=w[2]/i,d[3]=w[3]/i,d}function oe(w,i){const p=i??new o(4);return p[0]=1/w[0],p[1]=1/w[1],p[2]=1/w[2],p[3]=1/w[3],p}const ne=oe;function de(w,i){return w[0]*i[0]+w[1]*i[1]+w[2]*i[2]+w[3]*i[3]}function re(w){const i=w[0],p=w[1],d=w[2],v=w[3];return Math.sqrt(i*i+p*p+d*d+v*v)}const ue=re;function Se(w){const i=w[0],p=w[1],d=w[2],v=w[3];return i*i+p*p+d*d+v*v}const Ue=Se;function Le(w,i){const p=w[0]-i[0],d=w[1]-i[1],v=w[2]-i[2],y=w[3]-i[3];return Math.sqrt(p*p+d*d+v*v+y*y)}const Ie=Le;function Ee(w,i){const p=w[0]-i[0],d=w[1]-i[1],v=w[2]-i[2],y=w[3]-i[3];return p*p+d*d+v*v+y*y}const me=Ee;function xe(w,i){const p=i??new o(4),d=w[0],v=w[1],y=w[2],C=w[3],E=Math.sqrt(d*d+v*v+y*y+C*C);return E>1e-5?(p[0]=d/E,p[1]=v/E,p[2]=y/E,p[3]=C/E):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function J(w,i){const p=i??new o(4);return p[0]=-w[0],p[1]=-w[1],p[2]=-w[2],p[3]=-w[3],p}function te(w,i){const p=i??new o(4);return p[0]=w[0],p[1]=w[1],p[2]=w[2],p[3]=w[3],p}const se=te;function fe(w,i,p){const d=p??new o(4);return d[0]=w[0]*i[0],d[1]=w[1]*i[1],d[2]=w[2]*i[2],d[3]=w[3]*i[3],d}const Te=fe;function Pe(w,i,p){const d=p??new o(4);return d[0]=w[0]/i[0],d[1]=w[1]/i[1],d[2]=w[2]/i[2],d[3]=w[3]/i[3],d}const ke=Pe;function ve(w){const i=w??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Ae(w,i,p){const d=p??new o(4),v=w[0],y=w[1],C=w[2],E=w[3];return d[0]=i[0]*v+i[4]*y+i[8]*C+i[12]*E,d[1]=i[1]*v+i[5]*y+i[9]*C+i[13]*E,d[2]=i[2]*v+i[6]*y+i[10]*C+i[14]*E,d[3]=i[3]*v+i[7]*y+i[11]*C+i[15]*E,d}function $e(w,i,p){const d=p??new o(4);return xe(w,d),j(d,i,d)}function M(w,i,p){const d=p??new o(4);return re(w)>i?$e(w,i,d):te(w,d)}function U(w,i,p){const d=p??new o(4);return W(w,i,.5,d)}return{create:a,fromValues:f,set:P,ceil:g,floor:k,round:B,clamp:O,add:T,addScaled:D,subtract:I,sub:L,equalsApproximately:K,equals:V,lerp:W,lerpV:H,max:$,min:le,mulScalar:j,scale:Z,divScalar:q,inverse:oe,invert:ne,dot:de,length:re,len:ue,lengthSq:Se,lenSq:Ue,distance:Le,dist:Ie,distanceSq:Ee,distSq:me,normalize:xe,negate:J,copy:te,clone:se,multiply:fe,mul:Te,divide:Pe,div:ke,zero:ve,transformMat4:Ae,setLength:$e,truncate:M,midpoint:U}}const Zr=new Map;function Al(o){let a=Zr.get(o);return a||(a=Dl(o),Zr.set(o,a)),a}function Vs(o,a,f,P,g,k){return{mat3:El(o),mat4:Ml(a),quat:Tl(f),vec2:ci(P),vec3:rs(g),vec4:Al(k)}}const{mat3:yt,mat4:dt,quat:ht,vec2:Xr,vec3:G,vec4:Hc}=Vs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Vs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Vs(yl,Array,Array,Array,Array,Array);const Qr=document.querySelector("#log");let vt=null,on=null;function ui(){if(vt)return vt;vt=document.createElement("div"),vt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",vt.appendChild(o),on=document.createElement("div"),on.className="ply-spinner-label",vt.appendChild(on),vt.style.display="none",document.body.appendChild(vt),vt}function Os(o){ui(),on&&o&&(on.textContent=o),vt&&(vt.style.opacity="1",vt.style.display="flex")}function It(o){ui(),on&&(on.textContent=o)}function Gn(){if(!vt)return;const o=vt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function di(o,a){if(!Qr)return;const f=document.createElement("p");f.innerText=o,a&&Object.assign(f.style,a),Qr.appendChild(f)}async function Pt(o){console.log(o),di(o)}async function zl(o){console.error(o),di(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let pi;function hi(){pi=performance.now()}function Jr(o){const a=performance.now()-pi;Pt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Ll(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function Un(o){return o+3&-4}const Gl=2,Il=3,Ul=5,Rl=6,In=7,ts=8;function Vl(o){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const P=new DataView(o),g=4,k=P.getUint32(g+0,!0),B=P.getUint32(g+4,!0),O=P.getUint32(g+8,!0),T=P.getUint32(g+12,!0),D=P.getUint32(g+16,!0),I=P.getFloat32(g+20,!0),L=P.getUint32(g+24,!0),K=P.getUint32(g+28,!0),V=P.getFloat32(g+32,!0),W=P.getFloat32(g+36,!0),H=P.getFloat32(g+40,!0),$=P.getUint32(g+44,!0),le=P.getFloat32(g+48,!0),j=P.getFloat32(g+52,!0),Z=P.getUint32(g+56,!0),q=P.getUint32(g+60,!0),oe=q>0?q:1;if(K===Ul||K===Rl)throw new Error(`NAT2: paired-RVQ format=${K} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);if(K!==Gl&&K!==Il&&K!==In&&K!==ts)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7) or ASTC-codebook (8); got format=${K}`);if(k%4!==0||$%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${$}`);let ne=g+64;const de=(Z+1)*4,re=new Uint32Array(o.slice(ne,ne+de));ne+=de;let ue;if(oe>1){const J=(oe+1)*4;if(ne+J>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${J} from ${ne})`);ue=new Uint32Array(o.slice(ne,ne+J)),ne+=J}else ue=new Uint32Array([0,k]);let Se=0;for(let J=0;J<oe;J++){const te=ue[J+1]-ue[J];te>Se&&(Se=te)}const Ue=D*4*4;if(ne+Ue>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ue} more bytes from offset ${ne}, have ${o.byteLength-ne}`);const Le=new Float32Array(o.slice(ne,ne+Ue));ne+=Ue;const Ie=new Float32Array(D*5);for(let J=0;J<D;J++){const te=Le[J*4+0],se=Le[J*4+1],fe=Le[J*4+2],Te=Le[J*4+3];let Pe=0;for(let M=1;M<=Z&&re[M]<=se;M++)Pe=M;let ke=0;for(let M=1;M<=oe&&ue[M]<=te;M++)ke=M;const ve=se-re[Pe],Ae=te-ue[ke],$e=ke*Z+Pe;Ie[J*5+0]=Ae,Ie[J*5+1]=ve,Ie[J*5+2]=fe,Ie[J*5+3]=Te,Ie[J*5+4]=$e}let Ee;const xe=k/4*16;if(K===In||K===ts){if(ne+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const J=K===In?"BCCB":"ACCB",te=a.decode(new Uint8Array(o,ne,4));if(te!==J)throw new Error(`NAT2 typeD bad sub-magic: expected '${J}' got '${te}'`);const se=P.getUint32(ne+4,!0),fe=P.getUint32(ne+8,!0),Te=P.getUint32(ne+12,!0),Pe=P.getUint32(ne+16,!0),ke=P.getUint32(ne+20,!0);if(se!==1)throw new Error(`NAT2 BCCB unsupported version ${se}`);if(Te!==B/4||Pe!==k/4||ke!==Te*Pe)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${B}, sub-header ${Pe}×${Te} (${ke} blocks)`);ne+=24;const ve=fe*16;if(ne+ve>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${ve}, have ${o.byteLength-ne})`);const Ae=new Uint8Array(o,ne,ve);ne+=ve;const $e=ke*2;if(ne+$e>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${$e}, have ${o.byteLength-ne})`);const M=new Uint16Array(o.slice(ne,ne+$e));ne+=$e;const U=new Uint8Array(ke*16);for(let w=0;w<ke;w++){const i=M[w]*16;U.set(Ae.subarray(i,i+16),w*16)}Ee=U}else{let J=0;for(let te=0;te<Z;te++){const se=re[te+1]-re[te];if(se%4!==0)throw new Error(`NAT2 BC7 layer ${te} rows ${se} not 4-aligned`);J+=se/4*xe}if(ne+J>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${J} more bytes from offset ${ne}, have ${o.byteLength-ne}`);Ee=new Uint8Array(o.slice(ne,ne+J))}return{width:k,height:B,channels:O,kernel_type:T,num_rects:D,uv_extent:I,sb_number:L,format:K,sh_bias:V,res_bias:W,compact_mult:H,layer_h:$,atlas_scale:le,atlas_offset:j,n_layers:Z,n_cols:oe,layer_cuts:re,column_cuts:ue,slice_width:Se,rects_expanded:Ie,atlas_bytes:Ee}}const Ol=32;function Fl(o,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let P,g,k,B;if(a.format===2||a.format===In){if(!o.features.has("texture-compression-bc"))return Pt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;B=a.format===In?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:P,view:g,sampler:k}=ei(o,a,"bc7-rgba-unorm",B)}else if(a.format===3||a.format===ts){if(!o.features.has("texture-compression-astc"))return Pt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;B=a.format===ts?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:P,view:g,sampler:k}=ei(o,a,"astc-4x4-unorm",B)}else return Pt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:O}=a,T=o.createBuffer({label:"atlas rects (5-stride)",size:Un(O.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(T,0,O);const D=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return fi(o,D,a,f),{texture:P,view:g,sampler:k,rectsBuffer:T,texParamsBuffer:D,meta:a}}function ei(o,a,f,P){const{width:g,layer_h:k,n_layers:B,n_cols:O,layer_cuts:T,column_cuts:D,slice_width:I,atlas_bytes:L}=a,V=g/4*16,W=o.limits.maxTextureDimension2D;if(k>W||I>W)throw new Error(`⚠️  atlas slice dims ${I}x${k} exceed maxTextureDimension2D=${W}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const H=O*B;if(H>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${O} cols × ${B} layers = ${H} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const $=o.createTexture({label:P,size:{width:I,height:k,depthOrArrayLayers:H},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Z=0;Z<O;Z++){const q=D[Z]/4,oe=(D[Z+1]-D[Z])/4;for(let ne=0;ne<B;ne++){const de=T[ne]/4,re=(T[ne+1]-T[ne])/4,ue=Z*B+ne,Se=de*V+q*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:ue},aspect:"all"},L,{offset:Se,bytesPerRow:V,rowsPerImage:re},{width:oe*4,height:re*4,depthOrArrayLayers:1})}}const le=$.createView({label:`${P} view`,dimension:"2d-array"}),j=o.createSampler({label:`${P} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:$,view:le,sampler:j}}function fi(o,a,f,P){const g=new ArrayBuffer(32),k=new Uint32Array(g),B=new Float32Array(g);k[0]=P?1:0,B[1]=f.atlas_scale,B[2]=f.atlas_offset,B[3]=f.res_bias,o.queue.writeBuffer(a,0,g)}async function zs(o,a){Pt(`loading ply file from File... : ${o.name}`),Os("downloading PLY...");const f=await o.arrayBuffer();try{return await _i(f,a)}finally{Gn()}}async function Nl(o,a){Pt(`loading ply file from URL... : ${o}`),Os("downloading PLY...");try{hi();const f=new URL(o,self.location.href).href;return await _i({url:f},a)}finally{Gn()}}async function _i(o,a){return new Promise((f,P)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=k=>{var O,T,D,I,L,K,V,W,H,$,le,j;const B=k.data;if((B==null?void 0:B.type)==="error"){zl(`PLY worker error: ${B.message??"unknown error"}`),g.terminate(),P(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const Z=B.totalBytes,q=B.loadedBytes/(1024*1024),oe=Z?Z/(1024*1024):void 0,ne=(B.speedBps??0)/(1024*1024),de=Z?Math.min(99,Math.floor(B.loadedBytes/Z*100)):void 0,re=oe?`total ${oe.toFixed(1)} MB`:"total -- MB",ue=oe&&de!==void 0?`${q.toFixed(1)} MB downloaded (${de}%)`:`${q.toFixed(1)} MB downloaded`,Se=`${ne.toFixed(2)} MB/s`;It(`downloading PLY ...
${re}, ${ue}
${Se}`);return}else if((B==null?void 0:B.type)==="fetched"){Pt(`💾 Fetched (${B.byteLength} bytes)`),Jr("Download"),It("parsing PLY..."),hi();return}else if((B==null?void 0:B.type)==="parse_progress"){const Z=B.total??0,q=B.read??0,oe=Z>0?Math.floor(q/Z*100):0;It(`parsing PLY ...
${q}/${Z} surfels (${oe}%)`);return}else if((B==null?void 0:B.type)==="done"){const Z=B.num_points,q=B.K,oe=B.feature_mode??0,ne=B.sh_bias,de=B.kernel_type,re=B.surfelBuffer,ue=B.svParamsBuffer;Pt(`🪐 Total surfels: ${Z}, mode=${oe===1?"SB":"SV"}, K=${q}, sh_bias=${ne}, kernel_type=${de}`);const Ue=a.createBuffer({label:"surfel input buffer",size:Un(Z*Ol),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Ue,0,re);const Le=ue.byteLength>0?ue.byteLength:16,Ie=a.createBuffer({label:oe===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Un(Le),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ue.byteLength>0&&a.queue.writeBuffer(Ie,0,ue),g.terminate(),Jr("Parse"),f({num_points:Z,K:q,feature_mode:oe,sh_bias:ne,kernel_type:de,surfel_buffer:Ue,surfel_data:new Float32Array(re),sv_params_buffer:Ie,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((T=(O=B.bbox)==null?void 0:O.min)==null?void 0:T[0])??-1)+(((I=(D=B.bbox)==null?void 0:D.max)==null?void 0:I[0])??1))/2,((((K=(L=B.bbox)==null?void 0:L.min)==null?void 0:K[1])??-1)+(((W=(V=B.bbox)==null?void 0:V.max)==null?void 0:W[1])??1))/2,(((($=(H=B.bbox)==null?void 0:H.min)==null?void 0:$[2])??-1)+(((j=(le=B.bbox)==null?void 0:le.max)==null?void 0:j[2])??1))/2]})}},g.onerror=k=>{g.terminate(),P(k)},o instanceof ArrayBuffer?(It("parsing PLY..."),g.postMessage({type:"start",plyBuffer:o},[o])):g.postMessage({type:"start_url",url:o.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ls={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(f,P){P(a)})($l,function(f){class P{constructor(e){const[t,s]=e.split("-"),u=t.split(".");this.major=parseInt(u[0],10),this.minor=parseInt(u[1],10),this.patch=parseInt(u[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class B extends k{constructor(e,t,s,u){super(e),this.value=t,this.presetKey=s,this.last=u??!0}}class O extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class D extends k{constructor(e,t){super(e),this.index=t}}function I(n){return n}function L(n){return n==null}function K(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function V(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const W={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class H{static alreadyDisposed(){return new H({type:"alreadydisposed"})}static notBindable(){return new H({type:"notbindable"})}static propertyNotFound(e){return new H({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new H({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=W[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class ${constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!$.isBindable(s))throw H.notBindable();if(!(e in s))throw H.propertyNotFound(e);s[e]=t}}class le extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class j{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(u=>u.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(u=>{u.handler(t)})}}const Z="tp";function q(n){return(t,s)=>[Z,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function oe(n,e){return t=>e(n(t))}function ne(n){return n.rawValue}function de(n,e){n.emitter.on("change",oe(ne,e)),e(n.rawValue)}function re(n,e,t){de(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Se(n,e){return t=>{ue(n,e,t)}}function Ue(n,e){de(n,t=>{e.textContent=t??""})}const Le=q("btn");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Le()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Le("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(Le("t")),Ue(t.props.value("title"),u),this.buttonElement.appendChild(u)}}class Ee{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class me{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(u,S)=>u===S,this.emitter=new j,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,u)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=u,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:u,sender:this}))}}class xe{constructor(e){this.emitter=new j,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},u=this.value_;u===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:u,rawValue:this.value_,sender:this}))}}function J(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new xe(n):new me(n,e)}class te{constructor(e){this.emitter=new j,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,u)=>Object.assign(s,{[u]:J(e[u])}),{})}static fromObject(e){const t=this.createCore(e);return new te(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function se(n,e){const s=Object.keys(e).reduce((u,S)=>{if(u===void 0)return;const z=e[S],ee=z(n[S]);return ee.succeeded?Object.assign(Object.assign({},u),{[S]:ee.value}):void 0},{});return s}function fe(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const u=e(s);if(!(!u.succeeded||u.value===void 0))return[...t,u.value]},[])}function Te(n){return n===null?!1:typeof n=="object"}function Pe(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function ke(n){return{custom:e=>Pe(e)(n),boolean:Pe(e=>typeof e=="boolean"?e:void 0)(n),number:Pe(e=>typeof e=="number"?e:void 0)(n),string:Pe(e=>typeof e=="string"?e:void 0)(n),function:Pe(e=>typeof e=="function"?e:void 0)(n),constant:e=>Pe(t=>t===e?e:void 0)(n),raw:Pe(e=>e)(n),object:e=>Pe(t=>{if(Te(t))return se(t,e)})(n),array:e=>Pe(t=>{if(Array.isArray(t))return fe(t,e)})(n)}}const ve={optional:ke(!0),required:ke(!1)};function Ae(n,e){const t=ve.required.object(e)(n);return t.succeeded?t.value:void 0}function $e(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class U{constructor(e){this.value_=e}static create(e){return[new U(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const w=q("");function i(n,e){return Se(n,w(void 0,e))}class p extends te{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=U.create(J(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,u;const S=e??{};return new p(te.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(u=S.parent)!==null&&u!==void 0?u:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,i(e,"disabled")),re(this,"hidden",i(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const v=q(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(v(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){$e({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function c(n){return n.ontouchstart!==void 0}function h(){return globalThis}function l(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function A(n,e,t){n.insertBefore(e,n.children[t])}function F(n){n.parentElement&&n.parentElement.removeChild(n)}function N(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ie(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Y(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const Q=q("lbl");function _e(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(u=>n.createTextNode(u)).forEach((u,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(u)}),t}class be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Q()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Q("l")),re(t.props,"label",S=>{L(S)?this.element.classList.add(Q(void 0,"nol")):(this.element.classList.remove(Q(void 0,"nol")),ie(s),s.appendChild(_e(e,S)))}),this.element.appendChild(s),this.labelElement=s;const u=e.createElement("div");u.classList.add(Q("v")),this.element.appendChild(u),this.valueElement=u}}class he extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ce={id:"button",type:"blade",accept(n){const e=ve,t=Ae(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new he(n.document,{blade:n.blade,props:te.fromObject({label:n.params.label}),valueController:new Ee(n.document,{props:te.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof he)||!(n.controller.valueController instanceof Ee)?null:new le(n.controller)}};class Me extends C{constructor(e){super(e),this.value=e.value}}function Be(){return new te({positions:J([],{equals:K})})}class qe extends te{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=te.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!L(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};re(this,"expanded",s),re(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function je(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function Xe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),L(n.get("expandedHeight"))){const t=je(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ye extends g{constructor(e,t){super(e),this.rackApi_=t}}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Je{constructor(e){this.emitter=new j,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw H.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const u=this.extract_(e);u&&(u.emitter.on("add",this.onSubListAdd_),u.emitter.on("remove",this.onSubListRemove_),u.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class et extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Fe extends he{constructor(e,t){super(e,t),this.binding=t.binding}}class tt extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new O(this,t,this.controller_.binding.target.presetKey)})}}class He extends he{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof gt?n.apiSet_:n instanceof Ye?n.rackApi_.apiSet_:null}function rt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw H.shouldNeverHappen();return t}function _t(n,e,t){if(!$.isBindable(n))throw H.notBindable();return new $(n,e,t)}class gt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new j,this.apiSet_=new Je(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(u=>{this.setUpApi_(u)})}get children(){return this.controller_.rack.children.map(e=>rt(this.apiSet_,e))}addInput(e,t,s){const u=s??{},S=this.controller_.view.element.ownerDocument,z=this.pool_.createInput(S,_t(e,t,u.presetKey),u),ee=new et(z);return this.add(ee,u.index)}addMonitor(e,t,s){const u=s??{},S=this.controller_.view.element.ownerDocument,z=this.pool_.createMonitor(S,_t(e,t),u),ee=new tt(z);return this.add(ee,u.index)}addFolder(e){return ot(this,e)}addButton(e){return it(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return st(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(u=>u.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),u=this.pool_.createBladeApi(s);return this.add(u,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=rt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Fe){const s=rt(this.apiSet_,t),u=t.binding;this.emitter_.emit("change",{event:new B(s,u.target.read(),u.target.presetKey,e.options.last)})}else if(t instanceof Me){const s=rt(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof He))throw H.shouldNeverHappen();const t=rt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new O(t,s.target.read(),s.target.presetKey)})}}class St extends Ye{constructor(e,t){super(e,new gt(e.rackController,t)),this.emitter_=new j,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Ct extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Mt{constructor(e,t){const s=q(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Et(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.binding===e)return s}return null}function Bt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof He&&s.binding===e)return s}return null}function Wt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Me&&s.value===e)return s}return null}function Tt(n){return n instanceof Ze?n.rack:n instanceof Ct?n.rackController.rack:null}function jt(n){const e=Tt(n);return e?e.bcSet_:null}class Ut{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new j,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Je(jt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),V(e,"parent")?e.parent=this:(e.parent_=this,$e({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){V(e,"parent")?e.parent=null:(e.parent_=null,$e({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Fe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Me)s.value.emitter.on("change",this.onChildValueChange_);else{const u=Tt(s);if(u){const S=u.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Fe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Me)s.value.emitter.off("change",this.onChildValueChange_);else{const u=Tt(s);if(u){const S=u.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(u=>!u.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(u=>{const S=[];u===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),u===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),u.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Et(this.find(Fe),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Bt(this.find(He),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Wt(this.find(Me),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ze extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Mt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Ut({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let u=this.rack.children.length-1;u>=0;u--)this.rack.children[u].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&A(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&F(e.bladeController.view.element)}}const Ht=q("cnt");class an{constructor(e,t){var s;this.className_=q((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Ht()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),re(this.foldable_,"completed",Se(this.element,this.className_(void 0,"cpl")));const u=e.createElement("button");u.classList.add(this.className_("b")),re(t.props,"title",ye=>{L(ye)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const z=e.createElement("div");z.classList.add(this.className_("t")),Ue(t.props.value("title"),z),this.buttonElement.appendChild(z),this.titleElement=z;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const ge=t.containerElement;ge.classList.add(this.className_("c")),this.element.appendChild(ge),this.containerElement=ge}}class X extends Ct{constructor(e,t){var s;const u=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new Ze(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new an(e,{containerElement:S.view.element,foldable:u,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=u,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const pe={id:"folder",type:"blade",accept(n){const e=ve,t=Ae(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new X(n.document,{blade:n.blade,expanded:n.params.expanded,props:te.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof X?new St(n.controller,n.pool):null}};class ae extends Me{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class ze extends g{}const Re=q("spr");class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Re()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Re("r")),this.element.appendChild(s)}}class Ce extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new we(e,{viewProps:t.viewProps})}))}}const Ne={id:"separator",type:"blade",accept(n){const t=Ae(n,{view:ve.required.constant("separator")});return t?{params:t}:null},controller(n){return new Ce(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Ce?new ze(n.controller):null}},We=q("tbi");class at{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(We()),t.viewProps.bindClassModifiers(this.element),re(t.props,"selected",S=>{S?this.element.classList.add(We(void 0,"sel")):this.element.classList.remove(We(void 0,"sel"))});const s=e.createElement("button");s.classList.add(We("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const u=e.createElement("div");u.classList.add(We("t")),Ue(t.props.value("title"),u),this.buttonElement.appendChild(u),this.titleElement=u}}class bt{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new at(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Rn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new bt(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ze(e,{blade:Be(),viewProps:p.create()}),this.props=t.props,re(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class bn{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class gn extends Ye{constructor(e,t){super(e,new gt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new j,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw H.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Rn(t,{itemProps:te.fromObject({selected:!1,title:e.title}),props:te.fromObject({selected:!1})});this.controller_.add(s,e.index);const u=this.pageApiMap_.get(s);if(!u)throw H.shouldNeverHappen();return u}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(u=>u.controller_===e.contentController);if(!t)throw H.shouldNeverHappen();const s=new bn(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw H.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new D(this,e.rawValue)})}}const Vn=-1;class On{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=J(!0),this.selectedIndex=J(Vn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Vn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,u)=>{s.rawValue=u===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Kt=q("tab");class os{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Kt(),Ht()),t.viewProps.bindClassModifiers(this.element),de(t.empty,Se(this.element,Kt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Kt("t")),this.element.appendChild(s),this.itemsElement=s;const u=e.createElement("div");u.classList.add(Kt("i")),this.element.appendChild(u);const S=t.contentsElement;S.classList.add(Kt("c")),this.element.appendChild(S),this.contentsElement=S}}class wn extends Ct{constructor(e,t){const s=new Ze(e,{blade:t.blade,viewProps:t.viewProps}),u=new On;super({blade:t.blade,rackController:s,view:new os(e,{contentsElement:s.view.element,empty:u.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Je(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=u}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;A(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;F(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Fn={id:"tab",type:"blade",accept(n){const e=ve,t=Ae(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new wn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Rn(n.document,{itemProps:te.fromObject({selected:!1,title:t.title}),props:te.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof wn?new gn(n.controller,n.pool):null}};function Nn(n,e){const t=n.accept(e.params);if(!t)return null;const s=ve.optional.boolean(e.params.disabled).value,u=ve.optional.boolean(e.params.hidden).value;return n.controller({blade:Be(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:u}),viewProps:p.create({disabled:s,hidden:u})})}class ft{constructor(){this.disabled=!1,this.emitter=new j}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Yt{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new j,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ln{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new j,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function kt(n,e){for(;n.length<e;)n.push(void 0)}function cn(n){const e=[];return kt(e,n),J(e)}function un(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function as(n,e){const t=[...un(n),e];return t.length>n.length?t.splice(0,t.length-n.length):kt(t,n.length),t}class xn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new j,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=as(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class yn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Dt(n,e){if(n instanceof e)return n;if(n instanceof yn){const t=n.constraints.reduce((s,u)=>s||(u instanceof e?u:null),null);if(t)return t}return null}class dn{constructor(e){this.values=te.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Pn{constructor(e){this.values=te.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(u=>u.value===e).length>0?e:t[0].value}}class Ns{constructor(e){this.values=te.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let u=e;return L(s)||(u=Math.max(u,s)),L(t)||(u=Math.min(u,t)),u}}class $n{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const ls=q("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(ls()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(ls("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const u=e.createElement("div");u.classList.add(ls("m")),u.appendChild(b(e,"dropdown")),this.element.appendChild(u),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,re(this.props_,"options",S=>{N(this.selectElement),S.forEach(z=>{const ee=e.createElement("option");ee.textContent=z.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Sn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const $s=q("pop");class Bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add($s()),t.viewProps.bindClassModifiers(this.element),de(t.shows,Se(this.element,$s(void 0,"v")))}}class qs{constructor(e,t){this.shows=J(!1),this.viewProps=t.viewProps,this.view=new Bi(e,{shows:this.shows,viewProps:this.viewProps})}}const Ws=q("txt");class Ti{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ws()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ws("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class qn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);L(u)||(this.value.rawValue=u),this.view.refresh()}}function Di(n){return String(n)}function js(n){return n==="false"?!1:!!n}function Hs(n){return Di(n)}class Ai{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const zi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Li{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Gi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ii{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Gi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function cs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const u=n[s](e,t);if(u!=="")return u}return""}}function Cn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function En(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ri(n,e){const t=En(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const u=En(n,e);return u===""?"":s+u}function us(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ri(n,e);return s===""?"":t+s}function Ks(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ui(n,e);return e+=s.length,s===""?"":s+En(n,e)}function Vi(n,e){const t=Ks(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const u=En(n,e);return e+=u.length,t+s+u+us(n,e)}function Oi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=En(n,e);return e+=s.length,s===""?"":t+s+us(n,e)}function Fi(n,e){const t=Ks(n,e);return e+=t.length,t===""?"":t+us(n,e)}const Ni=cs([Vi,Oi,Fi]);function $i(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$i(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Wi(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Yi=cs([qi,ji,Ki]),Zi=cs([Yi,Ni]);function Xi(n,e){const t=Zi(n,e);return e+=t.length,t===""?null:{evaluable:new Ai(t),cursor:e}}function Qi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Zs(n,e);if(!s)return null;e=s.cursor,e+=Cn(n,e).length;const u=n.substr(e,1);return e+=u.length,u!==")"?null:{evaluable:s.evaluable,cursor:e}}function Ji(n,e){var t;return(t=Xi(n,e))!==null&&t!==void 0?t:Qi(n,e)}function Ys(n,e){const t=Ji(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const u=Ys(n,e);return u?(e=u.cursor,{cursor:e,evaluable:new Ii(s,u.evaluable)}):null}function eo(n,e,t){t+=Cn(e,t).length;const s=n.filter(u=>e.startsWith(u,t))[0];return s?(t+=s.length,t+=Cn(e,t).length,{cursor:t,operator:s}):null}function to(n,e){return(t,s)=>{const u=n(t,s);if(!u)return null;s=u.cursor;let S=u.evaluable;for(;;){const z=eo(e,t,s);if(!z)break;s=z.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,S=new Li(z.operator,S,ee.evaluable)}return S?{cursor:s,evaluable:S}:null}}const no=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>to(n,e),Ys);function Zs(n,e){return e+=Cn(n,e).length,no(n,e)}function so(n){const e=Zs(n,0);return!e||e.cursor+Cn(n,e.cursor).length!==n.length?null:e.evaluable}function At(n){var e;const t=so(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Xs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=At(n);if(!L(e))return e}return 0}function ro(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const io=pt(0);function Wn(n){return io(n)+"%"}function Qs(n){return String(n)}function ds(n){return n}function kn({primary:n,secondary:e,forward:t,backward:s}){let u=!1;function S(z){u||(u=!0,z(),u=!1)}n.emitter.on("change",z=>{S(()=>{e.setRawValue(t(n,e),z.options)})}),e.emitter.on("change",z=>{S(()=>{n.setRawValue(s(n,e),z.options)}),S(()=>{e.setRawValue(t(n,e),z.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Mn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function zt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function oo(n){return n==="ArrowUp"||n==="ArrowDown"}function Js(n){return oo(n)||n==="ArrowLeft"||n==="ArrowRight"}function ps(n,e){var t,s;const u=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=u&&u.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=u&&u.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class Zt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new j,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ps(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ps(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ps(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,u=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-u.left,y:s.clientY-u.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Qe(n,e,t,s,u){const S=(n-e)/(t-e);return s+S*(u-s)}function er(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function lt(n,e,t){return Math.min(Math.max(n,e),t)}function tr(n,e){return(n%e+e)%e}const wt=q("txt");class ao{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(wt(),wt(void 0,"num")),t.arrayPosition&&this.element.classList.add(wt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(wt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(wt()),this.inputElement.classList.add(wt("i"));const u=e.createElement("div");u.classList.add(wt("k")),this.element.appendChild(u),this.knobElement=u;const S=e.createElementNS(E,"svg");S.classList.add(wt("g")),this.knobElement.appendChild(S);const z=e.createElementNS(E,"path");z.classList.add(wt("gb")),S.appendChild(z),this.guideBodyElem_=z;const ee=e.createElementNS(E,"path");ee.classList.add(wt("gh")),S.appendChild(ee),this.guideHeadElem_=ee;const ge=e.createElement("div");ge.classList.add(q("tt")()),this.knobElement.appendChild(ge),this.tooltipElem_=ge,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(wt(void 0,"drg"));return}this.element.classList.add(wt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),u=lt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+u},0 L${s},4 L${s+u},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Bn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=J(null),this.view=new ao(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const u=new Zt(this.view.knobElement);u.emitter.on("down",this.onPointerDown_),u.emitter.on("move",this.onPointerMove_),u.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const u=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let z=e;return u!==void 0&&(z=Math.max(z,u)),S!==void 0&&(z=Math.min(z,S)),z}onInputChange_(e){const s=e.currentTarget.value,u=this.parser_(s);L(u)||(this.value.rawValue=this.constrainValue_(u)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,Mn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,Mn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const hs=q("sld");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(hs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(hs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const u=e.createElement("div");u.classList.add(hs("k")),this.trackElement.appendChild(u),this.knobElement=u,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=lt(Qe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Zt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Qe(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,zt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fs=q("sldtxt");class uo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fs());const s=e.createElement("div");s.classList.add(fs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(fs("t")),this.textView_=t.textView,u.appendChild(this.textView_.element),this.element.appendChild(u)}}class _s{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Bn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new uo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Tn(n,e){n.write(e)}function jn(n){const e=ve;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function nr(n){if(n==="inline"||n==="popup")return n}function Rt(n){const e=ve;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function sr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ms(n){return L(n)?null:new Pn(sr(n))}function po(n){const e=n?Dt(n,$n):null;return e?e.step:null}function Hn(n,e){const t=n&&Dt(n,$n);return t?er(t.step):Math.max(er(e),2)}function pn(n){const e=po(n);return e??1}function hn(n,e){var t;const s=n&&Dt(n,$n),u=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return u===0?.1:Math.pow(10,Math.floor(Math.log10(u))-1)}const Kn=q("ckb");class ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Kn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Kn("l")),this.element.appendChild(s);const u=e.createElement("input");u.classList.add(Kn("i")),u.type="checkbox",s.appendChild(u),this.inputElement=u,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Kn("w")),s.appendChild(S);const z=b(e,"check");S.appendChild(z),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function _o(n){const e=[],t=ms(n.options);return t&&e.push(t),new yn(e)}const mo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ae(e,{options:ve.optional.custom(jn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>js,constraint:n=>_o(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&Dt(s,Pn);return u?new Sn(e,{props:new te({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new fo(e,{value:t,viewProps:n.viewProps})}},Xt=q("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Xt()),t.foldable.bindExpandedClass(this.element,Xt(void 0,"expanded")),re(t.foldable,"completed",Se(this.element,Xt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Xt("h")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Xt("s")),s.appendChild(u),this.swatchElement=u;const S=e.createElement("div");if(S.classList.add(Xt("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const z=e.createElement("div");z.classList.add(Xt("p")),this.element.appendChild(z),this.pickerElement=z}else this.pickerElement=null}}function bo(n,e,t){const s=lt(n/255,0,1),u=lt(e/255,0,1),S=lt(t/255,0,1),z=Math.max(s,u,S),ee=Math.min(s,u,S),ge=z-ee;let ye=0,Ve=0;const Oe=(ee+z)/2;return ge!==0&&(Ve=ge/(1-Math.abs(z+ee-1)),s===z?ye=(u-S)/ge:u===z?ye=2+(S-s)/ge:ye=4+(s-u)/ge,ye=ye/6+(ye<0?1:0)),[ye*360,Ve*100,Oe*100]}function go(n,e,t){const s=(n%360+360)%360,u=lt(e/100,0,1),S=lt(t/100,0,1),z=(1-Math.abs(2*S-1))*u,ee=z*(1-Math.abs(s/60%2-1)),ge=S-z/2;let ye,Ve,Oe;return s>=0&&s<60?[ye,Ve,Oe]=[z,ee,0]:s>=60&&s<120?[ye,Ve,Oe]=[ee,z,0]:s>=120&&s<180?[ye,Ve,Oe]=[0,z,ee]:s>=180&&s<240?[ye,Ve,Oe]=[0,ee,z]:s>=240&&s<300?[ye,Ve,Oe]=[ee,0,z]:[ye,Ve,Oe]=[z,0,ee],[(ye+ge)*255,(Ve+ge)*255,(Oe+ge)*255]}function wo(n,e,t){const s=lt(n/255,0,1),u=lt(e/255,0,1),S=lt(t/255,0,1),z=Math.max(s,u,S),ee=Math.min(s,u,S),ge=z-ee;let ye;ge===0?ye=0:z===s?ye=60*(((u-S)/ge%6+6)%6):z===u?ye=60*((S-s)/ge+2):ye=60*((s-u)/ge+4);const Ve=z===0?0:ge/z,Oe=z;return[ye,Ve*100,Oe*100]}function rr(n,e,t){const s=tr(n,360),u=lt(e/100,0,1),S=lt(t/100,0,1),z=S*u,ee=z*(1-Math.abs(s/60%2-1)),ge=S-z;let ye,Ve,Oe;return s>=0&&s<60?[ye,Ve,Oe]=[z,ee,0]:s>=60&&s<120?[ye,Ve,Oe]=[ee,z,0]:s>=120&&s<180?[ye,Ve,Oe]=[0,z,ee]:s>=180&&s<240?[ye,Ve,Oe]=[0,ee,z]:s>=240&&s<300?[ye,Ve,Oe]=[ee,0,z]:[ye,Ve,Oe]=[z,0,ee],[(ye+ge)*255,(Ve+ge)*255,(Oe+ge)*255]}function xo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Qt(n){return[n[0],n[1],n[2]]}function ir(n,e){return[n[0],n[1],n[2],e]}const Po={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:xo,rgb:go},hsv:{hsl:yo,hsv:(n,e,t)=>[n,e,t],rgb:rr},rgb:{hsl:bo,hsv:wo,rgb:(n,e,t)=>[n,e,t]}};function Yn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function So(n,e){return n===e?e:tr(n,e)}function Co(n,e,t){var s;const u=Yn(e,t);return[e==="rgb"?lt(n[0],0,u[0]):So(n[0],u[0]),lt(n[1],0,u[1]),lt(n[2],0,u[2]),lt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function or(n,e,t,s){const u=Yn(e,t),S=Yn(e,s);return n.map((z,ee)=>z/u[ee]*S[ee])}function Eo(n,e,t){const s=or(n,e.mode,e.type,"int"),u=Po[e.mode][t.mode](...s);return or(u,t.mode,"int",t.type)}function Zn(n,e){return typeof n!="object"||L(n)?!1:e in n&&typeof n[e]=="number"}class Ge{static black(e="int"){return new Ge([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ge(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Zn(e,"r")&&Zn(e,"g")&&Zn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Zn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,u=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==u[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Co(e,t,s)}getComponents(e,t="int"){return ir(Eo(Qt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Vt=q("colp");class ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Vt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Vt("hsv"));const u=e.createElement("div");u.classList.add(Vt("sv")),this.svPaletteView_=t.svPaletteView,u.appendChild(this.svPaletteView_.element),s.appendChild(u);const S=e.createElement("div");S.classList.add(Vt("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const z=e.createElement("div");if(z.classList.add(Vt("rgb")),this.textView_=t.textView,z.appendChild(this.textView_.element),this.element.appendChild(z),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Vt("a"));const ge=e.createElement("div");ge.classList.add(Vt("ap")),ge.appendChild(this.alphaViews_.palette.element),ee.appendChild(ge);const ye=e.createElement("div");ye.classList.add(Vt("at")),ye.appendChild(this.alphaViews_.text.element),ee.appendChild(ye),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function vs(n){const e=ve;return Ae(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(nr)})}function Jt(n){return n?.1:1}function en(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Bo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function xt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const To={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function ar(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return To[s](t)}function lr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[xt(e[1],255),xt(e[2],255),xt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function cr(n){return e=>{const t=lr(e);return t?new Ge(t,"rgb",n):null}}function ur(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[xt(e[1],255),xt(e[2],255),xt(e[3],255),xt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ge(t,"rgb",n):null}}function pr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ar(e[1]),xt(e[2],100),xt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ge(t,"hsl",n):null}}function fr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ar(e[1]),xt(e[2],100),xt(e[3],100),xt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ge(t,"hsl",n):null}}function mr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=mr(n);return e?new Ge(e,"rgb","int"):null}function vr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Qe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Qe(parseInt(t[4],16),0,255,0,1)]:null}function Ao(n){const e=vr(n);return e?new Ge(e,"rgb","int"):null}function br(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function gr(n){return e=>{const t=br(e);return t?new Ge(t,"rgb",n):null}}function wr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Ge(t,"rgb",n):null}}const zo=[{parser:mr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:vr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:lr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ur,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:pr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:wr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Lo(n){return zo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function bs(n,e="int"){const t=Lo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const yr={int:[Do,Ao,cr("int"),dr("int"),hr("int"),_r("int"),gr("int"),xr("int")],float:[cr("float"),dr("float"),hr("float"),_r("float"),gr("float"),xr("float")]};function Go(n){const e=yr[n];return t=>{if(typeof t!="string")return Ge.black(n);const s=e.reduce((u,S)=>u||S(t),null);return s??Ge.black(n)}}function gs(n){const e=yr[n];return t=>e.reduce((s,u)=>s||u(t),null)}function Pr(n){const e=lt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Sr(n,e="#"){const t=Qt(n.getComponents("rgb")).map(Pr).join("");return`${e}${t}`}function ws(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Pr).join("");return`${e}${s}`}function Cr(n,e){const t=pt(e==="float"?2:0);return`rgb(${Qt(n.getComponents("rgb",e)).map(u=>t(u)).join(", ")})`}function Io(n){return e=>Cr(e,n)}function Xn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,z)=>(z===3?t:s)(S)).join(", ")})`}function Uo(n){return e=>Xn(e,n)}function Ro(n){const e=[pt(0),Wn,Wn];return`hsl(${Qt(n.getComponents("hsl")).map((s,u)=>e[u](s)).join(", ")})`}function Vo(n){const e=[pt(0),Wn,Wn,pt(2)];return`hsla(${n.getComponents("hsl").map((s,u)=>e[u](s)).join(", ")})`}function Er(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${Qt(n.getComponents("rgb",e)).map((S,z)=>`${s[z]}: ${t(S)}`).join(", ")}}`}function Oo(n){return e=>Er(e,n)}function kr(n,e){const t=pt(2),s=pt(e==="float"?2:0),u=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((z,ee)=>{const ge=ee===3?t:s;return`${u[ee]}: ${ge(z)}`}).join(", ")}}`}function Fo(n){return e=>kr(e,n)}const No=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Sr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ws},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ro},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Io(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)}],[])];function xs(n){return No.reduce((e,t)=>e||(Bo(t.format,n)?t.stringifier:null),null)}const Dn=q("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Dn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Dn("b")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Dn("c")),s.appendChild(u),this.colorElem_=u;const S=e.createElement("div");S.classList.add(Dn("m")),this.element.appendChild(S),this.markerElem_=S;const z=e.createElement("div");z.classList.add(Dn("p")),this.markerElem_.appendChild(z),this.previewElem_=z,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ge([t[0],t[1],t[2],0],"rgb"),u=new Ge([t[0],t[1],t[2],255],"rgb"),S=["to right",Xn(s),Xn(u)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=Xn(e);const z=Qe(t[3],0,1,0,100);this.markerElem_.style.left=`${z}%`}onValueChange_(){this.update_()}}class qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Zt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,u=this.value.rawValue,[S,z,ee]=u.getComponents("hsv");this.value.setRawValue(new Ge([S,z,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Jt(!0),zt(e));if(t===0)return;const s=this.value.rawValue,[u,S,z,ee]=s.getComponents("hsv");this.value.setRawValue(new Ge([u,S,z,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Jt(!0),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fn=q("coltxt");function Wo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,u)=>{const S=n.createElement("option");return S.textContent=u.text,S.value=u.value,s.appendChild(S),s},n.createDocumentFragment())),e}class jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(fn("m")),this.modeElem_=Wo(e),this.modeElem_.classList.add(fn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const u=e.createElement("div");u.classList.add(fn("mm")),u.appendChild(b(e,"dropdown")),s.appendChild(u),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(fn("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,z=>{this.modeElem_.value=z})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){N(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(fn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return pt(n==="float"?2:0)}function Ko(n,e,t){const s=Yn(n,e)[t];return new dn({min:0,max:s})}function ys(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Jt(!1),parser:e.parser,props:te.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:J(0,{constraint:Ko(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Yo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=J(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new jo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ys(e,t,0),ys(e,t,1),ys(e,t,2)];return s.forEach((u,S)=>{kn({primary:this.value,secondary:u.value,forward:z=>z.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(z,ee)=>{const ge=this.colorMode.rawValue,ye=z.rawValue.getComponents(ge,this.colorType_);return ye[S]=ee.rawValue,new Ge(ir(Qt(ye),ye[3]),ge,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ps=q("hpl");class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ps()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ps("c")),this.element.appendChild(s);const u=e.createElement("div");u.classList.add(Ps("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Cr(new Ge([t,100,100],"hsv"));const s=Qe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Zt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Qe(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),u=this.value.rawValue,[,S,z,ee]=u.getComponents("hsv");this.value.setRawValue(new Ge([s,S,z,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Jt(!1),zt(e));if(t===0)return;const s=this.value.rawValue,[u,S,z,ee]=s.getComponents("hsv");this.value.setRawValue(new Ge([u+t,S,z,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Jt(!1),zt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ss=q("svp"),Mr=64;class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ss()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Mr,s.width=Mr,s.classList.add(Ss("c")),this.element.appendChild(s),this.canvasElement=s;const u=e.createElement("div");u.classList.add(Ss("m")),this.element.appendChild(u),this.markerElem_=u,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),u=this.canvasElement.width,S=this.canvasElement.height,z=e.getImageData(0,0,u,S),ee=z.data;for(let Ve=0;Ve<S;Ve++)for(let Oe=0;Oe<u;Oe++){const tn=Qe(Oe,0,u,0,100),zn=Qe(Ve,0,S,100,0),Ln=rr(s[0],tn,zn),Qn=(Ve*u+Oe)*4;ee[Qn]=Ln[0],ee[Qn+1]=Ln[1],ee[Qn+2]=Ln[2],ee[Qn+3]=255}e.putImageData(z,0,0);const ge=Qe(s[1],0,100,0,100);this.markerElem_.style.left=`${ge}%`;const ye=Qe(s[2],0,100,100,0);this.markerElem_.style.top=`${ye}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Zt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Qe(e.point.x,0,e.bounds.width,0,100),u=Qe(e.point.y,0,e.bounds.height,100,0),[S,,,z]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ge([S,s,u,z],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Js(e.key)&&e.preventDefault();const[t,s,u,S]=this.value.rawValue.getComponents("hsv"),z=Jt(!1),ee=mt(z,zt(e)),ge=mt(z,Mn(e));ee===0&&ge===0||this.value.setRawValue(new Ge([t,s+ee,u+ge,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Jt(!1),s=mt(t,zt(e)),u=mt(t,Mn(e));s===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new qo(e,{value:this.value,viewProps:this.viewProps}),text:new Bn(e,{parser:At,baseStep:.1,props:te.fromObject({draggingScale:.01,formatter:pt(2)}),value:J(0,{constraint:new dn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&kn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,u)=>{const S=s.rawValue.getComponents();return S[3]=u.rawValue,new Ge(S,s.rawValue.mode)}}),this.textC_=new Yo(e,{colorType:t.colorType,parser:At,value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Cs=q("colsw");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Cs("sw")),this.element.appendChild(s),this.swatchElem_=s;const u=e.createElement("button");u.classList.add(Cs("b")),t.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ws(e)}onValueChange_(){this.update_()}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps})}}class Es{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new na(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new qn(e,{parser:t.parser,props:te.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new qs(e,{viewProps:this.viewProps}):null;const u=new ea(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});u.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=u,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(u.view.element),kn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,z)=>z.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Y(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sa(n,e){return Ge.isColorObject(n)?Ge.fromObject(n,e):Ge.black(e)}function ra(n){return Qt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ia(n){return n.getComponents("rgb").reduce((e,t,s)=>{const u=Math.floor(s===3?t*255:t)&255;return e<<8|u},0)>>>0}function oa(n){return new Ge([n>>16&255,n>>8&255,n&255],"rgb")}function aa(n){return new Ge([n>>24&255,n>>16&255,n>>8&255,Qe(n&255,0,255,0,1)],"rgb")}function la(n){return typeof n!="number"?Ge.black():oa(n)}function ca(n){return typeof n!="number"?Ge.black():aa(n)}function ua(n){const e=xs(n);return e?(t,s)=>{Tn(t,e(s))}:null}function da(n){const e=n?ia:ra;return(t,s)=>{Tn(t,e(s))}}function pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function fa(n,e){return(t,s)=>{n?pa(t,s,e):ha(t,s,e)}}function ks(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function _a(n){return n?e=>ws(e,"0x"):e=>Sr(e,"0x")}function ma(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ma(e))return null;const t=vs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ks(n.params)?ca:la,equals:Ge.equals,writer:n=>da(ks(n.params))},controller:n=>{const e=ks(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Es(n.document,{colorType:"int",expanded:t??!1,formatter:_a(e),parser:gs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ba(n){return Ge.isRgbaColorObject(n)}function ga(n){return e=>sa(e,n)}function wa(n,e){return t=>n?kr(t,e):Er(t,e)}const xa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ge.isColorObject(n))return null;const t=vs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ga(en(n.params)),equals:Ge.equals,writer:n=>fa(ba(n.initialValue),en(n.params))},controller:n=>{var e;const t=Ge.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0,S=(e=en(n.params))!==null&&e!==void 0?e:"int";return new Es(n.document,{colorType:S,expanded:s??!1,formatter:wa(t,S),parser:gs(S),pickerLayout:u??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=bs(n,en(e));if(!t||!xs(t))return null;const u=vs(e);return u?{initialValue:n,params:u}:null},binding:{reader:n=>{var e;return Go((e=en(n.params))!==null&&e!==void 0?e:"int")},equals:Ge.equals,writer:n=>{const e=bs(n.initialValue,en(n.params));if(!e)throw H.shouldNeverHappen();const t=ua(e);if(!t)throw H.notBindable();return t}},controller:n=>{const e=bs(n.initialValue,en(n.params));if(!e)throw H.shouldNeverHappen();const t=xs(e);if(!t)throw H.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,u="picker"in n.params?n.params.picker:void 0;return new Es(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:gs(e.type),pickerLayout:u??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Ot{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,u)=>{var S,z;return(z=(S=this.components[u])===null||S===void 0?void 0:S.constrain(s))!==null&&z!==void 0?z:s});return this.asm_.fromComponents(t)}}const Br=q("pndtxt");class Pa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Br()),this.textViews.forEach(s=>{const u=e.createElement("div");u.classList.add(Br("a")),u.appendChild(s.element),this.element.appendChild(u)})}}function Sa(n,e,t){return new Bn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:J(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ms{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,u)=>Sa(e,t,u)),this.acs_.forEach((s,u)=>{kn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[u],backward:(S,z)=>{const ee=t.assembly.toComponents(S.rawValue);return ee[u]=z.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Pa(e,{textViews:this.acs_.map(s=>s.view)})}}function Tr(n,e){return"step"in n&&!L(n.step)?new $n(n.step,e):null}function Dr(n){return!L(n.max)&&!L(n.min)?new dn({max:n.max,min:n.min}):!L(n.max)||!L(n.min)?new Ns({max:n.max,min:n.min}):null}function Ca(n){const e=Dt(n,dn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Dt(n,Ns);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ea(n,e){const t=[],s=Tr(n,e);s&&t.push(s);const u=Dr(n);u&&t.push(u);const S=ms(n.options);return S&&t.push(S),new yn(t)}const ka={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=Ae(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(jn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Xs,constraint:n=>Ea(n.params,n.initialValue),writer:n=>Tn},controller:n=>{var e;const t=n.value,s=n.constraint,u=s&&Dt(s,Pn);if(u)return new Sn(n.document,{props:new te({options:u.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(Hn(s,t.rawValue)),z=s&&Dt(s,dn);return z?new _s(n.document,{baseStep:pn(s),parser:At,sliderProps:new te({maxValue:z.values.value("max"),minValue:z.values.value("min")}),textProps:te.fromObject({draggingScale:hn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new Bn(n.document,{baseStep:pn(s),parser:At,props:te.fromObject({draggingScale:hn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Ft{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(L(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Ar={toComponents:n=>n.getComponents(),fromComponents:n=>new Ft(...n)},_n=q("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,Se(this.element,_n(void 0,"expanded")));const s=e.createElement("div");s.classList.add(_n("h")),this.element.appendChild(s);const u=e.createElement("button");u.classList.add(_n("b")),u.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(u),s.appendChild(u),this.buttonElement=u;const S=e.createElement("div");if(S.classList.add(_n("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const z=e.createElement("div");z.classList.add(_n("p")),this.element.appendChild(z),this.pickerElement=z}else this.pickerElement=null}}const Nt=q("p2dp");class Ba{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.layout==="popup"&&this.element.classList.add(Nt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const u=e.createElementNS(E,"svg");u.classList.add(Nt("g")),this.padElement.appendChild(u),this.svgElem_=u;const S=e.createElementNS(E,"line");S.classList.add(Nt("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const z=e.createElementNS(E,"line");z.classList.add(Nt("ax")),z.setAttributeNS(null,"x1","50%"),z.setAttributeNS(null,"y1","0"),z.setAttributeNS(null,"x2","50%"),z.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(z);const ee=e.createElementNS(E,"line");ee.classList.add(Nt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const ge=e.createElement("div");ge.classList.add(Nt("m")),this.padElement.appendChild(ge),this.markerElem_=ge,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,u=Qe(e,-s,+s,0,100),S=Qe(t,-s,+s,0,100),z=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${u}%`),this.lineElem_.setAttributeNS(null,"y2",`${z}%`),this.markerElem_.style.left=`${u}%`,this.markerElem_.style.top=`${z}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function zr(n,e,t){return[mt(e[0],zt(n)),mt(e[1],Mn(n))*(t?1:-1)]}class Ta{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ba(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Zt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,u=Qe(e.point.x,0,e.bounds.width,-s,+s),S=Qe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Ft(u,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Js(e.key)&&e.preventDefault();const[t,s]=zr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Ft(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=zr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,u;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new qs(e,{viewProps:this.viewProps}):null;const S=new Ta(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(z=>{z.addEventListener("blur",this.onPopupChildBlur_),z.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new Ms(e,{assembly:Ar,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),kn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:z=>z.rawValue,backward:(z,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Y(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!c(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class mn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(L(e))return!1;const t=e.x,s=e.y,u=e.z;return!(typeof t!="number"||typeof s!="number"||typeof u!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Lr={toComponents:n=>n.getComponents(),fromComponents:n=>new mn(...n)};function Aa(n){return mn.isObject(n)?new mn(n.x,n.y,n.z):new mn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function La(n,e){return new Ot({assembly:Lr,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y),Lt("z"in n?n.z:void 0,e.z)]})}function Bs(n,e){return{baseStep:pn(e),constraint:e,textProps:te.fromObject({draggingScale:hn(e,n),formatter:pt(Hn(e,n))})}}const Ga={id:"input-point3d",type:"input",accept:(n,e)=>{if(!mn.isObject(n))return null;const t=ve,s=Ae(e,{x:t.optional.custom(Rt),y:t.optional.custom(Rt),z:t.optional.custom(Rt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>La(n.params,n.initialValue),equals:mn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ot))throw H.shouldNeverHappen();return new Ms(n.document,{assembly:Lr,axes:[Bs(e.rawValue.x,t.components[0]),Bs(e.rawValue.y,t.components[1]),Bs(e.rawValue.z,t.components[2])],parser:At,value:e,viewProps:n.viewProps})}};class vn{constructor(e=0,t=0,s=0,u=0){this.x=e,this.y=t,this.z=s,this.w=u}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(L(e))return!1;const t=e.x,s=e.y,u=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof u!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Gr={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function Ia(n){return vn.isObject(n)?new vn(n.x,n.y,n.z,n.w):new vn}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ra(n,e){return new Ot({assembly:Gr,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y),Lt("z"in n?n.z:void 0,e.z),Lt("w"in n?n.w:void 0,e.w)]})}function Va(n,e){return{baseStep:pn(e),constraint:e,textProps:te.fromObject({draggingScale:hn(e,n),formatter:pt(Hn(e,n))})}}const Oa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=ve,s=Ae(e,{x:t.optional.custom(Rt),y:t.optional.custom(Rt),z:t.optional.custom(Rt),w:t.optional.custom(Rt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>Ra(n.params,n.initialValue),equals:vn.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ot))throw H.shouldNeverHappen();return new Ms(n.document,{assembly:Gr,axes:e.rawValue.getComponents().map((s,u)=>Va(s,t.components[u])),parser:At,value:e,viewProps:n.viewProps})}};function Fa(n){const e=[],t=ms(n.options);return t&&e.push(t),new yn(e)}const Na={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Ae(e,{options:ve.optional.custom(jn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Qs,constraint:n=>Fa(n.params),writer:n=>Tn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,u=s&&Dt(s,Pn);return u?new Sn(e,{props:new te({options:u.values.value("options")}),value:t,viewProps:n.viewProps}):new qn(e,{parser:S=>S,props:te.fromObject({formatter:ds}),value:t,viewProps:n.viewProps})}},An={monitor:{defaultInterval:200,defaultLineCount:3}},Ir=q("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ir()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Ir("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(u=>{u!==void 0&&s.push(this.formatter_(u))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ts{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Ur=q("sgl");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ur()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Ur("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ds{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Wa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ae(e,{lineCount:ve.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>js},controller:n=>{var e;return n.value.rawValue.length===1?new Ds(n.document,{formatter:Hs,value:n.value,viewProps:n.viewProps}):new Ts(n.document,{formatter:Hs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},$t=q("grl");class ja{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add($t()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add($t("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const u=e.createElementNS(E,"polyline");this.svgElem_.appendChild(u),this.lineElem_=u;const S=e.createElement("div");S.classList.add($t("t"),q("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),u=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Ve,Oe)=>{if(Ve===void 0)return;const tn=Qe(Oe,0,t,0,e.width),zn=Qe(Ve,s,u,e.height,0);S.push([tn,zn].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const z=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){z.classList.remove($t("t","a"));return}const ge=Qe(this.cursor_.rawValue,0,t,0,e.width),ye=Qe(ee,s,u,e.height,0);z.style.left=`${ge}px`,z.style.top=`${ye}px`,z.textContent=`${this.formatter_(ee)}`,z.classList.contains($t("t","a"))||(z.classList.add($t("t","a"),$t("t","in")),r(z),z.classList.remove($t("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=J(-1),this.view=new ja(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!c(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Zt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Qe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Qe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function As(n){return"format"in n&&!L(n.format)?n.format:pt(2)}function Ka(n){var e;return n.value.rawValue.length===1?new Ds(n.document,{formatter:As(n.params),value:n.value,viewProps:n.viewProps}):new Ts(n.document,{formatter:As(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ya(n){var e,t,s;return new Ha(n.document,{formatter:As(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,props:te.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Rr(n){return"view"in n&&n.view==="graph"}const Za={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=Ae(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Rr(n)?64:1,reader:n=>Xs},controller:n=>Rr(n.params)?Ya(n):Ka(n)},Xa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ve,s=Ae(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Qs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ts(n.document,{formatter:ds,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ds(n.document,{formatter:ds,value:t,viewProps:n.viewProps})}};function Qa(n,e){var t;const s=n.accept(e.target.read(),e.params);if(L(s))return null;const u=ve,S={target:e.target,initialValue:s.initialValue,params:s.params},z=n.binding.reader(S),ee=n.binding.constraint?n.binding.constraint(S):void 0,ge=J(z(s.initialValue),{constraint:ee,equals:n.binding.equals}),ye=new ln({reader:z,target:e.target,value:ge,writer:n.binding.writer(S)}),Ve=u.optional.boolean(e.params.disabled).value,Oe=u.optional.boolean(e.params.hidden).value,tn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:ye.value,viewProps:p.create({disabled:Ve,hidden:Oe})});return new Fe(e.document,{binding:ye,blade:Be(),props:te.fromObject({label:"label"in e.params?(t=u.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:tn})}function Ja(n,e){return e===0?new ft:new Yt(n,e??An.monitor.defaultInterval)}function el(n,e){var t,s,u;const S=ve,z=n.accept(e.target.read(),e.params);if(L(z))return null;const ee={target:e.target,initialValue:z.initialValue,params:z.params},ge=n.binding.reader(ee),ye=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(z.params))!==null&&s!==void 0?s:1,Ve=S.optional.number(e.params.interval).value,Oe=new xn({reader:ge,target:e.target,ticker:Ja(e.document,Ve),value:cn(ye)}),tn=S.optional.boolean(e.params.disabled).value,zn=S.optional.boolean(e.params.hidden).value,Ln=n.controller({document:e.document,params:z.params,value:Oe.value,viewProps:p.create({disabled:tn,hidden:zn})});return new He(e.document,{binding:Oe,blade:Be(),props:te.fromObject({label:"label"in e.params?(u=S.optional.string(e.params.label).value)!==null&&u!==void 0?u:null:e.target.key}),valueController:Ln})}class tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const u=t.read();if(L(u))throw new H({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((z,ee)=>z??Qa(ee,{document:e,target:t,params:s}),null);if(S)return S;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const u=this.pluginsMap_.monitors.reduce((S,z)=>S??el(z,{document:e,params:s,target:t}),null);if(u)return u;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((u,S)=>u??Nn(S,{document:e,params:t}),null);if(!s)throw new H({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Fe)return new et(e);if(e instanceof He)return new tt(e);if(e instanceof Ze)return new gt(e,this);const t=this.pluginsMap_.blades.reduce((s,u)=>s??u.api({controller:e,pool:this}),null);if(!t)throw H.shouldNeverHappen();return t}}function nl(){const n=new tl;return[ll,Ga,Oa,Na,ka,ya,xa,va,mo,Wa,Xa,Za,ce,pe,Ne,Fn].forEach(e=>{n.register(e)}),n}function sl(n){return Ft.isObject(n)?new Ft(n.x,n.y):new Ft}function rl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Lt(n,e){if(!n)return;const t=[],s=Tr(n,e);s&&t.push(s);const u=Dr(n);return u&&t.push(u),new yn(t)}function il(n,e){return new Ot({assembly:Ar,components:[Lt("x"in n?n.x:void 0,e.x),Lt("y"in n?n.y:void 0,e.y)]})}function Vr(n,e){const[t,s]=n?Ca(n):[];if(!L(t)||!L(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const u=pn(n);return Math.max(Math.abs(u)*10,Math.abs(e)*10)}function ol(n,e){const t=e instanceof Ot?e.components[0]:void 0,s=e instanceof Ot?e.components[1]:void 0,u=Vr(t,n.x),S=Vr(s,n.y);return Math.max(u,S)}function Or(n,e){return{baseStep:pn(e),constraint:e,textProps:te.fromObject({draggingScale:hn(e,n),formatter:pt(Hn(e,n))})}}function al(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ll={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Ft.isObject(n))return null;const t=ve,s=Ae(e,{expanded:t.optional.boolean,picker:t.optional.custom(nr),x:t.optional.custom(Rt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sl,constraint:n=>il(n.params,n.initialValue),equals:Ft.equals,writer:n=>rl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Ot))throw H.shouldNeverHappen();const u="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[Or(t.rawValue.x,s.components[0]),Or(t.rawValue.y,s.components[1])],expanded:u??!1,invertsY:al(n.params),maxValue:ol(t.rawValue,s),parser:At,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class Fr extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class Nr extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}class $r extends g{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,u=>{s(u.event)}),this}}const cl=function(){return{id:"list",type:"blade",accept(n){const e=ve,t=Ae(n,{options:e.required.custom(jn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Pn(sr(n.params.options)),t=J(n.params.value,{constraint:e}),s=new Sn(n.document,{props:new te({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new ae(n.document,{blade:n.blade,props:te.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof ae)||!(n.controller.valueController instanceof Sn)?null:new Fr(n.controller)}}}();function ul(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function dl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class pl extends St{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Fe).map(s=>s.binding);dl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Fe).map(t=>t.binding.target);return ul(e)}refresh(){this.controller_.rackController.rack.find(Fe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()})}}class hl extends X{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const fl={id:"slider",type:"blade",accept(n){const e=ve,t=Ae(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,u=new dn({max:n.params.max,min:n.params.min}),S=new _s(n.document,{baseStep:1,parser:At,sliderProps:new te({maxValue:u.values.value("max"),minValue:u.values.value("min")}),textProps:te.fromObject({draggingScale:hn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ro}),value:J(s,{constraint:u}),viewProps:n.viewProps});return new ae(n.document,{blade:n.blade,props:te.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof ae)||!(n.controller.valueController instanceof _s)?null:new Nr(n.controller)}},_l=function(){return{id:"text",type:"blade",accept(n){const e=ve,t=Ae(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new qn(n.document,{parser:n.params.parse,props:te.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:J(n.params.value),viewProps:n.viewProps});return new ae(n.document,{blade:n.blade,props:te.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof ae)||!(n.controller.valueController instanceof qn)?null:new $r(n.controller)}}}();function ml(n){const e=n.createElement("div");return e.classList.add(q("dfw")()),n.body&&n.body.appendChild(e),e}function qr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends pl{constructor(e){var t,s;const u=e??{},S=(t=u.document)!==null&&t!==void 0?t:l(),z=nl(),ee=new hl(S,{expanded:u.expanded,blade:Be(),props:te.fromObject({title:u.title}),viewProps:p.create()});super(ee,z),this.pool_=z,this.containerElem_=(s=u.container)!==null&&s!==void 0?s:ml(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!u.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw H.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw H.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&qr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){qr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[fl,cl,Fn,_l]})}}const bl=new P("3.1.10");f.BladeApi=g,f.ButtonApi=le,f.FolderApi=St,f.InputBindingApi=et,f.ListApi=Fr,f.MonitorBindingApi=tt,f.Pane=vl,f.SeparatorApi=ze,f.SliderApi=Nr,f.TabApi=gn,f.TabPageApi=bn,f.TextApi=$r,f.TpChangeEvent=B,f.VERSION=bl,Object.defineProperty(f,"__esModule",{value:!0})})})(Ls,Ls.exports);var ql=Ls.exports;const Wl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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

@fragment
fn fs_tail(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    let p = vec2<i32>(floor(in.position.xy));
    let zc = ht_inv_depth(textureLoad(ht_core_depth, p, 0));
    let rel = max(0.0, (sh.zv - zc) / max(zc, 1e-3));
    let w = exp(-min(20.0, ht_params.tail_k * rel));
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a * w, sh.a * w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    out.depth = ht_depth(sh.zv);
    return out;
}
`,Hl=`// Hybrid-transparency composite (HTGS Eq. 17, K=1 hardware form).
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

    let tail_a = clamp(1.0 - T, 0.0, 1.0);
    var tail_rgb = vec3<f32>(0.0);
    if acc.a > 1e-4 {
        tail_rgb = acc.rgb / acc.a;
    }

    let rgb = core.rgb + (1.0 - core.a) * tail_rgb * tail_a;
    let a   = core.a   + (1.0 - core.a) * tail_a;
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
`,Kl=`const WG_SIZE = 256u;
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
}`,mi=32,Gs=1,Is=2,ti=4,Us=8,vi=4,tc=7<<vi,ni=128,si=256,nc=0,qt=new ArrayBuffer(mi),ct={canvas_size:new Uint32Array(qt,0,2),accel_flags:new Uint32Array(qt,8,1),feature_mode:new Uint32Array(qt,12,1),gaussian_scaling:new Float32Array(qt,16,1),sh_bias:new Float32Array(qt,20,1),color_K:new Uint32Array(qt,24,1),walltime:new Float32Array(qt,28,1)};function sc(o){ct.canvas_size[0]=o.width>>>0,ct.canvas_size[1]=o.height>>>0,ct.accel_flags[0]=(o.accel_flags??Gs|Is)>>>0,ct.feature_mode[0]=(o.feature_mode??nc)>>>0,ct.gaussian_scaling[0]=o.gaussian_scaling??1,ct.sh_bias[0]=o.sh_bias??.5,ct.color_K[0]=(o.color_K??0)>>>0,ct.walltime[0]=o.walltime??0}function bi(o,a){o.queue.writeBuffer(a,0,qt)}function is(o,a,f){f&&o&&a&&bi(o,a)}function Jn(o,a,f,P,g=!0){ct.canvas_size[0]=o>>>0,ct.canvas_size[1]=a>>>0,is(f??null,P??null,g)}function ri(o,a,f,P=!0){ct.gaussian_scaling[0]=o,is(a??null,f??null,P)}function ii(o,a,f,P=!0){ct.sh_bias[0]=o,is(a??null,f??null,P)}function sn(o,a,f,P=!0){let g=ct.accel_flags[0];if(o.oac!==void 0&&(g=o.oac?g|Gs:g&~Gs),o.spr!==void 0&&(g=o.spr?g|Is:g&~Is),o.bfc!==void 0&&(g=o.bfc?g|ti:g&~ti),o.meshCull!==void 0&&(g=o.meshCull?g|Us:g&~Us),o.meshSampleMode!==void 0){const k=(o.meshSampleMode&7)<<vi;g=g&~tc|k}o.meshSilhouetteCull!==void 0&&(g=o.meshSilhouetteCull?g|ni:g&~ni),o.meshInvertDepth!==void 0&&(g=o.meshInvertDepth?g|si:g&~si),ct.accel_flags[0]=g>>>0,is(a??null,f??null,P)}const rc=256,ic=mi,oc=8,ac=96,lc=12,Fs=8,Gt=1<<Fs,rn=256,ns=32/Fs,cc=0,oi=ns&1;function ai(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function uc(o,a){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),P=o.createPipelineLayout({bindGroupLayouts:[f]}),g=k=>o.createComputePipeline({layout:P,compute:{module:a,entryPoint:k,constants:{WG_SIZE:rn}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:f}}function dc(o,a,f){const P=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[P]}),B=o.createPipelineLayout({bindGroupLayouts:[g]}),O=[];for(let T=0;T<ns;T++){const D={PASS_ID:T+cc,RS_RADIX_LOG2:Fs,RS_RADIX_SIZE:Gt};O.push({localHistogram:o.createComputePipeline({layout:k,compute:{module:a,entryPoint:"local_histogram_pass",constants:D}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:f,entryPoint:"scatter_elements",constants:D}})})}return{passes:O,localHistogramBindGroupLayout:P,scatterBindGroupLayout:g}}function pc(o){const a=o.createShaderModule({label:"local histogram",code:Jl}),f=o.createShaderModule({label:"scatter",code:Ql}),P=o.createShaderModule({label:"blelloch prefix",code:ec}),g=uc(o,P),k=dc(o,a,f);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:g}}function hc(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),P=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(k,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:P,rectsBuffer:g,texParamsBuffer:k,meta:B}}class fc{constructor(a,f,P,g,k,B=null,O=null){R(this,"device");R(this,"pc");R(this,"presentationFormat");R(this,"camera_buffer");R(this,"render_settings_buffer");R(this,"draw_indirect_buffer");R(this,"splat_2d_buffer");R(this,"querySet");R(this,"resolveBuffer");R(this,"resultBuffer");R(this,"queriesPerFrame",oc);R(this,"queryCapacityFrames",200);R(this,"sort_prefixBindGroup");R(this,"sort_pipelines");R(this,"sort_localHistogramBindGroups");R(this,"sort_scatterBindGroups");R(this,"lastFrame",0);R(this,"frameCount",0);R(this,"preprocessPipeline");R(this,"cullPipeline");R(this,"renderPipeline");R(this,"indirectPipeline");R(this,"htEnabled",!1);R(this,"htSortedTail",!1);R(this,"renderShaderModule");R(this,"betaKernel",1);R(this,"renderSettingsBgl");R(this,"renderSplatsBgl");R(this,"atlasBgl");R(this,"htCorePipeline",null);R(this,"htTailPipeline",null);R(this,"htTail2Pipeline",null);R(this,"htCompositePipeline",null);R(this,"htComposite2Pipeline",null);R(this,"htCompositeBgl",null);R(this,"htCompositeBindGroup",null);R(this,"htDepthTexture",null);R(this,"htDepthView",null);R(this,"htCoreTexture",null);R(this,"htCoreView",null);R(this,"htAccumTexture",null);R(this,"htAccumView",null);R(this,"htTransTexture",null);R(this,"htTransView",null);R(this,"htW",0);R(this,"htH",0);R(this,"htTailBgl",null);R(this,"htTailBindGroup",null);R(this,"htParamsBuffer",null);R(this,"htTailK",150);R(this,"sort_info_buffer");R(this,"sort_ping_pong");R(this,"crsBg");R(this,"gsBg");R(this,"cullBg2");R(this,"preprocessBg1");R(this,"renderSplatsBindGroup");R(this,"renderSettingsBindGroup");R(this,"atlasBindGroup");R(this,"indirectBindGroup");R(this,"sh_solvers_buffer");R(this,"mesh");R(this,"meshDepthPipeline",null);R(this,"meshDepthCameraBindGroup",null);R(this,"meshDepthMarginBindGroup",null);R(this,"meshMarginBuffer",null);R(this,"meshDepthTexture",null);R(this,"meshDepthView",null);R(this,"meshCullBindGroupLayout");R(this,"meshCullBindGroup");R(this,"meshCullWidth",0);R(this,"meshCullHeight",0);R(this,"meshStubTexture");R(this,"meshStubView");R(this,"bfcParamsBuffer");R(this,"meshOverlayPipeline",null);R(this,"meshOverlayEnabled",!1);R(this,"bgColor",[0,0,0,0]);R(this,"showPerfDialogNext",!1);R(this,"requestReorderNextFrame",!1);R(this,"reorderInFlight",!1);R(this,"downloadOnceNextRead",!1);R(this,"downloadOnceFileName","fps_metrics");R(this,"allFrameTimes",[]);R(this,"lastStageBreakdownMs",null);R(this,"timeQueryEnabled");R(this,"atlas");R(this,"atlasParamsBuffer");this.mesh=O;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&Pt("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=P,this.camera_buffer=g,this.atlas=B??hc(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",te=>{console.error("A WebGPU error was not captured:",te.error)}),this._setupTimestampQueries(),this._setupBuffers();const D=(Math.floor((this.pc.num_points+rn-1)/rn)+1)*rn,I=Math.ceil(D/rn);console.log(`keys count adjusted: ${D}`),console.log(`key size: ${this.pc.num_points}`);const L=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=pc(f);const K=[ai(D,f),ai(D,f)],V=f.createBuffer({label:"workgroup histograms",size:I*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=f.createBuffer({label:"workgroup prefixes",size:I*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"digit base",size:Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=Math.ceil(I/rn),le=Math.ceil($/rn),j=f.createBuffer({label:"prefix l0 sums",size:$*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=f.createBuffer({label:"prefix l0 offsets",size:$*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=f.createBuffer({label:"prefix l1 sums",size:le*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"prefix l1 offsets",size:le*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:W}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:q}},{binding:6,resource:{buffer:oe}},{binding:7,resource:{buffer:H}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:K[0].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:K[1].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:K[0].sort_depths_buffer}},{binding:3,resource:{buffer:K[1].sort_depths_buffer}},{binding:4,resource:{buffer:K[0].sort_indices_buffer}},{binding:5,resource:{buffer:K[1].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:K[1].sort_depths_buffer}},{binding:3,resource:{buffer:K[0].sort_depths_buffer}},{binding:4,resource:{buffer:K[1].sort_indices_buffer}},{binding:5,resource:{buffer:K[0].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]})],this.sort_info_buffer=L,this.sort_ping_pong=K;const ne=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),de=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),re=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ne,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:de,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:re,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Se=this.device.createShaderModule({code:Kl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Se,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Ue=this.device.createShaderModule({code:Yl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ne,de,re,this.meshCullBindGroupLayout]}),compute:{module:Ue,entryPoint:"surfel_cull"}}),this.mesh!==null){const te=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:te,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const se=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:se,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const fe=this.device.createShaderModule({code:Zl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[te,se]}),vertex:{module:fe,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Le=this.device.createShaderModule({code:Wl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ne,ue]}),compute:{module:Le,entryPoint:"preprocess"}});const Ie=this.device.createShaderModule({code:jl});Ie.getCompilationInfo().then(te=>{te.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),te.messages.forEach(se=>{(se.type==="error"?console.error:se.type==="warning"?console.warn:console.log)(`${se.type} (line ${se.lineNum}:${se.linePos}): ${se.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Ee=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),me=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),xe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),J=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Ee,me,xe]}),vertex:{module:Ie,entryPoint:"vs_main"},fragment:{module:Ie,entryPoint:"fs_main",constants:{BETA_KERNEL:J},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(te=>{te?console.error("[render_2dgs] pipeline create validation error:",te.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Ee,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:me,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[oi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:xe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}}]}),this.renderShaderModule=Ie,this.betaKernel=J,this.renderSettingsBgl=Ee,this.renderSplatsBgl=me,this.atlasBgl=xe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,0,0,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){sn({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),f=new Uint32Array(a),P=new Float32Array(a);f[0]=this.atlas.meta.width|0,f[1]=this.atlas.meta.layer_h|0,P[2]=this.atlas.meta.uv_extent||0,P[3]=0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureHtResources(a,f){var k,B,O,T;if(this.htCorePipeline===null){const D=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,0,0,0]));const I=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:D,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:I,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:D,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}});const L=this.device.createShaderModule({label:"ht_composite",code:Hl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:L,entryPoint:"vs_main"},fragment:{module:L,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:L,entryPoint:"vs_main"},fragment:{module:L,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===f)return;(k=this.htDepthTexture)==null||k.destroy(),(B=this.htCoreTexture)==null||B.destroy(),(O=this.htAccumTexture)==null||O.destroy(),(T=this.htTransTexture)==null||T.destroy();const P={width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},g=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:P,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:P,format:"rgba16float",usage:g}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:P,format:"rgba16float",usage:g}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:P,format:"r16float",usage:g}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]}),this.htW=a,this.htH=f}ensureMeshDepthTexture(a,f){var P;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===f||((P=this.meshDepthTexture)==null||P.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=f))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&fi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a)}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),P=f*Uint32Array.BYTES_PER_ELEMENT;if(P===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[oi].sort_indices_buffer,0,g,0,P),this.device.queue.submit([k.finish()]),await g.mapAsync(GPUMapMode.READ);const B=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(B)),g.unmap()}frame(a,f,P=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=P&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(ct.accel_flags[0]&Us)!==0){const T=ct.canvas_size[0],D=ct.canvas_size[1];this.ensureMeshDepthTexture(T,D);const I={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},L=a.beginRenderPass(I);L.setPipeline(this.meshDepthPipeline),L.setBindGroup(0,this.meshDepthCameraBindGroup),L.setBindGroup(1,this.meshDepthMarginBindGroup),L.setVertexBuffer(0,this.mesh.vertexBuffer),L.setVertexBuffer(1,this.mesh.normalBuffer),L.setIndexBuffer(this.mesh.indexBuffer,"uint32"),L.drawIndexed(this.mesh.numIndices),L.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const D=a.beginComputePass(T);D.setPipeline(this.cullPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.gsBg),D.setBindGroup(2,this.cullBg2),D.setBindGroup(3,this.meshCullBindGroup);const I=Math.ceil(this.pc.num_points/rc);D.dispatchWorkgroups(I,1,1),D.end()}{const T=a.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const D=a.beginComputePass(T);D.setPipeline(this.preprocessPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.preprocessBg1),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),D.end()}if(!this.htEnabled||this.htSortedTail)for(let T=0;T<ns;T++){const D=T&1,I=this.sort_pipelines.passes[T],L=this.sort_localHistogramBindGroups[D],K=this.sort_scatterBindGroups[D];{const V={label:`upsweep_round${T}`};B&&!this.htEnabled&&T==0&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const W=a.beginComputePass(V);W.setPipeline(I.localHistogram),W.setBindGroup(0,L),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}{const V=a.beginComputePass({label:`prefix_round${T} - l0TileScan`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - l1ScanSums`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,Gt,1),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - addL1ToL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - addL0ToElems`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - computeDigitBase`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,1,1),V.end()}{const V={label:`scatter_round${T}`};B&&!this.htEnabled&&T==ns-1&&(V.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const W=a.beginComputePass(V);W.setPipeline(I.scatterElements),W.setBindGroup(0,K),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}}if(this.htEnabled){const T=ct.canvas_size[0],D=ct.canvas_size[1];this.ensureHtResources(T,D);{const I={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};B&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4,endOfPassWriteIndex:k+5});const L=a.beginRenderPass(I);L.setPipeline(this.htCorePipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}if(this.htSortedTail){const I={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6});const L=a.beginRenderPass(I);L.setPipeline(this.htTail2Pipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}else{const I={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};B&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6});const L=a.beginRenderPass(I);L.setPipeline(this.htTailPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.setBindGroup(3,this.htTailBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}{const I={label:"ht_composite",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+7});const L=a.beginRenderPass(I);L.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),L.setBindGroup(0,this.htCompositeBindGroup),L.draw(3),L.end()}}else{const T={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const D=a.beginRenderPass(T);D.setPipeline(this.renderPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const I=this.device.createShaderModule({code:Xl}),L=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),K=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[L,K]}),vertex:{module:I,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:I,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},D=a.beginRenderPass(T);D.setPipeline(this.meshOverlayPipeline),D.setBindGroup(0,this.meshDepthCameraBindGroup),D.setBindGroup(1,this.meshDepthMarginBindGroup),D.setVertexBuffer(0,this.mesh.vertexBuffer),D.setVertexBuffer(1,this.mesh.normalBuffer),D.setIndexBuffer(this.mesh.indexBuffer,"uint32"),D.drawIndexed(this.mesh.numIndices),D.end()}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const P=this.device.createCommandEncoder({label:"timestamp resolve encoder"});P.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),P.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([P.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),O=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,T=Array.from({length:g.length},()=>[]);let D=0;for(let le=0;le<B;le++){const j=(O+le)%this.queryCapacityFrames,Z=j*this.queriesPerFrame;let q=!0;for(let oe=0;oe<g.length;oe++){const[ne,de,re]=g[oe];if(k[Z+re]===0n||k[Z+de]===0n||k[Z+de]<k[Z+re]){q=!1;break}}if(!q){!f&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}D++;for(let oe=0;oe<g.length;oe++){const[ne,de,re]=g[oe],ue=Number(k[Z+re]),Se=Number(k[Z+de]);T[oe].push((Se-ue)/1e6)}}if(D===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const I=[];let L=0,K=0,V=0;for(let le=0;le<g.length;le++){const j=g[le][0],Z=T[le];let q=0;if(j==="Total"){const oe=this.allFrameTimes;q=oe.reduce((re,ue)=>re+ue,0)/oe.length;const ne=[...oe].sort((re,ue)=>re-ue);L=ne[Math.floor(ne.length*.99)]||0;const de=oe.reduce((re,ue)=>re+Math.pow(ue-q,2),0)/oe.length;K=Math.sqrt(de),V=q}else q=Z.reduce((oe,ne)=>oe+ne,0)/Z.length;I.push([j,q])}this.lastFrame+=this.frameCount,this.frameCount=0;const W=Object.fromEntries(I);this.lastStageBreakdownMs={cull:W.Culling??0,preprocess:W.Preprocess??0,sort:W.Sort??0,render:W.Render??0,total:W.Total??0};const $=`[TIMESTAMP - ${this.constructor.name}]
`+I.map(([le,j])=>`${le}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${L.toFixed(3)}ms
Total STD: ${K.toFixed(3)}ms
Total AVG: ${V.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log($),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const le=`Stage,ms
`,j=I.map(([oe,ne])=>`${oe},${ne.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(le+j),q=document.createElement("a");q.href=Z,q.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(q),q.click(),q.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert($)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ic,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,P=a?a.height:1;sc({width:f,height:P,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),bi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Un(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Un(this.pc.num_points*lc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,P=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${P}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function _c(o,a){return 2*Math.atan(a/(2*o))}function mc(o,a,f,P){const g=Math.tan(P/2),k=Math.tan(f/2),B=g*o,O=-B,T=k*o,D=-T,I=dt.create();return I[0]=2*o/(T-D),I[5]=-2*o/(B-O),I[2]=(T+D)/(T-D),I[6]=(B+O)/(B-O),I[14]=1,I[10]=a/(a-o),I[11]=-(a*o)/(a-o),dt.transpose(I,I),I}async function vc(o){Pt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return Pt(`loaded cameras count: ${f.length}`),f.map(P=>{const g=G.clone(P.position),k=yt.create(...P.rotation.flat()),B=k[0],O=k[4],T=k[8],D=k[1],I=k[5],L=k[9],K=k[2],V=k[6],W=k[10];B*(I*W-L*V)-O*(D*W-L*K)+T*(D*V-I*K)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const $=dt.fromMat3(k);return{position:g,rotation:$,img_name:P.img_name,id:P.id}})}const bc=4*2,gc=4*16,gi=4*gc+2*bc;function wc(o){return o.createBuffer({label:"camera uniform",size:gi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const nn=new Float32Array(gi/Float32Array.BYTES_PER_ELEMENT),ss=class ss{constructor(a,f){R(this,"uniform_buffer");R(this,"position",G.create());R(this,"rotation",dt.create());R(this,"fovY",45/180*Math.PI);R(this,"fovX");R(this,"focal",Xr.create());R(this,"viewport",Xr.create());R(this,"view_matrix",dt.identity());R(this,"view_inv_matrix",dt.identity());R(this,"proj_matrix",dt.identity());R(this,"proj_inv_matrix",dt.identity());R(this,"_negPos",G.create());R(this,"look",G.create(0,0,1));R(this,"up",G.create(0,1,0));R(this,"right",G.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=wc(f),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=_c(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=mc(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),G.transformMat4Upper3x3(ss.Z_AXIS,this.view_inv_matrix,this.look),G.normalize(this.look,this.look),G.cross(this.up,this.look,this.right),G.normalize(this.right,this.right);let a=0;nn.set(this.view_matrix,a),a+=16,nn.set(this.view_inv_matrix,a),a+=16,nn.set(this.proj_matrix,a),a+=16,nn.set(this.proj_inv_matrix,a),a+=16,nn.set(this.viewport,a),a+=2,nn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,nn)}set_preset(a){G.copy(a.position,this.position),dt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};R(ss,"Z_AXIS",G.create(0,0,1));let Rs=ss;const xc=G.create(1,0,0),yc=G.create(0,1,0);function Pc(o,a){const f=o[0],P=o[4],g=o[8],k=o[1],B=o[5],O=o[9],T=o[2],D=o[6],I=o[10],L=f+B+I;let K,V,W,H;if(L>0){const $=.5/Math.sqrt(L+1);K=.25/$,V=(D-O)*$,W=(g-T)*$,H=(k-P)*$}else if(f>B&&f>I){const $=2*Math.sqrt(1+f-B-I);K=(D-O)/$,V=.25*$,W=(P+k)/$,H=(g+T)/$}else if(B>I){const $=2*Math.sqrt(1+B-f-I);K=(g-T)/$,V=(P+k)/$,W=.25*$,H=(O+D)/$}else{const $=2*Math.sqrt(1+I-f-B);K=(k-P)/$,V=(g+T)/$,W=(O+D)/$,H=.25*$}return a[0]=V,a[1]=W,a[2]=H,a[3]=K,a}class Sc{constructor(a){R(this,"element");R(this,"enabled",!0);R(this,"center",G.create(0,0,0));R(this,"up",G.create(0,1,0));R(this,"rotation",[0,0]);R(this,"shift",[0,0]);R(this,"scroll",0);R(this,"speed",.1);R(this,"sensitivity",.08);R(this,"leftPressed",!1);R(this,"rightPressed",!1);R(this,"leftDragPans",!1);R(this,"lastX",0);R(this,"lastY",0);R(this,"touches",new Map);R(this,"lastTouchCenter",null);R(this,"lastPinchDistance",null);R(this,"lastTwoFingerAngle",null);R(this,"lastTouchCount",0);R(this,"roll",0);R(this,"_dir",G.create());R(this,"_right",G.create());R(this,"_upCam",G.create());R(this,"_scratch",G.create());R(this,"_qY",ht.create());R(this,"_qX",ht.create());R(this,"_qRot",ht.create());R(this,"_qLocal",ht.create());R(this,"_qWorldToCam",ht.create());R(this,"_scratchMat3",yt.create());R(this,"bboxMin",null);R(this,"bboxMax",null);R(this,"anchor",G.create(0,0,0));R(this,"downCallback",a=>{var f,P,g,k;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(P=(f=a.target)==null?void 0:f.setPointerCapture)==null||P.call(f,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(k=(g=a.target)==null?void 0:g.setPointerCapture)==null||k.call(g,a.pointerId),a.preventDefault())}});R(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const f=a.pageX-this.lastX,P=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=P):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=P)});R(this,"upCallback",a=>{var f,P,g,k;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(P=(f=a.target)==null?void 0:f.releasePointerCapture)==null||P.call(f,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(g=a.target)==null?void 0:g.releasePointerCapture)==null||k.call(g,a.pointerId),a.preventDefault()});R(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let f=a.deltaY;a.deltaMode===1?f*=16:a.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(a){G.copy(a,this.center),G.copy(a,this.anchor)}setOrbitPivot(a){G.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const f=this.camera.rotation;G.set(f[2],f[6],f[10],this._dir),G.normalize(this._dir,this._dir),G.scale(this._dir,a,this._dir),G.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(G.subtract(this.center,a.position,this._scratch),G.length(this._scratch)<1e-6)return;G.normalize(this._scratch,this._scratch),G.cross(this.up,this._scratch,this._right),G.length(this._right)<1e-6&&G.set(1,0,0,this._right),G.normalize(this._right,this._right),G.cross(this._scratch,this._right,this._upCam),G.normalize(this._upCam,this._upCam);const f=a.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,a.update_buffer()}setBbox(a,f){this.bboxMin=G.create(a[0],a[1],a[2]),this.bboxMax=G.create(f[0],f[1],f[2]);const P=(a[0]+f[0])*.5,g=(a[1]+f[1])*.5,k=(a[2]+f[2])*.5;G.set(P,g,k,this.center),G.set(P,g,k,this.anchor)}resetToCamera(){const a=this.camera.rotation;G.set(a[2],a[6],a[10],this._dir),G.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let P=-1/0,g=1/0,k=!1;for(let B=0;B<3;B++){const O=this._dir[B],T=this.bboxMin[B]-this.camera.position[B],D=this.bboxMax[B]-this.camera.position[B];if(Math.abs(O)>1e-8){const I=T/O,L=D/O;P=Math.max(P,Math.min(I,L)),g=Math.min(g,Math.max(I,L))}else if(T>0||D<0){k=!0;break}}!k&&P<=g&&g>0&&(f=(Math.max(P,0)+g)*.5)}if(f===null||!isFinite(f)||f<.001){G.subtract(this.anchor,this.camera.position,this._scratch);const P=G.dot(this._scratch,this._dir);f=P>.001?P:G.length(this._scratch)}f=Math.max(.1,f),G.scale(this._dir,f,this._dir),G.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const P=f.x-this.lastTouchCenter[0],g=f.y-this.lastTouchCenter[1];this.rotation[0]+=P*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[f.x,f.y]}else if(a===2){const f=Array.from(this.touches.values()),P=(f[0].x+f[1].x)*.5,g=(f[0].y+f[1].y)*.5,k=f[1].x-f[0].x,B=f[1].y-f[0].y,O=Math.hypot(k,B),T=Math.atan2(B,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const D=P-this.lastTouchCenter[0],I=g-this.lastTouchCenter[1],L=Math.hypot(D,I),K=Math.abs(O-this.lastPinchDistance);let V=T-this.lastTwoFingerAngle;V>Math.PI&&(V-=2*Math.PI),V<-Math.PI&&(V+=2*Math.PI),L>.5&&(this.shift[1]-=D,this.shift[0]+=I),K>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(O/this.lastPinchDistance)*10),Math.abs(V)>.0087&&(this.roll+=-V)}this.lastTouchCenter=[P,g],this.lastPinchDistance=O,this.lastTwoFingerAngle=T}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const H=f.rotation;this.up[0]=H[1],this.up[1]=H[5],this.up[2]=H[9],G.length(this.up)>1e-6?G.normalize(this.up,this.up):G.set(0,1,0,this.up)}let P=!1;if(Math.abs(this.roll)>1e-4){const H=f.rotation;G.set(H[2],H[6],H[10],this._scratch),G.normalize(this._scratch,this._scratch),ht.fromAxisAngle(this._scratch,this.roll,this._qRot),G.transformQuat(this.up,this._qRot,this.up),G.normalize(this.up,this.up),this.roll=0,P=!0}G.subtract(f.position,this.center,this._dir);let g=G.length(this._dir);g<1e-6&&(g=1e-6);const k=Math.exp(Math.log(g)+this.scroll*a*10*this.speed);G.scale(this._dir,k/g,this._dir),g=k;const B=f.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],G.normalize(this._right,this._right),G.length(this._right)<1e-6&&G.set(1,0,0,this._right);const O=G.create(B[1],B[5],B[9]);G.normalize(O,O),G.length(O)<1e-6&&G.set(0,1,0,O);const T=a*this.speed*.1*g,D=this.shift[1]*T,I=-this.shift[0]*T;G.scale(this._right,D,this._scratch),G.add(this.center,this._scratch,this.center),G.add(f.position,this._scratch,f.position),G.scale(O,I,this._scratch),G.add(this.center,this._scratch,this.center),G.add(f.position,this._scratch,f.position);const L=this.rotation[0]*a*this.sensitivity,K=this.rotation[1]*a*this.sensitivity;if(Math.abs(L)>1e-5||Math.abs(K)>1e-5||P){const H=f.rotation;Pc(H,this._qWorldToCam),ht.fromAxisAngle(xc,-K,this._qX),ht.fromAxisAngle(yc,-L,this._qY),ht.multiply(this._qX,this._qY,this._qLocal),ht.normalize(this._qLocal,this._qLocal),ht.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ht.normalize(this._qWorldToCam,this._qWorldToCam),yt.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,f.rotation);const $=f.rotation,le=$[2],j=$[6],Z=$[10];f.position[0]=this.center[0]-le*g,f.position[1]=this.center[1]-j*g,f.position[2]=this.center[2]-Z*g,this.up[0]=$[1],this.up[1]=$[5],this.up[2]=$[9],G.normalize(this.up,this.up)}else G.add(this.center,this._dir,f.position);f.update_buffer();const W=Math.pow(.8,a*60);this.rotation[0]*=W,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=W,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=W,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=W,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=W,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function wi(o){const a=G.create();for(const f of o)G.add(a,f,a);return G.scale(a,1/Math.max(o.length,1),a)}function xi(o,a){const f=yt.create();yt.inverse(o,f);const P=G.create();return P[0]=f[0]*a[0]+f[4]*a[1]+f[8]*a[2],P[1]=f[1]*a[0]+f[5]*a[1]+f[9]*a[2],P[2]=f[2]*a[0]+f[6]*a[1]+f[10]*a[2],P}function Cc(o){const a=o.slice(),f=[1,0,0,0,1,0,0,0,1],P=(T,D)=>a[T*3+D],g=(T,D,I)=>{a[T*3+D]=I},k=(T,D)=>f[T*3+D],B=(T,D,I)=>{f[T*3+D]=I};for(let T=0;T<30;T++){let D=0,I=1,L=Math.abs(P(0,1));if(Math.abs(P(0,2))>L&&(D=0,I=2,L=Math.abs(P(0,2))),Math.abs(P(1,2))>L&&(D=1,I=2,L=Math.abs(P(1,2))),L<1e-12)break;const K=P(D,D),V=P(I,I),W=P(D,I);let H;Math.abs(K-V)<1e-30?H=Math.PI/4*Math.sign(W):H=.5*Math.atan2(2*W,K-V);const $=Math.cos(H),le=Math.sin(H);for(let j=0;j<3;j++){const Z=P(j,D),q=P(j,I);g(j,D,$*Z+le*q),g(j,I,-le*Z+$*q)}for(let j=0;j<3;j++){const Z=P(D,j),q=P(I,j);g(D,j,$*Z+le*q),g(I,j,-le*Z+$*q)}for(let j=0;j<3;j++){const Z=k(j,D),q=k(j,I);B(j,D,$*Z+le*q),B(j,I,-le*Z+$*q)}}const O=[];for(let T=0;T<3;T++)O.push({val:P(T,T),vec:G.create(k(0,T),k(1,T),k(2,T))});return O.sort((T,D)=>D.val-T.val),{vals:[O[0].val,O[1].val,O[2].val],vecs:[O[0].vec,O[1].vec,O[2].vec]}}function Ec(o,a){const f=wi(o);let P=0,g=0,k=0,B=0,O=0,T=0;for(const W of o){const H=W[0]-f[0],$=W[1]-f[1],le=W[2]-f[2];P+=H*H,g+=H*$,k+=H*le,B+=$*$,O+=$*le,T+=le*le}const D=[P,g,k,g,B,O,k,O,T],{vecs:I}=Cc(D);let L=I[0],K=I[1],V=I[2];return G.dot(V,a)<0&&(G.scale(V,-1,V),G.scale(K,-1,K)),{centroid:f,normal:V,u:L,v:K}}function kc(o){let a=0,f=0,P=0,g=0,k=0,B=0,O=0,T=0,D=0;for(const[$,le]of o){const j=-2*$,Z=-2*le,q=1,oe=-($*$+le*le);a+=j*j,f+=j*Z,P+=j*q,g+=Z*Z,k+=Z*q,B+=q*q,O+=j*oe,T+=Z*oe,D+=q*oe}const I=yt.create(a,f,P,f,g,k,P,k,B),L=xi(I,G.create(O,T,D)),K=L[0],V=L[1],W=L[2],H=K*K+V*V-W;return{center:[K,V],radius:Math.sqrt(Math.max(H,1e-12))}}function Mc(o,a){let f=0,P=0,g=0,k=0,B=0,O=0,T=0,D=0,I=0;for(let K=0;K<o.length;K++){const V=o[K],W=G.normalize(a[K],G.create()),H=1-W[0]*W[0],$=-W[0]*W[1],le=-W[0]*W[2],j=1-W[1]*W[1],Z=-W[1]*W[2],q=1-W[2]*W[2];f+=H,P+=$,g+=le,k+=j,B+=Z,O+=q,T+=H*V[0]+$*V[1]+le*V[2],D+=$*V[0]+j*V[1]+Z*V[2],I+=le*V[0]+Z*V[1]+q*V[2]}const L=yt.create(f,P,g,P,k,B,g,B,O);return xi(L,G.create(T,D,I))}function yi(o,a={}){if(o.length===0)return null;const f=a.tiltDownDeg??8,P=a.radiusScale??1,g=a.alignFirst??!0,k=(a.direction??"ccw")==="ccw"?1:-1,B=o.map(re=>G.clone(re.position)),O=o.map(re=>{const ue=re.rotation;return G.create(ue[8],ue[9],ue[10])}),T=o.map(re=>{const ue=re.rotation;return G.create(ue[4],ue[5],ue[6])}),D=wi(T),I=G.normalize(G.scale(D,-1,G.create())),{centroid:L,normal:K,u:V,v:W}=Ec(B,I),H=B.map(re=>{const ue=G.sub(re,L,G.create());return[G.dot(ue,V),G.dot(ue,W)]}),{center:$,radius:le}=kc(H),j=le*P,Z=G.add(L,G.add(G.scale(V,$[0],G.create()),G.scale(W,$[1],G.create()),G.create()),G.create()),q=Mc(B,O),oe=j*Math.tan(f*Math.PI/180),ne=G.sub(q,G.scale(K,oe,G.create()),G.create());let de=0;if(g){const re=G.sub(B[0],Z,G.create());de=Math.atan2(G.dot(re,W),G.dot(re,V))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${j.toFixed(2)}, tilt=${f}°, normal=[${K[0].toFixed(2)}, ${K[1].toFixed(2)}, ${K[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:Z,radius:j,normal:K,u:V,v:W,lookAt:ne,startPhase:de,direction:k}}function Pi(o,a){const f=(o.startPhase+a*o.direction)*2*Math.PI,P=Math.cos(f),g=Math.sin(f),k=G.add(o.center,G.add(G.scale(o.u,o.radius*P,G.create()),G.scale(o.v,o.radius*g,G.create()),G.create()),G.create()),B=G.normalize(G.sub(o.lookAt,k,G.create())),O=G.cross(B,o.normal,G.create());G.length(O)<1e-6&&G.copy(o.u,O),G.normalize(O,O);const T=G.cross(B,O,G.create());G.normalize(T,T);const D=dt.create();return D[0]=O[0],D[1]=T[0],D[2]=B[0],D[3]=0,D[4]=O[1],D[5]=T[1],D[6]=B[1],D[7]=0,D[8]=O[2],D[9]=T[2],D[10]=B[2],D[11]=0,D[12]=0,D[13]=0,D[14]=0,D[15]=1,{position:k,rotation:D,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Bc(o,a={}){const f=yi(o,a);if(!f)return[];const P=a.numViews??120;return Array.from({length:P},(g,k)=>({...Pi(f,k/P),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Tc(o){const a=new Uint8Array(o),f=Math.min(a.byteLength,65536),P=new TextDecoder("ascii").decode(a.subarray(0,f)),g=P.indexOf("end_header");if(g<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=g+10+1,B=P.slice(0,g).split(/\r?\n/).map(se=>se.trim()).filter(Boolean);if(B[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const O=B.find(se=>se.startsWith("format"));if(!O||!O.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${O??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},D=[];let I=null;for(const se of B)if(se.startsWith("element ")){const[,fe,Te]=se.split(/\s+/);I={name:fe,count:parseInt(Te,10),props:[],bytesPerRecord:0,hasList:!1},D.push(I)}else if(se.startsWith("property ")&&I){const fe=se.split(/\s+/);if(fe[1]==="list"){const Te=fe[2],Pe=fe[3],ke=fe[4];I.props.push({name:ke,type:Pe,isList:!0,listCountType:Te,listItemType:Pe}),I.hasList=!0}else{const Te=fe[1],Pe=fe[2];if(I.props.push({name:Pe,type:Te,isList:!1}),T[Te]===void 0)throw new Error(`mesh PLY: unsupported prop type '${Te}'`);I.bytesPerRecord+=T[Te]}}const L=D.find(se=>se.name==="vertex"),K=D.find(se=>se.name==="face"||se.name==="faces");if(!L)throw new Error("mesh PLY: missing 'element vertex'");if(!K)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(L.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const V=L.props.find(se=>se.name==="x"),W=L.props.find(se=>se.name==="y"),H=L.props.find(se=>se.name==="z");if(!V||!W||!H)throw new Error("mesh PLY: vertex must have x/y/z");let $=0;const le=new Map;for(const se of L.props)le.set(se.name,{off:$,type:se.type}),$+=T[se.type];const j=le.get("x"),Z=le.get("y"),q=le.get("z");if(j.type!==Z.type||j.type!==q.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${j.type}/${Z.type}/${q.type})`);const oe=j.type,ne=oe==="double"||oe==="float64";if(!ne&&oe!=="float"&&oe!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${oe}')`);const de=new Float32Array(L.count*3),re=new DataView(o),ue=k,Se=L.bytesPerRecord;for(let se=0;se<L.count;se++){const fe=ue+se*Se;ne?(de[se*3+0]=re.getFloat64(fe+j.off,!0),de[se*3+1]=re.getFloat64(fe+Z.off,!0),de[se*3+2]=re.getFloat64(fe+q.off,!0)):(de[se*3+0]=re.getFloat32(fe+j.off,!0),de[se*3+1]=re.getFloat32(fe+Z.off,!0),de[se*3+2]=re.getFloat32(fe+q.off,!0))}const Ue=ue+L.count*Se,Le=K.props.find(se=>se.isList);if(!Le)throw new Error("mesh PLY: face element has no list property");const Ie=T[Le.listCountType],Ee=T[Le.listItemType];if(Ie!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ie}`);let me=Ue,xe=0;for(let se=0;se<K.count;se++){const fe=re.getUint8(me);fe===3&&xe++,me+=1+fe*Ee}const J=new Uint32Array(xe*3);me=Ue;let te=0;for(let se=0;se<K.count;se++){const fe=re.getUint8(me);if(me+=1,fe===3)for(let Te=0;Te<3;Te++){const Pe=me+Te*Ee;let ke;if(Ee===4)ke=re.getUint32(Pe,!0);else if(Ee===2)ke=re.getUint16(Pe,!0);else if(Ee===1)ke=re.getUint8(Pe);else throw new Error(`mesh PLY: unsupported face index size ${Ee}`);J[te++]=ke}me+=fe*Ee}return{positions:de,indices:J}}function Dc(o){const a=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=a.getUint32(0,!0),P=a.getUint32(4,!0),g=f*12,k=P*4;if(o.byteLength<8+g+k)throw new Error(`mesh .bin: truncated (expected ${8+g+k} B, got ${o.byteLength} B)`);const B=new Float32Array(o.slice(8,8+g)),O=new Uint32Array(o.slice(8+g,8+g+k));return{positions:B,indices:O}}function Si(o,a){return(a??"").toLowerCase().endsWith(".ply")?Tc(o):Dc(o)}function Ac(o,a){const f=o.length/3,P=new Float32Array(f*3);for(let g=0;g<a.length;g+=3){const k=a[g]*3,B=a[g+1]*3,O=a[g+2]*3,T=o[k],D=o[k+1],I=o[k+2],L=o[B],K=o[B+1],V=o[B+2],W=o[O],H=o[O+1],$=o[O+2],le=L-T,j=K-D,Z=V-I,q=W-T,oe=H-D,ne=$-I,de=j*ne-Z*oe,re=Z*q-le*ne,ue=le*oe-j*q;P[k]+=de,P[k+1]+=re,P[k+2]+=ue,P[B]+=de,P[B+1]+=re,P[B+2]+=ue,P[O]+=de,P[O+1]+=re,P[O+2]+=ue}for(let g=0;g<f;g++){const k=g*3,B=P[k],O=P[k+1],T=P[k+2],D=Math.sqrt(B*B+O*O+T*T);if(D>1e-12){const I=1/D;P[k]=B*I,P[k+1]=O*I,P[k+2]=T*I}}return P}function Ci(o,a){const f=o.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(f,0,a.positions);const P=Ac(a.positions,a.indices),g=o.createBuffer({label:"mesh-cull normal buffer",size:P.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(g,0,P);const k=o.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(k,0,a.indices),{vertexBuffer:f,normalBuffer:g,indexBuffer:k,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function zc(o,a){try{const f=await fetch(a);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${f.status}`),null;const P=await f.arrayBuffer(),g=Si(P,a);return console.log(`[mesh-cull] loaded ${a}: ${g.positions.length/3} verts, ${g.indices.length/3} tris`),Ci(o,g)}catch(f){return console.warn(`[mesh-cull] load error for ${a}:`,f),null}}function Lc(o,a,f){try{const P=Si(a,f);return console.log(`[mesh-cull] loaded from bundle: ${P.positions.length/3} verts, ${P.indices.length/3} tris`),Ci(o,P)}catch(P){return console.warn("[mesh-cull] parse error:",P),null}}const Ei="BITYMI01",Gc=0,Ic=1,Uc=2,Rc=3,Vc=4,Oc=5,Fc=6;function es(o){const a=(o&32768)>>15,f=(o&31744)>>10,P=o&1023;return f===0?(a?-1:1)*Math.pow(2,-14)*(P/1024):f===31?P?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,f-15)*(1+P/1024)}function li(o,a,f,P,g,k){const B=(o-f.width*.5)/P.focal[0],O=-((a-f.height*.5)/P.focal[1]),T=P.rotation,D=T[0],I=T[4],L=T[8],K=T[1],V=T[5],W=T[9],H=T[2],$=T[6],le=T[10];let j=B*D+O*K+H,Z=B*I+O*V+$,q=B*L+O*W+le;const oe=Math.hypot(j,Z,q)||1;j/=oe,Z/=oe,q/=oe;const ne=P.position[0],de=P.position[1],re=P.position[2],ue=k*.005,Se=ue*ue,Ue=new Uint32Array(g.buffer,g.byteOffset,g.length),Le=g.length/8;let Ie=1/0,Ee=0,me=0,xe=0,J=-1;for(let te=0;te<Le;te++){const se=te*8,fe=g[se+0]-ne,Te=g[se+1]-de,Pe=g[se+2]-re,ke=fe*j+Te*Z+Pe*q;if(ke<=0)continue;const ve=fe-ke*j,Ae=Te-ke*Z,$e=Pe-ke*q;if(ve*ve+Ae*Ae+$e*$e>=Se||!(Ue[se+7]>>>16&1))continue;const w=Ue[se+5],i=Ue[se+6],p=es(w&65535),d=es(w>>>16&65535),v=es(i&65535),y=es(i>>>16&65535),C=Math.hypot(p,d,v,y)||1,E=p/C,r=d/C,m=v/C,c=y/C,h=2*(r*c+E*m),l=2*(m*c-E*r),_=1-2*(r*r+m*m),x=j*h+Z*l+q*_;let b;Math.abs(x)>1e-6?(b=(fe*h+Te*l+Pe*_)/x,(!isFinite(b)||b<=0)&&(b=ke)):b=ke,b<Ie&&(Ie=b,Ee=ne+b*j,me=de+b*Z,xe=re+b*q,J=te)}return J<0?null:[Ee,me,xe]}function ki(o){const a=new Uint8Array(o),f=new TextDecoder().decode(a.subarray(0,8));if(f!==Ei)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const P=new DataView(o),g=P.getUint32(8,!0),k=12,B=20;let O=null,T=null,D=null,I=null;for(let L=0;L<g;L++){const K=k+L*B,V=P.getUint32(K+0,!0),W=Number(P.getBigUint64(K+4,!0)),H=Number(P.getBigUint64(K+12,!0)),$=a.slice(W,W+H).buffer;V===Gc||V===Ic||V===Oc?O=$:V===Uc?T=$:V===Rc||V===Vc?D=$:V===Fc&&(I=$)}if(O===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:O,camerasBuffer:T,atlasBuffer:D,meshBuffer:I}}async function Nc(o,a){var B;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const P=(()=>{const O=f.headers.get("content-length");return O&&parseInt(O,10)||void 0})(),g=(B=f.body)==null?void 0:B.getReader();let k;if(!g)k=await f.arrayBuffer(),a&&a(k.byteLength,P,0);else{const O=[];let T=0,D=performance.now(),I=0;for(;;){const{done:V,value:W}=await g.read();if(V)break;O.push(W),T+=W.byteLength;const H=performance.now();if(H-D>=150&&a){const $=(T-I)/((H-D)/1e3);a(T,P,$),D=H,I=T}}const L=new Uint8Array(T);let K=0;for(const V of O)L.set(V,K),K+=V.byteLength;k=L.buffer,a&&a(T,P,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===Ei?{bundle:ki(k),rawPly:null}:{bundle:null,rawPly:k}}function $c(o){return new Promise(a=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var P;return a(((P=f.files)==null?void 0:P[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function qc(o,a,f){const P=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),k=document.getElementById("quick-links");g&&(g.onclick=async()=>{const I=await $c(".ply,.bitymi");if(I)if(P&&(P.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const L=await I.arrayBuffer(),{pcBuffer:K}=ki(L),V=new File([K],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),W=await zs(V,o);a(W)}else{const L=await zs(I,o);a(L)}}),k&&(k.innerHTML="");const B=new URLSearchParams(window.location.search),O=B.get("bundle")??B.get("model_url"),T=B.get("camera_url"),D=B.get("mesh_url");O&&(P&&(P.style.display="none"),f(O,T,D))}async function Wc(o,a,f,P){const g=new Rs(o,f),k=new Sc(g);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const O="rgba8unorm";a.configure({device:f,format:O,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const D=()=>{g.on_update_canvas(),T!==null&&Jn(o.width,o.height,f,T.render_settings_buffer)};new ResizeObserver(()=>{const p=Math.max(.25,M.render_scale),d=Math.max(1,Math.ceil(p*o.clientWidth)),v=Math.max(1,Math.ceil(p*o.clientHeight));o.width===d&&o.height===v||(o.width=d,o.height=v,D())}).observe(o);let L=0,K=0;const V=()=>{(o.width!==L||o.height!==K)&&(L=o.width,K=o.height,D())},W=new URLSearchParams(window.location.search);let $=W.get("animation")==="1";k.enabled=!$;const le=W.get("camera_url"),j=W.get("mesh_cull"),Z=j==="1"||j==="true",q=W.get("mesh_normal_margin")??W.get("mesh_margin"),oe=q!==null?Number(q):NaN,ne=Number.isFinite(oe)?oe:0,de=W.get("mesh_debug"),re=de==="1"||de==="true",ue=W.get("bfc"),Se=ue==="1"||ue==="true",Ue=W.get("bfc_cos"),Le=Ue!==null?Number(Ue):NaN,Ie=Number.isFinite(Le)?Le:2,Ee=W.get("mesh_sample_mode"),me=Ee!==null?parseInt(Ee,10):NaN,xe=Number.isFinite(me)&&me>=0&&me<=7?me:1,J=W.get("mesh_silhouette"),te=J==="1"||J==="true",se=W.get("mesh_invert_depth"),fe=se==="1"||se==="true",Te=W.get("ht"),Pe=Te==="2"?2:Te==="1"||Te==="true"?1:0,ke=W.get("ht_k"),ve=ke!==null?Number(ke):NaN,Ae=Number.isFinite(ve)?ve:150,$e=Math.max(1,window.devicePixelRatio||1),M={gaussian_scaling:1,sh_bias:.5,animate:$,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Se,bfc_cos:Ie,ht_mode:Pe,ht_k:Ae,mesh_cull:Z,mesh_margin:ne,mesh_debug:re,mesh_sample_mode:xe,mesh_silhouette:te,mesh_invert_depth:fe,render_scale:1},U=new ql.Pane({title:"Config",expanded:!0});U.addInput(M,"animate",{label:"Animate"}).on("change",p=>{const d=$;$=p.value,k.enabled=!p.value,!d&&$&&w.value&&w.value.onAnimateStart(),d&&!$&&w.value&&w.value.onAnimateStop()}),U.addInput(M,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const w={value:null};qc(f,p=>i(p,[],null,null),async(p,d,v)=>{let y=d??le,C,E=null,r=null;const m=p.toLowerCase();if(m.endsWith(".bitymi")||m.includes(".bitymi?")){Os("downloading bundle ...");try{const{bundle:h}=await Nc(p,(_,x,b)=>{const A=_/1048576,F=x?x/(1024*1024):void 0,N=b/(1024*1024),ie=x?Math.min(99,Math.floor(_/x*100)):void 0,Y=F?`total ${F.toFixed(1)} MB`:"total -- MB",Q=F&&ie!==void 0?`${A.toFixed(1)} MB downloaded (${ie}%)`:`${A.toFixed(1)} MB downloaded`,_e=`${N.toFixed(2)} MB/s`;It(`downloading bundle ...
${Y}, ${Q}
${_e}`)});if(!h)throw new Error("Expected a .bitymi bundle");It("parsing PLY ...");const l=new File([h.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(C=await zs(l,f),!y&&h.camerasBuffer&&(y=URL.createObjectURL(new Blob([h.camerasBuffer],{type:"application/json"}))),h.atlasBuffer){const _=h.atlasBuffer.byteLength/1048576;It(`uploading atlas ...
${_.toFixed(1)} MB BC7`);try{const x=Vl(h.atlasBuffer);E=Fl(f,x,!0)}catch(x){console.warn("[atlas] failed to parse/upload atlas:",x)}}h.meshBuffer&&!v&&(It("uploading mesh ..."),r=Lc(f,h.meshBuffer,"bundle.mesh"))}catch(h){throw Gn(),h}}else C=await Nl(p,f);v&&(It("loading mesh ..."),r=await zc(f,v));const c=y?await vc(y):[];c.length>0&&g.set_preset(c[0]),i(C,c,E,r)});function i(p,d=[],v=null,y=null){const C=[(p.bbox.min[0]+p.bbox.max[0])/2,(p.bbox.min[1]+p.bbox.max[1])/2,(p.bbox.min[2]+p.bbox.max[2])/2];k.setBbox(p.bbox.min,p.bbox.max);const E=.5*Math.sqrt((p.bbox.max[0]-p.bbox.min[0])**2+(p.bbox.max[1]-p.bbox.min[1])**2+(p.bbox.max[2]-p.bbox.min[2])**2);function r(X,pe){const ae=li(X,pe,o,g,p.surfel_data,E);ae&&(k.setOrbitPivot(ae),console.log(`[pick] orbit pivot → (${ae[0].toFixed(3)}, ${ae[1].toFixed(3)}, ${ae[2].toFixed(3)})`))}function m(){const X=o.width*.5,pe=o.height*.5,ae=li(X,pe,o,g,p.surfel_data,E);if(!ae)return;const ze=g.rotation,Re=ze[2],we=ze[6],Ce=ze[10],Ne=ae[0]-g.position[0],We=ae[1]-g.position[1],at=ae[2]-g.position[2],bt=Ne*Re+We*we+at*Ce;bt>0&&k.setOrbitDepth(bt)}if(d.length===0){const X=p.bbox.max[0]-p.bbox.min[0],pe=p.bbox.max[1]-p.bbox.min[1],ae=p.bbox.max[2]-p.bbox.min[2],Re=.5*Math.sqrt(X*X+pe*pe+ae*ae)*.5;G.set(C[0]-Re,C[1]-Re,C[2]-Re,g.position);const we=G.create(Re,Re,Re);G.normalize(we,we);const Ce=G.create(0,1,0),Ne=G.create();G.cross(Ce,we,Ne),G.normalize(Ne,Ne);const We=G.create();G.cross(we,Ne,We);const at=yt.create(Ne[0],We[0],we[0],Ne[1],We[1],we[1],Ne[2],We[2],we[2]);dt.fromMat3(at,g.rotation),g.update_buffer()}k.setCenter(G.create(p.centroid[0],p.centroid[1],p.centroid[2]));const c=new fc(p,f,O,g.uniform_buffer,P,v,y);T=c,Jn(o.width,o.height,f,c.render_settings_buffer),M.atlas_enabled=v!==null,y===null&&(M.mesh_cull=!1),c.setMeshCullEnabled(M.mesh_cull),c.setMeshMargin(M.mesh_margin),y===null&&(M.mesh_debug=!1),c.setMeshOverlayEnabled(M.mesh_debug);{const X=p.surfel_data,pe=X.length/8;let ae=0,ze=0,Re=0;for(let Ce=0;Ce<pe;Ce++)ae+=X[Ce*8],ze+=X[Ce*8+1],Re+=X[Ce*8+2];const we=pe>0?[ae/pe,ze/pe,Re/pe]:[0,0,0];c.setBfcParams(M.bfc_cos,we),sn({bfc:M.bfc},f,c.render_settings_buffer),console.log(`[bfc] flag=${M.bfc} cos=${M.bfc_cos} centroid=(${we[0].toFixed(3)}, ${we[1].toFixed(3)}, ${we[2].toFixed(3)})`)}c.htEnabled=M.ht_mode>0,c.htSortedTail=M.ht_mode===2,c.setHtTailK(M.ht_k),M.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${M.ht_mode}: ${M.ht_mode===2?"exact core + SORTED tail":"K=1 core + OIT tail"}, tail_k=${M.ht_k})`),sn({meshSampleMode:M.mesh_sample_mode,meshSilhouetteCull:M.mesh_silhouette,meshInvertDepth:M.mesh_invert_depth},f,c.render_settings_buffer),console.log(`[mesh-cull] ${y!==null?"mesh loaded":"no mesh"} · toggle=${M.mesh_cull} · margin=${M.mesh_margin}m · debug=${M.mesh_debug} · sample_mode=${M.mesh_sample_mode} · silhouette=${M.mesh_silhouette} · invert=${M.mesh_invert_depth}`);let h=!1;const l=(()=>{if(v!==null)return`${v.meta.format===2?"BC7":v.meta.format===3?"ASTC 4×4":v.meta.format===7?"BC7 codebook gather (typeD)":`format=${v.meta.format}`} ${v.meta.width}×${v.meta.height}, ${v.meta.n_layers} layers`;const X=f.features.has("texture-compression-bc"),pe=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(X?["BC7"]:[]).concat(pe?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",l),ii(p.sh_bias,f,c.render_settings_buffer),ri(M.gaussian_scaling,f,c.render_settings_buffer),M.sh_bias=p.sh_bias;const _=p.num_points.toLocaleString(),x={stats:`${_} surfels · -- fps`};U.addMonitor(x,"stats",{label:"Stats",interval:200}),U.addMonitor({atlas:l},"atlas",{label:"Atlas"});const b={stages:"— ms · awaiting timestamp data"};U.addMonitor(b,"stages",{label:"Stages",interval:500});let A=null;if(c.timeQueryEnabled){A=document.createElement("canvas"),A.width=280,A.height=24,A.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(A);const X=ae=>{const ze=A.getContext("2d");if(!ze)return;const Re=A.width,we=A.height;if(ze.clearRect(0,0,Re,we),!ae||ae.total<=0){ze.fillStyle="#888",ze.font="11px ui-monospace,Menlo,monospace",ze.fillText("awaiting GPU timestamps…",8,16);return}const Ce=[{label:"cull",ms:ae.cull,color:"#3aa3ff"},{label:"pre",ms:ae.preprocess,color:"#3ad27a"},{label:"sort",ms:ae.sort,color:"#ffa53a"},{label:"render",ms:ae.render,color:"#ff5566"}],Ne=Math.max(.001,Ce.reduce((at,bt)=>at+bt.ms,0));let We=0;ze.font="10px ui-monospace,Menlo,monospace",ze.textBaseline="middle";for(const at of Ce){const bt=at.ms/Ne*Re;ze.fillStyle=at.color,ze.fillRect(We,0,bt,we),bt>=38&&(ze.fillStyle="#000c",ze.fillText(`${at.label} ${at.ms.toFixed(1)}`,We+4,we/2)),We+=bt}};setInterval(()=>{h||c.readPerfMetrics({silent:!0}).then(()=>{const ae=c.lastStageBreakdownMs;X(ae),ae&&(b.stages=`${ae.total.toFixed(1)} ms · cull ${ae.cull.toFixed(1)} / pre ${ae.preprocess.toFixed(1)} / sort ${ae.sort.toFixed(1)} / render ${ae.render.toFixed(1)}`)}).catch(ae=>console.warn("[perf] readPerfMetrics failed:",ae))},500)}const F=.4,N=3,ie=.3;let Y=null,Q=0,_e=0;const be=ht.create(),he=yt.create();let ce=d.length>0?0:-1;const Me={view:d.length>0?`${ce+1} / ${d.length}: ${d[ce].img_name??ce}`:"— no presets —"};U.addMonitor(Me,"view",{label:"View",interval:100});function Be(X){const pe=yt.create(X[0],X[1],X[2],X[4],X[5],X[6],X[8],X[9],X[10]);return ht.fromMat(pe)}function qe(X,pe){Y={fromPos:G.clone(g.position),toPos:G.clone(X.position),fromQuat:ht.normalize(Be(g.rotation)),toQuat:ht.normalize(Be(X.rotation)),target:X,t:0,duration:Math.max(.01,pe)}}const je=(X,pe=!0)=>{if(d.length===0)return;ce=(X%d.length+d.length)%d.length;const ae=d[ce];pe?qe(ae,F):(g.set_preset(ae),k.resetToCamera(),m()),Me.view=`${ce+1} / ${d.length}: ${d[ce].img_name??ce}`};d.length>0&&(U.addButton({title:"◀ Prev view"}).on("click",()=>je(ce-1)),U.addButton({title:"Next view ▶"}).on("click",()=>je(ce+1)));const Ke=d.length>0?yi(d,{tiltDownDeg:15,alignFirst:!0}):null,Xe=Ke?Bc(d,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Ye=0;const it=12;w.value={onAnimateStart:()=>{Ye=0},onAnimateStop:()=>{k.resetToCamera(),m()}},U.addInput(M,"render_scale",{label:"Render scale",min:.25,max:$e,step:.25}).on("change",X=>{const pe=Math.max(.25,X.value),ae=Math.max(1,Math.ceil(pe*o.clientWidth)),ze=Math.max(1,Math.ceil(pe*o.clientHeight));(o.width!==ae||o.height!==ze)&&(o.width=ae,o.height=ze,D())}),U.addInput(M,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",X=>ri(X.value,f,c.render_settings_buffer)),U.addInput(M,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",X=>ii(X.value,f,c.render_settings_buffer)),U.addInput(M,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",X=>{c.bgColor=[X.value.r,X.value.g,X.value.b,X.value.a]});const ot=v?v.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";U.addInput(M,"atlas_enabled",{label:ot}).on("change",X=>c.setAtlasEnabled(X.value)),U.addInput(M,"bfc",{label:"Backface"}).on("change",X=>sn({bfc:X.value},f,c.render_settings_buffer)),U.addInput(M,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2}}).on("change",X=>{c.htEnabled=X.value>0,c.htSortedTail=X.value===2}),U.addInput(M,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",X=>c.setHtTailK(X.value));const nt=U.addInput(M,"mesh_cull",{label:"Mesh cull"});nt.on("change",X=>c.setMeshCullEnabled(X.value)),c.hasMesh||(nt.disabled=!0);const st=U.addInput(M,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});st.on("change",X=>c.setMeshMargin(X.value)),c.hasMesh||(st.disabled=!0);const Je=U.addInput(M,"mesh_debug",{label:"Mesh debug"});Je.on("change",X=>c.setMeshOverlayEnabled(X.value)),c.hasMesh||(Je.disabled=!0);const et=U.addInput(M,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});et.on("change",X=>sn({meshSampleMode:X.value},f,c.render_settings_buffer)),c.hasMesh||(et.disabled=!0);const Fe=U.addInput(M,"mesh_silhouette",{label:"Silhouette cull"});Fe.on("change",X=>sn({meshSilhouetteCull:X.value},f,c.render_settings_buffer)),c.hasMesh||(Fe.disabled=!0);const tt=U.addInput(M,"mesh_invert_depth",{label:"Invert depth cull"});tt.on("change",X=>sn({meshInvertDepth:X.value},f,c.render_settings_buffer)),c.hasMesh||(tt.disabled=!0),U.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(d.length>0)g.set_preset(d[0]);else{const X=p.bbox.max[0]-p.bbox.min[0],pe=p.bbox.max[1]-p.bbox.min[1],ae=p.bbox.max[2]-p.bbox.min[2],Re=.5*Math.sqrt(X*X+pe*pe+ae*ae)*.5;G.set(C[0]-Re,C[1]-Re,C[2]-Re,g.position);const we=G.create(Re,Re,Re);G.normalize(we,we);const Ce=G.create();G.cross(G.create(0,1,0),we,Ce),G.normalize(Ce,Ce);const Ne=G.create();G.cross(we,Ce,Ne);const We=yt.create(Ce[0],Ne[0],we[0],Ce[1],Ne[1],we[1],Ce[2],Ne[2],we[2]);dt.fromMat3(We,g.rotation),g.update_buffer()}k.resetToCamera(),m()});const He={result:"— click Benchmark —"};U.addMonitor(He,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const ut={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function rt(){const pe=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ae of Object.keys(ut))if(pe.startsWith(ae))return ae;return null}const _t=document.createElement("div");_t.id="bench-overlay",_t.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(_t);function gt(X,pe,ae){const ze=Math.floor(pe/Math.max(1,ae)*100),Re=32,we=Math.floor(pe/Math.max(1,ae)*Re),Ce="█".repeat(we)+"░".repeat(Re-we);_t.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${X}</div><div>[${Ce}] ${ze}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${pe} / ${ae} frames · offscreen · pipelined · no vsync</div>`,_t.style.display="block"}function St(){_t.style.display="none"}async function Ct(X=10,pe=200){if(h)return;if(d.length===0){He.result="no cameras to benchmark";return}h=!0;const ae=$,ze=M.animate,Re=new Float32Array(g.position),we=new Float32Array(g.rotation);$=!1,M.animate=!1,U.refresh(),Y=null,k.enabled=!1;const Ce=rt(),Ne=Ce?ut[Ce]:null,We=(Ne==null?void 0:Ne.w)??o.width,at=(Ne==null?void 0:Ne.h)??o.height,bt=(Ne==null?void 0:Ne.fovY)??g.getFov(),Rn=Ce?`${Ce} · ${We>=4e3/4+500?"images_4":"images_2"}`:"custom",bn=o.width,gn=o.height,Vn=g.getFov();o.width=We,o.height=at,g.setFov(bt),Jn(We,at,f,c.render_settings_buffer);const On=f.createTexture({size:[We,at,1],format:O,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Kt=On.createView(),os=()=>{const ft=f.createCommandEncoder();c.frame(ft,Kt,!1),f.queue.submit([ft.finish()])},wn=()=>new Promise(ft=>setTimeout(ft,0)),Fn=20,Nn=async(ft,Yt)=>{let ln=0,kt=0;for(gt(Yt,0,ft),await wn();kt<ft;){const cn=Math.min(Fn,ft-kt),un=performance.now();for(let xn=0;xn<cn;xn++)g.set_preset(d[(kt+xn)%d.length]),os();await f.queue.onSubmittedWorkDone();const as=performance.now();ln+=as-un,kt+=cn,gt(Yt,kt,ft),await wn()}return ln};try{await Nn(X,"Warming up");const Yt=await Nn(pe,"Benchmarking")/pe,ln=1e3/Yt,kt=p.num_points??p.surfel_data.length/8,cn=(bt*180/Math.PI).toFixed(1),un=`${ln.toFixed(1)} FPS  (${Yt.toFixed(2)} ms/frame)
${We}×${at} · fovY ${cn}° · ${Rn}
${kt.toLocaleString()} surfels · ${X}w+${pe}b · pipelined`;He.result=un,console.log("[bench]",un.replace(/\n/g,"  |  "))}catch(ft){console.error("[bench] failed:",ft),He.result=`bench failed: ${ft}`}finally{St(),On.destroy(),o.width=bn,o.height=gn,g.setFov(Vn),Jn(bn,gn,f,c.render_settings_buffer),g.position.set(Re),g.rotation.set(we),g.update_buffer(),k.enabled=!ae,$=ae,M.animate=ze,U.refresh(),h=!1}}U.addButton({title:"📊 Benchmark"}).on("click",()=>Ct()),document.addEventListener("keydown",X=>{const pe=X.key;if(pe>="0"&&pe<="9"&&d.length>0){const ae=parseInt(pe);ae<d.length&&je(ae)}else pe==="ArrowLeft"||pe==="PageUp"?(je(ce-1),X.preventDefault()):pe==="ArrowRight"||pe==="PageDown"?(je(ce+1),X.preventDefault()):(pe==="d"||pe==="D")&&c.debugReadSortedIndices(30).catch(ae=>console.error("[DEBUG] readback failed:",ae))});function Mt(X,pe){const ae=o.getBoundingClientRect(),ze=window.devicePixelRatio||1;return[(X-ae.left)*ze,(pe-ae.top)*ze]}o.addEventListener("dblclick",X=>{const[pe,ae]=Mt(X.clientX,X.clientY);r(pe,ae)});let Et=0,Bt=0,Wt=0;o.addEventListener("pointerdown",X=>{if(X.pointerType!=="touch")return;const pe=performance.now(),ae=pe-Et,ze=X.clientX-Bt,Re=X.clientY-Wt;if(ae>0&&ae<300&&ze*ze+Re*Re<40*40){const[we,Ce]=Mt(X.clientX,X.clientY);r(we,Ce),Et=0}else Et=pe,Bt=X.clientX,Wt=X.clientY});function Tt(){return B}let jt=performance.now(),Ut=60,Ze=Promise.resolve(),Ht=0;async function an(){var Re;const X=performance.now(),pe=Math.min((X-jt)/1e3,.1);if(jt=X,pe>0){const we=((Re=c.lastStageBreakdownMs)==null?void 0:Re.total)??0,Ce=we>.5?1e3/we:1/pe;Ut=Ut*.9+Ce*.1,x.stats=`${_} surfels · ${Math.round(Ut)} fps`}if(h){requestAnimationFrame(an);return}if(Tt()&&(Y||$)&&(Y=null,k.resetToCamera(),m(),$&&($=!1,M.animate=!1,U.refresh())),$&&M.animateMode==="circle"&&Ke){Ye+=pe/it,Ye>=1&&(Ye-=1);const we=Pi(Ke,Ye);g.set_preset(we),k.update(pe);const Ce=f.createCommandEncoder();c.frame(Ce,a.getCurrentTexture().createView()),f.queue.submit([Ce.finish()]),Ht++,Ht===2&&Gn(),requestAnimationFrame(an);return}if(Y){Y.t+=pe/Y.duration;const we=Math.min(1,Y.t),Ce=we*we*(3-2*we);G.lerp(Y.fromPos,Y.toPos,Ce,g.position),ht.slerp(Y.fromQuat,Y.toQuat,Ce,be),yt.fromQuat(be,he),dt.fromMat3(he,g.rotation),g.update_buffer(),Y.t>=1&&(g.set_preset(Y.target),Y=null,$?d.length>0&&(Q=ie):(k.resetToCamera(),m()))}else if($&&!Tt()){const we=M.animateMode==="circle"&&Xe.length>0,Ce=we?Xe:d;if(Ce.length!==0){if(Q-=pe,Q<=0){const We=((we?_e:ce)+1)%Ce.length;we?_e=We:ce=We;const at=we?N/8:N;qe(Ce[We],at),we||(Me.view=`${ce+1} / ${d.length}: ${d[ce].img_name??ce}`)}}}k.update(pe),V(),await Ze;const ae=f.createCommandEncoder(),ze=a.getCurrentTexture().createView();c.frame(ae,ze),f.queue.submit([ae.finish()]),Ze=f.queue.onSubmittedWorkDone(),Ht++,Ht===2&&Gn(),requestAnimationFrame(an)}requestAnimationFrame(an)}}(function(){let a="dev";for(const P of Array.from(document.querySelectorAll('script[type="module"]'))){const k=P.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){a=k[1];break}}const f=document.createElement("div");f.textContent="v "+a,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),P=document.querySelector("#webgpu-canvas");Ll(P!==null);const g=P.getContext("webgpu");Wc(P,g,f,a)})();
