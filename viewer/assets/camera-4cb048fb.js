var fn=Object.defineProperty;var pn=(s,r,h)=>r in s?fn(s,r,{enumerable:!0,configurable:!0,writable:!0,value:h}):s[r]=h;var B=(s,r,h)=>(pn(s,typeof r!="symbol"?r+"":r,h),h);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))w(y);new MutationObserver(y=>{for(const v of y)if(v.type==="childList")for(const G of v.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&w(G)}).observe(document,{childList:!0,subtree:!0});function h(y){const v={};return y.integrity&&(v.integrity=y.integrity),y.referrerPolicy&&(v.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?v.credentials="include":y.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function w(y){if(y.ep)return;y.ep=!0;const v=h(y);fetch(y.href,v)}})();function hn(s,r){return class extends s{constructor(...h){super(...h),r(this)}}}const _n=hn(Array,s=>s.fill(0));let re=1e-6;function gn(s){function r(g=0,x=0){const m=new s(2);return g!==void 0&&(m[0]=g,x!==void 0&&(m[1]=x)),m}const h=r;function w(g,x,m){const e=m??new s(2);return e[0]=g,e[1]=x,e}function y(g,x){const m=x??new s(2);return m[0]=Math.ceil(g[0]),m[1]=Math.ceil(g[1]),m}function v(g,x){const m=x??new s(2);return m[0]=Math.floor(g[0]),m[1]=Math.floor(g[1]),m}function G(g,x){const m=x??new s(2);return m[0]=Math.round(g[0]),m[1]=Math.round(g[1]),m}function E(g,x=0,m=1,e){const u=e??new s(2);return u[0]=Math.min(m,Math.max(x,g[0])),u[1]=Math.min(m,Math.max(x,g[1])),u}function A(g,x,m){const e=m??new s(2);return e[0]=g[0]+x[0],e[1]=g[1]+x[1],e}function R(g,x,m,e){const u=e??new s(2);return u[0]=g[0]+x[0]*m,u[1]=g[1]+x[1]*m,u}function I(g,x){const m=g[0],e=g[1],u=x[0],a=x[1],o=Math.sqrt(m*m+e*e),n=Math.sqrt(u*u+a*a),c=o*n,_=c&&le(g,x)/c;return Math.acos(_)}function Z(g,x,m){const e=m??new s(2);return e[0]=g[0]-x[0],e[1]=g[1]-x[1],e}const M=Z;function q(g,x){return Math.abs(g[0]-x[0])<re&&Math.abs(g[1]-x[1])<re}function C(g,x){return g[0]===x[0]&&g[1]===x[1]}function te(g,x,m,e){const u=e??new s(2);return u[0]=g[0]+m*(x[0]-g[0]),u[1]=g[1]+m*(x[1]-g[1]),u}function ee(g,x,m,e){const u=e??new s(2);return u[0]=g[0]+m[0]*(x[0]-g[0]),u[1]=g[1]+m[1]*(x[1]-g[1]),u}function j(g,x,m){const e=m??new s(2);return e[0]=Math.max(g[0],x[0]),e[1]=Math.max(g[1],x[1]),e}function $(g,x,m){const e=m??new s(2);return e[0]=Math.min(g[0],x[0]),e[1]=Math.min(g[1],x[1]),e}function J(g,x,m){const e=m??new s(2);return e[0]=g[0]*x,e[1]=g[1]*x,e}const L=J;function F(g,x,m){const e=m??new s(2);return e[0]=g[0]/x,e[1]=g[1]/x,e}function X(g,x){const m=x??new s(2);return m[0]=1/g[0],m[1]=1/g[1],m}const ae=X;function ie(g,x,m){const e=m??new s(3),u=g[0]*x[1]-g[1]*x[0];return e[0]=0,e[1]=0,e[2]=u,e}function le(g,x){return g[0]*x[0]+g[1]*x[1]}function pe(g){const x=g[0],m=g[1];return Math.sqrt(x*x+m*m)}const _e=pe;function ne(g){const x=g[0],m=g[1];return x*x+m*m}const z=ne;function ce(g,x){const m=g[0]-x[0],e=g[1]-x[1];return Math.sqrt(m*m+e*e)}const W=ce;function N(g,x){const m=g[0]-x[0],e=g[1]-x[1];return m*m+e*e}const H=N;function he(g,x){const m=x??new s(2),e=g[0],u=g[1],a=Math.sqrt(e*e+u*u);return a>1e-5?(m[0]=e/a,m[1]=u/a):(m[0]=0,m[1]=0),m}function ge(g,x){const m=x??new s(2);return m[0]=-g[0],m[1]=-g[1],m}function oe(g,x){const m=x??new s(2);return m[0]=g[0],m[1]=g[1],m}const we=oe;function ue(g,x,m){const e=m??new s(2);return e[0]=g[0]*x[0],e[1]=g[1]*x[1],e}const xe=ue;function Be(g,x,m){const e=m??new s(2);return e[0]=g[0]/x[0],e[1]=g[1]/x[1],e}const Te=Be;function Q(g=1,x){const m=x??new s(2),e=Math.random()*2*Math.PI;return m[0]=Math.cos(e)*g,m[1]=Math.sin(e)*g,m}function b(g){const x=g??new s(2);return x[0]=0,x[1]=0,x}function T(g,x,m){const e=m??new s(2),u=g[0],a=g[1];return e[0]=u*x[0]+a*x[4]+x[12],e[1]=u*x[1]+a*x[5]+x[13],e}function f(g,x,m){const e=m??new s(2),u=g[0],a=g[1];return e[0]=x[0]*u+x[4]*a+x[8],e[1]=x[1]*u+x[5]*a+x[9],e}function t(g,x,m,e){const u=e??new s(2),a=g[0]-x[0],o=g[1]-x[1],n=Math.sin(m),c=Math.cos(m);return u[0]=a*c-o*n+x[0],u[1]=a*n+o*c+x[1],u}function l(g,x,m){const e=m??new s(2);return he(g,e),J(e,x,e)}function i(g,x,m){const e=m??new s(2);return pe(g)>x?l(g,x,e):oe(g,e)}function d(g,x,m){const e=m??new s(2);return te(g,x,.5,e)}return{create:r,fromValues:h,set:w,ceil:y,floor:v,round:G,clamp:E,add:A,addScaled:R,angle:I,subtract:Z,sub:M,equalsApproximately:q,equals:C,lerp:te,lerpV:ee,max:j,min:$,mulScalar:J,scale:L,divScalar:F,inverse:X,invert:ae,cross:ie,dot:le,length:pe,len:_e,lengthSq:ne,lenSq:z,distance:ce,dist:W,distanceSq:N,distSq:H,normalize:he,negate:ge,copy:oe,clone:we,multiply:ue,mul:xe,divide:Be,div:Te,random:Q,zero:b,transformMat4:T,transformMat3:f,rotate:t,setLength:l,truncate:i,midpoint:d}}const Et=new Map;function Jt(s){let r=Et.get(s);return r||(r=gn(s),Et.set(s,r)),r}function mn(s){function r(n,c,_){const p=new s(3);return n!==void 0&&(p[0]=n,c!==void 0&&(p[1]=c,_!==void 0&&(p[2]=_))),p}const h=r;function w(n,c,_,p){const S=p??new s(3);return S[0]=n,S[1]=c,S[2]=_,S}function y(n,c){const _=c??new s(3);return _[0]=Math.ceil(n[0]),_[1]=Math.ceil(n[1]),_[2]=Math.ceil(n[2]),_}function v(n,c){const _=c??new s(3);return _[0]=Math.floor(n[0]),_[1]=Math.floor(n[1]),_[2]=Math.floor(n[2]),_}function G(n,c){const _=c??new s(3);return _[0]=Math.round(n[0]),_[1]=Math.round(n[1]),_[2]=Math.round(n[2]),_}function E(n,c=0,_=1,p){const S=p??new s(3);return S[0]=Math.min(_,Math.max(c,n[0])),S[1]=Math.min(_,Math.max(c,n[1])),S[2]=Math.min(_,Math.max(c,n[2])),S}function A(n,c,_){const p=_??new s(3);return p[0]=n[0]+c[0],p[1]=n[1]+c[1],p[2]=n[2]+c[2],p}function R(n,c,_,p){const S=p??new s(3);return S[0]=n[0]+c[0]*_,S[1]=n[1]+c[1]*_,S[2]=n[2]+c[2]*_,S}function I(n,c){const _=n[0],p=n[1],S=n[2],k=c[0],P=c[1],O=c[2],D=Math.sqrt(_*_+p*p+S*S),U=Math.sqrt(k*k+P*P+O*O),K=D*U,se=K&&le(n,c)/K;return Math.acos(se)}function Z(n,c,_){const p=_??new s(3);return p[0]=n[0]-c[0],p[1]=n[1]-c[1],p[2]=n[2]-c[2],p}const M=Z;function q(n,c){return Math.abs(n[0]-c[0])<re&&Math.abs(n[1]-c[1])<re&&Math.abs(n[2]-c[2])<re}function C(n,c){return n[0]===c[0]&&n[1]===c[1]&&n[2]===c[2]}function te(n,c,_,p){const S=p??new s(3);return S[0]=n[0]+_*(c[0]-n[0]),S[1]=n[1]+_*(c[1]-n[1]),S[2]=n[2]+_*(c[2]-n[2]),S}function ee(n,c,_,p){const S=p??new s(3);return S[0]=n[0]+_[0]*(c[0]-n[0]),S[1]=n[1]+_[1]*(c[1]-n[1]),S[2]=n[2]+_[2]*(c[2]-n[2]),S}function j(n,c,_){const p=_??new s(3);return p[0]=Math.max(n[0],c[0]),p[1]=Math.max(n[1],c[1]),p[2]=Math.max(n[2],c[2]),p}function $(n,c,_){const p=_??new s(3);return p[0]=Math.min(n[0],c[0]),p[1]=Math.min(n[1],c[1]),p[2]=Math.min(n[2],c[2]),p}function J(n,c,_){const p=_??new s(3);return p[0]=n[0]*c,p[1]=n[1]*c,p[2]=n[2]*c,p}const L=J;function F(n,c,_){const p=_??new s(3);return p[0]=n[0]/c,p[1]=n[1]/c,p[2]=n[2]/c,p}function X(n,c){const _=c??new s(3);return _[0]=1/n[0],_[1]=1/n[1],_[2]=1/n[2],_}const ae=X;function ie(n,c,_){const p=_??new s(3),S=n[2]*c[0]-n[0]*c[2],k=n[0]*c[1]-n[1]*c[0];return p[0]=n[1]*c[2]-n[2]*c[1],p[1]=S,p[2]=k,p}function le(n,c){return n[0]*c[0]+n[1]*c[1]+n[2]*c[2]}function pe(n){const c=n[0],_=n[1],p=n[2];return Math.sqrt(c*c+_*_+p*p)}const _e=pe;function ne(n){const c=n[0],_=n[1],p=n[2];return c*c+_*_+p*p}const z=ne;function ce(n,c){const _=n[0]-c[0],p=n[1]-c[1],S=n[2]-c[2];return Math.sqrt(_*_+p*p+S*S)}const W=ce;function N(n,c){const _=n[0]-c[0],p=n[1]-c[1],S=n[2]-c[2];return _*_+p*p+S*S}const H=N;function he(n,c){const _=c??new s(3),p=n[0],S=n[1],k=n[2],P=Math.sqrt(p*p+S*S+k*k);return P>1e-5?(_[0]=p/P,_[1]=S/P,_[2]=k/P):(_[0]=0,_[1]=0,_[2]=0),_}function ge(n,c){const _=c??new s(3);return _[0]=-n[0],_[1]=-n[1],_[2]=-n[2],_}function oe(n,c){const _=c??new s(3);return _[0]=n[0],_[1]=n[1],_[2]=n[2],_}const we=oe;function ue(n,c,_){const p=_??new s(3);return p[0]=n[0]*c[0],p[1]=n[1]*c[1],p[2]=n[2]*c[2],p}const xe=ue;function Be(n,c,_){const p=_??new s(3);return p[0]=n[0]/c[0],p[1]=n[1]/c[1],p[2]=n[2]/c[2],p}const Te=Be;function Q(n=1,c){const _=c??new s(3),p=Math.random()*2*Math.PI,S=Math.random()*2-1,k=Math.sqrt(1-S*S)*n;return _[0]=Math.cos(p)*k,_[1]=Math.sin(p)*k,_[2]=S*n,_}function b(n){const c=n??new s(3);return c[0]=0,c[1]=0,c[2]=0,c}function T(n,c,_){const p=_??new s(3),S=n[0],k=n[1],P=n[2],O=c[3]*S+c[7]*k+c[11]*P+c[15]||1;return p[0]=(c[0]*S+c[4]*k+c[8]*P+c[12])/O,p[1]=(c[1]*S+c[5]*k+c[9]*P+c[13])/O,p[2]=(c[2]*S+c[6]*k+c[10]*P+c[14])/O,p}function f(n,c,_){const p=_??new s(3),S=n[0],k=n[1],P=n[2];return p[0]=S*c[0*4+0]+k*c[1*4+0]+P*c[2*4+0],p[1]=S*c[0*4+1]+k*c[1*4+1]+P*c[2*4+1],p[2]=S*c[0*4+2]+k*c[1*4+2]+P*c[2*4+2],p}function t(n,c,_){const p=_??new s(3),S=n[0],k=n[1],P=n[2];return p[0]=S*c[0]+k*c[4]+P*c[8],p[1]=S*c[1]+k*c[5]+P*c[9],p[2]=S*c[2]+k*c[6]+P*c[10],p}function l(n,c,_){const p=_??new s(3),S=c[0],k=c[1],P=c[2],O=c[3]*2,D=n[0],U=n[1],K=n[2],se=k*K-P*U,V=P*D-S*K,Y=S*U-k*D;return p[0]=D+se*O+(k*Y-P*V)*2,p[1]=U+V*O+(P*se-S*Y)*2,p[2]=K+Y*O+(S*V-k*se)*2,p}function i(n,c){const _=c??new s(3);return _[0]=n[12],_[1]=n[13],_[2]=n[14],_}function d(n,c,_){const p=_??new s(3),S=c*4;return p[0]=n[S+0],p[1]=n[S+1],p[2]=n[S+2],p}function g(n,c){const _=c??new s(3),p=n[0],S=n[1],k=n[2],P=n[4],O=n[5],D=n[6],U=n[8],K=n[9],se=n[10];return _[0]=Math.sqrt(p*p+S*S+k*k),_[1]=Math.sqrt(P*P+O*O+D*D),_[2]=Math.sqrt(U*U+K*K+se*se),_}function x(n,c,_,p){const S=p??new s(3),k=[],P=[];return k[0]=n[0]-c[0],k[1]=n[1]-c[1],k[2]=n[2]-c[2],P[0]=k[0],P[1]=k[1]*Math.cos(_)-k[2]*Math.sin(_),P[2]=k[1]*Math.sin(_)+k[2]*Math.cos(_),S[0]=P[0]+c[0],S[1]=P[1]+c[1],S[2]=P[2]+c[2],S}function m(n,c,_,p){const S=p??new s(3),k=[],P=[];return k[0]=n[0]-c[0],k[1]=n[1]-c[1],k[2]=n[2]-c[2],P[0]=k[2]*Math.sin(_)+k[0]*Math.cos(_),P[1]=k[1],P[2]=k[2]*Math.cos(_)-k[0]*Math.sin(_),S[0]=P[0]+c[0],S[1]=P[1]+c[1],S[2]=P[2]+c[2],S}function e(n,c,_,p){const S=p??new s(3),k=[],P=[];return k[0]=n[0]-c[0],k[1]=n[1]-c[1],k[2]=n[2]-c[2],P[0]=k[0]*Math.cos(_)-k[1]*Math.sin(_),P[1]=k[0]*Math.sin(_)+k[1]*Math.cos(_),P[2]=k[2],S[0]=P[0]+c[0],S[1]=P[1]+c[1],S[2]=P[2]+c[2],S}function u(n,c,_){const p=_??new s(3);return he(n,p),J(p,c,p)}function a(n,c,_){const p=_??new s(3);return pe(n)>c?u(n,c,p):oe(n,p)}function o(n,c,_){const p=_??new s(3);return te(n,c,.5,p)}return{create:r,fromValues:h,set:w,ceil:y,floor:v,round:G,clamp:E,add:A,addScaled:R,angle:I,subtract:Z,sub:M,equalsApproximately:q,equals:C,lerp:te,lerpV:ee,max:j,min:$,mulScalar:J,scale:L,divScalar:F,inverse:X,invert:ae,cross:ie,dot:le,length:pe,len:_e,lengthSq:ne,lenSq:z,distance:ce,dist:W,distanceSq:N,distSq:H,normalize:he,negate:ge,copy:oe,clone:we,multiply:ue,mul:xe,divide:Be,div:Te,random:Q,zero:b,transformMat4:T,transformMat4Upper3x3:f,transformMat3:t,transformQuat:l,getTranslation:i,getAxis:d,getScaling:g,rotateX:x,rotateY:m,rotateZ:e,setLength:u,truncate:a,midpoint:o}}const At=new Map;function gt(s){let r=At.get(s);return r||(r=mn(s),At.set(s,r)),r}function xn(s){const r=Jt(s),h=gt(s);function w(t,l,i,d,g,x,m,e,u){const a=new s(12);return a[3]=0,a[7]=0,a[11]=0,t!==void 0&&(a[0]=t,l!==void 0&&(a[1]=l,i!==void 0&&(a[2]=i,d!==void 0&&(a[4]=d,g!==void 0&&(a[5]=g,x!==void 0&&(a[6]=x,m!==void 0&&(a[8]=m,e!==void 0&&(a[9]=e,u!==void 0&&(a[10]=u))))))))),a}function y(t,l,i,d,g,x,m,e,u,a){const o=a??new s(12);return o[0]=t,o[1]=l,o[2]=i,o[3]=0,o[4]=d,o[5]=g,o[6]=x,o[7]=0,o[8]=m,o[9]=e,o[10]=u,o[11]=0,o}function v(t,l){const i=l??new s(12);return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=0,i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=0,i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=0,i}function G(t,l){const i=l??new s(12),d=t[0],g=t[1],x=t[2],m=t[3],e=d+d,u=g+g,a=x+x,o=d*e,n=g*e,c=g*u,_=x*e,p=x*u,S=x*a,k=m*e,P=m*u,O=m*a;return i[0]=1-c-S,i[1]=n+O,i[2]=_-P,i[3]=0,i[4]=n-O,i[5]=1-o-S,i[6]=p+k,i[7]=0,i[8]=_+P,i[9]=p-k,i[10]=1-o-c,i[11]=0,i}function E(t,l){const i=l??new s(12);return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i[4]=-t[4],i[5]=-t[5],i[6]=-t[6],i[8]=-t[8],i[9]=-t[9],i[10]=-t[10],i}function A(t,l,i){const d=i??new s(12);return d[0]=t[0]*l,d[1]=t[1]*l,d[2]=t[2]*l,d[4]=t[4]*l,d[5]=t[5]*l,d[6]=t[6]*l,d[8]=t[8]*l,d[9]=t[9]*l,d[10]=t[10]*l,d}const R=A;function I(t,l,i){const d=i??new s(12);return d[0]=t[0]+l[0],d[1]=t[1]+l[1],d[2]=t[2]+l[2],d[4]=t[4]+l[4],d[5]=t[5]+l[5],d[6]=t[6]+l[6],d[8]=t[8]+l[8],d[9]=t[9]+l[9],d[10]=t[10]+l[10],d}function Z(t,l){const i=l??new s(12);return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[8]=t[8],i[9]=t[9],i[10]=t[10],i}const M=Z;function q(t,l){return Math.abs(t[0]-l[0])<re&&Math.abs(t[1]-l[1])<re&&Math.abs(t[2]-l[2])<re&&Math.abs(t[4]-l[4])<re&&Math.abs(t[5]-l[5])<re&&Math.abs(t[6]-l[6])<re&&Math.abs(t[8]-l[8])<re&&Math.abs(t[9]-l[9])<re&&Math.abs(t[10]-l[10])<re}function C(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]}function te(t){const l=t??new s(12);return l[0]=1,l[1]=0,l[2]=0,l[4]=0,l[5]=1,l[6]=0,l[8]=0,l[9]=0,l[10]=1,l}function ee(t,l){const i=l??new s(12);if(i===t){let c;return c=t[1],t[1]=t[4],t[4]=c,c=t[2],t[2]=t[8],t[8]=c,c=t[6],t[6]=t[9],t[9]=c,i}const d=t[0*4+0],g=t[0*4+1],x=t[0*4+2],m=t[1*4+0],e=t[1*4+1],u=t[1*4+2],a=t[2*4+0],o=t[2*4+1],n=t[2*4+2];return i[0]=d,i[1]=m,i[2]=a,i[4]=g,i[5]=e,i[6]=o,i[8]=x,i[9]=u,i[10]=n,i}function j(t,l){const i=l??new s(12),d=t[0*4+0],g=t[0*4+1],x=t[0*4+2],m=t[1*4+0],e=t[1*4+1],u=t[1*4+2],a=t[2*4+0],o=t[2*4+1],n=t[2*4+2],c=n*e-u*o,_=-n*m+u*a,p=o*m-e*a,S=1/(d*c+g*_+x*p);return i[0]=c*S,i[1]=(-n*g+x*o)*S,i[2]=(u*g-x*e)*S,i[4]=_*S,i[5]=(n*d-x*a)*S,i[6]=(-u*d+x*m)*S,i[8]=p*S,i[9]=(-o*d+g*a)*S,i[10]=(e*d-g*m)*S,i}function $(t){const l=t[0],i=t[0*4+1],d=t[0*4+2],g=t[1*4+0],x=t[1*4+1],m=t[1*4+2],e=t[2*4+0],u=t[2*4+1],a=t[2*4+2];return l*(x*a-u*m)-g*(i*a-u*d)+e*(i*m-x*d)}const J=j;function L(t,l,i){const d=i??new s(12),g=t[0],x=t[1],m=t[2],e=t[4+0],u=t[4+1],a=t[4+2],o=t[8+0],n=t[8+1],c=t[8+2],_=l[0],p=l[1],S=l[2],k=l[4+0],P=l[4+1],O=l[4+2],D=l[8+0],U=l[8+1],K=l[8+2];return d[0]=g*_+e*p+o*S,d[1]=x*_+u*p+n*S,d[2]=m*_+a*p+c*S,d[4]=g*k+e*P+o*O,d[5]=x*k+u*P+n*O,d[6]=m*k+a*P+c*O,d[8]=g*D+e*U+o*K,d[9]=x*D+u*U+n*K,d[10]=m*D+a*U+c*K,d}const F=L;function X(t,l,i){const d=i??te();return t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2],d[4]=t[4],d[5]=t[5],d[6]=t[6]),d[8]=l[0],d[9]=l[1],d[10]=1,d}function ae(t,l){const i=l??r.create();return i[0]=t[8],i[1]=t[9],i}function ie(t,l,i){const d=i??r.create(),g=l*4;return d[0]=t[g+0],d[1]=t[g+1],d}function le(t,l,i,d){const g=d===t?t:Z(t,d),x=i*4;return g[x+0]=l[0],g[x+1]=l[1],g}function pe(t,l){const i=l??r.create(),d=t[0],g=t[1],x=t[4],m=t[5];return i[0]=Math.sqrt(d*d+g*g),i[1]=Math.sqrt(x*x+m*m),i}function _e(t,l){const i=l??h.create(),d=t[0],g=t[1],x=t[2],m=t[4],e=t[5],u=t[6],a=t[8],o=t[9],n=t[10];return i[0]=Math.sqrt(d*d+g*g+x*x),i[1]=Math.sqrt(m*m+e*e+u*u),i[2]=Math.sqrt(a*a+o*o+n*n),i}function ne(t,l){const i=l??new s(12);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=1,i[6]=0,i[8]=t[0],i[9]=t[1],i[10]=1,i}function z(t,l,i){const d=i??new s(12),g=l[0],x=l[1],m=t[0],e=t[1],u=t[2],a=t[1*4+0],o=t[1*4+1],n=t[1*4+2],c=t[2*4+0],_=t[2*4+1],p=t[2*4+2];return t!==d&&(d[0]=m,d[1]=e,d[2]=u,d[4]=a,d[5]=o,d[6]=n),d[8]=m*g+a*x+c,d[9]=e*g+o*x+_,d[10]=u*g+n*x+p,d}function ce(t,l){const i=l??new s(12),d=Math.cos(t),g=Math.sin(t);return i[0]=d,i[1]=g,i[2]=0,i[4]=-g,i[5]=d,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function W(t,l,i){const d=i??new s(12),g=t[0*4+0],x=t[0*4+1],m=t[0*4+2],e=t[1*4+0],u=t[1*4+1],a=t[1*4+2],o=Math.cos(l),n=Math.sin(l);return d[0]=o*g+n*e,d[1]=o*x+n*u,d[2]=o*m+n*a,d[4]=o*e-n*g,d[5]=o*u-n*x,d[6]=o*a-n*m,t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function N(t,l){const i=l??new s(12),d=Math.cos(t),g=Math.sin(t);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=d,i[6]=g,i[8]=0,i[9]=-g,i[10]=d,i}function H(t,l,i){const d=i??new s(12),g=t[4],x=t[5],m=t[6],e=t[8],u=t[9],a=t[10],o=Math.cos(l),n=Math.sin(l);return d[4]=o*g+n*e,d[5]=o*x+n*u,d[6]=o*m+n*a,d[8]=o*e-n*g,d[9]=o*u-n*x,d[10]=o*a-n*m,t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2]),d}function he(t,l){const i=l??new s(12),d=Math.cos(t),g=Math.sin(t);return i[0]=d,i[1]=0,i[2]=-g,i[4]=0,i[5]=1,i[6]=0,i[8]=g,i[9]=0,i[10]=d,i}function ge(t,l,i){const d=i??new s(12),g=t[0*4+0],x=t[0*4+1],m=t[0*4+2],e=t[2*4+0],u=t[2*4+1],a=t[2*4+2],o=Math.cos(l),n=Math.sin(l);return d[0]=o*g-n*e,d[1]=o*x-n*u,d[2]=o*m-n*a,d[8]=o*e+n*g,d[9]=o*u+n*x,d[10]=o*a+n*m,t!==d&&(d[4]=t[4],d[5]=t[5],d[6]=t[6]),d}const oe=ce,we=W;function ue(t,l){const i=l??new s(12);return i[0]=t[0],i[1]=0,i[2]=0,i[4]=0,i[5]=t[1],i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function xe(t,l,i){const d=i??new s(12),g=l[0],x=l[1];return d[0]=g*t[0*4+0],d[1]=g*t[0*4+1],d[2]=g*t[0*4+2],d[4]=x*t[1*4+0],d[5]=x*t[1*4+1],d[6]=x*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function Be(t,l){const i=l??new s(12);return i[0]=t[0],i[1]=0,i[2]=0,i[4]=0,i[5]=t[1],i[6]=0,i[8]=0,i[9]=0,i[10]=t[2],i}function Te(t,l,i){const d=i??new s(12),g=l[0],x=l[1],m=l[2];return d[0]=g*t[0*4+0],d[1]=g*t[0*4+1],d[2]=g*t[0*4+2],d[4]=x*t[1*4+0],d[5]=x*t[1*4+1],d[6]=x*t[1*4+2],d[8]=m*t[2*4+0],d[9]=m*t[2*4+1],d[10]=m*t[2*4+2],d}function Q(t,l){const i=l??new s(12);return i[0]=t,i[1]=0,i[2]=0,i[4]=0,i[5]=t,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function b(t,l,i){const d=i??new s(12);return d[0]=l*t[0*4+0],d[1]=l*t[0*4+1],d[2]=l*t[0*4+2],d[4]=l*t[1*4+0],d[5]=l*t[1*4+1],d[6]=l*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function T(t,l){const i=l??new s(12);return i[0]=t,i[1]=0,i[2]=0,i[4]=0,i[5]=t,i[6]=0,i[8]=0,i[9]=0,i[10]=t,i}function f(t,l,i){const d=i??new s(12);return d[0]=l*t[0*4+0],d[1]=l*t[0*4+1],d[2]=l*t[0*4+2],d[4]=l*t[1*4+0],d[5]=l*t[1*4+1],d[6]=l*t[1*4+2],d[8]=l*t[2*4+0],d[9]=l*t[2*4+1],d[10]=l*t[2*4+2],d}return{add:I,clone:M,copy:Z,create:w,determinant:$,equals:C,equalsApproximately:q,fromMat4:v,fromQuat:G,get3DScaling:_e,getAxis:ie,getScaling:pe,getTranslation:ae,identity:te,inverse:j,invert:J,mul:F,mulScalar:R,multiply:L,multiplyScalar:A,negate:E,rotate:W,rotateX:H,rotateY:ge,rotateZ:we,rotation:ce,rotationX:N,rotationY:he,rotationZ:oe,scale:xe,scale3D:Te,scaling:ue,scaling3D:Be,set:y,setAxis:le,setTranslation:X,translate:z,translation:ne,transpose:ee,uniformScale:b,uniformScale3D:f,uniformScaling:Q,uniformScaling3D:T}}const Mt=new Map;function wn(s){let r=Mt.get(s);return r||(r=xn(s),Mt.set(s,r)),r}function yn(s){const r=gt(s);function h(e,u,a,o,n,c,_,p,S,k,P,O,D,U,K,se){const V=new s(16);return e!==void 0&&(V[0]=e,u!==void 0&&(V[1]=u,a!==void 0&&(V[2]=a,o!==void 0&&(V[3]=o,n!==void 0&&(V[4]=n,c!==void 0&&(V[5]=c,_!==void 0&&(V[6]=_,p!==void 0&&(V[7]=p,S!==void 0&&(V[8]=S,k!==void 0&&(V[9]=k,P!==void 0&&(V[10]=P,O!==void 0&&(V[11]=O,D!==void 0&&(V[12]=D,U!==void 0&&(V[13]=U,K!==void 0&&(V[14]=K,se!==void 0&&(V[15]=se)))))))))))))))),V}function w(e,u,a,o,n,c,_,p,S,k,P,O,D,U,K,se,V){const Y=V??new s(16);return Y[0]=e,Y[1]=u,Y[2]=a,Y[3]=o,Y[4]=n,Y[5]=c,Y[6]=_,Y[7]=p,Y[8]=S,Y[9]=k,Y[10]=P,Y[11]=O,Y[12]=D,Y[13]=U,Y[14]=K,Y[15]=se,Y}function y(e,u){const a=u??new s(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=0,a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function v(e,u){const a=u??new s(16),o=e[0],n=e[1],c=e[2],_=e[3],p=o+o,S=n+n,k=c+c,P=o*p,O=n*p,D=n*S,U=c*p,K=c*S,se=c*k,V=_*p,Y=_*S,fe=_*k;return a[0]=1-D-se,a[1]=O+fe,a[2]=U-Y,a[3]=0,a[4]=O-fe,a[5]=1-P-se,a[6]=K+V,a[7]=0,a[8]=U+Y,a[9]=K-V,a[10]=1-P-D,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function G(e,u){const a=u??new s(16);return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a[3]=-e[3],a[4]=-e[4],a[5]=-e[5],a[6]=-e[6],a[7]=-e[7],a[8]=-e[8],a[9]=-e[9],a[10]=-e[10],a[11]=-e[11],a[12]=-e[12],a[13]=-e[13],a[14]=-e[14],a[15]=-e[15],a}function E(e,u,a){const o=a??new s(16);return o[0]=e[0]+u[0],o[1]=e[1]+u[1],o[2]=e[2]+u[2],o[3]=e[3]+u[3],o[4]=e[4]+u[4],o[5]=e[5]+u[5],o[6]=e[6]+u[6],o[7]=e[7]+u[7],o[8]=e[8]+u[8],o[9]=e[9]+u[9],o[10]=e[10]+u[10],o[11]=e[11]+u[11],o[12]=e[12]+u[12],o[13]=e[13]+u[13],o[14]=e[14]+u[14],o[15]=e[15]+u[15],o}function A(e,u,a){const o=a??new s(16);return o[0]=e[0]*u,o[1]=e[1]*u,o[2]=e[2]*u,o[3]=e[3]*u,o[4]=e[4]*u,o[5]=e[5]*u,o[6]=e[6]*u,o[7]=e[7]*u,o[8]=e[8]*u,o[9]=e[9]*u,o[10]=e[10]*u,o[11]=e[11]*u,o[12]=e[12]*u,o[13]=e[13]*u,o[14]=e[14]*u,o[15]=e[15]*u,o}const R=A;function I(e,u){const a=u??new s(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15],a}const Z=I;function M(e,u){return Math.abs(e[0]-u[0])<re&&Math.abs(e[1]-u[1])<re&&Math.abs(e[2]-u[2])<re&&Math.abs(e[3]-u[3])<re&&Math.abs(e[4]-u[4])<re&&Math.abs(e[5]-u[5])<re&&Math.abs(e[6]-u[6])<re&&Math.abs(e[7]-u[7])<re&&Math.abs(e[8]-u[8])<re&&Math.abs(e[9]-u[9])<re&&Math.abs(e[10]-u[10])<re&&Math.abs(e[11]-u[11])<re&&Math.abs(e[12]-u[12])<re&&Math.abs(e[13]-u[13])<re&&Math.abs(e[14]-u[14])<re&&Math.abs(e[15]-u[15])<re}function q(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function C(e){const u=e??new s(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function te(e,u){const a=u??new s(16);if(a===e){let de;return de=e[1],e[1]=e[4],e[4]=de,de=e[2],e[2]=e[8],e[8]=de,de=e[3],e[3]=e[12],e[12]=de,de=e[6],e[6]=e[9],e[9]=de,de=e[7],e[7]=e[13],e[13]=de,de=e[11],e[11]=e[14],e[14]=de,a}const o=e[0*4+0],n=e[0*4+1],c=e[0*4+2],_=e[0*4+3],p=e[1*4+0],S=e[1*4+1],k=e[1*4+2],P=e[1*4+3],O=e[2*4+0],D=e[2*4+1],U=e[2*4+2],K=e[2*4+3],se=e[3*4+0],V=e[3*4+1],Y=e[3*4+2],fe=e[3*4+3];return a[0]=o,a[1]=p,a[2]=O,a[3]=se,a[4]=n,a[5]=S,a[6]=D,a[7]=V,a[8]=c,a[9]=k,a[10]=U,a[11]=Y,a[12]=_,a[13]=P,a[14]=K,a[15]=fe,a}function ee(e,u){const a=u??new s(16),o=e[0*4+0],n=e[0*4+1],c=e[0*4+2],_=e[0*4+3],p=e[1*4+0],S=e[1*4+1],k=e[1*4+2],P=e[1*4+3],O=e[2*4+0],D=e[2*4+1],U=e[2*4+2],K=e[2*4+3],se=e[3*4+0],V=e[3*4+1],Y=e[3*4+2],fe=e[3*4+3],de=U*fe,ve=Y*K,be=k*fe,Se=Y*P,Pe=k*K,ke=U*P,Ge=c*fe,Ee=Y*_,Ae=c*K,Me=U*_,ze=c*P,Ue=k*_,Re=O*V,Oe=se*D,Le=p*V,Fe=se*S,Ce=p*D,nt=O*S,st=o*V,rt=se*n,at=o*D,it=O*n,ot=o*S,lt=p*n,Pt=de*S+Se*D+Pe*V-(ve*S+be*D+ke*V),Tt=ve*n+Ge*D+Me*V-(de*n+Ee*D+Ae*V),kt=be*n+Ee*S+ze*V-(Se*n+Ge*S+Ue*V),Gt=ke*n+Ae*S+Ue*D-(Pe*n+Me*S+ze*D),De=1/(o*Pt+p*Tt+O*kt+se*Gt);return a[0]=De*Pt,a[1]=De*Tt,a[2]=De*kt,a[3]=De*Gt,a[4]=De*(ve*p+be*O+ke*se-(de*p+Se*O+Pe*se)),a[5]=De*(de*o+Ee*O+Ae*se-(ve*o+Ge*O+Me*se)),a[6]=De*(Se*o+Ge*p+Ue*se-(be*o+Ee*p+ze*se)),a[7]=De*(Pe*o+Me*p+ze*O-(ke*o+Ae*p+Ue*O)),a[8]=De*(Re*P+Fe*K+Ce*fe-(Oe*P+Le*K+nt*fe)),a[9]=De*(Oe*_+st*K+it*fe-(Re*_+rt*K+at*fe)),a[10]=De*(Le*_+rt*P+ot*fe-(Fe*_+st*P+lt*fe)),a[11]=De*(nt*_+at*P+lt*K-(Ce*_+it*P+ot*K)),a[12]=De*(Le*U+nt*Y+Oe*k-(Ce*Y+Re*k+Fe*U)),a[13]=De*(at*Y+Re*c+rt*U-(st*U+it*Y+Oe*c)),a[14]=De*(st*k+lt*Y+Fe*c-(ot*Y+Le*c+rt*k)),a[15]=De*(ot*U+Ce*c+it*k-(at*k+lt*U+nt*c)),a}function j(e){const u=e[0],a=e[0*4+1],o=e[0*4+2],n=e[0*4+3],c=e[1*4+0],_=e[1*4+1],p=e[1*4+2],S=e[1*4+3],k=e[2*4+0],P=e[2*4+1],O=e[2*4+2],D=e[2*4+3],U=e[3*4+0],K=e[3*4+1],se=e[3*4+2],V=e[3*4+3],Y=O*V,fe=se*D,de=p*V,ve=se*S,be=p*D,Se=O*S,Pe=o*V,ke=se*n,Ge=o*D,Ee=O*n,Ae=o*S,Me=p*n,ze=Y*_+ve*P+be*K-(fe*_+de*P+Se*K),Ue=fe*a+Pe*P+Ee*K-(Y*a+ke*P+Ge*K),Re=de*a+ke*_+Ae*K-(ve*a+Pe*_+Me*K),Oe=Se*a+Ge*_+Me*P-(be*a+Ee*_+Ae*P);return u*ze+c*Ue+k*Re+U*Oe}const $=ee;function J(e,u,a){const o=a??new s(16),n=e[0],c=e[1],_=e[2],p=e[3],S=e[4+0],k=e[4+1],P=e[4+2],O=e[4+3],D=e[8+0],U=e[8+1],K=e[8+2],se=e[8+3],V=e[12+0],Y=e[12+1],fe=e[12+2],de=e[12+3],ve=u[0],be=u[1],Se=u[2],Pe=u[3],ke=u[4+0],Ge=u[4+1],Ee=u[4+2],Ae=u[4+3],Me=u[8+0],ze=u[8+1],Ue=u[8+2],Re=u[8+3],Oe=u[12+0],Le=u[12+1],Fe=u[12+2],Ce=u[12+3];return o[0]=n*ve+S*be+D*Se+V*Pe,o[1]=c*ve+k*be+U*Se+Y*Pe,o[2]=_*ve+P*be+K*Se+fe*Pe,o[3]=p*ve+O*be+se*Se+de*Pe,o[4]=n*ke+S*Ge+D*Ee+V*Ae,o[5]=c*ke+k*Ge+U*Ee+Y*Ae,o[6]=_*ke+P*Ge+K*Ee+fe*Ae,o[7]=p*ke+O*Ge+se*Ee+de*Ae,o[8]=n*Me+S*ze+D*Ue+V*Re,o[9]=c*Me+k*ze+U*Ue+Y*Re,o[10]=_*Me+P*ze+K*Ue+fe*Re,o[11]=p*Me+O*ze+se*Ue+de*Re,o[12]=n*Oe+S*Le+D*Fe+V*Ce,o[13]=c*Oe+k*Le+U*Fe+Y*Ce,o[14]=_*Oe+P*Le+K*Fe+fe*Ce,o[15]=p*Oe+O*Le+se*Fe+de*Ce,o}const L=J;function F(e,u,a){const o=a??C();return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11]),o[12]=u[0],o[13]=u[1],o[14]=u[2],o[15]=1,o}function X(e,u){const a=u??r.create();return a[0]=e[12],a[1]=e[13],a[2]=e[14],a}function ae(e,u,a){const o=a??r.create(),n=u*4;return o[0]=e[n+0],o[1]=e[n+1],o[2]=e[n+2],o}function ie(e,u,a,o){const n=o===e?o:I(e,o),c=a*4;return n[c+0]=u[0],n[c+1]=u[1],n[c+2]=u[2],n}function le(e,u){const a=u??r.create(),o=e[0],n=e[1],c=e[2],_=e[4],p=e[5],S=e[6],k=e[8],P=e[9],O=e[10];return a[0]=Math.sqrt(o*o+n*n+c*c),a[1]=Math.sqrt(_*_+p*p+S*S),a[2]=Math.sqrt(k*k+P*P+O*O),a}function pe(e,u,a,o,n){const c=n??new s(16),_=Math.tan(Math.PI*.5-.5*e);if(c[0]=_/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,Number.isFinite(o)){const p=1/(a-o);c[10]=o*p,c[14]=o*a*p}else c[10]=-1,c[14]=-a;return c}function _e(e,u,a,o=1/0,n){const c=n??new s(16),_=1/Math.tan(e*.5);if(c[0]=_/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,o===1/0)c[10]=0,c[14]=a;else{const p=1/(o-a);c[10]=a*p,c[14]=o*a*p}return c}function ne(e,u,a,o,n,c,_){const p=_??new s(16);return p[0]=2/(u-e),p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2/(o-a),p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1/(n-c),p[11]=0,p[12]=(u+e)/(e-u),p[13]=(o+a)/(a-o),p[14]=n/(n-c),p[15]=1,p}function z(e,u,a,o,n,c,_){const p=_??new s(16),S=u-e,k=o-a,P=n-c;return p[0]=2*n/S,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*n/k,p[6]=0,p[7]=0,p[8]=(e+u)/S,p[9]=(o+a)/k,p[10]=c/P,p[11]=-1,p[12]=0,p[13]=0,p[14]=n*c/P,p[15]=0,p}function ce(e,u,a,o,n,c=1/0,_){const p=_??new s(16),S=u-e,k=o-a;if(p[0]=2*n/S,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*n/k,p[6]=0,p[7]=0,p[8]=(e+u)/S,p[9]=(o+a)/k,p[11]=-1,p[12]=0,p[13]=0,p[15]=0,c===1/0)p[10]=0,p[14]=n;else{const P=1/(c-n);p[10]=n*P,p[14]=c*n*P}return p}const W=r.create(),N=r.create(),H=r.create();function he(e,u,a,o){const n=o??new s(16);return r.normalize(r.subtract(u,e,H),H),r.normalize(r.cross(a,H,W),W),r.normalize(r.cross(H,W,N),N),n[0]=W[0],n[1]=W[1],n[2]=W[2],n[3]=0,n[4]=N[0],n[5]=N[1],n[6]=N[2],n[7]=0,n[8]=H[0],n[9]=H[1],n[10]=H[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function ge(e,u,a,o){const n=o??new s(16);return r.normalize(r.subtract(e,u,H),H),r.normalize(r.cross(a,H,W),W),r.normalize(r.cross(H,W,N),N),n[0]=W[0],n[1]=W[1],n[2]=W[2],n[3]=0,n[4]=N[0],n[5]=N[1],n[6]=N[2],n[7]=0,n[8]=H[0],n[9]=H[1],n[10]=H[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function oe(e,u,a,o){const n=o??new s(16);return r.normalize(r.subtract(e,u,H),H),r.normalize(r.cross(a,H,W),W),r.normalize(r.cross(H,W,N),N),n[0]=W[0],n[1]=N[0],n[2]=H[0],n[3]=0,n[4]=W[1],n[5]=N[1],n[6]=H[1],n[7]=0,n[8]=W[2],n[9]=N[2],n[10]=H[2],n[11]=0,n[12]=-(W[0]*e[0]+W[1]*e[1]+W[2]*e[2]),n[13]=-(N[0]*e[0]+N[1]*e[1]+N[2]*e[2]),n[14]=-(H[0]*e[0]+H[1]*e[1]+H[2]*e[2]),n[15]=1,n}function we(e,u){const a=u??new s(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function ue(e,u,a){const o=a??new s(16),n=u[0],c=u[1],_=u[2],p=e[0],S=e[1],k=e[2],P=e[3],O=e[1*4+0],D=e[1*4+1],U=e[1*4+2],K=e[1*4+3],se=e[2*4+0],V=e[2*4+1],Y=e[2*4+2],fe=e[2*4+3],de=e[3*4+0],ve=e[3*4+1],be=e[3*4+2],Se=e[3*4+3];return e!==o&&(o[0]=p,o[1]=S,o[2]=k,o[3]=P,o[4]=O,o[5]=D,o[6]=U,o[7]=K,o[8]=se,o[9]=V,o[10]=Y,o[11]=fe),o[12]=p*n+O*c+se*_+de,o[13]=S*n+D*c+V*_+ve,o[14]=k*n+U*c+Y*_+be,o[15]=P*n+K*c+fe*_+Se,o}function xe(e,u){const a=u??new s(16),o=Math.cos(e),n=Math.sin(e);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=o,a[6]=n,a[7]=0,a[8]=0,a[9]=-n,a[10]=o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function Be(e,u,a){const o=a??new s(16),n=e[4],c=e[5],_=e[6],p=e[7],S=e[8],k=e[9],P=e[10],O=e[11],D=Math.cos(u),U=Math.sin(u);return o[4]=D*n+U*S,o[5]=D*c+U*k,o[6]=D*_+U*P,o[7]=D*p+U*O,o[8]=D*S-U*n,o[9]=D*k-U*c,o[10]=D*P-U*_,o[11]=D*O-U*p,e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function Te(e,u){const a=u??new s(16),o=Math.cos(e),n=Math.sin(e);return a[0]=o,a[1]=0,a[2]=-n,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=n,a[9]=0,a[10]=o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function Q(e,u,a){const o=a??new s(16),n=e[0*4+0],c=e[0*4+1],_=e[0*4+2],p=e[0*4+3],S=e[2*4+0],k=e[2*4+1],P=e[2*4+2],O=e[2*4+3],D=Math.cos(u),U=Math.sin(u);return o[0]=D*n-U*S,o[1]=D*c-U*k,o[2]=D*_-U*P,o[3]=D*p-U*O,o[8]=D*S+U*n,o[9]=D*k+U*c,o[10]=D*P+U*_,o[11]=D*O+U*p,e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function b(e,u){const a=u??new s(16),o=Math.cos(e),n=Math.sin(e);return a[0]=o,a[1]=n,a[2]=0,a[3]=0,a[4]=-n,a[5]=o,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function T(e,u,a){const o=a??new s(16),n=e[0*4+0],c=e[0*4+1],_=e[0*4+2],p=e[0*4+3],S=e[1*4+0],k=e[1*4+1],P=e[1*4+2],O=e[1*4+3],D=Math.cos(u),U=Math.sin(u);return o[0]=D*n+U*S,o[1]=D*c+U*k,o[2]=D*_+U*P,o[3]=D*p+U*O,o[4]=D*S-U*n,o[5]=D*k-U*c,o[6]=D*P-U*_,o[7]=D*O-U*p,e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function f(e,u,a){const o=a??new s(16);let n=e[0],c=e[1],_=e[2];const p=Math.sqrt(n*n+c*c+_*_);n/=p,c/=p,_/=p;const S=n*n,k=c*c,P=_*_,O=Math.cos(u),D=Math.sin(u),U=1-O;return o[0]=S+(1-S)*O,o[1]=n*c*U+_*D,o[2]=n*_*U-c*D,o[3]=0,o[4]=n*c*U-_*D,o[5]=k+(1-k)*O,o[6]=c*_*U+n*D,o[7]=0,o[8]=n*_*U+c*D,o[9]=c*_*U-n*D,o[10]=P+(1-P)*O,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const t=f;function l(e,u,a,o){const n=o??new s(16);let c=u[0],_=u[1],p=u[2];const S=Math.sqrt(c*c+_*_+p*p);c/=S,_/=S,p/=S;const k=c*c,P=_*_,O=p*p,D=Math.cos(a),U=Math.sin(a),K=1-D,se=k+(1-k)*D,V=c*_*K+p*U,Y=c*p*K-_*U,fe=c*_*K-p*U,de=P+(1-P)*D,ve=_*p*K+c*U,be=c*p*K+_*U,Se=_*p*K-c*U,Pe=O+(1-O)*D,ke=e[0],Ge=e[1],Ee=e[2],Ae=e[3],Me=e[4],ze=e[5],Ue=e[6],Re=e[7],Oe=e[8],Le=e[9],Fe=e[10],Ce=e[11];return n[0]=se*ke+V*Me+Y*Oe,n[1]=se*Ge+V*ze+Y*Le,n[2]=se*Ee+V*Ue+Y*Fe,n[3]=se*Ae+V*Re+Y*Ce,n[4]=fe*ke+de*Me+ve*Oe,n[5]=fe*Ge+de*ze+ve*Le,n[6]=fe*Ee+de*Ue+ve*Fe,n[7]=fe*Ae+de*Re+ve*Ce,n[8]=be*ke+Se*Me+Pe*Oe,n[9]=be*Ge+Se*ze+Pe*Le,n[10]=be*Ee+Se*Ue+Pe*Fe,n[11]=be*Ae+Se*Re+Pe*Ce,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}const i=l;function d(e,u){const a=u??new s(16);return a[0]=e[0],a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e[1],a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function g(e,u,a){const o=a??new s(16),n=u[0],c=u[1],_=u[2];return o[0]=n*e[0*4+0],o[1]=n*e[0*4+1],o[2]=n*e[0*4+2],o[3]=n*e[0*4+3],o[4]=c*e[1*4+0],o[5]=c*e[1*4+1],o[6]=c*e[1*4+2],o[7]=c*e[1*4+3],o[8]=_*e[2*4+0],o[9]=_*e[2*4+1],o[10]=_*e[2*4+2],o[11]=_*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function x(e,u){const a=u??new s(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function m(e,u,a){const o=a??new s(16);return o[0]=u*e[0*4+0],o[1]=u*e[0*4+1],o[2]=u*e[0*4+2],o[3]=u*e[0*4+3],o[4]=u*e[1*4+0],o[5]=u*e[1*4+1],o[6]=u*e[1*4+2],o[7]=u*e[1*4+3],o[8]=u*e[2*4+0],o[9]=u*e[2*4+1],o[10]=u*e[2*4+2],o[11]=u*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}return{add:E,aim:he,axisRotate:l,axisRotation:f,cameraAim:ge,clone:Z,copy:I,create:h,determinant:j,equals:q,equalsApproximately:M,fromMat3:y,fromQuat:v,frustum:z,frustumReverseZ:ce,getAxis:ae,getScaling:le,getTranslation:X,identity:C,inverse:ee,invert:$,lookAt:oe,mul:L,mulScalar:R,multiply:J,multiplyScalar:A,negate:G,ortho:ne,perspective:pe,perspectiveReverseZ:_e,rotate:i,rotateX:Be,rotateY:Q,rotateZ:T,rotation:t,rotationX:xe,rotationY:Te,rotationZ:b,scale:g,scaling:d,set:w,setAxis:ie,setTranslation:F,translate:ue,translation:we,transpose:te,uniformScale:m,uniformScaling:x}}const Dt=new Map;function vn(s){let r=Dt.get(s);return r||(r=yn(s),Dt.set(s,r)),r}function bn(s){const r=gt(s);function h(b,T,f,t){const l=new s(4);return b!==void 0&&(l[0]=b,T!==void 0&&(l[1]=T,f!==void 0&&(l[2]=f,t!==void 0&&(l[3]=t)))),l}const w=h;function y(b,T,f,t,l){const i=l??new s(4);return i[0]=b,i[1]=T,i[2]=f,i[3]=t,i}function v(b,T,f){const t=f??new s(4),l=T*.5,i=Math.sin(l);return t[0]=i*b[0],t[1]=i*b[1],t[2]=i*b[2],t[3]=Math.cos(l),t}function G(b,T){const f=T??r.create(3),t=Math.acos(b[3])*2,l=Math.sin(t*.5);return l>re?(f[0]=b[0]/l,f[1]=b[1]/l,f[2]=b[2]/l):(f[0]=1,f[1]=0,f[2]=0),{angle:t,axis:f}}function E(b,T){const f=pe(b,T);return Math.acos(2*f*f-1)}function A(b,T,f){const t=f??new s(4),l=b[0],i=b[1],d=b[2],g=b[3],x=T[0],m=T[1],e=T[2],u=T[3];return t[0]=l*u+g*x+i*e-d*m,t[1]=i*u+g*m+d*x-l*e,t[2]=d*u+g*e+l*m-i*x,t[3]=g*u-l*x-i*m-d*e,t}const R=A;function I(b,T,f){const t=f??new s(4),l=T*.5,i=b[0],d=b[1],g=b[2],x=b[3],m=Math.sin(l),e=Math.cos(l);return t[0]=i*e+x*m,t[1]=d*e+g*m,t[2]=g*e-d*m,t[3]=x*e-i*m,t}function Z(b,T,f){const t=f??new s(4),l=T*.5,i=b[0],d=b[1],g=b[2],x=b[3],m=Math.sin(l),e=Math.cos(l);return t[0]=i*e-g*m,t[1]=d*e+x*m,t[2]=g*e+i*m,t[3]=x*e-d*m,t}function M(b,T,f){const t=f??new s(4),l=T*.5,i=b[0],d=b[1],g=b[2],x=b[3],m=Math.sin(l),e=Math.cos(l);return t[0]=i*e+d*m,t[1]=d*e-i*m,t[2]=g*e+x*m,t[3]=x*e-g*m,t}function q(b,T,f,t){const l=t??new s(4),i=b[0],d=b[1],g=b[2],x=b[3];let m=T[0],e=T[1],u=T[2],a=T[3],o=i*m+d*e+g*u+x*a;o<0&&(o=-o,m=-m,e=-e,u=-u,a=-a);let n,c;if(1-o>re){const _=Math.acos(o),p=Math.sin(_);n=Math.sin((1-f)*_)/p,c=Math.sin(f*_)/p}else n=1-f,c=f;return l[0]=n*i+c*m,l[1]=n*d+c*e,l[2]=n*g+c*u,l[3]=n*x+c*a,l}function C(b,T){const f=T??new s(4),t=b[0],l=b[1],i=b[2],d=b[3],g=t*t+l*l+i*i+d*d,x=g?1/g:0;return f[0]=-t*x,f[1]=-l*x,f[2]=-i*x,f[3]=d*x,f}function te(b,T){const f=T??new s(4);return f[0]=-b[0],f[1]=-b[1],f[2]=-b[2],f[3]=b[3],f}function ee(b,T){const f=T??new s(4),t=b[0]+b[5]+b[10];if(t>0){const l=Math.sqrt(t+1);f[3]=.5*l;const i=.5/l;f[0]=(b[6]-b[9])*i,f[1]=(b[8]-b[2])*i,f[2]=(b[1]-b[4])*i}else{let l=0;b[5]>b[0]&&(l=1),b[10]>b[l*4+l]&&(l=2);const i=(l+1)%3,d=(l+2)%3,g=Math.sqrt(b[l*4+l]-b[i*4+i]-b[d*4+d]+1);f[l]=.5*g;const x=.5/g;f[3]=(b[i*4+d]-b[d*4+i])*x,f[i]=(b[i*4+l]+b[l*4+i])*x,f[d]=(b[d*4+l]+b[l*4+d])*x}return f}function j(b,T,f,t,l){const i=l??new s(4),d=b*.5,g=T*.5,x=f*.5,m=Math.sin(d),e=Math.cos(d),u=Math.sin(g),a=Math.cos(g),o=Math.sin(x),n=Math.cos(x);switch(t){case"xyz":i[0]=m*a*n+e*u*o,i[1]=e*u*n-m*a*o,i[2]=e*a*o+m*u*n,i[3]=e*a*n-m*u*o;break;case"xzy":i[0]=m*a*n-e*u*o,i[1]=e*u*n-m*a*o,i[2]=e*a*o+m*u*n,i[3]=e*a*n+m*u*o;break;case"yxz":i[0]=m*a*n+e*u*o,i[1]=e*u*n-m*a*o,i[2]=e*a*o-m*u*n,i[3]=e*a*n+m*u*o;break;case"yzx":i[0]=m*a*n+e*u*o,i[1]=e*u*n+m*a*o,i[2]=e*a*o-m*u*n,i[3]=e*a*n-m*u*o;break;case"zxy":i[0]=m*a*n-e*u*o,i[1]=e*u*n+m*a*o,i[2]=e*a*o+m*u*n,i[3]=e*a*n-m*u*o;break;case"zyx":i[0]=m*a*n-e*u*o,i[1]=e*u*n+m*a*o,i[2]=e*a*o-m*u*n,i[3]=e*a*n+m*u*o;break;default:throw new Error(`Unknown rotation order: ${t}`)}return i}function $(b,T){const f=T??new s(4);return f[0]=b[0],f[1]=b[1],f[2]=b[2],f[3]=b[3],f}const J=$;function L(b,T,f){const t=f??new s(4);return t[0]=b[0]+T[0],t[1]=b[1]+T[1],t[2]=b[2]+T[2],t[3]=b[3]+T[3],t}function F(b,T,f){const t=f??new s(4);return t[0]=b[0]-T[0],t[1]=b[1]-T[1],t[2]=b[2]-T[2],t[3]=b[3]-T[3],t}const X=F;function ae(b,T,f){const t=f??new s(4);return t[0]=b[0]*T,t[1]=b[1]*T,t[2]=b[2]*T,t[3]=b[3]*T,t}const ie=ae;function le(b,T,f){const t=f??new s(4);return t[0]=b[0]/T,t[1]=b[1]/T,t[2]=b[2]/T,t[3]=b[3]/T,t}function pe(b,T){return b[0]*T[0]+b[1]*T[1]+b[2]*T[2]+b[3]*T[3]}function _e(b,T,f,t){const l=t??new s(4);return l[0]=b[0]+f*(T[0]-b[0]),l[1]=b[1]+f*(T[1]-b[1]),l[2]=b[2]+f*(T[2]-b[2]),l[3]=b[3]+f*(T[3]-b[3]),l}function ne(b){const T=b[0],f=b[1],t=b[2],l=b[3];return Math.sqrt(T*T+f*f+t*t+l*l)}const z=ne;function ce(b){const T=b[0],f=b[1],t=b[2],l=b[3];return T*T+f*f+t*t+l*l}const W=ce;function N(b,T){const f=T??new s(4),t=b[0],l=b[1],i=b[2],d=b[3],g=Math.sqrt(t*t+l*l+i*i+d*d);return g>1e-5?(f[0]=t/g,f[1]=l/g,f[2]=i/g,f[3]=d/g):(f[0]=0,f[1]=0,f[2]=0,f[3]=1),f}function H(b,T){return Math.abs(b[0]-T[0])<re&&Math.abs(b[1]-T[1])<re&&Math.abs(b[2]-T[2])<re&&Math.abs(b[3]-T[3])<re}function he(b,T){return b[0]===T[0]&&b[1]===T[1]&&b[2]===T[2]&&b[3]===T[3]}function ge(b){const T=b??new s(4);return T[0]=0,T[1]=0,T[2]=0,T[3]=1,T}const oe=r.create(),we=r.create(),ue=r.create();function xe(b,T,f){const t=f??new s(4),l=r.dot(b,T);return l<-.999999?(r.cross(we,b,oe),r.len(oe)<1e-6&&r.cross(ue,b,oe),r.normalize(oe,oe),v(oe,Math.PI,t),t):l>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r.cross(b,T,oe),t[0]=oe[0],t[1]=oe[1],t[2]=oe[2],t[3]=1+l,N(t,t))}const Be=new s(4),Te=new s(4);function Q(b,T,f,t,l,i){const d=i??new s(4);return q(b,t,l,Be),q(T,f,l,Te),q(Be,Te,2*l*(1-l),d),d}return{create:h,fromValues:w,set:y,fromAxisAngle:v,toAxisAngle:G,angle:E,multiply:A,mul:R,rotateX:I,rotateY:Z,rotateZ:M,slerp:q,inverse:C,conjugate:te,fromMat:ee,fromEuler:j,copy:$,clone:J,add:L,subtract:F,sub:X,mulScalar:ae,scale:ie,divScalar:le,dot:pe,lerp:_e,length:ne,len:z,lengthSq:ce,lenSq:W,normalize:N,equalsApproximately:H,equals:he,identity:ge,rotationTo:xe,sqlerp:Q}}const zt=new Map;function Sn(s){let r=zt.get(s);return r||(r=bn(s),zt.set(s,r)),r}function Bn(s){function r(f,t,l,i){const d=new s(4);return f!==void 0&&(d[0]=f,t!==void 0&&(d[1]=t,l!==void 0&&(d[2]=l,i!==void 0&&(d[3]=i)))),d}const h=r;function w(f,t,l,i,d){const g=d??new s(4);return g[0]=f,g[1]=t,g[2]=l,g[3]=i,g}function y(f,t){const l=t??new s(4);return l[0]=Math.ceil(f[0]),l[1]=Math.ceil(f[1]),l[2]=Math.ceil(f[2]),l[3]=Math.ceil(f[3]),l}function v(f,t){const l=t??new s(4);return l[0]=Math.floor(f[0]),l[1]=Math.floor(f[1]),l[2]=Math.floor(f[2]),l[3]=Math.floor(f[3]),l}function G(f,t){const l=t??new s(4);return l[0]=Math.round(f[0]),l[1]=Math.round(f[1]),l[2]=Math.round(f[2]),l[3]=Math.round(f[3]),l}function E(f,t=0,l=1,i){const d=i??new s(4);return d[0]=Math.min(l,Math.max(t,f[0])),d[1]=Math.min(l,Math.max(t,f[1])),d[2]=Math.min(l,Math.max(t,f[2])),d[3]=Math.min(l,Math.max(t,f[3])),d}function A(f,t,l){const i=l??new s(4);return i[0]=f[0]+t[0],i[1]=f[1]+t[1],i[2]=f[2]+t[2],i[3]=f[3]+t[3],i}function R(f,t,l,i){const d=i??new s(4);return d[0]=f[0]+t[0]*l,d[1]=f[1]+t[1]*l,d[2]=f[2]+t[2]*l,d[3]=f[3]+t[3]*l,d}function I(f,t,l){const i=l??new s(4);return i[0]=f[0]-t[0],i[1]=f[1]-t[1],i[2]=f[2]-t[2],i[3]=f[3]-t[3],i}const Z=I;function M(f,t){return Math.abs(f[0]-t[0])<re&&Math.abs(f[1]-t[1])<re&&Math.abs(f[2]-t[2])<re&&Math.abs(f[3]-t[3])<re}function q(f,t){return f[0]===t[0]&&f[1]===t[1]&&f[2]===t[2]&&f[3]===t[3]}function C(f,t,l,i){const d=i??new s(4);return d[0]=f[0]+l*(t[0]-f[0]),d[1]=f[1]+l*(t[1]-f[1]),d[2]=f[2]+l*(t[2]-f[2]),d[3]=f[3]+l*(t[3]-f[3]),d}function te(f,t,l,i){const d=i??new s(4);return d[0]=f[0]+l[0]*(t[0]-f[0]),d[1]=f[1]+l[1]*(t[1]-f[1]),d[2]=f[2]+l[2]*(t[2]-f[2]),d[3]=f[3]+l[3]*(t[3]-f[3]),d}function ee(f,t,l){const i=l??new s(4);return i[0]=Math.max(f[0],t[0]),i[1]=Math.max(f[1],t[1]),i[2]=Math.max(f[2],t[2]),i[3]=Math.max(f[3],t[3]),i}function j(f,t,l){const i=l??new s(4);return i[0]=Math.min(f[0],t[0]),i[1]=Math.min(f[1],t[1]),i[2]=Math.min(f[2],t[2]),i[3]=Math.min(f[3],t[3]),i}function $(f,t,l){const i=l??new s(4);return i[0]=f[0]*t,i[1]=f[1]*t,i[2]=f[2]*t,i[3]=f[3]*t,i}const J=$;function L(f,t,l){const i=l??new s(4);return i[0]=f[0]/t,i[1]=f[1]/t,i[2]=f[2]/t,i[3]=f[3]/t,i}function F(f,t){const l=t??new s(4);return l[0]=1/f[0],l[1]=1/f[1],l[2]=1/f[2],l[3]=1/f[3],l}const X=F;function ae(f,t){return f[0]*t[0]+f[1]*t[1]+f[2]*t[2]+f[3]*t[3]}function ie(f){const t=f[0],l=f[1],i=f[2],d=f[3];return Math.sqrt(t*t+l*l+i*i+d*d)}const le=ie;function pe(f){const t=f[0],l=f[1],i=f[2],d=f[3];return t*t+l*l+i*i+d*d}const _e=pe;function ne(f,t){const l=f[0]-t[0],i=f[1]-t[1],d=f[2]-t[2],g=f[3]-t[3];return Math.sqrt(l*l+i*i+d*d+g*g)}const z=ne;function ce(f,t){const l=f[0]-t[0],i=f[1]-t[1],d=f[2]-t[2],g=f[3]-t[3];return l*l+i*i+d*d+g*g}const W=ce;function N(f,t){const l=t??new s(4),i=f[0],d=f[1],g=f[2],x=f[3],m=Math.sqrt(i*i+d*d+g*g+x*x);return m>1e-5?(l[0]=i/m,l[1]=d/m,l[2]=g/m,l[3]=x/m):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function H(f,t){const l=t??new s(4);return l[0]=-f[0],l[1]=-f[1],l[2]=-f[2],l[3]=-f[3],l}function he(f,t){const l=t??new s(4);return l[0]=f[0],l[1]=f[1],l[2]=f[2],l[3]=f[3],l}const ge=he;function oe(f,t,l){const i=l??new s(4);return i[0]=f[0]*t[0],i[1]=f[1]*t[1],i[2]=f[2]*t[2],i[3]=f[3]*t[3],i}const we=oe;function ue(f,t,l){const i=l??new s(4);return i[0]=f[0]/t[0],i[1]=f[1]/t[1],i[2]=f[2]/t[2],i[3]=f[3]/t[3],i}const xe=ue;function Be(f){const t=f??new s(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function Te(f,t,l){const i=l??new s(4),d=f[0],g=f[1],x=f[2],m=f[3];return i[0]=t[0]*d+t[4]*g+t[8]*x+t[12]*m,i[1]=t[1]*d+t[5]*g+t[9]*x+t[13]*m,i[2]=t[2]*d+t[6]*g+t[10]*x+t[14]*m,i[3]=t[3]*d+t[7]*g+t[11]*x+t[15]*m,i}function Q(f,t,l){const i=l??new s(4);return N(f,i),$(i,t,i)}function b(f,t,l){const i=l??new s(4);return ie(f)>t?Q(f,t,i):he(f,i)}function T(f,t,l){const i=l??new s(4);return C(f,t,.5,i)}return{create:r,fromValues:h,set:w,ceil:y,floor:v,round:G,clamp:E,add:A,addScaled:R,subtract:I,sub:Z,equalsApproximately:M,equals:q,lerp:C,lerpV:te,max:ee,min:j,mulScalar:$,scale:J,divScalar:L,inverse:F,invert:X,dot:ae,length:ie,len:le,lengthSq:pe,lenSq:_e,distance:ne,dist:z,distanceSq:ce,distSq:W,normalize:N,negate:H,copy:he,clone:ge,multiply:oe,mul:we,divide:ue,div:xe,zero:Be,transformMat4:Te,setLength:Q,truncate:b,midpoint:T}}const Ut=new Map;function Pn(s){let r=Ut.get(s);return r||(r=Bn(s),Ut.set(s,r)),r}function St(s,r,h,w,y,v){return{mat3:wn(s),mat4:vn(r),quat:Sn(h),vec2:Jt(w),vec3:gt(y),vec4:Pn(v)}}const{mat3:Tn,mat4:We,quat:us,vec2:Rt,vec3:qe,vec4:ds}=St(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);St(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);St(_n,Array,Array,Array,Array,Array);const mt="halloumi.gpuLossReload",kn=6e4,xt=(()=>{try{return new URLSearchParams(window.location.search).get("lowmem")==="1"}catch{return!1}})(),Gn=/insufficient memory|out ?of ?memory|OutOfMemory|kIOGPUCommandBufferCallbackErrorOutOfMemory/i;let Ot=!1;function ct(s,r){const h=document.createElement("div");Object.assign(h.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const w=document.createElement("div");if(w.textContent=s,h.appendChild(w),r){const y=document.createElement("button");y.textContent="Reload",Object.assign(y.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),y.onclick=()=>window.location.reload(),h.appendChild(y)}document.body.appendChild(h)}function Xt(s,r){if(Ot)return;Ot=!0,console.error(`[gpu-loss] ${s} lost: ${r}`);let h=0;try{h=parseInt(sessionStorage.getItem(mt)??"0",10)||0}catch{}const w=Date.now(),y=Gn.test(r);if(y&&!xt){try{sessionStorage.setItem(mt,String(w))}catch{}const v=new URL(window.location.href);v.searchParams.set("lowmem","1"),ct("The GPU ran out of memory — reloading the viewer in low-memory mode…",!1),setTimeout(()=>window.location.replace(v.toString()),400)}else if(w-h>kn){try{sessionStorage.setItem(mt,String(w))}catch{}ct("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else ct(y?'The GPU ran out of memory again, even in low-memory mode. This Mac shares its RAM with the GPU: close other tabs / apps (or end Chrome’s "GPU Process" in its Task Manager) and reload.':`The GPU device was lost again (${s}: ${r}). Reload to try once more.`,!0)}function fs(s){s.lost.then(h=>{h.reason!=="destroyed"&&Xt("webgpu",`${h.reason}: ${h.message}`)});let r=0;s.addEventListener("uncapturederror",h=>{var w;r++<5&&console.error("[webgpu] uncaptured error:",((w=h==null?void 0:h.error)==null?void 0:w.message)??h)})}function ps(s){s.addEventListener("webglcontextlost",r=>{r.preventDefault(),!Qt&&Xt("webgl","webglcontextlost")},!1)}let Qt=!1;function hs(s){window.addEventListener("pagehide",()=>{Qt=!0;try{s()}catch(r){console.warn("[gpu-loss] release on pagehide failed:",r)}}),window.addEventListener("pageshow",r=>{r.persisted&&location.reload()})}const It=document.querySelector("#log");let Ie=null,He=null;function en(){if(Ie)return Ie;Ie=document.createElement("div"),Ie.className="ply-spinner-overlay";const s=document.createElement("div");return s.className="ply-spinner",Ie.appendChild(s),He=document.createElement("div"),He.className="ply-spinner-label",Ie.appendChild(He),Ie.style.display="none",document.body.appendChild(Ie),Ie}function tn(s){en(),He&&s&&(He.textContent=s),Ie&&(Ie.style.opacity="1",Ie.style.display="flex")}function ut(s){en(),He&&(He.textContent=s)}function nn(){if(!Ie)return;const s=Ie;s.style.opacity="0",setTimeout(()=>{s.style.opacity==="0"&&(s.style.display="none")},220)}function sn(s,r){if(!It)return;const h=document.createElement("p");h.innerText=s,r&&Object.assign(h.style,r),It.appendChild(h)}async function ye(s){console.log(s),sn(s)}async function En(s){console.error(s),sn(s,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let rn;function an(){rn=performance.now()}function Lt(s){const r=performance.now()-rn;ye(`⏱️ ${s} Time: ${r.toFixed(0)} ms`)}function _s(s,r){if(!s)throw new Error(r&&(typeof r=="string"?r:r()))}function Je(s){return s+3&-4}const An=2,Mn=3,Dn=5,zn=6,Qe=7,pt=8,et=9,tt=10,Un=11,Rn=12,On=13,In=14;function gs(s){const r=new TextDecoder("ascii"),h=r.decode(new Uint8Array(s,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(s.byteLength<4+64)throw new Error(`NAT2 truncated (${s.byteLength} bytes < 4 + 64)`);const w=new DataView(s),y=4,v=w.getUint32(y+0,!0),G=w.getUint32(y+4,!0),E=w.getUint32(y+8,!0),A=w.getUint32(y+12,!0),R=w.getUint32(y+16,!0),I=w.getFloat32(y+20,!0),Z=w.getUint32(y+24,!0),M=w.getUint32(y+28,!0),q=M===On||M===In,C=q?M-2:M,te=w.getFloat32(y+32,!0),ee=w.getFloat32(y+36,!0),j=w.getFloat32(y+40,!0),$=w.getUint32(y+44,!0),J=w.getFloat32(y+48,!0),L=w.getFloat32(y+52,!0),F=w.getUint32(y+56,!0),X=w.getUint32(y+60,!0),ae=C===et||C===tt,ie=ae?X:0,le=ae?0:X&255,pe=ae?0:X>>8&255,_e=le>0?le:1;if(C===Dn||C===zn)throw new Error(`NAT2: paired-RVQ format=${C} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ne=C===et||C===tt;if(C!==An&&C!==Mn&&C!==Un&&C!==Rn&&C!==Qe&&C!==pt&&!ne)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${C}`);if(v%4!==0||$%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${v} layer_h=${$}`);let z=y+64;const ce=(F+1)*4,W=new Uint32Array(s.slice(z,z+ce));z+=ce;let N;if(_e>1){const Q=(_e+1)*4;if(z+Q>s.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Q} from ${z})`);N=new Uint32Array(s.slice(z,z+Q)),z+=Q}else N=new Uint32Array([0,v]);let H=0;for(let Q=0;Q<_e;Q++){const b=N[Q+1]-N[Q];b>H&&(H=b)}if(ne){const Q=ie&2?21:ie&1?7:6,b=R*Q*4;if(z+b>s.byteLength)throw new Error(`NAT2 truncated at probes: need ${b} more bytes from offset ${z}, have ${s.byteLength-z}`);const T=new Float32Array(s.slice(z,z+b));z+=b;const f=Math.max(1,ie>>8&255),t=[];let l=0;for(let m=0,e=v,u=$;m<f;m++,e>>=1,u>>=1){const a=Math.max(1,e>>2)*Math.max(1,u>>2)*16;t.push(a),l+=a}const i=s.byteLength-z;if(i<l)throw new Error(`NAT2 probe atlas truncated: need ${l} bytes for ${v}x${$} x${f} mips, have ${i}`);const d=[];let g=z;for(const m of t)d.push(new Uint8Array(s.slice(g,g+m))),g+=m;const x=d[0];return{width:v,height:G,channels:E,kernel_type:A,num_rects:R,uv_extent:I,sb_number:Z,format:C,sh_bias:te,res_bias:ee,compact_mult:j,layer_h:$,atlas_scale:J,atlas_offset:L,n_layers:F,n_cols:_e,layer_cuts:W,column_cuts:N,slice_width:H,rects_expanded:T,atlas_bytes:x,mip_bytes:d,probe_mode:ie&2?3:ie&1?2:1}}const he=R*4*4;if(z+he>s.byteLength)throw new Error(`NAT2 truncated at rects: need ${he} more bytes from offset ${z}, have ${s.byteLength-z}`);const ge=new Float32Array(s.slice(z,z+he));z+=he;const oe=new Float32Array(R*5);for(let Q=0;Q<R;Q++){const b=ge[Q*4+0],T=ge[Q*4+1],f=ge[Q*4+2],t=ge[Q*4+3];let l=0;for(let m=1;m<=F&&W[m]<=T;m++)l=m;let i=0;for(let m=1;m<=_e&&N[m]<=b;m++)i=m;const d=T-W[l],g=b-N[i],x=i*F+l;oe[Q*5+0]=g,oe[Q*5+1]=d,oe[Q*5+2]=f,oe[Q*5+3]=t,oe[Q*5+4]=x}let we,ue;const xe=_e,Te=v/4*16;if(C===Qe||C===pt||q){if(z+24>s.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Q=C===Qe||q?"BCCB":"ACCB",b=r.decode(new Uint8Array(s,z,4));if(b!==Q)throw new Error(`NAT2 typeD bad sub-magic: expected '${Q}' got '${b}'`);const T=w.getUint32(z+4,!0),f=w.getUint32(z+8,!0),t=w.getUint32(z+12,!0),l=w.getUint32(z+16,!0),i=w.getUint32(z+20,!0);if(T!==1)throw new Error(`NAT2 BCCB unsupported version ${T}`);if(t!==G/4||l!==v/4||i!==t*l)throw new Error(`NAT2 BCCB block grid mismatch: header ${v}×${G}, sub-header ${l}×${t} (${i} blocks)`);z+=24;const d=f*16;if(z+d>s.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${d}, have ${s.byteLength-z})`);const g=new Uint8Array(s,z,d);z+=d;const x=i*2;if(z+x>s.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${x}, have ${s.byteLength-z})`);const m=new Uint16Array(s.slice(z,z+x));z+=x;const e=new Uint8Array(i*16);for(let u=0;u<i;u++){const a=m[u]*16;e.set(g.subarray(a,a+16),u*16)}if(we=e,pe>1){ue=[e];for(let u=1;u<pe;u++){if(z+24>s.byteLength)throw new Error(`NAT2 truncated at mip ${u} sub-header`);const a=r.decode(new Uint8Array(s,z,4));if(a!==Q)throw new Error(`NAT2 mip ${u}: bad sub-magic '${a}'`);const o=w.getUint32(z+8,!0),n=w.getUint32(z+16,!0),c=w.getUint32(z+20,!0);if(n!==u)throw new Error(`NAT2 mip section order: expected level ${u}, got ${n}`);z+=24;let _=0;for(let P=0;P<xe;P++)for(let O=0;O<F;O++){const D=wt(u,N[P+1]-N[P],W[O+1]-W[O],H,$);_+=(D.cw>>2)*(D.ch>>2)}if(_!==c)throw new Error(`NAT2 mip ${u}: ${c} blocks, loader expects ${_}`);if(z+o*16+c*2>s.byteLength)throw new Error(`NAT2 truncated in mip ${u}`);const p=new Uint8Array(s,z,o*16);z+=o*16;const S=new Uint16Array(s.slice(z,z+c*2));z+=c*2;const k=new Uint8Array(c*16);for(let P=0;P<c;P++){const O=S[P]*16;k.set(p.subarray(O,O+16),P*16)}ue.push(k)}}}else{let Q=0;for(let b=0;b<F;b++){const T=W[b+1]-W[b];if(T%4!==0)throw new Error(`NAT2 BC7 layer ${b} rows ${T} not 4-aligned`);Q+=T/4*Te}if(z+Q>s.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Q} more bytes from offset ${z}, have ${s.byteLength-z}`);if(we=new Uint8Array(s.slice(z,z+Q)),z+=Q,pe>1&&!ae){ue=[we];for(let b=1;b<pe;b++){let T=0;for(let f=0;f<_e;f++)for(let t=0;t<F;t++){const l=wt(b,N[f+1]-N[f],W[t+1]-W[t],H,$);T+=l.cw/4*(l.ch/4)*16}if(z+T>s.byteLength)throw new Error(`NAT2 raw mip ${b}: truncated (need ${T} B)`);ue.push(new Uint8Array(s.slice(z,z+T))),z+=T}}}return{width:v,height:G,channels:E,kernel_type:A,num_rects:R,uv_extent:I,sb_number:Z,format:C,sh_bias:te,res_bias:ee,compact_mult:j,layer_h:$,atlas_scale:J,atlas_offset:L,n_layers:F,n_cols:_e,layer_cuts:W,column_cuts:N,slice_width:H,rects_expanded:oe,atlas_bytes:we,...ue?{mip_bytes:ue}:{}}}function wt(s,r,h,w,y){const v=E=>E+3>>2<<2,G=1<<s;return{cw:Math.min(v(Math.max(1,w>>s)),v(Math.ceil(r/G))),ch:Math.min(v(Math.max(1,y>>s)),v(Math.ceil(h/G)))}}const Ln=32;async function ms(s,r,h){if(r.format===5||r.format===6)throw new Error(`paired-RVQ format=${r.format} is retired; re-bake with typeD (--bc7-codebook)`);let w,y,v,G,E;if(r.format===2||r.format===Qe||r.format===et){if(!s.features.has("texture-compression-bc"))return ye(`⚠️  bundle is BC7 (format=${r.format}) but texture-compression-bc not supported — atlas disabled`),null;E=r.format===et?"BC7 atlas (proberes: shared probe texture)":r.format===Qe?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:w,view:y,sampler:v,samplerAniso:G}=await yt(s,r,"bc7-rgba-unorm",E)}else if(r.format===3||r.format===pt||r.format===tt){if(!s.features.has("texture-compression-astc"))return ye(`⚠️  bundle is ASTC 4x4 (format=${r.format}) but texture-compression-astc not supported — atlas disabled`),null;E=r.format===tt?"ASTC 4x4 atlas (proberes: shared probe texture)":r.format===pt?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:w,view:y,sampler:v,samplerAniso:G}=await yt(s,r,"astc-4x4-unorm",E)}else return ye(`⚠️  unsupported atlas format ${r.format} — atlas disabled`),null;const{rects_expanded:A}=r,R=s.createBuffer({label:"atlas rects (5-stride)",size:Je(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});s.queue.writeBuffer(R,0,A);const I=s.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ft(s,I,r,h),{texture:w,view:y,sampler:v,samplerAniso:G,rectsBuffer:R,texParamsBuffer:I,meta:r}}async function xs(s,r,h){if(r.format!==11&&r.format!==12)return ye(`⚠️  ?slope= file has format ${r.format}, expected 11 (BC5) or 12 (P)`),null;if(!s.features.has("texture-compression-bc"))return ye("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(h&&(h.width!==r.width||h.layer_h!==r.layer_h||h.n_layers!==r.n_layers||h.n_cols!==r.n_cols||h.num_rects!==r.num_rects))return ye(`⚠️  slope sidecar layout ${r.width}x${r.layer_h}x${r.n_layers} does not match the atlas ${h.width}x${h.layer_h}x${h.n_layers} — disabled`),null;const w=r.atlas_bytes.byteLength/1048576,{view:y}=await yt(s,r,r.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",r.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:y,kind:r.format===11?"bc5":"p",scaleU:r.atlas_scale,offU:r.atlas_offset,scaleV:r.sh_bias,offV:r.res_bias,mb:w}}const Ft=48*1048576;async function yt(s,r,h,w){let y=0;const v=async()=>{s.queue.submit([]),await s.queue.onSubmittedWorkDone(),y=0},G=async ne=>{y+=ne,y>=Ft&&await v()},{width:E,layer_h:A,n_layers:R,n_cols:I,layer_cuts:Z,column_cuts:M,slice_width:q,atlas_bytes:C}=r,ee=E/4*16,j=s.limits.maxTextureDimension2D;if(A>j||q>j)throw new Error(`⚠️  atlas slice dims ${q}x${A} exceed maxTextureDimension2D=${j}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const $=I*R;if($>s.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${I} cols × ${R} layers = ${$} slices > maxTextureArrayLayers=${s.limits.maxTextureArrayLayers}.`);const J=r.mip_bytes??[C],L=xt?J.slice(0,1):J,F=L.length;xt&&J.length>1&&console.log(`[atlas] lowmem: skipping ${J.length-1} mip level(s)`);const X=s.createTexture({label:w,size:{width:q,height:A,depthOrArrayLayers:$},mipLevelCount:F,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let ne=0;ne<I;ne++){const z=M[ne]/4,ce=(M[ne+1]-M[ne])/4;for(let W=0;W<R;W++){const N=Z[W]/4,H=(Z[W+1]-Z[W])/4,he=ne*R+W,ge=N*ee+z*16;s.queue.writeTexture({texture:X,mipLevel:0,origin:{x:0,y:0,z:he},aspect:"all"},C,{offset:ge,bytesPerRow:ee,rowsPerImage:H},{width:ce*4,height:H*4,depthOrArrayLayers:1}),await G(ce*H*16)}}const ae=r.format===et||r.format===tt;for(let ne=1;ne<F&&!ae;ne++){let z=0;for(let ce=0;ce<I;ce++)for(let W=0;W<R;W++){const{cw:N,ch:H}=wt(ne,M[ce+1]-M[ce],Z[W+1]-Z[W],q,A);s.queue.writeTexture({texture:X,mipLevel:ne,origin:{x:0,y:0,z:ce*R+W},aspect:"all"},L[ne],{offset:z,bytesPerRow:(N>>2)*16,rowsPerImage:H>>2},{width:N,height:H,depthOrArrayLayers:1}),z+=(N>>2)*(H>>2)*16,await G((N>>2)*(H>>2)*16)}}for(let ne=1;ne<F&&ae;ne++){const z=Math.max(1,q>>ne),ce=Math.max(1,A>>ne);s.queue.writeTexture({texture:X,mipLevel:ne,origin:{x:0,y:0,z:0},aspect:"all"},L[ne],{offset:0,bytesPerRow:Math.max(1,z>>2)*16,rowsPerImage:Math.max(1,ce>>2)},{width:z,height:ce,depthOrArrayLayers:1}),await G(L[ne].byteLength)}F>1&&console.log(`[atlas] ${F} mip levels uploaded (${ae?"trilinear":"per-surfel integer level"})`),await v();const ie=J.reduce((ne,z)=>ne+z.byteLength,0)/1048576;r.atlas_bytes=new Uint8Array(0),r.mip_bytes&&(r.mip_bytes=J.map(()=>new Uint8Array(0))),console.log(`[atlas] ${w}: ${ie.toFixed(0)} MB uploaded in ≤${Ft/1048576} MB chunks; CPU copy released`);const le=X.createView({label:`${w} view`,dimension:"2d-array"}),pe=s.createSampler({label:`${w} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:F>1&&ae?"linear":"nearest"}),_e=s.createSampler({label:`${w} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16});return{texture:X,view:le,sampler:pe,samplerAniso:_e}}function ft(s,r,h,w,y=1){var R;const v=new ArrayBuffer(32),G=new Uint32Array(v),E=new Float32Array(v);G[0]=w?1:0,E[1]=h.atlas_scale,E[2]=h.atlas_offset,E[3]=h.res_bias,G[4]=h.probe_mode?h.probe_mode|0:0,G[5]=h.width|0;const A=(((R=h.mip_bytes)==null?void 0:R.length)??1)>1;G[6]=y===2?2:A&&y!==0?1:0,E[7]=h.uv_extent,s.queue.writeBuffer(r,0,v)}async function ws(s,r){ye(`loading ply file from File... : ${s.name}`),tn("downloading PLY...");const h=await s.arrayBuffer();try{return await ln(h,r)}finally{nn()}}async function ys(s,r){ye(`loading ply file from URL... : ${s}`),tn("downloading PLY...");try{an();const h=new URL(s,self.location.href).href;return await ln({url:h},r)}finally{nn()}}function on(s){return new Promise((r,h)=>{const w=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=y=>{const v=y.data;if((v==null?void 0:v.type)==="error"){En(`PLY worker error: ${v.message??"unknown error"}`),w.terminate(),h(new Error(v.message??"Worker error"));return}else if((v==null?void 0:v.type)==="download_progress"){const G=v.totalBytes,E=v.loadedBytes/(1024*1024),A=G?G/(1024*1024):void 0,R=(v.speedBps??0)/(1024*1024),I=G?Math.min(99,Math.floor(v.loadedBytes/G*100)):void 0,Z=A?`total ${A.toFixed(1)} MB`:"total -- MB",M=A&&I!==void 0?`${E.toFixed(1)} MB downloaded (${I}%)`:`${E.toFixed(1)} MB downloaded`,q=`${R.toFixed(2)} MB/s`;ut(`downloading PLY ...
${Z}, ${M}
${q}`);return}else if((v==null?void 0:v.type)==="fetched"){ye(`💾 Fetched (${v.byteLength} bytes)`),Lt("Download"),ut("parsing PLY..."),an();return}else if((v==null?void 0:v.type)==="parse_progress"){const G=v.total??0,E=v.read??0,A=G>0?Math.floor(E/G*100):0;ut(`parsing PLY ...
${E}/${G} surfels (${A}%)`);return}else(v==null?void 0:v.type)==="done"&&(w.terminate(),Lt("Parse"),r(v))},w.onerror=y=>{w.terminate(),h(y)},s instanceof ArrayBuffer?(ut("parsing PLY..."),w.postMessage({type:"start",plyBuffer:s},[s])):w.postMessage({type:"start_url",url:s.url})})}async function vs(s){var h,w,y,v,G,E,A,R,I,Z,M,q;const r=await on(await s.arrayBuffer());return{num_points:r.num_points,K:r.K,feature_mode:r.feature_mode??0,sh_bias:r.sh_bias,kernel_type:r.kernel_type,surfel_data:new Float32Array(r.surfelBuffer),sv_params:new Float32Array(r.svParamsBuffer),bbox:r.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:r.centroid??[((((w=(h=r.bbox)==null?void 0:h.min)==null?void 0:w[0])??-1)+(((v=(y=r.bbox)==null?void 0:y.max)==null?void 0:v[0])??1))/2,((((E=(G=r.bbox)==null?void 0:G.min)==null?void 0:E[1])??-1)+(((R=(A=r.bbox)==null?void 0:A.max)==null?void 0:R[1])??1))/2,((((Z=(I=r.bbox)==null?void 0:I.min)==null?void 0:Z[2])??-1)+(((q=(M=r.bbox)==null?void 0:M.max)==null?void 0:q[2])??1))/2]}}async function ln(s,r){var C,te,ee,j,$,J,L,F,X,ae,ie,le;const h=await on(s),w=h.num_points,y=h.K,v=h.feature_mode??0,G=h.sh_bias,E=h.kernel_type,A=h.surfelBuffer,R=h.svParamsBuffer,I=v===2?"NASG":v===1?"SB":"SV";ye(`🪐 Total surfels: ${w}, mode=${I}, K=${y}, sh_bias=${G}, kernel_type=${E}`);const Z=r.createBuffer({label:"surfel input buffer",size:Je(w*Ln),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});r.queue.writeBuffer(Z,0,A);const M=R.byteLength>0?R.byteLength:16,q=r.createBuffer({label:`color_params buffer (${I})`,size:Je(M),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return R.byteLength>0&&r.queue.writeBuffer(q,0,R),{num_points:w,K:y,feature_mode:v,sh_bias:G,kernel_type:E,surfel_buffer:Z,surfel_data:new Float32Array(A),sv_params_buffer:q,bbox:h.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:h.centroid??[((((te=(C=h.bbox)==null?void 0:C.min)==null?void 0:te[0])??-1)+(((j=(ee=h.bbox)==null?void 0:ee.max)==null?void 0:j[0])??1))/2,((((J=($=h.bbox)==null?void 0:$.min)==null?void 0:J[1])??-1)+(((F=(L=h.bbox)==null?void 0:L.max)==null?void 0:F[1])??1))/2,((((ae=(X=h.bbox)==null?void 0:X.min)==null?void 0:ae[2])??-1)+(((le=(ie=h.bbox)==null?void 0:ie.max)==null?void 0:le[2])??1))/2]}}const Fn=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Xe=`// 2DGS render — vertex+fragment.
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
  @location(1) @interpolate(flat) rank : u32,   // instance index = back-to-front draw rank (re-fetch upscaling)
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
  @location(13) @interpolate(flat) rank        : u32,   // instance index = back-to-front draw rank (re-fetch upscaling)
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
    out.rank = iid;

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

    // Adaptive-upscaling heatmap (accel_flags bits 3..8 = tau in 1/8 steps, render-settings.ts setAdaptHeat).
    // Per fragment: q = atlas texels per screen pixel (area of the pixel's footprint on the tile, from the
    // ray/plane uv at the two neighbouring pixels, the same footprint the anisotropic path uses). Colour = the
    // largest render factor the ?rs=auto rule would allow here (f · q <= tau): red = native only, yellow = 1/2,
    // green = 1/4, blue = surfel without texture (SV only, no texels to lose). Alpha-blended like the colour.
    let heat = (render_settings.accel_flags >> 3u) & 63u;
    if heat != 0u {
        var col = vec3<f32>(0.25, 0.4, 1.0);
        if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u && tex_params.probe_mode == 0u
           && in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0 {
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            let tdx  = in.uv_scale * dsdx * dims;
            let tdy  = in.uv_scale * dsdy * dims;
            let q    = sqrt(abs(tdx.x * tdy.y - tdx.y * tdy.x));
            let tau  = f32(heat) / 8.0;
            col = vec3<f32>(1.0, 0.15, 0.1);
            if 2.0 * q <= tau { col = vec3<f32>(1.0, 0.85, 0.1); }
            if 4.0 * q <= tau { col = vec3<f32>(0.15, 0.9, 0.2); }
        }
        return col;
    }

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
        // Mip-matched slope (accel bit 14, ?slope_mip=1): fetch the sidecar at the surfel's colour mip level
        // (in.lod — computed by preprocess for the CURRENT render target, i.e. the low-res one under upscaling)
        // so the slope is the derivative of the texture band-limited to the render rate. Level 0 otherwise.
        let nlev = f32(textureNumLevels(slope_tex));
        var lvl  = 0.0;
        if (render_settings.accel_flags & 16384u) != 0u && tex_params.mip_mode == 1u {   // aniso (2) stores the level CAP in lod, not a level
            lvl = clamp(round(in.lod), 0.0, max(nlev - 1.0, 0.0));
        }
        let sc   = exp2(lvl);
        let dimsl = dims / sc;                               // texel grid of the sampled level
        // Same tile clamp as shade_color (CUDA / vk_raster: au in [u0, u0+w-1]) at the sampled level.
        let hw = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * sc / dims, vec2<f32>(0.0));
        let uv = clamp(in.uv_base + g.s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        if SLOPE_SRC == 1u {
            let f  = fract(uv * dimsl - 0.5);
            var g4 : vec4<f32>;
            if lvl == 0.0 {
                g4 = textureGather(3, slope_tex, atlas_samp, uv, i32(in.layer));
            } else {
                // textureGather is level-0 only: read the 2x2 texel centres of level \`lvl\` with point-exact
                // bilinear taps (x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0), the gather's component order).
                let c0 = (floor(uv * dimsl - 0.5) + 0.5) / dimsl;
                let du = vec2<f32>(1.0 / dimsl.x, 0.0); let dv = vec2<f32>(0.0, 1.0 / dimsl.y);
                g4 = vec4<f32>(textureSampleLevel(slope_tex, atlas_samp, c0 + dv,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du + dv, i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0,           i32(in.layer), lvl).a);
            }
            // per texel OF THE SAMPLED LEVEL → per level-0 texel (k below is in level-0 texels per uv unit)
            dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * slope_params.x / sc;
            dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * slope_params.x / sc;
        } else {
            let t = textureSampleLevel(slope_tex, atlas_samp, uv, i32(in.layer), lvl).rg;
            dPu = t.x * slope_params.x + slope_params.y;
            dPv = t.y * slope_params.z + slope_params.w;
        }
        // Texel-rate gate (same idea as the green mode's 1.5 cut, soft): at grazing / minified fragments the
        // pixel step crosses more than a texel OF THE SAMPLED LEVEL, so the per-texel slope times that step is
        // texel noise amplified by the step length — the speckle on edge-on surfels. Full weight up to 1 texel
        // per pixel, zero from 2. (The Vulkan finetune path has no gate; magnified fragments are unchanged.)
        let tppl = max(length(abs(k) * dsdx), length(abs(k) * dsdy)) / sc;
        let gate = clamp(2.0 - tppl, 0.0, 1.0);
        dPu *= gate; dPv *= gate;
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


// ---------------------------------------------------------------------------
// Re-fetch upscaling (?up=refetch; nest-splatting scripts/topk_refetch_eval.py, docs/UPSCALING_GRADIENT_AWARE.md).
// The low-res pass keeps, per low-res pixel, the RF_K front-most surfels whose kernel alpha reaches rf.thr and their
// exact blend weights w = alpha * T; the full-res pass then upscales the low-res colour with FD-Hermite and adds, for
// each of the 4 low-res pixels around the output pixel (bilinear weights) and each kept surfel,
//     w * (feat(uv at the output pixel) - feat(uv at the low-res pixel)),
// i.e. the surfel's own texture re-fetched at the output pixel's exact ray/plane uv. Pass order per frame:
//   1. fs_refetch_select  — atomicMax insertion of (rank + 1) into RF_K slots (larger rank = nearer, back-to-front sort)
//   2. fs_refetch_cw      — colour + slot weights in one blended pass: only slot k's surfel writes alpha into channel k,
//                           every fragment attenuates it (premultiplied over), so channel k ends at alpha_k * T_k
//   3. fs_refetch_up      — full-res fullscreen pass (vs_rf_full)
// ---------------------------------------------------------------------------
const RF_K : u32 = 4u;
struct RefetchParams { wl : u32, hl : u32, W : u32, H : u32, thr : f32, gain : f32, _p0 : u32, _p1 : u32 };
@group(3) @binding(10) var<storage, read_write> rf_keys : array<atomic<u32>>;
@group(3) @binding(11) var<uniform>             rf      : RefetchParams;
@group(3) @binding(12) var                      rf_wa   : texture_2d<f32>;
@group(3) @binding(13) var                      rf_wb   : texture_2d<f32>;
@group(3) @binding(14) var                      rf_low  : texture_2d<f32>;

fn rf_base(pos: vec2<f32>) -> u32 {
    let p = vec2<u32>(floor(pos));
    return (min(p.y, rf.hl - 1u) * rf.wl + min(p.x, rf.wl - 1u)) * RF_K;
}

@fragment
fn fs_refetch_select(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a >= rf.thr {
        let base = rf_base(in.position.xy);
        var v = in.rank + 1u;
        for (var k = 0u; k < RF_K; k++) {
            let old = atomicMax(&rf_keys[base + k], v);
            if old == 0u { break; }
            v = min(old, v);         // the smaller of the two moves on to the next slot
        }
    }
    return vec4<f32>(0.0);
}

struct RefetchOut {
    @location(0) c  : vec4<f32>,
    @location(1) wa : vec4<f32>,
    @location(2) wb : vec4<f32>,
};

@fragment
fn fs_refetch_cw(in: VertexOutput) -> RefetchOut {
    let sp  = splat_in(in);
    let g   = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    let base = rf_base(in.position.xy);
    let key  = in.rank + 1u;
    var m = vec4<f32>(0.0);
    for (var k = 0u; k < RF_K; k++) {
        if atomicLoad(&rf_keys[base + k]) == key { m[k] = 1.0; }
    }
    return RefetchOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(m.xyz, 1.0) * g.a, vec4<f32>(m.w, 0.0, 0.0, 1.0) * g.a);
}

@vertex
fn vs_rf_full(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn rf_f(x: i32, y: i32) -> vec3<f32> {
    return textureLoad(rf_low, vec2<i32>(clamp(x, 0, i32(rf.wl) - 1), clamp(y, 0, i32(rf.hl) - 1)), 0).rgb;
}
fn rf_gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return rf_f(1, y) - rf_f(0, y); }
    if (x >= i32(rf.wl) - 1) { return rf_f(x, y) - rf_f(x - 1, y); }
    return 0.5 * (rf_f(x + 1, y) - rf_f(x - 1, y));
}
fn rf_gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return rf_f(x, 1) - rf_f(x, 0); }
    if (y >= i32(rf.hl) - 1) { return rf_f(x, y) - rf_f(x, y - 1); }
    return 0.5 * (rf_f(x, y + 1) - rf_f(x, y - 1));
}
fn rf_gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return rf_gx(x, 1) - rf_gx(x, 0); }
    if (y >= i32(rf.hl) - 1) { return rf_gx(x, y) - rf_gx(x, y - 1); }
    return 0.5 * (rf_gx(x, y + 1) - rf_gx(x, y - 1));
}

@fragment
fn fs_refetch_up(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = fc.x - 0.5; let Y = fc.y - 0.5;
    let rx = f32(rf.wl) / f32(rf.W); let ry = f32(rf.hl) / f32(rf.H);
    let x = (X + 0.5) * rx - 0.5; let y = (Y + 0.5) * ry - 0.5;     // output pixel in low-res pixel coordinates
    // FD-Hermite base (same as the upscaler's mode 2)
    let sx = clamp(x, 0.0, f32(rf.wl) - 1.0); let sy = clamp(y, 0.0, f32(rf.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(rf.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(rf.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
    let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
    let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
    var c = vec3<f32>(0.0);
    for (var b = 0; b < 2; b++) {
        for (var a = 0; a < 2; a++) {
            let i = i0 + a; let j = j0 + b;
            c += rf_f(i, j) * (Hx[a] * Hy[b]) + rf_gx(i, j) * (Gx[a] * Hy[b]) + rf_gy(i, j) * (Hx[a] * Gy[b]) + rf_gxy(i, j) * (Gx[a] * Gy[b]);
        }
    }
    // Re-fetch correction over the 4 surrounding low-res records (bilinear weights, edge-clamped like the prototype).
    var corr = vec3<f32>(0.0);
    if rf.gain > 0.0 && tex_params.atlas_enabled != 0u && tex_params.probe_mode == 0u {
        let fx0 = floor(x); let fy0 = floor(y);
        let fx = x - fx0; let fy = y - fy0;
        let pix_hi = vec2<f32>(x, y);
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let li = clamp(i32(fx0) + a, 0, i32(rf.wl) - 1); let lj = clamp(i32(fy0) + b, 0, i32(rf.hl) - 1);
                let bw = select(1.0 - fx, fx, a == 1) * select(1.0 - fy, fy, b == 1);
                if bw <= 0.0 { continue; }
                let wa = textureLoad(rf_wa, vec2<i32>(li, lj), 0); let wb = textureLoad(rf_wb, vec2<i32>(li, lj), 0);
                let wk = vec4<f32>(wa.r, wa.g, wa.b, wb.r);
                let base = (u32(lj) * rf.wl + u32(li)) * RF_K;
                let pix_lo = vec2<f32>(f32(li), f32(lj));
                for (var k = 0u; k < RF_K; k++) {
                    let key = atomicLoad(&rf_keys[base + k]);
                    if key == 0u { break; }
                    if wk[k] < 1e-3 { continue; }
                    let sp = unpack_splat(splats_2d[indices[key - 1u]]);
                    if (sp.gauss_id & 0xC0000000u) != 0u || sp.uv_scale.x == 0.0 || sp.uv_scale.y == 0.0 { continue; }
                    let lo = intersect_uv(sp, pix_lo); let hi = intersect_uv(sp, pix_hi);
                    if !lo.ok || !hi.ok { continue; }
                    let f_hi = shade_color(sp, ShadeGeom(hi.s, 1.0, 1.0, false, pix_hi));
                    let f_lo = shade_color(sp, ShadeGeom(lo.s, 1.0, 1.0, false, pix_lo));
                    corr += (bw * wk[k]) * (f_hi - f_lo);
                }
            }
        }
    }
    return vec4<f32>(c + rf.gain * corr, 1.0);
}
`,Cn=`const WG_SIZE = 256u;
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
}`,Wn=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,qn=`// shader implementing gpu radix sort.

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
`,Nn=`// shader implementing gpu radix sort.

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
`,$n=`// ============================================================================
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
}`,cn=32,vt=1,bt=2,Ct=4,Wt=512,qt=1024,Nt=2048,$t=4096,Kt=8192,Kn=0,Ke=new ArrayBuffer(cn),me={canvas_size:new Uint32Array(Ke,0,2),accel_flags:new Uint32Array(Ke,8,1),feature_mode:new Uint32Array(Ke,12,1),gaussian_scaling:new Float32Array(Ke,16,1),sh_bias:new Float32Array(Ke,20,1),color_K:new Uint32Array(Ke,24,1),walltime:new Float32Array(Ke,28,1)};function Vn(s){me.canvas_size[0]=s.width>>>0,me.canvas_size[1]=s.height>>>0,me.accel_flags[0]=(s.accel_flags??vt|bt)>>>0,me.feature_mode[0]=(s.feature_mode??Kn)>>>0,me.gaussian_scaling[0]=s.gaussian_scaling??1,me.sh_bias[0]=s.sh_bias??.5,me.color_K[0]=(s.color_K??0)>>>0,me.walltime[0]=s.walltime??0}function un(s,r){s.queue.writeBuffer(r,0,Ke)}function $e(s,r,h){h&&s&&r&&un(s,r)}function bs(s,r,h,w,y=!0){me.canvas_size[0]=s>>>0,me.canvas_size[1]=r>>>0,$e(h??null,w??null,y)}function Ss(s,r,h,w=!0){me.gaussian_scaling[0]=s,$e(r??null,h??null,w)}function Bs(s,r,h,w=!0){me.sh_bias[0]=s,$e(r??null,h??null,w)}function Ps(s,r,h,w=!0){me.color_K[0]=s>>>0,$e(r??null,h??null,w)}function Ts(s,r,h,w=!0){me.feature_mode[0]=s>>>0,$e(r??null,h??null,w)}function Zn(s){const r=new Float32Array(1),h=new Uint32Array(r.buffer);r[0]=s;const w=h[0],y=w>>>16&32768,v=(w>>>23&255)-127+15;return v<=0?y:v>=31?y|31744:y|v<<10|w>>>13&1023}function ks(s,r=.3,h,w,y=!0){let v=me.accel_flags[0]&65535&~Kt;s&&(v=v|Kt|Zn(r)<<16),me.accel_flags[0]=v>>>0,$e(h??null,w??null,y)}function Hn(s,r,h,w=!0){let y=me.accel_flags[0];s.oac!==void 0&&(y=s.oac?y|vt:y&~vt),s.spr!==void 0&&(y=s.spr?y|bt:y&~bt),s.bfc!==void 0&&(y=s.bfc?y|Ct:y&~Ct),s.hypLegacy!==void 0&&(y=s.hypLegacy?y|Wt:y&~Wt),s.centred!==void 0&&(y=s.centred?y|$t:y&~$t),s.raysplat!==void 0&&(y=s.raysplat?y|Nt:y&~Nt),s.legacyPos!==void 0&&(y=s.legacyPos?y|qt:y&~qt),me.accel_flags[0]=y>>>0,$e(r??null,h??null,w)}const Vt=16384;function Gs(s,r,h,w=!0){let y=me.accel_flags[0];y=s?y|Vt:y&~Vt,me.accel_flags[0]=y>>>0,$e(r??null,h??null,w)}function Es(s,r,h,w=!0){const y=s>0?Math.max(1,Math.min(63,Math.round(s*8))):0;let v=me.accel_flags[0];v=v&-505|y<<3,me.accel_flags[0]=v>>>0,$e(r??null,h??null,w)}const Yn=256;function Ye(s,r){const h=[],w=[];let y=!0;for(const v of s.split(`
`)){const G=v.trim();let E;if((E=/^\/\/#if\s+(\w+)\s*$/.exec(G))!==null){const A=!!r[E[1]];w.push({parent:y,taken:A}),y=y&&A;continue}if(/^\/\/#else\s*$/.test(G)){const A=w[w.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");y=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(G)){const A=w.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");y=A.parent;continue}y&&h.push(v)}if(w.length!==0)throw new Error("preprocessWGSL: unterminated #if");return h.join(`
`)}const jn=cn,Jn=8,Xn=96,Qn=12,Bt=8,Ne=1<<Bt,Ze=256,ht=32/Bt,es=0,dt=ht&1;function Zt(s,r){return{sort_indices_buffer:r.createBuffer({label:"ping-pong payload (indices)",size:s*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:r.createBuffer({label:"ping-pong keys (depths)",size:s*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ts(s,r){const h=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=s.createPipelineLayout({bindGroupLayouts:[h]}),y=v=>s.createComputePipeline({layout:w,compute:{module:r,entryPoint:v,constants:{WG_SIZE:Ze}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:h}}function ns(s,r,h){const w=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),v=s.createPipelineLayout({bindGroupLayouts:[w]}),G=s.createPipelineLayout({bindGroupLayouts:[y]}),E=[];for(let A=0;A<ht;A++){const R={PASS_ID:A+es,RS_RADIX_LOG2:Bt,RS_RADIX_SIZE:Ne};E.push({localHistogram:s.createComputePipeline({layout:v,compute:{module:r,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:s.createComputePipeline({layout:G,compute:{module:h,entryPoint:"scatter_elements",constants:R}})})}return{passes:E,localHistogramBindGroupLayout:w,scatterBindGroupLayout:y}}function ss(s){const r=s.createShaderModule({label:"local histogram",code:Nn}),h=s.createShaderModule({label:"scatter",code:qn}),w=s.createShaderModule({label:"blelloch prefix",code:$n}),y=ts(s,w),v=ns(s,r,h);return{localHistogramBindGroupLayout:v.localHistogramBindGroupLayout,scatterBindGroupLayout:v.scatterBindGroupLayout,passes:v.passes,hierarchicalBlelloch:y}}function Ht(s){const r=s.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=r.createView({dimension:"2d-array"}),w=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=s.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),v=s.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});s.queue.writeBuffer(v,0,new ArrayBuffer(32));const G={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:r,view:h,sampler:w,rectsBuffer:y,texParamsBuffer:v,meta:G}}const je=class je{constructor(r,h,w,y,v,G=null,E={}){B(this,"device");B(this,"pc");B(this,"presentationFormat");B(this,"camera_buffer");B(this,"render_settings_buffer");B(this,"draw_indirect_buffer");B(this,"splat_2d_buffer");B(this,"querySet");B(this,"resolveBuffer");B(this,"resultBuffer");B(this,"queriesPerFrame",Jn);B(this,"queryCapacityFrames",200);B(this,"sort_prefixBindGroup");B(this,"sort_pipelines");B(this,"sort_localHistogramBindGroups");B(this,"sort_scatterBindGroups");B(this,"lastFrame",0);B(this,"frameCount",0);B(this,"preprocessPipeline");B(this,"cullPipeline");B(this,"renderPipeline");B(this,"indirectPipeline");B(this,"renderShaderModule");B(this,"betaKernel",1);B(this,"fetchById");B(this,"octBound");B(this,"acc16");B(this,"accTexture",null);B(this,"accView",null);B(this,"accW",0);B(this,"accH",0);B(this,"legacyRenderPipeline",null);B(this,"varyingsPipeline",null);B(this,"msaa",!1);B(this,"msaaTexture",null);B(this,"msaaView",null);B(this,"msaaW",0);B(this,"msaaH",0);B(this,"msaaPipelines",new Map);B(this,"mkVariant",null);B(this,"slopeTarget",null);B(this,"viewport",null);B(this,"slopeSource",0);B(this,"slopePipelines",new Map);B(this,"rendererBgls",[]);B(this,"betaKernelConst",1);B(this,"slopeBgl",null);B(this,"slopeBg",null);B(this,"slopeDummy",null);B(this,"refetch",null);B(this,"refetchApplied",!1);B(this,"rfKeys",null);B(this,"rfKeysCap",0);B(this,"rfParams",null);B(this,"rfLowBgl",null);B(this,"rfUpBgl",null);B(this,"rfSplatsBgl",null);B(this,"rfLowBg",null);B(this,"rfUpBg",null);B(this,"rfUpKey",[]);B(this,"rfSplatsBg",null);B(this,"rfSplatsKey",[]);B(this,"rfPipelines",new Map);B(this,"rfWl",0);B(this,"rfHl",0);B(this,"legacyRenderer",!1);B(this,"accResolvePipeline",null);B(this,"accResolveBgl",null);B(this,"accResolveBindGroup",null);B(this,"twoPass",!1);B(this,"twoPassThresh",.5);B(this,"twoPassParamsBuffer",null);B(this,"twoPassBgl",null);B(this,"twoPassBg",null);B(this,"twoPassSplatsBgl",null);B(this,"twoPassSplatsBg",null);B(this,"twoPassModules",new Map);B(this,"twoPassPipelines",new Map);B(this,"twoPassDepth",null);B(this,"twoPassDepthView",null);B(this,"twoPassW",0);B(this,"twoPassH",0);B(this,"overdrawMode",0);B(this,"overdrawMax",48);B(this,"ovTexture",null);B(this,"ovView",null);B(this,"ovW",0);B(this,"ovH",0);B(this,"ovParamsBuffer",null);B(this,"ovResolvePipeline",null);B(this,"ovResolveBgl",null);B(this,"ovResolveBg",null);B(this,"ovStatsPipeline",null);B(this,"ovStatsBgl",null);B(this,"ovStatsBg",null);B(this,"ovStatsBuffer",null);B(this,"ovReadback",null);B(this,"ovReadState","idle");B(this,"ovLastStats",null);B(this,"ovPipelines",new Map);B(this,"renderSettingsBgl");B(this,"preprocessBgl2");B(this,"renderSplatsBgl");B(this,"atlasBgl");B(this,"sort_info_buffer");B(this,"sort_ping_pong");B(this,"crsBg");B(this,"gsBg");B(this,"cullBg2");B(this,"preprocessBg1");B(this,"renderSplatsBindGroup");B(this,"renderSettingsBindGroup");B(this,"atlasBindGroup");B(this,"indirectBindGroup");B(this,"sh_solvers_buffer");B(this,"bfcParamsBuffer");B(this,"bfcBindGroupLayout");B(this,"bfcBindGroup");B(this,"staticSortKeys",null);B(this,"wideFrustum",!1);B(this,"staticKeysBuffer",null);B(this,"bgColor",[0,0,0,0]);B(this,"showPerfDialogNext",!1);B(this,"requestReorderNextFrame",!1);B(this,"reorderInFlight",!1);B(this,"downloadOnceNextRead",!1);B(this,"downloadOnceFileName","fps_metrics");B(this,"allFrameTimes",[]);B(this,"lastStageBreakdownMs",null);B(this,"timeQueryEnabled");B(this,"atlas");B(this,"atlasParamsBuffer");B(this,"_atlasEnabled",!0);B(this,"mipLodBias",1);B(this,"_mipMode",1);B(this,"preFrame",null);this.fetchById=E.fetchById??!0,this.staticSortKeys=E.staticSortKeys??null,this.wideFrustum=E.wideFrustum??!1,this.octBound=E.octBound??!1,this.acc16=E.acc16??!1,ye(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=v.includes("timestamp-query");this.timeQueryEnabled=A,A&&ye("⏰ using timestamp-query"),this.pc=r,this.device=h,this.presentationFormat=w,this.camera_buffer=y,this.atlas=G??Ht(h),this.atlasParamsBuffer=h.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),h.addEventListener("uncapturederror",ue=>{console.error("A WebGPU error was not captured:",ue.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+Ze-1)/Ze)+1)*Ze,I=Math.ceil(R/Ze);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const Z=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ss(h);const M=[Zt(R,h),Zt(R,h)],q=h.createBuffer({label:"workgroup histograms",size:I*Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),C=h.createBuffer({label:"workgroup prefixes",size:I*Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=h.createBuffer({label:"digit base",size:Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=Math.ceil(I/Ze),j=Math.ceil(ee/Ze),$=h.createBuffer({label:"prefix l0 sums",size:ee*Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=h.createBuffer({label:"prefix l0 offsets",size:ee*Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=h.createBuffer({label:"prefix l1 sums",size:j*Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=h.createBuffer({label:"prefix l1 offsets",size:j*Ne*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:C}},{binding:3,resource:{buffer:$}},{binding:4,resource:{buffer:J}},{binding:5,resource:{buffer:L}},{binding:6,resource:{buffer:F}},{binding:7,resource:{buffer:te}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:M[0].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:M[1].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:te}},{binding:2,resource:{buffer:M[0].sort_depths_buffer}},{binding:3,resource:{buffer:M[1].sort_depths_buffer}},{binding:4,resource:{buffer:M[0].sort_indices_buffer}},{binding:5,resource:{buffer:M[1].sort_indices_buffer}},{binding:6,resource:{buffer:C}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:te}},{binding:2,resource:{buffer:M[1].sort_depths_buffer}},{binding:3,resource:{buffer:M[0].sort_depths_buffer}},{binding:4,resource:{buffer:M[1].sort_indices_buffer}},{binding:5,resource:{buffer:M[0].sort_indices_buffer}},{binding:6,resource:{buffer:C}}]})],this.sort_info_buffer=Z,this.sort_ping_pong=M;const X=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ae=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ie=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),le=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:X,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ae,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ie,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=le,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:le,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const pe=this.device.createShaderModule({code:Cn});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:pe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const _e=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],ne=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Je(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),_e.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),ne.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:_e}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:ne});const z=this.device.createShaderModule({code:Ye(Wn,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[X,ae,ie,this.bfcBindGroupLayout]}),compute:{module:z,entryPoint:"surfel_cull"}});const ce=this.device.createShaderModule({code:Fn});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[X,le]}),compute:{module:ce,entryPoint:"preprocess"}});const W=this.device.createShaderModule({label:"render_2dgs",code:Ye(Xe,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});W.getCompilationInfo().then(ue=>{ue.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ue.messages.forEach(xe=>{(xe.type==="error"?console.error:xe.type==="warning"?console.warn:console.log)(`${xe.type} (line ${xe.lineNum}:${xe.linePos}): ${xe.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const N=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),H=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,he=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:H,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ge=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),oe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[N,he,ge]}),vertex:{module:W,entryPoint:"vs_main"},fragment:{module:W,entryPoint:"fs_main",constants:{BETA_KERNEL:oe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const we=(ue,xe,Be,Te=1)=>{const Q=this.device.createShaderModule({label:`render_2dgs (${ue})`,code:Ye(Xe,{FETCH_BY_ID:xe,OCT:Be})});return this.device.createRenderPipeline({label:`render_2dgs_${ue}`,multisample:{count:Te},layout:this.device.createPipelineLayout({bindGroupLayouts:[N,he,ge]}),vertex:{module:Q,entryPoint:"vs_main"},fragment:{module:Q,entryPoint:"fs_main",constants:{BETA_KERNEL:oe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[N,he,ge],this.betaKernelConst=oe,this.varyingsPipeline=we("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?we("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=we,this.device.popErrorScope().then(ue=>{ue?console.error("[render_2dgs] pipeline create validation error:",ue.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:N,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:he,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[dt].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ge,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=W,this.betaKernel=oe,this.renderSettingsBgl=N,this.renderSplatsBgl=he,this.atlasBgl=ge}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get resolvesIntoTarget(){return this.msaa||this.acc16||this.overdrawMode!==0}setSlopeAtlas(r,h){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),r||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),r=this.slopeDummy.createView({dimension:"2d-array"}));const w=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(w,0,new Float32Array(h)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:r},{binding:7,resource:{buffer:w}}]})}slopePipelineFor(r,h){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const w=`${r?1:0}${h?1:0}${this.slopeSource}`;let y=this.slopePipelines.get(w);if(!y){const v=this.device.createShaderModule({label:`render_2dgs slope (${w})`,code:Ye(Xe,{FETCH_BY_ID:r,OCT:h})}),G={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};y=this.device.createRenderPipeline({label:`render_2dgs_slope_${w}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:G},{format:"rgba16float",blend:G}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(w,y)}return y}rfEnsure(r,h){var A;const w=this.device;this.rfLowBgl||(this.rfLowBgl=w.createBindGroupLayout({label:"refetch (low)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.rfUpBgl=w.createBindGroupLayout({label:"refetch (up)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:12,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:13,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:14,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.rfSplatsBgl=w.createBindGroupLayout({label:"refetch splats",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rfParams=w.createBuffer({label:"refetch params",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const y=r*h*4*4;(!this.rfKeys||this.rfKeysCap<y)&&((A=this.rfKeys)==null||A.destroy(),this.rfKeysCap=Math.ceil(y*1.25/256)*256,this.rfKeys=w.createBuffer({label:"refetch keys",size:this.rfKeysCap,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.rfLowBg=null,this.rfUpBg=null),this.rfLowBg||(this.rfLowBg=w.createBindGroup({layout:this.rfLowBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}}]}));const v=this.refetch,G=new Uint32Array([r,h,v.W,v.H,0,0,0,0]),E=new Float32Array(G.buffer);E[4]=v.thr,E[5]=v.gain,w.queue.writeBuffer(this.rfParams,0,G),this.rfWl=r,this.rfHl=h}rfPipeline(r,h,w){const y=r==="up"?"up":`${r}${h?1:0}${w?1:0}`;let v=this.rfPipelines.get(y);if(v)return v;const G=this.device.createShaderModule({label:`render_2dgs refetch (${y})`,code:Ye(Xe,{FETCH_BY_ID:r==="up"?!1:h,OCT:r==="up"?!1:w})}),E={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}},A={BETA_KERNEL:this.betaKernelConst};if(r==="up")v=this.device.createRenderPipeline({label:"render_2dgs_refetch_up",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.rendererBgls[0],this.rfSplatsBgl,this.rendererBgls[2],this.rfUpBgl]}),vertex:{module:G,entryPoint:"vs_rf_full"},fragment:{module:G,entryPoint:"fs_refetch_up",constants:A,targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});else{const R=this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.rfLowBgl]});v=this.device.createRenderPipeline({label:`render_2dgs_refetch_${y}`,layout:R,vertex:{module:G,entryPoint:"vs_main"},fragment:r==="select"?{module:G,entryPoint:"fs_refetch_select",constants:A,targets:[{format:"rgba16float",writeMask:0}]}:{module:G,entryPoint:"fs_refetch_cw",constants:A,targets:[{format:this.presentationFormat,blend:E},{format:"rgba16float",blend:E},{format:"rgba16float",blend:E}]},primitive:{topology:"triangle-strip",cullMode:"none"}})}return this.rfPipelines.set(y,v),v}refetchPass(r,h){const w=this.refetch,y=[this.splat_2d_buffer,this.sort_ping_pong[dt].sort_indices_buffer];(!this.rfSplatsBg||y.some((E,A)=>E!==this.rfSplatsKey[A]))&&(this.rfSplatsBg=this.device.createBindGroup({layout:this.rfSplatsBgl,entries:[{binding:0,resource:{buffer:y[0]}},{binding:1,resource:{buffer:y[1]}}]}),this.rfSplatsKey=y);const v=[this.rfKeys,w.wa,w.wb,w.low];(!this.rfUpBg||v.some((E,A)=>E!==this.rfUpKey[A]))&&(this.rfUpBg=this.device.createBindGroup({layout:this.rfUpBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}},{binding:12,resource:w.wa},{binding:13,resource:w.wb},{binding:14,resource:w.low}]}),this.rfUpKey=v);const G=r.beginRenderPass({label:"refetch_up",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});G.setPipeline(this.rfPipeline("up",!1,!1)),G.setBindGroup(0,this.renderSettingsBindGroup),G.setBindGroup(1,this.rfSplatsBg),G.setBindGroup(2,this.atlasBindGroup),G.setBindGroup(3,this.rfUpBg),G.draw(3),G.end()}setBfcParams(r,h){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([r,h[0],h[1],h[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var y;const r=new ArrayBuffer(32),h=new Uint32Array(r),w=new Float32Array(r);h[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,h[1]=this.atlas.meta.layer_h|0,w[2]=this.atlas.meta.uv_extent||0,h[3]=this.atlas.meta.probe_mode|0||0,h[4]=this._mipMode!==0?Math.max(1,((y=this.atlas.meta.mip_bytes)==null?void 0:y.length)??1):1,w[5]=this.mipLodBias,h[6]=this._mipMode===2?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,r)}setMsaa(r){r!==this.msaa&&(this.msaa=r,ye(`[render_2dgs] MSAA 4x: ${r?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(r,h){const w=`${r?"byid":"var"}_${h?"oct":"quad"}`;let y=this.msaaPipelines.get(w);return y||(y=this.mkVariant(`msaa4_${w}`,r,h,4),this.msaaPipelines.set(w,y)),y}ensureMsaaResources(r,h){var w;this.msaaTexture!==null&&this.msaaW===r&&this.msaaH===h||((w=this.msaaTexture)==null||w.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:r,height:h},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=r,this.msaaH=h)}setTwoPass(r){r!==this.twoPass&&(this.twoPass=r,ye(`[render_2dgs] two-pass layer path: ${r?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(r){this.twoPassThresh=Math.min(.999,Math.max(.001,r)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[dt].sort_indices_buffer}}]}))}ensureTwoPassResources(r,h){var w;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===r&&this.twoPassH===h)&&((w=this.twoPassDepth)==null||w.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,r),height:Math.max(1,h),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=r,this.twoPassH=h)}renderModuleFor(r,h,w){const y=`${r?"byid":"vary"}_${h?"oct":"quad"}_${w?"hwz":"z0"}`,v=this.twoPassModules.get(y);if(v!==void 0)return v;const G=this.device.createShaderModule({label:`render_2dgs (${y})`,code:Ye(Xe,{FETCH_BY_ID:r,OCT:h,HW_DEPTH:w})});return G.getCompilationInfo().then(E=>{for(const A of E.messages)A.type==="error"&&console.error(`[render_2dgs ${y}] (line ${A.lineNum}:${A.linePos}): ${A.message}`)}),this.twoPassModules.set(y,G),G}twoPassPipelinesFor(r,h){const w=`${r?"byid":"vary"}_${h?"oct":"quad"}`,y=this.twoPassPipelines.get(w);if(y!==void 0)return y;const v=this.renderModuleFor(r,h,!0),G=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const E=this.device.createRenderPipeline({label:`render_2dgs_opaque_${w}`,layout:G,vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),A=this.device.createRenderPipeline({label:`render_2dgs_front_${w}`,layout:G,vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:je.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(I=>{I?console.error(`[render_2dgs twopass ${w}] pipeline validation error:`,I.message):console.log(`[render_2dgs twopass ${w}] pipelines created OK`)});const R={opaque:E,front:A};return this.twoPassPipelines.set(w,R),R}setOverdrawMode(r){r!==this.overdrawMode&&(this.overdrawMode=r,this.ovLastStats=null,ye(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][r]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(r){this.overdrawMax=Math.max(1,r),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(r,h){var w;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const y=`
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
}`,v=this.device.createShaderModule({label:"overdraw_resolve",code:y});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const G=`
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
}`,E=this.device.createShaderModule({label:"overdraw_stats",code:G});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:E,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===r&&this.ovH===h||((w=this.ovTexture)==null||w.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,r),height:Math.max(1,h),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=r,this.ovH=h)}ovPipelineFor(r,h,w){const y=`${r}_${h?"byid":"vary"}_${w?"oct":"quad"}`,v=this.ovPipelines.get(y);if(v!==void 0)return v;const G=r.startsWith("tp_"),E=this.renderModuleFor(h,w,G),A=this.device.createPipelineLayout({bindGroupLayouts:G?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),R={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[r];let I;r==="tp_raster"?I={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:r==="tp_opaque"?I={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:r==="tp_front"&&(I={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const Z=this.device.createRenderPipeline({label:`render_2dgs_${y}`,layout:A,vertex:{module:E,entryPoint:"vs_main"},fragment:{module:E,entryPoint:R,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:je.BLEND_ADD}]},depthStencil:I,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(M=>{M&&console.error(`[render_2dgs overdraw ${y}] pipeline validation error:`,M.message)}),this.ovPipelines.set(y,Z),Z}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const r=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const h=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:r[0]/h,meanCovered:r[2]>0?r[0]/r[2]:0,max:r[1],coveredFrac:r[2]/h}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(r,h){var w;if(this.accResolvePipeline===null){const y=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,v=this.device.createShaderModule({label:"acc16_resolve",code:y});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===r&&this.accH===h||((w=this.accTexture)==null||w.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,r),height:Math.max(1,h),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=r,this.accH=h)}setAtlas(r){this.atlas=r??Ht(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&ft(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(r){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=r,ft(this.device,this.atlas.texParamsBuffer,this.atlas.meta,r,this._mipMode))}setMipLodBias(r){this.mipLodBias=r,this.writeAtlasParams()}setFetchById(r){r!==this.fetchById&&(this.fetchById=r,ye(`[render_2dgs] fragment inputs: ${r?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(r){if(r===this.legacyRenderer)return;this.legacyRenderer=r,Hn({legacyPos:r,hypLegacy:r},this.device,this.render_settings_buffer);const h=!r&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([h])),ye(`[render_2dgs] renderer: ${r?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this.atlas.sampler}setMipMode(r){if(this.atlas.meta.format===4294967295)return;const h=this._mipMode;this._mipMode=typeof r=="boolean"?r?1:0:r,h===2!=(this._mipMode===2)&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),ft(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var r;return(((r=this.atlas.meta.mip_bytes)==null?void 0:r.length)??1)>1}async debugReadSortedIndices(r=30){const h=Math.max(0,Math.min(r,this.pc.num_points)),w=h*Uint32Array.BYTES_PER_ELEMENT;if(w===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:w,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),v=this.device.createCommandEncoder();v.copyBufferToBuffer(this.sort_ping_pong[dt].sort_indices_buffer,0,y,0,w),this.device.queue.submit([v.finish()]),await y.mapAsync(GPUMapMode.READ);const G=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(G)),y.unmap()}writeSortKeys(r){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,r)}frame(r,h,w=!0){this.preFrame&&this.preFrame();const v=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,G=w&&this.timeQueryEnabled;{r.clearBuffer(this.sort_info_buffer,0,4);const E={label:"cull"};G&&(E.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+0,endOfPassWriteIndex:v+1});const A=r.beginComputePass(E);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const R=Math.ceil(this.pc.num_points/Yn);A.dispatchWorkgroups(R,1,1),A.end()}{const E=r.beginComputePass({label:"calculate indirect dispatch"});E.setPipeline(this.indirectPipeline),E.setBindGroup(0,this.indirectBindGroup),E.dispatchWorkgroups(1,1,1),E.end()}{const E={label:"preprocess"};G&&(E.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+2,endOfPassWriteIndex:v+3});const A=r.beginComputePass(E);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let E=0;E<ht;E++){const A=E&1,R=this.sort_pipelines.passes[E],I=this.sort_localHistogramBindGroups[A],Z=this.sort_scatterBindGroups[A];{const M={label:`upsweep_round${E}`};G&&E==0&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+4});const q=r.beginComputePass(M);q.setPipeline(R.localHistogram),q.setBindGroup(0,I),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}{const M=r.beginComputePass({label:`prefix_round${E} - l0TileScan`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),M.end()}{const M=r.beginComputePass({label:`prefix_round${E} - l1TileScanOnL0`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),M.end()}{const M=r.beginComputePass({label:`prefix_round${E} - l1ScanSums`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroups(1,Ne,1),M.end()}{const M=r.beginComputePass({label:`prefix_round${E} - addL1ToL0`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),M.end()}{const M=r.beginComputePass({label:`prefix_round${E} - addL0ToElems`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),M.end()}{const M=r.beginComputePass({label:`prefix_round${E} - computeDigitBase`});M.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),M.setBindGroup(0,this.sort_prefixBindGroup),M.dispatchWorkgroups(1,1,1),M.end()}{const M={label:`scatter_round${E}`};G&&E==ht-1&&(M.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:v+5});const q=r.beginComputePass(M);q.setPipeline(R.scatterElements),q.setBindGroup(0,Z),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}}{const E=me.canvas_size[0],A=me.canvas_size[1],R=this.overdrawMode!==0;this.refetchApplied=!1;let I=h;R?(this.ensureOverdrawResources(E,A),I=this.ovView):this.acc16&&(this.ensureAccResources(E,A),I=this.accView);const Z=R?{r:0,g:0,b:0,a:0}:this.bgColor,M=R||this.acc16,q=this.fetchById&&!this.legacyRenderer,C=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(E,A);let te,ee;if(R)this.overdrawMode===1?(te=this.ovPipelineFor("tp_opaque",q,C),ee=this.ovPipelineFor("tp_front",q,C)):te=ee=this.ovPipelineFor("tp_raster",q,C);else{const F=this.twoPassPipelinesFor(q,C);te=F.opaque,ee=F.front}const j={label:"render_opaque_layer",colorAttachments:[{view:I,loadOp:"clear",storeOp:"store",clearValue:Z}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};G&&(j.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+6});const $=r.beginRenderPass(j);$.setPipeline(te),$.setBindGroup(0,this.renderSettingsBindGroup),$.setBindGroup(1,this.twoPassSplatsBg),$.setBindGroup(2,this.atlasBindGroup),$.setBindGroup(3,this.twoPassBg),$.drawIndirect(this.draw_indirect_buffer,0),$.end();const J={label:"render_front",colorAttachments:[{view:I,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};G&&!M&&(J.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:v+7});const L=r.beginRenderPass(J);L.setPipeline(ee),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.twoPassSplatsBg),L.setBindGroup(2,this.atlasBindGroup),L.setBindGroup(3,this.twoPassBg),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}else{const te=this.msaa&&!R&&!this.acc16;te&&this.ensureMsaaResources(E,A);const ee=this.refetch!==null&&!te&&!R&&!this.acc16&&!this.legacyRenderer,j=!ee&&this.slopeTarget!==null&&!te&&!R&&!this.acc16&&!this.legacyRenderer;this.refetchApplied=ee;const $=[te?{view:this.msaaView,resolveTarget:I,loadOp:"clear",storeOp:"discard",clearValue:Z}:{view:I,loadOp:"clear",storeOp:"store",clearValue:Z}];if(j&&$.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}),ee){const F=this.viewport??[E,A];this.rfEnsure(F[0],F[1]),r.clearBuffer(this.rfKeys,0,F[0]*F[1]*16);const X=r.beginRenderPass({label:"refetch_select",colorAttachments:[{view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});X.setPipeline(this.rfPipeline("select",this.fetchById,C)),X.setViewport(0,0,F[0],F[1],0,1),X.setScissorRect(0,0,F[0],F[1]),X.setBindGroup(0,this.renderSettingsBindGroup),X.setBindGroup(1,this.renderSplatsBindGroup),X.setBindGroup(2,this.atlasBindGroup),X.setBindGroup(3,this.rfLowBg),X.drawIndirect(this.draw_indirect_buffer,0),X.end();const ae={r:0,g:0,b:0,a:0};$.push({view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:ae},{view:this.refetch.wb,loadOp:"clear",storeOp:"store",clearValue:ae})}const J={label:"render",colorAttachments:$};G&&(J.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:v+6,...M?{}:{endOfPassWriteIndex:v+7}});const L=r.beginRenderPass(J);R?(L.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",q,C)),L.setBindGroup(1,this.twoPassSplatsBg)):ee?(L.setPipeline(this.rfPipeline("cw",this.fetchById,C)),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(3,this.rfLowBg)):j?(L.setPipeline(this.slopePipelineFor(this.fetchById,C)),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(3,this.slopeBg)):(L.setPipeline(te?this.msaaPipelineFor(q,C):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),L.setBindGroup(1,this.renderSplatsBindGroup)),this.viewport!==null&&!te&&(L.setViewport(0,0,this.viewport[0],this.viewport[1],0,1),L.setScissorRect(0,0,this.viewport[0],this.viewport[1])),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}if(R){r.clearBuffer(this.ovStatsBuffer,0,16);const te=r.beginComputePass({label:"overdraw_stats"});te.setPipeline(this.ovStatsPipeline),te.setBindGroup(0,this.ovStatsBg),te.dispatchWorkgroups(Math.ceil(E/16),Math.ceil(A/16),1),te.end();const ee={label:"overdraw_resolve",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};G&&(ee.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:v+7});const j=r.beginRenderPass(ee);j.setPipeline(this.ovResolvePipeline),j.setBindGroup(0,this.ovResolveBg),j.draw(3),j.end(),this.ovReadState==="idle"&&(r.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const te={label:"acc16_resolve",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};G&&(te.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:v+7});const ee=r.beginRenderPass(te);ee.setPipeline(this.accResolvePipeline),ee.setBindGroup(0,this.accResolveBindGroup),ee.draw(3),ee.end()}}this.frameCount++}async readPerfMetrics(r){const h=(r==null?void 0:r.silent)??!1;if(this.frameCount<=0)return;const w=this.device.createCommandEncoder({label:"timestamp resolve encoder"});w.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),w.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([w.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const v=new BigInt64Array(this.resultBuffer.getMappedRange()),G=Math.min(this.frameCount,this.queryCapacityFrames),E=(this.lastFrame+this.frameCount-G)%this.queryCapacityFrames,A=Array.from({length:y.length},()=>[]);let R=0;for(let j=0;j<G;j++){const $=(E+j)%this.queryCapacityFrames,J=$*this.queriesPerFrame;let L=!0;for(let F=0;F<y.length;F++){const[X,ae,ie]=y[F];if(v[J+ie]===0n||v[J+ae]===0n||v[J+ae]<v[J+ie]){L=!1;break}}if(!L){!h&&$%60===0&&console.debug("[timestamp] frame slot",$,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let F=0;F<y.length;F++){const[X,ae,ie]=y[F],le=Number(v[J+ie]),pe=Number(v[J+ae]);A[F].push((pe-le)/1e6)}}if(R===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const I=[];let Z=0,M=0,q=0;for(let j=0;j<y.length;j++){const $=y[j][0],J=A[j];let L=0;if($==="Total"){const F=this.allFrameTimes;L=F.reduce((ie,le)=>ie+le,0)/F.length;const X=[...F].sort((ie,le)=>ie-le);Z=X[Math.floor(X.length*.99)]||0;const ae=F.reduce((ie,le)=>ie+Math.pow(le-L,2),0)/F.length;M=Math.sqrt(ae),q=L}else L=J.reduce((F,X)=>F+X,0)/J.length;I.push([$,L])}this.lastFrame+=this.frameCount,this.frameCount=0;const C=Object.fromEntries(I);this.lastStageBreakdownMs={cull:C.Culling??0,preprocess:C.Preprocess??0,sort:C.Sort??0,render:C.Render??0,total:C.Total??0};const ee=`[TIMESTAMP - ${this.constructor.name}]
`+I.map(([j,$])=>`${j}: ${$.toFixed(3)}ms`).join(`
`)+`
Total P99: ${Z.toFixed(3)}ms
Total STD: ${M.toFixed(3)}ms
Total AVG: ${q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(ee),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const j=`Stage,ms
`,$=I.map(([F,X])=>`${F},${X.toFixed(3)}`).join(`
`),J="data:text/csv;charset=utf-8,"+encodeURIComponent(j+$),L=document.createElement("a");L.href=J,L.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(L),L.click(),L.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(ee)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const r=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:jn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const r=document.querySelector("canvas"),h=r?r.width:1,w=r?r.height:1;Vn({width:h,height:w,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),un(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Je(this.pc.num_points*Xn),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Je(this.pc.num_points*Qn),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(r){if(r&&r.trim().length>0){const h=r.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,w=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${w}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};B(je,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),B(je,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Yt=je;function rs(s,r){return 2*Math.atan(r/(2*s))}function as(s,r,h,w){const y=Math.tan(w/2),v=Math.tan(h/2),G=y*s,E=-G,A=v*s,R=-A,I=We.create();return I[0]=2*s/(A-R),I[5]=-2*s/(G-E),I[2]=(A+R)/(A-R),I[6]=(G+E)/(G-E),I[14]=1,I[10]=r/(r-s),I[11]=-(r*s)/(r-s),We.transpose(I,I),I}async function As(s){ye(`loading scene camera file... : ${s}`);const h=await(await fetch(s)).json();return ye(`loaded cameras count: ${h.length}`),h.map(w=>{const y=qe.clone(w.position),v=Tn.create(...w.rotation.flat()),G=v[0],E=v[4],A=v[8],R=v[1],I=v[5],Z=v[9],M=v[2],q=v[6],C=v[10];G*(I*C-Z*q)-E*(R*C-Z*M)+A*(R*q-I*M)<0&&(v[1]=-v[1],v[5]=-v[5],v[9]=-v[9]);const ee=We.fromMat3(v);return{position:y,rotation:ee,img_name:w.img_name,id:w.id}})}const is=4*2,os=4*16,dn=4*os+2*is;function ls(s){return s.createBuffer({label:"camera uniform",size:dn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Ve=new Float32Array(dn/Float32Array.BYTES_PER_ELEMENT),_t=class _t{constructor(r,h){B(this,"_renderSize",null);B(this,"_refSize",null);B(this,"uniform_buffer");B(this,"position",qe.create());B(this,"rotation",We.create());B(this,"zfar",100);B(this,"fovY",45/180*Math.PI);B(this,"fovX");B(this,"focalRatioX",1);B(this,"focal",Rt.create());B(this,"viewport",Rt.create());B(this,"view_matrix",We.identity());B(this,"view_inv_matrix",We.identity());B(this,"proj_matrix",We.identity());B(this,"proj_inv_matrix",We.identity());B(this,"_negPos",qe.create());B(this,"look",qe.create(0,0,1));B(this,"up",qe.create(0,1,0));B(this,"right",qe.create(1,0,0));this.canvas=r,this.device=h,this.uniform_buffer=h?ls(h):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(r,h,w,y){this._renderSize=[r,h],this._refSize=w&&y?[w,y]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}on_update_canvas(){const r=this._renderSize?this._renderSize[0]:this.canvas.width,h=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[w,y]=this._refSize,v=.5*y/Math.tan(this.fovY*.5);this.focal[0]=v*this.focalRatioX*(r/w),this.focal[1]=v*(h/y)}else{const w=.5*h/Math.tan(this.fovY*.5);this.focal[0]=w*this.focalRatioX,this.focal[1]=w}this.fovX=rs(this.focal[0],r),this.viewport[0]=r,this.viewport[1]=h,this.proj_matrix=as(.01,this.zfar,this.fovX,this.fovY),We.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],We.copy(this.rotation,this.view_matrix),We.translate(this.view_matrix,this._negPos,this.view_matrix),We.inverse(this.view_matrix,this.view_inv_matrix),qe.transformMat4Upper3x3(_t.Z_AXIS,this.view_inv_matrix,this.look),qe.normalize(this.look,this.look),qe.cross(this.up,this.look,this.right),qe.normalize(this.right,this.right);let r=0;Ve.set(this.view_matrix,r),r+=16,Ve.set(this.view_inv_matrix,r),r+=16,Ve.set(this.proj_matrix,r),r+=16,Ve.set(this.proj_inv_matrix,r),r+=16,Ve.set(this.viewport,r),r+=2,Ve.set(this.focal,r),r+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,Ve)}set_preset(r){qe.copy(r.position,this.position),We.copy(r.rotation,this.rotation),this.update_buffer()}setFov(r){this.fovY=r,this.on_update_canvas()}setFocalRatio(r){this.focalRatioX=r,this.on_update_canvas()}getFov(){return this.fovY}};B(_t,"Z_AXIS",qe.create(0,0,1));let jt=_t;export{ps as A,hs as B,jt as C,fs as D,Nn as E,qn as F,Yt as G,$n as H,Cn as I,xt as L,Ke as R,We as a,ut as b,ms as c,ys as d,As as e,ks as f,Hn as g,nn as h,bs as i,Bs as j,Ss as k,ws as l,Tn as m,Gs as n,Es as o,gs as p,us as q,xs as r,tn as s,Ts as t,Ps as u,qe as v,un as w,ye as x,vs as y,_s as z};
