var wl=Object.defineProperty;var xl=(o,a,f)=>a in o?wl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f;var N=(o,a,f)=>(xl(o,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))C(x);new MutationObserver(x=>{for(const S of x)if(S.type==="childList")for(const M of S.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&C(M)}).observe(document,{childList:!0,subtree:!0});function f(x){const S={};return x.integrity&&(S.integrity=x.integrity),x.referrerPolicy&&(S.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?S.credentials="include":x.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function C(x){if(x.ep)return;x.ep=!0;const S=f(x);fetch(x.href,S)}})();function yl(o,a){return class extends o{constructor(...f){super(...f),a(this)}}}const Pl=yl(Array,o=>o.fill(0));let Re=1e-6;function Sl(o){function a(w=0,E=0){const k=new o(2);return w!==void 0&&(k[0]=w,E!==void 0&&(k[1]=E)),k}const f=a;function C(w,E,k){const r=k??new o(2);return r[0]=w,r[1]=E,r}function x(w,E){const k=E??new o(2);return k[0]=Math.ceil(w[0]),k[1]=Math.ceil(w[1]),k}function S(w,E){const k=E??new o(2);return k[0]=Math.floor(w[0]),k[1]=Math.floor(w[1]),k}function M(w,E){const k=E??new o(2);return k[0]=Math.round(w[0]),k[1]=Math.round(w[1]),k}function I(w,E=0,k=1,r){const m=r??new o(2);return m[0]=Math.min(k,Math.max(E,w[0])),m[1]=Math.min(k,Math.max(E,w[1])),m}function A(w,E,k){const r=k??new o(2);return r[0]=w[0]+E[0],r[1]=w[1]+E[1],r}function L(w,E,k,r){const m=r??new o(2);return m[0]=w[0]+E[0]*k,m[1]=w[1]+E[1]*k,m}function $(w,E){const k=w[0],r=w[1],m=E[0],u=E[1],h=Math.sqrt(k*k+r*r),l=Math.sqrt(m*m+u*u),_=h*l,y=_&&we(w,E)/_;return Math.acos(y)}function O(w,E,k){const r=k??new o(2);return r[0]=w[0]-E[0],r[1]=w[1]-E[1],r}const R=O;function H(w,E){return Math.abs(w[0]-E[0])<Re&&Math.abs(w[1]-E[1])<Re}function ie(w,E){return w[0]===E[0]&&w[1]===E[1]}function j(w,E,k,r){const m=r??new o(2);return m[0]=w[0]+k*(E[0]-w[0]),m[1]=w[1]+k*(E[1]-w[1]),m}function J(w,E,k,r){const m=r??new o(2);return m[0]=w[0]+k[0]*(E[0]-w[0]),m[1]=w[1]+k[1]*(E[1]-w[1]),m}function te(w,E,k){const r=k??new o(2);return r[0]=Math.max(w[0],E[0]),r[1]=Math.max(w[1],E[1]),r}function K(w,E,k){const r=k??new o(2);return r[0]=Math.min(w[0],E[0]),r[1]=Math.min(w[1],E[1]),r}function Z(w,E,k){const r=k??new o(2);return r[0]=w[0]*E,r[1]=w[1]*E,r}const Y=Z;function ae(w,E,k){const r=k??new o(2);return r[0]=w[0]/E,r[1]=w[1]/E,r}function Se(w,E){const k=E??new o(2);return k[0]=1/w[0],k[1]=1/w[1],k}const pe=Se;function ce(w,E,k){const r=k??new o(3),m=w[0]*E[1]-w[1]*E[0];return r[0]=0,r[1]=0,r[2]=m,r}function we(w,E){return w[0]*E[0]+w[1]*E[1]}function oe(w){const E=w[0],k=w[1];return Math.sqrt(E*E+k*k)}const he=oe;function xe(w){const E=w[0],k=w[1];return E*E+k*k}const Le=xe;function Oe(w,E){const k=w[0]-E[0],r=w[1]-E[1];return Math.sqrt(k*k+r*r)}const Q=Oe;function ee(w,E){const k=w[0]-E[0],r=w[1]-E[1];return k*k+r*r}const q=ee;function X(w,E){const k=E??new o(2),r=w[0],m=w[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(k[0]=r/u,k[1]=m/u):(k[0]=0,k[1]=0),k}function Ve(w,E){const k=E??new o(2);return k[0]=-w[0],k[1]=-w[1],k}function ke(w,E){const k=E??new o(2);return k[0]=w[0],k[1]=w[1],k}const me=ke;function ve(w,E,k){const r=k??new o(2);return r[0]=w[0]*E[0],r[1]=w[1]*E[1],r}const Ge=ve;function Pe(w,E,k){const r=k??new o(2);return r[0]=w[0]/E[0],r[1]=w[1]/E[1],r}const Me=Pe;function be(w=1,E){const k=E??new o(2),r=Math.random()*2*Math.PI;return k[0]=Math.cos(r)*w,k[1]=Math.sin(r)*w,k}function B(w){const E=w??new o(2);return E[0]=0,E[1]=0,E}function U(w,E,k){const r=k??new o(2),m=w[0],u=w[1];return r[0]=m*E[0]+u*E[4]+E[12],r[1]=m*E[1]+u*E[5]+E[13],r}function b(w,E,k){const r=k??new o(2),m=w[0],u=w[1];return r[0]=E[0]*m+E[4]*u+E[8],r[1]=E[1]*m+E[5]*u+E[9],r}function i(w,E,k,r){const m=r??new o(2),u=w[0]-E[0],h=w[1]-E[1],l=Math.sin(k),_=Math.cos(k);return m[0]=u*_-h*l+E[0],m[1]=u*l+h*_+E[1],m}function p(w,E,k){const r=k??new o(2);return X(w,r),Z(r,E,r)}function d(w,E,k){const r=k??new o(2);return oe(w)>E?p(w,E,r):ke(w,r)}function v(w,E,k){const r=k??new o(2);return j(w,E,.5,r)}return{create:a,fromValues:f,set:C,ceil:x,floor:S,round:M,clamp:I,add:A,addScaled:L,angle:$,subtract:O,sub:R,equalsApproximately:H,equals:ie,lerp:j,lerpV:J,max:te,min:K,mulScalar:Z,scale:Y,divScalar:ae,inverse:Se,invert:pe,cross:ce,dot:we,length:oe,len:he,lengthSq:xe,lenSq:Le,distance:Oe,dist:Q,distanceSq:ee,distSq:q,normalize:X,negate:Ve,copy:ke,clone:me,multiply:ve,mul:Ge,divide:Pe,div:Me,random:be,zero:B,transformMat4:U,transformMat3:b,rotate:i,setLength:p,truncate:d,midpoint:v}}const Wr=new Map;function ui(o){let a=Wr.get(o);return a||(a=Sl(o),Wr.set(o,a)),a}function Cl(o){function a(l,_,y){const g=new o(3);return l!==void 0&&(g[0]=l,_!==void 0&&(g[1]=_,y!==void 0&&(g[2]=y))),g}const f=a;function C(l,_,y,g){const D=g??new o(3);return D[0]=l,D[1]=_,D[2]=y,D}function x(l,_){const y=_??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function S(l,_){const y=_??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function M(l,_){const y=_??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function I(l,_=0,y=1,g){const D=g??new o(3);return D[0]=Math.min(y,Math.max(_,l[0])),D[1]=Math.min(y,Math.max(_,l[1])),D[2]=Math.min(y,Math.max(_,l[2])),D}function A(l,_,y){const g=y??new o(3);return g[0]=l[0]+_[0],g[1]=l[1]+_[1],g[2]=l[2]+_[2],g}function L(l,_,y,g){const D=g??new o(3);return D[0]=l[0]+_[0]*y,D[1]=l[1]+_[1]*y,D[2]=l[2]+_[2]*y,D}function $(l,_){const y=l[0],g=l[1],D=l[2],V=_[0],F=_[1],ue=_[2],re=Math.sqrt(y*y+g*g+D*D),ne=Math.sqrt(V*V+F*F+ue*ue),ge=re*ne,Te=ge&&we(l,_)/ge;return Math.acos(Te)}function O(l,_,y){const g=y??new o(3);return g[0]=l[0]-_[0],g[1]=l[1]-_[1],g[2]=l[2]-_[2],g}const R=O;function H(l,_){return Math.abs(l[0]-_[0])<Re&&Math.abs(l[1]-_[1])<Re&&Math.abs(l[2]-_[2])<Re}function ie(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function j(l,_,y,g){const D=g??new o(3);return D[0]=l[0]+y*(_[0]-l[0]),D[1]=l[1]+y*(_[1]-l[1]),D[2]=l[2]+y*(_[2]-l[2]),D}function J(l,_,y,g){const D=g??new o(3);return D[0]=l[0]+y[0]*(_[0]-l[0]),D[1]=l[1]+y[1]*(_[1]-l[1]),D[2]=l[2]+y[2]*(_[2]-l[2]),D}function te(l,_,y){const g=y??new o(3);return g[0]=Math.max(l[0],_[0]),g[1]=Math.max(l[1],_[1]),g[2]=Math.max(l[2],_[2]),g}function K(l,_,y){const g=y??new o(3);return g[0]=Math.min(l[0],_[0]),g[1]=Math.min(l[1],_[1]),g[2]=Math.min(l[2],_[2]),g}function Z(l,_,y){const g=y??new o(3);return g[0]=l[0]*_,g[1]=l[1]*_,g[2]=l[2]*_,g}const Y=Z;function ae(l,_,y){const g=y??new o(3);return g[0]=l[0]/_,g[1]=l[1]/_,g[2]=l[2]/_,g}function Se(l,_){const y=_??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const pe=Se;function ce(l,_,y){const g=y??new o(3),D=l[2]*_[0]-l[0]*_[2],V=l[0]*_[1]-l[1]*_[0];return g[0]=l[1]*_[2]-l[2]*_[1],g[1]=D,g[2]=V,g}function we(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function oe(l){const _=l[0],y=l[1],g=l[2];return Math.sqrt(_*_+y*y+g*g)}const he=oe;function xe(l){const _=l[0],y=l[1],g=l[2];return _*_+y*y+g*g}const Le=xe;function Oe(l,_){const y=l[0]-_[0],g=l[1]-_[1],D=l[2]-_[2];return Math.sqrt(y*y+g*g+D*D)}const Q=Oe;function ee(l,_){const y=l[0]-_[0],g=l[1]-_[1],D=l[2]-_[2];return y*y+g*g+D*D}const q=ee;function X(l,_){const y=_??new o(3),g=l[0],D=l[1],V=l[2],F=Math.sqrt(g*g+D*D+V*V);return F>1e-5?(y[0]=g/F,y[1]=D/F,y[2]=V/F):(y[0]=0,y[1]=0,y[2]=0),y}function Ve(l,_){const y=_??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function ke(l,_){const y=_??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const me=ke;function ve(l,_,y){const g=y??new o(3);return g[0]=l[0]*_[0],g[1]=l[1]*_[1],g[2]=l[2]*_[2],g}const Ge=ve;function Pe(l,_,y){const g=y??new o(3);return g[0]=l[0]/_[0],g[1]=l[1]/_[1],g[2]=l[2]/_[2],g}const Me=Pe;function be(l=1,_){const y=_??new o(3),g=Math.random()*2*Math.PI,D=Math.random()*2-1,V=Math.sqrt(1-D*D)*l;return y[0]=Math.cos(g)*V,y[1]=Math.sin(g)*V,y[2]=D*l,y}function B(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function U(l,_,y){const g=y??new o(3),D=l[0],V=l[1],F=l[2],ue=_[3]*D+_[7]*V+_[11]*F+_[15]||1;return g[0]=(_[0]*D+_[4]*V+_[8]*F+_[12])/ue,g[1]=(_[1]*D+_[5]*V+_[9]*F+_[13])/ue,g[2]=(_[2]*D+_[6]*V+_[10]*F+_[14])/ue,g}function b(l,_,y){const g=y??new o(3),D=l[0],V=l[1],F=l[2];return g[0]=D*_[0*4+0]+V*_[1*4+0]+F*_[2*4+0],g[1]=D*_[0*4+1]+V*_[1*4+1]+F*_[2*4+1],g[2]=D*_[0*4+2]+V*_[1*4+2]+F*_[2*4+2],g}function i(l,_,y){const g=y??new o(3),D=l[0],V=l[1],F=l[2];return g[0]=D*_[0]+V*_[4]+F*_[8],g[1]=D*_[1]+V*_[5]+F*_[9],g[2]=D*_[2]+V*_[6]+F*_[10],g}function p(l,_,y){const g=y??new o(3),D=_[0],V=_[1],F=_[2],ue=_[3]*2,re=l[0],ne=l[1],ge=l[2],Te=V*ge-F*ne,_e=F*re-D*ge,ye=D*ne-V*re;return g[0]=re+Te*ue+(V*ye-F*_e)*2,g[1]=ne+_e*ue+(F*Te-D*ye)*2,g[2]=ge+ye*ue+(D*_e-V*Te)*2,g}function d(l,_){const y=_??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function v(l,_,y){const g=y??new o(3),D=_*4;return g[0]=l[D+0],g[1]=l[D+1],g[2]=l[D+2],g}function w(l,_){const y=_??new o(3),g=l[0],D=l[1],V=l[2],F=l[4],ue=l[5],re=l[6],ne=l[8],ge=l[9],Te=l[10];return y[0]=Math.sqrt(g*g+D*D+V*V),y[1]=Math.sqrt(F*F+ue*ue+re*re),y[2]=Math.sqrt(ne*ne+ge*ge+Te*Te),y}function E(l,_,y,g){const D=g??new o(3),V=[],F=[];return V[0]=l[0]-_[0],V[1]=l[1]-_[1],V[2]=l[2]-_[2],F[0]=V[0],F[1]=V[1]*Math.cos(y)-V[2]*Math.sin(y),F[2]=V[1]*Math.sin(y)+V[2]*Math.cos(y),D[0]=F[0]+_[0],D[1]=F[1]+_[1],D[2]=F[2]+_[2],D}function k(l,_,y,g){const D=g??new o(3),V=[],F=[];return V[0]=l[0]-_[0],V[1]=l[1]-_[1],V[2]=l[2]-_[2],F[0]=V[2]*Math.sin(y)+V[0]*Math.cos(y),F[1]=V[1],F[2]=V[2]*Math.cos(y)-V[0]*Math.sin(y),D[0]=F[0]+_[0],D[1]=F[1]+_[1],D[2]=F[2]+_[2],D}function r(l,_,y,g){const D=g??new o(3),V=[],F=[];return V[0]=l[0]-_[0],V[1]=l[1]-_[1],V[2]=l[2]-_[2],F[0]=V[0]*Math.cos(y)-V[1]*Math.sin(y),F[1]=V[0]*Math.sin(y)+V[1]*Math.cos(y),F[2]=V[2],D[0]=F[0]+_[0],D[1]=F[1]+_[1],D[2]=F[2]+_[2],D}function m(l,_,y){const g=y??new o(3);return X(l,g),Z(g,_,g)}function u(l,_,y){const g=y??new o(3);return oe(l)>_?m(l,_,g):ke(l,g)}function h(l,_,y){const g=y??new o(3);return j(l,_,.5,g)}return{create:a,fromValues:f,set:C,ceil:x,floor:S,round:M,clamp:I,add:A,addScaled:L,angle:$,subtract:O,sub:R,equalsApproximately:H,equals:ie,lerp:j,lerpV:J,max:te,min:K,mulScalar:Z,scale:Y,divScalar:ae,inverse:Se,invert:pe,cross:ce,dot:we,length:oe,len:he,lengthSq:xe,lenSq:Le,distance:Oe,dist:Q,distanceSq:ee,distSq:q,normalize:X,negate:Ve,copy:ke,clone:me,multiply:ve,mul:Ge,divide:Pe,div:Me,random:be,zero:B,transformMat4:U,transformMat4Upper3x3:b,transformMat3:i,transformQuat:p,getTranslation:d,getAxis:v,getScaling:w,rotateX:E,rotateY:k,rotateZ:r,setLength:m,truncate:u,midpoint:h}}const jr=new Map;function ts(o){let a=jr.get(o);return a||(a=Cl(o),jr.set(o,a)),a}function El(o){const a=ui(o),f=ts(o);function C(i,p,d,v,w,E,k,r,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,p!==void 0&&(u[1]=p,d!==void 0&&(u[2]=d,v!==void 0&&(u[4]=v,w!==void 0&&(u[5]=w,E!==void 0&&(u[6]=E,k!==void 0&&(u[8]=k,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function x(i,p,d,v,w,E,k,r,m,u){const h=u??new o(12);return h[0]=i,h[1]=p,h[2]=d,h[3]=0,h[4]=v,h[5]=w,h[6]=E,h[7]=0,h[8]=k,h[9]=r,h[10]=m,h[11]=0,h}function S(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function M(i,p){const d=p??new o(12),v=i[0],w=i[1],E=i[2],k=i[3],r=v+v,m=w+w,u=E+E,h=v*r,l=w*r,_=w*m,y=E*r,g=E*m,D=E*u,V=k*r,F=k*m,ue=k*u;return d[0]=1-_-D,d[1]=l+ue,d[2]=y-F,d[3]=0,d[4]=l-ue,d[5]=1-h-D,d[6]=g+V,d[7]=0,d[8]=y+F,d[9]=g-V,d[10]=1-h-_,d[11]=0,d}function I(i,p){const d=p??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function A(i,p,d){const v=d??new o(12);return v[0]=i[0]*p,v[1]=i[1]*p,v[2]=i[2]*p,v[4]=i[4]*p,v[5]=i[5]*p,v[6]=i[6]*p,v[8]=i[8]*p,v[9]=i[9]*p,v[10]=i[10]*p,v}const L=A;function $(i,p,d){const v=d??new o(12);return v[0]=i[0]+p[0],v[1]=i[1]+p[1],v[2]=i[2]+p[2],v[4]=i[4]+p[4],v[5]=i[5]+p[5],v[6]=i[6]+p[6],v[8]=i[8]+p[8],v[9]=i[9]+p[9],v[10]=i[10]+p[10],v}function O(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const R=O;function H(i,p){return Math.abs(i[0]-p[0])<Re&&Math.abs(i[1]-p[1])<Re&&Math.abs(i[2]-p[2])<Re&&Math.abs(i[4]-p[4])<Re&&Math.abs(i[5]-p[5])<Re&&Math.abs(i[6]-p[6])<Re&&Math.abs(i[8]-p[8])<Re&&Math.abs(i[9]-p[9])<Re&&Math.abs(i[10]-p[10])<Re}function ie(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[4]===p[4]&&i[5]===p[5]&&i[6]===p[6]&&i[8]===p[8]&&i[9]===p[9]&&i[10]===p[10]}function j(i){const p=i??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function J(i,p){const d=p??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const v=i[0*4+0],w=i[0*4+1],E=i[0*4+2],k=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],h=i[2*4+1],l=i[2*4+2];return d[0]=v,d[1]=k,d[2]=u,d[4]=w,d[5]=r,d[6]=h,d[8]=E,d[9]=m,d[10]=l,d}function te(i,p){const d=p??new o(12),v=i[0*4+0],w=i[0*4+1],E=i[0*4+2],k=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],h=i[2*4+1],l=i[2*4+2],_=l*r-m*h,y=-l*k+m*u,g=h*k-r*u,D=1/(v*_+w*y+E*g);return d[0]=_*D,d[1]=(-l*w+E*h)*D,d[2]=(m*w-E*r)*D,d[4]=y*D,d[5]=(l*v-E*u)*D,d[6]=(-m*v+E*k)*D,d[8]=g*D,d[9]=(-h*v+w*u)*D,d[10]=(r*v-w*k)*D,d}function K(i){const p=i[0],d=i[0*4+1],v=i[0*4+2],w=i[1*4+0],E=i[1*4+1],k=i[1*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2];return p*(E*u-m*k)-w*(d*u-m*v)+r*(d*k-E*v)}const Z=te;function Y(i,p,d){const v=d??new o(12),w=i[0],E=i[1],k=i[2],r=i[4+0],m=i[4+1],u=i[4+2],h=i[8+0],l=i[8+1],_=i[8+2],y=p[0],g=p[1],D=p[2],V=p[4+0],F=p[4+1],ue=p[4+2],re=p[8+0],ne=p[8+1],ge=p[8+2];return v[0]=w*y+r*g+h*D,v[1]=E*y+m*g+l*D,v[2]=k*y+u*g+_*D,v[4]=w*V+r*F+h*ue,v[5]=E*V+m*F+l*ue,v[6]=k*V+u*F+_*ue,v[8]=w*re+r*ne+h*ge,v[9]=E*re+m*ne+l*ge,v[10]=k*re+u*ne+_*ge,v}const ae=Y;function Se(i,p,d){const v=d??j();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=p[0],v[9]=p[1],v[10]=1,v}function pe(i,p){const d=p??a.create();return d[0]=i[8],d[1]=i[9],d}function ce(i,p,d){const v=d??a.create(),w=p*4;return v[0]=i[w+0],v[1]=i[w+1],v}function we(i,p,d,v){const w=v===i?i:O(i,v),E=d*4;return w[E+0]=p[0],w[E+1]=p[1],w}function oe(i,p){const d=p??a.create(),v=i[0],w=i[1],E=i[4],k=i[5];return d[0]=Math.sqrt(v*v+w*w),d[1]=Math.sqrt(E*E+k*k),d}function he(i,p){const d=p??f.create(),v=i[0],w=i[1],E=i[2],k=i[4],r=i[5],m=i[6],u=i[8],h=i[9],l=i[10];return d[0]=Math.sqrt(v*v+w*w+E*E),d[1]=Math.sqrt(k*k+r*r+m*m),d[2]=Math.sqrt(u*u+h*h+l*l),d}function xe(i,p){const d=p??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Le(i,p,d){const v=d??new o(12),w=p[0],E=p[1],k=i[0],r=i[1],m=i[2],u=i[1*4+0],h=i[1*4+1],l=i[1*4+2],_=i[2*4+0],y=i[2*4+1],g=i[2*4+2];return i!==v&&(v[0]=k,v[1]=r,v[2]=m,v[4]=u,v[5]=h,v[6]=l),v[8]=k*w+u*E+_,v[9]=r*w+h*E+y,v[10]=m*w+l*E+g,v}function Oe(i,p){const d=p??new o(12),v=Math.cos(i),w=Math.sin(i);return d[0]=v,d[1]=w,d[2]=0,d[4]=-w,d[5]=v,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Q(i,p,d){const v=d??new o(12),w=i[0*4+0],E=i[0*4+1],k=i[0*4+2],r=i[1*4+0],m=i[1*4+1],u=i[1*4+2],h=Math.cos(p),l=Math.sin(p);return v[0]=h*w+l*r,v[1]=h*E+l*m,v[2]=h*k+l*u,v[4]=h*r-l*w,v[5]=h*m-l*E,v[6]=h*u-l*k,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ee(i,p){const d=p??new o(12),v=Math.cos(i),w=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=v,d[6]=w,d[8]=0,d[9]=-w,d[10]=v,d}function q(i,p,d){const v=d??new o(12),w=i[4],E=i[5],k=i[6],r=i[8],m=i[9],u=i[10],h=Math.cos(p),l=Math.sin(p);return v[4]=h*w+l*r,v[5]=h*E+l*m,v[6]=h*k+l*u,v[8]=h*r-l*w,v[9]=h*m-l*E,v[10]=h*u-l*k,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function X(i,p){const d=p??new o(12),v=Math.cos(i),w=Math.sin(i);return d[0]=v,d[1]=0,d[2]=-w,d[4]=0,d[5]=1,d[6]=0,d[8]=w,d[9]=0,d[10]=v,d}function Ve(i,p,d){const v=d??new o(12),w=i[0*4+0],E=i[0*4+1],k=i[0*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2],h=Math.cos(p),l=Math.sin(p);return v[0]=h*w-l*r,v[1]=h*E-l*m,v[2]=h*k-l*u,v[8]=h*r+l*w,v[9]=h*m+l*E,v[10]=h*u+l*k,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const ke=Oe,me=Q;function ve(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ge(i,p,d){const v=d??new o(12),w=p[0],E=p[1];return v[0]=w*i[0*4+0],v[1]=w*i[0*4+1],v[2]=w*i[0*4+2],v[4]=E*i[1*4+0],v[5]=E*i[1*4+1],v[6]=E*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function Pe(i,p){const d=p??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function Me(i,p,d){const v=d??new o(12),w=p[0],E=p[1],k=p[2];return v[0]=w*i[0*4+0],v[1]=w*i[0*4+1],v[2]=w*i[0*4+2],v[4]=E*i[1*4+0],v[5]=E*i[1*4+1],v[6]=E*i[1*4+2],v[8]=k*i[2*4+0],v[9]=k*i[2*4+1],v[10]=k*i[2*4+2],v}function be(i,p){const d=p??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(i,p,d){const v=d??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function U(i,p){const d=p??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function b(i,p,d){const v=d??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],v[8]=p*i[2*4+0],v[9]=p*i[2*4+1],v[10]=p*i[2*4+2],v}return{add:$,clone:R,copy:O,create:C,determinant:K,equals:ie,equalsApproximately:H,fromMat4:S,fromQuat:M,get3DScaling:he,getAxis:ce,getScaling:oe,getTranslation:pe,identity:j,inverse:te,invert:Z,mul:ae,mulScalar:L,multiply:Y,multiplyScalar:A,negate:I,rotate:Q,rotateX:q,rotateY:Ve,rotateZ:me,rotation:Oe,rotationX:ee,rotationY:X,rotationZ:ke,scale:Ge,scale3D:Me,scaling:ve,scaling3D:Pe,set:x,setAxis:we,setTranslation:Se,translate:Le,translation:xe,transpose:J,uniformScale:B,uniformScale3D:b,uniformScaling:be,uniformScaling3D:U}}const Kr=new Map;function kl(o){let a=Kr.get(o);return a||(a=El(o),Kr.set(o,a)),a}function Ml(o){const a=ts(o);function f(r,m,u,h,l,_,y,g,D,V,F,ue,re,ne,ge,Te){const _e=new o(16);return r!==void 0&&(_e[0]=r,m!==void 0&&(_e[1]=m,u!==void 0&&(_e[2]=u,h!==void 0&&(_e[3]=h,l!==void 0&&(_e[4]=l,_!==void 0&&(_e[5]=_,y!==void 0&&(_e[6]=y,g!==void 0&&(_e[7]=g,D!==void 0&&(_e[8]=D,V!==void 0&&(_e[9]=V,F!==void 0&&(_e[10]=F,ue!==void 0&&(_e[11]=ue,re!==void 0&&(_e[12]=re,ne!==void 0&&(_e[13]=ne,ge!==void 0&&(_e[14]=ge,Te!==void 0&&(_e[15]=Te)))))))))))))))),_e}function C(r,m,u,h,l,_,y,g,D,V,F,ue,re,ne,ge,Te,_e){const ye=_e??new o(16);return ye[0]=r,ye[1]=m,ye[2]=u,ye[3]=h,ye[4]=l,ye[5]=_,ye[6]=y,ye[7]=g,ye[8]=D,ye[9]=V,ye[10]=F,ye[11]=ue,ye[12]=re,ye[13]=ne,ye[14]=ge,ye[15]=Te,ye}function x(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function S(r,m){const u=m??new o(16),h=r[0],l=r[1],_=r[2],y=r[3],g=h+h,D=l+l,V=_+_,F=h*g,ue=l*g,re=l*D,ne=_*g,ge=_*D,Te=_*V,_e=y*g,ye=y*D,Ie=y*V;return u[0]=1-re-Te,u[1]=ue+Ie,u[2]=ne-ye,u[3]=0,u[4]=ue-Ie,u[5]=1-F-Te,u[6]=ge+_e,u[7]=0,u[8]=ne+ye,u[9]=ge-_e,u[10]=1-F-re,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(r,m){const u=m??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function I(r,m,u){const h=u??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function A(r,m,u){const h=u??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const L=A;function $(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const O=$;function R(r,m){return Math.abs(r[0]-m[0])<Re&&Math.abs(r[1]-m[1])<Re&&Math.abs(r[2]-m[2])<Re&&Math.abs(r[3]-m[3])<Re&&Math.abs(r[4]-m[4])<Re&&Math.abs(r[5]-m[5])<Re&&Math.abs(r[6]-m[6])<Re&&Math.abs(r[7]-m[7])<Re&&Math.abs(r[8]-m[8])<Re&&Math.abs(r[9]-m[9])<Re&&Math.abs(r[10]-m[10])<Re&&Math.abs(r[11]-m[11])<Re&&Math.abs(r[12]-m[12])<Re&&Math.abs(r[13]-m[13])<Re&&Math.abs(r[14]-m[14])<Re&&Math.abs(r[15]-m[15])<Re}function H(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function ie(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function j(r,m){const u=m??new o(16);if(u===r){let ze;return ze=r[1],r[1]=r[4],r[4]=ze,ze=r[2],r[2]=r[8],r[8]=ze,ze=r[3],r[3]=r[12],r[12]=ze,ze=r[6],r[6]=r[9],r[9]=ze,ze=r[7],r[7]=r[13],r[13]=ze,ze=r[11],r[11]=r[14],r[14]=ze,u}const h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],D=r[1*4+1],V=r[1*4+2],F=r[1*4+3],ue=r[2*4+0],re=r[2*4+1],ne=r[2*4+2],ge=r[2*4+3],Te=r[3*4+0],_e=r[3*4+1],ye=r[3*4+2],Ie=r[3*4+3];return u[0]=h,u[1]=g,u[2]=ue,u[3]=Te,u[4]=l,u[5]=D,u[6]=re,u[7]=_e,u[8]=_,u[9]=V,u[10]=ne,u[11]=ye,u[12]=y,u[13]=F,u[14]=ge,u[15]=Ie,u}function J(r,m){const u=m??new o(16),h=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],D=r[1*4+1],V=r[1*4+2],F=r[1*4+3],ue=r[2*4+0],re=r[2*4+1],ne=r[2*4+2],ge=r[2*4+3],Te=r[3*4+0],_e=r[3*4+1],ye=r[3*4+2],Ie=r[3*4+3],ze=ne*Ie,$e=ye*ge,Xe=V*Ie,He=ye*F,Qe=V*ge,Je=ne*F,et=_*Ie,tt=ye*y,st=_*ge,ot=ne*y,Ke=_*F,nt=V*y,je=ue*_e,rt=Te*re,Fe=g*_e,dt=Te*D,it=g*re,Mt=ue*D,wt=h*_e,Ct=Te*l,Et=h*re,Tt=ue*l,At=h*D,Bt=g*l,Xt=ze*D+He*re+Qe*_e-($e*D+Xe*re+Je*_e),kt=$e*l+et*re+ot*_e-(ze*l+tt*re+st*_e),Dt=Xe*l+tt*D+Ke*_e-(He*l+et*D+nt*_e),W=Je*l+st*D+nt*re-(Qe*l+ot*D+Ke*re),G=1/(h*Xt+g*kt+ue*Dt+Te*W);return u[0]=G*Xt,u[1]=G*kt,u[2]=G*Dt,u[3]=G*W,u[4]=G*($e*g+Xe*ue+Je*Te-(ze*g+He*ue+Qe*Te)),u[5]=G*(ze*h+tt*ue+st*Te-($e*h+et*ue+ot*Te)),u[6]=G*(He*h+et*g+nt*Te-(Xe*h+tt*g+Ke*Te)),u[7]=G*(Qe*h+ot*g+Ke*ue-(Je*h+st*g+nt*ue)),u[8]=G*(je*F+dt*ge+it*Ie-(rt*F+Fe*ge+Mt*Ie)),u[9]=G*(rt*y+wt*ge+Tt*Ie-(je*y+Ct*ge+Et*Ie)),u[10]=G*(Fe*y+Ct*F+At*Ie-(dt*y+wt*F+Bt*Ie)),u[11]=G*(Mt*y+Et*F+Bt*ge-(it*y+Tt*F+At*ge)),u[12]=G*(Fe*ne+Mt*ye+rt*V-(it*ye+je*V+dt*ne)),u[13]=G*(Et*ye+je*_+Ct*ne-(wt*ne+Tt*ye+rt*_)),u[14]=G*(wt*V+Bt*ye+dt*_-(At*ye+Fe*_+Ct*V)),u[15]=G*(At*ne+it*_+Tt*V-(Et*V+Bt*ne+Mt*_)),u}function te(r){const m=r[0],u=r[0*4+1],h=r[0*4+2],l=r[0*4+3],_=r[1*4+0],y=r[1*4+1],g=r[1*4+2],D=r[1*4+3],V=r[2*4+0],F=r[2*4+1],ue=r[2*4+2],re=r[2*4+3],ne=r[3*4+0],ge=r[3*4+1],Te=r[3*4+2],_e=r[3*4+3],ye=ue*_e,Ie=Te*re,ze=g*_e,$e=Te*D,Xe=g*re,He=ue*D,Qe=h*_e,Je=Te*l,et=h*re,tt=ue*l,st=h*D,ot=g*l,Ke=ye*y+$e*F+Xe*ge-(Ie*y+ze*F+He*ge),nt=Ie*u+Qe*F+tt*ge-(ye*u+Je*F+et*ge),je=ze*u+Je*y+st*ge-($e*u+Qe*y+ot*ge),rt=He*u+et*y+ot*F-(Xe*u+tt*y+st*F);return m*Ke+_*nt+V*je+ne*rt}const K=J;function Z(r,m,u){const h=u??new o(16),l=r[0],_=r[1],y=r[2],g=r[3],D=r[4+0],V=r[4+1],F=r[4+2],ue=r[4+3],re=r[8+0],ne=r[8+1],ge=r[8+2],Te=r[8+3],_e=r[12+0],ye=r[12+1],Ie=r[12+2],ze=r[12+3],$e=m[0],Xe=m[1],He=m[2],Qe=m[3],Je=m[4+0],et=m[4+1],tt=m[4+2],st=m[4+3],ot=m[8+0],Ke=m[8+1],nt=m[8+2],je=m[8+3],rt=m[12+0],Fe=m[12+1],dt=m[12+2],it=m[12+3];return h[0]=l*$e+D*Xe+re*He+_e*Qe,h[1]=_*$e+V*Xe+ne*He+ye*Qe,h[2]=y*$e+F*Xe+ge*He+Ie*Qe,h[3]=g*$e+ue*Xe+Te*He+ze*Qe,h[4]=l*Je+D*et+re*tt+_e*st,h[5]=_*Je+V*et+ne*tt+ye*st,h[6]=y*Je+F*et+ge*tt+Ie*st,h[7]=g*Je+ue*et+Te*tt+ze*st,h[8]=l*ot+D*Ke+re*nt+_e*je,h[9]=_*ot+V*Ke+ne*nt+ye*je,h[10]=y*ot+F*Ke+ge*nt+Ie*je,h[11]=g*ot+ue*Ke+Te*nt+ze*je,h[12]=l*rt+D*Fe+re*dt+_e*it,h[13]=_*rt+V*Fe+ne*dt+ye*it,h[14]=y*rt+F*Fe+ge*dt+Ie*it,h[15]=g*rt+ue*Fe+Te*dt+ze*it,h}const Y=Z;function ae(r,m,u){const h=u??ie();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function Se(r,m){const u=m??a.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function pe(r,m,u){const h=u??a.create(),l=m*4;return h[0]=r[l+0],h[1]=r[l+1],h[2]=r[l+2],h}function ce(r,m,u,h){const l=h===r?h:$(r,h),_=u*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function we(r,m){const u=m??a.create(),h=r[0],l=r[1],_=r[2],y=r[4],g=r[5],D=r[6],V=r[8],F=r[9],ue=r[10];return u[0]=Math.sqrt(h*h+l*l+_*_),u[1]=Math.sqrt(y*y+g*g+D*D),u[2]=Math.sqrt(V*V+F*F+ue*ue),u}function oe(r,m,u,h,l){const _=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const g=1/(u-h);_[10]=h*g,_[14]=h*u*g}else _[10]=-1,_[14]=-u;return _}function he(r,m,u,h=1/0,l){const _=l??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=u;else{const g=1/(h-u);_[10]=u*g,_[14]=h*u*g}return _}function xe(r,m,u,h,l,_,y){const g=y??new o(16);return g[0]=2/(m-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(h-u),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(l-_),g[11]=0,g[12]=(m+r)/(r-m),g[13]=(h+u)/(u-h),g[14]=l/(l-_),g[15]=1,g}function Le(r,m,u,h,l,_,y){const g=y??new o(16),D=m-r,V=h-u,F=l-_;return g[0]=2*l/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/V,g[6]=0,g[7]=0,g[8]=(r+m)/D,g[9]=(h+u)/V,g[10]=_/F,g[11]=-1,g[12]=0,g[13]=0,g[14]=l*_/F,g[15]=0,g}function Oe(r,m,u,h,l,_=1/0,y){const g=y??new o(16),D=m-r,V=h-u;if(g[0]=2*l/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/V,g[6]=0,g[7]=0,g[8]=(r+m)/D,g[9]=(h+u)/V,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,_===1/0)g[10]=0,g[14]=l;else{const F=1/(_-l);g[10]=l*F,g[14]=_*l*F}return g}const Q=a.create(),ee=a.create(),q=a.create();function X(r,m,u,h){const l=h??new o(16);return a.normalize(a.subtract(m,r,q),q),a.normalize(a.cross(u,q,Q),Q),a.normalize(a.cross(q,Q,ee),ee),l[0]=Q[0],l[1]=Q[1],l[2]=Q[2],l[3]=0,l[4]=ee[0],l[5]=ee[1],l[6]=ee[2],l[7]=0,l[8]=q[0],l[9]=q[1],l[10]=q[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ve(r,m,u,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,q),q),a.normalize(a.cross(u,q,Q),Q),a.normalize(a.cross(q,Q,ee),ee),l[0]=Q[0],l[1]=Q[1],l[2]=Q[2],l[3]=0,l[4]=ee[0],l[5]=ee[1],l[6]=ee[2],l[7]=0,l[8]=q[0],l[9]=q[1],l[10]=q[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ke(r,m,u,h){const l=h??new o(16);return a.normalize(a.subtract(r,m,q),q),a.normalize(a.cross(u,q,Q),Q),a.normalize(a.cross(q,Q,ee),ee),l[0]=Q[0],l[1]=ee[0],l[2]=q[0],l[3]=0,l[4]=Q[1],l[5]=ee[1],l[6]=q[1],l[7]=0,l[8]=Q[2],l[9]=ee[2],l[10]=q[2],l[11]=0,l[12]=-(Q[0]*r[0]+Q[1]*r[1]+Q[2]*r[2]),l[13]=-(ee[0]*r[0]+ee[1]*r[1]+ee[2]*r[2]),l[14]=-(q[0]*r[0]+q[1]*r[1]+q[2]*r[2]),l[15]=1,l}function me(r,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function ve(r,m,u){const h=u??new o(16),l=m[0],_=m[1],y=m[2],g=r[0],D=r[1],V=r[2],F=r[3],ue=r[1*4+0],re=r[1*4+1],ne=r[1*4+2],ge=r[1*4+3],Te=r[2*4+0],_e=r[2*4+1],ye=r[2*4+2],Ie=r[2*4+3],ze=r[3*4+0],$e=r[3*4+1],Xe=r[3*4+2],He=r[3*4+3];return r!==h&&(h[0]=g,h[1]=D,h[2]=V,h[3]=F,h[4]=ue,h[5]=re,h[6]=ne,h[7]=ge,h[8]=Te,h[9]=_e,h[10]=ye,h[11]=Ie),h[12]=g*l+ue*_+Te*y+ze,h[13]=D*l+re*_+_e*y+$e,h[14]=V*l+ne*_+ye*y+Xe,h[15]=F*l+ge*_+Ie*y+He,h}function Ge(r,m){const u=m??new o(16),h=Math.cos(r),l=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=h,u[6]=l,u[7]=0,u[8]=0,u[9]=-l,u[10]=h,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Pe(r,m,u){const h=u??new o(16),l=r[4],_=r[5],y=r[6],g=r[7],D=r[8],V=r[9],F=r[10],ue=r[11],re=Math.cos(m),ne=Math.sin(m);return h[4]=re*l+ne*D,h[5]=re*_+ne*V,h[6]=re*y+ne*F,h[7]=re*g+ne*ue,h[8]=re*D-ne*l,h[9]=re*V-ne*_,h[10]=re*F-ne*y,h[11]=re*ue-ne*g,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function Me(r,m){const u=m??new o(16),h=Math.cos(r),l=Math.sin(r);return u[0]=h,u[1]=0,u[2]=-l,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=l,u[9]=0,u[10]=h,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function be(r,m,u){const h=u??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],D=r[2*4+0],V=r[2*4+1],F=r[2*4+2],ue=r[2*4+3],re=Math.cos(m),ne=Math.sin(m);return h[0]=re*l-ne*D,h[1]=re*_-ne*V,h[2]=re*y-ne*F,h[3]=re*g-ne*ue,h[8]=re*D+ne*l,h[9]=re*V+ne*_,h[10]=re*F+ne*y,h[11]=re*ue+ne*g,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function B(r,m){const u=m??new o(16),h=Math.cos(r),l=Math.sin(r);return u[0]=h,u[1]=l,u[2]=0,u[3]=0,u[4]=-l,u[5]=h,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function U(r,m,u){const h=u??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],D=r[1*4+0],V=r[1*4+1],F=r[1*4+2],ue=r[1*4+3],re=Math.cos(m),ne=Math.sin(m);return h[0]=re*l+ne*D,h[1]=re*_+ne*V,h[2]=re*y+ne*F,h[3]=re*g+ne*ue,h[4]=re*D-ne*l,h[5]=re*V-ne*_,h[6]=re*F-ne*y,h[7]=re*ue-ne*g,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function b(r,m,u){const h=u??new o(16);let l=r[0],_=r[1],y=r[2];const g=Math.sqrt(l*l+_*_+y*y);l/=g,_/=g,y/=g;const D=l*l,V=_*_,F=y*y,ue=Math.cos(m),re=Math.sin(m),ne=1-ue;return h[0]=D+(1-D)*ue,h[1]=l*_*ne+y*re,h[2]=l*y*ne-_*re,h[3]=0,h[4]=l*_*ne-y*re,h[5]=V+(1-V)*ue,h[6]=_*y*ne+l*re,h[7]=0,h[8]=l*y*ne+_*re,h[9]=_*y*ne-l*re,h[10]=F+(1-F)*ue,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=b;function p(r,m,u,h){const l=h??new o(16);let _=m[0],y=m[1],g=m[2];const D=Math.sqrt(_*_+y*y+g*g);_/=D,y/=D,g/=D;const V=_*_,F=y*y,ue=g*g,re=Math.cos(u),ne=Math.sin(u),ge=1-re,Te=V+(1-V)*re,_e=_*y*ge+g*ne,ye=_*g*ge-y*ne,Ie=_*y*ge-g*ne,ze=F+(1-F)*re,$e=y*g*ge+_*ne,Xe=_*g*ge+y*ne,He=y*g*ge-_*ne,Qe=ue+(1-ue)*re,Je=r[0],et=r[1],tt=r[2],st=r[3],ot=r[4],Ke=r[5],nt=r[6],je=r[7],rt=r[8],Fe=r[9],dt=r[10],it=r[11];return l[0]=Te*Je+_e*ot+ye*rt,l[1]=Te*et+_e*Ke+ye*Fe,l[2]=Te*tt+_e*nt+ye*dt,l[3]=Te*st+_e*je+ye*it,l[4]=Ie*Je+ze*ot+$e*rt,l[5]=Ie*et+ze*Ke+$e*Fe,l[6]=Ie*tt+ze*nt+$e*dt,l[7]=Ie*st+ze*je+$e*it,l[8]=Xe*Je+He*ot+Qe*rt,l[9]=Xe*et+He*Ke+Qe*Fe,l[10]=Xe*tt+He*nt+Qe*dt,l[11]=Xe*st+He*je+Qe*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const d=p;function v(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function w(r,m,u){const h=u??new o(16),l=m[0],_=m[1],y=m[2];return h[0]=l*r[0*4+0],h[1]=l*r[0*4+1],h[2]=l*r[0*4+2],h[3]=l*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=y*r[2*4+0],h[9]=y*r[2*4+1],h[10]=y*r[2*4+2],h[11]=y*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function E(r,m){const u=m??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,m,u){const h=u??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:I,aim:X,axisRotate:p,axisRotation:b,cameraAim:Ve,clone:O,copy:$,create:f,determinant:te,equals:H,equalsApproximately:R,fromMat3:x,fromQuat:S,frustum:Le,frustumReverseZ:Oe,getAxis:pe,getScaling:we,getTranslation:Se,identity:ie,inverse:J,invert:K,lookAt:ke,mul:Y,mulScalar:L,multiply:Z,multiplyScalar:A,negate:M,ortho:xe,perspective:oe,perspectiveReverseZ:he,rotate:d,rotateX:Pe,rotateY:be,rotateZ:U,rotation:i,rotationX:Ge,rotationY:Me,rotationZ:B,scale:w,scaling:v,set:C,setAxis:ce,setTranslation:ae,translate:ve,translation:me,transpose:j,uniformScale:k,uniformScaling:E}}const Hr=new Map;function Bl(o){let a=Hr.get(o);return a||(a=Ml(o),Hr.set(o,a)),a}function Tl(o){const a=ts(o);function f(B,U,b,i){const p=new o(4);return B!==void 0&&(p[0]=B,U!==void 0&&(p[1]=U,b!==void 0&&(p[2]=b,i!==void 0&&(p[3]=i)))),p}const C=f;function x(B,U,b,i,p){const d=p??new o(4);return d[0]=B,d[1]=U,d[2]=b,d[3]=i,d}function S(B,U,b){const i=b??new o(4),p=U*.5,d=Math.sin(p);return i[0]=d*B[0],i[1]=d*B[1],i[2]=d*B[2],i[3]=Math.cos(p),i}function M(B,U){const b=U??a.create(3),i=Math.acos(B[3])*2,p=Math.sin(i*.5);return p>Re?(b[0]=B[0]/p,b[1]=B[1]/p,b[2]=B[2]/p):(b[0]=1,b[1]=0,b[2]=0),{angle:i,axis:b}}function I(B,U){const b=oe(B,U);return Math.acos(2*b*b-1)}function A(B,U,b){const i=b??new o(4),p=B[0],d=B[1],v=B[2],w=B[3],E=U[0],k=U[1],r=U[2],m=U[3];return i[0]=p*m+w*E+d*r-v*k,i[1]=d*m+w*k+v*E-p*r,i[2]=v*m+w*r+p*k-d*E,i[3]=w*m-p*E-d*k-v*r,i}const L=A;function $(B,U,b){const i=b??new o(4),p=U*.5,d=B[0],v=B[1],w=B[2],E=B[3],k=Math.sin(p),r=Math.cos(p);return i[0]=d*r+E*k,i[1]=v*r+w*k,i[2]=w*r-v*k,i[3]=E*r-d*k,i}function O(B,U,b){const i=b??new o(4),p=U*.5,d=B[0],v=B[1],w=B[2],E=B[3],k=Math.sin(p),r=Math.cos(p);return i[0]=d*r-w*k,i[1]=v*r+E*k,i[2]=w*r+d*k,i[3]=E*r-v*k,i}function R(B,U,b){const i=b??new o(4),p=U*.5,d=B[0],v=B[1],w=B[2],E=B[3],k=Math.sin(p),r=Math.cos(p);return i[0]=d*r+v*k,i[1]=v*r-d*k,i[2]=w*r+E*k,i[3]=E*r-w*k,i}function H(B,U,b,i){const p=i??new o(4),d=B[0],v=B[1],w=B[2],E=B[3];let k=U[0],r=U[1],m=U[2],u=U[3],h=d*k+v*r+w*m+E*u;h<0&&(h=-h,k=-k,r=-r,m=-m,u=-u);let l,_;if(1-h>Re){const y=Math.acos(h),g=Math.sin(y);l=Math.sin((1-b)*y)/g,_=Math.sin(b*y)/g}else l=1-b,_=b;return p[0]=l*d+_*k,p[1]=l*v+_*r,p[2]=l*w+_*m,p[3]=l*E+_*u,p}function ie(B,U){const b=U??new o(4),i=B[0],p=B[1],d=B[2],v=B[3],w=i*i+p*p+d*d+v*v,E=w?1/w:0;return b[0]=-i*E,b[1]=-p*E,b[2]=-d*E,b[3]=v*E,b}function j(B,U){const b=U??new o(4);return b[0]=-B[0],b[1]=-B[1],b[2]=-B[2],b[3]=B[3],b}function J(B,U){const b=U??new o(4),i=B[0]+B[5]+B[10];if(i>0){const p=Math.sqrt(i+1);b[3]=.5*p;const d=.5/p;b[0]=(B[6]-B[9])*d,b[1]=(B[8]-B[2])*d,b[2]=(B[1]-B[4])*d}else{let p=0;B[5]>B[0]&&(p=1),B[10]>B[p*4+p]&&(p=2);const d=(p+1)%3,v=(p+2)%3,w=Math.sqrt(B[p*4+p]-B[d*4+d]-B[v*4+v]+1);b[p]=.5*w;const E=.5/w;b[3]=(B[d*4+v]-B[v*4+d])*E,b[d]=(B[d*4+p]+B[p*4+d])*E,b[v]=(B[v*4+p]+B[p*4+v])*E}return b}function te(B,U,b,i,p){const d=p??new o(4),v=B*.5,w=U*.5,E=b*.5,k=Math.sin(v),r=Math.cos(v),m=Math.sin(w),u=Math.cos(w),h=Math.sin(E),l=Math.cos(E);switch(i){case"xyz":d[0]=k*u*l+r*m*h,d[1]=r*m*l-k*u*h,d[2]=r*u*h+k*m*l,d[3]=r*u*l-k*m*h;break;case"xzy":d[0]=k*u*l-r*m*h,d[1]=r*m*l-k*u*h,d[2]=r*u*h+k*m*l,d[3]=r*u*l+k*m*h;break;case"yxz":d[0]=k*u*l+r*m*h,d[1]=r*m*l-k*u*h,d[2]=r*u*h-k*m*l,d[3]=r*u*l+k*m*h;break;case"yzx":d[0]=k*u*l+r*m*h,d[1]=r*m*l+k*u*h,d[2]=r*u*h-k*m*l,d[3]=r*u*l-k*m*h;break;case"zxy":d[0]=k*u*l-r*m*h,d[1]=r*m*l+k*u*h,d[2]=r*u*h+k*m*l,d[3]=r*u*l-k*m*h;break;case"zyx":d[0]=k*u*l-r*m*h,d[1]=r*m*l+k*u*h,d[2]=r*u*h-k*m*l,d[3]=r*u*l+k*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function K(B,U){const b=U??new o(4);return b[0]=B[0],b[1]=B[1],b[2]=B[2],b[3]=B[3],b}const Z=K;function Y(B,U,b){const i=b??new o(4);return i[0]=B[0]+U[0],i[1]=B[1]+U[1],i[2]=B[2]+U[2],i[3]=B[3]+U[3],i}function ae(B,U,b){const i=b??new o(4);return i[0]=B[0]-U[0],i[1]=B[1]-U[1],i[2]=B[2]-U[2],i[3]=B[3]-U[3],i}const Se=ae;function pe(B,U,b){const i=b??new o(4);return i[0]=B[0]*U,i[1]=B[1]*U,i[2]=B[2]*U,i[3]=B[3]*U,i}const ce=pe;function we(B,U,b){const i=b??new o(4);return i[0]=B[0]/U,i[1]=B[1]/U,i[2]=B[2]/U,i[3]=B[3]/U,i}function oe(B,U){return B[0]*U[0]+B[1]*U[1]+B[2]*U[2]+B[3]*U[3]}function he(B,U,b,i){const p=i??new o(4);return p[0]=B[0]+b*(U[0]-B[0]),p[1]=B[1]+b*(U[1]-B[1]),p[2]=B[2]+b*(U[2]-B[2]),p[3]=B[3]+b*(U[3]-B[3]),p}function xe(B){const U=B[0],b=B[1],i=B[2],p=B[3];return Math.sqrt(U*U+b*b+i*i+p*p)}const Le=xe;function Oe(B){const U=B[0],b=B[1],i=B[2],p=B[3];return U*U+b*b+i*i+p*p}const Q=Oe;function ee(B,U){const b=U??new o(4),i=B[0],p=B[1],d=B[2],v=B[3],w=Math.sqrt(i*i+p*p+d*d+v*v);return w>1e-5?(b[0]=i/w,b[1]=p/w,b[2]=d/w,b[3]=v/w):(b[0]=0,b[1]=0,b[2]=0,b[3]=1),b}function q(B,U){return Math.abs(B[0]-U[0])<Re&&Math.abs(B[1]-U[1])<Re&&Math.abs(B[2]-U[2])<Re&&Math.abs(B[3]-U[3])<Re}function X(B,U){return B[0]===U[0]&&B[1]===U[1]&&B[2]===U[2]&&B[3]===U[3]}function Ve(B){const U=B??new o(4);return U[0]=0,U[1]=0,U[2]=0,U[3]=1,U}const ke=a.create(),me=a.create(),ve=a.create();function Ge(B,U,b){const i=b??new o(4),p=a.dot(B,U);return p<-.999999?(a.cross(me,B,ke),a.len(ke)<1e-6&&a.cross(ve,B,ke),a.normalize(ke,ke),S(ke,Math.PI,i),i):p>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(B,U,ke),i[0]=ke[0],i[1]=ke[1],i[2]=ke[2],i[3]=1+p,ee(i,i))}const Pe=new o(4),Me=new o(4);function be(B,U,b,i,p,d){const v=d??new o(4);return H(B,i,p,Pe),H(U,b,p,Me),H(Pe,Me,2*p*(1-p),v),v}return{create:f,fromValues:C,set:x,fromAxisAngle:S,toAxisAngle:M,angle:I,multiply:A,mul:L,rotateX:$,rotateY:O,rotateZ:R,slerp:H,inverse:ie,conjugate:j,fromMat:J,fromEuler:te,copy:K,clone:Z,add:Y,subtract:ae,sub:Se,mulScalar:pe,scale:ce,divScalar:we,dot:oe,lerp:he,length:xe,len:Le,lengthSq:Oe,lenSq:Q,normalize:ee,equalsApproximately:q,equals:X,identity:Ve,rotationTo:Ge,sqlerp:be}}const Yr=new Map;function Al(o){let a=Yr.get(o);return a||(a=Tl(o),Yr.set(o,a)),a}function Dl(o){function a(b,i,p,d){const v=new o(4);return b!==void 0&&(v[0]=b,i!==void 0&&(v[1]=i,p!==void 0&&(v[2]=p,d!==void 0&&(v[3]=d)))),v}const f=a;function C(b,i,p,d,v){const w=v??new o(4);return w[0]=b,w[1]=i,w[2]=p,w[3]=d,w}function x(b,i){const p=i??new o(4);return p[0]=Math.ceil(b[0]),p[1]=Math.ceil(b[1]),p[2]=Math.ceil(b[2]),p[3]=Math.ceil(b[3]),p}function S(b,i){const p=i??new o(4);return p[0]=Math.floor(b[0]),p[1]=Math.floor(b[1]),p[2]=Math.floor(b[2]),p[3]=Math.floor(b[3]),p}function M(b,i){const p=i??new o(4);return p[0]=Math.round(b[0]),p[1]=Math.round(b[1]),p[2]=Math.round(b[2]),p[3]=Math.round(b[3]),p}function I(b,i=0,p=1,d){const v=d??new o(4);return v[0]=Math.min(p,Math.max(i,b[0])),v[1]=Math.min(p,Math.max(i,b[1])),v[2]=Math.min(p,Math.max(i,b[2])),v[3]=Math.min(p,Math.max(i,b[3])),v}function A(b,i,p){const d=p??new o(4);return d[0]=b[0]+i[0],d[1]=b[1]+i[1],d[2]=b[2]+i[2],d[3]=b[3]+i[3],d}function L(b,i,p,d){const v=d??new o(4);return v[0]=b[0]+i[0]*p,v[1]=b[1]+i[1]*p,v[2]=b[2]+i[2]*p,v[3]=b[3]+i[3]*p,v}function $(b,i,p){const d=p??new o(4);return d[0]=b[0]-i[0],d[1]=b[1]-i[1],d[2]=b[2]-i[2],d[3]=b[3]-i[3],d}const O=$;function R(b,i){return Math.abs(b[0]-i[0])<Re&&Math.abs(b[1]-i[1])<Re&&Math.abs(b[2]-i[2])<Re&&Math.abs(b[3]-i[3])<Re}function H(b,i){return b[0]===i[0]&&b[1]===i[1]&&b[2]===i[2]&&b[3]===i[3]}function ie(b,i,p,d){const v=d??new o(4);return v[0]=b[0]+p*(i[0]-b[0]),v[1]=b[1]+p*(i[1]-b[1]),v[2]=b[2]+p*(i[2]-b[2]),v[3]=b[3]+p*(i[3]-b[3]),v}function j(b,i,p,d){const v=d??new o(4);return v[0]=b[0]+p[0]*(i[0]-b[0]),v[1]=b[1]+p[1]*(i[1]-b[1]),v[2]=b[2]+p[2]*(i[2]-b[2]),v[3]=b[3]+p[3]*(i[3]-b[3]),v}function J(b,i,p){const d=p??new o(4);return d[0]=Math.max(b[0],i[0]),d[1]=Math.max(b[1],i[1]),d[2]=Math.max(b[2],i[2]),d[3]=Math.max(b[3],i[3]),d}function te(b,i,p){const d=p??new o(4);return d[0]=Math.min(b[0],i[0]),d[1]=Math.min(b[1],i[1]),d[2]=Math.min(b[2],i[2]),d[3]=Math.min(b[3],i[3]),d}function K(b,i,p){const d=p??new o(4);return d[0]=b[0]*i,d[1]=b[1]*i,d[2]=b[2]*i,d[3]=b[3]*i,d}const Z=K;function Y(b,i,p){const d=p??new o(4);return d[0]=b[0]/i,d[1]=b[1]/i,d[2]=b[2]/i,d[3]=b[3]/i,d}function ae(b,i){const p=i??new o(4);return p[0]=1/b[0],p[1]=1/b[1],p[2]=1/b[2],p[3]=1/b[3],p}const Se=ae;function pe(b,i){return b[0]*i[0]+b[1]*i[1]+b[2]*i[2]+b[3]*i[3]}function ce(b){const i=b[0],p=b[1],d=b[2],v=b[3];return Math.sqrt(i*i+p*p+d*d+v*v)}const we=ce;function oe(b){const i=b[0],p=b[1],d=b[2],v=b[3];return i*i+p*p+d*d+v*v}const he=oe;function xe(b,i){const p=b[0]-i[0],d=b[1]-i[1],v=b[2]-i[2],w=b[3]-i[3];return Math.sqrt(p*p+d*d+v*v+w*w)}const Le=xe;function Oe(b,i){const p=b[0]-i[0],d=b[1]-i[1],v=b[2]-i[2],w=b[3]-i[3];return p*p+d*d+v*v+w*w}const Q=Oe;function ee(b,i){const p=i??new o(4),d=b[0],v=b[1],w=b[2],E=b[3],k=Math.sqrt(d*d+v*v+w*w+E*E);return k>1e-5?(p[0]=d/k,p[1]=v/k,p[2]=w/k,p[3]=E/k):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function q(b,i){const p=i??new o(4);return p[0]=-b[0],p[1]=-b[1],p[2]=-b[2],p[3]=-b[3],p}function X(b,i){const p=i??new o(4);return p[0]=b[0],p[1]=b[1],p[2]=b[2],p[3]=b[3],p}const Ve=X;function ke(b,i,p){const d=p??new o(4);return d[0]=b[0]*i[0],d[1]=b[1]*i[1],d[2]=b[2]*i[2],d[3]=b[3]*i[3],d}const me=ke;function ve(b,i,p){const d=p??new o(4);return d[0]=b[0]/i[0],d[1]=b[1]/i[1],d[2]=b[2]/i[2],d[3]=b[3]/i[3],d}const Ge=ve;function Pe(b){const i=b??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Me(b,i,p){const d=p??new o(4),v=b[0],w=b[1],E=b[2],k=b[3];return d[0]=i[0]*v+i[4]*w+i[8]*E+i[12]*k,d[1]=i[1]*v+i[5]*w+i[9]*E+i[13]*k,d[2]=i[2]*v+i[6]*w+i[10]*E+i[14]*k,d[3]=i[3]*v+i[7]*w+i[11]*E+i[15]*k,d}function be(b,i,p){const d=p??new o(4);return ee(b,d),K(d,i,d)}function B(b,i,p){const d=p??new o(4);return ce(b)>i?be(b,i,d):X(b,d)}function U(b,i,p){const d=p??new o(4);return ie(b,i,.5,d)}return{create:a,fromValues:f,set:C,ceil:x,floor:S,round:M,clamp:I,add:A,addScaled:L,subtract:$,sub:O,equalsApproximately:R,equals:H,lerp:ie,lerpV:j,max:J,min:te,mulScalar:K,scale:Z,divScalar:Y,inverse:ae,invert:Se,dot:pe,length:ce,len:we,lengthSq:oe,lenSq:he,distance:xe,dist:Le,distanceSq:Oe,distSq:Q,normalize:ee,negate:q,copy:X,clone:Ve,multiply:ke,mul:me,divide:ve,div:Ge,zero:Pe,transformMat4:Me,setLength:be,truncate:B,midpoint:U}}const Zr=new Map;function Il(o){let a=Zr.get(o);return a||(a=Dl(o),Zr.set(o,a)),a}function Vs(o,a,f,C,x,S){return{mat3:kl(o),mat4:Bl(a),quat:Al(f),vec2:ui(C),vec3:ts(x),vec4:Il(S)}}const{mat3:St,mat4:ut,quat:ct,vec2:Xr,vec3:z,vec4:Oc}=Vs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Vs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Vs(Pl,Array,Array,Array,Array,Array);const Qr=document.querySelector("#log");let bt=null,cn=null;function di(){if(bt)return bt;bt=document.createElement("div"),bt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",bt.appendChild(o),cn=document.createElement("div"),cn.className="ply-spinner-label",bt.appendChild(cn),bt.style.display="none",document.body.appendChild(bt),bt}function Os(o){di(),cn&&o&&(cn.textContent=o),bt&&(bt.style.opacity="1",bt.style.display="flex")}function ln(o){di(),cn&&(cn.textContent=o)}function Gn(){if(!bt)return;const o=bt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function pi(o,a){if(!Qr)return;const f=document.createElement("p");f.innerText=o,a&&Object.assign(f.style,a),Qr.appendChild(f)}async function gt(o){console.log(o),pi(o)}async function Ll(o){console.error(o),pi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let hi;function fi(){hi=performance.now()}function Jr(o){const a=performance.now()-hi;gt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function zl(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function Vn(o){return o+3&-4}const Rl=2,Gl=3,Ul=5,Vl=6,Un=7,Zn=8,Xn=9,Qn=10;function Ol(o){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const C=new DataView(o),x=4,S=C.getUint32(x+0,!0),M=C.getUint32(x+4,!0),I=C.getUint32(x+8,!0),A=C.getUint32(x+12,!0),L=C.getUint32(x+16,!0),$=C.getFloat32(x+20,!0),O=C.getUint32(x+24,!0),R=C.getUint32(x+28,!0),H=C.getFloat32(x+32,!0),ie=C.getFloat32(x+36,!0),j=C.getFloat32(x+40,!0),J=C.getUint32(x+44,!0),te=C.getFloat32(x+48,!0),K=C.getFloat32(x+52,!0),Z=C.getUint32(x+56,!0),Y=C.getUint32(x+60,!0),ae=R===Xn||R===Qn,Se=ae?Y:0,pe=ae?0:Y,ce=pe>0?pe:1;if(R===Ul||R===Vl)throw new Error(`NAT2: paired-RVQ format=${R} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const we=R===Xn||R===Qn;if(R!==Rl&&R!==Gl&&R!==Un&&R!==Zn&&!we)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${R}`);if(S%4!==0||J%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${S} layer_h=${J}`);let oe=x+64;const he=(Z+1)*4,xe=new Uint32Array(o.slice(oe,oe+he));oe+=he;let Le;if(ce>1){const me=(ce+1)*4;if(oe+me>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${me} from ${oe})`);Le=new Uint32Array(o.slice(oe,oe+me)),oe+=me}else Le=new Uint32Array([0,S]);let Oe=0;for(let me=0;me<ce;me++){const ve=Le[me+1]-Le[me];ve>Oe&&(Oe=ve)}if(we){const me=Se&1?7:6,ve=L*me*4;if(oe+ve>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ve} more bytes from offset ${oe}, have ${o.byteLength-oe}`);const Ge=new Float32Array(o.slice(oe,oe+ve));oe+=ve;const Pe=Math.max(1,Se>>8&255),Me=[];let be=0;for(let p=0,d=S,v=J;p<Pe;p++,d>>=1,v>>=1){const w=Math.max(1,d>>2)*Math.max(1,v>>2)*16;Me.push(w),be+=w}const B=o.byteLength-oe;if(B<be)throw new Error(`NAT2 probe atlas truncated: need ${be} bytes for ${S}x${J} x${Pe} mips, have ${B}`);const U=[];let b=oe;for(const p of Me)U.push(new Uint8Array(o.slice(b,b+p))),b+=p;const i=U[0];return{width:S,height:M,channels:I,kernel_type:A,num_rects:L,uv_extent:$,sb_number:O,format:R,sh_bias:H,res_bias:ie,compact_mult:j,layer_h:J,atlas_scale:te,atlas_offset:K,n_layers:Z,n_cols:ce,layer_cuts:xe,column_cuts:Le,slice_width:Oe,rects_expanded:Ge,atlas_bytes:i,mip_bytes:U,probe_mode:Se&1?2:1}}const Q=L*4*4;if(oe+Q>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Q} more bytes from offset ${oe}, have ${o.byteLength-oe}`);const ee=new Float32Array(o.slice(oe,oe+Q));oe+=Q;const q=new Float32Array(L*5);for(let me=0;me<L;me++){const ve=ee[me*4+0],Ge=ee[me*4+1],Pe=ee[me*4+2],Me=ee[me*4+3];let be=0;for(let p=1;p<=Z&&xe[p]<=Ge;p++)be=p;let B=0;for(let p=1;p<=ce&&Le[p]<=ve;p++)B=p;const U=Ge-xe[be],b=ve-Le[B],i=B*Z+be;q[me*5+0]=b,q[me*5+1]=U,q[me*5+2]=Pe,q[me*5+3]=Me,q[me*5+4]=i}let X;const ke=S/4*16;if(R===Un||R===Zn){if(oe+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const me=R===Un?"BCCB":"ACCB",ve=a.decode(new Uint8Array(o,oe,4));if(ve!==me)throw new Error(`NAT2 typeD bad sub-magic: expected '${me}' got '${ve}'`);const Ge=C.getUint32(oe+4,!0),Pe=C.getUint32(oe+8,!0),Me=C.getUint32(oe+12,!0),be=C.getUint32(oe+16,!0),B=C.getUint32(oe+20,!0);if(Ge!==1)throw new Error(`NAT2 BCCB unsupported version ${Ge}`);if(Me!==M/4||be!==S/4||B!==Me*be)throw new Error(`NAT2 BCCB block grid mismatch: header ${S}×${M}, sub-header ${be}×${Me} (${B} blocks)`);oe+=24;const U=Pe*16;if(oe+U>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${U}, have ${o.byteLength-oe})`);const b=new Uint8Array(o,oe,U);oe+=U;const i=B*2;if(oe+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-oe})`);const p=new Uint16Array(o.slice(oe,oe+i));oe+=i;const d=new Uint8Array(B*16);for(let v=0;v<B;v++){const w=p[v]*16;d.set(b.subarray(w,w+16),v*16)}X=d}else{let me=0;for(let ve=0;ve<Z;ve++){const Ge=xe[ve+1]-xe[ve];if(Ge%4!==0)throw new Error(`NAT2 BC7 layer ${ve} rows ${Ge} not 4-aligned`);me+=Ge/4*ke}if(oe+me>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${me} more bytes from offset ${oe}, have ${o.byteLength-oe}`);X=new Uint8Array(o.slice(oe,oe+me))}return{width:S,height:M,channels:I,kernel_type:A,num_rects:L,uv_extent:$,sb_number:O,format:R,sh_bias:H,res_bias:ie,compact_mult:j,layer_h:J,atlas_scale:te,atlas_offset:K,n_layers:Z,n_cols:ce,layer_cuts:xe,column_cuts:Le,slice_width:Oe,rects_expanded:q,atlas_bytes:X}}const Fl=32;function Nl(o,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let C,x,S,M;if(a.format===2||a.format===Un||a.format===Xn){if(!o.features.has("texture-compression-bc"))return gt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===Xn?"BC7 atlas (proberes: shared probe texture)":a.format===Un?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:C,view:x,sampler:S}=ei(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===Zn||a.format===Qn){if(!o.features.has("texture-compression-astc"))return gt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===Qn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===Zn?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:C,view:x,sampler:S}=ei(o,a,"astc-4x4-unorm",M)}else return gt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:I}=a,A=o.createBuffer({label:"atlas rects (5-stride)",size:Vn(I.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(A,0,I);const L=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Ts(o,L,a,f),{texture:C,view:x,sampler:S,rectsBuffer:A,texParamsBuffer:L,meta:a}}function ei(o,a,f,C){const{width:x,layer_h:S,n_layers:M,n_cols:I,layer_cuts:A,column_cuts:L,slice_width:$,atlas_bytes:O}=a,H=x/4*16,ie=o.limits.maxTextureDimension2D;if(S>ie||$>ie)throw new Error(`⚠️  atlas slice dims ${$}x${S} exceed maxTextureDimension2D=${ie}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const j=I*M;if(j>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${I} cols × ${M} layers = ${j} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const J=a.mip_bytes??[O],te=J.length,K=o.createTexture({label:C,size:{width:$,height:S,depthOrArrayLayers:j},mipLevelCount:te,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let ae=0;ae<I;ae++){const Se=L[ae]/4,pe=(L[ae+1]-L[ae])/4;for(let ce=0;ce<M;ce++){const we=A[ce]/4,oe=(A[ce+1]-A[ce])/4,he=ae*M+ce,xe=we*H+Se*16;o.queue.writeTexture({texture:K,mipLevel:0,origin:{x:0,y:0,z:he},aspect:"all"},O,{offset:xe,bytesPerRow:H,rowsPerImage:oe},{width:pe*4,height:oe*4,depthOrArrayLayers:1})}}for(let ae=1;ae<te;ae++){const Se=Math.max(1,$>>ae),pe=Math.max(1,S>>ae);o.queue.writeTexture({texture:K,mipLevel:ae,origin:{x:0,y:0,z:0},aspect:"all"},J[ae],{offset:0,bytesPerRow:Math.max(1,Se>>2)*16,rowsPerImage:Math.max(1,pe>>2)},{width:Se,height:pe,depthOrArrayLayers:1})}te>1&&console.log(`[atlas] ${te} mip levels uploaded (trilinear minification)`);const Z=K.createView({label:`${C} view`,dimension:"2d-array"}),Y=o.createSampler({label:`${C} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1?"linear":"nearest"});return{texture:K,view:Z,sampler:Y}}function Ts(o,a,f,C,x=1){var L;const S=new ArrayBuffer(32),M=new Uint32Array(S),I=new Float32Array(S);M[0]=C?1:0,I[1]=f.atlas_scale,I[2]=f.atlas_offset,I[3]=f.res_bias,M[4]=f.probe_mode?f.probe_mode|0:0,M[5]=f.width|0;const A=(((L=f.mip_bytes)==null?void 0:L.length)??1)>1;M[6]=A&&x!==0?1:0,o.queue.writeBuffer(a,0,S)}async function As(o,a){gt(`loading ply file from File... : ${o.name}`),Os("downloading PLY...");const f=await o.arrayBuffer();try{return await _i(f,a)}finally{Gn()}}async function $l(o,a){gt(`loading ply file from URL... : ${o}`),Os("downloading PLY...");try{fi();const f=new URL(o,self.location.href).href;return await _i({url:f},a)}finally{Gn()}}async function _i(o,a){return new Promise((f,C)=>{const x=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});x.onmessage=S=>{var I,A,L,$,O,R,H,ie,j,J,te,K;const M=S.data;if((M==null?void 0:M.type)==="error"){Ll(`PLY worker error: ${M.message??"unknown error"}`),x.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const Z=M.totalBytes,Y=M.loadedBytes/(1024*1024),ae=Z?Z/(1024*1024):void 0,Se=(M.speedBps??0)/(1024*1024),pe=Z?Math.min(99,Math.floor(M.loadedBytes/Z*100)):void 0,ce=ae?`total ${ae.toFixed(1)} MB`:"total -- MB",we=ae&&pe!==void 0?`${Y.toFixed(1)} MB downloaded (${pe}%)`:`${Y.toFixed(1)} MB downloaded`,oe=`${Se.toFixed(2)} MB/s`;ln(`downloading PLY ...
${ce}, ${we}
${oe}`);return}else if((M==null?void 0:M.type)==="fetched"){gt(`💾 Fetched (${M.byteLength} bytes)`),Jr("Download"),ln("parsing PLY..."),fi();return}else if((M==null?void 0:M.type)==="parse_progress"){const Z=M.total??0,Y=M.read??0,ae=Z>0?Math.floor(Y/Z*100):0;ln(`parsing PLY ...
${Y}/${Z} surfels (${ae}%)`);return}else if((M==null?void 0:M.type)==="done"){const Z=M.num_points,Y=M.K,ae=M.feature_mode??0,Se=M.sh_bias,pe=M.kernel_type,ce=M.surfelBuffer,we=M.svParamsBuffer;gt(`🪐 Total surfels: ${Z}, mode=${ae===1?"SB":"SV"}, K=${Y}, sh_bias=${Se}, kernel_type=${pe}`);const he=a.createBuffer({label:"surfel input buffer",size:Vn(Z*Fl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(he,0,ce);const xe=we.byteLength>0?we.byteLength:16,Le=a.createBuffer({label:ae===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Vn(xe),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});we.byteLength>0&&a.queue.writeBuffer(Le,0,we),x.terminate(),Jr("Parse"),f({num_points:Z,K:Y,feature_mode:ae,sh_bias:Se,kernel_type:pe,surfel_buffer:he,surfel_data:new Float32Array(ce),sv_params_buffer:Le,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(I=M.bbox)==null?void 0:I.min)==null?void 0:A[0])??-1)+((($=(L=M.bbox)==null?void 0:L.max)==null?void 0:$[0])??1))/2,((((R=(O=M.bbox)==null?void 0:O.min)==null?void 0:R[1])??-1)+(((ie=(H=M.bbox)==null?void 0:H.max)==null?void 0:ie[1])??1))/2,((((J=(j=M.bbox)==null?void 0:j.min)==null?void 0:J[2])??-1)+(((K=(te=M.bbox)==null?void 0:te.max)==null?void 0:K[2])??1))/2]})}},x.onerror=S=>{x.terminate(),C(S)},o instanceof ArrayBuffer?(ln("parsing PLY..."),x.postMessage({type:"start",plyBuffer:o},[o])):x.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ds={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(f,C){C(a)})(ql,function(f){class C{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class x{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class S{constructor(e){this.target=e}}class M extends S{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class I extends S{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends S{constructor(e,t){super(e),this.expanded=t}}class L extends S{constructor(e,t){super(e),this.index=t}}function $(n){return n}function O(n){return n==null}function R(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function H(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const ie={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class j{static alreadyDisposed(){return new j({type:"alreadydisposed"})}static notBindable(){return new j({type:"notbindable"})}static propertyNotFound(e){return new j({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new j({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=ie[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class J{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!J.isBindable(s))throw j.notBindable();if(!(e in s))throw j.propertyNotFound(e);s[e]=t}}class te extends x{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new S(this))}),this}}class K{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Z="tp";function Y(n){return(t,s)=>[Z,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ae(n,e){return t=>e(n(t))}function Se(n){return n.rawValue}function pe(n,e){n.emitter.on("change",ae(Se,e)),e(n.rawValue)}function ce(n,e,t){pe(n.value(e),t)}function we(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function oe(n,e){return t=>{we(n,e,t)}}function he(n,e){pe(n,t=>{e.textContent=t??""})}const xe=Y("btn");class Le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(xe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(xe("t")),he(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Oe{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Le(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Q{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new K,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class ee{constructor(e){this.emitter=new K,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function q(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ee(n):new Q(n,e)}class X{constructor(e){this.emitter=new K,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:q(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new X(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function Ve(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const T=e[P],se=T(n[P]);return se.succeeded?Object.assign(Object.assign({},c),{[P]:se.value}):void 0},{});return s}function ke(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function me(n){return n===null?!1:typeof n=="object"}function ve(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ge(n){return{custom:e=>ve(e)(n),boolean:ve(e=>typeof e=="boolean"?e:void 0)(n),number:ve(e=>typeof e=="number"?e:void 0)(n),string:ve(e=>typeof e=="string"?e:void 0)(n),function:ve(e=>typeof e=="function"?e:void 0)(n),constant:e=>ve(t=>t===e?e:void 0)(n),raw:ve(e=>e)(n),object:e=>ve(t=>{if(me(t))return Ve(t,e)})(n),array:e=>ve(t=>{if(Array.isArray(t))return ke(t,e)})(n)}}const Pe={optional:Ge(!0),required:Ge(!1)};function Me(n,e){const t=Pe.required.object(e)(n);return t.succeeded?t.value:void 0}function be(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class U{constructor(e){this.value_=e}static create(e){return[new U(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const b=Y("");function i(n,e){return oe(n,b(void 0,e))}class p extends X{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=U.create(q(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new p(X.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){pe(this.globalDisabled_,i(e,"disabled")),ce(this,"hidden",i(e,"hidden"))}bindDisabled(e){pe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){pe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const v=Y(""),w={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class E{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(v(void 0,w[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,w[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){be({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const k="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function h(){return globalThis}function l(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(k,"svg");return t.innerHTML=y[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function V(n){n.parentElement&&n.parentElement.removeChild(n)}function F(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ue(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function re(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=Y("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Te{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ne("l")),ce(t.props,"label",P=>{O(P)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),ue(s),s.appendChild(ge(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(ne("v")),this.element.appendChild(c),this.valueElement=c}}class _e extends E{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Te(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ye={id:"button",type:"blade",accept(n){const e=Pe,t=Me(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new _e(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:new Oe(n.document,{props:X.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof _e)||!(n.controller.valueController instanceof Oe)?null:new te(n.controller)}};class Ie extends E{constructor(e){super(e),this.value=e.value}}function ze(){return new X({positions:q([],{equals:R})})}class $e extends X{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=X.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!O(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ce(this,"expanded",s),ce(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Xe(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function Qe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),O(n.get("expandedHeight"))){const t=Xe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Je extends x{constructor(e,t){super(e),this.rackApi_=t}}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function st(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ke{constructor(e){this.emitter=new K,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw j.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class nt extends x{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class je extends _e{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends x{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new I(this,t,this.controller_.binding.target.presetKey)})}}class Fe extends _e{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function dt(n){return n instanceof wt?n.apiSet_:n instanceof Je?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw j.shouldNeverHappen();return t}function Mt(n,e,t){if(!J.isBindable(n))throw j.notBindable();return new J(n,e,t)}class wt extends x{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new K,this.apiSet_=new Ke(dt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createInput(P,Mt(e,t,c.presetKey),c),se=new nt(T);return this.add(se,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createMonitor(P,Mt(e,t),c),se=new rt(T);return this.add(se,c.index)}addFolder(e){return tt(this,e)}addButton(e){return et(this,e)}addSeparator(e){return st(this,e)}addTab(e){return ot(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof je){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Fe))throw j.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new I(t,s.target.read(),s.target.presetKey)})}}class Ct extends Je{constructor(e,t){super(e,new wt(e.rackController,t)),this.emitter_=new K,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Et extends E{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Tt{constructor(e,t){const s=Y(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function At(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof je&&s.binding===e)return s}return null}function Bt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.binding===e)return s}return null}function Xt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function kt(n){return n instanceof G?n.rack:n instanceof Et?n.rackController.rack:null}function Dt(n){const e=kt(n);return e?e.bcSet_:null}class W{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new K,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ke(Dt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),H(e,"parent")?e.parent=this:(e.parent_=this,be({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){H(e,"parent")?e.parent=null:(e.parent_=null,be({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof je)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Fe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=kt(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof je)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Fe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=kt(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=At(this.find(je),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Bt(this.find(Fe),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Xt(this.find(Ie),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class G extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Tt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new W({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&V(e.bladeController.view.element)}}const le=Y("cnt");class Ce{constructor(e,t){var s;this.className_=Y((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),le()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ce(this.foldable_,"completed",oe(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ce(t.props,"title",De=>{O(De)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const T=e.createElement("div");T.classList.add(this.className_("t")),he(t.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T;const se=e.createElement("div");se.classList.add(this.className_("m")),this.buttonElement.appendChild(se);const Ae=t.containerElement;Ae.classList.add(this.className_("c")),this.element.appendChild(Ae),this.containerElement=Ae}}class Ee extends Et{constructor(e,t){var s;const c=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new G(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new Ce(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Qe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const fe={id:"folder",type:"blade",accept(n){const e=Pe,t=Me(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Ee(n.document,{blade:n.blade,expanded:n.params.expanded,props:X.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ee?new Ct(n.controller,n.pool):null}};class de extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Te(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Be extends x{}const qe=Y("spr");class at{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(qe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(qe("r")),this.element.appendChild(s)}}class _t extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new at(e,{viewProps:t.viewProps})}))}}const xt={id:"separator",type:"blade",accept(n){const t=Me(n,{view:Pe.required.constant("separator")});return t?{params:t}:null},controller(n){return new _t(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof _t?new Be(n.controller):null}},Ye=Y("tbi");class un{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ye()),t.viewProps.bindClassModifiers(this.element),ce(t.props,"selected",P=>{P?this.element.classList.add(Ye(void 0,"sel")):this.element.classList.remove(Ye(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Ye("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ye("t")),he(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class Pn{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new un(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ot{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Pn(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new G(e,{blade:ze(),viewProps:p.create()}),this.props=t.props,ce(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ht{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class dn extends Je{constructor(e,t){super(e,new wt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new K,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw j.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ot(t,{itemProps:X.fromObject({selected:!1,title:e.title}),props:X.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw j.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw j.shouldNeverHappen();const s=new ht(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw j.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new L(this,e.rawValue)})}}const Ft=-1;class ss{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=q(!0),this.selectedIndex=q(Ft),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ft,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Nt=Y("tab");class mt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Nt(),le()),t.viewProps.bindClassModifiers(this.element),pe(t.empty,oe(this.element,Nt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Nt("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Nt("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(Nt("c")),this.element.appendChild(P),this.contentsElement=P}}class $t extends Et{constructor(e,t){const s=new G(e,{blade:t.blade,viewProps:t.viewProps}),c=new ss;super({blade:t.blade,rackController:s,view:new mt(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ke(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;V(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Qt={id:"tab",type:"blade",accept(n){const e=Pe,t=Me(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new $t(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ot(n.document,{itemProps:X.fromObject({selected:!1,title:t.title}),props:X.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof $t?new dn(n.controller,n.pool):null}};function It(n,e){const t=n.accept(e.params);if(!t)return null;const s=Pe.optional.boolean(e.params.disabled).value,c=Pe.optional.boolean(e.params.hidden).value;return n.controller({blade:ze(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:p.create({disabled:s,hidden:c})})}class pn{constructor(){this.disabled=!1,this.emitter=new K}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class hn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new K,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class rs{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new K,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function fn(n,e){for(;n.length<e;)n.push(void 0)}function Ci(n){const e=[];return fn(e,n),q(e)}function Ei(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function ki(n,e){const t=[...Ei(n),e];return t.length>n.length?t.splice(0,t.length-n.length):fn(t,n.length),t}class Mi{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new K,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=ki(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Sn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Lt(n,e){if(n instanceof e)return n;if(n instanceof Sn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class _n{constructor(e){this.values=X.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Cn{constructor(e){this.values=X.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Ns{constructor(e){this.values=X.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return O(s)||(c=Math.max(c,s)),O(t)||(c=Math.min(c,t)),c}}class On{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const is=Y("lst");class Bi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(is("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(is("m")),c.appendChild(g(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ce(this.props_,"options",P=>{F(this.selectElement),P.forEach(T=>{const se=e.createElement("option");se.textContent=T.text,this.selectElement.appendChild(se)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class En{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Bi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const $s=Y("pop");class Ti{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add($s()),t.viewProps.bindClassModifiers(this.element),pe(t.shows,oe(this.element,$s(void 0,"v")))}}class qs{constructor(e,t){this.shows=q(!1),this.viewProps=t.viewProps,this.view=new Ti(e,{shows:this.shows,viewProps:this.viewProps})}}const Ws=Y("txt");class Ai{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ws()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ws("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Fn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ai(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);O(c)||(this.value.rawValue=c),this.view.refresh()}}function Di(n){return String(n)}function js(n){return n==="false"?!1:!!n}function Ks(n){return Di(n)}class Ii{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Li={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class zi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ri={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ri[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function os(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function kn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Mn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=Mn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Mn(n,e);return c===""?"":s+c}function as(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Vi(n,e);return s===""?"":t+s}function Hs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ui(n,e);return e+=s.length,s===""?"":s+Mn(n,e)}function Oi(n,e){const t=Hs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Mn(n,e);return e+=c.length,t+s+c+as(n,e)}function Fi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Mn(n,e);return e+=s.length,s===""?"":t+s+as(n,e)}function Ni(n,e){const t=Hs(n,e);return e+=t.length,t===""?"":t+as(n,e)}const $i=os([Oi,Fi,Ni]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function ji(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=ji(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Yi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Zi=os([Wi,Ki,Yi]),Xi=os([Zi,$i]);function Qi(n,e){const t=Xi(n,e);return e+=t.length,t===""?null:{evaluable:new Ii(t),cursor:e}}function Ji(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Zs(n,e);if(!s)return null;e=s.cursor,e+=kn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function eo(n,e){var t;return(t=Qi(n,e))!==null&&t!==void 0?t:Ji(n,e)}function Ys(n,e){const t=eo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Ys(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gi(s,c.evaluable)}):null}function to(n,e,t){t+=kn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=kn(e,t).length,{cursor:t,operator:s}):null}function no(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const T=to(e,t,s);if(!T)break;s=T.cursor;const se=n(t,s);if(!se)return null;s=se.cursor,P=new zi(T.operator,P,se.evaluable)}return P?{cursor:s,evaluable:P}:null}}const so=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>no(n,e),Ys);function Zs(n,e){return e+=kn(n,e).length,so(n,e)}function ro(n){const e=Zs(n,0);return!e||e.cursor+kn(n,e.cursor).length!==n.length?null:e.evaluable}function zt(n){var e;const t=ro(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Xs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=zt(n);if(!O(e))return e}return 0}function io(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const oo=pt(0);function Nn(n){return oo(n)+"%"}function Qs(n){return String(n)}function ls(n){return n}function Bn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(T){c||(c=!0,T(),c=!1)}n.emitter.on("change",T=>{P(()=>{e.setRawValue(t(n,e),T.options)})}),e.emitter.on("change",T=>{P(()=>{n.setRawValue(s(n,e),T.options)}),P(()=>{e.setRawValue(t(n,e),T.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function vt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Tn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Rt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ao(n){return n==="ArrowUp"||n==="ArrowDown"}function Js(n){return ao(n)||n==="ArrowLeft"||n==="ArrowRight"}function cs(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Jt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new K,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(cs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(cs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(cs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ze(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function er(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function lt(n,e,t){return Math.min(Math.max(n,e),t)}function tr(n,e){return(n%e+e)%e}const yt=Y("txt");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(yt(),yt(void 0,"num")),t.arrayPosition&&this.element.classList.add(yt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(yt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(yt()),this.inputElement.classList.add(yt("i"));const c=e.createElement("div");c.classList.add(yt("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(k,"svg");P.classList.add(yt("g")),this.knobElement.appendChild(P);const T=e.createElementNS(k,"path");T.classList.add(yt("gb")),P.appendChild(T),this.guideBodyElem_=T;const se=e.createElementNS(k,"path");se.classList.add(yt("gh")),P.appendChild(se),this.guideHeadElem_=se;const Ae=e.createElement("div");Ae.classList.add(Y("tt")()),this.knobElement.appendChild(Ae),this.tooltipElem_=Ae,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(yt(void 0,"drg"));return}this.element.classList.add(yt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=lt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class An{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=q(null),this.view=new lo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Jt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let T=e;return c!==void 0&&(T=Math.max(T,c)),P!==void 0&&(T=Math.min(T,P)),T}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);O(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=vt(this.baseStep_,Tn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){vt(this.baseStep_,Tn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const us=Y("sld");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(us()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(us("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(us("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=lt(Ze(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class uo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new co(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=vt(this.baseStep_,Rt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){vt(this.baseStep_,Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ds=Y("sldtxt");class po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ds());const s=e.createElement("div");s.classList.add(ds("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ds("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class ps{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new uo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new An(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new po(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Dn(n,e){n.write(e)}function $n(n){const e=Pe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function nr(n){if(n==="inline"||n==="popup")return n}function qt(n){const e=Pe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function sr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function hs(n){return O(n)?null:new Cn(sr(n))}function ho(n){const e=n?Lt(n,On):null;return e?e.step:null}function qn(n,e){const t=n&&Lt(n,On);return t?er(t.step):Math.max(er(e),2)}function mn(n){const e=ho(n);return e??1}function vn(n,e){var t;const s=n&&Lt(n,On),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Wn=Y("ckb");class fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Wn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Wn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Wn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Wn("w")),s.appendChild(P);const T=g(e,"check");P.appendChild(T),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class _o{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new fo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function mo(n){const e=[],t=hs(n.options);return t&&e.push(t),new Sn(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Me(e,{options:Pe.optional.custom($n)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>js,constraint:n=>mo(n.params),writer:n=>Dn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Lt(s,Cn);return c?new En(e,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new _o(e,{value:t,viewProps:n.viewProps})}},en=Y("col");class bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(en()),t.foldable.bindExpandedClass(this.element,en(void 0,"expanded")),ce(t.foldable,"completed",oe(this.element,en(void 0,"cpl")));const s=e.createElement("div");s.classList.add(en("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(en("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(en("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(en("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}function go(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),P=lt(t/255,0,1),T=Math.max(s,c,P),se=Math.min(s,c,P),Ae=T-se;let De=0,Ne=0;const We=(se+T)/2;return Ae!==0&&(Ne=Ae/(1-Math.abs(T+se-1)),s===T?De=(c-P)/Ae:c===T?De=2+(P-s)/Ae:De=4+(s-c)/Ae,De=De/6+(De<0?1:0)),[De*360,Ne*100,We*100]}function wo(n,e,t){const s=(n%360+360)%360,c=lt(e/100,0,1),P=lt(t/100,0,1),T=(1-Math.abs(2*P-1))*c,se=T*(1-Math.abs(s/60%2-1)),Ae=P-T/2;let De,Ne,We;return s>=0&&s<60?[De,Ne,We]=[T,se,0]:s>=60&&s<120?[De,Ne,We]=[se,T,0]:s>=120&&s<180?[De,Ne,We]=[0,T,se]:s>=180&&s<240?[De,Ne,We]=[0,se,T]:s>=240&&s<300?[De,Ne,We]=[se,0,T]:[De,Ne,We]=[T,0,se],[(De+Ae)*255,(Ne+Ae)*255,(We+Ae)*255]}function xo(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),P=lt(t/255,0,1),T=Math.max(s,c,P),se=Math.min(s,c,P),Ae=T-se;let De;Ae===0?De=0:T===s?De=60*(((c-P)/Ae%6+6)%6):T===c?De=60*((P-s)/Ae+2):De=60*((s-c)/Ae+4);const Ne=T===0?0:Ae/T,We=T;return[De,Ne*100,We*100]}function rr(n,e,t){const s=tr(n,360),c=lt(e/100,0,1),P=lt(t/100,0,1),T=P*c,se=T*(1-Math.abs(s/60%2-1)),Ae=P-T;let De,Ne,We;return s>=0&&s<60?[De,Ne,We]=[T,se,0]:s>=60&&s<120?[De,Ne,We]=[se,T,0]:s>=120&&s<180?[De,Ne,We]=[0,T,se]:s>=180&&s<240?[De,Ne,We]=[0,se,T]:s>=240&&s<300?[De,Ne,We]=[se,0,T]:[De,Ne,We]=[T,0,se],[(De+Ae)*255,(Ne+Ae)*255,(We+Ae)*255]}function yo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Po(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function tn(n){return[n[0],n[1],n[2]]}function ir(n,e){return[n[0],n[1],n[2],e]}const So={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:yo,rgb:wo},hsv:{hsl:Po,hsv:(n,e,t)=>[n,e,t],rgb:rr},rgb:{hsl:go,hsv:xo,rgb:(n,e,t)=>[n,e,t]}};function jn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:tr(n,e)}function Eo(n,e,t){var s;const c=jn(e,t);return[e==="rgb"?lt(n[0],0,c[0]):Co(n[0],c[0]),lt(n[1],0,c[1]),lt(n[2],0,c[2]),lt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function or(n,e,t,s){const c=jn(e,t),P=jn(e,s);return n.map((T,se)=>T/c[se]*P[se])}function ko(n,e,t){const s=or(n,e.mode,e.type,"int"),c=So[e.mode][t.mode](...s);return or(c,t.mode,"int",t.type)}function Kn(n,e){return typeof n!="object"||O(n)?!1:e in n&&typeof n[e]=="number"}class Ue{static black(e="int"){return new Ue([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ue(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Kn(e,"r")&&Kn(e,"g")&&Kn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Kn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Eo(e,t,s)}getComponents(e,t="int"){return ir(ko(tn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Wt=Y("colp");class Mo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Wt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Wt("hsv"));const c=e.createElement("div");c.classList.add(Wt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Wt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const T=e.createElement("div");if(T.classList.add(Wt("rgb")),this.textView_=t.textView,T.appendChild(this.textView_.element),this.element.appendChild(T),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const se=e.createElement("div");se.classList.add(Wt("a"));const Ae=e.createElement("div");Ae.classList.add(Wt("ap")),Ae.appendChild(this.alphaViews_.palette.element),se.appendChild(Ae);const De=e.createElement("div");De.classList.add(Wt("at")),De.appendChild(this.alphaViews_.text.element),se.appendChild(De),this.element.appendChild(se)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Bo(n){return n==="int"?"int":n==="float"?"float":void 0}function fs(n){const e=Pe;return Me(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Bo)}),expanded:e.optional.boolean,picker:e.optional.custom(nr)})}function nn(n){return n?.1:1}function sn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function To(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Pt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Ao={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function ar(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Ao[s](t)}function lr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Pt(e[1],255),Pt(e[2],255),Pt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function cr(n){return e=>{const t=lr(e);return t?new Ue(t,"rgb",n):null}}function ur(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Pt(e[1],255),Pt(e[2],255),Pt(e[3],255),Pt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ue(t,"rgb",n):null}}function pr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ar(e[1]),Pt(e[2],100),Pt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ue(t,"hsl",n):null}}function fr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ar(e[1]),Pt(e[2],100),Pt(e[3],100),Pt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ue(t,"hsl",n):null}}function mr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=mr(n);return e?new Ue(e,"rgb","int"):null}function vr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function Io(n){const e=vr(n);return e?new Ue(e,"rgb","int"):null}function br(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function gr(n){return e=>{const t=br(e);return t?new Ue(t,"rgb",n):null}}function wr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Ue(t,"rgb",n):null}}const Lo=[{parser:mr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:vr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:lr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ur,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:pr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:wr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function zo(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function _s(n,e="int"){const t=zo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const yr={int:[Do,Io,cr("int"),dr("int"),hr("int"),_r("int"),gr("int"),xr("int")],float:[cr("float"),dr("float"),hr("float"),_r("float"),gr("float"),xr("float")]};function Ro(n){const e=yr[n];return t=>{if(typeof t!="string")return Ue.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Ue.black(n)}}function ms(n){const e=yr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function Pr(n){const e=lt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Sr(n,e="#"){const t=tn(n.getComponents("rgb")).map(Pr).join("");return`${e}${t}`}function vs(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Pr).join("");return`${e}${s}`}function Cr(n,e){const t=pt(e==="float"?2:0);return`rgb(${tn(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>Cr(e,n)}function Hn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,T)=>(T===3?t:s)(P)).join(", ")})`}function Uo(n){return e=>Hn(e,n)}function Vo(n){const e=[pt(0),Nn,Nn];return`hsl(${tn(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Oo(n){const e=[pt(0),Nn,Nn,pt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Er(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${tn(n.getComponents("rgb",e)).map((P,T)=>`${s[T]}: ${t(P)}`).join(", ")}}`}function Fo(n){return e=>Er(e,n)}function kr(n,e){const t=pt(2),s=pt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((T,se)=>{const Ae=se===3?t:s;return`${c[se]}: ${Ae(T)}`}).join(", ")}}`}function No(n){return e=>kr(e,n)}const $o=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Sr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:vs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:No(e)}],[])];function bs(n){return $o.reduce((e,t)=>e||(To(t.format,n)?t.stringifier:null),null)}const In=Y("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(In()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(In("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(In("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(In("m")),this.element.appendChild(P),this.markerElem_=P;const T=e.createElement("div");T.classList.add(In("p")),this.markerElem_.appendChild(T),this.previewElem_=T,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ue([t[0],t[1],t[2],0],"rgb"),c=new Ue([t[0],t[1],t[2],255],"rgb"),P=["to right",Hn(s),Hn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Hn(e);const T=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${T}%`}onValueChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,T,se]=c.getComponents("hsv");this.value.setRawValue(new Ue([P,T,se,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=vt(nn(!0),Rt(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,se]=s.getComponents("hsv");this.value.setRawValue(new Ue([c,P,T,se+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){vt(nn(!0),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const bn=Y("coltxt");function jo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(bn("m")),this.modeElem_=jo(e),this.modeElem_.classList.add(bn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(bn("mm")),c.appendChild(g(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(bn("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),pe(t.colorMode,T=>{this.modeElem_.value=T})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){F(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(bn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return pt(n==="float"?2:0)}function Yo(n,e,t){const s=jn(n,e)[t];return new _n({min:0,max:s})}function gs(n,e,t){return new An(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:nn(!1),parser:e.parser,props:X.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:q(0,{constraint:Yo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Zo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=q(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ko(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[gs(e,t,0),gs(e,t,1),gs(e,t,2)];return s.forEach((c,P)=>{Bn({primary:this.value,secondary:c.value,forward:T=>T.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(T,se)=>{const Ae=this.colorMode.rawValue,De=T.rawValue.getComponents(Ae,this.colorType_);return De[P]=se.rawValue,new Ue(ir(tn(De),De[3]),Ae,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ws=Y("hpl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ws()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ws("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ws("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Cr(new Ue([t,100,100],"hsv"));const s=Ze(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,T,se]=c.getComponents("hsv");this.value.setRawValue(new Ue([s,P,T,se],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=vt(nn(!1),Rt(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,se]=s.getComponents("hsv");this.value.setRawValue(new Ue([c+t,P,T,se],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){vt(nn(!1),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const xs=Y("svp"),Mr=64;class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(xs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Mr,s.width=Mr,s.classList.add(xs("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(xs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,T=e.getImageData(0,0,c,P),se=T.data;for(let Ne=0;Ne<P;Ne++)for(let We=0;We<c;We++){const rn=Ze(We,0,c,0,100),zn=Ze(Ne,0,P,100,0),Rn=rr(s[0],rn,zn),Yn=(Ne*c+We)*4;se[Yn]=Rn[0],se[Yn+1]=Rn[1],se[Yn+2]=Rn[2],se[Yn+3]=255}e.putImageData(T,0,0);const Ae=Ze(s[1],0,100,0,100);this.markerElem_.style.left=`${Ae}%`;const De=Ze(s[2],0,100,100,0);this.markerElem_.style.top=`${De}%`}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(e.point.x,0,e.bounds.width,0,100),c=Ze(e.point.y,0,e.bounds.height,100,0),[P,,,T]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([P,s,c,T],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Js(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),T=nn(!1),se=vt(T,Rt(e)),Ae=vt(T,Tn(e));se===0&&Ae===0||this.value.setRawValue(new Ue([t,s+se,c+Ae,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=nn(!1),s=vt(t,Rt(e)),c=vt(t,Tn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ta{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ea(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Wo(e,{value:this.value,viewProps:this.viewProps}),text:new An(e,{parser:zt,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:pt(2)}),value:q(0,{constraint:new _n({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Bn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Ue(P,s.rawValue.mode)}}),this.textC_=new Zo(e,{colorType:t.colorType,parser:zt,value:this.value,viewProps:this.viewProps}),this.view=new Mo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ys=Y("colsw");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ys()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ys("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ys("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=vs(e)}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps})}}class Ps{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new sa(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Fn(e,{parser:t.parser,props:X.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new bo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new qs(e,{viewProps:this.viewProps}):null;const c=new ta(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),Bn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,T)=>T.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ra(n,e){return Ue.isColorObject(n)?Ue.fromObject(n,e):Ue.black(e)}function ia(n){return tn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function oa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function aa(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function la(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function ca(n){return typeof n!="number"?Ue.black():aa(n)}function ua(n){return typeof n!="number"?Ue.black():la(n)}function da(n){const e=bs(n);return e?(t,s)=>{Dn(t,e(s))}:null}function pa(n){const e=n?oa:ia;return(t,s)=>{Dn(t,e(s))}}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function _a(n,e){return(t,s)=>{n?ha(t,s,e):fa(t,s,e)}}function Ss(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ma(n){return n?e=>vs(e,"0x"):e=>Sr(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ba={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=fs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ss(n.params)?ua:ca,equals:Ue.equals,writer:n=>pa(Ss(n.params))},controller:n=>{const e=Ss(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ps(n.document,{colorType:"int",expanded:t??!1,formatter:ma(e),parser:ms("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ga(n){return Ue.isRgbaColorObject(n)}function wa(n){return e=>ra(e,n)}function xa(n,e){return t=>n?kr(t,e):Er(t,e)}const ya={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ue.isColorObject(n))return null;const t=fs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>wa(sn(n.params)),equals:Ue.equals,writer:n=>_a(ga(n.initialValue),sn(n.params))},controller:n=>{var e;const t=Ue.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=sn(n.params))!==null&&e!==void 0?e:"int";return new Ps(n.document,{colorType:P,expanded:s??!1,formatter:xa(t,P),parser:ms(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Pa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=_s(n,sn(e));if(!t||!bs(t))return null;const c=fs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Ro((e=sn(n.params))!==null&&e!==void 0?e:"int")},equals:Ue.equals,writer:n=>{const e=_s(n.initialValue,sn(n.params));if(!e)throw j.shouldNeverHappen();const t=da(e);if(!t)throw j.notBindable();return t}},controller:n=>{const e=_s(n.initialValue,sn(n.params));if(!e)throw j.shouldNeverHappen();const t=bs(e);if(!t)throw j.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ps(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ms(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class jt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,T;return(T=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&T!==void 0?T:s});return this.asm_.fromComponents(t)}}const Br=Y("pndtxt");class Sa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Br()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Br("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ca(n,e,t){return new An(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:q(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Cs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ca(e,t,c)),this.acs_.forEach((s,c)=>{Bn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,T)=>{const se=t.assembly.toComponents(P.rawValue);return se[c]=T.rawValue,t.assembly.fromComponents(se)}})}),this.view=new Sa(e,{textViews:this.acs_.map(s=>s.view)})}}function Tr(n,e){return"step"in n&&!O(n.step)?new On(n.step,e):null}function Ar(n){return!O(n.max)&&!O(n.min)?new _n({max:n.max,min:n.min}):!O(n.max)||!O(n.min)?new Ns({max:n.max,min:n.min}):null}function Ea(n){const e=Lt(n,_n);if(e)return[e.values.get("min"),e.values.get("max")];const t=Lt(n,Ns);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function ka(n,e){const t=[],s=Tr(n,e);s&&t.push(s);const c=Ar(n);c&&t.push(c);const P=hs(n.options);return P&&t.push(P),new Sn(t)}const Ma={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,s=Me(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom($n),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Xs,constraint:n=>ka(n.params,n.initialValue),writer:n=>Dn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Lt(s,Cn);if(c)return new En(n.document,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(qn(s,t.rawValue)),T=s&&Lt(s,_n);return T?new ps(n.document,{baseStep:mn(s),parser:zt,sliderProps:new X({maxValue:T.values.value("max"),minValue:T.values.value("min")}),textProps:X.fromObject({draggingScale:vn(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new An(n.document,{baseStep:mn(s),parser:zt,props:X.fromObject({draggingScale:vn(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Kt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(O(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Dr={toComponents:n=>n.getComponents(),fromComponents:n=>new Kt(...n)},gn=Y("p2d");class Ba{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gn()),t.viewProps.bindClassModifiers(this.element),pe(t.expanded,oe(this.element,gn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(gn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(gn("b")),c.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(gn("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(gn("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}const Ht=Y("p2dp");class Ta{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Ht()),t.layout==="popup"&&this.element.classList.add(Ht(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ht("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(k,"svg");c.classList.add(Ht("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(k,"line");P.classList.add(Ht("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const T=e.createElementNS(k,"line");T.classList.add(Ht("ax")),T.setAttributeNS(null,"x1","50%"),T.setAttributeNS(null,"y1","0"),T.setAttributeNS(null,"x2","50%"),T.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(T);const se=e.createElementNS(k,"line");se.classList.add(Ht("l")),se.setAttributeNS(null,"x1","50%"),se.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(se),this.lineElem_=se;const Ae=e.createElement("div");Ae.classList.add(Ht("m")),this.padElement.appendChild(Ae),this.markerElem_=Ae,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ze(e,-s,+s,0,100),P=Ze(t,-s,+s,0,100),T=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${T}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${T}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Ir(n,e,t){return[vt(e[0],Rt(n)),vt(e[1],Tn(n))*(t?1:-1)]}class Aa{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ta(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Jt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ze(e.point.x,0,e.bounds.width,-s,+s),P=Ze(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Kt(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Js(e.key)&&e.preventDefault();const[t,s]=Ir(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Kt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Ir(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new qs(e,{viewProps:this.viewProps}):null;const P=new Aa(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new Cs(e,{assembly:Dr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ba(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Bn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,se)=>se.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class wn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(O(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Lr={toComponents:n=>n.getComponents(),fromComponents:n=>new wn(...n)};function Ia(n){return wn.isObject(n)?new wn(n.x,n.y,n.z):new wn}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function za(n,e){return new jt({assembly:Lr,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y),Gt("z"in n?n.z:void 0,e.z)]})}function Es(n,e){return{baseStep:mn(e),constraint:e,textProps:X.fromObject({draggingScale:vn(e,n),formatter:pt(qn(e,n))})}}const Ra={id:"input-point3d",type:"input",accept:(n,e)=>{if(!wn.isObject(n))return null;const t=Pe,s=Me(e,{x:t.optional.custom(qt),y:t.optional.custom(qt),z:t.optional.custom(qt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>za(n.params,n.initialValue),equals:wn.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof jt))throw j.shouldNeverHappen();return new Cs(n.document,{assembly:Lr,axes:[Es(e.rawValue.x,t.components[0]),Es(e.rawValue.y,t.components[1]),Es(e.rawValue.z,t.components[2])],parser:zt,value:e,viewProps:n.viewProps})}};class xn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(O(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const zr={toComponents:n=>n.getComponents(),fromComponents:n=>new xn(...n)};function Ga(n){return xn.isObject(n)?new xn(n.x,n.y,n.z,n.w):new xn}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Va(n,e){return new jt({assembly:zr,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y),Gt("z"in n?n.z:void 0,e.z),Gt("w"in n?n.w:void 0,e.w)]})}function Oa(n,e){return{baseStep:mn(e),constraint:e,textProps:X.fromObject({draggingScale:vn(e,n),formatter:pt(qn(e,n))})}}const Fa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!xn.isObject(n))return null;const t=Pe,s=Me(e,{x:t.optional.custom(qt),y:t.optional.custom(qt),z:t.optional.custom(qt),w:t.optional.custom(qt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Va(n.params,n.initialValue),equals:xn.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof jt))throw j.shouldNeverHappen();return new Cs(n.document,{assembly:zr,axes:e.rawValue.getComponents().map((s,c)=>Oa(s,t.components[c])),parser:zt,value:e,viewProps:n.viewProps})}};function Na(n){const e=[],t=hs(n.options);return t&&e.push(t),new Sn(e)}const $a={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Me(e,{options:Pe.optional.custom($n)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Qs,constraint:n=>Na(n.params),writer:n=>Dn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Lt(s,Cn);return c?new En(e,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Fn(e,{parser:P=>P,props:X.fromObject({formatter:ls}),value:t,viewProps:n.viewProps})}},Ln={monitor:{defaultInterval:200,defaultLineCount:3}},Rr=Y("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Rr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Rr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class ks{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Gr=Y("sgl");class Wa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Gr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Gr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ms{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Wa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const ja={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Me(e,{lineCount:Pe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>js},controller:n=>{var e;return n.value.rawValue.length===1?new Ms(n.document,{formatter:Ks,value:n.value,viewProps:n.viewProps}):new ks(n.document,{formatter:Ks,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ln.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Yt=Y("grl");class Ka{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Yt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(k,"svg");s.classList.add(Yt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(k,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(Yt("t"),Y("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Ne,We)=>{if(Ne===void 0)return;const rn=Ze(We,0,t,0,e.width),zn=Ze(Ne,s,c,e.height,0);P.push([rn,zn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const T=this.tooltipElem_,se=this.value.rawValue[this.cursor_.rawValue];if(se===void 0){T.classList.remove(Yt("t","a"));return}const Ae=Ze(this.cursor_.rawValue,0,t,0,e.width),De=Ze(se,s,c,e.height,0);T.style.left=`${Ae}px`,T.style.top=`${De}px`,T.textContent=`${this.formatter_(se)}`,T.classList.contains(Yt("t","a"))||(T.classList.add(Yt("t","a"),Yt("t","in")),r(T),T.classList.remove(Yt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=q(-1),this.view=new Ka(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Jt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Bs(n){return"format"in n&&!O(n.format)?n.format:pt(2)}function Ya(n){var e;return n.value.rawValue.length===1?new Ms(n.document,{formatter:Bs(n.params),value:n.value,viewProps:n.viewProps}):new ks(n.document,{formatter:Bs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ln.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Za(n){var e,t,s;return new Ha(n.document,{formatter:Bs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ln.monitor.defaultLineCount,props:X.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Ur(n){return"view"in n&&n.view==="graph"}const Xa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Pe,s=Me(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Ur(n)?64:1,reader:n=>Xs},controller:n=>Ur(n.params)?Za(n):Ya(n)},Qa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Pe,s=Me(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Qs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ks(n.document,{formatter:ls,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Ln.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ms(n.document,{formatter:ls,value:t,viewProps:n.viewProps})}};function Ja(n,e){var t;const s=n.accept(e.target.read(),e.params);if(O(s))return null;const c=Pe,P={target:e.target,initialValue:s.initialValue,params:s.params},T=n.binding.reader(P),se=n.binding.constraint?n.binding.constraint(P):void 0,Ae=q(T(s.initialValue),{constraint:se,equals:n.binding.equals}),De=new rs({reader:T,target:e.target,value:Ae,writer:n.binding.writer(P)}),Ne=c.optional.boolean(e.params.disabled).value,We=c.optional.boolean(e.params.hidden).value,rn=n.controller({constraint:se,document:e.document,initialValue:s.initialValue,params:s.params,value:De.value,viewProps:p.create({disabled:Ne,hidden:We})});return new je(e.document,{binding:De,blade:ze(),props:X.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:rn})}function el(n,e){return e===0?new pn:new hn(n,e??Ln.monitor.defaultInterval)}function tl(n,e){var t,s,c;const P=Pe,T=n.accept(e.target.read(),e.params);if(O(T))return null;const se={target:e.target,initialValue:T.initialValue,params:T.params},Ae=n.binding.reader(se),De=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(T.params))!==null&&s!==void 0?s:1,Ne=P.optional.number(e.params.interval).value,We=new Mi({reader:Ae,target:e.target,ticker:el(e.document,Ne),value:Ci(De)}),rn=P.optional.boolean(e.params.disabled).value,zn=P.optional.boolean(e.params.hidden).value,Rn=n.controller({document:e.document,params:T.params,value:We.value,viewProps:p.create({disabled:rn,hidden:zn})});return new Fe(e.document,{binding:We,blade:ze(),props:X.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Rn})}class nl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(O(c))throw new j({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((T,se)=>T??Ja(se,{document:e,target:t,params:s}),null);if(P)return P;throw new j({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,T)=>P??tl(T,{document:e,params:s,target:t}),null);if(c)return c;throw new j({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??It(P,{document:e,params:t}),null);if(!s)throw new j({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof je)return new nt(e);if(e instanceof Fe)return new rt(e);if(e instanceof G)return new wt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw j.shouldNeverHappen();return t}}function sl(){const n=new nl;return[cl,Ra,Fa,$a,Ma,Pa,ya,ba,vo,ja,Qa,Xa,ye,fe,xt,Qt].forEach(e=>{n.register(e)}),n}function rl(n){return Kt.isObject(n)?new Kt(n.x,n.y):new Kt}function il(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Gt(n,e){if(!n)return;const t=[],s=Tr(n,e);s&&t.push(s);const c=Ar(n);return c&&t.push(c),new Sn(t)}function ol(n,e){return new jt({assembly:Dr,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y)]})}function Vr(n,e){const[t,s]=n?Ea(n):[];if(!O(t)||!O(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=mn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function al(n,e){const t=e instanceof jt?e.components[0]:void 0,s=e instanceof jt?e.components[1]:void 0,c=Vr(t,n.x),P=Vr(s,n.y);return Math.max(c,P)}function Or(n,e){return{baseStep:mn(e),constraint:e,textProps:X.fromObject({draggingScale:vn(e,n),formatter:pt(qn(e,n))})}}function ll(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const cl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Kt.isObject(n))return null;const t=Pe,s=Me(e,{expanded:t.optional.boolean,picker:t.optional.custom(nr),x:t.optional.custom(qt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>rl,constraint:n=>ol(n.params,n.initialValue),equals:Kt.equals,writer:n=>il},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof jt))throw j.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[Or(t.rawValue.x,s.components[0]),Or(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:ll(n.params),maxValue:al(t.rawValue,s),parser:zt,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class Fr extends x{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Nr extends x{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class $r extends x{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const ul=function(){return{id:"list",type:"blade",accept(n){const e=Pe,t=Me(n,{options:e.required.custom($n),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Cn(sr(n.params.options)),t=q(n.params.value,{constraint:e}),s=new En(n.document,{props:new X({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new de(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof En)?null:new Fr(n.controller)}}}();function dl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function pl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class hl extends Ct{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(je).map(s=>s.binding);pl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(je).map(t=>t.binding.target);return dl(e)}refresh(){this.controller_.rackController.rack.find(je).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Fe).forEach(e=>{e.binding.read()})}}class fl extends Ee{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const _l={id:"slider",type:"blade",accept(n){const e=Pe,t=Me(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new _n({max:n.params.max,min:n.params.min}),P=new ps(n.document,{baseStep:1,parser:zt,sliderProps:new X({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:X.fromObject({draggingScale:vn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:io}),value:q(s,{constraint:c}),viewProps:n.viewProps});return new de(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof ps)?null:new Nr(n.controller)}},ml=function(){return{id:"text",type:"blade",accept(n){const e=Pe,t=Me(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Fn(n.document,{parser:n.params.parse,props:X.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:q(n.params.value),viewProps:n.viewProps});return new de(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof de)||!(n.controller.valueController instanceof Fn)?null:new $r(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(Y("dfw")()),n.body&&n.body.appendChild(e),e}function qr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class bl extends hl{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:l(),T=sl(),se=new fl(P,{expanded:c.expanded,blade:ze(),props:X.fromObject({title:c.title}),viewProps:p.create()});super(se,T),this.pool_=T,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:vl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw j.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw j.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&qr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){qr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[_l,ul,Qt,ml]})}}const gl=new C("3.1.10");f.BladeApi=x,f.ButtonApi=te,f.FolderApi=Ct,f.InputBindingApi=nt,f.ListApi=Fr,f.MonitorBindingApi=rt,f.Pane=bl,f.SeparatorApi=Be,f.SliderApi=Nr,f.TabApi=dn,f.TabPageApi=ht,f.TextApi=$r,f.TpChangeEvent=M,f.VERSION=gl,Object.defineProperty(f,"__esModule",{value:!0})})})(Ds,Ds.exports);var Wl=Ds.exports;const jl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,ti=`// 2DGS render — vertex+fragment.
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
}`,Hl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Yl=`// shader implementing gpu radix sort.

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
`,Zl=`// shader implementing gpu radix sort.

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
`,Xl=`// ============================================================================
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
}`,mi=32,Is=1,Ls=2,ni=4,si=512,ri=1024,Ql=0,Zt=new ArrayBuffer(mi),ft={canvas_size:new Uint32Array(Zt,0,2),accel_flags:new Uint32Array(Zt,8,1),feature_mode:new Uint32Array(Zt,12,1),gaussian_scaling:new Float32Array(Zt,16,1),sh_bias:new Float32Array(Zt,20,1),color_K:new Uint32Array(Zt,24,1),walltime:new Float32Array(Zt,28,1)};function Jl(o){ft.canvas_size[0]=o.width>>>0,ft.canvas_size[1]=o.height>>>0,ft.accel_flags[0]=(o.accel_flags??Is|Ls)>>>0,ft.feature_mode[0]=(o.feature_mode??Ql)>>>0,ft.gaussian_scaling[0]=o.gaussian_scaling??1,ft.sh_bias[0]=o.sh_bias??.5,ft.color_K[0]=(o.color_K??0)>>>0,ft.walltime[0]=o.walltime??0}function vi(o,a){o.queue.writeBuffer(a,0,Zt)}function ns(o,a,f){f&&o&&a&&vi(o,a)}function yn(o,a,f,C,x=!0){ft.canvas_size[0]=o>>>0,ft.canvas_size[1]=a>>>0,ns(f??null,C??null,x)}function ii(o,a,f,C=!0){ft.gaussian_scaling[0]=o,ns(a??null,f??null,C)}function oi(o,a,f,C=!0){ft.sh_bias[0]=o,ns(a??null,f??null,C)}function zs(o,a,f,C=!0){let x=ft.accel_flags[0];o.oac!==void 0&&(x=o.oac?x|Is:x&~Is),o.spr!==void 0&&(x=o.spr?x|Ls:x&~Ls),o.bfc!==void 0&&(x=o.bfc?x|ni:x&~ni),o.hypLegacy!==void 0&&(x=o.hypLegacy?x|si:x&~si),o.legacyPos!==void 0&&(x=o.legacyPos?x|ri:x&~ri),ft.accel_flags[0]=x>>>0,ns(a??null,f??null,C)}const ec=256;function ai(o,a){const f=[],C=[];let x=!0;for(const S of o.split(`
`)){const M=S.trim();let I;if((I=/^\/\/#if\s+(\w+)\s*$/.exec(M))!==null){const A=!!a[I[1]];C.push({parent:x,taken:A}),x=x&&A;continue}if(/^\/\/#else\s*$/.test(M)){const A=C[C.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");x=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(M)){const A=C.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");x=A.parent;continue}x&&f.push(S)}if(C.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const tc=mi,nc=8,sc=96,rc=12,Fs=8,Ut=1<<Fs,an=256,Jn=32/Fs,ic=0,li=Jn&1;function ci(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function oc(o,a){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[f]}),x=S=>o.createComputePipeline({layout:C,compute:{module:a,entryPoint:S,constants:{WG_SIZE:an}}});return{l0TileScan:x("prefix_l0_tile_scan"),l1TileScanOnL0:x("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:x("prefix_scan_l1_sums"),addL1ToL0:x("prefix_add_l1_to_l0_offsets"),addL0ToElems:x("prefix_add_l0_to_elements"),computeDigitBase:x("compute_digit_base"),prefixBindGroupLayout:f}}function ac(o,a,f){const C=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[C]}),M=o.createPipelineLayout({bindGroupLayouts:[x]}),I=[];for(let A=0;A<Jn;A++){const L={PASS_ID:A+ic,RS_RADIX_LOG2:Fs,RS_RADIX_SIZE:Ut};I.push({localHistogram:o.createComputePipeline({layout:S,compute:{module:a,entryPoint:"local_histogram_pass",constants:L}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:L}})})}return{passes:I,localHistogramBindGroupLayout:C,scatterBindGroupLayout:x}}function lc(o){const a=o.createShaderModule({label:"local histogram",code:Zl}),f=o.createShaderModule({label:"scatter",code:Yl}),C=o.createShaderModule({label:"blelloch prefix",code:Xl}),x=oc(o,C),S=ac(o,a,f);return{localHistogramBindGroupLayout:S.localHistogramBindGroupLayout,scatterBindGroupLayout:S.scatterBindGroupLayout,passes:S.passes,hierarchicalBlelloch:x}}function cc(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),C=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),x=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),S=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(S,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:C,rectsBuffer:x,texParamsBuffer:S,meta:M}}class uc{constructor(a,f,C,x,S,M=null,I={}){N(this,"device");N(this,"pc");N(this,"presentationFormat");N(this,"camera_buffer");N(this,"render_settings_buffer");N(this,"draw_indirect_buffer");N(this,"splat_2d_buffer");N(this,"querySet");N(this,"resolveBuffer");N(this,"resultBuffer");N(this,"queriesPerFrame",nc);N(this,"queryCapacityFrames",200);N(this,"sort_prefixBindGroup");N(this,"sort_pipelines");N(this,"sort_localHistogramBindGroups");N(this,"sort_scatterBindGroups");N(this,"lastFrame",0);N(this,"frameCount",0);N(this,"preprocessPipeline");N(this,"cullPipeline");N(this,"renderPipeline");N(this,"indirectPipeline");N(this,"renderShaderModule");N(this,"betaKernel",1);N(this,"fetchById");N(this,"octBound");N(this,"acc16");N(this,"accTexture",null);N(this,"accView",null);N(this,"accW",0);N(this,"accH",0);N(this,"legacyRenderPipeline",null);N(this,"varyingsPipeline",null);N(this,"legacyRenderer",!1);N(this,"accResolvePipeline",null);N(this,"accResolveBgl",null);N(this,"accResolveBindGroup",null);N(this,"renderSettingsBgl");N(this,"renderSplatsBgl");N(this,"atlasBgl");N(this,"sort_info_buffer");N(this,"sort_ping_pong");N(this,"crsBg");N(this,"gsBg");N(this,"cullBg2");N(this,"preprocessBg1");N(this,"renderSplatsBindGroup");N(this,"renderSettingsBindGroup");N(this,"atlasBindGroup");N(this,"indirectBindGroup");N(this,"sh_solvers_buffer");N(this,"bfcParamsBuffer");N(this,"bfcBindGroupLayout");N(this,"bfcBindGroup");N(this,"bgColor",[0,0,0,0]);N(this,"showPerfDialogNext",!1);N(this,"requestReorderNextFrame",!1);N(this,"reorderInFlight",!1);N(this,"downloadOnceNextRead",!1);N(this,"downloadOnceFileName","fps_metrics");N(this,"allFrameTimes",[]);N(this,"lastStageBreakdownMs",null);N(this,"timeQueryEnabled");N(this,"atlas");N(this,"atlasParamsBuffer");N(this,"_atlasEnabled",!0);N(this,"_mipMode",1);this.fetchById=I.fetchById??!0,this.octBound=I.octBound??!1,this.acc16=I.acc16??!1,gt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=S.includes("timestamp-query");this.timeQueryEnabled=A,A&&gt("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=C,this.camera_buffer=x,this.atlas=M??cc(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",ke=>{console.error("A WebGPU error was not captured:",ke.error)}),this._setupTimestampQueries(),this._setupBuffers();const L=(Math.floor((this.pc.num_points+an-1)/an)+1)*an,$=Math.ceil(L/an);console.log(`keys count adjusted: ${L}`),console.log(`key size: ${this.pc.num_points}`);const O=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=lc(f);const R=[ci(L,f),ci(L,f)],H=f.createBuffer({label:"workgroup histograms",size:$*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=f.createBuffer({label:"workgroup prefixes",size:$*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=f.createBuffer({label:"digit base",size:Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=Math.ceil($/an),te=Math.ceil(J/an),K=f.createBuffer({label:"prefix l0 sums",size:J*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=f.createBuffer({label:"prefix l0 offsets",size:J*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"prefix l1 sums",size:te*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=f.createBuffer({label:"prefix l1 offsets",size:te*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:ie}},{binding:3,resource:{buffer:K}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:Y}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:j}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:R[0].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:R[1].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:R[0].sort_depths_buffer}},{binding:3,resource:{buffer:R[1].sort_depths_buffer}},{binding:4,resource:{buffer:R[0].sort_indices_buffer}},{binding:5,resource:{buffer:R[1].sort_indices_buffer}},{binding:6,resource:{buffer:ie}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:R[1].sort_depths_buffer}},{binding:3,resource:{buffer:R[0].sort_depths_buffer}},{binding:4,resource:{buffer:R[1].sort_indices_buffer}},{binding:5,resource:{buffer:R[0].sort_indices_buffer}},{binding:6,resource:{buffer:ie}}]})],this.sort_info_buffer=O,this.sort_ping_pong=R;const Se=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),pe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ce=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),we=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:Se,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:pe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ce,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:we,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const oe=this.device.createShaderModule({code:Kl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:oe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const he=this.device.createShaderModule({code:Hl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[Se,pe,ce,this.bfcBindGroupLayout]}),compute:{module:he,entryPoint:"surfel_cull"}});const xe=this.device.createShaderModule({code:jl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Se,we]}),compute:{module:xe,entryPoint:"preprocess"}});const Le=this.device.createShaderModule({label:"render_2dgs",code:ai(ti,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Le.getCompilationInfo().then(ke=>{ke.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ke.messages.forEach(me=>{(me.type==="error"?console.error:me.type==="warning"?console.warn:console.log)(`${me.type} (line ${me.lineNum}:${me.linePos}): ${me.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Oe=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Q=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ee=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Q,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),q=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),X=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Oe,ee,q]}),vertex:{module:Le,entryPoint:"vs_main"},fragment:{module:Le,entryPoint:"fs_main",constants:{BETA_KERNEL:X},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ve=(ke,me,ve)=>{const Ge=this.device.createShaderModule({label:`render_2dgs (${ke})`,code:ai(ti,{FETCH_BY_ID:me,OCT:ve})});return this.device.createRenderPipeline({label:`render_2dgs_${ke}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Oe,ee,q]}),vertex:{module:Ge,entryPoint:"vs_main"},fragment:{module:Ge,entryPoint:"fs_main",constants:{BETA_KERNEL:X},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=Ve("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ve("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(ke=>{ke?console.error("[render_2dgs] pipeline create validation error:",ke.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Oe,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ee,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[li].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:q,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Le,this.betaKernel=X,this.renderSettingsBgl=Oe,this.renderSplatsBgl=ee,this.atlasBgl=q}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),f=new Uint32Array(a),C=new Float32Array(a);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,C[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,f){var C;if(this.accResolvePipeline===null){const x=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,S=this.device.createShaderModule({label:"acc16_resolve",code:x});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:S,entryPoint:"vs_main"},fragment:{module:S,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===f||((C=this.accTexture)==null||C.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=f)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,Ts(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,gt(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,zs({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const f=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),gt(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,Ts(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),C=f*Uint32Array.BYTES_PER_ELEMENT;if(C===0){console.log("[DEBUG] No indices to read.");return}const x=this.device.createBuffer({size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),S=this.device.createCommandEncoder();S.copyBufferToBuffer(this.sort_ping_pong[li].sort_indices_buffer,0,x,0,C),this.device.queue.submit([S.finish()]),await x.mapAsync(GPUMapMode.READ);const M=new Uint32Array(x.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),x.unmap()}frame(a,f,C=!0){const S=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=C&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const I={label:"cull"};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+0,endOfPassWriteIndex:S+1});const A=a.beginComputePass(I);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const L=Math.ceil(this.pc.num_points/ec);A.dispatchWorkgroups(L,1,1),A.end()}{const I=a.beginComputePass({label:"calculate indirect dispatch"});I.setPipeline(this.indirectPipeline),I.setBindGroup(0,this.indirectBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:"preprocess"};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+2,endOfPassWriteIndex:S+3});const A=a.beginComputePass(I);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let I=0;I<Jn;I++){const A=I&1,L=this.sort_pipelines.passes[I],$=this.sort_localHistogramBindGroups[A],O=this.sort_scatterBindGroups[A];{const R={label:`upsweep_round${I}`};M&&I==0&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4});const H=a.beginComputePass(R);H.setPipeline(L.localHistogram),H.setBindGroup(0,$),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const R=a.beginComputePass({label:`prefix_round${I} - l0TileScan`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=a.beginComputePass({label:`prefix_round${I} - l1TileScanOnL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=a.beginComputePass({label:`prefix_round${I} - l1ScanSums`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,Ut,1),R.end()}{const R=a.beginComputePass({label:`prefix_round${I} - addL1ToL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=a.beginComputePass({label:`prefix_round${I} - addL0ToElems`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=a.beginComputePass({label:`prefix_round${I} - computeDigitBase`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,1,1),R.end()}{const R={label:`scatter_round${I}`};M&&I==Jn-1&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+5});const H=a.beginComputePass(R);H.setPipeline(L.scatterElements),H.setBindGroup(0,O),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}{let I=f;this.acc16&&(this.ensureAccResources(ft.canvas_size[0],ft.canvas_size[1]),I=this.accView);const A={label:"render",colorAttachments:[{view:I,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6,...this.acc16?{}:{endOfPassWriteIndex:S+7}});const L=a.beginRenderPass(A);if(L.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end(),this.acc16){const $={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&($.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const O=a.beginRenderPass($);O.setPipeline(this.accResolvePipeline),O.setBindGroup(0,this.accResolveBindGroup),O.draw(3),O.end()}}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const C=this.device.createCommandEncoder({label:"timestamp resolve encoder"});C.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),C.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([C.finish()]),await this.device.queue.onSubmittedWorkDone();const x=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const S=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),I=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:x.length},()=>[]);let L=0;for(let te=0;te<M;te++){const K=(I+te)%this.queryCapacityFrames,Z=K*this.queriesPerFrame;let Y=!0;for(let ae=0;ae<x.length;ae++){const[Se,pe,ce]=x[ae];if(S[Z+ce]===0n||S[Z+pe]===0n||S[Z+pe]<S[Z+ce]){Y=!1;break}}if(!Y){!f&&K%60===0&&console.debug("[timestamp] frame slot",K,"contains unwritten (0) timestamps, skipped in stats");continue}L++;for(let ae=0;ae<x.length;ae++){const[Se,pe,ce]=x[ae],we=Number(S[Z+ce]),oe=Number(S[Z+pe]);A[ae].push((oe-we)/1e6)}}if(L===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const $=[];let O=0,R=0,H=0;for(let te=0;te<x.length;te++){const K=x[te][0],Z=A[te];let Y=0;if(K==="Total"){const ae=this.allFrameTimes;Y=ae.reduce((ce,we)=>ce+we,0)/ae.length;const Se=[...ae].sort((ce,we)=>ce-we);O=Se[Math.floor(Se.length*.99)]||0;const pe=ae.reduce((ce,we)=>ce+Math.pow(we-Y,2),0)/ae.length;R=Math.sqrt(pe),H=Y}else Y=Z.reduce((ae,Se)=>ae+Se,0)/Z.length;$.push([K,Y])}this.lastFrame+=this.frameCount,this.frameCount=0;const ie=Object.fromEntries($);this.lastStageBreakdownMs={cull:ie.Culling??0,preprocess:ie.Preprocess??0,sort:ie.Sort??0,render:ie.Render??0,total:ie.Total??0};const J=`[TIMESTAMP - ${this.constructor.name}]
`+$.map(([te,K])=>`${te}: ${K.toFixed(3)}ms`).join(`
`)+`
Total P99: ${O.toFixed(3)}ms
Total STD: ${R.toFixed(3)}ms
Total AVG: ${H.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(J),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const te=`Stage,ms
`,K=$.map(([ae,Se])=>`${ae},${Se.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(te+K),Y=document.createElement("a");Y.href=Z,Y.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(Y),Y.click(),Y.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(J)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:tc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,C=a?a.height:1;Jl({width:f,height:C,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),vi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Vn(this.pc.num_points*sc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Vn(this.pc.num_points*rc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,C=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${C}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function dc(o,a){return 2*Math.atan(a/(2*o))}function pc(o,a,f,C){const x=Math.tan(C/2),S=Math.tan(f/2),M=x*o,I=-M,A=S*o,L=-A,$=ut.create();return $[0]=2*o/(A-L),$[5]=-2*o/(M-I),$[2]=(A+L)/(A-L),$[6]=(M+I)/(M-I),$[14]=1,$[10]=a/(a-o),$[11]=-(a*o)/(a-o),ut.transpose($,$),$}async function hc(o){gt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return gt(`loaded cameras count: ${f.length}`),f.map(C=>{const x=z.clone(C.position),S=St.create(...C.rotation.flat()),M=S[0],I=S[4],A=S[8],L=S[1],$=S[5],O=S[9],R=S[2],H=S[6],ie=S[10];M*($*ie-O*H)-I*(L*ie-O*R)+A*(L*H-$*R)<0&&(S[1]=-S[1],S[5]=-S[5],S[9]=-S[9]);const J=ut.fromMat3(S);return{position:x,rotation:J,img_name:C.img_name,id:C.id}})}const fc=4*2,_c=4*16,bi=4*_c+2*fc;function mc(o){return o.createBuffer({label:"camera uniform",size:bi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const on=new Float32Array(bi/Float32Array.BYTES_PER_ELEMENT),es=class es{constructor(a,f){N(this,"_renderSize",null);N(this,"uniform_buffer");N(this,"position",z.create());N(this,"rotation",ut.create());N(this,"fovY",45/180*Math.PI);N(this,"fovX");N(this,"focal",Xr.create());N(this,"viewport",Xr.create());N(this,"view_matrix",ut.identity());N(this,"view_inv_matrix",ut.identity());N(this,"proj_matrix",ut.identity());N(this,"proj_inv_matrix",ut.identity());N(this,"_negPos",z.create());N(this,"look",z.create(0,0,1));N(this,"up",z.create(0,1,0));N(this,"right",z.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=mc(f),this.on_update_canvas()}setRenderSize(a,f){this._renderSize=[a,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,C=.5*f/Math.tan(this.fovY*.5);this.focal[0]=C,this.focal[1]=C,this.fovX=dc(C,a),this.viewport[0]=a,this.viewport[1]=f,this.proj_matrix=pc(.01,100,this.fovX,this.fovY),ut.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ut.copy(this.rotation,this.view_matrix),ut.translate(this.view_matrix,this._negPos,this.view_matrix),ut.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(es.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let a=0;on.set(this.view_matrix,a),a+=16,on.set(this.view_inv_matrix,a),a+=16,on.set(this.proj_matrix,a),a+=16,on.set(this.proj_inv_matrix,a),a+=16,on.set(this.viewport,a),a+=2,on.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,on)}set_preset(a){z.copy(a.position,this.position),ut.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};N(es,"Z_AXIS",z.create(0,0,1));let Rs=es;const vc=z.create(1,0,0),bc=z.create(0,1,0),gc=z.create(0,0,1);function wc(o,a){const f=o[0],C=o[4],x=o[8],S=o[1],M=o[5],I=o[9],A=o[2],L=o[6],$=o[10],O=f+M+$;let R,H,ie,j;if(O>0){const J=.5/Math.sqrt(O+1);R=.25/J,H=(L-I)*J,ie=(x-A)*J,j=(S-C)*J}else if(f>M&&f>$){const J=2*Math.sqrt(1+f-M-$);R=(L-I)/J,H=.25*J,ie=(C+S)/J,j=(x+A)/J}else if(M>$){const J=2*Math.sqrt(1+M-f-$);R=(x-A)/J,H=(C+S)/J,ie=.25*J,j=(I+L)/J}else{const J=2*Math.sqrt(1+$-f-M);R=(S-C)/J,H=(x+A)/J,ie=(I+L)/J,j=.25*J}return a[0]=H,a[1]=ie,a[2]=j,a[3]=R,a}class xc{constructor(a){N(this,"element");N(this,"enabled",!0);N(this,"center",z.create(0,0,0));N(this,"up",z.create(0,1,0));N(this,"rotation",[0,0]);N(this,"shift",[0,0]);N(this,"scroll",0);N(this,"speed",.1);N(this,"sensitivity",.08);N(this,"leftPressed",!1);N(this,"rightPressed",!1);N(this,"leftDragPans",!1);N(this,"lastX",0);N(this,"lastY",0);N(this,"touches",new Map);N(this,"lastTouchCenter",null);N(this,"lastPinchDistance",null);N(this,"lastTwoFingerAngle",null);N(this,"lastTouchCount",0);N(this,"roll",0);N(this,"_dir",z.create());N(this,"_right",z.create());N(this,"_upCam",z.create());N(this,"_scratch",z.create());N(this,"_qY",ct.create());N(this,"_qX",ct.create());N(this,"_qRot",ct.create());N(this,"_qZ",ct.create());N(this,"_qLocal",ct.create());N(this,"_qWorldToCam",ct.create());N(this,"_scratchMat3",St.create());N(this,"bboxMin",null);N(this,"bboxMax",null);N(this,"anchor",z.create(0,0,0));N(this,"downCallback",a=>{var f,C,x,S;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(C=(f=a.target)==null?void 0:f.setPointerCapture)==null||C.call(f,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(S=(x=a.target)==null?void 0:x.setPointerCapture)==null||S.call(x,a.pointerId),a.preventDefault())}});N(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const f=a.pageX-this.lastX,C=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=C):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=C)});N(this,"upCallback",a=>{var f,C,x,S;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(C=(f=a.target)==null?void 0:f.releasePointerCapture)==null||C.call(f,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(S=(x=a.target)==null?void 0:x.releasePointerCapture)==null||S.call(x,a.pointerId),a.preventDefault()});N(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let f=a.deltaY;a.deltaMode===1?f*=16:a.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(a){z.copy(a,this.center),z.copy(a,this.anchor)}setOrbitPivot(a){z.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const f=this.camera.rotation;z.set(f[2],f[6],f[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,a,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(z.subtract(this.center,a.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const f=a.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,a.update_buffer()}setBbox(a,f){this.bboxMin=z.create(a[0],a[1],a[2]),this.bboxMax=z.create(f[0],f[1],f[2]);const C=(a[0]+f[0])*.5,x=(a[1]+f[1])*.5,S=(a[2]+f[2])*.5;z.set(C,x,S,this.center),z.set(C,x,S,this.anchor)}resetToCamera(){const a=this.camera.rotation;z.set(a[2],a[6],a[10],this._dir),z.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let C=-1/0,x=1/0,S=!1;for(let M=0;M<3;M++){const I=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],L=this.bboxMax[M]-this.camera.position[M];if(Math.abs(I)>1e-8){const $=A/I,O=L/I;C=Math.max(C,Math.min($,O)),x=Math.min(x,Math.max($,O))}else if(A>0||L<0){S=!0;break}}!S&&C<=x&&x>0&&(f=(Math.max(C,0)+x)*.5)}if(f===null||!isFinite(f)||f<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const C=z.dot(this._scratch,this._dir);f=C>.001?C:z.length(this._scratch)}f=Math.max(.1,f),z.scale(this._dir,f,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const C=f.x-this.lastTouchCenter[0],x=f.y-this.lastTouchCenter[1];this.rotation[0]+=C*.3,this.rotation[1]-=x*.3}this.lastTouchCenter=[f.x,f.y]}else if(a===2){const f=Array.from(this.touches.values()),C=(f[0].x+f[1].x)*.5,x=(f[0].y+f[1].y)*.5,S=f[1].x-f[0].x,M=f[1].y-f[0].y,I=Math.hypot(S,M),A=Math.atan2(M,S);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const L=C-this.lastTouchCenter[0],$=x-this.lastTouchCenter[1],O=Math.hypot(L,$),R=Math.abs(I-this.lastPinchDistance);let H=A-this.lastTwoFingerAngle;H>Math.PI&&(H-=2*Math.PI),H<-Math.PI&&(H+=2*Math.PI),O>.5&&(this.shift[1]-=L,this.shift[0]+=$),R>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(I/this.lastPinchDistance)*10),Math.abs(H)>.0087&&(this.roll+=H)}this.lastTouchCenter=[C,x],this.lastPinchDistance=I,this.lastTwoFingerAngle=A}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const J=f.rotation;this.up[0]=J[1],this.up[1]=J[5],this.up[2]=J[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let C=0,x=!1;Math.abs(this.roll)>1e-4&&(C=this.roll,this.roll=0,x=!0),z.subtract(f.position,this.center,this._dir);let S=z.length(this._dir);S<1e-6&&(S=1e-6);const M=Math.exp(Math.log(S)+this.scroll*a*10*this.speed);z.scale(this._dir,M/S,this._dir),S=M;const I=f.rotation;this._right[0]=I[0],this._right[1]=I[4],this._right[2]=I[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const A=z.create(I[1],I[5],I[9]);z.normalize(A,A),z.length(A)<1e-6&&z.set(0,1,0,A);const L=a*this.speed*.1*S,$=this.shift[1]*L,O=-this.shift[0]*L;z.scale(this._right,$,this._scratch),z.add(this.center,this._scratch,this.center),z.add(f.position,this._scratch,f.position),z.scale(A,O,this._scratch),z.add(this.center,this._scratch,this.center),z.add(f.position,this._scratch,f.position);const R=this.rotation[0]*a*this.sensitivity,H=this.rotation[1]*a*this.sensitivity;if(Math.abs(R)>1e-5||Math.abs(H)>1e-5||x){const J=f.rotation;wc(J,this._qWorldToCam),ct.fromAxisAngle(vc,-H,this._qX),ct.fromAxisAngle(bc,-R,this._qY),ct.multiply(this._qX,this._qY,this._qLocal),x&&(ct.fromAxisAngle(gc,1*C,this._qZ),ct.multiply(this._qZ,this._qLocal,this._qLocal)),ct.normalize(this._qLocal,this._qLocal),ct.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ct.normalize(this._qWorldToCam,this._qWorldToCam),St.fromQuat(this._qWorldToCam,this._scratchMat3),ut.fromMat3(this._scratchMat3,f.rotation);const te=f.rotation,K=te[2],Z=te[6],Y=te[10];f.position[0]=this.center[0]-K*S,f.position[1]=this.center[1]-Z*S,f.position[2]=this.center[2]-Y*S,this.up[0]=te[1],this.up[1]=te[5],this.up[2]=te[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,f.position);f.update_buffer();const j=Math.pow(.8,a*60);this.rotation[0]*=j,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=j,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=j,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=j,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=j,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function gi(o){const a=z.create();for(const f of o)z.add(a,f,a);return z.scale(a,1/Math.max(o.length,1),a)}function wi(o,a){const f=St.create();St.inverse(o,f);const C=z.create();return C[0]=f[0]*a[0]+f[4]*a[1]+f[8]*a[2],C[1]=f[1]*a[0]+f[5]*a[1]+f[9]*a[2],C[2]=f[2]*a[0]+f[6]*a[1]+f[10]*a[2],C}function yc(o){const a=o.slice(),f=[1,0,0,0,1,0,0,0,1],C=(A,L)=>a[A*3+L],x=(A,L,$)=>{a[A*3+L]=$},S=(A,L)=>f[A*3+L],M=(A,L,$)=>{f[A*3+L]=$};for(let A=0;A<30;A++){let L=0,$=1,O=Math.abs(C(0,1));if(Math.abs(C(0,2))>O&&(L=0,$=2,O=Math.abs(C(0,2))),Math.abs(C(1,2))>O&&(L=1,$=2,O=Math.abs(C(1,2))),O<1e-12)break;const R=C(L,L),H=C($,$),ie=C(L,$);let j;Math.abs(R-H)<1e-30?j=Math.PI/4*Math.sign(ie):j=.5*Math.atan2(2*ie,R-H);const J=Math.cos(j),te=Math.sin(j);for(let K=0;K<3;K++){const Z=C(K,L),Y=C(K,$);x(K,L,J*Z+te*Y),x(K,$,-te*Z+J*Y)}for(let K=0;K<3;K++){const Z=C(L,K),Y=C($,K);x(L,K,J*Z+te*Y),x($,K,-te*Z+J*Y)}for(let K=0;K<3;K++){const Z=S(K,L),Y=S(K,$);M(K,L,J*Z+te*Y),M(K,$,-te*Z+J*Y)}}const I=[];for(let A=0;A<3;A++)I.push({val:C(A,A),vec:z.create(S(0,A),S(1,A),S(2,A))});return I.sort((A,L)=>L.val-A.val),{vals:[I[0].val,I[1].val,I[2].val],vecs:[I[0].vec,I[1].vec,I[2].vec]}}function Pc(o,a){const f=gi(o);let C=0,x=0,S=0,M=0,I=0,A=0;for(const ie of o){const j=ie[0]-f[0],J=ie[1]-f[1],te=ie[2]-f[2];C+=j*j,x+=j*J,S+=j*te,M+=J*J,I+=J*te,A+=te*te}const L=[C,x,S,x,M,I,S,I,A],{vecs:$}=yc(L);let O=$[0],R=$[1],H=$[2];return z.dot(H,a)<0&&(z.scale(H,-1,H),z.scale(R,-1,R)),{centroid:f,normal:H,u:O,v:R}}function Sc(o){let a=0,f=0,C=0,x=0,S=0,M=0,I=0,A=0,L=0;for(const[J,te]of o){const K=-2*J,Z=-2*te,Y=1,ae=-(J*J+te*te);a+=K*K,f+=K*Z,C+=K*Y,x+=Z*Z,S+=Z*Y,M+=Y*Y,I+=K*ae,A+=Z*ae,L+=Y*ae}const $=St.create(a,f,C,f,x,S,C,S,M),O=wi($,z.create(I,A,L)),R=O[0],H=O[1],ie=O[2],j=R*R+H*H-ie;return{center:[R,H],radius:Math.sqrt(Math.max(j,1e-12))}}function Cc(o,a){let f=0,C=0,x=0,S=0,M=0,I=0,A=0,L=0,$=0;for(let R=0;R<o.length;R++){const H=o[R],ie=z.normalize(a[R],z.create()),j=1-ie[0]*ie[0],J=-ie[0]*ie[1],te=-ie[0]*ie[2],K=1-ie[1]*ie[1],Z=-ie[1]*ie[2],Y=1-ie[2]*ie[2];f+=j,C+=J,x+=te,S+=K,M+=Z,I+=Y,A+=j*H[0]+J*H[1]+te*H[2],L+=J*H[0]+K*H[1]+Z*H[2],$+=te*H[0]+Z*H[1]+Y*H[2]}const O=St.create(f,C,x,C,S,M,x,M,I);return wi(O,z.create(A,L,$))}function xi(o,a={}){if(o.length===0)return null;const f=a.tiltDownDeg??8,C=a.radiusScale??1,x=a.alignFirst??!0,S=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(ce=>z.clone(ce.position)),I=o.map(ce=>{const we=ce.rotation;return z.create(we[8],we[9],we[10])}),A=o.map(ce=>{const we=ce.rotation;return z.create(we[4],we[5],we[6])}),L=gi(A),$=z.normalize(z.scale(L,-1,z.create())),{centroid:O,normal:R,u:H,v:ie}=Pc(M,$),j=M.map(ce=>{const we=z.sub(ce,O,z.create());return[z.dot(we,H),z.dot(we,ie)]}),{center:J,radius:te}=Sc(j),K=te*C,Z=z.add(O,z.add(z.scale(H,J[0],z.create()),z.scale(ie,J[1],z.create()),z.create()),z.create()),Y=Cc(M,I),ae=K*Math.tan(f*Math.PI/180),Se=z.sub(Y,z.scale(R,ae,z.create()),z.create());let pe=0;if(x){const ce=z.sub(M[0],Z,z.create());pe=Math.atan2(z.dot(ce,ie),z.dot(ce,H))/(2*Math.PI)%1,pe<0&&(pe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${K.toFixed(2)}, tilt=${f}°, normal=[${R[0].toFixed(2)}, ${R[1].toFixed(2)}, ${R[2].toFixed(2)}], startPhase=${pe.toFixed(3)}`),{center:Z,radius:K,normal:R,u:H,v:ie,lookAt:Se,startPhase:pe,direction:S}}function yi(o,a){const f=(o.startPhase+a*o.direction)*2*Math.PI,C=Math.cos(f),x=Math.sin(f),S=z.add(o.center,z.add(z.scale(o.u,o.radius*C,z.create()),z.scale(o.v,o.radius*x,z.create()),z.create()),z.create()),M=z.normalize(z.sub(o.lookAt,S,z.create())),I=z.cross(M,o.normal,z.create());z.length(I)<1e-6&&z.copy(o.u,I),z.normalize(I,I);const A=z.cross(M,I,z.create());z.normalize(A,A);const L=ut.create();return L[0]=I[0],L[1]=A[0],L[2]=M[0],L[3]=0,L[4]=I[1],L[5]=A[1],L[6]=M[1],L[7]=0,L[8]=I[2],L[9]=A[2],L[10]=M[2],L[11]=0,L[12]=0,L[13]=0,L[14]=0,L[15]=1,{position:S,rotation:L,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Ec(o,a={}){const f=xi(o,a);if(!f)return[];const C=a.numViews??120;return Array.from({length:C},(x,S)=>({...yi(f,S/C),img_name:`circle_${S.toString().padStart(4,"0")}`,id:S}))}const Pi="BITYMI01",kc=0,Mc=1,Bc=2,Tc=3,Ac=4,Dc=5;function Vt(o){const a=(o&32768)>>15,f=(o&31744)>>10,C=o&1023;return f===0?(a?-1:1)*Math.pow(2,-14)*(C/1024):f===31?C?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,f-15)*(1+C/1024)}function Gs(o,a,f,C,x,S,M,I,A,L=.5){const $=A?A.length:M.length/8,O=[],R=[];for(let j=0;j<$;j++){const te=(A?A[j]:j)*8,K=M[te]-o,Z=M[te+1]-a,Y=M[te+2]-f,ae=K*C+Z*x+Y*S;if(ae<=0||!(I[te+7]>>>16&1))continue;const Se=I[te+4],pe=Vt(Se&65535),ce=Vt(Se>>>16&65535),we=3*Math.max(pe,ce),oe=K-ae*C,he=Z-ae*x,xe=Y-ae*S;if(oe*oe+he*he+xe*xe>we*we)continue;const Le=Vt(I[te+3]&65535);if(Le<1/255)continue;const Oe=I[te+5],Q=I[te+6];let ee=Vt(Oe&65535),q=Vt(Oe>>>16&65535),X=Vt(Q&65535),Ve=Vt(Q>>>16&65535);const ke=Math.hypot(ee,q,X,Ve)||1;ee/=ke,q/=ke,X/=ke,Ve/=ke;const me=1-2*(X*X+Ve*Ve),ve=2*(q*X+ee*Ve),Ge=2*(q*Ve-ee*X),Pe=2*(q*X-ee*Ve),Me=1-2*(q*q+Ve*Ve),be=2*(X*Ve+ee*q),B=2*(q*Ve+ee*X),U=2*(X*Ve-ee*q),b=1-2*(q*q+X*X),i=C*B+x*U+S*b;if(Math.abs(i)<1e-6)continue;const p=(K*B+Z*U+Y*b)/i;if(!(p>0))continue;const d=p*C-K,v=p*x-Z,w=p*S-Y,E=(d*me+v*ve+w*Ge)/(pe||1e-6),k=(d*Pe+v*Me+w*be)/(ce||1e-6),r=E*E+k*k;if(r>9)continue;const m=Math.min(.99,Le*Math.exp(-.5*r));m<1/255||(O.push(p),R.push(m))}if(O.length===0)return null;const H=O.map((j,J)=>J).sort((j,J)=>O[j]-O[J]);let ie=1;for(const j of H)if(ie*=1-R[j],ie<L)return O[j];return null}function Us(o,a,f){const C=(o-f.viewport[0]*.5)/f.focal[0],x=-((a-f.viewport[1]*.5)/f.focal[1]),S=f.rotation;let M=C*S[0]+x*S[1]+S[2],I=C*S[4]+x*S[5]+S[6],A=C*S[8]+x*S[9]+S[10];const L=Math.hypot(M,I,A)||1;return[M/L,I/L,A/L]}function Ic(o,a,f,C,x,S){const[M,I,A]=Us(o,a,C),L=C.position[0],$=C.position[1],O=C.position[2],R=new Uint32Array(x.buffer,x.byteOffset,x.length);let H=Gs(L,$,O,M,I,A,x,R,null,.5);return H===null&&(H=Gs(L,$,O,M,I,A,x,R,null,.8)),H===null?null:[L+H*M,$+H*I,O+H*A]}function Lc(o,a){const f=o.viewport[0],C=o.viewport[1],x=new Uint32Array(a.buffer,a.byteOffset,a.length),S=o.position[0],M=o.position[1],I=o.position[2],[A,L,$]=Us(f*.5,C*.5,o),O=.06*Math.max(f,C),R=(O+2)/o.focal[0],H=a.length/8,ie=[];for(let K=0;K<H;K++){const Z=K*8,Y=a[Z]-S,ae=a[Z+1]-M,Se=a[Z+2]-I,pe=Y*A+ae*L+Se*$;if(pe<=0)continue;const ce=x[Z+4],we=3*Math.max(Vt(ce&65535),Vt(ce>>>16&65535)),oe=Y-pe*A,he=ae-pe*L,xe=Se-pe*$,Le=pe*R+we;oe*oe+he*he+xe*xe<=Le*Le&&ie.push(K)}if(ie.length===0)return null;const j=Int32Array.from(ie),J=[],te=5;for(let K=0;K<te;K++)for(let Z=0;Z<te;Z++){const Y=f*.5+(Z-(te-1)/2)/((te-1)/2)*O,ae=C*.5+(K-(te-1)/2)/((te-1)/2)*O,[Se,pe,ce]=Us(Y,ae,o),we=Gs(S,M,I,Se,pe,ce,a,x,j,.5);we!==null&&J.push(we*(Se*A+pe*L+ce*$))}return J.length<3?null:(J.sort((K,Z)=>K-Z),J[J.length>>1])}function Si(o){const a=new Uint8Array(o),f=new TextDecoder().decode(a.subarray(0,8));if(f!==Pi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const C=new DataView(o),x=C.getUint32(8,!0),S=12,M=20;let I=null,A=null,L=null;for(let $=0;$<x;$++){const O=S+$*M,R=C.getUint32(O+0,!0),H=Number(C.getBigUint64(O+4,!0)),ie=Number(C.getBigUint64(O+12,!0)),j=a.slice(H,H+ie).buffer;R===kc||R===Mc||R===Dc?I=j:R===Bc?A=j:(R===Tc||R===Ac)&&(L=j)}if(I===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:I,camerasBuffer:A,atlasBuffer:L}}async function zc(o,a){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const C=(()=>{const I=f.headers.get("content-length");return I&&parseInt(I,10)||void 0})(),x=(M=f.body)==null?void 0:M.getReader();let S;if(!x)S=await f.arrayBuffer(),a&&a(S.byteLength,C,0);else{const I=[];let A=0,L=performance.now(),$=0;for(;;){const{done:H,value:ie}=await x.read();if(H)break;I.push(ie),A+=ie.byteLength;const j=performance.now();if(j-L>=150&&a){const J=(A-$)/((j-L)/1e3);a(A,C,J),L=j,$=A}}const O=new Uint8Array(A);let R=0;for(const H of I)O.set(H,R),R+=H.byteLength;S=O.buffer,a&&a(A,C,0)}return S.byteLength>=8&&new TextDecoder().decode(new Uint8Array(S,0,8))===Pi?{bundle:Si(S),rawPly:null}:{bundle:null,rawPly:S}}function Rc(o){return new Promise(a=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var C;return a(((C=f.files)==null?void 0:C[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Gc(o,a,f){const C=document.getElementById("ui-panel-container"),x=document.getElementById("load-button"),S=document.getElementById("quick-links");x&&(x.onclick=async()=>{const L=await Rc(".ply,.bitymi");if(L)if(C&&(C.style.display="none"),L.name.toLowerCase().endsWith(".bitymi")){const $=await L.arrayBuffer(),{pcBuffer:O}=Si($),R=new File([O],L.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),H=await As(R,o);a(H)}else{const $=await As(L,o);a($)}}),S&&(S.innerHTML="");const M=new URLSearchParams(window.location.search),I=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");I&&(C&&(C.style.display="none"),f(I,A))}async function Uc(o,a,f,C){const x=new Rs(o,f),S=new xc(x);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const I=typeof window<"u"&&window.parent!==window,A={pos:new Float32Array(3),rot:new Float32Array(16)};if(I){window.addEventListener("message",Q=>{const ee=Q.data;if(!(!ee||ee.type!=="halloumi_sync_pose")&&!(!Array.isArray(ee.position)||ee.position.length!==3)&&!(!Array.isArray(ee.rotation)||ee.rotation.length!==16)){for(let q=0;q<3;q++)x.position[q]=ee.position[q];for(let q=0;q<16;q++)x.rotation[q]=ee.rotation[q];x.update_buffer(),S.resetToCamera();for(let q=0;q<3;q++)A.pos[q]=x.position[q];for(let q=0;q<16;q++)A.rot[q]=x.rotation[q]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const L=()=>{if(!I)return;const Q=x.position,ee=x.rotation;let q=!1;for(let X=0;X<3;X++)if(Math.abs(Q[X]-A.pos[X])>1e-6){q=!0;break}if(!q){for(let X=0;X<16;X++)if(Math.abs(ee[X]-A.rot[X])>1e-6){q=!0;break}}if(q){for(let X=0;X<3;X++)A.pos[X]=Q[X];for(let X=0;X<16;X++)A.rot[X]=ee[X];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Q[0],Q[1],Q[2]],rotation:Array.from(ee)},"*")}catch{}}},$="rgba8unorm";a.configure({device:f,format:$,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let O=null;const R=()=>{x.on_update_canvas(),O!==null&&yn(o.width,o.height,f,O.render_settings_buffer)};new ResizeObserver(()=>{const Q=Math.max(.25,he.render_scale),ee=Math.max(1,Math.ceil(Q*o.clientWidth)),q=Math.max(1,Math.ceil(Q*o.clientHeight));o.width===ee&&o.height===q||(o.width=ee,o.height=q,R())}).observe(o);let ie=0,j=0;const J=()=>{(o.width!==ie||o.height!==j)&&(ie=o.width,j=o.height,R())},te=new URLSearchParams(window.location.search);let Z=te.get("animation")==="1";S.enabled=!Z;const Y=te.get("camera_url"),ae=te.get("bfc"),Se=ae==="1"||ae==="true",pe=te.get("bfc_cos"),ce=pe!==null?Number(pe):NaN,we=Number.isFinite(ce)?ce:2,oe=Math.max(1,window.devicePixelRatio||1),he={gaussian_scaling:1,sh_bias:.5,animate:Z,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Se,bfc_cos:we,legacy_renderer:!1,fetch_by_id:!0,render_scale:1},xe=new Wl.Pane({title:"Config",expanded:!0});xe.addInput(he,"animate",{label:"Animate"}).on("change",Q=>{const ee=Z;Z=Q.value,S.enabled=!Q.value,!ee&&Z&&Le.value&&Le.value.onAnimateStart(),ee&&!Z&&Le.value&&Le.value.onAnimateStop()}),xe.addInput(he,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};Gc(f,Q=>Oe(Q,[],null),async(Q,ee)=>{let q=ee??Y,X,Ve=null;const ke=Q.toLowerCase();if(ke.endsWith(".bitymi")||ke.includes(".bitymi?")){Os("downloading bundle ...");try{const{bundle:ve}=await zc(Q,(Pe,Me,be)=>{const B=Pe/1048576,U=Me?Me/(1024*1024):void 0,b=be/(1024*1024),i=Me?Math.min(99,Math.floor(Pe/Me*100)):void 0,p=U?`total ${U.toFixed(1)} MB`:"total -- MB",d=U&&i!==void 0?`${B.toFixed(1)} MB downloaded (${i}%)`:`${B.toFixed(1)} MB downloaded`,v=`${b.toFixed(2)} MB/s`;ln(`downloading bundle ...
${p}, ${d}
${v}`)});if(!ve)throw new Error("Expected a .bitymi bundle");ln("parsing PLY ...");const Ge=new File([ve.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(X=await As(Ge,f),!q&&ve.camerasBuffer&&(q=URL.createObjectURL(new Blob([ve.camerasBuffer],{type:"application/json"}))),ve.atlasBuffer){const Pe=ve.atlasBuffer.byteLength/1048576;ln(`uploading atlas ...
${Pe.toFixed(1)} MB BC7`);try{const Me=Ol(ve.atlasBuffer);Ve=Nl(f,Me,!0)}catch(Me){console.warn("[atlas] failed to parse/upload atlas:",Me)}}}catch(ve){throw Gn(),ve}}else X=await $l(Q,f);const me=q?await hc(q):[];me.length>0&&x.set_preset(me[0]),Oe(X,me,Ve)});function Oe(Q,ee=[],q=null){const X=[(Q.bbox.min[0]+Q.bbox.max[0])/2,(Q.bbox.min[1]+Q.bbox.max[1])/2,(Q.bbox.min[2]+Q.bbox.max[2])/2];S.setBbox(Q.bbox.min,Q.bbox.max),.5*Math.sqrt((Q.bbox.max[0]-Q.bbox.min[0])**2+(Q.bbox.max[1]-Q.bbox.min[1])**2+(Q.bbox.max[2]-Q.bbox.min[2])**2);function Ve(W,G){const le=Ic(W,G,o,x,Q.surfel_data);le&&(S.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function ke(){const W=Lc(x,Q.surfel_data);if(W!==null&&W>.001){S.setOrbitDepth(W);return}const G=x.rotation,le=G[2],Ce=G[6],Ee=G[10],fe=(Q.centroid[0]-x.position[0])*le+(Q.centroid[1]-x.position[1])*Ce+(Q.centroid[2]-x.position[2])*Ee;fe>.001&&S.setOrbitDepth(fe)}if(ee.length===0){const W=Q.bbox.max[0]-Q.bbox.min[0],G=Q.bbox.max[1]-Q.bbox.min[1],le=Q.bbox.max[2]-Q.bbox.min[2],Ee=.5*Math.sqrt(W*W+G*G+le*le)*.5;z.set(X[0]-Ee,X[1]-Ee,X[2]-Ee,x.position);const fe=z.create(Ee,Ee,Ee);z.normalize(fe,fe);const de=z.create(0,1,0),Be=z.create();z.cross(de,fe,Be),z.normalize(Be,Be);const qe=z.create();z.cross(fe,Be,qe);const at=St.create(Be[0],qe[0],fe[0],Be[1],qe[1],fe[1],Be[2],qe[2],fe[2]);ut.fromMat3(at,x.rotation),x.update_buffer()}S.setCenter(z.create(Q.centroid[0],Q.centroid[1],Q.centroid[2]));const me=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),ve="halloumi.fetch_by_id";let Ge=null;try{const W=localStorage.getItem(ve);(W==="0"||W==="1")&&(Ge=W==="1")}catch{}const Pe=te.get("byid"),Me={fetchById:Pe!==null?Pe==="1":Ge!==null?Ge:!me,octBound:te.get("oct")==="1",acc16:te.get("acc16")==="1"},be=new uc(Q,f,$,x.uniform_buffer,C,q,Me);zs({hypLegacy:te.get("hyp_legacy")==="1"},f,be.render_settings_buffer),he.legacy_renderer=te.get("legacy")==="1",he.legacy_renderer&&be.setLegacyRenderer(!0),he.fetch_by_id=Me.fetchById,console.log(`[render_2dgs] fetch_by_id=${Me.fetchById} (source: ${Pe!==null?"?byid":Ge!==null?"remembered":`handheld=${me}`})`),O=be,yn(o.width,o.height,f,be.render_settings_buffer),he.atlas_enabled=q!==null;{const W=Q.surfel_data,G=W.length/8;let le=0,Ce=0,Ee=0;for(let de=0;de<G;de++)le+=W[de*8],Ce+=W[de*8+1],Ee+=W[de*8+2];const fe=G>0?[le/G,Ce/G,Ee/G]:[0,0,0];be.setBfcParams(he.bfc_cos,fe),zs({bfc:he.bfc},f,be.render_settings_buffer),console.log(`[bfc] flag=${he.bfc} cos=${he.bfc_cos} centroid=(${fe[0].toFixed(3)}, ${fe[1].toFixed(3)}, ${fe[2].toFixed(3)})`)}let B=!1;const U=(()=>{if(q!==null)return`${q.meta.format===2?"BC7":q.meta.format===3?"ASTC 4×4":q.meta.format===7?"BC7 codebook gather (typeD)":`format=${q.meta.format}`} ${q.meta.width}×${q.meta.height}, ${q.meta.n_layers} layers`;const W=f.features.has("texture-compression-bc"),G=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(W?["BC7"]:[]).concat(G?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",U),oi(Q.sh_bias,f,be.render_settings_buffer),ii(he.gaussian_scaling,f,be.render_settings_buffer),he.sh_bias=Q.sh_bias;const b=Q.num_points.toLocaleString(),i={stats:`${b} surfels · -- fps`};xe.addMonitor(i,"stats",{label:"Stats",interval:200});const p=.4,d=3,v=.3;let w=null,E=0,k=0;const r=ct.create(),m=St.create();let u=ee.length>0?0:-1;const h={view:ee.length>0?`${u+1} / ${ee.length}: ${ee[u].img_name??u}`:"— no presets —"},l=document.createElement("span");function _(W){const G=St.create(W[0],W[1],W[2],W[4],W[5],W[6],W[8],W[9],W[10]);return ct.fromMat(G)}function y(W,G){w={fromPos:z.clone(x.position),toPos:z.clone(W.position),fromQuat:ct.normalize(_(x.rotation)),toQuat:ct.normalize(_(W.rotation)),target:W,t:0,duration:Math.max(.01,G)}}const g=(W,G=!0)=>{if(ee.length===0)return;u=(W%ee.length+ee.length)%ee.length;const le=ee[u];G?y(le,p):(x.set_preset(le),S.resetToCamera(),ke()),h.view=`${u+1} / ${ee.length}: ${ee[u].img_name??u}`,l.textContent=h.view};if(ee.length>0){const W=xe.addSeparator(),G=document.createElement("div");G.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const le=(Ee,fe,de)=>{const Be=document.createElement("button");return Be.className="tp-btnv_b",Be.textContent=Ee,Be.title=fe,Be.style.cssText="flex:0 0 34px;height:24px;padding:0;",Be.addEventListener("click",de),Be};l.textContent=h.view,l.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",G.appendChild(le("◀","previous view (←)",()=>g(u-1))),G.appendChild(l),G.appendChild(le("▶","next view (→)",()=>g(u+1))),(xe.element.querySelector(".tp-rotv_c")??xe.element).insertBefore(G,W.element),W.dispose()}const D=ee.length>0?xi(ee,{tiltDownDeg:15,alignFirst:!0}):null,V=D?Ec(ee,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let F=0;const ue=12;Le.value={onAnimateStart:()=>{F=0},onAnimateStop:()=>{S.resetToCamera(),ke()}},xe.addInput(he,"render_scale",{label:"Render scale",min:.25,max:oe,step:.25}).on("change",W=>{const G=Math.max(.25,W.value),le=Math.max(1,Math.ceil(G*o.clientWidth)),Ce=Math.max(1,Math.ceil(G*o.clientHeight));(o.width!==le||o.height!==Ce)&&(o.width=le,o.height=Ce,R())}),xe.addInput(he,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",W=>ii(W.value,f,be.render_settings_buffer)),xe.addInput(he,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",W=>oi(W.value,f,be.render_settings_buffer)),xe.addInput(he,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",W=>{be.bgColor=[W.value.r,W.value.g,W.value.b,W.value.a]});const re=xe.addInput(he,"atlas_enabled",{label:"Texture"}).on("change",W=>{be.setAtlasEnabled(W.value),ge()}),ne=document.createElement("button");ne.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const ge=()=>{ne.textContent=he.atlas_enabled?"Texture: ON":"Texture: OFF",ne.style.borderColor=he.atlas_enabled?"#f0b060":"#444",ne.style.color=he.atlas_enabled?"#f0b060":"#bbb"},Te=()=>{he.atlas_enabled=!he.atlas_enabled,be.setAtlasEnabled(he.atlas_enabled),re.refresh(),ge()};ne.title="toggle the baked texture (T)",ne.addEventListener("click",Te),q&&document.body.appendChild(ne),ge(),be.hasMips&&(be.setMipMode(he.mips),xe.addInput(he,"mips",{label:"Mips (trilinear)"}).on("change",W=>be.setMipMode(W.value))),xe.addInput(he,"legacy_renderer",{label:"Legacy renderer"}).on("change",W=>be.setLegacyRenderer(W.value)),xe.addInput(he,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",W=>{be.setFetchById(W.value);try{localStorage.setItem("halloumi.fetch_by_id",W.value?"1":"0")}catch{}});const _e={aspect:"canvas"},ye=xe.addFolder({title:"📸 Screenshot",expanded:!1});ye.addInput(_e,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Ie={s:"pick a size to capture"};ye.addMonitor(Ie,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const ze=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let $e=null;function Xe(W){let G;if(_e.aspect==="canvas")G=o.width/o.height;else{const[de,Be]=_e.aspect.split(":").map(Number);G=de/Be}const le=f.limits.maxTextureDimension2D;let Ce,Ee;if(W==="canvas"&&_e.aspect==="canvas")Ce=o.width,Ee=o.height;else{const de=W==="canvas"?Math.max(o.width,o.height):W;G>=1?(Ce=de,Ee=Math.round(de/G)):(Ee=de,Ce=Math.round(de*G))}const fe=Math.min(1,le/Math.max(Ce,Ee));return Ce=Math.max(2,Math.round(Ce*fe)&-2),Ee=Math.max(2,Math.round(Ee*fe)&-2),[Ce,Ee]}function He(W,G){const le=URL.createObjectURL(W),Ce=document.createElement("a");Ce.href=le,Ce.download=G,document.body.appendChild(Ce),Ce.click(),Ce.remove(),setTimeout(()=>URL.revokeObjectURL(le),1e4)}async function Qe(W,G){var de;const le=(W.size/1048576).toFixed(1),Ce=window;if(typeof Ce.showSaveFilePicker=="function")try{const Be=await Ce.showSaveFilePicker({suggestedName:G,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),qe=await Be.createWritable();return await qe.write(W),await qe.close(),`saved ${Be.name??G} (${le} MB) where you chose`}catch(Be){if((Be==null?void 0:Be.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ee=new File([W],G,{type:"image/png"}),fe=navigator;if(fe.share&&((de=fe.canShare)!=null&&de.call(fe,{files:[Ee]})))try{return await fe.share({files:[Ee],title:G}),`shared ${G} (${le} MB) via share sheet`}catch(Be){if((Be==null?void 0:Be.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return He(W,G),`downloaded ${G} (${le} MB) to your browser's Downloads folder`}async function Je(W){if(B)return;const[G,le]=Xe(W);Ie.s=`rendering ${G}×${le}…`;const Ce=o.width,Ee=o.height;x.setRenderSize(G,le),yn(G,le,f,be.render_settings_buffer);const fe=f.createTexture({size:[G,le,1],format:$,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),de=Math.ceil(G*4/256)*256,Be=f.createBuffer({size:de*le,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),qe=f.createCommandEncoder({label:"screenshot"});be.frame(qe,fe.createView(),!1),qe.copyTextureToBuffer({texture:fe},{buffer:Be,bytesPerRow:de,rowsPerImage:le},[G,le,1]),f.queue.submit([qe.finish()]),x.clearRenderSize(),yn(Ce,Ee,f,be.render_settings_buffer);try{await Be.mapAsync(GPUMapMode.READ);const at=new Uint8Array(Be.getMappedRange()),_t=new Uint8ClampedArray(G*le*4);for(let ht=0;ht<le;ht++)_t.set(at.subarray(ht*de,ht*de+G*4),ht*G*4);for(let ht=3;ht<_t.length;ht+=4)_t[ht]=255;Be.unmap();const xt=document.createElement("canvas");xt.width=G,xt.height=le,xt.getContext("2d").putImageData(new ImageData(_t,G,le),0,0);const Ye=await new Promise((ht,dn)=>xt.toBlob(Ft=>Ft?ht(Ft):dn(new Error("toBlob failed")),"image/png")),un=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),Pn=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),Ot=`${un}_${G}x${le}_${Pn}.png`;$e={blob:Ye,name:Ot},Ie.s=await Qe(Ye,Ot)}catch(at){console.error("[screenshot]",at),Ie.s=`failed: ${at}`}finally{Be.destroy(),fe.destroy()}}{const W=document.createElement("div");W.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const G=(Ce,Ee,fe)=>{const de=document.createElement("button");de.className="tp-btnv_b",de.textContent=Ce,de.title=Ee,de.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",de.addEventListener("click",fe),W.appendChild(de)};G("Canvas","current canvas size",()=>{Je("canvas")});for(const[Ce,Ee]of ze)G(Ce,`${Ee} px long edge`,()=>{Je(Ee)});(ye.element.querySelector(".tp-fldv_c")??ye.element).appendChild(W)}ye.addButton({title:"⬇ Download last"}).on("click",()=>{if(!$e){Ie.s="nothing captured yet";return}He($e.blob,$e.name),Ie.s=`downloaded ${$e.name} to your browser's Downloads folder`}),xe.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(ee.length>0)x.set_preset(ee[0]);else{const W=Q.bbox.max[0]-Q.bbox.min[0],G=Q.bbox.max[1]-Q.bbox.min[1],le=Q.bbox.max[2]-Q.bbox.min[2],Ee=.5*Math.sqrt(W*W+G*G+le*le)*.5;z.set(X[0]-Ee,X[1]-Ee,X[2]-Ee,x.position);const fe=z.create(Ee,Ee,Ee);z.normalize(fe,fe);const de=z.create();z.cross(z.create(0,1,0),fe,de),z.normalize(de,de);const Be=z.create();z.cross(fe,de,Be);const qe=St.create(de[0],Be[0],fe[0],de[1],Be[1],fe[1],de[2],Be[2],fe[2]);ut.fromMat3(qe,x.rotation),x.update_buffer()}S.resetToCamera(),ke()});const et={result:"— click Benchmark —"},tt=xe.addMonitor(et,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});tt.hidden=!0;const st={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function ot(){const G=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(st))if(G.startsWith(le))return le;return null}const Ke=document.createElement("div");Ke.id="bench-overlay",Ke.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ke);function nt(W,G,le){const Ce=Math.floor(G/Math.max(1,le)*100),Ee=32,fe=Math.floor(G/Math.max(1,le)*Ee),de="█".repeat(fe)+"░".repeat(Ee-fe);Ke.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${W}</div><div>[${de}] ${Ce}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${G} / ${le} frames · offscreen · pipelined · no vsync</div>`,Ke.style.display="block"}function je(){Ke.style.display="none"}async function rt(W=10,G=200){if(B)return;if(ee.length===0){et.result="no cameras to benchmark";return}B=!0;const le=Z,Ce=he.animate,Ee=new Float32Array(x.position),fe=new Float32Array(x.rotation);Z=!1,he.animate=!1,xe.refresh(),w=null,S.enabled=!1;const de=ot(),Be=de?st[de]:null,qe=(Be==null?void 0:Be.w)??o.width,at=(Be==null?void 0:Be.h)??o.height,_t=(Be==null?void 0:Be.fovY)??x.getFov(),xt=de?`${de} · ${qe>=4e3/4+500?"images_4":"images_2"}`:"custom",Ye=o.width,un=o.height,Pn=x.getFov();o.width=qe,o.height=at,x.setFov(_t),yn(qe,at,f,be.render_settings_buffer);const Ot=f.createTexture({size:[qe,at,1],format:$,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ht=Ot.createView(),dn=()=>{const mt=f.createCommandEncoder();be.frame(mt,ht,!1),f.queue.submit([mt.finish()])},Ft=()=>new Promise(mt=>setTimeout(mt,0)),ss=20,Nt=async(mt,$t)=>{let Qt=0,It=0;for(nt($t,0,mt),await Ft();It<mt;){const pn=Math.min(ss,mt-It),hn=performance.now();for(let fn=0;fn<pn;fn++)x.set_preset(ee[(It+fn)%ee.length]),dn();await f.queue.onSubmittedWorkDone();const rs=performance.now();Qt+=rs-hn,It+=pn,nt($t,It,mt),await Ft()}return Qt};try{await Nt(W,"Warming up");const $t=await Nt(G,"Benchmarking")/G,Qt=1e3/$t,It=Q.num_points??Q.surfel_data.length/8,pn=(_t*180/Math.PI).toFixed(1),hn=`${Qt.toFixed(1)} FPS  (${$t.toFixed(2)} ms/frame)
${qe}×${at} · fovY ${pn}° · ${xt}
${It.toLocaleString()} surfels · ${W}w+${G}b · pipelined`;et.result=hn,tt.hidden=!1,console.log("[bench]",hn.replace(/\n/g,"  |  "))}catch(mt){console.error("[bench] failed:",mt),et.result=`bench failed: ${mt}`,tt.hidden=!1}finally{je(),Ot.destroy(),o.width=Ye,o.height=un,x.setFov(Pn),yn(Ye,un,f,be.render_settings_buffer),x.position.set(Ee),x.rotation.set(fe),x.update_buffer(),S.enabled=!le,Z=le,he.animate=Ce,xe.refresh(),B=!1}}xe.addButton({title:"📊 Benchmark"}).on("click",()=>rt());const Fe=new Set,dt=W=>{const G=W.target;return!!G&&(G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable)};document.addEventListener("keyup",W=>{Fe.delete(W.key.toLowerCase())}),window.addEventListener("blur",()=>Fe.clear());const it=W=>{if(Fe.size===0||he.animate)return;const G=x.rotation,le=[G[0],G[4],G[8]],Ce=[G[1],G[5],G[9]],Ee=[G[2],G[6],G[10]],fe=S.center,Be=Math.max(.05,z.distance(x.position,fe))*(Fe.has("shift")?3:1.2)*W;let qe=0,at=0,_t=0;if(Fe.has("w")&&(_t+=1),Fe.has("s")&&(_t-=1),Fe.has("d")&&(qe+=1),Fe.has("a")&&(qe-=1),Fe.has("e")&&(at+=1),Fe.has("q")&&(at-=1),!qe&&!at&&!_t)return;const xt=[0,0,0];for(let Ye=0;Ye<3;Ye++)xt[Ye]=(le[Ye]*qe+Ce[Ye]*at+Ee[Ye]*_t)*Be;for(let Ye=0;Ye<3;Ye++)x.position[Ye]+=xt[Ye],fe[Ye]+=xt[Ye];w=null};document.addEventListener("keydown",W=>{if(dt(W))return;const G=W.key,le=G.toLowerCase();if(["w","a","s","d","q","e","shift"].includes(le)&&!(W.shiftKey&&le==="d")){Fe.add(le),W.preventDefault();return}if(le==="t"){Te();return}if(G>="0"&&G<="9"&&ee.length>0){const Ce=parseInt(G);Ce<ee.length&&g(Ce)}else G==="ArrowLeft"||G==="PageUp"?(g(u-1),W.preventDefault()):G==="ArrowRight"||G==="PageDown"?(g(u+1),W.preventDefault()):W.shiftKey&&le==="d"&&be.debugReadSortedIndices(30).catch(Ce=>console.error("[DEBUG] readback failed:",Ce))});function Mt(W,G){const le=o.getBoundingClientRect(),Ce=window.devicePixelRatio||1;return[(W-le.left)*Ce,(G-le.top)*Ce]}o.addEventListener("dblclick",W=>{const[G,le]=Mt(W.clientX,W.clientY);Ve(G,le)});let wt=0,Ct=0,Et=0;o.addEventListener("pointerdown",W=>{if(W.pointerType!=="touch")return;const G=performance.now(),le=G-wt,Ce=W.clientX-Ct,Ee=W.clientY-Et;if(le>0&&le<300&&Ce*Ce+Ee*Ee<40*40){const[fe,de]=Mt(W.clientX,W.clientY);Ve(fe,de),wt=0}else wt=G,Ct=W.clientX,Et=W.clientY});function Tt(){return M}let At=performance.now(),Bt=60,Xt=Promise.resolve(),kt=0;async function Dt(){var Ee;const W=performance.now(),G=Math.min((W-At)/1e3,.1);if(At=W,G>0){const fe=((Ee=be.lastStageBreakdownMs)==null?void 0:Ee.total)??0,de=fe>.5?1e3/fe:1/G;Bt=Bt*.9+de*.1,i.stats=`${b} surfels · ${Math.round(Bt)} fps`}if(B){requestAnimationFrame(Dt);return}if(Tt()&&(w||Z)&&(w=null,S.resetToCamera(),ke(),Z&&(Z=!1,he.animate=!1,xe.refresh())),Z&&he.animateMode==="circle"&&D){F+=G/ue,F>=1&&(F-=1);const fe=yi(D,F);x.set_preset(fe),S.update(G);const de=f.createCommandEncoder();be.frame(de,a.getCurrentTexture().createView()),f.queue.submit([de.finish()]),kt++,kt===2&&Gn(),requestAnimationFrame(Dt);return}if(w){w.t+=G/w.duration;const fe=Math.min(1,w.t),de=fe*fe*(3-2*fe);z.lerp(w.fromPos,w.toPos,de,x.position),ct.slerp(w.fromQuat,w.toQuat,de,r),St.fromQuat(r,m),ut.fromMat3(m,x.rotation),x.update_buffer(),w.t>=1&&(x.set_preset(w.target),w=null,Z?ee.length>0&&(E=v):(S.resetToCamera(),ke()))}else if(Z&&!Tt()){const fe=he.animateMode==="circle"&&V.length>0,de=fe?V:ee;if(de.length!==0){if(E-=G,E<=0){const qe=((fe?k:u)+1)%de.length;fe?k=qe:u=qe;const at=fe?d/8:d;y(de[qe],at),fe||(h.view=`${u+1} / ${ee.length}: ${ee[u].img_name??u}`)}}}it(G),S.update(G),L(),J(),await Xt;const le=f.createCommandEncoder(),Ce=a.getCurrentTexture().createView();be.frame(le,Ce),f.queue.submit([le.finish()]),Xt=f.queue.onSubmittedWorkDone(),kt++,kt===2&&Gn(),requestAnimationFrame(Dt)}requestAnimationFrame(Dt)}}(function(){let a="dev";for(const C of Array.from(document.querySelectorAll('script[type="module"]'))){const S=C.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(S){a=S[1];break}}const f=document.createElement("div");f.textContent="v "+a,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const S=document.querySelector("#title");S.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const S=document.querySelector("#title");S.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),C=document.querySelector("#webgpu-canvas");zl(C!==null);const x=C.getContext("webgpu");Uc(C,x,f,a)})();
