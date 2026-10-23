var Kl=Object.defineProperty;var jl=(o,r,l)=>r in o?Kl(o,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[r]=l;var R=(o,r,l)=>(jl(o,typeof r!="symbol"?r+"":r,l),l);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))x(_);new MutationObserver(_=>{for(const b of _)if(b.type==="childList")for(const M of b.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&x(M)}).observe(document,{childList:!0,subtree:!0});function l(_){const b={};return _.integrity&&(b.integrity=_.integrity),_.referrerPolicy&&(b.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?b.credentials="include":_.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function x(_){if(_.ep)return;_.ep=!0;const b=l(_);fetch(_.href,b)}})();function Hl(o,r){return class extends o{constructor(...l){super(...l),r(this)}}}const Yl=Hl(Array,o=>o.fill(0));let Ve=1e-6;function Zl(o){function r(P=0,k=0){const E=new o(2);return P!==void 0&&(E[0]=P,k!==void 0&&(E[1]=k)),E}const l=r;function x(P,k,E){const i=E??new o(2);return i[0]=P,i[1]=k,i}function _(P,k){const E=k??new o(2);return E[0]=Math.ceil(P[0]),E[1]=Math.ceil(P[1]),E}function b(P,k){const E=k??new o(2);return E[0]=Math.floor(P[0]),E[1]=Math.floor(P[1]),E}function M(P,k){const E=k??new o(2);return E[0]=Math.round(P[0]),E[1]=Math.round(P[1]),E}function B(P,k=0,E=1,i){const v=i??new o(2);return v[0]=Math.min(E,Math.max(k,P[0])),v[1]=Math.min(E,Math.max(k,P[1])),v}function C(P,k,E){const i=E??new o(2);return i[0]=P[0]+k[0],i[1]=P[1]+k[1],i}function A(P,k,E,i){const v=i??new o(2);return v[0]=P[0]+k[0]*E,v[1]=P[1]+k[1]*E,v}function N(P,k){const E=P[0],i=P[1],v=k[0],h=k[1],f=Math.sqrt(E*E+i*i),c=Math.sqrt(v*v+h*h),m=f*c,S=m&&ae(P,k)/m;return Math.acos(S)}function F(P,k,E){const i=E??new o(2);return i[0]=P[0]-k[0],i[1]=P[1]-k[1],i}const L=F;function W(P,k){return Math.abs(P[0]-k[0])<Ve&&Math.abs(P[1]-k[1])<Ve}function oe(P,k){return P[0]===k[0]&&P[1]===k[1]}function z(P,k,E,i){const v=i??new o(2);return v[0]=P[0]+E*(k[0]-P[0]),v[1]=P[1]+E*(k[1]-P[1]),v}function G(P,k,E,i){const v=i??new o(2);return v[0]=P[0]+E[0]*(k[0]-P[0]),v[1]=P[1]+E[1]*(k[1]-P[1]),v}function Y(P,k,E){const i=E??new o(2);return i[0]=Math.max(P[0],k[0]),i[1]=Math.max(P[1],k[1]),i}function V(P,k,E){const i=E??new o(2);return i[0]=Math.min(P[0],k[0]),i[1]=Math.min(P[1],k[1]),i}function te(P,k,E){const i=E??new o(2);return i[0]=P[0]*k,i[1]=P[1]*k,i}const $=te;function le(P,k,E){const i=E??new o(2);return i[0]=P[0]/k,i[1]=P[1]/k,i}function he(P,k){const E=k??new o(2);return E[0]=1/P[0],E[1]=1/P[1],E}const de=he;function se(P,k,E){const i=E??new o(3),v=P[0]*k[1]-P[1]*k[0];return i[0]=0,i[1]=0,i[2]=v,i}function ae(P,k){return P[0]*k[0]+P[1]*k[1]}function Te(P){const k=P[0],E=P[1];return Math.sqrt(k*k+E*E)}const ie=Te;function re(P){const k=P[0],E=P[1];return k*k+E*E}const ge=re;function Le(P,k){const E=P[0]-k[0],i=P[1]-k[1];return Math.sqrt(E*E+i*i)}const ke=Le;function X(P,k){const E=P[0]-k[0],i=P[1]-k[1];return E*E+i*i}const Z=X;function j(P,k){const E=k??new o(2),i=P[0],v=P[1],h=Math.sqrt(i*i+v*v);return h>1e-5?(E[0]=i/h,E[1]=v/h):(E[0]=0,E[1]=0),E}function J(P,k){const E=k??new o(2);return E[0]=-P[0],E[1]=-P[1],E}function ve(P,k){const E=k??new o(2);return E[0]=P[0],E[1]=P[1],E}const ze=ve;function we(P,k,E){const i=E??new o(2);return i[0]=P[0]*k[0],i[1]=P[1]*k[1],i}const Be=we;function ne(P,k,E){const i=E??new o(2);return i[0]=P[0]/k[0],i[1]=P[1]/k[1],i}const me=ne;function xe(P=1,k){const E=k??new o(2),i=Math.random()*2*Math.PI;return E[0]=Math.cos(i)*P,E[1]=Math.sin(i)*P,E}function D(P){const k=P??new o(2);return k[0]=0,k[1]=0,k}function K(P,k,E){const i=E??new o(2),v=P[0],h=P[1];return i[0]=v*k[0]+h*k[4]+k[12],i[1]=v*k[1]+h*k[5]+k[13],i}function g(P,k,E){const i=E??new o(2),v=P[0],h=P[1];return i[0]=k[0]*v+k[4]*h+k[8],i[1]=k[1]*v+k[5]*h+k[9],i}function a(P,k,E,i){const v=i??new o(2),h=P[0]-k[0],f=P[1]-k[1],c=Math.sin(E),m=Math.cos(E);return v[0]=h*m-f*c+k[0],v[1]=h*c+f*m+k[1],v}function u(P,k,E){const i=E??new o(2);return j(P,i),te(i,k,i)}function d(P,k,E){const i=E??new o(2);return Te(P)>k?u(P,k,i):ve(P,i)}function w(P,k,E){const i=E??new o(2);return z(P,k,.5,i)}return{create:r,fromValues:l,set:x,ceil:_,floor:b,round:M,clamp:B,add:C,addScaled:A,angle:N,subtract:F,sub:L,equalsApproximately:W,equals:oe,lerp:z,lerpV:G,max:Y,min:V,mulScalar:te,scale:$,divScalar:le,inverse:he,invert:de,cross:se,dot:ae,length:Te,len:ie,lengthSq:re,lenSq:ge,distance:Le,dist:ke,distanceSq:X,distSq:Z,normalize:j,negate:J,copy:ve,clone:ze,multiply:we,mul:Be,divide:ne,div:me,random:xe,zero:D,transformMat4:K,transformMat3:g,rotate:a,setLength:u,truncate:d,midpoint:w}}const ci=new Map;function Li(o){let r=ci.get(o);return r||(r=Zl(o),ci.set(o,r)),r}function Xl(o){function r(c,m,S){const y=new o(3);return c!==void 0&&(y[0]=c,m!==void 0&&(y[1]=m,S!==void 0&&(y[2]=S))),y}const l=r;function x(c,m,S,y){const U=y??new o(3);return U[0]=c,U[1]=m,U[2]=S,U}function _(c,m){const S=m??new o(3);return S[0]=Math.ceil(c[0]),S[1]=Math.ceil(c[1]),S[2]=Math.ceil(c[2]),S}function b(c,m){const S=m??new o(3);return S[0]=Math.floor(c[0]),S[1]=Math.floor(c[1]),S[2]=Math.floor(c[2]),S}function M(c,m){const S=m??new o(3);return S[0]=Math.round(c[0]),S[1]=Math.round(c[1]),S[2]=Math.round(c[2]),S}function B(c,m=0,S=1,y){const U=y??new o(3);return U[0]=Math.min(S,Math.max(m,c[0])),U[1]=Math.min(S,Math.max(m,c[1])),U[2]=Math.min(S,Math.max(m,c[2])),U}function C(c,m,S){const y=S??new o(3);return y[0]=c[0]+m[0],y[1]=c[1]+m[1],y[2]=c[2]+m[2],y}function A(c,m,S,y){const U=y??new o(3);return U[0]=c[0]+m[0]*S,U[1]=c[1]+m[1]*S,U[2]=c[2]+m[2]*S,U}function N(c,m){const S=c[0],y=c[1],U=c[2],H=m[0],Q=m[1],_e=m[2],pe=Math.sqrt(S*S+y*y+U*U),ce=Math.sqrt(H*H+Q*Q+_e*_e),ye=pe*ce,De=ye&&ae(c,m)/ye;return Math.acos(De)}function F(c,m,S){const y=S??new o(3);return y[0]=c[0]-m[0],y[1]=c[1]-m[1],y[2]=c[2]-m[2],y}const L=F;function W(c,m){return Math.abs(c[0]-m[0])<Ve&&Math.abs(c[1]-m[1])<Ve&&Math.abs(c[2]-m[2])<Ve}function oe(c,m){return c[0]===m[0]&&c[1]===m[1]&&c[2]===m[2]}function z(c,m,S,y){const U=y??new o(3);return U[0]=c[0]+S*(m[0]-c[0]),U[1]=c[1]+S*(m[1]-c[1]),U[2]=c[2]+S*(m[2]-c[2]),U}function G(c,m,S,y){const U=y??new o(3);return U[0]=c[0]+S[0]*(m[0]-c[0]),U[1]=c[1]+S[1]*(m[1]-c[1]),U[2]=c[2]+S[2]*(m[2]-c[2]),U}function Y(c,m,S){const y=S??new o(3);return y[0]=Math.max(c[0],m[0]),y[1]=Math.max(c[1],m[1]),y[2]=Math.max(c[2],m[2]),y}function V(c,m,S){const y=S??new o(3);return y[0]=Math.min(c[0],m[0]),y[1]=Math.min(c[1],m[1]),y[2]=Math.min(c[2],m[2]),y}function te(c,m,S){const y=S??new o(3);return y[0]=c[0]*m,y[1]=c[1]*m,y[2]=c[2]*m,y}const $=te;function le(c,m,S){const y=S??new o(3);return y[0]=c[0]/m,y[1]=c[1]/m,y[2]=c[2]/m,y}function he(c,m){const S=m??new o(3);return S[0]=1/c[0],S[1]=1/c[1],S[2]=1/c[2],S}const de=he;function se(c,m,S){const y=S??new o(3),U=c[2]*m[0]-c[0]*m[2],H=c[0]*m[1]-c[1]*m[0];return y[0]=c[1]*m[2]-c[2]*m[1],y[1]=U,y[2]=H,y}function ae(c,m){return c[0]*m[0]+c[1]*m[1]+c[2]*m[2]}function Te(c){const m=c[0],S=c[1],y=c[2];return Math.sqrt(m*m+S*S+y*y)}const ie=Te;function re(c){const m=c[0],S=c[1],y=c[2];return m*m+S*S+y*y}const ge=re;function Le(c,m){const S=c[0]-m[0],y=c[1]-m[1],U=c[2]-m[2];return Math.sqrt(S*S+y*y+U*U)}const ke=Le;function X(c,m){const S=c[0]-m[0],y=c[1]-m[1],U=c[2]-m[2];return S*S+y*y+U*U}const Z=X;function j(c,m){const S=m??new o(3),y=c[0],U=c[1],H=c[2],Q=Math.sqrt(y*y+U*U+H*H);return Q>1e-5?(S[0]=y/Q,S[1]=U/Q,S[2]=H/Q):(S[0]=0,S[1]=0,S[2]=0),S}function J(c,m){const S=m??new o(3);return S[0]=-c[0],S[1]=-c[1],S[2]=-c[2],S}function ve(c,m){const S=m??new o(3);return S[0]=c[0],S[1]=c[1],S[2]=c[2],S}const ze=ve;function we(c,m,S){const y=S??new o(3);return y[0]=c[0]*m[0],y[1]=c[1]*m[1],y[2]=c[2]*m[2],y}const Be=we;function ne(c,m,S){const y=S??new o(3);return y[0]=c[0]/m[0],y[1]=c[1]/m[1],y[2]=c[2]/m[2],y}const me=ne;function xe(c=1,m){const S=m??new o(3),y=Math.random()*2*Math.PI,U=Math.random()*2-1,H=Math.sqrt(1-U*U)*c;return S[0]=Math.cos(y)*H,S[1]=Math.sin(y)*H,S[2]=U*c,S}function D(c){const m=c??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function K(c,m,S){const y=S??new o(3),U=c[0],H=c[1],Q=c[2],_e=m[3]*U+m[7]*H+m[11]*Q+m[15]||1;return y[0]=(m[0]*U+m[4]*H+m[8]*Q+m[12])/_e,y[1]=(m[1]*U+m[5]*H+m[9]*Q+m[13])/_e,y[2]=(m[2]*U+m[6]*H+m[10]*Q+m[14])/_e,y}function g(c,m,S){const y=S??new o(3),U=c[0],H=c[1],Q=c[2];return y[0]=U*m[0*4+0]+H*m[1*4+0]+Q*m[2*4+0],y[1]=U*m[0*4+1]+H*m[1*4+1]+Q*m[2*4+1],y[2]=U*m[0*4+2]+H*m[1*4+2]+Q*m[2*4+2],y}function a(c,m,S){const y=S??new o(3),U=c[0],H=c[1],Q=c[2];return y[0]=U*m[0]+H*m[4]+Q*m[8],y[1]=U*m[1]+H*m[5]+Q*m[9],y[2]=U*m[2]+H*m[6]+Q*m[10],y}function u(c,m,S){const y=S??new o(3),U=m[0],H=m[1],Q=m[2],_e=m[3]*2,pe=c[0],ce=c[1],ye=c[2],De=H*ye-Q*ce,Pe=Q*pe-U*ye,Ce=U*ce-H*pe;return y[0]=pe+De*_e+(H*Ce-Q*Pe)*2,y[1]=ce+Pe*_e+(Q*De-U*Ce)*2,y[2]=ye+Ce*_e+(U*Pe-H*De)*2,y}function d(c,m){const S=m??new o(3);return S[0]=c[12],S[1]=c[13],S[2]=c[14],S}function w(c,m,S){const y=S??new o(3),U=m*4;return y[0]=c[U+0],y[1]=c[U+1],y[2]=c[U+2],y}function P(c,m){const S=m??new o(3),y=c[0],U=c[1],H=c[2],Q=c[4],_e=c[5],pe=c[6],ce=c[8],ye=c[9],De=c[10];return S[0]=Math.sqrt(y*y+U*U+H*H),S[1]=Math.sqrt(Q*Q+_e*_e+pe*pe),S[2]=Math.sqrt(ce*ce+ye*ye+De*De),S}function k(c,m,S,y){const U=y??new o(3),H=[],Q=[];return H[0]=c[0]-m[0],H[1]=c[1]-m[1],H[2]=c[2]-m[2],Q[0]=H[0],Q[1]=H[1]*Math.cos(S)-H[2]*Math.sin(S),Q[2]=H[1]*Math.sin(S)+H[2]*Math.cos(S),U[0]=Q[0]+m[0],U[1]=Q[1]+m[1],U[2]=Q[2]+m[2],U}function E(c,m,S,y){const U=y??new o(3),H=[],Q=[];return H[0]=c[0]-m[0],H[1]=c[1]-m[1],H[2]=c[2]-m[2],Q[0]=H[2]*Math.sin(S)+H[0]*Math.cos(S),Q[1]=H[1],Q[2]=H[2]*Math.cos(S)-H[0]*Math.sin(S),U[0]=Q[0]+m[0],U[1]=Q[1]+m[1],U[2]=Q[2]+m[2],U}function i(c,m,S,y){const U=y??new o(3),H=[],Q=[];return H[0]=c[0]-m[0],H[1]=c[1]-m[1],H[2]=c[2]-m[2],Q[0]=H[0]*Math.cos(S)-H[1]*Math.sin(S),Q[1]=H[0]*Math.sin(S)+H[1]*Math.cos(S),Q[2]=H[2],U[0]=Q[0]+m[0],U[1]=Q[1]+m[1],U[2]=Q[2]+m[2],U}function v(c,m,S){const y=S??new o(3);return j(c,y),te(y,m,y)}function h(c,m,S){const y=S??new o(3);return Te(c)>m?v(c,m,y):ve(c,y)}function f(c,m,S){const y=S??new o(3);return z(c,m,.5,y)}return{create:r,fromValues:l,set:x,ceil:_,floor:b,round:M,clamp:B,add:C,addScaled:A,angle:N,subtract:F,sub:L,equalsApproximately:W,equals:oe,lerp:z,lerpV:G,max:Y,min:V,mulScalar:te,scale:$,divScalar:le,inverse:he,invert:de,cross:se,dot:ae,length:Te,len:ie,lengthSq:re,lenSq:ge,distance:Le,dist:ke,distanceSq:X,distSq:Z,normalize:j,negate:J,copy:ve,clone:ze,multiply:we,mul:Be,divide:ne,div:me,random:xe,zero:D,transformMat4:K,transformMat4Upper3x3:g,transformMat3:a,transformQuat:u,getTranslation:d,getAxis:w,getScaling:P,rotateX:k,rotateY:E,rotateZ:i,setLength:v,truncate:h,midpoint:f}}const ui=new Map;function Ps(o){let r=ui.get(o);return r||(r=Xl(o),ui.set(o,r)),r}function Jl(o){const r=Li(o),l=Ps(o);function x(a,u,d,w,P,k,E,i,v){const h=new o(12);return h[3]=0,h[7]=0,h[11]=0,a!==void 0&&(h[0]=a,u!==void 0&&(h[1]=u,d!==void 0&&(h[2]=d,w!==void 0&&(h[4]=w,P!==void 0&&(h[5]=P,k!==void 0&&(h[6]=k,E!==void 0&&(h[8]=E,i!==void 0&&(h[9]=i,v!==void 0&&(h[10]=v))))))))),h}function _(a,u,d,w,P,k,E,i,v,h){const f=h??new o(12);return f[0]=a,f[1]=u,f[2]=d,f[3]=0,f[4]=w,f[5]=P,f[6]=k,f[7]=0,f[8]=E,f[9]=i,f[10]=v,f[11]=0,f}function b(a,u){const d=u??new o(12);return d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=0,d[4]=a[4],d[5]=a[5],d[6]=a[6],d[7]=0,d[8]=a[8],d[9]=a[9],d[10]=a[10],d[11]=0,d}function M(a,u){const d=u??new o(12),w=a[0],P=a[1],k=a[2],E=a[3],i=w+w,v=P+P,h=k+k,f=w*i,c=P*i,m=P*v,S=k*i,y=k*v,U=k*h,H=E*i,Q=E*v,_e=E*h;return d[0]=1-m-U,d[1]=c+_e,d[2]=S-Q,d[3]=0,d[4]=c-_e,d[5]=1-f-U,d[6]=y+H,d[7]=0,d[8]=S+Q,d[9]=y-H,d[10]=1-f-m,d[11]=0,d}function B(a,u){const d=u??new o(12);return d[0]=-a[0],d[1]=-a[1],d[2]=-a[2],d[4]=-a[4],d[5]=-a[5],d[6]=-a[6],d[8]=-a[8],d[9]=-a[9],d[10]=-a[10],d}function C(a,u,d){const w=d??new o(12);return w[0]=a[0]*u,w[1]=a[1]*u,w[2]=a[2]*u,w[4]=a[4]*u,w[5]=a[5]*u,w[6]=a[6]*u,w[8]=a[8]*u,w[9]=a[9]*u,w[10]=a[10]*u,w}const A=C;function N(a,u,d){const w=d??new o(12);return w[0]=a[0]+u[0],w[1]=a[1]+u[1],w[2]=a[2]+u[2],w[4]=a[4]+u[4],w[5]=a[5]+u[5],w[6]=a[6]+u[6],w[8]=a[8]+u[8],w[9]=a[9]+u[9],w[10]=a[10]+u[10],w}function F(a,u){const d=u??new o(12);return d[0]=a[0],d[1]=a[1],d[2]=a[2],d[4]=a[4],d[5]=a[5],d[6]=a[6],d[8]=a[8],d[9]=a[9],d[10]=a[10],d}const L=F;function W(a,u){return Math.abs(a[0]-u[0])<Ve&&Math.abs(a[1]-u[1])<Ve&&Math.abs(a[2]-u[2])<Ve&&Math.abs(a[4]-u[4])<Ve&&Math.abs(a[5]-u[5])<Ve&&Math.abs(a[6]-u[6])<Ve&&Math.abs(a[8]-u[8])<Ve&&Math.abs(a[9]-u[9])<Ve&&Math.abs(a[10]-u[10])<Ve}function oe(a,u){return a[0]===u[0]&&a[1]===u[1]&&a[2]===u[2]&&a[4]===u[4]&&a[5]===u[5]&&a[6]===u[6]&&a[8]===u[8]&&a[9]===u[9]&&a[10]===u[10]}function z(a){const u=a??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function G(a,u){const d=u??new o(12);if(d===a){let m;return m=a[1],a[1]=a[4],a[4]=m,m=a[2],a[2]=a[8],a[8]=m,m=a[6],a[6]=a[9],a[9]=m,d}const w=a[0*4+0],P=a[0*4+1],k=a[0*4+2],E=a[1*4+0],i=a[1*4+1],v=a[1*4+2],h=a[2*4+0],f=a[2*4+1],c=a[2*4+2];return d[0]=w,d[1]=E,d[2]=h,d[4]=P,d[5]=i,d[6]=f,d[8]=k,d[9]=v,d[10]=c,d}function Y(a,u){const d=u??new o(12),w=a[0*4+0],P=a[0*4+1],k=a[0*4+2],E=a[1*4+0],i=a[1*4+1],v=a[1*4+2],h=a[2*4+0],f=a[2*4+1],c=a[2*4+2],m=c*i-v*f,S=-c*E+v*h,y=f*E-i*h,U=1/(w*m+P*S+k*y);return d[0]=m*U,d[1]=(-c*P+k*f)*U,d[2]=(v*P-k*i)*U,d[4]=S*U,d[5]=(c*w-k*h)*U,d[6]=(-v*w+k*E)*U,d[8]=y*U,d[9]=(-f*w+P*h)*U,d[10]=(i*w-P*E)*U,d}function V(a){const u=a[0],d=a[0*4+1],w=a[0*4+2],P=a[1*4+0],k=a[1*4+1],E=a[1*4+2],i=a[2*4+0],v=a[2*4+1],h=a[2*4+2];return u*(k*h-v*E)-P*(d*h-v*w)+i*(d*E-k*w)}const te=Y;function $(a,u,d){const w=d??new o(12),P=a[0],k=a[1],E=a[2],i=a[4+0],v=a[4+1],h=a[4+2],f=a[8+0],c=a[8+1],m=a[8+2],S=u[0],y=u[1],U=u[2],H=u[4+0],Q=u[4+1],_e=u[4+2],pe=u[8+0],ce=u[8+1],ye=u[8+2];return w[0]=P*S+i*y+f*U,w[1]=k*S+v*y+c*U,w[2]=E*S+h*y+m*U,w[4]=P*H+i*Q+f*_e,w[5]=k*H+v*Q+c*_e,w[6]=E*H+h*Q+m*_e,w[8]=P*pe+i*ce+f*ye,w[9]=k*pe+v*ce+c*ye,w[10]=E*pe+h*ce+m*ye,w}const le=$;function he(a,u,d){const w=d??z();return a!==w&&(w[0]=a[0],w[1]=a[1],w[2]=a[2],w[4]=a[4],w[5]=a[5],w[6]=a[6]),w[8]=u[0],w[9]=u[1],w[10]=1,w}function de(a,u){const d=u??r.create();return d[0]=a[8],d[1]=a[9],d}function se(a,u,d){const w=d??r.create(),P=u*4;return w[0]=a[P+0],w[1]=a[P+1],w}function ae(a,u,d,w){const P=w===a?a:F(a,w),k=d*4;return P[k+0]=u[0],P[k+1]=u[1],P}function Te(a,u){const d=u??r.create(),w=a[0],P=a[1],k=a[4],E=a[5];return d[0]=Math.sqrt(w*w+P*P),d[1]=Math.sqrt(k*k+E*E),d}function ie(a,u){const d=u??l.create(),w=a[0],P=a[1],k=a[2],E=a[4],i=a[5],v=a[6],h=a[8],f=a[9],c=a[10];return d[0]=Math.sqrt(w*w+P*P+k*k),d[1]=Math.sqrt(E*E+i*i+v*v),d[2]=Math.sqrt(h*h+f*f+c*c),d}function re(a,u){const d=u??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=a[0],d[9]=a[1],d[10]=1,d}function ge(a,u,d){const w=d??new o(12),P=u[0],k=u[1],E=a[0],i=a[1],v=a[2],h=a[1*4+0],f=a[1*4+1],c=a[1*4+2],m=a[2*4+0],S=a[2*4+1],y=a[2*4+2];return a!==w&&(w[0]=E,w[1]=i,w[2]=v,w[4]=h,w[5]=f,w[6]=c),w[8]=E*P+h*k+m,w[9]=i*P+f*k+S,w[10]=v*P+c*k+y,w}function Le(a,u){const d=u??new o(12),w=Math.cos(a),P=Math.sin(a);return d[0]=w,d[1]=P,d[2]=0,d[4]=-P,d[5]=w,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ke(a,u,d){const w=d??new o(12),P=a[0*4+0],k=a[0*4+1],E=a[0*4+2],i=a[1*4+0],v=a[1*4+1],h=a[1*4+2],f=Math.cos(u),c=Math.sin(u);return w[0]=f*P+c*i,w[1]=f*k+c*v,w[2]=f*E+c*h,w[4]=f*i-c*P,w[5]=f*v-c*k,w[6]=f*h-c*E,a!==w&&(w[8]=a[8],w[9]=a[9],w[10]=a[10]),w}function X(a,u){const d=u??new o(12),w=Math.cos(a),P=Math.sin(a);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=w,d[6]=P,d[8]=0,d[9]=-P,d[10]=w,d}function Z(a,u,d){const w=d??new o(12),P=a[4],k=a[5],E=a[6],i=a[8],v=a[9],h=a[10],f=Math.cos(u),c=Math.sin(u);return w[4]=f*P+c*i,w[5]=f*k+c*v,w[6]=f*E+c*h,w[8]=f*i-c*P,w[9]=f*v-c*k,w[10]=f*h-c*E,a!==w&&(w[0]=a[0],w[1]=a[1],w[2]=a[2]),w}function j(a,u){const d=u??new o(12),w=Math.cos(a),P=Math.sin(a);return d[0]=w,d[1]=0,d[2]=-P,d[4]=0,d[5]=1,d[6]=0,d[8]=P,d[9]=0,d[10]=w,d}function J(a,u,d){const w=d??new o(12),P=a[0*4+0],k=a[0*4+1],E=a[0*4+2],i=a[2*4+0],v=a[2*4+1],h=a[2*4+2],f=Math.cos(u),c=Math.sin(u);return w[0]=f*P-c*i,w[1]=f*k-c*v,w[2]=f*E-c*h,w[8]=f*i+c*P,w[9]=f*v+c*k,w[10]=f*h+c*E,a!==w&&(w[4]=a[4],w[5]=a[5],w[6]=a[6]),w}const ve=Le,ze=ke;function we(a,u){const d=u??new o(12);return d[0]=a[0],d[1]=0,d[2]=0,d[4]=0,d[5]=a[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Be(a,u,d){const w=d??new o(12),P=u[0],k=u[1];return w[0]=P*a[0*4+0],w[1]=P*a[0*4+1],w[2]=P*a[0*4+2],w[4]=k*a[1*4+0],w[5]=k*a[1*4+1],w[6]=k*a[1*4+2],a!==w&&(w[8]=a[8],w[9]=a[9],w[10]=a[10]),w}function ne(a,u){const d=u??new o(12);return d[0]=a[0],d[1]=0,d[2]=0,d[4]=0,d[5]=a[1],d[6]=0,d[8]=0,d[9]=0,d[10]=a[2],d}function me(a,u,d){const w=d??new o(12),P=u[0],k=u[1],E=u[2];return w[0]=P*a[0*4+0],w[1]=P*a[0*4+1],w[2]=P*a[0*4+2],w[4]=k*a[1*4+0],w[5]=k*a[1*4+1],w[6]=k*a[1*4+2],w[8]=E*a[2*4+0],w[9]=E*a[2*4+1],w[10]=E*a[2*4+2],w}function xe(a,u){const d=u??new o(12);return d[0]=a,d[1]=0,d[2]=0,d[4]=0,d[5]=a,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function D(a,u,d){const w=d??new o(12);return w[0]=u*a[0*4+0],w[1]=u*a[0*4+1],w[2]=u*a[0*4+2],w[4]=u*a[1*4+0],w[5]=u*a[1*4+1],w[6]=u*a[1*4+2],a!==w&&(w[8]=a[8],w[9]=a[9],w[10]=a[10]),w}function K(a,u){const d=u??new o(12);return d[0]=a,d[1]=0,d[2]=0,d[4]=0,d[5]=a,d[6]=0,d[8]=0,d[9]=0,d[10]=a,d}function g(a,u,d){const w=d??new o(12);return w[0]=u*a[0*4+0],w[1]=u*a[0*4+1],w[2]=u*a[0*4+2],w[4]=u*a[1*4+0],w[5]=u*a[1*4+1],w[6]=u*a[1*4+2],w[8]=u*a[2*4+0],w[9]=u*a[2*4+1],w[10]=u*a[2*4+2],w}return{add:N,clone:L,copy:F,create:x,determinant:V,equals:oe,equalsApproximately:W,fromMat4:b,fromQuat:M,get3DScaling:ie,getAxis:se,getScaling:Te,getTranslation:de,identity:z,inverse:Y,invert:te,mul:le,mulScalar:A,multiply:$,multiplyScalar:C,negate:B,rotate:ke,rotateX:Z,rotateY:J,rotateZ:ze,rotation:Le,rotationX:X,rotationY:j,rotationZ:ve,scale:Be,scale3D:me,scaling:we,scaling3D:ne,set:_,setAxis:ae,setTranslation:he,translate:ge,translation:re,transpose:G,uniformScale:D,uniformScale3D:g,uniformScaling:xe,uniformScaling3D:K}}const di=new Map;function Ql(o){let r=di.get(o);return r||(r=Jl(o),di.set(o,r)),r}function ec(o){const r=Ps(o);function l(i,v,h,f,c,m,S,y,U,H,Q,_e,pe,ce,ye,De){const Pe=new o(16);return i!==void 0&&(Pe[0]=i,v!==void 0&&(Pe[1]=v,h!==void 0&&(Pe[2]=h,f!==void 0&&(Pe[3]=f,c!==void 0&&(Pe[4]=c,m!==void 0&&(Pe[5]=m,S!==void 0&&(Pe[6]=S,y!==void 0&&(Pe[7]=y,U!==void 0&&(Pe[8]=U,H!==void 0&&(Pe[9]=H,Q!==void 0&&(Pe[10]=Q,_e!==void 0&&(Pe[11]=_e,pe!==void 0&&(Pe[12]=pe,ce!==void 0&&(Pe[13]=ce,ye!==void 0&&(Pe[14]=ye,De!==void 0&&(Pe[15]=De)))))))))))))))),Pe}function x(i,v,h,f,c,m,S,y,U,H,Q,_e,pe,ce,ye,De,Pe){const Ce=Pe??new o(16);return Ce[0]=i,Ce[1]=v,Ce[2]=h,Ce[3]=f,Ce[4]=c,Ce[5]=m,Ce[6]=S,Ce[7]=y,Ce[8]=U,Ce[9]=H,Ce[10]=Q,Ce[11]=_e,Ce[12]=pe,Ce[13]=ce,Ce[14]=ye,Ce[15]=De,Ce}function _(i,v){const h=v??new o(16);return h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=0,h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=0,h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function b(i,v){const h=v??new o(16),f=i[0],c=i[1],m=i[2],S=i[3],y=f+f,U=c+c,H=m+m,Q=f*y,_e=c*y,pe=c*U,ce=m*y,ye=m*U,De=m*H,Pe=S*y,Ce=S*U,Ie=S*H;return h[0]=1-pe-De,h[1]=_e+Ie,h[2]=ce-Ce,h[3]=0,h[4]=_e-Ie,h[5]=1-Q-De,h[6]=ye+Pe,h[7]=0,h[8]=ce+Ce,h[9]=ye-Pe,h[10]=1-Q-pe,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function M(i,v){const h=v??new o(16);return h[0]=-i[0],h[1]=-i[1],h[2]=-i[2],h[3]=-i[3],h[4]=-i[4],h[5]=-i[5],h[6]=-i[6],h[7]=-i[7],h[8]=-i[8],h[9]=-i[9],h[10]=-i[10],h[11]=-i[11],h[12]=-i[12],h[13]=-i[13],h[14]=-i[14],h[15]=-i[15],h}function B(i,v,h){const f=h??new o(16);return f[0]=i[0]+v[0],f[1]=i[1]+v[1],f[2]=i[2]+v[2],f[3]=i[3]+v[3],f[4]=i[4]+v[4],f[5]=i[5]+v[5],f[6]=i[6]+v[6],f[7]=i[7]+v[7],f[8]=i[8]+v[8],f[9]=i[9]+v[9],f[10]=i[10]+v[10],f[11]=i[11]+v[11],f[12]=i[12]+v[12],f[13]=i[13]+v[13],f[14]=i[14]+v[14],f[15]=i[15]+v[15],f}function C(i,v,h){const f=h??new o(16);return f[0]=i[0]*v,f[1]=i[1]*v,f[2]=i[2]*v,f[3]=i[3]*v,f[4]=i[4]*v,f[5]=i[5]*v,f[6]=i[6]*v,f[7]=i[7]*v,f[8]=i[8]*v,f[9]=i[9]*v,f[10]=i[10]*v,f[11]=i[11]*v,f[12]=i[12]*v,f[13]=i[13]*v,f[14]=i[14]*v,f[15]=i[15]*v,f}const A=C;function N(i,v){const h=v??new o(16);return h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=i[3],h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=i[7],h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=i[11],h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15],h}const F=N;function L(i,v){return Math.abs(i[0]-v[0])<Ve&&Math.abs(i[1]-v[1])<Ve&&Math.abs(i[2]-v[2])<Ve&&Math.abs(i[3]-v[3])<Ve&&Math.abs(i[4]-v[4])<Ve&&Math.abs(i[5]-v[5])<Ve&&Math.abs(i[6]-v[6])<Ve&&Math.abs(i[7]-v[7])<Ve&&Math.abs(i[8]-v[8])<Ve&&Math.abs(i[9]-v[9])<Ve&&Math.abs(i[10]-v[10])<Ve&&Math.abs(i[11]-v[11])<Ve&&Math.abs(i[12]-v[12])<Ve&&Math.abs(i[13]-v[13])<Ve&&Math.abs(i[14]-v[14])<Ve&&Math.abs(i[15]-v[15])<Ve}function W(i,v){return i[0]===v[0]&&i[1]===v[1]&&i[2]===v[2]&&i[3]===v[3]&&i[4]===v[4]&&i[5]===v[5]&&i[6]===v[6]&&i[7]===v[7]&&i[8]===v[8]&&i[9]===v[9]&&i[10]===v[10]&&i[11]===v[11]&&i[12]===v[12]&&i[13]===v[13]&&i[14]===v[14]&&i[15]===v[15]}function oe(i){const v=i??new o(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function z(i,v){const h=v??new o(16);if(h===i){let Me;return Me=i[1],i[1]=i[4],i[4]=Me,Me=i[2],i[2]=i[8],i[8]=Me,Me=i[3],i[3]=i[12],i[12]=Me,Me=i[6],i[6]=i[9],i[9]=Me,Me=i[7],i[7]=i[13],i[13]=Me,Me=i[11],i[11]=i[14],i[14]=Me,h}const f=i[0*4+0],c=i[0*4+1],m=i[0*4+2],S=i[0*4+3],y=i[1*4+0],U=i[1*4+1],H=i[1*4+2],Q=i[1*4+3],_e=i[2*4+0],pe=i[2*4+1],ce=i[2*4+2],ye=i[2*4+3],De=i[3*4+0],Pe=i[3*4+1],Ce=i[3*4+2],Ie=i[3*4+3];return h[0]=f,h[1]=y,h[2]=_e,h[3]=De,h[4]=c,h[5]=U,h[6]=pe,h[7]=Pe,h[8]=m,h[9]=H,h[10]=ce,h[11]=Ce,h[12]=S,h[13]=Q,h[14]=ye,h[15]=Ie,h}function G(i,v){const h=v??new o(16),f=i[0*4+0],c=i[0*4+1],m=i[0*4+2],S=i[0*4+3],y=i[1*4+0],U=i[1*4+1],H=i[1*4+2],Q=i[1*4+3],_e=i[2*4+0],pe=i[2*4+1],ce=i[2*4+2],ye=i[2*4+3],De=i[3*4+0],Pe=i[3*4+1],Ce=i[3*4+2],Ie=i[3*4+3],Me=ce*Ie,Ne=Ce*ye,Oe=H*Ie,je=Ce*Q,Qe=H*ye,Ze=ce*Q,He=m*Ie,Xe=Ce*S,lt=m*ye,st=ce*S,et=m*Q,Je=H*S,qe=_e*Pe,rt=De*pe,$e=y*Pe,tt=De*U,it=y*pe,Dt=_e*U,bt=f*Pe,gt=De*c,wt=f*pe,At=_e*c,zt=f*U,mt=y*c,Lt=Me*U+je*pe+Qe*Pe-(Ne*U+Oe*pe+Ze*Pe),Ut=Ne*c+He*pe+st*Pe-(Me*c+Xe*pe+lt*Pe),Ot=Oe*c+Xe*U+et*Pe-(je*c+He*U+Je*Pe),Zt=Ze*c+lt*U+Je*pe-(Qe*c+st*U+et*pe),Fe=1/(f*Lt+y*Ut+_e*Ot+De*Zt);return h[0]=Fe*Lt,h[1]=Fe*Ut,h[2]=Fe*Ot,h[3]=Fe*Zt,h[4]=Fe*(Ne*y+Oe*_e+Ze*De-(Me*y+je*_e+Qe*De)),h[5]=Fe*(Me*f+Xe*_e+lt*De-(Ne*f+He*_e+st*De)),h[6]=Fe*(je*f+He*y+Je*De-(Oe*f+Xe*y+et*De)),h[7]=Fe*(Qe*f+st*y+et*_e-(Ze*f+lt*y+Je*_e)),h[8]=Fe*(qe*Q+tt*ye+it*Ie-(rt*Q+$e*ye+Dt*Ie)),h[9]=Fe*(rt*S+bt*ye+At*Ie-(qe*S+gt*ye+wt*Ie)),h[10]=Fe*($e*S+gt*Q+zt*Ie-(tt*S+bt*Q+mt*Ie)),h[11]=Fe*(Dt*S+wt*Q+mt*ye-(it*S+At*Q+zt*ye)),h[12]=Fe*($e*ce+Dt*Ce+rt*H-(it*Ce+qe*H+tt*ce)),h[13]=Fe*(wt*Ce+qe*m+gt*ce-(bt*ce+At*Ce+rt*m)),h[14]=Fe*(bt*H+mt*Ce+tt*m-(zt*Ce+$e*m+gt*H)),h[15]=Fe*(zt*ce+it*m+At*H-(wt*H+mt*ce+Dt*m)),h}function Y(i){const v=i[0],h=i[0*4+1],f=i[0*4+2],c=i[0*4+3],m=i[1*4+0],S=i[1*4+1],y=i[1*4+2],U=i[1*4+3],H=i[2*4+0],Q=i[2*4+1],_e=i[2*4+2],pe=i[2*4+3],ce=i[3*4+0],ye=i[3*4+1],De=i[3*4+2],Pe=i[3*4+3],Ce=_e*Pe,Ie=De*pe,Me=y*Pe,Ne=De*U,Oe=y*pe,je=_e*U,Qe=f*Pe,Ze=De*c,He=f*pe,Xe=_e*c,lt=f*U,st=y*c,et=Ce*S+Ne*Q+Oe*ye-(Ie*S+Me*Q+je*ye),Je=Ie*h+Qe*Q+Xe*ye-(Ce*h+Ze*Q+He*ye),qe=Me*h+Ze*S+lt*ye-(Ne*h+Qe*S+st*ye),rt=je*h+He*S+st*Q-(Oe*h+Xe*S+lt*Q);return v*et+m*Je+H*qe+ce*rt}const V=G;function te(i,v,h){const f=h??new o(16),c=i[0],m=i[1],S=i[2],y=i[3],U=i[4+0],H=i[4+1],Q=i[4+2],_e=i[4+3],pe=i[8+0],ce=i[8+1],ye=i[8+2],De=i[8+3],Pe=i[12+0],Ce=i[12+1],Ie=i[12+2],Me=i[12+3],Ne=v[0],Oe=v[1],je=v[2],Qe=v[3],Ze=v[4+0],He=v[4+1],Xe=v[4+2],lt=v[4+3],st=v[8+0],et=v[8+1],Je=v[8+2],qe=v[8+3],rt=v[12+0],$e=v[12+1],tt=v[12+2],it=v[12+3];return f[0]=c*Ne+U*Oe+pe*je+Pe*Qe,f[1]=m*Ne+H*Oe+ce*je+Ce*Qe,f[2]=S*Ne+Q*Oe+ye*je+Ie*Qe,f[3]=y*Ne+_e*Oe+De*je+Me*Qe,f[4]=c*Ze+U*He+pe*Xe+Pe*lt,f[5]=m*Ze+H*He+ce*Xe+Ce*lt,f[6]=S*Ze+Q*He+ye*Xe+Ie*lt,f[7]=y*Ze+_e*He+De*Xe+Me*lt,f[8]=c*st+U*et+pe*Je+Pe*qe,f[9]=m*st+H*et+ce*Je+Ce*qe,f[10]=S*st+Q*et+ye*Je+Ie*qe,f[11]=y*st+_e*et+De*Je+Me*qe,f[12]=c*rt+U*$e+pe*tt+Pe*it,f[13]=m*rt+H*$e+ce*tt+Ce*it,f[14]=S*rt+Q*$e+ye*tt+Ie*it,f[15]=y*rt+_e*$e+De*tt+Me*it,f}const $=te;function le(i,v,h){const f=h??oe();return i!==f&&(f[0]=i[0],f[1]=i[1],f[2]=i[2],f[3]=i[3],f[4]=i[4],f[5]=i[5],f[6]=i[6],f[7]=i[7],f[8]=i[8],f[9]=i[9],f[10]=i[10],f[11]=i[11]),f[12]=v[0],f[13]=v[1],f[14]=v[2],f[15]=1,f}function he(i,v){const h=v??r.create();return h[0]=i[12],h[1]=i[13],h[2]=i[14],h}function de(i,v,h){const f=h??r.create(),c=v*4;return f[0]=i[c+0],f[1]=i[c+1],f[2]=i[c+2],f}function se(i,v,h,f){const c=f===i?f:N(i,f),m=h*4;return c[m+0]=v[0],c[m+1]=v[1],c[m+2]=v[2],c}function ae(i,v){const h=v??r.create(),f=i[0],c=i[1],m=i[2],S=i[4],y=i[5],U=i[6],H=i[8],Q=i[9],_e=i[10];return h[0]=Math.sqrt(f*f+c*c+m*m),h[1]=Math.sqrt(S*S+y*y+U*U),h[2]=Math.sqrt(H*H+Q*Q+_e*_e),h}function Te(i,v,h,f,c){const m=c??new o(16),S=Math.tan(Math.PI*.5-.5*i);if(m[0]=S/v,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=S,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(f)){const y=1/(h-f);m[10]=f*y,m[14]=f*h*y}else m[10]=-1,m[14]=-h;return m}function ie(i,v,h,f=1/0,c){const m=c??new o(16),S=1/Math.tan(i*.5);if(m[0]=S/v,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=S,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,f===1/0)m[10]=0,m[14]=h;else{const y=1/(f-h);m[10]=h*y,m[14]=f*h*y}return m}function re(i,v,h,f,c,m,S){const y=S??new o(16);return y[0]=2/(v-i),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(f-h),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(c-m),y[11]=0,y[12]=(v+i)/(i-v),y[13]=(f+h)/(h-f),y[14]=c/(c-m),y[15]=1,y}function ge(i,v,h,f,c,m,S){const y=S??new o(16),U=v-i,H=f-h,Q=c-m;return y[0]=2*c/U,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*c/H,y[6]=0,y[7]=0,y[8]=(i+v)/U,y[9]=(f+h)/H,y[10]=m/Q,y[11]=-1,y[12]=0,y[13]=0,y[14]=c*m/Q,y[15]=0,y}function Le(i,v,h,f,c,m=1/0,S){const y=S??new o(16),U=v-i,H=f-h;if(y[0]=2*c/U,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*c/H,y[6]=0,y[7]=0,y[8]=(i+v)/U,y[9]=(f+h)/H,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,m===1/0)y[10]=0,y[14]=c;else{const Q=1/(m-c);y[10]=c*Q,y[14]=m*c*Q}return y}const ke=r.create(),X=r.create(),Z=r.create();function j(i,v,h,f){const c=f??new o(16);return r.normalize(r.subtract(v,i,Z),Z),r.normalize(r.cross(h,Z,ke),ke),r.normalize(r.cross(Z,ke,X),X),c[0]=ke[0],c[1]=ke[1],c[2]=ke[2],c[3]=0,c[4]=X[0],c[5]=X[1],c[6]=X[2],c[7]=0,c[8]=Z[0],c[9]=Z[1],c[10]=Z[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function J(i,v,h,f){const c=f??new o(16);return r.normalize(r.subtract(i,v,Z),Z),r.normalize(r.cross(h,Z,ke),ke),r.normalize(r.cross(Z,ke,X),X),c[0]=ke[0],c[1]=ke[1],c[2]=ke[2],c[3]=0,c[4]=X[0],c[5]=X[1],c[6]=X[2],c[7]=0,c[8]=Z[0],c[9]=Z[1],c[10]=Z[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function ve(i,v,h,f){const c=f??new o(16);return r.normalize(r.subtract(i,v,Z),Z),r.normalize(r.cross(h,Z,ke),ke),r.normalize(r.cross(Z,ke,X),X),c[0]=ke[0],c[1]=X[0],c[2]=Z[0],c[3]=0,c[4]=ke[1],c[5]=X[1],c[6]=Z[1],c[7]=0,c[8]=ke[2],c[9]=X[2],c[10]=Z[2],c[11]=0,c[12]=-(ke[0]*i[0]+ke[1]*i[1]+ke[2]*i[2]),c[13]=-(X[0]*i[0]+X[1]*i[1]+X[2]*i[2]),c[14]=-(Z[0]*i[0]+Z[1]*i[1]+Z[2]*i[2]),c[15]=1,c}function ze(i,v){const h=v??new o(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=i[0],h[13]=i[1],h[14]=i[2],h[15]=1,h}function we(i,v,h){const f=h??new o(16),c=v[0],m=v[1],S=v[2],y=i[0],U=i[1],H=i[2],Q=i[3],_e=i[1*4+0],pe=i[1*4+1],ce=i[1*4+2],ye=i[1*4+3],De=i[2*4+0],Pe=i[2*4+1],Ce=i[2*4+2],Ie=i[2*4+3],Me=i[3*4+0],Ne=i[3*4+1],Oe=i[3*4+2],je=i[3*4+3];return i!==f&&(f[0]=y,f[1]=U,f[2]=H,f[3]=Q,f[4]=_e,f[5]=pe,f[6]=ce,f[7]=ye,f[8]=De,f[9]=Pe,f[10]=Ce,f[11]=Ie),f[12]=y*c+_e*m+De*S+Me,f[13]=U*c+pe*m+Pe*S+Ne,f[14]=H*c+ce*m+Ce*S+Oe,f[15]=Q*c+ye*m+Ie*S+je,f}function Be(i,v){const h=v??new o(16),f=Math.cos(i),c=Math.sin(i);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=f,h[6]=c,h[7]=0,h[8]=0,h[9]=-c,h[10]=f,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function ne(i,v,h){const f=h??new o(16),c=i[4],m=i[5],S=i[6],y=i[7],U=i[8],H=i[9],Q=i[10],_e=i[11],pe=Math.cos(v),ce=Math.sin(v);return f[4]=pe*c+ce*U,f[5]=pe*m+ce*H,f[6]=pe*S+ce*Q,f[7]=pe*y+ce*_e,f[8]=pe*U-ce*c,f[9]=pe*H-ce*m,f[10]=pe*Q-ce*S,f[11]=pe*_e-ce*y,i!==f&&(f[0]=i[0],f[1]=i[1],f[2]=i[2],f[3]=i[3],f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function me(i,v){const h=v??new o(16),f=Math.cos(i),c=Math.sin(i);return h[0]=f,h[1]=0,h[2]=-c,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=c,h[9]=0,h[10]=f,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function xe(i,v,h){const f=h??new o(16),c=i[0*4+0],m=i[0*4+1],S=i[0*4+2],y=i[0*4+3],U=i[2*4+0],H=i[2*4+1],Q=i[2*4+2],_e=i[2*4+3],pe=Math.cos(v),ce=Math.sin(v);return f[0]=pe*c-ce*U,f[1]=pe*m-ce*H,f[2]=pe*S-ce*Q,f[3]=pe*y-ce*_e,f[8]=pe*U+ce*c,f[9]=pe*H+ce*m,f[10]=pe*Q+ce*S,f[11]=pe*_e+ce*y,i!==f&&(f[4]=i[4],f[5]=i[5],f[6]=i[6],f[7]=i[7],f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function D(i,v){const h=v??new o(16),f=Math.cos(i),c=Math.sin(i);return h[0]=f,h[1]=c,h[2]=0,h[3]=0,h[4]=-c,h[5]=f,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function K(i,v,h){const f=h??new o(16),c=i[0*4+0],m=i[0*4+1],S=i[0*4+2],y=i[0*4+3],U=i[1*4+0],H=i[1*4+1],Q=i[1*4+2],_e=i[1*4+3],pe=Math.cos(v),ce=Math.sin(v);return f[0]=pe*c+ce*U,f[1]=pe*m+ce*H,f[2]=pe*S+ce*Q,f[3]=pe*y+ce*_e,f[4]=pe*U-ce*c,f[5]=pe*H-ce*m,f[6]=pe*Q-ce*S,f[7]=pe*_e-ce*y,i!==f&&(f[8]=i[8],f[9]=i[9],f[10]=i[10],f[11]=i[11],f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function g(i,v,h){const f=h??new o(16);let c=i[0],m=i[1],S=i[2];const y=Math.sqrt(c*c+m*m+S*S);c/=y,m/=y,S/=y;const U=c*c,H=m*m,Q=S*S,_e=Math.cos(v),pe=Math.sin(v),ce=1-_e;return f[0]=U+(1-U)*_e,f[1]=c*m*ce+S*pe,f[2]=c*S*ce-m*pe,f[3]=0,f[4]=c*m*ce-S*pe,f[5]=H+(1-H)*_e,f[6]=m*S*ce+c*pe,f[7]=0,f[8]=c*S*ce+m*pe,f[9]=m*S*ce-c*pe,f[10]=Q+(1-Q)*_e,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}const a=g;function u(i,v,h,f){const c=f??new o(16);let m=v[0],S=v[1],y=v[2];const U=Math.sqrt(m*m+S*S+y*y);m/=U,S/=U,y/=U;const H=m*m,Q=S*S,_e=y*y,pe=Math.cos(h),ce=Math.sin(h),ye=1-pe,De=H+(1-H)*pe,Pe=m*S*ye+y*ce,Ce=m*y*ye-S*ce,Ie=m*S*ye-y*ce,Me=Q+(1-Q)*pe,Ne=S*y*ye+m*ce,Oe=m*y*ye+S*ce,je=S*y*ye-m*ce,Qe=_e+(1-_e)*pe,Ze=i[0],He=i[1],Xe=i[2],lt=i[3],st=i[4],et=i[5],Je=i[6],qe=i[7],rt=i[8],$e=i[9],tt=i[10],it=i[11];return c[0]=De*Ze+Pe*st+Ce*rt,c[1]=De*He+Pe*et+Ce*$e,c[2]=De*Xe+Pe*Je+Ce*tt,c[3]=De*lt+Pe*qe+Ce*it,c[4]=Ie*Ze+Me*st+Ne*rt,c[5]=Ie*He+Me*et+Ne*$e,c[6]=Ie*Xe+Me*Je+Ne*tt,c[7]=Ie*lt+Me*qe+Ne*it,c[8]=Oe*Ze+je*st+Qe*rt,c[9]=Oe*He+je*et+Qe*$e,c[10]=Oe*Xe+je*Je+Qe*tt,c[11]=Oe*lt+je*qe+Qe*it,i!==c&&(c[12]=i[12],c[13]=i[13],c[14]=i[14],c[15]=i[15]),c}const d=u;function w(i,v){const h=v??new o(16);return h[0]=i[0],h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=i[1],h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=i[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function P(i,v,h){const f=h??new o(16),c=v[0],m=v[1],S=v[2];return f[0]=c*i[0*4+0],f[1]=c*i[0*4+1],f[2]=c*i[0*4+2],f[3]=c*i[0*4+3],f[4]=m*i[1*4+0],f[5]=m*i[1*4+1],f[6]=m*i[1*4+2],f[7]=m*i[1*4+3],f[8]=S*i[2*4+0],f[9]=S*i[2*4+1],f[10]=S*i[2*4+2],f[11]=S*i[2*4+3],i!==f&&(f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function k(i,v){const h=v??new o(16);return h[0]=i,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=i,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=i,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function E(i,v,h){const f=h??new o(16);return f[0]=v*i[0*4+0],f[1]=v*i[0*4+1],f[2]=v*i[0*4+2],f[3]=v*i[0*4+3],f[4]=v*i[1*4+0],f[5]=v*i[1*4+1],f[6]=v*i[1*4+2],f[7]=v*i[1*4+3],f[8]=v*i[2*4+0],f[9]=v*i[2*4+1],f[10]=v*i[2*4+2],f[11]=v*i[2*4+3],i!==f&&(f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}return{add:B,aim:j,axisRotate:u,axisRotation:g,cameraAim:J,clone:F,copy:N,create:l,determinant:Y,equals:W,equalsApproximately:L,fromMat3:_,fromQuat:b,frustum:ge,frustumReverseZ:Le,getAxis:de,getScaling:ae,getTranslation:he,identity:oe,inverse:G,invert:V,lookAt:ve,mul:$,mulScalar:A,multiply:te,multiplyScalar:C,negate:M,ortho:re,perspective:Te,perspectiveReverseZ:ie,rotate:d,rotateX:ne,rotateY:xe,rotateZ:K,rotation:a,rotationX:Be,rotationY:me,rotationZ:D,scale:P,scaling:w,set:x,setAxis:se,setTranslation:le,translate:we,translation:ze,transpose:z,uniformScale:E,uniformScaling:k}}const pi=new Map;function tc(o){let r=pi.get(o);return r||(r=ec(o),pi.set(o,r)),r}function nc(o){const r=Ps(o);function l(D,K,g,a){const u=new o(4);return D!==void 0&&(u[0]=D,K!==void 0&&(u[1]=K,g!==void 0&&(u[2]=g,a!==void 0&&(u[3]=a)))),u}const x=l;function _(D,K,g,a,u){const d=u??new o(4);return d[0]=D,d[1]=K,d[2]=g,d[3]=a,d}function b(D,K,g){const a=g??new o(4),u=K*.5,d=Math.sin(u);return a[0]=d*D[0],a[1]=d*D[1],a[2]=d*D[2],a[3]=Math.cos(u),a}function M(D,K){const g=K??r.create(3),a=Math.acos(D[3])*2,u=Math.sin(a*.5);return u>Ve?(g[0]=D[0]/u,g[1]=D[1]/u,g[2]=D[2]/u):(g[0]=1,g[1]=0,g[2]=0),{angle:a,axis:g}}function B(D,K){const g=Te(D,K);return Math.acos(2*g*g-1)}function C(D,K,g){const a=g??new o(4),u=D[0],d=D[1],w=D[2],P=D[3],k=K[0],E=K[1],i=K[2],v=K[3];return a[0]=u*v+P*k+d*i-w*E,a[1]=d*v+P*E+w*k-u*i,a[2]=w*v+P*i+u*E-d*k,a[3]=P*v-u*k-d*E-w*i,a}const A=C;function N(D,K,g){const a=g??new o(4),u=K*.5,d=D[0],w=D[1],P=D[2],k=D[3],E=Math.sin(u),i=Math.cos(u);return a[0]=d*i+k*E,a[1]=w*i+P*E,a[2]=P*i-w*E,a[3]=k*i-d*E,a}function F(D,K,g){const a=g??new o(4),u=K*.5,d=D[0],w=D[1],P=D[2],k=D[3],E=Math.sin(u),i=Math.cos(u);return a[0]=d*i-P*E,a[1]=w*i+k*E,a[2]=P*i+d*E,a[3]=k*i-w*E,a}function L(D,K,g){const a=g??new o(4),u=K*.5,d=D[0],w=D[1],P=D[2],k=D[3],E=Math.sin(u),i=Math.cos(u);return a[0]=d*i+w*E,a[1]=w*i-d*E,a[2]=P*i+k*E,a[3]=k*i-P*E,a}function W(D,K,g,a){const u=a??new o(4),d=D[0],w=D[1],P=D[2],k=D[3];let E=K[0],i=K[1],v=K[2],h=K[3],f=d*E+w*i+P*v+k*h;f<0&&(f=-f,E=-E,i=-i,v=-v,h=-h);let c,m;if(1-f>Ve){const S=Math.acos(f),y=Math.sin(S);c=Math.sin((1-g)*S)/y,m=Math.sin(g*S)/y}else c=1-g,m=g;return u[0]=c*d+m*E,u[1]=c*w+m*i,u[2]=c*P+m*v,u[3]=c*k+m*h,u}function oe(D,K){const g=K??new o(4),a=D[0],u=D[1],d=D[2],w=D[3],P=a*a+u*u+d*d+w*w,k=P?1/P:0;return g[0]=-a*k,g[1]=-u*k,g[2]=-d*k,g[3]=w*k,g}function z(D,K){const g=K??new o(4);return g[0]=-D[0],g[1]=-D[1],g[2]=-D[2],g[3]=D[3],g}function G(D,K){const g=K??new o(4),a=D[0]+D[5]+D[10];if(a>0){const u=Math.sqrt(a+1);g[3]=.5*u;const d=.5/u;g[0]=(D[6]-D[9])*d,g[1]=(D[8]-D[2])*d,g[2]=(D[1]-D[4])*d}else{let u=0;D[5]>D[0]&&(u=1),D[10]>D[u*4+u]&&(u=2);const d=(u+1)%3,w=(u+2)%3,P=Math.sqrt(D[u*4+u]-D[d*4+d]-D[w*4+w]+1);g[u]=.5*P;const k=.5/P;g[3]=(D[d*4+w]-D[w*4+d])*k,g[d]=(D[d*4+u]+D[u*4+d])*k,g[w]=(D[w*4+u]+D[u*4+w])*k}return g}function Y(D,K,g,a,u){const d=u??new o(4),w=D*.5,P=K*.5,k=g*.5,E=Math.sin(w),i=Math.cos(w),v=Math.sin(P),h=Math.cos(P),f=Math.sin(k),c=Math.cos(k);switch(a){case"xyz":d[0]=E*h*c+i*v*f,d[1]=i*v*c-E*h*f,d[2]=i*h*f+E*v*c,d[3]=i*h*c-E*v*f;break;case"xzy":d[0]=E*h*c-i*v*f,d[1]=i*v*c-E*h*f,d[2]=i*h*f+E*v*c,d[3]=i*h*c+E*v*f;break;case"yxz":d[0]=E*h*c+i*v*f,d[1]=i*v*c-E*h*f,d[2]=i*h*f-E*v*c,d[3]=i*h*c+E*v*f;break;case"yzx":d[0]=E*h*c+i*v*f,d[1]=i*v*c+E*h*f,d[2]=i*h*f-E*v*c,d[3]=i*h*c-E*v*f;break;case"zxy":d[0]=E*h*c-i*v*f,d[1]=i*v*c+E*h*f,d[2]=i*h*f+E*v*c,d[3]=i*h*c-E*v*f;break;case"zyx":d[0]=E*h*c-i*v*f,d[1]=i*v*c+E*h*f,d[2]=i*h*f-E*v*c,d[3]=i*h*c+E*v*f;break;default:throw new Error(`Unknown rotation order: ${a}`)}return d}function V(D,K){const g=K??new o(4);return g[0]=D[0],g[1]=D[1],g[2]=D[2],g[3]=D[3],g}const te=V;function $(D,K,g){const a=g??new o(4);return a[0]=D[0]+K[0],a[1]=D[1]+K[1],a[2]=D[2]+K[2],a[3]=D[3]+K[3],a}function le(D,K,g){const a=g??new o(4);return a[0]=D[0]-K[0],a[1]=D[1]-K[1],a[2]=D[2]-K[2],a[3]=D[3]-K[3],a}const he=le;function de(D,K,g){const a=g??new o(4);return a[0]=D[0]*K,a[1]=D[1]*K,a[2]=D[2]*K,a[3]=D[3]*K,a}const se=de;function ae(D,K,g){const a=g??new o(4);return a[0]=D[0]/K,a[1]=D[1]/K,a[2]=D[2]/K,a[3]=D[3]/K,a}function Te(D,K){return D[0]*K[0]+D[1]*K[1]+D[2]*K[2]+D[3]*K[3]}function ie(D,K,g,a){const u=a??new o(4);return u[0]=D[0]+g*(K[0]-D[0]),u[1]=D[1]+g*(K[1]-D[1]),u[2]=D[2]+g*(K[2]-D[2]),u[3]=D[3]+g*(K[3]-D[3]),u}function re(D){const K=D[0],g=D[1],a=D[2],u=D[3];return Math.sqrt(K*K+g*g+a*a+u*u)}const ge=re;function Le(D){const K=D[0],g=D[1],a=D[2],u=D[3];return K*K+g*g+a*a+u*u}const ke=Le;function X(D,K){const g=K??new o(4),a=D[0],u=D[1],d=D[2],w=D[3],P=Math.sqrt(a*a+u*u+d*d+w*w);return P>1e-5?(g[0]=a/P,g[1]=u/P,g[2]=d/P,g[3]=w/P):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function Z(D,K){return Math.abs(D[0]-K[0])<Ve&&Math.abs(D[1]-K[1])<Ve&&Math.abs(D[2]-K[2])<Ve&&Math.abs(D[3]-K[3])<Ve}function j(D,K){return D[0]===K[0]&&D[1]===K[1]&&D[2]===K[2]&&D[3]===K[3]}function J(D){const K=D??new o(4);return K[0]=0,K[1]=0,K[2]=0,K[3]=1,K}const ve=r.create(),ze=r.create(),we=r.create();function Be(D,K,g){const a=g??new o(4),u=r.dot(D,K);return u<-.999999?(r.cross(ze,D,ve),r.len(ve)<1e-6&&r.cross(we,D,ve),r.normalize(ve,ve),b(ve,Math.PI,a),a):u>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(r.cross(D,K,ve),a[0]=ve[0],a[1]=ve[1],a[2]=ve[2],a[3]=1+u,X(a,a))}const ne=new o(4),me=new o(4);function xe(D,K,g,a,u,d){const w=d??new o(4);return W(D,a,u,ne),W(K,g,u,me),W(ne,me,2*u*(1-u),w),w}return{create:l,fromValues:x,set:_,fromAxisAngle:b,toAxisAngle:M,angle:B,multiply:C,mul:A,rotateX:N,rotateY:F,rotateZ:L,slerp:W,inverse:oe,conjugate:z,fromMat:G,fromEuler:Y,copy:V,clone:te,add:$,subtract:le,sub:he,mulScalar:de,scale:se,divScalar:ae,dot:Te,lerp:ie,length:re,len:ge,lengthSq:Le,lenSq:ke,normalize:X,equalsApproximately:Z,equals:j,identity:J,rotationTo:Be,sqlerp:xe}}const hi=new Map;function sc(o){let r=hi.get(o);return r||(r=nc(o),hi.set(o,r)),r}function rc(o){function r(g,a,u,d){const w=new o(4);return g!==void 0&&(w[0]=g,a!==void 0&&(w[1]=a,u!==void 0&&(w[2]=u,d!==void 0&&(w[3]=d)))),w}const l=r;function x(g,a,u,d,w){const P=w??new o(4);return P[0]=g,P[1]=a,P[2]=u,P[3]=d,P}function _(g,a){const u=a??new o(4);return u[0]=Math.ceil(g[0]),u[1]=Math.ceil(g[1]),u[2]=Math.ceil(g[2]),u[3]=Math.ceil(g[3]),u}function b(g,a){const u=a??new o(4);return u[0]=Math.floor(g[0]),u[1]=Math.floor(g[1]),u[2]=Math.floor(g[2]),u[3]=Math.floor(g[3]),u}function M(g,a){const u=a??new o(4);return u[0]=Math.round(g[0]),u[1]=Math.round(g[1]),u[2]=Math.round(g[2]),u[3]=Math.round(g[3]),u}function B(g,a=0,u=1,d){const w=d??new o(4);return w[0]=Math.min(u,Math.max(a,g[0])),w[1]=Math.min(u,Math.max(a,g[1])),w[2]=Math.min(u,Math.max(a,g[2])),w[3]=Math.min(u,Math.max(a,g[3])),w}function C(g,a,u){const d=u??new o(4);return d[0]=g[0]+a[0],d[1]=g[1]+a[1],d[2]=g[2]+a[2],d[3]=g[3]+a[3],d}function A(g,a,u,d){const w=d??new o(4);return w[0]=g[0]+a[0]*u,w[1]=g[1]+a[1]*u,w[2]=g[2]+a[2]*u,w[3]=g[3]+a[3]*u,w}function N(g,a,u){const d=u??new o(4);return d[0]=g[0]-a[0],d[1]=g[1]-a[1],d[2]=g[2]-a[2],d[3]=g[3]-a[3],d}const F=N;function L(g,a){return Math.abs(g[0]-a[0])<Ve&&Math.abs(g[1]-a[1])<Ve&&Math.abs(g[2]-a[2])<Ve&&Math.abs(g[3]-a[3])<Ve}function W(g,a){return g[0]===a[0]&&g[1]===a[1]&&g[2]===a[2]&&g[3]===a[3]}function oe(g,a,u,d){const w=d??new o(4);return w[0]=g[0]+u*(a[0]-g[0]),w[1]=g[1]+u*(a[1]-g[1]),w[2]=g[2]+u*(a[2]-g[2]),w[3]=g[3]+u*(a[3]-g[3]),w}function z(g,a,u,d){const w=d??new o(4);return w[0]=g[0]+u[0]*(a[0]-g[0]),w[1]=g[1]+u[1]*(a[1]-g[1]),w[2]=g[2]+u[2]*(a[2]-g[2]),w[3]=g[3]+u[3]*(a[3]-g[3]),w}function G(g,a,u){const d=u??new o(4);return d[0]=Math.max(g[0],a[0]),d[1]=Math.max(g[1],a[1]),d[2]=Math.max(g[2],a[2]),d[3]=Math.max(g[3],a[3]),d}function Y(g,a,u){const d=u??new o(4);return d[0]=Math.min(g[0],a[0]),d[1]=Math.min(g[1],a[1]),d[2]=Math.min(g[2],a[2]),d[3]=Math.min(g[3],a[3]),d}function V(g,a,u){const d=u??new o(4);return d[0]=g[0]*a,d[1]=g[1]*a,d[2]=g[2]*a,d[3]=g[3]*a,d}const te=V;function $(g,a,u){const d=u??new o(4);return d[0]=g[0]/a,d[1]=g[1]/a,d[2]=g[2]/a,d[3]=g[3]/a,d}function le(g,a){const u=a??new o(4);return u[0]=1/g[0],u[1]=1/g[1],u[2]=1/g[2],u[3]=1/g[3],u}const he=le;function de(g,a){return g[0]*a[0]+g[1]*a[1]+g[2]*a[2]+g[3]*a[3]}function se(g){const a=g[0],u=g[1],d=g[2],w=g[3];return Math.sqrt(a*a+u*u+d*d+w*w)}const ae=se;function Te(g){const a=g[0],u=g[1],d=g[2],w=g[3];return a*a+u*u+d*d+w*w}const ie=Te;function re(g,a){const u=g[0]-a[0],d=g[1]-a[1],w=g[2]-a[2],P=g[3]-a[3];return Math.sqrt(u*u+d*d+w*w+P*P)}const ge=re;function Le(g,a){const u=g[0]-a[0],d=g[1]-a[1],w=g[2]-a[2],P=g[3]-a[3];return u*u+d*d+w*w+P*P}const ke=Le;function X(g,a){const u=a??new o(4),d=g[0],w=g[1],P=g[2],k=g[3],E=Math.sqrt(d*d+w*w+P*P+k*k);return E>1e-5?(u[0]=d/E,u[1]=w/E,u[2]=P/E,u[3]=k/E):(u[0]=0,u[1]=0,u[2]=0,u[3]=0),u}function Z(g,a){const u=a??new o(4);return u[0]=-g[0],u[1]=-g[1],u[2]=-g[2],u[3]=-g[3],u}function j(g,a){const u=a??new o(4);return u[0]=g[0],u[1]=g[1],u[2]=g[2],u[3]=g[3],u}const J=j;function ve(g,a,u){const d=u??new o(4);return d[0]=g[0]*a[0],d[1]=g[1]*a[1],d[2]=g[2]*a[2],d[3]=g[3]*a[3],d}const ze=ve;function we(g,a,u){const d=u??new o(4);return d[0]=g[0]/a[0],d[1]=g[1]/a[1],d[2]=g[2]/a[2],d[3]=g[3]/a[3],d}const Be=we;function ne(g){const a=g??new o(4);return a[0]=0,a[1]=0,a[2]=0,a[3]=0,a}function me(g,a,u){const d=u??new o(4),w=g[0],P=g[1],k=g[2],E=g[3];return d[0]=a[0]*w+a[4]*P+a[8]*k+a[12]*E,d[1]=a[1]*w+a[5]*P+a[9]*k+a[13]*E,d[2]=a[2]*w+a[6]*P+a[10]*k+a[14]*E,d[3]=a[3]*w+a[7]*P+a[11]*k+a[15]*E,d}function xe(g,a,u){const d=u??new o(4);return X(g,d),V(d,a,d)}function D(g,a,u){const d=u??new o(4);return se(g)>a?xe(g,a,d):j(g,d)}function K(g,a,u){const d=u??new o(4);return oe(g,a,.5,d)}return{create:r,fromValues:l,set:x,ceil:_,floor:b,round:M,clamp:B,add:C,addScaled:A,subtract:N,sub:F,equalsApproximately:L,equals:W,lerp:oe,lerpV:z,max:G,min:Y,mulScalar:V,scale:te,divScalar:$,inverse:le,invert:he,dot:de,length:se,len:ae,lengthSq:Te,lenSq:ie,distance:re,dist:ge,distanceSq:Le,distSq:ke,normalize:X,negate:Z,copy:j,clone:J,multiply:ve,mul:ze,divide:we,div:Be,zero:ne,transformMat4:me,setLength:xe,truncate:D,midpoint:K}}const fi=new Map;function ic(o){let r=fi.get(o);return r||(r=rc(o),fi.set(o,r)),r}function or(o,r,l,x,_,b){return{mat3:Ql(o),mat4:tc(r),quat:sc(l),vec2:Li(x),vec3:Ps(_),vec4:ic(b)}}const{mat3:Pt,mat4:ct,quat:at,vec2:_i,vec3:q,vec4:du}=or(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);or(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);or(Yl,Array,Array,Array,Array,Array);const mi=document.querySelector("#log");let kt=null,gn=null;function Ii(){if(kt)return kt;kt=document.createElement("div"),kt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",kt.appendChild(o),gn=document.createElement("div"),gn.className="ply-spinner-label",kt.appendChild(gn),kt.style.display="none",document.body.appendChild(kt),kt}function Xn(o){Ii(),gn&&o&&(gn.textContent=o),kt&&(kt.style.opacity="1",kt.style.display="flex")}function Ct(o){Ii(),gn&&(gn.textContent=o)}function wn(){if(!kt)return;const o=kt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Gi(o,r){if(!mi)return;const l=document.createElement("p");l.innerText=o,r&&Object.assign(l.style,r),mi.appendChild(l)}async function ut(o){console.log(o),Gi(o)}async function oc(o){console.error(o),Gi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Fi;function Oi(){Fi=performance.now()}function vi(o){const r=performance.now()-Fi;ut(`⏱️ ${o} Time: ${r.toFixed(0)} ms`)}function ac(o,r){if(!o)throw new Error(r&&(typeof r=="string"?r:r()))}function Dn(o){return o+3&-4}const lc=2,cc=3,uc=5,dc=6,Yn=7,_s=8,Jn=9,Qn=10;function ms(o){const r=new TextDecoder("ascii"),l=r.decode(new Uint8Array(o,0,4));if(l!=="NAT2")throw new Error(`NAT2 bad magic: '${l}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const x=new DataView(o),_=4,b=x.getUint32(_+0,!0),M=x.getUint32(_+4,!0),B=x.getUint32(_+8,!0),C=x.getUint32(_+12,!0),A=x.getUint32(_+16,!0),N=x.getFloat32(_+20,!0),F=x.getUint32(_+24,!0),L=x.getUint32(_+28,!0),W=x.getFloat32(_+32,!0),oe=x.getFloat32(_+36,!0),z=x.getFloat32(_+40,!0),G=x.getUint32(_+44,!0),Y=x.getFloat32(_+48,!0),V=x.getFloat32(_+52,!0),te=x.getUint32(_+56,!0),$=x.getUint32(_+60,!0),le=L===Jn||L===Qn,he=le?$:0,de=le?0:$&255,se=le?0:$>>8&255,ae=de>0?de:1;if(L===uc||L===dc)throw new Error(`NAT2: paired-RVQ format=${L} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Te=L===Jn||L===Qn;if(L!==lc&&L!==cc&&L!==Yn&&L!==_s&&!Te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${L}`);if(b%4!==0||G%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${b} layer_h=${G}`);let ie=_+64;const re=(te+1)*4,ge=new Uint32Array(o.slice(ie,ie+re));ie+=re;let Le;if(ae>1){const ne=(ae+1)*4;if(ie+ne>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ne} from ${ie})`);Le=new Uint32Array(o.slice(ie,ie+ne)),ie+=ne}else Le=new Uint32Array([0,b]);let ke=0;for(let ne=0;ne<ae;ne++){const me=Le[ne+1]-Le[ne];me>ke&&(ke=me)}if(Te){const ne=he&2?21:he&1?7:6,me=A*ne*4;if(ie+me>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${me} more bytes from offset ${ie}, have ${o.byteLength-ie}`);const xe=new Float32Array(o.slice(ie,ie+me));ie+=me;const D=Math.max(1,he>>8&255),K=[];let g=0;for(let P=0,k=b,E=G;P<D;P++,k>>=1,E>>=1){const i=Math.max(1,k>>2)*Math.max(1,E>>2)*16;K.push(i),g+=i}const a=o.byteLength-ie;if(a<g)throw new Error(`NAT2 probe atlas truncated: need ${g} bytes for ${b}x${G} x${D} mips, have ${a}`);const u=[];let d=ie;for(const P of K)u.push(new Uint8Array(o.slice(d,d+P))),d+=P;const w=u[0];return{width:b,height:M,channels:B,kernel_type:C,num_rects:A,uv_extent:N,sb_number:F,format:L,sh_bias:W,res_bias:oe,compact_mult:z,layer_h:G,atlas_scale:Y,atlas_offset:V,n_layers:te,n_cols:ae,layer_cuts:ge,column_cuts:Le,slice_width:ke,rects_expanded:xe,atlas_bytes:w,mip_bytes:u,probe_mode:he&2?3:he&1?2:1}}const X=A*4*4;if(ie+X>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${X} more bytes from offset ${ie}, have ${o.byteLength-ie}`);const Z=new Float32Array(o.slice(ie,ie+X));ie+=X;const j=new Float32Array(A*5);for(let ne=0;ne<A;ne++){const me=Z[ne*4+0],xe=Z[ne*4+1],D=Z[ne*4+2],K=Z[ne*4+3];let g=0;for(let P=1;P<=te&&ge[P]<=xe;P++)g=P;let a=0;for(let P=1;P<=ae&&Le[P]<=me;P++)a=P;const u=xe-ge[g],d=me-Le[a],w=a*te+g;j[ne*5+0]=d,j[ne*5+1]=u,j[ne*5+2]=D,j[ne*5+3]=K,j[ne*5+4]=w}let J,ve;const ze=ae,Be=b/4*16;if(L===Yn||L===_s){if(ie+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ne=L===Yn?"BCCB":"ACCB",me=r.decode(new Uint8Array(o,ie,4));if(me!==ne)throw new Error(`NAT2 typeD bad sub-magic: expected '${ne}' got '${me}'`);const xe=x.getUint32(ie+4,!0),D=x.getUint32(ie+8,!0),K=x.getUint32(ie+12,!0),g=x.getUint32(ie+16,!0),a=x.getUint32(ie+20,!0);if(xe!==1)throw new Error(`NAT2 BCCB unsupported version ${xe}`);if(K!==M/4||g!==b/4||a!==K*g)throw new Error(`NAT2 BCCB block grid mismatch: header ${b}×${M}, sub-header ${g}×${K} (${a} blocks)`);ie+=24;const u=D*16;if(ie+u>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${u}, have ${o.byteLength-ie})`);const d=new Uint8Array(o,ie,u);ie+=u;const w=a*2;if(ie+w>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${w}, have ${o.byteLength-ie})`);const P=new Uint16Array(o.slice(ie,ie+w));ie+=w;const k=new Uint8Array(a*16);for(let E=0;E<a;E++){const i=P[E]*16;k.set(d.subarray(i,i+16),E*16)}if(J=k,se>1){ve=[k];for(let E=1;E<se;E++){if(ie+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${E} sub-header`);const i=r.decode(new Uint8Array(o,ie,4));if(i!==ne)throw new Error(`NAT2 mip ${E}: bad sub-magic '${i}'`);const v=x.getUint32(ie+8,!0),h=x.getUint32(ie+16,!0),f=x.getUint32(ie+20,!0);if(h!==E)throw new Error(`NAT2 mip section order: expected level ${E}, got ${h}`);ie+=24;let c=0;for(let U=0;U<ze;U++)for(let H=0;H<te;H++){const Q=Vi(E,Le[U+1]-Le[U],ge[H+1]-ge[H],ke,G);c+=(Q.cw>>2)*(Q.ch>>2)}if(c!==f)throw new Error(`NAT2 mip ${E}: ${f} blocks, loader expects ${c}`);if(ie+v*16+f*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${E}`);const m=new Uint8Array(o,ie,v*16);ie+=v*16;const S=new Uint16Array(o.slice(ie,ie+f*2));ie+=f*2;const y=new Uint8Array(f*16);for(let U=0;U<f;U++){const H=S[U]*16;y.set(m.subarray(H,H+16),U*16)}ve.push(y)}}}else{let ne=0;for(let me=0;me<te;me++){const xe=ge[me+1]-ge[me];if(xe%4!==0)throw new Error(`NAT2 BC7 layer ${me} rows ${xe} not 4-aligned`);ne+=xe/4*Be}if(ie+ne>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ne} more bytes from offset ${ie}, have ${o.byteLength-ie}`);J=new Uint8Array(o.slice(ie,ie+ne))}return{width:b,height:M,channels:B,kernel_type:C,num_rects:A,uv_extent:N,sb_number:F,format:L,sh_bias:W,res_bias:oe,compact_mult:z,layer_h:G,atlas_scale:Y,atlas_offset:V,n_layers:te,n_cols:ae,layer_cuts:ge,column_cuts:Le,slice_width:ke,rects_expanded:j,atlas_bytes:J,...ve?{mip_bytes:ve}:{}}}function Vi(o,r,l,x,_){const b=B=>B+3>>2<<2,M=1<<o;return{cw:Math.min(b(Math.max(1,x>>o)),b(Math.ceil(r/M))),ch:Math.min(b(Math.max(1,_>>o)),b(Math.ceil(l/M)))}}const pc=32;function bi(o,r,l){if(r.format===5||r.format===6)throw new Error(`paired-RVQ format=${r.format} is retired; re-bake with typeD (--bc7-codebook)`);let x,_,b,M;if(r.format===2||r.format===Yn||r.format===Jn){if(!o.features.has("texture-compression-bc"))return ut(`⚠️  bundle is BC7 (format=${r.format}) but texture-compression-bc not supported — atlas disabled`),null;M=r.format===Jn?"BC7 atlas (proberes: shared probe texture)":r.format===Yn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:x,view:_,sampler:b}=gi(o,r,"bc7-rgba-unorm",M)}else if(r.format===3||r.format===_s||r.format===Qn){if(!o.features.has("texture-compression-astc"))return ut(`⚠️  bundle is ASTC 4x4 (format=${r.format}) but texture-compression-astc not supported — atlas disabled`),null;M=r.format===Qn?"ASTC 4x4 atlas (proberes: shared probe texture)":r.format===_s?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:x,view:_,sampler:b}=gi(o,r,"astc-4x4-unorm",M)}else return ut(`⚠️  unsupported atlas format ${r.format} — atlas disabled`),null;const{rects_expanded:B}=r,C=o.createBuffer({label:"atlas rects (5-stride)",size:Dn(B.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,B);const A=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return fs(o,A,r,l),{texture:x,view:_,sampler:b,rectsBuffer:C,texParamsBuffer:A,meta:r}}function gi(o,r,l,x){const{width:_,layer_h:b,n_layers:M,n_cols:B,layer_cuts:C,column_cuts:A,slice_width:N,atlas_bytes:F}=r,W=_/4*16,oe=o.limits.maxTextureDimension2D;if(b>oe||N>oe)throw new Error(`⚠️  atlas slice dims ${N}x${b} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const z=B*M;if(z>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${B} cols × ${M} layers = ${z} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const G=r.mip_bytes??[F],Y=G.length,V=o.createTexture({label:x,size:{width:N,height:b,depthOrArrayLayers:z},mipLevelCount:Y,sampleCount:1,dimension:"2d",format:l,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let he=0;he<B;he++){const de=A[he]/4,se=(A[he+1]-A[he])/4;for(let ae=0;ae<M;ae++){const Te=C[ae]/4,ie=(C[ae+1]-C[ae])/4,re=he*M+ae,ge=Te*W+de*16;o.queue.writeTexture({texture:V,mipLevel:0,origin:{x:0,y:0,z:re},aspect:"all"},F,{offset:ge,bytesPerRow:W,rowsPerImage:ie},{width:se*4,height:ie*4,depthOrArrayLayers:1})}}const te=r.format===Jn||r.format===Qn;for(let he=1;he<Y&&!te;he++){let de=0;for(let se=0;se<B;se++)for(let ae=0;ae<M;ae++){const{cw:Te,ch:ie}=Vi(he,A[se+1]-A[se],C[ae+1]-C[ae],N,b);o.queue.writeTexture({texture:V,mipLevel:he,origin:{x:0,y:0,z:se*M+ae},aspect:"all"},G[he],{offset:de,bytesPerRow:(Te>>2)*16,rowsPerImage:ie>>2},{width:Te,height:ie,depthOrArrayLayers:1}),de+=(Te>>2)*(ie>>2)*16}}for(let he=1;he<Y&&te;he++){const de=Math.max(1,N>>he),se=Math.max(1,b>>he);o.queue.writeTexture({texture:V,mipLevel:he,origin:{x:0,y:0,z:0},aspect:"all"},G[he],{offset:0,bytesPerRow:Math.max(1,de>>2)*16,rowsPerImage:Math.max(1,se>>2)},{width:de,height:se,depthOrArrayLayers:1})}Y>1&&console.log(`[atlas] ${Y} mip levels uploaded (${te?"trilinear":"per-surfel integer level"})`);const $=V.createView({label:`${x} view`,dimension:"2d-array"}),le=o.createSampler({label:`${x} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:Y>1&&te?"linear":"nearest"});return{texture:V,view:$,sampler:le}}function fs(o,r,l,x,_=1){var A;const b=new ArrayBuffer(32),M=new Uint32Array(b),B=new Float32Array(b);M[0]=x?1:0,B[1]=l.atlas_scale,B[2]=l.atlas_offset,B[3]=l.res_bias,M[4]=l.probe_mode?l.probe_mode|0:0,M[5]=l.width|0;const C=(((A=l.mip_bytes)==null?void 0:A.length)??1)>1;M[6]=C&&_!==0?1:0,B[7]=l.uv_extent,o.queue.writeBuffer(r,0,b)}async function Js(o,r){ut(`loading ply file from File... : ${o.name}`),Xn("downloading PLY...");const l=await o.arrayBuffer();try{return await $i(l,r)}finally{wn()}}async function hc(o,r){ut(`loading ply file from URL... : ${o}`),Xn("downloading PLY...");try{Oi();const l=new URL(o,self.location.href).href;return await $i({url:l},r)}finally{wn()}}function Ni(o){return new Promise((r,l)=>{const x=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});x.onmessage=_=>{const b=_.data;if((b==null?void 0:b.type)==="error"){oc(`PLY worker error: ${b.message??"unknown error"}`),x.terminate(),l(new Error(b.message??"Worker error"));return}else if((b==null?void 0:b.type)==="download_progress"){const M=b.totalBytes,B=b.loadedBytes/(1024*1024),C=M?M/(1024*1024):void 0,A=(b.speedBps??0)/(1024*1024),N=M?Math.min(99,Math.floor(b.loadedBytes/M*100)):void 0,F=C?`total ${C.toFixed(1)} MB`:"total -- MB",L=C&&N!==void 0?`${B.toFixed(1)} MB downloaded (${N}%)`:`${B.toFixed(1)} MB downloaded`,W=`${A.toFixed(2)} MB/s`;Ct(`downloading PLY ...
${F}, ${L}
${W}`);return}else if((b==null?void 0:b.type)==="fetched"){ut(`💾 Fetched (${b.byteLength} bytes)`),vi("Download"),Ct("parsing PLY..."),Oi();return}else if((b==null?void 0:b.type)==="parse_progress"){const M=b.total??0,B=b.read??0,C=M>0?Math.floor(B/M*100):0;Ct(`parsing PLY ...
${B}/${M} surfels (${C}%)`);return}else(b==null?void 0:b.type)==="done"&&(x.terminate(),vi("Parse"),r(b))},x.onerror=_=>{x.terminate(),l(_)},o instanceof ArrayBuffer?(Ct("parsing PLY..."),x.postMessage({type:"start",plyBuffer:o},[o])):x.postMessage({type:"start_url",url:o.url})})}async function fc(o){var l,x,_,b,M,B,C,A,N,F,L,W;const r=await Ni(await o.arrayBuffer());return{num_points:r.num_points,K:r.K,feature_mode:r.feature_mode??0,sh_bias:r.sh_bias,kernel_type:r.kernel_type,surfel_data:new Float32Array(r.surfelBuffer),sv_params:new Float32Array(r.svParamsBuffer),bbox:r.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:r.centroid??[((((x=(l=r.bbox)==null?void 0:l.min)==null?void 0:x[0])??-1)+(((b=(_=r.bbox)==null?void 0:_.max)==null?void 0:b[0])??1))/2,((((B=(M=r.bbox)==null?void 0:M.min)==null?void 0:B[1])??-1)+(((A=(C=r.bbox)==null?void 0:C.max)==null?void 0:A[1])??1))/2,((((F=(N=r.bbox)==null?void 0:N.min)==null?void 0:F[2])??-1)+(((W=(L=r.bbox)==null?void 0:L.max)==null?void 0:W[2])??1))/2]}}async function $i(o,r){var oe,z,G,Y,V,te,$,le,he,de,se,ae;const l=await Ni(o),x=l.num_points,_=l.K,b=l.feature_mode??0,M=l.sh_bias,B=l.kernel_type,C=l.surfelBuffer,A=l.svParamsBuffer,N=b===2?"NASG":b===1?"SB":"SV";ut(`🪐 Total surfels: ${x}, mode=${N}, K=${_}, sh_bias=${M}, kernel_type=${B}`);const F=r.createBuffer({label:"surfel input buffer",size:Dn(x*pc),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});r.queue.writeBuffer(F,0,C);const L=A.byteLength>0?A.byteLength:16,W=r.createBuffer({label:`color_params buffer (${N})`,size:Dn(L),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return A.byteLength>0&&r.queue.writeBuffer(W,0,A),{num_points:x,K:_,feature_mode:b,sh_bias:M,kernel_type:B,surfel_buffer:F,surfel_data:new Float32Array(C),sv_params_buffer:W,bbox:l.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:l.centroid??[((((z=(oe=l.bbox)==null?void 0:oe.min)==null?void 0:z[0])??-1)+(((Y=(G=l.bbox)==null?void 0:G.max)==null?void 0:Y[0])??1))/2,((((te=(V=l.bbox)==null?void 0:V.min)==null?void 0:te[1])??-1)+(((le=($=l.bbox)==null?void 0:$.max)==null?void 0:le[1])??1))/2,((((de=(he=l.bbox)==null?void 0:he.min)==null?void 0:de[2])??-1)+(((ae=(se=l.bbox)==null?void 0:se.max)==null?void 0:ae[2])??1))/2]}}const vs="BITYMI01",_c=0,mc=1,vc=2,bc=3,gc=4,wc=5;function ar(o){const r=new Uint8Array(o),l=new TextDecoder().decode(r.subarray(0,8));if(l!==vs)throw new Error(`Not a BITYMI bundle (bad magic '${l}')`);const x=new DataView(o),_=x.getUint32(8,!0),b=12,M=20;let B=null,C=null,A=null;for(let N=0;N<_;N++){const F=b+N*M,L=x.getUint32(F+0,!0),W=Number(x.getBigUint64(F+4,!0)),oe=Number(x.getBigUint64(F+12,!0)),z=r.slice(W,W+oe).buffer;L===_c||L===mc||L===wc?B=z:L===vc?C=z:(L===bc||L===gc)&&(A=z)}if(B===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:B,camerasBuffer:C,atlasBuffer:A}}async function bs(o,r){var M;const l=await fetch(o);if(!l.ok)throw new Error(`fetch failed: ${l.status} ${l.statusText}`);const x=(()=>{const B=l.headers.get("content-length");return B&&parseInt(B,10)||void 0})(),_=(M=l.body)==null?void 0:M.getReader();let b;if(!_)b=await l.arrayBuffer(),r&&r(b.byteLength,x,0);else{const B=[];let C=0,A=performance.now(),N=0;for(;;){const{done:W,value:oe}=await _.read();if(W)break;B.push(oe),C+=oe.byteLength;const z=performance.now();if(z-A>=150&&r){const G=(C-N)/((z-A)/1e3);r(C,x,G),A=z,N=C}}const F=new Uint8Array(C);let L=0;for(const W of B)F.set(W,L),L+=W.byteLength;b=F.buffer,r&&r(C,x,0)}return b.byteLength>=8&&new TextDecoder().decode(new Uint8Array(b,0,8))===vs?{bundle:ar(b),rawPly:null}:{bundle:null,rawPly:b}}var xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,r){(function(l,x){x(r)})(xc,function(l){class x{constructor(e){const[t,s]=e.split("-"),p=t.split(".");this.major=parseInt(p[0],10),this.minor=parseInt(p[1],10),this.patch=parseInt(p[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class _{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class b{constructor(e){this.target=e}}class M extends b{constructor(e,t,s,p){super(e),this.value=t,this.presetKey=s,this.last=p??!0}}class B extends b{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class C extends b{constructor(e,t){super(e),this.expanded=t}}class A extends b{constructor(e,t){super(e),this.index=t}}function N(n){return n}function F(n){return n==null}function L(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function W(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class z{static alreadyDisposed(){return new z({type:"alreadydisposed"})}static notBindable(){return new z({type:"notbindable"})}static propertyNotFound(e){return new z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class G{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!G.isBindable(s))throw z.notBindable();if(!(e in s))throw z.propertyNotFound(e);s[e]=t}}class Y extends _{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new b(this))}),this}}class V{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(p=>p.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(p=>{p.handler(t)})}}const te="tp";function $(n){return(t,s)=>[te,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function le(n,e){return t=>e(n(t))}function he(n){return n.rawValue}function de(n,e){n.emitter.on("change",le(he,e)),e(n.rawValue)}function se(n,e,t){de(n.value(e),t)}function ae(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{ae(n,e,t)}}function ie(n,e){de(n,t=>{e.textContent=t??""})}const re=$("btn");class ge{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(re()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(re("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const p=e.createElement("div");p.classList.add(re("t")),ie(t.props.value("title"),p),this.buttonElement.appendChild(p)}}class Le{constructor(e,t){this.emitter=new V,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ge(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ke{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(p,T)=>p===T,this.emitter=new V,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},p=this.constraint_?this.constraint_.constrain(e):e,T=this.rawValue_;this.equals_(T,p)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=p,this.emitter.emit("change",{options:s,previousRawValue:T,rawValue:p,sender:this}))}}class X{constructor(e){this.emitter=new V,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},p=this.value_;p===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:p,rawValue:this.value_,sender:this}))}}function Z(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new X(n):new ke(n,e)}class j{constructor(e){this.emitter=new V,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,p)=>Object.assign(s,{[p]:Z(e[p])}),{})}static fromObject(e){const t=this.createCore(e);return new j(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function J(n,e){const s=Object.keys(e).reduce((p,T)=>{if(p===void 0)return;const O=e[T],ue=O(n[T]);return ue.succeeded?Object.assign(Object.assign({},p),{[T]:ue.value}):void 0},{});return s}function ve(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const p=e(s);if(!(!p.succeeded||p.value===void 0))return[...t,p.value]},[])}function ze(n){return n===null?!1:typeof n=="object"}function we(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Be(n){return{custom:e=>we(e)(n),boolean:we(e=>typeof e=="boolean"?e:void 0)(n),number:we(e=>typeof e=="number"?e:void 0)(n),string:we(e=>typeof e=="string"?e:void 0)(n),function:we(e=>typeof e=="function"?e:void 0)(n),constant:e=>we(t=>t===e?e:void 0)(n),raw:we(e=>e)(n),object:e=>we(t=>{if(ze(t))return J(t,e)})(n),array:e=>we(t=>{if(Array.isArray(t))return ve(t,e)})(n)}}const ne={optional:Be(!0),required:Be(!1)};function me(n,e){const t=ne.required.object(e)(n);return t.succeeded?t.value:void 0}function xe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function D(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class K{constructor(e){this.value_=e}static create(e){return[new K(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=$("");function a(n,e){return Te(n,g(void 0,e))}class u extends j{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=K.create(Z(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,p;const T=e??{};return new u(j.createCore({disabled:(t=T.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=T.hidden)!==null&&s!==void 0?s:!1,parent:(p=T.parent)!==null&&p!==void 0?p:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,a(e,"disabled")),se(this,"hidden",a(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const w=$(""),P={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(w(void 0,P[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(w(void 0,P[s]))})}),this.viewProps.handleDispose(()=>{D(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){xe({key:"parent",target:u.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function v(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function h(n){return n.ontouchstart!==void 0}function f(){return globalThis}function c(){return f().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const S={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function y(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=S[e],t}function U(n,e,t){n.insertBefore(e,n.children[t])}function H(n){n.parentElement&&n.parentElement.removeChild(n)}function Q(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function _e(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function pe(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ce=$("lbl");function ye(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(p=>n.createTextNode(p)).forEach((p,T)=>{T>0&&t.appendChild(n.createElement("br")),t.appendChild(p)}),t}class De{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ce()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ce("l")),se(t.props,"label",T=>{F(T)?this.element.classList.add(ce(void 0,"nol")):(this.element.classList.remove(ce(void 0,"nol")),_e(s),s.appendChild(ye(e,T)))}),this.element.appendChild(s),this.labelElement=s;const p=e.createElement("div");p.classList.add(ce("v")),this.element.appendChild(p),this.valueElement=p}}class Pe extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new De(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ce={id:"button",type:"blade",accept(n){const e=ne,t=me(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new Pe(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:new Le(n.document,{props:j.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof Pe)||!(n.controller.valueController instanceof Le)?null:new Y(n.controller)}};class Ie extends k{constructor(e){super(e),this.value=e.value}}function Me(){return new j({positions:Z([],{equals:L})})}class Ne extends j{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=j.createCore(t);return new Ne(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!F(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};se(this,"expanded",s),se(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Oe(n,e){let t=0;return v(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function je(n,e){e.style.height=n.styleHeight}function Qe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),F(n.get("expandedHeight"))){const t=Oe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ze extends _{constructor(e,t){super(e),this.rackApi_=t}}function He(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Xe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function lt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class et{constructor(e){this.emitter=new V,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const p=this.extract_(e);p&&(p.emitter.on("add",this.onSubListAdd_),p.emitter.on("remove",this.onSubListRemove_),p.allItems().forEach(T=>{this.cache_.add(T)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Je extends _{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new V,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends Pe{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends _{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new V,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new B(this,t,this.controller_.binding.target.presetKey)})}}class $e extends Pe{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function tt(n){return n instanceof bt?n.apiSet_:n instanceof Ze?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw z.shouldNeverHappen();return t}function Dt(n,e,t){if(!G.isBindable(n))throw z.notBindable();return new G(n,e,t)}class bt extends _{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new V,this.apiSet_=new et(tt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(p=>{this.setUpApi_(p)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const p=s??{},T=this.controller_.view.element.ownerDocument,O=this.pool_.createInput(T,Dt(e,t,p.presetKey),p),ue=new Je(O);return this.add(ue,p.index)}addMonitor(e,t,s){const p=s??{},T=this.controller_.view.element.ownerDocument,O=this.pool_.createMonitor(T,Dt(e,t),p),ue=new rt(O);return this.add(ue,p.index)}addFolder(e){return Xe(this,e)}addButton(e){return He(this,e)}addSeparator(e){return lt(this,e)}addTab(e){return st(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(p=>p.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),p=this.pool_.createBladeApi(s);return this.add(p,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=it(this.apiSet_,t),p=t.binding;this.emitter_.emit("change",{event:new M(s,p.target.read(),p.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof $e))throw z.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new B(t,s.target.read(),s.target.presetKey)})}}class gt extends Ze{constructor(e,t){super(e,new bt(e.rackController,t)),this.emitter_=new V,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new C(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}}class wt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class At{constructor(e,t){const s=$(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function zt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function mt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof $e&&s.binding===e)return s}return null}function Lt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Ut(n){return n instanceof Fe?n.rack:n instanceof wt?n.rackController.rack:null}function Ot(n){const e=Ut(n);return e?e.bcSet_:null}class Zt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new V,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new et(Ot),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),W(e,"parent")?e.parent=this:(e.parent_=this,xe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){W(e,"parent")?e.parent=null:(e.parent_=null,xe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof $e)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const p=Ut(s);if(p){const T=p.emitter;T.on("layout",this.onDescendantLayout_),T.on("inputchange",this.onDescendantInputChange_),T.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof $e)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const p=Ut(s);if(p){const T=p.emitter;T.off("layout",this.onDescendantLayout_),T.off("inputchange",this.onDescendantInputChange_),T.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(p=>!p.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(p=>{const T=[];p===t&&(T.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&T.push("veryfirst")),p===s&&(T.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&T.push("verylast")),p.blade.set("positions",T)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=zt(this.find(qe),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=mt(this.find($e),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Lt(this.find(Ie),e.sender);if(!t)throw z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Fe extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new At(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Zt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let p=this.rack.children.length-1;p>=0;p--)this.rack.children[p].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&U(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&H(e.bladeController.view.element)}}const xn=$("cnt");class zn{constructor(e,t){var s;this.className_=$((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),xn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),se(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const p=e.createElement("button");p.classList.add(this.className_("b")),se(t.props,"title",Ge=>{F(Ge)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const T=e.createElement("div");T.classList.add(this.className_("i")),this.element.appendChild(T);const O=e.createElement("div");O.classList.add(this.className_("t")),ie(t.props.value("title"),O),this.buttonElement.appendChild(O),this.titleElement=O;const ue=e.createElement("div");ue.classList.add(this.className_("m")),this.buttonElement.appendChild(ue);const Ue=t.containerElement;Ue.classList.add(this.className_("c")),this.element.appendChild(Ue),this.containerElement=Ue}}class Un extends wt{constructor(e,t){var s;const p=Ne.create((s=t.expanded)!==null&&s!==void 0?s:!0),T=new Fe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:T,view:new zn(e,{containerElement:T.view.element,foldable:p,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=p,Qe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Ss={id:"folder",type:"blade",accept(n){const e=ne,t=me(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Un(n.document,{blade:n.blade,expanded:n.params.expanded,props:j.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Un?new gt(n.controller,n.pool):null}};class Vt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new De(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class yn extends _{}const Ln=$("spr");class ts{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ln()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Ln("r")),this.element.appendChild(s)}}class In extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new ts(e,{viewProps:t.viewProps})}))}}const ns={id:"separator",type:"blade",accept(n){const t=me(n,{view:ne.required.constant("separator")});return t?{params:t}:null},controller(n){return new In(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof In?new yn(n.controller):null}},Nt=$("tbi");class ss{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Nt()),t.viewProps.bindClassModifiers(this.element),se(t.props,"selected",T=>{T?this.element.classList.add(Nt(void 0,"sel")):this.element.classList.remove(Nt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Nt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const p=e.createElement("div");p.classList.add(Nt("t")),ie(t.props.value("title"),p),this.buttonElement.appendChild(p),this.titleElement=p}}class Pn{constructor(e,t){this.emitter=new V,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ss(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ln{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Pn(e,{props:t.itemProps,viewProps:u.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Fe(e,{blade:Me(),viewProps:u.create()}),this.props=t.props,se(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class I{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class ee extends Ze{constructor(e,t){super(e,new bt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new V,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ln(t,{itemProps:j.fromObject({selected:!1,title:e.title}),props:j.fromObject({selected:!1})});this.controller_.add(s,e.index);const p=this.pageApiMap_.get(s);if(!p)throw z.shouldNeverHappen();return p}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(p=>p.controller_===e.contentController);if(!t)throw z.shouldNeverHappen();const s=new I(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const fe=-1;class be{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Z(!0),this.selectedIndex=Z(fe),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=fe,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,p)=>{s.rawValue=p===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Ae=$("tab");class Se{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ae(),xn()),t.viewProps.bindClassModifiers(this.element),de(t.empty,Te(this.element,Ae(void 0,"nop")));const s=e.createElement("div");s.classList.add(Ae("t")),this.element.appendChild(s),this.itemsElement=s;const p=e.createElement("div");p.classList.add(Ae("i")),this.element.appendChild(p);const T=t.contentsElement;T.classList.add(Ae("c")),this.element.appendChild(T),this.contentsElement=T}}class Ee extends wt{constructor(e,t){const s=new Fe(e,{blade:t.blade,viewProps:t.viewProps}),p=new be;super({blade:t.blade,rackController:s,view:new Se(e,{contentsElement:s.view.element,empty:p.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new et(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=p}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;U(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;H(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Re={id:"tab",type:"blade",accept(n){const e=ne,t=me(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Ee(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ln(n.document,{itemProps:j.fromObject({selected:!1,title:t.title}),props:j.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Ee?new ee(n.controller,n.pool):null}};function nt(n,e){const t=n.accept(e.params);if(!t)return null;const s=ne.optional.boolean(e.params.disabled).value,p=ne.optional.boolean(e.params.hidden).value;return n.controller({blade:Me(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:p}),viewProps:u.create({disabled:s,hidden:p})})}class ft{constructor(){this.disabled=!1,this.emitter=new V}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class St{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new V,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Tt{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new V,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Bt(n,e){for(;n.length<e;)n.push(void 0)}function It(n){const e=[];return Bt(e,n),Z(e)}function dt(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function cn(n,e){const t=[...dt(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Bt(t,n.length),t}class xt{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new V,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=cn(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class $t{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function yt(n,e){if(n instanceof e)return n;if(n instanceof $t){const t=n.constraints.reduce((s,p)=>s||(p instanceof e?p:null),null);if(t)return t}return null}class Xt{constructor(e){this.values=j.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Jt{constructor(e){this.values=j.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(p=>p.value===e).length>0?e:t[0].value}}class vt{constructor(e){this.values=j.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let p=e;return F(s)||(p=Math.max(p,s)),F(t)||(p=Math.min(p,t)),p}}class Gt{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Qt=$("lst");class qt{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Qt("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const p=e.createElement("div");p.classList.add(Qt("m")),p.appendChild(y(e,"dropdown")),this.element.appendChild(p),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,se(this.props_,"options",T=>{Q(this.selectElement),T.forEach(O=>{const ue=e.createElement("option");ue.textContent=O.text,this.selectElement.appendChild(ue)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Ft{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new qt(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const un=$("pop");class Es{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(un()),t.viewProps.bindClassModifiers(this.element),de(t.shows,Te(this.element,un(void 0,"v")))}}class Sn{constructor(e,t){this.shows=Z(!1),this.viewProps=t.viewProps,this.view=new Es(e,{shows:this.shows,viewProps:this.viewProps})}}const cr=$("txt");class so{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(cr()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(cr("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class rs{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new so(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,p=this.parser_(s);F(p)||(this.value.rawValue=p),this.view.refresh()}}function ro(n){return String(n)}function ur(n){return n==="false"?!1:!!n}function dr(n){return ro(n)}class io{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const oo={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class ao{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=oo[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const lo={"+":n=>n,"-":n=>-n,"~":n=>~n};class co{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=lo[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ks(n){return(e,t)=>{for(let s=0;s<n.length;s++){const p=n[s](e,t);if(p!=="")return p}return""}}function Gn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function uo(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Fn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function po(n,e){const t=Fn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const p=Fn(n,e);return p===""?"":s+p}function Cs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=po(n,e);return s===""?"":t+s}function pr(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=uo(n,e);return e+=s.length,s===""?"":s+Fn(n,e)}function ho(n,e){const t=pr(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const p=Fn(n,e);return e+=p.length,t+s+p+Cs(n,e)}function fo(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Fn(n,e);return e+=s.length,s===""?"":t+s+Cs(n,e)}function _o(n,e){const t=pr(n,e);return e+=t.length,t===""?"":t+Cs(n,e)}const mo=ks([ho,fo,_o]);function vo(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function bo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=vo(n,e);return s===""?"":t+s}function go(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function wo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=go(n,e);return s===""?"":t+s}function xo(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function yo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=xo(n,e);return s===""?"":t+s}const Po=ks([bo,wo,yo]),So=ks([Po,mo]);function Eo(n,e){const t=So(n,e);return e+=t.length,t===""?null:{evaluable:new io(t),cursor:e}}function ko(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=fr(n,e);if(!s)return null;e=s.cursor,e+=Gn(n,e).length;const p=n.substr(e,1);return e+=p.length,p!==")"?null:{evaluable:s.evaluable,cursor:e}}function Co(n,e){var t;return(t=Eo(n,e))!==null&&t!==void 0?t:ko(n,e)}function hr(n,e){const t=Co(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const p=hr(n,e);return p?(e=p.cursor,{cursor:e,evaluable:new co(s,p.evaluable)}):null}function To(n,e,t){t+=Gn(e,t).length;const s=n.filter(p=>e.startsWith(p,t))[0];return s?(t+=s.length,t+=Gn(e,t).length,{cursor:t,operator:s}):null}function Bo(n,e){return(t,s)=>{const p=n(t,s);if(!p)return null;s=p.cursor;let T=p.evaluable;for(;;){const O=To(e,t,s);if(!O)break;s=O.cursor;const ue=n(t,s);if(!ue)return null;s=ue.cursor,T=new ao(O.operator,T,ue.evaluable)}return T?{cursor:s,evaluable:T}:null}}const Ao=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Bo(n,e),hr);function fr(n,e){return e+=Gn(n,e).length,Ao(n,e)}function Mo(n){const e=fr(n,0);return!e||e.cursor+Gn(n,e.cursor).length!==n.length?null:e.evaluable}function Wt(n){var e;const t=Mo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function _r(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Wt(n);if(!F(e))return e}return 0}function Ro(n){return String(n)}function _t(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Do=_t(0);function is(n){return Do(n)+"%"}function mr(n){return String(n)}function Ts(n){return n}function On({primary:n,secondary:e,forward:t,backward:s}){let p=!1;function T(O){p||(p=!0,O(),p=!1)}n.emitter.on("change",O=>{T(()=>{e.setRawValue(t(n,e),O.options)})}),e.emitter.on("change",O=>{T(()=>{n.setRawValue(s(n,e),O.options)}),T(()=>{e.setRawValue(t(n,e),O.options)})}),T(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Et(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Vn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Kt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function zo(n){return n==="ArrowUp"||n==="ArrowDown"}function vr(n){return zo(n)||n==="ArrowLeft"||n==="ArrowRight"}function Bs(n,e){var t,s;const p=e.ownerDocument.defaultView,T=e.getBoundingClientRect();return{x:n.pageX-(((t=p&&p.scrollX)!==null&&t!==void 0?t:0)+T.left),y:n.pageY-(((s=p&&p.scrollY)!==null&&s!==void 0?s:0)+T.top)}}class dn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new V,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Bs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Bs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Bs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,p=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-p.left,y:s.clientY-p.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function ot(n,e,t,s,p){const T=(n-e)/(t-e);return s+T*(p-s)}function br(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function pt(n,e,t){return Math.min(Math.max(n,e),t)}function gr(n,e){return(n%e+e)%e}const Mt=$("txt");class Uo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Mt(),Mt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Mt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Mt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Mt()),this.inputElement.classList.add(Mt("i"));const p=e.createElement("div");p.classList.add(Mt("k")),this.element.appendChild(p),this.knobElement=p;const T=e.createElementNS(E,"svg");T.classList.add(Mt("g")),this.knobElement.appendChild(T);const O=e.createElementNS(E,"path");O.classList.add(Mt("gb")),T.appendChild(O),this.guideBodyElem_=O;const ue=e.createElementNS(E,"path");ue.classList.add(Mt("gh")),T.appendChild(ue),this.guideHeadElem_=ue;const Ue=e.createElement("div");Ue.classList.add($("tt")()),this.knobElement.appendChild(Ue),this.tooltipElem_=Ue,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Mt(void 0,"drg"));return}this.element.classList.add(Mt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),p=pt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+p},0 L${s},4 L${s+p},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const T=this.props_.get("formatter");this.tooltipElem_.textContent=T(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Nn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=Z(null),this.view=new Uo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const p=new dn(this.view.knobElement);p.emitter.on("down",this.onPointerDown_),p.emitter.on("move",this.onPointerMove_),p.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const p=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),T=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let O=e;return p!==void 0&&(O=Math.max(O,p)),T!==void 0&&(O=Math.min(O,T)),O}onInputChange_(e){const s=e.currentTarget.value,p=this.parser_(s);F(p)||(this.value.rawValue=this.constrainValue_(p)),this.view.refresh()}onInputKeyDown_(e){const t=Et(this.baseStep_,Vn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Et(this.baseStep_,Vn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const As=$("sld");class Lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(As()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(As("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const p=e.createElement("div");p.classList.add(As("k")),this.trackElement.appendChild(p),this.knobElement=p,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=pt(ot(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Io{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new Lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new dn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(ot(pt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Et(this.baseStep_,Kt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Et(this.baseStep_,Kt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ms=$("sldtxt");class Go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ms());const s=e.createElement("div");s.classList.add(Ms("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const p=e.createElement("div");p.classList.add(Ms("t")),this.textView_=t.textView,p.appendChild(this.textView_.element),this.element.appendChild(p)}}class Rs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Io(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Nn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Go(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function $n(n,e){n.write(e)}function os(n){const e=ne;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function wr(n){if(n==="inline"||n==="popup")return n}function en(n){const e=ne;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function xr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Ds(n){return F(n)?null:new Jt(xr(n))}function Fo(n){const e=n?yt(n,Gt):null;return e?e.step:null}function as(n,e){const t=n&&yt(n,Gt);return t?br(t.step):Math.max(br(e),2)}function En(n){const e=Fo(n);return e??1}function kn(n,e){var t;const s=n&&yt(n,Gt),p=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return p===0?.1:Math.pow(10,Math.floor(Math.log10(p))-1)}const ls=$("ckb");class Oo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(ls()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(ls("l")),this.element.appendChild(s);const p=e.createElement("input");p.classList.add(ls("i")),p.type="checkbox",s.appendChild(p),this.inputElement=p,t.viewProps.bindDisabled(this.inputElement);const T=e.createElement("div");T.classList.add(ls("w")),s.appendChild(T);const O=y(e,"check");T.appendChild(O),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Vo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Oo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function No(n){const e=[],t=Ds(n.options);return t&&e.push(t),new $t(e)}const $o={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=me(e,{options:ne.optional.custom(os)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ur,constraint:n=>No(n.params),writer:n=>$n},controller:n=>{const e=n.document,t=n.value,s=n.constraint,p=s&&yt(s,Jt);return p?new Ft(e,{props:new j({options:p.values.value("options")}),value:t,viewProps:n.viewProps}):new Vo(e,{value:t,viewProps:n.viewProps})}},pn=$("col");class qo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pn()),t.foldable.bindExpandedClass(this.element,pn(void 0,"expanded")),se(t.foldable,"completed",Te(this.element,pn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(pn("h")),this.element.appendChild(s);const p=e.createElement("div");p.classList.add(pn("s")),s.appendChild(p),this.swatchElement=p;const T=e.createElement("div");if(T.classList.add(pn("t")),s.appendChild(T),this.textElement=T,t.pickerLayout==="inline"){const O=e.createElement("div");O.classList.add(pn("p")),this.element.appendChild(O),this.pickerElement=O}else this.pickerElement=null}}function Wo(n,e,t){const s=pt(n/255,0,1),p=pt(e/255,0,1),T=pt(t/255,0,1),O=Math.max(s,p,T),ue=Math.min(s,p,T),Ue=O-ue;let Ge=0,Ke=0;const Ye=(ue+O)/2;return Ue!==0&&(Ke=Ue/(1-Math.abs(O+ue-1)),s===O?Ge=(p-T)/Ue:p===O?Ge=2+(T-s)/Ue:Ge=4+(s-p)/Ue,Ge=Ge/6+(Ge<0?1:0)),[Ge*360,Ke*100,Ye*100]}function Ko(n,e,t){const s=(n%360+360)%360,p=pt(e/100,0,1),T=pt(t/100,0,1),O=(1-Math.abs(2*T-1))*p,ue=O*(1-Math.abs(s/60%2-1)),Ue=T-O/2;let Ge,Ke,Ye;return s>=0&&s<60?[Ge,Ke,Ye]=[O,ue,0]:s>=60&&s<120?[Ge,Ke,Ye]=[ue,O,0]:s>=120&&s<180?[Ge,Ke,Ye]=[0,O,ue]:s>=180&&s<240?[Ge,Ke,Ye]=[0,ue,O]:s>=240&&s<300?[Ge,Ke,Ye]=[ue,0,O]:[Ge,Ke,Ye]=[O,0,ue],[(Ge+Ue)*255,(Ke+Ue)*255,(Ye+Ue)*255]}function jo(n,e,t){const s=pt(n/255,0,1),p=pt(e/255,0,1),T=pt(t/255,0,1),O=Math.max(s,p,T),ue=Math.min(s,p,T),Ue=O-ue;let Ge;Ue===0?Ge=0:O===s?Ge=60*(((p-T)/Ue%6+6)%6):O===p?Ge=60*((T-s)/Ue+2):Ge=60*((s-p)/Ue+4);const Ke=O===0?0:Ue/O,Ye=O;return[Ge,Ke*100,Ye*100]}function yr(n,e,t){const s=gr(n,360),p=pt(e/100,0,1),T=pt(t/100,0,1),O=T*p,ue=O*(1-Math.abs(s/60%2-1)),Ue=T-O;let Ge,Ke,Ye;return s>=0&&s<60?[Ge,Ke,Ye]=[O,ue,0]:s>=60&&s<120?[Ge,Ke,Ye]=[ue,O,0]:s>=120&&s<180?[Ge,Ke,Ye]=[0,O,ue]:s>=180&&s<240?[Ge,Ke,Ye]=[0,ue,O]:s>=240&&s<300?[Ge,Ke,Ye]=[ue,0,O]:[Ge,Ke,Ye]=[O,0,ue],[(Ge+Ue)*255,(Ke+Ue)*255,(Ye+Ue)*255]}function Ho(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function hn(n){return[n[0],n[1],n[2]]}function Pr(n,e){return[n[0],n[1],n[2],e]}const Zo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Ho,rgb:Ko},hsv:{hsl:Yo,hsv:(n,e,t)=>[n,e,t],rgb:yr},rgb:{hsl:Wo,hsv:jo,rgb:(n,e,t)=>[n,e,t]}};function cs(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Xo(n,e){return n===e?e:gr(n,e)}function Jo(n,e,t){var s;const p=cs(e,t);return[e==="rgb"?pt(n[0],0,p[0]):Xo(n[0],p[0]),pt(n[1],0,p[1]),pt(n[2],0,p[2]),pt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Sr(n,e,t,s){const p=cs(e,t),T=cs(e,s);return n.map((O,ue)=>O/p[ue]*T[ue])}function Qo(n,e,t){const s=Sr(n,e.mode,e.type,"int"),p=Zo[e.mode][t.mode](...s);return Sr(p,t.mode,"int",t.type)}function us(n,e){return typeof n!="object"||F(n)?!1:e in n&&typeof n[e]=="number"}class We{static black(e="int"){return new We([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new We(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return us(e,"r")&&us(e,"g")&&us(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&us(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,p=t.comps_;for(let T=0;T<s.length;T++)if(s[T]!==p[T])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Jo(e,t,s)}getComponents(e,t="int"){return Pr(Qo(hn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const tn=$("colp");class ea{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(tn("hsv"));const p=e.createElement("div");p.classList.add(tn("sv")),this.svPaletteView_=t.svPaletteView,p.appendChild(this.svPaletteView_.element),s.appendChild(p);const T=e.createElement("div");T.classList.add(tn("h")),this.hPaletteView_=t.hPaletteView,T.appendChild(this.hPaletteView_.element),s.appendChild(T),this.element.appendChild(s);const O=e.createElement("div");if(O.classList.add(tn("rgb")),this.textView_=t.textView,O.appendChild(this.textView_.element),this.element.appendChild(O),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ue=e.createElement("div");ue.classList.add(tn("a"));const Ue=e.createElement("div");Ue.classList.add(tn("ap")),Ue.appendChild(this.alphaViews_.palette.element),ue.appendChild(Ue);const Ge=e.createElement("div");Ge.classList.add(tn("at")),Ge.appendChild(this.alphaViews_.text.element),ue.appendChild(Ge),this.element.appendChild(ue)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function ta(n){return n==="int"?"int":n==="float"?"float":void 0}function zs(n){const e=ne;return me(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(ta)}),expanded:e.optional.boolean,picker:e.optional.custom(wr)})}function fn(n){return n?.1:1}function _n(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function na(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Rt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const sa={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Er(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return sa[s](t)}function kr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Rt(e[1],255),Rt(e[2],255),Rt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Cr(n){return e=>{const t=kr(e);return t?new We(t,"rgb",n):null}}function Tr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Rt(e[1],255),Rt(e[2],255),Rt(e[3],255),Rt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Br(n){return e=>{const t=Tr(e);return t?new We(t,"rgb",n):null}}function Ar(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Er(e[1]),Rt(e[2],100),Rt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Mr(n){return e=>{const t=Ar(e);return t?new We(t,"hsl",n):null}}function Rr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Er(e[1]),Rt(e[2],100),Rt(e[3],100),Rt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Dr(n){return e=>{const t=Rr(e);return t?new We(t,"hsl",n):null}}function zr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function ra(n){const e=zr(n);return e?new We(e,"rgb","int"):null}function Ur(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),ot(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),ot(parseInt(t[4],16),0,255,0,1)]:null}function ia(n){const e=Ur(n);return e?new We(e,"rgb","int"):null}function Lr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ir(n){return e=>{const t=Lr(e);return t?new We(t,"rgb",n):null}}function Gr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Fr(n){return e=>{const t=Gr(e);return t?new We(t,"rgb",n):null}}const oa=[{parser:zr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Ur,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:kr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Tr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Ar,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Rr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Lr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Gr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function aa(n){return oa.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Us(n,e="int"){const t=aa(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Or={int:[ra,ia,Cr("int"),Br("int"),Mr("int"),Dr("int"),Ir("int"),Fr("int")],float:[Cr("float"),Br("float"),Mr("float"),Dr("float"),Ir("float"),Fr("float")]};function la(n){const e=Or[n];return t=>{if(typeof t!="string")return We.black(n);const s=e.reduce((p,T)=>p||T(t),null);return s??We.black(n)}}function Ls(n){const e=Or[n];return t=>e.reduce((s,p)=>s||p(t),null)}function Vr(n){const e=pt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Nr(n,e="#"){const t=hn(n.getComponents("rgb")).map(Vr).join("");return`${e}${t}`}function Is(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Vr).join("");return`${e}${s}`}function $r(n,e){const t=_t(e==="float"?2:0);return`rgb(${hn(n.getComponents("rgb",e)).map(p=>t(p)).join(", ")})`}function ca(n){return e=>$r(e,n)}function ds(n,e){const t=_t(2),s=_t(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((T,O)=>(O===3?t:s)(T)).join(", ")})`}function ua(n){return e=>ds(e,n)}function da(n){const e=[_t(0),is,is];return`hsl(${hn(n.getComponents("hsl")).map((s,p)=>e[p](s)).join(", ")})`}function pa(n){const e=[_t(0),is,is,_t(2)];return`hsla(${n.getComponents("hsl").map((s,p)=>e[p](s)).join(", ")})`}function qr(n,e){const t=_t(e==="float"?2:0),s=["r","g","b"];return`{${hn(n.getComponents("rgb",e)).map((T,O)=>`${s[O]}: ${t(T)}`).join(", ")}}`}function ha(n){return e=>qr(e,n)}function Wr(n,e){const t=_t(2),s=_t(e==="float"?2:0),p=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((O,ue)=>{const Ue=ue===3?t:s;return`${p[ue]}: ${Ue(O)}`}).join(", ")}}`}function fa(n){return e=>Wr(e,n)}const _a=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Nr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Is},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:da},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:pa},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:ca(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:ua(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:ha(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:fa(e)}],[])];function Gs(n){return _a.reduce((e,t)=>e||(na(t.format,n)?t.stringifier:null),null)}const qn=$("apl");class ma{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(qn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(qn("b")),this.element.appendChild(s);const p=e.createElement("div");p.classList.add(qn("c")),s.appendChild(p),this.colorElem_=p;const T=e.createElement("div");T.classList.add(qn("m")),this.element.appendChild(T),this.markerElem_=T;const O=e.createElement("div");O.classList.add(qn("p")),this.markerElem_.appendChild(O),this.previewElem_=O,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new We([t[0],t[1],t[2],0],"rgb"),p=new We([t[0],t[1],t[2],255],"rgb"),T=["to right",ds(s),ds(p)];this.colorElem_.style.background=`linear-gradient(${T.join(",")})`,this.previewElem_.style.backgroundColor=ds(e);const O=ot(t[3],0,1,0,100);this.markerElem_.style.left=`${O}%`}onValueChange_(){this.update_()}}class va{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ma(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new dn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,p=this.value.rawValue,[T,O,ue]=p.getComponents("hsv");this.value.setRawValue(new We([T,O,ue,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Et(fn(!0),Kt(e));if(t===0)return;const s=this.value.rawValue,[p,T,O,ue]=s.getComponents("hsv");this.value.setRawValue(new We([p,T,O,ue+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Et(fn(!0),Kt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Cn=$("coltxt");function ba(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,p)=>{const T=n.createElement("option");return T.textContent=p.text,T.value=p.value,s.appendChild(T),s},n.createDocumentFragment())),e}class ga{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Cn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Cn("m")),this.modeElem_=ba(e),this.modeElem_.classList.add(Cn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const p=e.createElement("div");p.classList.add(Cn("mm")),p.appendChild(y(e,"dropdown")),s.appendChild(p),this.element.appendChild(s);const T=e.createElement("div");T.classList.add(Cn("w")),this.element.appendChild(T),this.textsElem_=T,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,O=>{this.modeElem_.value=O})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){Q(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Cn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function wa(n){return _t(n==="float"?2:0)}function xa(n,e,t){const s=cs(n,e)[t];return new Xt({min:0,max:s})}function Fs(n,e,t){return new Nn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:fn(!1),parser:e.parser,props:j.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:wa(e.colorType)}),value:Z(0,{constraint:xa(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ya{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=Z(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new ga(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Fs(e,t,0),Fs(e,t,1),Fs(e,t,2)];return s.forEach((p,T)=>{On({primary:this.value,secondary:p.value,forward:O=>O.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[T],backward:(O,ue)=>{const Ue=this.colorMode.rawValue,Ge=O.rawValue.getComponents(Ue,this.colorType_);return Ge[T]=ue.rawValue,new We(Pr(hn(Ge),Ge[3]),Ue,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Os=$("hpl");class Pa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Os()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Os("c")),this.element.appendChild(s);const p=e.createElement("div");p.classList.add(Os("m")),this.element.appendChild(p),this.markerElem_=p,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=$r(new We([t,100,100],"hsv"));const s=ot(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Sa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Pa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new dn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=ot(pt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),p=this.value.rawValue,[,T,O,ue]=p.getComponents("hsv");this.value.setRawValue(new We([s,T,O,ue],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Et(fn(!1),Kt(e));if(t===0)return;const s=this.value.rawValue,[p,T,O,ue]=s.getComponents("hsv");this.value.setRawValue(new We([p+t,T,O,ue],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Et(fn(!1),Kt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Vs=$("svp"),Kr=64;class Ea{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Kr,s.width=Kr,s.classList.add(Vs("c")),this.element.appendChild(s),this.canvasElement=s;const p=e.createElement("div");p.classList.add(Vs("m")),this.element.appendChild(p),this.markerElem_=p,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),p=this.canvasElement.width,T=this.canvasElement.height,O=e.getImageData(0,0,p,T),ue=O.data;for(let Ke=0;Ke<T;Ke++)for(let Ye=0;Ye<p;Ye++){const mn=ot(Ye,0,p,0,100),Kn=ot(Ke,0,T,100,0),jn=yr(s[0],mn,Kn),ps=(Ke*p+Ye)*4;ue[ps]=jn[0],ue[ps+1]=jn[1],ue[ps+2]=jn[2],ue[ps+3]=255}e.putImageData(O,0,0);const Ue=ot(s[1],0,100,0,100);this.markerElem_.style.left=`${Ue}%`;const Ge=ot(s[2],0,100,100,0);this.markerElem_.style.top=`${Ge}%`}onValueChange_(){this.update_()}}class ka{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ea(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new dn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=ot(e.point.x,0,e.bounds.width,0,100),p=ot(e.point.y,0,e.bounds.height,100,0),[T,,,O]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new We([T,s,p,O],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){vr(e.key)&&e.preventDefault();const[t,s,p,T]=this.value.rawValue.getComponents("hsv"),O=fn(!1),ue=Et(O,Kt(e)),Ue=Et(O,Vn(e));ue===0&&Ue===0||this.value.setRawValue(new We([t,s+ue,p+Ue,T],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=fn(!1),s=Et(t,Kt(e)),p=Et(t,Vn(e));s===0&&p===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ca{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Sa(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ka(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new va(e,{value:this.value,viewProps:this.viewProps}),text:new Nn(e,{parser:Wt,baseStep:.1,props:j.fromObject({draggingScale:.01,formatter:_t(2)}),value:Z(0,{constraint:new Xt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&On({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,p)=>{const T=s.rawValue.getComponents();return T[3]=p.rawValue,new We(T,s.rawValue.mode)}}),this.textC_=new ya(e,{colorType:t.colorType,parser:Wt,value:this.value,viewProps:this.viewProps}),this.view=new ea(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ns=$("colsw");class Ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ns()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ns("sw")),this.element.appendChild(s),this.swatchElem_=s;const p=e.createElement("button");p.classList.add(Ns("b")),t.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Is(e)}onValueChange_(){this.update_()}}class Ba{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ta(e,{value:this.value,viewProps:this.viewProps})}}class $s{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ne.create(t.expanded),this.swatchC_=new Ba(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new rs(e,{parser:t.parser,props:j.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new qo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Sn(e,{viewProps:this.viewProps}):null;const p=new Ca(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});p.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=p,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(p.view.element),On({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,O)=>O.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=pe(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Aa(n,e){return We.isColorObject(n)?We.fromObject(n,e):We.black(e)}function Ma(n){return hn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Ra(n){return n.getComponents("rgb").reduce((e,t,s)=>{const p=Math.floor(s===3?t*255:t)&255;return e<<8|p},0)>>>0}function Da(n){return new We([n>>16&255,n>>8&255,n&255],"rgb")}function za(n){return new We([n>>24&255,n>>16&255,n>>8&255,ot(n&255,0,255,0,1)],"rgb")}function Ua(n){return typeof n!="number"?We.black():Da(n)}function La(n){return typeof n!="number"?We.black():za(n)}function Ia(n){const e=Gs(n);return e?(t,s)=>{$n(t,e(s))}:null}function Ga(n){const e=n?Ra:Ma;return(t,s)=>{$n(t,e(s))}}function Fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function Oa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Va(n,e){return(t,s)=>{n?Fa(t,s,e):Oa(t,s,e)}}function qs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Na(n){return n?e=>Is(e,"0x"):e=>Nr(e,"0x")}function $a(n){return"color"in n||"view"in n&&n.view==="color"}const qa={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!$a(e))return null;const t=zs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>qs(n.params)?La:Ua,equals:We.equals,writer:n=>Ga(qs(n.params))},controller:n=>{const e=qs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new $s(n.document,{colorType:"int",expanded:t??!1,formatter:Na(e),parser:Ls("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Wa(n){return We.isRgbaColorObject(n)}function Ka(n){return e=>Aa(e,n)}function ja(n,e){return t=>n?Wr(t,e):qr(t,e)}const Ha={id:"input-color-object",type:"input",accept:(n,e)=>{if(!We.isColorObject(n))return null;const t=zs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ka(_n(n.params)),equals:We.equals,writer:n=>Va(Wa(n.initialValue),_n(n.params))},controller:n=>{var e;const t=We.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,p="picker"in n.params?n.params.picker:void 0,T=(e=_n(n.params))!==null&&e!==void 0?e:"int";return new $s(n.document,{colorType:T,expanded:s??!1,formatter:ja(t,T),parser:Ls(T),pickerLayout:p??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Us(n,_n(e));if(!t||!Gs(t))return null;const p=zs(e);return p?{initialValue:n,params:p}:null},binding:{reader:n=>{var e;return la((e=_n(n.params))!==null&&e!==void 0?e:"int")},equals:We.equals,writer:n=>{const e=Us(n.initialValue,_n(n.params));if(!e)throw z.shouldNeverHappen();const t=Ia(e);if(!t)throw z.notBindable();return t}},controller:n=>{const e=Us(n.initialValue,_n(n.params));if(!e)throw z.shouldNeverHappen();const t=Gs(e);if(!t)throw z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,p="picker"in n.params?n.params.picker:void 0;return new $s(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Ls(e.type),pickerLayout:p??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class nn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,p)=>{var T,O;return(O=(T=this.components[p])===null||T===void 0?void 0:T.constrain(s))!==null&&O!==void 0?O:s});return this.asm_.fromComponents(t)}}const jr=$("pndtxt");class Za{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(jr()),this.textViews.forEach(s=>{const p=e.createElement("div");p.classList.add(jr("a")),p.appendChild(s.element),this.element.appendChild(p)})}}function Xa(n,e,t){return new Nn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:Z(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ws{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,p)=>Xa(e,t,p)),this.acs_.forEach((s,p)=>{On({primary:this.value,secondary:s.value,forward:T=>t.assembly.toComponents(T.rawValue)[p],backward:(T,O)=>{const ue=t.assembly.toComponents(T.rawValue);return ue[p]=O.rawValue,t.assembly.fromComponents(ue)}})}),this.view=new Za(e,{textViews:this.acs_.map(s=>s.view)})}}function Hr(n,e){return"step"in n&&!F(n.step)?new Gt(n.step,e):null}function Yr(n){return!F(n.max)&&!F(n.min)?new Xt({max:n.max,min:n.min}):!F(n.max)||!F(n.min)?new vt({max:n.max,min:n.min}):null}function Ja(n){const e=yt(n,Xt);if(e)return[e.values.get("min"),e.values.get("max")];const t=yt(n,vt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Qa(n,e){const t=[],s=Hr(n,e);s&&t.push(s);const p=Yr(n);p&&t.push(p);const T=Ds(n.options);return T&&t.push(T),new $t(t)}const el={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ne,s=me(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(os),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>_r,constraint:n=>Qa(n.params,n.initialValue),writer:n=>$n},controller:n=>{var e;const t=n.value,s=n.constraint,p=s&&yt(s,Jt);if(p)return new Ft(n.document,{props:new j({options:p.values.value("options")}),value:t,viewProps:n.viewProps});const T=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:_t(as(s,t.rawValue)),O=s&&yt(s,Xt);return O?new Rs(n.document,{baseStep:En(s),parser:Wt,sliderProps:new j({maxValue:O.values.value("max"),minValue:O.values.value("min")}),textProps:j.fromObject({draggingScale:kn(s,t.rawValue),formatter:T}),value:t,viewProps:n.viewProps}):new Nn(n.document,{baseStep:En(s),parser:Wt,props:j.fromObject({draggingScale:kn(s,t.rawValue),formatter:T}),value:t,viewProps:n.viewProps})}};class sn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Zr={toComponents:n=>n.getComponents(),fromComponents:n=>new sn(...n)},Tn=$("p2d");class tl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,Te(this.element,Tn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Tn("h")),this.element.appendChild(s);const p=e.createElement("button");p.classList.add(Tn("b")),p.appendChild(y(e,"p2dpad")),t.viewProps.bindDisabled(p),s.appendChild(p),this.buttonElement=p;const T=e.createElement("div");if(T.classList.add(Tn("t")),s.appendChild(T),this.textElement=T,t.pickerLayout==="inline"){const O=e.createElement("div");O.classList.add(Tn("p")),this.element.appendChild(O),this.pickerElement=O}else this.pickerElement=null}}const rn=$("p2dp");class nl{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(rn()),t.layout==="popup"&&this.element.classList.add(rn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(rn("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const p=e.createElementNS(E,"svg");p.classList.add(rn("g")),this.padElement.appendChild(p),this.svgElem_=p;const T=e.createElementNS(E,"line");T.classList.add(rn("ax")),T.setAttributeNS(null,"x1","0"),T.setAttributeNS(null,"y1","50%"),T.setAttributeNS(null,"x2","100%"),T.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(T);const O=e.createElementNS(E,"line");O.classList.add(rn("ax")),O.setAttributeNS(null,"x1","50%"),O.setAttributeNS(null,"y1","0"),O.setAttributeNS(null,"x2","50%"),O.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(O);const ue=e.createElementNS(E,"line");ue.classList.add(rn("l")),ue.setAttributeNS(null,"x1","50%"),ue.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ue),this.lineElem_=ue;const Ue=e.createElement("div");Ue.classList.add(rn("m")),this.padElement.appendChild(Ue),this.markerElem_=Ue,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,p=ot(e,-s,+s,0,100),T=ot(t,-s,+s,0,100),O=this.invertsY_?100-T:T;this.lineElem_.setAttributeNS(null,"x2",`${p}%`),this.lineElem_.setAttributeNS(null,"y2",`${O}%`),this.markerElem_.style.left=`${p}%`,this.markerElem_.style.top=`${O}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Xr(n,e,t){return[Et(e[0],Kt(n)),Et(e[1],Vn(n))*(t?1:-1)]}class sl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new nl(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new dn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,p=ot(e.point.x,0,e.bounds.width,-s,+s),T=ot(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new sn(p,T),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){vr(e.key)&&e.preventDefault();const[t,s]=Xr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new sn(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Xr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class rl{constructor(e,t){var s,p;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ne.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Sn(e,{viewProps:this.viewProps}):null;const T=new sl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});T.view.allFocusableElements.forEach(O=>{O.addEventListener("blur",this.onPopupChildBlur_),O.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=T,this.textC_=new Ws(e,{assembly:Zr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new tl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(p=this.view.buttonElement)===null||p===void 0||p.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),On({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:O=>O.rawValue,backward:(O,ue)=>ue.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=pe(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Bn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,p=e.z;return!(typeof t!="number"||typeof s!="number"||typeof p!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Jr={toComponents:n=>n.getComponents(),fromComponents:n=>new Bn(...n)};function il(n){return Bn.isObject(n)?new Bn(n.x,n.y,n.z):new Bn}function ol(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function al(n,e){return new nn({assembly:Jr,components:[jt("x"in n?n.x:void 0,e.x),jt("y"in n?n.y:void 0,e.y),jt("z"in n?n.z:void 0,e.z)]})}function Ks(n,e){return{baseStep:En(e),constraint:e,textProps:j.fromObject({draggingScale:kn(e,n),formatter:_t(as(e,n))})}}const ll={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Bn.isObject(n))return null;const t=ne,s=me(e,{x:t.optional.custom(en),y:t.optional.custom(en),z:t.optional.custom(en)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>al(n.params,n.initialValue),equals:Bn.equals,writer:n=>ol},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof nn))throw z.shouldNeverHappen();return new Ws(n.document,{assembly:Jr,axes:[Ks(e.rawValue.x,t.components[0]),Ks(e.rawValue.y,t.components[1]),Ks(e.rawValue.z,t.components[2])],parser:Wt,value:e,viewProps:n.viewProps})}};class An{constructor(e=0,t=0,s=0,p=0){this.x=e,this.y=t,this.z=s,this.w=p}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,p=e.z,T=e.w;return!(typeof t!="number"||typeof s!="number"||typeof p!="number"||typeof T!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Qr={toComponents:n=>n.getComponents(),fromComponents:n=>new An(...n)};function cl(n){return An.isObject(n)?new An(n.x,n.y,n.z,n.w):new An}function ul(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function dl(n,e){return new nn({assembly:Qr,components:[jt("x"in n?n.x:void 0,e.x),jt("y"in n?n.y:void 0,e.y),jt("z"in n?n.z:void 0,e.z),jt("w"in n?n.w:void 0,e.w)]})}function pl(n,e){return{baseStep:En(e),constraint:e,textProps:j.fromObject({draggingScale:kn(e,n),formatter:_t(as(e,n))})}}const hl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!An.isObject(n))return null;const t=ne,s=me(e,{x:t.optional.custom(en),y:t.optional.custom(en),z:t.optional.custom(en),w:t.optional.custom(en)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cl,constraint:n=>dl(n.params,n.initialValue),equals:An.equals,writer:n=>ul},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof nn))throw z.shouldNeverHappen();return new Ws(n.document,{assembly:Qr,axes:e.rawValue.getComponents().map((s,p)=>pl(s,t.components[p])),parser:Wt,value:e,viewProps:n.viewProps})}};function fl(n){const e=[],t=Ds(n.options);return t&&e.push(t),new $t(e)}const _l={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=me(e,{options:ne.optional.custom(os)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>mr,constraint:n=>fl(n.params),writer:n=>$n},controller:n=>{const e=n.document,t=n.value,s=n.constraint,p=s&&yt(s,Jt);return p?new Ft(e,{props:new j({options:p.values.value("options")}),value:t,viewProps:n.viewProps}):new rs(e,{parser:T=>T,props:j.fromObject({formatter:Ts}),value:t,viewProps:n.viewProps})}},Wn={monitor:{defaultInterval:200,defaultLineCount:3}},ei=$("mll");class ml{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ei()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(ei("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(p=>{p!==void 0&&s.push(this.formatter_(p))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class js{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ml(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const ti=$("sgl");class vl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ti()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(ti("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Hs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new vl(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const bl={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=me(e,{lineCount:ne.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ur},controller:n=>{var e;return n.value.rawValue.length===1?new Hs(n.document,{formatter:dr,value:n.value,viewProps:n.viewProps}):new js(n.document,{formatter:dr,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Wn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},on=$("grl");class gl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(on("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const p=e.createElementNS(E,"polyline");this.svgElem_.appendChild(p),this.lineElem_=p;const T=e.createElement("div");T.classList.add(on("t"),$("tt")()),this.element.appendChild(T),this.tooltipElem_=T,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),p=this.props_.get("maxValue"),T=[];this.value.rawValue.forEach((Ke,Ye)=>{if(Ke===void 0)return;const mn=ot(Ye,0,t,0,e.width),Kn=ot(Ke,s,p,e.height,0);T.push([mn,Kn].join(","))}),this.lineElem_.setAttributeNS(null,"points",T.join(" "));const O=this.tooltipElem_,ue=this.value.rawValue[this.cursor_.rawValue];if(ue===void 0){O.classList.remove(on("t","a"));return}const Ue=ot(this.cursor_.rawValue,0,t,0,e.width),Ge=ot(ue,s,p,e.height,0);O.style.left=`${Ue}px`,O.style.top=`${Ge}px`,O.textContent=`${this.formatter_(ue)}`,O.classList.contains(on("t","a"))||(O.classList.add(on("t","a"),on("t","in")),i(O),O.classList.remove(on("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class wl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=Z(-1),this.view=new gl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!h(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new dn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ot(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ot(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ys(n){return"format"in n&&!F(n.format)?n.format:_t(2)}function xl(n){var e;return n.value.rawValue.length===1?new Hs(n.document,{formatter:Ys(n.params),value:n.value,viewProps:n.viewProps}):new js(n.document,{formatter:Ys(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Wn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function yl(n){var e,t,s;return new wl(n.document,{formatter:Ys(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Wn.monitor.defaultLineCount,props:j.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function ni(n){return"view"in n&&n.view==="graph"}const Pl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ne,s=me(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>ni(n)?64:1,reader:n=>_r},controller:n=>ni(n.params)?yl(n):xl(n)},Sl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ne,s=me(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>mr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new js(n.document,{formatter:Ts,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Wn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Hs(n.document,{formatter:Ts,value:t,viewProps:n.viewProps})}};function El(n,e){var t;const s=n.accept(e.target.read(),e.params);if(F(s))return null;const p=ne,T={target:e.target,initialValue:s.initialValue,params:s.params},O=n.binding.reader(T),ue=n.binding.constraint?n.binding.constraint(T):void 0,Ue=Z(O(s.initialValue),{constraint:ue,equals:n.binding.equals}),Ge=new Tt({reader:O,target:e.target,value:Ue,writer:n.binding.writer(T)}),Ke=p.optional.boolean(e.params.disabled).value,Ye=p.optional.boolean(e.params.hidden).value,mn=n.controller({constraint:ue,document:e.document,initialValue:s.initialValue,params:s.params,value:Ge.value,viewProps:u.create({disabled:Ke,hidden:Ye})});return new qe(e.document,{binding:Ge,blade:Me(),props:j.fromObject({label:"label"in e.params?(t=p.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:mn})}function kl(n,e){return e===0?new ft:new St(n,e??Wn.monitor.defaultInterval)}function Cl(n,e){var t,s,p;const T=ne,O=n.accept(e.target.read(),e.params);if(F(O))return null;const ue={target:e.target,initialValue:O.initialValue,params:O.params},Ue=n.binding.reader(ue),Ge=(s=(t=T.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(O.params))!==null&&s!==void 0?s:1,Ke=T.optional.number(e.params.interval).value,Ye=new xt({reader:Ue,target:e.target,ticker:kl(e.document,Ke),value:It(Ge)}),mn=T.optional.boolean(e.params.disabled).value,Kn=T.optional.boolean(e.params.hidden).value,jn=n.controller({document:e.document,params:O.params,value:Ye.value,viewProps:u.create({disabled:mn,hidden:Kn})});return new $e(e.document,{binding:Ye,blade:Me(),props:j.fromObject({label:"label"in e.params?(p=T.optional.string(e.params.label).value)!==null&&p!==void 0?p:null:e.target.key}),valueController:jn})}class Tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const p=t.read();if(F(p))throw new z({context:{key:t.key},type:"nomatchingcontroller"});const T=this.pluginsMap_.inputs.reduce((O,ue)=>O??El(ue,{document:e,target:t,params:s}),null);if(T)return T;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const p=this.pluginsMap_.monitors.reduce((T,O)=>T??Cl(O,{document:e,params:s,target:t}),null);if(p)return p;throw new z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((p,T)=>p??nt(T,{document:e,params:t}),null);if(!s)throw new z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new Je(e);if(e instanceof $e)return new rt(e);if(e instanceof Fe)return new bt(e,this);const t=this.pluginsMap_.blades.reduce((s,p)=>s??p.api({controller:e,pool:this}),null);if(!t)throw z.shouldNeverHappen();return t}}function Bl(){const n=new Tl;return[Ul,ll,hl,_l,el,Ya,Ha,qa,$o,bl,Sl,Pl,Ce,Ss,ns,Re].forEach(e=>{n.register(e)}),n}function Al(n){return sn.isObject(n)?new sn(n.x,n.y):new sn}function Ml(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function jt(n,e){if(!n)return;const t=[],s=Hr(n,e);s&&t.push(s);const p=Yr(n);return p&&t.push(p),new $t(t)}function Rl(n,e){return new nn({assembly:Zr,components:[jt("x"in n?n.x:void 0,e.x),jt("y"in n?n.y:void 0,e.y)]})}function si(n,e){const[t,s]=n?Ja(n):[];if(!F(t)||!F(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const p=En(n);return Math.max(Math.abs(p)*10,Math.abs(e)*10)}function Dl(n,e){const t=e instanceof nn?e.components[0]:void 0,s=e instanceof nn?e.components[1]:void 0,p=si(t,n.x),T=si(s,n.y);return Math.max(p,T)}function ri(n,e){return{baseStep:En(e),constraint:e,textProps:j.fromObject({draggingScale:kn(e,n),formatter:_t(as(e,n))})}}function zl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const Ul={id:"input-point2d",type:"input",accept:(n,e)=>{if(!sn.isObject(n))return null;const t=ne,s=me(e,{expanded:t.optional.boolean,picker:t.optional.custom(wr),x:t.optional.custom(en),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Al,constraint:n=>Rl(n.params,n.initialValue),equals:sn.equals,writer:n=>Ml},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof nn))throw z.shouldNeverHappen();const p="expanded"in n.params?n.params.expanded:void 0,T="picker"in n.params?n.params.picker:void 0;return new rl(e,{axes:[ri(t.rawValue.x,s.components[0]),ri(t.rawValue.y,s.components[1])],expanded:p??!1,invertsY:zl(n.params),maxValue:Dl(t.rawValue,s),parser:Wt,pickerLayout:T??"popup",value:t,viewProps:n.viewProps})}};class ii extends _{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}}class oi extends _{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}}class ai extends _{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,p=>{s(p.event)}),this}}const Ll=function(){return{id:"list",type:"blade",accept(n){const e=ne,t=me(n,{options:e.required.custom(os),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Jt(xr(n.params.options)),t=Z(n.params.value,{constraint:e}),s=new Ft(n.document,{props:new j({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Vt(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Vt)||!(n.controller.valueController instanceof Ft)?null:new ii(n.controller)}}}();function Il(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Gl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class Fl extends gt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);Gl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return Il(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find($e).forEach(e=>{e.binding.read()})}}class Ol extends Un{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Vl={id:"slider",type:"blade",accept(n){const e=ne,t=me(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,p=new Xt({max:n.params.max,min:n.params.min}),T=new Rs(n.document,{baseStep:1,parser:Wt,sliderProps:new j({maxValue:p.values.value("max"),minValue:p.values.value("min")}),textProps:j.fromObject({draggingScale:kn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:Ro}),value:Z(s,{constraint:p}),viewProps:n.viewProps});return new Vt(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:T})},api(n){return!(n.controller instanceof Vt)||!(n.controller.valueController instanceof Rs)?null:new oi(n.controller)}},Nl=function(){return{id:"text",type:"blade",accept(n){const e=ne,t=me(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new rs(n.document,{parser:n.params.parse,props:j.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:Z(n.params.value),viewProps:n.viewProps});return new Vt(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Vt)||!(n.controller.valueController instanceof rs)?null:new ai(n.controller)}}}();function $l(n){const e=n.createElement("div");return e.classList.add($("dfw")()),n.body&&n.body.appendChild(e),e}function li(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class ql extends Fl{constructor(e){var t,s;const p=e??{},T=(t=p.document)!==null&&t!==void 0?t:c(),O=Bl(),ue=new Ol(T,{expanded:p.expanded,blade:Me(),props:j.fromObject({title:p.title}),viewProps:u.create()});super(ue,O),this.pool_=O,this.containerElem_=(s=p.container)!==null&&s!==void 0?s:$l(T),this.containerElem_.appendChild(this.element),this.doc_=T,this.usesDefaultWrapper_=!p.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&li(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){li(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Vl,Ll,Re,Nl]})}}const Wl=new x("3.1.10");l.BladeApi=_,l.ButtonApi=Y,l.FolderApi=gt,l.InputBindingApi=Je,l.ListApi=ii,l.MonitorBindingApi=rt,l.Pane=ql,l.SeparatorApi=yn,l.SliderApi=oi,l.TabApi=ee,l.TabPageApi=I,l.TextApi=ai,l.TpChangeEvent=M,l.VERSION=Wl,Object.defineProperty(l,"__esModule",{value:!0})})})(Qs,Qs.exports);var qi=Qs.exports;const yc=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Zs=`// 2DGS render — vertex+fragment.
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
        return ShadeGeom(s_t, a_t, in.depth_plane.z, false);
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
        return ShadeGeom(vec2<f32>(0.0), alpha_e, in.depth_plane.z, false);
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

    return ShadeGeom(s, b, depth, rho3d > rho2d);
}

fn shade_color(in: SplatIn, g: ShadeGeom) -> vec3<f32> {
    var color = in.color.rgb;
    let s = g.s;

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
`,Pc=`const WG_SIZE = 256u;
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
}`,Sc=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Ec=`// shader implementing gpu radix sort.

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
`,kc=`// shader implementing gpu radix sort.

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
`,Cc=`// ============================================================================
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
}`,Wi=32,er=1,tr=2,wi=4,xi=512,yi=1024,Pi=2048,Si=4096,Ei=8192,Tc=0,an=new ArrayBuffer(Wi),ht={canvas_size:new Uint32Array(an,0,2),accel_flags:new Uint32Array(an,8,1),feature_mode:new Uint32Array(an,12,1),gaussian_scaling:new Float32Array(an,16,1),sh_bias:new Float32Array(an,20,1),color_K:new Uint32Array(an,24,1),walltime:new Float32Array(an,28,1)};function Bc(o){ht.canvas_size[0]=o.width>>>0,ht.canvas_size[1]=o.height>>>0,ht.accel_flags[0]=(o.accel_flags??er|tr)>>>0,ht.feature_mode[0]=(o.feature_mode??Tc)>>>0,ht.gaussian_scaling[0]=o.gaussian_scaling??1,ht.sh_bias[0]=o.sh_bias??.5,ht.color_K[0]=(o.color_K??0)>>>0,ht.walltime[0]=o.walltime??0}function Ki(o,r){o.queue.writeBuffer(r,0,an)}function es(o,r,l){l&&o&&r&&Ki(o,r)}function Mn(o,r,l,x,_=!0){ht.canvas_size[0]=o>>>0,ht.canvas_size[1]=r>>>0,es(l??null,x??null,_)}function ki(o,r,l,x=!0){ht.gaussian_scaling[0]=o,es(r??null,l??null,x)}function Ci(o,r,l,x=!0){ht.sh_bias[0]=o,es(r??null,l??null,x)}function Ac(o){const r=new Float32Array(1),l=new Uint32Array(r.buffer);r[0]=o;const x=l[0],_=x>>>16&32768,b=(x>>>23&255)-127+15;return b<=0?_:b>=31?_|31744:_|b<<10|x>>>13&1023}function Ti(o,r=.3,l,x,_=!0){let b=ht.accel_flags[0]&65535&~Ei;o&&(b=b|Ei|Ac(r)<<16),ht.accel_flags[0]=b>>>0,es(l??null,x??null,_)}function Hn(o,r,l,x=!0){let _=ht.accel_flags[0];o.oac!==void 0&&(_=o.oac?_|er:_&~er),o.spr!==void 0&&(_=o.spr?_|tr:_&~tr),o.bfc!==void 0&&(_=o.bfc?_|wi:_&~wi),o.hypLegacy!==void 0&&(_=o.hypLegacy?_|xi:_&~xi),o.centred!==void 0&&(_=o.centred?_|Si:_&~Si),o.raysplat!==void 0&&(_=o.raysplat?_|Pi:_&~Pi),o.legacyPos!==void 0&&(_=o.legacyPos?_|yi:_&~yi),ht.accel_flags[0]=_>>>0,es(r??null,l??null,x)}const Mc=256;function hs(o,r){const l=[],x=[];let _=!0;for(const b of o.split(`
`)){const M=b.trim();let B;if((B=/^\/\/#if\s+(\w+)\s*$/.exec(M))!==null){const C=!!r[B[1]];x.push({parent:_,taken:C}),_=_&&C;continue}if(/^\/\/#else\s*$/.test(M)){const C=x[x.length-1];if(C===void 0)throw new Error("preprocessWGSL: #else without #if");_=C.parent&&!C.taken;continue}if(/^\/\/#endif\s*$/.test(M)){const C=x.pop();if(C===void 0)throw new Error("preprocessWGSL: #endif without #if");_=C.parent;continue}_&&l.push(b)}if(x.length!==0)throw new Error("preprocessWGSL: unterminated #if");return l.join(`
`)}const Rc=Wi,Dc=8,zc=96,Uc=12,lr=8,Ht=1<<lr,bn=256,gs=32/lr,Lc=0,Xs=gs&1;function Bi(o,r){return{sort_indices_buffer:r.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:r.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function Ic(o,r){const l=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=o.createPipelineLayout({bindGroupLayouts:[l]}),_=b=>o.createComputePipeline({layout:x,compute:{module:r,entryPoint:b,constants:{WG_SIZE:bn}}});return{l0TileScan:_("prefix_l0_tile_scan"),l1TileScanOnL0:_("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:_("prefix_scan_l1_sums"),addL1ToL0:_("prefix_add_l1_to_l0_offsets"),addL0ToElems:_("prefix_add_l0_to_elements"),computeDigitBase:_("compute_digit_base"),prefixBindGroupLayout:l}}function Gc(o,r,l){const x=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),_=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),b=o.createPipelineLayout({bindGroupLayouts:[x]}),M=o.createPipelineLayout({bindGroupLayouts:[_]}),B=[];for(let C=0;C<gs;C++){const A={PASS_ID:C+Lc,RS_RADIX_LOG2:lr,RS_RADIX_SIZE:Ht};B.push({localHistogram:o.createComputePipeline({layout:b,compute:{module:r,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:l,entryPoint:"scatter_elements",constants:A}})})}return{passes:B,localHistogramBindGroupLayout:x,scatterBindGroupLayout:_}}function Fc(o){const r=o.createShaderModule({label:"local histogram",code:kc}),l=o.createShaderModule({label:"scatter",code:Ec}),x=o.createShaderModule({label:"blelloch prefix",code:Cc}),_=Ic(o,x),b=Gc(o,r,l);return{localHistogramBindGroupLayout:b.localHistogramBindGroupLayout,scatterBindGroupLayout:b.scatterBindGroupLayout,passes:b.passes,hierarchicalBlelloch:_}}function Ai(o){const r=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),l=r.createView({dimension:"2d-array"}),x=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),_=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),b=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(b,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:r,view:l,sampler:x,rectsBuffer:_,texParamsBuffer:b,meta:M}}const Rn=class Rn{constructor(r,l,x,_,b,M=null,B={}){R(this,"device");R(this,"pc");R(this,"presentationFormat");R(this,"camera_buffer");R(this,"render_settings_buffer");R(this,"draw_indirect_buffer");R(this,"splat_2d_buffer");R(this,"querySet");R(this,"resolveBuffer");R(this,"resultBuffer");R(this,"queriesPerFrame",Dc);R(this,"queryCapacityFrames",200);R(this,"sort_prefixBindGroup");R(this,"sort_pipelines");R(this,"sort_localHistogramBindGroups");R(this,"sort_scatterBindGroups");R(this,"lastFrame",0);R(this,"frameCount",0);R(this,"preprocessPipeline");R(this,"cullPipeline");R(this,"renderPipeline");R(this,"indirectPipeline");R(this,"renderShaderModule");R(this,"betaKernel",1);R(this,"fetchById");R(this,"octBound");R(this,"acc16");R(this,"accTexture",null);R(this,"accView",null);R(this,"accW",0);R(this,"accH",0);R(this,"legacyRenderPipeline",null);R(this,"varyingsPipeline",null);R(this,"msaa",!1);R(this,"msaaTexture",null);R(this,"msaaView",null);R(this,"msaaW",0);R(this,"msaaH",0);R(this,"msaaPipelines",new Map);R(this,"mkVariant",null);R(this,"legacyRenderer",!1);R(this,"accResolvePipeline",null);R(this,"accResolveBgl",null);R(this,"accResolveBindGroup",null);R(this,"twoPass",!1);R(this,"twoPassThresh",.5);R(this,"twoPassParamsBuffer",null);R(this,"twoPassBgl",null);R(this,"twoPassBg",null);R(this,"twoPassSplatsBgl",null);R(this,"twoPassSplatsBg",null);R(this,"twoPassModules",new Map);R(this,"twoPassPipelines",new Map);R(this,"twoPassDepth",null);R(this,"twoPassDepthView",null);R(this,"twoPassW",0);R(this,"twoPassH",0);R(this,"overdrawMode",0);R(this,"overdrawMax",48);R(this,"ovTexture",null);R(this,"ovView",null);R(this,"ovW",0);R(this,"ovH",0);R(this,"ovParamsBuffer",null);R(this,"ovResolvePipeline",null);R(this,"ovResolveBgl",null);R(this,"ovResolveBg",null);R(this,"ovStatsPipeline",null);R(this,"ovStatsBgl",null);R(this,"ovStatsBg",null);R(this,"ovStatsBuffer",null);R(this,"ovReadback",null);R(this,"ovReadState","idle");R(this,"ovLastStats",null);R(this,"ovPipelines",new Map);R(this,"renderSettingsBgl");R(this,"preprocessBgl2");R(this,"renderSplatsBgl");R(this,"atlasBgl");R(this,"sort_info_buffer");R(this,"sort_ping_pong");R(this,"crsBg");R(this,"gsBg");R(this,"cullBg2");R(this,"preprocessBg1");R(this,"renderSplatsBindGroup");R(this,"renderSettingsBindGroup");R(this,"atlasBindGroup");R(this,"indirectBindGroup");R(this,"sh_solvers_buffer");R(this,"bfcParamsBuffer");R(this,"bfcBindGroupLayout");R(this,"bfcBindGroup");R(this,"staticSortKeys",null);R(this,"wideFrustum",!1);R(this,"staticKeysBuffer",null);R(this,"bgColor",[0,0,0,0]);R(this,"showPerfDialogNext",!1);R(this,"requestReorderNextFrame",!1);R(this,"reorderInFlight",!1);R(this,"downloadOnceNextRead",!1);R(this,"downloadOnceFileName","fps_metrics");R(this,"allFrameTimes",[]);R(this,"lastStageBreakdownMs",null);R(this,"timeQueryEnabled");R(this,"atlas");R(this,"atlasParamsBuffer");R(this,"_atlasEnabled",!0);R(this,"mipLodBias",1);R(this,"_mipMode",1);this.fetchById=B.fetchById??!0,this.staticSortKeys=B.staticSortKeys??null,this.wideFrustum=B.wideFrustum??!1,this.octBound=B.octBound??!1,this.acc16=B.acc16??!1,ut(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const C=b.includes("timestamp-query");this.timeQueryEnabled=C,C&&ut("⏰ using timestamp-query"),this.pc=r,this.device=l,this.presentationFormat=x,this.camera_buffer=_,this.atlas=M??Ai(l),this.atlasParamsBuffer=l.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),l.addEventListener("uncapturederror",we=>{console.error("A WebGPU error was not captured:",we.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+bn-1)/bn)+1)*bn,N=Math.ceil(A/bn);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const F=l.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Fc(l);const L=[Bi(A,l),Bi(A,l)],W=l.createBuffer({label:"workgroup histograms",size:N*Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=l.createBuffer({label:"workgroup prefixes",size:N*Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=l.createBuffer({label:"digit base",size:Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),G=Math.ceil(N/bn),Y=Math.ceil(G/bn),V=l.createBuffer({label:"prefix l0 sums",size:G*Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=l.createBuffer({label:"prefix l0 offsets",size:G*Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=l.createBuffer({label:"prefix l1 sums",size:Y*Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),le=l.createBuffer({label:"prefix l1 offsets",size:Y*Ht*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=l.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:W}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:V}},{binding:4,resource:{buffer:te}},{binding:5,resource:{buffer:$}},{binding:6,resource:{buffer:le}},{binding:7,resource:{buffer:z}}]}),this.sort_localHistogramBindGroups=[l.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:L[0].sort_depths_buffer}},{binding:2,resource:{buffer:W}}]}),l.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:L[1].sort_depths_buffer}},{binding:2,resource:{buffer:W}}]})],this.sort_scatterBindGroups=[l.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:L[0].sort_depths_buffer}},{binding:3,resource:{buffer:L[1].sort_depths_buffer}},{binding:4,resource:{buffer:L[0].sort_indices_buffer}},{binding:5,resource:{buffer:L[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),l.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:L[1].sort_depths_buffer}},{binding:3,resource:{buffer:L[0].sort_depths_buffer}},{binding:4,resource:{buffer:L[1].sort_indices_buffer}},{binding:5,resource:{buffer:L[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=F,this.sort_ping_pong=L;const he=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),de=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),se=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ae=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:he,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:de,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=ae,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ae,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Te=this.device.createShaderModule({code:Pc});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const ie=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],re=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Dn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),ie.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),re.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:ie}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:re});const ge=this.device.createShaderModule({code:hs(Sc,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,de,se,this.bfcBindGroupLayout]}),compute:{module:ge,entryPoint:"surfel_cull"}});const Le=this.device.createShaderModule({code:yc});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,ae]}),compute:{module:Le,entryPoint:"preprocess"}});const ke=this.device.createShaderModule({label:"render_2dgs",code:hs(Zs,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ke.getCompilationInfo().then(we=>{we.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),we.messages.forEach(Be=>{(Be.type==="error"?console.error:Be.type==="warning"?console.warn:console.log)(`${Be.type} (line ${Be.lineNum}:${Be.linePos}): ${Be.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const X=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Z=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,j=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Z,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),J=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),ve=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[X,j,J]}),vertex:{module:ke,entryPoint:"vs_main"},fragment:{module:ke,entryPoint:"fs_main",constants:{BETA_KERNEL:ve},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ze=(we,Be,ne,me=1)=>{const xe=this.device.createShaderModule({label:`render_2dgs (${we})`,code:hs(Zs,{FETCH_BY_ID:Be,OCT:ne})});return this.device.createRenderPipeline({label:`render_2dgs_${we}`,multisample:{count:me},layout:this.device.createPipelineLayout({bindGroupLayouts:[X,j,J]}),vertex:{module:xe,entryPoint:"vs_main"},fragment:{module:xe,entryPoint:"fs_main",constants:{BETA_KERNEL:ve},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=ze("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ze("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=ze,this.device.popErrorScope().then(we=>{we?console.error("[render_2dgs] pipeline create validation error:",we.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:X,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:j,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Xs].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:J,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ke,this.betaKernel=ve,this.renderSettingsBgl=X,this.renderSplatsBgl=j,this.atlasBgl=J}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(r,l){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([r,l[0],l[1],l[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var _;const r=new ArrayBuffer(32),l=new Uint32Array(r),x=new Float32Array(r);l[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,l[1]=this.atlas.meta.layer_h|0,x[2]=this.atlas.meta.uv_extent||0,l[3]=this.atlas.meta.probe_mode|0||0,l[4]=this._mipMode!==0?Math.max(1,((_=this.atlas.meta.mip_bytes)==null?void 0:_.length)??1):1,x[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,r)}setMsaa(r){r!==this.msaa&&(this.msaa=r,ut(`[render_2dgs] MSAA 4x: ${r?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(r,l){const x=`${r?"byid":"var"}_${l?"oct":"quad"}`;let _=this.msaaPipelines.get(x);return _||(_=this.mkVariant(`msaa4_${x}`,r,l,4),this.msaaPipelines.set(x,_)),_}ensureMsaaResources(r,l){var x;this.msaaTexture!==null&&this.msaaW===r&&this.msaaH===l||((x=this.msaaTexture)==null||x.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:r,height:l},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=r,this.msaaH=l)}setTwoPass(r){r!==this.twoPass&&(this.twoPass=r,ut(`[render_2dgs] two-pass layer path: ${r?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(r){this.twoPassThresh=Math.min(.999,Math.max(.001,r)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Xs].sort_indices_buffer}}]}))}ensureTwoPassResources(r,l){var x;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===r&&this.twoPassH===l)&&((x=this.twoPassDepth)==null||x.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,r),height:Math.max(1,l),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=r,this.twoPassH=l)}renderModuleFor(r,l,x){const _=`${r?"byid":"vary"}_${l?"oct":"quad"}_${x?"hwz":"z0"}`,b=this.twoPassModules.get(_);if(b!==void 0)return b;const M=this.device.createShaderModule({label:`render_2dgs (${_})`,code:hs(Zs,{FETCH_BY_ID:r,OCT:l,HW_DEPTH:x})});return M.getCompilationInfo().then(B=>{for(const C of B.messages)C.type==="error"&&console.error(`[render_2dgs ${_}] (line ${C.lineNum}:${C.linePos}): ${C.message}`)}),this.twoPassModules.set(_,M),M}twoPassPipelinesFor(r,l){const x=`${r?"byid":"vary"}_${l?"oct":"quad"}`,_=this.twoPassPipelines.get(x);if(_!==void 0)return _;const b=this.renderModuleFor(r,l,!0),M=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const B=this.device.createRenderPipeline({label:`render_2dgs_opaque_${x}`,layout:M,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),C=this.device.createRenderPipeline({label:`render_2dgs_front_${x}`,layout:M,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:Rn.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(N=>{N?console.error(`[render_2dgs twopass ${x}] pipeline validation error:`,N.message):console.log(`[render_2dgs twopass ${x}] pipelines created OK`)});const A={opaque:B,front:C};return this.twoPassPipelines.set(x,A),A}setOverdrawMode(r){r!==this.overdrawMode&&(this.overdrawMode=r,this.ovLastStats=null,ut(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][r]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(r){this.overdrawMax=Math.max(1,r),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(r,l){var x;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const _=`
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
}`,b=this.device.createShaderModule({label:"overdraw_resolve",code:_});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const M=`
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
}`,B=this.device.createShaderModule({label:"overdraw_stats",code:M});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:B,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===r&&this.ovH===l||((x=this.ovTexture)==null||x.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,r),height:Math.max(1,l),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=r,this.ovH=l)}ovPipelineFor(r,l,x){const _=`${r}_${l?"byid":"vary"}_${x?"oct":"quad"}`,b=this.ovPipelines.get(_);if(b!==void 0)return b;const M=r.startsWith("tp_"),B=this.renderModuleFor(l,x,M),C=this.device.createPipelineLayout({bindGroupLayouts:M?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),A={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[r];let N;r==="tp_raster"?N={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:r==="tp_opaque"?N={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:r==="tp_front"&&(N={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const F=this.device.createRenderPipeline({label:`render_2dgs_${_}`,layout:C,vertex:{module:B,entryPoint:"vs_main"},fragment:{module:B,entryPoint:A,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:Rn.BLEND_ADD}]},depthStencil:N,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(L=>{L&&console.error(`[render_2dgs overdraw ${_}] pipeline validation error:`,L.message)}),this.ovPipelines.set(_,F),F}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const r=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const l=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:r[0]/l,meanCovered:r[2]>0?r[0]/r[2]:0,max:r[1],coveredFrac:r[2]/l}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(r,l){var x;if(this.accResolvePipeline===null){const _=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,b=this.device.createShaderModule({label:"acc16_resolve",code:_});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===r&&this.accH===l||((x=this.accTexture)==null||x.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,r),height:Math.max(1,l),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=r,this.accH=l)}setAtlas(r){this.atlas=r??Ai(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&fs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(r){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=r,fs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,r,this._mipMode))}setMipLodBias(r){this.mipLodBias=r,this.writeAtlasParams()}setFetchById(r){r!==this.fetchById&&(this.fetchById=r,ut(`[render_2dgs] fragment inputs: ${r?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(r){if(r===this.legacyRenderer)return;this.legacyRenderer=r,Hn({legacyPos:r,hypLegacy:r},this.device,this.render_settings_buffer);const l=!r&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([l])),ut(`[render_2dgs] renderer: ${r?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(r){this.atlas.meta.format!==4294967295&&(this._mipMode=r?1:0,this.writeAtlasParams(),fs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var r;return(((r=this.atlas.meta.mip_bytes)==null?void 0:r.length)??1)>1}async debugReadSortedIndices(r=30){const l=Math.max(0,Math.min(r,this.pc.num_points)),x=l*Uint32Array.BYTES_PER_ELEMENT;if(x===0){console.log("[DEBUG] No indices to read.");return}const _=this.device.createBuffer({size:x,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),b=this.device.createCommandEncoder();b.copyBufferToBuffer(this.sort_ping_pong[Xs].sort_indices_buffer,0,_,0,x),this.device.queue.submit([b.finish()]),await _.mapAsync(GPUMapMode.READ);const M=new Uint32Array(_.getMappedRange());console.log("[DEBUG] Sorted indices (first",l,"):",Array.from(M)),_.unmap()}frame(r,l,x=!0){const b=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=x&&this.timeQueryEnabled;{r.clearBuffer(this.sort_info_buffer,0,4);const B={label:"cull"};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+0,endOfPassWriteIndex:b+1});const C=r.beginComputePass(B);C.setPipeline(this.cullPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.gsBg),C.setBindGroup(2,this.cullBg2),C.setBindGroup(3,this.bfcBindGroup);const A=Math.ceil(this.pc.num_points/Mc);C.dispatchWorkgroups(A,1,1),C.end()}{const B=r.beginComputePass({label:"calculate indirect dispatch"});B.setPipeline(this.indirectPipeline),B.setBindGroup(0,this.indirectBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}{const B={label:"preprocess"};M&&(B.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+2,endOfPassWriteIndex:b+3});const C=r.beginComputePass(B);C.setPipeline(this.preprocessPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.preprocessBg1),C.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),C.end()}for(let B=0;B<gs;B++){const C=B&1,A=this.sort_pipelines.passes[B],N=this.sort_localHistogramBindGroups[C],F=this.sort_scatterBindGroups[C];{const L={label:`upsweep_round${B}`};M&&B==0&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+4});const W=r.beginComputePass(L);W.setPipeline(A.localHistogram),W.setBindGroup(0,N),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}{const L=r.beginComputePass({label:`prefix_round${B} - l0TileScan`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),L.end()}{const L=r.beginComputePass({label:`prefix_round${B} - l1TileScanOnL0`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),L.end()}{const L=r.beginComputePass({label:`prefix_round${B} - l1ScanSums`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroups(1,Ht,1),L.end()}{const L=r.beginComputePass({label:`prefix_round${B} - addL1ToL0`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),L.end()}{const L=r.beginComputePass({label:`prefix_round${B} - addL0ToElems`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),L.end()}{const L=r.beginComputePass({label:`prefix_round${B} - computeDigitBase`});L.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),L.setBindGroup(0,this.sort_prefixBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:`scatter_round${B}`};M&&B==gs-1&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+5});const W=r.beginComputePass(L);W.setPipeline(A.scatterElements),W.setBindGroup(0,F),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}}{const B=ht.canvas_size[0],C=ht.canvas_size[1],A=this.overdrawMode!==0;let N=l;A?(this.ensureOverdrawResources(B,C),N=this.ovView):this.acc16&&(this.ensureAccResources(B,C),N=this.accView);const F=A?{r:0,g:0,b:0,a:0}:this.bgColor,L=A||this.acc16,W=this.fetchById&&!this.legacyRenderer,oe=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(B,C);let z,G;if(A)this.overdrawMode===1?(z=this.ovPipelineFor("tp_opaque",W,oe),G=this.ovPipelineFor("tp_front",W,oe)):z=G=this.ovPipelineFor("tp_raster",W,oe);else{const le=this.twoPassPipelinesFor(W,oe);z=le.opaque,G=le.front}const Y={label:"render_opaque_layer",colorAttachments:[{view:N,loadOp:"clear",storeOp:"store",clearValue:F}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};M&&(Y.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6});const V=r.beginRenderPass(Y);V.setPipeline(z),V.setBindGroup(0,this.renderSettingsBindGroup),V.setBindGroup(1,this.twoPassSplatsBg),V.setBindGroup(2,this.atlasBindGroup),V.setBindGroup(3,this.twoPassBg),V.drawIndirect(this.draw_indirect_buffer,0),V.end();const te={label:"render_front",colorAttachments:[{view:N,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};M&&!L&&(te.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const $=r.beginRenderPass(te);$.setPipeline(G),$.setBindGroup(0,this.renderSettingsBindGroup),$.setBindGroup(1,this.twoPassSplatsBg),$.setBindGroup(2,this.atlasBindGroup),$.setBindGroup(3,this.twoPassBg),$.drawIndirect(this.draw_indirect_buffer,0),$.end()}else{const z=this.msaa&&!A&&!this.acc16;z&&this.ensureMsaaResources(B,C);const G={label:"render",colorAttachments:[z?{view:this.msaaView,resolveTarget:N,loadOp:"clear",storeOp:"discard",clearValue:F}:{view:N,loadOp:"clear",storeOp:"store",clearValue:F}]};M&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6,...L?{}:{endOfPassWriteIndex:b+7}});const Y=r.beginRenderPass(G);A?(Y.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",W,oe)),Y.setBindGroup(1,this.twoPassSplatsBg)):(Y.setPipeline(z?this.msaaPipelineFor(W,oe):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),Y.setBindGroup(1,this.renderSplatsBindGroup)),Y.setBindGroup(0,this.renderSettingsBindGroup),Y.setBindGroup(2,this.atlasBindGroup),Y.drawIndirect(this.draw_indirect_buffer,0),Y.end()}if(A){r.clearBuffer(this.ovStatsBuffer,0,16);const z=r.beginComputePass({label:"overdraw_stats"});z.setPipeline(this.ovStatsPipeline),z.setBindGroup(0,this.ovStatsBg),z.dispatchWorkgroups(Math.ceil(B/16),Math.ceil(C/16),1),z.end();const G={label:"overdraw_resolve",colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};M&&(G.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const Y=r.beginRenderPass(G);Y.setPipeline(this.ovResolvePipeline),Y.setBindGroup(0,this.ovResolveBg),Y.draw(3),Y.end(),this.ovReadState==="idle"&&(r.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const z={label:"acc16_resolve",colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const G=r.beginRenderPass(z);G.setPipeline(this.accResolvePipeline),G.setBindGroup(0,this.accResolveBindGroup),G.draw(3),G.end()}}this.frameCount++}async readPerfMetrics(r){const l=(r==null?void 0:r.silent)??!1;if(this.frameCount<=0)return;const x=this.device.createCommandEncoder({label:"timestamp resolve encoder"});x.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),x.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([x.finish()]),await this.device.queue.onSubmittedWorkDone();const _=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const b=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),B=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,C=Array.from({length:_.length},()=>[]);let A=0;for(let Y=0;Y<M;Y++){const V=(B+Y)%this.queryCapacityFrames,te=V*this.queriesPerFrame;let $=!0;for(let le=0;le<_.length;le++){const[he,de,se]=_[le];if(b[te+se]===0n||b[te+de]===0n||b[te+de]<b[te+se]){$=!1;break}}if(!$){!l&&V%60===0&&console.debug("[timestamp] frame slot",V,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let le=0;le<_.length;le++){const[he,de,se]=_[le],ae=Number(b[te+se]),Te=Number(b[te+de]);C[le].push((Te-ae)/1e6)}}if(A===0){this.resultBuffer.unmap(),l||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...C[0]);const N=[];let F=0,L=0,W=0;for(let Y=0;Y<_.length;Y++){const V=_[Y][0],te=C[Y];let $=0;if(V==="Total"){const le=this.allFrameTimes;$=le.reduce((se,ae)=>se+ae,0)/le.length;const he=[...le].sort((se,ae)=>se-ae);F=he[Math.floor(he.length*.99)]||0;const de=le.reduce((se,ae)=>se+Math.pow(ae-$,2),0)/le.length;L=Math.sqrt(de),W=$}else $=te.reduce((le,he)=>le+he,0)/te.length;N.push([V,$])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(N);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const G=`[TIMESTAMP - ${this.constructor.name}]
`+N.map(([Y,V])=>`${Y}: ${V.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${L.toFixed(3)}ms
Total AVG: ${W.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(l||(console.log(G),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Y=`Stage,ms
`,V=N.map(([le,he])=>`${le},${he.toFixed(3)}`).join(`
`),te="data:text/csv;charset=utf-8,"+encodeURIComponent(Y+V),$=document.createElement("a");$.href=te,$.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild($),$.click(),$.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(G)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const r=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const r=document.querySelector("canvas"),l=r?r.width:1,x=r?r.height:1;Bc({width:l,height:x,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Ki(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Dn(this.pc.num_points*zc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Dn(this.pc.num_points*Uc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(r){if(r&&r.trim().length>0){const l=r.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=l.length>0?l:this.downloadOnceFileName}else{const l=new Date,x=`${l.getFullYear()}${String(l.getMonth()+1).padStart(2,"0")}${String(l.getDate()).padStart(2,"0")}_${String(l.getHours()).padStart(2,"0")}${String(l.getMinutes()).padStart(2,"0")}${String(l.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${x}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};R(Rn,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),R(Rn,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let nr=Rn;function Oc(o,r){return 2*Math.atan(r/(2*o))}function Vc(o,r,l,x){const _=Math.tan(x/2),b=Math.tan(l/2),M=_*o,B=-M,C=b*o,A=-C,N=ct.create();return N[0]=2*o/(C-A),N[5]=-2*o/(M-B),N[2]=(C+A)/(C-A),N[6]=(M+B)/(M-B),N[14]=1,N[10]=r/(r-o),N[11]=-(r*o)/(r-o),ct.transpose(N,N),N}async function sr(o){ut(`loading scene camera file... : ${o}`);const l=await(await fetch(o)).json();return ut(`loaded cameras count: ${l.length}`),l.map(x=>{const _=q.clone(x.position),b=Pt.create(...x.rotation.flat()),M=b[0],B=b[4],C=b[8],A=b[1],N=b[5],F=b[9],L=b[2],W=b[6],oe=b[10];M*(N*oe-F*W)-B*(A*oe-F*L)+C*(A*W-N*L)<0&&(b[1]=-b[1],b[5]=-b[5],b[9]=-b[9]);const G=ct.fromMat3(b);return{position:_,rotation:G,img_name:x.img_name,id:x.id}})}const Nc=4*2,$c=4*16,ji=4*$c+2*Nc;function qc(o){return o.createBuffer({label:"camera uniform",size:ji,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const vn=new Float32Array(ji/Float32Array.BYTES_PER_ELEMENT),ys=class ys{constructor(r,l){R(this,"_renderSize",null);R(this,"uniform_buffer");R(this,"position",q.create());R(this,"rotation",ct.create());R(this,"zfar",100);R(this,"fovY",45/180*Math.PI);R(this,"fovX");R(this,"focalRatioX",1);R(this,"focal",_i.create());R(this,"viewport",_i.create());R(this,"view_matrix",ct.identity());R(this,"view_inv_matrix",ct.identity());R(this,"proj_matrix",ct.identity());R(this,"proj_inv_matrix",ct.identity());R(this,"_negPos",q.create());R(this,"look",q.create(0,0,1));R(this,"up",q.create(0,1,0));R(this,"right",q.create(1,0,0));this.canvas=r,this.device=l,this.uniform_buffer=l?qc(l):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(r,l){this._renderSize=[r,l],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const r=this._renderSize?this._renderSize[0]:this.canvas.width,l=this._renderSize?this._renderSize[1]:this.canvas.height,x=.5*l/Math.tan(this.fovY*.5);this.focal[0]=x*this.focalRatioX,this.focal[1]=x,this.fovX=Oc(this.focal[0],r),this.viewport[0]=r,this.viewport[1]=l,this.proj_matrix=Vc(.01,this.zfar,this.fovX,this.fovY),ct.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ct.copy(this.rotation,this.view_matrix),ct.translate(this.view_matrix,this._negPos,this.view_matrix),ct.inverse(this.view_matrix,this.view_inv_matrix),q.transformMat4Upper3x3(ys.Z_AXIS,this.view_inv_matrix,this.look),q.normalize(this.look,this.look),q.cross(this.up,this.look,this.right),q.normalize(this.right,this.right);let r=0;vn.set(this.view_matrix,r),r+=16,vn.set(this.view_inv_matrix,r),r+=16,vn.set(this.proj_matrix,r),r+=16,vn.set(this.proj_inv_matrix,r),r+=16,vn.set(this.viewport,r),r+=2,vn.set(this.focal,r),r+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,vn)}set_preset(r){q.copy(r.position,this.position),ct.copy(r.rotation,this.rotation),this.update_buffer()}setFov(r){this.fovY=r,this.on_update_canvas()}setFocalRatio(r){this.focalRatioX=r,this.on_update_canvas()}getFov(){return this.fovY}};R(ys,"Z_AXIS",q.create(0,0,1));let ws=ys;const Wc=q.create(1,0,0),Kc=q.create(0,1,0),jc=q.create(0,0,1);function Hc(o,r){const l=o[0],x=o[4],_=o[8],b=o[1],M=o[5],B=o[9],C=o[2],A=o[6],N=o[10],F=l+M+N;let L,W,oe,z;if(F>0){const G=.5/Math.sqrt(F+1);L=.25/G,W=(A-B)*G,oe=(_-C)*G,z=(b-x)*G}else if(l>M&&l>N){const G=2*Math.sqrt(1+l-M-N);L=(A-B)/G,W=.25*G,oe=(x+b)/G,z=(_+C)/G}else if(M>N){const G=2*Math.sqrt(1+M-l-N);L=(_-C)/G,W=(x+b)/G,oe=.25*G,z=(B+A)/G}else{const G=2*Math.sqrt(1+N-l-M);L=(b-x)/G,W=(_+C)/G,oe=(B+A)/G,z=.25*G}return r[0]=W,r[1]=oe,r[2]=z,r[3]=L,r}class Hi{constructor(r){R(this,"element");R(this,"enabled",!0);R(this,"center",q.create(0,0,0));R(this,"up",q.create(0,1,0));R(this,"rotation",[0,0]);R(this,"shift",[0,0]);R(this,"scroll",0);R(this,"speed",.1);R(this,"sensitivity",.08);R(this,"leftPressed",!1);R(this,"rightPressed",!1);R(this,"leftDragPans",!1);R(this,"lastX",0);R(this,"lastY",0);R(this,"touches",new Map);R(this,"lastTouchCenter",null);R(this,"lastPinchDistance",null);R(this,"lastTwoFingerAngle",null);R(this,"lastTouchCount",0);R(this,"roll",0);R(this,"_dir",q.create());R(this,"_right",q.create());R(this,"_upCam",q.create());R(this,"_scratch",q.create());R(this,"_qY",at.create());R(this,"_qX",at.create());R(this,"_qRot",at.create());R(this,"_qZ",at.create());R(this,"_qLocal",at.create());R(this,"_qWorldToCam",at.create());R(this,"_scratchMat3",Pt.create());R(this,"bboxMin",null);R(this,"bboxMax",null);R(this,"anchor",q.create(0,0,0));R(this,"downCallback",r=>{var l,x,_,b;if(this.enabled){if(r.pointerType==="touch"){this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),(x=(l=r.target)==null?void 0:l.setPointerCapture)==null||x.call(l,r.pointerId),r.preventDefault();return}r.isPrimary&&(r.button===0?(this.leftPressed=!0,this.leftDragPans=r.shiftKey):r.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=r.pageX,this.lastY=r.pageY,(b=(_=r.target)==null?void 0:_.setPointerCapture)==null||b.call(_,r.pointerId),r.preventDefault())}});R(this,"moveCallback",r=>{if(!this.enabled)return;if(r.pointerType==="touch"){if(!this.touches.has(r.pointerId))return;this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),r.preventDefault();return}if(!r.isPrimary||!this.leftPressed&&!this.rightPressed)return;r.preventDefault();const l=r.pageX-this.lastX,x=r.pageY-this.lastY;this.lastX=r.pageX,this.lastY=r.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=l,this.rotation[1]-=x):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=l,this.shift[0]+=x)});R(this,"upCallback",r=>{var l,x,_,b;if(r.pointerType==="touch"){this.touches.delete(r.pointerId),this.handleTouchGestures(),(x=(l=r.target)==null?void 0:l.releasePointerCapture)==null||x.call(l,r.pointerId),r.preventDefault();return}r.button===0?this.leftPressed=!1:r.button===2?this.rightPressed=!1:this.rightPressed=!1,(b=(_=r.target)==null?void 0:_.releasePointerCapture)==null||b.call(_,r.pointerId),r.preventDefault()});R(this,"wheelCallback",r=>{if(!this.enabled||(r.preventDefault(),this.rightPressed))return;let l=r.deltaY;r.deltaMode===1?l*=16:r.deltaMode===2&&(l*=100),this.scroll+=l*.01});this.camera=r,this.registerElement(r.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const r=this.bboxMax[0]-this.bboxMin[0],l=this.bboxMax[1]-this.bboxMin[1],x=this.bboxMax[2]-this.bboxMin[2],_=.5*Math.sqrt(r*r+l*l+x*x);return _>1e-6?_:null}addRoll(r){this.roll+=r}registerElement(r){this.element&&this.element!==r&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=r,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",l=>l.preventDefault())}setCenter(r){q.copy(r,this.center),q.copy(r,this.anchor)}setOrbitPivot(r){q.set(r[0],r[1],r[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(r){if(!isFinite(r)||r<.001)return;const l=this.camera.rotation;q.set(l[2],l[6],l[10],this._dir),q.normalize(this._dir,this._dir),q.scale(this._dir,r,this._dir),q.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const r=this.camera;if(q.subtract(this.center,r.position,this._scratch),q.length(this._scratch)<1e-6)return;q.normalize(this._scratch,this._scratch),q.cross(this.up,this._scratch,this._right),q.length(this._right)<1e-6&&q.set(1,0,0,this._right),q.normalize(this._right,this._right),q.cross(this._scratch,this._right,this._upCam),q.normalize(this._upCam,this._upCam);const l=r.rotation;l[0]=this._right[0],l[1]=this._upCam[0],l[2]=this._scratch[0],l[3]=0,l[4]=this._right[1],l[5]=this._upCam[1],l[6]=this._scratch[1],l[7]=0,l[8]=this._right[2],l[9]=this._upCam[2],l[10]=this._scratch[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,r.update_buffer()}setBbox(r,l){this.bboxMin=q.create(r[0],r[1],r[2]),this.bboxMax=q.create(l[0],l[1],l[2]);const x=(r[0]+l[0])*.5,_=(r[1]+l[1])*.5,b=(r[2]+l[2])*.5;q.set(x,_,b,this.center),q.set(x,_,b,this.anchor)}resetToCamera(){const r=this.camera.rotation;q.set(r[2],r[6],r[10],this._dir),q.normalize(this._dir,this._dir);let l=null;if(this.bboxMin&&this.bboxMax){let x=-1/0,_=1/0,b=!1;for(let M=0;M<3;M++){const B=this._dir[M],C=this.bboxMin[M]-this.camera.position[M],A=this.bboxMax[M]-this.camera.position[M];if(Math.abs(B)>1e-8){const N=C/B,F=A/B;x=Math.max(x,Math.min(N,F)),_=Math.min(_,Math.max(N,F))}else if(C>0||A<0){b=!0;break}}!b&&x<=_&&_>0&&(l=(Math.max(x,0)+_)*.5)}if(l===null||!isFinite(l)||l<.001){q.subtract(this.anchor,this.camera.position,this._scratch);const x=q.dot(this._scratch,this._dir);l=x>.001?x:q.length(this._scratch)}l=Math.max(.1,l),q.scale(this._dir,l,this._dir),q.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const r=this.touches.size;if(r!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=r,r===1){const l=this.touches.values().next().value;if(this.lastTouchCenter){const x=l.x-this.lastTouchCenter[0],_=l.y-this.lastTouchCenter[1];this.rotation[0]+=x*.3,this.rotation[1]-=_*.3}this.lastTouchCenter=[l.x,l.y]}else if(r===2){const l=Array.from(this.touches.values()),x=(l[0].x+l[1].x)*.5,_=(l[0].y+l[1].y)*.5,b=l[1].x-l[0].x,M=l[1].y-l[0].y,B=Math.hypot(b,M),C=Math.atan2(M,b);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=x-this.lastTouchCenter[0],N=_-this.lastTouchCenter[1],F=Math.hypot(A,N),L=Math.abs(B-this.lastPinchDistance);let W=C-this.lastTwoFingerAngle;W>Math.PI&&(W-=2*Math.PI),W<-Math.PI&&(W+=2*Math.PI),F>.5&&(this.shift[1]-=A,this.shift[0]+=N),L>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(B/this.lastPinchDistance)*10),Math.abs(W)>.0087&&(this.roll+=W)}this.lastTouchCenter=[x,_],this.lastPinchDistance=B,this.lastTwoFingerAngle=C}}update(r){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const l=this.camera;{const G=l.rotation;this.up[0]=G[1],this.up[1]=G[5],this.up[2]=G[9],q.length(this.up)>1e-6?q.normalize(this.up,this.up):q.set(0,1,0,this.up)}let x=0,_=!1;Math.abs(this.roll)>1e-4&&(x=this.roll,this.roll=0,_=!0),q.subtract(l.position,this.center,this._dir);let b=q.length(this._dir);b<1e-6&&(b=1e-6);const M=Math.exp(Math.log(b)+this.scroll*r*10*this.speed);q.scale(this._dir,M/b,this._dir),b=M;const B=l.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],q.normalize(this._right,this._right),q.length(this._right)<1e-6&&q.set(1,0,0,this._right);const C=q.create(B[1],B[5],B[9]);q.normalize(C,C),q.length(C)<1e-6&&q.set(0,1,0,C);const A=r*this.speed*.1*b,N=this.shift[1]*A,F=-this.shift[0]*A;q.scale(this._right,N,this._scratch),q.add(this.center,this._scratch,this.center),q.add(l.position,this._scratch,l.position),q.scale(C,F,this._scratch),q.add(this.center,this._scratch,this.center),q.add(l.position,this._scratch,l.position);const L=this.rotation[0]*r*this.sensitivity,W=this.rotation[1]*r*this.sensitivity;if(Math.abs(L)>1e-5||Math.abs(W)>1e-5||_){const G=l.rotation;Hc(G,this._qWorldToCam),at.fromAxisAngle(Wc,-W,this._qX),at.fromAxisAngle(Kc,-L,this._qY),at.multiply(this._qX,this._qY,this._qLocal),_&&(at.fromAxisAngle(jc,1*x,this._qZ),at.multiply(this._qZ,this._qLocal,this._qLocal)),at.normalize(this._qLocal,this._qLocal),at.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),at.normalize(this._qWorldToCam,this._qWorldToCam),Pt.fromQuat(this._qWorldToCam,this._scratchMat3),ct.fromMat3(this._scratchMat3,l.rotation);const Y=l.rotation,V=Y[2],te=Y[6],$=Y[10];l.position[0]=this.center[0]-V*b,l.position[1]=this.center[1]-te*b,l.position[2]=this.center[2]-$*b,this.up[0]=Y[1],this.up[1]=Y[5],this.up[2]=Y[9],q.normalize(this.up,this.up)}else q.add(this.center,this._dir,l.position);l.update_buffer();const z=Math.pow(.8,r*60);this.rotation[0]*=z,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=z,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=z,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=z,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=z,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Yi(o){const r=q.create();for(const l of o)q.add(r,l,r);return q.scale(r,1/Math.max(o.length,1),r)}function Zi(o,r){const l=Pt.create();Pt.inverse(o,l);const x=q.create();return x[0]=l[0]*r[0]+l[4]*r[1]+l[8]*r[2],x[1]=l[1]*r[0]+l[5]*r[1]+l[9]*r[2],x[2]=l[2]*r[0]+l[6]*r[1]+l[10]*r[2],x}function Yc(o){const r=o.slice(),l=[1,0,0,0,1,0,0,0,1],x=(C,A)=>r[C*3+A],_=(C,A,N)=>{r[C*3+A]=N},b=(C,A)=>l[C*3+A],M=(C,A,N)=>{l[C*3+A]=N};for(let C=0;C<30;C++){let A=0,N=1,F=Math.abs(x(0,1));if(Math.abs(x(0,2))>F&&(A=0,N=2,F=Math.abs(x(0,2))),Math.abs(x(1,2))>F&&(A=1,N=2,F=Math.abs(x(1,2))),F<1e-12)break;const L=x(A,A),W=x(N,N),oe=x(A,N);let z;Math.abs(L-W)<1e-30?z=Math.PI/4*Math.sign(oe):z=.5*Math.atan2(2*oe,L-W);const G=Math.cos(z),Y=Math.sin(z);for(let V=0;V<3;V++){const te=x(V,A),$=x(V,N);_(V,A,G*te+Y*$),_(V,N,-Y*te+G*$)}for(let V=0;V<3;V++){const te=x(A,V),$=x(N,V);_(A,V,G*te+Y*$),_(N,V,-Y*te+G*$)}for(let V=0;V<3;V++){const te=b(V,A),$=b(V,N);M(V,A,G*te+Y*$),M(V,N,-Y*te+G*$)}}const B=[];for(let C=0;C<3;C++)B.push({val:x(C,C),vec:q.create(b(0,C),b(1,C),b(2,C))});return B.sort((C,A)=>A.val-C.val),{vals:[B[0].val,B[1].val,B[2].val],vecs:[B[0].vec,B[1].vec,B[2].vec]}}function Zc(o,r){const l=Yi(o);let x=0,_=0,b=0,M=0,B=0,C=0;for(const oe of o){const z=oe[0]-l[0],G=oe[1]-l[1],Y=oe[2]-l[2];x+=z*z,_+=z*G,b+=z*Y,M+=G*G,B+=G*Y,C+=Y*Y}const A=[x,_,b,_,M,B,b,B,C],{vecs:N}=Yc(A);let F=N[0],L=N[1],W=N[2];return q.dot(W,r)<0&&(q.scale(W,-1,W),q.scale(L,-1,L)),{centroid:l,normal:W,u:F,v:L}}function Xc(o){let r=0,l=0,x=0,_=0,b=0,M=0,B=0,C=0,A=0;for(const[G,Y]of o){const V=-2*G,te=-2*Y,$=1,le=-(G*G+Y*Y);r+=V*V,l+=V*te,x+=V*$,_+=te*te,b+=te*$,M+=$*$,B+=V*le,C+=te*le,A+=$*le}const N=Pt.create(r,l,x,l,_,b,x,b,M),F=Zi(N,q.create(B,C,A)),L=F[0],W=F[1],oe=F[2],z=L*L+W*W-oe;return{center:[L,W],radius:Math.sqrt(Math.max(z,1e-12))}}function Jc(o,r){let l=0,x=0,_=0,b=0,M=0,B=0,C=0,A=0,N=0;for(let L=0;L<o.length;L++){const W=o[L],oe=q.normalize(r[L],q.create()),z=1-oe[0]*oe[0],G=-oe[0]*oe[1],Y=-oe[0]*oe[2],V=1-oe[1]*oe[1],te=-oe[1]*oe[2],$=1-oe[2]*oe[2];l+=z,x+=G,_+=Y,b+=V,M+=te,B+=$,C+=z*W[0]+G*W[1]+Y*W[2],A+=G*W[0]+V*W[1]+te*W[2],N+=Y*W[0]+te*W[1]+$*W[2]}const F=Pt.create(l,x,_,x,b,M,_,M,B);return Zi(F,q.create(C,A,N))}function Xi(o,r={}){if(o.length===0)return null;const l=r.tiltDownDeg??8,x=r.radiusScale??1,_=r.alignFirst??!0,b=(r.direction??"ccw")==="ccw"?1:-1,M=o.map(se=>q.clone(se.position)),B=o.map(se=>{const ae=se.rotation;return q.create(ae[8],ae[9],ae[10])}),C=o.map(se=>{const ae=se.rotation;return q.create(ae[4],ae[5],ae[6])}),A=Yi(C),N=q.normalize(q.scale(A,-1,q.create())),{centroid:F,normal:L,u:W,v:oe}=Zc(M,N),z=M.map(se=>{const ae=q.sub(se,F,q.create());return[q.dot(ae,W),q.dot(ae,oe)]}),{center:G,radius:Y}=Xc(z),V=Y*x,te=q.add(F,q.add(q.scale(W,G[0],q.create()),q.scale(oe,G[1],q.create()),q.create()),q.create()),$=Jc(M,B),le=V*Math.tan(l*Math.PI/180),he=q.sub($,q.scale(L,le,q.create()),q.create());let de=0;if(_){const se=q.sub(M[0],te,q.create());de=Math.atan2(q.dot(se,oe),q.dot(se,W))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${V.toFixed(2)}, tilt=${l}°, normal=[${L[0].toFixed(2)}, ${L[1].toFixed(2)}, ${L[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:te,radius:V,normal:L,u:W,v:oe,lookAt:he,startPhase:de,direction:b}}function Ji(o,r){const l=(o.startPhase+r*o.direction)*2*Math.PI,x=Math.cos(l),_=Math.sin(l),b=q.add(o.center,q.add(q.scale(o.u,o.radius*x,q.create()),q.scale(o.v,o.radius*_,q.create()),q.create()),q.create()),M=q.normalize(q.sub(o.lookAt,b,q.create())),B=q.cross(M,o.normal,q.create());q.length(B)<1e-6&&q.copy(o.u,B),q.normalize(B,B);const C=q.cross(M,B,q.create());q.normalize(C,C);const A=ct.create();return A[0]=B[0],A[1]=C[0],A[2]=M[0],A[3]=0,A[4]=B[1],A[5]=C[1],A[6]=M[1],A[7]=0,A[8]=B[2],A[9]=C[2],A[10]=M[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:b,rotation:A,img_name:`orbit_${(r*1e3).toFixed(0)}`,id:0}}function Qc(o,r={}){const l=Xi(o,r);if(!l)return[];const x=r.numViews??120;return Array.from({length:x},(_,b)=>({...Ji(l,b/x),img_name:`circle_${b.toString().padStart(4,"0")}`,id:b}))}const Qi="halloumi.renderer";function eu(){const o=new URLSearchParams(window.location.search).get("renderer"),r=o==="webgl"||o==="webgpu"?o:null;let l=null;try{const x=localStorage.getItem(Qi);(x==="webgl"||x==="webgpu")&&(l=x)}catch{}return{forced:r,stored:l}}function eo(o){try{localStorage.setItem(Qi,o)}catch{}const r=new URLSearchParams(window.location.search);r.set("renderer",o),window.location.search=r.toString()}function Yt(o){const r=(o&32768)>>15,l=(o&31744)>>10,x=o&1023;return l===0?(r?-1:1)*Math.pow(2,-14)*(x/1024):l===31?x?NaN:r?-1/0:1/0:(r?-1:1)*Math.pow(2,l-15)*(1+x/1024)}function rr(o,r,l,x,_,b,M,B,C,A=.5){const N=C?C.length:M.length/8,F=[],L=[];for(let z=0;z<N;z++){const Y=(C?C[z]:z)*8,V=M[Y]-o,te=M[Y+1]-r,$=M[Y+2]-l,le=V*x+te*_+$*b;if(le<=0||!(B[Y+7]>>>16&1))continue;const he=B[Y+4],de=Yt(he&65535),se=Yt(he>>>16&65535),ae=3*Math.max(de,se),Te=V-le*x,ie=te-le*_,re=$-le*b;if(Te*Te+ie*ie+re*re>ae*ae)continue;const ge=Yt(B[Y+3]&65535);if(ge<1/255)continue;const Le=B[Y+5],ke=B[Y+6];let X=Yt(Le&65535),Z=Yt(Le>>>16&65535),j=Yt(ke&65535),J=Yt(ke>>>16&65535);const ve=Math.hypot(X,Z,j,J)||1;X/=ve,Z/=ve,j/=ve,J/=ve;const ze=1-2*(j*j+J*J),we=2*(Z*j+X*J),Be=2*(Z*J-X*j),ne=2*(Z*j-X*J),me=1-2*(Z*Z+J*J),xe=2*(j*J+X*Z),D=2*(Z*J+X*j),K=2*(j*J-X*Z),g=1-2*(Z*Z+j*j),a=x*D+_*K+b*g;if(Math.abs(a)<1e-6)continue;const u=(V*D+te*K+$*g)/a;if(!(u>0))continue;const d=u*x-V,w=u*_-te,P=u*b-$,k=(d*ze+w*we+P*Be)/(de||1e-6),E=(d*ne+w*me+P*xe)/(se||1e-6),i=k*k+E*E;if(i>9)continue;const v=Math.min(.99,ge*Math.exp(-.5*i));v<1/255||(F.push(u),L.push(v))}if(F.length===0)return null;const W=F.map((z,G)=>G).sort((z,G)=>F[z]-F[G]);let oe=1;for(const z of W)if(oe*=1-L[z],oe<A)return F[z];return null}function xs(o,r,l){const x=(o-l.viewport[0]*.5)/l.focal[0],_=-((r-l.viewport[1]*.5)/l.focal[1]),b=l.rotation;let M=x*b[0]+_*b[1]+b[2],B=x*b[4]+_*b[5]+b[6],C=x*b[8]+_*b[9]+b[10];const A=Math.hypot(M,B,C)||1;return[M/A,B/A,C/A]}function ir(o,r,l,x,_,b){const[M,B,C]=xs(o,r,x),A=x.position[0],N=x.position[1],F=x.position[2],L=new Uint32Array(_.buffer,_.byteOffset,_.length);let W=rr(A,N,F,M,B,C,_,L,null,.5);return W===null&&(W=rr(A,N,F,M,B,C,_,L,null,.8)),W===null?null:[A+W*M,N+W*B,F+W*C]}function to(o,r){const l=o.viewport[0],x=o.viewport[1],_=new Uint32Array(r.buffer,r.byteOffset,r.length),b=o.position[0],M=o.position[1],B=o.position[2],[C,A,N]=xs(l*.5,x*.5,o),F=.06*Math.max(l,x),L=(F+2)/o.focal[0],W=r.length/8,oe=[];for(let V=0;V<W;V++){const te=V*8,$=r[te]-b,le=r[te+1]-M,he=r[te+2]-B,de=$*C+le*A+he*N;if(de<=0)continue;const se=_[te+4],ae=3*Math.max(Yt(se&65535),Yt(se>>>16&65535)),Te=$-de*C,ie=le-de*A,re=he-de*N,ge=de*L+ae;Te*Te+ie*ie+re*re<=ge*ge&&oe.push(V)}if(oe.length===0)return null;const z=Int32Array.from(oe),G=[],Y=5;for(let V=0;V<Y;V++)for(let te=0;te<Y;te++){const $=l*.5+(te-(Y-1)/2)/((Y-1)/2)*F,le=x*.5+(V-(Y-1)/2)/((Y-1)/2)*F,[he,de,se]=xs($,le,o),ae=rr(b,M,B,he,de,se,r,_,z,.5);ae!==null&&G.push(ae*(he*C+de*A+se*N))}return G.length<3?null:(G.sort((V,te)=>V-te),G[G.length>>1])}function tu(o){return new Promise(r=>{const l=document.createElement("input");l.type="file",l.accept=o,l.style.display="none",l.onchange=()=>{var x;return r(((x=l.files)==null?void 0:x[0])??null)},document.body.appendChild(l),l.click(),setTimeout(()=>document.body.removeChild(l),1e3)})}function nu(o,r,l){const x=document.getElementById("ui-panel-container"),_=document.getElementById("load-button"),b=document.getElementById("quick-links");_&&(_.onclick=async()=>{const A=await tu(".ply,.bitymi");if(A)if(x&&(x.style.display="none"),A.name.toLowerCase().endsWith(".bitymi")){const N=await A.arrayBuffer(),{pcBuffer:F}=ar(N),L=new File([F],A.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),W=await Js(L,o);r(W)}else{const N=await Js(A,o);r(N)}}),b&&(b.innerHTML="");const M=new URLSearchParams(window.location.search),B=M.get("bundle")??M.get("model_url"),C=M.get("camera_url");B&&(x&&(x.style.display="none"),l(B,C))}async function su(o,r,l,x){const _=new ws(o,l),b=new Hi(_);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const B=typeof window<"u"&&window.parent!==window,C={pos:new Float32Array(3),rot:new Float32Array(16)};if(B){window.addEventListener("message",X=>{const Z=X.data;if(!(!Z||Z.type!=="halloumi_sync_pose")&&!(!Array.isArray(Z.position)||Z.position.length!==3)&&!(!Array.isArray(Z.rotation)||Z.rotation.length!==16)){for(let j=0;j<3;j++)_.position[j]=Z.position[j];for(let j=0;j<16;j++)_.rotation[j]=Z.rotation[j];_.update_buffer(),b.resetToCamera();for(let j=0;j<3;j++)C.pos[j]=_.position[j];for(let j=0;j<16;j++)C.rot[j]=_.rotation[j]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const A=()=>{if(!B)return;const X=_.position,Z=_.rotation;let j=!1;for(let J=0;J<3;J++)if(Math.abs(X[J]-C.pos[J])>1e-6){j=!0;break}if(!j){for(let J=0;J<16;J++)if(Math.abs(Z[J]-C.rot[J])>1e-6){j=!0;break}}if(j){for(let J=0;J<3;J++)C.pos[J]=X[J];for(let J=0;J<16;J++)C.rot[J]=Z[J];try{window.parent.postMessage({type:"halloumi_camera_state",position:[X[0],X[1],X[2]],rotation:Array.from(Z)},"*")}catch{}}},N="rgba8unorm";r.configure({device:l,format:N,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let F=null,L=null;const W=()=>{_.on_update_canvas(),F!==null&&Mn(o.width,o.height,l,F.render_settings_buffer),L!==null&&L()};new ResizeObserver(()=>{const X=Math.max(.25,re.render_scale),Z=Math.max(1,Math.ceil(X*o.clientWidth)),j=Math.max(1,Math.ceil(X*o.clientHeight));o.width===Z&&o.height===j||(o.width=Z,o.height=j,W())}).observe(o);let z=0,G=0;const Y=()=>{(o.width!==z||o.height!==G)&&(z=o.width,G=o.height,W())},V=new URLSearchParams(window.location.search);let $=V.get("animation")==="1";b.enabled=!$;const le=V.get("camera_url"),he=V.get("bfc"),de=he==="1"||he==="true",se=V.get("bfc_cos"),ae=se!==null?Number(se):NaN,Te=Number.isFinite(ae)?ae:2,ie=Math.max(1,window.devicePixelRatio||1),re={msaa:!1,gaussian_scaling:1,sh_bias:.5,animate:$,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:de,bfc_cos:Te,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1},ge=new qi.Pane({title:"Config",expanded:!0});ge.addInput(re,"animate",{label:"Animate"}).on("change",X=>{const Z=$;$=X.value,b.enabled=!X.value,!Z&&$&&Le.value&&Le.value.onAnimateStart(),Z&&!$&&Le.value&&Le.value.onAnimateStop()}),ge.addInput(re,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};nu(l,X=>ke(X,[],null),async(X,Z)=>{let j=Z??le,J,ve=null;const ze=X.toLowerCase();if(ze.endsWith(".bitymi")||ze.includes(".bitymi?")){Xn("downloading bundle ...");try{const{bundle:xe}=await bs(X,(K,g,a)=>{const u=K/1048576,d=g?g/(1024*1024):void 0,w=a/(1024*1024),P=g?Math.min(99,Math.floor(K/g*100)):void 0,k=d?`total ${d.toFixed(1)} MB`:"total -- MB",E=d&&P!==void 0?`${u.toFixed(1)} MB downloaded (${P}%)`:`${u.toFixed(1)} MB downloaded`,i=`${w.toFixed(2)} MB/s`;Ct(`downloading bundle ...
${k}, ${E}
${i}`)});if(!xe)throw new Error("Expected a .bitymi bundle");Ct("parsing PLY ...");const D=new File([xe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(J=await Js(D,l),!j&&xe.camerasBuffer&&(j=URL.createObjectURL(new Blob([xe.camerasBuffer],{type:"application/json"}))),xe.atlasBuffer){const K=xe.atlasBuffer.byteLength/1048576;Ct(`uploading atlas ...
${K.toFixed(1)} MB BC7`);try{const g=ms(xe.atlasBuffer);ve=bi(l,g,!0)}catch(g){console.warn("[atlas] failed to parse/upload atlas:",g)}}}catch(xe){throw wn(),xe}}else J=await hc(X,l);let we=null,Be="";const ne=V.get("atlas2");if(ne)try{const{bundle:xe}=await bs(ne,(D,K)=>{Ct(`downloading second atlas ...
${(D/1048576).toFixed(1)}${K?` / ${(K/1048576).toFixed(1)}`:""} MB`)});if(!(xe!=null&&xe.atlasBuffer))throw new Error("second bundle has no atlas chunk");Ct("uploading second atlas ..."),we=bi(l,ms(xe.atlasBuffer),!0),we||(Be="second atlas: format unsupported on this device")}catch(xe){console.warn("[atlas2] failed:",xe),Be=`second atlas failed: ${xe}`}const me=j?await sr(j):[];me.length>0&&_.set_preset(me[0]),ke(J,me,ve,we,Be)});function ke(X,Z=[],j=null,J=null,ve=""){const ze=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];b.setBbox(X.bbox.min,X.bbox.max),.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function we(I,ee){const fe=ir(I,ee,o,_,X.surfel_data);fe&&(b.setOrbitPivot(fe),console.log(`[pick] orbit pivot → (${fe[0].toFixed(3)}, ${fe[1].toFixed(3)}, ${fe[2].toFixed(3)})`))}function Be(){const I=to(_,X.surfel_data);if(I!==null&&I>.001){b.setOrbitDepth(I);return}const ee=_.rotation,fe=ee[2],be=ee[6],Ae=ee[10],Se=(X.centroid[0]-_.position[0])*fe+(X.centroid[1]-_.position[1])*be+(X.centroid[2]-_.position[2])*Ae;Se>.001&&b.setOrbitDepth(Se)}if(Z.length===0){const I=X.bbox.max[0]-X.bbox.min[0],ee=X.bbox.max[1]-X.bbox.min[1],fe=X.bbox.max[2]-X.bbox.min[2],Ae=.5*Math.sqrt(I*I+ee*ee+fe*fe)*.5;q.set(ze[0]-Ae,ze[1]-Ae,ze[2]-Ae,_.position);const Se=q.create(Ae,Ae,Ae);q.normalize(Se,Se);const Ee=q.create(0,1,0),Re=q.create();q.cross(Ee,Se,Re),q.normalize(Re,Re);const nt=q.create();q.cross(Se,Re,nt);const ft=Pt.create(Re[0],nt[0],Se[0],Re[1],nt[1],Se[1],Re[2],nt[2],Se[2]);ct.fromMat3(ft,_.rotation),_.update_buffer()}b.setCenter(q.create(X.centroid[0],X.centroid[1],X.centroid[2]));const ne=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),me="halloumi.fetch_by_id";let xe=null;try{const I=localStorage.getItem(me);(I==="0"||I==="1")&&(xe=I==="1")}catch{}const D=V.get("byid"),K={fetchById:D!==null?D==="1":xe!==null?xe:!ne,octBound:V.get("oct")==="1",acc16:V.get("acc16")==="1"},g=new nr(X,l,N,_.uniform_buffer,x,j,K),a=V.get("surfel_math");re.surfel_math=a==="raysplat"||a==="centred"?a:V.get("raysplat")==="1"?"raysplat":"conic",re.hyp_legacy=V.get("hyp_legacy")==="1",re.mip2d=V.get("mip2d")==="1";{const I=parseFloat(V.get("mip2d_k")??"");Number.isFinite(I)&&I>0&&(re.mip2d_k=I)}Ti(re.mip2d,re.mip2d_k,l,g.render_settings_buffer),Hn({hypLegacy:re.hyp_legacy,raysplat:re.surfel_math==="raysplat",centred:re.surfel_math==="centred"},l,g.render_settings_buffer),re.legacy_renderer=V.get("legacy")==="1",re.legacy_renderer&&g.setLegacyRenderer(!0),re.two_pass=V.get("twopass")==="1";{const I=parseFloat(V.get("opaque_t")??"");Number.isFinite(I)&&(re.opaque_thresh=Math.min(.99,Math.max(.01,I)))}g.setOpaqueThresh(re.opaque_thresh),re.two_pass&&g.setTwoPass(!0);{const I=V.get("overdraw");(I==="shaded"||I==="raster"||I==="1")&&(re.overdraw=I==="raster"?"raster":"shaded");const ee=parseInt(V.get("overdraw_max")??"",10);Number.isFinite(ee)&&ee>0&&(re.overdraw_max=ee)}g.setOverdrawMax(re.overdraw_max),re.overdraw!=="off"&&g.setOverdrawMode(re.overdraw==="raster"?2:1),re.fetch_by_id=K.fetchById,console.log(`[render_2dgs] fetch_by_id=${K.fetchById} (source: ${D!==null?"?byid":xe!==null?"remembered":`handheld=${ne}`})`),F=g,Mn(o.width,o.height,l,g.render_settings_buffer),re.atlas_enabled=j!==null;{const I=X.surfel_data,ee=I.length/8;let fe=0,be=0,Ae=0;for(let Ee=0;Ee<ee;Ee++)fe+=I[Ee*8],be+=I[Ee*8+1],Ae+=I[Ee*8+2];const Se=ee>0?[fe/ee,be/ee,Ae/ee]:[0,0,0];g.setBfcParams(re.bfc_cos,Se),Hn({bfc:re.bfc},l,g.render_settings_buffer),console.log(`[bfc] flag=${re.bfc} cos=${re.bfc_cos} centroid=(${Se[0].toFixed(3)}, ${Se[1].toFixed(3)}, ${Se[2].toFixed(3)})`)}let u=!1;const d=(()=>{if(j!==null)return`${j.meta.format===2?"BC7":j.meta.format===3?"ASTC 4×4":j.meta.format===7?"BC7 codebook gather (typeD)":`format=${j.meta.format}`} ${j.meta.width}×${j.meta.height}, ${j.meta.n_layers} layers`;const I=l.features.has("texture-compression-bc"),ee=l.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(I?["BC7"]:[]).concat(ee?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",d),Ci(X.sh_bias,l,g.render_settings_buffer),ki(re.gaussian_scaling,l,g.render_settings_buffer),re.sh_bias=X.sh_bias;const w=X.num_points.toLocaleString(),P={stats:`${w} surfels · -- fps`};ge.addMonitor(P,"stats",{label:"Stats",interval:200});const k=.4,E=3,i=.3;let v=null,h=0,f=0;const c=at.create(),m=Pt.create();let S=Z.length>0?0:-1;const y={view:Z.length>0?`${S+1} / ${Z.length}: ${Z[S].img_name??S}`:"— no presets —"},U=document.createElement("span");function H(I){const ee=Pt.create(I[0],I[1],I[2],I[4],I[5],I[6],I[8],I[9],I[10]);return at.fromMat(ee)}function Q(I,ee){v={fromPos:q.clone(_.position),toPos:q.clone(I.position),fromQuat:at.normalize(H(_.rotation)),toQuat:at.normalize(H(I.rotation)),target:I,t:0,duration:Math.max(.01,ee)}}const _e=(I,ee=!0)=>{if(Z.length===0)return;S=(I%Z.length+Z.length)%Z.length;const fe=Z[S];ee?Q(fe,k):(_.set_preset(fe),b.resetToCamera(),Be()),y.view=`${S+1} / ${Z.length}: ${Z[S].img_name??S}`,U.textContent=y.view};if(Z.length>0){const I=ge.addSeparator(),ee=document.createElement("div");ee.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const fe=(Ae,Se,Ee)=>{const Re=document.createElement("button");return Re.className="tp-btnv_b",Re.textContent=Ae,Re.title=Se,Re.style.cssText="flex:0 0 34px;height:24px;padding:0;",Re.addEventListener("click",Ee),Re};U.textContent=y.view,U.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",ee.appendChild(fe("◀","previous view (←)",()=>_e(S-1))),ee.appendChild(U),ee.appendChild(fe("▶","next view (→)",()=>_e(S+1))),(ge.element.querySelector(".tp-rotv_c")??ge.element).insertBefore(ee,I.element),I.dispose()}const pe=Z.length>0?Xi(Z,{tiltDownDeg:15,alignFirst:!0}):null,ce=pe?Qc(Z,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ye=0;const De=12;Le.value={onAnimateStart:()=>{ye=0},onAnimateStop:()=>{b.resetToCamera(),Be()}},ge.addInput(re,"render_scale",{label:"Render scale",min:.25,max:ie,step:.25}).on("change",I=>{const ee=Math.max(.25,I.value),fe=Math.max(1,Math.ceil(ee*o.clientWidth)),be=Math.max(1,Math.ceil(ee*o.clientHeight));(o.width!==fe||o.height!==be)&&(o.width=fe,o.height=be,W())});const Pe={res:""},Ce=()=>{const I=o.width*o.height/1e6;Pe.res=`${o.width}×${o.height}  (${I.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${ie.toFixed(2)} · native ${Math.round(o.clientWidth*ie)}×${Math.round(o.clientHeight*ie)}`};Ce(),L=Ce,ge.addMonitor(Pe,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ge.addInput(re,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",I=>ki(I.value,l,g.render_settings_buffer)),ge.addInput(re,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",I=>Ci(I.value,l,g.render_settings_buffer)),ge.addInput(re,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",I=>{g.bgColor=[I.value.r,I.value.g,I.value.b,I.value.a]});const Ie=I=>I===null?"":I.meta.format===3||I.meta.format===8||I.meta.format===10?" (ASTC)":" (BC7)";let Me=Ie(j);const Ne=ge.addInput(re,"atlas_enabled",{label:`Texture${Me}`}).on("change",I=>{g.setAtlasEnabled(I.value),je()}),Oe=document.createElement("button");Oe.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const je=()=>{Oe.textContent=`Texture${Me}: ${re.atlas_enabled?"ON":"OFF"}`,Oe.style.borderColor=re.atlas_enabled?"#f0b060":"#444",Oe.style.color=re.atlas_enabled?"#f0b060":"#bbb"},Qe=()=>{re.atlas_enabled=!re.atlas_enabled,g.setAtlasEnabled(re.atlas_enabled),Ne.refresh(),je()};if(Oe.title="toggle the baked texture (T)",Oe.addEventListener("click",Qe),j&&document.body.appendChild(Oe),je(),j&&(J||ve))if(J){const I={};I[`A${Ie(j)} · bundle`]="A",I[`B${Ie(J)} · atlas2`]="B";const ee={atlas:"A"};ge.addInput(ee,"atlas",{label:"Atlas source",options:I}).on("change",fe=>{const be=fe.value==="B"?J:j;g.setAtlas(be),Me=Ie(be),Ne.label=`Texture${Me}`,je(),console.log(`[atlas2] now sampling ${fe.value}${Me}`)})}else{const I={note:ve};ge.addMonitor(I,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const Ze=j!==null&&(j.meta.probe_mode|0)>0;if(g.hasMips&&Ze)g.setMipMode(re.mips),ge.addInput(re,"mips",{label:"Mips (trilinear)"}).on("change",I=>g.setMipMode(I.value));else if(g.hasMips){const I=V.get("mipbias"),ee={mode:I==="0"||I==="1"||I==="2"?I:"off"},fe=be=>{be==="off"?g.setMipMode(!1):(g.setMipLodBias(Number(be)),g.setMipMode(!0)),console.log(`[mips] ${be==="off"?"off (level 0 only)":`on, bias ${be}`}`)};fe(ee.mode),ge.addInput(ee,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",be=>fe(be.value))}const He=ge.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});He.addInput(re,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",I=>Hn({raysplat:I.value==="raysplat",centred:I.value==="centred"},l,g.render_settings_buffer));const Xe=globalThis.__gpuAdapterInfo??{},lt={s:`${Xe.vendor??"?"} / ${Xe.architecture??"?"}
${Xe.device||Xe.description||"?"}`};He.addMonitor(lt,"s",{label:"GPU",multiline:!0,lineCount:2}),He.addInput(re,"mip2d",{label:"Mip 2D filter"}).on("change",I=>Ti(I.value,re.mip2d_k,l,g.render_settings_buffer)),He.addInput(re,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",I=>Hn({hypLegacy:I.value},l,g.render_settings_buffer)),He.addInput(re,"two_pass",{label:"Two-pass (layer)"}).on("change",I=>g.setTwoPass(I.value)),He.addInput(re,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",I=>g.setOpaqueThresh(I.value)),He.addInput(re,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",I=>g.setOverdrawMode(I.value==="shaded"?1:I.value==="raster"?2:0)),He.addInput(re,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",I=>g.setOverdrawMax(I.value));const st={s:"—"};He.addMonitor(st,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(g.overdrawModeValue===0){st.s="—";return}g.readOverdrawStats().then(I=>{I&&(st.s=`mean ${I.mean.toFixed(1)} frag/px · ${I.meanCovered.toFixed(1)} on covered
max ${I.max} · covered ${(I.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(I=>console.warn("[overdraw] readback failed:",I))},500),ge.addInput(re,"legacy_renderer",{label:"Legacy renderer"}).on("change",I=>g.setLegacyRenderer(I.value)),ge.addInput(re,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",I=>{g.setFetchById(I.value);try{localStorage.setItem("halloumi.fetch_by_id",I.value?"1":"0")}catch{}}),ge.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>eo("webgl")),re.msaa=V.get("msaa")==="1",re.msaa&&g.setMsaa(!0),ge.addInput(re,"msaa",{label:"MSAA 4×"}).on("change",I=>g.setMsaa(I.value));const et={aspect:"canvas"},Je=ge.addFolder({title:"📸 Screenshot",expanded:!1});Je.addInput(et,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const qe={s:"pick a size to capture"};Je.addMonitor(qe,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const rt=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let $e=null;function tt(I){let ee;if(et.aspect==="canvas")ee=o.width/o.height;else{const[Ee,Re]=et.aspect.split(":").map(Number);ee=Ee/Re}const fe=l.limits.maxTextureDimension2D;let be,Ae;if(I==="canvas"&&et.aspect==="canvas")be=o.width,Ae=o.height;else{const Ee=I==="canvas"?Math.max(o.width,o.height):I;ee>=1?(be=Ee,Ae=Math.round(Ee/ee)):(Ae=Ee,be=Math.round(Ee*ee))}const Se=Math.min(1,fe/Math.max(be,Ae));return be=Math.max(2,Math.round(be*Se)&-2),Ae=Math.max(2,Math.round(Ae*Se)&-2),[be,Ae]}function it(I,ee){const fe=URL.createObjectURL(I),be=document.createElement("a");be.href=fe,be.download=ee,document.body.appendChild(be),be.click(),be.remove(),setTimeout(()=>URL.revokeObjectURL(fe),1e4)}async function Dt(I,ee){var Ee;const fe=(I.size/1048576).toFixed(1),be=window;if(typeof be.showSaveFilePicker=="function")try{const Re=await be.showSaveFilePicker({suggestedName:ee,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),nt=await Re.createWritable();return await nt.write(I),await nt.close(),`saved ${Re.name??ee} (${fe} MB) where you chose`}catch(Re){if((Re==null?void 0:Re.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ae=new File([I],ee,{type:"image/png"}),Se=navigator;if(Se.share&&((Ee=Se.canShare)!=null&&Ee.call(Se,{files:[Ae]})))try{return await Se.share({files:[Ae],title:ee}),`shared ${ee} (${fe} MB) via share sheet`}catch(Re){if((Re==null?void 0:Re.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return it(I,ee),`downloaded ${ee} (${fe} MB) to your browser's Downloads folder`}async function bt(I){if(u)return;const[ee,fe]=tt(I);qe.s=`rendering ${ee}×${fe}…`;const be=o.width,Ae=o.height;_.setRenderSize(ee,fe),Mn(ee,fe,l,g.render_settings_buffer);const Se=l.createTexture({size:[ee,fe,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),Ee=Math.ceil(ee*4/256)*256,Re=l.createBuffer({size:Ee*fe,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),nt=l.createCommandEncoder({label:"screenshot"});g.frame(nt,Se.createView(),!1),nt.copyTextureToBuffer({texture:Se},{buffer:Re,bytesPerRow:Ee,rowsPerImage:fe},[ee,fe,1]),l.queue.submit([nt.finish()]),_.clearRenderSize(),Mn(be,Ae,l,g.render_settings_buffer);try{await Re.mapAsync(GPUMapMode.READ);const ft=new Uint8Array(Re.getMappedRange()),St=new Uint8ClampedArray(ee*fe*4);for(let xt=0;xt<fe;xt++)St.set(ft.subarray(xt*Ee,xt*Ee+ee*4),xt*ee*4);for(let xt=3;xt<St.length;xt+=4)St[xt]=255;Re.unmap();const Tt=document.createElement("canvas");Tt.width=ee,Tt.height=fe,Tt.getContext("2d").putImageData(new ImageData(St,ee,fe),0,0);const Bt=await new Promise((xt,$t)=>Tt.toBlob(yt=>yt?xt(yt):$t(new Error("toBlob failed")),"image/png")),It=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),dt=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),cn=`${It}_${ee}x${fe}_${dt}.png`;$e={blob:Bt,name:cn},qe.s=await Dt(Bt,cn)}catch(ft){console.error("[screenshot]",ft),qe.s=`failed: ${ft}`}finally{Re.destroy(),Se.destroy()}}{const I=document.createElement("div");I.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const ee=(be,Ae,Se)=>{const Ee=document.createElement("button");Ee.className="tp-btnv_b",Ee.textContent=be,Ee.title=Ae,Ee.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",Ee.addEventListener("click",Se),I.appendChild(Ee)};ee("Canvas","current canvas size",()=>{bt("canvas")});for(const[be,Ae]of rt)ee(be,`${Ae} px long edge`,()=>{bt(Ae)});(Je.element.querySelector(".tp-fldv_c")??Je.element).appendChild(I)}Je.addButton({title:"⬇ Download last"}).on("click",()=>{if(!$e){qe.s="nothing captured yet";return}it($e.blob,$e.name),qe.s=`downloaded ${$e.name} to your browser's Downloads folder`}),ge.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(Z.length>0)_.set_preset(Z[0]);else{const I=X.bbox.max[0]-X.bbox.min[0],ee=X.bbox.max[1]-X.bbox.min[1],fe=X.bbox.max[2]-X.bbox.min[2],Ae=.5*Math.sqrt(I*I+ee*ee+fe*fe)*.5;q.set(ze[0]-Ae,ze[1]-Ae,ze[2]-Ae,_.position);const Se=q.create(Ae,Ae,Ae);q.normalize(Se,Se);const Ee=q.create();q.cross(q.create(0,1,0),Se,Ee),q.normalize(Ee,Ee);const Re=q.create();q.cross(Se,Ee,Re);const nt=Pt.create(Ee[0],Re[0],Se[0],Ee[1],Re[1],Se[1],Ee[2],Re[2],Se[2]);ct.fromMat3(nt,_.rotation),_.update_buffer()}b.resetToCamera(),Be()});const gt={result:"— click Benchmark —"},wt=ge.addMonitor(gt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});wt.hidden=!0;const At={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function zt(){const ee=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const fe of Object.keys(At))if(ee.startsWith(fe))return fe;return null}const mt=document.createElement("div");mt.id="bench-overlay",mt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(mt);function Lt(I,ee,fe){const be=Math.floor(ee/Math.max(1,fe)*100),Ae=32,Se=Math.floor(ee/Math.max(1,fe)*Ae),Ee="█".repeat(Se)+"░".repeat(Ae-Se);mt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${I}</div><div>[${Ee}] ${be}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ee} / ${fe} frames · offscreen · pipelined · no vsync</div>`,mt.style.display="block"}function Ut(){mt.style.display="none"}async function Ot(I=10,ee=200){if(u)return;if(Z.length===0){gt.result="no cameras to benchmark";return}u=!0;const fe=$,be=re.animate,Ae=new Float32Array(_.position),Se=new Float32Array(_.rotation);$=!1,re.animate=!1,ge.refresh(),v=null,b.enabled=!1;const Ee=zt(),Re=Ee?At[Ee]:null,nt=(Re==null?void 0:Re.w)??o.width,ft=(Re==null?void 0:Re.h)??o.height,St=(Re==null?void 0:Re.fovY)??_.getFov(),Tt=Ee?`${Ee} · ${nt>=4e3/4+500?"images_4":"images_2"}`:"custom",Bt=o.width,It=o.height,dt=_.getFov();o.width=nt,o.height=ft,_.setFov(St),Mn(nt,ft,l,g.render_settings_buffer);const cn=l.createTexture({size:[nt,ft,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),xt=cn.createView(),$t=()=>{const vt=l.createCommandEncoder();g.frame(vt,xt,!1),l.queue.submit([vt.finish()])},yt=()=>new Promise(vt=>setTimeout(vt,0)),Xt=20,Jt=async(vt,Gt)=>{let Qt=0,qt=0;for(Lt(Gt,0,vt),await yt();qt<vt;){const Ft=Math.min(Xt,vt-qt),un=performance.now();for(let Sn=0;Sn<Ft;Sn++)_.set_preset(Z[(qt+Sn)%Z.length]),$t();await l.queue.onSubmittedWorkDone();const Es=performance.now();Qt+=Es-un,qt+=Ft,Lt(Gt,qt,vt),await yt()}return Qt};try{await Jt(I,"Warming up");const Gt=await Jt(ee,"Benchmarking")/ee,Qt=1e3/Gt,qt=X.num_points??X.surfel_data.length/8,Ft=(St*180/Math.PI).toFixed(1),un=`${Qt.toFixed(1)} FPS  (${Gt.toFixed(2)} ms/frame)
${nt}×${ft} · fovY ${Ft}° · ${Tt}
${qt.toLocaleString()} surfels · ${I}w+${ee}b · pipelined`+(g.hasMips?` · ${g._mipMode?`mips bias ${g.mipLodBias}`:"mips off"}`:"");gt.result=un,wt.hidden=!1,console.log("[bench]",un.replace(/\n/g,"  |  "))}catch(vt){console.error("[bench] failed:",vt),gt.result=`bench failed: ${vt}`,wt.hidden=!1}finally{Ut(),cn.destroy(),o.width=Bt,o.height=It,_.setFov(dt),Mn(Bt,It,l,g.render_settings_buffer),_.position.set(Ae),_.rotation.set(Se),_.update_buffer(),b.enabled=!fe,$=fe,re.animate=be,ge.refresh(),u=!1}}ge.addButton({title:"📊 Benchmark"}).on("click",()=>Ot());const Zt=Math.PI/2,Fe=new Set,xn=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],zn=I=>{const ee=I.target;return!!ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.isContentEditable)},Un=()=>Fe.has("ShiftLeft")||Fe.has("ShiftRight");document.addEventListener("keyup",I=>{Fe.delete(I.code)}),window.addEventListener("blur",()=>Fe.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&Fe.clear()});const Ss=I=>{if(Fe.size===0||re.animate)return;const ee=Un()?3:1;let fe=0;Fe.has("KeyX")&&(fe+=1),Fe.has("KeyZ")&&(fe-=1),fe!==0&&(b.addRoll(fe*Zt*ee*I),v=null);const be=_.rotation,Ae=[be[0],be[4],be[8]],Se=[be[1],be[5],be[9]],Ee=[be[2],be[6],be[10]],Re=b.center,ft=(b.sceneRadius??Math.max(.05,q.distance(_.position,Re)))*.5*ee*I;let St=0,Tt=0,Bt=0;if(Fe.has("KeyW")&&(Bt+=1),Fe.has("KeyS")&&(Bt-=1),Fe.has("KeyD")&&(St+=1),Fe.has("KeyA")&&(St-=1),Fe.has("KeyE")&&(Tt+=1),Fe.has("KeyQ")&&(Tt-=1),!St&&!Tt&&!Bt)return;const It=[0,0,0];for(let dt=0;dt<3;dt++)It[dt]=(Ae[dt]*St+Se[dt]*Tt+Ee[dt]*Bt)*ft;for(let dt=0;dt<3;dt++)_.position[dt]+=It[dt],Re[dt]+=It[dt];_.update_buffer(),v=null};document.addEventListener("keydown",I=>{if(zn(I))return;const ee=I.key,fe=ee.toLowerCase();if(I.ctrlKey||I.metaKey||I.altKey){Fe.clear();return}if(xn.includes(I.code)&&!(I.shiftKey&&I.code==="KeyD")){Fe.add(I.code),I.preventDefault();return}if(fe==="t"){Qe();return}if(ee>="0"&&ee<="9"&&Z.length>0){const be=parseInt(ee);be<Z.length&&_e(be)}else ee==="ArrowLeft"||ee==="PageUp"?(_e(S-1),I.preventDefault()):ee==="ArrowRight"||ee==="PageDown"?(_e(S+1),I.preventDefault()):I.shiftKey&&fe==="d"&&g.debugReadSortedIndices(30).catch(be=>console.error("[DEBUG] readback failed:",be))});function Vt(I,ee){const fe=o.getBoundingClientRect(),be=window.devicePixelRatio||1;return[(I-fe.left)*be,(ee-fe.top)*be]}o.addEventListener("dblclick",I=>{const[ee,fe]=Vt(I.clientX,I.clientY);we(ee,fe)});let yn=0,Ln=0,ts=0;o.addEventListener("pointerdown",I=>{if(I.pointerType!=="touch")return;const ee=performance.now(),fe=ee-yn,be=I.clientX-Ln,Ae=I.clientY-ts;if(fe>0&&fe<300&&be*be+Ae*Ae<40*40){const[Se,Ee]=Vt(I.clientX,I.clientY);we(Se,Ee),yn=0}else yn=ee,Ln=I.clientX,ts=I.clientY});function In(){return M}let ns=performance.now(),Nt=60,ss=Promise.resolve(),Pn=0;async function ln(){var Ae;const I=performance.now(),ee=Math.min((I-ns)/1e3,.1);if(ns=I,ee>0){const Se=((Ae=g.lastStageBreakdownMs)==null?void 0:Ae.total)??0,Ee=Se>.5?1e3/Se:1/ee;Nt=Nt*.9+Ee*.1,P.stats=`${w} surfels · ${Math.round(Nt)} fps`}if(u){requestAnimationFrame(ln);return}if(In()&&(v||$)&&(v=null,b.resetToCamera(),Be(),$&&($=!1,re.animate=!1,ge.refresh())),$&&re.animateMode==="circle"&&pe){ye+=ee/De,ye>=1&&(ye-=1);const Se=Ji(pe,ye);_.set_preset(Se),b.update(ee);const Ee=l.createCommandEncoder();g.frame(Ee,r.getCurrentTexture().createView()),l.queue.submit([Ee.finish()]),Pn++,Pn===2&&wn(),requestAnimationFrame(ln);return}if(v){v.t+=ee/v.duration;const Se=Math.min(1,v.t),Ee=Se*Se*(3-2*Se);q.lerp(v.fromPos,v.toPos,Ee,_.position),at.slerp(v.fromQuat,v.toQuat,Ee,c),Pt.fromQuat(c,m),ct.fromMat3(m,_.rotation),_.update_buffer(),v.t>=1&&(_.set_preset(v.target),v=null,$?Z.length>0&&(h=i):(b.resetToCamera(),Be()))}else if($&&!In()){const Se=re.animateMode==="circle"&&ce.length>0,Ee=Se?ce:Z;if(Ee.length!==0){if(h-=ee,h<=0){const nt=((Se?f:S)+1)%Ee.length;Se?f=nt:S=nt;const ft=Se?E/8:E;Q(Ee[nt],ft),Se||(y.view=`${S+1} / ${Z.length}: ${Z[S].img_name??S}`)}}}Ss(ee),b.update(ee),A(),Y(),await ss;const fe=l.createCommandEncoder(),be=r.getCurrentTexture().createView();g.frame(fe,be),l.queue.submit([fe.finish()]),ss=l.queue.onSubmittedWorkDone(),Pn++,Pn===2&&wn(),requestAnimationFrame(ln)}requestAnimationFrame(ln)}}const ru=o=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
flat in vec4 v_tu_op; flat in vec4 v_tv_sh; flat in vec4 v_tw_ly; flat in vec4 v_col_dc;
flat in vec2 v_ctr; flat in vec4 v_uv; flat in vec2 v_dp;
uniform vec2 u_vp;
uniform sampler2DArray u_atlas;
uniform int u_atlas_on;
uniform vec4 u_tex;          // atlas_scale, atlas_offset, res_bias, uv_extent
uniform vec2 u_dims;         // atlas slice width, layer height
uniform int u_dbg;           // 0 normal; see the debug outputs below
out vec4 o;
void main() {
    const float FILTER_INV_SQUARE = 2.0;
    const float K_BETA_SQ = 9.0;
    vec2 pixf = floor(vec2(gl_FragCoord.x, u_vp.y - gl_FragCoord.y));   // top-left origin
    float u0 = v_tu_op.x, v0 = v_tu_op.y, J00 = v_tu_op.z;
    float J01 = v_tv_sh.x, J10 = v_tv_sh.y, J11 = v_tv_sh.z;
    vec2 d = pixf - v_ctr;
    float denom = 1.0 + v_tw_ly.x * d.x + v_tw_ly.y * d.y;
    if (denom < 0.1) discard;
    float inv_d = 1.0 / denom;
    vec2 s = vec2(u0 + (J00 * d.x + J01 * d.y) * inv_d, v0 + (J10 * d.x + J11 * d.y) * inv_d);
    float rho3d = dot(s, s);
    vec2 d_pix = v_ctr - pixf;
    float rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    float depth = rho3d <= rho2d ? dot(vec3(v_dp, v_col_dc.w), vec3(s, 1.0)) : v_col_dc.w;
    if (depth < 0.2) discard;
    float ab;
${o?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
    float base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
    float sh = v_tv_sh.w;
    if (sh >= 1.99 && sh <= 2.01) ab = base * base;
    else if (sh >= 0.99 && sh <= 1.01) ab = base;
    else if (sh >= 0.49 && sh <= 0.51) ab = sqrt(base);
    else if (sh >= 3.99 && sh <= 4.01) { float b2 = base * base; ab = b2 * b2; }
    else ab = pow(base, sh);`:"    ab = exp(-rho3d * 0.5);"}
    float alp = exp(-rho2d * 0.5);
    float b = min(0.99, v_tu_op.w * max(ab, alp));
    if (b < 1.0 / 255.0) discard;
    vec3 color = v_col_dc.rgb;
    // Skip-texture surfels carry a zero-area rect (uv_scale == 0) whose slice id points one past
    // the last layer: no residual, SV only — the CUDA bake-render semantics. Sampling it instead
    // reads texel (0,0) of whatever layer the index clamps to (a +0.3 brightness bug, found
    // 2026-10-13 via the re-shard A/B).
    if (u_atlas_on != 0 && v_uv.z != 0.0 && v_uv.w != 0.0) {
        vec2 hw = max(abs(v_uv.zw) * u_tex.w - 0.5 / u_dims, vec2(0.0));
        vec2 uv = clamp(v_uv.xy + s * v_uv.zw, v_uv.xy - hw, v_uv.xy + hw);
        vec4 t = textureLod(u_atlas, vec3(uv, v_tw_ly.w), 0.0);
        // debug (u_dbg): 1 = fetched texel rgb only, 2 = sample offset from the tile centre in texels/256 + layer/16
        if (u_dbg == 1) { o = vec4(t.rgb, 1.0); return; }
        if (u_dbg == 2) { o = vec4((uv - v_uv.xy) * u_dims / 256.0 + 0.5, v_tw_ly.w / 16.0, 1.0); return; }
        color = color + t.rgb * u_tex.x + vec3(u_tex.y);
    }
    color = max(vec3(0.0), color + vec3(u_tex.z));
    o = vec4(color, 1.0) * b;
}`;function no(o){return{bc7:!!o.getExtension("EXT_texture_compression_bptc"),astc:!!o.getExtension("WEBGL_compressed_texture_astc")}}function iu(o,r){const l=no(o),x=r.format===2||r.format===7,_=r.format===3||r.format===8;let b=0;x&&l.bc7?b=36492:_&&l.astc&&(b=37808);const M=J=>(console.warn("[gl]",J),{tex:null,status:J,slice_width:r.slice_width,layer_h:r.layer_h,n_slices:0,rects:r.rects_expanded});if(!b)return M(`atlas is ${x?"BC7":_?"ASTC":`format ${r.format}`}; this GPU has bc7=${l.bc7} astc=${l.astc}`);let B=o.getParameter(o.MAX_TEXTURE_SIZE);try{const J=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);J>=256&&(B=Math.min(B,J-J%4))}catch{}const C=o.getParameter(o.MAX_ARRAY_TEXTURE_LAYERS),{width:A,n_layers:N,n_cols:F,layer_cuts:L,column_cuts:W,atlas_bytes:oe}=r,z=A/4*16,G=r.rects_expanded,Y=G.length/5,V=[];let te=0,$=0,le=0,he=!1;const de=Array.from({length:F*N},()=>[]);let se=0,ae=0;for(let J=0;J<Y;J++){const ve=G[J*5+4]|0,ze=G[J*5+2],we=G[J*5+3];ve>=0&&ve<de.length&&ze>0&&(de[ve].push(J),se=Math.max(se,ze),ae=Math.max(ae,we))}se=Math.ceil(se/4)*4,ae=Math.ceil(ae/4)*4;const Te=(J,ve)=>{if(J<=B)return[0,J];const ze=B-ve;if(ze<64)throw new Error(`atlas re-shard: tiles up to ${ve} px do not fit MAX_TEXTURE_SIZE ${B}`);const we=Math.ceil(J/ze),Be=[0];for(let ne=1;ne<we;ne++)Be.push(Math.round(J*ne/we/4)*4);return Be.push(J),Be},ie=(J,ve,ze,we)=>Math.min(J[ve+1]-J[ve]+ze,we-J[ve]);try{for(let J=0;J<F;J++)for(let ve=0;ve<N;ve++){const ze=W[J+1]-W[J],we=L[ve+1]-L[ve],Be=Te(ze,se),ne=Te(we,ae);(Be.length>2||ne.length>2)&&(he=!0);for(let me=0;me<Be.length-1;me++)$=Math.max($,ie(Be,me,se,ze));for(let me=0;me<ne.length-1;me++)le=Math.max(le,ie(ne,me,ae,we));V.push({c:J,l:ve,xcuts:Be,ycuts:ne,base:te}),te+=(Be.length-1)*(ne.length-1)}}catch(J){return M(String(J))}if($=Math.ceil($/4)*4,le=Math.ceil(le/4)*4,te>C)return M(`atlas needs ${te} array layers, GPU allows ${C}`);const re=$/4*16,ge=re*(le/4);let Le;try{Le=new Uint8Array(ge*te)}catch(J){return M(`atlas staging buffer ${(ge*te/2**20).toFixed(0)} MB failed: ${J}`)}let ke=G;he&&(ke=new Float32Array(G));for(const J of V){const ve=J.xcuts.length-1,ze=J.ycuts.length-1,we=W[J.c+1]-W[J.c],Be=L[J.l+1]-L[J.l];for(let ne=0;ne<ze;ne++)for(let me=0;me<ve;me++){const xe=J.base+ne*ve+me,D=W[J.c]+J.xcuts[me],K=ie(J.xcuts,me,se,we),g=L[J.l]+J.ycuts[ne],a=ie(J.ycuts,ne,ae,Be),u=xe*ge,d=D/4,w=K/4;for(let P=0;P<a/4;P++){const k=(g/4+P)*z+d*16;Le.set(oe.subarray(k,k+w*16),u+P*re)}}if(he)for(const ne of de[J.c*N+J.l]){const me=G[ne*5],xe=G[ne*5+1];let D=0;for(;D<ve-1&&me>=J.xcuts[D+1];)D++;let K=0;for(;K<ze-1&&xe>=J.ycuts[K+1];)K++;ke[ne*5]=me-J.xcuts[D],ke[ne*5+1]=xe-J.ycuts[K],ke[ne*5+4]=J.base+K*ve+D}}const X=o.createTexture();o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,X),o.compressedTexImage3D(o.TEXTURE_2D_ARRAY,0,b,$,le,te,0,Le),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);const Z=o.getError();if(Z!==o.NO_ERROR){o.deleteTexture(X);const J=Z===o.OUT_OF_MEMORY?"OUT_OF_MEMORY":Z===o.INVALID_VALUE?"INVALID_VALUE":`0x${Z.toString(16)}`;return M(`atlas upload failed: GL ${J} (${$}x${le}x${te} ${b===36492?"BC7":"ASTC"}, ${(ge*te/2**20).toFixed(0)} MB, max tex ${B})`)}const j=`${b===36492?"BC7":"ASTC"} atlas ${$}x${le}x${te}${he?` (re-sharded for max tex ${B})`:""}`;return{tex:X,status:j,slice_width:$,layer_h:le,n_slices:te,rects:ke}}const Mi=28,Zn=8,ou=o=>`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler2D;
layout(location=0) in uint a_id;          // surfel id, in sorted (back-to-front) order
uniform usampler2D u_surf;                // 2 texels / surfel: (x y z opa|shape) (sx|sy qw|qx qy|qz aux)
uniform sampler2D  u_sv;                  // 2K texels / surfel: K × (site.xyz, log tau), K × (rgb, 0)
uniform sampler2D  u_uv;                  // 2 texels / surfel: (uv_base.xy uv_scale.xy) (layer 0 0 0)
uniform mat3  u_R;                        // world -> camera rotation
uniform vec3  u_t;                        // camera-space translation (-R·eye)
uniform vec3  u_eye;
uniform vec2  u_vp;                       // drawing-buffer size
uniform float u_focal;                    // pixels (= 0.5 H / tan(fovY/2))
uniform float u_zfar;
uniform float u_scaling;                  // gaussian_scaling
uniform float u_sh_bias;
uniform int   u_K;
out vec4 v_tu_op; out vec4 v_tv_sh; out vec4 v_tw_ly; out vec4 v_col_dc;
out vec4 v_ctr_ext; out vec4 v_uv; out vec4 v_dp;

ivec2 tc(int l) { return ivec2(l & ${(1<<o)-1}, l >> ${o}); }
void cull() {
    v_tu_op = vec4(0.0); v_tv_sh = vec4(0.0); v_tw_ly = vec4(0.0); v_col_dc = vec4(0.0);
    v_ctr_ext = vec4(0.0); v_uv = vec4(0.0); v_dp = vec4(0.0);
}
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    int i = int(a_id);
    uvec4 s0 = texelFetch(u_surf, tc(i * 2), 0);
    uvec4 s1 = texelFetch(u_surf, tc(i * 2 + 1), 0);
    vec3 p = uintBitsToFloat(s0.xyz);
    vec2 os = unpackHalf2x16(s0.w);
    float opacity = os.x, shape = os.y;
    vec2 sc = unpackHalf2x16(s1.x) * u_scaling;
    vec2 qa = unpackHalf2x16(s1.y), qb = unpackHalf2x16(s1.z);
    bool textured = ((s1.w >> 16u) & 1u) == 1u;
    if (!(opacity > 1.0 / 255.0) || !textured) { cull(); return; }
    float qn = inversesqrt(max(dot(qa, qa) + dot(qb, qb), 1e-20));
    float w = qa.x * qn, x = qa.y * qn, y = qb.x * qn, z = qb.y * qn;
    // quat_to_rotmat columns 0 / 1 = the surfel's tangent axes, scaled
    vec3 L0 = vec3(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)) * sc.x;
    vec3 L1 = vec3(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)) * sc.y;
    vec3 c = u_R * p + u_t;
    float W = u_vp.x, H = u_vp.y;
    float zn = 0.01, zf = u_zfar, P22 = zf / (zf - zn), P23 = -(zf * zn) / (zf - zn);
    float P00 = 2.0 * u_focal / W, P11 = 2.0 * u_focal / H;
    float cw = c.z, clipZ = P22 * c.z + P23, zndc = clipZ / cw;
    float bnd = 1.2 * cw;
    if (!(zndc > 0.0 && zndc < 1.0) || abs(P00 * c.x) > bnd || abs(P11 * c.y) > bnd) { cull(); return; }
    vec3 l0 = u_R * L0, l1 = u_R * L1;
    float hw = W * 0.5, hwc = (W - 1.0) * 0.5, hh = H * 0.5, hhc = (H - 1.0) * 0.5;
    vec3 Tu = vec3(P00 * l0.x * hw + l0.z * hwc, P00 * l1.x * hw + l1.z * hwc, P00 * c.x * hw + cw * hwc);
    vec3 Tv = vec3(P11 * l0.y * hh + l0.z * hhc, P11 * l1.y * hh + l1.z * hhc, P11 * c.y * hh + cw * hhc);
    vec3 Tw = vec3(l0.z, l1.z, cw);
    // OAC cutoff
    float cutoff;
    if (shape > 1e-6) {
        float inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        cutoff = max(0.5, 3.0 * sqrt(max(0.0, 1.0 - pow(inv, 1.0 / max(shape, 1e-3)))));
    } else {
        cutoff = max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
    }
    float k2 = cutoff * cutoff;
    // SnugBox
    vec3 n0 = cross(Tv, Tw), n1 = cross(Tw, Tu), n2 = cross(Tu, Tv);
    float A = n0.x * n0.x + n0.y * n0.y - k2 * n0.z * n0.z;
    float B = n0.x * n1.x + n0.y * n1.y - k2 * n0.z * n1.z;
    float E = n1.x * n1.x + n1.y * n1.y - k2 * n1.z * n1.z;
    float D = n0.x * n2.x + n0.y * n2.y - k2 * n0.z * n2.z;
    float F = n1.x * n2.x + n1.y * n2.y - k2 * n1.z * n2.z;
    float det = A * E - B * B;
    float ax = 0.0, ay = 0.0, ex = -1.0, ey = -1.0;
    if (det > 0.0 && A > 0.0 && E > 0.0) {
        float qx = (B * F - E * D) / det, qy = (B * D - A * F) / det;
        vec3 cc = qx * n0 + qy * n1 + n2;
        float t = -(cc.x * cc.x + cc.y * cc.y - k2 * cc.z * cc.z);
        if (t > 0.0) { ax = qx; ay = qy; ex = sqrt(t * E / det); ey = sqrt(t * A / det); }
    }
    if (ex < 0.0) {                                   // compute_aabb fallback + garbage guard
        float dd = k2 * Tw.x * Tw.x + k2 * Tw.y * Tw.y - Tw.z * Tw.z;
        if (dd < 0.0) {
            float fx = k2 / dd, fy = k2 / dd, fz = -1.0 / dd;
            float pxx = fx * Tu.x * Tw.x + fy * Tu.y * Tw.y + fz * Tu.z * Tw.z;
            float pyy = fx * Tv.x * Tw.x + fy * Tv.y * Tw.y + fz * Tv.z * Tw.z;
            float h0x = pxx * pxx - (fx * Tu.x * Tu.x + fy * Tu.y * Tu.y + fz * Tu.z * Tu.z);
            float h0y = pyy * pyy - (fx * Tv.x * Tv.x + fy * Tv.y * Tv.y + fz * Tv.z * Tv.z);
            if (h0x >= 0.0 && h0y >= 0.0) {
                ax = pxx; ay = pyy; ex = sqrt(h0x); ey = sqrt(h0y);
                if (max(ex, ey) > 2.0 * max(W, H)) ex = -1.0;
            }
        }
    }
    if (ex < 0.0) { cull(); return; }
    if (max(ex, ey) < 0.25 && opacity < 0.5) { cull(); return; }        // SPR
    // CONIC expansion about the ¼-px quantised centre
    float cxc = floor(ax * 4.0 + 0.5) * 0.25, cyc = floor(ay * 4.0 + 0.5) * 0.25;
    vec3 kk = cxc * Tw - Tu, ll = cyc * Tw - Tv;
    vec3 pc = cross(kk, ll);
    float u0 = 1e10, v0 = 1e10, J00 = 0.0, J01 = 0.0, J10 = 0.0, J11 = 0.0, dwx = 0.0, dwy = 0.0;
    if (abs(pc.z) > 1e-12) {
        u0 = pc.x / pc.z; v0 = pc.y / pc.z;
        float wc = Tw.x * u0 + Tw.y * v0 + Tw.z;
        float detkl = kk.x * ll.y - kk.y * ll.x;
        if (abs(detkl) > 1e-12 && abs(wc) > 1e-8) {
            float scl = wc / detkl;
            J00 = -ll.y * scl; J01 = kk.y * scl; J10 = ll.x * scl; J11 = -kk.x * scl;
            dwx = (Tw.y * Tv.x - Tw.x * Tv.y) / pc.z;
            dwy = (Tu.y * Tw.x - Tu.x * Tw.y) / pc.z;
        } else { u0 = 1e10; v0 = 1e10; }
    }
    // SV colour (preprocess eval_sv): softmax over K sites of -tau·|site - view_dir|
    vec3 vd = normalize(p - u_eye);
    vec3 col = vec3(0.0);
    if (u_K > 0) {
        int base = i * 2 * u_K;
        float lg[${Zn}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${Zn}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${Zn}; k++) {
            if (k >= u_K) break;
            float wk = exp(lg[k] - lmax);
            ws += wk;
            col += wk * texelFetch(u_sv, tc(base + u_K + k), 0).xyz;
        }
        col = max(vec3(0.0), col / max(ws, 1e-20) + vec3(u_sh_bias));
    }
    vec4 uvb = texelFetch(u_uv, tc(i * 2), 0);
    float layer = texelFetch(u_uv, tc(i * 2 + 1), 0).x;
    v_tu_op   = vec4(u0, v0, J00, opacity);
    v_tv_sh   = vec4(J01, J10, J11, shape);
    v_tw_ly   = vec4(dwx, dwy, 0.0, layer);
    v_col_dc  = vec4(col, c.z);
    v_ctr_ext = vec4(cxc, cyc, ex, ey);
    v_uv      = uvb;
    v_dp      = vec4(l0.z, l1.z, 0.0, 0.0);          // depth_u, depth_v = (view · L).z
}`,au=`#version 300 es
precision highp float;
precision highp int;
layout(location=0) in vec4 a_tu_op;
layout(location=1) in vec4 a_tv_sh;
layout(location=2) in vec4 a_tw_ly;
layout(location=3) in vec4 a_col_dc;
layout(location=4) in vec4 a_ctr_ext;
layout(location=5) in vec4 a_uv;
layout(location=6) in vec4 a_dp;
uniform vec2 u_vp;
flat out vec4 v_tu_op; flat out vec4 v_tv_sh; flat out vec4 v_tw_ly; flat out vec4 v_col_dc;
flat out vec2 v_ctr; flat out vec4 v_uv; flat out vec2 v_dp;
void main() {
    v_tu_op = a_tu_op; v_tv_sh = a_tv_sh; v_tw_ly = a_tw_ly; v_col_dc = a_col_dc;
    v_ctr = a_ctr_ext.xy; v_uv = a_uv; v_dp = a_dp.xy;
    if (a_tu_op.w <= 0.0) { gl_Position = vec4(3.0, 3.0, 0.0, 1.0); return; }   // culled record: clipped away
    const float FILTER_R = 3.0 * 0.7071067811865476;
    int vid = gl_VertexID;
    vec2 ext_pad = a_ctr_ext.zw * 1.001 + vec2(0.25);
    vec2 hlf = max(ext_pad, vec2(FILTER_R));
    float ox = (vid & 1) == 0 ? 1.0 : -1.0;
    float oy = vid < 2 ? 1.0 : -1.0;
    vec2 corner = a_ctr_ext.xy + vec2(ox, oy) * hlf;
    gl_Position = vec4((corner.x * 2.0 - (u_vp.x - 1.0)) / u_vp.x,
                       -((corner.y * 2.0 - (u_vp.y - 1.0)) / u_vp.y), 0.0, 1.0);
}`;class lu{constructor(r,l,x,_={}){R(this,"gl");R(this,"n");R(this,"K");R(this,"twLog2");R(this,"pre");R(this,"draw");R(this,"preU",{});R(this,"drawU",{});R(this,"texSurf");R(this,"texSv");R(this,"texUv");R(this,"idBuf");R(this,"recBuf");R(this,"preVao");R(this,"drawVao");R(this,"tf");R(this,"atlasTex",null);R(this,"atlasStatus","no atlas");R(this,"atlasUpload",null);R(this,"atlasOn",!1);R(this,"sd");R(this,"ok");R(this,"keyF");R(this,"keyU");R(this,"ids");R(this,"ids2");R(this,"keys2");R(this,"hist");R(this,"cnt",new Uint32Array(256));R(this,"bgColor",[0,0,0]);R(this,"scaling",1);R(this,"lastStats",{visible:0,cpuMs:0});R(this,"only",-1);R(this,"dbg",0);if(this.gl=r,l.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(l.K>Zn)throw new Error(`WebGL2 backend supports K <= ${Zn} SV sites (bundle has ${l.K})`);this.n=l.num_points,this.K=l.K,this.sd=l.surfel_data;const b=this.n,M=r.getParameter(r.MAX_TEXTURE_SIZE);this.twLog2=M>=4096?12:11;const B=1<<this.twLog2,C=new Uint32Array(l.surfel_data.buffer,l.surfel_data.byteOffset,b*8);for(let z=0;z<b;z++)if(C[z*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(b);for(let z=0;z<b;z++){const G=cu(C[z*8+3]);this.ok[z]=G>1/255&&(C[z*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(b),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(b),this.ids2=new Uint32Array(b),this.keys2=new Uint32Array(b),this.hist=new Uint32Array(256*4);const A=z=>Math.max(1,Math.ceil(b*z/B)),N=(z,G,Y,V,te)=>{const $=r.createTexture();return r.bindTexture(r.TEXTURE_2D,$),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,z,B,A(V),0,G,Y,te),$};{const z=A(2),G=new Uint32Array(B*z*4);G.set(C),this.texSurf=N(r.RGBA32UI,r.RGBA_INTEGER,r.UNSIGNED_INT,2,G)}{const z=this.K,G=A(2*z),Y=new Float32Array(B*G*4),V=l.sv_params,te=z*7;for(let $=0;$<b;$++){const le=$*te,he=$*2*z*4;for(let de=0;de<z;de++){Y[he+de*4]=V[le+de*3],Y[he+de*4+1]=V[le+de*3+1],Y[he+de*4+2]=V[le+de*3+2],Y[he+de*4+3]=V[le+z*6+de];const se=he+(z+de)*4;Y[se]=V[le+z*3+de*3],Y[se+1]=V[le+z*3+de*3+1],Y[se+2]=V[le+z*3+de*3+2]}}this.texSv=N(r.RGBA32F,r.RGBA,r.FLOAT,2*z,Y)}const F=x?iu(r,x):null;F&&(this.atlasStatus=F.status),this.atlasUpload=F;{const z=A(2),G=new Float32Array(B*z*4);if(x&&F&&F.tex){const Y=F.slice_width,V=F.layer_h,te=x.uv_extent,$=F.rects;for(let le=0;le<b;le++){if(!this.ok[le])continue;const he=$[le*5],de=$[le*5+1],se=$[le*5+2],ae=$[le*5+3],Te=le*8;G[Te]=(he+.5*Math.max(se,1))/Y,G[Te+1]=(de+.5*Math.max(ae,1))/V,G[Te+2]=se/(2*te)/Y,G[Te+3]=ae/(2*te)/V,G[Te+4]=$[le*5+4]}}this.texUv=N(r.RGBA32F,r.RGBA,r.FLOAT,2,G)}const L=(z,G)=>{const Y=r.createShader(z);if(r.shaderSource(Y,G),r.compileShader(Y),!r.getShaderParameter(Y,r.COMPILE_STATUS))throw new Error("GLSL: "+r.getShaderInfoLog(Y));return Y},W=z=>{if(r.linkProgram(z),!r.getProgramParameter(z,r.LINK_STATUS))throw new Error("GLSL link: "+r.getProgramInfoLog(z))};this.pre=r.createProgram(),r.attachShader(this.pre,L(r.VERTEX_SHADER,ou(this.twLog2))),r.attachShader(this.pre,L(r.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),r.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],r.INTERLEAVED_ATTRIBS),W(this.pre);for(const z of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[z]=r.getUniformLocation(this.pre,z);const oe=!(x&&x.kernel_type===0)&&l.kernel_type!==0;this.draw=r.createProgram(),r.attachShader(this.draw,L(r.VERTEX_SHADER,au)),r.attachShader(this.draw,L(r.FRAGMENT_SHADER,ru(oe))),W(this.draw);for(const z of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[z]=r.getUniformLocation(this.draw,z);try{const z=new URLSearchParams(window.location.search);this.only=parseInt(z.get("only")??"-1",10),this.dbg=parseInt(z.get("dbg")??"0",10)|0}catch{}this.idBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.bufferData(r.ARRAY_BUFFER,b*4,r.DYNAMIC_DRAW),this.recBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf),r.bufferData(r.ARRAY_BUFFER,b*Mi*4,r.STREAM_COPY),r.bindBuffer(r.ARRAY_BUFFER,null),this.preVao=r.createVertexArray(),r.bindVertexArray(this.preVao),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.enableVertexAttribArray(0),r.vertexAttribIPointer(0,1,r.UNSIGNED_INT,0,0),r.bindVertexArray(null),this.drawVao=r.createVertexArray(),r.bindVertexArray(this.drawVao),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf);for(let z=0;z<7;z++)r.enableVertexAttribArray(z),r.vertexAttribPointer(z,4,r.FLOAT,!1,Mi*4,z*16),r.vertexAttribDivisor(z,1);r.bindVertexArray(null),r.bindBuffer(r.ARRAY_BUFFER,null),this.tf=r.createTransformFeedback(),r.useProgram(this.pre),r.uniform1i(this.preU.u_surf,1),r.uniform1i(this.preU.u_sv,2),r.uniform1i(this.preU.u_uv,3),r.uniform1i(this.preU.u_K,this.K),r.uniform1f(this.preU.u_sh_bias,_.shBias??l.sh_bias),r.uniform1f(this.preU.u_scaling,this.scaling),r.useProgram(this.draw),r.uniform1i(this.drawU.u_atlas,0),r.uniform1i(this.drawU.u_atlas_on,0),r.uniform4f(this.drawU.u_tex,0,0,x?x.res_bias:0,x?x.uv_extent:4),x&&F&&F.tex&&(this.atlasTex=F.tex,this.atlasOn=!0,r.uniform1i(this.drawU.u_atlas_on,1),r.uniform4f(this.drawU.u_tex,x.atlas_scale,x.atlas_offset,x.res_bias,x.uv_extent),r.uniform2f(this.drawU.u_dims,F.slice_width,F.layer_h)),r.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(r){this.atlasTex&&(this.atlasOn=r,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,r?1:0))}setGaussianScaling(r){this.scaling=r,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,r)}setShBias(r){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,r)}render(r){const l=this.gl,x=this.n,_=r.rotation,b=r.eye,M=this.sd,B=this.ok,C=r.width,A=r.height,N=performance.now(),F=.5*A/Math.tan(r.fovY*.5),L=-(_[0]*b[0]+_[4]*b[1]+_[8]*b[2]),W=-(_[1]*b[0]+_[5]*b[1]+_[9]*b[2]),oe=-(_[2]*b[0]+_[6]*b[1]+_[10]*b[2]),z=.01,G=r.zfar??100,Y=G/(G-z),V=-(G*z)/(G-z),te=2*F/C,$=2*F/A,le=_[0],he=_[4],de=_[8],se=_[1],ae=_[5],Te=_[9],ie=_[2],re=_[6],ge=_[10],Le=this.keyF,ke=this.ids;let X=0;for(let J=0;J<x;J++){if(B[J]===0||this.only>=0&&J!==this.only)continue;const ve=J*8,ze=M[ve],we=M[ve+1],Be=M[ve+2],ne=ie*ze+re*we+ge*Be+oe;if(!(ne>0))continue;const me=Y*ne+V,xe=me/ne;if(!(xe>0&&xe<1))continue;const D=1.2*ne,K=le*ze+he*we+de*Be+L;if(Math.abs(te*K)>D)continue;const g=se*ze+ae*we+Te*Be+W;Math.abs($*g)>D||(Le[X]=G-me,ke[X]=J,X++)}const Z=this.radixSort(X),j=performance.now()-N;return this.lastStats={visible:X,cpuMs:j},X===0?(l.viewport(0,0,C,A),l.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),l.clear(l.COLOR_BUFFER_BIT),0):(l.bindBuffer(l.ARRAY_BUFFER,this.idBuf),l.bufferSubData(l.ARRAY_BUFFER,0,Z,0,X),l.bindBuffer(l.ARRAY_BUFFER,null),l.useProgram(this.pre),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,this.texSurf),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,this.texSv),l.activeTexture(l.TEXTURE3),l.bindTexture(l.TEXTURE_2D,this.texUv),l.uniformMatrix3fv(this.preU.u_R,!1,[le,se,ie,he,ae,re,de,Te,ge]),l.uniform3f(this.preU.u_t,L,W,oe),l.uniform3f(this.preU.u_eye,b[0],b[1],b[2]),l.uniform2f(this.preU.u_vp,C,A),l.uniform1f(this.preU.u_focal,F),l.uniform1f(this.preU.u_zfar,G),l.bindVertexArray(this.preVao),l.bindTransformFeedback(l.TRANSFORM_FEEDBACK,this.tf),l.bindBufferBase(l.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),l.enable(l.RASTERIZER_DISCARD),l.beginTransformFeedback(l.POINTS),l.drawArrays(l.POINTS,0,X),l.endTransformFeedback(),l.disable(l.RASTERIZER_DISCARD),l.bindBufferBase(l.TRANSFORM_FEEDBACK_BUFFER,0,null),l.bindTransformFeedback(l.TRANSFORM_FEEDBACK,null),l.bindVertexArray(null),l.viewport(0,0,C,A),l.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),l.clear(l.COLOR_BUFFER_BIT),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.disable(l.DEPTH_TEST),l.useProgram(this.draw),l.uniform2f(this.drawU.u_vp,C,A),l.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D_ARRAY,this.atlasTex)),l.bindVertexArray(this.drawVao),l.drawArraysInstanced(l.TRIANGLE_STRIP,0,4,X),l.bindVertexArray(null),X)}radixSort(r){const l=this.keyU,x=this.hist;x.fill(0);for(let A=0;A<r;A++){const N=l[A];x[N&255]++,x[256+(N>>>8&255)]++,x[512+(N>>>16&255)]++,x[768+(N>>>24)]++}let _=l,b=this.ids,M=this.keys2,B=this.ids2;const C=this.cnt;for(let A=0;A<4;A++){const N=A*8,F=A*256;let L=!1;for(let G=0;G<256;G++)if(x[F+G]===r){L=!0;break}if(L)continue;let W=0;for(let G=0;G<256;G++)C[G]=W,W+=x[F+G];for(let G=0;G<r;G++){const Y=_[G],V=Y>>>N&255,te=C[V]++;M[te]=Y,B[te]=b[G]}const oe=_;_=M,M=oe;const z=b;b=B,B=z}return b}}function cu(o){const r=o&65535,l=r&32768?-1:1,x=r>>10&31,_=r&1023;return x===0?l*_*5960464477539063e-23:x===31?_?NaN:l*(1/0):l*(1+_/1024)*Math.pow(2,x-15)}const Ri=o=>o.format===2||o.format===7,Di=o=>o.format===3||o.format===8;async function zi(o,r,l){const x=new URLSearchParams(window.location.search),_=new ws(o,null),b=new Hi(_),M=no(r);ut(`[gl] WebGL2 backend · bc7=${M.bc7} astc=${M.astc} · ${r.getParameter(r.RENDERER)}`);let B=null,C=null,A=[],N=null;const F={animate:x.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},L=new qi.Pane({title:"Config (WebGL2)",expanded:!0}),W={stats:"— loading —"};L.addMonitor(W,"stats",{label:"Stats",interval:200});const oe={s:l.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};L.addMonitor(oe,"s",{label:"Renderer"}),L.addButton({title:"🔁 Switch to WebGPU",disabled:!l.gpuAvailable}).on("click",()=>eo("webgpu"));let G=F.animate;b.enabled=!G,L.addInput(F,"animate",{label:"Animate"}).on("change",u=>{G=u.value,b.enabled=!G,G||(b.resetToCamera(),X())}),L.addInput(F,"atlas_enabled",{label:"Texture"}).on("change",u=>B==null?void 0:B.setAtlasEnabled(u.value)),L.addInput(F,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>$()),L.addInput(F,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",u=>B==null?void 0:B.setGaussianScaling(u.value)),L.addInput(F,"bg",{label:"Background",color:{type:"float"}}).on("change",u=>{B&&(B.bgColor=[u.value.r,u.value.g,u.value.b])});const Y={s:"—"};L.addMonitor(Y,"s",{label:"Atlas"}),L.addButton({title:"🎯 Reset camera"}).on("click",()=>Z(0,!1));const V=document.createElement("button");V.textContent="Texture: on",Object.assign(V.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(V);const te=()=>{F.atlas_enabled=!F.atlas_enabled,B==null||B.setAtlasEnabled(F.atlas_enabled),V.textContent=`Texture: ${F.atlas_enabled?"on":"off"}`,L.refresh()};V.addEventListener("click",te);const $=()=>{const u=Math.max(.25,F.render_scale),d=Math.max(1,Math.ceil(u*o.clientWidth)),w=Math.max(1,Math.ceil(u*o.clientHeight));(o.width!==d||o.height!==w)&&(o.width=d,o.height=w),_.on_update_canvas()};new ResizeObserver(()=>$()).observe(o),$();const le=.4,he=3,de=.3;let se=-1,ae=null,Te=0;const ie=at.create(),re=Pt.create(),ge=u=>at.fromMat(Pt.create(u[0],u[1],u[2],u[4],u[5],u[6],u[8],u[9],u[10])),Le=(u,d)=>{ae={fromPos:q.clone(_.position),toPos:q.clone(u.position),fromQuat:at.normalize(ge(_.rotation)),toQuat:at.normalize(ge(u.rotation)),target:u,t:0,duration:Math.max(.01,d)}},ke=document.createElement("span"),X=()=>{if(!C)return;const u=to(_,C.surfel_data);u!==null&&b.setOrbitDepth(u)},Z=(u,d=!0)=>{if(A.length===0)return;se=(u%A.length+A.length)%A.length;const w=A[se];d?Le(w,le):(_.set_preset(w),b.resetToCamera(),X()),ke.textContent=`${se+1} / ${A.length}: ${A[se].img_name??se}`};let j=null;const J=()=>{if(j||A.length===0)return;L.addSeparator(),j=document.createElement("div"),j.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const u=(d,w)=>{const P=document.createElement("button");return P.className="tp-btnv_b",P.textContent=d,P.style.cssText="flex:0 0 34px;height:24px;padding:0;",P.addEventListener("click",w),P};ke.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",j.appendChild(u("◀",()=>Z(se-1))),j.appendChild(ke),j.appendChild(u("▶",()=>Z(se+1))),L.element.appendChild(j)};window.addEventListener("keydown",u=>{var d;((d=u.target)==null?void 0:d.tagName)!=="INPUT"&&(u.key==="ArrowLeft"||u.key==="PageUp"?Z(se-1):u.key==="ArrowRight"||u.key==="PageDown"?Z(se+1):u.key==="t"||u.key==="T"?te():u.key>="1"&&u.key<="9"&&Z(parseInt(u.key,10)-1))});let ve=0;const ze=(u,d)=>{if(!C)return;const w=o.getBoundingClientRect(),P=ir((u-w.left)*o.width/w.width,(d-w.top)*o.height/w.height,o,_,C.surfel_data);P&&b.setOrbitPivot(P)};o.addEventListener("dblclick",u=>ze(u.clientX,u.clientY)),o.addEventListener("pointerup",u=>{if(u.pointerType!=="touch")return;const d=performance.now();d-ve<300&&ze(u.clientX,u.clientY),ve=d});const we=x.get("bundle")??x.get("model_url");async function Be(u,d){Xn(`parsing ${d} ...`);try{const w=new TextDecoder().decode(new Uint8Array(u,0,8));let P=u,k=null,E=null;w===vs&&({pcBuffer:P,camerasBuffer:k,atlasBuffer:E}=ar(u)),Ct("parsing surfels ..."),C=await fc(new File([P],d));let i=null;if(E&&x.get("notex")!=="1"){i=ms(E);const h=Ri(i)&&M.bc7||Di(i)&&M.astc;let f=x.get("atlas2");if(!h&&!f&&we){const c=we.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);c&&(f=c[2]?`${c[1]}.bitymi${c[3]??""}`:`${c[1]}_astc.bitymi${c[3]??""}`)}if(!h&&f){Ct("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:c}=await bs(f,(m,S)=>Ct(`downloading twin atlas ...
${(m/1048576).toFixed(1)}${S?` / ${(S/1048576).toFixed(1)}`:""} MB`));if(c!=null&&c.atlasBuffer){const m=ms(c.atlasBuffer);(Ri(m)&&M.bc7||Di(m)&&M.astc)&&(i=m)}}catch(c){console.warn("[gl] atlas2 failed:",c)}}}Ct("building GPU resources ..."),N=i,B=new lu(r,C,i),B.bgColor=[F.bg.r,F.bg.g,F.bg.b],B.setGaussianScaling(F.gaussian_scaling),B.setAtlasEnabled(F.atlas_enabled),Y.s=B.atlasStatus,ut(`[gl] max tex ${r.getParameter(r.MAX_TEXTURE_SIZE)} · layers ${r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS)} · ${B.atlasStatus}`),ut(`[gl] ${C.num_points} surfels · ${B.atlasStatus}`),A=[];const v=x.get("camera_url");if(k){const h=URL.createObjectURL(new Blob([k],{type:"application/json"}));try{A=await sr(h)}finally{URL.revokeObjectURL(h)}}else if(v)try{A=await sr(v)}catch(h){console.warn("[gl] camera_url failed:",h)}if(b.setBbox(C.bbox.min,C.bbox.max),A.length>0)J(),Z(0,!1);else{const h=C.centroid,f=.5*Math.hypot(C.bbox.max[0]-C.bbox.min[0],C.bbox.max[1]-C.bbox.min[1],C.bbox.max[2]-C.bbox.min[2]),c=q.create(h[0]-f,h[1]-f,h[2]-f),m=ct.lookAt(c,q.create(h[0],h[1],h[2]),q.create(0,1,0));ct.copy(m,_.rotation),_.rotation[12]=0,_.rotation[13]=0,_.rotation[14]=0,q.copy(c,_.position),_.update_buffer(),b.resetToCamera()}}catch(w){throw wn(),w}}const ne=document.getElementById("load-button");if(ne==null||ne.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept=".ply,.bitymi",u.onchange=async()=>{var w;const d=(w=u.files)==null?void 0:w[0];d&&await Be(await d.arrayBuffer(),d.name)},u.click()}),we){Xn("downloading ...");const{bundle:u,rawPly:d}=await bs(we,(w,P,k)=>Ct(`downloading ...
${(w/2**20).toFixed(1)}${P?` / ${(P/2**20).toFixed(1)}`:""} MB · ${(k/2**20).toFixed(1)} MB/s`));u?await me(u.pcBuffer,u.camerasBuffer,u.atlasBuffer,we.split("/").pop()??"bundle"):d&&await Be(d,we.split("/").pop()??"scene.ply")}else W.stats="no ?bundle= — use 📂 Load";async function me(u,d,w,P){const k=new TextEncoder().encode(vs),E=[u],i=[0];d&&(E.push(d),i.push(2)),w&&(E.push(w),i.push(3));const v=4+E.length*20,h=8+v,f=h+E.reduce((y,U)=>y+U.byteLength,0),c=new Uint8Array(f),m=new DataView(c.buffer);c.set(k,0),m.setUint32(8,E.length,!0);let S=h;E.forEach((y,U)=>{m.setUint32(12+U*20,i[U],!0),m.setBigUint64(16+U*20,BigInt(S),!0),m.setBigUint64(24+U*20,BigInt(y.byteLength),!0),c.set(new Uint8Array(y),S),S+=y.byteLength}),await Be(c.buffer,P)}let xe=performance.now(),D=0,K=0;const g=()=>{var u;return((u=b.isDragging)==null?void 0:u.call(b))??!1};function a(){const u=performance.now(),d=Math.min((u-xe)/1e3,.1);if(xe=u,B&&C){if(ae){ae.t+=d/ae.duration;const k=Math.min(1,ae.t),E=k*k*(3-2*k);q.lerp(ae.fromPos,ae.toPos,E,_.position),at.slerp(ae.fromQuat,ae.toQuat,E,ie),Pt.fromQuat(ie,re),ct.fromMat3(re,_.rotation),_.update_buffer(),ae.t>=1&&(_.set_preset(ae.target),ae=null,G?Te=de:(b.resetToCamera(),X()))}else G&&A.length>0&&(Te-=d,Te<=0&&(se=(se+1)%A.length,Le(A[se],he),ke.textContent=`${se+1} / ${A.length}: ${A[se].img_name??se}`));g()&&ae&&(ae=null),b.update(d);const w=B.render({rotation:_.rotation,eye:_.position,fovY:_.getFovY(),width:o.width,height:o.height,zfar:_.zfar}),P=1/Math.max(d,.001);D=D===0?P:D*.9+P*.1,W.stats=`${w.toLocaleString()} / ${C.num_points.toLocaleString()} surfels · ${Math.round(D)} fps · cpu ${B.lastStats.cpuMs.toFixed(1)} ms`,K++,K===2&&wn()}requestAnimationFrame(a)}requestAnimationFrame(a),window.__halloumiGL={stats:W,get renderer(){return B},get cameras(){return A},setPreset:Z,get atlas(){return N},pick(u,d){return C?ir(u,d,o,_,C.surfel_data):null},pickIds(u,d){if(!C)return[];const[w,P,k]=xs(u,d,_),E=_.position[0],i=_.position[1],v=_.position[2],h=C.surfel_data,f=new Uint32Array(h.buffer,h.byteOffset,h.length),c=S=>{const y=S>>10&31,U=S&1023,H=S&32768?-1:1;return y===0?H*U*596e-10:H*(1+U/1024)*Math.pow(2,y-15)},m=[];for(let S=0;S<C.num_points;S++){const y=S*8,U=h[y],H=h[y+1],Q=h[y+2],_e=c(f[y+4]&65535),pe=c(f[y+4]>>>16),ce=c(f[y+5]&65535),ye=c(f[y+5]>>>16),De=c(f[y+6]&65535),Pe=c(f[y+6]>>>16),Ce=1/Math.hypot(ce,ye,De,Pe),Ie=ce*Ce,Me=ye*Ce,Ne=De*Ce,Oe=Pe*Ce,je=[1-2*(Ne*Ne+Oe*Oe),2*(Me*Ne+Ie*Oe),2*(Me*Oe-Ie*Ne)],Qe=[2*(Me*Ne-Ie*Oe),1-2*(Me*Me+Oe*Oe),2*(Ne*Oe+Ie*Me)],Ze=[2*(Me*Oe+Ie*Ne),2*(Ne*Oe-Ie*Me),1-2*(Me*Me+Ne*Ne)],He=w*Ze[0]+P*Ze[1]+k*Ze[2];if(Math.abs(He)<1e-9)continue;const Xe=((U-E)*Ze[0]+(H-i)*Ze[1]+(Q-v)*Ze[2])/He;if(Xe<=0)continue;const lt=E+Xe*w-U,st=i+Xe*P-H,et=v+Xe*k-Q,Je=(lt*je[0]+st*je[1]+et*je[2])/_e,qe=(lt*Qe[0]+st*Qe[1]+et*Qe[2])/pe,rt=Je*Je+qe*qe,$e=_.rotation,tt=_.position,it=$e[0]*(U-tt[0])+$e[4]*(H-tt[1])+$e[8]*(Q-tt[2]),Dt=$e[1]*(U-tt[0])+$e[5]*(H-tt[1])+$e[9]*(Q-tt[2]),bt=$e[2]*(U-tt[0])+$e[6]*(H-tt[1])+$e[10]*(Q-tt[2]),gt=o.width,wt=o.height,At=.5*wt/Math.tan(_.getFovY()*.5),zt=At*it/bt+(gt-1)*.5,mt=At*Dt/bt+(wt-1)*.5,Lt=2*((zt-u)*(zt-u)+(mt-d)*(mt-d)),Ut=c(f[y+3]&65535),Ot=c(f[y+3]>>>16),Zt=rt>=9?0:Math.pow(Math.max(0,1-rt/9),Ot>1e-6?Ot:1),Fe=Math.min(.99,Ut*Math.max(Zt,Math.exp(-.5*Lt)));if(Fe<1/255)continue;const xn=N?Array.from(N.rects_expanded.subarray(S*5,S*5+5)):null,zn=B&&B.atlasUpload?Array.from(B.atlasUpload.rects.subarray(S*5,S*5+5)):null;m.push({id:S,t:+Xe.toFixed(3),u:+Je.toFixed(2),v:+qe.toFixed(2),rho2d:+Lt.toFixed(2),alpha:+Fe.toFixed(3),opa:+Ut.toFixed(2),tex:f[y+7]>>>16&1,rect:xn,remap:zn})}return m.sort((S,y)=>S.t-y.t)}}}(function(){let r="dev";for(const x of Array.from(document.querySelectorAll('script[type="module"]'))){const b=x.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(b){r=b[1];break}}const l=document.createElement("div");l.textContent="v "+r,l.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(l.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(l)})();function Ui(o){const r=document.createElement("div");r.textContent=o,Object.assign(r.style,{position:"fixed",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",color:"#eee",background:"#111",font:"16px system-ui, sans-serif",padding:"24px",textAlign:"center"}),document.body.appendChild(r)}(async()=>{const o=document.querySelector("#webgpu-canvas");ac(o!==null);const{forced:r,stored:l}=eu(),x=r??l??"webgpu";let _=null;if(navigator.gpu!==void 0)try{_=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(C){console.warn("[backend] requestAdapter failed:",C)}if(x==="webgl"||_===null){const C=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!C){Ui(_===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${x==="webgl"?r?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),zi(o,C,{gpuAvailable:_!==null});return}const b=[];_.features.has("timestamp-query")&&b.push("timestamp-query"),_.features.has("texture-compression-bc")&&b.push("texture-compression-bc"),_.features.has("texture-compression-astc")&&b.push("texture-compression-astc"),console.log("[adapter]",_.info??"(unknown)");try{const C=_.info??{};globalThis.__gpuAdapterInfo={vendor:C.vendor??"?",architecture:C.architecture??"?",device:C.device??"?",description:C.description??"?",features:Array.from(_.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(_.features)),console.log("[adapter] BC7:",_.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",_.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:_.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:_.limits.maxComputeWorkgroupStorageSize,maxBufferSize:_.limits.maxBufferSize,maxStorageBufferBindingSize:_.limits.maxStorageBufferBindingSize,maxTextureDimension2D:_.limits.maxTextureDimension2D});let M;try{M=await _.requestDevice({requiredFeatures:b,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:_.limits.maxComputeWorkgroupStorageSize,maxBufferSize:_.limits.maxBufferSize,maxStorageBufferBindingSize:_.limits.maxStorageBufferBindingSize}})}catch(C){console.warn("[backend] requestDevice failed, falling back to WebGL2:",C);const A=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!A){Ui(`WebGPU device creation failed (${C}) and WebGL2 is not available.`);return}zi(o,A,{gpuAvailable:!1});return}const B=o.getContext("webgpu");su(o,B,M,b)})();
