var Bl=Object.defineProperty;var Tl=(o,a,u)=>a in o?Bl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[a]=u;var G=(o,a,u)=>(Tl(o,typeof a!="symbol"?a+"":a,u),u);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))S(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const T of w.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&S(T)}).observe(document,{childList:!0,subtree:!0});function u(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function S(g){if(g.ep)return;g.ep=!0;const w=u(g);fetch(g.href,w)}})();function Al(o,a){return class extends o{constructor(...u){super(...u),a(this)}}}const Dl=Al(Array,o=>o.fill(0));let ze=1e-6;function Rl(o){function a(y=0,k=0){const E=new o(2);return y!==void 0&&(E[0]=y,k!==void 0&&(E[1]=k)),E}const u=a;function S(y,k,E){const r=E??new o(2);return r[0]=y,r[1]=k,r}function g(y,k){const E=k??new o(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function w(y,k){const E=k??new o(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function T(y,k){const E=k??new o(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function B(y,k=0,E=1,r){const m=r??new o(2);return m[0]=Math.min(E,Math.max(k,y[0])),m[1]=Math.min(E,Math.max(k,y[1])),m}function M(y,k,E){const r=E??new o(2);return r[0]=y[0]+k[0],r[1]=y[1]+k[1],r}function I(y,k,E,r){const m=r??new o(2);return m[0]=y[0]+k[0]*E,m[1]=y[1]+k[1]*E,m}function V(y,k){const E=y[0],r=y[1],m=k[0],p=k[1],h=Math.sqrt(E*E+r*r),l=Math.sqrt(m*m+p*p),_=h*l,P=_&&de(y,k)/_;return Math.acos(P)}function W(y,k,E){const r=E??new o(2);return r[0]=y[0]-k[0],r[1]=y[1]-k[1],r}const z=W;function Y(y,k){return Math.abs(y[0]-k[0])<ze&&Math.abs(y[1]-k[1])<ze}function re(y,k){return y[0]===k[0]&&y[1]===k[1]}function q(y,k,E,r){const m=r??new o(2);return m[0]=y[0]+E*(k[0]-y[0]),m[1]=y[1]+E*(k[1]-y[1]),m}function j(y,k,E,r){const m=r??new o(2);return m[0]=y[0]+E[0]*(k[0]-y[0]),m[1]=y[1]+E[1]*(k[1]-y[1]),m}function J(y,k,E){const r=E??new o(2);return r[0]=Math.max(y[0],k[0]),r[1]=Math.max(y[1],k[1]),r}function O(y,k,E){const r=E??new o(2);return r[0]=Math.min(y[0],k[0]),r[1]=Math.min(y[1],k[1]),r}function ne(y,k,E){const r=E??new o(2);return r[0]=y[0]*k,r[1]=y[1]*k,r}const K=ne;function fe(y,k,E){const r=E??new o(2);return r[0]=y[0]/k,r[1]=y[1]/k,r}function he(y,k){const E=k??new o(2);return E[0]=1/y[0],E[1]=1/y[1],E}const _e=he;function ue(y,k,E){const r=E??new o(3),m=y[0]*k[1]-y[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function de(y,k){return y[0]*k[0]+y[1]*k[1]}function De(y){const k=y[0],E=y[1];return Math.sqrt(k*k+E*E)}const te=De;function oe(y){const k=y[0],E=y[1];return k*k+E*E}const ye=oe;function Ge(y,k){const E=y[0]-k[0],r=y[1]-k[1];return Math.sqrt(E*E+r*r)}const ke=Ge;function Q(y,k){const E=y[0]-k[0],r=y[1]-k[1];return E*E+r*r}const Z=Q;function N(y,k){const E=k??new o(2),r=y[0],m=y[1],p=Math.sqrt(r*r+m*m);return p>1e-5?(E[0]=r/p,E[1]=m/p):(E[0]=0,E[1]=0),E}function be(y,k){const E=k??new o(2);return E[0]=-y[0],E[1]=-y[1],E}function Ae(y,k){const E=k??new o(2);return E[0]=y[0],E[1]=y[1],E}const qe=Ae;function Re(y,k,E){const r=E??new o(2);return r[0]=y[0]*k[0],r[1]=y[1]*k[1],r}const Oe=Re;function le(y,k,E){const r=E??new o(2);return r[0]=y[0]/k[0],r[1]=y[1]/k[1],r}const xe=le;function Ce(y=1,k){const E=k??new o(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function A(y){const k=y??new o(2);return k[0]=0,k[1]=0,k}function $(y,k,E){const r=E??new o(2),m=y[0],p=y[1];return r[0]=m*k[0]+p*k[4]+k[12],r[1]=m*k[1]+p*k[5]+k[13],r}function v(y,k,E){const r=E??new o(2),m=y[0],p=y[1];return r[0]=k[0]*m+k[4]*p+k[8],r[1]=k[1]*m+k[5]*p+k[9],r}function i(y,k,E,r){const m=r??new o(2),p=y[0]-k[0],h=y[1]-k[1],l=Math.sin(E),_=Math.cos(E);return m[0]=p*_-h*l+k[0],m[1]=p*l+h*_+k[1],m}function f(y,k,E){const r=E??new o(2);return N(y,r),ne(r,k,r)}function d(y,k,E){const r=E??new o(2);return De(y)>k?f(y,k,r):Ae(y,r)}function b(y,k,E){const r=E??new o(2);return q(y,k,.5,r)}return{create:a,fromValues:u,set:S,ceil:g,floor:w,round:T,clamp:B,add:M,addScaled:I,angle:V,subtract:W,sub:z,equalsApproximately:Y,equals:re,lerp:q,lerpV:j,max:J,min:O,mulScalar:ne,scale:K,divScalar:fe,inverse:he,invert:_e,cross:ue,dot:de,length:De,len:te,lengthSq:oe,lenSq:ye,distance:Ge,dist:ke,distanceSq:Q,distSq:Z,normalize:N,negate:be,copy:Ae,clone:qe,multiply:Re,mul:Oe,divide:le,div:xe,random:Ce,zero:A,transformMat4:$,transformMat3:v,rotate:i,setLength:f,truncate:d,midpoint:b}}const ni=new Map;function Si(o){let a=ni.get(o);return a||(a=Rl(o),ni.set(o,a)),a}function Ll(o){function a(l,_,P){const x=new o(3);return l!==void 0&&(x[0]=l,_!==void 0&&(x[1]=_,P!==void 0&&(x[2]=P))),x}const u=a;function S(l,_,P,x){const D=x??new o(3);return D[0]=l,D[1]=_,D[2]=P,D}function g(l,_){const P=_??new o(3);return P[0]=Math.ceil(l[0]),P[1]=Math.ceil(l[1]),P[2]=Math.ceil(l[2]),P}function w(l,_){const P=_??new o(3);return P[0]=Math.floor(l[0]),P[1]=Math.floor(l[1]),P[2]=Math.floor(l[2]),P}function T(l,_){const P=_??new o(3);return P[0]=Math.round(l[0]),P[1]=Math.round(l[1]),P[2]=Math.round(l[2]),P}function B(l,_=0,P=1,x){const D=x??new o(3);return D[0]=Math.min(P,Math.max(_,l[0])),D[1]=Math.min(P,Math.max(_,l[1])),D[2]=Math.min(P,Math.max(_,l[2])),D}function M(l,_,P){const x=P??new o(3);return x[0]=l[0]+_[0],x[1]=l[1]+_[1],x[2]=l[2]+_[2],x}function I(l,_,P,x){const D=x??new o(3);return D[0]=l[0]+_[0]*P,D[1]=l[1]+_[1]*P,D[2]=l[2]+_[2]*P,D}function V(l,_){const P=l[0],x=l[1],D=l[2],F=_[0],H=_[1],ce=_[2],ie=Math.sqrt(P*P+x*x+D*D),se=Math.sqrt(F*F+H*H+ce*ce),ge=ie*se,Me=ge&&de(l,_)/ge;return Math.acos(Me)}function W(l,_,P){const x=P??new o(3);return x[0]=l[0]-_[0],x[1]=l[1]-_[1],x[2]=l[2]-_[2],x}const z=W;function Y(l,_){return Math.abs(l[0]-_[0])<ze&&Math.abs(l[1]-_[1])<ze&&Math.abs(l[2]-_[2])<ze}function re(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function q(l,_,P,x){const D=x??new o(3);return D[0]=l[0]+P*(_[0]-l[0]),D[1]=l[1]+P*(_[1]-l[1]),D[2]=l[2]+P*(_[2]-l[2]),D}function j(l,_,P,x){const D=x??new o(3);return D[0]=l[0]+P[0]*(_[0]-l[0]),D[1]=l[1]+P[1]*(_[1]-l[1]),D[2]=l[2]+P[2]*(_[2]-l[2]),D}function J(l,_,P){const x=P??new o(3);return x[0]=Math.max(l[0],_[0]),x[1]=Math.max(l[1],_[1]),x[2]=Math.max(l[2],_[2]),x}function O(l,_,P){const x=P??new o(3);return x[0]=Math.min(l[0],_[0]),x[1]=Math.min(l[1],_[1]),x[2]=Math.min(l[2],_[2]),x}function ne(l,_,P){const x=P??new o(3);return x[0]=l[0]*_,x[1]=l[1]*_,x[2]=l[2]*_,x}const K=ne;function fe(l,_,P){const x=P??new o(3);return x[0]=l[0]/_,x[1]=l[1]/_,x[2]=l[2]/_,x}function he(l,_){const P=_??new o(3);return P[0]=1/l[0],P[1]=1/l[1],P[2]=1/l[2],P}const _e=he;function ue(l,_,P){const x=P??new o(3),D=l[2]*_[0]-l[0]*_[2],F=l[0]*_[1]-l[1]*_[0];return x[0]=l[1]*_[2]-l[2]*_[1],x[1]=D,x[2]=F,x}function de(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function De(l){const _=l[0],P=l[1],x=l[2];return Math.sqrt(_*_+P*P+x*x)}const te=De;function oe(l){const _=l[0],P=l[1],x=l[2];return _*_+P*P+x*x}const ye=oe;function Ge(l,_){const P=l[0]-_[0],x=l[1]-_[1],D=l[2]-_[2];return Math.sqrt(P*P+x*x+D*D)}const ke=Ge;function Q(l,_){const P=l[0]-_[0],x=l[1]-_[1],D=l[2]-_[2];return P*P+x*x+D*D}const Z=Q;function N(l,_){const P=_??new o(3),x=l[0],D=l[1],F=l[2],H=Math.sqrt(x*x+D*D+F*F);return H>1e-5?(P[0]=x/H,P[1]=D/H,P[2]=F/H):(P[0]=0,P[1]=0,P[2]=0),P}function be(l,_){const P=_??new o(3);return P[0]=-l[0],P[1]=-l[1],P[2]=-l[2],P}function Ae(l,_){const P=_??new o(3);return P[0]=l[0],P[1]=l[1],P[2]=l[2],P}const qe=Ae;function Re(l,_,P){const x=P??new o(3);return x[0]=l[0]*_[0],x[1]=l[1]*_[1],x[2]=l[2]*_[2],x}const Oe=Re;function le(l,_,P){const x=P??new o(3);return x[0]=l[0]/_[0],x[1]=l[1]/_[1],x[2]=l[2]/_[2],x}const xe=le;function Ce(l=1,_){const P=_??new o(3),x=Math.random()*2*Math.PI,D=Math.random()*2-1,F=Math.sqrt(1-D*D)*l;return P[0]=Math.cos(x)*F,P[1]=Math.sin(x)*F,P[2]=D*l,P}function A(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function $(l,_,P){const x=P??new o(3),D=l[0],F=l[1],H=l[2],ce=_[3]*D+_[7]*F+_[11]*H+_[15]||1;return x[0]=(_[0]*D+_[4]*F+_[8]*H+_[12])/ce,x[1]=(_[1]*D+_[5]*F+_[9]*H+_[13])/ce,x[2]=(_[2]*D+_[6]*F+_[10]*H+_[14])/ce,x}function v(l,_,P){const x=P??new o(3),D=l[0],F=l[1],H=l[2];return x[0]=D*_[0*4+0]+F*_[1*4+0]+H*_[2*4+0],x[1]=D*_[0*4+1]+F*_[1*4+1]+H*_[2*4+1],x[2]=D*_[0*4+2]+F*_[1*4+2]+H*_[2*4+2],x}function i(l,_,P){const x=P??new o(3),D=l[0],F=l[1],H=l[2];return x[0]=D*_[0]+F*_[4]+H*_[8],x[1]=D*_[1]+F*_[5]+H*_[9],x[2]=D*_[2]+F*_[6]+H*_[10],x}function f(l,_,P){const x=P??new o(3),D=_[0],F=_[1],H=_[2],ce=_[3]*2,ie=l[0],se=l[1],ge=l[2],Me=F*ge-H*se,we=H*ie-D*ge,Pe=D*se-F*ie;return x[0]=ie+Me*ce+(F*Pe-H*we)*2,x[1]=se+we*ce+(H*Me-D*Pe)*2,x[2]=ge+Pe*ce+(D*we-F*Me)*2,x}function d(l,_){const P=_??new o(3);return P[0]=l[12],P[1]=l[13],P[2]=l[14],P}function b(l,_,P){const x=P??new o(3),D=_*4;return x[0]=l[D+0],x[1]=l[D+1],x[2]=l[D+2],x}function y(l,_){const P=_??new o(3),x=l[0],D=l[1],F=l[2],H=l[4],ce=l[5],ie=l[6],se=l[8],ge=l[9],Me=l[10];return P[0]=Math.sqrt(x*x+D*D+F*F),P[1]=Math.sqrt(H*H+ce*ce+ie*ie),P[2]=Math.sqrt(se*se+ge*ge+Me*Me),P}function k(l,_,P,x){const D=x??new o(3),F=[],H=[];return F[0]=l[0]-_[0],F[1]=l[1]-_[1],F[2]=l[2]-_[2],H[0]=F[0],H[1]=F[1]*Math.cos(P)-F[2]*Math.sin(P),H[2]=F[1]*Math.sin(P)+F[2]*Math.cos(P),D[0]=H[0]+_[0],D[1]=H[1]+_[1],D[2]=H[2]+_[2],D}function E(l,_,P,x){const D=x??new o(3),F=[],H=[];return F[0]=l[0]-_[0],F[1]=l[1]-_[1],F[2]=l[2]-_[2],H[0]=F[2]*Math.sin(P)+F[0]*Math.cos(P),H[1]=F[1],H[2]=F[2]*Math.cos(P)-F[0]*Math.sin(P),D[0]=H[0]+_[0],D[1]=H[1]+_[1],D[2]=H[2]+_[2],D}function r(l,_,P,x){const D=x??new o(3),F=[],H=[];return F[0]=l[0]-_[0],F[1]=l[1]-_[1],F[2]=l[2]-_[2],H[0]=F[0]*Math.cos(P)-F[1]*Math.sin(P),H[1]=F[0]*Math.sin(P)+F[1]*Math.cos(P),H[2]=F[2],D[0]=H[0]+_[0],D[1]=H[1]+_[1],D[2]=H[2]+_[2],D}function m(l,_,P){const x=P??new o(3);return N(l,x),ne(x,_,x)}function p(l,_,P){const x=P??new o(3);return De(l)>_?m(l,_,x):Ae(l,x)}function h(l,_,P){const x=P??new o(3);return q(l,_,.5,x)}return{create:a,fromValues:u,set:S,ceil:g,floor:w,round:T,clamp:B,add:M,addScaled:I,angle:V,subtract:W,sub:z,equalsApproximately:Y,equals:re,lerp:q,lerpV:j,max:J,min:O,mulScalar:ne,scale:K,divScalar:fe,inverse:he,invert:_e,cross:ue,dot:de,length:De,len:te,lengthSq:oe,lenSq:ye,distance:Ge,dist:ke,distanceSq:Q,distSq:Z,normalize:N,negate:be,copy:Ae,clone:qe,multiply:Re,mul:Oe,divide:le,div:xe,random:Ce,zero:A,transformMat4:$,transformMat4Upper3x3:v,transformMat3:i,transformQuat:f,getTranslation:d,getAxis:b,getScaling:y,rotateX:k,rotateY:E,rotateZ:r,setLength:m,truncate:p,midpoint:h}}const si=new Map;function fs(o){let a=si.get(o);return a||(a=Ll(o),si.set(o,a)),a}function Il(o){const a=Si(o),u=fs(o);function S(i,f,d,b,y,k,E,r,m){const p=new o(12);return p[3]=0,p[7]=0,p[11]=0,i!==void 0&&(p[0]=i,f!==void 0&&(p[1]=f,d!==void 0&&(p[2]=d,b!==void 0&&(p[4]=b,y!==void 0&&(p[5]=y,k!==void 0&&(p[6]=k,E!==void 0&&(p[8]=E,r!==void 0&&(p[9]=r,m!==void 0&&(p[10]=m))))))))),p}function g(i,f,d,b,y,k,E,r,m,p){const h=p??new o(12);return h[0]=i,h[1]=f,h[2]=d,h[3]=0,h[4]=b,h[5]=y,h[6]=k,h[7]=0,h[8]=E,h[9]=r,h[10]=m,h[11]=0,h}function w(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function T(i,f){const d=f??new o(12),b=i[0],y=i[1],k=i[2],E=i[3],r=b+b,m=y+y,p=k+k,h=b*r,l=y*r,_=y*m,P=k*r,x=k*m,D=k*p,F=E*r,H=E*m,ce=E*p;return d[0]=1-_-D,d[1]=l+ce,d[2]=P-H,d[3]=0,d[4]=l-ce,d[5]=1-h-D,d[6]=x+F,d[7]=0,d[8]=P+H,d[9]=x-F,d[10]=1-h-_,d[11]=0,d}function B(i,f){const d=f??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function M(i,f,d){const b=d??new o(12);return b[0]=i[0]*f,b[1]=i[1]*f,b[2]=i[2]*f,b[4]=i[4]*f,b[5]=i[5]*f,b[6]=i[6]*f,b[8]=i[8]*f,b[9]=i[9]*f,b[10]=i[10]*f,b}const I=M;function V(i,f,d){const b=d??new o(12);return b[0]=i[0]+f[0],b[1]=i[1]+f[1],b[2]=i[2]+f[2],b[4]=i[4]+f[4],b[5]=i[5]+f[5],b[6]=i[6]+f[6],b[8]=i[8]+f[8],b[9]=i[9]+f[9],b[10]=i[10]+f[10],b}function W(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const z=W;function Y(i,f){return Math.abs(i[0]-f[0])<ze&&Math.abs(i[1]-f[1])<ze&&Math.abs(i[2]-f[2])<ze&&Math.abs(i[4]-f[4])<ze&&Math.abs(i[5]-f[5])<ze&&Math.abs(i[6]-f[6])<ze&&Math.abs(i[8]-f[8])<ze&&Math.abs(i[9]-f[9])<ze&&Math.abs(i[10]-f[10])<ze}function re(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function q(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function j(i,f){const d=f??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const b=i[0*4+0],y=i[0*4+1],k=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],p=i[2*4+0],h=i[2*4+1],l=i[2*4+2];return d[0]=b,d[1]=E,d[2]=p,d[4]=y,d[5]=r,d[6]=h,d[8]=k,d[9]=m,d[10]=l,d}function J(i,f){const d=f??new o(12),b=i[0*4+0],y=i[0*4+1],k=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],p=i[2*4+0],h=i[2*4+1],l=i[2*4+2],_=l*r-m*h,P=-l*E+m*p,x=h*E-r*p,D=1/(b*_+y*P+k*x);return d[0]=_*D,d[1]=(-l*y+k*h)*D,d[2]=(m*y-k*r)*D,d[4]=P*D,d[5]=(l*b-k*p)*D,d[6]=(-m*b+k*E)*D,d[8]=x*D,d[9]=(-h*b+y*p)*D,d[10]=(r*b-y*E)*D,d}function O(i){const f=i[0],d=i[0*4+1],b=i[0*4+2],y=i[1*4+0],k=i[1*4+1],E=i[1*4+2],r=i[2*4+0],m=i[2*4+1],p=i[2*4+2];return f*(k*p-m*E)-y*(d*p-m*b)+r*(d*E-k*b)}const ne=J;function K(i,f,d){const b=d??new o(12),y=i[0],k=i[1],E=i[2],r=i[4+0],m=i[4+1],p=i[4+2],h=i[8+0],l=i[8+1],_=i[8+2],P=f[0],x=f[1],D=f[2],F=f[4+0],H=f[4+1],ce=f[4+2],ie=f[8+0],se=f[8+1],ge=f[8+2];return b[0]=y*P+r*x+h*D,b[1]=k*P+m*x+l*D,b[2]=E*P+p*x+_*D,b[4]=y*F+r*H+h*ce,b[5]=k*F+m*H+l*ce,b[6]=E*F+p*H+_*ce,b[8]=y*ie+r*se+h*ge,b[9]=k*ie+m*se+l*ge,b[10]=E*ie+p*se+_*ge,b}const fe=K;function he(i,f,d){const b=d??q();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function _e(i,f){const d=f??a.create();return d[0]=i[8],d[1]=i[9],d}function ue(i,f,d){const b=d??a.create(),y=f*4;return b[0]=i[y+0],b[1]=i[y+1],b}function de(i,f,d,b){const y=b===i?i:W(i,b),k=d*4;return y[k+0]=f[0],y[k+1]=f[1],y}function De(i,f){const d=f??a.create(),b=i[0],y=i[1],k=i[4],E=i[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(k*k+E*E),d}function te(i,f){const d=f??u.create(),b=i[0],y=i[1],k=i[2],E=i[4],r=i[5],m=i[6],p=i[8],h=i[9],l=i[10];return d[0]=Math.sqrt(b*b+y*y+k*k),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(p*p+h*h+l*l),d}function oe(i,f){const d=f??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function ye(i,f,d){const b=d??new o(12),y=f[0],k=f[1],E=i[0],r=i[1],m=i[2],p=i[1*4+0],h=i[1*4+1],l=i[1*4+2],_=i[2*4+0],P=i[2*4+1],x=i[2*4+2];return i!==b&&(b[0]=E,b[1]=r,b[2]=m,b[4]=p,b[5]=h,b[6]=l),b[8]=E*y+p*k+_,b[9]=r*y+h*k+P,b[10]=m*y+l*k+x,b}function Ge(i,f){const d=f??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ke(i,f,d){const b=d??new o(12),y=i[0*4+0],k=i[0*4+1],E=i[0*4+2],r=i[1*4+0],m=i[1*4+1],p=i[1*4+2],h=Math.cos(f),l=Math.sin(f);return b[0]=h*y+l*r,b[1]=h*k+l*m,b[2]=h*E+l*p,b[4]=h*r-l*y,b[5]=h*m-l*k,b[6]=h*p-l*E,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Q(i,f){const d=f??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function Z(i,f,d){const b=d??new o(12),y=i[4],k=i[5],E=i[6],r=i[8],m=i[9],p=i[10],h=Math.cos(f),l=Math.sin(f);return b[4]=h*y+l*r,b[5]=h*k+l*m,b[6]=h*E+l*p,b[8]=h*r-l*y,b[9]=h*m-l*k,b[10]=h*p-l*E,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function N(i,f){const d=f??new o(12),b=Math.cos(i),y=Math.sin(i);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function be(i,f,d){const b=d??new o(12),y=i[0*4+0],k=i[0*4+1],E=i[0*4+2],r=i[2*4+0],m=i[2*4+1],p=i[2*4+2],h=Math.cos(f),l=Math.sin(f);return b[0]=h*y-l*r,b[1]=h*k-l*m,b[2]=h*E-l*p,b[8]=h*r+l*y,b[9]=h*m+l*k,b[10]=h*p+l*E,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Ae=Ge,qe=ke;function Re(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Oe(i,f,d){const b=d??new o(12),y=f[0],k=f[1];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function le(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function xe(i,f,d){const b=d??new o(12),y=f[0],k=f[1],E=f[2];return b[0]=y*i[0*4+0],b[1]=y*i[0*4+1],b[2]=y*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],b[8]=E*i[2*4+0],b[9]=E*i[2*4+1],b[10]=E*i[2*4+2],b}function Ce(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function A(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function $(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function v(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],b[8]=f*i[2*4+0],b[9]=f*i[2*4+1],b[10]=f*i[2*4+2],b}return{add:V,clone:z,copy:W,create:S,determinant:O,equals:re,equalsApproximately:Y,fromMat4:w,fromQuat:T,get3DScaling:te,getAxis:ue,getScaling:De,getTranslation:_e,identity:q,inverse:J,invert:ne,mul:fe,mulScalar:I,multiply:K,multiplyScalar:M,negate:B,rotate:ke,rotateX:Z,rotateY:be,rotateZ:qe,rotation:Ge,rotationX:Q,rotationY:N,rotationZ:Ae,scale:Oe,scale3D:xe,scaling:Re,scaling3D:le,set:g,setAxis:de,setTranslation:he,translate:ye,translation:oe,transpose:j,uniformScale:A,uniformScale3D:v,uniformScaling:Ce,uniformScaling3D:$}}const ri=new Map;function Gl(o){let a=ri.get(o);return a||(a=Il(o),ri.set(o,a)),a}function zl(o){const a=fs(o);function u(r,m,p,h,l,_,P,x,D,F,H,ce,ie,se,ge,Me){const we=new o(16);return r!==void 0&&(we[0]=r,m!==void 0&&(we[1]=m,p!==void 0&&(we[2]=p,h!==void 0&&(we[3]=h,l!==void 0&&(we[4]=l,_!==void 0&&(we[5]=_,P!==void 0&&(we[6]=P,x!==void 0&&(we[7]=x,D!==void 0&&(we[8]=D,F!==void 0&&(we[9]=F,H!==void 0&&(we[10]=H,ce!==void 0&&(we[11]=ce,ie!==void 0&&(we[12]=ie,se!==void 0&&(we[13]=se,ge!==void 0&&(we[14]=ge,Me!==void 0&&(we[15]=Me)))))))))))))))),we}function S(r,m,p,h,l,_,P,x,D,F,H,ce,ie,se,ge,Me,we){const Pe=we??new o(16);return Pe[0]=r,Pe[1]=m,Pe[2]=p,Pe[3]=h,Pe[4]=l,Pe[5]=_,Pe[6]=P,Pe[7]=x,Pe[8]=D,Pe[9]=F,Pe[10]=H,Pe[11]=ce,Pe[12]=ie,Pe[13]=se,Pe[14]=ge,Pe[15]=Me,Pe}function g(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=0,p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=0,p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function w(r,m){const p=m??new o(16),h=r[0],l=r[1],_=r[2],P=r[3],x=h+h,D=l+l,F=_+_,H=h*x,ce=l*x,ie=l*D,se=_*x,ge=_*D,Me=_*F,we=P*x,Pe=P*D,Ie=P*F;return p[0]=1-ie-Me,p[1]=ce+Ie,p[2]=se-Pe,p[3]=0,p[4]=ce-Ie,p[5]=1-H-Me,p[6]=ge+we,p[7]=0,p[8]=se+Pe,p[9]=ge-we,p[10]=1-H-ie,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function T(r,m){const p=m??new o(16);return p[0]=-r[0],p[1]=-r[1],p[2]=-r[2],p[3]=-r[3],p[4]=-r[4],p[5]=-r[5],p[6]=-r[6],p[7]=-r[7],p[8]=-r[8],p[9]=-r[9],p[10]=-r[10],p[11]=-r[11],p[12]=-r[12],p[13]=-r[13],p[14]=-r[14],p[15]=-r[15],p}function B(r,m,p){const h=p??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function M(r,m,p){const h=p??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const I=M;function V(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15],p}const W=V;function z(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function Y(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function re(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function q(r,m){const p=m??new o(16);if(p===r){let Le;return Le=r[1],r[1]=r[4],r[4]=Le,Le=r[2],r[2]=r[8],r[8]=Le,Le=r[3],r[3]=r[12],r[12]=Le,Le=r[6],r[6]=r[9],r[9]=Le,Le=r[7],r[7]=r[13],r[13]=Le,Le=r[11],r[11]=r[14],r[14]=Le,p}const h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],P=r[0*4+3],x=r[1*4+0],D=r[1*4+1],F=r[1*4+2],H=r[1*4+3],ce=r[2*4+0],ie=r[2*4+1],se=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Pe=r[3*4+2],Ie=r[3*4+3];return p[0]=h,p[1]=x,p[2]=ce,p[3]=Me,p[4]=l,p[5]=D,p[6]=ie,p[7]=we,p[8]=_,p[9]=F,p[10]=se,p[11]=Pe,p[12]=P,p[13]=H,p[14]=ge,p[15]=Ie,p}function j(r,m){const p=m??new o(16),h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],P=r[0*4+3],x=r[1*4+0],D=r[1*4+1],F=r[1*4+2],H=r[1*4+3],ce=r[2*4+0],ie=r[2*4+1],se=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Pe=r[3*4+2],Ie=r[3*4+3],Le=se*Ie,je=Pe*ge,We=F*Ie,He=Pe*H,Qe=F*ge,nt=se*H,Ye=_*Ie,tt=Pe*P,ot=_*ge,st=se*P,Je=_*H,Xe=F*P,Fe=ce*we,it=Me*ie,Ke=x*we,dt=Me*D,rt=x*ie,Lt=ce*D,Ct=h*we,yt=Me*l,kt=h*ie,It=ce*l,jt=h*D,Pt=x*l,rn=Le*D+He*ie+Qe*we-(je*D+We*ie+nt*we),Kt=je*l+Ye*ie+st*we-(Le*l+tt*ie+ot*we),bn=We*l+tt*D+Je*we-(He*l+Ye*D+Xe*we),gn=nt*l+ot*D+Xe*ie-(Qe*l+st*D+Je*ie),Ue=1/(h*rn+x*Kt+ce*bn+Me*gn);return p[0]=Ue*rn,p[1]=Ue*Kt,p[2]=Ue*bn,p[3]=Ue*gn,p[4]=Ue*(je*x+We*ce+nt*Me-(Le*x+He*ce+Qe*Me)),p[5]=Ue*(Le*h+tt*ce+ot*Me-(je*h+Ye*ce+st*Me)),p[6]=Ue*(He*h+Ye*x+Xe*Me-(We*h+tt*x+Je*Me)),p[7]=Ue*(Qe*h+st*x+Je*ce-(nt*h+ot*x+Xe*ce)),p[8]=Ue*(Fe*H+dt*ge+rt*Ie-(it*H+Ke*ge+Lt*Ie)),p[9]=Ue*(it*P+Ct*ge+It*Ie-(Fe*P+yt*ge+kt*Ie)),p[10]=Ue*(Ke*P+yt*H+jt*Ie-(dt*P+Ct*H+Pt*Ie)),p[11]=Ue*(Lt*P+kt*H+Pt*ge-(rt*P+It*H+jt*ge)),p[12]=Ue*(Ke*se+Lt*Pe+it*F-(rt*Pe+Fe*F+dt*se)),p[13]=Ue*(kt*Pe+Fe*_+yt*se-(Ct*se+It*Pe+it*_)),p[14]=Ue*(Ct*F+Pt*Pe+dt*_-(jt*Pe+Ke*_+yt*F)),p[15]=Ue*(jt*se+rt*_+It*F-(kt*F+Pt*se+Lt*_)),p}function J(r){const m=r[0],p=r[0*4+1],h=r[0*4+2],l=r[0*4+3],_=r[1*4+0],P=r[1*4+1],x=r[1*4+2],D=r[1*4+3],F=r[2*4+0],H=r[2*4+1],ce=r[2*4+2],ie=r[2*4+3],se=r[3*4+0],ge=r[3*4+1],Me=r[3*4+2],we=r[3*4+3],Pe=ce*we,Ie=Me*ie,Le=x*we,je=Me*D,We=x*ie,He=ce*D,Qe=h*we,nt=Me*l,Ye=h*ie,tt=ce*l,ot=h*D,st=x*l,Je=Pe*P+je*H+We*ge-(Ie*P+Le*H+He*ge),Xe=Ie*p+Qe*H+tt*ge-(Pe*p+nt*H+Ye*ge),Fe=Le*p+nt*P+ot*ge-(je*p+Qe*P+st*ge),it=He*p+Ye*P+st*H-(We*p+tt*P+ot*H);return m*Je+_*Xe+F*Fe+se*it}const O=j;function ne(r,m,p){const h=p??new o(16),l=r[0],_=r[1],P=r[2],x=r[3],D=r[4+0],F=r[4+1],H=r[4+2],ce=r[4+3],ie=r[8+0],se=r[8+1],ge=r[8+2],Me=r[8+3],we=r[12+0],Pe=r[12+1],Ie=r[12+2],Le=r[12+3],je=m[0],We=m[1],He=m[2],Qe=m[3],nt=m[4+0],Ye=m[4+1],tt=m[4+2],ot=m[4+3],st=m[8+0],Je=m[8+1],Xe=m[8+2],Fe=m[8+3],it=m[12+0],Ke=m[12+1],dt=m[12+2],rt=m[12+3];return h[0]=l*je+D*We+ie*He+we*Qe,h[1]=_*je+F*We+se*He+Pe*Qe,h[2]=P*je+H*We+ge*He+Ie*Qe,h[3]=x*je+ce*We+Me*He+Le*Qe,h[4]=l*nt+D*Ye+ie*tt+we*ot,h[5]=_*nt+F*Ye+se*tt+Pe*ot,h[6]=P*nt+H*Ye+ge*tt+Ie*ot,h[7]=x*nt+ce*Ye+Me*tt+Le*ot,h[8]=l*st+D*Je+ie*Xe+we*Fe,h[9]=_*st+F*Je+se*Xe+Pe*Fe,h[10]=P*st+H*Je+ge*Xe+Ie*Fe,h[11]=x*st+ce*Je+Me*Xe+Le*Fe,h[12]=l*it+D*Ke+ie*dt+we*rt,h[13]=_*it+F*Ke+se*dt+Pe*rt,h[14]=P*it+H*Ke+ge*dt+Ie*rt,h[15]=x*it+ce*Ke+Me*dt+Le*rt,h}const K=ne;function fe(r,m,p){const h=p??re();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function he(r,m){const p=m??a.create();return p[0]=r[12],p[1]=r[13],p[2]=r[14],p}function _e(r,m,p){const h=p??a.create(),l=m*4;return h[0]=r[l+0],h[1]=r[l+1],h[2]=r[l+2],h}function ue(r,m,p,h){const l=h===r?h:V(r,h),_=p*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function de(r,m){const p=m??a.create(),h=r[0],l=r[1],_=r[2],P=r[4],x=r[5],D=r[6],F=r[8],H=r[9],ce=r[10];return p[0]=Math.sqrt(h*h+l*l+_*_),p[1]=Math.sqrt(P*P+x*x+D*D),p[2]=Math.sqrt(F*F+H*H+ce*ce),p}function De(r,m,p,h,l){const _=l??new o(16),P=Math.tan(Math.PI*.5-.5*r);if(_[0]=P/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=P,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const x=1/(p-h);_[10]=h*x,_[14]=h*p*x}else _[10]=-1,_[14]=-p;return _}function te(r,m,p,h=1/0,l){const _=l??new o(16),P=1/Math.tan(r*.5);if(_[0]=P/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=P,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=p;else{const x=1/(h-p);_[10]=p*x,_[14]=h*p*x}return _}function oe(r,m,p,h,l,_,P){const x=P??new o(16);return x[0]=2/(m-r),x[1]=0,x[2]=0,x[3]=0,x[4]=0,x[5]=2/(h-p),x[6]=0,x[7]=0,x[8]=0,x[9]=0,x[10]=1/(l-_),x[11]=0,x[12]=(m+r)/(r-m),x[13]=(h+p)/(p-h),x[14]=l/(l-_),x[15]=1,x}function ye(r,m,p,h,l,_,P){const x=P??new o(16),D=m-r,F=h-p,H=l-_;return x[0]=2*l/D,x[1]=0,x[2]=0,x[3]=0,x[4]=0,x[5]=2*l/F,x[6]=0,x[7]=0,x[8]=(r+m)/D,x[9]=(h+p)/F,x[10]=_/H,x[11]=-1,x[12]=0,x[13]=0,x[14]=l*_/H,x[15]=0,x}function Ge(r,m,p,h,l,_=1/0,P){const x=P??new o(16),D=m-r,F=h-p;if(x[0]=2*l/D,x[1]=0,x[2]=0,x[3]=0,x[4]=0,x[5]=2*l/F,x[6]=0,x[7]=0,x[8]=(r+m)/D,x[9]=(h+p)/F,x[11]=-1,x[12]=0,x[13]=0,x[15]=0,_===1/0)x[10]=0,x[14]=l;else{const H=1/(_-l);x[10]=l*H,x[14]=_*l*H}return x}const ke=a.create(),Q=a.create(),Z=a.create();function N(r,m,p,h){const l=h??new o(16);return a.normalize(a.subtract(m,r,Z),Z),a.normalize(a.cross(p,Z,ke),ke),a.normalize(a.cross(Z,ke,Q),Q),l[0]=ke[0],l[1]=ke[1],l[2]=ke[2],l[3]=0,l[4]=Q[0],l[5]=Q[1],l[6]=Q[2],l[7]=0,l[8]=Z[0],l[9]=Z[1],l[10]=Z[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function be(r,m,p,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,Z),Z),a.normalize(a.cross(p,Z,ke),ke),a.normalize(a.cross(Z,ke,Q),Q),l[0]=ke[0],l[1]=ke[1],l[2]=ke[2],l[3]=0,l[4]=Q[0],l[5]=Q[1],l[6]=Q[2],l[7]=0,l[8]=Z[0],l[9]=Z[1],l[10]=Z[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ae(r,m,p,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,Z),Z),a.normalize(a.cross(p,Z,ke),ke),a.normalize(a.cross(Z,ke,Q),Q),l[0]=ke[0],l[1]=Q[0],l[2]=Z[0],l[3]=0,l[4]=ke[1],l[5]=Q[1],l[6]=Z[1],l[7]=0,l[8]=ke[2],l[9]=Q[2],l[10]=Z[2],l[11]=0,l[12]=-(ke[0]*r[0]+ke[1]*r[1]+ke[2]*r[2]),l[13]=-(Q[0]*r[0]+Q[1]*r[1]+Q[2]*r[2]),l[14]=-(Z[0]*r[0]+Z[1]*r[1]+Z[2]*r[2]),l[15]=1,l}function qe(r,m){const p=m??new o(16);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=r[0],p[13]=r[1],p[14]=r[2],p[15]=1,p}function Re(r,m,p){const h=p??new o(16),l=m[0],_=m[1],P=m[2],x=r[0],D=r[1],F=r[2],H=r[3],ce=r[1*4+0],ie=r[1*4+1],se=r[1*4+2],ge=r[1*4+3],Me=r[2*4+0],we=r[2*4+1],Pe=r[2*4+2],Ie=r[2*4+3],Le=r[3*4+0],je=r[3*4+1],We=r[3*4+2],He=r[3*4+3];return r!==h&&(h[0]=x,h[1]=D,h[2]=F,h[3]=H,h[4]=ce,h[5]=ie,h[6]=se,h[7]=ge,h[8]=Me,h[9]=we,h[10]=Pe,h[11]=Ie),h[12]=x*l+ce*_+Me*P+Le,h[13]=D*l+ie*_+we*P+je,h[14]=F*l+se*_+Pe*P+We,h[15]=H*l+ge*_+Ie*P+He,h}function Oe(r,m){const p=m??new o(16),h=Math.cos(r),l=Math.sin(r);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=h,p[6]=l,p[7]=0,p[8]=0,p[9]=-l,p[10]=h,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function le(r,m,p){const h=p??new o(16),l=r[4],_=r[5],P=r[6],x=r[7],D=r[8],F=r[9],H=r[10],ce=r[11],ie=Math.cos(m),se=Math.sin(m);return h[4]=ie*l+se*D,h[5]=ie*_+se*F,h[6]=ie*P+se*H,h[7]=ie*x+se*ce,h[8]=ie*D-se*l,h[9]=ie*F-se*_,h[10]=ie*H-se*P,h[11]=ie*ce-se*x,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function xe(r,m){const p=m??new o(16),h=Math.cos(r),l=Math.sin(r);return p[0]=h,p[1]=0,p[2]=-l,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=l,p[9]=0,p[10]=h,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function Ce(r,m,p){const h=p??new o(16),l=r[0*4+0],_=r[0*4+1],P=r[0*4+2],x=r[0*4+3],D=r[2*4+0],F=r[2*4+1],H=r[2*4+2],ce=r[2*4+3],ie=Math.cos(m),se=Math.sin(m);return h[0]=ie*l-se*D,h[1]=ie*_-se*F,h[2]=ie*P-se*H,h[3]=ie*x-se*ce,h[8]=ie*D+se*l,h[9]=ie*F+se*_,h[10]=ie*H+se*P,h[11]=ie*ce+se*x,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function A(r,m){const p=m??new o(16),h=Math.cos(r),l=Math.sin(r);return p[0]=h,p[1]=l,p[2]=0,p[3]=0,p[4]=-l,p[5]=h,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function $(r,m,p){const h=p??new o(16),l=r[0*4+0],_=r[0*4+1],P=r[0*4+2],x=r[0*4+3],D=r[1*4+0],F=r[1*4+1],H=r[1*4+2],ce=r[1*4+3],ie=Math.cos(m),se=Math.sin(m);return h[0]=ie*l+se*D,h[1]=ie*_+se*F,h[2]=ie*P+se*H,h[3]=ie*x+se*ce,h[4]=ie*D-se*l,h[5]=ie*F-se*_,h[6]=ie*H-se*P,h[7]=ie*ce-se*x,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function v(r,m,p){const h=p??new o(16);let l=r[0],_=r[1],P=r[2];const x=Math.sqrt(l*l+_*_+P*P);l/=x,_/=x,P/=x;const D=l*l,F=_*_,H=P*P,ce=Math.cos(m),ie=Math.sin(m),se=1-ce;return h[0]=D+(1-D)*ce,h[1]=l*_*se+P*ie,h[2]=l*P*se-_*ie,h[3]=0,h[4]=l*_*se-P*ie,h[5]=F+(1-F)*ce,h[6]=_*P*se+l*ie,h[7]=0,h[8]=l*P*se+_*ie,h[9]=_*P*se-l*ie,h[10]=H+(1-H)*ce,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=v;function f(r,m,p,h){const l=h??new o(16);let _=m[0],P=m[1],x=m[2];const D=Math.sqrt(_*_+P*P+x*x);_/=D,P/=D,x/=D;const F=_*_,H=P*P,ce=x*x,ie=Math.cos(p),se=Math.sin(p),ge=1-ie,Me=F+(1-F)*ie,we=_*P*ge+x*se,Pe=_*x*ge-P*se,Ie=_*P*ge-x*se,Le=H+(1-H)*ie,je=P*x*ge+_*se,We=_*x*ge+P*se,He=P*x*ge-_*se,Qe=ce+(1-ce)*ie,nt=r[0],Ye=r[1],tt=r[2],ot=r[3],st=r[4],Je=r[5],Xe=r[6],Fe=r[7],it=r[8],Ke=r[9],dt=r[10],rt=r[11];return l[0]=Me*nt+we*st+Pe*it,l[1]=Me*Ye+we*Je+Pe*Ke,l[2]=Me*tt+we*Xe+Pe*dt,l[3]=Me*ot+we*Fe+Pe*rt,l[4]=Ie*nt+Le*st+je*it,l[5]=Ie*Ye+Le*Je+je*Ke,l[6]=Ie*tt+Le*Xe+je*dt,l[7]=Ie*ot+Le*Fe+je*rt,l[8]=We*nt+He*st+Qe*it,l[9]=We*Ye+He*Je+Qe*Ke,l[10]=We*tt+He*Xe+Qe*dt,l[11]=We*ot+He*Fe+Qe*rt,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const d=f;function b(r,m){const p=m??new o(16);return p[0]=r[0],p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=r[1],p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=r[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function y(r,m,p){const h=p??new o(16),l=m[0],_=m[1],P=m[2];return h[0]=l*r[0*4+0],h[1]=l*r[0*4+1],h[2]=l*r[0*4+2],h[3]=l*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=P*r[2*4+0],h[9]=P*r[2*4+1],h[10]=P*r[2*4+2],h[11]=P*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function k(r,m){const p=m??new o(16);return p[0]=r,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=r,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=r,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function E(r,m,p){const h=p??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:B,aim:N,axisRotate:f,axisRotation:v,cameraAim:be,clone:W,copy:V,create:u,determinant:J,equals:Y,equalsApproximately:z,fromMat3:g,fromQuat:w,frustum:ye,frustumReverseZ:Ge,getAxis:_e,getScaling:de,getTranslation:he,identity:re,inverse:j,invert:O,lookAt:Ae,mul:K,mulScalar:I,multiply:ne,multiplyScalar:M,negate:T,ortho:oe,perspective:De,perspectiveReverseZ:te,rotate:d,rotateX:le,rotateY:Ce,rotateZ:$,rotation:i,rotationX:Oe,rotationY:xe,rotationZ:A,scale:y,scaling:b,set:S,setAxis:ue,setTranslation:fe,translate:Re,translation:qe,transpose:q,uniformScale:E,uniformScaling:k}}const ii=new Map;function Ul(o){let a=ii.get(o);return a||(a=zl(o),ii.set(o,a)),a}function Ol(o){const a=fs(o);function u(A,$,v,i){const f=new o(4);return A!==void 0&&(f[0]=A,$!==void 0&&(f[1]=$,v!==void 0&&(f[2]=v,i!==void 0&&(f[3]=i)))),f}const S=u;function g(A,$,v,i,f){const d=f??new o(4);return d[0]=A,d[1]=$,d[2]=v,d[3]=i,d}function w(A,$,v){const i=v??new o(4),f=$*.5,d=Math.sin(f);return i[0]=d*A[0],i[1]=d*A[1],i[2]=d*A[2],i[3]=Math.cos(f),i}function T(A,$){const v=$??a.create(3),i=Math.acos(A[3])*2,f=Math.sin(i*.5);return f>ze?(v[0]=A[0]/f,v[1]=A[1]/f,v[2]=A[2]/f):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function B(A,$){const v=De(A,$);return Math.acos(2*v*v-1)}function M(A,$,v){const i=v??new o(4),f=A[0],d=A[1],b=A[2],y=A[3],k=$[0],E=$[1],r=$[2],m=$[3];return i[0]=f*m+y*k+d*r-b*E,i[1]=d*m+y*E+b*k-f*r,i[2]=b*m+y*r+f*E-d*k,i[3]=y*m-f*k-d*E-b*r,i}const I=M;function V(A,$,v){const i=v??new o(4),f=$*.5,d=A[0],b=A[1],y=A[2],k=A[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r+k*E,i[1]=b*r+y*E,i[2]=y*r-b*E,i[3]=k*r-d*E,i}function W(A,$,v){const i=v??new o(4),f=$*.5,d=A[0],b=A[1],y=A[2],k=A[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r-y*E,i[1]=b*r+k*E,i[2]=y*r+d*E,i[3]=k*r-b*E,i}function z(A,$,v){const i=v??new o(4),f=$*.5,d=A[0],b=A[1],y=A[2],k=A[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r+b*E,i[1]=b*r-d*E,i[2]=y*r+k*E,i[3]=k*r-y*E,i}function Y(A,$,v,i){const f=i??new o(4),d=A[0],b=A[1],y=A[2],k=A[3];let E=$[0],r=$[1],m=$[2],p=$[3],h=d*E+b*r+y*m+k*p;h<0&&(h=-h,E=-E,r=-r,m=-m,p=-p);let l,_;if(1-h>ze){const P=Math.acos(h),x=Math.sin(P);l=Math.sin((1-v)*P)/x,_=Math.sin(v*P)/x}else l=1-v,_=v;return f[0]=l*d+_*E,f[1]=l*b+_*r,f[2]=l*y+_*m,f[3]=l*k+_*p,f}function re(A,$){const v=$??new o(4),i=A[0],f=A[1],d=A[2],b=A[3],y=i*i+f*f+d*d+b*b,k=y?1/y:0;return v[0]=-i*k,v[1]=-f*k,v[2]=-d*k,v[3]=b*k,v}function q(A,$){const v=$??new o(4);return v[0]=-A[0],v[1]=-A[1],v[2]=-A[2],v[3]=A[3],v}function j(A,$){const v=$??new o(4),i=A[0]+A[5]+A[10];if(i>0){const f=Math.sqrt(i+1);v[3]=.5*f;const d=.5/f;v[0]=(A[6]-A[9])*d,v[1]=(A[8]-A[2])*d,v[2]=(A[1]-A[4])*d}else{let f=0;A[5]>A[0]&&(f=1),A[10]>A[f*4+f]&&(f=2);const d=(f+1)%3,b=(f+2)%3,y=Math.sqrt(A[f*4+f]-A[d*4+d]-A[b*4+b]+1);v[f]=.5*y;const k=.5/y;v[3]=(A[d*4+b]-A[b*4+d])*k,v[d]=(A[d*4+f]+A[f*4+d])*k,v[b]=(A[b*4+f]+A[f*4+b])*k}return v}function J(A,$,v,i,f){const d=f??new o(4),b=A*.5,y=$*.5,k=v*.5,E=Math.sin(b),r=Math.cos(b),m=Math.sin(y),p=Math.cos(y),h=Math.sin(k),l=Math.cos(k);switch(i){case"xyz":d[0]=E*p*l+r*m*h,d[1]=r*m*l-E*p*h,d[2]=r*p*h+E*m*l,d[3]=r*p*l-E*m*h;break;case"xzy":d[0]=E*p*l-r*m*h,d[1]=r*m*l-E*p*h,d[2]=r*p*h+E*m*l,d[3]=r*p*l+E*m*h;break;case"yxz":d[0]=E*p*l+r*m*h,d[1]=r*m*l-E*p*h,d[2]=r*p*h-E*m*l,d[3]=r*p*l+E*m*h;break;case"yzx":d[0]=E*p*l+r*m*h,d[1]=r*m*l+E*p*h,d[2]=r*p*h-E*m*l,d[3]=r*p*l-E*m*h;break;case"zxy":d[0]=E*p*l-r*m*h,d[1]=r*m*l+E*p*h,d[2]=r*p*h+E*m*l,d[3]=r*p*l-E*m*h;break;case"zyx":d[0]=E*p*l-r*m*h,d[1]=r*m*l+E*p*h,d[2]=r*p*h-E*m*l,d[3]=r*p*l+E*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function O(A,$){const v=$??new o(4);return v[0]=A[0],v[1]=A[1],v[2]=A[2],v[3]=A[3],v}const ne=O;function K(A,$,v){const i=v??new o(4);return i[0]=A[0]+$[0],i[1]=A[1]+$[1],i[2]=A[2]+$[2],i[3]=A[3]+$[3],i}function fe(A,$,v){const i=v??new o(4);return i[0]=A[0]-$[0],i[1]=A[1]-$[1],i[2]=A[2]-$[2],i[3]=A[3]-$[3],i}const he=fe;function _e(A,$,v){const i=v??new o(4);return i[0]=A[0]*$,i[1]=A[1]*$,i[2]=A[2]*$,i[3]=A[3]*$,i}const ue=_e;function de(A,$,v){const i=v??new o(4);return i[0]=A[0]/$,i[1]=A[1]/$,i[2]=A[2]/$,i[3]=A[3]/$,i}function De(A,$){return A[0]*$[0]+A[1]*$[1]+A[2]*$[2]+A[3]*$[3]}function te(A,$,v,i){const f=i??new o(4);return f[0]=A[0]+v*($[0]-A[0]),f[1]=A[1]+v*($[1]-A[1]),f[2]=A[2]+v*($[2]-A[2]),f[3]=A[3]+v*($[3]-A[3]),f}function oe(A){const $=A[0],v=A[1],i=A[2],f=A[3];return Math.sqrt($*$+v*v+i*i+f*f)}const ye=oe;function Ge(A){const $=A[0],v=A[1],i=A[2],f=A[3];return $*$+v*v+i*i+f*f}const ke=Ge;function Q(A,$){const v=$??new o(4),i=A[0],f=A[1],d=A[2],b=A[3],y=Math.sqrt(i*i+f*f+d*d+b*b);return y>1e-5?(v[0]=i/y,v[1]=f/y,v[2]=d/y,v[3]=b/y):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function Z(A,$){return Math.abs(A[0]-$[0])<ze&&Math.abs(A[1]-$[1])<ze&&Math.abs(A[2]-$[2])<ze&&Math.abs(A[3]-$[3])<ze}function N(A,$){return A[0]===$[0]&&A[1]===$[1]&&A[2]===$[2]&&A[3]===$[3]}function be(A){const $=A??new o(4);return $[0]=0,$[1]=0,$[2]=0,$[3]=1,$}const Ae=a.create(),qe=a.create(),Re=a.create();function Oe(A,$,v){const i=v??new o(4),f=a.dot(A,$);return f<-.999999?(a.cross(qe,A,Ae),a.len(Ae)<1e-6&&a.cross(Re,A,Ae),a.normalize(Ae,Ae),w(Ae,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(A,$,Ae),i[0]=Ae[0],i[1]=Ae[1],i[2]=Ae[2],i[3]=1+f,Q(i,i))}const le=new o(4),xe=new o(4);function Ce(A,$,v,i,f,d){const b=d??new o(4);return Y(A,i,f,le),Y($,v,f,xe),Y(le,xe,2*f*(1-f),b),b}return{create:u,fromValues:S,set:g,fromAxisAngle:w,toAxisAngle:T,angle:B,multiply:M,mul:I,rotateX:V,rotateY:W,rotateZ:z,slerp:Y,inverse:re,conjugate:q,fromMat:j,fromEuler:J,copy:O,clone:ne,add:K,subtract:fe,sub:he,mulScalar:_e,scale:ue,divScalar:de,dot:De,lerp:te,length:oe,len:ye,lengthSq:Ge,lenSq:ke,normalize:Q,equalsApproximately:Z,equals:N,identity:be,rotationTo:Oe,sqlerp:Ce}}const oi=new Map;function Vl(o){let a=oi.get(o);return a||(a=Ol(o),oi.set(o,a)),a}function Fl(o){function a(v,i,f,d){const b=new o(4);return v!==void 0&&(b[0]=v,i!==void 0&&(b[1]=i,f!==void 0&&(b[2]=f,d!==void 0&&(b[3]=d)))),b}const u=a;function S(v,i,f,d,b){const y=b??new o(4);return y[0]=v,y[1]=i,y[2]=f,y[3]=d,y}function g(v,i){const f=i??new o(4);return f[0]=Math.ceil(v[0]),f[1]=Math.ceil(v[1]),f[2]=Math.ceil(v[2]),f[3]=Math.ceil(v[3]),f}function w(v,i){const f=i??new o(4);return f[0]=Math.floor(v[0]),f[1]=Math.floor(v[1]),f[2]=Math.floor(v[2]),f[3]=Math.floor(v[3]),f}function T(v,i){const f=i??new o(4);return f[0]=Math.round(v[0]),f[1]=Math.round(v[1]),f[2]=Math.round(v[2]),f[3]=Math.round(v[3]),f}function B(v,i=0,f=1,d){const b=d??new o(4);return b[0]=Math.min(f,Math.max(i,v[0])),b[1]=Math.min(f,Math.max(i,v[1])),b[2]=Math.min(f,Math.max(i,v[2])),b[3]=Math.min(f,Math.max(i,v[3])),b}function M(v,i,f){const d=f??new o(4);return d[0]=v[0]+i[0],d[1]=v[1]+i[1],d[2]=v[2]+i[2],d[3]=v[3]+i[3],d}function I(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+i[0]*f,b[1]=v[1]+i[1]*f,b[2]=v[2]+i[2]*f,b[3]=v[3]+i[3]*f,b}function V(v,i,f){const d=f??new o(4);return d[0]=v[0]-i[0],d[1]=v[1]-i[1],d[2]=v[2]-i[2],d[3]=v[3]-i[3],d}const W=V;function z(v,i){return Math.abs(v[0]-i[0])<ze&&Math.abs(v[1]-i[1])<ze&&Math.abs(v[2]-i[2])<ze&&Math.abs(v[3]-i[3])<ze}function Y(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function re(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+f*(i[0]-v[0]),b[1]=v[1]+f*(i[1]-v[1]),b[2]=v[2]+f*(i[2]-v[2]),b[3]=v[3]+f*(i[3]-v[3]),b}function q(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+f[0]*(i[0]-v[0]),b[1]=v[1]+f[1]*(i[1]-v[1]),b[2]=v[2]+f[2]*(i[2]-v[2]),b[3]=v[3]+f[3]*(i[3]-v[3]),b}function j(v,i,f){const d=f??new o(4);return d[0]=Math.max(v[0],i[0]),d[1]=Math.max(v[1],i[1]),d[2]=Math.max(v[2],i[2]),d[3]=Math.max(v[3],i[3]),d}function J(v,i,f){const d=f??new o(4);return d[0]=Math.min(v[0],i[0]),d[1]=Math.min(v[1],i[1]),d[2]=Math.min(v[2],i[2]),d[3]=Math.min(v[3],i[3]),d}function O(v,i,f){const d=f??new o(4);return d[0]=v[0]*i,d[1]=v[1]*i,d[2]=v[2]*i,d[3]=v[3]*i,d}const ne=O;function K(v,i,f){const d=f??new o(4);return d[0]=v[0]/i,d[1]=v[1]/i,d[2]=v[2]/i,d[3]=v[3]/i,d}function fe(v,i){const f=i??new o(4);return f[0]=1/v[0],f[1]=1/v[1],f[2]=1/v[2],f[3]=1/v[3],f}const he=fe;function _e(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function ue(v){const i=v[0],f=v[1],d=v[2],b=v[3];return Math.sqrt(i*i+f*f+d*d+b*b)}const de=ue;function De(v){const i=v[0],f=v[1],d=v[2],b=v[3];return i*i+f*f+d*d+b*b}const te=De;function oe(v,i){const f=v[0]-i[0],d=v[1]-i[1],b=v[2]-i[2],y=v[3]-i[3];return Math.sqrt(f*f+d*d+b*b+y*y)}const ye=oe;function Ge(v,i){const f=v[0]-i[0],d=v[1]-i[1],b=v[2]-i[2],y=v[3]-i[3];return f*f+d*d+b*b+y*y}const ke=Ge;function Q(v,i){const f=i??new o(4),d=v[0],b=v[1],y=v[2],k=v[3],E=Math.sqrt(d*d+b*b+y*y+k*k);return E>1e-5?(f[0]=d/E,f[1]=b/E,f[2]=y/E,f[3]=k/E):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function Z(v,i){const f=i??new o(4);return f[0]=-v[0],f[1]=-v[1],f[2]=-v[2],f[3]=-v[3],f}function N(v,i){const f=i??new o(4);return f[0]=v[0],f[1]=v[1],f[2]=v[2],f[3]=v[3],f}const be=N;function Ae(v,i,f){const d=f??new o(4);return d[0]=v[0]*i[0],d[1]=v[1]*i[1],d[2]=v[2]*i[2],d[3]=v[3]*i[3],d}const qe=Ae;function Re(v,i,f){const d=f??new o(4);return d[0]=v[0]/i[0],d[1]=v[1]/i[1],d[2]=v[2]/i[2],d[3]=v[3]/i[3],d}const Oe=Re;function le(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function xe(v,i,f){const d=f??new o(4),b=v[0],y=v[1],k=v[2],E=v[3];return d[0]=i[0]*b+i[4]*y+i[8]*k+i[12]*E,d[1]=i[1]*b+i[5]*y+i[9]*k+i[13]*E,d[2]=i[2]*b+i[6]*y+i[10]*k+i[14]*E,d[3]=i[3]*b+i[7]*y+i[11]*k+i[15]*E,d}function Ce(v,i,f){const d=f??new o(4);return Q(v,d),O(d,i,d)}function A(v,i,f){const d=f??new o(4);return ue(v)>i?Ce(v,i,d):N(v,d)}function $(v,i,f){const d=f??new o(4);return re(v,i,.5,d)}return{create:a,fromValues:u,set:S,ceil:g,floor:w,round:T,clamp:B,add:M,addScaled:I,subtract:V,sub:W,equalsApproximately:z,equals:Y,lerp:re,lerpV:q,max:j,min:J,mulScalar:O,scale:ne,divScalar:K,inverse:fe,invert:he,dot:_e,length:ue,len:de,lengthSq:De,lenSq:te,distance:oe,dist:ye,distanceSq:Ge,distSq:ke,normalize:Q,negate:Z,copy:N,clone:be,multiply:Ae,mul:qe,divide:Re,div:Oe,zero:le,transformMat4:xe,setLength:Ce,truncate:A,midpoint:$}}const ai=new Map;function Nl(o){let a=ai.get(o);return a||(a=Fl(o),ai.set(o,a)),a}function Js(o,a,u,S,g,w){return{mat3:Gl(o),mat4:Ul(a),quat:Vl(u),vec2:Si(S),vec3:fs(g),vec4:Nl(w)}}const{mat3:Tt,mat4:ut,quat:ct,vec2:li,vec3:U,vec4:Wc}=Js(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Js(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Js(Dl,Array,Array,Array,Array,Array);const ci=document.querySelector("#log");let xt=null,vn=null;function Ei(){if(xt)return xt;xt=document.createElement("div"),xt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",xt.appendChild(o),vn=document.createElement("div"),vn.className="ply-spinner-label",xt.appendChild(vn),xt.style.display="none",document.body.appendChild(xt),xt}function er(o){Ei(),vn&&o&&(vn.textContent=o),xt&&(xt.style.opacity="1",xt.style.display="flex")}function Wt(o){Ei(),vn&&(vn.textContent=o)}function jn(){if(!xt)return;const o=xt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Ci(o,a){if(!ci)return;const u=document.createElement("p");u.innerText=o,a&&Object.assign(u.style,a),ci.appendChild(u)}async function mt(o){console.log(o),Ci(o)}async function $l(o){console.error(o),Ci(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ki;function Mi(){ki=performance.now()}function ui(o){const a=performance.now()-ki;mt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function ql(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function An(o){return o+3&-4}const Wl=2,jl=3,Kl=5,Hl=6,Kn=7,ds=8,Hn=9,Yn=10;function di(o){const a=new TextDecoder("ascii"),u=a.decode(new Uint8Array(o,0,4));if(u!=="NAT2")throw new Error(`NAT2 bad magic: '${u}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),g=4,w=S.getUint32(g+0,!0),T=S.getUint32(g+4,!0),B=S.getUint32(g+8,!0),M=S.getUint32(g+12,!0),I=S.getUint32(g+16,!0),V=S.getFloat32(g+20,!0),W=S.getUint32(g+24,!0),z=S.getUint32(g+28,!0),Y=S.getFloat32(g+32,!0),re=S.getFloat32(g+36,!0),q=S.getFloat32(g+40,!0),j=S.getUint32(g+44,!0),J=S.getFloat32(g+48,!0),O=S.getFloat32(g+52,!0),ne=S.getUint32(g+56,!0),K=S.getUint32(g+60,!0),fe=z===Hn||z===Yn,he=fe?K:0,_e=fe?0:K&255,ue=fe?0:K>>8&255,de=_e>0?_e:1;if(z===Kl||z===Hl)throw new Error(`NAT2: paired-RVQ format=${z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const De=z===Hn||z===Yn;if(z!==Wl&&z!==jl&&z!==Kn&&z!==ds&&!De)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${z}`);if(w%4!==0||j%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${j}`);let te=g+64;const oe=(ne+1)*4,ye=new Uint32Array(o.slice(te,te+oe));te+=oe;let Ge;if(de>1){const le=(de+1)*4;if(te+le>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${le} from ${te})`);Ge=new Uint32Array(o.slice(te,te+le)),te+=le}else Ge=new Uint32Array([0,w]);let ke=0;for(let le=0;le<de;le++){const xe=Ge[le+1]-Ge[le];xe>ke&&(ke=xe)}if(De){const le=he&1?7:6,xe=I*le*4;if(te+xe>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${xe} more bytes from offset ${te}, have ${o.byteLength-te}`);const Ce=new Float32Array(o.slice(te,te+xe));te+=xe;const A=Math.max(1,he>>8&255),$=[];let v=0;for(let y=0,k=w,E=j;y<A;y++,k>>=1,E>>=1){const r=Math.max(1,k>>2)*Math.max(1,E>>2)*16;$.push(r),v+=r}const i=o.byteLength-te;if(i<v)throw new Error(`NAT2 probe atlas truncated: need ${v} bytes for ${w}x${j} x${A} mips, have ${i}`);const f=[];let d=te;for(const y of $)f.push(new Uint8Array(o.slice(d,d+y))),d+=y;const b=f[0];return{width:w,height:T,channels:B,kernel_type:M,num_rects:I,uv_extent:V,sb_number:W,format:z,sh_bias:Y,res_bias:re,compact_mult:q,layer_h:j,atlas_scale:J,atlas_offset:O,n_layers:ne,n_cols:de,layer_cuts:ye,column_cuts:Ge,slice_width:ke,rects_expanded:Ce,atlas_bytes:b,mip_bytes:f,probe_mode:he&1?2:1}}const Q=I*4*4;if(te+Q>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Q} more bytes from offset ${te}, have ${o.byteLength-te}`);const Z=new Float32Array(o.slice(te,te+Q));te+=Q;const N=new Float32Array(I*5);for(let le=0;le<I;le++){const xe=Z[le*4+0],Ce=Z[le*4+1],A=Z[le*4+2],$=Z[le*4+3];let v=0;for(let y=1;y<=ne&&ye[y]<=Ce;y++)v=y;let i=0;for(let y=1;y<=de&&Ge[y]<=xe;y++)i=y;const f=Ce-ye[v],d=xe-Ge[i],b=i*ne+v;N[le*5+0]=d,N[le*5+1]=f,N[le*5+2]=A,N[le*5+3]=$,N[le*5+4]=b}let be,Ae;const qe=de,Oe=w/4*16;if(z===Kn||z===ds){if(te+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const le=z===Kn?"BCCB":"ACCB",xe=a.decode(new Uint8Array(o,te,4));if(xe!==le)throw new Error(`NAT2 typeD bad sub-magic: expected '${le}' got '${xe}'`);const Ce=S.getUint32(te+4,!0),A=S.getUint32(te+8,!0),$=S.getUint32(te+12,!0),v=S.getUint32(te+16,!0),i=S.getUint32(te+20,!0);if(Ce!==1)throw new Error(`NAT2 BCCB unsupported version ${Ce}`);if($!==T/4||v!==w/4||i!==$*v)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${T}, sub-header ${v}×${$} (${i} blocks)`);te+=24;const f=A*16;if(te+f>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${f}, have ${o.byteLength-te})`);const d=new Uint8Array(o,te,f);te+=f;const b=i*2;if(te+b>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${b}, have ${o.byteLength-te})`);const y=new Uint16Array(o.slice(te,te+b));te+=b;const k=new Uint8Array(i*16);for(let E=0;E<i;E++){const r=y[E]*16;k.set(d.subarray(r,r+16),E*16)}if(be=k,ue>1){Ae=[k];for(let E=1;E<ue;E++){if(te+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${E} sub-header`);const r=a.decode(new Uint8Array(o,te,4));if(r!==le)throw new Error(`NAT2 mip ${E}: bad sub-magic '${r}'`);const m=S.getUint32(te+8,!0),p=S.getUint32(te+16,!0),h=S.getUint32(te+20,!0);if(p!==E)throw new Error(`NAT2 mip section order: expected level ${E}, got ${p}`);te+=24;let l=0;for(let D=0;D<qe;D++)for(let F=0;F<ne;F++){const H=Bi(E,Ge[D+1]-Ge[D],ye[F+1]-ye[F],ke,j);l+=(H.cw>>2)*(H.ch>>2)}if(l!==h)throw new Error(`NAT2 mip ${E}: ${h} blocks, loader expects ${l}`);if(te+m*16+h*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${E}`);const _=new Uint8Array(o,te,m*16);te+=m*16;const P=new Uint16Array(o.slice(te,te+h*2));te+=h*2;const x=new Uint8Array(h*16);for(let D=0;D<h;D++){const F=P[D]*16;x.set(_.subarray(F,F+16),D*16)}Ae.push(x)}}}else{let le=0;for(let xe=0;xe<ne;xe++){const Ce=ye[xe+1]-ye[xe];if(Ce%4!==0)throw new Error(`NAT2 BC7 layer ${xe} rows ${Ce} not 4-aligned`);le+=Ce/4*Oe}if(te+le>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${le} more bytes from offset ${te}, have ${o.byteLength-te}`);be=new Uint8Array(o.slice(te,te+le))}return{width:w,height:T,channels:B,kernel_type:M,num_rects:I,uv_extent:V,sb_number:W,format:z,sh_bias:Y,res_bias:re,compact_mult:q,layer_h:j,atlas_scale:J,atlas_offset:O,n_layers:ne,n_cols:de,layer_cuts:ye,column_cuts:Ge,slice_width:ke,rects_expanded:N,atlas_bytes:be,...Ae?{mip_bytes:Ae}:{}}}function Bi(o,a,u,S,g){const w=B=>B+3>>2<<2,T=1<<o;return{cw:Math.min(w(Math.max(1,S>>o)),w(Math.ceil(a/T))),ch:Math.min(w(Math.max(1,g>>o)),w(Math.ceil(u/T)))}}const Yl=32;function pi(o,a,u){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,g,w,T;if(a.format===2||a.format===Kn||a.format===Hn){if(!o.features.has("texture-compression-bc"))return mt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;T=a.format===Hn?"BC7 atlas (proberes: shared probe texture)":a.format===Kn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:g,sampler:w}=hi(o,a,"bc7-rgba-unorm",T)}else if(a.format===3||a.format===ds||a.format===Yn){if(!o.features.has("texture-compression-astc"))return mt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;T=a.format===Yn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===ds?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:g,sampler:w}=hi(o,a,"astc-4x4-unorm",T)}else return mt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:B}=a,M=o.createBuffer({label:"atlas rects (5-stride)",size:An(B.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(M,0,B);const I=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return us(o,I,a,u),{texture:S,view:g,sampler:w,rectsBuffer:M,texParamsBuffer:I,meta:a}}function hi(o,a,u,S){const{width:g,layer_h:w,n_layers:T,n_cols:B,layer_cuts:M,column_cuts:I,slice_width:V,atlas_bytes:W}=a,Y=g/4*16,re=o.limits.maxTextureDimension2D;if(w>re||V>re)throw new Error(`⚠️  atlas slice dims ${V}x${w} exceed maxTextureDimension2D=${re}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const q=B*T;if(q>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${B} cols × ${T} layers = ${q} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const j=a.mip_bytes??[W],J=j.length,O=o.createTexture({label:S,size:{width:V,height:w,depthOrArrayLayers:q},mipLevelCount:J,sampleCount:1,dimension:"2d",format:u,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let he=0;he<B;he++){const _e=I[he]/4,ue=(I[he+1]-I[he])/4;for(let de=0;de<T;de++){const De=M[de]/4,te=(M[de+1]-M[de])/4,oe=he*T+de,ye=De*Y+_e*16;o.queue.writeTexture({texture:O,mipLevel:0,origin:{x:0,y:0,z:oe},aspect:"all"},W,{offset:ye,bytesPerRow:Y,rowsPerImage:te},{width:ue*4,height:te*4,depthOrArrayLayers:1})}}const ne=a.format===Hn||a.format===Yn;for(let he=1;he<J&&!ne;he++){let _e=0;for(let ue=0;ue<B;ue++)for(let de=0;de<T;de++){const{cw:De,ch:te}=Bi(he,I[ue+1]-I[ue],M[de+1]-M[de],V,w);o.queue.writeTexture({texture:O,mipLevel:he,origin:{x:0,y:0,z:ue*T+de},aspect:"all"},j[he],{offset:_e,bytesPerRow:(De>>2)*16,rowsPerImage:te>>2},{width:De,height:te,depthOrArrayLayers:1}),_e+=(De>>2)*(te>>2)*16}}for(let he=1;he<J&&ne;he++){const _e=Math.max(1,V>>he),ue=Math.max(1,w>>he);o.queue.writeTexture({texture:O,mipLevel:he,origin:{x:0,y:0,z:0},aspect:"all"},j[he],{offset:0,bytesPerRow:Math.max(1,_e>>2)*16,rowsPerImage:Math.max(1,ue>>2)},{width:_e,height:ue,depthOrArrayLayers:1})}J>1&&console.log(`[atlas] ${J} mip levels uploaded (${ne?"trilinear":"per-surfel integer level"})`);const K=O.createView({label:`${S} view`,dimension:"2d-array"}),fe=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:J>1&&ne?"linear":"nearest"});return{texture:O,view:K,sampler:fe}}function us(o,a,u,S,g=1){var I;const w=new ArrayBuffer(32),T=new Uint32Array(w),B=new Float32Array(w);T[0]=S?1:0,B[1]=u.atlas_scale,B[2]=u.atlas_offset,B[3]=u.res_bias,T[4]=u.probe_mode?u.probe_mode|0:0,T[5]=u.width|0;const M=(((I=u.mip_bytes)==null?void 0:I.length)??1)>1;T[6]=M&&g!==0?1:0,B[7]=u.uv_extent,o.queue.writeBuffer(a,0,w)}async function Ws(o,a){mt(`loading ply file from File... : ${o.name}`),er("downloading PLY...");const u=await o.arrayBuffer();try{return await Ti(u,a)}finally{jn()}}async function Zl(o,a){mt(`loading ply file from URL... : ${o}`),er("downloading PLY...");try{Mi();const u=new URL(o,self.location.href).href;return await Ti({url:u},a)}finally{jn()}}function Xl(o){return new Promise((a,u)=>{const S=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});S.onmessage=g=>{const w=g.data;if((w==null?void 0:w.type)==="error"){$l(`PLY worker error: ${w.message??"unknown error"}`),S.terminate(),u(new Error(w.message??"Worker error"));return}else if((w==null?void 0:w.type)==="download_progress"){const T=w.totalBytes,B=w.loadedBytes/(1024*1024),M=T?T/(1024*1024):void 0,I=(w.speedBps??0)/(1024*1024),V=T?Math.min(99,Math.floor(w.loadedBytes/T*100)):void 0,W=M?`total ${M.toFixed(1)} MB`:"total -- MB",z=M&&V!==void 0?`${B.toFixed(1)} MB downloaded (${V}%)`:`${B.toFixed(1)} MB downloaded`,Y=`${I.toFixed(2)} MB/s`;Wt(`downloading PLY ...
${W}, ${z}
${Y}`);return}else if((w==null?void 0:w.type)==="fetched"){mt(`💾 Fetched (${w.byteLength} bytes)`),ui("Download"),Wt("parsing PLY..."),Mi();return}else if((w==null?void 0:w.type)==="parse_progress"){const T=w.total??0,B=w.read??0,M=T>0?Math.floor(B/T*100):0;Wt(`parsing PLY ...
${B}/${T} surfels (${M}%)`);return}else(w==null?void 0:w.type)==="done"&&(S.terminate(),ui("Parse"),a(w))},S.onerror=g=>{S.terminate(),u(g)},o instanceof ArrayBuffer?(Wt("parsing PLY..."),S.postMessage({type:"start",plyBuffer:o},[o])):S.postMessage({type:"start_url",url:o.url})})}async function Ti(o,a){var re,q,j,J,O,ne,K,fe,he,_e,ue,de;const u=await Xl(o),S=u.num_points,g=u.K,w=u.feature_mode??0,T=u.sh_bias,B=u.kernel_type,M=u.surfelBuffer,I=u.svParamsBuffer;mt(`🪐 Total surfels: ${S}, mode=${w===1?"SB":"SV"}, K=${g}, sh_bias=${T}, kernel_type=${B}`);const W=a.createBuffer({label:"surfel input buffer",size:An(S*Yl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(W,0,M);const z=I.byteLength>0?I.byteLength:16,Y=a.createBuffer({label:w===1?"color_params buffer (SB)":"color_params buffer (SV)",size:An(z),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return I.byteLength>0&&a.queue.writeBuffer(Y,0,I),{num_points:S,K:g,feature_mode:w,sh_bias:T,kernel_type:B,surfel_buffer:W,surfel_data:new Float32Array(M),sv_params_buffer:Y,bbox:u.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:u.centroid??[((((q=(re=u.bbox)==null?void 0:re.min)==null?void 0:q[0])??-1)+(((J=(j=u.bbox)==null?void 0:j.max)==null?void 0:J[0])??1))/2,((((ne=(O=u.bbox)==null?void 0:O.min)==null?void 0:ne[1])??-1)+(((fe=(K=u.bbox)==null?void 0:K.max)==null?void 0:fe[1])??1))/2,((((_e=(he=u.bbox)==null?void 0:he.min)==null?void 0:_e[2])??-1)+(((de=(ue=u.bbox)==null?void 0:ue.max)==null?void 0:de[2])??1))/2]}}const Ai="BITYMI01",Ql=0,Jl=1,ec=2,tc=3,nc=4,sc=5;function Di(o){const a=new Uint8Array(o),u=new TextDecoder().decode(a.subarray(0,8));if(u!==Ai)throw new Error(`Not a BITYMI bundle (bad magic '${u}')`);const S=new DataView(o),g=S.getUint32(8,!0),w=12,T=20;let B=null,M=null,I=null;for(let V=0;V<g;V++){const W=w+V*T,z=S.getUint32(W+0,!0),Y=Number(S.getBigUint64(W+4,!0)),re=Number(S.getBigUint64(W+12,!0)),q=a.slice(Y,Y+re).buffer;z===Ql||z===Jl||z===sc?B=q:z===ec?M=q:(z===tc||z===nc)&&(I=q)}if(B===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:B,camerasBuffer:M,atlasBuffer:I}}async function fi(o,a){var T;const u=await fetch(o);if(!u.ok)throw new Error(`fetch failed: ${u.status} ${u.statusText}`);const S=(()=>{const B=u.headers.get("content-length");return B&&parseInt(B,10)||void 0})(),g=(T=u.body)==null?void 0:T.getReader();let w;if(!g)w=await u.arrayBuffer(),a&&a(w.byteLength,S,0);else{const B=[];let M=0,I=performance.now(),V=0;for(;;){const{done:Y,value:re}=await g.read();if(Y)break;B.push(re),M+=re.byteLength;const q=performance.now();if(q-I>=150&&a){const j=(M-V)/((q-I)/1e3);a(M,S,j),I=q,V=M}}const W=new Uint8Array(M);let z=0;for(const Y of B)W.set(Y,z),z+=Y.byteLength;w=W.buffer,a&&a(M,S,0)}return w.byteLength>=8&&new TextDecoder().decode(new Uint8Array(w,0,8))===Ai?{bundle:Di(w),rawPly:null}:{bundle:null,rawPly:w}}var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},js={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(u,S){S(a)})(rc,function(u){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class w{constructor(e){this.target=e}}class T extends w{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class B extends w{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class M extends w{constructor(e,t){super(e),this.expanded=t}}class I extends w{constructor(e,t){super(e),this.index=t}}function V(n){return n}function W(n){return n==null}function z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Y(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const re={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class q{static alreadyDisposed(){return new q({type:"alreadydisposed"})}static notBindable(){return new q({type:"notbindable"})}static propertyNotFound(e){return new q({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new q({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=re[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class j{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!j.isBindable(s))throw q.notBindable();if(!(e in s))throw q.propertyNotFound(e);s[e]=t}}class J extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new w(this))}),this}}class O{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const ne="tp";function K(n){return(t,s)=>[ne,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function fe(n,e){return t=>e(n(t))}function he(n){return n.rawValue}function _e(n,e){n.emitter.on("change",fe(he,e)),e(n.rawValue)}function ue(n,e,t){_e(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function De(n,e){return t=>{de(n,e,t)}}function te(n,e){_e(n,t=>{e.textContent=t??""})}const oe=K("btn");class ye{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(oe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(oe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(oe("t")),te(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Ge{constructor(e,t){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ye(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ke{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,C)=>c===C,this.emitter=new O,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,C=this.rawValue_;this.equals_(C,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:C,rawValue:c,sender:this}))}}class Q{constructor(e){this.emitter=new O,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function Z(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Q(n):new ke(n,e)}class N{constructor(e){this.emitter=new O,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:Z(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new N(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function be(n,e){const s=Object.keys(e).reduce((c,C)=>{if(c===void 0)return;const L=e[C],ee=L(n[C]);return ee.succeeded?Object.assign(Object.assign({},c),{[C]:ee.value}):void 0},{});return s}function Ae(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function qe(n){return n===null?!1:typeof n=="object"}function Re(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Oe(n){return{custom:e=>Re(e)(n),boolean:Re(e=>typeof e=="boolean"?e:void 0)(n),number:Re(e=>typeof e=="number"?e:void 0)(n),string:Re(e=>typeof e=="string"?e:void 0)(n),function:Re(e=>typeof e=="function"?e:void 0)(n),constant:e=>Re(t=>t===e?e:void 0)(n),raw:Re(e=>e)(n),object:e=>Re(t=>{if(qe(t))return be(t,e)})(n),array:e=>Re(t=>{if(Array.isArray(t))return Ae(t,e)})(n)}}const le={optional:Oe(!0),required:Oe(!1)};function xe(n,e){const t=le.required.object(e)(n);return t.succeeded?t.value:void 0}function Ce(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class ${constructor(e){this.value_=e}static create(e){return[new $(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=K("");function i(n,e){return De(n,v(void 0,e))}class f extends N{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=$.create(Z(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const C=e??{};return new f(N.createCore({disabled:(t=C.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=C.hidden)!==null&&s!==void 0?s:!1,parent:(c=C.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){_e(this.globalDisabled_,i(e,"disabled")),ue(this,"hidden",i(e,"hidden"))}bindDisabled(e){_e(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){_e(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=K(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ce({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function p(n){return n.ontouchstart!==void 0}function h(){return globalThis}function l(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const P={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function x(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=P[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function F(n){n.parentElement&&n.parentElement.removeChild(n)}function H(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ce(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ie(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=K("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,C)=>{C>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(se("l")),ue(t.props,"label",C=>{W(C)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),ce(s),s.appendChild(ge(e,C)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(se("v")),this.element.appendChild(c),this.valueElement=c}}class we extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Pe={id:"button",type:"blade",accept(n){const e=le,t=xe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new we(n.document,{blade:n.blade,props:N.fromObject({label:n.params.label}),valueController:new Ge(n.document,{props:N.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof we)||!(n.controller.valueController instanceof Ge)?null:new J(n.controller)}};class Ie extends k{constructor(e){super(e),this.value=e.value}}function Le(){return new N({positions:Z([],{equals:z})})}class je extends N{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=N.createCore(t);return new je(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!W(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ue(this,"expanded",s),ue(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function We(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function Qe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),W(n.get("expandedHeight"))){const t=We(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class nt extends g{constructor(e,t){super(e),this.rackApi_=t}}function Ye(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ot(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Je{constructor(e){this.emitter=new O,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw q.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(C=>{this.cache_.add(C)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Xe extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new T(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Fe extends we{constructor(e,t){super(e,t),this.binding=t.binding}}class it extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new O,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new B(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends we{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function dt(n){return n instanceof Ct?n.apiSet_:n instanceof nt?n.rackApi_.apiSet_:null}function rt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw q.shouldNeverHappen();return t}function Lt(n,e,t){if(!j.isBindable(n))throw q.notBindable();return new j(n,e,t)}class Ct extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new O,this.apiSet_=new Je(dt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>rt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,L=this.pool_.createInput(C,Lt(e,t,c.presetKey),c),ee=new Xe(L);return this.add(ee,c.index)}addMonitor(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,L=this.pool_.createMonitor(C,Lt(e,t),c),ee=new it(L);return this.add(ee,c.index)}addFolder(e){return tt(this,e)}addButton(e){return Ye(this,e)}addSeparator(e){return ot(this,e)}addTab(e){return st(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=rt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Fe){const s=rt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new T(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=rt(this.apiSet_,t);this.emitter_.emit("change",{event:new T(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw q.shouldNeverHappen();const t=rt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new B(t,s.target.read(),s.target.presetKey)})}}class yt extends nt{constructor(e,t){super(e,new Ct(e.rackController,t)),this.emitter_=new O,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new M(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class kt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class It{constructor(e,t){const s=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function jt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.binding===e)return s}return null}function Pt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function rn(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Kt(n){return n instanceof Ue?n.rack:n instanceof kt?n.rackController.rack:null}function bn(n){const e=Kt(n);return e?e.bcSet_:null}class gn{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new O,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Je(bn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),Y(e,"parent")?e.parent=this:(e.parent_=this,Ce({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){Y(e,"parent")?e.parent=null:(e.parent_=null,Ce({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Fe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Kt(s);if(c){const C=c.emitter;C.on("layout",this.onDescendantLayout_),C.on("inputchange",this.onDescendantInputChange_),C.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Fe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Kt(s);if(c){const C=c.emitter;C.off("layout",this.onDescendantLayout_),C.off("inputchange",this.onDescendantInputChange_),C.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const C=[];c===t&&(C.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&C.push("veryfirst")),c===s&&(C.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&C.push("verylast")),c.blade.set("positions",C)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=jt(this.find(Fe),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Pt(this.find(Ke),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=rn(this.find(Ie),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ue extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new It(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new gn({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&F(e.bladeController.view.element)}}const Zn=K("cnt");class ms{constructor(e,t){var s;this.className_=K((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Zn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ue(this.foldable_,"completed",De(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ue(t.props,"title",Te=>{W(Te)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const C=e.createElement("div");C.classList.add(this.className_("i")),this.element.appendChild(C);const L=e.createElement("div");L.classList.add(this.className_("t")),te(t.props.value("title"),L),this.buttonElement.appendChild(L),this.titleElement=L;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const Be=t.containerElement;Be.classList.add(this.className_("c")),this.element.appendChild(Be),this.containerElement=Be}}class Dn extends kt{constructor(e,t){var s;const c=je.create((s=t.expanded)!==null&&s!==void 0?s:!0),C=new Ue(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:C,view:new ms(e,{containerElement:C.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Qe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const vs={id:"folder",type:"blade",accept(n){const e=le,t=xe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Dn(n.document,{blade:n.blade,expanded:n.params.expanded,props:N.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Dn?new yt(n.controller,n.pool):null}};class Gt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class wn extends g{}const Rn=K("spr");class Xn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Rn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Rn("r")),this.element.appendChild(s)}}class Ln extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Xn(e,{viewProps:t.viewProps})}))}}const Qn={id:"separator",type:"blade",accept(n){const t=xe(n,{view:le.required.constant("separator")});return t?{params:t}:null},controller(n){return new Ln(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Ln?new wn(n.controller):null}},zt=K("tbi");class Jn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(zt()),t.viewProps.bindClassModifiers(this.element),ue(t.props,"selected",C=>{C?this.element.classList.add(zt(void 0,"sel")):this.element.classList.remove(zt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(zt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(zt("t")),te(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class xn{constructor(e,t){this.emitter=new O,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Jn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class on{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new xn(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ue(e,{blade:Le(),viewProps:f.create()}),this.props=t.props,ue(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class R{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class X extends nt{constructor(e,t){super(e,new Ct(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new O,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw q.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new on(t,{itemProps:N.fromObject({selected:!1,title:e.title}),props:N.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw q.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw q.shouldNeverHappen();const s=new R(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw q.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new I(this,e.rawValue)})}}const ae=-1;class pe{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Z(!0),this.selectedIndex=Z(ae),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ae,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Se=K("tab");class me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Se(),Zn()),t.viewProps.bindClassModifiers(this.element),_e(t.empty,De(this.element,Se(void 0,"nop")));const s=e.createElement("div");s.classList.add(Se("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Se("i")),this.element.appendChild(c);const C=t.contentsElement;C.classList.add(Se("c")),this.element.appendChild(C),this.contentsElement=C}}class ve extends kt{constructor(e,t){const s=new Ue(e,{blade:t.blade,viewProps:t.viewProps}),c=new pe;super({blade:t.blade,rackController:s,view:new me(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Je(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;F(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Ee={id:"tab",type:"blade",accept(n){const e=le,t=xe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new ve(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new on(n.document,{itemProps:N.fromObject({selected:!1,title:t.title}),props:N.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof ve?new X(n.controller,n.pool):null}};function Ze(n,e){const t=n.accept(e.params);if(!t)return null;const s=le.optional.boolean(e.params.disabled).value,c=le.optional.boolean(e.params.hidden).value;return n.controller({blade:Le(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class pt{constructor(){this.disabled=!1,this.emitter=new O}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class gt{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new O,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class St{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new O,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Et(n,e){for(;n.length<e;)n.push(void 0)}function At(n){const e=[];return Et(e,n),Z(e)}function at(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function an(n,e){const t=[...at(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Et(t,n.length),t}class vt{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new O,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=an(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Ut{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function bt(n,e){if(n instanceof e)return n;if(n instanceof Ut){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Ht{constructor(e){this.values=N.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Yt{constructor(e){this.values=N.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class ft{constructor(e){this.values=N.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return W(s)||(c=Math.max(c,s)),W(t)||(c=Math.min(c,t)),c}}class Dt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Zt=K("lst");class Ot{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Zt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Zt("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Zt("m")),c.appendChild(x(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ue(this.props_,"options",C=>{H(this.selectElement),C.forEach(L=>{const ee=e.createElement("option");ee.textContent=L.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Rt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ot(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const ln=K("pop");class bs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ln()),t.viewProps.bindClassModifiers(this.element),_e(t.shows,De(this.element,ln(void 0,"v")))}}class yn{constructor(e,t){this.shows=Z(!1),this.viewProps=t.viewProps,this.view=new bs(e,{shows:this.shows,viewProps:this.viewProps})}}const nr=K("txt");class Vi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(nr()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(nr("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class es{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Vi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);W(c)||(this.value.rawValue=c),this.view.refresh()}}function Fi(n){return String(n)}function sr(n){return n==="false"?!1:!!n}function rr(n){return Fi(n)}class Ni{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const $i={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class qi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=$i[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Wi={"+":n=>n,"-":n=>-n,"~":n=>~n};class ji{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Wi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function gs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function In(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Gn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hi(n,e){const t=Gn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Gn(n,e);return c===""?"":s+c}function ws(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Hi(n,e);return s===""?"":t+s}function ir(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ki(n,e);return e+=s.length,s===""?"":s+Gn(n,e)}function Yi(n,e){const t=ir(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Gn(n,e);return e+=c.length,t+s+c+ws(n,e)}function Zi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Gn(n,e);return e+=s.length,s===""?"":t+s+ws(n,e)}function Xi(n,e){const t=ir(n,e);return e+=t.length,t===""?"":t+ws(n,e)}const Qi=gs([Yi,Zi,Xi]);function Ji(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function eo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Ji(n,e);return s===""?"":t+s}function to(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function no(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=to(n,e);return s===""?"":t+s}function so(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ro(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=so(n,e);return s===""?"":t+s}const io=gs([eo,no,ro]),oo=gs([io,Qi]);function ao(n,e){const t=oo(n,e);return e+=t.length,t===""?null:{evaluable:new Ni(t),cursor:e}}function lo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=ar(n,e);if(!s)return null;e=s.cursor,e+=In(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function co(n,e){var t;return(t=ao(n,e))!==null&&t!==void 0?t:lo(n,e)}function or(n,e){const t=co(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=or(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new ji(s,c.evaluable)}):null}function uo(n,e,t){t+=In(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=In(e,t).length,{cursor:t,operator:s}):null}function po(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let C=c.evaluable;for(;;){const L=uo(e,t,s);if(!L)break;s=L.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,C=new qi(L.operator,C,ee.evaluable)}return C?{cursor:s,evaluable:C}:null}}const ho=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>po(n,e),or);function ar(n,e){return e+=In(n,e).length,ho(n,e)}function fo(n){const e=ar(n,0);return!e||e.cursor+In(n,e.cursor).length!==n.length?null:e.evaluable}function Vt(n){var e;const t=fo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function lr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Vt(n);if(!W(e))return e}return 0}function _o(n){return String(n)}function ht(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const mo=ht(0);function ts(n){return mo(n)+"%"}function cr(n){return String(n)}function xs(n){return n}function zn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function C(L){c||(c=!0,L(),c=!1)}n.emitter.on("change",L=>{C(()=>{e.setRawValue(t(n,e),L.options)})}),e.emitter.on("change",L=>{C(()=>{n.setRawValue(s(n,e),L.options)}),C(()=>{e.setRawValue(t(n,e),L.options)})}),C(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function wt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Un(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Ft(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function vo(n){return n==="ArrowUp"||n==="ArrowDown"}function ur(n){return vo(n)||n==="ArrowLeft"||n==="ArrowRight"}function ys(n,e){var t,s;const c=e.ownerDocument.defaultView,C=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+C.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+C.top)}}class cn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new O,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ys(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ys(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ys(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,c){const C=(n-e)/(t-e);return s+C*(c-s)}function dr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function lt(n,e,t){return Math.min(Math.max(n,e),t)}function pr(n,e){return(n%e+e)%e}const Mt=K("txt");class bo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Mt(),Mt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Mt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Mt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Mt()),this.inputElement.classList.add(Mt("i"));const c=e.createElement("div");c.classList.add(Mt("k")),this.element.appendChild(c),this.knobElement=c;const C=e.createElementNS(E,"svg");C.classList.add(Mt("g")),this.knobElement.appendChild(C);const L=e.createElementNS(E,"path");L.classList.add(Mt("gb")),C.appendChild(L),this.guideBodyElem_=L;const ee=e.createElementNS(E,"path");ee.classList.add(Mt("gh")),C.appendChild(ee),this.guideHeadElem_=ee;const Be=e.createElement("div");Be.classList.add(K("tt")()),this.knobElement.appendChild(Be),this.tooltipElem_=Be,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Mt(void 0,"drg"));return}this.element.classList.add(Mt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=lt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const C=this.props_.get("formatter");this.tooltipElem_.textContent=C(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class On{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=Z(null),this.view=new bo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new cn(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),C=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let L=e;return c!==void 0&&(L=Math.max(L,c)),C!==void 0&&(L=Math.min(L,C)),L}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);W(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=wt(this.baseStep_,Un(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){wt(this.baseStep_,Un(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Ps=K("sld");class go{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Ps()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ps("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(Ps("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=lt(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new go(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new cn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=wt(this.baseStep_,Ft(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){wt(this.baseStep_,Ft(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ss=K("sldtxt");class xo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ss());const s=e.createElement("div");s.classList.add(Ss("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ss("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Es{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new wo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new On(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new xo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Vn(n,e){n.write(e)}function ns(n){const e=le;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function hr(n){if(n==="inline"||n==="popup")return n}function Xt(n){const e=le;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function fr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Cs(n){return W(n)?null:new Yt(fr(n))}function yo(n){const e=n?bt(n,Dt):null;return e?e.step:null}function ss(n,e){const t=n&&bt(n,Dt);return t?dr(t.step):Math.max(dr(e),2)}function Pn(n){const e=yo(n);return e??1}function Sn(n,e){var t;const s=n&&bt(n,Dt),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const rs=K("ckb");class Po{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(rs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(rs("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(rs("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const C=e.createElement("div");C.classList.add(rs("w")),s.appendChild(C);const L=x(e,"check");C.appendChild(L),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class So{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Po(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Eo(n){const e=[],t=Cs(n.options);return t&&e.push(t),new Ut(e)}const Co={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{options:le.optional.custom(ns)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sr,constraint:n=>Eo(n.params),writer:n=>Vn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&bt(s,Yt);return c?new Rt(e,{props:new N({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new So(e,{value:t,viewProps:n.viewProps})}},un=K("col");class ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(un()),t.foldable.bindExpandedClass(this.element,un(void 0,"expanded")),ue(t.foldable,"completed",De(this.element,un(void 0,"cpl")));const s=e.createElement("div");s.classList.add(un("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(un("s")),s.appendChild(c),this.swatchElement=c;const C=e.createElement("div");if(C.classList.add(un("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const L=e.createElement("div");L.classList.add(un("p")),this.element.appendChild(L),this.pickerElement=L}else this.pickerElement=null}}function Mo(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),C=lt(t/255,0,1),L=Math.max(s,c,C),ee=Math.min(s,c,C),Be=L-ee;let Te=0,Ne=0;const $e=(ee+L)/2;return Be!==0&&(Ne=Be/(1-Math.abs(L+ee-1)),s===L?Te=(c-C)/Be:c===L?Te=2+(C-s)/Be:Te=4+(s-c)/Be,Te=Te/6+(Te<0?1:0)),[Te*360,Ne*100,$e*100]}function Bo(n,e,t){const s=(n%360+360)%360,c=lt(e/100,0,1),C=lt(t/100,0,1),L=(1-Math.abs(2*C-1))*c,ee=L*(1-Math.abs(s/60%2-1)),Be=C-L/2;let Te,Ne,$e;return s>=0&&s<60?[Te,Ne,$e]=[L,ee,0]:s>=60&&s<120?[Te,Ne,$e]=[ee,L,0]:s>=120&&s<180?[Te,Ne,$e]=[0,L,ee]:s>=180&&s<240?[Te,Ne,$e]=[0,ee,L]:s>=240&&s<300?[Te,Ne,$e]=[ee,0,L]:[Te,Ne,$e]=[L,0,ee],[(Te+Be)*255,(Ne+Be)*255,($e+Be)*255]}function To(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),C=lt(t/255,0,1),L=Math.max(s,c,C),ee=Math.min(s,c,C),Be=L-ee;let Te;Be===0?Te=0:L===s?Te=60*(((c-C)/Be%6+6)%6):L===c?Te=60*((C-s)/Be+2):Te=60*((s-c)/Be+4);const Ne=L===0?0:Be/L,$e=L;return[Te,Ne*100,$e*100]}function _r(n,e,t){const s=pr(n,360),c=lt(e/100,0,1),C=lt(t/100,0,1),L=C*c,ee=L*(1-Math.abs(s/60%2-1)),Be=C-L;let Te,Ne,$e;return s>=0&&s<60?[Te,Ne,$e]=[L,ee,0]:s>=60&&s<120?[Te,Ne,$e]=[ee,L,0]:s>=120&&s<180?[Te,Ne,$e]=[0,L,ee]:s>=180&&s<240?[Te,Ne,$e]=[0,ee,L]:s>=240&&s<300?[Te,Ne,$e]=[ee,0,L]:[Te,Ne,$e]=[L,0,ee],[(Te+Be)*255,(Ne+Be)*255,($e+Be)*255]}function Ao(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Do(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function dn(n){return[n[0],n[1],n[2]]}function mr(n,e){return[n[0],n[1],n[2],e]}const Ro={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Ao,rgb:Bo},hsv:{hsl:Do,hsv:(n,e,t)=>[n,e,t],rgb:_r},rgb:{hsl:Mo,hsv:To,rgb:(n,e,t)=>[n,e,t]}};function is(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Lo(n,e){return n===e?e:pr(n,e)}function Io(n,e,t){var s;const c=is(e,t);return[e==="rgb"?lt(n[0],0,c[0]):Lo(n[0],c[0]),lt(n[1],0,c[1]),lt(n[2],0,c[2]),lt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function vr(n,e,t,s){const c=is(e,t),C=is(e,s);return n.map((L,ee)=>L/c[ee]*C[ee])}function Go(n,e,t){const s=vr(n,e.mode,e.type,"int"),c=Ro[e.mode][t.mode](...s);return vr(c,t.mode,"int",t.type)}function os(n,e){return typeof n!="object"||W(n)?!1:e in n&&typeof n[e]=="number"}class Ve{static black(e="int"){return new Ve([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ve(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return os(e,"r")&&os(e,"g")&&os(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&os(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let C=0;C<s.length;C++)if(s[C]!==c[C])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Io(e,t,s)}getComponents(e,t="int"){return mr(Go(dn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Qt=K("colp");class zo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Qt("hsv"));const c=e.createElement("div");c.classList.add(Qt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const C=e.createElement("div");C.classList.add(Qt("h")),this.hPaletteView_=t.hPaletteView,C.appendChild(this.hPaletteView_.element),s.appendChild(C),this.element.appendChild(s);const L=e.createElement("div");if(L.classList.add(Qt("rgb")),this.textView_=t.textView,L.appendChild(this.textView_.element),this.element.appendChild(L),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Qt("a"));const Be=e.createElement("div");Be.classList.add(Qt("ap")),Be.appendChild(this.alphaViews_.palette.element),ee.appendChild(Be);const Te=e.createElement("div");Te.classList.add(Qt("at")),Te.appendChild(this.alphaViews_.text.element),ee.appendChild(Te),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Uo(n){return n==="int"?"int":n==="float"?"float":void 0}function ks(n){const e=le;return xe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Uo)}),expanded:e.optional.boolean,picker:e.optional.custom(hr)})}function pn(n){return n?.1:1}function hn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Oo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Bt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Vo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function br(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Vo[s](t)}function gr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Bt(e[1],255),Bt(e[2],255),Bt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function wr(n){return e=>{const t=gr(e);return t?new Ve(t,"rgb",n):null}}function xr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Bt(e[1],255),Bt(e[2],255),Bt(e[3],255),Bt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function yr(n){return e=>{const t=xr(e);return t?new Ve(t,"rgb",n):null}}function Pr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[br(e[1]),Bt(e[2],100),Bt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Sr(n){return e=>{const t=Pr(e);return t?new Ve(t,"hsl",n):null}}function Er(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[br(e[1]),Bt(e[2],100),Bt(e[3],100),Bt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Cr(n){return e=>{const t=Er(e);return t?new Ve(t,"hsl",n):null}}function kr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Fo(n){const e=kr(n);return e?new Ve(e,"rgb","int"):null}function Mr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function No(n){const e=Mr(n);return e?new Ve(e,"rgb","int"):null}function Br(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Tr(n){return e=>{const t=Br(e);return t?new Ve(t,"rgb",n):null}}function Ar(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Dr(n){return e=>{const t=Ar(e);return t?new Ve(t,"rgb",n):null}}const $o=[{parser:kr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Mr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:gr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Pr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Er,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Br,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ar,result:{alpha:!0,mode:"rgb",notation:"object"}}];function qo(n){return $o.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Ms(n,e="int"){const t=qo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Rr={int:[Fo,No,wr("int"),yr("int"),Sr("int"),Cr("int"),Tr("int"),Dr("int")],float:[wr("float"),yr("float"),Sr("float"),Cr("float"),Tr("float"),Dr("float")]};function Wo(n){const e=Rr[n];return t=>{if(typeof t!="string")return Ve.black(n);const s=e.reduce((c,C)=>c||C(t),null);return s??Ve.black(n)}}function Bs(n){const e=Rr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function Lr(n){const e=lt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Ir(n,e="#"){const t=dn(n.getComponents("rgb")).map(Lr).join("");return`${e}${t}`}function Ts(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Lr).join("");return`${e}${s}`}function Gr(n,e){const t=ht(e==="float"?2:0);return`rgb(${dn(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function jo(n){return e=>Gr(e,n)}function as(n,e){const t=ht(2),s=ht(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((C,L)=>(L===3?t:s)(C)).join(", ")})`}function Ko(n){return e=>as(e,n)}function Ho(n){const e=[ht(0),ts,ts];return`hsl(${dn(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Yo(n){const e=[ht(0),ts,ts,ht(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function zr(n,e){const t=ht(e==="float"?2:0),s=["r","g","b"];return`{${dn(n.getComponents("rgb",e)).map((C,L)=>`${s[L]}: ${t(C)}`).join(", ")}}`}function Zo(n){return e=>zr(e,n)}function Ur(n,e){const t=ht(2),s=ht(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((L,ee)=>{const Be=ee===3?t:s;return`${c[ee]}: ${Be(L)}`}).join(", ")}}`}function Xo(n){return e=>Ur(e,n)}const Qo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Ir},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ts},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ho},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Yo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:jo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Ko(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Zo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Xo(e)}],[])];function As(n){return Qo.reduce((e,t)=>e||(Oo(t.format,n)?t.stringifier:null),null)}const Fn=K("apl");class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Fn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Fn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Fn("c")),s.appendChild(c),this.colorElem_=c;const C=e.createElement("div");C.classList.add(Fn("m")),this.element.appendChild(C),this.markerElem_=C;const L=e.createElement("div");L.classList.add(Fn("p")),this.markerElem_.appendChild(L),this.previewElem_=L,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ve([t[0],t[1],t[2],0],"rgb"),c=new Ve([t[0],t[1],t[2],255],"rgb"),C=["to right",as(s),as(c)];this.colorElem_.style.background=`linear-gradient(${C.join(",")})`,this.previewElem_.style.backgroundColor=as(e);const L=et(t[3],0,1,0,100);this.markerElem_.style.left=`${L}%`}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new cn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[C,L,ee]=c.getComponents("hsv");this.value.setRawValue(new Ve([C,L,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=wt(pn(!0),Ft(e));if(t===0)return;const s=this.value.rawValue,[c,C,L,ee]=s.getComponents("hsv");this.value.setRawValue(new Ve([c,C,L,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){wt(pn(!0),Ft(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const En=K("coltxt");function ta(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const C=n.createElement("option");return C.textContent=c.text,C.value=c.value,s.appendChild(C),s},n.createDocumentFragment())),e}class na{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(En()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(En("m")),this.modeElem_=ta(e),this.modeElem_.classList.add(En("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(En("mm")),c.appendChild(x(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const C=e.createElement("div");C.classList.add(En("w")),this.element.appendChild(C),this.textsElem_=C,this.textViews_=t.textViews,this.applyTextViews_(),_e(t.colorMode,L=>{this.modeElem_.value=L})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){H(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(En("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function sa(n){return ht(n==="float"?2:0)}function ra(n,e,t){const s=is(n,e)[t];return new Ht({min:0,max:s})}function Ds(n,e,t){return new On(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:pn(!1),parser:e.parser,props:N.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:sa(e.colorType)}),value:Z(0,{constraint:ra(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ia{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=Z(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new na(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Ds(e,t,0),Ds(e,t,1),Ds(e,t,2)];return s.forEach((c,C)=>{zn({primary:this.value,secondary:c.value,forward:L=>L.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[C],backward:(L,ee)=>{const Be=this.colorMode.rawValue,Te=L.rawValue.getComponents(Be,this.colorType_);return Te[C]=ee.rawValue,new Ve(mr(dn(Te),Te[3]),Be,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Rs=K("hpl");class oa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Rs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Rs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Rs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Gr(new Ve([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class aa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new oa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new cn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,C,L,ee]=c.getComponents("hsv");this.value.setRawValue(new Ve([s,C,L,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=wt(pn(!1),Ft(e));if(t===0)return;const s=this.value.rawValue,[c,C,L,ee]=s.getComponents("hsv");this.value.setRawValue(new Ve([c+t,C,L,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){wt(pn(!1),Ft(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ls=K("svp"),Or=64;class la{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ls()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Or,s.width=Or,s.classList.add(Ls("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Ls("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,C=this.canvasElement.height,L=e.getImageData(0,0,c,C),ee=L.data;for(let Ne=0;Ne<C;Ne++)for(let $e=0;$e<c;$e++){const fn=et($e,0,c,0,100),$n=et(Ne,0,C,100,0),qn=_r(s[0],fn,$n),ls=(Ne*c+$e)*4;ee[ls]=qn[0],ee[ls+1]=qn[1],ee[ls+2]=qn[2],ee[ls+3]=255}e.putImageData(L,0,0);const Be=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Be}%`;const Te=et(s[2],0,100,100,0);this.markerElem_.style.top=`${Te}%`}onValueChange_(){this.update_()}}class ca{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new la(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new cn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),c=et(e.point.y,0,e.bounds.height,100,0),[C,,,L]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ve([C,s,c,L],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){ur(e.key)&&e.preventDefault();const[t,s,c,C]=this.value.rawValue.getComponents("hsv"),L=pn(!1),ee=wt(L,Ft(e)),Be=wt(L,Un(e));ee===0&&Be===0||this.value.setRawValue(new Ve([t,s+ee,c+Be,C],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=pn(!1),s=wt(t,Ft(e)),c=wt(t,Un(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ua{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new aa(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ca(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new ea(e,{value:this.value,viewProps:this.viewProps}),text:new On(e,{parser:Vt,baseStep:.1,props:N.fromObject({draggingScale:.01,formatter:ht(2)}),value:Z(0,{constraint:new Ht({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&zn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const C=s.rawValue.getComponents();return C[3]=c.rawValue,new Ve(C,s.rawValue.mode)}}),this.textC_=new ia(e,{colorType:t.colorType,parser:Vt,value:this.value,viewProps:this.viewProps}),this.view=new zo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Is=K("colsw");class da{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Is()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Is("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Is("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ts(e)}onValueChange_(){this.update_()}}class pa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new da(e,{value:this.value,viewProps:this.viewProps})}}class Gs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=je.create(t.expanded),this.swatchC_=new pa(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new es(e,{parser:t.parser,props:N.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new yn(e,{viewProps:this.viewProps}):null;const c=new ua(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(C=>{C.addEventListener("blur",this.onPopupChildBlur_),C.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),zn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:C=>C.rawValue,backward:(C,L)=>L.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ie(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ha(n,e){return Ve.isColorObject(n)?Ve.fromObject(n,e):Ve.black(e)}function fa(n){return dn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function _a(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function ma(n){return new Ve([n>>16&255,n>>8&255,n&255],"rgb")}function va(n){return new Ve([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function ba(n){return typeof n!="number"?Ve.black():ma(n)}function ga(n){return typeof n!="number"?Ve.black():va(n)}function wa(n){const e=As(n);return e?(t,s)=>{Vn(t,e(s))}:null}function xa(n){const e=n?_a:fa;return(t,s)=>{Vn(t,e(s))}}function ya(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function Pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Sa(n,e){return(t,s)=>{n?ya(t,s,e):Pa(t,s,e)}}function zs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Ea(n){return n?e=>Ts(e,"0x"):e=>Ir(e,"0x")}function Ca(n){return"color"in n||"view"in n&&n.view==="color"}const ka={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Ca(e))return null;const t=ks(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>zs(n.params)?ga:ba,equals:Ve.equals,writer:n=>xa(zs(n.params))},controller:n=>{const e=zs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Gs(n.document,{colorType:"int",expanded:t??!1,formatter:Ea(e),parser:Bs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Ma(n){return Ve.isRgbaColorObject(n)}function Ba(n){return e=>ha(e,n)}function Ta(n,e){return t=>n?Ur(t,e):zr(t,e)}const Aa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ve.isColorObject(n))return null;const t=ks(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ba(hn(n.params)),equals:Ve.equals,writer:n=>Sa(Ma(n.initialValue),hn(n.params))},controller:n=>{var e;const t=Ve.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,C=(e=hn(n.params))!==null&&e!==void 0?e:"int";return new Gs(n.document,{colorType:C,expanded:s??!1,formatter:Ta(t,C),parser:Bs(C),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Da={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ms(n,hn(e));if(!t||!As(t))return null;const c=ks(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Wo((e=hn(n.params))!==null&&e!==void 0?e:"int")},equals:Ve.equals,writer:n=>{const e=Ms(n.initialValue,hn(n.params));if(!e)throw q.shouldNeverHappen();const t=wa(e);if(!t)throw q.notBindable();return t}},controller:n=>{const e=Ms(n.initialValue,hn(n.params));if(!e)throw q.shouldNeverHappen();const t=As(e);if(!t)throw q.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Gs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Bs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Jt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var C,L;return(L=(C=this.components[c])===null||C===void 0?void 0:C.constrain(s))!==null&&L!==void 0?L:s});return this.asm_.fromComponents(t)}}const Vr=K("pndtxt");class Ra{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Vr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Vr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function La(n,e,t){return new On(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:Z(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Us{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>La(e,t,c)),this.acs_.forEach((s,c)=>{zn({primary:this.value,secondary:s.value,forward:C=>t.assembly.toComponents(C.rawValue)[c],backward:(C,L)=>{const ee=t.assembly.toComponents(C.rawValue);return ee[c]=L.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ra(e,{textViews:this.acs_.map(s=>s.view)})}}function Fr(n,e){return"step"in n&&!W(n.step)?new Dt(n.step,e):null}function Nr(n){return!W(n.max)&&!W(n.min)?new Ht({max:n.max,min:n.min}):!W(n.max)||!W(n.min)?new ft({max:n.max,min:n.min}):null}function Ia(n){const e=bt(n,Ht);if(e)return[e.values.get("min"),e.values.get("max")];const t=bt(n,ft);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ga(n,e){const t=[],s=Fr(n,e);s&&t.push(s);const c=Nr(n);c&&t.push(c);const C=Cs(n.options);return C&&t.push(C),new Ut(t)}const za={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=le,s=xe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(ns),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>lr,constraint:n=>Ga(n.params,n.initialValue),writer:n=>Vn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&bt(s,Yt);if(c)return new Rt(n.document,{props:new N({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const C=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ht(ss(s,t.rawValue)),L=s&&bt(s,Ht);return L?new Es(n.document,{baseStep:Pn(s),parser:Vt,sliderProps:new N({maxValue:L.values.value("max"),minValue:L.values.value("min")}),textProps:N.fromObject({draggingScale:Sn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps}):new On(n.document,{baseStep:Pn(s),parser:Vt,props:N.fromObject({draggingScale:Sn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps})}};class en{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(W(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const $r={toComponents:n=>n.getComponents(),fromComponents:n=>new en(...n)},Cn=K("p2d");class Ua{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Cn()),t.viewProps.bindClassModifiers(this.element),_e(t.expanded,De(this.element,Cn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Cn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(Cn("b")),c.appendChild(x(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const C=e.createElement("div");if(C.classList.add(Cn("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const L=e.createElement("div");L.classList.add(Cn("p")),this.element.appendChild(L),this.pickerElement=L}else this.pickerElement=null}}const tn=K("p2dp");class Oa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(tn()),t.layout==="popup"&&this.element.classList.add(tn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(tn("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(tn("g")),this.padElement.appendChild(c),this.svgElem_=c;const C=e.createElementNS(E,"line");C.classList.add(tn("ax")),C.setAttributeNS(null,"x1","0"),C.setAttributeNS(null,"y1","50%"),C.setAttributeNS(null,"x2","100%"),C.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(C);const L=e.createElementNS(E,"line");L.classList.add(tn("ax")),L.setAttributeNS(null,"x1","50%"),L.setAttributeNS(null,"y1","0"),L.setAttributeNS(null,"x2","50%"),L.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(L);const ee=e.createElementNS(E,"line");ee.classList.add(tn("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const Be=e.createElement("div");Be.classList.add(tn("m")),this.padElement.appendChild(Be),this.markerElem_=Be,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=et(e,-s,+s,0,100),C=et(t,-s,+s,0,100),L=this.invertsY_?100-C:C;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${L}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${L}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function qr(n,e,t){return[wt(e[0],Ft(n)),wt(e[1],Un(n))*(t?1:-1)]}class Va{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Oa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new cn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=et(e.point.x,0,e.bounds.width,-s,+s),C=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new en(c,C),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){ur(e.key)&&e.preventDefault();const[t,s]=qr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new en(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=qr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Fa{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=je.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new yn(e,{viewProps:this.viewProps}):null;const C=new Va(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});C.view.allFocusableElements.forEach(L=>{L.addEventListener("blur",this.onPopupChildBlur_),L.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=C,this.textC_=new Us(e,{assembly:$r,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ua(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),zn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:L=>L.rawValue,backward:(L,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ie(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class kn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(W(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Wr={toComponents:n=>n.getComponents(),fromComponents:n=>new kn(...n)};function Na(n){return kn.isObject(n)?new kn(n.x,n.y,n.z):new kn}function $a(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function qa(n,e){return new Jt({assembly:Wr,components:[Nt("x"in n?n.x:void 0,e.x),Nt("y"in n?n.y:void 0,e.y),Nt("z"in n?n.z:void 0,e.z)]})}function Os(n,e){return{baseStep:Pn(e),constraint:e,textProps:N.fromObject({draggingScale:Sn(e,n),formatter:ht(ss(e,n))})}}const Wa={id:"input-point3d",type:"input",accept:(n,e)=>{if(!kn.isObject(n))return null;const t=le,s=xe(e,{x:t.optional.custom(Xt),y:t.optional.custom(Xt),z:t.optional.custom(Xt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Na,constraint:n=>qa(n.params,n.initialValue),equals:kn.equals,writer:n=>$a},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Jt))throw q.shouldNeverHappen();return new Us(n.document,{assembly:Wr,axes:[Os(e.rawValue.x,t.components[0]),Os(e.rawValue.y,t.components[1]),Os(e.rawValue.z,t.components[2])],parser:Vt,value:e,viewProps:n.viewProps})}};class Mn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(W(e))return!1;const t=e.x,s=e.y,c=e.z,C=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof C!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const jr={toComponents:n=>n.getComponents(),fromComponents:n=>new Mn(...n)};function ja(n){return Mn.isObject(n)?new Mn(n.x,n.y,n.z,n.w):new Mn}function Ka(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ha(n,e){return new Jt({assembly:jr,components:[Nt("x"in n?n.x:void 0,e.x),Nt("y"in n?n.y:void 0,e.y),Nt("z"in n?n.z:void 0,e.z),Nt("w"in n?n.w:void 0,e.w)]})}function Ya(n,e){return{baseStep:Pn(e),constraint:e,textProps:N.fromObject({draggingScale:Sn(e,n),formatter:ht(ss(e,n))})}}const Za={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Mn.isObject(n))return null;const t=le,s=xe(e,{x:t.optional.custom(Xt),y:t.optional.custom(Xt),z:t.optional.custom(Xt),w:t.optional.custom(Xt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ja,constraint:n=>Ha(n.params,n.initialValue),equals:Mn.equals,writer:n=>Ka},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Jt))throw q.shouldNeverHappen();return new Us(n.document,{assembly:jr,axes:e.rawValue.getComponents().map((s,c)=>Ya(s,t.components[c])),parser:Vt,value:e,viewProps:n.viewProps})}};function Xa(n){const e=[],t=Cs(n.options);return t&&e.push(t),new Ut(e)}const Qa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=xe(e,{options:le.optional.custom(ns)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cr,constraint:n=>Xa(n.params),writer:n=>Vn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&bt(s,Yt);return c?new Rt(e,{props:new N({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new es(e,{parser:C=>C,props:N.fromObject({formatter:xs}),value:t,viewProps:n.viewProps})}},Nn={monitor:{defaultInterval:200,defaultLineCount:3}},Kr=K("mll");class Ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Kr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Kr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ja(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Hr=K("sgl");class el{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Hr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Hr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Fs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new el(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const tl={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{lineCount:le.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sr},controller:n=>{var e;return n.value.rawValue.length===1?new Fs(n.document,{formatter:rr,value:n.value,viewProps:n.viewProps}):new Vs(n.document,{formatter:rr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},nn=K("grl");class nl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(nn("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const C=e.createElement("div");C.classList.add(nn("t"),K("tt")()),this.element.appendChild(C),this.tooltipElem_=C,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),C=[];this.value.rawValue.forEach((Ne,$e)=>{if(Ne===void 0)return;const fn=et($e,0,t,0,e.width),$n=et(Ne,s,c,e.height,0);C.push([fn,$n].join(","))}),this.lineElem_.setAttributeNS(null,"points",C.join(" "));const L=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){L.classList.remove(nn("t","a"));return}const Be=et(this.cursor_.rawValue,0,t,0,e.width),Te=et(ee,s,c,e.height,0);L.style.left=`${Be}px`,L.style.top=`${Te}px`,L.textContent=`${this.formatter_(ee)}`,L.classList.contains(nn("t","a"))||(L.classList.add(nn("t","a"),nn("t","in")),r(L),L.classList.remove(nn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class sl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=Z(-1),this.view=new nl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!p(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new cn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ns(n){return"format"in n&&!W(n.format)?n.format:ht(2)}function rl(n){var e;return n.value.rawValue.length===1?new Fs(n.document,{formatter:Ns(n.params),value:n.value,viewProps:n.viewProps}):new Vs(n.document,{formatter:Ns(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function il(n){var e,t,s;return new sl(n.document,{formatter:Ns(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,props:N.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Yr(n){return"view"in n&&n.view==="graph"}const ol={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=le,s=xe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Yr(n)?64:1,reader:n=>lr},controller:n=>Yr(n.params)?il(n):rl(n)},al={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=le,s=xe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Vs(n.document,{formatter:xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Nn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Fs(n.document,{formatter:xs,value:t,viewProps:n.viewProps})}};function ll(n,e){var t;const s=n.accept(e.target.read(),e.params);if(W(s))return null;const c=le,C={target:e.target,initialValue:s.initialValue,params:s.params},L=n.binding.reader(C),ee=n.binding.constraint?n.binding.constraint(C):void 0,Be=Z(L(s.initialValue),{constraint:ee,equals:n.binding.equals}),Te=new St({reader:L,target:e.target,value:Be,writer:n.binding.writer(C)}),Ne=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,fn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Te.value,viewProps:f.create({disabled:Ne,hidden:$e})});return new Fe(e.document,{binding:Te,blade:Le(),props:N.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:fn})}function cl(n,e){return e===0?new pt:new gt(n,e??Nn.monitor.defaultInterval)}function ul(n,e){var t,s,c;const C=le,L=n.accept(e.target.read(),e.params);if(W(L))return null;const ee={target:e.target,initialValue:L.initialValue,params:L.params},Be=n.binding.reader(ee),Te=(s=(t=C.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(L.params))!==null&&s!==void 0?s:1,Ne=C.optional.number(e.params.interval).value,$e=new vt({reader:Be,target:e.target,ticker:cl(e.document,Ne),value:At(Te)}),fn=C.optional.boolean(e.params.disabled).value,$n=C.optional.boolean(e.params.hidden).value,qn=n.controller({document:e.document,params:L.params,value:$e.value,viewProps:f.create({disabled:fn,hidden:$n})});return new Ke(e.document,{binding:$e,blade:Le(),props:N.fromObject({label:"label"in e.params?(c=C.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:qn})}class dl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(W(c))throw new q({context:{key:t.key},type:"nomatchingcontroller"});const C=this.pluginsMap_.inputs.reduce((L,ee)=>L??ll(ee,{document:e,target:t,params:s}),null);if(C)return C;throw new q({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((C,L)=>C??ul(L,{document:e,params:s,target:t}),null);if(c)return c;throw new q({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,C)=>c??Ze(C,{document:e,params:t}),null);if(!s)throw new q({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Fe)return new Xe(e);if(e instanceof Ke)return new it(e);if(e instanceof Ue)return new Ct(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw q.shouldNeverHappen();return t}}function pl(){const n=new dl;return[bl,Wa,Za,Qa,za,Da,Aa,ka,Co,tl,al,ol,Pe,vs,Qn,Ee].forEach(e=>{n.register(e)}),n}function hl(n){return en.isObject(n)?new en(n.x,n.y):new en}function fl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Nt(n,e){if(!n)return;const t=[],s=Fr(n,e);s&&t.push(s);const c=Nr(n);return c&&t.push(c),new Ut(t)}function _l(n,e){return new Jt({assembly:$r,components:[Nt("x"in n?n.x:void 0,e.x),Nt("y"in n?n.y:void 0,e.y)]})}function Zr(n,e){const[t,s]=n?Ia(n):[];if(!W(t)||!W(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Pn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ml(n,e){const t=e instanceof Jt?e.components[0]:void 0,s=e instanceof Jt?e.components[1]:void 0,c=Zr(t,n.x),C=Zr(s,n.y);return Math.max(c,C)}function Xr(n,e){return{baseStep:Pn(e),constraint:e,textProps:N.fromObject({draggingScale:Sn(e,n),formatter:ht(ss(e,n))})}}function vl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const bl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!en.isObject(n))return null;const t=le,s=xe(e,{expanded:t.optional.boolean,picker:t.optional.custom(hr),x:t.optional.custom(Xt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>hl,constraint:n=>_l(n.params,n.initialValue),equals:en.equals,writer:n=>fl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Jt))throw q.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,C="picker"in n.params?n.params.picker:void 0;return new Fa(e,{axes:[Xr(t.rawValue.x,s.components[0]),Xr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:vl(n.params),maxValue:ml(t.rawValue,s),parser:Vt,pickerLayout:C??"popup",value:t,viewProps:n.viewProps})}};class Qr extends g{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Jr extends g{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class ei extends g{constructor(e){super(e),this.emitter_=new O,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const gl=function(){return{id:"list",type:"blade",accept(n){const e=le,t=xe(n,{options:e.required.custom(ns),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Yt(fr(n.params.options)),t=Z(n.params.value,{constraint:e}),s=new Rt(n.document,{props:new N({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:N.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof Rt)?null:new Qr(n.controller)}}}();function wl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function xl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class yl extends yt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Fe).map(s=>s.binding);xl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Fe).map(t=>t.binding.target);return wl(e)}refresh(){this.controller_.rackController.rack.find(Fe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class Pl extends Dn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Sl={id:"slider",type:"blade",accept(n){const e=le,t=xe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Ht({max:n.params.max,min:n.params.min}),C=new Es(n.document,{baseStep:1,parser:Vt,sliderProps:new N({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:N.fromObject({draggingScale:Sn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:_o}),value:Z(s,{constraint:c}),viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:N.fromObject({label:n.params.label}),valueController:C})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof Es)?null:new Jr(n.controller)}},El=function(){return{id:"text",type:"blade",accept(n){const e=le,t=xe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new es(n.document,{parser:n.params.parse,props:N.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:Z(n.params.value),viewProps:n.viewProps});return new Gt(n.document,{blade:n.blade,props:N.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Gt)||!(n.controller.valueController instanceof es)?null:new ei(n.controller)}}}();function Cl(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function ti(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class kl extends yl{constructor(e){var t,s;const c=e??{},C=(t=c.document)!==null&&t!==void 0?t:l(),L=pl(),ee=new Pl(C,{expanded:c.expanded,blade:Le(),props:N.fromObject({title:c.title}),viewProps:f.create()});super(ee,L),this.pool_=L,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:Cl(C),this.containerElem_.appendChild(this.element),this.doc_=C,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw q.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw q.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&ti(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){ti(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Sl,gl,Ee,El]})}}const Ml=new S("3.1.10");u.BladeApi=g,u.ButtonApi=J,u.FolderApi=yt,u.InputBindingApi=Xe,u.ListApi=Qr,u.MonitorBindingApi=it,u.Pane=kl,u.SeparatorApi=wn,u.SliderApi=Jr,u.TabApi=X,u.TabPageApi=R,u.TextApi=ei,u.TpChangeEvent=T,u.VERSION=Ml,Object.defineProperty(u,"__esModule",{value:!0})})})(js,js.exports);var ic=js.exports;const oc=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,$s=`// 2DGS render — vertex+fragment.
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
//#if HW_DEPTH
    // Hardware depth from geometry: z_ndc of the SURFEL PLANE at this corner.
    // For a plane, 1/z_view is affine in screen space, and z_ndc = P22 + P32/z
    // is too, so linear interpolation of the corner values reproduces the exact
    // ray/plane depth at every pixel — the z-buffer can then test and reject
    // fragments BEFORE the fragment shader runs (early-Z; no frag_depth).
    // Flat varyings are unaffected by w, so w = 1.
    let zc    = corner_depth(sp, corner_pix);
    let z_ndc = clamp(camera.proj[2][2] + camera.proj[3][2] / zc, 0.0, 0.999999);
    out.position = vec4<f32>(ndc, z_ndc, 1.0);
//#else
    out.position = vec4<f32>(ndc, 0.0, 1.0);
//#endif

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

// Ray/splat intersection \`s\` (surfel uv) at pixel \`pixf\`. Three equivalent
// formulations selected by accel bits (see below); \`ok == false\` where the
// fragment path discards (degenerate / wrong side of the conic expansion).
// Shared by shade_geom() and, under HW_DEPTH, by the vertex stage, which needs
// the plane depth at the bound corners.
struct Isect { s : vec2<f32>, ok : bool };

fn intersect_uv(in: SplatIn, pixf: vec2<f32>) -> Isect {
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
        if abs(pp.z) < 1e-12 { return Isect(vec2<f32>(0.0), false); }
        s = pp.xy / pp.z;
    } else if (render_settings.accel_flags & 2048u) != 0u {
        // accel bit 11 (?raysplat=1): original 2DGS per-fragment ray-splat from
        // the RAW transmat rows the cull stored under the same bit. Every
        // cancellation in \`pix*Tw - Tu\` happens AT this pixel, so the error
        // cannot grow with the quad.
        let kk = pixf.x * in.Tw - in.Tu;
        let ll = pixf.y * in.Tw - in.Tv;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { return Isect(vec2<f32>(0.0), false); }
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
        if denom < 0.1 { return Isect(vec2<f32>(0.0), false); }
        let inv_d  = 1.0 / denom;
        s = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    }
    return Isect(s, true);
}

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
    // Ray/surfel intersection (three equivalent formulations, see intersect_uv).
    let isect = intersect_uv(in, pixf);
    if !isect.ok { discard; }
    let s = isect.s;
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
// Two-pass "opaque layer + translucent front" path (?twopass=1, 2026-10-06,
// hardware depth 2026-10-07).
// Video-game style: pass 1 rasterises every surfel with the hardware depth
// test and keeps, per pixel, the NEAREST fragment whose kernel alpha exceeds
// \`thresh\` — its SV+atlas colour is written opaque into a depth32float-backed
// pass (no sort needed). Pass 2 draws the same sorted list again with the
// depth test LESS against that layer (read-only), so fragments at or behind
// the layer are rejected by the z-buffer — on hardware with early-Z before the
// fragment shader runs — and only the fragments in front are alpha-blended
// (sub-threshold by construction: anything above the threshold in front would
// have won pass 1). Pixels with no layer keep the clear depth (1.0) and
// composite exactly as the sorted path does.
//
// The depth comes from the VERTEX stage (HW_DEPTH build variant, see vs_main):
// the bound corners carry the surfel plane's z_ndc, which interpolates to the
// exact per-pixel ray/plane depth. The low-pass centre-depth fallback of the
// fragment path is not reproduced (sub-pixel splats test at their plane depth
// instead of their centre depth) — a negligible approximation.
// ---------------------------------------------------------------------------
struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};
struct TwoPassParams {
  thresh : f32,   // kernel-alpha threshold for the opaque layer
  _p0    : f32,
  _p1    : u32,
  _p2    : u32,
};
@group(3) @binding(0) var<uniform> camera  : CameraUniforms;
@group(3) @binding(1) var<uniform> twopass : TwoPassParams;

// View-space depth of the surfel plane at screen position \`pix\` (vertex stage).
// EWA ellipsoids (top bit of gauss_id) are billboards at their centre depth.
// Where the plane is degenerate at the corner (behind the eye / conic expansion
// invalid) fall back to the centre depth so the quad stays drawable.
fn corner_depth(sp: SplatIn, pix: vec2<f32>) -> f32 {
    var z = sp.depth_plane.z;
    if (sp.gauss_id & 0x80000000u) == 0u {
        let is = intersect_uv(sp, pix);
        if is.ok {
            let zp = dot(sp.depth_plane, vec3<f32>(is.s, 1.0));
            if zp >= 0.2 { z = zp; }
        }
    }
    return max(z, 0.2);
}

// Pass 1 — opaque layer. No blending; depth test LESS + write.
@fragment
fn fs_opaque(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0);
}

// Pass 2 — translucent front, sorted back-to-front, premultiplied over the
// pass-1 image; depth test LESS against the layer (read-only). The threshold
// discard is redundant with the depth test (see above) and kept so the layer
// fragment itself can never blend twice.
@fragment
fn fs_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0) * g.a;
}

// ---------------------------------------------------------------------------
// Overdraw counters (the "Overdraw" view): each entry point adds 1.0 to an
// r16float target under additive blending, so the target holds per-pixel
// fragment counts (exact up to 2048). \`raster\` counts every fragment the
// rasteriser invokes (no discards); \`shaded\` counts fragments that survive
// every cull, i.e. the ones that pay for the colour stage. The two-pass
// variants pair with the same depth states as fs_opaque / fs_front, so with
// early-Z the counts show what the z-buffer rejected.
// ---------------------------------------------------------------------------
@fragment
fn fs_count_raster(in: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_shaded(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a < 0.0 { discard; }   // keeps the geometry stage live; never true
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_opaque(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    return vec4<f32>(1.0);
}
`,ac=`const WG_SIZE = 256u;
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
}`,lc=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,cc=`// shader implementing gpu radix sort.

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
`,uc=`// shader implementing gpu radix sort.

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
`,dc=`// ============================================================================
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
}`,Ri=32,Ks=1,Hs=2,_i=4,mi=512,vi=1024,bi=2048,gi=4096,pc=0,sn=new ArrayBuffer(Ri),_t={canvas_size:new Uint32Array(sn,0,2),accel_flags:new Uint32Array(sn,8,1),feature_mode:new Uint32Array(sn,12,1),gaussian_scaling:new Float32Array(sn,16,1),sh_bias:new Float32Array(sn,20,1),color_K:new Uint32Array(sn,24,1),walltime:new Float32Array(sn,28,1)};function hc(o){_t.canvas_size[0]=o.width>>>0,_t.canvas_size[1]=o.height>>>0,_t.accel_flags[0]=(o.accel_flags??Ks|Hs)>>>0,_t.feature_mode[0]=(o.feature_mode??pc)>>>0,_t.gaussian_scaling[0]=o.gaussian_scaling??1,_t.sh_bias[0]=o.sh_bias??.5,_t.color_K[0]=(o.color_K??0)>>>0,_t.walltime[0]=o.walltime??0}function Li(o,a){o.queue.writeBuffer(a,0,sn)}function _s(o,a,u){u&&o&&a&&Li(o,a)}function Bn(o,a,u,S,g=!0){_t.canvas_size[0]=o>>>0,_t.canvas_size[1]=a>>>0,_s(u??null,S??null,g)}function wi(o,a,u,S=!0){_t.gaussian_scaling[0]=o,_s(a??null,u??null,S)}function xi(o,a,u,S=!0){_t.sh_bias[0]=o,_s(a??null,u??null,S)}function Wn(o,a,u,S=!0){let g=_t.accel_flags[0];o.oac!==void 0&&(g=o.oac?g|Ks:g&~Ks),o.spr!==void 0&&(g=o.spr?g|Hs:g&~Hs),o.bfc!==void 0&&(g=o.bfc?g|_i:g&~_i),o.hypLegacy!==void 0&&(g=o.hypLegacy?g|mi:g&~mi),o.centred!==void 0&&(g=o.centred?g|gi:g&~gi),o.raysplat!==void 0&&(g=o.raysplat?g|bi:g&~bi),o.legacyPos!==void 0&&(g=o.legacyPos?g|vi:g&~vi),_t.accel_flags[0]=g>>>0,_s(a??null,u??null,S)}const fc=256;function cs(o,a){const u=[],S=[];let g=!0;for(const w of o.split(`
`)){const T=w.trim();let B;if((B=/^\/\/#if\s+(\w+)\s*$/.exec(T))!==null){const M=!!a[B[1]];S.push({parent:g,taken:M}),g=g&&M;continue}if(/^\/\/#else\s*$/.test(T)){const M=S[S.length-1];if(M===void 0)throw new Error("preprocessWGSL: #else without #if");g=M.parent&&!M.taken;continue}if(/^\/\/#endif\s*$/.test(T)){const M=S.pop();if(M===void 0)throw new Error("preprocessWGSL: #endif without #if");g=M.parent;continue}g&&u.push(w)}if(S.length!==0)throw new Error("preprocessWGSL: unterminated #if");return u.join(`
`)}const _c=Ri,mc=8,vc=96,bc=12,tr=8,$t=1<<tr,mn=256,ps=32/tr,gc=0,qs=ps&1;function yi(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function wc(o,a){const u=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[u]}),g=w=>o.createComputePipeline({layout:S,compute:{module:a,entryPoint:w,constants:{WG_SIZE:mn}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:u}}function xc(o,a,u){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=o.createPipelineLayout({bindGroupLayouts:[S]}),T=o.createPipelineLayout({bindGroupLayouts:[g]}),B=[];for(let M=0;M<ps;M++){const I={PASS_ID:M+gc,RS_RADIX_LOG2:tr,RS_RADIX_SIZE:$t};B.push({localHistogram:o.createComputePipeline({layout:w,compute:{module:a,entryPoint:"local_histogram_pass",constants:I}}),scatterElements:o.createComputePipeline({layout:T,compute:{module:u,entryPoint:"scatter_elements",constants:I}})})}return{passes:B,localHistogramBindGroupLayout:S,scatterBindGroupLayout:g}}function yc(o){const a=o.createShaderModule({label:"local histogram",code:uc}),u=o.createShaderModule({label:"scatter",code:cc}),S=o.createShaderModule({label:"blelloch prefix",code:dc}),g=wc(o,S),w=xc(o,a,u);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:g}}function Pi(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),u=a.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(w,0,new ArrayBuffer(32));const T={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:u,sampler:S,rectsBuffer:g,texParamsBuffer:w,meta:T}}const Tn=class Tn{constructor(a,u,S,g,w,T=null,B={}){G(this,"device");G(this,"pc");G(this,"presentationFormat");G(this,"camera_buffer");G(this,"render_settings_buffer");G(this,"draw_indirect_buffer");G(this,"splat_2d_buffer");G(this,"querySet");G(this,"resolveBuffer");G(this,"resultBuffer");G(this,"queriesPerFrame",mc);G(this,"queryCapacityFrames",200);G(this,"sort_prefixBindGroup");G(this,"sort_pipelines");G(this,"sort_localHistogramBindGroups");G(this,"sort_scatterBindGroups");G(this,"lastFrame",0);G(this,"frameCount",0);G(this,"preprocessPipeline");G(this,"cullPipeline");G(this,"renderPipeline");G(this,"indirectPipeline");G(this,"renderShaderModule");G(this,"betaKernel",1);G(this,"fetchById");G(this,"octBound");G(this,"acc16");G(this,"accTexture",null);G(this,"accView",null);G(this,"accW",0);G(this,"accH",0);G(this,"legacyRenderPipeline",null);G(this,"varyingsPipeline",null);G(this,"legacyRenderer",!1);G(this,"accResolvePipeline",null);G(this,"accResolveBgl",null);G(this,"accResolveBindGroup",null);G(this,"twoPass",!1);G(this,"twoPassThresh",.5);G(this,"twoPassParamsBuffer",null);G(this,"twoPassBgl",null);G(this,"twoPassBg",null);G(this,"twoPassSplatsBgl",null);G(this,"twoPassSplatsBg",null);G(this,"twoPassModules",new Map);G(this,"twoPassPipelines",new Map);G(this,"twoPassDepth",null);G(this,"twoPassDepthView",null);G(this,"twoPassW",0);G(this,"twoPassH",0);G(this,"overdrawMode",0);G(this,"overdrawMax",48);G(this,"ovTexture",null);G(this,"ovView",null);G(this,"ovW",0);G(this,"ovH",0);G(this,"ovParamsBuffer",null);G(this,"ovResolvePipeline",null);G(this,"ovResolveBgl",null);G(this,"ovResolveBg",null);G(this,"ovStatsPipeline",null);G(this,"ovStatsBgl",null);G(this,"ovStatsBg",null);G(this,"ovStatsBuffer",null);G(this,"ovReadback",null);G(this,"ovReadState","idle");G(this,"ovLastStats",null);G(this,"ovPipelines",new Map);G(this,"renderSettingsBgl");G(this,"preprocessBgl2");G(this,"renderSplatsBgl");G(this,"atlasBgl");G(this,"sort_info_buffer");G(this,"sort_ping_pong");G(this,"crsBg");G(this,"gsBg");G(this,"cullBg2");G(this,"preprocessBg1");G(this,"renderSplatsBindGroup");G(this,"renderSettingsBindGroup");G(this,"atlasBindGroup");G(this,"indirectBindGroup");G(this,"sh_solvers_buffer");G(this,"bfcParamsBuffer");G(this,"bfcBindGroupLayout");G(this,"bfcBindGroup");G(this,"staticSortKeys",null);G(this,"wideFrustum",!1);G(this,"staticKeysBuffer",null);G(this,"bgColor",[0,0,0,0]);G(this,"showPerfDialogNext",!1);G(this,"requestReorderNextFrame",!1);G(this,"reorderInFlight",!1);G(this,"downloadOnceNextRead",!1);G(this,"downloadOnceFileName","fps_metrics");G(this,"allFrameTimes",[]);G(this,"lastStageBreakdownMs",null);G(this,"timeQueryEnabled");G(this,"atlas");G(this,"atlasParamsBuffer");G(this,"_atlasEnabled",!0);G(this,"mipLodBias",1);G(this,"_mipMode",1);this.fetchById=B.fetchById??!0,this.staticSortKeys=B.staticSortKeys??null,this.wideFrustum=B.wideFrustum??!1,this.octBound=B.octBound??!1,this.acc16=B.acc16??!1,mt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const M=w.includes("timestamp-query");this.timeQueryEnabled=M,M&&mt("⏰ using timestamp-query"),this.pc=a,this.device=u,this.presentationFormat=S,this.camera_buffer=g,this.atlas=T??Pi(u),this.atlasParamsBuffer=u.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),u.addEventListener("uncapturederror",Re=>{console.error("A WebGPU error was not captured:",Re.error)}),this._setupTimestampQueries(),this._setupBuffers();const I=(Math.floor((this.pc.num_points+mn-1)/mn)+1)*mn,V=Math.ceil(I/mn);console.log(`keys count adjusted: ${I}`),console.log(`key size: ${this.pc.num_points}`);const W=u.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=yc(u);const z=[yi(I,u),yi(I,u)],Y=u.createBuffer({label:"workgroup histograms",size:V*$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=u.createBuffer({label:"workgroup prefixes",size:V*$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=u.createBuffer({label:"digit base",size:$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=Math.ceil(V/mn),J=Math.ceil(j/mn),O=u.createBuffer({label:"prefix l0 sums",size:j*$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=u.createBuffer({label:"prefix l0 offsets",size:j*$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=u.createBuffer({label:"prefix l1 sums",size:J*$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),fe=u.createBuffer({label:"prefix l1 offsets",size:J*$t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=u.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:re}},{binding:3,resource:{buffer:O}},{binding:4,resource:{buffer:ne}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:fe}},{binding:7,resource:{buffer:q}}]}),this.sort_localHistogramBindGroups=[u.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:z[0].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]}),u.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:z[1].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]})],this.sort_scatterBindGroups=[u.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:z[0].sort_depths_buffer}},{binding:3,resource:{buffer:z[1].sort_depths_buffer}},{binding:4,resource:{buffer:z[0].sort_indices_buffer}},{binding:5,resource:{buffer:z[1].sort_indices_buffer}},{binding:6,resource:{buffer:re}}]}),u.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:z[1].sort_depths_buffer}},{binding:3,resource:{buffer:z[0].sort_depths_buffer}},{binding:4,resource:{buffer:z[1].sort_indices_buffer}},{binding:5,resource:{buffer:z[0].sort_indices_buffer}},{binding:6,resource:{buffer:re}}]})],this.sort_info_buffer=W,this.sort_ping_pong=z;const he=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),_e=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:he,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:_e,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=de,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const De=this.device.createShaderModule({code:ac});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:De,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const te=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],oe=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:An(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),te.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),oe.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:te}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:oe});const ye=this.device.createShaderModule({code:cs(lc,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,_e,ue,this.bfcBindGroupLayout]}),compute:{module:ye,entryPoint:"surfel_cull"}});const Ge=this.device.createShaderModule({code:oc});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,de]}),compute:{module:Ge,entryPoint:"preprocess"}});const ke=this.device.createShaderModule({label:"render_2dgs",code:cs($s,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ke.getCompilationInfo().then(Re=>{Re.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Re.messages.forEach(Oe=>{(Oe.type==="error"?console.error:Oe.type==="warning"?console.warn:console.log)(`${Oe.type} (line ${Oe.lineNum}:${Oe.linePos}): ${Oe.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Q=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Z=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,N=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Z,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),be=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Ae=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Q,N,be]}),vertex:{module:ke,entryPoint:"vs_main"},fragment:{module:ke,entryPoint:"fs_main",constants:{BETA_KERNEL:Ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const qe=(Re,Oe,le)=>{const xe=this.device.createShaderModule({label:`render_2dgs (${Re})`,code:cs($s,{FETCH_BY_ID:Oe,OCT:le})});return this.device.createRenderPipeline({label:`render_2dgs_${Re}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Q,N,be]}),vertex:{module:xe,entryPoint:"vs_main"},fragment:{module:xe,entryPoint:"fs_main",constants:{BETA_KERNEL:Ae},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=qe("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?qe("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Re=>{Re?console.error("[render_2dgs] pipeline create validation error:",Re.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Q,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:N,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[qs].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:be,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ke,this.betaKernel=Ae,this.renderSettingsBgl=Q,this.renderSplatsBgl=N,this.atlasBgl=be}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,u){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,u[0],u[1],u[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var g;const a=new ArrayBuffer(32),u=new Uint32Array(a),S=new Float32Array(a);u[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,u[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,u[3]=this.atlas.meta.probe_mode|0||0,u[4]=this._mipMode!==0?Math.max(1,((g=this.atlas.meta.mip_bytes)==null?void 0:g.length)??1):1,S[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}setTwoPass(a){a!==this.twoPass&&(this.twoPass=a,mt(`[render_2dgs] two-pass layer path: ${a?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(a){this.twoPassThresh=Math.min(.999,Math.max(.001,a)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[qs].sort_indices_buffer}}]}))}ensureTwoPassResources(a,u){var S;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===a&&this.twoPassH===u)&&((S=this.twoPassDepth)==null||S.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,a),height:Math.max(1,u),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=a,this.twoPassH=u)}renderModuleFor(a,u,S){const g=`${a?"byid":"vary"}_${u?"oct":"quad"}_${S?"hwz":"z0"}`,w=this.twoPassModules.get(g);if(w!==void 0)return w;const T=this.device.createShaderModule({label:`render_2dgs (${g})`,code:cs($s,{FETCH_BY_ID:a,OCT:u,HW_DEPTH:S})});return T.getCompilationInfo().then(B=>{for(const M of B.messages)M.type==="error"&&console.error(`[render_2dgs ${g}] (line ${M.lineNum}:${M.linePos}): ${M.message}`)}),this.twoPassModules.set(g,T),T}twoPassPipelinesFor(a,u){const S=`${a?"byid":"vary"}_${u?"oct":"quad"}`,g=this.twoPassPipelines.get(S);if(g!==void 0)return g;const w=this.renderModuleFor(a,u,!0),T=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const B=this.device.createRenderPipeline({label:`render_2dgs_opaque_${S}`,layout:T,vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),M=this.device.createRenderPipeline({label:`render_2dgs_front_${S}`,layout:T,vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:Tn.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(V=>{V?console.error(`[render_2dgs twopass ${S}] pipeline validation error:`,V.message):console.log(`[render_2dgs twopass ${S}] pipelines created OK`)});const I={opaque:B,front:M};return this.twoPassPipelines.set(S,I),I}setOverdrawMode(a){a!==this.overdrawMode&&(this.overdrawMode=a,this.ovLastStats=null,mt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][a]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(a){this.overdrawMax=Math.max(1,a),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(a,u){var S;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const g=`
struct OvParams { max_count : f32, _a : f32, _b : u32, _c : u32 };
@group(0) @binding(0) var cnt : texture_2d<f32>;
@group(0) @binding(1) var<uniform> ov : OvParams;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
// 0 → near-black, ¼ → blue, ½ → green, ¾ → yellow, 1 → red, beyond → white.
fn ramp(t : f32) -> vec3<f32> {
    let c0 = vec3<f32>(0.03, 0.03, 0.12); let c1 = vec3<f32>(0.10, 0.35, 1.00);
    let c2 = vec3<f32>(0.10, 0.90, 0.30); let c3 = vec3<f32>(1.00, 0.90, 0.10);
    let c4 = vec3<f32>(1.00, 0.15, 0.10);
    if t >= 1.0 { return mix(c4, vec3<f32>(1.0), clamp((t - 1.0) * 4.0, 0.0, 1.0)); }
    let u = t * 4.0;
    if u < 1.0 { return mix(c0, c1, u); }
    if u < 2.0 { return mix(c1, c2, u - 1.0); }
    if u < 3.0 { return mix(c2, c3, u - 2.0); }
    return mix(c3, c4, u - 3.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(cnt));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let c = textureLoad(cnt, q, 0).r;
    if c <= 0.0 { return vec4<f32>(0.0, 0.0, 0.0, 1.0); }
    return vec4<f32>(ramp(c / ov.max_count), 1.0);
}`,w=this.device.createShaderModule({label:"overdraw_resolve",code:g});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const T=`
@group(0) @binding(0) var cnt : texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> stats : array<atomic<u32>, 4>;   // sum, max, covered px, pad
var<workgroup> w_sum : atomic<u32>;
var<workgroup> w_max : atomic<u32>;
var<workgroup> w_cov : atomic<u32>;
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid : vec3<u32>, @builtin(local_invocation_index) li : u32) {
    if li == 0u { atomicStore(&w_sum, 0u); atomicStore(&w_max, 0u); atomicStore(&w_cov, 0u); }
    workgroupBarrier();
    let dims = textureDimensions(cnt);
    if gid.x < dims.x && gid.y < dims.y {
        let c = u32(textureLoad(cnt, vec2<i32>(gid.xy), 0).r + 0.5);
        if c > 0u { atomicAdd(&w_sum, c); atomicMax(&w_max, c); atomicAdd(&w_cov, 1u); }
    }
    workgroupBarrier();
    if li == 0u {
        atomicAdd(&stats[0], atomicLoad(&w_sum));
        atomicMax(&stats[1], atomicLoad(&w_max));
        atomicAdd(&stats[2], atomicLoad(&w_cov));
    }
}`,B=this.device.createShaderModule({label:"overdraw_stats",code:T});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:B,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===a&&this.ovH===u||((S=this.ovTexture)==null||S.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,a),height:Math.max(1,u),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=a,this.ovH=u)}ovPipelineFor(a,u,S){const g=`${a}_${u?"byid":"vary"}_${S?"oct":"quad"}`,w=this.ovPipelines.get(g);if(w!==void 0)return w;const T=a.startsWith("tp_"),B=this.renderModuleFor(u,S,T),M=this.device.createPipelineLayout({bindGroupLayouts:T?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),I={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[a];let V;a==="tp_raster"?V={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:a==="tp_opaque"?V={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:a==="tp_front"&&(V={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const W=this.device.createRenderPipeline({label:`render_2dgs_${g}`,layout:M,vertex:{module:B,entryPoint:"vs_main"},fragment:{module:B,entryPoint:I,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:Tn.BLEND_ADD}]},depthStencil:V,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(z=>{z&&console.error(`[render_2dgs overdraw ${g}] pipeline validation error:`,z.message)}),this.ovPipelines.set(g,W),W}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const a=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const u=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:a[0]/u,meanCovered:a[2]>0?a[0]/a[2]:0,max:a[1],coveredFrac:a[2]/u}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(a,u){var S;if(this.accResolvePipeline===null){const g=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:g});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===u||((S=this.accTexture)==null||S.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,u),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=u)}setAtlas(a){this.atlas=a??Pi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,mt(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,Wn({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const u=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([u])),mt(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),us(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const u=Math.max(0,Math.min(a,this.pc.num_points)),S=u*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[qs].sort_indices_buffer,0,g,0,S),this.device.queue.submit([w.finish()]),await g.mapAsync(GPUMapMode.READ);const T=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",u,"):",Array.from(T)),g.unmap()}frame(a,u,S=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,T=S&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const B={label:"cull"};T&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const M=a.beginComputePass(B);M.setPipeline(this.cullPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.gsBg),M.setBindGroup(2,this.cullBg2),M.setBindGroup(3,this.bfcBindGroup);const I=Math.ceil(this.pc.num_points/fc);M.dispatchWorkgroups(I,1,1),M.end()}{const B=a.beginComputePass({label:"calculate indirect dispatch"});B.setPipeline(this.indirectPipeline),B.setBindGroup(0,this.indirectBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}{const B={label:"preprocess"};T&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const M=a.beginComputePass(B);M.setPipeline(this.preprocessPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.preprocessBg1),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),M.end()}for(let B=0;B<ps;B++){const M=B&1,I=this.sort_pipelines.passes[B],V=this.sort_localHistogramBindGroups[M],W=this.sort_scatterBindGroups[M];{const z={label:`upsweep_round${B}`};T&&B==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const Y=a.beginComputePass(z);Y.setPipeline(I.localHistogram),Y.setBindGroup(0,V),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}{const z=a.beginComputePass({label:`prefix_round${B} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=a.beginComputePass({label:`prefix_round${B} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=a.beginComputePass({label:`prefix_round${B} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,$t,1),z.end()}{const z=a.beginComputePass({label:`prefix_round${B} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=a.beginComputePass({label:`prefix_round${B} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=a.beginComputePass({label:`prefix_round${B} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${B}`};T&&B==ps-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const Y=a.beginComputePass(z);Y.setPipeline(I.scatterElements),Y.setBindGroup(0,W),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}}{const B=_t.canvas_size[0],M=_t.canvas_size[1],I=this.overdrawMode!==0;let V=u;I?(this.ensureOverdrawResources(B,M),V=this.ovView):this.acc16&&(this.ensureAccResources(B,M),V=this.accView);const W=I?{r:0,g:0,b:0,a:0}:this.bgColor,z=I||this.acc16,Y=this.fetchById&&!this.legacyRenderer,re=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(B,M);let q,j;if(I)this.overdrawMode===1?(q=this.ovPipelineFor("tp_opaque",Y,re),j=this.ovPipelineFor("tp_front",Y,re)):q=j=this.ovPipelineFor("tp_raster",Y,re);else{const fe=this.twoPassPipelinesFor(Y,re);q=fe.opaque,j=fe.front}const J={label:"render_opaque_layer",colorAttachments:[{view:V,loadOp:"clear",storeOp:"store",clearValue:W}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};T&&(J.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6});const O=a.beginRenderPass(J);O.setPipeline(q),O.setBindGroup(0,this.renderSettingsBindGroup),O.setBindGroup(1,this.twoPassSplatsBg),O.setBindGroup(2,this.atlasBindGroup),O.setBindGroup(3,this.twoPassBg),O.drawIndirect(this.draw_indirect_buffer,0),O.end();const ne={label:"render_front",colorAttachments:[{view:V,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};T&&!z&&(ne.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const K=a.beginRenderPass(ne);K.setPipeline(j),K.setBindGroup(0,this.renderSettingsBindGroup),K.setBindGroup(1,this.twoPassSplatsBg),K.setBindGroup(2,this.atlasBindGroup),K.setBindGroup(3,this.twoPassBg),K.drawIndirect(this.draw_indirect_buffer,0),K.end()}else{const q={label:"render",colorAttachments:[{view:V,loadOp:"clear",storeOp:"store",clearValue:W}]};T&&(q.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...z?{}:{endOfPassWriteIndex:w+7}});const j=a.beginRenderPass(q);I?(j.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",Y,re)),j.setBindGroup(1,this.twoPassSplatsBg)):(j.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),j.setBindGroup(1,this.renderSplatsBindGroup)),j.setBindGroup(0,this.renderSettingsBindGroup),j.setBindGroup(2,this.atlasBindGroup),j.drawIndirect(this.draw_indirect_buffer,0),j.end()}if(I){a.clearBuffer(this.ovStatsBuffer,0,16);const q=a.beginComputePass({label:"overdraw_stats"});q.setPipeline(this.ovStatsPipeline),q.setBindGroup(0,this.ovStatsBg),q.dispatchWorkgroups(Math.ceil(B/16),Math.ceil(M/16),1),q.end();const j={label:"overdraw_resolve",colorAttachments:[{view:u,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};T&&(j.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const J=a.beginRenderPass(j);J.setPipeline(this.ovResolvePipeline),J.setBindGroup(0,this.ovResolveBg),J.draw(3),J.end(),this.ovReadState==="idle"&&(a.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const q={label:"acc16_resolve",colorAttachments:[{view:u,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(q.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const j=a.beginRenderPass(q);j.setPipeline(this.accResolvePipeline),j.setBindGroup(0,this.accResolveBindGroup),j.draw(3),j.end()}}this.frameCount++}async readPerfMetrics(a){const u=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),T=Math.min(this.frameCount,this.queryCapacityFrames),B=(this.lastFrame+this.frameCount-T)%this.queryCapacityFrames,M=Array.from({length:g.length},()=>[]);let I=0;for(let J=0;J<T;J++){const O=(B+J)%this.queryCapacityFrames,ne=O*this.queriesPerFrame;let K=!0;for(let fe=0;fe<g.length;fe++){const[he,_e,ue]=g[fe];if(w[ne+ue]===0n||w[ne+_e]===0n||w[ne+_e]<w[ne+ue]){K=!1;break}}if(!K){!u&&O%60===0&&console.debug("[timestamp] frame slot",O,"contains unwritten (0) timestamps, skipped in stats");continue}I++;for(let fe=0;fe<g.length;fe++){const[he,_e,ue]=g[fe],de=Number(w[ne+ue]),De=Number(w[ne+_e]);M[fe].push((De-de)/1e6)}}if(I===0){this.resultBuffer.unmap(),u||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...M[0]);const V=[];let W=0,z=0,Y=0;for(let J=0;J<g.length;J++){const O=g[J][0],ne=M[J];let K=0;if(O==="Total"){const fe=this.allFrameTimes;K=fe.reduce((ue,de)=>ue+de,0)/fe.length;const he=[...fe].sort((ue,de)=>ue-de);W=he[Math.floor(he.length*.99)]||0;const _e=fe.reduce((ue,de)=>ue+Math.pow(de-K,2),0)/fe.length;z=Math.sqrt(_e),Y=K}else K=ne.reduce((fe,he)=>fe+he,0)/ne.length;V.push([O,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const re=Object.fromEntries(V);this.lastStageBreakdownMs={cull:re.Culling??0,preprocess:re.Preprocess??0,sort:re.Sort??0,render:re.Render??0,total:re.Total??0};const j=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([J,O])=>`${J}: ${O.toFixed(3)}ms`).join(`
`)+`
Total P99: ${W.toFixed(3)}ms
Total STD: ${z.toFixed(3)}ms
Total AVG: ${Y.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(u||(console.log(j),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const J=`Stage,ms
`,O=V.map(([fe,he])=>`${fe},${he.toFixed(3)}`).join(`
`),ne="data:text/csv;charset=utf-8,"+encodeURIComponent(J+O),K=document.createElement("a");K.href=ne,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(j)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:_c,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),u=a?a.width:1,S=a?a.height:1;hc({width:u,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Li(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:An(this.pc.num_points*vc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:An(this.pc.num_points*bc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const u=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=u.length>0?u:this.downloadOnceFileName}else{const u=new Date,S=`${u.getFullYear()}${String(u.getMonth()+1).padStart(2,"0")}${String(u.getDate()).padStart(2,"0")}_${String(u.getHours()).padStart(2,"0")}${String(u.getMinutes()).padStart(2,"0")}${String(u.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};G(Tn,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),G(Tn,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Ys=Tn;function Pc(o,a){return 2*Math.atan(a/(2*o))}function Sc(o,a,u,S){const g=Math.tan(S/2),w=Math.tan(u/2),T=g*o,B=-T,M=w*o,I=-M,V=ut.create();return V[0]=2*o/(M-I),V[5]=-2*o/(T-B),V[2]=(M+I)/(M-I),V[6]=(T+B)/(T-B),V[14]=1,V[10]=a/(a-o),V[11]=-(a*o)/(a-o),ut.transpose(V,V),V}async function Ec(o){mt(`loading scene camera file... : ${o}`);const u=await(await fetch(o)).json();return mt(`loaded cameras count: ${u.length}`),u.map(S=>{const g=U.clone(S.position),w=Tt.create(...S.rotation.flat()),T=w[0],B=w[4],M=w[8],I=w[1],V=w[5],W=w[9],z=w[2],Y=w[6],re=w[10];T*(V*re-W*Y)-B*(I*re-W*z)+M*(I*Y-V*z)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const j=ut.fromMat3(w);return{position:g,rotation:j,img_name:S.img_name,id:S.id}})}const Cc=4*2,kc=4*16,Ii=4*kc+2*Cc;function Mc(o){return o.createBuffer({label:"camera uniform",size:Ii,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const _n=new Float32Array(Ii/Float32Array.BYTES_PER_ELEMENT),hs=class hs{constructor(a,u){G(this,"_renderSize",null);G(this,"uniform_buffer");G(this,"position",U.create());G(this,"rotation",ut.create());G(this,"zfar",100);G(this,"fovY",45/180*Math.PI);G(this,"fovX");G(this,"focalRatioX",1);G(this,"focal",li.create());G(this,"viewport",li.create());G(this,"view_matrix",ut.identity());G(this,"view_inv_matrix",ut.identity());G(this,"proj_matrix",ut.identity());G(this,"proj_inv_matrix",ut.identity());G(this,"_negPos",U.create());G(this,"look",U.create(0,0,1));G(this,"up",U.create(0,1,0));G(this,"right",U.create(1,0,0));this.canvas=a,this.device=u,this.uniform_buffer=Mc(u),this.on_update_canvas()}setRenderSize(a,u){this._renderSize=[a,u],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,u=this._renderSize?this._renderSize[1]:this.canvas.height,S=.5*u/Math.tan(this.fovY*.5);this.focal[0]=S*this.focalRatioX,this.focal[1]=S,this.fovX=Pc(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=u,this.proj_matrix=Sc(.01,this.zfar,this.fovX,this.fovY),ut.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ut.copy(this.rotation,this.view_matrix),ut.translate(this.view_matrix,this._negPos,this.view_matrix),ut.inverse(this.view_matrix,this.view_inv_matrix),U.transformMat4Upper3x3(hs.Z_AXIS,this.view_inv_matrix,this.look),U.normalize(this.look,this.look),U.cross(this.up,this.look,this.right),U.normalize(this.right,this.right);let a=0;_n.set(this.view_matrix,a),a+=16,_n.set(this.view_inv_matrix,a),a+=16,_n.set(this.proj_matrix,a),a+=16,_n.set(this.proj_inv_matrix,a),a+=16,_n.set(this.viewport,a),a+=2,_n.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,_n)}set_preset(a){U.copy(a.position,this.position),ut.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};G(hs,"Z_AXIS",U.create(0,0,1));let Zs=hs;const Bc=U.create(1,0,0),Tc=U.create(0,1,0),Ac=U.create(0,0,1);function Dc(o,a){const u=o[0],S=o[4],g=o[8],w=o[1],T=o[5],B=o[9],M=o[2],I=o[6],V=o[10],W=u+T+V;let z,Y,re,q;if(W>0){const j=.5/Math.sqrt(W+1);z=.25/j,Y=(I-B)*j,re=(g-M)*j,q=(w-S)*j}else if(u>T&&u>V){const j=2*Math.sqrt(1+u-T-V);z=(I-B)/j,Y=.25*j,re=(S+w)/j,q=(g+M)/j}else if(T>V){const j=2*Math.sqrt(1+T-u-V);z=(g-M)/j,Y=(S+w)/j,re=.25*j,q=(B+I)/j}else{const j=2*Math.sqrt(1+V-u-T);z=(w-S)/j,Y=(g+M)/j,re=(B+I)/j,q=.25*j}return a[0]=Y,a[1]=re,a[2]=q,a[3]=z,a}class Rc{constructor(a){G(this,"element");G(this,"enabled",!0);G(this,"center",U.create(0,0,0));G(this,"up",U.create(0,1,0));G(this,"rotation",[0,0]);G(this,"shift",[0,0]);G(this,"scroll",0);G(this,"speed",.1);G(this,"sensitivity",.08);G(this,"leftPressed",!1);G(this,"rightPressed",!1);G(this,"leftDragPans",!1);G(this,"lastX",0);G(this,"lastY",0);G(this,"touches",new Map);G(this,"lastTouchCenter",null);G(this,"lastPinchDistance",null);G(this,"lastTwoFingerAngle",null);G(this,"lastTouchCount",0);G(this,"roll",0);G(this,"_dir",U.create());G(this,"_right",U.create());G(this,"_upCam",U.create());G(this,"_scratch",U.create());G(this,"_qY",ct.create());G(this,"_qX",ct.create());G(this,"_qRot",ct.create());G(this,"_qZ",ct.create());G(this,"_qLocal",ct.create());G(this,"_qWorldToCam",ct.create());G(this,"_scratchMat3",Tt.create());G(this,"bboxMin",null);G(this,"bboxMax",null);G(this,"anchor",U.create(0,0,0));G(this,"downCallback",a=>{var u,S,g,w;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(S=(u=a.target)==null?void 0:u.setPointerCapture)==null||S.call(u,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(w=(g=a.target)==null?void 0:g.setPointerCapture)==null||w.call(g,a.pointerId),a.preventDefault())}});G(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const u=a.pageX-this.lastX,S=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=u,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=u,this.shift[0]+=S)});G(this,"upCallback",a=>{var u,S,g,w;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(S=(u=a.target)==null?void 0:u.releasePointerCapture)==null||S.call(u,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(g=a.target)==null?void 0:g.releasePointerCapture)==null||w.call(g,a.pointerId),a.preventDefault()});G(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let u=a.deltaY;a.deltaMode===1?u*=16:a.deltaMode===2&&(u*=100),this.scroll+=u*.01});this.camera=a,this.registerElement(a.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const a=this.bboxMax[0]-this.bboxMin[0],u=this.bboxMax[1]-this.bboxMin[1],S=this.bboxMax[2]-this.bboxMin[2],g=.5*Math.sqrt(a*a+u*u+S*S);return g>1e-6?g:null}addRoll(a){this.roll+=a}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",u=>u.preventDefault())}setCenter(a){U.copy(a,this.center),U.copy(a,this.anchor)}setOrbitPivot(a){U.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const u=this.camera.rotation;U.set(u[2],u[6],u[10],this._dir),U.normalize(this._dir,this._dir),U.scale(this._dir,a,this._dir),U.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(U.subtract(this.center,a.position,this._scratch),U.length(this._scratch)<1e-6)return;U.normalize(this._scratch,this._scratch),U.cross(this.up,this._scratch,this._right),U.length(this._right)<1e-6&&U.set(1,0,0,this._right),U.normalize(this._right,this._right),U.cross(this._scratch,this._right,this._upCam),U.normalize(this._upCam,this._upCam);const u=a.rotation;u[0]=this._right[0],u[1]=this._upCam[0],u[2]=this._scratch[0],u[3]=0,u[4]=this._right[1],u[5]=this._upCam[1],u[6]=this._scratch[1],u[7]=0,u[8]=this._right[2],u[9]=this._upCam[2],u[10]=this._scratch[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,a.update_buffer()}setBbox(a,u){this.bboxMin=U.create(a[0],a[1],a[2]),this.bboxMax=U.create(u[0],u[1],u[2]);const S=(a[0]+u[0])*.5,g=(a[1]+u[1])*.5,w=(a[2]+u[2])*.5;U.set(S,g,w,this.center),U.set(S,g,w,this.anchor)}resetToCamera(){const a=this.camera.rotation;U.set(a[2],a[6],a[10],this._dir),U.normalize(this._dir,this._dir);let u=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,g=1/0,w=!1;for(let T=0;T<3;T++){const B=this._dir[T],M=this.bboxMin[T]-this.camera.position[T],I=this.bboxMax[T]-this.camera.position[T];if(Math.abs(B)>1e-8){const V=M/B,W=I/B;S=Math.max(S,Math.min(V,W)),g=Math.min(g,Math.max(V,W))}else if(M>0||I<0){w=!0;break}}!w&&S<=g&&g>0&&(u=(Math.max(S,0)+g)*.5)}if(u===null||!isFinite(u)||u<.001){U.subtract(this.anchor,this.camera.position,this._scratch);const S=U.dot(this._scratch,this._dir);u=S>.001?S:U.length(this._scratch)}u=Math.max(.1,u),U.scale(this._dir,u,this._dir),U.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const u=this.touches.values().next().value;if(this.lastTouchCenter){const S=u.x-this.lastTouchCenter[0],g=u.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[u.x,u.y]}else if(a===2){const u=Array.from(this.touches.values()),S=(u[0].x+u[1].x)*.5,g=(u[0].y+u[1].y)*.5,w=u[1].x-u[0].x,T=u[1].y-u[0].y,B=Math.hypot(w,T),M=Math.atan2(T,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const I=S-this.lastTouchCenter[0],V=g-this.lastTouchCenter[1],W=Math.hypot(I,V),z=Math.abs(B-this.lastPinchDistance);let Y=M-this.lastTwoFingerAngle;Y>Math.PI&&(Y-=2*Math.PI),Y<-Math.PI&&(Y+=2*Math.PI),W>.5&&(this.shift[1]-=I,this.shift[0]+=V),z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(B/this.lastPinchDistance)*10),Math.abs(Y)>.0087&&(this.roll+=Y)}this.lastTouchCenter=[S,g],this.lastPinchDistance=B,this.lastTwoFingerAngle=M}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const u=this.camera;{const j=u.rotation;this.up[0]=j[1],this.up[1]=j[5],this.up[2]=j[9],U.length(this.up)>1e-6?U.normalize(this.up,this.up):U.set(0,1,0,this.up)}let S=0,g=!1;Math.abs(this.roll)>1e-4&&(S=this.roll,this.roll=0,g=!0),U.subtract(u.position,this.center,this._dir);let w=U.length(this._dir);w<1e-6&&(w=1e-6);const T=Math.exp(Math.log(w)+this.scroll*a*10*this.speed);U.scale(this._dir,T/w,this._dir),w=T;const B=u.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],U.normalize(this._right,this._right),U.length(this._right)<1e-6&&U.set(1,0,0,this._right);const M=U.create(B[1],B[5],B[9]);U.normalize(M,M),U.length(M)<1e-6&&U.set(0,1,0,M);const I=a*this.speed*.1*w,V=this.shift[1]*I,W=-this.shift[0]*I;U.scale(this._right,V,this._scratch),U.add(this.center,this._scratch,this.center),U.add(u.position,this._scratch,u.position),U.scale(M,W,this._scratch),U.add(this.center,this._scratch,this.center),U.add(u.position,this._scratch,u.position);const z=this.rotation[0]*a*this.sensitivity,Y=this.rotation[1]*a*this.sensitivity;if(Math.abs(z)>1e-5||Math.abs(Y)>1e-5||g){const j=u.rotation;Dc(j,this._qWorldToCam),ct.fromAxisAngle(Bc,-Y,this._qX),ct.fromAxisAngle(Tc,-z,this._qY),ct.multiply(this._qX,this._qY,this._qLocal),g&&(ct.fromAxisAngle(Ac,1*S,this._qZ),ct.multiply(this._qZ,this._qLocal,this._qLocal)),ct.normalize(this._qLocal,this._qLocal),ct.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ct.normalize(this._qWorldToCam,this._qWorldToCam),Tt.fromQuat(this._qWorldToCam,this._scratchMat3),ut.fromMat3(this._scratchMat3,u.rotation);const J=u.rotation,O=J[2],ne=J[6],K=J[10];u.position[0]=this.center[0]-O*w,u.position[1]=this.center[1]-ne*w,u.position[2]=this.center[2]-K*w,this.up[0]=J[1],this.up[1]=J[5],this.up[2]=J[9],U.normalize(this.up,this.up)}else U.add(this.center,this._dir,u.position);u.update_buffer();const q=Math.pow(.8,a*60);this.rotation[0]*=q,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=q,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=q,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=q,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=q,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Gi(o){const a=U.create();for(const u of o)U.add(a,u,a);return U.scale(a,1/Math.max(o.length,1),a)}function zi(o,a){const u=Tt.create();Tt.inverse(o,u);const S=U.create();return S[0]=u[0]*a[0]+u[4]*a[1]+u[8]*a[2],S[1]=u[1]*a[0]+u[5]*a[1]+u[9]*a[2],S[2]=u[2]*a[0]+u[6]*a[1]+u[10]*a[2],S}function Lc(o){const a=o.slice(),u=[1,0,0,0,1,0,0,0,1],S=(M,I)=>a[M*3+I],g=(M,I,V)=>{a[M*3+I]=V},w=(M,I)=>u[M*3+I],T=(M,I,V)=>{u[M*3+I]=V};for(let M=0;M<30;M++){let I=0,V=1,W=Math.abs(S(0,1));if(Math.abs(S(0,2))>W&&(I=0,V=2,W=Math.abs(S(0,2))),Math.abs(S(1,2))>W&&(I=1,V=2,W=Math.abs(S(1,2))),W<1e-12)break;const z=S(I,I),Y=S(V,V),re=S(I,V);let q;Math.abs(z-Y)<1e-30?q=Math.PI/4*Math.sign(re):q=.5*Math.atan2(2*re,z-Y);const j=Math.cos(q),J=Math.sin(q);for(let O=0;O<3;O++){const ne=S(O,I),K=S(O,V);g(O,I,j*ne+J*K),g(O,V,-J*ne+j*K)}for(let O=0;O<3;O++){const ne=S(I,O),K=S(V,O);g(I,O,j*ne+J*K),g(V,O,-J*ne+j*K)}for(let O=0;O<3;O++){const ne=w(O,I),K=w(O,V);T(O,I,j*ne+J*K),T(O,V,-J*ne+j*K)}}const B=[];for(let M=0;M<3;M++)B.push({val:S(M,M),vec:U.create(w(0,M),w(1,M),w(2,M))});return B.sort((M,I)=>I.val-M.val),{vals:[B[0].val,B[1].val,B[2].val],vecs:[B[0].vec,B[1].vec,B[2].vec]}}function Ic(o,a){const u=Gi(o);let S=0,g=0,w=0,T=0,B=0,M=0;for(const re of o){const q=re[0]-u[0],j=re[1]-u[1],J=re[2]-u[2];S+=q*q,g+=q*j,w+=q*J,T+=j*j,B+=j*J,M+=J*J}const I=[S,g,w,g,T,B,w,B,M],{vecs:V}=Lc(I);let W=V[0],z=V[1],Y=V[2];return U.dot(Y,a)<0&&(U.scale(Y,-1,Y),U.scale(z,-1,z)),{centroid:u,normal:Y,u:W,v:z}}function Gc(o){let a=0,u=0,S=0,g=0,w=0,T=0,B=0,M=0,I=0;for(const[j,J]of o){const O=-2*j,ne=-2*J,K=1,fe=-(j*j+J*J);a+=O*O,u+=O*ne,S+=O*K,g+=ne*ne,w+=ne*K,T+=K*K,B+=O*fe,M+=ne*fe,I+=K*fe}const V=Tt.create(a,u,S,u,g,w,S,w,T),W=zi(V,U.create(B,M,I)),z=W[0],Y=W[1],re=W[2],q=z*z+Y*Y-re;return{center:[z,Y],radius:Math.sqrt(Math.max(q,1e-12))}}function zc(o,a){let u=0,S=0,g=0,w=0,T=0,B=0,M=0,I=0,V=0;for(let z=0;z<o.length;z++){const Y=o[z],re=U.normalize(a[z],U.create()),q=1-re[0]*re[0],j=-re[0]*re[1],J=-re[0]*re[2],O=1-re[1]*re[1],ne=-re[1]*re[2],K=1-re[2]*re[2];u+=q,S+=j,g+=J,w+=O,T+=ne,B+=K,M+=q*Y[0]+j*Y[1]+J*Y[2],I+=j*Y[0]+O*Y[1]+ne*Y[2],V+=J*Y[0]+ne*Y[1]+K*Y[2]}const W=Tt.create(u,S,g,S,w,T,g,T,B);return zi(W,U.create(M,I,V))}function Ui(o,a={}){if(o.length===0)return null;const u=a.tiltDownDeg??8,S=a.radiusScale??1,g=a.alignFirst??!0,w=(a.direction??"ccw")==="ccw"?1:-1,T=o.map(ue=>U.clone(ue.position)),B=o.map(ue=>{const de=ue.rotation;return U.create(de[8],de[9],de[10])}),M=o.map(ue=>{const de=ue.rotation;return U.create(de[4],de[5],de[6])}),I=Gi(M),V=U.normalize(U.scale(I,-1,U.create())),{centroid:W,normal:z,u:Y,v:re}=Ic(T,V),q=T.map(ue=>{const de=U.sub(ue,W,U.create());return[U.dot(de,Y),U.dot(de,re)]}),{center:j,radius:J}=Gc(q),O=J*S,ne=U.add(W,U.add(U.scale(Y,j[0],U.create()),U.scale(re,j[1],U.create()),U.create()),U.create()),K=zc(T,B),fe=O*Math.tan(u*Math.PI/180),he=U.sub(K,U.scale(z,fe,U.create()),U.create());let _e=0;if(g){const ue=U.sub(T[0],ne,U.create());_e=Math.atan2(U.dot(ue,re),U.dot(ue,Y))/(2*Math.PI)%1,_e<0&&(_e+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${O.toFixed(2)}, tilt=${u}°, normal=[${z[0].toFixed(2)}, ${z[1].toFixed(2)}, ${z[2].toFixed(2)}], startPhase=${_e.toFixed(3)}`),{center:ne,radius:O,normal:z,u:Y,v:re,lookAt:he,startPhase:_e,direction:w}}function Oi(o,a){const u=(o.startPhase+a*o.direction)*2*Math.PI,S=Math.cos(u),g=Math.sin(u),w=U.add(o.center,U.add(U.scale(o.u,o.radius*S,U.create()),U.scale(o.v,o.radius*g,U.create()),U.create()),U.create()),T=U.normalize(U.sub(o.lookAt,w,U.create())),B=U.cross(T,o.normal,U.create());U.length(B)<1e-6&&U.copy(o.u,B),U.normalize(B,B);const M=U.cross(T,B,U.create());U.normalize(M,M);const I=ut.create();return I[0]=B[0],I[1]=M[0],I[2]=T[0],I[3]=0,I[4]=B[1],I[5]=M[1],I[6]=T[1],I[7]=0,I[8]=B[2],I[9]=M[2],I[10]=T[2],I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,{position:w,rotation:I,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Uc(o,a={}){const u=Ui(o,a);if(!u)return[];const S=a.numViews??120;return Array.from({length:S},(g,w)=>({...Oi(u,w/S),img_name:`circle_${w.toString().padStart(4,"0")}`,id:w}))}function qt(o){const a=(o&32768)>>15,u=(o&31744)>>10,S=o&1023;return u===0?(a?-1:1)*Math.pow(2,-14)*(S/1024):u===31?S?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,u-15)*(1+S/1024)}function Xs(o,a,u,S,g,w,T,B,M,I=.5){const V=M?M.length:T.length/8,W=[],z=[];for(let q=0;q<V;q++){const J=(M?M[q]:q)*8,O=T[J]-o,ne=T[J+1]-a,K=T[J+2]-u,fe=O*S+ne*g+K*w;if(fe<=0||!(B[J+7]>>>16&1))continue;const he=B[J+4],_e=qt(he&65535),ue=qt(he>>>16&65535),de=3*Math.max(_e,ue),De=O-fe*S,te=ne-fe*g,oe=K-fe*w;if(De*De+te*te+oe*oe>de*de)continue;const ye=qt(B[J+3]&65535);if(ye<1/255)continue;const Ge=B[J+5],ke=B[J+6];let Q=qt(Ge&65535),Z=qt(Ge>>>16&65535),N=qt(ke&65535),be=qt(ke>>>16&65535);const Ae=Math.hypot(Q,Z,N,be)||1;Q/=Ae,Z/=Ae,N/=Ae,be/=Ae;const qe=1-2*(N*N+be*be),Re=2*(Z*N+Q*be),Oe=2*(Z*be-Q*N),le=2*(Z*N-Q*be),xe=1-2*(Z*Z+be*be),Ce=2*(N*be+Q*Z),A=2*(Z*be+Q*N),$=2*(N*be-Q*Z),v=1-2*(Z*Z+N*N),i=S*A+g*$+w*v;if(Math.abs(i)<1e-6)continue;const f=(O*A+ne*$+K*v)/i;if(!(f>0))continue;const d=f*S-O,b=f*g-ne,y=f*w-K,k=(d*qe+b*Re+y*Oe)/(_e||1e-6),E=(d*le+b*xe+y*Ce)/(ue||1e-6),r=k*k+E*E;if(r>9)continue;const m=Math.min(.99,ye*Math.exp(-.5*r));m<1/255||(W.push(f),z.push(m))}if(W.length===0)return null;const Y=W.map((q,j)=>j).sort((q,j)=>W[q]-W[j]);let re=1;for(const q of Y)if(re*=1-z[q],re<I)return W[q];return null}function Qs(o,a,u){const S=(o-u.viewport[0]*.5)/u.focal[0],g=-((a-u.viewport[1]*.5)/u.focal[1]),w=u.rotation;let T=S*w[0]+g*w[1]+w[2],B=S*w[4]+g*w[5]+w[6],M=S*w[8]+g*w[9]+w[10];const I=Math.hypot(T,B,M)||1;return[T/I,B/I,M/I]}function Oc(o,a,u,S,g,w){const[T,B,M]=Qs(o,a,S),I=S.position[0],V=S.position[1],W=S.position[2],z=new Uint32Array(g.buffer,g.byteOffset,g.length);let Y=Xs(I,V,W,T,B,M,g,z,null,.5);return Y===null&&(Y=Xs(I,V,W,T,B,M,g,z,null,.8)),Y===null?null:[I+Y*T,V+Y*B,W+Y*M]}function Vc(o,a){const u=o.viewport[0],S=o.viewport[1],g=new Uint32Array(a.buffer,a.byteOffset,a.length),w=o.position[0],T=o.position[1],B=o.position[2],[M,I,V]=Qs(u*.5,S*.5,o),W=.06*Math.max(u,S),z=(W+2)/o.focal[0],Y=a.length/8,re=[];for(let O=0;O<Y;O++){const ne=O*8,K=a[ne]-w,fe=a[ne+1]-T,he=a[ne+2]-B,_e=K*M+fe*I+he*V;if(_e<=0)continue;const ue=g[ne+4],de=3*Math.max(qt(ue&65535),qt(ue>>>16&65535)),De=K-_e*M,te=fe-_e*I,oe=he-_e*V,ye=_e*z+de;De*De+te*te+oe*oe<=ye*ye&&re.push(O)}if(re.length===0)return null;const q=Int32Array.from(re),j=[],J=5;for(let O=0;O<J;O++)for(let ne=0;ne<J;ne++){const K=u*.5+(ne-(J-1)/2)/((J-1)/2)*W,fe=S*.5+(O-(J-1)/2)/((J-1)/2)*W,[he,_e,ue]=Qs(K,fe,o),de=Xs(w,T,B,he,_e,ue,a,g,q,.5);de!==null&&j.push(de*(he*M+_e*I+ue*V))}return j.length<3?null:(j.sort((O,ne)=>O-ne),j[j.length>>1])}function Fc(o){return new Promise(a=>{const u=document.createElement("input");u.type="file",u.accept=o,u.style.display="none",u.onchange=()=>{var S;return a(((S=u.files)==null?void 0:S[0])??null)},document.body.appendChild(u),u.click(),setTimeout(()=>document.body.removeChild(u),1e3)})}function Nc(o,a,u){const S=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),w=document.getElementById("quick-links");g&&(g.onclick=async()=>{const I=await Fc(".ply,.bitymi");if(I)if(S&&(S.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const V=await I.arrayBuffer(),{pcBuffer:W}=Di(V),z=new File([W],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),Y=await Ws(z,o);a(Y)}else{const V=await Ws(I,o);a(V)}}),w&&(w.innerHTML="");const T=new URLSearchParams(window.location.search),B=T.get("bundle")??T.get("model_url"),M=T.get("camera_url");B&&(S&&(S.style.display="none"),u(B,M))}async function $c(o,a,u,S){const g=new Zs(o,u),w=new Rc(g);let T=!1;o.addEventListener("pointerdown",()=>{T=!0}),window.addEventListener("pointerup",()=>{T=!1});const B=typeof window<"u"&&window.parent!==window,M={pos:new Float32Array(3),rot:new Float32Array(16)};if(B){window.addEventListener("message",Q=>{const Z=Q.data;if(!(!Z||Z.type!=="halloumi_sync_pose")&&!(!Array.isArray(Z.position)||Z.position.length!==3)&&!(!Array.isArray(Z.rotation)||Z.rotation.length!==16)){for(let N=0;N<3;N++)g.position[N]=Z.position[N];for(let N=0;N<16;N++)g.rotation[N]=Z.rotation[N];g.update_buffer(),w.resetToCamera();for(let N=0;N<3;N++)M.pos[N]=g.position[N];for(let N=0;N<16;N++)M.rot[N]=g.rotation[N]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const I=()=>{if(!B)return;const Q=g.position,Z=g.rotation;let N=!1;for(let be=0;be<3;be++)if(Math.abs(Q[be]-M.pos[be])>1e-6){N=!0;break}if(!N){for(let be=0;be<16;be++)if(Math.abs(Z[be]-M.rot[be])>1e-6){N=!0;break}}if(N){for(let be=0;be<3;be++)M.pos[be]=Q[be];for(let be=0;be<16;be++)M.rot[be]=Z[be];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Q[0],Q[1],Q[2]],rotation:Array.from(Z)},"*")}catch{}}},V="rgba8unorm";a.configure({device:u,format:V,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let W=null,z=null;const Y=()=>{g.on_update_canvas(),W!==null&&Bn(o.width,o.height,u,W.render_settings_buffer),z!==null&&z()};new ResizeObserver(()=>{const Q=Math.max(.25,oe.render_scale),Z=Math.max(1,Math.ceil(Q*o.clientWidth)),N=Math.max(1,Math.ceil(Q*o.clientHeight));o.width===Z&&o.height===N||(o.width=Z,o.height=N,Y())}).observe(o);let q=0,j=0;const J=()=>{(o.width!==q||o.height!==j)&&(q=o.width,j=o.height,Y())},O=new URLSearchParams(window.location.search);let K=O.get("animation")==="1";w.enabled=!K;const fe=O.get("camera_url"),he=O.get("bfc"),_e=he==="1"||he==="true",ue=O.get("bfc_cos"),de=ue!==null?Number(ue):NaN,De=Number.isFinite(de)?de:2,te=Math.max(1,window.devicePixelRatio||1),oe={gaussian_scaling:1,sh_bias:.5,animate:K,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:_e,bfc_cos:De,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1},ye=new ic.Pane({title:"Config",expanded:!0});ye.addInput(oe,"animate",{label:"Animate"}).on("change",Q=>{const Z=K;K=Q.value,w.enabled=!Q.value,!Z&&K&&Ge.value&&Ge.value.onAnimateStart(),Z&&!K&&Ge.value&&Ge.value.onAnimateStop()}),ye.addInput(oe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Ge={value:null};Nc(u,Q=>ke(Q,[],null),async(Q,Z)=>{let N=Z??fe,be,Ae=null;const qe=Q.toLowerCase();if(qe.endsWith(".bitymi")||qe.includes(".bitymi?")){er("downloading bundle ...");try{const{bundle:Ce}=await fi(Q,($,v,i)=>{const f=$/1048576,d=v?v/(1024*1024):void 0,b=i/(1024*1024),y=v?Math.min(99,Math.floor($/v*100)):void 0,k=d?`total ${d.toFixed(1)} MB`:"total -- MB",E=d&&y!==void 0?`${f.toFixed(1)} MB downloaded (${y}%)`:`${f.toFixed(1)} MB downloaded`,r=`${b.toFixed(2)} MB/s`;Wt(`downloading bundle ...
${k}, ${E}
${r}`)});if(!Ce)throw new Error("Expected a .bitymi bundle");Wt("parsing PLY ...");const A=new File([Ce.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(be=await Ws(A,u),!N&&Ce.camerasBuffer&&(N=URL.createObjectURL(new Blob([Ce.camerasBuffer],{type:"application/json"}))),Ce.atlasBuffer){const $=Ce.atlasBuffer.byteLength/1048576;Wt(`uploading atlas ...
${$.toFixed(1)} MB BC7`);try{const v=di(Ce.atlasBuffer);Ae=pi(u,v,!0)}catch(v){console.warn("[atlas] failed to parse/upload atlas:",v)}}}catch(Ce){throw jn(),Ce}}else be=await Zl(Q,u);let Re=null,Oe="";const le=O.get("atlas2");if(le)try{const{bundle:Ce}=await fi(le,(A,$)=>{Wt(`downloading second atlas ...
${(A/1048576).toFixed(1)}${$?` / ${($/1048576).toFixed(1)}`:""} MB`)});if(!(Ce!=null&&Ce.atlasBuffer))throw new Error("second bundle has no atlas chunk");Wt("uploading second atlas ..."),Re=pi(u,di(Ce.atlasBuffer),!0),Re||(Oe="second atlas: format unsupported on this device")}catch(Ce){console.warn("[atlas2] failed:",Ce),Oe=`second atlas failed: ${Ce}`}const xe=N?await Ec(N):[];xe.length>0&&g.set_preset(xe[0]),ke(be,xe,Ae,Re,Oe)});function ke(Q,Z=[],N=null,be=null,Ae=""){const qe=[(Q.bbox.min[0]+Q.bbox.max[0])/2,(Q.bbox.min[1]+Q.bbox.max[1])/2,(Q.bbox.min[2]+Q.bbox.max[2])/2];w.setBbox(Q.bbox.min,Q.bbox.max),.5*Math.sqrt((Q.bbox.max[0]-Q.bbox.min[0])**2+(Q.bbox.max[1]-Q.bbox.min[1])**2+(Q.bbox.max[2]-Q.bbox.min[2])**2);function Re(R,X){const ae=Oc(R,X,o,g,Q.surfel_data);ae&&(w.setOrbitPivot(ae),console.log(`[pick] orbit pivot → (${ae[0].toFixed(3)}, ${ae[1].toFixed(3)}, ${ae[2].toFixed(3)})`))}function Oe(){const R=Vc(g,Q.surfel_data);if(R!==null&&R>.001){w.setOrbitDepth(R);return}const X=g.rotation,ae=X[2],pe=X[6],Se=X[10],me=(Q.centroid[0]-g.position[0])*ae+(Q.centroid[1]-g.position[1])*pe+(Q.centroid[2]-g.position[2])*Se;me>.001&&w.setOrbitDepth(me)}if(Z.length===0){const R=Q.bbox.max[0]-Q.bbox.min[0],X=Q.bbox.max[1]-Q.bbox.min[1],ae=Q.bbox.max[2]-Q.bbox.min[2],Se=.5*Math.sqrt(R*R+X*X+ae*ae)*.5;U.set(qe[0]-Se,qe[1]-Se,qe[2]-Se,g.position);const me=U.create(Se,Se,Se);U.normalize(me,me);const ve=U.create(0,1,0),Ee=U.create();U.cross(ve,me,Ee),U.normalize(Ee,Ee);const Ze=U.create();U.cross(me,Ee,Ze);const pt=Tt.create(Ee[0],Ze[0],me[0],Ee[1],Ze[1],me[1],Ee[2],Ze[2],me[2]);ut.fromMat3(pt,g.rotation),g.update_buffer()}w.setCenter(U.create(Q.centroid[0],Q.centroid[1],Q.centroid[2]));const le=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),xe="halloumi.fetch_by_id";let Ce=null;try{const R=localStorage.getItem(xe);(R==="0"||R==="1")&&(Ce=R==="1")}catch{}const A=O.get("byid"),$={fetchById:A!==null?A==="1":Ce!==null?Ce:!le,octBound:O.get("oct")==="1",acc16:O.get("acc16")==="1"},v=new Ys(Q,u,V,g.uniform_buffer,S,N,$),i=O.get("surfel_math");oe.surfel_math=i==="raysplat"||i==="centred"?i:O.get("raysplat")==="1"?"raysplat":"conic",oe.hyp_legacy=O.get("hyp_legacy")==="1",Wn({hypLegacy:oe.hyp_legacy,raysplat:oe.surfel_math==="raysplat",centred:oe.surfel_math==="centred"},u,v.render_settings_buffer),oe.legacy_renderer=O.get("legacy")==="1",oe.legacy_renderer&&v.setLegacyRenderer(!0),oe.two_pass=O.get("twopass")==="1";{const R=parseFloat(O.get("opaque_t")??"");Number.isFinite(R)&&(oe.opaque_thresh=Math.min(.99,Math.max(.01,R)))}v.setOpaqueThresh(oe.opaque_thresh),oe.two_pass&&v.setTwoPass(!0);{const R=O.get("overdraw");(R==="shaded"||R==="raster"||R==="1")&&(oe.overdraw=R==="raster"?"raster":"shaded");const X=parseInt(O.get("overdraw_max")??"",10);Number.isFinite(X)&&X>0&&(oe.overdraw_max=X)}v.setOverdrawMax(oe.overdraw_max),oe.overdraw!=="off"&&v.setOverdrawMode(oe.overdraw==="raster"?2:1),oe.fetch_by_id=$.fetchById,console.log(`[render_2dgs] fetch_by_id=${$.fetchById} (source: ${A!==null?"?byid":Ce!==null?"remembered":`handheld=${le}`})`),W=v,Bn(o.width,o.height,u,v.render_settings_buffer),oe.atlas_enabled=N!==null;{const R=Q.surfel_data,X=R.length/8;let ae=0,pe=0,Se=0;for(let ve=0;ve<X;ve++)ae+=R[ve*8],pe+=R[ve*8+1],Se+=R[ve*8+2];const me=X>0?[ae/X,pe/X,Se/X]:[0,0,0];v.setBfcParams(oe.bfc_cos,me),Wn({bfc:oe.bfc},u,v.render_settings_buffer),console.log(`[bfc] flag=${oe.bfc} cos=${oe.bfc_cos} centroid=(${me[0].toFixed(3)}, ${me[1].toFixed(3)}, ${me[2].toFixed(3)})`)}let f=!1;const d=(()=>{if(N!==null)return`${N.meta.format===2?"BC7":N.meta.format===3?"ASTC 4×4":N.meta.format===7?"BC7 codebook gather (typeD)":`format=${N.meta.format}`} ${N.meta.width}×${N.meta.height}, ${N.meta.n_layers} layers`;const R=u.features.has("texture-compression-bc"),X=u.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(R?["BC7"]:[]).concat(X?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",d),xi(Q.sh_bias,u,v.render_settings_buffer),wi(oe.gaussian_scaling,u,v.render_settings_buffer),oe.sh_bias=Q.sh_bias;const b=Q.num_points.toLocaleString(),y={stats:`${b} surfels · -- fps`};ye.addMonitor(y,"stats",{label:"Stats",interval:200});const k=.4,E=3,r=.3;let m=null,p=0,h=0;const l=ct.create(),_=Tt.create();let P=Z.length>0?0:-1;const x={view:Z.length>0?`${P+1} / ${Z.length}: ${Z[P].img_name??P}`:"— no presets —"},D=document.createElement("span");function F(R){const X=Tt.create(R[0],R[1],R[2],R[4],R[5],R[6],R[8],R[9],R[10]);return ct.fromMat(X)}function H(R,X){m={fromPos:U.clone(g.position),toPos:U.clone(R.position),fromQuat:ct.normalize(F(g.rotation)),toQuat:ct.normalize(F(R.rotation)),target:R,t:0,duration:Math.max(.01,X)}}const ce=(R,X=!0)=>{if(Z.length===0)return;P=(R%Z.length+Z.length)%Z.length;const ae=Z[P];X?H(ae,k):(g.set_preset(ae),w.resetToCamera(),Oe()),x.view=`${P+1} / ${Z.length}: ${Z[P].img_name??P}`,D.textContent=x.view};if(Z.length>0){const R=ye.addSeparator(),X=document.createElement("div");X.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ae=(Se,me,ve)=>{const Ee=document.createElement("button");return Ee.className="tp-btnv_b",Ee.textContent=Se,Ee.title=me,Ee.style.cssText="flex:0 0 34px;height:24px;padding:0;",Ee.addEventListener("click",ve),Ee};D.textContent=x.view,D.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",X.appendChild(ae("◀","previous view (←)",()=>ce(P-1))),X.appendChild(D),X.appendChild(ae("▶","next view (→)",()=>ce(P+1))),(ye.element.querySelector(".tp-rotv_c")??ye.element).insertBefore(X,R.element),R.dispose()}const ie=Z.length>0?Ui(Z,{tiltDownDeg:15,alignFirst:!0}):null,se=ie?Uc(Z,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ge=0;const Me=12;Ge.value={onAnimateStart:()=>{ge=0},onAnimateStop:()=>{w.resetToCamera(),Oe()}},ye.addInput(oe,"render_scale",{label:"Render scale",min:.25,max:te,step:.25}).on("change",R=>{const X=Math.max(.25,R.value),ae=Math.max(1,Math.ceil(X*o.clientWidth)),pe=Math.max(1,Math.ceil(X*o.clientHeight));(o.width!==ae||o.height!==pe)&&(o.width=ae,o.height=pe,Y())});const we={res:""},Pe=()=>{const R=o.width*o.height/1e6;we.res=`${o.width}×${o.height}  (${R.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${te.toFixed(2)} · native ${Math.round(o.clientWidth*te)}×${Math.round(o.clientHeight*te)}`};Pe(),z=Pe,ye.addMonitor(we,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ye.addInput(oe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",R=>wi(R.value,u,v.render_settings_buffer)),ye.addInput(oe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",R=>xi(R.value,u,v.render_settings_buffer)),ye.addInput(oe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",R=>{v.bgColor=[R.value.r,R.value.g,R.value.b,R.value.a]});const Ie=R=>R===null?"":R.meta.format===3||R.meta.format===8||R.meta.format===10?" (ASTC)":" (BC7)";let Le=Ie(N);const je=ye.addInput(oe,"atlas_enabled",{label:`Texture${Le}`}).on("change",R=>{v.setAtlasEnabled(R.value),He()}),We=document.createElement("button");We.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const He=()=>{We.textContent=`Texture${Le}: ${oe.atlas_enabled?"ON":"OFF"}`,We.style.borderColor=oe.atlas_enabled?"#f0b060":"#444",We.style.color=oe.atlas_enabled?"#f0b060":"#bbb"},Qe=()=>{oe.atlas_enabled=!oe.atlas_enabled,v.setAtlasEnabled(oe.atlas_enabled),je.refresh(),He()};if(We.title="toggle the baked texture (T)",We.addEventListener("click",Qe),N&&document.body.appendChild(We),He(),N&&(be||Ae))if(be){const R={};R[`A${Ie(N)} · bundle`]="A",R[`B${Ie(be)} · atlas2`]="B";const X={atlas:"A"};ye.addInput(X,"atlas",{label:"Atlas source",options:R}).on("change",ae=>{const pe=ae.value==="B"?be:N;v.setAtlas(pe),Le=Ie(pe),je.label=`Texture${Le}`,He(),console.log(`[atlas2] now sampling ${ae.value}${Le}`)})}else{const R={note:Ae};ye.addMonitor(R,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const nt=N!==null&&(N.meta.probe_mode|0)>0;if(v.hasMips&&nt)v.setMipMode(oe.mips),ye.addInput(oe,"mips",{label:"Mips (trilinear)"}).on("change",R=>v.setMipMode(R.value));else if(v.hasMips){const R=O.get("mipbias"),X={mode:R==="0"||R==="1"||R==="2"?R:"off"},ae=pe=>{pe==="off"?v.setMipMode(!1):(v.setMipLodBias(Number(pe)),v.setMipMode(!0)),console.log(`[mips] ${pe==="off"?"off (level 0 only)":`on, bias ${pe}`}`)};ae(X.mode),ye.addInput(X,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",pe=>ae(pe.value))}const Ye=ye.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});Ye.addInput(oe,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",R=>Wn({raysplat:R.value==="raysplat",centred:R.value==="centred"},u,v.render_settings_buffer));const tt=globalThis.__gpuAdapterInfo??{},ot={s:`${tt.vendor??"?"} / ${tt.architecture??"?"}
${tt.device||tt.description||"?"}`};Ye.addMonitor(ot,"s",{label:"GPU",multiline:!0,lineCount:2}),Ye.addInput(oe,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",R=>Wn({hypLegacy:R.value},u,v.render_settings_buffer)),Ye.addInput(oe,"two_pass",{label:"Two-pass (layer)"}).on("change",R=>v.setTwoPass(R.value)),Ye.addInput(oe,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",R=>v.setOpaqueThresh(R.value)),Ye.addInput(oe,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",R=>v.setOverdrawMode(R.value==="shaded"?1:R.value==="raster"?2:0)),Ye.addInput(oe,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",R=>v.setOverdrawMax(R.value));const st={s:"—"};Ye.addMonitor(st,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(v.overdrawModeValue===0){st.s="—";return}v.readOverdrawStats().then(R=>{R&&(st.s=`mean ${R.mean.toFixed(1)} frag/px · ${R.meanCovered.toFixed(1)} on covered
max ${R.max} · covered ${(R.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(R=>console.warn("[overdraw] readback failed:",R))},500),ye.addInput(oe,"legacy_renderer",{label:"Legacy renderer"}).on("change",R=>v.setLegacyRenderer(R.value)),ye.addInput(oe,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",R=>{v.setFetchById(R.value);try{localStorage.setItem("halloumi.fetch_by_id",R.value?"1":"0")}catch{}});const Je={aspect:"canvas"},Xe=ye.addFolder({title:"📸 Screenshot",expanded:!1});Xe.addInput(Je,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Fe={s:"pick a size to capture"};Xe.addMonitor(Fe,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const it=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Ke=null;function dt(R){let X;if(Je.aspect==="canvas")X=o.width/o.height;else{const[ve,Ee]=Je.aspect.split(":").map(Number);X=ve/Ee}const ae=u.limits.maxTextureDimension2D;let pe,Se;if(R==="canvas"&&Je.aspect==="canvas")pe=o.width,Se=o.height;else{const ve=R==="canvas"?Math.max(o.width,o.height):R;X>=1?(pe=ve,Se=Math.round(ve/X)):(Se=ve,pe=Math.round(ve*X))}const me=Math.min(1,ae/Math.max(pe,Se));return pe=Math.max(2,Math.round(pe*me)&-2),Se=Math.max(2,Math.round(Se*me)&-2),[pe,Se]}function rt(R,X){const ae=URL.createObjectURL(R),pe=document.createElement("a");pe.href=ae,pe.download=X,document.body.appendChild(pe),pe.click(),pe.remove(),setTimeout(()=>URL.revokeObjectURL(ae),1e4)}async function Lt(R,X){var ve;const ae=(R.size/1048576).toFixed(1),pe=window;if(typeof pe.showSaveFilePicker=="function")try{const Ee=await pe.showSaveFilePicker({suggestedName:X,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Ze=await Ee.createWritable();return await Ze.write(R),await Ze.close(),`saved ${Ee.name??X} (${ae} MB) where you chose`}catch(Ee){if((Ee==null?void 0:Ee.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Se=new File([R],X,{type:"image/png"}),me=navigator;if(me.share&&((ve=me.canShare)!=null&&ve.call(me,{files:[Se]})))try{return await me.share({files:[Se],title:X}),`shared ${X} (${ae} MB) via share sheet`}catch(Ee){if((Ee==null?void 0:Ee.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return rt(R,X),`downloaded ${X} (${ae} MB) to your browser's Downloads folder`}async function Ct(R){if(f)return;const[X,ae]=dt(R);Fe.s=`rendering ${X}×${ae}…`;const pe=o.width,Se=o.height;g.setRenderSize(X,ae),Bn(X,ae,u,v.render_settings_buffer);const me=u.createTexture({size:[X,ae,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ve=Math.ceil(X*4/256)*256,Ee=u.createBuffer({size:ve*ae,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Ze=u.createCommandEncoder({label:"screenshot"});v.frame(Ze,me.createView(),!1),Ze.copyTextureToBuffer({texture:me},{buffer:Ee,bytesPerRow:ve,rowsPerImage:ae},[X,ae,1]),u.queue.submit([Ze.finish()]),g.clearRenderSize(),Bn(pe,Se,u,v.render_settings_buffer);try{await Ee.mapAsync(GPUMapMode.READ);const pt=new Uint8Array(Ee.getMappedRange()),gt=new Uint8ClampedArray(X*ae*4);for(let vt=0;vt<ae;vt++)gt.set(pt.subarray(vt*ve,vt*ve+X*4),vt*X*4);for(let vt=3;vt<gt.length;vt+=4)gt[vt]=255;Ee.unmap();const St=document.createElement("canvas");St.width=X,St.height=ae,St.getContext("2d").putImageData(new ImageData(gt,X,ae),0,0);const Et=await new Promise((vt,Ut)=>St.toBlob(bt=>bt?vt(bt):Ut(new Error("toBlob failed")),"image/png")),At=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),at=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),an=`${At}_${X}x${ae}_${at}.png`;Ke={blob:Et,name:an},Fe.s=await Lt(Et,an)}catch(pt){console.error("[screenshot]",pt),Fe.s=`failed: ${pt}`}finally{Ee.destroy(),me.destroy()}}{const R=document.createElement("div");R.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const X=(pe,Se,me)=>{const ve=document.createElement("button");ve.className="tp-btnv_b",ve.textContent=pe,ve.title=Se,ve.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ve.addEventListener("click",me),R.appendChild(ve)};X("Canvas","current canvas size",()=>{Ct("canvas")});for(const[pe,Se]of it)X(pe,`${Se} px long edge`,()=>{Ct(Se)});(Xe.element.querySelector(".tp-fldv_c")??Xe.element).appendChild(R)}Xe.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Ke){Fe.s="nothing captured yet";return}rt(Ke.blob,Ke.name),Fe.s=`downloaded ${Ke.name} to your browser's Downloads folder`}),ye.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(Z.length>0)g.set_preset(Z[0]);else{const R=Q.bbox.max[0]-Q.bbox.min[0],X=Q.bbox.max[1]-Q.bbox.min[1],ae=Q.bbox.max[2]-Q.bbox.min[2],Se=.5*Math.sqrt(R*R+X*X+ae*ae)*.5;U.set(qe[0]-Se,qe[1]-Se,qe[2]-Se,g.position);const me=U.create(Se,Se,Se);U.normalize(me,me);const ve=U.create();U.cross(U.create(0,1,0),me,ve),U.normalize(ve,ve);const Ee=U.create();U.cross(me,ve,Ee);const Ze=Tt.create(ve[0],Ee[0],me[0],ve[1],Ee[1],me[1],ve[2],Ee[2],me[2]);ut.fromMat3(Ze,g.rotation),g.update_buffer()}w.resetToCamera(),Oe()});const yt={result:"— click Benchmark —"},kt=ye.addMonitor(yt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});kt.hidden=!0;const It={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function jt(){const X=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ae of Object.keys(It))if(X.startsWith(ae))return ae;return null}const Pt=document.createElement("div");Pt.id="bench-overlay",Pt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Pt);function rn(R,X,ae){const pe=Math.floor(X/Math.max(1,ae)*100),Se=32,me=Math.floor(X/Math.max(1,ae)*Se),ve="█".repeat(me)+"░".repeat(Se-me);Pt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${R}</div><div>[${ve}] ${pe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${X} / ${ae} frames · offscreen · pipelined · no vsync</div>`,Pt.style.display="block"}function Kt(){Pt.style.display="none"}async function bn(R=10,X=200){if(f)return;if(Z.length===0){yt.result="no cameras to benchmark";return}f=!0;const ae=K,pe=oe.animate,Se=new Float32Array(g.position),me=new Float32Array(g.rotation);K=!1,oe.animate=!1,ye.refresh(),m=null,w.enabled=!1;const ve=jt(),Ee=ve?It[ve]:null,Ze=(Ee==null?void 0:Ee.w)??o.width,pt=(Ee==null?void 0:Ee.h)??o.height,gt=(Ee==null?void 0:Ee.fovY)??g.getFov(),St=ve?`${ve} · ${Ze>=4e3/4+500?"images_4":"images_2"}`:"custom",Et=o.width,At=o.height,at=g.getFov();o.width=Ze,o.height=pt,g.setFov(gt),Bn(Ze,pt,u,v.render_settings_buffer);const an=u.createTexture({size:[Ze,pt,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),vt=an.createView(),Ut=()=>{const ft=u.createCommandEncoder();v.frame(ft,vt,!1),u.queue.submit([ft.finish()])},bt=()=>new Promise(ft=>setTimeout(ft,0)),Ht=20,Yt=async(ft,Dt)=>{let Zt=0,Ot=0;for(rn(Dt,0,ft),await bt();Ot<ft;){const Rt=Math.min(Ht,ft-Ot),ln=performance.now();for(let yn=0;yn<Rt;yn++)g.set_preset(Z[(Ot+yn)%Z.length]),Ut();await u.queue.onSubmittedWorkDone();const bs=performance.now();Zt+=bs-ln,Ot+=Rt,rn(Dt,Ot,ft),await bt()}return Zt};try{await Yt(R,"Warming up");const Dt=await Yt(X,"Benchmarking")/X,Zt=1e3/Dt,Ot=Q.num_points??Q.surfel_data.length/8,Rt=(gt*180/Math.PI).toFixed(1),ln=`${Zt.toFixed(1)} FPS  (${Dt.toFixed(2)} ms/frame)
${Ze}×${pt} · fovY ${Rt}° · ${St}
${Ot.toLocaleString()} surfels · ${R}w+${X}b · pipelined`+(v.hasMips?` · ${v._mipMode?`mips bias ${v.mipLodBias}`:"mips off"}`:"");yt.result=ln,kt.hidden=!1,console.log("[bench]",ln.replace(/\n/g,"  |  "))}catch(ft){console.error("[bench] failed:",ft),yt.result=`bench failed: ${ft}`,kt.hidden=!1}finally{Kt(),an.destroy(),o.width=Et,o.height=At,g.setFov(at),Bn(Et,At,u,v.render_settings_buffer),g.position.set(Se),g.rotation.set(me),g.update_buffer(),w.enabled=!ae,K=ae,oe.animate=pe,ye.refresh(),f=!1}}ye.addButton({title:"📊 Benchmark"}).on("click",()=>bn());const gn=Math.PI/2,Ue=new Set,Zn=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],ms=R=>{const X=R.target;return!!X&&(X.tagName==="INPUT"||X.tagName==="TEXTAREA"||X.isContentEditable)},Dn=()=>Ue.has("ShiftLeft")||Ue.has("ShiftRight");document.addEventListener("keyup",R=>{Ue.delete(R.code)}),window.addEventListener("blur",()=>Ue.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&Ue.clear()});const vs=R=>{if(Ue.size===0||oe.animate)return;const X=Dn()?3:1;let ae=0;Ue.has("KeyX")&&(ae+=1),Ue.has("KeyZ")&&(ae-=1),ae!==0&&(w.addRoll(ae*gn*X*R),m=null);const pe=g.rotation,Se=[pe[0],pe[4],pe[8]],me=[pe[1],pe[5],pe[9]],ve=[pe[2],pe[6],pe[10]],Ee=w.center,pt=(w.sceneRadius??Math.max(.05,U.distance(g.position,Ee)))*.5*X*R;let gt=0,St=0,Et=0;if(Ue.has("KeyW")&&(Et+=1),Ue.has("KeyS")&&(Et-=1),Ue.has("KeyD")&&(gt+=1),Ue.has("KeyA")&&(gt-=1),Ue.has("KeyE")&&(St+=1),Ue.has("KeyQ")&&(St-=1),!gt&&!St&&!Et)return;const At=[0,0,0];for(let at=0;at<3;at++)At[at]=(Se[at]*gt+me[at]*St+ve[at]*Et)*pt;for(let at=0;at<3;at++)g.position[at]+=At[at],Ee[at]+=At[at];g.update_buffer(),m=null};document.addEventListener("keydown",R=>{if(ms(R))return;const X=R.key,ae=X.toLowerCase();if(R.ctrlKey||R.metaKey||R.altKey){Ue.clear();return}if(Zn.includes(R.code)&&!(R.shiftKey&&R.code==="KeyD")){Ue.add(R.code),R.preventDefault();return}if(ae==="t"){Qe();return}if(X>="0"&&X<="9"&&Z.length>0){const pe=parseInt(X);pe<Z.length&&ce(pe)}else X==="ArrowLeft"||X==="PageUp"?(ce(P-1),R.preventDefault()):X==="ArrowRight"||X==="PageDown"?(ce(P+1),R.preventDefault()):R.shiftKey&&ae==="d"&&v.debugReadSortedIndices(30).catch(pe=>console.error("[DEBUG] readback failed:",pe))});function Gt(R,X){const ae=o.getBoundingClientRect(),pe=window.devicePixelRatio||1;return[(R-ae.left)*pe,(X-ae.top)*pe]}o.addEventListener("dblclick",R=>{const[X,ae]=Gt(R.clientX,R.clientY);Re(X,ae)});let wn=0,Rn=0,Xn=0;o.addEventListener("pointerdown",R=>{if(R.pointerType!=="touch")return;const X=performance.now(),ae=X-wn,pe=R.clientX-Rn,Se=R.clientY-Xn;if(ae>0&&ae<300&&pe*pe+Se*Se<40*40){const[me,ve]=Gt(R.clientX,R.clientY);Re(me,ve),wn=0}else wn=X,Rn=R.clientX,Xn=R.clientY});function Ln(){return T}let Qn=performance.now(),zt=60,Jn=Promise.resolve(),xn=0;async function on(){var Se;const R=performance.now(),X=Math.min((R-Qn)/1e3,.1);if(Qn=R,X>0){const me=((Se=v.lastStageBreakdownMs)==null?void 0:Se.total)??0,ve=me>.5?1e3/me:1/X;zt=zt*.9+ve*.1,y.stats=`${b} surfels · ${Math.round(zt)} fps`}if(f){requestAnimationFrame(on);return}if(Ln()&&(m||K)&&(m=null,w.resetToCamera(),Oe(),K&&(K=!1,oe.animate=!1,ye.refresh())),K&&oe.animateMode==="circle"&&ie){ge+=X/Me,ge>=1&&(ge-=1);const me=Oi(ie,ge);g.set_preset(me),w.update(X);const ve=u.createCommandEncoder();v.frame(ve,a.getCurrentTexture().createView()),u.queue.submit([ve.finish()]),xn++,xn===2&&jn(),requestAnimationFrame(on);return}if(m){m.t+=X/m.duration;const me=Math.min(1,m.t),ve=me*me*(3-2*me);U.lerp(m.fromPos,m.toPos,ve,g.position),ct.slerp(m.fromQuat,m.toQuat,ve,l),Tt.fromQuat(l,_),ut.fromMat3(_,g.rotation),g.update_buffer(),m.t>=1&&(g.set_preset(m.target),m=null,K?Z.length>0&&(p=r):(w.resetToCamera(),Oe()))}else if(K&&!Ln()){const me=oe.animateMode==="circle"&&se.length>0,ve=me?se:Z;if(ve.length!==0){if(p-=X,p<=0){const Ze=((me?h:P)+1)%ve.length;me?h=Ze:P=Ze;const pt=me?E/8:E;H(ve[Ze],pt),me||(x.view=`${P+1} / ${Z.length}: ${Z[P].img_name??P}`)}}}vs(X),w.update(X),I(),J(),await Jn;const ae=u.createCommandEncoder(),pe=a.getCurrentTexture().createView();v.frame(ae,pe),u.queue.submit([ae.finish()]),Jn=u.queue.onSubmittedWorkDone(),xn++,xn===2&&jn(),requestAnimationFrame(on)}requestAnimationFrame(on)}}(function(){let a="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const w=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(w){a=w[1];break}}const u=document.createElement("div");u.textContent="v "+a,u.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(u.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(u)})();(async()=>{if(navigator.gpu===void 0){const w=document.querySelector("#title");w.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const w=document.querySelector("#title");w.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)");try{const w=o.info??{};globalThis.__gpuAdapterInfo={vendor:w.vendor??"?",architecture:w.architecture??"?",device:w.device??"?",description:w.description??"?",features:Array.from(o.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const u=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");ql(S!==null);const g=S.getContext("webgpu");$c(S,g,u,a)})();
