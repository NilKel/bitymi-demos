var Un=Object.defineProperty;var In=(n,l,m)=>l in n?Un(n,l,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[l]=m;var z=(n,l,m)=>(In(n,typeof l!="symbol"?l+"":l,m),m);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))S(y);new MutationObserver(y=>{for(const v of y)if(v.type==="childList")for(const B of v.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&S(B)}).observe(document,{childList:!0,subtree:!0});function m(y){const v={};return y.integrity&&(v.integrity=y.integrity),y.referrerPolicy&&(v.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?v.credentials="include":y.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function S(y){if(y.ep)return;y.ep=!0;const v=m(y);fetch(y.href,v)}})();function Rn(n,l){return class extends n{constructor(...m){super(...m),l(this)}}}const On=Rn(Array,n=>n.fill(0));let le=1e-6;function Ln(n){function l(_=0,w=0){const g=new n(2);return _!==void 0&&(g[0]=_,w!==void 0&&(g[1]=w)),g}const m=l;function S(_,w,g){const e=g??new n(2);return e[0]=_,e[1]=w,e}function y(_,w){const g=w??new n(2);return g[0]=Math.ceil(_[0]),g[1]=Math.ceil(_[1]),g}function v(_,w){const g=w??new n(2);return g[0]=Math.floor(_[0]),g[1]=Math.floor(_[1]),g}function B(_,w){const g=w??new n(2);return g[0]=Math.round(_[0]),g[1]=Math.round(_[1]),g}function P(_,w=0,g=1,e){const u=e??new n(2);return u[0]=Math.min(g,Math.max(w,_[0])),u[1]=Math.min(g,Math.max(w,_[1])),u}function k(_,w,g){const e=g??new n(2);return e[0]=_[0]+w[0],e[1]=_[1]+w[1],e}function G(_,w,g,e){const u=e??new n(2);return u[0]=_[0]+w[0]*g,u[1]=_[1]+w[1]*g,u}function L(_,w){const g=_[0],e=_[1],u=w[0],r=w[1],a=Math.sqrt(g*g+e*e),s=Math.sqrt(u*u+r*r),c=a*s,h=c&&O(_,w)/c;return Math.acos(h)}function Z(_,w,g){const e=g??new n(2);return e[0]=_[0]-w[0],e[1]=_[1]-w[1],e}const A=Z;function F(_,w){return Math.abs(_[0]-w[0])<le&&Math.abs(_[1]-w[1])<le}function te(_,w){return _[0]===w[0]&&_[1]===w[1]}function oe(_,w,g,e){const u=e??new n(2);return u[0]=_[0]+g*(w[0]-_[0]),u[1]=_[1]+g*(w[1]-_[1]),u}function ne(_,w,g,e){const u=e??new n(2);return u[0]=_[0]+g[0]*(w[0]-_[0]),u[1]=_[1]+g[1]*(w[1]-_[1]),u}function re(_,w,g){const e=g??new n(2);return e[0]=Math.max(_[0],w[0]),e[1]=Math.max(_[1],w[1]),e}function ie(_,w,g){const e=g??new n(2);return e[0]=Math.min(_[0],w[0]),e[1]=Math.min(_[1],w[1]),e}function N(_,w,g){const e=g??new n(2);return e[0]=_[0]*w,e[1]=_[1]*w,e}const J=N;function $(_,w,g){const e=g??new n(2);return e[0]=_[0]/w,e[1]=_[1]/w,e}function W(_,w){const g=w??new n(2);return g[0]=1/_[0],g[1]=1/_[1],g}const Y=W;function q(_,w,g){const e=g??new n(3),u=_[0]*w[1]-_[1]*w[0];return e[0]=0,e[1]=0,e[2]=u,e}function O(_,w){return _[0]*w[0]+_[1]*w[1]}function ae(_){const w=_[0],g=_[1];return Math.sqrt(w*w+g*g)}const D=ae;function _e(_){const w=_[0],g=_[1];return w*w+g*g}const fe=_e;function X(_,w){const g=_[0]-w[0],e=_[1]-w[1];return Math.sqrt(g*g+e*e)}const C=X;function K(_,w){const g=_[0]-w[0],e=_[1]-w[1];return g*g+e*e}const ee=K;function ge(_,w){const g=w??new n(2),e=_[0],u=_[1],r=Math.sqrt(e*e+u*u);return r>1e-5?(g[0]=e/r,g[1]=u/r):(g[0]=0,g[1]=0),g}function ye(_,w){const g=w??new n(2);return g[0]=-_[0],g[1]=-_[1],g}function ue(_,w){const g=w??new n(2);return g[0]=_[0],g[1]=_[1],g}const Ee=ue;function me(_,w,g){const e=g??new n(2);return e[0]=_[0]*w[0],e[1]=_[1]*w[1],e}const be=me;function Q(_,w,g){const e=g??new n(2);return e[0]=_[0]/w[0],e[1]=_[1]/w[1],e}const de=Q;function xe(_=1,w){const g=w??new n(2),e=Math.random()*2*Math.PI;return g[0]=Math.cos(e)*_,g[1]=Math.sin(e)*_,g}function b(_){const w=_??new n(2);return w[0]=0,w[1]=0,w}function E(_,w,g){const e=g??new n(2),u=_[0],r=_[1];return e[0]=u*w[0]+r*w[4]+w[12],e[1]=u*w[1]+r*w[5]+w[13],e}function f(_,w,g){const e=g??new n(2),u=_[0],r=_[1];return e[0]=w[0]*u+w[4]*r+w[8],e[1]=w[1]*u+w[5]*r+w[9],e}function t(_,w,g,e){const u=e??new n(2),r=_[0]-w[0],a=_[1]-w[1],s=Math.sin(g),c=Math.cos(g);return u[0]=r*c-a*s+w[0],u[1]=r*s+a*c+w[1],u}function o(_,w,g){const e=g??new n(2);return ge(_,e),N(e,w,e)}function i(_,w,g){const e=g??new n(2);return ae(_)>w?o(_,w,e):ue(_,e)}function d(_,w,g){const e=g??new n(2);return oe(_,w,.5,e)}return{create:l,fromValues:m,set:S,ceil:y,floor:v,round:B,clamp:P,add:k,addScaled:G,angle:L,subtract:Z,sub:A,equalsApproximately:F,equals:te,lerp:oe,lerpV:ne,max:re,min:ie,mulScalar:N,scale:J,divScalar:$,inverse:W,invert:Y,cross:q,dot:O,length:ae,len:D,lengthSq:_e,lenSq:fe,distance:X,dist:C,distanceSq:K,distSq:ee,normalize:ge,negate:ye,copy:ue,clone:Ee,multiply:me,mul:be,divide:Q,div:de,random:xe,zero:b,transformMat4:E,transformMat3:f,rotate:t,setLength:o,truncate:i,midpoint:d}}const Ht=new Map;function bn(n){let l=Ht.get(n);return l||(l=Ln(n),Ht.set(n,l)),l}function Fn(n){function l(s,c,h){const p=new n(3);return s!==void 0&&(p[0]=s,c!==void 0&&(p[1]=c,h!==void 0&&(p[2]=h))),p}const m=l;function S(s,c,h,p){const x=p??new n(3);return x[0]=s,x[1]=c,x[2]=h,x}function y(s,c){const h=c??new n(3);return h[0]=Math.ceil(s[0]),h[1]=Math.ceil(s[1]),h[2]=Math.ceil(s[2]),h}function v(s,c){const h=c??new n(3);return h[0]=Math.floor(s[0]),h[1]=Math.floor(s[1]),h[2]=Math.floor(s[2]),h}function B(s,c){const h=c??new n(3);return h[0]=Math.round(s[0]),h[1]=Math.round(s[1]),h[2]=Math.round(s[2]),h}function P(s,c=0,h=1,p){const x=p??new n(3);return x[0]=Math.min(h,Math.max(c,s[0])),x[1]=Math.min(h,Math.max(c,s[1])),x[2]=Math.min(h,Math.max(c,s[2])),x}function k(s,c,h){const p=h??new n(3);return p[0]=s[0]+c[0],p[1]=s[1]+c[1],p[2]=s[2]+c[2],p}function G(s,c,h,p){const x=p??new n(3);return x[0]=s[0]+c[0]*h,x[1]=s[1]+c[1]*h,x[2]=s[2]+c[2]*h,x}function L(s,c){const h=s[0],p=s[1],x=s[2],T=c[0],M=c[1],R=c[2],U=Math.sqrt(h*h+p*p+x*x),I=Math.sqrt(T*T+M*M+R*R),V=U*I,se=V&&O(s,c)/V;return Math.acos(se)}function Z(s,c,h){const p=h??new n(3);return p[0]=s[0]-c[0],p[1]=s[1]-c[1],p[2]=s[2]-c[2],p}const A=Z;function F(s,c){return Math.abs(s[0]-c[0])<le&&Math.abs(s[1]-c[1])<le&&Math.abs(s[2]-c[2])<le}function te(s,c){return s[0]===c[0]&&s[1]===c[1]&&s[2]===c[2]}function oe(s,c,h,p){const x=p??new n(3);return x[0]=s[0]+h*(c[0]-s[0]),x[1]=s[1]+h*(c[1]-s[1]),x[2]=s[2]+h*(c[2]-s[2]),x}function ne(s,c,h,p){const x=p??new n(3);return x[0]=s[0]+h[0]*(c[0]-s[0]),x[1]=s[1]+h[1]*(c[1]-s[1]),x[2]=s[2]+h[2]*(c[2]-s[2]),x}function re(s,c,h){const p=h??new n(3);return p[0]=Math.max(s[0],c[0]),p[1]=Math.max(s[1],c[1]),p[2]=Math.max(s[2],c[2]),p}function ie(s,c,h){const p=h??new n(3);return p[0]=Math.min(s[0],c[0]),p[1]=Math.min(s[1],c[1]),p[2]=Math.min(s[2],c[2]),p}function N(s,c,h){const p=h??new n(3);return p[0]=s[0]*c,p[1]=s[1]*c,p[2]=s[2]*c,p}const J=N;function $(s,c,h){const p=h??new n(3);return p[0]=s[0]/c,p[1]=s[1]/c,p[2]=s[2]/c,p}function W(s,c){const h=c??new n(3);return h[0]=1/s[0],h[1]=1/s[1],h[2]=1/s[2],h}const Y=W;function q(s,c,h){const p=h??new n(3),x=s[2]*c[0]-s[0]*c[2],T=s[0]*c[1]-s[1]*c[0];return p[0]=s[1]*c[2]-s[2]*c[1],p[1]=x,p[2]=T,p}function O(s,c){return s[0]*c[0]+s[1]*c[1]+s[2]*c[2]}function ae(s){const c=s[0],h=s[1],p=s[2];return Math.sqrt(c*c+h*h+p*p)}const D=ae;function _e(s){const c=s[0],h=s[1],p=s[2];return c*c+h*h+p*p}const fe=_e;function X(s,c){const h=s[0]-c[0],p=s[1]-c[1],x=s[2]-c[2];return Math.sqrt(h*h+p*p+x*x)}const C=X;function K(s,c){const h=s[0]-c[0],p=s[1]-c[1],x=s[2]-c[2];return h*h+p*p+x*x}const ee=K;function ge(s,c){const h=c??new n(3),p=s[0],x=s[1],T=s[2],M=Math.sqrt(p*p+x*x+T*T);return M>1e-5?(h[0]=p/M,h[1]=x/M,h[2]=T/M):(h[0]=0,h[1]=0,h[2]=0),h}function ye(s,c){const h=c??new n(3);return h[0]=-s[0],h[1]=-s[1],h[2]=-s[2],h}function ue(s,c){const h=c??new n(3);return h[0]=s[0],h[1]=s[1],h[2]=s[2],h}const Ee=ue;function me(s,c,h){const p=h??new n(3);return p[0]=s[0]*c[0],p[1]=s[1]*c[1],p[2]=s[2]*c[2],p}const be=me;function Q(s,c,h){const p=h??new n(3);return p[0]=s[0]/c[0],p[1]=s[1]/c[1],p[2]=s[2]/c[2],p}const de=Q;function xe(s=1,c){const h=c??new n(3),p=Math.random()*2*Math.PI,x=Math.random()*2-1,T=Math.sqrt(1-x*x)*s;return h[0]=Math.cos(p)*T,h[1]=Math.sin(p)*T,h[2]=x*s,h}function b(s){const c=s??new n(3);return c[0]=0,c[1]=0,c[2]=0,c}function E(s,c,h){const p=h??new n(3),x=s[0],T=s[1],M=s[2],R=c[3]*x+c[7]*T+c[11]*M+c[15]||1;return p[0]=(c[0]*x+c[4]*T+c[8]*M+c[12])/R,p[1]=(c[1]*x+c[5]*T+c[9]*M+c[13])/R,p[2]=(c[2]*x+c[6]*T+c[10]*M+c[14])/R,p}function f(s,c,h){const p=h??new n(3),x=s[0],T=s[1],M=s[2];return p[0]=x*c[0*4+0]+T*c[1*4+0]+M*c[2*4+0],p[1]=x*c[0*4+1]+T*c[1*4+1]+M*c[2*4+1],p[2]=x*c[0*4+2]+T*c[1*4+2]+M*c[2*4+2],p}function t(s,c,h){const p=h??new n(3),x=s[0],T=s[1],M=s[2];return p[0]=x*c[0]+T*c[4]+M*c[8],p[1]=x*c[1]+T*c[5]+M*c[9],p[2]=x*c[2]+T*c[6]+M*c[10],p}function o(s,c,h){const p=h??new n(3),x=c[0],T=c[1],M=c[2],R=c[3]*2,U=s[0],I=s[1],V=s[2],se=T*V-M*I,j=M*U-x*V,H=x*I-T*U;return p[0]=U+se*R+(T*H-M*j)*2,p[1]=I+j*R+(M*se-x*H)*2,p[2]=V+H*R+(x*j-T*se)*2,p}function i(s,c){const h=c??new n(3);return h[0]=s[12],h[1]=s[13],h[2]=s[14],h}function d(s,c,h){const p=h??new n(3),x=c*4;return p[0]=s[x+0],p[1]=s[x+1],p[2]=s[x+2],p}function _(s,c){const h=c??new n(3),p=s[0],x=s[1],T=s[2],M=s[4],R=s[5],U=s[6],I=s[8],V=s[9],se=s[10];return h[0]=Math.sqrt(p*p+x*x+T*T),h[1]=Math.sqrt(M*M+R*R+U*U),h[2]=Math.sqrt(I*I+V*V+se*se),h}function w(s,c,h,p){const x=p??new n(3),T=[],M=[];return T[0]=s[0]-c[0],T[1]=s[1]-c[1],T[2]=s[2]-c[2],M[0]=T[0],M[1]=T[1]*Math.cos(h)-T[2]*Math.sin(h),M[2]=T[1]*Math.sin(h)+T[2]*Math.cos(h),x[0]=M[0]+c[0],x[1]=M[1]+c[1],x[2]=M[2]+c[2],x}function g(s,c,h,p){const x=p??new n(3),T=[],M=[];return T[0]=s[0]-c[0],T[1]=s[1]-c[1],T[2]=s[2]-c[2],M[0]=T[2]*Math.sin(h)+T[0]*Math.cos(h),M[1]=T[1],M[2]=T[2]*Math.cos(h)-T[0]*Math.sin(h),x[0]=M[0]+c[0],x[1]=M[1]+c[1],x[2]=M[2]+c[2],x}function e(s,c,h,p){const x=p??new n(3),T=[],M=[];return T[0]=s[0]-c[0],T[1]=s[1]-c[1],T[2]=s[2]-c[2],M[0]=T[0]*Math.cos(h)-T[1]*Math.sin(h),M[1]=T[0]*Math.sin(h)+T[1]*Math.cos(h),M[2]=T[2],x[0]=M[0]+c[0],x[1]=M[1]+c[1],x[2]=M[2]+c[2],x}function u(s,c,h){const p=h??new n(3);return ge(s,p),N(p,c,p)}function r(s,c,h){const p=h??new n(3);return ae(s)>c?u(s,c,p):ue(s,p)}function a(s,c,h){const p=h??new n(3);return oe(s,c,.5,p)}return{create:l,fromValues:m,set:S,ceil:y,floor:v,round:B,clamp:P,add:k,addScaled:G,angle:L,subtract:Z,sub:A,equalsApproximately:F,equals:te,lerp:oe,lerpV:ne,max:re,min:ie,mulScalar:N,scale:J,divScalar:$,inverse:W,invert:Y,cross:q,dot:O,length:ae,len:D,lengthSq:_e,lenSq:fe,distance:X,dist:C,distanceSq:K,distSq:ee,normalize:ge,negate:ye,copy:ue,clone:Ee,multiply:me,mul:be,divide:Q,div:de,random:xe,zero:b,transformMat4:E,transformMat4Upper3x3:f,transformMat3:t,transformQuat:o,getTranslation:i,getAxis:d,getScaling:_,rotateX:w,rotateY:g,rotateZ:e,setLength:u,truncate:r,midpoint:a}}const Jt=new Map;function Pt(n){let l=Jt.get(n);return l||(l=Fn(n),Jt.set(n,l)),l}function Wn(n){const l=bn(n),m=Pt(n);function S(t,o,i,d,_,w,g,e,u){const r=new n(12);return r[3]=0,r[7]=0,r[11]=0,t!==void 0&&(r[0]=t,o!==void 0&&(r[1]=o,i!==void 0&&(r[2]=i,d!==void 0&&(r[4]=d,_!==void 0&&(r[5]=_,w!==void 0&&(r[6]=w,g!==void 0&&(r[8]=g,e!==void 0&&(r[9]=e,u!==void 0&&(r[10]=u))))))))),r}function y(t,o,i,d,_,w,g,e,u,r){const a=r??new n(12);return a[0]=t,a[1]=o,a[2]=i,a[3]=0,a[4]=d,a[5]=_,a[6]=w,a[7]=0,a[8]=g,a[9]=e,a[10]=u,a[11]=0,a}function v(t,o){const i=o??new n(12);return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=0,i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=0,i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=0,i}function B(t,o){const i=o??new n(12),d=t[0],_=t[1],w=t[2],g=t[3],e=d+d,u=_+_,r=w+w,a=d*e,s=_*e,c=_*u,h=w*e,p=w*u,x=w*r,T=g*e,M=g*u,R=g*r;return i[0]=1-c-x,i[1]=s+R,i[2]=h-M,i[3]=0,i[4]=s-R,i[5]=1-a-x,i[6]=p+T,i[7]=0,i[8]=h+M,i[9]=p-T,i[10]=1-a-c,i[11]=0,i}function P(t,o){const i=o??new n(12);return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i[4]=-t[4],i[5]=-t[5],i[6]=-t[6],i[8]=-t[8],i[9]=-t[9],i[10]=-t[10],i}function k(t,o,i){const d=i??new n(12);return d[0]=t[0]*o,d[1]=t[1]*o,d[2]=t[2]*o,d[4]=t[4]*o,d[5]=t[5]*o,d[6]=t[6]*o,d[8]=t[8]*o,d[9]=t[9]*o,d[10]=t[10]*o,d}const G=k;function L(t,o,i){const d=i??new n(12);return d[0]=t[0]+o[0],d[1]=t[1]+o[1],d[2]=t[2]+o[2],d[4]=t[4]+o[4],d[5]=t[5]+o[5],d[6]=t[6]+o[6],d[8]=t[8]+o[8],d[9]=t[9]+o[9],d[10]=t[10]+o[10],d}function Z(t,o){const i=o??new n(12);return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[8]=t[8],i[9]=t[9],i[10]=t[10],i}const A=Z;function F(t,o){return Math.abs(t[0]-o[0])<le&&Math.abs(t[1]-o[1])<le&&Math.abs(t[2]-o[2])<le&&Math.abs(t[4]-o[4])<le&&Math.abs(t[5]-o[5])<le&&Math.abs(t[6]-o[6])<le&&Math.abs(t[8]-o[8])<le&&Math.abs(t[9]-o[9])<le&&Math.abs(t[10]-o[10])<le}function te(t,o){return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]&&t[4]===o[4]&&t[5]===o[5]&&t[6]===o[6]&&t[8]===o[8]&&t[9]===o[9]&&t[10]===o[10]}function oe(t){const o=t??new n(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function ne(t,o){const i=o??new n(12);if(i===t){let c;return c=t[1],t[1]=t[4],t[4]=c,c=t[2],t[2]=t[8],t[8]=c,c=t[6],t[6]=t[9],t[9]=c,i}const d=t[0*4+0],_=t[0*4+1],w=t[0*4+2],g=t[1*4+0],e=t[1*4+1],u=t[1*4+2],r=t[2*4+0],a=t[2*4+1],s=t[2*4+2];return i[0]=d,i[1]=g,i[2]=r,i[4]=_,i[5]=e,i[6]=a,i[8]=w,i[9]=u,i[10]=s,i}function re(t,o){const i=o??new n(12),d=t[0*4+0],_=t[0*4+1],w=t[0*4+2],g=t[1*4+0],e=t[1*4+1],u=t[1*4+2],r=t[2*4+0],a=t[2*4+1],s=t[2*4+2],c=s*e-u*a,h=-s*g+u*r,p=a*g-e*r,x=1/(d*c+_*h+w*p);return i[0]=c*x,i[1]=(-s*_+w*a)*x,i[2]=(u*_-w*e)*x,i[4]=h*x,i[5]=(s*d-w*r)*x,i[6]=(-u*d+w*g)*x,i[8]=p*x,i[9]=(-a*d+_*r)*x,i[10]=(e*d-_*g)*x,i}function ie(t){const o=t[0],i=t[0*4+1],d=t[0*4+2],_=t[1*4+0],w=t[1*4+1],g=t[1*4+2],e=t[2*4+0],u=t[2*4+1],r=t[2*4+2];return o*(w*r-u*g)-_*(i*r-u*d)+e*(i*g-w*d)}const N=re;function J(t,o,i){const d=i??new n(12),_=t[0],w=t[1],g=t[2],e=t[4+0],u=t[4+1],r=t[4+2],a=t[8+0],s=t[8+1],c=t[8+2],h=o[0],p=o[1],x=o[2],T=o[4+0],M=o[4+1],R=o[4+2],U=o[8+0],I=o[8+1],V=o[8+2];return d[0]=_*h+e*p+a*x,d[1]=w*h+u*p+s*x,d[2]=g*h+r*p+c*x,d[4]=_*T+e*M+a*R,d[5]=w*T+u*M+s*R,d[6]=g*T+r*M+c*R,d[8]=_*U+e*I+a*V,d[9]=w*U+u*I+s*V,d[10]=g*U+r*I+c*V,d}const $=J;function W(t,o,i){const d=i??oe();return t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2],d[4]=t[4],d[5]=t[5],d[6]=t[6]),d[8]=o[0],d[9]=o[1],d[10]=1,d}function Y(t,o){const i=o??l.create();return i[0]=t[8],i[1]=t[9],i}function q(t,o,i){const d=i??l.create(),_=o*4;return d[0]=t[_+0],d[1]=t[_+1],d}function O(t,o,i,d){const _=d===t?t:Z(t,d),w=i*4;return _[w+0]=o[0],_[w+1]=o[1],_}function ae(t,o){const i=o??l.create(),d=t[0],_=t[1],w=t[4],g=t[5];return i[0]=Math.sqrt(d*d+_*_),i[1]=Math.sqrt(w*w+g*g),i}function D(t,o){const i=o??m.create(),d=t[0],_=t[1],w=t[2],g=t[4],e=t[5],u=t[6],r=t[8],a=t[9],s=t[10];return i[0]=Math.sqrt(d*d+_*_+w*w),i[1]=Math.sqrt(g*g+e*e+u*u),i[2]=Math.sqrt(r*r+a*a+s*s),i}function _e(t,o){const i=o??new n(12);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=1,i[6]=0,i[8]=t[0],i[9]=t[1],i[10]=1,i}function fe(t,o,i){const d=i??new n(12),_=o[0],w=o[1],g=t[0],e=t[1],u=t[2],r=t[1*4+0],a=t[1*4+1],s=t[1*4+2],c=t[2*4+0],h=t[2*4+1],p=t[2*4+2];return t!==d&&(d[0]=g,d[1]=e,d[2]=u,d[4]=r,d[5]=a,d[6]=s),d[8]=g*_+r*w+c,d[9]=e*_+a*w+h,d[10]=u*_+s*w+p,d}function X(t,o){const i=o??new n(12),d=Math.cos(t),_=Math.sin(t);return i[0]=d,i[1]=_,i[2]=0,i[4]=-_,i[5]=d,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function C(t,o,i){const d=i??new n(12),_=t[0*4+0],w=t[0*4+1],g=t[0*4+2],e=t[1*4+0],u=t[1*4+1],r=t[1*4+2],a=Math.cos(o),s=Math.sin(o);return d[0]=a*_+s*e,d[1]=a*w+s*u,d[2]=a*g+s*r,d[4]=a*e-s*_,d[5]=a*u-s*w,d[6]=a*r-s*g,t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function K(t,o){const i=o??new n(12),d=Math.cos(t),_=Math.sin(t);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=d,i[6]=_,i[8]=0,i[9]=-_,i[10]=d,i}function ee(t,o,i){const d=i??new n(12),_=t[4],w=t[5],g=t[6],e=t[8],u=t[9],r=t[10],a=Math.cos(o),s=Math.sin(o);return d[4]=a*_+s*e,d[5]=a*w+s*u,d[6]=a*g+s*r,d[8]=a*e-s*_,d[9]=a*u-s*w,d[10]=a*r-s*g,t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2]),d}function ge(t,o){const i=o??new n(12),d=Math.cos(t),_=Math.sin(t);return i[0]=d,i[1]=0,i[2]=-_,i[4]=0,i[5]=1,i[6]=0,i[8]=_,i[9]=0,i[10]=d,i}function ye(t,o,i){const d=i??new n(12),_=t[0*4+0],w=t[0*4+1],g=t[0*4+2],e=t[2*4+0],u=t[2*4+1],r=t[2*4+2],a=Math.cos(o),s=Math.sin(o);return d[0]=a*_-s*e,d[1]=a*w-s*u,d[2]=a*g-s*r,d[8]=a*e+s*_,d[9]=a*u+s*w,d[10]=a*r+s*g,t!==d&&(d[4]=t[4],d[5]=t[5],d[6]=t[6]),d}const ue=X,Ee=C;function me(t,o){const i=o??new n(12);return i[0]=t[0],i[1]=0,i[2]=0,i[4]=0,i[5]=t[1],i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function be(t,o,i){const d=i??new n(12),_=o[0],w=o[1];return d[0]=_*t[0*4+0],d[1]=_*t[0*4+1],d[2]=_*t[0*4+2],d[4]=w*t[1*4+0],d[5]=w*t[1*4+1],d[6]=w*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function Q(t,o){const i=o??new n(12);return i[0]=t[0],i[1]=0,i[2]=0,i[4]=0,i[5]=t[1],i[6]=0,i[8]=0,i[9]=0,i[10]=t[2],i}function de(t,o,i){const d=i??new n(12),_=o[0],w=o[1],g=o[2];return d[0]=_*t[0*4+0],d[1]=_*t[0*4+1],d[2]=_*t[0*4+2],d[4]=w*t[1*4+0],d[5]=w*t[1*4+1],d[6]=w*t[1*4+2],d[8]=g*t[2*4+0],d[9]=g*t[2*4+1],d[10]=g*t[2*4+2],d}function xe(t,o){const i=o??new n(12);return i[0]=t,i[1]=0,i[2]=0,i[4]=0,i[5]=t,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function b(t,o,i){const d=i??new n(12);return d[0]=o*t[0*4+0],d[1]=o*t[0*4+1],d[2]=o*t[0*4+2],d[4]=o*t[1*4+0],d[5]=o*t[1*4+1],d[6]=o*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function E(t,o){const i=o??new n(12);return i[0]=t,i[1]=0,i[2]=0,i[4]=0,i[5]=t,i[6]=0,i[8]=0,i[9]=0,i[10]=t,i}function f(t,o,i){const d=i??new n(12);return d[0]=o*t[0*4+0],d[1]=o*t[0*4+1],d[2]=o*t[0*4+2],d[4]=o*t[1*4+0],d[5]=o*t[1*4+1],d[6]=o*t[1*4+2],d[8]=o*t[2*4+0],d[9]=o*t[2*4+1],d[10]=o*t[2*4+2],d}return{add:L,clone:A,copy:Z,create:S,determinant:ie,equals:te,equalsApproximately:F,fromMat4:v,fromQuat:B,get3DScaling:D,getAxis:q,getScaling:ae,getTranslation:Y,identity:oe,inverse:re,invert:N,mul:$,mulScalar:G,multiply:J,multiplyScalar:k,negate:P,rotate:C,rotateX:ee,rotateY:ye,rotateZ:Ee,rotation:X,rotationX:K,rotationY:ge,rotationZ:ue,scale:be,scale3D:de,scaling:me,scaling3D:Q,set:y,setAxis:O,setTranslation:W,translate:fe,translation:_e,transpose:ne,uniformScale:b,uniformScale3D:f,uniformScaling:xe,uniformScaling3D:E}}const Qt=new Map;function Cn(n){let l=Qt.get(n);return l||(l=Wn(n),Qt.set(n,l)),l}function qn(n){const l=Pt(n);function m(e,u,r,a,s,c,h,p,x,T,M,R,U,I,V,se){const j=new n(16);return e!==void 0&&(j[0]=e,u!==void 0&&(j[1]=u,r!==void 0&&(j[2]=r,a!==void 0&&(j[3]=a,s!==void 0&&(j[4]=s,c!==void 0&&(j[5]=c,h!==void 0&&(j[6]=h,p!==void 0&&(j[7]=p,x!==void 0&&(j[8]=x,T!==void 0&&(j[9]=T,M!==void 0&&(j[10]=M,R!==void 0&&(j[11]=R,U!==void 0&&(j[12]=U,I!==void 0&&(j[13]=I,V!==void 0&&(j[14]=V,se!==void 0&&(j[15]=se)))))))))))))))),j}function S(e,u,r,a,s,c,h,p,x,T,M,R,U,I,V,se,j){const H=j??new n(16);return H[0]=e,H[1]=u,H[2]=r,H[3]=a,H[4]=s,H[5]=c,H[6]=h,H[7]=p,H[8]=x,H[9]=T,H[10]=M,H[11]=R,H[12]=U,H[13]=I,H[14]=V,H[15]=se,H}function y(e,u){const r=u??new n(16);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=0,r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=0,r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function v(e,u){const r=u??new n(16),a=e[0],s=e[1],c=e[2],h=e[3],p=a+a,x=s+s,T=c+c,M=a*p,R=s*p,U=s*x,I=c*p,V=c*x,se=c*T,j=h*p,H=h*x,he=h*T;return r[0]=1-U-se,r[1]=R+he,r[2]=I-H,r[3]=0,r[4]=R-he,r[5]=1-M-se,r[6]=V+j,r[7]=0,r[8]=I+H,r[9]=V-j,r[10]=1-M-U,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function B(e,u){const r=u??new n(16);return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r[4]=-e[4],r[5]=-e[5],r[6]=-e[6],r[7]=-e[7],r[8]=-e[8],r[9]=-e[9],r[10]=-e[10],r[11]=-e[11],r[12]=-e[12],r[13]=-e[13],r[14]=-e[14],r[15]=-e[15],r}function P(e,u,r){const a=r??new n(16);return a[0]=e[0]+u[0],a[1]=e[1]+u[1],a[2]=e[2]+u[2],a[3]=e[3]+u[3],a[4]=e[4]+u[4],a[5]=e[5]+u[5],a[6]=e[6]+u[6],a[7]=e[7]+u[7],a[8]=e[8]+u[8],a[9]=e[9]+u[9],a[10]=e[10]+u[10],a[11]=e[11]+u[11],a[12]=e[12]+u[12],a[13]=e[13]+u[13],a[14]=e[14]+u[14],a[15]=e[15]+u[15],a}function k(e,u,r){const a=r??new n(16);return a[0]=e[0]*u,a[1]=e[1]*u,a[2]=e[2]*u,a[3]=e[3]*u,a[4]=e[4]*u,a[5]=e[5]*u,a[6]=e[6]*u,a[7]=e[7]*u,a[8]=e[8]*u,a[9]=e[9]*u,a[10]=e[10]*u,a[11]=e[11]*u,a[12]=e[12]*u,a[13]=e[13]*u,a[14]=e[14]*u,a[15]=e[15]*u,a}const G=k;function L(e,u){const r=u??new n(16);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}const Z=L;function A(e,u){return Math.abs(e[0]-u[0])<le&&Math.abs(e[1]-u[1])<le&&Math.abs(e[2]-u[2])<le&&Math.abs(e[3]-u[3])<le&&Math.abs(e[4]-u[4])<le&&Math.abs(e[5]-u[5])<le&&Math.abs(e[6]-u[6])<le&&Math.abs(e[7]-u[7])<le&&Math.abs(e[8]-u[8])<le&&Math.abs(e[9]-u[9])<le&&Math.abs(e[10]-u[10])<le&&Math.abs(e[11]-u[11])<le&&Math.abs(e[12]-u[12])<le&&Math.abs(e[13]-u[13])<le&&Math.abs(e[14]-u[14])<le&&Math.abs(e[15]-u[15])<le}function F(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function te(e){const u=e??new n(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function oe(e,u){const r=u??new n(16);if(r===e){let pe;return pe=e[1],e[1]=e[4],e[4]=pe,pe=e[2],e[2]=e[8],e[8]=pe,pe=e[3],e[3]=e[12],e[12]=pe,pe=e[6],e[6]=e[9],e[9]=pe,pe=e[7],e[7]=e[13],e[13]=pe,pe=e[11],e[11]=e[14],e[14]=pe,r}const a=e[0*4+0],s=e[0*4+1],c=e[0*4+2],h=e[0*4+3],p=e[1*4+0],x=e[1*4+1],T=e[1*4+2],M=e[1*4+3],R=e[2*4+0],U=e[2*4+1],I=e[2*4+2],V=e[2*4+3],se=e[3*4+0],j=e[3*4+1],H=e[3*4+2],he=e[3*4+3];return r[0]=a,r[1]=p,r[2]=R,r[3]=se,r[4]=s,r[5]=x,r[6]=U,r[7]=j,r[8]=c,r[9]=T,r[10]=I,r[11]=H,r[12]=h,r[13]=M,r[14]=V,r[15]=he,r}function ne(e,u){const r=u??new n(16),a=e[0*4+0],s=e[0*4+1],c=e[0*4+2],h=e[0*4+3],p=e[1*4+0],x=e[1*4+1],T=e[1*4+2],M=e[1*4+3],R=e[2*4+0],U=e[2*4+1],I=e[2*4+2],V=e[2*4+3],se=e[3*4+0],j=e[3*4+1],H=e[3*4+2],he=e[3*4+3],pe=I*he,Se=H*V,Be=T*he,Te=H*M,Me=T*V,Pe=I*M,Ae=c*he,Ge=H*h,De=c*V,ze=I*h,Re=c*M,Oe=T*h,Le=R*j,Fe=se*U,Ne=p*j,$e=se*x,Ze=p*U,dt=R*x,ft=a*j,pt=se*s,_t=a*U,ht=R*s,gt=a*x,wt=p*s,Yt=pe*x+Te*U+Me*j-(Se*x+Be*U+Pe*j),Kt=Se*s+Ae*U+ze*j-(pe*s+Ge*U+De*j),Vt=Be*s+Ge*x+Re*j-(Te*s+Ae*x+Oe*j),jt=Pe*s+De*x+Oe*U-(Me*s+ze*x+Re*U),Ue=1/(a*Yt+p*Kt+R*Vt+se*jt);return r[0]=Ue*Yt,r[1]=Ue*Kt,r[2]=Ue*Vt,r[3]=Ue*jt,r[4]=Ue*(Se*p+Be*R+Pe*se-(pe*p+Te*R+Me*se)),r[5]=Ue*(pe*a+Ge*R+De*se-(Se*a+Ae*R+ze*se)),r[6]=Ue*(Te*a+Ae*p+Oe*se-(Be*a+Ge*p+Re*se)),r[7]=Ue*(Me*a+ze*p+Re*R-(Pe*a+De*p+Oe*R)),r[8]=Ue*(Le*M+$e*V+Ze*he-(Fe*M+Ne*V+dt*he)),r[9]=Ue*(Fe*h+ft*V+ht*he-(Le*h+pt*V+_t*he)),r[10]=Ue*(Ne*h+pt*M+gt*he-($e*h+ft*M+wt*he)),r[11]=Ue*(dt*h+_t*M+wt*V-(Ze*h+ht*M+gt*V)),r[12]=Ue*(Ne*I+dt*H+Fe*T-(Ze*H+Le*T+$e*I)),r[13]=Ue*(_t*H+Le*c+pt*I-(ft*I+ht*H+Fe*c)),r[14]=Ue*(ft*T+wt*H+$e*c-(gt*H+Ne*c+pt*T)),r[15]=Ue*(gt*I+Ze*c+ht*T-(_t*T+wt*I+dt*c)),r}function re(e){const u=e[0],r=e[0*4+1],a=e[0*4+2],s=e[0*4+3],c=e[1*4+0],h=e[1*4+1],p=e[1*4+2],x=e[1*4+3],T=e[2*4+0],M=e[2*4+1],R=e[2*4+2],U=e[2*4+3],I=e[3*4+0],V=e[3*4+1],se=e[3*4+2],j=e[3*4+3],H=R*j,he=se*U,pe=p*j,Se=se*x,Be=p*U,Te=R*x,Me=a*j,Pe=se*s,Ae=a*U,Ge=R*s,De=a*x,ze=p*s,Re=H*h+Se*M+Be*V-(he*h+pe*M+Te*V),Oe=he*r+Me*M+Ge*V-(H*r+Pe*M+Ae*V),Le=pe*r+Pe*h+De*V-(Se*r+Me*h+ze*V),Fe=Te*r+Ae*h+ze*M-(Be*r+Ge*h+De*M);return u*Re+c*Oe+T*Le+I*Fe}const ie=ne;function N(e,u,r){const a=r??new n(16),s=e[0],c=e[1],h=e[2],p=e[3],x=e[4+0],T=e[4+1],M=e[4+2],R=e[4+3],U=e[8+0],I=e[8+1],V=e[8+2],se=e[8+3],j=e[12+0],H=e[12+1],he=e[12+2],pe=e[12+3],Se=u[0],Be=u[1],Te=u[2],Me=u[3],Pe=u[4+0],Ae=u[4+1],Ge=u[4+2],De=u[4+3],ze=u[8+0],Re=u[8+1],Oe=u[8+2],Le=u[8+3],Fe=u[12+0],Ne=u[12+1],$e=u[12+2],Ze=u[12+3];return a[0]=s*Se+x*Be+U*Te+j*Me,a[1]=c*Se+T*Be+I*Te+H*Me,a[2]=h*Se+M*Be+V*Te+he*Me,a[3]=p*Se+R*Be+se*Te+pe*Me,a[4]=s*Pe+x*Ae+U*Ge+j*De,a[5]=c*Pe+T*Ae+I*Ge+H*De,a[6]=h*Pe+M*Ae+V*Ge+he*De,a[7]=p*Pe+R*Ae+se*Ge+pe*De,a[8]=s*ze+x*Re+U*Oe+j*Le,a[9]=c*ze+T*Re+I*Oe+H*Le,a[10]=h*ze+M*Re+V*Oe+he*Le,a[11]=p*ze+R*Re+se*Oe+pe*Le,a[12]=s*Fe+x*Ne+U*$e+j*Ze,a[13]=c*Fe+T*Ne+I*$e+H*Ze,a[14]=h*Fe+M*Ne+V*$e+he*Ze,a[15]=p*Fe+R*Ne+se*$e+pe*Ze,a}const J=N;function $(e,u,r){const a=r??te();return e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11]),a[12]=u[0],a[13]=u[1],a[14]=u[2],a[15]=1,a}function W(e,u){const r=u??l.create();return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function Y(e,u,r){const a=r??l.create(),s=u*4;return a[0]=e[s+0],a[1]=e[s+1],a[2]=e[s+2],a}function q(e,u,r,a){const s=a===e?a:L(e,a),c=r*4;return s[c+0]=u[0],s[c+1]=u[1],s[c+2]=u[2],s}function O(e,u){const r=u??l.create(),a=e[0],s=e[1],c=e[2],h=e[4],p=e[5],x=e[6],T=e[8],M=e[9],R=e[10];return r[0]=Math.sqrt(a*a+s*s+c*c),r[1]=Math.sqrt(h*h+p*p+x*x),r[2]=Math.sqrt(T*T+M*M+R*R),r}function ae(e,u,r,a,s){const c=s??new n(16),h=Math.tan(Math.PI*.5-.5*e);if(c[0]=h/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,Number.isFinite(a)){const p=1/(r-a);c[10]=a*p,c[14]=a*r*p}else c[10]=-1,c[14]=-r;return c}function D(e,u,r,a=1/0,s){const c=s??new n(16),h=1/Math.tan(e*.5);if(c[0]=h/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,a===1/0)c[10]=0,c[14]=r;else{const p=1/(a-r);c[10]=r*p,c[14]=a*r*p}return c}function _e(e,u,r,a,s,c,h){const p=h??new n(16);return p[0]=2/(u-e),p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2/(a-r),p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1/(s-c),p[11]=0,p[12]=(u+e)/(e-u),p[13]=(a+r)/(r-a),p[14]=s/(s-c),p[15]=1,p}function fe(e,u,r,a,s,c,h){const p=h??new n(16),x=u-e,T=a-r,M=s-c;return p[0]=2*s/x,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*s/T,p[6]=0,p[7]=0,p[8]=(e+u)/x,p[9]=(a+r)/T,p[10]=c/M,p[11]=-1,p[12]=0,p[13]=0,p[14]=s*c/M,p[15]=0,p}function X(e,u,r,a,s,c=1/0,h){const p=h??new n(16),x=u-e,T=a-r;if(p[0]=2*s/x,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*s/T,p[6]=0,p[7]=0,p[8]=(e+u)/x,p[9]=(a+r)/T,p[11]=-1,p[12]=0,p[13]=0,p[15]=0,c===1/0)p[10]=0,p[14]=s;else{const M=1/(c-s);p[10]=s*M,p[14]=c*s*M}return p}const C=l.create(),K=l.create(),ee=l.create();function ge(e,u,r,a){const s=a??new n(16);return l.normalize(l.subtract(u,e,ee),ee),l.normalize(l.cross(r,ee,C),C),l.normalize(l.cross(ee,C,K),K),s[0]=C[0],s[1]=C[1],s[2]=C[2],s[3]=0,s[4]=K[0],s[5]=K[1],s[6]=K[2],s[7]=0,s[8]=ee[0],s[9]=ee[1],s[10]=ee[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function ye(e,u,r,a){const s=a??new n(16);return l.normalize(l.subtract(e,u,ee),ee),l.normalize(l.cross(r,ee,C),C),l.normalize(l.cross(ee,C,K),K),s[0]=C[0],s[1]=C[1],s[2]=C[2],s[3]=0,s[4]=K[0],s[5]=K[1],s[6]=K[2],s[7]=0,s[8]=ee[0],s[9]=ee[1],s[10]=ee[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function ue(e,u,r,a){const s=a??new n(16);return l.normalize(l.subtract(e,u,ee),ee),l.normalize(l.cross(r,ee,C),C),l.normalize(l.cross(ee,C,K),K),s[0]=C[0],s[1]=K[0],s[2]=ee[0],s[3]=0,s[4]=C[1],s[5]=K[1],s[6]=ee[1],s[7]=0,s[8]=C[2],s[9]=K[2],s[10]=ee[2],s[11]=0,s[12]=-(C[0]*e[0]+C[1]*e[1]+C[2]*e[2]),s[13]=-(K[0]*e[0]+K[1]*e[1]+K[2]*e[2]),s[14]=-(ee[0]*e[0]+ee[1]*e[1]+ee[2]*e[2]),s[15]=1,s}function Ee(e,u){const r=u??new n(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function me(e,u,r){const a=r??new n(16),s=u[0],c=u[1],h=u[2],p=e[0],x=e[1],T=e[2],M=e[3],R=e[1*4+0],U=e[1*4+1],I=e[1*4+2],V=e[1*4+3],se=e[2*4+0],j=e[2*4+1],H=e[2*4+2],he=e[2*4+3],pe=e[3*4+0],Se=e[3*4+1],Be=e[3*4+2],Te=e[3*4+3];return e!==a&&(a[0]=p,a[1]=x,a[2]=T,a[3]=M,a[4]=R,a[5]=U,a[6]=I,a[7]=V,a[8]=se,a[9]=j,a[10]=H,a[11]=he),a[12]=p*s+R*c+se*h+pe,a[13]=x*s+U*c+j*h+Se,a[14]=T*s+I*c+H*h+Be,a[15]=M*s+V*c+he*h+Te,a}function be(e,u){const r=u??new n(16),a=Math.cos(e),s=Math.sin(e);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a,r[6]=s,r[7]=0,r[8]=0,r[9]=-s,r[10]=a,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Q(e,u,r){const a=r??new n(16),s=e[4],c=e[5],h=e[6],p=e[7],x=e[8],T=e[9],M=e[10],R=e[11],U=Math.cos(u),I=Math.sin(u);return a[4]=U*s+I*x,a[5]=U*c+I*T,a[6]=U*h+I*M,a[7]=U*p+I*R,a[8]=U*x-I*s,a[9]=U*T-I*c,a[10]=U*M-I*h,a[11]=U*R-I*p,e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function de(e,u){const r=u??new n(16),a=Math.cos(e),s=Math.sin(e);return r[0]=a,r[1]=0,r[2]=-s,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=s,r[9]=0,r[10]=a,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function xe(e,u,r){const a=r??new n(16),s=e[0*4+0],c=e[0*4+1],h=e[0*4+2],p=e[0*4+3],x=e[2*4+0],T=e[2*4+1],M=e[2*4+2],R=e[2*4+3],U=Math.cos(u),I=Math.sin(u);return a[0]=U*s-I*x,a[1]=U*c-I*T,a[2]=U*h-I*M,a[3]=U*p-I*R,a[8]=U*x+I*s,a[9]=U*T+I*c,a[10]=U*M+I*h,a[11]=U*R+I*p,e!==a&&(a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function b(e,u){const r=u??new n(16),a=Math.cos(e),s=Math.sin(e);return r[0]=a,r[1]=s,r[2]=0,r[3]=0,r[4]=-s,r[5]=a,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function E(e,u,r){const a=r??new n(16),s=e[0*4+0],c=e[0*4+1],h=e[0*4+2],p=e[0*4+3],x=e[1*4+0],T=e[1*4+1],M=e[1*4+2],R=e[1*4+3],U=Math.cos(u),I=Math.sin(u);return a[0]=U*s+I*x,a[1]=U*c+I*T,a[2]=U*h+I*M,a[3]=U*p+I*R,a[4]=U*x-I*s,a[5]=U*T-I*c,a[6]=U*M-I*h,a[7]=U*R-I*p,e!==a&&(a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function f(e,u,r){const a=r??new n(16);let s=e[0],c=e[1],h=e[2];const p=Math.sqrt(s*s+c*c+h*h);s/=p,c/=p,h/=p;const x=s*s,T=c*c,M=h*h,R=Math.cos(u),U=Math.sin(u),I=1-R;return a[0]=x+(1-x)*R,a[1]=s*c*I+h*U,a[2]=s*h*I-c*U,a[3]=0,a[4]=s*c*I-h*U,a[5]=T+(1-T)*R,a[6]=c*h*I+s*U,a[7]=0,a[8]=s*h*I+c*U,a[9]=c*h*I-s*U,a[10]=M+(1-M)*R,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}const t=f;function o(e,u,r,a){const s=a??new n(16);let c=u[0],h=u[1],p=u[2];const x=Math.sqrt(c*c+h*h+p*p);c/=x,h/=x,p/=x;const T=c*c,M=h*h,R=p*p,U=Math.cos(r),I=Math.sin(r),V=1-U,se=T+(1-T)*U,j=c*h*V+p*I,H=c*p*V-h*I,he=c*h*V-p*I,pe=M+(1-M)*U,Se=h*p*V+c*I,Be=c*p*V+h*I,Te=h*p*V-c*I,Me=R+(1-R)*U,Pe=e[0],Ae=e[1],Ge=e[2],De=e[3],ze=e[4],Re=e[5],Oe=e[6],Le=e[7],Fe=e[8],Ne=e[9],$e=e[10],Ze=e[11];return s[0]=se*Pe+j*ze+H*Fe,s[1]=se*Ae+j*Re+H*Ne,s[2]=se*Ge+j*Oe+H*$e,s[3]=se*De+j*Le+H*Ze,s[4]=he*Pe+pe*ze+Se*Fe,s[5]=he*Ae+pe*Re+Se*Ne,s[6]=he*Ge+pe*Oe+Se*$e,s[7]=he*De+pe*Le+Se*Ze,s[8]=Be*Pe+Te*ze+Me*Fe,s[9]=Be*Ae+Te*Re+Me*Ne,s[10]=Be*Ge+Te*Oe+Me*$e,s[11]=Be*De+Te*Le+Me*Ze,e!==s&&(s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s}const i=o;function d(e,u){const r=u??new n(16);return r[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function _(e,u,r){const a=r??new n(16),s=u[0],c=u[1],h=u[2];return a[0]=s*e[0*4+0],a[1]=s*e[0*4+1],a[2]=s*e[0*4+2],a[3]=s*e[0*4+3],a[4]=c*e[1*4+0],a[5]=c*e[1*4+1],a[6]=c*e[1*4+2],a[7]=c*e[1*4+3],a[8]=h*e[2*4+0],a[9]=h*e[2*4+1],a[10]=h*e[2*4+2],a[11]=h*e[2*4+3],e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function w(e,u){const r=u??new n(16);return r[0]=e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(e,u,r){const a=r??new n(16);return a[0]=u*e[0*4+0],a[1]=u*e[0*4+1],a[2]=u*e[0*4+2],a[3]=u*e[0*4+3],a[4]=u*e[1*4+0],a[5]=u*e[1*4+1],a[6]=u*e[1*4+2],a[7]=u*e[1*4+3],a[8]=u*e[2*4+0],a[9]=u*e[2*4+1],a[10]=u*e[2*4+2],a[11]=u*e[2*4+3],e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}return{add:P,aim:ge,axisRotate:o,axisRotation:f,cameraAim:ye,clone:Z,copy:L,create:m,determinant:re,equals:F,equalsApproximately:A,fromMat3:y,fromQuat:v,frustum:fe,frustumReverseZ:X,getAxis:Y,getScaling:O,getTranslation:W,identity:te,inverse:ne,invert:ie,lookAt:ue,mul:J,mulScalar:G,multiply:N,multiplyScalar:k,negate:B,ortho:_e,perspective:ae,perspectiveReverseZ:D,rotate:i,rotateX:Q,rotateY:xe,rotateZ:E,rotation:t,rotationX:be,rotationY:de,rotationZ:b,scale:_,scaling:d,set:S,setAxis:q,setTranslation:$,translate:me,translation:Ee,transpose:oe,uniformScale:g,uniformScaling:w}}const Xt=new Map;function Nn(n){let l=Xt.get(n);return l||(l=qn(n),Xt.set(n,l)),l}function $n(n){const l=Pt(n);function m(b,E,f,t){const o=new n(4);return b!==void 0&&(o[0]=b,E!==void 0&&(o[1]=E,f!==void 0&&(o[2]=f,t!==void 0&&(o[3]=t)))),o}const S=m;function y(b,E,f,t,o){const i=o??new n(4);return i[0]=b,i[1]=E,i[2]=f,i[3]=t,i}function v(b,E,f){const t=f??new n(4),o=E*.5,i=Math.sin(o);return t[0]=i*b[0],t[1]=i*b[1],t[2]=i*b[2],t[3]=Math.cos(o),t}function B(b,E){const f=E??l.create(3),t=Math.acos(b[3])*2,o=Math.sin(t*.5);return o>le?(f[0]=b[0]/o,f[1]=b[1]/o,f[2]=b[2]/o):(f[0]=1,f[1]=0,f[2]=0),{angle:t,axis:f}}function P(b,E){const f=ae(b,E);return Math.acos(2*f*f-1)}function k(b,E,f){const t=f??new n(4),o=b[0],i=b[1],d=b[2],_=b[3],w=E[0],g=E[1],e=E[2],u=E[3];return t[0]=o*u+_*w+i*e-d*g,t[1]=i*u+_*g+d*w-o*e,t[2]=d*u+_*e+o*g-i*w,t[3]=_*u-o*w-i*g-d*e,t}const G=k;function L(b,E,f){const t=f??new n(4),o=E*.5,i=b[0],d=b[1],_=b[2],w=b[3],g=Math.sin(o),e=Math.cos(o);return t[0]=i*e+w*g,t[1]=d*e+_*g,t[2]=_*e-d*g,t[3]=w*e-i*g,t}function Z(b,E,f){const t=f??new n(4),o=E*.5,i=b[0],d=b[1],_=b[2],w=b[3],g=Math.sin(o),e=Math.cos(o);return t[0]=i*e-_*g,t[1]=d*e+w*g,t[2]=_*e+i*g,t[3]=w*e-d*g,t}function A(b,E,f){const t=f??new n(4),o=E*.5,i=b[0],d=b[1],_=b[2],w=b[3],g=Math.sin(o),e=Math.cos(o);return t[0]=i*e+d*g,t[1]=d*e-i*g,t[2]=_*e+w*g,t[3]=w*e-_*g,t}function F(b,E,f,t){const o=t??new n(4),i=b[0],d=b[1],_=b[2],w=b[3];let g=E[0],e=E[1],u=E[2],r=E[3],a=i*g+d*e+_*u+w*r;a<0&&(a=-a,g=-g,e=-e,u=-u,r=-r);let s,c;if(1-a>le){const h=Math.acos(a),p=Math.sin(h);s=Math.sin((1-f)*h)/p,c=Math.sin(f*h)/p}else s=1-f,c=f;return o[0]=s*i+c*g,o[1]=s*d+c*e,o[2]=s*_+c*u,o[3]=s*w+c*r,o}function te(b,E){const f=E??new n(4),t=b[0],o=b[1],i=b[2],d=b[3],_=t*t+o*o+i*i+d*d,w=_?1/_:0;return f[0]=-t*w,f[1]=-o*w,f[2]=-i*w,f[3]=d*w,f}function oe(b,E){const f=E??new n(4);return f[0]=-b[0],f[1]=-b[1],f[2]=-b[2],f[3]=b[3],f}function ne(b,E){const f=E??new n(4),t=b[0]+b[5]+b[10];if(t>0){const o=Math.sqrt(t+1);f[3]=.5*o;const i=.5/o;f[0]=(b[6]-b[9])*i,f[1]=(b[8]-b[2])*i,f[2]=(b[1]-b[4])*i}else{let o=0;b[5]>b[0]&&(o=1),b[10]>b[o*4+o]&&(o=2);const i=(o+1)%3,d=(o+2)%3,_=Math.sqrt(b[o*4+o]-b[i*4+i]-b[d*4+d]+1);f[o]=.5*_;const w=.5/_;f[3]=(b[i*4+d]-b[d*4+i])*w,f[i]=(b[i*4+o]+b[o*4+i])*w,f[d]=(b[d*4+o]+b[o*4+d])*w}return f}function re(b,E,f,t,o){const i=o??new n(4),d=b*.5,_=E*.5,w=f*.5,g=Math.sin(d),e=Math.cos(d),u=Math.sin(_),r=Math.cos(_),a=Math.sin(w),s=Math.cos(w);switch(t){case"xyz":i[0]=g*r*s+e*u*a,i[1]=e*u*s-g*r*a,i[2]=e*r*a+g*u*s,i[3]=e*r*s-g*u*a;break;case"xzy":i[0]=g*r*s-e*u*a,i[1]=e*u*s-g*r*a,i[2]=e*r*a+g*u*s,i[3]=e*r*s+g*u*a;break;case"yxz":i[0]=g*r*s+e*u*a,i[1]=e*u*s-g*r*a,i[2]=e*r*a-g*u*s,i[3]=e*r*s+g*u*a;break;case"yzx":i[0]=g*r*s+e*u*a,i[1]=e*u*s+g*r*a,i[2]=e*r*a-g*u*s,i[3]=e*r*s-g*u*a;break;case"zxy":i[0]=g*r*s-e*u*a,i[1]=e*u*s+g*r*a,i[2]=e*r*a+g*u*s,i[3]=e*r*s-g*u*a;break;case"zyx":i[0]=g*r*s-e*u*a,i[1]=e*u*s+g*r*a,i[2]=e*r*a-g*u*s,i[3]=e*r*s+g*u*a;break;default:throw new Error(`Unknown rotation order: ${t}`)}return i}function ie(b,E){const f=E??new n(4);return f[0]=b[0],f[1]=b[1],f[2]=b[2],f[3]=b[3],f}const N=ie;function J(b,E,f){const t=f??new n(4);return t[0]=b[0]+E[0],t[1]=b[1]+E[1],t[2]=b[2]+E[2],t[3]=b[3]+E[3],t}function $(b,E,f){const t=f??new n(4);return t[0]=b[0]-E[0],t[1]=b[1]-E[1],t[2]=b[2]-E[2],t[3]=b[3]-E[3],t}const W=$;function Y(b,E,f){const t=f??new n(4);return t[0]=b[0]*E,t[1]=b[1]*E,t[2]=b[2]*E,t[3]=b[3]*E,t}const q=Y;function O(b,E,f){const t=f??new n(4);return t[0]=b[0]/E,t[1]=b[1]/E,t[2]=b[2]/E,t[3]=b[3]/E,t}function ae(b,E){return b[0]*E[0]+b[1]*E[1]+b[2]*E[2]+b[3]*E[3]}function D(b,E,f,t){const o=t??new n(4);return o[0]=b[0]+f*(E[0]-b[0]),o[1]=b[1]+f*(E[1]-b[1]),o[2]=b[2]+f*(E[2]-b[2]),o[3]=b[3]+f*(E[3]-b[3]),o}function _e(b){const E=b[0],f=b[1],t=b[2],o=b[3];return Math.sqrt(E*E+f*f+t*t+o*o)}const fe=_e;function X(b){const E=b[0],f=b[1],t=b[2],o=b[3];return E*E+f*f+t*t+o*o}const C=X;function K(b,E){const f=E??new n(4),t=b[0],o=b[1],i=b[2],d=b[3],_=Math.sqrt(t*t+o*o+i*i+d*d);return _>1e-5?(f[0]=t/_,f[1]=o/_,f[2]=i/_,f[3]=d/_):(f[0]=0,f[1]=0,f[2]=0,f[3]=1),f}function ee(b,E){return Math.abs(b[0]-E[0])<le&&Math.abs(b[1]-E[1])<le&&Math.abs(b[2]-E[2])<le&&Math.abs(b[3]-E[3])<le}function ge(b,E){return b[0]===E[0]&&b[1]===E[1]&&b[2]===E[2]&&b[3]===E[3]}function ye(b){const E=b??new n(4);return E[0]=0,E[1]=0,E[2]=0,E[3]=1,E}const ue=l.create(),Ee=l.create(),me=l.create();function be(b,E,f){const t=f??new n(4),o=l.dot(b,E);return o<-.999999?(l.cross(Ee,b,ue),l.len(ue)<1e-6&&l.cross(me,b,ue),l.normalize(ue,ue),v(ue,Math.PI,t),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(l.cross(b,E,ue),t[0]=ue[0],t[1]=ue[1],t[2]=ue[2],t[3]=1+o,K(t,t))}const Q=new n(4),de=new n(4);function xe(b,E,f,t,o,i){const d=i??new n(4);return F(b,t,o,Q),F(E,f,o,de),F(Q,de,2*o*(1-o),d),d}return{create:m,fromValues:S,set:y,fromAxisAngle:v,toAxisAngle:B,angle:P,multiply:k,mul:G,rotateX:L,rotateY:Z,rotateZ:A,slerp:F,inverse:te,conjugate:oe,fromMat:ne,fromEuler:re,copy:ie,clone:N,add:J,subtract:$,sub:W,mulScalar:Y,scale:q,divScalar:O,dot:ae,lerp:D,length:_e,len:fe,lengthSq:X,lenSq:C,normalize:K,equalsApproximately:ee,equals:ge,identity:ye,rotationTo:be,sqlerp:xe}}const en=new Map;function Zn(n){let l=en.get(n);return l||(l=$n(n),en.set(n,l)),l}function Yn(n){function l(f,t,o,i){const d=new n(4);return f!==void 0&&(d[0]=f,t!==void 0&&(d[1]=t,o!==void 0&&(d[2]=o,i!==void 0&&(d[3]=i)))),d}const m=l;function S(f,t,o,i,d){const _=d??new n(4);return _[0]=f,_[1]=t,_[2]=o,_[3]=i,_}function y(f,t){const o=t??new n(4);return o[0]=Math.ceil(f[0]),o[1]=Math.ceil(f[1]),o[2]=Math.ceil(f[2]),o[3]=Math.ceil(f[3]),o}function v(f,t){const o=t??new n(4);return o[0]=Math.floor(f[0]),o[1]=Math.floor(f[1]),o[2]=Math.floor(f[2]),o[3]=Math.floor(f[3]),o}function B(f,t){const o=t??new n(4);return o[0]=Math.round(f[0]),o[1]=Math.round(f[1]),o[2]=Math.round(f[2]),o[3]=Math.round(f[3]),o}function P(f,t=0,o=1,i){const d=i??new n(4);return d[0]=Math.min(o,Math.max(t,f[0])),d[1]=Math.min(o,Math.max(t,f[1])),d[2]=Math.min(o,Math.max(t,f[2])),d[3]=Math.min(o,Math.max(t,f[3])),d}function k(f,t,o){const i=o??new n(4);return i[0]=f[0]+t[0],i[1]=f[1]+t[1],i[2]=f[2]+t[2],i[3]=f[3]+t[3],i}function G(f,t,o,i){const d=i??new n(4);return d[0]=f[0]+t[0]*o,d[1]=f[1]+t[1]*o,d[2]=f[2]+t[2]*o,d[3]=f[3]+t[3]*o,d}function L(f,t,o){const i=o??new n(4);return i[0]=f[0]-t[0],i[1]=f[1]-t[1],i[2]=f[2]-t[2],i[3]=f[3]-t[3],i}const Z=L;function A(f,t){return Math.abs(f[0]-t[0])<le&&Math.abs(f[1]-t[1])<le&&Math.abs(f[2]-t[2])<le&&Math.abs(f[3]-t[3])<le}function F(f,t){return f[0]===t[0]&&f[1]===t[1]&&f[2]===t[2]&&f[3]===t[3]}function te(f,t,o,i){const d=i??new n(4);return d[0]=f[0]+o*(t[0]-f[0]),d[1]=f[1]+o*(t[1]-f[1]),d[2]=f[2]+o*(t[2]-f[2]),d[3]=f[3]+o*(t[3]-f[3]),d}function oe(f,t,o,i){const d=i??new n(4);return d[0]=f[0]+o[0]*(t[0]-f[0]),d[1]=f[1]+o[1]*(t[1]-f[1]),d[2]=f[2]+o[2]*(t[2]-f[2]),d[3]=f[3]+o[3]*(t[3]-f[3]),d}function ne(f,t,o){const i=o??new n(4);return i[0]=Math.max(f[0],t[0]),i[1]=Math.max(f[1],t[1]),i[2]=Math.max(f[2],t[2]),i[3]=Math.max(f[3],t[3]),i}function re(f,t,o){const i=o??new n(4);return i[0]=Math.min(f[0],t[0]),i[1]=Math.min(f[1],t[1]),i[2]=Math.min(f[2],t[2]),i[3]=Math.min(f[3],t[3]),i}function ie(f,t,o){const i=o??new n(4);return i[0]=f[0]*t,i[1]=f[1]*t,i[2]=f[2]*t,i[3]=f[3]*t,i}const N=ie;function J(f,t,o){const i=o??new n(4);return i[0]=f[0]/t,i[1]=f[1]/t,i[2]=f[2]/t,i[3]=f[3]/t,i}function $(f,t){const o=t??new n(4);return o[0]=1/f[0],o[1]=1/f[1],o[2]=1/f[2],o[3]=1/f[3],o}const W=$;function Y(f,t){return f[0]*t[0]+f[1]*t[1]+f[2]*t[2]+f[3]*t[3]}function q(f){const t=f[0],o=f[1],i=f[2],d=f[3];return Math.sqrt(t*t+o*o+i*i+d*d)}const O=q;function ae(f){const t=f[0],o=f[1],i=f[2],d=f[3];return t*t+o*o+i*i+d*d}const D=ae;function _e(f,t){const o=f[0]-t[0],i=f[1]-t[1],d=f[2]-t[2],_=f[3]-t[3];return Math.sqrt(o*o+i*i+d*d+_*_)}const fe=_e;function X(f,t){const o=f[0]-t[0],i=f[1]-t[1],d=f[2]-t[2],_=f[3]-t[3];return o*o+i*i+d*d+_*_}const C=X;function K(f,t){const o=t??new n(4),i=f[0],d=f[1],_=f[2],w=f[3],g=Math.sqrt(i*i+d*d+_*_+w*w);return g>1e-5?(o[0]=i/g,o[1]=d/g,o[2]=_/g,o[3]=w/g):(o[0]=0,o[1]=0,o[2]=0,o[3]=0),o}function ee(f,t){const o=t??new n(4);return o[0]=-f[0],o[1]=-f[1],o[2]=-f[2],o[3]=-f[3],o}function ge(f,t){const o=t??new n(4);return o[0]=f[0],o[1]=f[1],o[2]=f[2],o[3]=f[3],o}const ye=ge;function ue(f,t,o){const i=o??new n(4);return i[0]=f[0]*t[0],i[1]=f[1]*t[1],i[2]=f[2]*t[2],i[3]=f[3]*t[3],i}const Ee=ue;function me(f,t,o){const i=o??new n(4);return i[0]=f[0]/t[0],i[1]=f[1]/t[1],i[2]=f[2]/t[2],i[3]=f[3]/t[3],i}const be=me;function Q(f){const t=f??new n(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function de(f,t,o){const i=o??new n(4),d=f[0],_=f[1],w=f[2],g=f[3];return i[0]=t[0]*d+t[4]*_+t[8]*w+t[12]*g,i[1]=t[1]*d+t[5]*_+t[9]*w+t[13]*g,i[2]=t[2]*d+t[6]*_+t[10]*w+t[14]*g,i[3]=t[3]*d+t[7]*_+t[11]*w+t[15]*g,i}function xe(f,t,o){const i=o??new n(4);return K(f,i),ie(i,t,i)}function b(f,t,o){const i=o??new n(4);return q(f)>t?xe(f,t,i):ge(f,i)}function E(f,t,o){const i=o??new n(4);return te(f,t,.5,i)}return{create:l,fromValues:m,set:S,ceil:y,floor:v,round:B,clamp:P,add:k,addScaled:G,subtract:L,sub:Z,equalsApproximately:A,equals:F,lerp:te,lerpV:oe,max:ne,min:re,mulScalar:ie,scale:N,divScalar:J,inverse:$,invert:W,dot:Y,length:q,len:O,lengthSq:ae,lenSq:D,distance:_e,dist:fe,distanceSq:X,distSq:C,normalize:K,negate:ee,copy:ge,clone:ye,multiply:ue,mul:Ee,divide:me,div:be,zero:Q,transformMat4:de,setLength:xe,truncate:b,midpoint:E}}const tn=new Map;function Kn(n){let l=tn.get(n);return l||(l=Yn(n),tn.set(n,l)),l}function Ct(n,l,m,S,y,v){return{mat3:Cn(n),mat4:Nn(l),quat:Zn(m),vec2:bn(S),vec3:Pt(y),vec4:Kn(v)}}const{mat3:Vn,mat4:We,quat:Js,vec2:nn,vec3:ce,vec4:Qs}=Ct(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ct(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ct(On,Array,Array,Array,Array,Array);const sn=document.querySelector("#log");let qe=null,nt=null;function vn(){if(qe)return qe;qe=document.createElement("div"),qe.className="ply-spinner-overlay";const n=document.createElement("div");return n.className="ply-spinner",qe.appendChild(n),nt=document.createElement("div"),nt.className="ply-spinner-label",qe.appendChild(nt),qe.style.display="none",document.body.appendChild(qe),qe}function jn(n){vn(),nt&&n&&(nt.textContent=n),qe&&(qe.style.opacity="1",qe.style.display="flex")}function mt(n){vn(),nt&&(nt.textContent=n)}function Hn(){if(!qe)return;const n=qe;n.style.opacity="0",setTimeout(()=>{n.style.opacity==="0"&&(n.style.display="none")},220)}function Sn(n,l){if(!sn)return;const m=document.createElement("p");m.innerText=n,l&&Object.assign(m.style,l),sn.appendChild(m)}async function Ye(n){console.log(n),Sn(n)}async function Jn(n){console.error(n),Sn(n,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Bn;function Qn(){Bn=performance.now()}function rn(n){const l=performance.now()-Bn;Ye(`⏱️ ${n} Time: ${l.toFixed(0)} ms`)}function rt(n){return n+3&-4}const Xn=2,es=3,ts=5,ns=6,ot=7,St=8,lt=9,ut=10;function ss(n){const l=new TextDecoder("ascii"),m=l.decode(new Uint8Array(n,0,4));if(m!=="NAT2")throw new Error(`NAT2 bad magic: '${m}'`);if(n.byteLength<4+64)throw new Error(`NAT2 truncated (${n.byteLength} bytes < 4 + 64)`);const S=new DataView(n),y=4,v=S.getUint32(y+0,!0),B=S.getUint32(y+4,!0),P=S.getUint32(y+8,!0),k=S.getUint32(y+12,!0),G=S.getUint32(y+16,!0),L=S.getFloat32(y+20,!0),Z=S.getUint32(y+24,!0),A=S.getUint32(y+28,!0),F=S.getFloat32(y+32,!0),te=S.getFloat32(y+36,!0),oe=S.getFloat32(y+40,!0),ne=S.getUint32(y+44,!0),re=S.getFloat32(y+48,!0),ie=S.getFloat32(y+52,!0),N=S.getUint32(y+56,!0),J=S.getUint32(y+60,!0),$=A===lt||A===ut,W=$?J:0,Y=$?0:J&255,q=$?0:J>>8&255,O=Y>0?Y:1;if(A===ts||A===ns)throw new Error(`NAT2: paired-RVQ format=${A} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ae=A===lt||A===ut;if(A!==Xn&&A!==es&&A!==ot&&A!==St&&!ae)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${A}`);if(v%4!==0||ne%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${v} layer_h=${ne}`);let D=y+64;const _e=(N+1)*4,fe=new Uint32Array(n.slice(D,D+_e));D+=_e;let X;if(O>1){const Q=(O+1)*4;if(D+Q>n.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Q} from ${D})`);X=new Uint32Array(n.slice(D,D+Q)),D+=Q}else X=new Uint32Array([0,v]);let C=0;for(let Q=0;Q<O;Q++){const de=X[Q+1]-X[Q];de>C&&(C=de)}if(ae){const Q=W&1?7:6,de=G*Q*4;if(D+de>n.byteLength)throw new Error(`NAT2 truncated at probes: need ${de} more bytes from offset ${D}, have ${n.byteLength-D}`);const xe=new Float32Array(n.slice(D,D+de));D+=de;const b=Math.max(1,W>>8&255),E=[];let f=0;for(let _=0,w=v,g=ne;_<b;_++,w>>=1,g>>=1){const e=Math.max(1,w>>2)*Math.max(1,g>>2)*16;E.push(e),f+=e}const t=n.byteLength-D;if(t<f)throw new Error(`NAT2 probe atlas truncated: need ${f} bytes for ${v}x${ne} x${b} mips, have ${t}`);const o=[];let i=D;for(const _ of E)o.push(new Uint8Array(n.slice(i,i+_))),i+=_;const d=o[0];return{width:v,height:B,channels:P,kernel_type:k,num_rects:G,uv_extent:L,sb_number:Z,format:A,sh_bias:F,res_bias:te,compact_mult:oe,layer_h:ne,atlas_scale:re,atlas_offset:ie,n_layers:N,n_cols:O,layer_cuts:fe,column_cuts:X,slice_width:C,rects_expanded:xe,atlas_bytes:d,mip_bytes:o,probe_mode:W&1?2:1}}const K=G*4*4;if(D+K>n.byteLength)throw new Error(`NAT2 truncated at rects: need ${K} more bytes from offset ${D}, have ${n.byteLength-D}`);const ee=new Float32Array(n.slice(D,D+K));D+=K;const ge=new Float32Array(G*5);for(let Q=0;Q<G;Q++){const de=ee[Q*4+0],xe=ee[Q*4+1],b=ee[Q*4+2],E=ee[Q*4+3];let f=0;for(let _=1;_<=N&&fe[_]<=xe;_++)f=_;let t=0;for(let _=1;_<=O&&X[_]<=de;_++)t=_;const o=xe-fe[f],i=de-X[t],d=t*N+f;ge[Q*5+0]=i,ge[Q*5+1]=o,ge[Q*5+2]=b,ge[Q*5+3]=E,ge[Q*5+4]=d}let ye,ue;const Ee=O,be=v/4*16;if(A===ot||A===St){if(D+24>n.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Q=A===ot?"BCCB":"ACCB",de=l.decode(new Uint8Array(n,D,4));if(de!==Q)throw new Error(`NAT2 typeD bad sub-magic: expected '${Q}' got '${de}'`);const xe=S.getUint32(D+4,!0),b=S.getUint32(D+8,!0),E=S.getUint32(D+12,!0),f=S.getUint32(D+16,!0),t=S.getUint32(D+20,!0);if(xe!==1)throw new Error(`NAT2 BCCB unsupported version ${xe}`);if(E!==B/4||f!==v/4||t!==E*f)throw new Error(`NAT2 BCCB block grid mismatch: header ${v}×${B}, sub-header ${f}×${E} (${t} blocks)`);D+=24;const o=b*16;if(D+o>n.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${o}, have ${n.byteLength-D})`);const i=new Uint8Array(n,D,o);D+=o;const d=t*2;if(D+d>n.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${d}, have ${n.byteLength-D})`);const _=new Uint16Array(n.slice(D,D+d));D+=d;const w=new Uint8Array(t*16);for(let g=0;g<t;g++){const e=_[g]*16;w.set(i.subarray(e,e+16),g*16)}if(ye=w,q>1){ue=[w];for(let g=1;g<q;g++){if(D+24>n.byteLength)throw new Error(`NAT2 truncated at mip ${g} sub-header`);const e=l.decode(new Uint8Array(n,D,4));if(e!==Q)throw new Error(`NAT2 mip ${g}: bad sub-magic '${e}'`);const u=S.getUint32(D+8,!0),r=S.getUint32(D+16,!0),a=S.getUint32(D+20,!0);if(r!==g)throw new Error(`NAT2 mip section order: expected level ${g}, got ${r}`);D+=24;let s=0;for(let x=0;x<Ee;x++)for(let T=0;T<N;T++){const M=Tn(g,X[x+1]-X[x],fe[T+1]-fe[T],C,ne);s+=(M.cw>>2)*(M.ch>>2)}if(s!==a)throw new Error(`NAT2 mip ${g}: ${a} blocks, loader expects ${s}`);if(D+u*16+a*2>n.byteLength)throw new Error(`NAT2 truncated in mip ${g}`);const c=new Uint8Array(n,D,u*16);D+=u*16;const h=new Uint16Array(n.slice(D,D+a*2));D+=a*2;const p=new Uint8Array(a*16);for(let x=0;x<a;x++){const T=h[x]*16;p.set(c.subarray(T,T+16),x*16)}ue.push(p)}}}else{let Q=0;for(let de=0;de<N;de++){const xe=fe[de+1]-fe[de];if(xe%4!==0)throw new Error(`NAT2 BC7 layer ${de} rows ${xe} not 4-aligned`);Q+=xe/4*be}if(D+Q>n.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Q} more bytes from offset ${D}, have ${n.byteLength-D}`);ye=new Uint8Array(n.slice(D,D+Q))}return{width:v,height:B,channels:P,kernel_type:k,num_rects:G,uv_extent:L,sb_number:Z,format:A,sh_bias:F,res_bias:te,compact_mult:oe,layer_h:ne,atlas_scale:re,atlas_offset:ie,n_layers:N,n_cols:O,layer_cuts:fe,column_cuts:X,slice_width:C,rects_expanded:ge,atlas_bytes:ye,...ue?{mip_bytes:ue}:{}}}function Tn(n,l,m,S,y){const v=P=>P+3>>2<<2,B=1<<n;return{cw:Math.min(v(Math.max(1,S>>n)),v(Math.ceil(l/B))),ch:Math.min(v(Math.max(1,y>>n)),v(Math.ceil(m/B)))}}const rs=32;function is(n,l,m){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,y,v,B;if(l.format===2||l.format===ot||l.format===lt){if(!n.features.has("texture-compression-bc"))return Ye(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===lt?"BC7 atlas (proberes: shared probe texture)":l.format===ot?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:y,sampler:v}=an(n,l,"bc7-rgba-unorm",B)}else if(l.format===3||l.format===St||l.format===ut){if(!n.features.has("texture-compression-astc"))return Ye(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;B=l.format===ut?"ASTC 4x4 atlas (proberes: shared probe texture)":l.format===St?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:y,sampler:v}=an(n,l,"astc-4x4-unorm",B)}else return Ye(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:P}=l,k=n.createBuffer({label:"atlas rects (5-stride)",size:rt(P.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});n.queue.writeBuffer(k,0,P);const G=n.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return bt(n,G,l,m),{texture:S,view:y,sampler:v,rectsBuffer:k,texParamsBuffer:G,meta:l}}function an(n,l,m,S){const{width:y,layer_h:v,n_layers:B,n_cols:P,layer_cuts:k,column_cuts:G,slice_width:L,atlas_bytes:Z}=l,F=y/4*16,te=n.limits.maxTextureDimension2D;if(v>te||L>te)throw new Error(`⚠️  atlas slice dims ${L}x${v} exceed maxTextureDimension2D=${te}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const oe=P*B;if(oe>n.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${P} cols × ${B} layers = ${oe} slices > maxTextureArrayLayers=${n.limits.maxTextureArrayLayers}.`);const ne=l.mip_bytes??[Z],re=ne.length,ie=n.createTexture({label:S,size:{width:L,height:v,depthOrArrayLayers:oe},mipLevelCount:re,sampleCount:1,dimension:"2d",format:m,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let W=0;W<P;W++){const Y=G[W]/4,q=(G[W+1]-G[W])/4;for(let O=0;O<B;O++){const ae=k[O]/4,D=(k[O+1]-k[O])/4,_e=W*B+O,fe=ae*F+Y*16;n.queue.writeTexture({texture:ie,mipLevel:0,origin:{x:0,y:0,z:_e},aspect:"all"},Z,{offset:fe,bytesPerRow:F,rowsPerImage:D},{width:q*4,height:D*4,depthOrArrayLayers:1})}}const N=l.format===lt||l.format===ut;for(let W=1;W<re&&!N;W++){let Y=0;for(let q=0;q<P;q++)for(let O=0;O<B;O++){const{cw:ae,ch:D}=Tn(W,G[q+1]-G[q],k[O+1]-k[O],L,v);n.queue.writeTexture({texture:ie,mipLevel:W,origin:{x:0,y:0,z:q*B+O},aspect:"all"},ne[W],{offset:Y,bytesPerRow:(ae>>2)*16,rowsPerImage:D>>2},{width:ae,height:D,depthOrArrayLayers:1}),Y+=(ae>>2)*(D>>2)*16}}for(let W=1;W<re&&N;W++){const Y=Math.max(1,L>>W),q=Math.max(1,v>>W);n.queue.writeTexture({texture:ie,mipLevel:W,origin:{x:0,y:0,z:0},aspect:"all"},ne[W],{offset:0,bytesPerRow:Math.max(1,Y>>2)*16,rowsPerImage:Math.max(1,q>>2)},{width:Y,height:q,depthOrArrayLayers:1})}re>1&&console.log(`[atlas] ${re} mip levels uploaded (${N?"trilinear":"per-surfel integer level"})`);const J=ie.createView({label:`${S} view`,dimension:"2d-array"}),$=n.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:re>1&&N?"linear":"nearest"});return{texture:ie,view:J,sampler:$}}function bt(n,l,m,S,y=1){var G;const v=new ArrayBuffer(32),B=new Uint32Array(v),P=new Float32Array(v);B[0]=S?1:0,P[1]=m.atlas_scale,P[2]=m.atlas_offset,P[3]=m.res_bias,B[4]=m.probe_mode?m.probe_mode|0:0,B[5]=m.width|0;const k=(((G=m.mip_bytes)==null?void 0:G.length)??1)>1;B[6]=k&&y!==0?1:0,P[7]=m.uv_extent,n.queue.writeBuffer(l,0,v)}async function as(n,l){Ye(`loading ply file from File... : ${n.name}`),jn("downloading PLY...");const m=await n.arrayBuffer();try{return await os(m,l)}finally{Hn()}}async function os(n,l){return new Promise((m,S)=>{const y=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});y.onmessage=v=>{var P,k,G,L,Z,A,F,te,oe,ne,re,ie;const B=v.data;if((B==null?void 0:B.type)==="error"){Jn(`PLY worker error: ${B.message??"unknown error"}`),y.terminate(),S(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const N=B.totalBytes,J=B.loadedBytes/(1024*1024),$=N?N/(1024*1024):void 0,W=(B.speedBps??0)/(1024*1024),Y=N?Math.min(99,Math.floor(B.loadedBytes/N*100)):void 0,q=$?`total ${$.toFixed(1)} MB`:"total -- MB",O=$&&Y!==void 0?`${J.toFixed(1)} MB downloaded (${Y}%)`:`${J.toFixed(1)} MB downloaded`,ae=`${W.toFixed(2)} MB/s`;mt(`downloading PLY ...
${q}, ${O}
${ae}`);return}else if((B==null?void 0:B.type)==="fetched"){Ye(`💾 Fetched (${B.byteLength} bytes)`),rn("Download"),mt("parsing PLY..."),Qn();return}else if((B==null?void 0:B.type)==="parse_progress"){const N=B.total??0,J=B.read??0,$=N>0?Math.floor(J/N*100):0;mt(`parsing PLY ...
${J}/${N} surfels (${$}%)`);return}else if((B==null?void 0:B.type)==="done"){const N=B.num_points,J=B.K,$=B.feature_mode??0,W=B.sh_bias,Y=B.kernel_type,q=B.surfelBuffer,O=B.svParamsBuffer;Ye(`🪐 Total surfels: ${N}, mode=${$===1?"SB":"SV"}, K=${J}, sh_bias=${W}, kernel_type=${Y}`);const D=l.createBuffer({label:"surfel input buffer",size:rt(N*rs),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(D,0,q);const _e=O.byteLength>0?O.byteLength:16,fe=l.createBuffer({label:$===1?"color_params buffer (SB)":"color_params buffer (SV)",size:rt(_e),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});O.byteLength>0&&l.queue.writeBuffer(fe,0,O),y.terminate(),rn("Parse"),m({num_points:N,K:J,feature_mode:$,sh_bias:W,kernel_type:Y,surfel_buffer:D,surfel_data:new Float32Array(q),sv_params_buffer:fe,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((k=(P=B.bbox)==null?void 0:P.min)==null?void 0:k[0])??-1)+(((L=(G=B.bbox)==null?void 0:G.max)==null?void 0:L[0])??1))/2,((((A=(Z=B.bbox)==null?void 0:Z.min)==null?void 0:A[1])??-1)+(((te=(F=B.bbox)==null?void 0:F.max)==null?void 0:te[1])??1))/2,((((ne=(oe=B.bbox)==null?void 0:oe.min)==null?void 0:ne[2])??-1)+(((ie=(re=B.bbox)==null?void 0:re.max)==null?void 0:ie[2])??1))/2]})}},y.onerror=v=>{y.terminate(),S(v)},n instanceof ArrayBuffer?(mt("parsing PLY..."),y.postMessage({type:"start",plyBuffer:n},[n])):y.postMessage({type:"start_url",url:n.url})})}const kn="BITYMI01",cs=0,ls=1,us=2,ds=3,fs=4,ps=5;function _s(n){const l=new Uint8Array(n),m=new TextDecoder().decode(l.subarray(0,8));if(m!==kn)throw new Error(`Not a BITYMI bundle (bad magic '${m}')`);const S=new DataView(n),y=S.getUint32(8,!0),v=12,B=20;let P=null,k=null,G=null;for(let L=0;L<y;L++){const Z=v+L*B,A=S.getUint32(Z+0,!0),F=Number(S.getBigUint64(Z+4,!0)),te=Number(S.getBigUint64(Z+12,!0)),oe=l.slice(F,F+te).buffer;A===cs||A===ls||A===ps?P=oe:A===us?k=oe:(A===ds||A===fs)&&(G=oe)}if(P===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:P,camerasBuffer:k,atlasBuffer:G}}async function hs(n,l){var B;const m=await fetch(n);if(!m.ok)throw new Error(`fetch failed: ${m.status} ${m.statusText}`);const S=(()=>{const P=m.headers.get("content-length");return P&&parseInt(P,10)||void 0})(),y=(B=m.body)==null?void 0:B.getReader();let v;if(!y)v=await m.arrayBuffer(),l&&l(v.byteLength,S,0);else{const P=[];let k=0,G=performance.now(),L=0;for(;;){const{done:F,value:te}=await y.read();if(F)break;P.push(te),k+=te.byteLength;const oe=performance.now();if(oe-G>=150&&l){const ne=(k-L)/((oe-G)/1e3);l(k,S,ne),G=oe,L=k}}const Z=new Uint8Array(k);let A=0;for(const F of P)Z.set(F,A),A+=F.byteLength;v=Z.buffer,l&&l(k,S,0)}return v.byteLength>=8&&new TextDecoder().decode(new Uint8Array(v,0,8))===kn?{bundle:_s(v),rawPly:null}:{bundle:null,rawPly:v}}const gs=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,on=`// 2DGS render — vertex+fragment.
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
`,ws=`const WG_SIZE = 256u;
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
}`,ms=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,xs=`// shader implementing gpu radix sort.

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
`,ys=`// shader implementing gpu radix sort.

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
`,bs=`// ============================================================================
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
}`,Mn=32,zt=1,Ut=2,cn=4,ln=512,un=1024,dn=2048,fn=4096,vs=0,Je=new ArrayBuffer(Mn),Ie={canvas_size:new Uint32Array(Je,0,2),accel_flags:new Uint32Array(Je,8,1),feature_mode:new Uint32Array(Je,12,1),gaussian_scaling:new Float32Array(Je,16,1),sh_bias:new Float32Array(Je,20,1),color_K:new Uint32Array(Je,24,1),walltime:new Float32Array(Je,28,1)};function Ss(n){Ie.canvas_size[0]=n.width>>>0,Ie.canvas_size[1]=n.height>>>0,Ie.accel_flags[0]=(n.accel_flags??zt|Ut)>>>0,Ie.feature_mode[0]=(n.feature_mode??vs)>>>0,Ie.gaussian_scaling[0]=n.gaussian_scaling??1,Ie.sh_bias[0]=n.sh_bias??.5,Ie.color_K[0]=(n.color_K??0)>>>0,Ie.walltime[0]=n.walltime??0}function En(n,l){n.queue.writeBuffer(l,0,Je)}function At(n,l,m){m&&n&&l&&En(n,l)}function pn(n,l,m,S,y=!0){Ie.canvas_size[0]=n>>>0,Ie.canvas_size[1]=l>>>0,At(m??null,S??null,y)}function Bs(n,l,m,S=!0){Ie.gaussian_scaling[0]=n,At(l??null,m??null,S)}function Ts(n,l,m,S=!0){Ie.sh_bias[0]=n,At(l??null,m??null,S)}function ks(n,l,m,S=!0){let y=Ie.accel_flags[0];n.oac!==void 0&&(y=n.oac?y|zt:y&~zt),n.spr!==void 0&&(y=n.spr?y|Ut:y&~Ut),n.bfc!==void 0&&(y=n.bfc?y|cn:y&~cn),n.hypLegacy!==void 0&&(y=n.hypLegacy?y|ln:y&~ln),n.centred!==void 0&&(y=n.centred?y|fn:y&~fn),n.raysplat!==void 0&&(y=n.raysplat?y|dn:y&~dn),n.legacyPos!==void 0&&(y=n.legacyPos?y|un:y&~un),Ie.accel_flags[0]=y>>>0,At(l??null,m??null,S)}const Ms=256;function Gt(n,l){const m=[],S=[];let y=!0;for(const v of n.split(`
`)){const B=v.trim();let P;if((P=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const k=!!l[P[1]];S.push({parent:y,taken:k}),y=y&&k;continue}if(/^\/\/#else\s*$/.test(B)){const k=S[S.length-1];if(k===void 0)throw new Error("preprocessWGSL: #else without #if");y=k.parent&&!k.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const k=S.pop();if(k===void 0)throw new Error("preprocessWGSL: #endif without #if");y=k.parent;continue}y&&m.push(v)}if(S.length!==0)throw new Error("preprocessWGSL: unterminated #if");return m.join(`
`)}const Es=Mn,Ps=8,As=96,Gs=12,qt=8,He=1<<qt,et=256,Bt=32/qt,Ds=0,_n=Bt&1;function hn(n,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:n*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:n*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function zs(n,l){const m=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=n.createPipelineLayout({bindGroupLayouts:[m]}),y=v=>n.createComputePipeline({layout:S,compute:{module:l,entryPoint:v,constants:{WG_SIZE:et}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:m}}function Us(n,l,m){const S=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),v=n.createPipelineLayout({bindGroupLayouts:[S]}),B=n.createPipelineLayout({bindGroupLayouts:[y]}),P=[];for(let k=0;k<Bt;k++){const G={PASS_ID:k+Ds,RS_RADIX_LOG2:qt,RS_RADIX_SIZE:He};P.push({localHistogram:n.createComputePipeline({layout:v,compute:{module:l,entryPoint:"local_histogram_pass",constants:G}}),scatterElements:n.createComputePipeline({layout:B,compute:{module:m,entryPoint:"scatter_elements",constants:G}})})}return{passes:P,localHistogramBindGroupLayout:S,scatterBindGroupLayout:y}}function Is(n){const l=n.createShaderModule({label:"local histogram",code:ys}),m=n.createShaderModule({label:"scatter",code:xs}),S=n.createShaderModule({label:"blelloch prefix",code:bs}),y=zs(n,S),v=Us(n,l,m);return{localHistogramBindGroupLayout:v.localHistogramBindGroupLayout,scatterBindGroupLayout:v.scatterBindGroupLayout,passes:v.passes,hierarchicalBlelloch:y}}function gn(n){const l=n.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),m=l.createView({dimension:"2d-array"}),S=n.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=n.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),v=n.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});n.queue.writeBuffer(v,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:m,sampler:S,rectsBuffer:y,texParamsBuffer:v,meta:B}}class Rs{constructor(l,m,S,y,v,B=null,P={}){z(this,"device");z(this,"pc");z(this,"presentationFormat");z(this,"camera_buffer");z(this,"render_settings_buffer");z(this,"draw_indirect_buffer");z(this,"splat_2d_buffer");z(this,"querySet");z(this,"resolveBuffer");z(this,"resultBuffer");z(this,"queriesPerFrame",Ps);z(this,"queryCapacityFrames",200);z(this,"sort_prefixBindGroup");z(this,"sort_pipelines");z(this,"sort_localHistogramBindGroups");z(this,"sort_scatterBindGroups");z(this,"lastFrame",0);z(this,"frameCount",0);z(this,"preprocessPipeline");z(this,"cullPipeline");z(this,"renderPipeline");z(this,"indirectPipeline");z(this,"renderShaderModule");z(this,"betaKernel",1);z(this,"fetchById");z(this,"octBound");z(this,"acc16");z(this,"accTexture",null);z(this,"accView",null);z(this,"accW",0);z(this,"accH",0);z(this,"legacyRenderPipeline",null);z(this,"varyingsPipeline",null);z(this,"legacyRenderer",!1);z(this,"accResolvePipeline",null);z(this,"accResolveBgl",null);z(this,"accResolveBindGroup",null);z(this,"renderSettingsBgl");z(this,"preprocessBgl2");z(this,"renderSplatsBgl");z(this,"atlasBgl");z(this,"sort_info_buffer");z(this,"sort_ping_pong");z(this,"crsBg");z(this,"gsBg");z(this,"cullBg2");z(this,"preprocessBg1");z(this,"renderSplatsBindGroup");z(this,"renderSettingsBindGroup");z(this,"atlasBindGroup");z(this,"indirectBindGroup");z(this,"sh_solvers_buffer");z(this,"bfcParamsBuffer");z(this,"bfcBindGroupLayout");z(this,"bfcBindGroup");z(this,"staticSortKeys",null);z(this,"wideFrustum",!1);z(this,"staticKeysBuffer",null);z(this,"bgColor",[0,0,0,0]);z(this,"showPerfDialogNext",!1);z(this,"requestReorderNextFrame",!1);z(this,"reorderInFlight",!1);z(this,"downloadOnceNextRead",!1);z(this,"downloadOnceFileName","fps_metrics");z(this,"allFrameTimes",[]);z(this,"lastStageBreakdownMs",null);z(this,"timeQueryEnabled");z(this,"atlas");z(this,"atlasParamsBuffer");z(this,"_atlasEnabled",!0);z(this,"mipLodBias",1);z(this,"_mipMode",1);this.fetchById=P.fetchById??!0,this.staticSortKeys=P.staticSortKeys??null,this.wideFrustum=P.wideFrustum??!1,this.octBound=P.octBound??!1,this.acc16=P.acc16??!1,Ye(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const k=v.includes("timestamp-query");this.timeQueryEnabled=k,k&&Ye("⏰ using timestamp-query"),this.pc=l,this.device=m,this.presentationFormat=S,this.camera_buffer=y,this.atlas=B??gn(m),this.atlasParamsBuffer=m.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),m.addEventListener("uncapturederror",me=>{console.error("A WebGPU error was not captured:",me.error)}),this._setupTimestampQueries(),this._setupBuffers();const G=(Math.floor((this.pc.num_points+et-1)/et)+1)*et,L=Math.ceil(G/et);console.log(`keys count adjusted: ${G}`),console.log(`key size: ${this.pc.num_points}`);const Z=m.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Is(m);const A=[hn(G,m),hn(G,m)],F=m.createBuffer({label:"workgroup histograms",size:L*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=m.createBuffer({label:"workgroup prefixes",size:L*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=m.createBuffer({label:"digit base",size:He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=Math.ceil(L/et),re=Math.ceil(ne/et),ie=m.createBuffer({label:"prefix l0 sums",size:ne*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=m.createBuffer({label:"prefix l0 offsets",size:ne*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=m.createBuffer({label:"prefix l1 sums",size:re*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=m.createBuffer({label:"prefix l1 offsets",size:re*He*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=m.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:F}},{binding:2,resource:{buffer:te}},{binding:3,resource:{buffer:ie}},{binding:4,resource:{buffer:N}},{binding:5,resource:{buffer:J}},{binding:6,resource:{buffer:$}},{binding:7,resource:{buffer:oe}}]}),this.sort_localHistogramBindGroups=[m.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:A[0].sort_depths_buffer}},{binding:2,resource:{buffer:F}}]}),m.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:A[1].sort_depths_buffer}},{binding:2,resource:{buffer:F}}]})],this.sort_scatterBindGroups=[m.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:oe}},{binding:2,resource:{buffer:A[0].sort_depths_buffer}},{binding:3,resource:{buffer:A[1].sort_depths_buffer}},{binding:4,resource:{buffer:A[0].sort_indices_buffer}},{binding:5,resource:{buffer:A[1].sort_indices_buffer}},{binding:6,resource:{buffer:te}}]}),m.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:oe}},{binding:2,resource:{buffer:A[1].sort_depths_buffer}},{binding:3,resource:{buffer:A[0].sort_depths_buffer}},{binding:4,resource:{buffer:A[1].sort_indices_buffer}},{binding:5,resource:{buffer:A[0].sort_indices_buffer}},{binding:6,resource:{buffer:te}}]})],this.sort_info_buffer=Z,this.sort_ping_pong=A;const W=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),Y=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),q=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),O=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:W,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:Y,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:q,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=O,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:O,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const ae=this.device.createShaderModule({code:ws});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ae,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const D=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],_e=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:rt(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),D.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),_e.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:D}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:_e});const fe=this.device.createShaderModule({code:Gt(ms,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[W,Y,q,this.bfcBindGroupLayout]}),compute:{module:fe,entryPoint:"surfel_cull"}});const X=this.device.createShaderModule({code:gs});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[W,O]}),compute:{module:X,entryPoint:"preprocess"}});const C=this.device.createShaderModule({label:"render_2dgs",code:Gt(on,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});C.getCompilationInfo().then(me=>{me.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),me.messages.forEach(be=>{(be.type==="error"?console.error:be.type==="warning"?console.warn:console.log)(`${be.type} (line ${be.lineNum}:${be.linePos}): ${be.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const K=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),ee=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ge=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:ee,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ye=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ue=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[K,ge,ye]}),vertex:{module:C,entryPoint:"vs_main"},fragment:{module:C,entryPoint:"fs_main",constants:{BETA_KERNEL:ue},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ee=(me,be,Q)=>{const de=this.device.createShaderModule({label:`render_2dgs (${me})`,code:Gt(on,{FETCH_BY_ID:be,OCT:Q})});return this.device.createRenderPipeline({label:`render_2dgs_${me}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[K,ge,ye]}),vertex:{module:de,entryPoint:"vs_main"},fragment:{module:de,entryPoint:"fs_main",constants:{BETA_KERNEL:ue},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=Ee("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ee("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(me=>{me?console.error("[render_2dgs] pipeline create validation error:",me.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:K,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ge,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[_n].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ye,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=C,this.betaKernel=ue,this.renderSettingsBgl=K,this.renderSplatsBgl=ge,this.atlasBgl=ye}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(l,m){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,m[0],m[1],m[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var y;const l=new ArrayBuffer(32),m=new Uint32Array(l),S=new Float32Array(l);m[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,m[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,m[3]=this.atlas.meta.probe_mode|0||0,m[4]=this._mipMode!==0?Math.max(1,((y=this.atlas.meta.mip_bytes)==null?void 0:y.length)??1):1,S[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureAccResources(l,m){var S;if(this.accResolvePipeline===null){const y=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,v=this.device.createShaderModule({label:"acc16_resolve",code:y});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===l&&this.accH===m||((S=this.accTexture)==null||S.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,l),height:Math.max(1,m),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=l,this.accH=m)}setAtlas(l){this.atlas=l??gn(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&bt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=l,bt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l,this._mipMode))}setMipLodBias(l){this.mipLodBias=l,this.writeAtlasParams()}setFetchById(l){l!==this.fetchById&&(this.fetchById=l,Ye(`[render_2dgs] fragment inputs: ${l?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(l){if(l===this.legacyRenderer)return;this.legacyRenderer=l,ks({legacyPos:l,hypLegacy:l},this.device,this.render_settings_buffer);const m=!l&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([m])),Ye(`[render_2dgs] renderer: ${l?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(l){this.atlas.meta.format!==4294967295&&(this._mipMode=l?1:0,this.writeAtlasParams(),bt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var l;return(((l=this.atlas.meta.mip_bytes)==null?void 0:l.length)??1)>1}async debugReadSortedIndices(l=30){const m=Math.max(0,Math.min(l,this.pc.num_points)),S=m*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),v=this.device.createCommandEncoder();v.copyBufferToBuffer(this.sort_ping_pong[_n].sort_indices_buffer,0,y,0,S),this.device.queue.submit([v.finish()]),await y.mapAsync(GPUMapMode.READ);const B=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",m,"):",Array.from(B)),y.unmap()}frame(l,m,S=!0){const v=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=S&&this.timeQueryEnabled;{l.clearBuffer(this.sort_info_buffer,0,4);const P={label:"cull"};B&&(P.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+0,endOfPassWriteIndex:v+1});const k=l.beginComputePass(P);k.setPipeline(this.cullPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.gsBg),k.setBindGroup(2,this.cullBg2),k.setBindGroup(3,this.bfcBindGroup);const G=Math.ceil(this.pc.num_points/Ms);k.dispatchWorkgroups(G,1,1),k.end()}{const P=l.beginComputePass({label:"calculate indirect dispatch"});P.setPipeline(this.indirectPipeline),P.setBindGroup(0,this.indirectBindGroup),P.dispatchWorkgroups(1,1,1),P.end()}{const P={label:"preprocess"};B&&(P.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+2,endOfPassWriteIndex:v+3});const k=l.beginComputePass(P);k.setPipeline(this.preprocessPipeline),k.setBindGroup(0,this.crsBg),k.setBindGroup(1,this.preprocessBg1),k.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),k.end()}for(let P=0;P<Bt;P++){const k=P&1,G=this.sort_pipelines.passes[P],L=this.sort_localHistogramBindGroups[k],Z=this.sort_scatterBindGroups[k];{const A={label:`upsweep_round${P}`};B&&P==0&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+4});const F=l.beginComputePass(A);F.setPipeline(G.localHistogram),F.setBindGroup(0,L),F.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),F.end()}{const A=l.beginComputePass({label:`prefix_round${P} - l0TileScan`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),A.end()}{const A=l.beginComputePass({label:`prefix_round${P} - l1TileScanOnL0`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),A.end()}{const A=l.beginComputePass({label:`prefix_round${P} - l1ScanSums`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroups(1,He,1),A.end()}{const A=l.beginComputePass({label:`prefix_round${P} - addL1ToL0`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),A.end()}{const A=l.beginComputePass({label:`prefix_round${P} - addL0ToElems`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),A.end()}{const A=l.beginComputePass({label:`prefix_round${P} - computeDigitBase`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroups(1,1,1),A.end()}{const A={label:`scatter_round${P}`};B&&P==Bt-1&&(A.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:v+5});const F=l.beginComputePass(A);F.setPipeline(G.scatterElements),F.setBindGroup(0,Z),F.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),F.end()}}{let P=m;this.acc16&&(this.ensureAccResources(Ie.canvas_size[0],Ie.canvas_size[1]),P=this.accView);const k={label:"render",colorAttachments:[{view:P,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(k.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+6,...this.acc16?{}:{endOfPassWriteIndex:v+7}});const G=l.beginRenderPass(k);if(G.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),G.setBindGroup(0,this.renderSettingsBindGroup),G.setBindGroup(1,this.renderSplatsBindGroup),G.setBindGroup(2,this.atlasBindGroup),G.drawIndirect(this.draw_indirect_buffer,0),G.end(),this.acc16){const L={label:"acc16_resolve",colorAttachments:[{view:m,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:v+7});const Z=l.beginRenderPass(L);Z.setPipeline(this.accResolvePipeline),Z.setBindGroup(0,this.accResolveBindGroup),Z.draw(3),Z.end()}}this.frameCount++}async readPerfMetrics(l){const m=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const v=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),P=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,k=Array.from({length:y.length},()=>[]);let G=0;for(let re=0;re<B;re++){const ie=(P+re)%this.queryCapacityFrames,N=ie*this.queriesPerFrame;let J=!0;for(let $=0;$<y.length;$++){const[W,Y,q]=y[$];if(v[N+q]===0n||v[N+Y]===0n||v[N+Y]<v[N+q]){J=!1;break}}if(!J){!m&&ie%60===0&&console.debug("[timestamp] frame slot",ie,"contains unwritten (0) timestamps, skipped in stats");continue}G++;for(let $=0;$<y.length;$++){const[W,Y,q]=y[$],O=Number(v[N+q]),ae=Number(v[N+Y]);k[$].push((ae-O)/1e6)}}if(G===0){this.resultBuffer.unmap(),m||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...k[0]);const L=[];let Z=0,A=0,F=0;for(let re=0;re<y.length;re++){const ie=y[re][0],N=k[re];let J=0;if(ie==="Total"){const $=this.allFrameTimes;J=$.reduce((q,O)=>q+O,0)/$.length;const W=[...$].sort((q,O)=>q-O);Z=W[Math.floor(W.length*.99)]||0;const Y=$.reduce((q,O)=>q+Math.pow(O-J,2),0)/$.length;A=Math.sqrt(Y),F=J}else J=N.reduce(($,W)=>$+W,0)/N.length;L.push([ie,J])}this.lastFrame+=this.frameCount,this.frameCount=0;const te=Object.fromEntries(L);this.lastStageBreakdownMs={cull:te.Culling??0,preprocess:te.Preprocess??0,sort:te.Sort??0,render:te.Render??0,total:te.Total??0};const ne=`[TIMESTAMP - ${this.constructor.name}]
`+L.map(([re,ie])=>`${re}: ${ie.toFixed(3)}ms`).join(`
`)+`
Total P99: ${Z.toFixed(3)}ms
Total STD: ${A.toFixed(3)}ms
Total AVG: ${F.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(m||(console.log(ne),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const re=`Stage,ms
`,ie=L.map(([$,W])=>`${$},${W.toFixed(3)}`).join(`
`),N="data:text/csv;charset=utf-8,"+encodeURIComponent(re+ie),J=document.createElement("a");J.href=N,J.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(J),J.click(),J.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(ne)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Es,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),m=l?l.width:1,S=l?l.height:1;Ss({width:m,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),En(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:rt(this.pc.num_points*As),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:rt(this.pc.num_points*Gs),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const m=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=m.length>0?m:this.downloadOnceFileName}else{const m=new Date,S=`${m.getFullYear()}${String(m.getMonth()+1).padStart(2,"0")}${String(m.getDate()).padStart(2,"0")}_${String(m.getHours()).padStart(2,"0")}${String(m.getMinutes()).padStart(2,"0")}${String(m.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function Os(n,l){return 2*Math.atan(l/(2*n))}function Ls(n,l,m,S){const y=Math.tan(S/2),v=Math.tan(m/2),B=y*n,P=-B,k=v*n,G=-k,L=We.create();return L[0]=2*n/(k-G),L[5]=-2*n/(B-P),L[2]=(k+G)/(k-G),L[6]=(B+P)/(B-P),L[14]=1,L[10]=l/(l-n),L[11]=-(l*n)/(l-n),We.transpose(L,L),L}async function Fs(n){Ye(`loading scene camera file... : ${n}`);const m=await(await fetch(n)).json();return Ye(`loaded cameras count: ${m.length}`),m.map(S=>{const y=ce.clone(S.position),v=Vn.create(...S.rotation.flat()),B=v[0],P=v[4],k=v[8],G=v[1],L=v[5],Z=v[9],A=v[2],F=v[6],te=v[10];B*(L*te-Z*F)-P*(G*te-Z*A)+k*(G*F-L*A)<0&&(v[1]=-v[1],v[5]=-v[5],v[9]=-v[9]);const ne=We.fromMat3(v);return{position:y,rotation:ne,img_name:S.img_name,id:S.id}})}const Ws=4*2,Cs=4*16,Pn=4*Cs+2*Ws;function qs(n){return n.createBuffer({label:"camera uniform",size:Pn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Qe=new Float32Array(Pn/Float32Array.BYTES_PER_ELEMENT),Et=class Et{constructor(l,m){z(this,"_renderSize",null);z(this,"uniform_buffer");z(this,"position",ce.create());z(this,"rotation",We.create());z(this,"fovY",45/180*Math.PI);z(this,"fovX");z(this,"focalRatioX",1);z(this,"focal",nn.create());z(this,"viewport",nn.create());z(this,"view_matrix",We.identity());z(this,"view_inv_matrix",We.identity());z(this,"proj_matrix",We.identity());z(this,"proj_inv_matrix",We.identity());z(this,"_negPos",ce.create());z(this,"look",ce.create(0,0,1));z(this,"up",ce.create(0,1,0));z(this,"right",ce.create(1,0,0));this.canvas=l,this.device=m,this.uniform_buffer=qs(m),this.on_update_canvas()}setRenderSize(l,m){this._renderSize=[l,m],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const l=this._renderSize?this._renderSize[0]:this.canvas.width,m=this._renderSize?this._renderSize[1]:this.canvas.height,S=.5*m/Math.tan(this.fovY*.5);this.focal[0]=S*this.focalRatioX,this.focal[1]=S,this.fovX=Os(this.focal[0],l),this.viewport[0]=l,this.viewport[1]=m,this.proj_matrix=Ls(.01,100,this.fovX,this.fovY),We.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],We.copy(this.rotation,this.view_matrix),We.translate(this.view_matrix,this._negPos,this.view_matrix),We.inverse(this.view_matrix,this.view_inv_matrix),ce.transformMat4Upper3x3(Et.Z_AXIS,this.view_inv_matrix,this.look),ce.normalize(this.look,this.look),ce.cross(this.up,this.look,this.right),ce.normalize(this.right,this.right);let l=0;Qe.set(this.view_matrix,l),l+=16,Qe.set(this.view_inv_matrix,l),l+=16,Qe.set(this.proj_matrix,l),l+=16,Qe.set(this.proj_inv_matrix,l),l+=16,Qe.set(this.viewport,l),l+=2,Qe.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Qe)}set_preset(l){ce.copy(l.position,this.position),We.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}setFocalRatio(l){this.focalRatioX=l,this.on_update_canvas()}getFov(){return this.fovY}};z(Et,"Z_AXIS",ce.create(0,0,1));let It=Et;const Ke=new URLSearchParams(window.location.search),Rt=(n,l)=>{const m=parseFloat(Ke.get(n)??"");return Number.isFinite(m)?m:l},tt=document.getElementById("frame"),Tt=document.getElementById("window"),ke=document.getElementById("webgpu-canvas"),Dt=document.getElementById("status"),Ns=document.getElementById("glare"),wn=document.getElementById("hint"),vt=document.getElementById("btn-mode"),Ot=document.getElementById("btn-frame");let Ve=Ke.get("mode")==="free"?"free":"train";const Lt=Ke.get("frame")??"window";let at=Lt!=="fill"&&Lt!=="none";Lt==="dark"&&tt.classList.add("dark");Ke.get("ui")==="0"&&(document.getElementById("ui").style.display="none");const ct=Ke.get("poster");ct&&(Tt.style.backgroundImage=`url("${ct}")`);const Xe=n=>{if(n===null){Dt.classList.add("hidden");return}Dt.textContent=n,Dt.classList.remove("hidden")};let Ft=1070/1600,Wt=null;function kt(){if(tt.classList.toggle("fill",!at),!at)tt.style.width="100%",tt.style.height="100%";else{const n=Math.max(8,Math.min(window.innerWidth,window.innerHeight)*.03),l=Math.round(Math.max(8,Math.min(16,window.innerWidth*.02)));tt.style.setProperty("--pad",`${l}px`);const m=window.innerWidth-2*n;let y=window.innerHeight-2*n-40,v=(y-2*l)*Ft+2*l;v>m&&(v=m,y=(v-2*l)/Ft+2*l),tt.style.width=`${Math.floor(v)}px`,tt.style.height=`${Math.floor(y)}px`}Wt&&Wt()}kt();const xt=(n,l)=>ce.normalize(ce.create(n[l],n[4+l],n[8+l]));function $s(n,l){const m=Ke.get("base")??"photo";let S=n.findIndex(Y=>Y.img_name===m);if(S<0){const Y=ce.create();for(const O of n)ce.add(Y,O.position,Y);ce.scale(Y,1/n.length,Y);let q=1/0;n.forEach((O,ae)=>{const D=ce.distance(O.position,Y);D<q&&(q=D,S=ae)})}const y=n[S],v=xt(y.rotation,0),B=xt(y.rotation,1),P=xt(y.rotation,2);let k=0,G=0,L=0,Z=0;for(const Y of n){const q=ce.sub(Y.position,y.position),O=ce.dot(q,v),ae=ce.dot(q,B);k=Math.min(k,O),G=Math.max(G,O),L=Math.min(L,ae),Z=Math.max(Z,ae)}let A=Rt("focus",NaN);if(!Number.isFinite(A)){let Y=0,q=0;for(const O of n){const ae=xt(O.rotation,2),D=ce.sub(y.position,O.position),_e=ce.dot(P,ae),fe=ce.dot(P,D),X=ce.dot(ae,D),C=1-_e*_e;if(C<1e-8)continue;const K=(_e*X-fe)/C;K>0&&(q+=K*C,Y+=C)}A=Y>0?q/Y:2}const F=ce.addScaled(y.position,P,A),te=l[S]??{},oe=te.height??1600,ne=te.width??1070,re=te.fy??1334.6;Ft=ne/oe;const ie=2*Math.atan(oe/(2*re)),N={pos:ce.clone(y.position),right:v,down:B,fwd:P,focus:F,focusDist:A,x0:k,x1:G,y0:L,y1:Z,fovY:ie},J={position:ce.create(),rotation:We.create()};let $=0,W=0;for(const Y of n){const q=ce.sub(Y.position,y.position);An(N,ce.dot(q,v),ce.dot(q,B),ce.dot(q,P),J),$=Math.max($,ce.distance(J.position,Y.position));for(let O=0;O<16;O++)W=Math.max(W,Math.abs(J.rotation[O]-Y.rotation[O]))}return console.log(`[portal] base='${y.img_name}' x[${k.toFixed(3)},${G.toFixed(3)}] y[${L.toFixed(3)},${Z.toFixed(3)}] focus ${A.toFixed(3)} fovY ${(ie*180/Math.PI).toFixed(1)}° ${n.length} cams; rig vs training poses: max |dpos| ${$.toExponential(2)}, max |dR| ${W.toExponential(2)}`),N}function An(n,l,m,S,y){const v=ce.addScaled(ce.addScaled(ce.addScaled(n.pos,n.right,l),n.down,m),n.fwd,S),B=ce.normalize(ce.sub(n.focus,v)),P=ce.normalize(ce.cross(B,ce.negate(n.down))),k=ce.cross(B,P),G=y.rotation;We.identity(G),G[0]=P[0],G[4]=P[1],G[8]=P[2],G[1]=k[0],G[5]=k[1],G[9]=k[2],G[2]=B[0],G[6]=B[1],G[10]=B[2],ce.copy(v,y.position)}function Zs(n,l,m,S){const y=new Float32Array(l),v=[];for(let k=0;k<l;k++)y[k]=(n[k*8]-m.pos[0])*m.fwd[0]+(n[k*8+1]-m.pos[1])*m.fwd[1]+(n[k*8+2]-m.pos[2])*m.fwd[2],y[k]>S&&v.push(k);v.sort((k,G)=>y[k]-y[G]||k-G);const B=new Uint32Array(l),P=new Uint32Array(new Float32Array([1]).buffer)[0];return v.forEach((k,G)=>{B[k]=P+(v.length-G)}),{keys:new Float32Array(B.buffer),count:v.length}}const Ys=3,we={x:0,y:0,z:0},ve={x:0,y:0,z:0};let st=-1e9,Ce=null;const je=new Map;let Mt=0,Gn=0;function it(){const n=Ve==="train"?1:Ys;we.x=Math.max(-n,Math.min(n,we.x)),we.y=Math.max(-n,Math.min(n,we.y)),we.z=Ve==="train"?0:Math.max(-1.5,Math.min(1,we.z))}ke.addEventListener("pointermove",n=>{const l=Tt.getBoundingClientRect();if(je.has(n.pointerId)&&je.set(n.pointerId,[n.clientX,n.clientY]),je.size===2&&Ve==="free"){const[m,S]=[...je.values()],y=Math.hypot(m[0]-S[0],m[1]-S[1]);Mt>0&&(we.z=Gn+(y/Mt-1)*1.5,it(),st=performance.now());return}if(Ce&&n.pointerId===Ce.id){const m=(n.clientX-Ce.x0)/(.5*l.width),S=(n.clientY-Ce.y0)/(.5*l.height);we.x=Ce.bx-m,we.y=Ce.by-S,it(),st=performance.now()}else n.pointerType==="mouse"&&Ve==="train"&&(we.x=(n.clientX-l.left)/l.width*2-1,we.y=(n.clientY-l.top)/l.height*2-1,it(),st=performance.now())});ke.addEventListener("pointerdown",n=>{if(ke.setPointerCapture(n.pointerId),n.pointerType==="touch"&&je.set(n.pointerId,[n.clientX,n.clientY]),je.size===2){const[l,m]=[...je.values()];Mt=Math.hypot(l[0]-m[0],l[1]-m[1]),Gn=we.z,Ce=null}else Ce={id:n.pointerId,x0:n.clientX,y0:n.clientY,bx:we.x,by:we.y};st=performance.now(),Ks()});const Dn=n=>{je.delete(n.pointerId),je.size<2&&(Mt=0),Ce&&n.pointerId===Ce.id&&(Ce=null)};ke.addEventListener("pointerup",Dn);ke.addEventListener("pointercancel",Dn);ke.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&!Ce&&Ve==="train"&&(we.x=0,we.y=0)});ke.addEventListener("wheel",n=>{Ve==="free"&&(n.preventDefault(),we.z-=n.deltaY*.0015,it(),st=performance.now())},{passive:!1});ke.addEventListener("dblclick",()=>{we.x=we.y=we.z=0});const Nt=Ke.get("gyro")!=="0";let mn=!1,yt=null;function zn(n){if(!Nt||n.beta===null||n.gamma===null||Ce||je.size)return;yt||(yt=[n.beta,n.gamma]);const l=1/18;we.x=(n.gamma-yt[1])*l,we.y=(n.beta-yt[0])*l,it(),st=performance.now()}function Ks(){if(!Nt||mn)return;mn=!0;const n=window.DeviceOrientationEvent;n&&typeof n.requestPermission=="function"&&n.requestPermission().then(l=>{l==="granted"&&window.addEventListener("deviceorientation",zn)}).catch(()=>{})}var xn;Nt&&typeof((xn=window.DeviceOrientationEvent)==null?void 0:xn.requestPermission)!="function"&&window.addEventListener("deviceorientation",zn);var yn;const Vs=((yn=window.matchMedia)==null?void 0:yn.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,js=Ke.get("idle")==="1"&&!Vs;function $t(){vt.textContent=Ve==="train"?"◎ Training views":"✥ Free",vt.title=Ve==="train"?"Camera stays within the training views — click for free movement":"Free movement (extrapolates) — click to stay within the training views",vt.classList.toggle("on",Ve==="free"),Ot.textContent=at?"▭ Framed":"⛶ Full",Ot.title=at?"Window at the photo's exact aspect — click for full-bleed":"Full-bleed — click for the framed window at the photo's aspect"}let Zt=()=>{};vt.addEventListener("click",()=>{Ve=Ve==="train"?"free":"train",it(),$t(),Zt()});Ot.addEventListener("click",()=>{at=!at,kt(),$t(),Zt()});$t();(async()=>{const n=Ke.get("bundle");if(!n){Xe("no ?bundle= given");return}if(!navigator.gpu){Xe(ct?null:"WebGPU not available");return}const l=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!l){Xe(ct?null:"WebGPU not available");return}const m=[];l.features.has("timestamp-query")&&m.push("timestamp-query"),l.features.has("texture-compression-bc")&&m.push("texture-compression-bc"),l.features.has("texture-compression-astc")&&m.push("texture-compression-astc");const S=await l.requestDevice({requiredFeatures:m,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize}}),y=m.includes("texture-compression-bc"),v=Ke.get("astc"),B=!y&&v&&m.includes("texture-compression-astc")?v:n,{bundle:P}=await hs(B,(X,C)=>{Xe(C?`loading ${Math.floor(100*X/C)}%`:`loading ${(X/2**20).toFixed(1)} MB`)});if(!P||!P.camerasBuffer){Xe("bundle has no cameras.json");return}const k=await as(new File([P.pcBuffer],"bundle.ply"),S);let G=null;if(P.atlasBuffer)try{G=is(S,ss(P.atlasBuffer),!0)}catch(X){console.warn("[portal] atlas upload failed",X)}const L=JSON.parse(new TextDecoder().decode(P.camerasBuffer)),Z=URL.createObjectURL(new Blob([P.camerasBuffer],{type:"application/json"})),A=await Fs(Z);URL.revokeObjectURL(Z);const F=$s(A,L);kt();const te=ke.getContext("webgpu"),oe="rgba8unorm";te.configure({device:S,format:oe,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});const ne=new It(ke,S),re=Rt("maxpx",13e5);ne.setFov(F.fovY);const ie=()=>{const X=Math.min(window.devicePixelRatio||1,2);let C=Math.max(1,Math.round(Tt.clientWidth*X)),K=Math.max(1,Math.round(Tt.clientHeight*X));const ee=Math.min(1,Math.sqrt(re/(C*K)));return C=Math.max(1,Math.round(C*ee)),K=Math.max(1,Math.round(K*ee)),ke.width===C&&ke.height===K?!1:(ke.width=C,ke.height=K,!0)};ie(),ne.on_update_canvas();const N=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform);let J=null;if(Ke.get("staticbg")!=="0"){const X=Rt("bgdepth",1.5*F.focusDist),{keys:C,count:K}=Zs(k.surfel_data,k.num_points,F,X);J=C,console.log(`[portal] fixed background order: ${K} / ${k.num_points} surfels beyond ${X.toFixed(2)} m`)}const $=new Rs(k,S,oe,ne.uniform_buffer,m,G,{fetchById:!N,staticSortKeys:J,wideFrustum:Ke.get("wide")!=="0"});pn(ke.width,ke.height,S,$.render_settings_buffer),Ts(k.sh_bias,S,$.render_settings_buffer),Bs(1,S,$.render_settings_buffer);let W=!0;Zt=()=>{W=!0},Wt=()=>{ie()&&(ne.on_update_canvas(),pn(ke.width,ke.height,S,$.render_settings_buffer)),W=!0},new ResizeObserver(()=>{kt()}).observe(document.body),window.__portalSet=(X,C)=>{we.x=ve.x=X,we.y=ve.y=C,W=!0};let q=performance.now(),O=0,ae=Promise.resolve(void 0);const D={x:NaN,y:NaN,z:NaN},_e={position:ne.position,rotation:ne.rotation};async function fe(){const X=performance.now(),C=Math.min((X-q)/1e3,.1);if(q=X,js&&!Ce&&X-st>4e3){const ee=X/1e3;we.x=.55*Math.sin(ee*.45),we.y=.3*Math.sin(ee*.31+1)}const K=1-Math.exp(-C*(Ce?14:6));if(ve.x+=(we.x-ve.x)*K,ve.y+=(we.y-ve.y)*K,ve.z+=(we.z-ve.z)*K,W||Math.abs(ve.x-D.x)>1e-4||Math.abs(ve.y-D.y)>1e-4||Math.abs(ve.z-D.z)>1e-4){const ee=ve.x*(ve.x>=0?F.x1:-F.x0),ge=ve.y*(ve.y>=0?F.y1:-F.y0),ye=ve.z*Math.max(F.x1-F.x0,F.y1-F.y0);An(F,ee,ge,ye,_e),ne.update_buffer(),Ns.style.transform=`translate3d(${(-ve.x*4).toFixed(2)}%, ${(-ve.y*4).toFixed(2)}%, 0)`,await ae;const ue=S.createCommandEncoder();$.frame(ue,te.getCurrentTexture().createView(),!1),S.queue.submit([ue.finish()]),ae=S.queue.onSubmittedWorkDone(),D.x=ve.x,D.y=ve.y,D.z=ve.z,W=!1,++O===1&&ae.then(()=>requestAnimationFrame(()=>{ke.classList.add("live"),Xe(null),wn.classList.add("show"),setTimeout(()=>wn.classList.remove("show"),2500)}))}requestAnimationFrame(fe)}requestAnimationFrame(fe)})().catch(n=>{console.error(n),Xe(ct?null:`failed: ${(n==null?void 0:n.message)??n}`)});
