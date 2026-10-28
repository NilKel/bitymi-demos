var dc=Object.defineProperty;var pc=(i,s,a)=>s in i?dc(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a;var D=(i,s,a)=>(pc(i,typeof s!="symbol"?s+"":s,a),a);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))_(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const T of g.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&_(T)}).observe(document,{childList:!0,subtree:!0});function a(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function _(d){if(d.ep)return;d.ep=!0;const g=a(d);fetch(d.href,g)}})();function hc(i,s){return class extends i{constructor(...a){super(...a),s(this)}}}const fc=hc(Array,i=>i.fill(0));let Fe=1e-6;function _c(i){function s(k=0,B=0){const w=new i(2);return k!==void 0&&(w[0]=k,B!==void 0&&(w[1]=B)),w}const a=s;function _(k,B,w){const o=w??new i(2);return o[0]=k,o[1]=B,o}function d(k,B){const w=B??new i(2);return w[0]=Math.ceil(k[0]),w[1]=Math.ceil(k[1]),w}function g(k,B){const w=B??new i(2);return w[0]=Math.floor(k[0]),w[1]=Math.floor(k[1]),w}function T(k,B){const w=B??new i(2);return w[0]=Math.round(k[0]),w[1]=Math.round(k[1]),w}function S(k,B=0,w=1,o){const m=o??new i(2);return m[0]=Math.min(w,Math.max(B,k[0])),m[1]=Math.min(w,Math.max(B,k[1])),m}function C(k,B,w){const o=w??new i(2);return o[0]=k[0]+B[0],o[1]=k[1]+B[1],o}function R(k,B,w,o){const m=o??new i(2);return m[0]=k[0]+B[0]*w,m[1]=k[1]+B[1]*w,m}function G(k,B){const w=k[0],o=k[1],m=B[0],p=B[1],u=Math.sqrt(w*w+o*o),c=Math.sqrt(m*m+p*p),v=u*c,E=v&&de(k,B)/v;return Math.acos(E)}function z(k,B,w){const o=w??new i(2);return o[0]=k[0]-B[0],o[1]=k[1]-B[1],o}const V=z;function q(k,B){return Math.abs(k[0]-B[0])<Fe&&Math.abs(k[1]-B[1])<Fe}function Z(k,B){return k[0]===B[0]&&k[1]===B[1]}function L(k,B,w,o){const m=o??new i(2);return m[0]=k[0]+w*(B[0]-k[0]),m[1]=k[1]+w*(B[1]-k[1]),m}function O(k,B,w,o){const m=o??new i(2);return m[0]=k[0]+w[0]*(B[0]-k[0]),m[1]=k[1]+w[1]*(B[1]-k[1]),m}function Y(k,B,w){const o=w??new i(2);return o[0]=Math.max(k[0],B[0]),o[1]=Math.max(k[1],B[1]),o}function j(k,B,w){const o=w??new i(2);return o[0]=Math.min(k[0],B[0]),o[1]=Math.min(k[1],B[1]),o}function ee(k,B,w){const o=w??new i(2);return o[0]=k[0]*B,o[1]=k[1]*B,o}const $=ee;function ae(k,B,w){const o=w??new i(2);return o[0]=k[0]/B,o[1]=k[1]/B,o}function be(k,B){const w=B??new i(2);return w[0]=1/k[0],w[1]=1/k[1],w}const le=be;function ce(k,B,w){const o=w??new i(3),m=k[0]*B[1]-k[1]*B[0];return o[0]=0,o[1]=0,o[2]=m,o}function de(k,B){return k[0]*B[0]+k[1]*B[1]}function ye(k){const B=k[0],w=k[1];return Math.sqrt(B*B+w*w)}const Re=ye;function Ue(k){const B=k[0],w=k[1];return B*B+w*w}const pe=Ue;function Q(k,B){const w=k[0]-B[0],o=k[1]-B[1];return Math.sqrt(w*w+o*o)}const Te=Q;function xe(k,B){const w=k[0]-B[0],o=k[1]-B[1];return w*w+o*o}const me=xe;function ue(k,B){const w=B??new i(2),o=k[0],m=k[1],p=Math.sqrt(o*o+m*m);return p>1e-5?(w[0]=o/p,w[1]=m/p):(w[0]=0,w[1]=0),w}function ie(k,B){const w=B??new i(2);return w[0]=-k[0],w[1]=-k[1],w}function Ee(k,B){const w=B??new i(2);return w[0]=k[0],w[1]=k[1],w}const ze=Ee;function _e(k,B,w){const o=w??new i(2);return o[0]=k[0]*B[0],o[1]=k[1]*B[1],o}const Me=_e;function Pe(k,B,w){const o=w??new i(2);return o[0]=k[0]/B[0],o[1]=k[1]/B[1],o}const X=Pe;function oe(k=1,B){const w=B??new i(2),o=Math.random()*2*Math.PI;return w[0]=Math.cos(o)*k,w[1]=Math.sin(o)*k,w}function A(k){const B=k??new i(2);return B[0]=0,B[1]=0,B}function W(k,B,w){const o=w??new i(2),m=k[0],p=k[1];return o[0]=m*B[0]+p*B[4]+B[12],o[1]=m*B[1]+p*B[5]+B[13],o}function P(k,B,w){const o=w??new i(2),m=k[0],p=k[1];return o[0]=B[0]*m+B[4]*p+B[8],o[1]=B[1]*m+B[5]*p+B[9],o}function l(k,B,w,o){const m=o??new i(2),p=k[0]-B[0],u=k[1]-B[1],c=Math.sin(w),v=Math.cos(w);return m[0]=p*v-u*c+B[0],m[1]=p*c+u*v+B[1],m}function b(k,B,w){const o=w??new i(2);return ue(k,o),ee(o,B,o)}function f(k,B,w){const o=w??new i(2);return ye(k)>B?b(k,B,o):Ee(k,o)}function x(k,B,w){const o=w??new i(2);return L(k,B,.5,o)}return{create:s,fromValues:a,set:_,ceil:d,floor:g,round:T,clamp:S,add:C,addScaled:R,angle:G,subtract:z,sub:V,equalsApproximately:q,equals:Z,lerp:L,lerpV:O,max:Y,min:j,mulScalar:ee,scale:$,divScalar:ae,inverse:be,invert:le,cross:ce,dot:de,length:ye,len:Re,lengthSq:Ue,lenSq:pe,distance:Q,dist:Te,distanceSq:xe,distSq:me,normalize:ue,negate:ie,copy:Ee,clone:ze,multiply:_e,mul:Me,divide:Pe,div:X,random:oe,zero:A,transformMat4:W,transformMat3:P,rotate:l,setLength:b,truncate:f,midpoint:x}}const zi=new Map;function fo(i){let s=zi.get(i);return s||(s=_c(i),zi.set(i,s)),s}function mc(i){function s(c,v,E){const y=new i(3);return c!==void 0&&(y[0]=c,v!==void 0&&(y[1]=v,E!==void 0&&(y[2]=E))),y}const a=s;function _(c,v,E,y){const I=y??new i(3);return I[0]=c,I[1]=v,I[2]=E,I}function d(c,v){const E=v??new i(3);return E[0]=Math.ceil(c[0]),E[1]=Math.ceil(c[1]),E[2]=Math.ceil(c[2]),E}function g(c,v){const E=v??new i(3);return E[0]=Math.floor(c[0]),E[1]=Math.floor(c[1]),E[2]=Math.floor(c[2]),E}function T(c,v){const E=v??new i(3);return E[0]=Math.round(c[0]),E[1]=Math.round(c[1]),E[2]=Math.round(c[2]),E}function S(c,v=0,E=1,y){const I=y??new i(3);return I[0]=Math.min(E,Math.max(v,c[0])),I[1]=Math.min(E,Math.max(v,c[1])),I[2]=Math.min(E,Math.max(v,c[2])),I}function C(c,v,E){const y=E??new i(3);return y[0]=c[0]+v[0],y[1]=c[1]+v[1],y[2]=c[2]+v[2],y}function R(c,v,E,y){const I=y??new i(3);return I[0]=c[0]+v[0]*E,I[1]=c[1]+v[1]*E,I[2]=c[2]+v[2]*E,I}function G(c,v){const E=c[0],y=c[1],I=c[2],F=v[0],K=v[1],te=v[2],se=Math.sqrt(E*E+y*y+I*I),ne=Math.sqrt(F*F+K*K+te*te),ke=se*ne,Ae=ke&&de(c,v)/ke;return Math.acos(Ae)}function z(c,v,E){const y=E??new i(3);return y[0]=c[0]-v[0],y[1]=c[1]-v[1],y[2]=c[2]-v[2],y}const V=z;function q(c,v){return Math.abs(c[0]-v[0])<Fe&&Math.abs(c[1]-v[1])<Fe&&Math.abs(c[2]-v[2])<Fe}function Z(c,v){return c[0]===v[0]&&c[1]===v[1]&&c[2]===v[2]}function L(c,v,E,y){const I=y??new i(3);return I[0]=c[0]+E*(v[0]-c[0]),I[1]=c[1]+E*(v[1]-c[1]),I[2]=c[2]+E*(v[2]-c[2]),I}function O(c,v,E,y){const I=y??new i(3);return I[0]=c[0]+E[0]*(v[0]-c[0]),I[1]=c[1]+E[1]*(v[1]-c[1]),I[2]=c[2]+E[2]*(v[2]-c[2]),I}function Y(c,v,E){const y=E??new i(3);return y[0]=Math.max(c[0],v[0]),y[1]=Math.max(c[1],v[1]),y[2]=Math.max(c[2],v[2]),y}function j(c,v,E){const y=E??new i(3);return y[0]=Math.min(c[0],v[0]),y[1]=Math.min(c[1],v[1]),y[2]=Math.min(c[2],v[2]),y}function ee(c,v,E){const y=E??new i(3);return y[0]=c[0]*v,y[1]=c[1]*v,y[2]=c[2]*v,y}const $=ee;function ae(c,v,E){const y=E??new i(3);return y[0]=c[0]/v,y[1]=c[1]/v,y[2]=c[2]/v,y}function be(c,v){const E=v??new i(3);return E[0]=1/c[0],E[1]=1/c[1],E[2]=1/c[2],E}const le=be;function ce(c,v,E){const y=E??new i(3),I=c[2]*v[0]-c[0]*v[2],F=c[0]*v[1]-c[1]*v[0];return y[0]=c[1]*v[2]-c[2]*v[1],y[1]=I,y[2]=F,y}function de(c,v){return c[0]*v[0]+c[1]*v[1]+c[2]*v[2]}function ye(c){const v=c[0],E=c[1],y=c[2];return Math.sqrt(v*v+E*E+y*y)}const Re=ye;function Ue(c){const v=c[0],E=c[1],y=c[2];return v*v+E*E+y*y}const pe=Ue;function Q(c,v){const E=c[0]-v[0],y=c[1]-v[1],I=c[2]-v[2];return Math.sqrt(E*E+y*y+I*I)}const Te=Q;function xe(c,v){const E=c[0]-v[0],y=c[1]-v[1],I=c[2]-v[2];return E*E+y*y+I*I}const me=xe;function ue(c,v){const E=v??new i(3),y=c[0],I=c[1],F=c[2],K=Math.sqrt(y*y+I*I+F*F);return K>1e-5?(E[0]=y/K,E[1]=I/K,E[2]=F/K):(E[0]=0,E[1]=0,E[2]=0),E}function ie(c,v){const E=v??new i(3);return E[0]=-c[0],E[1]=-c[1],E[2]=-c[2],E}function Ee(c,v){const E=v??new i(3);return E[0]=c[0],E[1]=c[1],E[2]=c[2],E}const ze=Ee;function _e(c,v,E){const y=E??new i(3);return y[0]=c[0]*v[0],y[1]=c[1]*v[1],y[2]=c[2]*v[2],y}const Me=_e;function Pe(c,v,E){const y=E??new i(3);return y[0]=c[0]/v[0],y[1]=c[1]/v[1],y[2]=c[2]/v[2],y}const X=Pe;function oe(c=1,v){const E=v??new i(3),y=Math.random()*2*Math.PI,I=Math.random()*2-1,F=Math.sqrt(1-I*I)*c;return E[0]=Math.cos(y)*F,E[1]=Math.sin(y)*F,E[2]=I*c,E}function A(c){const v=c??new i(3);return v[0]=0,v[1]=0,v[2]=0,v}function W(c,v,E){const y=E??new i(3),I=c[0],F=c[1],K=c[2],te=v[3]*I+v[7]*F+v[11]*K+v[15]||1;return y[0]=(v[0]*I+v[4]*F+v[8]*K+v[12])/te,y[1]=(v[1]*I+v[5]*F+v[9]*K+v[13])/te,y[2]=(v[2]*I+v[6]*F+v[10]*K+v[14])/te,y}function P(c,v,E){const y=E??new i(3),I=c[0],F=c[1],K=c[2];return y[0]=I*v[0*4+0]+F*v[1*4+0]+K*v[2*4+0],y[1]=I*v[0*4+1]+F*v[1*4+1]+K*v[2*4+1],y[2]=I*v[0*4+2]+F*v[1*4+2]+K*v[2*4+2],y}function l(c,v,E){const y=E??new i(3),I=c[0],F=c[1],K=c[2];return y[0]=I*v[0]+F*v[4]+K*v[8],y[1]=I*v[1]+F*v[5]+K*v[9],y[2]=I*v[2]+F*v[6]+K*v[10],y}function b(c,v,E){const y=E??new i(3),I=v[0],F=v[1],K=v[2],te=v[3]*2,se=c[0],ne=c[1],ke=c[2],Ae=F*ke-K*ne,ge=K*se-I*ke,Be=I*ne-F*se;return y[0]=se+Ae*te+(F*Be-K*ge)*2,y[1]=ne+ge*te+(K*Ae-I*Be)*2,y[2]=ke+Be*te+(I*ge-F*Ae)*2,y}function f(c,v){const E=v??new i(3);return E[0]=c[12],E[1]=c[13],E[2]=c[14],E}function x(c,v,E){const y=E??new i(3),I=v*4;return y[0]=c[I+0],y[1]=c[I+1],y[2]=c[I+2],y}function k(c,v){const E=v??new i(3),y=c[0],I=c[1],F=c[2],K=c[4],te=c[5],se=c[6],ne=c[8],ke=c[9],Ae=c[10];return E[0]=Math.sqrt(y*y+I*I+F*F),E[1]=Math.sqrt(K*K+te*te+se*se),E[2]=Math.sqrt(ne*ne+ke*ke+Ae*Ae),E}function B(c,v,E,y){const I=y??new i(3),F=[],K=[];return F[0]=c[0]-v[0],F[1]=c[1]-v[1],F[2]=c[2]-v[2],K[0]=F[0],K[1]=F[1]*Math.cos(E)-F[2]*Math.sin(E),K[2]=F[1]*Math.sin(E)+F[2]*Math.cos(E),I[0]=K[0]+v[0],I[1]=K[1]+v[1],I[2]=K[2]+v[2],I}function w(c,v,E,y){const I=y??new i(3),F=[],K=[];return F[0]=c[0]-v[0],F[1]=c[1]-v[1],F[2]=c[2]-v[2],K[0]=F[2]*Math.sin(E)+F[0]*Math.cos(E),K[1]=F[1],K[2]=F[2]*Math.cos(E)-F[0]*Math.sin(E),I[0]=K[0]+v[0],I[1]=K[1]+v[1],I[2]=K[2]+v[2],I}function o(c,v,E,y){const I=y??new i(3),F=[],K=[];return F[0]=c[0]-v[0],F[1]=c[1]-v[1],F[2]=c[2]-v[2],K[0]=F[0]*Math.cos(E)-F[1]*Math.sin(E),K[1]=F[0]*Math.sin(E)+F[1]*Math.cos(E),K[2]=F[2],I[0]=K[0]+v[0],I[1]=K[1]+v[1],I[2]=K[2]+v[2],I}function m(c,v,E){const y=E??new i(3);return ue(c,y),ee(y,v,y)}function p(c,v,E){const y=E??new i(3);return ye(c)>v?m(c,v,y):Ee(c,y)}function u(c,v,E){const y=E??new i(3);return L(c,v,.5,y)}return{create:s,fromValues:a,set:_,ceil:d,floor:g,round:T,clamp:S,add:C,addScaled:R,angle:G,subtract:z,sub:V,equalsApproximately:q,equals:Z,lerp:L,lerpV:O,max:Y,min:j,mulScalar:ee,scale:$,divScalar:ae,inverse:be,invert:le,cross:ce,dot:de,length:ye,len:Re,lengthSq:Ue,lenSq:pe,distance:Q,dist:Te,distanceSq:xe,distSq:me,normalize:ue,negate:ie,copy:Ee,clone:ze,multiply:_e,mul:Me,divide:Pe,div:X,random:oe,zero:A,transformMat4:W,transformMat4Upper3x3:P,transformMat3:l,transformQuat:b,getTranslation:f,getAxis:x,getScaling:k,rotateX:B,rotateY:w,rotateZ:o,setLength:m,truncate:p,midpoint:u}}const Ii=new Map;function qs(i){let s=Ii.get(i);return s||(s=mc(i),Ii.set(i,s)),s}function vc(i){const s=fo(i),a=qs(i);function _(l,b,f,x,k,B,w,o,m){const p=new i(12);return p[3]=0,p[7]=0,p[11]=0,l!==void 0&&(p[0]=l,b!==void 0&&(p[1]=b,f!==void 0&&(p[2]=f,x!==void 0&&(p[4]=x,k!==void 0&&(p[5]=k,B!==void 0&&(p[6]=B,w!==void 0&&(p[8]=w,o!==void 0&&(p[9]=o,m!==void 0&&(p[10]=m))))))))),p}function d(l,b,f,x,k,B,w,o,m,p){const u=p??new i(12);return u[0]=l,u[1]=b,u[2]=f,u[3]=0,u[4]=x,u[5]=k,u[6]=B,u[7]=0,u[8]=w,u[9]=o,u[10]=m,u[11]=0,u}function g(l,b){const f=b??new i(12);return f[0]=l[0],f[1]=l[1],f[2]=l[2],f[3]=0,f[4]=l[4],f[5]=l[5],f[6]=l[6],f[7]=0,f[8]=l[8],f[9]=l[9],f[10]=l[10],f[11]=0,f}function T(l,b){const f=b??new i(12),x=l[0],k=l[1],B=l[2],w=l[3],o=x+x,m=k+k,p=B+B,u=x*o,c=k*o,v=k*m,E=B*o,y=B*m,I=B*p,F=w*o,K=w*m,te=w*p;return f[0]=1-v-I,f[1]=c+te,f[2]=E-K,f[3]=0,f[4]=c-te,f[5]=1-u-I,f[6]=y+F,f[7]=0,f[8]=E+K,f[9]=y-F,f[10]=1-u-v,f[11]=0,f}function S(l,b){const f=b??new i(12);return f[0]=-l[0],f[1]=-l[1],f[2]=-l[2],f[4]=-l[4],f[5]=-l[5],f[6]=-l[6],f[8]=-l[8],f[9]=-l[9],f[10]=-l[10],f}function C(l,b,f){const x=f??new i(12);return x[0]=l[0]*b,x[1]=l[1]*b,x[2]=l[2]*b,x[4]=l[4]*b,x[5]=l[5]*b,x[6]=l[6]*b,x[8]=l[8]*b,x[9]=l[9]*b,x[10]=l[10]*b,x}const R=C;function G(l,b,f){const x=f??new i(12);return x[0]=l[0]+b[0],x[1]=l[1]+b[1],x[2]=l[2]+b[2],x[4]=l[4]+b[4],x[5]=l[5]+b[5],x[6]=l[6]+b[6],x[8]=l[8]+b[8],x[9]=l[9]+b[9],x[10]=l[10]+b[10],x}function z(l,b){const f=b??new i(12);return f[0]=l[0],f[1]=l[1],f[2]=l[2],f[4]=l[4],f[5]=l[5],f[6]=l[6],f[8]=l[8],f[9]=l[9],f[10]=l[10],f}const V=z;function q(l,b){return Math.abs(l[0]-b[0])<Fe&&Math.abs(l[1]-b[1])<Fe&&Math.abs(l[2]-b[2])<Fe&&Math.abs(l[4]-b[4])<Fe&&Math.abs(l[5]-b[5])<Fe&&Math.abs(l[6]-b[6])<Fe&&Math.abs(l[8]-b[8])<Fe&&Math.abs(l[9]-b[9])<Fe&&Math.abs(l[10]-b[10])<Fe}function Z(l,b){return l[0]===b[0]&&l[1]===b[1]&&l[2]===b[2]&&l[4]===b[4]&&l[5]===b[5]&&l[6]===b[6]&&l[8]===b[8]&&l[9]===b[9]&&l[10]===b[10]}function L(l){const b=l??new i(12);return b[0]=1,b[1]=0,b[2]=0,b[4]=0,b[5]=1,b[6]=0,b[8]=0,b[9]=0,b[10]=1,b}function O(l,b){const f=b??new i(12);if(f===l){let v;return v=l[1],l[1]=l[4],l[4]=v,v=l[2],l[2]=l[8],l[8]=v,v=l[6],l[6]=l[9],l[9]=v,f}const x=l[0*4+0],k=l[0*4+1],B=l[0*4+2],w=l[1*4+0],o=l[1*4+1],m=l[1*4+2],p=l[2*4+0],u=l[2*4+1],c=l[2*4+2];return f[0]=x,f[1]=w,f[2]=p,f[4]=k,f[5]=o,f[6]=u,f[8]=B,f[9]=m,f[10]=c,f}function Y(l,b){const f=b??new i(12),x=l[0*4+0],k=l[0*4+1],B=l[0*4+2],w=l[1*4+0],o=l[1*4+1],m=l[1*4+2],p=l[2*4+0],u=l[2*4+1],c=l[2*4+2],v=c*o-m*u,E=-c*w+m*p,y=u*w-o*p,I=1/(x*v+k*E+B*y);return f[0]=v*I,f[1]=(-c*k+B*u)*I,f[2]=(m*k-B*o)*I,f[4]=E*I,f[5]=(c*x-B*p)*I,f[6]=(-m*x+B*w)*I,f[8]=y*I,f[9]=(-u*x+k*p)*I,f[10]=(o*x-k*w)*I,f}function j(l){const b=l[0],f=l[0*4+1],x=l[0*4+2],k=l[1*4+0],B=l[1*4+1],w=l[1*4+2],o=l[2*4+0],m=l[2*4+1],p=l[2*4+2];return b*(B*p-m*w)-k*(f*p-m*x)+o*(f*w-B*x)}const ee=Y;function $(l,b,f){const x=f??new i(12),k=l[0],B=l[1],w=l[2],o=l[4+0],m=l[4+1],p=l[4+2],u=l[8+0],c=l[8+1],v=l[8+2],E=b[0],y=b[1],I=b[2],F=b[4+0],K=b[4+1],te=b[4+2],se=b[8+0],ne=b[8+1],ke=b[8+2];return x[0]=k*E+o*y+u*I,x[1]=B*E+m*y+c*I,x[2]=w*E+p*y+v*I,x[4]=k*F+o*K+u*te,x[5]=B*F+m*K+c*te,x[6]=w*F+p*K+v*te,x[8]=k*se+o*ne+u*ke,x[9]=B*se+m*ne+c*ke,x[10]=w*se+p*ne+v*ke,x}const ae=$;function be(l,b,f){const x=f??L();return l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2],x[4]=l[4],x[5]=l[5],x[6]=l[6]),x[8]=b[0],x[9]=b[1],x[10]=1,x}function le(l,b){const f=b??s.create();return f[0]=l[8],f[1]=l[9],f}function ce(l,b,f){const x=f??s.create(),k=b*4;return x[0]=l[k+0],x[1]=l[k+1],x}function de(l,b,f,x){const k=x===l?l:z(l,x),B=f*4;return k[B+0]=b[0],k[B+1]=b[1],k}function ye(l,b){const f=b??s.create(),x=l[0],k=l[1],B=l[4],w=l[5];return f[0]=Math.sqrt(x*x+k*k),f[1]=Math.sqrt(B*B+w*w),f}function Re(l,b){const f=b??a.create(),x=l[0],k=l[1],B=l[2],w=l[4],o=l[5],m=l[6],p=l[8],u=l[9],c=l[10];return f[0]=Math.sqrt(x*x+k*k+B*B),f[1]=Math.sqrt(w*w+o*o+m*m),f[2]=Math.sqrt(p*p+u*u+c*c),f}function Ue(l,b){const f=b??new i(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=l[0],f[9]=l[1],f[10]=1,f}function pe(l,b,f){const x=f??new i(12),k=b[0],B=b[1],w=l[0],o=l[1],m=l[2],p=l[1*4+0],u=l[1*4+1],c=l[1*4+2],v=l[2*4+0],E=l[2*4+1],y=l[2*4+2];return l!==x&&(x[0]=w,x[1]=o,x[2]=m,x[4]=p,x[5]=u,x[6]=c),x[8]=w*k+p*B+v,x[9]=o*k+u*B+E,x[10]=m*k+c*B+y,x}function Q(l,b){const f=b??new i(12),x=Math.cos(l),k=Math.sin(l);return f[0]=x,f[1]=k,f[2]=0,f[4]=-k,f[5]=x,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function Te(l,b,f){const x=f??new i(12),k=l[0*4+0],B=l[0*4+1],w=l[0*4+2],o=l[1*4+0],m=l[1*4+1],p=l[1*4+2],u=Math.cos(b),c=Math.sin(b);return x[0]=u*k+c*o,x[1]=u*B+c*m,x[2]=u*w+c*p,x[4]=u*o-c*k,x[5]=u*m-c*B,x[6]=u*p-c*w,l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function xe(l,b){const f=b??new i(12),x=Math.cos(l),k=Math.sin(l);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=x,f[6]=k,f[8]=0,f[9]=-k,f[10]=x,f}function me(l,b,f){const x=f??new i(12),k=l[4],B=l[5],w=l[6],o=l[8],m=l[9],p=l[10],u=Math.cos(b),c=Math.sin(b);return x[4]=u*k+c*o,x[5]=u*B+c*m,x[6]=u*w+c*p,x[8]=u*o-c*k,x[9]=u*m-c*B,x[10]=u*p-c*w,l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2]),x}function ue(l,b){const f=b??new i(12),x=Math.cos(l),k=Math.sin(l);return f[0]=x,f[1]=0,f[2]=-k,f[4]=0,f[5]=1,f[6]=0,f[8]=k,f[9]=0,f[10]=x,f}function ie(l,b,f){const x=f??new i(12),k=l[0*4+0],B=l[0*4+1],w=l[0*4+2],o=l[2*4+0],m=l[2*4+1],p=l[2*4+2],u=Math.cos(b),c=Math.sin(b);return x[0]=u*k-c*o,x[1]=u*B-c*m,x[2]=u*w-c*p,x[8]=u*o+c*k,x[9]=u*m+c*B,x[10]=u*p+c*w,l!==x&&(x[4]=l[4],x[5]=l[5],x[6]=l[6]),x}const Ee=Q,ze=Te;function _e(l,b){const f=b??new i(12);return f[0]=l[0],f[1]=0,f[2]=0,f[4]=0,f[5]=l[1],f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function Me(l,b,f){const x=f??new i(12),k=b[0],B=b[1];return x[0]=k*l[0*4+0],x[1]=k*l[0*4+1],x[2]=k*l[0*4+2],x[4]=B*l[1*4+0],x[5]=B*l[1*4+1],x[6]=B*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function Pe(l,b){const f=b??new i(12);return f[0]=l[0],f[1]=0,f[2]=0,f[4]=0,f[5]=l[1],f[6]=0,f[8]=0,f[9]=0,f[10]=l[2],f}function X(l,b,f){const x=f??new i(12),k=b[0],B=b[1],w=b[2];return x[0]=k*l[0*4+0],x[1]=k*l[0*4+1],x[2]=k*l[0*4+2],x[4]=B*l[1*4+0],x[5]=B*l[1*4+1],x[6]=B*l[1*4+2],x[8]=w*l[2*4+0],x[9]=w*l[2*4+1],x[10]=w*l[2*4+2],x}function oe(l,b){const f=b??new i(12);return f[0]=l,f[1]=0,f[2]=0,f[4]=0,f[5]=l,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function A(l,b,f){const x=f??new i(12);return x[0]=b*l[0*4+0],x[1]=b*l[0*4+1],x[2]=b*l[0*4+2],x[4]=b*l[1*4+0],x[5]=b*l[1*4+1],x[6]=b*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function W(l,b){const f=b??new i(12);return f[0]=l,f[1]=0,f[2]=0,f[4]=0,f[5]=l,f[6]=0,f[8]=0,f[9]=0,f[10]=l,f}function P(l,b,f){const x=f??new i(12);return x[0]=b*l[0*4+0],x[1]=b*l[0*4+1],x[2]=b*l[0*4+2],x[4]=b*l[1*4+0],x[5]=b*l[1*4+1],x[6]=b*l[1*4+2],x[8]=b*l[2*4+0],x[9]=b*l[2*4+1],x[10]=b*l[2*4+2],x}return{add:G,clone:V,copy:z,create:_,determinant:j,equals:Z,equalsApproximately:q,fromMat4:g,fromQuat:T,get3DScaling:Re,getAxis:ce,getScaling:ye,getTranslation:le,identity:L,inverse:Y,invert:ee,mul:ae,mulScalar:R,multiply:$,multiplyScalar:C,negate:S,rotate:Te,rotateX:me,rotateY:ie,rotateZ:ze,rotation:Q,rotationX:xe,rotationY:ue,rotationZ:Ee,scale:Me,scale3D:X,scaling:_e,scaling3D:Pe,set:d,setAxis:de,setTranslation:be,translate:pe,translation:Ue,transpose:O,uniformScale:A,uniformScale3D:P,uniformScaling:oe,uniformScaling3D:W}}const Gi=new Map;function bc(i){let s=Gi.get(i);return s||(s=vc(i),Gi.set(i,s)),s}function gc(i){const s=qs(i);function a(o,m,p,u,c,v,E,y,I,F,K,te,se,ne,ke,Ae){const ge=new i(16);return o!==void 0&&(ge[0]=o,m!==void 0&&(ge[1]=m,p!==void 0&&(ge[2]=p,u!==void 0&&(ge[3]=u,c!==void 0&&(ge[4]=c,v!==void 0&&(ge[5]=v,E!==void 0&&(ge[6]=E,y!==void 0&&(ge[7]=y,I!==void 0&&(ge[8]=I,F!==void 0&&(ge[9]=F,K!==void 0&&(ge[10]=K,te!==void 0&&(ge[11]=te,se!==void 0&&(ge[12]=se,ne!==void 0&&(ge[13]=ne,ke!==void 0&&(ge[14]=ke,Ae!==void 0&&(ge[15]=Ae)))))))))))))))),ge}function _(o,m,p,u,c,v,E,y,I,F,K,te,se,ne,ke,Ae,ge){const Be=ge??new i(16);return Be[0]=o,Be[1]=m,Be[2]=p,Be[3]=u,Be[4]=c,Be[5]=v,Be[6]=E,Be[7]=y,Be[8]=I,Be[9]=F,Be[10]=K,Be[11]=te,Be[12]=se,Be[13]=ne,Be[14]=ke,Be[15]=Ae,Be}function d(o,m){const p=m??new i(16);return p[0]=o[0],p[1]=o[1],p[2]=o[2],p[3]=0,p[4]=o[4],p[5]=o[5],p[6]=o[6],p[7]=0,p[8]=o[8],p[9]=o[9],p[10]=o[10],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function g(o,m){const p=m??new i(16),u=o[0],c=o[1],v=o[2],E=o[3],y=u+u,I=c+c,F=v+v,K=u*y,te=c*y,se=c*I,ne=v*y,ke=v*I,Ae=v*F,ge=E*y,Be=E*I,Ie=E*F;return p[0]=1-se-Ae,p[1]=te+Ie,p[2]=ne-Be,p[3]=0,p[4]=te-Ie,p[5]=1-K-Ae,p[6]=ke+ge,p[7]=0,p[8]=ne+Be,p[9]=ke-ge,p[10]=1-K-se,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function T(o,m){const p=m??new i(16);return p[0]=-o[0],p[1]=-o[1],p[2]=-o[2],p[3]=-o[3],p[4]=-o[4],p[5]=-o[5],p[6]=-o[6],p[7]=-o[7],p[8]=-o[8],p[9]=-o[9],p[10]=-o[10],p[11]=-o[11],p[12]=-o[12],p[13]=-o[13],p[14]=-o[14],p[15]=-o[15],p}function S(o,m,p){const u=p??new i(16);return u[0]=o[0]+m[0],u[1]=o[1]+m[1],u[2]=o[2]+m[2],u[3]=o[3]+m[3],u[4]=o[4]+m[4],u[5]=o[5]+m[5],u[6]=o[6]+m[6],u[7]=o[7]+m[7],u[8]=o[8]+m[8],u[9]=o[9]+m[9],u[10]=o[10]+m[10],u[11]=o[11]+m[11],u[12]=o[12]+m[12],u[13]=o[13]+m[13],u[14]=o[14]+m[14],u[15]=o[15]+m[15],u}function C(o,m,p){const u=p??new i(16);return u[0]=o[0]*m,u[1]=o[1]*m,u[2]=o[2]*m,u[3]=o[3]*m,u[4]=o[4]*m,u[5]=o[5]*m,u[6]=o[6]*m,u[7]=o[7]*m,u[8]=o[8]*m,u[9]=o[9]*m,u[10]=o[10]*m,u[11]=o[11]*m,u[12]=o[12]*m,u[13]=o[13]*m,u[14]=o[14]*m,u[15]=o[15]*m,u}const R=C;function G(o,m){const p=m??new i(16);return p[0]=o[0],p[1]=o[1],p[2]=o[2],p[3]=o[3],p[4]=o[4],p[5]=o[5],p[6]=o[6],p[7]=o[7],p[8]=o[8],p[9]=o[9],p[10]=o[10],p[11]=o[11],p[12]=o[12],p[13]=o[13],p[14]=o[14],p[15]=o[15],p}const z=G;function V(o,m){return Math.abs(o[0]-m[0])<Fe&&Math.abs(o[1]-m[1])<Fe&&Math.abs(o[2]-m[2])<Fe&&Math.abs(o[3]-m[3])<Fe&&Math.abs(o[4]-m[4])<Fe&&Math.abs(o[5]-m[5])<Fe&&Math.abs(o[6]-m[6])<Fe&&Math.abs(o[7]-m[7])<Fe&&Math.abs(o[8]-m[8])<Fe&&Math.abs(o[9]-m[9])<Fe&&Math.abs(o[10]-m[10])<Fe&&Math.abs(o[11]-m[11])<Fe&&Math.abs(o[12]-m[12])<Fe&&Math.abs(o[13]-m[13])<Fe&&Math.abs(o[14]-m[14])<Fe&&Math.abs(o[15]-m[15])<Fe}function q(o,m){return o[0]===m[0]&&o[1]===m[1]&&o[2]===m[2]&&o[3]===m[3]&&o[4]===m[4]&&o[5]===m[5]&&o[6]===m[6]&&o[7]===m[7]&&o[8]===m[8]&&o[9]===m[9]&&o[10]===m[10]&&o[11]===m[11]&&o[12]===m[12]&&o[13]===m[13]&&o[14]===m[14]&&o[15]===m[15]}function Z(o){const m=o??new i(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function L(o,m){const p=m??new i(16);if(p===o){let Ge;return Ge=o[1],o[1]=o[4],o[4]=Ge,Ge=o[2],o[2]=o[8],o[8]=Ge,Ge=o[3],o[3]=o[12],o[12]=Ge,Ge=o[6],o[6]=o[9],o[9]=Ge,Ge=o[7],o[7]=o[13],o[13]=Ge,Ge=o[11],o[11]=o[14],o[14]=Ge,p}const u=o[0*4+0],c=o[0*4+1],v=o[0*4+2],E=o[0*4+3],y=o[1*4+0],I=o[1*4+1],F=o[1*4+2],K=o[1*4+3],te=o[2*4+0],se=o[2*4+1],ne=o[2*4+2],ke=o[2*4+3],Ae=o[3*4+0],ge=o[3*4+1],Be=o[3*4+2],Ie=o[3*4+3];return p[0]=u,p[1]=y,p[2]=te,p[3]=Ae,p[4]=c,p[5]=I,p[6]=se,p[7]=ge,p[8]=v,p[9]=F,p[10]=ne,p[11]=Be,p[12]=E,p[13]=K,p[14]=ke,p[15]=Ie,p}function O(o,m){const p=m??new i(16),u=o[0*4+0],c=o[0*4+1],v=o[0*4+2],E=o[0*4+3],y=o[1*4+0],I=o[1*4+1],F=o[1*4+2],K=o[1*4+3],te=o[2*4+0],se=o[2*4+1],ne=o[2*4+2],ke=o[2*4+3],Ae=o[3*4+0],ge=o[3*4+1],Be=o[3*4+2],Ie=o[3*4+3],Ge=ne*Ie,Ze=Be*ke,tt=F*Ie,Xe=Be*K,Je=F*ke,Ne=ne*K,Qe=v*Ie,je=Be*E,ut=v*ke,ot=ne*E,Ve=v*K,rt=F*E,$e=te*ge,at=Ae*se,nt=y*ge,_t=Ae*I,lt=y*se,Bt=te*I,kt=u*ge,mt=Ae*c,ht=u*se,At=te*c,wt=u*I,Mt=y*c,Zt=Ge*I+Xe*se+Je*ge-(Ze*I+tt*se+Ne*ge),It=Ze*c+Qe*se+ot*ge-(Ge*c+je*se+ut*ge),qt=tt*c+je*I+Ve*ge-(Xe*c+Qe*I+rt*ge),Gt=Ne*c+ut*I+rt*se-(Je*c+ot*I+Ve*se),it=1/(u*Zt+y*It+te*qt+Ae*Gt);return p[0]=it*Zt,p[1]=it*It,p[2]=it*qt,p[3]=it*Gt,p[4]=it*(Ze*y+tt*te+Ne*Ae-(Ge*y+Xe*te+Je*Ae)),p[5]=it*(Ge*u+je*te+ut*Ae-(Ze*u+Qe*te+ot*Ae)),p[6]=it*(Xe*u+Qe*y+rt*Ae-(tt*u+je*y+Ve*Ae)),p[7]=it*(Je*u+ot*y+Ve*te-(Ne*u+ut*y+rt*te)),p[8]=it*($e*K+_t*ke+lt*Ie-(at*K+nt*ke+Bt*Ie)),p[9]=it*(at*E+kt*ke+At*Ie-($e*E+mt*ke+ht*Ie)),p[10]=it*(nt*E+mt*K+wt*Ie-(_t*E+kt*K+Mt*Ie)),p[11]=it*(Bt*E+ht*K+Mt*ke-(lt*E+At*K+wt*ke)),p[12]=it*(nt*ne+Bt*Be+at*F-(lt*Be+$e*F+_t*ne)),p[13]=it*(ht*Be+$e*v+mt*ne-(kt*ne+At*Be+at*v)),p[14]=it*(kt*F+Mt*Be+_t*v-(wt*Be+nt*v+mt*F)),p[15]=it*(wt*ne+lt*v+At*F-(ht*F+Mt*ne+Bt*v)),p}function Y(o){const m=o[0],p=o[0*4+1],u=o[0*4+2],c=o[0*4+3],v=o[1*4+0],E=o[1*4+1],y=o[1*4+2],I=o[1*4+3],F=o[2*4+0],K=o[2*4+1],te=o[2*4+2],se=o[2*4+3],ne=o[3*4+0],ke=o[3*4+1],Ae=o[3*4+2],ge=o[3*4+3],Be=te*ge,Ie=Ae*se,Ge=y*ge,Ze=Ae*I,tt=y*se,Xe=te*I,Je=u*ge,Ne=Ae*c,Qe=u*se,je=te*c,ut=u*I,ot=y*c,Ve=Be*E+Ze*K+tt*ke-(Ie*E+Ge*K+Xe*ke),rt=Ie*p+Je*K+je*ke-(Be*p+Ne*K+Qe*ke),$e=Ge*p+Ne*E+ut*ke-(Ze*p+Je*E+ot*ke),at=Xe*p+Qe*E+ot*K-(tt*p+je*E+ut*K);return m*Ve+v*rt+F*$e+ne*at}const j=O;function ee(o,m,p){const u=p??new i(16),c=o[0],v=o[1],E=o[2],y=o[3],I=o[4+0],F=o[4+1],K=o[4+2],te=o[4+3],se=o[8+0],ne=o[8+1],ke=o[8+2],Ae=o[8+3],ge=o[12+0],Be=o[12+1],Ie=o[12+2],Ge=o[12+3],Ze=m[0],tt=m[1],Xe=m[2],Je=m[3],Ne=m[4+0],Qe=m[4+1],je=m[4+2],ut=m[4+3],ot=m[8+0],Ve=m[8+1],rt=m[8+2],$e=m[8+3],at=m[12+0],nt=m[12+1],_t=m[12+2],lt=m[12+3];return u[0]=c*Ze+I*tt+se*Xe+ge*Je,u[1]=v*Ze+F*tt+ne*Xe+Be*Je,u[2]=E*Ze+K*tt+ke*Xe+Ie*Je,u[3]=y*Ze+te*tt+Ae*Xe+Ge*Je,u[4]=c*Ne+I*Qe+se*je+ge*ut,u[5]=v*Ne+F*Qe+ne*je+Be*ut,u[6]=E*Ne+K*Qe+ke*je+Ie*ut,u[7]=y*Ne+te*Qe+Ae*je+Ge*ut,u[8]=c*ot+I*Ve+se*rt+ge*$e,u[9]=v*ot+F*Ve+ne*rt+Be*$e,u[10]=E*ot+K*Ve+ke*rt+Ie*$e,u[11]=y*ot+te*Ve+Ae*rt+Ge*$e,u[12]=c*at+I*nt+se*_t+ge*lt,u[13]=v*at+F*nt+ne*_t+Be*lt,u[14]=E*at+K*nt+ke*_t+Ie*lt,u[15]=y*at+te*nt+Ae*_t+Ge*lt,u}const $=ee;function ae(o,m,p){const u=p??Z();return o!==u&&(u[0]=o[0],u[1]=o[1],u[2]=o[2],u[3]=o[3],u[4]=o[4],u[5]=o[5],u[6]=o[6],u[7]=o[7],u[8]=o[8],u[9]=o[9],u[10]=o[10],u[11]=o[11]),u[12]=m[0],u[13]=m[1],u[14]=m[2],u[15]=1,u}function be(o,m){const p=m??s.create();return p[0]=o[12],p[1]=o[13],p[2]=o[14],p}function le(o,m,p){const u=p??s.create(),c=m*4;return u[0]=o[c+0],u[1]=o[c+1],u[2]=o[c+2],u}function ce(o,m,p,u){const c=u===o?u:G(o,u),v=p*4;return c[v+0]=m[0],c[v+1]=m[1],c[v+2]=m[2],c}function de(o,m){const p=m??s.create(),u=o[0],c=o[1],v=o[2],E=o[4],y=o[5],I=o[6],F=o[8],K=o[9],te=o[10];return p[0]=Math.sqrt(u*u+c*c+v*v),p[1]=Math.sqrt(E*E+y*y+I*I),p[2]=Math.sqrt(F*F+K*K+te*te),p}function ye(o,m,p,u,c){const v=c??new i(16),E=Math.tan(Math.PI*.5-.5*o);if(v[0]=E/m,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=E,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,Number.isFinite(u)){const y=1/(p-u);v[10]=u*y,v[14]=u*p*y}else v[10]=-1,v[14]=-p;return v}function Re(o,m,p,u=1/0,c){const v=c??new i(16),E=1/Math.tan(o*.5);if(v[0]=E/m,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=E,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,u===1/0)v[10]=0,v[14]=p;else{const y=1/(u-p);v[10]=p*y,v[14]=u*p*y}return v}function Ue(o,m,p,u,c,v,E){const y=E??new i(16);return y[0]=2/(m-o),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(u-p),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(c-v),y[11]=0,y[12]=(m+o)/(o-m),y[13]=(u+p)/(p-u),y[14]=c/(c-v),y[15]=1,y}function pe(o,m,p,u,c,v,E){const y=E??new i(16),I=m-o,F=u-p,K=c-v;return y[0]=2*c/I,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*c/F,y[6]=0,y[7]=0,y[8]=(o+m)/I,y[9]=(u+p)/F,y[10]=v/K,y[11]=-1,y[12]=0,y[13]=0,y[14]=c*v/K,y[15]=0,y}function Q(o,m,p,u,c,v=1/0,E){const y=E??new i(16),I=m-o,F=u-p;if(y[0]=2*c/I,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*c/F,y[6]=0,y[7]=0,y[8]=(o+m)/I,y[9]=(u+p)/F,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,v===1/0)y[10]=0,y[14]=c;else{const K=1/(v-c);y[10]=c*K,y[14]=v*c*K}return y}const Te=s.create(),xe=s.create(),me=s.create();function ue(o,m,p,u){const c=u??new i(16);return s.normalize(s.subtract(m,o,me),me),s.normalize(s.cross(p,me,Te),Te),s.normalize(s.cross(me,Te,xe),xe),c[0]=Te[0],c[1]=Te[1],c[2]=Te[2],c[3]=0,c[4]=xe[0],c[5]=xe[1],c[6]=xe[2],c[7]=0,c[8]=me[0],c[9]=me[1],c[10]=me[2],c[11]=0,c[12]=o[0],c[13]=o[1],c[14]=o[2],c[15]=1,c}function ie(o,m,p,u){const c=u??new i(16);return s.normalize(s.subtract(o,m,me),me),s.normalize(s.cross(p,me,Te),Te),s.normalize(s.cross(me,Te,xe),xe),c[0]=Te[0],c[1]=Te[1],c[2]=Te[2],c[3]=0,c[4]=xe[0],c[5]=xe[1],c[6]=xe[2],c[7]=0,c[8]=me[0],c[9]=me[1],c[10]=me[2],c[11]=0,c[12]=o[0],c[13]=o[1],c[14]=o[2],c[15]=1,c}function Ee(o,m,p,u){const c=u??new i(16);return s.normalize(s.subtract(o,m,me),me),s.normalize(s.cross(p,me,Te),Te),s.normalize(s.cross(me,Te,xe),xe),c[0]=Te[0],c[1]=xe[0],c[2]=me[0],c[3]=0,c[4]=Te[1],c[5]=xe[1],c[6]=me[1],c[7]=0,c[8]=Te[2],c[9]=xe[2],c[10]=me[2],c[11]=0,c[12]=-(Te[0]*o[0]+Te[1]*o[1]+Te[2]*o[2]),c[13]=-(xe[0]*o[0]+xe[1]*o[1]+xe[2]*o[2]),c[14]=-(me[0]*o[0]+me[1]*o[1]+me[2]*o[2]),c[15]=1,c}function ze(o,m){const p=m??new i(16);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=o[0],p[13]=o[1],p[14]=o[2],p[15]=1,p}function _e(o,m,p){const u=p??new i(16),c=m[0],v=m[1],E=m[2],y=o[0],I=o[1],F=o[2],K=o[3],te=o[1*4+0],se=o[1*4+1],ne=o[1*4+2],ke=o[1*4+3],Ae=o[2*4+0],ge=o[2*4+1],Be=o[2*4+2],Ie=o[2*4+3],Ge=o[3*4+0],Ze=o[3*4+1],tt=o[3*4+2],Xe=o[3*4+3];return o!==u&&(u[0]=y,u[1]=I,u[2]=F,u[3]=K,u[4]=te,u[5]=se,u[6]=ne,u[7]=ke,u[8]=Ae,u[9]=ge,u[10]=Be,u[11]=Ie),u[12]=y*c+te*v+Ae*E+Ge,u[13]=I*c+se*v+ge*E+Ze,u[14]=F*c+ne*v+Be*E+tt,u[15]=K*c+ke*v+Ie*E+Xe,u}function Me(o,m){const p=m??new i(16),u=Math.cos(o),c=Math.sin(o);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=u,p[6]=c,p[7]=0,p[8]=0,p[9]=-c,p[10]=u,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function Pe(o,m,p){const u=p??new i(16),c=o[4],v=o[5],E=o[6],y=o[7],I=o[8],F=o[9],K=o[10],te=o[11],se=Math.cos(m),ne=Math.sin(m);return u[4]=se*c+ne*I,u[5]=se*v+ne*F,u[6]=se*E+ne*K,u[7]=se*y+ne*te,u[8]=se*I-ne*c,u[9]=se*F-ne*v,u[10]=se*K-ne*E,u[11]=se*te-ne*y,o!==u&&(u[0]=o[0],u[1]=o[1],u[2]=o[2],u[3]=o[3],u[12]=o[12],u[13]=o[13],u[14]=o[14],u[15]=o[15]),u}function X(o,m){const p=m??new i(16),u=Math.cos(o),c=Math.sin(o);return p[0]=u,p[1]=0,p[2]=-c,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=c,p[9]=0,p[10]=u,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function oe(o,m,p){const u=p??new i(16),c=o[0*4+0],v=o[0*4+1],E=o[0*4+2],y=o[0*4+3],I=o[2*4+0],F=o[2*4+1],K=o[2*4+2],te=o[2*4+3],se=Math.cos(m),ne=Math.sin(m);return u[0]=se*c-ne*I,u[1]=se*v-ne*F,u[2]=se*E-ne*K,u[3]=se*y-ne*te,u[8]=se*I+ne*c,u[9]=se*F+ne*v,u[10]=se*K+ne*E,u[11]=se*te+ne*y,o!==u&&(u[4]=o[4],u[5]=o[5],u[6]=o[6],u[7]=o[7],u[12]=o[12],u[13]=o[13],u[14]=o[14],u[15]=o[15]),u}function A(o,m){const p=m??new i(16),u=Math.cos(o),c=Math.sin(o);return p[0]=u,p[1]=c,p[2]=0,p[3]=0,p[4]=-c,p[5]=u,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function W(o,m,p){const u=p??new i(16),c=o[0*4+0],v=o[0*4+1],E=o[0*4+2],y=o[0*4+3],I=o[1*4+0],F=o[1*4+1],K=o[1*4+2],te=o[1*4+3],se=Math.cos(m),ne=Math.sin(m);return u[0]=se*c+ne*I,u[1]=se*v+ne*F,u[2]=se*E+ne*K,u[3]=se*y+ne*te,u[4]=se*I-ne*c,u[5]=se*F-ne*v,u[6]=se*K-ne*E,u[7]=se*te-ne*y,o!==u&&(u[8]=o[8],u[9]=o[9],u[10]=o[10],u[11]=o[11],u[12]=o[12],u[13]=o[13],u[14]=o[14],u[15]=o[15]),u}function P(o,m,p){const u=p??new i(16);let c=o[0],v=o[1],E=o[2];const y=Math.sqrt(c*c+v*v+E*E);c/=y,v/=y,E/=y;const I=c*c,F=v*v,K=E*E,te=Math.cos(m),se=Math.sin(m),ne=1-te;return u[0]=I+(1-I)*te,u[1]=c*v*ne+E*se,u[2]=c*E*ne-v*se,u[3]=0,u[4]=c*v*ne-E*se,u[5]=F+(1-F)*te,u[6]=v*E*ne+c*se,u[7]=0,u[8]=c*E*ne+v*se,u[9]=v*E*ne-c*se,u[10]=K+(1-K)*te,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}const l=P;function b(o,m,p,u){const c=u??new i(16);let v=m[0],E=m[1],y=m[2];const I=Math.sqrt(v*v+E*E+y*y);v/=I,E/=I,y/=I;const F=v*v,K=E*E,te=y*y,se=Math.cos(p),ne=Math.sin(p),ke=1-se,Ae=F+(1-F)*se,ge=v*E*ke+y*ne,Be=v*y*ke-E*ne,Ie=v*E*ke-y*ne,Ge=K+(1-K)*se,Ze=E*y*ke+v*ne,tt=v*y*ke+E*ne,Xe=E*y*ke-v*ne,Je=te+(1-te)*se,Ne=o[0],Qe=o[1],je=o[2],ut=o[3],ot=o[4],Ve=o[5],rt=o[6],$e=o[7],at=o[8],nt=o[9],_t=o[10],lt=o[11];return c[0]=Ae*Ne+ge*ot+Be*at,c[1]=Ae*Qe+ge*Ve+Be*nt,c[2]=Ae*je+ge*rt+Be*_t,c[3]=Ae*ut+ge*$e+Be*lt,c[4]=Ie*Ne+Ge*ot+Ze*at,c[5]=Ie*Qe+Ge*Ve+Ze*nt,c[6]=Ie*je+Ge*rt+Ze*_t,c[7]=Ie*ut+Ge*$e+Ze*lt,c[8]=tt*Ne+Xe*ot+Je*at,c[9]=tt*Qe+Xe*Ve+Je*nt,c[10]=tt*je+Xe*rt+Je*_t,c[11]=tt*ut+Xe*$e+Je*lt,o!==c&&(c[12]=o[12],c[13]=o[13],c[14]=o[14],c[15]=o[15]),c}const f=b;function x(o,m){const p=m??new i(16);return p[0]=o[0],p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=o[1],p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=o[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function k(o,m,p){const u=p??new i(16),c=m[0],v=m[1],E=m[2];return u[0]=c*o[0*4+0],u[1]=c*o[0*4+1],u[2]=c*o[0*4+2],u[3]=c*o[0*4+3],u[4]=v*o[1*4+0],u[5]=v*o[1*4+1],u[6]=v*o[1*4+2],u[7]=v*o[1*4+3],u[8]=E*o[2*4+0],u[9]=E*o[2*4+1],u[10]=E*o[2*4+2],u[11]=E*o[2*4+3],o!==u&&(u[12]=o[12],u[13]=o[13],u[14]=o[14],u[15]=o[15]),u}function B(o,m){const p=m??new i(16);return p[0]=o,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=o,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=o,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function w(o,m,p){const u=p??new i(16);return u[0]=m*o[0*4+0],u[1]=m*o[0*4+1],u[2]=m*o[0*4+2],u[3]=m*o[0*4+3],u[4]=m*o[1*4+0],u[5]=m*o[1*4+1],u[6]=m*o[1*4+2],u[7]=m*o[1*4+3],u[8]=m*o[2*4+0],u[9]=m*o[2*4+1],u[10]=m*o[2*4+2],u[11]=m*o[2*4+3],o!==u&&(u[12]=o[12],u[13]=o[13],u[14]=o[14],u[15]=o[15]),u}return{add:S,aim:ue,axisRotate:b,axisRotation:P,cameraAim:ie,clone:z,copy:G,create:a,determinant:Y,equals:q,equalsApproximately:V,fromMat3:d,fromQuat:g,frustum:pe,frustumReverseZ:Q,getAxis:le,getScaling:de,getTranslation:be,identity:Z,inverse:O,invert:j,lookAt:Ee,mul:$,mulScalar:R,multiply:ee,multiplyScalar:C,negate:T,ortho:Ue,perspective:ye,perspectiveReverseZ:Re,rotate:f,rotateX:Pe,rotateY:oe,rotateZ:W,rotation:l,rotationX:Me,rotationY:X,rotationZ:A,scale:k,scaling:x,set:_,setAxis:ce,setTranslation:ae,translate:_e,translation:ze,transpose:L,uniformScale:w,uniformScaling:B}}const Oi=new Map;function wc(i){let s=Oi.get(i);return s||(s=gc(i),Oi.set(i,s)),s}function xc(i){const s=qs(i);function a(A,W,P,l){const b=new i(4);return A!==void 0&&(b[0]=A,W!==void 0&&(b[1]=W,P!==void 0&&(b[2]=P,l!==void 0&&(b[3]=l)))),b}const _=a;function d(A,W,P,l,b){const f=b??new i(4);return f[0]=A,f[1]=W,f[2]=P,f[3]=l,f}function g(A,W,P){const l=P??new i(4),b=W*.5,f=Math.sin(b);return l[0]=f*A[0],l[1]=f*A[1],l[2]=f*A[2],l[3]=Math.cos(b),l}function T(A,W){const P=W??s.create(3),l=Math.acos(A[3])*2,b=Math.sin(l*.5);return b>Fe?(P[0]=A[0]/b,P[1]=A[1]/b,P[2]=A[2]/b):(P[0]=1,P[1]=0,P[2]=0),{angle:l,axis:P}}function S(A,W){const P=ye(A,W);return Math.acos(2*P*P-1)}function C(A,W,P){const l=P??new i(4),b=A[0],f=A[1],x=A[2],k=A[3],B=W[0],w=W[1],o=W[2],m=W[3];return l[0]=b*m+k*B+f*o-x*w,l[1]=f*m+k*w+x*B-b*o,l[2]=x*m+k*o+b*w-f*B,l[3]=k*m-b*B-f*w-x*o,l}const R=C;function G(A,W,P){const l=P??new i(4),b=W*.5,f=A[0],x=A[1],k=A[2],B=A[3],w=Math.sin(b),o=Math.cos(b);return l[0]=f*o+B*w,l[1]=x*o+k*w,l[2]=k*o-x*w,l[3]=B*o-f*w,l}function z(A,W,P){const l=P??new i(4),b=W*.5,f=A[0],x=A[1],k=A[2],B=A[3],w=Math.sin(b),o=Math.cos(b);return l[0]=f*o-k*w,l[1]=x*o+B*w,l[2]=k*o+f*w,l[3]=B*o-x*w,l}function V(A,W,P){const l=P??new i(4),b=W*.5,f=A[0],x=A[1],k=A[2],B=A[3],w=Math.sin(b),o=Math.cos(b);return l[0]=f*o+x*w,l[1]=x*o-f*w,l[2]=k*o+B*w,l[3]=B*o-k*w,l}function q(A,W,P,l){const b=l??new i(4),f=A[0],x=A[1],k=A[2],B=A[3];let w=W[0],o=W[1],m=W[2],p=W[3],u=f*w+x*o+k*m+B*p;u<0&&(u=-u,w=-w,o=-o,m=-m,p=-p);let c,v;if(1-u>Fe){const E=Math.acos(u),y=Math.sin(E);c=Math.sin((1-P)*E)/y,v=Math.sin(P*E)/y}else c=1-P,v=P;return b[0]=c*f+v*w,b[1]=c*x+v*o,b[2]=c*k+v*m,b[3]=c*B+v*p,b}function Z(A,W){const P=W??new i(4),l=A[0],b=A[1],f=A[2],x=A[3],k=l*l+b*b+f*f+x*x,B=k?1/k:0;return P[0]=-l*B,P[1]=-b*B,P[2]=-f*B,P[3]=x*B,P}function L(A,W){const P=W??new i(4);return P[0]=-A[0],P[1]=-A[1],P[2]=-A[2],P[3]=A[3],P}function O(A,W){const P=W??new i(4),l=A[0]+A[5]+A[10];if(l>0){const b=Math.sqrt(l+1);P[3]=.5*b;const f=.5/b;P[0]=(A[6]-A[9])*f,P[1]=(A[8]-A[2])*f,P[2]=(A[1]-A[4])*f}else{let b=0;A[5]>A[0]&&(b=1),A[10]>A[b*4+b]&&(b=2);const f=(b+1)%3,x=(b+2)%3,k=Math.sqrt(A[b*4+b]-A[f*4+f]-A[x*4+x]+1);P[b]=.5*k;const B=.5/k;P[3]=(A[f*4+x]-A[x*4+f])*B,P[f]=(A[f*4+b]+A[b*4+f])*B,P[x]=(A[x*4+b]+A[b*4+x])*B}return P}function Y(A,W,P,l,b){const f=b??new i(4),x=A*.5,k=W*.5,B=P*.5,w=Math.sin(x),o=Math.cos(x),m=Math.sin(k),p=Math.cos(k),u=Math.sin(B),c=Math.cos(B);switch(l){case"xyz":f[0]=w*p*c+o*m*u,f[1]=o*m*c-w*p*u,f[2]=o*p*u+w*m*c,f[3]=o*p*c-w*m*u;break;case"xzy":f[0]=w*p*c-o*m*u,f[1]=o*m*c-w*p*u,f[2]=o*p*u+w*m*c,f[3]=o*p*c+w*m*u;break;case"yxz":f[0]=w*p*c+o*m*u,f[1]=o*m*c-w*p*u,f[2]=o*p*u-w*m*c,f[3]=o*p*c+w*m*u;break;case"yzx":f[0]=w*p*c+o*m*u,f[1]=o*m*c+w*p*u,f[2]=o*p*u-w*m*c,f[3]=o*p*c-w*m*u;break;case"zxy":f[0]=w*p*c-o*m*u,f[1]=o*m*c+w*p*u,f[2]=o*p*u+w*m*c,f[3]=o*p*c-w*m*u;break;case"zyx":f[0]=w*p*c-o*m*u,f[1]=o*m*c+w*p*u,f[2]=o*p*u-w*m*c,f[3]=o*p*c+w*m*u;break;default:throw new Error(`Unknown rotation order: ${l}`)}return f}function j(A,W){const P=W??new i(4);return P[0]=A[0],P[1]=A[1],P[2]=A[2],P[3]=A[3],P}const ee=j;function $(A,W,P){const l=P??new i(4);return l[0]=A[0]+W[0],l[1]=A[1]+W[1],l[2]=A[2]+W[2],l[3]=A[3]+W[3],l}function ae(A,W,P){const l=P??new i(4);return l[0]=A[0]-W[0],l[1]=A[1]-W[1],l[2]=A[2]-W[2],l[3]=A[3]-W[3],l}const be=ae;function le(A,W,P){const l=P??new i(4);return l[0]=A[0]*W,l[1]=A[1]*W,l[2]=A[2]*W,l[3]=A[3]*W,l}const ce=le;function de(A,W,P){const l=P??new i(4);return l[0]=A[0]/W,l[1]=A[1]/W,l[2]=A[2]/W,l[3]=A[3]/W,l}function ye(A,W){return A[0]*W[0]+A[1]*W[1]+A[2]*W[2]+A[3]*W[3]}function Re(A,W,P,l){const b=l??new i(4);return b[0]=A[0]+P*(W[0]-A[0]),b[1]=A[1]+P*(W[1]-A[1]),b[2]=A[2]+P*(W[2]-A[2]),b[3]=A[3]+P*(W[3]-A[3]),b}function Ue(A){const W=A[0],P=A[1],l=A[2],b=A[3];return Math.sqrt(W*W+P*P+l*l+b*b)}const pe=Ue;function Q(A){const W=A[0],P=A[1],l=A[2],b=A[3];return W*W+P*P+l*l+b*b}const Te=Q;function xe(A,W){const P=W??new i(4),l=A[0],b=A[1],f=A[2],x=A[3],k=Math.sqrt(l*l+b*b+f*f+x*x);return k>1e-5?(P[0]=l/k,P[1]=b/k,P[2]=f/k,P[3]=x/k):(P[0]=0,P[1]=0,P[2]=0,P[3]=1),P}function me(A,W){return Math.abs(A[0]-W[0])<Fe&&Math.abs(A[1]-W[1])<Fe&&Math.abs(A[2]-W[2])<Fe&&Math.abs(A[3]-W[3])<Fe}function ue(A,W){return A[0]===W[0]&&A[1]===W[1]&&A[2]===W[2]&&A[3]===W[3]}function ie(A){const W=A??new i(4);return W[0]=0,W[1]=0,W[2]=0,W[3]=1,W}const Ee=s.create(),ze=s.create(),_e=s.create();function Me(A,W,P){const l=P??new i(4),b=s.dot(A,W);return b<-.999999?(s.cross(ze,A,Ee),s.len(Ee)<1e-6&&s.cross(_e,A,Ee),s.normalize(Ee,Ee),g(Ee,Math.PI,l),l):b>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(s.cross(A,W,Ee),l[0]=Ee[0],l[1]=Ee[1],l[2]=Ee[2],l[3]=1+b,xe(l,l))}const Pe=new i(4),X=new i(4);function oe(A,W,P,l,b,f){const x=f??new i(4);return q(A,l,b,Pe),q(W,P,b,X),q(Pe,X,2*b*(1-b),x),x}return{create:a,fromValues:_,set:d,fromAxisAngle:g,toAxisAngle:T,angle:S,multiply:C,mul:R,rotateX:G,rotateY:z,rotateZ:V,slerp:q,inverse:Z,conjugate:L,fromMat:O,fromEuler:Y,copy:j,clone:ee,add:$,subtract:ae,sub:be,mulScalar:le,scale:ce,divScalar:de,dot:ye,lerp:Re,length:Ue,len:pe,lengthSq:Q,lenSq:Te,normalize:xe,equalsApproximately:me,equals:ue,identity:ie,rotationTo:Me,sqlerp:oe}}const Fi=new Map;function yc(i){let s=Fi.get(i);return s||(s=xc(i),Fi.set(i,s)),s}function Pc(i){function s(P,l,b,f){const x=new i(4);return P!==void 0&&(x[0]=P,l!==void 0&&(x[1]=l,b!==void 0&&(x[2]=b,f!==void 0&&(x[3]=f)))),x}const a=s;function _(P,l,b,f,x){const k=x??new i(4);return k[0]=P,k[1]=l,k[2]=b,k[3]=f,k}function d(P,l){const b=l??new i(4);return b[0]=Math.ceil(P[0]),b[1]=Math.ceil(P[1]),b[2]=Math.ceil(P[2]),b[3]=Math.ceil(P[3]),b}function g(P,l){const b=l??new i(4);return b[0]=Math.floor(P[0]),b[1]=Math.floor(P[1]),b[2]=Math.floor(P[2]),b[3]=Math.floor(P[3]),b}function T(P,l){const b=l??new i(4);return b[0]=Math.round(P[0]),b[1]=Math.round(P[1]),b[2]=Math.round(P[2]),b[3]=Math.round(P[3]),b}function S(P,l=0,b=1,f){const x=f??new i(4);return x[0]=Math.min(b,Math.max(l,P[0])),x[1]=Math.min(b,Math.max(l,P[1])),x[2]=Math.min(b,Math.max(l,P[2])),x[3]=Math.min(b,Math.max(l,P[3])),x}function C(P,l,b){const f=b??new i(4);return f[0]=P[0]+l[0],f[1]=P[1]+l[1],f[2]=P[2]+l[2],f[3]=P[3]+l[3],f}function R(P,l,b,f){const x=f??new i(4);return x[0]=P[0]+l[0]*b,x[1]=P[1]+l[1]*b,x[2]=P[2]+l[2]*b,x[3]=P[3]+l[3]*b,x}function G(P,l,b){const f=b??new i(4);return f[0]=P[0]-l[0],f[1]=P[1]-l[1],f[2]=P[2]-l[2],f[3]=P[3]-l[3],f}const z=G;function V(P,l){return Math.abs(P[0]-l[0])<Fe&&Math.abs(P[1]-l[1])<Fe&&Math.abs(P[2]-l[2])<Fe&&Math.abs(P[3]-l[3])<Fe}function q(P,l){return P[0]===l[0]&&P[1]===l[1]&&P[2]===l[2]&&P[3]===l[3]}function Z(P,l,b,f){const x=f??new i(4);return x[0]=P[0]+b*(l[0]-P[0]),x[1]=P[1]+b*(l[1]-P[1]),x[2]=P[2]+b*(l[2]-P[2]),x[3]=P[3]+b*(l[3]-P[3]),x}function L(P,l,b,f){const x=f??new i(4);return x[0]=P[0]+b[0]*(l[0]-P[0]),x[1]=P[1]+b[1]*(l[1]-P[1]),x[2]=P[2]+b[2]*(l[2]-P[2]),x[3]=P[3]+b[3]*(l[3]-P[3]),x}function O(P,l,b){const f=b??new i(4);return f[0]=Math.max(P[0],l[0]),f[1]=Math.max(P[1],l[1]),f[2]=Math.max(P[2],l[2]),f[3]=Math.max(P[3],l[3]),f}function Y(P,l,b){const f=b??new i(4);return f[0]=Math.min(P[0],l[0]),f[1]=Math.min(P[1],l[1]),f[2]=Math.min(P[2],l[2]),f[3]=Math.min(P[3],l[3]),f}function j(P,l,b){const f=b??new i(4);return f[0]=P[0]*l,f[1]=P[1]*l,f[2]=P[2]*l,f[3]=P[3]*l,f}const ee=j;function $(P,l,b){const f=b??new i(4);return f[0]=P[0]/l,f[1]=P[1]/l,f[2]=P[2]/l,f[3]=P[3]/l,f}function ae(P,l){const b=l??new i(4);return b[0]=1/P[0],b[1]=1/P[1],b[2]=1/P[2],b[3]=1/P[3],b}const be=ae;function le(P,l){return P[0]*l[0]+P[1]*l[1]+P[2]*l[2]+P[3]*l[3]}function ce(P){const l=P[0],b=P[1],f=P[2],x=P[3];return Math.sqrt(l*l+b*b+f*f+x*x)}const de=ce;function ye(P){const l=P[0],b=P[1],f=P[2],x=P[3];return l*l+b*b+f*f+x*x}const Re=ye;function Ue(P,l){const b=P[0]-l[0],f=P[1]-l[1],x=P[2]-l[2],k=P[3]-l[3];return Math.sqrt(b*b+f*f+x*x+k*k)}const pe=Ue;function Q(P,l){const b=P[0]-l[0],f=P[1]-l[1],x=P[2]-l[2],k=P[3]-l[3];return b*b+f*f+x*x+k*k}const Te=Q;function xe(P,l){const b=l??new i(4),f=P[0],x=P[1],k=P[2],B=P[3],w=Math.sqrt(f*f+x*x+k*k+B*B);return w>1e-5?(b[0]=f/w,b[1]=x/w,b[2]=k/w,b[3]=B/w):(b[0]=0,b[1]=0,b[2]=0,b[3]=0),b}function me(P,l){const b=l??new i(4);return b[0]=-P[0],b[1]=-P[1],b[2]=-P[2],b[3]=-P[3],b}function ue(P,l){const b=l??new i(4);return b[0]=P[0],b[1]=P[1],b[2]=P[2],b[3]=P[3],b}const ie=ue;function Ee(P,l,b){const f=b??new i(4);return f[0]=P[0]*l[0],f[1]=P[1]*l[1],f[2]=P[2]*l[2],f[3]=P[3]*l[3],f}const ze=Ee;function _e(P,l,b){const f=b??new i(4);return f[0]=P[0]/l[0],f[1]=P[1]/l[1],f[2]=P[2]/l[2],f[3]=P[3]/l[3],f}const Me=_e;function Pe(P){const l=P??new i(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function X(P,l,b){const f=b??new i(4),x=P[0],k=P[1],B=P[2],w=P[3];return f[0]=l[0]*x+l[4]*k+l[8]*B+l[12]*w,f[1]=l[1]*x+l[5]*k+l[9]*B+l[13]*w,f[2]=l[2]*x+l[6]*k+l[10]*B+l[14]*w,f[3]=l[3]*x+l[7]*k+l[11]*B+l[15]*w,f}function oe(P,l,b){const f=b??new i(4);return xe(P,f),j(f,l,f)}function A(P,l,b){const f=b??new i(4);return ce(P)>l?oe(P,l,f):ue(P,f)}function W(P,l,b){const f=b??new i(4);return Z(P,l,.5,f)}return{create:s,fromValues:a,set:_,ceil:d,floor:g,round:T,clamp:S,add:C,addScaled:R,subtract:G,sub:z,equalsApproximately:V,equals:q,lerp:Z,lerpV:L,max:O,min:Y,mulScalar:j,scale:ee,divScalar:$,inverse:ae,invert:be,dot:le,length:ce,len:de,lengthSq:ye,lenSq:Re,distance:Ue,dist:pe,distanceSq:Q,distSq:Te,normalize:xe,negate:me,copy:ue,clone:ie,multiply:Ee,mul:ze,divide:_e,div:Me,zero:Pe,transformMat4:X,setLength:oe,truncate:A,midpoint:W}}const Vi=new Map;function Sc(i){let s=Vi.get(i);return s||(s=Pc(i),Vi.set(i,s)),s}function Lr(i,s,a,_,d,g){return{mat3:bc(i),mat4:wc(s),quat:yc(a),vec2:fo(_),vec3:qs(d),vec4:Sc(g)}}const{mat3:Ct,mat4:vt,quat:pt,vec2:$i,vec3:H,vec4:Qu}=Lr(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Lr(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Lr(fc,Array,Array,Array,Array,Array);const Ni=document.querySelector("#log");let zt=null,Dn=null;function _o(){if(zt)return zt;zt=document.createElement("div"),zt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",zt.appendChild(i),Dn=document.createElement("div"),Dn.className="ply-spinner-label",zt.appendChild(Dn),zt.style.display="none",document.body.appendChild(zt),zt}function Jn(i){_o(),Dn&&i&&(Dn.textContent=i),zt&&(zt.style.opacity="1",zt.style.display="flex")}function Tt(i){_o(),Dn&&(Dn.textContent=i)}function Yt(){if(!zt)return;const i=zt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function mo(i,s){if(!Ni)return;const a=document.createElement("p");a.innerText=i,s&&Object.assign(a.style,s),Ni.appendChild(a)}async function ft(i){console.log(i),mo(i)}async function Ec(i){console.error(i),mo(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let vo;function bo(){vo=performance.now()}function qi(i){const s=performance.now()-vo;ft(`⏱️ ${i} Time: ${s.toFixed(0)} ms`)}function kc(i,s){if(!i)throw new Error(s&&(typeof s=="string"?s:s()))}function Zn(i){return i+3&-4}const Tc=2,Cc=3,Bc=5,Ac=6,ds=7,Us=8,hs=9,fs=10,Mc=11,Rc=12,Dc=13,Uc=14;function Un(i){const s=new TextDecoder("ascii"),a=s.decode(new Uint8Array(i,0,4));if(a!=="NAT2")throw new Error(`NAT2 bad magic: '${a}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const _=new DataView(i),d=4,g=_.getUint32(d+0,!0),T=_.getUint32(d+4,!0),S=_.getUint32(d+8,!0),C=_.getUint32(d+12,!0),R=_.getUint32(d+16,!0),G=_.getFloat32(d+20,!0),z=_.getUint32(d+24,!0),V=_.getUint32(d+28,!0),q=V===Dc||V===Uc,Z=q?V-2:V,L=_.getFloat32(d+32,!0),O=_.getFloat32(d+36,!0),Y=_.getFloat32(d+40,!0),j=_.getUint32(d+44,!0),ee=_.getFloat32(d+48,!0),$=_.getFloat32(d+52,!0),ae=_.getUint32(d+56,!0),be=_.getUint32(d+60,!0),le=Z===hs||Z===fs,ce=le?be:0,de=le?0:be&255,ye=le?0:be>>8&255,Re=de>0?de:1;if(Z===Bc||Z===Ac)throw new Error(`NAT2: paired-RVQ format=${Z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Ue=Z===hs||Z===fs;if(Z!==Tc&&Z!==Cc&&Z!==Mc&&Z!==Rc&&Z!==ds&&Z!==Us&&!Ue)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Z}`);if(g%4!==0||j%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${g} layer_h=${j}`);let pe=d+64;const Q=(ae+1)*4,Te=new Uint32Array(i.slice(pe,pe+Q));pe+=Q;let xe;if(Re>1){const oe=(Re+1)*4;if(pe+oe>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${oe} from ${pe})`);xe=new Uint32Array(i.slice(pe,pe+oe)),pe+=oe}else xe=new Uint32Array([0,g]);let me=0;for(let oe=0;oe<Re;oe++){const A=xe[oe+1]-xe[oe];A>me&&(me=A)}if(Ue){const oe=ce&2?21:ce&1?7:6,A=R*oe*4;if(pe+A>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${A} more bytes from offset ${pe}, have ${i.byteLength-pe}`);const W=new Float32Array(i.slice(pe,pe+A));pe+=A;const P=Math.max(1,ce>>8&255),l=[];let b=0;for(let w=0,o=g,m=j;w<P;w++,o>>=1,m>>=1){const p=Math.max(1,o>>2)*Math.max(1,m>>2)*16;l.push(p),b+=p}const f=i.byteLength-pe;if(f<b)throw new Error(`NAT2 probe atlas truncated: need ${b} bytes for ${g}x${j} x${P} mips, have ${f}`);const x=[];let k=pe;for(const w of l)x.push(new Uint8Array(i.slice(k,k+w))),k+=w;const B=x[0];return{width:g,height:T,channels:S,kernel_type:C,num_rects:R,uv_extent:G,sb_number:z,format:Z,sh_bias:L,res_bias:O,compact_mult:Y,layer_h:j,atlas_scale:ee,atlas_offset:$,n_layers:ae,n_cols:Re,layer_cuts:Te,column_cuts:xe,slice_width:me,rects_expanded:W,atlas_bytes:B,mip_bytes:x,probe_mode:ce&2?3:ce&1?2:1}}const ue=R*4*4;if(pe+ue>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${ue} more bytes from offset ${pe}, have ${i.byteLength-pe}`);const ie=new Float32Array(i.slice(pe,pe+ue));pe+=ue;const Ee=new Float32Array(R*5);for(let oe=0;oe<R;oe++){const A=ie[oe*4+0],W=ie[oe*4+1],P=ie[oe*4+2],l=ie[oe*4+3];let b=0;for(let w=1;w<=ae&&Te[w]<=W;w++)b=w;let f=0;for(let w=1;w<=Re&&xe[w]<=A;w++)f=w;const x=W-Te[b],k=A-xe[f],B=f*ae+b;Ee[oe*5+0]=k,Ee[oe*5+1]=x,Ee[oe*5+2]=P,Ee[oe*5+3]=l,Ee[oe*5+4]=B}let ze,_e;const Me=Re,X=g/4*16;if(Z===ds||Z===Us||q){if(pe+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const oe=Z===ds||q?"BCCB":"ACCB",A=s.decode(new Uint8Array(i,pe,4));if(A!==oe)throw new Error(`NAT2 typeD bad sub-magic: expected '${oe}' got '${A}'`);const W=_.getUint32(pe+4,!0),P=_.getUint32(pe+8,!0),l=_.getUint32(pe+12,!0),b=_.getUint32(pe+16,!0),f=_.getUint32(pe+20,!0);if(W!==1)throw new Error(`NAT2 BCCB unsupported version ${W}`);if(l!==T/4||b!==g/4||f!==l*b)throw new Error(`NAT2 BCCB block grid mismatch: header ${g}×${T}, sub-header ${b}×${l} (${f} blocks)`);pe+=24;const x=P*16;if(pe+x>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${x}, have ${i.byteLength-pe})`);const k=new Uint8Array(i,pe,x);pe+=x;const B=f*2;if(pe+B>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${B}, have ${i.byteLength-pe})`);const w=new Uint16Array(i.slice(pe,pe+B));pe+=B;const o=new Uint8Array(f*16);for(let m=0;m<f;m++){const p=w[m]*16;o.set(k.subarray(p,p+16),m*16)}if(ze=o,ye>1){_e=[o];for(let m=1;m<ye;m++){if(pe+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${m} sub-header`);const p=s.decode(new Uint8Array(i,pe,4));if(p!==oe)throw new Error(`NAT2 mip ${m}: bad sub-magic '${p}'`);const u=_.getUint32(pe+8,!0),c=_.getUint32(pe+16,!0),v=_.getUint32(pe+20,!0);if(c!==m)throw new Error(`NAT2 mip section order: expected level ${m}, got ${c}`);pe+=24;let E=0;for(let K=0;K<Me;K++)for(let te=0;te<ae;te++){const se=go(m,xe[K+1]-xe[K],Te[te+1]-Te[te],me,j);E+=(se.cw>>2)*(se.ch>>2)}if(E!==v)throw new Error(`NAT2 mip ${m}: ${v} blocks, loader expects ${E}`);if(pe+u*16+v*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${m}`);const y=new Uint8Array(i,pe,u*16);pe+=u*16;const I=new Uint16Array(i.slice(pe,pe+v*2));pe+=v*2;const F=new Uint8Array(v*16);for(let K=0;K<v;K++){const te=I[K]*16;F.set(y.subarray(te,te+16),K*16)}_e.push(F)}}}else{let oe=0;for(let A=0;A<ae;A++){const W=Te[A+1]-Te[A];if(W%4!==0)throw new Error(`NAT2 BC7 layer ${A} rows ${W} not 4-aligned`);oe+=W/4*X}if(pe+oe>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${oe} more bytes from offset ${pe}, have ${i.byteLength-pe}`);ze=new Uint8Array(i.slice(pe,pe+oe))}return{width:g,height:T,channels:S,kernel_type:C,num_rects:R,uv_extent:G,sb_number:z,format:Z,sh_bias:L,res_bias:O,compact_mult:Y,layer_h:j,atlas_scale:ee,atlas_offset:$,n_layers:ae,n_cols:Re,layer_cuts:Te,column_cuts:xe,slice_width:me,rects_expanded:Ee,atlas_bytes:ze,..._e?{mip_bytes:_e}:{}}}function go(i,s,a,_,d){const g=S=>S+3>>2<<2,T=1<<i;return{cw:Math.min(g(Math.max(1,_>>i)),g(Math.ceil(s/T))),ch:Math.min(g(Math.max(1,d>>i)),g(Math.ceil(a/T)))}}const Lc=32;function kr(i,s,a){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let _,d,g,T,S;if(s.format===2||s.format===ds||s.format===hs){if(!i.features.has("texture-compression-bc"))return ft(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;S=s.format===hs?"BC7 atlas (proberes: shared probe texture)":s.format===ds?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:_,view:d,sampler:g,samplerAniso:T}=Tr(i,s,"bc7-rgba-unorm",S)}else if(s.format===3||s.format===Us||s.format===fs){if(!i.features.has("texture-compression-astc"))return ft(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;S=s.format===fs?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===Us?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:_,view:d,sampler:g,samplerAniso:T}=Tr(i,s,"astc-4x4-unorm",S)}else return ft(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:C}=s,R=i.createBuffer({label:"atlas rects (5-stride)",size:Zn(C.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(R,0,C);const G=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Ds(i,G,s,a),{texture:_,view:d,sampler:g,samplerAniso:T,rectsBuffer:R,texParamsBuffer:G,meta:s}}function zc(i,s,a){if(s.format!==11&&s.format!==12)return ft(`⚠️  ?slope= file has format ${s.format}, expected 11 (BC5) or 12 (P)`),null;if(!i.features.has("texture-compression-bc"))return ft("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(a&&(a.width!==s.width||a.layer_h!==s.layer_h||a.n_layers!==s.n_layers||a.n_cols!==s.n_cols||a.num_rects!==s.num_rects))return ft(`⚠️  slope sidecar layout ${s.width}x${s.layer_h}x${s.n_layers} does not match the atlas ${a.width}x${a.layer_h}x${a.n_layers} — disabled`),null;const{view:_}=Tr(i,s,s.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",s.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:_,kind:s.format===11?"bc5":"p",scaleU:s.atlas_scale,offU:s.atlas_offset,scaleV:s.sh_bias,offV:s.res_bias,mb:s.atlas_bytes.byteLength/1048576}}function Tr(i,s,a,_){const{width:d,layer_h:g,n_layers:T,n_cols:S,layer_cuts:C,column_cuts:R,slice_width:G,atlas_bytes:z}=s,q=d/4*16,Z=i.limits.maxTextureDimension2D;if(g>Z||G>Z)throw new Error(`⚠️  atlas slice dims ${G}x${g} exceed maxTextureDimension2D=${Z}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const L=S*T;if(L>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${S} cols × ${T} layers = ${L} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const O=s.mip_bytes??[z],Y=O.length,j=i.createTexture({label:_,size:{width:G,height:g,depthOrArrayLayers:L},mipLevelCount:Y,sampleCount:1,dimension:"2d",format:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let le=0;le<S;le++){const ce=R[le]/4,de=(R[le+1]-R[le])/4;for(let ye=0;ye<T;ye++){const Re=C[ye]/4,Ue=(C[ye+1]-C[ye])/4,pe=le*T+ye,Q=Re*q+ce*16;i.queue.writeTexture({texture:j,mipLevel:0,origin:{x:0,y:0,z:pe},aspect:"all"},z,{offset:Q,bytesPerRow:q,rowsPerImage:Ue},{width:de*4,height:Ue*4,depthOrArrayLayers:1})}}const ee=s.format===hs||s.format===fs;for(let le=1;le<Y&&!ee;le++){let ce=0;for(let de=0;de<S;de++)for(let ye=0;ye<T;ye++){const{cw:Re,ch:Ue}=go(le,R[de+1]-R[de],C[ye+1]-C[ye],G,g);i.queue.writeTexture({texture:j,mipLevel:le,origin:{x:0,y:0,z:de*T+ye},aspect:"all"},O[le],{offset:ce,bytesPerRow:(Re>>2)*16,rowsPerImage:Ue>>2},{width:Re,height:Ue,depthOrArrayLayers:1}),ce+=(Re>>2)*(Ue>>2)*16}}for(let le=1;le<Y&&ee;le++){const ce=Math.max(1,G>>le),de=Math.max(1,g>>le);i.queue.writeTexture({texture:j,mipLevel:le,origin:{x:0,y:0,z:0},aspect:"all"},O[le],{offset:0,bytesPerRow:Math.max(1,ce>>2)*16,rowsPerImage:Math.max(1,de>>2)},{width:ce,height:de,depthOrArrayLayers:1})}Y>1&&console.log(`[atlas] ${Y} mip levels uploaded (${ee?"trilinear":"per-surfel integer level"})`);const $=j.createView({label:`${_} view`,dimension:"2d-array"}),ae=i.createSampler({label:`${_} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:Y>1&&ee?"linear":"nearest"}),be=i.createSampler({label:`${_} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16});return{texture:j,view:$,sampler:ae,samplerAniso:be}}function Ds(i,s,a,_,d=1){var R;const g=new ArrayBuffer(32),T=new Uint32Array(g),S=new Float32Array(g);T[0]=_?1:0,S[1]=a.atlas_scale,S[2]=a.atlas_offset,S[3]=a.res_bias,T[4]=a.probe_mode?a.probe_mode|0:0,T[5]=a.width|0;const C=(((R=a.mip_bytes)==null?void 0:R.length)??1)>1;T[6]=d===2?2:C&&d!==0?1:0,S[7]=a.uv_extent,i.queue.writeBuffer(s,0,g)}async function Ls(i,s){ft(`loading ply file from File... : ${i.name}`),Jn("downloading PLY...");const a=await i.arrayBuffer();try{return await xo(a,s)}finally{Yt()}}async function Ic(i,s){ft(`loading ply file from URL... : ${i}`),Jn("downloading PLY...");try{bo();const a=new URL(i,self.location.href).href;return await xo({url:a},s)}finally{Yt()}}function wo(i){return new Promise((s,a)=>{const _=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});_.onmessage=d=>{const g=d.data;if((g==null?void 0:g.type)==="error"){Ec(`PLY worker error: ${g.message??"unknown error"}`),_.terminate(),a(new Error(g.message??"Worker error"));return}else if((g==null?void 0:g.type)==="download_progress"){const T=g.totalBytes,S=g.loadedBytes/(1024*1024),C=T?T/(1024*1024):void 0,R=(g.speedBps??0)/(1024*1024),G=T?Math.min(99,Math.floor(g.loadedBytes/T*100)):void 0,z=C?`total ${C.toFixed(1)} MB`:"total -- MB",V=C&&G!==void 0?`${S.toFixed(1)} MB downloaded (${G}%)`:`${S.toFixed(1)} MB downloaded`,q=`${R.toFixed(2)} MB/s`;Tt(`downloading PLY ...
${z}, ${V}
${q}`);return}else if((g==null?void 0:g.type)==="fetched"){ft(`💾 Fetched (${g.byteLength} bytes)`),qi("Download"),Tt("parsing PLY..."),bo();return}else if((g==null?void 0:g.type)==="parse_progress"){const T=g.total??0,S=g.read??0,C=T>0?Math.floor(S/T*100):0;Tt(`parsing PLY ...
${S}/${T} surfels (${C}%)`);return}else(g==null?void 0:g.type)==="done"&&(_.terminate(),qi("Parse"),s(g))},_.onerror=d=>{_.terminate(),a(d)},i instanceof ArrayBuffer?(Tt("parsing PLY..."),_.postMessage({type:"start",plyBuffer:i},[i])):_.postMessage({type:"start_url",url:i.url})})}async function Wi(i){var a,_,d,g,T,S,C,R,G,z,V,q;const s=await wo(await i.arrayBuffer());return{num_points:s.num_points,K:s.K,feature_mode:s.feature_mode??0,sh_bias:s.sh_bias,kernel_type:s.kernel_type,surfel_data:new Float32Array(s.surfelBuffer),sv_params:new Float32Array(s.svParamsBuffer),bbox:s.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:s.centroid??[((((_=(a=s.bbox)==null?void 0:a.min)==null?void 0:_[0])??-1)+(((g=(d=s.bbox)==null?void 0:d.max)==null?void 0:g[0])??1))/2,((((S=(T=s.bbox)==null?void 0:T.min)==null?void 0:S[1])??-1)+(((R=(C=s.bbox)==null?void 0:C.max)==null?void 0:R[1])??1))/2,((((z=(G=s.bbox)==null?void 0:G.min)==null?void 0:z[2])??-1)+(((q=(V=s.bbox)==null?void 0:V.max)==null?void 0:q[2])??1))/2]}}async function xo(i,s){var Z,L,O,Y,j,ee,$,ae,be,le,ce,de;const a=await wo(i),_=a.num_points,d=a.K,g=a.feature_mode??0,T=a.sh_bias,S=a.kernel_type,C=a.surfelBuffer,R=a.svParamsBuffer,G=g===2?"NASG":g===1?"SB":"SV";ft(`🪐 Total surfels: ${_}, mode=${G}, K=${d}, sh_bias=${T}, kernel_type=${S}`);const z=s.createBuffer({label:"surfel input buffer",size:Zn(_*Lc),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(z,0,C);const V=R.byteLength>0?R.byteLength:16,q=s.createBuffer({label:`color_params buffer (${G})`,size:Zn(V),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return R.byteLength>0&&s.queue.writeBuffer(q,0,R),{num_points:_,K:d,feature_mode:g,sh_bias:T,kernel_type:S,surfel_buffer:z,surfel_data:new Float32Array(C),sv_params_buffer:q,bbox:a.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:a.centroid??[((((L=(Z=a.bbox)==null?void 0:Z.min)==null?void 0:L[0])??-1)+(((Y=(O=a.bbox)==null?void 0:O.max)==null?void 0:Y[0])??1))/2,((((ee=(j=a.bbox)==null?void 0:j.min)==null?void 0:ee[1])??-1)+(((ae=($=a.bbox)==null?void 0:$.max)==null?void 0:ae[1])??1))/2,((((le=(be=a.bbox)==null?void 0:be.min)==null?void 0:le[2])??-1)+(((de=(ce=a.bbox)==null?void 0:ce.max)==null?void 0:de[2])??1))/2]}}const yo="halloumi-bundles-v1",Ki=8,ji="x-halloumi-cached-at",Po="x-halloumi-etag",zr="x-halloumi-length";function Gc(i){try{const s=new URL(i,window.location.href);return s.hash="",s.toString()}catch{return i}}function So(){try{const i=new URLSearchParams(window.location.search);return{nocache:i.get("nocache")==="1",clearcache:i.get("clearcache")==="1"}}catch{return{nocache:!1,clearcache:!1}}}async function Oc(){if(typeof caches>"u")return null;try{return await caches.open(yo)}catch{return null}}let Hi=!1;function Fc(){var i;Hi||!((i=navigator.storage)!=null&&i.persist)||(Hi=!0,navigator.storage.persist().then(s=>console.log(`[cache] persistent storage ${s?"granted":"not granted"}`)).catch(()=>{}))}let Ms=null;function Vc(){return Ms||(Ms=(async()=>{if(So().clearcache)try{await caches.delete(yo),console.log("[cache] cleared (?clearcache=1)")}catch{}})(),Ms)}function $c(i){return new Promise(s=>setTimeout(s,i))}function Nc(){return typeof document>"u"||document.visibilityState!=="hidden"?Promise.resolve():new Promise(i=>{const s=()=>{document.visibilityState!=="hidden"&&(document.removeEventListener("visibilitychange",s),i())};document.addEventListener("visibilitychange",s)})}async function qc(i,s){var V;const a=[];let _=0,d,g=null,T=null,S=performance.now(),C=0,R=null;for(let q=0;q<Ki;q++){q>0&&(document.visibilityState==="hidden"?await Nc():await $c(Math.min(8e3,1e3*2**(q-1))));try{const Z={};_>0&&(Z.Range=`bytes=${_}-`,g?Z["If-Range"]=g:T&&(Z["If-Range"]=T));const L=await fetch(i,{headers:Z,cache:"no-store"});if(L.status===416&&d!==void 0&&_>=d)break;if(!L.ok)throw new Error(`fetch failed: ${L.status} ${L.statusText}`);if(_>0&&L.status!==206&&(a.length=0,_=0,C=0),_===0){g=L.headers.get("etag"),T=L.headers.get("last-modified");const Y=L.headers.get("content-length");d=Y&&parseInt(Y,10)||void 0}else{const Y=L.headers.get("content-range"),j=Y&&/\/(\d+)$/.exec(Y);j&&(d=parseInt(j[1],10))}const O=(V=L.body)==null?void 0:V.getReader();if(O)for(;;){const{done:Y,value:j}=await O.read();if(Y)break;a.push(j),_+=j.byteLength;const ee=performance.now();ee-S>=150&&s&&(s(_,d,(_-C)/((ee-S)/1e3),"network"),S=ee,C=_)}else{const Y=await L.arrayBuffer();a.push(new Uint8Array(Y)),_+=Y.byteLength}if(d!==void 0&&_<d)throw new Error(`short read: ${_} of ${d} bytes`);R=null;break}catch(Z){R=Z,console.warn(`[cache] download attempt ${q+1}/${Ki} failed at ${(_/2**20).toFixed(1)} MB:`,Z),s&&s(_,d,0,"network")}}if(R)throw R;const G=new Uint8Array(_);let z=0;for(const q of a)G.set(q,z),z+=q.byteLength;return s&&s(_,d??_,0,"network"),{buf:G.buffer,etag:g,lastModified:T}}async function Wc(i,s,a){let _=!0;const d=()=>new Response(_?(_=!1,a.buf):a.buf.slice(0),{headers:{"content-type":"application/octet-stream","content-length":String(a.buf.byteLength),[zr]:String(a.buf.byteLength),[ji]:String(Date.now()),[Po]:a.etag??"",...a.lastModified?{"last-modified":a.lastModified}:{}}});for(let g=0;g<4;g++)try{return await i.put(s,d()),!0}catch(T){const S=await i.keys();if(S.length===0)return console.warn("[cache] not cached:",T),!1;const C=[];for(const G of S){const z=await i.match(G);C.push({k:G,t:parseInt((z==null?void 0:z.headers.get(ji))??"0",10)||0})}C.sort((G,z)=>G.t-z.t);const R=C[0].k;await i.delete(R),console.warn(`[cache] quota: evicted ${R.url}`)}return!1}function Kc(i,s,a,_){const d=new AbortController,g=setTimeout(()=>d.abort(),15e3);fetch(s,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:d.signal}).then(async T=>{var Z,L;if(!T.ok)return;(Z=T.body)==null||Z.cancel().catch(()=>{});const S=T.headers.get("etag"),C=T.headers.get("content-range"),R=T.status===206?((L=/\/(\d+)$/.exec(C??""))==null?void 0:L[1])??null:T.headers.get("content-length"),G=a.headers.get(Po)||null,z=a.headers.get(zr),V=R!==null&&z!==null&&parseInt(R,10)!==parseInt(z,10);(V||!!(S&&G)&&S!==G)&&(await i.delete(s),console.info(`[cache] ${s} changed on the server (${V?"size":"etag"}); evicted — reload to fetch the new version`),_==null||_())}).catch(()=>{}).finally(()=>clearTimeout(g))}async function Eo(i,s,a={}){await Vc();const{nocache:_}=So(),d=Gc(i),g=_?null:await Oc();if(g)try{const S=await g.match(d);if(S){const C=parseInt(S.headers.get(zr)??S.headers.get("content-length")??"0",10)||void 0;s&&s(0,C,0,"cache");const R=await S.arrayBuffer();return s&&s(R.byteLength,R.byteLength,0,"cache"),console.log(`[cache] hit ${(R.byteLength/2**20).toFixed(1)} MB ${d}`),Kc(g,d,S,a.onStale),R}}catch(S){console.warn("[cache] lookup failed:",S)}const T=await qc(i,s);return g&&(Fc(),Wc(g,d,T).then(S=>{S&&console.log(`[cache] stored ${(T.buf.byteLength/2**20).toFixed(1)} MB ${d}`)}).catch(S=>console.warn("[cache] store failed:",S))),T.buf}const zs="BITYMI01",jc=0,Hc=1,Yc=2,Zc=3,Xc=4,Jc=5;function Ir(i){const s=new Uint8Array(i),a=new TextDecoder().decode(s.subarray(0,8));if(a!==zs)throw new Error(`Not a BITYMI bundle (bad magic '${a}')`);const _=new DataView(i),d=_.getUint32(8,!0),g=12,T=20;let S=null,C=null,R=null;for(let G=0;G<d;G++){const z=g+G*T,V=_.getUint32(z+0,!0),q=Number(_.getBigUint64(z+4,!0)),Z=Number(_.getBigUint64(z+12,!0)),L=s.slice(q,q+Z).buffer;V===jc||V===Hc||V===Jc?S=L:V===Yc?C=L:(V===Zc||V===Xc)&&(R=L)}if(S===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:S,camerasBuffer:C,atlasBuffer:R}}async function Xn(i,s){const a=await Eo(i,s);return a.byteLength>=8&&new TextDecoder().decode(new Uint8Array(a,0,8))===zs?{bundle:Ir(a),rawPly:null}:{bundle:null,rawPly:a}}var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,s){(function(a,_){_(s)})(Qc,function(a){class _{constructor(e){const[t,r]=e.split("-"),h=t.split(".");this.major=parseInt(h[0],10),this.minor=parseInt(h[1],10),this.patch=parseInt(h[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class d{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class g{constructor(e){this.target=e}}class T extends g{constructor(e,t,r,h){super(e),this.value=t,this.presetKey=r,this.last=h??!0}}class S extends g{constructor(e,t,r){super(e),this.value=t,this.presetKey=r}}class C extends g{constructor(e,t){super(e),this.expanded=t}}class R extends g{constructor(e,t){super(e),this.index=t}}function G(n){return n}function z(n){return n==null}function V(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function q(n,e){let t=n;do{const r=Object.getOwnPropertyDescriptor(t,e);if(r&&(r.set!==void 0||r.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const Z={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class L{static alreadyDisposed(){return new L({type:"alreadydisposed"})}static notBindable(){return new L({type:"notbindable"})}static propertyNotFound(e){return new L({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new L({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=Z[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class O{constructor(e,t,r){this.obj_=e,this.key_=t,this.presetKey_=r??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const r=this.read();if(!O.isBindable(r))throw L.notBindable();if(!(e in r))throw L.propertyNotFound(e);r[e]=t}}class Y extends d{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{r(new g(this))}),this}}class j{constructor(){this.observers_={}}on(e,t){let r=this.observers_[e];return r||(r=this.observers_[e]=[]),r.push({handler:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(h=>h.handler!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(h=>{h.handler(t)})}}const ee="tp";function $(n){return(t,r)=>[ee,"-",n,"v",t?`_${t}`:"",r?`-${r}`:""].join("")}function ae(n,e){return t=>e(n(t))}function be(n){return n.rawValue}function le(n,e){n.emitter.on("change",ae(be,e)),e(n.rawValue)}function ce(n,e,t){le(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ye(n,e){return t=>{de(n,e,t)}}function Re(n,e){le(n,t=>{e.textContent=t??""})}const Ue=$("btn");class pe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ue()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(Ue("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const h=e.createElement("div");h.classList.add(Ue("t")),Re(t.props.value("title"),h),this.buttonElement.appendChild(h)}}class Q{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new pe(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Te{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(h,M)=>h===M,this.emitter=new j,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},h=this.constraint_?this.constraint_.constrain(e):e,M=this.rawValue_;this.equals_(M,h)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=h,this.emitter.emit("change",{options:r,previousRawValue:M,rawValue:h,sender:this}))}}class xe{constructor(e){this.emitter=new j,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},h=this.value_;h===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:h,rawValue:this.value_,sender:this}))}}function me(n,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new xe(n):new Te(n,e)}class ue{constructor(e){this.emitter=new j,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((r,h)=>Object.assign(r,{[h]:me(e[h])}),{})}static fromObject(e){const t=this.createCore(e);return new ue(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const r=Object.keys(e).reduce((h,M)=>{if(h===void 0)return;const N=e[M],he=N(n[M]);return he.succeeded?Object.assign(Object.assign({},h),{[M]:he.value}):void 0},{});return r}function Ee(n,e){return n.reduce((t,r)=>{if(t===void 0)return;const h=e(r);if(!(!h.succeeded||h.value===void 0))return[...t,h.value]},[])}function ze(n){return n===null?!1:typeof n=="object"}function _e(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=n(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function Me(n){return{custom:e=>_e(e)(n),boolean:_e(e=>typeof e=="boolean"?e:void 0)(n),number:_e(e=>typeof e=="number"?e:void 0)(n),string:_e(e=>typeof e=="string"?e:void 0)(n),function:_e(e=>typeof e=="function"?e:void 0)(n),constant:e=>_e(t=>t===e?e:void 0)(n),raw:_e(e=>e)(n),object:e=>_e(t=>{if(ze(t))return ie(t,e)})(n),array:e=>_e(t=>{if(Array.isArray(t))return Ee(t,e)})(n)}}const Pe={optional:Me(!0),required:Me(!1)};function X(n,e){const t=Pe.required.object(e)(n);return t.succeeded?t.value:void 0}function oe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class W{constructor(e){this.value_=e}static create(e){return[new W(e),(t,r)=>{e.setRawValue(t,r)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const P=$("");function l(n,e){return ye(n,P(void 0,e))}class b extends ue{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=W.create(me(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,h;const M=e??{};return new b(ue.createCore({disabled:(t=M.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=M.hidden)!==null&&r!==void 0?r:!1,parent:(h=M.parent)!==null&&h!==void 0?h:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){le(this.globalDisabled_,l(e,"disabled")),ce(this,"hidden",l(e,"hidden"))}bindDisabled(e){le(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){le(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function f(){return["veryfirst","first","last","verylast"]}const x=$(""),k={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class B{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{f().forEach(r=>{t.classList.remove(x(void 0,k[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(x(void 0,k[r]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){oe({key:"parent",target:b.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const w="http://www.w3.org/2000/svg";function o(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function p(n){return n.ontouchstart!==void 0}function u(){return globalThis}function c(){return u().document}function v(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const E={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function y(n,e){const t=n.createElementNS(w,"svg");return t.innerHTML=E[e],t}function I(n,e,t){n.insertBefore(e,n.children[t])}function F(n){n.parentElement&&n.parentElement.removeChild(n)}function K(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function te(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=$("lbl");function ke(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(h=>n.createTextNode(h)).forEach((h,M)=>{M>0&&t.appendChild(n.createElement("br")),t.appendChild(h)}),t}class Ae{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ne("l")),ce(t.props,"label",M=>{z(M)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),te(r),r.appendChild(ke(e,M)))}),this.element.appendChild(r),this.labelElement=r;const h=e.createElement("div");h.classList.add(ne("v")),this.element.appendChild(h),this.valueElement=h}}class ge extends B{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Ae(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Be={id:"button",type:"blade",accept(n){const e=Pe,t=X(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ge(n.document,{blade:n.blade,props:ue.fromObject({label:n.params.label}),valueController:new Q(n.document,{props:ue.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ge)||!(n.controller.valueController instanceof Q)?null:new Y(n.controller)}};class Ie extends B{constructor(e){super(e),this.value=e.value}}function Ge(){return new ue({positions:me([],{equals:V})})}class Ze extends ue{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=ue.createCore(t);return new Ze(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!z(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ce(this,"expanded",r),ce(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function tt(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),o(e),t=e.clientHeight,n.set("temporaryExpanded",null),o(e)}),t}function Xe(n,e){e.style.height=n.styleHeight}function Je(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),z(n.get("expandedHeight"))){const t=tt(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),o(e)}),n.emitter.on("change",()=>{Xe(n,e)}),Xe(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ne extends d{constructor(e,t){super(e),this.rackApi_=t}}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ut(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ve{constructor(e){this.emitter=new j,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw L.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const h=this.extract_(e);h&&(h.emitter.on("add",this.onSubListAdd_),h.emitter.on("remove",this.onSubListRemove_),h.allItems().forEach(M=>{this.cache_.add(M)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class rt extends d{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new T(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class $e extends ge{constructor(e,t){super(e,t),this.binding=t.binding}}class at extends d{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new S(this,t,this.controller_.binding.target.presetKey)})}}class nt extends ge{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function _t(n){return n instanceof kt?n.apiSet_:n instanceof Ne?n.rackApi_.apiSet_:null}function lt(n,e){const t=n.find(r=>r.controller_===e);if(!t)throw L.shouldNeverHappen();return t}function Bt(n,e,t){if(!O.isBindable(n))throw L.notBindable();return new O(n,e,t)}class kt extends d{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new j,this.apiSet_=new Ve(_t),this.pool_=t;const r=this.controller_.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),r.emitter.on("inputchange",this.onRackInputChange_),r.emitter.on("monitorupdate",this.onRackMonitorUpdate_),r.children.forEach(h=>{this.setUpApi_(h)})}get children(){return this.controller_.rack.children.map(e=>lt(this.apiSet_,e))}addInput(e,t,r){const h=r??{},M=this.controller_.view.element.ownerDocument,N=this.pool_.createInput(M,Bt(e,t,h.presetKey),h),he=new rt(N);return this.add(he,h.index)}addMonitor(e,t,r){const h=r??{},M=this.controller_.view.element.ownerDocument,N=this.pool_.createMonitor(M,Bt(e,t),h),he=new at(N);return this.add(he,h.index)}addFolder(e){return je(this,e)}addButton(e){return Qe(this,e)}addSeparator(e){return ut(this,e)}addTab(e){return ot(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const r=this.apiSet_.find(h=>h.controller_===e.controller_);return r&&this.apiSet_.remove(r),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,r=this.pool_.createBlade(t,e),h=this.pool_.createBladeApi(r);return this.add(h,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}setUpApi_(e){this.apiSet_.find(r=>r.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=lt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof $e){const r=lt(this.apiSet_,t),h=t.binding;this.emitter_.emit("change",{event:new T(r,h.target.read(),h.target.presetKey,e.options.last)})}else if(t instanceof Ie){const r=lt(this.apiSet_,t);this.emitter_.emit("change",{event:new T(r,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof nt))throw L.shouldNeverHappen();const t=lt(this.apiSet_,e.bladeController),r=e.bladeController.binding;this.emitter_.emit("update",{event:new S(t,r.target.read(),r.target.presetKey)})}}class mt extends Ne{constructor(e,t){super(e,new kt(e.rackController,t)),this.emitter_=new j,this.controller_.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",{event:new C(this,r.sender.rawValue)})}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}class ht extends B{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class At{constructor(e,t){const r=$(t.viewName);this.element=e.createElement("div"),this.element.classList.add(r()),t.viewProps.bindClassModifiers(this.element)}}function wt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof $e&&r.binding===e)return r}return null}function Mt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof nt&&r.binding===e)return r}return null}function Zt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof Ie&&r.value===e)return r}return null}function It(n){return n instanceof it?n.rack:n instanceof ht?n.rackController.rack:null}function qt(n){const e=It(n);return e?e.bcSet_:null}class Gt{constructor(e){var t,r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new j,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ve(qt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),q(e,"parent")?e.parent=this:(e.parent_=this,oe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){q(e,"parent")?e.parent=null:(e.parent_=null,oe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),r instanceof $e)r.binding.emitter.on("change",this.onChildInputChange_);else if(r instanceof nt)r.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(r instanceof Ie)r.value.emitter.on("change",this.onChildValueChange_);else{const h=It(r);if(h){const M=h.emitter;M.on("layout",this.onDescendantLayout_),M.on("inputchange",this.onDescendantInputChange_),M.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const r=e.item;if(r instanceof $e)r.binding.emitter.off("change",this.onChildInputChange_);else if(r instanceof nt)r.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(r instanceof Ie)r.value.emitter.off("change",this.onChildValueChange_);else{const h=It(r);if(h){const M=h.emitter;M.off("layout",this.onDescendantLayout_),M.off("inputchange",this.onDescendantInputChange_),M.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(h=>!h.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(h=>{const M=[];h===t&&(M.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&M.push("veryfirst")),h===r&&(M.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&M.push("verylast")),h.blade.set("positions",M)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=wt(this.find($e),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Mt(this.find(nt),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Zt(this.find(Ie),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class it extends B{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new At(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=new Gt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.rack=r,this.viewProps.handleDispose(()=>{for(let h=this.rack.children.length-1;h>=0;h--)this.rack.children[h].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&I(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&F(e.bladeController.view.element)}}const St=$("cnt");class Xt{constructor(e,t){var r;this.className_=$((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),St()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ce(this.foldable_,"completed",ye(this.element,this.className_(void 0,"cpl")));const h=e.createElement("button");h.classList.add(this.className_("b")),ce(t.props,"title",Le=>{z(Le)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(h),this.element.appendChild(h),this.buttonElement=h;const M=e.createElement("div");M.classList.add(this.className_("i")),this.element.appendChild(M);const N=e.createElement("div");N.classList.add(this.className_("t")),Re(t.props.value("title"),N),this.buttonElement.appendChild(N),this.titleElement=N;const he=e.createElement("div");he.classList.add(this.className_("m")),this.buttonElement.appendChild(he);const De=t.containerElement;De.classList.add(this.className_("c")),this.element.appendChild(De),this.containerElement=De}}class on extends ht{constructor(e,t){var r;const h=Ze.create((r=t.expanded)!==null&&r!==void 0?r:!0),M=new it(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:M,view:new Xt(e,{containerElement:M.view.element,foldable:h,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=h,Je(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const xn={id:"folder",type:"blade",accept(n){const e=Pe,t=X(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new on(n.document,{blade:n.blade,expanded:n.params.expanded,props:ue.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof on?new mt(n.controller,n.pool):null}};class Rt extends Ie{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Ae(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Kt extends d{}const Wt=$("spr");class Ws{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wt()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(Wt("r")),this.element.appendChild(r)}}class an extends B{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ws(e,{viewProps:t.viewProps})}))}}const Ks={id:"separator",type:"blade",accept(n){const t=X(n,{view:Pe.required.constant("separator")});return t?{params:t}:null},controller(n){return new an(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof an?new Kt(n.controller):null}},ln=$("tbi");class js{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ln()),t.viewProps.bindClassModifiers(this.element),ce(t.props,"selected",M=>{M?this.element.classList.add(ln(void 0,"sel")):this.element.classList.remove(ln(void 0,"sel"))});const r=e.createElement("button");r.classList.add(ln("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const h=e.createElement("div");h.classList.add(ln("t")),Re(t.props.value("title"),h),this.buttonElement.appendChild(h),this.titleElement=h}}class _s{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new js(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class yn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new _s(e,{props:t.itemProps,viewProps:b.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new it(e,{blade:Ge(),viewProps:b.create()}),this.props=t.props,ce(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.contentController.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class zn{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}class Qn extends Ne{constructor(e,t){super(e,new kt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new j,this.pageApiMap_=new Map,this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(r=>{this.setUpPageApi_(r)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw L.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,r=new yn(t,{itemProps:ue.fromObject({selected:!1,title:e.title}),props:ue.fromObject({selected:!1})});this.controller_.add(r,e.index);const h=this.pageApiMap_.get(r);if(!h)throw L.shouldNeverHappen();return h}removePage(e){this.controller_.remove(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(h=>h.controller_===e.contentController);if(!t)throw L.shouldNeverHappen();const r=new zn(e,t);this.pageApiMap_.set(e,r)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw L.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new R(this,e.rawValue)})}}const ms=-1;class cn{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=me(!0),this.selectedIndex=me(ms),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ms,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,h)=>{r.rawValue=h===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const un=$("tab");class Hs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(un(),St()),t.viewProps.bindClassModifiers(this.element),le(t.empty,ye(this.element,un(void 0,"nop")));const r=e.createElement("div");r.classList.add(un("t")),this.element.appendChild(r),this.itemsElement=r;const h=e.createElement("div");h.classList.add(un("i")),this.element.appendChild(h);const M=t.contentsElement;M.classList.add(un("c")),this.element.appendChild(M),this.contentsElement=M}}class vs extends ht{constructor(e,t){const r=new it(e,{blade:t.blade,viewProps:t.viewProps}),h=new cn;super({blade:t.blade,rackController:r,view:new Hs(e,{contentsElement:r.view.element,empty:h.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ve(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=h}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;I(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;F(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const bs={id:"tab",type:"blade",accept(n){const e=Pe,t=X(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new vs(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const r=new yn(n.document,{itemProps:ue.fromObject({selected:!1,title:t.title}),props:ue.fromObject({selected:!1})});e.add(r)}),e},api(n){return n.controller instanceof vs?new Qn(n.controller,n.pool):null}};function xt(n,e){const t=n.accept(e.params);if(!t)return null;const r=Pe.optional.boolean(e.params.disabled).value,h=Pe.optional.boolean(e.params.hidden).value;return n.controller({blade:Ge(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r,hidden:h}),viewProps:b.create({disabled:r,hidden:h})})}class Ys{constructor(){this.disabled=!1,this.emitter=new j}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Zs{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new j,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Xs{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new j,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function gs(n,e){for(;n.length<e;)n.push(void 0)}function ws(n){const e=[];return gs(e,n),me(e)}function es(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function xs(n,e){const t=[...es(n),e];return t.length>n.length?t.splice(0,t.length-n.length):gs(t,n.length),t}class ys{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new j,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,r=this.reader_(e);this.value.rawValue=xs(t,r),this.emitter.emit("update",{rawValue:r,sender:this})}onTick_(e){this.read()}}class dn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function Ot(n,e){if(n instanceof e)return n;if(n instanceof dn){const t=n.constraints.reduce((r,h)=>r||(h instanceof e?h:null),null);if(t)return t}return null}class jt{constructor(e){this.values=ue.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class pn{constructor(e){this.values=ue.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(h=>h.value===e).length>0?e:t[0].value}}class Pn{constructor(e){this.values=ue.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let h=e;return z(r)||(h=Math.max(h,r)),z(t)||(h=Math.min(h,t)),h}}class In{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}const Jt=$("lst");class Js{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Jt()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(Jt("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const h=e.createElement("div");h.classList.add(Jt("m")),h.appendChild(y(e,"dropdown")),this.element.appendChild(h),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ce(this.props_,"options",M=>{K(this.selectElement),M.forEach(N=>{const he=e.createElement("option");he.textContent=N.text,this.selectElement.appendChild(he)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class U{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Js(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const J=$("pop");class re{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(J()),t.viewProps.bindClassModifiers(this.element),le(t.shows,ye(this.element,J(void 0,"v")))}}class ve{constructor(e,t){this.shows=me(!1),this.viewProps=t.viewProps,this.view=new re(e,{shows:this.shows,viewProps:this.viewProps})}}const Se=$("txt");class fe{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Se()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(Se("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class we{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new fe(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const r=e.currentTarget.value,h=this.parser_(r);z(h)||(this.value.rawValue=h),this.view.refresh()}}function Ce(n){return String(n)}function qe(n){return n==="false"?!1:!!n}function He(n){return Ce(n)}class yt{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Oe={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class st{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=Oe[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ft={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ke{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ft[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Dt(n){return(e,t)=>{for(let r=0;r<n.length;r++){const h=n[r](e,t);if(h!=="")return h}return""}}function ct(n,e){var t;const r=n.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function hn(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Ut(n,e){var t;const r=n.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Gn(n,e){const t=Ut(n,e);if(t!=="")return t;const r=n.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const h=Ut(n,e);return h===""?"":r+h}function Vt(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=Gn(n,e);return r===""?"":t+r}function Et(n,e){const t=n.substr(e,1);if(t==="0")return t;const r=hn(n,e);return e+=r.length,r===""?"":r+Ut(n,e)}function Sn(n,e){const t=Et(n,e);if(e+=t.length,t==="")return"";const r=n.substr(e,1);if(e+=r.length,r!==".")return"";const h=Ut(n,e);return e+=h.length,t+r+h+Vt(n,e)}function On(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const r=Ut(n,e);return e+=r.length,r===""?"":t+r+Vt(n,e)}function Qt(n,e){const t=Et(n,e);return e+=t.length,t===""?"":t+Vt(n,e)}const Fn=Dt([Sn,On,Qt]);function Vn(n,e){var t;const r=n.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Qs(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=Vn(n,e);return r===""?"":t+r}function ts(n,e){var t;const r=n.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Oo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=ts(n,e);return r===""?"":t+r}function Fo(n,e){var t;const r=n.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Vo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=Fo(n,e);return r===""?"":t+r}const $o=Dt([Qs,Oo,Vo]),No=Dt([$o,Fn]);function qo(n,e){const t=No(n,e);return e+=t.length,t===""?null:{evaluable:new yt(t),cursor:e}}function Wo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const r=Vr(n,e);if(!r)return null;e=r.cursor,e+=ct(n,e).length;const h=n.substr(e,1);return e+=h.length,h!==")"?null:{evaluable:r.evaluable,cursor:e}}function Ko(n,e){var t;return(t=qo(n,e))!==null&&t!==void 0?t:Wo(n,e)}function Fr(n,e){const t=Ko(n,e);if(t)return t;const r=n.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const h=Fr(n,e);return h?(e=h.cursor,{cursor:e,evaluable:new Ke(r,h.evaluable)}):null}function jo(n,e,t){t+=ct(e,t).length;const r=n.filter(h=>e.startsWith(h,t))[0];return r?(t+=r.length,t+=ct(e,t).length,{cursor:t,operator:r}):null}function Ho(n,e){return(t,r)=>{const h=n(t,r);if(!h)return null;r=h.cursor;let M=h.evaluable;for(;;){const N=jo(e,t,r);if(!N)break;r=N.cursor;const he=n(t,r);if(!he)return null;r=he.cursor,M=new st(N.operator,M,he.evaluable)}return M?{cursor:r,evaluable:M}:null}}const Yo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Ho(n,e),Fr);function Vr(n,e){return e+=ct(n,e).length,Yo(n,e)}function Zo(n){const e=Vr(n,0);return!e||e.cursor+ct(n,e.cursor).length!==n.length?null:e.evaluable}function en(n){var e;const t=Zo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function $r(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=en(n);if(!z(e))return e}return 0}function Xo(n){return String(n)}function Pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Jo=Pt(0);function Ps(n){return Jo(n)+"%"}function Nr(n){return String(n)}function er(n){return n}function ns({primary:n,secondary:e,forward:t,backward:r}){let h=!1;function M(N){h||(h=!0,N(),h=!1)}n.emitter.on("change",N=>{M(()=>{e.setRawValue(t(n,e),N.options)})}),e.emitter.on("change",N=>{M(()=>{n.setRawValue(r(n,e),N.options)}),M(()=>{e.setRawValue(t(n,e),N.options)})}),M(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Lt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function ss(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function tn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Qo(n){return n==="ArrowUp"||n==="ArrowDown"}function qr(n){return Qo(n)||n==="ArrowLeft"||n==="ArrowRight"}function tr(n,e){var t,r;const h=e.ownerDocument.defaultView,M=e.getBoundingClientRect();return{x:n.pageX-(((t=h&&h.scrollX)!==null&&t!==void 0?t:0)+M.left),y:n.pageY-(((r=h&&h.scrollY)!==null&&r!==void 0?r:0)+M.top)}}class En{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new j,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(tr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(tr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(tr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,h=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-h.left,y:r.clientY-h.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function dt(n,e,t,r,h){const M=(n-e)/(t-e);return r+M*(h-r)}function Wr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function gt(n,e,t){return Math.min(Math.max(n,e),t)}function Kr(n,e){return(n%e+e)%e}const $t=$("txt");class ea{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add($t(),$t(void 0,"num")),t.arrayPosition&&this.element.classList.add($t(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add($t("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add($t()),this.inputElement.classList.add($t("i"));const h=e.createElement("div");h.classList.add($t("k")),this.element.appendChild(h),this.knobElement=h;const M=e.createElementNS(w,"svg");M.classList.add($t("g")),this.knobElement.appendChild(M);const N=e.createElementNS(w,"path");N.classList.add($t("gb")),M.appendChild(N),this.guideBodyElem_=N;const he=e.createElementNS(w,"path");he.classList.add($t("gh")),M.appendChild(he),this.guideHeadElem_=he;const De=e.createElement("div");De.classList.add($("tt")()),this.knobElement.appendChild(De),this.tooltipElem_=De,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove($t(void 0,"drg"));return}this.element.classList.add($t(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),r=t+(t>0?-1:t<0?1:0),h=gt(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+h},0 L${r},4 L${r+h},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const M=this.props_.get("formatter");this.tooltipElem_.textContent=M(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class rs{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=me(null),this.view=new ea(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const h=new En(this.view.knobElement);h.emitter.on("down",this.onPointerDown_),h.emitter.on("move",this.onPointerMove_),h.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const h=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),M=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("maxValue");let N=e;return h!==void 0&&(N=Math.max(N,h)),M!==void 0&&(N=Math.min(N,M)),N}onInputChange_(e){const r=e.currentTarget.value,h=this.parser_(r);z(h)||(this.value.rawValue=this.constrainValue_(h)),this.view.refresh()}onInputKeyDown_(e){const t=Lt(this.baseStep_,ss(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Lt(this.baseStep_,ss(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const nr=$("sld");class ta{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(nr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(nr("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const h=e.createElement("div");h.classList.add(nr("k")),this.trackElement.appendChild(h),this.knobElement=h,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=gt(dt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class na{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new ta(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new En(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(dt(gt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Lt(this.baseStep_,tn(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Lt(this.baseStep_,tn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const sr=$("sldtxt");class sa{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sr());const r=e.createElement("div");r.classList.add(sr("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(sr("t")),this.textView_=t.textView,h.appendChild(this.textView_.element),this.element.appendChild(h)}}class rr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new na(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new rs(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new sa(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function is(n,e){n.write(e)}function Ss(n){const e=Pe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function jr(n){if(n==="inline"||n==="popup")return n}function fn(n){const e=Pe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Hr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ir(n){return z(n)?null:new pn(Hr(n))}function ra(n){const e=n?Ot(n,In):null;return e?e.step:null}function Es(n,e){const t=n&&Ot(n,In);return t?Wr(t.step):Math.max(Wr(e),2)}function $n(n){const e=ra(n);return e??1}function Nn(n,e){var t;const r=n&&Ot(n,In),h=Math.abs((t=r==null?void 0:r.step)!==null&&t!==void 0?t:e);return h===0?.1:Math.pow(10,Math.floor(Math.log10(h))-1)}const ks=$("ckb");class ia{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(ks("l")),this.element.appendChild(r);const h=e.createElement("input");h.classList.add(ks("i")),h.type="checkbox",r.appendChild(h),this.inputElement=h,t.viewProps.bindDisabled(this.inputElement);const M=e.createElement("div");M.classList.add(ks("w")),r.appendChild(M);const N=y(e,"check");M.appendChild(N),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class oa{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ia(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function aa(n){const e=[],t=ir(n.options);return t&&e.push(t),new dn(e)}const la={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=X(e,{options:Pe.optional.custom(Ss)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>qe,constraint:n=>aa(n.params),writer:n=>is},controller:n=>{const e=n.document,t=n.value,r=n.constraint,h=r&&Ot(r,pn);return h?new U(e,{props:new ue({options:h.values.value("options")}),value:t,viewProps:n.viewProps}):new oa(e,{value:t,viewProps:n.viewProps})}},kn=$("col");class ca{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(kn()),t.foldable.bindExpandedClass(this.element,kn(void 0,"expanded")),ce(t.foldable,"completed",ye(this.element,kn(void 0,"cpl")));const r=e.createElement("div");r.classList.add(kn("h")),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(kn("s")),r.appendChild(h),this.swatchElement=h;const M=e.createElement("div");if(M.classList.add(kn("t")),r.appendChild(M),this.textElement=M,t.pickerLayout==="inline"){const N=e.createElement("div");N.classList.add(kn("p")),this.element.appendChild(N),this.pickerElement=N}else this.pickerElement=null}}function ua(n,e,t){const r=gt(n/255,0,1),h=gt(e/255,0,1),M=gt(t/255,0,1),N=Math.max(r,h,M),he=Math.min(r,h,M),De=N-he;let Le=0,Ye=0;const et=(he+N)/2;return De!==0&&(Ye=De/(1-Math.abs(N+he-1)),r===N?Le=(h-M)/De:h===N?Le=2+(M-r)/De:Le=4+(r-h)/De,Le=Le/6+(Le<0?1:0)),[Le*360,Ye*100,et*100]}function da(n,e,t){const r=(n%360+360)%360,h=gt(e/100,0,1),M=gt(t/100,0,1),N=(1-Math.abs(2*M-1))*h,he=N*(1-Math.abs(r/60%2-1)),De=M-N/2;let Le,Ye,et;return r>=0&&r<60?[Le,Ye,et]=[N,he,0]:r>=60&&r<120?[Le,Ye,et]=[he,N,0]:r>=120&&r<180?[Le,Ye,et]=[0,N,he]:r>=180&&r<240?[Le,Ye,et]=[0,he,N]:r>=240&&r<300?[Le,Ye,et]=[he,0,N]:[Le,Ye,et]=[N,0,he],[(Le+De)*255,(Ye+De)*255,(et+De)*255]}function pa(n,e,t){const r=gt(n/255,0,1),h=gt(e/255,0,1),M=gt(t/255,0,1),N=Math.max(r,h,M),he=Math.min(r,h,M),De=N-he;let Le;De===0?Le=0:N===r?Le=60*(((h-M)/De%6+6)%6):N===h?Le=60*((M-r)/De+2):Le=60*((r-h)/De+4);const Ye=N===0?0:De/N,et=N;return[Le,Ye*100,et*100]}function Yr(n,e,t){const r=Kr(n,360),h=gt(e/100,0,1),M=gt(t/100,0,1),N=M*h,he=N*(1-Math.abs(r/60%2-1)),De=M-N;let Le,Ye,et;return r>=0&&r<60?[Le,Ye,et]=[N,he,0]:r>=60&&r<120?[Le,Ye,et]=[he,N,0]:r>=120&&r<180?[Le,Ye,et]=[0,N,he]:r>=180&&r<240?[Le,Ye,et]=[0,he,N]:r>=240&&r<300?[Le,Ye,et]=[he,0,N]:[Le,Ye,et]=[N,0,he],[(Le+De)*255,(Ye+De)*255,(et+De)*255]}function ha(n,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[n,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function fa(n,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[n,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function Tn(n){return[n[0],n[1],n[2]]}function Zr(n,e){return[n[0],n[1],n[2],e]}const _a={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:ha,rgb:da},hsv:{hsl:fa,hsv:(n,e,t)=>[n,e,t],rgb:Yr},rgb:{hsl:ua,hsv:pa,rgb:(n,e,t)=>[n,e,t]}};function Ts(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function ma(n,e){return n===e?e:Kr(n,e)}function va(n,e,t){var r;const h=Ts(e,t);return[e==="rgb"?gt(n[0],0,h[0]):ma(n[0],h[0]),gt(n[1],0,h[1]),gt(n[2],0,h[2]),gt((r=n[3])!==null&&r!==void 0?r:1,0,1)]}function Xr(n,e,t,r){const h=Ts(e,t),M=Ts(e,r);return n.map((N,he)=>N/h[he]*M[he])}function ba(n,e,t){const r=Xr(n,e.mode,e.type,"int"),h=_a[e.mode][t.mode](...r);return Xr(h,t.mode,"int",t.type)}function Cs(n,e){return typeof n!="object"||z(n)?!1:e in n&&typeof n[e]=="number"}class We{static black(e="int"){return new We([0,0,0],"rgb",e)}static fromObject(e,t="int"){const r="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new We(r,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Cs(e,"r")&&Cs(e,"g")&&Cs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Cs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const r=e.comps_,h=t.comps_;for(let M=0;M<r.length;M++)if(r[M]!==h[M])return!1;return!0}constructor(e,t,r="int"){this.mode=t,this.type=r,this.comps_=va(e,t,r)}getComponents(e,t="int"){return Zr(ba(Tn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const _n=$("colp");class ga{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(_n("hsv"));const h=e.createElement("div");h.classList.add(_n("sv")),this.svPaletteView_=t.svPaletteView,h.appendChild(this.svPaletteView_.element),r.appendChild(h);const M=e.createElement("div");M.classList.add(_n("h")),this.hPaletteView_=t.hPaletteView,M.appendChild(this.hPaletteView_.element),r.appendChild(M),this.element.appendChild(r);const N=e.createElement("div");if(N.classList.add(_n("rgb")),this.textView_=t.textView,N.appendChild(this.textView_.element),this.element.appendChild(N),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const he=e.createElement("div");he.classList.add(_n("a"));const De=e.createElement("div");De.classList.add(_n("ap")),De.appendChild(this.alphaViews_.palette.element),he.appendChild(De);const Le=e.createElement("div");Le.classList.add(_n("at")),Le.appendChild(this.alphaViews_.text.element),he.appendChild(Le),this.element.appendChild(he)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function wa(n){return n==="int"?"int":n==="float"?"float":void 0}function or(n){const e=Pe;return X(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(wa)}),expanded:e.optional.boolean,picker:e.optional.custom(jr)})}function Cn(n){return n?.1:1}function Bn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function xa(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Nt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const ya={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Jr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),r=e[2];return ya[r](t)}function Qr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Nt(e[1],255),Nt(e[2],255),Nt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ei(n){return e=>{const t=Qr(e);return t?new We(t,"rgb",n):null}}function ti(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Nt(e[1],255),Nt(e[2],255),Nt(e[3],255),Nt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ni(n){return e=>{const t=ti(e);return t?new We(t,"rgb",n):null}}function si(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Jr(e[1]),Nt(e[2],100),Nt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ri(n){return e=>{const t=si(e);return t?new We(t,"hsl",n):null}}function ii(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Jr(e[1]),Nt(e[2],100),Nt(e[3],100),Nt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function oi(n){return e=>{const t=ii(e);return t?new We(t,"hsl",n):null}}function ai(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Pa(n){const e=ai(n);return e?new We(e,"rgb","int"):null}function li(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),dt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),dt(parseInt(t[4],16),0,255,0,1)]:null}function Sa(n){const e=li(n);return e?new We(e,"rgb","int"):null}function ci(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ui(n){return e=>{const t=ci(e);return t?new We(t,"rgb",n):null}}function di(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function pi(n){return e=>{const t=di(e);return t?new We(t,"rgb",n):null}}const Ea=[{parser:ai,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:li,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Qr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ti,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:si,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ii,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ci,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:di,result:{alpha:!0,mode:"rgb",notation:"object"}}];function ka(n){return Ea.reduce((e,{parser:t,result:r})=>e||(t(n)?r:null),null)}function ar(n,e="int"){const t=ka(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const hi={int:[Pa,Sa,ei("int"),ni("int"),ri("int"),oi("int"),ui("int"),pi("int")],float:[ei("float"),ni("float"),ri("float"),oi("float"),ui("float"),pi("float")]};function Ta(n){const e=hi[n];return t=>{if(typeof t!="string")return We.black(n);const r=e.reduce((h,M)=>h||M(t),null);return r??We.black(n)}}function lr(n){const e=hi[n];return t=>e.reduce((r,h)=>r||h(t),null)}function fi(n){const e=gt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function _i(n,e="#"){const t=Tn(n.getComponents("rgb")).map(fi).join("");return`${e}${t}`}function cr(n,e="#"){const t=n.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(fi).join("");return`${e}${r}`}function mi(n,e){const t=Pt(e==="float"?2:0);return`rgb(${Tn(n.getComponents("rgb",e)).map(h=>t(h)).join(", ")})`}function Ca(n){return e=>mi(e,n)}function Bs(n,e){const t=Pt(2),r=Pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((M,N)=>(N===3?t:r)(M)).join(", ")})`}function Ba(n){return e=>Bs(e,n)}function Aa(n){const e=[Pt(0),Ps,Ps];return`hsl(${Tn(n.getComponents("hsl")).map((r,h)=>e[h](r)).join(", ")})`}function Ma(n){const e=[Pt(0),Ps,Ps,Pt(2)];return`hsla(${n.getComponents("hsl").map((r,h)=>e[h](r)).join(", ")})`}function vi(n,e){const t=Pt(e==="float"?2:0),r=["r","g","b"];return`{${Tn(n.getComponents("rgb",e)).map((M,N)=>`${r[N]}: ${t(M)}`).join(", ")}}`}function Ra(n){return e=>vi(e,n)}function bi(n,e){const t=Pt(2),r=Pt(e==="float"?2:0),h=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((N,he)=>{const De=he===3?t:r;return`${h[he]}: ${De(N)}`}).join(", ")}}`}function Da(n){return e=>bi(e,n)}const Ua=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:_i},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:cr},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Aa},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ma},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Ca(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Ba(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ra(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Da(e)}],[])];function ur(n){return Ua.reduce((e,t)=>e||(xa(t.format,n)?t.stringifier:null),null)}const os=$("apl");class La{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(os()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(os("b")),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(os("c")),r.appendChild(h),this.colorElem_=h;const M=e.createElement("div");M.classList.add(os("m")),this.element.appendChild(M),this.markerElem_=M;const N=e.createElement("div");N.classList.add(os("p")),this.markerElem_.appendChild(N),this.previewElem_=N,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new We([t[0],t[1],t[2],0],"rgb"),h=new We([t[0],t[1],t[2],255],"rgb"),M=["to right",Bs(r),Bs(h)];this.colorElem_.style.background=`linear-gradient(${M.join(",")})`,this.previewElem_.style.backgroundColor=Bs(e);const N=dt(t[3],0,1,0,100);this.markerElem_.style.left=`${N}%`}onValueChange_(){this.update_()}}class za{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new La(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new En(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,h=this.value.rawValue,[M,N,he]=h.getComponents("hsv");this.value.setRawValue(new We([M,N,he,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Lt(Cn(!0),tn(e));if(t===0)return;const r=this.value.rawValue,[h,M,N,he]=r.getComponents("hsv");this.value.setRawValue(new We([h,M,N,he+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Lt(Cn(!0),tn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const qn=$("coltxt");function Ia(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((r,h)=>{const M=n.createElement("option");return M.textContent=h.text,M.value=h.value,r.appendChild(M),r},n.createDocumentFragment())),e}class Ga{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(qn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(qn("m")),this.modeElem_=Ia(e),this.modeElem_.classList.add(qn("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const h=e.createElement("div");h.classList.add(qn("mm")),h.appendChild(y(e,"dropdown")),r.appendChild(h),this.element.appendChild(r);const M=e.createElement("div");M.classList.add(qn("w")),this.element.appendChild(M),this.textsElem_=M,this.textViews_=t.textViews,this.applyTextViews_(),le(t.colorMode,N=>{this.modeElem_.value=N})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(qn("c")),r.appendChild(t.element),this.textsElem_.appendChild(r)})}}function Oa(n){return Pt(n==="float"?2:0)}function Fa(n,e,t){const r=Ts(n,e)[t];return new jt({min:0,max:r})}function dr(n,e,t){return new rs(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Cn(!1),parser:e.parser,props:ue.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Oa(e.colorType)}),value:me(0,{constraint:Fa(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Va{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=me(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ga(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},r=[dr(e,t,0),dr(e,t,1),dr(e,t,2)];return r.forEach((h,M)=>{ns({primary:this.value,secondary:h.value,forward:N=>N.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[M],backward:(N,he)=>{const De=this.colorMode.rawValue,Le=N.rawValue.getComponents(De,this.colorType_);return Le[M]=he.rawValue,new We(Zr(Tn(Le),Le[3]),De,this.colorType_)}})}),r}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const pr=$("hpl");class $a{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(pr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(pr("c")),this.element.appendChild(r);const h=e.createElement("div");h.classList.add(pr("m")),this.element.appendChild(h),this.markerElem_=h,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=mi(new We([t,100,100],"hsv"));const r=dt(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class Na{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new En(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=dt(gt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),h=this.value.rawValue,[,M,N,he]=h.getComponents("hsv");this.value.setRawValue(new We([r,M,N,he],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Lt(Cn(!1),tn(e));if(t===0)return;const r=this.value.rawValue,[h,M,N,he]=r.getComponents("hsv");this.value.setRawValue(new We([h+t,M,N,he],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Lt(Cn(!1),tn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const hr=$("svp"),gi=64;class qa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(hr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=gi,r.width=gi,r.classList.add(hr("c")),this.element.appendChild(r),this.canvasElement=r;const h=e.createElement("div");h.classList.add(hr("m")),this.element.appendChild(h),this.markerElem_=h,this.update_()}update_(){const e=v(this.canvasElement);if(!e)return;const r=this.value.rawValue.getComponents("hsv"),h=this.canvasElement.width,M=this.canvasElement.height,N=e.getImageData(0,0,h,M),he=N.data;for(let Ye=0;Ye<M;Ye++)for(let et=0;et<h;et++){const An=dt(et,0,h,0,100),ls=dt(Ye,0,M,100,0),cs=Yr(r[0],An,ls),As=(Ye*h+et)*4;he[As]=cs[0],he[As+1]=cs[1],he[As+2]=cs[2],he[As+3]=255}e.putImageData(N,0,0);const De=dt(r[1],0,100,0,100);this.markerElem_.style.left=`${De}%`;const Le=dt(r[2],0,100,100,0);this.markerElem_.style.top=`${Le}%`}onValueChange_(){this.update_()}}class Wa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new En(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=dt(e.point.x,0,e.bounds.width,0,100),h=dt(e.point.y,0,e.bounds.height,100,0),[M,,,N]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new We([M,r,h,N],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){qr(e.key)&&e.preventDefault();const[t,r,h,M]=this.value.rawValue.getComponents("hsv"),N=Cn(!1),he=Lt(N,tn(e)),De=Lt(N,ss(e));he===0&&De===0||this.value.setRawValue(new We([t,r+he,h+De,M],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Cn(!1),r=Lt(t,tn(e)),h=Lt(t,ss(e));r===0&&h===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ka{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Na(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Wa(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new za(e,{value:this.value,viewProps:this.viewProps}),text:new rs(e,{parser:en,baseStep:.1,props:ue.fromObject({draggingScale:.01,formatter:Pt(2)}),value:me(0,{constraint:new jt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&ns({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.rawValue.getComponents()[3],backward:(r,h)=>{const M=r.rawValue.getComponents();return M[3]=h.rawValue,new We(M,r.rawValue.mode)}}),this.textC_=new Va(e,{colorType:t.colorType,parser:en,value:this.value,viewProps:this.viewProps}),this.view=new ga(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const fr=$("colsw");class ja{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(fr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(fr("sw")),this.element.appendChild(r),this.swatchElem_=r;const h=e.createElement("button");h.classList.add(fr("b")),t.viewProps.bindDisabled(h),this.element.appendChild(h),this.buttonElement=h,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=cr(e)}onValueChange_(){this.update_()}}class Ha{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{value:this.value,viewProps:this.viewProps})}}class _r{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ze.create(t.expanded),this.swatchC_=new Ha(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new we(e,{parser:t.parser,props:ue.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new ca(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new ve(e,{viewProps:this.viewProps}):null;const h=new Ka(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});h.view.allFocusableElements.forEach(M=>{M.addEventListener("blur",this.onPopupChildBlur_),M.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=h,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(h.view.element),ns({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:M=>M.rawValue,backward:(M,N)=>N.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Je(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=se(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Ya(n,e){return We.isColorObject(n)?We.fromObject(n,e):We.black(e)}function Za(n){return Tn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Xa(n){return n.getComponents("rgb").reduce((e,t,r)=>{const h=Math.floor(r===3?t*255:t)&255;return e<<8|h},0)>>>0}function Ja(n){return new We([n>>16&255,n>>8&255,n&255],"rgb")}function Qa(n){return new We([n>>24&255,n>>16&255,n>>8&255,dt(n&255,0,255,0,1)],"rgb")}function el(n){return typeof n!="number"?We.black():Ja(n)}function tl(n){return typeof n!="number"?We.black():Qa(n)}function nl(n){const e=ur(n);return e?(t,r)=>{is(t,e(r))}:null}function sl(n){const e=n?Xa:Za;return(t,r)=>{is(t,e(r))}}function rl(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function il(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function ol(n,e){return(t,r)=>{n?rl(t,r,e):il(t,r,e)}}function mr(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function al(n){return n?e=>cr(e,"0x"):e=>_i(e,"0x")}function ll(n){return"color"in n||"view"in n&&n.view==="color"}const cl={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ll(e))return null;const t=or(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>mr(n.params)?tl:el,equals:We.equals,writer:n=>sl(mr(n.params))},controller:n=>{const e=mr(n.params),t="expanded"in n.params?n.params.expanded:void 0,r="picker"in n.params?n.params.picker:void 0;return new _r(n.document,{colorType:"int",expanded:t??!1,formatter:al(e),parser:lr("int"),pickerLayout:r??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ul(n){return We.isRgbaColorObject(n)}function dl(n){return e=>Ya(e,n)}function pl(n,e){return t=>n?bi(t,e):vi(t,e)}const hl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!We.isColorObject(n))return null;const t=or(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>dl(Bn(n.params)),equals:We.equals,writer:n=>ol(ul(n.initialValue),Bn(n.params))},controller:n=>{var e;const t=We.isRgbaColorObject(n.initialValue),r="expanded"in n.params?n.params.expanded:void 0,h="picker"in n.params?n.params.picker:void 0,M=(e=Bn(n.params))!==null&&e!==void 0?e:"int";return new _r(n.document,{colorType:M,expanded:r??!1,formatter:pl(t,M),parser:lr(M),pickerLayout:h??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},fl={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ar(n,Bn(e));if(!t||!ur(t))return null;const h=or(e);return h?{initialValue:n,params:h}:null},binding:{reader:n=>{var e;return Ta((e=Bn(n.params))!==null&&e!==void 0?e:"int")},equals:We.equals,writer:n=>{const e=ar(n.initialValue,Bn(n.params));if(!e)throw L.shouldNeverHappen();const t=nl(e);if(!t)throw L.notBindable();return t}},controller:n=>{const e=ar(n.initialValue,Bn(n.params));if(!e)throw L.shouldNeverHappen();const t=ur(e);if(!t)throw L.shouldNeverHappen();const r="expanded"in n.params?n.params.expanded:void 0,h="picker"in n.params?n.params.picker:void 0;return new _r(n.document,{colorType:e.type,expanded:r??!1,formatter:t,parser:lr(e.type),pickerLayout:h??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class mn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,h)=>{var M,N;return(N=(M=this.components[h])===null||M===void 0?void 0:M.constrain(r))!==null&&N!==void 0?N:r});return this.asm_.fromComponents(t)}}const wi=$("pndtxt");class _l{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(wi()),this.textViews.forEach(r=>{const h=e.createElement("div");h.classList.add(wi("a")),h.appendChild(r.element),this.element.appendChild(h)})}}function ml(n,e,t){return new rs(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:me(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class vr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,h)=>ml(e,t,h)),this.acs_.forEach((r,h)=>{ns({primary:this.value,secondary:r.value,forward:M=>t.assembly.toComponents(M.rawValue)[h],backward:(M,N)=>{const he=t.assembly.toComponents(M.rawValue);return he[h]=N.rawValue,t.assembly.fromComponents(he)}})}),this.view=new _l(e,{textViews:this.acs_.map(r=>r.view)})}}function xi(n,e){return"step"in n&&!z(n.step)?new In(n.step,e):null}function yi(n){return!z(n.max)&&!z(n.min)?new jt({max:n.max,min:n.min}):!z(n.max)||!z(n.min)?new Pn({max:n.max,min:n.min}):null}function vl(n){const e=Ot(n,jt);if(e)return[e.values.get("min"),e.values.get("max")];const t=Ot(n,Pn);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function bl(n,e){const t=[],r=xi(n,e);r&&t.push(r);const h=yi(n);h&&t.push(h);const M=ir(n.options);return M&&t.push(M),new dn(t)}const gl={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,r=X(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Ss),step:t.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>$r,constraint:n=>bl(n.params,n.initialValue),writer:n=>is},controller:n=>{var e;const t=n.value,r=n.constraint,h=r&&Ot(r,pn);if(h)return new U(n.document,{props:new ue({options:h.values.value("options")}),value:t,viewProps:n.viewProps});const M=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:Pt(Es(r,t.rawValue)),N=r&&Ot(r,jt);return N?new rr(n.document,{baseStep:$n(r),parser:en,sliderProps:new ue({maxValue:N.values.value("max"),minValue:N.values.value("min")}),textProps:ue.fromObject({draggingScale:Nn(r,t.rawValue),formatter:M}),value:t,viewProps:n.viewProps}):new rs(n.document,{baseStep:$n(r),parser:en,props:ue.fromObject({draggingScale:Nn(r,t.rawValue),formatter:M}),value:t,viewProps:n.viewProps})}};class vn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Pi={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)},Wn=$("p2d");class wl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wn()),t.viewProps.bindClassModifiers(this.element),le(t.expanded,ye(this.element,Wn(void 0,"expanded")));const r=e.createElement("div");r.classList.add(Wn("h")),this.element.appendChild(r);const h=e.createElement("button");h.classList.add(Wn("b")),h.appendChild(y(e,"p2dpad")),t.viewProps.bindDisabled(h),r.appendChild(h),this.buttonElement=h;const M=e.createElement("div");if(M.classList.add(Wn("t")),r.appendChild(M),this.textElement=M,t.pickerLayout==="inline"){const N=e.createElement("div");N.classList.add(Wn("p")),this.element.appendChild(N),this.pickerElement=N}else this.pickerElement=null}}const bn=$("p2dp");class xl{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(bn()),t.layout==="popup"&&this.element.classList.add(bn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(bn("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const h=e.createElementNS(w,"svg");h.classList.add(bn("g")),this.padElement.appendChild(h),this.svgElem_=h;const M=e.createElementNS(w,"line");M.classList.add(bn("ax")),M.setAttributeNS(null,"x1","0"),M.setAttributeNS(null,"y1","50%"),M.setAttributeNS(null,"x2","100%"),M.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(M);const N=e.createElementNS(w,"line");N.classList.add(bn("ax")),N.setAttributeNS(null,"x1","50%"),N.setAttributeNS(null,"y1","0"),N.setAttributeNS(null,"x2","50%"),N.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(N);const he=e.createElementNS(w,"line");he.classList.add(bn("l")),he.setAttributeNS(null,"x1","50%"),he.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(he),this.lineElem_=he;const De=e.createElement("div");De.classList.add(bn("m")),this.padElement.appendChild(De),this.markerElem_=De,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.maxValue_,h=dt(e,-r,+r,0,100),M=dt(t,-r,+r,0,100),N=this.invertsY_?100-M:M;this.lineElem_.setAttributeNS(null,"x2",`${h}%`),this.lineElem_.setAttributeNS(null,"y2",`${N}%`),this.markerElem_.style.left=`${h}%`,this.markerElem_.style.top=`${N}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Si(n,e,t){return[Lt(e[0],tn(n)),Lt(e[1],ss(n))*(t?1:-1)]}class yl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new xl(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new En(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.maxValue_,h=dt(e.point.x,0,e.bounds.width,-r,+r),M=dt(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new vn(h,M),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){qr(e.key)&&e.preventDefault();const[t,r]=Si(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(new vn(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=Si(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Pl{constructor(e,t){var r,h;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ze.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new ve(e,{viewProps:this.viewProps}):null;const M=new yl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});M.view.allFocusableElements.forEach(N=>{N.addEventListener("blur",this.onPopupChildBlur_),N.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=M,this.textC_=new vr(e,{assembly:Pi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new wl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(h=this.view.buttonElement)===null||h===void 0||h.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),ns({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:N=>N.rawValue,backward:(N,he)=>he.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Je(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=se(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!p(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Kn{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y,h=e.z;return!(typeof t!="number"||typeof r!="number"||typeof h!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ei={toComponents:n=>n.getComponents(),fromComponents:n=>new Kn(...n)};function Sl(n){return Kn.isObject(n)?new Kn(n.x,n.y,n.z):new Kn}function El(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function kl(n,e){return new mn({assembly:Ei,components:[nn("x"in n?n.x:void 0,e.x),nn("y"in n?n.y:void 0,e.y),nn("z"in n?n.z:void 0,e.z)]})}function br(n,e){return{baseStep:$n(e),constraint:e,textProps:ue.fromObject({draggingScale:Nn(e,n),formatter:Pt(Es(e,n))})}}const Tl={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Kn.isObject(n))return null;const t=Pe,r=X(e,{x:t.optional.custom(fn),y:t.optional.custom(fn),z:t.optional.custom(fn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Sl,constraint:n=>kl(n.params,n.initialValue),equals:Kn.equals,writer:n=>El},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof mn))throw L.shouldNeverHappen();return new vr(n.document,{assembly:Ei,axes:[br(e.rawValue.x,t.components[0]),br(e.rawValue.y,t.components[1]),br(e.rawValue.z,t.components[2])],parser:en,value:e,viewProps:n.viewProps})}};class jn{constructor(e=0,t=0,r=0,h=0){this.x=e,this.y=t,this.z=r,this.w=h}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(z(e))return!1;const t=e.x,r=e.y,h=e.z,M=e.w;return!(typeof t!="number"||typeof r!="number"||typeof h!="number"||typeof M!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ki={toComponents:n=>n.getComponents(),fromComponents:n=>new jn(...n)};function Cl(n){return jn.isObject(n)?new jn(n.x,n.y,n.z,n.w):new jn}function Bl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Al(n,e){return new mn({assembly:ki,components:[nn("x"in n?n.x:void 0,e.x),nn("y"in n?n.y:void 0,e.y),nn("z"in n?n.z:void 0,e.z),nn("w"in n?n.w:void 0,e.w)]})}function Ml(n,e){return{baseStep:$n(e),constraint:e,textProps:ue.fromObject({draggingScale:Nn(e,n),formatter:Pt(Es(e,n))})}}const Rl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!jn.isObject(n))return null;const t=Pe,r=X(e,{x:t.optional.custom(fn),y:t.optional.custom(fn),z:t.optional.custom(fn),w:t.optional.custom(fn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Cl,constraint:n=>Al(n.params,n.initialValue),equals:jn.equals,writer:n=>Bl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof mn))throw L.shouldNeverHappen();return new vr(n.document,{assembly:ki,axes:e.rawValue.getComponents().map((r,h)=>Ml(r,t.components[h])),parser:en,value:e,viewProps:n.viewProps})}};function Dl(n){const e=[],t=ir(n.options);return t&&e.push(t),new dn(e)}const Ul={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const r=X(e,{options:Pe.optional.custom(Ss)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Nr,constraint:n=>Dl(n.params),writer:n=>is},controller:n=>{const e=n.document,t=n.value,r=n.constraint,h=r&&Ot(r,pn);return h?new U(e,{props:new ue({options:h.values.value("options")}),value:t,viewProps:n.viewProps}):new we(e,{parser:M=>M,props:ue.fromObject({formatter:er}),value:t,viewProps:n.viewProps})}},as={monitor:{defaultInterval:200,defaultLineCount:3}},Ti=$("mll");class Ll{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ti()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(Ti("i")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(h=>{h!==void 0&&r.push(this.formatter_(h))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class gr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ll(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Ci=$("sgl");class zl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ci()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(Ci("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class wr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new zl(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Il={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=X(e,{lineCount:Pe.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>qe},controller:n=>{var e;return n.value.rawValue.length===1?new wr(n.document,{formatter:He,value:n.value,viewProps:n.viewProps}):new gr(n.document,{formatter:He,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:as.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},gn=$("grl");class Gl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(gn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(w,"svg");r.classList.add(gn("g")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(r),this.svgElem_=r;const h=e.createElementNS(w,"polyline");this.svgElem_.appendChild(h),this.lineElem_=h;const M=e.createElement("div");M.classList.add(gn("t"),$("tt")()),this.element.appendChild(M),this.tooltipElem_=M,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,r=this.props_.get("minValue"),h=this.props_.get("maxValue"),M=[];this.value.rawValue.forEach((Ye,et)=>{if(Ye===void 0)return;const An=dt(et,0,t,0,e.width),ls=dt(Ye,r,h,e.height,0);M.push([An,ls].join(","))}),this.lineElem_.setAttributeNS(null,"points",M.join(" "));const N=this.tooltipElem_,he=this.value.rawValue[this.cursor_.rawValue];if(he===void 0){N.classList.remove(gn("t","a"));return}const De=dt(this.cursor_.rawValue,0,t,0,e.width),Le=dt(he,r,h,e.height,0);N.style.left=`${De}px`,N.style.top=`${Le}px`,N.textContent=`${this.formatter_(he)}`,N.classList.contains(gn("t","a"))||(N.classList.add(gn("t","a"),gn("t","in")),o(N),N.classList.remove(gn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ol{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=me(-1),this.view=new Gl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!p(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new En(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(dt(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(dt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function xr(n){return"format"in n&&!z(n.format)?n.format:Pt(2)}function Fl(n){var e;return n.value.rawValue.length===1?new wr(n.document,{formatter:xr(n.params),value:n.value,viewProps:n.viewProps}):new gr(n.document,{formatter:xr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:as.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Vl(n){var e,t,r;return new Ol(n.document,{formatter:xr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:as.monitor.defaultLineCount,props:ue.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(r="min"in n.params?n.params.min:null)!==null&&r!==void 0?r:0}),value:n.value,viewProps:n.viewProps})}function Bi(n){return"view"in n&&n.view==="graph"}const $l={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,r=X(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return r?{initialValue:n,params:r}:null},binding:{defaultBufferSize:n=>Bi(n)?64:1,reader:n=>$r},controller:n=>Bi(n.params)?Vl(n):Fl(n)},Nl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Pe,r=X(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new gr(n.document,{formatter:er,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:as.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new wr(n.document,{formatter:er,value:t,viewProps:n.viewProps})}};function ql(n,e){var t;const r=n.accept(e.target.read(),e.params);if(z(r))return null;const h=Pe,M={target:e.target,initialValue:r.initialValue,params:r.params},N=n.binding.reader(M),he=n.binding.constraint?n.binding.constraint(M):void 0,De=me(N(r.initialValue),{constraint:he,equals:n.binding.equals}),Le=new Xs({reader:N,target:e.target,value:De,writer:n.binding.writer(M)}),Ye=h.optional.boolean(e.params.disabled).value,et=h.optional.boolean(e.params.hidden).value,An=n.controller({constraint:he,document:e.document,initialValue:r.initialValue,params:r.params,value:Le.value,viewProps:b.create({disabled:Ye,hidden:et})});return new $e(e.document,{binding:Le,blade:Ge(),props:ue.fromObject({label:"label"in e.params?(t=h.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:An})}function Wl(n,e){return e===0?new Ys:new Zs(n,e??as.monitor.defaultInterval)}function Kl(n,e){var t,r,h;const M=Pe,N=n.accept(e.target.read(),e.params);if(z(N))return null;const he={target:e.target,initialValue:N.initialValue,params:N.params},De=n.binding.reader(he),Le=(r=(t=M.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(N.params))!==null&&r!==void 0?r:1,Ye=M.optional.number(e.params.interval).value,et=new ys({reader:De,target:e.target,ticker:Wl(e.document,Ye),value:ws(Le)}),An=M.optional.boolean(e.params.disabled).value,ls=M.optional.boolean(e.params.hidden).value,cs=n.controller({document:e.document,params:N.params,value:et.value,viewProps:b.create({disabled:An,hidden:ls})});return new nt(e.document,{binding:et,blade:Ge(),props:ue.fromObject({label:"label"in e.params?(h=M.optional.string(e.params.label).value)!==null&&h!==void 0?h:null:e.target.key}),valueController:cs})}class jl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,r){const h=t.read();if(z(h))throw new L({context:{key:t.key},type:"nomatchingcontroller"});const M=this.pluginsMap_.inputs.reduce((N,he)=>N??ql(he,{document:e,target:t,params:r}),null);if(M)return M;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,r){const h=this.pluginsMap_.monitors.reduce((M,N)=>M??Kl(N,{document:e,params:r,target:t}),null);if(h)return h;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((h,M)=>h??xt(M,{document:e,params:t}),null);if(!r)throw new L({type:"nomatchingview",context:{params:t}});return r}createBladeApi(e){if(e instanceof $e)return new rt(e);if(e instanceof nt)return new at(e);if(e instanceof it)return new kt(e,this);const t=this.pluginsMap_.blades.reduce((r,h)=>r??h.api({controller:e,pool:this}),null);if(!t)throw L.shouldNeverHappen();return t}}function Hl(){const n=new jl;return[ec,Tl,Rl,Ul,gl,fl,hl,cl,la,Il,Nl,$l,Be,xn,Ks,bs].forEach(e=>{n.register(e)}),n}function Yl(n){return vn.isObject(n)?new vn(n.x,n.y):new vn}function Zl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function nn(n,e){if(!n)return;const t=[],r=xi(n,e);r&&t.push(r);const h=yi(n);return h&&t.push(h),new dn(t)}function Xl(n,e){return new mn({assembly:Pi,components:[nn("x"in n?n.x:void 0,e.x),nn("y"in n?n.y:void 0,e.y)]})}function Ai(n,e){const[t,r]=n?vl(n):[];if(!z(t)||!z(r))return Math.max(Math.abs(t??0),Math.abs(r??0));const h=$n(n);return Math.max(Math.abs(h)*10,Math.abs(e)*10)}function Jl(n,e){const t=e instanceof mn?e.components[0]:void 0,r=e instanceof mn?e.components[1]:void 0,h=Ai(t,n.x),M=Ai(r,n.y);return Math.max(h,M)}function Mi(n,e){return{baseStep:$n(e),constraint:e,textProps:ue.fromObject({draggingScale:Nn(e,n),formatter:Pt(Es(e,n))})}}function Ql(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ec={id:"input-point2d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=Pe,r=X(e,{expanded:t.optional.boolean,picker:t.optional.custom(jr),x:t.optional.custom(fn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Yl,constraint:n=>Xl(n.params,n.initialValue),equals:vn.equals,writer:n=>Zl},controller:n=>{const e=n.document,t=n.value,r=n.constraint;if(!(r instanceof mn))throw L.shouldNeverHappen();const h="expanded"in n.params?n.params.expanded:void 0,M="picker"in n.params?n.params.picker:void 0;return new Pl(e,{axes:[Mi(t.rawValue.x,r.components[0]),Mi(t.rawValue.y,r.components[1])],expanded:h??!1,invertsY:Ql(n.params),maxValue:Jl(t.rawValue,r),parser:en,pickerLayout:M??"popup",value:t,viewProps:n.viewProps})}};class Ri extends d{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}class Di extends d{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}class Ui extends d{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new T(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,h=>{r(h.event)}),this}}const tc=function(){return{id:"list",type:"blade",accept(n){const e=Pe,t=X(n,{options:e.required.custom(Ss),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new pn(Hr(n.params.options)),t=me(n.params.value,{constraint:e}),r=new U(n.document,{props:new ue({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Rt(n.document,{blade:n.blade,props:ue.fromObject({label:n.params.label}),valueController:r})},api(n){return!(n.controller instanceof Rt)||!(n.controller.valueController instanceof U)?null:new Ri(n.controller)}}}();function nc(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function sc(n,e){n.forEach(t=>{const r=e[t.target.presetKey];r!==void 0&&t.writer(t.target,t.reader(r))})}class rc extends mt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find($e).map(r=>r.binding);sc(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find($e).map(t=>t.binding.target);return nc(e)}refresh(){this.controller_.rackController.rack.find($e).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(nt).forEach(e=>{e.binding.read()})}}class ic extends on{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const oc={id:"slider",type:"blade",accept(n){const e=Pe,t=X(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const r=(e=n.params.value)!==null&&e!==void 0?e:0,h=new jt({max:n.params.max,min:n.params.min}),M=new rr(n.document,{baseStep:1,parser:en,sliderProps:new ue({maxValue:h.values.value("max"),minValue:h.values.value("min")}),textProps:ue.fromObject({draggingScale:Nn(void 0,r),formatter:(t=n.params.format)!==null&&t!==void 0?t:Xo}),value:me(r,{constraint:h}),viewProps:n.viewProps});return new Rt(n.document,{blade:n.blade,props:ue.fromObject({label:n.params.label}),valueController:M})},api(n){return!(n.controller instanceof Rt)||!(n.controller.valueController instanceof rr)?null:new Di(n.controller)}},ac=function(){return{id:"text",type:"blade",accept(n){const e=Pe,t=X(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new we(n.document,{parser:n.params.parse,props:ue.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:me(n.params.value),viewProps:n.viewProps});return new Rt(n.document,{blade:n.blade,props:ue.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Rt)||!(n.controller.valueController instanceof we)?null:new Ui(n.controller)}}}();function lc(n){const e=n.createElement("div");return e.classList.add($("dfw")()),n.body&&n.body.appendChild(e),e}function Li(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const r=n.createElement("style");r.dataset.tpStyle=e,r.textContent=t,n.head.appendChild(r)}class cc extends rc{constructor(e){var t,r;const h=e??{},M=(t=h.document)!==null&&t!==void 0?t:c(),N=Hl(),he=new ic(M,{expanded:h.expanded,blade:Ge(),props:ue.fromObject({title:h.title}),viewProps:b.create()});super(he,N),this.pool_=N,this.containerElem_=(r=h.container)!==null&&r!==void 0?r:lc(M),this.containerElem_.appendChild(this.element),this.doc_=M,this.usesDefaultWrapper_=!h.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw L.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw L.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(r=>{this.pool_.register(r),this.embedPluginStyle_(r)})}embedPluginStyle_(e){e.css&&Li(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Li(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[oc,tc,bs,ac]})}}const uc=new _("3.1.10");a.BladeApi=d,a.ButtonApi=Y,a.FolderApi=mt,a.InputBindingApi=rt,a.ListApi=Ri,a.MonitorBindingApi=at,a.Pane=cc,a.SeparatorApi=Kt,a.SliderApi=Di,a.TabApi=Qn,a.TabPageApi=zn,a.TextApi=Ui,a.TpChangeEvent=T,a.VERSION=uc,Object.defineProperty(a,"__esModule",{value:!0})})})(Cr,Cr.exports);var ko=Cr.exports;const eu=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  // 1 = anisotropic fetch (render mip_mode 2): the per-surfel slot carries the tile's LEVEL CAP instead of a level.
  aniso         : u32,
  _p2 : u32,
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
        if (atlas_params.mip_count > 1u || atlas_params.aniso != 0u) && w_span >= 2.0 && h_span >= 2.0 {
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
            // Anisotropic mode: the hardware picks the level per pixel; hand the fragment the cap only.
            lod = select(lod, lmax, atlas_params.aniso != 0u);
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
`,Rs=`// 2DGS render — vertex+fragment.
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
    pix : vec2<f32>,   // fragment position (the anisotropic fetch re-intersects the two neighbouring pixels)
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
        return ShadeGeom(s_t, a_t, in.depth_plane.z, false, pos);
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
        return ShadeGeom(vec2<f32>(0.0), alpha_e, in.depth_plane.z, false, pos);
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

    return ShadeGeom(s, b, depth, rho3d > rho2d, pos);
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
        var aniso_dx = vec2<f32>(0.0);   // mip_mode 2: atlas-uv footprint handed to textureSampleGrad
        var aniso_dy = vec2<f32>(0.0);
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
        } else if tex_params.mip_mode == 2u {
            // Anisotropic filtering (mip_mode 2, ?mipbias=aniso). The pixel's footprint on the tile — the
            // ray/plane uv at the two neighbouring pixels, scaled to texels — goes to the sampler as explicit
            // gradients: the hardware picks the mip level from the SHORT axis and takes up to 16 taps along the
            // LONG one (the long axis of a grazing surfel is what shimmers under level-0 bilinear). Works on
            // bundles without a chain too (level 0, taps only). in.lod carries the tile's exact-box-filter
            // level cap in this mode (preprocess_2dgs); the footprint is shrunk so the HW level never exceeds
            // it or spans more than the tile, and the clamp range is narrowed by the footprint + the bilinear
            // reach of that level, so no tap reads a neighbouring tile. Mirrors vk_raster --aniso (splat.frag ANISO).
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            var tdx  = in.uv_scale * dsdx * dims;                              // texels per pixel step
            var tdy  = in.uv_scale * dsdy * dims;
            let tile = 2.0 * abs(in.uv_scale) * tex_params.uv_extent * dims;   // tile size in texels
            let hx   = 0.5 * (abs(tdx.x) + abs(tdy.x));                        // footprint half extents
            let hy   = 0.5 * (abs(tdx.y) + abs(tdy.y));
            let pmx  = max(length(tdx), length(tdy));
            let pmn  = min(length(tdx), length(tdy));
            let lodlen = max(pmn, pmx / 16.0);                                 // what the HW derives the level from
            var sc   = min(1.0, exp2(in.lod) / max(lodlen, 1e-6));
            sc = max(0.0, min(sc, 0.5 * min((tile.x - 1.0) / max(hx, 1e-6), (tile.y - 1.0) / max(hy, 1e-6))));
            tdx *= sc; tdy *= sc;
            let mg   = (vec2<f32>(hx, hy) * sc + 0.5 * (max(lodlen * sc, 1.0) - 1.0)) / dims;
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 / dims - mg, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
            aniso_dx = tdx / dims; aniso_dy = tdy / dims;
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        var rgba : vec4<f32>;
        if tex_params.mip_mode == 2u && tex_params.probe_mode == 0u {
            rgba = textureSampleGrad(atlas, atlas_samp, uv, layer, aniso_dx, aniso_dy);
        } else {
            let lod_eff = select(0.0, in.lod, tex_params.mip_mode != 0u);
            rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        }
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
// Slope source (pipeline constant): 0 = green-channel gather of the colour atlas (no data, FD + λ·slope in the
// upscaler), 1 = P field in the alpha of a BC7 sidecar (vk_raster --grad 5), 2 = BC5 slope sidecar (dY/du, dY/dv per
// texel, vk_raster --grad 4). 1/2 are finetuned for slope-only Hermite and follow the Vulkan path exactly: uv clamped
// to the tile's texel-centre range, no magnification gate, luminance-weighted ReLU gate (in fs_slope).
override SLOPE_SRC : u32 = 0u;
@group(3) @binding(6) var                slope_tex    : texture_2d_array<f32>;
@group(3) @binding(7) var<uniform>       slope_params : vec4<f32>;   // scale_u, off_u, scale_v, off_v (P: scale_p in .x)

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
    let k    = in.uv_scale * dims;                      // texels per unit of surfel uv
    var dPu : f32; var dPv : f32;
    if SLOPE_SRC == 0u {
        let uv   = in.uv_base + g.s * in.uv_scale;
        // Only where the texture is MAGNIFIED: with more than ~1.5 texels per low-res pixel the bilinear slope of
        // the 2x2 footprint says nothing about the image (minified / grazing surfels) and overshoots.
        let tpp  = max(length(abs(k) * dsdx), length(abs(k) * dsdy));
        if tpp > 1.5 { return vec2<f32>(0.0); }
        // The gathered 2x2 footprint must stay inside this surfel's tile (else it mixes in a neighbour tile).
        let half = abs(in.uv_scale) * tex_params.uv_extent - 1.0 / dims;
        if any(abs(uv - in.uv_base) > half) { return vec2<f32>(0.0); }
        let f    = fract(uv * dims - 0.5);                 // position inside the gathered 2x2 footprint
        let g4   = textureGather(1, atlas, atlas_samp, uv, i32(in.layer));   // x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0)
        dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * tex_params.atlas_scale;   // per texel, residual units
        dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * tex_params.atlas_scale;
    } else {
        // Same tile clamp as shade_color (CUDA / vk_raster: au in [u0, u0+w-1]), level 0.
        let hw = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 / dims, vec2<f32>(0.0));
        let uv = clamp(in.uv_base + g.s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        if SLOPE_SRC == 1u {
            let f  = fract(uv * dims - 0.5);
            let g4 = textureGather(3, slope_tex, atlas_samp, uv, i32(in.layer));
            dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * slope_params.x;
            dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * slope_params.x;
        } else {
            let t = textureSampleLevel(slope_tex, atlas_samp, uv, i32(in.layer), 0.0).rg;
            dPu = t.x * slope_params.x + slope_params.y;
            dPv = t.y * slope_params.z + slope_params.w;
        }
    }
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
    var sl = tex_slope(sp, g, in.position.xy);
    if SLOPE_SRC != 0u {   // channels clamped by the outer ReLU carry no slope (mode 0: rgb == 0 there)
        sl *= dot(vec3<f32>(0.299, 0.587, 0.114), select(vec3<f32>(0.0), vec3<f32>(1.0), rgb > vec3<f32>(0.0)));
    }
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
`,tu=`const WG_SIZE = 256u;
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
}`,nu=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,su=`// shader implementing gpu radix sort.

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
`,ru=`// shader implementing gpu radix sort.

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
`,iu=`// ============================================================================
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
}`,To=32,Br=1,Ar=2,Yi=4,Zi=512,Xi=1024,Ji=2048,Qi=4096,eo=8192,ou=0,Ht=new ArrayBuffer(To),bt={canvas_size:new Uint32Array(Ht,0,2),accel_flags:new Uint32Array(Ht,8,1),feature_mode:new Uint32Array(Ht,12,1),gaussian_scaling:new Float32Array(Ht,16,1),sh_bias:new Float32Array(Ht,20,1),color_K:new Uint32Array(Ht,24,1),walltime:new Float32Array(Ht,28,1)};function au(i){bt.canvas_size[0]=i.width>>>0,bt.canvas_size[1]=i.height>>>0,bt.accel_flags[0]=(i.accel_flags??Br|Ar)>>>0,bt.feature_mode[0]=(i.feature_mode??ou)>>>0,bt.gaussian_scaling[0]=i.gaussian_scaling??1,bt.sh_bias[0]=i.sh_bias??.5,bt.color_K[0]=(i.color_K??0)>>>0,bt.walltime[0]=i.walltime??0}function Gr(i,s){i.queue.writeBuffer(s,0,Ht)}function Ln(i,s,a){a&&i&&s&&Gr(i,s)}function wn(i,s,a,_,d=!0){bt.canvas_size[0]=i>>>0,bt.canvas_size[1]=s>>>0,Ln(a??null,_??null,d)}function to(i,s,a,_=!0){bt.gaussian_scaling[0]=i,Ln(s??null,a??null,_)}function no(i,s,a,_=!0){bt.sh_bias[0]=i,Ln(s??null,a??null,_)}function lu(i,s,a,_=!0){bt.color_K[0]=i>>>0,Ln(s??null,a??null,_)}function cu(i,s,a,_=!0){bt.feature_mode[0]=i>>>0,Ln(s??null,a??null,_)}function uu(i){const s=new Float32Array(1),a=new Uint32Array(s.buffer);s[0]=i;const _=a[0],d=_>>>16&32768,g=(_>>>23&255)-127+15;return g<=0?d:g>=31?d|31744:d|g<<10|_>>>13&1023}function so(i,s=.3,a,_,d=!0){let g=bt.accel_flags[0]&65535&~eo;i&&(g=g|eo|uu(s)<<16),bt.accel_flags[0]=g>>>0,Ln(a??null,_??null,d)}function Hn(i,s,a,_=!0){let d=bt.accel_flags[0];i.oac!==void 0&&(d=i.oac?d|Br:d&~Br),i.spr!==void 0&&(d=i.spr?d|Ar:d&~Ar),i.bfc!==void 0&&(d=i.bfc?d|Yi:d&~Yi),i.hypLegacy!==void 0&&(d=i.hypLegacy?d|Zi:d&~Zi),i.centred!==void 0&&(d=i.centred?d|Qi:d&~Qi),i.raysplat!==void 0&&(d=i.raysplat?d|Ji:d&~Ji),i.legacyPos!==void 0&&(d=i.legacyPos?d|Xi:d&~Xi),bt.accel_flags[0]=d>>>0,Ln(s??null,a??null,_)}const du=256;function us(i,s){const a=[],_=[];let d=!0;for(const g of i.split(`
`)){const T=g.trim();let S;if((S=/^\/\/#if\s+(\w+)\s*$/.exec(T))!==null){const C=!!s[S[1]];_.push({parent:d,taken:C}),d=d&&C;continue}if(/^\/\/#else\s*$/.test(T)){const C=_[_.length-1];if(C===void 0)throw new Error("preprocessWGSL: #else without #if");d=C.parent&&!C.taken;continue}if(/^\/\/#endif\s*$/.test(T)){const C=_.pop();if(C===void 0)throw new Error("preprocessWGSL: #endif without #if");d=C.parent;continue}d&&a.push(g)}if(_.length!==0)throw new Error("preprocessWGSL: unterminated #if");return a.join(`
`)}const pu=To,hu=8,fu=96,_u=12,Or=8,sn=1<<Or,Rn=256,Is=32/Or,mu=0,yr=Is&1;function ro(i,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function vu(i,s){const a=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),_=i.createPipelineLayout({bindGroupLayouts:[a]}),d=g=>i.createComputePipeline({layout:_,compute:{module:s,entryPoint:g,constants:{WG_SIZE:Rn}}});return{l0TileScan:d("prefix_l0_tile_scan"),l1TileScanOnL0:d("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:d("prefix_scan_l1_sums"),addL1ToL0:d("prefix_add_l1_to_l0_offsets"),addL0ToElems:d("prefix_add_l0_to_elements"),computeDigitBase:d("compute_digit_base"),prefixBindGroupLayout:a}}function bu(i,s,a){const _=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),d=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),g=i.createPipelineLayout({bindGroupLayouts:[_]}),T=i.createPipelineLayout({bindGroupLayouts:[d]}),S=[];for(let C=0;C<Is;C++){const R={PASS_ID:C+mu,RS_RADIX_LOG2:Or,RS_RADIX_SIZE:sn};S.push({localHistogram:i.createComputePipeline({layout:g,compute:{module:s,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:i.createComputePipeline({layout:T,compute:{module:a,entryPoint:"scatter_elements",constants:R}})})}return{passes:S,localHistogramBindGroupLayout:_,scatterBindGroupLayout:d}}function gu(i){const s=i.createShaderModule({label:"local histogram",code:ru}),a=i.createShaderModule({label:"scatter",code:su}),_=i.createShaderModule({label:"blelloch prefix",code:iu}),d=vu(i,_),g=bu(i,s,a);return{localHistogramBindGroupLayout:g.localHistogramBindGroupLayout,scatterBindGroupLayout:g.scatterBindGroupLayout,passes:g.passes,hierarchicalBlelloch:d}}function io(i){const s=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),a=s.createView({dimension:"2d-array"}),_=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),d=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),g=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(g,0,new ArrayBuffer(32));const T={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:a,sampler:_,rectsBuffer:d,texParamsBuffer:g,meta:T}}const Yn=class Yn{constructor(s,a,_,d,g,T=null,S={}){D(this,"device");D(this,"pc");D(this,"presentationFormat");D(this,"camera_buffer");D(this,"render_settings_buffer");D(this,"draw_indirect_buffer");D(this,"splat_2d_buffer");D(this,"querySet");D(this,"resolveBuffer");D(this,"resultBuffer");D(this,"queriesPerFrame",hu);D(this,"queryCapacityFrames",200);D(this,"sort_prefixBindGroup");D(this,"sort_pipelines");D(this,"sort_localHistogramBindGroups");D(this,"sort_scatterBindGroups");D(this,"lastFrame",0);D(this,"frameCount",0);D(this,"preprocessPipeline");D(this,"cullPipeline");D(this,"renderPipeline");D(this,"indirectPipeline");D(this,"renderShaderModule");D(this,"betaKernel",1);D(this,"fetchById");D(this,"octBound");D(this,"acc16");D(this,"accTexture",null);D(this,"accView",null);D(this,"accW",0);D(this,"accH",0);D(this,"legacyRenderPipeline",null);D(this,"varyingsPipeline",null);D(this,"msaa",!1);D(this,"msaaTexture",null);D(this,"msaaView",null);D(this,"msaaW",0);D(this,"msaaH",0);D(this,"msaaPipelines",new Map);D(this,"mkVariant",null);D(this,"slopeTarget",null);D(this,"slopeSource",0);D(this,"slopePipelines",new Map);D(this,"rendererBgls",[]);D(this,"betaKernelConst",1);D(this,"slopeBgl",null);D(this,"slopeBg",null);D(this,"slopeDummy",null);D(this,"legacyRenderer",!1);D(this,"accResolvePipeline",null);D(this,"accResolveBgl",null);D(this,"accResolveBindGroup",null);D(this,"twoPass",!1);D(this,"twoPassThresh",.5);D(this,"twoPassParamsBuffer",null);D(this,"twoPassBgl",null);D(this,"twoPassBg",null);D(this,"twoPassSplatsBgl",null);D(this,"twoPassSplatsBg",null);D(this,"twoPassModules",new Map);D(this,"twoPassPipelines",new Map);D(this,"twoPassDepth",null);D(this,"twoPassDepthView",null);D(this,"twoPassW",0);D(this,"twoPassH",0);D(this,"overdrawMode",0);D(this,"overdrawMax",48);D(this,"ovTexture",null);D(this,"ovView",null);D(this,"ovW",0);D(this,"ovH",0);D(this,"ovParamsBuffer",null);D(this,"ovResolvePipeline",null);D(this,"ovResolveBgl",null);D(this,"ovResolveBg",null);D(this,"ovStatsPipeline",null);D(this,"ovStatsBgl",null);D(this,"ovStatsBg",null);D(this,"ovStatsBuffer",null);D(this,"ovReadback",null);D(this,"ovReadState","idle");D(this,"ovLastStats",null);D(this,"ovPipelines",new Map);D(this,"renderSettingsBgl");D(this,"preprocessBgl2");D(this,"renderSplatsBgl");D(this,"atlasBgl");D(this,"sort_info_buffer");D(this,"sort_ping_pong");D(this,"crsBg");D(this,"gsBg");D(this,"cullBg2");D(this,"preprocessBg1");D(this,"renderSplatsBindGroup");D(this,"renderSettingsBindGroup");D(this,"atlasBindGroup");D(this,"indirectBindGroup");D(this,"sh_solvers_buffer");D(this,"bfcParamsBuffer");D(this,"bfcBindGroupLayout");D(this,"bfcBindGroup");D(this,"staticSortKeys",null);D(this,"wideFrustum",!1);D(this,"staticKeysBuffer",null);D(this,"bgColor",[0,0,0,0]);D(this,"showPerfDialogNext",!1);D(this,"requestReorderNextFrame",!1);D(this,"reorderInFlight",!1);D(this,"downloadOnceNextRead",!1);D(this,"downloadOnceFileName","fps_metrics");D(this,"allFrameTimes",[]);D(this,"lastStageBreakdownMs",null);D(this,"timeQueryEnabled");D(this,"atlas");D(this,"atlasParamsBuffer");D(this,"_atlasEnabled",!0);D(this,"mipLodBias",1);D(this,"_mipMode",1);D(this,"preFrame",null);this.fetchById=S.fetchById??!0,this.staticSortKeys=S.staticSortKeys??null,this.wideFrustum=S.wideFrustum??!1,this.octBound=S.octBound??!1,this.acc16=S.acc16??!1,ft(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const C=g.includes("timestamp-query");this.timeQueryEnabled=C,C&&ft("⏰ using timestamp-query"),this.pc=s,this.device=a,this.presentationFormat=_,this.camera_buffer=d,this.atlas=T??io(a),this.atlasParamsBuffer=a.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),a.addEventListener("uncapturederror",_e=>{console.error("A WebGPU error was not captured:",_e.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+Rn-1)/Rn)+1)*Rn,G=Math.ceil(R/Rn);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const z=a.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=gu(a);const V=[ro(R,a),ro(R,a)],q=a.createBuffer({label:"workgroup histograms",size:G*sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=a.createBuffer({label:"workgroup prefixes",size:G*sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=a.createBuffer({label:"digit base",size:sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),O=Math.ceil(G/Rn),Y=Math.ceil(O/Rn),j=a.createBuffer({label:"prefix l0 sums",size:O*sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=a.createBuffer({label:"prefix l0 offsets",size:O*sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=a.createBuffer({label:"prefix l1 sums",size:Y*sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=a.createBuffer({label:"prefix l1 offsets",size:Y*sn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=a.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:Z}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:ee}},{binding:5,resource:{buffer:$}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:L}}]}),this.sort_localHistogramBindGroups=[a.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:V[0].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]}),a.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:V[1].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]})],this.sort_scatterBindGroups=[a.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:V[0].sort_depths_buffer}},{binding:3,resource:{buffer:V[1].sort_depths_buffer}},{binding:4,resource:{buffer:V[0].sort_indices_buffer}},{binding:5,resource:{buffer:V[1].sort_indices_buffer}},{binding:6,resource:{buffer:Z}}]}),a.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:V[1].sort_depths_buffer}},{binding:3,resource:{buffer:V[0].sort_depths_buffer}},{binding:4,resource:{buffer:V[1].sort_indices_buffer}},{binding:5,resource:{buffer:V[0].sort_indices_buffer}},{binding:6,resource:{buffer:Z}}]})],this.sort_info_buffer=z,this.sort_ping_pong=V;const be=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),le=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ce=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:be,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:le,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ce,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=de,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const ye=this.device.createShaderModule({code:tu});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ye,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const Re=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ue=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Zn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),Re.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ue.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:Re}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ue});const pe=this.device.createShaderModule({code:us(nu,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[be,le,ce,this.bfcBindGroupLayout]}),compute:{module:pe,entryPoint:"surfel_cull"}});const Q=this.device.createShaderModule({code:eu});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[be,de]}),compute:{module:Q,entryPoint:"preprocess"}});const Te=this.device.createShaderModule({label:"render_2dgs",code:us(Rs,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Te.getCompilationInfo().then(_e=>{_e.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),_e.messages.forEach(Me=>{(Me.type==="error"?console.error:Me.type==="warning"?console.warn:console.log)(`${Me.type} (line ${Me.lineNum}:${Me.linePos}): ${Me.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const xe=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),me=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ue=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:me,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ie=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Ee=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[xe,ue,ie]}),vertex:{module:Te,entryPoint:"vs_main"},fragment:{module:Te,entryPoint:"fs_main",constants:{BETA_KERNEL:Ee},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ze=(_e,Me,Pe,X=1)=>{const oe=this.device.createShaderModule({label:`render_2dgs (${_e})`,code:us(Rs,{FETCH_BY_ID:Me,OCT:Pe})});return this.device.createRenderPipeline({label:`render_2dgs_${_e}`,multisample:{count:X},layout:this.device.createPipelineLayout({bindGroupLayouts:[xe,ue,ie]}),vertex:{module:oe,entryPoint:"vs_main"},fragment:{module:oe,entryPoint:"fs_main",constants:{BETA_KERNEL:Ee},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[xe,ue,ie],this.betaKernelConst=Ee,this.varyingsPipeline=ze("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ze("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=ze,this.device.popErrorScope().then(_e=>{_e?console.error("[render_2dgs] pipeline create validation error:",_e.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:xe,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ue,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[yr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ie,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Te,this.betaKernel=Ee,this.renderSettingsBgl=xe,this.renderSplatsBgl=ue,this.atlasBgl=ie}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setSlopeAtlas(s,a){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),s||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),s=this.slopeDummy.createView({dimension:"2d-array"}));const _=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(_,0,new Float32Array(a)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:s},{binding:7,resource:{buffer:_}}]})}slopePipelineFor(s,a){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const _=`${s?1:0}${a?1:0}${this.slopeSource}`;let d=this.slopePipelines.get(_);if(!d){const g=this.device.createShaderModule({label:`render_2dgs slope (${_})`,code:us(Rs,{FETCH_BY_ID:s,OCT:a})}),T={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};d=this.device.createRenderPipeline({label:`render_2dgs_slope_${_}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:T},{format:"rgba16float",blend:T}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(_,d)}return d}setBfcParams(s,a){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,a[0],a[1],a[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var d;const s=new ArrayBuffer(32),a=new Uint32Array(s),_=new Float32Array(s);a[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,a[1]=this.atlas.meta.layer_h|0,_[2]=this.atlas.meta.uv_extent||0,a[3]=this.atlas.meta.probe_mode|0||0,a[4]=this._mipMode!==0?Math.max(1,((d=this.atlas.meta.mip_bytes)==null?void 0:d.length)??1):1,_[5]=this.mipLodBias,a[6]=this._mipMode===2?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}setMsaa(s){s!==this.msaa&&(this.msaa=s,ft(`[render_2dgs] MSAA 4x: ${s?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(s,a){const _=`${s?"byid":"var"}_${a?"oct":"quad"}`;let d=this.msaaPipelines.get(_);return d||(d=this.mkVariant(`msaa4_${_}`,s,a,4),this.msaaPipelines.set(_,d)),d}ensureMsaaResources(s,a){var _;this.msaaTexture!==null&&this.msaaW===s&&this.msaaH===a||((_=this.msaaTexture)==null||_.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:s,height:a},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=s,this.msaaH=a)}setTwoPass(s){s!==this.twoPass&&(this.twoPass=s,ft(`[render_2dgs] two-pass layer path: ${s?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(s){this.twoPassThresh=Math.min(.999,Math.max(.001,s)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[yr].sort_indices_buffer}}]}))}ensureTwoPassResources(s,a){var _;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===s&&this.twoPassH===a)&&((_=this.twoPassDepth)==null||_.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=s,this.twoPassH=a)}renderModuleFor(s,a,_){const d=`${s?"byid":"vary"}_${a?"oct":"quad"}_${_?"hwz":"z0"}`,g=this.twoPassModules.get(d);if(g!==void 0)return g;const T=this.device.createShaderModule({label:`render_2dgs (${d})`,code:us(Rs,{FETCH_BY_ID:s,OCT:a,HW_DEPTH:_})});return T.getCompilationInfo().then(S=>{for(const C of S.messages)C.type==="error"&&console.error(`[render_2dgs ${d}] (line ${C.lineNum}:${C.linePos}): ${C.message}`)}),this.twoPassModules.set(d,T),T}twoPassPipelinesFor(s,a){const _=`${s?"byid":"vary"}_${a?"oct":"quad"}`,d=this.twoPassPipelines.get(_);if(d!==void 0)return d;const g=this.renderModuleFor(s,a,!0),T=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const S=this.device.createRenderPipeline({label:`render_2dgs_opaque_${_}`,layout:T,vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),C=this.device.createRenderPipeline({label:`render_2dgs_front_${_}`,layout:T,vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:Yn.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(G=>{G?console.error(`[render_2dgs twopass ${_}] pipeline validation error:`,G.message):console.log(`[render_2dgs twopass ${_}] pipelines created OK`)});const R={opaque:S,front:C};return this.twoPassPipelines.set(_,R),R}setOverdrawMode(s){s!==this.overdrawMode&&(this.overdrawMode=s,this.ovLastStats=null,ft(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][s]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(s){this.overdrawMax=Math.max(1,s),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(s,a){var _;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const d=`
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
}`,g=this.device.createShaderModule({label:"overdraw_resolve",code:d});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const T=`
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
}`,S=this.device.createShaderModule({label:"overdraw_stats",code:T});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:S,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===s&&this.ovH===a||((_=this.ovTexture)==null||_.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=s,this.ovH=a)}ovPipelineFor(s,a,_){const d=`${s}_${a?"byid":"vary"}_${_?"oct":"quad"}`,g=this.ovPipelines.get(d);if(g!==void 0)return g;const T=s.startsWith("tp_"),S=this.renderModuleFor(a,_,T),C=this.device.createPipelineLayout({bindGroupLayouts:T?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),R={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[s];let G;s==="tp_raster"?G={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:s==="tp_opaque"?G={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:s==="tp_front"&&(G={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const z=this.device.createRenderPipeline({label:`render_2dgs_${d}`,layout:C,vertex:{module:S,entryPoint:"vs_main"},fragment:{module:S,entryPoint:R,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:Yn.BLEND_ADD}]},depthStencil:G,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(V=>{V&&console.error(`[render_2dgs overdraw ${d}] pipeline validation error:`,V.message)}),this.ovPipelines.set(d,z),z}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const s=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const a=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:s[0]/a,meanCovered:s[2]>0?s[0]/s[2]:0,max:s[1],coveredFrac:s[2]/a}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(s,a){var _;if(this.accResolvePipeline===null){const d=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,g=this.device.createShaderModule({label:"acc16_resolve",code:d});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===a||((_=this.accTexture)==null||_.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=a)}setAtlas(s){this.atlas=s??io(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&Ds(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,Ds(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,ft(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,Hn({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const a=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([a])),ft(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this.atlas.sampler}setMipMode(s){if(this.atlas.meta.format===4294967295)return;const a=this._mipMode;this._mipMode=typeof s=="boolean"?s?1:0:s,a===2!=(this._mipMode===2)&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),Ds(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const a=Math.max(0,Math.min(s,this.pc.num_points)),_=a*Uint32Array.BYTES_PER_ELEMENT;if(_===0){console.log("[DEBUG] No indices to read.");return}const d=this.device.createBuffer({size:_,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),g=this.device.createCommandEncoder();g.copyBufferToBuffer(this.sort_ping_pong[yr].sort_indices_buffer,0,d,0,_),this.device.queue.submit([g.finish()]),await d.mapAsync(GPUMapMode.READ);const T=new Uint32Array(d.getMappedRange());console.log("[DEBUG] Sorted indices (first",a,"):",Array.from(T)),d.unmap()}writeSortKeys(s){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,s)}frame(s,a,_=!0){this.preFrame&&this.preFrame();const g=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,T=_&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const S={label:"cull"};T&&(S.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+0,endOfPassWriteIndex:g+1});const C=s.beginComputePass(S);C.setPipeline(this.cullPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.gsBg),C.setBindGroup(2,this.cullBg2),C.setBindGroup(3,this.bfcBindGroup);const R=Math.ceil(this.pc.num_points/du);C.dispatchWorkgroups(R,1,1),C.end()}{const S=s.beginComputePass({label:"calculate indirect dispatch"});S.setPipeline(this.indirectPipeline),S.setBindGroup(0,this.indirectBindGroup),S.dispatchWorkgroups(1,1,1),S.end()}{const S={label:"preprocess"};T&&(S.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+2,endOfPassWriteIndex:g+3});const C=s.beginComputePass(S);C.setPipeline(this.preprocessPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.preprocessBg1),C.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),C.end()}for(let S=0;S<Is;S++){const C=S&1,R=this.sort_pipelines.passes[S],G=this.sort_localHistogramBindGroups[C],z=this.sort_scatterBindGroups[C];{const V={label:`upsweep_round${S}`};T&&S==0&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+4});const q=s.beginComputePass(V);q.setPipeline(R.localHistogram),q.setBindGroup(0,G),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}{const V=s.beginComputePass({label:`prefix_round${S} - l0TileScan`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=s.beginComputePass({label:`prefix_round${S} - l1TileScanOnL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=s.beginComputePass({label:`prefix_round${S} - l1ScanSums`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,sn,1),V.end()}{const V=s.beginComputePass({label:`prefix_round${S} - addL1ToL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=s.beginComputePass({label:`prefix_round${S} - addL0ToElems`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=s.beginComputePass({label:`prefix_round${S} - computeDigitBase`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,1,1),V.end()}{const V={label:`scatter_round${S}`};T&&S==Is-1&&(V.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+5});const q=s.beginComputePass(V);q.setPipeline(R.scatterElements),q.setBindGroup(0,z),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}}{const S=bt.canvas_size[0],C=bt.canvas_size[1],R=this.overdrawMode!==0;let G=a;R?(this.ensureOverdrawResources(S,C),G=this.ovView):this.acc16&&(this.ensureAccResources(S,C),G=this.accView);const z=R?{r:0,g:0,b:0,a:0}:this.bgColor,V=R||this.acc16,q=this.fetchById&&!this.legacyRenderer,Z=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(S,C);let L,O;if(R)this.overdrawMode===1?(L=this.ovPipelineFor("tp_opaque",q,Z),O=this.ovPipelineFor("tp_front",q,Z)):L=O=this.ovPipelineFor("tp_raster",q,Z);else{const ae=this.twoPassPipelinesFor(q,Z);L=ae.opaque,O=ae.front}const Y={label:"render_opaque_layer",colorAttachments:[{view:G,loadOp:"clear",storeOp:"store",clearValue:z}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};T&&(Y.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+6});const j=s.beginRenderPass(Y);j.setPipeline(L),j.setBindGroup(0,this.renderSettingsBindGroup),j.setBindGroup(1,this.twoPassSplatsBg),j.setBindGroup(2,this.atlasBindGroup),j.setBindGroup(3,this.twoPassBg),j.drawIndirect(this.draw_indirect_buffer,0),j.end();const ee={label:"render_front",colorAttachments:[{view:G,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};T&&!V&&(ee.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+7});const $=s.beginRenderPass(ee);$.setPipeline(O),$.setBindGroup(0,this.renderSettingsBindGroup),$.setBindGroup(1,this.twoPassSplatsBg),$.setBindGroup(2,this.atlasBindGroup),$.setBindGroup(3,this.twoPassBg),$.drawIndirect(this.draw_indirect_buffer,0),$.end()}else{const L=this.msaa&&!R&&!this.acc16;L&&this.ensureMsaaResources(S,C);const O=this.slopeTarget!==null&&!L&&!R&&!this.acc16&&!this.legacyRenderer,Y=[L?{view:this.msaaView,resolveTarget:G,loadOp:"clear",storeOp:"discard",clearValue:z}:{view:G,loadOp:"clear",storeOp:"store",clearValue:z}];O&&Y.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}});const j={label:"render",colorAttachments:Y};T&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+6,...V?{}:{endOfPassWriteIndex:g+7}});const ee=s.beginRenderPass(j);R?(ee.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",q,Z)),ee.setBindGroup(1,this.twoPassSplatsBg)):O?(ee.setPipeline(this.slopePipelineFor(this.fetchById,Z)),ee.setBindGroup(1,this.renderSplatsBindGroup),ee.setBindGroup(3,this.slopeBg)):(ee.setPipeline(L?this.msaaPipelineFor(q,Z):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),ee.setBindGroup(1,this.renderSplatsBindGroup)),ee.setBindGroup(0,this.renderSettingsBindGroup),ee.setBindGroup(2,this.atlasBindGroup),ee.drawIndirect(this.draw_indirect_buffer,0),ee.end()}if(R){s.clearBuffer(this.ovStatsBuffer,0,16);const L=s.beginComputePass({label:"overdraw_stats"});L.setPipeline(this.ovStatsPipeline),L.setBindGroup(0,this.ovStatsBg),L.dispatchWorkgroups(Math.ceil(S/16),Math.ceil(C/16),1),L.end();const O={label:"overdraw_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};T&&(O.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+7});const Y=s.beginRenderPass(O);Y.setPipeline(this.ovResolvePipeline),Y.setBindGroup(0,this.ovResolveBg),Y.draw(3),Y.end(),this.ovReadState==="idle"&&(s.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const L={label:"acc16_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};T&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+7});const O=s.beginRenderPass(L);O.setPipeline(this.accResolvePipeline),O.setBindGroup(0,this.accResolveBindGroup),O.draw(3),O.end()}}this.frameCount++}async readPerfMetrics(s){const a=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const _=this.device.createCommandEncoder({label:"timestamp resolve encoder"});_.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),_.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([_.finish()]),await this.device.queue.onSubmittedWorkDone();const d=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const g=new BigInt64Array(this.resultBuffer.getMappedRange()),T=Math.min(this.frameCount,this.queryCapacityFrames),S=(this.lastFrame+this.frameCount-T)%this.queryCapacityFrames,C=Array.from({length:d.length},()=>[]);let R=0;for(let Y=0;Y<T;Y++){const j=(S+Y)%this.queryCapacityFrames,ee=j*this.queriesPerFrame;let $=!0;for(let ae=0;ae<d.length;ae++){const[be,le,ce]=d[ae];if(g[ee+ce]===0n||g[ee+le]===0n||g[ee+le]<g[ee+ce]){$=!1;break}}if(!$){!a&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let ae=0;ae<d.length;ae++){const[be,le,ce]=d[ae],de=Number(g[ee+ce]),ye=Number(g[ee+le]);C[ae].push((ye-de)/1e6)}}if(R===0){this.resultBuffer.unmap(),a||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...C[0]);const G=[];let z=0,V=0,q=0;for(let Y=0;Y<d.length;Y++){const j=d[Y][0],ee=C[Y];let $=0;if(j==="Total"){const ae=this.allFrameTimes;$=ae.reduce((ce,de)=>ce+de,0)/ae.length;const be=[...ae].sort((ce,de)=>ce-de);z=be[Math.floor(be.length*.99)]||0;const le=ae.reduce((ce,de)=>ce+Math.pow(de-$,2),0)/ae.length;V=Math.sqrt(le),q=$}else $=ee.reduce((ae,be)=>ae+be,0)/ee.length;G.push([j,$])}this.lastFrame+=this.frameCount,this.frameCount=0;const Z=Object.fromEntries(G);this.lastStageBreakdownMs={cull:Z.Culling??0,preprocess:Z.Preprocess??0,sort:Z.Sort??0,render:Z.Render??0,total:Z.Total??0};const O=`[TIMESTAMP - ${this.constructor.name}]
`+G.map(([Y,j])=>`${Y}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${z.toFixed(3)}ms
Total STD: ${V.toFixed(3)}ms
Total AVG: ${q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(a||(console.log(O),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Y=`Stage,ms
`,j=G.map(([ae,be])=>`${ae},${be.toFixed(3)}`).join(`
`),ee="data:text/csv;charset=utf-8,"+encodeURIComponent(Y+j),$=document.createElement("a");$.href=ee,$.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild($),$.click(),$.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(O)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:pu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),a=s?s.width:1,_=s?s.height:1;au({width:a,height:_,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Gr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Zn(this.pc.num_points*fu),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Zn(this.pc.num_points*_u),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const a=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=a.length>0?a:this.downloadOnceFileName}else{const a=new Date,_=`${a.getFullYear()}${String(a.getMonth()+1).padStart(2,"0")}${String(a.getDate()).padStart(2,"0")}_${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${_}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};D(Yn,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),D(Yn,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Gs=Yn;class wu{constructor(s){D(this,"nSurfels");D(this,"nNodes");D(this,"planes");D(this,"front");D(this,"back");D(this,"copOff");D(this,"cop");D(this,"missing");D(this,"stackNode");D(this,"stackPhase");D(this,"keys");D(this,"lastMs",0);D(this,"lastEye",[NaN,NaN,NaN]);const a=new DataView(s),_=String.fromCharCode(a.getUint8(0),a.getUint8(1),a.getUint8(2),a.getUint8(3));if(_!=="BSP1")throw new Error(`not a BSP1 file (magic ${_})`);this.nSurfels=a.getUint32(4,!0),this.nNodes=a.getUint32(8,!0);const d=a.getUint32(12,!0),g=a.getUint32(16,!0);let T=20;const S=this.nNodes;if(this.planes=new Float32Array(s.slice(T,T+S*16)),T+=S*16,this.front=new Int32Array(s.slice(T,T+S*4)),T+=S*4,this.back=new Int32Array(s.slice(T,T+S*4)),T+=S*4,this.copOff=new Uint32Array(s.slice(T,T+(S+1)*4)),T+=(S+1)*4,this.cop=new Uint32Array(s.slice(T,T+d*4)),T+=d*4,this.missing=new Uint32Array(s.slice(T,T+g*4)),T+=g*4,T!==s.byteLength)throw new Error(`BSP1 size mismatch: parsed ${T} of ${s.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*S+2),this.stackPhase=new Uint8Array(2*S+2)}computeKeys(s){const a=s[0],_=s[1],d=s[2];if(a===this.lastEye[0]&&_===this.lastEye[1]&&d===this.lastEye[2])return!1;this.lastEye=[a,_,d];const g=performance.now(),T=this.planes,S=this.front,C=this.back,R=this.copOff,G=this.cop,z=this.keys;let V=1;for(let O=0;O<this.missing.length;O++)z[this.missing[O]]=V++;const q=this.stackNode,Z=this.stackPhase;let L=0;for(q[0]=0,Z[0]=0,L=1;L>0;){L--;const O=q[L],Y=Z[L],j=T[4*O],ee=T[4*O+1],$=T[4*O+2];if(j===0&&ee===0&&$===0){for(let ce=R[O];ce<R[O+1];ce++)z[G[ce]]=V++;continue}const ae=j*a+ee*_+$*d-T[4*O+3]>=0,be=ae?S[O]:C[O],le=ae?C[O]:S[O];if(Y===0)q[L]=O,Z[L]=1,L++,le>=0&&(q[L]=le,Z[L]=0,L++);else{for(let ce=R[O];ce<R[O+1];ce++)z[G[ce]]=V++;be>=0&&(q[L]=be,Z[L]=0,L++)}}return this.lastMs=performance.now()-g,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function xu(i){const s=await fetch(i);if(!s.ok)throw new Error(`BSP fetch ${i}: HTTP ${s.status}`);return new wu(await s.arrayBuffer())}function yu(i,s){return 2*Math.atan(s/(2*i))}function Pu(i,s,a,_){const d=Math.tan(_/2),g=Math.tan(a/2),T=d*i,S=-T,C=g*i,R=-C,G=vt.create();return G[0]=2*i/(C-R),G[5]=-2*i/(T-S),G[2]=(C+R)/(C-R),G[6]=(T+S)/(T-S),G[14]=1,G[10]=s/(s-i),G[11]=-(s*i)/(s-i),vt.transpose(G,G),G}async function Mr(i){ft(`loading scene camera file... : ${i}`);const a=await(await fetch(i)).json();return ft(`loaded cameras count: ${a.length}`),a.map(_=>{const d=H.clone(_.position),g=Ct.create(..._.rotation.flat()),T=g[0],S=g[4],C=g[8],R=g[1],G=g[5],z=g[9],V=g[2],q=g[6],Z=g[10];T*(G*Z-z*q)-S*(R*Z-z*V)+C*(R*q-G*V)<0&&(g[1]=-g[1],g[5]=-g[5],g[9]=-g[9]);const O=vt.fromMat3(g);return{position:d,rotation:O,img_name:_.img_name,id:_.id}})}const Su=4*2,Eu=4*16,Co=4*Eu+2*Su;function ku(i){return i.createBuffer({label:"camera uniform",size:Co,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Mn=new Float32Array(Co/Float32Array.BYTES_PER_ELEMENT),Ns=class Ns{constructor(s,a){D(this,"_renderSize",null);D(this,"_refSize",null);D(this,"uniform_buffer");D(this,"position",H.create());D(this,"rotation",vt.create());D(this,"zfar",100);D(this,"fovY",45/180*Math.PI);D(this,"fovX");D(this,"focalRatioX",1);D(this,"focal",$i.create());D(this,"viewport",$i.create());D(this,"view_matrix",vt.identity());D(this,"view_inv_matrix",vt.identity());D(this,"proj_matrix",vt.identity());D(this,"proj_inv_matrix",vt.identity());D(this,"_negPos",H.create());D(this,"look",H.create(0,0,1));D(this,"up",H.create(0,1,0));D(this,"right",H.create(1,0,0));this.canvas=s,this.device=a,this.uniform_buffer=a?ku(a):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(s,a,_,d){this._renderSize=[s,a],this._refSize=_&&d?[_,d]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,a=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[_,d]=this._refSize,g=.5*d/Math.tan(this.fovY*.5);this.focal[0]=g*this.focalRatioX*(s/_),this.focal[1]=g*(a/d)}else{const _=.5*a/Math.tan(this.fovY*.5);this.focal[0]=_*this.focalRatioX,this.focal[1]=_}this.fovX=yu(this.focal[0],s),this.viewport[0]=s,this.viewport[1]=a,this.proj_matrix=Pu(.01,this.zfar,this.fovX,this.fovY),vt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],vt.copy(this.rotation,this.view_matrix),vt.translate(this.view_matrix,this._negPos,this.view_matrix),vt.inverse(this.view_matrix,this.view_inv_matrix),H.transformMat4Upper3x3(Ns.Z_AXIS,this.view_inv_matrix,this.look),H.normalize(this.look,this.look),H.cross(this.up,this.look,this.right),H.normalize(this.right,this.right);let s=0;Mn.set(this.view_matrix,s),s+=16,Mn.set(this.view_inv_matrix,s),s+=16,Mn.set(this.proj_matrix,s),s+=16,Mn.set(this.proj_inv_matrix,s),s+=16,Mn.set(this.viewport,s),s+=2,Mn.set(this.focal,s),s+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,Mn)}set_preset(s){H.copy(s.position,this.position),vt.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}setFocalRatio(s){this.focalRatioX=s,this.on_update_canvas()}getFov(){return this.fovY}};D(Ns,"Z_AXIS",H.create(0,0,1));let Os=Ns;const Tu={bilinear:0,bicubic:1,hermite:2,texture:3,bc5:4,p:4},Bo={texture:0,p:1,bc5:2},Cu=.7,Bu=`
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
                if (p.mode == 4u) {   // slope sidecar alone (luminance slope -> all channels)
                    let t = ts(i, j);
                    c += f(i, j) * (Hx[a] * Hy[b]) + vec3<f32>(t.x) * (Gx[a] * Hy[b]) + vec3<f32>(t.y) * (Hx[a] * Gy[b]);
                    continue;
                }
                var sx = gx(i, j); var sy = gy(i, j);
                if (p.mode == 3u) { let t = ts(i, j) * p.lam; sx += vec3<f32>(t.x); sy += vec3<f32>(t.y); }   // luminance slope -> all channels
                c += f(i, j) * (Hx[a] * Hy[b]) + sx * (Gx[a] * Hy[b]) + sy * (Hx[a] * Gy[b]) + gxy(i, j) * (Gx[a] * Gy[b]);
            }
        }
    }
    return vec4<f32>(c, 1.0);
}`;class Au{constructor(s,a,_,d){D(this,"pipeline");D(this,"uni");D(this,"bgCache",new Map);D(this,"lowTex",null);D(this,"lowView",null);D(this,"lowSize",[0,0]);D(this,"last","");D(this,"slopeTex",null);D(this,"slopeView",null);D(this,"dummySlope");this.device=s,this.format=a,this.mode=_,this.scale=d;const g=s.createShaderModule({label:"upscaler",code:Bu});this.pipeline=s.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:g,entryPoint:"vs"},fragment:{module:g,entryPoint:"fs",targets:[{format:a}]},primitive:{topology:"triangle-list"}}),this.uni=s.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=s.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING})}get slopeTarget(){return this.slopeView}lowTarget(s,a){var g,T;const _=Math.max(1,Math.round(s*this.scale)),d=Math.max(1,Math.round(a*this.scale));return(!this.lowTex||this.lowSize[0]!==_||this.lowSize[1]!==d)&&((g=this.lowTex)==null||g.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[_,d],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.lowSize=[_,d],(T=this.slopeTex)==null||T.destroy(),this.slopeTex=null,this.slopeView=null,Bo[this.mode]!==void 0&&(this.slopeTex=this.device.createTexture({size:[_,d],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())),{view:this.lowView,w:_,h:d}}pass(s,a,_,d){const[g,T]=this.lowSize,S=`${g},${T},${_},${d}`;if(S!==this.last){const G=new Uint32Array([g,T,_,d,Tu[this.mode],0,0,0]);new Float32Array(G.buffer,20,1)[0]=Cu,this.device.queue.writeBuffer(this.uni,0,G),this.last=S}let C=this.bgCache.get(this.lowView);C||(C=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()}]}),this.bgCache.set(this.lowView,C));const R=s.beginRenderPass({colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});R.setPipeline(this.pipeline),R.setBindGroup(0,C),R.draw(3),R.end()}destroy(){var s,a;(s=this.lowTex)==null||s.destroy(),(a=this.slopeTex)==null||a.destroy(),this.dummySlope.destroy(),this.uni.destroy()}}const Mu=H.create(1,0,0),Ru=H.create(0,1,0),Du=H.create(0,0,1);function Uu(i,s){const a=i[0],_=i[4],d=i[8],g=i[1],T=i[5],S=i[9],C=i[2],R=i[6],G=i[10],z=a+T+G;let V,q,Z,L;if(z>0){const O=.5/Math.sqrt(z+1);V=.25/O,q=(R-S)*O,Z=(d-C)*O,L=(g-_)*O}else if(a>T&&a>G){const O=2*Math.sqrt(1+a-T-G);V=(R-S)/O,q=.25*O,Z=(_+g)/O,L=(d+C)/O}else if(T>G){const O=2*Math.sqrt(1+T-a-G);V=(d-C)/O,q=(_+g)/O,Z=.25*O,L=(S+R)/O}else{const O=2*Math.sqrt(1+G-a-T);V=(g-_)/O,q=(d+C)/O,Z=(S+R)/O,L=.25*O}return s[0]=q,s[1]=Z,s[2]=L,s[3]=V,s}class Ao{constructor(s){D(this,"element");D(this,"enabled",!0);D(this,"center",H.create(0,0,0));D(this,"up",H.create(0,1,0));D(this,"rotation",[0,0]);D(this,"shift",[0,0]);D(this,"scroll",0);D(this,"speed",.1);D(this,"sensitivity",.08);D(this,"leftPressed",!1);D(this,"rightPressed",!1);D(this,"leftDragPans",!1);D(this,"lastX",0);D(this,"lastY",0);D(this,"touches",new Map);D(this,"lastTouchCenter",null);D(this,"lastPinchDistance",null);D(this,"lastTwoFingerAngle",null);D(this,"lastTouchCount",0);D(this,"roll",0);D(this,"_dir",H.create());D(this,"_right",H.create());D(this,"_upCam",H.create());D(this,"_scratch",H.create());D(this,"_qY",pt.create());D(this,"_qX",pt.create());D(this,"_qRot",pt.create());D(this,"_qZ",pt.create());D(this,"_qLocal",pt.create());D(this,"_qWorldToCam",pt.create());D(this,"_scratchMat3",Ct.create());D(this,"bboxMin",null);D(this,"bboxMax",null);D(this,"anchor",H.create(0,0,0));D(this,"downCallback",s=>{var a,_,d,g;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(_=(a=s.target)==null?void 0:a.setPointerCapture)==null||_.call(a,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(g=(d=s.target)==null?void 0:d.setPointerCapture)==null||g.call(d,s.pointerId),s.preventDefault())}});D(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const a=s.pageX-this.lastX,_=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=a,this.rotation[1]-=_):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=a,this.shift[0]+=_)});D(this,"upCallback",s=>{var a,_,d,g;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(_=(a=s.target)==null?void 0:a.releasePointerCapture)==null||_.call(a,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(g=(d=s.target)==null?void 0:d.releasePointerCapture)==null||g.call(d,s.pointerId),s.preventDefault()});D(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let a=s.deltaY;s.deltaMode===1?a*=16:s.deltaMode===2&&(a*=100),this.scroll+=a*.01});this.camera=s,this.registerElement(s.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const s=this.bboxMax[0]-this.bboxMin[0],a=this.bboxMax[1]-this.bboxMin[1],_=this.bboxMax[2]-this.bboxMin[2],d=.5*Math.sqrt(s*s+a*a+_*_);return d>1e-6?d:null}addRoll(s){this.roll+=s}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",a=>a.preventDefault())}setCenter(s){H.copy(s,this.center),H.copy(s,this.anchor)}setOrbitPivot(s){H.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const a=this.camera.rotation;H.set(a[2],a[6],a[10],this._dir),H.normalize(this._dir,this._dir),H.scale(this._dir,s,this._dir),H.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(H.subtract(this.center,s.position,this._scratch),H.length(this._scratch)<1e-6)return;H.normalize(this._scratch,this._scratch),H.cross(this.up,this._scratch,this._right),H.length(this._right)<1e-6&&H.set(1,0,0,this._right),H.normalize(this._right,this._right),H.cross(this._scratch,this._right,this._upCam),H.normalize(this._upCam,this._upCam);const a=s.rotation;a[0]=this._right[0],a[1]=this._upCam[0],a[2]=this._scratch[0],a[3]=0,a[4]=this._right[1],a[5]=this._upCam[1],a[6]=this._scratch[1],a[7]=0,a[8]=this._right[2],a[9]=this._upCam[2],a[10]=this._scratch[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,s.update_buffer()}setBbox(s,a){this.bboxMin=H.create(s[0],s[1],s[2]),this.bboxMax=H.create(a[0],a[1],a[2]);const _=(s[0]+a[0])*.5,d=(s[1]+a[1])*.5,g=(s[2]+a[2])*.5;H.set(_,d,g,this.center),H.set(_,d,g,this.anchor)}resetToCamera(){const s=this.camera.rotation;H.set(s[2],s[6],s[10],this._dir),H.normalize(this._dir,this._dir);let a=null;if(this.bboxMin&&this.bboxMax){let _=-1/0,d=1/0,g=!1;for(let T=0;T<3;T++){const S=this._dir[T],C=this.bboxMin[T]-this.camera.position[T],R=this.bboxMax[T]-this.camera.position[T];if(Math.abs(S)>1e-8){const G=C/S,z=R/S;_=Math.max(_,Math.min(G,z)),d=Math.min(d,Math.max(G,z))}else if(C>0||R<0){g=!0;break}}!g&&_<=d&&d>0&&(a=(Math.max(_,0)+d)*.5)}if(a===null||!isFinite(a)||a<.001){H.subtract(this.anchor,this.camera.position,this._scratch);const _=H.dot(this._scratch,this._dir);a=_>.001?_:H.length(this._scratch)}a=Math.max(.1,a),H.scale(this._dir,a,this._dir),H.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const a=this.touches.values().next().value;if(this.lastTouchCenter){const _=a.x-this.lastTouchCenter[0],d=a.y-this.lastTouchCenter[1];this.rotation[0]+=_*.3,this.rotation[1]-=d*.3}this.lastTouchCenter=[a.x,a.y]}else if(s===2){const a=Array.from(this.touches.values()),_=(a[0].x+a[1].x)*.5,d=(a[0].y+a[1].y)*.5,g=a[1].x-a[0].x,T=a[1].y-a[0].y,S=Math.hypot(g,T),C=Math.atan2(T,g);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=_-this.lastTouchCenter[0],G=d-this.lastTouchCenter[1],z=Math.hypot(R,G),V=Math.abs(S-this.lastPinchDistance);let q=C-this.lastTwoFingerAngle;q>Math.PI&&(q-=2*Math.PI),q<-Math.PI&&(q+=2*Math.PI),z>.5&&(this.shift[1]-=R,this.shift[0]+=G),V>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(S/this.lastPinchDistance)*10),Math.abs(q)>.0087&&(this.roll+=q)}this.lastTouchCenter=[_,d],this.lastPinchDistance=S,this.lastTwoFingerAngle=C}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const a=this.camera;{const O=a.rotation;this.up[0]=O[1],this.up[1]=O[5],this.up[2]=O[9],H.length(this.up)>1e-6?H.normalize(this.up,this.up):H.set(0,1,0,this.up)}let _=0,d=!1;Math.abs(this.roll)>1e-4&&(_=this.roll,this.roll=0,d=!0),H.subtract(a.position,this.center,this._dir);let g=H.length(this._dir);g<1e-6&&(g=1e-6);const T=Math.exp(Math.log(g)+this.scroll*s*10*this.speed);H.scale(this._dir,T/g,this._dir),g=T;const S=a.rotation;this._right[0]=S[0],this._right[1]=S[4],this._right[2]=S[8],H.normalize(this._right,this._right),H.length(this._right)<1e-6&&H.set(1,0,0,this._right);const C=H.create(S[1],S[5],S[9]);H.normalize(C,C),H.length(C)<1e-6&&H.set(0,1,0,C);const R=s*this.speed*.1*g,G=this.shift[1]*R,z=-this.shift[0]*R;H.scale(this._right,G,this._scratch),H.add(this.center,this._scratch,this.center),H.add(a.position,this._scratch,a.position),H.scale(C,z,this._scratch),H.add(this.center,this._scratch,this.center),H.add(a.position,this._scratch,a.position);const V=this.rotation[0]*s*this.sensitivity,q=this.rotation[1]*s*this.sensitivity;if(Math.abs(V)>1e-5||Math.abs(q)>1e-5||d){const O=a.rotation;Uu(O,this._qWorldToCam),pt.fromAxisAngle(Mu,-q,this._qX),pt.fromAxisAngle(Ru,-V,this._qY),pt.multiply(this._qX,this._qY,this._qLocal),d&&(pt.fromAxisAngle(Du,1*_,this._qZ),pt.multiply(this._qZ,this._qLocal,this._qLocal)),pt.normalize(this._qLocal,this._qLocal),pt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),pt.normalize(this._qWorldToCam,this._qWorldToCam),Ct.fromQuat(this._qWorldToCam,this._scratchMat3),vt.fromMat3(this._scratchMat3,a.rotation);const Y=a.rotation,j=Y[2],ee=Y[6],$=Y[10];a.position[0]=this.center[0]-j*g,a.position[1]=this.center[1]-ee*g,a.position[2]=this.center[2]-$*g,this.up[0]=Y[1],this.up[1]=Y[5],this.up[2]=Y[9],H.normalize(this.up,this.up)}else H.add(this.center,this._dir,a.position);a.update_buffer();const L=Math.pow(.8,s*60);this.rotation[0]*=L,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=L,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=L,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=L,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=L,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Mo(i){const s=H.create();for(const a of i)H.add(s,a,s);return H.scale(s,1/Math.max(i.length,1),s)}function Ro(i,s){const a=Ct.create();Ct.inverse(i,a);const _=H.create();return _[0]=a[0]*s[0]+a[4]*s[1]+a[8]*s[2],_[1]=a[1]*s[0]+a[5]*s[1]+a[9]*s[2],_[2]=a[2]*s[0]+a[6]*s[1]+a[10]*s[2],_}function Lu(i){const s=i.slice(),a=[1,0,0,0,1,0,0,0,1],_=(C,R)=>s[C*3+R],d=(C,R,G)=>{s[C*3+R]=G},g=(C,R)=>a[C*3+R],T=(C,R,G)=>{a[C*3+R]=G};for(let C=0;C<30;C++){let R=0,G=1,z=Math.abs(_(0,1));if(Math.abs(_(0,2))>z&&(R=0,G=2,z=Math.abs(_(0,2))),Math.abs(_(1,2))>z&&(R=1,G=2,z=Math.abs(_(1,2))),z<1e-12)break;const V=_(R,R),q=_(G,G),Z=_(R,G);let L;Math.abs(V-q)<1e-30?L=Math.PI/4*Math.sign(Z):L=.5*Math.atan2(2*Z,V-q);const O=Math.cos(L),Y=Math.sin(L);for(let j=0;j<3;j++){const ee=_(j,R),$=_(j,G);d(j,R,O*ee+Y*$),d(j,G,-Y*ee+O*$)}for(let j=0;j<3;j++){const ee=_(R,j),$=_(G,j);d(R,j,O*ee+Y*$),d(G,j,-Y*ee+O*$)}for(let j=0;j<3;j++){const ee=g(j,R),$=g(j,G);T(j,R,O*ee+Y*$),T(j,G,-Y*ee+O*$)}}const S=[];for(let C=0;C<3;C++)S.push({val:_(C,C),vec:H.create(g(0,C),g(1,C),g(2,C))});return S.sort((C,R)=>R.val-C.val),{vals:[S[0].val,S[1].val,S[2].val],vecs:[S[0].vec,S[1].vec,S[2].vec]}}function zu(i,s){const a=Mo(i);let _=0,d=0,g=0,T=0,S=0,C=0;for(const Z of i){const L=Z[0]-a[0],O=Z[1]-a[1],Y=Z[2]-a[2];_+=L*L,d+=L*O,g+=L*Y,T+=O*O,S+=O*Y,C+=Y*Y}const R=[_,d,g,d,T,S,g,S,C],{vecs:G}=Lu(R);let z=G[0],V=G[1],q=G[2];return H.dot(q,s)<0&&(H.scale(q,-1,q),H.scale(V,-1,V)),{centroid:a,normal:q,u:z,v:V}}function Iu(i){let s=0,a=0,_=0,d=0,g=0,T=0,S=0,C=0,R=0;for(const[O,Y]of i){const j=-2*O,ee=-2*Y,$=1,ae=-(O*O+Y*Y);s+=j*j,a+=j*ee,_+=j*$,d+=ee*ee,g+=ee*$,T+=$*$,S+=j*ae,C+=ee*ae,R+=$*ae}const G=Ct.create(s,a,_,a,d,g,_,g,T),z=Ro(G,H.create(S,C,R)),V=z[0],q=z[1],Z=z[2],L=V*V+q*q-Z;return{center:[V,q],radius:Math.sqrt(Math.max(L,1e-12))}}function Gu(i,s){let a=0,_=0,d=0,g=0,T=0,S=0,C=0,R=0,G=0;for(let V=0;V<i.length;V++){const q=i[V],Z=H.normalize(s[V],H.create()),L=1-Z[0]*Z[0],O=-Z[0]*Z[1],Y=-Z[0]*Z[2],j=1-Z[1]*Z[1],ee=-Z[1]*Z[2],$=1-Z[2]*Z[2];a+=L,_+=O,d+=Y,g+=j,T+=ee,S+=$,C+=L*q[0]+O*q[1]+Y*q[2],R+=O*q[0]+j*q[1]+ee*q[2],G+=Y*q[0]+ee*q[1]+$*q[2]}const z=Ct.create(a,_,d,_,g,T,d,T,S);return Ro(z,H.create(C,R,G))}function Do(i,s={}){if(i.length===0)return null;const a=s.tiltDownDeg??8,_=s.radiusScale??1,d=s.alignFirst??!0,g=(s.direction??"ccw")==="ccw"?1:-1,T=i.map(ce=>H.clone(ce.position)),S=i.map(ce=>{const de=ce.rotation;return H.create(de[8],de[9],de[10])}),C=i.map(ce=>{const de=ce.rotation;return H.create(de[4],de[5],de[6])}),R=Mo(C),G=H.normalize(H.scale(R,-1,H.create())),{centroid:z,normal:V,u:q,v:Z}=zu(T,G),L=T.map(ce=>{const de=H.sub(ce,z,H.create());return[H.dot(de,q),H.dot(de,Z)]}),{center:O,radius:Y}=Iu(L),j=Y*_,ee=H.add(z,H.add(H.scale(q,O[0],H.create()),H.scale(Z,O[1],H.create()),H.create()),H.create()),$=Gu(T,S),ae=j*Math.tan(a*Math.PI/180),be=H.sub($,H.scale(V,ae,H.create()),H.create());let le=0;if(d){const ce=H.sub(T[0],ee,H.create());le=Math.atan2(H.dot(ce,Z),H.dot(ce,q))/(2*Math.PI)%1,le<0&&(le+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${j.toFixed(2)}, tilt=${a}°, normal=[${V[0].toFixed(2)}, ${V[1].toFixed(2)}, ${V[2].toFixed(2)}], startPhase=${le.toFixed(3)}`),{center:ee,radius:j,normal:V,u:q,v:Z,lookAt:be,startPhase:le,direction:g}}function Uo(i,s){const a=(i.startPhase+s*i.direction)*2*Math.PI,_=Math.cos(a),d=Math.sin(a),g=H.add(i.center,H.add(H.scale(i.u,i.radius*_,H.create()),H.scale(i.v,i.radius*d,H.create()),H.create()),H.create()),T=H.normalize(H.sub(i.lookAt,g,H.create())),S=H.cross(T,i.normal,H.create());H.length(S)<1e-6&&H.copy(i.u,S),H.normalize(S,S);const C=H.cross(T,S,H.create());H.normalize(C,C);const R=vt.create();return R[0]=S[0],R[1]=C[0],R[2]=T[0],R[3]=0,R[4]=S[1],R[5]=C[1],R[6]=T[1],R[7]=0,R[8]=S[2],R[9]=C[2],R[10]=T[2],R[11]=0,R[12]=0,R[13]=0,R[14]=0,R[15]=1,{position:g,rotation:R,img_name:`orbit_${(s*1e3).toFixed(0)}`,id:0}}function Ou(i,s={}){const a=Do(i,s);if(!a)return[];const _=s.numViews??120;return Array.from({length:_},(d,g)=>({...Uo(a,g/_),img_name:`circle_${g.toString().padStart(4,"0")}`,id:g}))}const Lo="halloumi.renderer";function Fu(){const i=new URLSearchParams(window.location.search).get("renderer"),s=i==="webgl"||i==="webgpu"?i:null;let a=null;try{const _=localStorage.getItem(Lo);(_==="webgl"||_==="webgpu")&&(a=_)}catch{}return{forced:s,stored:a}}function Rr(i){try{localStorage.setItem(Lo,i)}catch{}const s=new URLSearchParams(window.location.search);s.set("renderer",i),window.location.search=s.toString()}function rn(i){const s=(i&32768)>>15,a=(i&31744)>>10,_=i&1023;return a===0?(s?-1:1)*Math.pow(2,-14)*(_/1024):a===31?_?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,a-15)*(1+_/1024)}function Dr(i,s,a,_,d,g,T,S,C,R=.5){const G=C?C.length:T.length/8,z=[],V=[];for(let L=0;L<G;L++){const Y=(C?C[L]:L)*8,j=T[Y]-i,ee=T[Y+1]-s,$=T[Y+2]-a,ae=j*_+ee*d+$*g;if(ae<=0||!(S[Y+7]>>>16&1))continue;const be=S[Y+4],le=rn(be&65535),ce=rn(be>>>16&65535),de=3*Math.max(le,ce),ye=j-ae*_,Re=ee-ae*d,Ue=$-ae*g;if(ye*ye+Re*Re+Ue*Ue>de*de)continue;const pe=rn(S[Y+3]&65535);if(pe<1/255)continue;const Q=S[Y+5],Te=S[Y+6];let xe=rn(Q&65535),me=rn(Q>>>16&65535),ue=rn(Te&65535),ie=rn(Te>>>16&65535);const Ee=Math.hypot(xe,me,ue,ie)||1;xe/=Ee,me/=Ee,ue/=Ee,ie/=Ee;const ze=1-2*(ue*ue+ie*ie),_e=2*(me*ue+xe*ie),Me=2*(me*ie-xe*ue),Pe=2*(me*ue-xe*ie),X=1-2*(me*me+ie*ie),oe=2*(ue*ie+xe*me),A=2*(me*ie+xe*ue),W=2*(ue*ie-xe*me),P=1-2*(me*me+ue*ue),l=_*A+d*W+g*P;if(Math.abs(l)<1e-6)continue;const b=(j*A+ee*W+$*P)/l;if(!(b>0))continue;const f=b*_-j,x=b*d-ee,k=b*g-$,B=(f*ze+x*_e+k*Me)/(le||1e-6),w=(f*Pe+x*X+k*oe)/(ce||1e-6),o=B*B+w*w;if(o>9)continue;const m=Math.min(.99,pe*Math.exp(-.5*o));m<1/255||(z.push(b),V.push(m))}if(z.length===0)return null;const q=z.map((L,O)=>O).sort((L,O)=>z[L]-z[O]);let Z=1;for(const L of q)if(Z*=1-V[L],Z<R)return z[L];return null}function Fs(i,s,a){const _=(i-a.viewport[0]*.5)/a.focal[0],d=-((s-a.viewport[1]*.5)/a.focal[1]),g=a.rotation;let T=_*g[0]+d*g[1]+g[2],S=_*g[4]+d*g[5]+g[6],C=_*g[8]+d*g[9]+g[10];const R=Math.hypot(T,S,C)||1;return[T/R,S/R,C/R]}function Ur(i,s,a,_,d,g){const[T,S,C]=Fs(i,s,_),R=_.position[0],G=_.position[1],z=_.position[2],V=new Uint32Array(d.buffer,d.byteOffset,d.length);let q=Dr(R,G,z,T,S,C,d,V,null,.5);return q===null&&(q=Dr(R,G,z,T,S,C,d,V,null,.8)),q===null?null:[R+q*T,G+q*S,z+q*C]}function zo(i,s){const a=i.viewport[0],_=i.viewport[1],d=new Uint32Array(s.buffer,s.byteOffset,s.length),g=i.position[0],T=i.position[1],S=i.position[2],[C,R,G]=Fs(a*.5,_*.5,i),z=.06*Math.max(a,_),V=(z+2)/i.focal[0],q=s.length/8,Z=[];for(let j=0;j<q;j++){const ee=j*8,$=s[ee]-g,ae=s[ee+1]-T,be=s[ee+2]-S,le=$*C+ae*R+be*G;if(le<=0)continue;const ce=d[ee+4],de=3*Math.max(rn(ce&65535),rn(ce>>>16&65535)),ye=$-le*C,Re=ae-le*R,Ue=be-le*G,pe=le*V+de;ye*ye+Re*Re+Ue*Ue<=pe*pe&&Z.push(j)}if(Z.length===0)return null;const L=Int32Array.from(Z),O=[],Y=5;for(let j=0;j<Y;j++)for(let ee=0;ee<Y;ee++){const $=a*.5+(ee-(Y-1)/2)/((Y-1)/2)*z,ae=_*.5+(j-(Y-1)/2)/((Y-1)/2)*z,[be,le,ce]=Fs($,ae,i),de=Dr(g,T,S,be,le,ce,s,d,L,.5);de!==null&&O.push(de*(be*C+le*R+ce*G))}return O.length<3?null:(O.sort((j,ee)=>j-ee),O[O.length>>1])}function Vu(i){return new Promise(s=>{const a=document.createElement("input");a.type="file",a.accept=i,a.style.display="none",a.onchange=()=>{var _;return s(((_=a.files)==null?void 0:_[0])??null)},document.body.appendChild(a),a.click(),setTimeout(()=>document.body.removeChild(a),1e3)})}function $u(i,s,a){const _=document.getElementById("ui-panel-container"),d=document.getElementById("load-button"),g=document.getElementById("quick-links");d&&(d.onclick=async()=>{const R=await Vu(".ply,.bitymi");if(R)if(_&&(_.style.display="none"),R.name.toLowerCase().endsWith(".bitymi")){const G=await R.arrayBuffer(),{pcBuffer:z}=Ir(G),V=new File([z],R.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),q=await Ls(V,i);s(q)}else{const G=await Ls(R,i);s(G)}}),g&&(g.innerHTML="");const T=new URLSearchParams(window.location.search),S=T.get("bundle")??T.get("model_url"),C=T.get("camera_url");S&&(_&&(_.style.display="none"),a(S,C))}async function Nu(i,s,a){const{bundle:_}=await Xn(i,(T,S)=>a(`downloading B ... ${(T/1048576).toFixed(1)}${S?` / ${(S/1048576).toFixed(1)}`:""} MB`));if(!_)throw new Error("bundle_b must be a .bitymi bundle");a("parsing B ...");const d=await Ls(new File([_.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),s);let g=null;if(_.atlasBuffer){a("uploading B atlas ...");try{g=kr(s,Un(_.atlasBuffer),!0)}catch(T){console.warn("[A/B] B atlas failed:",T)}}return{pc:d,atlas:g}}function Pr(i){const s=new Uint32Array(i.surfel_data.buffer,i.surfel_data.byteOffset,i.num_points*8);for(let a=0;a<i.num_points;a++){const _=s[a*8+7];if(!(_>>>16&1)||(_>>>17&1)===1)return!0}return!1}async function qu(i,s,a,_){const d=new Os(i,a),g=new Ao(d);let T=!1;i.addEventListener("pointerdown",()=>{T=!0}),window.addEventListener("pointerup",()=>{T=!1});const S=typeof window<"u"&&window.parent!==window,C={pos:new Float32Array(3),rot:new Float32Array(16)};if(S){window.addEventListener("message",X=>{const oe=X.data;if(!(!oe||oe.type!=="halloumi_sync_pose")&&!(!Array.isArray(oe.position)||oe.position.length!==3)&&!(!Array.isArray(oe.rotation)||oe.rotation.length!==16)){for(let A=0;A<3;A++)d.position[A]=oe.position[A];for(let A=0;A<16;A++)d.rotation[A]=oe.rotation[A];d.update_buffer(),g.resetToCamera();for(let A=0;A<3;A++)C.pos[A]=d.position[A];for(let A=0;A<16;A++)C.rot[A]=d.rotation[A]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const R=()=>{if(!S)return;const X=d.position,oe=d.rotation;let A=!1;for(let W=0;W<3;W++)if(Math.abs(X[W]-C.pos[W])>1e-6){A=!0;break}if(!A){for(let W=0;W<16;W++)if(Math.abs(oe[W]-C.rot[W])>1e-6){A=!0;break}}if(A){for(let W=0;W<3;W++)C.pos[W]=X[W];for(let W=0;W<16;W++)C.rot[W]=oe[W];try{window.parent.postMessage({type:"halloumi_camera_state",position:[X[0],X[1],X[2]],rotation:Array.from(oe)},"*")}catch{}}},G="rgba8unorm";s.configure({device:a,format:G,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let z=null,V=null,q=null,Z=[0,0,0,0];const L=()=>{d.on_update_canvas(),z!==null&&wn(i.width,i.height,a,z.render_settings_buffer),V!==null&&V()};new ResizeObserver(()=>{const X=Math.max(.25,Q.render_scale),oe=Math.max(1,Math.ceil(X*i.clientWidth)),A=Math.max(1,Math.ceil(X*i.clientHeight));i.width===oe&&i.height===A||(i.width=oe,i.height=A,L())}).observe(i);let Y=0,j=0;const ee=()=>{(i.width!==Y||i.height!==j)&&(Y=i.width,j=i.height,L())},$=new URLSearchParams(window.location.search);let be=$.get("animation")==="1";g.enabled=!be;const le=$.get("camera_url"),ce=$.get("bfc"),de=ce==="1"||ce==="true",ye=$.get("bfc_cos"),Re=ye!==null?Number(ye):NaN,Ue=Number.isFinite(Re)?Re:2,pe=Math.max(1,window.devicePixelRatio||1),Q={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:be,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:de,bfc_cos:Ue,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:(X=>X==="bilinear"||X==="bicubic"||X==="hermite"||X==="texture"||X==="bc5"||X==="p"?X:"off")(new URLSearchParams(location.search).get("up")),upscale_factor:(X=>X>0&&X<1?Math.max(2,Math.min(8,Math.round(1/X))):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1"))},Te=new ko.Pane({title:"Config",expanded:!0}),xe={stats:"— loading —"};Te.addMonitor(xe,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2});let me=null;const ue=Te.addInput(Q,"atlas_enabled",{label:"Texture"}).on("change",X=>me==null?void 0:me(X.value));let ie=null;const Ee={on:Q.upscale!=="off"},ze=Te.addInput(Ee,"on",{label:"Upscaling (2×)"}).on("change",X=>ie==null?void 0:ie(X.value)),_e=Te.addFolder({title:"⚙ Advanced options",expanded:!1});_e.addInput(Q,"animate",{label:"Animate"}).on("change",X=>{const oe=be;be=X.value,g.enabled=!X.value,!oe&&be&&Me.value&&Me.value.onAnimateStart(),oe&&!be&&Me.value&&Me.value.onAnimateStop()}),_e.addInput(Q,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Me={value:null};$u(a,X=>Pe(X,[],null),async(X,oe)=>{let A=oe??le,W,P=null;const l=X.toLowerCase();if(l.endsWith(".bitymi")||l.includes(".bitymi?")){Jn("downloading bundle ...");try{const{bundle:B}=await Xn(X,(o,m,p,u)=>{if(u==="cache"){Tt(`loading cached bundle ...
${(o/1048576).toFixed(1)}${m?` / ${(m/1048576).toFixed(1)}`:""} MB on this device`);return}const c=o/(1024*1024),v=m?m/(1024*1024):void 0,E=p/(1024*1024),y=m?Math.min(99,Math.floor(o/m*100)):void 0,I=v?`total ${v.toFixed(1)} MB`:"total -- MB",F=v&&y!==void 0?`${c.toFixed(1)} MB downloaded (${y}%)`:`${c.toFixed(1)} MB downloaded`,K=`${E.toFixed(2)} MB/s`;Tt(`downloading bundle ...
${I}, ${F}
${K}`)});if(!B)throw new Error("Expected a .bitymi bundle");Tt("parsing PLY ...");const w=new File([B.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(W=await Ls(w,a),!A&&B.camerasBuffer&&(A=URL.createObjectURL(new Blob([B.camerasBuffer],{type:"application/json"}))),B.atlasBuffer){const o=B.atlasBuffer.byteLength/1048576;Tt(`uploading atlas ...
${o.toFixed(1)} MB BC7`);try{const m=Un(B.atlasBuffer);P=kr(a,m,!0)}catch(m){console.warn("[atlas] failed to parse/upload atlas:",m)}}}catch(B){throw Yt(),B}}else W=await Ic(X,a);let b=null,f="";const x=$.get("atlas2");if(x)try{const{bundle:B}=await Xn(x,(w,o)=>{Tt(`downloading second atlas ...
${(w/1048576).toFixed(1)}${o?` / ${(o/1048576).toFixed(1)}`:""} MB`)});if(!(B!=null&&B.atlasBuffer))throw new Error("second bundle has no atlas chunk");Tt("uploading second atlas ..."),b=kr(a,Un(B.atlasBuffer),!0),b||(f="second atlas: format unsupported on this device")}catch(B){console.warn("[atlas2] failed:",B),f=`second atlas failed: ${B}`}const k=A?await Mr(A):[];k.length>0&&d.set_preset(k[0]),Pe(W,k,P,b,f)});function Pe(X,oe=[],A=null,W=null,P=""){const l=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];g.setBbox(X.bbox.min,X.bbox.max),.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function b(U,J){const re=Ur(U,J,i,d,X.surfel_data);re&&(g.setOrbitPivot(re),console.log(`[pick] orbit pivot → (${re[0].toFixed(3)}, ${re[1].toFixed(3)}, ${re[2].toFixed(3)})`))}function f(){const U=zo(d,X.surfel_data);if(U!==null&&U>.001){g.setOrbitDepth(U);return}const J=d.rotation,re=J[2],ve=J[6],Se=J[10],fe=(X.centroid[0]-d.position[0])*re+(X.centroid[1]-d.position[1])*ve+(X.centroid[2]-d.position[2])*Se;fe>.001&&g.setOrbitDepth(fe)}if(oe.length===0){const U=X.bbox.max[0]-X.bbox.min[0],J=X.bbox.max[1]-X.bbox.min[1],re=X.bbox.max[2]-X.bbox.min[2],Se=.5*Math.sqrt(U*U+J*J+re*re)*.5;H.set(l[0]-Se,l[1]-Se,l[2]-Se,d.position);const fe=H.create(Se,Se,Se);H.normalize(fe,fe);const we=H.create(0,1,0),Ce=H.create();H.cross(we,fe,Ce),H.normalize(Ce,Ce);const qe=H.create();H.cross(fe,Ce,qe);const He=Ct.create(Ce[0],qe[0],fe[0],Ce[1],qe[1],fe[1],Ce[2],qe[2],fe[2]);vt.fromMat3(He,d.rotation),d.update_buffer()}g.setCenter(H.create(X.centroid[0],X.centroid[1],X.centroid[2]));const x=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),k="halloumi.fetch_by_id";let B=null;try{const U=localStorage.getItem(k);(U==="0"||U==="1")&&(B=U==="1")}catch{}const w=$.get("byid"),o={fetchById:w!==null?w==="1":B!==null?B:!x,octBound:$.get("oct")==="1",acc16:$.get("acc16")==="1",staticSortKeys:null},m=$.get("bsp");let p=null;m&&(o.staticSortKeys=new Float32Array(X.num_points),p=xu(m).then(U=>{if(U.nSurfels!==X.num_points)throw new Error(`BSP has ${U.nSurfels} surfels, scene has ${X.num_points}`);return console.log(`[bsp] loaded ${m}: ${U.nNodes} nodes over ${U.nSurfels} surfels`),U}));let u=new Gs(X,a,G,d.uniform_buffer,_,A,o);const c=$.get("surfel_math");Q.surfel_math=c==="raysplat"||c==="centred"?c:$.get("raysplat")==="1"?"raysplat":"conic",Q.hyp_legacy=$.get("hyp_legacy")==="1",Q.mip2d=$.get("mip2d")==="1";{const U=parseFloat($.get("mip2d_k")??"");Number.isFinite(U)&&U>0&&(Q.mip2d_k=U)}so(Q.mip2d,Q.mip2d_k,a,u.render_settings_buffer),Hn({hypLegacy:Q.hyp_legacy,raysplat:Q.surfel_math==="raysplat",centred:Q.surfel_math==="centred"},a,u.render_settings_buffer),Q.legacy_renderer=$.get("legacy")==="1",Q.legacy_renderer&&u.setLegacyRenderer(!0),Q.two_pass=$.get("twopass")==="1";{const U=parseFloat($.get("opaque_t")??"");Number.isFinite(U)&&(Q.opaque_thresh=Math.min(.99,Math.max(.01,U)))}u.setOpaqueThresh(Q.opaque_thresh),Q.two_pass&&u.setTwoPass(!0);{const U=$.get("overdraw");(U==="shaded"||U==="raster"||U==="1")&&(Q.overdraw=U==="raster"?"raster":"shaded");const J=parseInt($.get("overdraw_max")??"",10);Number.isFinite(J)&&J>0&&(Q.overdraw_max=J)}u.setOverdrawMax(Q.overdraw_max),Q.overdraw!=="off"&&u.setOverdrawMode(Q.overdraw==="raster"?2:1),Q.fetch_by_id=o.fetchById,console.log(`[render_2dgs] fetch_by_id=${o.fetchById} (source: ${w!==null?"?byid":B!==null?"remembered":`handheld=${x}`})`),z=u,wn(i.width,i.height,a,u.render_settings_buffer),Q.atlas_enabled=A!==null;{const U=X.surfel_data,J=U.length/8;let re=0,ve=0,Se=0;for(let we=0;we<J;we++)re+=U[we*8],ve+=U[we*8+1],Se+=U[we*8+2];const fe=J>0?[re/J,ve/J,Se/J]:[0,0,0];u.setBfcParams(Q.bfc_cos,fe),Hn({bfc:Q.bfc},a,u.render_settings_buffer),console.log(`[bfc] flag=${Q.bfc} cos=${Q.bfc_cos} centroid=(${fe[0].toFixed(3)}, ${fe[1].toFixed(3)}, ${fe[2].toFixed(3)})`)}let v=!1;const E=(()=>{if(A!==null)return`${A.meta.format===2?"BC7":A.meta.format===3?"ASTC 4×4":A.meta.format===7?"BC7 codebook gather (typeD)":`format=${A.meta.format}`} ${A.meta.width}×${A.meta.height}, ${A.meta.n_layers} layers`;const U=a.features.has("texture-compression-bc"),J=a.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(U?["BC7"]:[]).concat(J?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",E),no(X.sh_bias,a,u.render_settings_buffer),to(Q.gaussian_scaling,a,u.render_settings_buffer),Q.sh_bias=X.sh_bias;let y=X.num_points.toLocaleString();xe.stats=`${y} surfels · -- fps`;const I=.4,F=3,K=.3;let te=null,se=0,ne=0;const ke=pt.create(),Ae=Ct.create();let ge=oe.length>0?0:-1;const Be={view:oe.length>0?`${ge+1} / ${oe.length}: ${oe[ge].img_name??ge}`:"— no presets —"},Ie=document.createElement("span");function Ge(U){const J=Ct.create(U[0],U[1],U[2],U[4],U[5],U[6],U[8],U[9],U[10]);return pt.fromMat(J)}function Ze(U,J){te={fromPos:H.clone(d.position),toPos:H.clone(U.position),fromQuat:pt.normalize(Ge(d.rotation)),toQuat:pt.normalize(Ge(U.rotation)),target:U,t:0,duration:Math.max(.01,J)}}const tt=(U,J=!0)=>{if(oe.length===0)return;ge=(U%oe.length+oe.length)%oe.length;const re=oe[ge];J?Ze(re,I):(d.set_preset(re),g.resetToCamera(),f()),Be.view=`${ge+1} / ${oe.length}: ${oe[ge].img_name??ge}`,Ie.textContent=Be.view};if(oe.length>0){const U=_e.addSeparator(),J=document.createElement("div");J.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const re=(Se,fe,we)=>{const Ce=document.createElement("button");return Ce.className="tp-btnv_b",Ce.textContent=Se,Ce.title=fe,Ce.style.cssText="flex:0 0 34px;height:24px;padding:0;",Ce.addEventListener("click",we),Ce};Ie.textContent=Be.view,Ie.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",J.appendChild(re("◀","previous view (←)",()=>tt(ge-1))),J.appendChild(Ie),J.appendChild(re("▶","next view (→)",()=>tt(ge+1))),(U.element.parentElement??_e.element.querySelector(".tp-fldv_c")??_e.element).insertBefore(J,U.element),U.dispose()}const Xe=oe.length>0?Do(oe,{tiltDownDeg:15,alignFirst:!0}):null,Je=Xe?Ou(oe,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Ne=0;const Qe=12;Me.value={onAnimateStart:()=>{Ne=0},onAnimateStop:()=>{g.resetToCamera(),f()}};const je=U=>{const J=Math.max(.25,U),re=Math.max(1,Math.ceil(J*i.clientWidth)),ve=Math.max(1,Math.ceil(J*i.clientHeight));(i.width!==re||i.height!==ve)&&(i.width=re,i.height=ve,L())},ut=_e.addInput(Q,"render_scale",{label:"Render scale",min:.25,max:pe,step:.25}).on("change",U=>je(U.value)),ot=new URLSearchParams(location.search),Ve={};for(const U of["bc5","p"]){const J=ot.get(`slope_${U}`),re=ot.get(`slope_${U}_4x`);J&&(Ve[`${U}2`]=J),(re||J)&&(Ve[`${U}4`]=re??J)}const rt={},$e={slope:""},at=(U,J)=>{const re=`${U}${J>=4?4:2}`;if(Ve[re]===Ve[`${U}2`]&&re!==`${U}2`)return at(U,2);const ve=rt[re],Se=`${U.toUpperCase()} ${J>=4?4:2}x`;return ve&&ve!=="loading"&&ve!=="failed"?ve:(ve===void 0&&Ve[re]&&(rt[re]="loading",$e.slope=`${Se}: downloading…`,(async()=>{try{const fe=await Eo(Ve[re],(Ce,qe,He,yt)=>{$e.slope=`${Se}: ${yt==="cache"?"cached ":""}${(Ce/1048576).toFixed(0)}${qe?` / ${(qe/1048576).toFixed(0)}`:""} MB`}),we=zc(a,Un(fe),A?A.meta:null);if(!we)throw new Error("unsupported on this device or layout mismatch (see console)");rt[re]=we,$e.slope=`${Se}: ready (${we.mb.toFixed(0)} MB on GPU)`}catch(fe){console.warn(`[slope ${Se}]`,fe),rt[re]="failed",$e.slope=`${Se}: failed — ${fe}`}})()),null)};let nt=null;const _t={off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware (green)":"texture"};Ve.bc52&&(_t["texture BC5 (finetuned)"]="bc5"),Ve.p2&&(_t["texture P (finetuned)"]="p");const lt=_e.addInput(Q,"upscale",{label:"Upscale",options:_t}).on("change",()=>{Q.upscale==="off"&&(L(),Bt()),Ee.on=Q.upscale!=="off",ze.refresh()});ze.label=Ve.bc52?"Upscaling (texture-aware 2×)":"Upscaling (Hermite 2×)";const Bt=()=>{Q.render_scale!==1&&(Q.render_scale=1,ut.refresh(),je(1))};ie=U=>{U?(Q.upscale=Ve.bc52?"bc5":"hermite",Q.upscale_factor=2):(Q.upscale="off",L()),Bt(),lt.refresh()},(Ve.bc52||Ve.p2)&&_e.addMonitor($e,"slope",{label:"Slope data",interval:300}),_e.addInput(Q,"upscale_factor",{label:"Upscale factor",options:{"2x (render at 1/2)":2,"4x (render at 1/4)":4}}),_e.addInput(Q,"bfc",{label:Q.bfc_cos<1.5?`Backface cull (cos ${Q.bfc_cos})`:"Backface cull"}).on("change",()=>{Hn({bfc:Q.bfc},a,u.render_settings_buffer)});const kt={res:""},mt=()=>{const U=i.width*i.height/1e6;kt.res=`${i.width}×${i.height}  (${U.toFixed(2)} MP)
CSS ${i.clientWidth}×${i.clientHeight} · DPR ${pe.toFixed(2)} · native ${Math.round(i.clientWidth*pe)}×${Math.round(i.clientHeight*pe)}`};mt(),V=mt,_e.addMonitor(kt,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),_e.addInput(Q,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",U=>to(U.value,a,u.render_settings_buffer)),_e.addInput(Q,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",U=>no(U.value,a,u.render_settings_buffer)),_e.addInput(Q,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",U=>{u.bgColor=[U.value.r,U.value.g,U.value.b,U.value.a]});const ht=U=>U===null?"":U.meta.format===3||U.meta.format===8||U.meta.format===10?" (ASTC)":" (BC7)";let At=ht(A);const wt=document.createElement("button");wt.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Mt=()=>{wt.textContent=`Texture${At}: ${Q.atlas_enabled?"ON":"OFF"}`,wt.style.borderColor=Q.atlas_enabled?"#f0b060":"#444",wt.style.color=Q.atlas_enabled?"#f0b060":"#bbb"},Zt=()=>{Q.atlas_enabled=!Q.atlas_enabled,u.setAtlasEnabled(Q.atlas_enabled),ue.refresh(),Mt()};ue.label=`Texture${At}`,me=U=>{u.setAtlasEnabled(U),Mt()},ue.refresh(),wt.title="toggle the baked texture (T)",wt.addEventListener("click",Zt),A&&document.body.appendChild(wt),Mt();const It=$.get("bundle_b");let qt=()=>{};if({}.VITE_MIP2D_UI==="1"&&(Pr(X)||It)){const U=document.createElement("button");U.style.cssText=wt.style.cssText.replace("top:8px","top:42px"),U.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let J=null;const re=()=>{U.textContent=`Mip 2D filter: ${Q.mip2d?"ON":"OFF"}`,U.style.borderColor=Q.mip2d?"#f0b060":"#444",U.style.color=Q.mip2d?"#f0b060":"#bbb";try{const Se=new URL(window.location.href);Q.mip2d?Se.searchParams.set("mip2d","1"):Se.searchParams.delete("mip2d"),history.replaceState(history.state,"",Se.toString())}catch{}},ve=()=>{so(Q.mip2d,Q.mip2d_k,a,u.render_settings_buffer),J==null||J.refresh(),re()};U.addEventListener("click",()=>{Q.mip2d=!Q.mip2d,ve()}),J=_e.addInput(Q,"mip2d",{label:"Mip 2D filter"}).on("change",()=>ve()),document.body.appendChild(U),re(),qt=()=>{const Se=Pr(X);U.style.display=Se?"":"none",J&&(J.hidden=!Se)},qt(),window.__halloumiMip2D={get on(){return Q.mip2d},toggle:()=>U.click()}}let Gt=()=>{};if(It){const U=$.get("label_a")??"A",J=$.get("label_b")??"B",re={a:{pc:X,atlas:A,renderer:u},b:null};let ve="a",Se=null;const fe=document.createElement("button");fe.style.cssText=wt.style.cssText.replace("top:8px","top:76px"),fe.title=`switch between the two bakes of this scene (B key): ${U} / ${J}`;const we=(Oe="")=>{fe.textContent=Oe||`Scene: ${ve==="a"?U:J}  ⇄`,fe.style.borderColor=ve==="b"?"#60b0f0":"#f0b060",fe.style.color=ve==="b"?"#60b0f0":"#f0b060";try{const st=new URL(window.location.href);ve==="b"?st.searchParams.set("side","b"):st.searchParams.delete("side"),history.replaceState(history.state,"",st.toString())}catch{}},Ce=()=>re.b?Promise.resolve(re.b):(Se||(Se=Nu(It,a,Oe=>{ve==="a"&&we(Oe)}).then(Oe=>(re.b={pc:Oe.pc,atlas:Oe.atlas,renderer:null},we(),re.b))),Se),qe=Oe=>{const st=Ht.slice(0);Oe.renderer=new Gs(Oe.pc,a,G,d.uniform_buffer,_,Oe.atlas,Oe===re.a?o:{...o,staticSortKeys:null}),new Uint8Array(Ht).set(new Uint8Array(st))},He=Oe=>{const st=re[Oe];st.renderer||qe(st);const Ft=u,Ke=st.renderer;Ke.bgColor=[...Ft.bgColor],Ke.setAtlasEnabled(Q.atlas_enabled&&st.atlas!==null),Ke.setLegacyRenderer(Q.legacy_renderer),Ke.setOpaqueThresh(Q.opaque_thresh),Ke.setTwoPass(Q.two_pass),Ke.setOverdrawMax(Q.overdraw_max),Ke.setOverdrawMode(Q.overdraw==="off"?0:Q.overdraw==="raster"?2:1),Ke.setMsaa(Q.msaa),Ke.setFetchById(Q.fetch_by_id);{const Dt=st.pc.surfel_data,ct=Dt.length/8;let hn=0,Ut=0,Gn=0;for(let Vt=0;Vt<ct;Vt++)hn+=Dt[Vt*8],Ut+=Dt[Vt*8+1],Gn+=Dt[Vt*8+2];Ke.setBfcParams(Q.bfc_cos,ct>0?[hn/ct,Ut/ct,Gn/ct]:[0,0,0])}cu(st.pc.feature_mode,void 0,void 0,!1),lu(st.pc.K,void 0,void 0,!1),wn(i.width,i.height,void 0,void 0,!1),Gr(a,Ke.render_settings_buffer),u=Ke,z=Ke,X=st.pc,A=st.atlas,y=X.num_points.toLocaleString(),ve=Oe,qt(),we(),console.log(`[A/B] active = ${Oe} (${Oe==="a"?U:J}): ${X.num_points} surfels, feature_mode ${X.feature_mode}, EWA rows ${Pr(X)}`)};Gt=()=>{if(ve==="a"){if(re.b){He("b");return}Jn(`loading ${J} ...`),Ce().then(()=>{He("b"),Yt()}).catch(Oe=>{Yt(),console.error("[A/B] B failed:",Oe),we(`B failed: ${(Oe==null?void 0:Oe.message)??Oe}`)})}else He("a")},fe.addEventListener("click",()=>Gt()),document.body.appendChild(fe),we(),$.get("side")==="b"?Gt():x||setTimeout(()=>{Ce().then(Oe=>{Oe.renderer||qe(Oe)}).catch(Oe=>console.warn("[A/B] preload failed:",Oe))},1500),window.__halloumiAB={get side(){return ve},toggle:()=>Gt(),get bReady(){var Oe;return!!((Oe=re.b)!=null&&Oe.renderer)}}}if(A&&(W||P))if(W){const U={};U[`A${ht(A)} · bundle`]="A",U[`B${ht(W)} · atlas2`]="B";const J={atlas:"A"};_e.addInput(J,"atlas",{label:"Atlas source",options:U}).on("change",re=>{const ve=re.value==="B"?W:A;u.setAtlas(ve),At=ht(ve),ue.label=`Texture${At}`,Mt(),console.log(`[atlas2] now sampling ${re.value}${At}`)})}else{const U={note:P};_e.addMonitor(U,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const it=A!==null&&(A.meta.probe_mode|0)>0;if(u.hasMips&&it)u.setMipMode(Q.mips),_e.addInput(Q,"mips",{label:"Mips (trilinear)"}).on("change",U=>u.setMipMode(U.value));else if(A!==null&&A.meta.format!==4294967295&&typeof u.setMipMode=="function"){const U=$.get("mipbias"),J=u.hasMips,re={mode:U==="aniso"||$.get("aniso")==="1"?"aniso":J&&(U==="0"||U==="1"||U==="2")?U:"off"},ve=fe=>{fe==="off"?u.setMipMode(0):fe==="aniso"?u.setMipMode(2):(u.setMipLodBias(Number(fe)),u.setMipMode(1)),console.log(`[mips] ${fe==="off"?"off (level 0 only)":fe==="aniso"?"anisotropic 16x (textureSampleGrad)":`on, bias ${fe}`}`)};ve(re.mode);const Se={"off (level 0)":"off","anisotropic 16x":"aniso"};J&&Object.assign(Se,{"bias 0 (full)":"0","bias 1":"1","bias 2":"2"}),_e.addInput(re,"mode",{label:J?"Atlas mips":"Atlas filter",options:Se}).on("change",fe=>ve(fe.value))}const St=_e.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});p&&p.then(U=>{const J=u,re=new Float32Array(U.nSurfels),ve={cpu:"--"};let Se=null;J.preFrame=()=>{u===J&&(Q.bsp_order?(Se!==!0&&U.invalidate(),U.computeKeys(d.position)&&(J.writeSortKeys(U.keys),ve.cpu=`${U.lastMs.toFixed(2)} ms / ${U.nNodes} nodes`)):Se!==!1&&J.writeSortKeys(re),Se=Q.bsp_order)},St.addInput(Q,"bsp_order",{label:"BSP order (vs depth sort)"}),St.addMonitor(ve,"cpu",{label:"BSP traversal",interval:500})}).catch(U=>console.error("[bsp] disabled:",U)),St.addInput(Q,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",U=>Hn({raysplat:U.value==="raysplat",centred:U.value==="centred"},a,u.render_settings_buffer));const Xt=globalThis.__gpuAdapterInfo??{},on={s:`${Xt.vendor??"?"} / ${Xt.architecture??"?"}
${Xt.device||Xt.description||"?"}`};St.addMonitor(on,"s",{label:"GPU",multiline:!0,lineCount:2}),St.addInput(Q,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",U=>Hn({hypLegacy:U.value},a,u.render_settings_buffer)),St.addInput(Q,"two_pass",{label:"Two-pass (layer)"}).on("change",U=>u.setTwoPass(U.value)),St.addInput(Q,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",U=>u.setOpaqueThresh(U.value)),St.addInput(Q,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",U=>u.setOverdrawMode(U.value==="shaded"?1:U.value==="raster"?2:0)),St.addInput(Q,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",U=>u.setOverdrawMax(U.value));const xn={s:"—"};St.addMonitor(xn,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(u.overdrawModeValue===0){xn.s="—";return}u.readOverdrawStats().then(U=>{U&&(xn.s=`mean ${U.mean.toFixed(1)} frag/px · ${U.meanCovered.toFixed(1)} on covered
max ${U.max} · covered ${(U.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(U=>console.warn("[overdraw] readback failed:",U))},500),_e.addInput(Q,"legacy_renderer",{label:"Legacy renderer"}).on("change",U=>u.setLegacyRenderer(U.value)),_e.addInput(Q,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",U=>{u.setFetchById(U.value);try{localStorage.setItem("halloumi.fetch_by_id",U.value?"1":"0")}catch{}}),_e.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>Rr("webgl")),Q.msaa=$.get("msaa")==="1",Q.msaa&&u.setMsaa(!0),_e.addInput(Q,"msaa",{label:"MSAA 4×"}).on("change",U=>u.setMsaa(U.value));const Rt={aspect:"canvas"},Kt=_e.addFolder({title:"📸 Screenshot",expanded:!1});Kt.addInput(Rt,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Wt={s:"pick a size to capture"};Kt.addMonitor(Wt,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Ws=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let an=null;function Ks(U){let J;if(Rt.aspect==="canvas")J=i.width/i.height;else{const[we,Ce]=Rt.aspect.split(":").map(Number);J=we/Ce}const re=a.limits.maxTextureDimension2D;let ve,Se;if(U==="canvas"&&Rt.aspect==="canvas")ve=i.width,Se=i.height;else{const we=U==="canvas"?Math.max(i.width,i.height):U;J>=1?(ve=we,Se=Math.round(we/J)):(Se=we,ve=Math.round(we*J))}const fe=Math.min(1,re/Math.max(ve,Se));return ve=Math.max(2,Math.round(ve*fe)&-2),Se=Math.max(2,Math.round(Se*fe)&-2),[ve,Se]}function ln(U,J){const re=URL.createObjectURL(U),ve=document.createElement("a");ve.href=re,ve.download=J,document.body.appendChild(ve),ve.click(),ve.remove(),setTimeout(()=>URL.revokeObjectURL(re),1e4)}async function js(U,J){var we;const re=(U.size/1048576).toFixed(1),ve=window;if(typeof ve.showSaveFilePicker=="function")try{const Ce=await ve.showSaveFilePicker({suggestedName:J,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),qe=await Ce.createWritable();return await qe.write(U),await qe.close(),`saved ${Ce.name??J} (${re} MB) where you chose`}catch(Ce){if((Ce==null?void 0:Ce.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Se=new File([U],J,{type:"image/png"}),fe=navigator;if(fe.share&&((we=fe.canShare)!=null&&we.call(fe,{files:[Se]})))try{return await fe.share({files:[Se],title:J}),`shared ${J} (${re} MB) via share sheet`}catch(Ce){if((Ce==null?void 0:Ce.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return ln(U,J),`downloaded ${J} (${re} MB) to your browser's Downloads folder`}async function _s(U){if(v)return;const[J,re]=Ks(U);Wt.s=`rendering ${J}×${re}…`;const ve=i.width,Se=i.height;d.setRenderSize(J,re),wn(J,re,a,u.render_settings_buffer);const fe=a.createTexture({size:[J,re,1],format:G,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),we=Math.ceil(J*4/256)*256,Ce=a.createBuffer({size:we*re,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),qe=a.createCommandEncoder({label:"screenshot"});u.frame(qe,fe.createView(),!1),qe.copyTextureToBuffer({texture:fe},{buffer:Ce,bytesPerRow:we,rowsPerImage:re},[J,re,1]),a.queue.submit([qe.finish()]),d.clearRenderSize(),wn(ve,Se,a,u.render_settings_buffer);try{await Ce.mapAsync(GPUMapMode.READ);const He=new Uint8Array(Ce.getMappedRange()),yt=new Uint8ClampedArray(J*re*4);for(let ct=0;ct<re;ct++)yt.set(He.subarray(ct*we,ct*we+J*4),ct*J*4);for(let ct=3;ct<yt.length;ct+=4)yt[ct]=255;Ce.unmap();const Oe=document.createElement("canvas");Oe.width=J,Oe.height=re,Oe.getContext("2d").putImageData(new ImageData(yt,J,re),0,0);const st=await new Promise((ct,hn)=>Oe.toBlob(Ut=>Ut?ct(Ut):hn(new Error("toBlob failed")),"image/png")),Ft=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),Ke=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),Dt=`${Ft}_${J}x${re}_${Ke}.png`;an={blob:st,name:Dt},Wt.s=await js(st,Dt)}catch(He){console.error("[screenshot]",He),Wt.s=`failed: ${He}`}finally{Ce.destroy(),fe.destroy()}}{const U=document.createElement("div");U.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const J=(ve,Se,fe)=>{const we=document.createElement("button");we.className="tp-btnv_b",we.textContent=ve,we.title=Se,we.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",we.addEventListener("click",fe),U.appendChild(we)};J("Canvas","current canvas size",()=>{_s("canvas")});for(const[ve,Se]of Ws)J(ve,`${Se} px long edge`,()=>{_s(Se)});(Kt.element.querySelector(".tp-fldv_c")??Kt.element).appendChild(U)}Kt.addButton({title:"⬇ Download last"}).on("click",()=>{if(!an){Wt.s="nothing captured yet";return}ln(an.blob,an.name),Wt.s=`downloaded ${an.name} to your browser's Downloads folder`}),_e.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(oe.length>0)d.set_preset(oe[0]);else{const U=X.bbox.max[0]-X.bbox.min[0],J=X.bbox.max[1]-X.bbox.min[1],re=X.bbox.max[2]-X.bbox.min[2],Se=.5*Math.sqrt(U*U+J*J+re*re)*.5;H.set(l[0]-Se,l[1]-Se,l[2]-Se,d.position);const fe=H.create(Se,Se,Se);H.normalize(fe,fe);const we=H.create();H.cross(H.create(0,1,0),fe,we),H.normalize(we,we);const Ce=H.create();H.cross(fe,we,Ce);const qe=Ct.create(we[0],Ce[0],fe[0],we[1],Ce[1],fe[1],we[2],Ce[2],fe[2]);vt.fromMat3(qe,d.rotation),d.update_buffer()}g.resetToCamera(),f()});const yn={result:"— click Benchmark —"},zn=_e.addMonitor(yn,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});zn.hidden=!0;const Qn={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function ms(){const J=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const re of Object.keys(Qn))if(J.startsWith(re))return re;return null}const cn=document.createElement("div");cn.id="bench-overlay",cn.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(cn);function un(U,J,re){const ve=Math.floor(J/Math.max(1,re)*100),Se=32,fe=Math.floor(J/Math.max(1,re)*Se),we="█".repeat(fe)+"░".repeat(Se-fe);cn.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${U}</div><div>[${we}] ${ve}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${J} / ${re} frames · offscreen · pipelined · no vsync</div>`,cn.style.display="block"}function Hs(){cn.style.display="none"}async function vs(U=10,J=200){if(v)return;if(oe.length===0){yn.result="no cameras to benchmark";return}v=!0;const re=be,ve=Q.animate,Se=new Float32Array(d.position),fe=new Float32Array(d.rotation);be=!1,Q.animate=!1,Te.refresh(),te=null,g.enabled=!1;const we=ms(),Ce=we?Qn[we]:null,qe=(Ce==null?void 0:Ce.w)??i.width,He=(Ce==null?void 0:Ce.h)??i.height,yt=(Ce==null?void 0:Ce.fovY)??d.getFov(),Oe=we?`${we} · ${qe>=4e3/4+500?"images_4":"images_2"}`:"custom",st=i.width,Ft=i.height,Ke=d.getFov();i.width=qe,i.height=He,d.setFov(yt),wn(qe,He,a,u.render_settings_buffer);const Dt=a.createTexture({size:[qe,He,1],format:G,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ct=Dt.createView(),hn=()=>{const Et=a.createCommandEncoder();u.frame(Et,ct,!1),a.queue.submit([Et.finish()])},Ut=()=>new Promise(Et=>setTimeout(Et,0)),Gn=20,Vt=async(Et,Sn)=>{let On=0,Qt=0;for(un(Sn,0,Et),await Ut();Qt<Et;){const Fn=Math.min(Gn,Et-Qt),Vn=performance.now();for(let ts=0;ts<Fn;ts++)d.set_preset(oe[(Qt+ts)%oe.length]),hn();await a.queue.onSubmittedWorkDone();const Qs=performance.now();On+=Qs-Vn,Qt+=Fn,un(Sn,Qt,Et),await Ut()}return On};try{await Vt(U,"Warming up");const Sn=await Vt(J,"Benchmarking")/J,On=1e3/Sn,Qt=X.num_points??X.surfel_data.length/8,Fn=(yt*180/Math.PI).toFixed(1),Vn=`${On.toFixed(1)} FPS  (${Sn.toFixed(2)} ms/frame)
${qe}×${He} · fovY ${Fn}° · ${Oe}
${Qt.toLocaleString()} surfels · ${U}w+${J}b · pipelined`+(u.hasMips?` · ${u._mipMode?`mips bias ${u.mipLodBias}`:"mips off"}`:"");yn.result=Vn,zn.hidden=!1,console.log("[bench]",Vn.replace(/\n/g,"  |  "))}catch(Et){console.error("[bench] failed:",Et),yn.result=`bench failed: ${Et}`,zn.hidden=!1}finally{Hs(),Dt.destroy(),i.width=st,i.height=Ft,d.setFov(Ke),wn(st,Ft,a,u.render_settings_buffer),d.position.set(Se),d.rotation.set(fe),d.update_buffer(),g.enabled=!re,be=re,Q.animate=ve,Te.refresh(),v=!1}}_e.addButton({title:"📊 Benchmark"}).on("click",()=>vs());const bs=Math.PI/2,xt=new Set,Ys=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Zs=U=>{const J=U.target;return!!J&&(J.tagName==="INPUT"||J.tagName==="TEXTAREA"||J.isContentEditable)},Xs=()=>xt.has("ShiftLeft")||xt.has("ShiftRight");document.addEventListener("keyup",U=>{xt.delete(U.code)}),window.addEventListener("blur",()=>xt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&xt.clear()});const gs=U=>{if(xt.size===0||Q.animate)return;const J=Xs()?3:1;let re=0;xt.has("KeyX")&&(re+=1),xt.has("KeyZ")&&(re-=1),re!==0&&(g.addRoll(re*bs*J*U),te=null);const ve=d.rotation,Se=[ve[0],ve[4],ve[8]],fe=[ve[1],ve[5],ve[9]],we=[ve[2],ve[6],ve[10]],Ce=g.center,He=(g.sceneRadius??Math.max(.05,H.distance(d.position,Ce)))*.5*J*U;let yt=0,Oe=0,st=0;if(xt.has("KeyW")&&(st+=1),xt.has("KeyS")&&(st-=1),xt.has("KeyD")&&(yt+=1),xt.has("KeyA")&&(yt-=1),xt.has("KeyE")&&(Oe+=1),xt.has("KeyQ")&&(Oe-=1),!yt&&!Oe&&!st)return;const Ft=[0,0,0];for(let Ke=0;Ke<3;Ke++)Ft[Ke]=(Se[Ke]*yt+fe[Ke]*Oe+we[Ke]*st)*He;for(let Ke=0;Ke<3;Ke++)d.position[Ke]+=Ft[Ke],Ce[Ke]+=Ft[Ke];d.update_buffer(),te=null};document.addEventListener("keydown",U=>{if(Zs(U))return;const J=U.key,re=J.toLowerCase();if(U.ctrlKey||U.metaKey||U.altKey){xt.clear();return}if(Ys.includes(U.code)&&!(U.shiftKey&&U.code==="KeyD")){xt.add(U.code),U.preventDefault();return}if(re==="t"){Zt();return}if(re==="b"){Gt();return}if(J>="0"&&J<="9"&&oe.length>0){const ve=parseInt(J);ve<oe.length&&tt(ve)}else J==="ArrowLeft"||J==="PageUp"?(tt(ge-1),U.preventDefault()):J==="ArrowRight"||J==="PageDown"?(tt(ge+1),U.preventDefault()):U.shiftKey&&re==="d"&&u.debugReadSortedIndices(30).catch(ve=>console.error("[DEBUG] readback failed:",ve))});function ws(U,J){const re=i.getBoundingClientRect();return[(U-re.left)*d.viewport[0]/re.width,(J-re.top)*d.viewport[1]/re.height]}i.addEventListener("dblclick",U=>{const[J,re]=ws(U.clientX,U.clientY);b(J,re)});let es=0,xs=0,ys=0;i.addEventListener("pointerdown",U=>{if(U.pointerType!=="touch")return;const J=performance.now(),re=J-es,ve=U.clientX-xs,Se=U.clientY-ys;if(re>0&&re<300&&ve*ve+Se*Se<40*40){const[fe,we]=ws(U.clientX,U.clientY);b(fe,we),es=0}else es=J,xs=U.clientX,ys=U.clientY});function dn(){return T}let Ot=performance.now(),jt=60,pn=Promise.resolve(),Pn=0,In=0;function Jt(){Js().catch(U=>{In++<5&&console.error("[frame] exception (render loop kept alive):",U),requestAnimationFrame(Jt)})}async function Js(){var Se;const U=performance.now(),J=Math.min((U-Ot)/1e3,.1);if(Ot=U,J>0){const fe=((Se=u.lastStageBreakdownMs)==null?void 0:Se.total)??0,we=fe>.5?1e3/fe:1/J;jt=jt*.9+we*.1,xe.stats=`${y} surfels · ${Math.round(jt)} fps
${i.width}×${i.height} px`}if(v){requestAnimationFrame(Jt);return}if(dn()&&(te||be)&&(te=null,g.resetToCamera(),f(),be&&(be=!1,Q.animate=!1,Te.refresh())),be&&Q.animateMode==="circle"&&Xe){Ne+=J/Qe,Ne>=1&&(Ne-=1);const fe=Uo(Xe,Ne);d.set_preset(fe),g.update(J);const we=a.createCommandEncoder();u.frame(we,s.getCurrentTexture().createView()),a.queue.submit([we.finish()]),Pn++,Pn===2&&Yt(),requestAnimationFrame(Jt);return}if(te){te.t+=J/te.duration;const fe=Math.min(1,te.t),we=fe*fe*(3-2*fe);H.lerp(te.fromPos,te.toPos,we,d.position),pt.slerp(te.fromQuat,te.toQuat,we,ke),Ct.fromQuat(ke,Ae),vt.fromMat3(Ae,d.rotation),d.update_buffer(),te.t>=1&&(d.set_preset(te.target),te=null,be?oe.length>0&&(se=K):(g.resetToCamera(),f()))}else if(be&&!dn()){const fe=Q.animateMode==="circle"&&Je.length>0,we=fe?Je:oe;if(we.length!==0){if(se-=J,se<=0){const qe=((fe?ne:ge)+1)%we.length;fe?ne=qe:ge=qe;const He=fe?F/8:F;Ze(we[qe],He),fe||(Be.view=`${ge+1} / ${oe.length}: ${oe[ge].img_name??ge}`)}}}gs(J),g.update(J),R(),ee(),await pn;const re=a.createCommandEncoder(),ve=s.getCurrentTexture().createView();if(Q.upscale!=="off"){const fe=Q.upscale_factor;let we=Q.upscale;if(we==="bc5"||we==="p"){const He=at(we,fe);He?He!==nt&&(u.setSlopeAtlas(He.view,[He.scaleU,He.offU,He.scaleV,He.offV]),nt=He):we="hermite"}u.slopeSource=Bo[we]??0,(!q||q.mode!==we||q.scale!==1/fe)&&(q==null||q.destroy(),q=new Au(a,G,we,1/fe));const Ce=q.lowTarget(i.width,i.height),qe=d.getRenderSize();(!qe||qe[0]!==Ce.w||qe[1]!==Ce.h||Z[2]!==i.width||Z[3]!==i.height)&&(d.setRenderSize(Ce.w,Ce.h,i.width,i.height),Z=[Ce.w,Ce.h,i.width,i.height]),wn(Ce.w,Ce.h,a,u.render_settings_buffer),u.slopeTarget=q.slopeTarget,u.frame(re,Ce.view),u.slopeTarget=null,q.pass(re,ve,i.width,i.height)}else(Z[0]!==0||d.getRenderSize()!==null)&&(d.clearRenderSize(),Z=[0,0,0,0],L()),u.frame(re,ve);a.queue.submit([re.finish()]),pn=a.queue.onSubmittedWorkDone(),Pn++,Pn===2&&Yt(),requestAnimationFrame(Jt)}requestAnimationFrame(Jt)}}const Wu=i=>`#version 300 es
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
${i?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
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
}`;function Io(i){return{bc7:!!i.getExtension("EXT_texture_compression_bptc"),astc:!!i.getExtension("WEBGL_compressed_texture_astc")}}function Ku(i,s){const a=Io(i),_=s.format===2||s.format===7,d=s.format===3||s.format===8;let g=0;_&&a.bc7?g=36492:d&&a.astc&&(g=37808);const T=ie=>(console.warn("[gl]",ie),{tex:null,status:ie,slice_width:s.slice_width,layer_h:s.layer_h,n_slices:0,rects:s.rects_expanded});if(!g)return T(`atlas is ${_?"BC7":d?"ASTC":`format ${s.format}`}; this GPU has bc7=${a.bc7} astc=${a.astc}`);let S=i.getParameter(i.MAX_TEXTURE_SIZE);try{const ie=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);ie>=256&&(S=Math.min(S,ie-ie%4))}catch{}const C=i.getParameter(i.MAX_ARRAY_TEXTURE_LAYERS),{width:R,n_layers:G,n_cols:z,layer_cuts:V,column_cuts:q,atlas_bytes:Z}=s,L=R/4*16,O=s.rects_expanded,Y=O.length/5,j=[];let ee=0,$=0,ae=0,be=!1;const le=Array.from({length:z*G},()=>[]);let ce=0,de=0;for(let ie=0;ie<Y;ie++){const Ee=O[ie*5+4]|0,ze=O[ie*5+2],_e=O[ie*5+3];Ee>=0&&Ee<le.length&&ze>0&&(le[Ee].push(ie),ce=Math.max(ce,ze),de=Math.max(de,_e))}ce=Math.ceil(ce/4)*4,de=Math.ceil(de/4)*4;const ye=(ie,Ee)=>{if(ie<=S)return[0,ie];const ze=S-Ee;if(ze<64)throw new Error(`atlas re-shard: tiles up to ${Ee} px do not fit MAX_TEXTURE_SIZE ${S}`);const _e=Math.ceil(ie/ze),Me=[0];for(let Pe=1;Pe<_e;Pe++)Me.push(Math.round(ie*Pe/_e/4)*4);return Me.push(ie),Me},Re=(ie,Ee,ze,_e)=>Math.min(ie[Ee+1]-ie[Ee]+ze,_e-ie[Ee]);try{for(let ie=0;ie<z;ie++)for(let Ee=0;Ee<G;Ee++){const ze=q[ie+1]-q[ie],_e=V[Ee+1]-V[Ee],Me=ye(ze,ce),Pe=ye(_e,de);(Me.length>2||Pe.length>2)&&(be=!0);for(let X=0;X<Me.length-1;X++)$=Math.max($,Re(Me,X,ce,ze));for(let X=0;X<Pe.length-1;X++)ae=Math.max(ae,Re(Pe,X,de,_e));j.push({c:ie,l:Ee,xcuts:Me,ycuts:Pe,base:ee}),ee+=(Me.length-1)*(Pe.length-1)}}catch(ie){return T(String(ie))}if($=Math.ceil($/4)*4,ae=Math.ceil(ae/4)*4,ee>C)return T(`atlas needs ${ee} array layers, GPU allows ${C}`);const Ue=$/4*16,pe=Ue*(ae/4);let Q;try{Q=new Uint8Array(pe*ee)}catch(ie){return T(`atlas staging buffer ${(pe*ee/2**20).toFixed(0)} MB failed: ${ie}`)}let Te=O;be&&(Te=new Float32Array(O));for(const ie of j){const Ee=ie.xcuts.length-1,ze=ie.ycuts.length-1,_e=q[ie.c+1]-q[ie.c],Me=V[ie.l+1]-V[ie.l];for(let Pe=0;Pe<ze;Pe++)for(let X=0;X<Ee;X++){const oe=ie.base+Pe*Ee+X,A=q[ie.c]+ie.xcuts[X],W=Re(ie.xcuts,X,ce,_e),P=V[ie.l]+ie.ycuts[Pe],l=Re(ie.ycuts,Pe,de,Me),b=oe*pe,f=A/4,x=W/4;for(let k=0;k<l/4;k++){const B=(P/4+k)*L+f*16;Q.set(Z.subarray(B,B+x*16),b+k*Ue)}}if(be)for(const Pe of le[ie.c*G+ie.l]){const X=O[Pe*5],oe=O[Pe*5+1];let A=0;for(;A<Ee-1&&X>=ie.xcuts[A+1];)A++;let W=0;for(;W<ze-1&&oe>=ie.ycuts[W+1];)W++;Te[Pe*5]=X-ie.xcuts[A],Te[Pe*5+1]=oe-ie.ycuts[W],Te[Pe*5+4]=ie.base+W*Ee+A}}const xe=i.createTexture();i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D_ARRAY,xe),i.compressedTexImage3D(i.TEXTURE_2D_ARRAY,0,g,$,ae,ee,0,Q),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);const me=i.getError();if(me!==i.NO_ERROR){i.deleteTexture(xe);const ie=me===i.OUT_OF_MEMORY?"OUT_OF_MEMORY":me===i.INVALID_VALUE?"INVALID_VALUE":`0x${me.toString(16)}`;return T(`atlas upload failed: GL ${ie} (${$}x${ae}x${ee} ${g===36492?"BC7":"ASTC"}, ${(pe*ee/2**20).toFixed(0)} MB, max tex ${S})`)}const ue=`${g===36492?"BC7":"ASTC"} atlas ${$}x${ae}x${ee}${be?` (re-sharded for max tex ${S})`:""}`;return{tex:xe,status:ue,slice_width:$,layer_h:ae,n_slices:ee,rects:Te}}const oo=28,ps=8,ju=i=>`#version 300 es
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

ivec2 tc(int l) { return ivec2(l & ${(1<<i)-1}, l >> ${i}); }
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
        float lg[${ps}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${ps}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${ps}; k++) {
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
}`,Hu=`#version 300 es
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
}`;class ao{constructor(s,a,_,d={}){D(this,"gl");D(this,"n");D(this,"K");D(this,"twLog2");D(this,"pre");D(this,"draw");D(this,"preU",{});D(this,"drawU",{});D(this,"texSurf");D(this,"texSv");D(this,"texUv");D(this,"idBuf");D(this,"recBuf");D(this,"preVao");D(this,"drawVao");D(this,"tf");D(this,"atlasTex",null);D(this,"atlasStatus","no atlas");D(this,"atlasUpload",null);D(this,"atlasOn",!1);D(this,"sd");D(this,"ok");D(this,"keyF");D(this,"keyU");D(this,"ids");D(this,"ids2");D(this,"keys2");D(this,"hist");D(this,"cnt",new Uint32Array(256));D(this,"bgColor",[0,0,0]);D(this,"scaling",1);D(this,"lastStats",{visible:0,cpuMs:0});D(this,"only",-1);D(this,"dbg",0);if(this.gl=s,a.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(a.K>ps)throw new Error(`WebGL2 backend supports K <= ${ps} SV sites (bundle has ${a.K})`);this.n=a.num_points,this.K=a.K,this.sd=a.surfel_data;const g=this.n,T=s.getParameter(s.MAX_TEXTURE_SIZE);this.twLog2=T>=4096?12:11;const S=1<<this.twLog2,C=new Uint32Array(a.surfel_data.buffer,a.surfel_data.byteOffset,g*8);for(let L=0;L<g;L++)if(C[L*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(g);for(let L=0;L<g;L++){const O=Yu(C[L*8+3]);this.ok[L]=O>1/255&&(C[L*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(g),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(g),this.ids2=new Uint32Array(g),this.keys2=new Uint32Array(g),this.hist=new Uint32Array(256*4);const R=L=>Math.max(1,Math.ceil(g*L/S)),G=(L,O,Y,j,ee)=>{const $=s.createTexture();return s.bindTexture(s.TEXTURE_2D,$),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,L,S,R(j),0,O,Y,ee),$};{const L=R(2),O=new Uint32Array(S*L*4);O.set(C),this.texSurf=G(s.RGBA32UI,s.RGBA_INTEGER,s.UNSIGNED_INT,2,O)}{const L=this.K,O=R(2*L),Y=new Float32Array(S*O*4),j=a.sv_params,ee=L*7;for(let $=0;$<g;$++){const ae=$*ee,be=$*2*L*4;for(let le=0;le<L;le++){Y[be+le*4]=j[ae+le*3],Y[be+le*4+1]=j[ae+le*3+1],Y[be+le*4+2]=j[ae+le*3+2],Y[be+le*4+3]=j[ae+L*6+le];const ce=be+(L+le)*4;Y[ce]=j[ae+L*3+le*3],Y[ce+1]=j[ae+L*3+le*3+1],Y[ce+2]=j[ae+L*3+le*3+2]}}this.texSv=G(s.RGBA32F,s.RGBA,s.FLOAT,2*L,Y)}const z=_?Ku(s,_):null;z&&(this.atlasStatus=z.status),this.atlasUpload=z;{const L=R(2),O=new Float32Array(S*L*4);if(_&&z&&z.tex){const Y=z.slice_width,j=z.layer_h,ee=_.uv_extent,$=z.rects;for(let ae=0;ae<g;ae++){if(!this.ok[ae])continue;const be=$[ae*5],le=$[ae*5+1],ce=$[ae*5+2],de=$[ae*5+3],ye=ae*8;O[ye]=(be+.5*Math.max(ce,1))/Y,O[ye+1]=(le+.5*Math.max(de,1))/j,O[ye+2]=ce/(2*ee)/Y,O[ye+3]=de/(2*ee)/j,O[ye+4]=$[ae*5+4]}}this.texUv=G(s.RGBA32F,s.RGBA,s.FLOAT,2,O)}const V=(L,O)=>{const Y=s.createShader(L);if(s.shaderSource(Y,O),s.compileShader(Y),!s.getShaderParameter(Y,s.COMPILE_STATUS))throw new Error("GLSL: "+s.getShaderInfoLog(Y));return Y},q=L=>{if(s.linkProgram(L),!s.getProgramParameter(L,s.LINK_STATUS))throw new Error("GLSL link: "+s.getProgramInfoLog(L))};this.pre=s.createProgram(),s.attachShader(this.pre,V(s.VERTEX_SHADER,ju(this.twLog2))),s.attachShader(this.pre,V(s.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),s.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],s.INTERLEAVED_ATTRIBS),q(this.pre);for(const L of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[L]=s.getUniformLocation(this.pre,L);const Z=!(_&&_.kernel_type===0)&&a.kernel_type!==0;this.draw=s.createProgram(),s.attachShader(this.draw,V(s.VERTEX_SHADER,Hu)),s.attachShader(this.draw,V(s.FRAGMENT_SHADER,Wu(Z))),q(this.draw);for(const L of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[L]=s.getUniformLocation(this.draw,L);try{const L=new URLSearchParams(window.location.search);this.only=parseInt(L.get("only")??"-1",10),this.dbg=parseInt(L.get("dbg")??"0",10)|0}catch{}this.idBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.bufferData(s.ARRAY_BUFFER,g*4,s.DYNAMIC_DRAW),this.recBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf),s.bufferData(s.ARRAY_BUFFER,g*oo*4,s.STREAM_COPY),s.bindBuffer(s.ARRAY_BUFFER,null),this.preVao=s.createVertexArray(),s.bindVertexArray(this.preVao),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.enableVertexAttribArray(0),s.vertexAttribIPointer(0,1,s.UNSIGNED_INT,0,0),s.bindVertexArray(null),this.drawVao=s.createVertexArray(),s.bindVertexArray(this.drawVao),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf);for(let L=0;L<7;L++)s.enableVertexAttribArray(L),s.vertexAttribPointer(L,4,s.FLOAT,!1,oo*4,L*16),s.vertexAttribDivisor(L,1);s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),this.tf=s.createTransformFeedback(),s.useProgram(this.pre),s.uniform1i(this.preU.u_surf,1),s.uniform1i(this.preU.u_sv,2),s.uniform1i(this.preU.u_uv,3),s.uniform1i(this.preU.u_K,this.K),s.uniform1f(this.preU.u_sh_bias,d.shBias??a.sh_bias),s.uniform1f(this.preU.u_scaling,this.scaling),s.useProgram(this.draw),s.uniform1i(this.drawU.u_atlas,0),s.uniform1i(this.drawU.u_atlas_on,0),s.uniform4f(this.drawU.u_tex,0,0,_?_.res_bias:0,_?_.uv_extent:4),_&&z&&z.tex&&(this.atlasTex=z.tex,this.atlasOn=!0,s.uniform1i(this.drawU.u_atlas_on,1),s.uniform4f(this.drawU.u_tex,_.atlas_scale,_.atlas_offset,_.res_bias,_.uv_extent),s.uniform2f(this.drawU.u_dims,z.slice_width,z.layer_h)),s.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(s){this.atlasTex&&(this.atlasOn=s,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,s?1:0))}setGaussianScaling(s){this.scaling=s,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,s)}setShBias(s){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,s)}render(s){const a=this.gl,_=this.n,d=s.rotation,g=s.eye,T=this.sd,S=this.ok,C=s.width,R=s.height,G=performance.now(),z=.5*R/Math.tan(s.fovY*.5),V=-(d[0]*g[0]+d[4]*g[1]+d[8]*g[2]),q=-(d[1]*g[0]+d[5]*g[1]+d[9]*g[2]),Z=-(d[2]*g[0]+d[6]*g[1]+d[10]*g[2]),L=.01,O=s.zfar??100,Y=O/(O-L),j=-(O*L)/(O-L),ee=2*z/C,$=2*z/R,ae=d[0],be=d[4],le=d[8],ce=d[1],de=d[5],ye=d[9],Re=d[2],Ue=d[6],pe=d[10],Q=this.keyF,Te=this.ids;let xe=0;for(let ie=0;ie<_;ie++){if(S[ie]===0||this.only>=0&&ie!==this.only)continue;const Ee=ie*8,ze=T[Ee],_e=T[Ee+1],Me=T[Ee+2],Pe=Re*ze+Ue*_e+pe*Me+Z;if(!(Pe>0))continue;const X=Y*Pe+j,oe=X/Pe;if(!(oe>0&&oe<1))continue;const A=1.2*Pe,W=ae*ze+be*_e+le*Me+V;if(Math.abs(ee*W)>A)continue;const P=ce*ze+de*_e+ye*Me+q;Math.abs($*P)>A||(Q[xe]=O-X,Te[xe]=ie,xe++)}const me=this.radixSort(xe),ue=performance.now()-G;return this.lastStats={visible:xe,cpuMs:ue},xe===0?(a.viewport(0,0,C,R),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),0):(a.bindBuffer(a.ARRAY_BUFFER,this.idBuf),a.bufferSubData(a.ARRAY_BUFFER,0,me,0,xe),a.bindBuffer(a.ARRAY_BUFFER,null),a.useProgram(this.pre),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.texSurf),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,this.texSv),a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,this.texUv),a.uniformMatrix3fv(this.preU.u_R,!1,[ae,ce,Re,be,de,Ue,le,ye,pe]),a.uniform3f(this.preU.u_t,V,q,Z),a.uniform3f(this.preU.u_eye,g[0],g[1],g[2]),a.uniform2f(this.preU.u_vp,C,R),a.uniform1f(this.preU.u_focal,z),a.uniform1f(this.preU.u_zfar,O),a.bindVertexArray(this.preVao),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.tf),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),a.enable(a.RASTERIZER_DISCARD),a.beginTransformFeedback(a.POINTS),a.drawArrays(a.POINTS,0,xe),a.endTransformFeedback(),a.disable(a.RASTERIZER_DISCARD),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,null),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindVertexArray(null),a.viewport(0,0,C,R),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.disable(a.DEPTH_TEST),a.useProgram(this.draw),a.uniform2f(this.drawU.u_vp,C,R),a.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D_ARRAY,this.atlasTex)),a.bindVertexArray(this.drawVao),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,xe),a.bindVertexArray(null),xe)}radixSort(s){const a=this.keyU,_=this.hist;_.fill(0);for(let R=0;R<s;R++){const G=a[R];_[G&255]++,_[256+(G>>>8&255)]++,_[512+(G>>>16&255)]++,_[768+(G>>>24)]++}let d=a,g=this.ids,T=this.keys2,S=this.ids2;const C=this.cnt;for(let R=0;R<4;R++){const G=R*8,z=R*256;let V=!1;for(let O=0;O<256;O++)if(_[z+O]===s){V=!0;break}if(V)continue;let q=0;for(let O=0;O<256;O++)C[O]=q,q+=_[z+O];for(let O=0;O<s;O++){const Y=d[O],j=Y>>>G&255,ee=C[j]++;T[ee]=Y,S[ee]=g[O]}const Z=d;d=T,T=Z;const L=g;g=S,S=L}return g}}function Yu(i){const s=i&65535,a=s&32768?-1:1,_=s>>10&31,d=s&1023;return _===0?a*d*5960464477539063e-23:_===31?d?NaN:a*(1/0):a*(1+d/1024)*Math.pow(2,_-15)}const Sr=i=>i.format===2||i.format===7,Er=i=>i.format===3||i.format===8;async function lo(i,s,a){const _=new URLSearchParams(window.location.search),d=new Os(i,null),g=new Ao(d),T=Io(s);ft(`[gl] WebGL2 backend · bc7=${T.bc7} astc=${T.astc} · ${s.getParameter(s.RENDERER)}`);let S=null,C=null,R=[],G=null;const z={animate:_.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},V=new ko.Pane({title:"Config (WebGL2)",expanded:!0}),q={stats:"— loading —"};V.addMonitor(q,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2}),V.addInput(z,"atlas_enabled",{label:"Texture"}).on("change",w=>S==null?void 0:S.setAtlasEnabled(w.value));const Z=V.addFolder({title:"⚙ Advanced options",expanded:!1}),L={s:a.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};Z.addMonitor(L,"s",{label:"Renderer"}),Z.addButton({title:"🔁 Switch to WebGPU",disabled:!a.gpuAvailable}).on("click",()=>Rr("webgpu"));let Y=z.animate;g.enabled=!Y,Z.addInput(z,"animate",{label:"Animate"}).on("change",w=>{Y=w.value,g.enabled=!Y,Y||(g.resetToCamera(),me())}),Z.addInput(z,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>ae()),Z.addInput(z,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",w=>S==null?void 0:S.setGaussianScaling(w.value)),Z.addInput(z,"bg",{label:"Background",color:{type:"float"}}).on("change",w=>{S&&(S.bgColor=[w.value.r,w.value.g,w.value.b])});const j={s:"—"};Z.addMonitor(j,"s",{label:"Atlas"}),Z.addButton({title:"🎯 Reset camera"}).on("click",()=>ue(0,!1));const ee=document.createElement("button");ee.textContent="Texture: on",Object.assign(ee.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(ee);const $=()=>{z.atlas_enabled=!z.atlas_enabled,S==null||S.setAtlasEnabled(z.atlas_enabled),ee.textContent=`Texture: ${z.atlas_enabled?"on":"off"}`,V.refresh()};ee.addEventListener("click",$);const ae=()=>{const w=Math.max(.25,z.render_scale),o=Math.max(1,Math.ceil(w*i.clientWidth)),m=Math.max(1,Math.ceil(w*i.clientHeight));(i.width!==o||i.height!==m)&&(i.width=o,i.height=m),d.on_update_canvas()};new ResizeObserver(()=>ae()).observe(i),ae();const be=.4,le=3,ce=.3;let de=-1,ye=null,Re=0;const Ue=pt.create(),pe=Ct.create(),Q=w=>pt.fromMat(Ct.create(w[0],w[1],w[2],w[4],w[5],w[6],w[8],w[9],w[10])),Te=(w,o)=>{ye={fromPos:H.clone(d.position),toPos:H.clone(w.position),fromQuat:pt.normalize(Q(d.rotation)),toQuat:pt.normalize(Q(w.rotation)),target:w,t:0,duration:Math.max(.01,o)}},xe=document.createElement("span"),me=()=>{if(!C)return;const w=zo(d,C.surfel_data);w!==null&&g.setOrbitDepth(w)},ue=(w,o=!0)=>{if(R.length===0)return;de=(w%R.length+R.length)%R.length;const m=R[de];o?Te(m,be):(d.set_preset(m),g.resetToCamera(),me()),xe.textContent=`${de+1} / ${R.length}: ${R[de].img_name??de}`};let ie=null;const Ee=()=>{if(ie||R.length===0)return;Z.addSeparator(),ie=document.createElement("div"),ie.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const w=(o,m)=>{const p=document.createElement("button");return p.className="tp-btnv_b",p.textContent=o,p.style.cssText="flex:0 0 34px;height:24px;padding:0;",p.addEventListener("click",m),p};xe.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",ie.appendChild(w("◀",()=>ue(de-1))),ie.appendChild(xe),ie.appendChild(w("▶",()=>ue(de+1))),Z.element.appendChild(ie)};window.addEventListener("keydown",w=>{var o;((o=w.target)==null?void 0:o.tagName)!=="INPUT"&&(w.key==="ArrowLeft"||w.key==="PageUp"?ue(de-1):w.key==="ArrowRight"||w.key==="PageDown"?ue(de+1):w.key==="t"||w.key==="T"?$():w.key==="b"||w.key==="B"?A():w.key>="1"&&w.key<="9"&&ue(parseInt(w.key,10)-1))});let ze=0;const _e=(w,o)=>{if(!C)return;const m=i.getBoundingClientRect(),p=Ur((w-m.left)*i.width/m.width,(o-m.top)*i.height/m.height,i,d,C.surfel_data);p&&g.setOrbitPivot(p)};i.addEventListener("dblclick",w=>_e(w.clientX,w.clientY)),i.addEventListener("pointerup",w=>{if(w.pointerType!=="touch")return;const o=performance.now();o-ze<300&&_e(w.clientX,w.clientY),ze=o});const Me=_.get("bundle")??_.get("model_url");async function Pe(w,o){Jn(`parsing ${o} ...`);try{const m=new TextDecoder().decode(new Uint8Array(w,0,8));let p=w,u=null,c=null;m===zs&&({pcBuffer:p,camerasBuffer:u,atlasBuffer:c}=Ir(w)),Tt("parsing surfels ..."),C=await Wi(new File([p],o));let v=null;if(c&&_.get("notex")!=="1"){v=Un(c);const y=Sr(v)&&T.bc7||Er(v)&&T.astc;let I=_.get("atlas2");if(!y&&!I&&Me){const F=Me.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);F&&(I=F[2]?`${F[1]}.bitymi${F[3]??""}`:`${F[1]}_astc.bitymi${F[3]??""}`)}if(!y&&I){Tt("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:F}=await Xn(I,(K,te)=>Tt(`downloading twin atlas ...
${(K/1048576).toFixed(1)}${te?` / ${(te/1048576).toFixed(1)}`:""} MB`));if(F!=null&&F.atlasBuffer){const K=Un(F.atlasBuffer);(Sr(K)&&T.bc7||Er(K)&&T.astc)&&(v=K)}}catch(F){console.warn("[gl] atlas2 failed:",F)}}}Tt("building GPU resources ..."),G=v,S=new ao(s,C,v),S.bgColor=[z.bg.r,z.bg.g,z.bg.b],S.setGaussianScaling(z.gaussian_scaling),S.setAtlasEnabled(z.atlas_enabled),j.s=S.atlasStatus,ft(`[gl] max tex ${s.getParameter(s.MAX_TEXTURE_SIZE)} · layers ${s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS)} · ${S.atlasStatus}`),ft(`[gl] ${C.num_points} surfels · ${S.atlasStatus}`),R=[];const E=_.get("camera_url");if(u){const y=URL.createObjectURL(new Blob([u],{type:"application/json"}));try{R=await Mr(y)}finally{URL.revokeObjectURL(y)}}else if(E)try{R=await Mr(E)}catch(y){console.warn("[gl] camera_url failed:",y)}if(g.setBbox(C.bbox.min,C.bbox.max),R.length>0)Ee(),ue(0,!1);else{const y=C.centroid,I=.5*Math.hypot(C.bbox.max[0]-C.bbox.min[0],C.bbox.max[1]-C.bbox.min[1],C.bbox.max[2]-C.bbox.min[2]),F=H.create(y[0]-I,y[1]-I,y[2]-I),K=vt.lookAt(F,H.create(y[0],y[1],y[2]),H.create(0,1,0));vt.copy(K,d.rotation),d.rotation[12]=0,d.rotation[13]=0,d.rotation[14]=0,H.copy(F,d.position),d.update_buffer(),g.resetToCamera()}}catch(m){throw Yt(),m}}const X=document.getElementById("load-button");if(X==null||X.addEventListener("click",()=>{const w=document.createElement("input");w.type="file",w.accept=".ply,.bitymi",w.onchange=async()=>{var m;const o=(m=w.files)==null?void 0:m[0];o&&await Pe(await o.arrayBuffer(),o.name)},w.click()}),Me)try{Jn("downloading ...");const{bundle:w,rawPly:o}=await Xn(Me,(m,p,u,c)=>Tt(c==="cache"?`loading cached bundle ...
${(m/2**20).toFixed(1)}${p?` / ${(p/2**20).toFixed(1)}`:""} MB on this device`:`downloading ...
${(m/2**20).toFixed(1)}${p?` / ${(p/2**20).toFixed(1)}`:""} MB · ${(u/2**20).toFixed(1)} MB/s`));w?await oe(w.pcBuffer,w.camerasBuffer,w.atlasBuffer,Me.split("/").pop()??"bundle"):o&&await Pe(o,Me.split("/").pop()??"scene.ply")}catch(w){Yt(),console.error("[gl] bundle load failed:",w),q.stats=`load failed: ${(w==null?void 0:w.message)??w}`;const o=document.createElement("div");o.textContent=`Could not load this bundle in the WebGL2 renderer: ${(w==null?void 0:w.message)??w}`,Object.assign(o.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(o)}else q.stats="no ?bundle= — use 📂 Load";async function oe(w,o,m,p){const u=new TextEncoder().encode(zs),c=[w],v=[0];o&&(c.push(o),v.push(2)),m&&(c.push(m),v.push(3));const E=4+c.length*20,y=8+E,I=y+c.reduce((se,ne)=>se+ne.byteLength,0),F=new Uint8Array(I),K=new DataView(F.buffer);F.set(u,0),K.setUint32(8,c.length,!0);let te=y;c.forEach((se,ne)=>{K.setUint32(12+ne*20,v[ne],!0),K.setBigUint64(16+ne*20,BigInt(te),!0),K.setBigUint64(24+ne*20,BigInt(se.byteLength),!0),F.set(new Uint8Array(se),te),te+=se.byteLength}),await Pe(F.buffer,p)}let A=()=>{};const W=_.get("bundle_b");if(W&&S&&C){const w=_.get("label_a")??"A",o=_.get("label_b")??"B",m={a:{pc:C,renderer:S,atlas:G},b:null};let p="a",u=!1,c="";const v=document.createElement("button");Object.assign(v.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const E=(F="")=>{v.textContent=F||`Scene: ${p==="a"?w:o}  ⇄`;try{const K=new URL(window.location.href);p==="b"?K.searchParams.set("side","b"):K.searchParams.delete("side"),history.replaceState(history.state,"",K.toString())}catch{}},y=F=>{const K=document.createElement("div");Object.assign(K.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const te=document.createElement("div");te.textContent=F,K.appendChild(te);const se=document.createElement("div");se.style.marginTop="12px";const ne=(ke,Ae)=>{const ge=document.createElement("button");ge.textContent=ke,Object.assign(ge.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),ge.onclick=Ae,se.appendChild(ge)};a.gpuAvailable&&ne("Switch to WebGPU",()=>Rr("webgpu")),ne("OK",()=>K.remove()),K.appendChild(se),document.body.appendChild(K)},I=F=>{const K=F==="a"?m.a:m.b;S=K.renderer,C=K.pc,G=K.atlas,S.bgColor=[z.bg.r,z.bg.g,z.bg.b],S.setGaussianScaling(z.gaussian_scaling),S.setAtlasEnabled(z.atlas_enabled),j.s=S.atlasStatus,p=F,E(),console.log(`[gl A/B] active = ${F}: ${C.num_points} surfels`)};A=async()=>{if(!u){if(p==="b"){I("a");return}if(m.b){I("b");return}if(c){y(c);return}u=!0,E(`loading ${o} ...`);try{const{bundle:F}=await Xn(W,(ne,ke)=>E(`loading ${o} ... ${(ne/1048576).toFixed(0)}${ke?`/${(ke/1048576).toFixed(0)}`:""} MB`));if(!F)throw new Error("bundle_b must be a .bitymi bundle");const K=await Wi(new File([F.pcBuffer],"bundle_b.ply"));let te=null;if(F.atlasBuffer&&_.get("notex")!=="1"){const ne=Un(F.atlasBuffer);(Sr(ne)&&T.bc7||Er(ne)&&T.astc)&&(te=ne)}let se;try{se=new ao(s,K,te)}catch(ne){throw c=/tex3d/.test(String(ne==null?void 0:ne.message))?`“${o}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${w}”.`:`“${o}” cannot be shown in the WebGL2 renderer: ${(ne==null?void 0:ne.message)??ne}. Still showing “${w}”.`,new Error(c)}m.b={pc:K,renderer:se,atlas:te},I("b")}catch(F){console.error("[gl A/B] B failed:",F),c||(c=`Could not load “${o}”: ${(F==null?void 0:F.message)??F}`),E(),y(c)}finally{u=!1}}},v.addEventListener("click",()=>A()),document.body.appendChild(v),E(),_.get("side")==="b"&&A()}let P=performance.now(),l=0,b=0;const f=()=>{var w;return((w=g.isDragging)==null?void 0:w.call(g))??!1};let x=0;function k(){try{B()}catch(w){x++<5&&console.error("[gl frame] exception (render loop kept alive):",w)}requestAnimationFrame(k)}function B(){const w=performance.now(),o=Math.min((w-P)/1e3,.1);if(P=w,S&&C){if(ye){ye.t+=o/ye.duration;const u=Math.min(1,ye.t),c=u*u*(3-2*u);H.lerp(ye.fromPos,ye.toPos,c,d.position),pt.slerp(ye.fromQuat,ye.toQuat,c,Ue),Ct.fromQuat(Ue,pe),vt.fromMat3(pe,d.rotation),d.update_buffer(),ye.t>=1&&(d.set_preset(ye.target),ye=null,Y?Re=ce:(g.resetToCamera(),me()))}else Y&&R.length>0&&(Re-=o,Re<=0&&(de=(de+1)%R.length,Te(R[de],le),xe.textContent=`${de+1} / ${R.length}: ${R[de].img_name??de}`));f()&&ye&&(ye=null),g.update(o);const m=S.render({rotation:d.rotation,eye:d.position,fovY:d.getFovY(),width:i.width,height:i.height,zfar:d.zfar}),p=1/Math.max(o,.001);l=l===0?p:l*.9+p*.1,q.stats=`${m.toLocaleString()} / ${C.num_points.toLocaleString()} surfels · ${Math.round(l)} fps
${i.width}×${i.height} px`,b++,b===2&&Yt()}}requestAnimationFrame(k),window.__halloumiGL={stats:q,get renderer(){return S},get cameras(){return R},setPreset:ue,get atlas(){return G},pick(w,o){return C?Ur(w,o,i,d,C.surfel_data):null},pickIds(w,o){if(!C)return[];const[m,p,u]=Fs(w,o,d),c=d.position[0],v=d.position[1],E=d.position[2],y=C.surfel_data,I=new Uint32Array(y.buffer,y.byteOffset,y.length),F=te=>{const se=te>>10&31,ne=te&1023,ke=te&32768?-1:1;return se===0?ke*ne*596e-10:ke*(1+ne/1024)*Math.pow(2,se-15)},K=[];for(let te=0;te<C.num_points;te++){const se=te*8,ne=y[se],ke=y[se+1],Ae=y[se+2],ge=F(I[se+4]&65535),Be=F(I[se+4]>>>16),Ie=F(I[se+5]&65535),Ge=F(I[se+5]>>>16),Ze=F(I[se+6]&65535),tt=F(I[se+6]>>>16),Xe=1/Math.hypot(Ie,Ge,Ze,tt),Je=Ie*Xe,Ne=Ge*Xe,Qe=Ze*Xe,je=tt*Xe,ut=[1-2*(Qe*Qe+je*je),2*(Ne*Qe+Je*je),2*(Ne*je-Je*Qe)],ot=[2*(Ne*Qe-Je*je),1-2*(Ne*Ne+je*je),2*(Qe*je+Je*Ne)],Ve=[2*(Ne*je+Je*Qe),2*(Qe*je-Je*Ne),1-2*(Ne*Ne+Qe*Qe)],rt=m*Ve[0]+p*Ve[1]+u*Ve[2];if(Math.abs(rt)<1e-9)continue;const $e=((ne-c)*Ve[0]+(ke-v)*Ve[1]+(Ae-E)*Ve[2])/rt;if($e<=0)continue;const at=c+$e*m-ne,nt=v+$e*p-ke,_t=E+$e*u-Ae,lt=(at*ut[0]+nt*ut[1]+_t*ut[2])/ge,Bt=(at*ot[0]+nt*ot[1]+_t*ot[2])/Be,kt=lt*lt+Bt*Bt,mt=d.rotation,ht=d.position,At=mt[0]*(ne-ht[0])+mt[4]*(ke-ht[1])+mt[8]*(Ae-ht[2]),wt=mt[1]*(ne-ht[0])+mt[5]*(ke-ht[1])+mt[9]*(Ae-ht[2]),Mt=mt[2]*(ne-ht[0])+mt[6]*(ke-ht[1])+mt[10]*(Ae-ht[2]),Zt=i.width,It=i.height,qt=.5*It/Math.tan(d.getFovY()*.5),Gt=qt*At/Mt+(Zt-1)*.5,it=qt*wt/Mt+(It-1)*.5,St=2*((Gt-w)*(Gt-w)+(it-o)*(it-o)),Xt=F(I[se+3]&65535),on=F(I[se+3]>>>16),xn=kt>=9?0:Math.pow(Math.max(0,1-kt/9),on>1e-6?on:1),Rt=Math.min(.99,Xt*Math.max(xn,Math.exp(-.5*St)));if(Rt<1/255)continue;const Kt=G?Array.from(G.rects_expanded.subarray(te*5,te*5+5)):null,Wt=S&&S.atlasUpload?Array.from(S.atlasUpload.rects.subarray(te*5,te*5+5)):null;K.push({id:te,t:+$e.toFixed(3),u:+lt.toFixed(2),v:+Bt.toFixed(2),rho2d:+St.toFixed(2),alpha:+Rt.toFixed(3),opa:+Xt.toFixed(2),tex:I[se+7]>>>16&1,rect:Kt,remap:Wt})}return K.sort((te,se)=>te.t-se.t)}}}const co="halloumi.gpuLossReload",Zu=6e4;let uo=!1;function po(i,s){const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const _=document.createElement("div");if(_.textContent=i,a.appendChild(_),s){const d=document.createElement("button");d.textContent="Reload",Object.assign(d.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),d.onclick=()=>window.location.reload(),a.appendChild(d)}document.body.appendChild(a)}function Go(i,s){if(uo)return;uo=!0,console.error(`[gpu-loss] ${i} lost: ${s}`);let a=0;try{a=parseInt(sessionStorage.getItem(co)??"0",10)||0}catch{}const _=Date.now();if(_-a>Zu){try{sessionStorage.setItem(co,String(_))}catch{}po("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else po(`The GPU device was lost again (${i}: ${s}). Reload to try once more.`,!0)}function Xu(i){i.lost.then(a=>{a.reason!=="destroyed"&&Go("webgpu",`${a.reason}: ${a.message}`)});let s=0;i.addEventListener("uncapturederror",a=>{var _;s++<5&&console.error("[webgpu] uncaptured error:",((_=a==null?void 0:a.error)==null?void 0:_.message)??a)})}function ho(i){i.addEventListener("webglcontextlost",s=>{s.preventDefault(),Go("webgl","webglcontextlost")},!1)}(function(){let s="dev";for(const _ of Array.from(document.querySelectorAll('script[type="module"]'))){const g=_.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(g){s=g[1];break}}const a=document.createElement("div");a.textContent="v "+s,a.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(a.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(a)})();function Vs(i){const s=document.createElement("div");Object.assign(s.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const a=document.createElement("div");a.textContent=i,s.appendChild(a);const _=document.createElement("button");_.textContent="Reload",Object.assign(_.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),_.onclick=()=>window.location.reload(),s.appendChild(_),document.body.appendChild(s)}let $s=!1;window.addEventListener("unhandledrejection",i=>{if($s)return;$s=!0;const s=i.reason;Vs(`The viewer failed to load: ${(s==null?void 0:s.message)??s}`)});window.addEventListener("error",i=>{var s;$s||!i.error||($s=!0,Vs(`The viewer hit an error: ${((s=i.error)==null?void 0:s.message)??i.message}`))});try{const i=performance.memory;console.log("[mem]",{deviceMemoryGB:navigator.deviceMemory??"?",hardwareConcurrency:navigator.hardwareConcurrency,jsHeapLimitMB:i?Math.round(i.jsHeapSizeLimit/2**20):"?",dpr:window.devicePixelRatio})}catch{}(async()=>{const i=document.querySelector("#webgpu-canvas");kc(i!==null);const{forced:s,stored:a}=Fu(),_=s??a??"webgpu";let d=null;if(navigator.gpu!==void 0)try{d=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(C){console.warn("[backend] requestAdapter failed:",C)}if(_==="webgl"||d===null){const C=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!C){Vs(d===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${_==="webgl"?s?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),ho(i),lo(i,C,{gpuAvailable:d!==null});return}const g=[];d.features.has("timestamp-query")&&g.push("timestamp-query"),d.features.has("texture-compression-bc")&&g.push("texture-compression-bc"),d.features.has("texture-compression-astc")&&g.push("texture-compression-astc"),console.log("[adapter]",d.info??"(unknown)");try{const C=d.info??{};globalThis.__gpuAdapterInfo={vendor:C.vendor??"?",architecture:C.architecture??"?",device:C.device??"?",description:C.description??"?",features:Array.from(d.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(d.features)),console.log("[adapter] BC7:",d.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",d.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:d.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:d.limits.maxComputeWorkgroupStorageSize,maxBufferSize:d.limits.maxBufferSize,maxStorageBufferBindingSize:d.limits.maxStorageBufferBindingSize,maxTextureDimension2D:d.limits.maxTextureDimension2D});let T;try{T=await d.requestDevice({requiredFeatures:g,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:d.limits.maxComputeWorkgroupStorageSize,maxBufferSize:d.limits.maxBufferSize,maxStorageBufferBindingSize:d.limits.maxStorageBufferBindingSize}})}catch(C){console.warn("[backend] requestDevice failed, falling back to WebGL2:",C);const R=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!R){Vs(`WebGPU device creation failed (${C}) and WebGL2 is not available.`);return}ho(i),lo(i,R,{gpuAvailable:!1});return}Xu(T);const S=i.getContext("webgpu");qu(i,S,T,g)})();
