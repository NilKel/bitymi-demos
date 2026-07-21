var hl=Object.defineProperty;var fl=(o,c,_)=>c in o?hl(o,c,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[c]=_;var J=(o,c,_)=>(fl(o,typeof c!="symbol"?c+"":c,_),_);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))C(y);new MutationObserver(y=>{for(const E of y)if(E.type==="childList")for(const M of E.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&C(M)}).observe(document,{childList:!0,subtree:!0});function _(y){const E={};return y.integrity&&(E.integrity=y.integrity),y.referrerPolicy&&(E.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?E.credentials="include":y.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function C(y){if(y.ep)return;y.ep=!0;const E=_(y);fetch(y.href,E)}})();function _l(o,c){return class extends o{constructor(..._){super(..._),c(this)}}}const ml=_l(Array,o=>o.fill(0));let Rt=1e-6;function bl(o){function c(x=0,k=0){const S=new o(2);return x!==void 0&&(S[0]=x,k!==void 0&&(S[1]=k)),S}const _=c;function C(x,k,S){const i=S??new o(2);return i[0]=x,i[1]=k,i}function y(x,k){const S=k??new o(2);return S[0]=Math.ceil(x[0]),S[1]=Math.ceil(x[1]),S}function E(x,k){const S=k??new o(2);return S[0]=Math.floor(x[0]),S[1]=Math.floor(x[1]),S}function M(x,k){const S=k??new o(2);return S[0]=Math.round(x[0]),S[1]=Math.round(x[1]),S}function z(x,k=0,S=1,i){const m=i??new o(2);return m[0]=Math.min(S,Math.max(k,x[0])),m[1]=Math.min(S,Math.max(k,x[1])),m}function A(x,k,S){const i=S??new o(2);return i[0]=x[0]+k[0],i[1]=x[1]+k[1],i}function R(x,k,S,i){const m=i??new o(2);return m[0]=x[0]+k[0]*S,m[1]=x[1]+k[1]*S,m}function W(x,k){const S=x[0],i=x[1],m=k[0],u=k[1],p=Math.sqrt(S*S+i*i),a=Math.sqrt(m*m+u*u),f=p*a,w=f&&ot(x,k)/f;return Math.acos(w)}function N(x,k,S){const i=S??new o(2);return i[0]=x[0]-k[0],i[1]=x[1]-k[1],i}const L=N;function Q(x,k){return Math.abs(x[0]-k[0])<Rt&&Math.abs(x[1]-k[1])<Rt}function et(x,k){return x[0]===k[0]&&x[1]===k[1]}function H(x,k,S,i){const m=i??new o(2);return m[0]=x[0]+S*(k[0]-x[0]),m[1]=x[1]+S*(k[1]-x[1]),m}function j(x,k,S,i){const m=i??new o(2);return m[0]=x[0]+S[0]*(k[0]-x[0]),m[1]=x[1]+S[1]*(k[1]-x[1]),m}function ut(x,k,S){const i=S??new o(2);return i[0]=Math.max(x[0],k[0]),i[1]=Math.max(x[1],k[1]),i}function U(x,k,S){const i=S??new o(2);return i[0]=Math.min(x[0],k[0]),i[1]=Math.min(x[1],k[1]),i}function q(x,k,S){const i=S??new o(2);return i[0]=x[0]*k,i[1]=x[1]*k,i}const G=q;function ct(x,k,S){const i=S??new o(2);return i[0]=x[0]/k,i[1]=x[1]/k,i}function $(x,k){const S=k??new o(2);return S[0]=1/x[0],S[1]=1/x[1],S}const X=$;function K(x,k,S){const i=S??new o(3),m=x[0]*k[1]-x[1]*k[0];return i[0]=0,i[1]=0,i[2]=m,i}function ot(x,k){return x[0]*k[0]+x[1]*k[1]}function _t(x){const k=x[0],S=x[1];return Math.sqrt(k*k+S*S)}const Lt=_t;function Dt(x){const k=x[0],S=x[1];return k*k+S*S}const Tt=Dt;function mt(x,k){const S=x[0]-k[0],i=x[1]-k[1];return Math.sqrt(S*S+i*i)}const St=mt;function kt(x,k){const S=x[0]-k[0],i=x[1]-k[1];return S*S+i*i}const Z=kt;function nt(x,k){const S=k??new o(2),i=x[0],m=x[1],u=Math.sqrt(i*i+m*m);return u>1e-5?(S[0]=i/u,S[1]=m/u):(S[0]=0,S[1]=0),S}function zt(x,k){const S=k??new o(2);return S[0]=-x[0],S[1]=-x[1],S}function gt(x,k){const S=k??new o(2);return S[0]=x[0],S[1]=x[1],S}const qt=gt;function Mt(x,k,S){const i=S??new o(2);return i[0]=x[0]*k[0],i[1]=x[1]*k[1],i}const Ut=Mt;function dt(x,k,S){const i=S??new o(2);return i[0]=x[0]/k[0],i[1]=x[1]/k[1],i}const Ct=dt;function $t(x=1,k){const S=k??new o(2),i=Math.random()*2*Math.PI;return S[0]=Math.cos(i)*x,S[1]=Math.sin(i)*x,S}function B(x){const k=x??new o(2);return k[0]=0,k[1]=0,k}function F(x,k,S){const i=S??new o(2),m=x[0],u=x[1];return i[0]=m*k[0]+u*k[4]+k[12],i[1]=m*k[1]+u*k[5]+k[13],i}function b(x,k,S){const i=S??new o(2),m=x[0],u=x[1];return i[0]=k[0]*m+k[4]*u+k[8],i[1]=k[1]*m+k[5]*u+k[9],i}function r(x,k,S,i){const m=i??new o(2),u=x[0]-k[0],p=x[1]-k[1],a=Math.sin(S),f=Math.cos(S);return m[0]=u*f-p*a+k[0],m[1]=u*a+p*f+k[1],m}function h(x,k,S){const i=S??new o(2);return nt(x,i),q(i,k,i)}function d(x,k,S){const i=S??new o(2);return _t(x)>k?h(x,k,i):gt(x,i)}function v(x,k,S){const i=S??new o(2);return H(x,k,.5,i)}return{create:c,fromValues:_,set:C,ceil:y,floor:E,round:M,clamp:z,add:A,addScaled:R,angle:W,subtract:N,sub:L,equalsApproximately:Q,equals:et,lerp:H,lerpV:j,max:ut,min:U,mulScalar:q,scale:G,divScalar:ct,inverse:$,invert:X,cross:K,dot:ot,length:_t,len:Lt,lengthSq:Dt,lenSq:Tt,distance:mt,dist:St,distanceSq:kt,distSq:Z,normalize:nt,negate:zt,copy:gt,clone:qt,multiply:Mt,mul:Ut,divide:dt,div:Ct,random:$t,zero:B,transformMat4:F,transformMat3:b,rotate:r,setLength:h,truncate:d,midpoint:v}}const Mi=new Map;function qi(o){let c=Mi.get(o);return c||(c=bl(o),Mi.set(o,c)),c}function vl(o){function c(a,f,w){const g=new o(3);return a!==void 0&&(g[0]=a,f!==void 0&&(g[1]=f,w!==void 0&&(g[2]=w))),g}const _=c;function C(a,f,w,g){const D=g??new o(3);return D[0]=a,D[1]=f,D[2]=w,D}function y(a,f){const w=f??new o(3);return w[0]=Math.ceil(a[0]),w[1]=Math.ceil(a[1]),w[2]=Math.ceil(a[2]),w}function E(a,f){const w=f??new o(3);return w[0]=Math.floor(a[0]),w[1]=Math.floor(a[1]),w[2]=Math.floor(a[2]),w}function M(a,f){const w=f??new o(3);return w[0]=Math.round(a[0]),w[1]=Math.round(a[1]),w[2]=Math.round(a[2]),w}function z(a,f=0,w=1,g){const D=g??new o(3);return D[0]=Math.min(w,Math.max(f,a[0])),D[1]=Math.min(w,Math.max(f,a[1])),D[2]=Math.min(w,Math.max(f,a[2])),D}function A(a,f,w){const g=w??new o(3);return g[0]=a[0]+f[0],g[1]=a[1]+f[1],g[2]=a[2]+f[2],g}function R(a,f,w,g){const D=g??new o(3);return D[0]=a[0]+f[0]*w,D[1]=a[1]+f[1]*w,D[2]=a[2]+f[2]*w,D}function W(a,f){const w=a[0],g=a[1],D=a[2],V=f[0],O=f[1],lt=f[2],it=Math.sqrt(w*w+g*g+D*D),st=Math.sqrt(V*V+O*O+lt*lt),ft=it*st,xt=ft&&ot(a,f)/ft;return Math.acos(xt)}function N(a,f,w){const g=w??new o(3);return g[0]=a[0]-f[0],g[1]=a[1]-f[1],g[2]=a[2]-f[2],g}const L=N;function Q(a,f){return Math.abs(a[0]-f[0])<Rt&&Math.abs(a[1]-f[1])<Rt&&Math.abs(a[2]-f[2])<Rt}function et(a,f){return a[0]===f[0]&&a[1]===f[1]&&a[2]===f[2]}function H(a,f,w,g){const D=g??new o(3);return D[0]=a[0]+w*(f[0]-a[0]),D[1]=a[1]+w*(f[1]-a[1]),D[2]=a[2]+w*(f[2]-a[2]),D}function j(a,f,w,g){const D=g??new o(3);return D[0]=a[0]+w[0]*(f[0]-a[0]),D[1]=a[1]+w[1]*(f[1]-a[1]),D[2]=a[2]+w[2]*(f[2]-a[2]),D}function ut(a,f,w){const g=w??new o(3);return g[0]=Math.max(a[0],f[0]),g[1]=Math.max(a[1],f[1]),g[2]=Math.max(a[2],f[2]),g}function U(a,f,w){const g=w??new o(3);return g[0]=Math.min(a[0],f[0]),g[1]=Math.min(a[1],f[1]),g[2]=Math.min(a[2],f[2]),g}function q(a,f,w){const g=w??new o(3);return g[0]=a[0]*f,g[1]=a[1]*f,g[2]=a[2]*f,g}const G=q;function ct(a,f,w){const g=w??new o(3);return g[0]=a[0]/f,g[1]=a[1]/f,g[2]=a[2]/f,g}function $(a,f){const w=f??new o(3);return w[0]=1/a[0],w[1]=1/a[1],w[2]=1/a[2],w}const X=$;function K(a,f,w){const g=w??new o(3),D=a[2]*f[0]-a[0]*f[2],V=a[0]*f[1]-a[1]*f[0];return g[0]=a[1]*f[2]-a[2]*f[1],g[1]=D,g[2]=V,g}function ot(a,f){return a[0]*f[0]+a[1]*f[1]+a[2]*f[2]}function _t(a){const f=a[0],w=a[1],g=a[2];return Math.sqrt(f*f+w*w+g*g)}const Lt=_t;function Dt(a){const f=a[0],w=a[1],g=a[2];return f*f+w*w+g*g}const Tt=Dt;function mt(a,f){const w=a[0]-f[0],g=a[1]-f[1],D=a[2]-f[2];return Math.sqrt(w*w+g*g+D*D)}const St=mt;function kt(a,f){const w=a[0]-f[0],g=a[1]-f[1],D=a[2]-f[2];return w*w+g*g+D*D}const Z=kt;function nt(a,f){const w=f??new o(3),g=a[0],D=a[1],V=a[2],O=Math.sqrt(g*g+D*D+V*V);return O>1e-5?(w[0]=g/O,w[1]=D/O,w[2]=V/O):(w[0]=0,w[1]=0,w[2]=0),w}function zt(a,f){const w=f??new o(3);return w[0]=-a[0],w[1]=-a[1],w[2]=-a[2],w}function gt(a,f){const w=f??new o(3);return w[0]=a[0],w[1]=a[1],w[2]=a[2],w}const qt=gt;function Mt(a,f,w){const g=w??new o(3);return g[0]=a[0]*f[0],g[1]=a[1]*f[1],g[2]=a[2]*f[2],g}const Ut=Mt;function dt(a,f,w){const g=w??new o(3);return g[0]=a[0]/f[0],g[1]=a[1]/f[1],g[2]=a[2]/f[2],g}const Ct=dt;function $t(a=1,f){const w=f??new o(3),g=Math.random()*2*Math.PI,D=Math.random()*2-1,V=Math.sqrt(1-D*D)*a;return w[0]=Math.cos(g)*V,w[1]=Math.sin(g)*V,w[2]=D*a,w}function B(a){const f=a??new o(3);return f[0]=0,f[1]=0,f[2]=0,f}function F(a,f,w){const g=w??new o(3),D=a[0],V=a[1],O=a[2],lt=f[3]*D+f[7]*V+f[11]*O+f[15]||1;return g[0]=(f[0]*D+f[4]*V+f[8]*O+f[12])/lt,g[1]=(f[1]*D+f[5]*V+f[9]*O+f[13])/lt,g[2]=(f[2]*D+f[6]*V+f[10]*O+f[14])/lt,g}function b(a,f,w){const g=w??new o(3),D=a[0],V=a[1],O=a[2];return g[0]=D*f[0*4+0]+V*f[1*4+0]+O*f[2*4+0],g[1]=D*f[0*4+1]+V*f[1*4+1]+O*f[2*4+1],g[2]=D*f[0*4+2]+V*f[1*4+2]+O*f[2*4+2],g}function r(a,f,w){const g=w??new o(3),D=a[0],V=a[1],O=a[2];return g[0]=D*f[0]+V*f[4]+O*f[8],g[1]=D*f[1]+V*f[5]+O*f[9],g[2]=D*f[2]+V*f[6]+O*f[10],g}function h(a,f,w){const g=w??new o(3),D=f[0],V=f[1],O=f[2],lt=f[3]*2,it=a[0],st=a[1],ft=a[2],xt=V*ft-O*st,ht=O*it-D*ft,bt=D*st-V*it;return g[0]=it+xt*lt+(V*bt-O*ht)*2,g[1]=st+ht*lt+(O*xt-D*bt)*2,g[2]=ft+bt*lt+(D*ht-V*xt)*2,g}function d(a,f){const w=f??new o(3);return w[0]=a[12],w[1]=a[13],w[2]=a[14],w}function v(a,f,w){const g=w??new o(3),D=f*4;return g[0]=a[D+0],g[1]=a[D+1],g[2]=a[D+2],g}function x(a,f){const w=f??new o(3),g=a[0],D=a[1],V=a[2],O=a[4],lt=a[5],it=a[6],st=a[8],ft=a[9],xt=a[10];return w[0]=Math.sqrt(g*g+D*D+V*V),w[1]=Math.sqrt(O*O+lt*lt+it*it),w[2]=Math.sqrt(st*st+ft*ft+xt*xt),w}function k(a,f,w,g){const D=g??new o(3),V=[],O=[];return V[0]=a[0]-f[0],V[1]=a[1]-f[1],V[2]=a[2]-f[2],O[0]=V[0],O[1]=V[1]*Math.cos(w)-V[2]*Math.sin(w),O[2]=V[1]*Math.sin(w)+V[2]*Math.cos(w),D[0]=O[0]+f[0],D[1]=O[1]+f[1],D[2]=O[2]+f[2],D}function S(a,f,w,g){const D=g??new o(3),V=[],O=[];return V[0]=a[0]-f[0],V[1]=a[1]-f[1],V[2]=a[2]-f[2],O[0]=V[2]*Math.sin(w)+V[0]*Math.cos(w),O[1]=V[1],O[2]=V[2]*Math.cos(w)-V[0]*Math.sin(w),D[0]=O[0]+f[0],D[1]=O[1]+f[1],D[2]=O[2]+f[2],D}function i(a,f,w,g){const D=g??new o(3),V=[],O=[];return V[0]=a[0]-f[0],V[1]=a[1]-f[1],V[2]=a[2]-f[2],O[0]=V[0]*Math.cos(w)-V[1]*Math.sin(w),O[1]=V[0]*Math.sin(w)+V[1]*Math.cos(w),O[2]=V[2],D[0]=O[0]+f[0],D[1]=O[1]+f[1],D[2]=O[2]+f[2],D}function m(a,f,w){const g=w??new o(3);return nt(a,g),q(g,f,g)}function u(a,f,w){const g=w??new o(3);return _t(a)>f?m(a,f,g):gt(a,g)}function p(a,f,w){const g=w??new o(3);return H(a,f,.5,g)}return{create:c,fromValues:_,set:C,ceil:y,floor:E,round:M,clamp:z,add:A,addScaled:R,angle:W,subtract:N,sub:L,equalsApproximately:Q,equals:et,lerp:H,lerpV:j,max:ut,min:U,mulScalar:q,scale:G,divScalar:ct,inverse:$,invert:X,cross:K,dot:ot,length:_t,len:Lt,lengthSq:Dt,lenSq:Tt,distance:mt,dist:St,distanceSq:kt,distSq:Z,normalize:nt,negate:zt,copy:gt,clone:qt,multiply:Mt,mul:Ut,divide:dt,div:Ct,random:$t,zero:B,transformMat4:F,transformMat4Upper3x3:b,transformMat3:r,transformQuat:h,getTranslation:d,getAxis:v,getScaling:x,rotateX:k,rotateY:S,rotateZ:i,setLength:m,truncate:u,midpoint:p}}const Bi=new Map;function Dn(o){let c=Bi.get(o);return c||(c=vl(o),Bi.set(o,c)),c}function gl(o){const c=qi(o),_=Dn(o);function C(r,h,d,v,x,k,S,i,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,r!==void 0&&(u[0]=r,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,v!==void 0&&(u[4]=v,x!==void 0&&(u[5]=x,k!==void 0&&(u[6]=k,S!==void 0&&(u[8]=S,i!==void 0&&(u[9]=i,m!==void 0&&(u[10]=m))))))))),u}function y(r,h,d,v,x,k,S,i,m,u){const p=u??new o(12);return p[0]=r,p[1]=h,p[2]=d,p[3]=0,p[4]=v,p[5]=x,p[6]=k,p[7]=0,p[8]=S,p[9]=i,p[10]=m,p[11]=0,p}function E(r,h){const d=h??new o(12);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d}function M(r,h){const d=h??new o(12),v=r[0],x=r[1],k=r[2],S=r[3],i=v+v,m=x+x,u=k+k,p=v*i,a=x*i,f=x*m,w=k*i,g=k*m,D=k*u,V=S*i,O=S*m,lt=S*u;return d[0]=1-f-D,d[1]=a+lt,d[2]=w-O,d[3]=0,d[4]=a-lt,d[5]=1-p-D,d[6]=g+V,d[7]=0,d[8]=w+O,d[9]=g-V,d[10]=1-p-f,d[11]=0,d}function z(r,h){const d=h??new o(12);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d}function A(r,h,d){const v=d??new o(12);return v[0]=r[0]*h,v[1]=r[1]*h,v[2]=r[2]*h,v[4]=r[4]*h,v[5]=r[5]*h,v[6]=r[6]*h,v[8]=r[8]*h,v[9]=r[9]*h,v[10]=r[10]*h,v}const R=A;function W(r,h,d){const v=d??new o(12);return v[0]=r[0]+h[0],v[1]=r[1]+h[1],v[2]=r[2]+h[2],v[4]=r[4]+h[4],v[5]=r[5]+h[5],v[6]=r[6]+h[6],v[8]=r[8]+h[8],v[9]=r[9]+h[9],v[10]=r[10]+h[10],v}function N(r,h){const d=h??new o(12);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[8]=r[8],d[9]=r[9],d[10]=r[10],d}const L=N;function Q(r,h){return Math.abs(r[0]-h[0])<Rt&&Math.abs(r[1]-h[1])<Rt&&Math.abs(r[2]-h[2])<Rt&&Math.abs(r[4]-h[4])<Rt&&Math.abs(r[5]-h[5])<Rt&&Math.abs(r[6]-h[6])<Rt&&Math.abs(r[8]-h[8])<Rt&&Math.abs(r[9]-h[9])<Rt&&Math.abs(r[10]-h[10])<Rt}function et(r,h){return r[0]===h[0]&&r[1]===h[1]&&r[2]===h[2]&&r[4]===h[4]&&r[5]===h[5]&&r[6]===h[6]&&r[8]===h[8]&&r[9]===h[9]&&r[10]===h[10]}function H(r){const h=r??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function j(r,h){const d=h??new o(12);if(d===r){let f;return f=r[1],r[1]=r[4],r[4]=f,f=r[2],r[2]=r[8],r[8]=f,f=r[6],r[6]=r[9],r[9]=f,d}const v=r[0*4+0],x=r[0*4+1],k=r[0*4+2],S=r[1*4+0],i=r[1*4+1],m=r[1*4+2],u=r[2*4+0],p=r[2*4+1],a=r[2*4+2];return d[0]=v,d[1]=S,d[2]=u,d[4]=x,d[5]=i,d[6]=p,d[8]=k,d[9]=m,d[10]=a,d}function ut(r,h){const d=h??new o(12),v=r[0*4+0],x=r[0*4+1],k=r[0*4+2],S=r[1*4+0],i=r[1*4+1],m=r[1*4+2],u=r[2*4+0],p=r[2*4+1],a=r[2*4+2],f=a*i-m*p,w=-a*S+m*u,g=p*S-i*u,D=1/(v*f+x*w+k*g);return d[0]=f*D,d[1]=(-a*x+k*p)*D,d[2]=(m*x-k*i)*D,d[4]=w*D,d[5]=(a*v-k*u)*D,d[6]=(-m*v+k*S)*D,d[8]=g*D,d[9]=(-p*v+x*u)*D,d[10]=(i*v-x*S)*D,d}function U(r){const h=r[0],d=r[0*4+1],v=r[0*4+2],x=r[1*4+0],k=r[1*4+1],S=r[1*4+2],i=r[2*4+0],m=r[2*4+1],u=r[2*4+2];return h*(k*u-m*S)-x*(d*u-m*v)+i*(d*S-k*v)}const q=ut;function G(r,h,d){const v=d??new o(12),x=r[0],k=r[1],S=r[2],i=r[4+0],m=r[4+1],u=r[4+2],p=r[8+0],a=r[8+1],f=r[8+2],w=h[0],g=h[1],D=h[2],V=h[4+0],O=h[4+1],lt=h[4+2],it=h[8+0],st=h[8+1],ft=h[8+2];return v[0]=x*w+i*g+p*D,v[1]=k*w+m*g+a*D,v[2]=S*w+u*g+f*D,v[4]=x*V+i*O+p*lt,v[5]=k*V+m*O+a*lt,v[6]=S*V+u*O+f*lt,v[8]=x*it+i*st+p*ft,v[9]=k*it+m*st+a*ft,v[10]=S*it+u*st+f*ft,v}const ct=G;function $(r,h,d){const v=d??H();return r!==v&&(v[0]=r[0],v[1]=r[1],v[2]=r[2],v[4]=r[4],v[5]=r[5],v[6]=r[6]),v[8]=h[0],v[9]=h[1],v[10]=1,v}function X(r,h){const d=h??c.create();return d[0]=r[8],d[1]=r[9],d}function K(r,h,d){const v=d??c.create(),x=h*4;return v[0]=r[x+0],v[1]=r[x+1],v}function ot(r,h,d,v){const x=v===r?r:N(r,v),k=d*4;return x[k+0]=h[0],x[k+1]=h[1],x}function _t(r,h){const d=h??c.create(),v=r[0],x=r[1],k=r[4],S=r[5];return d[0]=Math.sqrt(v*v+x*x),d[1]=Math.sqrt(k*k+S*S),d}function Lt(r,h){const d=h??_.create(),v=r[0],x=r[1],k=r[2],S=r[4],i=r[5],m=r[6],u=r[8],p=r[9],a=r[10];return d[0]=Math.sqrt(v*v+x*x+k*k),d[1]=Math.sqrt(S*S+i*i+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Dt(r,h){const d=h??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=r[0],d[9]=r[1],d[10]=1,d}function Tt(r,h,d){const v=d??new o(12),x=h[0],k=h[1],S=r[0],i=r[1],m=r[2],u=r[1*4+0],p=r[1*4+1],a=r[1*4+2],f=r[2*4+0],w=r[2*4+1],g=r[2*4+2];return r!==v&&(v[0]=S,v[1]=i,v[2]=m,v[4]=u,v[5]=p,v[6]=a),v[8]=S*x+u*k+f,v[9]=i*x+p*k+w,v[10]=m*x+a*k+g,v}function mt(r,h){const d=h??new o(12),v=Math.cos(r),x=Math.sin(r);return d[0]=v,d[1]=x,d[2]=0,d[4]=-x,d[5]=v,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function St(r,h,d){const v=d??new o(12),x=r[0*4+0],k=r[0*4+1],S=r[0*4+2],i=r[1*4+0],m=r[1*4+1],u=r[1*4+2],p=Math.cos(h),a=Math.sin(h);return v[0]=p*x+a*i,v[1]=p*k+a*m,v[2]=p*S+a*u,v[4]=p*i-a*x,v[5]=p*m-a*k,v[6]=p*u-a*S,r!==v&&(v[8]=r[8],v[9]=r[9],v[10]=r[10]),v}function kt(r,h){const d=h??new o(12),v=Math.cos(r),x=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=v,d[6]=x,d[8]=0,d[9]=-x,d[10]=v,d}function Z(r,h,d){const v=d??new o(12),x=r[4],k=r[5],S=r[6],i=r[8],m=r[9],u=r[10],p=Math.cos(h),a=Math.sin(h);return v[4]=p*x+a*i,v[5]=p*k+a*m,v[6]=p*S+a*u,v[8]=p*i-a*x,v[9]=p*m-a*k,v[10]=p*u-a*S,r!==v&&(v[0]=r[0],v[1]=r[1],v[2]=r[2]),v}function nt(r,h){const d=h??new o(12),v=Math.cos(r),x=Math.sin(r);return d[0]=v,d[1]=0,d[2]=-x,d[4]=0,d[5]=1,d[6]=0,d[8]=x,d[9]=0,d[10]=v,d}function zt(r,h,d){const v=d??new o(12),x=r[0*4+0],k=r[0*4+1],S=r[0*4+2],i=r[2*4+0],m=r[2*4+1],u=r[2*4+2],p=Math.cos(h),a=Math.sin(h);return v[0]=p*x-a*i,v[1]=p*k-a*m,v[2]=p*S-a*u,v[8]=p*i+a*x,v[9]=p*m+a*k,v[10]=p*u+a*S,r!==v&&(v[4]=r[4],v[5]=r[5],v[6]=r[6]),v}const gt=mt,qt=St;function Mt(r,h){const d=h??new o(12);return d[0]=r[0],d[1]=0,d[2]=0,d[4]=0,d[5]=r[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ut(r,h,d){const v=d??new o(12),x=h[0],k=h[1];return v[0]=x*r[0*4+0],v[1]=x*r[0*4+1],v[2]=x*r[0*4+2],v[4]=k*r[1*4+0],v[5]=k*r[1*4+1],v[6]=k*r[1*4+2],r!==v&&(v[8]=r[8],v[9]=r[9],v[10]=r[10]),v}function dt(r,h){const d=h??new o(12);return d[0]=r[0],d[1]=0,d[2]=0,d[4]=0,d[5]=r[1],d[6]=0,d[8]=0,d[9]=0,d[10]=r[2],d}function Ct(r,h,d){const v=d??new o(12),x=h[0],k=h[1],S=h[2];return v[0]=x*r[0*4+0],v[1]=x*r[0*4+1],v[2]=x*r[0*4+2],v[4]=k*r[1*4+0],v[5]=k*r[1*4+1],v[6]=k*r[1*4+2],v[8]=S*r[2*4+0],v[9]=S*r[2*4+1],v[10]=S*r[2*4+2],v}function $t(r,h){const d=h??new o(12);return d[0]=r,d[1]=0,d[2]=0,d[4]=0,d[5]=r,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(r,h,d){const v=d??new o(12);return v[0]=h*r[0*4+0],v[1]=h*r[0*4+1],v[2]=h*r[0*4+2],v[4]=h*r[1*4+0],v[5]=h*r[1*4+1],v[6]=h*r[1*4+2],r!==v&&(v[8]=r[8],v[9]=r[9],v[10]=r[10]),v}function F(r,h){const d=h??new o(12);return d[0]=r,d[1]=0,d[2]=0,d[4]=0,d[5]=r,d[6]=0,d[8]=0,d[9]=0,d[10]=r,d}function b(r,h,d){const v=d??new o(12);return v[0]=h*r[0*4+0],v[1]=h*r[0*4+1],v[2]=h*r[0*4+2],v[4]=h*r[1*4+0],v[5]=h*r[1*4+1],v[6]=h*r[1*4+2],v[8]=h*r[2*4+0],v[9]=h*r[2*4+1],v[10]=h*r[2*4+2],v}return{add:W,clone:L,copy:N,create:C,determinant:U,equals:et,equalsApproximately:Q,fromMat4:E,fromQuat:M,get3DScaling:Lt,getAxis:K,getScaling:_t,getTranslation:X,identity:H,inverse:ut,invert:q,mul:ct,mulScalar:R,multiply:G,multiplyScalar:A,negate:z,rotate:St,rotateX:Z,rotateY:zt,rotateZ:qt,rotation:mt,rotationX:kt,rotationY:nt,rotationZ:gt,scale:Ut,scale3D:Ct,scaling:Mt,scaling3D:dt,set:y,setAxis:ot,setTranslation:$,translate:Tt,translation:Dt,transpose:j,uniformScale:B,uniformScale3D:b,uniformScaling:$t,uniformScaling3D:F}}const Ti=new Map;function wl(o){let c=Ti.get(o);return c||(c=gl(o),Ti.set(o,c)),c}function xl(o){const c=Dn(o);function _(i,m,u,p,a,f,w,g,D,V,O,lt,it,st,ft,xt){const ht=new o(16);return i!==void 0&&(ht[0]=i,m!==void 0&&(ht[1]=m,u!==void 0&&(ht[2]=u,p!==void 0&&(ht[3]=p,a!==void 0&&(ht[4]=a,f!==void 0&&(ht[5]=f,w!==void 0&&(ht[6]=w,g!==void 0&&(ht[7]=g,D!==void 0&&(ht[8]=D,V!==void 0&&(ht[9]=V,O!==void 0&&(ht[10]=O,lt!==void 0&&(ht[11]=lt,it!==void 0&&(ht[12]=it,st!==void 0&&(ht[13]=st,ft!==void 0&&(ht[14]=ft,xt!==void 0&&(ht[15]=xt)))))))))))))))),ht}function C(i,m,u,p,a,f,w,g,D,V,O,lt,it,st,ft,xt,ht){const bt=ht??new o(16);return bt[0]=i,bt[1]=m,bt[2]=u,bt[3]=p,bt[4]=a,bt[5]=f,bt[6]=w,bt[7]=g,bt[8]=D,bt[9]=V,bt[10]=O,bt[11]=lt,bt[12]=it,bt[13]=st,bt[14]=ft,bt[15]=xt,bt}function y(i,m){const u=m??new o(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(i,m){const u=m??new o(16),p=i[0],a=i[1],f=i[2],w=i[3],g=p+p,D=a+a,V=f+f,O=p*g,lt=a*g,it=a*D,st=f*g,ft=f*D,xt=f*V,ht=w*g,bt=w*D,At=w*V;return u[0]=1-it-xt,u[1]=lt+At,u[2]=st-bt,u[3]=0,u[4]=lt-At,u[5]=1-O-xt,u[6]=ft+ht,u[7]=0,u[8]=st+bt,u[9]=ft-ht,u[10]=1-O-it,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(i,m){const u=m??new o(16);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[3]=-i[3],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[7]=-i[7],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u[11]=-i[11],u[12]=-i[12],u[13]=-i[13],u[14]=-i[14],u[15]=-i[15],u}function z(i,m,u){const p=u??new o(16);return p[0]=i[0]+m[0],p[1]=i[1]+m[1],p[2]=i[2]+m[2],p[3]=i[3]+m[3],p[4]=i[4]+m[4],p[5]=i[5]+m[5],p[6]=i[6]+m[6],p[7]=i[7]+m[7],p[8]=i[8]+m[8],p[9]=i[9]+m[9],p[10]=i[10]+m[10],p[11]=i[11]+m[11],p[12]=i[12]+m[12],p[13]=i[13]+m[13],p[14]=i[14]+m[14],p[15]=i[15]+m[15],p}function A(i,m,u){const p=u??new o(16);return p[0]=i[0]*m,p[1]=i[1]*m,p[2]=i[2]*m,p[3]=i[3]*m,p[4]=i[4]*m,p[5]=i[5]*m,p[6]=i[6]*m,p[7]=i[7]*m,p[8]=i[8]*m,p[9]=i[9]*m,p[10]=i[10]*m,p[11]=i[11]*m,p[12]=i[12]*m,p[13]=i[13]*m,p[14]=i[14]*m,p[15]=i[15]*m,p}const R=A;function W(i,m){const u=m??new o(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=i[3],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=i[7],u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=i[11],u[12]=i[12],u[13]=i[13],u[14]=i[14],u[15]=i[15],u}const N=W;function L(i,m){return Math.abs(i[0]-m[0])<Rt&&Math.abs(i[1]-m[1])<Rt&&Math.abs(i[2]-m[2])<Rt&&Math.abs(i[3]-m[3])<Rt&&Math.abs(i[4]-m[4])<Rt&&Math.abs(i[5]-m[5])<Rt&&Math.abs(i[6]-m[6])<Rt&&Math.abs(i[7]-m[7])<Rt&&Math.abs(i[8]-m[8])<Rt&&Math.abs(i[9]-m[9])<Rt&&Math.abs(i[10]-m[10])<Rt&&Math.abs(i[11]-m[11])<Rt&&Math.abs(i[12]-m[12])<Rt&&Math.abs(i[13]-m[13])<Rt&&Math.abs(i[14]-m[14])<Rt&&Math.abs(i[15]-m[15])<Rt}function Q(i,m){return i[0]===m[0]&&i[1]===m[1]&&i[2]===m[2]&&i[3]===m[3]&&i[4]===m[4]&&i[5]===m[5]&&i[6]===m[6]&&i[7]===m[7]&&i[8]===m[8]&&i[9]===m[9]&&i[10]===m[10]&&i[11]===m[11]&&i[12]===m[12]&&i[13]===m[13]&&i[14]===m[14]&&i[15]===m[15]}function et(i){const m=i??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function H(i,m){const u=m??new o(16);if(u===i){let Y;return Y=i[1],i[1]=i[4],i[4]=Y,Y=i[2],i[2]=i[8],i[8]=Y,Y=i[3],i[3]=i[12],i[12]=Y,Y=i[6],i[6]=i[9],i[9]=Y,Y=i[7],i[7]=i[13],i[13]=Y,Y=i[11],i[11]=i[14],i[14]=Y,u}const p=i[0*4+0],a=i[0*4+1],f=i[0*4+2],w=i[0*4+3],g=i[1*4+0],D=i[1*4+1],V=i[1*4+2],O=i[1*4+3],lt=i[2*4+0],it=i[2*4+1],st=i[2*4+2],ft=i[2*4+3],xt=i[3*4+0],ht=i[3*4+1],bt=i[3*4+2],At=i[3*4+3];return u[0]=p,u[1]=g,u[2]=lt,u[3]=xt,u[4]=a,u[5]=D,u[6]=it,u[7]=ht,u[8]=f,u[9]=V,u[10]=st,u[11]=bt,u[12]=w,u[13]=O,u[14]=ft,u[15]=At,u}function j(i,m){const u=m??new o(16),p=i[0*4+0],a=i[0*4+1],f=i[0*4+2],w=i[0*4+3],g=i[1*4+0],D=i[1*4+1],V=i[1*4+2],O=i[1*4+3],lt=i[2*4+0],it=i[2*4+1],st=i[2*4+2],ft=i[2*4+3],xt=i[3*4+0],ht=i[3*4+1],bt=i[3*4+2],At=i[3*4+3],Y=st*At,at=bt*ft,rt=V*At,vt=bt*O,yt=V*ft,pt=st*O,wt=f*At,Bt=bt*w,It=f*ft,Vt=st*w,Ft=f*O,Zt=V*w,Wt=lt*ht,Yt=xt*it,Kt=g*ht,te=xt*D,Xt=g*it,ve=lt*D,le=p*ht,be=xt*a,fe=p*it,Qt=lt*a,ce=p*D,_e=g*a,ue=Y*D+vt*it+yt*ht-(at*D+rt*it+pt*ht),me=at*a+wt*it+Vt*ht-(Y*a+Bt*it+It*ht),ge=rt*a+Bt*D+Ft*ht-(vt*a+wt*D+Zt*ht),qe=pt*a+It*D+Zt*it-(yt*a+Vt*D+Ft*it),jt=1/(p*ue+g*me+lt*ge+xt*qe);return u[0]=jt*ue,u[1]=jt*me,u[2]=jt*ge,u[3]=jt*qe,u[4]=jt*(at*g+rt*lt+pt*xt-(Y*g+vt*lt+yt*xt)),u[5]=jt*(Y*p+Bt*lt+It*xt-(at*p+wt*lt+Vt*xt)),u[6]=jt*(vt*p+wt*g+Zt*xt-(rt*p+Bt*g+Ft*xt)),u[7]=jt*(yt*p+Vt*g+Ft*lt-(pt*p+It*g+Zt*lt)),u[8]=jt*(Wt*O+te*ft+Xt*At-(Yt*O+Kt*ft+ve*At)),u[9]=jt*(Yt*w+le*ft+Qt*At-(Wt*w+be*ft+fe*At)),u[10]=jt*(Kt*w+be*O+ce*At-(te*w+le*O+_e*At)),u[11]=jt*(ve*w+fe*O+_e*ft-(Xt*w+Qt*O+ce*ft)),u[12]=jt*(Kt*st+ve*bt+Yt*V-(Xt*bt+Wt*V+te*st)),u[13]=jt*(fe*bt+Wt*f+be*st-(le*st+Qt*bt+Yt*f)),u[14]=jt*(le*V+_e*bt+te*f-(ce*bt+Kt*f+be*V)),u[15]=jt*(ce*st+Xt*f+Qt*V-(fe*V+_e*st+ve*f)),u}function ut(i){const m=i[0],u=i[0*4+1],p=i[0*4+2],a=i[0*4+3],f=i[1*4+0],w=i[1*4+1],g=i[1*4+2],D=i[1*4+3],V=i[2*4+0],O=i[2*4+1],lt=i[2*4+2],it=i[2*4+3],st=i[3*4+0],ft=i[3*4+1],xt=i[3*4+2],ht=i[3*4+3],bt=lt*ht,At=xt*it,Y=g*ht,at=xt*D,rt=g*it,vt=lt*D,yt=p*ht,pt=xt*a,wt=p*it,Bt=lt*a,It=p*D,Vt=g*a,Ft=bt*w+at*O+rt*ft-(At*w+Y*O+vt*ft),Zt=At*u+yt*O+Bt*ft-(bt*u+pt*O+wt*ft),Wt=Y*u+pt*w+It*ft-(at*u+yt*w+Vt*ft),Yt=vt*u+wt*w+Vt*O-(rt*u+Bt*w+It*O);return m*Ft+f*Zt+V*Wt+st*Yt}const U=j;function q(i,m,u){const p=u??new o(16),a=i[0],f=i[1],w=i[2],g=i[3],D=i[4+0],V=i[4+1],O=i[4+2],lt=i[4+3],it=i[8+0],st=i[8+1],ft=i[8+2],xt=i[8+3],ht=i[12+0],bt=i[12+1],At=i[12+2],Y=i[12+3],at=m[0],rt=m[1],vt=m[2],yt=m[3],pt=m[4+0],wt=m[4+1],Bt=m[4+2],It=m[4+3],Vt=m[8+0],Ft=m[8+1],Zt=m[8+2],Wt=m[8+3],Yt=m[12+0],Kt=m[12+1],te=m[12+2],Xt=m[12+3];return p[0]=a*at+D*rt+it*vt+ht*yt,p[1]=f*at+V*rt+st*vt+bt*yt,p[2]=w*at+O*rt+ft*vt+At*yt,p[3]=g*at+lt*rt+xt*vt+Y*yt,p[4]=a*pt+D*wt+it*Bt+ht*It,p[5]=f*pt+V*wt+st*Bt+bt*It,p[6]=w*pt+O*wt+ft*Bt+At*It,p[7]=g*pt+lt*wt+xt*Bt+Y*It,p[8]=a*Vt+D*Ft+it*Zt+ht*Wt,p[9]=f*Vt+V*Ft+st*Zt+bt*Wt,p[10]=w*Vt+O*Ft+ft*Zt+At*Wt,p[11]=g*Vt+lt*Ft+xt*Zt+Y*Wt,p[12]=a*Yt+D*Kt+it*te+ht*Xt,p[13]=f*Yt+V*Kt+st*te+bt*Xt,p[14]=w*Yt+O*Kt+ft*te+At*Xt,p[15]=g*Yt+lt*Kt+xt*te+Y*Xt,p}const G=q;function ct(i,m,u){const p=u??et();return i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function $(i,m){const u=m??c.create();return u[0]=i[12],u[1]=i[13],u[2]=i[14],u}function X(i,m,u){const p=u??c.create(),a=m*4;return p[0]=i[a+0],p[1]=i[a+1],p[2]=i[a+2],p}function K(i,m,u,p){const a=p===i?p:W(i,p),f=u*4;return a[f+0]=m[0],a[f+1]=m[1],a[f+2]=m[2],a}function ot(i,m){const u=m??c.create(),p=i[0],a=i[1],f=i[2],w=i[4],g=i[5],D=i[6],V=i[8],O=i[9],lt=i[10];return u[0]=Math.sqrt(p*p+a*a+f*f),u[1]=Math.sqrt(w*w+g*g+D*D),u[2]=Math.sqrt(V*V+O*O+lt*lt),u}function _t(i,m,u,p,a){const f=a??new o(16),w=Math.tan(Math.PI*.5-.5*i);if(f[0]=w/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=w,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,Number.isFinite(p)){const g=1/(u-p);f[10]=p*g,f[14]=p*u*g}else f[10]=-1,f[14]=-u;return f}function Lt(i,m,u,p=1/0,a){const f=a??new o(16),w=1/Math.tan(i*.5);if(f[0]=w/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=w,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,p===1/0)f[10]=0,f[14]=u;else{const g=1/(p-u);f[10]=u*g,f[14]=p*u*g}return f}function Dt(i,m,u,p,a,f,w){const g=w??new o(16);return g[0]=2/(m-i),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(p-u),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(a-f),g[11]=0,g[12]=(m+i)/(i-m),g[13]=(p+u)/(u-p),g[14]=a/(a-f),g[15]=1,g}function Tt(i,m,u,p,a,f,w){const g=w??new o(16),D=m-i,V=p-u,O=a-f;return g[0]=2*a/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*a/V,g[6]=0,g[7]=0,g[8]=(i+m)/D,g[9]=(p+u)/V,g[10]=f/O,g[11]=-1,g[12]=0,g[13]=0,g[14]=a*f/O,g[15]=0,g}function mt(i,m,u,p,a,f=1/0,w){const g=w??new o(16),D=m-i,V=p-u;if(g[0]=2*a/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*a/V,g[6]=0,g[7]=0,g[8]=(i+m)/D,g[9]=(p+u)/V,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,f===1/0)g[10]=0,g[14]=a;else{const O=1/(f-a);g[10]=a*O,g[14]=f*a*O}return g}const St=c.create(),kt=c.create(),Z=c.create();function nt(i,m,u,p){const a=p??new o(16);return c.normalize(c.subtract(m,i,Z),Z),c.normalize(c.cross(u,Z,St),St),c.normalize(c.cross(Z,St,kt),kt),a[0]=St[0],a[1]=St[1],a[2]=St[2],a[3]=0,a[4]=kt[0],a[5]=kt[1],a[6]=kt[2],a[7]=0,a[8]=Z[0],a[9]=Z[1],a[10]=Z[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function zt(i,m,u,p){const a=p??new o(16);return c.normalize(c.subtract(i,m,Z),Z),c.normalize(c.cross(u,Z,St),St),c.normalize(c.cross(Z,St,kt),kt),a[0]=St[0],a[1]=St[1],a[2]=St[2],a[3]=0,a[4]=kt[0],a[5]=kt[1],a[6]=kt[2],a[7]=0,a[8]=Z[0],a[9]=Z[1],a[10]=Z[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function gt(i,m,u,p){const a=p??new o(16);return c.normalize(c.subtract(i,m,Z),Z),c.normalize(c.cross(u,Z,St),St),c.normalize(c.cross(Z,St,kt),kt),a[0]=St[0],a[1]=kt[0],a[2]=Z[0],a[3]=0,a[4]=St[1],a[5]=kt[1],a[6]=Z[1],a[7]=0,a[8]=St[2],a[9]=kt[2],a[10]=Z[2],a[11]=0,a[12]=-(St[0]*i[0]+St[1]*i[1]+St[2]*i[2]),a[13]=-(kt[0]*i[0]+kt[1]*i[1]+kt[2]*i[2]),a[14]=-(Z[0]*i[0]+Z[1]*i[1]+Z[2]*i[2]),a[15]=1,a}function qt(i,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=i[0],u[13]=i[1],u[14]=i[2],u[15]=1,u}function Mt(i,m,u){const p=u??new o(16),a=m[0],f=m[1],w=m[2],g=i[0],D=i[1],V=i[2],O=i[3],lt=i[1*4+0],it=i[1*4+1],st=i[1*4+2],ft=i[1*4+3],xt=i[2*4+0],ht=i[2*4+1],bt=i[2*4+2],At=i[2*4+3],Y=i[3*4+0],at=i[3*4+1],rt=i[3*4+2],vt=i[3*4+3];return i!==p&&(p[0]=g,p[1]=D,p[2]=V,p[3]=O,p[4]=lt,p[5]=it,p[6]=st,p[7]=ft,p[8]=xt,p[9]=ht,p[10]=bt,p[11]=At),p[12]=g*a+lt*f+xt*w+Y,p[13]=D*a+it*f+ht*w+at,p[14]=V*a+st*f+bt*w+rt,p[15]=O*a+ft*f+At*w+vt,p}function Ut(i,m){const u=m??new o(16),p=Math.cos(i),a=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function dt(i,m,u){const p=u??new o(16),a=i[4],f=i[5],w=i[6],g=i[7],D=i[8],V=i[9],O=i[10],lt=i[11],it=Math.cos(m),st=Math.sin(m);return p[4]=it*a+st*D,p[5]=it*f+st*V,p[6]=it*w+st*O,p[7]=it*g+st*lt,p[8]=it*D-st*a,p[9]=it*V-st*f,p[10]=it*O-st*w,p[11]=it*lt-st*g,i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function Ct(i,m){const u=m??new o(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function $t(i,m,u){const p=u??new o(16),a=i[0*4+0],f=i[0*4+1],w=i[0*4+2],g=i[0*4+3],D=i[2*4+0],V=i[2*4+1],O=i[2*4+2],lt=i[2*4+3],it=Math.cos(m),st=Math.sin(m);return p[0]=it*a-st*D,p[1]=it*f-st*V,p[2]=it*w-st*O,p[3]=it*g-st*lt,p[8]=it*D+st*a,p[9]=it*V+st*f,p[10]=it*O+st*w,p[11]=it*lt+st*g,i!==p&&(p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function B(i,m){const u=m??new o(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function F(i,m,u){const p=u??new o(16),a=i[0*4+0],f=i[0*4+1],w=i[0*4+2],g=i[0*4+3],D=i[1*4+0],V=i[1*4+1],O=i[1*4+2],lt=i[1*4+3],it=Math.cos(m),st=Math.sin(m);return p[0]=it*a+st*D,p[1]=it*f+st*V,p[2]=it*w+st*O,p[3]=it*g+st*lt,p[4]=it*D-st*a,p[5]=it*V-st*f,p[6]=it*O-st*w,p[7]=it*lt-st*g,i!==p&&(p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function b(i,m,u){const p=u??new o(16);let a=i[0],f=i[1],w=i[2];const g=Math.sqrt(a*a+f*f+w*w);a/=g,f/=g,w/=g;const D=a*a,V=f*f,O=w*w,lt=Math.cos(m),it=Math.sin(m),st=1-lt;return p[0]=D+(1-D)*lt,p[1]=a*f*st+w*it,p[2]=a*w*st-f*it,p[3]=0,p[4]=a*f*st-w*it,p[5]=V+(1-V)*lt,p[6]=f*w*st+a*it,p[7]=0,p[8]=a*w*st+f*it,p[9]=f*w*st-a*it,p[10]=O+(1-O)*lt,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const r=b;function h(i,m,u,p){const a=p??new o(16);let f=m[0],w=m[1],g=m[2];const D=Math.sqrt(f*f+w*w+g*g);f/=D,w/=D,g/=D;const V=f*f,O=w*w,lt=g*g,it=Math.cos(u),st=Math.sin(u),ft=1-it,xt=V+(1-V)*it,ht=f*w*ft+g*st,bt=f*g*ft-w*st,At=f*w*ft-g*st,Y=O+(1-O)*it,at=w*g*ft+f*st,rt=f*g*ft+w*st,vt=w*g*ft-f*st,yt=lt+(1-lt)*it,pt=i[0],wt=i[1],Bt=i[2],It=i[3],Vt=i[4],Ft=i[5],Zt=i[6],Wt=i[7],Yt=i[8],Kt=i[9],te=i[10],Xt=i[11];return a[0]=xt*pt+ht*Vt+bt*Yt,a[1]=xt*wt+ht*Ft+bt*Kt,a[2]=xt*Bt+ht*Zt+bt*te,a[3]=xt*It+ht*Wt+bt*Xt,a[4]=At*pt+Y*Vt+at*Yt,a[5]=At*wt+Y*Ft+at*Kt,a[6]=At*Bt+Y*Zt+at*te,a[7]=At*It+Y*Wt+at*Xt,a[8]=rt*pt+vt*Vt+yt*Yt,a[9]=rt*wt+vt*Ft+yt*Kt,a[10]=rt*Bt+vt*Zt+yt*te,a[11]=rt*It+vt*Wt+yt*Xt,i!==a&&(a[12]=i[12],a[13]=i[13],a[14]=i[14],a[15]=i[15]),a}const d=h;function v(i,m){const u=m??new o(16);return u[0]=i[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function x(i,m,u){const p=u??new o(16),a=m[0],f=m[1],w=m[2];return p[0]=a*i[0*4+0],p[1]=a*i[0*4+1],p[2]=a*i[0*4+2],p[3]=a*i[0*4+3],p[4]=f*i[1*4+0],p[5]=f*i[1*4+1],p[6]=f*i[1*4+2],p[7]=f*i[1*4+3],p[8]=w*i[2*4+0],p[9]=w*i[2*4+1],p[10]=w*i[2*4+2],p[11]=w*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function k(i,m){const u=m??new o(16);return u[0]=i,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function S(i,m,u){const p=u??new o(16);return p[0]=m*i[0*4+0],p[1]=m*i[0*4+1],p[2]=m*i[0*4+2],p[3]=m*i[0*4+3],p[4]=m*i[1*4+0],p[5]=m*i[1*4+1],p[6]=m*i[1*4+2],p[7]=m*i[1*4+3],p[8]=m*i[2*4+0],p[9]=m*i[2*4+1],p[10]=m*i[2*4+2],p[11]=m*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}return{add:z,aim:nt,axisRotate:h,axisRotation:b,cameraAim:zt,clone:N,copy:W,create:_,determinant:ut,equals:Q,equalsApproximately:L,fromMat3:y,fromQuat:E,frustum:Tt,frustumReverseZ:mt,getAxis:X,getScaling:ot,getTranslation:$,identity:et,inverse:j,invert:U,lookAt:gt,mul:G,mulScalar:R,multiply:q,multiplyScalar:A,negate:M,ortho:Dt,perspective:_t,perspectiveReverseZ:Lt,rotate:d,rotateX:dt,rotateY:$t,rotateZ:F,rotation:r,rotationX:Ut,rotationY:Ct,rotationZ:B,scale:x,scaling:v,set:C,setAxis:K,setTranslation:ct,translate:Mt,translation:qt,transpose:H,uniformScale:S,uniformScaling:k}}const Di=new Map;function yl(o){let c=Di.get(o);return c||(c=xl(o),Di.set(o,c)),c}function Pl(o){const c=Dn(o);function _(B,F,b,r){const h=new o(4);return B!==void 0&&(h[0]=B,F!==void 0&&(h[1]=F,b!==void 0&&(h[2]=b,r!==void 0&&(h[3]=r)))),h}const C=_;function y(B,F,b,r,h){const d=h??new o(4);return d[0]=B,d[1]=F,d[2]=b,d[3]=r,d}function E(B,F,b){const r=b??new o(4),h=F*.5,d=Math.sin(h);return r[0]=d*B[0],r[1]=d*B[1],r[2]=d*B[2],r[3]=Math.cos(h),r}function M(B,F){const b=F??c.create(3),r=Math.acos(B[3])*2,h=Math.sin(r*.5);return h>Rt?(b[0]=B[0]/h,b[1]=B[1]/h,b[2]=B[2]/h):(b[0]=1,b[1]=0,b[2]=0),{angle:r,axis:b}}function z(B,F){const b=_t(B,F);return Math.acos(2*b*b-1)}function A(B,F,b){const r=b??new o(4),h=B[0],d=B[1],v=B[2],x=B[3],k=F[0],S=F[1],i=F[2],m=F[3];return r[0]=h*m+x*k+d*i-v*S,r[1]=d*m+x*S+v*k-h*i,r[2]=v*m+x*i+h*S-d*k,r[3]=x*m-h*k-d*S-v*i,r}const R=A;function W(B,F,b){const r=b??new o(4),h=F*.5,d=B[0],v=B[1],x=B[2],k=B[3],S=Math.sin(h),i=Math.cos(h);return r[0]=d*i+k*S,r[1]=v*i+x*S,r[2]=x*i-v*S,r[3]=k*i-d*S,r}function N(B,F,b){const r=b??new o(4),h=F*.5,d=B[0],v=B[1],x=B[2],k=B[3],S=Math.sin(h),i=Math.cos(h);return r[0]=d*i-x*S,r[1]=v*i+k*S,r[2]=x*i+d*S,r[3]=k*i-v*S,r}function L(B,F,b){const r=b??new o(4),h=F*.5,d=B[0],v=B[1],x=B[2],k=B[3],S=Math.sin(h),i=Math.cos(h);return r[0]=d*i+v*S,r[1]=v*i-d*S,r[2]=x*i+k*S,r[3]=k*i-x*S,r}function Q(B,F,b,r){const h=r??new o(4),d=B[0],v=B[1],x=B[2],k=B[3];let S=F[0],i=F[1],m=F[2],u=F[3],p=d*S+v*i+x*m+k*u;p<0&&(p=-p,S=-S,i=-i,m=-m,u=-u);let a,f;if(1-p>Rt){const w=Math.acos(p),g=Math.sin(w);a=Math.sin((1-b)*w)/g,f=Math.sin(b*w)/g}else a=1-b,f=b;return h[0]=a*d+f*S,h[1]=a*v+f*i,h[2]=a*x+f*m,h[3]=a*k+f*u,h}function et(B,F){const b=F??new o(4),r=B[0],h=B[1],d=B[2],v=B[3],x=r*r+h*h+d*d+v*v,k=x?1/x:0;return b[0]=-r*k,b[1]=-h*k,b[2]=-d*k,b[3]=v*k,b}function H(B,F){const b=F??new o(4);return b[0]=-B[0],b[1]=-B[1],b[2]=-B[2],b[3]=B[3],b}function j(B,F){const b=F??new o(4),r=B[0]+B[5]+B[10];if(r>0){const h=Math.sqrt(r+1);b[3]=.5*h;const d=.5/h;b[0]=(B[6]-B[9])*d,b[1]=(B[8]-B[2])*d,b[2]=(B[1]-B[4])*d}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const d=(h+1)%3,v=(h+2)%3,x=Math.sqrt(B[h*4+h]-B[d*4+d]-B[v*4+v]+1);b[h]=.5*x;const k=.5/x;b[3]=(B[d*4+v]-B[v*4+d])*k,b[d]=(B[d*4+h]+B[h*4+d])*k,b[v]=(B[v*4+h]+B[h*4+v])*k}return b}function ut(B,F,b,r,h){const d=h??new o(4),v=B*.5,x=F*.5,k=b*.5,S=Math.sin(v),i=Math.cos(v),m=Math.sin(x),u=Math.cos(x),p=Math.sin(k),a=Math.cos(k);switch(r){case"xyz":d[0]=S*u*a+i*m*p,d[1]=i*m*a-S*u*p,d[2]=i*u*p+S*m*a,d[3]=i*u*a-S*m*p;break;case"xzy":d[0]=S*u*a-i*m*p,d[1]=i*m*a-S*u*p,d[2]=i*u*p+S*m*a,d[3]=i*u*a+S*m*p;break;case"yxz":d[0]=S*u*a+i*m*p,d[1]=i*m*a-S*u*p,d[2]=i*u*p-S*m*a,d[3]=i*u*a+S*m*p;break;case"yzx":d[0]=S*u*a+i*m*p,d[1]=i*m*a+S*u*p,d[2]=i*u*p-S*m*a,d[3]=i*u*a-S*m*p;break;case"zxy":d[0]=S*u*a-i*m*p,d[1]=i*m*a+S*u*p,d[2]=i*u*p+S*m*a,d[3]=i*u*a-S*m*p;break;case"zyx":d[0]=S*u*a-i*m*p,d[1]=i*m*a+S*u*p,d[2]=i*u*p-S*m*a,d[3]=i*u*a+S*m*p;break;default:throw new Error(`Unknown rotation order: ${r}`)}return d}function U(B,F){const b=F??new o(4);return b[0]=B[0],b[1]=B[1],b[2]=B[2],b[3]=B[3],b}const q=U;function G(B,F,b){const r=b??new o(4);return r[0]=B[0]+F[0],r[1]=B[1]+F[1],r[2]=B[2]+F[2],r[3]=B[3]+F[3],r}function ct(B,F,b){const r=b??new o(4);return r[0]=B[0]-F[0],r[1]=B[1]-F[1],r[2]=B[2]-F[2],r[3]=B[3]-F[3],r}const $=ct;function X(B,F,b){const r=b??new o(4);return r[0]=B[0]*F,r[1]=B[1]*F,r[2]=B[2]*F,r[3]=B[3]*F,r}const K=X;function ot(B,F,b){const r=b??new o(4);return r[0]=B[0]/F,r[1]=B[1]/F,r[2]=B[2]/F,r[3]=B[3]/F,r}function _t(B,F){return B[0]*F[0]+B[1]*F[1]+B[2]*F[2]+B[3]*F[3]}function Lt(B,F,b,r){const h=r??new o(4);return h[0]=B[0]+b*(F[0]-B[0]),h[1]=B[1]+b*(F[1]-B[1]),h[2]=B[2]+b*(F[2]-B[2]),h[3]=B[3]+b*(F[3]-B[3]),h}function Dt(B){const F=B[0],b=B[1],r=B[2],h=B[3];return Math.sqrt(F*F+b*b+r*r+h*h)}const Tt=Dt;function mt(B){const F=B[0],b=B[1],r=B[2],h=B[3];return F*F+b*b+r*r+h*h}const St=mt;function kt(B,F){const b=F??new o(4),r=B[0],h=B[1],d=B[2],v=B[3],x=Math.sqrt(r*r+h*h+d*d+v*v);return x>1e-5?(b[0]=r/x,b[1]=h/x,b[2]=d/x,b[3]=v/x):(b[0]=0,b[1]=0,b[2]=0,b[3]=1),b}function Z(B,F){return Math.abs(B[0]-F[0])<Rt&&Math.abs(B[1]-F[1])<Rt&&Math.abs(B[2]-F[2])<Rt&&Math.abs(B[3]-F[3])<Rt}function nt(B,F){return B[0]===F[0]&&B[1]===F[1]&&B[2]===F[2]&&B[3]===F[3]}function zt(B){const F=B??new o(4);return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}const gt=c.create(),qt=c.create(),Mt=c.create();function Ut(B,F,b){const r=b??new o(4),h=c.dot(B,F);return h<-.999999?(c.cross(qt,B,gt),c.len(gt)<1e-6&&c.cross(Mt,B,gt),c.normalize(gt,gt),E(gt,Math.PI,r),r):h>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(c.cross(B,F,gt),r[0]=gt[0],r[1]=gt[1],r[2]=gt[2],r[3]=1+h,kt(r,r))}const dt=new o(4),Ct=new o(4);function $t(B,F,b,r,h,d){const v=d??new o(4);return Q(B,r,h,dt),Q(F,b,h,Ct),Q(dt,Ct,2*h*(1-h),v),v}return{create:_,fromValues:C,set:y,fromAxisAngle:E,toAxisAngle:M,angle:z,multiply:A,mul:R,rotateX:W,rotateY:N,rotateZ:L,slerp:Q,inverse:et,conjugate:H,fromMat:j,fromEuler:ut,copy:U,clone:q,add:G,subtract:ct,sub:$,mulScalar:X,scale:K,divScalar:ot,dot:_t,lerp:Lt,length:Dt,len:Tt,lengthSq:mt,lenSq:St,normalize:kt,equalsApproximately:Z,equals:nt,identity:zt,rotationTo:Ut,sqlerp:$t}}const Ai=new Map;function Sl(o){let c=Ai.get(o);return c||(c=Pl(o),Ai.set(o,c)),c}function kl(o){function c(b,r,h,d){const v=new o(4);return b!==void 0&&(v[0]=b,r!==void 0&&(v[1]=r,h!==void 0&&(v[2]=h,d!==void 0&&(v[3]=d)))),v}const _=c;function C(b,r,h,d,v){const x=v??new o(4);return x[0]=b,x[1]=r,x[2]=h,x[3]=d,x}function y(b,r){const h=r??new o(4);return h[0]=Math.ceil(b[0]),h[1]=Math.ceil(b[1]),h[2]=Math.ceil(b[2]),h[3]=Math.ceil(b[3]),h}function E(b,r){const h=r??new o(4);return h[0]=Math.floor(b[0]),h[1]=Math.floor(b[1]),h[2]=Math.floor(b[2]),h[3]=Math.floor(b[3]),h}function M(b,r){const h=r??new o(4);return h[0]=Math.round(b[0]),h[1]=Math.round(b[1]),h[2]=Math.round(b[2]),h[3]=Math.round(b[3]),h}function z(b,r=0,h=1,d){const v=d??new o(4);return v[0]=Math.min(h,Math.max(r,b[0])),v[1]=Math.min(h,Math.max(r,b[1])),v[2]=Math.min(h,Math.max(r,b[2])),v[3]=Math.min(h,Math.max(r,b[3])),v}function A(b,r,h){const d=h??new o(4);return d[0]=b[0]+r[0],d[1]=b[1]+r[1],d[2]=b[2]+r[2],d[3]=b[3]+r[3],d}function R(b,r,h,d){const v=d??new o(4);return v[0]=b[0]+r[0]*h,v[1]=b[1]+r[1]*h,v[2]=b[2]+r[2]*h,v[3]=b[3]+r[3]*h,v}function W(b,r,h){const d=h??new o(4);return d[0]=b[0]-r[0],d[1]=b[1]-r[1],d[2]=b[2]-r[2],d[3]=b[3]-r[3],d}const N=W;function L(b,r){return Math.abs(b[0]-r[0])<Rt&&Math.abs(b[1]-r[1])<Rt&&Math.abs(b[2]-r[2])<Rt&&Math.abs(b[3]-r[3])<Rt}function Q(b,r){return b[0]===r[0]&&b[1]===r[1]&&b[2]===r[2]&&b[3]===r[3]}function et(b,r,h,d){const v=d??new o(4);return v[0]=b[0]+h*(r[0]-b[0]),v[1]=b[1]+h*(r[1]-b[1]),v[2]=b[2]+h*(r[2]-b[2]),v[3]=b[3]+h*(r[3]-b[3]),v}function H(b,r,h,d){const v=d??new o(4);return v[0]=b[0]+h[0]*(r[0]-b[0]),v[1]=b[1]+h[1]*(r[1]-b[1]),v[2]=b[2]+h[2]*(r[2]-b[2]),v[3]=b[3]+h[3]*(r[3]-b[3]),v}function j(b,r,h){const d=h??new o(4);return d[0]=Math.max(b[0],r[0]),d[1]=Math.max(b[1],r[1]),d[2]=Math.max(b[2],r[2]),d[3]=Math.max(b[3],r[3]),d}function ut(b,r,h){const d=h??new o(4);return d[0]=Math.min(b[0],r[0]),d[1]=Math.min(b[1],r[1]),d[2]=Math.min(b[2],r[2]),d[3]=Math.min(b[3],r[3]),d}function U(b,r,h){const d=h??new o(4);return d[0]=b[0]*r,d[1]=b[1]*r,d[2]=b[2]*r,d[3]=b[3]*r,d}const q=U;function G(b,r,h){const d=h??new o(4);return d[0]=b[0]/r,d[1]=b[1]/r,d[2]=b[2]/r,d[3]=b[3]/r,d}function ct(b,r){const h=r??new o(4);return h[0]=1/b[0],h[1]=1/b[1],h[2]=1/b[2],h[3]=1/b[3],h}const $=ct;function X(b,r){return b[0]*r[0]+b[1]*r[1]+b[2]*r[2]+b[3]*r[3]}function K(b){const r=b[0],h=b[1],d=b[2],v=b[3];return Math.sqrt(r*r+h*h+d*d+v*v)}const ot=K;function _t(b){const r=b[0],h=b[1],d=b[2],v=b[3];return r*r+h*h+d*d+v*v}const Lt=_t;function Dt(b,r){const h=b[0]-r[0],d=b[1]-r[1],v=b[2]-r[2],x=b[3]-r[3];return Math.sqrt(h*h+d*d+v*v+x*x)}const Tt=Dt;function mt(b,r){const h=b[0]-r[0],d=b[1]-r[1],v=b[2]-r[2],x=b[3]-r[3];return h*h+d*d+v*v+x*x}const St=mt;function kt(b,r){const h=r??new o(4),d=b[0],v=b[1],x=b[2],k=b[3],S=Math.sqrt(d*d+v*v+x*x+k*k);return S>1e-5?(h[0]=d/S,h[1]=v/S,h[2]=x/S,h[3]=k/S):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function Z(b,r){const h=r??new o(4);return h[0]=-b[0],h[1]=-b[1],h[2]=-b[2],h[3]=-b[3],h}function nt(b,r){const h=r??new o(4);return h[0]=b[0],h[1]=b[1],h[2]=b[2],h[3]=b[3],h}const zt=nt;function gt(b,r,h){const d=h??new o(4);return d[0]=b[0]*r[0],d[1]=b[1]*r[1],d[2]=b[2]*r[2],d[3]=b[3]*r[3],d}const qt=gt;function Mt(b,r,h){const d=h??new o(4);return d[0]=b[0]/r[0],d[1]=b[1]/r[1],d[2]=b[2]/r[2],d[3]=b[3]/r[3],d}const Ut=Mt;function dt(b){const r=b??new o(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r}function Ct(b,r,h){const d=h??new o(4),v=b[0],x=b[1],k=b[2],S=b[3];return d[0]=r[0]*v+r[4]*x+r[8]*k+r[12]*S,d[1]=r[1]*v+r[5]*x+r[9]*k+r[13]*S,d[2]=r[2]*v+r[6]*x+r[10]*k+r[14]*S,d[3]=r[3]*v+r[7]*x+r[11]*k+r[15]*S,d}function $t(b,r,h){const d=h??new o(4);return kt(b,d),U(d,r,d)}function B(b,r,h){const d=h??new o(4);return K(b)>r?$t(b,r,d):nt(b,d)}function F(b,r,h){const d=h??new o(4);return et(b,r,.5,d)}return{create:c,fromValues:_,set:C,ceil:y,floor:E,round:M,clamp:z,add:A,addScaled:R,subtract:W,sub:N,equalsApproximately:L,equals:Q,lerp:et,lerpV:H,max:j,min:ut,mulScalar:U,scale:q,divScalar:G,inverse:ct,invert:$,dot:X,length:K,len:ot,lengthSq:_t,lenSq:Lt,distance:Dt,dist:Tt,distanceSq:mt,distSq:St,normalize:kt,negate:Z,copy:nt,clone:zt,multiply:gt,mul:qt,divide:Mt,div:Ut,zero:dt,transformMat4:Ct,setLength:$t,truncate:B,midpoint:F}}const Ii=new Map;function Cl(o){let c=Ii.get(o);return c||(c=kl(o),Ii.set(o,c)),c}function ps(o,c,_,C,y,E){return{mat3:wl(o),mat4:yl(c),quat:Sl(_),vec2:qi(C),vec3:Dn(y),vec4:Cl(E)}}const{mat3:he,mat4:ee,quat:se,vec2:zi,vec3:I,vec4:Ac}=ps(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ps(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ps(ml,Array,Array,Array,Array,Array);const Ri=document.querySelector("#log");let oe=null,Ne=null;function $i(){if(oe)return oe;oe=document.createElement("div"),oe.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",oe.appendChild(o),Ne=document.createElement("div"),Ne.className="ply-spinner-label",oe.appendChild(Ne),oe.style.display="none",document.body.appendChild(oe),oe}function hs(o){$i(),Ne&&o&&(Ne.textContent=o),oe&&(oe.style.opacity="1",oe.style.display="flex")}function Oe(o){$i(),Ne&&(Ne.textContent=o)}function _n(){if(!oe)return;const o=oe;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Wi(o,c){if(!Ri)return;const _=document.createElement("p");_.innerText=o,c&&Object.assign(_.style,c),Ri.appendChild(_)}async function ie(o){console.log(o),Wi(o)}async function El(o){console.error(o),Wi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ji;function Ki(){ji=performance.now()}function Li(o){const c=performance.now()-ji;ie(`⏱️ ${o} Time: ${c.toFixed(0)} ms`)}function Ml(o,c){if(!o)throw new Error(c&&(typeof c=="string"?c:c()))}function Qe(o){return o+3&-4}const Bl=2,Tl=3,mn=5,Fe=6,bn=7;function Dl(o){const c=new TextDecoder("ascii"),_=c.decode(new Uint8Array(o,0,4));if(_!=="NAT2")throw new Error(`NAT2 bad magic: '${_}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const C=new DataView(o),y=4,E=C.getUint32(y+0,!0),M=C.getUint32(y+4,!0),z=C.getUint32(y+8,!0),A=C.getUint32(y+12,!0),R=C.getUint32(y+16,!0),W=C.getFloat32(y+20,!0),N=C.getUint32(y+24,!0),L=C.getUint32(y+28,!0),Q=C.getFloat32(y+32,!0),et=C.getFloat32(y+36,!0),H=C.getFloat32(y+40,!0),j=C.getUint32(y+44,!0),ut=C.getFloat32(y+48,!0),U=C.getFloat32(y+52,!0),q=C.getUint32(y+56,!0),G=C.getUint32(y+60,!0),ct=G>0?G:1;if(L!==Bl&&L!==Tl&&L!==mn&&L!==Fe&&L!==bn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${L}`);if(L!==mn&&L!==Fe&&(E%4!==0||j%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${E} layer_h=${j}`);let $=y+64;const X=(q+1)*4,K=new Uint32Array(o.slice($,$+X));$+=X;let ot;if(ct>1){const Z=(ct+1)*4;if($+Z>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Z} from ${$})`);ot=new Uint32Array(o.slice($,$+Z)),$+=Z}else ot=new Uint32Array([0,E]);let _t=0;for(let Z=0;Z<ct;Z++){const nt=ot[Z+1]-ot[Z];nt>_t&&(_t=nt)}const Lt=R*4*4;if($+Lt>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Lt} more bytes from offset ${$}, have ${o.byteLength-$}`);const Dt=new Float32Array(o.slice($,$+Lt));$+=Lt;const Tt=new Float32Array(R*5);for(let Z=0;Z<R;Z++){const nt=Dt[Z*4+0],zt=Dt[Z*4+1],gt=Dt[Z*4+2],qt=Dt[Z*4+3];let Mt=0;for(let B=1;B<=q&&K[B]<=zt;B++)Mt=B;let Ut=0;for(let B=1;B<=ct&&ot[B]<=nt;B++)Ut=B;const dt=zt-K[Mt],Ct=nt-ot[Ut],$t=Ut*q+Mt;Tt[Z*5+0]=Ct,Tt[Z*5+1]=dt,Tt[Z*5+2]=gt,Tt[Z*5+3]=qt,Tt[Z*5+4]=$t}if(L===mn||L===Fe){if($+24>o.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const Z=c.decode(new Uint8Array(o,$,4));if(Z!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${Z}'`);const nt=C.getUint32($+4,!0),zt=C.getUint32($+8,!0),gt=C.getUint32($+12,!0),qt=C.getUint32($+16,!0),Mt=C.getUint32($+20,!0);if(nt!==1)throw new Error(`NAT2 RVQP unsupported version ${nt}`);if(qt!==R)throw new Error(`NAT2 RVQP num_rects ${qt} != header num_rects ${R}`);if($+=24,$+16>o.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const Ut=new Float32Array(o.slice($,$+8)),dt=new Float32Array(o.slice($+8,$+16));$+=16;const Ct=zt*gt,$t=2*zt*gt,B=L===Fe?(Ct>>2)*($t>>2)*16:Ct*$t*4;if($+B>o.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${o.byteLength-$})`);const F=new Uint8Array(o.slice($,$+B));$+=B;const b=Mt*4;if($+b>o.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${b}, have ${o.byteLength-$})`);const r=new Uint32Array(o.slice($,$+b));$+=b;const h=(R+1)*4;if($+h>o.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${o.byteLength-$})`);const d=new Uint32Array(o.slice($,$+h));return $+=h,{width:E,height:M,channels:z,kernel_type:A,num_rects:R,uv_extent:W,sb_number:N,format:L,sh_bias:Q,res_bias:et,compact_mult:H,layer_h:j,atlas_scale:ut,atlas_offset:U,n_layers:q,n_cols:ct,layer_cuts:K,column_cuts:ot,slice_width:_t,rects_expanded:Tt,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:zt,B:gt,N_used:Mt,pair_scale:Ut,pair_offset:dt,codebook_image:F,packed_indices:r,surfel_offsets:d}}}let mt;const kt=E/4*16;if(L===bn){if($+24>o.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const Z=c.decode(new Uint8Array(o,$,4));if(Z!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${Z}'`);const nt=C.getUint32($+4,!0),zt=C.getUint32($+8,!0),gt=C.getUint32($+12,!0),qt=C.getUint32($+16,!0),Mt=C.getUint32($+20,!0);if(nt!==1)throw new Error(`NAT2 BCCB unsupported version ${nt}`);if(gt!==M/4||qt!==E/4||Mt!==gt*qt)throw new Error(`NAT2 BCCB block grid mismatch: header ${E}×${M}, sub-header ${qt}×${gt} (${Mt} blocks)`);$+=24;const Ut=zt*16;if($+Ut>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Ut}, have ${o.byteLength-$})`);const dt=new Uint8Array(o,$,Ut);$+=Ut;const Ct=Mt*2;if($+Ct>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${Ct}, have ${o.byteLength-$})`);const $t=new Uint16Array(o.slice($,$+Ct));$+=Ct;const B=new Uint8Array(Mt*16);for(let F=0;F<Mt;F++){const b=$t[F]*16;B.set(dt.subarray(b,b+16),F*16)}mt=B}else{let Z=0;for(let nt=0;nt<q;nt++){const zt=K[nt+1]-K[nt];if(zt%4!==0)throw new Error(`NAT2 BC7 layer ${nt} rows ${zt} not 4-aligned`);Z+=zt/4*kt}if($+Z>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Z} more bytes from offset ${$}, have ${o.byteLength-$}`);mt=new Uint8Array(o.slice($,$+Z))}return{width:E,height:M,channels:z,kernel_type:A,num_rects:R,uv_extent:W,sb_number:N,format:L,sh_bias:Q,res_bias:et,compact_mult:H,layer_h:j,atlas_scale:ut,atlas_offset:U,n_layers:q,n_cols:ct,layer_cuts:K,column_cuts:ot,slice_width:_t,rects_expanded:Tt,atlas_bytes:mt}}const Al=32;function Il(o){const c=o.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=c.createView({dimension:"2d-array"}),C=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:c,view:_,sampler:C}}function zl(o){const c=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=c.createView({dimension:"2d"}),C=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),y=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),E=y.createView({dimension:"2d"}),M=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:c,cbView:_,cbSamp:C,packedTex:y,packedView:E,offsetsBuf:M}}function Rl(o,c,_){const C=c.format===mn||c.format===Fe,y=c.format===Fe;let E,M,z,A;if(C){const U=Il(o);E=U.tex,M=U.view,z=U.sampler,A="RVQ-paired atlas"}else if(c.format===2||c.format===bn){if(!o.features.has("texture-compression-bc"))return ie(`⚠️  bundle is BC7 (format=${c.format}) but texture-compression-bc not supported — atlas disabled`),null;A=c.format===bn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:M,sampler:z}=Gi(o,c,"bc7-rgba-unorm",A)}else if(c.format===3){if(!o.features.has("texture-compression-astc"))return ie("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;A="ASTC 4x4 atlas",{texture:E,view:M,sampler:z}=Gi(o,c,"astc-4x4-unorm",A)}else return ie(`⚠️  unsupported atlas format ${c.format} — atlas disabled`),null;const{rects_expanded:R}=c,W=o.createBuffer({label:"atlas rects (5-stride)",size:Qe(R.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(W,0,R);let N,L,Q,et,H,j;if(C){if(!c.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const U=c.rvq_paired,q=U.K_orig*U.B,G=2*U.K_orig*U.B;if(q>o.limits.maxTextureDimension2D||G>o.limits.maxTextureDimension2D)return ie(`⚠️  RVQ codebook ${q}x${G} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;let ct,$;if(y){if(!o.features.has("texture-compression-bc"))return ie("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ct="bc7-rgba-unorm",$=(q>>2)*16}else ct="rgba8unorm",$=q*4;const X=o.createTexture({label:y?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:q,height:G,depthOrArrayLayers:1},format:ct,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});o.queue.writeTexture({texture:X},U.codebook_image,{offset:0,bytesPerRow:$,rowsPerImage:G},{width:q,height:G,depthOrArrayLayers:1}),N=X,L=X.createView({dimension:"2d"}),Q=o.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const K=8192,ot=U.N_used,_t=Math.ceil(ot/K);if(_t>o.limits.maxTextureDimension2D||K>o.limits.maxTextureDimension2D)return ie(`⚠️  RVQ packed_indices texture ${K}x${_t} exceeds maxTextureDimension2D=${o.limits.maxTextureDimension2D} — atlas disabled`),null;et=o.createTexture({label:"rvq packed_indices (r32uint)",size:{width:K,height:_t,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Lt=K*_t;let Dt;if(Lt===ot)Dt=new Uint8Array(U.packed_indices.buffer,U.packed_indices.byteOffset,U.packed_indices.byteLength);else{const Tt=new Uint32Array(Lt);Tt.set(U.packed_indices),Dt=new Uint8Array(Tt.buffer)}o.queue.writeTexture({texture:et},Dt,{offset:0,bytesPerRow:K*4,rowsPerImage:_t},{width:K,height:_t,depthOrArrayLayers:1}),H=et.createView({dimension:"2d"}),j=o.createBuffer({label:"rvq surfel_offsets",size:Qe(U.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer(j,0,U.surfel_offsets),ie(`🪡 RVQ-paired atlas wired: codebook ${q}x${G} (${(U.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${ot.toLocaleString()} packed indices as r32uint ${K}x${_t} (${(U.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${U.surfel_offsets.length} surfel_offsets`)}else{const U=zl(o);N=U.cbTex,L=U.cbView,Q=U.cbSamp,et=U.packedTex,H=U.packedView,j=U.offsetsBuf}const ut=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Hi(o,ut,c,_),{texture:E,view:M,sampler:z,rectsBuffer:W,texParamsBuffer:ut,meta:c,rvqCodebookTexture:N,rvqCodebookView:L,rvqCodebookSampler:Q,rvqPackedIndicesTexture:et,rvqPackedIndicesView:H,rvqSurfelOffsetsBuffer:j}}function Gi(o,c,_,C){const{width:y,layer_h:E,n_layers:M,n_cols:z,layer_cuts:A,column_cuts:R,slice_width:W,atlas_bytes:N}=c,Q=y/4*16,et=o.limits.maxTextureDimension2D;if(E>et||W>et)throw new Error(`⚠️  atlas slice dims ${W}x${E} exceed maxTextureDimension2D=${et}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const H=z*M;if(H>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${z} cols × ${M} layers = ${H} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const j=o.createTexture({label:C,size:{width:W,height:E,depthOrArrayLayers:H},mipLevelCount:1,sampleCount:1,dimension:"2d",format:_,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let q=0;q<z;q++){const G=R[q]/4,ct=(R[q+1]-R[q])/4;for(let $=0;$<M;$++){const X=A[$]/4,K=(A[$+1]-A[$])/4,ot=q*M+$,_t=X*Q+G*16;o.queue.writeTexture({texture:j,mipLevel:0,origin:{x:0,y:0,z:ot},aspect:"all"},N,{offset:_t,bytesPerRow:Q,rowsPerImage:K},{width:ct*4,height:K*4,depthOrArrayLayers:1})}}const ut=j.createView({label:`${C} view`,dimension:"2d-array"}),U=o.createSampler({label:`${C} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:j,view:ut,sampler:U}}function Hi(o,c,_,C){const y=new ArrayBuffer(48),E=new Uint32Array(y),M=new Float32Array(y),z=_.slice_width||_.width;E[0]=C?z:0,E[1]=_.layer_h;let A=_.format;A===Fe&&(A=mn),A===bn&&(A=2),E[2]=A,M[3]=_.atlas_scale,M[4]=_.atlas_offset,M[5]=_.uv_extent,M[6]=_.res_bias,_.rvq_paired?(E[7]=_.rvq_paired.B,M[8]=_.rvq_paired.pair_scale[0],M[9]=_.rvq_paired.pair_scale[1],M[10]=_.rvq_paired.pair_offset[0],M[11]=_.rvq_paired.pair_offset[1]):(E[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),o.queue.writeBuffer(c,0,y)}async function os(o,c){ie(`loading ply file from File... : ${o.name}`),hs("downloading PLY...");const _=await o.arrayBuffer();try{return await Yi(_,c)}finally{_n()}}async function Ll(o,c){ie(`loading ply file from URL... : ${o}`),hs("downloading PLY...");try{Ki();const _=new URL(o,self.location.href).href;return await Yi({url:_},c)}finally{_n()}}async function Yi(o,c){return new Promise((_,C)=>{const y=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});y.onmessage=E=>{var z,A,R,W,N,L,Q,et,H,j,ut,U;const M=E.data;if((M==null?void 0:M.type)==="error"){El(`PLY worker error: ${M.message??"unknown error"}`),y.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const q=M.totalBytes,G=M.loadedBytes/(1024*1024),ct=q?q/(1024*1024):void 0,$=(M.speedBps??0)/(1024*1024),X=q?Math.min(99,Math.floor(M.loadedBytes/q*100)):void 0,K=ct?`total ${ct.toFixed(1)} MB`:"total -- MB",ot=ct&&X!==void 0?`${G.toFixed(1)} MB downloaded (${X}%)`:`${G.toFixed(1)} MB downloaded`,_t=`${$.toFixed(2)} MB/s`;Oe(`downloading PLY ...
${K}, ${ot}
${_t}`);return}else if((M==null?void 0:M.type)==="fetched"){ie(`💾 Fetched (${M.byteLength} bytes)`),Li("Download"),Oe("parsing PLY..."),Ki();return}else if((M==null?void 0:M.type)==="parse_progress"){const q=M.total??0,G=M.read??0,ct=q>0?Math.floor(G/q*100):0;Oe(`parsing PLY ...
${G}/${q} surfels (${ct}%)`);return}else if((M==null?void 0:M.type)==="done"){const q=M.num_points,G=M.K,ct=M.feature_mode??0,$=M.sh_bias,X=M.kernel_type,K=M.surfelBuffer,ot=M.svParamsBuffer;ie(`🪐 Total surfels: ${q}, mode=${ct===1?"SB":"SV"}, K=${G}, sh_bias=${$}, kernel_type=${X}`);const Lt=c.createBuffer({label:"surfel input buffer",size:Qe(q*Al),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});c.queue.writeBuffer(Lt,0,K);const Dt=ot.byteLength>0?ot.byteLength:16,Tt=c.createBuffer({label:ct===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Qe(Dt),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ot.byteLength>0&&c.queue.writeBuffer(Tt,0,ot),y.terminate(),Li("Parse"),_({num_points:q,K:G,feature_mode:ct,sh_bias:$,kernel_type:X,surfel_buffer:Lt,surfel_data:new Float32Array(K),sv_params_buffer:Tt,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(z=M.bbox)==null?void 0:z.min)==null?void 0:A[0])??-1)+(((W=(R=M.bbox)==null?void 0:R.max)==null?void 0:W[0])??1))/2,((((L=(N=M.bbox)==null?void 0:N.min)==null?void 0:L[1])??-1)+(((et=(Q=M.bbox)==null?void 0:Q.max)==null?void 0:et[1])??1))/2,((((j=(H=M.bbox)==null?void 0:H.min)==null?void 0:j[2])??-1)+(((U=(ut=M.bbox)==null?void 0:ut.max)==null?void 0:U[2])??1))/2]})}},y.onerror=E=>{y.terminate(),C(E)},o instanceof ArrayBuffer?(Oe("parsing PLY..."),y.postMessage({type:"start",plyBuffer:o},[o])):y.postMessage({type:"start_url",url:o.url})})}var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,c){(function(_,C){C(c)})(Gl,function(_){class C{constructor(t){const[e,s]=t.split("-"),l=e.split(".");this.major=parseInt(l[0],10),this.minor=parseInt(l[1],10),this.patch=parseInt(l[2],10),this.prerelease=s??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}class y{constructor(t){this.controller_=t}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(t){this.controller_.viewProps.set("disabled",t)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(t){this.controller_.viewProps.set("hidden",t)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class E{constructor(t){this.target=t}}class M extends E{constructor(t,e,s,l){super(t),this.value=e,this.presetKey=s,this.last=l??!0}}class z extends E{constructor(t,e,s){super(t),this.value=e,this.presetKey=s}}class A extends E{constructor(t,e){super(t),this.expanded=e}}class R extends E{constructor(t,e){super(t),this.index=e}}function W(n){return n}function N(n){return n==null}function L(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Q(n,t){let e=n;do{const s=Object.getOwnPropertyDescriptor(e,t);if(s&&(s.set!==void 0||s.writable===!0))return!0;e=Object.getPrototypeOf(e)}while(e!==null);return!1}const et={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class H{static alreadyDisposed(){return new H({type:"alreadydisposed"})}static notBindable(){return new H({type:"notbindable"})}static propertyNotFound(t){return new H({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new H({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=et[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}}class j{constructor(t,e,s){this.obj_=t,this.key_=e,this.presetKey_=s??e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(t){this.obj_[this.key_]=t}writeProperty(t,e){const s=this.read();if(!j.isBindable(s))throw H.notBindable();if(!(t in s))throw H.propertyNotFound(t);s[t]=e}}class ut extends y{get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get title(){var t;return(t=this.controller_.valueController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.valueController.props.set("title",t)}on(t,e){const s=e.bind(this);return this.controller_.valueController.emitter.on(t,()=>{s(new E(this))}),this}}class U{constructor(){this.observers_={}}on(t,e){let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e}),this}off(t,e){const s=this.observers_[t];return s&&(this.observers_[t]=s.filter(l=>l.handler!==e)),this}emit(t,e){const s=this.observers_[t];s&&s.forEach(l=>{l.handler(e)})}}const q="tp";function G(n){return(e,s)=>[q,"-",n,"v",e?`_${e}`:"",s?`-${s}`:""].join("")}function ct(n,t){return e=>t(n(e))}function $(n){return n.rawValue}function X(n,t){n.emitter.on("change",ct($,t)),t(n.rawValue)}function K(n,t,e){X(n.value(t),e)}function ot(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function _t(n,t){return e=>{ot(n,t,e)}}function Lt(n,t){X(n,e=>{t.textContent=e??""})}const Dt=G("btn");class Tt{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Dt()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("button");s.classList.add(Dt("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const l=t.createElement("div");l.classList.add(Dt("t")),Lt(e.props.value("title"),l),this.buttonElement.appendChild(l)}}class mt{constructor(t,e){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Tt(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class St{constructor(t,e){var s;this.constraint_=e==null?void 0:e.constraint,this.equals_=(s=e==null?void 0:e.equals)!==null&&s!==void 0?s:(l,P)=>l===P,this.emitter=new U,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e??{forceEmit:!1,last:!0},l=this.constraint_?this.constraint_.constrain(t):t,P=this.rawValue_;this.equals_(P,l)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=l,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:l,sender:this}))}}class kt{constructor(t){this.emitter=new U,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const s=e??{forceEmit:!1,last:!0},l=this.value_;l===t&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:s,previousRawValue:l,rawValue:this.value_,sender:this}))}}function Z(n,t){const e=t==null?void 0:t.constraint,s=t==null?void 0:t.equals;return!e&&!s?new kt(n):new St(n,t)}class nt{constructor(t){this.emitter=new U,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((s,l)=>Object.assign(s,{[l]:Z(t[l])}),{})}static fromObject(t){const e=this.createCore(t);return new nt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}function zt(n,t){const s=Object.keys(t).reduce((l,P)=>{if(l===void 0)return;const T=t[P],tt=T(n[P]);return tt.succeeded?Object.assign(Object.assign({},l),{[P]:tt.value}):void 0},{});return s}function gt(n,t){return n.reduce((e,s)=>{if(e===void 0)return;const l=t(s);if(!(!l.succeeded||l.value===void 0))return[...e,l.value]},[])}function qt(n){return n===null?!1:typeof n=="object"}function Mt(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const s=n(e);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ut(n){return{custom:t=>Mt(t)(n),boolean:Mt(t=>typeof t=="boolean"?t:void 0)(n),number:Mt(t=>typeof t=="number"?t:void 0)(n),string:Mt(t=>typeof t=="string"?t:void 0)(n),function:Mt(t=>typeof t=="function"?t:void 0)(n),constant:t=>Mt(e=>e===t?t:void 0)(n),raw:Mt(t=>t)(n),object:t=>Mt(e=>{if(qt(e))return zt(e,t)})(n),array:t=>Mt(e=>{if(Array.isArray(e))return gt(e,t)})(n)}}const dt={optional:Ut(!0),required:Ut(!1)};function Ct(n,t){const e=dt.required.object(t)(n);return e.succeeded?e.value:void 0}function $t(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class F{constructor(t){this.value_=t}static create(t){return[new F(t),(e,s)=>{t.setRawValue(e,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const b=G("");function r(n,t){return _t(n,b(void 0,t))}class h extends nt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=F.create(Z(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,s,l;const P=t??{};return new h(nt.createCore({disabled:(e=P.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(l=P.parent)!==null&&l!==void 0?l:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){X(this.globalDisabled_,r(t,"disabled")),K(this,"hidden",r(t,"hidden"))}bindDisabled(t){X(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){X(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const s=t.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const v=G(""),x={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{e.classList.remove(v(void 0,x[s]))}),this.blade.get("positions").forEach(s=>{e.classList.add(v(void 0,x[s]))})}),this.viewProps.handleDispose(()=>{B(e)})}get parent(){return this.parent_}set parent(t){if(this.parent_=t,!("parent"in this.viewProps.valMap_)){$t({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function m(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function f(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const w={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,t){const e=n.createElementNS(S,"svg");return e.innerHTML=w[t],e}function D(n,t,e){n.insertBefore(t,n.children[e])}function V(n){n.parentElement&&n.parentElement.removeChild(n)}function O(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function lt(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function it(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const st=G("lbl");function ft(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(l=>n.createTextNode(l)).forEach((l,P)=>{P>0&&e.appendChild(n.createElement("br")),e.appendChild(l)}),e}class xt{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(st()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(st("l")),K(e.props,"label",P=>{N(P)?this.element.classList.add(st(void 0,"nol")):(this.element.classList.remove(st(void 0,"nol")),lt(s),s.appendChild(ft(t,P)))}),this.element.appendChild(s),this.labelElement=s;const l=t.createElement("div");l.classList.add(st("v")),this.element.appendChild(l),this.valueElement=l}}class ht extends k{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{view:new xt(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const bt={id:"button",type:"blade",accept(n){const t=dt,e=Ct(n,{title:t.required.string,view:t.required.constant("button"),label:t.optional.string});return e?{params:e}:null},controller(n){return new ht(n.document,{blade:n.blade,props:nt.fromObject({label:n.params.label}),valueController:new mt(n.document,{props:nt.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ht)||!(n.controller.valueController instanceof mt)?null:new ut(n.controller)}};class At extends k{constructor(t){super(t),this.value=t.value}}function Y(){return new nt({positions:Z([],{equals:L})})}class at extends nt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=nt.createCore(e);return new at(s)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!N(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const s=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};K(this,"expanded",s),K(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function rt(n,t){let e=0;return m(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(t),e=t.clientHeight,n.set("temporaryExpanded",null),i(t)}),e}function vt(n,t){t.style.height=n.styleHeight}function yt(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),N(n.get("expandedHeight"))){const e=rt(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),i(t)}),n.emitter.on("change",()=>{vt(n,t)}),vt(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class pt extends y{constructor(t,e){super(t),this.rackApi_=e}}function wt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function Bt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function It(n,t){const e=t??{};return n.addBlade(Object.assign(Object.assign({},e),{view:"separator"}))}function Vt(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}class Ft{constructor(t){this.emitter=new U,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw H.shouldNeverHappen();const s=e!==void 0?e:this.items_.length;this.items_.splice(s,0,t),this.cache_.add(t);const l=this.extract_(t);l&&(l.emitter.on("add",this.onSubListAdd_),l.emitter.on("remove",this.onSubListRemove_),l.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const s=this.extract_(t);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}class Zt extends y{constructor(t){super(t),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(t){const e=t.sender.target.read();this.emitter_.emit("change",{event:new M(this,e,this.controller_.binding.target.presetKey,t.options.last)})}}class Wt extends ht{constructor(t,e){super(t,e),this.binding=e.binding}}class Yt extends y{constructor(t){super(t),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(t){const e=t.sender.target.read();this.emitter_.emit("update",{event:new z(this,e,this.controller_.binding.target.presetKey)})}}class Kt extends ht{constructor(t,e){super(t,e),this.binding=e.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function te(n){return n instanceof le?n.apiSet_:n instanceof pt?n.rackApi_.apiSet_:null}function Xt(n,t){const e=n.find(s=>s.controller_===t);if(!e)throw H.shouldNeverHappen();return e}function ve(n,t,e){if(!j.isBindable(n))throw H.notBindable();return new j(n,t,e)}class le extends y{constructor(t,e){super(t),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new U,this.apiSet_=new Ft(te),this.pool_=e;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(l=>{this.setUpApi_(l)})}get children(){return this.controller_.rack.children.map(t=>Xt(this.apiSet_,t))}addInput(t,e,s){const l=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createInput(P,ve(t,e,l.presetKey),l),tt=new Zt(T);return this.add(tt,l.index)}addMonitor(t,e,s){const l=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createMonitor(P,ve(t,e),l),tt=new Yt(T);return this.add(tt,l.index)}addFolder(t){return Bt(this,t)}addButton(t){return wt(this,t)}addSeparator(t){return It(this,t)}addTab(t){return Vt(this,t)}add(t,e){this.controller_.rack.add(t.controller_,e);const s=this.apiSet_.find(l=>l.controller_===t.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(t),t}remove(t){this.controller_.rack.remove(t.controller_)}addBlade(t){const e=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(e,t),l=this.pool_.createBladeApi(s);return this.add(l,t.index)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}setUpApi_(t){this.apiSet_.find(s=>s.controller_===t)||this.apiSet_.add(this.pool_.createBladeApi(t))}onRackAdd_(t){this.setUpApi_(t.bladeController)}onRackRemove_(t){if(t.isRoot){const e=Xt(this.apiSet_,t.bladeController);this.apiSet_.remove(e)}}onRackInputChange_(t){const e=t.bladeController;if(e instanceof Wt){const s=Xt(this.apiSet_,e),l=e.binding;this.emitter_.emit("change",{event:new M(s,l.target.read(),l.target.presetKey,t.options.last)})}else if(e instanceof At){const s=Xt(this.apiSet_,e);this.emitter_.emit("change",{event:new M(s,e.value.rawValue,void 0,t.options.last)})}}onRackMonitorUpdate_(t){if(!(t.bladeController instanceof Kt))throw H.shouldNeverHappen();const e=Xt(this.apiSet_,t.bladeController),s=t.bladeController.binding;this.emitter_.emit("update",{event:new z(e,s.target.read(),s.target.presetKey)})}}class be extends pt{constructor(t,e){super(t,new le(t.rackController,e)),this.emitter_=new U,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(t){this.controller_.foldable.set("expanded",t)}get title(){return this.controller_.props.get("title")}set title(t){this.controller_.props.set("title",t)}get children(){return this.rackApi_.children}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}class fe extends k{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}}class Qt{constructor(t,e){const s=G(e.viewName);this.element=t.createElement("div"),this.element.classList.add(s()),e.viewProps.bindClassModifiers(this.element)}}function ce(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Wt&&s.binding===t)return s}return null}function _e(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof Kt&&s.binding===t)return s}return null}function ue(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(s instanceof At&&s.value===t)return s}return null}function me(n){return n instanceof jt?n.rack:n instanceof fe?n.rackController.rack:null}function ge(n){const t=me(n);return t?t.bcSet_:null}class qe{constructor(t){var e,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new U,this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Ft(ge),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var s;(s=t.parent)===null||s===void 0||s.remove(t),Q(t,"parent")?t.parent=this:(t.parent_=this,$t({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(t,e)}remove(t){Q(t,"parent")?t.parent=null:(t.parent_=null,$t({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(e=>e instanceof t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,isRoot:e,sender:this}),!e)return;const s=t.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Wt)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Kt)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof At)s.value.emitter.on("change",this.onChildValueChange_);else{const l=me(s);if(l){const P=l.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,isRoot:e,sender:this}),!e)return;const s=t.item;if(s instanceof Wt)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Kt)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof At)s.value.emitter.off("change",this.onChildValueChange_);else{const l=me(s);if(l){const P=l.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const t=this.bcSet_.items.filter(l=>!l.viewProps.get("hidden")),e=t[0],s=t[t.length-1];this.bcSet_.items.forEach(l=>{const P=[];l===e&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),l===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),l.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildInputChange_(t){const e=ce(this.find(Wt),t.sender);if(!e)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onChildMonitorUpdate_(t){const e=_e(this.find(Kt),t.sender);if(!e)throw H.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:e,sender:this})}onChildValueChange_(t){const e=ue(this.find(At),t.sender);if(!e)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:e,options:t.options,sender:this})}onDescendantLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(t){this.emitter.emit("inputchange",{bladeController:t.bladeController,options:t.options,sender:this})}onDescendantMonitorUpdate_(t){this.emitter.emit("monitorupdate",{bladeController:t.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class jt extends k{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new Qt(t,{viewName:"brk",viewProps:e.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new qe({blade:e.root?void 0:e.blade,viewProps:e.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let l=this.rack.children.length-1;l>=0;l--)this.rack.children[l].viewProps.set("disposed",!0)})}onRackAdd_(t){t.isRoot&&D(this.view.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.isRoot&&V(t.bladeController.view.element)}}const fs=G("cnt");class or{constructor(t,e){var s;this.className_=G((s=e.viewName)!==null&&s!==void 0?s:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),fs()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),K(this.foldable_,"completed",_t(this.element,this.className_(void 0,"cpl")));const l=t.createElement("button");l.classList.add(this.className_("b")),K(e.props,"title",Et=>{N(Et)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const P=t.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const T=t.createElement("div");T.classList.add(this.className_("t")),Lt(e.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T;const tt=t.createElement("div");tt.classList.add(this.className_("m")),this.buttonElement.appendChild(tt);const Pt=e.containerElement;Pt.classList.add(this.className_("c")),this.element.appendChild(Pt),this.containerElement=Pt}}class zn extends fe{constructor(t,e){var s;const l=at.create((s=e.expanded)!==null&&s!==void 0?s:!0),P=new jt(t,{blade:e.blade,root:e.root,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:P,view:new or(t,{containerElement:P.view.element,foldable:l,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=l,yt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ar={id:"folder",type:"blade",accept(n){const t=dt,e=Ct(n,{title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean});return e?{params:e}:null},controller(n){return new zn(n.document,{blade:n.blade,expanded:n.params.expanded,props:nt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof zn?new be(n.controller,n.pool):null}};class $e extends At{constructor(t,e){const s=e.valueController.viewProps;super(Object.assign(Object.assign({},e),{value:e.valueController.value,view:new xt(t,{props:e.props,viewProps:s}),viewProps:s})),this.props=e.props,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class _s extends y{}const ms=G("spr");class lr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ms()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("hr");s.classList.add(ms("r")),this.element.appendChild(s)}}class bs extends k{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new lr(t,{viewProps:e.viewProps})}))}}const cr={id:"separator",type:"blade",accept(n){const e=Ct(n,{view:dt.required.constant("separator")});return e?{params:e}:null},controller(n){return new bs(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof bs?new _s(n.controller):null}},Je=G("tbi");class ur{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Je()),e.viewProps.bindClassModifiers(this.element),K(e.props,"selected",P=>{P?this.element.classList.add(Je(void 0,"sel")):this.element.classList.remove(Je(void 0,"sel"))});const s=t.createElement("button");s.classList.add(Je("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const l=t.createElement("div");l.classList.add(Je("t")),Lt(e.props.value("title"),l),this.buttonElement.appendChild(l),this.titleElement=l}}class dr{constructor(t,e){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new ur(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class vs{constructor(t,e){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new dr(t,{props:e.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new jt(t,{blade:Y(),viewProps:h.create()}),this.props=e.props,K(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class gs{constructor(t,e){this.controller_=t,this.rackApi_=e}get title(){var t;return(t=this.controller_.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller_.itemController.props.set("title",t)}get selected(){return this.controller_.props.get("selected")}set selected(t){this.controller_.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addSeparator(t){return this.rackApi_.addSeparator(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addInput(t,e,s){return this.rackApi_.addInput(t,e,s)}addMonitor(t,e,s){return this.rackApi_.addMonitor(t,e,s)}addBlade(t){return this.rackApi_.addBlade(t)}}class ws extends pt{constructor(t,e){super(t,new le(t.rackController,e)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new U,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(t=>{const e=this.pageApiMap_.get(t);if(!e)throw H.shouldNeverHappen();return e})}addPage(t){const e=this.controller_.view.element.ownerDocument,s=new vs(e,{itemProps:nt.fromObject({selected:!1,title:t.title}),props:nt.fromObject({selected:!1})});this.controller_.add(s,t.index);const l=this.pageApiMap_.get(s);if(!l)throw H.shouldNeverHappen();return l}removePage(t){this.controller_.remove(t)}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}setUpPageApi_(t){const e=this.rackApi_.apiSet_.find(l=>l.controller_===t.contentController);if(!e)throw H.shouldNeverHappen();const s=new gs(t,e);this.pageApiMap_.set(t,s)}onPageAdd_(t){this.setUpPageApi_(t.item)}onPageRemove_(t){if(!this.pageApiMap_.get(t.item))throw H.shouldNeverHappen();this.pageApiMap_.delete(t.item)}onSelect_(t){this.emitter_.emit("select",{event:new R(this,t.rawValue)})}}const xs=-1;class pr{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Z(!0),this.selectedIndex=Z(xs),this.items_=[]}add(t,e){const s=e??this.items_.length;this.items_.splice(s,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=xs,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,s)=>{e.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,s)=>{e.rawValue=s===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(s=>s===t.sender);this.items_.forEach((s,l)=>{s.rawValue=l===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const tn=G("tab");class hr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(tn(),fs()),e.viewProps.bindClassModifiers(this.element),X(e.empty,_t(this.element,tn(void 0,"nop")));const s=t.createElement("div");s.classList.add(tn("t")),this.element.appendChild(s),this.itemsElement=s;const l=t.createElement("div");l.classList.add(tn("i")),this.element.appendChild(l);const P=e.contentsElement;P.classList.add(tn("c")),this.element.appendChild(P),this.contentsElement=P}}class ys extends fe{constructor(t,e){const s=new jt(t,{blade:e.blade,viewProps:e.viewProps}),l=new pr;super({blade:e.blade,rackController:s,view:new hr(t,{contentsElement:s.view.element,empty:l.empty,viewProps:e.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ft(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=l}get pageSet(){return this.pageSet_}add(t,e){this.pageSet_.add(t,e)}remove(t){this.pageSet_.remove(this.pageSet_.items[t])}onPageAdd_(t){const e=t.item;D(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(e.contentController,t.index),this.tab.add(e.props.value("selected"))}onPageRemove_(t){const e=t.item;V(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.rackController.rack.remove(e.contentController),this.tab.remove(e.props.value("selected"))}}const Ps={id:"tab",type:"blade",accept(n){const t=dt,e=Ct(n,{pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")});return!e||e.pages.length===0?null:{params:e}},controller(n){const t=new ys(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const s=new vs(n.document,{itemProps:nt.fromObject({selected:!1,title:e.title}),props:nt.fromObject({selected:!1})});t.add(s)}),t},api(n){return n.controller instanceof ys?new ws(n.controller,n.pool):null}};function fr(n,t){const e=n.accept(t.params);if(!e)return null;const s=dt.optional.boolean(t.params.disabled).value,l=dt.optional.boolean(t.params.hidden).value;return n.controller({blade:Y(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:s,hidden:l}),viewProps:h.create({disabled:s,hidden:l})})}class _r{constructor(){this.disabled=!1,this.emitter=new U}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class mr{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new U,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class br{constructor(t){this.onValueChange_=this.onValueChange_.bind(this),this.reader=t.reader,this.writer=t.writer,this.emitter=new U,this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.target=t.target,this.read()}read(){const t=this.target.read();t!==void 0&&(this.value.rawValue=this.reader(t))}write_(t){this.writer(this.target,t)}onValueChange_(t){this.write_(t.rawValue),this.emitter.emit("change",{options:t.options,rawValue:t.rawValue,sender:this})}}function Ss(n,t){for(;n.length<t;)n.push(void 0)}function vr(n){const t=[];return Ss(t,n),Z(t)}function gr(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function wr(n,t){const e=[...gr(n),t];return e.length>n.length?e.splice(0,e.length-n.length):Ss(e,n.length),e}class xr{constructor(t){this.onTick_=this.onTick_.bind(this),this.reader_=t.reader,this.target=t.target,this.emitter=new U,this.value=t.value,this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const t=this.target.read();if(t===void 0)return;const e=this.value.rawValue,s=this.reader_(t);this.value.rawValue=wr(e,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(t){this.read()}}class en{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,s)=>s.constrain(e),t)}}function we(n,t){if(n instanceof t)return n;if(n instanceof en){const e=n.constraints.reduce((s,l)=>s||(l instanceof t?l:null),null);if(e)return e}return null}class We{constructor(t){this.values=nt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(t,s),e)}}class nn{constructor(t){this.values=nt.fromObject({options:t})}get options(){return this.values.get("options")}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(l=>l.value===t).length>0?t:e[0].value}}class ks{constructor(t){this.values=nt.fromObject({max:t.max,min:t.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(t){const e=this.values.get("max"),s=this.values.get("min");let l=t;return N(s)||(l=Math.max(l,s)),N(e)||(l=Math.min(l,e)),l}}class vn{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,s=Math.round((t-e)/this.step);return e+s*this.step}}const Rn=G("lst");class yr{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Rn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("select");s.classList.add(Rn("s")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const l=t.createElement("div");l.classList.add(Rn("m")),l.appendChild(g(t,"dropdown")),this.element.appendChild(l),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,K(this.props_,"options",P=>{O(this.selectElement),P.forEach(T=>{const tt=t.createElement("option");tt.textContent=T.text,this.selectElement.appendChild(tt)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class sn{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new yr(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}}const Cs=G("pop");class Pr{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Cs()),e.viewProps.bindClassModifiers(this.element),X(e.shows,_t(this.element,Cs(void 0,"v")))}}class Es{constructor(t,e){this.shows=Z(!1),this.viewProps=e.viewProps,this.view=new Pr(t,{shows:this.shows,viewProps:this.viewProps})}}const Ms=G("txt");class Sr{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ms()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const s=t.createElement("input");s.classList.add(Ms("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class gn{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Sr(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const s=t.currentTarget.value,l=this.parser_(s);N(l)||(this.value.rawValue=l),this.view.refresh()}}function kr(n){return String(n)}function Bs(n){return n==="false"?!1:!!n}function Ts(n){return kr(n)}class Cr{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Er={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Mr{constructor(t,e,s){this.left=e,this.operator=t,this.right=s}evaluate(){const t=Er[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Br={"+":n=>n,"-":n=>-n,"~":n=>~n};class Tr{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Br[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Ln(n){return(t,e)=>{for(let s=0;s<n.length;s++){const l=n[s](t,e);if(l!=="")return l}return""}}function rn(n,t){var e;const s=n.substr(t).match(/^\s+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Dr(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function on(n,t){var e;const s=n.substr(t).match(/^[0-9]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Ar(n,t){const e=on(n,t);if(e!=="")return e;const s=n.substr(t,1);if(t+=1,s!=="-"&&s!=="+")return"";const l=on(n,t);return l===""?"":s+l}function Gn(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const s=Ar(n,t);return s===""?"":e+s}function Ds(n,t){const e=n.substr(t,1);if(e==="0")return e;const s=Dr(n,t);return t+=s.length,s===""?"":s+on(n,t)}function Ir(n,t){const e=Ds(n,t);if(t+=e.length,e==="")return"";const s=n.substr(t,1);if(t+=s.length,s!==".")return"";const l=on(n,t);return t+=l.length,e+s+l+Gn(n,t)}function zr(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const s=on(n,t);return t+=s.length,s===""?"":e+s+Gn(n,t)}function Rr(n,t){const e=Ds(n,t);return t+=e.length,e===""?"":e+Gn(n,t)}const Lr=Ln([Ir,zr,Rr]);function Gr(n,t){var e;const s=n.substr(t).match(/^[01]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Ur(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const s=Gr(n,t);return s===""?"":e+s}function Vr(n,t){var e;const s=n.substr(t).match(/^[0-7]+/);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Or(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const s=Vr(n,t);return s===""?"":e+s}function Fr(n,t){var e;const s=n.substr(t).match(/^[0-9a-f]+/i);return(e=s&&s[0])!==null&&e!==void 0?e:""}function Nr(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const s=Fr(n,t);return s===""?"":e+s}const qr=Ln([Ur,Or,Nr]),$r=Ln([qr,Lr]);function Wr(n,t){const e=$r(n,t);return t+=e.length,e===""?null:{evaluable:new Cr(e),cursor:t}}function jr(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const s=Is(n,t);if(!s)return null;t=s.cursor,t+=rn(n,t).length;const l=n.substr(t,1);return t+=l.length,l!==")"?null:{evaluable:s.evaluable,cursor:t}}function Kr(n,t){var e;return(e=Wr(n,t))!==null&&e!==void 0?e:jr(n,t)}function As(n,t){const e=Kr(n,t);if(e)return e;const s=n.substr(t,1);if(t+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const l=As(n,t);return l?(t=l.cursor,{cursor:t,evaluable:new Tr(s,l.evaluable)}):null}function Hr(n,t,e){e+=rn(t,e).length;const s=n.filter(l=>t.startsWith(l,e))[0];return s?(e+=s.length,e+=rn(t,e).length,{cursor:e,operator:s}):null}function Yr(n,t){return(e,s)=>{const l=n(e,s);if(!l)return null;s=l.cursor;let P=l.evaluable;for(;;){const T=Hr(t,e,s);if(!T)break;s=T.cursor;const tt=n(e,s);if(!tt)return null;s=tt.cursor,P=new Mr(T.operator,P,tt.evaluable)}return P?{cursor:s,evaluable:P}:null}}const Zr=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Yr(n,t),As);function Is(n,t){return t+=rn(n,t).length,Zr(n,t)}function Xr(n){const t=Is(n,0);return!t||t.cursor+rn(n,t.cursor).length!==n.length?null:t.evaluable}function xe(n){var t;const e=Xr(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function zs(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=xe(n);if(!N(t))return t}return 0}function Qr(n){return String(n)}function ne(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}const Jr=ne(0);function wn(n){return Jr(n)+"%"}function Rs(n){return String(n)}function Un(n){return n}function an({primary:n,secondary:t,forward:e,backward:s}){let l=!1;function P(T){l||(l=!0,T(),l=!1)}n.emitter.on("change",T=>{P(()=>{t.setRawValue(e(n,t),T.options)})}),t.emitter.on("change",T=>{P(()=>{n.setRawValue(s(n,t),T.options)}),P(()=>{t.setRawValue(e(n,t),T.options)})}),P(()=>{t.setRawValue(e(n,t),{forceEmit:!1,last:!0})})}function re(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function ln(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function ye(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function to(n){return n==="ArrowUp"||n==="ArrowDown"}function Ls(n){return to(n)||n==="ArrowLeft"||n==="ArrowRight"}function Vn(n,t){var e,s;const l=t.ownerDocument.defaultView,P=t.getBoundingClientRect();return{x:n.pageX-(((e=l&&l.scrollX)!==null&&e!==void 0?e:0)+P.left),y:n.pageY-(((s=l&&l.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Ae{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new U,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Vn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Vn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Vn(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-s.left,y:e.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const s=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,l=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(s?{x:s.clientX-l.left,y:s.clientY-l.top}:void 0),sender:this,shiftKey:t.shiftKey})}}function Ht(n,t,e,s,l){const P=(n-t)/(e-t);return s+P*(l-s)}function Gs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Jt(n,t,e){return Math.min(Math.max(n,t),e)}function Us(n,t){return(n%t+t)%t}const de=G("txt");class eo{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(de(),de(void 0,"num")),e.arrayPosition&&this.element.classList.add(de(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(de("i")),s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(de()),this.inputElement.classList.add(de("i"));const l=t.createElement("div");l.classList.add(de("k")),this.element.appendChild(l),this.knobElement=l;const P=t.createElementNS(S,"svg");P.classList.add(de("g")),this.knobElement.appendChild(P);const T=t.createElementNS(S,"path");T.classList.add(de("gb")),P.appendChild(T),this.guideBodyElem_=T;const tt=t.createElementNS(S,"path");tt.classList.add(de("gh")),P.appendChild(tt),this.guideHeadElem_=tt;const Pt=t.createElement("div");Pt.classList.add(G("tt")()),this.knobElement.appendChild(Pt),this.tooltipElem_=Pt,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(de(void 0,"drg"));return}this.element.classList.add(de(void 0,"drg"));const e=t.rawValue/this.props_.get("draggingScale"),s=e+(e>0?-1:e<0?1:0),l=Jt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+l},0 L${s},4 L${s+l},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class cn{constructor(t,e){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.parser_=e.parser,this.props=e.props,this.sliderProps_=(s=e.sliderProps)!==null&&s!==void 0?s:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=Z(null),this.view=new eo(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const l=new Ae(this.view.knobElement);l.emitter.on("down",this.onPointerDown_),l.emitter.on("move",this.onPointerMove_),l.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,s;const l=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let T=t;return l!==void 0&&(T=Math.max(T,l)),P!==void 0&&(T=Math.min(T,P)),T}onInputChange_(t){const s=t.currentTarget.value,l=this.parser_(s);N(l)||(this.value.rawValue=this.constrainValue_(l)),this.view.refresh()}onInputKeyDown_(t){const e=re(this.baseStep_,ln(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){re(this.baseStep_,ln(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("draggingScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const On=G("sld");class no{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(On()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(On("t")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const l=t.createElement("div");l.classList.add(On("k")),this.trackElement.appendChild(l),this.knobElement=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=Jt(Ht(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class so{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=e.baseStep,this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new no(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ae(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Ht(Jt(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=re(this.baseStep_,ye(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){re(this.baseStep_,ye(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Fn=G("sldtxt");class io{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Fn());const s=t.createElement("div");s.classList.add(Fn("s")),this.sliderView_=e.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(Fn("t")),this.textView_=e.textView,l.appendChild(this.textView_.element),this.element.appendChild(l)}}class Nn{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new so(t,{baseStep:e.baseStep,props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new cn(t,{baseStep:e.baseStep,parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new io(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function un(n,t){n.write(t)}function xn(n){const t=dt;if(Array.isArray(n))return t.required.array(t.required.object({text:t.required.string,value:t.required.raw}))(n).value;if(typeof n=="object")return t.required.raw(n).value}function Vs(n){if(n==="inline"||n==="popup")return n}function ke(n){const t=dt;return t.required.object({max:t.optional.number,min:t.optional.number,step:t.optional.number})(n).value}function Os(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function qn(n){return N(n)?null:new nn(Os(n))}function ro(n){const t=n?we(n,vn):null;return t?t.step:null}function yn(n,t){const e=n&&we(n,vn);return e?Gs(e.step):Math.max(Gs(t),2)}function je(n){const t=ro(n);return t??1}function Ke(n,t){var e;const s=n&&we(n,vn),l=Math.abs((e=s==null?void 0:s.step)!==null&&e!==void 0?e:t);return l===0?.1:Math.pow(10,Math.floor(Math.log10(l))-1)}const Pn=G("ckb");class oo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Pn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("label");s.classList.add(Pn("l")),this.element.appendChild(s);const l=t.createElement("input");l.classList.add(Pn("i")),l.type="checkbox",s.appendChild(l),this.inputElement=l,e.viewProps.bindDisabled(this.inputElement);const P=t.createElement("div");P.classList.add(Pn("w")),s.appendChild(P);const T=g(t,"check");P.appendChild(T),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class ao{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new oo(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked}}function lo(n){const t=[],e=qn(n.options);return e&&t.push(e),new en(t)}const co={id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=Ct(t,{options:dt.optional.custom(xn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Bs,constraint:n=>lo(n.params),writer:n=>un},controller:n=>{const t=n.document,e=n.value,s=n.constraint,l=s&&we(s,nn);return l?new sn(t,{props:new nt({options:l.values.value("options")}),value:e,viewProps:n.viewProps}):new ao(t,{value:e,viewProps:n.viewProps})}},Ie=G("col");class uo{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ie()),e.foldable.bindExpandedClass(this.element,Ie(void 0,"expanded")),K(e.foldable,"completed",_t(this.element,Ie(void 0,"cpl")));const s=t.createElement("div");s.classList.add(Ie("h")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(Ie("s")),s.appendChild(l),this.swatchElement=l;const P=t.createElement("div");if(P.classList.add(Ie("t")),s.appendChild(P),this.textElement=P,e.pickerLayout==="inline"){const T=t.createElement("div");T.classList.add(Ie("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}function po(n,t,e){const s=Jt(n/255,0,1),l=Jt(t/255,0,1),P=Jt(e/255,0,1),T=Math.max(s,l,P),tt=Math.min(s,l,P),Pt=T-tt;let Et=0,Ot=0;const Nt=(tt+T)/2;return Pt!==0&&(Ot=Pt/(1-Math.abs(T+tt-1)),s===T?Et=(l-P)/Pt:l===T?Et=2+(P-s)/Pt:Et=4+(s-l)/Pt,Et=Et/6+(Et<0?1:0)),[Et*360,Ot*100,Nt*100]}function ho(n,t,e){const s=(n%360+360)%360,l=Jt(t/100,0,1),P=Jt(e/100,0,1),T=(1-Math.abs(2*P-1))*l,tt=T*(1-Math.abs(s/60%2-1)),Pt=P-T/2;let Et,Ot,Nt;return s>=0&&s<60?[Et,Ot,Nt]=[T,tt,0]:s>=60&&s<120?[Et,Ot,Nt]=[tt,T,0]:s>=120&&s<180?[Et,Ot,Nt]=[0,T,tt]:s>=180&&s<240?[Et,Ot,Nt]=[0,tt,T]:s>=240&&s<300?[Et,Ot,Nt]=[tt,0,T]:[Et,Ot,Nt]=[T,0,tt],[(Et+Pt)*255,(Ot+Pt)*255,(Nt+Pt)*255]}function fo(n,t,e){const s=Jt(n/255,0,1),l=Jt(t/255,0,1),P=Jt(e/255,0,1),T=Math.max(s,l,P),tt=Math.min(s,l,P),Pt=T-tt;let Et;Pt===0?Et=0:T===s?Et=60*(((l-P)/Pt%6+6)%6):T===l?Et=60*((P-s)/Pt+2):Et=60*((s-l)/Pt+4);const Ot=T===0?0:Pt/T,Nt=T;return[Et,Ot*100,Nt*100]}function Fs(n,t,e){const s=Us(n,360),l=Jt(t/100,0,1),P=Jt(e/100,0,1),T=P*l,tt=T*(1-Math.abs(s/60%2-1)),Pt=P-T;let Et,Ot,Nt;return s>=0&&s<60?[Et,Ot,Nt]=[T,tt,0]:s>=60&&s<120?[Et,Ot,Nt]=[tt,T,0]:s>=120&&s<180?[Et,Ot,Nt]=[0,T,tt]:s>=180&&s<240?[Et,Ot,Nt]=[0,tt,T]:s>=240&&s<300?[Et,Ot,Nt]=[tt,0,T]:[Et,Ot,Nt]=[T,0,tt],[(Et+Pt)*255,(Ot+Pt)*255,(Nt+Pt)*255]}function _o(n,t,e){const s=e+t*(100-Math.abs(2*e-100))/200;return[n,s!==0?t*(100-Math.abs(2*e-100))/s:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function mo(n,t,e){const s=100-Math.abs(e*(200-t)/100-100);return[n,s!==0?t*e/s:0,e*(200-t)/(2*100)]}function ze(n){return[n[0],n[1],n[2]]}function Ns(n,t){return[n[0],n[1],n[2],t]}const bo={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:_o,rgb:ho},hsv:{hsl:mo,hsv:(n,t,e)=>[n,t,e],rgb:Fs},rgb:{hsl:po,hsv:fo,rgb:(n,t,e)=>[n,t,e]}};function Sn(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function vo(n,t){return n===t?t:Us(n,t)}function go(n,t,e){var s;const l=Sn(t,e);return[t==="rgb"?Jt(n[0],0,l[0]):vo(n[0],l[0]),Jt(n[1],0,l[1]),Jt(n[2],0,l[2]),Jt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function qs(n,t,e,s){const l=Sn(t,e),P=Sn(t,s);return n.map((T,tt)=>T/l[tt]*P[tt])}function wo(n,t,e){const s=qs(n,t.mode,t.type,"int"),l=bo[t.mode][e.mode](...s);return qs(l,e.mode,"int",e.type)}function kn(n,t){return typeof n!="object"||N(n)?!1:t in n&&typeof n[t]=="number"}class Gt{static black(t="int"){return new Gt([0,0,0],"rgb",t)}static fromObject(t,e="int"){const s="a"in t?[t.r,t.g,t.b,t.a]:[t.r,t.g,t.b];return new Gt(s,"rgb",e)}static toRgbaObject(t,e="int"){return t.toRgbaObject(e)}static isRgbColorObject(t){return kn(t,"r")&&kn(t,"g")&&kn(t,"b")}static isRgbaColorObject(t){return this.isRgbColorObject(t)&&kn(t,"a")}static isColorObject(t){return this.isRgbColorObject(t)}static equals(t,e){if(t.mode!==e.mode)return!1;const s=t.comps_,l=e.comps_;for(let P=0;P<s.length;P++)if(s[P]!==l[P])return!1;return!0}constructor(t,e,s="int"){this.mode=e,this.type=s,this.comps_=go(t,e,s)}getComponents(t,e="int"){return Ns(wo(ze(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:e}),this.comps_[3])}toRgbaObject(t="int"){const e=this.getComponents("rgb",t);return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Ce=G("colp");class xo{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Ce()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Ce("hsv"));const l=t.createElement("div");l.classList.add(Ce("sv")),this.svPaletteView_=e.svPaletteView,l.appendChild(this.svPaletteView_.element),s.appendChild(l);const P=t.createElement("div");P.classList.add(Ce("h")),this.hPaletteView_=e.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const T=t.createElement("div");if(T.classList.add(Ce("rgb")),this.textView_=e.textView,T.appendChild(this.textView_.element),this.element.appendChild(T),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const tt=t.createElement("div");tt.classList.add(Ce("a"));const Pt=t.createElement("div");Pt.classList.add(Ce("ap")),Pt.appendChild(this.alphaViews_.palette.element),tt.appendChild(Pt);const Et=t.createElement("div");Et.classList.add(Ce("at")),Et.appendChild(this.alphaViews_.text.element),tt.appendChild(Et),this.element.appendChild(tt)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function yo(n){return n==="int"?"int":n==="float"?"float":void 0}function $n(n){const t=dt;return Ct(n,{alpha:t.optional.boolean,color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(yo)}),expanded:t.optional.boolean,picker:t.optional.custom(Vs)})}function Re(n){return n?.1:1}function Le(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}function Po(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function pe(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const So={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function $s(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),s=t[2];return So[s](e)}function Ws(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[pe(t[1],255),pe(t[2],255),pe(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function js(n){return t=>{const e=Ws(t);return e?new Gt(e,"rgb",n):null}}function Ks(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[pe(t[1],255),pe(t[2],255),pe(t[3],255),pe(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Hs(n){return t=>{const e=Ks(t);return e?new Gt(e,"rgb",n):null}}function Ys(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[$s(t[1]),pe(t[2],100),pe(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Zs(n){return t=>{const e=Ys(t);return e?new Gt(e,"hsl",n):null}}function Xs(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[$s(t[1]),pe(t[2],100),pe(t[3],100),pe(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Qs(n){return t=>{const e=Xs(t);return e?new Gt(e,"hsl",n):null}}function Js(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function ko(n){const t=Js(n);return t?new Gt(t,"rgb","int"):null}function ti(n){const t=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Ht(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Ht(parseInt(e[4],16),0,255,0,1)]:null}function Co(n){const t=ti(n);return t?new Gt(t,"rgb","int"):null}function ei(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function ni(n){return t=>{const e=ei(t);return e?new Gt(e,"rgb",n):null}}function si(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function ii(n){return t=>{const e=si(t);return e?new Gt(e,"rgb",n):null}}const Eo=[{parser:Js,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ti,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ws,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Ks,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Ys,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Xs,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ei,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:si,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Mo(n){return Eo.reduce((t,{parser:e,result:s})=>t||(e(n)?s:null),null)}function Wn(n,t="int"){const e=Mo(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}const ri={int:[ko,Co,js("int"),Hs("int"),Zs("int"),Qs("int"),ni("int"),ii("int")],float:[js("float"),Hs("float"),Zs("float"),Qs("float"),ni("float"),ii("float")]};function Bo(n){const t=ri[n];return e=>{if(typeof e!="string")return Gt.black(n);const s=t.reduce((l,P)=>l||P(e),null);return s??Gt.black(n)}}function jn(n){const t=ri[n];return e=>t.reduce((s,l)=>s||l(e),null)}function oi(n){const t=Jt(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function ai(n,t="#"){const e=ze(n.getComponents("rgb")).map(oi).join("");return`${t}${e}`}function Kn(n,t="#"){const e=n.getComponents("rgb"),s=[e[0],e[1],e[2],e[3]*255].map(oi).join("");return`${t}${s}`}function li(n,t){const e=ne(t==="float"?2:0);return`rgb(${ze(n.getComponents("rgb",t)).map(l=>e(l)).join(", ")})`}function To(n){return t=>li(t,n)}function Cn(n,t){const e=ne(2),s=ne(t==="float"?2:0);return`rgba(${n.getComponents("rgb",t).map((P,T)=>(T===3?e:s)(P)).join(", ")})`}function Do(n){return t=>Cn(t,n)}function Ao(n){const t=[ne(0),wn,wn];return`hsl(${ze(n.getComponents("hsl")).map((s,l)=>t[l](s)).join(", ")})`}function Io(n){const t=[ne(0),wn,wn,ne(2)];return`hsla(${n.getComponents("hsl").map((s,l)=>t[l](s)).join(", ")})`}function ci(n,t){const e=ne(t==="float"?2:0),s=["r","g","b"];return`{${ze(n.getComponents("rgb",t)).map((P,T)=>`${s[T]}: ${e(P)}`).join(", ")}}`}function zo(n){return t=>ci(t,n)}function ui(n,t){const e=ne(2),s=ne(t==="float"?2:0),l=["r","g","b","a"];return`{${n.getComponents("rgb",t).map((T,tt)=>{const Pt=tt===3?e:s;return`${l[tt]}: ${Pt(T)}`}).join(", ")}}`}function Ro(n){return t=>ui(t,n)}const Lo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ai},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Kn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ao},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Io},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:t},stringifier:To(t)},{format:{alpha:!0,mode:"rgb",notation:"func",type:t},stringifier:Do(t)},{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:zo(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Ro(t)}],[])];function Hn(n){return Lo.reduce((t,e)=>t||(Po(e.format,n)?e.stringifier:null),null)}const dn=G("apl");class Go{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(dn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(dn("b")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(dn("c")),s.appendChild(l),this.colorElem_=l;const P=t.createElement("div");P.classList.add(dn("m")),this.element.appendChild(P),this.markerElem_=P;const T=t.createElement("div");T.classList.add(dn("p")),this.markerElem_.appendChild(T),this.previewElem_=T,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),s=new Gt([e[0],e[1],e[2],0],"rgb"),l=new Gt([e[0],e[1],e[2],255],"rgb"),P=["to right",Cn(s),Cn(l)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Cn(t);const T=Ht(e[3],0,1,0,100);this.markerElem_.style.left=`${T}%`}onValueChange_(){this.update_()}}class Uo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Go(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ae(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=t.point.x/t.bounds.width,l=this.value.rawValue,[P,T,tt]=l.getComponents("hsv");this.value.setRawValue(new Gt([P,T,tt,s],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=re(Re(!0),ye(t));if(e===0)return;const s=this.value.rawValue,[l,P,T,tt]=s.getComponents("hsv");this.value.setRawValue(new Gt([l,P,T,tt+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){re(Re(!0),ye(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const He=G("coltxt");function Vo(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return t.appendChild(e.reduce((s,l)=>{const P=n.createElement("option");return P.textContent=l.text,P.value=l.value,s.appendChild(P),s},n.createDocumentFragment())),t}class Oo{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(He()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(He("m")),this.modeElem_=Vo(t),this.modeElem_.classList.add(He("ms")),s.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const l=t.createElement("div");l.classList.add(He("mm")),l.appendChild(g(t,"dropdown")),s.appendChild(l),this.element.appendChild(s);const P=t.createElement("div");P.classList.add(He("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=e.textViews,this.applyTextViews_(),X(e.colorMode,T=>{this.modeElem_.value=T})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(t){this.textViews_=t,this.applyTextViews_()}applyTextViews_(){O(this.textsElem_);const t=this.element.ownerDocument;this.textViews_.forEach(e=>{const s=t.createElement("div");s.classList.add(He("c")),s.appendChild(e.element),this.textsElem_.appendChild(s)})}}function Fo(n){return ne(n==="float"?2:0)}function No(n,t,e){const s=Sn(n,t)[e];return new We({min:0,max:s})}function Yn(n,t,e){return new cn(n,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",baseStep:Re(!1),parser:t.parser,props:nt.fromObject({draggingScale:t.colorType==="float"?.01:1,formatter:Fo(t.colorType)}),value:Z(0,{constraint:No(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}class qo{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.parser_=e.parser,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=Z(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Oo(t,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Yn(t,e,0),Yn(t,e,1),Yn(t,e,2)];return s.forEach((l,P)=>{an({primary:this.value,secondary:l.value,forward:T=>T.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(T,tt)=>{const Pt=this.colorMode.rawValue,Et=T.rawValue.getComponents(Pt,this.colorType_);return Et[P]=tt.rawValue,new Gt(Ns(ze(Et),Et[3]),Pt,this.colorType_)}})}),s}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Zn=G("hpl");class $o{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Zn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("div");s.classList.add(Zn("c")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(Zn("m")),this.element.appendChild(l),this.markerElem_=l,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=li(new Gt([e,100,100],"hsv"));const s=Ht(e,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Wo{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new $o(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ae(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=Ht(Jt(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),l=this.value.rawValue,[,P,T,tt]=l.getComponents("hsv");this.value.setRawValue(new Gt([s,P,T,tt],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=re(Re(!1),ye(t));if(e===0)return;const s=this.value.rawValue,[l,P,T,tt]=s.getComponents("hsv");this.value.setRawValue(new Gt([l+e,P,T,tt],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){re(Re(!1),ye(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Xn=G("svp"),di=64;class jo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Xn()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const s=t.createElement("canvas");s.height=di,s.width=di,s.classList.add(Xn("c")),this.element.appendChild(s),this.canvasElement=s;const l=t.createElement("div");l.classList.add(Xn("m")),this.element.appendChild(l),this.markerElem_=l,this.update_()}update_(){const t=f(this.canvasElement);if(!t)return;const s=this.value.rawValue.getComponents("hsv"),l=this.canvasElement.width,P=this.canvasElement.height,T=t.getImageData(0,0,l,P),tt=T.data;for(let Ot=0;Ot<P;Ot++)for(let Nt=0;Nt<l;Nt++){const Ge=Ht(Nt,0,l,0,100),hn=Ht(Ot,0,P,100,0),fn=Fs(s[0],Ge,hn),En=(Ot*l+Nt)*4;tt[En]=fn[0],tt[En+1]=fn[1],tt[En+2]=fn[2],tt[En+3]=255}t.putImageData(T,0,0);const Pt=Ht(s[1],0,100,0,100);this.markerElem_.style.left=`${Pt}%`;const Et=Ht(s[2],0,100,100,0);this.markerElem_.style.top=`${Et}%`}onValueChange_(){this.update_()}}class Ko{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new jo(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ae(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=Ht(t.point.x,0,t.bounds.width,0,100),l=Ht(t.point.y,0,t.bounds.height,100,0),[P,,,T]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Gt([P,s,l,T],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Ls(t.key)&&t.preventDefault();const[e,s,l,P]=this.value.rawValue.getComponents("hsv"),T=Re(!1),tt=re(T,ye(t)),Pt=re(T,ln(t));tt===0&&Pt===0||this.value.setRawValue(new Gt([e,s+tt,l+Pt,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Re(!1),s=re(e,ye(t)),l=re(e,ln(t));s===0&&l===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ho{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Wo(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Ko(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Uo(t,{value:this.value,viewProps:this.viewProps}),text:new cn(t,{parser:xe,baseStep:.1,props:nt.fromObject({draggingScale:.01,formatter:ne(2)}),value:Z(0,{constraint:new We({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&an({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,l)=>{const P=s.rawValue.getComponents();return P[3]=l.rawValue,new Gt(P,s.rawValue.mode)}}),this.textC_=new qo(t,{colorType:e.colorType,parser:xe,value:this.value,viewProps:this.viewProps}),this.view=new xo(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Qn=G("colsw");class Yo{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Qn()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Qn("sw")),this.element.appendChild(s),this.swatchElem_=s;const l=t.createElement("button");l.classList.add(Qn("b")),e.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Kn(t)}onValueChange_(){this.update_()}}class Zo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Yo(t,{value:this.value,viewProps:this.viewProps})}}class Jn{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=at.create(e.expanded),this.swatchC_=new Zo(t,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new gn(t,{parser:e.parser,props:nt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new uo(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Es(t,{viewProps:this.viewProps}):null;const l=new Ho(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});l.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=l,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(l.view.element),an({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,T)=>T.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),yt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=it(t);s&&e.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Xo(n,t){return Gt.isColorObject(n)?Gt.fromObject(n,t):Gt.black(t)}function Qo(n){return ze(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function Jo(n){return n.getComponents("rgb").reduce((t,e,s)=>{const l=Math.floor(s===3?e*255:e)&255;return t<<8|l},0)>>>0}function ta(n){return new Gt([n>>16&255,n>>8&255,n&255],"rgb")}function ea(n){return new Gt([n>>24&255,n>>16&255,n>>8&255,Ht(n&255,0,255,0,1)],"rgb")}function na(n){return typeof n!="number"?Gt.black():ta(n)}function sa(n){return typeof n!="number"?Gt.black():ea(n)}function ia(n){const t=Hn(n);return t?(e,s)=>{un(e,t(s))}:null}function ra(n){const t=n?Jo:Qo;return(e,s)=>{un(e,t(s))}}function oa(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function aa(n,t,e){const s=t.toRgbaObject(e);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function la(n,t){return(e,s)=>{n?oa(e,s,t):aa(e,s,t)}}function ts(n){var t;return!!(n!=null&&n.alpha||!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function ca(n){return n?t=>Kn(t,"0x"):t=>ai(t,"0x")}function ua(n){return"color"in n||"view"in n&&n.view==="color"}const da={id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!ua(t))return null;const e=$n(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>ts(n.params)?sa:na,equals:Gt.equals,writer:n=>ra(ts(n.params))},controller:n=>{const t=ts(n.params),e="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Jn(n.document,{colorType:"int",expanded:e??!1,formatter:ca(t),parser:jn("int"),pickerLayout:s??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}};function pa(n){return Gt.isRgbaColorObject(n)}function ha(n){return t=>Xo(t,n)}function fa(n,t){return e=>n?ui(e,t):ci(e,t)}const _a={id:"input-color-object",type:"input",accept:(n,t)=>{if(!Gt.isColorObject(n))return null;const e=$n(t);return e?{initialValue:n,params:e}:null},binding:{reader:n=>ha(Le(n.params)),equals:Gt.equals,writer:n=>la(pa(n.initialValue),Le(n.params))},controller:n=>{var t;const e=Gt.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,l="picker"in n.params?n.params.picker:void 0,P=(t=Le(n.params))!==null&&t!==void 0?t:"int";return new Jn(n.document,{colorType:P,expanded:s??!1,formatter:fa(e,P),parser:jn(P),pickerLayout:l??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}},ma={id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||"view"in t&&t.view==="text")return null;const e=Wn(n,Le(t));if(!e||!Hn(e))return null;const l=$n(t);return l?{initialValue:n,params:l}:null},binding:{reader:n=>{var t;return Bo((t=Le(n.params))!==null&&t!==void 0?t:"int")},equals:Gt.equals,writer:n=>{const t=Wn(n.initialValue,Le(n.params));if(!t)throw H.shouldNeverHappen();const e=ia(t);if(!e)throw H.notBindable();return e}},controller:n=>{const t=Wn(n.initialValue,Le(n.params));if(!t)throw H.shouldNeverHappen();const e=Hn(t);if(!e)throw H.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,l="picker"in n.params?n.params.picker:void 0;return new Jn(n.document,{colorType:t.type,expanded:s??!1,formatter:e,parser:jn(t.type),pickerLayout:l??"popup",supportsAlpha:t.alpha,value:n.value,viewProps:n.viewProps})}};class Ee{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((s,l)=>{var P,T;return(T=(P=this.components[l])===null||P===void 0?void 0:P.constrain(s))!==null&&T!==void 0?T:s});return this.asm_.fromComponents(e)}}const pi=G("pndtxt");class ba{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(pi()),this.textViews.forEach(s=>{const l=t.createElement("div");l.classList.add(pi("a")),l.appendChild(s.element),this.element.appendChild(l)})}}function va(n,t,e){return new cn(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",baseStep:t.axes[e].baseStep,parser:t.parser,props:t.axes[e].textProps,value:Z(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class es{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((s,l)=>va(t,e,l)),this.acs_.forEach((s,l)=>{an({primary:this.value,secondary:s.value,forward:P=>e.assembly.toComponents(P.rawValue)[l],backward:(P,T)=>{const tt=e.assembly.toComponents(P.rawValue);return tt[l]=T.rawValue,e.assembly.fromComponents(tt)}})}),this.view=new ba(t,{textViews:this.acs_.map(s=>s.view)})}}function hi(n,t){return"step"in n&&!N(n.step)?new vn(n.step,t):null}function fi(n){return!N(n.max)&&!N(n.min)?new We({max:n.max,min:n.min}):!N(n.max)||!N(n.min)?new ks({max:n.max,min:n.min}):null}function ga(n){const t=we(n,We);if(t)return[t.values.get("min"),t.values.get("max")];const e=we(n,ks);return e?[e.minValue,e.maxValue]:[void 0,void 0]}function wa(n,t){const e=[],s=hi(n,t);s&&e.push(s);const l=fi(n);l&&e.push(l);const P=qn(n.options);return P&&e.push(P),new en(e)}const xa={id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=dt,s=Ct(t,{format:e.optional.function,max:e.optional.number,min:e.optional.number,options:e.optional.custom(xn),step:e.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>zs,constraint:n=>wa(n.params,n.initialValue),writer:n=>un},controller:n=>{var t;const e=n.value,s=n.constraint,l=s&&we(s,nn);if(l)return new sn(n.document,{props:new nt({options:l.values.value("options")}),value:e,viewProps:n.viewProps});const P=(t="format"in n.params?n.params.format:void 0)!==null&&t!==void 0?t:ne(yn(s,e.rawValue)),T=s&&we(s,We);return T?new Nn(n.document,{baseStep:je(s),parser:xe,sliderProps:new nt({maxValue:T.values.value("max"),minValue:T.values.value("min")}),textProps:nt.fromObject({draggingScale:Ke(s,e.rawValue),formatter:P}),value:e,viewProps:n.viewProps}):new cn(n.document,{baseStep:je(s),parser:xe,props:nt.fromObject({draggingScale:Ke(s,e.rawValue),formatter:P}),value:e,viewProps:n.viewProps})}};class Me{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(N(t))return!1;const e=t.x,s=t.y;return!(typeof e!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const _i={toComponents:n=>n.getComponents(),fromComponents:n=>new Me(...n)},Ye=G("p2d");class ya{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ye()),e.viewProps.bindClassModifiers(this.element),X(e.expanded,_t(this.element,Ye(void 0,"expanded")));const s=t.createElement("div");s.classList.add(Ye("h")),this.element.appendChild(s);const l=t.createElement("button");l.classList.add(Ye("b")),l.appendChild(g(t,"p2dpad")),e.viewProps.bindDisabled(l),s.appendChild(l),this.buttonElement=l;const P=t.createElement("div");if(P.classList.add(Ye("t")),s.appendChild(P),this.textElement=P,e.pickerLayout==="inline"){const T=t.createElement("div");T.classList.add(Ye("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}const Be=G("p2dp");class Pa{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=e.invertsY,this.maxValue_=e.maxValue,this.element=t.createElement("div"),this.element.classList.add(Be()),e.layout==="popup"&&this.element.classList.add(Be(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("div");s.classList.add(Be("p")),e.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const l=t.createElementNS(S,"svg");l.classList.add(Be("g")),this.padElement.appendChild(l),this.svgElem_=l;const P=t.createElementNS(S,"line");P.classList.add(Be("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const T=t.createElementNS(S,"line");T.classList.add(Be("ax")),T.setAttributeNS(null,"x1","50%"),T.setAttributeNS(null,"y1","0"),T.setAttributeNS(null,"x2","50%"),T.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(T);const tt=t.createElementNS(S,"line");tt.classList.add(Be("l")),tt.setAttributeNS(null,"x1","50%"),tt.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(tt),this.lineElem_=tt;const Pt=t.createElement("div");Pt.classList.add(Be("m")),this.padElement.appendChild(Pt),this.markerElem_=Pt,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),s=this.maxValue_,l=Ht(t,-s,+s,0,100),P=Ht(e,-s,+s,0,100),T=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${l}%`),this.lineElem_.setAttributeNS(null,"y2",`${T}%`),this.markerElem_.style.left=`${l}%`,this.markerElem_.style.top=`${T}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function mi(n,t,e){return[re(t[0],ye(n)),re(t[1],ln(n))*(e?1:-1)]}class Sa{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.baseSteps_=e.baseSteps,this.maxValue_=e.maxValue,this.invertsY_=e.invertsY,this.view=new Pa(t,{invertsY:this.invertsY_,layout:e.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ae(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const s=this.maxValue_,l=Ht(t.point.x,0,t.bounds.width,-s,+s),P=Ht(this.invertsY_?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-s,+s);this.value.setRawValue(new Me(l,P),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Ls(t.key)&&t.preventDefault();const[e,s]=mi(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(new Me(this.value.rawValue.x+e,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,s]=mi(t,this.baseSteps_,this.invertsY_);e===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ka{constructor(t,e){var s,l;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=at.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Es(t,{viewProps:this.viewProps}):null;const P=new Sa(t,{baseSteps:[e.axes[0].baseStep,e.axes[1].baseStep],invertsY:e.invertsY,layout:e.pickerLayout,maxValue:e.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new es(t,{assembly:_i,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new ya(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(l=this.view.buttonElement)===null||l===void 0||l.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),an({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,tt)=>tt.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),yt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,s=t.relatedTarget;(!s||!e.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,s=it(t);s&&e.contains(s)||s&&s===this.view.buttonElement&&!u(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}class Ze{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(N(t))return!1;const e=t.x,s=t.y,l=t.z;return!(typeof e!="number"||typeof s!="number"||typeof l!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const bi={toComponents:n=>n.getComponents(),fromComponents:n=>new Ze(...n)};function Ca(n){return Ze.isObject(n)?new Ze(n.x,n.y,n.z):new Ze}function Ea(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function Ma(n,t){return new Ee({assembly:bi,components:[Pe("x"in n?n.x:void 0,t.x),Pe("y"in n?n.y:void 0,t.y),Pe("z"in n?n.z:void 0,t.z)]})}function ns(n,t){return{baseStep:je(t),constraint:t,textProps:nt.fromObject({draggingScale:Ke(t,n),formatter:ne(yn(t,n))})}}const Ba={id:"input-point3d",type:"input",accept:(n,t)=>{if(!Ze.isObject(n))return null;const e=dt,s=Ct(t,{x:e.optional.custom(ke),y:e.optional.custom(ke),z:e.optional.custom(ke)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ca,constraint:n=>Ma(n.params,n.initialValue),equals:Ze.equals,writer:n=>Ea},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Ee))throw H.shouldNeverHappen();return new es(n.document,{assembly:bi,axes:[ns(t.rawValue.x,e.components[0]),ns(t.rawValue.y,e.components[1]),ns(t.rawValue.z,e.components[2])],parser:xe,value:t,viewProps:n.viewProps})}};class Xe{constructor(t=0,e=0,s=0,l=0){this.x=t,this.y=e,this.z=s,this.w=l}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(N(t))return!1;const e=t.x,s=t.y,l=t.z,P=t.w;return!(typeof e!="number"||typeof s!="number"||typeof l!="number"||typeof P!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const vi={toComponents:n=>n.getComponents(),fromComponents:n=>new Xe(...n)};function Ta(n){return Xe.isObject(n)?new Xe(n.x,n.y,n.z,n.w):new Xe}function Da(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function Aa(n,t){return new Ee({assembly:vi,components:[Pe("x"in n?n.x:void 0,t.x),Pe("y"in n?n.y:void 0,t.y),Pe("z"in n?n.z:void 0,t.z),Pe("w"in n?n.w:void 0,t.w)]})}function Ia(n,t){return{baseStep:je(t),constraint:t,textProps:nt.fromObject({draggingScale:Ke(t,n),formatter:ne(yn(t,n))})}}const za={id:"input-point4d",type:"input",accept:(n,t)=>{if(!Xe.isObject(n))return null;const e=dt,s=Ct(t,{x:e.optional.custom(ke),y:e.optional.custom(ke),z:e.optional.custom(ke),w:e.optional.custom(ke)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ta,constraint:n=>Aa(n.params,n.initialValue),equals:Xe.equals,writer:n=>Da},controller:n=>{const t=n.value,e=n.constraint;if(!(e instanceof Ee))throw H.shouldNeverHappen();return new es(n.document,{assembly:vi,axes:t.rawValue.getComponents().map((s,l)=>Ia(s,e.components[l])),parser:xe,value:t,viewProps:n.viewProps})}};function Ra(n){const t=[],e=qn(n.options);return e&&t.push(e),new en(t)}const La={id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const s=Ct(t,{options:dt.optional.custom(xn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs,constraint:n=>Ra(n.params),writer:n=>un},controller:n=>{const t=n.document,e=n.value,s=n.constraint,l=s&&we(s,nn);return l?new sn(t,{props:new nt({options:l.values.value("options")}),value:e,viewProps:n.viewProps}):new gn(t,{parser:P=>P,props:nt.fromObject({formatter:Un}),value:e,viewProps:n.viewProps})}},pn={monitor:{defaultInterval:200,defaultLineCount:3}},gi=G("mll");class Ga{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(gi()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("textarea");s.classList.add(gi("i")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,s.readOnly=!0,e.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,s=[];this.value.rawValue.forEach(l=>{l!==void 0&&s.push(this.formatter_(l))}),t.textContent=s.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class ss{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Ga(t,{formatter:e.formatter,lineCount:e.lineCount,value:this.value,viewProps:this.viewProps})}}const wi=G("sgl");class Ua{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(wi()),e.viewProps.bindClassModifiers(this.element);const s=t.createElement("input");s.classList.add(wi("i")),s.readOnly=!0,s.type="text",e.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class is{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Ua(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const Va={id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const s=Ct(t,{lineCount:dt.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Bs},controller:n=>{var t;return n.value.rawValue.length===1?new is(n.document,{formatter:Ts,value:n.value,viewProps:n.viewProps}):new ss(n.document,{formatter:Ts,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:pn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Te=G("grl");class Oa{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Te()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=t.createElementNS(S,"svg");s.classList.add(Te("g")),s.style.height=`calc(var(--bld-us) * ${e.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const l=t.createElementNS(S,"polyline");this.svgElem_.appendChild(l),this.lineElem_=l;const P=t.createElement("div");P.classList.add(Te("t"),G("tt")()),this.element.appendChild(P),this.tooltipElem_=P,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const t=this.svgElem_.getBoundingClientRect(),e=this.value.rawValue.length-1,s=this.props_.get("minValue"),l=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Ot,Nt)=>{if(Ot===void 0)return;const Ge=Ht(Nt,0,e,0,t.width),hn=Ht(Ot,s,l,t.height,0);P.push([Ge,hn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const T=this.tooltipElem_,tt=this.value.rawValue[this.cursor_.rawValue];if(tt===void 0){T.classList.remove(Te("t","a"));return}const Pt=Ht(this.cursor_.rawValue,0,e,0,t.width),Et=Ht(tt,s,l,t.height,0);T.style.left=`${Pt}px`,T.style.top=`${Et}px`,T.textContent=`${this.formatter_(tt)}`,T.classList.contains(Te("t","a"))||(T.classList.add(Te("t","a"),Te("t","in")),i(T),T.classList.remove(Te("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Fa{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=Z(-1),this.view=new Oa(t,{cursor:this.cursor_,formatter:e.formatter,lineCount:e.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Ae(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const e=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ht(t.offsetX,0,e.width,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ht(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function rs(n){return"format"in n&&!N(n.format)?n.format:ne(2)}function Na(n){var t;return n.value.rawValue.length===1?new is(n.document,{formatter:rs(n.params),value:n.value,viewProps:n.viewProps}):new ss(n.document,{formatter:rs(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:pn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function qa(n){var t,e,s;return new Fa(n.document,{formatter:rs(n.params),lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:pn.monitor.defaultLineCount,props:nt.fromObject({maxValue:(e="max"in n.params?n.params.max:null)!==null&&e!==void 0?e:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function xi(n){return"view"in n&&n.view==="graph"}const $a={id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=dt,s=Ct(t,{format:e.optional.function,lineCount:e.optional.number,max:e.optional.number,min:e.optional.number,view:e.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>xi(n)?64:1,reader:n=>zs},controller:n=>xi(n.params)?qa(n):Na(n)},Wa={id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=dt,s=Ct(t,{lineCount:e.optional.number,multiline:e.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ss(n.document,{formatter:Un,lineCount:(t=n.params.lineCount)!==null&&t!==void 0?t:pn.monitor.defaultLineCount,value:e,viewProps:n.viewProps}):new is(n.document,{formatter:Un,value:e,viewProps:n.viewProps})}};function ja(n,t){var e;const s=n.accept(t.target.read(),t.params);if(N(s))return null;const l=dt,P={target:t.target,initialValue:s.initialValue,params:s.params},T=n.binding.reader(P),tt=n.binding.constraint?n.binding.constraint(P):void 0,Pt=Z(T(s.initialValue),{constraint:tt,equals:n.binding.equals}),Et=new br({reader:T,target:t.target,value:Pt,writer:n.binding.writer(P)}),Ot=l.optional.boolean(t.params.disabled).value,Nt=l.optional.boolean(t.params.hidden).value,Ge=n.controller({constraint:tt,document:t.document,initialValue:s.initialValue,params:s.params,value:Et.value,viewProps:h.create({disabled:Ot,hidden:Nt})});return new Wt(t.document,{binding:Et,blade:Y(),props:nt.fromObject({label:"label"in t.params?(e=l.optional.string(t.params.label).value)!==null&&e!==void 0?e:null:t.target.key}),valueController:Ge})}function Ka(n,t){return t===0?new _r:new mr(n,t??pn.monitor.defaultInterval)}function Ha(n,t){var e,s,l;const P=dt,T=n.accept(t.target.read(),t.params);if(N(T))return null;const tt={target:t.target,initialValue:T.initialValue,params:T.params},Pt=n.binding.reader(tt),Et=(s=(e=P.optional.number(t.params.bufferSize).value)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(T.params))!==null&&s!==void 0?s:1,Ot=P.optional.number(t.params.interval).value,Nt=new xr({reader:Pt,target:t.target,ticker:Ka(t.document,Ot),value:vr(Et)}),Ge=P.optional.boolean(t.params.disabled).value,hn=P.optional.boolean(t.params.hidden).value,fn=n.controller({document:t.document,params:T.params,value:Nt.value,viewProps:h.create({disabled:Ge,hidden:hn})});return new Kt(t.document,{binding:Nt,blade:Y(),props:nt.fromObject({label:"label"in t.params?(l=P.optional.string(t.params.label).value)!==null&&l!==void 0?l:null:t.target.key}),valueController:fn})}class Ya{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t){t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput(t,e,s){const l=e.read();if(N(l))throw new H({context:{key:e.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((T,tt)=>T??ja(tt,{document:t,target:e,params:s}),null);if(P)return P;throw new H({context:{key:e.key},type:"nomatchingcontroller"})}createMonitor(t,e,s){const l=this.pluginsMap_.monitors.reduce((P,T)=>P??Ha(T,{document:t,params:s,target:e}),null);if(l)return l;throw new H({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const s=this.pluginsMap_.blades.reduce((l,P)=>l??fr(P,{document:t,params:e}),null);if(!s)throw new H({type:"nomatchingview",context:{params:e}});return s}createBladeApi(t){if(t instanceof Wt)return new Zt(t);if(t instanceof Kt)return new Yt(t);if(t instanceof jt)return new le(t,this);const e=this.pluginsMap_.blades.reduce((s,l)=>s??l.api({controller:t,pool:this}),null);if(!e)throw H.shouldNeverHappen();return e}}function Za(){const n=new Ya;return[nl,Ba,za,La,xa,ma,_a,da,co,Va,Wa,$a,bt,ar,cr,Ps].forEach(t=>{n.register(t)}),n}function Xa(n){return Me.isObject(n)?new Me(n.x,n.y):new Me}function Qa(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function Pe(n,t){if(!n)return;const e=[],s=hi(n,t);s&&e.push(s);const l=fi(n);return l&&e.push(l),new en(e)}function Ja(n,t){return new Ee({assembly:_i,components:[Pe("x"in n?n.x:void 0,t.x),Pe("y"in n?n.y:void 0,t.y)]})}function yi(n,t){const[e,s]=n?ga(n):[];if(!N(e)||!N(s))return Math.max(Math.abs(e??0),Math.abs(s??0));const l=je(n);return Math.max(Math.abs(l)*10,Math.abs(t)*10)}function tl(n,t){const e=t instanceof Ee?t.components[0]:void 0,s=t instanceof Ee?t.components[1]:void 0,l=yi(e,n.x),P=yi(s,n.y);return Math.max(l,P)}function Pi(n,t){return{baseStep:je(t),constraint:t,textProps:nt.fromObject({draggingScale:Ke(t,n),formatter:ne(yn(t,n))})}}function el(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const nl={id:"input-point2d",type:"input",accept:(n,t)=>{if(!Me.isObject(n))return null;const e=dt,s=Ct(t,{expanded:e.optional.boolean,picker:e.optional.custom(Vs),x:e.optional.custom(ke),y:e.optional.object({inverted:e.optional.boolean,max:e.optional.number,min:e.optional.number,step:e.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Xa,constraint:n=>Ja(n.params,n.initialValue),equals:Me.equals,writer:n=>Qa},controller:n=>{const t=n.document,e=n.value,s=n.constraint;if(!(s instanceof Ee))throw H.shouldNeverHappen();const l="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new ka(t,{axes:[Pi(e.rawValue.x,s.components[0]),Pi(e.rawValue.y,s.components[1])],expanded:l??!1,invertsY:el(n.params),maxValue:tl(e.rawValue,s),parser:xe,pickerLayout:P??"popup",value:e,viewProps:n.viewProps})}};class Si extends y{constructor(t){super(t),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get options(){return this.controller_.valueController.props.get("options")}set options(t){this.controller_.valueController.props.set("options",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}class ki extends y{constructor(t){super(t),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(t){this.controller_.valueController.sliderController.props.set("maxValue",t)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(t){this.controller_.valueController.sliderController.props.set("minValue",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}class Ci extends y{constructor(t){super(t),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",e=>{this.emitter_.emit("change",{event:new M(this,e.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(t){this.controller_.props.set("label",t)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(t){this.controller_.valueController.props.set("formatter",t)}get value(){return this.controller_.valueController.value.rawValue}set value(t){this.controller_.valueController.value.rawValue=t}on(t,e){const s=e.bind(this);return this.emitter_.on(t,l=>{s(l.event)}),this}}const sl=function(){return{id:"list",type:"blade",accept(n){const t=dt,e=Ct(n,{options:t.required.custom(xn),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string});return e?{params:e}:null},controller(n){const t=new nn(Os(n.params.options)),e=Z(n.params.value,{constraint:t}),s=new sn(n.document,{props:new nt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new $e(n.document,{blade:n.blade,props:nt.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof $e)||!(n.controller.valueController instanceof sn)?null:new Si(n.controller)}}}();function il(n){return n.reduce((t,e)=>Object.assign(t,{[e.presetKey]:e.read()}),{})}function rl(n,t){n.forEach(e=>{const s=t[e.target.presetKey];s!==void 0&&e.writer(e.target,e.reader(s))})}class ol extends be{constructor(t,e){super(t,e)}get element(){return this.controller_.view.element}importPreset(t){const e=this.controller_.rackController.rack.find(Wt).map(s=>s.binding);rl(e,t),this.refresh()}exportPreset(){const t=this.controller_.rackController.rack.find(Wt).map(e=>e.binding.target);return il(t)}refresh(){this.controller_.rackController.rack.find(Wt).forEach(t=>{t.binding.read()}),this.controller_.rackController.rack.find(Kt).forEach(t=>{t.binding.read()})}}class al extends zn{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const ll={id:"slider",type:"blade",accept(n){const t=dt,e=Ct(n,{max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number});return e?{params:e}:null},controller(n){var t,e;const s=(t=n.params.value)!==null&&t!==void 0?t:0,l=new We({max:n.params.max,min:n.params.min}),P=new Nn(n.document,{baseStep:1,parser:xe,sliderProps:new nt({maxValue:l.values.value("max"),minValue:l.values.value("min")}),textProps:nt.fromObject({draggingScale:Ke(void 0,s),formatter:(e=n.params.format)!==null&&e!==void 0?e:Qr}),value:Z(s,{constraint:l}),viewProps:n.viewProps});return new $e(n.document,{blade:n.blade,props:nt.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof $e)||!(n.controller.valueController instanceof Nn)?null:new ki(n.controller)}},cl=function(){return{id:"text",type:"blade",accept(n){const t=dt,e=Ct(n,{parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string});return e?{params:e}:null},controller(n){var t;const e=new gn(n.document,{parser:n.params.parse,props:nt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:s=>String(s)}),value:Z(n.params.value),viewProps:n.viewProps});return new $e(n.document,{blade:n.blade,props:nt.fromObject({label:n.params.label}),valueController:e})},api(n){return!(n.controller instanceof $e)||!(n.controller.valueController instanceof gn)?null:new Ci(n.controller)}}}();function ul(n){const t=n.createElement("div");return t.classList.add(G("dfw")()),n.body&&n.body.appendChild(t),t}function Ei(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const s=n.createElement("style");s.dataset.tpStyle=t,s.textContent=e,n.head.appendChild(s)}class dl extends ol{constructor(t){var e,s;const l=t??{},P=(e=l.document)!==null&&e!==void 0?e:a(),T=Za(),tt=new al(P,{expanded:l.expanded,blade:Y(),props:nt.fromObject({title:l.title}),viewProps:h.create()});super(tt,T),this.pool_=T,this.containerElem_=(s=l.container)!==null&&s!==void 0?s:ul(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!l.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw H.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw H.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(t){t.css&&Ei(this.document,`plugin-${t.id}`,t.css)}setUpDefaultPlugins_(){Ei(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(t=>{this.embedPluginStyle_(t)}),this.registerPlugin({plugins:[ll,sl,Ps,cl]})}}const pl=new C("3.1.10");_.BladeApi=y,_.ButtonApi=ut,_.FolderApi=be,_.InputBindingApi=Zt,_.ListApi=Si,_.MonitorBindingApi=Yt,_.Pane=dl,_.SeparatorApi=_s,_.SliderApi=ki,_.TabApi=ws,_.TabPageApi=gs,_.TextApi=Ci,_.TpChangeEvent=M,_.VERSION=pl,Object.defineProperty(_,"__esModule",{value:!0})})})(as,as.exports);var Ul=as.exports;const Vl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  _pad         : u32,
};

struct SHSolver {
  dir_xy        : u32,
  dir_z_opacity : u32,
  idx           : u32,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       sort_infos : GeneralInfo;
@group(1) @binding(1) var<storage, read>       sh_solvers : array<SHSolver>;
@group(1) @binding(2) var<storage, read_write> splats_2d  : array<Splat2DGS>;
@group(1) @binding(3) var<storage, read>       color_params : array<f32>;

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
}
`,Ol=`// 2DGS render — vertex+fragment.
// Forked from gaussian_render_f32.wgsl. Vertex expands a tight pixel-space
// quad sized from preprocess's center_pix + extent_pix. Fragment runs a
// ray-disk intersection through Tu/Tv/Tw (the CUDA cross-product formula) and
// evaluates the BetaScaled kernel \`(1 − ρ²/9)^shape\` (k = 3).
//
// Color is read straight from Splat2DGS's color_rg/color_b_shape (filled by
// preprocess_2dgs); shape is the per-Gaussian beta exponent.
//
// Interpolation qualifiers:
//   • Tu/Tv/Tw, gauss_id, shape, center_pix, depth_plane → flat (constant
//     across the quad — instance-uniform).
// We keep \`flat\` (not \`flat, either\`) because WebSplatter ships exactly that
// pattern in their 3DGS render shader and runs on iPhone 15 Pro Max,
// Snapdragon 8 Gen 3, and Snapdragon 865 per the paper. Compat-mode rules
// don't apply on those devices.

const FILTER_INV_SQUARE : f32 = 2.0;             // 1 / (2 · FilterSize²) with FilterSize=√2/2
const FILTER_SIZE       : f32 = 0.7071067811865476;
const K_BETA            : f32 = 3.0;
const K_BETA_SQ         : f32 = 9.0;

// Compile-time constant: 1 = beta_scaled bake (--kernel beta_scaled,
// shape > 0 per Gauss), 0 = Gaussian bake (--kernel gaussian, shape == 0
// always). The host picks the value at pipeline-build time from the
// bake_meta.json kernel field, and the shader dead-strips the unused
// branch. Saves one per-fragment compare + conditional branch that used
// to gate a per-Gauss test (\`sh < 1e-6\`) which is really per-bake.
override BETA_KERNEL : u32 = 1u;

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
  _pad         : u32,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) @interpolate(flat) Tu          : vec3<f32>,
  @location(1) @interpolate(flat) Tv          : vec3<f32>,
  @location(2) @interpolate(flat) Tw          : vec3<f32>,
  @location(3) @interpolate(flat) color       : vec4<f32>,
  @location(4) @interpolate(flat) shape       : f32,
  @location(5) @interpolate(flat) center_pix  : vec2<f32>,
  @location(6) @interpolate(flat) depth_plane : vec3<f32>,
  @location(7) @interpolate(flat) gauss_id    : u32,
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

// 48-byte TexParams — populated by ply-loader.buildAtlasResources(). When the
// bundle has no atlas (or the user disables it via the tweakpane toggle), the
// host writes \`atlas_width = 0\` and the fragment shader's single
// \`if atlas_width > 0u\` short-circuits — same trick Halloumi uses to avoid a
// per-fragment uniform fetch + branch. Tail half holds the RVQ-paired dequant
// params (pair_scale/pair_offset for the two collapsed pair codebooks); zeroed
// when atlas_format != 5.
struct TexParams {
  atlas_width   : u32,
  atlas_layer_h : u32,
  atlas_format  : u32,    // 2 = BC7, 3 = ASTC 4x4, 5 = RVQ-paired
  atlas_scale   : f32,
  atlas_offset  : f32,
  uv_extent     : f32,    // surfel UV cutoff used at bake time (≈ 4.0)
  res_bias      : f32,    // additive RGB bias after the residual is folded in
  rvq_block     : u32,    // RVQ codeword tile size in pixels (4 for typeA/B, 8+ for typeC)
  pair_scale    : vec2<f32>,
  pair_offset   : vec2<f32>,
};

const ATLAS_FORMAT_RVQ_PAIRED : u32 = 5u;
// RVQ-paired compile-time constants. K_orig stays at 256 across all typeA/B/C
// variants (per-stage codebook size); B (the per-codeword patch size) is now
// uniform-driven so the shader handles both B=4 (typeA/B) and B=8+ (typeC).
const RVQ_K_ORIG : u32 = 256u;
// rvq_packed_idx is a 2D r32uint texture (was a storage buffer). On TBDR
// rvq_packed_idx is a 2D r32uint texture (was a storage buffer). On TBDR
// mobile (Adreno / Mali / Apple), random-access storage-buffer reads go
// through a slower cache hierarchy than texture reads; encoding the
// per-block packed index as a u32 texture gets us the texture-cache
// fast path. Width is a fixed power of two so the per-fragment
// (bid → (x,y)) decompose is two shifts/masks.
const RVQ_IDX_TEX_W      : u32 = 8192u;
const RVQ_IDX_TEX_W_MASK : u32 = 8191u;
const RVQ_IDX_TEX_W_SHIFT: u32 = 13u;    // log2(8192)

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var<storage, read> atlas_rects     : array<f32>;
@group(2) @binding(2) var                atlas_samp      : sampler;
@group(2) @binding(3) var<uniform>       tex_params      : TexParams;
@group(2) @binding(4) var                rvq_codebook    : texture_2d<f32>;
@group(2) @binding(5) var                rvq_cb_samp     : sampler;
@group(2) @binding(6) var                rvq_packed_idx  : texture_2d<u32>;
@group(2) @binding(7) var<storage, read> rvq_surfel_off  : array<u32>;

// One paired-RVQ decode tap: returns the summed (pair0 + pair1) residual RGB
// at integer rect-local pixel (au_local, av_local) of surfel \`g\`. Each tap
// does 1 storage load (packed index) + 2 nearest-tex samples + a dequant MAD.
fn sample_rvq_paired(g: u32, au_local: i32, av_local: i32,
                     w_span: i32, h_span: i32) -> vec3<f32> {
    let B = i32(tex_params.rvq_block);
    let K_B = i32(RVQ_K_ORIG) * B;          // pair row-stride in the codebook texture
    let w_tex = f32(K_B);                    // codebook texture width  = K_orig * B
    let h_tex = f32(2 * K_B);                // codebook texture height = 2 * K_orig * B
    let lu = clamp(au_local, 0, w_span - 1);
    let lv = clamp(av_local, 0, h_span - 1);
    let bu = lu / B;
    let bv = lv / B;
    let iu = lu - bu * B;
    let iv = lv - bv * B;
    let bw_g = w_span / B;
    let bid = rvq_surfel_off[g] + u32(bv) * u32(bw_g) + u32(bu);

    // bid → (x, y) inside the r32uint index texture. Width is power-of-two
    // so the decompose is \`x = bid & (W-1); y = bid >> log2(W)\`.
    let ix = i32(bid & RVQ_IDX_TEX_W_MASK);
    let iy = i32(bid >> RVQ_IDX_TEX_W_SHIFT);
    let packed = textureLoad(rvq_packed_idx, vec2<i32>(ix, iy), 0).x;
    let p0 = packed & 0xFFFFu;
    let p1 = packed >> 16u;
    let c0_hi = i32(p0 >> 8u);   let c0_lo = i32(p0 & 0xFFu);
    let c1_hi = i32(p1 >> 8u);   let c1_lo = i32(p1 & 0xFFu);

    // Codebook tile layout: pair p row-stride = K_orig*B; within a pair,
    // codeword (c_hi, c_lo) occupies B×B at (c_lo*B + iu, c_hi*B + iv).
    let uv0 = vec2<f32>(
        (f32(c0_lo * B + iu) + 0.5) / w_tex,
        (f32(c0_hi * B + iv) + 0.5) / h_tex);
    let uv1 = vec2<f32>(
        (f32(c1_lo * B + iu) + 0.5) / w_tex,
        (f32(K_B + c1_hi * B + iv) + 0.5) / h_tex);

    let rgba0 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv0, 0.0);
    let rgba1 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv1, 0.0);

    let s = tex_params.pair_scale;
    let o = tex_params.pair_offset;
    return rgba0.rgb * s.x + vec3<f32>(o.x)
         + rgba1.rgb * s.y + vec3<f32>(o.y);
}

// Fast path: hw-bilinear within a single codeword tile. Replaces the 4 sw
// atlas taps + sw mix with ONE hw-bilinear codebook sample per pair (= 2
// codebook samples total instead of 8). Caller must verify the 2×2 texel
// neighborhood is fully inside one codeword tile AND inside the surfel rect.
fn sample_rvq_paired_hw_bilinear(g: u32, au_local_f: f32, av_local_f: f32,
                                  w_span: i32, h_span: i32) -> vec3<f32> {
    let B = i32(tex_params.rvq_block);
    let K_B = i32(RVQ_K_ORIG) * B;
    let w_tex = f32(K_B);
    let h_tex = f32(2 * K_B);
    let au0 = i32(floor(au_local_f));
    let av0 = i32(floor(av_local_f));
    let fu = au_local_f - f32(au0);
    let fv = av_local_f - f32(av0);
    let bu = au0 / B;
    let bv = av0 / B;
    let iu = au0 - bu * B;
    let iv = av0 - bv * B;
    let bw_g = w_span / B;
    let bid = rvq_surfel_off[g] + u32(bv) * u32(bw_g) + u32(bu);

    let ix = i32(bid & RVQ_IDX_TEX_W_MASK);
    let iy = i32(bid >> RVQ_IDX_TEX_W_SHIFT);
    let packed = textureLoad(rvq_packed_idx, vec2<i32>(ix, iy), 0).x;
    let p0 = packed & 0xFFFFu;
    let p1 = packed >> 16u;
    let c0_hi = i32(p0 >> 8u);   let c0_lo = i32(p0 & 0xFFu);
    let c1_hi = i32(p1 >> 8u);   let c1_lo = i32(p1 & 0xFFu);

    // UV at fractional position (c_lo*B + iu + fu, c_hi*B + iv + fv) — the
    // hw bilinear blends texels (iu, iu+1) × (iv, iv+1) with weights fu / fv,
    // which is exactly the atlas-level bilinear result.
    let uv0 = vec2<f32>(
        (f32(c0_lo * B + iu) + fu + 0.5) / w_tex,
        (f32(c0_hi * B + iv) + fv + 0.5) / h_tex);
    let uv1 = vec2<f32>(
        (f32(c1_lo * B + iu) + fu + 0.5) / w_tex,
        (f32(K_B + c1_hi * B + iv) + fv + 0.5) / h_tex);

    let rgba0 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv0, 0.0);
    let rgba1 = textureSampleLevel(rvq_codebook, rvq_cb_samp, uv1, 0.0);

    let s = tex_params.pair_scale;
    let o = tex_params.pair_offset;
    return rgba0.rgb * s.x + vec3<f32>(o.x)
         + rgba1.rgb * s.y + vec3<f32>(o.y);
}

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
    // The strip 0→1→2→3 forms two triangles tiling the unit square; the
    // unrolled bit-math here is a one-shader-cycle replacement for the
    // 8-case switch we used to stamp an octagon. Octagon was ~34% smaller
    // fragment area at 2× the vertex shader invocations — net loss after
    // OAC+SnugBox tightened the bbox enough that the corner-cut barely
    // mattered, and the extra vertex traffic was visible in the render-
    // pass timing on most GPUs.
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
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    // CUDA renderBakedCUDA pixel convention: integer pixel coord with origin
    // at top-left.
    let pixf = floor(in.position.xy);

    // \`--method mixed_3d\` untextured branch — Gauss is a 3D EWA ellipsoid,
    // not a 2DGS surfel. Top bit of gauss_id is the untextured flag (set in
    // surfel_cull at store time). When set:
    //   * Tu carries the inverse 2D covariance (a, b, c), NOT the transmat;
    //     Tv, Tw, depth_u, depth_v are zero (unused).
    //   * Falloff is \`α·exp(-½·m)\` with Mahalanobis
    //     \`m = a·dx² + 2b·dx·dy + c·dy²\` (dx = pixel − center).
    //   * No atlas residual — untextured Gausses carry a zero atlas rect at
    //     bake time, so the skip-texture branch even on the textured path
    //     would just add zero. Bypassing the atlas tap saves the sample.
    //   * Depth = depth_center (no surfel-plane interpolation).
    // Matches the CUDA bake-render's untex_ewa branch at
    // diff_surfel_bake_render/cuda_rasterizer/forward.cu:457.
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
        return vec4<f32>(color_e, 1.0) * alpha_e;
    }

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch).  Skips
    // the per-fragment cross-product + perspective divide.  Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both
    // linear in pix → u = p.x/p.z is a rational function of pix, and:
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
    // boundary. Past that boundary the formula's sign flips → wrong colors
    // (foggy tile-discontinuity artifact on large near-camera Gauss). Cull.
    if denom < 0.1 { discard; }
    let inv_d  = 1.0 / denom;
    let s      = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    let rho3d  = dot(s, s);

    // Screen-space low-pass (alpha_lp) for sub-pixel splats.
    let d_pix = in.center_pix - pixf;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);

    let depth = dot(in.depth_plane, vec3<f32>(s, 1.0));
    if depth < 0.2 { discard; }

    // Kernel dispatch — BETA_KERNEL is a compile-time constant set from the
    // bake's kernel field, so exactly one branch survives after
    // pipeline-constant folding:
    //   beta_scaled (BETA_KERNEL=1): (1 − ρ3d/9)^β, hard cutoff at ρ3d = 9.
    //   gaussian    (BETA_KERNEL=0): exp(-ρ3d / 2), unbounded analytically
    //                                (b<1/255 cull handles the far tail at
    //                                 ~ρ3d≈11 for α=1).
    // The previous per-fragment \`if sh < 1e-6\` compare was really a per-bake
    // switch, so this saves one predicate per pixel.
    var alpha_beta : f32;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d * 0.5);
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        let sh = in.shape;
        // Fast paths for shape ∈ {0.5, 1, 2, 4}. Bakes that have been
        // shape-quantized (see scripts/quantize_shape.py / \`*_quant\`
        // bundles) will hit one of these every fragment, skipping pow()
        // entirely. Non-quantized bakes fall through to pow on most
        // surfels — only the small subset that happen to have shape near
        // an integer power get the speedup naturally. pow is ~30-50
        // cycles, the integer-power paths are 0-3 mul; near-pure
        // quantized bakes get a ~10× win on this op.
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
    // alpha_lp is the screen-space low-pass (subpixel filter) — it only
    // matters near the surfel edge where alpha_beta has already fallen.
    // Inside the disc alpha_beta is close to 1 and dominates the max(),
    // making the exp() a wasted transcendental. Skip when the beta kernel
    // is comfortably ahead: with alpha_lp <= 1 always, once alpha_beta
    // > 0.5 no low-pass value can beat it (short of a screen-space
    // reconstruction accident). Saves one exp() per fragment for the
    // majority "inside the disc" case.
    let opa        = in.color.a;
    var kernel_val : f32 = alpha_beta;
    if alpha_beta <= 0.5 {
        let alpha_lp = exp(-rho2d * 0.5);
        kernel_val = max(alpha_beta, alpha_lp);
    }
    let b          = min(0.99, opa * kernel_val);
    if b < 1.0 / 255.0 { discard; }

    var color = in.color.rgb;

    // Atlas residual lookup. Three paths share one fragment shader:
    //   • BC7 / ASTC: surfel UV → atlas pixel coord → hw bilinear sample +
    //     dequantize (resid = rgba * atlas_scale + atlas_offset).
    //   • RVQ-paired (format=5): per-fragment codebook lookup. Bilinear over
    //     adjacent codewords MUST happen in software (the codebook texture
    //     packs unrelated codewords next to each other, so hw bilinear within
    //     it would average across codeword boundaries).
    // Skipped when atlas_width = 0 (no atlas in the bundle, or user disabled
    // via tweakpane → host writes 0).
    if tex_params.atlas_width > 0u {
        let E      = tex_params.uv_extent;
        let r_base = in.gauss_id * 5u;
        let u0       = atlas_rects[r_base + 0u];
        let v0_local = atlas_rects[r_base + 1u];
        let w_span   = atlas_rects[r_base + 2u];
        let h_span   = atlas_rects[r_base + 3u];

        if tex_params.atlas_format == ATLAS_FORMAT_RVQ_PAIRED {
            // Rect-local floating-point sample point. Dispatch fast / slow:
            //   Fast path (1 hw-bilinear cb sample per pair = 2 cb samples
            //     total): the 2×2 atlas-texel neighborhood needed for the
            //     bilinear is fully inside ONE codeword tile AND inside the
            //     surfel rect. Hw bilinear inside the tile gives the exact
            //     atlas-level bilinear result for free.
            //   Slow path (4 sw taps × 2 cb samples = 8 cb samples): the
            //     2×2 neighborhood crosses a codeword-tile boundary, or the
            //     surfel rect's right/bottom edge. Fall back to the original
            //     4-tap sw mix.
            // Fast-path coverage: ~56% at B=4, ~77% at B=8. Codebook sampler
            // is \`linear\` everywhere; the slow path's integer-centered UVs
            // produce frac=0 → hw bilinear collapses to a single texel value
            // (bit-equivalent to the old \`nearest\` behavior).
            let au_local_f = (s.x + E) / (2.0 * E) * w_span;
            let av_local_f = (s.y + E) / (2.0 * E) * h_span;
            let au0 = i32(floor(au_local_f));
            let av0 = i32(floor(av_local_f));
            let w_i = i32(w_span);
            let h_i = i32(h_span);
            let B = i32(tex_params.rvq_block);
            let iu_mod = au0 - (au0 / B) * B;
            let iv_mod = av0 - (av0 / B) * B;
            let fast = (iu_mod  < B   - 1) && (iv_mod  < B   - 1) &&
                       (au0    < w_i - 1) && (av0     < h_i - 1) &&
                       (au0   >= 0)       && (av0    >= 0);
            var residual : vec3<f32>;
            if fast {
                residual = sample_rvq_paired_hw_bilinear(
                    in.gauss_id, au_local_f, av_local_f, w_i, h_i);
            } else {
                let fu = au_local_f - f32(au0);
                let fv = av_local_f - f32(av0);
                let c00 = sample_rvq_paired(in.gauss_id, au0,     av0,     w_i, h_i);
                let c10 = sample_rvq_paired(in.gauss_id, au0 + 1, av0,     w_i, h_i);
                let c01 = sample_rvq_paired(in.gauss_id, au0,     av0 + 1, w_i, h_i);
                let c11 = sample_rvq_paired(in.gauss_id, au0 + 1, av0 + 1, w_i, h_i);
                let top = mix(c00, c10, fu);
                let bot = mix(c01, c11, fu);
                residual = mix(top, bot, fv);
            }
            color = color + residual;
        } else {
            // BC7 / ASTC path.
            let layer = i32(atlas_rects[r_base + 4u]);
            let au = u0       + (s.x + E) / (2.0 * E) * w_span;
            let av = v0_local + (s.y + E) / (2.0 * E) * h_span;
            let uv = vec2<f32>(
                (au + 0.5) / f32(tex_params.atlas_width),
                (av + 0.5) / f32(tex_params.atlas_layer_h),
            );
            let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, 0.0);
            color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
        }
    }
    color = max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));

    return vec4<f32>(color, 1.0) * b;
}
`,Fl=`const WG_SIZE = 256u;
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
}`,Nl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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

// 80-byte output splat — full transmat columns + screen bbox + color slot
// (filled by preprocess) + depth plane for ray-disk in fragment.
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
                if dot(R[2], xyz - camera_pos) > 0.0 {
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
        // We leave color_* zero — preprocess fills it (per-frame view-dep eval).
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
            0u,
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
`,ql=`// shader implementing gpu radix sort.

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
`,$l=`// shader implementing gpu radix sort.

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
`,Wl=`// ============================================================================
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
}`,Zi=32,ls=1,cs=2,Ui=4,jl=0,De=new ArrayBuffer(Zi),ae={canvas_size:new Uint32Array(De,0,2),accel_flags:new Uint32Array(De,8,1),feature_mode:new Uint32Array(De,12,1),gaussian_scaling:new Float32Array(De,16,1),sh_bias:new Float32Array(De,20,1),color_K:new Uint32Array(De,24,1),walltime:new Float32Array(De,28,1)};function Kl(o){ae.canvas_size[0]=o.width>>>0,ae.canvas_size[1]=o.height>>>0,ae.accel_flags[0]=(o.accel_flags??ls|cs)>>>0,ae.feature_mode[0]=(o.feature_mode??jl)>>>0,ae.gaussian_scaling[0]=o.gaussian_scaling??1,ae.sh_bias[0]=o.sh_bias??.5,ae.color_K[0]=(o.color_K??0)>>>0,ae.walltime[0]=o.walltime??0}function Xi(o,c){o.queue.writeBuffer(c,0,De)}function An(o,c,_){_&&o&&c&&Xi(o,c)}function Mn(o,c,_,C,y=!0){ae.canvas_size[0]=o>>>0,ae.canvas_size[1]=c>>>0,An(_??null,C??null,y)}function Vi(o,c,_,C=!0){ae.gaussian_scaling[0]=o,An(c??null,_??null,C)}function Oi(o,c,_,C=!0){ae.sh_bias[0]=o,An(c??null,_??null,C)}function Hl(o,c,_,C=!0){let y=ae.accel_flags[0];o.oac!==void 0&&(y=o.oac?y|ls:y&~ls),o.spr!==void 0&&(y=o.spr?y|cs:y&~cs),o.bfc!==void 0&&(y=o.bfc?y|Ui:y&~Ui),ae.accel_flags[0]=y>>>0,An(c??null,_??null,C)}const Yl=256,Zl=Zi,Xl=8,Ql=80,Jl=12,In=8,Se=1<<In,Ve=256,Qi=16,us=Qi/In,tc=(32-Qi)/In;function Fi(o,c){return{sort_indices_buffer:c.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:c.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ec(o,c){const _=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[_]}),y=E=>o.createComputePipeline({layout:C,compute:{module:c,entryPoint:E,constants:{WG_SIZE:Ve}}});return{l0TileScan:y("prefix_l0_tile_scan"),l1TileScanOnL0:y("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:y("prefix_scan_l1_sums"),addL1ToL0:y("prefix_add_l1_to_l0_offsets"),addL0ToElems:y("prefix_add_l0_to_elements"),computeDigitBase:y("compute_digit_base"),prefixBindGroupLayout:_}}function nc(o,c,_){const C=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),y=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[C]}),M=o.createPipelineLayout({bindGroupLayouts:[y]}),z=[];for(let A=0;A<us;A++){const R={PASS_ID:A+tc,RS_RADIX_LOG2:In,RS_RADIX_SIZE:Se};z.push({localHistogram:o.createComputePipeline({layout:E,compute:{module:c,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:_,entryPoint:"scatter_elements",constants:R}})})}return{passes:z,localHistogramBindGroupLayout:C,scatterBindGroupLayout:y}}function sc(o){const c=o.createShaderModule({label:"local histogram",code:$l}),_=o.createShaderModule({label:"scatter",code:ql}),C=o.createShaderModule({label:"blelloch prefix",code:Wl}),y=ec(o,C),E=nc(o,c,_);return{localHistogramBindGroupLayout:E.localHistogramBindGroupLayout,scatterBindGroupLayout:E.scatterBindGroupLayout,passes:E.passes,hierarchicalBlelloch:y}}function ic(o){const c=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=c.createView({dimension:"2d-array"}),C=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),y=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),E=o.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(E,0,new ArrayBuffer(48));const M=o.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),z=M.createView({dimension:"2d"}),A=o.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),R=o.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),W=R.createView({dimension:"2d"}),N=o.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),L={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:c,view:_,sampler:C,rectsBuffer:y,texParamsBuffer:E,meta:L,rvqCodebookTexture:M,rvqCodebookView:z,rvqCodebookSampler:A,rvqPackedIndicesTexture:R,rvqPackedIndicesView:W,rvqSurfelOffsetsBuffer:N}}class rc{constructor(c,_,C,y,E,M=null){J(this,"device");J(this,"pc");J(this,"presentationFormat");J(this,"camera_buffer");J(this,"render_settings_buffer");J(this,"draw_indirect_buffer");J(this,"splat_2d_buffer");J(this,"querySet");J(this,"resolveBuffer");J(this,"resultBuffer");J(this,"queriesPerFrame",Xl);J(this,"queryCapacityFrames",200);J(this,"sort_prefixBindGroup");J(this,"sort_pipelines");J(this,"sort_localHistogramBindGroups");J(this,"sort_scatterBindGroups");J(this,"lastFrame",0);J(this,"frameCount",0);J(this,"preprocessPipeline");J(this,"cullPipeline");J(this,"renderPipeline");J(this,"indirectPipeline");J(this,"sort_info_buffer");J(this,"sort_ping_pong");J(this,"crsBg");J(this,"gsBg");J(this,"cullBg2");J(this,"preprocessBg1");J(this,"renderSplatsBindGroup");J(this,"renderSettingsBindGroup");J(this,"atlasBindGroup");J(this,"indirectBindGroup");J(this,"sh_solvers_buffer");J(this,"bgColor",[0,0,0,0]);J(this,"showPerfDialogNext",!1);J(this,"requestReorderNextFrame",!1);J(this,"reorderInFlight",!1);J(this,"downloadOnceNextRead",!1);J(this,"downloadOnceFileName","fps_metrics");J(this,"allFrameTimes",[]);J(this,"lastStageBreakdownMs",null);J(this,"timeQueryEnabled");J(this,"atlas");const z=E.includes("timestamp-query");this.timeQueryEnabled=z,z&&ie("⏰ using timestamp-query"),this.pc=c,this.device=_,this.presentationFormat=C,this.camera_buffer=y,this.atlas=M??ic(_),_.addEventListener("uncapturederror",Z=>{console.error("A WebGPU error was not captured:",Z.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Ve-1)/Ve)+1)*Ve,R=Math.ceil(A/Ve);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const W=_.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=sc(_);const N=[Fi(A,_),Fi(A,_)],L=_.createBuffer({label:"workgroup histograms",size:R*Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=_.createBuffer({label:"workgroup prefixes",size:R*Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),et=_.createBuffer({label:"digit base",size:Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=Math.ceil(R/Ve),j=Math.ceil(H/Ve),ut=_.createBuffer({label:"prefix l0 sums",size:H*Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),U=_.createBuffer({label:"prefix l0 offsets",size:H*Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=_.createBuffer({label:"prefix l1 sums",size:j*Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),G=_.createBuffer({label:"prefix l1 offsets",size:j*Se*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=_.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:Q}},{binding:3,resource:{buffer:ut}},{binding:4,resource:{buffer:U}},{binding:5,resource:{buffer:q}},{binding:6,resource:{buffer:G}},{binding:7,resource:{buffer:et}}]}),this.sort_localHistogramBindGroups=[_.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:N[0].sort_depths_buffer}},{binding:2,resource:{buffer:L}}]}),_.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:N[1].sort_depths_buffer}},{binding:2,resource:{buffer:L}}]})],this.sort_scatterBindGroups=[_.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:et}},{binding:2,resource:{buffer:N[0].sort_depths_buffer}},{binding:3,resource:{buffer:N[1].sort_depths_buffer}},{binding:4,resource:{buffer:N[0].sort_indices_buffer}},{binding:5,resource:{buffer:N[1].sort_indices_buffer}},{binding:6,resource:{buffer:Q}}]}),_.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:et}},{binding:2,resource:{buffer:N[1].sort_depths_buffer}},{binding:3,resource:{buffer:N[0].sort_depths_buffer}},{binding:4,resource:{buffer:N[1].sort_indices_buffer}},{binding:5,resource:{buffer:N[0].sort_indices_buffer}},{binding:6,resource:{buffer:Q}}]})],this.sort_info_buffer=W,this.sort_ping_pong=N;const ct=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),$=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),X=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),K=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ct,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:$,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:X,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:K,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const ot=this.device.createShaderModule({code:Fl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ot,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]});const _t=this.device.createShaderModule({code:Nl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ct,$,X]}),compute:{module:_t,entryPoint:"surfel_cull"}});const Lt=this.device.createShaderModule({code:Vl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ct,K]}),compute:{module:Lt,entryPoint:"preprocess"}});const Dt=this.device.createShaderModule({code:Ol});Dt.getCompilationInfo().then(Z=>{Z.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Z.messages.forEach(nt=>{(nt.type==="error"?console.error:nt.type==="warning"?console.warn:console.log)(`${nt.type} (line ${nt.lineNum}:${nt.linePos}): ${nt.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Tt=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),mt=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),St=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),kt=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Tt,mt,St]}),vertex:{module:Dt,entryPoint:"vs_main"},fragment:{module:Dt,entryPoint:"fs_main",constants:{BETA_KERNEL:kt},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(Z=>{Z?console.error("[render_2dgs] pipeline create validation error:",Z.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Tt,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:mt,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:St,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}setAtlasEnabled(c){this.atlas.meta.format!==4294967295&&Hi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,c)}async debugReadSortedIndices(c=30){const _=Math.max(0,Math.min(c,this.pc.num_points)),C=_*Uint32Array.BYTES_PER_ELEMENT;if(C===0){console.log("[DEBUG] No indices to read.");return}const y=this.device.createBuffer({size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),E=this.device.createCommandEncoder();E.copyBufferToBuffer(this.sort_ping_pong[0].sort_indices_buffer,0,y,0,C),this.device.queue.submit([E.finish()]),await y.mapAsync(GPUMapMode.READ);const M=new Uint32Array(y.getMappedRange());console.log("[DEBUG] Sorted indices (first",_,"):",Array.from(M)),y.unmap()}frame(c,_,C=!0){const E=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=C&&this.timeQueryEnabled;{c.clearBuffer(this.sort_info_buffer,0,4);const z={label:"cull"};M&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+0,endOfPassWriteIndex:E+1});const A=c.beginComputePass(z);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2);const R=Math.ceil(this.pc.num_points/Yl);A.dispatchWorkgroups(R,1,1),A.end()}{const z=c.beginComputePass({label:"calculate indirect dispatch"});z.setPipeline(this.indirectPipeline),z.setBindGroup(0,this.indirectBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:"preprocess"};M&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+2,endOfPassWriteIndex:E+3});const A=c.beginComputePass(z);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let z=0;z<us;z++){const A=z&1,R=this.sort_pipelines.passes[z],W=this.sort_localHistogramBindGroups[A],N=this.sort_scatterBindGroups[A];{const L={label:`upsweep_round${z}`};M&&z==0&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+4});const Q=c.beginComputePass(L);Q.setPipeline(R.localHistogram),Q.setBindGroup(0,W),Q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Q.end()}{const L=c.beginComputePass({label:`prefix_round${z} - l0TileScan`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),L.end()}{const L=c.beginComputePass({label:`prefix_round${z} - l1TileScanOnL0`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),L.end()}{const L=c.beginComputePass({label:`prefix_round${z} - l1ScanSums`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroups(1,Se,1),L.end()}{const L=c.beginComputePass({label:`prefix_round${z} - addL1ToL0`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),L.end()}{const L=c.beginComputePass({label:`prefix_round${z} - addL0ToElems`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),L.end()}{const L=c.beginComputePass({label:`prefix_round${z} - computeDigitBase`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:`scatter_round${z}`};M&&z==us-1&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:E+5});const Q=c.beginComputePass(L);Q.setPipeline(R.scatterElements),Q.setBindGroup(0,N),Q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Q.end()}}{const z={label:"render",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:E+6,endOfPassWriteIndex:E+7});const A=c.beginRenderPass(z);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}this.frameCount++}async readPerfMetrics(c){const _=(c==null?void 0:c.silent)??!1;if(this.frameCount<=0)return;const C=this.device.createCommandEncoder({label:"timestamp resolve encoder"});C.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),C.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([C.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const E=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),z=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:y.length},()=>[]);let R=0;for(let ut=0;ut<M;ut++){const U=(z+ut)%this.queryCapacityFrames,q=U*this.queriesPerFrame;let G=!0;for(let ct=0;ct<y.length;ct++){const[$,X,K]=y[ct];if(E[q+K]===0n||E[q+X]===0n||E[q+X]<E[q+K]){G=!1;break}}if(!G){!_&&U%60===0&&console.debug("[timestamp] frame slot",U,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let ct=0;ct<y.length;ct++){const[$,X,K]=y[ct],ot=Number(E[q+K]),_t=Number(E[q+X]);A[ct].push((_t-ot)/1e6)}}if(R===0){this.resultBuffer.unmap(),_||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const W=[];let N=0,L=0,Q=0;for(let ut=0;ut<y.length;ut++){const U=y[ut][0],q=A[ut];let G=0;if(U==="Total"){const ct=this.allFrameTimes;G=ct.reduce((K,ot)=>K+ot,0)/ct.length;const $=[...ct].sort((K,ot)=>K-ot);N=$[Math.floor($.length*.99)]||0;const X=ct.reduce((K,ot)=>K+Math.pow(ot-G,2),0)/ct.length;L=Math.sqrt(X),Q=G}else G=q.reduce((ct,$)=>ct+$,0)/q.length;W.push([U,G])}this.lastFrame+=this.frameCount,this.frameCount=0;const et=Object.fromEntries(W);this.lastStageBreakdownMs={cull:et.Culling??0,preprocess:et.Preprocess??0,sort:et.Sort??0,render:et.Render??0,total:et.Total??0};const j=`[TIMESTAMP - ${this.constructor.name}]
`+W.map(([ut,U])=>`${ut}: ${U.toFixed(3)}ms`).join(`
`)+`
Total P99: ${N.toFixed(3)}ms
Total STD: ${L.toFixed(3)}ms
Total AVG: ${Q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(_||(console.log(j),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ut=`Stage,ms
`,U=W.map(([ct,$])=>`${ct},${$.toFixed(3)}`).join(`
`),q="data:text/csv;charset=utf-8,"+encodeURIComponent(ut+U),G=document.createElement("a");G.href=q,G.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(G),G.click(),G.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(j)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const c=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:c,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:c,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Zl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const c=document.querySelector("canvas"),_=c?c.width:1,C=c?c.height:1;Kl({width:_,height:C,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Xi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Qe(this.pc.num_points*Ql),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Qe(this.pc.num_points*Jl),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(c){if(c&&c.trim().length>0){const _=c.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=_.length>0?_:this.downloadOnceFileName}else{const _=new Date,C=`${_.getFullYear()}${String(_.getMonth()+1).padStart(2,"0")}${String(_.getDate()).padStart(2,"0")}_${String(_.getHours()).padStart(2,"0")}${String(_.getMinutes()).padStart(2,"0")}${String(_.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${C}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function oc(o,c){return 2*Math.atan(c/(2*o))}function ac(o,c,_,C){const y=Math.tan(C/2),E=Math.tan(_/2),M=y*o,z=-M,A=E*o,R=-A,W=ee.create();return W[0]=2*o/(A-R),W[5]=-2*o/(M-z),W[2]=(A+R)/(A-R),W[6]=(M+z)/(M-z),W[14]=1,W[10]=c/(c-o),W[11]=-(c*o)/(c-o),ee.transpose(W,W),W}async function lc(o){ie(`loading scene camera file... : ${o}`);const _=await(await fetch(o)).json();return ie(`loaded cameras count: ${_.length}`),_.map(C=>{const y=I.clone(C.position),E=he.create(...C.rotation.flat()),M=E[0],z=E[4],A=E[8],R=E[1],W=E[5],N=E[9],L=E[2],Q=E[6],et=E[10];M*(W*et-N*Q)-z*(R*et-N*L)+A*(R*Q-W*L)<0&&(E[1]=-E[1],E[5]=-E[5],E[9]=-E[9]);const j=ee.fromMat3(E);return{position:y,rotation:j,img_name:C.img_name,id:C.id}})}const cc=4*2,uc=4*16,Ji=4*uc+2*cc;function dc(o){return o.createBuffer({label:"camera uniform",size:Ji,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Ue=new Float32Array(Ji/Float32Array.BYTES_PER_ELEMENT),Tn=class Tn{constructor(c,_){J(this,"uniform_buffer");J(this,"position",I.create());J(this,"rotation",ee.create());J(this,"fovY",45/180*Math.PI);J(this,"fovX");J(this,"focal",zi.create());J(this,"viewport",zi.create());J(this,"view_matrix",ee.identity());J(this,"view_inv_matrix",ee.identity());J(this,"proj_matrix",ee.identity());J(this,"proj_inv_matrix",ee.identity());J(this,"_negPos",I.create());J(this,"look",I.create(0,0,1));J(this,"up",I.create(0,1,0));J(this,"right",I.create(1,0,0));this.canvas=c,this.device=_,this.uniform_buffer=dc(_),this.on_update_canvas()}on_update_canvas(){const c=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=c,this.focal[1]=c,this.fovX=oc(c,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=ac(.01,100,this.fovX,this.fovY),ee.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ee.copy(this.rotation,this.view_matrix),ee.translate(this.view_matrix,this._negPos,this.view_matrix),ee.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(Tn.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let c=0;Ue.set(this.view_matrix,c),c+=16,Ue.set(this.view_inv_matrix,c),c+=16,Ue.set(this.proj_matrix,c),c+=16,Ue.set(this.proj_inv_matrix,c),c+=16,Ue.set(this.viewport,c),c+=2,Ue.set(this.focal,c),c+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Ue)}set_preset(c){I.copy(c.position,this.position),ee.copy(c.rotation,this.rotation),this.update_buffer()}setFov(c){this.fovY=c,this.on_update_canvas()}getFov(){return this.fovY}};J(Tn,"Z_AXIS",I.create(0,0,1));let ds=Tn;const pc=I.create(1,0,0),hc=I.create(0,1,0);function fc(o,c){const _=o[0],C=o[4],y=o[8],E=o[1],M=o[5],z=o[9],A=o[2],R=o[6],W=o[10],N=_+M+W;let L,Q,et,H;if(N>0){const j=.5/Math.sqrt(N+1);L=.25/j,Q=(R-z)*j,et=(y-A)*j,H=(E-C)*j}else if(_>M&&_>W){const j=2*Math.sqrt(1+_-M-W);L=(R-z)/j,Q=.25*j,et=(C+E)/j,H=(y+A)/j}else if(M>W){const j=2*Math.sqrt(1+M-_-W);L=(y-A)/j,Q=(C+E)/j,et=.25*j,H=(z+R)/j}else{const j=2*Math.sqrt(1+W-_-M);L=(E-C)/j,Q=(y+A)/j,et=(z+R)/j,H=.25*j}return c[0]=Q,c[1]=et,c[2]=H,c[3]=L,c}class _c{constructor(c){J(this,"element");J(this,"enabled",!0);J(this,"center",I.create(0,0,0));J(this,"up",I.create(0,1,0));J(this,"rotation",[0,0]);J(this,"shift",[0,0]);J(this,"scroll",0);J(this,"speed",.1);J(this,"sensitivity",.08);J(this,"leftPressed",!1);J(this,"rightPressed",!1);J(this,"leftDragPans",!1);J(this,"lastX",0);J(this,"lastY",0);J(this,"touches",new Map);J(this,"lastTouchCenter",null);J(this,"lastPinchDistance",null);J(this,"lastTwoFingerAngle",null);J(this,"lastTouchCount",0);J(this,"roll",0);J(this,"_dir",I.create());J(this,"_right",I.create());J(this,"_upCam",I.create());J(this,"_scratch",I.create());J(this,"_qY",se.create());J(this,"_qX",se.create());J(this,"_qRot",se.create());J(this,"_qLocal",se.create());J(this,"_qWorldToCam",se.create());J(this,"_scratchMat3",he.create());J(this,"bboxMin",null);J(this,"bboxMax",null);J(this,"anchor",I.create(0,0,0));J(this,"downCallback",c=>{var _,C,y,E;if(this.enabled){if(c.pointerType==="touch"){this.touches.set(c.pointerId,{x:c.pageX,y:c.pageY}),this.handleTouchGestures(),(C=(_=c.target)==null?void 0:_.setPointerCapture)==null||C.call(_,c.pointerId),c.preventDefault();return}c.isPrimary&&(c.button===0?(this.leftPressed=!0,this.leftDragPans=c.shiftKey):c.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=c.pageX,this.lastY=c.pageY,(E=(y=c.target)==null?void 0:y.setPointerCapture)==null||E.call(y,c.pointerId),c.preventDefault())}});J(this,"moveCallback",c=>{if(!this.enabled)return;if(c.pointerType==="touch"){if(!this.touches.has(c.pointerId))return;this.touches.set(c.pointerId,{x:c.pageX,y:c.pageY}),this.handleTouchGestures(),c.preventDefault();return}if(!c.isPrimary||!this.leftPressed&&!this.rightPressed)return;c.preventDefault();const _=c.pageX-this.lastX,C=c.pageY-this.lastY;this.lastX=c.pageX,this.lastY=c.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=_,this.rotation[1]-=C):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=_,this.shift[0]+=C)});J(this,"upCallback",c=>{var _,C,y,E;if(c.pointerType==="touch"){this.touches.delete(c.pointerId),this.handleTouchGestures(),(C=(_=c.target)==null?void 0:_.releasePointerCapture)==null||C.call(_,c.pointerId),c.preventDefault();return}c.button===0?this.leftPressed=!1:c.button===2?this.rightPressed=!1:this.rightPressed=!1,(E=(y=c.target)==null?void 0:y.releasePointerCapture)==null||E.call(y,c.pointerId),c.preventDefault()});J(this,"wheelCallback",c=>{if(!this.enabled||(c.preventDefault(),this.rightPressed))return;let _=c.deltaY;c.deltaMode===1?_*=16:c.deltaMode===2&&(_*=100),this.scroll+=_*.01});this.camera=c,this.registerElement(c.canvas)}registerElement(c){this.element&&this.element!==c&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=c,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",_=>_.preventDefault())}setCenter(c){I.copy(c,this.center),I.copy(c,this.anchor)}setOrbitPivot(c){I.set(c[0],c[1],c[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(c){if(!isFinite(c)||c<.001)return;const _=this.camera.rotation;I.set(_[2],_[6],_[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,c,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const c=this.camera;if(I.subtract(this.center,c.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const _=c.rotation;_[0]=this._right[0],_[1]=this._upCam[0],_[2]=this._scratch[0],_[3]=0,_[4]=this._right[1],_[5]=this._upCam[1],_[6]=this._scratch[1],_[7]=0,_[8]=this._right[2],_[9]=this._upCam[2],_[10]=this._scratch[2],_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,c.update_buffer()}setBbox(c,_){this.bboxMin=I.create(c[0],c[1],c[2]),this.bboxMax=I.create(_[0],_[1],_[2]);const C=(c[0]+_[0])*.5,y=(c[1]+_[1])*.5,E=(c[2]+_[2])*.5;I.set(C,y,E,this.center),I.set(C,y,E,this.anchor)}resetToCamera(){const c=this.camera.rotation;I.set(c[2],c[6],c[10],this._dir),I.normalize(this._dir,this._dir);let _=null;if(this.bboxMin&&this.bboxMax){let C=-1/0,y=1/0,E=!1;for(let M=0;M<3;M++){const z=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],R=this.bboxMax[M]-this.camera.position[M];if(Math.abs(z)>1e-8){const W=A/z,N=R/z;C=Math.max(C,Math.min(W,N)),y=Math.min(y,Math.max(W,N))}else if(A>0||R<0){E=!0;break}}!E&&C<=y&&y>0&&(_=(Math.max(C,0)+y)*.5)}if(_===null||!isFinite(_)||_<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const C=I.dot(this._scratch,this._dir);_=C>.001?C:I.length(this._scratch)}_=Math.max(.1,_),I.scale(this._dir,_,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const c=this.touches.size;if(c!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=c,c===1){const _=this.touches.values().next().value;if(this.lastTouchCenter){const C=_.x-this.lastTouchCenter[0],y=_.y-this.lastTouchCenter[1];this.rotation[0]+=C*.3,this.rotation[1]-=y*.3}this.lastTouchCenter=[_.x,_.y]}else if(c===2){const _=Array.from(this.touches.values()),C=(_[0].x+_[1].x)*.5,y=(_[0].y+_[1].y)*.5,E=_[1].x-_[0].x,M=_[1].y-_[0].y,z=Math.hypot(E,M),A=Math.atan2(M,E);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=C-this.lastTouchCenter[0],W=y-this.lastTouchCenter[1],N=Math.hypot(R,W),L=Math.abs(z-this.lastPinchDistance);let Q=A-this.lastTwoFingerAngle;Q>Math.PI&&(Q-=2*Math.PI),Q<-Math.PI&&(Q+=2*Math.PI),N>.5&&(this.shift[1]-=R,this.shift[0]+=W),L>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(z/this.lastPinchDistance)*10),Math.abs(Q)>.0087&&(this.roll+=-Q)}this.lastTouchCenter=[C,y],this.lastPinchDistance=z,this.lastTwoFingerAngle=A}}update(c){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const _=this.camera;{const H=_.rotation;this.up[0]=H[1],this.up[1]=H[5],this.up[2]=H[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let C=!1;if(Math.abs(this.roll)>1e-4){const H=_.rotation;I.set(H[2],H[6],H[10],this._scratch),I.normalize(this._scratch,this._scratch),se.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,C=!0}I.subtract(_.position,this.center,this._dir);let y=I.length(this._dir);y<1e-6&&(y=1e-6);const E=Math.exp(Math.log(y)+this.scroll*c*10*this.speed);I.scale(this._dir,E/y,this._dir),y=E;const M=_.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const z=I.create(M[1],M[5],M[9]);I.normalize(z,z),I.length(z)<1e-6&&I.set(0,1,0,z);const A=c*this.speed*.1*y,R=this.shift[1]*A,W=-this.shift[0]*A;I.scale(this._right,R,this._scratch),I.add(this.center,this._scratch,this.center),I.add(_.position,this._scratch,_.position),I.scale(z,W,this._scratch),I.add(this.center,this._scratch,this.center),I.add(_.position,this._scratch,_.position);const N=this.rotation[0]*c*this.sensitivity,L=this.rotation[1]*c*this.sensitivity;if(Math.abs(N)>1e-5||Math.abs(L)>1e-5||C){const H=_.rotation;fc(H,this._qWorldToCam),se.fromAxisAngle(pc,-L,this._qX),se.fromAxisAngle(hc,-N,this._qY),se.multiply(this._qX,this._qY,this._qLocal),se.normalize(this._qLocal,this._qLocal),se.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),se.normalize(this._qWorldToCam,this._qWorldToCam),he.fromQuat(this._qWorldToCam,this._scratchMat3),ee.fromMat3(this._scratchMat3,_.rotation);const j=_.rotation,ut=j[2],U=j[6],q=j[10];_.position[0]=this.center[0]-ut*y,_.position[1]=this.center[1]-U*y,_.position[2]=this.center[2]-q*y,this.up[0]=j[1],this.up[1]=j[5],this.up[2]=j[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,_.position);_.update_buffer();const et=Math.pow(.8,c*60);this.rotation[0]*=et,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=et,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=et,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=et,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=et,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function tr(o){const c=I.create();for(const _ of o)I.add(c,_,c);return I.scale(c,1/Math.max(o.length,1),c)}function er(o,c){const _=he.create();he.inverse(o,_);const C=I.create();return C[0]=_[0]*c[0]+_[4]*c[1]+_[8]*c[2],C[1]=_[1]*c[0]+_[5]*c[1]+_[9]*c[2],C[2]=_[2]*c[0]+_[6]*c[1]+_[10]*c[2],C}function mc(o){const c=o.slice(),_=[1,0,0,0,1,0,0,0,1],C=(A,R)=>c[A*3+R],y=(A,R,W)=>{c[A*3+R]=W},E=(A,R)=>_[A*3+R],M=(A,R,W)=>{_[A*3+R]=W};for(let A=0;A<30;A++){let R=0,W=1,N=Math.abs(C(0,1));if(Math.abs(C(0,2))>N&&(R=0,W=2,N=Math.abs(C(0,2))),Math.abs(C(1,2))>N&&(R=1,W=2,N=Math.abs(C(1,2))),N<1e-12)break;const L=C(R,R),Q=C(W,W),et=C(R,W);let H;Math.abs(L-Q)<1e-30?H=Math.PI/4*Math.sign(et):H=.5*Math.atan2(2*et,L-Q);const j=Math.cos(H),ut=Math.sin(H);for(let U=0;U<3;U++){const q=C(U,R),G=C(U,W);y(U,R,j*q+ut*G),y(U,W,-ut*q+j*G)}for(let U=0;U<3;U++){const q=C(R,U),G=C(W,U);y(R,U,j*q+ut*G),y(W,U,-ut*q+j*G)}for(let U=0;U<3;U++){const q=E(U,R),G=E(U,W);M(U,R,j*q+ut*G),M(U,W,-ut*q+j*G)}}const z=[];for(let A=0;A<3;A++)z.push({val:C(A,A),vec:I.create(E(0,A),E(1,A),E(2,A))});return z.sort((A,R)=>R.val-A.val),{vals:[z[0].val,z[1].val,z[2].val],vecs:[z[0].vec,z[1].vec,z[2].vec]}}function bc(o,c){const _=tr(o);let C=0,y=0,E=0,M=0,z=0,A=0;for(const et of o){const H=et[0]-_[0],j=et[1]-_[1],ut=et[2]-_[2];C+=H*H,y+=H*j,E+=H*ut,M+=j*j,z+=j*ut,A+=ut*ut}const R=[C,y,E,y,M,z,E,z,A],{vecs:W}=mc(R);let N=W[0],L=W[1],Q=W[2];return I.dot(Q,c)<0&&(I.scale(Q,-1,Q),I.scale(L,-1,L)),{centroid:_,normal:Q,u:N,v:L}}function vc(o){let c=0,_=0,C=0,y=0,E=0,M=0,z=0,A=0,R=0;for(const[j,ut]of o){const U=-2*j,q=-2*ut,G=1,ct=-(j*j+ut*ut);c+=U*U,_+=U*q,C+=U*G,y+=q*q,E+=q*G,M+=G*G,z+=U*ct,A+=q*ct,R+=G*ct}const W=he.create(c,_,C,_,y,E,C,E,M),N=er(W,I.create(z,A,R)),L=N[0],Q=N[1],et=N[2],H=L*L+Q*Q-et;return{center:[L,Q],radius:Math.sqrt(Math.max(H,1e-12))}}function gc(o,c){let _=0,C=0,y=0,E=0,M=0,z=0,A=0,R=0,W=0;for(let L=0;L<o.length;L++){const Q=o[L],et=I.normalize(c[L],I.create()),H=1-et[0]*et[0],j=-et[0]*et[1],ut=-et[0]*et[2],U=1-et[1]*et[1],q=-et[1]*et[2],G=1-et[2]*et[2];_+=H,C+=j,y+=ut,E+=U,M+=q,z+=G,A+=H*Q[0]+j*Q[1]+ut*Q[2],R+=j*Q[0]+U*Q[1]+q*Q[2],W+=ut*Q[0]+q*Q[1]+G*Q[2]}const N=he.create(_,C,y,C,E,M,y,M,z);return er(N,I.create(A,R,W))}function nr(o,c={}){if(o.length===0)return null;const _=c.tiltDownDeg??8,C=c.radiusScale??1,y=c.alignFirst??!0,E=(c.direction??"ccw")==="ccw"?1:-1,M=o.map(K=>I.clone(K.position)),z=o.map(K=>{const ot=K.rotation;return I.create(ot[8],ot[9],ot[10])}),A=o.map(K=>{const ot=K.rotation;return I.create(ot[4],ot[5],ot[6])}),R=tr(A),W=I.normalize(I.scale(R,-1,I.create())),{centroid:N,normal:L,u:Q,v:et}=bc(M,W),H=M.map(K=>{const ot=I.sub(K,N,I.create());return[I.dot(ot,Q),I.dot(ot,et)]}),{center:j,radius:ut}=vc(H),U=ut*C,q=I.add(N,I.add(I.scale(Q,j[0],I.create()),I.scale(et,j[1],I.create()),I.create()),I.create()),G=gc(M,z),ct=U*Math.tan(_*Math.PI/180),$=I.sub(G,I.scale(L,ct,I.create()),I.create());let X=0;if(y){const K=I.sub(M[0],q,I.create());X=Math.atan2(I.dot(K,et),I.dot(K,Q))/(2*Math.PI)%1,X<0&&(X+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${U.toFixed(2)}, tilt=${_}°, normal=[${L[0].toFixed(2)}, ${L[1].toFixed(2)}, ${L[2].toFixed(2)}], startPhase=${X.toFixed(3)}`),{center:q,radius:U,normal:L,u:Q,v:et,lookAt:$,startPhase:X,direction:E}}function sr(o,c){const _=(o.startPhase+c*o.direction)*2*Math.PI,C=Math.cos(_),y=Math.sin(_),E=I.add(o.center,I.add(I.scale(o.u,o.radius*C,I.create()),I.scale(o.v,o.radius*y,I.create()),I.create()),I.create()),M=I.normalize(I.sub(o.lookAt,E,I.create())),z=I.cross(M,o.normal,I.create());I.length(z)<1e-6&&I.copy(o.u,z),I.normalize(z,z);const A=I.cross(M,z,I.create());I.normalize(A,A);const R=ee.create();return R[0]=z[0],R[1]=A[0],R[2]=M[0],R[3]=0,R[4]=z[1],R[5]=A[1],R[6]=M[1],R[7]=0,R[8]=z[2],R[9]=A[2],R[10]=M[2],R[11]=0,R[12]=0,R[13]=0,R[14]=0,R[15]=1,{position:E,rotation:R,img_name:`orbit_${(c*1e3).toFixed(0)}`,id:0}}function wc(o,c={}){const _=nr(o,c);if(!_)return[];const C=c.numViews??120;return Array.from({length:C},(y,E)=>({...sr(_,E/C),img_name:`circle_${E.toString().padStart(4,"0")}`,id:E}))}const ir="BITYMI01",xc=0,yc=1,Pc=2,Sc=3,kc=4,Cc=5;function Bn(o){const c=(o&32768)>>15,_=(o&31744)>>10,C=o&1023;return _===0?(c?-1:1)*Math.pow(2,-14)*(C/1024):_===31?C?NaN:c?-1/0:1/0:(c?-1:1)*Math.pow(2,_-15)*(1+C/1024)}function Ni(o,c,_,C,y,E){const M=(o-_.width*.5)/C.focal[0],z=-((c-_.height*.5)/C.focal[1]),A=C.rotation,R=A[0],W=A[4],N=A[8],L=A[1],Q=A[5],et=A[9],H=A[2],j=A[6],ut=A[10];let U=M*R+z*L+H,q=M*W+z*Q+j,G=M*N+z*et+ut;const ct=Math.hypot(U,q,G)||1;U/=ct,q/=ct,G/=ct;const $=C.position[0],X=C.position[1],K=C.position[2],ot=E*.005,_t=ot*ot,Lt=new Uint32Array(y.buffer,y.byteOffset,y.length),Dt=y.length/8;let Tt=1/0,mt=0,St=0,kt=0,Z=-1;for(let nt=0;nt<Dt;nt++){const zt=nt*8,gt=y[zt+0]-$,qt=y[zt+1]-X,Mt=y[zt+2]-K,Ut=gt*U+qt*q+Mt*G;if(Ut<=0)continue;const dt=gt-Ut*U,Ct=qt-Ut*q,$t=Mt-Ut*G;if(dt*dt+Ct*Ct+$t*$t>=_t||!(Lt[zt+7]>>>16&1))continue;const b=Lt[zt+5],r=Lt[zt+6],h=Bn(b&65535),d=Bn(b>>>16&65535),v=Bn(r&65535),x=Bn(r>>>16&65535),k=Math.hypot(h,d,v,x)||1,S=h/k,i=d/k,m=v/k,u=x/k,p=2*(i*u+S*m),a=2*(m*u-S*i),f=1-2*(i*i+m*m),w=U*p+q*a+G*f;let g;Math.abs(w)>1e-6?(g=(gt*p+qt*a+Mt*f)/w,(!isFinite(g)||g<=0)&&(g=Ut)):g=Ut,g<Tt&&(Tt=g,mt=$+g*U,St=X+g*q,kt=K+g*G,Z=nt)}return Z<0?null:[mt,St,kt]}function rr(o){const c=new Uint8Array(o),_=new TextDecoder().decode(c.subarray(0,8));if(_!==ir)throw new Error(`Not a BITYMI bundle (bad magic '${_}')`);const C=new DataView(o),y=C.getUint32(8,!0),E=12,M=20;let z=null,A=null,R=null;for(let W=0;W<y;W++){const N=E+W*M,L=C.getUint32(N+0,!0),Q=Number(C.getBigUint64(N+4,!0)),et=Number(C.getBigUint64(N+12,!0)),H=c.slice(Q,Q+et).buffer;L===xc||L===yc||L===Cc?z=H:L===Pc?A=H:(L===Sc||L===kc)&&(R=H)}if(z===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:z,camerasBuffer:A,atlasBuffer:R}}async function Ec(o,c){var M;const _=await fetch(o);if(!_.ok)throw new Error(`fetch failed: ${_.status} ${_.statusText}`);const C=(()=>{const z=_.headers.get("content-length");return z&&parseInt(z,10)||void 0})(),y=(M=_.body)==null?void 0:M.getReader();let E;if(!y)E=await _.arrayBuffer(),c&&c(E.byteLength,C,0);else{const z=[];let A=0,R=performance.now(),W=0;for(;;){const{done:Q,value:et}=await y.read();if(Q)break;z.push(et),A+=et.byteLength;const H=performance.now();if(H-R>=150&&c){const j=(A-W)/((H-R)/1e3);c(A,C,j),R=H,W=A}}const N=new Uint8Array(A);let L=0;for(const Q of z)N.set(Q,L),L+=Q.byteLength;E=N.buffer,c&&c(A,C,0)}return E.byteLength>=8&&new TextDecoder().decode(new Uint8Array(E,0,8))===ir?{bundle:rr(E),rawPly:null}:{bundle:null,rawPly:E}}function Mc(o){return new Promise(c=>{const _=document.createElement("input");_.type="file",_.accept=o,_.style.display="none",_.onchange=()=>{var C;return c(((C=_.files)==null?void 0:C[0])??null)},document.body.appendChild(_),_.click(),setTimeout(()=>document.body.removeChild(_),1e3)})}function Bc(o,c,_){const C=document.getElementById("ui-panel-container"),y=document.getElementById("load-button"),E=document.getElementById("quick-links");y&&(y.onclick=async()=>{const R=await Mc(".ply,.bitymi");if(R)if(C&&(C.style.display="none"),R.name.toLowerCase().endsWith(".bitymi")){const W=await R.arrayBuffer(),{pcBuffer:N}=rr(W),L=new File([N],R.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),Q=await os(L,o);c(Q)}else{const W=await os(R,o);c(W)}}),E&&(E.innerHTML="");const M=new URLSearchParams(window.location.search),z=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");z&&(C&&(C.style.display="none"),_(z,A))}async function Tc(o,c,_,C){const y=new ds(o,_),E=new _c(y);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const z="rgba8unorm";c.configure({device:_,format:z,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let A=null;const R=()=>{y.on_update_canvas(),A!==null&&Mn(o.width,o.height,_,A.render_settings_buffer)};new ResizeObserver(()=>{const X=Math.max(.25,q.render_scale),K=Math.max(1,Math.ceil(X*o.clientWidth)),ot=Math.max(1,Math.ceil(X*o.clientHeight));o.width===K&&o.height===ot||(o.width=K,o.height=ot,R())}).observe(o);let N=0,L=0;const Q=()=>{(o.width!==N||o.height!==L)&&(N=o.width,L=o.height,R())},et=new URLSearchParams(window.location.search);let j=et.get("animation")==="1";E.enabled=!j;const ut=et.get("camera_url"),U=Math.max(1,window.devicePixelRatio||1),q={gaussian_scaling:1,sh_bias:.5,animate:j,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,render_scale:1},G=new Ul.Pane({title:"Config",expanded:!0});G.addInput(q,"animate",{label:"Animate"}).on("change",X=>{const K=j;j=X.value,E.enabled=!X.value,!K&&j&&ct.value&&ct.value.onAnimateStart(),K&&!j&&ct.value&&ct.value.onAnimateStop()}),G.addInput(q,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ct={value:null};Bc(_,X=>$(X,[],null),async(X,K)=>{let ot=K??ut,_t,Lt=null;const Dt=X.toLowerCase();if(Dt.endsWith(".bitymi")||Dt.includes(".bitymi?")){hs("downloading bundle ...");try{const{bundle:mt}=await Ec(X,(kt,Z,nt)=>{const zt=kt/1048576,gt=Z?Z/(1024*1024):void 0,qt=nt/(1024*1024),Mt=Z?Math.min(99,Math.floor(kt/Z*100)):void 0,Ut=gt?`total ${gt.toFixed(1)} MB`:"total -- MB",dt=gt&&Mt!==void 0?`${zt.toFixed(1)} MB downloaded (${Mt}%)`:`${zt.toFixed(1)} MB downloaded`,Ct=`${qt.toFixed(2)} MB/s`;Oe(`downloading bundle ...
${Ut}, ${dt}
${Ct}`)});if(!mt)throw new Error("Expected a .bitymi bundle");Oe("parsing PLY ...");const St=new File([mt.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(_t=await os(St,_),!ot&&mt.camerasBuffer&&(ot=URL.createObjectURL(new Blob([mt.camerasBuffer],{type:"application/json"}))),mt.atlasBuffer){const kt=mt.atlasBuffer.byteLength/1048576;Oe(`uploading atlas ...
${kt.toFixed(1)} MB BC7`);try{const Z=Dl(mt.atlasBuffer);Lt=Rl(_,Z,!0)}catch(Z){console.warn("[atlas] failed to parse/upload atlas:",Z)}}}catch(mt){throw _n(),mt}}else _t=await Ll(X,_);const Tt=ot?await lc(ot):[];Tt.length>0&&y.set_preset(Tt[0]),$(_t,Tt,Lt)});function $(X,K=[],ot=null){const _t=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];E.setBbox(X.bbox.min,X.bbox.max);const Lt=.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function Dt(Y,at){const rt=Ni(Y,at,o,y,X.surfel_data,Lt);rt&&(E.setOrbitPivot(rt),console.log(`[pick] orbit pivot → (${rt[0].toFixed(3)}, ${rt[1].toFixed(3)}, ${rt[2].toFixed(3)})`))}function Tt(){const Y=o.width*.5,at=o.height*.5,rt=Ni(Y,at,o,y,X.surfel_data,Lt);if(!rt)return;const vt=y.rotation,yt=vt[2],pt=vt[6],wt=vt[10],Bt=rt[0]-y.position[0],It=rt[1]-y.position[1],Vt=rt[2]-y.position[2],Ft=Bt*yt+It*pt+Vt*wt;Ft>0&&E.setOrbitDepth(Ft)}if(K.length===0){const Y=X.bbox.max[0]-X.bbox.min[0],at=X.bbox.max[1]-X.bbox.min[1],rt=X.bbox.max[2]-X.bbox.min[2],yt=.5*Math.sqrt(Y*Y+at*at+rt*rt)*.5;I.set(_t[0]-yt,_t[1]-yt,_t[2]-yt,y.position);const pt=I.create(yt,yt,yt);I.normalize(pt,pt);const wt=I.create(0,1,0),Bt=I.create();I.cross(wt,pt,Bt),I.normalize(Bt,Bt);const It=I.create();I.cross(pt,Bt,It);const Vt=he.create(Bt[0],It[0],pt[0],Bt[1],It[1],pt[1],Bt[2],It[2],pt[2]);ee.fromMat3(Vt,y.rotation),y.update_buffer()}E.setCenter(I.create(X.centroid[0],X.centroid[1],X.centroid[2]));const mt=new rc(X,_,z,y.uniform_buffer,C,ot);A=mt,Mn(o.width,o.height,_,mt.render_settings_buffer),q.atlas_enabled=ot!==null;let St=!1;const kt=(()=>{if(ot!==null)return`${ot.meta.format===2?"BC7":ot.meta.format===3?"ASTC 4×4":ot.meta.format===5?"RVQ-paired (typeA)":ot.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":ot.meta.format===7?"BC7 codebook gather (typeD)":`format=${ot.meta.format}`} ${ot.meta.width}×${ot.meta.height}, ${ot.meta.n_layers} layers`;const Y=_.features.has("texture-compression-bc"),at=_.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(Y?["BC7"]:[]).concat(at?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",kt),Oi(X.sh_bias,_,mt.render_settings_buffer),Vi(q.gaussian_scaling,_,mt.render_settings_buffer),q.sh_bias=X.sh_bias;const Z=X.num_points.toLocaleString(),nt={stats:`${Z} surfels · -- fps`};G.addMonitor(nt,"stats",{label:"Stats",interval:200}),G.addMonitor({atlas:kt},"atlas",{label:"Atlas"});const zt={stages:"— ms · awaiting timestamp data"};G.addMonitor(zt,"stages",{label:"Stages",interval:500});let gt=null;if(mt.timeQueryEnabled){gt=document.createElement("canvas"),gt.width=280,gt.height=24,gt.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(gt);const Y=rt=>{const vt=gt.getContext("2d");if(!vt)return;const yt=gt.width,pt=gt.height;if(vt.clearRect(0,0,yt,pt),!rt||rt.total<=0){vt.fillStyle="#888",vt.font="11px ui-monospace,Menlo,monospace",vt.fillText("awaiting GPU timestamps…",8,16);return}const wt=[{label:"cull",ms:rt.cull,color:"#3aa3ff"},{label:"pre",ms:rt.preprocess,color:"#3ad27a"},{label:"sort",ms:rt.sort,color:"#ffa53a"},{label:"render",ms:rt.render,color:"#ff5566"}],Bt=Math.max(.001,wt.reduce((Vt,Ft)=>Vt+Ft.ms,0));let It=0;vt.font="10px ui-monospace,Menlo,monospace",vt.textBaseline="middle";for(const Vt of wt){const Ft=Vt.ms/Bt*yt;vt.fillStyle=Vt.color,vt.fillRect(It,0,Ft,pt),Ft>=38&&(vt.fillStyle="#000c",vt.fillText(`${Vt.label} ${Vt.ms.toFixed(1)}`,It+4,pt/2)),It+=Ft}};setInterval(()=>{St||mt.readPerfMetrics({silent:!0}).then(()=>{const rt=mt.lastStageBreakdownMs;Y(rt),rt&&(zt.stages=`${rt.total.toFixed(1)} ms · cull ${rt.cull.toFixed(1)} / pre ${rt.preprocess.toFixed(1)} / sort ${rt.sort.toFixed(1)} / render ${rt.render.toFixed(1)}`)}).catch(rt=>console.warn("[perf] readPerfMetrics failed:",rt))},500)}const qt=.4,Mt=3,Ut=.3;let dt=null,Ct=0,$t=0;const B=se.create(),F=he.create();let b=K.length>0?0:-1;const r={view:K.length>0?`${b+1} / ${K.length}: ${K[b].img_name??b}`:"— no presets —"};G.addMonitor(r,"view",{label:"View",interval:100});function h(Y){const at=he.create(Y[0],Y[1],Y[2],Y[4],Y[5],Y[6],Y[8],Y[9],Y[10]);return se.fromMat(at)}function d(Y,at){dt={fromPos:I.clone(y.position),toPos:I.clone(Y.position),fromQuat:se.normalize(h(y.rotation)),toQuat:se.normalize(h(Y.rotation)),target:Y,t:0,duration:Math.max(.01,at)}}const v=(Y,at=!0)=>{if(K.length===0)return;b=(Y%K.length+K.length)%K.length;const rt=K[b];at?d(rt,qt):(y.set_preset(rt),E.resetToCamera(),Tt()),r.view=`${b+1} / ${K.length}: ${K[b].img_name??b}`};K.length>0&&(G.addButton({title:"◀ Prev view"}).on("click",()=>v(b-1)),G.addButton({title:"Next view ▶"}).on("click",()=>v(b+1)));const x=K.length>0?nr(K,{tiltDownDeg:15,alignFirst:!0}):null,k=x?wc(K,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let S=0;const i=12;ct.value={onAnimateStart:()=>{S=0},onAnimateStop:()=>{E.resetToCamera(),Tt()}},G.addInput(q,"render_scale",{label:"Render scale",min:.25,max:U,step:.25}).on("change",Y=>{const at=Math.max(.25,Y.value),rt=Math.max(1,Math.ceil(at*o.clientWidth)),vt=Math.max(1,Math.ceil(at*o.clientHeight));(o.width!==rt||o.height!==vt)&&(o.width=rt,o.height=vt,R())}),G.addInput(q,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",Y=>Vi(Y.value,_,mt.render_settings_buffer)),G.addInput(q,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",Y=>Oi(Y.value,_,mt.render_settings_buffer)),G.addInput(q,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",Y=>{mt.bgColor=[Y.value.r,Y.value.g,Y.value.b,Y.value.a]});const m=ot?ot.meta.format===3?"Atlas (ASTC)":ot.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";G.addInput(q,"atlas_enabled",{label:m}).on("change",Y=>mt.setAtlasEnabled(Y.value)),G.addInput(q,"bfc",{label:"Backface"}).on("change",Y=>Hl({bfc:Y.value},_,mt.render_settings_buffer)),G.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(K.length>0)y.set_preset(K[0]);else{const Y=X.bbox.max[0]-X.bbox.min[0],at=X.bbox.max[1]-X.bbox.min[1],rt=X.bbox.max[2]-X.bbox.min[2],yt=.5*Math.sqrt(Y*Y+at*at+rt*rt)*.5;I.set(_t[0]-yt,_t[1]-yt,_t[2]-yt,y.position);const pt=I.create(yt,yt,yt);I.normalize(pt,pt);const wt=I.create();I.cross(I.create(0,1,0),pt,wt),I.normalize(wt,wt);const Bt=I.create();I.cross(pt,wt,Bt);const It=he.create(wt[0],Bt[0],pt[0],wt[1],Bt[1],pt[1],wt[2],Bt[2],pt[2]);ee.fromMat3(It,y.rotation),y.update_buffer()}E.resetToCamera(),Tt()});const u={result:"— click Benchmark —"};G.addMonitor(u,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const p={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function a(){const at=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const rt of Object.keys(p))if(at.startsWith(rt))return rt;return null}const f=document.createElement("div");f.id="bench-overlay",f.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(f);function w(Y,at,rt){const vt=Math.floor(at/Math.max(1,rt)*100),yt=32,pt=Math.floor(at/Math.max(1,rt)*yt),wt="█".repeat(pt)+"░".repeat(yt-pt);f.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${Y}</div><div>[${wt}] ${vt}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${at} / ${rt} frames · offscreen · pipelined · no vsync</div>`,f.style.display="block"}function g(){f.style.display="none"}async function D(Y=10,at=200){if(St)return;if(K.length===0){u.result="no cameras to benchmark";return}St=!0;const rt=j,vt=q.animate,yt=new Float32Array(y.position),pt=new Float32Array(y.rotation);j=!1,q.animate=!1,G.refresh(),dt=null,E.enabled=!1;const wt=a(),Bt=wt?p[wt]:null,It=(Bt==null?void 0:Bt.w)??o.width,Vt=(Bt==null?void 0:Bt.h)??o.height,Ft=(Bt==null?void 0:Bt.fovY)??y.getFov(),Zt=wt?`${wt} · ${It>=4e3/4+500?"images_4":"images_2"}`:"custom",Wt=o.width,Yt=o.height,Kt=y.getFov();o.width=It,o.height=Vt,y.setFov(Ft),Mn(It,Vt,_,mt.render_settings_buffer);const te=_.createTexture({size:[It,Vt,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Xt=te.createView(),ve=()=>{const Qt=_.createCommandEncoder();mt.frame(Qt,Xt,!1),_.queue.submit([Qt.finish()])},le=()=>new Promise(Qt=>setTimeout(Qt,0)),be=20,fe=async(Qt,ce)=>{let _e=0,ue=0;for(w(ce,0,Qt),await le();ue<Qt;){const me=Math.min(be,Qt-ue),ge=performance.now();for(let jt=0;jt<me;jt++)y.set_preset(K[(ue+jt)%K.length]),ve();await _.queue.onSubmittedWorkDone();const qe=performance.now();_e+=qe-ge,ue+=me,w(ce,ue,Qt),await le()}return _e};try{await fe(Y,"Warming up");const ce=await fe(at,"Benchmarking")/at,_e=1e3/ce,ue=X.num_points??X.surfel_data.length/8,me=(Ft*180/Math.PI).toFixed(1),ge=`${_e.toFixed(1)} FPS  (${ce.toFixed(2)} ms/frame)
${It}×${Vt} · fovY ${me}° · ${Zt}
${ue.toLocaleString()} surfels · ${Y}w+${at}b · pipelined`;u.result=ge,console.log("[bench]",ge.replace(/\n/g,"  |  "))}catch(Qt){console.error("[bench] failed:",Qt),u.result=`bench failed: ${Qt}`}finally{g(),te.destroy(),o.width=Wt,o.height=Yt,y.setFov(Kt),Mn(Wt,Yt,_,mt.render_settings_buffer),y.position.set(yt),y.rotation.set(pt),y.update_buffer(),E.enabled=!rt,j=rt,q.animate=vt,G.refresh(),St=!1}}G.addButton({title:"📊 Benchmark"}).on("click",()=>D()),document.addEventListener("keydown",Y=>{const at=Y.key;if(at>="0"&&at<="9"&&K.length>0){const rt=parseInt(at);rt<K.length&&v(rt)}else at==="ArrowLeft"||at==="PageUp"?(v(b-1),Y.preventDefault()):at==="ArrowRight"||at==="PageDown"?(v(b+1),Y.preventDefault()):(at==="d"||at==="D")&&mt.debugReadSortedIndices(30).catch(rt=>console.error("[DEBUG] readback failed:",rt))});function V(Y,at){const rt=o.getBoundingClientRect(),vt=window.devicePixelRatio||1;return[(Y-rt.left)*vt,(at-rt.top)*vt]}o.addEventListener("dblclick",Y=>{const[at,rt]=V(Y.clientX,Y.clientY);Dt(at,rt)});let O=0,lt=0,it=0;o.addEventListener("pointerdown",Y=>{if(Y.pointerType!=="touch")return;const at=performance.now(),rt=at-O,vt=Y.clientX-lt,yt=Y.clientY-it;if(rt>0&&rt<300&&vt*vt+yt*yt<40*40){const[pt,wt]=V(Y.clientX,Y.clientY);Dt(pt,wt),O=0}else O=at,lt=Y.clientX,it=Y.clientY});function st(){return M}let ft=performance.now(),xt=60,ht=Promise.resolve(),bt=0;async function At(){var yt;const Y=performance.now(),at=Math.min((Y-ft)/1e3,.1);if(ft=Y,at>0){const pt=((yt=mt.lastStageBreakdownMs)==null?void 0:yt.total)??0,wt=pt>.5?1e3/pt:1/at;xt=xt*.9+wt*.1,nt.stats=`${Z} surfels · ${Math.round(xt)} fps`}if(St){requestAnimationFrame(At);return}if(st()&&(dt||j)&&(dt=null,E.resetToCamera(),Tt(),j&&(j=!1,q.animate=!1,G.refresh())),j&&q.animateMode==="circle"&&x){S+=at/i,S>=1&&(S-=1);const pt=sr(x,S);y.set_preset(pt),E.update(at);const wt=_.createCommandEncoder();mt.frame(wt,c.getCurrentTexture().createView()),_.queue.submit([wt.finish()]),bt++,bt===2&&_n(),requestAnimationFrame(At);return}if(dt){dt.t+=at/dt.duration;const pt=Math.min(1,dt.t),wt=pt*pt*(3-2*pt);I.lerp(dt.fromPos,dt.toPos,wt,y.position),se.slerp(dt.fromQuat,dt.toQuat,wt,B),he.fromQuat(B,F),ee.fromMat3(F,y.rotation),y.update_buffer(),dt.t>=1&&(y.set_preset(dt.target),dt=null,j?K.length>0&&(Ct=Ut):(E.resetToCamera(),Tt()))}else if(j&&!st()){const pt=q.animateMode==="circle"&&k.length>0,wt=pt?k:K;if(wt.length!==0){if(Ct-=at,Ct<=0){const It=((pt?$t:b)+1)%wt.length;pt?$t=It:b=It;const Vt=pt?Mt/8:Mt;d(wt[It],Vt),pt||(r.view=`${b+1} / ${K.length}: ${K[b].img_name??b}`)}}}E.update(at),Q(),await ht;const rt=_.createCommandEncoder(),vt=c.getCurrentTexture().createView();mt.frame(rt,vt),_.queue.submit([rt.finish()]),ht=_.queue.onSubmittedWorkDone(),bt++,bt===2&&_n(),requestAnimationFrame(At)}requestAnimationFrame(At)}}(function(){let c="dev";for(const C of Array.from(document.querySelectorAll('script[type="module"]'))){const E=C.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(E){c=E[1];break}}const _=document.createElement("div");_.textContent="v "+c,_.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(_.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(_)})();(async()=>{if(navigator.gpu===void 0){const E=document.querySelector("#title");E.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const E=document.querySelector("#title");E.innerText="No adapter is available for WebGPU.";return}const c=[];o.features.has("timestamp-query")&&c.push("timestamp-query"),o.features.has("texture-compression-bc")&&c.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&c.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const _=await o.requestDevice({requiredFeatures:c,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),C=document.querySelector("#webgpu-canvas");Ml(C!==null);const y=C.getContext("webgpu");Tc(C,y,_,c)})();
