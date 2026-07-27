var gl=Object.defineProperty;var wl=(o,a,h)=>a in o?gl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[a]=h;var O=(o,a,h)=>(wl(o,typeof a!="symbol"?a+"":a,h),h);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))S(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&S(M)}).observe(document,{childList:!0,subtree:!0});function h(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function S(w){if(w.ep)return;w.ep=!0;const k=h(w);fetch(w.href,k)}})();function xl(o,a){return class extends o{constructor(...h){super(...h),a(this)}}}const yl=xl(Array,o=>o.fill(0));let Ae=1e-6;function Pl(o){function a(P=0,E=0){const x=new o(2);return P!==void 0&&(x[0]=P,E!==void 0&&(x[1]=E)),x}const h=a;function S(P,E,x){const r=x??new o(2);return r[0]=P,r[1]=E,r}function w(P,E){const x=E??new o(2);return x[0]=Math.ceil(P[0]),x[1]=Math.ceil(P[1]),x}function k(P,E){const x=E??new o(2);return x[0]=Math.floor(P[0]),x[1]=Math.floor(P[1]),x}function M(P,E){const x=E??new o(2);return x[0]=Math.round(P[0]),x[1]=Math.round(P[1]),x}function F(P,E=0,x=1,r){const m=r??new o(2);return m[0]=Math.min(x,Math.max(E,P[0])),m[1]=Math.min(x,Math.max(E,P[1])),m}function T(P,E,x){const r=x??new o(2);return r[0]=P[0]+E[0],r[1]=P[1]+E[1],r}function D(P,E,x,r){const m=r??new o(2);return m[0]=P[0]+E[0]*x,m[1]=P[1]+E[1]*x,m}function U(P,E){const x=P[0],r=P[1],m=E[0],u=E[1],p=Math.sqrt(x*x+r*r),l=Math.sqrt(m*m+u*u),_=p*l,y=_&&de(P,E)/_;return Math.acos(y)}function G(P,E,x){const r=x??new o(2);return r[0]=P[0]-E[0],r[1]=P[1]-E[1],r}const Y=G;function V(P,E){return Math.abs(P[0]-E[0])<Ae&&Math.abs(P[1]-E[1])<Ae}function W(P,E){return P[0]===E[0]&&P[1]===E[1]}function K(P,E,x,r){const m=r??new o(2);return m[0]=P[0]+x*(E[0]-P[0]),m[1]=P[1]+x*(E[1]-P[1]),m}function $(P,E,x,r){const m=r??new o(2);return m[0]=P[0]+x[0]*(E[0]-P[0]),m[1]=P[1]+x[1]*(E[1]-P[1]),m}function ce(P,E,x){const r=x??new o(2);return r[0]=Math.max(P[0],E[0]),r[1]=Math.max(P[1],E[1]),r}function H(P,E,x){const r=x??new o(2);return r[0]=Math.min(P[0],E[0]),r[1]=Math.min(P[1],E[1]),r}function Z(P,E,x){const r=x??new o(2);return r[0]=P[0]*E,r[1]=P[1]*E,r}const q=Z;function ae(P,E,x){const r=x??new o(2);return r[0]=P[0]/E,r[1]=P[1]/E,r}function ne(P,E){const x=E??new o(2);return x[0]=1/P[0],x[1]=1/P[1],x}const pe=ne;function ie(P,E,x){const r=x??new o(3),m=P[0]*E[1]-P[1]*E[0];return r[0]=0,r[1]=0,r[2]=m,r}function de(P,E){return P[0]*E[0]+P[1]*E[1]}function Ce(P){const E=P[0],x=P[1];return Math.sqrt(E*E+x*x)}const Ue=Ce;function Le(P){const E=P[0],x=P[1];return E*E+x*x}const Ge=Le;function Be(P,E){const x=P[0]-E[0],r=P[1]-E[1];return Math.sqrt(x*x+r*r)}const be=Be;function ye(P,E){const x=P[0]-E[0],r=P[1]-E[1];return x*x+r*r}const Q=ye;function ee(P,E){const x=E??new o(2),r=P[0],m=P[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(x[0]=r/u,x[1]=m/u):(x[0]=0,x[1]=0),x}function re(P,E){const x=E??new o(2);return x[0]=-P[0],x[1]=-P[1],x}function me(P,E){const x=E??new o(2);return x[0]=P[0],x[1]=P[1],x}const ze=me;function Se(P,E,x){const r=x??new o(2);return r[0]=P[0]*E[0],r[1]=P[1]*E[1],r}const Te=Se;function X(P,E,x){const r=x??new o(2);return r[0]=P[0]/E[0],r[1]=P[1]/E[1],r}const he=X;function Ve(P=1,E){const x=E??new o(2),r=Math.random()*2*Math.PI;return x[0]=Math.cos(r)*P,x[1]=Math.sin(r)*P,x}function B(P){const E=P??new o(2);return E[0]=0,E[1]=0,E}function L(P,E,x){const r=x??new o(2),m=P[0],u=P[1];return r[0]=m*E[0]+u*E[4]+E[12],r[1]=m*E[1]+u*E[5]+E[13],r}function v(P,E,x){const r=x??new o(2),m=P[0],u=P[1];return r[0]=E[0]*m+E[4]*u+E[8],r[1]=E[1]*m+E[5]*u+E[9],r}function i(P,E,x,r){const m=r??new o(2),u=P[0]-E[0],p=P[1]-E[1],l=Math.sin(x),_=Math.cos(x);return m[0]=u*_-p*l+E[0],m[1]=u*l+p*_+E[1],m}function f(P,E,x){const r=x??new o(2);return ee(P,r),Z(r,E,r)}function d(P,E,x){const r=x??new o(2);return Ce(P)>E?f(P,E,r):me(P,r)}function b(P,E,x){const r=x??new o(2);return K(P,E,.5,r)}return{create:a,fromValues:h,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:D,angle:U,subtract:G,sub:Y,equalsApproximately:V,equals:W,lerp:K,lerpV:$,max:ce,min:H,mulScalar:Z,scale:q,divScalar:ae,inverse:ne,invert:pe,cross:ie,dot:de,length:Ce,len:Ue,lengthSq:Le,lenSq:Ge,distance:Be,dist:be,distanceSq:ye,distSq:Q,normalize:ee,negate:re,copy:me,clone:ze,multiply:Se,mul:Te,divide:X,div:he,random:Ve,zero:B,transformMat4:L,transformMat3:v,rotate:i,setLength:f,truncate:d,midpoint:b}}const Nr=new Map;function oi(o){let a=Nr.get(o);return a||(a=Pl(o),Nr.set(o,a)),a}function Sl(o){function a(l,_,y){const g=new o(3);return l!==void 0&&(g[0]=l,_!==void 0&&(g[1]=_,y!==void 0&&(g[2]=y))),g}const h=a;function S(l,_,y,g){const z=g??new o(3);return z[0]=l,z[1]=_,z[2]=y,z}function w(l,_){const y=_??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function k(l,_){const y=_??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function M(l,_){const y=_??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function F(l,_=0,y=1,g){const z=g??new o(3);return z[0]=Math.min(y,Math.max(_,l[0])),z[1]=Math.min(y,Math.max(_,l[1])),z[2]=Math.min(y,Math.max(_,l[2])),z}function T(l,_,y){const g=y??new o(3);return g[0]=l[0]+_[0],g[1]=l[1]+_[1],g[2]=l[2]+_[2],g}function D(l,_,y,g){const z=g??new o(3);return z[0]=l[0]+_[0]*y,z[1]=l[1]+_[1]*y,z[2]=l[2]+_[2]*y,z}function U(l,_){const y=l[0],g=l[1],z=l[2],R=_[0],N=_[1],oe=_[2],se=Math.sqrt(y*y+g*g+z*z),te=Math.sqrt(R*R+N*N+oe*oe),le=se*te,we=le&&de(l,_)/le;return Math.acos(we)}function G(l,_,y){const g=y??new o(3);return g[0]=l[0]-_[0],g[1]=l[1]-_[1],g[2]=l[2]-_[2],g}const Y=G;function V(l,_){return Math.abs(l[0]-_[0])<Ae&&Math.abs(l[1]-_[1])<Ae&&Math.abs(l[2]-_[2])<Ae}function W(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function K(l,_,y,g){const z=g??new o(3);return z[0]=l[0]+y*(_[0]-l[0]),z[1]=l[1]+y*(_[1]-l[1]),z[2]=l[2]+y*(_[2]-l[2]),z}function $(l,_,y,g){const z=g??new o(3);return z[0]=l[0]+y[0]*(_[0]-l[0]),z[1]=l[1]+y[1]*(_[1]-l[1]),z[2]=l[2]+y[2]*(_[2]-l[2]),z}function ce(l,_,y){const g=y??new o(3);return g[0]=Math.max(l[0],_[0]),g[1]=Math.max(l[1],_[1]),g[2]=Math.max(l[2],_[2]),g}function H(l,_,y){const g=y??new o(3);return g[0]=Math.min(l[0],_[0]),g[1]=Math.min(l[1],_[1]),g[2]=Math.min(l[2],_[2]),g}function Z(l,_,y){const g=y??new o(3);return g[0]=l[0]*_,g[1]=l[1]*_,g[2]=l[2]*_,g}const q=Z;function ae(l,_,y){const g=y??new o(3);return g[0]=l[0]/_,g[1]=l[1]/_,g[2]=l[2]/_,g}function ne(l,_){const y=_??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const pe=ne;function ie(l,_,y){const g=y??new o(3),z=l[2]*_[0]-l[0]*_[2],R=l[0]*_[1]-l[1]*_[0];return g[0]=l[1]*_[2]-l[2]*_[1],g[1]=z,g[2]=R,g}function de(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function Ce(l){const _=l[0],y=l[1],g=l[2];return Math.sqrt(_*_+y*y+g*g)}const Ue=Ce;function Le(l){const _=l[0],y=l[1],g=l[2];return _*_+y*y+g*g}const Ge=Le;function Be(l,_){const y=l[0]-_[0],g=l[1]-_[1],z=l[2]-_[2];return Math.sqrt(y*y+g*g+z*z)}const be=Be;function ye(l,_){const y=l[0]-_[0],g=l[1]-_[1],z=l[2]-_[2];return y*y+g*g+z*z}const Q=ye;function ee(l,_){const y=_??new o(3),g=l[0],z=l[1],R=l[2],N=Math.sqrt(g*g+z*z+R*R);return N>1e-5?(y[0]=g/N,y[1]=z/N,y[2]=R/N):(y[0]=0,y[1]=0,y[2]=0),y}function re(l,_){const y=_??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function me(l,_){const y=_??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const ze=me;function Se(l,_,y){const g=y??new o(3);return g[0]=l[0]*_[0],g[1]=l[1]*_[1],g[2]=l[2]*_[2],g}const Te=Se;function X(l,_,y){const g=y??new o(3);return g[0]=l[0]/_[0],g[1]=l[1]/_[1],g[2]=l[2]/_[2],g}const he=X;function Ve(l=1,_){const y=_??new o(3),g=Math.random()*2*Math.PI,z=Math.random()*2-1,R=Math.sqrt(1-z*z)*l;return y[0]=Math.cos(g)*R,y[1]=Math.sin(g)*R,y[2]=z*l,y}function B(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function L(l,_,y){const g=y??new o(3),z=l[0],R=l[1],N=l[2],oe=_[3]*z+_[7]*R+_[11]*N+_[15]||1;return g[0]=(_[0]*z+_[4]*R+_[8]*N+_[12])/oe,g[1]=(_[1]*z+_[5]*R+_[9]*N+_[13])/oe,g[2]=(_[2]*z+_[6]*R+_[10]*N+_[14])/oe,g}function v(l,_,y){const g=y??new o(3),z=l[0],R=l[1],N=l[2];return g[0]=z*_[0*4+0]+R*_[1*4+0]+N*_[2*4+0],g[1]=z*_[0*4+1]+R*_[1*4+1]+N*_[2*4+1],g[2]=z*_[0*4+2]+R*_[1*4+2]+N*_[2*4+2],g}function i(l,_,y){const g=y??new o(3),z=l[0],R=l[1],N=l[2];return g[0]=z*_[0]+R*_[4]+N*_[8],g[1]=z*_[1]+R*_[5]+N*_[9],g[2]=z*_[2]+R*_[6]+N*_[10],g}function f(l,_,y){const g=y??new o(3),z=_[0],R=_[1],N=_[2],oe=_[3]*2,se=l[0],te=l[1],le=l[2],we=R*le-N*te,_e=N*se-z*le,ve=z*te-R*se;return g[0]=se+we*oe+(R*ve-N*_e)*2,g[1]=te+_e*oe+(N*we-z*ve)*2,g[2]=le+ve*oe+(z*_e-R*we)*2,g}function d(l,_){const y=_??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function b(l,_,y){const g=y??new o(3),z=_*4;return g[0]=l[z+0],g[1]=l[z+1],g[2]=l[z+2],g}function P(l,_){const y=_??new o(3),g=l[0],z=l[1],R=l[2],N=l[4],oe=l[5],se=l[6],te=l[8],le=l[9],we=l[10];return y[0]=Math.sqrt(g*g+z*z+R*R),y[1]=Math.sqrt(N*N+oe*oe+se*se),y[2]=Math.sqrt(te*te+le*le+we*we),y}function E(l,_,y,g){const z=g??new o(3),R=[],N=[];return R[0]=l[0]-_[0],R[1]=l[1]-_[1],R[2]=l[2]-_[2],N[0]=R[0],N[1]=R[1]*Math.cos(y)-R[2]*Math.sin(y),N[2]=R[1]*Math.sin(y)+R[2]*Math.cos(y),z[0]=N[0]+_[0],z[1]=N[1]+_[1],z[2]=N[2]+_[2],z}function x(l,_,y,g){const z=g??new o(3),R=[],N=[];return R[0]=l[0]-_[0],R[1]=l[1]-_[1],R[2]=l[2]-_[2],N[0]=R[2]*Math.sin(y)+R[0]*Math.cos(y),N[1]=R[1],N[2]=R[2]*Math.cos(y)-R[0]*Math.sin(y),z[0]=N[0]+_[0],z[1]=N[1]+_[1],z[2]=N[2]+_[2],z}function r(l,_,y,g){const z=g??new o(3),R=[],N=[];return R[0]=l[0]-_[0],R[1]=l[1]-_[1],R[2]=l[2]-_[2],N[0]=R[0]*Math.cos(y)-R[1]*Math.sin(y),N[1]=R[0]*Math.sin(y)+R[1]*Math.cos(y),N[2]=R[2],z[0]=N[0]+_[0],z[1]=N[1]+_[1],z[2]=N[2]+_[2],z}function m(l,_,y){const g=y??new o(3);return ee(l,g),Z(g,_,g)}function u(l,_,y){const g=y??new o(3);return Ce(l)>_?m(l,_,g):me(l,g)}function p(l,_,y){const g=y??new o(3);return K(l,_,.5,g)}return{create:a,fromValues:h,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:D,angle:U,subtract:G,sub:Y,equalsApproximately:V,equals:W,lerp:K,lerpV:$,max:ce,min:H,mulScalar:Z,scale:q,divScalar:ae,inverse:ne,invert:pe,cross:ie,dot:de,length:Ce,len:Ue,lengthSq:Le,lenSq:Ge,distance:Be,dist:be,distanceSq:ye,distSq:Q,normalize:ee,negate:re,copy:me,clone:ze,multiply:Se,mul:Te,divide:X,div:he,random:Ve,zero:B,transformMat4:L,transformMat4Upper3x3:v,transformMat3:i,transformQuat:f,getTranslation:d,getAxis:b,getScaling:P,rotateX:E,rotateY:x,rotateZ:r,setLength:m,truncate:u,midpoint:p}}const $r=new Map;function ss(o){let a=$r.get(o);return a||(a=Sl(o),$r.set(o,a)),a}function Cl(o){const a=oi(o),h=ss(o);function S(i,f,d,b,P,E,x,r,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,f!==void 0&&(u[1]=f,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,P!==void 0&&(u[5]=P,E!==void 0&&(u[6]=E,x!==void 0&&(u[8]=x,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function w(i,f,d,b,P,E,x,r,m,u){const p=u??new o(12);return p[0]=i,p[1]=f,p[2]=d,p[3]=0,p[4]=b,p[5]=P,p[6]=E,p[7]=0,p[8]=x,p[9]=r,p[10]=m,p[11]=0,p}function k(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function M(i,f){const d=f??new o(12),b=i[0],P=i[1],E=i[2],x=i[3],r=b+b,m=P+P,u=E+E,p=b*r,l=P*r,_=P*m,y=E*r,g=E*m,z=E*u,R=x*r,N=x*m,oe=x*u;return d[0]=1-_-z,d[1]=l+oe,d[2]=y-N,d[3]=0,d[4]=l-oe,d[5]=1-p-z,d[6]=g+R,d[7]=0,d[8]=y+N,d[9]=g-R,d[10]=1-p-_,d[11]=0,d}function F(i,f){const d=f??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function T(i,f,d){const b=d??new o(12);return b[0]=i[0]*f,b[1]=i[1]*f,b[2]=i[2]*f,b[4]=i[4]*f,b[5]=i[5]*f,b[6]=i[6]*f,b[8]=i[8]*f,b[9]=i[9]*f,b[10]=i[10]*f,b}const D=T;function U(i,f,d){const b=d??new o(12);return b[0]=i[0]+f[0],b[1]=i[1]+f[1],b[2]=i[2]+f[2],b[4]=i[4]+f[4],b[5]=i[5]+f[5],b[6]=i[6]+f[6],b[8]=i[8]+f[8],b[9]=i[9]+f[9],b[10]=i[10]+f[10],b}function G(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const Y=G;function V(i,f){return Math.abs(i[0]-f[0])<Ae&&Math.abs(i[1]-f[1])<Ae&&Math.abs(i[2]-f[2])<Ae&&Math.abs(i[4]-f[4])<Ae&&Math.abs(i[5]-f[5])<Ae&&Math.abs(i[6]-f[6])<Ae&&Math.abs(i[8]-f[8])<Ae&&Math.abs(i[9]-f[9])<Ae&&Math.abs(i[10]-f[10])<Ae}function W(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function K(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function $(i,f){const d=f??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const b=i[0*4+0],P=i[0*4+1],E=i[0*4+2],x=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],l=i[2*4+2];return d[0]=b,d[1]=x,d[2]=u,d[4]=P,d[5]=r,d[6]=p,d[8]=E,d[9]=m,d[10]=l,d}function ce(i,f){const d=f??new o(12),b=i[0*4+0],P=i[0*4+1],E=i[0*4+2],x=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],l=i[2*4+2],_=l*r-m*p,y=-l*x+m*u,g=p*x-r*u,z=1/(b*_+P*y+E*g);return d[0]=_*z,d[1]=(-l*P+E*p)*z,d[2]=(m*P-E*r)*z,d[4]=y*z,d[5]=(l*b-E*u)*z,d[6]=(-m*b+E*x)*z,d[8]=g*z,d[9]=(-p*b+P*u)*z,d[10]=(r*b-P*x)*z,d}function H(i){const f=i[0],d=i[0*4+1],b=i[0*4+2],P=i[1*4+0],E=i[1*4+1],x=i[1*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2];return f*(E*u-m*x)-P*(d*u-m*b)+r*(d*x-E*b)}const Z=ce;function q(i,f,d){const b=d??new o(12),P=i[0],E=i[1],x=i[2],r=i[4+0],m=i[4+1],u=i[4+2],p=i[8+0],l=i[8+1],_=i[8+2],y=f[0],g=f[1],z=f[2],R=f[4+0],N=f[4+1],oe=f[4+2],se=f[8+0],te=f[8+1],le=f[8+2];return b[0]=P*y+r*g+p*z,b[1]=E*y+m*g+l*z,b[2]=x*y+u*g+_*z,b[4]=P*R+r*N+p*oe,b[5]=E*R+m*N+l*oe,b[6]=x*R+u*N+_*oe,b[8]=P*se+r*te+p*le,b[9]=E*se+m*te+l*le,b[10]=x*se+u*te+_*le,b}const ae=q;function ne(i,f,d){const b=d??K();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function pe(i,f){const d=f??a.create();return d[0]=i[8],d[1]=i[9],d}function ie(i,f,d){const b=d??a.create(),P=f*4;return b[0]=i[P+0],b[1]=i[P+1],b}function de(i,f,d,b){const P=b===i?i:G(i,b),E=d*4;return P[E+0]=f[0],P[E+1]=f[1],P}function Ce(i,f){const d=f??a.create(),b=i[0],P=i[1],E=i[4],x=i[5];return d[0]=Math.sqrt(b*b+P*P),d[1]=Math.sqrt(E*E+x*x),d}function Ue(i,f){const d=f??h.create(),b=i[0],P=i[1],E=i[2],x=i[4],r=i[5],m=i[6],u=i[8],p=i[9],l=i[10];return d[0]=Math.sqrt(b*b+P*P+E*E),d[1]=Math.sqrt(x*x+r*r+m*m),d[2]=Math.sqrt(u*u+p*p+l*l),d}function Le(i,f){const d=f??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Ge(i,f,d){const b=d??new o(12),P=f[0],E=f[1],x=i[0],r=i[1],m=i[2],u=i[1*4+0],p=i[1*4+1],l=i[1*4+2],_=i[2*4+0],y=i[2*4+1],g=i[2*4+2];return i!==b&&(b[0]=x,b[1]=r,b[2]=m,b[4]=u,b[5]=p,b[6]=l),b[8]=x*P+u*E+_,b[9]=r*P+p*E+y,b[10]=m*P+l*E+g,b}function Be(i,f){const d=f??new o(12),b=Math.cos(i),P=Math.sin(i);return d[0]=b,d[1]=P,d[2]=0,d[4]=-P,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function be(i,f,d){const b=d??new o(12),P=i[0*4+0],E=i[0*4+1],x=i[0*4+2],r=i[1*4+0],m=i[1*4+1],u=i[1*4+2],p=Math.cos(f),l=Math.sin(f);return b[0]=p*P+l*r,b[1]=p*E+l*m,b[2]=p*x+l*u,b[4]=p*r-l*P,b[5]=p*m-l*E,b[6]=p*u-l*x,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ye(i,f){const d=f??new o(12),b=Math.cos(i),P=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=P,d[8]=0,d[9]=-P,d[10]=b,d}function Q(i,f,d){const b=d??new o(12),P=i[4],E=i[5],x=i[6],r=i[8],m=i[9],u=i[10],p=Math.cos(f),l=Math.sin(f);return b[4]=p*P+l*r,b[5]=p*E+l*m,b[6]=p*x+l*u,b[8]=p*r-l*P,b[9]=p*m-l*E,b[10]=p*u-l*x,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function ee(i,f){const d=f??new o(12),b=Math.cos(i),P=Math.sin(i);return d[0]=b,d[1]=0,d[2]=-P,d[4]=0,d[5]=1,d[6]=0,d[8]=P,d[9]=0,d[10]=b,d}function re(i,f,d){const b=d??new o(12),P=i[0*4+0],E=i[0*4+1],x=i[0*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2],p=Math.cos(f),l=Math.sin(f);return b[0]=p*P-l*r,b[1]=p*E-l*m,b[2]=p*x-l*u,b[8]=p*r+l*P,b[9]=p*m+l*E,b[10]=p*u+l*x,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const me=Be,ze=be;function Se(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Te(i,f,d){const b=d??new o(12),P=f[0],E=f[1];return b[0]=P*i[0*4+0],b[1]=P*i[0*4+1],b[2]=P*i[0*4+2],b[4]=E*i[1*4+0],b[5]=E*i[1*4+1],b[6]=E*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function X(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function he(i,f,d){const b=d??new o(12),P=f[0],E=f[1],x=f[2];return b[0]=P*i[0*4+0],b[1]=P*i[0*4+1],b[2]=P*i[0*4+2],b[4]=E*i[1*4+0],b[5]=E*i[1*4+1],b[6]=E*i[1*4+2],b[8]=x*i[2*4+0],b[9]=x*i[2*4+1],b[10]=x*i[2*4+2],b}function Ve(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function L(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function v(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],b[8]=f*i[2*4+0],b[9]=f*i[2*4+1],b[10]=f*i[2*4+2],b}return{add:U,clone:Y,copy:G,create:S,determinant:H,equals:W,equalsApproximately:V,fromMat4:k,fromQuat:M,get3DScaling:Ue,getAxis:ie,getScaling:Ce,getTranslation:pe,identity:K,inverse:ce,invert:Z,mul:ae,mulScalar:D,multiply:q,multiplyScalar:T,negate:F,rotate:be,rotateX:Q,rotateY:re,rotateZ:ze,rotation:Be,rotationX:ye,rotationY:ee,rotationZ:me,scale:Te,scale3D:he,scaling:Se,scaling3D:X,set:w,setAxis:de,setTranslation:ne,translate:Ge,translation:Le,transpose:$,uniformScale:B,uniformScale3D:v,uniformScaling:Ve,uniformScaling3D:L}}const qr=new Map;function El(o){let a=qr.get(o);return a||(a=Cl(o),qr.set(o,a)),a}function kl(o){const a=ss(o);function h(r,m,u,p,l,_,y,g,z,R,N,oe,se,te,le,we){const _e=new o(16);return r!==void 0&&(_e[0]=r,m!==void 0&&(_e[1]=m,u!==void 0&&(_e[2]=u,p!==void 0&&(_e[3]=p,l!==void 0&&(_e[4]=l,_!==void 0&&(_e[5]=_,y!==void 0&&(_e[6]=y,g!==void 0&&(_e[7]=g,z!==void 0&&(_e[8]=z,R!==void 0&&(_e[9]=R,N!==void 0&&(_e[10]=N,oe!==void 0&&(_e[11]=oe,se!==void 0&&(_e[12]=se,te!==void 0&&(_e[13]=te,le!==void 0&&(_e[14]=le,we!==void 0&&(_e[15]=we)))))))))))))))),_e}function S(r,m,u,p,l,_,y,g,z,R,N,oe,se,te,le,we,_e){const ve=_e??new o(16);return ve[0]=r,ve[1]=m,ve[2]=u,ve[3]=p,ve[4]=l,ve[5]=_,ve[6]=y,ve[7]=g,ve[8]=z,ve[9]=R,ve[10]=N,ve[11]=oe,ve[12]=se,ve[13]=te,ve[14]=le,ve[15]=we,ve}function w(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,m){const u=m??new o(16),p=r[0],l=r[1],_=r[2],y=r[3],g=p+p,z=l+l,R=_+_,N=p*g,oe=l*g,se=l*z,te=_*g,le=_*z,we=_*R,_e=y*g,ve=y*z,ke=y*R;return u[0]=1-se-we,u[1]=oe+ke,u[2]=te-ve,u[3]=0,u[4]=oe-ke,u[5]=1-N-we,u[6]=le+_e,u[7]=0,u[8]=te+ve,u[9]=le-_e,u[10]=1-N-se,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(r,m){const u=m??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function F(r,m,u){const p=u??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function T(r,m,u){const p=u??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const D=T;function U(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const G=U;function Y(r,m){return Math.abs(r[0]-m[0])<Ae&&Math.abs(r[1]-m[1])<Ae&&Math.abs(r[2]-m[2])<Ae&&Math.abs(r[3]-m[3])<Ae&&Math.abs(r[4]-m[4])<Ae&&Math.abs(r[5]-m[5])<Ae&&Math.abs(r[6]-m[6])<Ae&&Math.abs(r[7]-m[7])<Ae&&Math.abs(r[8]-m[8])<Ae&&Math.abs(r[9]-m[9])<Ae&&Math.abs(r[10]-m[10])<Ae&&Math.abs(r[11]-m[11])<Ae&&Math.abs(r[12]-m[12])<Ae&&Math.abs(r[13]-m[13])<Ae&&Math.abs(r[14]-m[14])<Ae&&Math.abs(r[15]-m[15])<Ae}function V(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function W(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function K(r,m){const u=m??new o(16);if(u===r){let Me;return Me=r[1],r[1]=r[4],r[4]=Me,Me=r[2],r[2]=r[8],r[8]=Me,Me=r[3],r[3]=r[12],r[12]=Me,Me=r[6],r[6]=r[9],r[9]=Me,Me=r[7],r[7]=r[13],r[13]=Me,Me=r[11],r[11]=r[14],r[14]=Me,u}const p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],z=r[1*4+1],R=r[1*4+2],N=r[1*4+3],oe=r[2*4+0],se=r[2*4+1],te=r[2*4+2],le=r[2*4+3],we=r[3*4+0],_e=r[3*4+1],ve=r[3*4+2],ke=r[3*4+3];return u[0]=p,u[1]=g,u[2]=oe,u[3]=we,u[4]=l,u[5]=z,u[6]=se,u[7]=_e,u[8]=_,u[9]=R,u[10]=te,u[11]=ve,u[12]=y,u[13]=N,u[14]=le,u[15]=ke,u}function $(r,m){const u=m??new o(16),p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],z=r[1*4+1],R=r[1*4+2],N=r[1*4+3],oe=r[2*4+0],se=r[2*4+1],te=r[2*4+2],le=r[2*4+3],we=r[3*4+0],_e=r[3*4+1],ve=r[3*4+2],ke=r[3*4+3],Me=te*ke,We=ve*le,je=R*ke,He=ve*N,Xe=R*le,Qe=te*N,et=_*ke,tt=ve*y,nt=_*le,st=te*y,Je=_*N,Ke=R*y,$e=oe*_e,rt=we*se,qe=g*_e,ct=we*z,it=g*se,St=oe*z,vt=p*_e,bt=we*l,yt=p*se,Ct=oe*l,Et=p*z,kt=g*l,Rt=Me*z+He*se+Xe*_e-(We*z+je*se+Qe*_e),Mt=We*l+et*se+st*_e-(Me*l+tt*se+nt*_e),Bt=je*l+tt*z+Je*_e-(He*l+et*z+Ke*_e),Tt=Qe*l+nt*z+Ke*se-(Xe*l+st*z+Je*se),j=1/(p*Rt+g*Mt+oe*Bt+we*Tt);return u[0]=j*Rt,u[1]=j*Mt,u[2]=j*Bt,u[3]=j*Tt,u[4]=j*(We*g+je*oe+Qe*we-(Me*g+He*oe+Xe*we)),u[5]=j*(Me*p+tt*oe+nt*we-(We*p+et*oe+st*we)),u[6]=j*(He*p+et*g+Ke*we-(je*p+tt*g+Je*we)),u[7]=j*(Xe*p+st*g+Je*oe-(Qe*p+nt*g+Ke*oe)),u[8]=j*($e*N+ct*le+it*ke-(rt*N+qe*le+St*ke)),u[9]=j*(rt*y+vt*le+Ct*ke-($e*y+bt*le+yt*ke)),u[10]=j*(qe*y+bt*N+Et*ke-(ct*y+vt*N+kt*ke)),u[11]=j*(St*y+yt*N+kt*le-(it*y+Ct*N+Et*le)),u[12]=j*(qe*te+St*ve+rt*R-(it*ve+$e*R+ct*te)),u[13]=j*(yt*ve+$e*_+bt*te-(vt*te+Ct*ve+rt*_)),u[14]=j*(vt*R+kt*ve+ct*_-(Et*ve+qe*_+bt*R)),u[15]=j*(Et*te+it*_+Ct*R-(yt*R+kt*te+St*_)),u}function ce(r){const m=r[0],u=r[0*4+1],p=r[0*4+2],l=r[0*4+3],_=r[1*4+0],y=r[1*4+1],g=r[1*4+2],z=r[1*4+3],R=r[2*4+0],N=r[2*4+1],oe=r[2*4+2],se=r[2*4+3],te=r[3*4+0],le=r[3*4+1],we=r[3*4+2],_e=r[3*4+3],ve=oe*_e,ke=we*se,Me=g*_e,We=we*z,je=g*se,He=oe*z,Xe=p*_e,Qe=we*l,et=p*se,tt=oe*l,nt=p*z,st=g*l,Je=ve*y+We*N+je*le-(ke*y+Me*N+He*le),Ke=ke*u+Xe*N+tt*le-(ve*u+Qe*N+et*le),$e=Me*u+Qe*y+nt*le-(We*u+Xe*y+st*le),rt=He*u+et*y+st*N-(je*u+tt*y+nt*N);return m*Je+_*Ke+R*$e+te*rt}const H=$;function Z(r,m,u){const p=u??new o(16),l=r[0],_=r[1],y=r[2],g=r[3],z=r[4+0],R=r[4+1],N=r[4+2],oe=r[4+3],se=r[8+0],te=r[8+1],le=r[8+2],we=r[8+3],_e=r[12+0],ve=r[12+1],ke=r[12+2],Me=r[12+3],We=m[0],je=m[1],He=m[2],Xe=m[3],Qe=m[4+0],et=m[4+1],tt=m[4+2],nt=m[4+3],st=m[8+0],Je=m[8+1],Ke=m[8+2],$e=m[8+3],rt=m[12+0],qe=m[12+1],ct=m[12+2],it=m[12+3];return p[0]=l*We+z*je+se*He+_e*Xe,p[1]=_*We+R*je+te*He+ve*Xe,p[2]=y*We+N*je+le*He+ke*Xe,p[3]=g*We+oe*je+we*He+Me*Xe,p[4]=l*Qe+z*et+se*tt+_e*nt,p[5]=_*Qe+R*et+te*tt+ve*nt,p[6]=y*Qe+N*et+le*tt+ke*nt,p[7]=g*Qe+oe*et+we*tt+Me*nt,p[8]=l*st+z*Je+se*Ke+_e*$e,p[9]=_*st+R*Je+te*Ke+ve*$e,p[10]=y*st+N*Je+le*Ke+ke*$e,p[11]=g*st+oe*Je+we*Ke+Me*$e,p[12]=l*rt+z*qe+se*ct+_e*it,p[13]=_*rt+R*qe+te*ct+ve*it,p[14]=y*rt+N*qe+le*ct+ke*it,p[15]=g*rt+oe*qe+we*ct+Me*it,p}const q=Z;function ae(r,m,u){const p=u??W();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function ne(r,m){const u=m??a.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function pe(r,m,u){const p=u??a.create(),l=m*4;return p[0]=r[l+0],p[1]=r[l+1],p[2]=r[l+2],p}function ie(r,m,u,p){const l=p===r?p:U(r,p),_=u*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function de(r,m){const u=m??a.create(),p=r[0],l=r[1],_=r[2],y=r[4],g=r[5],z=r[6],R=r[8],N=r[9],oe=r[10];return u[0]=Math.sqrt(p*p+l*l+_*_),u[1]=Math.sqrt(y*y+g*g+z*z),u[2]=Math.sqrt(R*R+N*N+oe*oe),u}function Ce(r,m,u,p,l){const _=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const g=1/(u-p);_[10]=p*g,_[14]=p*u*g}else _[10]=-1,_[14]=-u;return _}function Ue(r,m,u,p=1/0,l){const _=l??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const g=1/(p-u);_[10]=u*g,_[14]=p*u*g}return _}function Le(r,m,u,p,l,_,y){const g=y??new o(16);return g[0]=2/(m-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(p-u),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(l-_),g[11]=0,g[12]=(m+r)/(r-m),g[13]=(p+u)/(u-p),g[14]=l/(l-_),g[15]=1,g}function Ge(r,m,u,p,l,_,y){const g=y??new o(16),z=m-r,R=p-u,N=l-_;return g[0]=2*l/z,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/R,g[6]=0,g[7]=0,g[8]=(r+m)/z,g[9]=(p+u)/R,g[10]=_/N,g[11]=-1,g[12]=0,g[13]=0,g[14]=l*_/N,g[15]=0,g}function Be(r,m,u,p,l,_=1/0,y){const g=y??new o(16),z=m-r,R=p-u;if(g[0]=2*l/z,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/R,g[6]=0,g[7]=0,g[8]=(r+m)/z,g[9]=(p+u)/R,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,_===1/0)g[10]=0,g[14]=l;else{const N=1/(_-l);g[10]=l*N,g[14]=_*l*N}return g}const be=a.create(),ye=a.create(),Q=a.create();function ee(r,m,u,p){const l=p??new o(16);return a.normalize(a.subtract(m,r,Q),Q),a.normalize(a.cross(u,Q,be),be),a.normalize(a.cross(Q,be,ye),ye),l[0]=be[0],l[1]=be[1],l[2]=be[2],l[3]=0,l[4]=ye[0],l[5]=ye[1],l[6]=ye[2],l[7]=0,l[8]=Q[0],l[9]=Q[1],l[10]=Q[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function re(r,m,u,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,Q),Q),a.normalize(a.cross(u,Q,be),be),a.normalize(a.cross(Q,be,ye),ye),l[0]=be[0],l[1]=be[1],l[2]=be[2],l[3]=0,l[4]=ye[0],l[5]=ye[1],l[6]=ye[2],l[7]=0,l[8]=Q[0],l[9]=Q[1],l[10]=Q[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function me(r,m,u,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,Q),Q),a.normalize(a.cross(u,Q,be),be),a.normalize(a.cross(Q,be,ye),ye),l[0]=be[0],l[1]=ye[0],l[2]=Q[0],l[3]=0,l[4]=be[1],l[5]=ye[1],l[6]=Q[1],l[7]=0,l[8]=be[2],l[9]=ye[2],l[10]=Q[2],l[11]=0,l[12]=-(be[0]*r[0]+be[1]*r[1]+be[2]*r[2]),l[13]=-(ye[0]*r[0]+ye[1]*r[1]+ye[2]*r[2]),l[14]=-(Q[0]*r[0]+Q[1]*r[1]+Q[2]*r[2]),l[15]=1,l}function ze(r,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function Se(r,m,u){const p=u??new o(16),l=m[0],_=m[1],y=m[2],g=r[0],z=r[1],R=r[2],N=r[3],oe=r[1*4+0],se=r[1*4+1],te=r[1*4+2],le=r[1*4+3],we=r[2*4+0],_e=r[2*4+1],ve=r[2*4+2],ke=r[2*4+3],Me=r[3*4+0],We=r[3*4+1],je=r[3*4+2],He=r[3*4+3];return r!==p&&(p[0]=g,p[1]=z,p[2]=R,p[3]=N,p[4]=oe,p[5]=se,p[6]=te,p[7]=le,p[8]=we,p[9]=_e,p[10]=ve,p[11]=ke),p[12]=g*l+oe*_+we*y+Me,p[13]=z*l+se*_+_e*y+We,p[14]=R*l+te*_+ve*y+je,p[15]=N*l+le*_+ke*y+He,p}function Te(r,m){const u=m??new o(16),p=Math.cos(r),l=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=l,u[7]=0,u[8]=0,u[9]=-l,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function X(r,m,u){const p=u??new o(16),l=r[4],_=r[5],y=r[6],g=r[7],z=r[8],R=r[9],N=r[10],oe=r[11],se=Math.cos(m),te=Math.sin(m);return p[4]=se*l+te*z,p[5]=se*_+te*R,p[6]=se*y+te*N,p[7]=se*g+te*oe,p[8]=se*z-te*l,p[9]=se*R-te*_,p[10]=se*N-te*y,p[11]=se*oe-te*g,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function he(r,m){const u=m??new o(16),p=Math.cos(r),l=Math.sin(r);return u[0]=p,u[1]=0,u[2]=-l,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=l,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Ve(r,m,u){const p=u??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],z=r[2*4+0],R=r[2*4+1],N=r[2*4+2],oe=r[2*4+3],se=Math.cos(m),te=Math.sin(m);return p[0]=se*l-te*z,p[1]=se*_-te*R,p[2]=se*y-te*N,p[3]=se*g-te*oe,p[8]=se*z+te*l,p[9]=se*R+te*_,p[10]=se*N+te*y,p[11]=se*oe+te*g,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const u=m??new o(16),p=Math.cos(r),l=Math.sin(r);return u[0]=p,u[1]=l,u[2]=0,u[3]=0,u[4]=-l,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function L(r,m,u){const p=u??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],z=r[1*4+0],R=r[1*4+1],N=r[1*4+2],oe=r[1*4+3],se=Math.cos(m),te=Math.sin(m);return p[0]=se*l+te*z,p[1]=se*_+te*R,p[2]=se*y+te*N,p[3]=se*g+te*oe,p[4]=se*z-te*l,p[5]=se*R-te*_,p[6]=se*N-te*y,p[7]=se*oe-te*g,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function v(r,m,u){const p=u??new o(16);let l=r[0],_=r[1],y=r[2];const g=Math.sqrt(l*l+_*_+y*y);l/=g,_/=g,y/=g;const z=l*l,R=_*_,N=y*y,oe=Math.cos(m),se=Math.sin(m),te=1-oe;return p[0]=z+(1-z)*oe,p[1]=l*_*te+y*se,p[2]=l*y*te-_*se,p[3]=0,p[4]=l*_*te-y*se,p[5]=R+(1-R)*oe,p[6]=_*y*te+l*se,p[7]=0,p[8]=l*y*te+_*se,p[9]=_*y*te-l*se,p[10]=N+(1-N)*oe,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=v;function f(r,m,u,p){const l=p??new o(16);let _=m[0],y=m[1],g=m[2];const z=Math.sqrt(_*_+y*y+g*g);_/=z,y/=z,g/=z;const R=_*_,N=y*y,oe=g*g,se=Math.cos(u),te=Math.sin(u),le=1-se,we=R+(1-R)*se,_e=_*y*le+g*te,ve=_*g*le-y*te,ke=_*y*le-g*te,Me=N+(1-N)*se,We=y*g*le+_*te,je=_*g*le+y*te,He=y*g*le-_*te,Xe=oe+(1-oe)*se,Qe=r[0],et=r[1],tt=r[2],nt=r[3],st=r[4],Je=r[5],Ke=r[6],$e=r[7],rt=r[8],qe=r[9],ct=r[10],it=r[11];return l[0]=we*Qe+_e*st+ve*rt,l[1]=we*et+_e*Je+ve*qe,l[2]=we*tt+_e*Ke+ve*ct,l[3]=we*nt+_e*$e+ve*it,l[4]=ke*Qe+Me*st+We*rt,l[5]=ke*et+Me*Je+We*qe,l[6]=ke*tt+Me*Ke+We*ct,l[7]=ke*nt+Me*$e+We*it,l[8]=je*Qe+He*st+Xe*rt,l[9]=je*et+He*Je+Xe*qe,l[10]=je*tt+He*Ke+Xe*ct,l[11]=je*nt+He*$e+Xe*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const d=f;function b(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function P(r,m,u){const p=u??new o(16),l=m[0],_=m[1],y=m[2];return p[0]=l*r[0*4+0],p[1]=l*r[0*4+1],p[2]=l*r[0*4+2],p[3]=l*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=y*r[2*4+0],p[9]=y*r[2*4+1],p[10]=y*r[2*4+2],p[11]=y*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function E(r,m){const u=m??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function x(r,m,u){const p=u??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:F,aim:ee,axisRotate:f,axisRotation:v,cameraAim:re,clone:G,copy:U,create:h,determinant:ce,equals:V,equalsApproximately:Y,fromMat3:w,fromQuat:k,frustum:Ge,frustumReverseZ:Be,getAxis:pe,getScaling:de,getTranslation:ne,identity:W,inverse:$,invert:H,lookAt:me,mul:q,mulScalar:D,multiply:Z,multiplyScalar:T,negate:M,ortho:Le,perspective:Ce,perspectiveReverseZ:Ue,rotate:d,rotateX:X,rotateY:Ve,rotateZ:L,rotation:i,rotationX:Te,rotationY:he,rotationZ:B,scale:P,scaling:b,set:S,setAxis:ie,setTranslation:ae,translate:Se,translation:ze,transpose:K,uniformScale:x,uniformScaling:E}}const Wr=new Map;function Ml(o){let a=Wr.get(o);return a||(a=kl(o),Wr.set(o,a)),a}function Bl(o){const a=ss(o);function h(B,L,v,i){const f=new o(4);return B!==void 0&&(f[0]=B,L!==void 0&&(f[1]=L,v!==void 0&&(f[2]=v,i!==void 0&&(f[3]=i)))),f}const S=h;function w(B,L,v,i,f){const d=f??new o(4);return d[0]=B,d[1]=L,d[2]=v,d[3]=i,d}function k(B,L,v){const i=v??new o(4),f=L*.5,d=Math.sin(f);return i[0]=d*B[0],i[1]=d*B[1],i[2]=d*B[2],i[3]=Math.cos(f),i}function M(B,L){const v=L??a.create(3),i=Math.acos(B[3])*2,f=Math.sin(i*.5);return f>Ae?(v[0]=B[0]/f,v[1]=B[1]/f,v[2]=B[2]/f):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function F(B,L){const v=Ce(B,L);return Math.acos(2*v*v-1)}function T(B,L,v){const i=v??new o(4),f=B[0],d=B[1],b=B[2],P=B[3],E=L[0],x=L[1],r=L[2],m=L[3];return i[0]=f*m+P*E+d*r-b*x,i[1]=d*m+P*x+b*E-f*r,i[2]=b*m+P*r+f*x-d*E,i[3]=P*m-f*E-d*x-b*r,i}const D=T;function U(B,L,v){const i=v??new o(4),f=L*.5,d=B[0],b=B[1],P=B[2],E=B[3],x=Math.sin(f),r=Math.cos(f);return i[0]=d*r+E*x,i[1]=b*r+P*x,i[2]=P*r-b*x,i[3]=E*r-d*x,i}function G(B,L,v){const i=v??new o(4),f=L*.5,d=B[0],b=B[1],P=B[2],E=B[3],x=Math.sin(f),r=Math.cos(f);return i[0]=d*r-P*x,i[1]=b*r+E*x,i[2]=P*r+d*x,i[3]=E*r-b*x,i}function Y(B,L,v){const i=v??new o(4),f=L*.5,d=B[0],b=B[1],P=B[2],E=B[3],x=Math.sin(f),r=Math.cos(f);return i[0]=d*r+b*x,i[1]=b*r-d*x,i[2]=P*r+E*x,i[3]=E*r-P*x,i}function V(B,L,v,i){const f=i??new o(4),d=B[0],b=B[1],P=B[2],E=B[3];let x=L[0],r=L[1],m=L[2],u=L[3],p=d*x+b*r+P*m+E*u;p<0&&(p=-p,x=-x,r=-r,m=-m,u=-u);let l,_;if(1-p>Ae){const y=Math.acos(p),g=Math.sin(y);l=Math.sin((1-v)*y)/g,_=Math.sin(v*y)/g}else l=1-v,_=v;return f[0]=l*d+_*x,f[1]=l*b+_*r,f[2]=l*P+_*m,f[3]=l*E+_*u,f}function W(B,L){const v=L??new o(4),i=B[0],f=B[1],d=B[2],b=B[3],P=i*i+f*f+d*d+b*b,E=P?1/P:0;return v[0]=-i*E,v[1]=-f*E,v[2]=-d*E,v[3]=b*E,v}function K(B,L){const v=L??new o(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function $(B,L){const v=L??new o(4),i=B[0]+B[5]+B[10];if(i>0){const f=Math.sqrt(i+1);v[3]=.5*f;const d=.5/f;v[0]=(B[6]-B[9])*d,v[1]=(B[8]-B[2])*d,v[2]=(B[1]-B[4])*d}else{let f=0;B[5]>B[0]&&(f=1),B[10]>B[f*4+f]&&(f=2);const d=(f+1)%3,b=(f+2)%3,P=Math.sqrt(B[f*4+f]-B[d*4+d]-B[b*4+b]+1);v[f]=.5*P;const E=.5/P;v[3]=(B[d*4+b]-B[b*4+d])*E,v[d]=(B[d*4+f]+B[f*4+d])*E,v[b]=(B[b*4+f]+B[f*4+b])*E}return v}function ce(B,L,v,i,f){const d=f??new o(4),b=B*.5,P=L*.5,E=v*.5,x=Math.sin(b),r=Math.cos(b),m=Math.sin(P),u=Math.cos(P),p=Math.sin(E),l=Math.cos(E);switch(i){case"xyz":d[0]=x*u*l+r*m*p,d[1]=r*m*l-x*u*p,d[2]=r*u*p+x*m*l,d[3]=r*u*l-x*m*p;break;case"xzy":d[0]=x*u*l-r*m*p,d[1]=r*m*l-x*u*p,d[2]=r*u*p+x*m*l,d[3]=r*u*l+x*m*p;break;case"yxz":d[0]=x*u*l+r*m*p,d[1]=r*m*l-x*u*p,d[2]=r*u*p-x*m*l,d[3]=r*u*l+x*m*p;break;case"yzx":d[0]=x*u*l+r*m*p,d[1]=r*m*l+x*u*p,d[2]=r*u*p-x*m*l,d[3]=r*u*l-x*m*p;break;case"zxy":d[0]=x*u*l-r*m*p,d[1]=r*m*l+x*u*p,d[2]=r*u*p+x*m*l,d[3]=r*u*l-x*m*p;break;case"zyx":d[0]=x*u*l-r*m*p,d[1]=r*m*l+x*u*p,d[2]=r*u*p-x*m*l,d[3]=r*u*l+x*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function H(B,L){const v=L??new o(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const Z=H;function q(B,L,v){const i=v??new o(4);return i[0]=B[0]+L[0],i[1]=B[1]+L[1],i[2]=B[2]+L[2],i[3]=B[3]+L[3],i}function ae(B,L,v){const i=v??new o(4);return i[0]=B[0]-L[0],i[1]=B[1]-L[1],i[2]=B[2]-L[2],i[3]=B[3]-L[3],i}const ne=ae;function pe(B,L,v){const i=v??new o(4);return i[0]=B[0]*L,i[1]=B[1]*L,i[2]=B[2]*L,i[3]=B[3]*L,i}const ie=pe;function de(B,L,v){const i=v??new o(4);return i[0]=B[0]/L,i[1]=B[1]/L,i[2]=B[2]/L,i[3]=B[3]/L,i}function Ce(B,L){return B[0]*L[0]+B[1]*L[1]+B[2]*L[2]+B[3]*L[3]}function Ue(B,L,v,i){const f=i??new o(4);return f[0]=B[0]+v*(L[0]-B[0]),f[1]=B[1]+v*(L[1]-B[1]),f[2]=B[2]+v*(L[2]-B[2]),f[3]=B[3]+v*(L[3]-B[3]),f}function Le(B){const L=B[0],v=B[1],i=B[2],f=B[3];return Math.sqrt(L*L+v*v+i*i+f*f)}const Ge=Le;function Be(B){const L=B[0],v=B[1],i=B[2],f=B[3];return L*L+v*v+i*i+f*f}const be=Be;function ye(B,L){const v=L??new o(4),i=B[0],f=B[1],d=B[2],b=B[3],P=Math.sqrt(i*i+f*f+d*d+b*b);return P>1e-5?(v[0]=i/P,v[1]=f/P,v[2]=d/P,v[3]=b/P):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function Q(B,L){return Math.abs(B[0]-L[0])<Ae&&Math.abs(B[1]-L[1])<Ae&&Math.abs(B[2]-L[2])<Ae&&Math.abs(B[3]-L[3])<Ae}function ee(B,L){return B[0]===L[0]&&B[1]===L[1]&&B[2]===L[2]&&B[3]===L[3]}function re(B){const L=B??new o(4);return L[0]=0,L[1]=0,L[2]=0,L[3]=1,L}const me=a.create(),ze=a.create(),Se=a.create();function Te(B,L,v){const i=v??new o(4),f=a.dot(B,L);return f<-.999999?(a.cross(ze,B,me),a.len(me)<1e-6&&a.cross(Se,B,me),a.normalize(me,me),k(me,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(B,L,me),i[0]=me[0],i[1]=me[1],i[2]=me[2],i[3]=1+f,ye(i,i))}const X=new o(4),he=new o(4);function Ve(B,L,v,i,f,d){const b=d??new o(4);return V(B,i,f,X),V(L,v,f,he),V(X,he,2*f*(1-f),b),b}return{create:h,fromValues:S,set:w,fromAxisAngle:k,toAxisAngle:M,angle:F,multiply:T,mul:D,rotateX:U,rotateY:G,rotateZ:Y,slerp:V,inverse:W,conjugate:K,fromMat:$,fromEuler:ce,copy:H,clone:Z,add:q,subtract:ae,sub:ne,mulScalar:pe,scale:ie,divScalar:de,dot:Ce,lerp:Ue,length:Le,len:Ge,lengthSq:Be,lenSq:be,normalize:ye,equalsApproximately:Q,equals:ee,identity:re,rotationTo:Te,sqlerp:Ve}}const jr=new Map;function Tl(o){let a=jr.get(o);return a||(a=Bl(o),jr.set(o,a)),a}function Dl(o){function a(v,i,f,d){const b=new o(4);return v!==void 0&&(b[0]=v,i!==void 0&&(b[1]=i,f!==void 0&&(b[2]=f,d!==void 0&&(b[3]=d)))),b}const h=a;function S(v,i,f,d,b){const P=b??new o(4);return P[0]=v,P[1]=i,P[2]=f,P[3]=d,P}function w(v,i){const f=i??new o(4);return f[0]=Math.ceil(v[0]),f[1]=Math.ceil(v[1]),f[2]=Math.ceil(v[2]),f[3]=Math.ceil(v[3]),f}function k(v,i){const f=i??new o(4);return f[0]=Math.floor(v[0]),f[1]=Math.floor(v[1]),f[2]=Math.floor(v[2]),f[3]=Math.floor(v[3]),f}function M(v,i){const f=i??new o(4);return f[0]=Math.round(v[0]),f[1]=Math.round(v[1]),f[2]=Math.round(v[2]),f[3]=Math.round(v[3]),f}function F(v,i=0,f=1,d){const b=d??new o(4);return b[0]=Math.min(f,Math.max(i,v[0])),b[1]=Math.min(f,Math.max(i,v[1])),b[2]=Math.min(f,Math.max(i,v[2])),b[3]=Math.min(f,Math.max(i,v[3])),b}function T(v,i,f){const d=f??new o(4);return d[0]=v[0]+i[0],d[1]=v[1]+i[1],d[2]=v[2]+i[2],d[3]=v[3]+i[3],d}function D(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+i[0]*f,b[1]=v[1]+i[1]*f,b[2]=v[2]+i[2]*f,b[3]=v[3]+i[3]*f,b}function U(v,i,f){const d=f??new o(4);return d[0]=v[0]-i[0],d[1]=v[1]-i[1],d[2]=v[2]-i[2],d[3]=v[3]-i[3],d}const G=U;function Y(v,i){return Math.abs(v[0]-i[0])<Ae&&Math.abs(v[1]-i[1])<Ae&&Math.abs(v[2]-i[2])<Ae&&Math.abs(v[3]-i[3])<Ae}function V(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function W(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+f*(i[0]-v[0]),b[1]=v[1]+f*(i[1]-v[1]),b[2]=v[2]+f*(i[2]-v[2]),b[3]=v[3]+f*(i[3]-v[3]),b}function K(v,i,f,d){const b=d??new o(4);return b[0]=v[0]+f[0]*(i[0]-v[0]),b[1]=v[1]+f[1]*(i[1]-v[1]),b[2]=v[2]+f[2]*(i[2]-v[2]),b[3]=v[3]+f[3]*(i[3]-v[3]),b}function $(v,i,f){const d=f??new o(4);return d[0]=Math.max(v[0],i[0]),d[1]=Math.max(v[1],i[1]),d[2]=Math.max(v[2],i[2]),d[3]=Math.max(v[3],i[3]),d}function ce(v,i,f){const d=f??new o(4);return d[0]=Math.min(v[0],i[0]),d[1]=Math.min(v[1],i[1]),d[2]=Math.min(v[2],i[2]),d[3]=Math.min(v[3],i[3]),d}function H(v,i,f){const d=f??new o(4);return d[0]=v[0]*i,d[1]=v[1]*i,d[2]=v[2]*i,d[3]=v[3]*i,d}const Z=H;function q(v,i,f){const d=f??new o(4);return d[0]=v[0]/i,d[1]=v[1]/i,d[2]=v[2]/i,d[3]=v[3]/i,d}function ae(v,i){const f=i??new o(4);return f[0]=1/v[0],f[1]=1/v[1],f[2]=1/v[2],f[3]=1/v[3],f}const ne=ae;function pe(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function ie(v){const i=v[0],f=v[1],d=v[2],b=v[3];return Math.sqrt(i*i+f*f+d*d+b*b)}const de=ie;function Ce(v){const i=v[0],f=v[1],d=v[2],b=v[3];return i*i+f*f+d*d+b*b}const Ue=Ce;function Le(v,i){const f=v[0]-i[0],d=v[1]-i[1],b=v[2]-i[2],P=v[3]-i[3];return Math.sqrt(f*f+d*d+b*b+P*P)}const Ge=Le;function Be(v,i){const f=v[0]-i[0],d=v[1]-i[1],b=v[2]-i[2],P=v[3]-i[3];return f*f+d*d+b*b+P*P}const be=Be;function ye(v,i){const f=i??new o(4),d=v[0],b=v[1],P=v[2],E=v[3],x=Math.sqrt(d*d+b*b+P*P+E*E);return x>1e-5?(f[0]=d/x,f[1]=b/x,f[2]=P/x,f[3]=E/x):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function Q(v,i){const f=i??new o(4);return f[0]=-v[0],f[1]=-v[1],f[2]=-v[2],f[3]=-v[3],f}function ee(v,i){const f=i??new o(4);return f[0]=v[0],f[1]=v[1],f[2]=v[2],f[3]=v[3],f}const re=ee;function me(v,i,f){const d=f??new o(4);return d[0]=v[0]*i[0],d[1]=v[1]*i[1],d[2]=v[2]*i[2],d[3]=v[3]*i[3],d}const ze=me;function Se(v,i,f){const d=f??new o(4);return d[0]=v[0]/i[0],d[1]=v[1]/i[1],d[2]=v[2]/i[2],d[3]=v[3]/i[3],d}const Te=Se;function X(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function he(v,i,f){const d=f??new o(4),b=v[0],P=v[1],E=v[2],x=v[3];return d[0]=i[0]*b+i[4]*P+i[8]*E+i[12]*x,d[1]=i[1]*b+i[5]*P+i[9]*E+i[13]*x,d[2]=i[2]*b+i[6]*P+i[10]*E+i[14]*x,d[3]=i[3]*b+i[7]*P+i[11]*E+i[15]*x,d}function Ve(v,i,f){const d=f??new o(4);return ye(v,d),H(d,i,d)}function B(v,i,f){const d=f??new o(4);return ie(v)>i?Ve(v,i,d):ee(v,d)}function L(v,i,f){const d=f??new o(4);return W(v,i,.5,d)}return{create:a,fromValues:h,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:D,subtract:U,sub:G,equalsApproximately:Y,equals:V,lerp:W,lerpV:K,max:$,min:ce,mulScalar:H,scale:Z,divScalar:q,inverse:ae,invert:ne,dot:pe,length:ie,len:de,lengthSq:Ce,lenSq:Ue,distance:Le,dist:Ge,distanceSq:Be,distSq:be,normalize:ye,negate:Q,copy:ee,clone:re,multiply:me,mul:ze,divide:Se,div:Te,zero:X,transformMat4:he,setLength:Ve,truncate:B,midpoint:L}}const Hr=new Map;function Al(o){let a=Hr.get(o);return a||(a=Dl(o),Hr.set(o,a)),a}function Gs(o,a,h,S,w,k){return{mat3:El(o),mat4:Ml(a),quat:Tl(h),vec2:oi(S),vec3:ss(w),vec4:Al(k)}}const{mat3:xt,mat4:ut,quat:pt,vec2:Kr,vec3:I,vec4:Hc}=Gs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Gs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Gs(yl,Array,Array,Array,Array,Array);const Yr=document.querySelector("#log");let _t=null,rn=null;function ai(){if(_t)return _t;_t=document.createElement("div"),_t.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",_t.appendChild(o),rn=document.createElement("div"),rn.className="ply-spinner-label",_t.appendChild(rn),_t.style.display="none",document.body.appendChild(_t),_t}function Us(o){ai(),rn&&o&&(rn.textContent=o),_t&&(_t.style.opacity="1",_t.style.display="flex")}function Ut(o){ai(),rn&&(rn.textContent=o)}function Dn(){if(!_t)return;const o=_t;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function li(o,a){if(!Yr)return;const h=document.createElement("p");h.innerText=o,a&&Object.assign(h.style,a),Yr.appendChild(h)}async function Pt(o){console.log(o),li(o)}async function zl(o){console.error(o),li(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ci;function ui(){ci=performance.now()}function Zr(o){const a=performance.now()-ci;Pt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Ll(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function zn(o){return o+3&-4}const Il=2,Gl=3,Ul=5,Rl=6,An=7,es=8;function Vl(o){const a=new TextDecoder("ascii"),h=a.decode(new Uint8Array(o,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),w=4,k=S.getUint32(w+0,!0),M=S.getUint32(w+4,!0),F=S.getUint32(w+8,!0),T=S.getUint32(w+12,!0),D=S.getUint32(w+16,!0),U=S.getFloat32(w+20,!0),G=S.getUint32(w+24,!0),Y=S.getUint32(w+28,!0),V=S.getFloat32(w+32,!0),W=S.getFloat32(w+36,!0),K=S.getFloat32(w+40,!0),$=S.getUint32(w+44,!0),ce=S.getFloat32(w+48,!0),H=S.getFloat32(w+52,!0),Z=S.getUint32(w+56,!0),q=S.getUint32(w+60,!0),ae=q>0?q:1;if(Y===Ul||Y===Rl)throw new Error(`NAT2: paired-RVQ format=${Y} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);if(Y!==Il&&Y!==Gl&&Y!==An&&Y!==es)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7) or ASTC-codebook (8); got format=${Y}`);if(k%4!==0||$%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${$}`);let ne=w+64;const pe=(Z+1)*4,ie=new Uint32Array(o.slice(ne,ne+pe));ne+=pe;let de;if(ae>1){const Q=(ae+1)*4;if(ne+Q>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Q} from ${ne})`);de=new Uint32Array(o.slice(ne,ne+Q)),ne+=Q}else de=new Uint32Array([0,k]);let Ce=0;for(let Q=0;Q<ae;Q++){const ee=de[Q+1]-de[Q];ee>Ce&&(Ce=ee)}const Ue=D*4*4;if(ne+Ue>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ue} more bytes from offset ${ne}, have ${o.byteLength-ne}`);const Le=new Float32Array(o.slice(ne,ne+Ue));ne+=Ue;const Ge=new Float32Array(D*5);for(let Q=0;Q<D;Q++){const ee=Le[Q*4+0],re=Le[Q*4+1],me=Le[Q*4+2],ze=Le[Q*4+3];let Se=0;for(let B=1;B<=Z&&ie[B]<=re;B++)Se=B;let Te=0;for(let B=1;B<=ae&&de[B]<=ee;B++)Te=B;const X=re-ie[Se],he=ee-de[Te],Ve=Te*Z+Se;Ge[Q*5+0]=he,Ge[Q*5+1]=X,Ge[Q*5+2]=me,Ge[Q*5+3]=ze,Ge[Q*5+4]=Ve}let Be;const ye=k/4*16;if(Y===An||Y===es){if(ne+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Q=Y===An?"BCCB":"ACCB",ee=a.decode(new Uint8Array(o,ne,4));if(ee!==Q)throw new Error(`NAT2 typeD bad sub-magic: expected '${Q}' got '${ee}'`);const re=S.getUint32(ne+4,!0),me=S.getUint32(ne+8,!0),ze=S.getUint32(ne+12,!0),Se=S.getUint32(ne+16,!0),Te=S.getUint32(ne+20,!0);if(re!==1)throw new Error(`NAT2 BCCB unsupported version ${re}`);if(ze!==M/4||Se!==k/4||Te!==ze*Se)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${Se}×${ze} (${Te} blocks)`);ne+=24;const X=me*16;if(ne+X>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${X}, have ${o.byteLength-ne})`);const he=new Uint8Array(o,ne,X);ne+=X;const Ve=Te*2;if(ne+Ve>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${Ve}, have ${o.byteLength-ne})`);const B=new Uint16Array(o.slice(ne,ne+Ve));ne+=Ve;const L=new Uint8Array(Te*16);for(let v=0;v<Te;v++){const i=B[v]*16;L.set(he.subarray(i,i+16),v*16)}Be=L}else{let Q=0;for(let ee=0;ee<Z;ee++){const re=ie[ee+1]-ie[ee];if(re%4!==0)throw new Error(`NAT2 BC7 layer ${ee} rows ${re} not 4-aligned`);Q+=re/4*ye}if(ne+Q>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Q} more bytes from offset ${ne}, have ${o.byteLength-ne}`);Be=new Uint8Array(o.slice(ne,ne+Q))}return{width:k,height:M,channels:F,kernel_type:T,num_rects:D,uv_extent:U,sb_number:G,format:Y,sh_bias:V,res_bias:W,compact_mult:K,layer_h:$,atlas_scale:ce,atlas_offset:H,n_layers:Z,n_cols:ae,layer_cuts:ie,column_cuts:de,slice_width:Ce,rects_expanded:Ge,atlas_bytes:Be}}const Ol=32;function Fl(o,a,h){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,w,k,M;if(a.format===2||a.format===An){if(!o.features.has("texture-compression-bc"))return Pt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===An?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:w,sampler:k}=Xr(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===es){if(!o.features.has("texture-compression-astc"))return Pt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===es?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:w,sampler:k}=Xr(o,a,"astc-4x4-unorm",M)}else return Pt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:F}=a,T=o.createBuffer({label:"atlas rects (5-stride)",size:zn(F.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(T,0,F);const D=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return di(o,D,a,h),{texture:S,view:w,sampler:k,rectsBuffer:T,texParamsBuffer:D,meta:a}}function Xr(o,a,h,S){const{width:w,layer_h:k,n_layers:M,n_cols:F,layer_cuts:T,column_cuts:D,slice_width:U,atlas_bytes:G}=a,V=w/4*16,W=o.limits.maxTextureDimension2D;if(k>W||U>W)throw new Error(`⚠️  atlas slice dims ${U}x${k} exceed maxTextureDimension2D=${W}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const K=F*M;if(K>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${F} cols × ${M} layers = ${K} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const $=o.createTexture({label:S,size:{width:U,height:k,depthOrArrayLayers:K},mipLevelCount:1,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Z=0;Z<F;Z++){const q=D[Z]/4,ae=(D[Z+1]-D[Z])/4;for(let ne=0;ne<M;ne++){const pe=T[ne]/4,ie=(T[ne+1]-T[ne])/4,de=Z*M+ne,Ce=pe*V+q*16;o.queue.writeTexture({texture:$,mipLevel:0,origin:{x:0,y:0,z:de},aspect:"all"},G,{offset:Ce,bytesPerRow:V,rowsPerImage:ie},{width:ae*4,height:ie*4,depthOrArrayLayers:1})}}const ce=$.createView({label:`${S} view`,dimension:"2d-array"}),H=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:$,view:ce,sampler:H}}function di(o,a,h,S){const w=new ArrayBuffer(32),k=new Uint32Array(w),M=new Float32Array(w);k[0]=S?1:0,M[1]=h.atlas_scale,M[2]=h.atlas_offset,M[3]=h.res_bias,o.queue.writeBuffer(a,0,w)}async function Ts(o,a){Pt(`loading ply file from File... : ${o.name}`),Us("downloading PLY...");const h=await o.arrayBuffer();try{return await pi(h,a)}finally{Dn()}}async function Nl(o,a){Pt(`loading ply file from URL... : ${o}`),Us("downloading PLY...");try{ui();const h=new URL(o,self.location.href).href;return await pi({url:h},a)}finally{Dn()}}async function pi(o,a){return new Promise((h,S)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var F,T,D,U,G,Y,V,W,K,$,ce,H;const M=k.data;if((M==null?void 0:M.type)==="error"){zl(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),S(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const Z=M.totalBytes,q=M.loadedBytes/(1024*1024),ae=Z?Z/(1024*1024):void 0,ne=(M.speedBps??0)/(1024*1024),pe=Z?Math.min(99,Math.floor(M.loadedBytes/Z*100)):void 0,ie=ae?`total ${ae.toFixed(1)} MB`:"total -- MB",de=ae&&pe!==void 0?`${q.toFixed(1)} MB downloaded (${pe}%)`:`${q.toFixed(1)} MB downloaded`,Ce=`${ne.toFixed(2)} MB/s`;Ut(`downloading PLY ...
${ie}, ${de}
${Ce}`);return}else if((M==null?void 0:M.type)==="fetched"){Pt(`💾 Fetched (${M.byteLength} bytes)`),Zr("Download"),Ut("parsing PLY..."),ui();return}else if((M==null?void 0:M.type)==="parse_progress"){const Z=M.total??0,q=M.read??0,ae=Z>0?Math.floor(q/Z*100):0;Ut(`parsing PLY ...
${q}/${Z} surfels (${ae}%)`);return}else if((M==null?void 0:M.type)==="done"){const Z=M.num_points,q=M.K,ae=M.feature_mode??0,ne=M.sh_bias,pe=M.kernel_type,ie=M.surfelBuffer,de=M.svParamsBuffer;Pt(`🪐 Total surfels: ${Z}, mode=${ae===1?"SB":"SV"}, K=${q}, sh_bias=${ne}, kernel_type=${pe}`);const Ue=a.createBuffer({label:"surfel input buffer",size:zn(Z*Ol),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Ue,0,ie);const Le=de.byteLength>0?de.byteLength:16,Ge=a.createBuffer({label:ae===1?"color_params buffer (SB)":"color_params buffer (SV)",size:zn(Le),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});de.byteLength>0&&a.queue.writeBuffer(Ge,0,de),w.terminate(),Zr("Parse"),h({num_points:Z,K:q,feature_mode:ae,sh_bias:ne,kernel_type:pe,surfel_buffer:Ue,surfel_data:new Float32Array(ie),sv_params_buffer:Ge,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(F=M.bbox)==null?void 0:F.min)==null?void 0:T[0])??-1)+(((U=(D=M.bbox)==null?void 0:D.max)==null?void 0:U[0])??1))/2,((((Y=(G=M.bbox)==null?void 0:G.min)==null?void 0:Y[1])??-1)+(((W=(V=M.bbox)==null?void 0:V.max)==null?void 0:W[1])??1))/2,(((($=(K=M.bbox)==null?void 0:K.min)==null?void 0:$[2])??-1)+(((H=(ce=M.bbox)==null?void 0:ce.max)==null?void 0:H[2])??1))/2]})}},w.onerror=k=>{w.terminate(),S(k)},o instanceof ArrayBuffer?(Ut("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ds={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(h,S){S(a)})($l,function(h){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class F extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class D extends k{constructor(e,t){super(e),this.index=t}}function U(n){return n}function G(n){return n==null}function Y(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function V(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const W={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class K{static alreadyDisposed(){return new K({type:"alreadydisposed"})}static notBindable(){return new K({type:"notbindable"})}static propertyNotFound(e){return new K({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new K({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=W[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class ${constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!$.isBindable(s))throw K.notBindable();if(!(e in s))throw K.propertyNotFound(e);s[e]=t}}class ce extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class H{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Z="tp";function q(n){return(t,s)=>[Z,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ae(n,e){return t=>e(n(t))}function ne(n){return n.rawValue}function pe(n,e){n.emitter.on("change",ae(ne,e)),e(n.rawValue)}function ie(n,e,t){pe(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Ce(n,e){return t=>{de(n,e,t)}}function Ue(n,e){pe(n,t=>{e.textContent=t??""})}const Le=q("btn");class Ge{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Le()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Le("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Le("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Be{constructor(e,t){this.emitter=new H,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ge(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class be{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,C)=>c===C,this.emitter=new H,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,C=this.rawValue_;this.equals_(C,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:C,rawValue:c,sender:this}))}}class ye{constructor(e){this.emitter=new H,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function Q(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ye(n):new be(n,e)}class ee{constructor(e){this.emitter=new H,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:Q(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new ee(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function re(n,e){const s=Object.keys(e).reduce((c,C)=>{if(c===void 0)return;const A=e[C],J=A(n[C]);return J.succeeded?Object.assign(Object.assign({},c),{[C]:J.value}):void 0},{});return s}function me(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function ze(n){return n===null?!1:typeof n=="object"}function Se(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Te(n){return{custom:e=>Se(e)(n),boolean:Se(e=>typeof e=="boolean"?e:void 0)(n),number:Se(e=>typeof e=="number"?e:void 0)(n),string:Se(e=>typeof e=="string"?e:void 0)(n),function:Se(e=>typeof e=="function"?e:void 0)(n),constant:e=>Se(t=>t===e?e:void 0)(n),raw:Se(e=>e)(n),object:e=>Se(t=>{if(ze(t))return re(t,e)})(n),array:e=>Se(t=>{if(Array.isArray(t))return me(t,e)})(n)}}const X={optional:Te(!0),required:Te(!1)};function he(n,e){const t=X.required.object(e)(n);return t.succeeded?t.value:void 0}function Ve(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class L{constructor(e){this.value_=e}static create(e){return[new L(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=q("");function i(n,e){return Ce(n,v(void 0,e))}class f extends ee{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=L.create(Q(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const C=e??{};return new f(ee.createCore({disabled:(t=C.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=C.hidden)!==null&&s!==void 0?s:!1,parent:(c=C.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){pe(this.globalDisabled_,i(e,"disabled")),ie(this,"hidden",i(e,"hidden"))}bindDisabled(e){pe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){pe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=q(""),P={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class E{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,P[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,P[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ve({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const x="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function l(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(x,"svg");return t.innerHTML=y[e],t}function z(n,e,t){n.insertBefore(e,n.children[t])}function R(n){n.parentElement&&n.parentElement.removeChild(n)}function N(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function oe(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const te=q("lbl");function le(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,C)=>{C>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class we{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(te()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(te("l")),ie(t.props,"label",C=>{G(C)?this.element.classList.add(te(void 0,"nol")):(this.element.classList.remove(te(void 0,"nol")),oe(s),s.appendChild(le(e,C)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(te("v")),this.element.appendChild(c),this.valueElement=c}}class _e extends E{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ve={id:"button",type:"blade",accept(n){const e=X,t=he(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new _e(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:new Be(n.document,{props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof _e)||!(n.controller.valueController instanceof Be)?null:new ce(n.controller)}};class ke extends E{constructor(e){super(e),this.value=e.value}}function Me(){return new ee({positions:Q([],{equals:Y})})}class We extends ee{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=ee.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ie(this,"expanded",s),ie(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function je(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function Xe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=je(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends w{constructor(e,t){super(e),this.rackApi_=t}}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Je{constructor(e){this.emitter=new H,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw K.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(C=>{this.cache_.add(C)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Ke extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new H,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class $e extends _e{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new H,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new F(this,t,this.controller_.binding.target.presetKey)})}}class qe extends _e{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ct(n){return n instanceof vt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw K.shouldNeverHappen();return t}function St(n,e,t){if(!$.isBindable(n))throw K.notBindable();return new $(n,e,t)}class vt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new H,this.apiSet_=new Je(ct),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,A=this.pool_.createInput(C,St(e,t,c.presetKey),c),J=new Ke(A);return this.add(J,c.index)}addMonitor(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,A=this.pool_.createMonitor(C,St(e,t),c),J=new rt(A);return this.add(J,c.index)}addFolder(e){return tt(this,e)}addButton(e){return et(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return st(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof $e){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof ke){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof qe))throw K.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new F(t,s.target.read(),s.target.presetKey)})}}class bt extends Qe{constructor(e,t){super(e,new vt(e.rackController,t)),this.emitter_=new H,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class yt extends E{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Ct{constructor(e,t){const s=q(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Et(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof $e&&s.binding===e)return s}return null}function kt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function Rt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof ke&&s.value===e)return s}return null}function Mt(n){return n instanceof j?n.rack:n instanceof yt?n.rackController.rack:null}function Bt(n){const e=Mt(n);return e?e.bcSet_:null}class Tt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new H,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Je(Bt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),V(e,"parent")?e.parent=this:(e.parent_=this,Ve({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){V(e,"parent")?e.parent=null:(e.parent_=null,Ve({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof $e)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof qe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof ke)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Mt(s);if(c){const C=c.emitter;C.on("layout",this.onDescendantLayout_),C.on("inputchange",this.onDescendantInputChange_),C.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof $e)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof qe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof ke)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Mt(s);if(c){const C=c.emitter;C.off("layout",this.onDescendantLayout_),C.off("inputchange",this.onDescendantInputChange_),C.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const C=[];c===t&&(C.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&C.push("veryfirst")),c===s&&(C.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&C.push("verylast")),c.blade.set("positions",C)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Et(this.find($e),e.sender);if(!t)throw K.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=kt(this.find(qe),e.sender);if(!t)throw K.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Rt(this.find(ke),e.sender);if(!t)throw K.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class j extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ct(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Tt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&z(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&R(e.bladeController.view.element)}}const fe=q("cnt");class ue{constructor(e,t){var s;this.className_=q((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),fe()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ie(this.foldable_,"completed",Ce(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ie(t.props,"title",Pe=>{G(Pe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const C=e.createElement("div");C.classList.add(this.className_("i")),this.element.appendChild(C);const A=e.createElement("div");A.classList.add(this.className_("t")),Ue(t.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A;const J=e.createElement("div");J.classList.add(this.className_("m")),this.buttonElement.appendChild(J);const xe=t.containerElement;xe.classList.add(this.className_("c")),this.element.appendChild(xe),this.containerElement=xe}}class De extends yt{constructor(e,t){var s;const c=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),C=new j(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:C,view:new ue(e,{containerElement:C.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Re={id:"folder",type:"blade",accept(n){const e=X,t=he(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new De(n.document,{blade:n.blade,expanded:n.params.expanded,props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof De?new bt(n.controller,n.pool):null}};class ge extends ke{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new we(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Ee extends w{}const Ne=q("spr");class Ye{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ne()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Ne("r")),this.element.appendChild(s)}}class ot extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ye(e,{viewProps:t.viewProps})}))}}const mt={id:"separator",type:"blade",accept(n){const t=he(n,{view:X.required.constant("separator")});return t?{params:t}:null},controller(n){return new ot(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ot?new Ee(n.controller):null}},Ht=q("tbi");class Ln{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ht()),t.viewProps.bindClassModifiers(this.element),ie(t.props,"selected",C=>{C?this.element.classList.add(Ht(void 0,"sel")):this.element.classList.remove(Ht(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Ht("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ht("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class In{constructor(e,t){this.emitter=new H,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ln(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Gn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new In(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new j(e,{blade:Me(),viewProps:f.create()}),this.props=t.props,ie(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class mn{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Un extends Qe{constructor(e,t){super(e,new vt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new H,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw K.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Gn(t,{itemProps:ee.fromObject({selected:!1,title:e.title}),props:ee.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw K.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw K.shouldNeverHappen();const s=new mn(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw K.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new D(this,e.rawValue)})}}const Rn=-1;class Vn{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Q(!0),this.selectedIndex=Q(Rn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Rn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Kt=q("tab");class On{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Kt(),fe()),t.viewProps.bindClassModifiers(this.element),pe(t.empty,Ce(this.element,Kt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Kt("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Kt("i")),this.element.appendChild(c);const C=t.contentsElement;C.classList.add(Kt("c")),this.element.appendChild(C),this.contentsElement=C}}class ht extends yt{constructor(e,t){const s=new j(e,{blade:t.blade,viewProps:t.viewProps}),c=new Vn;super({blade:t.blade,rackController:s,view:new On(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Je(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;z(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;R(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Vt={id:"tab",type:"blade",accept(n){const e=X,t=he(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new ht(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Gn(n.document,{itemProps:ee.fromObject({selected:!1,title:t.title}),props:ee.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof ht?new Un(n.controller,n.pool):null}};function on(n,e){const t=n.accept(e.params);if(!t)return null;const s=X.optional.boolean(e.params.disabled).value,c=X.optional.boolean(e.params.hidden).value;return n.controller({blade:Me(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class Dt{constructor(){this.disabled=!1,this.emitter=new H}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class an{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new H,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ln{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new H,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Fn(n,e){for(;n.length<e;)n.push(void 0)}function vn(n){const e=[];return Fn(e,n),Q(e)}function Ci(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Ei(n,e){const t=[...Ci(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Fn(t,n.length),t}class ki{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new H,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Ei(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class bn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function At(n,e){if(n instanceof e)return n;if(n instanceof bn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class cn{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class gn{constructor(e){this.values=ee.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Vs{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class Nn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const is=q("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(is("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(is("m")),c.appendChild(g(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ie(this.props_,"options",C=>{N(this.selectElement),C.forEach(A=>{const J=e.createElement("option");J.textContent=A.text,this.selectElement.appendChild(J)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class wn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Os=q("pop");class Bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Os()),t.viewProps.bindClassModifiers(this.element),pe(t.shows,Ce(this.element,Os(void 0,"v")))}}class Fs{constructor(e,t){this.shows=Q(!1),this.viewProps=t.viewProps,this.view=new Bi(e,{shows:this.shows,viewProps:this.viewProps})}}const Ns=q("txt");class Ti{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ns()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ns("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class $n{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Di(n){return String(n)}function $s(n){return n==="false"?!1:!!n}function qs(n){return Di(n)}class Ai{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const zi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Li{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ii={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ii[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function os(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function xn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function yn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ri(n,e){const t=yn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=yn(n,e);return c===""?"":s+c}function as(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ri(n,e);return s===""?"":t+s}function Ws(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ui(n,e);return e+=s.length,s===""?"":s+yn(n,e)}function Vi(n,e){const t=Ws(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=yn(n,e);return e+=c.length,t+s+c+as(n,e)}function Oi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=yn(n,e);return e+=s.length,s===""?"":t+s+as(n,e)}function Fi(n,e){const t=Ws(n,e);return e+=t.length,t===""?"":t+as(n,e)}const Ni=os([Vi,Oi,Fi]);function $i(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$i(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Wi(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Yi=os([qi,ji,Ki]),Zi=os([Yi,Ni]);function Xi(n,e){const t=Zi(n,e);return e+=t.length,t===""?null:{evaluable:new Ai(t),cursor:e}}function Qi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Hs(n,e);if(!s)return null;e=s.cursor,e+=xn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Ji(n,e){var t;return(t=Xi(n,e))!==null&&t!==void 0?t:Qi(n,e)}function js(n,e){const t=Ji(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=js(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gi(s,c.evaluable)}):null}function eo(n,e,t){t+=xn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=xn(e,t).length,{cursor:t,operator:s}):null}function to(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let C=c.evaluable;for(;;){const A=eo(e,t,s);if(!A)break;s=A.cursor;const J=n(t,s);if(!J)return null;s=J.cursor,C=new Li(A.operator,C,J.evaluable)}return C?{cursor:s,evaluable:C}:null}}const no=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>to(n,e),js);function Hs(n,e){return e+=xn(n,e).length,no(n,e)}function so(n){const e=Hs(n,0);return!e||e.cursor+xn(n,e.cursor).length!==n.length?null:e.evaluable}function zt(n){var e;const t=so(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Ks(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=zt(n);if(!G(e))return e}return 0}function ro(n){return String(n)}function dt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const io=dt(0);function qn(n){return io(n)+"%"}function Ys(n){return String(n)}function ls(n){return n}function Pn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function C(A){c||(c=!0,A(),c=!1)}n.emitter.on("change",A=>{C(()=>{e.setRawValue(t(n,e),A.options)})}),e.emitter.on("change",A=>{C(()=>{n.setRawValue(s(n,e),A.options)}),C(()=>{e.setRawValue(t(n,e),A.options)})}),C(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function ft(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Sn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Lt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function oo(n){return n==="ArrowUp"||n==="ArrowDown"}function Zs(n){return oo(n)||n==="ArrowLeft"||n==="ArrowRight"}function cs(n,e){var t,s;const c=e.ownerDocument.defaultView,C=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+C.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+C.top)}}class Yt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new H,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(cs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(cs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(cs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ze(n,e,t,s,c){const C=(n-e)/(t-e);return s+C*(c-s)}function Xs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function at(n,e,t){return Math.min(Math.max(n,e),t)}function Qs(n,e){return(n%e+e)%e}const gt=q("txt");class ao{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(gt(),gt(void 0,"num")),t.arrayPosition&&this.element.classList.add(gt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(gt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(gt()),this.inputElement.classList.add(gt("i"));const c=e.createElement("div");c.classList.add(gt("k")),this.element.appendChild(c),this.knobElement=c;const C=e.createElementNS(x,"svg");C.classList.add(gt("g")),this.knobElement.appendChild(C);const A=e.createElementNS(x,"path");A.classList.add(gt("gb")),C.appendChild(A),this.guideBodyElem_=A;const J=e.createElementNS(x,"path");J.classList.add(gt("gh")),C.appendChild(J),this.guideHeadElem_=J;const xe=e.createElement("div");xe.classList.add(q("tt")()),this.knobElement.appendChild(xe),this.tooltipElem_=xe,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(gt(void 0,"drg"));return}this.element.classList.add(gt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=at(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const C=this.props_.get("formatter");this.tooltipElem_.textContent=C(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Cn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=Q(null),this.view=new ao(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Yt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),C=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let A=e;return c!==void 0&&(A=Math.max(A,c)),C!==void 0&&(A=Math.min(A,C)),A}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=ft(this.baseStep_,Sn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){ft(this.baseStep_,Sn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const us=q("sld");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(us()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(us("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(us("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=at(Ze(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Yt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(at(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ft(this.baseStep_,Lt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){ft(this.baseStep_,Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ds=q("sldtxt");class uo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ds());const s=e.createElement("div");s.classList.add(ds("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ds("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class ps{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Cn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new uo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function En(n,e){n.write(e)}function Wn(n){const e=X;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Js(n){if(n==="inline"||n==="popup")return n}function Ot(n){const e=X;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function er(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function hs(n){return G(n)?null:new gn(er(n))}function po(n){const e=n?At(n,Nn):null;return e?e.step:null}function jn(n,e){const t=n&&At(n,Nn);return t?Xs(t.step):Math.max(Xs(e),2)}function un(n){const e=po(n);return e??1}function dn(n,e){var t;const s=n&&At(n,Nn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Hn=q("ckb");class ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Hn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Hn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const C=e.createElement("div");C.classList.add(Hn("w")),s.appendChild(C);const A=g(e,"check");C.appendChild(A),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function _o(n){const e=[],t=hs(n.options);return t&&e.push(t),new bn(e)}const mo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=he(e,{options:X.optional.custom(Wn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s,constraint:n=>_o(n.params),writer:n=>En},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&At(s,gn);return c?new wn(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new fo(e,{value:t,viewProps:n.viewProps})}},Zt=q("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Zt()),t.foldable.bindExpandedClass(this.element,Zt(void 0,"expanded")),ie(t.foldable,"completed",Ce(this.element,Zt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Zt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Zt("s")),s.appendChild(c),this.swatchElement=c;const C=e.createElement("div");if(C.classList.add(Zt("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(Zt("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}function bo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),C=at(t/255,0,1),A=Math.max(s,c,C),J=Math.min(s,c,C),xe=A-J;let Pe=0,Oe=0;const Fe=(J+A)/2;return xe!==0&&(Oe=xe/(1-Math.abs(A+J-1)),s===A?Pe=(c-C)/xe:c===A?Pe=2+(C-s)/xe:Pe=4+(s-c)/xe,Pe=Pe/6+(Pe<0?1:0)),[Pe*360,Oe*100,Fe*100]}function go(n,e,t){const s=(n%360+360)%360,c=at(e/100,0,1),C=at(t/100,0,1),A=(1-Math.abs(2*C-1))*c,J=A*(1-Math.abs(s/60%2-1)),xe=C-A/2;let Pe,Oe,Fe;return s>=0&&s<60?[Pe,Oe,Fe]=[A,J,0]:s>=60&&s<120?[Pe,Oe,Fe]=[J,A,0]:s>=120&&s<180?[Pe,Oe,Fe]=[0,A,J]:s>=180&&s<240?[Pe,Oe,Fe]=[0,J,A]:s>=240&&s<300?[Pe,Oe,Fe]=[J,0,A]:[Pe,Oe,Fe]=[A,0,J],[(Pe+xe)*255,(Oe+xe)*255,(Fe+xe)*255]}function wo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),C=at(t/255,0,1),A=Math.max(s,c,C),J=Math.min(s,c,C),xe=A-J;let Pe;xe===0?Pe=0:A===s?Pe=60*(((c-C)/xe%6+6)%6):A===c?Pe=60*((C-s)/xe+2):Pe=60*((s-c)/xe+4);const Oe=A===0?0:xe/A,Fe=A;return[Pe,Oe*100,Fe*100]}function tr(n,e,t){const s=Qs(n,360),c=at(e/100,0,1),C=at(t/100,0,1),A=C*c,J=A*(1-Math.abs(s/60%2-1)),xe=C-A;let Pe,Oe,Fe;return s>=0&&s<60?[Pe,Oe,Fe]=[A,J,0]:s>=60&&s<120?[Pe,Oe,Fe]=[J,A,0]:s>=120&&s<180?[Pe,Oe,Fe]=[0,A,J]:s>=180&&s<240?[Pe,Oe,Fe]=[0,J,A]:s>=240&&s<300?[Pe,Oe,Fe]=[J,0,A]:[Pe,Oe,Fe]=[A,0,J],[(Pe+xe)*255,(Oe+xe)*255,(Fe+xe)*255]}function xo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Xt(n){return[n[0],n[1],n[2]]}function nr(n,e){return[n[0],n[1],n[2],e]}const Po={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:xo,rgb:go},hsv:{hsl:yo,hsv:(n,e,t)=>[n,e,t],rgb:tr},rgb:{hsl:bo,hsv:wo,rgb:(n,e,t)=>[n,e,t]}};function Kn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function So(n,e){return n===e?e:Qs(n,e)}function Co(n,e,t){var s;const c=Kn(e,t);return[e==="rgb"?at(n[0],0,c[0]):So(n[0],c[0]),at(n[1],0,c[1]),at(n[2],0,c[2]),at((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function sr(n,e,t,s){const c=Kn(e,t),C=Kn(e,s);return n.map((A,J)=>A/c[J]*C[J])}function Eo(n,e,t){const s=sr(n,e.mode,e.type,"int"),c=Po[e.mode][t.mode](...s);return sr(c,t.mode,"int",t.type)}function Yn(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Ie{static black(e="int"){return new Ie([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ie(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Yn(e,"r")&&Yn(e,"g")&&Yn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Yn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let C=0;C<s.length;C++)if(s[C]!==c[C])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Co(e,t,s)}getComponents(e,t="int"){return nr(Eo(Xt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ft=q("colp");class ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ft("hsv"));const c=e.createElement("div");c.classList.add(Ft("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const C=e.createElement("div");C.classList.add(Ft("h")),this.hPaletteView_=t.hPaletteView,C.appendChild(this.hPaletteView_.element),s.appendChild(C),this.element.appendChild(s);const A=e.createElement("div");if(A.classList.add(Ft("rgb")),this.textView_=t.textView,A.appendChild(this.textView_.element),this.element.appendChild(A),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const J=e.createElement("div");J.classList.add(Ft("a"));const xe=e.createElement("div");xe.classList.add(Ft("ap")),xe.appendChild(this.alphaViews_.palette.element),J.appendChild(xe);const Pe=e.createElement("div");Pe.classList.add(Ft("at")),Pe.appendChild(this.alphaViews_.text.element),J.appendChild(Pe),this.element.appendChild(J)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function fs(n){const e=X;return he(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(Js)})}function Qt(n){return n?.1:1}function Jt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Bo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function wt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const To={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function rr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return To[s](t)}function ir(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[wt(e[1],255),wt(e[2],255),wt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function or(n){return e=>{const t=ir(e);return t?new Ie(t,"rgb",n):null}}function ar(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[wt(e[1],255),wt(e[2],255),wt(e[3],255),wt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function lr(n){return e=>{const t=ar(e);return t?new Ie(t,"rgb",n):null}}function cr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[rr(e[1]),wt(e[2],100),wt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ur(n){return e=>{const t=cr(e);return t?new Ie(t,"hsl",n):null}}function dr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[rr(e[1]),wt(e[2],100),wt(e[3],100),wt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function pr(n){return e=>{const t=dr(e);return t?new Ie(t,"hsl",n):null}}function hr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=hr(n);return e?new Ie(e,"rgb","int"):null}function fr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function Ao(n){const e=fr(n);return e?new Ie(e,"rgb","int"):null}function _r(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function mr(n){return e=>{const t=_r(e);return t?new Ie(t,"rgb",n):null}}function vr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function br(n){return e=>{const t=vr(e);return t?new Ie(t,"rgb",n):null}}const zo=[{parser:hr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ir,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ar,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:cr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:dr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:_r,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:vr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Lo(n){return zo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function _s(n,e="int"){const t=Lo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const gr={int:[Do,Ao,or("int"),lr("int"),ur("int"),pr("int"),mr("int"),br("int")],float:[or("float"),lr("float"),ur("float"),pr("float"),mr("float"),br("float")]};function Io(n){const e=gr[n];return t=>{if(typeof t!="string")return Ie.black(n);const s=e.reduce((c,C)=>c||C(t),null);return s??Ie.black(n)}}function ms(n){const e=gr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function wr(n){const e=at(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function xr(n,e="#"){const t=Xt(n.getComponents("rgb")).map(wr).join("");return`${e}${t}`}function vs(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(wr).join("");return`${e}${s}`}function yr(n,e){const t=dt(e==="float"?2:0);return`rgb(${Xt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>yr(e,n)}function Zn(n,e){const t=dt(2),s=dt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((C,A)=>(A===3?t:s)(C)).join(", ")})`}function Uo(n){return e=>Zn(e,n)}function Ro(n){const e=[dt(0),qn,qn];return`hsl(${Xt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Vo(n){const e=[dt(0),qn,qn,dt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Pr(n,e){const t=dt(e==="float"?2:0),s=["r","g","b"];return`{${Xt(n.getComponents("rgb",e)).map((C,A)=>`${s[A]}: ${t(C)}`).join(", ")}}`}function Oo(n){return e=>Pr(e,n)}function Sr(n,e){const t=dt(2),s=dt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((A,J)=>{const xe=J===3?t:s;return`${c[J]}: ${xe(A)}`}).join(", ")}}`}function Fo(n){return e=>Sr(e,n)}const No=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:xr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:vs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ro},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)}],[])];function bs(n){return No.reduce((e,t)=>e||(Bo(t.format,n)?t.stringifier:null),null)}const kn=q("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(kn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(kn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(kn("c")),s.appendChild(c),this.colorElem_=c;const C=e.createElement("div");C.classList.add(kn("m")),this.element.appendChild(C),this.markerElem_=C;const A=e.createElement("div");A.classList.add(kn("p")),this.markerElem_.appendChild(A),this.previewElem_=A,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ie([t[0],t[1],t[2],0],"rgb"),c=new Ie([t[0],t[1],t[2],255],"rgb"),C=["to right",Zn(s),Zn(c)];this.colorElem_.style.background=`linear-gradient(${C.join(",")})`,this.previewElem_.style.backgroundColor=Zn(e);const A=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${A}%`}onValueChange_(){this.update_()}}class qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Yt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[C,A,J]=c.getComponents("hsv");this.value.setRawValue(new Ie([C,A,J,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ft(Qt(!0),Lt(e));if(t===0)return;const s=this.value.rawValue,[c,C,A,J]=s.getComponents("hsv");this.value.setRawValue(new Ie([c,C,A,J+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){ft(Qt(!0),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const pn=q("coltxt");function Wo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const C=n.createElement("option");return C.textContent=c.text,C.value=c.value,s.appendChild(C),s},n.createDocumentFragment())),e}class jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(pn("m")),this.modeElem_=Wo(e),this.modeElem_.classList.add(pn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(pn("mm")),c.appendChild(g(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const C=e.createElement("div");C.classList.add(pn("w")),this.element.appendChild(C),this.textsElem_=C,this.textViews_=t.textViews,this.applyTextViews_(),pe(t.colorMode,A=>{this.modeElem_.value=A})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){N(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(pn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return dt(n==="float"?2:0)}function Ko(n,e,t){const s=Kn(n,e)[t];return new cn({min:0,max:s})}function gs(n,e,t){return new Cn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Qt(!1),parser:e.parser,props:ee.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:Q(0,{constraint:Ko(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Yo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=Q(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new jo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[gs(e,t,0),gs(e,t,1),gs(e,t,2)];return s.forEach((c,C)=>{Pn({primary:this.value,secondary:c.value,forward:A=>A.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[C],backward:(A,J)=>{const xe=this.colorMode.rawValue,Pe=A.rawValue.getComponents(xe,this.colorType_);return Pe[C]=J.rawValue,new Ie(nr(Xt(Pe),Pe[3]),xe,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ws=q("hpl");class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ws()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ws("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ws("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=yr(new Ie([t,100,100],"hsv"));const s=Ze(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Yt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(at(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,C,A,J]=c.getComponents("hsv");this.value.setRawValue(new Ie([s,C,A,J],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ft(Qt(!1),Lt(e));if(t===0)return;const s=this.value.rawValue,[c,C,A,J]=s.getComponents("hsv");this.value.setRawValue(new Ie([c+t,C,A,J],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){ft(Qt(!1),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const xs=q("svp"),Cr=64;class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(xs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Cr,s.width=Cr,s.classList.add(xs("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(xs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,C=this.canvasElement.height,A=e.getImageData(0,0,c,C),J=A.data;for(let Oe=0;Oe<C;Oe++)for(let Fe=0;Fe<c;Fe++){const en=Ze(Fe,0,c,0,100),Bn=Ze(Oe,0,C,100,0),Tn=tr(s[0],en,Bn),Xn=(Oe*c+Fe)*4;J[Xn]=Tn[0],J[Xn+1]=Tn[1],J[Xn+2]=Tn[2],J[Xn+3]=255}e.putImageData(A,0,0);const xe=Ze(s[1],0,100,0,100);this.markerElem_.style.left=`${xe}%`;const Pe=Ze(s[2],0,100,100,0);this.markerElem_.style.top=`${Pe}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Yt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(e.point.x,0,e.bounds.width,0,100),c=Ze(e.point.y,0,e.bounds.height,100,0),[C,,,A]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ie([C,s,c,A],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Zs(e.key)&&e.preventDefault();const[t,s,c,C]=this.value.rawValue.getComponents("hsv"),A=Qt(!1),J=ft(A,Lt(e)),xe=ft(A,Sn(e));J===0&&xe===0||this.value.setRawValue(new Ie([t,s+J,c+xe,C],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Qt(!1),s=ft(t,Lt(e)),c=ft(t,Sn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new qo(e,{value:this.value,viewProps:this.viewProps}),text:new Cn(e,{parser:zt,baseStep:.1,props:ee.fromObject({draggingScale:.01,formatter:dt(2)}),value:Q(0,{constraint:new cn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Pn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const C=s.rawValue.getComponents();return C[3]=c.rawValue,new Ie(C,s.rawValue.mode)}}),this.textC_=new Yo(e,{colorType:t.colorType,parser:zt,value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ys=q("colsw");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ys()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ys("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ys("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=vs(e)}onValueChange_(){this.update_()}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps})}}class Ps{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new na(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new $n(e,{parser:t.parser,props:ee.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Fs(e,{viewProps:this.viewProps}):null;const c=new ea(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(C=>{C.addEventListener("blur",this.onPopupChildBlur_),C.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),Pn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:C=>C.rawValue,backward:(C,A)=>A.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sa(n,e){return Ie.isColorObject(n)?Ie.fromObject(n,e):Ie.black(e)}function ra(n){return Xt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ia(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function oa(n){return new Ie([n>>16&255,n>>8&255,n&255],"rgb")}function aa(n){return new Ie([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function la(n){return typeof n!="number"?Ie.black():oa(n)}function ca(n){return typeof n!="number"?Ie.black():aa(n)}function ua(n){const e=bs(n);return e?(t,s)=>{En(t,e(s))}:null}function da(n){const e=n?ia:ra;return(t,s)=>{En(t,e(s))}}function pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function fa(n,e){return(t,s)=>{n?pa(t,s,e):ha(t,s,e)}}function Ss(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function _a(n){return n?e=>vs(e,"0x"):e=>xr(e,"0x")}function ma(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ma(e))return null;const t=fs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ss(n.params)?ca:la,equals:Ie.equals,writer:n=>da(Ss(n.params))},controller:n=>{const e=Ss(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ps(n.document,{colorType:"int",expanded:t??!1,formatter:_a(e),parser:ms("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ba(n){return Ie.isRgbaColorObject(n)}function ga(n){return e=>sa(e,n)}function wa(n,e){return t=>n?Sr(t,e):Pr(t,e)}const xa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ie.isColorObject(n))return null;const t=fs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ga(Jt(n.params)),equals:Ie.equals,writer:n=>fa(ba(n.initialValue),Jt(n.params))},controller:n=>{var e;const t=Ie.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,C=(e=Jt(n.params))!==null&&e!==void 0?e:"int";return new Ps(n.document,{colorType:C,expanded:s??!1,formatter:wa(t,C),parser:ms(C),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=_s(n,Jt(e));if(!t||!bs(t))return null;const c=fs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Io((e=Jt(n.params))!==null&&e!==void 0?e:"int")},equals:Ie.equals,writer:n=>{const e=_s(n.initialValue,Jt(n.params));if(!e)throw K.shouldNeverHappen();const t=ua(e);if(!t)throw K.notBindable();return t}},controller:n=>{const e=_s(n.initialValue,Jt(n.params));if(!e)throw K.shouldNeverHappen();const t=bs(e);if(!t)throw K.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ps(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ms(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Nt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var C,A;return(A=(C=this.components[c])===null||C===void 0?void 0:C.constrain(s))!==null&&A!==void 0?A:s});return this.asm_.fromComponents(t)}}const Er=q("pndtxt");class Pa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Er()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Er("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Sa(n,e,t){return new Cn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:Q(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Cs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Sa(e,t,c)),this.acs_.forEach((s,c)=>{Pn({primary:this.value,secondary:s.value,forward:C=>t.assembly.toComponents(C.rawValue)[c],backward:(C,A)=>{const J=t.assembly.toComponents(C.rawValue);return J[c]=A.rawValue,t.assembly.fromComponents(J)}})}),this.view=new Pa(e,{textViews:this.acs_.map(s=>s.view)})}}function kr(n,e){return"step"in n&&!G(n.step)?new Nn(n.step,e):null}function Mr(n){return!G(n.max)&&!G(n.min)?new cn({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Vs({max:n.max,min:n.min}):null}function Ca(n){const e=At(n,cn);if(e)return[e.values.get("min"),e.values.get("max")];const t=At(n,Vs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ea(n,e){const t=[],s=kr(n,e);s&&t.push(s);const c=Mr(n);c&&t.push(c);const C=hs(n.options);return C&&t.push(C),new bn(t)}const ka={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=X,s=he(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Wn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks,constraint:n=>Ea(n.params,n.initialValue),writer:n=>En},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&At(s,gn);if(c)return new wn(n.document,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const C=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:dt(jn(s,t.rawValue)),A=s&&At(s,cn);return A?new ps(n.document,{baseStep:un(s),parser:zt,sliderProps:new ee({maxValue:A.values.value("max"),minValue:A.values.value("min")}),textProps:ee.fromObject({draggingScale:dn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps}):new Cn(n.document,{baseStep:un(s),parser:zt,props:ee.fromObject({draggingScale:dn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps})}};class $t{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Br={toComponents:n=>n.getComponents(),fromComponents:n=>new $t(...n)},hn=q("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(hn()),t.viewProps.bindClassModifiers(this.element),pe(t.expanded,Ce(this.element,hn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(hn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(hn("b")),c.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const C=e.createElement("div");if(C.classList.add(hn("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const A=e.createElement("div");A.classList.add(hn("p")),this.element.appendChild(A),this.pickerElement=A}else this.pickerElement=null}}const qt=q("p2dp");class Ba{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(qt()),t.layout==="popup"&&this.element.classList.add(qt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(x,"svg");c.classList.add(qt("g")),this.padElement.appendChild(c),this.svgElem_=c;const C=e.createElementNS(x,"line");C.classList.add(qt("ax")),C.setAttributeNS(null,"x1","0"),C.setAttributeNS(null,"y1","50%"),C.setAttributeNS(null,"x2","100%"),C.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(C);const A=e.createElementNS(x,"line");A.classList.add(qt("ax")),A.setAttributeNS(null,"x1","50%"),A.setAttributeNS(null,"y1","0"),A.setAttributeNS(null,"x2","50%"),A.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(A);const J=e.createElementNS(x,"line");J.classList.add(qt("l")),J.setAttributeNS(null,"x1","50%"),J.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(J),this.lineElem_=J;const xe=e.createElement("div");xe.classList.add(qt("m")),this.padElement.appendChild(xe),this.markerElem_=xe,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ze(e,-s,+s,0,100),C=Ze(t,-s,+s,0,100),A=this.invertsY_?100-C:C;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${A}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${A}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Tr(n,e,t){return[ft(e[0],Lt(n)),ft(e[1],Sn(n))*(t?1:-1)]}class Ta{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ba(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Yt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ze(e.point.x,0,e.bounds.width,-s,+s),C=Ze(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new $t(c,C),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Zs(e.key)&&e.preventDefault();const[t,s]=Tr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new $t(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Tr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Fs(e,{viewProps:this.viewProps}):null;const C=new Ta(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});C.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=C,this.textC_=new Cs(e,{assembly:Br,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Pn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,J)=>J.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class fn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Dr={toComponents:n=>n.getComponents(),fromComponents:n=>new fn(...n)};function Aa(n){return fn.isObject(n)?new fn(n.x,n.y,n.z):new fn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function La(n,e){return new Nt({assembly:Dr,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z)]})}function Es(n,e){return{baseStep:un(e),constraint:e,textProps:ee.fromObject({draggingScale:dn(e,n),formatter:dt(jn(e,n))})}}const Ia={id:"input-point3d",type:"input",accept:(n,e)=>{if(!fn.isObject(n))return null;const t=X,s=he(e,{x:t.optional.custom(Ot),y:t.optional.custom(Ot),z:t.optional.custom(Ot)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>La(n.params,n.initialValue),equals:fn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Nt))throw K.shouldNeverHappen();return new Cs(n.document,{assembly:Dr,axes:[Es(e.rawValue.x,t.components[0]),Es(e.rawValue.y,t.components[1]),Es(e.rawValue.z,t.components[2])],parser:zt,value:e,viewProps:n.viewProps})}};class _n{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,C=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof C!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ar={toComponents:n=>n.getComponents(),fromComponents:n=>new _n(...n)};function Ga(n){return _n.isObject(n)?new _n(n.x,n.y,n.z,n.w):new _n}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ra(n,e){return new Nt({assembly:Ar,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z),It("w"in n?n.w:void 0,e.w)]})}function Va(n,e){return{baseStep:un(e),constraint:e,textProps:ee.fromObject({draggingScale:dn(e,n),formatter:dt(jn(e,n))})}}const Oa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!_n.isObject(n))return null;const t=X,s=he(e,{x:t.optional.custom(Ot),y:t.optional.custom(Ot),z:t.optional.custom(Ot),w:t.optional.custom(Ot)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Ra(n.params,n.initialValue),equals:_n.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Nt))throw K.shouldNeverHappen();return new Cs(n.document,{assembly:Ar,axes:e.rawValue.getComponents().map((s,c)=>Va(s,t.components[c])),parser:zt,value:e,viewProps:n.viewProps})}};function Fa(n){const e=[],t=hs(n.options);return t&&e.push(t),new bn(e)}const Na={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=he(e,{options:X.optional.custom(Wn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ys,constraint:n=>Fa(n.params),writer:n=>En},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&At(s,gn);return c?new wn(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new $n(e,{parser:C=>C,props:ee.fromObject({formatter:ls}),value:t,viewProps:n.viewProps})}},Mn={monitor:{defaultInterval:200,defaultLineCount:3}},zr=q("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(zr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(zr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class ks{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Lr=q("sgl");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Lr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Lr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ms{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Wa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=he(e,{lineCount:X.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s},controller:n=>{var e;return n.value.rawValue.length===1?new Ms(n.document,{formatter:qs,value:n.value,viewProps:n.viewProps}):new ks(n.document,{formatter:qs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Wt=q("grl");class ja{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Wt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(x,"svg");s.classList.add(Wt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(x,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const C=e.createElement("div");C.classList.add(Wt("t"),q("tt")()),this.element.appendChild(C),this.tooltipElem_=C,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),C=[];this.value.rawValue.forEach((Oe,Fe)=>{if(Oe===void 0)return;const en=Ze(Fe,0,t,0,e.width),Bn=Ze(Oe,s,c,e.height,0);C.push([en,Bn].join(","))}),this.lineElem_.setAttributeNS(null,"points",C.join(" "));const A=this.tooltipElem_,J=this.value.rawValue[this.cursor_.rawValue];if(J===void 0){A.classList.remove(Wt("t","a"));return}const xe=Ze(this.cursor_.rawValue,0,t,0,e.width),Pe=Ze(J,s,c,e.height,0);A.style.left=`${xe}px`,A.style.top=`${Pe}px`,A.textContent=`${this.formatter_(J)}`,A.classList.contains(Wt("t","a"))||(A.classList.add(Wt("t","a"),Wt("t","in")),r(A),A.classList.remove(Wt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=Q(-1),this.view=new ja(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Yt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Bs(n){return"format"in n&&!G(n.format)?n.format:dt(2)}function Ka(n){var e;return n.value.rawValue.length===1?new Ms(n.document,{formatter:Bs(n.params),value:n.value,viewProps:n.viewProps}):new ks(n.document,{formatter:Bs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ya(n){var e,t,s;return new Ha(n.document,{formatter:Bs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,props:ee.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Ir(n){return"view"in n&&n.view==="graph"}const Za={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=X,s=he(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Ir(n)?64:1,reader:n=>Ks},controller:n=>Ir(n.params)?Ya(n):Ka(n)},Xa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=X,s=he(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ys},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ks(n.document,{formatter:ls,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Mn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ms(n.document,{formatter:ls,value:t,viewProps:n.viewProps})}};function Qa(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=X,C={target:e.target,initialValue:s.initialValue,params:s.params},A=n.binding.reader(C),J=n.binding.constraint?n.binding.constraint(C):void 0,xe=Q(A(s.initialValue),{constraint:J,equals:n.binding.equals}),Pe=new ln({reader:A,target:e.target,value:xe,writer:n.binding.writer(C)}),Oe=c.optional.boolean(e.params.disabled).value,Fe=c.optional.boolean(e.params.hidden).value,en=n.controller({constraint:J,document:e.document,initialValue:s.initialValue,params:s.params,value:Pe.value,viewProps:f.create({disabled:Oe,hidden:Fe})});return new $e(e.document,{binding:Pe,blade:Me(),props:ee.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:en})}function Ja(n,e){return e===0?new Dt:new an(n,e??Mn.monitor.defaultInterval)}function el(n,e){var t,s,c;const C=X,A=n.accept(e.target.read(),e.params);if(G(A))return null;const J={target:e.target,initialValue:A.initialValue,params:A.params},xe=n.binding.reader(J),Pe=(s=(t=C.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(A.params))!==null&&s!==void 0?s:1,Oe=C.optional.number(e.params.interval).value,Fe=new ki({reader:xe,target:e.target,ticker:Ja(e.document,Oe),value:vn(Pe)}),en=C.optional.boolean(e.params.disabled).value,Bn=C.optional.boolean(e.params.hidden).value,Tn=n.controller({document:e.document,params:A.params,value:Fe.value,viewProps:f.create({disabled:en,hidden:Bn})});return new qe(e.document,{binding:Fe,blade:Me(),props:ee.fromObject({label:"label"in e.params?(c=C.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Tn})}class tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new K({context:{key:t.key},type:"nomatchingcontroller"});const C=this.pluginsMap_.inputs.reduce((A,J)=>A??Qa(J,{document:e,target:t,params:s}),null);if(C)return C;throw new K({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((C,A)=>C??el(A,{document:e,params:s,target:t}),null);if(c)return c;throw new K({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,C)=>c??on(C,{document:e,params:t}),null);if(!s)throw new K({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof $e)return new Ke(e);if(e instanceof qe)return new rt(e);if(e instanceof j)return new vt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw K.shouldNeverHappen();return t}}function nl(){const n=new tl;return[ll,Ia,Oa,Na,ka,ya,xa,va,mo,Wa,Xa,Za,ve,Re,mt,Vt].forEach(e=>{n.register(e)}),n}function sl(n){return $t.isObject(n)?new $t(n.x,n.y):new $t}function rl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function It(n,e){if(!n)return;const t=[],s=kr(n,e);s&&t.push(s);const c=Mr(n);return c&&t.push(c),new bn(t)}function il(n,e){return new Nt({assembly:Br,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y)]})}function Gr(n,e){const[t,s]=n?Ca(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=un(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ol(n,e){const t=e instanceof Nt?e.components[0]:void 0,s=e instanceof Nt?e.components[1]:void 0,c=Gr(t,n.x),C=Gr(s,n.y);return Math.max(c,C)}function Ur(n,e){return{baseStep:un(e),constraint:e,textProps:ee.fromObject({draggingScale:dn(e,n),formatter:dt(jn(e,n))})}}function al(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ll={id:"input-point2d",type:"input",accept:(n,e)=>{if(!$t.isObject(n))return null;const t=X,s=he(e,{expanded:t.optional.boolean,picker:t.optional.custom(Js),x:t.optional.custom(Ot),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sl,constraint:n=>il(n.params,n.initialValue),equals:$t.equals,writer:n=>rl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Nt))throw K.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,C="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[Ur(t.rawValue.x,s.components[0]),Ur(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:al(n.params),maxValue:ol(t.rawValue,s),parser:zt,pickerLayout:C??"popup",value:t,viewProps:n.viewProps})}};class Rr extends w{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Vr extends w{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Or extends w{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const cl=function(){return{id:"list",type:"blade",accept(n){const e=X,t=he(n,{options:e.required.custom(Wn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new gn(er(n.params.options)),t=Q(n.params.value,{constraint:e}),s=new wn(n.document,{props:new ee({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new ge(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof ge)||!(n.controller.valueController instanceof wn)?null:new Rr(n.controller)}}}();function ul(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function dl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class pl extends bt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find($e).map(s=>s.binding);dl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find($e).map(t=>t.binding.target);return ul(e)}refresh(){this.controller_.rackController.rack.find($e).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()})}}class hl extends De{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const fl={id:"slider",type:"blade",accept(n){const e=X,t=he(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new cn({max:n.params.max,min:n.params.min}),C=new ps(n.document,{baseStep:1,parser:zt,sliderProps:new ee({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:ee.fromObject({draggingScale:dn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ro}),value:Q(s,{constraint:c}),viewProps:n.viewProps});return new ge(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:C})},api(n){return!(n.controller instanceof ge)||!(n.controller.valueController instanceof ps)?null:new Vr(n.controller)}},_l=function(){return{id:"text",type:"blade",accept(n){const e=X,t=he(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new $n(n.document,{parser:n.params.parse,props:ee.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:Q(n.params.value),viewProps:n.viewProps});return new ge(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof ge)||!(n.controller.valueController instanceof $n)?null:new Or(n.controller)}}}();function ml(n){const e=n.createElement("div");return e.classList.add(q("dfw")()),n.body&&n.body.appendChild(e),e}function Fr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends pl{constructor(e){var t,s;const c=e??{},C=(t=c.document)!==null&&t!==void 0?t:l(),A=nl(),J=new hl(C,{expanded:c.expanded,blade:Me(),props:ee.fromObject({title:c.title}),viewProps:f.create()});super(J,A),this.pool_=A,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:ml(C),this.containerElem_.appendChild(this.element),this.doc_=C,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw K.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw K.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Fr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Fr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[fl,cl,Vt,_l]})}}const bl=new S("3.1.10");h.BladeApi=w,h.ButtonApi=ce,h.FolderApi=bt,h.InputBindingApi=Ke,h.ListApi=Rr,h.MonitorBindingApi=rt,h.Pane=vl,h.SeparatorApi=Ee,h.SliderApi=Vr,h.TabApi=Un,h.TabPageApi=mn,h.TextApi=Or,h.TpChangeEvent=M,h.VERSION=bl,Object.defineProperty(h,"__esModule",{value:!0})})})(Ds,Ds.exports);var ql=Ds.exports;const Wl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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

@fragment
fn fs_tail(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a, sh.a);
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
}`,hi=32,As=1,zs=2,Qr=4,Ls=8,fi=4,tc=7<<fi,Jr=128,ei=256,nc=0,jt=new ArrayBuffer(hi),lt={canvas_size:new Uint32Array(jt,0,2),accel_flags:new Uint32Array(jt,8,1),feature_mode:new Uint32Array(jt,12,1),gaussian_scaling:new Float32Array(jt,16,1),sh_bias:new Float32Array(jt,20,1),color_K:new Uint32Array(jt,24,1),walltime:new Float32Array(jt,28,1)};function sc(o){lt.canvas_size[0]=o.width>>>0,lt.canvas_size[1]=o.height>>>0,lt.accel_flags[0]=(o.accel_flags??As|zs)>>>0,lt.feature_mode[0]=(o.feature_mode??nc)>>>0,lt.gaussian_scaling[0]=o.gaussian_scaling??1,lt.sh_bias[0]=o.sh_bias??.5,lt.color_K[0]=(o.color_K??0)>>>0,lt.walltime[0]=o.walltime??0}function _i(o,a){o.queue.writeBuffer(a,0,jt)}function rs(o,a,h){h&&o&&a&&_i(o,a)}function Qn(o,a,h,S,w=!0){lt.canvas_size[0]=o>>>0,lt.canvas_size[1]=a>>>0,rs(h??null,S??null,w)}function ti(o,a,h,S=!0){lt.gaussian_scaling[0]=o,rs(a??null,h??null,S)}function ni(o,a,h,S=!0){lt.sh_bias[0]=o,rs(a??null,h??null,S)}function nn(o,a,h,S=!0){let w=lt.accel_flags[0];if(o.oac!==void 0&&(w=o.oac?w|As:w&~As),o.spr!==void 0&&(w=o.spr?w|zs:w&~zs),o.bfc!==void 0&&(w=o.bfc?w|Qr:w&~Qr),o.meshCull!==void 0&&(w=o.meshCull?w|Ls:w&~Ls),o.meshSampleMode!==void 0){const k=(o.meshSampleMode&7)<<fi;w=w&~tc|k}o.meshSilhouetteCull!==void 0&&(w=o.meshSilhouetteCull?w|Jr:w&~Jr),o.meshInvertDepth!==void 0&&(w=o.meshInvertDepth?w|ei:w&~ei),lt.accel_flags[0]=w>>>0,rs(a??null,h??null,S)}const rc=256,ic=hi,oc=8,ac=96,lc=12,Rs=8,Gt=1<<Rs,sn=256,ts=32/Rs,cc=0,si=ts&1;function ri(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function uc(o,a){const h=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[h]}),w=k=>o.createComputePipeline({layout:S,compute:{module:a,entryPoint:k,constants:{WG_SIZE:sn}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:h}}function dc(o,a,h){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[S]}),M=o.createPipelineLayout({bindGroupLayouts:[w]}),F=[];for(let T=0;T<ts;T++){const D={PASS_ID:T+cc,RS_RADIX_LOG2:Rs,RS_RADIX_SIZE:Gt};F.push({localHistogram:o.createComputePipeline({layout:k,compute:{module:a,entryPoint:"local_histogram_pass",constants:D}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:h,entryPoint:"scatter_elements",constants:D}})})}return{passes:F,localHistogramBindGroupLayout:S,scatterBindGroupLayout:w}}function pc(o){const a=o.createShaderModule({label:"local histogram",code:Jl}),h=o.createShaderModule({label:"scatter",code:Ql}),S=o.createShaderModule({label:"blelloch prefix",code:ec}),w=uc(o,S),k=dc(o,a,h);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function hc(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=a.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(k,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:h,sampler:S,rectsBuffer:w,texParamsBuffer:k,meta:M}}class fc{constructor(a,h,S,w,k,M=null,F=null){O(this,"device");O(this,"pc");O(this,"presentationFormat");O(this,"camera_buffer");O(this,"render_settings_buffer");O(this,"draw_indirect_buffer");O(this,"splat_2d_buffer");O(this,"querySet");O(this,"resolveBuffer");O(this,"resultBuffer");O(this,"queriesPerFrame",oc);O(this,"queryCapacityFrames",200);O(this,"sort_prefixBindGroup");O(this,"sort_pipelines");O(this,"sort_localHistogramBindGroups");O(this,"sort_scatterBindGroups");O(this,"lastFrame",0);O(this,"frameCount",0);O(this,"preprocessPipeline");O(this,"cullPipeline");O(this,"renderPipeline");O(this,"indirectPipeline");O(this,"htEnabled",!1);O(this,"renderShaderModule");O(this,"betaKernel",1);O(this,"renderSettingsBgl");O(this,"renderSplatsBgl");O(this,"atlasBgl");O(this,"htCorePipeline",null);O(this,"htTailPipeline",null);O(this,"htCompositePipeline",null);O(this,"htCompositeBgl",null);O(this,"htCompositeBindGroup",null);O(this,"htDepthTexture",null);O(this,"htDepthView",null);O(this,"htCoreTexture",null);O(this,"htCoreView",null);O(this,"htAccumTexture",null);O(this,"htAccumView",null);O(this,"htTransTexture",null);O(this,"htTransView",null);O(this,"htW",0);O(this,"htH",0);O(this,"sort_info_buffer");O(this,"sort_ping_pong");O(this,"crsBg");O(this,"gsBg");O(this,"cullBg2");O(this,"preprocessBg1");O(this,"renderSplatsBindGroup");O(this,"renderSettingsBindGroup");O(this,"atlasBindGroup");O(this,"indirectBindGroup");O(this,"sh_solvers_buffer");O(this,"mesh");O(this,"meshDepthPipeline",null);O(this,"meshDepthCameraBindGroup",null);O(this,"meshDepthMarginBindGroup",null);O(this,"meshMarginBuffer",null);O(this,"meshDepthTexture",null);O(this,"meshDepthView",null);O(this,"meshCullBindGroupLayout");O(this,"meshCullBindGroup");O(this,"meshCullWidth",0);O(this,"meshCullHeight",0);O(this,"meshStubTexture");O(this,"meshStubView");O(this,"bfcParamsBuffer");O(this,"meshOverlayPipeline",null);O(this,"meshOverlayEnabled",!1);O(this,"bgColor",[0,0,0,0]);O(this,"showPerfDialogNext",!1);O(this,"requestReorderNextFrame",!1);O(this,"reorderInFlight",!1);O(this,"downloadOnceNextRead",!1);O(this,"downloadOnceFileName","fps_metrics");O(this,"allFrameTimes",[]);O(this,"lastStageBreakdownMs",null);O(this,"timeQueryEnabled");O(this,"atlas");O(this,"atlasParamsBuffer");this.mesh=F;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&Pt("⏰ using timestamp-query"),this.pc=a,this.device=h,this.presentationFormat=S,this.camera_buffer=w,this.atlas=M??hc(h),this.atlasParamsBuffer=h.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),h.addEventListener("uncapturederror",ee=>{console.error("A WebGPU error was not captured:",ee.error)}),this._setupTimestampQueries(),this._setupBuffers();const D=(Math.floor((this.pc.num_points+sn-1)/sn)+1)*sn,U=Math.ceil(D/sn);console.log(`keys count adjusted: ${D}`),console.log(`key size: ${this.pc.num_points}`);const G=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=pc(h);const Y=[ri(D,h),ri(D,h)],V=h.createBuffer({label:"workgroup histograms",size:U*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=h.createBuffer({label:"workgroup prefixes",size:U*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=h.createBuffer({label:"digit base",size:Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=Math.ceil(U/sn),ce=Math.ceil($/sn),H=h.createBuffer({label:"prefix l0 sums",size:$*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=h.createBuffer({label:"prefix l0 offsets",size:$*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=h.createBuffer({label:"prefix l1 sums",size:ce*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=h.createBuffer({label:"prefix l1 offsets",size:ce*Gt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:W}},{binding:3,resource:{buffer:H}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:q}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:K}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y[0].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y[1].sort_depths_buffer}},{binding:2,resource:{buffer:V}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:Y[0].sort_depths_buffer}},{binding:3,resource:{buffer:Y[1].sort_depths_buffer}},{binding:4,resource:{buffer:Y[0].sort_indices_buffer}},{binding:5,resource:{buffer:Y[1].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:Y[1].sort_depths_buffer}},{binding:3,resource:{buffer:Y[0].sort_depths_buffer}},{binding:4,resource:{buffer:Y[1].sort_indices_buffer}},{binding:5,resource:{buffer:Y[0].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]})],this.sort_info_buffer=G,this.sort_ping_pong=Y;const ne=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),pe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ie=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ne,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:pe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ie,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Ce=this.device.createShaderModule({code:Kl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Ce,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Ue=this.device.createShaderModule({code:Yl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ne,pe,ie,this.meshCullBindGroupLayout]}),compute:{module:Ue,entryPoint:"surfel_cull"}}),this.mesh!==null){const ee=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:ee,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const re=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:re,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const me=this.device.createShaderModule({code:Zl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[ee,re]}),vertex:{module:me,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Le=this.device.createShaderModule({code:Wl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ne,de]}),compute:{module:Le,entryPoint:"preprocess"}});const Ge=this.device.createShaderModule({code:jl});Ge.getCompilationInfo().then(ee=>{ee.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ee.messages.forEach(re=>{(re.type==="error"?console.error:re.type==="warning"?console.warn:console.log)(`${re.type} (line ${re.lineNum}:${re.linePos}): ${re.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Be=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),be=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ye=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Q=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Be,be,ye]}),vertex:{module:Ge,entryPoint:"vs_main"},fragment:{module:Ge,entryPoint:"fs_main",constants:{BETA_KERNEL:Q},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(ee=>{ee?console.error("[render_2dgs] pipeline create validation error:",ee.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Be,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:be,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[si].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ye,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}}]}),this.renderShaderModule=Ge,this.betaKernel=Q,this.renderSettingsBgl=Be,this.renderSplatsBgl=be,this.atlasBgl=ye}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){nn({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,h){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,h[0],h[1],h[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),h=new Uint32Array(a),S=new Float32Array(a);h[0]=this.atlas.meta.width|0,h[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,S[3]=0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureHtResources(a,h){var k,M,F,T;if(this.htCorePipeline===null){const D=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:D,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:D,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}});const U=this.device.createShaderModule({label:"ht_composite",code:Hl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:U,entryPoint:"vs_main"},fragment:{module:U,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===h)return;(k=this.htDepthTexture)==null||k.destroy(),(M=this.htCoreTexture)==null||M.destroy(),(F=this.htAccumTexture)==null||F.destroy(),(T=this.htTransTexture)==null||T.destroy();const S={width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},w=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:S,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:S,format:"rgba16float",usage:w}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:S,format:"rgba16float",usage:w}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:S,format:"r16float",usage:w}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htW=a,this.htH=h}ensureMeshDepthTexture(a,h){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===h||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=h))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&di(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a)}async debugReadSortedIndices(a=30){const h=Math.max(0,Math.min(a,this.pc.num_points)),S=h*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[si].sort_indices_buffer,0,w,0,S),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(M)),w.unmap()}frame(a,h,S=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(lt.accel_flags[0]&Ls)!==0){const T=lt.canvas_size[0],D=lt.canvas_size[1];this.ensureMeshDepthTexture(T,D);const U={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=a.beginRenderPass(U);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setVertexBuffer(1,this.mesh.normalBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const D=a.beginComputePass(T);D.setPipeline(this.cullPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.gsBg),D.setBindGroup(2,this.cullBg2),D.setBindGroup(3,this.meshCullBindGroup);const U=Math.ceil(this.pc.num_points/rc);D.dispatchWorkgroups(U,1,1),D.end()}{const T=a.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const D=a.beginComputePass(T);D.setPipeline(this.preprocessPipeline),D.setBindGroup(0,this.crsBg),D.setBindGroup(1,this.preprocessBg1),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),D.end()}if(this.htEnabled){const T=lt.canvas_size[0],D=lt.canvas_size[1];this.ensureHtResources(T,D);{const U={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};M&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4,endOfPassWriteIndex:k+5});const G=a.beginRenderPass(U);G.setPipeline(this.htCorePipeline),G.setBindGroup(0,this.renderSettingsBindGroup),G.setBindGroup(1,this.renderSplatsBindGroup),G.setBindGroup(2,this.atlasBindGroup),G.drawIndirect(this.draw_indirect_buffer,0),G.end()}{const U={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"load",depthStoreOp:"store"}};M&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6});const G=a.beginRenderPass(U);G.setPipeline(this.htTailPipeline),G.setBindGroup(0,this.renderSettingsBindGroup),G.setBindGroup(1,this.renderSplatsBindGroup),G.setBindGroup(2,this.atlasBindGroup),G.drawIndirect(this.draw_indirect_buffer,0),G.end()}{const U={label:"ht_composite",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+7});const G=a.beginRenderPass(U);G.setPipeline(this.htCompositePipeline),G.setBindGroup(0,this.htCompositeBindGroup),G.draw(3),G.end()}}else{for(let T=0;T<ts;T++){const D=T&1,U=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[D],Y=this.sort_scatterBindGroups[D];{const V={label:`upsweep_round${T}`};M&&T==0&&(V.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const W=a.beginComputePass(V);W.setPipeline(U.localHistogram),W.setBindGroup(0,G),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}{const V=a.beginComputePass({label:`prefix_round${T} - l0TileScan`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - l1ScanSums`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,Gt,1),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - addL1ToL0`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - addL0ToElems`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),V.end()}{const V=a.beginComputePass({label:`prefix_round${T} - computeDigitBase`});V.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),V.setBindGroup(0,this.sort_prefixBindGroup),V.dispatchWorkgroups(1,1,1),V.end()}{const V={label:`scatter_round${T}`};M&&T==ts-1&&(V.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const W=a.beginComputePass(V);W.setPipeline(U.scatterElements),W.setBindGroup(0,Y),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}}{const T={label:"render",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const D=a.beginRenderPass(T);D.setPipeline(this.renderPipeline),D.setBindGroup(0,this.renderSettingsBindGroup),D.setBindGroup(1,this.renderSplatsBindGroup),D.setBindGroup(2,this.atlasBindGroup),D.drawIndirect(this.draw_indirect_buffer,0),D.end()}}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const U=this.device.createShaderModule({code:Xl}),G=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),Y=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[G,Y]}),vertex:{module:U,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:U,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:h,loadOp:"load",storeOp:"store"}]},D=a.beginRenderPass(T);D.setPipeline(this.meshOverlayPipeline),D.setBindGroup(0,this.meshDepthCameraBindGroup),D.setBindGroup(1,this.meshDepthMarginBindGroup),D.setVertexBuffer(0,this.mesh.vertexBuffer),D.setVertexBuffer(1,this.mesh.normalBuffer),D.setIndexBuffer(this.mesh.indexBuffer,"uint32"),D.drawIndexed(this.mesh.numIndices),D.end()}this.frameCount++}async readPerfMetrics(a){const h=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),F=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let D=0;for(let ce=0;ce<M;ce++){const H=(F+ce)%this.queryCapacityFrames,Z=H*this.queriesPerFrame;let q=!0;for(let ae=0;ae<w.length;ae++){const[ne,pe,ie]=w[ae];if(k[Z+ie]===0n||k[Z+pe]===0n||k[Z+pe]<k[Z+ie]){q=!1;break}}if(!q){!h&&H%60===0&&console.debug("[timestamp] frame slot",H,"contains unwritten (0) timestamps, skipped in stats");continue}D++;for(let ae=0;ae<w.length;ae++){const[ne,pe,ie]=w[ae],de=Number(k[Z+ie]),Ce=Number(k[Z+pe]);T[ae].push((Ce-de)/1e6)}}if(D===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const U=[];let G=0,Y=0,V=0;for(let ce=0;ce<w.length;ce++){const H=w[ce][0],Z=T[ce];let q=0;if(H==="Total"){const ae=this.allFrameTimes;q=ae.reduce((ie,de)=>ie+de,0)/ae.length;const ne=[...ae].sort((ie,de)=>ie-de);G=ne[Math.floor(ne.length*.99)]||0;const pe=ae.reduce((ie,de)=>ie+Math.pow(de-q,2),0)/ae.length;Y=Math.sqrt(pe),V=q}else q=Z.reduce((ae,ne)=>ae+ne,0)/Z.length;U.push([H,q])}this.lastFrame+=this.frameCount,this.frameCount=0;const W=Object.fromEntries(U);this.lastStageBreakdownMs={cull:W.Culling??0,preprocess:W.Preprocess??0,sort:W.Sort??0,render:W.Render??0,total:W.Total??0};const $=`[TIMESTAMP - ${this.constructor.name}]
`+U.map(([ce,H])=>`${ce}: ${H.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${Y.toFixed(3)}ms
Total AVG: ${V.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log($),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ce=`Stage,ms
`,H=U.map(([ae,ne])=>`${ae},${ne.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(ce+H),q=document.createElement("a");q.href=Z,q.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(q),q.click(),q.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert($)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ic,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),h=a?a.width:1,S=a?a.height:1;sc({width:h,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),_i(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:zn(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:zn(this.pc.num_points*lc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const h=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,S=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function _c(o,a){return 2*Math.atan(a/(2*o))}function mc(o,a,h,S){const w=Math.tan(S/2),k=Math.tan(h/2),M=w*o,F=-M,T=k*o,D=-T,U=ut.create();return U[0]=2*o/(T-D),U[5]=-2*o/(M-F),U[2]=(T+D)/(T-D),U[6]=(M+F)/(M-F),U[14]=1,U[10]=a/(a-o),U[11]=-(a*o)/(a-o),ut.transpose(U,U),U}async function vc(o){Pt(`loading scene camera file... : ${o}`);const h=await(await fetch(o)).json();return Pt(`loaded cameras count: ${h.length}`),h.map(S=>{const w=I.clone(S.position),k=xt.create(...S.rotation.flat()),M=k[0],F=k[4],T=k[8],D=k[1],U=k[5],G=k[9],Y=k[2],V=k[6],W=k[10];M*(U*W-G*V)-F*(D*W-G*Y)+T*(D*V-U*Y)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const $=ut.fromMat3(k);return{position:w,rotation:$,img_name:S.img_name,id:S.id}})}const bc=4*2,gc=4*16,mi=4*gc+2*bc;function wc(o){return o.createBuffer({label:"camera uniform",size:mi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const tn=new Float32Array(mi/Float32Array.BYTES_PER_ELEMENT),ns=class ns{constructor(a,h){O(this,"uniform_buffer");O(this,"position",I.create());O(this,"rotation",ut.create());O(this,"fovY",45/180*Math.PI);O(this,"fovX");O(this,"focal",Kr.create());O(this,"viewport",Kr.create());O(this,"view_matrix",ut.identity());O(this,"view_inv_matrix",ut.identity());O(this,"proj_matrix",ut.identity());O(this,"proj_inv_matrix",ut.identity());O(this,"_negPos",I.create());O(this,"look",I.create(0,0,1));O(this,"up",I.create(0,1,0));O(this,"right",I.create(1,0,0));this.canvas=a,this.device=h,this.uniform_buffer=wc(h),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=_c(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=mc(.01,100,this.fovX,this.fovY),ut.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ut.copy(this.rotation,this.view_matrix),ut.translate(this.view_matrix,this._negPos,this.view_matrix),ut.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(ns.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let a=0;tn.set(this.view_matrix,a),a+=16,tn.set(this.view_inv_matrix,a),a+=16,tn.set(this.proj_matrix,a),a+=16,tn.set(this.proj_inv_matrix,a),a+=16,tn.set(this.viewport,a),a+=2,tn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,tn)}set_preset(a){I.copy(a.position,this.position),ut.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};O(ns,"Z_AXIS",I.create(0,0,1));let Is=ns;const xc=I.create(1,0,0),yc=I.create(0,1,0);function Pc(o,a){const h=o[0],S=o[4],w=o[8],k=o[1],M=o[5],F=o[9],T=o[2],D=o[6],U=o[10],G=h+M+U;let Y,V,W,K;if(G>0){const $=.5/Math.sqrt(G+1);Y=.25/$,V=(D-F)*$,W=(w-T)*$,K=(k-S)*$}else if(h>M&&h>U){const $=2*Math.sqrt(1+h-M-U);Y=(D-F)/$,V=.25*$,W=(S+k)/$,K=(w+T)/$}else if(M>U){const $=2*Math.sqrt(1+M-h-U);Y=(w-T)/$,V=(S+k)/$,W=.25*$,K=(F+D)/$}else{const $=2*Math.sqrt(1+U-h-M);Y=(k-S)/$,V=(w+T)/$,W=(F+D)/$,K=.25*$}return a[0]=V,a[1]=W,a[2]=K,a[3]=Y,a}class Sc{constructor(a){O(this,"element");O(this,"enabled",!0);O(this,"center",I.create(0,0,0));O(this,"up",I.create(0,1,0));O(this,"rotation",[0,0]);O(this,"shift",[0,0]);O(this,"scroll",0);O(this,"speed",.1);O(this,"sensitivity",.08);O(this,"leftPressed",!1);O(this,"rightPressed",!1);O(this,"leftDragPans",!1);O(this,"lastX",0);O(this,"lastY",0);O(this,"touches",new Map);O(this,"lastTouchCenter",null);O(this,"lastPinchDistance",null);O(this,"lastTwoFingerAngle",null);O(this,"lastTouchCount",0);O(this,"roll",0);O(this,"_dir",I.create());O(this,"_right",I.create());O(this,"_upCam",I.create());O(this,"_scratch",I.create());O(this,"_qY",pt.create());O(this,"_qX",pt.create());O(this,"_qRot",pt.create());O(this,"_qLocal",pt.create());O(this,"_qWorldToCam",pt.create());O(this,"_scratchMat3",xt.create());O(this,"bboxMin",null);O(this,"bboxMax",null);O(this,"anchor",I.create(0,0,0));O(this,"downCallback",a=>{var h,S,w,k;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(S=(h=a.target)==null?void 0:h.setPointerCapture)==null||S.call(h,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(k=(w=a.target)==null?void 0:w.setPointerCapture)==null||k.call(w,a.pointerId),a.preventDefault())}});O(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const h=a.pageX-this.lastX,S=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=S)});O(this,"upCallback",a=>{var h,S,w,k;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(S=(h=a.target)==null?void 0:h.releasePointerCapture)==null||S.call(h,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=a.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,a.pointerId),a.preventDefault()});O(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let h=a.deltaY;a.deltaMode===1?h*=16:a.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(a){I.copy(a,this.center),I.copy(a,this.anchor)}setOrbitPivot(a){I.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const h=this.camera.rotation;I.set(h[2],h[6],h[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,a,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(I.subtract(this.center,a.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const h=a.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,a.update_buffer()}setBbox(a,h){this.bboxMin=I.create(a[0],a[1],a[2]),this.bboxMax=I.create(h[0],h[1],h[2]);const S=(a[0]+h[0])*.5,w=(a[1]+h[1])*.5,k=(a[2]+h[2])*.5;I.set(S,w,k,this.center),I.set(S,w,k,this.anchor)}resetToCamera(){const a=this.camera.rotation;I.set(a[2],a[6],a[10],this._dir),I.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const F=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],D=this.bboxMax[M]-this.camera.position[M];if(Math.abs(F)>1e-8){const U=T/F,G=D/F;S=Math.max(S,Math.min(U,G)),w=Math.min(w,Math.max(U,G))}else if(T>0||D<0){k=!0;break}}!k&&S<=w&&w>0&&(h=(Math.max(S,0)+w)*.5)}if(h===null||!isFinite(h)||h<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const S=I.dot(this._scratch,this._dir);h=S>.001?S:I.length(this._scratch)}h=Math.max(.1,h),I.scale(this._dir,h,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const S=h.x-this.lastTouchCenter[0],w=h.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[h.x,h.y]}else if(a===2){const h=Array.from(this.touches.values()),S=(h[0].x+h[1].x)*.5,w=(h[0].y+h[1].y)*.5,k=h[1].x-h[0].x,M=h[1].y-h[0].y,F=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const D=S-this.lastTouchCenter[0],U=w-this.lastTouchCenter[1],G=Math.hypot(D,U),Y=Math.abs(F-this.lastPinchDistance);let V=T-this.lastTwoFingerAngle;V>Math.PI&&(V-=2*Math.PI),V<-Math.PI&&(V+=2*Math.PI),G>.5&&(this.shift[1]-=D,this.shift[0]+=U),Y>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(F/this.lastPinchDistance)*10),Math.abs(V)>.0087&&(this.roll+=-V)}this.lastTouchCenter=[S,w],this.lastPinchDistance=F,this.lastTwoFingerAngle=T}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const K=h.rotation;this.up[0]=K[1],this.up[1]=K[5],this.up[2]=K[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const K=h.rotation;I.set(K[2],K[6],K[10],this._scratch),I.normalize(this._scratch,this._scratch),pt.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,S=!0}I.subtract(h.position,this.center,this._dir);let w=I.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*a*10*this.speed);I.scale(this._dir,k/w,this._dir),w=k;const M=h.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const F=I.create(M[1],M[5],M[9]);I.normalize(F,F),I.length(F)<1e-6&&I.set(0,1,0,F);const T=a*this.speed*.1*w,D=this.shift[1]*T,U=-this.shift[0]*T;I.scale(this._right,D,this._scratch),I.add(this.center,this._scratch,this.center),I.add(h.position,this._scratch,h.position),I.scale(F,U,this._scratch),I.add(this.center,this._scratch,this.center),I.add(h.position,this._scratch,h.position);const G=this.rotation[0]*a*this.sensitivity,Y=this.rotation[1]*a*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Y)>1e-5||S){const K=h.rotation;Pc(K,this._qWorldToCam),pt.fromAxisAngle(xc,-Y,this._qX),pt.fromAxisAngle(yc,-G,this._qY),pt.multiply(this._qX,this._qY,this._qLocal),pt.normalize(this._qLocal,this._qLocal),pt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),pt.normalize(this._qWorldToCam,this._qWorldToCam),xt.fromQuat(this._qWorldToCam,this._scratchMat3),ut.fromMat3(this._scratchMat3,h.rotation);const $=h.rotation,ce=$[2],H=$[6],Z=$[10];h.position[0]=this.center[0]-ce*w,h.position[1]=this.center[1]-H*w,h.position[2]=this.center[2]-Z*w,this.up[0]=$[1],this.up[1]=$[5],this.up[2]=$[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,h.position);h.update_buffer();const W=Math.pow(.8,a*60);this.rotation[0]*=W,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=W,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=W,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=W,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=W,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function vi(o){const a=I.create();for(const h of o)I.add(a,h,a);return I.scale(a,1/Math.max(o.length,1),a)}function bi(o,a){const h=xt.create();xt.inverse(o,h);const S=I.create();return S[0]=h[0]*a[0]+h[4]*a[1]+h[8]*a[2],S[1]=h[1]*a[0]+h[5]*a[1]+h[9]*a[2],S[2]=h[2]*a[0]+h[6]*a[1]+h[10]*a[2],S}function Cc(o){const a=o.slice(),h=[1,0,0,0,1,0,0,0,1],S=(T,D)=>a[T*3+D],w=(T,D,U)=>{a[T*3+D]=U},k=(T,D)=>h[T*3+D],M=(T,D,U)=>{h[T*3+D]=U};for(let T=0;T<30;T++){let D=0,U=1,G=Math.abs(S(0,1));if(Math.abs(S(0,2))>G&&(D=0,U=2,G=Math.abs(S(0,2))),Math.abs(S(1,2))>G&&(D=1,U=2,G=Math.abs(S(1,2))),G<1e-12)break;const Y=S(D,D),V=S(U,U),W=S(D,U);let K;Math.abs(Y-V)<1e-30?K=Math.PI/4*Math.sign(W):K=.5*Math.atan2(2*W,Y-V);const $=Math.cos(K),ce=Math.sin(K);for(let H=0;H<3;H++){const Z=S(H,D),q=S(H,U);w(H,D,$*Z+ce*q),w(H,U,-ce*Z+$*q)}for(let H=0;H<3;H++){const Z=S(D,H),q=S(U,H);w(D,H,$*Z+ce*q),w(U,H,-ce*Z+$*q)}for(let H=0;H<3;H++){const Z=k(H,D),q=k(H,U);M(H,D,$*Z+ce*q),M(H,U,-ce*Z+$*q)}}const F=[];for(let T=0;T<3;T++)F.push({val:S(T,T),vec:I.create(k(0,T),k(1,T),k(2,T))});return F.sort((T,D)=>D.val-T.val),{vals:[F[0].val,F[1].val,F[2].val],vecs:[F[0].vec,F[1].vec,F[2].vec]}}function Ec(o,a){const h=vi(o);let S=0,w=0,k=0,M=0,F=0,T=0;for(const W of o){const K=W[0]-h[0],$=W[1]-h[1],ce=W[2]-h[2];S+=K*K,w+=K*$,k+=K*ce,M+=$*$,F+=$*ce,T+=ce*ce}const D=[S,w,k,w,M,F,k,F,T],{vecs:U}=Cc(D);let G=U[0],Y=U[1],V=U[2];return I.dot(V,a)<0&&(I.scale(V,-1,V),I.scale(Y,-1,Y)),{centroid:h,normal:V,u:G,v:Y}}function kc(o){let a=0,h=0,S=0,w=0,k=0,M=0,F=0,T=0,D=0;for(const[$,ce]of o){const H=-2*$,Z=-2*ce,q=1,ae=-($*$+ce*ce);a+=H*H,h+=H*Z,S+=H*q,w+=Z*Z,k+=Z*q,M+=q*q,F+=H*ae,T+=Z*ae,D+=q*ae}const U=xt.create(a,h,S,h,w,k,S,k,M),G=bi(U,I.create(F,T,D)),Y=G[0],V=G[1],W=G[2],K=Y*Y+V*V-W;return{center:[Y,V],radius:Math.sqrt(Math.max(K,1e-12))}}function Mc(o,a){let h=0,S=0,w=0,k=0,M=0,F=0,T=0,D=0,U=0;for(let Y=0;Y<o.length;Y++){const V=o[Y],W=I.normalize(a[Y],I.create()),K=1-W[0]*W[0],$=-W[0]*W[1],ce=-W[0]*W[2],H=1-W[1]*W[1],Z=-W[1]*W[2],q=1-W[2]*W[2];h+=K,S+=$,w+=ce,k+=H,M+=Z,F+=q,T+=K*V[0]+$*V[1]+ce*V[2],D+=$*V[0]+H*V[1]+Z*V[2],U+=ce*V[0]+Z*V[1]+q*V[2]}const G=xt.create(h,S,w,S,k,M,w,M,F);return bi(G,I.create(T,D,U))}function gi(o,a={}){if(o.length===0)return null;const h=a.tiltDownDeg??8,S=a.radiusScale??1,w=a.alignFirst??!0,k=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(ie=>I.clone(ie.position)),F=o.map(ie=>{const de=ie.rotation;return I.create(de[8],de[9],de[10])}),T=o.map(ie=>{const de=ie.rotation;return I.create(de[4],de[5],de[6])}),D=vi(T),U=I.normalize(I.scale(D,-1,I.create())),{centroid:G,normal:Y,u:V,v:W}=Ec(M,U),K=M.map(ie=>{const de=I.sub(ie,G,I.create());return[I.dot(de,V),I.dot(de,W)]}),{center:$,radius:ce}=kc(K),H=ce*S,Z=I.add(G,I.add(I.scale(V,$[0],I.create()),I.scale(W,$[1],I.create()),I.create()),I.create()),q=Mc(M,F),ae=H*Math.tan(h*Math.PI/180),ne=I.sub(q,I.scale(Y,ae,I.create()),I.create());let pe=0;if(w){const ie=I.sub(M[0],Z,I.create());pe=Math.atan2(I.dot(ie,W),I.dot(ie,V))/(2*Math.PI)%1,pe<0&&(pe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${H.toFixed(2)}, tilt=${h}°, normal=[${Y[0].toFixed(2)}, ${Y[1].toFixed(2)}, ${Y[2].toFixed(2)}], startPhase=${pe.toFixed(3)}`),{center:Z,radius:H,normal:Y,u:V,v:W,lookAt:ne,startPhase:pe,direction:k}}function wi(o,a){const h=(o.startPhase+a*o.direction)*2*Math.PI,S=Math.cos(h),w=Math.sin(h),k=I.add(o.center,I.add(I.scale(o.u,o.radius*S,I.create()),I.scale(o.v,o.radius*w,I.create()),I.create()),I.create()),M=I.normalize(I.sub(o.lookAt,k,I.create())),F=I.cross(M,o.normal,I.create());I.length(F)<1e-6&&I.copy(o.u,F),I.normalize(F,F);const T=I.cross(M,F,I.create());I.normalize(T,T);const D=ut.create();return D[0]=F[0],D[1]=T[0],D[2]=M[0],D[3]=0,D[4]=F[1],D[5]=T[1],D[6]=M[1],D[7]=0,D[8]=F[2],D[9]=T[2],D[10]=M[2],D[11]=0,D[12]=0,D[13]=0,D[14]=0,D[15]=1,{position:k,rotation:D,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Bc(o,a={}){const h=gi(o,a);if(!h)return[];const S=a.numViews??120;return Array.from({length:S},(w,k)=>({...wi(h,k/S),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Tc(o){const a=new Uint8Array(o),h=Math.min(a.byteLength,65536),S=new TextDecoder("ascii").decode(a.subarray(0,h)),w=S.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=S.slice(0,w).split(/\r?\n/).map(re=>re.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const F=M.find(re=>re.startsWith("format"));if(!F||!F.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${F??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},D=[];let U=null;for(const re of M)if(re.startsWith("element ")){const[,me,ze]=re.split(/\s+/);U={name:me,count:parseInt(ze,10),props:[],bytesPerRecord:0,hasList:!1},D.push(U)}else if(re.startsWith("property ")&&U){const me=re.split(/\s+/);if(me[1]==="list"){const ze=me[2],Se=me[3],Te=me[4];U.props.push({name:Te,type:Se,isList:!0,listCountType:ze,listItemType:Se}),U.hasList=!0}else{const ze=me[1],Se=me[2];if(U.props.push({name:Se,type:ze,isList:!1}),T[ze]===void 0)throw new Error(`mesh PLY: unsupported prop type '${ze}'`);U.bytesPerRecord+=T[ze]}}const G=D.find(re=>re.name==="vertex"),Y=D.find(re=>re.name==="face"||re.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!Y)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const V=G.props.find(re=>re.name==="x"),W=G.props.find(re=>re.name==="y"),K=G.props.find(re=>re.name==="z");if(!V||!W||!K)throw new Error("mesh PLY: vertex must have x/y/z");let $=0;const ce=new Map;for(const re of G.props)ce.set(re.name,{off:$,type:re.type}),$+=T[re.type];const H=ce.get("x"),Z=ce.get("y"),q=ce.get("z");if(H.type!==Z.type||H.type!==q.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${H.type}/${Z.type}/${q.type})`);const ae=H.type,ne=ae==="double"||ae==="float64";if(!ne&&ae!=="float"&&ae!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ae}')`);const pe=new Float32Array(G.count*3),ie=new DataView(o),de=k,Ce=G.bytesPerRecord;for(let re=0;re<G.count;re++){const me=de+re*Ce;ne?(pe[re*3+0]=ie.getFloat64(me+H.off,!0),pe[re*3+1]=ie.getFloat64(me+Z.off,!0),pe[re*3+2]=ie.getFloat64(me+q.off,!0)):(pe[re*3+0]=ie.getFloat32(me+H.off,!0),pe[re*3+1]=ie.getFloat32(me+Z.off,!0),pe[re*3+2]=ie.getFloat32(me+q.off,!0))}const Ue=de+G.count*Ce,Le=Y.props.find(re=>re.isList);if(!Le)throw new Error("mesh PLY: face element has no list property");const Ge=T[Le.listCountType],Be=T[Le.listItemType];if(Ge!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ge}`);let be=Ue,ye=0;for(let re=0;re<Y.count;re++){const me=ie.getUint8(be);me===3&&ye++,be+=1+me*Be}const Q=new Uint32Array(ye*3);be=Ue;let ee=0;for(let re=0;re<Y.count;re++){const me=ie.getUint8(be);if(be+=1,me===3)for(let ze=0;ze<3;ze++){const Se=be+ze*Be;let Te;if(Be===4)Te=ie.getUint32(Se,!0);else if(Be===2)Te=ie.getUint16(Se,!0);else if(Be===1)Te=ie.getUint8(Se);else throw new Error(`mesh PLY: unsupported face index size ${Be}`);Q[ee++]=Te}be+=me*Be}return{positions:pe,indices:Q}}function Dc(o){const a=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const h=a.getUint32(0,!0),S=a.getUint32(4,!0),w=h*12,k=S*4;if(o.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${o.byteLength} B)`);const M=new Float32Array(o.slice(8,8+w)),F=new Uint32Array(o.slice(8+w,8+w+k));return{positions:M,indices:F}}function xi(o,a){return(a??"").toLowerCase().endsWith(".ply")?Tc(o):Dc(o)}function Ac(o,a){const h=o.length/3,S=new Float32Array(h*3);for(let w=0;w<a.length;w+=3){const k=a[w]*3,M=a[w+1]*3,F=a[w+2]*3,T=o[k],D=o[k+1],U=o[k+2],G=o[M],Y=o[M+1],V=o[M+2],W=o[F],K=o[F+1],$=o[F+2],ce=G-T,H=Y-D,Z=V-U,q=W-T,ae=K-D,ne=$-U,pe=H*ne-Z*ae,ie=Z*q-ce*ne,de=ce*ae-H*q;S[k]+=pe,S[k+1]+=ie,S[k+2]+=de,S[M]+=pe,S[M+1]+=ie,S[M+2]+=de,S[F]+=pe,S[F+1]+=ie,S[F+2]+=de}for(let w=0;w<h;w++){const k=w*3,M=S[k],F=S[k+1],T=S[k+2],D=Math.sqrt(M*M+F*F+T*T);if(D>1e-12){const U=1/D;S[k]=M*U,S[k+1]=F*U,S[k+2]=T*U}}return S}function yi(o,a){const h=o.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(h,0,a.positions);const S=Ac(a.positions,a.indices),w=o.createBuffer({label:"mesh-cull normal buffer",size:S.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(w,0,S);const k=o.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(k,0,a.indices),{vertexBuffer:h,normalBuffer:w,indexBuffer:k,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function zc(o,a){try{const h=await fetch(a);if(!h.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${h.status}`),null;const S=await h.arrayBuffer(),w=xi(S,a);return console.log(`[mesh-cull] loaded ${a}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),yi(o,w)}catch(h){return console.warn(`[mesh-cull] load error for ${a}:`,h),null}}function Lc(o,a,h){try{const S=xi(a,h);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),yi(o,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const Pi="BITYMI01",Ic=0,Gc=1,Uc=2,Rc=3,Vc=4,Oc=5,Fc=6;function Jn(o){const a=(o&32768)>>15,h=(o&31744)>>10,S=o&1023;return h===0?(a?-1:1)*Math.pow(2,-14)*(S/1024):h===31?S?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,h-15)*(1+S/1024)}function ii(o,a,h,S,w,k){const M=(o-h.width*.5)/S.focal[0],F=-((a-h.height*.5)/S.focal[1]),T=S.rotation,D=T[0],U=T[4],G=T[8],Y=T[1],V=T[5],W=T[9],K=T[2],$=T[6],ce=T[10];let H=M*D+F*Y+K,Z=M*U+F*V+$,q=M*G+F*W+ce;const ae=Math.hypot(H,Z,q)||1;H/=ae,Z/=ae,q/=ae;const ne=S.position[0],pe=S.position[1],ie=S.position[2],de=k*.005,Ce=de*de,Ue=new Uint32Array(w.buffer,w.byteOffset,w.length),Le=w.length/8;let Ge=1/0,Be=0,be=0,ye=0,Q=-1;for(let ee=0;ee<Le;ee++){const re=ee*8,me=w[re+0]-ne,ze=w[re+1]-pe,Se=w[re+2]-ie,Te=me*H+ze*Z+Se*q;if(Te<=0)continue;const X=me-Te*H,he=ze-Te*Z,Ve=Se-Te*q;if(X*X+he*he+Ve*Ve>=Ce||!(Ue[re+7]>>>16&1))continue;const v=Ue[re+5],i=Ue[re+6],f=Jn(v&65535),d=Jn(v>>>16&65535),b=Jn(i&65535),P=Jn(i>>>16&65535),E=Math.hypot(f,d,b,P)||1,x=f/E,r=d/E,m=b/E,u=P/E,p=2*(r*u+x*m),l=2*(m*u-x*r),_=1-2*(r*r+m*m),y=H*p+Z*l+q*_;let g;Math.abs(y)>1e-6?(g=(me*p+ze*l+Se*_)/y,(!isFinite(g)||g<=0)&&(g=Te)):g=Te,g<Ge&&(Ge=g,Be=ne+g*H,be=pe+g*Z,ye=ie+g*q,Q=ee)}return Q<0?null:[Be,be,ye]}function Si(o){const a=new Uint8Array(o),h=new TextDecoder().decode(a.subarray(0,8));if(h!==Pi)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const S=new DataView(o),w=S.getUint32(8,!0),k=12,M=20;let F=null,T=null,D=null,U=null;for(let G=0;G<w;G++){const Y=k+G*M,V=S.getUint32(Y+0,!0),W=Number(S.getBigUint64(Y+4,!0)),K=Number(S.getBigUint64(Y+12,!0)),$=a.slice(W,W+K).buffer;V===Ic||V===Gc||V===Oc?F=$:V===Uc?T=$:V===Rc||V===Vc?D=$:V===Fc&&(U=$)}if(F===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:F,camerasBuffer:T,atlasBuffer:D,meshBuffer:U}}async function Nc(o,a){var M;const h=await fetch(o);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const S=(()=>{const F=h.headers.get("content-length");return F&&parseInt(F,10)||void 0})(),w=(M=h.body)==null?void 0:M.getReader();let k;if(!w)k=await h.arrayBuffer(),a&&a(k.byteLength,S,0);else{const F=[];let T=0,D=performance.now(),U=0;for(;;){const{done:V,value:W}=await w.read();if(V)break;F.push(W),T+=W.byteLength;const K=performance.now();if(K-D>=150&&a){const $=(T-U)/((K-D)/1e3);a(T,S,$),D=K,U=T}}const G=new Uint8Array(T);let Y=0;for(const V of F)G.set(V,Y),Y+=V.byteLength;k=G.buffer,a&&a(T,S,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===Pi?{bundle:Si(k),rawPly:null}:{bundle:null,rawPly:k}}function $c(o){return new Promise(a=>{const h=document.createElement("input");h.type="file",h.accept=o,h.style.display="none",h.onchange=()=>{var S;return a(((S=h.files)==null?void 0:S[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function qc(o,a,h){const S=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const U=await $c(".ply,.bitymi");if(U)if(S&&(S.style.display="none"),U.name.toLowerCase().endsWith(".bitymi")){const G=await U.arrayBuffer(),{pcBuffer:Y}=Si(G),V=new File([Y],U.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),W=await Ts(V,o);a(W)}else{const G=await Ts(U,o);a(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),F=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),D=M.get("mesh_url");F&&(S&&(S.style.display="none"),h(F,T,D))}async function Wc(o,a,h,S){const w=new Is(o,h),k=new Sc(w);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const F="rgba8unorm";a.configure({device:h,format:F,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const D=()=>{w.on_update_canvas(),T!==null&&Qn(o.width,o.height,h,T.render_settings_buffer)};new ResizeObserver(()=>{const L=Math.max(.25,X.render_scale),v=Math.max(1,Math.ceil(L*o.clientWidth)),i=Math.max(1,Math.ceil(L*o.clientHeight));o.width===v&&o.height===i||(o.width=v,o.height=i,D())}).observe(o);let G=0,Y=0;const V=()=>{(o.width!==G||o.height!==Y)&&(G=o.width,Y=o.height,D())},W=new URLSearchParams(window.location.search);let $=W.get("animation")==="1";k.enabled=!$;const ce=W.get("camera_url"),H=W.get("mesh_cull"),Z=H==="1"||H==="true",q=W.get("mesh_normal_margin")??W.get("mesh_margin"),ae=q!==null?Number(q):NaN,ne=Number.isFinite(ae)?ae:0,pe=W.get("mesh_debug"),ie=pe==="1"||pe==="true",de=W.get("bfc"),Ce=de==="1"||de==="true",Ue=W.get("bfc_cos"),Le=Ue!==null?Number(Ue):NaN,Ge=Number.isFinite(Le)?Le:2,Be=W.get("mesh_sample_mode"),be=Be!==null?parseInt(Be,10):NaN,ye=Number.isFinite(be)&&be>=0&&be<=7?be:1,Q=W.get("mesh_silhouette"),ee=Q==="1"||Q==="true",re=W.get("mesh_invert_depth"),me=re==="1"||re==="true",ze=W.get("ht"),Se=ze==="1"||ze==="true",Te=Math.max(1,window.devicePixelRatio||1),X={gaussian_scaling:1,sh_bias:.5,animate:$,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Ce,bfc_cos:Ge,ht:Se,mesh_cull:Z,mesh_margin:ne,mesh_debug:ie,mesh_sample_mode:ye,mesh_silhouette:ee,mesh_invert_depth:me,render_scale:1},he=new ql.Pane({title:"Config",expanded:!0});he.addInput(X,"animate",{label:"Animate"}).on("change",L=>{const v=$;$=L.value,k.enabled=!L.value,!v&&$&&Ve.value&&Ve.value.onAnimateStart(),v&&!$&&Ve.value&&Ve.value.onAnimateStop()}),he.addInput(X,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Ve={value:null};qc(h,L=>B(L,[],null,null),async(L,v,i)=>{let f=v??ce,d,b=null,P=null;const E=L.toLowerCase();if(E.endsWith(".bitymi")||E.includes(".bitymi?")){Us("downloading bundle ...");try{const{bundle:r}=await Nc(L,(u,p,l)=>{const _=u/1048576,y=p?p/(1024*1024):void 0,g=l/(1024*1024),z=p?Math.min(99,Math.floor(u/p*100)):void 0,R=y?`total ${y.toFixed(1)} MB`:"total -- MB",N=y&&z!==void 0?`${_.toFixed(1)} MB downloaded (${z}%)`:`${_.toFixed(1)} MB downloaded`,oe=`${g.toFixed(2)} MB/s`;Ut(`downloading bundle ...
${R}, ${N}
${oe}`)});if(!r)throw new Error("Expected a .bitymi bundle");Ut("parsing PLY ...");const m=new File([r.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(d=await Ts(m,h),!f&&r.camerasBuffer&&(f=URL.createObjectURL(new Blob([r.camerasBuffer],{type:"application/json"}))),r.atlasBuffer){const u=r.atlasBuffer.byteLength/1048576;Ut(`uploading atlas ...
${u.toFixed(1)} MB BC7`);try{const p=Vl(r.atlasBuffer);b=Fl(h,p,!0)}catch(p){console.warn("[atlas] failed to parse/upload atlas:",p)}}r.meshBuffer&&!i&&(Ut("uploading mesh ..."),P=Lc(h,r.meshBuffer,"bundle.mesh"))}catch(r){throw Dn(),r}}else d=await Nl(L,h);i&&(Ut("loading mesh ..."),P=await zc(h,i));const x=f?await vc(f):[];x.length>0&&w.set_preset(x[0]),B(d,x,b,P)});function B(L,v=[],i=null,f=null){const d=[(L.bbox.min[0]+L.bbox.max[0])/2,(L.bbox.min[1]+L.bbox.max[1])/2,(L.bbox.min[2]+L.bbox.max[2])/2];k.setBbox(L.bbox.min,L.bbox.max);const b=.5*Math.sqrt((L.bbox.max[0]-L.bbox.min[0])**2+(L.bbox.max[1]-L.bbox.min[1])**2+(L.bbox.max[2]-L.bbox.min[2])**2);function P(j,fe){const ue=ii(j,fe,o,w,L.surfel_data,b);ue&&(k.setOrbitPivot(ue),console.log(`[pick] orbit pivot → (${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)})`))}function E(){const j=o.width*.5,fe=o.height*.5,ue=ii(j,fe,o,w,L.surfel_data,b);if(!ue)return;const De=w.rotation,Re=De[2],ge=De[6],Ee=De[10],Ne=ue[0]-w.position[0],Ye=ue[1]-w.position[1],ot=ue[2]-w.position[2],mt=Ne*Re+Ye*ge+ot*Ee;mt>0&&k.setOrbitDepth(mt)}if(v.length===0){const j=L.bbox.max[0]-L.bbox.min[0],fe=L.bbox.max[1]-L.bbox.min[1],ue=L.bbox.max[2]-L.bbox.min[2],Re=.5*Math.sqrt(j*j+fe*fe+ue*ue)*.5;I.set(d[0]-Re,d[1]-Re,d[2]-Re,w.position);const ge=I.create(Re,Re,Re);I.normalize(ge,ge);const Ee=I.create(0,1,0),Ne=I.create();I.cross(Ee,ge,Ne),I.normalize(Ne,Ne);const Ye=I.create();I.cross(ge,Ne,Ye);const ot=xt.create(Ne[0],Ye[0],ge[0],Ne[1],Ye[1],ge[1],Ne[2],Ye[2],ge[2]);ut.fromMat3(ot,w.rotation),w.update_buffer()}k.setCenter(I.create(L.centroid[0],L.centroid[1],L.centroid[2]));const x=new fc(L,h,F,w.uniform_buffer,S,i,f);T=x,Qn(o.width,o.height,h,x.render_settings_buffer),X.atlas_enabled=i!==null,f===null&&(X.mesh_cull=!1),x.setMeshCullEnabled(X.mesh_cull),x.setMeshMargin(X.mesh_margin),f===null&&(X.mesh_debug=!1),x.setMeshOverlayEnabled(X.mesh_debug);{const j=L.surfel_data,fe=j.length/8;let ue=0,De=0,Re=0;for(let Ee=0;Ee<fe;Ee++)ue+=j[Ee*8],De+=j[Ee*8+1],Re+=j[Ee*8+2];const ge=fe>0?[ue/fe,De/fe,Re/fe]:[0,0,0];x.setBfcParams(X.bfc_cos,ge),nn({bfc:X.bfc},h,x.render_settings_buffer),console.log(`[bfc] flag=${X.bfc} cos=${X.bfc_cos} centroid=(${ge[0].toFixed(3)}, ${ge[1].toFixed(3)}, ${ge[2].toFixed(3)})`)}x.htEnabled=X.ht,X.ht&&console.log("[ht] hybrid transparency ON (sort-free K=1 core + OIT tail)"),nn({meshSampleMode:X.mesh_sample_mode,meshSilhouetteCull:X.mesh_silhouette,meshInvertDepth:X.mesh_invert_depth},h,x.render_settings_buffer),console.log(`[mesh-cull] ${f!==null?"mesh loaded":"no mesh"} · toggle=${X.mesh_cull} · margin=${X.mesh_margin}m · debug=${X.mesh_debug} · sample_mode=${X.mesh_sample_mode} · silhouette=${X.mesh_silhouette} · invert=${X.mesh_invert_depth}`);let r=!1;const m=(()=>{if(i!==null)return`${i.meta.format===2?"BC7":i.meta.format===3?"ASTC 4×4":i.meta.format===7?"BC7 codebook gather (typeD)":`format=${i.meta.format}`} ${i.meta.width}×${i.meta.height}, ${i.meta.n_layers} layers`;const j=h.features.has("texture-compression-bc"),fe=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(j?["BC7"]:[]).concat(fe?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",m),ni(L.sh_bias,h,x.render_settings_buffer),ti(X.gaussian_scaling,h,x.render_settings_buffer),X.sh_bias=L.sh_bias;const u=L.num_points.toLocaleString(),p={stats:`${u} surfels · -- fps`};he.addMonitor(p,"stats",{label:"Stats",interval:200}),he.addMonitor({atlas:m},"atlas",{label:"Atlas"});const l={stages:"— ms · awaiting timestamp data"};he.addMonitor(l,"stages",{label:"Stages",interval:500});let _=null;if(x.timeQueryEnabled){_=document.createElement("canvas"),_.width=280,_.height=24,_.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(_);const j=ue=>{const De=_.getContext("2d");if(!De)return;const Re=_.width,ge=_.height;if(De.clearRect(0,0,Re,ge),!ue||ue.total<=0){De.fillStyle="#888",De.font="11px ui-monospace,Menlo,monospace",De.fillText("awaiting GPU timestamps…",8,16);return}const Ee=[{label:"cull",ms:ue.cull,color:"#3aa3ff"},{label:"pre",ms:ue.preprocess,color:"#3ad27a"},{label:"sort",ms:ue.sort,color:"#ffa53a"},{label:"render",ms:ue.render,color:"#ff5566"}],Ne=Math.max(.001,Ee.reduce((ot,mt)=>ot+mt.ms,0));let Ye=0;De.font="10px ui-monospace,Menlo,monospace",De.textBaseline="middle";for(const ot of Ee){const mt=ot.ms/Ne*Re;De.fillStyle=ot.color,De.fillRect(Ye,0,mt,ge),mt>=38&&(De.fillStyle="#000c",De.fillText(`${ot.label} ${ot.ms.toFixed(1)}`,Ye+4,ge/2)),Ye+=mt}};setInterval(()=>{r||x.readPerfMetrics({silent:!0}).then(()=>{const ue=x.lastStageBreakdownMs;j(ue),ue&&(l.stages=`${ue.total.toFixed(1)} ms · cull ${ue.cull.toFixed(1)} / pre ${ue.preprocess.toFixed(1)} / sort ${ue.sort.toFixed(1)} / render ${ue.render.toFixed(1)}`)}).catch(ue=>console.warn("[perf] readPerfMetrics failed:",ue))},500)}const y=.4,g=3,z=.3;let R=null,N=0,oe=0;const se=pt.create(),te=xt.create();let le=v.length>0?0:-1;const we={view:v.length>0?`${le+1} / ${v.length}: ${v[le].img_name??le}`:"— no presets —"};he.addMonitor(we,"view",{label:"View",interval:100});function _e(j){const fe=xt.create(j[0],j[1],j[2],j[4],j[5],j[6],j[8],j[9],j[10]);return pt.fromMat(fe)}function ve(j,fe){R={fromPos:I.clone(w.position),toPos:I.clone(j.position),fromQuat:pt.normalize(_e(w.rotation)),toQuat:pt.normalize(_e(j.rotation)),target:j,t:0,duration:Math.max(.01,fe)}}const ke=(j,fe=!0)=>{if(v.length===0)return;le=(j%v.length+v.length)%v.length;const ue=v[le];fe?ve(ue,y):(w.set_preset(ue),k.resetToCamera(),E()),we.view=`${le+1} / ${v.length}: ${v[le].img_name??le}`};v.length>0&&(he.addButton({title:"◀ Prev view"}).on("click",()=>ke(le-1)),he.addButton({title:"Next view ▶"}).on("click",()=>ke(le+1)));const Me=v.length>0?gi(v,{tiltDownDeg:15,alignFirst:!0}):null,We=Me?Bc(v,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let je=0;const He=12;Ve.value={onAnimateStart:()=>{je=0},onAnimateStop:()=>{k.resetToCamera(),E()}},he.addInput(X,"render_scale",{label:"Render scale",min:.25,max:Te,step:.25}).on("change",j=>{const fe=Math.max(.25,j.value),ue=Math.max(1,Math.ceil(fe*o.clientWidth)),De=Math.max(1,Math.ceil(fe*o.clientHeight));(o.width!==ue||o.height!==De)&&(o.width=ue,o.height=De,D())}),he.addInput(X,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",j=>ti(j.value,h,x.render_settings_buffer)),he.addInput(X,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",j=>ni(j.value,h,x.render_settings_buffer)),he.addInput(X,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",j=>{x.bgColor=[j.value.r,j.value.g,j.value.b,j.value.a]});const Xe=i?i.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";he.addInput(X,"atlas_enabled",{label:Xe}).on("change",j=>x.setAtlasEnabled(j.value)),he.addInput(X,"bfc",{label:"Backface"}).on("change",j=>nn({bfc:j.value},h,x.render_settings_buffer)),he.addInput(X,"ht",{label:"HybridT (no sort)"}).on("change",j=>{x.htEnabled=j.value});const Qe=he.addInput(X,"mesh_cull",{label:"Mesh cull"});Qe.on("change",j=>x.setMeshCullEnabled(j.value)),x.hasMesh||(Qe.disabled=!0);const et=he.addInput(X,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});et.on("change",j=>x.setMeshMargin(j.value)),x.hasMesh||(et.disabled=!0);const tt=he.addInput(X,"mesh_debug",{label:"Mesh debug"});tt.on("change",j=>x.setMeshOverlayEnabled(j.value)),x.hasMesh||(tt.disabled=!0);const nt=he.addInput(X,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});nt.on("change",j=>nn({meshSampleMode:j.value},h,x.render_settings_buffer)),x.hasMesh||(nt.disabled=!0);const st=he.addInput(X,"mesh_silhouette",{label:"Silhouette cull"});st.on("change",j=>nn({meshSilhouetteCull:j.value},h,x.render_settings_buffer)),x.hasMesh||(st.disabled=!0);const Je=he.addInput(X,"mesh_invert_depth",{label:"Invert depth cull"});Je.on("change",j=>nn({meshInvertDepth:j.value},h,x.render_settings_buffer)),x.hasMesh||(Je.disabled=!0),he.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(v.length>0)w.set_preset(v[0]);else{const j=L.bbox.max[0]-L.bbox.min[0],fe=L.bbox.max[1]-L.bbox.min[1],ue=L.bbox.max[2]-L.bbox.min[2],Re=.5*Math.sqrt(j*j+fe*fe+ue*ue)*.5;I.set(d[0]-Re,d[1]-Re,d[2]-Re,w.position);const ge=I.create(Re,Re,Re);I.normalize(ge,ge);const Ee=I.create();I.cross(I.create(0,1,0),ge,Ee),I.normalize(Ee,Ee);const Ne=I.create();I.cross(ge,Ee,Ne);const Ye=xt.create(Ee[0],Ne[0],ge[0],Ee[1],Ne[1],ge[1],Ee[2],Ne[2],ge[2]);ut.fromMat3(Ye,w.rotation),w.update_buffer()}k.resetToCamera(),E()});const Ke={result:"— click Benchmark —"};he.addMonitor(Ke,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const $e={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function rt(){const fe=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ue of Object.keys($e))if(fe.startsWith(ue))return ue;return null}const qe=document.createElement("div");qe.id="bench-overlay",qe.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(qe);function ct(j,fe,ue){const De=Math.floor(fe/Math.max(1,ue)*100),Re=32,ge=Math.floor(fe/Math.max(1,ue)*Re),Ee="█".repeat(ge)+"░".repeat(Re-ge);qe.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${j}</div><div>[${Ee}] ${De}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${fe} / ${ue} frames · offscreen · pipelined · no vsync</div>`,qe.style.display="block"}function it(){qe.style.display="none"}async function St(j=10,fe=200){if(r)return;if(v.length===0){Ke.result="no cameras to benchmark";return}r=!0;const ue=$,De=X.animate,Re=new Float32Array(w.position),ge=new Float32Array(w.rotation);$=!1,X.animate=!1,he.refresh(),R=null,k.enabled=!1;const Ee=rt(),Ne=Ee?$e[Ee]:null,Ye=(Ne==null?void 0:Ne.w)??o.width,ot=(Ne==null?void 0:Ne.h)??o.height,mt=(Ne==null?void 0:Ne.fovY)??w.getFov(),Ht=Ee?`${Ee} · ${Ye>=4e3/4+500?"images_4":"images_2"}`:"custom",Ln=o.width,In=o.height,Gn=w.getFov();o.width=Ye,o.height=ot,w.setFov(mt),Qn(Ye,ot,h,x.render_settings_buffer);const mn=h.createTexture({size:[Ye,ot,1],format:F,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Un=mn.createView(),Rn=()=>{const ht=h.createCommandEncoder();x.frame(ht,Un,!1),h.queue.submit([ht.finish()])},Vn=()=>new Promise(ht=>setTimeout(ht,0)),Kt=20,On=async(ht,Vt)=>{let on=0,Dt=0;for(ct(Vt,0,ht),await Vn();Dt<ht;){const an=Math.min(Kt,ht-Dt),ln=performance.now();for(let vn=0;vn<an;vn++)w.set_preset(v[(Dt+vn)%v.length]),Rn();await h.queue.onSubmittedWorkDone();const Fn=performance.now();on+=Fn-ln,Dt+=an,ct(Vt,Dt,ht),await Vn()}return on};try{await On(j,"Warming up");const Vt=await On(fe,"Benchmarking")/fe,on=1e3/Vt,Dt=L.num_points??L.surfel_data.length/8,an=(mt*180/Math.PI).toFixed(1),ln=`${on.toFixed(1)} FPS  (${Vt.toFixed(2)} ms/frame)
${Ye}×${ot} · fovY ${an}° · ${Ht}
${Dt.toLocaleString()} surfels · ${j}w+${fe}b · pipelined`;Ke.result=ln,console.log("[bench]",ln.replace(/\n/g,"  |  "))}catch(ht){console.error("[bench] failed:",ht),Ke.result=`bench failed: ${ht}`}finally{it(),mn.destroy(),o.width=Ln,o.height=In,w.setFov(Gn),Qn(Ln,In,h,x.render_settings_buffer),w.position.set(Re),w.rotation.set(ge),w.update_buffer(),k.enabled=!ue,$=ue,X.animate=De,he.refresh(),r=!1}}he.addButton({title:"📊 Benchmark"}).on("click",()=>St()),document.addEventListener("keydown",j=>{const fe=j.key;if(fe>="0"&&fe<="9"&&v.length>0){const ue=parseInt(fe);ue<v.length&&ke(ue)}else fe==="ArrowLeft"||fe==="PageUp"?(ke(le-1),j.preventDefault()):fe==="ArrowRight"||fe==="PageDown"?(ke(le+1),j.preventDefault()):(fe==="d"||fe==="D")&&x.debugReadSortedIndices(30).catch(ue=>console.error("[DEBUG] readback failed:",ue))});function vt(j,fe){const ue=o.getBoundingClientRect(),De=window.devicePixelRatio||1;return[(j-ue.left)*De,(fe-ue.top)*De]}o.addEventListener("dblclick",j=>{const[fe,ue]=vt(j.clientX,j.clientY);P(fe,ue)});let bt=0,yt=0,Ct=0;o.addEventListener("pointerdown",j=>{if(j.pointerType!=="touch")return;const fe=performance.now(),ue=fe-bt,De=j.clientX-yt,Re=j.clientY-Ct;if(ue>0&&ue<300&&De*De+Re*Re<40*40){const[ge,Ee]=vt(j.clientX,j.clientY);P(ge,Ee),bt=0}else bt=fe,yt=j.clientX,Ct=j.clientY});function Et(){return M}let kt=performance.now(),Rt=60,Mt=Promise.resolve(),Bt=0;async function Tt(){var Re;const j=performance.now(),fe=Math.min((j-kt)/1e3,.1);if(kt=j,fe>0){const ge=((Re=x.lastStageBreakdownMs)==null?void 0:Re.total)??0,Ee=ge>.5?1e3/ge:1/fe;Rt=Rt*.9+Ee*.1,p.stats=`${u} surfels · ${Math.round(Rt)} fps`}if(r){requestAnimationFrame(Tt);return}if(Et()&&(R||$)&&(R=null,k.resetToCamera(),E(),$&&($=!1,X.animate=!1,he.refresh())),$&&X.animateMode==="circle"&&Me){je+=fe/He,je>=1&&(je-=1);const ge=wi(Me,je);w.set_preset(ge),k.update(fe);const Ee=h.createCommandEncoder();x.frame(Ee,a.getCurrentTexture().createView()),h.queue.submit([Ee.finish()]),Bt++,Bt===2&&Dn(),requestAnimationFrame(Tt);return}if(R){R.t+=fe/R.duration;const ge=Math.min(1,R.t),Ee=ge*ge*(3-2*ge);I.lerp(R.fromPos,R.toPos,Ee,w.position),pt.slerp(R.fromQuat,R.toQuat,Ee,se),xt.fromQuat(se,te),ut.fromMat3(te,w.rotation),w.update_buffer(),R.t>=1&&(w.set_preset(R.target),R=null,$?v.length>0&&(N=z):(k.resetToCamera(),E()))}else if($&&!Et()){const ge=X.animateMode==="circle"&&We.length>0,Ee=ge?We:v;if(Ee.length!==0){if(N-=fe,N<=0){const Ye=((ge?oe:le)+1)%Ee.length;ge?oe=Ye:le=Ye;const ot=ge?g/8:g;ve(Ee[Ye],ot),ge||(we.view=`${le+1} / ${v.length}: ${v[le].img_name??le}`)}}}k.update(fe),V(),await Mt;const ue=h.createCommandEncoder(),De=a.getCurrentTexture().createView();x.frame(ue,De),h.queue.submit([ue.finish()]),Mt=h.queue.onSubmittedWorkDone(),Bt++,Bt===2&&Dn(),requestAnimationFrame(Tt)}requestAnimationFrame(Tt)}}(function(){let a="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const k=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){a=k[1];break}}const h=document.createElement("div");h.textContent="v "+a,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const h=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Ll(S!==null);const w=S.getContext("webgpu");Wc(S,w,h,a)})();
