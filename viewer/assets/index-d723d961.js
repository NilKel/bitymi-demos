var ec=Object.defineProperty;var tc=(o,r,a)=>r in o?ec(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a;var M=(o,r,a)=>(tc(o,typeof r!="symbol"?r+"":r,a),a);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))v(u);new MutationObserver(u=>{for(const b of u)if(b.type==="childList")for(const B of b.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&v(B)}).observe(document,{childList:!0,subtree:!0});function a(u){const b={};return u.integrity&&(b.integrity=u.integrity),u.referrerPolicy&&(b.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?b.credentials="include":u.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function v(u){if(u.ep)return;u.ep=!0;const b=a(u);fetch(u.href,b)}})();function nc(o,r){return class extends o{constructor(...a){super(...a),r(this)}}}const sc=nc(Array,o=>o.fill(0));let Oe=1e-6;function rc(o){function r(k=0,x=0){const P=new o(2);return k!==void 0&&(P[0]=k,x!==void 0&&(P[1]=x)),P}const a=r;function v(k,x,P){const i=P??new o(2);return i[0]=k,i[1]=x,i}function u(k,x){const P=x??new o(2);return P[0]=Math.ceil(k[0]),P[1]=Math.ceil(k[1]),P}function b(k,x){const P=x??new o(2);return P[0]=Math.floor(k[0]),P[1]=Math.floor(k[1]),P}function B(k,x){const P=x??new o(2);return P[0]=Math.round(k[0]),P[1]=Math.round(k[1]),P}function T(k,x=0,P=1,i){const w=i??new o(2);return w[0]=Math.min(P,Math.max(x,k[0])),w[1]=Math.min(P,Math.max(x,k[1])),w}function C(k,x,P){const i=P??new o(2);return i[0]=k[0]+x[0],i[1]=k[1]+x[1],i}function R(k,x,P,i){const w=i??new o(2);return w[0]=k[0]+x[0]*P,w[1]=k[1]+x[1]*P,w}function V(k,x){const P=k[0],i=k[1],w=x[0],p=x[1],h=Math.sqrt(P*P+i*i),c=Math.sqrt(w*w+p*p),m=h*c,E=m&&de(k,x)/m;return Math.acos(E)}function F(k,x,P){const i=P??new o(2);return i[0]=k[0]-x[0],i[1]=k[1]-x[1],i}const I=F;function K(k,x){return Math.abs(k[0]-x[0])<Oe&&Math.abs(k[1]-x[1])<Oe}function re(k,x){return k[0]===x[0]&&k[1]===x[1]}function z(k,x,P,i){const w=i??new o(2);return w[0]=k[0]+P*(x[0]-k[0]),w[1]=k[1]+P*(x[1]-k[1]),w}function L(k,x,P,i){const w=i??new o(2);return w[0]=k[0]+P[0]*(x[0]-k[0]),w[1]=k[1]+P[1]*(x[1]-k[1]),w}function X(k,x,P){const i=P??new o(2);return i[0]=Math.max(k[0],x[0]),i[1]=Math.max(k[1],x[1]),i}function Y(k,x,P){const i=P??new o(2);return i[0]=Math.min(k[0],x[0]),i[1]=Math.min(k[1],x[1]),i}function ee(k,x,P){const i=P??new o(2);return i[0]=k[0]*x,i[1]=k[1]*x,i}const N=ee;function ue(k,x,P){const i=P??new o(2);return i[0]=k[0]/x,i[1]=k[1]/x,i}function le(k,x){const P=x??new o(2);return P[0]=1/k[0],P[1]=1/k[1],P}const he=le;function se(k,x,P){const i=P??new o(3),w=k[0]*x[1]-k[1]*x[0];return i[0]=0,i[1]=0,i[2]=w,i}function de(k,x){return k[0]*x[0]+k[1]*x[1]}function Te(k){const x=k[0],P=k[1];return Math.sqrt(x*x+P*P)}const pe=Te;function Ge(k){const x=k[0],P=k[1];return x*x+P*P}const ze=Ge;function J(k,x){const P=k[0]-x[0],i=k[1]-x[1];return Math.sqrt(P*P+i*i)}const _e=J;function we(k,x){const P=k[0]-x[0],i=k[1]-x[1];return P*P+i*i}const me=we;function O(k,x){const P=x??new o(2),i=k[0],w=k[1],p=Math.sqrt(i*i+w*w);return p>1e-5?(P[0]=i/p,P[1]=w/p):(P[0]=0,P[1]=0),P}function Z(k,x){const P=x??new o(2);return P[0]=-k[0],P[1]=-k[1],P}function te(k,x){const P=x??new o(2);return P[0]=k[0],P[1]=k[1],P}const ye=te;function Ee(k,x,P){const i=P??new o(2);return i[0]=k[0]*x[0],i[1]=k[1]*x[1],i}const Me=Ee;function ie(k,x,P){const i=P??new o(2);return i[0]=k[0]/x[0],i[1]=k[1]/x[1],i}const be=ie;function Re(k=1,x){const P=x??new o(2),i=Math.random()*2*Math.PI;return P[0]=Math.cos(i)*k,P[1]=Math.sin(i)*k,P}function G(k){const x=k??new o(2);return x[0]=0,x[1]=0,x}function j(k,x,P){const i=P??new o(2),w=k[0],p=k[1];return i[0]=w*x[0]+p*x[4]+x[12],i[1]=w*x[1]+p*x[5]+x[13],i}function S(k,x,P){const i=P??new o(2),w=k[0],p=k[1];return i[0]=x[0]*w+x[4]*p+x[8],i[1]=x[1]*w+x[5]*p+x[9],i}function l(k,x,P,i){const w=i??new o(2),p=k[0]-x[0],h=k[1]-x[1],c=Math.sin(P),m=Math.cos(P);return w[0]=p*m-h*c+x[0],w[1]=p*c+h*m+x[1],w}function _(k,x,P){const i=P??new o(2);return O(k,i),ee(i,x,i)}function f(k,x,P){const i=P??new o(2);return Te(k)>x?_(k,x,i):te(k,i)}function g(k,x,P){const i=P??new o(2);return z(k,x,.5,i)}return{create:r,fromValues:a,set:v,ceil:u,floor:b,round:B,clamp:T,add:C,addScaled:R,angle:V,subtract:F,sub:I,equalsApproximately:K,equals:re,lerp:z,lerpV:L,max:X,min:Y,mulScalar:ee,scale:N,divScalar:ue,inverse:le,invert:he,cross:se,dot:de,length:Te,len:pe,lengthSq:Ge,lenSq:ze,distance:J,dist:_e,distanceSq:we,distSq:me,normalize:O,negate:Z,copy:te,clone:ye,multiply:Ee,mul:Me,divide:ie,div:be,random:Re,zero:G,transformMat4:j,transformMat3:S,rotate:l,setLength:_,truncate:f,midpoint:g}}const wi=new Map;function Zi(o){let r=wi.get(o);return r||(r=rc(o),wi.set(o,r)),r}function ic(o){function r(c,m,E){const y=new o(3);return c!==void 0&&(y[0]=c,m!==void 0&&(y[1]=m,E!==void 0&&(y[2]=E))),y}const a=r;function v(c,m,E,y){const D=y??new o(3);return D[0]=c,D[1]=m,D[2]=E,D}function u(c,m){const E=m??new o(3);return E[0]=Math.ceil(c[0]),E[1]=Math.ceil(c[1]),E[2]=Math.ceil(c[2]),E}function b(c,m){const E=m??new o(3);return E[0]=Math.floor(c[0]),E[1]=Math.floor(c[1]),E[2]=Math.floor(c[2]),E}function B(c,m){const E=m??new o(3);return E[0]=Math.round(c[0]),E[1]=Math.round(c[1]),E[2]=Math.round(c[2]),E}function T(c,m=0,E=1,y){const D=y??new o(3);return D[0]=Math.min(E,Math.max(m,c[0])),D[1]=Math.min(E,Math.max(m,c[1])),D[2]=Math.min(E,Math.max(m,c[2])),D}function C(c,m,E){const y=E??new o(3);return y[0]=c[0]+m[0],y[1]=c[1]+m[1],y[2]=c[2]+m[2],y}function R(c,m,E,y){const D=y??new o(3);return D[0]=c[0]+m[0]*E,D[1]=c[1]+m[1]*E,D[2]=c[2]+m[2]*E,D}function V(c,m){const E=c[0],y=c[1],D=c[2],W=m[0],q=m[1],oe=m[2],ne=Math.sqrt(E*E+y*y+D*D),ae=Math.sqrt(W*W+q*q+oe*oe),Pe=ne*ae,Ce=Pe&&de(c,m)/Pe;return Math.acos(Ce)}function F(c,m,E){const y=E??new o(3);return y[0]=c[0]-m[0],y[1]=c[1]-m[1],y[2]=c[2]-m[2],y}const I=F;function K(c,m){return Math.abs(c[0]-m[0])<Oe&&Math.abs(c[1]-m[1])<Oe&&Math.abs(c[2]-m[2])<Oe}function re(c,m){return c[0]===m[0]&&c[1]===m[1]&&c[2]===m[2]}function z(c,m,E,y){const D=y??new o(3);return D[0]=c[0]+E*(m[0]-c[0]),D[1]=c[1]+E*(m[1]-c[1]),D[2]=c[2]+E*(m[2]-c[2]),D}function L(c,m,E,y){const D=y??new o(3);return D[0]=c[0]+E[0]*(m[0]-c[0]),D[1]=c[1]+E[1]*(m[1]-c[1]),D[2]=c[2]+E[2]*(m[2]-c[2]),D}function X(c,m,E){const y=E??new o(3);return y[0]=Math.max(c[0],m[0]),y[1]=Math.max(c[1],m[1]),y[2]=Math.max(c[2],m[2]),y}function Y(c,m,E){const y=E??new o(3);return y[0]=Math.min(c[0],m[0]),y[1]=Math.min(c[1],m[1]),y[2]=Math.min(c[2],m[2]),y}function ee(c,m,E){const y=E??new o(3);return y[0]=c[0]*m,y[1]=c[1]*m,y[2]=c[2]*m,y}const N=ee;function ue(c,m,E){const y=E??new o(3);return y[0]=c[0]/m,y[1]=c[1]/m,y[2]=c[2]/m,y}function le(c,m){const E=m??new o(3);return E[0]=1/c[0],E[1]=1/c[1],E[2]=1/c[2],E}const he=le;function se(c,m,E){const y=E??new o(3),D=c[2]*m[0]-c[0]*m[2],W=c[0]*m[1]-c[1]*m[0];return y[0]=c[1]*m[2]-c[2]*m[1],y[1]=D,y[2]=W,y}function de(c,m){return c[0]*m[0]+c[1]*m[1]+c[2]*m[2]}function Te(c){const m=c[0],E=c[1],y=c[2];return Math.sqrt(m*m+E*E+y*y)}const pe=Te;function Ge(c){const m=c[0],E=c[1],y=c[2];return m*m+E*E+y*y}const ze=Ge;function J(c,m){const E=c[0]-m[0],y=c[1]-m[1],D=c[2]-m[2];return Math.sqrt(E*E+y*y+D*D)}const _e=J;function we(c,m){const E=c[0]-m[0],y=c[1]-m[1],D=c[2]-m[2];return E*E+y*y+D*D}const me=we;function O(c,m){const E=m??new o(3),y=c[0],D=c[1],W=c[2],q=Math.sqrt(y*y+D*D+W*W);return q>1e-5?(E[0]=y/q,E[1]=D/q,E[2]=W/q):(E[0]=0,E[1]=0,E[2]=0),E}function Z(c,m){const E=m??new o(3);return E[0]=-c[0],E[1]=-c[1],E[2]=-c[2],E}function te(c,m){const E=m??new o(3);return E[0]=c[0],E[1]=c[1],E[2]=c[2],E}const ye=te;function Ee(c,m,E){const y=E??new o(3);return y[0]=c[0]*m[0],y[1]=c[1]*m[1],y[2]=c[2]*m[2],y}const Me=Ee;function ie(c,m,E){const y=E??new o(3);return y[0]=c[0]/m[0],y[1]=c[1]/m[1],y[2]=c[2]/m[2],y}const be=ie;function Re(c=1,m){const E=m??new o(3),y=Math.random()*2*Math.PI,D=Math.random()*2-1,W=Math.sqrt(1-D*D)*c;return E[0]=Math.cos(y)*W,E[1]=Math.sin(y)*W,E[2]=D*c,E}function G(c){const m=c??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function j(c,m,E){const y=E??new o(3),D=c[0],W=c[1],q=c[2],oe=m[3]*D+m[7]*W+m[11]*q+m[15]||1;return y[0]=(m[0]*D+m[4]*W+m[8]*q+m[12])/oe,y[1]=(m[1]*D+m[5]*W+m[9]*q+m[13])/oe,y[2]=(m[2]*D+m[6]*W+m[10]*q+m[14])/oe,y}function S(c,m,E){const y=E??new o(3),D=c[0],W=c[1],q=c[2];return y[0]=D*m[0*4+0]+W*m[1*4+0]+q*m[2*4+0],y[1]=D*m[0*4+1]+W*m[1*4+1]+q*m[2*4+1],y[2]=D*m[0*4+2]+W*m[1*4+2]+q*m[2*4+2],y}function l(c,m,E){const y=E??new o(3),D=c[0],W=c[1],q=c[2];return y[0]=D*m[0]+W*m[4]+q*m[8],y[1]=D*m[1]+W*m[5]+q*m[9],y[2]=D*m[2]+W*m[6]+q*m[10],y}function _(c,m,E){const y=E??new o(3),D=m[0],W=m[1],q=m[2],oe=m[3]*2,ne=c[0],ae=c[1],Pe=c[2],Ce=W*Pe-q*ae,ke=q*ne-D*Pe,Ae=D*ae-W*ne;return y[0]=ne+Ce*oe+(W*Ae-q*ke)*2,y[1]=ae+ke*oe+(q*Ce-D*Ae)*2,y[2]=Pe+Ae*oe+(D*ke-W*Ce)*2,y}function f(c,m){const E=m??new o(3);return E[0]=c[12],E[1]=c[13],E[2]=c[14],E}function g(c,m,E){const y=E??new o(3),D=m*4;return y[0]=c[D+0],y[1]=c[D+1],y[2]=c[D+2],y}function k(c,m){const E=m??new o(3),y=c[0],D=c[1],W=c[2],q=c[4],oe=c[5],ne=c[6],ae=c[8],Pe=c[9],Ce=c[10];return E[0]=Math.sqrt(y*y+D*D+W*W),E[1]=Math.sqrt(q*q+oe*oe+ne*ne),E[2]=Math.sqrt(ae*ae+Pe*Pe+Ce*Ce),E}function x(c,m,E,y){const D=y??new o(3),W=[],q=[];return W[0]=c[0]-m[0],W[1]=c[1]-m[1],W[2]=c[2]-m[2],q[0]=W[0],q[1]=W[1]*Math.cos(E)-W[2]*Math.sin(E),q[2]=W[1]*Math.sin(E)+W[2]*Math.cos(E),D[0]=q[0]+m[0],D[1]=q[1]+m[1],D[2]=q[2]+m[2],D}function P(c,m,E,y){const D=y??new o(3),W=[],q=[];return W[0]=c[0]-m[0],W[1]=c[1]-m[1],W[2]=c[2]-m[2],q[0]=W[2]*Math.sin(E)+W[0]*Math.cos(E),q[1]=W[1],q[2]=W[2]*Math.cos(E)-W[0]*Math.sin(E),D[0]=q[0]+m[0],D[1]=q[1]+m[1],D[2]=q[2]+m[2],D}function i(c,m,E,y){const D=y??new o(3),W=[],q=[];return W[0]=c[0]-m[0],W[1]=c[1]-m[1],W[2]=c[2]-m[2],q[0]=W[0]*Math.cos(E)-W[1]*Math.sin(E),q[1]=W[0]*Math.sin(E)+W[1]*Math.cos(E),q[2]=W[2],D[0]=q[0]+m[0],D[1]=q[1]+m[1],D[2]=q[2]+m[2],D}function w(c,m,E){const y=E??new o(3);return O(c,y),ee(y,m,y)}function p(c,m,E){const y=E??new o(3);return Te(c)>m?w(c,m,y):te(c,y)}function h(c,m,E){const y=E??new o(3);return z(c,m,.5,y)}return{create:r,fromValues:a,set:v,ceil:u,floor:b,round:B,clamp:T,add:C,addScaled:R,angle:V,subtract:F,sub:I,equalsApproximately:K,equals:re,lerp:z,lerpV:L,max:X,min:Y,mulScalar:ee,scale:N,divScalar:ue,inverse:le,invert:he,cross:se,dot:de,length:Te,len:pe,lengthSq:Ge,lenSq:ze,distance:J,dist:_e,distanceSq:we,distSq:me,normalize:O,negate:Z,copy:te,clone:ye,multiply:Ee,mul:Me,divide:ie,div:be,random:Re,zero:G,transformMat4:j,transformMat4Upper3x3:S,transformMat3:l,transformQuat:_,getTranslation:f,getAxis:g,getScaling:k,rotateX:x,rotateY:P,rotateZ:i,setLength:w,truncate:p,midpoint:h}}const xi=new Map;function Rs(o){let r=xi.get(o);return r||(r=ic(o),xi.set(o,r)),r}function oc(o){const r=Zi(o),a=Rs(o);function v(l,_,f,g,k,x,P,i,w){const p=new o(12);return p[3]=0,p[7]=0,p[11]=0,l!==void 0&&(p[0]=l,_!==void 0&&(p[1]=_,f!==void 0&&(p[2]=f,g!==void 0&&(p[4]=g,k!==void 0&&(p[5]=k,x!==void 0&&(p[6]=x,P!==void 0&&(p[8]=P,i!==void 0&&(p[9]=i,w!==void 0&&(p[10]=w))))))))),p}function u(l,_,f,g,k,x,P,i,w,p){const h=p??new o(12);return h[0]=l,h[1]=_,h[2]=f,h[3]=0,h[4]=g,h[5]=k,h[6]=x,h[7]=0,h[8]=P,h[9]=i,h[10]=w,h[11]=0,h}function b(l,_){const f=_??new o(12);return f[0]=l[0],f[1]=l[1],f[2]=l[2],f[3]=0,f[4]=l[4],f[5]=l[5],f[6]=l[6],f[7]=0,f[8]=l[8],f[9]=l[9],f[10]=l[10],f[11]=0,f}function B(l,_){const f=_??new o(12),g=l[0],k=l[1],x=l[2],P=l[3],i=g+g,w=k+k,p=x+x,h=g*i,c=k*i,m=k*w,E=x*i,y=x*w,D=x*p,W=P*i,q=P*w,oe=P*p;return f[0]=1-m-D,f[1]=c+oe,f[2]=E-q,f[3]=0,f[4]=c-oe,f[5]=1-h-D,f[6]=y+W,f[7]=0,f[8]=E+q,f[9]=y-W,f[10]=1-h-m,f[11]=0,f}function T(l,_){const f=_??new o(12);return f[0]=-l[0],f[1]=-l[1],f[2]=-l[2],f[4]=-l[4],f[5]=-l[5],f[6]=-l[6],f[8]=-l[8],f[9]=-l[9],f[10]=-l[10],f}function C(l,_,f){const g=f??new o(12);return g[0]=l[0]*_,g[1]=l[1]*_,g[2]=l[2]*_,g[4]=l[4]*_,g[5]=l[5]*_,g[6]=l[6]*_,g[8]=l[8]*_,g[9]=l[9]*_,g[10]=l[10]*_,g}const R=C;function V(l,_,f){const g=f??new o(12);return g[0]=l[0]+_[0],g[1]=l[1]+_[1],g[2]=l[2]+_[2],g[4]=l[4]+_[4],g[5]=l[5]+_[5],g[6]=l[6]+_[6],g[8]=l[8]+_[8],g[9]=l[9]+_[9],g[10]=l[10]+_[10],g}function F(l,_){const f=_??new o(12);return f[0]=l[0],f[1]=l[1],f[2]=l[2],f[4]=l[4],f[5]=l[5],f[6]=l[6],f[8]=l[8],f[9]=l[9],f[10]=l[10],f}const I=F;function K(l,_){return Math.abs(l[0]-_[0])<Oe&&Math.abs(l[1]-_[1])<Oe&&Math.abs(l[2]-_[2])<Oe&&Math.abs(l[4]-_[4])<Oe&&Math.abs(l[5]-_[5])<Oe&&Math.abs(l[6]-_[6])<Oe&&Math.abs(l[8]-_[8])<Oe&&Math.abs(l[9]-_[9])<Oe&&Math.abs(l[10]-_[10])<Oe}function re(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]&&l[4]===_[4]&&l[5]===_[5]&&l[6]===_[6]&&l[8]===_[8]&&l[9]===_[9]&&l[10]===_[10]}function z(l){const _=l??new o(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function L(l,_){const f=_??new o(12);if(f===l){let m;return m=l[1],l[1]=l[4],l[4]=m,m=l[2],l[2]=l[8],l[8]=m,m=l[6],l[6]=l[9],l[9]=m,f}const g=l[0*4+0],k=l[0*4+1],x=l[0*4+2],P=l[1*4+0],i=l[1*4+1],w=l[1*4+2],p=l[2*4+0],h=l[2*4+1],c=l[2*4+2];return f[0]=g,f[1]=P,f[2]=p,f[4]=k,f[5]=i,f[6]=h,f[8]=x,f[9]=w,f[10]=c,f}function X(l,_){const f=_??new o(12),g=l[0*4+0],k=l[0*4+1],x=l[0*4+2],P=l[1*4+0],i=l[1*4+1],w=l[1*4+2],p=l[2*4+0],h=l[2*4+1],c=l[2*4+2],m=c*i-w*h,E=-c*P+w*p,y=h*P-i*p,D=1/(g*m+k*E+x*y);return f[0]=m*D,f[1]=(-c*k+x*h)*D,f[2]=(w*k-x*i)*D,f[4]=E*D,f[5]=(c*g-x*p)*D,f[6]=(-w*g+x*P)*D,f[8]=y*D,f[9]=(-h*g+k*p)*D,f[10]=(i*g-k*P)*D,f}function Y(l){const _=l[0],f=l[0*4+1],g=l[0*4+2],k=l[1*4+0],x=l[1*4+1],P=l[1*4+2],i=l[2*4+0],w=l[2*4+1],p=l[2*4+2];return _*(x*p-w*P)-k*(f*p-w*g)+i*(f*P-x*g)}const ee=X;function N(l,_,f){const g=f??new o(12),k=l[0],x=l[1],P=l[2],i=l[4+0],w=l[4+1],p=l[4+2],h=l[8+0],c=l[8+1],m=l[8+2],E=_[0],y=_[1],D=_[2],W=_[4+0],q=_[4+1],oe=_[4+2],ne=_[8+0],ae=_[8+1],Pe=_[8+2];return g[0]=k*E+i*y+h*D,g[1]=x*E+w*y+c*D,g[2]=P*E+p*y+m*D,g[4]=k*W+i*q+h*oe,g[5]=x*W+w*q+c*oe,g[6]=P*W+p*q+m*oe,g[8]=k*ne+i*ae+h*Pe,g[9]=x*ne+w*ae+c*Pe,g[10]=P*ne+p*ae+m*Pe,g}const ue=N;function le(l,_,f){const g=f??z();return l!==g&&(g[0]=l[0],g[1]=l[1],g[2]=l[2],g[4]=l[4],g[5]=l[5],g[6]=l[6]),g[8]=_[0],g[9]=_[1],g[10]=1,g}function he(l,_){const f=_??r.create();return f[0]=l[8],f[1]=l[9],f}function se(l,_,f){const g=f??r.create(),k=_*4;return g[0]=l[k+0],g[1]=l[k+1],g}function de(l,_,f,g){const k=g===l?l:F(l,g),x=f*4;return k[x+0]=_[0],k[x+1]=_[1],k}function Te(l,_){const f=_??r.create(),g=l[0],k=l[1],x=l[4],P=l[5];return f[0]=Math.sqrt(g*g+k*k),f[1]=Math.sqrt(x*x+P*P),f}function pe(l,_){const f=_??a.create(),g=l[0],k=l[1],x=l[2],P=l[4],i=l[5],w=l[6],p=l[8],h=l[9],c=l[10];return f[0]=Math.sqrt(g*g+k*k+x*x),f[1]=Math.sqrt(P*P+i*i+w*w),f[2]=Math.sqrt(p*p+h*h+c*c),f}function Ge(l,_){const f=_??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=l[0],f[9]=l[1],f[10]=1,f}function ze(l,_,f){const g=f??new o(12),k=_[0],x=_[1],P=l[0],i=l[1],w=l[2],p=l[1*4+0],h=l[1*4+1],c=l[1*4+2],m=l[2*4+0],E=l[2*4+1],y=l[2*4+2];return l!==g&&(g[0]=P,g[1]=i,g[2]=w,g[4]=p,g[5]=h,g[6]=c),g[8]=P*k+p*x+m,g[9]=i*k+h*x+E,g[10]=w*k+c*x+y,g}function J(l,_){const f=_??new o(12),g=Math.cos(l),k=Math.sin(l);return f[0]=g,f[1]=k,f[2]=0,f[4]=-k,f[5]=g,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function _e(l,_,f){const g=f??new o(12),k=l[0*4+0],x=l[0*4+1],P=l[0*4+2],i=l[1*4+0],w=l[1*4+1],p=l[1*4+2],h=Math.cos(_),c=Math.sin(_);return g[0]=h*k+c*i,g[1]=h*x+c*w,g[2]=h*P+c*p,g[4]=h*i-c*k,g[5]=h*w-c*x,g[6]=h*p-c*P,l!==g&&(g[8]=l[8],g[9]=l[9],g[10]=l[10]),g}function we(l,_){const f=_??new o(12),g=Math.cos(l),k=Math.sin(l);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=g,f[6]=k,f[8]=0,f[9]=-k,f[10]=g,f}function me(l,_,f){const g=f??new o(12),k=l[4],x=l[5],P=l[6],i=l[8],w=l[9],p=l[10],h=Math.cos(_),c=Math.sin(_);return g[4]=h*k+c*i,g[5]=h*x+c*w,g[6]=h*P+c*p,g[8]=h*i-c*k,g[9]=h*w-c*x,g[10]=h*p-c*P,l!==g&&(g[0]=l[0],g[1]=l[1],g[2]=l[2]),g}function O(l,_){const f=_??new o(12),g=Math.cos(l),k=Math.sin(l);return f[0]=g,f[1]=0,f[2]=-k,f[4]=0,f[5]=1,f[6]=0,f[8]=k,f[9]=0,f[10]=g,f}function Z(l,_,f){const g=f??new o(12),k=l[0*4+0],x=l[0*4+1],P=l[0*4+2],i=l[2*4+0],w=l[2*4+1],p=l[2*4+2],h=Math.cos(_),c=Math.sin(_);return g[0]=h*k-c*i,g[1]=h*x-c*w,g[2]=h*P-c*p,g[8]=h*i+c*k,g[9]=h*w+c*x,g[10]=h*p+c*P,l!==g&&(g[4]=l[4],g[5]=l[5],g[6]=l[6]),g}const te=J,ye=_e;function Ee(l,_){const f=_??new o(12);return f[0]=l[0],f[1]=0,f[2]=0,f[4]=0,f[5]=l[1],f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function Me(l,_,f){const g=f??new o(12),k=_[0],x=_[1];return g[0]=k*l[0*4+0],g[1]=k*l[0*4+1],g[2]=k*l[0*4+2],g[4]=x*l[1*4+0],g[5]=x*l[1*4+1],g[6]=x*l[1*4+2],l!==g&&(g[8]=l[8],g[9]=l[9],g[10]=l[10]),g}function ie(l,_){const f=_??new o(12);return f[0]=l[0],f[1]=0,f[2]=0,f[4]=0,f[5]=l[1],f[6]=0,f[8]=0,f[9]=0,f[10]=l[2],f}function be(l,_,f){const g=f??new o(12),k=_[0],x=_[1],P=_[2];return g[0]=k*l[0*4+0],g[1]=k*l[0*4+1],g[2]=k*l[0*4+2],g[4]=x*l[1*4+0],g[5]=x*l[1*4+1],g[6]=x*l[1*4+2],g[8]=P*l[2*4+0],g[9]=P*l[2*4+1],g[10]=P*l[2*4+2],g}function Re(l,_){const f=_??new o(12);return f[0]=l,f[1]=0,f[2]=0,f[4]=0,f[5]=l,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function G(l,_,f){const g=f??new o(12);return g[0]=_*l[0*4+0],g[1]=_*l[0*4+1],g[2]=_*l[0*4+2],g[4]=_*l[1*4+0],g[5]=_*l[1*4+1],g[6]=_*l[1*4+2],l!==g&&(g[8]=l[8],g[9]=l[9],g[10]=l[10]),g}function j(l,_){const f=_??new o(12);return f[0]=l,f[1]=0,f[2]=0,f[4]=0,f[5]=l,f[6]=0,f[8]=0,f[9]=0,f[10]=l,f}function S(l,_,f){const g=f??new o(12);return g[0]=_*l[0*4+0],g[1]=_*l[0*4+1],g[2]=_*l[0*4+2],g[4]=_*l[1*4+0],g[5]=_*l[1*4+1],g[6]=_*l[1*4+2],g[8]=_*l[2*4+0],g[9]=_*l[2*4+1],g[10]=_*l[2*4+2],g}return{add:V,clone:I,copy:F,create:v,determinant:Y,equals:re,equalsApproximately:K,fromMat4:b,fromQuat:B,get3DScaling:pe,getAxis:se,getScaling:Te,getTranslation:he,identity:z,inverse:X,invert:ee,mul:ue,mulScalar:R,multiply:N,multiplyScalar:C,negate:T,rotate:_e,rotateX:me,rotateY:Z,rotateZ:ye,rotation:J,rotationX:we,rotationY:O,rotationZ:te,scale:Me,scale3D:be,scaling:Ee,scaling3D:ie,set:u,setAxis:de,setTranslation:le,translate:ze,translation:Ge,transpose:L,uniformScale:G,uniformScale3D:S,uniformScaling:Re,uniformScaling3D:j}}const yi=new Map;function ac(o){let r=yi.get(o);return r||(r=oc(o),yi.set(o,r)),r}function lc(o){const r=Rs(o);function a(i,w,p,h,c,m,E,y,D,W,q,oe,ne,ae,Pe,Ce){const ke=new o(16);return i!==void 0&&(ke[0]=i,w!==void 0&&(ke[1]=w,p!==void 0&&(ke[2]=p,h!==void 0&&(ke[3]=h,c!==void 0&&(ke[4]=c,m!==void 0&&(ke[5]=m,E!==void 0&&(ke[6]=E,y!==void 0&&(ke[7]=y,D!==void 0&&(ke[8]=D,W!==void 0&&(ke[9]=W,q!==void 0&&(ke[10]=q,oe!==void 0&&(ke[11]=oe,ne!==void 0&&(ke[12]=ne,ae!==void 0&&(ke[13]=ae,Pe!==void 0&&(ke[14]=Pe,Ce!==void 0&&(ke[15]=Ce)))))))))))))))),ke}function v(i,w,p,h,c,m,E,y,D,W,q,oe,ne,ae,Pe,Ce,ke){const Ae=ke??new o(16);return Ae[0]=i,Ae[1]=w,Ae[2]=p,Ae[3]=h,Ae[4]=c,Ae[5]=m,Ae[6]=E,Ae[7]=y,Ae[8]=D,Ae[9]=W,Ae[10]=q,Ae[11]=oe,Ae[12]=ne,Ae[13]=ae,Ae[14]=Pe,Ae[15]=Ce,Ae}function u(i,w){const p=w??new o(16);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=0,p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=0,p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function b(i,w){const p=w??new o(16),h=i[0],c=i[1],m=i[2],E=i[3],y=h+h,D=c+c,W=m+m,q=h*y,oe=c*y,ne=c*D,ae=m*y,Pe=m*D,Ce=m*W,ke=E*y,Ae=E*D,Ie=E*W;return p[0]=1-ne-Ce,p[1]=oe+Ie,p[2]=ae-Ae,p[3]=0,p[4]=oe-Ie,p[5]=1-q-Ce,p[6]=Pe+ke,p[7]=0,p[8]=ae+Ae,p[9]=Pe-ke,p[10]=1-q-ne,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function B(i,w){const p=w??new o(16);return p[0]=-i[0],p[1]=-i[1],p[2]=-i[2],p[3]=-i[3],p[4]=-i[4],p[5]=-i[5],p[6]=-i[6],p[7]=-i[7],p[8]=-i[8],p[9]=-i[9],p[10]=-i[10],p[11]=-i[11],p[12]=-i[12],p[13]=-i[13],p[14]=-i[14],p[15]=-i[15],p}function T(i,w,p){const h=p??new o(16);return h[0]=i[0]+w[0],h[1]=i[1]+w[1],h[2]=i[2]+w[2],h[3]=i[3]+w[3],h[4]=i[4]+w[4],h[5]=i[5]+w[5],h[6]=i[6]+w[6],h[7]=i[7]+w[7],h[8]=i[8]+w[8],h[9]=i[9]+w[9],h[10]=i[10]+w[10],h[11]=i[11]+w[11],h[12]=i[12]+w[12],h[13]=i[13]+w[13],h[14]=i[14]+w[14],h[15]=i[15]+w[15],h}function C(i,w,p){const h=p??new o(16);return h[0]=i[0]*w,h[1]=i[1]*w,h[2]=i[2]*w,h[3]=i[3]*w,h[4]=i[4]*w,h[5]=i[5]*w,h[6]=i[6]*w,h[7]=i[7]*w,h[8]=i[8]*w,h[9]=i[9]*w,h[10]=i[10]*w,h[11]=i[11]*w,h[12]=i[12]*w,h[13]=i[13]*w,h[14]=i[14]*w,h[15]=i[15]*w,h}const R=C;function V(i,w){const p=w??new o(16);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15],p}const F=V;function I(i,w){return Math.abs(i[0]-w[0])<Oe&&Math.abs(i[1]-w[1])<Oe&&Math.abs(i[2]-w[2])<Oe&&Math.abs(i[3]-w[3])<Oe&&Math.abs(i[4]-w[4])<Oe&&Math.abs(i[5]-w[5])<Oe&&Math.abs(i[6]-w[6])<Oe&&Math.abs(i[7]-w[7])<Oe&&Math.abs(i[8]-w[8])<Oe&&Math.abs(i[9]-w[9])<Oe&&Math.abs(i[10]-w[10])<Oe&&Math.abs(i[11]-w[11])<Oe&&Math.abs(i[12]-w[12])<Oe&&Math.abs(i[13]-w[13])<Oe&&Math.abs(i[14]-w[14])<Oe&&Math.abs(i[15]-w[15])<Oe}function K(i,w){return i[0]===w[0]&&i[1]===w[1]&&i[2]===w[2]&&i[3]===w[3]&&i[4]===w[4]&&i[5]===w[5]&&i[6]===w[6]&&i[7]===w[7]&&i[8]===w[8]&&i[9]===w[9]&&i[10]===w[10]&&i[11]===w[11]&&i[12]===w[12]&&i[13]===w[13]&&i[14]===w[14]&&i[15]===w[15]}function re(i){const w=i??new o(16);return w[0]=1,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=1,w[6]=0,w[7]=0,w[8]=0,w[9]=0,w[10]=1,w[11]=0,w[12]=0,w[13]=0,w[14]=0,w[15]=1,w}function z(i,w){const p=w??new o(16);if(p===i){let Fe;return Fe=i[1],i[1]=i[4],i[4]=Fe,Fe=i[2],i[2]=i[8],i[8]=Fe,Fe=i[3],i[3]=i[12],i[12]=Fe,Fe=i[6],i[6]=i[9],i[9]=Fe,Fe=i[7],i[7]=i[13],i[13]=Fe,Fe=i[11],i[11]=i[14],i[14]=Fe,p}const h=i[0*4+0],c=i[0*4+1],m=i[0*4+2],E=i[0*4+3],y=i[1*4+0],D=i[1*4+1],W=i[1*4+2],q=i[1*4+3],oe=i[2*4+0],ne=i[2*4+1],ae=i[2*4+2],Pe=i[2*4+3],Ce=i[3*4+0],ke=i[3*4+1],Ae=i[3*4+2],Ie=i[3*4+3];return p[0]=h,p[1]=y,p[2]=oe,p[3]=Ce,p[4]=c,p[5]=D,p[6]=ne,p[7]=ke,p[8]=m,p[9]=W,p[10]=ae,p[11]=Ae,p[12]=E,p[13]=q,p[14]=Pe,p[15]=Ie,p}function L(i,w){const p=w??new o(16),h=i[0*4+0],c=i[0*4+1],m=i[0*4+2],E=i[0*4+3],y=i[1*4+0],D=i[1*4+1],W=i[1*4+2],q=i[1*4+3],oe=i[2*4+0],ne=i[2*4+1],ae=i[2*4+2],Pe=i[2*4+3],Ce=i[3*4+0],ke=i[3*4+1],Ae=i[3*4+2],Ie=i[3*4+3],Fe=ae*Ie,Ze=Ae*Pe,tt=W*Ie,We=Ae*q,Ne=W*Pe,Ke=ae*q,Ve=m*Ie,ot=Ae*E,ct=m*Pe,nt=ae*E,lt=m*q,Xe=W*E,Je=oe*ke,je=Ce*ne,et=y*ke,_t=Ce*D,at=y*ne,Pt=oe*D,ut=h*ke,dt=Ce*c,Mt=h*ne,Tt=oe*c,It=h*D,Gt=y*c,Ht=Fe*D+We*ne+Ne*ke-(Ze*D+tt*ne+Ke*ke),Rt=Ze*c+Ve*ne+nt*ke-(Fe*c+ot*ne+ct*ke),Dt=tt*c+ot*D+lt*ke-(We*c+Ve*D+Xe*ke),Ft=Ke*c+ct*D+Xe*ne-(Ne*c+nt*D+lt*ne),it=1/(h*Ht+y*Rt+oe*Dt+Ce*Ft);return p[0]=it*Ht,p[1]=it*Rt,p[2]=it*Dt,p[3]=it*Ft,p[4]=it*(Ze*y+tt*oe+Ke*Ce-(Fe*y+We*oe+Ne*Ce)),p[5]=it*(Fe*h+ot*oe+ct*Ce-(Ze*h+Ve*oe+nt*Ce)),p[6]=it*(We*h+Ve*y+Xe*Ce-(tt*h+ot*y+lt*Ce)),p[7]=it*(Ne*h+nt*y+lt*oe-(Ke*h+ct*y+Xe*oe)),p[8]=it*(Je*q+_t*Pe+at*Ie-(je*q+et*Pe+Pt*Ie)),p[9]=it*(je*E+ut*Pe+Tt*Ie-(Je*E+dt*Pe+Mt*Ie)),p[10]=it*(et*E+dt*q+It*Ie-(_t*E+ut*q+Gt*Ie)),p[11]=it*(Pt*E+Mt*q+Gt*Pe-(at*E+Tt*q+It*Pe)),p[12]=it*(et*ae+Pt*Ae+je*W-(at*Ae+Je*W+_t*ae)),p[13]=it*(Mt*Ae+Je*m+dt*ae-(ut*ae+Tt*Ae+je*m)),p[14]=it*(ut*W+Gt*Ae+_t*m-(It*Ae+et*m+dt*W)),p[15]=it*(It*ae+at*m+Tt*W-(Mt*W+Gt*ae+Pt*m)),p}function X(i){const w=i[0],p=i[0*4+1],h=i[0*4+2],c=i[0*4+3],m=i[1*4+0],E=i[1*4+1],y=i[1*4+2],D=i[1*4+3],W=i[2*4+0],q=i[2*4+1],oe=i[2*4+2],ne=i[2*4+3],ae=i[3*4+0],Pe=i[3*4+1],Ce=i[3*4+2],ke=i[3*4+3],Ae=oe*ke,Ie=Ce*ne,Fe=y*ke,Ze=Ce*D,tt=y*ne,We=oe*D,Ne=h*ke,Ke=Ce*c,Ve=h*ne,ot=oe*c,ct=h*D,nt=y*c,lt=Ae*E+Ze*q+tt*Pe-(Ie*E+Fe*q+We*Pe),Xe=Ie*p+Ne*q+ot*Pe-(Ae*p+Ke*q+Ve*Pe),Je=Fe*p+Ke*E+ct*Pe-(Ze*p+Ne*E+nt*Pe),je=We*p+Ve*E+nt*q-(tt*p+ot*E+ct*q);return w*lt+m*Xe+W*Je+ae*je}const Y=L;function ee(i,w,p){const h=p??new o(16),c=i[0],m=i[1],E=i[2],y=i[3],D=i[4+0],W=i[4+1],q=i[4+2],oe=i[4+3],ne=i[8+0],ae=i[8+1],Pe=i[8+2],Ce=i[8+3],ke=i[12+0],Ae=i[12+1],Ie=i[12+2],Fe=i[12+3],Ze=w[0],tt=w[1],We=w[2],Ne=w[3],Ke=w[4+0],Ve=w[4+1],ot=w[4+2],ct=w[4+3],nt=w[8+0],lt=w[8+1],Xe=w[8+2],Je=w[8+3],je=w[12+0],et=w[12+1],_t=w[12+2],at=w[12+3];return h[0]=c*Ze+D*tt+ne*We+ke*Ne,h[1]=m*Ze+W*tt+ae*We+Ae*Ne,h[2]=E*Ze+q*tt+Pe*We+Ie*Ne,h[3]=y*Ze+oe*tt+Ce*We+Fe*Ne,h[4]=c*Ke+D*Ve+ne*ot+ke*ct,h[5]=m*Ke+W*Ve+ae*ot+Ae*ct,h[6]=E*Ke+q*Ve+Pe*ot+Ie*ct,h[7]=y*Ke+oe*Ve+Ce*ot+Fe*ct,h[8]=c*nt+D*lt+ne*Xe+ke*Je,h[9]=m*nt+W*lt+ae*Xe+Ae*Je,h[10]=E*nt+q*lt+Pe*Xe+Ie*Je,h[11]=y*nt+oe*lt+Ce*Xe+Fe*Je,h[12]=c*je+D*et+ne*_t+ke*at,h[13]=m*je+W*et+ae*_t+Ae*at,h[14]=E*je+q*et+Pe*_t+Ie*at,h[15]=y*je+oe*et+Ce*_t+Fe*at,h}const N=ee;function ue(i,w,p){const h=p??re();return i!==h&&(h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=i[3],h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=i[7],h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=i[11]),h[12]=w[0],h[13]=w[1],h[14]=w[2],h[15]=1,h}function le(i,w){const p=w??r.create();return p[0]=i[12],p[1]=i[13],p[2]=i[14],p}function he(i,w,p){const h=p??r.create(),c=w*4;return h[0]=i[c+0],h[1]=i[c+1],h[2]=i[c+2],h}function se(i,w,p,h){const c=h===i?h:V(i,h),m=p*4;return c[m+0]=w[0],c[m+1]=w[1],c[m+2]=w[2],c}function de(i,w){const p=w??r.create(),h=i[0],c=i[1],m=i[2],E=i[4],y=i[5],D=i[6],W=i[8],q=i[9],oe=i[10];return p[0]=Math.sqrt(h*h+c*c+m*m),p[1]=Math.sqrt(E*E+y*y+D*D),p[2]=Math.sqrt(W*W+q*q+oe*oe),p}function Te(i,w,p,h,c){const m=c??new o(16),E=Math.tan(Math.PI*.5-.5*i);if(m[0]=E/w,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=E,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(h)){const y=1/(p-h);m[10]=h*y,m[14]=h*p*y}else m[10]=-1,m[14]=-p;return m}function pe(i,w,p,h=1/0,c){const m=c??new o(16),E=1/Math.tan(i*.5);if(m[0]=E/w,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=E,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,h===1/0)m[10]=0,m[14]=p;else{const y=1/(h-p);m[10]=p*y,m[14]=h*p*y}return m}function Ge(i,w,p,h,c,m,E){const y=E??new o(16);return y[0]=2/(w-i),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(h-p),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(c-m),y[11]=0,y[12]=(w+i)/(i-w),y[13]=(h+p)/(p-h),y[14]=c/(c-m),y[15]=1,y}function ze(i,w,p,h,c,m,E){const y=E??new o(16),D=w-i,W=h-p,q=c-m;return y[0]=2*c/D,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*c/W,y[6]=0,y[7]=0,y[8]=(i+w)/D,y[9]=(h+p)/W,y[10]=m/q,y[11]=-1,y[12]=0,y[13]=0,y[14]=c*m/q,y[15]=0,y}function J(i,w,p,h,c,m=1/0,E){const y=E??new o(16),D=w-i,W=h-p;if(y[0]=2*c/D,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*c/W,y[6]=0,y[7]=0,y[8]=(i+w)/D,y[9]=(h+p)/W,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,m===1/0)y[10]=0,y[14]=c;else{const q=1/(m-c);y[10]=c*q,y[14]=m*c*q}return y}const _e=r.create(),we=r.create(),me=r.create();function O(i,w,p,h){const c=h??new o(16);return r.normalize(r.subtract(w,i,me),me),r.normalize(r.cross(p,me,_e),_e),r.normalize(r.cross(me,_e,we),we),c[0]=_e[0],c[1]=_e[1],c[2]=_e[2],c[3]=0,c[4]=we[0],c[5]=we[1],c[6]=we[2],c[7]=0,c[8]=me[0],c[9]=me[1],c[10]=me[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function Z(i,w,p,h){const c=h??new o(16);return r.normalize(r.subtract(i,w,me),me),r.normalize(r.cross(p,me,_e),_e),r.normalize(r.cross(me,_e,we),we),c[0]=_e[0],c[1]=_e[1],c[2]=_e[2],c[3]=0,c[4]=we[0],c[5]=we[1],c[6]=we[2],c[7]=0,c[8]=me[0],c[9]=me[1],c[10]=me[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function te(i,w,p,h){const c=h??new o(16);return r.normalize(r.subtract(i,w,me),me),r.normalize(r.cross(p,me,_e),_e),r.normalize(r.cross(me,_e,we),we),c[0]=_e[0],c[1]=we[0],c[2]=me[0],c[3]=0,c[4]=_e[1],c[5]=we[1],c[6]=me[1],c[7]=0,c[8]=_e[2],c[9]=we[2],c[10]=me[2],c[11]=0,c[12]=-(_e[0]*i[0]+_e[1]*i[1]+_e[2]*i[2]),c[13]=-(we[0]*i[0]+we[1]*i[1]+we[2]*i[2]),c[14]=-(me[0]*i[0]+me[1]*i[1]+me[2]*i[2]),c[15]=1,c}function ye(i,w){const p=w??new o(16);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=i[0],p[13]=i[1],p[14]=i[2],p[15]=1,p}function Ee(i,w,p){const h=p??new o(16),c=w[0],m=w[1],E=w[2],y=i[0],D=i[1],W=i[2],q=i[3],oe=i[1*4+0],ne=i[1*4+1],ae=i[1*4+2],Pe=i[1*4+3],Ce=i[2*4+0],ke=i[2*4+1],Ae=i[2*4+2],Ie=i[2*4+3],Fe=i[3*4+0],Ze=i[3*4+1],tt=i[3*4+2],We=i[3*4+3];return i!==h&&(h[0]=y,h[1]=D,h[2]=W,h[3]=q,h[4]=oe,h[5]=ne,h[6]=ae,h[7]=Pe,h[8]=Ce,h[9]=ke,h[10]=Ae,h[11]=Ie),h[12]=y*c+oe*m+Ce*E+Fe,h[13]=D*c+ne*m+ke*E+Ze,h[14]=W*c+ae*m+Ae*E+tt,h[15]=q*c+Pe*m+Ie*E+We,h}function Me(i,w){const p=w??new o(16),h=Math.cos(i),c=Math.sin(i);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=h,p[6]=c,p[7]=0,p[8]=0,p[9]=-c,p[10]=h,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function ie(i,w,p){const h=p??new o(16),c=i[4],m=i[5],E=i[6],y=i[7],D=i[8],W=i[9],q=i[10],oe=i[11],ne=Math.cos(w),ae=Math.sin(w);return h[4]=ne*c+ae*D,h[5]=ne*m+ae*W,h[6]=ne*E+ae*q,h[7]=ne*y+ae*oe,h[8]=ne*D-ae*c,h[9]=ne*W-ae*m,h[10]=ne*q-ae*E,h[11]=ne*oe-ae*y,i!==h&&(h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=i[3],h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15]),h}function be(i,w){const p=w??new o(16),h=Math.cos(i),c=Math.sin(i);return p[0]=h,p[1]=0,p[2]=-c,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=c,p[9]=0,p[10]=h,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function Re(i,w,p){const h=p??new o(16),c=i[0*4+0],m=i[0*4+1],E=i[0*4+2],y=i[0*4+3],D=i[2*4+0],W=i[2*4+1],q=i[2*4+2],oe=i[2*4+3],ne=Math.cos(w),ae=Math.sin(w);return h[0]=ne*c-ae*D,h[1]=ne*m-ae*W,h[2]=ne*E-ae*q,h[3]=ne*y-ae*oe,h[8]=ne*D+ae*c,h[9]=ne*W+ae*m,h[10]=ne*q+ae*E,h[11]=ne*oe+ae*y,i!==h&&(h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=i[7],h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15]),h}function G(i,w){const p=w??new o(16),h=Math.cos(i),c=Math.sin(i);return p[0]=h,p[1]=c,p[2]=0,p[3]=0,p[4]=-c,p[5]=h,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function j(i,w,p){const h=p??new o(16),c=i[0*4+0],m=i[0*4+1],E=i[0*4+2],y=i[0*4+3],D=i[1*4+0],W=i[1*4+1],q=i[1*4+2],oe=i[1*4+3],ne=Math.cos(w),ae=Math.sin(w);return h[0]=ne*c+ae*D,h[1]=ne*m+ae*W,h[2]=ne*E+ae*q,h[3]=ne*y+ae*oe,h[4]=ne*D-ae*c,h[5]=ne*W-ae*m,h[6]=ne*q-ae*E,h[7]=ne*oe-ae*y,i!==h&&(h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=i[11],h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15]),h}function S(i,w,p){const h=p??new o(16);let c=i[0],m=i[1],E=i[2];const y=Math.sqrt(c*c+m*m+E*E);c/=y,m/=y,E/=y;const D=c*c,W=m*m,q=E*E,oe=Math.cos(w),ne=Math.sin(w),ae=1-oe;return h[0]=D+(1-D)*oe,h[1]=c*m*ae+E*ne,h[2]=c*E*ae-m*ne,h[3]=0,h[4]=c*m*ae-E*ne,h[5]=W+(1-W)*oe,h[6]=m*E*ae+c*ne,h[7]=0,h[8]=c*E*ae+m*ne,h[9]=m*E*ae-c*ne,h[10]=q+(1-q)*oe,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const l=S;function _(i,w,p,h){const c=h??new o(16);let m=w[0],E=w[1],y=w[2];const D=Math.sqrt(m*m+E*E+y*y);m/=D,E/=D,y/=D;const W=m*m,q=E*E,oe=y*y,ne=Math.cos(p),ae=Math.sin(p),Pe=1-ne,Ce=W+(1-W)*ne,ke=m*E*Pe+y*ae,Ae=m*y*Pe-E*ae,Ie=m*E*Pe-y*ae,Fe=q+(1-q)*ne,Ze=E*y*Pe+m*ae,tt=m*y*Pe+E*ae,We=E*y*Pe-m*ae,Ne=oe+(1-oe)*ne,Ke=i[0],Ve=i[1],ot=i[2],ct=i[3],nt=i[4],lt=i[5],Xe=i[6],Je=i[7],je=i[8],et=i[9],_t=i[10],at=i[11];return c[0]=Ce*Ke+ke*nt+Ae*je,c[1]=Ce*Ve+ke*lt+Ae*et,c[2]=Ce*ot+ke*Xe+Ae*_t,c[3]=Ce*ct+ke*Je+Ae*at,c[4]=Ie*Ke+Fe*nt+Ze*je,c[5]=Ie*Ve+Fe*lt+Ze*et,c[6]=Ie*ot+Fe*Xe+Ze*_t,c[7]=Ie*ct+Fe*Je+Ze*at,c[8]=tt*Ke+We*nt+Ne*je,c[9]=tt*Ve+We*lt+Ne*et,c[10]=tt*ot+We*Xe+Ne*_t,c[11]=tt*ct+We*Je+Ne*at,i!==c&&(c[12]=i[12],c[13]=i[13],c[14]=i[14],c[15]=i[15]),c}const f=_;function g(i,w){const p=w??new o(16);return p[0]=i[0],p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=i[1],p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=i[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function k(i,w,p){const h=p??new o(16),c=w[0],m=w[1],E=w[2];return h[0]=c*i[0*4+0],h[1]=c*i[0*4+1],h[2]=c*i[0*4+2],h[3]=c*i[0*4+3],h[4]=m*i[1*4+0],h[5]=m*i[1*4+1],h[6]=m*i[1*4+2],h[7]=m*i[1*4+3],h[8]=E*i[2*4+0],h[9]=E*i[2*4+1],h[10]=E*i[2*4+2],h[11]=E*i[2*4+3],i!==h&&(h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15]),h}function x(i,w){const p=w??new o(16);return p[0]=i,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=i,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=i,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function P(i,w,p){const h=p??new o(16);return h[0]=w*i[0*4+0],h[1]=w*i[0*4+1],h[2]=w*i[0*4+2],h[3]=w*i[0*4+3],h[4]=w*i[1*4+0],h[5]=w*i[1*4+1],h[6]=w*i[1*4+2],h[7]=w*i[1*4+3],h[8]=w*i[2*4+0],h[9]=w*i[2*4+1],h[10]=w*i[2*4+2],h[11]=w*i[2*4+3],i!==h&&(h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15]),h}return{add:T,aim:O,axisRotate:_,axisRotation:S,cameraAim:Z,clone:F,copy:V,create:a,determinant:X,equals:K,equalsApproximately:I,fromMat3:u,fromQuat:b,frustum:ze,frustumReverseZ:J,getAxis:he,getScaling:de,getTranslation:le,identity:re,inverse:L,invert:Y,lookAt:te,mul:N,mulScalar:R,multiply:ee,multiplyScalar:C,negate:B,ortho:Ge,perspective:Te,perspectiveReverseZ:pe,rotate:f,rotateX:ie,rotateY:Re,rotateZ:j,rotation:l,rotationX:Me,rotationY:be,rotationZ:G,scale:k,scaling:g,set:v,setAxis:se,setTranslation:ue,translate:Ee,translation:ye,transpose:z,uniformScale:P,uniformScaling:x}}const Pi=new Map;function cc(o){let r=Pi.get(o);return r||(r=lc(o),Pi.set(o,r)),r}function uc(o){const r=Rs(o);function a(G,j,S,l){const _=new o(4);return G!==void 0&&(_[0]=G,j!==void 0&&(_[1]=j,S!==void 0&&(_[2]=S,l!==void 0&&(_[3]=l)))),_}const v=a;function u(G,j,S,l,_){const f=_??new o(4);return f[0]=G,f[1]=j,f[2]=S,f[3]=l,f}function b(G,j,S){const l=S??new o(4),_=j*.5,f=Math.sin(_);return l[0]=f*G[0],l[1]=f*G[1],l[2]=f*G[2],l[3]=Math.cos(_),l}function B(G,j){const S=j??r.create(3),l=Math.acos(G[3])*2,_=Math.sin(l*.5);return _>Oe?(S[0]=G[0]/_,S[1]=G[1]/_,S[2]=G[2]/_):(S[0]=1,S[1]=0,S[2]=0),{angle:l,axis:S}}function T(G,j){const S=Te(G,j);return Math.acos(2*S*S-1)}function C(G,j,S){const l=S??new o(4),_=G[0],f=G[1],g=G[2],k=G[3],x=j[0],P=j[1],i=j[2],w=j[3];return l[0]=_*w+k*x+f*i-g*P,l[1]=f*w+k*P+g*x-_*i,l[2]=g*w+k*i+_*P-f*x,l[3]=k*w-_*x-f*P-g*i,l}const R=C;function V(G,j,S){const l=S??new o(4),_=j*.5,f=G[0],g=G[1],k=G[2],x=G[3],P=Math.sin(_),i=Math.cos(_);return l[0]=f*i+x*P,l[1]=g*i+k*P,l[2]=k*i-g*P,l[3]=x*i-f*P,l}function F(G,j,S){const l=S??new o(4),_=j*.5,f=G[0],g=G[1],k=G[2],x=G[3],P=Math.sin(_),i=Math.cos(_);return l[0]=f*i-k*P,l[1]=g*i+x*P,l[2]=k*i+f*P,l[3]=x*i-g*P,l}function I(G,j,S){const l=S??new o(4),_=j*.5,f=G[0],g=G[1],k=G[2],x=G[3],P=Math.sin(_),i=Math.cos(_);return l[0]=f*i+g*P,l[1]=g*i-f*P,l[2]=k*i+x*P,l[3]=x*i-k*P,l}function K(G,j,S,l){const _=l??new o(4),f=G[0],g=G[1],k=G[2],x=G[3];let P=j[0],i=j[1],w=j[2],p=j[3],h=f*P+g*i+k*w+x*p;h<0&&(h=-h,P=-P,i=-i,w=-w,p=-p);let c,m;if(1-h>Oe){const E=Math.acos(h),y=Math.sin(E);c=Math.sin((1-S)*E)/y,m=Math.sin(S*E)/y}else c=1-S,m=S;return _[0]=c*f+m*P,_[1]=c*g+m*i,_[2]=c*k+m*w,_[3]=c*x+m*p,_}function re(G,j){const S=j??new o(4),l=G[0],_=G[1],f=G[2],g=G[3],k=l*l+_*_+f*f+g*g,x=k?1/k:0;return S[0]=-l*x,S[1]=-_*x,S[2]=-f*x,S[3]=g*x,S}function z(G,j){const S=j??new o(4);return S[0]=-G[0],S[1]=-G[1],S[2]=-G[2],S[3]=G[3],S}function L(G,j){const S=j??new o(4),l=G[0]+G[5]+G[10];if(l>0){const _=Math.sqrt(l+1);S[3]=.5*_;const f=.5/_;S[0]=(G[6]-G[9])*f,S[1]=(G[8]-G[2])*f,S[2]=(G[1]-G[4])*f}else{let _=0;G[5]>G[0]&&(_=1),G[10]>G[_*4+_]&&(_=2);const f=(_+1)%3,g=(_+2)%3,k=Math.sqrt(G[_*4+_]-G[f*4+f]-G[g*4+g]+1);S[_]=.5*k;const x=.5/k;S[3]=(G[f*4+g]-G[g*4+f])*x,S[f]=(G[f*4+_]+G[_*4+f])*x,S[g]=(G[g*4+_]+G[_*4+g])*x}return S}function X(G,j,S,l,_){const f=_??new o(4),g=G*.5,k=j*.5,x=S*.5,P=Math.sin(g),i=Math.cos(g),w=Math.sin(k),p=Math.cos(k),h=Math.sin(x),c=Math.cos(x);switch(l){case"xyz":f[0]=P*p*c+i*w*h,f[1]=i*w*c-P*p*h,f[2]=i*p*h+P*w*c,f[3]=i*p*c-P*w*h;break;case"xzy":f[0]=P*p*c-i*w*h,f[1]=i*w*c-P*p*h,f[2]=i*p*h+P*w*c,f[3]=i*p*c+P*w*h;break;case"yxz":f[0]=P*p*c+i*w*h,f[1]=i*w*c-P*p*h,f[2]=i*p*h-P*w*c,f[3]=i*p*c+P*w*h;break;case"yzx":f[0]=P*p*c+i*w*h,f[1]=i*w*c+P*p*h,f[2]=i*p*h-P*w*c,f[3]=i*p*c-P*w*h;break;case"zxy":f[0]=P*p*c-i*w*h,f[1]=i*w*c+P*p*h,f[2]=i*p*h+P*w*c,f[3]=i*p*c-P*w*h;break;case"zyx":f[0]=P*p*c-i*w*h,f[1]=i*w*c+P*p*h,f[2]=i*p*h-P*w*c,f[3]=i*p*c+P*w*h;break;default:throw new Error(`Unknown rotation order: ${l}`)}return f}function Y(G,j){const S=j??new o(4);return S[0]=G[0],S[1]=G[1],S[2]=G[2],S[3]=G[3],S}const ee=Y;function N(G,j,S){const l=S??new o(4);return l[0]=G[0]+j[0],l[1]=G[1]+j[1],l[2]=G[2]+j[2],l[3]=G[3]+j[3],l}function ue(G,j,S){const l=S??new o(4);return l[0]=G[0]-j[0],l[1]=G[1]-j[1],l[2]=G[2]-j[2],l[3]=G[3]-j[3],l}const le=ue;function he(G,j,S){const l=S??new o(4);return l[0]=G[0]*j,l[1]=G[1]*j,l[2]=G[2]*j,l[3]=G[3]*j,l}const se=he;function de(G,j,S){const l=S??new o(4);return l[0]=G[0]/j,l[1]=G[1]/j,l[2]=G[2]/j,l[3]=G[3]/j,l}function Te(G,j){return G[0]*j[0]+G[1]*j[1]+G[2]*j[2]+G[3]*j[3]}function pe(G,j,S,l){const _=l??new o(4);return _[0]=G[0]+S*(j[0]-G[0]),_[1]=G[1]+S*(j[1]-G[1]),_[2]=G[2]+S*(j[2]-G[2]),_[3]=G[3]+S*(j[3]-G[3]),_}function Ge(G){const j=G[0],S=G[1],l=G[2],_=G[3];return Math.sqrt(j*j+S*S+l*l+_*_)}const ze=Ge;function J(G){const j=G[0],S=G[1],l=G[2],_=G[3];return j*j+S*S+l*l+_*_}const _e=J;function we(G,j){const S=j??new o(4),l=G[0],_=G[1],f=G[2],g=G[3],k=Math.sqrt(l*l+_*_+f*f+g*g);return k>1e-5?(S[0]=l/k,S[1]=_/k,S[2]=f/k,S[3]=g/k):(S[0]=0,S[1]=0,S[2]=0,S[3]=1),S}function me(G,j){return Math.abs(G[0]-j[0])<Oe&&Math.abs(G[1]-j[1])<Oe&&Math.abs(G[2]-j[2])<Oe&&Math.abs(G[3]-j[3])<Oe}function O(G,j){return G[0]===j[0]&&G[1]===j[1]&&G[2]===j[2]&&G[3]===j[3]}function Z(G){const j=G??new o(4);return j[0]=0,j[1]=0,j[2]=0,j[3]=1,j}const te=r.create(),ye=r.create(),Ee=r.create();function Me(G,j,S){const l=S??new o(4),_=r.dot(G,j);return _<-.999999?(r.cross(ye,G,te),r.len(te)<1e-6&&r.cross(Ee,G,te),r.normalize(te,te),b(te,Math.PI,l),l):_>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(r.cross(G,j,te),l[0]=te[0],l[1]=te[1],l[2]=te[2],l[3]=1+_,we(l,l))}const ie=new o(4),be=new o(4);function Re(G,j,S,l,_,f){const g=f??new o(4);return K(G,l,_,ie),K(j,S,_,be),K(ie,be,2*_*(1-_),g),g}return{create:a,fromValues:v,set:u,fromAxisAngle:b,toAxisAngle:B,angle:T,multiply:C,mul:R,rotateX:V,rotateY:F,rotateZ:I,slerp:K,inverse:re,conjugate:z,fromMat:L,fromEuler:X,copy:Y,clone:ee,add:N,subtract:ue,sub:le,mulScalar:he,scale:se,divScalar:de,dot:Te,lerp:pe,length:Ge,len:ze,lengthSq:J,lenSq:_e,normalize:we,equalsApproximately:me,equals:O,identity:Z,rotationTo:Me,sqlerp:Re}}const Si=new Map;function dc(o){let r=Si.get(o);return r||(r=uc(o),Si.set(o,r)),r}function pc(o){function r(S,l,_,f){const g=new o(4);return S!==void 0&&(g[0]=S,l!==void 0&&(g[1]=l,_!==void 0&&(g[2]=_,f!==void 0&&(g[3]=f)))),g}const a=r;function v(S,l,_,f,g){const k=g??new o(4);return k[0]=S,k[1]=l,k[2]=_,k[3]=f,k}function u(S,l){const _=l??new o(4);return _[0]=Math.ceil(S[0]),_[1]=Math.ceil(S[1]),_[2]=Math.ceil(S[2]),_[3]=Math.ceil(S[3]),_}function b(S,l){const _=l??new o(4);return _[0]=Math.floor(S[0]),_[1]=Math.floor(S[1]),_[2]=Math.floor(S[2]),_[3]=Math.floor(S[3]),_}function B(S,l){const _=l??new o(4);return _[0]=Math.round(S[0]),_[1]=Math.round(S[1]),_[2]=Math.round(S[2]),_[3]=Math.round(S[3]),_}function T(S,l=0,_=1,f){const g=f??new o(4);return g[0]=Math.min(_,Math.max(l,S[0])),g[1]=Math.min(_,Math.max(l,S[1])),g[2]=Math.min(_,Math.max(l,S[2])),g[3]=Math.min(_,Math.max(l,S[3])),g}function C(S,l,_){const f=_??new o(4);return f[0]=S[0]+l[0],f[1]=S[1]+l[1],f[2]=S[2]+l[2],f[3]=S[3]+l[3],f}function R(S,l,_,f){const g=f??new o(4);return g[0]=S[0]+l[0]*_,g[1]=S[1]+l[1]*_,g[2]=S[2]+l[2]*_,g[3]=S[3]+l[3]*_,g}function V(S,l,_){const f=_??new o(4);return f[0]=S[0]-l[0],f[1]=S[1]-l[1],f[2]=S[2]-l[2],f[3]=S[3]-l[3],f}const F=V;function I(S,l){return Math.abs(S[0]-l[0])<Oe&&Math.abs(S[1]-l[1])<Oe&&Math.abs(S[2]-l[2])<Oe&&Math.abs(S[3]-l[3])<Oe}function K(S,l){return S[0]===l[0]&&S[1]===l[1]&&S[2]===l[2]&&S[3]===l[3]}function re(S,l,_,f){const g=f??new o(4);return g[0]=S[0]+_*(l[0]-S[0]),g[1]=S[1]+_*(l[1]-S[1]),g[2]=S[2]+_*(l[2]-S[2]),g[3]=S[3]+_*(l[3]-S[3]),g}function z(S,l,_,f){const g=f??new o(4);return g[0]=S[0]+_[0]*(l[0]-S[0]),g[1]=S[1]+_[1]*(l[1]-S[1]),g[2]=S[2]+_[2]*(l[2]-S[2]),g[3]=S[3]+_[3]*(l[3]-S[3]),g}function L(S,l,_){const f=_??new o(4);return f[0]=Math.max(S[0],l[0]),f[1]=Math.max(S[1],l[1]),f[2]=Math.max(S[2],l[2]),f[3]=Math.max(S[3],l[3]),f}function X(S,l,_){const f=_??new o(4);return f[0]=Math.min(S[0],l[0]),f[1]=Math.min(S[1],l[1]),f[2]=Math.min(S[2],l[2]),f[3]=Math.min(S[3],l[3]),f}function Y(S,l,_){const f=_??new o(4);return f[0]=S[0]*l,f[1]=S[1]*l,f[2]=S[2]*l,f[3]=S[3]*l,f}const ee=Y;function N(S,l,_){const f=_??new o(4);return f[0]=S[0]/l,f[1]=S[1]/l,f[2]=S[2]/l,f[3]=S[3]/l,f}function ue(S,l){const _=l??new o(4);return _[0]=1/S[0],_[1]=1/S[1],_[2]=1/S[2],_[3]=1/S[3],_}const le=ue;function he(S,l){return S[0]*l[0]+S[1]*l[1]+S[2]*l[2]+S[3]*l[3]}function se(S){const l=S[0],_=S[1],f=S[2],g=S[3];return Math.sqrt(l*l+_*_+f*f+g*g)}const de=se;function Te(S){const l=S[0],_=S[1],f=S[2],g=S[3];return l*l+_*_+f*f+g*g}const pe=Te;function Ge(S,l){const _=S[0]-l[0],f=S[1]-l[1],g=S[2]-l[2],k=S[3]-l[3];return Math.sqrt(_*_+f*f+g*g+k*k)}const ze=Ge;function J(S,l){const _=S[0]-l[0],f=S[1]-l[1],g=S[2]-l[2],k=S[3]-l[3];return _*_+f*f+g*g+k*k}const _e=J;function we(S,l){const _=l??new o(4),f=S[0],g=S[1],k=S[2],x=S[3],P=Math.sqrt(f*f+g*g+k*k+x*x);return P>1e-5?(_[0]=f/P,_[1]=g/P,_[2]=k/P,_[3]=x/P):(_[0]=0,_[1]=0,_[2]=0,_[3]=0),_}function me(S,l){const _=l??new o(4);return _[0]=-S[0],_[1]=-S[1],_[2]=-S[2],_[3]=-S[3],_}function O(S,l){const _=l??new o(4);return _[0]=S[0],_[1]=S[1],_[2]=S[2],_[3]=S[3],_}const Z=O;function te(S,l,_){const f=_??new o(4);return f[0]=S[0]*l[0],f[1]=S[1]*l[1],f[2]=S[2]*l[2],f[3]=S[3]*l[3],f}const ye=te;function Ee(S,l,_){const f=_??new o(4);return f[0]=S[0]/l[0],f[1]=S[1]/l[1],f[2]=S[2]/l[2],f[3]=S[3]/l[3],f}const Me=Ee;function ie(S){const l=S??new o(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function be(S,l,_){const f=_??new o(4),g=S[0],k=S[1],x=S[2],P=S[3];return f[0]=l[0]*g+l[4]*k+l[8]*x+l[12]*P,f[1]=l[1]*g+l[5]*k+l[9]*x+l[13]*P,f[2]=l[2]*g+l[6]*k+l[10]*x+l[14]*P,f[3]=l[3]*g+l[7]*k+l[11]*x+l[15]*P,f}function Re(S,l,_){const f=_??new o(4);return we(S,f),Y(f,l,f)}function G(S,l,_){const f=_??new o(4);return se(S)>l?Re(S,l,f):O(S,f)}function j(S,l,_){const f=_??new o(4);return re(S,l,.5,f)}return{create:r,fromValues:a,set:v,ceil:u,floor:b,round:B,clamp:T,add:C,addScaled:R,subtract:V,sub:F,equalsApproximately:I,equals:K,lerp:re,lerpV:z,max:L,min:X,mulScalar:Y,scale:ee,divScalar:N,inverse:ue,invert:le,dot:he,length:se,len:de,lengthSq:Te,lenSq:pe,distance:Ge,dist:ze,distanceSq:J,distSq:_e,normalize:we,negate:me,copy:O,clone:Z,multiply:te,mul:ye,divide:Ee,div:Me,zero:ie,transformMat4:be,setLength:Re,truncate:G,midpoint:j}}const Ei=new Map;function hc(o){let r=Ei.get(o);return r||(r=pc(o),Ei.set(o,r)),r}function gr(o,r,a,v,u,b){return{mat3:ac(o),mat4:cc(r),quat:dc(a),vec2:Zi(v),vec3:Rs(u),vec4:hc(b)}}const{mat3:kt,mat4:mt,quat:ft,vec2:ki,vec3:H,vec4:Cu}=gr(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);gr(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);gr(sc,Array,Array,Array,Array,Array);const Ti=document.querySelector("#log");let Bt=null,Sn=null;function Xi(){if(Bt)return Bt;Bt=document.createElement("div"),Bt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",Bt.appendChild(o),Sn=document.createElement("div"),Sn.className="ply-spinner-label",Bt.appendChild(Sn),Bt.style.display="none",document.body.appendChild(Bt),Bt}function Vn(o){Xi(),Sn&&o&&(Sn.textContent=o),Bt&&(Bt.style.opacity="1",Bt.style.display="flex")}function At(o){Xi(),Sn&&(Sn.textContent=o)}function jt(){if(!Bt)return;const o=Bt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Ji(o,r){if(!Ti)return;const a=document.createElement("p");a.innerText=o,r&&Object.assign(a.style,r),Ti.appendChild(a)}async function gt(o){console.log(o),Ji(o)}async function fc(o){console.error(o),Ji(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Qi;function eo(){Qi=performance.now()}function Ci(o){const r=performance.now()-Qi;gt(`⏱️ ${o} Time: ${r.toFixed(0)} ms`)}function _c(o,r){if(!o)throw new Error(r&&(typeof r=="string"?r:r()))}function Gn(o){return o+3&-4}const mc=2,vc=3,bc=5,gc=6,as=7,Ss=8,cs=9,us=10;function Fn(o){const r=new TextDecoder("ascii"),a=r.decode(new Uint8Array(o,0,4));if(a!=="NAT2")throw new Error(`NAT2 bad magic: '${a}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const v=new DataView(o),u=4,b=v.getUint32(u+0,!0),B=v.getUint32(u+4,!0),T=v.getUint32(u+8,!0),C=v.getUint32(u+12,!0),R=v.getUint32(u+16,!0),V=v.getFloat32(u+20,!0),F=v.getUint32(u+24,!0),I=v.getUint32(u+28,!0),K=v.getFloat32(u+32,!0),re=v.getFloat32(u+36,!0),z=v.getFloat32(u+40,!0),L=v.getUint32(u+44,!0),X=v.getFloat32(u+48,!0),Y=v.getFloat32(u+52,!0),ee=v.getUint32(u+56,!0),N=v.getUint32(u+60,!0),ue=I===cs||I===us,le=ue?N:0,he=ue?0:N&255,se=ue?0:N>>8&255,de=he>0?he:1;if(I===bc||I===gc)throw new Error(`NAT2: paired-RVQ format=${I} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Te=I===cs||I===us;if(I!==mc&&I!==vc&&I!==as&&I!==Ss&&!Te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${I}`);if(b%4!==0||L%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${b} layer_h=${L}`);let pe=u+64;const Ge=(ee+1)*4,ze=new Uint32Array(o.slice(pe,pe+Ge));pe+=Ge;let J;if(de>1){const ie=(de+1)*4;if(pe+ie>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ie} from ${pe})`);J=new Uint32Array(o.slice(pe,pe+ie)),pe+=ie}else J=new Uint32Array([0,b]);let _e=0;for(let ie=0;ie<de;ie++){const be=J[ie+1]-J[ie];be>_e&&(_e=be)}if(Te){const ie=le&2?21:le&1?7:6,be=R*ie*4;if(pe+be>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${be} more bytes from offset ${pe}, have ${o.byteLength-pe}`);const Re=new Float32Array(o.slice(pe,pe+be));pe+=be;const G=Math.max(1,le>>8&255),j=[];let S=0;for(let k=0,x=b,P=L;k<G;k++,x>>=1,P>>=1){const i=Math.max(1,x>>2)*Math.max(1,P>>2)*16;j.push(i),S+=i}const l=o.byteLength-pe;if(l<S)throw new Error(`NAT2 probe atlas truncated: need ${S} bytes for ${b}x${L} x${G} mips, have ${l}`);const _=[];let f=pe;for(const k of j)_.push(new Uint8Array(o.slice(f,f+k))),f+=k;const g=_[0];return{width:b,height:B,channels:T,kernel_type:C,num_rects:R,uv_extent:V,sb_number:F,format:I,sh_bias:K,res_bias:re,compact_mult:z,layer_h:L,atlas_scale:X,atlas_offset:Y,n_layers:ee,n_cols:de,layer_cuts:ze,column_cuts:J,slice_width:_e,rects_expanded:Re,atlas_bytes:g,mip_bytes:_,probe_mode:le&2?3:le&1?2:1}}const we=R*4*4;if(pe+we>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${we} more bytes from offset ${pe}, have ${o.byteLength-pe}`);const me=new Float32Array(o.slice(pe,pe+we));pe+=we;const O=new Float32Array(R*5);for(let ie=0;ie<R;ie++){const be=me[ie*4+0],Re=me[ie*4+1],G=me[ie*4+2],j=me[ie*4+3];let S=0;for(let k=1;k<=ee&&ze[k]<=Re;k++)S=k;let l=0;for(let k=1;k<=de&&J[k]<=be;k++)l=k;const _=Re-ze[S],f=be-J[l],g=l*ee+S;O[ie*5+0]=f,O[ie*5+1]=_,O[ie*5+2]=G,O[ie*5+3]=j,O[ie*5+4]=g}let Z,te;const ye=de,Me=b/4*16;if(I===as||I===Ss){if(pe+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ie=I===as?"BCCB":"ACCB",be=r.decode(new Uint8Array(o,pe,4));if(be!==ie)throw new Error(`NAT2 typeD bad sub-magic: expected '${ie}' got '${be}'`);const Re=v.getUint32(pe+4,!0),G=v.getUint32(pe+8,!0),j=v.getUint32(pe+12,!0),S=v.getUint32(pe+16,!0),l=v.getUint32(pe+20,!0);if(Re!==1)throw new Error(`NAT2 BCCB unsupported version ${Re}`);if(j!==B/4||S!==b/4||l!==j*S)throw new Error(`NAT2 BCCB block grid mismatch: header ${b}×${B}, sub-header ${S}×${j} (${l} blocks)`);pe+=24;const _=G*16;if(pe+_>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${_}, have ${o.byteLength-pe})`);const f=new Uint8Array(o,pe,_);pe+=_;const g=l*2;if(pe+g>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${g}, have ${o.byteLength-pe})`);const k=new Uint16Array(o.slice(pe,pe+g));pe+=g;const x=new Uint8Array(l*16);for(let P=0;P<l;P++){const i=k[P]*16;x.set(f.subarray(i,i+16),P*16)}if(Z=x,se>1){te=[x];for(let P=1;P<se;P++){if(pe+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${P} sub-header`);const i=r.decode(new Uint8Array(o,pe,4));if(i!==ie)throw new Error(`NAT2 mip ${P}: bad sub-magic '${i}'`);const w=v.getUint32(pe+8,!0),p=v.getUint32(pe+16,!0),h=v.getUint32(pe+20,!0);if(p!==P)throw new Error(`NAT2 mip section order: expected level ${P}, got ${p}`);pe+=24;let c=0;for(let D=0;D<ye;D++)for(let W=0;W<ee;W++){const q=to(P,J[D+1]-J[D],ze[W+1]-ze[W],_e,L);c+=(q.cw>>2)*(q.ch>>2)}if(c!==h)throw new Error(`NAT2 mip ${P}: ${h} blocks, loader expects ${c}`);if(pe+w*16+h*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${P}`);const m=new Uint8Array(o,pe,w*16);pe+=w*16;const E=new Uint16Array(o.slice(pe,pe+h*2));pe+=h*2;const y=new Uint8Array(h*16);for(let D=0;D<h;D++){const W=E[D]*16;y.set(m.subarray(W,W+16),D*16)}te.push(y)}}}else{let ie=0;for(let be=0;be<ee;be++){const Re=ze[be+1]-ze[be];if(Re%4!==0)throw new Error(`NAT2 BC7 layer ${be} rows ${Re} not 4-aligned`);ie+=Re/4*Me}if(pe+ie>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ie} more bytes from offset ${pe}, have ${o.byteLength-pe}`);Z=new Uint8Array(o.slice(pe,pe+ie))}return{width:b,height:B,channels:T,kernel_type:C,num_rects:R,uv_extent:V,sb_number:F,format:I,sh_bias:K,res_bias:re,compact_mult:z,layer_h:L,atlas_scale:X,atlas_offset:Y,n_layers:ee,n_cols:de,layer_cuts:ze,column_cuts:J,slice_width:_e,rects_expanded:O,atlas_bytes:Z,...te?{mip_bytes:te}:{}}}function to(o,r,a,v,u){const b=T=>T+3>>2<<2,B=1<<o;return{cw:Math.min(b(Math.max(1,v>>o)),b(Math.ceil(r/B))),ch:Math.min(b(Math.max(1,u>>o)),b(Math.ceil(a/B)))}}const wc=32;function dr(o,r,a){if(r.format===5||r.format===6)throw new Error(`paired-RVQ format=${r.format} is retired; re-bake with typeD (--bc7-codebook)`);let v,u,b,B;if(r.format===2||r.format===as||r.format===cs){if(!o.features.has("texture-compression-bc"))return gt(`⚠️  bundle is BC7 (format=${r.format}) but texture-compression-bc not supported — atlas disabled`),null;B=r.format===cs?"BC7 atlas (proberes: shared probe texture)":r.format===as?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:v,view:u,sampler:b}=Bi(o,r,"bc7-rgba-unorm",B)}else if(r.format===3||r.format===Ss||r.format===us){if(!o.features.has("texture-compression-astc"))return gt(`⚠️  bundle is ASTC 4x4 (format=${r.format}) but texture-compression-astc not supported — atlas disabled`),null;B=r.format===us?"ASTC 4x4 atlas (proberes: shared probe texture)":r.format===Ss?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:v,view:u,sampler:b}=Bi(o,r,"astc-4x4-unorm",B)}else return gt(`⚠️  unsupported atlas format ${r.format} — atlas disabled`),null;const{rects_expanded:T}=r,C=o.createBuffer({label:"atlas rects (5-stride)",size:Gn(T.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,T);const R=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Ps(o,R,r,a),{texture:v,view:u,sampler:b,rectsBuffer:C,texParamsBuffer:R,meta:r}}function Bi(o,r,a,v){const{width:u,layer_h:b,n_layers:B,n_cols:T,layer_cuts:C,column_cuts:R,slice_width:V,atlas_bytes:F}=r,K=u/4*16,re=o.limits.maxTextureDimension2D;if(b>re||V>re)throw new Error(`⚠️  atlas slice dims ${V}x${b} exceed maxTextureDimension2D=${re}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const z=T*B;if(z>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${T} cols × ${B} layers = ${z} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const L=r.mip_bytes??[F],X=L.length,Y=o.createTexture({label:v,size:{width:V,height:b,depthOrArrayLayers:z},mipLevelCount:X,sampleCount:1,dimension:"2d",format:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let le=0;le<T;le++){const he=R[le]/4,se=(R[le+1]-R[le])/4;for(let de=0;de<B;de++){const Te=C[de]/4,pe=(C[de+1]-C[de])/4,Ge=le*B+de,ze=Te*K+he*16;o.queue.writeTexture({texture:Y,mipLevel:0,origin:{x:0,y:0,z:Ge},aspect:"all"},F,{offset:ze,bytesPerRow:K,rowsPerImage:pe},{width:se*4,height:pe*4,depthOrArrayLayers:1})}}const ee=r.format===cs||r.format===us;for(let le=1;le<X&&!ee;le++){let he=0;for(let se=0;se<T;se++)for(let de=0;de<B;de++){const{cw:Te,ch:pe}=to(le,R[se+1]-R[se],C[de+1]-C[de],V,b);o.queue.writeTexture({texture:Y,mipLevel:le,origin:{x:0,y:0,z:se*B+de},aspect:"all"},L[le],{offset:he,bytesPerRow:(Te>>2)*16,rowsPerImage:pe>>2},{width:Te,height:pe,depthOrArrayLayers:1}),he+=(Te>>2)*(pe>>2)*16}}for(let le=1;le<X&&ee;le++){const he=Math.max(1,V>>le),se=Math.max(1,b>>le);o.queue.writeTexture({texture:Y,mipLevel:le,origin:{x:0,y:0,z:0},aspect:"all"},L[le],{offset:0,bytesPerRow:Math.max(1,he>>2)*16,rowsPerImage:Math.max(1,se>>2)},{width:he,height:se,depthOrArrayLayers:1})}X>1&&console.log(`[atlas] ${X} mip levels uploaded (${ee?"trilinear":"per-surfel integer level"})`);const N=Y.createView({label:`${v} view`,dimension:"2d-array"}),ue=o.createSampler({label:`${v} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:X>1&&ee?"linear":"nearest"});return{texture:Y,view:N,sampler:ue}}function Ps(o,r,a,v,u=1){var R;const b=new ArrayBuffer(32),B=new Uint32Array(b),T=new Float32Array(b);B[0]=v?1:0,T[1]=a.atlas_scale,T[2]=a.atlas_offset,T[3]=a.res_bias,B[4]=a.probe_mode?a.probe_mode|0:0,B[5]=a.width|0;const C=(((R=a.mip_bytes)==null?void 0:R.length)??1)>1;B[6]=C&&u!==0?1:0,T[7]=a.uv_extent,o.queue.writeBuffer(r,0,b)}async function Es(o,r){gt(`loading ply file from File... : ${o.name}`),Vn("downloading PLY...");const a=await o.arrayBuffer();try{return await so(a,r)}finally{jt()}}async function xc(o,r){gt(`loading ply file from URL... : ${o}`),Vn("downloading PLY...");try{eo();const a=new URL(o,self.location.href).href;return await so({url:a},r)}finally{jt()}}function no(o){return new Promise((r,a)=>{const v=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});v.onmessage=u=>{const b=u.data;if((b==null?void 0:b.type)==="error"){fc(`PLY worker error: ${b.message??"unknown error"}`),v.terminate(),a(new Error(b.message??"Worker error"));return}else if((b==null?void 0:b.type)==="download_progress"){const B=b.totalBytes,T=b.loadedBytes/(1024*1024),C=B?B/(1024*1024):void 0,R=(b.speedBps??0)/(1024*1024),V=B?Math.min(99,Math.floor(b.loadedBytes/B*100)):void 0,F=C?`total ${C.toFixed(1)} MB`:"total -- MB",I=C&&V!==void 0?`${T.toFixed(1)} MB downloaded (${V}%)`:`${T.toFixed(1)} MB downloaded`,K=`${R.toFixed(2)} MB/s`;At(`downloading PLY ...
${F}, ${I}
${K}`);return}else if((b==null?void 0:b.type)==="fetched"){gt(`💾 Fetched (${b.byteLength} bytes)`),Ci("Download"),At("parsing PLY..."),eo();return}else if((b==null?void 0:b.type)==="parse_progress"){const B=b.total??0,T=b.read??0,C=B>0?Math.floor(T/B*100):0;At(`parsing PLY ...
${T}/${B} surfels (${C}%)`);return}else(b==null?void 0:b.type)==="done"&&(v.terminate(),Ci("Parse"),r(b))},v.onerror=u=>{v.terminate(),a(u)},o instanceof ArrayBuffer?(At("parsing PLY..."),v.postMessage({type:"start",plyBuffer:o},[o])):v.postMessage({type:"start_url",url:o.url})})}async function Ai(o){var a,v,u,b,B,T,C,R,V,F,I,K;const r=await no(await o.arrayBuffer());return{num_points:r.num_points,K:r.K,feature_mode:r.feature_mode??0,sh_bias:r.sh_bias,kernel_type:r.kernel_type,surfel_data:new Float32Array(r.surfelBuffer),sv_params:new Float32Array(r.svParamsBuffer),bbox:r.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:r.centroid??[((((v=(a=r.bbox)==null?void 0:a.min)==null?void 0:v[0])??-1)+(((b=(u=r.bbox)==null?void 0:u.max)==null?void 0:b[0])??1))/2,((((T=(B=r.bbox)==null?void 0:B.min)==null?void 0:T[1])??-1)+(((R=(C=r.bbox)==null?void 0:C.max)==null?void 0:R[1])??1))/2,((((F=(V=r.bbox)==null?void 0:V.min)==null?void 0:F[2])??-1)+(((K=(I=r.bbox)==null?void 0:I.max)==null?void 0:K[2])??1))/2]}}async function so(o,r){var re,z,L,X,Y,ee,N,ue,le,he,se,de;const a=await no(o),v=a.num_points,u=a.K,b=a.feature_mode??0,B=a.sh_bias,T=a.kernel_type,C=a.surfelBuffer,R=a.svParamsBuffer,V=b===2?"NASG":b===1?"SB":"SV";gt(`🪐 Total surfels: ${v}, mode=${V}, K=${u}, sh_bias=${B}, kernel_type=${T}`);const F=r.createBuffer({label:"surfel input buffer",size:Gn(v*wc),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});r.queue.writeBuffer(F,0,C);const I=R.byteLength>0?R.byteLength:16,K=r.createBuffer({label:`color_params buffer (${V})`,size:Gn(I),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return R.byteLength>0&&r.queue.writeBuffer(K,0,R),{num_points:v,K:u,feature_mode:b,sh_bias:B,kernel_type:T,surfel_buffer:F,surfel_data:new Float32Array(C),sv_params_buffer:K,bbox:a.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:a.centroid??[((((z=(re=a.bbox)==null?void 0:re.min)==null?void 0:z[0])??-1)+(((X=(L=a.bbox)==null?void 0:L.max)==null?void 0:X[0])??1))/2,((((ee=(Y=a.bbox)==null?void 0:Y.min)==null?void 0:ee[1])??-1)+(((ue=(N=a.bbox)==null?void 0:N.max)==null?void 0:ue[1])??1))/2,((((he=(le=a.bbox)==null?void 0:le.min)==null?void 0:he[2])??-1)+(((de=(se=a.bbox)==null?void 0:se.max)==null?void 0:de[2])??1))/2]}}const ks="BITYMI01",yc=0,Pc=1,Sc=2,Ec=3,kc=4,Tc=5;function wr(o){const r=new Uint8Array(o),a=new TextDecoder().decode(r.subarray(0,8));if(a!==ks)throw new Error(`Not a BITYMI bundle (bad magic '${a}')`);const v=new DataView(o),u=v.getUint32(8,!0),b=12,B=20;let T=null,C=null,R=null;for(let V=0;V<u;V++){const F=b+V*B,I=v.getUint32(F+0,!0),K=Number(v.getBigUint64(F+4,!0)),re=Number(v.getBigUint64(F+12,!0)),z=r.slice(K,K+re).buffer;I===yc||I===Pc||I===Tc?T=z:I===Sc?C=z:(I===Ec||I===kc)&&(R=z)}if(T===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:T,camerasBuffer:C,atlasBuffer:R}}async function On(o,r){var B;const a=await fetch(o);if(!a.ok)throw new Error(`fetch failed: ${a.status} ${a.statusText}`);const v=(()=>{const T=a.headers.get("content-length");return T&&parseInt(T,10)||void 0})(),u=(B=a.body)==null?void 0:B.getReader();let b;if(!u)b=await a.arrayBuffer(),r&&r(b.byteLength,v,0);else{const T=[];let C=0,R=performance.now(),V=0;for(;;){const{done:K,value:re}=await u.read();if(K)break;T.push(re),C+=re.byteLength;const z=performance.now();if(z-R>=150&&r){const L=(C-V)/((z-R)/1e3);r(C,v,L),R=z,V=C}}const F=new Uint8Array(C);let I=0;for(const K of T)F.set(K,I),I+=K.byteLength;b=F.buffer,r&&r(C,v,0)}return b.byteLength>=8&&new TextDecoder().decode(new Uint8Array(b,0,8))===ks?{bundle:wr(b),rawPly:null}:{bundle:null,rawPly:b}}var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,r){(function(a,v){v(r)})(Cc,function(a){class v{constructor(e){const[t,s]=e.split("-"),d=t.split(".");this.major=parseInt(d[0],10),this.minor=parseInt(d[1],10),this.patch=parseInt(d[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class u{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class b{constructor(e){this.target=e}}class B extends b{constructor(e,t,s,d){super(e),this.value=t,this.presetKey=s,this.last=d??!0}}class T extends b{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class C extends b{constructor(e,t){super(e),this.expanded=t}}class R extends b{constructor(e,t){super(e),this.index=t}}function V(n){return n}function F(n){return n==null}function I(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function K(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const re={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class z{static alreadyDisposed(){return new z({type:"alreadydisposed"})}static notBindable(){return new z({type:"notbindable"})}static propertyNotFound(e){return new z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=re[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class L{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!L.isBindable(s))throw z.notBindable();if(!(e in s))throw z.propertyNotFound(e);s[e]=t}}class X extends u{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new b(this))}),this}}class Y{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(d=>d.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(d=>{d.handler(t)})}}const ee="tp";function N(n){return(t,s)=>[ee,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ue(n,e){return t=>e(n(t))}function le(n){return n.rawValue}function he(n,e){n.emitter.on("change",ue(le,e)),e(n.rawValue)}function se(n,e,t){he(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{de(n,e,t)}}function pe(n,e){he(n,t=>{e.textContent=t??""})}const Ge=N("btn");class ze{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const d=e.createElement("div");d.classList.add(Ge("t")),pe(t.props.value("title"),d),this.buttonElement.appendChild(d)}}class J{constructor(e,t){this.emitter=new Y,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ze(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class _e{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(d,A)=>d===A,this.emitter=new Y,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},d=this.constraint_?this.constraint_.constrain(e):e,A=this.rawValue_;this.equals_(A,d)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=d,this.emitter.emit("change",{options:s,previousRawValue:A,rawValue:d,sender:this}))}}class we{constructor(e){this.emitter=new Y,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},d=this.value_;d===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:d,rawValue:this.value_,sender:this}))}}function me(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new we(n):new _e(n,e)}class O{constructor(e){this.emitter=new Y,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,d)=>Object.assign(s,{[d]:me(e[d])}),{})}static fromObject(e){const t=this.createCore(e);return new O(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function Z(n,e){const s=Object.keys(e).reduce((d,A)=>{if(d===void 0)return;const $=e[A],fe=$(n[A]);return fe.succeeded?Object.assign(Object.assign({},d),{[A]:fe.value}):void 0},{});return s}function te(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const d=e(s);if(!(!d.succeeded||d.value===void 0))return[...t,d.value]},[])}function ye(n){return n===null?!1:typeof n=="object"}function Ee(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Me(n){return{custom:e=>Ee(e)(n),boolean:Ee(e=>typeof e=="boolean"?e:void 0)(n),number:Ee(e=>typeof e=="number"?e:void 0)(n),string:Ee(e=>typeof e=="string"?e:void 0)(n),function:Ee(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ee(t=>t===e?e:void 0)(n),raw:Ee(e=>e)(n),object:e=>Ee(t=>{if(ye(t))return Z(t,e)})(n),array:e=>Ee(t=>{if(Array.isArray(t))return te(t,e)})(n)}}const ie={optional:Me(!0),required:Me(!1)};function be(n,e){const t=ie.required.object(e)(n);return t.succeeded?t.value:void 0}function Re(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function G(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class j{constructor(e){this.value_=e}static create(e){return[new j(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const S=N("");function l(n,e){return Te(n,S(void 0,e))}class _ extends O{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=j.create(me(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,d;const A=e??{};return new _(O.createCore({disabled:(t=A.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=A.hidden)!==null&&s!==void 0?s:!1,parent:(d=A.parent)!==null&&d!==void 0?d:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,l(e,"disabled")),se(this,"hidden",l(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function f(){return["veryfirst","first","last","verylast"]}const g=N(""),k={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class x{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{f().forEach(s=>{t.classList.remove(g(void 0,k[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(g(void 0,k[s]))})}),this.viewProps.handleDispose(()=>{G(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Re({key:"parent",target:_.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const P="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function w(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function p(n){return n.ontouchstart!==void 0}function h(){return globalThis}function c(){return h().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const E={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function y(n,e){const t=n.createElementNS(P,"svg");return t.innerHTML=E[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function W(n){n.parentElement&&n.parentElement.removeChild(n)}function q(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function oe(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ne(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ae=N("lbl");function Pe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(d=>n.createTextNode(d)).forEach((d,A)=>{A>0&&t.appendChild(n.createElement("br")),t.appendChild(d)}),t}class Ce{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ae()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ae("l")),se(t.props,"label",A=>{F(A)?this.element.classList.add(ae(void 0,"nol")):(this.element.classList.remove(ae(void 0,"nol")),oe(s),s.appendChild(Pe(e,A)))}),this.element.appendChild(s),this.labelElement=s;const d=e.createElement("div");d.classList.add(ae("v")),this.element.appendChild(d),this.valueElement=d}}class ke extends x{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Ce(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ae={id:"button",type:"blade",accept(n){const e=ie,t=be(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ke(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:new J(n.document,{props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ke)||!(n.controller.valueController instanceof J)?null:new X(n.controller)}};class Ie extends x{constructor(e){super(e),this.value=e.value}}function Fe(){return new O({positions:me([],{equals:I})})}class Ze extends O{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=O.createCore(t);return new Ze(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!F(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};se(this,"expanded",s),se(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function tt(n,e){let t=0;return w(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function We(n,e){e.style.height=n.styleHeight}function Ne(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),F(n.get("expandedHeight"))){const t=tt(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{We(n,e)}),We(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ke extends u{constructor(e,t){super(e),this.rackApi_=t}}function Ve(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ct(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class lt{constructor(e){this.emitter=new Y,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const d=this.extract_(e);d&&(d.emitter.on("add",this.onSubListAdd_),d.emitter.on("remove",this.onSubListRemove_),d.allItems().forEach(A=>{this.cache_.add(A)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Xe extends u{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new Y,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Je extends ke{constructor(e,t){super(e,t),this.binding=t.binding}}class je extends u{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new Y,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new T(this,t,this.controller_.binding.target.presetKey)})}}class et extends ke{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function _t(n){return n instanceof ut?n.apiSet_:n instanceof Ke?n.rackApi_.apiSet_:null}function at(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw z.shouldNeverHappen();return t}function Pt(n,e,t){if(!L.isBindable(n))throw z.notBindable();return new L(n,e,t)}class ut extends u{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new Y,this.apiSet_=new lt(_t),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(d=>{this.setUpApi_(d)})}get children(){return this.controller_.rack.children.map(e=>at(this.apiSet_,e))}addInput(e,t,s){const d=s??{},A=this.controller_.view.element.ownerDocument,$=this.pool_.createInput(A,Pt(e,t,d.presetKey),d),fe=new Xe($);return this.add(fe,d.index)}addMonitor(e,t,s){const d=s??{},A=this.controller_.view.element.ownerDocument,$=this.pool_.createMonitor(A,Pt(e,t),d),fe=new je($);return this.add(fe,d.index)}addFolder(e){return ot(this,e)}addButton(e){return Ve(this,e)}addSeparator(e){return ct(this,e)}addTab(e){return nt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(d=>d.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),d=this.pool_.createBladeApi(s);return this.add(d,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=at(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Je){const s=at(this.apiSet_,t),d=t.binding;this.emitter_.emit("change",{event:new B(s,d.target.read(),d.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=at(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof et))throw z.shouldNeverHappen();const t=at(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new T(t,s.target.read(),s.target.presetKey)})}}class dt extends Ke{constructor(e,t){super(e,new ut(e.rackController,t)),this.emitter_=new Y,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new C(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}class Mt extends x{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Tt{constructor(e,t){const s=N(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function It(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Je&&s.binding===e)return s}return null}function Gt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof et&&s.binding===e)return s}return null}function Ht(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Rt(n){return n instanceof it?n.rack:n instanceof Mt?n.rackController.rack:null}function Dt(n){const e=Rt(n);return e?e.bcSet_:null}class Ft{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new Y,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new lt(Dt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),K(e,"parent")?e.parent=this:(e.parent_=this,Re({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){K(e,"parent")?e.parent=null:(e.parent_=null,Re({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Je)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof et)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const d=Rt(s);if(d){const A=d.emitter;A.on("layout",this.onDescendantLayout_),A.on("inputchange",this.onDescendantInputChange_),A.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Je)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof et)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const d=Rt(s);if(d){const A=d.emitter;A.off("layout",this.onDescendantLayout_),A.off("inputchange",this.onDescendantInputChange_),A.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(d=>!d.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(d=>{const A=[];d===t&&(A.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&A.push("veryfirst")),d===s&&(A.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&A.push("verylast")),d.blade.set("positions",A)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=It(this.find(Je),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Gt(this.find(et),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ht(this.find(Ie),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class it extends x{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Tt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Ft({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let d=this.rack.children.length-1;d>=0;d--)this.rack.children[d].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&W(e.bladeController.view.element)}}const pn=N("cnt");class Ot{constructor(e,t){var s;this.className_=N((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),pn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),se(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const d=e.createElement("button");d.classList.add(this.className_("b")),se(t.props,"title",Le=>{F(Le)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d;const A=e.createElement("div");A.classList.add(this.className_("i")),this.element.appendChild(A);const $=e.createElement("div");$.classList.add(this.className_("t")),pe(t.props.value("title"),$),this.buttonElement.appendChild($),this.titleElement=$;const fe=e.createElement("div");fe.classList.add(this.className_("m")),this.buttonElement.appendChild(fe);const De=t.containerElement;De.classList.add(this.className_("c")),this.element.appendChild(De),this.containerElement=De}}class tn extends Mt{constructor(e,t){var s;const d=Ze.create((s=t.expanded)!==null&&s!==void 0?s:!0),A=new it(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:A,view:new Ot(e,{containerElement:A.view.element,foldable:d,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=d,Ne(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const kn={id:"folder",type:"blade",accept(n){const e=ie,t=be(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new tn(n.document,{blade:n.blade,expanded:n.params.expanded,props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof tn?new dt(n.controller,n.pool):null}};class Nt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Ce(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Tn extends u{}const wt=N("spr");class Ds{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(wt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(wt("r")),this.element.appendChild(s)}}class ds extends x{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ds(e,{viewProps:t.viewProps})}))}}const zs={id:"separator",type:"blade",accept(n){const t=be(n,{view:ie.required.constant("separator")});return t?{params:t}:null},controller(n){return new ds(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ds?new Tn(n.controller):null}},hn=N("tbi");class ps{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(hn()),t.viewProps.bindClassModifiers(this.element),se(t.props,"selected",A=>{A?this.element.classList.add(hn(void 0,"sel")):this.element.classList.remove(hn(void 0,"sel"))});const s=e.createElement("button");s.classList.add(hn("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const d=e.createElement("div");d.classList.add(hn("t")),pe(t.props.value("title"),d),this.buttonElement.appendChild(d),this.titleElement=d}}class Nn{constructor(e,t){this.emitter=new Y,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ps(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class $n{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Nn(e,{props:t.itemProps,viewProps:_.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new it(e,{blade:Fe(),viewProps:_.create()}),this.props=t.props,se(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class qn{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Wn extends Ke{constructor(e,t){super(e,new ut(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new Y,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new $n(t,{itemProps:O.fromObject({selected:!1,title:e.title}),props:O.fromObject({selected:!1})});this.controller_.add(s,e.index);const d=this.pageApiMap_.get(s);if(!d)throw z.shouldNeverHappen();return d}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(d=>d.controller_===e.contentController);if(!t)throw z.shouldNeverHappen();const s=new qn(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new R(this,e.rawValue)})}}const Kn=-1;class jn{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=me(!0),this.selectedIndex=me(Kn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Kn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,d)=>{s.rawValue=d===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const nn=N("tab");class Cn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(nn(),pn()),t.viewProps.bindClassModifiers(this.element),he(t.empty,Te(this.element,nn(void 0,"nop")));const s=e.createElement("div");s.classList.add(nn("t")),this.element.appendChild(s),this.itemsElement=s;const d=e.createElement("div");d.classList.add(nn("i")),this.element.appendChild(d);const A=t.contentsElement;A.classList.add(nn("c")),this.element.appendChild(A),this.contentsElement=A}}class hs extends Mt{constructor(e,t){const s=new it(e,{blade:t.blade,viewProps:t.viewProps}),d=new jn;super({blade:t.blade,rackController:s,view:new Cn(e,{contentsElement:s.view.element,empty:d.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new lt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=d}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;W(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const sn={id:"tab",type:"blade",accept(n){const e=ie,t=be(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new hs(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new $n(n.document,{itemProps:O.fromObject({selected:!1,title:t.title}),props:O.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof hs?new Wn(n.controller,n.pool):null}};function Us(n,e){const t=n.accept(e.params);if(!t)return null;const s=ie.optional.boolean(e.params.disabled).value,d=ie.optional.boolean(e.params.hidden).value;return n.controller({blade:Fe(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:d}),viewProps:_.create({disabled:s,hidden:d})})}class U{constructor(){this.disabled=!1,this.emitter=new Y}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Q{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new Y,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ce{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new Y,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function ve(n,e){for(;n.length<e;)n.push(void 0)}function Se(n){const e=[];return ve(e,n),me(e)}function xe(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function ge(n,e){const t=[...xe(n),e];return t.length>n.length?t.splice(0,t.length-n.length):ve(t,n.length),t}class Be{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new Y,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=ge(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class He{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function st(n,e){if(n instanceof e)return n;if(n instanceof He){const t=n.constraints.reduce((s,d)=>s||(d instanceof e?d:null),null);if(t)return t}return null}class vt{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Ue{constructor(e){this.values=O.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(d=>d.value===e).length>0?e:t[0].value}}class rt{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let d=e;return F(s)||(d=Math.max(d,s)),F(t)||(d=Math.min(d,t)),d}}class St{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const qe=N("lst");class zt{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(qe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(qe("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const d=e.createElement("div");d.classList.add(qe("m")),d.appendChild(y(e,"dropdown")),this.element.appendChild(d),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,se(this.props_,"options",A=>{q(this.selectElement),A.forEach($=>{const fe=e.createElement("option");fe.textContent=$.text,this.selectElement.appendChild(fe)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class pt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new zt(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Yt=N("pop");class $t{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yt()),t.viewProps.bindClassModifiers(this.element),he(t.shows,Te(this.element,Yt(void 0,"v")))}}class fn{constructor(e,t){this.shows=me(!1),this.viewProps=t.viewProps,this.view=new $t(e,{shows:this.shows,viewProps:this.viewProps})}}const Vt=N("txt");class Et{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Vt()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Vt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class qt{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Et(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,d=this.parser_(s);F(d)||(this.value.rawValue=d),this.view.refresh()}}function Bn(n){return String(n)}function Wt(n){return n==="false"?!1:!!n}function _n(n){return Bn(n)}class An{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Ls={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Hn{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Ls[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const vo={"+":n=>n,"-":n=>-n,"~":n=>~n};class bo{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=vo[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Is(n){return(e,t)=>{for(let s=0;s<n.length;s++){const d=n[s](e,t);if(d!=="")return d}return""}}function Yn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function go(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Zn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function wo(n,e){const t=Zn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const d=Zn(n,e);return d===""?"":s+d}function Gs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=wo(n,e);return s===""?"":t+s}function Pr(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=go(n,e);return e+=s.length,s===""?"":s+Zn(n,e)}function xo(n,e){const t=Pr(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const d=Zn(n,e);return e+=d.length,t+s+d+Gs(n,e)}function yo(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Zn(n,e);return e+=s.length,s===""?"":t+s+Gs(n,e)}function Po(n,e){const t=Pr(n,e);return e+=t.length,t===""?"":t+Gs(n,e)}const So=Is([xo,yo,Po]);function Eo(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ko(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Eo(n,e);return s===""?"":t+s}function To(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Co(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=To(n,e);return s===""?"":t+s}function Bo(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ao(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Bo(n,e);return s===""?"":t+s}const Mo=Is([ko,Co,Ao]),Ro=Is([Mo,So]);function Do(n,e){const t=Ro(n,e);return e+=t.length,t===""?null:{evaluable:new An(t),cursor:e}}function zo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Er(n,e);if(!s)return null;e=s.cursor,e+=Yn(n,e).length;const d=n.substr(e,1);return e+=d.length,d!==")"?null:{evaluable:s.evaluable,cursor:e}}function Uo(n,e){var t;return(t=Do(n,e))!==null&&t!==void 0?t:zo(n,e)}function Sr(n,e){const t=Uo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const d=Sr(n,e);return d?(e=d.cursor,{cursor:e,evaluable:new bo(s,d.evaluable)}):null}function Lo(n,e,t){t+=Yn(e,t).length;const s=n.filter(d=>e.startsWith(d,t))[0];return s?(t+=s.length,t+=Yn(e,t).length,{cursor:t,operator:s}):null}function Io(n,e){return(t,s)=>{const d=n(t,s);if(!d)return null;s=d.cursor;let A=d.evaluable;for(;;){const $=Lo(e,t,s);if(!$)break;s=$.cursor;const fe=n(t,s);if(!fe)return null;s=fe.cursor,A=new Hn($.operator,A,fe.evaluable)}return A?{cursor:s,evaluable:A}:null}}const Go=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Io(n,e),Sr);function Er(n,e){return e+=Yn(n,e).length,Go(n,e)}function Fo(n){const e=Er(n,0);return!e||e.cursor+Yn(n,e.cursor).length!==n.length?null:e.evaluable}function Zt(n){var e;const t=Fo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function kr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Zt(n);if(!F(e))return e}return 0}function Oo(n){return String(n)}function yt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Vo=yt(0);function fs(n){return Vo(n)+"%"}function Tr(n){return String(n)}function Fs(n){return n}function Xn({primary:n,secondary:e,forward:t,backward:s}){let d=!1;function A($){d||(d=!0,$(),d=!1)}n.emitter.on("change",$=>{A(()=>{e.setRawValue(t(n,e),$.options)})}),e.emitter.on("change",$=>{A(()=>{n.setRawValue(s(n,e),$.options)}),A(()=>{e.setRawValue(t(n,e),$.options)})}),A(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Ct(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Jn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Xt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function No(n){return n==="ArrowUp"||n==="ArrowDown"}function Cr(n){return No(n)||n==="ArrowLeft"||n==="ArrowRight"}function Os(n,e){var t,s;const d=e.ownerDocument.defaultView,A=e.getBoundingClientRect();return{x:n.pageX-(((t=d&&d.scrollX)!==null&&t!==void 0?t:0)+A.left),y:n.pageY-(((s=d&&d.scrollY)!==null&&s!==void 0?s:0)+A.top)}}class mn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new Y,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Os(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Os(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Os(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,d=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-d.left,y:s.clientY-d.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function ht(n,e,t,s,d){const A=(n-e)/(t-e);return s+A*(d-s)}function Br(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function xt(n,e,t){return Math.min(Math.max(n,e),t)}function Ar(n,e){return(n%e+e)%e}const Ut=N("txt");class $o{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Ut(),Ut(void 0,"num")),t.arrayPosition&&this.element.classList.add(Ut(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Ut("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ut()),this.inputElement.classList.add(Ut("i"));const d=e.createElement("div");d.classList.add(Ut("k")),this.element.appendChild(d),this.knobElement=d;const A=e.createElementNS(P,"svg");A.classList.add(Ut("g")),this.knobElement.appendChild(A);const $=e.createElementNS(P,"path");$.classList.add(Ut("gb")),A.appendChild($),this.guideBodyElem_=$;const fe=e.createElementNS(P,"path");fe.classList.add(Ut("gh")),A.appendChild(fe),this.guideHeadElem_=fe;const De=e.createElement("div");De.classList.add(N("tt")()),this.knobElement.appendChild(De),this.tooltipElem_=De,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Ut(void 0,"drg"));return}this.element.classList.add(Ut(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),d=xt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+d},0 L${s},4 L${s+d},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const A=this.props_.get("formatter");this.tooltipElem_.textContent=A(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Qn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=me(null),this.view=new $o(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const d=new mn(this.view.knobElement);d.emitter.on("down",this.onPointerDown_),d.emitter.on("move",this.onPointerMove_),d.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const d=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),A=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let $=e;return d!==void 0&&($=Math.max($,d)),A!==void 0&&($=Math.min($,A)),$}onInputChange_(e){const s=e.currentTarget.value,d=this.parser_(s);F(d)||(this.value.rawValue=this.constrainValue_(d)),this.view.refresh()}onInputKeyDown_(e){const t=Ct(this.baseStep_,Jn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Ct(this.baseStep_,Jn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Vs=N("sld");class qo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Vs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const d=e.createElement("div");d.classList.add(Vs("k")),this.trackElement.appendChild(d),this.knobElement=d,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=xt(ht(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new qo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(ht(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Ct(this.baseStep_,Xt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Ct(this.baseStep_,Xt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ns=N("sldtxt");class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ns());const s=e.createElement("div");s.classList.add(Ns("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(Ns("t")),this.textView_=t.textView,d.appendChild(this.textView_.element),this.element.appendChild(d)}}class $s{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Wo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Qn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Ko(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function es(n,e){n.write(e)}function _s(n){const e=ie;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Mr(n){if(n==="inline"||n==="popup")return n}function rn(n){const e=ie;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Rr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function qs(n){return F(n)?null:new Ue(Rr(n))}function jo(n){const e=n?st(n,St):null;return e?e.step:null}function ms(n,e){const t=n&&st(n,St);return t?Br(t.step):Math.max(Br(e),2)}function Mn(n){const e=jo(n);return e??1}function Rn(n,e){var t;const s=n&&st(n,St),d=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return d===0?.1:Math.pow(10,Math.floor(Math.log10(d))-1)}const vs=N("ckb");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(vs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(vs("l")),this.element.appendChild(s);const d=e.createElement("input");d.classList.add(vs("i")),d.type="checkbox",s.appendChild(d),this.inputElement=d,t.viewProps.bindDisabled(this.inputElement);const A=e.createElement("div");A.classList.add(vs("w")),s.appendChild(A);const $=y(e,"check");A.appendChild($),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Zo(n){const e=[],t=qs(n.options);return t&&e.push(t),new He(e)}const Xo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=be(e,{options:ie.optional.custom(_s)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Wt,constraint:n=>Zo(n.params),writer:n=>es},controller:n=>{const e=n.document,t=n.value,s=n.constraint,d=s&&st(s,Ue);return d?new pt(e,{props:new O({options:d.values.value("options")}),value:t,viewProps:n.viewProps}):new Yo(e,{value:t,viewProps:n.viewProps})}},vn=N("col");class Jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vn()),t.foldable.bindExpandedClass(this.element,vn(void 0,"expanded")),se(t.foldable,"completed",Te(this.element,vn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(vn("h")),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(vn("s")),s.appendChild(d),this.swatchElement=d;const A=e.createElement("div");if(A.classList.add(vn("t")),s.appendChild(A),this.textElement=A,t.pickerLayout==="inline"){const $=e.createElement("div");$.classList.add(vn("p")),this.element.appendChild($),this.pickerElement=$}else this.pickerElement=null}}function Qo(n,e,t){const s=xt(n/255,0,1),d=xt(e/255,0,1),A=xt(t/255,0,1),$=Math.max(s,d,A),fe=Math.min(s,d,A),De=$-fe;let Le=0,Ye=0;const Qe=(fe+$)/2;return De!==0&&(Ye=De/(1-Math.abs($+fe-1)),s===$?Le=(d-A)/De:d===$?Le=2+(A-s)/De:Le=4+(s-d)/De,Le=Le/6+(Le<0?1:0)),[Le*360,Ye*100,Qe*100]}function ea(n,e,t){const s=(n%360+360)%360,d=xt(e/100,0,1),A=xt(t/100,0,1),$=(1-Math.abs(2*A-1))*d,fe=$*(1-Math.abs(s/60%2-1)),De=A-$/2;let Le,Ye,Qe;return s>=0&&s<60?[Le,Ye,Qe]=[$,fe,0]:s>=60&&s<120?[Le,Ye,Qe]=[fe,$,0]:s>=120&&s<180?[Le,Ye,Qe]=[0,$,fe]:s>=180&&s<240?[Le,Ye,Qe]=[0,fe,$]:s>=240&&s<300?[Le,Ye,Qe]=[fe,0,$]:[Le,Ye,Qe]=[$,0,fe],[(Le+De)*255,(Ye+De)*255,(Qe+De)*255]}function ta(n,e,t){const s=xt(n/255,0,1),d=xt(e/255,0,1),A=xt(t/255,0,1),$=Math.max(s,d,A),fe=Math.min(s,d,A),De=$-fe;let Le;De===0?Le=0:$===s?Le=60*(((d-A)/De%6+6)%6):$===d?Le=60*((A-s)/De+2):Le=60*((s-d)/De+4);const Ye=$===0?0:De/$,Qe=$;return[Le,Ye*100,Qe*100]}function Dr(n,e,t){const s=Ar(n,360),d=xt(e/100,0,1),A=xt(t/100,0,1),$=A*d,fe=$*(1-Math.abs(s/60%2-1)),De=A-$;let Le,Ye,Qe;return s>=0&&s<60?[Le,Ye,Qe]=[$,fe,0]:s>=60&&s<120?[Le,Ye,Qe]=[fe,$,0]:s>=120&&s<180?[Le,Ye,Qe]=[0,$,fe]:s>=180&&s<240?[Le,Ye,Qe]=[0,fe,$]:s>=240&&s<300?[Le,Ye,Qe]=[fe,0,$]:[Le,Ye,Qe]=[$,0,fe],[(Le+De)*255,(Ye+De)*255,(Qe+De)*255]}function na(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function sa(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function bn(n){return[n[0],n[1],n[2]]}function zr(n,e){return[n[0],n[1],n[2],e]}const ra={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:na,rgb:ea},hsv:{hsl:sa,hsv:(n,e,t)=>[n,e,t],rgb:Dr},rgb:{hsl:Qo,hsv:ta,rgb:(n,e,t)=>[n,e,t]}};function bs(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function ia(n,e){return n===e?e:Ar(n,e)}function oa(n,e,t){var s;const d=bs(e,t);return[e==="rgb"?xt(n[0],0,d[0]):ia(n[0],d[0]),xt(n[1],0,d[1]),xt(n[2],0,d[2]),xt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Ur(n,e,t,s){const d=bs(e,t),A=bs(e,s);return n.map(($,fe)=>$/d[fe]*A[fe])}function aa(n,e,t){const s=Ur(n,e.mode,e.type,"int"),d=ra[e.mode][t.mode](...s);return Ur(d,t.mode,"int",t.type)}function gs(n,e){return typeof n!="object"||F(n)?!1:e in n&&typeof n[e]=="number"}class $e{static black(e="int"){return new $e([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new $e(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return gs(e,"r")&&gs(e,"g")&&gs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&gs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,d=t.comps_;for(let A=0;A<s.length;A++)if(s[A]!==d[A])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=oa(e,t,s)}getComponents(e,t="int"){return zr(aa(bn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const on=N("colp");class la{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(on("hsv"));const d=e.createElement("div");d.classList.add(on("sv")),this.svPaletteView_=t.svPaletteView,d.appendChild(this.svPaletteView_.element),s.appendChild(d);const A=e.createElement("div");A.classList.add(on("h")),this.hPaletteView_=t.hPaletteView,A.appendChild(this.hPaletteView_.element),s.appendChild(A),this.element.appendChild(s);const $=e.createElement("div");if($.classList.add(on("rgb")),this.textView_=t.textView,$.appendChild(this.textView_.element),this.element.appendChild($),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const fe=e.createElement("div");fe.classList.add(on("a"));const De=e.createElement("div");De.classList.add(on("ap")),De.appendChild(this.alphaViews_.palette.element),fe.appendChild(De);const Le=e.createElement("div");Le.classList.add(on("at")),Le.appendChild(this.alphaViews_.text.element),fe.appendChild(Le),this.element.appendChild(fe)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function ca(n){return n==="int"?"int":n==="float"?"float":void 0}function Ws(n){const e=ie;return be(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(ca)}),expanded:e.optional.boolean,picker:e.optional.custom(Mr)})}function gn(n){return n?.1:1}function wn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function ua(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Lt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const da={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Lr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return da[s](t)}function Ir(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Lt(e[1],255),Lt(e[2],255),Lt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Gr(n){return e=>{const t=Ir(e);return t?new $e(t,"rgb",n):null}}function Fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Lt(e[1],255),Lt(e[2],255),Lt(e[3],255),Lt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Or(n){return e=>{const t=Fr(e);return t?new $e(t,"rgb",n):null}}function Vr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Lr(e[1]),Lt(e[2],100),Lt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Nr(n){return e=>{const t=Vr(e);return t?new $e(t,"hsl",n):null}}function $r(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Lr(e[1]),Lt(e[2],100),Lt(e[3],100),Lt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function qr(n){return e=>{const t=$r(e);return t?new $e(t,"hsl",n):null}}function Wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function pa(n){const e=Wr(n);return e?new $e(e,"rgb","int"):null}function Kr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),ht(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),ht(parseInt(t[4],16),0,255,0,1)]:null}function ha(n){const e=Kr(n);return e?new $e(e,"rgb","int"):null}function jr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Hr(n){return e=>{const t=jr(e);return t?new $e(t,"rgb",n):null}}function Yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Zr(n){return e=>{const t=Yr(e);return t?new $e(t,"rgb",n):null}}const fa=[{parser:Wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Kr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ir,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Vr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:$r,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:jr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Yr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function _a(n){return fa.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Ks(n,e="int"){const t=_a(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Xr={int:[pa,ha,Gr("int"),Or("int"),Nr("int"),qr("int"),Hr("int"),Zr("int")],float:[Gr("float"),Or("float"),Nr("float"),qr("float"),Hr("float"),Zr("float")]};function ma(n){const e=Xr[n];return t=>{if(typeof t!="string")return $e.black(n);const s=e.reduce((d,A)=>d||A(t),null);return s??$e.black(n)}}function js(n){const e=Xr[n];return t=>e.reduce((s,d)=>s||d(t),null)}function Jr(n){const e=xt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Qr(n,e="#"){const t=bn(n.getComponents("rgb")).map(Jr).join("");return`${e}${t}`}function Hs(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Jr).join("");return`${e}${s}`}function ei(n,e){const t=yt(e==="float"?2:0);return`rgb(${bn(n.getComponents("rgb",e)).map(d=>t(d)).join(", ")})`}function va(n){return e=>ei(e,n)}function ws(n,e){const t=yt(2),s=yt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((A,$)=>($===3?t:s)(A)).join(", ")})`}function ba(n){return e=>ws(e,n)}function ga(n){const e=[yt(0),fs,fs];return`hsl(${bn(n.getComponents("hsl")).map((s,d)=>e[d](s)).join(", ")})`}function wa(n){const e=[yt(0),fs,fs,yt(2)];return`hsla(${n.getComponents("hsl").map((s,d)=>e[d](s)).join(", ")})`}function ti(n,e){const t=yt(e==="float"?2:0),s=["r","g","b"];return`{${bn(n.getComponents("rgb",e)).map((A,$)=>`${s[$]}: ${t(A)}`).join(", ")}}`}function xa(n){return e=>ti(e,n)}function ni(n,e){const t=yt(2),s=yt(e==="float"?2:0),d=["r","g","b","a"];return`{${n.getComponents("rgb",e).map(($,fe)=>{const De=fe===3?t:s;return`${d[fe]}: ${De($)}`}).join(", ")}}`}function ya(n){return e=>ni(e,n)}const Pa=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Qr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Hs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:ga},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:wa},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:va(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:ba(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:xa(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:ya(e)}],[])];function Ys(n){return Pa.reduce((e,t)=>e||(ua(t.format,n)?t.stringifier:null),null)}const ts=N("apl");class Sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ts()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ts("b")),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(ts("c")),s.appendChild(d),this.colorElem_=d;const A=e.createElement("div");A.classList.add(ts("m")),this.element.appendChild(A),this.markerElem_=A;const $=e.createElement("div");$.classList.add(ts("p")),this.markerElem_.appendChild($),this.previewElem_=$,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new $e([t[0],t[1],t[2],0],"rgb"),d=new $e([t[0],t[1],t[2],255],"rgb"),A=["to right",ws(s),ws(d)];this.colorElem_.style.background=`linear-gradient(${A.join(",")})`,this.previewElem_.style.backgroundColor=ws(e);const $=ht(t[3],0,1,0,100);this.markerElem_.style.left=`${$}%`}onValueChange_(){this.update_()}}class Ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Sa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,d=this.value.rawValue,[A,$,fe]=d.getComponents("hsv");this.value.setRawValue(new $e([A,$,fe,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Ct(gn(!0),Xt(e));if(t===0)return;const s=this.value.rawValue,[d,A,$,fe]=s.getComponents("hsv");this.value.setRawValue(new $e([d,A,$,fe+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Ct(gn(!0),Xt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Dn=N("coltxt");function ka(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,d)=>{const A=n.createElement("option");return A.textContent=d.text,A.value=d.value,s.appendChild(A),s},n.createDocumentFragment())),e}class Ta{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Dn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Dn("m")),this.modeElem_=ka(e),this.modeElem_.classList.add(Dn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const d=e.createElement("div");d.classList.add(Dn("mm")),d.appendChild(y(e,"dropdown")),s.appendChild(d),this.element.appendChild(s);const A=e.createElement("div");A.classList.add(Dn("w")),this.element.appendChild(A),this.textsElem_=A,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,$=>{this.modeElem_.value=$})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){q(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Dn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ca(n){return yt(n==="float"?2:0)}function Ba(n,e,t){const s=bs(n,e)[t];return new vt({min:0,max:s})}function Zs(n,e,t){return new Qn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:gn(!1),parser:e.parser,props:O.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ca(e.colorType)}),value:me(0,{constraint:Ba(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Aa{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=me(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ta(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Zs(e,t,0),Zs(e,t,1),Zs(e,t,2)];return s.forEach((d,A)=>{Xn({primary:this.value,secondary:d.value,forward:$=>$.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[A],backward:($,fe)=>{const De=this.colorMode.rawValue,Le=$.rawValue.getComponents(De,this.colorType_);return Le[A]=fe.rawValue,new $e(zr(bn(Le),Le[3]),De,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Xs=N("hpl");class Ma{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Xs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Xs("c")),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(Xs("m")),this.element.appendChild(d),this.markerElem_=d,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=ei(new $e([t,100,100],"hsv"));const s=ht(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Ra{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ma(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=ht(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),d=this.value.rawValue,[,A,$,fe]=d.getComponents("hsv");this.value.setRawValue(new $e([s,A,$,fe],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Ct(gn(!1),Xt(e));if(t===0)return;const s=this.value.rawValue,[d,A,$,fe]=s.getComponents("hsv");this.value.setRawValue(new $e([d+t,A,$,fe],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Ct(gn(!1),Xt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Js=N("svp"),si=64;class Da{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Js()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=si,s.width=si,s.classList.add(Js("c")),this.element.appendChild(s),this.canvasElement=s;const d=e.createElement("div");d.classList.add(Js("m")),this.element.appendChild(d),this.markerElem_=d,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),d=this.canvasElement.width,A=this.canvasElement.height,$=e.getImageData(0,0,d,A),fe=$.data;for(let Ye=0;Ye<A;Ye++)for(let Qe=0;Qe<d;Qe++){const xn=ht(Qe,0,d,0,100),ss=ht(Ye,0,A,100,0),rs=Dr(s[0],xn,ss),xs=(Ye*d+Qe)*4;fe[xs]=rs[0],fe[xs+1]=rs[1],fe[xs+2]=rs[2],fe[xs+3]=255}e.putImageData($,0,0);const De=ht(s[1],0,100,0,100);this.markerElem_.style.left=`${De}%`;const Le=ht(s[2],0,100,100,0);this.markerElem_.style.top=`${Le}%`}onValueChange_(){this.update_()}}class za{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Da(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=ht(e.point.x,0,e.bounds.width,0,100),d=ht(e.point.y,0,e.bounds.height,100,0),[A,,,$]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new $e([A,s,d,$],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Cr(e.key)&&e.preventDefault();const[t,s,d,A]=this.value.rawValue.getComponents("hsv"),$=gn(!1),fe=Ct($,Xt(e)),De=Ct($,Jn(e));fe===0&&De===0||this.value.setRawValue(new $e([t,s+fe,d+De,A],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=gn(!1),s=Ct(t,Xt(e)),d=Ct(t,Jn(e));s===0&&d===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ua{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Ra(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new za(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Ea(e,{value:this.value,viewProps:this.viewProps}),text:new Qn(e,{parser:Zt,baseStep:.1,props:O.fromObject({draggingScale:.01,formatter:yt(2)}),value:me(0,{constraint:new vt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Xn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,d)=>{const A=s.rawValue.getComponents();return A[3]=d.rawValue,new $e(A,s.rawValue.mode)}}),this.textC_=new Aa(e,{colorType:t.colorType,parser:Zt,value:this.value,viewProps:this.viewProps}),this.view=new la(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Qs=N("colsw");class La{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Qs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Qs("sw")),this.element.appendChild(s),this.swatchElem_=s;const d=e.createElement("button");d.classList.add(Qs("b")),t.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Hs(e)}onValueChange_(){this.update_()}}class Ia{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new La(e,{value:this.value,viewProps:this.viewProps})}}class er{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ze.create(t.expanded),this.swatchC_=new Ia(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new qt(e,{parser:t.parser,props:O.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Jo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new fn(e,{viewProps:this.viewProps}):null;const d=new Ua(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});d.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=d,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(d.view.element),Xn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,$)=>$.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ne(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Ga(n,e){return $e.isColorObject(n)?$e.fromObject(n,e):$e.black(e)}function Fa(n){return bn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Oa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const d=Math.floor(s===3?t*255:t)&255;return e<<8|d},0)>>>0}function Va(n){return new $e([n>>16&255,n>>8&255,n&255],"rgb")}function Na(n){return new $e([n>>24&255,n>>16&255,n>>8&255,ht(n&255,0,255,0,1)],"rgb")}function $a(n){return typeof n!="number"?$e.black():Va(n)}function qa(n){return typeof n!="number"?$e.black():Na(n)}function Wa(n){const e=Ys(n);return e?(t,s)=>{es(t,e(s))}:null}function Ka(n){const e=n?Oa:Fa;return(t,s)=>{es(t,e(s))}}function ja(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function Ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Ya(n,e){return(t,s)=>{n?ja(t,s,e):Ha(t,s,e)}}function tr(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Za(n){return n?e=>Hs(e,"0x"):e=>Qr(e,"0x")}function Xa(n){return"color"in n||"view"in n&&n.view==="color"}const Ja={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Xa(e))return null;const t=Ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>tr(n.params)?qa:$a,equals:$e.equals,writer:n=>Ka(tr(n.params))},controller:n=>{const e=tr(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new er(n.document,{colorType:"int",expanded:t??!1,formatter:Za(e),parser:js("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Qa(n){return $e.isRgbaColorObject(n)}function el(n){return e=>Ga(e,n)}function tl(n,e){return t=>n?ni(t,e):ti(t,e)}const nl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!$e.isColorObject(n))return null;const t=Ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>el(wn(n.params)),equals:$e.equals,writer:n=>Ya(Qa(n.initialValue),wn(n.params))},controller:n=>{var e;const t=$e.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,d="picker"in n.params?n.params.picker:void 0,A=(e=wn(n.params))!==null&&e!==void 0?e:"int";return new er(n.document,{colorType:A,expanded:s??!1,formatter:tl(t,A),parser:js(A),pickerLayout:d??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},sl={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Ks(n,wn(e));if(!t||!Ys(t))return null;const d=Ws(e);return d?{initialValue:n,params:d}:null},binding:{reader:n=>{var e;return ma((e=wn(n.params))!==null&&e!==void 0?e:"int")},equals:$e.equals,writer:n=>{const e=Ks(n.initialValue,wn(n.params));if(!e)throw z.shouldNeverHappen();const t=Wa(e);if(!t)throw z.notBindable();return t}},controller:n=>{const e=Ks(n.initialValue,wn(n.params));if(!e)throw z.shouldNeverHappen();const t=Ys(e);if(!t)throw z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,d="picker"in n.params?n.params.picker:void 0;return new er(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:js(e.type),pickerLayout:d??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class an{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,d)=>{var A,$;return($=(A=this.components[d])===null||A===void 0?void 0:A.constrain(s))!==null&&$!==void 0?$:s});return this.asm_.fromComponents(t)}}const ri=N("pndtxt");class rl{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(ri()),this.textViews.forEach(s=>{const d=e.createElement("div");d.classList.add(ri("a")),d.appendChild(s.element),this.element.appendChild(d)})}}function il(n,e,t){return new Qn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:me(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class nr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,d)=>il(e,t,d)),this.acs_.forEach((s,d)=>{Xn({primary:this.value,secondary:s.value,forward:A=>t.assembly.toComponents(A.rawValue)[d],backward:(A,$)=>{const fe=t.assembly.toComponents(A.rawValue);return fe[d]=$.rawValue,t.assembly.fromComponents(fe)}})}),this.view=new rl(e,{textViews:this.acs_.map(s=>s.view)})}}function ii(n,e){return"step"in n&&!F(n.step)?new St(n.step,e):null}function oi(n){return!F(n.max)&&!F(n.min)?new vt({max:n.max,min:n.min}):!F(n.max)||!F(n.min)?new rt({max:n.max,min:n.min}):null}function ol(n){const e=st(n,vt);if(e)return[e.values.get("min"),e.values.get("max")];const t=st(n,rt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function al(n,e){const t=[],s=ii(n,e);s&&t.push(s);const d=oi(n);d&&t.push(d);const A=qs(n.options);return A&&t.push(A),new He(t)}const ll={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ie,s=be(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(_s),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>kr,constraint:n=>al(n.params,n.initialValue),writer:n=>es},controller:n=>{var e;const t=n.value,s=n.constraint,d=s&&st(s,Ue);if(d)return new pt(n.document,{props:new O({options:d.values.value("options")}),value:t,viewProps:n.viewProps});const A=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:yt(ms(s,t.rawValue)),$=s&&st(s,vt);return $?new $s(n.document,{baseStep:Mn(s),parser:Zt,sliderProps:new O({maxValue:$.values.value("max"),minValue:$.values.value("min")}),textProps:O.fromObject({draggingScale:Rn(s,t.rawValue),formatter:A}),value:t,viewProps:n.viewProps}):new Qn(n.document,{baseStep:Mn(s),parser:Zt,props:O.fromObject({draggingScale:Rn(s,t.rawValue),formatter:A}),value:t,viewProps:n.viewProps})}};class ln{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const ai={toComponents:n=>n.getComponents(),fromComponents:n=>new ln(...n)},zn=N("p2d");class cl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(zn()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,Te(this.element,zn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(zn("h")),this.element.appendChild(s);const d=e.createElement("button");d.classList.add(zn("b")),d.appendChild(y(e,"p2dpad")),t.viewProps.bindDisabled(d),s.appendChild(d),this.buttonElement=d;const A=e.createElement("div");if(A.classList.add(zn("t")),s.appendChild(A),this.textElement=A,t.pickerLayout==="inline"){const $=e.createElement("div");$.classList.add(zn("p")),this.element.appendChild($),this.pickerElement=$}else this.pickerElement=null}}const cn=N("p2dp");class ul{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(cn()),t.layout==="popup"&&this.element.classList.add(cn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(cn("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const d=e.createElementNS(P,"svg");d.classList.add(cn("g")),this.padElement.appendChild(d),this.svgElem_=d;const A=e.createElementNS(P,"line");A.classList.add(cn("ax")),A.setAttributeNS(null,"x1","0"),A.setAttributeNS(null,"y1","50%"),A.setAttributeNS(null,"x2","100%"),A.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(A);const $=e.createElementNS(P,"line");$.classList.add(cn("ax")),$.setAttributeNS(null,"x1","50%"),$.setAttributeNS(null,"y1","0"),$.setAttributeNS(null,"x2","50%"),$.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild($);const fe=e.createElementNS(P,"line");fe.classList.add(cn("l")),fe.setAttributeNS(null,"x1","50%"),fe.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(fe),this.lineElem_=fe;const De=e.createElement("div");De.classList.add(cn("m")),this.padElement.appendChild(De),this.markerElem_=De,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,d=ht(e,-s,+s,0,100),A=ht(t,-s,+s,0,100),$=this.invertsY_?100-A:A;this.lineElem_.setAttributeNS(null,"x2",`${d}%`),this.lineElem_.setAttributeNS(null,"y2",`${$}%`),this.markerElem_.style.left=`${d}%`,this.markerElem_.style.top=`${$}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function li(n,e,t){return[Ct(e[0],Xt(n)),Ct(e[1],Jn(n))*(t?1:-1)]}class dl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new ul(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new mn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,d=ht(e.point.x,0,e.bounds.width,-s,+s),A=ht(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new ln(d,A),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Cr(e.key)&&e.preventDefault();const[t,s]=li(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new ln(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=li(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class pl{constructor(e,t){var s,d;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ze.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new fn(e,{viewProps:this.viewProps}):null;const A=new dl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});A.view.allFocusableElements.forEach($=>{$.addEventListener("blur",this.onPopupChildBlur_),$.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=A,this.textC_=new nr(e,{assembly:ai,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new cl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(d=this.view.buttonElement)===null||d===void 0||d.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Xn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:$=>$.rawValue,backward:($,fe)=>fe.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ne(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Un{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,d=e.z;return!(typeof t!="number"||typeof s!="number"||typeof d!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const ci={toComponents:n=>n.getComponents(),fromComponents:n=>new Un(...n)};function hl(n){return Un.isObject(n)?new Un(n.x,n.y,n.z):new Un}function fl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function _l(n,e){return new an({assembly:ci,components:[Jt("x"in n?n.x:void 0,e.x),Jt("y"in n?n.y:void 0,e.y),Jt("z"in n?n.z:void 0,e.z)]})}function sr(n,e){return{baseStep:Mn(e),constraint:e,textProps:O.fromObject({draggingScale:Rn(e,n),formatter:yt(ms(e,n))})}}const ml={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Un.isObject(n))return null;const t=ie,s=be(e,{x:t.optional.custom(rn),y:t.optional.custom(rn),z:t.optional.custom(rn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>hl,constraint:n=>_l(n.params,n.initialValue),equals:Un.equals,writer:n=>fl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof an))throw z.shouldNeverHappen();return new nr(n.document,{assembly:ci,axes:[sr(e.rawValue.x,t.components[0]),sr(e.rawValue.y,t.components[1]),sr(e.rawValue.z,t.components[2])],parser:Zt,value:e,viewProps:n.viewProps})}};class Ln{constructor(e=0,t=0,s=0,d=0){this.x=e,this.y=t,this.z=s,this.w=d}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,d=e.z,A=e.w;return!(typeof t!="number"||typeof s!="number"||typeof d!="number"||typeof A!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ui={toComponents:n=>n.getComponents(),fromComponents:n=>new Ln(...n)};function vl(n){return Ln.isObject(n)?new Ln(n.x,n.y,n.z,n.w):new Ln}function bl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function gl(n,e){return new an({assembly:ui,components:[Jt("x"in n?n.x:void 0,e.x),Jt("y"in n?n.y:void 0,e.y),Jt("z"in n?n.z:void 0,e.z),Jt("w"in n?n.w:void 0,e.w)]})}function wl(n,e){return{baseStep:Mn(e),constraint:e,textProps:O.fromObject({draggingScale:Rn(e,n),formatter:yt(ms(e,n))})}}const xl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Ln.isObject(n))return null;const t=ie,s=be(e,{x:t.optional.custom(rn),y:t.optional.custom(rn),z:t.optional.custom(rn),w:t.optional.custom(rn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>vl,constraint:n=>gl(n.params,n.initialValue),equals:Ln.equals,writer:n=>bl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof an))throw z.shouldNeverHappen();return new nr(n.document,{assembly:ui,axes:e.rawValue.getComponents().map((s,d)=>wl(s,t.components[d])),parser:Zt,value:e,viewProps:n.viewProps})}};function yl(n){const e=[],t=qs(n.options);return t&&e.push(t),new He(e)}const Pl={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=be(e,{options:ie.optional.custom(_s)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Tr,constraint:n=>yl(n.params),writer:n=>es},controller:n=>{const e=n.document,t=n.value,s=n.constraint,d=s&&st(s,Ue);return d?new pt(e,{props:new O({options:d.values.value("options")}),value:t,viewProps:n.viewProps}):new qt(e,{parser:A=>A,props:O.fromObject({formatter:Fs}),value:t,viewProps:n.viewProps})}},ns={monitor:{defaultInterval:200,defaultLineCount:3}},di=N("mll");class Sl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(di()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(di("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(d=>{d!==void 0&&s.push(this.formatter_(d))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class rr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Sl(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const pi=N("sgl");class El{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(pi()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(pi("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ir{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new El(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const kl={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=be(e,{lineCount:ie.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Wt},controller:n=>{var e;return n.value.rawValue.length===1?new ir(n.document,{formatter:_n,value:n.value,viewProps:n.viewProps}):new rr(n.document,{formatter:_n,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ns.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},un=N("grl");class Tl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(un()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(P,"svg");s.classList.add(un("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const d=e.createElementNS(P,"polyline");this.svgElem_.appendChild(d),this.lineElem_=d;const A=e.createElement("div");A.classList.add(un("t"),N("tt")()),this.element.appendChild(A),this.tooltipElem_=A,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),d=this.props_.get("maxValue"),A=[];this.value.rawValue.forEach((Ye,Qe)=>{if(Ye===void 0)return;const xn=ht(Qe,0,t,0,e.width),ss=ht(Ye,s,d,e.height,0);A.push([xn,ss].join(","))}),this.lineElem_.setAttributeNS(null,"points",A.join(" "));const $=this.tooltipElem_,fe=this.value.rawValue[this.cursor_.rawValue];if(fe===void 0){$.classList.remove(un("t","a"));return}const De=ht(this.cursor_.rawValue,0,t,0,e.width),Le=ht(fe,s,d,e.height,0);$.style.left=`${De}px`,$.style.top=`${Le}px`,$.textContent=`${this.formatter_(fe)}`,$.classList.contains(un("t","a"))||($.classList.add(un("t","a"),un("t","in")),i($),$.classList.remove(un("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Cl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=me(-1),this.view=new Tl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!p(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new mn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ht(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ht(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function or(n){return"format"in n&&!F(n.format)?n.format:yt(2)}function Bl(n){var e;return n.value.rawValue.length===1?new ir(n.document,{formatter:or(n.params),value:n.value,viewProps:n.viewProps}):new rr(n.document,{formatter:or(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ns.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Al(n){var e,t,s;return new Cl(n.document,{formatter:or(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ns.monitor.defaultLineCount,props:O.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function hi(n){return"view"in n&&n.view==="graph"}const Ml={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ie,s=be(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>hi(n)?64:1,reader:n=>kr},controller:n=>hi(n.params)?Al(n):Bl(n)},Rl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ie,s=be(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Tr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new rr(n.document,{formatter:Fs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:ns.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ir(n.document,{formatter:Fs,value:t,viewProps:n.viewProps})}};function Dl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(F(s))return null;const d=ie,A={target:e.target,initialValue:s.initialValue,params:s.params},$=n.binding.reader(A),fe=n.binding.constraint?n.binding.constraint(A):void 0,De=me($(s.initialValue),{constraint:fe,equals:n.binding.equals}),Le=new ce({reader:$,target:e.target,value:De,writer:n.binding.writer(A)}),Ye=d.optional.boolean(e.params.disabled).value,Qe=d.optional.boolean(e.params.hidden).value,xn=n.controller({constraint:fe,document:e.document,initialValue:s.initialValue,params:s.params,value:Le.value,viewProps:_.create({disabled:Ye,hidden:Qe})});return new Je(e.document,{binding:Le,blade:Fe(),props:O.fromObject({label:"label"in e.params?(t=d.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:xn})}function zl(n,e){return e===0?new U:new Q(n,e??ns.monitor.defaultInterval)}function Ul(n,e){var t,s,d;const A=ie,$=n.accept(e.target.read(),e.params);if(F($))return null;const fe={target:e.target,initialValue:$.initialValue,params:$.params},De=n.binding.reader(fe),Le=(s=(t=A.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize($.params))!==null&&s!==void 0?s:1,Ye=A.optional.number(e.params.interval).value,Qe=new Be({reader:De,target:e.target,ticker:zl(e.document,Ye),value:Se(Le)}),xn=A.optional.boolean(e.params.disabled).value,ss=A.optional.boolean(e.params.hidden).value,rs=n.controller({document:e.document,params:$.params,value:Qe.value,viewProps:_.create({disabled:xn,hidden:ss})});return new et(e.document,{binding:Qe,blade:Fe(),props:O.fromObject({label:"label"in e.params?(d=A.optional.string(e.params.label).value)!==null&&d!==void 0?d:null:e.target.key}),valueController:rs})}class Ll{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const d=t.read();if(F(d))throw new z({context:{key:t.key},type:"nomatchingcontroller"});const A=this.pluginsMap_.inputs.reduce(($,fe)=>$??Dl(fe,{document:e,target:t,params:s}),null);if(A)return A;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const d=this.pluginsMap_.monitors.reduce((A,$)=>A??Ul($,{document:e,params:s,target:t}),null);if(d)return d;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((d,A)=>d??Us(A,{document:e,params:t}),null);if(!s)throw new z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Je)return new Xe(e);if(e instanceof et)return new je(e);if(e instanceof it)return new ut(e,this);const t=this.pluginsMap_.blades.reduce((s,d)=>s??d.api({controller:e,pool:this}),null);if(!t)throw z.shouldNeverHappen();return t}}function Il(){const n=new Ll;return[$l,ml,xl,Pl,ll,sl,nl,Ja,Xo,kl,Rl,Ml,Ae,kn,zs,sn].forEach(e=>{n.register(e)}),n}function Gl(n){return ln.isObject(n)?new ln(n.x,n.y):new ln}function Fl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Jt(n,e){if(!n)return;const t=[],s=ii(n,e);s&&t.push(s);const d=oi(n);return d&&t.push(d),new He(t)}function Ol(n,e){return new an({assembly:ai,components:[Jt("x"in n?n.x:void 0,e.x),Jt("y"in n?n.y:void 0,e.y)]})}function fi(n,e){const[t,s]=n?ol(n):[];if(!F(t)||!F(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const d=Mn(n);return Math.max(Math.abs(d)*10,Math.abs(e)*10)}function Vl(n,e){const t=e instanceof an?e.components[0]:void 0,s=e instanceof an?e.components[1]:void 0,d=fi(t,n.x),A=fi(s,n.y);return Math.max(d,A)}function _i(n,e){return{baseStep:Mn(e),constraint:e,textProps:O.fromObject({draggingScale:Rn(e,n),formatter:yt(ms(e,n))})}}function Nl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const $l={id:"input-point2d",type:"input",accept:(n,e)=>{if(!ln.isObject(n))return null;const t=ie,s=be(e,{expanded:t.optional.boolean,picker:t.optional.custom(Mr),x:t.optional.custom(rn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Gl,constraint:n=>Ol(n.params,n.initialValue),equals:ln.equals,writer:n=>Fl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof an))throw z.shouldNeverHappen();const d="expanded"in n.params?n.params.expanded:void 0,A="picker"in n.params?n.params.picker:void 0;return new pl(e,{axes:[_i(t.rawValue.x,s.components[0]),_i(t.rawValue.y,s.components[1])],expanded:d??!1,invertsY:Nl(n.params),maxValue:Vl(t.rawValue,s),parser:Zt,pickerLayout:A??"popup",value:t,viewProps:n.viewProps})}};class mi extends u{constructor(e){super(e),this.emitter_=new Y,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}class vi extends u{constructor(e){super(e),this.emitter_=new Y,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}class bi extends u{constructor(e){super(e),this.emitter_=new Y,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}const ql=function(){return{id:"list",type:"blade",accept(n){const e=ie,t=be(n,{options:e.required.custom(_s),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Ue(Rr(n.params.options)),t=me(n.params.value,{constraint:e}),s=new pt(n.document,{props:new O({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Nt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Nt)||!(n.controller.valueController instanceof pt)?null:new mi(n.controller)}}}();function Wl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Kl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class jl extends dt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Je).map(s=>s.binding);Kl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Je).map(t=>t.binding.target);return Wl(e)}refresh(){this.controller_.rackController.rack.find(Je).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(et).forEach(e=>{e.binding.read()})}}class Hl extends tn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Yl={id:"slider",type:"blade",accept(n){const e=ie,t=be(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,d=new vt({max:n.params.max,min:n.params.min}),A=new $s(n.document,{baseStep:1,parser:Zt,sliderProps:new O({maxValue:d.values.value("max"),minValue:d.values.value("min")}),textProps:O.fromObject({draggingScale:Rn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:Oo}),value:me(s,{constraint:d}),viewProps:n.viewProps});return new Nt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:A})},api(n){return!(n.controller instanceof Nt)||!(n.controller.valueController instanceof $s)?null:new vi(n.controller)}},Zl=function(){return{id:"text",type:"blade",accept(n){const e=ie,t=be(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new qt(n.document,{parser:n.params.parse,props:O.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:me(n.params.value),viewProps:n.viewProps});return new Nt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Nt)||!(n.controller.valueController instanceof qt)?null:new bi(n.controller)}}}();function Xl(n){const e=n.createElement("div");return e.classList.add(N("dfw")()),n.body&&n.body.appendChild(e),e}function gi(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Jl extends jl{constructor(e){var t,s;const d=e??{},A=(t=d.document)!==null&&t!==void 0?t:c(),$=Il(),fe=new Hl(A,{expanded:d.expanded,blade:Fe(),props:O.fromObject({title:d.title}),viewProps:_.create()});super(fe,$),this.pool_=$,this.containerElem_=(s=d.container)!==null&&s!==void 0?s:Xl(A),this.containerElem_.appendChild(this.element),this.doc_=A,this.usesDefaultWrapper_=!d.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&gi(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){gi(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Yl,ql,sn,Zl]})}}const Ql=new v("3.1.10");a.BladeApi=u,a.ButtonApi=X,a.FolderApi=dt,a.InputBindingApi=Xe,a.ListApi=mi,a.MonitorBindingApi=je,a.Pane=Jl,a.SeparatorApi=Tn,a.SliderApi=vi,a.TabApi=Wn,a.TabPageApi=qn,a.TextApi=bi,a.TpChangeEvent=B,a.VERSION=Ql,Object.defineProperty(a,"__esModule",{value:!0})})})(pr,pr.exports);var ro=pr.exports;const Bc=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
//   12 u32       feature_mode   (0 = SV, 1 = SB, 2 = NASG)
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
// Surfel records (8 × u32 each; x,y,z are the first three f32). Read only by the NASG path,
// which needs the view direction in f32: the SHSolver copy is f16-packed, and sharp Gabor
// lobes (k up to 40) turned that quantisation into colour errors up to ~1.0.
@group(1) @binding(6) var<storage, read>       surfels_raw  : array<f32>;

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

// =============================================================================
// NASG-Gabor lobe evaluation — feature_mode == 2 (\`--feature nasg\`).
// Per-Gauss stride 3 + K*9: SH-DC (3) then K lobes of
//   (cosθ, cosϕ, cosτ, λ_raw, a_raw, k_raw, r, g, b).
// Port of nest-splatting gaussian_renderer.eval_nasg (itself a port of
// ../NASGabor spherical_nasg_gabor.cuh::nasg_gabor_fwd, without c0):
//   λ = min(e^λ_raw, 1e4), a = min(e^a_raw, 1e4), k = 20·(tanh k_raw + 1),
//   pdf = exp(2λ(K^(e+a·vx²/(1−vz²))·K − 1)) · K^(…) · ½(1+cos(k·vx)) · λ√(1+a)/(2π(1+1e-8−e^{−2λ}))
//   with K = (vz+1)/2; pole mask vz ≥ 1−1e-7 → pdf 1, vz ≤ −1+1e-7 → 0.
// The lobe sum goes INSIDE the inner clamp: max(0, SH_C0·dc + sh_bias + Σ pdf·rgb)
// (training injects it into the SH DC slot).
// =============================================================================
fn eval_nasg(lobe_base: u32, K: u32, d: vec3<f32>) -> vec3<f32> {
    var rgb = vec3<f32>(0.0);
    for (var i = 0u; i < K; i = i + 1u) {
        let p  = lobe_base + i * 9u;
        let ct = clamp(color_params[p + 0u], -0.999999, 0.999999);
        let cp = clamp(color_params[p + 1u], -0.999999, 0.999999);
        let cu = clamp(color_params[p + 2u], -0.999999, 0.999999);
        let st = sqrt(1.0 - ct * ct);
        let sp = sqrt(1.0 - cp * cp);
        let su = sqrt(1.0 - cu * cu);
        let x  = vec3<f32>(ct * cp * cu - st * su, st * cp * cu + ct * su, -sp * cu);
        let z  = vec3<f32>(ct * sp, st * sp, cp);
        let lam = min(exp(color_params[p + 3u]), 1e4);
        let a   = min(exp(color_params[p + 4u]), 1e4);
        let k   = (tanh(color_params[p + 5u]) + 1.0) * 20.0;
        let col = vec3<f32>(color_params[p + 6u], color_params[p + 7u], color_params[p + 8u]);
        let vz = dot(d, z);
        let vx = dot(d, x);
        var pdf = 0.0;
        if vz >= 1.0 - 1e-7 {
            pdf = 1.0;
        } else if vz > -1.0 + 1e-7 {
            let vzs    = clamp(vz, -1.0 + 1e-6, 1.0 - 1e-6);
            let kb     = (vzs + 1.0) * 0.5;
            let kexp   = 5e-6 + a * vx * vx / (1.0 - vzs * vzs);
            let ev     = pow(kb, kexp);
            let inv_n  = lam * sqrt(1.0 + a) / (6.283185307179586 * (1.0 + 1e-8 - exp(-2.0 * lam)));
            let gabor  = (1.0 + cos(k * vx)) * 0.5;
            pdf = exp(2.0 * lam * (ev * kb - 1.0)) * ev * gabor * inv_n;
        }
        rgb = rgb + pdf * col;
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
    if render_settings.feature_mode == 2u {
        // NASG: per-Gauss stride = 3 + K*9 floats. DC at 0..2, lobes at 3+.
        let K = render_settings.color_K;
        let base = v_idx * (3u + K * 9u);
        let pw = vec3<f32>(surfels_raw[v_idx * 8u + 0u], surfels_raw[v_idx * 8u + 1u], surfels_raw[v_idx * 8u + 2u]);
        let dir32 = normalize(pw - camera.view_inv[3].xyz);
        rgb = max(vec3<f32>(0.0), eval_sh_dc(base) + vec3<f32>(render_settings.sh_bias) + eval_nasg(base + 3u, K, dir32));
    } else if render_settings.feature_mode == 1u {
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
    let src_gauss = gid_raw & 0x3FFFFFFFu;   // bit 31 = untextured EWA, bit 30 = --tex3d kernel
    if is_texd && atlas_params.atlas_width > 0u && atlas_params.probe_mode != 0u {
        // Proberes: stage the per-surfel affine into Splat2DGS so the fragment
        // needs ZERO storage-buffer reads (the baked path's whole reason for
        // the UV precompute). The 6 probe floats fit the 6 free slots exactly:
        // 4 f32 + the layer/_pad u32 pair, reinterpreted via bitcast. Safe
        // because this atlas is single-layer, so \`layer\` is identically 0 and
        // the fragment hardcodes layer = 0 under probe_mode.
        // Values are already divided by tex_res by the exporter.
        // probe_mode 2 (WSR) = stride-7 records (6 affine floats + occlusion).
        // probe_mode 3 (pair format) = stride-21 records: 6 affine floats + a 3x4 matrix and bias (15) read by the fragment.
        let po = src_gauss * select(select(6u, 7u, atlas_params.probe_mode == 2u), 21u, atlas_params.probe_mode == 3u);
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
`,ys=`// 2DGS render — vertex+fragment.
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
// Per-surfel probe records (the same buffer preprocess reads as atlas_rects). Only read under probe_mode == 3 (pair
// format: stride 21 = 6 affine floats + 3x4 matrix row-major + bias), one 60-byte read per shaded fragment.
@group(2) @binding(3) var<storage, read> probe_recs      : array<f32>;

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
    // \`--tex3d\` rows (bit 30): the footprint is the EWA box the cull wrote, not the
    // plane disc — use the box support only.
    if (sp.gauss_id & 0xC0000000u) == 0u {
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
    // \`--tex3d\` 3D kernel (gauss_id bit 30): alpha from the EWA conic of the
    // (sx, sy, sz) ellipsoid (a = Tw.z, b = depth_u, c = depth_v), run's kernel on the
    // Mahalanobis m, no screen-space low-pass (the conic carries eps2d). The texture
    // is still fetched at the plane-hit uv (CONIC form), clamped to the disc |s| <= 3.
    // Matches diff_surfel_mixed_3d_tex training + the CUDA lean bake renderer.
    if (in.gauss_id & 0x40000000u) != 0u {
        let dx_t = pixf - in.center_pix;
        let m_t  = in.Tw.z * dx_t.x * dx_t.x
                 + 2.0 * in.depth_plane.x * dx_t.x * dx_t.y
                 + in.depth_plane.y * dx_t.y * dx_t.y;
        if m_t < 0.0 { discard; }
        var ka : f32;
        if BETA_KERNEL == 0u {
            ka = exp(-0.5 * m_t);
        } else {
            if m_t >= K_BETA_SQ + 1e-6 { discard; }
            ka = pow(max(0.0, 1.0 - m_t / K_BETA_SQ), in.shape);
        }
        let a_t = min(0.99, in.color.a * ka);
        if a_t < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        // Plane-hit uv: exact rational CONIC form; a near-zero denominator means the ray
        // grazes the plane far outside the disc, which the clamp maps to the rim.
        let J00 = in.Tu.z; let J01 = in.Tv.x; let J10 = in.Tv.y; let J11 = in.Tv.z;
        let du_lin = J00 * dx_t.x + J01 * dx_t.y;
        let dv_lin = J10 * dx_t.x + J11 * dx_t.y;
        let den = 1.0 + in.Tw.x * dx_t.x + in.Tw.y * dx_t.y;
        let den_s = select(den, select(-1e-6, 1e-6, den >= 0.0), abs(den) < 1e-6);
        var s_t = vec2<f32>(in.Tu.x + du_lin / den_s, in.Tu.y + dv_lin / den_s);
        let r2 = dot(s_t, s_t);
        if r2 > 9.0 { s_t = s_t * sqrt(9.0 / r2); }
        return ShadeGeom(s_t, a_t, in.depth_plane.z, false);
    }

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
    // Skip-texture surfels carry a zero-area rect whose slice id is ONE PAST the last layer
    // (sentinel): the CUDA bake-render skips the lookup (SV only). Sampling it would clamp
    // the array index and read texel (0,0) of the last layer as a bogus residual (found
    // 2026-10-13 in the WebGL2 port; ~0.3 % of garden's surfels).
    if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u
       && (tex_params.probe_mode != 0u || (in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0)) {
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
        if tex_params.probe_mode == 3u {
            // Pair format: two surfels share one RGBA texel; this surfel decodes it with its own 3x4 matrix + bias
            // (record floats 6..20). The exporter folds the per-channel dequantisation into the matrix, so the header's
            // atlas_scale/offset are 1/0 and are not applied here.
            let b = (in.gauss_id & 0x3FFFFFFFu) * 21u + 6u;
            let r = vec4<f32>(rgba.r, rgba.g, rgba.b, rgba.a);
            color = color + vec3<f32>(
                dot(vec4<f32>(probe_recs[b + 0u], probe_recs[b + 1u], probe_recs[b + 2u],  probe_recs[b + 3u]),  r) + probe_recs[b + 12u],
                dot(vec4<f32>(probe_recs[b + 4u], probe_recs[b + 5u], probe_recs[b + 6u],  probe_recs[b + 7u]),  r) + probe_recs[b + 13u],
                dot(vec4<f32>(probe_recs[b + 8u], probe_recs[b + 9u], probe_recs[b + 10u], probe_recs[b + 11u]), r) + probe_recs[b + 14u]);
        } else {
            color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
        }
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
// Texture-aware upscaling (nest-splatting docs/UPSCALING_GRADIENT_AWARE.md, "green gather" mode).
// Second render target, same premultiplied back-to-front blend as the colour: (α·∂Y/∂x, α·∂Y/∂y, 0, α).
// The blend then yields Σ α_i T_i · slope_i, the image-space slope contributed by the surfel textures.
// slope_i = d(residual)/d(pixel) of the atlas at this fragment: one textureGather of the green channel
// (luminance proxy; no extra data, no bake step) gives the 2x2 texels around the sample, their bilinear
// derivative in texel units, chained with d(texel)/d(pixel) from the ray-splat at the neighbouring
// pixels. Units: residual per LOW-RES pixel, which is what the upscaler's Hermite slopes are in.
// ---------------------------------------------------------------------------
fn tex_slope(in: SplatIn, g: ShadeGeom, pos: vec2<f32>) -> vec2<f32> {
    if tex_params.atlas_enabled == 0u || (in.gauss_id & 0xC0000000u) != 0u || tex_params.probe_mode != 0u
       || in.uv_scale.x == 0.0 || in.uv_scale.y == 0.0 || g.lp {
        return vec2<f32>(0.0);
    }
    let pixf = floor(pos);
    let ix = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
    let iy = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
    if !ix.ok || !iy.ok { return vec2<f32>(0.0); }
    let dsdx = ix.s - g.s;
    let dsdy = iy.s - g.s;
    let dims = vec2<f32>(textureDimensions(atlas));
    let uv   = in.uv_base + g.s * in.uv_scale;
    let k0   = abs(in.uv_scale) * dims;                 // texels per unit of surfel uv
    // Only where the texture is MAGNIFIED: with more than ~1.5 texels per low-res pixel the bilinear slope of
    // the 2x2 footprint says nothing about the image (minified / grazing surfels) and overshoots.
    let tpp  = max(length(k0 * dsdx), length(k0 * dsdy));
    if tpp > 1.5 { return vec2<f32>(0.0); }
    // The gathered 2x2 footprint must stay inside this surfel's tile (else it mixes in a neighbour tile).
    let half = abs(in.uv_scale) * tex_params.uv_extent - 1.0 / dims;
    if any(abs(uv - in.uv_base) > half) { return vec2<f32>(0.0); }
    let f    = fract(uv * dims - 0.5);                 // position inside the gathered 2x2 footprint
    let g4   = textureGather(1, atlas, atlas_samp, uv, i32(in.layer));   // x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0)
    let dPu  = mix(g4.z - g4.w, g4.y - g4.x, f.y) * tex_params.atlas_scale;   // per texel, residual units
    let dPv  = mix(g4.x - g4.w, g4.y - g4.z, f.x) * tex_params.atlas_scale;
    let k    = in.uv_scale * dims;                      // texels per unit of surfel uv
    return vec2<f32>(dPu * k.x * dsdx.x + dPv * k.y * dsdx.y,
                     dPu * k.x * dsdy.x + dPv * k.y * dsdy.y);
}

struct SlopeOut {
    @location(0) c : vec4<f32>,
    @location(1) g : vec4<f32>,
};

@fragment
fn fs_slope(in: VertexOutput) -> SlopeOut {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    let sl = tex_slope(sp, g, in.position.xy);
    return SlopeOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(sl, 0.0, 1.0) * g.a);
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
    if (sp.gauss_id & 0xC0000000u) == 0u {   // EWA + --tex3d kernels: centre depth
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
`,Ac=`const WG_SIZE = 256u;
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
}`,Mc=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
    out_coef: ptr<function, f32>,
) -> vec4<f32> {
    *out_coef = 1.0;
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
    // ?mip2d=1 (accel bit 13): Mip-Splatting 2D Mip filter — same dilation (k from bits
    // 16..31, f16; 0 ⇒ 0.3) plus the opacity normalisation sqrt(det_before / det_after).
    // Off: k = 0.3 and coef = 1, i.e. exactly the previous code.
    let mip2d = (render_settings.accel_flags & 8192u) != 0u;
    var kd = 0.3;
    var det0 = 0.0;
    if mip2d {
        let kh = unpack2x16float(render_settings.accel_flags >> 16u).x;
        if kh > 0.0 { kd = kh; }
        det0 = sxx * syy - sxy * sxy;
    }
    sxx = sxx + kd;
    syy = syy + kd;

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
    var opa_eff = opacity;
    if mip2d {
        *out_coef = sqrt(max(det0, 0.0) / det);
        opa_eff = opacity * (*out_coef);
    }
    let t_cut = max(0.5, 2.0 * log(255.0 * max(opa_eff, 1.0 / 255.0)));
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
    // \`--tex3d\` (aux bit 17): textured surfel rendered as a 3D EWA kernel with the
    // atlas on its XY plane. Stored in gauss_id bit 30 for the fragment.
    var tex3d_flag : u32 = 0u;

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
            tex3d_flag = ((s.aux >> 17u) & 1u) & is_textured_flag;
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
            var aabb = vec4<f32>(0.0, 0.0, -1.0, -1.0);
            var conic3 = vec3<f32>(0.0);
            if tex3d_flag != 0u {
                // \`--tex3d\`: footprint = EWA projection of the (sx, sy, sz) ellipsoid
                // (FastGS conic, eps2d 0.3). compute_ewa_cov2d_pixel bins to the Gaussian
                // iso-line m = t_g; rescale the extents to the beta kernel's support
                // (m < 9, opacity-aware under OAC). The CONIC uv below still comes from
                // T_mat (the texture lives on the surfel plane).
                var mcoef = 1.0;
                aabb = compute_ewa_cov2d_pixel(xyz, vec3<f32>(sx, sy, sz), rot, camspace.xyz, opacity, &conic3, &mcoef);
                opacity = opacity * mcoef;   // ?mip2d: stored opacity (fragment alpha + OAC below) carries the 2D Mip coef
                if opacity <= 1.0 / 255.0 { alive_geom = false; }
                if aabb.z >= 0.0 && shape > 1e-6 {
                    let t_g = max(0.5, 2.0 * log(255.0 * max(opacity, 1.0 / 255.0)));
                    var t_b = 9.0;
                    if (render_settings.accel_flags & 1u) != 0u {
                        let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
                        t_b = max(0.25, 9.0 * (1.0 - pow(inv, 1.0 / max(shape, 1e-3))));
                    }
                    let sc = sqrt(t_b / t_g);
                    aabb = vec4<f32>(aabb.x, aabb.y, aabb.z * sc, aabb.w * sc);
                }
            } else {
                aabb = compute_aabb_snugbox(T_mat, cutoff);
            }
            // SnugBox failing (det/A/E/t ≤ 0) means the conic is NOT an
            // ellipse: the cutoff disc crosses the camera plane and its
            // projection is unbounded. compute_aabb returns a garbage rect
            // for these (Vulkan port, room: 161 surfels, up to 765k px) and
            // every one of their fragments fails the denom/depth culls in
            // the fragment shader — a full-screen quad of pure discard work.
            // Drop them (bit-identical on 13/13 scenes). accel bit 9
            // (?hyp_legacy=1) restores the old fallback for an A/B.
            if aabb.z < 0.0 && tex3d_flag == 0u {
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
                if tex3d_flag != 0u {
                    // \`--tex3d\`: CONIC uv (always the conic form) + the EWA conic in the
                    // free slots: tw.z = a, depth_u = b, depth_v = c (the fragment reads
                    // depth_center only for these rows).
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, conic3.x);
                    depth_u = conic3.y;
                    depth_v = conic3.z;
                } else if (render_settings.accel_flags & 4096u) != 0u {
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
                var mcoef_u = 1.0;
                let aabb_e = compute_ewa_cov2d_pixel(
                    xyz,
                    vec3<f32>(sx, sy, sz),
                    rot,
                    camspace.xyz,
                    opacity,
                    &conic,
                    &mcoef_u,
                );
                opacity = opacity * mcoef_u;   // ?mip2d: 2D Mip coef on the stored opacity
                if aabb_e.z >= 0.0 && opacity > 1.0 / 255.0 {
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
        let gauss_id_packed : u32 = idx | ((1u - is_textured_flag) << 31u) | (tex3d_flag << 30u);
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
`,Rc=`// shader implementing gpu radix sort.

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
`,Dc=`// shader implementing gpu radix sort.

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
`,zc=`// ============================================================================
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
}`,io=32,hr=1,fr=2,Mi=4,Ri=512,Di=1024,zi=2048,Ui=4096,Li=8192,Uc=0,Kt=new ArrayBuffer(io),bt={canvas_size:new Uint32Array(Kt,0,2),accel_flags:new Uint32Array(Kt,8,1),feature_mode:new Uint32Array(Kt,12,1),gaussian_scaling:new Float32Array(Kt,16,1),sh_bias:new Float32Array(Kt,20,1),color_K:new Uint32Array(Kt,24,1),walltime:new Float32Array(Kt,28,1)};function Lc(o){bt.canvas_size[0]=o.width>>>0,bt.canvas_size[1]=o.height>>>0,bt.accel_flags[0]=(o.accel_flags??hr|fr)>>>0,bt.feature_mode[0]=(o.feature_mode??Uc)>>>0,bt.gaussian_scaling[0]=o.gaussian_scaling??1,bt.sh_bias[0]=o.sh_bias??.5,bt.color_K[0]=(o.color_K??0)>>>0,bt.walltime[0]=o.walltime??0}function xr(o,r){o.queue.writeBuffer(r,0,Kt)}function En(o,r,a){a&&o&&r&&xr(o,r)}function dn(o,r,a,v,u=!0){bt.canvas_size[0]=o>>>0,bt.canvas_size[1]=r>>>0,En(a??null,v??null,u)}function Ii(o,r,a,v=!0){bt.gaussian_scaling[0]=o,En(r??null,a??null,v)}function Gi(o,r,a,v=!0){bt.sh_bias[0]=o,En(r??null,a??null,v)}function Ic(o,r,a,v=!0){bt.color_K[0]=o>>>0,En(r??null,a??null,v)}function Gc(o,r,a,v=!0){bt.feature_mode[0]=o>>>0,En(r??null,a??null,v)}function Fc(o){const r=new Float32Array(1),a=new Uint32Array(r.buffer);r[0]=o;const v=a[0],u=v>>>16&32768,b=(v>>>23&255)-127+15;return b<=0?u:b>=31?u|31744:u|b<<10|v>>>13&1023}function Fi(o,r=.3,a,v,u=!0){let b=bt.accel_flags[0]&65535&~Li;o&&(b=b|Li|Fc(r)<<16),bt.accel_flags[0]=b>>>0,En(a??null,v??null,u)}function os(o,r,a,v=!0){let u=bt.accel_flags[0];o.oac!==void 0&&(u=o.oac?u|hr:u&~hr),o.spr!==void 0&&(u=o.spr?u|fr:u&~fr),o.bfc!==void 0&&(u=o.bfc?u|Mi:u&~Mi),o.hypLegacy!==void 0&&(u=o.hypLegacy?u|Ri:u&~Ri),o.centred!==void 0&&(u=o.centred?u|Ui:u&~Ui),o.raysplat!==void 0&&(u=o.raysplat?u|zi:u&~zi),o.legacyPos!==void 0&&(u=o.legacyPos?u|Di:u&~Di),bt.accel_flags[0]=u>>>0,En(r??null,a??null,v)}const Oc=256;function is(o,r){const a=[],v=[];let u=!0;for(const b of o.split(`
`)){const B=b.trim();let T;if((T=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const C=!!r[T[1]];v.push({parent:u,taken:C}),u=u&&C;continue}if(/^\/\/#else\s*$/.test(B)){const C=v[v.length-1];if(C===void 0)throw new Error("preprocessWGSL: #else without #if");u=C.parent&&!C.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const C=v.pop();if(C===void 0)throw new Error("preprocessWGSL: #endif without #if");u=C.parent;continue}u&&a.push(b)}if(v.length!==0)throw new Error("preprocessWGSL: unterminated #if");return a.join(`
`)}const Vc=io,Nc=8,$c=96,qc=12,yr=8,Qt=1<<yr,Pn=256,Ts=32/yr,Wc=0,ar=Ts&1;function Oi(o,r){return{sort_indices_buffer:r.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:r.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function Kc(o,r){const a=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),v=o.createPipelineLayout({bindGroupLayouts:[a]}),u=b=>o.createComputePipeline({layout:v,compute:{module:r,entryPoint:b,constants:{WG_SIZE:Pn}}});return{l0TileScan:u("prefix_l0_tile_scan"),l1TileScanOnL0:u("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:u("prefix_scan_l1_sums"),addL1ToL0:u("prefix_add_l1_to_l0_offsets"),addL0ToElems:u("prefix_add_l0_to_elements"),computeDigitBase:u("compute_digit_base"),prefixBindGroupLayout:a}}function jc(o,r,a){const v=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),u=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),b=o.createPipelineLayout({bindGroupLayouts:[v]}),B=o.createPipelineLayout({bindGroupLayouts:[u]}),T=[];for(let C=0;C<Ts;C++){const R={PASS_ID:C+Wc,RS_RADIX_LOG2:yr,RS_RADIX_SIZE:Qt};T.push({localHistogram:o.createComputePipeline({layout:b,compute:{module:r,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:a,entryPoint:"scatter_elements",constants:R}})})}return{passes:T,localHistogramBindGroupLayout:v,scatterBindGroupLayout:u}}function Hc(o){const r=o.createShaderModule({label:"local histogram",code:Dc}),a=o.createShaderModule({label:"scatter",code:Rc}),v=o.createShaderModule({label:"blelloch prefix",code:zc}),u=Kc(o,v),b=jc(o,r,a);return{localHistogramBindGroupLayout:b.localHistogramBindGroupLayout,scatterBindGroupLayout:b.scatterBindGroupLayout,passes:b.passes,hierarchicalBlelloch:u}}function Vi(o){const r=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),a=r.createView({dimension:"2d-array"}),v=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),u=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),b=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(b,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:r,view:a,sampler:v,rectsBuffer:u,texParamsBuffer:b,meta:B}}const In=class In{constructor(r,a,v,u,b,B=null,T={}){M(this,"device");M(this,"pc");M(this,"presentationFormat");M(this,"camera_buffer");M(this,"render_settings_buffer");M(this,"draw_indirect_buffer");M(this,"splat_2d_buffer");M(this,"querySet");M(this,"resolveBuffer");M(this,"resultBuffer");M(this,"queriesPerFrame",Nc);M(this,"queryCapacityFrames",200);M(this,"sort_prefixBindGroup");M(this,"sort_pipelines");M(this,"sort_localHistogramBindGroups");M(this,"sort_scatterBindGroups");M(this,"lastFrame",0);M(this,"frameCount",0);M(this,"preprocessPipeline");M(this,"cullPipeline");M(this,"renderPipeline");M(this,"indirectPipeline");M(this,"renderShaderModule");M(this,"betaKernel",1);M(this,"fetchById");M(this,"octBound");M(this,"acc16");M(this,"accTexture",null);M(this,"accView",null);M(this,"accW",0);M(this,"accH",0);M(this,"legacyRenderPipeline",null);M(this,"varyingsPipeline",null);M(this,"msaa",!1);M(this,"msaaTexture",null);M(this,"msaaView",null);M(this,"msaaW",0);M(this,"msaaH",0);M(this,"msaaPipelines",new Map);M(this,"mkVariant",null);M(this,"slopeTarget",null);M(this,"slopePipelines",new Map);M(this,"rendererBgls",[]);M(this,"betaKernelConst",1);M(this,"legacyRenderer",!1);M(this,"accResolvePipeline",null);M(this,"accResolveBgl",null);M(this,"accResolveBindGroup",null);M(this,"twoPass",!1);M(this,"twoPassThresh",.5);M(this,"twoPassParamsBuffer",null);M(this,"twoPassBgl",null);M(this,"twoPassBg",null);M(this,"twoPassSplatsBgl",null);M(this,"twoPassSplatsBg",null);M(this,"twoPassModules",new Map);M(this,"twoPassPipelines",new Map);M(this,"twoPassDepth",null);M(this,"twoPassDepthView",null);M(this,"twoPassW",0);M(this,"twoPassH",0);M(this,"overdrawMode",0);M(this,"overdrawMax",48);M(this,"ovTexture",null);M(this,"ovView",null);M(this,"ovW",0);M(this,"ovH",0);M(this,"ovParamsBuffer",null);M(this,"ovResolvePipeline",null);M(this,"ovResolveBgl",null);M(this,"ovResolveBg",null);M(this,"ovStatsPipeline",null);M(this,"ovStatsBgl",null);M(this,"ovStatsBg",null);M(this,"ovStatsBuffer",null);M(this,"ovReadback",null);M(this,"ovReadState","idle");M(this,"ovLastStats",null);M(this,"ovPipelines",new Map);M(this,"renderSettingsBgl");M(this,"preprocessBgl2");M(this,"renderSplatsBgl");M(this,"atlasBgl");M(this,"sort_info_buffer");M(this,"sort_ping_pong");M(this,"crsBg");M(this,"gsBg");M(this,"cullBg2");M(this,"preprocessBg1");M(this,"renderSplatsBindGroup");M(this,"renderSettingsBindGroup");M(this,"atlasBindGroup");M(this,"indirectBindGroup");M(this,"sh_solvers_buffer");M(this,"bfcParamsBuffer");M(this,"bfcBindGroupLayout");M(this,"bfcBindGroup");M(this,"staticSortKeys",null);M(this,"wideFrustum",!1);M(this,"staticKeysBuffer",null);M(this,"bgColor",[0,0,0,0]);M(this,"showPerfDialogNext",!1);M(this,"requestReorderNextFrame",!1);M(this,"reorderInFlight",!1);M(this,"downloadOnceNextRead",!1);M(this,"downloadOnceFileName","fps_metrics");M(this,"allFrameTimes",[]);M(this,"lastStageBreakdownMs",null);M(this,"timeQueryEnabled");M(this,"atlas");M(this,"atlasParamsBuffer");M(this,"_atlasEnabled",!0);M(this,"mipLodBias",1);M(this,"_mipMode",1);M(this,"preFrame",null);this.fetchById=T.fetchById??!0,this.staticSortKeys=T.staticSortKeys??null,this.wideFrustum=T.wideFrustum??!1,this.octBound=T.octBound??!1,this.acc16=T.acc16??!1,gt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const C=b.includes("timestamp-query");this.timeQueryEnabled=C,C&&gt("⏰ using timestamp-query"),this.pc=r,this.device=a,this.presentationFormat=v,this.camera_buffer=u,this.atlas=B??Vi(a),this.atlasParamsBuffer=a.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),a.addEventListener("uncapturederror",Ee=>{console.error("A WebGPU error was not captured:",Ee.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+Pn-1)/Pn)+1)*Pn,V=Math.ceil(R/Pn);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const F=a.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Hc(a);const I=[Oi(R,a),Oi(R,a)],K=a.createBuffer({label:"workgroup histograms",size:V*Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=a.createBuffer({label:"workgroup prefixes",size:V*Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=a.createBuffer({label:"digit base",size:Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=Math.ceil(V/Pn),X=Math.ceil(L/Pn),Y=a.createBuffer({label:"prefix l0 sums",size:L*Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=a.createBuffer({label:"prefix l0 offsets",size:L*Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=a.createBuffer({label:"prefix l1 sums",size:X*Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ue=a.createBuffer({label:"prefix l1 offsets",size:X*Qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=a.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:re}},{binding:3,resource:{buffer:Y}},{binding:4,resource:{buffer:ee}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:ue}},{binding:7,resource:{buffer:z}}]}),this.sort_localHistogramBindGroups=[a.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:I[0].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]}),a.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:I[1].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]})],this.sort_scatterBindGroups=[a.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:I[0].sort_depths_buffer}},{binding:3,resource:{buffer:I[1].sort_depths_buffer}},{binding:4,resource:{buffer:I[0].sort_indices_buffer}},{binding:5,resource:{buffer:I[1].sort_indices_buffer}},{binding:6,resource:{buffer:re}}]}),a.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:I[1].sort_depths_buffer}},{binding:3,resource:{buffer:I[0].sort_depths_buffer}},{binding:4,resource:{buffer:I[1].sort_indices_buffer}},{binding:5,resource:{buffer:I[0].sort_indices_buffer}},{binding:6,resource:{buffer:re}}]})],this.sort_info_buffer=F,this.sort_ping_pong=I;const le=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),se=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:le,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=de,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Te=this.device.createShaderModule({code:Ac});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const pe=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ge=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Gn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),pe.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ge.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:pe}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ge});const ze=this.device.createShaderModule({code:is(Mc,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[le,he,se,this.bfcBindGroupLayout]}),compute:{module:ze,entryPoint:"surfel_cull"}});const J=this.device.createShaderModule({code:Bc});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[le,de]}),compute:{module:J,entryPoint:"preprocess"}});const _e=this.device.createShaderModule({label:"render_2dgs",code:is(ys,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});_e.getCompilationInfo().then(Ee=>{Ee.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ee.messages.forEach(Me=>{(Me.type==="error"?console.error:Me.type==="warning"?console.warn:console.log)(`${Me.type} (line ${Me.lineNum}:${Me.linePos}): ${Me.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const we=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),me=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,O=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:me,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Z=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),te=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,O,Z]}),vertex:{module:_e,entryPoint:"vs_main"},fragment:{module:_e,entryPoint:"fs_main",constants:{BETA_KERNEL:te},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ye=(Ee,Me,ie,be=1)=>{const Re=this.device.createShaderModule({label:`render_2dgs (${Ee})`,code:is(ys,{FETCH_BY_ID:Me,OCT:ie})});return this.device.createRenderPipeline({label:`render_2dgs_${Ee}`,multisample:{count:be},layout:this.device.createPipelineLayout({bindGroupLayouts:[we,O,Z]}),vertex:{module:Re,entryPoint:"vs_main"},fragment:{module:Re,entryPoint:"fs_main",constants:{BETA_KERNEL:te},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[we,O,Z],this.betaKernelConst=te,this.varyingsPipeline=ye("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ye("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=ye,this.device.popErrorScope().then(Ee=>{Ee?console.error("[render_2dgs] pipeline create validation error:",Ee.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:O,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ar].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Z,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=_e,this.betaKernel=te,this.renderSettingsBgl=we,this.renderSplatsBgl=O,this.atlasBgl=Z}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}slopePipelineFor(r,a){const v=`${r?1:0}${a?1:0}`;let u=this.slopePipelines.get(v);if(!u){const b=this.device.createShaderModule({label:`render_2dgs slope (${v})`,code:is(ys,{FETCH_BY_ID:r,OCT:a})}),B={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};u=this.device.createRenderPipeline({label:`render_2dgs_slope_${v}`,layout:this.device.createPipelineLayout({bindGroupLayouts:this.rendererBgls}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst},targets:[{format:this.presentationFormat,blend:B},{format:"rgba16float",blend:B}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(v,u)}return u}setBfcParams(r,a){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([r,a[0],a[1],a[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var u;const r=new ArrayBuffer(32),a=new Uint32Array(r),v=new Float32Array(r);a[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,a[1]=this.atlas.meta.layer_h|0,v[2]=this.atlas.meta.uv_extent||0,a[3]=this.atlas.meta.probe_mode|0||0,a[4]=this._mipMode!==0?Math.max(1,((u=this.atlas.meta.mip_bytes)==null?void 0:u.length)??1):1,v[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,r)}setMsaa(r){r!==this.msaa&&(this.msaa=r,gt(`[render_2dgs] MSAA 4x: ${r?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(r,a){const v=`${r?"byid":"var"}_${a?"oct":"quad"}`;let u=this.msaaPipelines.get(v);return u||(u=this.mkVariant(`msaa4_${v}`,r,a,4),this.msaaPipelines.set(v,u)),u}ensureMsaaResources(r,a){var v;this.msaaTexture!==null&&this.msaaW===r&&this.msaaH===a||((v=this.msaaTexture)==null||v.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:r,height:a},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=r,this.msaaH=a)}setTwoPass(r){r!==this.twoPass&&(this.twoPass=r,gt(`[render_2dgs] two-pass layer path: ${r?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(r){this.twoPassThresh=Math.min(.999,Math.max(.001,r)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ar].sort_indices_buffer}}]}))}ensureTwoPassResources(r,a){var v;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===r&&this.twoPassH===a)&&((v=this.twoPassDepth)==null||v.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=r,this.twoPassH=a)}renderModuleFor(r,a,v){const u=`${r?"byid":"vary"}_${a?"oct":"quad"}_${v?"hwz":"z0"}`,b=this.twoPassModules.get(u);if(b!==void 0)return b;const B=this.device.createShaderModule({label:`render_2dgs (${u})`,code:is(ys,{FETCH_BY_ID:r,OCT:a,HW_DEPTH:v})});return B.getCompilationInfo().then(T=>{for(const C of T.messages)C.type==="error"&&console.error(`[render_2dgs ${u}] (line ${C.lineNum}:${C.linePos}): ${C.message}`)}),this.twoPassModules.set(u,B),B}twoPassPipelinesFor(r,a){const v=`${r?"byid":"vary"}_${a?"oct":"quad"}`,u=this.twoPassPipelines.get(v);if(u!==void 0)return u;const b=this.renderModuleFor(r,a,!0),B=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const T=this.device.createRenderPipeline({label:`render_2dgs_opaque_${v}`,layout:B,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),C=this.device.createRenderPipeline({label:`render_2dgs_front_${v}`,layout:B,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:In.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(V=>{V?console.error(`[render_2dgs twopass ${v}] pipeline validation error:`,V.message):console.log(`[render_2dgs twopass ${v}] pipelines created OK`)});const R={opaque:T,front:C};return this.twoPassPipelines.set(v,R),R}setOverdrawMode(r){r!==this.overdrawMode&&(this.overdrawMode=r,this.ovLastStats=null,gt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][r]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(r){this.overdrawMax=Math.max(1,r),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(r,a){var v;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const u=`
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
}`,b=this.device.createShaderModule({label:"overdraw_resolve",code:u});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const B=`
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
}`,T=this.device.createShaderModule({label:"overdraw_stats",code:B});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:T,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===r&&this.ovH===a||((v=this.ovTexture)==null||v.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=r,this.ovH=a)}ovPipelineFor(r,a,v){const u=`${r}_${a?"byid":"vary"}_${v?"oct":"quad"}`,b=this.ovPipelines.get(u);if(b!==void 0)return b;const B=r.startsWith("tp_"),T=this.renderModuleFor(a,v,B),C=this.device.createPipelineLayout({bindGroupLayouts:B?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),R={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[r];let V;r==="tp_raster"?V={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:r==="tp_opaque"?V={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:r==="tp_front"&&(V={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const F=this.device.createRenderPipeline({label:`render_2dgs_${u}`,layout:C,vertex:{module:T,entryPoint:"vs_main"},fragment:{module:T,entryPoint:R,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:In.BLEND_ADD}]},depthStencil:V,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(I=>{I&&console.error(`[render_2dgs overdraw ${u}] pipeline validation error:`,I.message)}),this.ovPipelines.set(u,F),F}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const r=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const a=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:r[0]/a,meanCovered:r[2]>0?r[0]/r[2]:0,max:r[1],coveredFrac:r[2]/a}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(r,a){var v;if(this.accResolvePipeline===null){const u=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,b=this.device.createShaderModule({label:"acc16_resolve",code:u});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===r&&this.accH===a||((v=this.accTexture)==null||v.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=r,this.accH=a)}setAtlas(r){this.atlas=r??Vi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&Ps(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(r){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=r,Ps(this.device,this.atlas.texParamsBuffer,this.atlas.meta,r,this._mipMode))}setMipLodBias(r){this.mipLodBias=r,this.writeAtlasParams()}setFetchById(r){r!==this.fetchById&&(this.fetchById=r,gt(`[render_2dgs] fragment inputs: ${r?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(r){if(r===this.legacyRenderer)return;this.legacyRenderer=r,os({legacyPos:r,hypLegacy:r},this.device,this.render_settings_buffer);const a=!r&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([a])),gt(`[render_2dgs] renderer: ${r?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(r){this.atlas.meta.format!==4294967295&&(this._mipMode=r?1:0,this.writeAtlasParams(),Ps(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var r;return(((r=this.atlas.meta.mip_bytes)==null?void 0:r.length)??1)>1}async debugReadSortedIndices(r=30){const a=Math.max(0,Math.min(r,this.pc.num_points)),v=a*Uint32Array.BYTES_PER_ELEMENT;if(v===0){console.log("[DEBUG] No indices to read.");return}const u=this.device.createBuffer({size:v,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),b=this.device.createCommandEncoder();b.copyBufferToBuffer(this.sort_ping_pong[ar].sort_indices_buffer,0,u,0,v),this.device.queue.submit([b.finish()]),await u.mapAsync(GPUMapMode.READ);const B=new Uint32Array(u.getMappedRange());console.log("[DEBUG] Sorted indices (first",a,"):",Array.from(B)),u.unmap()}writeSortKeys(r){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,r)}frame(r,a,v=!0){this.preFrame&&this.preFrame();const b=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=v&&this.timeQueryEnabled;{r.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+0,endOfPassWriteIndex:b+1});const C=r.beginComputePass(T);C.setPipeline(this.cullPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.gsBg),C.setBindGroup(2,this.cullBg2),C.setBindGroup(3,this.bfcBindGroup);const R=Math.ceil(this.pc.num_points/Oc);C.dispatchWorkgroups(R,1,1),C.end()}{const T=r.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+2,endOfPassWriteIndex:b+3});const C=r.beginComputePass(T);C.setPipeline(this.preprocessPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.preprocessBg1),C.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),C.end()}for(let T=0;T<Ts;T++){const C=T&1,R=this.sort_pipelines.passes[T],V=this.sort_localHistogramBindGroups[C],F=this.sort_scatterBindGroups[C];{const I={label:`upsweep_round${T}`};B&&T==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+4});const K=r.beginComputePass(I);K.setPipeline(R.localHistogram),K.setBindGroup(0,V),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const I=r.beginComputePass({label:`prefix_round${T} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,Qt,1),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=r.beginComputePass({label:`prefix_round${T} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${T}`};B&&T==Ts-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+5});const K=r.beginComputePass(I);K.setPipeline(R.scatterElements),K.setBindGroup(0,F),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}{const T=bt.canvas_size[0],C=bt.canvas_size[1],R=this.overdrawMode!==0;let V=a;R?(this.ensureOverdrawResources(T,C),V=this.ovView):this.acc16&&(this.ensureAccResources(T,C),V=this.accView);const F=R?{r:0,g:0,b:0,a:0}:this.bgColor,I=R||this.acc16,K=this.fetchById&&!this.legacyRenderer,re=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(T,C);let z,L;if(R)this.overdrawMode===1?(z=this.ovPipelineFor("tp_opaque",K,re),L=this.ovPipelineFor("tp_front",K,re)):z=L=this.ovPipelineFor("tp_raster",K,re);else{const ue=this.twoPassPipelinesFor(K,re);z=ue.opaque,L=ue.front}const X={label:"render_opaque_layer",colorAttachments:[{view:V,loadOp:"clear",storeOp:"store",clearValue:F}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};B&&(X.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6});const Y=r.beginRenderPass(X);Y.setPipeline(z),Y.setBindGroup(0,this.renderSettingsBindGroup),Y.setBindGroup(1,this.twoPassSplatsBg),Y.setBindGroup(2,this.atlasBindGroup),Y.setBindGroup(3,this.twoPassBg),Y.drawIndirect(this.draw_indirect_buffer,0),Y.end();const ee={label:"render_front",colorAttachments:[{view:V,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};B&&!I&&(ee.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const N=r.beginRenderPass(ee);N.setPipeline(L),N.setBindGroup(0,this.renderSettingsBindGroup),N.setBindGroup(1,this.twoPassSplatsBg),N.setBindGroup(2,this.atlasBindGroup),N.setBindGroup(3,this.twoPassBg),N.drawIndirect(this.draw_indirect_buffer,0),N.end()}else{const z=this.msaa&&!R&&!this.acc16;z&&this.ensureMsaaResources(T,C);const L=this.slopeTarget!==null&&!z&&!R&&!this.acc16&&!this.legacyRenderer,X=[z?{view:this.msaaView,resolveTarget:V,loadOp:"clear",storeOp:"discard",clearValue:F}:{view:V,loadOp:"clear",storeOp:"store",clearValue:F}];L&&X.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}});const Y={label:"render",colorAttachments:X};B&&(Y.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6,...I?{}:{endOfPassWriteIndex:b+7}});const ee=r.beginRenderPass(Y);R?(ee.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",K,re)),ee.setBindGroup(1,this.twoPassSplatsBg)):L?(ee.setPipeline(this.slopePipelineFor(this.fetchById,re)),ee.setBindGroup(1,this.renderSplatsBindGroup)):(ee.setPipeline(z?this.msaaPipelineFor(K,re):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),ee.setBindGroup(1,this.renderSplatsBindGroup)),ee.setBindGroup(0,this.renderSettingsBindGroup),ee.setBindGroup(2,this.atlasBindGroup),ee.drawIndirect(this.draw_indirect_buffer,0),ee.end()}if(R){r.clearBuffer(this.ovStatsBuffer,0,16);const z=r.beginComputePass({label:"overdraw_stats"});z.setPipeline(this.ovStatsPipeline),z.setBindGroup(0,this.ovStatsBg),z.dispatchWorkgroups(Math.ceil(T/16),Math.ceil(C/16),1),z.end();const L={label:"overdraw_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};B&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const X=r.beginRenderPass(L);X.setPipeline(this.ovResolvePipeline),X.setBindGroup(0,this.ovResolveBg),X.draw(3),X.end(),this.ovReadState==="idle"&&(r.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const z={label:"acc16_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const L=r.beginRenderPass(z);L.setPipeline(this.accResolvePipeline),L.setBindGroup(0,this.accResolveBindGroup),L.draw(3),L.end()}}this.frameCount++}async readPerfMetrics(r){const a=(r==null?void 0:r.silent)??!1;if(this.frameCount<=0)return;const v=this.device.createCommandEncoder({label:"timestamp resolve encoder"});v.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),v.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([v.finish()]),await this.device.queue.onSubmittedWorkDone();const u=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const b=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),T=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,C=Array.from({length:u.length},()=>[]);let R=0;for(let X=0;X<B;X++){const Y=(T+X)%this.queryCapacityFrames,ee=Y*this.queriesPerFrame;let N=!0;for(let ue=0;ue<u.length;ue++){const[le,he,se]=u[ue];if(b[ee+se]===0n||b[ee+he]===0n||b[ee+he]<b[ee+se]){N=!1;break}}if(!N){!a&&Y%60===0&&console.debug("[timestamp] frame slot",Y,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let ue=0;ue<u.length;ue++){const[le,he,se]=u[ue],de=Number(b[ee+se]),Te=Number(b[ee+he]);C[ue].push((Te-de)/1e6)}}if(R===0){this.resultBuffer.unmap(),a||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...C[0]);const V=[];let F=0,I=0,K=0;for(let X=0;X<u.length;X++){const Y=u[X][0],ee=C[X];let N=0;if(Y==="Total"){const ue=this.allFrameTimes;N=ue.reduce((se,de)=>se+de,0)/ue.length;const le=[...ue].sort((se,de)=>se-de);F=le[Math.floor(le.length*.99)]||0;const he=ue.reduce((se,de)=>se+Math.pow(de-N,2),0)/ue.length;I=Math.sqrt(he),K=N}else N=ee.reduce((ue,le)=>ue+le,0)/ee.length;V.push([Y,N])}this.lastFrame+=this.frameCount,this.frameCount=0;const re=Object.fromEntries(V);this.lastStageBreakdownMs={cull:re.Culling??0,preprocess:re.Preprocess??0,sort:re.Sort??0,render:re.Render??0,total:re.Total??0};const L=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([X,Y])=>`${X}: ${Y.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${I.toFixed(3)}ms
Total AVG: ${K.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(a||(console.log(L),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const X=`Stage,ms
`,Y=V.map(([ue,le])=>`${ue},${le.toFixed(3)}`).join(`
`),ee="data:text/csv;charset=utf-8,"+encodeURIComponent(X+Y),N=document.createElement("a");N.href=ee,N.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(N),N.click(),N.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(L)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const r=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Vc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const r=document.querySelector("canvas"),a=r?r.width:1,v=r?r.height:1;Lc({width:a,height:v,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),xr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Gn(this.pc.num_points*$c),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Gn(this.pc.num_points*qc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(r){if(r&&r.trim().length>0){const a=r.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=a.length>0?a:this.downloadOnceFileName}else{const a=new Date,v=`${a.getFullYear()}${String(a.getMonth()+1).padStart(2,"0")}${String(a.getDate()).padStart(2,"0")}_${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${v}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};M(In,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),M(In,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Cs=In;class Yc{constructor(r){M(this,"nSurfels");M(this,"nNodes");M(this,"planes");M(this,"front");M(this,"back");M(this,"copOff");M(this,"cop");M(this,"missing");M(this,"stackNode");M(this,"stackPhase");M(this,"keys");M(this,"lastMs",0);M(this,"lastEye",[NaN,NaN,NaN]);const a=new DataView(r),v=String.fromCharCode(a.getUint8(0),a.getUint8(1),a.getUint8(2),a.getUint8(3));if(v!=="BSP1")throw new Error(`not a BSP1 file (magic ${v})`);this.nSurfels=a.getUint32(4,!0),this.nNodes=a.getUint32(8,!0);const u=a.getUint32(12,!0),b=a.getUint32(16,!0);let B=20;const T=this.nNodes;if(this.planes=new Float32Array(r.slice(B,B+T*16)),B+=T*16,this.front=new Int32Array(r.slice(B,B+T*4)),B+=T*4,this.back=new Int32Array(r.slice(B,B+T*4)),B+=T*4,this.copOff=new Uint32Array(r.slice(B,B+(T+1)*4)),B+=(T+1)*4,this.cop=new Uint32Array(r.slice(B,B+u*4)),B+=u*4,this.missing=new Uint32Array(r.slice(B,B+b*4)),B+=b*4,B!==r.byteLength)throw new Error(`BSP1 size mismatch: parsed ${B} of ${r.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*T+2),this.stackPhase=new Uint8Array(2*T+2)}computeKeys(r){const a=r[0],v=r[1],u=r[2];if(a===this.lastEye[0]&&v===this.lastEye[1]&&u===this.lastEye[2])return!1;this.lastEye=[a,v,u];const b=performance.now(),B=this.planes,T=this.front,C=this.back,R=this.copOff,V=this.cop,F=this.keys;let I=1;for(let L=0;L<this.missing.length;L++)F[this.missing[L]]=I++;const K=this.stackNode,re=this.stackPhase;let z=0;for(K[0]=0,re[0]=0,z=1;z>0;){z--;const L=K[z],X=re[z],Y=B[4*L],ee=B[4*L+1],N=B[4*L+2];if(Y===0&&ee===0&&N===0){for(let se=R[L];se<R[L+1];se++)F[V[se]]=I++;continue}const ue=Y*a+ee*v+N*u-B[4*L+3]>=0,le=ue?T[L]:C[L],he=ue?C[L]:T[L];if(X===0)K[z]=L,re[z]=1,z++,he>=0&&(K[z]=he,re[z]=0,z++);else{for(let se=R[L];se<R[L+1];se++)F[V[se]]=I++;le>=0&&(K[z]=le,re[z]=0,z++)}}return this.lastMs=performance.now()-b,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function Zc(o){const r=await fetch(o);if(!r.ok)throw new Error(`BSP fetch ${o}: HTTP ${r.status}`);return new Yc(await r.arrayBuffer())}function Xc(o,r){return 2*Math.atan(r/(2*o))}function Jc(o,r,a,v){const u=Math.tan(v/2),b=Math.tan(a/2),B=u*o,T=-B,C=b*o,R=-C,V=mt.create();return V[0]=2*o/(C-R),V[5]=-2*o/(B-T),V[2]=(C+R)/(C-R),V[6]=(B+T)/(B-T),V[14]=1,V[10]=r/(r-o),V[11]=-(r*o)/(r-o),mt.transpose(V,V),V}async function _r(o){gt(`loading scene camera file... : ${o}`);const a=await(await fetch(o)).json();return gt(`loaded cameras count: ${a.length}`),a.map(v=>{const u=H.clone(v.position),b=kt.create(...v.rotation.flat()),B=b[0],T=b[4],C=b[8],R=b[1],V=b[5],F=b[9],I=b[2],K=b[6],re=b[10];B*(V*re-F*K)-T*(R*re-F*I)+C*(R*K-V*I)<0&&(b[1]=-b[1],b[5]=-b[5],b[9]=-b[9]);const L=mt.fromMat3(b);return{position:u,rotation:L,img_name:v.img_name,id:v.id}})}const Qc=4*2,eu=4*16,oo=4*eu+2*Qc;function tu(o){return o.createBuffer({label:"camera uniform",size:oo,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const yn=new Float32Array(oo/Float32Array.BYTES_PER_ELEMENT),Ms=class Ms{constructor(r,a){M(this,"_renderSize",null);M(this,"_refSize",null);M(this,"uniform_buffer");M(this,"position",H.create());M(this,"rotation",mt.create());M(this,"zfar",100);M(this,"fovY",45/180*Math.PI);M(this,"fovX");M(this,"focalRatioX",1);M(this,"focal",ki.create());M(this,"viewport",ki.create());M(this,"view_matrix",mt.identity());M(this,"view_inv_matrix",mt.identity());M(this,"proj_matrix",mt.identity());M(this,"proj_inv_matrix",mt.identity());M(this,"_negPos",H.create());M(this,"look",H.create(0,0,1));M(this,"up",H.create(0,1,0));M(this,"right",H.create(1,0,0));this.canvas=r,this.device=a,this.uniform_buffer=a?tu(a):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(r,a,v,u){this._renderSize=[r,a],this._refSize=v&&u?[v,u]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}on_update_canvas(){const r=this._renderSize?this._renderSize[0]:this.canvas.width,a=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[v,u]=this._refSize,b=.5*u/Math.tan(this.fovY*.5);this.focal[0]=b*this.focalRatioX*(r/v),this.focal[1]=b*(a/u)}else{const v=.5*a/Math.tan(this.fovY*.5);this.focal[0]=v*this.focalRatioX,this.focal[1]=v}this.fovX=Xc(this.focal[0],r),this.viewport[0]=r,this.viewport[1]=a,this.proj_matrix=Jc(.01,this.zfar,this.fovX,this.fovY),mt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],mt.copy(this.rotation,this.view_matrix),mt.translate(this.view_matrix,this._negPos,this.view_matrix),mt.inverse(this.view_matrix,this.view_inv_matrix),H.transformMat4Upper3x3(Ms.Z_AXIS,this.view_inv_matrix,this.look),H.normalize(this.look,this.look),H.cross(this.up,this.look,this.right),H.normalize(this.right,this.right);let r=0;yn.set(this.view_matrix,r),r+=16,yn.set(this.view_inv_matrix,r),r+=16,yn.set(this.proj_matrix,r),r+=16,yn.set(this.proj_inv_matrix,r),r+=16,yn.set(this.viewport,r),r+=2,yn.set(this.focal,r),r+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,yn)}set_preset(r){H.copy(r.position,this.position),mt.copy(r.rotation,this.rotation),this.update_buffer()}setFov(r){this.fovY=r,this.on_update_canvas()}setFocalRatio(r){this.focalRatioX=r,this.on_update_canvas()}getFov(){return this.fovY}};M(Ms,"Z_AXIS",H.create(0,0,1));let Bs=Ms;const nu={bilinear:0,bicubic:1,hermite:2,texture:3},su=.7,ru=`
struct P { wl: u32, hl: u32, w: u32, h: u32, mode: u32, lam: f32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var<uniform> p: P;
// mode 3: blended texture slope from the renderer's second target, (Σ α T ∂Y/∂x, Σ α T ∂Y/∂y, 0, ·), low-res px units
@group(0) @binding(2) var slope: texture_2d<f32>;
fn ts(x: i32, y: i32) -> vec2<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(slope, vec2<i32>(xc, yc), 0).rg;
}

@vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn f(x: i32, y: i32) -> vec3<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(src, vec2<i32>(xc, yc), 0).rgb;
}
fn gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return f(1, y) - f(0, y); }
    if (x >= i32(p.wl) - 1) { return f(x, y) - f(x - 1, y); }
    return 0.5 * (f(x + 1, y) - f(x - 1, y));
}
fn gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return f(x, 1) - f(x, 0); }
    if (y >= i32(p.hl) - 1) { return f(x, y) - f(x, y - 1); }
    return 0.5 * (f(x, y + 1) - f(x, y - 1));
}
fn gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return gx(x, 1) - gx(x, 0); }
    if (y >= i32(p.hl) - 1) { return gx(x, y) - gx(x, y - 1); }
    return 0.5 * (gx(x, y + 1) - gx(x, y - 1));
}
fn keys(t0: f32) -> f32 {
    let a = -0.75; let t = abs(t0);
    if (t <= 1.0) { return ((a + 2.0) * t - (a + 3.0)) * t * t + 1.0; }
    if (t < 2.0) { return ((a * t - 5.0 * a) * t + 8.0 * a) * t - 4.0 * a; }
    return 0.0;
}
@fragment fn fs(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = i32(fc.x); let Y = i32(fc.y);
    let sx = clamp((f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5, 0.0, f32(p.wl) - 1.0);
    let sy = clamp((f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5, 0.0, f32(p.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(p.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(p.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    var c = vec3<f32>(0.0);
    if (p.mode == 0u) {
        c = mix(mix(f(i0, j0), f(i0 + 1, j0), tx), mix(f(i0, j0 + 1), f(i0 + 1, j0 + 1), tx), ty);
    } else if (p.mode == 1u) {
        for (var dy = -1; dy <= 2; dy++) {
            let wy = keys(f32(dy) - ty); var row = vec3<f32>(0.0);
            for (var dx = -1; dx <= 2; dx++) { row += keys(f32(dx) - tx) * f(i0 + dx, j0 + dy); }
            c += wy * row;
        }
    } else {
        let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
        let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
        let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let i = i0 + a; let j = j0 + b;
                var sx = gx(i, j); var sy = gy(i, j);
                if (p.mode == 3u) { let t = ts(i, j) * p.lam; sx += vec3<f32>(t.x); sy += vec3<f32>(t.y); }   // luminance slope -> all channels
                c += f(i, j) * (Hx[a] * Hy[b]) + sx * (Gx[a] * Hy[b]) + sy * (Hx[a] * Gy[b]) + gxy(i, j) * (Gx[a] * Gy[b]);
            }
        }
    }
    return vec4<f32>(c, 1.0);
}`;class iu{constructor(r,a,v,u){M(this,"pipeline");M(this,"uni");M(this,"bgCache",new Map);M(this,"lowTex",null);M(this,"lowView",null);M(this,"lowSize",[0,0]);M(this,"last","");M(this,"slopeTex",null);M(this,"slopeView",null);M(this,"dummySlope");this.device=r,this.format=a,this.mode=v,this.scale=u;const b=r.createShaderModule({label:"upscaler",code:ru});this.pipeline=r.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:b,entryPoint:"vs"},fragment:{module:b,entryPoint:"fs",targets:[{format:a}]},primitive:{topology:"triangle-list"}}),this.uni=r.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=r.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING})}get slopeTarget(){return this.mode==="texture"?this.slopeView:null}lowTarget(r,a){var b,B;const v=Math.max(1,Math.round(r*this.scale)),u=Math.max(1,Math.round(a*this.scale));return(!this.lowTex||this.lowSize[0]!==v||this.lowSize[1]!==u)&&((b=this.lowTex)==null||b.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[v,u],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.lowSize=[v,u],(B=this.slopeTex)==null||B.destroy(),this.slopeTex=null,this.slopeView=null,this.mode==="texture"&&(this.slopeTex=this.device.createTexture({size:[v,u],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())),{view:this.lowView,w:v,h:u}}pass(r,a,v,u){const[b,B]=this.lowSize,T=`${b},${B},${v},${u}`;if(T!==this.last){const V=new Uint32Array([b,B,v,u,nu[this.mode],0,0,0]);new Float32Array(V.buffer,20,1)[0]=su,this.device.queue.writeBuffer(this.uni,0,V),this.last=T}let C=this.bgCache.get(this.lowView);C||(C=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()}]}),this.bgCache.set(this.lowView,C));const R=r.beginRenderPass({colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});R.setPipeline(this.pipeline),R.setBindGroup(0,C),R.draw(3),R.end()}destroy(){var r,a;(r=this.lowTex)==null||r.destroy(),(a=this.slopeTex)==null||a.destroy(),this.dummySlope.destroy(),this.uni.destroy()}}const ou=H.create(1,0,0),au=H.create(0,1,0),lu=H.create(0,0,1);function cu(o,r){const a=o[0],v=o[4],u=o[8],b=o[1],B=o[5],T=o[9],C=o[2],R=o[6],V=o[10],F=a+B+V;let I,K,re,z;if(F>0){const L=.5/Math.sqrt(F+1);I=.25/L,K=(R-T)*L,re=(u-C)*L,z=(b-v)*L}else if(a>B&&a>V){const L=2*Math.sqrt(1+a-B-V);I=(R-T)/L,K=.25*L,re=(v+b)/L,z=(u+C)/L}else if(B>V){const L=2*Math.sqrt(1+B-a-V);I=(u-C)/L,K=(v+b)/L,re=.25*L,z=(T+R)/L}else{const L=2*Math.sqrt(1+V-a-B);I=(b-v)/L,K=(u+C)/L,re=(T+R)/L,z=.25*L}return r[0]=K,r[1]=re,r[2]=z,r[3]=I,r}class ao{constructor(r){M(this,"element");M(this,"enabled",!0);M(this,"center",H.create(0,0,0));M(this,"up",H.create(0,1,0));M(this,"rotation",[0,0]);M(this,"shift",[0,0]);M(this,"scroll",0);M(this,"speed",.1);M(this,"sensitivity",.08);M(this,"leftPressed",!1);M(this,"rightPressed",!1);M(this,"leftDragPans",!1);M(this,"lastX",0);M(this,"lastY",0);M(this,"touches",new Map);M(this,"lastTouchCenter",null);M(this,"lastPinchDistance",null);M(this,"lastTwoFingerAngle",null);M(this,"lastTouchCount",0);M(this,"roll",0);M(this,"_dir",H.create());M(this,"_right",H.create());M(this,"_upCam",H.create());M(this,"_scratch",H.create());M(this,"_qY",ft.create());M(this,"_qX",ft.create());M(this,"_qRot",ft.create());M(this,"_qZ",ft.create());M(this,"_qLocal",ft.create());M(this,"_qWorldToCam",ft.create());M(this,"_scratchMat3",kt.create());M(this,"bboxMin",null);M(this,"bboxMax",null);M(this,"anchor",H.create(0,0,0));M(this,"downCallback",r=>{var a,v,u,b;if(this.enabled){if(r.pointerType==="touch"){this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),(v=(a=r.target)==null?void 0:a.setPointerCapture)==null||v.call(a,r.pointerId),r.preventDefault();return}r.isPrimary&&(r.button===0?(this.leftPressed=!0,this.leftDragPans=r.shiftKey):r.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=r.pageX,this.lastY=r.pageY,(b=(u=r.target)==null?void 0:u.setPointerCapture)==null||b.call(u,r.pointerId),r.preventDefault())}});M(this,"moveCallback",r=>{if(!this.enabled)return;if(r.pointerType==="touch"){if(!this.touches.has(r.pointerId))return;this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),r.preventDefault();return}if(!r.isPrimary||!this.leftPressed&&!this.rightPressed)return;r.preventDefault();const a=r.pageX-this.lastX,v=r.pageY-this.lastY;this.lastX=r.pageX,this.lastY=r.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=a,this.rotation[1]-=v):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=a,this.shift[0]+=v)});M(this,"upCallback",r=>{var a,v,u,b;if(r.pointerType==="touch"){this.touches.delete(r.pointerId),this.handleTouchGestures(),(v=(a=r.target)==null?void 0:a.releasePointerCapture)==null||v.call(a,r.pointerId),r.preventDefault();return}r.button===0?this.leftPressed=!1:r.button===2?this.rightPressed=!1:this.rightPressed=!1,(b=(u=r.target)==null?void 0:u.releasePointerCapture)==null||b.call(u,r.pointerId),r.preventDefault()});M(this,"wheelCallback",r=>{if(!this.enabled||(r.preventDefault(),this.rightPressed))return;let a=r.deltaY;r.deltaMode===1?a*=16:r.deltaMode===2&&(a*=100),this.scroll+=a*.01});this.camera=r,this.registerElement(r.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const r=this.bboxMax[0]-this.bboxMin[0],a=this.bboxMax[1]-this.bboxMin[1],v=this.bboxMax[2]-this.bboxMin[2],u=.5*Math.sqrt(r*r+a*a+v*v);return u>1e-6?u:null}addRoll(r){this.roll+=r}registerElement(r){this.element&&this.element!==r&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=r,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",a=>a.preventDefault())}setCenter(r){H.copy(r,this.center),H.copy(r,this.anchor)}setOrbitPivot(r){H.set(r[0],r[1],r[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(r){if(!isFinite(r)||r<.001)return;const a=this.camera.rotation;H.set(a[2],a[6],a[10],this._dir),H.normalize(this._dir,this._dir),H.scale(this._dir,r,this._dir),H.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const r=this.camera;if(H.subtract(this.center,r.position,this._scratch),H.length(this._scratch)<1e-6)return;H.normalize(this._scratch,this._scratch),H.cross(this.up,this._scratch,this._right),H.length(this._right)<1e-6&&H.set(1,0,0,this._right),H.normalize(this._right,this._right),H.cross(this._scratch,this._right,this._upCam),H.normalize(this._upCam,this._upCam);const a=r.rotation;a[0]=this._right[0],a[1]=this._upCam[0],a[2]=this._scratch[0],a[3]=0,a[4]=this._right[1],a[5]=this._upCam[1],a[6]=this._scratch[1],a[7]=0,a[8]=this._right[2],a[9]=this._upCam[2],a[10]=this._scratch[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,r.update_buffer()}setBbox(r,a){this.bboxMin=H.create(r[0],r[1],r[2]),this.bboxMax=H.create(a[0],a[1],a[2]);const v=(r[0]+a[0])*.5,u=(r[1]+a[1])*.5,b=(r[2]+a[2])*.5;H.set(v,u,b,this.center),H.set(v,u,b,this.anchor)}resetToCamera(){const r=this.camera.rotation;H.set(r[2],r[6],r[10],this._dir),H.normalize(this._dir,this._dir);let a=null;if(this.bboxMin&&this.bboxMax){let v=-1/0,u=1/0,b=!1;for(let B=0;B<3;B++){const T=this._dir[B],C=this.bboxMin[B]-this.camera.position[B],R=this.bboxMax[B]-this.camera.position[B];if(Math.abs(T)>1e-8){const V=C/T,F=R/T;v=Math.max(v,Math.min(V,F)),u=Math.min(u,Math.max(V,F))}else if(C>0||R<0){b=!0;break}}!b&&v<=u&&u>0&&(a=(Math.max(v,0)+u)*.5)}if(a===null||!isFinite(a)||a<.001){H.subtract(this.anchor,this.camera.position,this._scratch);const v=H.dot(this._scratch,this._dir);a=v>.001?v:H.length(this._scratch)}a=Math.max(.1,a),H.scale(this._dir,a,this._dir),H.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const r=this.touches.size;if(r!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=r,r===1){const a=this.touches.values().next().value;if(this.lastTouchCenter){const v=a.x-this.lastTouchCenter[0],u=a.y-this.lastTouchCenter[1];this.rotation[0]+=v*.3,this.rotation[1]-=u*.3}this.lastTouchCenter=[a.x,a.y]}else if(r===2){const a=Array.from(this.touches.values()),v=(a[0].x+a[1].x)*.5,u=(a[0].y+a[1].y)*.5,b=a[1].x-a[0].x,B=a[1].y-a[0].y,T=Math.hypot(b,B),C=Math.atan2(B,b);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=v-this.lastTouchCenter[0],V=u-this.lastTouchCenter[1],F=Math.hypot(R,V),I=Math.abs(T-this.lastPinchDistance);let K=C-this.lastTwoFingerAngle;K>Math.PI&&(K-=2*Math.PI),K<-Math.PI&&(K+=2*Math.PI),F>.5&&(this.shift[1]-=R,this.shift[0]+=V),I>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(T/this.lastPinchDistance)*10),Math.abs(K)>.0087&&(this.roll+=K)}this.lastTouchCenter=[v,u],this.lastPinchDistance=T,this.lastTwoFingerAngle=C}}update(r){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const a=this.camera;{const L=a.rotation;this.up[0]=L[1],this.up[1]=L[5],this.up[2]=L[9],H.length(this.up)>1e-6?H.normalize(this.up,this.up):H.set(0,1,0,this.up)}let v=0,u=!1;Math.abs(this.roll)>1e-4&&(v=this.roll,this.roll=0,u=!0),H.subtract(a.position,this.center,this._dir);let b=H.length(this._dir);b<1e-6&&(b=1e-6);const B=Math.exp(Math.log(b)+this.scroll*r*10*this.speed);H.scale(this._dir,B/b,this._dir),b=B;const T=a.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],H.normalize(this._right,this._right),H.length(this._right)<1e-6&&H.set(1,0,0,this._right);const C=H.create(T[1],T[5],T[9]);H.normalize(C,C),H.length(C)<1e-6&&H.set(0,1,0,C);const R=r*this.speed*.1*b,V=this.shift[1]*R,F=-this.shift[0]*R;H.scale(this._right,V,this._scratch),H.add(this.center,this._scratch,this.center),H.add(a.position,this._scratch,a.position),H.scale(C,F,this._scratch),H.add(this.center,this._scratch,this.center),H.add(a.position,this._scratch,a.position);const I=this.rotation[0]*r*this.sensitivity,K=this.rotation[1]*r*this.sensitivity;if(Math.abs(I)>1e-5||Math.abs(K)>1e-5||u){const L=a.rotation;cu(L,this._qWorldToCam),ft.fromAxisAngle(ou,-K,this._qX),ft.fromAxisAngle(au,-I,this._qY),ft.multiply(this._qX,this._qY,this._qLocal),u&&(ft.fromAxisAngle(lu,1*v,this._qZ),ft.multiply(this._qZ,this._qLocal,this._qLocal)),ft.normalize(this._qLocal,this._qLocal),ft.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ft.normalize(this._qWorldToCam,this._qWorldToCam),kt.fromQuat(this._qWorldToCam,this._scratchMat3),mt.fromMat3(this._scratchMat3,a.rotation);const X=a.rotation,Y=X[2],ee=X[6],N=X[10];a.position[0]=this.center[0]-Y*b,a.position[1]=this.center[1]-ee*b,a.position[2]=this.center[2]-N*b,this.up[0]=X[1],this.up[1]=X[5],this.up[2]=X[9],H.normalize(this.up,this.up)}else H.add(this.center,this._dir,a.position);a.update_buffer();const z=Math.pow(.8,r*60);this.rotation[0]*=z,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=z,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=z,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=z,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=z,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function lo(o){const r=H.create();for(const a of o)H.add(r,a,r);return H.scale(r,1/Math.max(o.length,1),r)}function co(o,r){const a=kt.create();kt.inverse(o,a);const v=H.create();return v[0]=a[0]*r[0]+a[4]*r[1]+a[8]*r[2],v[1]=a[1]*r[0]+a[5]*r[1]+a[9]*r[2],v[2]=a[2]*r[0]+a[6]*r[1]+a[10]*r[2],v}function uu(o){const r=o.slice(),a=[1,0,0,0,1,0,0,0,1],v=(C,R)=>r[C*3+R],u=(C,R,V)=>{r[C*3+R]=V},b=(C,R)=>a[C*3+R],B=(C,R,V)=>{a[C*3+R]=V};for(let C=0;C<30;C++){let R=0,V=1,F=Math.abs(v(0,1));if(Math.abs(v(0,2))>F&&(R=0,V=2,F=Math.abs(v(0,2))),Math.abs(v(1,2))>F&&(R=1,V=2,F=Math.abs(v(1,2))),F<1e-12)break;const I=v(R,R),K=v(V,V),re=v(R,V);let z;Math.abs(I-K)<1e-30?z=Math.PI/4*Math.sign(re):z=.5*Math.atan2(2*re,I-K);const L=Math.cos(z),X=Math.sin(z);for(let Y=0;Y<3;Y++){const ee=v(Y,R),N=v(Y,V);u(Y,R,L*ee+X*N),u(Y,V,-X*ee+L*N)}for(let Y=0;Y<3;Y++){const ee=v(R,Y),N=v(V,Y);u(R,Y,L*ee+X*N),u(V,Y,-X*ee+L*N)}for(let Y=0;Y<3;Y++){const ee=b(Y,R),N=b(Y,V);B(Y,R,L*ee+X*N),B(Y,V,-X*ee+L*N)}}const T=[];for(let C=0;C<3;C++)T.push({val:v(C,C),vec:H.create(b(0,C),b(1,C),b(2,C))});return T.sort((C,R)=>R.val-C.val),{vals:[T[0].val,T[1].val,T[2].val],vecs:[T[0].vec,T[1].vec,T[2].vec]}}function du(o,r){const a=lo(o);let v=0,u=0,b=0,B=0,T=0,C=0;for(const re of o){const z=re[0]-a[0],L=re[1]-a[1],X=re[2]-a[2];v+=z*z,u+=z*L,b+=z*X,B+=L*L,T+=L*X,C+=X*X}const R=[v,u,b,u,B,T,b,T,C],{vecs:V}=uu(R);let F=V[0],I=V[1],K=V[2];return H.dot(K,r)<0&&(H.scale(K,-1,K),H.scale(I,-1,I)),{centroid:a,normal:K,u:F,v:I}}function pu(o){let r=0,a=0,v=0,u=0,b=0,B=0,T=0,C=0,R=0;for(const[L,X]of o){const Y=-2*L,ee=-2*X,N=1,ue=-(L*L+X*X);r+=Y*Y,a+=Y*ee,v+=Y*N,u+=ee*ee,b+=ee*N,B+=N*N,T+=Y*ue,C+=ee*ue,R+=N*ue}const V=kt.create(r,a,v,a,u,b,v,b,B),F=co(V,H.create(T,C,R)),I=F[0],K=F[1],re=F[2],z=I*I+K*K-re;return{center:[I,K],radius:Math.sqrt(Math.max(z,1e-12))}}function hu(o,r){let a=0,v=0,u=0,b=0,B=0,T=0,C=0,R=0,V=0;for(let I=0;I<o.length;I++){const K=o[I],re=H.normalize(r[I],H.create()),z=1-re[0]*re[0],L=-re[0]*re[1],X=-re[0]*re[2],Y=1-re[1]*re[1],ee=-re[1]*re[2],N=1-re[2]*re[2];a+=z,v+=L,u+=X,b+=Y,B+=ee,T+=N,C+=z*K[0]+L*K[1]+X*K[2],R+=L*K[0]+Y*K[1]+ee*K[2],V+=X*K[0]+ee*K[1]+N*K[2]}const F=kt.create(a,v,u,v,b,B,u,B,T);return co(F,H.create(C,R,V))}function uo(o,r={}){if(o.length===0)return null;const a=r.tiltDownDeg??8,v=r.radiusScale??1,u=r.alignFirst??!0,b=(r.direction??"ccw")==="ccw"?1:-1,B=o.map(se=>H.clone(se.position)),T=o.map(se=>{const de=se.rotation;return H.create(de[8],de[9],de[10])}),C=o.map(se=>{const de=se.rotation;return H.create(de[4],de[5],de[6])}),R=lo(C),V=H.normalize(H.scale(R,-1,H.create())),{centroid:F,normal:I,u:K,v:re}=du(B,V),z=B.map(se=>{const de=H.sub(se,F,H.create());return[H.dot(de,K),H.dot(de,re)]}),{center:L,radius:X}=pu(z),Y=X*v,ee=H.add(F,H.add(H.scale(K,L[0],H.create()),H.scale(re,L[1],H.create()),H.create()),H.create()),N=hu(B,T),ue=Y*Math.tan(a*Math.PI/180),le=H.sub(N,H.scale(I,ue,H.create()),H.create());let he=0;if(u){const se=H.sub(B[0],ee,H.create());he=Math.atan2(H.dot(se,re),H.dot(se,K))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${Y.toFixed(2)}, tilt=${a}°, normal=[${I[0].toFixed(2)}, ${I[1].toFixed(2)}, ${I[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:ee,radius:Y,normal:I,u:K,v:re,lookAt:le,startPhase:he,direction:b}}function po(o,r){const a=(o.startPhase+r*o.direction)*2*Math.PI,v=Math.cos(a),u=Math.sin(a),b=H.add(o.center,H.add(H.scale(o.u,o.radius*v,H.create()),H.scale(o.v,o.radius*u,H.create()),H.create()),H.create()),B=H.normalize(H.sub(o.lookAt,b,H.create())),T=H.cross(B,o.normal,H.create());H.length(T)<1e-6&&H.copy(o.u,T),H.normalize(T,T);const C=H.cross(B,T,H.create());H.normalize(C,C);const R=mt.create();return R[0]=T[0],R[1]=C[0],R[2]=B[0],R[3]=0,R[4]=T[1],R[5]=C[1],R[6]=B[1],R[7]=0,R[8]=T[2],R[9]=C[2],R[10]=B[2],R[11]=0,R[12]=0,R[13]=0,R[14]=0,R[15]=1,{position:b,rotation:R,img_name:`orbit_${(r*1e3).toFixed(0)}`,id:0}}function fu(o,r={}){const a=uo(o,r);if(!a)return[];const v=r.numViews??120;return Array.from({length:v},(u,b)=>({...po(a,b/v),img_name:`circle_${b.toString().padStart(4,"0")}`,id:b}))}const ho="halloumi.renderer";function _u(){const o=new URLSearchParams(window.location.search).get("renderer"),r=o==="webgl"||o==="webgpu"?o:null;let a=null;try{const v=localStorage.getItem(ho);(v==="webgl"||v==="webgpu")&&(a=v)}catch{}return{forced:r,stored:a}}function mr(o){try{localStorage.setItem(ho,o)}catch{}const r=new URLSearchParams(window.location.search);r.set("renderer",o),window.location.search=r.toString()}function en(o){const r=(o&32768)>>15,a=(o&31744)>>10,v=o&1023;return a===0?(r?-1:1)*Math.pow(2,-14)*(v/1024):a===31?v?NaN:r?-1/0:1/0:(r?-1:1)*Math.pow(2,a-15)*(1+v/1024)}function vr(o,r,a,v,u,b,B,T,C,R=.5){const V=C?C.length:B.length/8,F=[],I=[];for(let z=0;z<V;z++){const X=(C?C[z]:z)*8,Y=B[X]-o,ee=B[X+1]-r,N=B[X+2]-a,ue=Y*v+ee*u+N*b;if(ue<=0||!(T[X+7]>>>16&1))continue;const le=T[X+4],he=en(le&65535),se=en(le>>>16&65535),de=3*Math.max(he,se),Te=Y-ue*v,pe=ee-ue*u,Ge=N-ue*b;if(Te*Te+pe*pe+Ge*Ge>de*de)continue;const ze=en(T[X+3]&65535);if(ze<1/255)continue;const J=T[X+5],_e=T[X+6];let we=en(J&65535),me=en(J>>>16&65535),O=en(_e&65535),Z=en(_e>>>16&65535);const te=Math.hypot(we,me,O,Z)||1;we/=te,me/=te,O/=te,Z/=te;const ye=1-2*(O*O+Z*Z),Ee=2*(me*O+we*Z),Me=2*(me*Z-we*O),ie=2*(me*O-we*Z),be=1-2*(me*me+Z*Z),Re=2*(O*Z+we*me),G=2*(me*Z+we*O),j=2*(O*Z-we*me),S=1-2*(me*me+O*O),l=v*G+u*j+b*S;if(Math.abs(l)<1e-6)continue;const _=(Y*G+ee*j+N*S)/l;if(!(_>0))continue;const f=_*v-Y,g=_*u-ee,k=_*b-N,x=(f*ye+g*Ee+k*Me)/(he||1e-6),P=(f*ie+g*be+k*Re)/(se||1e-6),i=x*x+P*P;if(i>9)continue;const w=Math.min(.99,ze*Math.exp(-.5*i));w<1/255||(F.push(_),I.push(w))}if(F.length===0)return null;const K=F.map((z,L)=>L).sort((z,L)=>F[z]-F[L]);let re=1;for(const z of K)if(re*=1-I[z],re<R)return F[z];return null}function As(o,r,a){const v=(o-a.viewport[0]*.5)/a.focal[0],u=-((r-a.viewport[1]*.5)/a.focal[1]),b=a.rotation;let B=v*b[0]+u*b[1]+b[2],T=v*b[4]+u*b[5]+b[6],C=v*b[8]+u*b[9]+b[10];const R=Math.hypot(B,T,C)||1;return[B/R,T/R,C/R]}function br(o,r,a,v,u,b){const[B,T,C]=As(o,r,v),R=v.position[0],V=v.position[1],F=v.position[2],I=new Uint32Array(u.buffer,u.byteOffset,u.length);let K=vr(R,V,F,B,T,C,u,I,null,.5);return K===null&&(K=vr(R,V,F,B,T,C,u,I,null,.8)),K===null?null:[R+K*B,V+K*T,F+K*C]}function fo(o,r){const a=o.viewport[0],v=o.viewport[1],u=new Uint32Array(r.buffer,r.byteOffset,r.length),b=o.position[0],B=o.position[1],T=o.position[2],[C,R,V]=As(a*.5,v*.5,o),F=.06*Math.max(a,v),I=(F+2)/o.focal[0],K=r.length/8,re=[];for(let Y=0;Y<K;Y++){const ee=Y*8,N=r[ee]-b,ue=r[ee+1]-B,le=r[ee+2]-T,he=N*C+ue*R+le*V;if(he<=0)continue;const se=u[ee+4],de=3*Math.max(en(se&65535),en(se>>>16&65535)),Te=N-he*C,pe=ue-he*R,Ge=le-he*V,ze=he*I+de;Te*Te+pe*pe+Ge*Ge<=ze*ze&&re.push(Y)}if(re.length===0)return null;const z=Int32Array.from(re),L=[],X=5;for(let Y=0;Y<X;Y++)for(let ee=0;ee<X;ee++){const N=a*.5+(ee-(X-1)/2)/((X-1)/2)*F,ue=v*.5+(Y-(X-1)/2)/((X-1)/2)*F,[le,he,se]=As(N,ue,o),de=vr(b,B,T,le,he,se,r,u,z,.5);de!==null&&L.push(de*(le*C+he*R+se*V))}return L.length<3?null:(L.sort((Y,ee)=>Y-ee),L[L.length>>1])}function mu(o){return new Promise(r=>{const a=document.createElement("input");a.type="file",a.accept=o,a.style.display="none",a.onchange=()=>{var v;return r(((v=a.files)==null?void 0:v[0])??null)},document.body.appendChild(a),a.click(),setTimeout(()=>document.body.removeChild(a),1e3)})}function vu(o,r,a){const v=document.getElementById("ui-panel-container"),u=document.getElementById("load-button"),b=document.getElementById("quick-links");u&&(u.onclick=async()=>{const R=await mu(".ply,.bitymi");if(R)if(v&&(v.style.display="none"),R.name.toLowerCase().endsWith(".bitymi")){const V=await R.arrayBuffer(),{pcBuffer:F}=wr(V),I=new File([F],R.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),K=await Es(I,o);r(K)}else{const V=await Es(R,o);r(V)}}),b&&(b.innerHTML="");const B=new URLSearchParams(window.location.search),T=B.get("bundle")??B.get("model_url"),C=B.get("camera_url");T&&(v&&(v.style.display="none"),a(T,C))}async function bu(o,r,a){const{bundle:v}=await On(o,(B,T)=>a(`downloading B ... ${(B/1048576).toFixed(1)}${T?` / ${(T/1048576).toFixed(1)}`:""} MB`));if(!v)throw new Error("bundle_b must be a .bitymi bundle");a("parsing B ...");const u=await Es(new File([v.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),r);let b=null;if(v.atlasBuffer){a("uploading B atlas ...");try{b=dr(r,Fn(v.atlasBuffer),!0)}catch(B){console.warn("[A/B] B atlas failed:",B)}}return{pc:u,atlas:b}}function lr(o){const r=new Uint32Array(o.surfel_data.buffer,o.surfel_data.byteOffset,o.num_points*8);for(let a=0;a<o.num_points;a++){const v=r[a*8+7];if(!(v>>>16&1)||(v>>>17&1)===1)return!0}return!1}async function gu(o,r,a,v){const u=new Bs(o,a),b=new ao(u);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const T=typeof window<"u"&&window.parent!==window,C={pos:new Float32Array(3),rot:new Float32Array(16)};if(T){window.addEventListener("message",O=>{const Z=O.data;if(!(!Z||Z.type!=="halloumi_sync_pose")&&!(!Array.isArray(Z.position)||Z.position.length!==3)&&!(!Array.isArray(Z.rotation)||Z.rotation.length!==16)){for(let te=0;te<3;te++)u.position[te]=Z.position[te];for(let te=0;te<16;te++)u.rotation[te]=Z.rotation[te];u.update_buffer(),b.resetToCamera();for(let te=0;te<3;te++)C.pos[te]=u.position[te];for(let te=0;te<16;te++)C.rot[te]=u.rotation[te]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const R=()=>{if(!T)return;const O=u.position,Z=u.rotation;let te=!1;for(let ye=0;ye<3;ye++)if(Math.abs(O[ye]-C.pos[ye])>1e-6){te=!0;break}if(!te){for(let ye=0;ye<16;ye++)if(Math.abs(Z[ye]-C.rot[ye])>1e-6){te=!0;break}}if(te){for(let ye=0;ye<3;ye++)C.pos[ye]=O[ye];for(let ye=0;ye<16;ye++)C.rot[ye]=Z[ye];try{window.parent.postMessage({type:"halloumi_camera_state",position:[O[0],O[1],O[2]],rotation:Array.from(Z)},"*")}catch{}}},V="rgba8unorm";r.configure({device:a,format:V,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let F=null,I=null,K=null,re=[0,0,0,0];const z=()=>{u.on_update_canvas(),F!==null&&dn(o.width,o.height,a,F.render_settings_buffer),I!==null&&I()};new ResizeObserver(()=>{const O=Math.max(.25,J.render_scale),Z=Math.max(1,Math.ceil(O*o.clientWidth)),te=Math.max(1,Math.ceil(O*o.clientHeight));o.width===Z&&o.height===te||(o.width=Z,o.height=te,z())}).observe(o);let X=0,Y=0;const ee=()=>{(o.width!==X||o.height!==Y)&&(X=o.width,Y=o.height,z())},N=new URLSearchParams(window.location.search);let le=N.get("animation")==="1";b.enabled=!le;const he=N.get("camera_url"),se=N.get("bfc"),de=se==="1"||se==="true",Te=N.get("bfc_cos"),pe=Te!==null?Number(Te):NaN,Ge=Number.isFinite(pe)?pe:2,ze=Math.max(1,window.devicePixelRatio||1),J={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:le,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:de,bfc_cos:Ge,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:(O=>O==="bilinear"||O==="bicubic"||O==="hermite"||O==="texture"?O:"off")(new URLSearchParams(location.search).get("up")),upscale_factor:(O=>O>0&&O<1?Math.max(2,Math.min(8,Math.round(1/O))):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1"))},_e=new ro.Pane({title:"Config",expanded:!0});_e.addInput(J,"animate",{label:"Animate"}).on("change",O=>{const Z=le;le=O.value,b.enabled=!O.value,!Z&&le&&we.value&&we.value.onAnimateStart(),Z&&!le&&we.value&&we.value.onAnimateStop()}),_e.addInput(J,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const we={value:null};vu(a,O=>me(O,[],null),async(O,Z)=>{let te=Z??he,ye,Ee=null;const Me=O.toLowerCase();if(Me.endsWith(".bitymi")||Me.includes(".bitymi?")){Vn("downloading bundle ...");try{const{bundle:j}=await On(O,(l,_,f)=>{const g=l/1048576,k=_?_/(1024*1024):void 0,x=f/(1024*1024),P=_?Math.min(99,Math.floor(l/_*100)):void 0,i=k?`total ${k.toFixed(1)} MB`:"total -- MB",w=k&&P!==void 0?`${g.toFixed(1)} MB downloaded (${P}%)`:`${g.toFixed(1)} MB downloaded`,p=`${x.toFixed(2)} MB/s`;At(`downloading bundle ...
${i}, ${w}
${p}`)});if(!j)throw new Error("Expected a .bitymi bundle");At("parsing PLY ...");const S=new File([j.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(ye=await Es(S,a),!te&&j.camerasBuffer&&(te=URL.createObjectURL(new Blob([j.camerasBuffer],{type:"application/json"}))),j.atlasBuffer){const l=j.atlasBuffer.byteLength/1048576;At(`uploading atlas ...
${l.toFixed(1)} MB BC7`);try{const _=Fn(j.atlasBuffer);Ee=dr(a,_,!0)}catch(_){console.warn("[atlas] failed to parse/upload atlas:",_)}}}catch(j){throw jt(),j}}else ye=await xc(O,a);let ie=null,be="";const Re=N.get("atlas2");if(Re)try{const{bundle:j}=await On(Re,(S,l)=>{At(`downloading second atlas ...
${(S/1048576).toFixed(1)}${l?` / ${(l/1048576).toFixed(1)}`:""} MB`)});if(!(j!=null&&j.atlasBuffer))throw new Error("second bundle has no atlas chunk");At("uploading second atlas ..."),ie=dr(a,Fn(j.atlasBuffer),!0),ie||(be="second atlas: format unsupported on this device")}catch(j){console.warn("[atlas2] failed:",j),be=`second atlas failed: ${j}`}const G=te?await _r(te):[];G.length>0&&u.set_preset(G[0]),me(ye,G,Ee,ie,be)});function me(O,Z=[],te=null,ye=null,Ee=""){const Me=[(O.bbox.min[0]+O.bbox.max[0])/2,(O.bbox.min[1]+O.bbox.max[1])/2,(O.bbox.min[2]+O.bbox.max[2])/2];b.setBbox(O.bbox.min,O.bbox.max),.5*Math.sqrt((O.bbox.max[0]-O.bbox.min[0])**2+(O.bbox.max[1]-O.bbox.min[1])**2+(O.bbox.max[2]-O.bbox.min[2])**2);function ie(U,Q){const ce=br(U,Q,o,u,O.surfel_data);ce&&(b.setOrbitPivot(ce),console.log(`[pick] orbit pivot → (${ce[0].toFixed(3)}, ${ce[1].toFixed(3)}, ${ce[2].toFixed(3)})`))}function be(){const U=fo(u,O.surfel_data);if(U!==null&&U>.001){b.setOrbitDepth(U);return}const Q=u.rotation,ce=Q[2],ve=Q[6],Se=Q[10],xe=(O.centroid[0]-u.position[0])*ce+(O.centroid[1]-u.position[1])*ve+(O.centroid[2]-u.position[2])*Se;xe>.001&&b.setOrbitDepth(xe)}if(Z.length===0){const U=O.bbox.max[0]-O.bbox.min[0],Q=O.bbox.max[1]-O.bbox.min[1],ce=O.bbox.max[2]-O.bbox.min[2],Se=.5*Math.sqrt(U*U+Q*Q+ce*ce)*.5;H.set(Me[0]-Se,Me[1]-Se,Me[2]-Se,u.position);const xe=H.create(Se,Se,Se);H.normalize(xe,xe);const ge=H.create(0,1,0),Be=H.create();H.cross(ge,xe,Be),H.normalize(Be,Be);const He=H.create();H.cross(xe,Be,He);const st=kt.create(Be[0],He[0],xe[0],Be[1],He[1],xe[1],Be[2],He[2],xe[2]);mt.fromMat3(st,u.rotation),u.update_buffer()}b.setCenter(H.create(O.centroid[0],O.centroid[1],O.centroid[2]));const Re=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),G="halloumi.fetch_by_id";let j=null;try{const U=localStorage.getItem(G);(U==="0"||U==="1")&&(j=U==="1")}catch{}const S=N.get("byid"),l={fetchById:S!==null?S==="1":j!==null?j:!Re,octBound:N.get("oct")==="1",acc16:N.get("acc16")==="1",staticSortKeys:null},_=N.get("bsp");let f=null;_&&(l.staticSortKeys=new Float32Array(O.num_points),f=Zc(_).then(U=>{if(U.nSurfels!==O.num_points)throw new Error(`BSP has ${U.nSurfels} surfels, scene has ${O.num_points}`);return console.log(`[bsp] loaded ${_}: ${U.nNodes} nodes over ${U.nSurfels} surfels`),U}));let g=new Cs(O,a,V,u.uniform_buffer,v,te,l);const k=N.get("surfel_math");J.surfel_math=k==="raysplat"||k==="centred"?k:N.get("raysplat")==="1"?"raysplat":"conic",J.hyp_legacy=N.get("hyp_legacy")==="1",J.mip2d=N.get("mip2d")==="1";{const U=parseFloat(N.get("mip2d_k")??"");Number.isFinite(U)&&U>0&&(J.mip2d_k=U)}Fi(J.mip2d,J.mip2d_k,a,g.render_settings_buffer),os({hypLegacy:J.hyp_legacy,raysplat:J.surfel_math==="raysplat",centred:J.surfel_math==="centred"},a,g.render_settings_buffer),J.legacy_renderer=N.get("legacy")==="1",J.legacy_renderer&&g.setLegacyRenderer(!0),J.two_pass=N.get("twopass")==="1";{const U=parseFloat(N.get("opaque_t")??"");Number.isFinite(U)&&(J.opaque_thresh=Math.min(.99,Math.max(.01,U)))}g.setOpaqueThresh(J.opaque_thresh),J.two_pass&&g.setTwoPass(!0);{const U=N.get("overdraw");(U==="shaded"||U==="raster"||U==="1")&&(J.overdraw=U==="raster"?"raster":"shaded");const Q=parseInt(N.get("overdraw_max")??"",10);Number.isFinite(Q)&&Q>0&&(J.overdraw_max=Q)}g.setOverdrawMax(J.overdraw_max),J.overdraw!=="off"&&g.setOverdrawMode(J.overdraw==="raster"?2:1),J.fetch_by_id=l.fetchById,console.log(`[render_2dgs] fetch_by_id=${l.fetchById} (source: ${S!==null?"?byid":j!==null?"remembered":`handheld=${Re}`})`),F=g,dn(o.width,o.height,a,g.render_settings_buffer),J.atlas_enabled=te!==null;{const U=O.surfel_data,Q=U.length/8;let ce=0,ve=0,Se=0;for(let ge=0;ge<Q;ge++)ce+=U[ge*8],ve+=U[ge*8+1],Se+=U[ge*8+2];const xe=Q>0?[ce/Q,ve/Q,Se/Q]:[0,0,0];g.setBfcParams(J.bfc_cos,xe),os({bfc:J.bfc},a,g.render_settings_buffer),console.log(`[bfc] flag=${J.bfc} cos=${J.bfc_cos} centroid=(${xe[0].toFixed(3)}, ${xe[1].toFixed(3)}, ${xe[2].toFixed(3)})`)}let x=!1;const P=(()=>{if(te!==null)return`${te.meta.format===2?"BC7":te.meta.format===3?"ASTC 4×4":te.meta.format===7?"BC7 codebook gather (typeD)":`format=${te.meta.format}`} ${te.meta.width}×${te.meta.height}, ${te.meta.n_layers} layers`;const U=a.features.has("texture-compression-bc"),Q=a.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(U?["BC7"]:[]).concat(Q?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",P),Gi(O.sh_bias,a,g.render_settings_buffer),Ii(J.gaussian_scaling,a,g.render_settings_buffer),J.sh_bias=O.sh_bias;let i=O.num_points.toLocaleString();const w={stats:`${i} surfels · -- fps`};_e.addMonitor(w,"stats",{label:"Stats",interval:200});const p=.4,h=3,c=.3;let m=null,E=0,y=0;const D=ft.create(),W=kt.create();let q=Z.length>0?0:-1;const oe={view:Z.length>0?`${q+1} / ${Z.length}: ${Z[q].img_name??q}`:"— no presets —"},ne=document.createElement("span");function ae(U){const Q=kt.create(U[0],U[1],U[2],U[4],U[5],U[6],U[8],U[9],U[10]);return ft.fromMat(Q)}function Pe(U,Q){m={fromPos:H.clone(u.position),toPos:H.clone(U.position),fromQuat:ft.normalize(ae(u.rotation)),toQuat:ft.normalize(ae(U.rotation)),target:U,t:0,duration:Math.max(.01,Q)}}const Ce=(U,Q=!0)=>{if(Z.length===0)return;q=(U%Z.length+Z.length)%Z.length;const ce=Z[q];Q?Pe(ce,p):(u.set_preset(ce),b.resetToCamera(),be()),oe.view=`${q+1} / ${Z.length}: ${Z[q].img_name??q}`,ne.textContent=oe.view};if(Z.length>0){const U=_e.addSeparator(),Q=document.createElement("div");Q.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ce=(Se,xe,ge)=>{const Be=document.createElement("button");return Be.className="tp-btnv_b",Be.textContent=Se,Be.title=xe,Be.style.cssText="flex:0 0 34px;height:24px;padding:0;",Be.addEventListener("click",ge),Be};ne.textContent=oe.view,ne.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Q.appendChild(ce("◀","previous view (←)",()=>Ce(q-1))),Q.appendChild(ne),Q.appendChild(ce("▶","next view (→)",()=>Ce(q+1))),(_e.element.querySelector(".tp-rotv_c")??_e.element).insertBefore(Q,U.element),U.dispose()}const ke=Z.length>0?uo(Z,{tiltDownDeg:15,alignFirst:!0}):null,Ae=ke?fu(Z,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Ie=0;const Fe=12;we.value={onAnimateStart:()=>{Ie=0},onAnimateStop:()=>{b.resetToCamera(),be()}},_e.addInput(J,"render_scale",{label:"Render scale",min:.25,max:ze,step:.25}).on("change",U=>{const Q=Math.max(.25,U.value),ce=Math.max(1,Math.ceil(Q*o.clientWidth)),ve=Math.max(1,Math.ceil(Q*o.clientHeight));(o.width!==ce||o.height!==ve)&&(o.width=ce,o.height=ve,z())}),_e.addInput(J,"upscale",{label:"Upscale",options:{off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware":"texture"}}).on("change",()=>{J.upscale==="off"&&z()}),_e.addInput(J,"upscale_factor",{label:"Upscale factor",options:{"2x (render at 1/2)":2,"4x (render at 1/4)":4}});const Ze={res:""},tt=()=>{const U=o.width*o.height/1e6;Ze.res=`${o.width}×${o.height}  (${U.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${ze.toFixed(2)} · native ${Math.round(o.clientWidth*ze)}×${Math.round(o.clientHeight*ze)}`};tt(),I=tt,_e.addMonitor(Ze,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),_e.addInput(J,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",U=>Ii(U.value,a,g.render_settings_buffer)),_e.addInput(J,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",U=>Gi(U.value,a,g.render_settings_buffer)),_e.addInput(J,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",U=>{g.bgColor=[U.value.r,U.value.g,U.value.b,U.value.a]});const We=U=>U===null?"":U.meta.format===3||U.meta.format===8||U.meta.format===10?" (ASTC)":" (BC7)";let Ne=We(te);const Ke=_e.addInput(J,"atlas_enabled",{label:`Texture${Ne}`}).on("change",U=>{g.setAtlasEnabled(U.value),ot()}),Ve=document.createElement("button");Ve.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const ot=()=>{Ve.textContent=`Texture${Ne}: ${J.atlas_enabled?"ON":"OFF"}`,Ve.style.borderColor=J.atlas_enabled?"#f0b060":"#444",Ve.style.color=J.atlas_enabled?"#f0b060":"#bbb"},ct=()=>{J.atlas_enabled=!J.atlas_enabled,g.setAtlasEnabled(J.atlas_enabled),Ke.refresh(),ot()};Ve.title="toggle the baked texture (T)",Ve.addEventListener("click",ct),te&&document.body.appendChild(Ve),ot();const nt=N.get("bundle_b");let lt=()=>{};if({}.VITE_MIP2D_UI==="1"&&(lr(O)||nt)){const U=document.createElement("button");U.style.cssText=Ve.style.cssText.replace("top:8px","top:42px"),U.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let Q=null;const ce=()=>{U.textContent=`Mip 2D filter: ${J.mip2d?"ON":"OFF"}`,U.style.borderColor=J.mip2d?"#f0b060":"#444",U.style.color=J.mip2d?"#f0b060":"#bbb";try{const Se=new URL(window.location.href);J.mip2d?Se.searchParams.set("mip2d","1"):Se.searchParams.delete("mip2d"),history.replaceState(history.state,"",Se.toString())}catch{}},ve=()=>{Fi(J.mip2d,J.mip2d_k,a,g.render_settings_buffer),Q==null||Q.refresh(),ce()};U.addEventListener("click",()=>{J.mip2d=!J.mip2d,ve()}),Q=_e.addInput(J,"mip2d",{label:"Mip 2D filter"}).on("change",()=>ve()),document.body.appendChild(U),ce(),lt=()=>{const Se=lr(O);U.style.display=Se?"":"none",Q&&(Q.hidden=!Se)},lt(),window.__halloumiMip2D={get on(){return J.mip2d},toggle:()=>U.click()}}let Xe=()=>{};if(nt){const U=N.get("label_a")??"A",Q=N.get("label_b")??"B",ce={a:{pc:O,atlas:te,renderer:g},b:null};let ve="a",Se=null;const xe=document.createElement("button");xe.style.cssText=Ve.style.cssText.replace("top:8px","top:76px"),xe.title=`switch between the two bakes of this scene (B key): ${U} / ${Q}`;const ge=(Ue="")=>{xe.textContent=Ue||`Scene: ${ve==="a"?U:Q}  ⇄`,xe.style.borderColor=ve==="b"?"#60b0f0":"#f0b060",xe.style.color=ve==="b"?"#60b0f0":"#f0b060";try{const rt=new URL(window.location.href);ve==="b"?rt.searchParams.set("side","b"):rt.searchParams.delete("side"),history.replaceState(history.state,"",rt.toString())}catch{}},Be=()=>ce.b?Promise.resolve(ce.b):(Se||(Se=bu(nt,a,Ue=>{ve==="a"&&ge(Ue)}).then(Ue=>(ce.b={pc:Ue.pc,atlas:Ue.atlas,renderer:null},ge(),ce.b))),Se),He=Ue=>{const rt=Kt.slice(0);Ue.renderer=new Cs(Ue.pc,a,V,u.uniform_buffer,v,Ue.atlas,Ue===ce.a?l:{...l,staticSortKeys:null}),new Uint8Array(Kt).set(new Uint8Array(rt))},st=Ue=>{const rt=ce[Ue];rt.renderer||He(rt);const St=g,qe=rt.renderer;qe.bgColor=[...St.bgColor],qe.setAtlasEnabled(J.atlas_enabled&&rt.atlas!==null),qe.setLegacyRenderer(J.legacy_renderer),qe.setOpaqueThresh(J.opaque_thresh),qe.setTwoPass(J.two_pass),qe.setOverdrawMax(J.overdraw_max),qe.setOverdrawMode(J.overdraw==="off"?0:J.overdraw==="raster"?2:1),qe.setMsaa(J.msaa),qe.setFetchById(J.fetch_by_id);{const zt=rt.pc.surfel_data,pt=zt.length/8;let Yt=0,$t=0,fn=0;for(let Vt=0;Vt<pt;Vt++)Yt+=zt[Vt*8],$t+=zt[Vt*8+1],fn+=zt[Vt*8+2];qe.setBfcParams(J.bfc_cos,pt>0?[Yt/pt,$t/pt,fn/pt]:[0,0,0])}Gc(rt.pc.feature_mode,void 0,void 0,!1),Ic(rt.pc.K,void 0,void 0,!1),dn(o.width,o.height,void 0,void 0,!1),xr(a,qe.render_settings_buffer),g=qe,F=qe,O=rt.pc,te=rt.atlas,i=O.num_points.toLocaleString(),ve=Ue,lt(),ge(),console.log(`[A/B] active = ${Ue} (${Ue==="a"?U:Q}): ${O.num_points} surfels, feature_mode ${O.feature_mode}, EWA rows ${lr(O)}`)};Xe=()=>{if(ve==="a"){if(ce.b){st("b");return}Vn(`loading ${Q} ...`),Be().then(()=>{st("b"),jt()}).catch(Ue=>{jt(),console.error("[A/B] B failed:",Ue),ge(`B failed: ${(Ue==null?void 0:Ue.message)??Ue}`)})}else st("a")},xe.addEventListener("click",()=>Xe()),document.body.appendChild(xe),ge(),N.get("side")==="b"?Xe():Re||setTimeout(()=>{Be().then(Ue=>{Ue.renderer||He(Ue)}).catch(Ue=>console.warn("[A/B] preload failed:",Ue))},1500),window.__halloumiAB={get side(){return ve},toggle:()=>Xe(),get bReady(){var Ue;return!!((Ue=ce.b)!=null&&Ue.renderer)}}}if(te&&(ye||Ee))if(ye){const U={};U[`A${We(te)} · bundle`]="A",U[`B${We(ye)} · atlas2`]="B";const Q={atlas:"A"};_e.addInput(Q,"atlas",{label:"Atlas source",options:U}).on("change",ce=>{const ve=ce.value==="B"?ye:te;g.setAtlas(ve),Ne=We(ve),Ke.label=`Texture${Ne}`,ot(),console.log(`[atlas2] now sampling ${ce.value}${Ne}`)})}else{const U={note:Ee};_e.addMonitor(U,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const Je=te!==null&&(te.meta.probe_mode|0)>0;if(g.hasMips&&Je)g.setMipMode(J.mips),_e.addInput(J,"mips",{label:"Mips (trilinear)"}).on("change",U=>g.setMipMode(U.value));else if(g.hasMips){const U=N.get("mipbias"),Q={mode:U==="0"||U==="1"||U==="2"?U:"off"},ce=ve=>{ve==="off"?g.setMipMode(!1):(g.setMipLodBias(Number(ve)),g.setMipMode(!0)),console.log(`[mips] ${ve==="off"?"off (level 0 only)":`on, bias ${ve}`}`)};ce(Q.mode),_e.addInput(Q,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",ve=>ce(ve.value))}const je=_e.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});f&&f.then(U=>{const Q=g,ce=new Float32Array(U.nSurfels),ve={cpu:"--"};let Se=null;Q.preFrame=()=>{g===Q&&(J.bsp_order?(Se!==!0&&U.invalidate(),U.computeKeys(u.position)&&(Q.writeSortKeys(U.keys),ve.cpu=`${U.lastMs.toFixed(2)} ms / ${U.nNodes} nodes`)):Se!==!1&&Q.writeSortKeys(ce),Se=J.bsp_order)},je.addInput(J,"bsp_order",{label:"BSP order (vs depth sort)"}),je.addMonitor(ve,"cpu",{label:"BSP traversal",interval:500})}).catch(U=>console.error("[bsp] disabled:",U)),je.addInput(J,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",U=>os({raysplat:U.value==="raysplat",centred:U.value==="centred"},a,g.render_settings_buffer));const et=globalThis.__gpuAdapterInfo??{},_t={s:`${et.vendor??"?"} / ${et.architecture??"?"}
${et.device||et.description||"?"}`};je.addMonitor(_t,"s",{label:"GPU",multiline:!0,lineCount:2}),je.addInput(J,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",U=>os({hypLegacy:U.value},a,g.render_settings_buffer)),je.addInput(J,"two_pass",{label:"Two-pass (layer)"}).on("change",U=>g.setTwoPass(U.value)),je.addInput(J,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",U=>g.setOpaqueThresh(U.value)),je.addInput(J,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",U=>g.setOverdrawMode(U.value==="shaded"?1:U.value==="raster"?2:0)),je.addInput(J,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",U=>g.setOverdrawMax(U.value));const at={s:"—"};je.addMonitor(at,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(g.overdrawModeValue===0){at.s="—";return}g.readOverdrawStats().then(U=>{U&&(at.s=`mean ${U.mean.toFixed(1)} frag/px · ${U.meanCovered.toFixed(1)} on covered
max ${U.max} · covered ${(U.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(U=>console.warn("[overdraw] readback failed:",U))},500),_e.addInput(J,"legacy_renderer",{label:"Legacy renderer"}).on("change",U=>g.setLegacyRenderer(U.value)),_e.addInput(J,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",U=>{g.setFetchById(U.value);try{localStorage.setItem("halloumi.fetch_by_id",U.value?"1":"0")}catch{}}),_e.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>mr("webgl")),J.msaa=N.get("msaa")==="1",J.msaa&&g.setMsaa(!0),_e.addInput(J,"msaa",{label:"MSAA 4×"}).on("change",U=>g.setMsaa(U.value));const Pt={aspect:"canvas"},ut=_e.addFolder({title:"📸 Screenshot",expanded:!1});ut.addInput(Pt,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const dt={s:"pick a size to capture"};ut.addMonitor(dt,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Mt=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Tt=null;function It(U){let Q;if(Pt.aspect==="canvas")Q=o.width/o.height;else{const[ge,Be]=Pt.aspect.split(":").map(Number);Q=ge/Be}const ce=a.limits.maxTextureDimension2D;let ve,Se;if(U==="canvas"&&Pt.aspect==="canvas")ve=o.width,Se=o.height;else{const ge=U==="canvas"?Math.max(o.width,o.height):U;Q>=1?(ve=ge,Se=Math.round(ge/Q)):(Se=ge,ve=Math.round(ge*Q))}const xe=Math.min(1,ce/Math.max(ve,Se));return ve=Math.max(2,Math.round(ve*xe)&-2),Se=Math.max(2,Math.round(Se*xe)&-2),[ve,Se]}function Gt(U,Q){const ce=URL.createObjectURL(U),ve=document.createElement("a");ve.href=ce,ve.download=Q,document.body.appendChild(ve),ve.click(),ve.remove(),setTimeout(()=>URL.revokeObjectURL(ce),1e4)}async function Ht(U,Q){var ge;const ce=(U.size/1048576).toFixed(1),ve=window;if(typeof ve.showSaveFilePicker=="function")try{const Be=await ve.showSaveFilePicker({suggestedName:Q,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),He=await Be.createWritable();return await He.write(U),await He.close(),`saved ${Be.name??Q} (${ce} MB) where you chose`}catch(Be){if((Be==null?void 0:Be.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Se=new File([U],Q,{type:"image/png"}),xe=navigator;if(xe.share&&((ge=xe.canShare)!=null&&ge.call(xe,{files:[Se]})))try{return await xe.share({files:[Se],title:Q}),`shared ${Q} (${ce} MB) via share sheet`}catch(Be){if((Be==null?void 0:Be.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return Gt(U,Q),`downloaded ${Q} (${ce} MB) to your browser's Downloads folder`}async function Rt(U){if(x)return;const[Q,ce]=It(U);dt.s=`rendering ${Q}×${ce}…`;const ve=o.width,Se=o.height;u.setRenderSize(Q,ce),dn(Q,ce,a,g.render_settings_buffer);const xe=a.createTexture({size:[Q,ce,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ge=Math.ceil(Q*4/256)*256,Be=a.createBuffer({size:ge*ce,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),He=a.createCommandEncoder({label:"screenshot"});g.frame(He,xe.createView(),!1),He.copyTextureToBuffer({texture:xe},{buffer:Be,bytesPerRow:ge,rowsPerImage:ce},[Q,ce,1]),a.queue.submit([He.finish()]),u.clearRenderSize(),dn(ve,Se,a,g.render_settings_buffer);try{await Be.mapAsync(GPUMapMode.READ);const st=new Uint8Array(Be.getMappedRange()),vt=new Uint8ClampedArray(Q*ce*4);for(let pt=0;pt<ce;pt++)vt.set(st.subarray(pt*ge,pt*ge+Q*4),pt*Q*4);for(let pt=3;pt<vt.length;pt+=4)vt[pt]=255;Be.unmap();const Ue=document.createElement("canvas");Ue.width=Q,Ue.height=ce,Ue.getContext("2d").putImageData(new ImageData(vt,Q,ce),0,0);const rt=await new Promise((pt,Yt)=>Ue.toBlob($t=>$t?pt($t):Yt(new Error("toBlob failed")),"image/png")),St=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),qe=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),zt=`${St}_${Q}x${ce}_${qe}.png`;Tt={blob:rt,name:zt},dt.s=await Ht(rt,zt)}catch(st){console.error("[screenshot]",st),dt.s=`failed: ${st}`}finally{Be.destroy(),xe.destroy()}}{const U=document.createElement("div");U.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const Q=(ve,Se,xe)=>{const ge=document.createElement("button");ge.className="tp-btnv_b",ge.textContent=ve,ge.title=Se,ge.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ge.addEventListener("click",xe),U.appendChild(ge)};Q("Canvas","current canvas size",()=>{Rt("canvas")});for(const[ve,Se]of Mt)Q(ve,`${Se} px long edge`,()=>{Rt(Se)});(ut.element.querySelector(".tp-fldv_c")??ut.element).appendChild(U)}ut.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Tt){dt.s="nothing captured yet";return}Gt(Tt.blob,Tt.name),dt.s=`downloaded ${Tt.name} to your browser's Downloads folder`}),_e.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(Z.length>0)u.set_preset(Z[0]);else{const U=O.bbox.max[0]-O.bbox.min[0],Q=O.bbox.max[1]-O.bbox.min[1],ce=O.bbox.max[2]-O.bbox.min[2],Se=.5*Math.sqrt(U*U+Q*Q+ce*ce)*.5;H.set(Me[0]-Se,Me[1]-Se,Me[2]-Se,u.position);const xe=H.create(Se,Se,Se);H.normalize(xe,xe);const ge=H.create();H.cross(H.create(0,1,0),xe,ge),H.normalize(ge,ge);const Be=H.create();H.cross(xe,ge,Be);const He=kt.create(ge[0],Be[0],xe[0],ge[1],Be[1],xe[1],ge[2],Be[2],xe[2]);mt.fromMat3(He,u.rotation),u.update_buffer()}b.resetToCamera(),be()});const Dt={result:"— click Benchmark —"},Ft=_e.addMonitor(Dt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Ft.hidden=!0;const it={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function pn(){const Q=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ce of Object.keys(it))if(Q.startsWith(ce))return ce;return null}const Ot=document.createElement("div");Ot.id="bench-overlay",Ot.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ot);function tn(U,Q,ce){const ve=Math.floor(Q/Math.max(1,ce)*100),Se=32,xe=Math.floor(Q/Math.max(1,ce)*Se),ge="█".repeat(xe)+"░".repeat(Se-xe);Ot.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${U}</div><div>[${ge}] ${ve}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${Q} / ${ce} frames · offscreen · pipelined · no vsync</div>`,Ot.style.display="block"}function kn(){Ot.style.display="none"}async function Nt(U=10,Q=200){if(x)return;if(Z.length===0){Dt.result="no cameras to benchmark";return}x=!0;const ce=le,ve=J.animate,Se=new Float32Array(u.position),xe=new Float32Array(u.rotation);le=!1,J.animate=!1,_e.refresh(),m=null,b.enabled=!1;const ge=pn(),Be=ge?it[ge]:null,He=(Be==null?void 0:Be.w)??o.width,st=(Be==null?void 0:Be.h)??o.height,vt=(Be==null?void 0:Be.fovY)??u.getFov(),Ue=ge?`${ge} · ${He>=4e3/4+500?"images_4":"images_2"}`:"custom",rt=o.width,St=o.height,qe=u.getFov();o.width=He,o.height=st,u.setFov(vt),dn(He,st,a,g.render_settings_buffer);const zt=a.createTexture({size:[He,st,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),pt=zt.createView(),Yt=()=>{const Et=a.createCommandEncoder();g.frame(Et,pt,!1),a.queue.submit([Et.finish()])},$t=()=>new Promise(Et=>setTimeout(Et,0)),fn=20,Vt=async(Et,qt)=>{let Bn=0,Wt=0;for(tn(qt,0,Et),await $t();Wt<Et;){const _n=Math.min(fn,Et-Wt),An=performance.now();for(let Hn=0;Hn<_n;Hn++)u.set_preset(Z[(Wt+Hn)%Z.length]),Yt();await a.queue.onSubmittedWorkDone();const Ls=performance.now();Bn+=Ls-An,Wt+=_n,tn(qt,Wt,Et),await $t()}return Bn};try{await Vt(U,"Warming up");const qt=await Vt(Q,"Benchmarking")/Q,Bn=1e3/qt,Wt=O.num_points??O.surfel_data.length/8,_n=(vt*180/Math.PI).toFixed(1),An=`${Bn.toFixed(1)} FPS  (${qt.toFixed(2)} ms/frame)
${He}×${st} · fovY ${_n}° · ${Ue}
${Wt.toLocaleString()} surfels · ${U}w+${Q}b · pipelined`+(g.hasMips?` · ${g._mipMode?`mips bias ${g.mipLodBias}`:"mips off"}`:"");Dt.result=An,Ft.hidden=!1,console.log("[bench]",An.replace(/\n/g,"  |  "))}catch(Et){console.error("[bench] failed:",Et),Dt.result=`bench failed: ${Et}`,Ft.hidden=!1}finally{kn(),zt.destroy(),o.width=rt,o.height=St,u.setFov(qe),dn(rt,St,a,g.render_settings_buffer),u.position.set(Se),u.rotation.set(xe),u.update_buffer(),b.enabled=!ce,le=ce,J.animate=ve,_e.refresh(),x=!1}}_e.addButton({title:"📊 Benchmark"}).on("click",()=>Nt());const Tn=Math.PI/2,wt=new Set,Ds=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],ds=U=>{const Q=U.target;return!!Q&&(Q.tagName==="INPUT"||Q.tagName==="TEXTAREA"||Q.isContentEditable)},zs=()=>wt.has("ShiftLeft")||wt.has("ShiftRight");document.addEventListener("keyup",U=>{wt.delete(U.code)}),window.addEventListener("blur",()=>wt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&wt.clear()});const hn=U=>{if(wt.size===0||J.animate)return;const Q=zs()?3:1;let ce=0;wt.has("KeyX")&&(ce+=1),wt.has("KeyZ")&&(ce-=1),ce!==0&&(b.addRoll(ce*Tn*Q*U),m=null);const ve=u.rotation,Se=[ve[0],ve[4],ve[8]],xe=[ve[1],ve[5],ve[9]],ge=[ve[2],ve[6],ve[10]],Be=b.center,st=(b.sceneRadius??Math.max(.05,H.distance(u.position,Be)))*.5*Q*U;let vt=0,Ue=0,rt=0;if(wt.has("KeyW")&&(rt+=1),wt.has("KeyS")&&(rt-=1),wt.has("KeyD")&&(vt+=1),wt.has("KeyA")&&(vt-=1),wt.has("KeyE")&&(Ue+=1),wt.has("KeyQ")&&(Ue-=1),!vt&&!Ue&&!rt)return;const St=[0,0,0];for(let qe=0;qe<3;qe++)St[qe]=(Se[qe]*vt+xe[qe]*Ue+ge[qe]*rt)*st;for(let qe=0;qe<3;qe++)u.position[qe]+=St[qe],Be[qe]+=St[qe];u.update_buffer(),m=null};document.addEventListener("keydown",U=>{if(ds(U))return;const Q=U.key,ce=Q.toLowerCase();if(U.ctrlKey||U.metaKey||U.altKey){wt.clear();return}if(Ds.includes(U.code)&&!(U.shiftKey&&U.code==="KeyD")){wt.add(U.code),U.preventDefault();return}if(ce==="t"){ct();return}if(ce==="b"){Xe();return}if(Q>="0"&&Q<="9"&&Z.length>0){const ve=parseInt(Q);ve<Z.length&&Ce(ve)}else Q==="ArrowLeft"||Q==="PageUp"?(Ce(q-1),U.preventDefault()):Q==="ArrowRight"||Q==="PageDown"?(Ce(q+1),U.preventDefault()):U.shiftKey&&ce==="d"&&g.debugReadSortedIndices(30).catch(ve=>console.error("[DEBUG] readback failed:",ve))});function ps(U,Q){const ce=o.getBoundingClientRect();return[(U-ce.left)*u.viewport[0]/ce.width,(Q-ce.top)*u.viewport[1]/ce.height]}o.addEventListener("dblclick",U=>{const[Q,ce]=ps(U.clientX,U.clientY);ie(Q,ce)});let Nn=0,$n=0,qn=0;o.addEventListener("pointerdown",U=>{if(U.pointerType!=="touch")return;const Q=performance.now(),ce=Q-Nn,ve=U.clientX-$n,Se=U.clientY-qn;if(ce>0&&ce<300&&ve*ve+Se*Se<40*40){const[xe,ge]=ps(U.clientX,U.clientY);ie(xe,ge),Nn=0}else Nn=Q,$n=U.clientX,qn=U.clientY});function Wn(){return B}let Kn=performance.now(),jn=60,nn=Promise.resolve(),Cn=0,hs=0;function sn(){Us().catch(U=>{hs++<5&&console.error("[frame] exception (render loop kept alive):",U),requestAnimationFrame(sn)})}async function Us(){var Se;const U=performance.now(),Q=Math.min((U-Kn)/1e3,.1);if(Kn=U,Q>0){const xe=((Se=g.lastStageBreakdownMs)==null?void 0:Se.total)??0,ge=xe>.5?1e3/xe:1/Q;jn=jn*.9+ge*.1,w.stats=`${i} surfels · ${Math.round(jn)} fps`}if(x){requestAnimationFrame(sn);return}if(Wn()&&(m||le)&&(m=null,b.resetToCamera(),be(),le&&(le=!1,J.animate=!1,_e.refresh())),le&&J.animateMode==="circle"&&ke){Ie+=Q/Fe,Ie>=1&&(Ie-=1);const xe=po(ke,Ie);u.set_preset(xe),b.update(Q);const ge=a.createCommandEncoder();g.frame(ge,r.getCurrentTexture().createView()),a.queue.submit([ge.finish()]),Cn++,Cn===2&&jt(),requestAnimationFrame(sn);return}if(m){m.t+=Q/m.duration;const xe=Math.min(1,m.t),ge=xe*xe*(3-2*xe);H.lerp(m.fromPos,m.toPos,ge,u.position),ft.slerp(m.fromQuat,m.toQuat,ge,D),kt.fromQuat(D,W),mt.fromMat3(W,u.rotation),u.update_buffer(),m.t>=1&&(u.set_preset(m.target),m=null,le?Z.length>0&&(E=c):(b.resetToCamera(),be()))}else if(le&&!Wn()){const xe=J.animateMode==="circle"&&Ae.length>0,ge=xe?Ae:Z;if(ge.length!==0){if(E-=Q,E<=0){const He=((xe?y:q)+1)%ge.length;xe?y=He:q=He;const st=xe?h/8:h;Pe(ge[He],st),xe||(oe.view=`${q+1} / ${Z.length}: ${Z[q].img_name??q}`)}}}hn(Q),b.update(Q),R(),ee(),await nn;const ce=a.createCommandEncoder(),ve=r.getCurrentTexture().createView();if(J.upscale!=="off"){const xe=J.upscale_factor;(!K||K.mode!==J.upscale||K.scale!==1/xe)&&(K==null||K.destroy(),K=new iu(a,V,J.upscale,1/xe));const ge=K.lowTarget(o.width,o.height),Be=u.getRenderSize();(!Be||Be[0]!==ge.w||Be[1]!==ge.h||re[2]!==o.width||re[3]!==o.height)&&(u.setRenderSize(ge.w,ge.h,o.width,o.height),re=[ge.w,ge.h,o.width,o.height]),dn(ge.w,ge.h,a,g.render_settings_buffer),g.slopeTarget=K.slopeTarget,g.frame(ce,ge.view),g.slopeTarget=null,K.pass(ce,ve,o.width,o.height)}else(re[0]!==0||u.getRenderSize()!==null)&&(u.clearRenderSize(),re=[0,0,0,0],z()),g.frame(ce,ve);a.queue.submit([ce.finish()]),nn=a.queue.onSubmittedWorkDone(),Cn++,Cn===2&&jt(),requestAnimationFrame(sn)}requestAnimationFrame(sn)}}const wu=o=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
flat in vec4 v_tu_op; flat in vec4 v_tv_sh; flat in vec4 v_tw_ly; flat in vec4 v_col_dc;
flat in vec2 v_ctr; flat in vec4 v_uv; flat in vec2 v_dp;
uniform vec2 u_vp;
uniform sampler2DArray u_atlas;
uniform int u_atlas_on;
uniform vec4 u_tex;          // atlas_scale, atlas_offset, res_bias, uv_extent
uniform vec2 u_dims;         // atlas slice width, layer height
uniform int u_dbg;           // 0 normal; see the debug outputs below
out vec4 o;
void main() {
    const float FILTER_INV_SQUARE = 2.0;
    const float K_BETA_SQ = 9.0;
    vec2 pixf = floor(vec2(gl_FragCoord.x, u_vp.y - gl_FragCoord.y));   // top-left origin
    float u0 = v_tu_op.x, v0 = v_tu_op.y, J00 = v_tu_op.z;
    float J01 = v_tv_sh.x, J10 = v_tv_sh.y, J11 = v_tv_sh.z;
    vec2 d = pixf - v_ctr;
    float denom = 1.0 + v_tw_ly.x * d.x + v_tw_ly.y * d.y;
    if (denom < 0.1) discard;
    float inv_d = 1.0 / denom;
    vec2 s = vec2(u0 + (J00 * d.x + J01 * d.y) * inv_d, v0 + (J10 * d.x + J11 * d.y) * inv_d);
    float rho3d = dot(s, s);
    vec2 d_pix = v_ctr - pixf;
    float rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    float depth = rho3d <= rho2d ? dot(vec3(v_dp, v_col_dc.w), vec3(s, 1.0)) : v_col_dc.w;
    if (depth < 0.2) discard;
    float ab;
${o?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
    float base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
    float sh = v_tv_sh.w;
    if (sh >= 1.99 && sh <= 2.01) ab = base * base;
    else if (sh >= 0.99 && sh <= 1.01) ab = base;
    else if (sh >= 0.49 && sh <= 0.51) ab = sqrt(base);
    else if (sh >= 3.99 && sh <= 4.01) { float b2 = base * base; ab = b2 * b2; }
    else ab = pow(base, sh);`:"    ab = exp(-rho3d * 0.5);"}
    float alp = exp(-rho2d * 0.5);
    float b = min(0.99, v_tu_op.w * max(ab, alp));
    if (b < 1.0 / 255.0) discard;
    vec3 color = v_col_dc.rgb;
    // Skip-texture surfels carry a zero-area rect (uv_scale == 0) whose slice id points one past
    // the last layer: no residual, SV only — the CUDA bake-render semantics. Sampling it instead
    // reads texel (0,0) of whatever layer the index clamps to (a +0.3 brightness bug, found
    // 2026-10-13 via the re-shard A/B).
    if (u_atlas_on != 0 && v_uv.z != 0.0 && v_uv.w != 0.0) {
        vec2 hw = max(abs(v_uv.zw) * u_tex.w - 0.5 / u_dims, vec2(0.0));
        vec2 uv = clamp(v_uv.xy + s * v_uv.zw, v_uv.xy - hw, v_uv.xy + hw);
        vec4 t = textureLod(u_atlas, vec3(uv, v_tw_ly.w), 0.0);
        // debug (u_dbg): 1 = fetched texel rgb only, 2 = sample offset from the tile centre in texels/256 + layer/16
        if (u_dbg == 1) { o = vec4(t.rgb, 1.0); return; }
        if (u_dbg == 2) { o = vec4((uv - v_uv.xy) * u_dims / 256.0 + 0.5, v_tw_ly.w / 16.0, 1.0); return; }
        color = color + t.rgb * u_tex.x + vec3(u_tex.y);
    }
    color = max(vec3(0.0), color + vec3(u_tex.z));
    o = vec4(color, 1.0) * b;
}`;function _o(o){return{bc7:!!o.getExtension("EXT_texture_compression_bptc"),astc:!!o.getExtension("WEBGL_compressed_texture_astc")}}function xu(o,r){const a=_o(o),v=r.format===2||r.format===7,u=r.format===3||r.format===8;let b=0;v&&a.bc7?b=36492:u&&a.astc&&(b=37808);const B=Z=>(console.warn("[gl]",Z),{tex:null,status:Z,slice_width:r.slice_width,layer_h:r.layer_h,n_slices:0,rects:r.rects_expanded});if(!b)return B(`atlas is ${v?"BC7":u?"ASTC":`format ${r.format}`}; this GPU has bc7=${a.bc7} astc=${a.astc}`);let T=o.getParameter(o.MAX_TEXTURE_SIZE);try{const Z=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);Z>=256&&(T=Math.min(T,Z-Z%4))}catch{}const C=o.getParameter(o.MAX_ARRAY_TEXTURE_LAYERS),{width:R,n_layers:V,n_cols:F,layer_cuts:I,column_cuts:K,atlas_bytes:re}=r,z=R/4*16,L=r.rects_expanded,X=L.length/5,Y=[];let ee=0,N=0,ue=0,le=!1;const he=Array.from({length:F*V},()=>[]);let se=0,de=0;for(let Z=0;Z<X;Z++){const te=L[Z*5+4]|0,ye=L[Z*5+2],Ee=L[Z*5+3];te>=0&&te<he.length&&ye>0&&(he[te].push(Z),se=Math.max(se,ye),de=Math.max(de,Ee))}se=Math.ceil(se/4)*4,de=Math.ceil(de/4)*4;const Te=(Z,te)=>{if(Z<=T)return[0,Z];const ye=T-te;if(ye<64)throw new Error(`atlas re-shard: tiles up to ${te} px do not fit MAX_TEXTURE_SIZE ${T}`);const Ee=Math.ceil(Z/ye),Me=[0];for(let ie=1;ie<Ee;ie++)Me.push(Math.round(Z*ie/Ee/4)*4);return Me.push(Z),Me},pe=(Z,te,ye,Ee)=>Math.min(Z[te+1]-Z[te]+ye,Ee-Z[te]);try{for(let Z=0;Z<F;Z++)for(let te=0;te<V;te++){const ye=K[Z+1]-K[Z],Ee=I[te+1]-I[te],Me=Te(ye,se),ie=Te(Ee,de);(Me.length>2||ie.length>2)&&(le=!0);for(let be=0;be<Me.length-1;be++)N=Math.max(N,pe(Me,be,se,ye));for(let be=0;be<ie.length-1;be++)ue=Math.max(ue,pe(ie,be,de,Ee));Y.push({c:Z,l:te,xcuts:Me,ycuts:ie,base:ee}),ee+=(Me.length-1)*(ie.length-1)}}catch(Z){return B(String(Z))}if(N=Math.ceil(N/4)*4,ue=Math.ceil(ue/4)*4,ee>C)return B(`atlas needs ${ee} array layers, GPU allows ${C}`);const Ge=N/4*16,ze=Ge*(ue/4);let J;try{J=new Uint8Array(ze*ee)}catch(Z){return B(`atlas staging buffer ${(ze*ee/2**20).toFixed(0)} MB failed: ${Z}`)}let _e=L;le&&(_e=new Float32Array(L));for(const Z of Y){const te=Z.xcuts.length-1,ye=Z.ycuts.length-1,Ee=K[Z.c+1]-K[Z.c],Me=I[Z.l+1]-I[Z.l];for(let ie=0;ie<ye;ie++)for(let be=0;be<te;be++){const Re=Z.base+ie*te+be,G=K[Z.c]+Z.xcuts[be],j=pe(Z.xcuts,be,se,Ee),S=I[Z.l]+Z.ycuts[ie],l=pe(Z.ycuts,ie,de,Me),_=Re*ze,f=G/4,g=j/4;for(let k=0;k<l/4;k++){const x=(S/4+k)*z+f*16;J.set(re.subarray(x,x+g*16),_+k*Ge)}}if(le)for(const ie of he[Z.c*V+Z.l]){const be=L[ie*5],Re=L[ie*5+1];let G=0;for(;G<te-1&&be>=Z.xcuts[G+1];)G++;let j=0;for(;j<ye-1&&Re>=Z.ycuts[j+1];)j++;_e[ie*5]=be-Z.xcuts[G],_e[ie*5+1]=Re-Z.ycuts[j],_e[ie*5+4]=Z.base+j*te+G}}const we=o.createTexture();o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,we),o.compressedTexImage3D(o.TEXTURE_2D_ARRAY,0,b,N,ue,ee,0,J),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);const me=o.getError();if(me!==o.NO_ERROR){o.deleteTexture(we);const Z=me===o.OUT_OF_MEMORY?"OUT_OF_MEMORY":me===o.INVALID_VALUE?"INVALID_VALUE":`0x${me.toString(16)}`;return B(`atlas upload failed: GL ${Z} (${N}x${ue}x${ee} ${b===36492?"BC7":"ASTC"}, ${(ze*ee/2**20).toFixed(0)} MB, max tex ${T})`)}const O=`${b===36492?"BC7":"ASTC"} atlas ${N}x${ue}x${ee}${le?` (re-sharded for max tex ${T})`:""}`;return{tex:we,status:O,slice_width:N,layer_h:ue,n_slices:ee,rects:_e}}const Ni=28,ls=8,yu=o=>`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler2D;
layout(location=0) in uint a_id;          // surfel id, in sorted (back-to-front) order
uniform usampler2D u_surf;                // 2 texels / surfel: (x y z opa|shape) (sx|sy qw|qx qy|qz aux)
uniform sampler2D  u_sv;                  // 2K texels / surfel: K × (site.xyz, log tau), K × (rgb, 0)
uniform sampler2D  u_uv;                  // 2 texels / surfel: (uv_base.xy uv_scale.xy) (layer 0 0 0)
uniform mat3  u_R;                        // world -> camera rotation
uniform vec3  u_t;                        // camera-space translation (-R·eye)
uniform vec3  u_eye;
uniform vec2  u_vp;                       // drawing-buffer size
uniform float u_focal;                    // pixels (= 0.5 H / tan(fovY/2))
uniform float u_zfar;
uniform float u_scaling;                  // gaussian_scaling
uniform float u_sh_bias;
uniform int   u_K;
out vec4 v_tu_op; out vec4 v_tv_sh; out vec4 v_tw_ly; out vec4 v_col_dc;
out vec4 v_ctr_ext; out vec4 v_uv; out vec4 v_dp;

ivec2 tc(int l) { return ivec2(l & ${(1<<o)-1}, l >> ${o}); }
void cull() {
    v_tu_op = vec4(0.0); v_tv_sh = vec4(0.0); v_tw_ly = vec4(0.0); v_col_dc = vec4(0.0);
    v_ctr_ext = vec4(0.0); v_uv = vec4(0.0); v_dp = vec4(0.0);
}
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    int i = int(a_id);
    uvec4 s0 = texelFetch(u_surf, tc(i * 2), 0);
    uvec4 s1 = texelFetch(u_surf, tc(i * 2 + 1), 0);
    vec3 p = uintBitsToFloat(s0.xyz);
    vec2 os = unpackHalf2x16(s0.w);
    float opacity = os.x, shape = os.y;
    vec2 sc = unpackHalf2x16(s1.x) * u_scaling;
    vec2 qa = unpackHalf2x16(s1.y), qb = unpackHalf2x16(s1.z);
    bool textured = ((s1.w >> 16u) & 1u) == 1u;
    if (!(opacity > 1.0 / 255.0) || !textured) { cull(); return; }
    float qn = inversesqrt(max(dot(qa, qa) + dot(qb, qb), 1e-20));
    float w = qa.x * qn, x = qa.y * qn, y = qb.x * qn, z = qb.y * qn;
    // quat_to_rotmat columns 0 / 1 = the surfel's tangent axes, scaled
    vec3 L0 = vec3(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)) * sc.x;
    vec3 L1 = vec3(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)) * sc.y;
    vec3 c = u_R * p + u_t;
    float W = u_vp.x, H = u_vp.y;
    float zn = 0.01, zf = u_zfar, P22 = zf / (zf - zn), P23 = -(zf * zn) / (zf - zn);
    float P00 = 2.0 * u_focal / W, P11 = 2.0 * u_focal / H;
    float cw = c.z, clipZ = P22 * c.z + P23, zndc = clipZ / cw;
    float bnd = 1.2 * cw;
    if (!(zndc > 0.0 && zndc < 1.0) || abs(P00 * c.x) > bnd || abs(P11 * c.y) > bnd) { cull(); return; }
    vec3 l0 = u_R * L0, l1 = u_R * L1;
    float hw = W * 0.5, hwc = (W - 1.0) * 0.5, hh = H * 0.5, hhc = (H - 1.0) * 0.5;
    vec3 Tu = vec3(P00 * l0.x * hw + l0.z * hwc, P00 * l1.x * hw + l1.z * hwc, P00 * c.x * hw + cw * hwc);
    vec3 Tv = vec3(P11 * l0.y * hh + l0.z * hhc, P11 * l1.y * hh + l1.z * hhc, P11 * c.y * hh + cw * hhc);
    vec3 Tw = vec3(l0.z, l1.z, cw);
    // OAC cutoff
    float cutoff;
    if (shape > 1e-6) {
        float inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        cutoff = max(0.5, 3.0 * sqrt(max(0.0, 1.0 - pow(inv, 1.0 / max(shape, 1e-3)))));
    } else {
        cutoff = max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
    }
    float k2 = cutoff * cutoff;
    // SnugBox
    vec3 n0 = cross(Tv, Tw), n1 = cross(Tw, Tu), n2 = cross(Tu, Tv);
    float A = n0.x * n0.x + n0.y * n0.y - k2 * n0.z * n0.z;
    float B = n0.x * n1.x + n0.y * n1.y - k2 * n0.z * n1.z;
    float E = n1.x * n1.x + n1.y * n1.y - k2 * n1.z * n1.z;
    float D = n0.x * n2.x + n0.y * n2.y - k2 * n0.z * n2.z;
    float F = n1.x * n2.x + n1.y * n2.y - k2 * n1.z * n2.z;
    float det = A * E - B * B;
    float ax = 0.0, ay = 0.0, ex = -1.0, ey = -1.0;
    if (det > 0.0 && A > 0.0 && E > 0.0) {
        float qx = (B * F - E * D) / det, qy = (B * D - A * F) / det;
        vec3 cc = qx * n0 + qy * n1 + n2;
        float t = -(cc.x * cc.x + cc.y * cc.y - k2 * cc.z * cc.z);
        if (t > 0.0) { ax = qx; ay = qy; ex = sqrt(t * E / det); ey = sqrt(t * A / det); }
    }
    if (ex < 0.0) {                                   // compute_aabb fallback + garbage guard
        float dd = k2 * Tw.x * Tw.x + k2 * Tw.y * Tw.y - Tw.z * Tw.z;
        if (dd < 0.0) {
            float fx = k2 / dd, fy = k2 / dd, fz = -1.0 / dd;
            float pxx = fx * Tu.x * Tw.x + fy * Tu.y * Tw.y + fz * Tu.z * Tw.z;
            float pyy = fx * Tv.x * Tw.x + fy * Tv.y * Tw.y + fz * Tv.z * Tw.z;
            float h0x = pxx * pxx - (fx * Tu.x * Tu.x + fy * Tu.y * Tu.y + fz * Tu.z * Tu.z);
            float h0y = pyy * pyy - (fx * Tv.x * Tv.x + fy * Tv.y * Tv.y + fz * Tv.z * Tv.z);
            if (h0x >= 0.0 && h0y >= 0.0) {
                ax = pxx; ay = pyy; ex = sqrt(h0x); ey = sqrt(h0y);
                if (max(ex, ey) > 2.0 * max(W, H)) ex = -1.0;
            }
        }
    }
    if (ex < 0.0) { cull(); return; }
    if (max(ex, ey) < 0.25 && opacity < 0.5) { cull(); return; }        // SPR
    // CONIC expansion about the ¼-px quantised centre
    float cxc = floor(ax * 4.0 + 0.5) * 0.25, cyc = floor(ay * 4.0 + 0.5) * 0.25;
    vec3 kk = cxc * Tw - Tu, ll = cyc * Tw - Tv;
    vec3 pc = cross(kk, ll);
    float u0 = 1e10, v0 = 1e10, J00 = 0.0, J01 = 0.0, J10 = 0.0, J11 = 0.0, dwx = 0.0, dwy = 0.0;
    if (abs(pc.z) > 1e-12) {
        u0 = pc.x / pc.z; v0 = pc.y / pc.z;
        float wc = Tw.x * u0 + Tw.y * v0 + Tw.z;
        float detkl = kk.x * ll.y - kk.y * ll.x;
        if (abs(detkl) > 1e-12 && abs(wc) > 1e-8) {
            float scl = wc / detkl;
            J00 = -ll.y * scl; J01 = kk.y * scl; J10 = ll.x * scl; J11 = -kk.x * scl;
            dwx = (Tw.y * Tv.x - Tw.x * Tv.y) / pc.z;
            dwy = (Tu.y * Tw.x - Tu.x * Tw.y) / pc.z;
        } else { u0 = 1e10; v0 = 1e10; }
    }
    // SV colour (preprocess eval_sv): softmax over K sites of -tau·|site - view_dir|
    vec3 vd = normalize(p - u_eye);
    vec3 col = vec3(0.0);
    if (u_K > 0) {
        int base = i * 2 * u_K;
        float lg[${ls}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${ls}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${ls}; k++) {
            if (k >= u_K) break;
            float wk = exp(lg[k] - lmax);
            ws += wk;
            col += wk * texelFetch(u_sv, tc(base + u_K + k), 0).xyz;
        }
        col = max(vec3(0.0), col / max(ws, 1e-20) + vec3(u_sh_bias));
    }
    vec4 uvb = texelFetch(u_uv, tc(i * 2), 0);
    float layer = texelFetch(u_uv, tc(i * 2 + 1), 0).x;
    v_tu_op   = vec4(u0, v0, J00, opacity);
    v_tv_sh   = vec4(J01, J10, J11, shape);
    v_tw_ly   = vec4(dwx, dwy, 0.0, layer);
    v_col_dc  = vec4(col, c.z);
    v_ctr_ext = vec4(cxc, cyc, ex, ey);
    v_uv      = uvb;
    v_dp      = vec4(l0.z, l1.z, 0.0, 0.0);          // depth_u, depth_v = (view · L).z
}`,Pu=`#version 300 es
precision highp float;
precision highp int;
layout(location=0) in vec4 a_tu_op;
layout(location=1) in vec4 a_tv_sh;
layout(location=2) in vec4 a_tw_ly;
layout(location=3) in vec4 a_col_dc;
layout(location=4) in vec4 a_ctr_ext;
layout(location=5) in vec4 a_uv;
layout(location=6) in vec4 a_dp;
uniform vec2 u_vp;
flat out vec4 v_tu_op; flat out vec4 v_tv_sh; flat out vec4 v_tw_ly; flat out vec4 v_col_dc;
flat out vec2 v_ctr; flat out vec4 v_uv; flat out vec2 v_dp;
void main() {
    v_tu_op = a_tu_op; v_tv_sh = a_tv_sh; v_tw_ly = a_tw_ly; v_col_dc = a_col_dc;
    v_ctr = a_ctr_ext.xy; v_uv = a_uv; v_dp = a_dp.xy;
    if (a_tu_op.w <= 0.0) { gl_Position = vec4(3.0, 3.0, 0.0, 1.0); return; }   // culled record: clipped away
    const float FILTER_R = 3.0 * 0.7071067811865476;
    int vid = gl_VertexID;
    vec2 ext_pad = a_ctr_ext.zw * 1.001 + vec2(0.25);
    vec2 hlf = max(ext_pad, vec2(FILTER_R));
    float ox = (vid & 1) == 0 ? 1.0 : -1.0;
    float oy = vid < 2 ? 1.0 : -1.0;
    vec2 corner = a_ctr_ext.xy + vec2(ox, oy) * hlf;
    gl_Position = vec4((corner.x * 2.0 - (u_vp.x - 1.0)) / u_vp.x,
                       -((corner.y * 2.0 - (u_vp.y - 1.0)) / u_vp.y), 0.0, 1.0);
}`;class $i{constructor(r,a,v,u={}){M(this,"gl");M(this,"n");M(this,"K");M(this,"twLog2");M(this,"pre");M(this,"draw");M(this,"preU",{});M(this,"drawU",{});M(this,"texSurf");M(this,"texSv");M(this,"texUv");M(this,"idBuf");M(this,"recBuf");M(this,"preVao");M(this,"drawVao");M(this,"tf");M(this,"atlasTex",null);M(this,"atlasStatus","no atlas");M(this,"atlasUpload",null);M(this,"atlasOn",!1);M(this,"sd");M(this,"ok");M(this,"keyF");M(this,"keyU");M(this,"ids");M(this,"ids2");M(this,"keys2");M(this,"hist");M(this,"cnt",new Uint32Array(256));M(this,"bgColor",[0,0,0]);M(this,"scaling",1);M(this,"lastStats",{visible:0,cpuMs:0});M(this,"only",-1);M(this,"dbg",0);if(this.gl=r,a.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(a.K>ls)throw new Error(`WebGL2 backend supports K <= ${ls} SV sites (bundle has ${a.K})`);this.n=a.num_points,this.K=a.K,this.sd=a.surfel_data;const b=this.n,B=r.getParameter(r.MAX_TEXTURE_SIZE);this.twLog2=B>=4096?12:11;const T=1<<this.twLog2,C=new Uint32Array(a.surfel_data.buffer,a.surfel_data.byteOffset,b*8);for(let z=0;z<b;z++)if(C[z*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(b);for(let z=0;z<b;z++){const L=Su(C[z*8+3]);this.ok[z]=L>1/255&&(C[z*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(b),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(b),this.ids2=new Uint32Array(b),this.keys2=new Uint32Array(b),this.hist=new Uint32Array(256*4);const R=z=>Math.max(1,Math.ceil(b*z/T)),V=(z,L,X,Y,ee)=>{const N=r.createTexture();return r.bindTexture(r.TEXTURE_2D,N),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,z,T,R(Y),0,L,X,ee),N};{const z=R(2),L=new Uint32Array(T*z*4);L.set(C),this.texSurf=V(r.RGBA32UI,r.RGBA_INTEGER,r.UNSIGNED_INT,2,L)}{const z=this.K,L=R(2*z),X=new Float32Array(T*L*4),Y=a.sv_params,ee=z*7;for(let N=0;N<b;N++){const ue=N*ee,le=N*2*z*4;for(let he=0;he<z;he++){X[le+he*4]=Y[ue+he*3],X[le+he*4+1]=Y[ue+he*3+1],X[le+he*4+2]=Y[ue+he*3+2],X[le+he*4+3]=Y[ue+z*6+he];const se=le+(z+he)*4;X[se]=Y[ue+z*3+he*3],X[se+1]=Y[ue+z*3+he*3+1],X[se+2]=Y[ue+z*3+he*3+2]}}this.texSv=V(r.RGBA32F,r.RGBA,r.FLOAT,2*z,X)}const F=v?xu(r,v):null;F&&(this.atlasStatus=F.status),this.atlasUpload=F;{const z=R(2),L=new Float32Array(T*z*4);if(v&&F&&F.tex){const X=F.slice_width,Y=F.layer_h,ee=v.uv_extent,N=F.rects;for(let ue=0;ue<b;ue++){if(!this.ok[ue])continue;const le=N[ue*5],he=N[ue*5+1],se=N[ue*5+2],de=N[ue*5+3],Te=ue*8;L[Te]=(le+.5*Math.max(se,1))/X,L[Te+1]=(he+.5*Math.max(de,1))/Y,L[Te+2]=se/(2*ee)/X,L[Te+3]=de/(2*ee)/Y,L[Te+4]=N[ue*5+4]}}this.texUv=V(r.RGBA32F,r.RGBA,r.FLOAT,2,L)}const I=(z,L)=>{const X=r.createShader(z);if(r.shaderSource(X,L),r.compileShader(X),!r.getShaderParameter(X,r.COMPILE_STATUS))throw new Error("GLSL: "+r.getShaderInfoLog(X));return X},K=z=>{if(r.linkProgram(z),!r.getProgramParameter(z,r.LINK_STATUS))throw new Error("GLSL link: "+r.getProgramInfoLog(z))};this.pre=r.createProgram(),r.attachShader(this.pre,I(r.VERTEX_SHADER,yu(this.twLog2))),r.attachShader(this.pre,I(r.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),r.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],r.INTERLEAVED_ATTRIBS),K(this.pre);for(const z of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[z]=r.getUniformLocation(this.pre,z);const re=!(v&&v.kernel_type===0)&&a.kernel_type!==0;this.draw=r.createProgram(),r.attachShader(this.draw,I(r.VERTEX_SHADER,Pu)),r.attachShader(this.draw,I(r.FRAGMENT_SHADER,wu(re))),K(this.draw);for(const z of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[z]=r.getUniformLocation(this.draw,z);try{const z=new URLSearchParams(window.location.search);this.only=parseInt(z.get("only")??"-1",10),this.dbg=parseInt(z.get("dbg")??"0",10)|0}catch{}this.idBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.bufferData(r.ARRAY_BUFFER,b*4,r.DYNAMIC_DRAW),this.recBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf),r.bufferData(r.ARRAY_BUFFER,b*Ni*4,r.STREAM_COPY),r.bindBuffer(r.ARRAY_BUFFER,null),this.preVao=r.createVertexArray(),r.bindVertexArray(this.preVao),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.enableVertexAttribArray(0),r.vertexAttribIPointer(0,1,r.UNSIGNED_INT,0,0),r.bindVertexArray(null),this.drawVao=r.createVertexArray(),r.bindVertexArray(this.drawVao),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf);for(let z=0;z<7;z++)r.enableVertexAttribArray(z),r.vertexAttribPointer(z,4,r.FLOAT,!1,Ni*4,z*16),r.vertexAttribDivisor(z,1);r.bindVertexArray(null),r.bindBuffer(r.ARRAY_BUFFER,null),this.tf=r.createTransformFeedback(),r.useProgram(this.pre),r.uniform1i(this.preU.u_surf,1),r.uniform1i(this.preU.u_sv,2),r.uniform1i(this.preU.u_uv,3),r.uniform1i(this.preU.u_K,this.K),r.uniform1f(this.preU.u_sh_bias,u.shBias??a.sh_bias),r.uniform1f(this.preU.u_scaling,this.scaling),r.useProgram(this.draw),r.uniform1i(this.drawU.u_atlas,0),r.uniform1i(this.drawU.u_atlas_on,0),r.uniform4f(this.drawU.u_tex,0,0,v?v.res_bias:0,v?v.uv_extent:4),v&&F&&F.tex&&(this.atlasTex=F.tex,this.atlasOn=!0,r.uniform1i(this.drawU.u_atlas_on,1),r.uniform4f(this.drawU.u_tex,v.atlas_scale,v.atlas_offset,v.res_bias,v.uv_extent),r.uniform2f(this.drawU.u_dims,F.slice_width,F.layer_h)),r.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(r){this.atlasTex&&(this.atlasOn=r,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,r?1:0))}setGaussianScaling(r){this.scaling=r,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,r)}setShBias(r){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,r)}render(r){const a=this.gl,v=this.n,u=r.rotation,b=r.eye,B=this.sd,T=this.ok,C=r.width,R=r.height,V=performance.now(),F=.5*R/Math.tan(r.fovY*.5),I=-(u[0]*b[0]+u[4]*b[1]+u[8]*b[2]),K=-(u[1]*b[0]+u[5]*b[1]+u[9]*b[2]),re=-(u[2]*b[0]+u[6]*b[1]+u[10]*b[2]),z=.01,L=r.zfar??100,X=L/(L-z),Y=-(L*z)/(L-z),ee=2*F/C,N=2*F/R,ue=u[0],le=u[4],he=u[8],se=u[1],de=u[5],Te=u[9],pe=u[2],Ge=u[6],ze=u[10],J=this.keyF,_e=this.ids;let we=0;for(let Z=0;Z<v;Z++){if(T[Z]===0||this.only>=0&&Z!==this.only)continue;const te=Z*8,ye=B[te],Ee=B[te+1],Me=B[te+2],ie=pe*ye+Ge*Ee+ze*Me+re;if(!(ie>0))continue;const be=X*ie+Y,Re=be/ie;if(!(Re>0&&Re<1))continue;const G=1.2*ie,j=ue*ye+le*Ee+he*Me+I;if(Math.abs(ee*j)>G)continue;const S=se*ye+de*Ee+Te*Me+K;Math.abs(N*S)>G||(J[we]=L-be,_e[we]=Z,we++)}const me=this.radixSort(we),O=performance.now()-V;return this.lastStats={visible:we,cpuMs:O},we===0?(a.viewport(0,0,C,R),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),0):(a.bindBuffer(a.ARRAY_BUFFER,this.idBuf),a.bufferSubData(a.ARRAY_BUFFER,0,me,0,we),a.bindBuffer(a.ARRAY_BUFFER,null),a.useProgram(this.pre),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.texSurf),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,this.texSv),a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,this.texUv),a.uniformMatrix3fv(this.preU.u_R,!1,[ue,se,pe,le,de,Ge,he,Te,ze]),a.uniform3f(this.preU.u_t,I,K,re),a.uniform3f(this.preU.u_eye,b[0],b[1],b[2]),a.uniform2f(this.preU.u_vp,C,R),a.uniform1f(this.preU.u_focal,F),a.uniform1f(this.preU.u_zfar,L),a.bindVertexArray(this.preVao),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.tf),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),a.enable(a.RASTERIZER_DISCARD),a.beginTransformFeedback(a.POINTS),a.drawArrays(a.POINTS,0,we),a.endTransformFeedback(),a.disable(a.RASTERIZER_DISCARD),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,null),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindVertexArray(null),a.viewport(0,0,C,R),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.disable(a.DEPTH_TEST),a.useProgram(this.draw),a.uniform2f(this.drawU.u_vp,C,R),a.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D_ARRAY,this.atlasTex)),a.bindVertexArray(this.drawVao),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,we),a.bindVertexArray(null),we)}radixSort(r){const a=this.keyU,v=this.hist;v.fill(0);for(let R=0;R<r;R++){const V=a[R];v[V&255]++,v[256+(V>>>8&255)]++,v[512+(V>>>16&255)]++,v[768+(V>>>24)]++}let u=a,b=this.ids,B=this.keys2,T=this.ids2;const C=this.cnt;for(let R=0;R<4;R++){const V=R*8,F=R*256;let I=!1;for(let L=0;L<256;L++)if(v[F+L]===r){I=!0;break}if(I)continue;let K=0;for(let L=0;L<256;L++)C[L]=K,K+=v[F+L];for(let L=0;L<r;L++){const X=u[L],Y=X>>>V&255,ee=C[Y]++;B[ee]=X,T[ee]=b[L]}const re=u;u=B,B=re;const z=b;b=T,T=z}return b}}function Su(o){const r=o&65535,a=r&32768?-1:1,v=r>>10&31,u=r&1023;return v===0?a*u*5960464477539063e-23:v===31?u?NaN:a*(1/0):a*(1+u/1024)*Math.pow(2,v-15)}const cr=o=>o.format===2||o.format===7,ur=o=>o.format===3||o.format===8;async function qi(o,r,a){const v=new URLSearchParams(window.location.search),u=new Bs(o,null),b=new ao(u),B=_o(r);gt(`[gl] WebGL2 backend · bc7=${B.bc7} astc=${B.astc} · ${r.getParameter(r.RENDERER)}`);let T=null,C=null,R=[],V=null;const F={animate:v.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},I=new ro.Pane({title:"Config (WebGL2)",expanded:!0}),K={stats:"— loading —"};I.addMonitor(K,"stats",{label:"Stats",interval:200});const re={s:a.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};I.addMonitor(re,"s",{label:"Renderer"}),I.addButton({title:"🔁 Switch to WebGPU",disabled:!a.gpuAvailable}).on("click",()=>mr("webgpu"));let L=F.animate;b.enabled=!L,I.addInput(F,"animate",{label:"Animate"}).on("change",x=>{L=x.value,b.enabled=!L,L||(b.resetToCamera(),we())}),I.addInput(F,"atlas_enabled",{label:"Texture"}).on("change",x=>T==null?void 0:T.setAtlasEnabled(x.value)),I.addInput(F,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>N()),I.addInput(F,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",x=>T==null?void 0:T.setGaussianScaling(x.value)),I.addInput(F,"bg",{label:"Background",color:{type:"float"}}).on("change",x=>{T&&(T.bgColor=[x.value.r,x.value.g,x.value.b])});const X={s:"—"};I.addMonitor(X,"s",{label:"Atlas"}),I.addButton({title:"🎯 Reset camera"}).on("click",()=>me(0,!1));const Y=document.createElement("button");Y.textContent="Texture: on",Object.assign(Y.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(Y);const ee=()=>{F.atlas_enabled=!F.atlas_enabled,T==null||T.setAtlasEnabled(F.atlas_enabled),Y.textContent=`Texture: ${F.atlas_enabled?"on":"off"}`,I.refresh()};Y.addEventListener("click",ee);const N=()=>{const x=Math.max(.25,F.render_scale),P=Math.max(1,Math.ceil(x*o.clientWidth)),i=Math.max(1,Math.ceil(x*o.clientHeight));(o.width!==P||o.height!==i)&&(o.width=P,o.height=i),u.on_update_canvas()};new ResizeObserver(()=>N()).observe(o),N();const ue=.4,le=3,he=.3;let se=-1,de=null,Te=0;const pe=ft.create(),Ge=kt.create(),ze=x=>ft.fromMat(kt.create(x[0],x[1],x[2],x[4],x[5],x[6],x[8],x[9],x[10])),J=(x,P)=>{de={fromPos:H.clone(u.position),toPos:H.clone(x.position),fromQuat:ft.normalize(ze(u.rotation)),toQuat:ft.normalize(ze(x.rotation)),target:x,t:0,duration:Math.max(.01,P)}},_e=document.createElement("span"),we=()=>{if(!C)return;const x=fo(u,C.surfel_data);x!==null&&b.setOrbitDepth(x)},me=(x,P=!0)=>{if(R.length===0)return;se=(x%R.length+R.length)%R.length;const i=R[se];P?J(i,ue):(u.set_preset(i),b.resetToCamera(),we()),_e.textContent=`${se+1} / ${R.length}: ${R[se].img_name??se}`};let O=null;const Z=()=>{if(O||R.length===0)return;I.addSeparator(),O=document.createElement("div"),O.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const x=(P,i)=>{const w=document.createElement("button");return w.className="tp-btnv_b",w.textContent=P,w.style.cssText="flex:0 0 34px;height:24px;padding:0;",w.addEventListener("click",i),w};_e.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",O.appendChild(x("◀",()=>me(se-1))),O.appendChild(_e),O.appendChild(x("▶",()=>me(se+1))),I.element.appendChild(O)};window.addEventListener("keydown",x=>{var P;((P=x.target)==null?void 0:P.tagName)!=="INPUT"&&(x.key==="ArrowLeft"||x.key==="PageUp"?me(se-1):x.key==="ArrowRight"||x.key==="PageDown"?me(se+1):x.key==="t"||x.key==="T"?ee():x.key==="b"||x.key==="B"?Re():x.key>="1"&&x.key<="9"&&me(parseInt(x.key,10)-1))});let te=0;const ye=(x,P)=>{if(!C)return;const i=o.getBoundingClientRect(),w=br((x-i.left)*o.width/i.width,(P-i.top)*o.height/i.height,o,u,C.surfel_data);w&&b.setOrbitPivot(w)};o.addEventListener("dblclick",x=>ye(x.clientX,x.clientY)),o.addEventListener("pointerup",x=>{if(x.pointerType!=="touch")return;const P=performance.now();P-te<300&&ye(x.clientX,x.clientY),te=P});const Ee=v.get("bundle")??v.get("model_url");async function Me(x,P){Vn(`parsing ${P} ...`);try{const i=new TextDecoder().decode(new Uint8Array(x,0,8));let w=x,p=null,h=null;i===ks&&({pcBuffer:w,camerasBuffer:p,atlasBuffer:h}=wr(x)),At("parsing surfels ..."),C=await Ai(new File([w],P));let c=null;if(h&&v.get("notex")!=="1"){c=Fn(h);const E=cr(c)&&B.bc7||ur(c)&&B.astc;let y=v.get("atlas2");if(!E&&!y&&Ee){const D=Ee.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);D&&(y=D[2]?`${D[1]}.bitymi${D[3]??""}`:`${D[1]}_astc.bitymi${D[3]??""}`)}if(!E&&y){At("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:D}=await On(y,(W,q)=>At(`downloading twin atlas ...
${(W/1048576).toFixed(1)}${q?` / ${(q/1048576).toFixed(1)}`:""} MB`));if(D!=null&&D.atlasBuffer){const W=Fn(D.atlasBuffer);(cr(W)&&B.bc7||ur(W)&&B.astc)&&(c=W)}}catch(D){console.warn("[gl] atlas2 failed:",D)}}}At("building GPU resources ..."),V=c,T=new $i(r,C,c),T.bgColor=[F.bg.r,F.bg.g,F.bg.b],T.setGaussianScaling(F.gaussian_scaling),T.setAtlasEnabled(F.atlas_enabled),X.s=T.atlasStatus,gt(`[gl] max tex ${r.getParameter(r.MAX_TEXTURE_SIZE)} · layers ${r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS)} · ${T.atlasStatus}`),gt(`[gl] ${C.num_points} surfels · ${T.atlasStatus}`),R=[];const m=v.get("camera_url");if(p){const E=URL.createObjectURL(new Blob([p],{type:"application/json"}));try{R=await _r(E)}finally{URL.revokeObjectURL(E)}}else if(m)try{R=await _r(m)}catch(E){console.warn("[gl] camera_url failed:",E)}if(b.setBbox(C.bbox.min,C.bbox.max),R.length>0)Z(),me(0,!1);else{const E=C.centroid,y=.5*Math.hypot(C.bbox.max[0]-C.bbox.min[0],C.bbox.max[1]-C.bbox.min[1],C.bbox.max[2]-C.bbox.min[2]),D=H.create(E[0]-y,E[1]-y,E[2]-y),W=mt.lookAt(D,H.create(E[0],E[1],E[2]),H.create(0,1,0));mt.copy(W,u.rotation),u.rotation[12]=0,u.rotation[13]=0,u.rotation[14]=0,H.copy(D,u.position),u.update_buffer(),b.resetToCamera()}}catch(i){throw jt(),i}}const ie=document.getElementById("load-button");if(ie==null||ie.addEventListener("click",()=>{const x=document.createElement("input");x.type="file",x.accept=".ply,.bitymi",x.onchange=async()=>{var i;const P=(i=x.files)==null?void 0:i[0];P&&await Me(await P.arrayBuffer(),P.name)},x.click()}),Ee)try{Vn("downloading ...");const{bundle:x,rawPly:P}=await On(Ee,(i,w,p)=>At(`downloading ...
${(i/2**20).toFixed(1)}${w?` / ${(w/2**20).toFixed(1)}`:""} MB · ${(p/2**20).toFixed(1)} MB/s`));x?await be(x.pcBuffer,x.camerasBuffer,x.atlasBuffer,Ee.split("/").pop()??"bundle"):P&&await Me(P,Ee.split("/").pop()??"scene.ply")}catch(x){jt(),console.error("[gl] bundle load failed:",x),K.stats=`load failed: ${(x==null?void 0:x.message)??x}`;const P=document.createElement("div");P.textContent=`Could not load this bundle in the WebGL2 renderer: ${(x==null?void 0:x.message)??x}`,Object.assign(P.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(P)}else K.stats="no ?bundle= — use 📂 Load";async function be(x,P,i,w){const p=new TextEncoder().encode(ks),h=[x],c=[0];P&&(h.push(P),c.push(2)),i&&(h.push(i),c.push(3));const m=4+h.length*20,E=8+m,y=E+h.reduce((oe,ne)=>oe+ne.byteLength,0),D=new Uint8Array(y),W=new DataView(D.buffer);D.set(p,0),W.setUint32(8,h.length,!0);let q=E;h.forEach((oe,ne)=>{W.setUint32(12+ne*20,c[ne],!0),W.setBigUint64(16+ne*20,BigInt(q),!0),W.setBigUint64(24+ne*20,BigInt(oe.byteLength),!0),D.set(new Uint8Array(oe),q),q+=oe.byteLength}),await Me(D.buffer,w)}let Re=()=>{};const G=v.get("bundle_b");if(G&&T&&C){const x=v.get("label_a")??"A",P=v.get("label_b")??"B",i={a:{pc:C,renderer:T,atlas:V},b:null};let w="a",p=!1,h="";const c=document.createElement("button");Object.assign(c.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const m=(D="")=>{c.textContent=D||`Scene: ${w==="a"?x:P}  ⇄`;try{const W=new URL(window.location.href);w==="b"?W.searchParams.set("side","b"):W.searchParams.delete("side"),history.replaceState(history.state,"",W.toString())}catch{}},E=D=>{const W=document.createElement("div");Object.assign(W.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const q=document.createElement("div");q.textContent=D,W.appendChild(q);const oe=document.createElement("div");oe.style.marginTop="12px";const ne=(ae,Pe)=>{const Ce=document.createElement("button");Ce.textContent=ae,Object.assign(Ce.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),Ce.onclick=Pe,oe.appendChild(Ce)};a.gpuAvailable&&ne("Switch to WebGPU",()=>mr("webgpu")),ne("OK",()=>W.remove()),W.appendChild(oe),document.body.appendChild(W)},y=D=>{const W=D==="a"?i.a:i.b;T=W.renderer,C=W.pc,V=W.atlas,T.bgColor=[F.bg.r,F.bg.g,F.bg.b],T.setGaussianScaling(F.gaussian_scaling),T.setAtlasEnabled(F.atlas_enabled),X.s=T.atlasStatus,w=D,m(),console.log(`[gl A/B] active = ${D}: ${C.num_points} surfels`)};Re=async()=>{if(!p){if(w==="b"){y("a");return}if(i.b){y("b");return}if(h){E(h);return}p=!0,m(`loading ${P} ...`);try{const{bundle:D}=await On(G,(ne,ae)=>m(`loading ${P} ... ${(ne/1048576).toFixed(0)}${ae?`/${(ae/1048576).toFixed(0)}`:""} MB`));if(!D)throw new Error("bundle_b must be a .bitymi bundle");const W=await Ai(new File([D.pcBuffer],"bundle_b.ply"));let q=null;if(D.atlasBuffer&&v.get("notex")!=="1"){const ne=Fn(D.atlasBuffer);(cr(ne)&&B.bc7||ur(ne)&&B.astc)&&(q=ne)}let oe;try{oe=new $i(r,W,q)}catch(ne){throw h=/tex3d/.test(String(ne==null?void 0:ne.message))?`“${P}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${x}”.`:`“${P}” cannot be shown in the WebGL2 renderer: ${(ne==null?void 0:ne.message)??ne}. Still showing “${x}”.`,new Error(h)}i.b={pc:W,renderer:oe,atlas:q},y("b")}catch(D){console.error("[gl A/B] B failed:",D),h||(h=`Could not load “${P}”: ${(D==null?void 0:D.message)??D}`),m(),E(h)}finally{p=!1}}},c.addEventListener("click",()=>Re()),document.body.appendChild(c),m(),v.get("side")==="b"&&Re()}let j=performance.now(),S=0,l=0;const _=()=>{var x;return((x=b.isDragging)==null?void 0:x.call(b))??!1};let f=0;function g(){try{k()}catch(x){f++<5&&console.error("[gl frame] exception (render loop kept alive):",x)}requestAnimationFrame(g)}function k(){const x=performance.now(),P=Math.min((x-j)/1e3,.1);if(j=x,T&&C){if(de){de.t+=P/de.duration;const p=Math.min(1,de.t),h=p*p*(3-2*p);H.lerp(de.fromPos,de.toPos,h,u.position),ft.slerp(de.fromQuat,de.toQuat,h,pe),kt.fromQuat(pe,Ge),mt.fromMat3(Ge,u.rotation),u.update_buffer(),de.t>=1&&(u.set_preset(de.target),de=null,L?Te=he:(b.resetToCamera(),we()))}else L&&R.length>0&&(Te-=P,Te<=0&&(se=(se+1)%R.length,J(R[se],le),_e.textContent=`${se+1} / ${R.length}: ${R[se].img_name??se}`));_()&&de&&(de=null),b.update(P);const i=T.render({rotation:u.rotation,eye:u.position,fovY:u.getFovY(),width:o.width,height:o.height,zfar:u.zfar}),w=1/Math.max(P,.001);S=S===0?w:S*.9+w*.1,K.stats=`${i.toLocaleString()} / ${C.num_points.toLocaleString()} surfels · ${Math.round(S)} fps · cpu ${T.lastStats.cpuMs.toFixed(1)} ms`,l++,l===2&&jt()}}requestAnimationFrame(g),window.__halloumiGL={stats:K,get renderer(){return T},get cameras(){return R},setPreset:me,get atlas(){return V},pick(x,P){return C?br(x,P,o,u,C.surfel_data):null},pickIds(x,P){if(!C)return[];const[i,w,p]=As(x,P,u),h=u.position[0],c=u.position[1],m=u.position[2],E=C.surfel_data,y=new Uint32Array(E.buffer,E.byteOffset,E.length),D=q=>{const oe=q>>10&31,ne=q&1023,ae=q&32768?-1:1;return oe===0?ae*ne*596e-10:ae*(1+ne/1024)*Math.pow(2,oe-15)},W=[];for(let q=0;q<C.num_points;q++){const oe=q*8,ne=E[oe],ae=E[oe+1],Pe=E[oe+2],Ce=D(y[oe+4]&65535),ke=D(y[oe+4]>>>16),Ae=D(y[oe+5]&65535),Ie=D(y[oe+5]>>>16),Fe=D(y[oe+6]&65535),Ze=D(y[oe+6]>>>16),tt=1/Math.hypot(Ae,Ie,Fe,Ze),We=Ae*tt,Ne=Ie*tt,Ke=Fe*tt,Ve=Ze*tt,ot=[1-2*(Ke*Ke+Ve*Ve),2*(Ne*Ke+We*Ve),2*(Ne*Ve-We*Ke)],ct=[2*(Ne*Ke-We*Ve),1-2*(Ne*Ne+Ve*Ve),2*(Ke*Ve+We*Ne)],nt=[2*(Ne*Ve+We*Ke),2*(Ke*Ve-We*Ne),1-2*(Ne*Ne+Ke*Ke)],lt=i*nt[0]+w*nt[1]+p*nt[2];if(Math.abs(lt)<1e-9)continue;const Xe=((ne-h)*nt[0]+(ae-c)*nt[1]+(Pe-m)*nt[2])/lt;if(Xe<=0)continue;const Je=h+Xe*i-ne,je=c+Xe*w-ae,et=m+Xe*p-Pe,_t=(Je*ot[0]+je*ot[1]+et*ot[2])/Ce,at=(Je*ct[0]+je*ct[1]+et*ct[2])/ke,Pt=_t*_t+at*at,ut=u.rotation,dt=u.position,Mt=ut[0]*(ne-dt[0])+ut[4]*(ae-dt[1])+ut[8]*(Pe-dt[2]),Tt=ut[1]*(ne-dt[0])+ut[5]*(ae-dt[1])+ut[9]*(Pe-dt[2]),It=ut[2]*(ne-dt[0])+ut[6]*(ae-dt[1])+ut[10]*(Pe-dt[2]),Gt=o.width,Ht=o.height,Rt=.5*Ht/Math.tan(u.getFovY()*.5),Dt=Rt*Mt/It+(Gt-1)*.5,Ft=Rt*Tt/It+(Ht-1)*.5,it=2*((Dt-x)*(Dt-x)+(Ft-P)*(Ft-P)),pn=D(y[oe+3]&65535),Ot=D(y[oe+3]>>>16),tn=Pt>=9?0:Math.pow(Math.max(0,1-Pt/9),Ot>1e-6?Ot:1),kn=Math.min(.99,pn*Math.max(tn,Math.exp(-.5*it)));if(kn<1/255)continue;const Nt=V?Array.from(V.rects_expanded.subarray(q*5,q*5+5)):null,Tn=T&&T.atlasUpload?Array.from(T.atlasUpload.rects.subarray(q*5,q*5+5)):null;W.push({id:q,t:+Xe.toFixed(3),u:+_t.toFixed(2),v:+at.toFixed(2),rho2d:+it.toFixed(2),alpha:+kn.toFixed(3),opa:+pn.toFixed(2),tex:y[oe+7]>>>16&1,rect:Nt,remap:Tn})}return W.sort((q,oe)=>q.t-oe.t)}}}const Wi="halloumi.gpuLossReload",Eu=6e4;let Ki=!1;function ji(o,r){const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const v=document.createElement("div");if(v.textContent=o,a.appendChild(v),r){const u=document.createElement("button");u.textContent="Reload",Object.assign(u.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),u.onclick=()=>window.location.reload(),a.appendChild(u)}document.body.appendChild(a)}function mo(o,r){if(Ki)return;Ki=!0,console.error(`[gpu-loss] ${o} lost: ${r}`);let a=0;try{a=parseInt(sessionStorage.getItem(Wi)??"0",10)||0}catch{}const v=Date.now();if(v-a>Eu){try{sessionStorage.setItem(Wi,String(v))}catch{}ji("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else ji(`The GPU device was lost again (${o}: ${r}). Reload to try once more.`,!0)}function ku(o){o.lost.then(a=>{a.reason!=="destroyed"&&mo("webgpu",`${a.reason}: ${a.message}`)});let r=0;o.addEventListener("uncapturederror",a=>{var v;r++<5&&console.error("[webgpu] uncaptured error:",((v=a==null?void 0:a.error)==null?void 0:v.message)??a)})}function Hi(o){o.addEventListener("webglcontextlost",r=>{r.preventDefault(),mo("webgl","webglcontextlost")},!1)}(function(){let r="dev";for(const v of Array.from(document.querySelectorAll('script[type="module"]'))){const b=v.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(b){r=b[1];break}}const a=document.createElement("div");a.textContent="v "+r,a.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(a.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(a)})();function Yi(o){const r=document.createElement("div");r.textContent=o,Object.assign(r.style,{position:"fixed",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",color:"#eee",background:"#111",font:"16px system-ui, sans-serif",padding:"24px",textAlign:"center"}),document.body.appendChild(r)}(async()=>{const o=document.querySelector("#webgpu-canvas");_c(o!==null);const{forced:r,stored:a}=_u(),v=r??a??"webgpu";let u=null;if(navigator.gpu!==void 0)try{u=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(C){console.warn("[backend] requestAdapter failed:",C)}if(v==="webgl"||u===null){const C=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!C){Yi(u===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${v==="webgl"?r?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),Hi(o),qi(o,C,{gpuAvailable:u!==null});return}const b=[];u.features.has("timestamp-query")&&b.push("timestamp-query"),u.features.has("texture-compression-bc")&&b.push("texture-compression-bc"),u.features.has("texture-compression-astc")&&b.push("texture-compression-astc"),console.log("[adapter]",u.info??"(unknown)");try{const C=u.info??{};globalThis.__gpuAdapterInfo={vendor:C.vendor??"?",architecture:C.architecture??"?",device:C.device??"?",description:C.description??"?",features:Array.from(u.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(u.features)),console.log("[adapter] BC7:",u.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",u.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:u.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:u.limits.maxComputeWorkgroupStorageSize,maxBufferSize:u.limits.maxBufferSize,maxStorageBufferBindingSize:u.limits.maxStorageBufferBindingSize,maxTextureDimension2D:u.limits.maxTextureDimension2D});let B;try{B=await u.requestDevice({requiredFeatures:b,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:u.limits.maxComputeWorkgroupStorageSize,maxBufferSize:u.limits.maxBufferSize,maxStorageBufferBindingSize:u.limits.maxStorageBufferBindingSize}})}catch(C){console.warn("[backend] requestDevice failed, falling back to WebGL2:",C);const R=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!R){Yi(`WebGPU device creation failed (${C}) and WebGL2 is not available.`);return}Hi(o),qi(o,R,{gpuAvailable:!1});return}ku(B);const T=o.getContext("webgpu");gu(o,T,B,b)})();
