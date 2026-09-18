var pn=Object.defineProperty;var hn=(r,s,d)=>s in r?pn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[s]=d;var T=(r,s,d)=>(hn(r,typeof s!="symbol"?s+"":s,d),d);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))v(y);new MutationObserver(y=>{for(const w of y)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&v(S)}).observe(document,{childList:!0,subtree:!0});function d(y){const w={};return y.integrity&&(w.integrity=y.integrity),y.referrerPolicy&&(w.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?w.credentials="include":y.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function v(y){if(y.ep)return;y.ep=!0;const w=d(y);fetch(y.href,w)}})();function _n(r,s){return class extends r{constructor(...d){super(...d),s(this)}}}const gn=_n(Array,r=>r.fill(0));let me=1e-6;function mn(r){function s(g=0,m=0){const x=new r(2);return g!==void 0&&(x[0]=g,m!==void 0&&(x[1]=m)),x}const d=s;function v(g,m,x){const e=x??new r(2);return e[0]=g,e[1]=m,e}function y(g,m){const x=m??new r(2);return x[0]=Math.ceil(g[0]),x[1]=Math.ceil(g[1]),x}function w(g,m){const x=m??new r(2);return x[0]=Math.floor(g[0]),x[1]=Math.floor(g[1]),x}function S(g,m){const x=m??new r(2);return x[0]=Math.round(g[0]),x[1]=Math.round(g[1]),x}function k(g,m=0,x=1,e){const u=e??new r(2);return u[0]=Math.min(x,Math.max(m,g[0])),u[1]=Math.min(x,Math.max(m,g[1])),u}function G(g,m,x){const e=x??new r(2);return e[0]=g[0]+m[0],e[1]=g[1]+m[1],e}function L(g,m,x,e){const u=e??new r(2);return u[0]=g[0]+m[0]*x,u[1]=g[1]+m[1]*x,u}function Z(g,m){const x=g[0],e=g[1],u=m[0],i=m[1],c=Math.sqrt(x*x+e*e),t=Math.sqrt(u*u+i*i),o=c*t,h=o&&H(g,m)/o;return Math.acos(h)}function V(g,m,x){const e=x??new r(2);return e[0]=g[0]-m[0],e[1]=g[1]-m[1],e}const U=V;function X(g,m){return Math.abs(g[0]-m[0])<me&&Math.abs(g[1]-m[1])<me}function ie(g,m){return g[0]===m[0]&&g[1]===m[1]}function ae(g,m,x,e){const u=e??new r(2);return u[0]=g[0]+x*(m[0]-g[0]),u[1]=g[1]+x*(m[1]-g[1]),u}function F(g,m,x,e){const u=e??new r(2);return u[0]=g[0]+x[0]*(m[0]-g[0]),u[1]=g[1]+x[1]*(m[1]-g[1]),u}function K(g,m,x){const e=x??new r(2);return e[0]=Math.max(g[0],m[0]),e[1]=Math.max(g[1],m[1]),e}function ue(g,m,x){const e=x??new r(2);return e[0]=Math.min(g[0],m[0]),e[1]=Math.min(g[1],m[1]),e}function C(g,m,x){const e=x??new r(2);return e[0]=g[0]*m,e[1]=g[1]*m,e}const J=C;function ne(g,m,x){const e=x??new r(2);return e[0]=g[0]/m,e[1]=g[1]/m,e}function $(g,m){const x=m??new r(2);return x[0]=1/g[0],x[1]=1/g[1],x}const fe=$;function Y(g,m,x){const e=x??new r(3),u=g[0]*m[1]-g[1]*m[0];return e[0]=0,e[1]=0,e[2]=u,e}function H(g,m){return g[0]*m[0]+g[1]*m[1]}function de(g){const m=g[0],x=g[1];return Math.sqrt(m*m+x*x)}const D=de;function Q(g){const m=g[0],x=g[1];return m*m+x*x}const W=Q;function le(g,m){const x=g[0]-m[0],e=g[1]-m[1];return Math.sqrt(x*x+e*e)}const pe=le;function j(g,m){const x=g[0]-m[0],e=g[1]-m[1];return x*x+e*e}const te=j;function ge(g,m){const x=m??new r(2),e=g[0],u=g[1],i=Math.sqrt(e*e+u*u);return i>1e-5?(x[0]=e/i,x[1]=u/i):(x[0]=0,x[1]=0),x}function ye(g,m){const x=m??new r(2);return x[0]=-g[0],x[1]=-g[1],x}function he(g,m){const x=m??new r(2);return x[0]=g[0],x[1]=g[1],x}const we=he;function Ge(g,m,x){const e=x??new r(2);return e[0]=g[0]*m[0],e[1]=g[1]*m[1],e}const Se=Ge;function oe(g,m,x){const e=x??new r(2);return e[0]=g[0]/m[0],e[1]=g[1]/m[1],e}const _e=oe;function ve(g=1,m){const x=m??new r(2),e=Math.random()*2*Math.PI;return x[0]=Math.cos(e)*g,x[1]=Math.sin(e)*g,x}function B(g){const m=g??new r(2);return m[0]=0,m[1]=0,m}function z(g,m,x){const e=x??new r(2),u=g[0],i=g[1];return e[0]=u*m[0]+i*m[4]+m[12],e[1]=u*m[1]+i*m[5]+m[13],e}function _(g,m,x){const e=x??new r(2),u=g[0],i=g[1];return e[0]=m[0]*u+m[4]*i+m[8],e[1]=m[1]*u+m[5]*i+m[9],e}function n(g,m,x,e){const u=e??new r(2),i=g[0]-m[0],c=g[1]-m[1],t=Math.sin(x),o=Math.cos(x);return u[0]=i*o-c*t+m[0],u[1]=i*t+c*o+m[1],u}function l(g,m,x){const e=x??new r(2);return ge(g,e),C(e,m,e)}function a(g,m,x){const e=x??new r(2);return de(g)>m?l(g,m,e):he(g,e)}function p(g,m,x){const e=x??new r(2);return ae(g,m,.5,e)}return{create:s,fromValues:d,set:v,ceil:y,floor:w,round:S,clamp:k,add:G,addScaled:L,angle:Z,subtract:V,sub:U,equalsApproximately:X,equals:ie,lerp:ae,lerpV:F,max:K,min:ue,mulScalar:C,scale:J,divScalar:ne,inverse:$,invert:fe,cross:Y,dot:H,length:de,len:D,lengthSq:Q,lenSq:W,distance:le,dist:pe,distanceSq:j,distSq:te,normalize:ge,negate:ye,copy:he,clone:we,multiply:Ge,mul:Se,divide:oe,div:_e,random:ve,zero:B,transformMat4:z,transformMat3:_,rotate:n,setLength:l,truncate:a,midpoint:p}}const Et=new Map;function Qt(r){let s=Et.get(r);return s||(s=mn(r),Et.set(r,s)),s}function xn(r){function s(t,o,h){const f=new r(3);return t!==void 0&&(f[0]=t,o!==void 0&&(f[1]=o,h!==void 0&&(f[2]=h))),f}const d=s;function v(t,o,h,f){const b=f??new r(3);return b[0]=t,b[1]=o,b[2]=h,b}function y(t,o){const h=o??new r(3);return h[0]=Math.ceil(t[0]),h[1]=Math.ceil(t[1]),h[2]=Math.ceil(t[2]),h}function w(t,o){const h=o??new r(3);return h[0]=Math.floor(t[0]),h[1]=Math.floor(t[1]),h[2]=Math.floor(t[2]),h}function S(t,o){const h=o??new r(3);return h[0]=Math.round(t[0]),h[1]=Math.round(t[1]),h[2]=Math.round(t[2]),h}function k(t,o=0,h=1,f){const b=f??new r(3);return b[0]=Math.min(h,Math.max(o,t[0])),b[1]=Math.min(h,Math.max(o,t[1])),b[2]=Math.min(h,Math.max(o,t[2])),b}function G(t,o,h){const f=h??new r(3);return f[0]=t[0]+o[0],f[1]=t[1]+o[1],f[2]=t[2]+o[2],f}function L(t,o,h,f){const b=f??new r(3);return b[0]=t[0]+o[0]*h,b[1]=t[1]+o[1]*h,b[2]=t[2]+o[2]*h,b}function Z(t,o){const h=t[0],f=t[1],b=t[2],P=o[0],M=o[1],O=o[2],A=Math.sqrt(h*h+f*f+b*b),I=Math.sqrt(P*P+M*M+O*O),E=A*I,q=E&&H(t,o)/E;return Math.acos(q)}function V(t,o,h){const f=h??new r(3);return f[0]=t[0]-o[0],f[1]=t[1]-o[1],f[2]=t[2]-o[2],f}const U=V;function X(t,o){return Math.abs(t[0]-o[0])<me&&Math.abs(t[1]-o[1])<me&&Math.abs(t[2]-o[2])<me}function ie(t,o){return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]}function ae(t,o,h,f){const b=f??new r(3);return b[0]=t[0]+h*(o[0]-t[0]),b[1]=t[1]+h*(o[1]-t[1]),b[2]=t[2]+h*(o[2]-t[2]),b}function F(t,o,h,f){const b=f??new r(3);return b[0]=t[0]+h[0]*(o[0]-t[0]),b[1]=t[1]+h[1]*(o[1]-t[1]),b[2]=t[2]+h[2]*(o[2]-t[2]),b}function K(t,o,h){const f=h??new r(3);return f[0]=Math.max(t[0],o[0]),f[1]=Math.max(t[1],o[1]),f[2]=Math.max(t[2],o[2]),f}function ue(t,o,h){const f=h??new r(3);return f[0]=Math.min(t[0],o[0]),f[1]=Math.min(t[1],o[1]),f[2]=Math.min(t[2],o[2]),f}function C(t,o,h){const f=h??new r(3);return f[0]=t[0]*o,f[1]=t[1]*o,f[2]=t[2]*o,f}const J=C;function ne(t,o,h){const f=h??new r(3);return f[0]=t[0]/o,f[1]=t[1]/o,f[2]=t[2]/o,f}function $(t,o){const h=o??new r(3);return h[0]=1/t[0],h[1]=1/t[1],h[2]=1/t[2],h}const fe=$;function Y(t,o,h){const f=h??new r(3),b=t[2]*o[0]-t[0]*o[2],P=t[0]*o[1]-t[1]*o[0];return f[0]=t[1]*o[2]-t[2]*o[1],f[1]=b,f[2]=P,f}function H(t,o){return t[0]*o[0]+t[1]*o[1]+t[2]*o[2]}function de(t){const o=t[0],h=t[1],f=t[2];return Math.sqrt(o*o+h*h+f*f)}const D=de;function Q(t){const o=t[0],h=t[1],f=t[2];return o*o+h*h+f*f}const W=Q;function le(t,o){const h=t[0]-o[0],f=t[1]-o[1],b=t[2]-o[2];return Math.sqrt(h*h+f*f+b*b)}const pe=le;function j(t,o){const h=t[0]-o[0],f=t[1]-o[1],b=t[2]-o[2];return h*h+f*f+b*b}const te=j;function ge(t,o){const h=o??new r(3),f=t[0],b=t[1],P=t[2],M=Math.sqrt(f*f+b*b+P*P);return M>1e-5?(h[0]=f/M,h[1]=b/M,h[2]=P/M):(h[0]=0,h[1]=0,h[2]=0),h}function ye(t,o){const h=o??new r(3);return h[0]=-t[0],h[1]=-t[1],h[2]=-t[2],h}function he(t,o){const h=o??new r(3);return h[0]=t[0],h[1]=t[1],h[2]=t[2],h}const we=he;function Ge(t,o,h){const f=h??new r(3);return f[0]=t[0]*o[0],f[1]=t[1]*o[1],f[2]=t[2]*o[2],f}const Se=Ge;function oe(t,o,h){const f=h??new r(3);return f[0]=t[0]/o[0],f[1]=t[1]/o[1],f[2]=t[2]/o[2],f}const _e=oe;function ve(t=1,o){const h=o??new r(3),f=Math.random()*2*Math.PI,b=Math.random()*2-1,P=Math.sqrt(1-b*b)*t;return h[0]=Math.cos(f)*P,h[1]=Math.sin(f)*P,h[2]=b*t,h}function B(t){const o=t??new r(3);return o[0]=0,o[1]=0,o[2]=0,o}function z(t,o,h){const f=h??new r(3),b=t[0],P=t[1],M=t[2],O=o[3]*b+o[7]*P+o[11]*M+o[15]||1;return f[0]=(o[0]*b+o[4]*P+o[8]*M+o[12])/O,f[1]=(o[1]*b+o[5]*P+o[9]*M+o[13])/O,f[2]=(o[2]*b+o[6]*P+o[10]*M+o[14])/O,f}function _(t,o,h){const f=h??new r(3),b=t[0],P=t[1],M=t[2];return f[0]=b*o[0*4+0]+P*o[1*4+0]+M*o[2*4+0],f[1]=b*o[0*4+1]+P*o[1*4+1]+M*o[2*4+1],f[2]=b*o[0*4+2]+P*o[1*4+2]+M*o[2*4+2],f}function n(t,o,h){const f=h??new r(3),b=t[0],P=t[1],M=t[2];return f[0]=b*o[0]+P*o[4]+M*o[8],f[1]=b*o[1]+P*o[5]+M*o[9],f[2]=b*o[2]+P*o[6]+M*o[10],f}function l(t,o,h){const f=h??new r(3),b=o[0],P=o[1],M=o[2],O=o[3]*2,A=t[0],I=t[1],E=t[2],q=P*E-M*I,N=M*A-b*E,R=b*I-P*A;return f[0]=A+q*O+(P*R-M*N)*2,f[1]=I+N*O+(M*q-b*R)*2,f[2]=E+R*O+(b*N-P*q)*2,f}function a(t,o){const h=o??new r(3);return h[0]=t[12],h[1]=t[13],h[2]=t[14],h}function p(t,o,h){const f=h??new r(3),b=o*4;return f[0]=t[b+0],f[1]=t[b+1],f[2]=t[b+2],f}function g(t,o){const h=o??new r(3),f=t[0],b=t[1],P=t[2],M=t[4],O=t[5],A=t[6],I=t[8],E=t[9],q=t[10];return h[0]=Math.sqrt(f*f+b*b+P*P),h[1]=Math.sqrt(M*M+O*O+A*A),h[2]=Math.sqrt(I*I+E*E+q*q),h}function m(t,o,h,f){const b=f??new r(3),P=[],M=[];return P[0]=t[0]-o[0],P[1]=t[1]-o[1],P[2]=t[2]-o[2],M[0]=P[0],M[1]=P[1]*Math.cos(h)-P[2]*Math.sin(h),M[2]=P[1]*Math.sin(h)+P[2]*Math.cos(h),b[0]=M[0]+o[0],b[1]=M[1]+o[1],b[2]=M[2]+o[2],b}function x(t,o,h,f){const b=f??new r(3),P=[],M=[];return P[0]=t[0]-o[0],P[1]=t[1]-o[1],P[2]=t[2]-o[2],M[0]=P[2]*Math.sin(h)+P[0]*Math.cos(h),M[1]=P[1],M[2]=P[2]*Math.cos(h)-P[0]*Math.sin(h),b[0]=M[0]+o[0],b[1]=M[1]+o[1],b[2]=M[2]+o[2],b}function e(t,o,h,f){const b=f??new r(3),P=[],M=[];return P[0]=t[0]-o[0],P[1]=t[1]-o[1],P[2]=t[2]-o[2],M[0]=P[0]*Math.cos(h)-P[1]*Math.sin(h),M[1]=P[0]*Math.sin(h)+P[1]*Math.cos(h),M[2]=P[2],b[0]=M[0]+o[0],b[1]=M[1]+o[1],b[2]=M[2]+o[2],b}function u(t,o,h){const f=h??new r(3);return ge(t,f),C(f,o,f)}function i(t,o,h){const f=h??new r(3);return de(t)>o?u(t,o,f):he(t,f)}function c(t,o,h){const f=h??new r(3);return ae(t,o,.5,f)}return{create:s,fromValues:d,set:v,ceil:y,floor:w,round:S,clamp:k,add:G,addScaled:L,angle:Z,subtract:V,sub:U,equalsApproximately:X,equals:ie,lerp:ae,lerpV:F,max:K,min:ue,mulScalar:C,scale:J,divScalar:ne,inverse:$,invert:fe,cross:Y,dot:H,length:de,len:D,lengthSq:Q,lenSq:W,distance:le,dist:pe,distanceSq:j,distSq:te,normalize:ge,negate:ye,copy:he,clone:we,multiply:Ge,mul:Se,divide:oe,div:_e,random:ve,zero:B,transformMat4:z,transformMat4Upper3x3:_,transformMat3:n,transformQuat:l,getTranslation:a,getAxis:p,getScaling:g,rotateX:m,rotateY:x,rotateZ:e,setLength:u,truncate:i,midpoint:c}}const Dt=new Map;function mt(r){let s=Dt.get(r);return s||(s=xn(r),Dt.set(r,s)),s}function yn(r){const s=Qt(r),d=mt(r);function v(n,l,a,p,g,m,x,e,u){const i=new r(12);return i[3]=0,i[7]=0,i[11]=0,n!==void 0&&(i[0]=n,l!==void 0&&(i[1]=l,a!==void 0&&(i[2]=a,p!==void 0&&(i[4]=p,g!==void 0&&(i[5]=g,m!==void 0&&(i[6]=m,x!==void 0&&(i[8]=x,e!==void 0&&(i[9]=e,u!==void 0&&(i[10]=u))))))))),i}function y(n,l,a,p,g,m,x,e,u,i){const c=i??new r(12);return c[0]=n,c[1]=l,c[2]=a,c[3]=0,c[4]=p,c[5]=g,c[6]=m,c[7]=0,c[8]=x,c[9]=e,c[10]=u,c[11]=0,c}function w(n,l){const a=l??new r(12);return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=0,a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=0,a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=0,a}function S(n,l){const a=l??new r(12),p=n[0],g=n[1],m=n[2],x=n[3],e=p+p,u=g+g,i=m+m,c=p*e,t=g*e,o=g*u,h=m*e,f=m*u,b=m*i,P=x*e,M=x*u,O=x*i;return a[0]=1-o-b,a[1]=t+O,a[2]=h-M,a[3]=0,a[4]=t-O,a[5]=1-c-b,a[6]=f+P,a[7]=0,a[8]=h+M,a[9]=f-P,a[10]=1-c-o,a[11]=0,a}function k(n,l){const a=l??new r(12);return a[0]=-n[0],a[1]=-n[1],a[2]=-n[2],a[4]=-n[4],a[5]=-n[5],a[6]=-n[6],a[8]=-n[8],a[9]=-n[9],a[10]=-n[10],a}function G(n,l,a){const p=a??new r(12);return p[0]=n[0]*l,p[1]=n[1]*l,p[2]=n[2]*l,p[4]=n[4]*l,p[5]=n[5]*l,p[6]=n[6]*l,p[8]=n[8]*l,p[9]=n[9]*l,p[10]=n[10]*l,p}const L=G;function Z(n,l,a){const p=a??new r(12);return p[0]=n[0]+l[0],p[1]=n[1]+l[1],p[2]=n[2]+l[2],p[4]=n[4]+l[4],p[5]=n[5]+l[5],p[6]=n[6]+l[6],p[8]=n[8]+l[8],p[9]=n[9]+l[9],p[10]=n[10]+l[10],p}function V(n,l){const a=l??new r(12);return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[8]=n[8],a[9]=n[9],a[10]=n[10],a}const U=V;function X(n,l){return Math.abs(n[0]-l[0])<me&&Math.abs(n[1]-l[1])<me&&Math.abs(n[2]-l[2])<me&&Math.abs(n[4]-l[4])<me&&Math.abs(n[5]-l[5])<me&&Math.abs(n[6]-l[6])<me&&Math.abs(n[8]-l[8])<me&&Math.abs(n[9]-l[9])<me&&Math.abs(n[10]-l[10])<me}function ie(n,l){return n[0]===l[0]&&n[1]===l[1]&&n[2]===l[2]&&n[4]===l[4]&&n[5]===l[5]&&n[6]===l[6]&&n[8]===l[8]&&n[9]===l[9]&&n[10]===l[10]}function ae(n){const l=n??new r(12);return l[0]=1,l[1]=0,l[2]=0,l[4]=0,l[5]=1,l[6]=0,l[8]=0,l[9]=0,l[10]=1,l}function F(n,l){const a=l??new r(12);if(a===n){let o;return o=n[1],n[1]=n[4],n[4]=o,o=n[2],n[2]=n[8],n[8]=o,o=n[6],n[6]=n[9],n[9]=o,a}const p=n[0*4+0],g=n[0*4+1],m=n[0*4+2],x=n[1*4+0],e=n[1*4+1],u=n[1*4+2],i=n[2*4+0],c=n[2*4+1],t=n[2*4+2];return a[0]=p,a[1]=x,a[2]=i,a[4]=g,a[5]=e,a[6]=c,a[8]=m,a[9]=u,a[10]=t,a}function K(n,l){const a=l??new r(12),p=n[0*4+0],g=n[0*4+1],m=n[0*4+2],x=n[1*4+0],e=n[1*4+1],u=n[1*4+2],i=n[2*4+0],c=n[2*4+1],t=n[2*4+2],o=t*e-u*c,h=-t*x+u*i,f=c*x-e*i,b=1/(p*o+g*h+m*f);return a[0]=o*b,a[1]=(-t*g+m*c)*b,a[2]=(u*g-m*e)*b,a[4]=h*b,a[5]=(t*p-m*i)*b,a[6]=(-u*p+m*x)*b,a[8]=f*b,a[9]=(-c*p+g*i)*b,a[10]=(e*p-g*x)*b,a}function ue(n){const l=n[0],a=n[0*4+1],p=n[0*4+2],g=n[1*4+0],m=n[1*4+1],x=n[1*4+2],e=n[2*4+0],u=n[2*4+1],i=n[2*4+2];return l*(m*i-u*x)-g*(a*i-u*p)+e*(a*x-m*p)}const C=K;function J(n,l,a){const p=a??new r(12),g=n[0],m=n[1],x=n[2],e=n[4+0],u=n[4+1],i=n[4+2],c=n[8+0],t=n[8+1],o=n[8+2],h=l[0],f=l[1],b=l[2],P=l[4+0],M=l[4+1],O=l[4+2],A=l[8+0],I=l[8+1],E=l[8+2];return p[0]=g*h+e*f+c*b,p[1]=m*h+u*f+t*b,p[2]=x*h+i*f+o*b,p[4]=g*P+e*M+c*O,p[5]=m*P+u*M+t*O,p[6]=x*P+i*M+o*O,p[8]=g*A+e*I+c*E,p[9]=m*A+u*I+t*E,p[10]=x*A+i*I+o*E,p}const ne=J;function $(n,l,a){const p=a??ae();return n!==p&&(p[0]=n[0],p[1]=n[1],p[2]=n[2],p[4]=n[4],p[5]=n[5],p[6]=n[6]),p[8]=l[0],p[9]=l[1],p[10]=1,p}function fe(n,l){const a=l??s.create();return a[0]=n[8],a[1]=n[9],a}function Y(n,l,a){const p=a??s.create(),g=l*4;return p[0]=n[g+0],p[1]=n[g+1],p}function H(n,l,a,p){const g=p===n?n:V(n,p),m=a*4;return g[m+0]=l[0],g[m+1]=l[1],g}function de(n,l){const a=l??s.create(),p=n[0],g=n[1],m=n[4],x=n[5];return a[0]=Math.sqrt(p*p+g*g),a[1]=Math.sqrt(m*m+x*x),a}function D(n,l){const a=l??d.create(),p=n[0],g=n[1],m=n[2],x=n[4],e=n[5],u=n[6],i=n[8],c=n[9],t=n[10];return a[0]=Math.sqrt(p*p+g*g+m*m),a[1]=Math.sqrt(x*x+e*e+u*u),a[2]=Math.sqrt(i*i+c*c+t*t),a}function Q(n,l){const a=l??new r(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=n[0],a[9]=n[1],a[10]=1,a}function W(n,l,a){const p=a??new r(12),g=l[0],m=l[1],x=n[0],e=n[1],u=n[2],i=n[1*4+0],c=n[1*4+1],t=n[1*4+2],o=n[2*4+0],h=n[2*4+1],f=n[2*4+2];return n!==p&&(p[0]=x,p[1]=e,p[2]=u,p[4]=i,p[5]=c,p[6]=t),p[8]=x*g+i*m+o,p[9]=e*g+c*m+h,p[10]=u*g+t*m+f,p}function le(n,l){const a=l??new r(12),p=Math.cos(n),g=Math.sin(n);return a[0]=p,a[1]=g,a[2]=0,a[4]=-g,a[5]=p,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function pe(n,l,a){const p=a??new r(12),g=n[0*4+0],m=n[0*4+1],x=n[0*4+2],e=n[1*4+0],u=n[1*4+1],i=n[1*4+2],c=Math.cos(l),t=Math.sin(l);return p[0]=c*g+t*e,p[1]=c*m+t*u,p[2]=c*x+t*i,p[4]=c*e-t*g,p[5]=c*u-t*m,p[6]=c*i-t*x,n!==p&&(p[8]=n[8],p[9]=n[9],p[10]=n[10]),p}function j(n,l){const a=l??new r(12),p=Math.cos(n),g=Math.sin(n);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=p,a[6]=g,a[8]=0,a[9]=-g,a[10]=p,a}function te(n,l,a){const p=a??new r(12),g=n[4],m=n[5],x=n[6],e=n[8],u=n[9],i=n[10],c=Math.cos(l),t=Math.sin(l);return p[4]=c*g+t*e,p[5]=c*m+t*u,p[6]=c*x+t*i,p[8]=c*e-t*g,p[9]=c*u-t*m,p[10]=c*i-t*x,n!==p&&(p[0]=n[0],p[1]=n[1],p[2]=n[2]),p}function ge(n,l){const a=l??new r(12),p=Math.cos(n),g=Math.sin(n);return a[0]=p,a[1]=0,a[2]=-g,a[4]=0,a[5]=1,a[6]=0,a[8]=g,a[9]=0,a[10]=p,a}function ye(n,l,a){const p=a??new r(12),g=n[0*4+0],m=n[0*4+1],x=n[0*4+2],e=n[2*4+0],u=n[2*4+1],i=n[2*4+2],c=Math.cos(l),t=Math.sin(l);return p[0]=c*g-t*e,p[1]=c*m-t*u,p[2]=c*x-t*i,p[8]=c*e+t*g,p[9]=c*u+t*m,p[10]=c*i+t*x,n!==p&&(p[4]=n[4],p[5]=n[5],p[6]=n[6]),p}const he=le,we=pe;function Ge(n,l){const a=l??new r(12);return a[0]=n[0],a[1]=0,a[2]=0,a[4]=0,a[5]=n[1],a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function Se(n,l,a){const p=a??new r(12),g=l[0],m=l[1];return p[0]=g*n[0*4+0],p[1]=g*n[0*4+1],p[2]=g*n[0*4+2],p[4]=m*n[1*4+0],p[5]=m*n[1*4+1],p[6]=m*n[1*4+2],n!==p&&(p[8]=n[8],p[9]=n[9],p[10]=n[10]),p}function oe(n,l){const a=l??new r(12);return a[0]=n[0],a[1]=0,a[2]=0,a[4]=0,a[5]=n[1],a[6]=0,a[8]=0,a[9]=0,a[10]=n[2],a}function _e(n,l,a){const p=a??new r(12),g=l[0],m=l[1],x=l[2];return p[0]=g*n[0*4+0],p[1]=g*n[0*4+1],p[2]=g*n[0*4+2],p[4]=m*n[1*4+0],p[5]=m*n[1*4+1],p[6]=m*n[1*4+2],p[8]=x*n[2*4+0],p[9]=x*n[2*4+1],p[10]=x*n[2*4+2],p}function ve(n,l){const a=l??new r(12);return a[0]=n,a[1]=0,a[2]=0,a[4]=0,a[5]=n,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function B(n,l,a){const p=a??new r(12);return p[0]=l*n[0*4+0],p[1]=l*n[0*4+1],p[2]=l*n[0*4+2],p[4]=l*n[1*4+0],p[5]=l*n[1*4+1],p[6]=l*n[1*4+2],n!==p&&(p[8]=n[8],p[9]=n[9],p[10]=n[10]),p}function z(n,l){const a=l??new r(12);return a[0]=n,a[1]=0,a[2]=0,a[4]=0,a[5]=n,a[6]=0,a[8]=0,a[9]=0,a[10]=n,a}function _(n,l,a){const p=a??new r(12);return p[0]=l*n[0*4+0],p[1]=l*n[0*4+1],p[2]=l*n[0*4+2],p[4]=l*n[1*4+0],p[5]=l*n[1*4+1],p[6]=l*n[1*4+2],p[8]=l*n[2*4+0],p[9]=l*n[2*4+1],p[10]=l*n[2*4+2],p}return{add:Z,clone:U,copy:V,create:v,determinant:ue,equals:ie,equalsApproximately:X,fromMat4:w,fromQuat:S,get3DScaling:D,getAxis:Y,getScaling:de,getTranslation:fe,identity:ae,inverse:K,invert:C,mul:ne,mulScalar:L,multiply:J,multiplyScalar:G,negate:k,rotate:pe,rotateX:te,rotateY:ye,rotateZ:we,rotation:le,rotationX:j,rotationY:ge,rotationZ:he,scale:Se,scale3D:_e,scaling:Ge,scaling3D:oe,set:y,setAxis:H,setTranslation:$,translate:W,translation:Q,transpose:F,uniformScale:B,uniformScale3D:_,uniformScaling:ve,uniformScaling3D:z}}const It=new Map;function bn(r){let s=It.get(r);return s||(s=yn(r),It.set(r,s)),s}function wn(r){const s=mt(r);function d(e,u,i,c,t,o,h,f,b,P,M,O,A,I,E,q){const N=new r(16);return e!==void 0&&(N[0]=e,u!==void 0&&(N[1]=u,i!==void 0&&(N[2]=i,c!==void 0&&(N[3]=c,t!==void 0&&(N[4]=t,o!==void 0&&(N[5]=o,h!==void 0&&(N[6]=h,f!==void 0&&(N[7]=f,b!==void 0&&(N[8]=b,P!==void 0&&(N[9]=P,M!==void 0&&(N[10]=M,O!==void 0&&(N[11]=O,A!==void 0&&(N[12]=A,I!==void 0&&(N[13]=I,E!==void 0&&(N[14]=E,q!==void 0&&(N[15]=q)))))))))))))))),N}function v(e,u,i,c,t,o,h,f,b,P,M,O,A,I,E,q,N){const R=N??new r(16);return R[0]=e,R[1]=u,R[2]=i,R[3]=c,R[4]=t,R[5]=o,R[6]=h,R[7]=f,R[8]=b,R[9]=P,R[10]=M,R[11]=O,R[12]=A,R[13]=I,R[14]=E,R[15]=q,R}function y(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function w(e,u){const i=u??new r(16),c=e[0],t=e[1],o=e[2],h=e[3],f=c+c,b=t+t,P=o+o,M=c*f,O=t*f,A=t*b,I=o*f,E=o*b,q=o*P,N=h*f,R=h*b,se=h*P;return i[0]=1-A-q,i[1]=O+se,i[2]=I-R,i[3]=0,i[4]=O-se,i[5]=1-M-q,i[6]=E+N,i[7]=0,i[8]=I+R,i[9]=E-N,i[10]=1-M-A,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function S(e,u){const i=u??new r(16);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=-e[3],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[7]=-e[7],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i[11]=-e[11],i[12]=-e[12],i[13]=-e[13],i[14]=-e[14],i[15]=-e[15],i}function k(e,u,i){const c=i??new r(16);return c[0]=e[0]+u[0],c[1]=e[1]+u[1],c[2]=e[2]+u[2],c[3]=e[3]+u[3],c[4]=e[4]+u[4],c[5]=e[5]+u[5],c[6]=e[6]+u[6],c[7]=e[7]+u[7],c[8]=e[8]+u[8],c[9]=e[9]+u[9],c[10]=e[10]+u[10],c[11]=e[11]+u[11],c[12]=e[12]+u[12],c[13]=e[13]+u[13],c[14]=e[14]+u[14],c[15]=e[15]+u[15],c}function G(e,u,i){const c=i??new r(16);return c[0]=e[0]*u,c[1]=e[1]*u,c[2]=e[2]*u,c[3]=e[3]*u,c[4]=e[4]*u,c[5]=e[5]*u,c[6]=e[6]*u,c[7]=e[7]*u,c[8]=e[8]*u,c[9]=e[9]*u,c[10]=e[10]*u,c[11]=e[11]*u,c[12]=e[12]*u,c[13]=e[13]*u,c[14]=e[14]*u,c[15]=e[15]*u,c}const L=G;function Z(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}const V=Z;function U(e,u){return Math.abs(e[0]-u[0])<me&&Math.abs(e[1]-u[1])<me&&Math.abs(e[2]-u[2])<me&&Math.abs(e[3]-u[3])<me&&Math.abs(e[4]-u[4])<me&&Math.abs(e[5]-u[5])<me&&Math.abs(e[6]-u[6])<me&&Math.abs(e[7]-u[7])<me&&Math.abs(e[8]-u[8])<me&&Math.abs(e[9]-u[9])<me&&Math.abs(e[10]-u[10])<me&&Math.abs(e[11]-u[11])<me&&Math.abs(e[12]-u[12])<me&&Math.abs(e[13]-u[13])<me&&Math.abs(e[14]-u[14])<me&&Math.abs(e[15]-u[15])<me}function X(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function ie(e){const u=e??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ae(e,u){const i=u??new r(16);if(i===e){let re;return re=e[1],e[1]=e[4],e[4]=re,re=e[2],e[2]=e[8],e[8]=re,re=e[3],e[3]=e[12],e[12]=re,re=e[6],e[6]=e[9],e[9]=re,re=e[7],e[7]=e[13],e[13]=re,re=e[11],e[11]=e[14],e[14]=re,i}const c=e[0*4+0],t=e[0*4+1],o=e[0*4+2],h=e[0*4+3],f=e[1*4+0],b=e[1*4+1],P=e[1*4+2],M=e[1*4+3],O=e[2*4+0],A=e[2*4+1],I=e[2*4+2],E=e[2*4+3],q=e[3*4+0],N=e[3*4+1],R=e[3*4+2],se=e[3*4+3];return i[0]=c,i[1]=f,i[2]=O,i[3]=q,i[4]=t,i[5]=b,i[6]=A,i[7]=N,i[8]=o,i[9]=P,i[10]=I,i[11]=R,i[12]=h,i[13]=M,i[14]=E,i[15]=se,i}function F(e,u){const i=u??new r(16),c=e[0*4+0],t=e[0*4+1],o=e[0*4+2],h=e[0*4+3],f=e[1*4+0],b=e[1*4+1],P=e[1*4+2],M=e[1*4+3],O=e[2*4+0],A=e[2*4+1],I=e[2*4+2],E=e[2*4+3],q=e[3*4+0],N=e[3*4+1],R=e[3*4+2],se=e[3*4+3],re=I*se,xe=R*E,Be=P*se,Pe=R*M,ze=P*E,Ae=I*M,Ee=o*se,Oe=R*h,Ue=o*E,ce=I*h,Te=o*M,ke=P*h,be=O*N,De=q*A,Ie=f*N,Re=q*b,Me=f*A,Ce=O*b,it=c*N,at=q*t,ot=c*A,ct=O*t,lt=c*b,ut=f*t,Mt=re*b+Pe*A+ze*N-(xe*b+Be*A+Ae*N),Gt=xe*t+Ee*A+ce*N-(re*t+Oe*A+Ue*N),At=Be*t+Oe*b+Te*N-(Pe*t+Ee*b+ke*N),zt=Ae*t+Ue*b+ke*A-(ze*t+ce*b+Te*A),Le=1/(c*Mt+f*Gt+O*At+q*zt);return i[0]=Le*Mt,i[1]=Le*Gt,i[2]=Le*At,i[3]=Le*zt,i[4]=Le*(xe*f+Be*O+Ae*q-(re*f+Pe*O+ze*q)),i[5]=Le*(re*c+Oe*O+Ue*q-(xe*c+Ee*O+ce*q)),i[6]=Le*(Pe*c+Ee*f+ke*q-(Be*c+Oe*f+Te*q)),i[7]=Le*(ze*c+ce*f+Te*O-(Ae*c+Ue*f+ke*O)),i[8]=Le*(be*M+Re*E+Me*se-(De*M+Ie*E+Ce*se)),i[9]=Le*(De*h+it*E+ct*se-(be*h+at*E+ot*se)),i[10]=Le*(Ie*h+at*M+lt*se-(Re*h+it*M+ut*se)),i[11]=Le*(Ce*h+ot*M+ut*E-(Me*h+ct*M+lt*E)),i[12]=Le*(Ie*I+Ce*R+De*P-(Me*R+be*P+Re*I)),i[13]=Le*(ot*R+be*o+at*I-(it*I+ct*R+De*o)),i[14]=Le*(it*P+ut*R+Re*o-(lt*R+Ie*o+at*P)),i[15]=Le*(lt*I+Me*o+ct*P-(ot*P+ut*I+Ce*o)),i}function K(e){const u=e[0],i=e[0*4+1],c=e[0*4+2],t=e[0*4+3],o=e[1*4+0],h=e[1*4+1],f=e[1*4+2],b=e[1*4+3],P=e[2*4+0],M=e[2*4+1],O=e[2*4+2],A=e[2*4+3],I=e[3*4+0],E=e[3*4+1],q=e[3*4+2],N=e[3*4+3],R=O*N,se=q*A,re=f*N,xe=q*b,Be=f*A,Pe=O*b,ze=c*N,Ae=q*t,Ee=c*A,Oe=O*t,Ue=c*b,ce=f*t,Te=R*h+xe*M+Be*E-(se*h+re*M+Pe*E),ke=se*i+ze*M+Oe*E-(R*i+Ae*M+Ee*E),be=re*i+Ae*h+Ue*E-(xe*i+ze*h+ce*E),De=Pe*i+Ee*h+ce*M-(Be*i+Oe*h+Ue*M);return u*Te+o*ke+P*be+I*De}const ue=F;function C(e,u,i){const c=i??new r(16),t=e[0],o=e[1],h=e[2],f=e[3],b=e[4+0],P=e[4+1],M=e[4+2],O=e[4+3],A=e[8+0],I=e[8+1],E=e[8+2],q=e[8+3],N=e[12+0],R=e[12+1],se=e[12+2],re=e[12+3],xe=u[0],Be=u[1],Pe=u[2],ze=u[3],Ae=u[4+0],Ee=u[4+1],Oe=u[4+2],Ue=u[4+3],ce=u[8+0],Te=u[8+1],ke=u[8+2],be=u[8+3],De=u[12+0],Ie=u[12+1],Re=u[12+2],Me=u[12+3];return c[0]=t*xe+b*Be+A*Pe+N*ze,c[1]=o*xe+P*Be+I*Pe+R*ze,c[2]=h*xe+M*Be+E*Pe+se*ze,c[3]=f*xe+O*Be+q*Pe+re*ze,c[4]=t*Ae+b*Ee+A*Oe+N*Ue,c[5]=o*Ae+P*Ee+I*Oe+R*Ue,c[6]=h*Ae+M*Ee+E*Oe+se*Ue,c[7]=f*Ae+O*Ee+q*Oe+re*Ue,c[8]=t*ce+b*Te+A*ke+N*be,c[9]=o*ce+P*Te+I*ke+R*be,c[10]=h*ce+M*Te+E*ke+se*be,c[11]=f*ce+O*Te+q*ke+re*be,c[12]=t*De+b*Ie+A*Re+N*Me,c[13]=o*De+P*Ie+I*Re+R*Me,c[14]=h*De+M*Ie+E*Re+se*Me,c[15]=f*De+O*Ie+q*Re+re*Me,c}const J=C;function ne(e,u,i){const c=i??ie();return e!==c&&(c[0]=e[0],c[1]=e[1],c[2]=e[2],c[3]=e[3],c[4]=e[4],c[5]=e[5],c[6]=e[6],c[7]=e[7],c[8]=e[8],c[9]=e[9],c[10]=e[10],c[11]=e[11]),c[12]=u[0],c[13]=u[1],c[14]=u[2],c[15]=1,c}function $(e,u){const i=u??s.create();return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function fe(e,u,i){const c=i??s.create(),t=u*4;return c[0]=e[t+0],c[1]=e[t+1],c[2]=e[t+2],c}function Y(e,u,i,c){const t=c===e?c:Z(e,c),o=i*4;return t[o+0]=u[0],t[o+1]=u[1],t[o+2]=u[2],t}function H(e,u){const i=u??s.create(),c=e[0],t=e[1],o=e[2],h=e[4],f=e[5],b=e[6],P=e[8],M=e[9],O=e[10];return i[0]=Math.sqrt(c*c+t*t+o*o),i[1]=Math.sqrt(h*h+f*f+b*b),i[2]=Math.sqrt(P*P+M*M+O*O),i}function de(e,u,i,c,t){const o=t??new r(16),h=Math.tan(Math.PI*.5-.5*e);if(o[0]=h/u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,Number.isFinite(c)){const f=1/(i-c);o[10]=c*f,o[14]=c*i*f}else o[10]=-1,o[14]=-i;return o}function D(e,u,i,c=1/0,t){const o=t??new r(16),h=1/Math.tan(e*.5);if(o[0]=h/u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=h,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,c===1/0)o[10]=0,o[14]=i;else{const f=1/(c-i);o[10]=i*f,o[14]=c*i*f}return o}function Q(e,u,i,c,t,o,h){const f=h??new r(16);return f[0]=2/(u-e),f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2/(c-i),f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1/(t-o),f[11]=0,f[12]=(u+e)/(e-u),f[13]=(c+i)/(i-c),f[14]=t/(t-o),f[15]=1,f}function W(e,u,i,c,t,o,h){const f=h??new r(16),b=u-e,P=c-i,M=t-o;return f[0]=2*t/b,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*t/P,f[6]=0,f[7]=0,f[8]=(e+u)/b,f[9]=(c+i)/P,f[10]=o/M,f[11]=-1,f[12]=0,f[13]=0,f[14]=t*o/M,f[15]=0,f}function le(e,u,i,c,t,o=1/0,h){const f=h??new r(16),b=u-e,P=c-i;if(f[0]=2*t/b,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*t/P,f[6]=0,f[7]=0,f[8]=(e+u)/b,f[9]=(c+i)/P,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,o===1/0)f[10]=0,f[14]=t;else{const M=1/(o-t);f[10]=t*M,f[14]=o*t*M}return f}const pe=s.create(),j=s.create(),te=s.create();function ge(e,u,i,c){const t=c??new r(16);return s.normalize(s.subtract(u,e,te),te),s.normalize(s.cross(i,te,pe),pe),s.normalize(s.cross(te,pe,j),j),t[0]=pe[0],t[1]=pe[1],t[2]=pe[2],t[3]=0,t[4]=j[0],t[5]=j[1],t[6]=j[2],t[7]=0,t[8]=te[0],t[9]=te[1],t[10]=te[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function ye(e,u,i,c){const t=c??new r(16);return s.normalize(s.subtract(e,u,te),te),s.normalize(s.cross(i,te,pe),pe),s.normalize(s.cross(te,pe,j),j),t[0]=pe[0],t[1]=pe[1],t[2]=pe[2],t[3]=0,t[4]=j[0],t[5]=j[1],t[6]=j[2],t[7]=0,t[8]=te[0],t[9]=te[1],t[10]=te[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function he(e,u,i,c){const t=c??new r(16);return s.normalize(s.subtract(e,u,te),te),s.normalize(s.cross(i,te,pe),pe),s.normalize(s.cross(te,pe,j),j),t[0]=pe[0],t[1]=j[0],t[2]=te[0],t[3]=0,t[4]=pe[1],t[5]=j[1],t[6]=te[1],t[7]=0,t[8]=pe[2],t[9]=j[2],t[10]=te[2],t[11]=0,t[12]=-(pe[0]*e[0]+pe[1]*e[1]+pe[2]*e[2]),t[13]=-(j[0]*e[0]+j[1]*e[1]+j[2]*e[2]),t[14]=-(te[0]*e[0]+te[1]*e[1]+te[2]*e[2]),t[15]=1,t}function we(e,u){const i=u??new r(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function Ge(e,u,i){const c=i??new r(16),t=u[0],o=u[1],h=u[2],f=e[0],b=e[1],P=e[2],M=e[3],O=e[1*4+0],A=e[1*4+1],I=e[1*4+2],E=e[1*4+3],q=e[2*4+0],N=e[2*4+1],R=e[2*4+2],se=e[2*4+3],re=e[3*4+0],xe=e[3*4+1],Be=e[3*4+2],Pe=e[3*4+3];return e!==c&&(c[0]=f,c[1]=b,c[2]=P,c[3]=M,c[4]=O,c[5]=A,c[6]=I,c[7]=E,c[8]=q,c[9]=N,c[10]=R,c[11]=se),c[12]=f*t+O*o+q*h+re,c[13]=b*t+A*o+N*h+xe,c[14]=P*t+I*o+R*h+Be,c[15]=M*t+E*o+se*h+Pe,c}function Se(e,u){const i=u??new r(16),c=Math.cos(e),t=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=c,i[6]=t,i[7]=0,i[8]=0,i[9]=-t,i[10]=c,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function oe(e,u,i){const c=i??new r(16),t=e[4],o=e[5],h=e[6],f=e[7],b=e[8],P=e[9],M=e[10],O=e[11],A=Math.cos(u),I=Math.sin(u);return c[4]=A*t+I*b,c[5]=A*o+I*P,c[6]=A*h+I*M,c[7]=A*f+I*O,c[8]=A*b-I*t,c[9]=A*P-I*o,c[10]=A*M-I*h,c[11]=A*O-I*f,e!==c&&(c[0]=e[0],c[1]=e[1],c[2]=e[2],c[3]=e[3],c[12]=e[12],c[13]=e[13],c[14]=e[14],c[15]=e[15]),c}function _e(e,u){const i=u??new r(16),c=Math.cos(e),t=Math.sin(e);return i[0]=c,i[1]=0,i[2]=-t,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=t,i[9]=0,i[10]=c,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function ve(e,u,i){const c=i??new r(16),t=e[0*4+0],o=e[0*4+1],h=e[0*4+2],f=e[0*4+3],b=e[2*4+0],P=e[2*4+1],M=e[2*4+2],O=e[2*4+3],A=Math.cos(u),I=Math.sin(u);return c[0]=A*t-I*b,c[1]=A*o-I*P,c[2]=A*h-I*M,c[3]=A*f-I*O,c[8]=A*b+I*t,c[9]=A*P+I*o,c[10]=A*M+I*h,c[11]=A*O+I*f,e!==c&&(c[4]=e[4],c[5]=e[5],c[6]=e[6],c[7]=e[7],c[12]=e[12],c[13]=e[13],c[14]=e[14],c[15]=e[15]),c}function B(e,u){const i=u??new r(16),c=Math.cos(e),t=Math.sin(e);return i[0]=c,i[1]=t,i[2]=0,i[3]=0,i[4]=-t,i[5]=c,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function z(e,u,i){const c=i??new r(16),t=e[0*4+0],o=e[0*4+1],h=e[0*4+2],f=e[0*4+3],b=e[1*4+0],P=e[1*4+1],M=e[1*4+2],O=e[1*4+3],A=Math.cos(u),I=Math.sin(u);return c[0]=A*t+I*b,c[1]=A*o+I*P,c[2]=A*h+I*M,c[3]=A*f+I*O,c[4]=A*b-I*t,c[5]=A*P-I*o,c[6]=A*M-I*h,c[7]=A*O-I*f,e!==c&&(c[8]=e[8],c[9]=e[9],c[10]=e[10],c[11]=e[11],c[12]=e[12],c[13]=e[13],c[14]=e[14],c[15]=e[15]),c}function _(e,u,i){const c=i??new r(16);let t=e[0],o=e[1],h=e[2];const f=Math.sqrt(t*t+o*o+h*h);t/=f,o/=f,h/=f;const b=t*t,P=o*o,M=h*h,O=Math.cos(u),A=Math.sin(u),I=1-O;return c[0]=b+(1-b)*O,c[1]=t*o*I+h*A,c[2]=t*h*I-o*A,c[3]=0,c[4]=t*o*I-h*A,c[5]=P+(1-P)*O,c[6]=o*h*I+t*A,c[7]=0,c[8]=t*h*I+o*A,c[9]=o*h*I-t*A,c[10]=M+(1-M)*O,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}const n=_;function l(e,u,i,c){const t=c??new r(16);let o=u[0],h=u[1],f=u[2];const b=Math.sqrt(o*o+h*h+f*f);o/=b,h/=b,f/=b;const P=o*o,M=h*h,O=f*f,A=Math.cos(i),I=Math.sin(i),E=1-A,q=P+(1-P)*A,N=o*h*E+f*I,R=o*f*E-h*I,se=o*h*E-f*I,re=M+(1-M)*A,xe=h*f*E+o*I,Be=o*f*E+h*I,Pe=h*f*E-o*I,ze=O+(1-O)*A,Ae=e[0],Ee=e[1],Oe=e[2],Ue=e[3],ce=e[4],Te=e[5],ke=e[6],be=e[7],De=e[8],Ie=e[9],Re=e[10],Me=e[11];return t[0]=q*Ae+N*ce+R*De,t[1]=q*Ee+N*Te+R*Ie,t[2]=q*Oe+N*ke+R*Re,t[3]=q*Ue+N*be+R*Me,t[4]=se*Ae+re*ce+xe*De,t[5]=se*Ee+re*Te+xe*Ie,t[6]=se*Oe+re*ke+xe*Re,t[7]=se*Ue+re*be+xe*Me,t[8]=Be*Ae+Pe*ce+ze*De,t[9]=Be*Ee+Pe*Te+ze*Ie,t[10]=Be*Oe+Pe*ke+ze*Re,t[11]=Be*Ue+Pe*be+ze*Me,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}const a=l;function p(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e[1],i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function g(e,u,i){const c=i??new r(16),t=u[0],o=u[1],h=u[2];return c[0]=t*e[0*4+0],c[1]=t*e[0*4+1],c[2]=t*e[0*4+2],c[3]=t*e[0*4+3],c[4]=o*e[1*4+0],c[5]=o*e[1*4+1],c[6]=o*e[1*4+2],c[7]=o*e[1*4+3],c[8]=h*e[2*4+0],c[9]=h*e[2*4+1],c[10]=h*e[2*4+2],c[11]=h*e[2*4+3],e!==c&&(c[12]=e[12],c[13]=e[13],c[14]=e[14],c[15]=e[15]),c}function m(e,u){const i=u??new r(16);return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function x(e,u,i){const c=i??new r(16);return c[0]=u*e[0*4+0],c[1]=u*e[0*4+1],c[2]=u*e[0*4+2],c[3]=u*e[0*4+3],c[4]=u*e[1*4+0],c[5]=u*e[1*4+1],c[6]=u*e[1*4+2],c[7]=u*e[1*4+3],c[8]=u*e[2*4+0],c[9]=u*e[2*4+1],c[10]=u*e[2*4+2],c[11]=u*e[2*4+3],e!==c&&(c[12]=e[12],c[13]=e[13],c[14]=e[14],c[15]=e[15]),c}return{add:k,aim:ge,axisRotate:l,axisRotation:_,cameraAim:ye,clone:V,copy:Z,create:d,determinant:K,equals:X,equalsApproximately:U,fromMat3:y,fromQuat:w,frustum:W,frustumReverseZ:le,getAxis:fe,getScaling:H,getTranslation:$,identity:ie,inverse:F,invert:ue,lookAt:he,mul:J,mulScalar:L,multiply:C,multiplyScalar:G,negate:S,ortho:Q,perspective:de,perspectiveReverseZ:D,rotate:a,rotateX:oe,rotateY:ve,rotateZ:z,rotation:n,rotationX:Se,rotationY:_e,rotationZ:B,scale:g,scaling:p,set:v,setAxis:Y,setTranslation:ne,translate:Ge,translation:we,transpose:ae,uniformScale:x,uniformScaling:m}}const Ut=new Map;function vn(r){let s=Ut.get(r);return s||(s=wn(r),Ut.set(r,s)),s}function Sn(r){const s=mt(r);function d(B,z,_,n){const l=new r(4);return B!==void 0&&(l[0]=B,z!==void 0&&(l[1]=z,_!==void 0&&(l[2]=_,n!==void 0&&(l[3]=n)))),l}const v=d;function y(B,z,_,n,l){const a=l??new r(4);return a[0]=B,a[1]=z,a[2]=_,a[3]=n,a}function w(B,z,_){const n=_??new r(4),l=z*.5,a=Math.sin(l);return n[0]=a*B[0],n[1]=a*B[1],n[2]=a*B[2],n[3]=Math.cos(l),n}function S(B,z){const _=z??s.create(3),n=Math.acos(B[3])*2,l=Math.sin(n*.5);return l>me?(_[0]=B[0]/l,_[1]=B[1]/l,_[2]=B[2]/l):(_[0]=1,_[1]=0,_[2]=0),{angle:n,axis:_}}function k(B,z){const _=de(B,z);return Math.acos(2*_*_-1)}function G(B,z,_){const n=_??new r(4),l=B[0],a=B[1],p=B[2],g=B[3],m=z[0],x=z[1],e=z[2],u=z[3];return n[0]=l*u+g*m+a*e-p*x,n[1]=a*u+g*x+p*m-l*e,n[2]=p*u+g*e+l*x-a*m,n[3]=g*u-l*m-a*x-p*e,n}const L=G;function Z(B,z,_){const n=_??new r(4),l=z*.5,a=B[0],p=B[1],g=B[2],m=B[3],x=Math.sin(l),e=Math.cos(l);return n[0]=a*e+m*x,n[1]=p*e+g*x,n[2]=g*e-p*x,n[3]=m*e-a*x,n}function V(B,z,_){const n=_??new r(4),l=z*.5,a=B[0],p=B[1],g=B[2],m=B[3],x=Math.sin(l),e=Math.cos(l);return n[0]=a*e-g*x,n[1]=p*e+m*x,n[2]=g*e+a*x,n[3]=m*e-p*x,n}function U(B,z,_){const n=_??new r(4),l=z*.5,a=B[0],p=B[1],g=B[2],m=B[3],x=Math.sin(l),e=Math.cos(l);return n[0]=a*e+p*x,n[1]=p*e-a*x,n[2]=g*e+m*x,n[3]=m*e-g*x,n}function X(B,z,_,n){const l=n??new r(4),a=B[0],p=B[1],g=B[2],m=B[3];let x=z[0],e=z[1],u=z[2],i=z[3],c=a*x+p*e+g*u+m*i;c<0&&(c=-c,x=-x,e=-e,u=-u,i=-i);let t,o;if(1-c>me){const h=Math.acos(c),f=Math.sin(h);t=Math.sin((1-_)*h)/f,o=Math.sin(_*h)/f}else t=1-_,o=_;return l[0]=t*a+o*x,l[1]=t*p+o*e,l[2]=t*g+o*u,l[3]=t*m+o*i,l}function ie(B,z){const _=z??new r(4),n=B[0],l=B[1],a=B[2],p=B[3],g=n*n+l*l+a*a+p*p,m=g?1/g:0;return _[0]=-n*m,_[1]=-l*m,_[2]=-a*m,_[3]=p*m,_}function ae(B,z){const _=z??new r(4);return _[0]=-B[0],_[1]=-B[1],_[2]=-B[2],_[3]=B[3],_}function F(B,z){const _=z??new r(4),n=B[0]+B[5]+B[10];if(n>0){const l=Math.sqrt(n+1);_[3]=.5*l;const a=.5/l;_[0]=(B[6]-B[9])*a,_[1]=(B[8]-B[2])*a,_[2]=(B[1]-B[4])*a}else{let l=0;B[5]>B[0]&&(l=1),B[10]>B[l*4+l]&&(l=2);const a=(l+1)%3,p=(l+2)%3,g=Math.sqrt(B[l*4+l]-B[a*4+a]-B[p*4+p]+1);_[l]=.5*g;const m=.5/g;_[3]=(B[a*4+p]-B[p*4+a])*m,_[a]=(B[a*4+l]+B[l*4+a])*m,_[p]=(B[p*4+l]+B[l*4+p])*m}return _}function K(B,z,_,n,l){const a=l??new r(4),p=B*.5,g=z*.5,m=_*.5,x=Math.sin(p),e=Math.cos(p),u=Math.sin(g),i=Math.cos(g),c=Math.sin(m),t=Math.cos(m);switch(n){case"xyz":a[0]=x*i*t+e*u*c,a[1]=e*u*t-x*i*c,a[2]=e*i*c+x*u*t,a[3]=e*i*t-x*u*c;break;case"xzy":a[0]=x*i*t-e*u*c,a[1]=e*u*t-x*i*c,a[2]=e*i*c+x*u*t,a[3]=e*i*t+x*u*c;break;case"yxz":a[0]=x*i*t+e*u*c,a[1]=e*u*t-x*i*c,a[2]=e*i*c-x*u*t,a[3]=e*i*t+x*u*c;break;case"yzx":a[0]=x*i*t+e*u*c,a[1]=e*u*t+x*i*c,a[2]=e*i*c-x*u*t,a[3]=e*i*t-x*u*c;break;case"zxy":a[0]=x*i*t-e*u*c,a[1]=e*u*t+x*i*c,a[2]=e*i*c+x*u*t,a[3]=e*i*t-x*u*c;break;case"zyx":a[0]=x*i*t-e*u*c,a[1]=e*u*t+x*i*c,a[2]=e*i*c-x*u*t,a[3]=e*i*t+x*u*c;break;default:throw new Error(`Unknown rotation order: ${n}`)}return a}function ue(B,z){const _=z??new r(4);return _[0]=B[0],_[1]=B[1],_[2]=B[2],_[3]=B[3],_}const C=ue;function J(B,z,_){const n=_??new r(4);return n[0]=B[0]+z[0],n[1]=B[1]+z[1],n[2]=B[2]+z[2],n[3]=B[3]+z[3],n}function ne(B,z,_){const n=_??new r(4);return n[0]=B[0]-z[0],n[1]=B[1]-z[1],n[2]=B[2]-z[2],n[3]=B[3]-z[3],n}const $=ne;function fe(B,z,_){const n=_??new r(4);return n[0]=B[0]*z,n[1]=B[1]*z,n[2]=B[2]*z,n[3]=B[3]*z,n}const Y=fe;function H(B,z,_){const n=_??new r(4);return n[0]=B[0]/z,n[1]=B[1]/z,n[2]=B[2]/z,n[3]=B[3]/z,n}function de(B,z){return B[0]*z[0]+B[1]*z[1]+B[2]*z[2]+B[3]*z[3]}function D(B,z,_,n){const l=n??new r(4);return l[0]=B[0]+_*(z[0]-B[0]),l[1]=B[1]+_*(z[1]-B[1]),l[2]=B[2]+_*(z[2]-B[2]),l[3]=B[3]+_*(z[3]-B[3]),l}function Q(B){const z=B[0],_=B[1],n=B[2],l=B[3];return Math.sqrt(z*z+_*_+n*n+l*l)}const W=Q;function le(B){const z=B[0],_=B[1],n=B[2],l=B[3];return z*z+_*_+n*n+l*l}const pe=le;function j(B,z){const _=z??new r(4),n=B[0],l=B[1],a=B[2],p=B[3],g=Math.sqrt(n*n+l*l+a*a+p*p);return g>1e-5?(_[0]=n/g,_[1]=l/g,_[2]=a/g,_[3]=p/g):(_[0]=0,_[1]=0,_[2]=0,_[3]=1),_}function te(B,z){return Math.abs(B[0]-z[0])<me&&Math.abs(B[1]-z[1])<me&&Math.abs(B[2]-z[2])<me&&Math.abs(B[3]-z[3])<me}function ge(B,z){return B[0]===z[0]&&B[1]===z[1]&&B[2]===z[2]&&B[3]===z[3]}function ye(B){const z=B??new r(4);return z[0]=0,z[1]=0,z[2]=0,z[3]=1,z}const he=s.create(),we=s.create(),Ge=s.create();function Se(B,z,_){const n=_??new r(4),l=s.dot(B,z);return l<-.999999?(s.cross(we,B,he),s.len(he)<1e-6&&s.cross(Ge,B,he),s.normalize(he,he),w(he,Math.PI,n),n):l>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(s.cross(B,z,he),n[0]=he[0],n[1]=he[1],n[2]=he[2],n[3]=1+l,j(n,n))}const oe=new r(4),_e=new r(4);function ve(B,z,_,n,l,a){const p=a??new r(4);return X(B,n,l,oe),X(z,_,l,_e),X(oe,_e,2*l*(1-l),p),p}return{create:d,fromValues:v,set:y,fromAxisAngle:w,toAxisAngle:S,angle:k,multiply:G,mul:L,rotateX:Z,rotateY:V,rotateZ:U,slerp:X,inverse:ie,conjugate:ae,fromMat:F,fromEuler:K,copy:ue,clone:C,add:J,subtract:ne,sub:$,mulScalar:fe,scale:Y,divScalar:H,dot:de,lerp:D,length:Q,len:W,lengthSq:le,lenSq:pe,normalize:j,equalsApproximately:te,equals:ge,identity:ye,rotationTo:Se,sqlerp:ve}}const Ot=new Map;function Bn(r){let s=Ot.get(r);return s||(s=Sn(r),Ot.set(r,s)),s}function Pn(r){function s(_,n,l,a){const p=new r(4);return _!==void 0&&(p[0]=_,n!==void 0&&(p[1]=n,l!==void 0&&(p[2]=l,a!==void 0&&(p[3]=a)))),p}const d=s;function v(_,n,l,a,p){const g=p??new r(4);return g[0]=_,g[1]=n,g[2]=l,g[3]=a,g}function y(_,n){const l=n??new r(4);return l[0]=Math.ceil(_[0]),l[1]=Math.ceil(_[1]),l[2]=Math.ceil(_[2]),l[3]=Math.ceil(_[3]),l}function w(_,n){const l=n??new r(4);return l[0]=Math.floor(_[0]),l[1]=Math.floor(_[1]),l[2]=Math.floor(_[2]),l[3]=Math.floor(_[3]),l}function S(_,n){const l=n??new r(4);return l[0]=Math.round(_[0]),l[1]=Math.round(_[1]),l[2]=Math.round(_[2]),l[3]=Math.round(_[3]),l}function k(_,n=0,l=1,a){const p=a??new r(4);return p[0]=Math.min(l,Math.max(n,_[0])),p[1]=Math.min(l,Math.max(n,_[1])),p[2]=Math.min(l,Math.max(n,_[2])),p[3]=Math.min(l,Math.max(n,_[3])),p}function G(_,n,l){const a=l??new r(4);return a[0]=_[0]+n[0],a[1]=_[1]+n[1],a[2]=_[2]+n[2],a[3]=_[3]+n[3],a}function L(_,n,l,a){const p=a??new r(4);return p[0]=_[0]+n[0]*l,p[1]=_[1]+n[1]*l,p[2]=_[2]+n[2]*l,p[3]=_[3]+n[3]*l,p}function Z(_,n,l){const a=l??new r(4);return a[0]=_[0]-n[0],a[1]=_[1]-n[1],a[2]=_[2]-n[2],a[3]=_[3]-n[3],a}const V=Z;function U(_,n){return Math.abs(_[0]-n[0])<me&&Math.abs(_[1]-n[1])<me&&Math.abs(_[2]-n[2])<me&&Math.abs(_[3]-n[3])<me}function X(_,n){return _[0]===n[0]&&_[1]===n[1]&&_[2]===n[2]&&_[3]===n[3]}function ie(_,n,l,a){const p=a??new r(4);return p[0]=_[0]+l*(n[0]-_[0]),p[1]=_[1]+l*(n[1]-_[1]),p[2]=_[2]+l*(n[2]-_[2]),p[3]=_[3]+l*(n[3]-_[3]),p}function ae(_,n,l,a){const p=a??new r(4);return p[0]=_[0]+l[0]*(n[0]-_[0]),p[1]=_[1]+l[1]*(n[1]-_[1]),p[2]=_[2]+l[2]*(n[2]-_[2]),p[3]=_[3]+l[3]*(n[3]-_[3]),p}function F(_,n,l){const a=l??new r(4);return a[0]=Math.max(_[0],n[0]),a[1]=Math.max(_[1],n[1]),a[2]=Math.max(_[2],n[2]),a[3]=Math.max(_[3],n[3]),a}function K(_,n,l){const a=l??new r(4);return a[0]=Math.min(_[0],n[0]),a[1]=Math.min(_[1],n[1]),a[2]=Math.min(_[2],n[2]),a[3]=Math.min(_[3],n[3]),a}function ue(_,n,l){const a=l??new r(4);return a[0]=_[0]*n,a[1]=_[1]*n,a[2]=_[2]*n,a[3]=_[3]*n,a}const C=ue;function J(_,n,l){const a=l??new r(4);return a[0]=_[0]/n,a[1]=_[1]/n,a[2]=_[2]/n,a[3]=_[3]/n,a}function ne(_,n){const l=n??new r(4);return l[0]=1/_[0],l[1]=1/_[1],l[2]=1/_[2],l[3]=1/_[3],l}const $=ne;function fe(_,n){return _[0]*n[0]+_[1]*n[1]+_[2]*n[2]+_[3]*n[3]}function Y(_){const n=_[0],l=_[1],a=_[2],p=_[3];return Math.sqrt(n*n+l*l+a*a+p*p)}const H=Y;function de(_){const n=_[0],l=_[1],a=_[2],p=_[3];return n*n+l*l+a*a+p*p}const D=de;function Q(_,n){const l=_[0]-n[0],a=_[1]-n[1],p=_[2]-n[2],g=_[3]-n[3];return Math.sqrt(l*l+a*a+p*p+g*g)}const W=Q;function le(_,n){const l=_[0]-n[0],a=_[1]-n[1],p=_[2]-n[2],g=_[3]-n[3];return l*l+a*a+p*p+g*g}const pe=le;function j(_,n){const l=n??new r(4),a=_[0],p=_[1],g=_[2],m=_[3],x=Math.sqrt(a*a+p*p+g*g+m*m);return x>1e-5?(l[0]=a/x,l[1]=p/x,l[2]=g/x,l[3]=m/x):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function te(_,n){const l=n??new r(4);return l[0]=-_[0],l[1]=-_[1],l[2]=-_[2],l[3]=-_[3],l}function ge(_,n){const l=n??new r(4);return l[0]=_[0],l[1]=_[1],l[2]=_[2],l[3]=_[3],l}const ye=ge;function he(_,n,l){const a=l??new r(4);return a[0]=_[0]*n[0],a[1]=_[1]*n[1],a[2]=_[2]*n[2],a[3]=_[3]*n[3],a}const we=he;function Ge(_,n,l){const a=l??new r(4);return a[0]=_[0]/n[0],a[1]=_[1]/n[1],a[2]=_[2]/n[2],a[3]=_[3]/n[3],a}const Se=Ge;function oe(_){const n=_??new r(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n}function _e(_,n,l){const a=l??new r(4),p=_[0],g=_[1],m=_[2],x=_[3];return a[0]=n[0]*p+n[4]*g+n[8]*m+n[12]*x,a[1]=n[1]*p+n[5]*g+n[9]*m+n[13]*x,a[2]=n[2]*p+n[6]*g+n[10]*m+n[14]*x,a[3]=n[3]*p+n[7]*g+n[11]*m+n[15]*x,a}function ve(_,n,l){const a=l??new r(4);return j(_,a),ue(a,n,a)}function B(_,n,l){const a=l??new r(4);return Y(_)>n?ve(_,n,a):ge(_,a)}function z(_,n,l){const a=l??new r(4);return ie(_,n,.5,a)}return{create:s,fromValues:d,set:v,ceil:y,floor:w,round:S,clamp:k,add:G,addScaled:L,subtract:Z,sub:V,equalsApproximately:U,equals:X,lerp:ie,lerpV:ae,max:F,min:K,mulScalar:ue,scale:C,divScalar:J,inverse:ne,invert:$,dot:fe,length:Y,len:H,lengthSq:de,lenSq:D,distance:Q,dist:W,distanceSq:le,distSq:pe,normalize:j,negate:te,copy:ge,clone:ye,multiply:he,mul:we,divide:Ge,div:Se,zero:oe,transformMat4:_e,setLength:ve,truncate:B,midpoint:z}}const Rt=new Map;function Tn(r){let s=Rt.get(r);return s||(s=Pn(r),Rt.set(r,s)),s}function Pt(r,s,d,v,y,w){return{mat3:bn(r),mat4:vn(s),quat:Bn(d),vec2:Qt(v),vec3:mt(y),vec4:Tn(w)}}const{mat3:bt,mat4:We,quat:Fe,vec2:Lt,vec3:ee,vec4:Ps}=Pt(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Pt(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Pt(gn,Array,Array,Array,Array,Array);const Ct=document.querySelector("#log");let $e=null,et=null;function en(){if($e)return $e;$e=document.createElement("div"),$e.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",$e.appendChild(r),et=document.createElement("div"),et.className="ply-spinner-label",$e.appendChild(et),$e.style.display="none",document.body.appendChild($e),$e}function kn(r){en(),et&&r&&(et.textContent=r),$e&&($e.style.opacity="1",$e.style.display="flex")}function dt(r){en(),et&&(et.textContent=r)}function Mn(){if(!$e)return;const r=$e;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function tn(r,s){if(!Ct)return;const d=document.createElement("p");d.innerText=r,s&&Object.assign(d.style,s),Ct.appendChild(d)}async function Ne(r){console.log(r),tn(r)}async function Gn(r){console.error(r),tn(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let nn;function An(){nn=performance.now()}function Ft(r){const s=performance.now()-nn;Ne(`⏱️ ${r} Time: ${s.toFixed(0)} ms`)}function zn(r,s){return 2*Math.atan(s/(2*r))}function En(r,s,d,v){const y=Math.tan(v/2),w=Math.tan(d/2),S=y*r,k=-S,G=w*r,L=-G,Z=We.create();return Z[0]=2*r/(G-L),Z[5]=-2*r/(S-k),Z[2]=(G+L)/(G-L),Z[6]=(S+k)/(S-k),Z[14]=1,Z[10]=s/(s-r),Z[11]=-(s*r)/(s-r),We.transpose(Z,Z),Z}async function Dn(r){Ne(`loading scene camera file... : ${r}`);const d=await(await fetch(r)).json();return Ne(`loaded cameras count: ${d.length}`),d.map(v=>{const y=ee.clone(v.position),w=bt.create(...v.rotation.flat()),S=w[0],k=w[4],G=w[8],L=w[1],Z=w[5],V=w[9],U=w[2],X=w[6],ie=w[10];S*(Z*ie-V*X)-k*(L*ie-V*U)+G*(L*X-Z*U)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const F=We.fromMat3(w);return{position:y,rotation:F,img_name:v.img_name,id:v.id}})}const In=4*2,Un=4*16,sn=4*Un+2*In;function On(r){return r.createBuffer({label:"camera uniform",size:sn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Ve=new Float32Array(sn/Float32Array.BYTES_PER_ELEMENT),gt=class gt{constructor(s,d){T(this,"_renderSize",null);T(this,"uniform_buffer");T(this,"position",ee.create());T(this,"rotation",We.create());T(this,"fovY",45/180*Math.PI);T(this,"fovX");T(this,"focal",Lt.create());T(this,"viewport",Lt.create());T(this,"view_matrix",We.identity());T(this,"view_inv_matrix",We.identity());T(this,"proj_matrix",We.identity());T(this,"proj_inv_matrix",We.identity());T(this,"_negPos",ee.create());T(this,"look",ee.create(0,0,1));T(this,"up",ee.create(0,1,0));T(this,"right",ee.create(1,0,0));this.canvas=s,this.device=d,this.uniform_buffer=On(d),this.on_update_canvas()}setRenderSize(s,d){this._renderSize=[s,d],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,d=this._renderSize?this._renderSize[1]:this.canvas.height,v=.5*d/Math.tan(this.fovY*.5);this.focal[0]=v,this.focal[1]=v,this.fovX=zn(v,s),this.viewport[0]=s,this.viewport[1]=d,this.proj_matrix=En(.01,100,this.fovX,this.fovY),We.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],We.copy(this.rotation,this.view_matrix),We.translate(this.view_matrix,this._negPos,this.view_matrix),We.inverse(this.view_matrix,this.view_inv_matrix),ee.transformMat4Upper3x3(gt.Z_AXIS,this.view_inv_matrix,this.look),ee.normalize(this.look,this.look),ee.cross(this.up,this.look,this.right),ee.normalize(this.right,this.right);let s=0;Ve.set(this.view_matrix,s),s+=16,Ve.set(this.view_inv_matrix,s),s+=16,Ve.set(this.proj_matrix,s),s+=16,Ve.set(this.proj_inv_matrix,s),s+=16,Ve.set(this.viewport,s),s+=2,Ve.set(this.focal,s),s+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Ve)}set_preset(s){ee.copy(s.position,this.position),We.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}getFov(){return this.fovY}};T(gt,"Z_AXIS",ee.create(0,0,1));let wt=gt;const Rn=ee.create(1,0,0),Ln=ee.create(0,1,0),Cn=ee.create(0,0,1);function Fn(r,s){const d=r[0],v=r[4],y=r[8],w=r[1],S=r[5],k=r[9],G=r[2],L=r[6],Z=r[10],V=d+S+Z;let U,X,ie,ae;if(V>0){const F=.5/Math.sqrt(V+1);U=.25/F,X=(L-k)*F,ie=(y-G)*F,ae=(w-v)*F}else if(d>S&&d>Z){const F=2*Math.sqrt(1+d-S-Z);U=(L-k)/F,X=.25*F,ie=(v+w)/F,ae=(y+G)/F}else if(S>Z){const F=2*Math.sqrt(1+S-d-Z);U=(y-G)/F,X=(v+w)/F,ie=.25*F,ae=(k+L)/F}else{const F=2*Math.sqrt(1+Z-d-S);U=(w-v)/F,X=(y+G)/F,ie=(k+L)/F,ae=.25*F}return s[0]=X,s[1]=ie,s[2]=ae,s[3]=U,s}class Wn{constructor(s){T(this,"element");T(this,"enabled",!0);T(this,"center",ee.create(0,0,0));T(this,"up",ee.create(0,1,0));T(this,"rotation",[0,0]);T(this,"shift",[0,0]);T(this,"scroll",0);T(this,"speed",.1);T(this,"sensitivity",.08);T(this,"leftPressed",!1);T(this,"rightPressed",!1);T(this,"leftDragPans",!1);T(this,"lastX",0);T(this,"lastY",0);T(this,"touches",new Map);T(this,"lastTouchCenter",null);T(this,"lastPinchDistance",null);T(this,"lastTwoFingerAngle",null);T(this,"lastTouchCount",0);T(this,"roll",0);T(this,"_dir",ee.create());T(this,"_right",ee.create());T(this,"_upCam",ee.create());T(this,"_scratch",ee.create());T(this,"_qY",Fe.create());T(this,"_qX",Fe.create());T(this,"_qRot",Fe.create());T(this,"_qZ",Fe.create());T(this,"_qLocal",Fe.create());T(this,"_qWorldToCam",Fe.create());T(this,"_scratchMat3",bt.create());T(this,"bboxMin",null);T(this,"bboxMax",null);T(this,"anchor",ee.create(0,0,0));T(this,"downCallback",s=>{var d,v,y,w;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(v=(d=s.target)==null?void 0:d.setPointerCapture)==null||v.call(d,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(w=(y=s.target)==null?void 0:y.setPointerCapture)==null||w.call(y,s.pointerId),s.preventDefault())}});T(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const d=s.pageX-this.lastX,v=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=d,this.rotation[1]-=v):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=d,this.shift[0]+=v)});T(this,"upCallback",s=>{var d,v,y,w;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(v=(d=s.target)==null?void 0:d.releasePointerCapture)==null||v.call(d,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(y=s.target)==null?void 0:y.releasePointerCapture)==null||w.call(y,s.pointerId),s.preventDefault()});T(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let d=s.deltaY;s.deltaMode===1?d*=16:s.deltaMode===2&&(d*=100),this.scroll+=d*.01});this.camera=s,this.registerElement(s.canvas)}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",d=>d.preventDefault())}setCenter(s){ee.copy(s,this.center),ee.copy(s,this.anchor)}setOrbitPivot(s){ee.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const d=this.camera.rotation;ee.set(d[2],d[6],d[10],this._dir),ee.normalize(this._dir,this._dir),ee.scale(this._dir,s,this._dir),ee.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(ee.subtract(this.center,s.position,this._scratch),ee.length(this._scratch)<1e-6)return;ee.normalize(this._scratch,this._scratch),ee.cross(this.up,this._scratch,this._right),ee.length(this._right)<1e-6&&ee.set(1,0,0,this._right),ee.normalize(this._right,this._right),ee.cross(this._scratch,this._right,this._upCam),ee.normalize(this._upCam,this._upCam);const d=s.rotation;d[0]=this._right[0],d[1]=this._upCam[0],d[2]=this._scratch[0],d[3]=0,d[4]=this._right[1],d[5]=this._upCam[1],d[6]=this._scratch[1],d[7]=0,d[8]=this._right[2],d[9]=this._upCam[2],d[10]=this._scratch[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,s.update_buffer()}setBbox(s,d){this.bboxMin=ee.create(s[0],s[1],s[2]),this.bboxMax=ee.create(d[0],d[1],d[2]);const v=(s[0]+d[0])*.5,y=(s[1]+d[1])*.5,w=(s[2]+d[2])*.5;ee.set(v,y,w,this.center),ee.set(v,y,w,this.anchor)}resetToCamera(){const s=this.camera.rotation;ee.set(s[2],s[6],s[10],this._dir),ee.normalize(this._dir,this._dir);let d=null;if(this.bboxMin&&this.bboxMax){let v=-1/0,y=1/0,w=!1;for(let S=0;S<3;S++){const k=this._dir[S],G=this.bboxMin[S]-this.camera.position[S],L=this.bboxMax[S]-this.camera.position[S];if(Math.abs(k)>1e-8){const Z=G/k,V=L/k;v=Math.max(v,Math.min(Z,V)),y=Math.min(y,Math.max(Z,V))}else if(G>0||L<0){w=!0;break}}!w&&v<=y&&y>0&&(d=(Math.max(v,0)+y)*.5)}if(d===null||!isFinite(d)||d<.001){ee.subtract(this.anchor,this.camera.position,this._scratch);const v=ee.dot(this._scratch,this._dir);d=v>.001?v:ee.length(this._scratch)}d=Math.max(.1,d),ee.scale(this._dir,d,this._dir),ee.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const d=this.touches.values().next().value;if(this.lastTouchCenter){const v=d.x-this.lastTouchCenter[0],y=d.y-this.lastTouchCenter[1];this.rotation[0]+=v*.3,this.rotation[1]-=y*.3}this.lastTouchCenter=[d.x,d.y]}else if(s===2){const d=Array.from(this.touches.values()),v=(d[0].x+d[1].x)*.5,y=(d[0].y+d[1].y)*.5,w=d[1].x-d[0].x,S=d[1].y-d[0].y,k=Math.hypot(w,S),G=Math.atan2(S,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const L=v-this.lastTouchCenter[0],Z=y-this.lastTouchCenter[1],V=Math.hypot(L,Z),U=Math.abs(k-this.lastPinchDistance);let X=G-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),V>.5&&(this.shift[1]-=L,this.shift[0]+=Z),U>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(k/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=X)}this.lastTouchCenter=[v,y],this.lastPinchDistance=k,this.lastTwoFingerAngle=G}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const d=this.camera;{const F=d.rotation;this.up[0]=F[1],this.up[1]=F[5],this.up[2]=F[9],ee.length(this.up)>1e-6?ee.normalize(this.up,this.up):ee.set(0,1,0,this.up)}let v=0,y=!1;Math.abs(this.roll)>1e-4&&(v=this.roll,this.roll=0,y=!0),ee.subtract(d.position,this.center,this._dir);let w=ee.length(this._dir);w<1e-6&&(w=1e-6);const S=Math.exp(Math.log(w)+this.scroll*s*10*this.speed);ee.scale(this._dir,S/w,this._dir),w=S;const k=d.rotation;this._right[0]=k[0],this._right[1]=k[4],this._right[2]=k[8],ee.normalize(this._right,this._right),ee.length(this._right)<1e-6&&ee.set(1,0,0,this._right);const G=ee.create(k[1],k[5],k[9]);ee.normalize(G,G),ee.length(G)<1e-6&&ee.set(0,1,0,G);const L=s*this.speed*.1*w,Z=this.shift[1]*L,V=-this.shift[0]*L;ee.scale(this._right,Z,this._scratch),ee.add(this.center,this._scratch,this.center),ee.add(d.position,this._scratch,d.position),ee.scale(G,V,this._scratch),ee.add(this.center,this._scratch,this.center),ee.add(d.position,this._scratch,d.position);const U=this.rotation[0]*s*this.sensitivity,X=this.rotation[1]*s*this.sensitivity;if(Math.abs(U)>1e-5||Math.abs(X)>1e-5||y){const F=d.rotation;Fn(F,this._qWorldToCam),Fe.fromAxisAngle(Rn,-X,this._qX),Fe.fromAxisAngle(Ln,-U,this._qY),Fe.multiply(this._qX,this._qY,this._qLocal),y&&(Fe.fromAxisAngle(Cn,1*v,this._qZ),Fe.multiply(this._qZ,this._qLocal,this._qLocal)),Fe.normalize(this._qLocal,this._qLocal),Fe.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),Fe.normalize(this._qWorldToCam,this._qWorldToCam),bt.fromQuat(this._qWorldToCam,this._scratchMat3),We.fromMat3(this._scratchMat3,d.rotation);const K=d.rotation,ue=K[2],C=K[6],J=K[10];d.position[0]=this.center[0]-ue*w,d.position[1]=this.center[1]-C*w,d.position[2]=this.center[2]-J*w,this.up[0]=K[1],this.up[1]=K[5],this.up[2]=K[9],ee.normalize(this.up,this.up)}else ee.add(this.center,this._dir,d.position);d.update_buffer();const ae=Math.pow(.8,s*60);this.rotation[0]*=ae,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=ae,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=ae,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=ae,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=ae,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function nt(r){return r+3&-4}const $n=2,qn=3,Nn=5,Zn=6,tt=7,ht=8,st=9,rt=10;function Hn(r){const s=new TextDecoder("ascii"),d=s.decode(new Uint8Array(r,0,4));if(d!=="NAT2")throw new Error(`NAT2 bad magic: '${d}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const v=new DataView(r),y=4,w=v.getUint32(y+0,!0),S=v.getUint32(y+4,!0),k=v.getUint32(y+8,!0),G=v.getUint32(y+12,!0),L=v.getUint32(y+16,!0),Z=v.getFloat32(y+20,!0),V=v.getUint32(y+24,!0),U=v.getUint32(y+28,!0),X=v.getFloat32(y+32,!0),ie=v.getFloat32(y+36,!0),ae=v.getFloat32(y+40,!0),F=v.getUint32(y+44,!0),K=v.getFloat32(y+48,!0),ue=v.getFloat32(y+52,!0),C=v.getUint32(y+56,!0),J=v.getUint32(y+60,!0),ne=U===st||U===rt,$=ne?J:0,fe=ne?0:J&255,Y=ne?0:J>>8&255,H=fe>0?fe:1;if(U===Nn||U===Zn)throw new Error(`NAT2: paired-RVQ format=${U} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const de=U===st||U===rt;if(U!==$n&&U!==qn&&U!==tt&&U!==ht&&!de)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${U}`);if(w%4!==0||F%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${F}`);let D=y+64;const Q=(C+1)*4,W=new Uint32Array(r.slice(D,D+Q));D+=Q;let le;if(H>1){const oe=(H+1)*4;if(D+oe>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${oe} from ${D})`);le=new Uint32Array(r.slice(D,D+oe)),D+=oe}else le=new Uint32Array([0,w]);let pe=0;for(let oe=0;oe<H;oe++){const _e=le[oe+1]-le[oe];_e>pe&&(pe=_e)}if(de){const oe=$&1?7:6,_e=L*oe*4;if(D+_e>r.byteLength)throw new Error(`NAT2 truncated at probes: need ${_e} more bytes from offset ${D}, have ${r.byteLength-D}`);const ve=new Float32Array(r.slice(D,D+_e));D+=_e;const B=Math.max(1,$>>8&255),z=[];let _=0;for(let g=0,m=w,x=F;g<B;g++,m>>=1,x>>=1){const e=Math.max(1,m>>2)*Math.max(1,x>>2)*16;z.push(e),_+=e}const n=r.byteLength-D;if(n<_)throw new Error(`NAT2 probe atlas truncated: need ${_} bytes for ${w}x${F} x${B} mips, have ${n}`);const l=[];let a=D;for(const g of z)l.push(new Uint8Array(r.slice(a,a+g))),a+=g;const p=l[0];return{width:w,height:S,channels:k,kernel_type:G,num_rects:L,uv_extent:Z,sb_number:V,format:U,sh_bias:X,res_bias:ie,compact_mult:ae,layer_h:F,atlas_scale:K,atlas_offset:ue,n_layers:C,n_cols:H,layer_cuts:W,column_cuts:le,slice_width:pe,rects_expanded:ve,atlas_bytes:p,mip_bytes:l,probe_mode:$&1?2:1}}const j=L*4*4;if(D+j>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${j} more bytes from offset ${D}, have ${r.byteLength-D}`);const te=new Float32Array(r.slice(D,D+j));D+=j;const ge=new Float32Array(L*5);for(let oe=0;oe<L;oe++){const _e=te[oe*4+0],ve=te[oe*4+1],B=te[oe*4+2],z=te[oe*4+3];let _=0;for(let g=1;g<=C&&W[g]<=ve;g++)_=g;let n=0;for(let g=1;g<=H&&le[g]<=_e;g++)n=g;const l=ve-W[_],a=_e-le[n],p=n*C+_;ge[oe*5+0]=a,ge[oe*5+1]=l,ge[oe*5+2]=B,ge[oe*5+3]=z,ge[oe*5+4]=p}let ye,he;const we=H,Se=w/4*16;if(U===tt||U===ht){if(D+24>r.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const oe=U===tt?"BCCB":"ACCB",_e=s.decode(new Uint8Array(r,D,4));if(_e!==oe)throw new Error(`NAT2 typeD bad sub-magic: expected '${oe}' got '${_e}'`);const ve=v.getUint32(D+4,!0),B=v.getUint32(D+8,!0),z=v.getUint32(D+12,!0),_=v.getUint32(D+16,!0),n=v.getUint32(D+20,!0);if(ve!==1)throw new Error(`NAT2 BCCB unsupported version ${ve}`);if(z!==S/4||_!==w/4||n!==z*_)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${S}, sub-header ${_}×${z} (${n} blocks)`);D+=24;const l=B*16;if(D+l>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${l}, have ${r.byteLength-D})`);const a=new Uint8Array(r,D,l);D+=l;const p=n*2;if(D+p>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${p}, have ${r.byteLength-D})`);const g=new Uint16Array(r.slice(D,D+p));D+=p;const m=new Uint8Array(n*16);for(let x=0;x<n;x++){const e=g[x]*16;m.set(a.subarray(e,e+16),x*16)}if(ye=m,Y>1){he=[m];for(let x=1;x<Y;x++){if(D+24>r.byteLength)throw new Error(`NAT2 truncated at mip ${x} sub-header`);const e=s.decode(new Uint8Array(r,D,4));if(e!==oe)throw new Error(`NAT2 mip ${x}: bad sub-magic '${e}'`);const u=v.getUint32(D+8,!0),i=v.getUint32(D+16,!0),c=v.getUint32(D+20,!0);if(i!==x)throw new Error(`NAT2 mip section order: expected level ${x}, got ${i}`);D+=24;let t=0;for(let b=0;b<we;b++)for(let P=0;P<C;P++){const M=rn(x,le[b+1]-le[b],W[P+1]-W[P],pe,F);t+=(M.cw>>2)*(M.ch>>2)}if(t!==c)throw new Error(`NAT2 mip ${x}: ${c} blocks, loader expects ${t}`);if(D+u*16+c*2>r.byteLength)throw new Error(`NAT2 truncated in mip ${x}`);const o=new Uint8Array(r,D,u*16);D+=u*16;const h=new Uint16Array(r.slice(D,D+c*2));D+=c*2;const f=new Uint8Array(c*16);for(let b=0;b<c;b++){const P=h[b]*16;f.set(o.subarray(P,P+16),b*16)}he.push(f)}}}else{let oe=0;for(let _e=0;_e<C;_e++){const ve=W[_e+1]-W[_e];if(ve%4!==0)throw new Error(`NAT2 BC7 layer ${_e} rows ${ve} not 4-aligned`);oe+=ve/4*Se}if(D+oe>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${oe} more bytes from offset ${D}, have ${r.byteLength-D}`);ye=new Uint8Array(r.slice(D,D+oe))}return{width:w,height:S,channels:k,kernel_type:G,num_rects:L,uv_extent:Z,sb_number:V,format:U,sh_bias:X,res_bias:ie,compact_mult:ae,layer_h:F,atlas_scale:K,atlas_offset:ue,n_layers:C,n_cols:H,layer_cuts:W,column_cuts:le,slice_width:pe,rects_expanded:ge,atlas_bytes:ye,...he?{mip_bytes:he}:{}}}function rn(r,s,d,v,y){const w=k=>k+3>>2<<2,S=1<<r;return{cw:Math.min(w(Math.max(1,v>>r)),w(Math.ceil(s/S))),ch:Math.min(w(Math.max(1,y>>r)),w(Math.ceil(d/S)))}}const jn=32;function Yn(r,s,d){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let v,y,w,S;if(s.format===2||s.format===tt||s.format===st){if(!r.features.has("texture-compression-bc"))return Ne(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;S=s.format===st?"BC7 atlas (proberes: shared probe texture)":s.format===tt?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:v,view:y,sampler:w}=Wt(r,s,"bc7-rgba-unorm",S)}else if(s.format===3||s.format===ht||s.format===rt){if(!r.features.has("texture-compression-astc"))return Ne(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;S=s.format===rt?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===ht?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:v,view:y,sampler:w}=Wt(r,s,"astc-4x4-unorm",S)}else return Ne(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:k}=s,G=r.createBuffer({label:"atlas rects (5-stride)",size:nt(k.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(G,0,k);const L=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return pt(r,L,s,d),{texture:v,view:y,sampler:w,rectsBuffer:G,texParamsBuffer:L,meta:s}}function Wt(r,s,d,v){const{width:y,layer_h:w,n_layers:S,n_cols:k,layer_cuts:G,column_cuts:L,slice_width:Z,atlas_bytes:V}=s,X=y/4*16,ie=r.limits.maxTextureDimension2D;if(w>ie||Z>ie)throw new Error(`⚠️  atlas slice dims ${Z}x${w} exceed maxTextureDimension2D=${ie}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const ae=k*S;if(ae>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${k} cols × ${S} layers = ${ae} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const F=s.mip_bytes??[V],K=F.length,ue=r.createTexture({label:v,size:{width:Z,height:w,depthOrArrayLayers:ae},mipLevelCount:K,sampleCount:1,dimension:"2d",format:d,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let $=0;$<k;$++){const fe=L[$]/4,Y=(L[$+1]-L[$])/4;for(let H=0;H<S;H++){const de=G[H]/4,D=(G[H+1]-G[H])/4,Q=$*S+H,W=de*X+fe*16;r.queue.writeTexture({texture:ue,mipLevel:0,origin:{x:0,y:0,z:Q},aspect:"all"},V,{offset:W,bytesPerRow:X,rowsPerImage:D},{width:Y*4,height:D*4,depthOrArrayLayers:1})}}const C=s.format===st||s.format===rt;for(let $=1;$<K&&!C;$++){let fe=0;for(let Y=0;Y<k;Y++)for(let H=0;H<S;H++){const{cw:de,ch:D}=rn($,L[Y+1]-L[Y],G[H+1]-G[H],Z,w);r.queue.writeTexture({texture:ue,mipLevel:$,origin:{x:0,y:0,z:Y*S+H},aspect:"all"},F[$],{offset:fe,bytesPerRow:(de>>2)*16,rowsPerImage:D>>2},{width:de,height:D,depthOrArrayLayers:1}),fe+=(de>>2)*(D>>2)*16}}for(let $=1;$<K&&C;$++){const fe=Math.max(1,Z>>$),Y=Math.max(1,w>>$);r.queue.writeTexture({texture:ue,mipLevel:$,origin:{x:0,y:0,z:0},aspect:"all"},F[$],{offset:0,bytesPerRow:Math.max(1,fe>>2)*16,rowsPerImage:Math.max(1,Y>>2)},{width:fe,height:Y,depthOrArrayLayers:1})}K>1&&console.log(`[atlas] ${K} mip levels uploaded (${C?"trilinear":"per-surfel integer level"})`);const J=ue.createView({label:`${v} view`,dimension:"2d-array"}),ne=r.createSampler({label:`${v} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:K>1&&C?"linear":"nearest"});return{texture:ue,view:J,sampler:ne}}function pt(r,s,d,v,y=1){var L;const w=new ArrayBuffer(32),S=new Uint32Array(w),k=new Float32Array(w);S[0]=v?1:0,k[1]=d.atlas_scale,k[2]=d.atlas_offset,k[3]=d.res_bias,S[4]=d.probe_mode?d.probe_mode|0:0,S[5]=d.width|0;const G=(((L=d.mip_bytes)==null?void 0:L.length)??1)>1;S[6]=G&&y!==0?1:0,r.queue.writeBuffer(s,0,w)}async function Vn(r,s){Ne(`loading ply file from File... : ${r.name}`),kn("downloading PLY...");const d=await r.arrayBuffer();try{return await Xn(d,s)}finally{Mn()}}async function Xn(r,s){return new Promise((d,v)=>{const y=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});y.onmessage=w=>{var k,G,L,Z,V,U,X,ie,ae,F,K,ue;const S=w.data;if((S==null?void 0:S.type)==="error"){Gn(`PLY worker error: ${S.message??"unknown error"}`),y.terminate(),v(new Error(S.message??"Worker error"));return}else if((S==null?void 0:S.type)==="download_progress"){const C=S.totalBytes,J=S.loadedBytes/(1024*1024),ne=C?C/(1024*1024):void 0,$=(S.speedBps??0)/(1024*1024),fe=C?Math.min(99,Math.floor(S.loadedBytes/C*100)):void 0,Y=ne?`total ${ne.toFixed(1)} MB`:"total -- MB",H=ne&&fe!==void 0?`${J.toFixed(1)} MB downloaded (${fe}%)`:`${J.toFixed(1)} MB downloaded`,de=`${$.toFixed(2)} MB/s`;dt(`downloading PLY ...
${Y}, ${H}
${de}`);return}else if((S==null?void 0:S.type)==="fetched"){Ne(`💾 Fetched (${S.byteLength} bytes)`),Ft("Download"),dt("parsing PLY..."),An();return}else if((S==null?void 0:S.type)==="parse_progress"){const C=S.total??0,J=S.read??0,ne=C>0?Math.floor(J/C*100):0;dt(`parsing PLY ...
${J}/${C} surfels (${ne}%)`);return}else if((S==null?void 0:S.type)==="done"){const C=S.num_points,J=S.K,ne=S.feature_mode??0,$=S.sh_bias,fe=S.kernel_type,Y=S.surfelBuffer,H=S.svParamsBuffer;Ne(`🪐 Total surfels: ${C}, mode=${ne===1?"SB":"SV"}, K=${J}, sh_bias=${$}, kernel_type=${fe}`);const D=s.createBuffer({label:"surfel input buffer",size:nt(C*jn),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(D,0,Y);const Q=H.byteLength>0?H.byteLength:16,W=s.createBuffer({label:ne===1?"color_params buffer (SB)":"color_params buffer (SV)",size:nt(Q),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});H.byteLength>0&&s.queue.writeBuffer(W,0,H),y.terminate(),Ft("Parse"),d({num_points:C,K:J,feature_mode:ne,sh_bias:$,kernel_type:fe,surfel_buffer:D,surfel_data:new Float32Array(Y),sv_params_buffer:W,bbox:S.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:S.centroid??[((((G=(k=S.bbox)==null?void 0:k.min)==null?void 0:G[0])??-1)+(((Z=(L=S.bbox)==null?void 0:L.max)==null?void 0:Z[0])??1))/2,((((U=(V=S.bbox)==null?void 0:V.min)==null?void 0:U[1])??-1)+(((ie=(X=S.bbox)==null?void 0:X.max)==null?void 0:ie[1])??1))/2,((((F=(ae=S.bbox)==null?void 0:ae.min)==null?void 0:F[2])??-1)+(((ue=(K=S.bbox)==null?void 0:K.max)==null?void 0:ue[2])??1))/2]})}},y.onerror=w=>{y.terminate(),v(w)},r instanceof ArrayBuffer?(dt("parsing PLY..."),y.postMessage({type:"start",plyBuffer:r},[r])):y.postMessage({type:"start_url",url:r.url})})}const Kn=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,$t=`// 2DGS render — vertex+fragment.
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
}`,Jn=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
}`,un=32,vt=1,St=2,qt=4,Nt=512,Zt=1024,Qn=0,Ye=new ArrayBuffer(un),qe={canvas_size:new Uint32Array(Ye,0,2),accel_flags:new Uint32Array(Ye,8,1),feature_mode:new Uint32Array(Ye,12,1),gaussian_scaling:new Float32Array(Ye,16,1),sh_bias:new Float32Array(Ye,20,1),color_K:new Uint32Array(Ye,24,1),walltime:new Float32Array(Ye,28,1)};function es(r){qe.canvas_size[0]=r.width>>>0,qe.canvas_size[1]=r.height>>>0,qe.accel_flags[0]=(r.accel_flags??vt|St)>>>0,qe.feature_mode[0]=(r.feature_mode??Qn)>>>0,qe.gaussian_scaling[0]=r.gaussian_scaling??1,qe.sh_bias[0]=r.sh_bias??.5,qe.color_K[0]=(r.color_K??0)>>>0,qe.walltime[0]=r.walltime??0}function dn(r,s){r.queue.writeBuffer(s,0,Ye)}function fn(r,s,d){d&&r&&s&&dn(r,s)}function ts(r,s,d,v,y=!0){qe.canvas_size[0]=r>>>0,qe.canvas_size[1]=s>>>0,fn(d??null,v??null,y)}function ns(r,s,d,v=!0){let y=qe.accel_flags[0];r.oac!==void 0&&(y=r.oac?y|vt:y&~vt),r.spr!==void 0&&(y=r.spr?y|St:y&~St),r.bfc!==void 0&&(y=r.bfc?y|qt:y&~qt),r.hypLegacy!==void 0&&(y=r.hypLegacy?y|Nt:y&~Nt),r.legacyPos!==void 0&&(y=r.legacyPos?y|Zt:y&~Zt),qe.accel_flags[0]=y>>>0,fn(s??null,d??null,v)}const ss=256;function Ht(r,s){const d=[],v=[];let y=!0;for(const w of r.split(`
`)){const S=w.trim();let k;if((k=/^\/\/#if\s+(\w+)\s*$/.exec(S))!==null){const G=!!s[k[1]];v.push({parent:y,taken:G}),y=y&&G;continue}if(/^\/\/#else\s*$/.test(S)){const G=v[v.length-1];if(G===void 0)throw new Error("preprocessWGSL: #else without #if");y=G.parent&&!G.taken;continue}if(/^\/\/#endif\s*$/.test(S)){const G=v.pop();if(G===void 0)throw new Error("preprocessWGSL: #endif without #if");y=G.parent;continue}y&&d.push(w)}if(v.length!==0)throw new Error("preprocessWGSL: unterminated #if");return d.join(`
`)}const rs=un,is=8,as=96,os=12,Tt=8,He=1<<Tt,Qe=256,_t=32/Tt,cs=0,jt=_t&1;function Yt(r,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ls(r,s){const d=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),v=r.createPipelineLayout({bindGroupLayouts:[d]}),y=w=>r.createComputePipeline({layout:v,compute:{module:s,entryPoint:w,constants:{WG_SIZE:Qe}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:d}}function us(r,s,d){const v=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=r.createPipelineLayout({bindGroupLayouts:[v]}),S=r.createPipelineLayout({bindGroupLayouts:[y]}),k=[];for(let G=0;G<_t;G++){const L={PASS_ID:G+cs,RS_RADIX_LOG2:Tt,RS_RADIX_SIZE:He};k.push({localHistogram:r.createComputePipeline({layout:w,compute:{module:s,entryPoint:"local_histogram_pass",constants:L}}),scatterElements:r.createComputePipeline({layout:S,compute:{module:d,entryPoint:"scatter_elements",constants:L}})})}return{passes:k,localHistogramBindGroupLayout:v,scatterBindGroupLayout:y}}function ds(r){const s=r.createShaderModule({label:"local histogram",code:cn}),d=r.createShaderModule({label:"scatter",code:on}),v=r.createShaderModule({label:"blelloch prefix",code:ln}),y=ls(r,v),w=us(r,s,d);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:y}}function Vt(r){const s=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),d=s.createView({dimension:"2d-array"}),v=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=r.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(w,0,new ArrayBuffer(32));const S={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:d,sampler:v,rectsBuffer:y,texParamsBuffer:w,meta:S}}class fs{constructor(s,d,v,y,w,S=null,k={}){T(this,"device");T(this,"pc");T(this,"presentationFormat");T(this,"camera_buffer");T(this,"render_settings_buffer");T(this,"draw_indirect_buffer");T(this,"splat_2d_buffer");T(this,"querySet");T(this,"resolveBuffer");T(this,"resultBuffer");T(this,"queriesPerFrame",is);T(this,"queryCapacityFrames",200);T(this,"sort_prefixBindGroup");T(this,"sort_pipelines");T(this,"sort_localHistogramBindGroups");T(this,"sort_scatterBindGroups");T(this,"lastFrame",0);T(this,"frameCount",0);T(this,"preprocessPipeline");T(this,"cullPipeline");T(this,"renderPipeline");T(this,"indirectPipeline");T(this,"renderShaderModule");T(this,"betaKernel",1);T(this,"fetchById");T(this,"octBound");T(this,"acc16");T(this,"accTexture",null);T(this,"accView",null);T(this,"accW",0);T(this,"accH",0);T(this,"legacyRenderPipeline",null);T(this,"varyingsPipeline",null);T(this,"legacyRenderer",!1);T(this,"accResolvePipeline",null);T(this,"accResolveBgl",null);T(this,"accResolveBindGroup",null);T(this,"renderSettingsBgl");T(this,"preprocessBgl2");T(this,"renderSplatsBgl");T(this,"atlasBgl");T(this,"sort_info_buffer");T(this,"sort_ping_pong");T(this,"crsBg");T(this,"gsBg");T(this,"cullBg2");T(this,"preprocessBg1");T(this,"renderSplatsBindGroup");T(this,"renderSettingsBindGroup");T(this,"atlasBindGroup");T(this,"indirectBindGroup");T(this,"sh_solvers_buffer");T(this,"bfcParamsBuffer");T(this,"bfcBindGroupLayout");T(this,"bfcBindGroup");T(this,"bgColor",[0,0,0,0]);T(this,"showPerfDialogNext",!1);T(this,"requestReorderNextFrame",!1);T(this,"reorderInFlight",!1);T(this,"downloadOnceNextRead",!1);T(this,"downloadOnceFileName","fps_metrics");T(this,"allFrameTimes",[]);T(this,"lastStageBreakdownMs",null);T(this,"timeQueryEnabled");T(this,"atlas");T(this,"atlasParamsBuffer");T(this,"_atlasEnabled",!0);T(this,"mipLodBias",1);T(this,"_mipMode",1);this.fetchById=k.fetchById??!0,this.octBound=k.octBound??!1,this.acc16=k.acc16??!1,Ne(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const G=w.includes("timestamp-query");this.timeQueryEnabled=G,G&&Ne("⏰ using timestamp-query"),this.pc=s,this.device=d,this.presentationFormat=v,this.camera_buffer=y,this.atlas=S??Vt(d),this.atlasParamsBuffer=d.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),d.addEventListener("uncapturederror",he=>{console.error("A WebGPU error was not captured:",he.error)}),this._setupTimestampQueries(),this._setupBuffers();const L=(Math.floor((this.pc.num_points+Qe-1)/Qe)+1)*Qe,Z=Math.ceil(L/Qe);console.log(`keys count adjusted: ${L}`),console.log(`key size: ${this.pc.num_points}`);const V=d.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ds(d);const U=[Yt(L,d),Yt(L,d)],X=d.createBuffer({label:"workgroup histograms",size:Z*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=d.createBuffer({label:"workgroup prefixes",size:Z*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=d.createBuffer({label:"digit base",size:He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=Math.ceil(Z/Qe),K=Math.ceil(F/Qe),ue=d.createBuffer({label:"prefix l0 sums",size:F*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),C=d.createBuffer({label:"prefix l0 offsets",size:F*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=d.createBuffer({label:"prefix l1 sums",size:K*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=d.createBuffer({label:"prefix l1 offsets",size:K*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=d.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:ie}},{binding:3,resource:{buffer:ue}},{binding:4,resource:{buffer:C}},{binding:5,resource:{buffer:J}},{binding:6,resource:{buffer:ne}},{binding:7,resource:{buffer:ae}}]}),this.sort_localHistogramBindGroups=[d.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:U[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),d.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:U[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[d.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:ae}},{binding:2,resource:{buffer:U[0].sort_depths_buffer}},{binding:3,resource:{buffer:U[1].sort_depths_buffer}},{binding:4,resource:{buffer:U[0].sort_indices_buffer}},{binding:5,resource:{buffer:U[1].sort_indices_buffer}},{binding:6,resource:{buffer:ie}}]}),d.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:ae}},{binding:2,resource:{buffer:U[1].sort_depths_buffer}},{binding:3,resource:{buffer:U[0].sort_depths_buffer}},{binding:4,resource:{buffer:U[1].sort_indices_buffer}},{binding:5,resource:{buffer:U[0].sort_indices_buffer}},{binding:6,resource:{buffer:ie}}]})],this.sort_info_buffer=V,this.sort_ping_pong=U;const $=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),fe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Y=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),H=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:$,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:fe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:Y,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=H,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:H,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const de=this.device.createShaderModule({code:an});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:de,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const D=this.device.createShaderModule({code:Jn});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,fe,Y,this.bfcBindGroupLayout]}),compute:{module:D,entryPoint:"surfel_cull"}});const Q=this.device.createShaderModule({code:Kn});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,H]}),compute:{module:Q,entryPoint:"preprocess"}});const W=this.device.createShaderModule({label:"render_2dgs",code:Ht($t,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});W.getCompilationInfo().then(he=>{he.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),he.messages.forEach(we=>{(we.type==="error"?console.error:we.type==="warning"?console.warn:console.log)(`${we.type} (line ${we.lineNum}:${we.linePos}): ${we.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const le=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),pe=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,j=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:pe,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),te=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ge=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[le,j,te]}),vertex:{module:W,entryPoint:"vs_main"},fragment:{module:W,entryPoint:"fs_main",constants:{BETA_KERNEL:ge},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ye=(he,we,Ge)=>{const Se=this.device.createShaderModule({label:`render_2dgs (${he})`,code:Ht($t,{FETCH_BY_ID:we,OCT:Ge})});return this.device.createRenderPipeline({label:`render_2dgs_${he}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[le,j,te]}),vertex:{module:Se,entryPoint:"vs_main"},fragment:{module:Se,entryPoint:"fs_main",constants:{BETA_KERNEL:ge},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=ye("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ye("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(he=>{he?console.error("[render_2dgs] pipeline create validation error:",he.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:le,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:j,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[jt].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:te,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=W,this.betaKernel=ge,this.renderSettingsBgl=le,this.renderSplatsBgl=j,this.atlasBgl=te}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(s,d){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,d[0],d[1],d[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var y;const s=new ArrayBuffer(32),d=new Uint32Array(s),v=new Float32Array(s);d[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,d[1]=this.atlas.meta.layer_h|0,v[2]=this.atlas.meta.uv_extent||0,d[3]=this.atlas.meta.probe_mode|0||0,d[4]=this._mipMode!==0?Math.max(1,((y=this.atlas.meta.mip_bytes)==null?void 0:y.length)??1):1,v[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}ensureAccResources(s,d){var v;if(this.accResolvePipeline===null){const y=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:y});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===d||((v=this.accTexture)==null||v.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,d),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=d)}setAtlas(s){this.atlas=s??Vt(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&pt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,pt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,Ne(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,ns({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const d=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([d])),Ne(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(s){this.atlas.meta.format!==4294967295&&(this._mipMode=s?1:0,this.writeAtlasParams(),pt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const d=Math.max(0,Math.min(s,this.pc.num_points)),v=d*Uint32Array.BYTES_PER_ELEMENT;if(v===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:v,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[jt].sort_indices_buffer,0,y,0,v),this.device.queue.submit([w.finish()]),await y.mapAsync(GPUMapMode.READ);const S=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",d,"):",Array.from(S)),y.unmap()}frame(s,d,v=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,S=v&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const k={label:"cull"};S&&(k.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const G=s.beginComputePass(k);G.setPipeline(this.cullPipeline),G.setBindGroup(0,this.crsBg),G.setBindGroup(1,this.gsBg),G.setBindGroup(2,this.cullBg2),G.setBindGroup(3,this.bfcBindGroup);const L=Math.ceil(this.pc.num_points/ss);G.dispatchWorkgroups(L,1,1),G.end()}{const k=s.beginComputePass({label:"calculate indirect dispatch"});k.setPipeline(this.indirectPipeline),k.setBindGroup(0,this.indirectBindGroup),k.dispatchWorkgroups(1,1,1),k.end()}{const k={label:"preprocess"};S&&(k.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const G=s.beginComputePass(k);G.setPipeline(this.preprocessPipeline),G.setBindGroup(0,this.crsBg),G.setBindGroup(1,this.preprocessBg1),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),G.end()}for(let k=0;k<_t;k++){const G=k&1,L=this.sort_pipelines.passes[k],Z=this.sort_localHistogramBindGroups[G],V=this.sort_scatterBindGroups[G];{const U={label:`upsweep_round${k}`};S&&k==0&&(U.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const X=s.beginComputePass(U);X.setPipeline(L.localHistogram),X.setBindGroup(0,Z),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const U=s.beginComputePass({label:`prefix_round${k} - l0TileScan`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),U.end()}{const U=s.beginComputePass({label:`prefix_round${k} - l1TileScanOnL0`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),U.end()}{const U=s.beginComputePass({label:`prefix_round${k} - l1ScanSums`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroups(1,He,1),U.end()}{const U=s.beginComputePass({label:`prefix_round${k} - addL1ToL0`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),U.end()}{const U=s.beginComputePass({label:`prefix_round${k} - addL0ToElems`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),U.end()}{const U=s.beginComputePass({label:`prefix_round${k} - computeDigitBase`});U.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),U.setBindGroup(0,this.sort_prefixBindGroup),U.dispatchWorkgroups(1,1,1),U.end()}{const U={label:`scatter_round${k}`};S&&k==_t-1&&(U.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const X=s.beginComputePass(U);X.setPipeline(L.scatterElements),X.setBindGroup(0,V),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{let k=d;this.acc16&&(this.ensureAccResources(qe.canvas_size[0],qe.canvas_size[1]),k=this.accView);const G={label:"render",colorAttachments:[{view:k,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...this.acc16?{}:{endOfPassWriteIndex:w+7}});const L=s.beginRenderPass(G);if(L.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end(),this.acc16){const Z={label:"acc16_resolve",colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(Z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const V=s.beginRenderPass(Z);V.setPipeline(this.accResolvePipeline),V.setBindGroup(0,this.accResolveBindGroup),V.draw(3),V.end()}}this.frameCount++}async readPerfMetrics(s){const d=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const v=this.device.createCommandEncoder({label:"timestamp resolve encoder"});v.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),v.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([v.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),S=Math.min(this.frameCount,this.queryCapacityFrames),k=(this.lastFrame+this.frameCount-S)%this.queryCapacityFrames,G=Array.from({length:y.length},()=>[]);let L=0;for(let K=0;K<S;K++){const ue=(k+K)%this.queryCapacityFrames,C=ue*this.queriesPerFrame;let J=!0;for(let ne=0;ne<y.length;ne++){const[$,fe,Y]=y[ne];if(w[C+Y]===0n||w[C+fe]===0n||w[C+fe]<w[C+Y]){J=!1;break}}if(!J){!d&&ue%60===0&&console.debug("[timestamp] frame slot",ue,"contains unwritten (0) timestamps, skipped in stats");continue}L++;for(let ne=0;ne<y.length;ne++){const[$,fe,Y]=y[ne],H=Number(w[C+Y]),de=Number(w[C+fe]);G[ne].push((de-H)/1e6)}}if(L===0){this.resultBuffer.unmap(),d||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...G[0]);const Z=[];let V=0,U=0,X=0;for(let K=0;K<y.length;K++){const ue=y[K][0],C=G[K];let J=0;if(ue==="Total"){const ne=this.allFrameTimes;J=ne.reduce((Y,H)=>Y+H,0)/ne.length;const $=[...ne].sort((Y,H)=>Y-H);V=$[Math.floor($.length*.99)]||0;const fe=ne.reduce((Y,H)=>Y+Math.pow(H-J,2),0)/ne.length;U=Math.sqrt(fe),X=J}else J=C.reduce((ne,$)=>ne+$,0)/C.length;Z.push([ue,J])}this.lastFrame+=this.frameCount,this.frameCount=0;const ie=Object.fromEntries(Z);this.lastStageBreakdownMs={cull:ie.Culling??0,preprocess:ie.Preprocess??0,sort:ie.Sort??0,render:ie.Render??0,total:ie.Total??0};const F=`[TIMESTAMP - ${this.constructor.name}]
`+Z.map(([K,ue])=>`${K}: ${ue.toFixed(3)}ms`).join(`
`)+`
Total P99: ${V.toFixed(3)}ms
Total STD: ${U.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(d||(console.log(F),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const K=`Stage,ms
`,ue=Z.map(([ne,$])=>`${ne},${$.toFixed(3)}`).join(`
`),C="data:text/csv;charset=utf-8,"+encodeURIComponent(K+ue),J=document.createElement("a");J.href=C,J.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(J),J.click(),J.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(F)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rs,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),d=s?s.width:1,v=s?s.height:1;es({width:d,height:v,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),dn(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:nt(this.pc.num_points*as),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:nt(this.pc.num_points*os),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const d=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=d.length>0?d:this.downloadOnceFileName}else{const d=new Date,v=`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}_${String(d.getHours()).padStart(2,"0")}${String(d.getMinutes()).padStart(2,"0")}${String(d.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${v}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function ps(r){const s=new TextDecoder().decode(new Uint8Array(r,0,4));if(s!=="GSB1")throw new Error(`not a GSB1 file (magic '${s}')`);const d=new DataView(r).getUint32(4,!0),v=JSON.parse(new TextDecoder().decode(new Uint8Array(r,8,d))),y=8+d;return{header:v,bytes:r.byteLength,block(w){const S=v.blocks.find(k=>k.name===w);if(!S)throw new Error(`GSB block '${w}' missing`);return r.slice(y+S.offset,y+S.offset+S.nbytes)}}}const Xt=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
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
`,kt=8,Ze=1<<kt,Xe=256,xt=32/kt;class xs{constructor(s,d,v){T(this,"depthsIn");T(this,"indicesIn");T(this,"indicesOut");T(this,"owned",[]);T(this,"passes",[]);T(this,"histBg");T(this,"scatterBg");T(this,"prefixBg");T(this,"prefix",{});this.device=s,this.info=v;const y=(Math.floor((d+Xe-1)/Xe)+1)*Xe,w=Math.ceil(y/Xe),S=(Q,W)=>{const le=s.createBuffer({label:Q,size:W,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(le),le},k=[0,1].map(Q=>({d:S(`sort keys ${Q}`,y*4),p:S(`sort payload ${Q}`,y*4)})),G=S("wg histograms",w*Ze*4),L=S("wg prefixes",w*Ze*4),Z=S("digit base",Ze*4),V=Math.ceil(w/Xe),U=Math.ceil(V/Xe),X=S("l0 sums",V*Ze*4),ie=S("l0 offsets",V*Ze*4),ae=S("l1 sums",U*Ze*4),F=S("l1 offsets",U*Ze*4);this.depthsIn=k[0].d,this.indicesIn=k[0].p,this.indicesOut=k[xt&1].p;const K=Q=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:Q}}),ue=s.createBindGroupLayout({entries:[{binding:0,...K("read-only-storage")},{binding:1,...K("read-only-storage")},{binding:2,...K("storage")}]}),C=s.createBindGroupLayout({entries:[{binding:0,...K("read-only-storage")},{binding:1,...K("read-only-storage")},{binding:2,...K("read-only-storage")},{binding:3,...K("storage")},{binding:4,...K("read-only-storage")},{binding:5,...K("storage")},{binding:6,...K("read-only-storage")}]}),J=s.createBindGroupLayout({entries:[{binding:0,...K("read-only-storage")},{binding:1,...K("read-only-storage")},...[2,3,4,5,6,7].map(Q=>({binding:Q,...K("storage")}))]}),ne=s.createShaderModule({label:"bench radix histogram",code:cn}),$=s.createShaderModule({label:"bench radix scatter",code:on}),fe=s.createShaderModule({label:"bench radix prefix",code:ln}),Y=s.createPipelineLayout({bindGroupLayouts:[ue]}),H=s.createPipelineLayout({bindGroupLayouts:[C]});for(let Q=0;Q<xt;Q++){const W={PASS_ID:Q,RS_RADIX_LOG2:kt,RS_RADIX_SIZE:Ze};this.passes.push({hist:s.createComputePipeline({layout:Y,compute:{module:ne,entryPoint:"local_histogram_pass",constants:W}}),scatter:s.createComputePipeline({layout:H,compute:{module:$,entryPoint:"scatter_elements",constants:W}})})}const de=s.createPipelineLayout({bindGroupLayouts:[J]});for(const Q of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[Q]=s.createComputePipeline({layout:de,compute:{module:fe,entryPoint:Q,constants:{WG_SIZE:Xe}}});const D=(Q,W)=>({binding:Q,resource:{buffer:W}});this.prefixBg=s.createBindGroup({layout:J,entries:[D(0,v),D(1,G),D(2,L),D(3,X),D(4,ie),D(5,ae),D(6,F),D(7,Z)]}),this.histBg=[0,1].map(Q=>s.createBindGroup({layout:ue,entries:[D(0,v),D(1,k[Q].d),D(2,G)]})),this.scatterBg=[0,1].map(Q=>s.createBindGroup({layout:C,entries:[D(0,v),D(1,Z),D(2,k[Q].d),D(3,k[1-Q].d),D(4,k[Q].p),D(5,k[1-Q].p),D(6,L)]}))}encode(s){const d=(v,y,w,S)=>{const k=s.beginComputePass();k.setPipeline(v),k.setBindGroup(0,y),w!==null?k.dispatchWorkgroupsIndirect(this.info,w):k.dispatchWorkgroups(S[0],S[1],1),k.end()};for(let v=0;v<xt;v++){const y=v&1;d(this.passes[v].hist,this.histBg[y],4),d(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),d(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),d(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,Ze]),d(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),d(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),d(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),d(this.passes[v].scatter,this.scatterBg[y],4)}}destroy(){for(const s of this.owned)s.destroy()}}const Kt=256,ys=64,Ke=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class bs{constructor(s,d,v,y,w){T(this,"n");T(this,"kind");T(this,"freezeMlp",!1);T(this,"owned",[]);T(this,"params",new ArrayBuffer(32));T(this,"paramsBuf");T(this,"info");T(this,"drawArgs");T(this,"vpBuf");T(this,"indirectPipe");T(this,"indirectBg");T(this,"computeBgs");T(this,"cullPipe");T(this,"mlpPipe",null);T(this,"mlpAllPipe",null);T(this,"prepPipe",null);T(this,"rasterPipe");T(this,"rasterBg");T(this,"sorter",null);T(this,"countCopy",null);T(this,"cullInfoBg",null);T(this,"accTex",null);T(this,"trTex",null);T(this,"resolvePipe",null);T(this,"resolveBgl",null);T(this,"resolveBg",null);T(this,"accFormat");T(this,"wScale");T(this,"eps",null);this.device=s,this.targetFormat=y;const S=d.header;this.n=S.n,this.kind=S.render;const k=S.n,G=(j,te,ge=Ke|GPUBufferUsage.COPY_SRC)=>{const ye=s.createBuffer({label:j,size:Math.max(16,te+(4-te%4)%4),usage:ge});return this.owned.push(ye),ye},L=(j,te)=>{const ge=te instanceof ArrayBuffer?new Uint8Array(te):new Uint8Array(te.buffer,te.byteOffset,te.byteLength),ye=G(j,ge.byteLength,Ke);return s.queue.writeBuffer(ye,0,ge),ye},Z=new Float32Array(d.block("pos")),V=new Float32Array(d.block("cov3d")),U=this.kind==="sorted_3dgs"?new Float32Array(d.block("opacity")):null,X=new Float32Array(k*10);for(let j=0;j<k;j++)X[j*10]=Z[j*3],X[j*10+1]=Z[j*3+1],X[j*10+2]=Z[j*3+2],X[j*10+3]=U?U[j]:1,X.set(V.subarray(j*6,j*6+6),j*10+4);const ie=L("bench gauss",X),ae=L("bench sh",d.block("sh"));this.paramsBuf=G("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=w.float32Blend?"rgba32float":"rgba16float",this.wScale=w.float32Blend?1:1/1024;const F=new Uint32Array(this.params),K=new Float32Array(this.params);F[0]=k,F[1]=S.sh_degree,K[2]=w.cutoffMult??S.cutoff_mult??1,K[3]=this.wScale,s.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=G("bench sort info",64,Ke|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=G("bench draw args",16,Ke|GPUBufferUsage.INDIRECT),s.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=G("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const ue=G("bench splats",k*ys),C=s.createShaderModule({label:"bench indirect",code:an});this.indirectPipe=s.createComputePipeline({layout:"auto",compute:{module:C,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=s.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const J=GPUShaderStage.COMPUTE,ne=(j,te=J)=>s.createBindGroupLayout({entries:j.map((ge,ye)=>({binding:ye,visibility:te,buffer:{type:ge}}))}),$=(j,te)=>({binding:j,resource:{buffer:te}}),fe=ne(["uniform","uniform"]),Y=s.createBindGroup({layout:fe,entries:[$(0,v),$(1,this.paramsBuf)]});let H,de;if(this.kind==="sorted_3dgs"){this.sorter=new xs(s,k,this.info);const j=ne(["read-only-storage","read-only-storage","storage"]),te=ne(["storage","storage","storage"]),ge=s.createShaderModule({label:"gs3d_cull",code:Xt+hs});this.cullPipe=s.createComputePipeline({label:"gs3d_cull",layout:s.createPipelineLayout({bindGroupLayouts:[fe,j,te]}),compute:{module:ge,entryPoint:"cull"}}),this.computeBgs=[Y,s.createBindGroup({layout:j,entries:[$(0,ie),$(1,ae),$(2,ue)]}),s.createBindGroup({layout:te,entries:[$(0,this.info),$(1,this.sorter.depthsIn),$(2,this.sorter.indicesIn)]})],de=this.sorter.indicesOut,H=G("bench weights stub",16,Ke)}else{const j=new Float32Array(d.block("scale")),te=new Float32Array(d.block("rot")),ge=new Float32Array(k*7);for(let m=0;m<k;m++)ge.set(j.subarray(m*3,m*3+3),m*7),ge.set(te.subarray(m*4,m*4+4),m*7+3);const ye=L("bench mgs attr",ge),he=(m,x,e)=>{const u=new Float32Array(m.length);for(let i=0;i<x;i++)for(let c=0;c<e;c++)u[c*x+i]=m[i*e+c];return u},we=S.mlp.flatMap(m=>[he(new Float32Array(d.block(`${m.name}.weight`)),m.out_dim,m.in_dim),new Float32Array(d.block(`${m.name}.bias`))]),Ge=S.mlp.map(m=>`${m.in_dim}>${m.out_dim}`).join(",");if(Ge!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${Ge}`);const Se=new Float32Array(we.reduce((m,x)=>m+x.length,0));let oe=0;for(const m of we)Se.set(m,oe),oe+=m.length;const _e=L("bench mgs mlp",Se),ve=G("bench mgs vis",k*4),B=G("bench mgs mlp out",k*8);H=G("bench mgs weights",k*4),this.countCopy=G("bench mgs count",16,Ke);const z=ne(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),_=ne(["read-only-storage","storage","storage","storage","storage"]),n=ne(["storage"]),l=s.createShaderModule({label:"mgs_compute",code:Xt+_s}),a=s.createPipelineLayout({bindGroupLayouts:[fe,z,_,n]}),p=s.createPipelineLayout({bindGroupLayouts:[fe,z,_]}),g=(m,x)=>s.createComputePipeline({label:`mgs_${m}`,layout:x,compute:{module:l,entryPoint:m}});this.cullPipe=g("cull",a),this.mlpPipe=g("mlp_coop",p),this.mlpAllPipe=g("mlp_all_coop",p),this.prepPipe=g("prep",p),this.computeBgs=[Y,s.createBindGroup({layout:z,entries:[$(0,ie),$(1,ae),$(2,ye),$(3,_e)]}),s.createBindGroup({layout:_,entries:[$(0,this.countCopy),$(1,ve),$(2,B),$(3,ue),$(4,H)]})],this.cullInfoBg=s.createBindGroup({layout:n,entries:[$(0,this.info)]}),de=G("bench order stub",16,Ke)}const D=GPUShaderStage.VERTEX,Q=s.createBindGroupLayout({entries:[{binding:0,visibility:D,buffer:{type:"read-only-storage"}},{binding:1,visibility:D,buffer:{type:"read-only-storage"}},{binding:2,visibility:D,buffer:{type:"uniform"}},{binding:3,visibility:D,buffer:{type:"read-only-storage"}}]});this.rasterBg=s.createBindGroup({layout:Q,entries:[$(0,ue),$(1,de),$(2,this.vpBuf),$(3,H)]});const W=s.createShaderModule({label:"gs_raster",code:gs}),le=j=>({operation:"add",srcFactor:"one",dstFactor:j}),pe=this.kind==="sorted_3dgs";if(this.rasterPipe=s.createRenderPipeline({label:pe?"gs_raster over":"gs_raster wsum",layout:s.createPipelineLayout({bindGroupLayouts:[Q]}),vertex:{module:W,entryPoint:pe?"vs_main":"vs_wsum"},fragment:pe?{module:W,entryPoint:"fs_over",targets:[{format:y,blend:{color:le("one-minus-src-alpha"),alpha:le("one-minus-src-alpha")}}]}:{module:W,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:le("one"),alpha:le("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!pe){this.eps=G("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),s.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const j=GPUShaderStage.FRAGMENT;this.resolveBgl=s.createBindGroupLayout({entries:[{binding:0,visibility:j,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:j,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:j,buffer:{type:"uniform"}}]});const te=s.createShaderModule({label:"mgs_resolve",code:ms});this.resolvePipe=s.createRenderPipeline({layout:s.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:te,entryPoint:"vs_full"},fragment:{module:te,entryPoint:"fs_resolve",targets:[{format:y}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(s=32768){if(!this.mlpAllPipe)return;const d=new Uint32Array(this.params);for(let v=0;v<this.n;v+=s){d[4]=v,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const y=this.device.createCommandEncoder(),w=y.beginComputePass();w.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((S,k)=>w.setBindGroup(k,S)),w.dispatchWorkgroups(Math.ceil(Math.min(s,this.n-v)/Kt)),w.end(),this.device.queue.submit([y.finish()]),await this.device.queue.onSubmittedWorkDone()}d[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(s,d){var y,w;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===s&&this.accTex.height===d)return;(y=this.accTex)==null||y.destroy(),(w=this.trTex)==null||w.destroy();const v=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[s,d],format:this.accFormat,usage:v}),this.trTex=this.device.createTexture({label:"mgs T",size:[s,d],format:"r16float",usage:v}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(s,d,v,y){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([v,y,0,0])),this.ensureTargets(v,y);const w=(G,L)=>{const Z=s.beginComputePass();Z.setPipeline(G),this.computeBgs.forEach((V,U)=>Z.setBindGroup(U,V)),!L&&this.cullInfoBg&&Z.setBindGroup(3,this.cullInfoBg),L?Z.dispatchWorkgroupsIndirect(this.info,4):Z.dispatchWorkgroups(Math.ceil(this.n/Kt)),Z.end()};s.clearBuffer(this.info,0,4),w(this.cullPipe,!1);{const G=s.beginComputePass();G.setPipeline(this.indirectPipe),G.setBindGroup(0,this.indirectBg),G.dispatchWorkgroups(1),G.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(s);const G=s.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});G.setPipeline(this.rasterPipe),G.setBindGroup(0,this.rasterBg),G.drawIndirect(this.drawArgs,0),G.end();return}s.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||w(this.mlpPipe,!0),w(this.prepPipe,!0);const S=s.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});S.setPipeline(this.rasterPipe),S.setBindGroup(0,this.rasterBg),S.drawIndirect(this.drawArgs,0),S.end();const k=s.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});k.setPipeline(this.resolvePipe),k.setBindGroup(0,this.resolveBg),k.draw(3),k.end()}destroy(){var s,d,v;for(const y of this.owned)y.destroy();(s=this.sorter)==null||s.destroy(),(d=this.accTex)==null||d.destroy(),(v=this.trTex)==null||v.destroy()}}const Je="rgba8unorm",Jt="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",je=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"bitymi_mip0",label:"BITYMI (mips, bias 0)",asset:"bitymimip",note:"diagnostic: atlas mip chain, full per-surfel prefiltering"},{id:"bitymi_mip1",label:"BITYMI (mips, bias 1)",asset:"bitymimip",note:"diagnostic: atlas mip chain, one level less prefiltering"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],ws=r=>new Promise(s=>setTimeout(s,r)),ft=()=>new Promise(r=>setTimeout(r,0));function vs(r){const s=new TextDecoder().decode(new Uint8Array(r,0,8));if(s!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${s}')`);const d=new DataView(r);let v=null,y=null;for(let w=0;w<d.getUint32(8,!0);w++){const S=12+w*20,k=d.getUint32(S,!0),G=Number(d.getBigUint64(S+4,!0)),L=Number(d.getBigUint64(S+12,!0));k===0||k===1||k===5?v=r.slice(G,G+L):(k===3||k===4)&&(y=r.slice(G,G+L))}if(!v)throw new Error("bundle has no point cloud chunk");return{pc:v,atlas:y}}async function yt(r,s){var Z;const d=await fetch(r);if(!d.ok)throw new Error(`${r}: HTTP ${d.status}`);const v=Number(d.headers.get("content-length"))||0,y=(Z=d.body)==null?void 0:Z.getReader();if(!y)return d.arrayBuffer();const w=[];let S=0,k=0;for(;;){const{done:V,value:U}=await y.read();if(V)break;w.push(U),S+=U.byteLength,S-k>2<<20&&(k=S,s(S/2**20,v?v/2**20:null))}const G=new Uint8Array(S);let L=0;for(const V of w)G.set(V,L),L+=V.byteLength;return G.buffer}function Bt(r,s,d=new Set,v=0){if(!(!r||typeof r!="object"||d.has(r)||v>2)){d.add(r);for(const y of Object.values(r))s.has(y)||(y instanceof GPUBuffer||y instanceof GPUTexture?y.destroy():Array.isArray(y)?y.forEach(w=>Bt(w,s,d,v+1)):y&&typeof y=="object"&&Object.getPrototypeOf(y)===Object.prototype&&Bt(y,s,d,v+1))}}async function Ss(r,s,d,v,y){const w=new URLSearchParams(location.search),S=w.get("scene")??"garden",k=(w.get("assets")??`${Jt}/bench/${S}`).replace(/\/$/,""),G=d.features.has("texture-compression-bc"),L=d.features.has("texture-compression-astc"),Z=w.get("bitymi")??`${Jt}/mip_360/${S}_e3rdraw${G||!L?"":"_astc"}.bitymi`,V=d.features.has("float32-blendable"),U=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),X=w.get("byid");let ie=X!==null?X==="1":!U,ae=w.get("legacy")==="1";s.configure({device:d,format:Je,alphaMode:"opaque"});const F=new wt(r,d),K=new Wn(F),ue=document.getElementById("bench-panel"),C=t=>document.getElementById(t),J=t=>{C("status").textContent=t},ne=await(await fetch(`${k}/manifest.json`)).json(),$=await Dn(`${k}/${ne.cameras}`),fe=await(await fetch(`${k}/${ne.cameras}`)).json(),[Y,H]=ne.resolution,de=2*Math.atan(H/(2*fe[0].fy));F.setFov(de),F.set_preset($[0]),K.resetToCamera();const D=C("method");for(const t of je)D.add(new Option(t.label,t.id));const Q=v.info;C("device").textContent=`${Q.vendor||"?"} ${Q.architecture||""} ${Q.device||Q.description||""}`.trim()+` · BC7 ${G?"✓":"✗"} ASTC ${L?"✓":"✗"} · float32-blend ${V?"✓":"✗"}`;let W=null,le=!1,pe=null,j=null;const te=w.get("bitymimip")??Z.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmip$1.bitymi");async function ge(t){var M,O;const o=performance.now(),h=(A,I)=>J(`${t.label}: downloading ${A.toFixed(0)}${I?` / ${I.toFixed(0)}`:""} MB`);if(t.asset==="bitymi"||t.asset==="bitymimip"){const A=t.asset==="bitymi"?pe??(pe=await yt(Z,h)):j??(j=await yt(te,h)),I=(t.base??t.id)==="bitymi_oct";J(`${t.label}: parsing`);const{pc:E,atlas:q}=vs(A),N=await Vn(new File([E],"bundle.ply"),d);let R=null;q&&(R=Yn(d,Hn(q),!0));const se=new fs(N,d,Je,F.uniform_buffer,y,R,{fetchById:t.byid??ie,octBound:I,acc16:!1});(t.legacy??ae)&&se.setLegacyRenderer(!0),se.setAtlasEnabled((t.base??t.id)!=="bitymi_noatlas"),t.asset==="bitymimip"&&se.setMipLodBias((t.base??t.id)==="bitymi_mip0"?0:1);let re=0,xe=0;const Be=R?R.meta.format===3||R.meta.format===8||R.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:t,prims:N.num_points,downloadBytes:A.byteLength,gs:se,oct:I,atlasKind:Be,detail:`atlas ${(t.base??t.id)==="bitymi_noatlas"?"OFF (diagnostic)":Be} · fragment inputs ${t.byid??ie?"fetch-by-id":"varyings"} · ${t.legacy??ae?"LEGACY renderer":"current renderer"}${I?" · octagon bound":""}${t.asset==="bitymimip"?` · atlas mips (${((O=(M=R==null?void 0:R.meta)==null?void 0:M.mip_bytes)==null?void 0:O.length)??1} levels)`:""} · ${(performance.now()-o).toFixed(0)} ms load`,render(Pe,ze,Ae,Ee){(Ae!==re||Ee!==xe)&&(ts(Ae,Ee,d,se.render_settings_buffer),re=Ae,xe=Ee),se.frame(Pe,ze,!1)},destroy(){N.surfel_buffer.destroy(),N.sv_params_buffer.destroy(),R&&(R.texture.destroy(),R.rectsBuffer.destroy(),R.texParamsBuffer.destroy()),Bt(se,new Set([F.uniform_buffer]))}}}const f=await yt(`${k}/${ne.methods[t.asset].file}`,h);J(`${t.label}: uploading`);const b=new bs(d,ps(f),F.uniform_buffer,Je,{float32Blend:V});return{def:t,prims:b.n,downloadBytes:f.byteLength,baseline:b,detail:`${b.label}${t.asset==="mobilegs"?` · shipped model ${(ne.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(A,I,E,q)=>b.frame(A,I,E,q),destroy:()=>b.destroy()}}async function ye(t){var h,f;const o=(W==null?void 0:W.gs)&&W.def.asset===t.asset&&W.oct===((t.base??t.id)==="bitymi_oct");if(W&&W.def.asset===t.asset&&(W.baseline||o)?(W={...W,def:t},(h=W.gs)==null||h.setAtlasEnabled((t.base??t.id)!=="bitymi_noatlas"),t.asset==="bitymimip"&&((f=W.gs)==null||f.setMipLodBias((t.base??t.id)==="bitymi_mip0"?0:1)),W.gs&&(W.gs.setFetchById(t.byid??ie),W.gs.setLegacyRenderer(t.legacy??ae),W.detail=W.detail.replace(/^atlas [^·]+·/,`atlas ${(t.base??t.id)==="bitymi_noatlas"?"OFF (diagnostic)":W.atlasKind} ·`).replace(/fragment inputs [a-z-]+/,`fragment inputs ${t.byid??ie?"fetch-by-id":"varyings"}`).replace(/(LEGACY|current) renderer/,t.legacy??ae?"LEGACY renderer":"current renderer"))):(W==null||W.destroy(),W=null,await d.queue.onSubmittedWorkDone(),W=await ge(t)),W.baseline&&W.baseline.kind==="sortfree_weighted"){const b=t.id==="mobilegs_frozen";b&&(F.set_preset($[0]),J("Mobile-GS: evaluating the MLP once for all Gaussians"),await W.baseline.computeAllMlp()),W.baseline.freezeMlp=b}return C("info").textContent=`${W.def.label}: ${W.prims.toLocaleString()} primitives · ${(W.downloadBytes/2**20).toFixed(1)} MB download · ${W.detail}`,J("ready"),W}D.onchange=async()=>{if(!(le||_e)){le=!0;try{await ye(je.find(t=>t.id===D.value))}catch(t){J(`load failed: ${t}`),console.error(t)}finally{le=!1}}};const he=C("byid"),we=C("legacy");he.checked=ie,we.checked=ae;const Ge=async()=>{if(le||_e){he.checked=ie,we.checked=ae;return}if(ie=he.checked,ae=we.checked,(W==null?void 0:W.def.id)==="bitymi"){le=!0;try{W.destroy(),W=null,await d.queue.onSubmittedWorkDone(),await ye(je[0])}catch(t){J(`load failed: ${t}`),console.error(t)}finally{le=!1}}};he.onchange=Ge,we.onchange=Ge;let Se=0;const oe=t=>{Se=(t+$.length)%$.length,F.set_preset($[Se]),K.resetToCamera(),C("view").textContent=`${Se+1}/${$.length}`};C("prev").onclick=()=>oe(Se-1),C("next").onclick=()=>oe(Se+1);let _e=!1,ve=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(ve=!0)});const B=()=>({warmupS:Number(C("warmup").value),measureS:Number(C("measure").value),minFrames:Number(C("minframes").value),maxS:Number(C("maxs").value),cooldownS:Number(C("cooldown").value),rounds:Number(C("rounds").value),frozen:C("frozen").checked,diag:C("diag").checked});window.__setMipBias=t=>{var o;(o=W==null?void 0:W.gs)==null||o.setMipLodBias(t)},window.__mipHistogram=async t=>{const o=W==null?void 0:W.gs;if(!o)throw new Error("BITYMI not loaded");const h=d.createTexture({size:[Y,H],format:Je,usage:GPUTextureUsage.RENDER_ATTACHMENT});F.setRenderSize(Y,H),F.setFov(de),F.set_preset($[t]);const f=d.createCommandEncoder();W.render(f,h.createView(),Y,H);const b=o.splat_2d_buffer.size,P=d.createBuffer({size:b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),M=d.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});f.copyBufferToBuffer(o.splat_2d_buffer,0,P,0,b),f.copyBufferToBuffer(o.sort_info_buffer,0,M,0,16),d.queue.submit([f.finish()]),await Promise.all([P.mapAsync(GPUMapMode.READ),M.mapAsync(GPUMapMode.READ)]);const O=new Uint32Array(M.getMappedRange())[0],A=new Uint32Array(P.getMappedRange()),I=new Float32Array(A.buffer),E=[0,0,0,0,0],q=[0,0,0,0,0],N=R=>{const se=R>>10&31,re=R&1023;return se===0?re/1024*2**-14:2**(se-15)*(1+re/1024)};for(let R=0;R<O;R++){const se=Math.min(4,Math.round(I[R*24+23])),re=A[R*24+11],xe=4*N(re&65535)*N(re>>>16);E[se]++,q[se]+=xe}return P.unmap(),M.unmap(),P.destroy(),M.destroy(),h.destroy(),F.clearRenderSize(),F.setFov(de),oe(Se),{n:O,cnt:E,area:q}},window.__setMipMode=t=>{var o;(o=W==null?void 0:W.gs)==null||o.setMipMode(t)},window.__benchRender=async t=>{if(!W)throw new Error("nothing loaded");const o=d.createTexture({size:[Y,H],format:Je,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),h=Math.ceil(Y*4/256)*256,f=d.createBuffer({size:h*H,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});F.setRenderSize(Y,H),F.setFov(de),F.set_preset($[t]);const b=d.createCommandEncoder();W.render(b,o.createView(),Y,H),b.copyTextureToBuffer({texture:o},{buffer:f,bytesPerRow:h,rowsPerImage:H},[Y,H,1]),d.queue.submit([b.finish()]),await f.mapAsync(GPUMapMode.READ);const P=new Uint8Array(f.getMappedRange()),M=new Uint8Array(Y*H*4);for(let A=0;A<H;A++)M.set(P.subarray(A*h,A*h+Y*4),A*Y*4);f.unmap(),f.destroy(),o.destroy(),F.clearRenderSize(),F.setFov(de),oe(Se);let O="";for(let A=0;A<M.length;A+=32768)O+=String.fromCharCode(...M.subarray(A,A+32768));return{w:Y,h:H,b64:btoa(O)}};async function z(t,o,h){const f=d.createTexture({size:[Y,H],format:Je,usage:GPUTextureUsage.RENDER_ATTACHMENT}),b=f.createView();F.setRenderSize(Y,H),F.setFov(de);let P=0;const M=async E=>{const q=performance.now();for(let N=0;N<E;N++){F.set_preset($[P++%$.length]);const R=d.createCommandEncoder();t.render(R,b,Y,H),d.queue.submit([R.finish()])}return await d.queue.onSubmittedWorkDone(),performance.now()-q};let O=1;const A=(E,q)=>{O=Math.max(1,Math.min(60,Math.round(q*250/Math.max(E,1))))},I=`${t.def.label} · round ${o+1}`;ve=!1;try{let E=0,q=0;for(;E<h.warmupS*1e3||q<3;){const re=O,xe=await M(re);E+=xe,q+=re,A(xe,re),J(`${I}: warmup ${(E/1e3).toFixed(1)}/${h.warmupS} s`),await ft()}let N=0,R=0;const se=[];for(;(N<h.measureS*1e3||R<h.minFrames)&&N<h.maxS*1e3;){const re=O,xe=await M(re);N+=xe,R+=re,se.push(+(xe/re).toFixed(3)),A(xe,re),J(`${I}: ${(1e3*R/N).toFixed(1)} FPS · ${R} frames · ${(N/1e3).toFixed(1)} s`),await ft()}return{round:o,frames:R,ms:N,fps:1e3*R/N,chunkMsPerFrame:se,interrupted:ve}}finally{f.destroy(),F.clearRenderSize(),F.setFov(de),oe(Se)}}let _=null,n=je;function l(t,o){var M;const h=((M=n.find(O=>(O.base??O.id)==="bitymi"))==null?void 0:M.id)??"bitymi",f=t.get(h),b=f&&f.length?f.reduce((O,A)=>O+A.frames,0)/f.reduce((O,A)=>O+A.ms,0)*1e3:0,P=n.filter(O=>t.has(O.id)).map(O=>{const A=t.get(O.id),I=A.length?A.reduce((q,N)=>q+N.frames,0)/A.reduce((q,N)=>q+N.ms,0)*1e3:0,E=o.get(O.id);return`<tr><td>${O.label}</td><td>${E?E.prims.toLocaleString():""}</td><td>${E?(E.bytes/2**20).toFixed(0):""}</td><td>${A.map(q=>q.fps.toFixed(1)+(q.interrupted?"⚠":"")).join(" / ")}</td><td><b>${I?I.toFixed(1):""}</b></td><td>${I?(1e3/I).toFixed(1):""}</td><td>${b&&I&&!O.id.startsWith("bitymi")?(b/I).toFixed(1)+"×":""}</td></tr>`}).join("");C("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${P}</table>`}async function a(){var A,I;if(_e||le)return;_e=!0;const t=B(),o=C("benchall");o.disabled=!0,D.disabled=!0;let h=null;try{h=await((A=navigator.wakeLock)==null?void 0:A.request("screen"))}catch{}const f=(I=w.get("only"))==null?void 0:I.split(",").map(E=>E.trim()).filter(Boolean);let b=f!=null&&f.length?je.filter(E=>f.includes(E.id)):je.filter(E=>(t.frozen||E.id!=="mobilegs_frozen")&&(t.diag||!E.id.startsWith("bitymi_")));w.get("combos")==="1"&&(b=b.flatMap(E=>E.asset.startsWith("bitymi")?[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([q,N])=>({...E,base:E.id,byid:q,legacy:N,id:`${E.id}@${q?"byid":"vary"}${N?"+legacy":""}`,label:`${E.label} · ${q?"byid":"varyings"}${N?" · legacy":""}`})):[E])),n=b;const P=new Map,M=new Map,O=new Date().toISOString();try{let E=!0;for(let q=0;q<t.rounds;q++){const N=q%2===0?b:[...b].reverse();for(const R of N){const se=await ye(R);if(M.set(R.id,{prims:se.prims,bytes:se.downloadBytes,detail:se.detail}),!E&&t.cooldownS>0)for(let xe=t.cooldownS;xe>0;xe--)J(`cooldown ${xe} s (next: ${R.label})`),await ws(1e3);E=!1;const re=await z(se,q,t);P.has(R.id)||P.set(R.id,[]),P.get(R.id).push(re),l(P,M)}}_={kind:"bitymi-mobile-bench",version:1,scene:S,started:O,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:Q.vendor,architecture:Q.architecture,device:Q.device,description:Q.description},features:{bc:G,astc:L,float32Blendable:V,timestampQuery:d.features.has("timestamp-query")},resolution:[Y,H],fovY:de,cameras:$.length,assets:k,bitymiUrl:Z,bitymiVariant:{fetchById:ie,legacy:ae},protocol:{...t,order:b.map(q=>q.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm"},methods:b.map(q=>({id:q.id,base:q.base,byid:q.byid,legacy:q.legacy,label:q.label,note:q.note,...M.get(q.id),fps:(()=>{const N=P.get(q.id)??[],R=N.reduce((se,re)=>se+re.ms,0);return R?1e3*N.reduce((se,re)=>se+re.frames,0)/R:null})(),rounds:P.get(q.id)??[]}))},J(`done · ${b.length} methods × ${t.rounds} rounds`),C("summary").value=p(_),C("export").style.display=""}catch(E){J(`bench failed: ${E}`),console.error(E)}finally{try{await(h==null?void 0:h.release())}catch{}o.disabled=!1,D.disabled=!1,_e=!1,D.value=(W==null?void 0:W.def.id)??"bitymi"}}function p(t){var O,A,I;const o=t.methods.find(E=>(E.base??E.id)==="bitymi"),h=o==null?void 0:o.fps,f=[t.adapter.vendor,t.adapter.architecture,t.adapter.device||t.adapter.description].filter(Boolean).join(" ")||"unknown GPU",b=(((O=t.userAgent.match(/\(([^)]*)\)/))==null?void 0:O[1])??"")+" "+(((A=t.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:A[0])??""),P=t.protocol;return[`**${t.scene} render benchmark** · ${f} · ${b.trim()}`,`${t.resolution[0]}×${t.resolution[1]}, ${t.cameras} test views · ${P.rounds} rounds mirrored · warmup ${P.warmupS} s · measure ≥${P.measureS} s / ${P.minFrames} frames · cooldown ${P.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...t.methods.map(E=>{var q;return`| ${E.label} | ${((q=E.prims)==null?void 0:q.toLocaleString())??""} | ${E.bytes?(E.bytes/2**20).toFixed(0):""} | ${E.rounds.map(N=>N.fps.toFixed(1)+(N.interrupted?" (tab hidden)":"")).join(" / ")} | ${E.fps?E.fps.toFixed(1):""} | ${E.fps?(1e3/E.fps).toFixed(1):""} | ${!E.id.startsWith("bitymi")&&h&&E.fps?(h/E.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${(o==null?void 0:o.detail)??((I=t.methods.find(E=>E.id.startsWith("bitymi")))==null?void 0:I.detail)??""}. Mobile-GS blend target: ${t.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}async function g(){var E,q,N;if(_e||le)return;_e=!0;const t=C("abrun");t.disabled=!0,C("benchall").disabled=!0,D.disabled=!0;const o=Number(w.get("slice")??3),h=Number(w.get("cycles")??10),f=w.get("combos")==="1",b=[{id:"stock",label:"BITYMI (no mips)",atlas:!0,mips:!1,bias:1},{id:"noatlas",label:"BITYMI (atlas off)",atlas:!1,mips:!1,bias:1},{id:"mip0",label:"BITYMI (mips, bias 0)",atlas:!0,mips:!0,bias:0},{id:"mip1",label:"BITYMI (mips, bias 1)",atlas:!0,mips:!0,bias:1}],P=f?b.flatMap(R=>[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([se,re])=>({...R,byid:se,legacy:re,id:`${R.id}@${se?"byid":"vary"}${re?"+legacy":""}`,label:`${R.label} · ${se?"byid":"varyings"}${re?" · legacy":""}`}))):b.map(R=>({...R,byid:ie,legacy:ae}));let M=null;try{M=await((E=navigator.wakeLock)==null?void 0:E.request("screen"))}catch{}const O=new Date().toISOString(),A=d.createTexture({size:[Y,H],format:Je,usage:GPUTextureUsage.RENDER_ATTACHMENT}),I=A.createView();try{const R=await ye(je.find(ce=>ce.id==="bitymi_mip1")),se=R.gs,re=ce=>{se.setFetchById(ce.byid),se.setLegacyRenderer(ce.legacy),se.setMipLodBias(ce.bias),se.setMipMode(ce.mips),se.setAtlasEnabled(ce.atlas)};F.setRenderSize(Y,H),F.setFov(de);let xe=0;const Be=async ce=>{const Te=performance.now();for(let ke=0;ke<ce;ke++){F.set_preset($[xe++%$.length]);const be=d.createCommandEncoder();R.render(be,I,Y,H),d.queue.submit([be.finish()])}return await d.queue.onSubmittedWorkDone(),performance.now()-Te};for(const ce of P)re(ce),J(`A/B warmup: ${ce.label}`),await ft(),await Be(10);const Pe={};for(const ce of P)Pe[ce.id]=[];for(let ce=0;ce<h;ce++){const Te=P.map((ke,be)=>P[(be+ce)%P.length]);for(const ke of Te){re(ke),await Be(3);let be=0,De=0,Ie=4;for(;be<o*1e3;){const Re=await Be(Ie);be+=Re,De+=Ie,Ie=Math.max(1,Math.min(60,Math.round(Ie*250/Math.max(Re,1))))}Pe[ke.id].push(1e3*De/be),J(`A/B cycle ${ce+1}/${h} · ${ke.label}: ${(1e3*De/be).toFixed(1)} FPS`),await ft()}}const ze=P[0].id,Ae=P.map(ce=>{const Te=Pe[ce.id],ke=Te.reduce((Me,Ce)=>Me+Ce,0)/Te.length,be=Te.map((Me,Ce)=>Me/Pe[ze][Ce]),De=be.reduce((Me,Ce)=>Me+Ce,0)/be.length,Ie=Math.sqrt(be.reduce((Me,Ce)=>Me+(Ce-De)**2,0)/Math.max(1,be.length-1)/be.length),Re=Math.sqrt(Te.reduce((Me,Ce)=>Me+(Ce-ke)**2,0)/Math.max(1,Te.length-1));return{...ce,fps:ke,fpsSd:Re,ratio:De,ratioSe:Ie,perCycle:Te.map(Me=>+Me.toFixed(2))}}),Ee=[Q.vendor,Q.architecture,Q.device||Q.description].filter(Boolean).join(" ")||"unknown GPU",Oe=(((q=navigator.userAgent.match(/\(([^)]*)\)/))==null?void 0:q[1])??"")+" "+(((N=navigator.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:N[0])??""),Ue=[`**${S} interleaved A/B (BITYMI variants)** · ${Ee} · ${Oe.trim()}`,`${Y}×${H}, ${$.length} test views · ${h} cycles × ${P.length} variants × ${o} s slices, rotating order · ratio = paired per-cycle FPS / stock ± s.e.`,"","| variant | FPS (mean ± sd over cycles) | ms/frame | vs stock (paired) |","|---|---:|---:|---:|",...Ae.map(ce=>`| ${ce.label} | ${ce.fps.toFixed(1)} ± ${ce.fpsSd.toFixed(1)} | ${(1e3/ce.fps).toFixed(2)} | ${ce.id===ze?"1.00":`${ce.ratio.toFixed(3)} ± ${ce.ratioSe.toFixed(3)}`} |`),"",`bundle: ${te.split("/").pop()} (mips off = the stock atlas: level 0 is identical) · ${R.detail}`].join(`
`);_={kind:"bitymi-interleaved-ab",version:1,scene:S,started:O,finished:new Date().toISOString(),userAgent:navigator.userAgent,adapter:{vendor:Q.vendor,architecture:Q.architecture,device:Q.device,description:Q.description},resolution:[Y,H],slice_s:o,cycles:h,variants:Ae},C("summary").value=Ue,C("results").innerHTML="<table><tr><th>variant</th><th>FPS</th><th>vs stock</th></tr>"+Ae.map(ce=>`<tr><td>${ce.label}</td><td>${ce.fps.toFixed(1)} ± ${ce.fpsSd.toFixed(1)}</td><td>${ce.id===ze?"1.00":`${ce.ratio.toFixed(3)} ± ${ce.ratioSe.toFixed(3)}`}</td></tr>`).join("")+"</table>",C("export").style.display="",J(`A/B done · ${h} cycles × ${P.length} variants`),window.__abText=Ue}catch(R){J(`A/B failed: ${R}`),console.error(R)}finally{A.destroy(),F.clearRenderSize(),F.setFov(de),oe(Se);try{await(M==null?void 0:M.release())}catch{}t.disabled=!1,C("benchall").disabled=!1,D.disabled=!1,_e=!1}}C("abrun").onclick=()=>g();const m=async(t,o)=>{try{await navigator.clipboard.writeText(t)}catch{const h=C("summary");h.value=t,h.select(),document.execCommand("copy")}J(`${o} copied`)};C("benchall").onclick=()=>a(),C("copytable").onclick=()=>{_&&m(_.kind==="bitymi-interleaved-ab"?window.__abText:p(_),"table")},C("copy").onclick=()=>{_&&m(JSON.stringify(_,null,1),"JSON")},C("download").onclick=()=>{if(!_)return;const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(_,null,1)],{type:"application/json"})),t.download=`bench_${S}_${(Q.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,t.click()};const x=()=>{r.width=Math.max(1,Math.round(r.clientWidth)),r.height=Math.max(1,Math.round(r.clientHeight)),F.on_update_canvas()};new ResizeObserver(x).observe(r),x();let e=performance.now(),u=0,i=Promise.resolve();async function c(){const t=performance.now(),o=Math.min(.1,(t-e)/1e3);if(e=t,!_e&&W&&!le){K.update(o),await i;const h=W;if(!h||_e||le){requestAnimationFrame(c);return}const f=performance.now(),b=d.createCommandEncoder();h.render(b,s.getCurrentTexture().createView(),r.width,r.height),d.queue.submit([b.finish()]),i=d.queue.onSubmittedWorkDone().then(()=>{const P=performance.now()-f;u=u?.9*u+.1*P:P,C("live").textContent=`${(1e3/u).toFixed(0)} FPS live (${r.width}×${r.height}, vsync-capped)`})}requestAnimationFrame(c)}requestAnimationFrame(c),ue.style.display="",D.value="bitymi",le=!0;try{await ye(je[0])}catch(t){J(`load failed: ${t}`),console.error(t)}finally{le=!1}}(async()=>{const r=w=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${w}</p>`)};if(navigator.gpu===void 0)return r("WebGPU is not supported in this browser.");const s=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(s===null)return r("No WebGPU adapter available.");const d=[];for(const w of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])s.features.has(w)&&d.push(w);if(s.limits.maxStorageBuffersPerShaderStage<10)return r(`This GPU exposes ${s.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const v=await s.requestDevice({requiredFeatures:d,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:s.limits.maxComputeWorkgroupStorageSize,maxBufferSize:s.limits.maxBufferSize,maxStorageBufferBindingSize:s.limits.maxStorageBufferBindingSize}});v.lost.then(w=>r(`GPU device lost: ${w.message}`)),v.addEventListener("uncapturederror",w=>{var S;return console.error("[bench] WebGPU error:",((S=w.error)==null?void 0:S.message)??w.error)});const y=document.querySelector("#webgpu-canvas");await Ss(y,y.getContext("webgpu"),v,s,d)})();
