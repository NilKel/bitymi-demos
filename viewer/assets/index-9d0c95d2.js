var xl=Object.defineProperty;var yl=(o,a,_)=>a in o?xl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[a]=_;var U=(o,a,_)=>(yl(o,typeof a!="symbol"?a+"":a,_),_);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))C(b);new MutationObserver(b=>{for(const k of b)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&C(M)}).observe(document,{childList:!0,subtree:!0});function _(b){const k={};return b.integrity&&(k.integrity=b.integrity),b.referrerPolicy&&(k.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?k.credentials="include":b.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function C(b){if(b.ep)return;b.ep=!0;const k=_(b);fetch(b.href,k)}})();function Pl(o,a){return class extends o{constructor(..._){super(..._),a(this)}}}const Sl=Pl(Array,o=>o.fill(0));let De=1e-6;function Cl(o){function a(v=0,x=0){const S=new o(2);return v!==void 0&&(S[0]=v,x!==void 0&&(S[1]=x)),S}const _=a;function C(v,x,S){const r=S??new o(2);return r[0]=v,r[1]=x,r}function b(v,x){const S=x??new o(2);return S[0]=Math.ceil(v[0]),S[1]=Math.ceil(v[1]),S}function k(v,x){const S=x??new o(2);return S[0]=Math.floor(v[0]),S[1]=Math.floor(v[1]),S}function M(v,x){const S=x??new o(2);return S[0]=Math.round(v[0]),S[1]=Math.round(v[1]),S}function O(v,x=0,S=1,r){const m=r??new o(2);return m[0]=Math.min(S,Math.max(x,v[0])),m[1]=Math.min(S,Math.max(x,v[1])),m}function B(v,x,S){const r=S??new o(2);return r[0]=v[0]+x[0],r[1]=v[1]+x[1],r}function T(v,x,S,r){const m=r??new o(2);return m[0]=v[0]+x[0]*S,m[1]=v[1]+x[1]*S,m}function I(v,x){const S=v[0],r=v[1],m=x[0],d=x[1],f=Math.sqrt(S*S+r*r),l=Math.sqrt(m*m+d*d),u=f*l,P=u&&ue(v,x)/u;return Math.acos(P)}function L(v,x,S){const r=S??new o(2);return r[0]=v[0]-x[0],r[1]=v[1]-x[1],r}const H=L;function R(v,x){return Math.abs(v[0]-x[0])<De&&Math.abs(v[1]-x[1])<De}function X(v,x){return v[0]===x[0]&&v[1]===x[1]}function j(v,x,S,r){const m=r??new o(2);return m[0]=v[0]+S*(x[0]-v[0]),m[1]=v[1]+S*(x[1]-v[1]),m}function Z(v,x,S,r){const m=r??new o(2);return m[0]=v[0]+S[0]*(x[0]-v[0]),m[1]=v[1]+S[1]*(x[1]-v[1]),m}function se(v,x,S){const r=S??new o(2);return r[0]=Math.max(v[0],x[0]),r[1]=Math.max(v[1],x[1]),r}function K(v,x,S){const r=S??new o(2);return r[0]=Math.min(v[0],x[0]),r[1]=Math.min(v[1],x[1]),r}function q(v,x,S){const r=S??new o(2);return r[0]=v[0]*x,r[1]=v[1]*x,r}const W=q;function oe(v,x,S){const r=S??new o(2);return r[0]=v[0]/x,r[1]=v[1]/x,r}function ve(v,x){const S=x??new o(2);return S[0]=1/v[0],S[1]=1/v[1],S}const Y=ve;function ie(v,x,S){const r=S??new o(3),m=v[0]*x[1]-v[1]*x[0];return r[0]=0,r[1]=0,r[2]=m,r}function ue(v,x){return v[0]*x[0]+v[1]*x[1]}function xe(v){const x=v[0],S=v[1];return Math.sqrt(x*x+S*S)}const Ue=xe;function Ge(v){const x=v[0],S=v[1];return x*x+S*S}const Re=Ge;function Ce(v,x){const S=v[0]-x[0],r=v[1]-x[1];return Math.sqrt(S*S+r*r)}const be=Ce;function Se(v,x){const S=v[0]-x[0],r=v[1]-x[1];return S*S+r*r}const de=Se;function $(v,x){const S=x??new o(2),r=v[0],m=v[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(S[0]=r/d,S[1]=m/d):(S[0]=0,S[1]=0),S}function ne(v,x){const S=x??new o(2);return S[0]=-v[0],S[1]=-v[1],S}function ae(v,x){const S=x??new o(2);return S[0]=v[0],S[1]=v[1],S}const Le=ae;function ye(v,x,S){const r=S??new o(2);return r[0]=v[0]*x[0],r[1]=v[1]*x[1],r}const Be=ye;function me(v,x,S){const r=S??new o(2);return r[0]=v[0]/x[0],r[1]=v[1]/x[1],r}const Me=me;function qe(v=1,x){const S=x??new o(2),r=Math.random()*2*Math.PI;return S[0]=Math.cos(r)*v,S[1]=Math.sin(r)*v,S}function A(v){const x=v??new o(2);return x[0]=0,x[1]=0,x}function F(v,x,S){const r=S??new o(2),m=v[0],d=v[1];return r[0]=m*x[0]+d*x[4]+x[12],r[1]=m*x[1]+d*x[5]+x[13],r}function y(v,x,S){const r=S??new o(2),m=v[0],d=v[1];return r[0]=x[0]*m+x[4]*d+x[8],r[1]=x[1]*m+x[5]*d+x[9],r}function i(v,x,S,r){const m=r??new o(2),d=v[0]-x[0],f=v[1]-x[1],l=Math.sin(S),u=Math.cos(S);return m[0]=d*u-f*l+x[0],m[1]=d*l+f*u+x[1],m}function h(v,x,S){const r=S??new o(2);return $(v,r),q(r,x,r)}function p(v,x,S){const r=S??new o(2);return xe(v)>x?h(v,x,r):ae(v,r)}function g(v,x,S){const r=S??new o(2);return j(v,x,.5,r)}return{create:a,fromValues:_,set:C,ceil:b,floor:k,round:M,clamp:O,add:B,addScaled:T,angle:I,subtract:L,sub:H,equalsApproximately:R,equals:X,lerp:j,lerpV:Z,max:se,min:K,mulScalar:q,scale:W,divScalar:oe,inverse:ve,invert:Y,cross:ie,dot:ue,length:xe,len:Ue,lengthSq:Ge,lenSq:Re,distance:Ce,dist:be,distanceSq:Se,distSq:de,normalize:$,negate:ne,copy:ae,clone:Le,multiply:ye,mul:Be,divide:me,div:Me,random:qe,zero:A,transformMat4:F,transformMat3:y,rotate:i,setLength:h,truncate:p,midpoint:g}}const Hr=new Map;function di(o){let a=Hr.get(o);return a||(a=Cl(o),Hr.set(o,a)),a}function El(o){function a(l,u,P){const w=new o(3);return l!==void 0&&(w[0]=l,u!==void 0&&(w[1]=u,P!==void 0&&(w[2]=P))),w}const _=a;function C(l,u,P,w){const D=w??new o(3);return D[0]=l,D[1]=u,D[2]=P,D}function b(l,u){const P=u??new o(3);return P[0]=Math.ceil(l[0]),P[1]=Math.ceil(l[1]),P[2]=Math.ceil(l[2]),P}function k(l,u){const P=u??new o(3);return P[0]=Math.floor(l[0]),P[1]=Math.floor(l[1]),P[2]=Math.floor(l[2]),P}function M(l,u){const P=u??new o(3);return P[0]=Math.round(l[0]),P[1]=Math.round(l[1]),P[2]=Math.round(l[2]),P}function O(l,u=0,P=1,w){const D=w??new o(3);return D[0]=Math.min(P,Math.max(u,l[0])),D[1]=Math.min(P,Math.max(u,l[1])),D[2]=Math.min(P,Math.max(u,l[2])),D}function B(l,u,P){const w=P??new o(3);return w[0]=l[0]+u[0],w[1]=l[1]+u[1],w[2]=l[2]+u[2],w}function T(l,u,P,w){const D=w??new o(3);return D[0]=l[0]+u[0]*P,D[1]=l[1]+u[1]*P,D[2]=l[2]+u[2]*P,D}function I(l,u){const P=l[0],w=l[1],D=l[2],V=u[0],N=u[1],re=u[2],te=Math.sqrt(P*P+w*w+D*D),J=Math.sqrt(V*V+N*N+re*re),fe=te*J,ce=fe&&ue(l,u)/fe;return Math.acos(ce)}function L(l,u,P){const w=P??new o(3);return w[0]=l[0]-u[0],w[1]=l[1]-u[1],w[2]=l[2]-u[2],w}const H=L;function R(l,u){return Math.abs(l[0]-u[0])<De&&Math.abs(l[1]-u[1])<De&&Math.abs(l[2]-u[2])<De}function X(l,u){return l[0]===u[0]&&l[1]===u[1]&&l[2]===u[2]}function j(l,u,P,w){const D=w??new o(3);return D[0]=l[0]+P*(u[0]-l[0]),D[1]=l[1]+P*(u[1]-l[1]),D[2]=l[2]+P*(u[2]-l[2]),D}function Z(l,u,P,w){const D=w??new o(3);return D[0]=l[0]+P[0]*(u[0]-l[0]),D[1]=l[1]+P[1]*(u[1]-l[1]),D[2]=l[2]+P[2]*(u[2]-l[2]),D}function se(l,u,P){const w=P??new o(3);return w[0]=Math.max(l[0],u[0]),w[1]=Math.max(l[1],u[1]),w[2]=Math.max(l[2],u[2]),w}function K(l,u,P){const w=P??new o(3);return w[0]=Math.min(l[0],u[0]),w[1]=Math.min(l[1],u[1]),w[2]=Math.min(l[2],u[2]),w}function q(l,u,P){const w=P??new o(3);return w[0]=l[0]*u,w[1]=l[1]*u,w[2]=l[2]*u,w}const W=q;function oe(l,u,P){const w=P??new o(3);return w[0]=l[0]/u,w[1]=l[1]/u,w[2]=l[2]/u,w}function ve(l,u){const P=u??new o(3);return P[0]=1/l[0],P[1]=1/l[1],P[2]=1/l[2],P}const Y=ve;function ie(l,u,P){const w=P??new o(3),D=l[2]*u[0]-l[0]*u[2],V=l[0]*u[1]-l[1]*u[0];return w[0]=l[1]*u[2]-l[2]*u[1],w[1]=D,w[2]=V,w}function ue(l,u){return l[0]*u[0]+l[1]*u[1]+l[2]*u[2]}function xe(l){const u=l[0],P=l[1],w=l[2];return Math.sqrt(u*u+P*P+w*w)}const Ue=xe;function Ge(l){const u=l[0],P=l[1],w=l[2];return u*u+P*P+w*w}const Re=Ge;function Ce(l,u){const P=l[0]-u[0],w=l[1]-u[1],D=l[2]-u[2];return Math.sqrt(P*P+w*w+D*D)}const be=Ce;function Se(l,u){const P=l[0]-u[0],w=l[1]-u[1],D=l[2]-u[2];return P*P+w*w+D*D}const de=Se;function $(l,u){const P=u??new o(3),w=l[0],D=l[1],V=l[2],N=Math.sqrt(w*w+D*D+V*V);return N>1e-5?(P[0]=w/N,P[1]=D/N,P[2]=V/N):(P[0]=0,P[1]=0,P[2]=0),P}function ne(l,u){const P=u??new o(3);return P[0]=-l[0],P[1]=-l[1],P[2]=-l[2],P}function ae(l,u){const P=u??new o(3);return P[0]=l[0],P[1]=l[1],P[2]=l[2],P}const Le=ae;function ye(l,u,P){const w=P??new o(3);return w[0]=l[0]*u[0],w[1]=l[1]*u[1],w[2]=l[2]*u[2],w}const Be=ye;function me(l,u,P){const w=P??new o(3);return w[0]=l[0]/u[0],w[1]=l[1]/u[1],w[2]=l[2]/u[2],w}const Me=me;function qe(l=1,u){const P=u??new o(3),w=Math.random()*2*Math.PI,D=Math.random()*2-1,V=Math.sqrt(1-D*D)*l;return P[0]=Math.cos(w)*V,P[1]=Math.sin(w)*V,P[2]=D*l,P}function A(l){const u=l??new o(3);return u[0]=0,u[1]=0,u[2]=0,u}function F(l,u,P){const w=P??new o(3),D=l[0],V=l[1],N=l[2],re=u[3]*D+u[7]*V+u[11]*N+u[15]||1;return w[0]=(u[0]*D+u[4]*V+u[8]*N+u[12])/re,w[1]=(u[1]*D+u[5]*V+u[9]*N+u[13])/re,w[2]=(u[2]*D+u[6]*V+u[10]*N+u[14])/re,w}function y(l,u,P){const w=P??new o(3),D=l[0],V=l[1],N=l[2];return w[0]=D*u[0*4+0]+V*u[1*4+0]+N*u[2*4+0],w[1]=D*u[0*4+1]+V*u[1*4+1]+N*u[2*4+1],w[2]=D*u[0*4+2]+V*u[1*4+2]+N*u[2*4+2],w}function i(l,u,P){const w=P??new o(3),D=l[0],V=l[1],N=l[2];return w[0]=D*u[0]+V*u[4]+N*u[8],w[1]=D*u[1]+V*u[5]+N*u[9],w[2]=D*u[2]+V*u[6]+N*u[10],w}function h(l,u,P){const w=P??new o(3),D=u[0],V=u[1],N=u[2],re=u[3]*2,te=l[0],J=l[1],fe=l[2],ce=V*fe-N*J,pe=N*te-D*fe,_e=D*J-V*te;return w[0]=te+ce*re+(V*_e-N*pe)*2,w[1]=J+pe*re+(N*ce-D*_e)*2,w[2]=fe+_e*re+(D*pe-V*ce)*2,w}function p(l,u){const P=u??new o(3);return P[0]=l[12],P[1]=l[13],P[2]=l[14],P}function g(l,u,P){const w=P??new o(3),D=u*4;return w[0]=l[D+0],w[1]=l[D+1],w[2]=l[D+2],w}function v(l,u){const P=u??new o(3),w=l[0],D=l[1],V=l[2],N=l[4],re=l[5],te=l[6],J=l[8],fe=l[9],ce=l[10];return P[0]=Math.sqrt(w*w+D*D+V*V),P[1]=Math.sqrt(N*N+re*re+te*te),P[2]=Math.sqrt(J*J+fe*fe+ce*ce),P}function x(l,u,P,w){const D=w??new o(3),V=[],N=[];return V[0]=l[0]-u[0],V[1]=l[1]-u[1],V[2]=l[2]-u[2],N[0]=V[0],N[1]=V[1]*Math.cos(P)-V[2]*Math.sin(P),N[2]=V[1]*Math.sin(P)+V[2]*Math.cos(P),D[0]=N[0]+u[0],D[1]=N[1]+u[1],D[2]=N[2]+u[2],D}function S(l,u,P,w){const D=w??new o(3),V=[],N=[];return V[0]=l[0]-u[0],V[1]=l[1]-u[1],V[2]=l[2]-u[2],N[0]=V[2]*Math.sin(P)+V[0]*Math.cos(P),N[1]=V[1],N[2]=V[2]*Math.cos(P)-V[0]*Math.sin(P),D[0]=N[0]+u[0],D[1]=N[1]+u[1],D[2]=N[2]+u[2],D}function r(l,u,P,w){const D=w??new o(3),V=[],N=[];return V[0]=l[0]-u[0],V[1]=l[1]-u[1],V[2]=l[2]-u[2],N[0]=V[0]*Math.cos(P)-V[1]*Math.sin(P),N[1]=V[0]*Math.sin(P)+V[1]*Math.cos(P),N[2]=V[2],D[0]=N[0]+u[0],D[1]=N[1]+u[1],D[2]=N[2]+u[2],D}function m(l,u,P){const w=P??new o(3);return $(l,w),q(w,u,w)}function d(l,u,P){const w=P??new o(3);return xe(l)>u?m(l,u,w):ae(l,w)}function f(l,u,P){const w=P??new o(3);return j(l,u,.5,w)}return{create:a,fromValues:_,set:C,ceil:b,floor:k,round:M,clamp:O,add:B,addScaled:T,angle:I,subtract:L,sub:H,equalsApproximately:R,equals:X,lerp:j,lerpV:Z,max:se,min:K,mulScalar:q,scale:W,divScalar:oe,inverse:ve,invert:Y,cross:ie,dot:ue,length:xe,len:Ue,lengthSq:Ge,lenSq:Re,distance:Ce,dist:be,distanceSq:Se,distSq:de,normalize:$,negate:ne,copy:ae,clone:Le,multiply:ye,mul:Be,divide:me,div:Me,random:qe,zero:A,transformMat4:F,transformMat4Upper3x3:y,transformMat3:i,transformQuat:h,getTranslation:p,getAxis:g,getScaling:v,rotateX:x,rotateY:S,rotateZ:r,setLength:m,truncate:d,midpoint:f}}const Kr=new Map;function ss(o){let a=Kr.get(o);return a||(a=El(o),Kr.set(o,a)),a}function kl(o){const a=di(o),_=ss(o);function C(i,h,p,g,v,x,S,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,h!==void 0&&(d[1]=h,p!==void 0&&(d[2]=p,g!==void 0&&(d[4]=g,v!==void 0&&(d[5]=v,x!==void 0&&(d[6]=x,S!==void 0&&(d[8]=S,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function b(i,h,p,g,v,x,S,r,m,d){const f=d??new o(12);return f[0]=i,f[1]=h,f[2]=p,f[3]=0,f[4]=g,f[5]=v,f[6]=x,f[7]=0,f[8]=S,f[9]=r,f[10]=m,f[11]=0,f}function k(i,h){const p=h??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=0,p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=0,p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=0,p}function M(i,h){const p=h??new o(12),g=i[0],v=i[1],x=i[2],S=i[3],r=g+g,m=v+v,d=x+x,f=g*r,l=v*r,u=v*m,P=x*r,w=x*m,D=x*d,V=S*r,N=S*m,re=S*d;return p[0]=1-u-D,p[1]=l+re,p[2]=P-N,p[3]=0,p[4]=l-re,p[5]=1-f-D,p[6]=w+V,p[7]=0,p[8]=P+N,p[9]=w-V,p[10]=1-f-u,p[11]=0,p}function O(i,h){const p=h??new o(12);return p[0]=-i[0],p[1]=-i[1],p[2]=-i[2],p[4]=-i[4],p[5]=-i[5],p[6]=-i[6],p[8]=-i[8],p[9]=-i[9],p[10]=-i[10],p}function B(i,h,p){const g=p??new o(12);return g[0]=i[0]*h,g[1]=i[1]*h,g[2]=i[2]*h,g[4]=i[4]*h,g[5]=i[5]*h,g[6]=i[6]*h,g[8]=i[8]*h,g[9]=i[9]*h,g[10]=i[10]*h,g}const T=B;function I(i,h,p){const g=p??new o(12);return g[0]=i[0]+h[0],g[1]=i[1]+h[1],g[2]=i[2]+h[2],g[4]=i[4]+h[4],g[5]=i[5]+h[5],g[6]=i[6]+h[6],g[8]=i[8]+h[8],g[9]=i[9]+h[9],g[10]=i[10]+h[10],g}function L(i,h){const p=h??new o(12);return p[0]=i[0],p[1]=i[1],p[2]=i[2],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[8]=i[8],p[9]=i[9],p[10]=i[10],p}const H=L;function R(i,h){return Math.abs(i[0]-h[0])<De&&Math.abs(i[1]-h[1])<De&&Math.abs(i[2]-h[2])<De&&Math.abs(i[4]-h[4])<De&&Math.abs(i[5]-h[5])<De&&Math.abs(i[6]-h[6])<De&&Math.abs(i[8]-h[8])<De&&Math.abs(i[9]-h[9])<De&&Math.abs(i[10]-h[10])<De}function X(i,h){return i[0]===h[0]&&i[1]===h[1]&&i[2]===h[2]&&i[4]===h[4]&&i[5]===h[5]&&i[6]===h[6]&&i[8]===h[8]&&i[9]===h[9]&&i[10]===h[10]}function j(i){const h=i??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function Z(i,h){const p=h??new o(12);if(p===i){let u;return u=i[1],i[1]=i[4],i[4]=u,u=i[2],i[2]=i[8],i[8]=u,u=i[6],i[6]=i[9],i[9]=u,p}const g=i[0*4+0],v=i[0*4+1],x=i[0*4+2],S=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],f=i[2*4+1],l=i[2*4+2];return p[0]=g,p[1]=S,p[2]=d,p[4]=v,p[5]=r,p[6]=f,p[8]=x,p[9]=m,p[10]=l,p}function se(i,h){const p=h??new o(12),g=i[0*4+0],v=i[0*4+1],x=i[0*4+2],S=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],f=i[2*4+1],l=i[2*4+2],u=l*r-m*f,P=-l*S+m*d,w=f*S-r*d,D=1/(g*u+v*P+x*w);return p[0]=u*D,p[1]=(-l*v+x*f)*D,p[2]=(m*v-x*r)*D,p[4]=P*D,p[5]=(l*g-x*d)*D,p[6]=(-m*g+x*S)*D,p[8]=w*D,p[9]=(-f*g+v*d)*D,p[10]=(r*g-v*S)*D,p}function K(i){const h=i[0],p=i[0*4+1],g=i[0*4+2],v=i[1*4+0],x=i[1*4+1],S=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return h*(x*d-m*S)-v*(p*d-m*g)+r*(p*S-x*g)}const q=se;function W(i,h,p){const g=p??new o(12),v=i[0],x=i[1],S=i[2],r=i[4+0],m=i[4+1],d=i[4+2],f=i[8+0],l=i[8+1],u=i[8+2],P=h[0],w=h[1],D=h[2],V=h[4+0],N=h[4+1],re=h[4+2],te=h[8+0],J=h[8+1],fe=h[8+2];return g[0]=v*P+r*w+f*D,g[1]=x*P+m*w+l*D,g[2]=S*P+d*w+u*D,g[4]=v*V+r*N+f*re,g[5]=x*V+m*N+l*re,g[6]=S*V+d*N+u*re,g[8]=v*te+r*J+f*fe,g[9]=x*te+m*J+l*fe,g[10]=S*te+d*J+u*fe,g}const oe=W;function ve(i,h,p){const g=p??j();return i!==g&&(g[0]=i[0],g[1]=i[1],g[2]=i[2],g[4]=i[4],g[5]=i[5],g[6]=i[6]),g[8]=h[0],g[9]=h[1],g[10]=1,g}function Y(i,h){const p=h??a.create();return p[0]=i[8],p[1]=i[9],p}function ie(i,h,p){const g=p??a.create(),v=h*4;return g[0]=i[v+0],g[1]=i[v+1],g}function ue(i,h,p,g){const v=g===i?i:L(i,g),x=p*4;return v[x+0]=h[0],v[x+1]=h[1],v}function xe(i,h){const p=h??a.create(),g=i[0],v=i[1],x=i[4],S=i[5];return p[0]=Math.sqrt(g*g+v*v),p[1]=Math.sqrt(x*x+S*S),p}function Ue(i,h){const p=h??_.create(),g=i[0],v=i[1],x=i[2],S=i[4],r=i[5],m=i[6],d=i[8],f=i[9],l=i[10];return p[0]=Math.sqrt(g*g+v*v+x*x),p[1]=Math.sqrt(S*S+r*r+m*m),p[2]=Math.sqrt(d*d+f*f+l*l),p}function Ge(i,h){const p=h??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=i[0],p[9]=i[1],p[10]=1,p}function Re(i,h,p){const g=p??new o(12),v=h[0],x=h[1],S=i[0],r=i[1],m=i[2],d=i[1*4+0],f=i[1*4+1],l=i[1*4+2],u=i[2*4+0],P=i[2*4+1],w=i[2*4+2];return i!==g&&(g[0]=S,g[1]=r,g[2]=m,g[4]=d,g[5]=f,g[6]=l),g[8]=S*v+d*x+u,g[9]=r*v+f*x+P,g[10]=m*v+l*x+w,g}function Ce(i,h){const p=h??new o(12),g=Math.cos(i),v=Math.sin(i);return p[0]=g,p[1]=v,p[2]=0,p[4]=-v,p[5]=g,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function be(i,h,p){const g=p??new o(12),v=i[0*4+0],x=i[0*4+1],S=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],f=Math.cos(h),l=Math.sin(h);return g[0]=f*v+l*r,g[1]=f*x+l*m,g[2]=f*S+l*d,g[4]=f*r-l*v,g[5]=f*m-l*x,g[6]=f*d-l*S,i!==g&&(g[8]=i[8],g[9]=i[9],g[10]=i[10]),g}function Se(i,h){const p=h??new o(12),g=Math.cos(i),v=Math.sin(i);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=g,p[6]=v,p[8]=0,p[9]=-v,p[10]=g,p}function de(i,h,p){const g=p??new o(12),v=i[4],x=i[5],S=i[6],r=i[8],m=i[9],d=i[10],f=Math.cos(h),l=Math.sin(h);return g[4]=f*v+l*r,g[5]=f*x+l*m,g[6]=f*S+l*d,g[8]=f*r-l*v,g[9]=f*m-l*x,g[10]=f*d-l*S,i!==g&&(g[0]=i[0],g[1]=i[1],g[2]=i[2]),g}function $(i,h){const p=h??new o(12),g=Math.cos(i),v=Math.sin(i);return p[0]=g,p[1]=0,p[2]=-v,p[4]=0,p[5]=1,p[6]=0,p[8]=v,p[9]=0,p[10]=g,p}function ne(i,h,p){const g=p??new o(12),v=i[0*4+0],x=i[0*4+1],S=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],f=Math.cos(h),l=Math.sin(h);return g[0]=f*v-l*r,g[1]=f*x-l*m,g[2]=f*S-l*d,g[8]=f*r+l*v,g[9]=f*m+l*x,g[10]=f*d+l*S,i!==g&&(g[4]=i[4],g[5]=i[5],g[6]=i[6]),g}const ae=Ce,Le=be;function ye(i,h){const p=h??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Be(i,h,p){const g=p??new o(12),v=h[0],x=h[1];return g[0]=v*i[0*4+0],g[1]=v*i[0*4+1],g[2]=v*i[0*4+2],g[4]=x*i[1*4+0],g[5]=x*i[1*4+1],g[6]=x*i[1*4+2],i!==g&&(g[8]=i[8],g[9]=i[9],g[10]=i[10]),g}function me(i,h){const p=h??new o(12);return p[0]=i[0],p[1]=0,p[2]=0,p[4]=0,p[5]=i[1],p[6]=0,p[8]=0,p[9]=0,p[10]=i[2],p}function Me(i,h,p){const g=p??new o(12),v=h[0],x=h[1],S=h[2];return g[0]=v*i[0*4+0],g[1]=v*i[0*4+1],g[2]=v*i[0*4+2],g[4]=x*i[1*4+0],g[5]=x*i[1*4+1],g[6]=x*i[1*4+2],g[8]=S*i[2*4+0],g[9]=S*i[2*4+1],g[10]=S*i[2*4+2],g}function qe(i,h){const p=h??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function A(i,h,p){const g=p??new o(12);return g[0]=h*i[0*4+0],g[1]=h*i[0*4+1],g[2]=h*i[0*4+2],g[4]=h*i[1*4+0],g[5]=h*i[1*4+1],g[6]=h*i[1*4+2],i!==g&&(g[8]=i[8],g[9]=i[9],g[10]=i[10]),g}function F(i,h){const p=h??new o(12);return p[0]=i,p[1]=0,p[2]=0,p[4]=0,p[5]=i,p[6]=0,p[8]=0,p[9]=0,p[10]=i,p}function y(i,h,p){const g=p??new o(12);return g[0]=h*i[0*4+0],g[1]=h*i[0*4+1],g[2]=h*i[0*4+2],g[4]=h*i[1*4+0],g[5]=h*i[1*4+1],g[6]=h*i[1*4+2],g[8]=h*i[2*4+0],g[9]=h*i[2*4+1],g[10]=h*i[2*4+2],g}return{add:I,clone:H,copy:L,create:C,determinant:K,equals:X,equalsApproximately:R,fromMat4:k,fromQuat:M,get3DScaling:Ue,getAxis:ie,getScaling:xe,getTranslation:Y,identity:j,inverse:se,invert:q,mul:oe,mulScalar:T,multiply:W,multiplyScalar:B,negate:O,rotate:be,rotateX:de,rotateY:ne,rotateZ:Le,rotation:Ce,rotationX:Se,rotationY:$,rotationZ:ae,scale:Be,scale3D:Me,scaling:ye,scaling3D:me,set:b,setAxis:ue,setTranslation:ve,translate:Re,translation:Ge,transpose:Z,uniformScale:A,uniformScale3D:y,uniformScaling:qe,uniformScaling3D:F}}const Yr=new Map;function Ml(o){let a=Yr.get(o);return a||(a=kl(o),Yr.set(o,a)),a}function Bl(o){const a=ss(o);function _(r,m,d,f,l,u,P,w,D,V,N,re,te,J,fe,ce){const pe=new o(16);return r!==void 0&&(pe[0]=r,m!==void 0&&(pe[1]=m,d!==void 0&&(pe[2]=d,f!==void 0&&(pe[3]=f,l!==void 0&&(pe[4]=l,u!==void 0&&(pe[5]=u,P!==void 0&&(pe[6]=P,w!==void 0&&(pe[7]=w,D!==void 0&&(pe[8]=D,V!==void 0&&(pe[9]=V,N!==void 0&&(pe[10]=N,re!==void 0&&(pe[11]=re,te!==void 0&&(pe[12]=te,J!==void 0&&(pe[13]=J,fe!==void 0&&(pe[14]=fe,ce!==void 0&&(pe[15]=ce)))))))))))))))),pe}function C(r,m,d,f,l,u,P,w,D,V,N,re,te,J,fe,ce,pe){const _e=pe??new o(16);return _e[0]=r,_e[1]=m,_e[2]=d,_e[3]=f,_e[4]=l,_e[5]=u,_e[6]=P,_e[7]=w,_e[8]=D,_e[9]=V,_e[10]=N,_e[11]=re,_e[12]=te,_e[13]=J,_e[14]=fe,_e[15]=ce,_e}function b(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function k(r,m){const d=m??new o(16),f=r[0],l=r[1],u=r[2],P=r[3],w=f+f,D=l+l,V=u+u,N=f*w,re=l*w,te=l*D,J=u*w,fe=u*D,ce=u*V,pe=P*w,_e=P*D,Ae=P*V;return d[0]=1-te-ce,d[1]=re+Ae,d[2]=J-_e,d[3]=0,d[4]=re-Ae,d[5]=1-N-ce,d[6]=fe+pe,d[7]=0,d[8]=J+_e,d[9]=fe-pe,d[10]=1-N-te,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function O(r,m,d){const f=d??new o(16);return f[0]=r[0]+m[0],f[1]=r[1]+m[1],f[2]=r[2]+m[2],f[3]=r[3]+m[3],f[4]=r[4]+m[4],f[5]=r[5]+m[5],f[6]=r[6]+m[6],f[7]=r[7]+m[7],f[8]=r[8]+m[8],f[9]=r[9]+m[9],f[10]=r[10]+m[10],f[11]=r[11]+m[11],f[12]=r[12]+m[12],f[13]=r[13]+m[13],f[14]=r[14]+m[14],f[15]=r[15]+m[15],f}function B(r,m,d){const f=d??new o(16);return f[0]=r[0]*m,f[1]=r[1]*m,f[2]=r[2]*m,f[3]=r[3]*m,f[4]=r[4]*m,f[5]=r[5]*m,f[6]=r[6]*m,f[7]=r[7]*m,f[8]=r[8]*m,f[9]=r[9]*m,f[10]=r[10]*m,f[11]=r[11]*m,f[12]=r[12]*m,f[13]=r[13]*m,f[14]=r[14]*m,f[15]=r[15]*m,f}const T=B;function I(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const L=I;function H(r,m){return Math.abs(r[0]-m[0])<De&&Math.abs(r[1]-m[1])<De&&Math.abs(r[2]-m[2])<De&&Math.abs(r[3]-m[3])<De&&Math.abs(r[4]-m[4])<De&&Math.abs(r[5]-m[5])<De&&Math.abs(r[6]-m[6])<De&&Math.abs(r[7]-m[7])<De&&Math.abs(r[8]-m[8])<De&&Math.abs(r[9]-m[9])<De&&Math.abs(r[10]-m[10])<De&&Math.abs(r[11]-m[11])<De&&Math.abs(r[12]-m[12])<De&&Math.abs(r[13]-m[13])<De&&Math.abs(r[14]-m[14])<De&&Math.abs(r[15]-m[15])<De}function R(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function X(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function j(r,m){const d=m??new o(16);if(d===r){let Te;return Te=r[1],r[1]=r[4],r[4]=Te,Te=r[2],r[2]=r[8],r[8]=Te,Te=r[3],r[3]=r[12],r[12]=Te,Te=r[6],r[6]=r[9],r[9]=Te,Te=r[7],r[7]=r[13],r[13]=Te,Te=r[11],r[11]=r[14],r[14]=Te,d}const f=r[0*4+0],l=r[0*4+1],u=r[0*4+2],P=r[0*4+3],w=r[1*4+0],D=r[1*4+1],V=r[1*4+2],N=r[1*4+3],re=r[2*4+0],te=r[2*4+1],J=r[2*4+2],fe=r[2*4+3],ce=r[3*4+0],pe=r[3*4+1],_e=r[3*4+2],Ae=r[3*4+3];return d[0]=f,d[1]=w,d[2]=re,d[3]=ce,d[4]=l,d[5]=D,d[6]=te,d[7]=pe,d[8]=u,d[9]=V,d[10]=J,d[11]=_e,d[12]=P,d[13]=N,d[14]=fe,d[15]=Ae,d}function Z(r,m){const d=m??new o(16),f=r[0*4+0],l=r[0*4+1],u=r[0*4+2],P=r[0*4+3],w=r[1*4+0],D=r[1*4+1],V=r[1*4+2],N=r[1*4+3],re=r[2*4+0],te=r[2*4+1],J=r[2*4+2],fe=r[2*4+3],ce=r[3*4+0],pe=r[3*4+1],_e=r[3*4+2],Ae=r[3*4+3],Te=J*Ae,Ee=_e*fe,je=V*Ae,He=_e*N,Xe=V*fe,We=J*N,et=u*Ae,rt=_e*P,Qe=u*fe,ot=J*P,it=u*N,tt=V*P,Ne=re*pe,nt=ce*te,Ke=w*pe,ut=ce*D,st=w*te,gt=re*D,wt=f*pe,kt=ce*l,_t=f*te,At=re*l,Rt=f*D,Vt=w*l,Kt=Te*D+He*te+Xe*pe-(Ee*D+je*te+We*pe),Mt=Ee*l+et*te+ot*pe-(Te*l+rt*te+Qe*pe),Yt=je*l+rt*D+it*pe-(He*l+et*D+tt*pe),Zt=We*l+Qe*D+tt*te-(Xe*l+ot*D+it*te),Ye=1/(f*Kt+w*Mt+re*Yt+ce*Zt);return d[0]=Ye*Kt,d[1]=Ye*Mt,d[2]=Ye*Yt,d[3]=Ye*Zt,d[4]=Ye*(Ee*w+je*re+We*ce-(Te*w+He*re+Xe*ce)),d[5]=Ye*(Te*f+rt*re+Qe*ce-(Ee*f+et*re+ot*ce)),d[6]=Ye*(He*f+et*w+tt*ce-(je*f+rt*w+it*ce)),d[7]=Ye*(Xe*f+ot*w+it*re-(We*f+Qe*w+tt*re)),d[8]=Ye*(Ne*N+ut*fe+st*Ae-(nt*N+Ke*fe+gt*Ae)),d[9]=Ye*(nt*P+wt*fe+At*Ae-(Ne*P+kt*fe+_t*Ae)),d[10]=Ye*(Ke*P+kt*N+Rt*Ae-(ut*P+wt*N+Vt*Ae)),d[11]=Ye*(gt*P+_t*N+Vt*fe-(st*P+At*N+Rt*fe)),d[12]=Ye*(Ke*J+gt*_e+nt*V-(st*_e+Ne*V+ut*J)),d[13]=Ye*(_t*_e+Ne*u+kt*J-(wt*J+At*_e+nt*u)),d[14]=Ye*(wt*V+Vt*_e+ut*u-(Rt*_e+Ke*u+kt*V)),d[15]=Ye*(Rt*J+st*u+At*V-(_t*V+Vt*J+gt*u)),d}function se(r){const m=r[0],d=r[0*4+1],f=r[0*4+2],l=r[0*4+3],u=r[1*4+0],P=r[1*4+1],w=r[1*4+2],D=r[1*4+3],V=r[2*4+0],N=r[2*4+1],re=r[2*4+2],te=r[2*4+3],J=r[3*4+0],fe=r[3*4+1],ce=r[3*4+2],pe=r[3*4+3],_e=re*pe,Ae=ce*te,Te=w*pe,Ee=ce*D,je=w*te,He=re*D,Xe=f*pe,We=ce*l,et=f*te,rt=re*l,Qe=f*D,ot=w*l,it=_e*P+Ee*N+je*fe-(Ae*P+Te*N+He*fe),tt=Ae*d+Xe*N+rt*fe-(_e*d+We*N+et*fe),Ne=Te*d+We*P+Qe*fe-(Ee*d+Xe*P+ot*fe),nt=He*d+et*P+ot*N-(je*d+rt*P+Qe*N);return m*it+u*tt+V*Ne+J*nt}const K=Z;function q(r,m,d){const f=d??new o(16),l=r[0],u=r[1],P=r[2],w=r[3],D=r[4+0],V=r[4+1],N=r[4+2],re=r[4+3],te=r[8+0],J=r[8+1],fe=r[8+2],ce=r[8+3],pe=r[12+0],_e=r[12+1],Ae=r[12+2],Te=r[12+3],Ee=m[0],je=m[1],He=m[2],Xe=m[3],We=m[4+0],et=m[4+1],rt=m[4+2],Qe=m[4+3],ot=m[8+0],it=m[8+1],tt=m[8+2],Ne=m[8+3],nt=m[12+0],Ke=m[12+1],ut=m[12+2],st=m[12+3];return f[0]=l*Ee+D*je+te*He+pe*Xe,f[1]=u*Ee+V*je+J*He+_e*Xe,f[2]=P*Ee+N*je+fe*He+Ae*Xe,f[3]=w*Ee+re*je+ce*He+Te*Xe,f[4]=l*We+D*et+te*rt+pe*Qe,f[5]=u*We+V*et+J*rt+_e*Qe,f[6]=P*We+N*et+fe*rt+Ae*Qe,f[7]=w*We+re*et+ce*rt+Te*Qe,f[8]=l*ot+D*it+te*tt+pe*Ne,f[9]=u*ot+V*it+J*tt+_e*Ne,f[10]=P*ot+N*it+fe*tt+Ae*Ne,f[11]=w*ot+re*it+ce*tt+Te*Ne,f[12]=l*nt+D*Ke+te*ut+pe*st,f[13]=u*nt+V*Ke+J*ut+_e*st,f[14]=P*nt+N*Ke+fe*ut+Ae*st,f[15]=w*nt+re*Ke+ce*ut+Te*st,f}const W=q;function oe(r,m,d){const f=d??X();return r!==f&&(f[0]=r[0],f[1]=r[1],f[2]=r[2],f[3]=r[3],f[4]=r[4],f[5]=r[5],f[6]=r[6],f[7]=r[7],f[8]=r[8],f[9]=r[9],f[10]=r[10],f[11]=r[11]),f[12]=m[0],f[13]=m[1],f[14]=m[2],f[15]=1,f}function ve(r,m){const d=m??a.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function Y(r,m,d){const f=d??a.create(),l=m*4;return f[0]=r[l+0],f[1]=r[l+1],f[2]=r[l+2],f}function ie(r,m,d,f){const l=f===r?f:I(r,f),u=d*4;return l[u+0]=m[0],l[u+1]=m[1],l[u+2]=m[2],l}function ue(r,m){const d=m??a.create(),f=r[0],l=r[1],u=r[2],P=r[4],w=r[5],D=r[6],V=r[8],N=r[9],re=r[10];return d[0]=Math.sqrt(f*f+l*l+u*u),d[1]=Math.sqrt(P*P+w*w+D*D),d[2]=Math.sqrt(V*V+N*N+re*re),d}function xe(r,m,d,f,l){const u=l??new o(16),P=Math.tan(Math.PI*.5-.5*r);if(u[0]=P/m,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=P,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,Number.isFinite(f)){const w=1/(d-f);u[10]=f*w,u[14]=f*d*w}else u[10]=-1,u[14]=-d;return u}function Ue(r,m,d,f=1/0,l){const u=l??new o(16),P=1/Math.tan(r*.5);if(u[0]=P/m,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=P,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,f===1/0)u[10]=0,u[14]=d;else{const w=1/(f-d);u[10]=d*w,u[14]=f*d*w}return u}function Ge(r,m,d,f,l,u,P){const w=P??new o(16);return w[0]=2/(m-r),w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2/(f-d),w[6]=0,w[7]=0,w[8]=0,w[9]=0,w[10]=1/(l-u),w[11]=0,w[12]=(m+r)/(r-m),w[13]=(f+d)/(d-f),w[14]=l/(l-u),w[15]=1,w}function Re(r,m,d,f,l,u,P){const w=P??new o(16),D=m-r,V=f-d,N=l-u;return w[0]=2*l/D,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*l/V,w[6]=0,w[7]=0,w[8]=(r+m)/D,w[9]=(f+d)/V,w[10]=u/N,w[11]=-1,w[12]=0,w[13]=0,w[14]=l*u/N,w[15]=0,w}function Ce(r,m,d,f,l,u=1/0,P){const w=P??new o(16),D=m-r,V=f-d;if(w[0]=2*l/D,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*l/V,w[6]=0,w[7]=0,w[8]=(r+m)/D,w[9]=(f+d)/V,w[11]=-1,w[12]=0,w[13]=0,w[15]=0,u===1/0)w[10]=0,w[14]=l;else{const N=1/(u-l);w[10]=l*N,w[14]=u*l*N}return w}const be=a.create(),Se=a.create(),de=a.create();function $(r,m,d,f){const l=f??new o(16);return a.normalize(a.subtract(m,r,de),de),a.normalize(a.cross(d,de,be),be),a.normalize(a.cross(de,be,Se),Se),l[0]=be[0],l[1]=be[1],l[2]=be[2],l[3]=0,l[4]=Se[0],l[5]=Se[1],l[6]=Se[2],l[7]=0,l[8]=de[0],l[9]=de[1],l[10]=de[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ne(r,m,d,f){const l=f??new o(16);return a.normalize(a.subtract(r,m,de),de),a.normalize(a.cross(d,de,be),be),a.normalize(a.cross(de,be,Se),Se),l[0]=be[0],l[1]=be[1],l[2]=be[2],l[3]=0,l[4]=Se[0],l[5]=Se[1],l[6]=Se[2],l[7]=0,l[8]=de[0],l[9]=de[1],l[10]=de[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function ae(r,m,d,f){const l=f??new o(16);return a.normalize(a.subtract(r,m,de),de),a.normalize(a.cross(d,de,be),be),a.normalize(a.cross(de,be,Se),Se),l[0]=be[0],l[1]=Se[0],l[2]=de[0],l[3]=0,l[4]=be[1],l[5]=Se[1],l[6]=de[1],l[7]=0,l[8]=be[2],l[9]=Se[2],l[10]=de[2],l[11]=0,l[12]=-(be[0]*r[0]+be[1]*r[1]+be[2]*r[2]),l[13]=-(Se[0]*r[0]+Se[1]*r[1]+Se[2]*r[2]),l[14]=-(de[0]*r[0]+de[1]*r[1]+de[2]*r[2]),l[15]=1,l}function Le(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function ye(r,m,d){const f=d??new o(16),l=m[0],u=m[1],P=m[2],w=r[0],D=r[1],V=r[2],N=r[3],re=r[1*4+0],te=r[1*4+1],J=r[1*4+2],fe=r[1*4+3],ce=r[2*4+0],pe=r[2*4+1],_e=r[2*4+2],Ae=r[2*4+3],Te=r[3*4+0],Ee=r[3*4+1],je=r[3*4+2],He=r[3*4+3];return r!==f&&(f[0]=w,f[1]=D,f[2]=V,f[3]=N,f[4]=re,f[5]=te,f[6]=J,f[7]=fe,f[8]=ce,f[9]=pe,f[10]=_e,f[11]=Ae),f[12]=w*l+re*u+ce*P+Te,f[13]=D*l+te*u+pe*P+Ee,f[14]=V*l+J*u+_e*P+je,f[15]=N*l+fe*u+Ae*P+He,f}function Be(r,m){const d=m??new o(16),f=Math.cos(r),l=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=f,d[6]=l,d[7]=0,d[8]=0,d[9]=-l,d[10]=f,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function me(r,m,d){const f=d??new o(16),l=r[4],u=r[5],P=r[6],w=r[7],D=r[8],V=r[9],N=r[10],re=r[11],te=Math.cos(m),J=Math.sin(m);return f[4]=te*l+J*D,f[5]=te*u+J*V,f[6]=te*P+J*N,f[7]=te*w+J*re,f[8]=te*D-J*l,f[9]=te*V-J*u,f[10]=te*N-J*P,f[11]=te*re-J*w,r!==f&&(f[0]=r[0],f[1]=r[1],f[2]=r[2],f[3]=r[3],f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function Me(r,m){const d=m??new o(16),f=Math.cos(r),l=Math.sin(r);return d[0]=f,d[1]=0,d[2]=-l,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=l,d[9]=0,d[10]=f,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function qe(r,m,d){const f=d??new o(16),l=r[0*4+0],u=r[0*4+1],P=r[0*4+2],w=r[0*4+3],D=r[2*4+0],V=r[2*4+1],N=r[2*4+2],re=r[2*4+3],te=Math.cos(m),J=Math.sin(m);return f[0]=te*l-J*D,f[1]=te*u-J*V,f[2]=te*P-J*N,f[3]=te*w-J*re,f[8]=te*D+J*l,f[9]=te*V+J*u,f[10]=te*N+J*P,f[11]=te*re+J*w,r!==f&&(f[4]=r[4],f[5]=r[5],f[6]=r[6],f[7]=r[7],f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function A(r,m){const d=m??new o(16),f=Math.cos(r),l=Math.sin(r);return d[0]=f,d[1]=l,d[2]=0,d[3]=0,d[4]=-l,d[5]=f,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function F(r,m,d){const f=d??new o(16),l=r[0*4+0],u=r[0*4+1],P=r[0*4+2],w=r[0*4+3],D=r[1*4+0],V=r[1*4+1],N=r[1*4+2],re=r[1*4+3],te=Math.cos(m),J=Math.sin(m);return f[0]=te*l+J*D,f[1]=te*u+J*V,f[2]=te*P+J*N,f[3]=te*w+J*re,f[4]=te*D-J*l,f[5]=te*V-J*u,f[6]=te*N-J*P,f[7]=te*re-J*w,r!==f&&(f[8]=r[8],f[9]=r[9],f[10]=r[10],f[11]=r[11],f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function y(r,m,d){const f=d??new o(16);let l=r[0],u=r[1],P=r[2];const w=Math.sqrt(l*l+u*u+P*P);l/=w,u/=w,P/=w;const D=l*l,V=u*u,N=P*P,re=Math.cos(m),te=Math.sin(m),J=1-re;return f[0]=D+(1-D)*re,f[1]=l*u*J+P*te,f[2]=l*P*J-u*te,f[3]=0,f[4]=l*u*J-P*te,f[5]=V+(1-V)*re,f[6]=u*P*J+l*te,f[7]=0,f[8]=l*P*J+u*te,f[9]=u*P*J-l*te,f[10]=N+(1-N)*re,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}const i=y;function h(r,m,d,f){const l=f??new o(16);let u=m[0],P=m[1],w=m[2];const D=Math.sqrt(u*u+P*P+w*w);u/=D,P/=D,w/=D;const V=u*u,N=P*P,re=w*w,te=Math.cos(d),J=Math.sin(d),fe=1-te,ce=V+(1-V)*te,pe=u*P*fe+w*J,_e=u*w*fe-P*J,Ae=u*P*fe-w*J,Te=N+(1-N)*te,Ee=P*w*fe+u*J,je=u*w*fe+P*J,He=P*w*fe-u*J,Xe=re+(1-re)*te,We=r[0],et=r[1],rt=r[2],Qe=r[3],ot=r[4],it=r[5],tt=r[6],Ne=r[7],nt=r[8],Ke=r[9],ut=r[10],st=r[11];return l[0]=ce*We+pe*ot+_e*nt,l[1]=ce*et+pe*it+_e*Ke,l[2]=ce*rt+pe*tt+_e*ut,l[3]=ce*Qe+pe*Ne+_e*st,l[4]=Ae*We+Te*ot+Ee*nt,l[5]=Ae*et+Te*it+Ee*Ke,l[6]=Ae*rt+Te*tt+Ee*ut,l[7]=Ae*Qe+Te*Ne+Ee*st,l[8]=je*We+He*ot+Xe*nt,l[9]=je*et+He*it+Xe*Ke,l[10]=je*rt+He*tt+Xe*ut,l[11]=je*Qe+He*Ne+Xe*st,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const p=h;function g(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function v(r,m,d){const f=d??new o(16),l=m[0],u=m[1],P=m[2];return f[0]=l*r[0*4+0],f[1]=l*r[0*4+1],f[2]=l*r[0*4+2],f[3]=l*r[0*4+3],f[4]=u*r[1*4+0],f[5]=u*r[1*4+1],f[6]=u*r[1*4+2],f[7]=u*r[1*4+3],f[8]=P*r[2*4+0],f[9]=P*r[2*4+1],f[10]=P*r[2*4+2],f[11]=P*r[2*4+3],r!==f&&(f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}function x(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function S(r,m,d){const f=d??new o(16);return f[0]=m*r[0*4+0],f[1]=m*r[0*4+1],f[2]=m*r[0*4+2],f[3]=m*r[0*4+3],f[4]=m*r[1*4+0],f[5]=m*r[1*4+1],f[6]=m*r[1*4+2],f[7]=m*r[1*4+3],f[8]=m*r[2*4+0],f[9]=m*r[2*4+1],f[10]=m*r[2*4+2],f[11]=m*r[2*4+3],r!==f&&(f[12]=r[12],f[13]=r[13],f[14]=r[14],f[15]=r[15]),f}return{add:O,aim:$,axisRotate:h,axisRotation:y,cameraAim:ne,clone:L,copy:I,create:_,determinant:se,equals:R,equalsApproximately:H,fromMat3:b,fromQuat:k,frustum:Re,frustumReverseZ:Ce,getAxis:Y,getScaling:ue,getTranslation:ve,identity:X,inverse:Z,invert:K,lookAt:ae,mul:W,mulScalar:T,multiply:q,multiplyScalar:B,negate:M,ortho:Ge,perspective:xe,perspectiveReverseZ:Ue,rotate:p,rotateX:me,rotateY:qe,rotateZ:F,rotation:i,rotationX:Be,rotationY:Me,rotationZ:A,scale:v,scaling:g,set:C,setAxis:ie,setTranslation:oe,translate:ye,translation:Le,transpose:j,uniformScale:S,uniformScaling:x}}const Zr=new Map;function Tl(o){let a=Zr.get(o);return a||(a=Bl(o),Zr.set(o,a)),a}function Al(o){const a=ss(o);function _(A,F,y,i){const h=new o(4);return A!==void 0&&(h[0]=A,F!==void 0&&(h[1]=F,y!==void 0&&(h[2]=y,i!==void 0&&(h[3]=i)))),h}const C=_;function b(A,F,y,i,h){const p=h??new o(4);return p[0]=A,p[1]=F,p[2]=y,p[3]=i,p}function k(A,F,y){const i=y??new o(4),h=F*.5,p=Math.sin(h);return i[0]=p*A[0],i[1]=p*A[1],i[2]=p*A[2],i[3]=Math.cos(h),i}function M(A,F){const y=F??a.create(3),i=Math.acos(A[3])*2,h=Math.sin(i*.5);return h>De?(y[0]=A[0]/h,y[1]=A[1]/h,y[2]=A[2]/h):(y[0]=1,y[1]=0,y[2]=0),{angle:i,axis:y}}function O(A,F){const y=xe(A,F);return Math.acos(2*y*y-1)}function B(A,F,y){const i=y??new o(4),h=A[0],p=A[1],g=A[2],v=A[3],x=F[0],S=F[1],r=F[2],m=F[3];return i[0]=h*m+v*x+p*r-g*S,i[1]=p*m+v*S+g*x-h*r,i[2]=g*m+v*r+h*S-p*x,i[3]=v*m-h*x-p*S-g*r,i}const T=B;function I(A,F,y){const i=y??new o(4),h=F*.5,p=A[0],g=A[1],v=A[2],x=A[3],S=Math.sin(h),r=Math.cos(h);return i[0]=p*r+x*S,i[1]=g*r+v*S,i[2]=v*r-g*S,i[3]=x*r-p*S,i}function L(A,F,y){const i=y??new o(4),h=F*.5,p=A[0],g=A[1],v=A[2],x=A[3],S=Math.sin(h),r=Math.cos(h);return i[0]=p*r-v*S,i[1]=g*r+x*S,i[2]=v*r+p*S,i[3]=x*r-g*S,i}function H(A,F,y){const i=y??new o(4),h=F*.5,p=A[0],g=A[1],v=A[2],x=A[3],S=Math.sin(h),r=Math.cos(h);return i[0]=p*r+g*S,i[1]=g*r-p*S,i[2]=v*r+x*S,i[3]=x*r-v*S,i}function R(A,F,y,i){const h=i??new o(4),p=A[0],g=A[1],v=A[2],x=A[3];let S=F[0],r=F[1],m=F[2],d=F[3],f=p*S+g*r+v*m+x*d;f<0&&(f=-f,S=-S,r=-r,m=-m,d=-d);let l,u;if(1-f>De){const P=Math.acos(f),w=Math.sin(P);l=Math.sin((1-y)*P)/w,u=Math.sin(y*P)/w}else l=1-y,u=y;return h[0]=l*p+u*S,h[1]=l*g+u*r,h[2]=l*v+u*m,h[3]=l*x+u*d,h}function X(A,F){const y=F??new o(4),i=A[0],h=A[1],p=A[2],g=A[3],v=i*i+h*h+p*p+g*g,x=v?1/v:0;return y[0]=-i*x,y[1]=-h*x,y[2]=-p*x,y[3]=g*x,y}function j(A,F){const y=F??new o(4);return y[0]=-A[0],y[1]=-A[1],y[2]=-A[2],y[3]=A[3],y}function Z(A,F){const y=F??new o(4),i=A[0]+A[5]+A[10];if(i>0){const h=Math.sqrt(i+1);y[3]=.5*h;const p=.5/h;y[0]=(A[6]-A[9])*p,y[1]=(A[8]-A[2])*p,y[2]=(A[1]-A[4])*p}else{let h=0;A[5]>A[0]&&(h=1),A[10]>A[h*4+h]&&(h=2);const p=(h+1)%3,g=(h+2)%3,v=Math.sqrt(A[h*4+h]-A[p*4+p]-A[g*4+g]+1);y[h]=.5*v;const x=.5/v;y[3]=(A[p*4+g]-A[g*4+p])*x,y[p]=(A[p*4+h]+A[h*4+p])*x,y[g]=(A[g*4+h]+A[h*4+g])*x}return y}function se(A,F,y,i,h){const p=h??new o(4),g=A*.5,v=F*.5,x=y*.5,S=Math.sin(g),r=Math.cos(g),m=Math.sin(v),d=Math.cos(v),f=Math.sin(x),l=Math.cos(x);switch(i){case"xyz":p[0]=S*d*l+r*m*f,p[1]=r*m*l-S*d*f,p[2]=r*d*f+S*m*l,p[3]=r*d*l-S*m*f;break;case"xzy":p[0]=S*d*l-r*m*f,p[1]=r*m*l-S*d*f,p[2]=r*d*f+S*m*l,p[3]=r*d*l+S*m*f;break;case"yxz":p[0]=S*d*l+r*m*f,p[1]=r*m*l-S*d*f,p[2]=r*d*f-S*m*l,p[3]=r*d*l+S*m*f;break;case"yzx":p[0]=S*d*l+r*m*f,p[1]=r*m*l+S*d*f,p[2]=r*d*f-S*m*l,p[3]=r*d*l-S*m*f;break;case"zxy":p[0]=S*d*l-r*m*f,p[1]=r*m*l+S*d*f,p[2]=r*d*f+S*m*l,p[3]=r*d*l-S*m*f;break;case"zyx":p[0]=S*d*l-r*m*f,p[1]=r*m*l+S*d*f,p[2]=r*d*f-S*m*l,p[3]=r*d*l+S*m*f;break;default:throw new Error(`Unknown rotation order: ${i}`)}return p}function K(A,F){const y=F??new o(4);return y[0]=A[0],y[1]=A[1],y[2]=A[2],y[3]=A[3],y}const q=K;function W(A,F,y){const i=y??new o(4);return i[0]=A[0]+F[0],i[1]=A[1]+F[1],i[2]=A[2]+F[2],i[3]=A[3]+F[3],i}function oe(A,F,y){const i=y??new o(4);return i[0]=A[0]-F[0],i[1]=A[1]-F[1],i[2]=A[2]-F[2],i[3]=A[3]-F[3],i}const ve=oe;function Y(A,F,y){const i=y??new o(4);return i[0]=A[0]*F,i[1]=A[1]*F,i[2]=A[2]*F,i[3]=A[3]*F,i}const ie=Y;function ue(A,F,y){const i=y??new o(4);return i[0]=A[0]/F,i[1]=A[1]/F,i[2]=A[2]/F,i[3]=A[3]/F,i}function xe(A,F){return A[0]*F[0]+A[1]*F[1]+A[2]*F[2]+A[3]*F[3]}function Ue(A,F,y,i){const h=i??new o(4);return h[0]=A[0]+y*(F[0]-A[0]),h[1]=A[1]+y*(F[1]-A[1]),h[2]=A[2]+y*(F[2]-A[2]),h[3]=A[3]+y*(F[3]-A[3]),h}function Ge(A){const F=A[0],y=A[1],i=A[2],h=A[3];return Math.sqrt(F*F+y*y+i*i+h*h)}const Re=Ge;function Ce(A){const F=A[0],y=A[1],i=A[2],h=A[3];return F*F+y*y+i*i+h*h}const be=Ce;function Se(A,F){const y=F??new o(4),i=A[0],h=A[1],p=A[2],g=A[3],v=Math.sqrt(i*i+h*h+p*p+g*g);return v>1e-5?(y[0]=i/v,y[1]=h/v,y[2]=p/v,y[3]=g/v):(y[0]=0,y[1]=0,y[2]=0,y[3]=1),y}function de(A,F){return Math.abs(A[0]-F[0])<De&&Math.abs(A[1]-F[1])<De&&Math.abs(A[2]-F[2])<De&&Math.abs(A[3]-F[3])<De}function $(A,F){return A[0]===F[0]&&A[1]===F[1]&&A[2]===F[2]&&A[3]===F[3]}function ne(A){const F=A??new o(4);return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}const ae=a.create(),Le=a.create(),ye=a.create();function Be(A,F,y){const i=y??new o(4),h=a.dot(A,F);return h<-.999999?(a.cross(Le,A,ae),a.len(ae)<1e-6&&a.cross(ye,A,ae),a.normalize(ae,ae),k(ae,Math.PI,i),i):h>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(A,F,ae),i[0]=ae[0],i[1]=ae[1],i[2]=ae[2],i[3]=1+h,Se(i,i))}const me=new o(4),Me=new o(4);function qe(A,F,y,i,h,p){const g=p??new o(4);return R(A,i,h,me),R(F,y,h,Me),R(me,Me,2*h*(1-h),g),g}return{create:_,fromValues:C,set:b,fromAxisAngle:k,toAxisAngle:M,angle:O,multiply:B,mul:T,rotateX:I,rotateY:L,rotateZ:H,slerp:R,inverse:X,conjugate:j,fromMat:Z,fromEuler:se,copy:K,clone:q,add:W,subtract:oe,sub:ve,mulScalar:Y,scale:ie,divScalar:ue,dot:xe,lerp:Ue,length:Ge,len:Re,lengthSq:Ce,lenSq:be,normalize:Se,equalsApproximately:de,equals:$,identity:ne,rotationTo:Be,sqlerp:qe}}const Xr=new Map;function Dl(o){let a=Xr.get(o);return a||(a=Al(o),Xr.set(o,a)),a}function zl(o){function a(y,i,h,p){const g=new o(4);return y!==void 0&&(g[0]=y,i!==void 0&&(g[1]=i,h!==void 0&&(g[2]=h,p!==void 0&&(g[3]=p)))),g}const _=a;function C(y,i,h,p,g){const v=g??new o(4);return v[0]=y,v[1]=i,v[2]=h,v[3]=p,v}function b(y,i){const h=i??new o(4);return h[0]=Math.ceil(y[0]),h[1]=Math.ceil(y[1]),h[2]=Math.ceil(y[2]),h[3]=Math.ceil(y[3]),h}function k(y,i){const h=i??new o(4);return h[0]=Math.floor(y[0]),h[1]=Math.floor(y[1]),h[2]=Math.floor(y[2]),h[3]=Math.floor(y[3]),h}function M(y,i){const h=i??new o(4);return h[0]=Math.round(y[0]),h[1]=Math.round(y[1]),h[2]=Math.round(y[2]),h[3]=Math.round(y[3]),h}function O(y,i=0,h=1,p){const g=p??new o(4);return g[0]=Math.min(h,Math.max(i,y[0])),g[1]=Math.min(h,Math.max(i,y[1])),g[2]=Math.min(h,Math.max(i,y[2])),g[3]=Math.min(h,Math.max(i,y[3])),g}function B(y,i,h){const p=h??new o(4);return p[0]=y[0]+i[0],p[1]=y[1]+i[1],p[2]=y[2]+i[2],p[3]=y[3]+i[3],p}function T(y,i,h,p){const g=p??new o(4);return g[0]=y[0]+i[0]*h,g[1]=y[1]+i[1]*h,g[2]=y[2]+i[2]*h,g[3]=y[3]+i[3]*h,g}function I(y,i,h){const p=h??new o(4);return p[0]=y[0]-i[0],p[1]=y[1]-i[1],p[2]=y[2]-i[2],p[3]=y[3]-i[3],p}const L=I;function H(y,i){return Math.abs(y[0]-i[0])<De&&Math.abs(y[1]-i[1])<De&&Math.abs(y[2]-i[2])<De&&Math.abs(y[3]-i[3])<De}function R(y,i){return y[0]===i[0]&&y[1]===i[1]&&y[2]===i[2]&&y[3]===i[3]}function X(y,i,h,p){const g=p??new o(4);return g[0]=y[0]+h*(i[0]-y[0]),g[1]=y[1]+h*(i[1]-y[1]),g[2]=y[2]+h*(i[2]-y[2]),g[3]=y[3]+h*(i[3]-y[3]),g}function j(y,i,h,p){const g=p??new o(4);return g[0]=y[0]+h[0]*(i[0]-y[0]),g[1]=y[1]+h[1]*(i[1]-y[1]),g[2]=y[2]+h[2]*(i[2]-y[2]),g[3]=y[3]+h[3]*(i[3]-y[3]),g}function Z(y,i,h){const p=h??new o(4);return p[0]=Math.max(y[0],i[0]),p[1]=Math.max(y[1],i[1]),p[2]=Math.max(y[2],i[2]),p[3]=Math.max(y[3],i[3]),p}function se(y,i,h){const p=h??new o(4);return p[0]=Math.min(y[0],i[0]),p[1]=Math.min(y[1],i[1]),p[2]=Math.min(y[2],i[2]),p[3]=Math.min(y[3],i[3]),p}function K(y,i,h){const p=h??new o(4);return p[0]=y[0]*i,p[1]=y[1]*i,p[2]=y[2]*i,p[3]=y[3]*i,p}const q=K;function W(y,i,h){const p=h??new o(4);return p[0]=y[0]/i,p[1]=y[1]/i,p[2]=y[2]/i,p[3]=y[3]/i,p}function oe(y,i){const h=i??new o(4);return h[0]=1/y[0],h[1]=1/y[1],h[2]=1/y[2],h[3]=1/y[3],h}const ve=oe;function Y(y,i){return y[0]*i[0]+y[1]*i[1]+y[2]*i[2]+y[3]*i[3]}function ie(y){const i=y[0],h=y[1],p=y[2],g=y[3];return Math.sqrt(i*i+h*h+p*p+g*g)}const ue=ie;function xe(y){const i=y[0],h=y[1],p=y[2],g=y[3];return i*i+h*h+p*p+g*g}const Ue=xe;function Ge(y,i){const h=y[0]-i[0],p=y[1]-i[1],g=y[2]-i[2],v=y[3]-i[3];return Math.sqrt(h*h+p*p+g*g+v*v)}const Re=Ge;function Ce(y,i){const h=y[0]-i[0],p=y[1]-i[1],g=y[2]-i[2],v=y[3]-i[3];return h*h+p*p+g*g+v*v}const be=Ce;function Se(y,i){const h=i??new o(4),p=y[0],g=y[1],v=y[2],x=y[3],S=Math.sqrt(p*p+g*g+v*v+x*x);return S>1e-5?(h[0]=p/S,h[1]=g/S,h[2]=v/S,h[3]=x/S):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function de(y,i){const h=i??new o(4);return h[0]=-y[0],h[1]=-y[1],h[2]=-y[2],h[3]=-y[3],h}function $(y,i){const h=i??new o(4);return h[0]=y[0],h[1]=y[1],h[2]=y[2],h[3]=y[3],h}const ne=$;function ae(y,i,h){const p=h??new o(4);return p[0]=y[0]*i[0],p[1]=y[1]*i[1],p[2]=y[2]*i[2],p[3]=y[3]*i[3],p}const Le=ae;function ye(y,i,h){const p=h??new o(4);return p[0]=y[0]/i[0],p[1]=y[1]/i[1],p[2]=y[2]/i[2],p[3]=y[3]/i[3],p}const Be=ye;function me(y){const i=y??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Me(y,i,h){const p=h??new o(4),g=y[0],v=y[1],x=y[2],S=y[3];return p[0]=i[0]*g+i[4]*v+i[8]*x+i[12]*S,p[1]=i[1]*g+i[5]*v+i[9]*x+i[13]*S,p[2]=i[2]*g+i[6]*v+i[10]*x+i[14]*S,p[3]=i[3]*g+i[7]*v+i[11]*x+i[15]*S,p}function qe(y,i,h){const p=h??new o(4);return Se(y,p),K(p,i,p)}function A(y,i,h){const p=h??new o(4);return ie(y)>i?qe(y,i,p):$(y,p)}function F(y,i,h){const p=h??new o(4);return X(y,i,.5,p)}return{create:a,fromValues:_,set:C,ceil:b,floor:k,round:M,clamp:O,add:B,addScaled:T,subtract:I,sub:L,equalsApproximately:H,equals:R,lerp:X,lerpV:j,max:Z,min:se,mulScalar:K,scale:q,divScalar:W,inverse:oe,invert:ve,dot:Y,length:ie,len:ue,lengthSq:xe,lenSq:Ue,distance:Ge,dist:Re,distanceSq:Ce,distSq:be,normalize:Se,negate:de,copy:$,clone:ne,multiply:ae,mul:Le,divide:ye,div:Be,zero:me,transformMat4:Me,setLength:qe,truncate:A,midpoint:F}}const Qr=new Map;function Ll(o){let a=Qr.get(o);return a||(a=zl(o),Qr.set(o,a)),a}function Fs(o,a,_,C,b,k){return{mat3:Ml(o),mat4:Tl(a),quat:Dl(_),vec2:di(C),vec3:ss(b),vec4:Ll(k)}}const{mat3:Pt,mat4:dt,quat:ht,vec2:Jr,vec3:G,vec4:Yc}=Fs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Fs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Fs(Sl,Array,Array,Array,Array,Array);const ei=document.querySelector("#log");let bt=null,ln=null;function pi(){if(bt)return bt;bt=document.createElement("div"),bt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",bt.appendChild(o),ln=document.createElement("div"),ln.className="ply-spinner-label",bt.appendChild(ln),bt.style.display="none",document.body.appendChild(bt),bt}function Ns(o){pi(),ln&&o&&(ln.textContent=o),bt&&(bt.style.opacity="1",bt.style.display="flex")}function Ut(o){pi(),ln&&(ln.textContent=o)}function Ln(){if(!bt)return;const o=bt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function hi(o,a){if(!ei)return;const _=document.createElement("p");_.innerText=o,a&&Object.assign(_.style,a),ei.appendChild(_)}async function Et(o){console.log(o),hi(o)}async function Gl(o){console.error(o),hi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let fi;function _i(){fi=performance.now()}function ti(o){const a=performance.now()-fi;Et(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Il(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function In(o){return o+3&-4}const Ul=2,Rl=3,Vl=5,Ol=6,Gn=7,es=8,zs=9,Ls=10;function Fl(o){const a=new TextDecoder("ascii"),_=a.decode(new Uint8Array(o,0,4));if(_!=="NAT2")throw new Error(`NAT2 bad magic: '${_}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const C=new DataView(o),b=4,k=C.getUint32(b+0,!0),M=C.getUint32(b+4,!0),O=C.getUint32(b+8,!0),B=C.getUint32(b+12,!0),T=C.getUint32(b+16,!0),I=C.getFloat32(b+20,!0),L=C.getUint32(b+24,!0),H=C.getUint32(b+28,!0),R=C.getFloat32(b+32,!0),X=C.getFloat32(b+36,!0),j=C.getFloat32(b+40,!0),Z=C.getUint32(b+44,!0),se=C.getFloat32(b+48,!0),K=C.getFloat32(b+52,!0),q=C.getUint32(b+56,!0),W=C.getUint32(b+60,!0),oe=W>0?W:1;if(H===Vl||H===Ol)throw new Error(`NAT2: paired-RVQ format=${H} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ve=H===zs||H===Ls;if(H!==Ul&&H!==Rl&&H!==Gn&&H!==es&&!ve)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${H}`);if(k%4!==0||Z%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${Z}`);let Y=b+64;const ie=(q+1)*4,ue=new Uint32Array(o.slice(Y,Y+ie));Y+=ie;let xe;if(oe>1){const $=(oe+1)*4;if(Y+$>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${$} from ${Y})`);xe=new Uint32Array(o.slice(Y,Y+$)),Y+=$}else xe=new Uint32Array([0,k]);let Ue=0;for(let $=0;$<oe;$++){const ne=xe[$+1]-xe[$];ne>Ue&&(Ue=ne)}if(ve){const $=T*6*4;if(Y+$>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${$} more bytes from offset ${Y}, have ${o.byteLength-Y}`);const ne=new Float32Array(o.slice(Y,Y+$));Y+=$;const ae=k/4,Le=Z/4,ye=ae*Le*16,Be=o.byteLength-Y;if(Be<ye)throw new Error(`NAT2 probe atlas truncated: need ${ye} bytes for ${k}x${Z}, have ${Be}`);const me=new Uint8Array(o.slice(Y,Y+ye));return{width:k,height:M,channels:O,kernel_type:B,num_rects:T,uv_extent:I,sb_number:L,format:H,sh_bias:R,res_bias:X,compact_mult:j,layer_h:Z,atlas_scale:se,atlas_offset:K,n_layers:q,n_cols:oe,layer_cuts:ue,column_cuts:xe,slice_width:Ue,rects_expanded:ne,atlas_bytes:me,probe_mode:1}}const Ge=T*4*4;if(Y+Ge>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ge} more bytes from offset ${Y}, have ${o.byteLength-Y}`);const Re=new Float32Array(o.slice(Y,Y+Ge));Y+=Ge;const Ce=new Float32Array(T*5);for(let $=0;$<T;$++){const ne=Re[$*4+0],ae=Re[$*4+1],Le=Re[$*4+2],ye=Re[$*4+3];let Be=0;for(let F=1;F<=q&&ue[F]<=ae;F++)Be=F;let me=0;for(let F=1;F<=oe&&xe[F]<=ne;F++)me=F;const Me=ae-ue[Be],qe=ne-xe[me],A=me*q+Be;Ce[$*5+0]=qe,Ce[$*5+1]=Me,Ce[$*5+2]=Le,Ce[$*5+3]=ye,Ce[$*5+4]=A}let be;const de=k/4*16;if(H===Gn||H===es){if(Y+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const $=H===Gn?"BCCB":"ACCB",ne=a.decode(new Uint8Array(o,Y,4));if(ne!==$)throw new Error(`NAT2 typeD bad sub-magic: expected '${$}' got '${ne}'`);const ae=C.getUint32(Y+4,!0),Le=C.getUint32(Y+8,!0),ye=C.getUint32(Y+12,!0),Be=C.getUint32(Y+16,!0),me=C.getUint32(Y+20,!0);if(ae!==1)throw new Error(`NAT2 BCCB unsupported version ${ae}`);if(ye!==M/4||Be!==k/4||me!==ye*Be)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${Be}×${ye} (${me} blocks)`);Y+=24;const Me=Le*16;if(Y+Me>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Me}, have ${o.byteLength-Y})`);const qe=new Uint8Array(o,Y,Me);Y+=Me;const A=me*2;if(Y+A>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${A}, have ${o.byteLength-Y})`);const F=new Uint16Array(o.slice(Y,Y+A));Y+=A;const y=new Uint8Array(me*16);for(let i=0;i<me;i++){const h=F[i]*16;y.set(qe.subarray(h,h+16),i*16)}be=y}else{let $=0;for(let ne=0;ne<q;ne++){const ae=ue[ne+1]-ue[ne];if(ae%4!==0)throw new Error(`NAT2 BC7 layer ${ne} rows ${ae} not 4-aligned`);$+=ae/4*de}if(Y+$>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${$} more bytes from offset ${Y}, have ${o.byteLength-Y}`);be=new Uint8Array(o.slice(Y,Y+$))}return{width:k,height:M,channels:O,kernel_type:B,num_rects:T,uv_extent:I,sb_number:L,format:H,sh_bias:R,res_bias:X,compact_mult:j,layer_h:Z,atlas_scale:se,atlas_offset:K,n_layers:q,n_cols:oe,layer_cuts:ue,column_cuts:xe,slice_width:Ue,rects_expanded:Ce,atlas_bytes:be}}const Nl=32;function $l(o,a,_){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let C,b,k,M;if(a.format===2||a.format===Gn||a.format===zs){if(!o.features.has("texture-compression-bc"))return Et(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===zs?"BC7 atlas (proberes: shared probe texture)":a.format===Gn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:C,view:b,sampler:k}=ni(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===es||a.format===Ls){if(!o.features.has("texture-compression-astc"))return Et(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===Ls?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===es?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:C,view:b,sampler:k}=ni(o,a,"astc-4x4-unorm",M)}else return Et(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:O}=a,B=o.createBuffer({label:"atlas rects (5-stride)",size:In(O.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(B,0,O);const T=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return mi(o,T,a,_),{texture:C,view:b,sampler:k,rectsBuffer:B,texParamsBuffer:T,meta:a}}function ni(o,a,_,C){const{width:b,layer_h:k,n_layers:M,n_cols:O,layer_cuts:B,column_cuts:T,slice_width:I,atlas_bytes:L}=a,R=b/4*16,X=o.limits.maxTextureDimension2D;if(k>X||I>X)throw new Error(`⚠️  atlas slice dims ${I}x${k} exceed maxTextureDimension2D=${X}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const j=O*M;if(j>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${O} cols × ${M} layers = ${j} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Z=o.createTexture({label:C,size:{width:I,height:k,depthOrArrayLayers:j},mipLevelCount:1,sampleCount:1,dimension:"2d",format:_,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let q=0;q<O;q++){const W=T[q]/4,oe=(T[q+1]-T[q])/4;for(let ve=0;ve<M;ve++){const Y=B[ve]/4,ie=(B[ve+1]-B[ve])/4,ue=q*M+ve,xe=Y*R+W*16;o.queue.writeTexture({texture:Z,mipLevel:0,origin:{x:0,y:0,z:ue},aspect:"all"},L,{offset:xe,bytesPerRow:R,rowsPerImage:ie},{width:oe*4,height:ie*4,depthOrArrayLayers:1})}}const se=Z.createView({label:`${C} view`,dimension:"2d-array"}),K=o.createSampler({label:`${C} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:Z,view:se,sampler:K}}function mi(o,a,_,C){const b=new ArrayBuffer(32),k=new Uint32Array(b),M=new Float32Array(b);k[0]=C?1:0,M[1]=_.atlas_scale,M[2]=_.atlas_offset,M[3]=_.res_bias,k[4]=_.probe_mode?1:0,o.queue.writeBuffer(a,0,b)}async function Gs(o,a){Et(`loading ply file from File... : ${o.name}`),Ns("downloading PLY...");const _=await o.arrayBuffer();try{return await vi(_,a)}finally{Ln()}}async function ql(o,a){Et(`loading ply file from URL... : ${o}`),Ns("downloading PLY...");try{_i();const _=new URL(o,self.location.href).href;return await vi({url:_},a)}finally{Ln()}}async function vi(o,a){return new Promise((_,C)=>{const b=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});b.onmessage=k=>{var O,B,T,I,L,H,R,X,j,Z,se,K;const M=k.data;if((M==null?void 0:M.type)==="error"){Gl(`PLY worker error: ${M.message??"unknown error"}`),b.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const q=M.totalBytes,W=M.loadedBytes/(1024*1024),oe=q?q/(1024*1024):void 0,ve=(M.speedBps??0)/(1024*1024),Y=q?Math.min(99,Math.floor(M.loadedBytes/q*100)):void 0,ie=oe?`total ${oe.toFixed(1)} MB`:"total -- MB",ue=oe&&Y!==void 0?`${W.toFixed(1)} MB downloaded (${Y}%)`:`${W.toFixed(1)} MB downloaded`,xe=`${ve.toFixed(2)} MB/s`;Ut(`downloading PLY ...
${ie}, ${ue}
${xe}`);return}else if((M==null?void 0:M.type)==="fetched"){Et(`💾 Fetched (${M.byteLength} bytes)`),ti("Download"),Ut("parsing PLY..."),_i();return}else if((M==null?void 0:M.type)==="parse_progress"){const q=M.total??0,W=M.read??0,oe=q>0?Math.floor(W/q*100):0;Ut(`parsing PLY ...
${W}/${q} surfels (${oe}%)`);return}else if((M==null?void 0:M.type)==="done"){const q=M.num_points,W=M.K,oe=M.feature_mode??0,ve=M.sh_bias,Y=M.kernel_type,ie=M.surfelBuffer,ue=M.svParamsBuffer;Et(`🪐 Total surfels: ${q}, mode=${oe===1?"SB":"SV"}, K=${W}, sh_bias=${ve}, kernel_type=${Y}`);const Ue=a.createBuffer({label:"surfel input buffer",size:In(q*Nl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(Ue,0,ie);const Ge=ue.byteLength>0?ue.byteLength:16,Re=a.createBuffer({label:oe===1?"color_params buffer (SB)":"color_params buffer (SV)",size:In(Ge),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ue.byteLength>0&&a.queue.writeBuffer(Re,0,ue),b.terminate(),ti("Parse"),_({num_points:q,K:W,feature_mode:oe,sh_bias:ve,kernel_type:Y,surfel_buffer:Ue,surfel_data:new Float32Array(ie),sv_params_buffer:Re,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((B=(O=M.bbox)==null?void 0:O.min)==null?void 0:B[0])??-1)+(((I=(T=M.bbox)==null?void 0:T.max)==null?void 0:I[0])??1))/2,((((H=(L=M.bbox)==null?void 0:L.min)==null?void 0:H[1])??-1)+(((X=(R=M.bbox)==null?void 0:R.max)==null?void 0:X[1])??1))/2,((((Z=(j=M.bbox)==null?void 0:j.min)==null?void 0:Z[2])??-1)+(((K=(se=M.bbox)==null?void 0:se.max)==null?void 0:K[2])??1))/2]})}},b.onerror=k=>{b.terminate(),C(k)},o instanceof ArrayBuffer?(Ut("parsing PLY..."),b.postMessage({type:"start",plyBuffer:o},[o])):b.postMessage({type:"start_url",url:o.url})})}var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Is={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(_,C){C(a)})(Wl,function(_){class C{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class b{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class O extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class B extends k{constructor(e,t){super(e),this.expanded=t}}class T extends k{constructor(e,t){super(e),this.index=t}}function I(n){return n}function L(n){return n==null}function H(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function R(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const X={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class j{static alreadyDisposed(){return new j({type:"alreadydisposed"})}static notBindable(){return new j({type:"notbindable"})}static propertyNotFound(e){return new j({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new j({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=X[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Z{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Z.isBindable(s))throw j.notBindable();if(!(e in s))throw j.propertyNotFound(e);s[e]=t}}class se extends b{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class K{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const q="tp";function W(n){return(t,s)=>[q,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function oe(n,e){return t=>e(n(t))}function ve(n){return n.rawValue}function Y(n,e){n.emitter.on("change",oe(ve,e)),e(n.rawValue)}function ie(n,e,t){Y(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function xe(n,e){return t=>{ue(n,e,t)}}function Ue(n,e){Y(n,t=>{e.textContent=t??""})}const Ge=W("btn");class Re{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ge("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Ce{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Re(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class be{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,E)=>c===E,this.emitter=new K,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,E=this.rawValue_;this.equals_(E,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:E,rawValue:c,sender:this}))}}class Se{constructor(e){this.emitter=new K,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function de(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Se(n):new be(n,e)}class ${constructor(e){this.emitter=new K,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:de(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new $(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ne(n,e){const s=Object.keys(e).reduce((c,E)=>{if(c===void 0)return;const z=e[E],ee=z(n[E]);return ee.succeeded?Object.assign(Object.assign({},c),{[E]:ee.value}):void 0},{});return s}function ae(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Le(n){return n===null?!1:typeof n=="object"}function ye(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Be(n){return{custom:e=>ye(e)(n),boolean:ye(e=>typeof e=="boolean"?e:void 0)(n),number:ye(e=>typeof e=="number"?e:void 0)(n),string:ye(e=>typeof e=="string"?e:void 0)(n),function:ye(e=>typeof e=="function"?e:void 0)(n),constant:e=>ye(t=>t===e?e:void 0)(n),raw:ye(e=>e)(n),object:e=>ye(t=>{if(Le(t))return ne(t,e)})(n),array:e=>ye(t=>{if(Array.isArray(t))return ae(t,e)})(n)}}const me={optional:Be(!0),required:Be(!1)};function Me(n,e){const t=me.required.object(e)(n);return t.succeeded?t.value:void 0}function qe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function A(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class F{constructor(e){this.value_=e}static create(e){return[new F(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const y=W("");function i(n,e){return xe(n,y(void 0,e))}class h extends ${constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=F.create(de(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const E=e??{};return new h($.createCore({disabled:(t=E.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=E.hidden)!==null&&s!==void 0?s:!1,parent:(c=E.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){Y(this.globalDisabled_,i(e,"disabled")),ie(this,"hidden",i(e,"hidden"))}bindDisabled(e){Y(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){Y(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function p(){return["veryfirst","first","last","verylast"]}const g=W(""),v={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class x{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{p().forEach(s=>{t.classList.remove(g(void 0,v[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(g(void 0,v[s]))})}),this.viewProps.handleDispose(()=>{A(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){qe({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function f(){return globalThis}function l(){return f().document}function u(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const P={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function w(n,e){const t=n.createElementNS(S,"svg");return t.innerHTML=P[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function V(n){n.parentElement&&n.parentElement.removeChild(n)}function N(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function re(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function te(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const J=W("lbl");function fe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,E)=>{E>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class ce{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(J()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(J("l")),ie(t.props,"label",E=>{L(E)?this.element.classList.add(J(void 0,"nol")):(this.element.classList.remove(J(void 0,"nol")),re(s),s.appendChild(fe(e,E)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(J("v")),this.element.appendChild(c),this.valueElement=c}}class pe extends x{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new ce(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const _e={id:"button",type:"blade",accept(n){const e=me,t=Me(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new pe(n.document,{blade:n.blade,props:$.fromObject({label:n.params.label}),valueController:new Ce(n.document,{props:$.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof pe)||!(n.controller.valueController instanceof Ce)?null:new se(n.controller)}};class Ae extends x{constructor(e){super(e),this.value=e.value}}function Te(){return new $({positions:de([],{equals:H})})}class Ee extends ${constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=$.createCore(t);return new Ee(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!L(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ie(this,"expanded",s),ie(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function je(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function Xe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),L(n.get("expandedHeight"))){const t=je(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class We extends b{constructor(e,t){super(e),this.rackApi_=t}}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Qe(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class it{constructor(e){this.emitter=new K,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw j.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(E=>{this.cache_.add(E)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class tt extends b{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Ne extends pe{constructor(e,t){super(e,t),this.binding=t.binding}}class nt extends b{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new O(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends pe{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof wt?n.apiSet_:n instanceof We?n.rackApi_.apiSet_:null}function st(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw j.shouldNeverHappen();return t}function gt(n,e,t){if(!Z.isBindable(n))throw j.notBindable();return new Z(n,e,t)}class wt extends b{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new K,this.apiSet_=new it(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>st(this.apiSet_,e))}addInput(e,t,s){const c=s??{},E=this.controller_.view.element.ownerDocument,z=this.pool_.createInput(E,gt(e,t,c.presetKey),c),ee=new tt(z);return this.add(ee,c.index)}addMonitor(e,t,s){const c=s??{},E=this.controller_.view.element.ownerDocument,z=this.pool_.createMonitor(E,gt(e,t),c),ee=new nt(z);return this.add(ee,c.index)}addFolder(e){return rt(this,e)}addButton(e){return et(this,e)}addSeparator(e){return Qe(this,e)}addTab(e){return ot(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=st(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Ne){const s=st(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ae){const s=st(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw j.shouldNeverHappen();const t=st(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new O(t,s.target.read(),s.target.presetKey)})}}class kt extends We{constructor(e,t){super(e,new wt(e.rackController,t)),this.emitter_=new K,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new B(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class _t extends x{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class At{constructor(e,t){const s=W(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Rt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ne&&s.binding===e)return s}return null}function Vt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function Kt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ae&&s.value===e)return s}return null}function Mt(n){return n instanceof Ye?n.rack:n instanceof _t?n.rackController.rack:null}function Yt(n){const e=Mt(n);return e?e.bcSet_:null}class Zt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new K,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new it(Yt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),R(e,"parent")?e.parent=this:(e.parent_=this,qe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){R(e,"parent")?e.parent=null:(e.parent_=null,qe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Ne)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Mt(s);if(c){const E=c.emitter;E.on("layout",this.onDescendantLayout_),E.on("inputchange",this.onDescendantInputChange_),E.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Ne)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Mt(s);if(c){const E=c.emitter;E.off("layout",this.onDescendantLayout_),E.off("inputchange",this.onDescendantInputChange_),E.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const E=[];c===t&&(E.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&E.push("veryfirst")),c===s&&(E.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&E.push("verylast")),c.blade.set("positions",E)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Rt(this.find(Ne),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Vt(this.find(Ke),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Kt(this.find(Ae),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ye extends x{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new At(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Zt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&V(e.bladeController.view.element)}}const gn=W("cnt");class wn{constructor(e,t){var s;this.className_=W((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),gn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ie(this.foldable_,"completed",xe(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ie(t.props,"title",Pe=>{L(Pe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const E=e.createElement("div");E.classList.add(this.className_("i")),this.element.appendChild(E);const z=e.createElement("div");z.classList.add(this.className_("t")),Ue(t.props.value("title"),z),this.buttonElement.appendChild(z),this.titleElement=z;const ee=e.createElement("div");ee.classList.add(this.className_("m")),this.buttonElement.appendChild(ee);const we=t.containerElement;we.classList.add(this.className_("c")),this.element.appendChild(we),this.containerElement=we}}class cn extends _t{constructor(e,t){var s;const c=Ee.create((s=t.expanded)!==null&&s!==void 0?s:!0),E=new Ye(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:E,view:new wn(e,{containerElement:E.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const un={id:"folder",type:"blade",accept(n){const e=me,t=Me(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new cn(n.document,{blade:n.blade,expanded:n.params.expanded,props:$.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof cn?new kt(n.controller,n.pool):null}};class St extends Ae{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new ce(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Q extends b{}const he=W("spr");class le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(he()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(he("r")),this.element.appendChild(s)}}class ze extends x{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new le(e,{viewProps:t.viewProps})}))}}const Ve={id:"separator",type:"blade",accept(n){const t=Me(n,{view:me.required.constant("separator")});return t?{params:t}:null},controller(n){return new ze(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ze?new Q(n.controller):null}},ge=W("tbi");class ke{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ge()),t.viewProps.bindClassModifiers(this.element),ie(t.props,"selected",E=>{E?this.element.classList.add(ge(void 0,"sel")):this.element.classList.remove(ge(void 0,"sel"))});const s=e.createElement("button");s.classList.add(ge("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(ge("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class $e{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ke(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ze{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new $e(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ye(e,{blade:Te(),viewProps:h.create()}),this.props=t.props,ie(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class at{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class mt extends We{constructor(e,t){super(e,new wt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new K,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw j.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ze(t,{itemProps:$.fromObject({selected:!1,title:e.title}),props:$.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw j.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw j.shouldNeverHappen();const s=new at(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw j.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new T(this,e.rawValue)})}}const Un=-1;class Rn{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=de(!0),this.selectedIndex=de(Un),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Un,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Ot=W("tab");class is{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ot(),gn()),t.viewProps.bindClassModifiers(this.element),Y(t.empty,xe(this.element,Ot(void 0,"nop")));const s=e.createElement("div");s.classList.add(Ot("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Ot("i")),this.element.appendChild(c);const E=t.contentsElement;E.classList.add(Ot("c")),this.element.appendChild(E),this.contentsElement=E}}class xn extends _t{constructor(e,t){const s=new Ye(e,{blade:t.blade,viewProps:t.viewProps}),c=new Rn;super({blade:t.blade,rackController:s,view:new is(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new it(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;V(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Vn={id:"tab",type:"blade",accept(n){const e=me,t=Me(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new xn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ze(n.document,{itemProps:$.fromObject({selected:!1,title:t.title}),props:$.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof xn?new mt(n.controller,n.pool):null}};function os(n,e){const t=n.accept(e.params);if(!t)return null;const s=me.optional.boolean(e.params.disabled).value,c=me.optional.boolean(e.params.hidden).value;return n.controller({blade:Te(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class On{constructor(){this.disabled=!1,this.emitter=new K}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class as{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new K,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Fn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new K,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function ft(n,e){for(;n.length<e;)n.push(void 0)}function Xt(n){const e=[];return ft(e,n),de(e)}function dn(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Dt(n,e){const t=[...dn(n),e];return t.length>n.length?t.splice(0,t.length-n.length):ft(t,n.length),t}class pn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new K,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Dt(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Bt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Ct(n,e){if(n instanceof e)return n;if(n instanceof Bt){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Tt{constructor(e){this.values=$.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class yn{constructor(e){this.values=$.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class qs{constructor(e){this.values=$.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return L(s)||(c=Math.max(c,s)),L(t)||(c=Math.min(c,t)),c}}class Nn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const ls=W("lst");class Ti{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(ls()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(ls("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(ls("m")),c.appendChild(w(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ie(this.props_,"options",E=>{N(this.selectElement),E.forEach(z=>{const ee=e.createElement("option");ee.textContent=z.text,this.selectElement.appendChild(ee)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Pn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ws=W("pop");class Ai{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ws()),t.viewProps.bindClassModifiers(this.element),Y(t.shows,xe(this.element,Ws(void 0,"v")))}}class js{constructor(e,t){this.shows=de(!1),this.viewProps=t.viewProps,this.view=new Ai(e,{shows:this.shows,viewProps:this.viewProps})}}const Hs=W("txt");class Di{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Hs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class $n{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Di(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);L(c)||(this.value.rawValue=c),this.view.refresh()}}function zi(n){return String(n)}function Ks(n){return n==="false"?!1:!!n}function Ys(n){return zi(n)}class Li{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Gi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ii{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Gi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ui={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ri{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ui[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function cs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Sn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Cn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Oi(n,e){const t=Cn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Cn(n,e);return c===""?"":s+c}function us(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Oi(n,e);return s===""?"":t+s}function Zs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Vi(n,e);return e+=s.length,s===""?"":s+Cn(n,e)}function Fi(n,e){const t=Zs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Cn(n,e);return e+=c.length,t+s+c+us(n,e)}function Ni(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Cn(n,e);return e+=s.length,s===""?"":t+s+us(n,e)}function $i(n,e){const t=Zs(n,e);return e+=t.length,t===""?"":t+us(n,e)}const qi=cs([Fi,Ni,$i]);function Wi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Wi(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Hi(n,e);return s===""?"":t+s}function Yi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Yi(n,e);return s===""?"":t+s}const Xi=cs([ji,Ki,Zi]),Qi=cs([Xi,qi]);function Ji(n,e){const t=Qi(n,e);return e+=t.length,t===""?null:{evaluable:new Li(t),cursor:e}}function eo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Qs(n,e);if(!s)return null;e=s.cursor,e+=Sn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function to(n,e){var t;return(t=Ji(n,e))!==null&&t!==void 0?t:eo(n,e)}function Xs(n,e){const t=to(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Xs(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ri(s,c.evaluable)}):null}function no(n,e,t){t+=Sn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Sn(e,t).length,{cursor:t,operator:s}):null}function so(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let E=c.evaluable;for(;;){const z=no(e,t,s);if(!z)break;s=z.cursor;const ee=n(t,s);if(!ee)return null;s=ee.cursor,E=new Ii(z.operator,E,ee.evaluable)}return E?{cursor:s,evaluable:E}:null}}const ro=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>so(n,e),Xs);function Qs(n,e){return e+=Sn(n,e).length,ro(n,e)}function io(n){const e=Qs(n,0);return!e||e.cursor+Sn(n,e.cursor).length!==n.length?null:e.evaluable}function zt(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Js(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=zt(n);if(!L(e))return e}return 0}function oo(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ao=pt(0);function qn(n){return ao(n)+"%"}function er(n){return String(n)}function ds(n){return n}function En({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function E(z){c||(c=!0,z(),c=!1)}n.emitter.on("change",z=>{E(()=>{e.setRawValue(t(n,e),z.options)})}),e.emitter.on("change",z=>{E(()=>{n.setRawValue(s(n,e),z.options)}),E(()=>{e.setRawValue(t(n,e),z.options)})}),E(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function vt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function kn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Lt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function lo(n){return n==="ArrowUp"||n==="ArrowDown"}function tr(n){return lo(n)||n==="ArrowLeft"||n==="ArrowRight"}function ps(n,e){var t,s;const c=e.ownerDocument.defaultView,E=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+E.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+E.top)}}class Qt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new K,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ps(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ps(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ps(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Je(n,e,t,s,c){const E=(n-e)/(t-e);return s+E*(c-s)}function nr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function lt(n,e,t){return Math.min(Math.max(n,e),t)}function sr(n,e){return(n%e+e)%e}const xt=W("txt");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(xt(),xt(void 0,"num")),t.arrayPosition&&this.element.classList.add(xt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(xt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xt()),this.inputElement.classList.add(xt("i"));const c=e.createElement("div");c.classList.add(xt("k")),this.element.appendChild(c),this.knobElement=c;const E=e.createElementNS(S,"svg");E.classList.add(xt("g")),this.knobElement.appendChild(E);const z=e.createElementNS(S,"path");z.classList.add(xt("gb")),E.appendChild(z),this.guideBodyElem_=z;const ee=e.createElementNS(S,"path");ee.classList.add(xt("gh")),E.appendChild(ee),this.guideHeadElem_=ee;const we=e.createElement("div");we.classList.add(W("tt")()),this.knobElement.appendChild(we),this.tooltipElem_=we,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(xt(void 0,"drg"));return}this.element.classList.add(xt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=lt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const E=this.props_.get("formatter");this.tooltipElem_.textContent=E(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Mn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=de(null),this.view=new co(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Qt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),E=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let z=e;return c!==void 0&&(z=Math.max(z,c)),E!==void 0&&(z=Math.min(z,E)),z}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);L(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=vt(this.baseStep_,kn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){vt(this.baseStep_,kn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const hs=W("sld");class uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(hs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(hs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(hs("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=lt(Je(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class po{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new uo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Je(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=vt(this.baseStep_,Lt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){vt(this.baseStep_,Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fs=W("sldtxt");class ho{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fs());const s=e.createElement("div");s.classList.add(fs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(fs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class _s{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new po(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Mn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new ho(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Bn(n,e){n.write(e)}function Wn(n){const e=me;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function rr(n){if(n==="inline"||n==="popup")return n}function Ft(n){const e=me;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ir(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ms(n){return L(n)?null:new yn(ir(n))}function fo(n){const e=n?Ct(n,Nn):null;return e?e.step:null}function jn(n,e){const t=n&&Ct(n,Nn);return t?nr(t.step):Math.max(nr(e),2)}function hn(n){const e=fo(n);return e??1}function fn(n,e){var t;const s=n&&Ct(n,Nn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Hn=W("ckb");class _o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Hn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Hn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Hn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const E=e.createElement("div");E.classList.add(Hn("w")),s.appendChild(E);const z=w(e,"check");E.appendChild(z),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class mo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new _o(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function vo(n){const e=[],t=ms(n.options);return t&&e.push(t),new Bt(e)}const bo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Me(e,{options:me.optional.custom(Wn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks,constraint:n=>vo(n.params),writer:n=>Bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Ct(s,yn);return c?new Pn(e,{props:new $({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new mo(e,{value:t,viewProps:n.viewProps})}},Jt=W("col");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jt()),t.foldable.bindExpandedClass(this.element,Jt(void 0,"expanded")),ie(t.foldable,"completed",xe(this.element,Jt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Jt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Jt("s")),s.appendChild(c),this.swatchElement=c;const E=e.createElement("div");if(E.classList.add(Jt("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const z=e.createElement("div");z.classList.add(Jt("p")),this.element.appendChild(z),this.pickerElement=z}else this.pickerElement=null}}function wo(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),E=lt(t/255,0,1),z=Math.max(s,c,E),ee=Math.min(s,c,E),we=z-ee;let Pe=0,Oe=0;const Fe=(ee+z)/2;return we!==0&&(Oe=we/(1-Math.abs(z+ee-1)),s===z?Pe=(c-E)/we:c===z?Pe=2+(E-s)/we:Pe=4+(s-c)/we,Pe=Pe/6+(Pe<0?1:0)),[Pe*360,Oe*100,Fe*100]}function xo(n,e,t){const s=(n%360+360)%360,c=lt(e/100,0,1),E=lt(t/100,0,1),z=(1-Math.abs(2*E-1))*c,ee=z*(1-Math.abs(s/60%2-1)),we=E-z/2;let Pe,Oe,Fe;return s>=0&&s<60?[Pe,Oe,Fe]=[z,ee,0]:s>=60&&s<120?[Pe,Oe,Fe]=[ee,z,0]:s>=120&&s<180?[Pe,Oe,Fe]=[0,z,ee]:s>=180&&s<240?[Pe,Oe,Fe]=[0,ee,z]:s>=240&&s<300?[Pe,Oe,Fe]=[ee,0,z]:[Pe,Oe,Fe]=[z,0,ee],[(Pe+we)*255,(Oe+we)*255,(Fe+we)*255]}function yo(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),E=lt(t/255,0,1),z=Math.max(s,c,E),ee=Math.min(s,c,E),we=z-ee;let Pe;we===0?Pe=0:z===s?Pe=60*(((c-E)/we%6+6)%6):z===c?Pe=60*((E-s)/we+2):Pe=60*((s-c)/we+4);const Oe=z===0?0:we/z,Fe=z;return[Pe,Oe*100,Fe*100]}function or(n,e,t){const s=sr(n,360),c=lt(e/100,0,1),E=lt(t/100,0,1),z=E*c,ee=z*(1-Math.abs(s/60%2-1)),we=E-z;let Pe,Oe,Fe;return s>=0&&s<60?[Pe,Oe,Fe]=[z,ee,0]:s>=60&&s<120?[Pe,Oe,Fe]=[ee,z,0]:s>=120&&s<180?[Pe,Oe,Fe]=[0,z,ee]:s>=180&&s<240?[Pe,Oe,Fe]=[0,ee,z]:s>=240&&s<300?[Pe,Oe,Fe]=[ee,0,z]:[Pe,Oe,Fe]=[z,0,ee],[(Pe+we)*255,(Oe+we)*255,(Fe+we)*255]}function Po(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function So(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function en(n){return[n[0],n[1],n[2]]}function ar(n,e){return[n[0],n[1],n[2],e]}const Co={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Po,rgb:xo},hsv:{hsl:So,hsv:(n,e,t)=>[n,e,t],rgb:or},rgb:{hsl:wo,hsv:yo,rgb:(n,e,t)=>[n,e,t]}};function Kn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Eo(n,e){return n===e?e:sr(n,e)}function ko(n,e,t){var s;const c=Kn(e,t);return[e==="rgb"?lt(n[0],0,c[0]):Eo(n[0],c[0]),lt(n[1],0,c[1]),lt(n[2],0,c[2]),lt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function lr(n,e,t,s){const c=Kn(e,t),E=Kn(e,s);return n.map((z,ee)=>z/c[ee]*E[ee])}function Mo(n,e,t){const s=lr(n,e.mode,e.type,"int"),c=Co[e.mode][t.mode](...s);return lr(c,t.mode,"int",t.type)}function Yn(n,e){return typeof n!="object"||L(n)?!1:e in n&&typeof n[e]=="number"}class Ie{static black(e="int"){return new Ie([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ie(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Yn(e,"r")&&Yn(e,"g")&&Yn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Yn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let E=0;E<s.length;E++)if(s[E]!==c[E])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=ko(e,t,s)}getComponents(e,t="int"){return ar(Mo(en(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Nt=W("colp");class Bo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("hsv"));const c=e.createElement("div");c.classList.add(Nt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const E=e.createElement("div");E.classList.add(Nt("h")),this.hPaletteView_=t.hPaletteView,E.appendChild(this.hPaletteView_.element),s.appendChild(E),this.element.appendChild(s);const z=e.createElement("div");if(z.classList.add(Nt("rgb")),this.textView_=t.textView,z.appendChild(this.textView_.element),this.element.appendChild(z),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ee=e.createElement("div");ee.classList.add(Nt("a"));const we=e.createElement("div");we.classList.add(Nt("ap")),we.appendChild(this.alphaViews_.palette.element),ee.appendChild(we);const Pe=e.createElement("div");Pe.classList.add(Nt("at")),Pe.appendChild(this.alphaViews_.text.element),ee.appendChild(Pe),this.element.appendChild(ee)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function To(n){return n==="int"?"int":n==="float"?"float":void 0}function vs(n){const e=me;return Me(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(To)}),expanded:e.optional.boolean,picker:e.optional.custom(rr)})}function tn(n){return n?.1:1}function nn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ao(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function yt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function cr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function ur(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ie(t,"rgb",n):null}}function pr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ie(t,"rgb",n):null}}function fr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),yt(e[2],100),yt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ie(t,"hsl",n):null}}function mr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[cr(e[1]),yt(e[2],100),yt(e[3],100),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ie(t,"hsl",n):null}}function br(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function zo(n){const e=br(n);return e?new Ie(e,"rgb","int"):null}function gr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Je(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Je(parseInt(t[4],16),0,255,0,1)]:null}function Lo(n){const e=gr(n);return e?new Ie(e,"rgb","int"):null}function wr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Ie(t,"rgb",n):null}}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Ie(t,"rgb",n):null}}const Go=[{parser:br,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:gr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ur,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:pr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:mr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:wr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:yr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return Go.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function bs(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Sr={int:[zo,Lo,dr("int"),hr("int"),_r("int"),vr("int"),xr("int"),Pr("int")],float:[dr("float"),hr("float"),_r("float"),vr("float"),xr("float"),Pr("float")]};function Uo(n){const e=Sr[n];return t=>{if(typeof t!="string")return Ie.black(n);const s=e.reduce((c,E)=>c||E(t),null);return s??Ie.black(n)}}function gs(n){const e=Sr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function Cr(n){const e=lt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Er(n,e="#"){const t=en(n.getComponents("rgb")).map(Cr).join("");return`${e}${t}`}function ws(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Cr).join("");return`${e}${s}`}function kr(n,e){const t=pt(e==="float"?2:0);return`rgb(${en(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Ro(n){return e=>kr(e,n)}function Zn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((E,z)=>(z===3?t:s)(E)).join(", ")})`}function Vo(n){return e=>Zn(e,n)}function Oo(n){const e=[pt(0),qn,qn];return`hsl(${en(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Fo(n){const e=[pt(0),qn,qn,pt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Mr(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${en(n.getComponents("rgb",e)).map((E,z)=>`${s[z]}: ${t(E)}`).join(", ")}}`}function No(n){return e=>Mr(e,n)}function Br(n,e){const t=pt(2),s=pt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((z,ee)=>{const we=ee===3?t:s;return`${c[ee]}: ${we(z)}`}).join(", ")}}`}function $o(n){return e=>Br(e,n)}const qo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Er},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ws},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Ro(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Vo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:$o(e)}],[])];function xs(n){return qo.reduce((e,t)=>e||(Ao(t.format,n)?t.stringifier:null),null)}const Tn=W("apl");class Wo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Tn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Tn("c")),s.appendChild(c),this.colorElem_=c;const E=e.createElement("div");E.classList.add(Tn("m")),this.element.appendChild(E),this.markerElem_=E;const z=e.createElement("div");z.classList.add(Tn("p")),this.markerElem_.appendChild(z),this.previewElem_=z,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ie([t[0],t[1],t[2],0],"rgb"),c=new Ie([t[0],t[1],t[2],255],"rgb"),E=["to right",Zn(s),Zn(c)];this.colorElem_.style.background=`linear-gradient(${E.join(",")})`,this.previewElem_.style.backgroundColor=Zn(e);const z=Je(t[3],0,1,0,100);this.markerElem_.style.left=`${z}%`}onValueChange_(){this.update_()}}class jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Wo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[E,z,ee]=c.getComponents("hsv");this.value.setRawValue(new Ie([E,z,ee,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=vt(tn(!0),Lt(e));if(t===0)return;const s=this.value.rawValue,[c,E,z,ee]=s.getComponents("hsv");this.value.setRawValue(new Ie([c,E,z,ee+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){vt(tn(!0),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const _n=W("coltxt");function Ho(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const E=n.createElement("option");return E.textContent=c.text,E.value=c.value,s.appendChild(E),s},n.createDocumentFragment())),e}class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_n()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(_n("m")),this.modeElem_=Ho(e),this.modeElem_.classList.add(_n("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(_n("mm")),c.appendChild(w(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const E=e.createElement("div");E.classList.add(_n("w")),this.element.appendChild(E),this.textsElem_=E,this.textViews_=t.textViews,this.applyTextViews_(),Y(t.colorMode,z=>{this.modeElem_.value=z})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){N(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(_n("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Yo(n){return pt(n==="float"?2:0)}function Zo(n,e,t){const s=Kn(n,e)[t];return new Tt({min:0,max:s})}function ys(n,e,t){return new Mn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:tn(!1),parser:e.parser,props:$.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Yo(e.colorType)}),value:de(0,{constraint:Zo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Xo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=de(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ko(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ys(e,t,0),ys(e,t,1),ys(e,t,2)];return s.forEach((c,E)=>{En({primary:this.value,secondary:c.value,forward:z=>z.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[E],backward:(z,ee)=>{const we=this.colorMode.rawValue,Pe=z.rawValue.getComponents(we,this.colorType_);return Pe[E]=ee.rawValue,new Ie(ar(en(Pe),Pe[3]),we,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ps=W("hpl");class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ps()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ps("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ps("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=kr(new Ie([t,100,100],"hsv"));const s=Je(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,E,z,ee]=c.getComponents("hsv");this.value.setRawValue(new Ie([s,E,z,ee],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=vt(tn(!1),Lt(e));if(t===0)return;const s=this.value.rawValue,[c,E,z,ee]=s.getComponents("hsv");this.value.setRawValue(new Ie([c+t,E,z,ee],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){vt(tn(!1),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ss=W("svp"),Tr=64;class ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ss()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Tr,s.width=Tr,s.classList.add(Ss("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Ss("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=u(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,E=this.canvasElement.height,z=e.getImageData(0,0,c,E),ee=z.data;for(let Oe=0;Oe<E;Oe++)for(let Fe=0;Fe<c;Fe++){const sn=Je(Fe,0,c,0,100),Dn=Je(Oe,0,E,100,0),zn=or(s[0],sn,Dn),Xn=(Oe*c+Fe)*4;ee[Xn]=zn[0],ee[Xn+1]=zn[1],ee[Xn+2]=zn[2],ee[Xn+3]=255}e.putImageData(z,0,0);const we=Je(s[1],0,100,0,100);this.markerElem_.style.left=`${we}%`;const Pe=Je(s[2],0,100,100,0);this.markerElem_.style.top=`${Pe}%`}onValueChange_(){this.update_()}}class ta{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Je(e.point.x,0,e.bounds.width,0,100),c=Je(e.point.y,0,e.bounds.height,100,0),[E,,,z]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ie([E,s,c,z],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s,c,E]=this.value.rawValue.getComponents("hsv"),z=tn(!1),ee=vt(z,Lt(e)),we=vt(z,kn(e));ee===0&&we===0||this.value.setRawValue(new Ie([t,s+ee,c+we,E],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=tn(!1),s=vt(t,Lt(e)),c=vt(t,kn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ta(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new jo(e,{value:this.value,viewProps:this.viewProps}),text:new Mn(e,{parser:zt,baseStep:.1,props:$.fromObject({draggingScale:.01,formatter:pt(2)}),value:de(0,{constraint:new Tt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&En({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const E=s.rawValue.getComponents();return E[3]=c.rawValue,new Ie(E,s.rawValue.mode)}}),this.textC_=new Xo(e,{colorType:t.colorType,parser:zt,value:this.value,viewProps:this.viewProps}),this.view=new Bo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Cs=W("colsw");class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Cs("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Cs("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ws(e)}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps})}}class Es{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ee.create(t.expanded),this.swatchC_=new ra(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new $n(e,{parser:t.parser,props:$.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new go(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const c=new na(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),En({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,z)=>z.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=te(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Ie.isColorObject(n)?Ie.fromObject(n,e):Ie.black(e)}function oa(n){return en(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function aa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function la(n){return new Ie([n>>16&255,n>>8&255,n&255],"rgb")}function ca(n){return new Ie([n>>24&255,n>>16&255,n>>8&255,Je(n&255,0,255,0,1)],"rgb")}function ua(n){return typeof n!="number"?Ie.black():la(n)}function da(n){return typeof n!="number"?Ie.black():ca(n)}function pa(n){const e=xs(n);return e?(t,s)=>{Bn(t,e(s))}:null}function ha(n){const e=n?aa:oa;return(t,s)=>{Bn(t,e(s))}}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function _a(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ma(n,e){return(t,s)=>{n?fa(t,s,e):_a(t,s,e)}}function ks(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function va(n){return n?e=>ws(e,"0x"):e=>Er(e,"0x")}function ba(n){return"color"in n||"view"in n&&n.view==="color"}const ga={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ba(e))return null;const t=vs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ks(n.params)?da:ua,equals:Ie.equals,writer:n=>ha(ks(n.params))},controller:n=>{const e=ks(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Es(n.document,{colorType:"int",expanded:t??!1,formatter:va(e),parser:gs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function wa(n){return Ie.isRgbaColorObject(n)}function xa(n){return e=>ia(e,n)}function ya(n,e){return t=>n?Br(t,e):Mr(t,e)}const Pa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ie.isColorObject(n))return null;const t=vs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>xa(nn(n.params)),equals:Ie.equals,writer:n=>ma(wa(n.initialValue),nn(n.params))},controller:n=>{var e;const t=Ie.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,E=(e=nn(n.params))!==null&&e!==void 0?e:"int";return new Es(n.document,{colorType:E,expanded:s??!1,formatter:ya(t,E),parser:gs(E),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=bs(n,nn(e));if(!t||!xs(t))return null;const c=vs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Uo((e=nn(n.params))!==null&&e!==void 0?e:"int")},equals:Ie.equals,writer:n=>{const e=bs(n.initialValue,nn(n.params));if(!e)throw j.shouldNeverHappen();const t=pa(e);if(!t)throw j.notBindable();return t}},controller:n=>{const e=bs(n.initialValue,nn(n.params));if(!e)throw j.shouldNeverHappen();const t=xs(e);if(!t)throw j.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Es(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:gs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class $t{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var E,z;return(z=(E=this.components[c])===null||E===void 0?void 0:E.constrain(s))!==null&&z!==void 0?z:s});return this.asm_.fromComponents(t)}}const Ar=W("pndtxt");class Ca{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ar()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Ar("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ea(n,e,t){return new Mn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:de(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ms{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ea(e,t,c)),this.acs_.forEach((s,c)=>{En({primary:this.value,secondary:s.value,forward:E=>t.assembly.toComponents(E.rawValue)[c],backward:(E,z)=>{const ee=t.assembly.toComponents(E.rawValue);return ee[c]=z.rawValue,t.assembly.fromComponents(ee)}})}),this.view=new Ca(e,{textViews:this.acs_.map(s=>s.view)})}}function Dr(n,e){return"step"in n&&!L(n.step)?new Nn(n.step,e):null}function zr(n){return!L(n.max)&&!L(n.min)?new Tt({max:n.max,min:n.min}):!L(n.max)||!L(n.min)?new qs({max:n.max,min:n.min}):null}function ka(n){const e=Ct(n,Tt);if(e)return[e.values.get("min"),e.values.get("max")];const t=Ct(n,qs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ma(n,e){const t=[],s=Dr(n,e);s&&t.push(s);const c=zr(n);c&&t.push(c);const E=ms(n.options);return E&&t.push(E),new Bt(t)}const Ba={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=me,s=Me(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Wn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Js,constraint:n=>Ma(n.params,n.initialValue),writer:n=>Bn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Ct(s,yn);if(c)return new Pn(n.document,{props:new $({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const E=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(jn(s,t.rawValue)),z=s&&Ct(s,Tt);return z?new _s(n.document,{baseStep:hn(s),parser:zt,sliderProps:new $({maxValue:z.values.value("max"),minValue:z.values.value("min")}),textProps:$.fromObject({draggingScale:fn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps}):new Mn(n.document,{baseStep:hn(s),parser:zt,props:$.fromObject({draggingScale:fn(s,t.rawValue),formatter:E}),value:t,viewProps:n.viewProps})}};class qt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(L(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Lr={toComponents:n=>n.getComponents(),fromComponents:n=>new qt(...n)},mn=W("p2d");class Ta{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(mn()),t.viewProps.bindClassModifiers(this.element),Y(t.expanded,xe(this.element,mn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(mn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(mn("b")),c.appendChild(w(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const E=e.createElement("div");if(E.classList.add(mn("t")),s.appendChild(E),this.textElement=E,t.pickerLayout==="inline"){const z=e.createElement("div");z.classList.add(mn("p")),this.element.appendChild(z),this.pickerElement=z}else this.pickerElement=null}}const Wt=W("p2dp");class Aa{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Wt()),t.layout==="popup"&&this.element.classList.add(Wt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Wt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(S,"svg");c.classList.add(Wt("g")),this.padElement.appendChild(c),this.svgElem_=c;const E=e.createElementNS(S,"line");E.classList.add(Wt("ax")),E.setAttributeNS(null,"x1","0"),E.setAttributeNS(null,"y1","50%"),E.setAttributeNS(null,"x2","100%"),E.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(E);const z=e.createElementNS(S,"line");z.classList.add(Wt("ax")),z.setAttributeNS(null,"x1","50%"),z.setAttributeNS(null,"y1","0"),z.setAttributeNS(null,"x2","50%"),z.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(z);const ee=e.createElementNS(S,"line");ee.classList.add(Wt("l")),ee.setAttributeNS(null,"x1","50%"),ee.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ee),this.lineElem_=ee;const we=e.createElement("div");we.classList.add(Wt("m")),this.padElement.appendChild(we),this.markerElem_=we,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Je(e,-s,+s,0,100),E=Je(t,-s,+s,0,100),z=this.invertsY_?100-E:E;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${z}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${z}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Gr(n,e,t){return[vt(e[0],Lt(n)),vt(e[1],kn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Aa(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Qt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Je(e.point.x,0,e.bounds.width,-s,+s),E=Je(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new qt(c,E),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){tr(e.key)&&e.preventDefault();const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new qt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class za{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ee.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new js(e,{viewProps:this.viewProps}):null;const E=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});E.view.allFocusableElements.forEach(z=>{z.addEventListener("blur",this.onPopupChildBlur_),z.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.textC_=new Ms(e,{assembly:Lr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ta(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),En({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:z=>z.rawValue,backward:(z,ee)=>ee.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=te(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class vn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(L(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ir={toComponents:n=>n.getComponents(),fromComponents:n=>new vn(...n)};function La(n){return vn.isObject(n)?new vn(n.x,n.y,n.z):new vn}function Ga(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new $t({assembly:Ir,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y),Gt("z"in n?n.z:void 0,e.z)]})}function Bs(n,e){return{baseStep:hn(e),constraint:e,textProps:$.fromObject({draggingScale:fn(e,n),formatter:pt(jn(e,n))})}}const Ua={id:"input-point3d",type:"input",accept:(n,e)=>{if(!vn.isObject(n))return null;const t=me,s=Me(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>La,constraint:n=>Ia(n.params,n.initialValue),equals:vn.equals,writer:n=>Ga},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw j.shouldNeverHappen();return new Ms(n.document,{assembly:Ir,axes:[Bs(e.rawValue.x,t.components[0]),Bs(e.rawValue.y,t.components[1]),Bs(e.rawValue.z,t.components[2])],parser:zt,value:e,viewProps:n.viewProps})}};class bn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(L(e))return!1;const t=e.x,s=e.y,c=e.z,E=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof E!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new bn(...n)};function Ra(n){return bn.isObject(n)?new bn(n.x,n.y,n.z,n.w):new bn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Oa(n,e){return new $t({assembly:Ur,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y),Gt("z"in n?n.z:void 0,e.z),Gt("w"in n?n.w:void 0,e.w)]})}function Fa(n,e){return{baseStep:hn(e),constraint:e,textProps:$.fromObject({draggingScale:fn(e,n),formatter:pt(jn(e,n))})}}const Na={id:"input-point4d",type:"input",accept:(n,e)=>{if(!bn.isObject(n))return null;const t=me,s=Me(e,{x:t.optional.custom(Ft),y:t.optional.custom(Ft),z:t.optional.custom(Ft),w:t.optional.custom(Ft)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ra,constraint:n=>Oa(n.params,n.initialValue),equals:bn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof $t))throw j.shouldNeverHappen();return new Ms(n.document,{assembly:Ur,axes:e.rawValue.getComponents().map((s,c)=>Fa(s,t.components[c])),parser:zt,value:e,viewProps:n.viewProps})}};function $a(n){const e=[],t=ms(n.options);return t&&e.push(t),new Bt(e)}const qa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Me(e,{options:me.optional.custom(Wn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er,constraint:n=>$a(n.params),writer:n=>Bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Ct(s,yn);return c?new Pn(e,{props:new $({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new $n(e,{parser:E=>E,props:$.fromObject({formatter:ds}),value:t,viewProps:n.viewProps})}},An={monitor:{defaultInterval:200,defaultLineCount:3}},Rr=W("mll");class Wa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Rr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Rr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ts{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Wa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Vr=W("sgl");class ja{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Vr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Vr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class As{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ja(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ha={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Me(e,{lineCount:me.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks},controller:n=>{var e;return n.value.rawValue.length===1?new As(n.document,{formatter:Ys,value:n.value,viewProps:n.viewProps}):new Ts(n.document,{formatter:Ys,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},jt=W("grl");class Ka{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(jt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(S,"svg");s.classList.add(jt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(S,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const E=e.createElement("div");E.classList.add(jt("t"),W("tt")()),this.element.appendChild(E),this.tooltipElem_=E,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),E=[];this.value.rawValue.forEach((Oe,Fe)=>{if(Oe===void 0)return;const sn=Je(Fe,0,t,0,e.width),Dn=Je(Oe,s,c,e.height,0);E.push([sn,Dn].join(","))}),this.lineElem_.setAttributeNS(null,"points",E.join(" "));const z=this.tooltipElem_,ee=this.value.rawValue[this.cursor_.rawValue];if(ee===void 0){z.classList.remove(jt("t","a"));return}const we=Je(this.cursor_.rawValue,0,t,0,e.width),Pe=Je(ee,s,c,e.height,0);z.style.left=`${we}px`,z.style.top=`${Pe}px`,z.textContent=`${this.formatter_(ee)}`,z.classList.contains(jt("t","a"))||(z.classList.add(jt("t","a"),jt("t","in")),r(z),z.classList.remove(jt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ya{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=de(-1),this.view=new Ka(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Qt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Je(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Je(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ds(n){return"format"in n&&!L(n.format)?n.format:pt(2)}function Za(n){var e;return n.value.rawValue.length===1?new As(n.document,{formatter:Ds(n.params),value:n.value,viewProps:n.viewProps}):new Ts(n.document,{formatter:Ds(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Xa(n){var e,t,s;return new Ya(n.document,{formatter:Ds(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,props:$.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Or(n){return"view"in n&&n.view==="graph"}const Qa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=me,s=Me(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Or(n)?64:1,reader:n=>Js},controller:n=>Or(n.params)?Xa(n):Za(n)},Ja={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=me,s=Me(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>er},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ts(n.document,{formatter:ds,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:An.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new As(n.document,{formatter:ds,value:t,viewProps:n.viewProps})}};function el(n,e){var t;const s=n.accept(e.target.read(),e.params);if(L(s))return null;const c=me,E={target:e.target,initialValue:s.initialValue,params:s.params},z=n.binding.reader(E),ee=n.binding.constraint?n.binding.constraint(E):void 0,we=de(z(s.initialValue),{constraint:ee,equals:n.binding.equals}),Pe=new Fn({reader:z,target:e.target,value:we,writer:n.binding.writer(E)}),Oe=c.optional.boolean(e.params.disabled).value,Fe=c.optional.boolean(e.params.hidden).value,sn=n.controller({constraint:ee,document:e.document,initialValue:s.initialValue,params:s.params,value:Pe.value,viewProps:h.create({disabled:Oe,hidden:Fe})});return new Ne(e.document,{binding:Pe,blade:Te(),props:$.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:sn})}function tl(n,e){return e===0?new On:new as(n,e??An.monitor.defaultInterval)}function nl(n,e){var t,s,c;const E=me,z=n.accept(e.target.read(),e.params);if(L(z))return null;const ee={target:e.target,initialValue:z.initialValue,params:z.params},we=n.binding.reader(ee),Pe=(s=(t=E.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(z.params))!==null&&s!==void 0?s:1,Oe=E.optional.number(e.params.interval).value,Fe=new pn({reader:we,target:e.target,ticker:tl(e.document,Oe),value:Xt(Pe)}),sn=E.optional.boolean(e.params.disabled).value,Dn=E.optional.boolean(e.params.hidden).value,zn=n.controller({document:e.document,params:z.params,value:Fe.value,viewProps:h.create({disabled:sn,hidden:Dn})});return new Ke(e.document,{binding:Fe,blade:Te(),props:$.fromObject({label:"label"in e.params?(c=E.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:zn})}class sl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(L(c))throw new j({context:{key:t.key},type:"nomatchingcontroller"});const E=this.pluginsMap_.inputs.reduce((z,ee)=>z??el(ee,{document:e,target:t,params:s}),null);if(E)return E;throw new j({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((E,z)=>E??nl(z,{document:e,params:s,target:t}),null);if(c)return c;throw new j({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,E)=>c??os(E,{document:e,params:t}),null);if(!s)throw new j({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Ne)return new tt(e);if(e instanceof Ke)return new nt(e);if(e instanceof Ye)return new wt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw j.shouldNeverHappen();return t}}function rl(){const n=new sl;return[ul,Ua,Na,qa,Ba,Sa,Pa,ga,bo,Ha,Ja,Qa,_e,un,Ve,Vn].forEach(e=>{n.register(e)}),n}function il(n){return qt.isObject(n)?new qt(n.x,n.y):new qt}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Gt(n,e){if(!n)return;const t=[],s=Dr(n,e);s&&t.push(s);const c=zr(n);return c&&t.push(c),new Bt(t)}function al(n,e){return new $t({assembly:Lr,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y)]})}function Fr(n,e){const[t,s]=n?ka(n):[];if(!L(t)||!L(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=hn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ll(n,e){const t=e instanceof $t?e.components[0]:void 0,s=e instanceof $t?e.components[1]:void 0,c=Fr(t,n.x),E=Fr(s,n.y);return Math.max(c,E)}function Nr(n,e){return{baseStep:hn(e),constraint:e,textProps:$.fromObject({draggingScale:fn(e,n),formatter:pt(jn(e,n))})}}function cl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!qt.isObject(n))return null;const t=me,s=Me(e,{expanded:t.optional.boolean,picker:t.optional.custom(rr),x:t.optional.custom(Ft),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:qt.equals,writer:n=>ol},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof $t))throw j.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,E="picker"in n.params?n.params.picker:void 0;return new za(e,{axes:[Nr(t.rawValue.x,s.components[0]),Nr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:cl(n.params),maxValue:ll(t.rawValue,s),parser:zt,pickerLayout:E??"popup",value:t,viewProps:n.viewProps})}};class $r extends b{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class qr extends b{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Wr extends b{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const dl=function(){return{id:"list",type:"blade",accept(n){const e=me,t=Me(n,{options:e.required.custom(Wn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new yn(ir(n.params.options)),t=de(n.params.value,{constraint:e}),s=new Pn(n.document,{props:new $({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new St(n.document,{blade:n.blade,props:$.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof St)||!(n.controller.valueController instanceof Pn)?null:new $r(n.controller)}}}();function pl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function hl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class fl extends kt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Ne).map(s=>s.binding);hl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Ne).map(t=>t.binding.target);return pl(e)}refresh(){this.controller_.rackController.rack.find(Ne).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class _l extends cn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const ml={id:"slider",type:"blade",accept(n){const e=me,t=Me(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Tt({max:n.params.max,min:n.params.min}),E=new _s(n.document,{baseStep:1,parser:zt,sliderProps:new $({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:$.fromObject({draggingScale:fn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:oo}),value:de(s,{constraint:c}),viewProps:n.viewProps});return new St(n.document,{blade:n.blade,props:$.fromObject({label:n.params.label}),valueController:E})},api(n){return!(n.controller instanceof St)||!(n.controller.valueController instanceof _s)?null:new qr(n.controller)}},vl=function(){return{id:"text",type:"blade",accept(n){const e=me,t=Me(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new $n(n.document,{parser:n.params.parse,props:$.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:de(n.params.value),viewProps:n.viewProps});return new St(n.document,{blade:n.blade,props:$.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof St)||!(n.controller.valueController instanceof $n)?null:new Wr(n.controller)}}}();function bl(n){const e=n.createElement("div");return e.classList.add(W("dfw")()),n.body&&n.body.appendChild(e),e}function jr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class gl extends fl{constructor(e){var t,s;const c=e??{},E=(t=c.document)!==null&&t!==void 0?t:l(),z=rl(),ee=new _l(E,{expanded:c.expanded,blade:Te(),props:$.fromObject({title:c.title}),viewProps:h.create()});super(ee,z),this.pool_=z,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:bl(E),this.containerElem_.appendChild(this.element),this.doc_=E,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw j.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw j.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&jr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){jr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[ml,dl,Vn,vl]})}}const wl=new C("3.1.10");_.BladeApi=b,_.ButtonApi=se,_.FolderApi=kt,_.InputBindingApi=tt,_.ListApi=$r,_.MonitorBindingApi=nt,_.Pane=gl,_.SeparatorApi=Q,_.SliderApi=qr,_.TabApi=mt,_.TabPageApi=at,_.TextApi=Wr,_.TpChangeEvent=M,_.VERSION=wl,Object.defineProperty(_,"__esModule",{value:!0})})})(Is,Is.exports);var jl=Is.exports;const Hl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  // 0 = baked: atlas_rects is stride 5 (u0, v0, w, h, layer), diagonal affine.
  // 1 = proberes: atlas_rects is stride 6 (A00, A01, A10, A11, t0, t1),
  //     ALREADY divided by tex_res by the exporter, so we pass it straight
  //     through with no arithmetic. Single-layer texture, layer always 0.
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
        // Proberes: the fragment reads the per-surfel affine straight from the
        // atlas_probes storage buffer (indexed by gauss_id), so there is
        // nothing to precompute here. Zero the baked-path fields.
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
        splats_2d[store_idx]._pad       = 0u;
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
`,Kl=`// 2DGS render — vertex+fragment.
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
  // 0 = baked (per-surfel rect, diagonal affine, multi-layer atlas)
  // 1 = proberes (shared single-layer texture, general 2x2 affine + low-pass
  //     centre collapse). Set by the loader for NAT2 atlas_format 9/10.
  probe_mode    : u32,
  // Explicit u32 pads (NOT vec3<f32>): a vec3 aligns to 16 and would push the
  // struct to 48 B, mismatching buildStubAtlas's 32-byte TexParams buffer.
  _pad0 : u32, _pad1 : u32, _pad2 : u32,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;
// Per-surfel probe affines, stride 6 [A00, A01, A10, A11, t0, t1], already
// divided by tex_res. Read directly here (indexed by gauss_id) instead of
// packed through Splat2DGS varyings — the packed route had to survive
// cull -> preprocess -> vertex -> fragment and could not be verified offline.
// Only read when tex_params.probe_mode != 0.
@group(2) @binding(3) var<storage, read> atlas_probes    : array<f32>;

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
            let po  = (in.gauss_id & 0x7FFFFFFFu) * 6u;
            let a00 = atlas_probes[po + 0u];
            let a01 = atlas_probes[po + 1u];
            let a10 = atlas_probes[po + 2u];
            let a11 = atlas_probes[po + 3u];
            let t0  = atlas_probes[po + 4u];
            let t1  = atlas_probes[po + 5u];
            uv = vec2<f32>(a00 * uv_eff.x + a01 * uv_eff.y + t0,
                           a10 * uv_eff.x + a11 * uv_eff.y + t1);
            layer = 0;
        } else {
            uv = in.uv_base + s * in.uv_scale;
        }
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, 0.0);
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

fn ht_inv_depth(d: f32) -> f32 {
    return exp2(d * 22.0) - 1.0;
}

// Tail-only bindings (group 3): the core pass's depth buffer (bound read-only
// — it's simultaneously the pass's read-only depth attachment) + the depth-
// weighting strength. The unweighted K=1 tail average treats a fragment 10 cm
// behind the core surface the same as one 1 mm behind it → background bleed
// ("semi-transparent" look) and averaged-away atlas residuals. Weighting each
// tail fragment by exp(−k·(zv−zv_core)/zv_core) — the WBOIT-style fix HTGS
// §Limitations suggests, anchored at the core depth — redistributes the
// normalized average (Σwαc/Σwα, w cancels in scale) toward the fragments just
// behind the surface, which are the ones sorted blending would show crisply.
// k=0 restores the uniform average. The transmittance product target stays
// UNWEIGHTED — it is the tail's physical total opacity.
@group(3) @binding(0) var ht_core_depth : texture_depth_2d;
struct HtParams { tail_k : f32, _p0 : f32, _p1 : f32, _p2 : f32 };
@group(3) @binding(1) var<uniform> ht_params : HtParams;

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

// HT mode 2 tail: the tail draws in RADIX-SORTED order with standard
// premultiplied over blending into its own target (no averaging — crisp
// textures, proper layering), depth-tested GREATER against the exact core.
// The dominant popping term (frontmost flip) is gone via the core; residual
// order flips within the tail are attenuated by (1−α_F) at composite.
struct TailSortedOut {
    @location(0) color : vec4<f32>,
    @builtin(frag_depth) depth : f32,
};

@fragment
fn fs_tail_sorted(in: VertexOutput) -> TailSortedOut {
    let sh = shade(in);
    var out : TailSortedOut;
    out.color = vec4<f32>(sh.rgb, 1.0) * sh.a;
    out.depth = ht_depth(sh.zv);
    return out;
}

@fragment
fn fs_tail(in: VertexOutput) -> TailOut {
    let sh = shade(in);
    let p = vec2<i32>(floor(in.position.xy));
    let zc = ht_inv_depth(textureLoad(ht_core_depth, p, 0));
    let rel = max(0.0, (sh.zv - zc) / max(zc, 1e-3));
    let w = exp(-min(20.0, ht_params.tail_k * rel));
    var out : TailOut;
    out.accum = vec4<f32>(sh.rgb * sh.a * w, sh.a * w);
    out.trans = vec4<f32>(sh.a, 0.0, 0.0, sh.a);
    out.depth = ht_depth(sh.zv);
    return out;
}
`,Yl=`// Hybrid-transparency composite (HTGS Eq. 17, K=1 hardware form).
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

// HT mode 2 composite: accum_tex holds the SORTED premultiplied tail blend
// (standard over-composited among tail fragments). Exact suffix compose:
//   C = α_F·c_F + (1−α_F)·C_tail,   A = α_F + (1−α_F)·A_tail
@fragment
fn fs_sorted_tail(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(core_tex));
    let p = clamp(vec2<i32>(floor(frag_coord.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let core = textureLoad(core_tex, p, 0);
    let tail = textureLoad(accum_tex, p, 0);
    return vec4<f32>(
        core.rgb + (1.0 - core.a) * tail.rgb,
        core.a   + (1.0 - core.a) * tail.a,
    );
}
`,Zl=`const WG_SIZE = 256u;
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
}`,Xl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Ql=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,Jl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
`,ec=`// shader implementing gpu radix sort.

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
`,tc=`// shader implementing gpu radix sort.

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
`,nc=`// ============================================================================
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
}`,bi=32,Us=1,Rs=2,si=4,Vs=8,gi=4,sc=7<<gi,ri=128,ii=256,rc=0,Ht=new ArrayBuffer(bi),ct={canvas_size:new Uint32Array(Ht,0,2),accel_flags:new Uint32Array(Ht,8,1),feature_mode:new Uint32Array(Ht,12,1),gaussian_scaling:new Float32Array(Ht,16,1),sh_bias:new Float32Array(Ht,20,1),color_K:new Uint32Array(Ht,24,1),walltime:new Float32Array(Ht,28,1)};function ic(o){ct.canvas_size[0]=o.width>>>0,ct.canvas_size[1]=o.height>>>0,ct.accel_flags[0]=(o.accel_flags??Us|Rs)>>>0,ct.feature_mode[0]=(o.feature_mode??rc)>>>0,ct.gaussian_scaling[0]=o.gaussian_scaling??1,ct.sh_bias[0]=o.sh_bias??.5,ct.color_K[0]=(o.color_K??0)>>>0,ct.walltime[0]=o.walltime??0}function wi(o,a){o.queue.writeBuffer(a,0,Ht)}function rs(o,a,_){_&&o&&a&&wi(o,a)}function Qn(o,a,_,C,b=!0){ct.canvas_size[0]=o>>>0,ct.canvas_size[1]=a>>>0,rs(_??null,C??null,b)}function oi(o,a,_,C=!0){ct.gaussian_scaling[0]=o,rs(a??null,_??null,C)}function ai(o,a,_,C=!0){ct.sh_bias[0]=o,rs(a??null,_??null,C)}function on(o,a,_,C=!0){let b=ct.accel_flags[0];if(o.oac!==void 0&&(b=o.oac?b|Us:b&~Us),o.spr!==void 0&&(b=o.spr?b|Rs:b&~Rs),o.bfc!==void 0&&(b=o.bfc?b|si:b&~si),o.meshCull!==void 0&&(b=o.meshCull?b|Vs:b&~Vs),o.meshSampleMode!==void 0){const k=(o.meshSampleMode&7)<<gi;b=b&~sc|k}o.meshSilhouetteCull!==void 0&&(b=o.meshSilhouetteCull?b|ri:b&~ri),o.meshInvertDepth!==void 0&&(b=o.meshInvertDepth?b|ii:b&~ii),ct.accel_flags[0]=b>>>0,rs(a??null,_??null,C)}const oc=256,ac=bi,lc=8,cc=96,uc=12,$s=8,It=1<<$s,an=256,ts=32/$s,dc=0,li=ts&1;function ci(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function pc(o,a){const _=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[_]}),b=k=>o.createComputePipeline({layout:C,compute:{module:a,entryPoint:k,constants:{WG_SIZE:an}}});return{l0TileScan:b("prefix_l0_tile_scan"),l1TileScanOnL0:b("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:b("prefix_scan_l1_sums"),addL1ToL0:b("prefix_add_l1_to_l0_offsets"),addL0ToElems:b("prefix_add_l0_to_elements"),computeDigitBase:b("compute_digit_base"),prefixBindGroupLayout:_}}function hc(o,a,_){const C=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),b=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[C]}),M=o.createPipelineLayout({bindGroupLayouts:[b]}),O=[];for(let B=0;B<ts;B++){const T={PASS_ID:B+dc,RS_RADIX_LOG2:$s,RS_RADIX_SIZE:It};O.push({localHistogram:o.createComputePipeline({layout:k,compute:{module:a,entryPoint:"local_histogram_pass",constants:T}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:_,entryPoint:"scatter_elements",constants:T}})})}return{passes:O,localHistogramBindGroupLayout:C,scatterBindGroupLayout:b}}function fc(o){const a=o.createShaderModule({label:"local histogram",code:tc}),_=o.createShaderModule({label:"scatter",code:ec}),C=o.createShaderModule({label:"blelloch prefix",code:nc}),b=pc(o,C),k=hc(o,a,_);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:b}}function _c(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=a.createView({dimension:"2d-array"}),C=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),b=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(k,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:_,sampler:C,rectsBuffer:b,texParamsBuffer:k,meta:M}}class mc{constructor(a,_,C,b,k,M=null,O=null){U(this,"device");U(this,"pc");U(this,"presentationFormat");U(this,"camera_buffer");U(this,"render_settings_buffer");U(this,"draw_indirect_buffer");U(this,"splat_2d_buffer");U(this,"querySet");U(this,"resolveBuffer");U(this,"resultBuffer");U(this,"queriesPerFrame",lc);U(this,"queryCapacityFrames",200);U(this,"sort_prefixBindGroup");U(this,"sort_pipelines");U(this,"sort_localHistogramBindGroups");U(this,"sort_scatterBindGroups");U(this,"lastFrame",0);U(this,"frameCount",0);U(this,"preprocessPipeline");U(this,"cullPipeline");U(this,"renderPipeline");U(this,"indirectPipeline");U(this,"htEnabled",!1);U(this,"htSortedTail",!1);U(this,"renderShaderModule");U(this,"betaKernel",1);U(this,"renderSettingsBgl");U(this,"renderSplatsBgl");U(this,"atlasBgl");U(this,"htCorePipeline",null);U(this,"htTailPipeline",null);U(this,"htTail2Pipeline",null);U(this,"htCompositePipeline",null);U(this,"htComposite2Pipeline",null);U(this,"htCompositeBgl",null);U(this,"htCompositeBindGroup",null);U(this,"htDepthTexture",null);U(this,"htDepthView",null);U(this,"htCoreTexture",null);U(this,"htCoreView",null);U(this,"htAccumTexture",null);U(this,"htAccumView",null);U(this,"htTransTexture",null);U(this,"htTransView",null);U(this,"htW",0);U(this,"htH",0);U(this,"htTailBgl",null);U(this,"htTailBindGroup",null);U(this,"htParamsBuffer",null);U(this,"htTailK",150);U(this,"sort_info_buffer");U(this,"sort_ping_pong");U(this,"crsBg");U(this,"gsBg");U(this,"cullBg2");U(this,"preprocessBg1");U(this,"renderSplatsBindGroup");U(this,"renderSettingsBindGroup");U(this,"atlasBindGroup");U(this,"indirectBindGroup");U(this,"sh_solvers_buffer");U(this,"mesh");U(this,"meshDepthPipeline",null);U(this,"meshDepthCameraBindGroup",null);U(this,"meshDepthMarginBindGroup",null);U(this,"meshMarginBuffer",null);U(this,"meshDepthTexture",null);U(this,"meshDepthView",null);U(this,"meshCullBindGroupLayout");U(this,"meshCullBindGroup");U(this,"meshCullWidth",0);U(this,"meshCullHeight",0);U(this,"meshStubTexture");U(this,"meshStubView");U(this,"bfcParamsBuffer");U(this,"meshOverlayPipeline",null);U(this,"meshOverlayEnabled",!1);U(this,"bgColor",[0,0,0,0]);U(this,"showPerfDialogNext",!1);U(this,"requestReorderNextFrame",!1);U(this,"reorderInFlight",!1);U(this,"downloadOnceNextRead",!1);U(this,"downloadOnceFileName","fps_metrics");U(this,"allFrameTimes",[]);U(this,"lastStageBreakdownMs",null);U(this,"timeQueryEnabled");U(this,"atlas");U(this,"atlasParamsBuffer");this.mesh=O;const B=k.includes("timestamp-query");this.timeQueryEnabled=B,B&&Et("⏰ using timestamp-query"),this.pc=a,this.device=_,this.presentationFormat=C,this.camera_buffer=b,this.atlas=M??_c(_),this.atlasParamsBuffer=_.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),_.addEventListener("uncapturederror",$=>{console.error("A WebGPU error was not captured:",$.error)}),this._setupTimestampQueries(),this._setupBuffers();const T=(Math.floor((this.pc.num_points+an-1)/an)+1)*an,I=Math.ceil(T/an);console.log(`keys count adjusted: ${T}`),console.log(`key size: ${this.pc.num_points}`);const L=_.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=fc(_);const H=[ci(T,_),ci(T,_)],R=_.createBuffer({label:"workgroup histograms",size:I*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=_.createBuffer({label:"workgroup prefixes",size:I*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=_.createBuffer({label:"digit base",size:It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=Math.ceil(I/an),se=Math.ceil(Z/an),K=_.createBuffer({label:"prefix l0 sums",size:Z*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=_.createBuffer({label:"prefix l0 offsets",size:Z*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=_.createBuffer({label:"prefix l1 sums",size:se*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=_.createBuffer({label:"prefix l1 offsets",size:se*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=_.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:X}},{binding:3,resource:{buffer:K}},{binding:4,resource:{buffer:q}},{binding:5,resource:{buffer:W}},{binding:6,resource:{buffer:oe}},{binding:7,resource:{buffer:j}}]}),this.sort_localHistogramBindGroups=[_.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:H[0].sort_depths_buffer}},{binding:2,resource:{buffer:R}}]}),_.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:H[1].sort_depths_buffer}},{binding:2,resource:{buffer:R}}]})],this.sort_scatterBindGroups=[_.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:H[0].sort_depths_buffer}},{binding:3,resource:{buffer:H[1].sort_depths_buffer}},{binding:4,resource:{buffer:H[0].sort_indices_buffer}},{binding:5,resource:{buffer:H[1].sort_indices_buffer}},{binding:6,resource:{buffer:X}}]}),_.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:H[1].sort_depths_buffer}},{binding:3,resource:{buffer:H[0].sort_depths_buffer}},{binding:4,resource:{buffer:H[1].sort_indices_buffer}},{binding:5,resource:{buffer:H[0].sort_indices_buffer}},{binding:6,resource:{buffer:X}}]})],this.sort_info_buffer=L,this.sort_ping_pong=H;const ve=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),Y=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ie=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ve,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:Y,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ie,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const xe=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:xe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Ue=this.device.createShaderModule({code:Xl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ve,Y,ie,this.meshCullBindGroupLayout]}),compute:{module:Ue,entryPoint:"surfel_cull"}}),this.mesh!==null){const $=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:$,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ne=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ne,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const ae=this.device.createShaderModule({code:Ql});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,ne]}),vertex:{module:ae,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ge=this.device.createShaderModule({code:Hl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ve,ue]}),compute:{module:Ge,entryPoint:"preprocess"}});const Re=this.device.createShaderModule({code:Kl});Re.getCompilationInfo().then($=>{$.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),$.messages.forEach(ne=>{(ne.type==="error"?console.error:ne.type==="warning"?console.warn:console.log)(`${ne.type} (line ${ne.lineNum}:${ne.linePos}): ${ne.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Ce=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),be=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Se=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),de=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Ce,be,Se]}),vertex:{module:Re,entryPoint:"vs_main"},fragment:{module:Re,entryPoint:"fs_main",constants:{BETA_KERNEL:de},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then($=>{$?console.error("[render_2dgs] pipeline create validation error:",$.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Ce,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:be,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[li].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Se,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Re,this.betaKernel=de,this.renderSettingsBgl=Ce,this.renderSplatsBgl=be,this.atlasBgl=Se}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setHtTailK(a){this.htTailK=a,this.htParamsBuffer!==null&&this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([a,0,0,0]))}setMeshOverlayEnabled(a){this.meshOverlayEnabled=a&&this.mesh!==null}setMeshCullEnabled(a){on({meshCull:a&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(a){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([a]))}setBfcParams(a,_){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,_[0],_[1],_[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const a=new ArrayBuffer(16),_=new Uint32Array(a),C=new Float32Array(a);_[0]=this.atlas.meta.width|0,_[1]=this.atlas.meta.layer_h|0,C[2]=this.atlas.meta.uv_extent||0,_[3]=this.atlas.meta.probe_mode?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureHtResources(a,_){var k,M,O,B;if(this.htCorePipeline===null){const T=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl]});this.htTailBgl=this.device.createBindGroupLayout({label:"ht_tail depth-weighting (group 3)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.htParamsBuffer=this.device.createBuffer({label:"ht params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.htParamsBuffer,0,new Float32Array([this.htTailK,0,0,0]));const I=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.renderSplatsBgl,this.atlasBgl,this.htTailBgl]});this.htCorePipeline=this.device.createRenderPipeline({label:"ht_core",layout:T,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_core",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}}),this.htTailPipeline=this.device.createRenderPipeline({label:"ht_tail",layout:I,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}}),this.htTail2Pipeline=this.device.createRenderPipeline({label:"ht_tail_sorted",layout:T,vertex:{module:this.renderShaderModule,entryPoint:"vs_main"},fragment:{module:this.renderShaderModule,entryPoint:"fs_tail_sorted",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"greater"}});const L=this.device.createShaderModule({label:"ht_composite",code:Yl});this.htCompositeBgl=this.device.createBindGroupLayout({label:"ht_composite inputs",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.htCompositePipeline=this.device.createRenderPipeline({label:"ht_composite",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:L,entryPoint:"vs_main"},fragment:{module:L,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),this.htComposite2Pipeline=this.device.createRenderPipeline({label:"ht_composite_sorted",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.htCompositeBgl]}),vertex:{module:L,entryPoint:"vs_main"},fragment:{module:L,entryPoint:"fs_sorted_tail",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}})}if(this.htCoreTexture!==null&&this.htW===a&&this.htH===_)return;(k=this.htDepthTexture)==null||k.destroy(),(M=this.htCoreTexture)==null||M.destroy(),(O=this.htAccumTexture)==null||O.destroy(),(B=this.htTransTexture)==null||B.destroy();const C={width:Math.max(1,a),height:Math.max(1,_),depthOrArrayLayers:1},b=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.htDepthTexture=this.device.createTexture({label:"ht depth",size:C,format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.htCoreTexture=this.device.createTexture({label:"ht core",size:C,format:"rgba16float",usage:b}),this.htAccumTexture=this.device.createTexture({label:"ht accum",size:C,format:"rgba16float",usage:b}),this.htTransTexture=this.device.createTexture({label:"ht trans",size:C,format:"r16float",usage:b}),this.htDepthView=this.htDepthTexture.createView(),this.htCoreView=this.htCoreTexture.createView(),this.htAccumView=this.htAccumTexture.createView(),this.htTransView=this.htTransTexture.createView(),this.htCompositeBindGroup=this.device.createBindGroup({label:"ht composite bind",layout:this.htCompositeBgl,entries:[{binding:0,resource:this.htCoreView},{binding:1,resource:this.htAccumView},{binding:2,resource:this.htTransView}]}),this.htTailBindGroup=this.device.createBindGroup({label:"ht tail bind (group 3)",layout:this.htTailBgl,entries:[{binding:0,resource:this.htDepthView},{binding:1,resource:{buffer:this.htParamsBuffer}}]}),this.htW=a,this.htH=_}ensureMeshDepthTexture(a,_){var C;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===a&&this.meshCullHeight===_||((C=this.meshDepthTexture)==null||C.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,a),height:Math.max(1,_),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=a,this.meshCullHeight=_))}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&mi(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a)}async debugReadSortedIndices(a=30){const _=Math.max(0,Math.min(a,this.pc.num_points)),C=_*Uint32Array.BYTES_PER_ELEMENT;if(C===0){console.log("[DEBUG] No indices to read.");return}const b=this.device.createBuffer({size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[li].sort_indices_buffer,0,b,0,C),this.device.queue.submit([k.finish()]),await b.mapAsync(GPUMapMode.READ);const M=new Uint32Array(b.getMappedRange());console.log("[DEBUG] Sorted indices (first",_,"):",Array.from(M)),b.unmap()}frame(a,_,C=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=C&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(ct.accel_flags[0]&Vs)!==0){const B=ct.canvas_size[0],T=ct.canvas_size[1];this.ensureMeshDepthTexture(B,T);const I={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},L=a.beginRenderPass(I);L.setPipeline(this.meshDepthPipeline),L.setBindGroup(0,this.meshDepthCameraBindGroup),L.setBindGroup(1,this.meshDepthMarginBindGroup),L.setVertexBuffer(0,this.mesh.vertexBuffer),L.setVertexBuffer(1,this.mesh.normalBuffer),L.setIndexBuffer(this.mesh.indexBuffer,"uint32"),L.drawIndexed(this.mesh.numIndices),L.end()}{a.clearBuffer(this.sort_info_buffer,0,4);const B={label:"cull"};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const T=a.beginComputePass(B);T.setPipeline(this.cullPipeline),T.setBindGroup(0,this.crsBg),T.setBindGroup(1,this.gsBg),T.setBindGroup(2,this.cullBg2),T.setBindGroup(3,this.meshCullBindGroup);const I=Math.ceil(this.pc.num_points/oc);T.dispatchWorkgroups(I,1,1),T.end()}{const B=a.beginComputePass({label:"calculate indirect dispatch"});B.setPipeline(this.indirectPipeline),B.setBindGroup(0,this.indirectBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}{const B={label:"preprocess"};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const T=a.beginComputePass(B);T.setPipeline(this.preprocessPipeline),T.setBindGroup(0,this.crsBg),T.setBindGroup(1,this.preprocessBg1),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),T.end()}if(!this.htEnabled||this.htSortedTail)for(let B=0;B<ts;B++){const T=B&1,I=this.sort_pipelines.passes[B],L=this.sort_localHistogramBindGroups[T],H=this.sort_scatterBindGroups[T];{const R={label:`upsweep_round${B}`};M&&!this.htEnabled&&B==0&&(R.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const X=a.beginComputePass(R);X.setPipeline(I.localHistogram),X.setBindGroup(0,L),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const R=a.beginComputePass({label:`prefix_round${B} - l0TileScan`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=a.beginComputePass({label:`prefix_round${B} - l1TileScanOnL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=a.beginComputePass({label:`prefix_round${B} - l1ScanSums`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,It,1),R.end()}{const R=a.beginComputePass({label:`prefix_round${B} - addL1ToL0`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),R.end()}{const R=a.beginComputePass({label:`prefix_round${B} - addL0ToElems`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),R.end()}{const R=a.beginComputePass({label:`prefix_round${B} - computeDigitBase`});R.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),R.setBindGroup(0,this.sort_prefixBindGroup),R.dispatchWorkgroups(1,1,1),R.end()}{const R={label:`scatter_round${B}`};M&&!this.htEnabled&&B==ts-1&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const X=a.beginComputePass(R);X.setPipeline(I.scatterElements),X.setBindGroup(0,H),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}if(this.htEnabled){const B=ct.canvas_size[0],T=ct.canvas_size[1];this.ensureHtResources(B,T);{const I={label:"ht_core",colorAttachments:[{view:this.htCoreView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4,endOfPassWriteIndex:k+5});const L=a.beginRenderPass(I);L.setPipeline(this.htCorePipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}if(this.htSortedTail){const I={label:"ht_tail_sorted",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6});const L=a.beginRenderPass(I);L.setPipeline(this.htTail2Pipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}else{const I={label:"ht_tail",colorAttachments:[{view:this.htAccumView,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.htTransView,loadOp:"clear",storeOp:"store",clearValue:[1,0,0,1]}],depthStencilAttachment:{view:this.htDepthView,depthReadOnly:!0}};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6});const L=a.beginRenderPass(I);L.setPipeline(this.htTailPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.setBindGroup(3,this.htTailBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end()}{const I={label:"ht_composite",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+7});const L=a.beginRenderPass(I);L.setPipeline(this.htSortedTail?this.htComposite2Pipeline:this.htCompositePipeline),L.setBindGroup(0,this.htCompositeBindGroup),L.draw(3),L.end()}}else{const B={label:"render",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const T=a.beginRenderPass(B);T.setPipeline(this.renderPipeline),T.setBindGroup(0,this.renderSettingsBindGroup),T.setBindGroup(1,this.renderSplatsBindGroup),T.setBindGroup(2,this.atlasBindGroup),T.drawIndirect(this.draw_indirect_buffer,0),T.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const I=this.device.createShaderModule({code:Jl}),L=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),H=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[L,H]}),vertex:{module:I,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:I,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const B={label:"mesh_overlay",colorAttachments:[{view:_,loadOp:"load",storeOp:"store"}]},T=a.beginRenderPass(B);T.setPipeline(this.meshOverlayPipeline),T.setBindGroup(0,this.meshDepthCameraBindGroup),T.setBindGroup(1,this.meshDepthMarginBindGroup),T.setVertexBuffer(0,this.mesh.vertexBuffer),T.setVertexBuffer(1,this.mesh.normalBuffer),T.setIndexBuffer(this.mesh.indexBuffer,"uint32"),T.drawIndexed(this.mesh.numIndices),T.end()}this.frameCount++}async readPerfMetrics(a){const _=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const C=this.device.createCommandEncoder({label:"timestamp resolve encoder"});C.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),C.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([C.finish()]),await this.device.queue.onSubmittedWorkDone();const b=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),O=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,B=Array.from({length:b.length},()=>[]);let T=0;for(let se=0;se<M;se++){const K=(O+se)%this.queryCapacityFrames,q=K*this.queriesPerFrame;let W=!0;for(let oe=0;oe<b.length;oe++){const[ve,Y,ie]=b[oe];if(k[q+ie]===0n||k[q+Y]===0n||k[q+Y]<k[q+ie]){W=!1;break}}if(!W){!_&&K%60===0&&console.debug("[timestamp] frame slot",K,"contains unwritten (0) timestamps, skipped in stats");continue}T++;for(let oe=0;oe<b.length;oe++){const[ve,Y,ie]=b[oe],ue=Number(k[q+ie]),xe=Number(k[q+Y]);B[oe].push((xe-ue)/1e6)}}if(T===0){this.resultBuffer.unmap(),_||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...B[0]);const I=[];let L=0,H=0,R=0;for(let se=0;se<b.length;se++){const K=b[se][0],q=B[se];let W=0;if(K==="Total"){const oe=this.allFrameTimes;W=oe.reduce((ie,ue)=>ie+ue,0)/oe.length;const ve=[...oe].sort((ie,ue)=>ie-ue);L=ve[Math.floor(ve.length*.99)]||0;const Y=oe.reduce((ie,ue)=>ie+Math.pow(ue-W,2),0)/oe.length;H=Math.sqrt(Y),R=W}else W=q.reduce((oe,ve)=>oe+ve,0)/q.length;I.push([K,W])}this.lastFrame+=this.frameCount,this.frameCount=0;const X=Object.fromEntries(I);this.lastStageBreakdownMs={cull:X.Culling??0,preprocess:X.Preprocess??0,sort:X.Sort??0,render:X.Render??0,total:X.Total??0};const Z=`[TIMESTAMP - ${this.constructor.name}]
`+I.map(([se,K])=>`${se}: ${K.toFixed(3)}ms`).join(`
`)+`
Total P99: ${L.toFixed(3)}ms
Total STD: ${H.toFixed(3)}ms
Total AVG: ${R.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(_||(console.log(Z),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const se=`Stage,ms
`,K=I.map(([oe,ve])=>`${oe},${ve.toFixed(3)}`).join(`
`),q="data:text/csv;charset=utf-8,"+encodeURIComponent(se+K),W=document.createElement("a");W.href=q,W.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(W),W.click(),W.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Z)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ac,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),_=a?a.width:1,C=a?a.height:1;ic({width:_,height:C,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),wi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:In(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:In(this.pc.num_points*uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const _=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=_.length>0?_:this.downloadOnceFileName}else{const _=new Date,C=`${_.getFullYear()}${String(_.getMonth()+1).padStart(2,"0")}${String(_.getDate()).padStart(2,"0")}_${String(_.getHours()).padStart(2,"0")}${String(_.getMinutes()).padStart(2,"0")}${String(_.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${C}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function vc(o,a){return 2*Math.atan(a/(2*o))}function bc(o,a,_,C){const b=Math.tan(C/2),k=Math.tan(_/2),M=b*o,O=-M,B=k*o,T=-B,I=dt.create();return I[0]=2*o/(B-T),I[5]=-2*o/(M-O),I[2]=(B+T)/(B-T),I[6]=(M+O)/(M-O),I[14]=1,I[10]=a/(a-o),I[11]=-(a*o)/(a-o),dt.transpose(I,I),I}async function gc(o){Et(`loading scene camera file... : ${o}`);const _=await(await fetch(o)).json();return Et(`loaded cameras count: ${_.length}`),_.map(C=>{const b=G.clone(C.position),k=Pt.create(...C.rotation.flat()),M=k[0],O=k[4],B=k[8],T=k[1],I=k[5],L=k[9],H=k[2],R=k[6],X=k[10];M*(I*X-L*R)-O*(T*X-L*H)+B*(T*R-I*H)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const Z=dt.fromMat3(k);return{position:b,rotation:Z,img_name:C.img_name,id:C.id}})}const wc=4*2,xc=4*16,xi=4*xc+2*wc;function yc(o){return o.createBuffer({label:"camera uniform",size:xi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const rn=new Float32Array(xi/Float32Array.BYTES_PER_ELEMENT),ns=class ns{constructor(a,_){U(this,"uniform_buffer");U(this,"position",G.create());U(this,"rotation",dt.create());U(this,"fovY",45/180*Math.PI);U(this,"fovX");U(this,"focal",Jr.create());U(this,"viewport",Jr.create());U(this,"view_matrix",dt.identity());U(this,"view_inv_matrix",dt.identity());U(this,"proj_matrix",dt.identity());U(this,"proj_inv_matrix",dt.identity());U(this,"_negPos",G.create());U(this,"look",G.create(0,0,1));U(this,"up",G.create(0,1,0));U(this,"right",G.create(1,0,0));this.canvas=a,this.device=_,this.uniform_buffer=yc(_),this.on_update_canvas()}on_update_canvas(){const a=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=a,this.focal[1]=a,this.fovX=vc(a,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=bc(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),G.transformMat4Upper3x3(ns.Z_AXIS,this.view_inv_matrix,this.look),G.normalize(this.look,this.look),G.cross(this.up,this.look,this.right),G.normalize(this.right,this.right);let a=0;rn.set(this.view_matrix,a),a+=16,rn.set(this.view_inv_matrix,a),a+=16,rn.set(this.proj_matrix,a),a+=16,rn.set(this.proj_inv_matrix,a),a+=16,rn.set(this.viewport,a),a+=2,rn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,rn)}set_preset(a){G.copy(a.position,this.position),dt.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}getFov(){return this.fovY}};U(ns,"Z_AXIS",G.create(0,0,1));let Os=ns;const Pc=G.create(1,0,0),Sc=G.create(0,1,0);function Cc(o,a){const _=o[0],C=o[4],b=o[8],k=o[1],M=o[5],O=o[9],B=o[2],T=o[6],I=o[10],L=_+M+I;let H,R,X,j;if(L>0){const Z=.5/Math.sqrt(L+1);H=.25/Z,R=(T-O)*Z,X=(b-B)*Z,j=(k-C)*Z}else if(_>M&&_>I){const Z=2*Math.sqrt(1+_-M-I);H=(T-O)/Z,R=.25*Z,X=(C+k)/Z,j=(b+B)/Z}else if(M>I){const Z=2*Math.sqrt(1+M-_-I);H=(b-B)/Z,R=(C+k)/Z,X=.25*Z,j=(O+T)/Z}else{const Z=2*Math.sqrt(1+I-_-M);H=(k-C)/Z,R=(b+B)/Z,X=(O+T)/Z,j=.25*Z}return a[0]=R,a[1]=X,a[2]=j,a[3]=H,a}class Ec{constructor(a){U(this,"element");U(this,"enabled",!0);U(this,"center",G.create(0,0,0));U(this,"up",G.create(0,1,0));U(this,"rotation",[0,0]);U(this,"shift",[0,0]);U(this,"scroll",0);U(this,"speed",.1);U(this,"sensitivity",.08);U(this,"leftPressed",!1);U(this,"rightPressed",!1);U(this,"leftDragPans",!1);U(this,"lastX",0);U(this,"lastY",0);U(this,"touches",new Map);U(this,"lastTouchCenter",null);U(this,"lastPinchDistance",null);U(this,"lastTwoFingerAngle",null);U(this,"lastTouchCount",0);U(this,"roll",0);U(this,"_dir",G.create());U(this,"_right",G.create());U(this,"_upCam",G.create());U(this,"_scratch",G.create());U(this,"_qY",ht.create());U(this,"_qX",ht.create());U(this,"_qRot",ht.create());U(this,"_qLocal",ht.create());U(this,"_qWorldToCam",ht.create());U(this,"_scratchMat3",Pt.create());U(this,"bboxMin",null);U(this,"bboxMax",null);U(this,"anchor",G.create(0,0,0));U(this,"downCallback",a=>{var _,C,b,k;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(C=(_=a.target)==null?void 0:_.setPointerCapture)==null||C.call(_,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(k=(b=a.target)==null?void 0:b.setPointerCapture)==null||k.call(b,a.pointerId),a.preventDefault())}});U(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const _=a.pageX-this.lastX,C=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=_,this.rotation[1]-=C):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=_,this.shift[0]+=C)});U(this,"upCallback",a=>{var _,C,b,k;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(C=(_=a.target)==null?void 0:_.releasePointerCapture)==null||C.call(_,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(b=a.target)==null?void 0:b.releasePointerCapture)==null||k.call(b,a.pointerId),a.preventDefault()});U(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let _=a.deltaY;a.deltaMode===1?_*=16:a.deltaMode===2&&(_*=100),this.scroll+=_*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",_=>_.preventDefault())}setCenter(a){G.copy(a,this.center),G.copy(a,this.anchor)}setOrbitPivot(a){G.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const _=this.camera.rotation;G.set(_[2],_[6],_[10],this._dir),G.normalize(this._dir,this._dir),G.scale(this._dir,a,this._dir),G.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(G.subtract(this.center,a.position,this._scratch),G.length(this._scratch)<1e-6)return;G.normalize(this._scratch,this._scratch),G.cross(this.up,this._scratch,this._right),G.length(this._right)<1e-6&&G.set(1,0,0,this._right),G.normalize(this._right,this._right),G.cross(this._scratch,this._right,this._upCam),G.normalize(this._upCam,this._upCam);const _=a.rotation;_[0]=this._right[0],_[1]=this._upCam[0],_[2]=this._scratch[0],_[3]=0,_[4]=this._right[1],_[5]=this._upCam[1],_[6]=this._scratch[1],_[7]=0,_[8]=this._right[2],_[9]=this._upCam[2],_[10]=this._scratch[2],_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,a.update_buffer()}setBbox(a,_){this.bboxMin=G.create(a[0],a[1],a[2]),this.bboxMax=G.create(_[0],_[1],_[2]);const C=(a[0]+_[0])*.5,b=(a[1]+_[1])*.5,k=(a[2]+_[2])*.5;G.set(C,b,k,this.center),G.set(C,b,k,this.anchor)}resetToCamera(){const a=this.camera.rotation;G.set(a[2],a[6],a[10],this._dir),G.normalize(this._dir,this._dir);let _=null;if(this.bboxMin&&this.bboxMax){let C=-1/0,b=1/0,k=!1;for(let M=0;M<3;M++){const O=this._dir[M],B=this.bboxMin[M]-this.camera.position[M],T=this.bboxMax[M]-this.camera.position[M];if(Math.abs(O)>1e-8){const I=B/O,L=T/O;C=Math.max(C,Math.min(I,L)),b=Math.min(b,Math.max(I,L))}else if(B>0||T<0){k=!0;break}}!k&&C<=b&&b>0&&(_=(Math.max(C,0)+b)*.5)}if(_===null||!isFinite(_)||_<.001){G.subtract(this.anchor,this.camera.position,this._scratch);const C=G.dot(this._scratch,this._dir);_=C>.001?C:G.length(this._scratch)}_=Math.max(.1,_),G.scale(this._dir,_,this._dir),G.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const _=this.touches.values().next().value;if(this.lastTouchCenter){const C=_.x-this.lastTouchCenter[0],b=_.y-this.lastTouchCenter[1];this.rotation[0]+=C*.3,this.rotation[1]-=b*.3}this.lastTouchCenter=[_.x,_.y]}else if(a===2){const _=Array.from(this.touches.values()),C=(_[0].x+_[1].x)*.5,b=(_[0].y+_[1].y)*.5,k=_[1].x-_[0].x,M=_[1].y-_[0].y,O=Math.hypot(k,M),B=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const T=C-this.lastTouchCenter[0],I=b-this.lastTouchCenter[1],L=Math.hypot(T,I),H=Math.abs(O-this.lastPinchDistance);let R=B-this.lastTwoFingerAngle;R>Math.PI&&(R-=2*Math.PI),R<-Math.PI&&(R+=2*Math.PI),L>.5&&(this.shift[1]-=T,this.shift[0]+=I),H>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(O/this.lastPinchDistance)*10),Math.abs(R)>.0087&&(this.roll+=-R)}this.lastTouchCenter=[C,b],this.lastPinchDistance=O,this.lastTwoFingerAngle=B}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const _=this.camera;{const j=_.rotation;this.up[0]=j[1],this.up[1]=j[5],this.up[2]=j[9],G.length(this.up)>1e-6?G.normalize(this.up,this.up):G.set(0,1,0,this.up)}let C=!1;if(Math.abs(this.roll)>1e-4){const j=_.rotation;G.set(j[2],j[6],j[10],this._scratch),G.normalize(this._scratch,this._scratch),ht.fromAxisAngle(this._scratch,this.roll,this._qRot),G.transformQuat(this.up,this._qRot,this.up),G.normalize(this.up,this.up),this.roll=0,C=!0}G.subtract(_.position,this.center,this._dir);let b=G.length(this._dir);b<1e-6&&(b=1e-6);const k=Math.exp(Math.log(b)+this.scroll*a*10*this.speed);G.scale(this._dir,k/b,this._dir),b=k;const M=_.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],G.normalize(this._right,this._right),G.length(this._right)<1e-6&&G.set(1,0,0,this._right);const O=G.create(M[1],M[5],M[9]);G.normalize(O,O),G.length(O)<1e-6&&G.set(0,1,0,O);const B=a*this.speed*.1*b,T=this.shift[1]*B,I=-this.shift[0]*B;G.scale(this._right,T,this._scratch),G.add(this.center,this._scratch,this.center),G.add(_.position,this._scratch,_.position),G.scale(O,I,this._scratch),G.add(this.center,this._scratch,this.center),G.add(_.position,this._scratch,_.position);const L=this.rotation[0]*a*this.sensitivity,H=this.rotation[1]*a*this.sensitivity;if(Math.abs(L)>1e-5||Math.abs(H)>1e-5||C){const j=_.rotation;Cc(j,this._qWorldToCam),ht.fromAxisAngle(Pc,-H,this._qX),ht.fromAxisAngle(Sc,-L,this._qY),ht.multiply(this._qX,this._qY,this._qLocal),ht.normalize(this._qLocal,this._qLocal),ht.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ht.normalize(this._qWorldToCam,this._qWorldToCam),Pt.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,_.rotation);const Z=_.rotation,se=Z[2],K=Z[6],q=Z[10];_.position[0]=this.center[0]-se*b,_.position[1]=this.center[1]-K*b,_.position[2]=this.center[2]-q*b,this.up[0]=Z[1],this.up[1]=Z[5],this.up[2]=Z[9],G.normalize(this.up,this.up)}else G.add(this.center,this._dir,_.position);_.update_buffer();const X=Math.pow(.8,a*60);this.rotation[0]*=X,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=X,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=X,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=X,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=X,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function yi(o){const a=G.create();for(const _ of o)G.add(a,_,a);return G.scale(a,1/Math.max(o.length,1),a)}function Pi(o,a){const _=Pt.create();Pt.inverse(o,_);const C=G.create();return C[0]=_[0]*a[0]+_[4]*a[1]+_[8]*a[2],C[1]=_[1]*a[0]+_[5]*a[1]+_[9]*a[2],C[2]=_[2]*a[0]+_[6]*a[1]+_[10]*a[2],C}function kc(o){const a=o.slice(),_=[1,0,0,0,1,0,0,0,1],C=(B,T)=>a[B*3+T],b=(B,T,I)=>{a[B*3+T]=I},k=(B,T)=>_[B*3+T],M=(B,T,I)=>{_[B*3+T]=I};for(let B=0;B<30;B++){let T=0,I=1,L=Math.abs(C(0,1));if(Math.abs(C(0,2))>L&&(T=0,I=2,L=Math.abs(C(0,2))),Math.abs(C(1,2))>L&&(T=1,I=2,L=Math.abs(C(1,2))),L<1e-12)break;const H=C(T,T),R=C(I,I),X=C(T,I);let j;Math.abs(H-R)<1e-30?j=Math.PI/4*Math.sign(X):j=.5*Math.atan2(2*X,H-R);const Z=Math.cos(j),se=Math.sin(j);for(let K=0;K<3;K++){const q=C(K,T),W=C(K,I);b(K,T,Z*q+se*W),b(K,I,-se*q+Z*W)}for(let K=0;K<3;K++){const q=C(T,K),W=C(I,K);b(T,K,Z*q+se*W),b(I,K,-se*q+Z*W)}for(let K=0;K<3;K++){const q=k(K,T),W=k(K,I);M(K,T,Z*q+se*W),M(K,I,-se*q+Z*W)}}const O=[];for(let B=0;B<3;B++)O.push({val:C(B,B),vec:G.create(k(0,B),k(1,B),k(2,B))});return O.sort((B,T)=>T.val-B.val),{vals:[O[0].val,O[1].val,O[2].val],vecs:[O[0].vec,O[1].vec,O[2].vec]}}function Mc(o,a){const _=yi(o);let C=0,b=0,k=0,M=0,O=0,B=0;for(const X of o){const j=X[0]-_[0],Z=X[1]-_[1],se=X[2]-_[2];C+=j*j,b+=j*Z,k+=j*se,M+=Z*Z,O+=Z*se,B+=se*se}const T=[C,b,k,b,M,O,k,O,B],{vecs:I}=kc(T);let L=I[0],H=I[1],R=I[2];return G.dot(R,a)<0&&(G.scale(R,-1,R),G.scale(H,-1,H)),{centroid:_,normal:R,u:L,v:H}}function Bc(o){let a=0,_=0,C=0,b=0,k=0,M=0,O=0,B=0,T=0;for(const[Z,se]of o){const K=-2*Z,q=-2*se,W=1,oe=-(Z*Z+se*se);a+=K*K,_+=K*q,C+=K*W,b+=q*q,k+=q*W,M+=W*W,O+=K*oe,B+=q*oe,T+=W*oe}const I=Pt.create(a,_,C,_,b,k,C,k,M),L=Pi(I,G.create(O,B,T)),H=L[0],R=L[1],X=L[2],j=H*H+R*R-X;return{center:[H,R],radius:Math.sqrt(Math.max(j,1e-12))}}function Tc(o,a){let _=0,C=0,b=0,k=0,M=0,O=0,B=0,T=0,I=0;for(let H=0;H<o.length;H++){const R=o[H],X=G.normalize(a[H],G.create()),j=1-X[0]*X[0],Z=-X[0]*X[1],se=-X[0]*X[2],K=1-X[1]*X[1],q=-X[1]*X[2],W=1-X[2]*X[2];_+=j,C+=Z,b+=se,k+=K,M+=q,O+=W,B+=j*R[0]+Z*R[1]+se*R[2],T+=Z*R[0]+K*R[1]+q*R[2],I+=se*R[0]+q*R[1]+W*R[2]}const L=Pt.create(_,C,b,C,k,M,b,M,O);return Pi(L,G.create(B,T,I))}function Si(o,a={}){if(o.length===0)return null;const _=a.tiltDownDeg??8,C=a.radiusScale??1,b=a.alignFirst??!0,k=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(ie=>G.clone(ie.position)),O=o.map(ie=>{const ue=ie.rotation;return G.create(ue[8],ue[9],ue[10])}),B=o.map(ie=>{const ue=ie.rotation;return G.create(ue[4],ue[5],ue[6])}),T=yi(B),I=G.normalize(G.scale(T,-1,G.create())),{centroid:L,normal:H,u:R,v:X}=Mc(M,I),j=M.map(ie=>{const ue=G.sub(ie,L,G.create());return[G.dot(ue,R),G.dot(ue,X)]}),{center:Z,radius:se}=Bc(j),K=se*C,q=G.add(L,G.add(G.scale(R,Z[0],G.create()),G.scale(X,Z[1],G.create()),G.create()),G.create()),W=Tc(M,O),oe=K*Math.tan(_*Math.PI/180),ve=G.sub(W,G.scale(H,oe,G.create()),G.create());let Y=0;if(b){const ie=G.sub(M[0],q,G.create());Y=Math.atan2(G.dot(ie,X),G.dot(ie,R))/(2*Math.PI)%1,Y<0&&(Y+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${K.toFixed(2)}, tilt=${_}°, normal=[${H[0].toFixed(2)}, ${H[1].toFixed(2)}, ${H[2].toFixed(2)}], startPhase=${Y.toFixed(3)}`),{center:q,radius:K,normal:H,u:R,v:X,lookAt:ve,startPhase:Y,direction:k}}function Ci(o,a){const _=(o.startPhase+a*o.direction)*2*Math.PI,C=Math.cos(_),b=Math.sin(_),k=G.add(o.center,G.add(G.scale(o.u,o.radius*C,G.create()),G.scale(o.v,o.radius*b,G.create()),G.create()),G.create()),M=G.normalize(G.sub(o.lookAt,k,G.create())),O=G.cross(M,o.normal,G.create());G.length(O)<1e-6&&G.copy(o.u,O),G.normalize(O,O);const B=G.cross(M,O,G.create());G.normalize(B,B);const T=dt.create();return T[0]=O[0],T[1]=B[0],T[2]=M[0],T[3]=0,T[4]=O[1],T[5]=B[1],T[6]=M[1],T[7]=0,T[8]=O[2],T[9]=B[2],T[10]=M[2],T[11]=0,T[12]=0,T[13]=0,T[14]=0,T[15]=1,{position:k,rotation:T,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Ac(o,a={}){const _=Si(o,a);if(!_)return[];const C=a.numViews??120;return Array.from({length:C},(b,k)=>({...Ci(_,k/C),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Dc(o){const a=new Uint8Array(o),_=Math.min(a.byteLength,65536),C=new TextDecoder("ascii").decode(a.subarray(0,_)),b=C.indexOf("end_header");if(b<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=b+10+1,M=C.slice(0,b).split(/\r?\n/).map(ne=>ne.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const O=M.find(ne=>ne.startsWith("format"));if(!O||!O.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${O??"<none>"})`);const B={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},T=[];let I=null;for(const ne of M)if(ne.startsWith("element ")){const[,ae,Le]=ne.split(/\s+/);I={name:ae,count:parseInt(Le,10),props:[],bytesPerRecord:0,hasList:!1},T.push(I)}else if(ne.startsWith("property ")&&I){const ae=ne.split(/\s+/);if(ae[1]==="list"){const Le=ae[2],ye=ae[3],Be=ae[4];I.props.push({name:Be,type:ye,isList:!0,listCountType:Le,listItemType:ye}),I.hasList=!0}else{const Le=ae[1],ye=ae[2];if(I.props.push({name:ye,type:Le,isList:!1}),B[Le]===void 0)throw new Error(`mesh PLY: unsupported prop type '${Le}'`);I.bytesPerRecord+=B[Le]}}const L=T.find(ne=>ne.name==="vertex"),H=T.find(ne=>ne.name==="face"||ne.name==="faces");if(!L)throw new Error("mesh PLY: missing 'element vertex'");if(!H)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(L.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const R=L.props.find(ne=>ne.name==="x"),X=L.props.find(ne=>ne.name==="y"),j=L.props.find(ne=>ne.name==="z");if(!R||!X||!j)throw new Error("mesh PLY: vertex must have x/y/z");let Z=0;const se=new Map;for(const ne of L.props)se.set(ne.name,{off:Z,type:ne.type}),Z+=B[ne.type];const K=se.get("x"),q=se.get("y"),W=se.get("z");if(K.type!==q.type||K.type!==W.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${K.type}/${q.type}/${W.type})`);const oe=K.type,ve=oe==="double"||oe==="float64";if(!ve&&oe!=="float"&&oe!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${oe}')`);const Y=new Float32Array(L.count*3),ie=new DataView(o),ue=k,xe=L.bytesPerRecord;for(let ne=0;ne<L.count;ne++){const ae=ue+ne*xe;ve?(Y[ne*3+0]=ie.getFloat64(ae+K.off,!0),Y[ne*3+1]=ie.getFloat64(ae+q.off,!0),Y[ne*3+2]=ie.getFloat64(ae+W.off,!0)):(Y[ne*3+0]=ie.getFloat32(ae+K.off,!0),Y[ne*3+1]=ie.getFloat32(ae+q.off,!0),Y[ne*3+2]=ie.getFloat32(ae+W.off,!0))}const Ue=ue+L.count*xe,Ge=H.props.find(ne=>ne.isList);if(!Ge)throw new Error("mesh PLY: face element has no list property");const Re=B[Ge.listCountType],Ce=B[Ge.listItemType];if(Re!==1)throw new Error(`mesh PLY: unsupported face list count size ${Re}`);let be=Ue,Se=0;for(let ne=0;ne<H.count;ne++){const ae=ie.getUint8(be);ae===3&&Se++,be+=1+ae*Ce}const de=new Uint32Array(Se*3);be=Ue;let $=0;for(let ne=0;ne<H.count;ne++){const ae=ie.getUint8(be);if(be+=1,ae===3)for(let Le=0;Le<3;Le++){const ye=be+Le*Ce;let Be;if(Ce===4)Be=ie.getUint32(ye,!0);else if(Ce===2)Be=ie.getUint16(ye,!0);else if(Ce===1)Be=ie.getUint8(ye);else throw new Error(`mesh PLY: unsupported face index size ${Ce}`);de[$++]=Be}be+=ae*Ce}return{positions:Y,indices:de}}function zc(o){const a=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const _=a.getUint32(0,!0),C=a.getUint32(4,!0),b=_*12,k=C*4;if(o.byteLength<8+b+k)throw new Error(`mesh .bin: truncated (expected ${8+b+k} B, got ${o.byteLength} B)`);const M=new Float32Array(o.slice(8,8+b)),O=new Uint32Array(o.slice(8+b,8+b+k));return{positions:M,indices:O}}function Ei(o,a){return(a??"").toLowerCase().endsWith(".ply")?Dc(o):zc(o)}function Lc(o,a){const _=o.length/3,C=new Float32Array(_*3);for(let b=0;b<a.length;b+=3){const k=a[b]*3,M=a[b+1]*3,O=a[b+2]*3,B=o[k],T=o[k+1],I=o[k+2],L=o[M],H=o[M+1],R=o[M+2],X=o[O],j=o[O+1],Z=o[O+2],se=L-B,K=H-T,q=R-I,W=X-B,oe=j-T,ve=Z-I,Y=K*ve-q*oe,ie=q*W-se*ve,ue=se*oe-K*W;C[k]+=Y,C[k+1]+=ie,C[k+2]+=ue,C[M]+=Y,C[M+1]+=ie,C[M+2]+=ue,C[O]+=Y,C[O+1]+=ie,C[O+2]+=ue}for(let b=0;b<_;b++){const k=b*3,M=C[k],O=C[k+1],B=C[k+2],T=Math.sqrt(M*M+O*O+B*B);if(T>1e-12){const I=1/T;C[k]=M*I,C[k+1]=O*I,C[k+2]=B*I}}return C}function ki(o,a){const _=o.createBuffer({label:"mesh-cull vertex buffer",size:a.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(_,0,a.positions);const C=Lc(a.positions,a.indices),b=o.createBuffer({label:"mesh-cull normal buffer",size:C.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(b,0,C);const k=o.createBuffer({label:"mesh-cull index buffer",size:a.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(k,0,a.indices),{vertexBuffer:_,normalBuffer:b,indexBuffer:k,numVerts:a.positions.length/3,numIndices:a.indices.length}}async function Gc(o,a){try{const _=await fetch(a);if(!_.ok)return console.warn(`[mesh-cull] fetch failed for ${a}: ${_.status}`),null;const C=await _.arrayBuffer(),b=Ei(C,a);return console.log(`[mesh-cull] loaded ${a}: ${b.positions.length/3} verts, ${b.indices.length/3} tris`),ki(o,b)}catch(_){return console.warn(`[mesh-cull] load error for ${a}:`,_),null}}function Ic(o,a,_){try{const C=Ei(a,_);return console.log(`[mesh-cull] loaded from bundle: ${C.positions.length/3} verts, ${C.indices.length/3} tris`),ki(o,C)}catch(C){return console.warn("[mesh-cull] parse error:",C),null}}const Mi="BITYMI01",Uc=0,Rc=1,Vc=2,Oc=3,Fc=4,Nc=5,$c=6;function Jn(o){const a=(o&32768)>>15,_=(o&31744)>>10,C=o&1023;return _===0?(a?-1:1)*Math.pow(2,-14)*(C/1024):_===31?C?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,_-15)*(1+C/1024)}function ui(o,a,_,C,b,k){const M=(o-_.width*.5)/C.focal[0],O=-((a-_.height*.5)/C.focal[1]),B=C.rotation,T=B[0],I=B[4],L=B[8],H=B[1],R=B[5],X=B[9],j=B[2],Z=B[6],se=B[10];let K=M*T+O*H+j,q=M*I+O*R+Z,W=M*L+O*X+se;const oe=Math.hypot(K,q,W)||1;K/=oe,q/=oe,W/=oe;const ve=C.position[0],Y=C.position[1],ie=C.position[2],ue=k*.005,xe=ue*ue,Ue=new Uint32Array(b.buffer,b.byteOffset,b.length),Ge=b.length/8;let Re=1/0,Ce=0,be=0,Se=0,de=-1;for(let $=0;$<Ge;$++){const ne=$*8,ae=b[ne+0]-ve,Le=b[ne+1]-Y,ye=b[ne+2]-ie,Be=ae*K+Le*q+ye*W;if(Be<=0)continue;const me=ae-Be*K,Me=Le-Be*q,qe=ye-Be*W;if(me*me+Me*Me+qe*qe>=xe||!(Ue[ne+7]>>>16&1))continue;const y=Ue[ne+5],i=Ue[ne+6],h=Jn(y&65535),p=Jn(y>>>16&65535),g=Jn(i&65535),v=Jn(i>>>16&65535),x=Math.hypot(h,p,g,v)||1,S=h/x,r=p/x,m=g/x,d=v/x,f=2*(r*d+S*m),l=2*(m*d-S*r),u=1-2*(r*r+m*m),P=K*f+q*l+W*u;let w;Math.abs(P)>1e-6?(w=(ae*f+Le*l+ye*u)/P,(!isFinite(w)||w<=0)&&(w=Be)):w=Be,w<Re&&(Re=w,Ce=ve+w*K,be=Y+w*q,Se=ie+w*W,de=$)}return de<0?null:[Ce,be,Se]}function Bi(o){const a=new Uint8Array(o),_=new TextDecoder().decode(a.subarray(0,8));if(_!==Mi)throw new Error(`Not a BITYMI bundle (bad magic '${_}')`);const C=new DataView(o),b=C.getUint32(8,!0),k=12,M=20;let O=null,B=null,T=null,I=null;for(let L=0;L<b;L++){const H=k+L*M,R=C.getUint32(H+0,!0),X=Number(C.getBigUint64(H+4,!0)),j=Number(C.getBigUint64(H+12,!0)),Z=a.slice(X,X+j).buffer;R===Uc||R===Rc||R===Nc?O=Z:R===Vc?B=Z:R===Oc||R===Fc?T=Z:R===$c&&(I=Z)}if(O===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:O,camerasBuffer:B,atlasBuffer:T,meshBuffer:I}}async function qc(o,a){var M;const _=await fetch(o);if(!_.ok)throw new Error(`fetch failed: ${_.status} ${_.statusText}`);const C=(()=>{const O=_.headers.get("content-length");return O&&parseInt(O,10)||void 0})(),b=(M=_.body)==null?void 0:M.getReader();let k;if(!b)k=await _.arrayBuffer(),a&&a(k.byteLength,C,0);else{const O=[];let B=0,T=performance.now(),I=0;for(;;){const{done:R,value:X}=await b.read();if(R)break;O.push(X),B+=X.byteLength;const j=performance.now();if(j-T>=150&&a){const Z=(B-I)/((j-T)/1e3);a(B,C,Z),T=j,I=B}}const L=new Uint8Array(B);let H=0;for(const R of O)L.set(R,H),H+=R.byteLength;k=L.buffer,a&&a(B,C,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===Mi?{bundle:Bi(k),rawPly:null}:{bundle:null,rawPly:k}}function Wc(o){return new Promise(a=>{const _=document.createElement("input");_.type="file",_.accept=o,_.style.display="none",_.onchange=()=>{var C;return a(((C=_.files)==null?void 0:C[0])??null)},document.body.appendChild(_),_.click(),setTimeout(()=>document.body.removeChild(_),1e3)})}function jc(o,a,_){const C=document.getElementById("ui-panel-container"),b=document.getElementById("load-button"),k=document.getElementById("quick-links");b&&(b.onclick=async()=>{const I=await Wc(".ply,.bitymi");if(I)if(C&&(C.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const L=await I.arrayBuffer(),{pcBuffer:H}=Bi(L),R=new File([H],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),X=await Gs(R,o);a(X)}else{const L=await Gs(I,o);a(L)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),O=M.get("bundle")??M.get("model_url"),B=M.get("camera_url"),T=M.get("mesh_url");O&&(C&&(C.style.display="none"),_(O,B,T))}async function Hc(o,a,_,C){const b=new Os(o,_),k=new Ec(b);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const O=typeof window<"u"&&window.parent!==window,B={pos:new Float32Array(3),rot:new Float32Array(16)};if(O){window.addEventListener("message",v=>{const x=v.data;if(!(!x||x.type!=="halloumi_sync_pose")&&!(!Array.isArray(x.position)||x.position.length!==3)&&!(!Array.isArray(x.rotation)||x.rotation.length!==16)){for(let S=0;S<3;S++)b.position[S]=x.position[S];for(let S=0;S<16;S++)b.rotation[S]=x.rotation[S];b.update_buffer(),k.resetToCamera();for(let S=0;S<3;S++)B.pos[S]=b.position[S];for(let S=0;S<16;S++)B.rot[S]=b.rotation[S]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const T=()=>{if(!O)return;const v=b.position,x=b.rotation;let S=!1;for(let r=0;r<3;r++)if(Math.abs(v[r]-B.pos[r])>1e-6){S=!0;break}if(!S){for(let r=0;r<16;r++)if(Math.abs(x[r]-B.rot[r])>1e-6){S=!0;break}}if(S){for(let r=0;r<3;r++)B.pos[r]=v[r];for(let r=0;r<16;r++)B.rot[r]=x[r];try{window.parent.postMessage({type:"halloumi_camera_state",position:[v[0],v[1],v[2]],rotation:Array.from(x)},"*")}catch{}}},I="rgba8unorm";a.configure({device:_,format:I,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let L=null;const H=()=>{b.on_update_canvas(),L!==null&&Qn(o.width,o.height,_,L.render_settings_buffer)};new ResizeObserver(()=>{const v=Math.max(.25,i.render_scale),x=Math.max(1,Math.ceil(v*o.clientWidth)),S=Math.max(1,Math.ceil(v*o.clientHeight));o.width===x&&o.height===S||(o.width=x,o.height=S,H())}).observe(o);let X=0,j=0;const Z=()=>{(o.width!==X||o.height!==j)&&(X=o.width,j=o.height,H())},se=new URLSearchParams(window.location.search);let q=se.get("animation")==="1";k.enabled=!q;const W=se.get("camera_url"),oe=se.get("mesh_cull"),ve=oe==="1"||oe==="true",Y=se.get("mesh_normal_margin")??se.get("mesh_margin"),ie=Y!==null?Number(Y):NaN,ue=Number.isFinite(ie)?ie:0,xe=se.get("mesh_debug"),Ue=xe==="1"||xe==="true",Ge=se.get("bfc"),Re=Ge==="1"||Ge==="true",Ce=se.get("bfc_cos"),be=Ce!==null?Number(Ce):NaN,Se=Number.isFinite(be)?be:2,de=se.get("mesh_sample_mode"),$=de!==null?parseInt(de,10):NaN,ne=Number.isFinite($)&&$>=0&&$<=7?$:1,ae=se.get("mesh_silhouette"),Le=ae==="1"||ae==="true",ye=se.get("mesh_invert_depth"),Be=ye==="1"||ye==="true",me=se.get("ht"),Me=me==="2"?2:me==="1"||me==="true"?1:0,qe=se.get("ht_k"),A=qe!==null?Number(qe):NaN,F=Number.isFinite(A)?A:150,y=Math.max(1,window.devicePixelRatio||1),i={gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Re,bfc_cos:Se,ht_mode:Me,ht_k:F,mesh_cull:ve,mesh_margin:ue,mesh_debug:Ue,mesh_sample_mode:ne,mesh_silhouette:Le,mesh_invert_depth:Be,render_scale:1},h=new jl.Pane({title:"Config",expanded:!0});h.addInput(i,"animate",{label:"Animate"}).on("change",v=>{const x=q;q=v.value,k.enabled=!v.value,!x&&q&&p.value&&p.value.onAnimateStart(),x&&!q&&p.value&&p.value.onAnimateStop()}),h.addInput(i,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const p={value:null};jc(_,v=>g(v,[],null,null),async(v,x,S)=>{let r=x??W,m,d=null,f=null;const l=v.toLowerCase();if(l.endsWith(".bitymi")||l.includes(".bitymi?")){Ns("downloading bundle ...");try{const{bundle:P}=await qc(v,(D,V,N)=>{const re=D/1048576,te=V?V/(1024*1024):void 0,J=N/(1024*1024),fe=V?Math.min(99,Math.floor(D/V*100)):void 0,ce=te?`total ${te.toFixed(1)} MB`:"total -- MB",pe=te&&fe!==void 0?`${re.toFixed(1)} MB downloaded (${fe}%)`:`${re.toFixed(1)} MB downloaded`,_e=`${J.toFixed(2)} MB/s`;Ut(`downloading bundle ...
${ce}, ${pe}
${_e}`)});if(!P)throw new Error("Expected a .bitymi bundle");Ut("parsing PLY ...");const w=new File([P.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(m=await Gs(w,_),!r&&P.camerasBuffer&&(r=URL.createObjectURL(new Blob([P.camerasBuffer],{type:"application/json"}))),P.atlasBuffer){const D=P.atlasBuffer.byteLength/1048576;Ut(`uploading atlas ...
${D.toFixed(1)} MB BC7`);try{const V=Fl(P.atlasBuffer);d=$l(_,V,!0)}catch(V){console.warn("[atlas] failed to parse/upload atlas:",V)}}P.meshBuffer&&!S&&(Ut("uploading mesh ..."),f=Ic(_,P.meshBuffer,"bundle.mesh"))}catch(P){throw Ln(),P}}else m=await ql(v,_);S&&(Ut("loading mesh ..."),f=await Gc(_,S));const u=r?await gc(r):[];u.length>0&&b.set_preset(u[0]),g(m,u,d,f)});function g(v,x=[],S=null,r=null){const m=[(v.bbox.min[0]+v.bbox.max[0])/2,(v.bbox.min[1]+v.bbox.max[1])/2,(v.bbox.min[2]+v.bbox.max[2])/2];k.setBbox(v.bbox.min,v.bbox.max);const d=.5*Math.sqrt((v.bbox.max[0]-v.bbox.min[0])**2+(v.bbox.max[1]-v.bbox.min[1])**2+(v.bbox.max[2]-v.bbox.min[2])**2);function f(Q,he){const le=ui(Q,he,o,b,v.surfel_data,d);le&&(k.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function l(){const Q=o.width*.5,he=o.height*.5,le=ui(Q,he,o,b,v.surfel_data,d);if(!le)return;const ze=b.rotation,Ve=ze[2],ge=ze[6],ke=ze[10],$e=le[0]-b.position[0],Ze=le[1]-b.position[1],at=le[2]-b.position[2],mt=$e*Ve+Ze*ge+at*ke;mt>0&&k.setOrbitDepth(mt)}if(x.length===0){const Q=v.bbox.max[0]-v.bbox.min[0],he=v.bbox.max[1]-v.bbox.min[1],le=v.bbox.max[2]-v.bbox.min[2],Ve=.5*Math.sqrt(Q*Q+he*he+le*le)*.5;G.set(m[0]-Ve,m[1]-Ve,m[2]-Ve,b.position);const ge=G.create(Ve,Ve,Ve);G.normalize(ge,ge);const ke=G.create(0,1,0),$e=G.create();G.cross(ke,ge,$e),G.normalize($e,$e);const Ze=G.create();G.cross(ge,$e,Ze);const at=Pt.create($e[0],Ze[0],ge[0],$e[1],Ze[1],ge[1],$e[2],Ze[2],ge[2]);dt.fromMat3(at,b.rotation),b.update_buffer()}k.setCenter(G.create(v.centroid[0],v.centroid[1],v.centroid[2]));const u=new mc(v,_,I,b.uniform_buffer,C,S,r);L=u,Qn(o.width,o.height,_,u.render_settings_buffer),i.atlas_enabled=S!==null,r===null&&(i.mesh_cull=!1),u.setMeshCullEnabled(i.mesh_cull),u.setMeshMargin(i.mesh_margin),r===null&&(i.mesh_debug=!1),u.setMeshOverlayEnabled(i.mesh_debug);{const Q=v.surfel_data,he=Q.length/8;let le=0,ze=0,Ve=0;for(let ke=0;ke<he;ke++)le+=Q[ke*8],ze+=Q[ke*8+1],Ve+=Q[ke*8+2];const ge=he>0?[le/he,ze/he,Ve/he]:[0,0,0];u.setBfcParams(i.bfc_cos,ge),on({bfc:i.bfc},_,u.render_settings_buffer),console.log(`[bfc] flag=${i.bfc} cos=${i.bfc_cos} centroid=(${ge[0].toFixed(3)}, ${ge[1].toFixed(3)}, ${ge[2].toFixed(3)})`)}u.htEnabled=i.ht_mode>0,u.htSortedTail=i.ht_mode===2,u.setHtTailK(i.ht_k),i.ht_mode>0&&console.log(`[ht] hybrid transparency ON (mode ${i.ht_mode}: ${i.ht_mode===2?"exact core + SORTED tail":"K=1 core + OIT tail"}, tail_k=${i.ht_k})`),on({meshSampleMode:i.mesh_sample_mode,meshSilhouetteCull:i.mesh_silhouette,meshInvertDepth:i.mesh_invert_depth},_,u.render_settings_buffer),console.log(`[mesh-cull] ${r!==null?"mesh loaded":"no mesh"} · toggle=${i.mesh_cull} · margin=${i.mesh_margin}m · debug=${i.mesh_debug} · sample_mode=${i.mesh_sample_mode} · silhouette=${i.mesh_silhouette} · invert=${i.mesh_invert_depth}`);let P=!1;const w=(()=>{if(S!==null)return`${S.meta.format===2?"BC7":S.meta.format===3?"ASTC 4×4":S.meta.format===7?"BC7 codebook gather (typeD)":`format=${S.meta.format}`} ${S.meta.width}×${S.meta.height}, ${S.meta.n_layers} layers`;const Q=_.features.has("texture-compression-bc"),he=_.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(Q?["BC7"]:[]).concat(he?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",w),ai(v.sh_bias,_,u.render_settings_buffer),oi(i.gaussian_scaling,_,u.render_settings_buffer),i.sh_bias=v.sh_bias;const D=v.num_points.toLocaleString(),V={stats:`${D} surfels · -- fps`};h.addMonitor(V,"stats",{label:"Stats",interval:200}),h.addMonitor({atlas:w},"atlas",{label:"Atlas"});const N={stages:"— ms · awaiting timestamp data"};h.addMonitor(N,"stages",{label:"Stages",interval:500});let re=null;if(u.timeQueryEnabled){re=document.createElement("canvas"),re.width=280,re.height=24,re.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(re);const Q=le=>{const ze=re.getContext("2d");if(!ze)return;const Ve=re.width,ge=re.height;if(ze.clearRect(0,0,Ve,ge),!le||le.total<=0){ze.fillStyle="#888",ze.font="11px ui-monospace,Menlo,monospace",ze.fillText("awaiting GPU timestamps…",8,16);return}const ke=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],$e=Math.max(.001,ke.reduce((at,mt)=>at+mt.ms,0));let Ze=0;ze.font="10px ui-monospace,Menlo,monospace",ze.textBaseline="middle";for(const at of ke){const mt=at.ms/$e*Ve;ze.fillStyle=at.color,ze.fillRect(Ze,0,mt,ge),mt>=38&&(ze.fillStyle="#000c",ze.fillText(`${at.label} ${at.ms.toFixed(1)}`,Ze+4,ge/2)),Ze+=mt}};setInterval(()=>{P||u.readPerfMetrics({silent:!0}).then(()=>{const le=u.lastStageBreakdownMs;Q(le),le&&(N.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const te=.4,J=3,fe=.3;let ce=null,pe=0,_e=0;const Ae=ht.create(),Te=Pt.create();let Ee=x.length>0?0:-1;const je={view:x.length>0?`${Ee+1} / ${x.length}: ${x[Ee].img_name??Ee}`:"— no presets —"};h.addMonitor(je,"view",{label:"View",interval:100});function He(Q){const he=Pt.create(Q[0],Q[1],Q[2],Q[4],Q[5],Q[6],Q[8],Q[9],Q[10]);return ht.fromMat(he)}function Xe(Q,he){ce={fromPos:G.clone(b.position),toPos:G.clone(Q.position),fromQuat:ht.normalize(He(b.rotation)),toQuat:ht.normalize(He(Q.rotation)),target:Q,t:0,duration:Math.max(.01,he)}}const We=(Q,he=!0)=>{if(x.length===0)return;Ee=(Q%x.length+x.length)%x.length;const le=x[Ee];he?Xe(le,te):(b.set_preset(le),k.resetToCamera(),l()),je.view=`${Ee+1} / ${x.length}: ${x[Ee].img_name??Ee}`};x.length>0&&(h.addButton({title:"◀ Prev view"}).on("click",()=>We(Ee-1)),h.addButton({title:"Next view ▶"}).on("click",()=>We(Ee+1)));const et=x.length>0?Si(x,{tiltDownDeg:15,alignFirst:!0}):null,rt=et?Ac(x,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Qe=0;const ot=12;p.value={onAnimateStart:()=>{Qe=0},onAnimateStop:()=>{k.resetToCamera(),l()}},h.addInput(i,"render_scale",{label:"Render scale",min:.25,max:y,step:.25}).on("change",Q=>{const he=Math.max(.25,Q.value),le=Math.max(1,Math.ceil(he*o.clientWidth)),ze=Math.max(1,Math.ceil(he*o.clientHeight));(o.width!==le||o.height!==ze)&&(o.width=le,o.height=ze,H())}),h.addInput(i,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",Q=>oi(Q.value,_,u.render_settings_buffer)),h.addInput(i,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",Q=>ai(Q.value,_,u.render_settings_buffer)),h.addInput(i,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",Q=>{u.bgColor=[Q.value.r,Q.value.g,Q.value.b,Q.value.a]});const it=S?S.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";h.addInput(i,"atlas_enabled",{label:it}).on("change",Q=>u.setAtlasEnabled(Q.value)),h.addInput(i,"bfc",{label:"Backface"}).on("change",Q=>on({bfc:Q.value},_,u.render_settings_buffer)),h.addInput(i,"ht_mode",{label:"HybridT",options:{"off (sorted)":0,"OIT tail (no sort)":1,"sorted tail":2}}).on("change",Q=>{u.htEnabled=Q.value>0,u.htSortedTail=Q.value===2}),h.addInput(i,"ht_k",{label:"HybridT tail k",min:0,max:2e3,step:10}).on("change",Q=>u.setHtTailK(Q.value));const tt=h.addInput(i,"mesh_cull",{label:"Mesh cull"});tt.on("change",Q=>u.setMeshCullEnabled(Q.value)),u.hasMesh||(tt.disabled=!0);const Ne=h.addInput(i,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});Ne.on("change",Q=>u.setMeshMargin(Q.value)),u.hasMesh||(Ne.disabled=!0);const nt=h.addInput(i,"mesh_debug",{label:"Mesh debug"});nt.on("change",Q=>u.setMeshOverlayEnabled(Q.value)),u.hasMesh||(nt.disabled=!0);const Ke=h.addInput(i,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});Ke.on("change",Q=>on({meshSampleMode:Q.value},_,u.render_settings_buffer)),u.hasMesh||(Ke.disabled=!0);const ut=h.addInput(i,"mesh_silhouette",{label:"Silhouette cull"});ut.on("change",Q=>on({meshSilhouetteCull:Q.value},_,u.render_settings_buffer)),u.hasMesh||(ut.disabled=!0);const st=h.addInput(i,"mesh_invert_depth",{label:"Invert depth cull"});st.on("change",Q=>on({meshInvertDepth:Q.value},_,u.render_settings_buffer)),u.hasMesh||(st.disabled=!0),h.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(x.length>0)b.set_preset(x[0]);else{const Q=v.bbox.max[0]-v.bbox.min[0],he=v.bbox.max[1]-v.bbox.min[1],le=v.bbox.max[2]-v.bbox.min[2],Ve=.5*Math.sqrt(Q*Q+he*he+le*le)*.5;G.set(m[0]-Ve,m[1]-Ve,m[2]-Ve,b.position);const ge=G.create(Ve,Ve,Ve);G.normalize(ge,ge);const ke=G.create();G.cross(G.create(0,1,0),ge,ke),G.normalize(ke,ke);const $e=G.create();G.cross(ge,ke,$e);const Ze=Pt.create(ke[0],$e[0],ge[0],ke[1],$e[1],ge[1],ke[2],$e[2],ge[2]);dt.fromMat3(Ze,b.rotation),b.update_buffer()}k.resetToCamera(),l()});const gt={result:"— click Benchmark —"};h.addMonitor(gt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const wt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function kt(){const he=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(wt))if(he.startsWith(le))return le;return null}const _t=document.createElement("div");_t.id="bench-overlay",_t.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(_t);function At(Q,he,le){const ze=Math.floor(he/Math.max(1,le)*100),Ve=32,ge=Math.floor(he/Math.max(1,le)*Ve),ke="█".repeat(ge)+"░".repeat(Ve-ge);_t.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${Q}</div><div>[${ke}] ${ze}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${he} / ${le} frames · offscreen · pipelined · no vsync</div>`,_t.style.display="block"}function Rt(){_t.style.display="none"}async function Vt(Q=10,he=200){if(P)return;if(x.length===0){gt.result="no cameras to benchmark";return}P=!0;const le=q,ze=i.animate,Ve=new Float32Array(b.position),ge=new Float32Array(b.rotation);q=!1,i.animate=!1,h.refresh(),ce=null,k.enabled=!1;const ke=kt(),$e=ke?wt[ke]:null,Ze=($e==null?void 0:$e.w)??o.width,at=($e==null?void 0:$e.h)??o.height,mt=($e==null?void 0:$e.fovY)??b.getFov(),Un=ke?`${ke} · ${Ze>=4e3/4+500?"images_4":"images_2"}`:"custom",Rn=o.width,Ot=o.height,is=b.getFov();o.width=Ze,o.height=at,b.setFov(mt),Qn(Ze,at,_,u.render_settings_buffer);const xn=_.createTexture({size:[Ze,at,1],format:I,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Vn=xn.createView(),os=()=>{const ft=_.createCommandEncoder();u.frame(ft,Vn,!1),_.queue.submit([ft.finish()])},On=()=>new Promise(ft=>setTimeout(ft,0)),as=20,Fn=async(ft,Xt)=>{let dn=0,Dt=0;for(At(Xt,0,ft),await On();Dt<ft;){const pn=Math.min(as,ft-Dt),Bt=performance.now();for(let Tt=0;Tt<pn;Tt++)b.set_preset(x[(Dt+Tt)%x.length]),os();await _.queue.onSubmittedWorkDone();const Ct=performance.now();dn+=Ct-Bt,Dt+=pn,At(Xt,Dt,ft),await On()}return dn};try{await Fn(Q,"Warming up");const Xt=await Fn(he,"Benchmarking")/he,dn=1e3/Xt,Dt=v.num_points??v.surfel_data.length/8,pn=(mt*180/Math.PI).toFixed(1),Bt=`${dn.toFixed(1)} FPS  (${Xt.toFixed(2)} ms/frame)
${Ze}×${at} · fovY ${pn}° · ${Un}
${Dt.toLocaleString()} surfels · ${Q}w+${he}b · pipelined`;gt.result=Bt,console.log("[bench]",Bt.replace(/\n/g,"  |  "))}catch(ft){console.error("[bench] failed:",ft),gt.result=`bench failed: ${ft}`}finally{Rt(),xn.destroy(),o.width=Rn,o.height=Ot,b.setFov(is),Qn(Rn,Ot,_,u.render_settings_buffer),b.position.set(Ve),b.rotation.set(ge),b.update_buffer(),k.enabled=!le,q=le,i.animate=ze,h.refresh(),P=!1}}h.addButton({title:"📊 Benchmark"}).on("click",()=>Vt()),document.addEventListener("keydown",Q=>{const he=Q.key;if(he>="0"&&he<="9"&&x.length>0){const le=parseInt(he);le<x.length&&We(le)}else he==="ArrowLeft"||he==="PageUp"?(We(Ee-1),Q.preventDefault()):he==="ArrowRight"||he==="PageDown"?(We(Ee+1),Q.preventDefault()):(he==="d"||he==="D")&&u.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function Kt(Q,he){const le=o.getBoundingClientRect(),ze=window.devicePixelRatio||1;return[(Q-le.left)*ze,(he-le.top)*ze]}o.addEventListener("dblclick",Q=>{const[he,le]=Kt(Q.clientX,Q.clientY);f(he,le)});let Mt=0,Yt=0,Zt=0;o.addEventListener("pointerdown",Q=>{if(Q.pointerType!=="touch")return;const he=performance.now(),le=he-Mt,ze=Q.clientX-Yt,Ve=Q.clientY-Zt;if(le>0&&le<300&&ze*ze+Ve*Ve<40*40){const[ge,ke]=Kt(Q.clientX,Q.clientY);f(ge,ke),Mt=0}else Mt=he,Yt=Q.clientX,Zt=Q.clientY});function Ye(){return M}let gn=performance.now(),wn=60,cn=Promise.resolve(),un=0;async function St(){var Ve;const Q=performance.now(),he=Math.min((Q-gn)/1e3,.1);if(gn=Q,he>0){const ge=((Ve=u.lastStageBreakdownMs)==null?void 0:Ve.total)??0,ke=ge>.5?1e3/ge:1/he;wn=wn*.9+ke*.1,V.stats=`${D} surfels · ${Math.round(wn)} fps`}if(P){requestAnimationFrame(St);return}if(Ye()&&(ce||q)&&(ce=null,k.resetToCamera(),l(),q&&(q=!1,i.animate=!1,h.refresh())),q&&i.animateMode==="circle"&&et){Qe+=he/ot,Qe>=1&&(Qe-=1);const ge=Ci(et,Qe);b.set_preset(ge),k.update(he);const ke=_.createCommandEncoder();u.frame(ke,a.getCurrentTexture().createView()),_.queue.submit([ke.finish()]),un++,un===2&&Ln(),requestAnimationFrame(St);return}if(ce){ce.t+=he/ce.duration;const ge=Math.min(1,ce.t),ke=ge*ge*(3-2*ge);G.lerp(ce.fromPos,ce.toPos,ke,b.position),ht.slerp(ce.fromQuat,ce.toQuat,ke,Ae),Pt.fromQuat(Ae,Te),dt.fromMat3(Te,b.rotation),b.update_buffer(),ce.t>=1&&(b.set_preset(ce.target),ce=null,q?x.length>0&&(pe=fe):(k.resetToCamera(),l()))}else if(q&&!Ye()){const ge=i.animateMode==="circle"&&rt.length>0,ke=ge?rt:x;if(ke.length!==0){if(pe-=he,pe<=0){const Ze=((ge?_e:Ee)+1)%ke.length;ge?_e=Ze:Ee=Ze;const at=ge?J/8:J;Xe(ke[Ze],at),ge||(je.view=`${Ee+1} / ${x.length}: ${x[Ee].img_name??Ee}`)}}}k.update(he),T(),Z(),await cn;const le=_.createCommandEncoder(),ze=a.getCurrentTexture().createView();u.frame(le,ze),_.queue.submit([le.finish()]),cn=_.queue.onSubmittedWorkDone(),un++,un===2&&Ln(),requestAnimationFrame(St)}requestAnimationFrame(St)}}(function(){let a="dev";for(const C of Array.from(document.querySelectorAll('script[type="module"]'))){const k=C.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){a=k[1];break}}const _=document.createElement("div");_.textContent="v "+a,_.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(_.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(_)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const _=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),C=document.querySelector("#webgpu-canvas");Il(C!==null);const b=C.getContext("webgpu");Hc(C,b,_,a)})();
