var dn=Object.defineProperty;var fn=(r,s,d)=>s in r?dn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[s]=d;var P=(r,s,d)=>(fn(r,typeof s!="symbol"?s+"":s,d),d);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))b(y);new MutationObserver(y=>{for(const w of y)if(w.type==="childList")for(const B of w.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&b(B)}).observe(document,{childList:!0,subtree:!0});function d(y){const w={};return y.integrity&&(w.integrity=y.integrity),y.referrerPolicy&&(w.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?w.credentials="include":y.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function b(y){if(y.ep)return;y.ep=!0;const w=d(y);fetch(y.href,w)}})();function pn(r,s){return class extends r{constructor(...d){super(...d),s(this)}}}const hn=pn(Array,r=>r.fill(0));let he=1e-6;function _n(r){function s(g=0,m=0){const x=new r(2);return g!==void 0&&(x[0]=g,m!==void 0&&(x[1]=m)),x}const d=s;function b(g,m,x){const e=x??new r(2);return e[0]=g,e[1]=m,e}function y(g,m){const x=m??new r(2);return x[0]=Math.ceil(g[0]),x[1]=Math.ceil(g[1]),x}function w(g,m){const x=m??new r(2);return x[0]=Math.floor(g[0]),x[1]=Math.floor(g[1]),x}function B(g,m){const x=m??new r(2);return x[0]=Math.round(g[0]),x[1]=Math.round(g[1]),x}function G(g,m=0,x=1,e){const u=e??new r(2);return u[0]=Math.min(x,Math.max(m,g[0])),u[1]=Math.min(x,Math.max(m,g[1])),u}function M(g,m,x){const e=x??new r(2);return e[0]=g[0]+m[0],e[1]=g[1]+m[1],e}function U(g,m,x,e){const u=e??new r(2);return u[0]=g[0]+m[0]*x,u[1]=g[1]+m[1]*x,u}function O(g,m){const x=g[0],e=g[1],u=m[0],i=m[1],a=Math.sqrt(x*x+e*e),n=Math.sqrt(u*u+i*i),c=a*n,_=c&&oe(g,m)/c;return Math.acos(_)}function Z(g,m,x){const e=x??new r(2);return e[0]=g[0]-m[0],e[1]=g[1]-m[1],e}const E=Z;function H(g,m){return Math.abs(g[0]-m[0])<he&&Math.abs(g[1]-m[1])<he}function ne(g,m){return g[0]===m[0]&&g[1]===m[1]}function se(g,m,x,e){const u=e??new r(2);return u[0]=g[0]+x*(m[0]-g[0]),u[1]=g[1]+x*(m[1]-g[1]),u}function C(g,m,x,e){const u=e??new r(2);return u[0]=g[0]+x[0]*(m[0]-g[0]),u[1]=g[1]+x[1]*(m[1]-g[1]),u}function Y(g,m,x){const e=x??new r(2);return e[0]=Math.max(g[0],m[0]),e[1]=Math.max(g[1],m[1]),e}function ae(g,m,x){const e=x??new r(2);return e[0]=Math.min(g[0],m[0]),e[1]=Math.min(g[1],m[1]),e}function R(g,m,x){const e=x??new r(2);return e[0]=g[0]*m,e[1]=g[1]*m,e}const X=R;function F(g,m,x){const e=x??new r(2);return e[0]=g[0]/m,e[1]=g[1]/m,e}function q(g,m){const x=m??new r(2);return x[0]=1/g[0],x[1]=1/g[1],x}const ue=q;function te(g,m,x){const e=x??new r(3),u=g[0]*m[1]-g[1]*m[0];return e[0]=0,e[1]=0,e[2]=u,e}function oe(g,m){return g[0]*m[0]+g[1]*m[1]}function L(g){const m=g[0],x=g[1];return Math.sqrt(m*m+x*x)}const ie=L;function V(g){const m=g[0],x=g[1];return m*m+x*x}const $=V;function le(g,m){const x=g[0]-m[0],e=g[1]-m[1];return Math.sqrt(x*x+e*e)}const ce=le;function W(g,m){const x=g[0]-m[0],e=g[1]-m[1];return x*x+e*e}const N=W;function pe(g,m){const x=m??new r(2),e=g[0],u=g[1],i=Math.sqrt(e*e+u*u);return i>1e-5?(x[0]=e/i,x[1]=u/i):(x[0]=0,x[1]=0),x}function xe(g,m){const x=m??new r(2);return x[0]=-g[0],x[1]=-g[1],x}function fe(g,m){const x=m??new r(2);return x[0]=g[0],x[1]=g[1],x}const J=fe;function de(g,m,x){const e=x??new r(2);return e[0]=g[0]*m[0],e[1]=g[1]*m[1],e}const _e=de;function ye(g,m,x){const e=x??new r(2);return e[0]=g[0]/m[0],e[1]=g[1]/m[1],e}const be=ye;function we(g=1,m){const x=m??new r(2),e=Math.random()*2*Math.PI;return x[0]=Math.cos(e)*g,x[1]=Math.sin(e)*g,x}function v(g){const m=g??new r(2);return m[0]=0,m[1]=0,m}function z(g,m,x){const e=x??new r(2),u=g[0],i=g[1];return e[0]=u*m[0]+i*m[4]+m[12],e[1]=u*m[1]+i*m[5]+m[13],e}function h(g,m,x){const e=x??new r(2),u=g[0],i=g[1];return e[0]=m[0]*u+m[4]*i+m[8],e[1]=m[1]*u+m[5]*i+m[9],e}function t(g,m,x,e){const u=e??new r(2),i=g[0]-m[0],a=g[1]-m[1],n=Math.sin(x),c=Math.cos(x);return u[0]=i*c-a*n+m[0],u[1]=i*n+a*c+m[1],u}function l(g,m,x){const e=x??new r(2);return pe(g,e),R(e,m,e)}function o(g,m,x){const e=x??new r(2);return L(g)>m?l(g,m,e):fe(g,e)}function f(g,m,x){const e=x??new r(2);return se(g,m,.5,e)}return{create:s,fromValues:d,set:b,ceil:y,floor:w,round:B,clamp:G,add:M,addScaled:U,angle:O,subtract:Z,sub:E,equalsApproximately:H,equals:ne,lerp:se,lerpV:C,max:Y,min:ae,mulScalar:R,scale:X,divScalar:F,inverse:q,invert:ue,cross:te,dot:oe,length:L,len:ie,lengthSq:V,lenSq:$,distance:le,dist:ce,distanceSq:W,distSq:N,normalize:pe,negate:xe,copy:fe,clone:J,multiply:de,mul:_e,divide:ye,div:be,random:we,zero:v,transformMat4:z,transformMat3:h,rotate:t,setLength:l,truncate:o,midpoint:f}}const zt=new Map;function Qt(r){let s=zt.get(r);return s||(s=_n(r),zt.set(r,s)),s}function gn(r){function s(n,c,_){const p=new r(3);return n!==void 0&&(p[0]=n,c!==void 0&&(p[1]=c,_!==void 0&&(p[2]=_))),p}const d=s;function b(n,c,_,p){const S=p??new r(3);return S[0]=n,S[1]=c,S[2]=_,S}function y(n,c){const _=c??new r(3);return _[0]=Math.ceil(n[0]),_[1]=Math.ceil(n[1]),_[2]=Math.ceil(n[2]),_}function w(n,c){const _=c??new r(3);return _[0]=Math.floor(n[0]),_[1]=Math.floor(n[1]),_[2]=Math.floor(n[2]),_}function B(n,c){const _=c??new r(3);return _[0]=Math.round(n[0]),_[1]=Math.round(n[1]),_[2]=Math.round(n[2]),_}function G(n,c=0,_=1,p){const S=p??new r(3);return S[0]=Math.min(_,Math.max(c,n[0])),S[1]=Math.min(_,Math.max(c,n[1])),S[2]=Math.min(_,Math.max(c,n[2])),S}function M(n,c,_){const p=_??new r(3);return p[0]=n[0]+c[0],p[1]=n[1]+c[1],p[2]=n[2]+c[2],p}function U(n,c,_,p){const S=p??new r(3);return S[0]=n[0]+c[0]*_,S[1]=n[1]+c[1]*_,S[2]=n[2]+c[2]*_,S}function O(n,c){const _=n[0],p=n[1],S=n[2],T=c[0],k=c[1],D=c[2],A=Math.sqrt(_*_+p*p+S*S),I=Math.sqrt(T*T+k*k+D*D),K=A*I,ee=K&&oe(n,c)/K;return Math.acos(ee)}function Z(n,c,_){const p=_??new r(3);return p[0]=n[0]-c[0],p[1]=n[1]-c[1],p[2]=n[2]-c[2],p}const E=Z;function H(n,c){return Math.abs(n[0]-c[0])<he&&Math.abs(n[1]-c[1])<he&&Math.abs(n[2]-c[2])<he}function ne(n,c){return n[0]===c[0]&&n[1]===c[1]&&n[2]===c[2]}function se(n,c,_,p){const S=p??new r(3);return S[0]=n[0]+_*(c[0]-n[0]),S[1]=n[1]+_*(c[1]-n[1]),S[2]=n[2]+_*(c[2]-n[2]),S}function C(n,c,_,p){const S=p??new r(3);return S[0]=n[0]+_[0]*(c[0]-n[0]),S[1]=n[1]+_[1]*(c[1]-n[1]),S[2]=n[2]+_[2]*(c[2]-n[2]),S}function Y(n,c,_){const p=_??new r(3);return p[0]=Math.max(n[0],c[0]),p[1]=Math.max(n[1],c[1]),p[2]=Math.max(n[2],c[2]),p}function ae(n,c,_){const p=_??new r(3);return p[0]=Math.min(n[0],c[0]),p[1]=Math.min(n[1],c[1]),p[2]=Math.min(n[2],c[2]),p}function R(n,c,_){const p=_??new r(3);return p[0]=n[0]*c,p[1]=n[1]*c,p[2]=n[2]*c,p}const X=R;function F(n,c,_){const p=_??new r(3);return p[0]=n[0]/c,p[1]=n[1]/c,p[2]=n[2]/c,p}function q(n,c){const _=c??new r(3);return _[0]=1/n[0],_[1]=1/n[1],_[2]=1/n[2],_}const ue=q;function te(n,c,_){const p=_??new r(3),S=n[2]*c[0]-n[0]*c[2],T=n[0]*c[1]-n[1]*c[0];return p[0]=n[1]*c[2]-n[2]*c[1],p[1]=S,p[2]=T,p}function oe(n,c){return n[0]*c[0]+n[1]*c[1]+n[2]*c[2]}function L(n){const c=n[0],_=n[1],p=n[2];return Math.sqrt(c*c+_*_+p*p)}const ie=L;function V(n){const c=n[0],_=n[1],p=n[2];return c*c+_*_+p*p}const $=V;function le(n,c){const _=n[0]-c[0],p=n[1]-c[1],S=n[2]-c[2];return Math.sqrt(_*_+p*p+S*S)}const ce=le;function W(n,c){const _=n[0]-c[0],p=n[1]-c[1],S=n[2]-c[2];return _*_+p*p+S*S}const N=W;function pe(n,c){const _=c??new r(3),p=n[0],S=n[1],T=n[2],k=Math.sqrt(p*p+S*S+T*T);return k>1e-5?(_[0]=p/k,_[1]=S/k,_[2]=T/k):(_[0]=0,_[1]=0,_[2]=0),_}function xe(n,c){const _=c??new r(3);return _[0]=-n[0],_[1]=-n[1],_[2]=-n[2],_}function fe(n,c){const _=c??new r(3);return _[0]=n[0],_[1]=n[1],_[2]=n[2],_}const J=fe;function de(n,c,_){const p=_??new r(3);return p[0]=n[0]*c[0],p[1]=n[1]*c[1],p[2]=n[2]*c[2],p}const _e=de;function ye(n,c,_){const p=_??new r(3);return p[0]=n[0]/c[0],p[1]=n[1]/c[1],p[2]=n[2]/c[2],p}const be=ye;function we(n=1,c){const _=c??new r(3),p=Math.random()*2*Math.PI,S=Math.random()*2-1,T=Math.sqrt(1-S*S)*n;return _[0]=Math.cos(p)*T,_[1]=Math.sin(p)*T,_[2]=S*n,_}function v(n){const c=n??new r(3);return c[0]=0,c[1]=0,c[2]=0,c}function z(n,c,_){const p=_??new r(3),S=n[0],T=n[1],k=n[2],D=c[3]*S+c[7]*T+c[11]*k+c[15]||1;return p[0]=(c[0]*S+c[4]*T+c[8]*k+c[12])/D,p[1]=(c[1]*S+c[5]*T+c[9]*k+c[13])/D,p[2]=(c[2]*S+c[6]*T+c[10]*k+c[14])/D,p}function h(n,c,_){const p=_??new r(3),S=n[0],T=n[1],k=n[2];return p[0]=S*c[0*4+0]+T*c[1*4+0]+k*c[2*4+0],p[1]=S*c[0*4+1]+T*c[1*4+1]+k*c[2*4+1],p[2]=S*c[0*4+2]+T*c[1*4+2]+k*c[2*4+2],p}function t(n,c,_){const p=_??new r(3),S=n[0],T=n[1],k=n[2];return p[0]=S*c[0]+T*c[4]+k*c[8],p[1]=S*c[1]+T*c[5]+k*c[9],p[2]=S*c[2]+T*c[6]+k*c[10],p}function l(n,c,_){const p=_??new r(3),S=c[0],T=c[1],k=c[2],D=c[3]*2,A=n[0],I=n[1],K=n[2],ee=T*K-k*I,Q=k*A-S*K,re=S*I-T*A;return p[0]=A+ee*D+(T*re-k*Q)*2,p[1]=I+Q*D+(k*ee-S*re)*2,p[2]=K+re*D+(S*Q-T*ee)*2,p}function o(n,c){const _=c??new r(3);return _[0]=n[12],_[1]=n[13],_[2]=n[14],_}function f(n,c,_){const p=_??new r(3),S=c*4;return p[0]=n[S+0],p[1]=n[S+1],p[2]=n[S+2],p}function g(n,c){const _=c??new r(3),p=n[0],S=n[1],T=n[2],k=n[4],D=n[5],A=n[6],I=n[8],K=n[9],ee=n[10];return _[0]=Math.sqrt(p*p+S*S+T*T),_[1]=Math.sqrt(k*k+D*D+A*A),_[2]=Math.sqrt(I*I+K*K+ee*ee),_}function m(n,c,_,p){const S=p??new r(3),T=[],k=[];return T[0]=n[0]-c[0],T[1]=n[1]-c[1],T[2]=n[2]-c[2],k[0]=T[0],k[1]=T[1]*Math.cos(_)-T[2]*Math.sin(_),k[2]=T[1]*Math.sin(_)+T[2]*Math.cos(_),S[0]=k[0]+c[0],S[1]=k[1]+c[1],S[2]=k[2]+c[2],S}function x(n,c,_,p){const S=p??new r(3),T=[],k=[];return T[0]=n[0]-c[0],T[1]=n[1]-c[1],T[2]=n[2]-c[2],k[0]=T[2]*Math.sin(_)+T[0]*Math.cos(_),k[1]=T[1],k[2]=T[2]*Math.cos(_)-T[0]*Math.sin(_),S[0]=k[0]+c[0],S[1]=k[1]+c[1],S[2]=k[2]+c[2],S}function e(n,c,_,p){const S=p??new r(3),T=[],k=[];return T[0]=n[0]-c[0],T[1]=n[1]-c[1],T[2]=n[2]-c[2],k[0]=T[0]*Math.cos(_)-T[1]*Math.sin(_),k[1]=T[0]*Math.sin(_)+T[1]*Math.cos(_),k[2]=T[2],S[0]=k[0]+c[0],S[1]=k[1]+c[1],S[2]=k[2]+c[2],S}function u(n,c,_){const p=_??new r(3);return pe(n,p),R(p,c,p)}function i(n,c,_){const p=_??new r(3);return L(n)>c?u(n,c,p):fe(n,p)}function a(n,c,_){const p=_??new r(3);return se(n,c,.5,p)}return{create:s,fromValues:d,set:b,ceil:y,floor:w,round:B,clamp:G,add:M,addScaled:U,angle:O,subtract:Z,sub:E,equalsApproximately:H,equals:ne,lerp:se,lerpV:C,max:Y,min:ae,mulScalar:R,scale:X,divScalar:F,inverse:q,invert:ue,cross:te,dot:oe,length:L,len:ie,lengthSq:V,lenSq:$,distance:le,dist:ce,distanceSq:W,distSq:N,normalize:pe,negate:xe,copy:fe,clone:J,multiply:de,mul:_e,divide:ye,div:be,random:we,zero:v,transformMat4:z,transformMat4Upper3x3:h,transformMat3:t,transformQuat:l,getTranslation:o,getAxis:f,getScaling:g,rotateX:m,rotateY:x,rotateZ:e,setLength:u,truncate:i,midpoint:a}}const At=new Map;function _t(r){let s=At.get(r);return s||(s=gn(r),At.set(r,s)),s}function mn(r){const s=Qt(r),d=_t(r);function b(t,l,o,f,g,m,x,e,u){const i=new r(12);return i[3]=0,i[7]=0,i[11]=0,t!==void 0&&(i[0]=t,l!==void 0&&(i[1]=l,o!==void 0&&(i[2]=o,f!==void 0&&(i[4]=f,g!==void 0&&(i[5]=g,m!==void 0&&(i[6]=m,x!==void 0&&(i[8]=x,e!==void 0&&(i[9]=e,u!==void 0&&(i[10]=u))))))))),i}function y(t,l,o,f,g,m,x,e,u,i){const a=i??new r(12);return a[0]=t,a[1]=l,a[2]=o,a[3]=0,a[4]=f,a[5]=g,a[6]=m,a[7]=0,a[8]=x,a[9]=e,a[10]=u,a[11]=0,a}function w(t,l){const o=l??new r(12);return o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=0,o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=0,o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=0,o}function B(t,l){const o=l??new r(12),f=t[0],g=t[1],m=t[2],x=t[3],e=f+f,u=g+g,i=m+m,a=f*e,n=g*e,c=g*u,_=m*e,p=m*u,S=m*i,T=x*e,k=x*u,D=x*i;return o[0]=1-c-S,o[1]=n+D,o[2]=_-k,o[3]=0,o[4]=n-D,o[5]=1-a-S,o[6]=p+T,o[7]=0,o[8]=_+k,o[9]=p-T,o[10]=1-a-c,o[11]=0,o}function G(t,l){const o=l??new r(12);return o[0]=-t[0],o[1]=-t[1],o[2]=-t[2],o[4]=-t[4],o[5]=-t[5],o[6]=-t[6],o[8]=-t[8],o[9]=-t[9],o[10]=-t[10],o}function M(t,l,o){const f=o??new r(12);return f[0]=t[0]*l,f[1]=t[1]*l,f[2]=t[2]*l,f[4]=t[4]*l,f[5]=t[5]*l,f[6]=t[6]*l,f[8]=t[8]*l,f[9]=t[9]*l,f[10]=t[10]*l,f}const U=M;function O(t,l,o){const f=o??new r(12);return f[0]=t[0]+l[0],f[1]=t[1]+l[1],f[2]=t[2]+l[2],f[4]=t[4]+l[4],f[5]=t[5]+l[5],f[6]=t[6]+l[6],f[8]=t[8]+l[8],f[9]=t[9]+l[9],f[10]=t[10]+l[10],f}function Z(t,l){const o=l??new r(12);return o[0]=t[0],o[1]=t[1],o[2]=t[2],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[8]=t[8],o[9]=t[9],o[10]=t[10],o}const E=Z;function H(t,l){return Math.abs(t[0]-l[0])<he&&Math.abs(t[1]-l[1])<he&&Math.abs(t[2]-l[2])<he&&Math.abs(t[4]-l[4])<he&&Math.abs(t[5]-l[5])<he&&Math.abs(t[6]-l[6])<he&&Math.abs(t[8]-l[8])<he&&Math.abs(t[9]-l[9])<he&&Math.abs(t[10]-l[10])<he}function ne(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]}function se(t){const l=t??new r(12);return l[0]=1,l[1]=0,l[2]=0,l[4]=0,l[5]=1,l[6]=0,l[8]=0,l[9]=0,l[10]=1,l}function C(t,l){const o=l??new r(12);if(o===t){let c;return c=t[1],t[1]=t[4],t[4]=c,c=t[2],t[2]=t[8],t[8]=c,c=t[6],t[6]=t[9],t[9]=c,o}const f=t[0*4+0],g=t[0*4+1],m=t[0*4+2],x=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],a=t[2*4+1],n=t[2*4+2];return o[0]=f,o[1]=x,o[2]=i,o[4]=g,o[5]=e,o[6]=a,o[8]=m,o[9]=u,o[10]=n,o}function Y(t,l){const o=l??new r(12),f=t[0*4+0],g=t[0*4+1],m=t[0*4+2],x=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],a=t[2*4+1],n=t[2*4+2],c=n*e-u*a,_=-n*x+u*i,p=a*x-e*i,S=1/(f*c+g*_+m*p);return o[0]=c*S,o[1]=(-n*g+m*a)*S,o[2]=(u*g-m*e)*S,o[4]=_*S,o[5]=(n*f-m*i)*S,o[6]=(-u*f+m*x)*S,o[8]=p*S,o[9]=(-a*f+g*i)*S,o[10]=(e*f-g*x)*S,o}function ae(t){const l=t[0],o=t[0*4+1],f=t[0*4+2],g=t[1*4+0],m=t[1*4+1],x=t[1*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2];return l*(m*i-u*x)-g*(o*i-u*f)+e*(o*x-m*f)}const R=Y;function X(t,l,o){const f=o??new r(12),g=t[0],m=t[1],x=t[2],e=t[4+0],u=t[4+1],i=t[4+2],a=t[8+0],n=t[8+1],c=t[8+2],_=l[0],p=l[1],S=l[2],T=l[4+0],k=l[4+1],D=l[4+2],A=l[8+0],I=l[8+1],K=l[8+2];return f[0]=g*_+e*p+a*S,f[1]=m*_+u*p+n*S,f[2]=x*_+i*p+c*S,f[4]=g*T+e*k+a*D,f[5]=m*T+u*k+n*D,f[6]=x*T+i*k+c*D,f[8]=g*A+e*I+a*K,f[9]=m*A+u*I+n*K,f[10]=x*A+i*I+c*K,f}const F=X;function q(t,l,o){const f=o??se();return t!==f&&(f[0]=t[0],f[1]=t[1],f[2]=t[2],f[4]=t[4],f[5]=t[5],f[6]=t[6]),f[8]=l[0],f[9]=l[1],f[10]=1,f}function ue(t,l){const o=l??s.create();return o[0]=t[8],o[1]=t[9],o}function te(t,l,o){const f=o??s.create(),g=l*4;return f[0]=t[g+0],f[1]=t[g+1],f}function oe(t,l,o,f){const g=f===t?t:Z(t,f),m=o*4;return g[m+0]=l[0],g[m+1]=l[1],g}function L(t,l){const o=l??s.create(),f=t[0],g=t[1],m=t[4],x=t[5];return o[0]=Math.sqrt(f*f+g*g),o[1]=Math.sqrt(m*m+x*x),o}function ie(t,l){const o=l??d.create(),f=t[0],g=t[1],m=t[2],x=t[4],e=t[5],u=t[6],i=t[8],a=t[9],n=t[10];return o[0]=Math.sqrt(f*f+g*g+m*m),o[1]=Math.sqrt(x*x+e*e+u*u),o[2]=Math.sqrt(i*i+a*a+n*n),o}function V(t,l){const o=l??new r(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=t[0],o[9]=t[1],o[10]=1,o}function $(t,l,o){const f=o??new r(12),g=l[0],m=l[1],x=t[0],e=t[1],u=t[2],i=t[1*4+0],a=t[1*4+1],n=t[1*4+2],c=t[2*4+0],_=t[2*4+1],p=t[2*4+2];return t!==f&&(f[0]=x,f[1]=e,f[2]=u,f[4]=i,f[5]=a,f[6]=n),f[8]=x*g+i*m+c,f[9]=e*g+a*m+_,f[10]=u*g+n*m+p,f}function le(t,l){const o=l??new r(12),f=Math.cos(t),g=Math.sin(t);return o[0]=f,o[1]=g,o[2]=0,o[4]=-g,o[5]=f,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function ce(t,l,o){const f=o??new r(12),g=t[0*4+0],m=t[0*4+1],x=t[0*4+2],e=t[1*4+0],u=t[1*4+1],i=t[1*4+2],a=Math.cos(l),n=Math.sin(l);return f[0]=a*g+n*e,f[1]=a*m+n*u,f[2]=a*x+n*i,f[4]=a*e-n*g,f[5]=a*u-n*m,f[6]=a*i-n*x,t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function W(t,l){const o=l??new r(12),f=Math.cos(t),g=Math.sin(t);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=f,o[6]=g,o[8]=0,o[9]=-g,o[10]=f,o}function N(t,l,o){const f=o??new r(12),g=t[4],m=t[5],x=t[6],e=t[8],u=t[9],i=t[10],a=Math.cos(l),n=Math.sin(l);return f[4]=a*g+n*e,f[5]=a*m+n*u,f[6]=a*x+n*i,f[8]=a*e-n*g,f[9]=a*u-n*m,f[10]=a*i-n*x,t!==f&&(f[0]=t[0],f[1]=t[1],f[2]=t[2]),f}function pe(t,l){const o=l??new r(12),f=Math.cos(t),g=Math.sin(t);return o[0]=f,o[1]=0,o[2]=-g,o[4]=0,o[5]=1,o[6]=0,o[8]=g,o[9]=0,o[10]=f,o}function xe(t,l,o){const f=o??new r(12),g=t[0*4+0],m=t[0*4+1],x=t[0*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2],a=Math.cos(l),n=Math.sin(l);return f[0]=a*g-n*e,f[1]=a*m-n*u,f[2]=a*x-n*i,f[8]=a*e+n*g,f[9]=a*u+n*m,f[10]=a*i+n*x,t!==f&&(f[4]=t[4],f[5]=t[5],f[6]=t[6]),f}const fe=le,J=ce;function de(t,l){const o=l??new r(12);return o[0]=t[0],o[1]=0,o[2]=0,o[4]=0,o[5]=t[1],o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function _e(t,l,o){const f=o??new r(12),g=l[0],m=l[1];return f[0]=g*t[0*4+0],f[1]=g*t[0*4+1],f[2]=g*t[0*4+2],f[4]=m*t[1*4+0],f[5]=m*t[1*4+1],f[6]=m*t[1*4+2],t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function ye(t,l){const o=l??new r(12);return o[0]=t[0],o[1]=0,o[2]=0,o[4]=0,o[5]=t[1],o[6]=0,o[8]=0,o[9]=0,o[10]=t[2],o}function be(t,l,o){const f=o??new r(12),g=l[0],m=l[1],x=l[2];return f[0]=g*t[0*4+0],f[1]=g*t[0*4+1],f[2]=g*t[0*4+2],f[4]=m*t[1*4+0],f[5]=m*t[1*4+1],f[6]=m*t[1*4+2],f[8]=x*t[2*4+0],f[9]=x*t[2*4+1],f[10]=x*t[2*4+2],f}function we(t,l){const o=l??new r(12);return o[0]=t,o[1]=0,o[2]=0,o[4]=0,o[5]=t,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function v(t,l,o){const f=o??new r(12);return f[0]=l*t[0*4+0],f[1]=l*t[0*4+1],f[2]=l*t[0*4+2],f[4]=l*t[1*4+0],f[5]=l*t[1*4+1],f[6]=l*t[1*4+2],t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function z(t,l){const o=l??new r(12);return o[0]=t,o[1]=0,o[2]=0,o[4]=0,o[5]=t,o[6]=0,o[8]=0,o[9]=0,o[10]=t,o}function h(t,l,o){const f=o??new r(12);return f[0]=l*t[0*4+0],f[1]=l*t[0*4+1],f[2]=l*t[0*4+2],f[4]=l*t[1*4+0],f[5]=l*t[1*4+1],f[6]=l*t[1*4+2],f[8]=l*t[2*4+0],f[9]=l*t[2*4+1],f[10]=l*t[2*4+2],f}return{add:O,clone:E,copy:Z,create:b,determinant:ae,equals:ne,equalsApproximately:H,fromMat4:w,fromQuat:B,get3DScaling:ie,getAxis:te,getScaling:L,getTranslation:ue,identity:se,inverse:Y,invert:R,mul:F,mulScalar:U,multiply:X,multiplyScalar:M,negate:G,rotate:ce,rotateX:N,rotateY:xe,rotateZ:J,rotation:le,rotationX:W,rotationY:pe,rotationZ:fe,scale:_e,scale3D:be,scaling:de,scaling3D:ye,set:y,setAxis:oe,setTranslation:q,translate:$,translation:V,transpose:C,uniformScale:v,uniformScale3D:h,uniformScaling:we,uniformScaling3D:z}}const Et=new Map;function xn(r){let s=Et.get(r);return s||(s=mn(r),Et.set(r,s)),s}function yn(r){const s=_t(r);function d(e,u,i,a,n,c,_,p,S,T,k,D,A,I,K,ee){const Q=new r(16);return e!==void 0&&(Q[0]=e,u!==void 0&&(Q[1]=u,i!==void 0&&(Q[2]=i,a!==void 0&&(Q[3]=a,n!==void 0&&(Q[4]=n,c!==void 0&&(Q[5]=c,_!==void 0&&(Q[6]=_,p!==void 0&&(Q[7]=p,S!==void 0&&(Q[8]=S,T!==void 0&&(Q[9]=T,k!==void 0&&(Q[10]=k,D!==void 0&&(Q[11]=D,A!==void 0&&(Q[12]=A,I!==void 0&&(Q[13]=I,K!==void 0&&(Q[14]=K,ee!==void 0&&(Q[15]=ee)))))))))))))))),Q}function b(e,u,i,a,n,c,_,p,S,T,k,D,A,I,K,ee,Q){const re=Q??new r(16);return re[0]=e,re[1]=u,re[2]=i,re[3]=a,re[4]=n,re[5]=c,re[6]=_,re[7]=p,re[8]=S,re[9]=T,re[10]=k,re[11]=D,re[12]=A,re[13]=I,re[14]=K,re[15]=ee,re}function y(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function w(e,u){const i=u??new r(16),a=e[0],n=e[1],c=e[2],_=e[3],p=a+a,S=n+n,T=c+c,k=a*p,D=n*p,A=n*S,I=c*p,K=c*S,ee=c*T,Q=_*p,re=_*S,me=_*T;return i[0]=1-A-ee,i[1]=D+me,i[2]=I-re,i[3]=0,i[4]=D-me,i[5]=1-k-ee,i[6]=K+Q,i[7]=0,i[8]=I+re,i[9]=K-Q,i[10]=1-k-A,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function B(e,u){const i=u??new r(16);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=-e[3],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[7]=-e[7],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i[11]=-e[11],i[12]=-e[12],i[13]=-e[13],i[14]=-e[14],i[15]=-e[15],i}function G(e,u,i){const a=i??new r(16);return a[0]=e[0]+u[0],a[1]=e[1]+u[1],a[2]=e[2]+u[2],a[3]=e[3]+u[3],a[4]=e[4]+u[4],a[5]=e[5]+u[5],a[6]=e[6]+u[6],a[7]=e[7]+u[7],a[8]=e[8]+u[8],a[9]=e[9]+u[9],a[10]=e[10]+u[10],a[11]=e[11]+u[11],a[12]=e[12]+u[12],a[13]=e[13]+u[13],a[14]=e[14]+u[14],a[15]=e[15]+u[15],a}function M(e,u,i){const a=i??new r(16);return a[0]=e[0]*u,a[1]=e[1]*u,a[2]=e[2]*u,a[3]=e[3]*u,a[4]=e[4]*u,a[5]=e[5]*u,a[6]=e[6]*u,a[7]=e[7]*u,a[8]=e[8]*u,a[9]=e[9]*u,a[10]=e[10]*u,a[11]=e[11]*u,a[12]=e[12]*u,a[13]=e[13]*u,a[14]=e[14]*u,a[15]=e[15]*u,a}const U=M;function O(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}const Z=O;function E(e,u){return Math.abs(e[0]-u[0])<he&&Math.abs(e[1]-u[1])<he&&Math.abs(e[2]-u[2])<he&&Math.abs(e[3]-u[3])<he&&Math.abs(e[4]-u[4])<he&&Math.abs(e[5]-u[5])<he&&Math.abs(e[6]-u[6])<he&&Math.abs(e[7]-u[7])<he&&Math.abs(e[8]-u[8])<he&&Math.abs(e[9]-u[9])<he&&Math.abs(e[10]-u[10])<he&&Math.abs(e[11]-u[11])<he&&Math.abs(e[12]-u[12])<he&&Math.abs(e[13]-u[13])<he&&Math.abs(e[14]-u[14])<he&&Math.abs(e[15]-u[15])<he}function H(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function ne(e){const u=e??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function se(e,u){const i=u??new r(16);if(i===e){let ge;return ge=e[1],e[1]=e[4],e[4]=ge,ge=e[2],e[2]=e[8],e[8]=ge,ge=e[3],e[3]=e[12],e[12]=ge,ge=e[6],e[6]=e[9],e[9]=ge,ge=e[7],e[7]=e[13],e[13]=ge,ge=e[11],e[11]=e[14],e[14]=ge,i}const a=e[0*4+0],n=e[0*4+1],c=e[0*4+2],_=e[0*4+3],p=e[1*4+0],S=e[1*4+1],T=e[1*4+2],k=e[1*4+3],D=e[2*4+0],A=e[2*4+1],I=e[2*4+2],K=e[2*4+3],ee=e[3*4+0],Q=e[3*4+1],re=e[3*4+2],me=e[3*4+3];return i[0]=a,i[1]=p,i[2]=D,i[3]=ee,i[4]=n,i[5]=S,i[6]=A,i[7]=Q,i[8]=c,i[9]=T,i[10]=I,i[11]=re,i[12]=_,i[13]=k,i[14]=K,i[15]=me,i}function C(e,u){const i=u??new r(16),a=e[0*4+0],n=e[0*4+1],c=e[0*4+2],_=e[0*4+3],p=e[1*4+0],S=e[1*4+1],T=e[1*4+2],k=e[1*4+3],D=e[2*4+0],A=e[2*4+1],I=e[2*4+2],K=e[2*4+3],ee=e[3*4+0],Q=e[3*4+1],re=e[3*4+2],me=e[3*4+3],ge=I*me,ve=re*K,Se=T*me,Be=re*k,Pe=T*K,ke=I*k,Te=c*me,Ge=re*_,Me=c*K,ze=I*_,Ee=c*k,De=T*_,Ie=D*Q,Ue=ee*A,Fe=p*Q,We=ee*S,qe=p*A,tt=D*S,nt=a*Q,st=ee*n,rt=a*A,it=D*n,at=a*S,ot=p*n,kt=ge*S+Be*A+Pe*Q-(ve*S+Se*A+ke*Q),Tt=ve*n+Te*A+ze*Q-(ge*n+Ge*A+Me*Q),Gt=Se*n+Ge*S+Ee*Q-(Be*n+Te*S+De*Q),Mt=ke*n+Me*S+De*A-(Pe*n+ze*S+Ee*A),Ae=1/(a*kt+p*Tt+D*Gt+ee*Mt);return i[0]=Ae*kt,i[1]=Ae*Tt,i[2]=Ae*Gt,i[3]=Ae*Mt,i[4]=Ae*(ve*p+Se*D+ke*ee-(ge*p+Be*D+Pe*ee)),i[5]=Ae*(ge*a+Ge*D+Me*ee-(ve*a+Te*D+ze*ee)),i[6]=Ae*(Be*a+Te*p+De*ee-(Se*a+Ge*p+Ee*ee)),i[7]=Ae*(Pe*a+ze*p+Ee*D-(ke*a+Me*p+De*D)),i[8]=Ae*(Ie*k+We*K+qe*me-(Ue*k+Fe*K+tt*me)),i[9]=Ae*(Ue*_+nt*K+it*me-(Ie*_+st*K+rt*me)),i[10]=Ae*(Fe*_+st*k+at*me-(We*_+nt*k+ot*me)),i[11]=Ae*(tt*_+rt*k+ot*K-(qe*_+it*k+at*K)),i[12]=Ae*(Fe*I+tt*re+Ue*T-(qe*re+Ie*T+We*I)),i[13]=Ae*(rt*re+Ie*c+st*I-(nt*I+it*re+Ue*c)),i[14]=Ae*(nt*T+ot*re+We*c-(at*re+Fe*c+st*T)),i[15]=Ae*(at*I+qe*c+it*T-(rt*T+ot*I+tt*c)),i}function Y(e){const u=e[0],i=e[0*4+1],a=e[0*4+2],n=e[0*4+3],c=e[1*4+0],_=e[1*4+1],p=e[1*4+2],S=e[1*4+3],T=e[2*4+0],k=e[2*4+1],D=e[2*4+2],A=e[2*4+3],I=e[3*4+0],K=e[3*4+1],ee=e[3*4+2],Q=e[3*4+3],re=D*Q,me=ee*A,ge=p*Q,ve=ee*S,Se=p*A,Be=D*S,Pe=a*Q,ke=ee*n,Te=a*A,Ge=D*n,Me=a*S,ze=p*n,Ee=re*_+ve*k+Se*K-(me*_+ge*k+Be*K),De=me*i+Pe*k+Ge*K-(re*i+ke*k+Te*K),Ie=ge*i+ke*_+Me*K-(ve*i+Pe*_+ze*K),Ue=Be*i+Te*_+ze*k-(Se*i+Ge*_+Me*k);return u*Ee+c*De+T*Ie+I*Ue}const ae=C;function R(e,u,i){const a=i??new r(16),n=e[0],c=e[1],_=e[2],p=e[3],S=e[4+0],T=e[4+1],k=e[4+2],D=e[4+3],A=e[8+0],I=e[8+1],K=e[8+2],ee=e[8+3],Q=e[12+0],re=e[12+1],me=e[12+2],ge=e[12+3],ve=u[0],Se=u[1],Be=u[2],Pe=u[3],ke=u[4+0],Te=u[4+1],Ge=u[4+2],Me=u[4+3],ze=u[8+0],Ee=u[8+1],De=u[8+2],Ie=u[8+3],Ue=u[12+0],Fe=u[12+1],We=u[12+2],qe=u[12+3];return a[0]=n*ve+S*Se+A*Be+Q*Pe,a[1]=c*ve+T*Se+I*Be+re*Pe,a[2]=_*ve+k*Se+K*Be+me*Pe,a[3]=p*ve+D*Se+ee*Be+ge*Pe,a[4]=n*ke+S*Te+A*Ge+Q*Me,a[5]=c*ke+T*Te+I*Ge+re*Me,a[6]=_*ke+k*Te+K*Ge+me*Me,a[7]=p*ke+D*Te+ee*Ge+ge*Me,a[8]=n*ze+S*Ee+A*De+Q*Ie,a[9]=c*ze+T*Ee+I*De+re*Ie,a[10]=_*ze+k*Ee+K*De+me*Ie,a[11]=p*ze+D*Ee+ee*De+ge*Ie,a[12]=n*Ue+S*Fe+A*We+Q*qe,a[13]=c*Ue+T*Fe+I*We+re*qe,a[14]=_*Ue+k*Fe+K*We+me*qe,a[15]=p*Ue+D*Fe+ee*We+ge*qe,a}const X=R;function F(e,u,i){const a=i??ne();return e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11]),a[12]=u[0],a[13]=u[1],a[14]=u[2],a[15]=1,a}function q(e,u){const i=u??s.create();return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function ue(e,u,i){const a=i??s.create(),n=u*4;return a[0]=e[n+0],a[1]=e[n+1],a[2]=e[n+2],a}function te(e,u,i,a){const n=a===e?a:O(e,a),c=i*4;return n[c+0]=u[0],n[c+1]=u[1],n[c+2]=u[2],n}function oe(e,u){const i=u??s.create(),a=e[0],n=e[1],c=e[2],_=e[4],p=e[5],S=e[6],T=e[8],k=e[9],D=e[10];return i[0]=Math.sqrt(a*a+n*n+c*c),i[1]=Math.sqrt(_*_+p*p+S*S),i[2]=Math.sqrt(T*T+k*k+D*D),i}function L(e,u,i,a,n){const c=n??new r(16),_=Math.tan(Math.PI*.5-.5*e);if(c[0]=_/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,Number.isFinite(a)){const p=1/(i-a);c[10]=a*p,c[14]=a*i*p}else c[10]=-1,c[14]=-i;return c}function ie(e,u,i,a=1/0,n){const c=n??new r(16),_=1/Math.tan(e*.5);if(c[0]=_/u,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=_,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,a===1/0)c[10]=0,c[14]=i;else{const p=1/(a-i);c[10]=i*p,c[14]=a*i*p}return c}function V(e,u,i,a,n,c,_){const p=_??new r(16);return p[0]=2/(u-e),p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2/(a-i),p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1/(n-c),p[11]=0,p[12]=(u+e)/(e-u),p[13]=(a+i)/(i-a),p[14]=n/(n-c),p[15]=1,p}function $(e,u,i,a,n,c,_){const p=_??new r(16),S=u-e,T=a-i,k=n-c;return p[0]=2*n/S,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*n/T,p[6]=0,p[7]=0,p[8]=(e+u)/S,p[9]=(a+i)/T,p[10]=c/k,p[11]=-1,p[12]=0,p[13]=0,p[14]=n*c/k,p[15]=0,p}function le(e,u,i,a,n,c=1/0,_){const p=_??new r(16),S=u-e,T=a-i;if(p[0]=2*n/S,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=2*n/T,p[6]=0,p[7]=0,p[8]=(e+u)/S,p[9]=(a+i)/T,p[11]=-1,p[12]=0,p[13]=0,p[15]=0,c===1/0)p[10]=0,p[14]=n;else{const k=1/(c-n);p[10]=n*k,p[14]=c*n*k}return p}const ce=s.create(),W=s.create(),N=s.create();function pe(e,u,i,a){const n=a??new r(16);return s.normalize(s.subtract(u,e,N),N),s.normalize(s.cross(i,N,ce),ce),s.normalize(s.cross(N,ce,W),W),n[0]=ce[0],n[1]=ce[1],n[2]=ce[2],n[3]=0,n[4]=W[0],n[5]=W[1],n[6]=W[2],n[7]=0,n[8]=N[0],n[9]=N[1],n[10]=N[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function xe(e,u,i,a){const n=a??new r(16);return s.normalize(s.subtract(e,u,N),N),s.normalize(s.cross(i,N,ce),ce),s.normalize(s.cross(N,ce,W),W),n[0]=ce[0],n[1]=ce[1],n[2]=ce[2],n[3]=0,n[4]=W[0],n[5]=W[1],n[6]=W[2],n[7]=0,n[8]=N[0],n[9]=N[1],n[10]=N[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function fe(e,u,i,a){const n=a??new r(16);return s.normalize(s.subtract(e,u,N),N),s.normalize(s.cross(i,N,ce),ce),s.normalize(s.cross(N,ce,W),W),n[0]=ce[0],n[1]=W[0],n[2]=N[0],n[3]=0,n[4]=ce[1],n[5]=W[1],n[6]=N[1],n[7]=0,n[8]=ce[2],n[9]=W[2],n[10]=N[2],n[11]=0,n[12]=-(ce[0]*e[0]+ce[1]*e[1]+ce[2]*e[2]),n[13]=-(W[0]*e[0]+W[1]*e[1]+W[2]*e[2]),n[14]=-(N[0]*e[0]+N[1]*e[1]+N[2]*e[2]),n[15]=1,n}function J(e,u){const i=u??new r(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function de(e,u,i){const a=i??new r(16),n=u[0],c=u[1],_=u[2],p=e[0],S=e[1],T=e[2],k=e[3],D=e[1*4+0],A=e[1*4+1],I=e[1*4+2],K=e[1*4+3],ee=e[2*4+0],Q=e[2*4+1],re=e[2*4+2],me=e[2*4+3],ge=e[3*4+0],ve=e[3*4+1],Se=e[3*4+2],Be=e[3*4+3];return e!==a&&(a[0]=p,a[1]=S,a[2]=T,a[3]=k,a[4]=D,a[5]=A,a[6]=I,a[7]=K,a[8]=ee,a[9]=Q,a[10]=re,a[11]=me),a[12]=p*n+D*c+ee*_+ge,a[13]=S*n+A*c+Q*_+ve,a[14]=T*n+I*c+re*_+Se,a[15]=k*n+K*c+me*_+Be,a}function _e(e,u){const i=u??new r(16),a=Math.cos(e),n=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=a,i[6]=n,i[7]=0,i[8]=0,i[9]=-n,i[10]=a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function ye(e,u,i){const a=i??new r(16),n=e[4],c=e[5],_=e[6],p=e[7],S=e[8],T=e[9],k=e[10],D=e[11],A=Math.cos(u),I=Math.sin(u);return a[4]=A*n+I*S,a[5]=A*c+I*T,a[6]=A*_+I*k,a[7]=A*p+I*D,a[8]=A*S-I*n,a[9]=A*T-I*c,a[10]=A*k-I*_,a[11]=A*D-I*p,e!==a&&(a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function be(e,u){const i=u??new r(16),a=Math.cos(e),n=Math.sin(e);return i[0]=a,i[1]=0,i[2]=-n,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=n,i[9]=0,i[10]=a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function we(e,u,i){const a=i??new r(16),n=e[0*4+0],c=e[0*4+1],_=e[0*4+2],p=e[0*4+3],S=e[2*4+0],T=e[2*4+1],k=e[2*4+2],D=e[2*4+3],A=Math.cos(u),I=Math.sin(u);return a[0]=A*n-I*S,a[1]=A*c-I*T,a[2]=A*_-I*k,a[3]=A*p-I*D,a[8]=A*S+I*n,a[9]=A*T+I*c,a[10]=A*k+I*_,a[11]=A*D+I*p,e!==a&&(a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function v(e,u){const i=u??new r(16),a=Math.cos(e),n=Math.sin(e);return i[0]=a,i[1]=n,i[2]=0,i[3]=0,i[4]=-n,i[5]=a,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function z(e,u,i){const a=i??new r(16),n=e[0*4+0],c=e[0*4+1],_=e[0*4+2],p=e[0*4+3],S=e[1*4+0],T=e[1*4+1],k=e[1*4+2],D=e[1*4+3],A=Math.cos(u),I=Math.sin(u);return a[0]=A*n+I*S,a[1]=A*c+I*T,a[2]=A*_+I*k,a[3]=A*p+I*D,a[4]=A*S-I*n,a[5]=A*T-I*c,a[6]=A*k-I*_,a[7]=A*D-I*p,e!==a&&(a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function h(e,u,i){const a=i??new r(16);let n=e[0],c=e[1],_=e[2];const p=Math.sqrt(n*n+c*c+_*_);n/=p,c/=p,_/=p;const S=n*n,T=c*c,k=_*_,D=Math.cos(u),A=Math.sin(u),I=1-D;return a[0]=S+(1-S)*D,a[1]=n*c*I+_*A,a[2]=n*_*I-c*A,a[3]=0,a[4]=n*c*I-_*A,a[5]=T+(1-T)*D,a[6]=c*_*I+n*A,a[7]=0,a[8]=n*_*I+c*A,a[9]=c*_*I-n*A,a[10]=k+(1-k)*D,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}const t=h;function l(e,u,i,a){const n=a??new r(16);let c=u[0],_=u[1],p=u[2];const S=Math.sqrt(c*c+_*_+p*p);c/=S,_/=S,p/=S;const T=c*c,k=_*_,D=p*p,A=Math.cos(i),I=Math.sin(i),K=1-A,ee=T+(1-T)*A,Q=c*_*K+p*I,re=c*p*K-_*I,me=c*_*K-p*I,ge=k+(1-k)*A,ve=_*p*K+c*I,Se=c*p*K+_*I,Be=_*p*K-c*I,Pe=D+(1-D)*A,ke=e[0],Te=e[1],Ge=e[2],Me=e[3],ze=e[4],Ee=e[5],De=e[6],Ie=e[7],Ue=e[8],Fe=e[9],We=e[10],qe=e[11];return n[0]=ee*ke+Q*ze+re*Ue,n[1]=ee*Te+Q*Ee+re*Fe,n[2]=ee*Ge+Q*De+re*We,n[3]=ee*Me+Q*Ie+re*qe,n[4]=me*ke+ge*ze+ve*Ue,n[5]=me*Te+ge*Ee+ve*Fe,n[6]=me*Ge+ge*De+ve*We,n[7]=me*Me+ge*Ie+ve*qe,n[8]=Se*ke+Be*ze+Pe*Ue,n[9]=Se*Te+Be*Ee+Pe*Fe,n[10]=Se*Ge+Be*De+Pe*We,n[11]=Se*Me+Be*Ie+Pe*qe,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}const o=l;function f(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e[1],i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function g(e,u,i){const a=i??new r(16),n=u[0],c=u[1],_=u[2];return a[0]=n*e[0*4+0],a[1]=n*e[0*4+1],a[2]=n*e[0*4+2],a[3]=n*e[0*4+3],a[4]=c*e[1*4+0],a[5]=c*e[1*4+1],a[6]=c*e[1*4+2],a[7]=c*e[1*4+3],a[8]=_*e[2*4+0],a[9]=_*e[2*4+1],a[10]=_*e[2*4+2],a[11]=_*e[2*4+3],e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}function m(e,u){const i=u??new r(16);return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function x(e,u,i){const a=i??new r(16);return a[0]=u*e[0*4+0],a[1]=u*e[0*4+1],a[2]=u*e[0*4+2],a[3]=u*e[0*4+3],a[4]=u*e[1*4+0],a[5]=u*e[1*4+1],a[6]=u*e[1*4+2],a[7]=u*e[1*4+3],a[8]=u*e[2*4+0],a[9]=u*e[2*4+1],a[10]=u*e[2*4+2],a[11]=u*e[2*4+3],e!==a&&(a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15]),a}return{add:G,aim:pe,axisRotate:l,axisRotation:h,cameraAim:xe,clone:Z,copy:O,create:d,determinant:Y,equals:H,equalsApproximately:E,fromMat3:y,fromQuat:w,frustum:$,frustumReverseZ:le,getAxis:ue,getScaling:oe,getTranslation:q,identity:ne,inverse:C,invert:ae,lookAt:fe,mul:X,mulScalar:U,multiply:R,multiplyScalar:M,negate:B,ortho:V,perspective:L,perspectiveReverseZ:ie,rotate:o,rotateX:ye,rotateY:we,rotateZ:z,rotation:t,rotationX:_e,rotationY:be,rotationZ:v,scale:g,scaling:f,set:b,setAxis:te,setTranslation:F,translate:de,translation:J,transpose:se,uniformScale:x,uniformScaling:m}}const Dt=new Map;function wn(r){let s=Dt.get(r);return s||(s=yn(r),Dt.set(r,s)),s}function bn(r){const s=_t(r);function d(v,z,h,t){const l=new r(4);return v!==void 0&&(l[0]=v,z!==void 0&&(l[1]=z,h!==void 0&&(l[2]=h,t!==void 0&&(l[3]=t)))),l}const b=d;function y(v,z,h,t,l){const o=l??new r(4);return o[0]=v,o[1]=z,o[2]=h,o[3]=t,o}function w(v,z,h){const t=h??new r(4),l=z*.5,o=Math.sin(l);return t[0]=o*v[0],t[1]=o*v[1],t[2]=o*v[2],t[3]=Math.cos(l),t}function B(v,z){const h=z??s.create(3),t=Math.acos(v[3])*2,l=Math.sin(t*.5);return l>he?(h[0]=v[0]/l,h[1]=v[1]/l,h[2]=v[2]/l):(h[0]=1,h[1]=0,h[2]=0),{angle:t,axis:h}}function G(v,z){const h=L(v,z);return Math.acos(2*h*h-1)}function M(v,z,h){const t=h??new r(4),l=v[0],o=v[1],f=v[2],g=v[3],m=z[0],x=z[1],e=z[2],u=z[3];return t[0]=l*u+g*m+o*e-f*x,t[1]=o*u+g*x+f*m-l*e,t[2]=f*u+g*e+l*x-o*m,t[3]=g*u-l*m-o*x-f*e,t}const U=M;function O(v,z,h){const t=h??new r(4),l=z*.5,o=v[0],f=v[1],g=v[2],m=v[3],x=Math.sin(l),e=Math.cos(l);return t[0]=o*e+m*x,t[1]=f*e+g*x,t[2]=g*e-f*x,t[3]=m*e-o*x,t}function Z(v,z,h){const t=h??new r(4),l=z*.5,o=v[0],f=v[1],g=v[2],m=v[3],x=Math.sin(l),e=Math.cos(l);return t[0]=o*e-g*x,t[1]=f*e+m*x,t[2]=g*e+o*x,t[3]=m*e-f*x,t}function E(v,z,h){const t=h??new r(4),l=z*.5,o=v[0],f=v[1],g=v[2],m=v[3],x=Math.sin(l),e=Math.cos(l);return t[0]=o*e+f*x,t[1]=f*e-o*x,t[2]=g*e+m*x,t[3]=m*e-g*x,t}function H(v,z,h,t){const l=t??new r(4),o=v[0],f=v[1],g=v[2],m=v[3];let x=z[0],e=z[1],u=z[2],i=z[3],a=o*x+f*e+g*u+m*i;a<0&&(a=-a,x=-x,e=-e,u=-u,i=-i);let n,c;if(1-a>he){const _=Math.acos(a),p=Math.sin(_);n=Math.sin((1-h)*_)/p,c=Math.sin(h*_)/p}else n=1-h,c=h;return l[0]=n*o+c*x,l[1]=n*f+c*e,l[2]=n*g+c*u,l[3]=n*m+c*i,l}function ne(v,z){const h=z??new r(4),t=v[0],l=v[1],o=v[2],f=v[3],g=t*t+l*l+o*o+f*f,m=g?1/g:0;return h[0]=-t*m,h[1]=-l*m,h[2]=-o*m,h[3]=f*m,h}function se(v,z){const h=z??new r(4);return h[0]=-v[0],h[1]=-v[1],h[2]=-v[2],h[3]=v[3],h}function C(v,z){const h=z??new r(4),t=v[0]+v[5]+v[10];if(t>0){const l=Math.sqrt(t+1);h[3]=.5*l;const o=.5/l;h[0]=(v[6]-v[9])*o,h[1]=(v[8]-v[2])*o,h[2]=(v[1]-v[4])*o}else{let l=0;v[5]>v[0]&&(l=1),v[10]>v[l*4+l]&&(l=2);const o=(l+1)%3,f=(l+2)%3,g=Math.sqrt(v[l*4+l]-v[o*4+o]-v[f*4+f]+1);h[l]=.5*g;const m=.5/g;h[3]=(v[o*4+f]-v[f*4+o])*m,h[o]=(v[o*4+l]+v[l*4+o])*m,h[f]=(v[f*4+l]+v[l*4+f])*m}return h}function Y(v,z,h,t,l){const o=l??new r(4),f=v*.5,g=z*.5,m=h*.5,x=Math.sin(f),e=Math.cos(f),u=Math.sin(g),i=Math.cos(g),a=Math.sin(m),n=Math.cos(m);switch(t){case"xyz":o[0]=x*i*n+e*u*a,o[1]=e*u*n-x*i*a,o[2]=e*i*a+x*u*n,o[3]=e*i*n-x*u*a;break;case"xzy":o[0]=x*i*n-e*u*a,o[1]=e*u*n-x*i*a,o[2]=e*i*a+x*u*n,o[3]=e*i*n+x*u*a;break;case"yxz":o[0]=x*i*n+e*u*a,o[1]=e*u*n-x*i*a,o[2]=e*i*a-x*u*n,o[3]=e*i*n+x*u*a;break;case"yzx":o[0]=x*i*n+e*u*a,o[1]=e*u*n+x*i*a,o[2]=e*i*a-x*u*n,o[3]=e*i*n-x*u*a;break;case"zxy":o[0]=x*i*n-e*u*a,o[1]=e*u*n+x*i*a,o[2]=e*i*a+x*u*n,o[3]=e*i*n-x*u*a;break;case"zyx":o[0]=x*i*n-e*u*a,o[1]=e*u*n+x*i*a,o[2]=e*i*a-x*u*n,o[3]=e*i*n+x*u*a;break;default:throw new Error(`Unknown rotation order: ${t}`)}return o}function ae(v,z){const h=z??new r(4);return h[0]=v[0],h[1]=v[1],h[2]=v[2],h[3]=v[3],h}const R=ae;function X(v,z,h){const t=h??new r(4);return t[0]=v[0]+z[0],t[1]=v[1]+z[1],t[2]=v[2]+z[2],t[3]=v[3]+z[3],t}function F(v,z,h){const t=h??new r(4);return t[0]=v[0]-z[0],t[1]=v[1]-z[1],t[2]=v[2]-z[2],t[3]=v[3]-z[3],t}const q=F;function ue(v,z,h){const t=h??new r(4);return t[0]=v[0]*z,t[1]=v[1]*z,t[2]=v[2]*z,t[3]=v[3]*z,t}const te=ue;function oe(v,z,h){const t=h??new r(4);return t[0]=v[0]/z,t[1]=v[1]/z,t[2]=v[2]/z,t[3]=v[3]/z,t}function L(v,z){return v[0]*z[0]+v[1]*z[1]+v[2]*z[2]+v[3]*z[3]}function ie(v,z,h,t){const l=t??new r(4);return l[0]=v[0]+h*(z[0]-v[0]),l[1]=v[1]+h*(z[1]-v[1]),l[2]=v[2]+h*(z[2]-v[2]),l[3]=v[3]+h*(z[3]-v[3]),l}function V(v){const z=v[0],h=v[1],t=v[2],l=v[3];return Math.sqrt(z*z+h*h+t*t+l*l)}const $=V;function le(v){const z=v[0],h=v[1],t=v[2],l=v[3];return z*z+h*h+t*t+l*l}const ce=le;function W(v,z){const h=z??new r(4),t=v[0],l=v[1],o=v[2],f=v[3],g=Math.sqrt(t*t+l*l+o*o+f*f);return g>1e-5?(h[0]=t/g,h[1]=l/g,h[2]=o/g,h[3]=f/g):(h[0]=0,h[1]=0,h[2]=0,h[3]=1),h}function N(v,z){return Math.abs(v[0]-z[0])<he&&Math.abs(v[1]-z[1])<he&&Math.abs(v[2]-z[2])<he&&Math.abs(v[3]-z[3])<he}function pe(v,z){return v[0]===z[0]&&v[1]===z[1]&&v[2]===z[2]&&v[3]===z[3]}function xe(v){const z=v??new r(4);return z[0]=0,z[1]=0,z[2]=0,z[3]=1,z}const fe=s.create(),J=s.create(),de=s.create();function _e(v,z,h){const t=h??new r(4),l=s.dot(v,z);return l<-.999999?(s.cross(J,v,fe),s.len(fe)<1e-6&&s.cross(de,v,fe),s.normalize(fe,fe),w(fe,Math.PI,t),t):l>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(s.cross(v,z,fe),t[0]=fe[0],t[1]=fe[1],t[2]=fe[2],t[3]=1+l,W(t,t))}const ye=new r(4),be=new r(4);function we(v,z,h,t,l,o){const f=o??new r(4);return H(v,t,l,ye),H(z,h,l,be),H(ye,be,2*l*(1-l),f),f}return{create:d,fromValues:b,set:y,fromAxisAngle:w,toAxisAngle:B,angle:G,multiply:M,mul:U,rotateX:O,rotateY:Z,rotateZ:E,slerp:H,inverse:ne,conjugate:se,fromMat:C,fromEuler:Y,copy:ae,clone:R,add:X,subtract:F,sub:q,mulScalar:ue,scale:te,divScalar:oe,dot:L,lerp:ie,length:V,len:$,lengthSq:le,lenSq:ce,normalize:W,equalsApproximately:N,equals:pe,identity:xe,rotationTo:_e,sqlerp:we}}const It=new Map;function vn(r){let s=It.get(r);return s||(s=bn(r),It.set(r,s)),s}function Sn(r){function s(h,t,l,o){const f=new r(4);return h!==void 0&&(f[0]=h,t!==void 0&&(f[1]=t,l!==void 0&&(f[2]=l,o!==void 0&&(f[3]=o)))),f}const d=s;function b(h,t,l,o,f){const g=f??new r(4);return g[0]=h,g[1]=t,g[2]=l,g[3]=o,g}function y(h,t){const l=t??new r(4);return l[0]=Math.ceil(h[0]),l[1]=Math.ceil(h[1]),l[2]=Math.ceil(h[2]),l[3]=Math.ceil(h[3]),l}function w(h,t){const l=t??new r(4);return l[0]=Math.floor(h[0]),l[1]=Math.floor(h[1]),l[2]=Math.floor(h[2]),l[3]=Math.floor(h[3]),l}function B(h,t){const l=t??new r(4);return l[0]=Math.round(h[0]),l[1]=Math.round(h[1]),l[2]=Math.round(h[2]),l[3]=Math.round(h[3]),l}function G(h,t=0,l=1,o){const f=o??new r(4);return f[0]=Math.min(l,Math.max(t,h[0])),f[1]=Math.min(l,Math.max(t,h[1])),f[2]=Math.min(l,Math.max(t,h[2])),f[3]=Math.min(l,Math.max(t,h[3])),f}function M(h,t,l){const o=l??new r(4);return o[0]=h[0]+t[0],o[1]=h[1]+t[1],o[2]=h[2]+t[2],o[3]=h[3]+t[3],o}function U(h,t,l,o){const f=o??new r(4);return f[0]=h[0]+t[0]*l,f[1]=h[1]+t[1]*l,f[2]=h[2]+t[2]*l,f[3]=h[3]+t[3]*l,f}function O(h,t,l){const o=l??new r(4);return o[0]=h[0]-t[0],o[1]=h[1]-t[1],o[2]=h[2]-t[2],o[3]=h[3]-t[3],o}const Z=O;function E(h,t){return Math.abs(h[0]-t[0])<he&&Math.abs(h[1]-t[1])<he&&Math.abs(h[2]-t[2])<he&&Math.abs(h[3]-t[3])<he}function H(h,t){return h[0]===t[0]&&h[1]===t[1]&&h[2]===t[2]&&h[3]===t[3]}function ne(h,t,l,o){const f=o??new r(4);return f[0]=h[0]+l*(t[0]-h[0]),f[1]=h[1]+l*(t[1]-h[1]),f[2]=h[2]+l*(t[2]-h[2]),f[3]=h[3]+l*(t[3]-h[3]),f}function se(h,t,l,o){const f=o??new r(4);return f[0]=h[0]+l[0]*(t[0]-h[0]),f[1]=h[1]+l[1]*(t[1]-h[1]),f[2]=h[2]+l[2]*(t[2]-h[2]),f[3]=h[3]+l[3]*(t[3]-h[3]),f}function C(h,t,l){const o=l??new r(4);return o[0]=Math.max(h[0],t[0]),o[1]=Math.max(h[1],t[1]),o[2]=Math.max(h[2],t[2]),o[3]=Math.max(h[3],t[3]),o}function Y(h,t,l){const o=l??new r(4);return o[0]=Math.min(h[0],t[0]),o[1]=Math.min(h[1],t[1]),o[2]=Math.min(h[2],t[2]),o[3]=Math.min(h[3],t[3]),o}function ae(h,t,l){const o=l??new r(4);return o[0]=h[0]*t,o[1]=h[1]*t,o[2]=h[2]*t,o[3]=h[3]*t,o}const R=ae;function X(h,t,l){const o=l??new r(4);return o[0]=h[0]/t,o[1]=h[1]/t,o[2]=h[2]/t,o[3]=h[3]/t,o}function F(h,t){const l=t??new r(4);return l[0]=1/h[0],l[1]=1/h[1],l[2]=1/h[2],l[3]=1/h[3],l}const q=F;function ue(h,t){return h[0]*t[0]+h[1]*t[1]+h[2]*t[2]+h[3]*t[3]}function te(h){const t=h[0],l=h[1],o=h[2],f=h[3];return Math.sqrt(t*t+l*l+o*o+f*f)}const oe=te;function L(h){const t=h[0],l=h[1],o=h[2],f=h[3];return t*t+l*l+o*o+f*f}const ie=L;function V(h,t){const l=h[0]-t[0],o=h[1]-t[1],f=h[2]-t[2],g=h[3]-t[3];return Math.sqrt(l*l+o*o+f*f+g*g)}const $=V;function le(h,t){const l=h[0]-t[0],o=h[1]-t[1],f=h[2]-t[2],g=h[3]-t[3];return l*l+o*o+f*f+g*g}const ce=le;function W(h,t){const l=t??new r(4),o=h[0],f=h[1],g=h[2],m=h[3],x=Math.sqrt(o*o+f*f+g*g+m*m);return x>1e-5?(l[0]=o/x,l[1]=f/x,l[2]=g/x,l[3]=m/x):(l[0]=0,l[1]=0,l[2]=0,l[3]=0),l}function N(h,t){const l=t??new r(4);return l[0]=-h[0],l[1]=-h[1],l[2]=-h[2],l[3]=-h[3],l}function pe(h,t){const l=t??new r(4);return l[0]=h[0],l[1]=h[1],l[2]=h[2],l[3]=h[3],l}const xe=pe;function fe(h,t,l){const o=l??new r(4);return o[0]=h[0]*t[0],o[1]=h[1]*t[1],o[2]=h[2]*t[2],o[3]=h[3]*t[3],o}const J=fe;function de(h,t,l){const o=l??new r(4);return o[0]=h[0]/t[0],o[1]=h[1]/t[1],o[2]=h[2]/t[2],o[3]=h[3]/t[3],o}const _e=de;function ye(h){const t=h??new r(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function be(h,t,l){const o=l??new r(4),f=h[0],g=h[1],m=h[2],x=h[3];return o[0]=t[0]*f+t[4]*g+t[8]*m+t[12]*x,o[1]=t[1]*f+t[5]*g+t[9]*m+t[13]*x,o[2]=t[2]*f+t[6]*g+t[10]*m+t[14]*x,o[3]=t[3]*f+t[7]*g+t[11]*m+t[15]*x,o}function we(h,t,l){const o=l??new r(4);return W(h,o),ae(o,t,o)}function v(h,t,l){const o=l??new r(4);return te(h)>t?we(h,t,o):pe(h,o)}function z(h,t,l){const o=l??new r(4);return ne(h,t,.5,o)}return{create:s,fromValues:d,set:b,ceil:y,floor:w,round:B,clamp:G,add:M,addScaled:U,subtract:O,sub:Z,equalsApproximately:E,equals:H,lerp:ne,lerpV:se,max:C,min:Y,mulScalar:ae,scale:R,divScalar:X,inverse:F,invert:q,dot:ue,length:te,len:oe,lengthSq:L,lenSq:ie,distance:V,dist:$,distanceSq:le,distSq:ce,normalize:W,negate:N,copy:pe,clone:xe,multiply:fe,mul:J,divide:de,div:_e,zero:ye,transformMat4:be,setLength:we,truncate:v,midpoint:z}}const Ut=new Map;function Bn(r){let s=Ut.get(r);return s||(s=Sn(r),Ut.set(r,s)),s}function St(r,s,d,b,y,w){return{mat3:xn(r),mat4:wn(s),quat:vn(d),vec2:Qt(b),vec3:_t(y),vec4:Bn(w)}}const{mat3:mt,mat4:Re,quat:Oe,vec2:Ot,vec3:j,vec4:Bs}=St(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);St(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);St(hn,Array,Array,Array,Array,Array);const Rt=document.querySelector("#log");let Le=null,Ke=null;function Jt(){if(Le)return Le;Le=document.createElement("div"),Le.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",Le.appendChild(r),Ke=document.createElement("div"),Ke.className="ply-spinner-label",Le.appendChild(Ke),Le.style.display="none",document.body.appendChild(Le),Le}function Pn(r){Jt(),Ke&&r&&(Ke.textContent=r),Le&&(Le.style.opacity="1",Le.style.display="flex")}function ct(r){Jt(),Ke&&(Ke.textContent=r)}function kn(){if(!Le)return;const r=Le;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function en(r,s){if(!Rt)return;const d=document.createElement("p");d.innerText=r,s&&Object.assign(d.style,s),Rt.appendChild(d)}async function $e(r){console.log(r),en(r)}async function Tn(r){console.error(r),en(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let tn;function Gn(){tn=performance.now()}function Lt(r){const s=performance.now()-tn;$e(`⏱️ ${r} Time: ${s.toFixed(0)} ms`)}function Mn(r,s){return 2*Math.atan(s/(2*r))}function zn(r,s,d,b){const y=Math.tan(b/2),w=Math.tan(d/2),B=y*r,G=-B,M=w*r,U=-M,O=Re.create();return O[0]=2*r/(M-U),O[5]=-2*r/(B-G),O[2]=(M+U)/(M-U),O[6]=(B+G)/(B-G),O[14]=1,O[10]=s/(s-r),O[11]=-(s*r)/(s-r),Re.transpose(O,O),O}async function An(r){$e(`loading scene camera file... : ${r}`);const d=await(await fetch(r)).json();return $e(`loaded cameras count: ${d.length}`),d.map(b=>{const y=j.clone(b.position),w=mt.create(...b.rotation.flat()),B=w[0],G=w[4],M=w[8],U=w[1],O=w[5],Z=w[9],E=w[2],H=w[6],ne=w[10];B*(O*ne-Z*H)-G*(U*ne-Z*E)+M*(U*H-O*E)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const C=Re.fromMat3(w);return{position:y,rotation:C,img_name:b.img_name,id:b.id}})}const En=4*2,Dn=4*16,nn=4*Dn+2*En;function In(r){return r.createBuffer({label:"camera uniform",size:nn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const je=new Float32Array(nn/Float32Array.BYTES_PER_ELEMENT),ht=class ht{constructor(s,d){P(this,"_renderSize",null);P(this,"uniform_buffer");P(this,"position",j.create());P(this,"rotation",Re.create());P(this,"fovY",45/180*Math.PI);P(this,"fovX");P(this,"focal",Ot.create());P(this,"viewport",Ot.create());P(this,"view_matrix",Re.identity());P(this,"view_inv_matrix",Re.identity());P(this,"proj_matrix",Re.identity());P(this,"proj_inv_matrix",Re.identity());P(this,"_negPos",j.create());P(this,"look",j.create(0,0,1));P(this,"up",j.create(0,1,0));P(this,"right",j.create(1,0,0));this.canvas=s,this.device=d,this.uniform_buffer=In(d),this.on_update_canvas()}setRenderSize(s,d){this._renderSize=[s,d],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,d=this._renderSize?this._renderSize[1]:this.canvas.height,b=.5*d/Math.tan(this.fovY*.5);this.focal[0]=b,this.focal[1]=b,this.fovX=Mn(b,s),this.viewport[0]=s,this.viewport[1]=d,this.proj_matrix=zn(.01,100,this.fovX,this.fovY),Re.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],Re.copy(this.rotation,this.view_matrix),Re.translate(this.view_matrix,this._negPos,this.view_matrix),Re.inverse(this.view_matrix,this.view_inv_matrix),j.transformMat4Upper3x3(ht.Z_AXIS,this.view_inv_matrix,this.look),j.normalize(this.look,this.look),j.cross(this.up,this.look,this.right),j.normalize(this.right,this.right);let s=0;je.set(this.view_matrix,s),s+=16,je.set(this.view_inv_matrix,s),s+=16,je.set(this.proj_matrix,s),s+=16,je.set(this.proj_inv_matrix,s),s+=16,je.set(this.viewport,s),s+=2,je.set(this.focal,s),s+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,je)}set_preset(s){j.copy(s.position,this.position),Re.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}getFov(){return this.fovY}};P(ht,"Z_AXIS",j.create(0,0,1));let xt=ht;const Un=j.create(1,0,0),On=j.create(0,1,0),Rn=j.create(0,0,1);function Ln(r,s){const d=r[0],b=r[4],y=r[8],w=r[1],B=r[5],G=r[9],M=r[2],U=r[6],O=r[10],Z=d+B+O;let E,H,ne,se;if(Z>0){const C=.5/Math.sqrt(Z+1);E=.25/C,H=(U-G)*C,ne=(y-M)*C,se=(w-b)*C}else if(d>B&&d>O){const C=2*Math.sqrt(1+d-B-O);E=(U-G)/C,H=.25*C,ne=(b+w)/C,se=(y+M)/C}else if(B>O){const C=2*Math.sqrt(1+B-d-O);E=(y-M)/C,H=(b+w)/C,ne=.25*C,se=(G+U)/C}else{const C=2*Math.sqrt(1+O-d-B);E=(w-b)/C,H=(y+M)/C,ne=(G+U)/C,se=.25*C}return s[0]=H,s[1]=ne,s[2]=se,s[3]=E,s}class Cn{constructor(s){P(this,"element");P(this,"enabled",!0);P(this,"center",j.create(0,0,0));P(this,"up",j.create(0,1,0));P(this,"rotation",[0,0]);P(this,"shift",[0,0]);P(this,"scroll",0);P(this,"speed",.1);P(this,"sensitivity",.08);P(this,"leftPressed",!1);P(this,"rightPressed",!1);P(this,"leftDragPans",!1);P(this,"lastX",0);P(this,"lastY",0);P(this,"touches",new Map);P(this,"lastTouchCenter",null);P(this,"lastPinchDistance",null);P(this,"lastTwoFingerAngle",null);P(this,"lastTouchCount",0);P(this,"roll",0);P(this,"_dir",j.create());P(this,"_right",j.create());P(this,"_upCam",j.create());P(this,"_scratch",j.create());P(this,"_qY",Oe.create());P(this,"_qX",Oe.create());P(this,"_qRot",Oe.create());P(this,"_qZ",Oe.create());P(this,"_qLocal",Oe.create());P(this,"_qWorldToCam",Oe.create());P(this,"_scratchMat3",mt.create());P(this,"bboxMin",null);P(this,"bboxMax",null);P(this,"anchor",j.create(0,0,0));P(this,"downCallback",s=>{var d,b,y,w;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(b=(d=s.target)==null?void 0:d.setPointerCapture)==null||b.call(d,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(w=(y=s.target)==null?void 0:y.setPointerCapture)==null||w.call(y,s.pointerId),s.preventDefault())}});P(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const d=s.pageX-this.lastX,b=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=d,this.rotation[1]-=b):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=d,this.shift[0]+=b)});P(this,"upCallback",s=>{var d,b,y,w;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(b=(d=s.target)==null?void 0:d.releasePointerCapture)==null||b.call(d,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(y=s.target)==null?void 0:y.releasePointerCapture)==null||w.call(y,s.pointerId),s.preventDefault()});P(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let d=s.deltaY;s.deltaMode===1?d*=16:s.deltaMode===2&&(d*=100),this.scroll+=d*.01});this.camera=s,this.registerElement(s.canvas)}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",d=>d.preventDefault())}setCenter(s){j.copy(s,this.center),j.copy(s,this.anchor)}setOrbitPivot(s){j.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const d=this.camera.rotation;j.set(d[2],d[6],d[10],this._dir),j.normalize(this._dir,this._dir),j.scale(this._dir,s,this._dir),j.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(j.subtract(this.center,s.position,this._scratch),j.length(this._scratch)<1e-6)return;j.normalize(this._scratch,this._scratch),j.cross(this.up,this._scratch,this._right),j.length(this._right)<1e-6&&j.set(1,0,0,this._right),j.normalize(this._right,this._right),j.cross(this._scratch,this._right,this._upCam),j.normalize(this._upCam,this._upCam);const d=s.rotation;d[0]=this._right[0],d[1]=this._upCam[0],d[2]=this._scratch[0],d[3]=0,d[4]=this._right[1],d[5]=this._upCam[1],d[6]=this._scratch[1],d[7]=0,d[8]=this._right[2],d[9]=this._upCam[2],d[10]=this._scratch[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,s.update_buffer()}setBbox(s,d){this.bboxMin=j.create(s[0],s[1],s[2]),this.bboxMax=j.create(d[0],d[1],d[2]);const b=(s[0]+d[0])*.5,y=(s[1]+d[1])*.5,w=(s[2]+d[2])*.5;j.set(b,y,w,this.center),j.set(b,y,w,this.anchor)}resetToCamera(){const s=this.camera.rotation;j.set(s[2],s[6],s[10],this._dir),j.normalize(this._dir,this._dir);let d=null;if(this.bboxMin&&this.bboxMax){let b=-1/0,y=1/0,w=!1;for(let B=0;B<3;B++){const G=this._dir[B],M=this.bboxMin[B]-this.camera.position[B],U=this.bboxMax[B]-this.camera.position[B];if(Math.abs(G)>1e-8){const O=M/G,Z=U/G;b=Math.max(b,Math.min(O,Z)),y=Math.min(y,Math.max(O,Z))}else if(M>0||U<0){w=!0;break}}!w&&b<=y&&y>0&&(d=(Math.max(b,0)+y)*.5)}if(d===null||!isFinite(d)||d<.001){j.subtract(this.anchor,this.camera.position,this._scratch);const b=j.dot(this._scratch,this._dir);d=b>.001?b:j.length(this._scratch)}d=Math.max(.1,d),j.scale(this._dir,d,this._dir),j.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const d=this.touches.values().next().value;if(this.lastTouchCenter){const b=d.x-this.lastTouchCenter[0],y=d.y-this.lastTouchCenter[1];this.rotation[0]+=b*.3,this.rotation[1]-=y*.3}this.lastTouchCenter=[d.x,d.y]}else if(s===2){const d=Array.from(this.touches.values()),b=(d[0].x+d[1].x)*.5,y=(d[0].y+d[1].y)*.5,w=d[1].x-d[0].x,B=d[1].y-d[0].y,G=Math.hypot(w,B),M=Math.atan2(B,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const U=b-this.lastTouchCenter[0],O=y-this.lastTouchCenter[1],Z=Math.hypot(U,O),E=Math.abs(G-this.lastPinchDistance);let H=M-this.lastTwoFingerAngle;H>Math.PI&&(H-=2*Math.PI),H<-Math.PI&&(H+=2*Math.PI),Z>.5&&(this.shift[1]-=U,this.shift[0]+=O),E>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(G/this.lastPinchDistance)*10),Math.abs(H)>.0087&&(this.roll+=H)}this.lastTouchCenter=[b,y],this.lastPinchDistance=G,this.lastTwoFingerAngle=M}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const d=this.camera;{const C=d.rotation;this.up[0]=C[1],this.up[1]=C[5],this.up[2]=C[9],j.length(this.up)>1e-6?j.normalize(this.up,this.up):j.set(0,1,0,this.up)}let b=0,y=!1;Math.abs(this.roll)>1e-4&&(b=this.roll,this.roll=0,y=!0),j.subtract(d.position,this.center,this._dir);let w=j.length(this._dir);w<1e-6&&(w=1e-6);const B=Math.exp(Math.log(w)+this.scroll*s*10*this.speed);j.scale(this._dir,B/w,this._dir),w=B;const G=d.rotation;this._right[0]=G[0],this._right[1]=G[4],this._right[2]=G[8],j.normalize(this._right,this._right),j.length(this._right)<1e-6&&j.set(1,0,0,this._right);const M=j.create(G[1],G[5],G[9]);j.normalize(M,M),j.length(M)<1e-6&&j.set(0,1,0,M);const U=s*this.speed*.1*w,O=this.shift[1]*U,Z=-this.shift[0]*U;j.scale(this._right,O,this._scratch),j.add(this.center,this._scratch,this.center),j.add(d.position,this._scratch,d.position),j.scale(M,Z,this._scratch),j.add(this.center,this._scratch,this.center),j.add(d.position,this._scratch,d.position);const E=this.rotation[0]*s*this.sensitivity,H=this.rotation[1]*s*this.sensitivity;if(Math.abs(E)>1e-5||Math.abs(H)>1e-5||y){const C=d.rotation;Ln(C,this._qWorldToCam),Oe.fromAxisAngle(Un,-H,this._qX),Oe.fromAxisAngle(On,-E,this._qY),Oe.multiply(this._qX,this._qY,this._qLocal),y&&(Oe.fromAxisAngle(Rn,1*b,this._qZ),Oe.multiply(this._qZ,this._qLocal,this._qLocal)),Oe.normalize(this._qLocal,this._qLocal),Oe.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),Oe.normalize(this._qWorldToCam,this._qWorldToCam),mt.fromQuat(this._qWorldToCam,this._scratchMat3),Re.fromMat3(this._scratchMat3,d.rotation);const Y=d.rotation,ae=Y[2],R=Y[6],X=Y[10];d.position[0]=this.center[0]-ae*w,d.position[1]=this.center[1]-R*w,d.position[2]=this.center[2]-X*w,this.up[0]=Y[1],this.up[1]=Y[5],this.up[2]=Y[9],j.normalize(this.up,this.up)}else j.add(this.center,this._dir,d.position);d.update_buffer();const se=Math.pow(.8,s*60);this.rotation[0]*=se,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=se,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=se,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=se,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=se,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function et(r){return r+3&-4}const Fn=2,Wn=3,qn=5,$n=6,Je=7,ut=8,dt=9,ft=10;function Nn(r){const s=new TextDecoder("ascii"),d=s.decode(new Uint8Array(r,0,4));if(d!=="NAT2")throw new Error(`NAT2 bad magic: '${d}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const b=new DataView(r),y=4,w=b.getUint32(y+0,!0),B=b.getUint32(y+4,!0),G=b.getUint32(y+8,!0),M=b.getUint32(y+12,!0),U=b.getUint32(y+16,!0),O=b.getFloat32(y+20,!0),Z=b.getUint32(y+24,!0),E=b.getUint32(y+28,!0),H=b.getFloat32(y+32,!0),ne=b.getFloat32(y+36,!0),se=b.getFloat32(y+40,!0),C=b.getUint32(y+44,!0),Y=b.getFloat32(y+48,!0),ae=b.getFloat32(y+52,!0),R=b.getUint32(y+56,!0),X=b.getUint32(y+60,!0),F=E===dt||E===ft,q=F?X:0,ue=F?0:X,te=ue>0?ue:1;if(E===qn||E===$n)throw new Error(`NAT2: paired-RVQ format=${E} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const oe=E===dt||E===ft;if(E!==Fn&&E!==Wn&&E!==Je&&E!==ut&&!oe)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${E}`);if(w%4!==0||C%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${C}`);let L=y+64;const ie=(R+1)*4,V=new Uint32Array(r.slice(L,L+ie));L+=ie;let $;if(te>1){const J=(te+1)*4;if(L+J>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${J} from ${L})`);$=new Uint32Array(r.slice(L,L+J)),L+=J}else $=new Uint32Array([0,w]);let le=0;for(let J=0;J<te;J++){const de=$[J+1]-$[J];de>le&&(le=de)}if(oe){const J=q&1?7:6,de=U*J*4;if(L+de>r.byteLength)throw new Error(`NAT2 truncated at probes: need ${de} more bytes from offset ${L}, have ${r.byteLength-L}`);const _e=new Float32Array(r.slice(L,L+de));L+=de;const ye=Math.max(1,q>>8&255),be=[];let we=0;for(let l=0,o=w,f=C;l<ye;l++,o>>=1,f>>=1){const g=Math.max(1,o>>2)*Math.max(1,f>>2)*16;be.push(g),we+=g}const v=r.byteLength-L;if(v<we)throw new Error(`NAT2 probe atlas truncated: need ${we} bytes for ${w}x${C} x${ye} mips, have ${v}`);const z=[];let h=L;for(const l of be)z.push(new Uint8Array(r.slice(h,h+l))),h+=l;const t=z[0];return{width:w,height:B,channels:G,kernel_type:M,num_rects:U,uv_extent:O,sb_number:Z,format:E,sh_bias:H,res_bias:ne,compact_mult:se,layer_h:C,atlas_scale:Y,atlas_offset:ae,n_layers:R,n_cols:te,layer_cuts:V,column_cuts:$,slice_width:le,rects_expanded:_e,atlas_bytes:t,mip_bytes:z,probe_mode:q&1?2:1}}const ce=U*4*4;if(L+ce>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${ce} more bytes from offset ${L}, have ${r.byteLength-L}`);const W=new Float32Array(r.slice(L,L+ce));L+=ce;const N=new Float32Array(U*5);for(let J=0;J<U;J++){const de=W[J*4+0],_e=W[J*4+1],ye=W[J*4+2],be=W[J*4+3];let we=0;for(let l=1;l<=R&&V[l]<=_e;l++)we=l;let v=0;for(let l=1;l<=te&&$[l]<=de;l++)v=l;const z=_e-V[we],h=de-$[v],t=v*R+we;N[J*5+0]=h,N[J*5+1]=z,N[J*5+2]=ye,N[J*5+3]=be,N[J*5+4]=t}let pe;const fe=w/4*16;if(E===Je||E===ut){if(L+24>r.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const J=E===Je?"BCCB":"ACCB",de=s.decode(new Uint8Array(r,L,4));if(de!==J)throw new Error(`NAT2 typeD bad sub-magic: expected '${J}' got '${de}'`);const _e=b.getUint32(L+4,!0),ye=b.getUint32(L+8,!0),be=b.getUint32(L+12,!0),we=b.getUint32(L+16,!0),v=b.getUint32(L+20,!0);if(_e!==1)throw new Error(`NAT2 BCCB unsupported version ${_e}`);if(be!==B/4||we!==w/4||v!==be*we)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${B}, sub-header ${we}×${be} (${v} blocks)`);L+=24;const z=ye*16;if(L+z>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${z}, have ${r.byteLength-L})`);const h=new Uint8Array(r,L,z);L+=z;const t=v*2;if(L+t>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${t}, have ${r.byteLength-L})`);const l=new Uint16Array(r.slice(L,L+t));L+=t;const o=new Uint8Array(v*16);for(let f=0;f<v;f++){const g=l[f]*16;o.set(h.subarray(g,g+16),f*16)}pe=o}else{let J=0;for(let de=0;de<R;de++){const _e=V[de+1]-V[de];if(_e%4!==0)throw new Error(`NAT2 BC7 layer ${de} rows ${_e} not 4-aligned`);J+=_e/4*fe}if(L+J>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${J} more bytes from offset ${L}, have ${r.byteLength-L}`);pe=new Uint8Array(r.slice(L,L+J))}return{width:w,height:B,channels:G,kernel_type:M,num_rects:U,uv_extent:O,sb_number:Z,format:E,sh_bias:H,res_bias:ne,compact_mult:se,layer_h:C,atlas_scale:Y,atlas_offset:ae,n_layers:R,n_cols:te,layer_cuts:V,column_cuts:$,slice_width:le,rects_expanded:N,atlas_bytes:pe}}const Zn=32;function Hn(r,s,d){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let b,y,w,B;if(s.format===2||s.format===Je||s.format===dt){if(!r.features.has("texture-compression-bc"))return $e(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;B=s.format===dt?"BC7 atlas (proberes: shared probe texture)":s.format===Je?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:b,view:y,sampler:w}=Ct(r,s,"bc7-rgba-unorm",B)}else if(s.format===3||s.format===ut||s.format===ft){if(!r.features.has("texture-compression-astc"))return $e(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;B=s.format===ft?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===ut?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:b,view:y,sampler:w}=Ct(r,s,"astc-4x4-unorm",B)}else return $e(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:G}=s,M=r.createBuffer({label:"atlas rects (5-stride)",size:et(G.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(M,0,G);const U=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return yt(r,U,s,d),{texture:b,view:y,sampler:w,rectsBuffer:M,texParamsBuffer:U,meta:s}}function Ct(r,s,d,b){const{width:y,layer_h:w,n_layers:B,n_cols:G,layer_cuts:M,column_cuts:U,slice_width:O,atlas_bytes:Z}=s,H=y/4*16,ne=r.limits.maxTextureDimension2D;if(w>ne||O>ne)throw new Error(`⚠️  atlas slice dims ${O}x${w} exceed maxTextureDimension2D=${ne}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const se=G*B;if(se>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${G} cols × ${B} layers = ${se} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const C=s.mip_bytes??[Z],Y=C.length,ae=r.createTexture({label:b,size:{width:O,height:w,depthOrArrayLayers:se},mipLevelCount:Y,sampleCount:1,dimension:"2d",format:d,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let F=0;F<G;F++){const q=U[F]/4,ue=(U[F+1]-U[F])/4;for(let te=0;te<B;te++){const oe=M[te]/4,L=(M[te+1]-M[te])/4,ie=F*B+te,V=oe*H+q*16;r.queue.writeTexture({texture:ae,mipLevel:0,origin:{x:0,y:0,z:ie},aspect:"all"},Z,{offset:V,bytesPerRow:H,rowsPerImage:L},{width:ue*4,height:L*4,depthOrArrayLayers:1})}}for(let F=1;F<Y;F++){const q=Math.max(1,O>>F),ue=Math.max(1,w>>F);r.queue.writeTexture({texture:ae,mipLevel:F,origin:{x:0,y:0,z:0},aspect:"all"},C[F],{offset:0,bytesPerRow:Math.max(1,q>>2)*16,rowsPerImage:Math.max(1,ue>>2)},{width:q,height:ue,depthOrArrayLayers:1})}Y>1&&console.log(`[atlas] ${Y} mip levels uploaded (trilinear minification)`);const R=ae.createView({label:`${b} view`,dimension:"2d-array"}),X=r.createSampler({label:`${b} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:Y>1?"linear":"nearest"});return{texture:ae,view:R,sampler:X}}function yt(r,s,d,b,y=1){var U;const w=new ArrayBuffer(32),B=new Uint32Array(w),G=new Float32Array(w);B[0]=b?1:0,G[1]=d.atlas_scale,G[2]=d.atlas_offset,G[3]=d.res_bias,B[4]=d.probe_mode?d.probe_mode|0:0,B[5]=d.width|0;const M=(((U=d.mip_bytes)==null?void 0:U.length)??1)>1;B[6]=M&&y!==0?1:0,r.queue.writeBuffer(s,0,w)}async function jn(r,s){$e(`loading ply file from File... : ${r.name}`),Pn("downloading PLY...");const d=await r.arrayBuffer();try{return await Yn(d,s)}finally{kn()}}async function Yn(r,s){return new Promise((d,b)=>{const y=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});y.onmessage=w=>{var G,M,U,O,Z,E,H,ne,se,C,Y,ae;const B=w.data;if((B==null?void 0:B.type)==="error"){Tn(`PLY worker error: ${B.message??"unknown error"}`),y.terminate(),b(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const R=B.totalBytes,X=B.loadedBytes/(1024*1024),F=R?R/(1024*1024):void 0,q=(B.speedBps??0)/(1024*1024),ue=R?Math.min(99,Math.floor(B.loadedBytes/R*100)):void 0,te=F?`total ${F.toFixed(1)} MB`:"total -- MB",oe=F&&ue!==void 0?`${X.toFixed(1)} MB downloaded (${ue}%)`:`${X.toFixed(1)} MB downloaded`,L=`${q.toFixed(2)} MB/s`;ct(`downloading PLY ...
${te}, ${oe}
${L}`);return}else if((B==null?void 0:B.type)==="fetched"){$e(`💾 Fetched (${B.byteLength} bytes)`),Lt("Download"),ct("parsing PLY..."),Gn();return}else if((B==null?void 0:B.type)==="parse_progress"){const R=B.total??0,X=B.read??0,F=R>0?Math.floor(X/R*100):0;ct(`parsing PLY ...
${X}/${R} surfels (${F}%)`);return}else if((B==null?void 0:B.type)==="done"){const R=B.num_points,X=B.K,F=B.feature_mode??0,q=B.sh_bias,ue=B.kernel_type,te=B.surfelBuffer,oe=B.svParamsBuffer;$e(`🪐 Total surfels: ${R}, mode=${F===1?"SB":"SV"}, K=${X}, sh_bias=${q}, kernel_type=${ue}`);const ie=s.createBuffer({label:"surfel input buffer",size:et(R*Zn),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(ie,0,te);const V=oe.byteLength>0?oe.byteLength:16,$=s.createBuffer({label:F===1?"color_params buffer (SB)":"color_params buffer (SV)",size:et(V),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});oe.byteLength>0&&s.queue.writeBuffer($,0,oe),y.terminate(),Lt("Parse"),d({num_points:R,K:X,feature_mode:F,sh_bias:q,kernel_type:ue,surfel_buffer:ie,surfel_data:new Float32Array(te),sv_params_buffer:$,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((M=(G=B.bbox)==null?void 0:G.min)==null?void 0:M[0])??-1)+(((O=(U=B.bbox)==null?void 0:U.max)==null?void 0:O[0])??1))/2,((((E=(Z=B.bbox)==null?void 0:Z.min)==null?void 0:E[1])??-1)+(((ne=(H=B.bbox)==null?void 0:H.max)==null?void 0:ne[1])??1))/2,((((C=(se=B.bbox)==null?void 0:se.min)==null?void 0:C[2])??-1)+(((ae=(Y=B.bbox)==null?void 0:Y.max)==null?void 0:ae[2])??1))/2]})}},y.onerror=w=>{y.terminate(),b(w)},r instanceof ArrayBuffer?(ct("parsing PLY..."),y.postMessage({type:"start",plyBuffer:r},[r])):y.postMessage({type:"start_url",url:r.url})})}const Vn=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Ft=`// 2DGS render — vertex+fragment.
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
`,sn=`const WG_SIZE = 256u;
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
}`,Xn=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,rn=`// shader implementing gpu radix sort.

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
`,an=`// shader implementing gpu radix sort.

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
`,on=`// ============================================================================
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
}`,cn=32,wt=1,bt=2,Wt=4,qt=512,$t=1024,Kn=0,He=new ArrayBuffer(cn),Ce={canvas_size:new Uint32Array(He,0,2),accel_flags:new Uint32Array(He,8,1),feature_mode:new Uint32Array(He,12,1),gaussian_scaling:new Float32Array(He,16,1),sh_bias:new Float32Array(He,20,1),color_K:new Uint32Array(He,24,1),walltime:new Float32Array(He,28,1)};function Qn(r){Ce.canvas_size[0]=r.width>>>0,Ce.canvas_size[1]=r.height>>>0,Ce.accel_flags[0]=(r.accel_flags??wt|bt)>>>0,Ce.feature_mode[0]=(r.feature_mode??Kn)>>>0,Ce.gaussian_scaling[0]=r.gaussian_scaling??1,Ce.sh_bias[0]=r.sh_bias??.5,Ce.color_K[0]=(r.color_K??0)>>>0,Ce.walltime[0]=r.walltime??0}function ln(r,s){r.queue.writeBuffer(s,0,He)}function un(r,s,d){d&&r&&s&&ln(r,s)}function Jn(r,s,d,b,y=!0){Ce.canvas_size[0]=r>>>0,Ce.canvas_size[1]=s>>>0,un(d??null,b??null,y)}function es(r,s,d,b=!0){let y=Ce.accel_flags[0];r.oac!==void 0&&(y=r.oac?y|wt:y&~wt),r.spr!==void 0&&(y=r.spr?y|bt:y&~bt),r.bfc!==void 0&&(y=r.bfc?y|Wt:y&~Wt),r.hypLegacy!==void 0&&(y=r.hypLegacy?y|qt:y&~qt),r.legacyPos!==void 0&&(y=r.legacyPos?y|$t:y&~$t),Ce.accel_flags[0]=y>>>0,un(s??null,d??null,b)}const ts=256;function Nt(r,s){const d=[],b=[];let y=!0;for(const w of r.split(`
`)){const B=w.trim();let G;if((G=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const M=!!s[G[1]];b.push({parent:y,taken:M}),y=y&&M;continue}if(/^\/\/#else\s*$/.test(B)){const M=b[b.length-1];if(M===void 0)throw new Error("preprocessWGSL: #else without #if");y=M.parent&&!M.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const M=b.pop();if(M===void 0)throw new Error("preprocessWGSL: #endif without #if");y=M.parent;continue}y&&d.push(w)}if(b.length!==0)throw new Error("preprocessWGSL: unterminated #if");return d.join(`
`)}const ns=cn,ss=8,rs=96,is=12,Bt=8,Ze=1<<Bt,Xe=256,pt=32/Bt,as=0,Zt=pt&1;function Ht(r,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function os(r,s){const d=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),b=r.createPipelineLayout({bindGroupLayouts:[d]}),y=w=>r.createComputePipeline({layout:b,compute:{module:s,entryPoint:w,constants:{WG_SIZE:Xe}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:d}}function cs(r,s,d){const b=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=r.createPipelineLayout({bindGroupLayouts:[b]}),B=r.createPipelineLayout({bindGroupLayouts:[y]}),G=[];for(let M=0;M<pt;M++){const U={PASS_ID:M+as,RS_RADIX_LOG2:Bt,RS_RADIX_SIZE:Ze};G.push({localHistogram:r.createComputePipeline({layout:w,compute:{module:s,entryPoint:"local_histogram_pass",constants:U}}),scatterElements:r.createComputePipeline({layout:B,compute:{module:d,entryPoint:"scatter_elements",constants:U}})})}return{passes:G,localHistogramBindGroupLayout:b,scatterBindGroupLayout:y}}function ls(r){const s=r.createShaderModule({label:"local histogram",code:an}),d=r.createShaderModule({label:"scatter",code:rn}),b=r.createShaderModule({label:"blelloch prefix",code:on}),y=os(r,b),w=cs(r,s,d);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:y}}function us(r){const s=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),d=s.createView({dimension:"2d-array"}),b=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=r.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(w,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:d,sampler:b,rectsBuffer:y,texParamsBuffer:w,meta:B}}class ds{constructor(s,d,b,y,w,B=null,G={}){P(this,"device");P(this,"pc");P(this,"presentationFormat");P(this,"camera_buffer");P(this,"render_settings_buffer");P(this,"draw_indirect_buffer");P(this,"splat_2d_buffer");P(this,"querySet");P(this,"resolveBuffer");P(this,"resultBuffer");P(this,"queriesPerFrame",ss);P(this,"queryCapacityFrames",200);P(this,"sort_prefixBindGroup");P(this,"sort_pipelines");P(this,"sort_localHistogramBindGroups");P(this,"sort_scatterBindGroups");P(this,"lastFrame",0);P(this,"frameCount",0);P(this,"preprocessPipeline");P(this,"cullPipeline");P(this,"renderPipeline");P(this,"indirectPipeline");P(this,"renderShaderModule");P(this,"betaKernel",1);P(this,"fetchById");P(this,"octBound");P(this,"acc16");P(this,"accTexture",null);P(this,"accView",null);P(this,"accW",0);P(this,"accH",0);P(this,"legacyRenderPipeline",null);P(this,"varyingsPipeline",null);P(this,"legacyRenderer",!1);P(this,"accResolvePipeline",null);P(this,"accResolveBgl",null);P(this,"accResolveBindGroup",null);P(this,"renderSettingsBgl");P(this,"renderSplatsBgl");P(this,"atlasBgl");P(this,"sort_info_buffer");P(this,"sort_ping_pong");P(this,"crsBg");P(this,"gsBg");P(this,"cullBg2");P(this,"preprocessBg1");P(this,"renderSplatsBindGroup");P(this,"renderSettingsBindGroup");P(this,"atlasBindGroup");P(this,"indirectBindGroup");P(this,"sh_solvers_buffer");P(this,"bfcParamsBuffer");P(this,"bfcBindGroupLayout");P(this,"bfcBindGroup");P(this,"bgColor",[0,0,0,0]);P(this,"showPerfDialogNext",!1);P(this,"requestReorderNextFrame",!1);P(this,"reorderInFlight",!1);P(this,"downloadOnceNextRead",!1);P(this,"downloadOnceFileName","fps_metrics");P(this,"allFrameTimes",[]);P(this,"lastStageBreakdownMs",null);P(this,"timeQueryEnabled");P(this,"atlas");P(this,"atlasParamsBuffer");P(this,"_atlasEnabled",!0);P(this,"_mipMode",1);this.fetchById=G.fetchById??!0,this.octBound=G.octBound??!1,this.acc16=G.acc16??!1,$e(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const M=w.includes("timestamp-query");this.timeQueryEnabled=M,M&&$e("⏰ using timestamp-query"),this.pc=s,this.device=d,this.presentationFormat=b,this.camera_buffer=y,this.atlas=B??us(d),this.atlasParamsBuffer=d.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),d.addEventListener("uncapturederror",fe=>{console.error("A WebGPU error was not captured:",fe.error)}),this._setupTimestampQueries(),this._setupBuffers();const U=(Math.floor((this.pc.num_points+Xe-1)/Xe)+1)*Xe,O=Math.ceil(U/Xe);console.log(`keys count adjusted: ${U}`),console.log(`key size: ${this.pc.num_points}`);const Z=d.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ls(d);const E=[Ht(U,d),Ht(U,d)],H=d.createBuffer({label:"workgroup histograms",size:O*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=d.createBuffer({label:"workgroup prefixes",size:O*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),se=d.createBuffer({label:"digit base",size:Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),C=Math.ceil(O/Xe),Y=Math.ceil(C/Xe),ae=d.createBuffer({label:"prefix l0 sums",size:C*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=d.createBuffer({label:"prefix l0 offsets",size:C*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=d.createBuffer({label:"prefix l1 sums",size:Y*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),F=d.createBuffer({label:"prefix l1 offsets",size:Y*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=d.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:ne}},{binding:3,resource:{buffer:ae}},{binding:4,resource:{buffer:R}},{binding:5,resource:{buffer:X}},{binding:6,resource:{buffer:F}},{binding:7,resource:{buffer:se}}]}),this.sort_localHistogramBindGroups=[d.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:E[0].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]}),d.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:E[1].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]})],this.sort_scatterBindGroups=[d.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:se}},{binding:2,resource:{buffer:E[0].sort_depths_buffer}},{binding:3,resource:{buffer:E[1].sort_depths_buffer}},{binding:4,resource:{buffer:E[0].sort_indices_buffer}},{binding:5,resource:{buffer:E[1].sort_indices_buffer}},{binding:6,resource:{buffer:ne}}]}),d.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:se}},{binding:2,resource:{buffer:E[1].sort_depths_buffer}},{binding:3,resource:{buffer:E[0].sort_depths_buffer}},{binding:4,resource:{buffer:E[1].sort_indices_buffer}},{binding:5,resource:{buffer:E[0].sort_indices_buffer}},{binding:6,resource:{buffer:ne}}]})],this.sort_info_buffer=Z,this.sort_ping_pong=E;const q=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ue=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),te=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),oe=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:q,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:ue,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:te,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:oe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const L=this.device.createShaderModule({code:sn});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:L,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const ie=this.device.createShaderModule({code:Xn});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[q,ue,te,this.bfcBindGroupLayout]}),compute:{module:ie,entryPoint:"surfel_cull"}});const V=this.device.createShaderModule({code:Vn});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[q,oe]}),compute:{module:V,entryPoint:"preprocess"}});const $=this.device.createShaderModule({label:"render_2dgs",code:Nt(Ft,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});$.getCompilationInfo().then(fe=>{fe.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),fe.messages.forEach(J=>{(J.type==="error"?console.error:J.type==="warning"?console.warn:console.log)(`${J.type} (line ${J.lineNum}:${J.linePos}): ${J.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const le=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),ce=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,W=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:ce,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),N=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),pe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[le,W,N]}),vertex:{module:$,entryPoint:"vs_main"},fragment:{module:$,entryPoint:"fs_main",constants:{BETA_KERNEL:pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const xe=(fe,J,de)=>{const _e=this.device.createShaderModule({label:`render_2dgs (${fe})`,code:Nt(Ft,{FETCH_BY_ID:J,OCT:de})});return this.device.createRenderPipeline({label:`render_2dgs_${fe}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[le,W,N]}),vertex:{module:_e,entryPoint:"vs_main"},fragment:{module:_e,entryPoint:"fs_main",constants:{BETA_KERNEL:pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=xe("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?xe("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(fe=>{fe?console.error("[render_2dgs] pipeline create validation error:",fe.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:le,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:W,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Zt].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:N,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=$,this.betaKernel=pe,this.renderSettingsBgl=le,this.renderSplatsBgl=W,this.atlasBgl=N}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(s,d){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,d[0],d[1],d[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const s=new ArrayBuffer(16),d=new Uint32Array(s),b=new Float32Array(s);d[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,d[1]=this.atlas.meta.layer_h|0,b[2]=this.atlas.meta.uv_extent||0,d[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}ensureAccResources(s,d){var b;if(this.accResolvePipeline===null){const y=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:y});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===d||((b=this.accTexture)==null||b.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,d),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=d)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,yt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,$e(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,es({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const d=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([d])),$e(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(s){this.atlas.meta.format!==4294967295&&(this._mipMode=s?1:0,yt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const d=Math.max(0,Math.min(s,this.pc.num_points)),b=d*Uint32Array.BYTES_PER_ELEMENT;if(b===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[Zt].sort_indices_buffer,0,y,0,b),this.device.queue.submit([w.finish()]),await y.mapAsync(GPUMapMode.READ);const B=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",d,"):",Array.from(B)),y.unmap()}frame(s,d,b=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=b&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const G={label:"cull"};B&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const M=s.beginComputePass(G);M.setPipeline(this.cullPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.gsBg),M.setBindGroup(2,this.cullBg2),M.setBindGroup(3,this.bfcBindGroup);const U=Math.ceil(this.pc.num_points/ts);M.dispatchWorkgroups(U,1,1),M.end()}{const G=s.beginComputePass({label:"calculate indirect dispatch"});G.setPipeline(this.indirectPipeline),G.setBindGroup(0,this.indirectBindGroup),G.dispatchWorkgroups(1,1,1),G.end()}{const G={label:"preprocess"};B&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const M=s.beginComputePass(G);M.setPipeline(this.preprocessPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.preprocessBg1),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),M.end()}for(let G=0;G<pt;G++){const M=G&1,U=this.sort_pipelines.passes[G],O=this.sort_localHistogramBindGroups[M],Z=this.sort_scatterBindGroups[M];{const E={label:`upsweep_round${G}`};B&&G==0&&(E.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const H=s.beginComputePass(E);H.setPipeline(U.localHistogram),H.setBindGroup(0,O),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const E=s.beginComputePass({label:`prefix_round${G} - l0TileScan`});E.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),E.setBindGroup(0,this.sort_prefixBindGroup),E.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),E.end()}{const E=s.beginComputePass({label:`prefix_round${G} - l1TileScanOnL0`});E.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),E.setBindGroup(0,this.sort_prefixBindGroup),E.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),E.end()}{const E=s.beginComputePass({label:`prefix_round${G} - l1ScanSums`});E.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),E.setBindGroup(0,this.sort_prefixBindGroup),E.dispatchWorkgroups(1,Ze,1),E.end()}{const E=s.beginComputePass({label:`prefix_round${G} - addL1ToL0`});E.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),E.setBindGroup(0,this.sort_prefixBindGroup),E.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),E.end()}{const E=s.beginComputePass({label:`prefix_round${G} - addL0ToElems`});E.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),E.setBindGroup(0,this.sort_prefixBindGroup),E.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),E.end()}{const E=s.beginComputePass({label:`prefix_round${G} - computeDigitBase`});E.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),E.setBindGroup(0,this.sort_prefixBindGroup),E.dispatchWorkgroups(1,1,1),E.end()}{const E={label:`scatter_round${G}`};B&&G==pt-1&&(E.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const H=s.beginComputePass(E);H.setPipeline(U.scatterElements),H.setBindGroup(0,Z),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}{let G=d;this.acc16&&(this.ensureAccResources(Ce.canvas_size[0],Ce.canvas_size[1]),G=this.accView);const M={label:"render",colorAttachments:[{view:G,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(M.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...this.acc16?{}:{endOfPassWriteIndex:w+7}});const U=s.beginRenderPass(M);if(U.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),U.setBindGroup(0,this.renderSettingsBindGroup),U.setBindGroup(1,this.renderSplatsBindGroup),U.setBindGroup(2,this.atlasBindGroup),U.drawIndirect(this.draw_indirect_buffer,0),U.end(),this.acc16){const O={label:"acc16_resolve",colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(O.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const Z=s.beginRenderPass(O);Z.setPipeline(this.accResolvePipeline),Z.setBindGroup(0,this.accResolveBindGroup),Z.draw(3),Z.end()}}this.frameCount++}async readPerfMetrics(s){const d=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const b=this.device.createCommandEncoder({label:"timestamp resolve encoder"});b.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),b.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([b.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),G=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,M=Array.from({length:y.length},()=>[]);let U=0;for(let Y=0;Y<B;Y++){const ae=(G+Y)%this.queryCapacityFrames,R=ae*this.queriesPerFrame;let X=!0;for(let F=0;F<y.length;F++){const[q,ue,te]=y[F];if(w[R+te]===0n||w[R+ue]===0n||w[R+ue]<w[R+te]){X=!1;break}}if(!X){!d&&ae%60===0&&console.debug("[timestamp] frame slot",ae,"contains unwritten (0) timestamps, skipped in stats");continue}U++;for(let F=0;F<y.length;F++){const[q,ue,te]=y[F],oe=Number(w[R+te]),L=Number(w[R+ue]);M[F].push((L-oe)/1e6)}}if(U===0){this.resultBuffer.unmap(),d||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...M[0]);const O=[];let Z=0,E=0,H=0;for(let Y=0;Y<y.length;Y++){const ae=y[Y][0],R=M[Y];let X=0;if(ae==="Total"){const F=this.allFrameTimes;X=F.reduce((te,oe)=>te+oe,0)/F.length;const q=[...F].sort((te,oe)=>te-oe);Z=q[Math.floor(q.length*.99)]||0;const ue=F.reduce((te,oe)=>te+Math.pow(oe-X,2),0)/F.length;E=Math.sqrt(ue),H=X}else X=R.reduce((F,q)=>F+q,0)/R.length;O.push([ae,X])}this.lastFrame+=this.frameCount,this.frameCount=0;const ne=Object.fromEntries(O);this.lastStageBreakdownMs={cull:ne.Culling??0,preprocess:ne.Preprocess??0,sort:ne.Sort??0,render:ne.Render??0,total:ne.Total??0};const C=`[TIMESTAMP - ${this.constructor.name}]
`+O.map(([Y,ae])=>`${Y}: ${ae.toFixed(3)}ms`).join(`
`)+`
Total P99: ${Z.toFixed(3)}ms
Total STD: ${E.toFixed(3)}ms
Total AVG: ${H.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(d||(console.log(C),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Y=`Stage,ms
`,ae=O.map(([F,q])=>`${F},${q.toFixed(3)}`).join(`
`),R="data:text/csv;charset=utf-8,"+encodeURIComponent(Y+ae),X=document.createElement("a");X.href=R,X.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(X),X.click(),X.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(C)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ns,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),d=s?s.width:1,b=s?s.height:1;Qn({width:d,height:b,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ln(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:et(this.pc.num_points*rs),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:et(this.pc.num_points*is),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const d=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=d.length>0?d:this.downloadOnceFileName}else{const d=new Date,b=`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}_${String(d.getHours()).padStart(2,"0")}${String(d.getMinutes()).padStart(2,"0")}${String(d.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${b}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function fs(r){const s=new TextDecoder().decode(new Uint8Array(r,0,4));if(s!=="GSB1")throw new Error(`not a GSB1 file (magic '${s}')`);const d=new DataView(r).getUint32(4,!0),b=JSON.parse(new TextDecoder().decode(new Uint8Array(r,8,d))),y=8+d;return{header:b,bytes:r.byteLength,block(w){const B=b.blocks.find(G=>G.name===w);if(!B)throw new Error(`GSB block '${w}' missing`);return r.slice(y+B.offset,y+B.offset+B.nbytes)}}}const jt=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
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
`,ps=`// Sorted 3DGS path (FastGS, Speedy-Splat), pass 1 of 3: frustum cull + EWA projection +
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
`,hs=`// Mobile-GS (Du et al., ICLR'26) compute passes, a line-by-line port of their released
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
`,_s=`// Raster pass shared by both bench baselines. One quad per splat, spanned by the 2D
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

`,gs=`// Mobile-GS fullscreen resolve of gs_raster.wgsl's fs_wsum targets: C = (Σcαw / max(Σαw, eps))·(1 - T) + T·bg  (bg = black).
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
`,Pt=8,Ne=1<<Pt,Ye=256,gt=32/Pt;class ms{constructor(s,d,b){P(this,"depthsIn");P(this,"indicesIn");P(this,"indicesOut");P(this,"owned",[]);P(this,"passes",[]);P(this,"histBg");P(this,"scatterBg");P(this,"prefixBg");P(this,"prefix",{});this.device=s,this.info=b;const y=(Math.floor((d+Ye-1)/Ye)+1)*Ye,w=Math.ceil(y/Ye),B=(V,$)=>{const le=s.createBuffer({label:V,size:$,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(le),le},G=[0,1].map(V=>({d:B(`sort keys ${V}`,y*4),p:B(`sort payload ${V}`,y*4)})),M=B("wg histograms",w*Ne*4),U=B("wg prefixes",w*Ne*4),O=B("digit base",Ne*4),Z=Math.ceil(w/Ye),E=Math.ceil(Z/Ye),H=B("l0 sums",Z*Ne*4),ne=B("l0 offsets",Z*Ne*4),se=B("l1 sums",E*Ne*4),C=B("l1 offsets",E*Ne*4);this.depthsIn=G[0].d,this.indicesIn=G[0].p,this.indicesOut=G[gt&1].p;const Y=V=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:V}}),ae=s.createBindGroupLayout({entries:[{binding:0,...Y("read-only-storage")},{binding:1,...Y("read-only-storage")},{binding:2,...Y("storage")}]}),R=s.createBindGroupLayout({entries:[{binding:0,...Y("read-only-storage")},{binding:1,...Y("read-only-storage")},{binding:2,...Y("read-only-storage")},{binding:3,...Y("storage")},{binding:4,...Y("read-only-storage")},{binding:5,...Y("storage")},{binding:6,...Y("read-only-storage")}]}),X=s.createBindGroupLayout({entries:[{binding:0,...Y("read-only-storage")},{binding:1,...Y("read-only-storage")},...[2,3,4,5,6,7].map(V=>({binding:V,...Y("storage")}))]}),F=s.createShaderModule({label:"bench radix histogram",code:an}),q=s.createShaderModule({label:"bench radix scatter",code:rn}),ue=s.createShaderModule({label:"bench radix prefix",code:on}),te=s.createPipelineLayout({bindGroupLayouts:[ae]}),oe=s.createPipelineLayout({bindGroupLayouts:[R]});for(let V=0;V<gt;V++){const $={PASS_ID:V,RS_RADIX_LOG2:Pt,RS_RADIX_SIZE:Ne};this.passes.push({hist:s.createComputePipeline({layout:te,compute:{module:F,entryPoint:"local_histogram_pass",constants:$}}),scatter:s.createComputePipeline({layout:oe,compute:{module:q,entryPoint:"scatter_elements",constants:$}})})}const L=s.createPipelineLayout({bindGroupLayouts:[X]});for(const V of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[V]=s.createComputePipeline({layout:L,compute:{module:ue,entryPoint:V,constants:{WG_SIZE:Ye}}});const ie=(V,$)=>({binding:V,resource:{buffer:$}});this.prefixBg=s.createBindGroup({layout:X,entries:[ie(0,b),ie(1,M),ie(2,U),ie(3,H),ie(4,ne),ie(5,se),ie(6,C),ie(7,O)]}),this.histBg=[0,1].map(V=>s.createBindGroup({layout:ae,entries:[ie(0,b),ie(1,G[V].d),ie(2,M)]})),this.scatterBg=[0,1].map(V=>s.createBindGroup({layout:R,entries:[ie(0,b),ie(1,O),ie(2,G[V].d),ie(3,G[1-V].d),ie(4,G[V].p),ie(5,G[1-V].p),ie(6,U)]}))}encode(s){const d=(b,y,w,B)=>{const G=s.beginComputePass();G.setPipeline(b),G.setBindGroup(0,y),w!==null?G.dispatchWorkgroupsIndirect(this.info,w):G.dispatchWorkgroups(B[0],B[1],1),G.end()};for(let b=0;b<gt;b++){const y=b&1;d(this.passes[b].hist,this.histBg[y],4),d(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),d(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),d(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,Ne]),d(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),d(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),d(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),d(this.passes[b].scatter,this.scatterBg[y],4)}}destroy(){for(const s of this.owned)s.destroy()}}const Yt=256,xs=64,Ve=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class ys{constructor(s,d,b,y,w){P(this,"n");P(this,"kind");P(this,"freezeMlp",!1);P(this,"owned",[]);P(this,"params",new ArrayBuffer(32));P(this,"paramsBuf");P(this,"info");P(this,"drawArgs");P(this,"vpBuf");P(this,"indirectPipe");P(this,"indirectBg");P(this,"computeBgs");P(this,"cullPipe");P(this,"mlpPipe",null);P(this,"mlpAllPipe",null);P(this,"prepPipe",null);P(this,"rasterPipe");P(this,"rasterBg");P(this,"sorter",null);P(this,"countCopy",null);P(this,"cullInfoBg",null);P(this,"accTex",null);P(this,"trTex",null);P(this,"resolvePipe",null);P(this,"resolveBgl",null);P(this,"resolveBg",null);P(this,"accFormat");P(this,"wScale");P(this,"eps",null);this.device=s,this.targetFormat=y;const B=d.header;this.n=B.n,this.kind=B.render;const G=B.n,M=(W,N,pe=Ve|GPUBufferUsage.COPY_SRC)=>{const xe=s.createBuffer({label:W,size:Math.max(16,N+(4-N%4)%4),usage:pe});return this.owned.push(xe),xe},U=(W,N)=>{const pe=N instanceof ArrayBuffer?new Uint8Array(N):new Uint8Array(N.buffer,N.byteOffset,N.byteLength),xe=M(W,pe.byteLength,Ve);return s.queue.writeBuffer(xe,0,pe),xe},O=new Float32Array(d.block("pos")),Z=new Float32Array(d.block("cov3d")),E=this.kind==="sorted_3dgs"?new Float32Array(d.block("opacity")):null,H=new Float32Array(G*10);for(let W=0;W<G;W++)H[W*10]=O[W*3],H[W*10+1]=O[W*3+1],H[W*10+2]=O[W*3+2],H[W*10+3]=E?E[W]:1,H.set(Z.subarray(W*6,W*6+6),W*10+4);const ne=U("bench gauss",H),se=U("bench sh",d.block("sh"));this.paramsBuf=M("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=w.float32Blend?"rgba32float":"rgba16float",this.wScale=w.float32Blend?1:1/1024;const C=new Uint32Array(this.params),Y=new Float32Array(this.params);C[0]=G,C[1]=B.sh_degree,Y[2]=w.cutoffMult??B.cutoff_mult??1,Y[3]=this.wScale,s.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=M("bench sort info",64,Ve|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=M("bench draw args",16,Ve|GPUBufferUsage.INDIRECT),s.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=M("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const ae=M("bench splats",G*xs),R=s.createShaderModule({label:"bench indirect",code:sn});this.indirectPipe=s.createComputePipeline({layout:"auto",compute:{module:R,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=s.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const X=GPUShaderStage.COMPUTE,F=(W,N=X)=>s.createBindGroupLayout({entries:W.map((pe,xe)=>({binding:xe,visibility:N,buffer:{type:pe}}))}),q=(W,N)=>({binding:W,resource:{buffer:N}}),ue=F(["uniform","uniform"]),te=s.createBindGroup({layout:ue,entries:[q(0,b),q(1,this.paramsBuf)]});let oe,L;if(this.kind==="sorted_3dgs"){this.sorter=new ms(s,G,this.info);const W=F(["read-only-storage","read-only-storage","storage"]),N=F(["storage","storage","storage"]),pe=s.createShaderModule({label:"gs3d_cull",code:jt+ps});this.cullPipe=s.createComputePipeline({label:"gs3d_cull",layout:s.createPipelineLayout({bindGroupLayouts:[ue,W,N]}),compute:{module:pe,entryPoint:"cull"}}),this.computeBgs=[te,s.createBindGroup({layout:W,entries:[q(0,ne),q(1,se),q(2,ae)]}),s.createBindGroup({layout:N,entries:[q(0,this.info),q(1,this.sorter.depthsIn),q(2,this.sorter.indicesIn)]})],L=this.sorter.indicesOut,oe=M("bench weights stub",16,Ve)}else{const W=new Float32Array(d.block("scale")),N=new Float32Array(d.block("rot")),pe=new Float32Array(G*7);for(let m=0;m<G;m++)pe.set(W.subarray(m*3,m*3+3),m*7),pe.set(N.subarray(m*4,m*4+4),m*7+3);const xe=U("bench mgs attr",pe),fe=(m,x,e)=>{const u=new Float32Array(m.length);for(let i=0;i<x;i++)for(let a=0;a<e;a++)u[a*x+i]=m[i*e+a];return u},J=B.mlp.flatMap(m=>[fe(new Float32Array(d.block(`${m.name}.weight`)),m.out_dim,m.in_dim),new Float32Array(d.block(`${m.name}.bias`))]),de=B.mlp.map(m=>`${m.in_dim}>${m.out_dim}`).join(",");if(de!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${de}`);const _e=new Float32Array(J.reduce((m,x)=>m+x.length,0));let ye=0;for(const m of J)_e.set(m,ye),ye+=m.length;const be=U("bench mgs mlp",_e),we=M("bench mgs vis",G*4),v=M("bench mgs mlp out",G*8);oe=M("bench mgs weights",G*4),this.countCopy=M("bench mgs count",16,Ve);const z=F(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),h=F(["read-only-storage","storage","storage","storage","storage"]),t=F(["storage"]),l=s.createShaderModule({label:"mgs_compute",code:jt+hs}),o=s.createPipelineLayout({bindGroupLayouts:[ue,z,h,t]}),f=s.createPipelineLayout({bindGroupLayouts:[ue,z,h]}),g=(m,x)=>s.createComputePipeline({label:`mgs_${m}`,layout:x,compute:{module:l,entryPoint:m}});this.cullPipe=g("cull",o),this.mlpPipe=g("mlp_coop",f),this.mlpAllPipe=g("mlp_all_coop",f),this.prepPipe=g("prep",f),this.computeBgs=[te,s.createBindGroup({layout:z,entries:[q(0,ne),q(1,se),q(2,xe),q(3,be)]}),s.createBindGroup({layout:h,entries:[q(0,this.countCopy),q(1,we),q(2,v),q(3,ae),q(4,oe)]})],this.cullInfoBg=s.createBindGroup({layout:t,entries:[q(0,this.info)]}),L=M("bench order stub",16,Ve)}const ie=GPUShaderStage.VERTEX,V=s.createBindGroupLayout({entries:[{binding:0,visibility:ie,buffer:{type:"read-only-storage"}},{binding:1,visibility:ie,buffer:{type:"read-only-storage"}},{binding:2,visibility:ie,buffer:{type:"uniform"}},{binding:3,visibility:ie,buffer:{type:"read-only-storage"}}]});this.rasterBg=s.createBindGroup({layout:V,entries:[q(0,ae),q(1,L),q(2,this.vpBuf),q(3,oe)]});const $=s.createShaderModule({label:"gs_raster",code:_s}),le=W=>({operation:"add",srcFactor:"one",dstFactor:W}),ce=this.kind==="sorted_3dgs";if(this.rasterPipe=s.createRenderPipeline({label:ce?"gs_raster over":"gs_raster wsum",layout:s.createPipelineLayout({bindGroupLayouts:[V]}),vertex:{module:$,entryPoint:ce?"vs_main":"vs_wsum"},fragment:ce?{module:$,entryPoint:"fs_over",targets:[{format:y,blend:{color:le("one-minus-src-alpha"),alpha:le("one-minus-src-alpha")}}]}:{module:$,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:le("one"),alpha:le("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!ce){this.eps=M("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),s.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const W=GPUShaderStage.FRAGMENT;this.resolveBgl=s.createBindGroupLayout({entries:[{binding:0,visibility:W,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:W,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:W,buffer:{type:"uniform"}}]});const N=s.createShaderModule({label:"mgs_resolve",code:gs});this.resolvePipe=s.createRenderPipeline({layout:s.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:N,entryPoint:"vs_full"},fragment:{module:N,entryPoint:"fs_resolve",targets:[{format:y}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(s=32768){if(!this.mlpAllPipe)return;const d=new Uint32Array(this.params);for(let b=0;b<this.n;b+=s){d[4]=b,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const y=this.device.createCommandEncoder(),w=y.beginComputePass();w.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((B,G)=>w.setBindGroup(G,B)),w.dispatchWorkgroups(Math.ceil(Math.min(s,this.n-b)/Yt)),w.end(),this.device.queue.submit([y.finish()]),await this.device.queue.onSubmittedWorkDone()}d[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(s,d){var y,w;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===s&&this.accTex.height===d)return;(y=this.accTex)==null||y.destroy(),(w=this.trTex)==null||w.destroy();const b=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[s,d],format:this.accFormat,usage:b}),this.trTex=this.device.createTexture({label:"mgs T",size:[s,d],format:"r16float",usage:b}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(s,d,b,y){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([b,y,0,0])),this.ensureTargets(b,y);const w=(M,U)=>{const O=s.beginComputePass();O.setPipeline(M),this.computeBgs.forEach((Z,E)=>O.setBindGroup(E,Z)),!U&&this.cullInfoBg&&O.setBindGroup(3,this.cullInfoBg),U?O.dispatchWorkgroupsIndirect(this.info,4):O.dispatchWorkgroups(Math.ceil(this.n/Yt)),O.end()};s.clearBuffer(this.info,0,4),w(this.cullPipe,!1);{const M=s.beginComputePass();M.setPipeline(this.indirectPipe),M.setBindGroup(0,this.indirectBg),M.dispatchWorkgroups(1),M.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(s);const M=s.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});M.setPipeline(this.rasterPipe),M.setBindGroup(0,this.rasterBg),M.drawIndirect(this.drawArgs,0),M.end();return}s.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||w(this.mlpPipe,!0),w(this.prepPipe,!0);const B=s.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});B.setPipeline(this.rasterPipe),B.setBindGroup(0,this.rasterBg),B.drawIndirect(this.drawArgs,0),B.end();const G=s.beginRenderPass({colorAttachments:[{view:d,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});G.setPipeline(this.resolvePipe),G.setBindGroup(0,this.resolveBg),G.draw(3),G.end()}destroy(){var s,d,b;for(const y of this.owned)y.destroy();(s=this.sorter)==null||s.destroy(),(d=this.accTex)==null||d.destroy(),(b=this.trTex)==null||b.destroy()}}const lt="rgba8unorm",Vt="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",Qe=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],ws=r=>new Promise(s=>setTimeout(s,r)),Xt=()=>new Promise(r=>setTimeout(r,0));function bs(r){const s=new TextDecoder().decode(new Uint8Array(r,0,8));if(s!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${s}')`);const d=new DataView(r);let b=null,y=null;for(let w=0;w<d.getUint32(8,!0);w++){const B=12+w*20,G=d.getUint32(B,!0),M=Number(d.getBigUint64(B+4,!0)),U=Number(d.getBigUint64(B+12,!0));G===0||G===1||G===5?b=r.slice(M,M+U):(G===3||G===4)&&(y=r.slice(M,M+U))}if(!b)throw new Error("bundle has no point cloud chunk");return{pc:b,atlas:y}}async function Kt(r,s){var O;const d=await fetch(r);if(!d.ok)throw new Error(`${r}: HTTP ${d.status}`);const b=Number(d.headers.get("content-length"))||0,y=(O=d.body)==null?void 0:O.getReader();if(!y)return d.arrayBuffer();const w=[];let B=0,G=0;for(;;){const{done:Z,value:E}=await y.read();if(Z)break;w.push(E),B+=E.byteLength,B-G>2<<20&&(G=B,s(B/2**20,b?b/2**20:null))}const M=new Uint8Array(B);let U=0;for(const Z of w)M.set(Z,U),U+=Z.byteLength;return M.buffer}function vt(r,s,d=new Set,b=0){if(!(!r||typeof r!="object"||d.has(r)||b>2)){d.add(r);for(const y of Object.values(r))s.has(y)||(y instanceof GPUBuffer||y instanceof GPUTexture?y.destroy():Array.isArray(y)?y.forEach(w=>vt(w,s,d,b+1)):y&&typeof y=="object"&&Object.getPrototypeOf(y)===Object.prototype&&vt(y,s,d,b+1))}}async function vs(r,s,d,b,y){const w=new URLSearchParams(location.search),B=w.get("scene")??"garden",G=(w.get("assets")??`${Vt}/bench/${B}`).replace(/\/$/,""),M=d.features.has("texture-compression-bc"),U=d.features.has("texture-compression-astc"),O=w.get("bitymi")??`${Vt}/mip_360/${B}_e3rd${M||!U?"":"_astc"}.bitymi`,Z=d.features.has("float32-blendable"),E=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),H=w.get("byid");let ne=H!==null?H==="1":!E,se=w.get("legacy")==="1";s.configure({device:d,format:lt,alphaMode:"opaque"});const C=new xt(r,d),Y=new Cn(C),ae=document.getElementById("bench-panel"),R=e=>document.getElementById(e),X=e=>{R("status").textContent=e},F=await(await fetch(`${G}/manifest.json`)).json(),q=await An(`${G}/${F.cameras}`),ue=await(await fetch(`${G}/${F.cameras}`)).json(),[te,oe]=F.resolution,L=2*Math.atan(oe/(2*ue[0].fy));C.setFov(L),C.set_preset(q[0]),Y.resetToCamera();const ie=R("method");for(const e of Qe)ie.add(new Option(e.label,e.id));const V=b.info;R("device").textContent=`${V.vendor||"?"} ${V.architecture||""} ${V.device||V.description||""}`.trim()+` · BC7 ${M?"✓":"✗"} ASTC ${U?"✓":"✗"} · float32-blend ${Z?"✓":"✗"}`;let $=null,le=!1,ce=null;async function W(e){const u=performance.now(),i=(_,p)=>X(`${e.label}: downloading ${_.toFixed(0)}${p?` / ${p.toFixed(0)}`:""} MB`);if(e.asset==="bitymi"){const _=ce??(ce=await Kt(O,i)),p=e.id==="bitymi_oct";X(`${e.label}: parsing`);const{pc:S,atlas:T}=bs(_),k=await jn(new File([S],"bundle.ply"),d);let D=null;T&&(D=Hn(d,Nn(T),!0));const A=new ds(k,d,lt,C.uniform_buffer,y,D,{fetchById:ne,octBound:p,acc16:!1});se&&A.setLegacyRenderer(!0),A.setAtlasEnabled(e.id!=="bitymi_noatlas");let I=0,K=0;const ee=D?D.meta.format===3||D.meta.format===8||D.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:e,prims:k.num_points,downloadBytes:_.byteLength,gs:A,oct:p,detail:`atlas ${e.id==="bitymi_noatlas"?"OFF (diagnostic)":ee} · fragment inputs ${ne?"fetch-by-id":"varyings"} · ${se?"LEGACY renderer":"current renderer"}${p?" · octagon bound":""} · ${(performance.now()-u).toFixed(0)} ms load`,render(Q,re,me,ge){(me!==I||ge!==K)&&(Jn(me,ge,d,A.render_settings_buffer),I=me,K=ge),A.frame(Q,re,!1)},destroy(){k.surfel_buffer.destroy(),k.sv_params_buffer.destroy(),D&&(D.texture.destroy(),D.rectsBuffer.destroy(),D.texParamsBuffer.destroy()),vt(A,new Set([C.uniform_buffer]))}}}const a=await Kt(`${G}/${F.methods[e.asset].file}`,i);X(`${e.label}: uploading`);const n=new ys(d,fs(a),C.uniform_buffer,lt,{float32Blend:Z});return{def:e,prims:n.n,downloadBytes:a.byteLength,baseline:n,detail:`${n.label}${e.asset==="mobilegs"?` · shipped model ${(F.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(_,p,S,T)=>n.frame(_,p,S,T),destroy:()=>n.destroy()}}async function N(e){var i;const u=($==null?void 0:$.gs)&&e.asset==="bitymi"&&$.oct===(e.id==="bitymi_oct");if($&&$.def.asset===e.asset&&($.baseline||u)?($={...$,def:e},(i=$.gs)==null||i.setAtlasEnabled(e.id!=="bitymi_noatlas")):($==null||$.destroy(),$=null,await d.queue.onSubmittedWorkDone(),$=await W(e)),$.baseline&&$.baseline.kind==="sortfree_weighted"){const a=e.id==="mobilegs_frozen";a&&(C.set_preset(q[0]),X("Mobile-GS: evaluating the MLP once for all Gaussians"),await $.baseline.computeAllMlp()),$.baseline.freezeMlp=a}return R("info").textContent=`${$.def.label}: ${$.prims.toLocaleString()} primitives · ${($.downloadBytes/2**20).toFixed(1)} MB download · ${$.detail}`,X("ready"),$}ie.onchange=async()=>{if(!(le||_e)){le=!0;try{await N(Qe.find(e=>e.id===ie.value))}catch(e){X(`load failed: ${e}`),console.error(e)}finally{le=!1}}};const pe=R("byid"),xe=R("legacy");pe.checked=ne,xe.checked=se;const fe=async()=>{if(le||_e){pe.checked=ne,xe.checked=se;return}if(ne=pe.checked,se=xe.checked,($==null?void 0:$.def.id)==="bitymi"){le=!0;try{$.destroy(),$=null,await d.queue.onSubmittedWorkDone(),await N(Qe[0])}catch(e){X(`load failed: ${e}`),console.error(e)}finally{le=!1}}};pe.onchange=fe,xe.onchange=fe;let J=0;const de=e=>{J=(e+q.length)%q.length,C.set_preset(q[J]),Y.resetToCamera(),R("view").textContent=`${J+1}/${q.length}`};R("prev").onclick=()=>de(J-1),R("next").onclick=()=>de(J+1);let _e=!1,ye=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(ye=!0)});const be=()=>({warmupS:Number(R("warmup").value),measureS:Number(R("measure").value),minFrames:Number(R("minframes").value),maxS:Number(R("maxs").value),cooldownS:Number(R("cooldown").value),rounds:Number(R("rounds").value),frozen:R("frozen").checked,diag:R("diag").checked});async function we(e,u,i){const a=d.createTexture({size:[te,oe],format:lt,usage:GPUTextureUsage.RENDER_ATTACHMENT}),n=a.createView();C.setRenderSize(te,oe),C.setFov(L);let c=0;const _=async k=>{const D=performance.now();for(let A=0;A<k;A++){C.set_preset(q[c++%q.length]);const I=d.createCommandEncoder();e.render(I,n,te,oe),d.queue.submit([I.finish()])}return await d.queue.onSubmittedWorkDone(),performance.now()-D};let p=1;const S=(k,D)=>{p=Math.max(1,Math.min(60,Math.round(D*250/Math.max(k,1))))},T=`${e.def.label} · round ${u+1}`;ye=!1;try{let k=0,D=0;for(;k<i.warmupS*1e3||D<3;){const ee=p,Q=await _(ee);k+=Q,D+=ee,S(Q,ee),X(`${T}: warmup ${(k/1e3).toFixed(1)}/${i.warmupS} s`),await Xt()}let A=0,I=0;const K=[];for(;(A<i.measureS*1e3||I<i.minFrames)&&A<i.maxS*1e3;){const ee=p,Q=await _(ee);A+=Q,I+=ee,K.push(+(Q/ee).toFixed(3)),S(Q,ee),X(`${T}: ${(1e3*I/A).toFixed(1)} FPS · ${I} frames · ${(A/1e3).toFixed(1)} s`),await Xt()}return{round:u,frames:I,ms:A,fps:1e3*I/A,chunkMsPerFrame:K,interrupted:ye}}finally{a.destroy(),C.clearRenderSize(),C.setFov(L),de(J)}}let v=null;function z(e,u){const i=e.get("bitymi"),a=i&&i.length?i.reduce((c,_)=>c+_.frames,0)/i.reduce((c,_)=>c+_.ms,0)*1e3:0,n=Qe.filter(c=>e.has(c.id)).map(c=>{const _=e.get(c.id),p=_.length?_.reduce((T,k)=>T+k.frames,0)/_.reduce((T,k)=>T+k.ms,0)*1e3:0,S=u.get(c.id);return`<tr><td>${c.label}</td><td>${S?S.prims.toLocaleString():""}</td><td>${S?(S.bytes/2**20).toFixed(0):""}</td><td>${_.map(T=>T.fps.toFixed(1)+(T.interrupted?"⚠":"")).join(" / ")}</td><td><b>${p?p.toFixed(1):""}</b></td><td>${p?(1e3/p).toFixed(1):""}</td><td>${a&&p&&c.id!=="bitymi"?(a/p).toFixed(1)+"×":""}</td></tr>`}).join("");R("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${n}</table>`}async function h(){var p;if(_e||le)return;_e=!0;const e=be(),u=R("benchall");u.disabled=!0,ie.disabled=!0;let i=null;try{i=await((p=navigator.wakeLock)==null?void 0:p.request("screen"))}catch{}const a=Qe.filter(S=>(e.frozen||S.id!=="mobilegs_frozen")&&(e.diag||!S.id.startsWith("bitymi_"))),n=new Map,c=new Map,_=new Date().toISOString();try{let S=!0;for(let T=0;T<e.rounds;T++){const k=T%2===0?a:[...a].reverse();for(const D of k){const A=await N(D);if(c.set(D.id,{prims:A.prims,bytes:A.downloadBytes,detail:A.detail}),!S&&e.cooldownS>0)for(let K=e.cooldownS;K>0;K--)X(`cooldown ${K} s (next: ${D.label})`),await ws(1e3);S=!1;const I=await we(A,T,e);n.has(D.id)||n.set(D.id,[]),n.get(D.id).push(I),z(n,c)}}v={kind:"bitymi-mobile-bench",version:1,scene:B,started:_,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:V.vendor,architecture:V.architecture,device:V.device,description:V.description},features:{bc:M,astc:U,float32Blendable:Z,timestampQuery:d.features.has("timestamp-query")},resolution:[te,oe],fovY:L,cameras:q.length,assets:G,bitymiUrl:O,bitymiVariant:{fetchById:ne,legacy:se},protocol:{...e,order:a.map(T=>T.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm"},methods:a.map(T=>({id:T.id,label:T.label,note:T.note,...c.get(T.id),fps:(()=>{const k=n.get(T.id)??[],D=k.reduce((A,I)=>A+I.ms,0);return D?1e3*k.reduce((A,I)=>A+I.frames,0)/D:null})(),rounds:n.get(T.id)??[]}))},X(`done · ${a.length} methods × ${e.rounds} rounds`),R("summary").value=t(v),R("export").style.display=""}catch(S){X(`bench failed: ${S}`),console.error(S)}finally{try{await(i==null?void 0:i.release())}catch{}u.disabled=!1,ie.disabled=!1,_e=!1,ie.value=($==null?void 0:$.def.id)??"bitymi"}}function t(e){var _,p,S,T;const u=(_=e.methods.find(k=>k.id==="bitymi"))==null?void 0:_.fps,i=[e.adapter.vendor,e.adapter.architecture,e.adapter.device||e.adapter.description].filter(Boolean).join(" ")||"unknown GPU",a=(((p=e.userAgent.match(/\(([^)]*)\)/))==null?void 0:p[1])??"")+" "+(((S=e.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:S[0])??""),n=e.protocol;return[`**${e.scene} render benchmark** · ${i} · ${a.trim()}`,`${e.resolution[0]}×${e.resolution[1]}, ${e.cameras} test views · ${n.rounds} rounds mirrored · warmup ${n.warmupS} s · measure ≥${n.measureS} s / ${n.minFrames} frames · cooldown ${n.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...e.methods.map(k=>{var D;return`| ${k.label} | ${((D=k.prims)==null?void 0:D.toLocaleString())??""} | ${k.bytes?(k.bytes/2**20).toFixed(0):""} | ${k.rounds.map(A=>A.fps.toFixed(1)+(A.interrupted?" (tab hidden)":"")).join(" / ")} | ${k.fps?k.fps.toFixed(1):""} | ${k.fps?(1e3/k.fps).toFixed(1):""} | ${!k.id.startsWith("bitymi")&&u&&k.fps?(u/k.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${((T=e.methods.find(k=>k.id==="bitymi"))==null?void 0:T.detail)??""}. Mobile-GS blend target: ${e.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}const l=async(e,u)=>{try{await navigator.clipboard.writeText(e)}catch{const i=R("summary");i.value=e,i.select(),document.execCommand("copy")}X(`${u} copied`)};R("benchall").onclick=()=>h(),R("copytable").onclick=()=>{v&&l(t(v),"table")},R("copy").onclick=()=>{v&&l(JSON.stringify(v,null,1),"JSON")},R("download").onclick=()=>{if(!v)return;const e=document.createElement("a");e.href=URL.createObjectURL(new Blob([JSON.stringify(v,null,1)],{type:"application/json"})),e.download=`bench_${B}_${(V.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,e.click()};const o=()=>{r.width=Math.max(1,Math.round(r.clientWidth)),r.height=Math.max(1,Math.round(r.clientHeight)),C.on_update_canvas()};new ResizeObserver(o).observe(r),o();let f=performance.now(),g=0,m=Promise.resolve();async function x(){const e=performance.now(),u=Math.min(.1,(e-f)/1e3);if(f=e,!_e&&$&&!le){Y.update(u),await m;const i=$;if(!i||_e||le){requestAnimationFrame(x);return}const a=performance.now(),n=d.createCommandEncoder();i.render(n,s.getCurrentTexture().createView(),r.width,r.height),d.queue.submit([n.finish()]),m=d.queue.onSubmittedWorkDone().then(()=>{const c=performance.now()-a;g=g?.9*g+.1*c:c,R("live").textContent=`${(1e3/g).toFixed(0)} FPS live (${r.width}×${r.height}, vsync-capped)`})}requestAnimationFrame(x)}requestAnimationFrame(x),ae.style.display="",ie.value="bitymi",le=!0;try{await N(Qe[0])}catch(e){X(`load failed: ${e}`),console.error(e)}finally{le=!1}}(async()=>{const r=w=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${w}</p>`)};if(navigator.gpu===void 0)return r("WebGPU is not supported in this browser.");const s=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(s===null)return r("No WebGPU adapter available.");const d=[];for(const w of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])s.features.has(w)&&d.push(w);if(s.limits.maxStorageBuffersPerShaderStage<10)return r(`This GPU exposes ${s.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const b=await s.requestDevice({requiredFeatures:d,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:s.limits.maxComputeWorkgroupStorageSize,maxBufferSize:s.limits.maxBufferSize,maxStorageBufferBindingSize:s.limits.maxStorageBufferBindingSize}});b.lost.then(w=>r(`GPU device lost: ${w.message}`)),b.addEventListener("uncapturederror",w=>{var B;return console.error("[bench] WebGPU error:",((B=w.error)==null?void 0:B.message)??w.error)});const y=document.querySelector("#webgpu-canvas");await vs(y,y.getContext("webgpu"),b,s,d)})();
