var dn=Object.defineProperty;var fn=(r,s,f)=>s in r?dn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[s]=f;var P=(r,s,f)=>(fn(r,typeof s!="symbol"?s+"":s,f),f);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))b(y);new MutationObserver(y=>{for(const w of y)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&b(S)}).observe(document,{childList:!0,subtree:!0});function f(y){const w={};return y.integrity&&(w.integrity=y.integrity),y.referrerPolicy&&(w.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?w.credentials="include":y.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function b(y){if(y.ep)return;y.ep=!0;const w=f(y);fetch(y.href,w)}})();function pn(r,s){return class extends r{constructor(...f){super(...f),s(this)}}}const hn=pn(Array,r=>r.fill(0));let pe=1e-6;function _n(r){function s(p=0,m=0){const x=new r(2);return p!==void 0&&(x[0]=p,m!==void 0&&(x[1]=m)),x}const f=s;function b(p,m,x){const e=x??new r(2);return e[0]=p,e[1]=m,e}function y(p,m){const x=m??new r(2);return x[0]=Math.ceil(p[0]),x[1]=Math.ceil(p[1]),x}function w(p,m){const x=m??new r(2);return x[0]=Math.floor(p[0]),x[1]=Math.floor(p[1]),x}function S(p,m){const x=m??new r(2);return x[0]=Math.round(p[0]),x[1]=Math.round(p[1]),x}function T(p,m=0,x=1,e){const u=e??new r(2);return u[0]=Math.min(x,Math.max(m,p[0])),u[1]=Math.min(x,Math.max(m,p[1])),u}function G(p,m,x){const e=x??new r(2);return e[0]=p[0]+m[0],e[1]=p[1]+m[1],e}function E(p,m,x,e){const u=e??new r(2);return u[0]=p[0]+m[0]*x,u[1]=p[1]+m[1]*x,u}function I(p,m){const x=p[0],e=p[1],u=m[0],i=m[1],o=Math.sqrt(x*x+e*e),n=Math.sqrt(u*u+i*i),l=o*n,g=l&&te(p,m)/l;return Math.acos(g)}function $(p,m,x){const e=x??new r(2);return e[0]=p[0]-m[0],e[1]=p[1]-m[1],e}const A=$;function O(p,m){return Math.abs(p[0]-m[0])<pe&&Math.abs(p[1]-m[1])<pe}function ne(p,m){return p[0]===m[0]&&p[1]===m[1]}function ae(p,m,x,e){const u=e??new r(2);return u[0]=p[0]+x*(m[0]-p[0]),u[1]=p[1]+x*(m[1]-p[1]),u}function U(p,m,x,e){const u=e??new r(2);return u[0]=p[0]+x[0]*(m[0]-p[0]),u[1]=p[1]+x[1]*(m[1]-p[1]),u}function F(p,m,x){const e=x??new r(2);return e[0]=Math.max(p[0],m[0]),e[1]=Math.max(p[1],m[1]),e}function ee(p,m,x){const e=x??new r(2);return e[0]=Math.min(p[0],m[0]),e[1]=Math.min(p[1],m[1]),e}function j(p,m,x){const e=x??new r(2);return e[0]=p[0]*m,e[1]=p[1]*m,e}const se=j;function q(p,m,x){const e=x??new r(2);return e[0]=p[0]/m,e[1]=p[1]/m,e}function N(p,m){const x=m??new r(2);return x[0]=1/p[0],x[1]=1/p[1],x}const oe=N;function Y(p,m,x){const e=x??new r(3),u=p[0]*m[1]-p[1]*m[0];return e[0]=0,e[1]=0,e[2]=u,e}function te(p,m){return p[0]*m[0]+p[1]*m[1]}function D(p){const m=p[0],x=p[1];return Math.sqrt(m*m+x*x)}const J=D;function V(p){const m=p[0],x=p[1];return m*m+x*x}const ue=V;function fe(p,m){const x=p[0]-m[0],e=p[1]-m[1];return Math.sqrt(x*x+e*e)}const ce=fe;function C(p,m){const x=p[0]-m[0],e=p[1]-m[1];return x*x+e*e}const Z=C;function he(p,m){const x=m??new r(2),e=p[0],u=p[1],i=Math.sqrt(e*e+u*u);return i>1e-5?(x[0]=e/i,x[1]=u/i):(x[0]=0,x[1]=0),x}function ye(p,m){const x=m??new r(2);return x[0]=-p[0],x[1]=-p[1],x}function ie(p,m){const x=m??new r(2);return x[0]=p[0],x[1]=p[1],x}const X=ie;function de(p,m,x){const e=x??new r(2);return e[0]=p[0]*m[0],e[1]=p[1]*m[1],e}const _e=de;function we(p,m,x){const e=x??new r(2);return e[0]=p[0]/m[0],e[1]=p[1]/m[1],e}const be=we;function xe(p=1,m){const x=m??new r(2),e=Math.random()*2*Math.PI;return x[0]=Math.cos(e)*p,x[1]=Math.sin(e)*p,x}function v(p){const m=p??new r(2);return m[0]=0,m[1]=0,m}function M(p,m,x){const e=x??new r(2),u=p[0],i=p[1];return e[0]=u*m[0]+i*m[4]+m[12],e[1]=u*m[1]+i*m[5]+m[13],e}function h(p,m,x){const e=x??new r(2),u=p[0],i=p[1];return e[0]=m[0]*u+m[4]*i+m[8],e[1]=m[1]*u+m[5]*i+m[9],e}function t(p,m,x,e){const u=e??new r(2),i=p[0]-m[0],o=p[1]-m[1],n=Math.sin(x),l=Math.cos(x);return u[0]=i*l-o*n+m[0],u[1]=i*n+o*l+m[1],u}function c(p,m,x){const e=x??new r(2);return he(p,e),j(e,m,e)}function a(p,m,x){const e=x??new r(2);return D(p)>m?c(p,m,e):ie(p,e)}function d(p,m,x){const e=x??new r(2);return ae(p,m,.5,e)}return{create:s,fromValues:f,set:b,ceil:y,floor:w,round:S,clamp:T,add:G,addScaled:E,angle:I,subtract:$,sub:A,equalsApproximately:O,equals:ne,lerp:ae,lerpV:U,max:F,min:ee,mulScalar:j,scale:se,divScalar:q,inverse:N,invert:oe,cross:Y,dot:te,length:D,len:J,lengthSq:V,lenSq:ue,distance:fe,dist:ce,distanceSq:C,distSq:Z,normalize:he,negate:ye,copy:ie,clone:X,multiply:de,mul:_e,divide:we,div:be,random:xe,zero:v,transformMat4:M,transformMat3:h,rotate:t,setLength:c,truncate:a,midpoint:d}}const zt=new Map;function Kt(r){let s=zt.get(r);return s||(s=_n(r),zt.set(r,s)),s}function gn(r){function s(n,l,g){const _=new r(3);return n!==void 0&&(_[0]=n,l!==void 0&&(_[1]=l,g!==void 0&&(_[2]=g))),_}const f=s;function b(n,l,g,_){const B=_??new r(3);return B[0]=n,B[1]=l,B[2]=g,B}function y(n,l){const g=l??new r(3);return g[0]=Math.ceil(n[0]),g[1]=Math.ceil(n[1]),g[2]=Math.ceil(n[2]),g}function w(n,l){const g=l??new r(3);return g[0]=Math.floor(n[0]),g[1]=Math.floor(n[1]),g[2]=Math.floor(n[2]),g}function S(n,l){const g=l??new r(3);return g[0]=Math.round(n[0]),g[1]=Math.round(n[1]),g[2]=Math.round(n[2]),g}function T(n,l=0,g=1,_){const B=_??new r(3);return B[0]=Math.min(g,Math.max(l,n[0])),B[1]=Math.min(g,Math.max(l,n[1])),B[2]=Math.min(g,Math.max(l,n[2])),B}function G(n,l,g){const _=g??new r(3);return _[0]=n[0]+l[0],_[1]=n[1]+l[1],_[2]=n[2]+l[2],_}function E(n,l,g,_){const B=_??new r(3);return B[0]=n[0]+l[0]*g,B[1]=n[1]+l[1]*g,B[2]=n[2]+l[2]*g,B}function I(n,l){const g=n[0],_=n[1],B=n[2],k=l[0],z=l[1],W=l[2],R=Math.sqrt(g*g+_*_+B*B),L=Math.sqrt(k*k+z*z+W*W),Q=R*L,le=Q&&te(n,l)/Q;return Math.acos(le)}function $(n,l,g){const _=g??new r(3);return _[0]=n[0]-l[0],_[1]=n[1]-l[1],_[2]=n[2]-l[2],_}const A=$;function O(n,l){return Math.abs(n[0]-l[0])<pe&&Math.abs(n[1]-l[1])<pe&&Math.abs(n[2]-l[2])<pe}function ne(n,l){return n[0]===l[0]&&n[1]===l[1]&&n[2]===l[2]}function ae(n,l,g,_){const B=_??new r(3);return B[0]=n[0]+g*(l[0]-n[0]),B[1]=n[1]+g*(l[1]-n[1]),B[2]=n[2]+g*(l[2]-n[2]),B}function U(n,l,g,_){const B=_??new r(3);return B[0]=n[0]+g[0]*(l[0]-n[0]),B[1]=n[1]+g[1]*(l[1]-n[1]),B[2]=n[2]+g[2]*(l[2]-n[2]),B}function F(n,l,g){const _=g??new r(3);return _[0]=Math.max(n[0],l[0]),_[1]=Math.max(n[1],l[1]),_[2]=Math.max(n[2],l[2]),_}function ee(n,l,g){const _=g??new r(3);return _[0]=Math.min(n[0],l[0]),_[1]=Math.min(n[1],l[1]),_[2]=Math.min(n[2],l[2]),_}function j(n,l,g){const _=g??new r(3);return _[0]=n[0]*l,_[1]=n[1]*l,_[2]=n[2]*l,_}const se=j;function q(n,l,g){const _=g??new r(3);return _[0]=n[0]/l,_[1]=n[1]/l,_[2]=n[2]/l,_}function N(n,l){const g=l??new r(3);return g[0]=1/n[0],g[1]=1/n[1],g[2]=1/n[2],g}const oe=N;function Y(n,l,g){const _=g??new r(3),B=n[2]*l[0]-n[0]*l[2],k=n[0]*l[1]-n[1]*l[0];return _[0]=n[1]*l[2]-n[2]*l[1],_[1]=B,_[2]=k,_}function te(n,l){return n[0]*l[0]+n[1]*l[1]+n[2]*l[2]}function D(n){const l=n[0],g=n[1],_=n[2];return Math.sqrt(l*l+g*g+_*_)}const J=D;function V(n){const l=n[0],g=n[1],_=n[2];return l*l+g*g+_*_}const ue=V;function fe(n,l){const g=n[0]-l[0],_=n[1]-l[1],B=n[2]-l[2];return Math.sqrt(g*g+_*_+B*B)}const ce=fe;function C(n,l){const g=n[0]-l[0],_=n[1]-l[1],B=n[2]-l[2];return g*g+_*_+B*B}const Z=C;function he(n,l){const g=l??new r(3),_=n[0],B=n[1],k=n[2],z=Math.sqrt(_*_+B*B+k*k);return z>1e-5?(g[0]=_/z,g[1]=B/z,g[2]=k/z):(g[0]=0,g[1]=0,g[2]=0),g}function ye(n,l){const g=l??new r(3);return g[0]=-n[0],g[1]=-n[1],g[2]=-n[2],g}function ie(n,l){const g=l??new r(3);return g[0]=n[0],g[1]=n[1],g[2]=n[2],g}const X=ie;function de(n,l,g){const _=g??new r(3);return _[0]=n[0]*l[0],_[1]=n[1]*l[1],_[2]=n[2]*l[2],_}const _e=de;function we(n,l,g){const _=g??new r(3);return _[0]=n[0]/l[0],_[1]=n[1]/l[1],_[2]=n[2]/l[2],_}const be=we;function xe(n=1,l){const g=l??new r(3),_=Math.random()*2*Math.PI,B=Math.random()*2-1,k=Math.sqrt(1-B*B)*n;return g[0]=Math.cos(_)*k,g[1]=Math.sin(_)*k,g[2]=B*n,g}function v(n){const l=n??new r(3);return l[0]=0,l[1]=0,l[2]=0,l}function M(n,l,g){const _=g??new r(3),B=n[0],k=n[1],z=n[2],W=l[3]*B+l[7]*k+l[11]*z+l[15]||1;return _[0]=(l[0]*B+l[4]*k+l[8]*z+l[12])/W,_[1]=(l[1]*B+l[5]*k+l[9]*z+l[13])/W,_[2]=(l[2]*B+l[6]*k+l[10]*z+l[14])/W,_}function h(n,l,g){const _=g??new r(3),B=n[0],k=n[1],z=n[2];return _[0]=B*l[0*4+0]+k*l[1*4+0]+z*l[2*4+0],_[1]=B*l[0*4+1]+k*l[1*4+1]+z*l[2*4+1],_[2]=B*l[0*4+2]+k*l[1*4+2]+z*l[2*4+2],_}function t(n,l,g){const _=g??new r(3),B=n[0],k=n[1],z=n[2];return _[0]=B*l[0]+k*l[4]+z*l[8],_[1]=B*l[1]+k*l[5]+z*l[9],_[2]=B*l[2]+k*l[6]+z*l[10],_}function c(n,l,g){const _=g??new r(3),B=l[0],k=l[1],z=l[2],W=l[3]*2,R=n[0],L=n[1],Q=n[2],le=k*Q-z*L,K=z*R-B*Q,re=B*L-k*R;return _[0]=R+le*W+(k*re-z*K)*2,_[1]=L+K*W+(z*le-B*re)*2,_[2]=Q+re*W+(B*K-k*le)*2,_}function a(n,l){const g=l??new r(3);return g[0]=n[12],g[1]=n[13],g[2]=n[14],g}function d(n,l,g){const _=g??new r(3),B=l*4;return _[0]=n[B+0],_[1]=n[B+1],_[2]=n[B+2],_}function p(n,l){const g=l??new r(3),_=n[0],B=n[1],k=n[2],z=n[4],W=n[5],R=n[6],L=n[8],Q=n[9],le=n[10];return g[0]=Math.sqrt(_*_+B*B+k*k),g[1]=Math.sqrt(z*z+W*W+R*R),g[2]=Math.sqrt(L*L+Q*Q+le*le),g}function m(n,l,g,_){const B=_??new r(3),k=[],z=[];return k[0]=n[0]-l[0],k[1]=n[1]-l[1],k[2]=n[2]-l[2],z[0]=k[0],z[1]=k[1]*Math.cos(g)-k[2]*Math.sin(g),z[2]=k[1]*Math.sin(g)+k[2]*Math.cos(g),B[0]=z[0]+l[0],B[1]=z[1]+l[1],B[2]=z[2]+l[2],B}function x(n,l,g,_){const B=_??new r(3),k=[],z=[];return k[0]=n[0]-l[0],k[1]=n[1]-l[1],k[2]=n[2]-l[2],z[0]=k[2]*Math.sin(g)+k[0]*Math.cos(g),z[1]=k[1],z[2]=k[2]*Math.cos(g)-k[0]*Math.sin(g),B[0]=z[0]+l[0],B[1]=z[1]+l[1],B[2]=z[2]+l[2],B}function e(n,l,g,_){const B=_??new r(3),k=[],z=[];return k[0]=n[0]-l[0],k[1]=n[1]-l[1],k[2]=n[2]-l[2],z[0]=k[0]*Math.cos(g)-k[1]*Math.sin(g),z[1]=k[0]*Math.sin(g)+k[1]*Math.cos(g),z[2]=k[2],B[0]=z[0]+l[0],B[1]=z[1]+l[1],B[2]=z[2]+l[2],B}function u(n,l,g){const _=g??new r(3);return he(n,_),j(_,l,_)}function i(n,l,g){const _=g??new r(3);return D(n)>l?u(n,l,_):ie(n,_)}function o(n,l,g){const _=g??new r(3);return ae(n,l,.5,_)}return{create:s,fromValues:f,set:b,ceil:y,floor:w,round:S,clamp:T,add:G,addScaled:E,angle:I,subtract:$,sub:A,equalsApproximately:O,equals:ne,lerp:ae,lerpV:U,max:F,min:ee,mulScalar:j,scale:se,divScalar:q,inverse:N,invert:oe,cross:Y,dot:te,length:D,len:J,lengthSq:V,lenSq:ue,distance:fe,dist:ce,distanceSq:C,distSq:Z,normalize:he,negate:ye,copy:ie,clone:X,multiply:de,mul:_e,divide:we,div:be,random:xe,zero:v,transformMat4:M,transformMat4Upper3x3:h,transformMat3:t,transformQuat:c,getTranslation:a,getAxis:d,getScaling:p,rotateX:m,rotateY:x,rotateZ:e,setLength:u,truncate:i,midpoint:o}}const At=new Map;function _t(r){let s=At.get(r);return s||(s=gn(r),At.set(r,s)),s}function mn(r){const s=Kt(r),f=_t(r);function b(t,c,a,d,p,m,x,e,u){const i=new r(12);return i[3]=0,i[7]=0,i[11]=0,t!==void 0&&(i[0]=t,c!==void 0&&(i[1]=c,a!==void 0&&(i[2]=a,d!==void 0&&(i[4]=d,p!==void 0&&(i[5]=p,m!==void 0&&(i[6]=m,x!==void 0&&(i[8]=x,e!==void 0&&(i[9]=e,u!==void 0&&(i[10]=u))))))))),i}function y(t,c,a,d,p,m,x,e,u,i){const o=i??new r(12);return o[0]=t,o[1]=c,o[2]=a,o[3]=0,o[4]=d,o[5]=p,o[6]=m,o[7]=0,o[8]=x,o[9]=e,o[10]=u,o[11]=0,o}function w(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=0,a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=0,a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=0,a}function S(t,c){const a=c??new r(12),d=t[0],p=t[1],m=t[2],x=t[3],e=d+d,u=p+p,i=m+m,o=d*e,n=p*e,l=p*u,g=m*e,_=m*u,B=m*i,k=x*e,z=x*u,W=x*i;return a[0]=1-l-B,a[1]=n+W,a[2]=g-z,a[3]=0,a[4]=n-W,a[5]=1-o-B,a[6]=_+k,a[7]=0,a[8]=g+z,a[9]=_-k,a[10]=1-o-l,a[11]=0,a}function T(t,c){const a=c??new r(12);return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[4]=-t[4],a[5]=-t[5],a[6]=-t[6],a[8]=-t[8],a[9]=-t[9],a[10]=-t[10],a}function G(t,c,a){const d=a??new r(12);return d[0]=t[0]*c,d[1]=t[1]*c,d[2]=t[2]*c,d[4]=t[4]*c,d[5]=t[5]*c,d[6]=t[6]*c,d[8]=t[8]*c,d[9]=t[9]*c,d[10]=t[10]*c,d}const E=G;function I(t,c,a){const d=a??new r(12);return d[0]=t[0]+c[0],d[1]=t[1]+c[1],d[2]=t[2]+c[2],d[4]=t[4]+c[4],d[5]=t[5]+c[5],d[6]=t[6]+c[6],d[8]=t[8]+c[8],d[9]=t[9]+c[9],d[10]=t[10]+c[10],d}function $(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[8]=t[8],a[9]=t[9],a[10]=t[10],a}const A=$;function O(t,c){return Math.abs(t[0]-c[0])<pe&&Math.abs(t[1]-c[1])<pe&&Math.abs(t[2]-c[2])<pe&&Math.abs(t[4]-c[4])<pe&&Math.abs(t[5]-c[5])<pe&&Math.abs(t[6]-c[6])<pe&&Math.abs(t[8]-c[8])<pe&&Math.abs(t[9]-c[9])<pe&&Math.abs(t[10]-c[10])<pe}function ne(t,c){return t[0]===c[0]&&t[1]===c[1]&&t[2]===c[2]&&t[4]===c[4]&&t[5]===c[5]&&t[6]===c[6]&&t[8]===c[8]&&t[9]===c[9]&&t[10]===c[10]}function ae(t){const c=t??new r(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function U(t,c){const a=c??new r(12);if(a===t){let l;return l=t[1],t[1]=t[4],t[4]=l,l=t[2],t[2]=t[8],t[8]=l,l=t[6],t[6]=t[9],t[9]=l,a}const d=t[0*4+0],p=t[0*4+1],m=t[0*4+2],x=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],o=t[2*4+1],n=t[2*4+2];return a[0]=d,a[1]=x,a[2]=i,a[4]=p,a[5]=e,a[6]=o,a[8]=m,a[9]=u,a[10]=n,a}function F(t,c){const a=c??new r(12),d=t[0*4+0],p=t[0*4+1],m=t[0*4+2],x=t[1*4+0],e=t[1*4+1],u=t[1*4+2],i=t[2*4+0],o=t[2*4+1],n=t[2*4+2],l=n*e-u*o,g=-n*x+u*i,_=o*x-e*i,B=1/(d*l+p*g+m*_);return a[0]=l*B,a[1]=(-n*p+m*o)*B,a[2]=(u*p-m*e)*B,a[4]=g*B,a[5]=(n*d-m*i)*B,a[6]=(-u*d+m*x)*B,a[8]=_*B,a[9]=(-o*d+p*i)*B,a[10]=(e*d-p*x)*B,a}function ee(t){const c=t[0],a=t[0*4+1],d=t[0*4+2],p=t[1*4+0],m=t[1*4+1],x=t[1*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2];return c*(m*i-u*x)-p*(a*i-u*d)+e*(a*x-m*d)}const j=F;function se(t,c,a){const d=a??new r(12),p=t[0],m=t[1],x=t[2],e=t[4+0],u=t[4+1],i=t[4+2],o=t[8+0],n=t[8+1],l=t[8+2],g=c[0],_=c[1],B=c[2],k=c[4+0],z=c[4+1],W=c[4+2],R=c[8+0],L=c[8+1],Q=c[8+2];return d[0]=p*g+e*_+o*B,d[1]=m*g+u*_+n*B,d[2]=x*g+i*_+l*B,d[4]=p*k+e*z+o*W,d[5]=m*k+u*z+n*W,d[6]=x*k+i*z+l*W,d[8]=p*R+e*L+o*Q,d[9]=m*R+u*L+n*Q,d[10]=x*R+i*L+l*Q,d}const q=se;function N(t,c,a){const d=a??ae();return t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2],d[4]=t[4],d[5]=t[5],d[6]=t[6]),d[8]=c[0],d[9]=c[1],d[10]=1,d}function oe(t,c){const a=c??s.create();return a[0]=t[8],a[1]=t[9],a}function Y(t,c,a){const d=a??s.create(),p=c*4;return d[0]=t[p+0],d[1]=t[p+1],d}function te(t,c,a,d){const p=d===t?t:$(t,d),m=a*4;return p[m+0]=c[0],p[m+1]=c[1],p}function D(t,c){const a=c??s.create(),d=t[0],p=t[1],m=t[4],x=t[5];return a[0]=Math.sqrt(d*d+p*p),a[1]=Math.sqrt(m*m+x*x),a}function J(t,c){const a=c??f.create(),d=t[0],p=t[1],m=t[2],x=t[4],e=t[5],u=t[6],i=t[8],o=t[9],n=t[10];return a[0]=Math.sqrt(d*d+p*p+m*m),a[1]=Math.sqrt(x*x+e*e+u*u),a[2]=Math.sqrt(i*i+o*o+n*n),a}function V(t,c){const a=c??new r(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=t[0],a[9]=t[1],a[10]=1,a}function ue(t,c,a){const d=a??new r(12),p=c[0],m=c[1],x=t[0],e=t[1],u=t[2],i=t[1*4+0],o=t[1*4+1],n=t[1*4+2],l=t[2*4+0],g=t[2*4+1],_=t[2*4+2];return t!==d&&(d[0]=x,d[1]=e,d[2]=u,d[4]=i,d[5]=o,d[6]=n),d[8]=x*p+i*m+l,d[9]=e*p+o*m+g,d[10]=u*p+n*m+_,d}function fe(t,c){const a=c??new r(12),d=Math.cos(t),p=Math.sin(t);return a[0]=d,a[1]=p,a[2]=0,a[4]=-p,a[5]=d,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function ce(t,c,a){const d=a??new r(12),p=t[0*4+0],m=t[0*4+1],x=t[0*4+2],e=t[1*4+0],u=t[1*4+1],i=t[1*4+2],o=Math.cos(c),n=Math.sin(c);return d[0]=o*p+n*e,d[1]=o*m+n*u,d[2]=o*x+n*i,d[4]=o*e-n*p,d[5]=o*u-n*m,d[6]=o*i-n*x,t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function C(t,c){const a=c??new r(12),d=Math.cos(t),p=Math.sin(t);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=d,a[6]=p,a[8]=0,a[9]=-p,a[10]=d,a}function Z(t,c,a){const d=a??new r(12),p=t[4],m=t[5],x=t[6],e=t[8],u=t[9],i=t[10],o=Math.cos(c),n=Math.sin(c);return d[4]=o*p+n*e,d[5]=o*m+n*u,d[6]=o*x+n*i,d[8]=o*e-n*p,d[9]=o*u-n*m,d[10]=o*i-n*x,t!==d&&(d[0]=t[0],d[1]=t[1],d[2]=t[2]),d}function he(t,c){const a=c??new r(12),d=Math.cos(t),p=Math.sin(t);return a[0]=d,a[1]=0,a[2]=-p,a[4]=0,a[5]=1,a[6]=0,a[8]=p,a[9]=0,a[10]=d,a}function ye(t,c,a){const d=a??new r(12),p=t[0*4+0],m=t[0*4+1],x=t[0*4+2],e=t[2*4+0],u=t[2*4+1],i=t[2*4+2],o=Math.cos(c),n=Math.sin(c);return d[0]=o*p-n*e,d[1]=o*m-n*u,d[2]=o*x-n*i,d[8]=o*e+n*p,d[9]=o*u+n*m,d[10]=o*i+n*x,t!==d&&(d[4]=t[4],d[5]=t[5],d[6]=t[6]),d}const ie=fe,X=ce;function de(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=0,a[2]=0,a[4]=0,a[5]=t[1],a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function _e(t,c,a){const d=a??new r(12),p=c[0],m=c[1];return d[0]=p*t[0*4+0],d[1]=p*t[0*4+1],d[2]=p*t[0*4+2],d[4]=m*t[1*4+0],d[5]=m*t[1*4+1],d[6]=m*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function we(t,c){const a=c??new r(12);return a[0]=t[0],a[1]=0,a[2]=0,a[4]=0,a[5]=t[1],a[6]=0,a[8]=0,a[9]=0,a[10]=t[2],a}function be(t,c,a){const d=a??new r(12),p=c[0],m=c[1],x=c[2];return d[0]=p*t[0*4+0],d[1]=p*t[0*4+1],d[2]=p*t[0*4+2],d[4]=m*t[1*4+0],d[5]=m*t[1*4+1],d[6]=m*t[1*4+2],d[8]=x*t[2*4+0],d[9]=x*t[2*4+1],d[10]=x*t[2*4+2],d}function xe(t,c){const a=c??new r(12);return a[0]=t,a[1]=0,a[2]=0,a[4]=0,a[5]=t,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function v(t,c,a){const d=a??new r(12);return d[0]=c*t[0*4+0],d[1]=c*t[0*4+1],d[2]=c*t[0*4+2],d[4]=c*t[1*4+0],d[5]=c*t[1*4+1],d[6]=c*t[1*4+2],t!==d&&(d[8]=t[8],d[9]=t[9],d[10]=t[10]),d}function M(t,c){const a=c??new r(12);return a[0]=t,a[1]=0,a[2]=0,a[4]=0,a[5]=t,a[6]=0,a[8]=0,a[9]=0,a[10]=t,a}function h(t,c,a){const d=a??new r(12);return d[0]=c*t[0*4+0],d[1]=c*t[0*4+1],d[2]=c*t[0*4+2],d[4]=c*t[1*4+0],d[5]=c*t[1*4+1],d[6]=c*t[1*4+2],d[8]=c*t[2*4+0],d[9]=c*t[2*4+1],d[10]=c*t[2*4+2],d}return{add:I,clone:A,copy:$,create:b,determinant:ee,equals:ne,equalsApproximately:O,fromMat4:w,fromQuat:S,get3DScaling:J,getAxis:Y,getScaling:D,getTranslation:oe,identity:ae,inverse:F,invert:j,mul:q,mulScalar:E,multiply:se,multiplyScalar:G,negate:T,rotate:ce,rotateX:Z,rotateY:ye,rotateZ:X,rotation:fe,rotationX:C,rotationY:he,rotationZ:ie,scale:_e,scale3D:be,scaling:de,scaling3D:we,set:y,setAxis:te,setTranslation:N,translate:ue,translation:V,transpose:U,uniformScale:v,uniformScale3D:h,uniformScaling:xe,uniformScaling3D:M}}const Dt=new Map;function xn(r){let s=Dt.get(r);return s||(s=mn(r),Dt.set(r,s)),s}function yn(r){const s=_t(r);function f(e,u,i,o,n,l,g,_,B,k,z,W,R,L,Q,le){const K=new r(16);return e!==void 0&&(K[0]=e,u!==void 0&&(K[1]=u,i!==void 0&&(K[2]=i,o!==void 0&&(K[3]=o,n!==void 0&&(K[4]=n,l!==void 0&&(K[5]=l,g!==void 0&&(K[6]=g,_!==void 0&&(K[7]=_,B!==void 0&&(K[8]=B,k!==void 0&&(K[9]=k,z!==void 0&&(K[10]=z,W!==void 0&&(K[11]=W,R!==void 0&&(K[12]=R,L!==void 0&&(K[13]=L,Q!==void 0&&(K[14]=Q,le!==void 0&&(K[15]=le)))))))))))))))),K}function b(e,u,i,o,n,l,g,_,B,k,z,W,R,L,Q,le,K){const re=K??new r(16);return re[0]=e,re[1]=u,re[2]=i,re[3]=o,re[4]=n,re[5]=l,re[6]=g,re[7]=_,re[8]=B,re[9]=k,re[10]=z,re[11]=W,re[12]=R,re[13]=L,re[14]=Q,re[15]=le,re}function y(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function w(e,u){const i=u??new r(16),o=e[0],n=e[1],l=e[2],g=e[3],_=o+o,B=n+n,k=l+l,z=o*_,W=n*_,R=n*B,L=l*_,Q=l*B,le=l*k,K=g*_,re=g*B,me=g*k;return i[0]=1-R-le,i[1]=W+me,i[2]=L-re,i[3]=0,i[4]=W-me,i[5]=1-z-le,i[6]=Q+K,i[7]=0,i[8]=L+re,i[9]=Q-K,i[10]=1-z-R,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function S(e,u){const i=u??new r(16);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[3]=-e[3],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[7]=-e[7],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i[11]=-e[11],i[12]=-e[12],i[13]=-e[13],i[14]=-e[14],i[15]=-e[15],i}function T(e,u,i){const o=i??new r(16);return o[0]=e[0]+u[0],o[1]=e[1]+u[1],o[2]=e[2]+u[2],o[3]=e[3]+u[3],o[4]=e[4]+u[4],o[5]=e[5]+u[5],o[6]=e[6]+u[6],o[7]=e[7]+u[7],o[8]=e[8]+u[8],o[9]=e[9]+u[9],o[10]=e[10]+u[10],o[11]=e[11]+u[11],o[12]=e[12]+u[12],o[13]=e[13]+u[13],o[14]=e[14]+u[14],o[15]=e[15]+u[15],o}function G(e,u,i){const o=i??new r(16);return o[0]=e[0]*u,o[1]=e[1]*u,o[2]=e[2]*u,o[3]=e[3]*u,o[4]=e[4]*u,o[5]=e[5]*u,o[6]=e[6]*u,o[7]=e[7]*u,o[8]=e[8]*u,o[9]=e[9]*u,o[10]=e[10]*u,o[11]=e[11]*u,o[12]=e[12]*u,o[13]=e[13]*u,o[14]=e[14]*u,o[15]=e[15]*u,o}const E=G;function I(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],i}const $=I;function A(e,u){return Math.abs(e[0]-u[0])<pe&&Math.abs(e[1]-u[1])<pe&&Math.abs(e[2]-u[2])<pe&&Math.abs(e[3]-u[3])<pe&&Math.abs(e[4]-u[4])<pe&&Math.abs(e[5]-u[5])<pe&&Math.abs(e[6]-u[6])<pe&&Math.abs(e[7]-u[7])<pe&&Math.abs(e[8]-u[8])<pe&&Math.abs(e[9]-u[9])<pe&&Math.abs(e[10]-u[10])<pe&&Math.abs(e[11]-u[11])<pe&&Math.abs(e[12]-u[12])<pe&&Math.abs(e[13]-u[13])<pe&&Math.abs(e[14]-u[14])<pe&&Math.abs(e[15]-u[15])<pe}function O(e,u){return e[0]===u[0]&&e[1]===u[1]&&e[2]===u[2]&&e[3]===u[3]&&e[4]===u[4]&&e[5]===u[5]&&e[6]===u[6]&&e[7]===u[7]&&e[8]===u[8]&&e[9]===u[9]&&e[10]===u[10]&&e[11]===u[11]&&e[12]===u[12]&&e[13]===u[13]&&e[14]===u[14]&&e[15]===u[15]}function ne(e){const u=e??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ae(e,u){const i=u??new r(16);if(i===e){let ge;return ge=e[1],e[1]=e[4],e[4]=ge,ge=e[2],e[2]=e[8],e[8]=ge,ge=e[3],e[3]=e[12],e[12]=ge,ge=e[6],e[6]=e[9],e[9]=ge,ge=e[7],e[7]=e[13],e[13]=ge,ge=e[11],e[11]=e[14],e[14]=ge,i}const o=e[0*4+0],n=e[0*4+1],l=e[0*4+2],g=e[0*4+3],_=e[1*4+0],B=e[1*4+1],k=e[1*4+2],z=e[1*4+3],W=e[2*4+0],R=e[2*4+1],L=e[2*4+2],Q=e[2*4+3],le=e[3*4+0],K=e[3*4+1],re=e[3*4+2],me=e[3*4+3];return i[0]=o,i[1]=_,i[2]=W,i[3]=le,i[4]=n,i[5]=B,i[6]=R,i[7]=K,i[8]=l,i[9]=k,i[10]=L,i[11]=re,i[12]=g,i[13]=z,i[14]=Q,i[15]=me,i}function U(e,u){const i=u??new r(16),o=e[0*4+0],n=e[0*4+1],l=e[0*4+2],g=e[0*4+3],_=e[1*4+0],B=e[1*4+1],k=e[1*4+2],z=e[1*4+3],W=e[2*4+0],R=e[2*4+1],L=e[2*4+2],Q=e[2*4+3],le=e[3*4+0],K=e[3*4+1],re=e[3*4+2],me=e[3*4+3],ge=L*me,ve=re*Q,Se=k*me,Be=re*z,Pe=k*Q,Te=L*z,Ge=l*me,ke=re*g,Me=l*Q,ze=L*g,De=l*z,Ee=k*g,Ue=W*K,Ie=le*R,Fe=_*K,We=le*B,qe=_*R,tt=W*B,nt=o*K,st=le*n,rt=o*R,it=W*n,at=o*B,ot=_*n,Tt=ge*B+Be*R+Pe*K-(ve*B+Se*R+Te*K),Gt=ve*n+Ge*R+ze*K-(ge*n+ke*R+Me*K),kt=Se*n+ke*B+De*K-(Be*n+Ge*B+Ee*K),Mt=Te*n+Me*B+Ee*R-(Pe*n+ze*B+De*R),Ae=1/(o*Tt+_*Gt+W*kt+le*Mt);return i[0]=Ae*Tt,i[1]=Ae*Gt,i[2]=Ae*kt,i[3]=Ae*Mt,i[4]=Ae*(ve*_+Se*W+Te*le-(ge*_+Be*W+Pe*le)),i[5]=Ae*(ge*o+ke*W+Me*le-(ve*o+Ge*W+ze*le)),i[6]=Ae*(Be*o+Ge*_+Ee*le-(Se*o+ke*_+De*le)),i[7]=Ae*(Pe*o+ze*_+De*W-(Te*o+Me*_+Ee*W)),i[8]=Ae*(Ue*z+We*Q+qe*me-(Ie*z+Fe*Q+tt*me)),i[9]=Ae*(Ie*g+nt*Q+it*me-(Ue*g+st*Q+rt*me)),i[10]=Ae*(Fe*g+st*z+at*me-(We*g+nt*z+ot*me)),i[11]=Ae*(tt*g+rt*z+ot*Q-(qe*g+it*z+at*Q)),i[12]=Ae*(Fe*L+tt*re+Ie*k-(qe*re+Ue*k+We*L)),i[13]=Ae*(rt*re+Ue*l+st*L-(nt*L+it*re+Ie*l)),i[14]=Ae*(nt*k+ot*re+We*l-(at*re+Fe*l+st*k)),i[15]=Ae*(at*L+qe*l+it*k-(rt*k+ot*L+tt*l)),i}function F(e){const u=e[0],i=e[0*4+1],o=e[0*4+2],n=e[0*4+3],l=e[1*4+0],g=e[1*4+1],_=e[1*4+2],B=e[1*4+3],k=e[2*4+0],z=e[2*4+1],W=e[2*4+2],R=e[2*4+3],L=e[3*4+0],Q=e[3*4+1],le=e[3*4+2],K=e[3*4+3],re=W*K,me=le*R,ge=_*K,ve=le*B,Se=_*R,Be=W*B,Pe=o*K,Te=le*n,Ge=o*R,ke=W*n,Me=o*B,ze=_*n,De=re*g+ve*z+Se*Q-(me*g+ge*z+Be*Q),Ee=me*i+Pe*z+ke*Q-(re*i+Te*z+Ge*Q),Ue=ge*i+Te*g+Me*Q-(ve*i+Pe*g+ze*Q),Ie=Be*i+Ge*g+ze*z-(Se*i+ke*g+Me*z);return u*De+l*Ee+k*Ue+L*Ie}const ee=U;function j(e,u,i){const o=i??new r(16),n=e[0],l=e[1],g=e[2],_=e[3],B=e[4+0],k=e[4+1],z=e[4+2],W=e[4+3],R=e[8+0],L=e[8+1],Q=e[8+2],le=e[8+3],K=e[12+0],re=e[12+1],me=e[12+2],ge=e[12+3],ve=u[0],Se=u[1],Be=u[2],Pe=u[3],Te=u[4+0],Ge=u[4+1],ke=u[4+2],Me=u[4+3],ze=u[8+0],De=u[8+1],Ee=u[8+2],Ue=u[8+3],Ie=u[12+0],Fe=u[12+1],We=u[12+2],qe=u[12+3];return o[0]=n*ve+B*Se+R*Be+K*Pe,o[1]=l*ve+k*Se+L*Be+re*Pe,o[2]=g*ve+z*Se+Q*Be+me*Pe,o[3]=_*ve+W*Se+le*Be+ge*Pe,o[4]=n*Te+B*Ge+R*ke+K*Me,o[5]=l*Te+k*Ge+L*ke+re*Me,o[6]=g*Te+z*Ge+Q*ke+me*Me,o[7]=_*Te+W*Ge+le*ke+ge*Me,o[8]=n*ze+B*De+R*Ee+K*Ue,o[9]=l*ze+k*De+L*Ee+re*Ue,o[10]=g*ze+z*De+Q*Ee+me*Ue,o[11]=_*ze+W*De+le*Ee+ge*Ue,o[12]=n*Ie+B*Fe+R*We+K*qe,o[13]=l*Ie+k*Fe+L*We+re*qe,o[14]=g*Ie+z*Fe+Q*We+me*qe,o[15]=_*Ie+W*Fe+le*We+ge*qe,o}const se=j;function q(e,u,i){const o=i??ne();return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11]),o[12]=u[0],o[13]=u[1],o[14]=u[2],o[15]=1,o}function N(e,u){const i=u??s.create();return i[0]=e[12],i[1]=e[13],i[2]=e[14],i}function oe(e,u,i){const o=i??s.create(),n=u*4;return o[0]=e[n+0],o[1]=e[n+1],o[2]=e[n+2],o}function Y(e,u,i,o){const n=o===e?o:I(e,o),l=i*4;return n[l+0]=u[0],n[l+1]=u[1],n[l+2]=u[2],n}function te(e,u){const i=u??s.create(),o=e[0],n=e[1],l=e[2],g=e[4],_=e[5],B=e[6],k=e[8],z=e[9],W=e[10];return i[0]=Math.sqrt(o*o+n*n+l*l),i[1]=Math.sqrt(g*g+_*_+B*B),i[2]=Math.sqrt(k*k+z*z+W*W),i}function D(e,u,i,o,n){const l=n??new r(16),g=Math.tan(Math.PI*.5-.5*e);if(l[0]=g/u,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=g,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[11]=-1,l[12]=0,l[13]=0,l[15]=0,Number.isFinite(o)){const _=1/(i-o);l[10]=o*_,l[14]=o*i*_}else l[10]=-1,l[14]=-i;return l}function J(e,u,i,o=1/0,n){const l=n??new r(16),g=1/Math.tan(e*.5);if(l[0]=g/u,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=g,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[11]=-1,l[12]=0,l[13]=0,l[15]=0,o===1/0)l[10]=0,l[14]=i;else{const _=1/(o-i);l[10]=i*_,l[14]=o*i*_}return l}function V(e,u,i,o,n,l,g){const _=g??new r(16);return _[0]=2/(u-e),_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=2/(o-i),_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[10]=1/(n-l),_[11]=0,_[12]=(u+e)/(e-u),_[13]=(o+i)/(i-o),_[14]=n/(n-l),_[15]=1,_}function ue(e,u,i,o,n,l,g){const _=g??new r(16),B=u-e,k=o-i,z=n-l;return _[0]=2*n/B,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=2*n/k,_[6]=0,_[7]=0,_[8]=(e+u)/B,_[9]=(o+i)/k,_[10]=l/z,_[11]=-1,_[12]=0,_[13]=0,_[14]=n*l/z,_[15]=0,_}function fe(e,u,i,o,n,l=1/0,g){const _=g??new r(16),B=u-e,k=o-i;if(_[0]=2*n/B,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=2*n/k,_[6]=0,_[7]=0,_[8]=(e+u)/B,_[9]=(o+i)/k,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,l===1/0)_[10]=0,_[14]=n;else{const z=1/(l-n);_[10]=n*z,_[14]=l*n*z}return _}const ce=s.create(),C=s.create(),Z=s.create();function he(e,u,i,o){const n=o??new r(16);return s.normalize(s.subtract(u,e,Z),Z),s.normalize(s.cross(i,Z,ce),ce),s.normalize(s.cross(Z,ce,C),C),n[0]=ce[0],n[1]=ce[1],n[2]=ce[2],n[3]=0,n[4]=C[0],n[5]=C[1],n[6]=C[2],n[7]=0,n[8]=Z[0],n[9]=Z[1],n[10]=Z[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function ye(e,u,i,o){const n=o??new r(16);return s.normalize(s.subtract(e,u,Z),Z),s.normalize(s.cross(i,Z,ce),ce),s.normalize(s.cross(Z,ce,C),C),n[0]=ce[0],n[1]=ce[1],n[2]=ce[2],n[3]=0,n[4]=C[0],n[5]=C[1],n[6]=C[2],n[7]=0,n[8]=Z[0],n[9]=Z[1],n[10]=Z[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function ie(e,u,i,o){const n=o??new r(16);return s.normalize(s.subtract(e,u,Z),Z),s.normalize(s.cross(i,Z,ce),ce),s.normalize(s.cross(Z,ce,C),C),n[0]=ce[0],n[1]=C[0],n[2]=Z[0],n[3]=0,n[4]=ce[1],n[5]=C[1],n[6]=Z[1],n[7]=0,n[8]=ce[2],n[9]=C[2],n[10]=Z[2],n[11]=0,n[12]=-(ce[0]*e[0]+ce[1]*e[1]+ce[2]*e[2]),n[13]=-(C[0]*e[0]+C[1]*e[1]+C[2]*e[2]),n[14]=-(Z[0]*e[0]+Z[1]*e[1]+Z[2]*e[2]),n[15]=1,n}function X(e,u){const i=u??new r(16);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function de(e,u,i){const o=i??new r(16),n=u[0],l=u[1],g=u[2],_=e[0],B=e[1],k=e[2],z=e[3],W=e[1*4+0],R=e[1*4+1],L=e[1*4+2],Q=e[1*4+3],le=e[2*4+0],K=e[2*4+1],re=e[2*4+2],me=e[2*4+3],ge=e[3*4+0],ve=e[3*4+1],Se=e[3*4+2],Be=e[3*4+3];return e!==o&&(o[0]=_,o[1]=B,o[2]=k,o[3]=z,o[4]=W,o[5]=R,o[6]=L,o[7]=Q,o[8]=le,o[9]=K,o[10]=re,o[11]=me),o[12]=_*n+W*l+le*g+ge,o[13]=B*n+R*l+K*g+ve,o[14]=k*n+L*l+re*g+Se,o[15]=z*n+Q*l+me*g+Be,o}function _e(e,u){const i=u??new r(16),o=Math.cos(e),n=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=o,i[6]=n,i[7]=0,i[8]=0,i[9]=-n,i[10]=o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function we(e,u,i){const o=i??new r(16),n=e[4],l=e[5],g=e[6],_=e[7],B=e[8],k=e[9],z=e[10],W=e[11],R=Math.cos(u),L=Math.sin(u);return o[4]=R*n+L*B,o[5]=R*l+L*k,o[6]=R*g+L*z,o[7]=R*_+L*W,o[8]=R*B-L*n,o[9]=R*k-L*l,o[10]=R*z-L*g,o[11]=R*W-L*_,e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function be(e,u){const i=u??new r(16),o=Math.cos(e),n=Math.sin(e);return i[0]=o,i[1]=0,i[2]=-n,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=n,i[9]=0,i[10]=o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function xe(e,u,i){const o=i??new r(16),n=e[0*4+0],l=e[0*4+1],g=e[0*4+2],_=e[0*4+3],B=e[2*4+0],k=e[2*4+1],z=e[2*4+2],W=e[2*4+3],R=Math.cos(u),L=Math.sin(u);return o[0]=R*n-L*B,o[1]=R*l-L*k,o[2]=R*g-L*z,o[3]=R*_-L*W,o[8]=R*B+L*n,o[9]=R*k+L*l,o[10]=R*z+L*g,o[11]=R*W+L*_,e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function v(e,u){const i=u??new r(16),o=Math.cos(e),n=Math.sin(e);return i[0]=o,i[1]=n,i[2]=0,i[3]=0,i[4]=-n,i[5]=o,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function M(e,u,i){const o=i??new r(16),n=e[0*4+0],l=e[0*4+1],g=e[0*4+2],_=e[0*4+3],B=e[1*4+0],k=e[1*4+1],z=e[1*4+2],W=e[1*4+3],R=Math.cos(u),L=Math.sin(u);return o[0]=R*n+L*B,o[1]=R*l+L*k,o[2]=R*g+L*z,o[3]=R*_+L*W,o[4]=R*B-L*n,o[5]=R*k-L*l,o[6]=R*z-L*g,o[7]=R*W-L*_,e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function h(e,u,i){const o=i??new r(16);let n=e[0],l=e[1],g=e[2];const _=Math.sqrt(n*n+l*l+g*g);n/=_,l/=_,g/=_;const B=n*n,k=l*l,z=g*g,W=Math.cos(u),R=Math.sin(u),L=1-W;return o[0]=B+(1-B)*W,o[1]=n*l*L+g*R,o[2]=n*g*L-l*R,o[3]=0,o[4]=n*l*L-g*R,o[5]=k+(1-k)*W,o[6]=l*g*L+n*R,o[7]=0,o[8]=n*g*L+l*R,o[9]=l*g*L-n*R,o[10]=z+(1-z)*W,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const t=h;function c(e,u,i,o){const n=o??new r(16);let l=u[0],g=u[1],_=u[2];const B=Math.sqrt(l*l+g*g+_*_);l/=B,g/=B,_/=B;const k=l*l,z=g*g,W=_*_,R=Math.cos(i),L=Math.sin(i),Q=1-R,le=k+(1-k)*R,K=l*g*Q+_*L,re=l*_*Q-g*L,me=l*g*Q-_*L,ge=z+(1-z)*R,ve=g*_*Q+l*L,Se=l*_*Q+g*L,Be=g*_*Q-l*L,Pe=W+(1-W)*R,Te=e[0],Ge=e[1],ke=e[2],Me=e[3],ze=e[4],De=e[5],Ee=e[6],Ue=e[7],Ie=e[8],Fe=e[9],We=e[10],qe=e[11];return n[0]=le*Te+K*ze+re*Ie,n[1]=le*Ge+K*De+re*Fe,n[2]=le*ke+K*Ee+re*We,n[3]=le*Me+K*Ue+re*qe,n[4]=me*Te+ge*ze+ve*Ie,n[5]=me*Ge+ge*De+ve*Fe,n[6]=me*ke+ge*Ee+ve*We,n[7]=me*Me+ge*Ue+ve*qe,n[8]=Se*Te+Be*ze+Pe*Ie,n[9]=Se*Ge+Be*De+Pe*Fe,n[10]=Se*ke+Be*Ee+Pe*We,n[11]=Se*Me+Be*Ue+Pe*qe,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}const a=c;function d(e,u){const i=u??new r(16);return i[0]=e[0],i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e[1],i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e[2],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function p(e,u,i){const o=i??new r(16),n=u[0],l=u[1],g=u[2];return o[0]=n*e[0*4+0],o[1]=n*e[0*4+1],o[2]=n*e[0*4+2],o[3]=n*e[0*4+3],o[4]=l*e[1*4+0],o[5]=l*e[1*4+1],o[6]=l*e[1*4+2],o[7]=l*e[1*4+3],o[8]=g*e[2*4+0],o[9]=g*e[2*4+1],o[10]=g*e[2*4+2],o[11]=g*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function m(e,u){const i=u??new r(16);return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=e,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function x(e,u,i){const o=i??new r(16);return o[0]=u*e[0*4+0],o[1]=u*e[0*4+1],o[2]=u*e[0*4+2],o[3]=u*e[0*4+3],o[4]=u*e[1*4+0],o[5]=u*e[1*4+1],o[6]=u*e[1*4+2],o[7]=u*e[1*4+3],o[8]=u*e[2*4+0],o[9]=u*e[2*4+1],o[10]=u*e[2*4+2],o[11]=u*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}return{add:T,aim:he,axisRotate:c,axisRotation:h,cameraAim:ye,clone:$,copy:I,create:f,determinant:F,equals:O,equalsApproximately:A,fromMat3:y,fromQuat:w,frustum:ue,frustumReverseZ:fe,getAxis:oe,getScaling:te,getTranslation:N,identity:ne,inverse:U,invert:ee,lookAt:ie,mul:se,mulScalar:E,multiply:j,multiplyScalar:G,negate:S,ortho:V,perspective:D,perspectiveReverseZ:J,rotate:a,rotateX:we,rotateY:xe,rotateZ:M,rotation:t,rotationX:_e,rotationY:be,rotationZ:v,scale:p,scaling:d,set:b,setAxis:Y,setTranslation:q,translate:de,translation:X,transpose:ae,uniformScale:x,uniformScaling:m}}const Et=new Map;function wn(r){let s=Et.get(r);return s||(s=yn(r),Et.set(r,s)),s}function bn(r){const s=_t(r);function f(v,M,h,t){const c=new r(4);return v!==void 0&&(c[0]=v,M!==void 0&&(c[1]=M,h!==void 0&&(c[2]=h,t!==void 0&&(c[3]=t)))),c}const b=f;function y(v,M,h,t,c){const a=c??new r(4);return a[0]=v,a[1]=M,a[2]=h,a[3]=t,a}function w(v,M,h){const t=h??new r(4),c=M*.5,a=Math.sin(c);return t[0]=a*v[0],t[1]=a*v[1],t[2]=a*v[2],t[3]=Math.cos(c),t}function S(v,M){const h=M??s.create(3),t=Math.acos(v[3])*2,c=Math.sin(t*.5);return c>pe?(h[0]=v[0]/c,h[1]=v[1]/c,h[2]=v[2]/c):(h[0]=1,h[1]=0,h[2]=0),{angle:t,axis:h}}function T(v,M){const h=D(v,M);return Math.acos(2*h*h-1)}function G(v,M,h){const t=h??new r(4),c=v[0],a=v[1],d=v[2],p=v[3],m=M[0],x=M[1],e=M[2],u=M[3];return t[0]=c*u+p*m+a*e-d*x,t[1]=a*u+p*x+d*m-c*e,t[2]=d*u+p*e+c*x-a*m,t[3]=p*u-c*m-a*x-d*e,t}const E=G;function I(v,M,h){const t=h??new r(4),c=M*.5,a=v[0],d=v[1],p=v[2],m=v[3],x=Math.sin(c),e=Math.cos(c);return t[0]=a*e+m*x,t[1]=d*e+p*x,t[2]=p*e-d*x,t[3]=m*e-a*x,t}function $(v,M,h){const t=h??new r(4),c=M*.5,a=v[0],d=v[1],p=v[2],m=v[3],x=Math.sin(c),e=Math.cos(c);return t[0]=a*e-p*x,t[1]=d*e+m*x,t[2]=p*e+a*x,t[3]=m*e-d*x,t}function A(v,M,h){const t=h??new r(4),c=M*.5,a=v[0],d=v[1],p=v[2],m=v[3],x=Math.sin(c),e=Math.cos(c);return t[0]=a*e+d*x,t[1]=d*e-a*x,t[2]=p*e+m*x,t[3]=m*e-p*x,t}function O(v,M,h,t){const c=t??new r(4),a=v[0],d=v[1],p=v[2],m=v[3];let x=M[0],e=M[1],u=M[2],i=M[3],o=a*x+d*e+p*u+m*i;o<0&&(o=-o,x=-x,e=-e,u=-u,i=-i);let n,l;if(1-o>pe){const g=Math.acos(o),_=Math.sin(g);n=Math.sin((1-h)*g)/_,l=Math.sin(h*g)/_}else n=1-h,l=h;return c[0]=n*a+l*x,c[1]=n*d+l*e,c[2]=n*p+l*u,c[3]=n*m+l*i,c}function ne(v,M){const h=M??new r(4),t=v[0],c=v[1],a=v[2],d=v[3],p=t*t+c*c+a*a+d*d,m=p?1/p:0;return h[0]=-t*m,h[1]=-c*m,h[2]=-a*m,h[3]=d*m,h}function ae(v,M){const h=M??new r(4);return h[0]=-v[0],h[1]=-v[1],h[2]=-v[2],h[3]=v[3],h}function U(v,M){const h=M??new r(4),t=v[0]+v[5]+v[10];if(t>0){const c=Math.sqrt(t+1);h[3]=.5*c;const a=.5/c;h[0]=(v[6]-v[9])*a,h[1]=(v[8]-v[2])*a,h[2]=(v[1]-v[4])*a}else{let c=0;v[5]>v[0]&&(c=1),v[10]>v[c*4+c]&&(c=2);const a=(c+1)%3,d=(c+2)%3,p=Math.sqrt(v[c*4+c]-v[a*4+a]-v[d*4+d]+1);h[c]=.5*p;const m=.5/p;h[3]=(v[a*4+d]-v[d*4+a])*m,h[a]=(v[a*4+c]+v[c*4+a])*m,h[d]=(v[d*4+c]+v[c*4+d])*m}return h}function F(v,M,h,t,c){const a=c??new r(4),d=v*.5,p=M*.5,m=h*.5,x=Math.sin(d),e=Math.cos(d),u=Math.sin(p),i=Math.cos(p),o=Math.sin(m),n=Math.cos(m);switch(t){case"xyz":a[0]=x*i*n+e*u*o,a[1]=e*u*n-x*i*o,a[2]=e*i*o+x*u*n,a[3]=e*i*n-x*u*o;break;case"xzy":a[0]=x*i*n-e*u*o,a[1]=e*u*n-x*i*o,a[2]=e*i*o+x*u*n,a[3]=e*i*n+x*u*o;break;case"yxz":a[0]=x*i*n+e*u*o,a[1]=e*u*n-x*i*o,a[2]=e*i*o-x*u*n,a[3]=e*i*n+x*u*o;break;case"yzx":a[0]=x*i*n+e*u*o,a[1]=e*u*n+x*i*o,a[2]=e*i*o-x*u*n,a[3]=e*i*n-x*u*o;break;case"zxy":a[0]=x*i*n-e*u*o,a[1]=e*u*n+x*i*o,a[2]=e*i*o+x*u*n,a[3]=e*i*n-x*u*o;break;case"zyx":a[0]=x*i*n-e*u*o,a[1]=e*u*n+x*i*o,a[2]=e*i*o-x*u*n,a[3]=e*i*n+x*u*o;break;default:throw new Error(`Unknown rotation order: ${t}`)}return a}function ee(v,M){const h=M??new r(4);return h[0]=v[0],h[1]=v[1],h[2]=v[2],h[3]=v[3],h}const j=ee;function se(v,M,h){const t=h??new r(4);return t[0]=v[0]+M[0],t[1]=v[1]+M[1],t[2]=v[2]+M[2],t[3]=v[3]+M[3],t}function q(v,M,h){const t=h??new r(4);return t[0]=v[0]-M[0],t[1]=v[1]-M[1],t[2]=v[2]-M[2],t[3]=v[3]-M[3],t}const N=q;function oe(v,M,h){const t=h??new r(4);return t[0]=v[0]*M,t[1]=v[1]*M,t[2]=v[2]*M,t[3]=v[3]*M,t}const Y=oe;function te(v,M,h){const t=h??new r(4);return t[0]=v[0]/M,t[1]=v[1]/M,t[2]=v[2]/M,t[3]=v[3]/M,t}function D(v,M){return v[0]*M[0]+v[1]*M[1]+v[2]*M[2]+v[3]*M[3]}function J(v,M,h,t){const c=t??new r(4);return c[0]=v[0]+h*(M[0]-v[0]),c[1]=v[1]+h*(M[1]-v[1]),c[2]=v[2]+h*(M[2]-v[2]),c[3]=v[3]+h*(M[3]-v[3]),c}function V(v){const M=v[0],h=v[1],t=v[2],c=v[3];return Math.sqrt(M*M+h*h+t*t+c*c)}const ue=V;function fe(v){const M=v[0],h=v[1],t=v[2],c=v[3];return M*M+h*h+t*t+c*c}const ce=fe;function C(v,M){const h=M??new r(4),t=v[0],c=v[1],a=v[2],d=v[3],p=Math.sqrt(t*t+c*c+a*a+d*d);return p>1e-5?(h[0]=t/p,h[1]=c/p,h[2]=a/p,h[3]=d/p):(h[0]=0,h[1]=0,h[2]=0,h[3]=1),h}function Z(v,M){return Math.abs(v[0]-M[0])<pe&&Math.abs(v[1]-M[1])<pe&&Math.abs(v[2]-M[2])<pe&&Math.abs(v[3]-M[3])<pe}function he(v,M){return v[0]===M[0]&&v[1]===M[1]&&v[2]===M[2]&&v[3]===M[3]}function ye(v){const M=v??new r(4);return M[0]=0,M[1]=0,M[2]=0,M[3]=1,M}const ie=s.create(),X=s.create(),de=s.create();function _e(v,M,h){const t=h??new r(4),c=s.dot(v,M);return c<-.999999?(s.cross(X,v,ie),s.len(ie)<1e-6&&s.cross(de,v,ie),s.normalize(ie,ie),w(ie,Math.PI,t),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(s.cross(v,M,ie),t[0]=ie[0],t[1]=ie[1],t[2]=ie[2],t[3]=1+c,C(t,t))}const we=new r(4),be=new r(4);function xe(v,M,h,t,c,a){const d=a??new r(4);return O(v,t,c,we),O(M,h,c,be),O(we,be,2*c*(1-c),d),d}return{create:f,fromValues:b,set:y,fromAxisAngle:w,toAxisAngle:S,angle:T,multiply:G,mul:E,rotateX:I,rotateY:$,rotateZ:A,slerp:O,inverse:ne,conjugate:ae,fromMat:U,fromEuler:F,copy:ee,clone:j,add:se,subtract:q,sub:N,mulScalar:oe,scale:Y,divScalar:te,dot:D,lerp:J,length:V,len:ue,lengthSq:fe,lenSq:ce,normalize:C,equalsApproximately:Z,equals:he,identity:ye,rotationTo:_e,sqlerp:xe}}const Ut=new Map;function vn(r){let s=Ut.get(r);return s||(s=bn(r),Ut.set(r,s)),s}function Sn(r){function s(h,t,c,a){const d=new r(4);return h!==void 0&&(d[0]=h,t!==void 0&&(d[1]=t,c!==void 0&&(d[2]=c,a!==void 0&&(d[3]=a)))),d}const f=s;function b(h,t,c,a,d){const p=d??new r(4);return p[0]=h,p[1]=t,p[2]=c,p[3]=a,p}function y(h,t){const c=t??new r(4);return c[0]=Math.ceil(h[0]),c[1]=Math.ceil(h[1]),c[2]=Math.ceil(h[2]),c[3]=Math.ceil(h[3]),c}function w(h,t){const c=t??new r(4);return c[0]=Math.floor(h[0]),c[1]=Math.floor(h[1]),c[2]=Math.floor(h[2]),c[3]=Math.floor(h[3]),c}function S(h,t){const c=t??new r(4);return c[0]=Math.round(h[0]),c[1]=Math.round(h[1]),c[2]=Math.round(h[2]),c[3]=Math.round(h[3]),c}function T(h,t=0,c=1,a){const d=a??new r(4);return d[0]=Math.min(c,Math.max(t,h[0])),d[1]=Math.min(c,Math.max(t,h[1])),d[2]=Math.min(c,Math.max(t,h[2])),d[3]=Math.min(c,Math.max(t,h[3])),d}function G(h,t,c){const a=c??new r(4);return a[0]=h[0]+t[0],a[1]=h[1]+t[1],a[2]=h[2]+t[2],a[3]=h[3]+t[3],a}function E(h,t,c,a){const d=a??new r(4);return d[0]=h[0]+t[0]*c,d[1]=h[1]+t[1]*c,d[2]=h[2]+t[2]*c,d[3]=h[3]+t[3]*c,d}function I(h,t,c){const a=c??new r(4);return a[0]=h[0]-t[0],a[1]=h[1]-t[1],a[2]=h[2]-t[2],a[3]=h[3]-t[3],a}const $=I;function A(h,t){return Math.abs(h[0]-t[0])<pe&&Math.abs(h[1]-t[1])<pe&&Math.abs(h[2]-t[2])<pe&&Math.abs(h[3]-t[3])<pe}function O(h,t){return h[0]===t[0]&&h[1]===t[1]&&h[2]===t[2]&&h[3]===t[3]}function ne(h,t,c,a){const d=a??new r(4);return d[0]=h[0]+c*(t[0]-h[0]),d[1]=h[1]+c*(t[1]-h[1]),d[2]=h[2]+c*(t[2]-h[2]),d[3]=h[3]+c*(t[3]-h[3]),d}function ae(h,t,c,a){const d=a??new r(4);return d[0]=h[0]+c[0]*(t[0]-h[0]),d[1]=h[1]+c[1]*(t[1]-h[1]),d[2]=h[2]+c[2]*(t[2]-h[2]),d[3]=h[3]+c[3]*(t[3]-h[3]),d}function U(h,t,c){const a=c??new r(4);return a[0]=Math.max(h[0],t[0]),a[1]=Math.max(h[1],t[1]),a[2]=Math.max(h[2],t[2]),a[3]=Math.max(h[3],t[3]),a}function F(h,t,c){const a=c??new r(4);return a[0]=Math.min(h[0],t[0]),a[1]=Math.min(h[1],t[1]),a[2]=Math.min(h[2],t[2]),a[3]=Math.min(h[3],t[3]),a}function ee(h,t,c){const a=c??new r(4);return a[0]=h[0]*t,a[1]=h[1]*t,a[2]=h[2]*t,a[3]=h[3]*t,a}const j=ee;function se(h,t,c){const a=c??new r(4);return a[0]=h[0]/t,a[1]=h[1]/t,a[2]=h[2]/t,a[3]=h[3]/t,a}function q(h,t){const c=t??new r(4);return c[0]=1/h[0],c[1]=1/h[1],c[2]=1/h[2],c[3]=1/h[3],c}const N=q;function oe(h,t){return h[0]*t[0]+h[1]*t[1]+h[2]*t[2]+h[3]*t[3]}function Y(h){const t=h[0],c=h[1],a=h[2],d=h[3];return Math.sqrt(t*t+c*c+a*a+d*d)}const te=Y;function D(h){const t=h[0],c=h[1],a=h[2],d=h[3];return t*t+c*c+a*a+d*d}const J=D;function V(h,t){const c=h[0]-t[0],a=h[1]-t[1],d=h[2]-t[2],p=h[3]-t[3];return Math.sqrt(c*c+a*a+d*d+p*p)}const ue=V;function fe(h,t){const c=h[0]-t[0],a=h[1]-t[1],d=h[2]-t[2],p=h[3]-t[3];return c*c+a*a+d*d+p*p}const ce=fe;function C(h,t){const c=t??new r(4),a=h[0],d=h[1],p=h[2],m=h[3],x=Math.sqrt(a*a+d*d+p*p+m*m);return x>1e-5?(c[0]=a/x,c[1]=d/x,c[2]=p/x,c[3]=m/x):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function Z(h,t){const c=t??new r(4);return c[0]=-h[0],c[1]=-h[1],c[2]=-h[2],c[3]=-h[3],c}function he(h,t){const c=t??new r(4);return c[0]=h[0],c[1]=h[1],c[2]=h[2],c[3]=h[3],c}const ye=he;function ie(h,t,c){const a=c??new r(4);return a[0]=h[0]*t[0],a[1]=h[1]*t[1],a[2]=h[2]*t[2],a[3]=h[3]*t[3],a}const X=ie;function de(h,t,c){const a=c??new r(4);return a[0]=h[0]/t[0],a[1]=h[1]/t[1],a[2]=h[2]/t[2],a[3]=h[3]/t[3],a}const _e=de;function we(h){const t=h??new r(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function be(h,t,c){const a=c??new r(4),d=h[0],p=h[1],m=h[2],x=h[3];return a[0]=t[0]*d+t[4]*p+t[8]*m+t[12]*x,a[1]=t[1]*d+t[5]*p+t[9]*m+t[13]*x,a[2]=t[2]*d+t[6]*p+t[10]*m+t[14]*x,a[3]=t[3]*d+t[7]*p+t[11]*m+t[15]*x,a}function xe(h,t,c){const a=c??new r(4);return C(h,a),ee(a,t,a)}function v(h,t,c){const a=c??new r(4);return Y(h)>t?xe(h,t,a):he(h,a)}function M(h,t,c){const a=c??new r(4);return ne(h,t,.5,a)}return{create:s,fromValues:f,set:b,ceil:y,floor:w,round:S,clamp:T,add:G,addScaled:E,subtract:I,sub:$,equalsApproximately:A,equals:O,lerp:ne,lerpV:ae,max:U,min:F,mulScalar:ee,scale:j,divScalar:se,inverse:q,invert:N,dot:oe,length:Y,len:te,lengthSq:D,lenSq:J,distance:V,dist:ue,distanceSq:fe,distSq:ce,normalize:C,negate:Z,copy:he,clone:ye,multiply:ie,mul:X,divide:de,div:_e,zero:we,transformMat4:be,setLength:xe,truncate:v,midpoint:M}}const It=new Map;function Bn(r){let s=It.get(r);return s||(s=Sn(r),It.set(r,s)),s}function St(r,s,f,b,y,w){return{mat3:xn(r),mat4:wn(s),quat:vn(f),vec2:Kt(b),vec3:_t(y),vec4:Bn(w)}}const{mat3:mt,mat4:Re,quat:Oe,vec2:Ot,vec3:H,vec4:Bs}=St(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);St(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);St(hn,Array,Array,Array,Array,Array);const Rt=document.querySelector("#log");let Le=null,Qe=null;function Jt(){if(Le)return Le;Le=document.createElement("div"),Le.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",Le.appendChild(r),Qe=document.createElement("div"),Qe.className="ply-spinner-label",Le.appendChild(Qe),Le.style.display="none",document.body.appendChild(Le),Le}function Pn(r){Jt(),Qe&&r&&(Qe.textContent=r),Le&&(Le.style.opacity="1",Le.style.display="flex")}function ct(r){Jt(),Qe&&(Qe.textContent=r)}function Tn(){if(!Le)return;const r=Le;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function en(r,s){if(!Rt)return;const f=document.createElement("p");f.innerText=r,s&&Object.assign(f.style,s),Rt.appendChild(f)}async function $e(r){console.log(r),en(r)}async function Gn(r){console.error(r),en(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let tn;function kn(){tn=performance.now()}function Lt(r){const s=performance.now()-tn;$e(`⏱️ ${r} Time: ${s.toFixed(0)} ms`)}function Mn(r,s){return 2*Math.atan(s/(2*r))}function zn(r,s,f,b){const y=Math.tan(b/2),w=Math.tan(f/2),S=y*r,T=-S,G=w*r,E=-G,I=Re.create();return I[0]=2*r/(G-E),I[5]=-2*r/(S-T),I[2]=(G+E)/(G-E),I[6]=(S+T)/(S-T),I[14]=1,I[10]=s/(s-r),I[11]=-(s*r)/(s-r),Re.transpose(I,I),I}async function An(r){$e(`loading scene camera file... : ${r}`);const f=await(await fetch(r)).json();return $e(`loaded cameras count: ${f.length}`),f.map(b=>{const y=H.clone(b.position),w=mt.create(...b.rotation.flat()),S=w[0],T=w[4],G=w[8],E=w[1],I=w[5],$=w[9],A=w[2],O=w[6],ne=w[10];S*(I*ne-$*O)-T*(E*ne-$*A)+G*(E*O-I*A)<0&&(w[1]=-w[1],w[5]=-w[5],w[9]=-w[9]);const U=Re.fromMat3(w);return{position:y,rotation:U,img_name:b.img_name,id:b.id}})}const Dn=4*2,En=4*16,nn=4*En+2*Dn;function Un(r){return r.createBuffer({label:"camera uniform",size:nn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const je=new Float32Array(nn/Float32Array.BYTES_PER_ELEMENT),ht=class ht{constructor(s,f){P(this,"_renderSize",null);P(this,"uniform_buffer");P(this,"position",H.create());P(this,"rotation",Re.create());P(this,"fovY",45/180*Math.PI);P(this,"fovX");P(this,"focal",Ot.create());P(this,"viewport",Ot.create());P(this,"view_matrix",Re.identity());P(this,"view_inv_matrix",Re.identity());P(this,"proj_matrix",Re.identity());P(this,"proj_inv_matrix",Re.identity());P(this,"_negPos",H.create());P(this,"look",H.create(0,0,1));P(this,"up",H.create(0,1,0));P(this,"right",H.create(1,0,0));this.canvas=s,this.device=f,this.uniform_buffer=Un(f),this.on_update_canvas()}setRenderSize(s,f){this._renderSize=[s,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,b=.5*f/Math.tan(this.fovY*.5);this.focal[0]=b,this.focal[1]=b,this.fovX=Mn(b,s),this.viewport[0]=s,this.viewport[1]=f,this.proj_matrix=zn(.01,100,this.fovX,this.fovY),Re.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],Re.copy(this.rotation,this.view_matrix),Re.translate(this.view_matrix,this._negPos,this.view_matrix),Re.inverse(this.view_matrix,this.view_inv_matrix),H.transformMat4Upper3x3(ht.Z_AXIS,this.view_inv_matrix,this.look),H.normalize(this.look,this.look),H.cross(this.up,this.look,this.right),H.normalize(this.right,this.right);let s=0;je.set(this.view_matrix,s),s+=16,je.set(this.view_inv_matrix,s),s+=16,je.set(this.proj_matrix,s),s+=16,je.set(this.proj_inv_matrix,s),s+=16,je.set(this.viewport,s),s+=2,je.set(this.focal,s),s+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,je)}set_preset(s){H.copy(s.position,this.position),Re.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}getFov(){return this.fovY}};P(ht,"Z_AXIS",H.create(0,0,1));let xt=ht;const In=H.create(1,0,0),On=H.create(0,1,0),Rn=H.create(0,0,1);function Ln(r,s){const f=r[0],b=r[4],y=r[8],w=r[1],S=r[5],T=r[9],G=r[2],E=r[6],I=r[10],$=f+S+I;let A,O,ne,ae;if($>0){const U=.5/Math.sqrt($+1);A=.25/U,O=(E-T)*U,ne=(y-G)*U,ae=(w-b)*U}else if(f>S&&f>I){const U=2*Math.sqrt(1+f-S-I);A=(E-T)/U,O=.25*U,ne=(b+w)/U,ae=(y+G)/U}else if(S>I){const U=2*Math.sqrt(1+S-f-I);A=(y-G)/U,O=(b+w)/U,ne=.25*U,ae=(T+E)/U}else{const U=2*Math.sqrt(1+I-f-S);A=(w-b)/U,O=(y+G)/U,ne=(T+E)/U,ae=.25*U}return s[0]=O,s[1]=ne,s[2]=ae,s[3]=A,s}class Cn{constructor(s){P(this,"element");P(this,"enabled",!0);P(this,"center",H.create(0,0,0));P(this,"up",H.create(0,1,0));P(this,"rotation",[0,0]);P(this,"shift",[0,0]);P(this,"scroll",0);P(this,"speed",.1);P(this,"sensitivity",.08);P(this,"leftPressed",!1);P(this,"rightPressed",!1);P(this,"leftDragPans",!1);P(this,"lastX",0);P(this,"lastY",0);P(this,"touches",new Map);P(this,"lastTouchCenter",null);P(this,"lastPinchDistance",null);P(this,"lastTwoFingerAngle",null);P(this,"lastTouchCount",0);P(this,"roll",0);P(this,"_dir",H.create());P(this,"_right",H.create());P(this,"_upCam",H.create());P(this,"_scratch",H.create());P(this,"_qY",Oe.create());P(this,"_qX",Oe.create());P(this,"_qRot",Oe.create());P(this,"_qZ",Oe.create());P(this,"_qLocal",Oe.create());P(this,"_qWorldToCam",Oe.create());P(this,"_scratchMat3",mt.create());P(this,"bboxMin",null);P(this,"bboxMax",null);P(this,"anchor",H.create(0,0,0));P(this,"downCallback",s=>{var f,b,y,w;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(b=(f=s.target)==null?void 0:f.setPointerCapture)==null||b.call(f,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(w=(y=s.target)==null?void 0:y.setPointerCapture)==null||w.call(y,s.pointerId),s.preventDefault())}});P(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const f=s.pageX-this.lastX,b=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=b):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=b)});P(this,"upCallback",s=>{var f,b,y,w;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(b=(f=s.target)==null?void 0:f.releasePointerCapture)==null||b.call(f,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(w=(y=s.target)==null?void 0:y.releasePointerCapture)==null||w.call(y,s.pointerId),s.preventDefault()});P(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let f=s.deltaY;s.deltaMode===1?f*=16:s.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=s,this.registerElement(s.canvas)}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(s){H.copy(s,this.center),H.copy(s,this.anchor)}setOrbitPivot(s){H.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const f=this.camera.rotation;H.set(f[2],f[6],f[10],this._dir),H.normalize(this._dir,this._dir),H.scale(this._dir,s,this._dir),H.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(H.subtract(this.center,s.position,this._scratch),H.length(this._scratch)<1e-6)return;H.normalize(this._scratch,this._scratch),H.cross(this.up,this._scratch,this._right),H.length(this._right)<1e-6&&H.set(1,0,0,this._right),H.normalize(this._right,this._right),H.cross(this._scratch,this._right,this._upCam),H.normalize(this._upCam,this._upCam);const f=s.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,s.update_buffer()}setBbox(s,f){this.bboxMin=H.create(s[0],s[1],s[2]),this.bboxMax=H.create(f[0],f[1],f[2]);const b=(s[0]+f[0])*.5,y=(s[1]+f[1])*.5,w=(s[2]+f[2])*.5;H.set(b,y,w,this.center),H.set(b,y,w,this.anchor)}resetToCamera(){const s=this.camera.rotation;H.set(s[2],s[6],s[10],this._dir),H.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let b=-1/0,y=1/0,w=!1;for(let S=0;S<3;S++){const T=this._dir[S],G=this.bboxMin[S]-this.camera.position[S],E=this.bboxMax[S]-this.camera.position[S];if(Math.abs(T)>1e-8){const I=G/T,$=E/T;b=Math.max(b,Math.min(I,$)),y=Math.min(y,Math.max(I,$))}else if(G>0||E<0){w=!0;break}}!w&&b<=y&&y>0&&(f=(Math.max(b,0)+y)*.5)}if(f===null||!isFinite(f)||f<.001){H.subtract(this.anchor,this.camera.position,this._scratch);const b=H.dot(this._scratch,this._dir);f=b>.001?b:H.length(this._scratch)}f=Math.max(.1,f),H.scale(this._dir,f,this._dir),H.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const b=f.x-this.lastTouchCenter[0],y=f.y-this.lastTouchCenter[1];this.rotation[0]+=b*.3,this.rotation[1]-=y*.3}this.lastTouchCenter=[f.x,f.y]}else if(s===2){const f=Array.from(this.touches.values()),b=(f[0].x+f[1].x)*.5,y=(f[0].y+f[1].y)*.5,w=f[1].x-f[0].x,S=f[1].y-f[0].y,T=Math.hypot(w,S),G=Math.atan2(S,w);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const E=b-this.lastTouchCenter[0],I=y-this.lastTouchCenter[1],$=Math.hypot(E,I),A=Math.abs(T-this.lastPinchDistance);let O=G-this.lastTwoFingerAngle;O>Math.PI&&(O-=2*Math.PI),O<-Math.PI&&(O+=2*Math.PI),$>.5&&(this.shift[1]-=E,this.shift[0]+=I),A>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(T/this.lastPinchDistance)*10),Math.abs(O)>.0087&&(this.roll+=O)}this.lastTouchCenter=[b,y],this.lastPinchDistance=T,this.lastTwoFingerAngle=G}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const U=f.rotation;this.up[0]=U[1],this.up[1]=U[5],this.up[2]=U[9],H.length(this.up)>1e-6?H.normalize(this.up,this.up):H.set(0,1,0,this.up)}let b=0,y=!1;Math.abs(this.roll)>1e-4&&(b=this.roll,this.roll=0,y=!0),H.subtract(f.position,this.center,this._dir);let w=H.length(this._dir);w<1e-6&&(w=1e-6);const S=Math.exp(Math.log(w)+this.scroll*s*10*this.speed);H.scale(this._dir,S/w,this._dir),w=S;const T=f.rotation;this._right[0]=T[0],this._right[1]=T[4],this._right[2]=T[8],H.normalize(this._right,this._right),H.length(this._right)<1e-6&&H.set(1,0,0,this._right);const G=H.create(T[1],T[5],T[9]);H.normalize(G,G),H.length(G)<1e-6&&H.set(0,1,0,G);const E=s*this.speed*.1*w,I=this.shift[1]*E,$=-this.shift[0]*E;H.scale(this._right,I,this._scratch),H.add(this.center,this._scratch,this.center),H.add(f.position,this._scratch,f.position),H.scale(G,$,this._scratch),H.add(this.center,this._scratch,this.center),H.add(f.position,this._scratch,f.position);const A=this.rotation[0]*s*this.sensitivity,O=this.rotation[1]*s*this.sensitivity;if(Math.abs(A)>1e-5||Math.abs(O)>1e-5||y){const U=f.rotation;Ln(U,this._qWorldToCam),Oe.fromAxisAngle(In,-O,this._qX),Oe.fromAxisAngle(On,-A,this._qY),Oe.multiply(this._qX,this._qY,this._qLocal),y&&(Oe.fromAxisAngle(Rn,1*b,this._qZ),Oe.multiply(this._qZ,this._qLocal,this._qLocal)),Oe.normalize(this._qLocal,this._qLocal),Oe.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),Oe.normalize(this._qWorldToCam,this._qWorldToCam),mt.fromQuat(this._qWorldToCam,this._scratchMat3),Re.fromMat3(this._scratchMat3,f.rotation);const F=f.rotation,ee=F[2],j=F[6],se=F[10];f.position[0]=this.center[0]-ee*w,f.position[1]=this.center[1]-j*w,f.position[2]=this.center[2]-se*w,this.up[0]=F[1],this.up[1]=F[5],this.up[2]=F[9],H.normalize(this.up,this.up)}else H.add(this.center,this._dir,f.position);f.update_buffer();const ae=Math.pow(.8,s*60);this.rotation[0]*=ae,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=ae,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=ae,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=ae,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=ae,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function et(r){return r+3&-4}const Fn=2,Wn=3,qn=5,$n=6,Je=7,ut=8,dt=9,ft=10;function Nn(r){const s=new TextDecoder("ascii"),f=s.decode(new Uint8Array(r,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const b=new DataView(r),y=4,w=b.getUint32(y+0,!0),S=b.getUint32(y+4,!0),T=b.getUint32(y+8,!0),G=b.getUint32(y+12,!0),E=b.getUint32(y+16,!0),I=b.getFloat32(y+20,!0),$=b.getUint32(y+24,!0),A=b.getUint32(y+28,!0),O=b.getFloat32(y+32,!0),ne=b.getFloat32(y+36,!0),ae=b.getFloat32(y+40,!0),U=b.getUint32(y+44,!0),F=b.getFloat32(y+48,!0),ee=b.getFloat32(y+52,!0),j=b.getUint32(y+56,!0),se=b.getUint32(y+60,!0),q=A===dt||A===ft,N=q?se:0,oe=q?0:se,Y=oe>0?oe:1;if(A===qn||A===$n)throw new Error(`NAT2: paired-RVQ format=${A} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const te=A===dt||A===ft;if(A!==Fn&&A!==Wn&&A!==Je&&A!==ut&&!te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${A}`);if(w%4!==0||U%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${w} layer_h=${U}`);let D=y+64;const J=(j+1)*4,V=new Uint32Array(r.slice(D,D+J));D+=J;let ue;if(Y>1){const X=(Y+1)*4;if(D+X>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${X} from ${D})`);ue=new Uint32Array(r.slice(D,D+X)),D+=X}else ue=new Uint32Array([0,w]);let fe=0;for(let X=0;X<Y;X++){const de=ue[X+1]-ue[X];de>fe&&(fe=de)}if(te){const X=N&1?7:6,de=E*X*4;if(D+de>r.byteLength)throw new Error(`NAT2 truncated at probes: need ${de} more bytes from offset ${D}, have ${r.byteLength-D}`);const _e=new Float32Array(r.slice(D,D+de));D+=de;const we=Math.max(1,N>>8&255),be=[];let xe=0;for(let c=0,a=w,d=U;c<we;c++,a>>=1,d>>=1){const p=Math.max(1,a>>2)*Math.max(1,d>>2)*16;be.push(p),xe+=p}const v=r.byteLength-D;if(v<xe)throw new Error(`NAT2 probe atlas truncated: need ${xe} bytes for ${w}x${U} x${we} mips, have ${v}`);const M=[];let h=D;for(const c of be)M.push(new Uint8Array(r.slice(h,h+c))),h+=c;const t=M[0];return{width:w,height:S,channels:T,kernel_type:G,num_rects:E,uv_extent:I,sb_number:$,format:A,sh_bias:O,res_bias:ne,compact_mult:ae,layer_h:U,atlas_scale:F,atlas_offset:ee,n_layers:j,n_cols:Y,layer_cuts:V,column_cuts:ue,slice_width:fe,rects_expanded:_e,atlas_bytes:t,mip_bytes:M,probe_mode:N&1?2:1}}const ce=E*4*4;if(D+ce>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${ce} more bytes from offset ${D}, have ${r.byteLength-D}`);const C=new Float32Array(r.slice(D,D+ce));D+=ce;const Z=new Float32Array(E*5);for(let X=0;X<E;X++){const de=C[X*4+0],_e=C[X*4+1],we=C[X*4+2],be=C[X*4+3];let xe=0;for(let c=1;c<=j&&V[c]<=_e;c++)xe=c;let v=0;for(let c=1;c<=Y&&ue[c]<=de;c++)v=c;const M=_e-V[xe],h=de-ue[v],t=v*j+xe;Z[X*5+0]=h,Z[X*5+1]=M,Z[X*5+2]=we,Z[X*5+3]=be,Z[X*5+4]=t}let he;const ie=w/4*16;if(A===Je||A===ut){if(D+24>r.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const X=A===Je?"BCCB":"ACCB",de=s.decode(new Uint8Array(r,D,4));if(de!==X)throw new Error(`NAT2 typeD bad sub-magic: expected '${X}' got '${de}'`);const _e=b.getUint32(D+4,!0),we=b.getUint32(D+8,!0),be=b.getUint32(D+12,!0),xe=b.getUint32(D+16,!0),v=b.getUint32(D+20,!0);if(_e!==1)throw new Error(`NAT2 BCCB unsupported version ${_e}`);if(be!==S/4||xe!==w/4||v!==be*xe)throw new Error(`NAT2 BCCB block grid mismatch: header ${w}×${S}, sub-header ${xe}×${be} (${v} blocks)`);D+=24;const M=we*16;if(D+M>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${M}, have ${r.byteLength-D})`);const h=new Uint8Array(r,D,M);D+=M;const t=v*2;if(D+t>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${t}, have ${r.byteLength-D})`);const c=new Uint16Array(r.slice(D,D+t));D+=t;const a=new Uint8Array(v*16);for(let d=0;d<v;d++){const p=c[d]*16;a.set(h.subarray(p,p+16),d*16)}he=a}else{let X=0;for(let de=0;de<j;de++){const _e=V[de+1]-V[de];if(_e%4!==0)throw new Error(`NAT2 BC7 layer ${de} rows ${_e} not 4-aligned`);X+=_e/4*ie}if(D+X>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${X} more bytes from offset ${D}, have ${r.byteLength-D}`);he=new Uint8Array(r.slice(D,D+X))}return{width:w,height:S,channels:T,kernel_type:G,num_rects:E,uv_extent:I,sb_number:$,format:A,sh_bias:O,res_bias:ne,compact_mult:ae,layer_h:U,atlas_scale:F,atlas_offset:ee,n_layers:j,n_cols:Y,layer_cuts:V,column_cuts:ue,slice_width:fe,rects_expanded:Z,atlas_bytes:he}}const Zn=32;function Hn(r,s,f){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let b,y,w,S;if(s.format===2||s.format===Je||s.format===dt){if(!r.features.has("texture-compression-bc"))return $e(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;S=s.format===dt?"BC7 atlas (proberes: shared probe texture)":s.format===Je?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:b,view:y,sampler:w}=Ct(r,s,"bc7-rgba-unorm",S)}else if(s.format===3||s.format===ut||s.format===ft){if(!r.features.has("texture-compression-astc"))return $e(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;S=s.format===ft?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===ut?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:b,view:y,sampler:w}=Ct(r,s,"astc-4x4-unorm",S)}else return $e(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:T}=s,G=r.createBuffer({label:"atlas rects (5-stride)",size:et(T.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(G,0,T);const E=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return yt(r,E,s,f),{texture:b,view:y,sampler:w,rectsBuffer:G,texParamsBuffer:E,meta:s}}function Ct(r,s,f,b){const{width:y,layer_h:w,n_layers:S,n_cols:T,layer_cuts:G,column_cuts:E,slice_width:I,atlas_bytes:$}=s,O=y/4*16,ne=r.limits.maxTextureDimension2D;if(w>ne||I>ne)throw new Error(`⚠️  atlas slice dims ${I}x${w} exceed maxTextureDimension2D=${ne}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const ae=T*S;if(ae>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${T} cols × ${S} layers = ${ae} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const U=s.mip_bytes??[$],F=U.length,ee=r.createTexture({label:b,size:{width:I,height:w,depthOrArrayLayers:ae},mipLevelCount:F,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let q=0;q<T;q++){const N=E[q]/4,oe=(E[q+1]-E[q])/4;for(let Y=0;Y<S;Y++){const te=G[Y]/4,D=(G[Y+1]-G[Y])/4,J=q*S+Y,V=te*O+N*16;r.queue.writeTexture({texture:ee,mipLevel:0,origin:{x:0,y:0,z:J},aspect:"all"},$,{offset:V,bytesPerRow:O,rowsPerImage:D},{width:oe*4,height:D*4,depthOrArrayLayers:1})}}for(let q=1;q<F;q++){const N=Math.max(1,I>>q),oe=Math.max(1,w>>q);r.queue.writeTexture({texture:ee,mipLevel:q,origin:{x:0,y:0,z:0},aspect:"all"},U[q],{offset:0,bytesPerRow:Math.max(1,N>>2)*16,rowsPerImage:Math.max(1,oe>>2)},{width:N,height:oe,depthOrArrayLayers:1})}F>1&&console.log(`[atlas] ${F} mip levels uploaded (trilinear minification)`);const j=ee.createView({label:`${b} view`,dimension:"2d-array"}),se=r.createSampler({label:`${b} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:F>1?"linear":"nearest"});return{texture:ee,view:j,sampler:se}}function yt(r,s,f,b,y=1){var E;const w=new ArrayBuffer(32),S=new Uint32Array(w),T=new Float32Array(w);S[0]=b?1:0,T[1]=f.atlas_scale,T[2]=f.atlas_offset,T[3]=f.res_bias,S[4]=f.probe_mode?f.probe_mode|0:0,S[5]=f.width|0;const G=(((E=f.mip_bytes)==null?void 0:E.length)??1)>1;S[6]=G&&y!==0?1:0,r.queue.writeBuffer(s,0,w)}async function jn(r,s){$e(`loading ply file from File... : ${r.name}`),Pn("downloading PLY...");const f=await r.arrayBuffer();try{return await Yn(f,s)}finally{Tn()}}async function Yn(r,s){return new Promise((f,b)=>{const y=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});y.onmessage=w=>{var T,G,E,I,$,A,O,ne,ae,U,F,ee;const S=w.data;if((S==null?void 0:S.type)==="error"){Gn(`PLY worker error: ${S.message??"unknown error"}`),y.terminate(),b(new Error(S.message??"Worker error"));return}else if((S==null?void 0:S.type)==="download_progress"){const j=S.totalBytes,se=S.loadedBytes/(1024*1024),q=j?j/(1024*1024):void 0,N=(S.speedBps??0)/(1024*1024),oe=j?Math.min(99,Math.floor(S.loadedBytes/j*100)):void 0,Y=q?`total ${q.toFixed(1)} MB`:"total -- MB",te=q&&oe!==void 0?`${se.toFixed(1)} MB downloaded (${oe}%)`:`${se.toFixed(1)} MB downloaded`,D=`${N.toFixed(2)} MB/s`;ct(`downloading PLY ...
${Y}, ${te}
${D}`);return}else if((S==null?void 0:S.type)==="fetched"){$e(`💾 Fetched (${S.byteLength} bytes)`),Lt("Download"),ct("parsing PLY..."),kn();return}else if((S==null?void 0:S.type)==="parse_progress"){const j=S.total??0,se=S.read??0,q=j>0?Math.floor(se/j*100):0;ct(`parsing PLY ...
${se}/${j} surfels (${q}%)`);return}else if((S==null?void 0:S.type)==="done"){const j=S.num_points,se=S.K,q=S.feature_mode??0,N=S.sh_bias,oe=S.kernel_type,Y=S.surfelBuffer,te=S.svParamsBuffer;$e(`🪐 Total surfels: ${j}, mode=${q===1?"SB":"SV"}, K=${se}, sh_bias=${N}, kernel_type=${oe}`);const J=s.createBuffer({label:"surfel input buffer",size:et(j*Zn),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(J,0,Y);const V=te.byteLength>0?te.byteLength:16,ue=s.createBuffer({label:q===1?"color_params buffer (SB)":"color_params buffer (SV)",size:et(V),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});te.byteLength>0&&s.queue.writeBuffer(ue,0,te),y.terminate(),Lt("Parse"),f({num_points:j,K:se,feature_mode:q,sh_bias:N,kernel_type:oe,surfel_buffer:J,surfel_data:new Float32Array(Y),sv_params_buffer:ue,bbox:S.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:S.centroid??[((((G=(T=S.bbox)==null?void 0:T.min)==null?void 0:G[0])??-1)+(((I=(E=S.bbox)==null?void 0:E.max)==null?void 0:I[0])??1))/2,((((A=($=S.bbox)==null?void 0:$.min)==null?void 0:A[1])??-1)+(((ne=(O=S.bbox)==null?void 0:O.max)==null?void 0:ne[1])??1))/2,((((U=(ae=S.bbox)==null?void 0:ae.min)==null?void 0:U[2])??-1)+(((ee=(F=S.bbox)==null?void 0:F.max)==null?void 0:ee[2])??1))/2]})}},y.onerror=w=>{y.terminate(),b(w)},r instanceof ArrayBuffer?(ct("parsing PLY..."),y.postMessage({type:"start",plyBuffer:r},[r])):y.postMessage({type:"start_url",url:r.url})})}const Vn=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
}`,cn=32,wt=1,bt=2,Wt=4,qt=512,$t=1024,Qn=0,He=new ArrayBuffer(cn),Ce={canvas_size:new Uint32Array(He,0,2),accel_flags:new Uint32Array(He,8,1),feature_mode:new Uint32Array(He,12,1),gaussian_scaling:new Float32Array(He,16,1),sh_bias:new Float32Array(He,20,1),color_K:new Uint32Array(He,24,1),walltime:new Float32Array(He,28,1)};function Kn(r){Ce.canvas_size[0]=r.width>>>0,Ce.canvas_size[1]=r.height>>>0,Ce.accel_flags[0]=(r.accel_flags??wt|bt)>>>0,Ce.feature_mode[0]=(r.feature_mode??Qn)>>>0,Ce.gaussian_scaling[0]=r.gaussian_scaling??1,Ce.sh_bias[0]=r.sh_bias??.5,Ce.color_K[0]=(r.color_K??0)>>>0,Ce.walltime[0]=r.walltime??0}function ln(r,s){r.queue.writeBuffer(s,0,He)}function un(r,s,f){f&&r&&s&&ln(r,s)}function Jn(r,s,f,b,y=!0){Ce.canvas_size[0]=r>>>0,Ce.canvas_size[1]=s>>>0,un(f??null,b??null,y)}function es(r,s,f,b=!0){let y=Ce.accel_flags[0];r.oac!==void 0&&(y=r.oac?y|wt:y&~wt),r.spr!==void 0&&(y=r.spr?y|bt:y&~bt),r.bfc!==void 0&&(y=r.bfc?y|Wt:y&~Wt),r.hypLegacy!==void 0&&(y=r.hypLegacy?y|qt:y&~qt),r.legacyPos!==void 0&&(y=r.legacyPos?y|$t:y&~$t),Ce.accel_flags[0]=y>>>0,un(s??null,f??null,b)}const ts=256;function Nt(r,s){const f=[],b=[];let y=!0;for(const w of r.split(`
`)){const S=w.trim();let T;if((T=/^\/\/#if\s+(\w+)\s*$/.exec(S))!==null){const G=!!s[T[1]];b.push({parent:y,taken:G}),y=y&&G;continue}if(/^\/\/#else\s*$/.test(S)){const G=b[b.length-1];if(G===void 0)throw new Error("preprocessWGSL: #else without #if");y=G.parent&&!G.taken;continue}if(/^\/\/#endif\s*$/.test(S)){const G=b.pop();if(G===void 0)throw new Error("preprocessWGSL: #endif without #if");y=G.parent;continue}y&&f.push(w)}if(b.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const ns=cn,ss=8,rs=96,is=12,Bt=8,Ze=1<<Bt,Xe=256,pt=32/Bt,as=0,Zt=pt&1;function Ht(r,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function os(r,s){const f=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),b=r.createPipelineLayout({bindGroupLayouts:[f]}),y=w=>r.createComputePipeline({layout:b,compute:{module:s,entryPoint:w,constants:{WG_SIZE:Xe}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:f}}function cs(r,s,f){const b=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),w=r.createPipelineLayout({bindGroupLayouts:[b]}),S=r.createPipelineLayout({bindGroupLayouts:[y]}),T=[];for(let G=0;G<pt;G++){const E={PASS_ID:G+as,RS_RADIX_LOG2:Bt,RS_RADIX_SIZE:Ze};T.push({localHistogram:r.createComputePipeline({layout:w,compute:{module:s,entryPoint:"local_histogram_pass",constants:E}}),scatterElements:r.createComputePipeline({layout:S,compute:{module:f,entryPoint:"scatter_elements",constants:E}})})}return{passes:T,localHistogramBindGroupLayout:b,scatterBindGroupLayout:y}}function ls(r){const s=r.createShaderModule({label:"local histogram",code:an}),f=r.createShaderModule({label:"scatter",code:rn}),b=r.createShaderModule({label:"blelloch prefix",code:on}),y=os(r,b),w=cs(r,s,f);return{localHistogramBindGroupLayout:w.localHistogramBindGroupLayout,scatterBindGroupLayout:w.scatterBindGroupLayout,passes:w.passes,hierarchicalBlelloch:y}}function us(r){const s=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=s.createView({dimension:"2d-array"}),b=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),w=r.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(w,0,new ArrayBuffer(32));const S={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:f,sampler:b,rectsBuffer:y,texParamsBuffer:w,meta:S}}class ds{constructor(s,f,b,y,w,S=null,T={}){P(this,"device");P(this,"pc");P(this,"presentationFormat");P(this,"camera_buffer");P(this,"render_settings_buffer");P(this,"draw_indirect_buffer");P(this,"splat_2d_buffer");P(this,"querySet");P(this,"resolveBuffer");P(this,"resultBuffer");P(this,"queriesPerFrame",ss);P(this,"queryCapacityFrames",200);P(this,"sort_prefixBindGroup");P(this,"sort_pipelines");P(this,"sort_localHistogramBindGroups");P(this,"sort_scatterBindGroups");P(this,"lastFrame",0);P(this,"frameCount",0);P(this,"preprocessPipeline");P(this,"cullPipeline");P(this,"renderPipeline");P(this,"indirectPipeline");P(this,"renderShaderModule");P(this,"betaKernel",1);P(this,"fetchById");P(this,"octBound");P(this,"acc16");P(this,"accTexture",null);P(this,"accView",null);P(this,"accW",0);P(this,"accH",0);P(this,"legacyRenderPipeline",null);P(this,"varyingsPipeline",null);P(this,"legacyRenderer",!1);P(this,"accResolvePipeline",null);P(this,"accResolveBgl",null);P(this,"accResolveBindGroup",null);P(this,"renderSettingsBgl");P(this,"renderSplatsBgl");P(this,"atlasBgl");P(this,"sort_info_buffer");P(this,"sort_ping_pong");P(this,"crsBg");P(this,"gsBg");P(this,"cullBg2");P(this,"preprocessBg1");P(this,"renderSplatsBindGroup");P(this,"renderSettingsBindGroup");P(this,"atlasBindGroup");P(this,"indirectBindGroup");P(this,"sh_solvers_buffer");P(this,"bfcParamsBuffer");P(this,"bfcBindGroupLayout");P(this,"bfcBindGroup");P(this,"bgColor",[0,0,0,0]);P(this,"showPerfDialogNext",!1);P(this,"requestReorderNextFrame",!1);P(this,"reorderInFlight",!1);P(this,"downloadOnceNextRead",!1);P(this,"downloadOnceFileName","fps_metrics");P(this,"allFrameTimes",[]);P(this,"lastStageBreakdownMs",null);P(this,"timeQueryEnabled");P(this,"atlas");P(this,"atlasParamsBuffer");P(this,"_atlasEnabled",!0);P(this,"_mipMode",1);this.fetchById=T.fetchById??!0,this.octBound=T.octBound??!1,this.acc16=T.acc16??!1,$e(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const G=w.includes("timestamp-query");this.timeQueryEnabled=G,G&&$e("⏰ using timestamp-query"),this.pc=s,this.device=f,this.presentationFormat=b,this.camera_buffer=y,this.atlas=S??us(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",ie=>{console.error("A WebGPU error was not captured:",ie.error)}),this._setupTimestampQueries(),this._setupBuffers();const E=(Math.floor((this.pc.num_points+Xe-1)/Xe)+1)*Xe,I=Math.ceil(E/Xe);console.log(`keys count adjusted: ${E}`),console.log(`key size: ${this.pc.num_points}`);const $=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ls(f);const A=[Ht(E,f),Ht(E,f)],O=f.createBuffer({label:"workgroup histograms",size:I*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=f.createBuffer({label:"workgroup prefixes",size:I*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=f.createBuffer({label:"digit base",size:Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=Math.ceil(I/Xe),F=Math.ceil(U/Xe),ee=f.createBuffer({label:"prefix l0 sums",size:U*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=f.createBuffer({label:"prefix l0 offsets",size:U*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),se=f.createBuffer({label:"prefix l1 sums",size:F*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=f.createBuffer({label:"prefix l1 offsets",size:F*Ze*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:O}},{binding:2,resource:{buffer:ne}},{binding:3,resource:{buffer:ee}},{binding:4,resource:{buffer:j}},{binding:5,resource:{buffer:se}},{binding:6,resource:{buffer:q}},{binding:7,resource:{buffer:ae}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:A[0].sort_depths_buffer}},{binding:2,resource:{buffer:O}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:A[1].sort_depths_buffer}},{binding:2,resource:{buffer:O}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:ae}},{binding:2,resource:{buffer:A[0].sort_depths_buffer}},{binding:3,resource:{buffer:A[1].sort_depths_buffer}},{binding:4,resource:{buffer:A[0].sort_indices_buffer}},{binding:5,resource:{buffer:A[1].sort_indices_buffer}},{binding:6,resource:{buffer:ne}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:ae}},{binding:2,resource:{buffer:A[1].sort_depths_buffer}},{binding:3,resource:{buffer:A[0].sort_depths_buffer}},{binding:4,resource:{buffer:A[1].sort_indices_buffer}},{binding:5,resource:{buffer:A[0].sort_indices_buffer}},{binding:6,resource:{buffer:ne}}]})],this.sort_info_buffer=$,this.sort_ping_pong=A;const N=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),oe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Y=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),te=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:N,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:oe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:Y,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:te,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const D=this.device.createShaderModule({code:sn});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:D,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const J=this.device.createShaderModule({code:Xn});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[N,oe,Y,this.bfcBindGroupLayout]}),compute:{module:J,entryPoint:"surfel_cull"}});const V=this.device.createShaderModule({code:Vn});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[N,te]}),compute:{module:V,entryPoint:"preprocess"}});const ue=this.device.createShaderModule({label:"render_2dgs",code:Nt(Ft,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ue.getCompilationInfo().then(ie=>{ie.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ie.messages.forEach(X=>{(X.type==="error"?console.error:X.type==="warning"?console.warn:console.log)(`${X.type} (line ${X.lineNum}:${X.linePos}): ${X.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const fe=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),ce=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,C=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:ce,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Z=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),he=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,C,Z]}),vertex:{module:ue,entryPoint:"vs_main"},fragment:{module:ue,entryPoint:"fs_main",constants:{BETA_KERNEL:he},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ye=(ie,X,de)=>{const _e=this.device.createShaderModule({label:`render_2dgs (${ie})`,code:Nt(Ft,{FETCH_BY_ID:X,OCT:de})});return this.device.createRenderPipeline({label:`render_2dgs_${ie}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,C,Z]}),vertex:{module:_e,entryPoint:"vs_main"},fragment:{module:_e,entryPoint:"fs_main",constants:{BETA_KERNEL:he},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=ye("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ye("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(ie=>{ie?console.error("[render_2dgs] pipeline create validation error:",ie.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:fe,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:C,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Zt].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Z,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ue,this.betaKernel=he,this.renderSettingsBgl=fe,this.renderSplatsBgl=C,this.atlasBgl=Z}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(s,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const s=new ArrayBuffer(16),f=new Uint32Array(s),b=new Float32Array(s);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,b[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}ensureAccResources(s,f){var b;if(this.accResolvePipeline===null){const y=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,w=this.device.createShaderModule({label:"acc16_resolve",code:y});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:w,entryPoint:"vs_main"},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===f||((b=this.accTexture)==null||b.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=f)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,yt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,$e(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,es({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const f=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),$e(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(s){this.atlas.meta.format!==4294967295&&(this._mipMode=s?1:0,yt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const f=Math.max(0,Math.min(s,this.pc.num_points)),b=f*Uint32Array.BYTES_PER_ELEMENT;if(b===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),w=this.device.createCommandEncoder();w.copyBufferToBuffer(this.sort_ping_pong[Zt].sort_indices_buffer,0,y,0,b),this.device.queue.submit([w.finish()]),await y.mapAsync(GPUMapMode.READ);const S=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(S)),y.unmap()}frame(s,f,b=!0){const w=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,S=b&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};S&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+0,endOfPassWriteIndex:w+1});const G=s.beginComputePass(T);G.setPipeline(this.cullPipeline),G.setBindGroup(0,this.crsBg),G.setBindGroup(1,this.gsBg),G.setBindGroup(2,this.cullBg2),G.setBindGroup(3,this.bfcBindGroup);const E=Math.ceil(this.pc.num_points/ts);G.dispatchWorkgroups(E,1,1),G.end()}{const T=s.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};S&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+2,endOfPassWriteIndex:w+3});const G=s.beginComputePass(T);G.setPipeline(this.preprocessPipeline),G.setBindGroup(0,this.crsBg),G.setBindGroup(1,this.preprocessBg1),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),G.end()}for(let T=0;T<pt;T++){const G=T&1,E=this.sort_pipelines.passes[T],I=this.sort_localHistogramBindGroups[G],$=this.sort_scatterBindGroups[G];{const A={label:`upsweep_round${T}`};S&&T==0&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+4});const O=s.beginComputePass(A);O.setPipeline(E.localHistogram),O.setBindGroup(0,I),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}{const A=s.beginComputePass({label:`prefix_round${T} - l0TileScan`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),A.end()}{const A=s.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),A.end()}{const A=s.beginComputePass({label:`prefix_round${T} - l1ScanSums`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroups(1,Ze,1),A.end()}{const A=s.beginComputePass({label:`prefix_round${T} - addL1ToL0`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),A.end()}{const A=s.beginComputePass({label:`prefix_round${T} - addL0ToElems`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),A.end()}{const A=s.beginComputePass({label:`prefix_round${T} - computeDigitBase`});A.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),A.setBindGroup(0,this.sort_prefixBindGroup),A.dispatchWorkgroups(1,1,1),A.end()}{const A={label:`scatter_round${T}`};S&&T==pt-1&&(A.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+5});const O=s.beginComputePass(A);O.setPipeline(E.scatterElements),O.setBindGroup(0,$),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}}{let T=f;this.acc16&&(this.ensureAccResources(Ce.canvas_size[0],Ce.canvas_size[1]),T=this.accView);const G={label:"render",colorAttachments:[{view:T,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:w+6,...this.acc16?{}:{endOfPassWriteIndex:w+7}});const E=s.beginRenderPass(G);if(E.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),E.setBindGroup(0,this.renderSettingsBindGroup),E.setBindGroup(1,this.renderSplatsBindGroup),E.setBindGroup(2,this.atlasBindGroup),E.drawIndirect(this.draw_indirect_buffer,0),E.end(),this.acc16){const I={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};S&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:w+7});const $=s.beginRenderPass(I);$.setPipeline(this.accResolvePipeline),$.setBindGroup(0,this.accResolveBindGroup),$.draw(3),$.end()}}this.frameCount++}async readPerfMetrics(s){const f=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const b=this.device.createCommandEncoder({label:"timestamp resolve encoder"});b.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),b.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([b.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const w=new BigInt64Array(this.resultBuffer.getMappedRange()),S=Math.min(this.frameCount,this.queryCapacityFrames),T=(this.lastFrame+this.frameCount-S)%this.queryCapacityFrames,G=Array.from({length:y.length},()=>[]);let E=0;for(let F=0;F<S;F++){const ee=(T+F)%this.queryCapacityFrames,j=ee*this.queriesPerFrame;let se=!0;for(let q=0;q<y.length;q++){const[N,oe,Y]=y[q];if(w[j+Y]===0n||w[j+oe]===0n||w[j+oe]<w[j+Y]){se=!1;break}}if(!se){!f&&ee%60===0&&console.debug("[timestamp] frame slot",ee,"contains unwritten (0) timestamps, skipped in stats");continue}E++;for(let q=0;q<y.length;q++){const[N,oe,Y]=y[q],te=Number(w[j+Y]),D=Number(w[j+oe]);G[q].push((D-te)/1e6)}}if(E===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...G[0]);const I=[];let $=0,A=0,O=0;for(let F=0;F<y.length;F++){const ee=y[F][0],j=G[F];let se=0;if(ee==="Total"){const q=this.allFrameTimes;se=q.reduce((Y,te)=>Y+te,0)/q.length;const N=[...q].sort((Y,te)=>Y-te);$=N[Math.floor(N.length*.99)]||0;const oe=q.reduce((Y,te)=>Y+Math.pow(te-se,2),0)/q.length;A=Math.sqrt(oe),O=se}else se=j.reduce((q,N)=>q+N,0)/j.length;I.push([ee,se])}this.lastFrame+=this.frameCount,this.frameCount=0;const ne=Object.fromEntries(I);this.lastStageBreakdownMs={cull:ne.Culling??0,preprocess:ne.Preprocess??0,sort:ne.Sort??0,render:ne.Render??0,total:ne.Total??0};const U=`[TIMESTAMP - ${this.constructor.name}]
`+I.map(([F,ee])=>`${F}: ${ee.toFixed(3)}ms`).join(`
`)+`
Total P99: ${$.toFixed(3)}ms
Total STD: ${A.toFixed(3)}ms
Total AVG: ${O.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(U),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const F=`Stage,ms
`,ee=I.map(([q,N])=>`${q},${N.toFixed(3)}`).join(`
`),j="data:text/csv;charset=utf-8,"+encodeURIComponent(F+ee),se=document.createElement("a");se.href=j,se.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(se),se.click(),se.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(U)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ns,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),f=s?s.width:1,b=s?s.height:1;Kn({width:f,height:b,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),ln(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:et(this.pc.num_points*rs),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:et(this.pc.num_points*is),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const f=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,b=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${b}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function fs(r){const s=new TextDecoder().decode(new Uint8Array(r,0,4));if(s!=="GSB1")throw new Error(`not a GSB1 file (magic '${s}')`);const f=new DataView(r).getUint32(4,!0),b=JSON.parse(new TextDecoder().decode(new Uint8Array(r,8,f))),y=8+f;return{header:b,bytes:r.byteLength,block(w){const S=b.blocks.find(T=>T.name===w);if(!S)throw new Error(`GSB block '${w}' missing`);return r.slice(y+S.offset,y+S.offset+S.nbytes)}}}const jt=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
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
// offsets into \`mlp_w\`: W0 b0 W1 b1 W2 b2 Wphi bphi Wop bop (row-major [out, in])
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
        let r = j * IN;
        for (var i = 0u; i < IN; i++) { s += mlp_w[r + i] * x[i]; }
        h1[j] = max(s, 0.0);
    }
    var h2: array<f32, 128>;
    for (var j = 0u; j < H2; j++) {
        var s = mlp_w[O_B1 + j];
        let r = O_W1 + j * H1;
        for (var i = 0u; i < H1; i++) { s += mlp_w[r + i] * h1[i]; }
        h2[j] = max(s, 0.0);
    }
    var sp = mlp_w[O_BP];
    var so = mlp_w[O_BO];
    for (var j = 0u; j < H3; j++) {
        var s = mlp_w[O_B2 + j];
        let r = O_W2 + j * H2;
        for (var i = 0u; i < H2; i++) { s += mlp_w[r + i] * h2[i]; }
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
`,Pt=8,Ne=1<<Pt,Ye=256,gt=32/Pt;class ms{constructor(s,f,b){P(this,"depthsIn");P(this,"indicesIn");P(this,"indicesOut");P(this,"owned",[]);P(this,"passes",[]);P(this,"histBg");P(this,"scatterBg");P(this,"prefixBg");P(this,"prefix",{});this.device=s,this.info=b;const y=(Math.floor((f+Ye-1)/Ye)+1)*Ye,w=Math.ceil(y/Ye),S=(V,ue)=>{const fe=s.createBuffer({label:V,size:ue,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(fe),fe},T=[0,1].map(V=>({d:S(`sort keys ${V}`,y*4),p:S(`sort payload ${V}`,y*4)})),G=S("wg histograms",w*Ne*4),E=S("wg prefixes",w*Ne*4),I=S("digit base",Ne*4),$=Math.ceil(w/Ye),A=Math.ceil($/Ye),O=S("l0 sums",$*Ne*4),ne=S("l0 offsets",$*Ne*4),ae=S("l1 sums",A*Ne*4),U=S("l1 offsets",A*Ne*4);this.depthsIn=T[0].d,this.indicesIn=T[0].p,this.indicesOut=T[gt&1].p;const F=V=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:V}}),ee=s.createBindGroupLayout({entries:[{binding:0,...F("read-only-storage")},{binding:1,...F("read-only-storage")},{binding:2,...F("storage")}]}),j=s.createBindGroupLayout({entries:[{binding:0,...F("read-only-storage")},{binding:1,...F("read-only-storage")},{binding:2,...F("read-only-storage")},{binding:3,...F("storage")},{binding:4,...F("read-only-storage")},{binding:5,...F("storage")},{binding:6,...F("read-only-storage")}]}),se=s.createBindGroupLayout({entries:[{binding:0,...F("read-only-storage")},{binding:1,...F("read-only-storage")},...[2,3,4,5,6,7].map(V=>({binding:V,...F("storage")}))]}),q=s.createShaderModule({label:"bench radix histogram",code:an}),N=s.createShaderModule({label:"bench radix scatter",code:rn}),oe=s.createShaderModule({label:"bench radix prefix",code:on}),Y=s.createPipelineLayout({bindGroupLayouts:[ee]}),te=s.createPipelineLayout({bindGroupLayouts:[j]});for(let V=0;V<gt;V++){const ue={PASS_ID:V,RS_RADIX_LOG2:Pt,RS_RADIX_SIZE:Ne};this.passes.push({hist:s.createComputePipeline({layout:Y,compute:{module:q,entryPoint:"local_histogram_pass",constants:ue}}),scatter:s.createComputePipeline({layout:te,compute:{module:N,entryPoint:"scatter_elements",constants:ue}})})}const D=s.createPipelineLayout({bindGroupLayouts:[se]});for(const V of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[V]=s.createComputePipeline({layout:D,compute:{module:oe,entryPoint:V,constants:{WG_SIZE:Ye}}});const J=(V,ue)=>({binding:V,resource:{buffer:ue}});this.prefixBg=s.createBindGroup({layout:se,entries:[J(0,b),J(1,G),J(2,E),J(3,O),J(4,ne),J(5,ae),J(6,U),J(7,I)]}),this.histBg=[0,1].map(V=>s.createBindGroup({layout:ee,entries:[J(0,b),J(1,T[V].d),J(2,G)]})),this.scatterBg=[0,1].map(V=>s.createBindGroup({layout:j,entries:[J(0,b),J(1,I),J(2,T[V].d),J(3,T[1-V].d),J(4,T[V].p),J(5,T[1-V].p),J(6,E)]}))}encode(s){const f=(b,y,w,S)=>{const T=s.beginComputePass();T.setPipeline(b),T.setBindGroup(0,y),w!==null?T.dispatchWorkgroupsIndirect(this.info,w):T.dispatchWorkgroups(S[0],S[1],1),T.end()};for(let b=0;b<gt;b++){const y=b&1;f(this.passes[b].hist,this.histBg[y],4),f(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),f(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),f(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,Ne]),f(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),f(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),f(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),f(this.passes[b].scatter,this.scatterBg[y],4)}}destroy(){for(const s of this.owned)s.destroy()}}const Yt=256,xs=64,Ve=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class ys{constructor(s,f,b,y,w){P(this,"n");P(this,"kind");P(this,"freezeMlp",!1);P(this,"owned",[]);P(this,"params",new ArrayBuffer(32));P(this,"paramsBuf");P(this,"info");P(this,"drawArgs");P(this,"vpBuf");P(this,"indirectPipe");P(this,"indirectBg");P(this,"computeBgs");P(this,"cullPipe");P(this,"mlpPipe",null);P(this,"mlpAllPipe",null);P(this,"prepPipe",null);P(this,"rasterPipe");P(this,"rasterBg");P(this,"sorter",null);P(this,"countCopy",null);P(this,"cullInfoBg",null);P(this,"accTex",null);P(this,"trTex",null);P(this,"resolvePipe",null);P(this,"resolveBgl",null);P(this,"resolveBg",null);P(this,"accFormat");P(this,"wScale");P(this,"eps",null);this.device=s,this.targetFormat=y;const S=f.header;this.n=S.n,this.kind=S.render;const T=S.n,G=(C,Z,he=Ve|GPUBufferUsage.COPY_SRC)=>{const ye=s.createBuffer({label:C,size:Math.max(16,Z+(4-Z%4)%4),usage:he});return this.owned.push(ye),ye},E=(C,Z)=>{const he=Z instanceof ArrayBuffer?new Uint8Array(Z):new Uint8Array(Z.buffer,Z.byteOffset,Z.byteLength),ye=G(C,he.byteLength,Ve);return s.queue.writeBuffer(ye,0,he),ye},I=new Float32Array(f.block("pos")),$=new Float32Array(f.block("cov3d")),A=this.kind==="sorted_3dgs"?new Float32Array(f.block("opacity")):null,O=new Float32Array(T*10);for(let C=0;C<T;C++)O[C*10]=I[C*3],O[C*10+1]=I[C*3+1],O[C*10+2]=I[C*3+2],O[C*10+3]=A?A[C]:1,O.set($.subarray(C*6,C*6+6),C*10+4);const ne=E("bench gauss",O),ae=E("bench sh",f.block("sh"));this.paramsBuf=G("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=w.float32Blend?"rgba32float":"rgba16float",this.wScale=w.float32Blend?1:1/1024;const U=new Uint32Array(this.params),F=new Float32Array(this.params);U[0]=T,U[1]=S.sh_degree,F[2]=w.cutoffMult??S.cutoff_mult??1,F[3]=this.wScale,s.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=G("bench sort info",64,Ve|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=G("bench draw args",16,Ve|GPUBufferUsage.INDIRECT),s.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=G("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const ee=G("bench splats",T*xs),j=s.createShaderModule({label:"bench indirect",code:sn});this.indirectPipe=s.createComputePipeline({layout:"auto",compute:{module:j,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=s.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const se=GPUShaderStage.COMPUTE,q=(C,Z=se)=>s.createBindGroupLayout({entries:C.map((he,ye)=>({binding:ye,visibility:Z,buffer:{type:he}}))}),N=(C,Z)=>({binding:C,resource:{buffer:Z}}),oe=q(["uniform","uniform"]),Y=s.createBindGroup({layout:oe,entries:[N(0,b),N(1,this.paramsBuf)]});let te,D;if(this.kind==="sorted_3dgs"){this.sorter=new ms(s,T,this.info);const C=q(["read-only-storage","read-only-storage","storage"]),Z=q(["storage","storage","storage"]),he=s.createShaderModule({label:"gs3d_cull",code:jt+ps});this.cullPipe=s.createComputePipeline({label:"gs3d_cull",layout:s.createPipelineLayout({bindGroupLayouts:[oe,C,Z]}),compute:{module:he,entryPoint:"cull"}}),this.computeBgs=[Y,s.createBindGroup({layout:C,entries:[N(0,ne),N(1,ae),N(2,ee)]}),s.createBindGroup({layout:Z,entries:[N(0,this.info),N(1,this.sorter.depthsIn),N(2,this.sorter.indicesIn)]})],D=this.sorter.indicesOut,te=G("bench weights stub",16,Ve)}else{const C=new Float32Array(f.block("scale")),Z=new Float32Array(f.block("rot")),he=new Float32Array(T*7);for(let p=0;p<T;p++)he.set(C.subarray(p*3,p*3+3),p*7),he.set(Z.subarray(p*4,p*4+4),p*7+3);const ye=E("bench mgs attr",he),ie=S.mlp.flatMap(p=>[new Float32Array(f.block(`${p.name}.weight`)),new Float32Array(f.block(`${p.name}.bias`))]),X=S.mlp.map(p=>`${p.in_dim}>${p.out_dim}`).join(",");if(X!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${X}`);const de=new Float32Array(ie.reduce((p,m)=>p+m.length,0));let _e=0;for(const p of ie)de.set(p,_e),_e+=p.length;const we=E("bench mgs mlp",de),be=G("bench mgs vis",T*4),xe=G("bench mgs mlp out",T*8);te=G("bench mgs weights",T*4),this.countCopy=G("bench mgs count",16,Ve);const v=q(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),M=q(["read-only-storage","storage","storage","storage","storage"]),h=q(["storage"]),t=s.createShaderModule({label:"mgs_compute",code:jt+hs}),c=s.createPipelineLayout({bindGroupLayouts:[oe,v,M,h]}),a=s.createPipelineLayout({bindGroupLayouts:[oe,v,M]}),d=(p,m)=>s.createComputePipeline({label:`mgs_${p}`,layout:m,compute:{module:t,entryPoint:p}});this.cullPipe=d("cull",c),this.mlpPipe=d("mlp",a),this.mlpAllPipe=d("mlp_all",a),this.prepPipe=d("prep",a),this.computeBgs=[Y,s.createBindGroup({layout:v,entries:[N(0,ne),N(1,ae),N(2,ye),N(3,we)]}),s.createBindGroup({layout:M,entries:[N(0,this.countCopy),N(1,be),N(2,xe),N(3,ee),N(4,te)]})],this.cullInfoBg=s.createBindGroup({layout:h,entries:[N(0,this.info)]}),D=G("bench order stub",16,Ve)}const J=GPUShaderStage.VERTEX,V=s.createBindGroupLayout({entries:[{binding:0,visibility:J,buffer:{type:"read-only-storage"}},{binding:1,visibility:J,buffer:{type:"read-only-storage"}},{binding:2,visibility:J,buffer:{type:"uniform"}},{binding:3,visibility:J,buffer:{type:"read-only-storage"}}]});this.rasterBg=s.createBindGroup({layout:V,entries:[N(0,ee),N(1,D),N(2,this.vpBuf),N(3,te)]});const ue=s.createShaderModule({label:"gs_raster",code:_s}),fe=C=>({operation:"add",srcFactor:"one",dstFactor:C}),ce=this.kind==="sorted_3dgs";if(this.rasterPipe=s.createRenderPipeline({label:ce?"gs_raster over":"gs_raster wsum",layout:s.createPipelineLayout({bindGroupLayouts:[V]}),vertex:{module:ue,entryPoint:ce?"vs_main":"vs_wsum"},fragment:ce?{module:ue,entryPoint:"fs_over",targets:[{format:y,blend:{color:fe("one-minus-src-alpha"),alpha:fe("one-minus-src-alpha")}}]}:{module:ue,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:fe("one"),alpha:fe("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!ce){this.eps=G("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),s.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const C=GPUShaderStage.FRAGMENT;this.resolveBgl=s.createBindGroupLayout({entries:[{binding:0,visibility:C,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:C,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:C,buffer:{type:"uniform"}}]});const Z=s.createShaderModule({label:"mgs_resolve",code:gs});this.resolvePipe=s.createRenderPipeline({layout:s.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:Z,entryPoint:"vs_full"},fragment:{module:Z,entryPoint:"fs_resolve",targets:[{format:y}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(s=32768){if(!this.mlpAllPipe)return;const f=new Uint32Array(this.params);for(let b=0;b<this.n;b+=s){f[4]=b,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const y=this.device.createCommandEncoder(),w=y.beginComputePass();w.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((S,T)=>w.setBindGroup(T,S)),w.dispatchWorkgroups(Math.ceil(Math.min(s,this.n-b)/Yt)),w.end(),this.device.queue.submit([y.finish()]),await this.device.queue.onSubmittedWorkDone()}f[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(s,f){var y,w;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===s&&this.accTex.height===f)return;(y=this.accTex)==null||y.destroy(),(w=this.trTex)==null||w.destroy();const b=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[s,f],format:this.accFormat,usage:b}),this.trTex=this.device.createTexture({label:"mgs T",size:[s,f],format:"r16float",usage:b}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(s,f,b,y){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([b,y,0,0])),this.ensureTargets(b,y);const w=(G,E)=>{const I=s.beginComputePass();I.setPipeline(G),this.computeBgs.forEach(($,A)=>I.setBindGroup(A,$)),!E&&this.cullInfoBg&&I.setBindGroup(3,this.cullInfoBg),E?I.dispatchWorkgroupsIndirect(this.info,4):I.dispatchWorkgroups(Math.ceil(this.n/Yt)),I.end()};s.clearBuffer(this.info,0,4),w(this.cullPipe,!1);{const G=s.beginComputePass();G.setPipeline(this.indirectPipe),G.setBindGroup(0,this.indirectBg),G.dispatchWorkgroups(1),G.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(s);const G=s.beginRenderPass({colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});G.setPipeline(this.rasterPipe),G.setBindGroup(0,this.rasterBg),G.drawIndirect(this.drawArgs,0),G.end();return}s.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||w(this.mlpPipe,!0),w(this.prepPipe,!0);const S=s.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});S.setPipeline(this.rasterPipe),S.setBindGroup(0,this.rasterBg),S.drawIndirect(this.drawArgs,0),S.end();const T=s.beginRenderPass({colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});T.setPipeline(this.resolvePipe),T.setBindGroup(0,this.resolveBg),T.draw(3),T.end()}destroy(){var s,f,b;for(const y of this.owned)y.destroy();(s=this.sorter)==null||s.destroy(),(f=this.accTex)==null||f.destroy(),(b=this.trTex)==null||b.destroy()}}const lt="rgba8unorm",Vt="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",Ke=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],ws=r=>new Promise(s=>setTimeout(s,r)),Xt=()=>new Promise(r=>setTimeout(r,0));function bs(r){const s=new TextDecoder().decode(new Uint8Array(r,0,8));if(s!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${s}')`);const f=new DataView(r);let b=null,y=null;for(let w=0;w<f.getUint32(8,!0);w++){const S=12+w*20,T=f.getUint32(S,!0),G=Number(f.getBigUint64(S+4,!0)),E=Number(f.getBigUint64(S+12,!0));T===0||T===1||T===5?b=r.slice(G,G+E):(T===3||T===4)&&(y=r.slice(G,G+E))}if(!b)throw new Error("bundle has no point cloud chunk");return{pc:b,atlas:y}}async function Qt(r,s){var I;const f=await fetch(r);if(!f.ok)throw new Error(`${r}: HTTP ${f.status}`);const b=Number(f.headers.get("content-length"))||0,y=(I=f.body)==null?void 0:I.getReader();if(!y)return f.arrayBuffer();const w=[];let S=0,T=0;for(;;){const{done:$,value:A}=await y.read();if($)break;w.push(A),S+=A.byteLength,S-T>2<<20&&(T=S,s(S/2**20,b?b/2**20:null))}const G=new Uint8Array(S);let E=0;for(const $ of w)G.set($,E),E+=$.byteLength;return G.buffer}function vt(r,s,f=new Set,b=0){if(!(!r||typeof r!="object"||f.has(r)||b>2)){f.add(r);for(const y of Object.values(r))s.has(y)||(y instanceof GPUBuffer||y instanceof GPUTexture?y.destroy():Array.isArray(y)?y.forEach(w=>vt(w,s,f,b+1)):y&&typeof y=="object"&&Object.getPrototypeOf(y)===Object.prototype&&vt(y,s,f,b+1))}}async function vs(r,s,f,b,y){const w=new URLSearchParams(location.search),S=w.get("scene")??"garden",T=(w.get("assets")??`${Vt}/bench/${S}`).replace(/\/$/,""),G=f.features.has("texture-compression-bc"),E=f.features.has("texture-compression-astc"),I=w.get("bitymi")??`${Vt}/mip_360/${S}_e3rd${G||!E?"":"_astc"}.bitymi`,$=f.features.has("float32-blendable"),A=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform);s.configure({device:f,format:lt,alphaMode:"opaque"});const O=new xt(r,f),ne=new Cn(O),ae=document.getElementById("bench-panel"),U=t=>document.getElementById(t),F=t=>{U("status").textContent=t},ee=await(await fetch(`${T}/manifest.json`)).json(),j=await An(`${T}/${ee.cameras}`),se=await(await fetch(`${T}/${ee.cameras}`)).json(),[q,N]=ee.resolution,oe=2*Math.atan(N/(2*se[0].fy));O.setFov(oe),O.set_preset(j[0]),ne.resetToCamera();const Y=U("method");for(const t of Ke)Y.add(new Option(t.label,t.id));const te=b.info;U("device").textContent=`${te.vendor||"?"} ${te.architecture||""} ${te.device||te.description||""}`.trim()+` · BC7 ${G?"✓":"✗"} ASTC ${E?"✓":"✗"} · float32-blend ${$?"✓":"✗"}`;let D=null,J=!1;async function V(t){const c=performance.now(),a=(x,e)=>F(`${t.label}: downloading ${x.toFixed(0)}${e?` / ${e.toFixed(0)}`:""} MB`);if(t.id==="bitymi"){const x=await Qt(I,a);F(`${t.label}: parsing`);const{pc:e,atlas:u}=bs(x),i=await jn(new File([e],"bundle.ply"),f);let o=null;u&&(o=Hn(f,Nn(u),!0));const n=new ds(i,f,lt,O.uniform_buffer,y,o,{fetchById:!A,octBound:!1,acc16:!1});let l=0,g=0;const _=o?o.meta.format===3||o.meta.format===8||o.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:t,prims:i.num_points,downloadBytes:x.byteLength,detail:`atlas ${_} · fragment inputs ${A?"varyings":"fetch-by-id"} · ${(performance.now()-c).toFixed(0)} ms load`,render(B,k,z,W){(z!==l||W!==g)&&(Jn(z,W,f,n.render_settings_buffer),l=z,g=W),n.frame(B,k,!1)},destroy(){i.surfel_buffer.destroy(),i.sv_params_buffer.destroy(),o&&(o.texture.destroy(),o.rectsBuffer.destroy(),o.texParamsBuffer.destroy()),vt(n,new Set([O.uniform_buffer]))}}}const d=await Qt(`${T}/${ee.methods[t.asset].file}`,a);F(`${t.label}: uploading`);const p=new ys(f,fs(d),O.uniform_buffer,lt,{float32Blend:$});return{def:t,prims:p.n,downloadBytes:d.byteLength,baseline:p,detail:`${p.label}${t.asset==="mobilegs"?` · shipped model ${(ee.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(x,e,u,i)=>p.frame(x,e,u,i),destroy:()=>p.destroy()}}async function ue(t){if(D&&D.def.asset===t.asset&&D.baseline?D={...D,def:t}:(D==null||D.destroy(),D=null,await f.queue.onSubmittedWorkDone(),D=await V(t)),D.baseline&&D.baseline.kind==="sortfree_weighted"){const c=t.id==="mobilegs_frozen";c&&(O.set_preset(j[0]),F("Mobile-GS: evaluating the MLP once for all Gaussians"),await D.baseline.computeAllMlp()),D.baseline.freezeMlp=c}return U("info").textContent=`${D.def.label}: ${D.prims.toLocaleString()} primitives · ${(D.downloadBytes/2**20).toFixed(1)} MB download · ${D.detail}`,F("ready"),D}Y.onchange=async()=>{if(!(J||C)){J=!0;try{await ue(Ke.find(t=>t.id===Y.value))}catch(t){F(`load failed: ${t}`),console.error(t)}finally{J=!1}}};let fe=0;const ce=t=>{fe=(t+j.length)%j.length,O.set_preset(j[fe]),ne.resetToCamera(),U("view").textContent=`${fe+1}/${j.length}`};U("prev").onclick=()=>ce(fe-1),U("next").onclick=()=>ce(fe+1);let C=!1,Z=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(Z=!0)});const he=()=>({warmupS:Number(U("warmup").value),measureS:Number(U("measure").value),minFrames:Number(U("minframes").value),maxS:Number(U("maxs").value),cooldownS:Number(U("cooldown").value),rounds:Number(U("rounds").value),frozen:U("frozen").checked});async function ye(t,c,a){const d=f.createTexture({size:[q,N],format:lt,usage:GPUTextureUsage.RENDER_ATTACHMENT}),p=d.createView();O.setRenderSize(q,N),O.setFov(oe);let m=0;const x=async o=>{const n=performance.now();for(let l=0;l<o;l++){O.set_preset(j[m++%j.length]);const g=f.createCommandEncoder();t.render(g,p,q,N),f.queue.submit([g.finish()])}return await f.queue.onSubmittedWorkDone(),performance.now()-n};let e=1;const u=(o,n)=>{e=Math.max(1,Math.min(60,Math.round(n*250/Math.max(o,1))))},i=`${t.def.label} · round ${c+1}`;Z=!1;try{let o=0,n=0;for(;o<a.warmupS*1e3||n<3;){const B=e,k=await x(B);o+=k,n+=B,u(k,B),F(`${i}: warmup ${(o/1e3).toFixed(1)}/${a.warmupS} s`),await Xt()}let l=0,g=0;const _=[];for(;(l<a.measureS*1e3||g<a.minFrames)&&l<a.maxS*1e3;){const B=e,k=await x(B);l+=k,g+=B,_.push(+(k/B).toFixed(3)),u(k,B),F(`${i}: ${(1e3*g/l).toFixed(1)} FPS · ${g} frames · ${(l/1e3).toFixed(1)} s`),await Xt()}return{round:c,frames:g,ms:l,fps:1e3*g/l,chunkMsPerFrame:_,interrupted:Z}}finally{d.destroy(),O.clearRenderSize(),O.setFov(oe),ce(fe)}}let ie=null;function X(t,c){const a=t.get("bitymi"),d=a&&a.length?a.reduce((m,x)=>m+x.frames,0)/a.reduce((m,x)=>m+x.ms,0)*1e3:0,p=Ke.filter(m=>t.has(m.id)).map(m=>{const x=t.get(m.id),e=x.length?x.reduce((i,o)=>i+o.frames,0)/x.reduce((i,o)=>i+o.ms,0)*1e3:0,u=c.get(m.id);return`<tr><td>${m.label}</td><td>${u?u.prims.toLocaleString():""}</td><td>${u?(u.bytes/2**20).toFixed(0):""}</td><td>${x.map(i=>i.fps.toFixed(1)+(i.interrupted?"⚠":"")).join(" / ")}</td><td><b>${e?e.toFixed(1):""}</b></td><td>${e?(1e3/e).toFixed(1):""}</td><td>${d&&e&&m.id!=="bitymi"?(d/e).toFixed(1)+"×":""}</td></tr>`}).join("");U("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${p}</table>`}async function de(){var e;if(C||J)return;C=!0;const t=he(),c=U("benchall");c.disabled=!0,Y.disabled=!0;let a=null;try{a=await((e=navigator.wakeLock)==null?void 0:e.request("screen"))}catch{}const d=Ke.filter(u=>t.frozen||u.id!=="mobilegs_frozen"),p=new Map,m=new Map,x=new Date().toISOString();try{let u=!0;for(let i=0;i<t.rounds;i++){const o=i%2===0?d:[...d].reverse();for(const n of o){const l=await ue(n);if(m.set(n.id,{prims:l.prims,bytes:l.downloadBytes,detail:l.detail}),!u&&t.cooldownS>0)for(let _=t.cooldownS;_>0;_--)F(`cooldown ${_} s (next: ${n.label})`),await ws(1e3);u=!1;const g=await ye(l,i,t);p.has(n.id)||p.set(n.id,[]),p.get(n.id).push(g),X(p,m)}}ie={kind:"bitymi-mobile-bench",version:1,scene:S,started:x,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:te.vendor,architecture:te.architecture,device:te.device,description:te.description},features:{bc:G,astc:E,float32Blendable:$,timestampQuery:f.features.has("timestamp-query")},resolution:[q,N],fovY:oe,cameras:j.length,assets:T,bitymiUrl:I,protocol:{...t,order:d.map(i=>i.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm"},methods:d.map(i=>({id:i.id,label:i.label,note:i.note,...m.get(i.id),fps:(()=>{const o=p.get(i.id)??[],n=o.reduce((l,g)=>l+g.ms,0);return n?1e3*o.reduce((l,g)=>l+g.frames,0)/n:null})(),rounds:p.get(i.id)??[]}))},F(`done · ${d.length} methods × ${t.rounds} rounds`),U("summary").value=_e(ie),U("export").style.display=""}catch(u){F(`bench failed: ${u}`),console.error(u)}finally{try{await(a==null?void 0:a.release())}catch{}c.disabled=!1,Y.disabled=!1,C=!1,Y.value=(D==null?void 0:D.def.id)??"bitymi"}}function _e(t){var x,e,u,i;const c=(x=t.methods.find(o=>o.id==="bitymi"))==null?void 0:x.fps,a=[t.adapter.vendor,t.adapter.architecture,t.adapter.device||t.adapter.description].filter(Boolean).join(" ")||"unknown GPU",d=(((e=t.userAgent.match(/\(([^)]*)\)/))==null?void 0:e[1])??"")+" "+(((u=t.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:u[0])??""),p=t.protocol;return[`**${t.scene} render benchmark** · ${a} · ${d.trim()}`,`${t.resolution[0]}×${t.resolution[1]}, ${t.cameras} test views · ${p.rounds} rounds mirrored · warmup ${p.warmupS} s · measure ≥${p.measureS} s / ${p.minFrames} frames · cooldown ${p.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...t.methods.map(o=>{var n;return`| ${o.label} | ${((n=o.prims)==null?void 0:n.toLocaleString())??""} | ${o.bytes?(o.bytes/2**20).toFixed(0):""} | ${o.rounds.map(l=>l.fps.toFixed(1)+(l.interrupted?" (tab hidden)":"")).join(" / ")} | ${o.fps?o.fps.toFixed(1):""} | ${o.fps?(1e3/o.fps).toFixed(1):""} | ${o.id!=="bitymi"&&c&&o.fps?(c/o.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${((i=t.methods.find(o=>o.id==="bitymi"))==null?void 0:i.detail)??""}. Mobile-GS blend target: ${t.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}const we=async(t,c)=>{try{await navigator.clipboard.writeText(t)}catch{const a=U("summary");a.value=t,a.select(),document.execCommand("copy")}F(`${c} copied`)};U("benchall").onclick=()=>de(),U("copytable").onclick=()=>{ie&&we(_e(ie),"table")},U("copy").onclick=()=>{ie&&we(JSON.stringify(ie,null,1),"JSON")},U("download").onclick=()=>{if(!ie)return;const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(ie,null,1)],{type:"application/json"})),t.download=`bench_${S}_${(te.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,t.click()};const be=()=>{r.width=Math.max(1,Math.round(r.clientWidth)),r.height=Math.max(1,Math.round(r.clientHeight)),O.on_update_canvas()};new ResizeObserver(be).observe(r),be();let xe=performance.now(),v=0,M=Promise.resolve();async function h(){const t=performance.now(),c=Math.min(.1,(t-xe)/1e3);if(xe=t,!C&&D&&!J){ne.update(c),await M;const a=D;if(!a||C||J){requestAnimationFrame(h);return}const d=performance.now(),p=f.createCommandEncoder();a.render(p,s.getCurrentTexture().createView(),r.width,r.height),f.queue.submit([p.finish()]),M=f.queue.onSubmittedWorkDone().then(()=>{const m=performance.now()-d;v=v?.9*v+.1*m:m,U("live").textContent=`${(1e3/v).toFixed(0)} FPS live (${r.width}×${r.height}, vsync-capped)`})}requestAnimationFrame(h)}requestAnimationFrame(h),ae.style.display="",Y.value="bitymi",J=!0;try{await ue(Ke[0])}catch(t){F(`load failed: ${t}`),console.error(t)}finally{J=!1}}(async()=>{const r=w=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${w}</p>`)};if(navigator.gpu===void 0)return r("WebGPU is not supported in this browser.");const s=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(s===null)return r("No WebGPU adapter available.");const f=[];for(const w of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])s.features.has(w)&&f.push(w);if(s.limits.maxStorageBuffersPerShaderStage<10)return r(`This GPU exposes ${s.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const b=await s.requestDevice({requiredFeatures:f,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:s.limits.maxComputeWorkgroupStorageSize,maxBufferSize:s.limits.maxBufferSize,maxStorageBufferBindingSize:s.limits.maxStorageBufferBindingSize}});b.lost.then(w=>r(`GPU device lost: ${w.message}`)),b.addEventListener("uncapturederror",w=>{var S;return console.error("[bench] WebGPU error:",((S=w.error)==null?void 0:S.message)??w.error)});const y=document.querySelector("#webgpu-canvas");await vs(y,y.getContext("webgpu"),b,s,f)})();
