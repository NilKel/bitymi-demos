var kl=Object.defineProperty;var Ml=(o,a,u)=>a in o?kl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[a]=u;var U=(o,a,u)=>(Ml(o,typeof a!="symbol"?a+"":a,u),u);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))S(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const L of w.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&S(L)}).observe(document,{childList:!0,subtree:!0});function u(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function S(g){if(g.ep)return;g.ep=!0;const w=u(g);fetch(g.href,w)}})();function Bl(o,a){return class extends o{constructor(...u){super(...u),a(this)}}}const Tl=Bl(Array,o=>o.fill(0));let ze=1e-6;function Al(o){function a(y=0,k=0){const E=new o(2);return y!==void 0&&(E[0]=y,k!==void 0&&(E[1]=k)),E}const u=a;function S(y,k,E){const r=E??new o(2);return r[0]=y,r[1]=k,r}function g(y,k){const E=k??new o(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function w(y,k){const E=k??new o(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function L(y,k){const E=k??new o(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function T(y,k=0,E=1,r){const m=r??new o(2);return m[0]=Math.min(E,Math.max(k,y[0])),m[1]=Math.min(E,Math.max(k,y[1])),m}function M(y,k,E){const r=E??new o(2);return r[0]=y[0]+k[0],r[1]=y[1]+k[1],r}function D(y,k,E,r){const m=r??new o(2);return m[0]=y[0]+k[0]*E,m[1]=y[1]+k[1]*E,m}function N(y,k){const E=y[0],r=y[1],m=k[0],p=k[1],h=Math.sqrt(E*E+r*r),l=Math.sqrt(m*m+p*p),_=h*l,P=_&&de(y,k)/_;return Math.acos(P)}function q(y,k,E){const r=E??new o(2);return r[0]=y[0]-k[0],r[1]=y[1]-k[1],r}const I=q;function H(y,k){return Math.abs(y[0]-k[0])<ze&&Math.abs(y[1]-k[1])<ze}function ee(y,k){return y[0]===k[0]&&y[1]===k[1]}function Z(y,k,E,r){const m=r??new o(2);return m[0]=y[0]+E*(k[0]-y[0]),m[1]=y[1]+E*(k[1]-y[1]),m}function Q(y,k,E,r){const m=r??new o(2);return m[0]=y[0]+E[0]*(k[0]-y[0]),m[1]=y[1]+E[1]*(k[1]-y[1]),m}function ne(y,k,E){const r=E??new o(2);return r[0]=Math.max(y[0],k[0]),r[1]=Math.max(y[1],k[1]),r}function $(y,k,E){const r=E??new o(2);return r[0]=Math.min(y[0],k[0]),r[1]=Math.min(y[1],k[1]),r}function ie(y,k,E){const r=E??new o(2);return r[0]=y[0]*k,r[1]=y[1]*k,r}const K=ie;function me(y,k,E){const r=E??new o(2);return r[0]=y[0]/k,r[1]=y[1]/k,r}function fe(y,k){const E=k??new o(2);return E[0]=1/y[0],E[1]=1/y[1],E}const _e=fe;function ue(y,k,E){const r=E??new o(3),m=y[0]*k[1]-y[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function de(y,k){return y[0]*k[0]+y[1]*k[1]}function De(y){const k=y[0],E=y[1];return Math.sqrt(k*k+E*E)}const te=De;function le(y){const k=y[0],E=y[1];return k*k+E*E}const ye=le;function Ge(y,k){const E=y[0]-k[0],r=y[1]-k[1];return Math.sqrt(E*E+r*r)}const ke=Ge;function X(y,k){const E=y[0]-k[0],r=y[1]-k[1];return E*E+r*r}const j=X;function V(y,k){const E=k??new o(2),r=y[0],m=y[1],p=Math.sqrt(r*r+m*m);return p>1e-5?(E[0]=r/p,E[1]=m/p):(E[0]=0,E[1]=0),E}function ve(y,k){const E=k??new o(2);return E[0]=-y[0],E[1]=-y[1],E}function Ae(y,k){const E=k??new o(2);return E[0]=y[0],E[1]=y[1],E}const Ne=Ae;function Re(y,k,E){const r=E??new o(2);return r[0]=y[0]*k[0],r[1]=y[1]*k[1],r}const Ue=Re;function ae(y,k,E){const r=E??new o(2);return r[0]=y[0]/k[0],r[1]=y[1]/k[1],r}const xe=ae;function Ee(y=1,k){const E=k??new o(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function B(y){const k=y??new o(2);return k[0]=0,k[1]=0,k}function F(y,k,E){const r=E??new o(2),m=y[0],p=y[1];return r[0]=m*k[0]+p*k[4]+k[12],r[1]=m*k[1]+p*k[5]+k[13],r}function v(y,k,E){const r=E??new o(2),m=y[0],p=y[1];return r[0]=k[0]*m+k[4]*p+k[8],r[1]=k[1]*m+k[5]*p+k[9],r}function i(y,k,E,r){const m=r??new o(2),p=y[0]-k[0],h=y[1]-k[1],l=Math.sin(E),_=Math.cos(E);return m[0]=p*_-h*l+k[0],m[1]=p*l+h*_+k[1],m}function f(y,k,E){const r=E??new o(2);return V(y,r),ie(r,k,r)}function d(y,k,E){const r=E??new o(2);return De(y)>k?f(y,k,r):Ae(y,r)}function b(y,k,E){const r=E??new o(2);return Z(y,k,.5,r)}return{create:a,fromValues:u,set:S,ceil:g,floor:w,round:L,clamp:T,add:M,addScaled:D,angle:N,subtract:q,sub:I,equalsApproximately:H,equals:ee,lerp:Z,lerpV:Q,max:ne,min:$,mulScalar:ie,scale:K,divScalar:me,inverse:fe,invert:_e,cross:ue,dot:de,length:De,len:te,lengthSq:le,lenSq:ye,distance:Ge,dist:ke,distanceSq:X,distSq:j,normalize:V,negate:ve,copy:Ae,clone:Ne,multiply:Re,mul:Ue,divide:ae,div:xe,random:Ee,zero:B,transformMat4:F,transformMat3:v,rotate:i,setLength:f,truncate:d,midpoint:b}}const ei=new Map;function yi(o){let a=ei.get(o);return a||(a=Al(o),ei.set(o,a)),a}function Dl(o){function a(l,_,P){const x=new o(3);return l!==void 0&&(x[0]=l,_!==void 0&&(x[1]=_,P!==void 0&&(x[2]=P))),x}const u=a;function S(l,_,P,x){const A=x??new o(3);return A[0]=l,A[1]=_,A[2]=P,A}function g(l,_){const P=_??new o(3);return P[0]=Math.ceil(l[0]),P[1]=Math.ceil(l[1]),P[2]=Math.ceil(l[2]),P}function w(l,_){const P=_??new o(3);return P[0]=Math.floor(l[0]),P[1]=Math.floor(l[1]),P[2]=Math.floor(l[2]),P}function L(l,_){const P=_??new o(3);return P[0]=Math.round(l[0]),P[1]=Math.round(l[1]),P[2]=Math.round(l[2]),P}function T(l,_=0,P=1,x){const A=x??new o(3);return A[0]=Math.min(P,Math.max(_,l[0])),A[1]=Math.min(P,Math.max(_,l[1])),A[2]=Math.min(P,Math.max(_,l[2])),A}function M(l,_,P){const x=P??new o(3);return x[0]=l[0]+_[0],x[1]=l[1]+_[1],x[2]=l[2]+_[2],x}function D(l,_,P,x){const A=x??new o(3);return A[0]=l[0]+_[0]*P,A[1]=l[1]+_[1]*P,A[2]=l[2]+_[2]*P,A}function N(l,_){const P=l[0],x=l[1],A=l[2],O=_[0],W=_[1],ce=_[2],re=Math.sqrt(P*P+x*x+A*A),se=Math.sqrt(O*O+W*W+ce*ce),ge=re*se,Me=ge&&de(l,_)/ge;return Math.acos(Me)}function q(l,_,P){const x=P??new o(3);return x[0]=l[0]-_[0],x[1]=l[1]-_[1],x[2]=l[2]-_[2],x}const I=q;function H(l,_){return Math.abs(l[0]-_[0])<ze&&Math.abs(l[1]-_[1])<ze&&Math.abs(l[2]-_[2])<ze}function ee(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function Z(l,_,P,x){const A=x??new o(3);return A[0]=l[0]+P*(_[0]-l[0]),A[1]=l[1]+P*(_[1]-l[1]),A[2]=l[2]+P*(_[2]-l[2]),A}function Q(l,_,P,x){const A=x??new o(3);return A[0]=l[0]+P[0]*(_[0]-l[0]),A[1]=l[1]+P[1]*(_[1]-l[1]),A[2]=l[2]+P[2]*(_[2]-l[2]),A}function ne(l,_,P){const x=P??new o(3);return x[0]=Math.max(l[0],_[0]),x[1]=Math.max(l[1],_[1]),x[2]=Math.max(l[2],_[2]),x}function $(l,_,P){const x=P??new o(3);return x[0]=Math.min(l[0],_[0]),x[1]=Math.min(l[1],_[1]),x[2]=Math.min(l[2],_[2]),x}function ie(l,_,P){const x=P??new o(3);return x[0]=l[0]*_,x[1]=l[1]*_,x[2]=l[2]*_,x}const K=ie;function me(l,_,P){const x=P??new o(3);return x[0]=l[0]/_,x[1]=l[1]/_,x[2]=l[2]/_,x}function fe(l,_){const P=_??new o(3);return P[0]=1/l[0],P[1]=1/l[1],P[2]=1/l[2],P}const _e=fe;function ue(l,_,P){const x=P??new o(3),A=l[2]*_[0]-l[0]*_[2],O=l[0]*_[1]-l[1]*_[0];return x[0]=l[1]*_[2]-l[2]*_[1],x[1]=A,x[2]=O,x}function de(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function De(l){const _=l[0],P=l[1],x=l[2];return Math.sqrt(_*_+P*P+x*x)}const te=De;function le(l){const _=l[0],P=l[1],x=l[2];return _*_+P*P+x*x}const ye=le;function Ge(l,_){const P=l[0]-_[0],x=l[1]-_[1],A=l[2]-_[2];return Math.sqrt(P*P+x*x+A*A)}const ke=Ge;function X(l,_){const P=l[0]-_[0],x=l[1]-_[1],A=l[2]-_[2];return P*P+x*x+A*A}const j=X;function V(l,_){const P=_??new o(3),x=l[0],A=l[1],O=l[2],W=Math.sqrt(x*x+A*A+O*O);return W>1e-5?(P[0]=x/W,P[1]=A/W,P[2]=O/W):(P[0]=0,P[1]=0,P[2]=0),P}function ve(l,_){const P=_??new o(3);return P[0]=-l[0],P[1]=-l[1],P[2]=-l[2],P}function Ae(l,_){const P=_??new o(3);return P[0]=l[0],P[1]=l[1],P[2]=l[2],P}const Ne=Ae;function Re(l,_,P){const x=P??new o(3);return x[0]=l[0]*_[0],x[1]=l[1]*_[1],x[2]=l[2]*_[2],x}const Ue=Re;function ae(l,_,P){const x=P??new o(3);return x[0]=l[0]/_[0],x[1]=l[1]/_[1],x[2]=l[2]/_[2],x}const xe=ae;function Ee(l=1,_){const P=_??new o(3),x=Math.random()*2*Math.PI,A=Math.random()*2-1,O=Math.sqrt(1-A*A)*l;return P[0]=Math.cos(x)*O,P[1]=Math.sin(x)*O,P[2]=A*l,P}function B(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function F(l,_,P){const x=P??new o(3),A=l[0],O=l[1],W=l[2],ce=_[3]*A+_[7]*O+_[11]*W+_[15]||1;return x[0]=(_[0]*A+_[4]*O+_[8]*W+_[12])/ce,x[1]=(_[1]*A+_[5]*O+_[9]*W+_[13])/ce,x[2]=(_[2]*A+_[6]*O+_[10]*W+_[14])/ce,x}function v(l,_,P){const x=P??new o(3),A=l[0],O=l[1],W=l[2];return x[0]=A*_[0*4+0]+O*_[1*4+0]+W*_[2*4+0],x[1]=A*_[0*4+1]+O*_[1*4+1]+W*_[2*4+1],x[2]=A*_[0*4+2]+O*_[1*4+2]+W*_[2*4+2],x}function i(l,_,P){const x=P??new o(3),A=l[0],O=l[1],W=l[2];return x[0]=A*_[0]+O*_[4]+W*_[8],x[1]=A*_[1]+O*_[5]+W*_[9],x[2]=A*_[2]+O*_[6]+W*_[10],x}function f(l,_,P){const x=P??new o(3),A=_[0],O=_[1],W=_[2],ce=_[3]*2,re=l[0],se=l[1],ge=l[2],Me=O*ge-W*se,we=W*re-A*ge,Pe=A*se-O*re;return x[0]=re+Me*ce+(O*Pe-W*we)*2,x[1]=se+we*ce+(W*Me-A*Pe)*2,x[2]=ge+Pe*ce+(A*we-O*Me)*2,x}function d(l,_){const P=_??new o(3);return P[0]=l[12],P[1]=l[13],P[2]=l[14],P}function b(l,_,P){const x=P??new o(3),A=_*4;return x[0]=l[A+0],x[1]=l[A+1],x[2]=l[A+2],x}function y(l,_){const P=_??new o(3),x=l[0],A=l[1],O=l[2],W=l[4],ce=l[5],re=l[6],se=l[8],ge=l[9],Me=l[10];return P[0]=Math.sqrt(x*x+A*A+O*O),P[1]=Math.sqrt(W*W+ce*ce+re*re),P[2]=Math.sqrt(se*se+ge*ge+Me*Me),P}function k(l,_,P,x){const A=x??new o(3),O=[],W=[];return O[0]=l[0]-_[0],O[1]=l[1]-_[1],O[2]=l[2]-_[2],W[0]=O[0],W[1]=O[1]*Math.cos(P)-O[2]*Math.sin(P),W[2]=O[1]*Math.sin(P)+O[2]*Math.cos(P),A[0]=W[0]+_[0],A[1]=W[1]+_[1],A[2]=W[2]+_[2],A}function E(l,_,P,x){const A=x??new o(3),O=[],W=[];return O[0]=l[0]-_[0],O[1]=l[1]-_[1],O[2]=l[2]-_[2],W[0]=O[2]*Math.sin(P)+O[0]*Math.cos(P),W[1]=O[1],W[2]=O[2]*Math.cos(P)-O[0]*Math.sin(P),A[0]=W[0]+_[0],A[1]=W[1]+_[1],A[2]=W[2]+_[2],A}function r(l,_,P,x){const A=x??new o(3),O=[],W=[];return O[0]=l[0]-_[0],O[1]=l[1]-_[1],O[2]=l[2]-_[2],W[0]=O[0]*Math.cos(P)-O[1]*Math.sin(P),W[1]=O[0]*Math.sin(P)+O[1]*Math.cos(P),W[2]=O[2],A[0]=W[0]+_[0],A[1]=W[1]+_[1],A[2]=W[2]+_[2],A}function m(l,_,P){const x=P??new o(3);return V(l,x),ie(x,_,x)}function p(l,_,P){const x=P??new o(3);return De(l)>_?m(l,_,x):Ae(l,x)}function h(l,_,P){const x=P??new o(3);return Z(l,_,.5,x)}return{create:a,fromValues:u,set:S,ceil:g,floor:w,round:L,clamp:T,add:M,addScaled:D,angle:N,subtract:q,sub:I,equalsApproximately:H,equals:ee,lerp:Z,lerpV:Q,max:ne,min:$,mulScalar:ie,scale:K,divScalar:me,inverse:fe,invert:_e,cross:ue,dot:de,length:De,len:te,lengthSq:le,lenSq:ye,distance:Ge,dist:ke,distanceSq:X,distSq:j,normalize:V,negate:ve,copy:Ae,clone:Ne,multiply:Re,mul:Ue,divide:ae,div:xe,random:Ee,zero:B,transformMat4:F,transformMat4Upper3x3:v,transformMat3:i,transformQuat:f,getTranslation:d,getAxis:b,getScaling:y,rotateX:k,rotateY:E,rotateZ:r,setLength:m,truncate:p,midpoint:h}}const ti=new Map;function fs(o){let a=ti.get(o);return a||(a=Dl(o),ti.set(o,a)),a}function Rl(o){const a=yi(o),u=fs(o);function S(i,f,d,b,y,k,E,r,m){const p=new o(12);return p[3]=0,p[7]=0,p[11]=0,i!==void 0&&(p[0]=i,f!==void 0&&(p[1]=f,d!==void 0&&(p[2]=d,b!==void 0&&(p[4]=b,y!==void 0&&(p[5]=y,k!==void 0&&(p[6]=k,E!==void 0&&(p[8]=E,r!==void 0&&(p[9]=r,m!==void 0&&(p[10]=m))))))))),p}function g(i,f,d,b,y,k,E,r,m,p){const h=p??new o(12);return h[0]=i,h[1]=f,h[2]=d,h[3]=0,h[4]=b,h[5]=y,h[6]=k,h[7]=0,h[8]=E,h[9]=r,h[10]=m,h[11]=0,h}function w(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function L(i,f){const d=f??new o(12),b=i[0],y=i[1],k=i[2],E=i[3],r=b+b,m=y+y,p=k+k,h=b*r,l=y*r,_=y*m,P=k*r,x=k*m,A=k*p,O=E*r,W=E*m,ce=E*p;return d[0]=1-_-A,d[1]=l+ce,d[2]=P-W,d[3]=0,d[4]=l-ce,d[5]=1-h-A,d[6]=x+O,d[7]=0,d[8]=P+W,d[9]=x-O,d[10]=1-h-_,d[11]=0,d}function T(i,f){const d=f??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function M(i,f,d){const b=d??new o(12);return b[0]=i[0]*f,b[1]=i[1]*f,b[2]=i[2]*f,b[4]=i[4]*f,b[5]=i[5]*f,b[6]=i[6]*f,b[8]=i[8]*f,b[9]=i[9]*f,b[10]=i[10]*f,b}const D=M;function N(i,f,d){const b=d??new o(12);return b[0]=i[0]+f[0],b[1]=i[1]+f[1],b[2]=i[2]+f[2],b[4]=i[4]+f[4],b[5]=i[5]+f[5],b[6]=i[6]+f[6],b[8]=i[8]+f[8],b[9]=i[9]+f[9],b[10]=i[10]+f[10],b}function q(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const I=q;function H(i,f){return Math.abs(i[0]-f[0])<ze&&Math.abs(i[1]-f[1])<ze&&Math.abs(i[2]-f[2])<ze&&Math.abs(i[4]-f[4])<ze&&Math.abs(i[5]-f[5])<ze&&Math.abs(i[6]-f[6])<ze&&Math.abs(i[8]-f[8])<ze&&Math.abs(i[9]-f[9])<ze&&Math.abs(i[10]-f[10])<ze}function ee(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function Z(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function Q(i,f){const d=f??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const b=i[0*4+0],y=i[0*4+1],k=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],p=i[2*4+0],h=i[2*4+1],l=i[2*4+2];return d[0]=b,d[1]=E,d[2]=p,d[4]=y,d[5]=r,d[6]=h,d[8]=k,d[9]=m,d[10]=l,d}function ne(i,f){const d=f??new o(12),b=i[0*4+0],y=i[0*4+1],k=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],p=i[2*4+0],h=i[2*4+1],l=i[2*4+2],_=l*r-m*h,P=-l*E+m*p,x=h*E-r*p,A=1/(b*_+y*P+k*x);return d[0]=_*A,d[1]=(-l*y+k*h)*A,d[2]=(m*y-k*r)*A,d[4]=P*A,d[5]=(l*b-k*p)*A,d[6]=(-m*b+k*E)*A,d[8]=x*A,d[9]=(-h*b+y*p)*A,d[10]=(r*b-y*E)*A,d}function $(i){const f=i[0],d=i[0*4+1],b=i[0*4+2],y=i[1*4+0],k=i[1*4+1],E=i[1*4+2],r=i[2*4+0],m=i[2*4+1],p=i[2*4+2];return f*(k*p-m*E)-y*(d*p-m*b)+r*(d*E-k*b)}const ie=ne;function K(i,f,d){const b=d??new o(12),y=i[0],k=i[1],E=i[2],r=i[4+0],m=i[4+1],p=i[4+2],h=i[8+0],l=i[8+1],_=i[8+2],P=f[0],x=f[1],A=f[2],O=f[4+0],W=f[4+1],ce=f[4+2],re=f[8+0],se=f[8+1],ge=f[8+2];return b[0]=y*P+r*x+h*A,b[1]=k*P+m*x+l*A,b[2]=E*P+p*x+_*A,b[4]=y*O+r*W+h*ce,b[5]=k*O+m*W+l*ce,b[6]=E*O+p*W+_*ce,b[8]=y*re+r*se+h*ge,b[9]=k*re+m*se+l*ge,b[10]=E*re+p*se+_*ge,b}const me=K;function fe(i,f,d){const b=d??Z();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function _e(i,f){const d=f??a.create();return d[0]=i[8],d[1]=i[9],d}function ue(i,f,d){const b=d??a.create(),y=f*4;return b[0]=i[y+0],b[1]=i[y+1],b}function de(i,f,d,b){const y=b===i?i:q(i,b),k=d*4;return y[k+0]=f[0],y[k+1]=f[1],y}function De(i,f){const d=f??a.create(),b=i[0],y=i[1],k=i[4],E=i[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(k*k+E*E),d}function te(i,f){const d=f??u.create(),b=i[0],y=i[1],k=i[2],E=i[4],r=i[5],m=i[6],p=i[8],h=i[9],l=i[10];return d[0]=Math.sqrt(b*b+y*y+k*k),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(p*p+h*h+l*l),d}function le(i,f){const d=f??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function ye(i,f,d){const b=d??new o(12),y=f[0],k=f[1],E=i[0],r=i[1],m=i[2],p=i[1*4+0],h=i[1*4+1],l=i[1*4+2],_=i[2*4+0],P=i[2*4+1],x=i[2*4+2];return i!==b&&(b[0]=E,b[1]=r,b[2]=m,b[4]=p,b[5]=h,b[6]=l),b[8]=E*y+p*k+_,b[9]=r*y+h*k+P,b[10]=m*y+l*k+x,b}function Ge(i,f){const d=f??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ke(i,f,d){const b=d??new o(12),y=i[0*4+0],k=i[0*4+1],E=i[0*4+2],r=i[1*4+0],m=i[1*4+1],p=i[1*4+2],h=Math.cos(f),l=Math.sin(f);return b[0]=h*y+l*r,b[1]=h*k+l*m,b[2]=h*E+l*p,b[4]=h*r-l*y,b[5]=h*m-l*k,b[6]=h*p-l*E,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function X(i,f){const d=f??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function j(i,f,d){const b=d??new o(12),y=i[4],k=i[5],E=i[6],r=i[8],m=i[9],p=i[10],h=Math.cos(f),l=Math.sin(f);return b[4]=h*y+l*r,b[5]=h*k+l*m,b[6]=h*E+l*p,b[8]=h*r-l*y,b[9]=h*m-l*k,b[10]=h*p-l*E,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function V(i,f){const d=f??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function ve(i,f,d){const b=d??new o(12),y=i[0*4+0],k=i[0*4+1],E=i[0*4+2],r=i[2*4+0],m=i[2*4+1],p=i[2*4+2],h=Math.cos(f),l=Math.sin(f);return b[0]=h*y-l*r,b[1]=h*k-l*m,b[2]=h*E-l*p,b[8]=h*r+l*y,b[9]=h*m+l*k,b[10]=h*p+l*E,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Ae=Ge,Ne=ke;function Re(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ue(i,f,d){const b=d??new o(12),y=f[0],k=f[1];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ae(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function xe(i,f,d){const b=d??new o(12),y=f[0],k=f[1],E=f[2];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],b[8]=E*i[2*4+0],b[9]=E*i[2*4+1],b[10]=E*i[2*4+2],b}function Ee(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function F(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function v(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],b[8]=f*i[2*4+0],b[9]=f*i[2*4+1],b[10]=f*i[2*4+2],b}return{add:N,clone:I,copy:q,create:S,determinant:$,equals:ee,equalsApproximately:H,fromMat4:w,fromQuat:L,get3DScaling:te,getAxis:ue,getScaling:De,getTranslation:_e,identity:Z,inverse:ne,invert:ie,mul:me,mulScalar:D,multiply:K,multiplyScalar:M,negate:T,rotate:ke,rotateX:j,rotateY:ve,rotateZ:Ne,rotation:Ge,rotationX:X,rotationY:V,rotationZ:Ae,scale:Ue,scale3D:xe,scaling:Re,scaling3D:ae,set:g,setAxis:de,setTranslation:fe,translate:ye,translation:le,transpose:Q,uniformScale:B,uniformScale3D:v,uniformScaling:Ee,uniformScaling3D:F}}const ni=new Map;function Ll(o){let a=ni.get(o);return a||(a=Rl(o),ni.set(o,a)),a}function Il(o){const a=fs(o);function u(r,m,p,h,l,_,P,x,A,O,W,ce,re,se,ge,Me){const we=new o(16);return r!==void 0&&(we[0]=r,m!==void 0&&(we[1]=m,p!==void 0&&(we[2]=p,h!==void 0&&(we[3]=h,l!==void 0&&(we[4]=l,_!==void 0&&(we[5]=_,P!==void 0&&(we[6]=P,x!==void 0&&(we[7]=x,A!==void 0&&(we[8]=A,O!==void 0&&(we[9]=O,W!==void 0&&(we[10]=W,ce!==void 0&&(we[11]=ce,re!==void 0&&(we[12]=re,se!==void 0&&(we[13]=se,ge!==void 0&&(we[14]=ge,Me!==void 0&&(we[15]=Me)))))))))))))))),we}function S(r,m,p,h,l,_,P,x,A,O,W,ce,re,se,ge,Me,we){const Pe=we??new o(16);return Pe[0]=r,Pe[1]=m,Pe[2]=p,Pe[3]=h,Pe[4]=l,Pe[5]=_,Pe[6]=P,Pe[7]=x,Pe[8]=A,Pe[9]=O,Pe[10]=W,Pe[11]=ce,Pe[12]=re,Pe[13]=se,Pe[14]=ge,Pe[15]=Me,Pe}function g(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=0,p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=0,p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function w(r,m){const p=m??new o(16),h=r[0],l=r[1],_=r[2],P=r[3],x=h+h,A=l+l,O=_+_,W=h*x,ce=l*x,re=l*A,se=_*x,ge=_*A,Me=_*O,we=P*x,Pe=P*A,Ie=P*O;return p[0]=1-re-Me,p[1]=ce+Ie,p[2]=se-Pe,p[3]=0,p[4]=ce-Ie,p[5]=1-W-Me,p[6]=ge+we,p[7]=0,p[8]=se+Pe,p[9]=ge-we,p[10]=1-W-re,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function L(r,m){const p=m??new o(16);return p[0]=-r[0],p[1]=-r[1],p[2]=-r[2],p[3]=-r[3],p[4]=-r[4],p[5]=-r[5],p[6]=-r[6],p[7]=-r[7],p[8]=-r[8],p[9]=-r[9],p[10]=-r[10],p[11]=-r[11],p[12]=-r[12],p[13]=-r[13],p[14]=-r[14],p[15]=-r[15],p}function T(r,m,p){const h=p??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function M(r,m,p){const h=p??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const D=M;function N(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15],p}const q=N;function I(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function H(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function ee(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Z(r,m){const p=m??new o(16);if(p===r){let Le;return Le=r[1],r[1]=r[4],r[4]=Le,Le=r[2],r[2]=r[8],r[8]=Le,Le=r[3],r[3]=r[12],r[12]=Le,Le=r[6],r[6]=r[9],r[9]=Le,Le=r[7],r[7]=r[13],r[13]=Le,Le=r[11],r[11]=r[14],r[14]=Le,p}const h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],P=r[0*4+3],x=r[1*4+0],A=r[1*4+1],O=r[1*4+2],W=r[1*4+3],ce=r[2*4+0],re=r[2*4+1],se=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Pe=r[3*4+2],Ie=r[3*4+3];return p[0]=h,p[1]=x,p[2]=ce,p[3]=Me,p[4]=l,p[5]=A,p[6]=re,p[7]=we,p[8]=_,p[9]=O,p[10]=se,p[11]=Pe,p[12]=P,p[13]=W,p[14]=ge,p[15]=Ie,p}function Q(r,m){const p=m??new o(16),h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],P=r[0*4+3],x=r[1*4+0],A=r[1*4+1],O=r[1*4+2],W=r[1*4+3],ce=r[2*4+0],re=r[2*4+1],se=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Pe=r[3*4+2],Ie=r[3*4+3],Le=se*Ie,qe=Pe*ge,$e=O*Ie,je=Pe*W,Xe=O*ge,rt=se*W,Qe=_*Ie,nt=Pe*P,at=_*ge,st=se*P,Ye=_*W,He=O*P,We=ce*we,Ze=Me*re,Je=x*we,pt=Me*A,it=x*re,It=ce*A,gt=h*we,Et=Me*l,Tt=h*re,Kt=ce*l,Pt=h*A,Ut=x*l,_n=Le*A+je*re+Xe*we-(qe*A+$e*re+rt*we),Ht=qe*l+Qe*re+st*we-(Le*l+nt*re+at*we),mn=$e*l+nt*A+Ye*we-(je*l+Qe*A+He*we),ot=rt*l+at*A+He*re-(Xe*l+st*A+Ye*re),et=1/(h*_n+x*Ht+ce*mn+Me*ot);return p[0]=et*_n,p[1]=et*Ht,p[2]=et*mn,p[3]=et*ot,p[4]=et*(qe*x+$e*ce+rt*Me-(Le*x+je*ce+Xe*Me)),p[5]=et*(Le*h+nt*ce+at*Me-(qe*h+Qe*ce+st*Me)),p[6]=et*(je*h+Qe*x+He*Me-($e*h+nt*x+Ye*Me)),p[7]=et*(Xe*h+st*x+Ye*ce-(rt*h+at*x+He*ce)),p[8]=et*(We*W+pt*ge+it*Ie-(Ze*W+Je*ge+It*Ie)),p[9]=et*(Ze*P+gt*ge+Kt*Ie-(We*P+Et*ge+Tt*Ie)),p[10]=et*(Je*P+Et*W+Pt*Ie-(pt*P+gt*W+Ut*Ie)),p[11]=et*(It*P+Tt*W+Ut*ge-(it*P+Kt*W+Pt*ge)),p[12]=et*(Je*se+It*Pe+Ze*O-(it*Pe+We*O+pt*se)),p[13]=et*(Tt*Pe+We*_+Et*se-(gt*se+Kt*Pe+Ze*_)),p[14]=et*(gt*O+Ut*Pe+pt*_-(Pt*Pe+Je*_+Et*O)),p[15]=et*(Pt*se+it*_+Kt*O-(Tt*O+Ut*se+It*_)),p}function ne(r){const m=r[0],p=r[0*4+1],h=r[0*4+2],l=r[0*4+3],_=r[1*4+0],P=r[1*4+1],x=r[1*4+2],A=r[1*4+3],O=r[2*4+0],W=r[2*4+1],ce=r[2*4+2],re=r[2*4+3],se=r[3*4+0],ge=r[3*4+1],Me=r[3*4+2],we=r[3*4+3],Pe=ce*we,Ie=Me*re,Le=x*we,qe=Me*A,$e=x*re,je=ce*A,Xe=h*we,rt=Me*l,Qe=h*re,nt=ce*l,at=h*A,st=x*l,Ye=Pe*P+qe*W+$e*ge-(Ie*P+Le*W+je*ge),He=Ie*p+Xe*W+nt*ge-(Pe*p+rt*W+Qe*ge),We=Le*p+rt*P+at*ge-(qe*p+Xe*P+st*ge),Ze=je*p+Qe*P+st*W-($e*p+nt*P+at*W);return m*Ye+_*He+O*We+se*Ze}const $=Q;function ie(r,m,p){const h=p??new o(16),l=r[0],_=r[1],P=r[2],x=r[3],A=r[4+0],O=r[4+1],W=r[4+2],ce=r[4+3],re=r[8+0],se=r[8+1],ge=r[8+2],Me=r[8+3],we=r[12+0],Pe=r[12+1],Ie=r[12+2],Le=r[12+3],qe=m[0],$e=m[1],je=m[2],Xe=m[3],rt=m[4+0],Qe=m[4+1],nt=m[4+2],at=m[4+3],st=m[8+0],Ye=m[8+1],He=m[8+2],We=m[8+3],Ze=m[12+0],Je=m[12+1],pt=m[12+2],it=m[12+3];return h[0]=l*qe+A*$e+re*je+we*Xe,h[1]=_*qe+O*$e+se*je+Pe*Xe,h[2]=P*qe+W*$e+ge*je+Ie*Xe,h[3]=x*qe+ce*$e+Me*je+Le*Xe,h[4]=l*rt+A*Qe+re*nt+we*at,h[5]=_*rt+O*Qe+se*nt+Pe*at,h[6]=P*rt+W*Qe+ge*nt+Ie*at,h[7]=x*rt+ce*Qe+Me*nt+Le*at,h[8]=l*st+A*Ye+re*He+we*We,h[9]=_*st+O*Ye+se*He+Pe*We,h[10]=P*st+W*Ye+ge*He+Ie*We,h[11]=x*st+ce*Ye+Me*He+Le*We,h[12]=l*Ze+A*Je+re*pt+we*it,h[13]=_*Ze+O*Je+se*pt+Pe*it,h[14]=P*Ze+W*Je+ge*pt+Ie*it,h[15]=x*Ze+ce*Je+Me*pt+Le*it,h}const K=ie;function me(r,m,p){const h=p??ee();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function fe(r,m){const p=m??a.create();return p[0]=r[12],p[1]=r[13],p[2]=r[14],p}function _e(r,m,p){const h=p??a.create(),l=m*4;return h[0]=r[l+0],h[1]=r[l+1],h[2]=r[l+2],h}function ue(r,m,p,h){const l=h===r?h:N(r,h),_=p*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function de(r,m){const p=m??a.create(),h=r[0],l=r[1],_=r[2],P=r[4],x=r[5],A=r[6],O=r[8],W=r[9],ce=r[10];return p[0]=Math.sqrt(h*h+l*l+_*_),p[1]=Math.sqrt(P*P+x*x+A*A),p[2]=Math.sqrt(O*O+W*W+ce*ce),p}function De(r,m,p,h,l){const _=l??new o(16),P=Math.tan(Math.PI*.5-.5*r);if(_[0]=P/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=P,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const x=1/(p-h);_[10]=h*x,_[14]=h*p*x}else _[10]=-1,_[14]=-p;return _}function te(r,m,p,h=1/0,l){const _=l??new o(16),P=1/Math.tan(r*.5);if(_[0]=P/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=P,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=p;else{const x=1/(h-p);_[10]=p*x,_[14]=h*p*x}return _}function le(r,m,p,h,l,_,P){const x=P??new o(16);return x[0]=2/(m-r),x[1]=0,x[2]=0,x[3]=0,x[4]=0,x[5]=2/(h-p),x[6]=0,x[7]=0,x[8]=0,x[9]=0,x[10]=1/(l-_),x[11]=0,x[12]=(m+r)/(r-m),x[13]=(h+p)/(p-h),x[14]=l/(l-_),x[15]=1,x}function ye(r,m,p,h,l,_,P){const x=P??new o(16),A=m-r,O=h-p,W=l-_;return x[0]=2*l/A,x[1]=0,x[2]=0,x[3]=0,x[4]=0,x[5]=2*l/O,x[6]=0,x[7]=0,x[8]=(r+m)/A,x[9]=(h+p)/O,x[10]=_/W,x[11]=-1,x[12]=0,x[13]=0,x[14]=l*_/W,x[15]=0,x}function Ge(r,m,p,h,l,_=1/0,P){const x=P??new o(16),A=m-r,O=h-p;if(x[0]=2*l/A,x[1]=0,x[2]=0,x[3]=0,x[4]=0,x[5]=2*l/O,x[6]=0,x[7]=0,x[8]=(r+m)/A,x[9]=(h+p)/O,x[11]=-1,x[12]=0,x[13]=0,x[15]=0,_===1/0)x[10]=0,x[14]=l;else{const W=1/(_-l);x[10]=l*W,x[14]=_*l*W}return x}const ke=a.create(),X=a.create(),j=a.create();function V(r,m,p,h){const l=h??new o(16);return a.normalize(a.subtract(m,r,j),j),a.normalize(a.cross(p,j,ke),ke),a.normalize(a.cross(j,ke,X),X),l[0]=ke[0],l[1]=ke[1],l[2]=ke[2],l[3]=0,l[4]=X[0],l[5]=X[1],l[6]=X[2],l[7]=0,l[8]=j[0],l[9]=j[1],l[10]=j[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ve(r,m,p,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,j),j),a.normalize(a.cross(p,j,ke),ke),a.normalize(a.cross(j,ke,X),X),l[0]=ke[0],l[1]=ke[1],l[2]=ke[2],l[3]=0,l[4]=X[0],l[5]=X[1],l[6]=X[2],l[7]=0,l[8]=j[0],l[9]=j[1],l[10]=j[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ae(r,m,p,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,j),j),a.normalize(a.cross(p,j,ke),ke),a.normalize(a.cross(j,ke,X),X),l[0]=ke[0],l[1]=X[0],l[2]=j[0],l[3]=0,l[4]=ke[1],l[5]=X[1],l[6]=j[1],l[7]=0,l[8]=ke[2],l[9]=X[2],l[10]=j[2],l[11]=0,l[12]=-(ke[0]*r[0]+ke[1]*r[1]+ke[2]*r[2]),l[13]=-(X[0]*r[0]+X[1]*r[1]+X[2]*r[2]),l[14]=-(j[0]*r[0]+j[1]*r[1]+j[2]*r[2]),l[15]=1,l}function Ne(r,m){const p=m??new o(16);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=r[0],p[13]=r[1],p[14]=r[2],p[15]=1,p}function Re(r,m,p){const h=p??new o(16),l=m[0],_=m[1],P=m[2],x=r[0],A=r[1],O=r[2],W=r[3],ce=r[1*4+0],re=r[1*4+1],se=r[1*4+2],ge=r[1*4+3],Me=r[2*4+0],we=r[2*4+1],Pe=r[2*4+2],Ie=r[2*4+3],Le=r[3*4+0],qe=r[3*4+1],$e=r[3*4+2],je=r[3*4+3];return r!==h&&(h[0]=x,h[1]=A,h[2]=O,h[3]=W,h[4]=ce,h[5]=re,h[6]=se,h[7]=ge,h[8]=Me,h[9]=we,h[10]=Pe,h[11]=Ie),h[12]=x*l+ce*_+Me*P+Le,h[13]=A*l+re*_+we*P+qe,h[14]=O*l+se*_+Pe*P+$e,h[15]=W*l+ge*_+Ie*P+je,h}function Ue(r,m){const p=m??new o(16),h=Math.cos(r),l=Math.sin(r);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=h,p[6]=l,p[7]=0,p[8]=0,p[9]=-l,p[10]=h,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function ae(r,m,p){const h=p??new o(16),l=r[4],_=r[5],P=r[6],x=r[7],A=r[8],O=r[9],W=r[10],ce=r[11],re=Math.cos(m),se=Math.sin(m);return h[4]=re*l+se*A,h[5]=re*_+se*O,h[6]=re*P+se*W,h[7]=re*x+se*ce,h[8]=re*A-se*l,h[9]=re*O-se*_,h[10]=re*W-se*P,h[11]=re*ce-se*x,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function xe(r,m){const p=m??new o(16),h=Math.cos(r),l=Math.sin(r);return p[0]=h,p[1]=0,p[2]=-l,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=l,p[9]=0,p[10]=h,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function Ee(r,m,p){const h=p??new o(16),l=r[0*4+0],_=r[0*4+1],P=r[0*4+2],x=r[0*4+3],A=r[2*4+0],O=r[2*4+1],W=r[2*4+2],ce=r[2*4+3],re=Math.cos(m),se=Math.sin(m);return h[0]=re*l-se*A,h[1]=re*_-se*O,h[2]=re*P-se*W,h[3]=re*x-se*ce,h[8]=re*A+se*l,h[9]=re*O+se*_,h[10]=re*W+se*P,h[11]=re*ce+se*x,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function B(r,m){const p=m??new o(16),h=Math.cos(r),l=Math.sin(r);return p[0]=h,p[1]=l,p[2]=0,p[3]=0,p[4]=-l,p[5]=h,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function F(r,m,p){const h=p??new o(16),l=r[0*4+0],_=r[0*4+1],P=r[0*4+2],x=r[0*4+3],A=r[1*4+0],O=r[1*4+1],W=r[1*4+2],ce=r[1*4+3],re=Math.cos(m),se=Math.sin(m);return h[0]=re*l+se*A,h[1]=re*_+se*O,h[2]=re*P+se*W,h[3]=re*x+se*ce,h[4]=re*A-se*l,h[5]=re*O-se*_,h[6]=re*W-se*P,h[7]=re*ce-se*x,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function v(r,m,p){const h=p??new o(16);let l=r[0],_=r[1],P=r[2];const x=Math.sqrt(l*l+_*_+P*P);l/=x,_/=x,P/=x;const A=l*l,O=_*_,W=P*P,ce=Math.cos(m),re=Math.sin(m),se=1-ce;return h[0]=A+(1-A)*ce,h[1]=l*_*se+P*re,h[2]=l*P*se-_*re,h[3]=0,h[4]=l*_*se-P*re,h[5]=O+(1-O)*ce,h[6]=_*P*se+l*re,h[7]=0,h[8]=l*P*se+_*re,h[9]=_*P*se-l*re,h[10]=W+(1-W)*ce,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=v;function f(r,m,p,h){const l=h??new o(16);let _=m[0],P=m[1],x=m[2];const A=Math.sqrt(_*_+P*P+x*x);_/=A,P/=A,x/=A;const O=_*_,W=P*P,ce=x*x,re=Math.cos(p),se=Math.sin(p),ge=1-re,Me=O+(1-O)*re,we=_*P*ge+x*se,Pe=_*x*ge-P*se,Ie=_*P*ge-x*se,Le=W+(1-W)*re,qe=P*x*ge+_*se,$e=_*x*ge+P*se,je=P*x*ge-_*se,Xe=ce+(1-ce)*re,rt=r[0],Qe=r[1],nt=r[2],at=r[3],st=r[4],Ye=r[5],He=r[6],We=r[7],Ze=r[8],Je=r[9],pt=r[10],it=r[11];return l[0]=Me*rt+we*st+Pe*Ze,l[1]=Me*Qe+we*Ye+Pe*Je,l[2]=Me*nt+we*He+Pe*pt,l[3]=Me*at+we*We+Pe*it,l[4]=Ie*rt+Le*st+qe*Ze,l[5]=Ie*Qe+Le*Ye+qe*Je,l[6]=Ie*nt+Le*He+qe*pt,l[7]=Ie*at+Le*We+qe*it,l[8]=$e*rt+je*st+Xe*Ze,l[9]=$e*Qe+je*Ye+Xe*Je,l[10]=$e*nt+je*He+Xe*pt,l[11]=$e*at+je*We+Xe*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const d=f;function b(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=r[1],p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=r[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function y(r,m,p){const h=p??new o(16),l=m[0],_=m[1],P=m[2];return h[0]=l*r[0*4+0],h[1]=l*r[0*4+1],h[2]=l*r[0*4+2],h[3]=l*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=P*r[2*4+0],h[9]=P*r[2*4+1],h[10]=P*r[2*4+2],h[11]=P*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function k(r,m){const p=m??new o(16);return p[0]=r,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=r,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=r,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function E(r,m,p){const h=p??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:T,aim:V,axisRotate:f,axisRotation:v,cameraAim:ve,clone:q,copy:N,create:u,determinant:ne,equals:H,equalsApproximately:I,fromMat3:g,fromQuat:w,frustum:ye,frustumReverseZ:Ge,getAxis:_e,getScaling:de,getTranslation:fe,identity:ee,inverse:Q,invert:$,lookAt:Ae,mul:K,mulScalar:D,multiply:ie,multiplyScalar:M,negate:L,ortho:le,perspective:De,perspectiveReverseZ:te,rotate:d,rotateX:ae,rotateY:Ee,rotateZ:F,rotation:i,rotationX:Ue,rotationY:xe,rotationZ:B,scale:y,scaling:b,set:S,setAxis:ue,setTranslation:me,translate:Re,translation:Ne,transpose:Z,uniformScale:E,uniformScaling:k}}const si=new Map;function Gl(o){let a=si.get(o);return a||(a=Il(o),si.set(o,a)),a}function zl(o){const a=fs(o);function u(B,F,v,i){const f=new o(4);return B!==void 0&&(f[0]=B,F!==void 0&&(f[1]=F,v!==void 0&&(f[2]=v,i!==void 0&&(f[3]=i)))),f}const S=u;function g(B,F,v,i,f){const d=f??new o(4);return d[0]=B,d[1]=F,d[2]=v,d[3]=i,d}function w(B,F,v){const i=v??new o(4),f=F*.5,d=Math.sin(f);return i[0]=d*B[0],i[1]=d*B[1],i[2]=d*B[2],i[3]=Math.cos(f),i}function L(B,F){const v=F??a.create(3),i=Math.acos(B[3])*2,f=Math.sin(i*.5);return f>ze?(v[0]=B[0]/f,v[1]=B[1]/f,v[2]=B[2]/f):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function T(B,F){const v=De(B,F);return Math.acos(2*v*v-1)}function M(B,F,v){const i=v??new o(4),f=B[0],d=B[1],b=B[2],y=B[3],k=F[0],E=F[1],r=F[2],m=F[3];return i[0]=f*m+y*k+d*r-b*E,i[1]=d*m+y*E+b*k-f*r,i[2]=b*m+y*r+f*E-d*k,i[3]=y*m-f*k-d*E-b*r,i}const D=M;function N(B,F,v){const i=v??new o(4),f=F*.5,d=B[0],b=B[1],y=B[2],k=B[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r+k*E,i[1]=b*r+y*E,i[2]=y*r-b*E,i[3]=k*r-d*E,i}function q(B,F,v){const i=v??new o(4),f=F*.5,d=B[0],b=B[1],y=B[2],k=B[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r-y*E,i[1]=b*r+k*E,i[2]=y*r+d*E,i[3]=k*r-b*E,i}function I(B,F,v){const i=v??new o(4),f=F*.5,d=B[0],b=B[1],y=B[2],k=B[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r+b*E,i[1]=b*r-d*E,i[2]=y*r+k*E,i[3]=k*r-y*E,i}function H(B,F,v,i){const f=i??new o(4),d=B[0],b=B[1],y=B[2],k=B[3];let E=F[0],r=F[1],m=F[2],p=F[3],h=d*E+b*r+y*m+k*p;h<0&&(h=-h,E=-E,r=-r,m=-m,p=-p);let l,_;if(1-h>ze){const P=Math.acos(h),x=Math.sin(P);l=Math.sin((1-v)*P)/x,_=Math.sin(v*P)/x}else l=1-v,_=v;return f[0]=l*d+_*E,f[1]=l*b+_*r,f[2]=l*y+_*m,f[3]=l*k+_*p,f}function ee(B,F){const v=F??new o(4),i=B[0],f=B[1],d=B[2],b=B[3],y=i*i+f*f+d*d+b*b,k=y?1/y:0;return v[0]=-i*k,v[1]=-f*k,v[2]=-d*k,v[3]=b*k,v}function Z(B,F){const v=F??new o(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function Q(B,F){const v=F??new o(4),i=B[0]+B[5]+B[10];if(i>0){const f=Math.sqrt(i+1);v[3]=.5*f;const d=.5/f;v[0]=(B[6]-B[9])*d,v[1]=(B[8]-B[2])*d,v[2]=(B[1]-B[4])*d}else{let f=0;B[5]>B[0]&&(f=1),B[10]>B[f*4+f]&&(f=2);const d=(f+1)%3,b=(f+2)%3,y=Math.sqrt(B[f*4+f]-B[d*4+d]-B[b*4+b]+1);v[f]=.5*y;const k=.5/y;v[3]=(B[d*4+b]-B[b*4+d])*k,v[d]=(B[d*4+f]+B[f*4+d])*k,v[b]=(B[b*4+f]+B[f*4+b])*k}return v}function ne(B,F,v,i,f){const d=f??new o(4),b=B*.5,y=F*.5,k=v*.5,E=Math.sin(b),r=Math.cos(b),m=Math.sin(y),p=Math.cos(y),h=Math.sin(k),l=Math.cos(k);switch(i){case"xyz":d[0]=E*p*l+r*m*h,d[1]=r*m*l-E*p*h,d[2]=r*p*h+E*m*l,d[3]=r*p*l-E*m*h;break;case"xzy":d[0]=E*p*l-r*m*h,d[1]=r*m*l-E*p*h,d[2]=r*p*h+E*m*l,d[3]=r*p*l+E*m*h;break;case"yxz":d[0]=E*p*l+r*m*h,d[1]=r*m*l-E*p*h,d[2]=r*p*h-E*m*l,d[3]=r*p*l+E*m*h;break;case"yzx":d[0]=E*p*l+r*m*h,d[1]=r*m*l+E*p*h,d[2]=r*p*h-E*m*l,d[3]=r*p*l-E*m*h;break;case"zxy":d[0]=E*p*l-r*m*h,d[1]=r*m*l+E*p*h,d[2]=r*p*h+E*m*l,d[3]=r*p*l-E*m*h;break;case"zyx":d[0]=E*p*l-r*m*h,d[1]=r*m*l+E*p*h,d[2]=r*p*h-E*m*l,d[3]=r*p*l+E*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function $(B,F){const v=F??new o(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const ie=$;function K(B,F,v){const i=v??new o(4);return i[0]=B[0]+F[0],i[1]=B[1]+F[1],i[2]=B[2]+F[2],i[3]=B[3]+F[3],i}function me(B,F,v){const i=v??new o(4);return i[0]=B[0]-F[0],i[1]=B[1]-F[1],i[2]=B[2]-F[2],i[3]=B[3]-F[3],i}const fe=me;function _e(B,F,v){const i=v??new o(4);return i[0]=B[0]*F,i[1]=B[1]*F,i[2]=B[2]*F,i[3]=B[3]*F,i}const ue=_e;function de(B,F,v){const i=v??new o(4);return i[0]=B[0]/F,i[1]=B[1]/F,i[2]=B[2]/F,i[3]=B[3]/F,i}function De(B,F){return B[0]*F[0]+B[1]*F[1]+B[2]*F[2]+B[3]*F[3]}function te(B,F,v,i){const f=i??new o(4);return f[0]=B[0]+v*(F[0]-B[0]),f[1]=B[1]+v*(F[1]-B[1]),f[2]=B[2]+v*(F[2]-B[2]),f[3]=B[3]+v*(F[3]-B[3]),f}function le(B){const F=B[0],v=B[1],i=B[2],f=B[3];return Math.sqrt(F*F+v*v+i*i+f*f)}const ye=le;function Ge(B){const F=B[0],v=B[1],i=B[2],f=B[3];return F*F+v*v+i*i+f*f}const ke=Ge;function X(B,F){const v=F??new o(4),i=B[0],f=B[1],d=B[2],b=B[3],y=Math.sqrt(i*i+f*f+d*d+b*b);return y>1e-5?(v[0]=i/y,v[1]=f/y,v[2]=d/y,v[3]=b/y):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function j(B,F){return Math.abs(B[0]-F[0])<ze&&Math.abs(B[1]-F[1])<ze&&Math.abs(B[2]-F[2])<ze&&Math.abs(B[3]-F[3])<ze}function V(B,F){return B[0]===F[0]&&B[1]===F[1]&&B[2]===F[2]&&B[3]===F[3]}function ve(B){const F=B??new o(4);return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}const Ae=a.create(),Ne=a.create(),Re=a.create();function Ue(B,F,v){const i=v??new o(4),f=a.dot(B,F);return f<-.999999?(a.cross(Ne,B,Ae),a.len(Ae)<1e-6&&a.cross(Re,B,Ae),a.normalize(Ae,Ae),w(Ae,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(B,F,Ae),i[0]=Ae[0],i[1]=Ae[1],i[2]=Ae[2],i[3]=1+f,X(i,i))}const ae=new o(4),xe=new o(4);function Ee(B,F,v,i,f,d){const b=d??new o(4);return H(B,i,f,ae),H(F,v,f,xe),H(ae,xe,2*f*(1-f),b),b}return{create:u,fromValues:S,set:g,fromAxisAngle:w,toAxisAngle:L,angle:T,multiply:M,mul:D,rotateX:N,rotateY:q,rotateZ:I,slerp:H,inverse:ee,conjugate:Z,fromMat:Q,fromEuler:ne,copy:$,clone:ie,add:K,subtract:me,sub:fe,mulScalar:_e,scale:ue,divScalar:de,dot:De,lerp:te,length:le,len:ye,lengthSq:Ge,lenSq:ke,normalize:X,equalsApproximately:j,equals:V,identity:ve,rotationTo:Ue,sqlerp:Ee}}const ri=new Map;function Ul(o){let a=ri.get(o);return a||(a=zl(o),ri.set(o,a)),a}function Ol(o){function a(v,i,f,d){const b=new o(4);return v!==void 0&&(b[0]=v,i!==void 0&&(b[1]=i,f!==void 0&&(b[2]=f,d!==void 0&&(b[3]=d)))),b}const u=a;function S(v,i,f,d,b){const y=b??new o(4);return y[0]=v,y[1]=i,y[2]=f,y[3]=d,y}function g(v,i){const f=i??new o(4);return f[0]=Math.ceil(v[0]),f[1]=Math.ceil(v[1]),f[2]=Math.ceil(v[2]),f[3]=Math.ceil(v[3]),f}function w(v,i){const f=i??new o(4);return f[0]=Math.floor(v[0]),f[1]=Math.floor(v[1]),f[2]=Math.floor(v[2]),f[3]=Math.floor(v[3]),f}function L(v,i){const f=i??new o(4);return f[0]=Math.round(v[0]),f[1]=Math.round(v[1]),f[2]=Math.round(v[2]),f[3]=Math.round(v[3]),f}function T(v,i=0,f=1,d){const b=d??new o(4);return b[0]=Math.min(f,Math.max(i,v[0])),b[1]=Math.min(f,Math.max(i,v[1])),b[2]=Math.min(f,Math.max(i,v[2])),b[3]=Math.min(f,Math.max(i,v[3])),b}function M(v,i,f){const d=f??new o(4);return d[0]=v[0]+i[0],d[1]=v[1]+i[1],d[2]=v[2]+i[2],d[3]=v[3]+i[3],d}function D(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+i[0]*f,b[1]=v[1]+i[1]*f,b[2]=v[2]+i[2]*f,b[3]=v[3]+i[3]*f,b}function N(v,i,f){const d=f??new o(4);return d[0]=v[0]-i[0],d[1]=v[1]-i[1],d[2]=v[2]-i[2],d[3]=v[3]-i[3],d}const q=N;function I(v,i){return Math.abs(v[0]-i[0])<ze&&Math.abs(v[1]-i[1])<ze&&Math.abs(v[2]-i[2])<ze&&Math.abs(v[3]-i[3])<ze}function H(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function ee(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+f*(i[0]-v[0]),b[1]=v[1]+f*(i[1]-v[1]),b[2]=v[2]+f*(i[2]-v[2]),b[3]=v[3]+f*(i[3]-v[3]),b}function Z(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+f[0]*(i[0]-v[0]),b[1]=v[1]+f[1]*(i[1]-v[1]),b[2]=v[2]+f[2]*(i[2]-v[2]),b[3]=v[3]+f[3]*(i[3]-v[3]),b}function Q(v,i,f){const d=f??new o(4);return d[0]=Math.max(v[0],i[0]),d[1]=Math.max(v[1],i[1]),d[2]=Math.max(v[2],i[2]),d[3]=Math.max(v[3],i[3]),d}function ne(v,i,f){const d=f??new o(4);return d[0]=Math.min(v[0],i[0]),d[1]=Math.min(v[1],i[1]),d[2]=Math.min(v[2],i[2]),d[3]=Math.min(v[3],i[3]),d}function $(v,i,f){const d=f??new o(4);return d[0]=v[0]*i,d[1]=v[1]*i,d[2]=v[2]*i,d[3]=v[3]*i,d}const ie=$;function K(v,i,f){const d=f??new o(4);return d[0]=v[0]/i,d[1]=v[1]/i,d[2]=v[2]/i,d[3]=v[3]/i,d}function me(v,i){const f=i??new o(4);return f[0]=1/v[0],f[1]=1/v[1],f[2]=1/v[2],f[3]=1/v[3],f}const fe=me;function _e(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function ue(v){const i=v[0],f=v[1],d=v[2],b=v[3];return Math.sqrt(i*i+f*f+d*d+b*b)}const de=ue;function De(v){const i=v[0],f=v[1],d=v[2],b=v[3];return i*i+f*f+d*d+b*b}const te=De;function le(v,i){const f=v[0]-i[0],d=v[1]-i[1],b=v[2]-i[2],y=v[3]-i[3];return Math.sqrt(f*f+d*d+b*b+y*y)}const ye=le;function Ge(v,i){const f=v[0]-i[0],d=v[1]-i[1],b=v[2]-i[2],y=v[3]-i[3];return f*f+d*d+b*b+y*y}const ke=Ge;function X(v,i){const f=i??new o(4),d=v[0],b=v[1],y=v[2],k=v[3],E=Math.sqrt(d*d+b*b+y*y+k*k);return E>1e-5?(f[0]=d/E,f[1]=b/E,f[2]=y/E,f[3]=k/E):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function j(v,i){const f=i??new o(4);return f[0]=-v[0],f[1]=-v[1],f[2]=-v[2],f[3]=-v[3],f}function V(v,i){const f=i??new o(4);return f[0]=v[0],f[1]=v[1],f[2]=v[2],f[3]=v[3],f}const ve=V;function Ae(v,i,f){const d=f??new o(4);return d[0]=v[0]*i[0],d[1]=v[1]*i[1],d[2]=v[2]*i[2],d[3]=v[3]*i[3],d}const Ne=Ae;function Re(v,i,f){const d=f??new o(4);return d[0]=v[0]/i[0],d[1]=v[1]/i[1],d[2]=v[2]/i[2],d[3]=v[3]/i[3],d}const Ue=Re;function ae(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function xe(v,i,f){const d=f??new o(4),b=v[0],y=v[1],k=v[2],E=v[3];return d[0]=i[0]*b+i[4]*y+i[8]*k+i[12]*E,d[1]=i[1]*b+i[5]*y+i[9]*k+i[13]*E,d[2]=i[2]*b+i[6]*y+i[10]*k+i[14]*E,d[3]=i[3]*b+i[7]*y+i[11]*k+i[15]*E,d}function Ee(v,i,f){const d=f??new o(4);return X(v,d),$(d,i,d)}function B(v,i,f){const d=f??new o(4);return ue(v)>i?Ee(v,i,d):V(v,d)}function F(v,i,f){const d=f??new o(4);return ee(v,i,.5,d)}return{create:a,fromValues:u,set:S,ceil:g,floor:w,round:L,clamp:T,add:M,addScaled:D,subtract:N,sub:q,equalsApproximately:I,equals:H,lerp:ee,lerpV:Z,max:Q,min:ne,mulScalar:$,scale:ie,divScalar:K,inverse:me,invert:fe,dot:_e,length:ue,len:de,lengthSq:De,lenSq:te,distance:le,dist:ye,distanceSq:Ge,distSq:ke,normalize:X,negate:j,copy:V,clone:ve,multiply:Ae,mul:Ne,divide:Re,div:Ue,zero:ae,transformMat4:xe,setLength:Ee,truncate:B,midpoint:F}}const ii=new Map;function Vl(o){let a=ii.get(o);return a||(a=Ol(o),ii.set(o,a)),a}function Zs(o,a,u,S,g,w){return{mat3:Ll(o),mat4:Gl(a),quat:Ul(u),vec2:yi(S),vec3:fs(g),vec4:Vl(w)}}const{mat3:Bt,mat4:ht,quat:dt,vec2:oi,vec3:z,vec4:Wc}=Zs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Zs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Zs(Tl,Array,Array,Array,Array,Array);const ai=document.querySelector("#log");let yt=null,fn=null;function Pi(){if(yt)return yt;yt=document.createElement("div"),yt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",yt.appendChild(o),fn=document.createElement("div"),fn.className="ply-spinner-label",yt.appendChild(fn),yt.style.display="none",document.body.appendChild(yt),yt}function Xs(o){Pi(),fn&&o&&(fn.textContent=o),yt&&(yt.style.opacity="1",yt.style.display="flex")}function jt(o){Pi(),fn&&(fn.textContent=o)}function jn(){if(!yt)return;const o=yt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Si(o,a){if(!ai)return;const u=document.createElement("p");u.innerText=o,a&&Object.assign(u.style,a),ai.appendChild(u)}async function bt(o){console.log(o),Si(o)}async function Fl(o){console.error(o),Si(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Ei;function Ci(){Ei=performance.now()}function li(o){const a=performance.now()-Ei;bt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Nl(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function kn(o){return o+3&-4}const $l=2,ql=3,Wl=5,jl=6,Kn=7,ds=8,Hn=9,Yn=10;function ci(o){const a=new TextDecoder("ascii"),u=a.decode(new Uint8Array(o,0,4));if(u!=="NAT2")throw new Error(`NAT2 bad magic: '${u}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),g=4,w=S.getUint32(g+0,!0),L=S.getUint32(g+4,!0),T=S.getUint32(g+8,!0),M=S.getUint32(g+12,!0),D=S.getUint32(g+16,!0),N=S.getFloat32(g+20,!0),q=S.getUint32(g+24,!0),I=S.getUint32(g+28,!0),H=S.getFloat32(g+32,!0),ee=S.getFloat32(g+36,!0),Z=S.getFloat32(g+40,!0),Q=S.getUint32(g+44,!0),ne=S.getFloat32(g+48,!0),$=S.getFloat32(g+52,!0),ie=S.getUint32(g+56,!0),K=S.getUint32(g+60,!0),me=I===Hn||I===Yn,fe=me?K:0,_e=me?0:K&255,ue=me?0:K>>8&255,de=_e>0?_e:1;if(I===Wl||I===jl)throw new Error(`NAT2: paired-RVQ format=${I} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const De=I===Hn||I===Yn;if(I!==$l&&I!==ql&&I!==Kn&&I!==ds&&!De)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${I}`);if(w%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${Q}`);let te=g+64;const le=(ie+1)*4,ye=new Uint32Array(o.slice(te,te+le));te+=le;let Ge;if(de>1){const ae=(de+1)*4;if(te+ae>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ae} from ${te})`);Ge=new Uint32Array(o.slice(te,te+ae)),te+=ae}else Ge=new Uint32Array([0,w]);let ke=0;for(let ae=0;ae<de;ae++){const xe=Ge[ae+1]-Ge[ae];xe>ke&&(ke=xe)}if(De){const ae=fe&1?7:6,xe=D*ae*4;if(te+xe>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${xe} more bytes from offset ${te}, have ${o.byteLength-te}`);const Ee=new Float32Array(o.slice(te,te+xe));te+=xe;const B=Math.max(1,fe>>8&255),F=[];let v=0;for(let y=0,k=w,E=Q;y<B;y++,k>>=1,E>>=1){const r=Math.max(1,k>>2)*Math.max(1,E>>2)*16;F.push(r),v+=r}const i=o.byteLength-te;if(i<v)throw new Error(`NAT2 probe atlas truncated: need ${v} bytes for ${w}x${Q} x${B} mips, have ${i}`);const f=[];let d=te;for(const y of F)f.push(new Uint8Array(o.slice(d,d+y))),d+=y;const b=f[0];return{width:w,height:L,channels:T,kernel_type:M,num_rects:D,uv_extent:N,sb_number:q,format:I,sh_bias:H,res_bias:ee,compact_mult:Z,layer_h:Q,atlas_scale:ne,atlas_offset:$,n_layers:ie,n_cols:de,layer_cuts:ye,column_cuts:Ge,slice_width:ke,rects_expanded:Ee,atlas_bytes:b,mip_bytes:f,probe_mode:fe&1?2:1}}const X=D*4*4;if(te+X>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${X} more bytes from offset ${te}, have ${o.byteLength-te}`);const j=new Float32Array(o.slice(te,te+X));te+=X;const V=new Float32Array(D*5);for(let ae=0;ae<D;ae++){const xe=j[ae*4+0],Ee=j[ae*4+1],B=j[ae*4+2],F=j[ae*4+3];let v=0;for(let y=1;y<=ie&&ye[y]<=Ee;y++)v=y;let i=0;for(let y=1;y<=de&&Ge[y]<=xe;y++)i=y;const f=Ee-ye[v],d=xe-Ge[i],b=i*ie+v;V[ae*5+0]=d,V[ae*5+1]=f,V[ae*5+2]=B,V[ae*5+3]=F,V[ae*5+4]=b}let ve,Ae;const Ne=de,Ue=w/4*16;if(I===Kn||I===ds){if(te+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ae=I===Kn?"BCCB":"ACCB",xe=a.decode(new Uint8Array(o,te,4));if(xe!==ae)throw new Error(`NAT2 typeD bad sub-magic: expected '${ae}' got '${xe}'`);const Ee=S.getUint32(te+4,!0),B=S.getUint32(te+8,!0),F=S.getUint32(te+12,!0),v=S.getUint32(te+16,!0),i=S.getUint32(te+20,!0);if(Ee!==1)throw new Error(`NAT2 BCCB unsupported version ${Ee}`);if(F!==L/4||v!==w/4||i!==F*v)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${L}, sub-header ${v}×${F} (${i} blocks)`);te+=24;const f=B*16;if(te+f>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${f}, have ${o.byteLength-te})`);const d=new Uint8Array(o,te,f);te+=f;const b=i*2;if(te+b>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${b}, have ${o.byteLength-te})`);const y=new Uint16Array(o.slice(te,te+b));te+=b;const k=new Uint8Array(i*16);for(let E=0;E<i;E++){const r=y[E]*16;k.set(d.subarray(r,r+16),E*16)}if(ve=k,ue>1){Ae=[k];for(let E=1;E<ue;E++){if(te+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${E} sub-header`);const r=a.decode(new Uint8Array(o,te,4));if(r!==ae)throw new Error(`NAT2 mip ${E}: bad sub-magic '${r}'`);const m=S.getUint32(te+8,!0),p=S.getUint32(te+16,!0),h=S.getUint32(te+20,!0);if(p!==E)throw new Error(`NAT2 mip section order: expected level ${E}, got ${p}`);te+=24;let l=0;for(let A=0;A<Ne;A++)for(let O=0;O<ie;O++){const W=ki(E,Ge[A+1]-Ge[A],ye[O+1]-ye[O],ke,Q);l+=(W.cw>>2)*(W.ch>>2)}if(l!==h)throw new Error(`NAT2 mip ${E}: ${h} blocks, loader expects ${l}`);if(te+m*16+h*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${E}`);const _=new Uint8Array(o,te,m*16);te+=m*16;const P=new Uint16Array(o.slice(te,te+h*2));te+=h*2;const x=new Uint8Array(h*16);for(let A=0;A<h;A++){const O=P[A]*16;x.set(_.subarray(O,O+16),A*16)}Ae.push(x)}}}else{let ae=0;for(let xe=0;xe<ie;xe++){const Ee=ye[xe+1]-ye[xe];if(Ee%4!==0)throw new Error(`NAT2 BC7 layer ${xe} rows ${Ee} not 4-aligned`);ae+=Ee/4*Ue}if(te+ae>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ae} more bytes from offset ${te}, have ${o.byteLength-te}`);ve=new Uint8Array(o.slice(te,te+ae))}return{width:w,height:L,channels:T,kernel_type:M,num_rects:D,uv_extent:N,sb_number:q,format:I,sh_bias:H,res_bias:ee,compact_mult:Z,layer_h:Q,atlas_scale:ne,atlas_offset:$,n_layers:ie,n_cols:de,layer_cuts:ye,column_cuts:Ge,slice_width:ke,rects_expanded:V,atlas_bytes:ve,...Ae?{mip_bytes:Ae}:{}}}function ki(o,a,u,S,g){const w=T=>T+3>>2<<2,L=1<<o;return{cw:Math.min(w(Math.max(1,S>>o)),w(Math.ceil(a/L))),ch:Math.min(w(Math.max(1,g>>o)),w(Math.ceil(u/L)))}}const Kl=32;function ui(o,a,u){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,g,w,L;if(a.format===2||a.format===Kn||a.format===Hn){if(!o.features.has("texture-compression-bc"))return bt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;L=a.format===Hn?"BC7 atlas (proberes: shared probe texture)":a.format===Kn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:g,sampler:w}=di(o,a,"bc7-rgba-unorm",L)}else if(a.format===3||a.format===ds||a.format===Yn){if(!o.features.has("texture-compression-astc"))return bt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;L=a.format===Yn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===ds?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:g,sampler:w}=di(o,a,"astc-4x4-unorm",L)}else return bt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:T}=a,M=o.createBuffer({label:"atlas rects (5-stride)",size:kn(T.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(M,0,T);const D=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return us(o,D,a,u),{texture:S,view:g,sampler:w,rectsBuffer:M,texParamsBuffer:D,meta:a}}function di(o,a,u,S){const{width:g,layer_h:w,n_layers:L,n_cols:T,layer_cuts:M,column_cuts:D,slice_width:N,atlas_bytes:q}=a,H=g/4*16,ee=o.limits.maxTextureDimension2D;if(w>ee||N>ee)throw new Error(`⚠️  atlas slice dims ${N}x${w} exceed maxTextureDimension2D=${ee}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Z=T*L;if(Z>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${T} cols × ${L} layers = ${Z} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=a.mip_bytes??[q],ne=Q.length,$=o.createTexture({label:S,size:{width:N,height:w,depthOrArrayLayers:Z},mipLevelCount:ne,sampleCount:1,dimension:"2d",format:u,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let fe=0;fe<T;fe++){const _e=D[fe]/4,ue=(D[fe+1]-D[fe])/4;for(let de=0;de<L;de++){const De=M[de]/4,te=(M[de+1]-M[de])/4,le=fe*L+de,ye=De*H+_e*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:le},aspect:"all"},q,{offset:ye,bytesPerRow:H,rowsPerImage:te},{width:ue*4,height:te*4,depthOrArrayLayers:1})}}const ie=a.format===Hn||a.format===Yn;for(let fe=1;fe<ne&&!ie;fe++){let _e=0;for(let ue=0;ue<T;ue++)for(let de=0;de<L;de++){const{cw:De,ch:te}=ki(fe,D[ue+1]-D[ue],M[de+1]-M[de],N,w);o.queue.writeTexture({texture:$,mipLevel:fe,origin:{x:0,y:0,z:ue*L+de},aspect:"all"},Q[fe],{offset:_e,bytesPerRow:(De>>2)*16,rowsPerImage:te>>2},{width:De,height:te,depthOrArrayLayers:1}),_e+=(De>>2)*(te>>2)*16}}for(let fe=1;fe<ne&&ie;fe++){const _e=Math.max(1,N>>fe),ue=Math.max(1,w>>fe);o.queue.writeTexture({texture:$,mipLevel:fe,origin:{x:0,y:0,z:0},aspect:"all"},Q[fe],{offset:0,bytesPerRow:Math.max(1,_e>>2)*16,rowsPerImage:Math.max(1,ue>>2)},{width:_e,height:ue,depthOrArrayLayers:1})}ne>1&&console.log(`[atlas] ${ne} mip levels uploaded (${ie?"trilinear":"per-surfel integer level"})`);const K=$.createView({label:`${S} view`,dimension:"2d-array"}),me=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:ne>1&&ie?"linear":"nearest"});return{texture:$,view:K,sampler:me}}function us(o,a,u,S,g=1){var D;const w=new ArrayBuffer(32),L=new Uint32Array(w),T=new Float32Array(w);L[0]=S?1:0,T[1]=u.atlas_scale,T[2]=u.atlas_offset,T[3]=u.res_bias,L[4]=u.probe_mode?u.probe_mode|0:0,L[5]=u.width|0;const M=(((D=u.mip_bytes)==null?void 0:D.length)??1)>1;L[6]=M&&g!==0?1:0,T[7]=u.uv_extent,o.queue.writeBuffer(a,0,w)}async function $s(o,a){bt(`loading ply file from File... : ${o.name}`),Xs("downloading PLY...");const u=await o.arrayBuffer();try{return await Mi(u,a)}finally{jn()}}async function Hl(o,a){bt(`loading ply file from URL... : ${o}`),Xs("downloading PLY...");try{Ci();const u=new URL(o,self.location.href).href;return await Mi({url:u},a)}finally{jn()}}function Yl(o){return new Promise((a,u)=>{const S=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});S.onmessage=g=>{const w=g.data;if((w==null?void 0:w.type)==="error"){Fl(`PLY worker error: ${w.message??"unknown error"}`),S.terminate(),u(new Error(w.message??"Worker error"));return}else if((w==null?void 0:w.type)==="download_progress"){const L=w.totalBytes,T=w.loadedBytes/(1024*1024),M=L?L/(1024*1024):void 0,D=(w.speedBps??0)/(1024*1024),N=L?Math.min(99,Math.floor(w.loadedBytes/L*100)):void 0,q=M?`total ${M.toFixed(1)} MB`:"total -- MB",I=M&&N!==void 0?`${T.toFixed(1)} MB downloaded (${N}%)`:`${T.toFixed(1)} MB downloaded`,H=`${D.toFixed(2)} MB/s`;jt(`downloading PLY ...
${q}, ${I}
${H}`);return}else if((w==null?void 0:w.type)==="fetched"){bt(`💾 Fetched (${w.byteLength} bytes)`),li("Download"),jt("parsing PLY..."),Ci();return}else if((w==null?void 0:w.type)==="parse_progress"){const L=w.total??0,T=w.read??0,M=L>0?Math.floor(T/L*100):0;jt(`parsing PLY ...
${T}/${L} surfels (${M}%)`);return}else(w==null?void 0:w.type)==="done"&&(S.terminate(),li("Parse"),a(w))},S.onerror=g=>{S.terminate(),u(g)},o instanceof ArrayBuffer?(jt("parsing PLY..."),S.postMessage({type:"start",plyBuffer:o},[o])):S.postMessage({type:"start_url",url:o.url})})}async function Mi(o,a){var ee,Z,Q,ne,$,ie,K,me,fe,_e,ue,de;const u=await Yl(o),S=u.num_points,g=u.K,w=u.feature_mode??0,L=u.sh_bias,T=u.kernel_type,M=u.surfelBuffer,D=u.svParamsBuffer;bt(`🪐 Total surfels: ${S}, mode=${w===1?"SB":"SV"}, K=${g}, sh_bias=${L}, kernel_type=${T}`);const q=a.createBuffer({label:"surfel input buffer",size:kn(S*Kl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(q,0,M);const I=D.byteLength>0?D.byteLength:16,H=a.createBuffer({label:w===1?"color_params buffer (SB)":"color_params buffer (SV)",size:kn(I),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return D.byteLength>0&&a.queue.writeBuffer(H,0,D),{num_points:S,K:g,feature_mode:w,sh_bias:L,kernel_type:T,surfel_buffer:q,surfel_data:new Float32Array(M),sv_params_buffer:H,bbox:u.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:u.centroid??[((((Z=(ee=u.bbox)==null?void 0:ee.min)==null?void 0:Z[0])??-1)+(((ne=(Q=u.bbox)==null?void 0:Q.max)==null?void 0:ne[0])??1))/2,((((ie=($=u.bbox)==null?void 0:$.min)==null?void 0:ie[1])??-1)+(((me=(K=u.bbox)==null?void 0:K.max)==null?void 0:me[1])??1))/2,((((_e=(fe=u.bbox)==null?void 0:fe.min)==null?void 0:_e[2])??-1)+(((de=(ue=u.bbox)==null?void 0:ue.max)==null?void 0:de[2])??1))/2]}}const Bi="BITYMI01",Zl=0,Xl=1,Ql=2,Jl=3,ec=4,tc=5;function Ti(o){const a=new Uint8Array(o),u=new TextDecoder().decode(a.subarray(0,8));if(u!==Bi)throw new Error(`Not a BITYMI bundle (bad magic '${u}')`);const S=new DataView(o),g=S.getUint32(8,!0),w=12,L=20;let T=null,M=null,D=null;for(let N=0;N<g;N++){const q=w+N*L,I=S.getUint32(q+0,!0),H=Number(S.getBigUint64(q+4,!0)),ee=Number(S.getBigUint64(q+12,!0)),Z=a.slice(H,H+ee).buffer;I===Zl||I===Xl||I===tc?T=Z:I===Ql?M=Z:(I===Jl||I===ec)&&(D=Z)}if(T===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:T,camerasBuffer:M,atlasBuffer:D}}async function pi(o,a){var L;const u=await fetch(o);if(!u.ok)throw new Error(`fetch failed: ${u.status} ${u.statusText}`);const S=(()=>{const T=u.headers.get("content-length");return T&&parseInt(T,10)||void 0})(),g=(L=u.body)==null?void 0:L.getReader();let w;if(!g)w=await u.arrayBuffer(),a&&a(w.byteLength,S,0);else{const T=[];let M=0,D=performance.now(),N=0;for(;;){const{done:H,value:ee}=await g.read();if(H)break;T.push(ee),M+=ee.byteLength;const Z=performance.now();if(Z-D>=150&&a){const Q=(M-N)/((Z-D)/1e3);a(M,S,Q),D=Z,N=M}}const q=new Uint8Array(M);let I=0;for(const H of T)q.set(H,I),I+=H.byteLength;w=q.buffer,a&&a(M,S,0)}return w.byteLength>=8&&new TextDecoder().decode(new Uint8Array(w,0,8))===Bi?{bundle:Ti(w),rawPly:null}:{bundle:null,rawPly:w}}var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(u,S){S(a)})(nc,function(u){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class w{constructor(e){this.target=e}}class L extends w{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class T extends w{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class M extends w{constructor(e,t){super(e),this.expanded=t}}class D extends w{constructor(e,t){super(e),this.index=t}}function N(n){return n}function q(n){return n==null}function I(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function H(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const ee={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Z{static alreadyDisposed(){return new Z({type:"alreadydisposed"})}static notBindable(){return new Z({type:"notbindable"})}static propertyNotFound(e){return new Z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=ee[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw Z.notBindable();if(!(e in s))throw Z.propertyNotFound(e);s[e]=t}}class ne extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new w(this))}),this}}class ${constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const ie="tp";function K(n){return(t,s)=>[ie,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function me(n,e){return t=>e(n(t))}function fe(n){return n.rawValue}function _e(n,e){n.emitter.on("change",me(fe,e)),e(n.rawValue)}function ue(n,e,t){_e(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function De(n,e){return t=>{de(n,e,t)}}function te(n,e){_e(n,t=>{e.textContent=t??""})}const le=K("btn");class ye{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(le()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(le("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(le("t")),te(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Ge{constructor(e,t){this.emitter=new $,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ye(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ke{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,C)=>c===C,this.emitter=new $,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,C=this.rawValue_;this.equals_(C,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:C,rawValue:c,sender:this}))}}class X{constructor(e){this.emitter=new $,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function j(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new X(n):new ke(n,e)}class V{constructor(e){this.emitter=new $,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:j(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new V(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ve(n,e){const s=Object.keys(e).reduce((c,C)=>{if(c===void 0)return;const R=e[C],J=R(n[C]);return J.succeeded?Object.assign(Object.assign({},c),{[C]:J.value}):void 0},{});return s}function Ae(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Ne(n){return n===null?!1:typeof n=="object"}function Re(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ue(n){return{custom:e=>Re(e)(n),boolean:Re(e=>typeof e=="boolean"?e:void 0)(n),number:Re(e=>typeof e=="number"?e:void 0)(n),string:Re(e=>typeof e=="string"?e:void 0)(n),function:Re(e=>typeof e=="function"?e:void 0)(n),constant:e=>Re(t=>t===e?e:void 0)(n),raw:Re(e=>e)(n),object:e=>Re(t=>{if(Ne(t))return ve(t,e)})(n),array:e=>Re(t=>{if(Array.isArray(t))return Ae(t,e)})(n)}}const ae={optional:Ue(!0),required:Ue(!1)};function xe(n,e){const t=ae.required.object(e)(n);return t.succeeded?t.value:void 0}function Ee(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class F{constructor(e){this.value_=e}static create(e){return[new F(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=K("");function i(n,e){return De(n,v(void 0,e))}class f extends V{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=F.create(j(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const C=e??{};return new f(V.createCore({disabled:(t=C.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=C.hidden)!==null&&s!==void 0?s:!1,parent:(c=C.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){_e(this.globalDisabled_,i(e,"disabled")),ue(this,"hidden",i(e,"hidden"))}bindDisabled(e){_e(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){_e(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=K(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ee({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function p(n){return n.ontouchstart!==void 0}function h(){return globalThis}function l(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const P={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function x(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=P[e],t}function A(n,e,t){n.insertBefore(e,n.children[t])}function O(n){n.parentElement&&n.parentElement.removeChild(n)}function W(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ce(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function re(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=K("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,C)=>{C>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(se("l")),ue(t.props,"label",C=>{q(C)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),ce(s),s.appendChild(ge(e,C)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(se("v")),this.element.appendChild(c),this.valueElement=c}}class we extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Pe={id:"button",type:"blade",accept(n){const e=ae,t=xe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new we(n.document,{blade:n.blade,props:V.fromObject({label:n.params.label}),valueController:new Ge(n.document,{props:V.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof we)||!(n.controller.valueController instanceof Ge)?null:new ne(n.controller)}};class Ie extends k{constructor(e){super(e),this.value=e.value}}function Le(){return new V({positions:j([],{equals:I})})}class qe extends V{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=V.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!q(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ue(this,"expanded",s),ue(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function $e(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function je(n,e){e.style.height=n.styleHeight}function Xe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),q(n.get("expandedHeight"))){const t=$e(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class rt extends g{constructor(e,t){super(e),this.rackApi_=t}}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function at(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ye{constructor(e){this.emitter=new $,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(C=>{this.cache_.add(C)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class He extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new $,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new L(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class We extends we{constructor(e,t){super(e,t),this.binding=t.binding}}class Ze extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new $,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new T(this,t,this.controller_.binding.target.presetKey)})}}class Je extends we{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function pt(n){return n instanceof gt?n.apiSet_:n instanceof rt?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Z.shouldNeverHappen();return t}function It(n,e,t){if(!Q.isBindable(n))throw Z.notBindable();return new Q(n,e,t)}class gt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new $,this.apiSet_=new Ye(pt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,R=this.pool_.createInput(C,It(e,t,c.presetKey),c),J=new He(R);return this.add(J,c.index)}addMonitor(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,R=this.pool_.createMonitor(C,It(e,t),c),J=new Ze(R);return this.add(J,c.index)}addFolder(e){return nt(this,e)}addButton(e){return Qe(this,e)}addSeparator(e){return at(this,e)}addTab(e){return st(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof We){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new L(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new L(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Je))throw Z.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new T(t,s.target.read(),s.target.presetKey)})}}class Et extends rt{constructor(e,t){super(e,new gt(e.rackController,t)),this.emitter_=new $,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new M(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Tt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Kt{constructor(e,t){const s=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Pt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof We&&s.binding===e)return s}return null}function Ut(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Je&&s.binding===e)return s}return null}function _n(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Ht(n){return n instanceof et?n.rack:n instanceof Tt?n.rackController.rack:null}function mn(n){const e=Ht(n);return e?e.bcSet_:null}class ot{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new $,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ye(mn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),H(e,"parent")?e.parent=this:(e.parent_=this,Ee({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){H(e,"parent")?e.parent=null:(e.parent_=null,Ee({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof We)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Je)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Ht(s);if(c){const C=c.emitter;C.on("layout",this.onDescendantLayout_),C.on("inputchange",this.onDescendantInputChange_),C.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof We)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Je)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Ht(s);if(c){const C=c.emitter;C.off("layout",this.onDescendantLayout_),C.off("inputchange",this.onDescendantInputChange_),C.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const C=[];c===t&&(C.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&C.push("veryfirst")),c===s&&(C.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&C.push("verylast")),c.blade.set("positions",C)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Pt(this.find(We),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ut(this.find(Je),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=_n(this.find(Ie),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class et extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Kt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new ot({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&A(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&O(e.bladeController.view.element)}}const Zn=K("cnt");class ms{constructor(e,t){var s;this.className_=K((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Zn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ue(this.foldable_,"completed",De(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ue(t.props,"title",Te=>{q(Te)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const C=e.createElement("div");C.classList.add(this.className_("i")),this.element.appendChild(C);const R=e.createElement("div");R.classList.add(this.className_("t")),te(t.props.value("title"),R),this.buttonElement.appendChild(R),this.titleElement=R;const J=e.createElement("div");J.classList.add(this.className_("m")),this.buttonElement.appendChild(J);const Be=t.containerElement;Be.classList.add(this.className_("c")),this.element.appendChild(Be),this.containerElement=Be}}class Mn extends Tt{constructor(e,t){var s;const c=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),C=new et(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:C,view:new ms(e,{containerElement:C.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Xn={id:"folder",type:"blade",accept(n){const e=ae,t=xe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Mn(n.document,{blade:n.blade,expanded:n.params.expanded,props:V.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Mn?new Et(n.controller,n.pool):null}};class Gt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Bn extends g{}const Tn=K("spr");class Qn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Tn("r")),this.element.appendChild(s)}}class An extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Qn(e,{viewProps:t.viewProps})}))}}const Dn={id:"separator",type:"blade",accept(n){const t=xe(n,{view:ae.required.constant("separator")});return t?{params:t}:null},controller(n){return new An(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof An?new Bn(n.controller):null}},Yt=K("tbi");class vn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yt()),t.viewProps.bindClassModifiers(this.element),ue(t.props,"selected",C=>{C?this.element.classList.add(Yt(void 0,"sel")):this.element.classList.remove(Yt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Yt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Yt("t")),te(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class bn{constructor(e,t){this.emitter=new $,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new vn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class G{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new bn(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new et(e,{blade:Le(),viewProps:f.create()}),this.props=t.props,ue(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Y{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class oe extends rt{constructor(e,t){super(e,new gt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new $,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new G(t,{itemProps:V.fromObject({selected:!1,title:e.title}),props:V.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Z.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Z.shouldNeverHappen();const s=new Y(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new D(this,e.rawValue)})}}const pe=-1;class Ce{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=j(!0),this.selectedIndex=j(pe),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=pe,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const he=K("tab");class be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(he(),Zn()),t.viewProps.bindClassModifiers(this.element),_e(t.empty,De(this.element,he(void 0,"nop")));const s=e.createElement("div");s.classList.add(he("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(he("i")),this.element.appendChild(c);const C=t.contentsElement;C.classList.add(he("c")),this.element.appendChild(C),this.contentsElement=C}}class Se extends Tt{constructor(e,t){const s=new et(e,{blade:t.blade,viewProps:t.viewProps}),c=new Ce;super({blade:t.blade,rackController:s,view:new be(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ye(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;A(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;O(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Ke={id:"tab",type:"blade",accept(n){const e=ae,t=xe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Se(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new G(n.document,{itemProps:V.fromObject({selected:!1,title:t.title}),props:V.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Se?new oe(n.controller,n.pool):null}};function _t(n,e){const t=n.accept(e.params);if(!t)return null;const s=ae.optional.boolean(e.params.disabled).value,c=ae.optional.boolean(e.params.hidden).value;return n.controller({blade:Le(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class wt{constructor(){this.disabled=!1,this.emitter=new $}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class St{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new $,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ct{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new $,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function At(n,e){for(;n.length<e;)n.push(void 0)}function lt(n){const e=[];return At(e,n),j(e)}function rn(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function vt(n,e){const t=[...rn(n),e];return t.length>n.length?t.splice(0,t.length-n.length):At(t,n.length),t}class Rn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new $,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=vt(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Dt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Rt(n,e){if(n instanceof e)return n;if(n instanceof Dt){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Ot{constructor(e){this.values=V.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class ct{constructor(e){this.values=V.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Zt{constructor(e){this.values=V.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return q(s)||(c=Math.max(c,s)),q(t)||(c=Math.min(c,t)),c}}class Vt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Lt=K("lst");class gn{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Lt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Lt("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Lt("m")),c.appendChild(x(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ue(this.props_,"options",C=>{W(this.selectElement),C.forEach(R=>{const J=e.createElement("option");J.textContent=R.text,this.selectElement.appendChild(J)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class zt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new gn(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Jn=K("pop");class Ln{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element),_e(t.shows,De(this.element,Jn(void 0,"v")))}}class Js{constructor(e,t){this.shows=j(!1),this.viewProps=t.viewProps,this.view=new Ln(e,{shows:this.shows,viewProps:this.viewProps})}}const er=K("txt");class Ui{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(er()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(er("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class es{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ui(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=c),this.view.refresh()}}function Oi(n){return String(n)}function tr(n){return n==="false"?!1:!!n}function nr(n){return Oi(n)}class Vi{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Fi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ni{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Fi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const $i={"+":n=>n,"-":n=>-n,"~":n=>~n};class qi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=$i[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function vs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function In(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Gn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=Gn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Gn(n,e);return c===""?"":s+c}function bs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=ji(n,e);return s===""?"":t+s}function sr(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Wi(n,e);return e+=s.length,s===""?"":s+Gn(n,e)}function Ki(n,e){const t=sr(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Gn(n,e);return e+=c.length,t+s+c+bs(n,e)}function Hi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Gn(n,e);return e+=s.length,s===""?"":t+s+bs(n,e)}function Yi(n,e){const t=sr(n,e);return e+=t.length,t===""?"":t+bs(n,e)}const Zi=vs([Ki,Hi,Yi]);function Xi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Xi(n,e);return s===""?"":t+s}function Ji(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function eo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ji(n,e);return s===""?"":t+s}function to(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function no(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=to(n,e);return s===""?"":t+s}const so=vs([Qi,eo,no]),ro=vs([so,Zi]);function io(n,e){const t=ro(n,e);return e+=t.length,t===""?null:{evaluable:new Vi(t),cursor:e}}function oo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=ir(n,e);if(!s)return null;e=s.cursor,e+=In(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function ao(n,e){var t;return(t=io(n,e))!==null&&t!==void 0?t:oo(n,e)}function rr(n,e){const t=ao(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=rr(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new qi(s,c.evaluable)}):null}function lo(n,e,t){t+=In(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=In(e,t).length,{cursor:t,operator:s}):null}function co(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let C=c.evaluable;for(;;){const R=lo(e,t,s);if(!R)break;s=R.cursor;const J=n(t,s);if(!J)return null;s=J.cursor,C=new Ni(R.operator,C,J.evaluable)}return C?{cursor:s,evaluable:C}:null}}const uo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>co(n,e),rr);function ir(n,e){return e+=In(n,e).length,uo(n,e)}function po(n){const e=ir(n,0);return!e||e.cursor+In(n,e.cursor).length!==n.length?null:e.evaluable}function Ft(n){var e;const t=po(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function or(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Ft(n);if(!q(e))return e}return 0}function ho(n){return String(n)}function mt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const fo=mt(0);function ts(n){return fo(n)+"%"}function ar(n){return String(n)}function gs(n){return n}function zn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function C(R){c||(c=!0,R(),c=!1)}n.emitter.on("change",R=>{C(()=>{e.setRawValue(t(n,e),R.options)})}),e.emitter.on("change",R=>{C(()=>{n.setRawValue(s(n,e),R.options)}),C(()=>{e.setRawValue(t(n,e),R.options)})}),C(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function xt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Un(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Nt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function _o(n){return n==="ArrowUp"||n==="ArrowDown"}function lr(n){return _o(n)||n==="ArrowLeft"||n==="ArrowRight"}function ws(n,e){var t,s;const c=e.ownerDocument.defaultView,C=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+C.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+C.top)}}class on{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new $,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ws(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ws(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ws(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function tt(n,e,t,s,c){const C=(n-e)/(t-e);return s+C*(c-s)}function cr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function ur(n,e){return(n%e+e)%e}const kt=K("txt");class mo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(kt(),kt(void 0,"num")),t.arrayPosition&&this.element.classList.add(kt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(kt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(kt()),this.inputElement.classList.add(kt("i"));const c=e.createElement("div");c.classList.add(kt("k")),this.element.appendChild(c),this.knobElement=c;const C=e.createElementNS(E,"svg");C.classList.add(kt("g")),this.knobElement.appendChild(C);const R=e.createElementNS(E,"path");R.classList.add(kt("gb")),C.appendChild(R),this.guideBodyElem_=R;const J=e.createElementNS(E,"path");J.classList.add(kt("gh")),C.appendChild(J),this.guideHeadElem_=J;const Be=e.createElement("div");Be.classList.add(K("tt")()),this.knobElement.appendChild(Be),this.tooltipElem_=Be,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(kt(void 0,"drg"));return}this.element.classList.add(kt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const C=this.props_.get("formatter");this.tooltipElem_.textContent=C(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class On{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=j(null),this.view=new mo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new on(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),C=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let R=e;return c!==void 0&&(R=Math.max(R,c)),C!==void 0&&(R=Math.min(R,C)),R}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=xt(this.baseStep_,Un(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){xt(this.baseStep_,Un(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const xs=K("sld");class vo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(xs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(xs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(xs("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(tt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class bo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new vo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(tt(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=xt(this.baseStep_,Nt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){xt(this.baseStep_,Nt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ys=K("sldtxt");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ys());const s=e.createElement("div");s.classList.add(ys("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ys("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Ps{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new bo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new On(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new go(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Vn(n,e){n.write(e)}function ns(n){const e=ae;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function dr(n){if(n==="inline"||n==="popup")return n}function Xt(n){const e=ae;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function pr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Ss(n){return q(n)?null:new ct(pr(n))}function wo(n){const e=n?Rt(n,Vt):null;return e?e.step:null}function ss(n,e){const t=n&&Rt(n,Vt);return t?cr(t.step):Math.max(cr(e),2)}function wn(n){const e=wo(n);return e??1}function xn(n,e){var t;const s=n&&Rt(n,Vt),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const rs=K("ckb");class xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(rs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(rs("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(rs("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const C=e.createElement("div");C.classList.add(rs("w")),s.appendChild(C);const R=x(e,"check");C.appendChild(R),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class yo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new xo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Po(n){const e=[],t=Ss(n.options);return t&&e.push(t),new Dt(e)}const So={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{options:ae.optional.custom(ns)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Po(n.params),writer:n=>Vn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Rt(s,ct);return c?new zt(e,{props:new V({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new yo(e,{value:t,viewProps:n.viewProps})}},an=K("col");class Eo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(an()),t.foldable.bindExpandedClass(this.element,an(void 0,"expanded")),ue(t.foldable,"completed",De(this.element,an(void 0,"cpl")));const s=e.createElement("div");s.classList.add(an("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(an("s")),s.appendChild(c),this.swatchElement=c;const C=e.createElement("div");if(C.classList.add(an("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const R=e.createElement("div");R.classList.add(an("p")),this.element.appendChild(R),this.pickerElement=R}else this.pickerElement=null}}function Co(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),C=ut(t/255,0,1),R=Math.max(s,c,C),J=Math.min(s,c,C),Be=R-J;let Te=0,Ve=0;const Fe=(J+R)/2;return Be!==0&&(Ve=Be/(1-Math.abs(R+J-1)),s===R?Te=(c-C)/Be:c===R?Te=2+(C-s)/Be:Te=4+(s-c)/Be,Te=Te/6+(Te<0?1:0)),[Te*360,Ve*100,Fe*100]}function ko(n,e,t){const s=(n%360+360)%360,c=ut(e/100,0,1),C=ut(t/100,0,1),R=(1-Math.abs(2*C-1))*c,J=R*(1-Math.abs(s/60%2-1)),Be=C-R/2;let Te,Ve,Fe;return s>=0&&s<60?[Te,Ve,Fe]=[R,J,0]:s>=60&&s<120?[Te,Ve,Fe]=[J,R,0]:s>=120&&s<180?[Te,Ve,Fe]=[0,R,J]:s>=180&&s<240?[Te,Ve,Fe]=[0,J,R]:s>=240&&s<300?[Te,Ve,Fe]=[J,0,R]:[Te,Ve,Fe]=[R,0,J],[(Te+Be)*255,(Ve+Be)*255,(Fe+Be)*255]}function Mo(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),C=ut(t/255,0,1),R=Math.max(s,c,C),J=Math.min(s,c,C),Be=R-J;let Te;Be===0?Te=0:R===s?Te=60*(((c-C)/Be%6+6)%6):R===c?Te=60*((C-s)/Be+2):Te=60*((s-c)/Be+4);const Ve=R===0?0:Be/R,Fe=R;return[Te,Ve*100,Fe*100]}function hr(n,e,t){const s=ur(n,360),c=ut(e/100,0,1),C=ut(t/100,0,1),R=C*c,J=R*(1-Math.abs(s/60%2-1)),Be=C-R;let Te,Ve,Fe;return s>=0&&s<60?[Te,Ve,Fe]=[R,J,0]:s>=60&&s<120?[Te,Ve,Fe]=[J,R,0]:s>=120&&s<180?[Te,Ve,Fe]=[0,R,J]:s>=180&&s<240?[Te,Ve,Fe]=[0,J,R]:s>=240&&s<300?[Te,Ve,Fe]=[J,0,R]:[Te,Ve,Fe]=[R,0,J],[(Te+Be)*255,(Ve+Be)*255,(Fe+Be)*255]}function Bo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function To(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function ln(n){return[n[0],n[1],n[2]]}function fr(n,e){return[n[0],n[1],n[2],e]}const Ao={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Bo,rgb:ko},hsv:{hsl:To,hsv:(n,e,t)=>[n,e,t],rgb:hr},rgb:{hsl:Co,hsv:Mo,rgb:(n,e,t)=>[n,e,t]}};function is(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Do(n,e){return n===e?e:ur(n,e)}function Ro(n,e,t){var s;const c=is(e,t);return[e==="rgb"?ut(n[0],0,c[0]):Do(n[0],c[0]),ut(n[1],0,c[1]),ut(n[2],0,c[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function _r(n,e,t,s){const c=is(e,t),C=is(e,s);return n.map((R,J)=>R/c[J]*C[J])}function Lo(n,e,t){const s=_r(n,e.mode,e.type,"int"),c=Ao[e.mode][t.mode](...s);return _r(c,t.mode,"int",t.type)}function os(n,e){return typeof n!="object"||q(n)?!1:e in n&&typeof n[e]=="number"}class Oe{static black(e="int"){return new Oe([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Oe(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return os(e,"r")&&os(e,"g")&&os(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&os(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let C=0;C<s.length;C++)if(s[C]!==c[C])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Ro(e,t,s)}getComponents(e,t="int"){return fr(Lo(ln(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Qt=K("colp");class Io{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Qt("hsv"));const c=e.createElement("div");c.classList.add(Qt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const C=e.createElement("div");C.classList.add(Qt("h")),this.hPaletteView_=t.hPaletteView,C.appendChild(this.hPaletteView_.element),s.appendChild(C),this.element.appendChild(s);const R=e.createElement("div");if(R.classList.add(Qt("rgb")),this.textView_=t.textView,R.appendChild(this.textView_.element),this.element.appendChild(R),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const J=e.createElement("div");J.classList.add(Qt("a"));const Be=e.createElement("div");Be.classList.add(Qt("ap")),Be.appendChild(this.alphaViews_.palette.element),J.appendChild(Be);const Te=e.createElement("div");Te.classList.add(Qt("at")),Te.appendChild(this.alphaViews_.text.element),J.appendChild(Te),this.element.appendChild(J)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Go(n){return n==="int"?"int":n==="float"?"float":void 0}function Es(n){const e=ae;return xe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Go)}),expanded:e.optional.boolean,picker:e.optional.custom(dr)})}function cn(n){return n?.1:1}function un(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function zo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Mt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Uo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function mr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Uo[s](t)}function vr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Mt(e[1],255),Mt(e[2],255),Mt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function br(n){return e=>{const t=vr(e);return t?new Oe(t,"rgb",n):null}}function gr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Mt(e[1],255),Mt(e[2],255),Mt(e[3],255),Mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function wr(n){return e=>{const t=gr(e);return t?new Oe(t,"rgb",n):null}}function xr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[mr(e[1]),Mt(e[2],100),Mt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function yr(n){return e=>{const t=xr(e);return t?new Oe(t,"hsl",n):null}}function Pr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[mr(e[1]),Mt(e[2],100),Mt(e[3],100),Mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Sr(n){return e=>{const t=Pr(e);return t?new Oe(t,"hsl",n):null}}function Er(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Oo(n){const e=Er(n);return e?new Oe(e,"rgb","int"):null}function Cr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),tt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),tt(parseInt(t[4],16),0,255,0,1)]:null}function Vo(n){const e=Cr(n);return e?new Oe(e,"rgb","int"):null}function kr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Mr(n){return e=>{const t=kr(e);return t?new Oe(t,"rgb",n):null}}function Br(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Tr(n){return e=>{const t=Br(e);return t?new Oe(t,"rgb",n):null}}const Fo=[{parser:Er,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Cr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:vr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:gr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:xr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Pr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:kr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Br,result:{alpha:!0,mode:"rgb",notation:"object"}}];function No(n){return Fo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Cs(n,e="int"){const t=No(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Ar={int:[Oo,Vo,br("int"),wr("int"),yr("int"),Sr("int"),Mr("int"),Tr("int")],float:[br("float"),wr("float"),yr("float"),Sr("float"),Mr("float"),Tr("float")]};function $o(n){const e=Ar[n];return t=>{if(typeof t!="string")return Oe.black(n);const s=e.reduce((c,C)=>c||C(t),null);return s??Oe.black(n)}}function ks(n){const e=Ar[n];return t=>e.reduce((s,c)=>s||c(t),null)}function Dr(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Rr(n,e="#"){const t=ln(n.getComponents("rgb")).map(Dr).join("");return`${e}${t}`}function Ms(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Dr).join("");return`${e}${s}`}function Lr(n,e){const t=mt(e==="float"?2:0);return`rgb(${ln(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function qo(n){return e=>Lr(e,n)}function as(n,e){const t=mt(2),s=mt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((C,R)=>(R===3?t:s)(C)).join(", ")})`}function Wo(n){return e=>as(e,n)}function jo(n){const e=[mt(0),ts,ts];return`hsl(${ln(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Ko(n){const e=[mt(0),ts,ts,mt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Ir(n,e){const t=mt(e==="float"?2:0),s=["r","g","b"];return`{${ln(n.getComponents("rgb",e)).map((C,R)=>`${s[R]}: ${t(C)}`).join(", ")}}`}function Ho(n){return e=>Ir(e,n)}function Gr(n,e){const t=mt(2),s=mt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((R,J)=>{const Be=J===3?t:s;return`${c[J]}: ${Be(R)}`}).join(", ")}}`}function Yo(n){return e=>Gr(e,n)}const Zo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Rr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ms},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:jo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ko},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:qo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Wo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ho(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Yo(e)}],[])];function Bs(n){return Zo.reduce((e,t)=>e||(zo(t.format,n)?t.stringifier:null),null)}const Fn=K("apl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Fn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Fn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Fn("c")),s.appendChild(c),this.colorElem_=c;const C=e.createElement("div");C.classList.add(Fn("m")),this.element.appendChild(C),this.markerElem_=C;const R=e.createElement("div");R.classList.add(Fn("p")),this.markerElem_.appendChild(R),this.previewElem_=R,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Oe([t[0],t[1],t[2],0],"rgb"),c=new Oe([t[0],t[1],t[2],255],"rgb"),C=["to right",as(s),as(c)];this.colorElem_.style.background=`linear-gradient(${C.join(",")})`,this.previewElem_.style.backgroundColor=as(e);const R=tt(t[3],0,1,0,100);this.markerElem_.style.left=`${R}%`}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[C,R,J]=c.getComponents("hsv");this.value.setRawValue(new Oe([C,R,J,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=xt(cn(!0),Nt(e));if(t===0)return;const s=this.value.rawValue,[c,C,R,J]=s.getComponents("hsv");this.value.setRawValue(new Oe([c,C,R,J+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){xt(cn(!0),Nt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const yn=K("coltxt");function Jo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const C=n.createElement("option");return C.textContent=c.text,C.value=c.value,s.appendChild(C),s},n.createDocumentFragment())),e}class ea{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(yn("m")),this.modeElem_=Jo(e),this.modeElem_.classList.add(yn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(yn("mm")),c.appendChild(x(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const C=e.createElement("div");C.classList.add(yn("w")),this.element.appendChild(C),this.textsElem_=C,this.textViews_=t.textViews,this.applyTextViews_(),_e(t.colorMode,R=>{this.modeElem_.value=R})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){W(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(yn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function ta(n){return mt(n==="float"?2:0)}function na(n,e,t){const s=is(n,e)[t];return new Ot({min:0,max:s})}function Ts(n,e,t){return new On(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:cn(!1),parser:e.parser,props:V.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:ta(e.colorType)}),value:j(0,{constraint:na(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class sa{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=j(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new ea(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Ts(e,t,0),Ts(e,t,1),Ts(e,t,2)];return s.forEach((c,C)=>{zn({primary:this.value,secondary:c.value,forward:R=>R.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[C],backward:(R,J)=>{const Be=this.colorMode.rawValue,Te=R.rawValue.getComponents(Be,this.colorType_);return Te[C]=J.rawValue,new Oe(fr(ln(Te),Te[3]),Be,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const As=K("hpl");class ra{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(As()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(As("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(As("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Lr(new Oe([t,100,100],"hsv"));const s=tt(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class ia{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ra(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=tt(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,C,R,J]=c.getComponents("hsv");this.value.setRawValue(new Oe([s,C,R,J],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=xt(cn(!1),Nt(e));if(t===0)return;const s=this.value.rawValue,[c,C,R,J]=s.getComponents("hsv");this.value.setRawValue(new Oe([c+t,C,R,J],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){xt(cn(!1),Nt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ds=K("svp"),zr=64;class oa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ds()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=zr,s.width=zr,s.classList.add(Ds("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Ds("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,C=this.canvasElement.height,R=e.getImageData(0,0,c,C),J=R.data;for(let Ve=0;Ve<C;Ve++)for(let Fe=0;Fe<c;Fe++){const dn=tt(Fe,0,c,0,100),$n=tt(Ve,0,C,100,0),qn=hr(s[0],dn,$n),ls=(Ve*c+Fe)*4;J[ls]=qn[0],J[ls+1]=qn[1],J[ls+2]=qn[2],J[ls+3]=255}e.putImageData(R,0,0);const Be=tt(s[1],0,100,0,100);this.markerElem_.style.left=`${Be}%`;const Te=tt(s[2],0,100,100,0);this.markerElem_.style.top=`${Te}%`}onValueChange_(){this.update_()}}class aa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new oa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=tt(e.point.x,0,e.bounds.width,0,100),c=tt(e.point.y,0,e.bounds.height,100,0),[C,,,R]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Oe([C,s,c,R],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){lr(e.key)&&e.preventDefault();const[t,s,c,C]=this.value.rawValue.getComponents("hsv"),R=cn(!1),J=xt(R,Nt(e)),Be=xt(R,Un(e));J===0&&Be===0||this.value.setRawValue(new Oe([t,s+J,c+Be,C],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=cn(!1),s=xt(t,Nt(e)),c=xt(t,Un(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class la{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new ia(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new aa(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Qo(e,{value:this.value,viewProps:this.viewProps}),text:new On(e,{parser:Ft,baseStep:.1,props:V.fromObject({draggingScale:.01,formatter:mt(2)}),value:j(0,{constraint:new Ot({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&zn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const C=s.rawValue.getComponents();return C[3]=c.rawValue,new Oe(C,s.rawValue.mode)}}),this.textC_=new sa(e,{colorType:t.colorType,parser:Ft,value:this.value,viewProps:this.viewProps}),this.view=new Io(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Rs=K("colsw");class ca{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Rs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Rs("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Rs("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ms(e)}onValueChange_(){this.update_()}}class ua{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ca(e,{value:this.value,viewProps:this.viewProps})}}class Ls{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new ua(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new es(e,{parser:t.parser,props:V.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Eo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Js(e,{viewProps:this.viewProps}):null;const c=new la(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(C=>{C.addEventListener("blur",this.onPopupChildBlur_),C.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),zn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:C=>C.rawValue,backward:(C,R)=>R.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function da(n,e){return Oe.isColorObject(n)?Oe.fromObject(n,e):Oe.black(e)}function pa(n){return ln(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ha(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function fa(n){return new Oe([n>>16&255,n>>8&255,n&255],"rgb")}function _a(n){return new Oe([n>>24&255,n>>16&255,n>>8&255,tt(n&255,0,255,0,1)],"rgb")}function ma(n){return typeof n!="number"?Oe.black():fa(n)}function va(n){return typeof n!="number"?Oe.black():_a(n)}function ba(n){const e=Bs(n);return e?(t,s)=>{Vn(t,e(s))}:null}function ga(n){const e=n?ha:pa;return(t,s)=>{Vn(t,e(s))}}function wa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function xa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ya(n,e){return(t,s)=>{n?wa(t,s,e):xa(t,s,e)}}function Is(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Pa(n){return n?e=>Ms(e,"0x"):e=>Rr(e,"0x")}function Sa(n){return"color"in n||"view"in n&&n.view==="color"}const Ea={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Sa(e))return null;const t=Es(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Is(n.params)?va:ma,equals:Oe.equals,writer:n=>ga(Is(n.params))},controller:n=>{const e=Is(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ls(n.document,{colorType:"int",expanded:t??!1,formatter:Pa(e),parser:ks("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Ca(n){return Oe.isRgbaColorObject(n)}function ka(n){return e=>da(e,n)}function Ma(n,e){return t=>n?Gr(t,e):Ir(t,e)}const Ba={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Oe.isColorObject(n))return null;const t=Es(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ka(un(n.params)),equals:Oe.equals,writer:n=>ya(Ca(n.initialValue),un(n.params))},controller:n=>{var e;const t=Oe.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,C=(e=un(n.params))!==null&&e!==void 0?e:"int";return new Ls(n.document,{colorType:C,expanded:s??!1,formatter:Ma(t,C),parser:ks(C),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ta={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Cs(n,un(e));if(!t||!Bs(t))return null;const c=Es(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return $o((e=un(n.params))!==null&&e!==void 0?e:"int")},equals:Oe.equals,writer:n=>{const e=Cs(n.initialValue,un(n.params));if(!e)throw Z.shouldNeverHappen();const t=ba(e);if(!t)throw Z.notBindable();return t}},controller:n=>{const e=Cs(n.initialValue,un(n.params));if(!e)throw Z.shouldNeverHappen();const t=Bs(e);if(!t)throw Z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ls(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ks(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Jt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var C,R;return(R=(C=this.components[c])===null||C===void 0?void 0:C.constrain(s))!==null&&R!==void 0?R:s});return this.asm_.fromComponents(t)}}const Ur=K("pndtxt");class Aa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ur()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Ur("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Da(n,e,t){return new On(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:j(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Da(e,t,c)),this.acs_.forEach((s,c)=>{zn({primary:this.value,secondary:s.value,forward:C=>t.assembly.toComponents(C.rawValue)[c],backward:(C,R)=>{const J=t.assembly.toComponents(C.rawValue);return J[c]=R.rawValue,t.assembly.fromComponents(J)}})}),this.view=new Aa(e,{textViews:this.acs_.map(s=>s.view)})}}function Or(n,e){return"step"in n&&!q(n.step)?new Vt(n.step,e):null}function Vr(n){return!q(n.max)&&!q(n.min)?new Ot({max:n.max,min:n.min}):!q(n.max)||!q(n.min)?new Zt({max:n.max,min:n.min}):null}function Ra(n){const e=Rt(n,Ot);if(e)return[e.values.get("min"),e.values.get("max")];const t=Rt(n,Zt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function La(n,e){const t=[],s=Or(n,e);s&&t.push(s);const c=Vr(n);c&&t.push(c);const C=Ss(n.options);return C&&t.push(C),new Dt(t)}const Ia={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ae,s=xe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(ns),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>or,constraint:n=>La(n.params,n.initialValue),writer:n=>Vn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Rt(s,ct);if(c)return new zt(n.document,{props:new V({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const C=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:mt(ss(s,t.rawValue)),R=s&&Rt(s,Ot);return R?new Ps(n.document,{baseStep:wn(s),parser:Ft,sliderProps:new V({maxValue:R.values.value("max"),minValue:R.values.value("min")}),textProps:V.fromObject({draggingScale:xn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps}):new On(n.document,{baseStep:wn(s),parser:Ft,props:V.fromObject({draggingScale:xn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps})}};class en{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Fr={toComponents:n=>n.getComponents(),fromComponents:n=>new en(...n)},Pn=K("p2d");class Ga{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Pn()),t.viewProps.bindClassModifiers(this.element),_e(t.expanded,De(this.element,Pn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Pn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(Pn("b")),c.appendChild(x(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const C=e.createElement("div");if(C.classList.add(Pn("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const R=e.createElement("div");R.classList.add(Pn("p")),this.element.appendChild(R),this.pickerElement=R}else this.pickerElement=null}}const tn=K("p2dp");class za{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(tn()),t.layout==="popup"&&this.element.classList.add(tn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(tn("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(tn("g")),this.padElement.appendChild(c),this.svgElem_=c;const C=e.createElementNS(E,"line");C.classList.add(tn("ax")),C.setAttributeNS(null,"x1","0"),C.setAttributeNS(null,"y1","50%"),C.setAttributeNS(null,"x2","100%"),C.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(C);const R=e.createElementNS(E,"line");R.classList.add(tn("ax")),R.setAttributeNS(null,"x1","50%"),R.setAttributeNS(null,"y1","0"),R.setAttributeNS(null,"x2","50%"),R.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(R);const J=e.createElementNS(E,"line");J.classList.add(tn("l")),J.setAttributeNS(null,"x1","50%"),J.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(J),this.lineElem_=J;const Be=e.createElement("div");Be.classList.add(tn("m")),this.padElement.appendChild(Be),this.markerElem_=Be,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=tt(e,-s,+s,0,100),C=tt(t,-s,+s,0,100),R=this.invertsY_?100-C:C;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${R}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${R}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Nr(n,e,t){return[xt(e[0],Nt(n)),xt(e[1],Un(n))*(t?1:-1)]}class Ua{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new za(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=tt(e.point.x,0,e.bounds.width,-s,+s),C=tt(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new en(c,C),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){lr(e.key)&&e.preventDefault();const[t,s]=Nr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new en(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Nr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Oa{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Js(e,{viewProps:this.viewProps}):null;const C=new Ua(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});C.view.allFocusableElements.forEach(R=>{R.addEventListener("blur",this.onPopupChildBlur_),R.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=C,this.textC_=new Gs(e,{assembly:Fr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ga(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),zn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:R=>R.rawValue,backward:(R,J)=>J.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Sn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const $r={toComponents:n=>n.getComponents(),fromComponents:n=>new Sn(...n)};function Va(n){return Sn.isObject(n)?new Sn(n.x,n.y,n.z):new Sn}function Fa(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Na(n,e){return new Jt({assembly:$r,components:[$t("x"in n?n.x:void 0,e.x),$t("y"in n?n.y:void 0,e.y),$t("z"in n?n.z:void 0,e.z)]})}function zs(n,e){return{baseStep:wn(e),constraint:e,textProps:V.fromObject({draggingScale:xn(e,n),formatter:mt(ss(e,n))})}}const $a={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Sn.isObject(n))return null;const t=ae,s=xe(e,{x:t.optional.custom(Xt),y:t.optional.custom(Xt),z:t.optional.custom(Xt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Va,constraint:n=>Na(n.params,n.initialValue),equals:Sn.equals,writer:n=>Fa},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Jt))throw Z.shouldNeverHappen();return new Gs(n.document,{assembly:$r,axes:[zs(e.rawValue.x,t.components[0]),zs(e.rawValue.y,t.components[1]),zs(e.rawValue.z,t.components[2])],parser:Ft,value:e,viewProps:n.viewProps})}};class En{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z,C=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof C!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const qr={toComponents:n=>n.getComponents(),fromComponents:n=>new En(...n)};function qa(n){return En.isObject(n)?new En(n.x,n.y,n.z,n.w):new En}function Wa(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function ja(n,e){return new Jt({assembly:qr,components:[$t("x"in n?n.x:void 0,e.x),$t("y"in n?n.y:void 0,e.y),$t("z"in n?n.z:void 0,e.z),$t("w"in n?n.w:void 0,e.w)]})}function Ka(n,e){return{baseStep:wn(e),constraint:e,textProps:V.fromObject({draggingScale:xn(e,n),formatter:mt(ss(e,n))})}}const Ha={id:"input-point4d",type:"input",accept:(n,e)=>{if(!En.isObject(n))return null;const t=ae,s=xe(e,{x:t.optional.custom(Xt),y:t.optional.custom(Xt),z:t.optional.custom(Xt),w:t.optional.custom(Xt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qa,constraint:n=>ja(n.params,n.initialValue),equals:En.equals,writer:n=>Wa},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Jt))throw Z.shouldNeverHappen();return new Gs(n.document,{assembly:qr,axes:e.rawValue.getComponents().map((s,c)=>Ka(s,t.components[c])),parser:Ft,value:e,viewProps:n.viewProps})}};function Ya(n){const e=[],t=Ss(n.options);return t&&e.push(t),new Dt(e)}const Za={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=xe(e,{options:ae.optional.custom(ns)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ar,constraint:n=>Ya(n.params),writer:n=>Vn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Rt(s,ct);return c?new zt(e,{props:new V({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new es(e,{parser:C=>C,props:V.fromObject({formatter:gs}),value:t,viewProps:n.viewProps})}},Nn={monitor:{defaultInterval:200,defaultLineCount:3}},Wr=K("mll");class Xa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Wr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Wr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Us{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Xa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const jr=K("sgl");class Qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(jr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(jr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Os{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ja={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{lineCount:ae.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr},controller:n=>{var e;return n.value.rawValue.length===1?new Os(n.document,{formatter:nr,value:n.value,viewProps:n.viewProps}):new Us(n.document,{formatter:nr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},nn=K("grl");class el{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(nn("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const C=e.createElement("div");C.classList.add(nn("t"),K("tt")()),this.element.appendChild(C),this.tooltipElem_=C,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),C=[];this.value.rawValue.forEach((Ve,Fe)=>{if(Ve===void 0)return;const dn=tt(Fe,0,t,0,e.width),$n=tt(Ve,s,c,e.height,0);C.push([dn,$n].join(","))}),this.lineElem_.setAttributeNS(null,"points",C.join(" "));const R=this.tooltipElem_,J=this.value.rawValue[this.cursor_.rawValue];if(J===void 0){R.classList.remove(nn("t","a"));return}const Be=tt(this.cursor_.rawValue,0,t,0,e.width),Te=tt(J,s,c,e.height,0);R.style.left=`${Be}px`,R.style.top=`${Te}px`,R.textContent=`${this.formatter_(J)}`,R.classList.contains(nn("t","a"))||(R.classList.add(nn("t","a"),nn("t","in")),r(R),R.classList.remove(nn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class tl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=j(-1),this.view=new el(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!p(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new on(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(tt(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(tt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vs(n){return"format"in n&&!q(n.format)?n.format:mt(2)}function nl(n){var e;return n.value.rawValue.length===1?new Os(n.document,{formatter:Vs(n.params),value:n.value,viewProps:n.viewProps}):new Us(n.document,{formatter:Vs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function sl(n){var e,t,s;return new tl(n.document,{formatter:Vs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,props:V.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Kr(n){return"view"in n&&n.view==="graph"}const rl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ae,s=xe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Kr(n)?64:1,reader:n=>or},controller:n=>Kr(n.params)?sl(n):nl(n)},il={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ae,s=xe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ar},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Us(n.document,{formatter:gs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Os(n.document,{formatter:gs,value:t,viewProps:n.viewProps})}};function ol(n,e){var t;const s=n.accept(e.target.read(),e.params);if(q(s))return null;const c=ae,C={target:e.target,initialValue:s.initialValue,params:s.params},R=n.binding.reader(C),J=n.binding.constraint?n.binding.constraint(C):void 0,Be=j(R(s.initialValue),{constraint:J,equals:n.binding.equals}),Te=new Ct({reader:R,target:e.target,value:Be,writer:n.binding.writer(C)}),Ve=c.optional.boolean(e.params.disabled).value,Fe=c.optional.boolean(e.params.hidden).value,dn=n.controller({constraint:J,document:e.document,initialValue:s.initialValue,params:s.params,value:Te.value,viewProps:f.create({disabled:Ve,hidden:Fe})});return new We(e.document,{binding:Te,blade:Le(),props:V.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:dn})}function al(n,e){return e===0?new wt:new St(n,e??Nn.monitor.defaultInterval)}function ll(n,e){var t,s,c;const C=ae,R=n.accept(e.target.read(),e.params);if(q(R))return null;const J={target:e.target,initialValue:R.initialValue,params:R.params},Be=n.binding.reader(J),Te=(s=(t=C.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(R.params))!==null&&s!==void 0?s:1,Ve=C.optional.number(e.params.interval).value,Fe=new Rn({reader:Be,target:e.target,ticker:al(e.document,Ve),value:lt(Te)}),dn=C.optional.boolean(e.params.disabled).value,$n=C.optional.boolean(e.params.hidden).value,qn=n.controller({document:e.document,params:R.params,value:Fe.value,viewProps:f.create({disabled:dn,hidden:$n})});return new Je(e.document,{binding:Fe,blade:Le(),props:V.fromObject({label:"label"in e.params?(c=C.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:qn})}class cl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(q(c))throw new Z({context:{key:t.key},type:"nomatchingcontroller"});const C=this.pluginsMap_.inputs.reduce((R,J)=>R??ol(J,{document:e,target:t,params:s}),null);if(C)return C;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((C,R)=>C??ll(R,{document:e,params:s,target:t}),null);if(c)return c;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,C)=>c??_t(C,{document:e,params:t}),null);if(!s)throw new Z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof We)return new He(e);if(e instanceof Je)return new Ze(e);if(e instanceof et)return new gt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Z.shouldNeverHappen();return t}}function ul(){const n=new cl;return[ml,$a,Ha,Za,Ia,Ta,Ba,Ea,So,Ja,il,rl,Pe,Xn,Dn,Ke].forEach(e=>{n.register(e)}),n}function dl(n){return en.isObject(n)?new en(n.x,n.y):new en}function pl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function $t(n,e){if(!n)return;const t=[],s=Or(n,e);s&&t.push(s);const c=Vr(n);return c&&t.push(c),new Dt(t)}function hl(n,e){return new Jt({assembly:Fr,components:[$t("x"in n?n.x:void 0,e.x),$t("y"in n?n.y:void 0,e.y)]})}function Hr(n,e){const[t,s]=n?Ra(n):[];if(!q(t)||!q(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=wn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function fl(n,e){const t=e instanceof Jt?e.components[0]:void 0,s=e instanceof Jt?e.components[1]:void 0,c=Hr(t,n.x),C=Hr(s,n.y);return Math.max(c,C)}function Yr(n,e){return{baseStep:wn(e),constraint:e,textProps:V.fromObject({draggingScale:xn(e,n),formatter:mt(ss(e,n))})}}function _l(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ml={id:"input-point2d",type:"input",accept:(n,e)=>{if(!en.isObject(n))return null;const t=ae,s=xe(e,{expanded:t.optional.boolean,picker:t.optional.custom(dr),x:t.optional.custom(Xt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>dl,constraint:n=>hl(n.params,n.initialValue),equals:en.equals,writer:n=>pl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Jt))throw Z.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,C="picker"in n.params?n.params.picker:void 0;return new Oa(e,{axes:[Yr(t.rawValue.x,s.components[0]),Yr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:_l(n.params),maxValue:fl(t.rawValue,s),parser:Ft,pickerLayout:C??"popup",value:t,viewProps:n.viewProps})}};class Zr extends g{constructor(e){super(e),this.emitter_=new $,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new L(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Xr extends g{constructor(e){super(e),this.emitter_=new $,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new L(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Qr extends g{constructor(e){super(e),this.emitter_=new $,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new L(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const vl=function(){return{id:"list",type:"blade",accept(n){const e=ae,t=xe(n,{options:e.required.custom(ns),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new ct(pr(n.params.options)),t=j(n.params.value,{constraint:e}),s=new zt(n.document,{props:new V({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:V.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof zt)?null:new Zr(n.controller)}}}();function bl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function gl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class wl extends Et{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(We).map(s=>s.binding);gl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(We).map(t=>t.binding.target);return bl(e)}refresh(){this.controller_.rackController.rack.find(We).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Je).forEach(e=>{e.binding.read()})}}class xl extends Mn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const yl={id:"slider",type:"blade",accept(n){const e=ae,t=xe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Ot({max:n.params.max,min:n.params.min}),C=new Ps(n.document,{baseStep:1,parser:Ft,sliderProps:new V({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:V.fromObject({draggingScale:xn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ho}),value:j(s,{constraint:c}),viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:V.fromObject({label:n.params.label}),valueController:C})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof Ps)?null:new Xr(n.controller)}},Pl=function(){return{id:"text",type:"blade",accept(n){const e=ae,t=xe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new es(n.document,{parser:n.params.parse,props:V.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:j(n.params.value),viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:V.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof es)?null:new Qr(n.controller)}}}();function Sl(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function Jr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class El extends wl{constructor(e){var t,s;const c=e??{},C=(t=c.document)!==null&&t!==void 0?t:l(),R=ul(),J=new xl(C,{expanded:c.expanded,blade:Le(),props:V.fromObject({title:c.title}),viewProps:f.create()});super(J,R),this.pool_=R,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:Sl(C),this.containerElem_.appendChild(this.element),this.doc_=C,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Jr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Jr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[yl,vl,Ke,Pl]})}}const Cl=new S("3.1.10");u.BladeApi=g,u.ButtonApi=ne,u.FolderApi=Et,u.InputBindingApi=He,u.ListApi=Zr,u.MonitorBindingApi=Ze,u.Pane=El,u.SeparatorApi=Bn,u.SliderApi=Xr,u.TabApi=oe,u.TabPageApi=Y,u.TextApi=Qr,u.TpChangeEvent=L,u.VERSION=Cl,Object.defineProperty(u,"__esModule",{value:!0})})})(qs,qs.exports);var sc=qs.exports;const rc=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  // Baked atlases exported with --mips: number of levels (1 = level 0 only / mips toggled off).
  mip_count     : u32,
  // Levels subtracted from the per-surfel choice (0 = round(log2 texels/pixel)). The finetune
  // optimised the texels for level-0 point sampling, so full prefiltering loses detail the
  // model relies on; a bias keeps level 0 until a surfel is minified by 2^(bias+0.5) or more.
  lod_bias      : f32,
  _p1 : u32, _p2 : u32,
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
        // ---- per-surfel mip level (typeD bundles exported with --mips) ----------------
        // The cull stores the CONIC form of the ray-splat (surfel_cull.wgsl): tu = (u0, v0, J⁻¹00),
        // tv = (J⁻¹01, J⁻¹10, J⁻¹11), with s = (u0, v0) + J⁻¹·Δpix / (1 + dw·Δpix). At the centre,
        // uv moves J⁻¹ per pixel, so texel motion per pixel is diag(w, h)/2E · J⁻¹ and the
        // minification is its larger column norm (the pixel axis that sweeps most texels).
        // ONE integer level per surfel (nearest-level sampler → still a single bilinear
        // fetch), rounded, clamped to the levels shipped and to the tile's own alignment:
        // the box filter is per-tile exact only up to countTrailingZeros(u0 | v0 | w | h).
        var lod = 0.0;
        var fx  = 1.0;
        var fy  = 1.0;
        if atlas_params.mip_count > 1u && w_span >= 2.0 && h_span >= 2.0 {
            let sp   = splats_2d[store_idx];
            let kx   = w_span * inv_2E;
            let ky   = h_span * inv_2E;
            let c0   = vec2<f32>(kx * sp.tu_z, ky * sp.tv_y);   // d(texel)/d(pix.x): (J⁻¹00, J⁻¹10)
            let c1   = vec2<f32>(kx * sp.tv_x, ky * sp.tv_z);   // d(texel)/d(pix.y): (J⁻¹01, J⁻¹11)
            let tpp  = max(length(c0), length(c1));
            let amax = countTrailingZeros(u32(u0) | u32(v0) | u32(w_span) | u32(h_span));
            // ...and never below 4 texels on the short side (a 64x4 tile stops at 16x4, not 64x1):
            // every level is then a plain halving that exists in the training-side pyramid too
            // (nest-splatting gaussian_renderer.mip_view_levels, --mip_view_lod finetunes).
            let side = countTrailingZeros(u32(min(w_span, h_span)));
            let lmax = f32(min(min(atlas_params.mip_count - 1u, amax), max(side, 2u) - 2u));
            lod = clamp(floor(log2(max(tpp, 1.0)) + 0.5 - atlas_params.lod_bias), 0.0, lmax);
            // Level-l tiles stay inside their rect by the fragment's CLAMP (half a level-l texel
            // in from each edge, the CUDA/training convention), not by shrinking the uv span.
        }
        // Texel i of the bake sits at s_i = (i + ½)·2E/w − E, i.e. at atlas x = u0 + w/2 + s·w/2E
        // (normalised: ÷ width; texel i's centre is at i + ½). Matches CUDA / Vulkan
        // (u0 − ½ + w/2 base, sampled at au + ½). The pre-2026-09-19 base carried an extra +½:
        // every fetch was half a texel off (−0.7 dB vs CUDA on garden). w = 0 (no texture)
        // keeps pointing at texel (u0, v0)'s centre.
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 * max(w_span, 1.0)) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 * max(h_span, 1.0)) * inv_h;
        splats_2d[store_idx].uv_scale_x = w_span * fx * inv_2E * inv_w;
        splats_2d[store_idx].uv_scale_y = h_span * fy * inv_2E * inv_h;
        splats_2d[store_idx].layer      = layer;
        splats_2d[store_idx]._pad       = bitcast<u32>(lod);   // render reads it as sp.lod
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
        splats_2d[store_idx]._pad       = 0u;
    }
}
`,Fs=`// 2DGS render — vertex+fragment.
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
  // uv extent E of the bake (surfel uv ∈ [−E, E] ↔ the tile): the fragment clamp needs the
  // tile's half span, = |uv_scale|·E.
  uv_extent : f32,
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
    } else {
        // Baked atlas: preprocess picked the integer level and stored it in \`_pad\`
        // (0.0 for bundles without a chain), see preprocess_2dgs.wgsl.
        sp.lod     = sp.uv_skew.y;
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
// fragment entry points call this; a discard inside culls the fragment.
//
// Split in two stages (2026-10-06, for the two-pass path below):
//   shade_geom()  — ray/splat intersection \`s\`, kernel alpha \`a\`, depth \`zv\`,
//                   and the low-pass flag; every discard lives here.
//   shade_color() — SV/SH base colour + the atlas residual fetch + biases.
// shade() = both, and is what fs_main uses; fs_front runs the geometry stage
// first so fragments hidden behind the opaque layer never pay for the fetch.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

struct ShadeGeom {
    s   : vec2<f32>,   // ray/splat intersection in surfel uv (unused for EWA)
    a   : f32,         // kernel alpha (opacity · falloff, low-pass included)
    zv  : f32,         // view-space depth of the intersection
    lp  : bool,        // low-pass kernel won (rho3d > rho2d) — probe uv collapses
};

fn shade_geom(in: SplatIn, pos: vec2<f32>) -> ShadeGeom {
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
        return ShadeGeom(vec2<f32>(0.0), alpha_e, in.depth_plane.z, false);
    }

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch). Skips the
    // per-fragment cross-product + perspective divide. Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both linear
    // in pix → u = p.x/p.z is a rational function of pix, and:
    //   u = u₀ + (J⁻¹·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
    // Slot layout: tu=(u₀, v₀, J00), tv=(J01, J10, J11), tw=(dwdxr, dwdyr, 0).
    // Two ways to get the ray/surfel intersection \`s\`. Both are the SAME
    // algebra; they differ only in where the cancellation happens.
    var s : vec2<f32>;
    if (render_settings.accel_flags & 4096u) != 0u {
        // CENTRED (accel bit 12): same cross-product, but in coordinates
        // centred on the splat. in.Tu = k_c, in.Tv = l_c, in.Tw = Tw, and the
        // offset d is at most the quad half-extent -- so nothing here subtracts
        // two numbers of magnitude ~1e3 to get one of magnitude ~1.
        let d2 = pixf - in.center_pix;
        let kk = in.Tu + d2.x * in.Tw;
        let ll = in.Tv + d2.y * in.Tw;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { discard; }
        s = pp.xy / pp.z;
    } else if (render_settings.accel_flags & 2048u) != 0u {
        // accel bit 11 (?raysplat=1): original 2DGS per-fragment ray-splat from
        // the RAW transmat rows the cull stored under the same bit. Every
        // cancellation in \`pix*Tw - Tu\` happens AT this pixel, so the error
        // cannot grow with the quad.
        let kk = pixf.x * in.Tw - in.Tu;
        let ll = pixf.y * in.Tw - in.Tv;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { discard; }
        s = pp.xy / pp.z;
    } else {
        // CONIC OPTION A: (u0, v0, J⁻¹, dw) precomputed about the splat centre.
        // Exact in exact arithmetic, but the cancellation is baked into the
        // per-Gauss constants and the extrapolation multiplies whatever error
        // they carry by the distance from the centre.
        let u0 = in.Tu.x; let v0 = in.Tu.y;
        let J00 = in.Tu.z; let J01 = in.Tv.x;
        let J10 = in.Tv.y; let J11 = in.Tv.z;
        let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
        let d = pixf - in.center_pix;
        let du_lin = J00 * d.x + J01 * d.y;
        let dv_lin = J10 * d.x + J11 * d.y;
        // Correction denominator crosses zero at the expansion's validity
        // boundary — sign flips there produce the foggy/bowtie artifact.
        let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
        if denom < 0.1 { discard; }
        let inv_d  = 1.0 / denom;
        s = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    }
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

    return ShadeGeom(s, b, depth, rho3d > rho2d);
}

fn shade_color(in: SplatIn, g: ShadeGeom) -> vec3<f32> {
    var color = in.color.rgb;
    let s = g.s;

    // Atlas residual — single HW-decoded BC7 texture fetch per fragment.
    // uv_base / uv_scale are precomputed in preprocess_2dgs.wgsl so the entire
    // atlas UV mapping reduces to two fmadd + one texture sample. Untextured
    // (EWA, top bit of gauss_id) Gausses carry a zero-area rect: skip.
    if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u {
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
            let uv_eff = select(s, vec2<f32>(0.0), g.lp);
            // Zero storage reads — all six coefficients arrive as flat varyings.
            // uv_scale = (A00, A11) diagonal, uv_skew = (A01, A10) off-diagonal.
            uv = vec2<f32>(
                in.uv_scale.x * uv_eff.x + in.uv_skew.x  * uv_eff.y + in.uv_base.x,
                in.uv_skew.y  * uv_eff.x + in.uv_scale.y * uv_eff.y + in.uv_base.y,
            );
            layer = 0;
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
    }
    return max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));
}

fn shade(in: SplatIn, pos: vec2<f32>) -> ShadeOut {
    let g = shade_geom(in, pos);
    return ShadeOut(shade_color(in, g), g.a, g.zv);
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

// ---------------------------------------------------------------------------
// Two-pass "opaque layer + translucent front" path (?twopass=1, 2026-10-06).
// Video-game style: pass 1 rasterises every surfel with a hardware depth
// test and keeps, per pixel, the NEAREST fragment whose kernel alpha exceeds
// \`thresh\` — its SV+atlas colour is written opaque and its exact ray/splat
// intersection depth goes to a depth32float attachment (no sort needed).
// Pass 2 draws the same sorted list again, alpha-blending ONLY the fragments
// that lie strictly in front of that layer (sub-threshold by construction —
// anything above the threshold in front would have won pass 1). Pixels with
// no layer keep the clear depth (1.0) and composite exactly as the sorted
// path does. The depth test for pass 2 is done in the shader from the pass-1
// depth texture so occluded fragments exit before the atlas fetch.
//
// Depth encoding: frag_depth must land in [0,1], so zv is scaled by \`zmax\`
// (depth32float keeps fp32 relative precision at any scale). Pass 1 writes
// and pass 2 compares the SAME encoding.
// ---------------------------------------------------------------------------
struct TwoPassParams {
  thresh : f32,   // kernel-alpha threshold for the opaque layer
  zmax   : f32,   // view-space depth mapped to frag_depth 1.0
  _p0    : u32,
  _p1    : u32,
};
@group(3) @binding(0) var                layer_depth : texture_depth_2d;
@group(3) @binding(1) var<uniform>       twopass     : TwoPassParams;

fn encode_depth(zv: f32) -> f32 { return clamp(zv / twopass.zmax, 0.0, 1.0); }

struct OpaqueOut {
  @location(0)          color : vec4<f32>,
  @builtin(frag_depth)  depth : f32,
};

// Pass 1 — opaque layer. No blending; depth test LESS + write.
@fragment
fn fs_opaque(in: VertexOutput) -> OpaqueOut {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return OpaqueOut(vec4<f32>(rgb, 1.0), encode_depth(g.zv));
}

// Pass 2 — translucent front, sorted back-to-front, premultiplied over the
// pass-1 image. The threshold discard is redundant with the depth test (see
// above) and kept so a pipeline-to-pipeline fp difference can never let the
// layer fragment itself blend twice.
@fragment
fn fs_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    let zl = textureLoad(layer_depth, vec2<i32>(floor(in.position.xy)), 0);
    if encode_depth(g.zv) >= zl { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0) * g.a;
}
`,ic=`const WG_SIZE = 256u;
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
}`,oc=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
//#if STATIC_KEYS
// Fixed per-surfel sort keys (portal background): > 0 replaces the live view depth as the
// radix-sort key, so these surfels keep one global order however the camera moves.
@group(3) @binding(2) var<storage, read> static_keys : array<f32>;
//#endif

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
//#if WIDE_FRUSTUM
        // Portal: keep every surfel whose CENTRE projects anywhere Splat2DGS.pos can store
        // (±8191 px, ¼-px i16). The 1.2 test below drops big surfels (sky, clouds) whose
        // centre sits just off-screen although their footprint covers the view, so they
        // pop in and out as the camera moves; training (CUDA) never culls on the centre.
        let bounds   = (8000.0 / (0.5 * max(camera.viewport.x, camera.viewport.y))) * pos2d.w;
//#else
        let bounds   = 1.2 * pos2d.w;
//#endif
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
                // accel bit 11 (?raysplat=1): hand the fragment the RAW transmat
                // rows instead of the conic expansion, so it can do the original
                // per-fragment ray/surfel intersection. Same math, but the
                // cancellation in \`pix*Tw - Tu\` is evaluated AT the fragment
                // rather than baked into u0/v0/J and extrapolated outward.
                if (render_settings.accel_flags & 4096u) != 0u {
                    // CENTRED (accel bit 12): hand over k_c / l_c / Tw so the
                    // fragment can form k = k_c + dx*Tw with dx only a few px.
                    tu = k_c;
                    tv = l_c;
                    tw = vec3<f32>(Twx, Twy, Twz);
                } else if (render_settings.accel_flags & 2048u) != 0u {
                    tu = T_mat[0];
                    tv = T_mat[1];
                    tw = T_mat[2];
                } else {
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, 0.0);
                }
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
//#if STATIC_KEYS
        let static_key = static_keys[idx];
        sort_depths[store_idx]  = bitcast<u32>(select(depth, static_key, static_key > 0.0));
//#else
        sort_depths[store_idx]  = bitcast<u32>(depth);
//#endif
        sort_indices[store_idx] = store_idx;
    }
}
`,ac=`// shader implementing gpu radix sort.

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
`,lc=`// shader implementing gpu radix sort.

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
`,cc=`// ============================================================================
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
}`,Ai=32,Ws=1,js=2,hi=4,fi=512,_i=1024,mi=2048,vi=4096,uc=0,sn=new ArrayBuffer(Ai),ft={canvas_size:new Uint32Array(sn,0,2),accel_flags:new Uint32Array(sn,8,1),feature_mode:new Uint32Array(sn,12,1),gaussian_scaling:new Float32Array(sn,16,1),sh_bias:new Float32Array(sn,20,1),color_K:new Uint32Array(sn,24,1),walltime:new Float32Array(sn,28,1)};function dc(o){ft.canvas_size[0]=o.width>>>0,ft.canvas_size[1]=o.height>>>0,ft.accel_flags[0]=(o.accel_flags??Ws|js)>>>0,ft.feature_mode[0]=(o.feature_mode??uc)>>>0,ft.gaussian_scaling[0]=o.gaussian_scaling??1,ft.sh_bias[0]=o.sh_bias??.5,ft.color_K[0]=(o.color_K??0)>>>0,ft.walltime[0]=o.walltime??0}function Di(o,a){o.queue.writeBuffer(a,0,sn)}function _s(o,a,u){u&&o&&a&&Di(o,a)}function Cn(o,a,u,S,g=!0){ft.canvas_size[0]=o>>>0,ft.canvas_size[1]=a>>>0,_s(u??null,S??null,g)}function bi(o,a,u,S=!0){ft.gaussian_scaling[0]=o,_s(a??null,u??null,S)}function gi(o,a,u,S=!0){ft.sh_bias[0]=o,_s(a??null,u??null,S)}function Wn(o,a,u,S=!0){let g=ft.accel_flags[0];o.oac!==void 0&&(g=o.oac?g|Ws:g&~Ws),o.spr!==void 0&&(g=o.spr?g|js:g&~js),o.bfc!==void 0&&(g=o.bfc?g|hi:g&~hi),o.hypLegacy!==void 0&&(g=o.hypLegacy?g|fi:g&~fi),o.centred!==void 0&&(g=o.centred?g|vi:g&~vi),o.raysplat!==void 0&&(g=o.raysplat?g|mi:g&~mi),o.legacyPos!==void 0&&(g=o.legacyPos?g|_i:g&~_i),ft.accel_flags[0]=g>>>0,_s(a??null,u??null,S)}const pc=256;function cs(o,a){const u=[],S=[];let g=!0;for(const w of o.split(`
`)){const L=w.trim();let T;if((T=/^\/\/#if\s+(\w+)\s*$/.exec(L))!==null){const M=!!a[T[1]];S.push({parent:g,taken:M}),g=g&&M;continue}if(/^\/\/#else\s*$/.test(L)){const M=S[S.length-1];if(M===void 0)throw new Error("preprocessWGSL: #else without #if");g=M.parent&&!M.taken;continue}if(/^\/\/#endif\s*$/.test(L)){const M=S.pop();if(M===void 0)throw new Error("preprocessWGSL: #endif without #if");g=M.parent;continue}g&&u.push(w)}if(S.length!==0)throw new Error("preprocessWGSL: unterminated #if");return u.join(`
`)}const hc=Ai,fc=8,_c=96,mc=1e4,vc=12,Qs=8,qt=1<<Qs,hn=256,ps=32/Qs,bc=0,Ns=ps&1;function wi(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function gc(o,a){const u=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[u]}),g=w=>o.createComputePipeline({layout:S,compute:{module:a,entryPoint:w,constants:{WG_SIZE:hn}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:u}}function wc(o,a,u){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=o.createPipelineLayout({bindGroupLayouts:[S]}),L=o.createPipelineLayout({bindGroupLayouts:[g]}),T=[];for(let M=0;M<ps;M++){const D={PASS_ID:M+bc,RS_RADIX_LOG2:Qs,RS_RADIX_SIZE:qt};T.push({localHistogram:o.createComputePipeline({layout:w,compute:{module:a,entryPoint:"local_histogram_pass",constants:D}}),scatterElements:o.createComputePipeline({layout:L,compute:{module:u,entryPoint:"scatter_elements",constants:D}})})}return{passes:T,localHistogramBindGroupLayout:S,scatterBindGroupLayout:g}}function xc(o){const a=o.createShaderModule({label:"local histogram",code:lc}),u=o.createShaderModule({label:"scatter",code:ac}),S=o.createShaderModule({label:"blelloch prefix",code:cc}),g=gc(o,S),w=wc(o,a,u);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:g}}function xi(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),u=a.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(w,0,new ArrayBuffer(32));const L={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:u,sampler:S,rectsBuffer:g,texParamsBuffer:w,meta:L}}class yc{constructor(a,u,S,g,w,L=null,T={}){U(this,"device");U(this,"pc");U(this,"presentationFormat");U(this,"camera_buffer");U(this,"render_settings_buffer");U(this,"draw_indirect_buffer");U(this,"splat_2d_buffer");U(this,"querySet");U(this,"resolveBuffer");U(this,"resultBuffer");U(this,"queriesPerFrame",fc);U(this,"queryCapacityFrames",200);U(this,"sort_prefixBindGroup");U(this,"sort_pipelines");U(this,"sort_localHistogramBindGroups");U(this,"sort_scatterBindGroups");U(this,"lastFrame",0);U(this,"frameCount",0);U(this,"preprocessPipeline");U(this,"cullPipeline");U(this,"renderPipeline");U(this,"indirectPipeline");U(this,"renderShaderModule");U(this,"betaKernel",1);U(this,"fetchById");U(this,"octBound");U(this,"acc16");U(this,"accTexture",null);U(this,"accView",null);U(this,"accW",0);U(this,"accH",0);U(this,"legacyRenderPipeline",null);U(this,"varyingsPipeline",null);U(this,"legacyRenderer",!1);U(this,"accResolvePipeline",null);U(this,"accResolveBgl",null);U(this,"accResolveBindGroup",null);U(this,"twoPass",!1);U(this,"twoPassThresh",.5);U(this,"twoPassParamsBuffer",null);U(this,"twoPassBglOpaque",null);U(this,"twoPassBglFront",null);U(this,"twoPassSplatsBgl",null);U(this,"twoPassSplatsBg",null);U(this,"twoPassBgOpaque",null);U(this,"twoPassBgFront",null);U(this,"twoPassPipelines",new Map);U(this,"twoPassDepth",null);U(this,"twoPassDepthView",null);U(this,"twoPassW",0);U(this,"twoPassH",0);U(this,"renderSettingsBgl");U(this,"preprocessBgl2");U(this,"renderSplatsBgl");U(this,"atlasBgl");U(this,"sort_info_buffer");U(this,"sort_ping_pong");U(this,"crsBg");U(this,"gsBg");U(this,"cullBg2");U(this,"preprocessBg1");U(this,"renderSplatsBindGroup");U(this,"renderSettingsBindGroup");U(this,"atlasBindGroup");U(this,"indirectBindGroup");U(this,"sh_solvers_buffer");U(this,"bfcParamsBuffer");U(this,"bfcBindGroupLayout");U(this,"bfcBindGroup");U(this,"staticSortKeys",null);U(this,"wideFrustum",!1);U(this,"staticKeysBuffer",null);U(this,"bgColor",[0,0,0,0]);U(this,"showPerfDialogNext",!1);U(this,"requestReorderNextFrame",!1);U(this,"reorderInFlight",!1);U(this,"downloadOnceNextRead",!1);U(this,"downloadOnceFileName","fps_metrics");U(this,"allFrameTimes",[]);U(this,"lastStageBreakdownMs",null);U(this,"timeQueryEnabled");U(this,"atlas");U(this,"atlasParamsBuffer");U(this,"_atlasEnabled",!0);U(this,"mipLodBias",1);U(this,"_mipMode",1);this.fetchById=T.fetchById??!0,this.staticSortKeys=T.staticSortKeys??null,this.wideFrustum=T.wideFrustum??!1,this.octBound=T.octBound??!1,this.acc16=T.acc16??!1,bt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const M=w.includes("timestamp-query");this.timeQueryEnabled=M,M&&bt("⏰ using timestamp-query"),this.pc=a,this.device=u,this.presentationFormat=S,this.camera_buffer=g,this.atlas=L??xi(u),this.atlasParamsBuffer=u.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),u.addEventListener("uncapturederror",Re=>{console.error("A WebGPU error was not captured:",Re.error)}),this._setupTimestampQueries(),this._setupBuffers();const D=(Math.floor((this.pc.num_points+hn-1)/hn)+1)*hn,N=Math.ceil(D/hn);console.log(`keys count adjusted: ${D}`),console.log(`key size: ${this.pc.num_points}`);const q=u.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=xc(u);const I=[wi(D,u),wi(D,u)],H=u.createBuffer({label:"workgroup histograms",size:N*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=u.createBuffer({label:"workgroup prefixes",size:N*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=u.createBuffer({label:"digit base",size:qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(N/hn),ne=Math.ceil(Q/hn),$=u.createBuffer({label:"prefix l0 sums",size:Q*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=u.createBuffer({label:"prefix l0 offsets",size:Q*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=u.createBuffer({label:"prefix l1 sums",size:ne*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),me=u.createBuffer({label:"prefix l1 offsets",size:ne*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=u.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:ee}},{binding:3,resource:{buffer:$}},{binding:4,resource:{buffer:ie}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:me}},{binding:7,resource:{buffer:Z}}]}),this.sort_localHistogramBindGroups=[u.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:I[0].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]}),u.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:I[1].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]})],this.sort_scatterBindGroups=[u.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:I[0].sort_depths_buffer}},{binding:3,resource:{buffer:I[1].sort_depths_buffer}},{binding:4,resource:{buffer:I[0].sort_indices_buffer}},{binding:5,resource:{buffer:I[1].sort_indices_buffer}},{binding:6,resource:{buffer:ee}}]}),u.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:I[1].sort_depths_buffer}},{binding:3,resource:{buffer:I[0].sort_depths_buffer}},{binding:4,resource:{buffer:I[1].sort_indices_buffer}},{binding:5,resource:{buffer:I[0].sort_indices_buffer}},{binding:6,resource:{buffer:ee}}]})],this.sort_info_buffer=q,this.sort_ping_pong=I;const fe=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),_e=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:fe,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:_e,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=de,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const De=this.device.createShaderModule({code:ic});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:De,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const te=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],le=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:kn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),te.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),le.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:te}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:le});const ye=this.device.createShaderModule({code:cs(oc,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,_e,ue,this.bfcBindGroupLayout]}),compute:{module:ye,entryPoint:"surfel_cull"}});const Ge=this.device.createShaderModule({code:rc});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,de]}),compute:{module:Ge,entryPoint:"preprocess"}});const ke=this.device.createShaderModule({label:"render_2dgs",code:cs(Fs,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ke.getCompilationInfo().then(Re=>{Re.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Re.messages.forEach(Ue=>{(Ue.type==="error"?console.error:Ue.type==="warning"?console.warn:console.log)(`${Ue.type} (line ${Ue.lineNum}:${Ue.linePos}): ${Ue.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const X=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),j=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,V=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:j,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ve=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Ae=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[X,V,ve]}),vertex:{module:ke,entryPoint:"vs_main"},fragment:{module:ke,entryPoint:"fs_main",constants:{BETA_KERNEL:Ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ne=(Re,Ue,ae)=>{const xe=this.device.createShaderModule({label:`render_2dgs (${Re})`,code:cs(Fs,{FETCH_BY_ID:Ue,OCT:ae})});return this.device.createRenderPipeline({label:`render_2dgs_${Re}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[X,V,ve]}),vertex:{module:xe,entryPoint:"vs_main"},fragment:{module:xe,entryPoint:"fs_main",constants:{BETA_KERNEL:Ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=Ne("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ne("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Re=>{Re?console.error("[render_2dgs] pipeline create validation error:",Re.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:X,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:V,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Ns].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ve,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ke,this.betaKernel=Ae,this.renderSettingsBgl=X,this.renderSplatsBgl=V,this.atlasBgl=ve}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,u){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,u[0],u[1],u[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var g;const a=new ArrayBuffer(32),u=new Uint32Array(a),S=new Float32Array(a);u[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,u[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,u[3]=this.atlas.meta.probe_mode|0||0,u[4]=this._mipMode!==0?Math.max(1,((g=this.atlas.meta.mip_bytes)==null?void 0:g.length)??1):1,S[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}setTwoPass(a){a!==this.twoPass&&(this.twoPass=a,bt(`[render_2dgs] two-pass layer path: ${a?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(a){this.twoPassThresh=Math.min(.999,Math.max(.001,a)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,mc,0,0]))}ensureTwoPassResources(a,u){var S;this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBglOpaque=this.device.createBindGroupLayout({label:"twopass (opaque: params only)",entries:[{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBglFront=this.device.createBindGroupLayout({label:"twopass (front: layer depth + params)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBgOpaque=this.device.createBindGroup({label:"twopass (opaque)",layout:this.twoPassBglOpaque,entries:[{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]}),this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (twopass)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (twopass)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Ns].sort_indices_buffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===a&&this.twoPassH===u)&&((S=this.twoPassDepth)==null||S.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,a),height:Math.max(1,u),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassBgFront=this.device.createBindGroup({label:"twopass (front)",layout:this.twoPassBglFront,entries:[{binding:0,resource:this.twoPassDepthView},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]}),this.twoPassW=a,this.twoPassH=u)}twoPassPipelinesFor(a,u){const S=`${a?"byid":"vary"}_${u?"oct":"quad"}`,g=this.twoPassPipelines.get(S);if(g!==void 0)return g;const w=this.device.createShaderModule({label:`render_2dgs twopass (${S})`,code:cs(Fs,{FETCH_BY_ID:a,OCT:u})});w.getCompilationInfo().then(D=>{for(const N of D.messages)N.type==="error"&&console.error(`[render_2dgs twopass ${S}] (line ${N.lineNum}:${N.linePos}): ${N.message}`)}),this.device.pushErrorScope("validation");const L=this.device.createRenderPipeline({label:`render_2dgs_opaque_${S}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBglOpaque]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),T=this.device.createRenderPipeline({label:`render_2dgs_front_${S}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBglFront]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(D=>{D?console.error(`[render_2dgs twopass ${S}] pipeline validation error:`,D.message):console.log(`[render_2dgs twopass ${S}] pipelines created OK`)});const M={opaque:L,front:T};return this.twoPassPipelines.set(S,M),M}ensureAccResources(a,u){var S;if(this.accResolvePipeline===null){const g=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:g});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===u||((S=this.accTexture)==null||S.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,u),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=u)}setAtlas(a){this.atlas=a??xi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,bt(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,Wn({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const u=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([u])),bt(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const u=Math.max(0,Math.min(a,this.pc.num_points)),S=u*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[Ns].sort_indices_buffer,0,g,0,S),this.device.queue.submit([w.finish()]),await g.mapAsync(GPUMapMode.READ);const L=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",u,"):",Array.from(L)),g.unmap()}frame(a,u,S=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,L=S&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};L&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const M=a.beginComputePass(T);M.setPipeline(this.cullPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.gsBg),M.setBindGroup(2,this.cullBg2),M.setBindGroup(3,this.bfcBindGroup);const D=Math.ceil(this.pc.num_points/pc);M.dispatchWorkgroups(D,1,1),M.end()}{const T=a.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};L&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const M=a.beginComputePass(T);M.setPipeline(this.preprocessPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.preprocessBg1),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),M.end()}for(let T=0;T<ps;T++){const M=T&1,D=this.sort_pipelines.passes[T],N=this.sort_localHistogramBindGroups[M],q=this.sort_scatterBindGroups[M];{const I={label:`upsweep_round${T}`};L&&T==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const H=a.beginComputePass(I);H.setPipeline(D.localHistogram),H.setBindGroup(0,N),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const I=a.beginComputePass({label:`prefix_round${T} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=a.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=a.beginComputePass({label:`prefix_round${T} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,qt,1),I.end()}{const I=a.beginComputePass({label:`prefix_round${T} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=a.beginComputePass({label:`prefix_round${T} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=a.beginComputePass({label:`prefix_round${T} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${T}`};L&&T==ps-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const H=a.beginComputePass(I);H.setPipeline(D.scatterElements),H.setBindGroup(0,q),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}{let T=u;if(this.acc16&&(this.ensureAccResources(ft.canvas_size[0],ft.canvas_size[1]),T=this.accView),this.twoPass){this.ensureTwoPassResources(ft.canvas_size[0],ft.canvas_size[1]);const M=this.fetchById&&!this.legacyRenderer,D=this.octBound&&!this.legacyRenderer,N=this.twoPassPipelinesFor(M,D),q={label:"render_opaque_layer",colorAttachments:[{view:T,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};L&&(q.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6});const I=a.beginRenderPass(q);I.setPipeline(N.opaque),I.setBindGroup(0,this.renderSettingsBindGroup),I.setBindGroup(1,this.twoPassSplatsBg),I.setBindGroup(2,this.atlasBindGroup),I.setBindGroup(3,this.twoPassBgOpaque),I.drawIndirect(this.draw_indirect_buffer,0),I.end();const H={label:"render_front",colorAttachments:[{view:T,loadOp:"load",storeOp:"store"}]};L&&!this.acc16&&(H.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const ee=a.beginRenderPass(H);ee.setPipeline(N.front),ee.setBindGroup(0,this.renderSettingsBindGroup),ee.setBindGroup(1,this.twoPassSplatsBg),ee.setBindGroup(2,this.atlasBindGroup),ee.setBindGroup(3,this.twoPassBgFront),ee.drawIndirect(this.draw_indirect_buffer,0),ee.end()}else{const M={label:"render",colorAttachments:[{view:T,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};L&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...this.acc16?{}:{endOfPassWriteIndex:w+7}});const D=a.beginRenderPass(M);D.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}if(this.acc16){const M={label:"acc16_resolve",colorAttachments:[{view:u,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};L&&(M.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const D=a.beginRenderPass(M);D.setPipeline(this.accResolvePipeline),D.setBindGroup(0,this.accResolveBindGroup),D.draw(3),D.end()}}this.frameCount++}async readPerfMetrics(a){const u=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),L=Math.min(this.frameCount,this.queryCapacityFrames),T=(this.lastFrame+this.frameCount-L)%this.queryCapacityFrames,M=Array.from({length:g.length},()=>[]);let D=0;for(let ne=0;ne<L;ne++){const $=(T+ne)%this.queryCapacityFrames,ie=$*this.queriesPerFrame;let K=!0;for(let me=0;me<g.length;me++){const[fe,_e,ue]=g[me];if(w[ie+ue]===0n||w[ie+_e]===0n||w[ie+_e]<w[ie+ue]){K=!1;break}}if(!K){!u&&$%60===0&&console.debug("[timestamp] frame slot",$,"contains unwritten (0) timestamps, skipped in stats");continue}D++;for(let me=0;me<g.length;me++){const[fe,_e,ue]=g[me],de=Number(w[ie+ue]),De=Number(w[ie+_e]);M[me].push((De-de)/1e6)}}if(D===0){this.resultBuffer.unmap(),u||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...M[0]);const N=[];let q=0,I=0,H=0;for(let ne=0;ne<g.length;ne++){const $=g[ne][0],ie=M[ne];let K=0;if($==="Total"){const me=this.allFrameTimes;K=me.reduce((ue,de)=>ue+de,0)/me.length;const fe=[...me].sort((ue,de)=>ue-de);q=fe[Math.floor(fe.length*.99)]||0;const _e=me.reduce((ue,de)=>ue+Math.pow(de-K,2),0)/me.length;I=Math.sqrt(_e),H=K}else K=ie.reduce((me,fe)=>me+fe,0)/ie.length;N.push([$,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const ee=Object.fromEntries(N);this.lastStageBreakdownMs={cull:ee.Culling??0,preprocess:ee.Preprocess??0,sort:ee.Sort??0,render:ee.Render??0,total:ee.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+N.map(([ne,$])=>`${ne}: ${$.toFixed(3)}ms`).join(`
`)+`
Total P99: ${q.toFixed(3)}ms
Total STD: ${I.toFixed(3)}ms
Total AVG: ${H.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(u||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ne=`Stage,ms
`,$=N.map(([me,fe])=>`${me},${fe.toFixed(3)}`).join(`
`),ie="data:text/csv;charset=utf-8,"+encodeURIComponent(ne+$),K=document.createElement("a");K.href=ie,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:hc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),u=a?a.width:1,S=a?a.height:1;dc({width:u,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Di(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:kn(this.pc.num_points*_c),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:kn(this.pc.num_points*vc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const u=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=u.length>0?u:this.downloadOnceFileName}else{const u=new Date,S=`${u.getFullYear()}${String(u.getMonth()+1).padStart(2,"0")}${String(u.getDate()).padStart(2,"0")}_${String(u.getHours()).padStart(2,"0")}${String(u.getMinutes()).padStart(2,"0")}${String(u.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function Pc(o,a){return 2*Math.atan(a/(2*o))}function Sc(o,a,u,S){const g=Math.tan(S/2),w=Math.tan(u/2),L=g*o,T=-L,M=w*o,D=-M,N=ht.create();return N[0]=2*o/(M-D),N[5]=-2*o/(L-T),N[2]=(M+D)/(M-D),N[6]=(L+T)/(L-T),N[14]=1,N[10]=a/(a-o),N[11]=-(a*o)/(a-o),ht.transpose(N,N),N}async function Ec(o){bt(`loading scene camera file... : ${o}`);const u=await(await fetch(o)).json();return bt(`loaded cameras count: ${u.length}`),u.map(S=>{const g=z.clone(S.position),w=Bt.create(...S.rotation.flat()),L=w[0],T=w[4],M=w[8],D=w[1],N=w[5],q=w[9],I=w[2],H=w[6],ee=w[10];L*(N*ee-q*H)-T*(D*ee-q*I)+M*(D*H-N*I)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const Q=ht.fromMat3(w);return{position:g,rotation:Q,img_name:S.img_name,id:S.id}})}const Cc=4*2,kc=4*16,Ri=4*kc+2*Cc;function Mc(o){return o.createBuffer({label:"camera uniform",size:Ri,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const pn=new Float32Array(Ri/Float32Array.BYTES_PER_ELEMENT),hs=class hs{constructor(a,u){U(this,"_renderSize",null);U(this,"uniform_buffer");U(this,"position",z.create());U(this,"rotation",ht.create());U(this,"zfar",100);U(this,"fovY",45/180*Math.PI);U(this,"fovX");U(this,"focalRatioX",1);U(this,"focal",oi.create());U(this,"viewport",oi.create());U(this,"view_matrix",ht.identity());U(this,"view_inv_matrix",ht.identity());U(this,"proj_matrix",ht.identity());U(this,"proj_inv_matrix",ht.identity());U(this,"_negPos",z.create());U(this,"look",z.create(0,0,1));U(this,"up",z.create(0,1,0));U(this,"right",z.create(1,0,0));this.canvas=a,this.device=u,this.uniform_buffer=Mc(u),this.on_update_canvas()}setRenderSize(a,u){this._renderSize=[a,u],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,u=this._renderSize?this._renderSize[1]:this.canvas.height,S=.5*u/Math.tan(this.fovY*.5);this.focal[0]=S*this.focalRatioX,this.focal[1]=S,this.fovX=Pc(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=u,this.proj_matrix=Sc(.01,this.zfar,this.fovX,this.fovY),ht.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ht.copy(this.rotation,this.view_matrix),ht.translate(this.view_matrix,this._negPos,this.view_matrix),ht.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(hs.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let a=0;pn.set(this.view_matrix,a),a+=16,pn.set(this.view_inv_matrix,a),a+=16,pn.set(this.proj_matrix,a),a+=16,pn.set(this.proj_inv_matrix,a),a+=16,pn.set(this.viewport,a),a+=2,pn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,pn)}set_preset(a){z.copy(a.position,this.position),ht.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};U(hs,"Z_AXIS",z.create(0,0,1));let Ks=hs;const Bc=z.create(1,0,0),Tc=z.create(0,1,0),Ac=z.create(0,0,1);function Dc(o,a){const u=o[0],S=o[4],g=o[8],w=o[1],L=o[5],T=o[9],M=o[2],D=o[6],N=o[10],q=u+L+N;let I,H,ee,Z;if(q>0){const Q=.5/Math.sqrt(q+1);I=.25/Q,H=(D-T)*Q,ee=(g-M)*Q,Z=(w-S)*Q}else if(u>L&&u>N){const Q=2*Math.sqrt(1+u-L-N);I=(D-T)/Q,H=.25*Q,ee=(S+w)/Q,Z=(g+M)/Q}else if(L>N){const Q=2*Math.sqrt(1+L-u-N);I=(g-M)/Q,H=(S+w)/Q,ee=.25*Q,Z=(T+D)/Q}else{const Q=2*Math.sqrt(1+N-u-L);I=(w-S)/Q,H=(g+M)/Q,ee=(T+D)/Q,Z=.25*Q}return a[0]=H,a[1]=ee,a[2]=Z,a[3]=I,a}class Rc{constructor(a){U(this,"element");U(this,"enabled",!0);U(this,"center",z.create(0,0,0));U(this,"up",z.create(0,1,0));U(this,"rotation",[0,0]);U(this,"shift",[0,0]);U(this,"scroll",0);U(this,"speed",.1);U(this,"sensitivity",.08);U(this,"leftPressed",!1);U(this,"rightPressed",!1);U(this,"leftDragPans",!1);U(this,"lastX",0);U(this,"lastY",0);U(this,"touches",new Map);U(this,"lastTouchCenter",null);U(this,"lastPinchDistance",null);U(this,"lastTwoFingerAngle",null);U(this,"lastTouchCount",0);U(this,"roll",0);U(this,"_dir",z.create());U(this,"_right",z.create());U(this,"_upCam",z.create());U(this,"_scratch",z.create());U(this,"_qY",dt.create());U(this,"_qX",dt.create());U(this,"_qRot",dt.create());U(this,"_qZ",dt.create());U(this,"_qLocal",dt.create());U(this,"_qWorldToCam",dt.create());U(this,"_scratchMat3",Bt.create());U(this,"bboxMin",null);U(this,"bboxMax",null);U(this,"anchor",z.create(0,0,0));U(this,"downCallback",a=>{var u,S,g,w;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(S=(u=a.target)==null?void 0:u.setPointerCapture)==null||S.call(u,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(w=(g=a.target)==null?void 0:g.setPointerCapture)==null||w.call(g,a.pointerId),a.preventDefault())}});U(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const u=a.pageX-this.lastX,S=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=u,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=u,this.shift[0]+=S)});U(this,"upCallback",a=>{var u,S,g,w;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(S=(u=a.target)==null?void 0:u.releasePointerCapture)==null||S.call(u,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(g=a.target)==null?void 0:g.releasePointerCapture)==null||w.call(g,a.pointerId),a.preventDefault()});U(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let u=a.deltaY;a.deltaMode===1?u*=16:a.deltaMode===2&&(u*=100),this.scroll+=u*.01});this.camera=a,this.registerElement(a.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const a=this.bboxMax[0]-this.bboxMin[0],u=this.bboxMax[1]-this.bboxMin[1],S=this.bboxMax[2]-this.bboxMin[2],g=.5*Math.sqrt(a*a+u*u+S*S);return g>1e-6?g:null}addRoll(a){this.roll+=a}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",u=>u.preventDefault())}setCenter(a){z.copy(a,this.center),z.copy(a,this.anchor)}setOrbitPivot(a){z.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const u=this.camera.rotation;z.set(u[2],u[6],u[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,a,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(z.subtract(this.center,a.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const u=a.rotation;u[0]=this._right[0],u[1]=this._upCam[0],u[2]=this._scratch[0],u[3]=0,u[4]=this._right[1],u[5]=this._upCam[1],u[6]=this._scratch[1],u[7]=0,u[8]=this._right[2],u[9]=this._upCam[2],u[10]=this._scratch[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,a.update_buffer()}setBbox(a,u){this.bboxMin=z.create(a[0],a[1],a[2]),this.bboxMax=z.create(u[0],u[1],u[2]);const S=(a[0]+u[0])*.5,g=(a[1]+u[1])*.5,w=(a[2]+u[2])*.5;z.set(S,g,w,this.center),z.set(S,g,w,this.anchor)}resetToCamera(){const a=this.camera.rotation;z.set(a[2],a[6],a[10],this._dir),z.normalize(this._dir,this._dir);let u=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,g=1/0,w=!1;for(let L=0;L<3;L++){const T=this._dir[L],M=this.bboxMin[L]-this.camera.position[L],D=this.bboxMax[L]-this.camera.position[L];if(Math.abs(T)>1e-8){const N=M/T,q=D/T;S=Math.max(S,Math.min(N,q)),g=Math.min(g,Math.max(N,q))}else if(M>0||D<0){w=!0;break}}!w&&S<=g&&g>0&&(u=(Math.max(S,0)+g)*.5)}if(u===null||!isFinite(u)||u<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const S=z.dot(this._scratch,this._dir);u=S>.001?S:z.length(this._scratch)}u=Math.max(.1,u),z.scale(this._dir,u,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const u=this.touches.values().next().value;if(this.lastTouchCenter){const S=u.x-this.lastTouchCenter[0],g=u.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[u.x,u.y]}else if(a===2){const u=Array.from(this.touches.values()),S=(u[0].x+u[1].x)*.5,g=(u[0].y+u[1].y)*.5,w=u[1].x-u[0].x,L=u[1].y-u[0].y,T=Math.hypot(w,L),M=Math.atan2(L,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const D=S-this.lastTouchCenter[0],N=g-this.lastTouchCenter[1],q=Math.hypot(D,N),I=Math.abs(T-this.lastPinchDistance);let H=M-this.lastTwoFingerAngle;H>Math.PI&&(H-=2*Math.PI),H<-Math.PI&&(H+=2*Math.PI),q>.5&&(this.shift[1]-=D,this.shift[0]+=N),I>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(T/this.lastPinchDistance)*10),Math.abs(H)>.0087&&(this.roll+=H)}this.lastTouchCenter=[S,g],this.lastPinchDistance=T,this.lastTwoFingerAngle=M}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const u=this.camera;{const Q=u.rotation;this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let S=0,g=!1;Math.abs(this.roll)>1e-4&&(S=this.roll,this.roll=0,g=!0),z.subtract(u.position,this.center,this._dir);let w=z.length(this._dir);w<1e-6&&(w=1e-6);const L=Math.exp(Math.log(w)+this.scroll*a*10*this.speed);z.scale(this._dir,L/w,this._dir),w=L;const T=u.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const M=z.create(T[1],T[5],T[9]);z.normalize(M,M),z.length(M)<1e-6&&z.set(0,1,0,M);const D=a*this.speed*.1*w,N=this.shift[1]*D,q=-this.shift[0]*D;z.scale(this._right,N,this._scratch),z.add(this.center,this._scratch,this.center),z.add(u.position,this._scratch,u.position),z.scale(M,q,this._scratch),z.add(this.center,this._scratch,this.center),z.add(u.position,this._scratch,u.position);const I=this.rotation[0]*a*this.sensitivity,H=this.rotation[1]*a*this.sensitivity;if(Math.abs(I)>1e-5||Math.abs(H)>1e-5||g){const Q=u.rotation;Dc(Q,this._qWorldToCam),dt.fromAxisAngle(Bc,-H,this._qX),dt.fromAxisAngle(Tc,-I,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),g&&(dt.fromAxisAngle(Ac,1*S,this._qZ),dt.multiply(this._qZ,this._qLocal,this._qLocal)),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),Bt.fromQuat(this._qWorldToCam,this._scratchMat3),ht.fromMat3(this._scratchMat3,u.rotation);const ne=u.rotation,$=ne[2],ie=ne[6],K=ne[10];u.position[0]=this.center[0]-$*w,u.position[1]=this.center[1]-ie*w,u.position[2]=this.center[2]-K*w,this.up[0]=ne[1],this.up[1]=ne[5],this.up[2]=ne[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,u.position);u.update_buffer();const Z=Math.pow(.8,a*60);this.rotation[0]*=Z,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=Z,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=Z,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=Z,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=Z,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Li(o){const a=z.create();for(const u of o)z.add(a,u,a);return z.scale(a,1/Math.max(o.length,1),a)}function Ii(o,a){const u=Bt.create();Bt.inverse(o,u);const S=z.create();return S[0]=u[0]*a[0]+u[4]*a[1]+u[8]*a[2],S[1]=u[1]*a[0]+u[5]*a[1]+u[9]*a[2],S[2]=u[2]*a[0]+u[6]*a[1]+u[10]*a[2],S}function Lc(o){const a=o.slice(),u=[1,0,0,0,1,0,0,0,1],S=(M,D)=>a[M*3+D],g=(M,D,N)=>{a[M*3+D]=N},w=(M,D)=>u[M*3+D],L=(M,D,N)=>{u[M*3+D]=N};for(let M=0;M<30;M++){let D=0,N=1,q=Math.abs(S(0,1));if(Math.abs(S(0,2))>q&&(D=0,N=2,q=Math.abs(S(0,2))),Math.abs(S(1,2))>q&&(D=1,N=2,q=Math.abs(S(1,2))),q<1e-12)break;const I=S(D,D),H=S(N,N),ee=S(D,N);let Z;Math.abs(I-H)<1e-30?Z=Math.PI/4*Math.sign(ee):Z=.5*Math.atan2(2*ee,I-H);const Q=Math.cos(Z),ne=Math.sin(Z);for(let $=0;$<3;$++){const ie=S($,D),K=S($,N);g($,D,Q*ie+ne*K),g($,N,-ne*ie+Q*K)}for(let $=0;$<3;$++){const ie=S(D,$),K=S(N,$);g(D,$,Q*ie+ne*K),g(N,$,-ne*ie+Q*K)}for(let $=0;$<3;$++){const ie=w($,D),K=w($,N);L($,D,Q*ie+ne*K),L($,N,-ne*ie+Q*K)}}const T=[];for(let M=0;M<3;M++)T.push({val:S(M,M),vec:z.create(w(0,M),w(1,M),w(2,M))});return T.sort((M,D)=>D.val-M.val),{vals:[T[0].val,T[1].val,T[2].val],vecs:[T[0].vec,T[1].vec,T[2].vec]}}function Ic(o,a){const u=Li(o);let S=0,g=0,w=0,L=0,T=0,M=0;for(const ee of o){const Z=ee[0]-u[0],Q=ee[1]-u[1],ne=ee[2]-u[2];S+=Z*Z,g+=Z*Q,w+=Z*ne,L+=Q*Q,T+=Q*ne,M+=ne*ne}const D=[S,g,w,g,L,T,w,T,M],{vecs:N}=Lc(D);let q=N[0],I=N[1],H=N[2];return z.dot(H,a)<0&&(z.scale(H,-1,H),z.scale(I,-1,I)),{centroid:u,normal:H,u:q,v:I}}function Gc(o){let a=0,u=0,S=0,g=0,w=0,L=0,T=0,M=0,D=0;for(const[Q,ne]of o){const $=-2*Q,ie=-2*ne,K=1,me=-(Q*Q+ne*ne);a+=$*$,u+=$*ie,S+=$*K,g+=ie*ie,w+=ie*K,L+=K*K,T+=$*me,M+=ie*me,D+=K*me}const N=Bt.create(a,u,S,u,g,w,S,w,L),q=Ii(N,z.create(T,M,D)),I=q[0],H=q[1],ee=q[2],Z=I*I+H*H-ee;return{center:[I,H],radius:Math.sqrt(Math.max(Z,1e-12))}}function zc(o,a){let u=0,S=0,g=0,w=0,L=0,T=0,M=0,D=0,N=0;for(let I=0;I<o.length;I++){const H=o[I],ee=z.normalize(a[I],z.create()),Z=1-ee[0]*ee[0],Q=-ee[0]*ee[1],ne=-ee[0]*ee[2],$=1-ee[1]*ee[1],ie=-ee[1]*ee[2],K=1-ee[2]*ee[2];u+=Z,S+=Q,g+=ne,w+=$,L+=ie,T+=K,M+=Z*H[0]+Q*H[1]+ne*H[2],D+=Q*H[0]+$*H[1]+ie*H[2],N+=ne*H[0]+ie*H[1]+K*H[2]}const q=Bt.create(u,S,g,S,w,L,g,L,T);return Ii(q,z.create(M,D,N))}function Gi(o,a={}){if(o.length===0)return null;const u=a.tiltDownDeg??8,S=a.radiusScale??1,g=a.alignFirst??!0,w=(a.direction??"ccw")==="ccw"?1:-1,L=o.map(ue=>z.clone(ue.position)),T=o.map(ue=>{const de=ue.rotation;return z.create(de[8],de[9],de[10])}),M=o.map(ue=>{const de=ue.rotation;return z.create(de[4],de[5],de[6])}),D=Li(M),N=z.normalize(z.scale(D,-1,z.create())),{centroid:q,normal:I,u:H,v:ee}=Ic(L,N),Z=L.map(ue=>{const de=z.sub(ue,q,z.create());return[z.dot(de,H),z.dot(de,ee)]}),{center:Q,radius:ne}=Gc(Z),$=ne*S,ie=z.add(q,z.add(z.scale(H,Q[0],z.create()),z.scale(ee,Q[1],z.create()),z.create()),z.create()),K=zc(L,T),me=$*Math.tan(u*Math.PI/180),fe=z.sub(K,z.scale(I,me,z.create()),z.create());let _e=0;if(g){const ue=z.sub(L[0],ie,z.create());_e=Math.atan2(z.dot(ue,ee),z.dot(ue,H))/(2*Math.PI)%1,_e<0&&(_e+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${$.toFixed(2)}, tilt=${u}°, normal=[${I[0].toFixed(2)}, ${I[1].toFixed(2)}, ${I[2].toFixed(2)}], startPhase=${_e.toFixed(3)}`),{center:ie,radius:$,normal:I,u:H,v:ee,lookAt:fe,startPhase:_e,direction:w}}function zi(o,a){const u=(o.startPhase+a*o.direction)*2*Math.PI,S=Math.cos(u),g=Math.sin(u),w=z.add(o.center,z.add(z.scale(o.u,o.radius*S,z.create()),z.scale(o.v,o.radius*g,z.create()),z.create()),z.create()),L=z.normalize(z.sub(o.lookAt,w,z.create())),T=z.cross(L,o.normal,z.create());z.length(T)<1e-6&&z.copy(o.u,T),z.normalize(T,T);const M=z.cross(L,T,z.create());z.normalize(M,M);const D=ht.create();return D[0]=T[0],D[1]=M[0],D[2]=L[0],D[3]=0,D[4]=T[1],D[5]=M[1],D[6]=L[1],D[7]=0,D[8]=T[2],D[9]=M[2],D[10]=L[2],D[11]=0,D[12]=0,D[13]=0,D[14]=0,D[15]=1,{position:w,rotation:D,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Uc(o,a={}){const u=Gi(o,a);if(!u)return[];const S=a.numViews??120;return Array.from({length:S},(g,w)=>({...zi(u,w/S),img_name:`circle_${w.toString().padStart(4,"0")}`,id:w}))}function Wt(o){const a=(o&32768)>>15,u=(o&31744)>>10,S=o&1023;return u===0?(a?-1:1)*Math.pow(2,-14)*(S/1024):u===31?S?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,u-15)*(1+S/1024)}function Hs(o,a,u,S,g,w,L,T,M,D=.5){const N=M?M.length:L.length/8,q=[],I=[];for(let Z=0;Z<N;Z++){const ne=(M?M[Z]:Z)*8,$=L[ne]-o,ie=L[ne+1]-a,K=L[ne+2]-u,me=$*S+ie*g+K*w;if(me<=0||!(T[ne+7]>>>16&1))continue;const fe=T[ne+4],_e=Wt(fe&65535),ue=Wt(fe>>>16&65535),de=3*Math.max(_e,ue),De=$-me*S,te=ie-me*g,le=K-me*w;if(De*De+te*te+le*le>de*de)continue;const ye=Wt(T[ne+3]&65535);if(ye<1/255)continue;const Ge=T[ne+5],ke=T[ne+6];let X=Wt(Ge&65535),j=Wt(Ge>>>16&65535),V=Wt(ke&65535),ve=Wt(ke>>>16&65535);const Ae=Math.hypot(X,j,V,ve)||1;X/=Ae,j/=Ae,V/=Ae,ve/=Ae;const Ne=1-2*(V*V+ve*ve),Re=2*(j*V+X*ve),Ue=2*(j*ve-X*V),ae=2*(j*V-X*ve),xe=1-2*(j*j+ve*ve),Ee=2*(V*ve+X*j),B=2*(j*ve+X*V),F=2*(V*ve-X*j),v=1-2*(j*j+V*V),i=S*B+g*F+w*v;if(Math.abs(i)<1e-6)continue;const f=($*B+ie*F+K*v)/i;if(!(f>0))continue;const d=f*S-$,b=f*g-ie,y=f*w-K,k=(d*Ne+b*Re+y*Ue)/(_e||1e-6),E=(d*ae+b*xe+y*Ee)/(ue||1e-6),r=k*k+E*E;if(r>9)continue;const m=Math.min(.99,ye*Math.exp(-.5*r));m<1/255||(q.push(f),I.push(m))}if(q.length===0)return null;const H=q.map((Z,Q)=>Q).sort((Z,Q)=>q[Z]-q[Q]);let ee=1;for(const Z of H)if(ee*=1-I[Z],ee<D)return q[Z];return null}function Ys(o,a,u){const S=(o-u.viewport[0]*.5)/u.focal[0],g=-((a-u.viewport[1]*.5)/u.focal[1]),w=u.rotation;let L=S*w[0]+g*w[1]+w[2],T=S*w[4]+g*w[5]+w[6],M=S*w[8]+g*w[9]+w[10];const D=Math.hypot(L,T,M)||1;return[L/D,T/D,M/D]}function Oc(o,a,u,S,g,w){const[L,T,M]=Ys(o,a,S),D=S.position[0],N=S.position[1],q=S.position[2],I=new Uint32Array(g.buffer,g.byteOffset,g.length);let H=Hs(D,N,q,L,T,M,g,I,null,.5);return H===null&&(H=Hs(D,N,q,L,T,M,g,I,null,.8)),H===null?null:[D+H*L,N+H*T,q+H*M]}function Vc(o,a){const u=o.viewport[0],S=o.viewport[1],g=new Uint32Array(a.buffer,a.byteOffset,a.length),w=o.position[0],L=o.position[1],T=o.position[2],[M,D,N]=Ys(u*.5,S*.5,o),q=.06*Math.max(u,S),I=(q+2)/o.focal[0],H=a.length/8,ee=[];for(let $=0;$<H;$++){const ie=$*8,K=a[ie]-w,me=a[ie+1]-L,fe=a[ie+2]-T,_e=K*M+me*D+fe*N;if(_e<=0)continue;const ue=g[ie+4],de=3*Math.max(Wt(ue&65535),Wt(ue>>>16&65535)),De=K-_e*M,te=me-_e*D,le=fe-_e*N,ye=_e*I+de;De*De+te*te+le*le<=ye*ye&&ee.push($)}if(ee.length===0)return null;const Z=Int32Array.from(ee),Q=[],ne=5;for(let $=0;$<ne;$++)for(let ie=0;ie<ne;ie++){const K=u*.5+(ie-(ne-1)/2)/((ne-1)/2)*q,me=S*.5+($-(ne-1)/2)/((ne-1)/2)*q,[fe,_e,ue]=Ys(K,me,o),de=Hs(w,L,T,fe,_e,ue,a,g,Z,.5);de!==null&&Q.push(de*(fe*M+_e*D+ue*N))}return Q.length<3?null:(Q.sort(($,ie)=>$-ie),Q[Q.length>>1])}function Fc(o){return new Promise(a=>{const u=document.createElement("input");u.type="file",u.accept=o,u.style.display="none",u.onchange=()=>{var S;return a(((S=u.files)==null?void 0:S[0])??null)},document.body.appendChild(u),u.click(),setTimeout(()=>document.body.removeChild(u),1e3)})}function Nc(o,a,u){const S=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),w=document.getElementById("quick-links");g&&(g.onclick=async()=>{const D=await Fc(".ply,.bitymi");if(D)if(S&&(S.style.display="none"),D.name.toLowerCase().endsWith(".bitymi")){const N=await D.arrayBuffer(),{pcBuffer:q}=Ti(N),I=new File([q],D.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),H=await $s(I,o);a(H)}else{const N=await $s(D,o);a(N)}}),w&&(w.innerHTML="");const L=new URLSearchParams(window.location.search),T=L.get("bundle")??L.get("model_url"),M=L.get("camera_url");T&&(S&&(S.style.display="none"),u(T,M))}async function $c(o,a,u,S){const g=new Ks(o,u),w=new Rc(g);let L=!1;o.addEventListener("pointerdown",()=>{L=!0}),window.addEventListener("pointerup",()=>{L=!1});const T=typeof window<"u"&&window.parent!==window,M={pos:new Float32Array(3),rot:new Float32Array(16)};if(T){window.addEventListener("message",X=>{const j=X.data;if(!(!j||j.type!=="halloumi_sync_pose")&&!(!Array.isArray(j.position)||j.position.length!==3)&&!(!Array.isArray(j.rotation)||j.rotation.length!==16)){for(let V=0;V<3;V++)g.position[V]=j.position[V];for(let V=0;V<16;V++)g.rotation[V]=j.rotation[V];g.update_buffer(),w.resetToCamera();for(let V=0;V<3;V++)M.pos[V]=g.position[V];for(let V=0;V<16;V++)M.rot[V]=g.rotation[V]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const D=()=>{if(!T)return;const X=g.position,j=g.rotation;let V=!1;for(let ve=0;ve<3;ve++)if(Math.abs(X[ve]-M.pos[ve])>1e-6){V=!0;break}if(!V){for(let ve=0;ve<16;ve++)if(Math.abs(j[ve]-M.rot[ve])>1e-6){V=!0;break}}if(V){for(let ve=0;ve<3;ve++)M.pos[ve]=X[ve];for(let ve=0;ve<16;ve++)M.rot[ve]=j[ve];try{window.parent.postMessage({type:"halloumi_camera_state",position:[X[0],X[1],X[2]],rotation:Array.from(j)},"*")}catch{}}},N="rgba8unorm";a.configure({device:u,format:N,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let q=null,I=null;const H=()=>{g.on_update_canvas(),q!==null&&Cn(o.width,o.height,u,q.render_settings_buffer),I!==null&&I()};new ResizeObserver(()=>{const X=Math.max(.25,le.render_scale),j=Math.max(1,Math.ceil(X*o.clientWidth)),V=Math.max(1,Math.ceil(X*o.clientHeight));o.width===j&&o.height===V||(o.width=j,o.height=V,H())}).observe(o);let Z=0,Q=0;const ne=()=>{(o.width!==Z||o.height!==Q)&&(Z=o.width,Q=o.height,H())},$=new URLSearchParams(window.location.search);let K=$.get("animation")==="1";w.enabled=!K;const me=$.get("camera_url"),fe=$.get("bfc"),_e=fe==="1"||fe==="true",ue=$.get("bfc_cos"),de=ue!==null?Number(ue):NaN,De=Number.isFinite(de)?de:2,te=Math.max(1,window.devicePixelRatio||1),le={gaussian_scaling:1,sh_bias:.5,animate:K,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:_e,bfc_cos:De,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,render_scale:1},ye=new sc.Pane({title:"Config",expanded:!0});ye.addInput(le,"animate",{label:"Animate"}).on("change",X=>{const j=K;K=X.value,w.enabled=!X.value,!j&&K&&Ge.value&&Ge.value.onAnimateStart(),j&&!K&&Ge.value&&Ge.value.onAnimateStop()}),ye.addInput(le,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Ge={value:null};Nc(u,X=>ke(X,[],null),async(X,j)=>{let V=j??me,ve,Ae=null;const Ne=X.toLowerCase();if(Ne.endsWith(".bitymi")||Ne.includes(".bitymi?")){Xs("downloading bundle ...");try{const{bundle:Ee}=await pi(X,(F,v,i)=>{const f=F/1048576,d=v?v/(1024*1024):void 0,b=i/(1024*1024),y=v?Math.min(99,Math.floor(F/v*100)):void 0,k=d?`total ${d.toFixed(1)} MB`:"total -- MB",E=d&&y!==void 0?`${f.toFixed(1)} MB downloaded (${y}%)`:`${f.toFixed(1)} MB downloaded`,r=`${b.toFixed(2)} MB/s`;jt(`downloading bundle ...
${k}, ${E}
${r}`)});if(!Ee)throw new Error("Expected a .bitymi bundle");jt("parsing PLY ...");const B=new File([Ee.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(ve=await $s(B,u),!V&&Ee.camerasBuffer&&(V=URL.createObjectURL(new Blob([Ee.camerasBuffer],{type:"application/json"}))),Ee.atlasBuffer){const F=Ee.atlasBuffer.byteLength/1048576;jt(`uploading atlas ...
${F.toFixed(1)} MB BC7`);try{const v=ci(Ee.atlasBuffer);Ae=ui(u,v,!0)}catch(v){console.warn("[atlas] failed to parse/upload atlas:",v)}}}catch(Ee){throw jn(),Ee}}else ve=await Hl(X,u);let Re=null,Ue="";const ae=$.get("atlas2");if(ae)try{const{bundle:Ee}=await pi(ae,(B,F)=>{jt(`downloading second atlas ...
${(B/1048576).toFixed(1)}${F?` / ${(F/1048576).toFixed(1)}`:""} MB`)});if(!(Ee!=null&&Ee.atlasBuffer))throw new Error("second bundle has no atlas chunk");jt("uploading second atlas ..."),Re=ui(u,ci(Ee.atlasBuffer),!0),Re||(Ue="second atlas: format unsupported on this device")}catch(Ee){console.warn("[atlas2] failed:",Ee),Ue=`second atlas failed: ${Ee}`}const xe=V?await Ec(V):[];xe.length>0&&g.set_preset(xe[0]),ke(ve,xe,Ae,Re,Ue)});function ke(X,j=[],V=null,ve=null,Ae=""){const Ne=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];w.setBbox(X.bbox.min,X.bbox.max),.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function Re(G,Y){const oe=Oc(G,Y,o,g,X.surfel_data);oe&&(w.setOrbitPivot(oe),console.log(`[pick] orbit pivot → (${oe[0].toFixed(3)}, ${oe[1].toFixed(3)}, ${oe[2].toFixed(3)})`))}function Ue(){const G=Vc(g,X.surfel_data);if(G!==null&&G>.001){w.setOrbitDepth(G);return}const Y=g.rotation,oe=Y[2],pe=Y[6],Ce=Y[10],he=(X.centroid[0]-g.position[0])*oe+(X.centroid[1]-g.position[1])*pe+(X.centroid[2]-g.position[2])*Ce;he>.001&&w.setOrbitDepth(he)}if(j.length===0){const G=X.bbox.max[0]-X.bbox.min[0],Y=X.bbox.max[1]-X.bbox.min[1],oe=X.bbox.max[2]-X.bbox.min[2],Ce=.5*Math.sqrt(G*G+Y*Y+oe*oe)*.5;z.set(Ne[0]-Ce,Ne[1]-Ce,Ne[2]-Ce,g.position);const he=z.create(Ce,Ce,Ce);z.normalize(he,he);const be=z.create(0,1,0),Se=z.create();z.cross(be,he,Se),z.normalize(Se,Se);const Ke=z.create();z.cross(he,Se,Ke);const _t=Bt.create(Se[0],Ke[0],he[0],Se[1],Ke[1],he[1],Se[2],Ke[2],he[2]);ht.fromMat3(_t,g.rotation),g.update_buffer()}w.setCenter(z.create(X.centroid[0],X.centroid[1],X.centroid[2]));const ae=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),xe="halloumi.fetch_by_id";let Ee=null;try{const G=localStorage.getItem(xe);(G==="0"||G==="1")&&(Ee=G==="1")}catch{}const B=$.get("byid"),F={fetchById:B!==null?B==="1":Ee!==null?Ee:!ae,octBound:$.get("oct")==="1",acc16:$.get("acc16")==="1"},v=new yc(X,u,N,g.uniform_buffer,S,V,F),i=$.get("surfel_math");le.surfel_math=i==="raysplat"||i==="centred"?i:$.get("raysplat")==="1"?"raysplat":"conic",le.hyp_legacy=$.get("hyp_legacy")==="1",Wn({hypLegacy:le.hyp_legacy,raysplat:le.surfel_math==="raysplat",centred:le.surfel_math==="centred"},u,v.render_settings_buffer),le.legacy_renderer=$.get("legacy")==="1",le.legacy_renderer&&v.setLegacyRenderer(!0),le.two_pass=$.get("twopass")==="1";{const G=parseFloat($.get("opaque_t")??"");Number.isFinite(G)&&(le.opaque_thresh=Math.min(.99,Math.max(.01,G)))}v.setOpaqueThresh(le.opaque_thresh),le.two_pass&&v.setTwoPass(!0),le.fetch_by_id=F.fetchById,console.log(`[render_2dgs] fetch_by_id=${F.fetchById} (source: ${B!==null?"?byid":Ee!==null?"remembered":`handheld=${ae}`})`),q=v,Cn(o.width,o.height,u,v.render_settings_buffer),le.atlas_enabled=V!==null;{const G=X.surfel_data,Y=G.length/8;let oe=0,pe=0,Ce=0;for(let be=0;be<Y;be++)oe+=G[be*8],pe+=G[be*8+1],Ce+=G[be*8+2];const he=Y>0?[oe/Y,pe/Y,Ce/Y]:[0,0,0];v.setBfcParams(le.bfc_cos,he),Wn({bfc:le.bfc},u,v.render_settings_buffer),console.log(`[bfc] flag=${le.bfc} cos=${le.bfc_cos} centroid=(${he[0].toFixed(3)}, ${he[1].toFixed(3)}, ${he[2].toFixed(3)})`)}let f=!1;const d=(()=>{if(V!==null)return`${V.meta.format===2?"BC7":V.meta.format===3?"ASTC 4×4":V.meta.format===7?"BC7 codebook gather (typeD)":`format=${V.meta.format}`} ${V.meta.width}×${V.meta.height}, ${V.meta.n_layers} layers`;const G=u.features.has("texture-compression-bc"),Y=u.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(G?["BC7"]:[]).concat(Y?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",d),gi(X.sh_bias,u,v.render_settings_buffer),bi(le.gaussian_scaling,u,v.render_settings_buffer),le.sh_bias=X.sh_bias;const b=X.num_points.toLocaleString(),y={stats:`${b} surfels · -- fps`};ye.addMonitor(y,"stats",{label:"Stats",interval:200});const k=.4,E=3,r=.3;let m=null,p=0,h=0;const l=dt.create(),_=Bt.create();let P=j.length>0?0:-1;const x={view:j.length>0?`${P+1} / ${j.length}: ${j[P].img_name??P}`:"— no presets —"},A=document.createElement("span");function O(G){const Y=Bt.create(G[0],G[1],G[2],G[4],G[5],G[6],G[8],G[9],G[10]);return dt.fromMat(Y)}function W(G,Y){m={fromPos:z.clone(g.position),toPos:z.clone(G.position),fromQuat:dt.normalize(O(g.rotation)),toQuat:dt.normalize(O(G.rotation)),target:G,t:0,duration:Math.max(.01,Y)}}const ce=(G,Y=!0)=>{if(j.length===0)return;P=(G%j.length+j.length)%j.length;const oe=j[P];Y?W(oe,k):(g.set_preset(oe),w.resetToCamera(),Ue()),x.view=`${P+1} / ${j.length}: ${j[P].img_name??P}`,A.textContent=x.view};if(j.length>0){const G=ye.addSeparator(),Y=document.createElement("div");Y.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const oe=(Ce,he,be)=>{const Se=document.createElement("button");return Se.className="tp-btnv_b",Se.textContent=Ce,Se.title=he,Se.style.cssText="flex:0 0 34px;height:24px;padding:0;",Se.addEventListener("click",be),Se};A.textContent=x.view,A.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Y.appendChild(oe("◀","previous view (←)",()=>ce(P-1))),Y.appendChild(A),Y.appendChild(oe("▶","next view (→)",()=>ce(P+1))),(ye.element.querySelector(".tp-rotv_c")??ye.element).insertBefore(Y,G.element),G.dispose()}const re=j.length>0?Gi(j,{tiltDownDeg:15,alignFirst:!0}):null,se=re?Uc(j,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ge=0;const Me=12;Ge.value={onAnimateStart:()=>{ge=0},onAnimateStop:()=>{w.resetToCamera(),Ue()}},ye.addInput(le,"render_scale",{label:"Render scale",min:.25,max:te,step:.25}).on("change",G=>{const Y=Math.max(.25,G.value),oe=Math.max(1,Math.ceil(Y*o.clientWidth)),pe=Math.max(1,Math.ceil(Y*o.clientHeight));(o.width!==oe||o.height!==pe)&&(o.width=oe,o.height=pe,H())});const we={res:""},Pe=()=>{const G=o.width*o.height/1e6;we.res=`${o.width}×${o.height}  (${G.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${te.toFixed(2)} · native ${Math.round(o.clientWidth*te)}×${Math.round(o.clientHeight*te)}`};Pe(),I=Pe,ye.addMonitor(we,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ye.addInput(le,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",G=>bi(G.value,u,v.render_settings_buffer)),ye.addInput(le,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",G=>gi(G.value,u,v.render_settings_buffer)),ye.addInput(le,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",G=>{v.bgColor=[G.value.r,G.value.g,G.value.b,G.value.a]});const Ie=G=>G===null?"":G.meta.format===3||G.meta.format===8||G.meta.format===10?" (ASTC)":" (BC7)";let Le=Ie(V);const qe=ye.addInput(le,"atlas_enabled",{label:`Texture${Le}`}).on("change",G=>{v.setAtlasEnabled(G.value),je()}),$e=document.createElement("button");$e.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const je=()=>{$e.textContent=`Texture${Le}: ${le.atlas_enabled?"ON":"OFF"}`,$e.style.borderColor=le.atlas_enabled?"#f0b060":"#444",$e.style.color=le.atlas_enabled?"#f0b060":"#bbb"},Xe=()=>{le.atlas_enabled=!le.atlas_enabled,v.setAtlasEnabled(le.atlas_enabled),qe.refresh(),je()};if($e.title="toggle the baked texture (T)",$e.addEventListener("click",Xe),V&&document.body.appendChild($e),je(),V&&(ve||Ae))if(ve){const G={};G[`A${Ie(V)} · bundle`]="A",G[`B${Ie(ve)} · atlas2`]="B";const Y={atlas:"A"};ye.addInput(Y,"atlas",{label:"Atlas source",options:G}).on("change",oe=>{const pe=oe.value==="B"?ve:V;v.setAtlas(pe),Le=Ie(pe),qe.label=`Texture${Le}`,je(),console.log(`[atlas2] now sampling ${oe.value}${Le}`)})}else{const G={note:Ae};ye.addMonitor(G,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const rt=V!==null&&(V.meta.probe_mode|0)>0;if(v.hasMips&&rt)v.setMipMode(le.mips),ye.addInput(le,"mips",{label:"Mips (trilinear)"}).on("change",G=>v.setMipMode(G.value));else if(v.hasMips){const G=$.get("mipbias"),Y={mode:G==="0"||G==="1"||G==="2"?G:"off"},oe=pe=>{pe==="off"?v.setMipMode(!1):(v.setMipLodBias(Number(pe)),v.setMipMode(!0)),console.log(`[mips] ${pe==="off"?"off (level 0 only)":`on, bias ${pe}`}`)};oe(Y.mode),ye.addInput(Y,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",pe=>oe(pe.value))}const Qe=ye.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});Qe.addInput(le,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",G=>Wn({raysplat:G.value==="raysplat",centred:G.value==="centred"},u,v.render_settings_buffer));const nt=globalThis.__gpuAdapterInfo??{},at={s:`${nt.vendor??"?"} / ${nt.architecture??"?"}
${nt.device||nt.description||"?"}`};Qe.addMonitor(at,"s",{label:"GPU",multiline:!0,lineCount:2}),Qe.addInput(le,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",G=>Wn({hypLegacy:G.value},u,v.render_settings_buffer)),Qe.addInput(le,"two_pass",{label:"Two-pass (layer)"}).on("change",G=>v.setTwoPass(G.value)),Qe.addInput(le,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",G=>v.setOpaqueThresh(G.value)),ye.addInput(le,"legacy_renderer",{label:"Legacy renderer"}).on("change",G=>v.setLegacyRenderer(G.value)),ye.addInput(le,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",G=>{v.setFetchById(G.value);try{localStorage.setItem("halloumi.fetch_by_id",G.value?"1":"0")}catch{}});const st={aspect:"canvas"},Ye=ye.addFolder({title:"📸 Screenshot",expanded:!1});Ye.addInput(st,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const He={s:"pick a size to capture"};Ye.addMonitor(He,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const We=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Ze=null;function Je(G){let Y;if(st.aspect==="canvas")Y=o.width/o.height;else{const[be,Se]=st.aspect.split(":").map(Number);Y=be/Se}const oe=u.limits.maxTextureDimension2D;let pe,Ce;if(G==="canvas"&&st.aspect==="canvas")pe=o.width,Ce=o.height;else{const be=G==="canvas"?Math.max(o.width,o.height):G;Y>=1?(pe=be,Ce=Math.round(be/Y)):(Ce=be,pe=Math.round(be*Y))}const he=Math.min(1,oe/Math.max(pe,Ce));return pe=Math.max(2,Math.round(pe*he)&-2),Ce=Math.max(2,Math.round(Ce*he)&-2),[pe,Ce]}function pt(G,Y){const oe=URL.createObjectURL(G),pe=document.createElement("a");pe.href=oe,pe.download=Y,document.body.appendChild(pe),pe.click(),pe.remove(),setTimeout(()=>URL.revokeObjectURL(oe),1e4)}async function it(G,Y){var be;const oe=(G.size/1048576).toFixed(1),pe=window;if(typeof pe.showSaveFilePicker=="function")try{const Se=await pe.showSaveFilePicker({suggestedName:Y,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Ke=await Se.createWritable();return await Ke.write(G),await Ke.close(),`saved ${Se.name??Y} (${oe} MB) where you chose`}catch(Se){if((Se==null?void 0:Se.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ce=new File([G],Y,{type:"image/png"}),he=navigator;if(he.share&&((be=he.canShare)!=null&&be.call(he,{files:[Ce]})))try{return await he.share({files:[Ce],title:Y}),`shared ${Y} (${oe} MB) via share sheet`}catch(Se){if((Se==null?void 0:Se.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return pt(G,Y),`downloaded ${Y} (${oe} MB) to your browser's Downloads folder`}async function It(G){if(f)return;const[Y,oe]=Je(G);He.s=`rendering ${Y}×${oe}…`;const pe=o.width,Ce=o.height;g.setRenderSize(Y,oe),Cn(Y,oe,u,v.render_settings_buffer);const he=u.createTexture({size:[Y,oe,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),be=Math.ceil(Y*4/256)*256,Se=u.createBuffer({size:be*oe,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Ke=u.createCommandEncoder({label:"screenshot"});v.frame(Ke,he.createView(),!1),Ke.copyTextureToBuffer({texture:he},{buffer:Se,bytesPerRow:be,rowsPerImage:oe},[Y,oe,1]),u.queue.submit([Ke.finish()]),g.clearRenderSize(),Cn(pe,Ce,u,v.render_settings_buffer);try{await Se.mapAsync(GPUMapMode.READ);const _t=new Uint8Array(Se.getMappedRange()),wt=new Uint8ClampedArray(Y*oe*4);for(let vt=0;vt<oe;vt++)wt.set(_t.subarray(vt*be,vt*be+Y*4),vt*Y*4);for(let vt=3;vt<wt.length;vt+=4)wt[vt]=255;Se.unmap();const St=document.createElement("canvas");St.width=Y,St.height=oe,St.getContext("2d").putImageData(new ImageData(wt,Y,oe),0,0);const Ct=await new Promise((vt,Rn)=>St.toBlob(Dt=>Dt?vt(Dt):Rn(new Error("toBlob failed")),"image/png")),At=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),lt=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),rn=`${At}_${Y}x${oe}_${lt}.png`;Ze={blob:Ct,name:rn},He.s=await it(Ct,rn)}catch(_t){console.error("[screenshot]",_t),He.s=`failed: ${_t}`}finally{Se.destroy(),he.destroy()}}{const G=document.createElement("div");G.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const Y=(pe,Ce,he)=>{const be=document.createElement("button");be.className="tp-btnv_b",be.textContent=pe,be.title=Ce,be.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",be.addEventListener("click",he),G.appendChild(be)};Y("Canvas","current canvas size",()=>{It("canvas")});for(const[pe,Ce]of We)Y(pe,`${Ce} px long edge`,()=>{It(Ce)});(Ye.element.querySelector(".tp-fldv_c")??Ye.element).appendChild(G)}Ye.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Ze){He.s="nothing captured yet";return}pt(Ze.blob,Ze.name),He.s=`downloaded ${Ze.name} to your browser's Downloads folder`}),ye.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(j.length>0)g.set_preset(j[0]);else{const G=X.bbox.max[0]-X.bbox.min[0],Y=X.bbox.max[1]-X.bbox.min[1],oe=X.bbox.max[2]-X.bbox.min[2],Ce=.5*Math.sqrt(G*G+Y*Y+oe*oe)*.5;z.set(Ne[0]-Ce,Ne[1]-Ce,Ne[2]-Ce,g.position);const he=z.create(Ce,Ce,Ce);z.normalize(he,he);const be=z.create();z.cross(z.create(0,1,0),he,be),z.normalize(be,be);const Se=z.create();z.cross(he,be,Se);const Ke=Bt.create(be[0],Se[0],he[0],be[1],Se[1],he[1],be[2],Se[2],he[2]);ht.fromMat3(Ke,g.rotation),g.update_buffer()}w.resetToCamera(),Ue()});const gt={result:"— click Benchmark —"},Et=ye.addMonitor(gt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Et.hidden=!0;const Tt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Kt(){const Y=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const oe of Object.keys(Tt))if(Y.startsWith(oe))return oe;return null}const Pt=document.createElement("div");Pt.id="bench-overlay",Pt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Pt);function Ut(G,Y,oe){const pe=Math.floor(Y/Math.max(1,oe)*100),Ce=32,he=Math.floor(Y/Math.max(1,oe)*Ce),be="█".repeat(he)+"░".repeat(Ce-he);Pt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${G}</div><div>[${be}] ${pe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${Y} / ${oe} frames · offscreen · pipelined · no vsync</div>`,Pt.style.display="block"}function _n(){Pt.style.display="none"}async function Ht(G=10,Y=200){if(f)return;if(j.length===0){gt.result="no cameras to benchmark";return}f=!0;const oe=K,pe=le.animate,Ce=new Float32Array(g.position),he=new Float32Array(g.rotation);K=!1,le.animate=!1,ye.refresh(),m=null,w.enabled=!1;const be=Kt(),Se=be?Tt[be]:null,Ke=(Se==null?void 0:Se.w)??o.width,_t=(Se==null?void 0:Se.h)??o.height,wt=(Se==null?void 0:Se.fovY)??g.getFov(),St=be?`${be} · ${Ke>=4e3/4+500?"images_4":"images_2"}`:"custom",Ct=o.width,At=o.height,lt=g.getFov();o.width=Ke,o.height=_t,g.setFov(wt),Cn(Ke,_t,u,v.render_settings_buffer);const rn=u.createTexture({size:[Ke,_t,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),vt=rn.createView(),Rn=()=>{const ct=u.createCommandEncoder();v.frame(ct,vt,!1),u.queue.submit([ct.finish()])},Dt=()=>new Promise(ct=>setTimeout(ct,0)),Rt=20,Ot=async(ct,Zt)=>{let Vt=0,Lt=0;for(Ut(Zt,0,ct),await Dt();Lt<ct;){const gn=Math.min(Rt,ct-Lt),zt=performance.now();for(let Ln=0;Ln<gn;Ln++)g.set_preset(j[(Lt+Ln)%j.length]),Rn();await u.queue.onSubmittedWorkDone();const Jn=performance.now();Vt+=Jn-zt,Lt+=gn,Ut(Zt,Lt,ct),await Dt()}return Vt};try{await Ot(G,"Warming up");const Zt=await Ot(Y,"Benchmarking")/Y,Vt=1e3/Zt,Lt=X.num_points??X.surfel_data.length/8,gn=(wt*180/Math.PI).toFixed(1),zt=`${Vt.toFixed(1)} FPS  (${Zt.toFixed(2)} ms/frame)
${Ke}×${_t} · fovY ${gn}° · ${St}
${Lt.toLocaleString()} surfels · ${G}w+${Y}b · pipelined`+(v.hasMips?` · ${v._mipMode?`mips bias ${v.mipLodBias}`:"mips off"}`:"");gt.result=zt,Et.hidden=!1,console.log("[bench]",zt.replace(/\n/g,"  |  "))}catch(ct){console.error("[bench] failed:",ct),gt.result=`bench failed: ${ct}`,Et.hidden=!1}finally{_n(),rn.destroy(),o.width=Ct,o.height=At,g.setFov(lt),Cn(Ct,At,u,v.render_settings_buffer),g.position.set(Ce),g.rotation.set(he),g.update_buffer(),w.enabled=!oe,K=oe,le.animate=pe,ye.refresh(),f=!1}}ye.addButton({title:"📊 Benchmark"}).on("click",()=>Ht());const mn=Math.PI/2,ot=new Set,et=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Zn=G=>{const Y=G.target;return!!Y&&(Y.tagName==="INPUT"||Y.tagName==="TEXTAREA"||Y.isContentEditable)},ms=()=>ot.has("ShiftLeft")||ot.has("ShiftRight");document.addEventListener("keyup",G=>{ot.delete(G.code)}),window.addEventListener("blur",()=>ot.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&ot.clear()});const Mn=G=>{if(ot.size===0||le.animate)return;const Y=ms()?3:1;let oe=0;ot.has("KeyX")&&(oe+=1),ot.has("KeyZ")&&(oe-=1),oe!==0&&(w.addRoll(oe*mn*Y*G),m=null);const pe=g.rotation,Ce=[pe[0],pe[4],pe[8]],he=[pe[1],pe[5],pe[9]],be=[pe[2],pe[6],pe[10]],Se=w.center,_t=(w.sceneRadius??Math.max(.05,z.distance(g.position,Se)))*.5*Y*G;let wt=0,St=0,Ct=0;if(ot.has("KeyW")&&(Ct+=1),ot.has("KeyS")&&(Ct-=1),ot.has("KeyD")&&(wt+=1),ot.has("KeyA")&&(wt-=1),ot.has("KeyE")&&(St+=1),ot.has("KeyQ")&&(St-=1),!wt&&!St&&!Ct)return;const At=[0,0,0];for(let lt=0;lt<3;lt++)At[lt]=(Ce[lt]*wt+he[lt]*St+be[lt]*Ct)*_t;for(let lt=0;lt<3;lt++)g.position[lt]+=At[lt],Se[lt]+=At[lt];g.update_buffer(),m=null};document.addEventListener("keydown",G=>{if(Zn(G))return;const Y=G.key,oe=Y.toLowerCase();if(G.ctrlKey||G.metaKey||G.altKey){ot.clear();return}if(et.includes(G.code)&&!(G.shiftKey&&G.code==="KeyD")){ot.add(G.code),G.preventDefault();return}if(oe==="t"){Xe();return}if(Y>="0"&&Y<="9"&&j.length>0){const pe=parseInt(Y);pe<j.length&&ce(pe)}else Y==="ArrowLeft"||Y==="PageUp"?(ce(P-1),G.preventDefault()):Y==="ArrowRight"||Y==="PageDown"?(ce(P+1),G.preventDefault()):G.shiftKey&&oe==="d"&&v.debugReadSortedIndices(30).catch(pe=>console.error("[DEBUG] readback failed:",pe))});function Xn(G,Y){const oe=o.getBoundingClientRect(),pe=window.devicePixelRatio||1;return[(G-oe.left)*pe,(Y-oe.top)*pe]}o.addEventListener("dblclick",G=>{const[Y,oe]=Xn(G.clientX,G.clientY);Re(Y,oe)});let Gt=0,Bn=0,Tn=0;o.addEventListener("pointerdown",G=>{if(G.pointerType!=="touch")return;const Y=performance.now(),oe=Y-Gt,pe=G.clientX-Bn,Ce=G.clientY-Tn;if(oe>0&&oe<300&&pe*pe+Ce*Ce<40*40){const[he,be]=Xn(G.clientX,G.clientY);Re(he,be),Gt=0}else Gt=Y,Bn=G.clientX,Tn=G.clientY});function Qn(){return L}let An=performance.now(),Dn=60,Yt=Promise.resolve(),vn=0;async function bn(){var Ce;const G=performance.now(),Y=Math.min((G-An)/1e3,.1);if(An=G,Y>0){const he=((Ce=v.lastStageBreakdownMs)==null?void 0:Ce.total)??0,be=he>.5?1e3/he:1/Y;Dn=Dn*.9+be*.1,y.stats=`${b} surfels · ${Math.round(Dn)} fps`}if(f){requestAnimationFrame(bn);return}if(Qn()&&(m||K)&&(m=null,w.resetToCamera(),Ue(),K&&(K=!1,le.animate=!1,ye.refresh())),K&&le.animateMode==="circle"&&re){ge+=Y/Me,ge>=1&&(ge-=1);const he=zi(re,ge);g.set_preset(he),w.update(Y);const be=u.createCommandEncoder();v.frame(be,a.getCurrentTexture().createView()),u.queue.submit([be.finish()]),vn++,vn===2&&jn(),requestAnimationFrame(bn);return}if(m){m.t+=Y/m.duration;const he=Math.min(1,m.t),be=he*he*(3-2*he);z.lerp(m.fromPos,m.toPos,be,g.position),dt.slerp(m.fromQuat,m.toQuat,be,l),Bt.fromQuat(l,_),ht.fromMat3(_,g.rotation),g.update_buffer(),m.t>=1&&(g.set_preset(m.target),m=null,K?j.length>0&&(p=r):(w.resetToCamera(),Ue()))}else if(K&&!Qn()){const he=le.animateMode==="circle"&&se.length>0,be=he?se:j;if(be.length!==0){if(p-=Y,p<=0){const Ke=((he?h:P)+1)%be.length;he?h=Ke:P=Ke;const _t=he?E/8:E;W(be[Ke],_t),he||(x.view=`${P+1} / ${j.length}: ${j[P].img_name??P}`)}}}Mn(Y),w.update(Y),D(),ne(),await Yt;const oe=u.createCommandEncoder(),pe=a.getCurrentTexture().createView();v.frame(oe,pe),u.queue.submit([oe.finish()]),Yt=u.queue.onSubmittedWorkDone(),vn++,vn===2&&jn(),requestAnimationFrame(bn)}requestAnimationFrame(bn)}}(function(){let a="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const w=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(w){a=w[1];break}}const u=document.createElement("div");u.textContent="v "+a,u.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(u.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(u)})();(async()=>{if(navigator.gpu===void 0){const w=document.querySelector("#title");w.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const w=document.querySelector("#title");w.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)");try{const w=o.info??{};globalThis.__gpuAdapterInfo={vendor:w.vendor??"?",architecture:w.architecture??"?",device:w.device??"?",description:w.description??"?",features:Array.from(o.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const u=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Nl(S!==null);const g=S.getContext("webgpu");$c(S,g,u,a)})();
