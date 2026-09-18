var pn=Object.defineProperty;var hn=(i,r,d)=>r in i?pn(i,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[r]=d;var P=(i,r,d)=>(hn(i,typeof r!="symbol"?r+"":r,d),d);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))v(y);new MutationObserver(y=>{for(const w of y)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&v(S)}).observe(document,{childList:!0,subtree:!0});function d(y){const w={};return y.integrity&&(w.integrity=y.integrity),y.referrerPolicy&&(w.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?w.credentials="include":y.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function v(y){if(y.ep)return;y.ep=!0;const w=d(y);fetch(y.href,w)}})();function _n(i,r){return class extends i{constructor(...d){super(...d),r(this)}}}const gn=_n(Array,i=>i.fill(0));let _e=1e-6;function mn(i){function r(g=0,m=0){const x=new i(2);return g!==void 0&&(x[0]=g,m!==void 0&&(x[1]=m)),x}const d=r;function v(g,m,x){const e=x??new i(2);return e[0]=g,e[1]=m,e}function y(g,m){const x=m??new i(2);return x[0]=Math.ceil(g[0]),x[1]=Math.ceil(g[1]),x}function w(g,m){const x=m??new i(2);return x[0]=Math.floor(g[0]),x[1]=Math.floor(g[1]),x}function S(g,m){const x=m??new i(2);return x[0]=Math.round(g[0]),x[1]=Math.round(g[1]),x}function G(g,m=0,x=1,e){const u=e??new i(2);return u[0]=Math.min(x,Math.max(m,g[0])),u[1]=Math.min(x,Math.max(m,g[1])),u}function M(g,m,x){const e=x??new i(2);return e[0]=g[0]+m[0],e[1]=g[1]+m[1],e}function O(g,m,x,e){const u=e??new i(2);return u[0]=g[0]+m[0]*x,u[1]=g[1]+m[1]*x,u}function F(g,m){const x=g[0],e=g[1],u=m[0],n=m[1],a=Math.sqrt(x*x+e*e),s=Math.sqrt(u*u+n*n),c=a*s,_=c&&N(g,m)/c;return Math.acos(_)}function j(g,m,x){const e=x??new i(2);return e[0]=g[0]-m[0],e[1]=g[1]-m[1],e}const D=j;function Y(g,m){return Math.abs(g[0]-m[0])<_e&&Math.abs(g[1]-m[1])<_e}function re(g,m){return g[0]===m[0]&&g[1]===m[1]}function ie(g,m,x,e){const u=e??new i(2);return u[0]=g[0]+x*(m[0]-g[0]),u[1]=g[1]+x*(m[1]-g[1]),u}function R(g,m,x,e){const u=e??new i(2);return u[0]=g[0]+x[0]*(m[0]-g[0]),u[1]=g[1]+x[1]*(m[1]-g[1]),u}function V(g,m,x){const e=x??new i(2);return e[0]=Math.max(g[0],m[0]),e[1]=Math.max(g[1],m[1]),e}function oe(g,m,x){const e=x??new i(2);return e[0]=Math.min(g[0],m[0]),e[1]=Math.min(g[1],m[1]),e}function C(g,m,x){const e=x??new i(2);return e[0]=g[0]*m,e[1]=g[1]*m,e}const ee=C;function te(g,m,x){const e=x??new i(2);return e[0]=g[0]/m,e[1]=g[1]/m,e}function L(g,m){const x=m??new i(2);return x[0]=1/g[0],x[1]=1/g[1],x}const ce=L;function K(g,m,x){const e=x??new i(3),u=g[0]*m[1]-g[1]*m[0];return e[0]=0,e[1]=0,e[2]=u,e}function N(g,m){return g[0]*m[0]+g[1]*m[1]}function le(g){const m=g[0],x=g[1];return Math.sqrt(m*m+x*x)}const E=le;function ne(g){const m=g[0],x=g[1];return m*m+x*x}const W=ne;function ae(g,m){const x=g[0]-m[0],e=g[1]-m[1];return Math.sqrt(x*x+e*e)}const ue=ae;function Z(g,m){const x=g[0]-m[0],e=g[1]-m[1];return x*x+e*e}const Q=Z;function he(g,m){const x=m??new i(2),e=g[0],u=g[1],n=Math.sqrt(e*e+u*u);return n>1e-5?(x[0]=e/n,x[1]=u/n):(x[0]=0,x[1]=0),x}function me(g,m){const x=m??new i(2);return x[0]=-g[0],x[1]=-g[1],x}function de(g,m){const x=m??new i(2);return x[0]=g[0],x[1]=g[1],x}const xe=de;function be(g,m,x){const e=x??new i(2);return e[0]=g[0]*m[0],e[1]=g[1]*m[1],e}const we=be;function se(g,m,x){const e=x??new i(2);return e[0]=g[0]/m[0],e[1]=g[1]/m[1],e}const fe=se;function ye(g=1,m){const x=m??new i(2),e=Math.random()*2*Math.PI;return x[0]=Math.cos(e)*g,x[1]=Math.sin(e)*g,x}function B(g){const m=g??new i(2);return m[0]=0,m[1]=0,m}function A(g,m,x){const e=x??new i(2),u=g[0],n=g[1];return e[0]=u*m[0]+n*m[4]+m[12],e[1]=u*m[1]+n*m[5]+m[13],e}function h(g,m,x){const e=x??new i(2),u=g[0],n=g[1];return e[0]=m[0]*u+m[4]*n+m[8],e[1]=m[1]*u+m[5]*n+m[9],e}function t(g,m,x,e){const u=e??new i(2),n=g[0]-m[0],a=g[1]-m[1],s=Math.sin(x),c=Math.cos(x);return u[0]=n*c-a*s+m[0],u[1]=n*s+a*c+m[1],u}function l(g,m,x){const e=x??new i(2);return he(g,e),C(e,m,e)}function o(g,m,x){const e=x??new i(2);return le(g)>m?l(g,m,e):de(g,e)}function p(g,m,x){const e=x??new i(2);return ie(g,m,.5,e)}return{create:r,fromValues:d,set:v,ceil:y,floor:w,round:S,clamp:G,add:M,addScaled:O,angle:F,subtract:j,sub:D,equalsApproximately:Y,equals:re,lerp:ie,lerpV:R,max:V,min:oe,mulScalar:C,scale:ee,divScalar:te,inverse:L,invert:ce,cross:K,dot:N,length:le,len:E,lengthSq:ne,lenSq:W,distance:ae,dist:ue,distanceSq:Z,distSq:Q,normalize:he,negate:me,copy:de,clone:xe,multiply:be,mul:we,divide:se,div:fe,random:ye,zero:B,transformMat4:A,transformMat3:h,rotate:t,setLength:l,truncate:o,midpoint:p}}const At=new Map;function Qt(i){let r=At.get(i);return r||(r=mn(i),At.set(i,r)),r}function xn(i){function r(s,c,_){const f=new i(3);return s!==void 0&&(f[0]=s,c!==void 0&&(f[1]=c,_!==void 0&&(f[2]=_))),f}const d=r;function v(s,c,_,f){const b=f??new i(3);return b[0]=s,b[1]=c,b[2]=_,b}function y(s,c){const _=c??new i(3);return _[0]=Math.ceil(s[0]),_[1]=Math.ceil(s[1]),_[2]=Math.ceil(s[2]),_}function w(s,c){const _=c??new i(3);return _[0]=Math.floor(s[0]),_[1]=Math.floor(s[1]),_[2]=Math.floor(s[2]),_}function S(s,c){const _=c??new i(3);return _[0]=Math.round(s[0]),_[1]=Math.round(s[1]),_[2]=Math.round(s[2]),_}function G(s,c=0,_=1,f){const b=f??new i(3);return b[0]=Math.min(_,Math.max(c,s[0])),b[1]=Math.min(_,Math.max(c,s[1])),b[2]=Math.min(_,Math.max(c,s[2])),b}function M(s,c,_){const f=_??new i(3);return f[0]=s[0]+c[0],f[1]=s[1]+c[1],f[2]=s[2]+c[2],f}function O(s,c,_,f){const b=f??new i(3);return b[0]=s[0]+c[0]*_,b[1]=s[1]+c[1]*_,b[2]=s[2]+c[2]*_,b}function F(s,c){const _=s[0],f=s[1],b=s[2],k=c[0],T=c[1],U=c[2],z=Math.sqrt(_*_+f*f+b*b),I=Math.sqrt(k*k+T*T+U*U),q=z*I,$=q&&N(s,c)/q;return Math.acos($)}function j(s,c,_){const f=_??new i(3);return f[0]=s[0]-c[0],f[1]=s[1]-c[1],f[2]=s[2]-c[2],f}const D=j;function Y(s,c){return Math.abs(s[0]-c[0])<_e&&Math.abs(s[1]-c[1])<_e&&Math.abs(s[2]-c[2])<_e}function re(s,c){return s[0]===c[0]&&s[1]===c[1]&&s[2]===c[2]}function ie(s,c,_,f){const b=f??new i(3);return b[0]=s[0]+_*(c[0]-s[0]),b[1]=s[1]+_*(c[1]-s[1]),b[2]=s[2]+_*(c[2]-s[2]),b}function R(s,c,_,f){const b=f??new i(3);return b[0]=s[0]+_[0]*(c[0]-s[0]),b[1]=s[1]+_[1]*(c[1]-s[1]),b[2]=s[2]+_[2]*(c[2]-s[2]),b}function V(s,c,_){const f=_??new i(3);return f[0]=Math.max(s[0],c[0]),f[1]=Math.max(s[1],c[1]),f[2]=Math.max(s[2],c[2]),f}function oe(s,c,_){const f=_??new i(3);return f[0]=Math.min(s[0],c[0]),f[1]=Math.min(s[1],c[1]),f[2]=Math.min(s[2],c[2]),f}function C(s,c,_){const f=_??new i(3);return f[0]=s[0]*c,f[1]=s[1]*c,f[2]=s[2]*c,f}const ee=C;function te(s,c,_){const f=_??new i(3);return f[0]=s[0]/c,f[1]=s[1]/c,f[2]=s[2]/c,f}function L(s,c){const _=c??new i(3);return _[0]=1/s[0],_[1]=1/s[1],_[2]=1/s[2],_}const ce=L;function K(s,c,_){const f=_??new i(3),b=s[2]*c[0]-s[0]*c[2],k=s[0]*c[1]-s[1]*c[0];return f[0]=s[1]*c[2]-s[2]*c[1],f[1]=b,f[2]=k,f}function N(s,c){return s[0]*c[0]+s[1]*c[1]+s[2]*c[2]}function le(s){const c=s[0],_=s[1],f=s[2];return Math.sqrt(c*c+_*_+f*f)}const E=le;function ne(s){const c=s[0],_=s[1],f=s[2];return c*c+_*_+f*f}const W=ne;function ae(s,c){const _=s[0]-c[0],f=s[1]-c[1],b=s[2]-c[2];return Math.sqrt(_*_+f*f+b*b)}const ue=ae;function Z(s,c){const _=s[0]-c[0],f=s[1]-c[1],b=s[2]-c[2];return _*_+f*f+b*b}const Q=Z;function he(s,c){const _=c??new i(3),f=s[0],b=s[1],k=s[2],T=Math.sqrt(f*f+b*b+k*k);return T>1e-5?(_[0]=f/T,_[1]=b/T,_[2]=k/T):(_[0]=0,_[1]=0,_[2]=0),_}function me(s,c){const _=c??new i(3);return _[0]=-s[0],_[1]=-s[1],_[2]=-s[2],_}function de(s,c){const _=c??new i(3);return _[0]=s[0],_[1]=s[1],_[2]=s[2],_}const xe=de;function be(s,c,_){const f=_??new i(3);return f[0]=s[0]*c[0],f[1]=s[1]*c[1],f[2]=s[2]*c[2],f}const we=be;function se(s,c,_){const f=_??new i(3);return f[0]=s[0]/c[0],f[1]=s[1]/c[1],f[2]=s[2]/c[2],f}const fe=se;function ye(s=1,c){const _=c??new i(3),f=Math.random()*2*Math.PI,b=Math.random()*2-1,k=Math.sqrt(1-b*b)*s;return _[0]=Math.cos(f)*k,_[1]=Math.sin(f)*k,_[2]=b*s,_}function B(s){const c=s??new i(3);return c[0]=0,c[1]=0,c[2]=0,c}function A(s,c,_){const f=_??new i(3),b=s[0],k=s[1],T=s[2],U=c[3]*b+c[7]*k+c[11]*T+c[15]||1;return f[0]=(c[0]*b+c[4]*k+c[8]*T+c[12])/U,f[1]=(c[1]*b+c[5]*k+c[9]*T+c[13])/U,f[2]=(c[2]*b+c[6]*k+c[10]*T+c[14])/U,f}function h(s,c,_){const f=_??new i(3),b=s[0],k=s[1],T=s[2];return f[0]=b*c[0*4+0]+k*c[1*4+0]+T*c[2*4+0],f[1]=b*c[0*4+1]+k*c[1*4+1]+T*c[2*4+1],f[2]=b*c[0*4+2]+k*c[1*4+2]+T*c[2*4+2],f}function t(s,c,_){const f=_??new i(3),b=s[0],k=s[1],T=s[2];return f[0]=b*c[0]+k*c[4]+T*c[8],f[1]=b*c[1]+k*c[5]+T*c[9],f[2]=b*c[2]+k*c[6]+T*c[10],f}function l(s,c,_){const f=_??new i(3),b=c[0],k=c[1],T=c[2],U=c[3]*2,z=s[0],I=s[1],q=s[2],$=k*q-T*I,H=T*z-b*q,X=b*I-k*z;return f[0]=z+$*U+(k*X-T*H)*2,f[1]=I+H*U+(T*$-b*X)*2,f[2]=q+X*U+(b*H-k*$)*2,f}function o(s,c){const _=c??new i(3);return _[0]=s[12],_[1]=s[13],_[2]=s[14],_}function p(s,c,_){const f=_??new i(3),b=c*4;return f[0]=s[b+0],f[1]=s[b+1],f[2]=s[b+2],f}function g(s,c){const _=c??new i(3),f=s[0],b=s[1],k=s[2],T=s[4],U=s[5],z=s[6],I=s[8],q=s[9],$=s[10];return _[0]=Math.sqrt(f*f+b*b+k*k),_[1]=Math.sqrt(T*T+U*U+z*z),_[2]=Math.sqrt(I*I+q*q+$*$),_}function m(s,c,_,f){const b=f??new i(3),k=[],T=[];return k[0]=s[0]-c[0],k[1]=s[1]-c[1],k[2]=s[2]-c[2],T[0]=k[0],T[1]=k[1]*Math.cos(_)-k[2]*Math.sin(_),T[2]=k[1]*Math.sin(_)+k[2]*Math.cos(_),b[0]=T[0]+c[0],b[1]=T[1]+c[1],b[2]=T[2]+c[2],b}function x(s,c,_,f){const b=f??new i(3),k=[],T=[];return k[0]=s[0]-c[0],k[1]=s[1]-c[1],k[2]=s[2]-c[2],T[0]=k[2]*Math.sin(_)+k[0]*Math.cos(_),T[1]=k[1],T[2]=k[2]*Math.cos(_)-k[0]*Math.sin(_),b[0]=T[0]+c[0],b[1]=T[1]+c[1],b[2]=T[2]+c[2],b}function e(s,c,_,f){const b=f??new i(3),k=[],T=[];return k[0]=s[0]-c[0],k[1]=s[1]-c[1],k[2]=s[2]-c[2],T[0]=k[0]*Math.cos(_)-k[1]*Math.sin(_),T[1]=k[0]*Math.sin(_)+k[1]*Math.cos(_),T[2]=k[2],b[0]=T[0]+c[0],b[1]=T[1]+c[1],b[2]=T[2]+c[2],b}function u(s,c,_){const f=_??new i(3);return he(s,f),C(f,c,f)}function n(s,c,_){const f=_??new i(3);return le(s)>c?u(s,c,f):de(s,f)}function a(s,c,_){const f=_??new i(3);return ie(s,c,.5,f)}return{create:r,fromValues:d,set:v,ceil:y,floor:w,round:S,clamp:G,add:M,addScaled:O,angle:F,subtract:j,sub:D,equalsApproximately:Y,equals:re,lerp:ie,lerpV:R,max:V,min:oe,mulScalar:C,scale:ee,divScalar:te,inverse:L,invert:ce,cross:K,dot:N,length:le,len:E,lengthSq:ne,lenSq:W,distance:ae,dist:ue,distanceSq:Z,distSq:Q,normalize:he,negate:me,copy:de,clone:xe,multiply:be,mul:we,divide:se,div:fe,random:ye,zero:B,transformMat4:A,transformMat4Upper3x3:h,transformMat3:t,transformQuat:l,getTranslation:o,getAxis:p,getScaling:g,rotateX:m,rotateY:x,rotateZ:e,setLength:u,truncate:n,midpoint:a}}const Et=new Map;function gt(i){let r=Et.get(i);return r||(r=xn(i),Et.set(i,r)),r}function yn(i){const r=Qt(i),d=gt(i);function v(t,l,o,p,g,m,x,e,u){const n=new i(12);return n[3]=0,n[7]=0,n[11]=0,t!==void 0&&(n[0]=t,l!==void 0&&(n[1]=l,o!==void 0&&(n[2]=o,p!==void 0&&(n[4]=p,g!==void 0&&(n[5]=g,m!==void 0&&(n[6]=m,x!==void 0&&(n[8]=x,e!==void 0&&(n[9]=e,u!==void 0&&(n[10]=u))))))))),n}function y(t,l,o,p,g,m,x,e,u,n){const a=n??new i(12);return a[0]=t,a[1]=l,a[2]=o,a[3]=0,a[4]=p,a[5]=g,a[6]=m,a[7]=0,a[8]=x,a[9]=e,a[10]=u,a[11]=0,a}function w(t,l){const o=l??new i(12);return o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=0,o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=0,o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=0,o}function S(t,l){const o=l??new i(12),p=t[0],g=t[1],m=t[2],x=t[3],e=p+p,u=g+g,n=m+m,a=p*e,s=g*e,c=g*u,_=m*e,f=m*u,b=m*n,k=x*e,T=x*u,U=x*n;return o[0]=1-c-b,o[1]=s+U,o[2]=_-T,o[3]=0,o[4]=s-U,o[5]=1-a-b,o[6]=f+k,o[7]=0,o[8]=_+T,o[9]=f-k,o[10]=1-a-c,o[11]=0,o}function G(t,l){const o=l??new i(12);return o[0]=-t[0],o[1]=-t[1],o[2]=-t[2],o[4]=-t[4],o[5]=-t[5],o[6]=-t[6],o[8]=-t[8],o[9]=-t[9],o[10]=-t[10],o}function M(t,l,o){const p=o??new i(12);return p[0]=t[0]*l,p[1]=t[1]*l,p[2]=t[2]*l,p[4]=t[4]*l,p[5]=t[5]*l,p[6]=t[6]*l,p[8]=t[8]*l,p[9]=t[9]*l,p[10]=t[10]*l,p}const O=M;function F(t,l,o){const p=o??new i(12);return p[0]=t[0]+l[0],p[1]=t[1]+l[1],p[2]=t[2]+l[2],p[4]=t[4]+l[4],p[5]=t[5]+l[5],p[6]=t[6]+l[6],p[8]=t[8]+l[8],p[9]=t[9]+l[9],p[10]=t[10]+l[10],p}function j(t,l){const o=l??new i(12);return o[0]=t[0],o[1]=t[1],o[2]=t[2],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[8]=t[8],o[9]=t[9],o[10]=t[10],o}const D=j;function Y(t,l){return Math.abs(t[0]-l[0])<_e&&Math.abs(t[1]-l[1])<_e&&Math.abs(t[2]-l[2])<_e&&Math.abs(t[4]-l[4])<_e&&Math.abs(t[5]-l[5])<_e&&Math.abs(t[6]-l[6])<_e&&Math.abs(t[8]-l[8])<_e&&Math.abs(t[9]-l[9])<_e&&Math.abs(t[10]-l[10])<_e}function re(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]}function ie(t){const l=t??new i(12);return l[0]=1,l[1]=0,l[2]=0,l[4]=0,l[5]=1,l[6]=0,l[8]=0,l[9]=0,l[10]=1,l}function R(t,l){const o=l??new i(12);if(o===t){let c;return c=t[1],t[1]=t[4],t[4]=c,c=t[2],t[2]=t[8],t[8]=c,c=t[6],t[6]=t[9],t[9]=c,o}const p=t[0*4+0],g=t[0*4+1],m=t[0*4+2],x=t[1*4+0],e=t[1*4+1],u=t[1*4+2],n=t[2*4+0],a=t[2*4+1],s=t[2*4+2];return o[0]=p,o[1]=x,o[2]=n,o[4]=g,o[5]=e,o[6]=a,o[8]=m,o[9]=u,o[10]=s,o}function V(t,l){const o=l??new i(12),p=t[0*4+0],g=t[0*4+1],m=t[0*4+2],x=t[1*4+0],e=t[1*4+1],u=t[1*4+2],n=t[2*4+0],a=t[2*4+1],s=t[2*4+2],c=s*e-u*a,_=-s*x+u*n,f=a*x-e*n,b=1/(p*c+g*_+m*f);return o[0]=c*b,o[1]=(-s*g+m*a)*b,o[2]=(u*g-m*e)*b,o[4]=_*b,o[5]=(s*p-m*n)*b,o[6]=(-u*p+m*x)*b,o[8]=f*b,o[9]=(-a*p+g*n)*b,o[10]=(e*p-g*x)*b,o}function oe(t){const l=t[0],o=t[0*4+1],p=t[0*4+2],g=t[1*4+0],m=t[1*4+1],x=t[1*4+2],e=t[2*4+0],u=t[2*4+1],n=t[2*4+2];return l*(m*n-u*x)-g*(o*n-u*p)+e*(o*x-m*p)}const C=V;function ee(t,l,o){const p=o??new i(12),g=t[0],m=t[1],x=t[2],e=t[4+0],u=t[4+1],n=t[4+2],a=t[8+0],s=t[8+1],c=t[8+2],_=l[0],f=l[1],b=l[2],k=l[4+0],T=l[4+1],U=l[4+2],z=l[8+0],I=l[8+1],q=l[8+2];return p[0]=g*_+e*f+a*b,p[1]=m*_+u*f+s*b,p[2]=x*_+n*f+c*b,p[4]=g*k+e*T+a*U,p[5]=m*k+u*T+s*U,p[6]=x*k+n*T+c*U,p[8]=g*z+e*I+a*q,p[9]=m*z+u*I+s*q,p[10]=x*z+n*I+c*q,p}const te=ee;function L(t,l,o){const p=o??ie();return t!==p&&(p[0]=t[0],p[1]=t[1],p[2]=t[2],p[4]=t[4],p[5]=t[5],p[6]=t[6]),p[8]=l[0],p[9]=l[1],p[10]=1,p}function ce(t,l){const o=l??r.create();return o[0]=t[8],o[1]=t[9],o}function K(t,l,o){const p=o??r.create(),g=l*4;return p[0]=t[g+0],p[1]=t[g+1],p}function N(t,l,o,p){const g=p===t?t:j(t,p),m=o*4;return g[m+0]=l[0],g[m+1]=l[1],g}function le(t,l){const o=l??r.create(),p=t[0],g=t[1],m=t[4],x=t[5];return o[0]=Math.sqrt(p*p+g*g),o[1]=Math.sqrt(m*m+x*x),o}function E(t,l){const o=l??d.create(),p=t[0],g=t[1],m=t[2],x=t[4],e=t[5],u=t[6],n=t[8],a=t[9],s=t[10];return o[0]=Math.sqrt(p*p+g*g+m*m),o[1]=Math.sqrt(x*x+e*e+u*u),o[2]=Math.sqrt(n*n+a*a+s*s),o}function ne(t,l){const o=l??new i(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=t[0],o[9]=t[1],o[10]=1,o}function W(t,l,o){const p=o??new i(12),g=l[0],m=l[1],x=t[0],e=t[1],u=t[2],n=t[1*4+0],a=t[1*4+1],s=t[1*4+2],c=t[2*4+0],_=t[2*4+1],f=t[2*4+2];return t!==p&&(p[0]=x,p[1]=e,p[2]=u,p[4]=n,p[5]=a,p[6]=s),p[8]=x*g+n*m+c,p[9]=e*g+a*m+_,p[10]=u*g+s*m+f,p}function ae(t,l){const o=l??new i(12),p=Math.cos(t),g=Math.sin(t);return o[0]=p,o[1]=g,o[2]=0,o[4]=-g,o[5]=p,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function ue(t,l,o){const p=o??new i(12),g=t[0*4+0],m=t[0*4+1],x=t[0*4+2],e=t[1*4+0],u=t[1*4+1],n=t[1*4+2],a=Math.cos(l),s=Math.sin(l);return p[0]=a*g+s*e,p[1]=a*m+s*u,p[2]=a*x+s*n,p[4]=a*e-s*g,p[5]=a*u-s*m,p[6]=a*n-s*x,t!==p&&(p[8]=t[8],p[9]=t[9],p[10]=t[10]),p}function Z(t,l){const o=l??new i(12),p=Math.cos(t),g=Math.sin(t);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=p,o[6]=g,o[8]=0,o[9]=-g,o[10]=p,o}function Q(t,l,o){const p=o??new i(12),g=t[4],m=t[5],x=t[6],e=t[8],u=t[9],n=t[10],a=Math.cos(l),s=Math.sin(l);return p[4]=a*g+s*e,p[5]=a*m+s*u,p[6]=a*x+s*n,p[8]=a*e-s*g,p[9]=a*u-s*m,p[10]=a*n-s*x,t!==p&&(p[0]=t[0],p[1]=t[1],p[2]=t[2]),p}function he(t,l){const o=l??new i(12),p=Math.cos(t),g=Math.sin(t);return o[0]=p,o[1]=0,o[2]=-g,o[4]=0,o[5]=1,o[6]=0,o[8]=g,o[9]=0,o[10]=p,o}function me(t,l,o){const p=o??new i(12),g=t[0*4+0],m=t[0*4+1],x=t[0*4+2],e=t[2*4+0],u=t[2*4+1],n=t[2*4+2],a=Math.cos(l),s=Math.sin(l);return p[0]=a*g-s*e,p[1]=a*m-s*u,p[2]=a*x-s*n,p[8]=a*e+s*g,p[9]=a*u+s*m,p[10]=a*n+s*x,t!==p&&(p[4]=t[4],p[5]=t[5],p[6]=t[6]),p}const de=ae,xe=ue;function be(t,l){const o=l??new i(12);return o[0]=t[0],o[1]=0,o[2]=0,o[4]=0,o[5]=t[1],o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function we(t,l,o){const p=o??new i(12),g=l[0],m=l[1];return p[0]=g*t[0*4+0],p[1]=g*t[0*4+1],p[2]=g*t[0*4+2],p[4]=m*t[1*4+0],p[5]=m*t[1*4+1],p[6]=m*t[1*4+2],t!==p&&(p[8]=t[8],p[9]=t[9],p[10]=t[10]),p}function se(t,l){const o=l??new i(12);return o[0]=t[0],o[1]=0,o[2]=0,o[4]=0,o[5]=t[1],o[6]=0,o[8]=0,o[9]=0,o[10]=t[2],o}function fe(t,l,o){const p=o??new i(12),g=l[0],m=l[1],x=l[2];return p[0]=g*t[0*4+0],p[1]=g*t[0*4+1],p[2]=g*t[0*4+2],p[4]=m*t[1*4+0],p[5]=m*t[1*4+1],p[6]=m*t[1*4+2],p[8]=x*t[2*4+0],p[9]=x*t[2*4+1],p[10]=x*t[2*4+2],p}function ye(t,l){const o=l??new i(12);return o[0]=t,o[1]=0,o[2]=0,o[4]=0,o[5]=t,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function B(t,l,o){const p=o??new i(12);return p[0]=l*t[0*4+0],p[1]=l*t[0*4+1],p[2]=l*t[0*4+2],p[4]=l*t[1*4+0],p[5]=l*t[1*4+1],p[6]=l*t[1*4+2],t!==p&&(p[8]=t[8],p[9]=t[9],p[10]=t[10]),p}function A(t,l){const o=l??new i(12);return o[0]=t,o[1]=0,o[2]=0,o[4]=0,o[5]=t,o[6]=0,o[8]=0,o[9]=0,o[10]=t,o}function h(t,l,o){const p=o??new i(12);return p[0]=l*t[0*4+0],p[1]=l*t[0*4+1],p[2]=l*t[0*4+2],p[4]=l*t[1*4+0],p[5]=l*t[1*4+1],p[6]=l*t[1*4+2],p[8]=l*t[2*4+0],p[9]=l*t[2*4+1],p[10]=l*t[2*4+2],p}return{add:F,clone:D,copy:j,create:v,determinant:oe,equals:re,equalsApproximately:Y,fromMat4:w,fromQuat:S,get3DScaling:E,getAxis:K,getScaling:le,getTranslation:ce,identity:ie,inverse:V,invert:C,mul:te,mulScalar:O,multiply:ee,multiplyScalar:M,negate:G,rotate:ue,rotateX:Q,rotateY:me,rotateZ:xe,rotation:ae,rotationX:Z,rotationY:he,rotationZ:de,scale:we,scale3D:fe,scaling:be,scaling3D:se,set:y,setAxis:N,setTranslation:L,translate:W,translation:ne,transpose:R,uniformScale:B,uniformScale3D:h,uniformScaling:ye,uniformScaling3D:A}}const Dt=new Map;function wn(i){let r=Dt.get(i);return r||(r=yn(i),Dt.set(i,r)),r}function bn(i){const r=gt(i);function d(e,u,n,a,s,c,_,f,b,k,T,U,z,I,q,$){const H=new i(16);return e!==void 0&&(H[0]=e,u!==void 0&&(H[1]=u,n!==void 0&&(H[2]=n,a!==void 0&&(H[3]=a,s!==void 0&&(H[4]=s,c!==void 0&&(H[5]=c,_!==void 0&&(H[6]=_,f!==void 0&&(H[7]=f,b!==void 0&&(H[8]=b,k!==void 0&&(H[9]=k,T!==void 0&&(H[10]=T,U!==void 0&&(H[11]=U,z!==void 0&&(H[12]=z,I!==void 0&&(H[13]=I,q!==void 0&&(H[14]=q,$!==void 0&&(H[15]=$)))))))))))))))),H}function v(e,u,n,a,s,c,_,f,b,k,T,U,z,I,q,$,H){const X=H??new i(16);return X[0]=e,X[1]=u,X[2]=n,X[3]=a,X[4]=s,X[5]=c,X[6]=_,X[7]=f,X[8]=b,X[9]=k,X[10]=T,X[11]=U,X[12]=z,X[13]=I,X[14]=q,X[15]=$,X}function y(e,u){const n=u??new i(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=0,n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function w(e,u){const n=u??new i(16),a=e[0],s=e[1],c=e[2],_=e[3],f=a+a,b=s+s,k=c+c,T=a*f,U=s*f,z=s*b,I=c*f,q=c*b,$=c*k,H=_*f,X=_*b,pe=_*k;return n[0]=1-z-$,n[1]=U+pe,n[2]=I-X,n[3]=0,n[4]=U-pe,n[5]=1-T-$,n[6]=q+H,n[7]=0,n[8]=I+X,n[9]=q-H,n[10]=1-T-z,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function S(e,u){const n=u??new i(16);return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function G(e,u,n){const a=n??new i(16);return a[0]=e[0]+u[0],a[1]=e[1]+u[1],a[2]=e[2]+u[2],a[3]=e[3]+u[3],a[4]=e[4]+u[4],a[5]=e[5]+u[5],a[6]=e[6]+u[6],a[7]=e[7]+u[7],a[8]=e[8]+u[8],a[9]=e[9]+u[9],a[10]=e[10]+u[10],a[11]=e[11]+u[11],a[12]=e[12]+u[12],a[13]=e[13]+u[13],a[14]=e[14]+u[14],a[15]=e[15]+u[15],a}function M(e,u,n){const a=n??new i(16);return a[0]=e[0]*u,a[1]=e[1]*u,a[2]=e[2]*u,a[3]=e[3]*u,a[4]=e[4]*u,a[5]=e[5]*u,a[6]=e[6]*u,a[7]=e[7]*u,a[8]=e[8]*u,a[9]=e[9]*u,a[10]=e[10]*u,a[11]=e[11]*u,a[12]=e[12]*u,a[13]=e[13]*u,a[14]=e[14]*u,a[15]=e[15]*u,a}const O=M;function F(e,u){const n=u??new i(16);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}const j=F;function D(e,u){return Math.abs(e[0]-u[0])<_e&&Math.abs(e[1]-u[1])<_e&&Math.abs(e[2]-u[2])<_e&&Math.abs(e[3]-u[3])<_e&&Math.abs(e[4]-u[4])<_e&&Math.abs(e[5]-u[5])<_e&&Math.abs(e[6]-u[6])<_e&&Math.abs(e[7]-u[7])<_e&&Math.abs(e[8]-u[8])<_e&&Math.abs(e[9]-u[9])<_e&&Math.abs(e[10]-u[10])<_e&&Math.abs(e[11]-u[11])<_e&&Math.abs(e[12]-u[12])<_e&&Math.abs(e[13]-u[13])<_e&&Math.abs(e[14]-u[14])<_e&&Math.abs(e[15]-u[15])<_e}function Y(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function re(e){const u=e??new i(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ie(e,u){const n=u??new i(16);if(n===e){let ge;return ge=e[1],e[1]=e[4],e[4]=ge,ge=e[2],e[2]=e[8],e[8]=ge,ge=e[3],e[3]=e[12],e[12]=ge,ge=e[6],e[6]=e[9],e[9]=ge,ge=e[7],e[7]=e[13],e[13]=ge,ge=e[11],e[11]=e[14],e[14]=ge,n}const a=e[0*4+0],s=e[0*4+1],c=e[0*4+2],_=e[0*4+3],f=e[1*4+0],b=e[1*4+1],k=e[1*4+2],T=e[1*4+3],U=e[2*4+0],z=e[2*4+1],I=e[2*4+2],q=e[2*4+3],$=e[3*4+0],H=e[3*4+1],X=e[3*4+2],pe=e[3*4+3];return n[0]=a,n[1]=f,n[2]=U,n[3]=$,n[4]=s,n[5]=b,n[6]=z,n[7]=H,n[8]=c,n[9]=k,n[10]=I,n[11]=X,n[12]=_,n[13]=T,n[14]=q,n[15]=pe,n}function R(e,u){const n=u??new i(16),a=e[0*4+0],s=e[0*4+1],c=e[0*4+2],_=e[0*4+3],f=e[1*4+0],b=e[1*4+1],k=e[1*4+2],T=e[1*4+3],U=e[2*4+0],z=e[2*4+1],I=e[2*4+2],q=e[2*4+3],$=e[3*4+0],H=e[3*4+1],X=e[3*4+2],pe=e[3*4+3],ge=I*pe,Se=X*q,Be=k*pe,ve=X*T,Pe=k*q,Te=I*T,ke=c*pe,Ge=X*_,Me=c*q,ze=I*_,Ee=c*T,De=k*_,Ue=U*H,Ie=$*z,Fe=f*H,We=$*b,qe=f*z,rt=U*b,it=a*H,at=$*s,ot=a*z,ct=U*s,lt=a*b,ut=f*s,kt=ge*b+ve*z+Pe*H-(Se*b+Be*z+Te*H),Gt=Se*s+ke*z+ze*H-(ge*s+Ge*z+Me*H),Mt=Be*s+Ge*b+Ee*H-(ve*s+ke*b+De*H),zt=Te*s+Me*b+De*z-(Pe*s+ze*b+Ee*z),Ae=1/(a*kt+f*Gt+U*Mt+$*zt);return n[0]=Ae*kt,n[1]=Ae*Gt,n[2]=Ae*Mt,n[3]=Ae*zt,n[4]=Ae*(Se*f+Be*U+Te*$-(ge*f+ve*U+Pe*$)),n[5]=Ae*(ge*a+Ge*U+Me*$-(Se*a+ke*U+ze*$)),n[6]=Ae*(ve*a+ke*f+De*$-(Be*a+Ge*f+Ee*$)),n[7]=Ae*(Pe*a+ze*f+Ee*U-(Te*a+Me*f+De*U)),n[8]=Ae*(Ue*T+We*q+qe*pe-(Ie*T+Fe*q+rt*pe)),n[9]=Ae*(Ie*_+it*q+ct*pe-(Ue*_+at*q+ot*pe)),n[10]=Ae*(Fe*_+at*T+lt*pe-(We*_+it*T+ut*pe)),n[11]=Ae*(rt*_+ot*T+ut*q-(qe*_+ct*T+lt*q)),n[12]=Ae*(Fe*I+rt*X+Ie*k-(qe*X+Ue*k+We*I)),n[13]=Ae*(ot*X+Ue*c+at*I-(it*I+ct*X+Ie*c)),n[14]=Ae*(it*k+ut*X+We*c-(lt*X+Fe*c+at*k)),n[15]=Ae*(lt*I+qe*c+ct*k-(ot*k+ut*I+rt*c)),n}function V(e){const u=e[0],n=e[0*4+1],a=e[0*4+2],s=e[0*4+3],c=e[1*4+0],_=e[1*4+1],f=e[1*4+2],b=e[1*4+3],k=e[2*4+0],T=e[2*4+1],U=e[2*4+2],z=e[2*4+3],I=e[3*4+0],q=e[3*4+1],$=e[3*4+2],H=e[3*4+3],X=U*H,pe=$*z,ge=f*H,Se=$*b,Be=f*z,ve=U*b,Pe=a*H,Te=$*s,ke=a*z,Ge=U*s,Me=a*b,ze=f*s,Ee=X*_+Se*T+Be*q-(pe*_+ge*T+ve*q),De=pe*n+Pe*T+Ge*q-(X*n+Te*T+ke*q),Ue=ge*n+Te*_+Me*q-(Se*n+Pe*_+ze*q),Ie=ve*n+ke*_+ze*T-(Be*n+Ge*_+Me*T);return u*Ee+c*De+k*Ue+I*Ie}const oe=R;function C(e,u,n){const a=n??new i(16),s=e[0],c=e[1],_=e[2],f=e[3],b=e[4+0],k=e[4+1],T=e[4+2],U=e[4+3],z=e[8+0],I=e[8+1],q=e[8+2],$=e[8+3],H=e[12+0],X=e[12+1],pe=e[12+2],ge=e[12+3],Se=u[0],Be=u[1],ve=u[2],Pe=u[3],Te=u[4+0],ke=u[4+1],Ge=u[4+2],Me=u[4+3],ze=u[8+0],Ee=u[8+1],De=u[8+2],Ue=u[8+3],Ie=u[12+0],Fe=u[12+1],We=u[12+2],qe=u[12+3];return a[0]=s*Se+b*Be+z*ve+H*Pe,a[1]=c*Se+k*Be+I*ve+X*Pe,a[2]=_*Se+T*Be+q*ve+pe*Pe,a[3]=f*Se+U*Be+$*ve+ge*Pe,a[4]=s*Te+b*ke+z*Ge+H*Me,a[5]=c*Te+k*ke+I*Ge+X*Me,a[6]=_*Te+T*ke+q*Ge+pe*Me,a[7]=f*Te+U*ke+$*Ge+ge*Me,a[8]=s*ze+b*Ee+z*De+H*Ue,a[9]=c*ze+k*Ee+I*De+X*Ue,a[10]=_*ze+T*Ee+q*De+pe*Ue,a[11]=f*ze+U*Ee+$*De+ge*Ue,a[12]=s*Ie+b*Fe+z*We+H*qe,a[13]=c*Ie+k*Fe+I*We+X*qe,a[14]=_*Ie+T*Fe+q*We+pe*qe,a[15]=f*Ie+U*Fe+$*We+ge*qe,a}const ee=C;function te(e,u,n){const a=n??re();return e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11]),a[12]=u[0],a[13]=u[1],a[14]=u[2],a[15]=1,a}function L(e,u){const n=u??r.create();return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function ce(e,u,n){const a=n??r.create(),s=u*4;return a[0]=e[s+0],a[1]=e[s+1],a[2]=e[s+2],a}function K(e,u,n,a){const s=a===e?a:F(e,a),c=n*4;return s[c+0]=u[0],s[c+1]=u[1],s[c+2]=u[2],s}function N(e,u){const n=u??r.create(),a=e[0],s=e[1],c=e[2],_=e[4],f=e[5],b=e[6],k=e[8],T=e[9],U=e[10];return n[0]=Math.sqrt(a*a+s*s+c*c),n[1]=Math.sqrt(_*_+f*f+b*b),n[2]=Math.sqrt(k*k+T*T+U*U),n}function le(e,u,n,a,s){const c=s??new i(16),_=Math.tan(Math.PI*.5-.5*e);if(c[0]=_/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,Number.isFinite(a)){const f=1/(n-a);c[10]=a*f,c[14]=a*n*f}else c[10]=-1,c[14]=-n;return c}function E(e,u,n,a=1/0,s){const c=s??new i(16),_=1/Math.tan(e*.5);if(c[0]=_/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,a===1/0)c[10]=0,c[14]=n;else{const f=1/(a-n);c[10]=n*f,c[14]=a*n*f}return c}function ne(e,u,n,a,s,c,_){const f=_??new i(16);return f[0]=2/(u-e),f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2/(a-n),f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1/(s-c),f[11]=0,f[12]=(u+e)/(e-u),f[13]=(a+n)/(n-a),f[14]=s/(s-c),f[15]=1,f}function W(e,u,n,a,s,c,_){const f=_??new i(16),b=u-e,k=a-n,T=s-c;return f[0]=2*s/b,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*s/k,f[6]=0,f[7]=0,f[8]=(e+u)/b,f[9]=(a+n)/k,f[10]=c/T,f[11]=-1,f[12]=0,f[13]=0,f[14]=s*c/T,f[15]=0,f}function ae(e,u,n,a,s,c=1/0,_){const f=_??new i(16),b=u-e,k=a-n;if(f[0]=2*s/b,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*s/k,f[6]=0,f[7]=0,f[8]=(e+u)/b,f[9]=(a+n)/k,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,c===1/0)f[10]=0,f[14]=s;else{const T=1/(c-s);f[10]=s*T,f[14]=c*s*T}return f}const ue=r.create(),Z=r.create(),Q=r.create();function he(e,u,n,a){const s=a??new i(16);return r.normalize(r.subtract(u,e,Q),Q),r.normalize(r.cross(n,Q,ue),ue),r.normalize(r.cross(Q,ue,Z),Z),s[0]=ue[0],s[1]=ue[1],s[2]=ue[2],s[3]=0,s[4]=Z[0],s[5]=Z[1],s[6]=Z[2],s[7]=0,s[8]=Q[0],s[9]=Q[1],s[10]=Q[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function me(e,u,n,a){const s=a??new i(16);return r.normalize(r.subtract(e,u,Q),Q),r.normalize(r.cross(n,Q,ue),ue),r.normalize(r.cross(Q,ue,Z),Z),s[0]=ue[0],s[1]=ue[1],s[2]=ue[2],s[3]=0,s[4]=Z[0],s[5]=Z[1],s[6]=Z[2],s[7]=0,s[8]=Q[0],s[9]=Q[1],s[10]=Q[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function de(e,u,n,a){const s=a??new i(16);return r.normalize(r.subtract(e,u,Q),Q),r.normalize(r.cross(n,Q,ue),ue),r.normalize(r.cross(Q,ue,Z),Z),s[0]=ue[0],s[1]=Z[0],s[2]=Q[0],s[3]=0,s[4]=ue[1],s[5]=Z[1],s[6]=Q[1],s[7]=0,s[8]=ue[2],s[9]=Z[2],s[10]=Q[2],s[11]=0,s[12]=-(ue[0]*e[0]+ue[1]*e[1]+ue[2]*e[2]),s[13]=-(Z[0]*e[0]+Z[1]*e[1]+Z[2]*e[2]),s[14]=-(Q[0]*e[0]+Q[1]*e[1]+Q[2]*e[2]),s[15]=1,s}function xe(e,u){const n=u??new i(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function be(e,u,n){const a=n??new i(16),s=u[0],c=u[1],_=u[2],f=e[0],b=e[1],k=e[2],T=e[3],U=e[1*4+0],z=e[1*4+1],I=e[1*4+2],q=e[1*4+3],$=e[2*4+0],H=e[2*4+1],X=e[2*4+2],pe=e[2*4+3],ge=e[3*4+0],Se=e[3*4+1],Be=e[3*4+2],ve=e[3*4+3];return e!==a&&(a[0]=f,a[1]=b,a[2]=k,a[3]=T,a[4]=U,a[5]=z,a[6]=I,a[7]=q,a[8]=$,a[9]=H,a[10]=X,a[11]=pe),a[12]=f*s+U*c+$*_+ge,a[13]=b*s+z*c+H*_+Se,a[14]=k*s+I*c+X*_+Be,a[15]=T*s+q*c+pe*_+ve,a}function we(e,u){const n=u??new i(16),a=Math.cos(e),s=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=a,n[6]=s,n[7]=0,n[8]=0,n[9]=-s,n[10]=a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function se(e,u,n){const a=n??new i(16),s=e[4],c=e[5],_=e[6],f=e[7],b=e[8],k=e[9],T=e[10],U=e[11],z=Math.cos(u),I=Math.sin(u);return a[4]=z*s+I*b,a[5]=z*c+I*k,a[6]=z*_+I*T,a[7]=z*f+I*U,a[8]=z*b-I*s,a[9]=z*k-I*c,a[10]=z*T-I*_,a[11]=z*U-I*f,e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function fe(e,u){const n=u??new i(16),a=Math.cos(e),s=Math.sin(e);return n[0]=a,n[1]=0,n[2]=-s,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=s,n[9]=0,n[10]=a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function ye(e,u,n){const a=n??new i(16),s=e[0*4+0],c=e[0*4+1],_=e[0*4+2],f=e[0*4+3],b=e[2*4+0],k=e[2*4+1],T=e[2*4+2],U=e[2*4+3],z=Math.cos(u),I=Math.sin(u);return a[0]=z*s-I*b,a[1]=z*c-I*k,a[2]=z*_-I*T,a[3]=z*f-I*U,a[8]=z*b+I*s,a[9]=z*k+I*c,a[10]=z*T+I*_,a[11]=z*U+I*f,e!==a&&(a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function B(e,u){const n=u??new i(16),a=Math.cos(e),s=Math.sin(e);return n[0]=a,n[1]=s,n[2]=0,n[3]=0,n[4]=-s,n[5]=a,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function A(e,u,n){const a=n??new i(16),s=e[0*4+0],c=e[0*4+1],_=e[0*4+2],f=e[0*4+3],b=e[1*4+0],k=e[1*4+1],T=e[1*4+2],U=e[1*4+3],z=Math.cos(u),I=Math.sin(u);return a[0]=z*s+I*b,a[1]=z*c+I*k,a[2]=z*_+I*T,a[3]=z*f+I*U,a[4]=z*b-I*s,a[5]=z*k-I*c,a[6]=z*T-I*_,a[7]=z*U-I*f,e!==a&&(a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function h(e,u,n){const a=n??new i(16);let s=e[0],c=e[1],_=e[2];const f=Math.sqrt(s*s+c*c+_*_);s/=f,c/=f,_/=f;const b=s*s,k=c*c,T=_*_,U=Math.cos(u),z=Math.sin(u),I=1-U;return a[0]=b+(1-b)*U,a[1]=s*c*I+_*z,a[2]=s*_*I-c*z,a[3]=0,a[4]=s*c*I-_*z,a[5]=k+(1-k)*U,a[6]=c*_*I+s*z,a[7]=0,a[8]=s*_*I+c*z,a[9]=c*_*I-s*z,a[10]=T+(1-T)*U,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}const t=h;function l(e,u,n,a){const s=a??new i(16);let c=u[0],_=u[1],f=u[2];const b=Math.sqrt(c*c+_*_+f*f);c/=b,_/=b,f/=b;const k=c*c,T=_*_,U=f*f,z=Math.cos(n),I=Math.sin(n),q=1-z,$=k+(1-k)*z,H=c*_*q+f*I,X=c*f*q-_*I,pe=c*_*q-f*I,ge=T+(1-T)*z,Se=_*f*q+c*I,Be=c*f*q+_*I,ve=_*f*q-c*I,Pe=U+(1-U)*z,Te=e[0],ke=e[1],Ge=e[2],Me=e[3],ze=e[4],Ee=e[5],De=e[6],Ue=e[7],Ie=e[8],Fe=e[9],We=e[10],qe=e[11];return s[0]=$*Te+H*ze+X*Ie,s[1]=$*ke+H*Ee+X*Fe,s[2]=$*Ge+H*De+X*We,s[3]=$*Me+H*Ue+X*qe,s[4]=pe*Te+ge*ze+Se*Ie,s[5]=pe*ke+ge*Ee+Se*Fe,s[6]=pe*Ge+ge*De+Se*We,s[7]=pe*Me+ge*Ue+Se*qe,s[8]=Be*Te+ve*ze+Pe*Ie,s[9]=Be*ke+ve*Ee+Pe*Fe,s[10]=Be*Ge+ve*De+Pe*We,s[11]=Be*Me+ve*Ue+Pe*qe,e!==s&&(s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s}const o=l;function p(e,u){const n=u??new i(16);return n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function g(e,u,n){const a=n??new i(16),s=u[0],c=u[1],_=u[2];return a[0]=s*e[0*4+0],a[1]=s*e[0*4+1],a[2]=s*e[0*4+2],a[3]=s*e[0*4+3],a[4]=c*e[1*4+0],a[5]=c*e[1*4+1],a[6]=c*e[1*4+2],a[7]=c*e[1*4+3],a[8]=_*e[2*4+0],a[9]=_*e[2*4+1],a[10]=_*e[2*4+2],a[11]=_*e[2*4+3],e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function m(e,u){const n=u??new i(16);return n[0]=e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function x(e,u,n){const a=n??new i(16);return a[0]=u*e[0*4+0],a[1]=u*e[0*4+1],a[2]=u*e[0*4+2],a[3]=u*e[0*4+3],a[4]=u*e[1*4+0],a[5]=u*e[1*4+1],a[6]=u*e[1*4+2],a[7]=u*e[1*4+3],a[8]=u*e[2*4+0],a[9]=u*e[2*4+1],a[10]=u*e[2*4+2],a[11]=u*e[2*4+3],e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}return{add:G,aim:he,axisRotate:l,axisRotation:h,cameraAim:me,clone:j,copy:F,create:d,determinant:V,equals:Y,equalsApproximately:D,fromMat3:y,fromQuat:w,frustum:W,frustumReverseZ:ae,getAxis:ce,getScaling:N,getTranslation:L,identity:re,inverse:R,invert:oe,lookAt:de,mul:ee,mulScalar:O,multiply:C,multiplyScalar:M,negate:S,ortho:ne,perspective:le,perspectiveReverseZ:E,rotate:o,rotateX:se,rotateY:ye,rotateZ:A,rotation:t,rotationX:we,rotationY:fe,rotationZ:B,scale:g,scaling:p,set:v,setAxis:K,setTranslation:te,translate:be,translation:xe,transpose:ie,uniformScale:x,uniformScaling:m}}const Ut=new Map;function vn(i){let r=Ut.get(i);return r||(r=bn(i),Ut.set(i,r)),r}function Sn(i){const r=gt(i);function d(B,A,h,t){const l=new i(4);return B!==void 0&&(l[0]=B,A!==void 0&&(l[1]=A,h!==void 0&&(l[2]=h,t!==void 0&&(l[3]=t)))),l}const v=d;function y(B,A,h,t,l){const o=l??new i(4);return o[0]=B,o[1]=A,o[2]=h,o[3]=t,o}function w(B,A,h){const t=h??new i(4),l=A*.5,o=Math.sin(l);return t[0]=o*B[0],t[1]=o*B[1],t[2]=o*B[2],t[3]=Math.cos(l),t}function S(B,A){const h=A??r.create(3),t=Math.acos(B[3])*2,l=Math.sin(t*.5);return l>_e?(h[0]=B[0]/l,h[1]=B[1]/l,h[2]=B[2]/l):(h[0]=1,h[1]=0,h[2]=0),{angle:t,axis:h}}function G(B,A){const h=le(B,A);return Math.acos(2*h*h-1)}function M(B,A,h){const t=h??new i(4),l=B[0],o=B[1],p=B[2],g=B[3],m=A[0],x=A[1],e=A[2],u=A[3];return t[0]=l*u+g*m+o*e-p*x,t[1]=o*u+g*x+p*m-l*e,t[2]=p*u+g*e+l*x-o*m,t[3]=g*u-l*m-o*x-p*e,t}const O=M;function F(B,A,h){const t=h??new i(4),l=A*.5,o=B[0],p=B[1],g=B[2],m=B[3],x=Math.sin(l),e=Math.cos(l);return t[0]=o*e+m*x,t[1]=p*e+g*x,t[2]=g*e-p*x,t[3]=m*e-o*x,t}function j(B,A,h){const t=h??new i(4),l=A*.5,o=B[0],p=B[1],g=B[2],m=B[3],x=Math.sin(l),e=Math.cos(l);return t[0]=o*e-g*x,t[1]=p*e+m*x,t[2]=g*e+o*x,t[3]=m*e-p*x,t}function D(B,A,h){const t=h??new i(4),l=A*.5,o=B[0],p=B[1],g=B[2],m=B[3],x=Math.sin(l),e=Math.cos(l);return t[0]=o*e+p*x,t[1]=p*e-o*x,t[2]=g*e+m*x,t[3]=m*e-g*x,t}function Y(B,A,h,t){const l=t??new i(4),o=B[0],p=B[1],g=B[2],m=B[3];let x=A[0],e=A[1],u=A[2],n=A[3],a=o*x+p*e+g*u+m*n;a<0&&(a=-a,x=-x,e=-e,u=-u,n=-n);let s,c;if(1-a>_e){const _=Math.acos(a),f=Math.sin(_);s=Math.sin((1-h)*_)/f,c=Math.sin(h*_)/f}else s=1-h,c=h;return l[0]=s*o+c*x,l[1]=s*p+c*e,l[2]=s*g+c*u,l[3]=s*m+c*n,l}function re(B,A){const h=A??new i(4),t=B[0],l=B[1],o=B[2],p=B[3],g=t*t+l*l+o*o+p*p,m=g?1/g:0;return h[0]=-t*m,h[1]=-l*m,h[2]=-o*m,h[3]=p*m,h}function ie(B,A){const h=A??new i(4);return h[0]=-B[0],h[1]=-B[1],h[2]=-B[2],h[3]=B[3],h}function R(B,A){const h=A??new i(4),t=B[0]+B[5]+B[10];if(t>0){const l=Math.sqrt(t+1);h[3]=.5*l;const o=.5/l;h[0]=(B[6]-B[9])*o,h[1]=(B[8]-B[2])*o,h[2]=(B[1]-B[4])*o}else{let l=0;B[5]>B[0]&&(l=1),B[10]>B[l*4+l]&&(l=2);const o=(l+1)%3,p=(l+2)%3,g=Math.sqrt(B[l*4+l]-B[o*4+o]-B[p*4+p]+1);h[l]=.5*g;const m=.5/g;h[3]=(B[o*4+p]-B[p*4+o])*m,h[o]=(B[o*4+l]+B[l*4+o])*m,h[p]=(B[p*4+l]+B[l*4+p])*m}return h}function V(B,A,h,t,l){const o=l??new i(4),p=B*.5,g=A*.5,m=h*.5,x=Math.sin(p),e=Math.cos(p),u=Math.sin(g),n=Math.cos(g),a=Math.sin(m),s=Math.cos(m);switch(t){case"xyz":o[0]=x*n*s+e*u*a,o[1]=e*u*s-x*n*a,o[2]=e*n*a+x*u*s,o[3]=e*n*s-x*u*a;break;case"xzy":o[0]=x*n*s-e*u*a,o[1]=e*u*s-x*n*a,o[2]=e*n*a+x*u*s,o[3]=e*n*s+x*u*a;break;case"yxz":o[0]=x*n*s+e*u*a,o[1]=e*u*s-x*n*a,o[2]=e*n*a-x*u*s,o[3]=e*n*s+x*u*a;break;case"yzx":o[0]=x*n*s+e*u*a,o[1]=e*u*s+x*n*a,o[2]=e*n*a-x*u*s,o[3]=e*n*s-x*u*a;break;case"zxy":o[0]=x*n*s-e*u*a,o[1]=e*u*s+x*n*a,o[2]=e*n*a+x*u*s,o[3]=e*n*s-x*u*a;break;case"zyx":o[0]=x*n*s-e*u*a,o[1]=e*u*s+x*n*a,o[2]=e*n*a-x*u*s,o[3]=e*n*s+x*u*a;break;default:throw new Error(`Unknown rotation order: ${t}`)}return o}function oe(B,A){const h=A??new i(4);return h[0]=B[0],h[1]=B[1],h[2]=B[2],h[3]=B[3],h}const C=oe;function ee(B,A,h){const t=h??new i(4);return t[0]=B[0]+A[0],t[1]=B[1]+A[1],t[2]=B[2]+A[2],t[3]=B[3]+A[3],t}function te(B,A,h){const t=h??new i(4);return t[0]=B[0]-A[0],t[1]=B[1]-A[1],t[2]=B[2]-A[2],t[3]=B[3]-A[3],t}const L=te;function ce(B,A,h){const t=h??new i(4);return t[0]=B[0]*A,t[1]=B[1]*A,t[2]=B[2]*A,t[3]=B[3]*A,t}const K=ce;function N(B,A,h){const t=h??new i(4);return t[0]=B[0]/A,t[1]=B[1]/A,t[2]=B[2]/A,t[3]=B[3]/A,t}function le(B,A){return B[0]*A[0]+B[1]*A[1]+B[2]*A[2]+B[3]*A[3]}function E(B,A,h,t){const l=t??new i(4);return l[0]=B[0]+h*(A[0]-B[0]),l[1]=B[1]+h*(A[1]-B[1]),l[2]=B[2]+h*(A[2]-B[2]),l[3]=B[3]+h*(A[3]-B[3]),l}function ne(B){const A=B[0],h=B[1],t=B[2],l=B[3];return Math.sqrt(A*A+h*h+t*t+l*l)}const W=ne;function ae(B){const A=B[0],h=B[1],t=B[2],l=B[3];return A*A+h*h+t*t+l*l}const ue=ae;function Z(B,A){const h=A??new i(4),t=B[0],l=B[1],o=B[2],p=B[3],g=Math.sqrt(t*t+l*l+o*o+p*p);return g>1e-5?(h[0]=t/g,h[1]=l/g,h[2]=o/g,h[3]=p/g):(h[0]=0,h[1]=0,h[2]=0,h[3]=1),h}function Q(B,A){return Math.abs(B[0]-A[0])<_e&&Math.abs(B[1]-A[1])<_e&&Math.abs(B[2]-A[2])<_e&&Math.abs(B[3]-A[3])<_e}function he(B,A){return B[0]===A[0]&&B[1]===A[1]&&B[2]===A[2]&&B[3]===A[3]}function me(B){const A=B??new i(4);return A[0]=0,A[1]=0,A[2]=0,A[3]=1,A}const de=r.create(),xe=r.create(),be=r.create();function we(B,A,h){const t=h??new i(4),l=r.dot(B,A);return l<-.999999?(r.cross(xe,B,de),r.len(de)<1e-6&&r.cross(be,B,de),r.normalize(de,de),w(de,Math.PI,t),t):l>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r.cross(B,A,de),t[0]=de[0],t[1]=de[1],t[2]=de[2],t[3]=1+l,Z(t,t))}const se=new i(4),fe=new i(4);function ye(B,A,h,t,l,o){const p=o??new i(4);return Y(B,t,l,se),Y(A,h,l,fe),Y(se,fe,2*l*(1-l),p),p}return{create:d,fromValues:v,set:y,fromAxisAngle:w,toAxisAngle:S,angle:G,multiply:M,mul:O,rotateX:F,rotateY:j,rotateZ:D,slerp:Y,inverse:re,conjugate:ie,fromMat:R,fromEuler:V,copy:oe,clone:C,add:ee,subtract:te,sub:L,mulScalar:ce,scale:K,divScalar:N,dot:le,lerp:E,length:ne,len:W,lengthSq:ae,lenSq:ue,normalize:Z,equalsApproximately:Q,equals:he,identity:me,rotationTo:we,sqlerp:ye}}const It=new Map;function Bn(i){let r=It.get(i);return r||(r=Sn(i),It.set(i,r)),r}function Pn(i){function r(h,t,l,o){const p=new i(4);return h!==void 0&&(p[0]=h,t!==void 0&&(p[1]=t,l!==void 0&&(p[2]=l,o!==void 0&&(p[3]=o)))),p}const d=r;function v(h,t,l,o,p){const g=p??new i(4);return g[0]=h,g[1]=t,g[2]=l,g[3]=o,g}function y(h,t){const l=t??new i(4);return l[0]=Math.ceil(h[0]),l[1]=Math.ceil(h[1]),l[2]=Math.ceil(h[2]),l[3]=Math.ceil(h[3]),l}function w(h,t){const l=t??new i(4);return l[0]=Math.floor(h[0]),l[1]=Math.floor(h[1]),l[2]=Math.floor(h[2]),l[3]=Math.floor(h[3]),l}function S(h,t){const l=t??new i(4);return l[0]=Math.round(h[0]),l[1]=Math.round(h[1]),l[2]=Math.round(h[2]),l[3]=Math.round(h[3]),l}function G(h,t=0,l=1,o){const p=o??new i(4);return p[0]=Math.min(l,Math.max(t,h[0])),p[1]=Math.min(l,Math.max(t,h[1])),p[2]=Math.min(l,Math.max(t,h[2])),p[3]=Math.min(l,Math.max(t,h[3])),p}function M(h,t,l){const o=l??new i(4);return o[0]=h[0]+t[0],o[1]=h[1]+t[1],o[2]=h[2]+t[2],o[3]=h[3]+t[3],o}function O(h,t,l,o){const p=o??new i(4);return p[0]=h[0]+t[0]*l,p[1]=h[1]+t[1]*l,p[2]=h[2]+t[2]*l,p[3]=h[3]+t[3]*l,p}function F(h,t,l){const o=l??new i(4);return o[0]=h[0]-t[0],o[1]=h[1]-t[1],o[2]=h[2]-t[2],o[3]=h[3]-t[3],o}const j=F;function D(h,t){return Math.abs(h[0]-t[0])<_e&&Math.abs(h[1]-t[1])<_e&&Math.abs(h[2]-t[2])<_e&&Math.abs(h[3]-t[3])<_e}function Y(h,t){return h[0]===t[0]&&h[1]===t[1]&&h[2]===t[2]&&h[3]===t[3]}function re(h,t,l,o){const p=o??new i(4);return p[0]=h[0]+l*(t[0]-h[0]),p[1]=h[1]+l*(t[1]-h[1]),p[2]=h[2]+l*(t[2]-h[2]),p[3]=h[3]+l*(t[3]-h[3]),p}function ie(h,t,l,o){const p=o??new i(4);return p[0]=h[0]+l[0]*(t[0]-h[0]),p[1]=h[1]+l[1]*(t[1]-h[1]),p[2]=h[2]+l[2]*(t[2]-h[2]),p[3]=h[3]+l[3]*(t[3]-h[3]),p}function R(h,t,l){const o=l??new i(4);return o[0]=Math.max(h[0],t[0]),o[1]=Math.max(h[1],t[1]),o[2]=Math.max(h[2],t[2]),o[3]=Math.max(h[3],t[3]),o}function V(h,t,l){const o=l??new i(4);return o[0]=Math.min(h[0],t[0]),o[1]=Math.min(h[1],t[1]),o[2]=Math.min(h[2],t[2]),o[3]=Math.min(h[3],t[3]),o}function oe(h,t,l){const o=l??new i(4);return o[0]=h[0]*t,o[1]=h[1]*t,o[2]=h[2]*t,o[3]=h[3]*t,o}const C=oe;function ee(h,t,l){const o=l??new i(4);return o[0]=h[0]/t,o[1]=h[1]/t,o[2]=h[2]/t,o[3]=h[3]/t,o}function te(h,t){const l=t??new i(4);return l[0]=1/h[0],l[1]=1/h[1],l[2]=1/h[2],l[3]=1/h[3],l}const L=te;function ce(h,t){return h[0]*t[0]+h[1]*t[1]+h[2]*t[2]+h[3]*t[3]}function K(h){const t=h[0],l=h[1],o=h[2],p=h[3];return Math.sqrt(t*t+l*l+o*o+p*p)}const N=K;function le(h){const t=h[0],l=h[1],o=h[2],p=h[3];return t*t+l*l+o*o+p*p}const E=le;function ne(h,t){const l=h[0]-t[0],o=h[1]-t[1],p=h[2]-t[2],g=h[3]-t[3];return Math.sqrt(l*l+o*o+p*p+g*g)}const W=ne;function ae(h,t){const l=h[0]-t[0],o=h[1]-t[1],p=h[2]-t[2],g=h[3]-t[3];return l*l+o*o+p*p+g*g}const ue=ae;function Z(h,t){const l=t??new i(4),o=h[0],p=h[1],g=h[2],m=h[3],x=Math.sqrt(o*o+p*p+g*g+m*m);return x>1e-5?(l[0]=o/x,l[1]=p/x,l[2]=g/x,l[3]=m/x):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function Q(h,t){const l=t??new i(4);return l[0]=-h[0],l[1]=-h[1],l[2]=-h[2],l[3]=-h[3],l}function he(h,t){const l=t??new i(4);return l[0]=h[0],l[1]=h[1],l[2]=h[2],l[3]=h[3],l}const me=he;function de(h,t,l){const o=l??new i(4);return o[0]=h[0]*t[0],o[1]=h[1]*t[1],o[2]=h[2]*t[2],o[3]=h[3]*t[3],o}const xe=de;function be(h,t,l){const o=l??new i(4);return o[0]=h[0]/t[0],o[1]=h[1]/t[1],o[2]=h[2]/t[2],o[3]=h[3]/t[3],o}const we=be;function se(h){const t=h??new i(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function fe(h,t,l){const o=l??new i(4),p=h[0],g=h[1],m=h[2],x=h[3];return o[0]=t[0]*p+t[4]*g+t[8]*m+t[12]*x,o[1]=t[1]*p+t[5]*g+t[9]*m+t[13]*x,o[2]=t[2]*p+t[6]*g+t[10]*m+t[14]*x,o[3]=t[3]*p+t[7]*g+t[11]*m+t[15]*x,o}function ye(h,t,l){const o=l??new i(4);return Z(h,o),oe(o,t,o)}function B(h,t,l){const o=l??new i(4);return K(h)>t?ye(h,t,o):he(h,o)}function A(h,t,l){const o=l??new i(4);return re(h,t,.5,o)}return{create:r,fromValues:d,set:v,ceil:y,floor:w,round:S,clamp:G,add:M,addScaled:O,subtract:F,sub:j,equalsApproximately:D,equals:Y,lerp:re,lerpV:ie,max:R,min:V,mulScalar:oe,scale:C,divScalar:ee,inverse:te,invert:L,dot:ce,length:K,len:N,lengthSq:le,lenSq:E,distance:ne,dist:W,distanceSq:ae,distSq:ue,normalize:Z,negate:Q,copy:he,clone:me,multiply:de,mul:xe,divide:be,div:we,zero:se,transformMat4:fe,setLength:ye,truncate:B,midpoint:A}}const Ot=new Map;function Tn(i){let r=Ot.get(i);return r||(r=Pn(i),Ot.set(i,r)),r}function Bt(i,r,d,v,y,w){return{mat3:wn(i),mat4:vn(r),quat:Bn(d),vec2:Qt(v),vec3:gt(y),vec4:Tn(w)}}const{mat3:yt,mat4:Re,quat:Oe,vec2:Rt,vec3:J,vec4:Ps}=Bt(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Bt(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Bt(gn,Array,Array,Array,Array,Array);const Lt=document.querySelector("#log");let Le=null,Je=null;function en(){if(Le)return Le;Le=document.createElement("div"),Le.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",Le.appendChild(i),Je=document.createElement("div"),Je.className="ply-spinner-label",Le.appendChild(Je),Le.style.display="none",document.body.appendChild(Le),Le}function kn(i){en(),Je&&i&&(Je.textContent=i),Le&&(Le.style.opacity="1",Le.style.display="flex")}function dt(i){en(),Je&&(Je.textContent=i)}function Gn(){if(!Le)return;const i=Le;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function tn(i,r){if(!Lt)return;const d=document.createElement("p");d.innerText=i,r&&Object.assign(d.style,r),Lt.appendChild(d)}async function $e(i){console.log(i),tn(i)}async function Mn(i){console.error(i),tn(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let nn;function zn(){nn=performance.now()}function Ct(i){const r=performance.now()-nn;$e(`⏱️ ${i} Time: ${r.toFixed(0)} ms`)}function An(i,r){return 2*Math.atan(r/(2*i))}function En(i,r,d,v){const y=Math.tan(v/2),w=Math.tan(d/2),S=y*i,G=-S,M=w*i,O=-M,F=Re.create();return F[0]=2*i/(M-O),F[5]=-2*i/(S-G),F[2]=(M+O)/(M-O),F[6]=(S+G)/(S-G),F[14]=1,F[10]=r/(r-i),F[11]=-(r*i)/(r-i),Re.transpose(F,F),F}async function Dn(i){$e(`loading scene camera file... : ${i}`);const d=await(await fetch(i)).json();return $e(`loaded cameras count: ${d.length}`),d.map(v=>{const y=J.clone(v.position),w=yt.create(...v.rotation.flat()),S=w[0],G=w[4],M=w[8],O=w[1],F=w[5],j=w[9],D=w[2],Y=w[6],re=w[10];S*(F*re-j*Y)-G*(O*re-j*D)+M*(O*Y-F*D)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const R=Re.fromMat3(w);return{position:y,rotation:R,img_name:v.img_name,id:v.id}})}const Un=4*2,In=4*16,sn=4*In+2*Un;function On(i){return i.createBuffer({label:"camera uniform",size:sn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const je=new Float32Array(sn/Float32Array.BYTES_PER_ELEMENT),_t=class _t{constructor(r,d){P(this,"_renderSize",null);P(this,"uniform_buffer");P(this,"position",J.create());P(this,"rotation",Re.create());P(this,"fovY",45/180*Math.PI);P(this,"fovX");P(this,"focal",Rt.create());P(this,"viewport",Rt.create());P(this,"view_matrix",Re.identity());P(this,"view_inv_matrix",Re.identity());P(this,"proj_matrix",Re.identity());P(this,"proj_inv_matrix",Re.identity());P(this,"_negPos",J.create());P(this,"look",J.create(0,0,1));P(this,"up",J.create(0,1,0));P(this,"right",J.create(1,0,0));this.canvas=r,this.device=d,this.uniform_buffer=On(d),this.on_update_canvas()}setRenderSize(r,d){this._renderSize=[r,d],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const r=this._renderSize?this._renderSize[0]:this.canvas.width,d=this._renderSize?this._renderSize[1]:this.canvas.height,v=.5*d/Math.tan(this.fovY*.5);this.focal[0]=v,this.focal[1]=v,this.fovX=An(v,r),this.viewport[0]=r,this.viewport[1]=d,this.proj_matrix=En(.01,100,this.fovX,this.fovY),Re.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],Re.copy(this.rotation,this.view_matrix),Re.translate(this.view_matrix,this._negPos,this.view_matrix),Re.inverse(this.view_matrix,this.view_inv_matrix),J.transformMat4Upper3x3(_t.Z_AXIS,this.view_inv_matrix,this.look),J.normalize(this.look,this.look),J.cross(this.up,this.look,this.right),J.normalize(this.right,this.right);let r=0;je.set(this.view_matrix,r),r+=16,je.set(this.view_inv_matrix,r),r+=16,je.set(this.proj_matrix,r),r+=16,je.set(this.proj_inv_matrix,r),r+=16,je.set(this.viewport,r),r+=2,je.set(this.focal,r),r+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,je)}set_preset(r){J.copy(r.position,this.position),Re.copy(r.rotation,this.rotation),this.update_buffer()}setFov(r){this.fovY=r,this.on_update_canvas()}getFov(){return this.fovY}};P(_t,"Z_AXIS",J.create(0,0,1));let wt=_t;const Rn=J.create(1,0,0),Ln=J.create(0,1,0),Cn=J.create(0,0,1);function Fn(i,r){const d=i[0],v=i[4],y=i[8],w=i[1],S=i[5],G=i[9],M=i[2],O=i[6],F=i[10],j=d+S+F;let D,Y,re,ie;if(j>0){const R=.5/Math.sqrt(j+1);D=.25/R,Y=(O-G)*R,re=(y-M)*R,ie=(w-v)*R}else if(d>S&&d>F){const R=2*Math.sqrt(1+d-S-F);D=(O-G)/R,Y=.25*R,re=(v+w)/R,ie=(y+M)/R}else if(S>F){const R=2*Math.sqrt(1+S-d-F);D=(y-M)/R,Y=(v+w)/R,re=.25*R,ie=(G+O)/R}else{const R=2*Math.sqrt(1+F-d-S);D=(w-v)/R,Y=(y+M)/R,re=(G+O)/R,ie=.25*R}return r[0]=Y,r[1]=re,r[2]=ie,r[3]=D,r}class Wn{constructor(r){P(this,"element");P(this,"enabled",!0);P(this,"center",J.create(0,0,0));P(this,"up",J.create(0,1,0));P(this,"rotation",[0,0]);P(this,"shift",[0,0]);P(this,"scroll",0);P(this,"speed",.1);P(this,"sensitivity",.08);P(this,"leftPressed",!1);P(this,"rightPressed",!1);P(this,"leftDragPans",!1);P(this,"lastX",0);P(this,"lastY",0);P(this,"touches",new Map);P(this,"lastTouchCenter",null);P(this,"lastPinchDistance",null);P(this,"lastTwoFingerAngle",null);P(this,"lastTouchCount",0);P(this,"roll",0);P(this,"_dir",J.create());P(this,"_right",J.create());P(this,"_upCam",J.create());P(this,"_scratch",J.create());P(this,"_qY",Oe.create());P(this,"_qX",Oe.create());P(this,"_qRot",Oe.create());P(this,"_qZ",Oe.create());P(this,"_qLocal",Oe.create());P(this,"_qWorldToCam",Oe.create());P(this,"_scratchMat3",yt.create());P(this,"bboxMin",null);P(this,"bboxMax",null);P(this,"anchor",J.create(0,0,0));P(this,"downCallback",r=>{var d,v,y,w;if(this.enabled){if(r.pointerType==="touch"){this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),(v=(d=r.target)==null?void 0:d.setPointerCapture)==null||v.call(d,r.pointerId),r.preventDefault();return}r.isPrimary&&(r.button===0?(this.leftPressed=!0,this.leftDragPans=r.shiftKey):r.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=r.pageX,this.lastY=r.pageY,(w=(y=r.target)==null?void 0:y.setPointerCapture)==null||w.call(y,r.pointerId),r.preventDefault())}});P(this,"moveCallback",r=>{if(!this.enabled)return;if(r.pointerType==="touch"){if(!this.touches.has(r.pointerId))return;this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),r.preventDefault();return}if(!r.isPrimary||!this.leftPressed&&!this.rightPressed)return;r.preventDefault();const d=r.pageX-this.lastX,v=r.pageY-this.lastY;this.lastX=r.pageX,this.lastY=r.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=d,this.rotation[1]-=v):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=d,this.shift[0]+=v)});P(this,"upCallback",r=>{var d,v,y,w;if(r.pointerType==="touch"){this.touches.delete(r.pointerId),this.handleTouchGestures(),(v=(d=r.target)==null?void 0:d.releasePointerCapture)==null||v.call(d,r.pointerId),r.preventDefault();return}r.button===0?this.leftPressed=!1:r.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(y=r.target)==null?void 0:y.releasePointerCapture)==null||w.call(y,r.pointerId),r.preventDefault()});P(this,"wheelCallback",r=>{if(!this.enabled||(r.preventDefault(),this.rightPressed))return;let d=r.deltaY;r.deltaMode===1?d*=16:r.deltaMode===2&&(d*=100),this.scroll+=d*.01});this.camera=r,this.registerElement(r.canvas)}registerElement(r){this.element&&this.element!==r&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=r,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",d=>d.preventDefault())}setCenter(r){J.copy(r,this.center),J.copy(r,this.anchor)}setOrbitPivot(r){J.set(r[0],r[1],r[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(r){if(!isFinite(r)||r<.001)return;const d=this.camera.rotation;J.set(d[2],d[6],d[10],this._dir),J.normalize(this._dir,this._dir),J.scale(this._dir,r,this._dir),J.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const r=this.camera;if(J.subtract(this.center,r.position,this._scratch),J.length(this._scratch)<1e-6)return;J.normalize(this._scratch,this._scratch),J.cross(this.up,this._scratch,this._right),J.length(this._right)<1e-6&&J.set(1,0,0,this._right),J.normalize(this._right,this._right),J.cross(this._scratch,this._right,this._upCam),J.normalize(this._upCam,this._upCam);const d=r.rotation;d[0]=this._right[0],d[1]=this._upCam[0],d[2]=this._scratch[0],d[3]=0,d[4]=this._right[1],d[5]=this._upCam[1],d[6]=this._scratch[1],d[7]=0,d[8]=this._right[2],d[9]=this._upCam[2],d[10]=this._scratch[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,r.update_buffer()}setBbox(r,d){this.bboxMin=J.create(r[0],r[1],r[2]),this.bboxMax=J.create(d[0],d[1],d[2]);const v=(r[0]+d[0])*.5,y=(r[1]+d[1])*.5,w=(r[2]+d[2])*.5;J.set(v,y,w,this.center),J.set(v,y,w,this.anchor)}resetToCamera(){const r=this.camera.rotation;J.set(r[2],r[6],r[10],this._dir),J.normalize(this._dir,this._dir);let d=null;if(this.bboxMin&&this.bboxMax){let v=-1/0,y=1/0,w=!1;for(let S=0;S<3;S++){const G=this._dir[S],M=this.bboxMin[S]-this.camera.position[S],O=this.bboxMax[S]-this.camera.position[S];if(Math.abs(G)>1e-8){const F=M/G,j=O/G;v=Math.max(v,Math.min(F,j)),y=Math.min(y,Math.max(F,j))}else if(M>0||O<0){w=!0;break}}!w&&v<=y&&y>0&&(d=(Math.max(v,0)+y)*.5)}if(d===null||!isFinite(d)||d<.001){J.subtract(this.anchor,this.camera.position,this._scratch);const v=J.dot(this._scratch,this._dir);d=v>.001?v:J.length(this._scratch)}d=Math.max(.1,d),J.scale(this._dir,d,this._dir),J.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const r=this.touches.size;if(r!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=r,r===1){const d=this.touches.values().next().value;if(this.lastTouchCenter){const v=d.x-this.lastTouchCenter[0],y=d.y-this.lastTouchCenter[1];this.rotation[0]+=v*.3,this.rotation[1]-=y*.3}this.lastTouchCenter=[d.x,d.y]}else if(r===2){const d=Array.from(this.touches.values()),v=(d[0].x+d[1].x)*.5,y=(d[0].y+d[1].y)*.5,w=d[1].x-d[0].x,S=d[1].y-d[0].y,G=Math.hypot(w,S),M=Math.atan2(S,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const O=v-this.lastTouchCenter[0],F=y-this.lastTouchCenter[1],j=Math.hypot(O,F),D=Math.abs(G-this.lastPinchDistance);let Y=M-this.lastTwoFingerAngle;Y>Math.PI&&(Y-=2*Math.PI),Y<-Math.PI&&(Y+=2*Math.PI),j>.5&&(this.shift[1]-=O,this.shift[0]+=F),D>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(G/this.lastPinchDistance)*10),Math.abs(Y)>.0087&&(this.roll+=Y)}this.lastTouchCenter=[v,y],this.lastPinchDistance=G,this.lastTwoFingerAngle=M}}update(r){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const d=this.camera;{const R=d.rotation;this.up[0]=R[1],this.up[1]=R[5],this.up[2]=R[9],J.length(this.up)>1e-6?J.normalize(this.up,this.up):J.set(0,1,0,this.up)}let v=0,y=!1;Math.abs(this.roll)>1e-4&&(v=this.roll,this.roll=0,y=!0),J.subtract(d.position,this.center,this._dir);let w=J.length(this._dir);w<1e-6&&(w=1e-6);const S=Math.exp(Math.log(w)+this.scroll*r*10*this.speed);J.scale(this._dir,S/w,this._dir),w=S;const G=d.rotation;this._right[0]=G[0],this._right[1]=G[4],this._right[2]=G[8],J.normalize(this._right,this._right),J.length(this._right)<1e-6&&J.set(1,0,0,this._right);const M=J.create(G[1],G[5],G[9]);J.normalize(M,M),J.length(M)<1e-6&&J.set(0,1,0,M);const O=r*this.speed*.1*w,F=this.shift[1]*O,j=-this.shift[0]*O;J.scale(this._right,F,this._scratch),J.add(this.center,this._scratch,this.center),J.add(d.position,this._scratch,d.position),J.scale(M,j,this._scratch),J.add(this.center,this._scratch,this.center),J.add(d.position,this._scratch,d.position);const D=this.rotation[0]*r*this.sensitivity,Y=this.rotation[1]*r*this.sensitivity;if(Math.abs(D)>1e-5||Math.abs(Y)>1e-5||y){const R=d.rotation;Fn(R,this._qWorldToCam),Oe.fromAxisAngle(Rn,-Y,this._qX),Oe.fromAxisAngle(Ln,-D,this._qY),Oe.multiply(this._qX,this._qY,this._qLocal),y&&(Oe.fromAxisAngle(Cn,1*v,this._qZ),Oe.multiply(this._qZ,this._qLocal,this._qLocal)),Oe.normalize(this._qLocal,this._qLocal),Oe.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),Oe.normalize(this._qWorldToCam,this._qWorldToCam),yt.fromQuat(this._qWorldToCam,this._scratchMat3),Re.fromMat3(this._scratchMat3,d.rotation);const V=d.rotation,oe=V[2],C=V[6],ee=V[10];d.position[0]=this.center[0]-oe*w,d.position[1]=this.center[1]-C*w,d.position[2]=this.center[2]-ee*w,this.up[0]=V[1],this.up[1]=V[5],this.up[2]=V[9],J.normalize(this.up,this.up)}else J.add(this.center,this._dir,d.position);d.update_buffer();const ie=Math.pow(.8,r*60);this.rotation[0]*=ie,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=ie,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=ie,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=ie,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=ie,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function tt(i){return i+3&-4}const qn=2,$n=3,Nn=5,Zn=6,et=7,pt=8,nt=9,st=10;function Hn(i){const r=new TextDecoder("ascii"),d=r.decode(new Uint8Array(i,0,4));if(d!=="NAT2")throw new Error(`NAT2 bad magic: '${d}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const v=new DataView(i),y=4,w=v.getUint32(y+0,!0),S=v.getUint32(y+4,!0),G=v.getUint32(y+8,!0),M=v.getUint32(y+12,!0),O=v.getUint32(y+16,!0),F=v.getFloat32(y+20,!0),j=v.getUint32(y+24,!0),D=v.getUint32(y+28,!0),Y=v.getFloat32(y+32,!0),re=v.getFloat32(y+36,!0),ie=v.getFloat32(y+40,!0),R=v.getUint32(y+44,!0),V=v.getFloat32(y+48,!0),oe=v.getFloat32(y+52,!0),C=v.getUint32(y+56,!0),ee=v.getUint32(y+60,!0),te=D===nt||D===st,L=te?ee:0,ce=te?0:ee&255,K=te?0:ee>>8&255,N=ce>0?ce:1;if(D===Nn||D===Zn)throw new Error(`NAT2: paired-RVQ format=${D} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const le=D===nt||D===st;if(D!==qn&&D!==$n&&D!==et&&D!==pt&&!le)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${D}`);if(w%4!==0||R%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${R}`);let E=y+64;const ne=(C+1)*4,W=new Uint32Array(i.slice(E,E+ne));E+=ne;let ae;if(N>1){const se=(N+1)*4;if(E+se>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${se} from ${E})`);ae=new Uint32Array(i.slice(E,E+se)),E+=se}else ae=new Uint32Array([0,w]);let ue=0;for(let se=0;se<N;se++){const fe=ae[se+1]-ae[se];fe>ue&&(ue=fe)}if(le){const se=L&1?7:6,fe=O*se*4;if(E+fe>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${fe} more bytes from offset ${E}, have ${i.byteLength-E}`);const ye=new Float32Array(i.slice(E,E+fe));E+=fe;const B=Math.max(1,L>>8&255),A=[];let h=0;for(let g=0,m=w,x=R;g<B;g++,m>>=1,x>>=1){const e=Math.max(1,m>>2)*Math.max(1,x>>2)*16;A.push(e),h+=e}const t=i.byteLength-E;if(t<h)throw new Error(`NAT2 probe atlas truncated: need ${h} bytes for ${w}x${R} x${B} mips, have ${t}`);const l=[];let o=E;for(const g of A)l.push(new Uint8Array(i.slice(o,o+g))),o+=g;const p=l[0];return{width:w,height:S,channels:G,kernel_type:M,num_rects:O,uv_extent:F,sb_number:j,format:D,sh_bias:Y,res_bias:re,compact_mult:ie,layer_h:R,atlas_scale:V,atlas_offset:oe,n_layers:C,n_cols:N,layer_cuts:W,column_cuts:ae,slice_width:ue,rects_expanded:ye,atlas_bytes:p,mip_bytes:l,probe_mode:L&1?2:1}}const Z=O*4*4;if(E+Z>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${Z} more bytes from offset ${E}, have ${i.byteLength-E}`);const Q=new Float32Array(i.slice(E,E+Z));E+=Z;const he=new Float32Array(O*5);for(let se=0;se<O;se++){const fe=Q[se*4+0],ye=Q[se*4+1],B=Q[se*4+2],A=Q[se*4+3];let h=0;for(let g=1;g<=C&&W[g]<=ye;g++)h=g;let t=0;for(let g=1;g<=N&&ae[g]<=fe;g++)t=g;const l=ye-W[h],o=fe-ae[t],p=t*C+h;he[se*5+0]=o,he[se*5+1]=l,he[se*5+2]=B,he[se*5+3]=A,he[se*5+4]=p}let me,de;const xe=N,we=w/4*16;if(D===et||D===pt){if(E+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const se=D===et?"BCCB":"ACCB",fe=r.decode(new Uint8Array(i,E,4));if(fe!==se)throw new Error(`NAT2 typeD bad sub-magic: expected '${se}' got '${fe}'`);const ye=v.getUint32(E+4,!0),B=v.getUint32(E+8,!0),A=v.getUint32(E+12,!0),h=v.getUint32(E+16,!0),t=v.getUint32(E+20,!0);if(ye!==1)throw new Error(`NAT2 BCCB unsupported version ${ye}`);if(A!==S/4||h!==w/4||t!==A*h)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${S}, sub-header ${h}×${A} (${t} blocks)`);E+=24;const l=B*16;if(E+l>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${l}, have ${i.byteLength-E})`);const o=new Uint8Array(i,E,l);E+=l;const p=t*2;if(E+p>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${p}, have ${i.byteLength-E})`);const g=new Uint16Array(i.slice(E,E+p));E+=p;const m=new Uint8Array(t*16);for(let x=0;x<t;x++){const e=g[x]*16;m.set(o.subarray(e,e+16),x*16)}if(me=m,K>1){de=[m];for(let x=1;x<K;x++){if(E+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${x} sub-header`);const e=r.decode(new Uint8Array(i,E,4));if(e!==se)throw new Error(`NAT2 mip ${x}: bad sub-magic '${e}'`);const u=v.getUint32(E+8,!0),n=v.getUint32(E+16,!0),a=v.getUint32(E+20,!0);if(n!==x)throw new Error(`NAT2 mip section order: expected level ${x}, got ${n}`);E+=24;let s=0;for(let b=0;b<xe;b++)for(let k=0;k<C;k++){const T=rn(x,ae[b+1]-ae[b],W[k+1]-W[k],ue,R);s+=(T.cw>>2)*(T.ch>>2)}if(s!==a)throw new Error(`NAT2 mip ${x}: ${a} blocks, loader expects ${s}`);if(E+u*16+a*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${x}`);const c=new Uint8Array(i,E,u*16);E+=u*16;const _=new Uint16Array(i.slice(E,E+a*2));E+=a*2;const f=new Uint8Array(a*16);for(let b=0;b<a;b++){const k=_[b]*16;f.set(c.subarray(k,k+16),b*16)}de.push(f)}}}else{let se=0;for(let fe=0;fe<C;fe++){const ye=W[fe+1]-W[fe];if(ye%4!==0)throw new Error(`NAT2 BC7 layer ${fe} rows ${ye} not 4-aligned`);se+=ye/4*we}if(E+se>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${se} more bytes from offset ${E}, have ${i.byteLength-E}`);me=new Uint8Array(i.slice(E,E+se))}return{width:w,height:S,channels:G,kernel_type:M,num_rects:O,uv_extent:F,sb_number:j,format:D,sh_bias:Y,res_bias:re,compact_mult:ie,layer_h:R,atlas_scale:V,atlas_offset:oe,n_layers:C,n_cols:N,layer_cuts:W,column_cuts:ae,slice_width:ue,rects_expanded:he,atlas_bytes:me,...de?{mip_bytes:de}:{}}}function rn(i,r,d,v,y){const w=G=>G+3>>2<<2,S=1<<i;return{cw:Math.min(w(Math.max(1,v>>i)),w(Math.ceil(r/S))),ch:Math.min(w(Math.max(1,y>>i)),w(Math.ceil(d/S)))}}const jn=32;function Yn(i,r,d){if(r.format===5||r.format===6)throw new Error(`paired-RVQ format=${r.format} is retired; re-bake with typeD (--bc7-codebook)`);let v,y,w,S;if(r.format===2||r.format===et||r.format===nt){if(!i.features.has("texture-compression-bc"))return $e(`⚠️  bundle is BC7 (format=${r.format}) but texture-compression-bc not supported — atlas disabled`),null;S=r.format===nt?"BC7 atlas (proberes: shared probe texture)":r.format===et?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:v,view:y,sampler:w}=Ft(i,r,"bc7-rgba-unorm",S)}else if(r.format===3||r.format===pt||r.format===st){if(!i.features.has("texture-compression-astc"))return $e(`⚠️  bundle is ASTC 4x4 (format=${r.format}) but texture-compression-astc not supported — atlas disabled`),null;S=r.format===st?"ASTC 4x4 atlas (proberes: shared probe texture)":r.format===pt?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:v,view:y,sampler:w}=Ft(i,r,"astc-4x4-unorm",S)}else return $e(`⚠️  unsupported atlas format ${r.format} — atlas disabled`),null;const{rects_expanded:G}=r,M=i.createBuffer({label:"atlas rects (5-stride)",size:tt(G.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(M,0,G);const O=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ft(i,O,r,d),{texture:v,view:y,sampler:w,rectsBuffer:M,texParamsBuffer:O,meta:r}}function Ft(i,r,d,v){const{width:y,layer_h:w,n_layers:S,n_cols:G,layer_cuts:M,column_cuts:O,slice_width:F,atlas_bytes:j}=r,Y=y/4*16,re=i.limits.maxTextureDimension2D;if(w>re||F>re)throw new Error(`⚠️  atlas slice dims ${F}x${w} exceed maxTextureDimension2D=${re}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const ie=G*S;if(ie>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${G} cols × ${S} layers = ${ie} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const R=r.mip_bytes??[j],V=R.length,oe=i.createTexture({label:v,size:{width:F,height:w,depthOrArrayLayers:ie},mipLevelCount:V,sampleCount:1,dimension:"2d",format:d,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let L=0;L<G;L++){const ce=O[L]/4,K=(O[L+1]-O[L])/4;for(let N=0;N<S;N++){const le=M[N]/4,E=(M[N+1]-M[N])/4,ne=L*S+N,W=le*Y+ce*16;i.queue.writeTexture({texture:oe,mipLevel:0,origin:{x:0,y:0,z:ne},aspect:"all"},j,{offset:W,bytesPerRow:Y,rowsPerImage:E},{width:K*4,height:E*4,depthOrArrayLayers:1})}}const C=r.format===nt||r.format===st;for(let L=1;L<V&&!C;L++){let ce=0;for(let K=0;K<G;K++)for(let N=0;N<S;N++){const{cw:le,ch:E}=rn(L,O[K+1]-O[K],M[N+1]-M[N],F,w);i.queue.writeTexture({texture:oe,mipLevel:L,origin:{x:0,y:0,z:K*S+N},aspect:"all"},R[L],{offset:ce,bytesPerRow:(le>>2)*16,rowsPerImage:E>>2},{width:le,height:E,depthOrArrayLayers:1}),ce+=(le>>2)*(E>>2)*16}}for(let L=1;L<V&&C;L++){const ce=Math.max(1,F>>L),K=Math.max(1,w>>L);i.queue.writeTexture({texture:oe,mipLevel:L,origin:{x:0,y:0,z:0},aspect:"all"},R[L],{offset:0,bytesPerRow:Math.max(1,ce>>2)*16,rowsPerImage:Math.max(1,K>>2)},{width:ce,height:K,depthOrArrayLayers:1})}V>1&&console.log(`[atlas] ${V} mip levels uploaded (${C?"trilinear":"per-surfel integer level"})`);const ee=oe.createView({label:`${v} view`,dimension:"2d-array"}),te=i.createSampler({label:`${v} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:V>1&&C?"linear":"nearest"});return{texture:oe,view:ee,sampler:te}}function ft(i,r,d,v,y=1){var O;const w=new ArrayBuffer(32),S=new Uint32Array(w),G=new Float32Array(w);S[0]=v?1:0,G[1]=d.atlas_scale,G[2]=d.atlas_offset,G[3]=d.res_bias,S[4]=d.probe_mode?d.probe_mode|0:0,S[5]=d.width|0;const M=(((O=d.mip_bytes)==null?void 0:O.length)??1)>1;S[6]=M&&y!==0?1:0,i.queue.writeBuffer(r,0,w)}async function Vn(i,r){$e(`loading ply file from File... : ${i.name}`),kn("downloading PLY...");const d=await i.arrayBuffer();try{return await Xn(d,r)}finally{Gn()}}async function Xn(i,r){return new Promise((d,v)=>{const y=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});y.onmessage=w=>{var G,M,O,F,j,D,Y,re,ie,R,V,oe;const S=w.data;if((S==null?void 0:S.type)==="error"){Mn(`PLY worker error: ${S.message??"unknown error"}`),y.terminate(),v(new Error(S.message??"Worker error"));return}else if((S==null?void 0:S.type)==="download_progress"){const C=S.totalBytes,ee=S.loadedBytes/(1024*1024),te=C?C/(1024*1024):void 0,L=(S.speedBps??0)/(1024*1024),ce=C?Math.min(99,Math.floor(S.loadedBytes/C*100)):void 0,K=te?`total ${te.toFixed(1)} MB`:"total -- MB",N=te&&ce!==void 0?`${ee.toFixed(1)} MB downloaded (${ce}%)`:`${ee.toFixed(1)} MB downloaded`,le=`${L.toFixed(2)} MB/s`;dt(`downloading PLY ...
${K}, ${N}
${le}`);return}else if((S==null?void 0:S.type)==="fetched"){$e(`💾 Fetched (${S.byteLength} bytes)`),Ct("Download"),dt("parsing PLY..."),zn();return}else if((S==null?void 0:S.type)==="parse_progress"){const C=S.total??0,ee=S.read??0,te=C>0?Math.floor(ee/C*100):0;dt(`parsing PLY ...
${ee}/${C} surfels (${te}%)`);return}else if((S==null?void 0:S.type)==="done"){const C=S.num_points,ee=S.K,te=S.feature_mode??0,L=S.sh_bias,ce=S.kernel_type,K=S.surfelBuffer,N=S.svParamsBuffer;$e(`🪐 Total surfels: ${C}, mode=${te===1?"SB":"SV"}, K=${ee}, sh_bias=${L}, kernel_type=${ce}`);const E=r.createBuffer({label:"surfel input buffer",size:tt(C*jn),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});r.queue.writeBuffer(E,0,K);const ne=N.byteLength>0?N.byteLength:16,W=r.createBuffer({label:te===1?"color_params buffer (SB)":"color_params buffer (SV)",size:tt(ne),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});N.byteLength>0&&r.queue.writeBuffer(W,0,N),y.terminate(),Ct("Parse"),d({num_points:C,K:ee,feature_mode:te,sh_bias:L,kernel_type:ce,surfel_buffer:E,surfel_data:new Float32Array(K),sv_params_buffer:W,bbox:S.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:S.centroid??[((((M=(G=S.bbox)==null?void 0:G.min)==null?void 0:M[0])??-1)+(((F=(O=S.bbox)==null?void 0:O.max)==null?void 0:F[0])??1))/2,((((D=(j=S.bbox)==null?void 0:j.min)==null?void 0:D[1])??-1)+(((re=(Y=S.bbox)==null?void 0:Y.max)==null?void 0:re[1])??1))/2,((((R=(ie=S.bbox)==null?void 0:ie.min)==null?void 0:R[2])??-1)+(((oe=(V=S.bbox)==null?void 0:V.max)==null?void 0:oe[2])??1))/2]})}},y.onerror=w=>{y.terminate(),v(w)},i instanceof ArrayBuffer?(dt("parsing PLY..."),y.postMessage({type:"start",plyBuffer:i},[i])):y.postMessage({type:"start_url",url:i.url})})}const Jn=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
            let lmax = f32(min(atlas_params.mip_count - 1u, amax));
            lod = clamp(floor(log2(max(tpp, 1.0)) + 0.5 - atlas_params.lod_bias), 0.0, lmax);
            if lod >= 1.0 {
                // Level-l texel centres span [u0 + 2^l/2, u0 + w − 2^l/2]: shrink the uv span
                // about the tile centre so bilinear taps stay inside the tile (< ½ level-l
                // texel of distortion; at l = log2(w) the tile collapses to its mean).
                let t = exp2(lod);
                fx = max(w_span - t, 0.0) / w_span;
                fy = max(h_span - t, 0.0) / h_span;
            }
        }
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 * w_span + 0.5 * fx) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 * h_span + 0.5 * fy) * inv_h;
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
`,Wt=`// 2DGS render — vertex+fragment.
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
`,an=`const WG_SIZE = 256u;
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
}`,Kn=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,on=`// shader implementing gpu radix sort.

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
`,cn=`// shader implementing gpu radix sort.

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
`,ln=`// ============================================================================
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
}`,un=32,bt=1,vt=2,qt=4,$t=512,Nt=1024,Qn=0,He=new ArrayBuffer(un),Ce={canvas_size:new Uint32Array(He,0,2),accel_flags:new Uint32Array(He,8,1),feature_mode:new Uint32Array(He,12,1),gaussian_scaling:new Float32Array(He,16,1),sh_bias:new Float32Array(He,20,1),color_K:new Uint32Array(He,24,1),walltime:new Float32Array(He,28,1)};function es(i){Ce.canvas_size[0]=i.width>>>0,Ce.canvas_size[1]=i.height>>>0,Ce.accel_flags[0]=(i.accel_flags??bt|vt)>>>0,Ce.feature_mode[0]=(i.feature_mode??Qn)>>>0,Ce.gaussian_scaling[0]=i.gaussian_scaling??1,Ce.sh_bias[0]=i.sh_bias??.5,Ce.color_K[0]=(i.color_K??0)>>>0,Ce.walltime[0]=i.walltime??0}function dn(i,r){i.queue.writeBuffer(r,0,He)}function fn(i,r,d){d&&i&&r&&dn(i,r)}function ts(i,r,d,v,y=!0){Ce.canvas_size[0]=i>>>0,Ce.canvas_size[1]=r>>>0,fn(d??null,v??null,y)}function ns(i,r,d,v=!0){let y=Ce.accel_flags[0];i.oac!==void 0&&(y=i.oac?y|bt:y&~bt),i.spr!==void 0&&(y=i.spr?y|vt:y&~vt),i.bfc!==void 0&&(y=i.bfc?y|qt:y&~qt),i.hypLegacy!==void 0&&(y=i.hypLegacy?y|$t:y&~$t),i.legacyPos!==void 0&&(y=i.legacyPos?y|Nt:y&~Nt),Ce.accel_flags[0]=y>>>0,fn(r??null,d??null,v)}const ss=256;function Zt(i,r){const d=[],v=[];let y=!0;for(const w of i.split(`
`)){const S=w.trim();let G;if((G=/^\/\/#if\s+(\w+)\s*$/.exec(S))!==null){const M=!!r[G[1]];v.push({parent:y,taken:M}),y=y&&M;continue}if(/^\/\/#else\s*$/.test(S)){const M=v[v.length-1];if(M===void 0)throw new Error("preprocessWGSL: #else without #if");y=M.parent&&!M.taken;continue}if(/^\/\/#endif\s*$/.test(S)){const M=v.pop();if(M===void 0)throw new Error("preprocessWGSL: #endif without #if");y=M.parent;continue}y&&d.push(w)}if(v.length!==0)throw new Error("preprocessWGSL: unterminated #if");return d.join(`
`)}const rs=un,is=8,as=96,os=12,Pt=8,Ze=1<<Pt,Xe=256,ht=32/Pt,cs=0,Ht=ht&1;function jt(i,r){return{sort_indices_buffer:r.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:r.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ls(i,r){const d=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),v=i.createPipelineLayout({bindGroupLayouts:[d]}),y=w=>i.createComputePipeline({layout:v,compute:{module:r,entryPoint:w,constants:{WG_SIZE:Xe}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:d}}function us(i,r,d){const v=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=i.createPipelineLayout({bindGroupLayouts:[v]}),S=i.createPipelineLayout({bindGroupLayouts:[y]}),G=[];for(let M=0;M<ht;M++){const O={PASS_ID:M+cs,RS_RADIX_LOG2:Pt,RS_RADIX_SIZE:Ze};G.push({localHistogram:i.createComputePipeline({layout:w,compute:{module:r,entryPoint:"local_histogram_pass",constants:O}}),scatterElements:i.createComputePipeline({layout:S,compute:{module:d,entryPoint:"scatter_elements",constants:O}})})}return{passes:G,localHistogramBindGroupLayout:v,scatterBindGroupLayout:y}}function ds(i){const r=i.createShaderModule({label:"local histogram",code:cn}),d=i.createShaderModule({label:"scatter",code:on}),v=i.createShaderModule({label:"blelloch prefix",code:ln}),y=ls(i,v),w=us(i,r,d);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:y}}function Yt(i){const r=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),d=r.createView({dimension:"2d-array"}),v=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(w,0,new ArrayBuffer(32));const S={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:r,view:d,sampler:v,rectsBuffer:y,texParamsBuffer:w,meta:S}}class fs{constructor(r,d,v,y,w,S=null,G={}){P(this,"device");P(this,"pc");P(this,"presentationFormat");P(this,"camera_buffer");P(this,"render_settings_buffer");P(this,"draw_indirect_buffer");P(this,"splat_2d_buffer");P(this,"querySet");P(this,"resolveBuffer");P(this,"resultBuffer");P(this,"queriesPerFrame",is);P(this,"queryCapacityFrames",200);P(this,"sort_prefixBindGroup");P(this,"sort_pipelines");P(this,"sort_localHistogramBindGroups");P(this,"sort_scatterBindGroups");P(this,"lastFrame",0);P(this,"frameCount",0);P(this,"preprocessPipeline");P(this,"cullPipeline");P(this,"renderPipeline");P(this,"indirectPipeline");P(this,"renderShaderModule");P(this,"betaKernel",1);P(this,"fetchById");P(this,"octBound");P(this,"acc16");P(this,"accTexture",null);P(this,"accView",null);P(this,"accW",0);P(this,"accH",0);P(this,"legacyRenderPipeline",null);P(this,"varyingsPipeline",null);P(this,"legacyRenderer",!1);P(this,"accResolvePipeline",null);P(this,"accResolveBgl",null);P(this,"accResolveBindGroup",null);P(this,"renderSettingsBgl");P(this,"preprocessBgl2");P(this,"renderSplatsBgl");P(this,"atlasBgl");P(this,"sort_info_buffer");P(this,"sort_ping_pong");P(this,"crsBg");P(this,"gsBg");P(this,"cullBg2");P(this,"preprocessBg1");P(this,"renderSplatsBindGroup");P(this,"renderSettingsBindGroup");P(this,"atlasBindGroup");P(this,"indirectBindGroup");P(this,"sh_solvers_buffer");P(this,"bfcParamsBuffer");P(this,"bfcBindGroupLayout");P(this,"bfcBindGroup");P(this,"bgColor",[0,0,0,0]);P(this,"showPerfDialogNext",!1);P(this,"requestReorderNextFrame",!1);P(this,"reorderInFlight",!1);P(this,"downloadOnceNextRead",!1);P(this,"downloadOnceFileName","fps_metrics");P(this,"allFrameTimes",[]);P(this,"lastStageBreakdownMs",null);P(this,"timeQueryEnabled");P(this,"atlas");P(this,"atlasParamsBuffer");P(this,"_atlasEnabled",!0);P(this,"mipLodBias",1);P(this,"_mipMode",1);this.fetchById=G.fetchById??!0,this.octBound=G.octBound??!1,this.acc16=G.acc16??!1,$e(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const M=w.includes("timestamp-query");this.timeQueryEnabled=M,M&&$e("⏰ using timestamp-query"),this.pc=r,this.device=d,this.presentationFormat=v,this.camera_buffer=y,this.atlas=S??Yt(d),this.atlasParamsBuffer=d.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),d.addEventListener("uncapturederror",de=>{console.error("A WebGPU error was not captured:",de.error)}),this._setupTimestampQueries(),this._setupBuffers();const O=(Math.floor((this.pc.num_points+Xe-1)/Xe)+1)*Xe,F=Math.ceil(O/Xe);console.log(`keys count adjusted: ${O}`),console.log(`key size: ${this.pc.num_points}`);const j=d.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ds(d);const D=[jt(O,d),jt(O,d)],Y=d.createBuffer({label:"workgroup histograms",size:F*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),re=d.createBuffer({label:"workgroup prefixes",size:F*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=d.createBuffer({label:"digit base",size:Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=Math.ceil(F/Xe),V=Math.ceil(R/Xe),oe=d.createBuffer({label:"prefix l0 sums",size:R*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),C=d.createBuffer({label:"prefix l0 offsets",size:R*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=d.createBuffer({label:"prefix l1 sums",size:V*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=d.createBuffer({label:"prefix l1 offsets",size:V*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=d.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:j}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:re}},{binding:3,resource:{buffer:oe}},{binding:4,resource:{buffer:C}},{binding:5,resource:{buffer:ee}},{binding:6,resource:{buffer:te}},{binding:7,resource:{buffer:ie}}]}),this.sort_localHistogramBindGroups=[d.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:j}},{binding:1,resource:{buffer:D[0].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]}),d.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:j}},{binding:1,resource:{buffer:D[1].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]})],this.sort_scatterBindGroups=[d.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:j}},{binding:1,resource:{buffer:ie}},{binding:2,resource:{buffer:D[0].sort_depths_buffer}},{binding:3,resource:{buffer:D[1].sort_depths_buffer}},{binding:4,resource:{buffer:D[0].sort_indices_buffer}},{binding:5,resource:{buffer:D[1].sort_indices_buffer}},{binding:6,resource:{buffer:re}}]}),d.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:j}},{binding:1,resource:{buffer:ie}},{binding:2,resource:{buffer:D[1].sort_depths_buffer}},{binding:3,resource:{buffer:D[0].sort_depths_buffer}},{binding:4,resource:{buffer:D[1].sort_indices_buffer}},{binding:5,resource:{buffer:D[0].sort_indices_buffer}},{binding:6,resource:{buffer:re}}]})],this.sort_info_buffer=j,this.sort_ping_pong=D;const L=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ce=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),K=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),N=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:L,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ce,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:K,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=N,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:N,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const le=this.device.createShaderModule({code:an});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:le,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const E=this.device.createShaderModule({code:Kn});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[L,ce,K,this.bfcBindGroupLayout]}),compute:{module:E,entryPoint:"surfel_cull"}});const ne=this.device.createShaderModule({code:Jn});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[L,N]}),compute:{module:ne,entryPoint:"preprocess"}});const W=this.device.createShaderModule({label:"render_2dgs",code:Zt(Wt,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});W.getCompilationInfo().then(de=>{de.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),de.messages.forEach(xe=>{(xe.type==="error"?console.error:xe.type==="warning"?console.warn:console.log)(`${xe.type} (line ${xe.lineNum}:${xe.linePos}): ${xe.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ae=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),ue=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,Z=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:ue,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Q=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),he=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ae,Z,Q]}),vertex:{module:W,entryPoint:"vs_main"},fragment:{module:W,entryPoint:"fs_main",constants:{BETA_KERNEL:he},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const me=(de,xe,be)=>{const we=this.device.createShaderModule({label:`render_2dgs (${de})`,code:Zt(Wt,{FETCH_BY_ID:xe,OCT:be})});return this.device.createRenderPipeline({label:`render_2dgs_${de}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[ae,Z,Q]}),vertex:{module:we,entryPoint:"vs_main"},fragment:{module:we,entryPoint:"fs_main",constants:{BETA_KERNEL:he},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=me("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?me("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(de=>{de?console.error("[render_2dgs] pipeline create validation error:",de.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ae,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:Z,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Ht].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Q,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=W,this.betaKernel=he,this.renderSettingsBgl=ae,this.renderSplatsBgl=Z,this.atlasBgl=Q}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(r,d){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([r,d[0],d[1],d[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var y;const r=new ArrayBuffer(32),d=new Uint32Array(r),v=new Float32Array(r);d[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,d[1]=this.atlas.meta.layer_h|0,v[2]=this.atlas.meta.uv_extent||0,d[3]=this.atlas.meta.probe_mode|0||0,d[4]=this._mipMode!==0?Math.max(1,((y=this.atlas.meta.mip_bytes)==null?void 0:y.length)??1):1,v[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,r)}ensureAccResources(r,d){var v;if(this.accResolvePipeline===null){const y=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:y});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===r&&this.accH===d||((v=this.accTexture)==null||v.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,r),height:Math.max(1,d),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=r,this.accH=d)}setAtlas(r){this.atlas=r??Yt(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&ft(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(r){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=r,ft(this.device,this.atlas.texParamsBuffer,this.atlas.meta,r,this._mipMode))}setMipLodBias(r){this.mipLodBias=r,this.writeAtlasParams()}setFetchById(r){r!==this.fetchById&&(this.fetchById=r,$e(`[render_2dgs] fragment inputs: ${r?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(r){if(r===this.legacyRenderer)return;this.legacyRenderer=r,ns({legacyPos:r,hypLegacy:r},this.device,this.render_settings_buffer);const d=!r&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([d])),$e(`[render_2dgs] renderer: ${r?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(r){this.atlas.meta.format!==4294967295&&(this._mipMode=r?1:0,this.writeAtlasParams(),ft(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var r;return(((r=this.atlas.meta.mip_bytes)==null?void 0:r.length)??1)>1}async debugReadSortedIndices(r=30){const d=Math.max(0,Math.min(r,this.pc.num_points)),v=d*Uint32Array.BYTES_PER_ELEMENT;if(v===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:v,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[Ht].sort_indices_buffer,0,y,0,v),this.device.queue.submit([w.finish()]),await y.mapAsync(GPUMapMode.READ);const S=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",d,"):",Array.from(S)),y.unmap()}frame(r,d,v=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,S=v&&this.timeQueryEnabled;{r.clearBuffer(this.sort_info_buffer,0,4);const G={label:"cull"};S&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const M=r.beginComputePass(G);M.setPipeline(this.cullPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.gsBg),M.setBindGroup(2,this.cullBg2),M.setBindGroup(3,this.bfcBindGroup);const O=Math.ceil(this.pc.num_points/ss);M.dispatchWorkgroups(O,1,1),M.end()}{const G=r.beginComputePass({label:"calculate indirect dispatch"});G.setPipeline(this.indirectPipeline),G.setBindGroup(0,this.indirectBindGroup),G.dispatchWorkgroups(1,1,1),G.end()}{const G={label:"preprocess"};S&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const M=r.beginComputePass(G);M.setPipeline(this.preprocessPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.preprocessBg1),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),M.end()}for(let G=0;G<ht;G++){const M=G&1,O=this.sort_pipelines.passes[G],F=this.sort_localHistogramBindGroups[M],j=this.sort_scatterBindGroups[M];{const D={label:`upsweep_round${G}`};S&&G==0&&(D.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const Y=r.beginComputePass(D);Y.setPipeline(O.localHistogram),Y.setBindGroup(0,F),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}{const D=r.beginComputePass({label:`prefix_round${G} - l0TileScan`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=r.beginComputePass({label:`prefix_round${G} - l1TileScanOnL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=r.beginComputePass({label:`prefix_round${G} - l1ScanSums`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,Ze,1),D.end()}{const D=r.beginComputePass({label:`prefix_round${G} - addL1ToL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=r.beginComputePass({label:`prefix_round${G} - addL0ToElems`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=r.beginComputePass({label:`prefix_round${G} - computeDigitBase`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,1,1),D.end()}{const D={label:`scatter_round${G}`};S&&G==ht-1&&(D.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const Y=r.beginComputePass(D);Y.setPipeline(O.scatterElements),Y.setBindGroup(0,j),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}}{let G=d;this.acc16&&(this.ensureAccResources(Ce.canvas_size[0],Ce.canvas_size[1]),G=this.accView);const M={label:"render",colorAttachments:[{view:G,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...this.acc16?{}:{endOfPassWriteIndex:w+7}});const O=r.beginRenderPass(M);if(O.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),O.setBindGroup(0,this.renderSettingsBindGroup),O.setBindGroup(1,this.renderSplatsBindGroup),O.setBindGroup(2,this.atlasBindGroup),O.drawIndirect(this.draw_indirect_buffer,0),O.end(),this.acc16){const F={label:"acc16_resolve",colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(F.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const j=r.beginRenderPass(F);j.setPipeline(this.accResolvePipeline),j.setBindGroup(0,this.accResolveBindGroup),j.draw(3),j.end()}}this.frameCount++}async readPerfMetrics(r){const d=(r==null?void 0:r.silent)??!1;if(this.frameCount<=0)return;const v=this.device.createCommandEncoder({label:"timestamp resolve encoder"});v.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),v.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([v.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),S=Math.min(this.frameCount,this.queryCapacityFrames),G=(this.lastFrame+this.frameCount-S)%this.queryCapacityFrames,M=Array.from({length:y.length},()=>[]);let O=0;for(let V=0;V<S;V++){const oe=(G+V)%this.queryCapacityFrames,C=oe*this.queriesPerFrame;let ee=!0;for(let te=0;te<y.length;te++){const[L,ce,K]=y[te];if(w[C+K]===0n||w[C+ce]===0n||w[C+ce]<w[C+K]){ee=!1;break}}if(!ee){!d&&oe%60===0&&console.debug("[timestamp] frame slot",oe,"contains unwritten (0) timestamps, skipped in stats");continue}O++;for(let te=0;te<y.length;te++){const[L,ce,K]=y[te],N=Number(w[C+K]),le=Number(w[C+ce]);M[te].push((le-N)/1e6)}}if(O===0){this.resultBuffer.unmap(),d||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...M[0]);const F=[];let j=0,D=0,Y=0;for(let V=0;V<y.length;V++){const oe=y[V][0],C=M[V];let ee=0;if(oe==="Total"){const te=this.allFrameTimes;ee=te.reduce((K,N)=>K+N,0)/te.length;const L=[...te].sort((K,N)=>K-N);j=L[Math.floor(L.length*.99)]||0;const ce=te.reduce((K,N)=>K+Math.pow(N-ee,2),0)/te.length;D=Math.sqrt(ce),Y=ee}else ee=C.reduce((te,L)=>te+L,0)/C.length;F.push([oe,ee])}this.lastFrame+=this.frameCount,this.frameCount=0;const re=Object.fromEntries(F);this.lastStageBreakdownMs={cull:re.Culling??0,preprocess:re.Preprocess??0,sort:re.Sort??0,render:re.Render??0,total:re.Total??0};const R=`[TIMESTAMP - ${this.constructor.name}]
`+F.map(([V,oe])=>`${V}: ${oe.toFixed(3)}ms`).join(`
`)+`
Total P99: ${j.toFixed(3)}ms
Total STD: ${D.toFixed(3)}ms
Total AVG: ${Y.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(d||(console.log(R),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const V=`Stage,ms
`,oe=F.map(([te,L])=>`${te},${L.toFixed(3)}`).join(`
`),C="data:text/csv;charset=utf-8,"+encodeURIComponent(V+oe),ee=document.createElement("a");ee.href=C,ee.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(ee),ee.click(),ee.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(R)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const r=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const r=document.querySelector("canvas"),d=r?r.width:1,v=r?r.height:1;es({width:d,height:v,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),dn(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:tt(this.pc.num_points*as),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:tt(this.pc.num_points*os),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(r){if(r&&r.trim().length>0){const d=r.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=d.length>0?d:this.downloadOnceFileName}else{const d=new Date,v=`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}_${String(d.getHours()).padStart(2,"0")}${String(d.getMinutes()).padStart(2,"0")}${String(d.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${v}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function ps(i){const r=new TextDecoder().decode(new Uint8Array(i,0,4));if(r!=="GSB1")throw new Error(`not a GSB1 file (magic '${r}')`);const d=new DataView(i).getUint32(4,!0),v=JSON.parse(new TextDecoder().decode(new Uint8Array(i,8,d))),y=8+d;return{header:v,bytes:i.byteLength,block(w){const S=v.blocks.find(G=>G.name===w);if(!S)throw new Error(`GSB block '${w}' missing`);return i.slice(y+S.offset,y+S.offset+S.nbytes)}}}const Vt=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
// shader declares \`camera\` and \`sh_coefs\`).
// Math follows the authors' CUDA (graphdeco computeCov2D incl. the 1.3·tan-fov clamp and
// the +0.3 low-pass, computeColorFromSH, in_frustum's z > 0.2), expressed in Halloumi-WS's
// camera conventions (camera.ts: view = world→camera, COLMAP axes; y-flipping projection).

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>,
};

// Per-method uniform (32 B).
struct BenchParams {
    n: u32,             // Gaussians in the model
    sh_degree: u32,     // 1 (Mobile-GS) or 3
    cutoff_mult: f32,   // FastGS eval-time compact-box beta (0.5); 1 = standard 1/255 support
    w_scale: f32,       // Mobile-GS: blend-weight scale for the f16 fallback (1 on the f32 path)
    mlp_base: u32,      // Mobile-GS mlp_all: first Gaussian of this chunk
    _p0: u32, _p1: u32, _p2: u32,
};

struct GeneralInfo {
  keys_size : atomic<u32>, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

// Screen-space splat handed from the compute passes to the raster pass (64 B: the vec3
// aligns to 16, so conic starts at 32 and color at 48).
struct Splat {
    center: vec2<f32>,  // pixel coordinates, y down (matches CUDA point_image + 0.5)
    ext0: vec2<f32>,    // quad half-axis 0 in pixels (eigenvector · sqrt(λ0·t))
    ext1: vec2<f32>,    // quad half-axis 1 in pixels
    conic: vec3<f32>,   // (a, b, c): q = a dx² + 2b dx dy + c dy²
    thr: f32,           // cutoff on q (0 = splat culled, draw degenerate)
    color: vec4<f32>,   // rgb (SH + 0.5, clamped ≥ 0), a = opacity
};

const SH_C0: f32 = 0.28209479177387814;
const SH_C1: f32 = 0.4886025119029199;
const SH_C2 = array<f32, 5>(1.0925484305920792, -1.0925484305920792, 0.31539156525252005, -1.0925484305920792, 0.5462742152960396);
const SH_C3 = array<f32, 7>(-0.5900435899266435, 2.890611442640554, -0.4570457994644658, 0.3731763325901154, -0.4570457994644658, 1.445305721320277, -0.5900435899266435);

// f16 SH coefficients packed two-per-u32 (sh_coefs[k]), stride 3·(deg+1)² per Gaussian.
fn sh_at(base: u32, k: u32) -> vec3<f32> {
    let i = base + 3u * k;
    return vec3<f32>(unpack2x16float(sh_coefs[i >> 1u])[i & 1u],
                     unpack2x16float(sh_coefs[(i + 1u) >> 1u])[(i + 1u) & 1u],
                     unpack2x16float(sh_coefs[(i + 2u) >> 1u])[(i + 2u) & 1u]);
}

fn eval_sh(idx: u32, deg: u32, dir: vec3<f32>) -> vec3<f32> {
    let K = (deg + 1u) * (deg + 1u);
    let base = idx * 3u * K;
    var r = SH_C0 * sh_at(base, 0u);
    if deg > 0u {
        let x = dir.x; let y = dir.y; let z = dir.z;
        r += -SH_C1 * y * sh_at(base, 1u) + SH_C1 * z * sh_at(base, 2u) - SH_C1 * x * sh_at(base, 3u);
        if deg > 1u {
            let xx = x * x; let yy = y * y; let zz = z * z;
            let xy = x * y; let yz = y * z; let xz = x * z;
            r += SH_C2[0] * xy * sh_at(base, 4u) + SH_C2[1] * yz * sh_at(base, 5u)
               + SH_C2[2] * (2.0 * zz - xx - yy) * sh_at(base, 6u)
               + SH_C2[3] * xz * sh_at(base, 7u) + SH_C2[4] * (xx - yy) * sh_at(base, 8u);
            if deg > 2u {
                r += SH_C3[0] * y * (3.0 * xx - yy) * sh_at(base, 9u)
                   + SH_C3[1] * xy * z * sh_at(base, 10u)
                   + SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_at(base, 11u)
                   + SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_at(base, 12u)
                   + SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_at(base, 13u)
                   + SH_C3[5] * z * (xx - yy) * sh_at(base, 14u)
                   + SH_C3[6] * x * (xx - 3.0 * yy) * sh_at(base, 15u);
            }
        }
    }
    return max(r + 0.5, vec3<f32>(0.0));
}

// Gaussian record: pos(3) opacity(1) cov3d(6: xx xy xz yy yz zz) = 40 B. Scalar fields on purpose:
// a vec3 member would give the struct 16-byte alignment and a 48-byte stride.
struct Gauss { px: f32, py: f32, pz: f32, opacity: f32, cov: array<f32, 6> };
fn gpos(g: Gauss) -> vec3<f32> { return vec3<f32>(g.px, g.py, g.pz); }

// 2D covariance in PIXELS (x right, y down) incl. the +0.3 low-pass. Returns (a, b, c).
fn cov2d(g: Gauss, t_in: vec3<f32>) -> vec3<f32> {
    let focal = camera.focal;
    let tanfov = 0.5 * camera.viewport / focal;
    var t = t_in;
    let lim = 1.3 * tanfov;
    t.x = clamp(t.x / t.z, -lim.x, lim.x) * t.z;
    t.y = clamp(t.y / t.z, -lim.y, lim.y) * t.z;
    // rows of J·W (J = [[fx/z, 0, -fx x/z²], [0, fy/z, -fy y/z²]], W = world→camera rotation)
    let j0 = vec3<f32>(focal.x / t.z, 0.0, -focal.x * t.x / (t.z * t.z));
    let j1 = vec3<f32>(0.0, focal.y / t.z, -focal.y * t.y / (t.z * t.z));
    let W = mat3x3<f32>(camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz);
    let V = mat3x3<f32>(g.cov[0], g.cov[1], g.cov[2],
                        g.cov[1], g.cov[3], g.cov[4],
                        g.cov[2], g.cov[4], g.cov[5]);
    let S = W * V * transpose(W);
    return vec3<f32>(dot(j0, S * j0) + 0.3, dot(j0, S * j1), dot(j1, S * j1) + 0.3);
}

// Fills a Splat for covariance c2 / opacity op / colour rgb. \`alive\` false when culled.
fn make_splat(clip: vec4<f32>, c2: vec3<f32>, op: f32, rgb: vec3<f32>, mult: f32, out_s: ptr<function, Splat>) -> bool {
    let det = c2.x * c2.z - c2.y * c2.y;
    if det <= 0.0 || op < 1.0 / 255.0 { return false; }
    let inv = 1.0 / det;
    let conic = vec3<f32>(c2.z * inv, -c2.y * inv, c2.x * inv);
    // alpha = op·exp(-q/2) ≥ 1/255  ⇔  q ≤ 2 ln(255 op); FastGS eval scales that level by \`mult\`.
    let thr = mult * 2.0 * log(255.0 * op);
    let mid = 0.5 * (c2.x + c2.z);
    let rad = sqrt(max(mid * mid - det, 0.0));
    let l0 = mid + rad;
    let l1 = max(mid - rad, 1e-6);
    var e0 = vec2<f32>(c2.y, l0 - c2.x);
    if abs(c2.y) < 1e-12 { e0 = select(vec2<f32>(0.0, 1.0), vec2<f32>(1.0, 0.0), c2.x >= c2.z); }
    e0 = normalize(e0);
    let e1 = vec2<f32>(-e0.y, e0.x);
    let ndc = clip.xy / clip.w;
    let center = vec2<f32>((ndc.x + 1.0) * 0.5 * camera.viewport.x, (1.0 - ndc.y) * 0.5 * camera.viewport.y);
    let ext0 = e0 * sqrt(l0 * thr);
    let ext1 = e1 * sqrt(l1 * thr);
    let reach = abs(ext0) + abs(ext1);
    if center.x + reach.x < 0.0 || center.y + reach.y < 0.0 ||
       center.x - reach.x > camera.viewport.x || center.y - reach.y > camera.viewport.y { return false; }
    (*out_s) = Splat(center, ext0, ext1, conic, thr, vec4<f32>(rgb, op));
    return true;
}
`,hs=`// Sorted 3DGS path (FastGS, Speedy-Splat), pass 1 of 3: frustum cull + EWA projection +
// SH colour + depth key, compacted into [0, keys_size) with the websplatter per-workgroup
// prefix sum. Pass 2 = the viewer's radix sort, pass 3 = gs_raster.wgsl.
// Prepended with common.wgsl.

const WG_SIZE = 256u;

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> params: BenchParams;

@group(1) @binding(0) var<storage, read> gauss: array<Gauss>;
@group(1) @binding(1) var<storage, read> sh_coefs: array<u32>;
@group(1) @binding(2) var<storage, read_write> splats: array<Splat>;

@group(2) @binding(0) var<storage, read_write> sort_infos: GeneralInfo;
@group(2) @binding(1) var<storage, read_write> sort_depths: array<u32>;
@group(2) @binding(2) var<storage, read_write> sort_indices: array<u32>;

var<workgroup> scan0: array<u32, WG_SIZE>;
var<workgroup> scan1: array<u32, WG_SIZE>;
var<workgroup> group_base: u32;

@compute @workgroup_size(WG_SIZE)
fn cull(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    var alive = 0u;
    var s: Splat;
    var z = 0.0;
    let idx = gid.x;
    if idx < params.n {
        let g = gauss[idx];
        let cam = camera.view * vec4<f32>(gpos(g), 1.0);
        if cam.z > 0.2 {
            let clip = camera.proj * cam;
            let c2 = cov2d(g, cam.xyz);
            let campos = camera.view_inv[3].xyz;
            let rgb = eval_sh(idx, params.sh_degree, normalize(gpos(g) - campos));
            if make_splat(clip, c2, g.opacity, rgb, params.cutoff_mult, &s) {
                alive = 1u;
                z = cam.z;
            }
        }
    }
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >= 1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) { group_base = atomicAdd(&sort_infos.keys_size, group_cnt); }
    }
    workgroupBarrier();
    if (alive == 1u) {
        let slot = group_base + scan0[lid.x] - 1u;
        splats[slot] = s;
        // ascending radix order must be far → near (back-to-front over-blending). Positive f32 bit
        // patterns sort like the values, so key on 1/z: full relative precision. (A \`C - z\` key
        // collapses nearby depths onto one f32 — 1e6 - z steps in 6 cm — and cost 1.8 dB.)
        sort_depths[slot] = bitcast<u32>(1.0 / z);
        sort_indices[slot] = slot;
    }
}
`,_s=`// Mobile-GS (Du et al., ICLR'26) compute passes, a line-by-line port of their released
// inference path (gaussian_renderer.render + diff-gaussian-rasterization_ms_nosorting):
//   cull : in_frustum (view z > 0.2) + compaction of the visible Gaussians (no sort).
//   mlp  : per-FRAME opacity/phi MLP on every visible Gaussian (scene.gaussian_model.OpaictyPhiNN):
//          in = [normalize(sh[4×3]), viewdir, normalize(scale), rot(r,x,y,z)] (22)
//          → 256 relu → 128 relu → 64 → { phi = relu(64→1), opacity = sigmoid(64→1) }.
//          Their CUDA runs it on ALL Gaussians before culling; running it on the visible set
//          is strictly cheaper, so this does not handicap the method.
//   prep : EWA projection with the MLP opacity, SH1 colour, sort-free blend weight
//          w = exp(max_s / d) + phi / d² + phi², and their tile-fill cull (opacity·w < 1/255).
// Prepended with common.wgsl.

const WG_SIZE = 256u;
const IN = 22u;
const H1 = 256u;
const H2 = 128u;
const H3 = 64u;
// offsets into \`mlp_w\`: W0 b0 W1 b1 W2 b2 Wphi bphi Wop bop. Weight matrices are uploaded
// TRANSPOSED to [in, out] so that in the cooperative path consecutive threads (= consecutive
// output neurons j) read consecutive addresses.
const O_B0 = IN * H1;
const O_W1 = O_B0 + H1;
const O_B1 = O_W1 + H1 * H2;
const O_W2 = O_B1 + H2;
const O_B2 = O_W2 + H2 * H3;
const O_WP = O_B2 + H3;
const O_BP = O_WP + H3;
const O_WO = O_BP + 1u;
const O_BO = O_WO + H3;

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> params: BenchParams;

@group(1) @binding(0) var<storage, read> gauss: array<Gauss>;
@group(1) @binding(1) var<storage, read> sh_coefs: array<u32>;
@group(1) @binding(2) var<storage, read> attr: array<f32>;          // scale xyz, rot r x y z (stride 7)
@group(1) @binding(3) var<storage, read> mlp_w: array<f32>;

// group 2 is bound by every pass. It carries a COPY of keys_size (count) instead of the sort-info
// buffer itself, because mlp/prep dispatch indirectly from that buffer and WebGPU forbids a
// writable storage binding of an indirect buffer in the same pass.
struct Count { keys_size: u32 };
@group(2) @binding(0) var<storage, read> count: Count;
@group(2) @binding(1) var<storage, read_write> vis: array<u32>;         // slot -> Gaussian id
@group(2) @binding(2) var<storage, read_write> mlp_out: array<f32>;     // Gaussian id -> (phi, opacity)
@group(2) @binding(3) var<storage, read_write> splats: array<Splat>;
@group(2) @binding(4) var<storage, read_write> weights: array<f32>;     // slot -> blend weight · w_scale

@group(3) @binding(0) var<storage, read_write> sort_infos: GeneralInfo;   // cull only

var<workgroup> scan0: array<u32, WG_SIZE>;
var<workgroup> scan1: array<u32, WG_SIZE>;
var<workgroup> group_base: u32;

@compute @workgroup_size(WG_SIZE)
fn cull(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    var alive = 0u;
    let idx = gid.x;
    if idx < params.n {
        let cam = camera.view * vec4<f32>(gpos(gauss[idx]), 1.0);
        if cam.z > 0.2 { alive = 1u; }
    }
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >= 1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) { group_base = atomicAdd(&sort_infos.keys_size, group_cnt); }
    }
    workgroupBarrier();
    if (alive == 1u) {
        vis[group_base + scan0[lid.x] - 1u] = idx;
    }
}

// Reference implementation: one Gaussian per invocation. Correct but it needs 1.5 KB of
// PRIVATE storage per thread for h1/h2, which spills to scratch memory — measured 190 ms/frame
// on a phone vs 4.6 ms for the same frame with the MLP frozen. \`mlp_coop\` below is the one the
// renderer uses; this stays as the numerical reference for the offline port check.
fn mlp_eval(idx: u32) -> vec2<f32> {
    var x: array<f32, 22>;
    // normalize(sh.view(N, -1)): coefficient-major [c0r c0g c0b c1r ...], F.normalize eps 1e-12
    var sh: array<f32, 12>;
    var n2 = 0.0;
    let base = idx * 12u;
    for (var k = 0u; k < 12u; k++) {
        let i = base + k;
        sh[k] = unpack2x16float(sh_coefs[i >> 1u])[i & 1u];
        n2 += sh[k] * sh[k];
    }
    let inv_sh = 1.0 / max(sqrt(n2), 1e-12);
    for (var k = 0u; k < 12u; k++) { x[k] = sh[k] * inv_sh; }
    let campos = camera.view_inv[3].xyz;
    let dir = normalize(gpos(gauss[idx]) - campos);
    x[12] = dir.x; x[13] = dir.y; x[14] = dir.z;
    let a = idx * 7u;
    let sc = vec3<f32>(attr[a], attr[a + 1u], attr[a + 2u]);
    let scn = sc / max(length(sc), 1e-12);
    x[15] = scn.x; x[16] = scn.y; x[17] = scn.z;
    x[18] = attr[a + 3u]; x[19] = attr[a + 4u]; x[20] = attr[a + 5u]; x[21] = attr[a + 6u];

    var h1: array<f32, 256>;
    for (var j = 0u; j < H1; j++) {
        var s = mlp_w[O_B0 + j];
        for (var i = 0u; i < IN; i++) { s += mlp_w[i * H1 + j] * x[i]; }
        h1[j] = max(s, 0.0);
    }
    var h2: array<f32, 128>;
    for (var j = 0u; j < H2; j++) {
        var s = mlp_w[O_B1 + j];
        for (var i = 0u; i < H1; i++) { s += mlp_w[O_W1 + i * H2 + j] * h1[i]; }
        h2[j] = max(s, 0.0);
    }
    var sp = mlp_w[O_BP];
    var so = mlp_w[O_BO];
    for (var j = 0u; j < H3; j++) {
        var s = mlp_w[O_B2 + j];
        for (var i = 0u; i < H2; i++) { s += mlp_w[O_W2 + i * H3 + j] * h2[i]; }
        // main.4 has no activation; both heads read h3 directly
        sp += mlp_w[O_WP + j] * s;
        so += mlp_w[O_WO + j] * s;
    }
    return vec2<f32>(max(sp, 0.0), 1.0 / (1.0 + exp(-so)));
}

@compute @workgroup_size(WG_SIZE)
fn mlp(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= count.keys_size { return; }
    let idx = vis[gid.x];
    let o = mlp_eval(idx);
    mlp_out[idx * 2u] = o.x;
    mlp_out[idx * 2u + 1u] = o.y;
}

// Frozen-MLP ablation: evaluate every Gaussian once at the current camera, in chunks starting
// at params.mlp_base (one huge dispatch can trip a mobile GPU watchdog).
@compute @workgroup_size(WG_SIZE)
fn mlp_all(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x + params.mlp_base;
    if idx >= params.n { return; }
    let o = mlp_eval(idx);
    mlp_out[idx * 2u] = o.x;
    mlp_out[idx * 2u + 1u] = o.y;
}


// ---------------------------------------------------------------------------------------------
// Cooperative, batched MLP: a workgroup evaluates B = 8 Gaussians at once, one output neuron per
// thread, with the 8 accumulators in registers so every weight load feeds 8 MACs and all
// activations live in workgroup memory (15 KB, under the 16 KB WebGPU floor). Each workgroup
// walks TILE = 256 Gaussians (32 batches) so the dispatch matches the indirect triple.
// 5090, 467k visible: reference 44 ms → 1-Gaussian cooperative 32 ms → this version (see below).

const TILE = 256u;
const B = 8u;

var<workgroup> s_idx: array<u32, 8>;
var<workgroup> s_ok: array<u32, 8>;
var<workgroup> s_x: array<f32, 176>;     // [b*22 + i]
var<workgroup> s_h1: array<f32, 2048>;   // [b*256 + j]
var<workgroup> s_h2: array<f32, 1024>;   // [b*128 + j]
var<workgroup> s_h3: array<f32, 512>;    // [b*64 + j]

/** Evaluates the batch described by s_idx / s_ok. All 256 threads call it in lockstep. */
fn mlp_batch(lid: u32) {
    if lid < B {
        let idx = s_idx[lid];
        let o = lid * IN;
        var n2 = 0.0;
        let base = idx * 12u;
        for (var k = 0u; k < 12u; k++) {
            let i = base + k;
            let v = unpack2x16float(sh_coefs[i >> 1u])[i & 1u];
            s_x[o + k] = v;
            n2 += v * v;
        }
        let inv_sh = 1.0 / max(sqrt(n2), 1e-12);
        for (var k = 0u; k < 12u; k++) { s_x[o + k] = s_x[o + k] * inv_sh; }
        let dir = normalize(gpos(gauss[idx]) - camera.view_inv[3].xyz);
        s_x[o + 12u] = dir.x; s_x[o + 13u] = dir.y; s_x[o + 14u] = dir.z;
        let a = idx * 7u;
        let sc = vec3<f32>(attr[a], attr[a + 1u], attr[a + 2u]);
        let scn = sc / max(length(sc), 1e-12);
        s_x[o + 15u] = scn.x; s_x[o + 16u] = scn.y; s_x[o + 17u] = scn.z;
        s_x[o + 18u] = attr[a + 3u]; s_x[o + 19u] = attr[a + 4u]; s_x[o + 20u] = attr[a + 5u]; s_x[o + 21u] = attr[a + 6u];
    }
    workgroupBarrier();
    {   // layer 1: neuron lid, all 8 Gaussians
        let bias = mlp_w[O_B0 + lid];
        var acc = array<f32, 8>(bias, bias, bias, bias, bias, bias, bias, bias);
        for (var i = 0u; i < IN; i++) {
            let w = mlp_w[i * H1 + lid];
            for (var b = 0u; b < B; b++) { acc[b] += w * s_x[b * IN + i]; }
        }
        for (var b = 0u; b < B; b++) { s_h1[b * H1 + lid] = max(acc[b], 0.0); }
    }
    workgroupBarrier();
    {   // layer 2: 128 neurons × 2 halves of 4 Gaussians
        let j = lid & 127u;
        let g0 = (lid >> 7u) * 4u;
        let bias = mlp_w[O_B1 + j];
        var acc = array<f32, 4>(bias, bias, bias, bias);
        for (var i = 0u; i < H1; i++) {
            let w = mlp_w[O_W1 + i * H2 + j];
            for (var b = 0u; b < 4u; b++) { acc[b] += w * s_h1[(g0 + b) * H1 + i]; }
        }
        for (var b = 0u; b < 4u; b++) { s_h2[(g0 + b) * H2 + j] = max(acc[b], 0.0); }
    }
    workgroupBarrier();
    {   // layer 3 (no activation): 64 neurons × 4 groups of 2 Gaussians
        let j = lid & 63u;
        let g0 = (lid >> 6u) * 2u;
        let bias = mlp_w[O_B2 + j];
        var a0 = bias; var a1 = bias;
        for (var i = 0u; i < H2; i++) {
            let w = mlp_w[O_W2 + i * H3 + j];
            a0 += w * s_h2[g0 * H2 + i];
            a1 += w * s_h2[(g0 + 1u) * H2 + i];
        }
        s_h3[g0 * H3 + j] = a0;
        s_h3[(g0 + 1u) * H3 + j] = a1;
    }
    workgroupBarrier();
    if lid < B && s_ok[lid] != 0u {   // heads
        var sp = mlp_w[O_BP];
        var so = mlp_w[O_BO];
        for (var j = 0u; j < H3; j++) {
            let v = s_h3[lid * H3 + j];
            sp += mlp_w[O_WP + j] * v;
            so += mlp_w[O_WO + j] * v;
        }
        let idx = s_idx[lid];
        mlp_out[idx * 2u] = max(sp, 0.0);
        mlp_out[idx * 2u + 1u] = 1.0 / (1.0 + exp(-so));
    }
    workgroupBarrier();   // shared arrays are reused by the next batch
}

// Barriers may not sit in control flow that depends on a buffer value, so the tail workgroup
// evaluates clamped Gaussians instead of exiting early and just drops their writes (s_ok).
@compute @workgroup_size(WG_SIZE)
fn mlp_coop(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    let n = count.keys_size;
    let last = max(n, 1u) - 1u;
    for (var t = 0u; t < TILE; t += B) {
        if lid.x < B {
            let slot = wid.x * TILE + t + lid.x;
            s_idx[lid.x] = vis[min(slot, last)];
            s_ok[lid.x] = u32(slot < n);
        }
        mlp_batch(lid.x);
    }
}

@compute @workgroup_size(WG_SIZE)
fn mlp_all_coop(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    let n = params.n;
    let last = max(n, 1u) - 1u;
    for (var t = 0u; t < TILE; t += B) {
        if lid.x < B {
            let idx = params.mlp_base + wid.x * TILE + t + lid.x;
            s_idx[lid.x] = min(idx, last);
            s_ok[lid.x] = u32(idx < n);
        }
        mlp_batch(lid.x);
    }
}

@compute @workgroup_size(WG_SIZE)
fn prep(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= count.keys_size { return; }
    let slot = gid.x;
    let idx = vis[slot];
    let g = gauss[idx];
    let phi = mlp_out[idx * 2u];
    let op = mlp_out[idx * 2u + 1u];
    let cam = camera.view * vec4<f32>(gpos(g), 1.0);
    let clip = camera.proj * cam;
    let d = max(cam.z, 1e-6);
    let a = idx * 7u;
    let max_s = max(attr[a], max(attr[a + 1u], attr[a + 2u]));
    let w = exp(max_s / d) + phi / (d * d) + phi * phi;
    var s: Splat;
    s.thr = 0.0;
    if op * w >= 1.0 / 255.0 {
        let campos = camera.view_inv[3].xyz;
        let rgb = eval_sh(idx, 1u, normalize(gpos(g) - campos));
        if !make_splat(clip, cov2d(g, cam.xyz), op, rgb, 1.0, &s) { s.thr = 0.0; }
    }
    splats[slot] = s;
    weights[slot] = w * params.w_scale;
}
`,gs=`// Raster pass shared by both bench baselines. One quad per splat, spanned by the 2D
// covariance eigen-axes out to the exact alpha = 1/255 ellipse (SnugBox-tight, so the
// HW rasteriser gets the same coverage Speedy-Splat's tile binning buys on CUDA).
// The fragment evaluates the SAME conic as the CUDA kernels at the pixel centre:
//   q = a dx² + 2b dx dy + c dy²,  alpha = min(0.99, op · exp(-q/2)),  dropped below 1/255.
//
// fs_over : sorted 3DGS (FastGS, Speedy-Splat): premultiplied over-blend, back-to-front.
// fs_wsum : Mobile-GS sort-free blend, two targets:
//           0: rgb += c·α·w, a += α·w   (additive)
//           1: r   *= (1 - α)           (transmittance, cleared to 1)
// \`color.a\` holds opacity; Mobile-GS's per-splat blend weight (·w_scale) comes from \`weights\`.

struct Splat {
    center: vec2<f32>,
    ext0: vec2<f32>,
    ext1: vec2<f32>,
    conic: vec3<f32>,
    thr: f32,
    color: vec4<f32>,
};

struct Viewport { size: vec2<f32>, _p: vec2<f32> };

@group(0) @binding(0) var<storage, read> splats: array<Splat>;
@group(0) @binding(1) var<storage, read> order: array<u32>;     // sorted slots (3DGS only)
@group(0) @binding(2) var<uniform> vp: Viewport;
@group(0) @binding(3) var<storage, read> weights: array<f32>;   // Mobile-GS only: α-weight·w_scale per slot

struct VOut {
    @builtin(position) pos: vec4<f32>,
    @location(0) @interpolate(flat) center: vec2<f32>,
    @location(1) @interpolate(flat) conic: vec3<f32>,
    @location(2) @interpolate(flat) color: vec4<f32>,
    @location(3) @interpolate(flat) thr_w: vec2<f32>,
};

fn quad_vertex(vid: u32, slot: u32, w: f32) -> VOut {
    let s = splats[slot];
    var o: VOut;
    if s.thr <= 0.0 {
        o.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);   // culled (Mobile-GS keeps its slot): off-screen
        return o;
    }
    let corner = vec2<f32>(f32(vid & 1u) * 2.0 - 1.0, f32((vid >> 1u) & 1u) * 2.0 - 1.0);
    let px = s.center + corner.x * s.ext0 + corner.y * s.ext1;
    o.pos = vec4<f32>(px.x / vp.size.x * 2.0 - 1.0, 1.0 - px.y / vp.size.y * 2.0, 0.0, 1.0);
    o.center = s.center;
    o.conic = s.conic;
    o.color = s.color;
    o.thr_w = vec2<f32>(s.thr, w);
    return o;
}

@vertex
fn vs_main(@builtin(vertex_index) vid: u32, @builtin(instance_index) iid: u32) -> VOut {
    return quad_vertex(vid, order[iid], 1.0);
}

// Mobile-GS: no sort, instance i IS the compacted slot.
@vertex
fn vs_wsum(@builtin(vertex_index) vid: u32, @builtin(instance_index) iid: u32) -> VOut {
    return quad_vertex(vid, iid, weights[iid]);
}

fn alpha_at(i: VOut) -> f32 {
    let d = i.center - i.pos.xy;
    let q = i.conic.x * d.x * d.x + 2.0 * i.conic.y * d.x * d.y + i.conic.z * d.y * d.y;
    if q > i.thr_w.x { return 0.0; }
    let a = min(0.99, i.color.a * exp(-0.5 * q));
    return select(0.0, a, a >= 1.0 / 255.0);
}

@fragment
fn fs_over(i: VOut) -> @location(0) vec4<f32> {
    let a = alpha_at(i);
    if a <= 0.0 { discard; }
    return vec4<f32>(i.color.rgb * a, a);
}

struct WOut {
    @location(0) acc: vec4<f32>,
    @location(1) trans: vec4<f32>,
};

@fragment
fn fs_wsum(i: VOut) -> WOut {
    let a = alpha_at(i);
    if a <= 0.0 { discard; }
    let aw = a * i.thr_w.y;
    return WOut(vec4<f32>(i.color.rgb * aw, aw), vec4<f32>(a, 0.0, 0.0, 0.0));
}

`,ms=`// Mobile-GS fullscreen resolve of gs_raster.wgsl's fs_wsum targets: C = (Σcαw / max(Σαw, eps))·(1 - T) + T·bg  (bg = black).
@group(0) @binding(0) var acc_tex: texture_2d<f32>;
@group(0) @binding(1) var trans_tex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> resolve_eps: vec4<f32>;

@vertex
fn vs_full(@builtin(vertex_index) vid: u32) -> @builtin(position) vec4<f32> {
    let p = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(p[vid], 0.0, 1.0);
}

@fragment
fn fs_resolve(@builtin(position) p: vec4<f32>) -> @location(0) vec4<f32> {
    let q = vec2<i32>(floor(p.xy));
    let acc = textureLoad(acc_tex, q, 0);
    let T = textureLoad(trans_tex, q, 0).r;
    let c = acc.rgb / max(acc.a, resolve_eps.x);
    return vec4<f32>(c * (1.0 - T), 1.0);
}
`,Tt=8,Ne=1<<Tt,Ye=256,mt=32/Tt;class xs{constructor(r,d,v){P(this,"depthsIn");P(this,"indicesIn");P(this,"indicesOut");P(this,"owned",[]);P(this,"passes",[]);P(this,"histBg");P(this,"scatterBg");P(this,"prefixBg");P(this,"prefix",{});this.device=r,this.info=v;const y=(Math.floor((d+Ye-1)/Ye)+1)*Ye,w=Math.ceil(y/Ye),S=(ne,W)=>{const ae=r.createBuffer({label:ne,size:W,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(ae),ae},G=[0,1].map(ne=>({d:S(`sort keys ${ne}`,y*4),p:S(`sort payload ${ne}`,y*4)})),M=S("wg histograms",w*Ne*4),O=S("wg prefixes",w*Ne*4),F=S("digit base",Ne*4),j=Math.ceil(w/Ye),D=Math.ceil(j/Ye),Y=S("l0 sums",j*Ne*4),re=S("l0 offsets",j*Ne*4),ie=S("l1 sums",D*Ne*4),R=S("l1 offsets",D*Ne*4);this.depthsIn=G[0].d,this.indicesIn=G[0].p,this.indicesOut=G[mt&1].p;const V=ne=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:ne}}),oe=r.createBindGroupLayout({entries:[{binding:0,...V("read-only-storage")},{binding:1,...V("read-only-storage")},{binding:2,...V("storage")}]}),C=r.createBindGroupLayout({entries:[{binding:0,...V("read-only-storage")},{binding:1,...V("read-only-storage")},{binding:2,...V("read-only-storage")},{binding:3,...V("storage")},{binding:4,...V("read-only-storage")},{binding:5,...V("storage")},{binding:6,...V("read-only-storage")}]}),ee=r.createBindGroupLayout({entries:[{binding:0,...V("read-only-storage")},{binding:1,...V("read-only-storage")},...[2,3,4,5,6,7].map(ne=>({binding:ne,...V("storage")}))]}),te=r.createShaderModule({label:"bench radix histogram",code:cn}),L=r.createShaderModule({label:"bench radix scatter",code:on}),ce=r.createShaderModule({label:"bench radix prefix",code:ln}),K=r.createPipelineLayout({bindGroupLayouts:[oe]}),N=r.createPipelineLayout({bindGroupLayouts:[C]});for(let ne=0;ne<mt;ne++){const W={PASS_ID:ne,RS_RADIX_LOG2:Tt,RS_RADIX_SIZE:Ne};this.passes.push({hist:r.createComputePipeline({layout:K,compute:{module:te,entryPoint:"local_histogram_pass",constants:W}}),scatter:r.createComputePipeline({layout:N,compute:{module:L,entryPoint:"scatter_elements",constants:W}})})}const le=r.createPipelineLayout({bindGroupLayouts:[ee]});for(const ne of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[ne]=r.createComputePipeline({layout:le,compute:{module:ce,entryPoint:ne,constants:{WG_SIZE:Ye}}});const E=(ne,W)=>({binding:ne,resource:{buffer:W}});this.prefixBg=r.createBindGroup({layout:ee,entries:[E(0,v),E(1,M),E(2,O),E(3,Y),E(4,re),E(5,ie),E(6,R),E(7,F)]}),this.histBg=[0,1].map(ne=>r.createBindGroup({layout:oe,entries:[E(0,v),E(1,G[ne].d),E(2,M)]})),this.scatterBg=[0,1].map(ne=>r.createBindGroup({layout:C,entries:[E(0,v),E(1,F),E(2,G[ne].d),E(3,G[1-ne].d),E(4,G[ne].p),E(5,G[1-ne].p),E(6,O)]}))}encode(r){const d=(v,y,w,S)=>{const G=r.beginComputePass();G.setPipeline(v),G.setBindGroup(0,y),w!==null?G.dispatchWorkgroupsIndirect(this.info,w):G.dispatchWorkgroups(S[0],S[1],1),G.end()};for(let v=0;v<mt;v++){const y=v&1;d(this.passes[v].hist,this.histBg[y],4),d(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),d(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),d(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,Ne]),d(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),d(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),d(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),d(this.passes[v].scatter,this.scatterBg[y],4)}}destroy(){for(const r of this.owned)r.destroy()}}const Xt=256,ys=64,Ve=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class ws{constructor(r,d,v,y,w){P(this,"n");P(this,"kind");P(this,"freezeMlp",!1);P(this,"owned",[]);P(this,"params",new ArrayBuffer(32));P(this,"paramsBuf");P(this,"info");P(this,"drawArgs");P(this,"vpBuf");P(this,"indirectPipe");P(this,"indirectBg");P(this,"computeBgs");P(this,"cullPipe");P(this,"mlpPipe",null);P(this,"mlpAllPipe",null);P(this,"prepPipe",null);P(this,"rasterPipe");P(this,"rasterBg");P(this,"sorter",null);P(this,"countCopy",null);P(this,"cullInfoBg",null);P(this,"accTex",null);P(this,"trTex",null);P(this,"resolvePipe",null);P(this,"resolveBgl",null);P(this,"resolveBg",null);P(this,"accFormat");P(this,"wScale");P(this,"eps",null);this.device=r,this.targetFormat=y;const S=d.header;this.n=S.n,this.kind=S.render;const G=S.n,M=(Z,Q,he=Ve|GPUBufferUsage.COPY_SRC)=>{const me=r.createBuffer({label:Z,size:Math.max(16,Q+(4-Q%4)%4),usage:he});return this.owned.push(me),me},O=(Z,Q)=>{const he=Q instanceof ArrayBuffer?new Uint8Array(Q):new Uint8Array(Q.buffer,Q.byteOffset,Q.byteLength),me=M(Z,he.byteLength,Ve);return r.queue.writeBuffer(me,0,he),me},F=new Float32Array(d.block("pos")),j=new Float32Array(d.block("cov3d")),D=this.kind==="sorted_3dgs"?new Float32Array(d.block("opacity")):null,Y=new Float32Array(G*10);for(let Z=0;Z<G;Z++)Y[Z*10]=F[Z*3],Y[Z*10+1]=F[Z*3+1],Y[Z*10+2]=F[Z*3+2],Y[Z*10+3]=D?D[Z]:1,Y.set(j.subarray(Z*6,Z*6+6),Z*10+4);const re=O("bench gauss",Y),ie=O("bench sh",d.block("sh"));this.paramsBuf=M("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=w.float32Blend?"rgba32float":"rgba16float",this.wScale=w.float32Blend?1:1/1024;const R=new Uint32Array(this.params),V=new Float32Array(this.params);R[0]=G,R[1]=S.sh_degree,V[2]=w.cutoffMult??S.cutoff_mult??1,V[3]=this.wScale,r.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=M("bench sort info",64,Ve|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=M("bench draw args",16,Ve|GPUBufferUsage.INDIRECT),r.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=M("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const oe=M("bench splats",G*ys),C=r.createShaderModule({label:"bench indirect",code:an});this.indirectPipe=r.createComputePipeline({layout:"auto",compute:{module:C,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=r.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const ee=GPUShaderStage.COMPUTE,te=(Z,Q=ee)=>r.createBindGroupLayout({entries:Z.map((he,me)=>({binding:me,visibility:Q,buffer:{type:he}}))}),L=(Z,Q)=>({binding:Z,resource:{buffer:Q}}),ce=te(["uniform","uniform"]),K=r.createBindGroup({layout:ce,entries:[L(0,v),L(1,this.paramsBuf)]});let N,le;if(this.kind==="sorted_3dgs"){this.sorter=new xs(r,G,this.info);const Z=te(["read-only-storage","read-only-storage","storage"]),Q=te(["storage","storage","storage"]),he=r.createShaderModule({label:"gs3d_cull",code:Vt+hs});this.cullPipe=r.createComputePipeline({label:"gs3d_cull",layout:r.createPipelineLayout({bindGroupLayouts:[ce,Z,Q]}),compute:{module:he,entryPoint:"cull"}}),this.computeBgs=[K,r.createBindGroup({layout:Z,entries:[L(0,re),L(1,ie),L(2,oe)]}),r.createBindGroup({layout:Q,entries:[L(0,this.info),L(1,this.sorter.depthsIn),L(2,this.sorter.indicesIn)]})],le=this.sorter.indicesOut,N=M("bench weights stub",16,Ve)}else{const Z=new Float32Array(d.block("scale")),Q=new Float32Array(d.block("rot")),he=new Float32Array(G*7);for(let m=0;m<G;m++)he.set(Z.subarray(m*3,m*3+3),m*7),he.set(Q.subarray(m*4,m*4+4),m*7+3);const me=O("bench mgs attr",he),de=(m,x,e)=>{const u=new Float32Array(m.length);for(let n=0;n<x;n++)for(let a=0;a<e;a++)u[a*x+n]=m[n*e+a];return u},xe=S.mlp.flatMap(m=>[de(new Float32Array(d.block(`${m.name}.weight`)),m.out_dim,m.in_dim),new Float32Array(d.block(`${m.name}.bias`))]),be=S.mlp.map(m=>`${m.in_dim}>${m.out_dim}`).join(",");if(be!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${be}`);const we=new Float32Array(xe.reduce((m,x)=>m+x.length,0));let se=0;for(const m of xe)we.set(m,se),se+=m.length;const fe=O("bench mgs mlp",we),ye=M("bench mgs vis",G*4),B=M("bench mgs mlp out",G*8);N=M("bench mgs weights",G*4),this.countCopy=M("bench mgs count",16,Ve);const A=te(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),h=te(["read-only-storage","storage","storage","storage","storage"]),t=te(["storage"]),l=r.createShaderModule({label:"mgs_compute",code:Vt+_s}),o=r.createPipelineLayout({bindGroupLayouts:[ce,A,h,t]}),p=r.createPipelineLayout({bindGroupLayouts:[ce,A,h]}),g=(m,x)=>r.createComputePipeline({label:`mgs_${m}`,layout:x,compute:{module:l,entryPoint:m}});this.cullPipe=g("cull",o),this.mlpPipe=g("mlp_coop",p),this.mlpAllPipe=g("mlp_all_coop",p),this.prepPipe=g("prep",p),this.computeBgs=[K,r.createBindGroup({layout:A,entries:[L(0,re),L(1,ie),L(2,me),L(3,fe)]}),r.createBindGroup({layout:h,entries:[L(0,this.countCopy),L(1,ye),L(2,B),L(3,oe),L(4,N)]})],this.cullInfoBg=r.createBindGroup({layout:t,entries:[L(0,this.info)]}),le=M("bench order stub",16,Ve)}const E=GPUShaderStage.VERTEX,ne=r.createBindGroupLayout({entries:[{binding:0,visibility:E,buffer:{type:"read-only-storage"}},{binding:1,visibility:E,buffer:{type:"read-only-storage"}},{binding:2,visibility:E,buffer:{type:"uniform"}},{binding:3,visibility:E,buffer:{type:"read-only-storage"}}]});this.rasterBg=r.createBindGroup({layout:ne,entries:[L(0,oe),L(1,le),L(2,this.vpBuf),L(3,N)]});const W=r.createShaderModule({label:"gs_raster",code:gs}),ae=Z=>({operation:"add",srcFactor:"one",dstFactor:Z}),ue=this.kind==="sorted_3dgs";if(this.rasterPipe=r.createRenderPipeline({label:ue?"gs_raster over":"gs_raster wsum",layout:r.createPipelineLayout({bindGroupLayouts:[ne]}),vertex:{module:W,entryPoint:ue?"vs_main":"vs_wsum"},fragment:ue?{module:W,entryPoint:"fs_over",targets:[{format:y,blend:{color:ae("one-minus-src-alpha"),alpha:ae("one-minus-src-alpha")}}]}:{module:W,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:ae("one"),alpha:ae("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!ue){this.eps=M("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),r.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const Z=GPUShaderStage.FRAGMENT;this.resolveBgl=r.createBindGroupLayout({entries:[{binding:0,visibility:Z,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:Z,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:Z,buffer:{type:"uniform"}}]});const Q=r.createShaderModule({label:"mgs_resolve",code:ms});this.resolvePipe=r.createRenderPipeline({layout:r.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:Q,entryPoint:"vs_full"},fragment:{module:Q,entryPoint:"fs_resolve",targets:[{format:y}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(r=32768){if(!this.mlpAllPipe)return;const d=new Uint32Array(this.params);for(let v=0;v<this.n;v+=r){d[4]=v,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const y=this.device.createCommandEncoder(),w=y.beginComputePass();w.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((S,G)=>w.setBindGroup(G,S)),w.dispatchWorkgroups(Math.ceil(Math.min(r,this.n-v)/Xt)),w.end(),this.device.queue.submit([y.finish()]),await this.device.queue.onSubmittedWorkDone()}d[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(r,d){var y,w;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===r&&this.accTex.height===d)return;(y=this.accTex)==null||y.destroy(),(w=this.trTex)==null||w.destroy();const v=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[r,d],format:this.accFormat,usage:v}),this.trTex=this.device.createTexture({label:"mgs T",size:[r,d],format:"r16float",usage:v}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(r,d,v,y){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([v,y,0,0])),this.ensureTargets(v,y);const w=(M,O)=>{const F=r.beginComputePass();F.setPipeline(M),this.computeBgs.forEach((j,D)=>F.setBindGroup(D,j)),!O&&this.cullInfoBg&&F.setBindGroup(3,this.cullInfoBg),O?F.dispatchWorkgroupsIndirect(this.info,4):F.dispatchWorkgroups(Math.ceil(this.n/Xt)),F.end()};r.clearBuffer(this.info,0,4),w(this.cullPipe,!1);{const M=r.beginComputePass();M.setPipeline(this.indirectPipe),M.setBindGroup(0,this.indirectBg),M.dispatchWorkgroups(1),M.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(r);const M=r.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});M.setPipeline(this.rasterPipe),M.setBindGroup(0,this.rasterBg),M.drawIndirect(this.drawArgs,0),M.end();return}r.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||w(this.mlpPipe,!0),w(this.prepPipe,!0);const S=r.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});S.setPipeline(this.rasterPipe),S.setBindGroup(0,this.rasterBg),S.drawIndirect(this.drawArgs,0),S.end();const G=r.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});G.setPipeline(this.resolvePipe),G.setBindGroup(0,this.resolveBg),G.draw(3),G.end()}destroy(){var r,d,v;for(const y of this.owned)y.destroy();(r=this.sorter)==null||r.destroy(),(d=this.accTex)==null||d.destroy(),(v=this.trTex)==null||v.destroy()}}const Ke="rgba8unorm",Jt="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",Qe=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"bitymi_mip0",label:"BITYMI (mips, bias 0)",asset:"bitymimip",note:"diagnostic: atlas mip chain, full per-surfel prefiltering"},{id:"bitymi_mip1",label:"BITYMI (mips, bias 1)",asset:"bitymimip",note:"diagnostic: atlas mip chain, one level less prefiltering"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],bs=i=>new Promise(r=>setTimeout(r,i)),Kt=()=>new Promise(i=>setTimeout(i,0));function vs(i){const r=new TextDecoder().decode(new Uint8Array(i,0,8));if(r!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${r}')`);const d=new DataView(i);let v=null,y=null;for(let w=0;w<d.getUint32(8,!0);w++){const S=12+w*20,G=d.getUint32(S,!0),M=Number(d.getBigUint64(S+4,!0)),O=Number(d.getBigUint64(S+12,!0));G===0||G===1||G===5?v=i.slice(M,M+O):(G===3||G===4)&&(y=i.slice(M,M+O))}if(!v)throw new Error("bundle has no point cloud chunk");return{pc:v,atlas:y}}async function xt(i,r){var F;const d=await fetch(i);if(!d.ok)throw new Error(`${i}: HTTP ${d.status}`);const v=Number(d.headers.get("content-length"))||0,y=(F=d.body)==null?void 0:F.getReader();if(!y)return d.arrayBuffer();const w=[];let S=0,G=0;for(;;){const{done:j,value:D}=await y.read();if(j)break;w.push(D),S+=D.byteLength,S-G>2<<20&&(G=S,r(S/2**20,v?v/2**20:null))}const M=new Uint8Array(S);let O=0;for(const j of w)M.set(j,O),O+=j.byteLength;return M.buffer}function St(i,r,d=new Set,v=0){if(!(!i||typeof i!="object"||d.has(i)||v>2)){d.add(i);for(const y of Object.values(i))r.has(y)||(y instanceof GPUBuffer||y instanceof GPUTexture?y.destroy():Array.isArray(y)?y.forEach(w=>St(w,r,d,v+1)):y&&typeof y=="object"&&Object.getPrototypeOf(y)===Object.prototype&&St(y,r,d,v+1))}}async function Ss(i,r,d,v,y){const w=new URLSearchParams(location.search),S=w.get("scene")??"garden",G=(w.get("assets")??`${Jt}/bench/${S}`).replace(/\/$/,""),M=d.features.has("texture-compression-bc"),O=d.features.has("texture-compression-astc"),F=w.get("bitymi")??`${Jt}/mip_360/${S}_e3rdraw${M||!O?"":"_astc"}.bitymi`,j=d.features.has("float32-blendable"),D=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),Y=w.get("byid");let re=Y!==null?Y==="1":!D,ie=w.get("legacy")==="1";r.configure({device:d,format:Ke,alphaMode:"opaque"});const R=new wt(i,d),V=new Wn(R),oe=document.getElementById("bench-panel"),C=n=>document.getElementById(n),ee=n=>{C("status").textContent=n},te=await(await fetch(`${G}/manifest.json`)).json(),L=await Dn(`${G}/${te.cameras}`),ce=await(await fetch(`${G}/${te.cameras}`)).json(),[K,N]=te.resolution,le=2*Math.atan(N/(2*ce[0].fy));R.setFov(le),R.set_preset(L[0]),V.resetToCamera();const E=C("method");for(const n of Qe)E.add(new Option(n.label,n.id));const ne=v.info;C("device").textContent=`${ne.vendor||"?"} ${ne.architecture||""} ${ne.device||ne.description||""}`.trim()+` · BC7 ${M?"✓":"✗"} ASTC ${O?"✓":"✗"} · float32-blend ${j?"✓":"✗"}`;let W=null,ae=!1,ue=null,Z=null;const Q=w.get("bitymimip")??F.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmip$1.bitymi");async function he(n){var b,k;const a=performance.now(),s=(T,U)=>ee(`${n.label}: downloading ${T.toFixed(0)}${U?` / ${U.toFixed(0)}`:""} MB`);if(n.asset==="bitymi"||n.asset==="bitymimip"){const T=n.asset==="bitymi"?ue??(ue=await xt(F,s)):Z??(Z=await xt(Q,s)),U=n.id==="bitymi_oct";ee(`${n.label}: parsing`);const{pc:z,atlas:I}=vs(T),q=await Vn(new File([z],"bundle.ply"),d);let $=null;I&&($=Yn(d,Hn(I),!0));const H=new fs(q,d,Ke,R.uniform_buffer,y,$,{fetchById:re,octBound:U,acc16:!1});ie&&H.setLegacyRenderer(!0),H.setAtlasEnabled(n.id!=="bitymi_noatlas"),n.asset==="bitymimip"&&H.setMipLodBias(n.id==="bitymi_mip0"?0:1);let X=0,pe=0;const ge=$?$.meta.format===3||$.meta.format===8||$.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:n,prims:q.num_points,downloadBytes:T.byteLength,gs:H,oct:U,detail:`atlas ${n.id==="bitymi_noatlas"?"OFF (diagnostic)":ge} · fragment inputs ${re?"fetch-by-id":"varyings"} · ${ie?"LEGACY renderer":"current renderer"}${U?" · octagon bound":""}${n.asset==="bitymimip"?` · atlas mips (${((k=(b=$==null?void 0:$.meta)==null?void 0:b.mip_bytes)==null?void 0:k.length)??1} levels)`:""} · ${(performance.now()-a).toFixed(0)} ms load`,render(Se,Be,ve,Pe){(ve!==X||Pe!==pe)&&(ts(ve,Pe,d,H.render_settings_buffer),X=ve,pe=Pe),H.frame(Se,Be,!1)},destroy(){q.surfel_buffer.destroy(),q.sv_params_buffer.destroy(),$&&($.texture.destroy(),$.rectsBuffer.destroy(),$.texParamsBuffer.destroy()),St(H,new Set([R.uniform_buffer]))}}}const c=await xt(`${G}/${te.methods[n.asset].file}`,s);ee(`${n.label}: uploading`);const _=new ws(d,ps(c),R.uniform_buffer,Ke,{float32Blend:j});return{def:n,prims:_.n,downloadBytes:c.byteLength,baseline:_,detail:`${_.label}${n.asset==="mobilegs"?` · shipped model ${(te.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(T,U,z,I)=>_.frame(T,U,z,I),destroy:()=>_.destroy()}}async function me(n){var s,c;const a=(W==null?void 0:W.gs)&&W.def.asset===n.asset&&W.oct===(n.id==="bitymi_oct");if(W&&W.def.asset===n.asset&&(W.baseline||a)?(W={...W,def:n},(s=W.gs)==null||s.setAtlasEnabled(n.id!=="bitymi_noatlas"),n.asset==="bitymimip"&&((c=W.gs)==null||c.setMipLodBias(n.id==="bitymi_mip0"?0:1))):(W==null||W.destroy(),W=null,await d.queue.onSubmittedWorkDone(),W=await he(n)),W.baseline&&W.baseline.kind==="sortfree_weighted"){const _=n.id==="mobilegs_frozen";_&&(R.set_preset(L[0]),ee("Mobile-GS: evaluating the MLP once for all Gaussians"),await W.baseline.computeAllMlp()),W.baseline.freezeMlp=_}return C("info").textContent=`${W.def.label}: ${W.prims.toLocaleString()} primitives · ${(W.downloadBytes/2**20).toFixed(1)} MB download · ${W.detail}`,ee("ready"),W}E.onchange=async()=>{if(!(ae||fe)){ae=!0;try{await me(Qe.find(n=>n.id===E.value))}catch(n){ee(`load failed: ${n}`),console.error(n)}finally{ae=!1}}};const de=C("byid"),xe=C("legacy");de.checked=re,xe.checked=ie;const be=async()=>{if(ae||fe){de.checked=re,xe.checked=ie;return}if(re=de.checked,ie=xe.checked,(W==null?void 0:W.def.id)==="bitymi"){ae=!0;try{W.destroy(),W=null,await d.queue.onSubmittedWorkDone(),await me(Qe[0])}catch(n){ee(`load failed: ${n}`),console.error(n)}finally{ae=!1}}};de.onchange=be,xe.onchange=be;let we=0;const se=n=>{we=(n+L.length)%L.length,R.set_preset(L[we]),V.resetToCamera(),C("view").textContent=`${we+1}/${L.length}`};C("prev").onclick=()=>se(we-1),C("next").onclick=()=>se(we+1);let fe=!1,ye=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(ye=!0)});const B=()=>({warmupS:Number(C("warmup").value),measureS:Number(C("measure").value),minFrames:Number(C("minframes").value),maxS:Number(C("maxs").value),cooldownS:Number(C("cooldown").value),rounds:Number(C("rounds").value),frozen:C("frozen").checked,diag:C("diag").checked});window.__setMipBias=n=>{var a;(a=W==null?void 0:W.gs)==null||a.setMipLodBias(n)},window.__mipHistogram=async n=>{const a=W==null?void 0:W.gs;if(!a)throw new Error("BITYMI not loaded");const s=d.createTexture({size:[K,N],format:Ke,usage:GPUTextureUsage.RENDER_ATTACHMENT});R.setRenderSize(K,N),R.setFov(le),R.set_preset(L[n]);const c=d.createCommandEncoder();W.render(c,s.createView(),K,N);const _=a.splat_2d_buffer.size,f=d.createBuffer({size:_,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),b=d.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});c.copyBufferToBuffer(a.splat_2d_buffer,0,f,0,_),c.copyBufferToBuffer(a.sort_info_buffer,0,b,0,16),d.queue.submit([c.finish()]),await Promise.all([f.mapAsync(GPUMapMode.READ),b.mapAsync(GPUMapMode.READ)]);const k=new Uint32Array(b.getMappedRange())[0],T=new Uint32Array(f.getMappedRange()),U=new Float32Array(T.buffer),z=[0,0,0,0,0],I=[0,0,0,0,0],q=$=>{const H=$>>10&31,X=$&1023;return H===0?X/1024*2**-14:2**(H-15)*(1+X/1024)};for(let $=0;$<k;$++){const H=Math.min(4,Math.round(U[$*24+23])),X=T[$*24+11],pe=4*q(X&65535)*q(X>>>16);z[H]++,I[H]+=pe}return f.unmap(),b.unmap(),f.destroy(),b.destroy(),s.destroy(),R.clearRenderSize(),R.setFov(le),se(we),{n:k,cnt:z,area:I}},window.__setMipMode=n=>{var a;(a=W==null?void 0:W.gs)==null||a.setMipMode(n)},window.__benchRender=async n=>{if(!W)throw new Error("nothing loaded");const a=d.createTexture({size:[K,N],format:Ke,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),s=Math.ceil(K*4/256)*256,c=d.createBuffer({size:s*N,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});R.setRenderSize(K,N),R.setFov(le),R.set_preset(L[n]);const _=d.createCommandEncoder();W.render(_,a.createView(),K,N),_.copyTextureToBuffer({texture:a},{buffer:c,bytesPerRow:s,rowsPerImage:N},[K,N,1]),d.queue.submit([_.finish()]),await c.mapAsync(GPUMapMode.READ);const f=new Uint8Array(c.getMappedRange()),b=new Uint8Array(K*N*4);for(let T=0;T<N;T++)b.set(f.subarray(T*s,T*s+K*4),T*K*4);c.unmap(),c.destroy(),a.destroy(),R.clearRenderSize(),R.setFov(le),se(we);let k="";for(let T=0;T<b.length;T+=32768)k+=String.fromCharCode(...b.subarray(T,T+32768));return{w:K,h:N,b64:btoa(k)}};async function A(n,a,s){const c=d.createTexture({size:[K,N],format:Ke,usage:GPUTextureUsage.RENDER_ATTACHMENT}),_=c.createView();R.setRenderSize(K,N),R.setFov(le);let f=0;const b=async z=>{const I=performance.now();for(let q=0;q<z;q++){R.set_preset(L[f++%L.length]);const $=d.createCommandEncoder();n.render($,_,K,N),d.queue.submit([$.finish()])}return await d.queue.onSubmittedWorkDone(),performance.now()-I};let k=1;const T=(z,I)=>{k=Math.max(1,Math.min(60,Math.round(I*250/Math.max(z,1))))},U=`${n.def.label} · round ${a+1}`;ye=!1;try{let z=0,I=0;for(;z<s.warmupS*1e3||I<3;){const X=k,pe=await b(X);z+=pe,I+=X,T(pe,X),ee(`${U}: warmup ${(z/1e3).toFixed(1)}/${s.warmupS} s`),await Kt()}let q=0,$=0;const H=[];for(;(q<s.measureS*1e3||$<s.minFrames)&&q<s.maxS*1e3;){const X=k,pe=await b(X);q+=pe,$+=X,H.push(+(pe/X).toFixed(3)),T(pe,X),ee(`${U}: ${(1e3*$/q).toFixed(1)} FPS · ${$} frames · ${(q/1e3).toFixed(1)} s`),await Kt()}return{round:a,frames:$,ms:q,fps:1e3*$/q,chunkMsPerFrame:H,interrupted:ye}}finally{c.destroy(),R.clearRenderSize(),R.setFov(le),se(we)}}let h=null;function t(n,a){const s=n.get("bitymi"),c=s&&s.length?s.reduce((f,b)=>f+b.frames,0)/s.reduce((f,b)=>f+b.ms,0)*1e3:0,_=Qe.filter(f=>n.has(f.id)).map(f=>{const b=n.get(f.id),k=b.length?b.reduce((U,z)=>U+z.frames,0)/b.reduce((U,z)=>U+z.ms,0)*1e3:0,T=a.get(f.id);return`<tr><td>${f.label}</td><td>${T?T.prims.toLocaleString():""}</td><td>${T?(T.bytes/2**20).toFixed(0):""}</td><td>${b.map(U=>U.fps.toFixed(1)+(U.interrupted?"⚠":"")).join(" / ")}</td><td><b>${k?k.toFixed(1):""}</b></td><td>${k?(1e3/k).toFixed(1):""}</td><td>${c&&k&&f.id!=="bitymi"?(c/k).toFixed(1)+"×":""}</td></tr>`}).join("");C("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${_}</table>`}async function l(){var k;if(fe||ae)return;fe=!0;const n=B(),a=C("benchall");a.disabled=!0,E.disabled=!0;let s=null;try{s=await((k=navigator.wakeLock)==null?void 0:k.request("screen"))}catch{}const c=Qe.filter(T=>(n.frozen||T.id!=="mobilegs_frozen")&&(n.diag||!T.id.startsWith("bitymi_"))),_=new Map,f=new Map,b=new Date().toISOString();try{let T=!0;for(let U=0;U<n.rounds;U++){const z=U%2===0?c:[...c].reverse();for(const I of z){const q=await me(I);if(f.set(I.id,{prims:q.prims,bytes:q.downloadBytes,detail:q.detail}),!T&&n.cooldownS>0)for(let H=n.cooldownS;H>0;H--)ee(`cooldown ${H} s (next: ${I.label})`),await bs(1e3);T=!1;const $=await A(q,U,n);_.has(I.id)||_.set(I.id,[]),_.get(I.id).push($),t(_,f)}}h={kind:"bitymi-mobile-bench",version:1,scene:S,started:b,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:ne.vendor,architecture:ne.architecture,device:ne.device,description:ne.description},features:{bc:M,astc:O,float32Blendable:j,timestampQuery:d.features.has("timestamp-query")},resolution:[K,N],fovY:le,cameras:L.length,assets:G,bitymiUrl:F,bitymiVariant:{fetchById:re,legacy:ie},protocol:{...n,order:c.map(U=>U.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm"},methods:c.map(U=>({id:U.id,label:U.label,note:U.note,...f.get(U.id),fps:(()=>{const z=_.get(U.id)??[],I=z.reduce((q,$)=>q+$.ms,0);return I?1e3*z.reduce((q,$)=>q+$.frames,0)/I:null})(),rounds:_.get(U.id)??[]}))},ee(`done · ${c.length} methods × ${n.rounds} rounds`),C("summary").value=o(h),C("export").style.display=""}catch(T){ee(`bench failed: ${T}`),console.error(T)}finally{try{await(s==null?void 0:s.release())}catch{}a.disabled=!1,E.disabled=!1,fe=!1,E.value=(W==null?void 0:W.def.id)??"bitymi"}}function o(n){var b,k,T,U;const a=(b=n.methods.find(z=>z.id==="bitymi"))==null?void 0:b.fps,s=[n.adapter.vendor,n.adapter.architecture,n.adapter.device||n.adapter.description].filter(Boolean).join(" ")||"unknown GPU",c=(((k=n.userAgent.match(/\(([^)]*)\)/))==null?void 0:k[1])??"")+" "+(((T=n.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:T[0])??""),_=n.protocol;return[`**${n.scene} render benchmark** · ${s} · ${c.trim()}`,`${n.resolution[0]}×${n.resolution[1]}, ${n.cameras} test views · ${_.rounds} rounds mirrored · warmup ${_.warmupS} s · measure ≥${_.measureS} s / ${_.minFrames} frames · cooldown ${_.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...n.methods.map(z=>{var I;return`| ${z.label} | ${((I=z.prims)==null?void 0:I.toLocaleString())??""} | ${z.bytes?(z.bytes/2**20).toFixed(0):""} | ${z.rounds.map(q=>q.fps.toFixed(1)+(q.interrupted?" (tab hidden)":"")).join(" / ")} | ${z.fps?z.fps.toFixed(1):""} | ${z.fps?(1e3/z.fps).toFixed(1):""} | ${!z.id.startsWith("bitymi")&&a&&z.fps?(a/z.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${((U=n.methods.find(z=>z.id==="bitymi"))==null?void 0:U.detail)??""}. Mobile-GS blend target: ${n.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}const p=async(n,a)=>{try{await navigator.clipboard.writeText(n)}catch{const s=C("summary");s.value=n,s.select(),document.execCommand("copy")}ee(`${a} copied`)};C("benchall").onclick=()=>l(),C("copytable").onclick=()=>{h&&p(o(h),"table")},C("copy").onclick=()=>{h&&p(JSON.stringify(h,null,1),"JSON")},C("download").onclick=()=>{if(!h)return;const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([JSON.stringify(h,null,1)],{type:"application/json"})),n.download=`bench_${S}_${(ne.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,n.click()};const g=()=>{i.width=Math.max(1,Math.round(i.clientWidth)),i.height=Math.max(1,Math.round(i.clientHeight)),R.on_update_canvas()};new ResizeObserver(g).observe(i),g();let m=performance.now(),x=0,e=Promise.resolve();async function u(){const n=performance.now(),a=Math.min(.1,(n-m)/1e3);if(m=n,!fe&&W&&!ae){V.update(a),await e;const s=W;if(!s||fe||ae){requestAnimationFrame(u);return}const c=performance.now(),_=d.createCommandEncoder();s.render(_,r.getCurrentTexture().createView(),i.width,i.height),d.queue.submit([_.finish()]),e=d.queue.onSubmittedWorkDone().then(()=>{const f=performance.now()-c;x=x?.9*x+.1*f:f,C("live").textContent=`${(1e3/x).toFixed(0)} FPS live (${i.width}×${i.height}, vsync-capped)`})}requestAnimationFrame(u)}requestAnimationFrame(u),oe.style.display="",E.value="bitymi",ae=!0;try{await me(Qe[0])}catch(n){ee(`load failed: ${n}`),console.error(n)}finally{ae=!1}}(async()=>{const i=w=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${w}</p>`)};if(navigator.gpu===void 0)return i("WebGPU is not supported in this browser.");const r=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(r===null)return i("No WebGPU adapter available.");const d=[];for(const w of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])r.features.has(w)&&d.push(w);if(r.limits.maxStorageBuffersPerShaderStage<10)return i(`This GPU exposes ${r.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const v=await r.requestDevice({requiredFeatures:d,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize}});v.lost.then(w=>i(`GPU device lost: ${w.message}`)),v.addEventListener("uncapturederror",w=>{var S;return console.error("[bench] WebGPU error:",((S=w.error)==null?void 0:S.message)??w.error)});const y=document.querySelector("#webgpu-canvas");await Ss(y,y.getContext("webgpu"),v,r,d)})();
