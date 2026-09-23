var Cl=Object.defineProperty;var El=(o,a,h)=>a in o?Cl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[a]=h;var $=(o,a,h)=>(El(o,typeof a!="symbol"?a+"":a,h),h);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))E(w);new MutationObserver(w=>{for(const S of w)if(S.type==="childList")for(const M of S.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&E(M)}).observe(document,{childList:!0,subtree:!0});function h(w){const S={};return w.integrity&&(S.integrity=w.integrity),w.referrerPolicy&&(S.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?S.credentials="include":w.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function E(w){if(w.ep)return;w.ep=!0;const S=h(w);fetch(w.href,S)}})();function kl(o,a){return class extends o{constructor(...h){super(...h),a(this)}}}const Ml=kl(Array,o=>o.fill(0));let ze=1e-6;function Bl(o){function a(x=0,k=0){const P=new o(2);return x!==void 0&&(P[0]=x,k!==void 0&&(P[1]=k)),P}const h=a;function E(x,k,P){const r=P??new o(2);return r[0]=x,r[1]=k,r}function w(x,k){const P=k??new o(2);return P[0]=Math.ceil(x[0]),P[1]=Math.ceil(x[1]),P}function S(x,k){const P=k??new o(2);return P[0]=Math.floor(x[0]),P[1]=Math.floor(x[1]),P}function M(x,k){const P=k??new o(2);return P[0]=Math.round(x[0]),P[1]=Math.round(x[1]),P}function L(x,k=0,P=1,r){const m=r??new o(2);return m[0]=Math.min(P,Math.max(k,x[0])),m[1]=Math.min(P,Math.max(k,x[1])),m}function A(x,k,P){const r=P??new o(2);return r[0]=x[0]+k[0],r[1]=x[1]+k[1],r}function I(x,k,P,r){const m=r??new o(2);return m[0]=x[0]+k[0]*P,m[1]=x[1]+k[1]*P,m}function K(x,k){const P=x[0],r=x[1],m=k[0],d=k[1],p=Math.sqrt(P*P+r*r),l=Math.sqrt(m*m+d*d),_=p*l,y=_&&ue(x,k)/_;return Math.acos(y)}function q(x,k,P){const r=P??new o(2);return r[0]=x[0]-k[0],r[1]=x[1]-k[1],r}const z=q;function X(x,k){return Math.abs(x[0]-k[0])<ze&&Math.abs(x[1]-k[1])<ze}function oe(x,k){return x[0]===k[0]&&x[1]===k[1]}function Y(x,k,P,r){const m=r??new o(2);return m[0]=x[0]+P*(k[0]-x[0]),m[1]=x[1]+P*(k[1]-x[1]),m}function Q(x,k,P,r){const m=r??new o(2);return m[0]=x[0]+P[0]*(k[0]-x[0]),m[1]=x[1]+P[1]*(k[1]-x[1]),m}function se(x,k,P){const r=P??new o(2);return r[0]=Math.max(x[0],k[0]),r[1]=Math.max(x[1],k[1]),r}function W(x,k,P){const r=P??new o(2);return r[0]=Math.min(x[0],k[0]),r[1]=Math.min(x[1],k[1]),r}function J(x,k,P){const r=P??new o(2);return r[0]=x[0]*k,r[1]=x[1]*k,r}const N=J;function pe(x,k,P){const r=P??new o(2);return r[0]=x[0]/k,r[1]=x[1]/k,r}function he(x,k){const P=k??new o(2);return P[0]=1/x[0],P[1]=1/x[1],P}const _e=he;function ae(x,k,P){const r=P??new o(3),m=x[0]*k[1]-x[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function ue(x,k){return x[0]*k[0]+x[1]*k[1]}function Te(x){const k=x[0],P=x[1];return Math.sqrt(k*k+P*P)}const ee=Te;function fe(x){const k=x[0],P=x[1];return k*k+P*P}const be=fe;function Le(x,k){const P=x[0]-k[0],r=x[1]-k[1];return Math.sqrt(P*P+r*r)}const Ae=Le;function Z(x,k){const P=x[0]-k[0],r=x[1]-k[1];return P*P+r*r}const j=Z;function O(x,k){const P=k??new o(2),r=x[0],m=x[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(P[0]=r/d,P[1]=m/d):(P[0]=0,P[1]=0),P}function we(x,k){const P=k??new o(2);return P[0]=-x[0],P[1]=-x[1],P}function Ce(x,k){const P=k??new o(2);return P[0]=x[0],P[1]=x[1],P}const Ve=Ce;function Ge(x,k,P){const r=P??new o(2);return r[0]=x[0]*k[0],r[1]=x[1]*k[1],r}const Ne=Ge;function le(x,k,P){const r=P??new o(2);return r[0]=x[0]/k[0],r[1]=x[1]/k[1],r}const Pe=le;function ke(x=1,k){const P=k??new o(2),r=Math.random()*2*Math.PI;return P[0]=Math.cos(r)*x,P[1]=Math.sin(r)*x,P}function B(x){const k=x??new o(2);return k[0]=0,k[1]=0,k}function V(x,k,P){const r=P??new o(2),m=x[0],d=x[1];return r[0]=m*k[0]+d*k[4]+k[12],r[1]=m*k[1]+d*k[5]+k[13],r}function v(x,k,P){const r=P??new o(2),m=x[0],d=x[1];return r[0]=k[0]*m+k[4]*d+k[8],r[1]=k[1]*m+k[5]*d+k[9],r}function i(x,k,P,r){const m=r??new o(2),d=x[0]-k[0],p=x[1]-k[1],l=Math.sin(P),_=Math.cos(P);return m[0]=d*_-p*l+k[0],m[1]=d*l+p*_+k[1],m}function f(x,k,P){const r=P??new o(2);return O(x,r),J(r,k,r)}function u(x,k,P){const r=P??new o(2);return Te(x)>k?f(x,k,r):Ce(x,r)}function b(x,k,P){const r=P??new o(2);return Y(x,k,.5,r)}return{create:a,fromValues:h,set:E,ceil:w,floor:S,round:M,clamp:L,add:A,addScaled:I,angle:K,subtract:q,sub:z,equalsApproximately:X,equals:oe,lerp:Y,lerpV:Q,max:se,min:W,mulScalar:J,scale:N,divScalar:pe,inverse:he,invert:_e,cross:ae,dot:ue,length:Te,len:ee,lengthSq:fe,lenSq:be,distance:Le,dist:Ae,distanceSq:Z,distSq:j,normalize:O,negate:we,copy:Ce,clone:Ve,multiply:Ge,mul:Ne,divide:le,div:Pe,random:ke,zero:B,transformMat4:V,transformMat3:v,rotate:i,setLength:f,truncate:u,midpoint:b}}const Yr=new Map;function bi(o){let a=Yr.get(o);return a||(a=Bl(o),Yr.set(o,a)),a}function Tl(o){function a(l,_,y){const g=new o(3);return l!==void 0&&(g[0]=l,_!==void 0&&(g[1]=_,y!==void 0&&(g[2]=y))),g}const h=a;function E(l,_,y,g){const T=g??new o(3);return T[0]=l,T[1]=_,T[2]=y,T}function w(l,_){const y=_??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function S(l,_){const y=_??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function M(l,_){const y=_??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function L(l,_=0,y=1,g){const T=g??new o(3);return T[0]=Math.min(y,Math.max(_,l[0])),T[1]=Math.min(y,Math.max(_,l[1])),T[2]=Math.min(y,Math.max(_,l[2])),T}function A(l,_,y){const g=y??new o(3);return g[0]=l[0]+_[0],g[1]=l[1]+_[1],g[2]=l[2]+_[2],g}function I(l,_,y,g){const T=g??new o(3);return T[0]=l[0]+_[0]*y,T[1]=l[1]+_[1]*y,T[2]=l[2]+_[2]*y,T}function K(l,_){const y=l[0],g=l[1],T=l[2],U=_[0],F=_[1],ce=_[2],re=Math.sqrt(y*y+g*g+T*T),te=Math.sqrt(U*U+F*F+ce*ce),xe=re*te,Me=xe&&ue(l,_)/xe;return Math.acos(Me)}function q(l,_,y){const g=y??new o(3);return g[0]=l[0]-_[0],g[1]=l[1]-_[1],g[2]=l[2]-_[2],g}const z=q;function X(l,_){return Math.abs(l[0]-_[0])<ze&&Math.abs(l[1]-_[1])<ze&&Math.abs(l[2]-_[2])<ze}function oe(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function Y(l,_,y,g){const T=g??new o(3);return T[0]=l[0]+y*(_[0]-l[0]),T[1]=l[1]+y*(_[1]-l[1]),T[2]=l[2]+y*(_[2]-l[2]),T}function Q(l,_,y,g){const T=g??new o(3);return T[0]=l[0]+y[0]*(_[0]-l[0]),T[1]=l[1]+y[1]*(_[1]-l[1]),T[2]=l[2]+y[2]*(_[2]-l[2]),T}function se(l,_,y){const g=y??new o(3);return g[0]=Math.max(l[0],_[0]),g[1]=Math.max(l[1],_[1]),g[2]=Math.max(l[2],_[2]),g}function W(l,_,y){const g=y??new o(3);return g[0]=Math.min(l[0],_[0]),g[1]=Math.min(l[1],_[1]),g[2]=Math.min(l[2],_[2]),g}function J(l,_,y){const g=y??new o(3);return g[0]=l[0]*_,g[1]=l[1]*_,g[2]=l[2]*_,g}const N=J;function pe(l,_,y){const g=y??new o(3);return g[0]=l[0]/_,g[1]=l[1]/_,g[2]=l[2]/_,g}function he(l,_){const y=_??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const _e=he;function ae(l,_,y){const g=y??new o(3),T=l[2]*_[0]-l[0]*_[2],U=l[0]*_[1]-l[1]*_[0];return g[0]=l[1]*_[2]-l[2]*_[1],g[1]=T,g[2]=U,g}function ue(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function Te(l){const _=l[0],y=l[1],g=l[2];return Math.sqrt(_*_+y*y+g*g)}const ee=Te;function fe(l){const _=l[0],y=l[1],g=l[2];return _*_+y*y+g*g}const be=fe;function Le(l,_){const y=l[0]-_[0],g=l[1]-_[1],T=l[2]-_[2];return Math.sqrt(y*y+g*g+T*T)}const Ae=Le;function Z(l,_){const y=l[0]-_[0],g=l[1]-_[1],T=l[2]-_[2];return y*y+g*g+T*T}const j=Z;function O(l,_){const y=_??new o(3),g=l[0],T=l[1],U=l[2],F=Math.sqrt(g*g+T*T+U*U);return F>1e-5?(y[0]=g/F,y[1]=T/F,y[2]=U/F):(y[0]=0,y[1]=0,y[2]=0),y}function we(l,_){const y=_??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function Ce(l,_){const y=_??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const Ve=Ce;function Ge(l,_,y){const g=y??new o(3);return g[0]=l[0]*_[0],g[1]=l[1]*_[1],g[2]=l[2]*_[2],g}const Ne=Ge;function le(l,_,y){const g=y??new o(3);return g[0]=l[0]/_[0],g[1]=l[1]/_[1],g[2]=l[2]/_[2],g}const Pe=le;function ke(l=1,_){const y=_??new o(3),g=Math.random()*2*Math.PI,T=Math.random()*2-1,U=Math.sqrt(1-T*T)*l;return y[0]=Math.cos(g)*U,y[1]=Math.sin(g)*U,y[2]=T*l,y}function B(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function V(l,_,y){const g=y??new o(3),T=l[0],U=l[1],F=l[2],ce=_[3]*T+_[7]*U+_[11]*F+_[15]||1;return g[0]=(_[0]*T+_[4]*U+_[8]*F+_[12])/ce,g[1]=(_[1]*T+_[5]*U+_[9]*F+_[13])/ce,g[2]=(_[2]*T+_[6]*U+_[10]*F+_[14])/ce,g}function v(l,_,y){const g=y??new o(3),T=l[0],U=l[1],F=l[2];return g[0]=T*_[0*4+0]+U*_[1*4+0]+F*_[2*4+0],g[1]=T*_[0*4+1]+U*_[1*4+1]+F*_[2*4+1],g[2]=T*_[0*4+2]+U*_[1*4+2]+F*_[2*4+2],g}function i(l,_,y){const g=y??new o(3),T=l[0],U=l[1],F=l[2];return g[0]=T*_[0]+U*_[4]+F*_[8],g[1]=T*_[1]+U*_[5]+F*_[9],g[2]=T*_[2]+U*_[6]+F*_[10],g}function f(l,_,y){const g=y??new o(3),T=_[0],U=_[1],F=_[2],ce=_[3]*2,re=l[0],te=l[1],xe=l[2],Me=U*xe-F*te,ge=F*re-T*xe,ye=T*te-U*re;return g[0]=re+Me*ce+(U*ye-F*ge)*2,g[1]=te+ge*ce+(F*Me-T*ye)*2,g[2]=xe+ye*ce+(T*ge-U*Me)*2,g}function u(l,_){const y=_??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function b(l,_,y){const g=y??new o(3),T=_*4;return g[0]=l[T+0],g[1]=l[T+1],g[2]=l[T+2],g}function x(l,_){const y=_??new o(3),g=l[0],T=l[1],U=l[2],F=l[4],ce=l[5],re=l[6],te=l[8],xe=l[9],Me=l[10];return y[0]=Math.sqrt(g*g+T*T+U*U),y[1]=Math.sqrt(F*F+ce*ce+re*re),y[2]=Math.sqrt(te*te+xe*xe+Me*Me),y}function k(l,_,y,g){const T=g??new o(3),U=[],F=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],F[0]=U[0],F[1]=U[1]*Math.cos(y)-U[2]*Math.sin(y),F[2]=U[1]*Math.sin(y)+U[2]*Math.cos(y),T[0]=F[0]+_[0],T[1]=F[1]+_[1],T[2]=F[2]+_[2],T}function P(l,_,y,g){const T=g??new o(3),U=[],F=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],F[0]=U[2]*Math.sin(y)+U[0]*Math.cos(y),F[1]=U[1],F[2]=U[2]*Math.cos(y)-U[0]*Math.sin(y),T[0]=F[0]+_[0],T[1]=F[1]+_[1],T[2]=F[2]+_[2],T}function r(l,_,y,g){const T=g??new o(3),U=[],F=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],F[0]=U[0]*Math.cos(y)-U[1]*Math.sin(y),F[1]=U[0]*Math.sin(y)+U[1]*Math.cos(y),F[2]=U[2],T[0]=F[0]+_[0],T[1]=F[1]+_[1],T[2]=F[2]+_[2],T}function m(l,_,y){const g=y??new o(3);return O(l,g),J(g,_,g)}function d(l,_,y){const g=y??new o(3);return Te(l)>_?m(l,_,g):Ce(l,g)}function p(l,_,y){const g=y??new o(3);return Y(l,_,.5,g)}return{create:a,fromValues:h,set:E,ceil:w,floor:S,round:M,clamp:L,add:A,addScaled:I,angle:K,subtract:q,sub:z,equalsApproximately:X,equals:oe,lerp:Y,lerpV:Q,max:se,min:W,mulScalar:J,scale:N,divScalar:pe,inverse:he,invert:_e,cross:ae,dot:ue,length:Te,len:ee,lengthSq:fe,lenSq:be,distance:Le,dist:Ae,distanceSq:Z,distSq:j,normalize:O,negate:we,copy:Ce,clone:Ve,multiply:Ge,mul:Ne,divide:le,div:Pe,random:ke,zero:B,transformMat4:V,transformMat4Upper3x3:v,transformMat3:i,transformQuat:f,getTranslation:u,getAxis:b,getScaling:x,rotateX:k,rotateY:P,rotateZ:r,setLength:m,truncate:d,midpoint:p}}const Zr=new Map;function cs(o){let a=Zr.get(o);return a||(a=Tl(o),Zr.set(o,a)),a}function Al(o){const a=bi(o),h=cs(o);function E(i,f,u,b,x,k,P,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,f!==void 0&&(d[1]=f,u!==void 0&&(d[2]=u,b!==void 0&&(d[4]=b,x!==void 0&&(d[5]=x,k!==void 0&&(d[6]=k,P!==void 0&&(d[8]=P,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(i,f,u,b,x,k,P,r,m,d){const p=d??new o(12);return p[0]=i,p[1]=f,p[2]=u,p[3]=0,p[4]=b,p[5]=x,p[6]=k,p[7]=0,p[8]=P,p[9]=r,p[10]=m,p[11]=0,p}function S(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function M(i,f){const u=f??new o(12),b=i[0],x=i[1],k=i[2],P=i[3],r=b+b,m=x+x,d=k+k,p=b*r,l=x*r,_=x*m,y=k*r,g=k*m,T=k*d,U=P*r,F=P*m,ce=P*d;return u[0]=1-_-T,u[1]=l+ce,u[2]=y-F,u[3]=0,u[4]=l-ce,u[5]=1-p-T,u[6]=g+U,u[7]=0,u[8]=y+F,u[9]=g-U,u[10]=1-p-_,u[11]=0,u}function L(i,f){const u=f??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function A(i,f,u){const b=u??new o(12);return b[0]=i[0]*f,b[1]=i[1]*f,b[2]=i[2]*f,b[4]=i[4]*f,b[5]=i[5]*f,b[6]=i[6]*f,b[8]=i[8]*f,b[9]=i[9]*f,b[10]=i[10]*f,b}const I=A;function K(i,f,u){const b=u??new o(12);return b[0]=i[0]+f[0],b[1]=i[1]+f[1],b[2]=i[2]+f[2],b[4]=i[4]+f[4],b[5]=i[5]+f[5],b[6]=i[6]+f[6],b[8]=i[8]+f[8],b[9]=i[9]+f[9],b[10]=i[10]+f[10],b}function q(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const z=q;function X(i,f){return Math.abs(i[0]-f[0])<ze&&Math.abs(i[1]-f[1])<ze&&Math.abs(i[2]-f[2])<ze&&Math.abs(i[4]-f[4])<ze&&Math.abs(i[5]-f[5])<ze&&Math.abs(i[6]-f[6])<ze&&Math.abs(i[8]-f[8])<ze&&Math.abs(i[9]-f[9])<ze&&Math.abs(i[10]-f[10])<ze}function oe(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function Y(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function Q(i,f){const u=f??new o(12);if(u===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,u}const b=i[0*4+0],x=i[0*4+1],k=i[0*4+2],P=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2];return u[0]=b,u[1]=P,u[2]=d,u[4]=x,u[5]=r,u[6]=p,u[8]=k,u[9]=m,u[10]=l,u}function se(i,f){const u=f??new o(12),b=i[0*4+0],x=i[0*4+1],k=i[0*4+2],P=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2],_=l*r-m*p,y=-l*P+m*d,g=p*P-r*d,T=1/(b*_+x*y+k*g);return u[0]=_*T,u[1]=(-l*x+k*p)*T,u[2]=(m*x-k*r)*T,u[4]=y*T,u[5]=(l*b-k*d)*T,u[6]=(-m*b+k*P)*T,u[8]=g*T,u[9]=(-p*b+x*d)*T,u[10]=(r*b-x*P)*T,u}function W(i){const f=i[0],u=i[0*4+1],b=i[0*4+2],x=i[1*4+0],k=i[1*4+1],P=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return f*(k*d-m*P)-x*(u*d-m*b)+r*(u*P-k*b)}const J=se;function N(i,f,u){const b=u??new o(12),x=i[0],k=i[1],P=i[2],r=i[4+0],m=i[4+1],d=i[4+2],p=i[8+0],l=i[8+1],_=i[8+2],y=f[0],g=f[1],T=f[2],U=f[4+0],F=f[4+1],ce=f[4+2],re=f[8+0],te=f[8+1],xe=f[8+2];return b[0]=x*y+r*g+p*T,b[1]=k*y+m*g+l*T,b[2]=P*y+d*g+_*T,b[4]=x*U+r*F+p*ce,b[5]=k*U+m*F+l*ce,b[6]=P*U+d*F+_*ce,b[8]=x*re+r*te+p*xe,b[9]=k*re+m*te+l*xe,b[10]=P*re+d*te+_*xe,b}const pe=N;function he(i,f,u){const b=u??Y();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function _e(i,f){const u=f??a.create();return u[0]=i[8],u[1]=i[9],u}function ae(i,f,u){const b=u??a.create(),x=f*4;return b[0]=i[x+0],b[1]=i[x+1],b}function ue(i,f,u,b){const x=b===i?i:q(i,b),k=u*4;return x[k+0]=f[0],x[k+1]=f[1],x}function Te(i,f){const u=f??a.create(),b=i[0],x=i[1],k=i[4],P=i[5];return u[0]=Math.sqrt(b*b+x*x),u[1]=Math.sqrt(k*k+P*P),u}function ee(i,f){const u=f??h.create(),b=i[0],x=i[1],k=i[2],P=i[4],r=i[5],m=i[6],d=i[8],p=i[9],l=i[10];return u[0]=Math.sqrt(b*b+x*x+k*k),u[1]=Math.sqrt(P*P+r*r+m*m),u[2]=Math.sqrt(d*d+p*p+l*l),u}function fe(i,f){const u=f??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function be(i,f,u){const b=u??new o(12),x=f[0],k=f[1],P=i[0],r=i[1],m=i[2],d=i[1*4+0],p=i[1*4+1],l=i[1*4+2],_=i[2*4+0],y=i[2*4+1],g=i[2*4+2];return i!==b&&(b[0]=P,b[1]=r,b[2]=m,b[4]=d,b[5]=p,b[6]=l),b[8]=P*x+d*k+_,b[9]=r*x+p*k+y,b[10]=m*x+l*k+g,b}function Le(i,f){const u=f??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=b,u[1]=x,u[2]=0,u[4]=-x,u[5]=b,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ae(i,f,u){const b=u??new o(12),x=i[0*4+0],k=i[0*4+1],P=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],p=Math.cos(f),l=Math.sin(f);return b[0]=p*x+l*r,b[1]=p*k+l*m,b[2]=p*P+l*d,b[4]=p*r-l*x,b[5]=p*m-l*k,b[6]=p*d-l*P,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Z(i,f){const u=f??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=b,u[6]=x,u[8]=0,u[9]=-x,u[10]=b,u}function j(i,f,u){const b=u??new o(12),x=i[4],k=i[5],P=i[6],r=i[8],m=i[9],d=i[10],p=Math.cos(f),l=Math.sin(f);return b[4]=p*x+l*r,b[5]=p*k+l*m,b[6]=p*P+l*d,b[8]=p*r-l*x,b[9]=p*m-l*k,b[10]=p*d-l*P,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function O(i,f){const u=f??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=b,u[1]=0,u[2]=-x,u[4]=0,u[5]=1,u[6]=0,u[8]=x,u[9]=0,u[10]=b,u}function we(i,f,u){const b=u??new o(12),x=i[0*4+0],k=i[0*4+1],P=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],p=Math.cos(f),l=Math.sin(f);return b[0]=p*x-l*r,b[1]=p*k-l*m,b[2]=p*P-l*d,b[8]=p*r+l*x,b[9]=p*m+l*k,b[10]=p*d+l*P,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Ce=Le,Ve=Ae;function Ge(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ne(i,f,u){const b=u??new o(12),x=f[0],k=f[1];return b[0]=x*i[0*4+0],b[1]=x*i[0*4+1],b[2]=x*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function le(i,f){const u=f??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function Pe(i,f,u){const b=u??new o(12),x=f[0],k=f[1],P=f[2];return b[0]=x*i[0*4+0],b[1]=x*i[0*4+1],b[2]=x*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],b[8]=P*i[2*4+0],b[9]=P*i[2*4+1],b[10]=P*i[2*4+2],b}function ke(i,f){const u=f??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function B(i,f,u){const b=u??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function V(i,f){const u=f??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function v(i,f,u){const b=u??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],b[8]=f*i[2*4+0],b[9]=f*i[2*4+1],b[10]=f*i[2*4+2],b}return{add:K,clone:z,copy:q,create:E,determinant:W,equals:oe,equalsApproximately:X,fromMat4:S,fromQuat:M,get3DScaling:ee,getAxis:ae,getScaling:Te,getTranslation:_e,identity:Y,inverse:se,invert:J,mul:pe,mulScalar:I,multiply:N,multiplyScalar:A,negate:L,rotate:Ae,rotateX:j,rotateY:we,rotateZ:Ve,rotation:Le,rotationX:Z,rotationY:O,rotationZ:Ce,scale:Ne,scale3D:Pe,scaling:Ge,scaling3D:le,set:w,setAxis:ue,setTranslation:he,translate:be,translation:fe,transpose:Q,uniformScale:B,uniformScale3D:v,uniformScaling:ke,uniformScaling3D:V}}const Xr=new Map;function Dl(o){let a=Xr.get(o);return a||(a=Al(o),Xr.set(o,a)),a}function Ll(o){const a=cs(o);function h(r,m,d,p,l,_,y,g,T,U,F,ce,re,te,xe,Me){const ge=new o(16);return r!==void 0&&(ge[0]=r,m!==void 0&&(ge[1]=m,d!==void 0&&(ge[2]=d,p!==void 0&&(ge[3]=p,l!==void 0&&(ge[4]=l,_!==void 0&&(ge[5]=_,y!==void 0&&(ge[6]=y,g!==void 0&&(ge[7]=g,T!==void 0&&(ge[8]=T,U!==void 0&&(ge[9]=U,F!==void 0&&(ge[10]=F,ce!==void 0&&(ge[11]=ce,re!==void 0&&(ge[12]=re,te!==void 0&&(ge[13]=te,xe!==void 0&&(ge[14]=xe,Me!==void 0&&(ge[15]=Me)))))))))))))))),ge}function E(r,m,d,p,l,_,y,g,T,U,F,ce,re,te,xe,Me,ge){const ye=ge??new o(16);return ye[0]=r,ye[1]=m,ye[2]=d,ye[3]=p,ye[4]=l,ye[5]=_,ye[6]=y,ye[7]=g,ye[8]=T,ye[9]=U,ye[10]=F,ye[11]=ce,ye[12]=re,ye[13]=te,ye[14]=xe,ye[15]=Me,ye}function w(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function S(r,m){const d=m??new o(16),p=r[0],l=r[1],_=r[2],y=r[3],g=p+p,T=l+l,U=_+_,F=p*g,ce=l*g,re=l*T,te=_*g,xe=_*T,Me=_*U,ge=y*g,ye=y*T,Ie=y*U;return d[0]=1-re-Me,d[1]=ce+Ie,d[2]=te-ye,d[3]=0,d[4]=ce-Ie,d[5]=1-F-Me,d[6]=xe+ge,d[7]=0,d[8]=te+ye,d[9]=xe-ge,d[10]=1-F-re,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function L(r,m,d){const p=d??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function A(r,m,d){const p=d??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const I=A;function K(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const q=K;function z(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function X(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function oe(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Y(r,m){const d=m??new o(16);if(d===r){let Re;return Re=r[1],r[1]=r[4],r[4]=Re,Re=r[2],r[2]=r[8],r[8]=Re,Re=r[3],r[3]=r[12],r[12]=Re,Re=r[6],r[6]=r[9],r[9]=Re,Re=r[7],r[7]=r[13],r[13]=Re,Re=r[11],r[11]=r[14],r[14]=Re,d}const p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],T=r[1*4+1],U=r[1*4+2],F=r[1*4+3],ce=r[2*4+0],re=r[2*4+1],te=r[2*4+2],xe=r[2*4+3],Me=r[3*4+0],ge=r[3*4+1],ye=r[3*4+2],Ie=r[3*4+3];return d[0]=p,d[1]=g,d[2]=ce,d[3]=Me,d[4]=l,d[5]=T,d[6]=re,d[7]=ge,d[8]=_,d[9]=U,d[10]=te,d[11]=ye,d[12]=y,d[13]=F,d[14]=xe,d[15]=Ie,d}function Q(r,m){const d=m??new o(16),p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],T=r[1*4+1],U=r[1*4+2],F=r[1*4+3],ce=r[2*4+0],re=r[2*4+1],te=r[2*4+2],xe=r[2*4+3],Me=r[3*4+0],ge=r[3*4+1],ye=r[3*4+2],Ie=r[3*4+3],Re=te*Ie,Oe=ye*xe,je=U*Ie,He=ye*F,tt=U*xe,Ye=te*F,Qe=_*Ie,Ze=ye*y,lt=_*xe,Je=te*y,ot=_*F,st=U*y,qe=ce*ge,rt=Me*re,We=g*ge,ct=Me*T,it=g*re,Rt=ce*T,_t=p*ge,Tt=Me*l,Dt=p*re,$t=ce*l,qt=p*T,nt=g*l,fn=Re*T+He*re+tt*ge-(Oe*T+je*re+Ye*ge),Wt=Oe*l+Qe*re+Je*ge-(Re*l+Ze*re+lt*ge),_n=je*l+Ze*T+ot*ge-(He*l+Qe*T+st*ge),mn=Ye*l+lt*T+st*re-(tt*l+Je*T+ot*re),Xe=1/(p*fn+g*Wt+ce*_n+Me*mn);return d[0]=Xe*fn,d[1]=Xe*Wt,d[2]=Xe*_n,d[3]=Xe*mn,d[4]=Xe*(Oe*g+je*ce+Ye*Me-(Re*g+He*ce+tt*Me)),d[5]=Xe*(Re*p+Ze*ce+lt*Me-(Oe*p+Qe*ce+Je*Me)),d[6]=Xe*(He*p+Qe*g+st*Me-(je*p+Ze*g+ot*Me)),d[7]=Xe*(tt*p+Je*g+ot*ce-(Ye*p+lt*g+st*ce)),d[8]=Xe*(qe*F+ct*xe+it*Ie-(rt*F+We*xe+Rt*Ie)),d[9]=Xe*(rt*y+_t*xe+$t*Ie-(qe*y+Tt*xe+Dt*Ie)),d[10]=Xe*(We*y+Tt*F+qt*Ie-(ct*y+_t*F+nt*Ie)),d[11]=Xe*(Rt*y+Dt*F+nt*xe-(it*y+$t*F+qt*xe)),d[12]=Xe*(We*te+Rt*ye+rt*U-(it*ye+qe*U+ct*te)),d[13]=Xe*(Dt*ye+qe*_+Tt*te-(_t*te+$t*ye+rt*_)),d[14]=Xe*(_t*U+nt*ye+ct*_-(qt*ye+We*_+Tt*U)),d[15]=Xe*(qt*te+it*_+$t*U-(Dt*U+nt*te+Rt*_)),d}function se(r){const m=r[0],d=r[0*4+1],p=r[0*4+2],l=r[0*4+3],_=r[1*4+0],y=r[1*4+1],g=r[1*4+2],T=r[1*4+3],U=r[2*4+0],F=r[2*4+1],ce=r[2*4+2],re=r[2*4+3],te=r[3*4+0],xe=r[3*4+1],Me=r[3*4+2],ge=r[3*4+3],ye=ce*ge,Ie=Me*re,Re=g*ge,Oe=Me*T,je=g*re,He=ce*T,tt=p*ge,Ye=Me*l,Qe=p*re,Ze=ce*l,lt=p*T,Je=g*l,ot=ye*y+Oe*F+je*xe-(Ie*y+Re*F+He*xe),st=Ie*d+tt*F+Ze*xe-(ye*d+Ye*F+Qe*xe),qe=Re*d+Ye*y+lt*xe-(Oe*d+tt*y+Je*xe),rt=He*d+Qe*y+Je*F-(je*d+Ze*y+lt*F);return m*ot+_*st+U*qe+te*rt}const W=Q;function J(r,m,d){const p=d??new o(16),l=r[0],_=r[1],y=r[2],g=r[3],T=r[4+0],U=r[4+1],F=r[4+2],ce=r[4+3],re=r[8+0],te=r[8+1],xe=r[8+2],Me=r[8+3],ge=r[12+0],ye=r[12+1],Ie=r[12+2],Re=r[12+3],Oe=m[0],je=m[1],He=m[2],tt=m[3],Ye=m[4+0],Qe=m[4+1],Ze=m[4+2],lt=m[4+3],Je=m[8+0],ot=m[8+1],st=m[8+2],qe=m[8+3],rt=m[12+0],We=m[12+1],ct=m[12+2],it=m[12+3];return p[0]=l*Oe+T*je+re*He+ge*tt,p[1]=_*Oe+U*je+te*He+ye*tt,p[2]=y*Oe+F*je+xe*He+Ie*tt,p[3]=g*Oe+ce*je+Me*He+Re*tt,p[4]=l*Ye+T*Qe+re*Ze+ge*lt,p[5]=_*Ye+U*Qe+te*Ze+ye*lt,p[6]=y*Ye+F*Qe+xe*Ze+Ie*lt,p[7]=g*Ye+ce*Qe+Me*Ze+Re*lt,p[8]=l*Je+T*ot+re*st+ge*qe,p[9]=_*Je+U*ot+te*st+ye*qe,p[10]=y*Je+F*ot+xe*st+Ie*qe,p[11]=g*Je+ce*ot+Me*st+Re*qe,p[12]=l*rt+T*We+re*ct+ge*it,p[13]=_*rt+U*We+te*ct+ye*it,p[14]=y*rt+F*We+xe*ct+Ie*it,p[15]=g*rt+ce*We+Me*ct+Re*it,p}const N=J;function pe(r,m,d){const p=d??oe();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function he(r,m){const d=m??a.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function _e(r,m,d){const p=d??a.create(),l=m*4;return p[0]=r[l+0],p[1]=r[l+1],p[2]=r[l+2],p}function ae(r,m,d,p){const l=p===r?p:K(r,p),_=d*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function ue(r,m){const d=m??a.create(),p=r[0],l=r[1],_=r[2],y=r[4],g=r[5],T=r[6],U=r[8],F=r[9],ce=r[10];return d[0]=Math.sqrt(p*p+l*l+_*_),d[1]=Math.sqrt(y*y+g*g+T*T),d[2]=Math.sqrt(U*U+F*F+ce*ce),d}function Te(r,m,d,p,l){const _=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const g=1/(d-p);_[10]=p*g,_[14]=p*d*g}else _[10]=-1,_[14]=-d;return _}function ee(r,m,d,p=1/0,l){const _=l??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=d;else{const g=1/(p-d);_[10]=d*g,_[14]=p*d*g}return _}function fe(r,m,d,p,l,_,y){const g=y??new o(16);return g[0]=2/(m-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(p-d),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(l-_),g[11]=0,g[12]=(m+r)/(r-m),g[13]=(p+d)/(d-p),g[14]=l/(l-_),g[15]=1,g}function be(r,m,d,p,l,_,y){const g=y??new o(16),T=m-r,U=p-d,F=l-_;return g[0]=2*l/T,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/U,g[6]=0,g[7]=0,g[8]=(r+m)/T,g[9]=(p+d)/U,g[10]=_/F,g[11]=-1,g[12]=0,g[13]=0,g[14]=l*_/F,g[15]=0,g}function Le(r,m,d,p,l,_=1/0,y){const g=y??new o(16),T=m-r,U=p-d;if(g[0]=2*l/T,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/U,g[6]=0,g[7]=0,g[8]=(r+m)/T,g[9]=(p+d)/U,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,_===1/0)g[10]=0,g[14]=l;else{const F=1/(_-l);g[10]=l*F,g[14]=_*l*F}return g}const Ae=a.create(),Z=a.create(),j=a.create();function O(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(m,r,j),j),a.normalize(a.cross(d,j,Ae),Ae),a.normalize(a.cross(j,Ae,Z),Z),l[0]=Ae[0],l[1]=Ae[1],l[2]=Ae[2],l[3]=0,l[4]=Z[0],l[5]=Z[1],l[6]=Z[2],l[7]=0,l[8]=j[0],l[9]=j[1],l[10]=j[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function we(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,j),j),a.normalize(a.cross(d,j,Ae),Ae),a.normalize(a.cross(j,Ae,Z),Z),l[0]=Ae[0],l[1]=Ae[1],l[2]=Ae[2],l[3]=0,l[4]=Z[0],l[5]=Z[1],l[6]=Z[2],l[7]=0,l[8]=j[0],l[9]=j[1],l[10]=j[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ce(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,j),j),a.normalize(a.cross(d,j,Ae),Ae),a.normalize(a.cross(j,Ae,Z),Z),l[0]=Ae[0],l[1]=Z[0],l[2]=j[0],l[3]=0,l[4]=Ae[1],l[5]=Z[1],l[6]=j[1],l[7]=0,l[8]=Ae[2],l[9]=Z[2],l[10]=j[2],l[11]=0,l[12]=-(Ae[0]*r[0]+Ae[1]*r[1]+Ae[2]*r[2]),l[13]=-(Z[0]*r[0]+Z[1]*r[1]+Z[2]*r[2]),l[14]=-(j[0]*r[0]+j[1]*r[1]+j[2]*r[2]),l[15]=1,l}function Ve(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function Ge(r,m,d){const p=d??new o(16),l=m[0],_=m[1],y=m[2],g=r[0],T=r[1],U=r[2],F=r[3],ce=r[1*4+0],re=r[1*4+1],te=r[1*4+2],xe=r[1*4+3],Me=r[2*4+0],ge=r[2*4+1],ye=r[2*4+2],Ie=r[2*4+3],Re=r[3*4+0],Oe=r[3*4+1],je=r[3*4+2],He=r[3*4+3];return r!==p&&(p[0]=g,p[1]=T,p[2]=U,p[3]=F,p[4]=ce,p[5]=re,p[6]=te,p[7]=xe,p[8]=Me,p[9]=ge,p[10]=ye,p[11]=Ie),p[12]=g*l+ce*_+Me*y+Re,p[13]=T*l+re*_+ge*y+Oe,p[14]=U*l+te*_+ye*y+je,p[15]=F*l+xe*_+Ie*y+He,p}function Ne(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=l,d[7]=0,d[8]=0,d[9]=-l,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function le(r,m,d){const p=d??new o(16),l=r[4],_=r[5],y=r[6],g=r[7],T=r[8],U=r[9],F=r[10],ce=r[11],re=Math.cos(m),te=Math.sin(m);return p[4]=re*l+te*T,p[5]=re*_+te*U,p[6]=re*y+te*F,p[7]=re*g+te*ce,p[8]=re*T-te*l,p[9]=re*U-te*_,p[10]=re*F-te*y,p[11]=re*ce-te*g,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function Pe(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=0,d[2]=-l,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=l,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ke(r,m,d){const p=d??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],T=r[2*4+0],U=r[2*4+1],F=r[2*4+2],ce=r[2*4+3],re=Math.cos(m),te=Math.sin(m);return p[0]=re*l-te*T,p[1]=re*_-te*U,p[2]=re*y-te*F,p[3]=re*g-te*ce,p[8]=re*T+te*l,p[9]=re*U+te*_,p[10]=re*F+te*y,p[11]=re*ce+te*g,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=l,d[2]=0,d[3]=0,d[4]=-l,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function V(r,m,d){const p=d??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],T=r[1*4+0],U=r[1*4+1],F=r[1*4+2],ce=r[1*4+3],re=Math.cos(m),te=Math.sin(m);return p[0]=re*l+te*T,p[1]=re*_+te*U,p[2]=re*y+te*F,p[3]=re*g+te*ce,p[4]=re*T-te*l,p[5]=re*U-te*_,p[6]=re*F-te*y,p[7]=re*ce-te*g,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function v(r,m,d){const p=d??new o(16);let l=r[0],_=r[1],y=r[2];const g=Math.sqrt(l*l+_*_+y*y);l/=g,_/=g,y/=g;const T=l*l,U=_*_,F=y*y,ce=Math.cos(m),re=Math.sin(m),te=1-ce;return p[0]=T+(1-T)*ce,p[1]=l*_*te+y*re,p[2]=l*y*te-_*re,p[3]=0,p[4]=l*_*te-y*re,p[5]=U+(1-U)*ce,p[6]=_*y*te+l*re,p[7]=0,p[8]=l*y*te+_*re,p[9]=_*y*te-l*re,p[10]=F+(1-F)*ce,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=v;function f(r,m,d,p){const l=p??new o(16);let _=m[0],y=m[1],g=m[2];const T=Math.sqrt(_*_+y*y+g*g);_/=T,y/=T,g/=T;const U=_*_,F=y*y,ce=g*g,re=Math.cos(d),te=Math.sin(d),xe=1-re,Me=U+(1-U)*re,ge=_*y*xe+g*te,ye=_*g*xe-y*te,Ie=_*y*xe-g*te,Re=F+(1-F)*re,Oe=y*g*xe+_*te,je=_*g*xe+y*te,He=y*g*xe-_*te,tt=ce+(1-ce)*re,Ye=r[0],Qe=r[1],Ze=r[2],lt=r[3],Je=r[4],ot=r[5],st=r[6],qe=r[7],rt=r[8],We=r[9],ct=r[10],it=r[11];return l[0]=Me*Ye+ge*Je+ye*rt,l[1]=Me*Qe+ge*ot+ye*We,l[2]=Me*Ze+ge*st+ye*ct,l[3]=Me*lt+ge*qe+ye*it,l[4]=Ie*Ye+Re*Je+Oe*rt,l[5]=Ie*Qe+Re*ot+Oe*We,l[6]=Ie*Ze+Re*st+Oe*ct,l[7]=Ie*lt+Re*qe+Oe*it,l[8]=je*Ye+He*Je+tt*rt,l[9]=je*Qe+He*ot+tt*We,l[10]=je*Ze+He*st+tt*ct,l[11]=je*lt+He*qe+tt*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const u=f;function b(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function x(r,m,d){const p=d??new o(16),l=m[0],_=m[1],y=m[2];return p[0]=l*r[0*4+0],p[1]=l*r[0*4+1],p[2]=l*r[0*4+2],p[3]=l*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=y*r[2*4+0],p[9]=y*r[2*4+1],p[10]=y*r[2*4+2],p[11]=y*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function k(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function P(r,m,d){const p=d??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:L,aim:O,axisRotate:f,axisRotation:v,cameraAim:we,clone:q,copy:K,create:h,determinant:se,equals:X,equalsApproximately:z,fromMat3:w,fromQuat:S,frustum:be,frustumReverseZ:Le,getAxis:_e,getScaling:ue,getTranslation:he,identity:oe,inverse:Q,invert:W,lookAt:Ce,mul:N,mulScalar:I,multiply:J,multiplyScalar:A,negate:M,ortho:fe,perspective:Te,perspectiveReverseZ:ee,rotate:u,rotateX:le,rotateY:ke,rotateZ:V,rotation:i,rotationX:Ne,rotationY:Pe,rotationZ:B,scale:x,scaling:b,set:E,setAxis:ae,setTranslation:pe,translate:Ge,translation:Ve,transpose:Y,uniformScale:P,uniformScaling:k}}const Qr=new Map;function Il(o){let a=Qr.get(o);return a||(a=Ll(o),Qr.set(o,a)),a}function Rl(o){const a=cs(o);function h(B,V,v,i){const f=new o(4);return B!==void 0&&(f[0]=B,V!==void 0&&(f[1]=V,v!==void 0&&(f[2]=v,i!==void 0&&(f[3]=i)))),f}const E=h;function w(B,V,v,i,f){const u=f??new o(4);return u[0]=B,u[1]=V,u[2]=v,u[3]=i,u}function S(B,V,v){const i=v??new o(4),f=V*.5,u=Math.sin(f);return i[0]=u*B[0],i[1]=u*B[1],i[2]=u*B[2],i[3]=Math.cos(f),i}function M(B,V){const v=V??a.create(3),i=Math.acos(B[3])*2,f=Math.sin(i*.5);return f>ze?(v[0]=B[0]/f,v[1]=B[1]/f,v[2]=B[2]/f):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function L(B,V){const v=Te(B,V);return Math.acos(2*v*v-1)}function A(B,V,v){const i=v??new o(4),f=B[0],u=B[1],b=B[2],x=B[3],k=V[0],P=V[1],r=V[2],m=V[3];return i[0]=f*m+x*k+u*r-b*P,i[1]=u*m+x*P+b*k-f*r,i[2]=b*m+x*r+f*P-u*k,i[3]=x*m-f*k-u*P-b*r,i}const I=A;function K(B,V,v){const i=v??new o(4),f=V*.5,u=B[0],b=B[1],x=B[2],k=B[3],P=Math.sin(f),r=Math.cos(f);return i[0]=u*r+k*P,i[1]=b*r+x*P,i[2]=x*r-b*P,i[3]=k*r-u*P,i}function q(B,V,v){const i=v??new o(4),f=V*.5,u=B[0],b=B[1],x=B[2],k=B[3],P=Math.sin(f),r=Math.cos(f);return i[0]=u*r-x*P,i[1]=b*r+k*P,i[2]=x*r+u*P,i[3]=k*r-b*P,i}function z(B,V,v){const i=v??new o(4),f=V*.5,u=B[0],b=B[1],x=B[2],k=B[3],P=Math.sin(f),r=Math.cos(f);return i[0]=u*r+b*P,i[1]=b*r-u*P,i[2]=x*r+k*P,i[3]=k*r-x*P,i}function X(B,V,v,i){const f=i??new o(4),u=B[0],b=B[1],x=B[2],k=B[3];let P=V[0],r=V[1],m=V[2],d=V[3],p=u*P+b*r+x*m+k*d;p<0&&(p=-p,P=-P,r=-r,m=-m,d=-d);let l,_;if(1-p>ze){const y=Math.acos(p),g=Math.sin(y);l=Math.sin((1-v)*y)/g,_=Math.sin(v*y)/g}else l=1-v,_=v;return f[0]=l*u+_*P,f[1]=l*b+_*r,f[2]=l*x+_*m,f[3]=l*k+_*d,f}function oe(B,V){const v=V??new o(4),i=B[0],f=B[1],u=B[2],b=B[3],x=i*i+f*f+u*u+b*b,k=x?1/x:0;return v[0]=-i*k,v[1]=-f*k,v[2]=-u*k,v[3]=b*k,v}function Y(B,V){const v=V??new o(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function Q(B,V){const v=V??new o(4),i=B[0]+B[5]+B[10];if(i>0){const f=Math.sqrt(i+1);v[3]=.5*f;const u=.5/f;v[0]=(B[6]-B[9])*u,v[1]=(B[8]-B[2])*u,v[2]=(B[1]-B[4])*u}else{let f=0;B[5]>B[0]&&(f=1),B[10]>B[f*4+f]&&(f=2);const u=(f+1)%3,b=(f+2)%3,x=Math.sqrt(B[f*4+f]-B[u*4+u]-B[b*4+b]+1);v[f]=.5*x;const k=.5/x;v[3]=(B[u*4+b]-B[b*4+u])*k,v[u]=(B[u*4+f]+B[f*4+u])*k,v[b]=(B[b*4+f]+B[f*4+b])*k}return v}function se(B,V,v,i,f){const u=f??new o(4),b=B*.5,x=V*.5,k=v*.5,P=Math.sin(b),r=Math.cos(b),m=Math.sin(x),d=Math.cos(x),p=Math.sin(k),l=Math.cos(k);switch(i){case"xyz":u[0]=P*d*l+r*m*p,u[1]=r*m*l-P*d*p,u[2]=r*d*p+P*m*l,u[3]=r*d*l-P*m*p;break;case"xzy":u[0]=P*d*l-r*m*p,u[1]=r*m*l-P*d*p,u[2]=r*d*p+P*m*l,u[3]=r*d*l+P*m*p;break;case"yxz":u[0]=P*d*l+r*m*p,u[1]=r*m*l-P*d*p,u[2]=r*d*p-P*m*l,u[3]=r*d*l+P*m*p;break;case"yzx":u[0]=P*d*l+r*m*p,u[1]=r*m*l+P*d*p,u[2]=r*d*p-P*m*l,u[3]=r*d*l-P*m*p;break;case"zxy":u[0]=P*d*l-r*m*p,u[1]=r*m*l+P*d*p,u[2]=r*d*p+P*m*l,u[3]=r*d*l-P*m*p;break;case"zyx":u[0]=P*d*l-r*m*p,u[1]=r*m*l+P*d*p,u[2]=r*d*p-P*m*l,u[3]=r*d*l+P*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function W(B,V){const v=V??new o(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const J=W;function N(B,V,v){const i=v??new o(4);return i[0]=B[0]+V[0],i[1]=B[1]+V[1],i[2]=B[2]+V[2],i[3]=B[3]+V[3],i}function pe(B,V,v){const i=v??new o(4);return i[0]=B[0]-V[0],i[1]=B[1]-V[1],i[2]=B[2]-V[2],i[3]=B[3]-V[3],i}const he=pe;function _e(B,V,v){const i=v??new o(4);return i[0]=B[0]*V,i[1]=B[1]*V,i[2]=B[2]*V,i[3]=B[3]*V,i}const ae=_e;function ue(B,V,v){const i=v??new o(4);return i[0]=B[0]/V,i[1]=B[1]/V,i[2]=B[2]/V,i[3]=B[3]/V,i}function Te(B,V){return B[0]*V[0]+B[1]*V[1]+B[2]*V[2]+B[3]*V[3]}function ee(B,V,v,i){const f=i??new o(4);return f[0]=B[0]+v*(V[0]-B[0]),f[1]=B[1]+v*(V[1]-B[1]),f[2]=B[2]+v*(V[2]-B[2]),f[3]=B[3]+v*(V[3]-B[3]),f}function fe(B){const V=B[0],v=B[1],i=B[2],f=B[3];return Math.sqrt(V*V+v*v+i*i+f*f)}const be=fe;function Le(B){const V=B[0],v=B[1],i=B[2],f=B[3];return V*V+v*v+i*i+f*f}const Ae=Le;function Z(B,V){const v=V??new o(4),i=B[0],f=B[1],u=B[2],b=B[3],x=Math.sqrt(i*i+f*f+u*u+b*b);return x>1e-5?(v[0]=i/x,v[1]=f/x,v[2]=u/x,v[3]=b/x):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function j(B,V){return Math.abs(B[0]-V[0])<ze&&Math.abs(B[1]-V[1])<ze&&Math.abs(B[2]-V[2])<ze&&Math.abs(B[3]-V[3])<ze}function O(B,V){return B[0]===V[0]&&B[1]===V[1]&&B[2]===V[2]&&B[3]===V[3]}function we(B){const V=B??new o(4);return V[0]=0,V[1]=0,V[2]=0,V[3]=1,V}const Ce=a.create(),Ve=a.create(),Ge=a.create();function Ne(B,V,v){const i=v??new o(4),f=a.dot(B,V);return f<-.999999?(a.cross(Ve,B,Ce),a.len(Ce)<1e-6&&a.cross(Ge,B,Ce),a.normalize(Ce,Ce),S(Ce,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(B,V,Ce),i[0]=Ce[0],i[1]=Ce[1],i[2]=Ce[2],i[3]=1+f,Z(i,i))}const le=new o(4),Pe=new o(4);function ke(B,V,v,i,f,u){const b=u??new o(4);return X(B,i,f,le),X(V,v,f,Pe),X(le,Pe,2*f*(1-f),b),b}return{create:h,fromValues:E,set:w,fromAxisAngle:S,toAxisAngle:M,angle:L,multiply:A,mul:I,rotateX:K,rotateY:q,rotateZ:z,slerp:X,inverse:oe,conjugate:Y,fromMat:Q,fromEuler:se,copy:W,clone:J,add:N,subtract:pe,sub:he,mulScalar:_e,scale:ae,divScalar:ue,dot:Te,lerp:ee,length:fe,len:be,lengthSq:Le,lenSq:Ae,normalize:Z,equalsApproximately:j,equals:O,identity:we,rotationTo:Ne,sqlerp:ke}}const Jr=new Map;function zl(o){let a=Jr.get(o);return a||(a=Rl(o),Jr.set(o,a)),a}function Gl(o){function a(v,i,f,u){const b=new o(4);return v!==void 0&&(b[0]=v,i!==void 0&&(b[1]=i,f!==void 0&&(b[2]=f,u!==void 0&&(b[3]=u)))),b}const h=a;function E(v,i,f,u,b){const x=b??new o(4);return x[0]=v,x[1]=i,x[2]=f,x[3]=u,x}function w(v,i){const f=i??new o(4);return f[0]=Math.ceil(v[0]),f[1]=Math.ceil(v[1]),f[2]=Math.ceil(v[2]),f[3]=Math.ceil(v[3]),f}function S(v,i){const f=i??new o(4);return f[0]=Math.floor(v[0]),f[1]=Math.floor(v[1]),f[2]=Math.floor(v[2]),f[3]=Math.floor(v[3]),f}function M(v,i){const f=i??new o(4);return f[0]=Math.round(v[0]),f[1]=Math.round(v[1]),f[2]=Math.round(v[2]),f[3]=Math.round(v[3]),f}function L(v,i=0,f=1,u){const b=u??new o(4);return b[0]=Math.min(f,Math.max(i,v[0])),b[1]=Math.min(f,Math.max(i,v[1])),b[2]=Math.min(f,Math.max(i,v[2])),b[3]=Math.min(f,Math.max(i,v[3])),b}function A(v,i,f){const u=f??new o(4);return u[0]=v[0]+i[0],u[1]=v[1]+i[1],u[2]=v[2]+i[2],u[3]=v[3]+i[3],u}function I(v,i,f,u){const b=u??new o(4);return b[0]=v[0]+i[0]*f,b[1]=v[1]+i[1]*f,b[2]=v[2]+i[2]*f,b[3]=v[3]+i[3]*f,b}function K(v,i,f){const u=f??new o(4);return u[0]=v[0]-i[0],u[1]=v[1]-i[1],u[2]=v[2]-i[2],u[3]=v[3]-i[3],u}const q=K;function z(v,i){return Math.abs(v[0]-i[0])<ze&&Math.abs(v[1]-i[1])<ze&&Math.abs(v[2]-i[2])<ze&&Math.abs(v[3]-i[3])<ze}function X(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function oe(v,i,f,u){const b=u??new o(4);return b[0]=v[0]+f*(i[0]-v[0]),b[1]=v[1]+f*(i[1]-v[1]),b[2]=v[2]+f*(i[2]-v[2]),b[3]=v[3]+f*(i[3]-v[3]),b}function Y(v,i,f,u){const b=u??new o(4);return b[0]=v[0]+f[0]*(i[0]-v[0]),b[1]=v[1]+f[1]*(i[1]-v[1]),b[2]=v[2]+f[2]*(i[2]-v[2]),b[3]=v[3]+f[3]*(i[3]-v[3]),b}function Q(v,i,f){const u=f??new o(4);return u[0]=Math.max(v[0],i[0]),u[1]=Math.max(v[1],i[1]),u[2]=Math.max(v[2],i[2]),u[3]=Math.max(v[3],i[3]),u}function se(v,i,f){const u=f??new o(4);return u[0]=Math.min(v[0],i[0]),u[1]=Math.min(v[1],i[1]),u[2]=Math.min(v[2],i[2]),u[3]=Math.min(v[3],i[3]),u}function W(v,i,f){const u=f??new o(4);return u[0]=v[0]*i,u[1]=v[1]*i,u[2]=v[2]*i,u[3]=v[3]*i,u}const J=W;function N(v,i,f){const u=f??new o(4);return u[0]=v[0]/i,u[1]=v[1]/i,u[2]=v[2]/i,u[3]=v[3]/i,u}function pe(v,i){const f=i??new o(4);return f[0]=1/v[0],f[1]=1/v[1],f[2]=1/v[2],f[3]=1/v[3],f}const he=pe;function _e(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function ae(v){const i=v[0],f=v[1],u=v[2],b=v[3];return Math.sqrt(i*i+f*f+u*u+b*b)}const ue=ae;function Te(v){const i=v[0],f=v[1],u=v[2],b=v[3];return i*i+f*f+u*u+b*b}const ee=Te;function fe(v,i){const f=v[0]-i[0],u=v[1]-i[1],b=v[2]-i[2],x=v[3]-i[3];return Math.sqrt(f*f+u*u+b*b+x*x)}const be=fe;function Le(v,i){const f=v[0]-i[0],u=v[1]-i[1],b=v[2]-i[2],x=v[3]-i[3];return f*f+u*u+b*b+x*x}const Ae=Le;function Z(v,i){const f=i??new o(4),u=v[0],b=v[1],x=v[2],k=v[3],P=Math.sqrt(u*u+b*b+x*x+k*k);return P>1e-5?(f[0]=u/P,f[1]=b/P,f[2]=x/P,f[3]=k/P):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function j(v,i){const f=i??new o(4);return f[0]=-v[0],f[1]=-v[1],f[2]=-v[2],f[3]=-v[3],f}function O(v,i){const f=i??new o(4);return f[0]=v[0],f[1]=v[1],f[2]=v[2],f[3]=v[3],f}const we=O;function Ce(v,i,f){const u=f??new o(4);return u[0]=v[0]*i[0],u[1]=v[1]*i[1],u[2]=v[2]*i[2],u[3]=v[3]*i[3],u}const Ve=Ce;function Ge(v,i,f){const u=f??new o(4);return u[0]=v[0]/i[0],u[1]=v[1]/i[1],u[2]=v[2]/i[2],u[3]=v[3]/i[3],u}const Ne=Ge;function le(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Pe(v,i,f){const u=f??new o(4),b=v[0],x=v[1],k=v[2],P=v[3];return u[0]=i[0]*b+i[4]*x+i[8]*k+i[12]*P,u[1]=i[1]*b+i[5]*x+i[9]*k+i[13]*P,u[2]=i[2]*b+i[6]*x+i[10]*k+i[14]*P,u[3]=i[3]*b+i[7]*x+i[11]*k+i[15]*P,u}function ke(v,i,f){const u=f??new o(4);return Z(v,u),W(u,i,u)}function B(v,i,f){const u=f??new o(4);return ae(v)>i?ke(v,i,u):O(v,u)}function V(v,i,f){const u=f??new o(4);return oe(v,i,.5,u)}return{create:a,fromValues:h,set:E,ceil:w,floor:S,round:M,clamp:L,add:A,addScaled:I,subtract:K,sub:q,equalsApproximately:z,equals:X,lerp:oe,lerpV:Y,max:Q,min:se,mulScalar:W,scale:J,divScalar:N,inverse:pe,invert:he,dot:_e,length:ae,len:ue,lengthSq:Te,lenSq:ee,distance:fe,dist:be,distanceSq:Le,distSq:Ae,normalize:Z,negate:j,copy:O,clone:we,multiply:Ce,mul:Ve,divide:Ge,div:Ne,zero:le,transformMat4:Pe,setLength:ke,truncate:B,midpoint:V}}const ei=new Map;function Ul(o){let a=ei.get(o);return a||(a=Gl(o),ei.set(o,a)),a}function qs(o,a,h,E,w,S){return{mat3:Dl(o),mat4:Il(a),quat:zl(h),vec2:bi(E),vec3:cs(w),vec4:Ul(S)}}const{mat3:Bt,mat4:ht,quat:pt,vec2:ti,vec3:R,vec4:Fc}=qs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);qs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);qs(Ml,Array,Array,Array,Array,Array);const ni=document.querySelector("#log");let St=null,hn=null;function gi(){if(St)return St;St=document.createElement("div"),St.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",St.appendChild(o),hn=document.createElement("div"),hn.className="ply-spinner-label",St.appendChild(hn),St.style.display="none",document.body.appendChild(St),St}function Ws(o){gi(),hn&&o&&(hn.textContent=o),St&&(St.style.opacity="1",St.style.display="flex")}function Nt(o){gi(),hn&&(hn.textContent=o)}function Nn(){if(!St)return;const o=St;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function wi(o,a){if(!ni)return;const h=document.createElement("p");h.innerText=o,a&&Object.assign(h.style,a),ni.appendChild(h)}async function Ct(o){console.log(o),wi(o)}async function Vl(o){console.error(o),wi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let xi;function yi(){xi=performance.now()}function si(o){const a=performance.now()-xi;Ct(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Ol(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function qn(o){return o+3&-4}const Fl=2,Nl=3,$l=5,ql=6,$n=7,os=8,Wn=9,jn=10;function ri(o){const a=new TextDecoder("ascii"),h=a.decode(new Uint8Array(o,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const E=new DataView(o),w=4,S=E.getUint32(w+0,!0),M=E.getUint32(w+4,!0),L=E.getUint32(w+8,!0),A=E.getUint32(w+12,!0),I=E.getUint32(w+16,!0),K=E.getFloat32(w+20,!0),q=E.getUint32(w+24,!0),z=E.getUint32(w+28,!0),X=E.getFloat32(w+32,!0),oe=E.getFloat32(w+36,!0),Y=E.getFloat32(w+40,!0),Q=E.getUint32(w+44,!0),se=E.getFloat32(w+48,!0),W=E.getFloat32(w+52,!0),J=E.getUint32(w+56,!0),N=E.getUint32(w+60,!0),pe=z===Wn||z===jn,he=pe?N:0,_e=pe?0:N&255,ae=pe?0:N>>8&255,ue=_e>0?_e:1;if(z===$l||z===ql)throw new Error(`NAT2: paired-RVQ format=${z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Te=z===Wn||z===jn;if(z!==Fl&&z!==Nl&&z!==$n&&z!==os&&!Te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${z}`);if(S%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${S} layer_h=${Q}`);let ee=w+64;const fe=(J+1)*4,be=new Uint32Array(o.slice(ee,ee+fe));ee+=fe;let Le;if(ue>1){const le=(ue+1)*4;if(ee+le>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${le} from ${ee})`);Le=new Uint32Array(o.slice(ee,ee+le)),ee+=le}else Le=new Uint32Array([0,S]);let Ae=0;for(let le=0;le<ue;le++){const Pe=Le[le+1]-Le[le];Pe>Ae&&(Ae=Pe)}if(Te){const le=he&1?7:6,Pe=I*le*4;if(ee+Pe>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${Pe} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const ke=new Float32Array(o.slice(ee,ee+Pe));ee+=Pe;const B=Math.max(1,he>>8&255),V=[];let v=0;for(let x=0,k=S,P=Q;x<B;x++,k>>=1,P>>=1){const r=Math.max(1,k>>2)*Math.max(1,P>>2)*16;V.push(r),v+=r}const i=o.byteLength-ee;if(i<v)throw new Error(`NAT2 probe atlas truncated: need ${v} bytes for ${S}x${Q} x${B} mips, have ${i}`);const f=[];let u=ee;for(const x of V)f.push(new Uint8Array(o.slice(u,u+x))),u+=x;const b=f[0];return{width:S,height:M,channels:L,kernel_type:A,num_rects:I,uv_extent:K,sb_number:q,format:z,sh_bias:X,res_bias:oe,compact_mult:Y,layer_h:Q,atlas_scale:se,atlas_offset:W,n_layers:J,n_cols:ue,layer_cuts:be,column_cuts:Le,slice_width:Ae,rects_expanded:ke,atlas_bytes:b,mip_bytes:f,probe_mode:he&1?2:1}}const Z=I*4*4;if(ee+Z>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Z} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const j=new Float32Array(o.slice(ee,ee+Z));ee+=Z;const O=new Float32Array(I*5);for(let le=0;le<I;le++){const Pe=j[le*4+0],ke=j[le*4+1],B=j[le*4+2],V=j[le*4+3];let v=0;for(let x=1;x<=J&&be[x]<=ke;x++)v=x;let i=0;for(let x=1;x<=ue&&Le[x]<=Pe;x++)i=x;const f=ke-be[v],u=Pe-Le[i],b=i*J+v;O[le*5+0]=u,O[le*5+1]=f,O[le*5+2]=B,O[le*5+3]=V,O[le*5+4]=b}let we,Ce;const Ve=ue,Ne=S/4*16;if(z===$n||z===os){if(ee+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const le=z===$n?"BCCB":"ACCB",Pe=a.decode(new Uint8Array(o,ee,4));if(Pe!==le)throw new Error(`NAT2 typeD bad sub-magic: expected '${le}' got '${Pe}'`);const ke=E.getUint32(ee+4,!0),B=E.getUint32(ee+8,!0),V=E.getUint32(ee+12,!0),v=E.getUint32(ee+16,!0),i=E.getUint32(ee+20,!0);if(ke!==1)throw new Error(`NAT2 BCCB unsupported version ${ke}`);if(V!==M/4||v!==S/4||i!==V*v)throw new Error(`NAT2 BCCB block grid mismatch: header ${S}×${M}, sub-header ${v}×${V} (${i} blocks)`);ee+=24;const f=B*16;if(ee+f>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${f}, have ${o.byteLength-ee})`);const u=new Uint8Array(o,ee,f);ee+=f;const b=i*2;if(ee+b>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${b}, have ${o.byteLength-ee})`);const x=new Uint16Array(o.slice(ee,ee+b));ee+=b;const k=new Uint8Array(i*16);for(let P=0;P<i;P++){const r=x[P]*16;k.set(u.subarray(r,r+16),P*16)}if(we=k,ae>1){Ce=[k];for(let P=1;P<ae;P++){if(ee+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${P} sub-header`);const r=a.decode(new Uint8Array(o,ee,4));if(r!==le)throw new Error(`NAT2 mip ${P}: bad sub-magic '${r}'`);const m=E.getUint32(ee+8,!0),d=E.getUint32(ee+16,!0),p=E.getUint32(ee+20,!0);if(d!==P)throw new Error(`NAT2 mip section order: expected level ${P}, got ${d}`);ee+=24;let l=0;for(let T=0;T<Ve;T++)for(let U=0;U<J;U++){const F=Pi(P,Le[T+1]-Le[T],be[U+1]-be[U],Ae,Q);l+=(F.cw>>2)*(F.ch>>2)}if(l!==p)throw new Error(`NAT2 mip ${P}: ${p} blocks, loader expects ${l}`);if(ee+m*16+p*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${P}`);const _=new Uint8Array(o,ee,m*16);ee+=m*16;const y=new Uint16Array(o.slice(ee,ee+p*2));ee+=p*2;const g=new Uint8Array(p*16);for(let T=0;T<p;T++){const U=y[T]*16;g.set(_.subarray(U,U+16),T*16)}Ce.push(g)}}}else{let le=0;for(let Pe=0;Pe<J;Pe++){const ke=be[Pe+1]-be[Pe];if(ke%4!==0)throw new Error(`NAT2 BC7 layer ${Pe} rows ${ke} not 4-aligned`);le+=ke/4*Ne}if(ee+le>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${le} more bytes from offset ${ee}, have ${o.byteLength-ee}`);we=new Uint8Array(o.slice(ee,ee+le))}return{width:S,height:M,channels:L,kernel_type:A,num_rects:I,uv_extent:K,sb_number:q,format:z,sh_bias:X,res_bias:oe,compact_mult:Y,layer_h:Q,atlas_scale:se,atlas_offset:W,n_layers:J,n_cols:ue,layer_cuts:be,column_cuts:Le,slice_width:Ae,rects_expanded:O,atlas_bytes:we,...Ce?{mip_bytes:Ce}:{}}}function Pi(o,a,h,E,w){const S=L=>L+3>>2<<2,M=1<<o;return{cw:Math.min(S(Math.max(1,E>>o)),S(Math.ceil(a/M))),ch:Math.min(S(Math.max(1,w>>o)),S(Math.ceil(h/M)))}}const Wl=32;function ii(o,a,h){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let E,w,S,M;if(a.format===2||a.format===$n||a.format===Wn){if(!o.features.has("texture-compression-bc"))return Ct(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===Wn?"BC7 atlas (proberes: shared probe texture)":a.format===$n?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:w,sampler:S}=oi(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===os||a.format===jn){if(!o.features.has("texture-compression-astc"))return Ct(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===jn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===os?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:E,view:w,sampler:S}=oi(o,a,"astc-4x4-unorm",M)}else return Ct(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:L}=a,A=o.createBuffer({label:"atlas rects (5-stride)",size:qn(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(A,0,L);const I=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return is(o,I,a,h),{texture:E,view:w,sampler:S,rectsBuffer:A,texParamsBuffer:I,meta:a}}function oi(o,a,h,E){const{width:w,layer_h:S,n_layers:M,n_cols:L,layer_cuts:A,column_cuts:I,slice_width:K,atlas_bytes:q}=a,X=w/4*16,oe=o.limits.maxTextureDimension2D;if(S>oe||K>oe)throw new Error(`⚠️  atlas slice dims ${K}x${S} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Y=L*M;if(Y>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${L} cols × ${M} layers = ${Y} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=a.mip_bytes??[q],se=Q.length,W=o.createTexture({label:E,size:{width:K,height:S,depthOrArrayLayers:Y},mipLevelCount:se,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let he=0;he<L;he++){const _e=I[he]/4,ae=(I[he+1]-I[he])/4;for(let ue=0;ue<M;ue++){const Te=A[ue]/4,ee=(A[ue+1]-A[ue])/4,fe=he*M+ue,be=Te*X+_e*16;o.queue.writeTexture({texture:W,mipLevel:0,origin:{x:0,y:0,z:fe},aspect:"all"},q,{offset:be,bytesPerRow:X,rowsPerImage:ee},{width:ae*4,height:ee*4,depthOrArrayLayers:1})}}const J=a.format===Wn||a.format===jn;for(let he=1;he<se&&!J;he++){let _e=0;for(let ae=0;ae<L;ae++)for(let ue=0;ue<M;ue++){const{cw:Te,ch:ee}=Pi(he,I[ae+1]-I[ae],A[ue+1]-A[ue],K,S);o.queue.writeTexture({texture:W,mipLevel:he,origin:{x:0,y:0,z:ae*M+ue},aspect:"all"},Q[he],{offset:_e,bytesPerRow:(Te>>2)*16,rowsPerImage:ee>>2},{width:Te,height:ee,depthOrArrayLayers:1}),_e+=(Te>>2)*(ee>>2)*16}}for(let he=1;he<se&&J;he++){const _e=Math.max(1,K>>he),ae=Math.max(1,S>>he);o.queue.writeTexture({texture:W,mipLevel:he,origin:{x:0,y:0,z:0},aspect:"all"},Q[he],{offset:0,bytesPerRow:Math.max(1,_e>>2)*16,rowsPerImage:Math.max(1,ae>>2)},{width:_e,height:ae,depthOrArrayLayers:1})}se>1&&console.log(`[atlas] ${se} mip levels uploaded (${J?"trilinear":"per-surfel integer level"})`);const N=W.createView({label:`${E} view`,dimension:"2d-array"}),pe=o.createSampler({label:`${E} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:se>1&&J?"linear":"nearest"});return{texture:W,view:N,sampler:pe}}function is(o,a,h,E,w=1){var I;const S=new ArrayBuffer(32),M=new Uint32Array(S),L=new Float32Array(S);M[0]=E?1:0,L[1]=h.atlas_scale,L[2]=h.atlas_offset,L[3]=h.res_bias,M[4]=h.probe_mode?h.probe_mode|0:0,M[5]=h.width|0;const A=(((I=h.mip_bytes)==null?void 0:I.length)??1)>1;M[6]=A&&w!==0?1:0,L[7]=h.uv_extent,o.queue.writeBuffer(a,0,S)}async function zs(o,a){Ct(`loading ply file from File... : ${o.name}`),Ws("downloading PLY...");const h=await o.arrayBuffer();try{return await Si(h,a)}finally{Nn()}}async function jl(o,a){Ct(`loading ply file from URL... : ${o}`),Ws("downloading PLY...");try{yi();const h=new URL(o,self.location.href).href;return await Si({url:h},a)}finally{Nn()}}async function Si(o,a){return new Promise((h,E)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=S=>{var L,A,I,K,q,z,X,oe,Y,Q,se,W;const M=S.data;if((M==null?void 0:M.type)==="error"){Vl(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),E(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const J=M.totalBytes,N=M.loadedBytes/(1024*1024),pe=J?J/(1024*1024):void 0,he=(M.speedBps??0)/(1024*1024),_e=J?Math.min(99,Math.floor(M.loadedBytes/J*100)):void 0,ae=pe?`total ${pe.toFixed(1)} MB`:"total -- MB",ue=pe&&_e!==void 0?`${N.toFixed(1)} MB downloaded (${_e}%)`:`${N.toFixed(1)} MB downloaded`,Te=`${he.toFixed(2)} MB/s`;Nt(`downloading PLY ...
${ae}, ${ue}
${Te}`);return}else if((M==null?void 0:M.type)==="fetched"){Ct(`💾 Fetched (${M.byteLength} bytes)`),si("Download"),Nt("parsing PLY..."),yi();return}else if((M==null?void 0:M.type)==="parse_progress"){const J=M.total??0,N=M.read??0,pe=J>0?Math.floor(N/J*100):0;Nt(`parsing PLY ...
${N}/${J} surfels (${pe}%)`);return}else if((M==null?void 0:M.type)==="done"){const J=M.num_points,N=M.K,pe=M.feature_mode??0,he=M.sh_bias,_e=M.kernel_type,ae=M.surfelBuffer,ue=M.svParamsBuffer;Ct(`🪐 Total surfels: ${J}, mode=${pe===1?"SB":"SV"}, K=${N}, sh_bias=${he}, kernel_type=${_e}`);const ee=a.createBuffer({label:"surfel input buffer",size:qn(J*Wl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(ee,0,ae);const fe=ue.byteLength>0?ue.byteLength:16,be=a.createBuffer({label:pe===1?"color_params buffer (SB)":"color_params buffer (SV)",size:qn(fe),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ue.byteLength>0&&a.queue.writeBuffer(be,0,ue),w.terminate(),si("Parse"),h({num_points:J,K:N,feature_mode:pe,sh_bias:he,kernel_type:_e,surfel_buffer:ee,surfel_data:new Float32Array(ae),sv_params_buffer:be,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(L=M.bbox)==null?void 0:L.min)==null?void 0:A[0])??-1)+(((K=(I=M.bbox)==null?void 0:I.max)==null?void 0:K[0])??1))/2,((((z=(q=M.bbox)==null?void 0:q.min)==null?void 0:z[1])??-1)+(((oe=(X=M.bbox)==null?void 0:X.max)==null?void 0:oe[1])??1))/2,((((Q=(Y=M.bbox)==null?void 0:Y.min)==null?void 0:Q[2])??-1)+(((W=(se=M.bbox)==null?void 0:se.max)==null?void 0:W[2])??1))/2]})}},w.onerror=S=>{w.terminate(),E(S)},o instanceof ArrayBuffer?(Nt("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(h,E){E(a)})(Kl,function(h){class E{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class S{constructor(e){this.target=e}}class M extends S{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class L extends S{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends S{constructor(e,t){super(e),this.expanded=t}}class I extends S{constructor(e,t){super(e),this.index=t}}function K(n){return n}function q(n){return n==null}function z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function X(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Y{static alreadyDisposed(){return new Y({type:"alreadydisposed"})}static notBindable(){return new Y({type:"notbindable"})}static propertyNotFound(e){return new Y({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Y({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw Y.notBindable();if(!(e in s))throw Y.propertyNotFound(e);s[e]=t}}class se extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new S(this))}),this}}class W{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const J="tp";function N(n){return(t,s)=>[J,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function pe(n,e){return t=>e(n(t))}function he(n){return n.rawValue}function _e(n,e){n.emitter.on("change",pe(he,e)),e(n.rawValue)}function ae(n,e,t){_e(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{ue(n,e,t)}}function ee(n,e){_e(n,t=>{e.textContent=t??""})}const fe=N("btn");class be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(fe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(fe("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Le{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new be(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ae{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,C)=>c===C,this.emitter=new W,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,C=this.rawValue_;this.equals_(C,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:C,rawValue:c,sender:this}))}}class Z{constructor(e){this.emitter=new W,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function j(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Z(n):new Ae(n,e)}class O{constructor(e){this.emitter=new W,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:j(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new O(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function we(n,e){const s=Object.keys(e).reduce((c,C)=>{if(c===void 0)return;const D=e[C],ne=D(n[C]);return ne.succeeded?Object.assign(Object.assign({},c),{[C]:ne.value}):void 0},{});return s}function Ce(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Ve(n){return n===null?!1:typeof n=="object"}function Ge(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ne(n){return{custom:e=>Ge(e)(n),boolean:Ge(e=>typeof e=="boolean"?e:void 0)(n),number:Ge(e=>typeof e=="number"?e:void 0)(n),string:Ge(e=>typeof e=="string"?e:void 0)(n),function:Ge(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ge(t=>t===e?e:void 0)(n),raw:Ge(e=>e)(n),object:e=>Ge(t=>{if(Ve(t))return we(t,e)})(n),array:e=>Ge(t=>{if(Array.isArray(t))return Ce(t,e)})(n)}}const le={optional:Ne(!0),required:Ne(!1)};function Pe(n,e){const t=le.required.object(e)(n);return t.succeeded?t.value:void 0}function ke(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class V{constructor(e){this.value_=e}static create(e){return[new V(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=N("");function i(n,e){return Te(n,v(void 0,e))}class f extends O{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=V.create(j(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const C=e??{};return new f(O.createCore({disabled:(t=C.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=C.hidden)!==null&&s!==void 0?s:!1,parent:(c=C.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){_e(this.globalDisabled_,i(e,"disabled")),ae(this,"hidden",i(e,"hidden"))}bindDisabled(e){_e(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){_e(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const b=N(""),x={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(b(void 0,x[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,x[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){ke({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const P="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function l(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(P,"svg");return t.innerHTML=y[e],t}function T(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function F(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ce(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function re(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const te=N("lbl");function xe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,C)=>{C>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(te()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(te("l")),ae(t.props,"label",C=>{q(C)?this.element.classList.add(te(void 0,"nol")):(this.element.classList.remove(te(void 0,"nol")),ce(s),s.appendChild(xe(e,C)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(te("v")),this.element.appendChild(c),this.valueElement=c}}class ge extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ye={id:"button",type:"blade",accept(n){const e=le,t=Pe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ge(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:new Le(n.document,{props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ge)||!(n.controller.valueController instanceof Le)?null:new se(n.controller)}};class Ie extends k{constructor(e){super(e),this.value=e.value}}function Re(){return new O({positions:j([],{equals:z})})}class Oe extends O{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=O.createCore(t);return new Oe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!q(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ae(this,"expanded",s),ae(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function je(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function tt(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),q(n.get("expandedHeight"))){const t=je(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ye extends w{constructor(e,t){super(e),this.rackApi_=t}}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ze(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function lt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class ot{constructor(e){this.emitter=new W,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Y.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(C=>{this.cache_.add(C)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class st extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends ge{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new L(this,t,this.controller_.binding.target.presetKey)})}}class We extends ge{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ct(n){return n instanceof _t?n.apiSet_:n instanceof Ye?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Y.shouldNeverHappen();return t}function Rt(n,e,t){if(!Q.isBindable(n))throw Y.notBindable();return new Q(n,e,t)}class _t extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new W,this.apiSet_=new ot(ct),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(C,Rt(e,t,c.presetKey),c),ne=new st(D);return this.add(ne,c.index)}addMonitor(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(C,Rt(e,t),c),ne=new rt(D);return this.add(ne,c.index)}addFolder(e){return Ze(this,e)}addButton(e){return Qe(this,e)}addSeparator(e){return lt(this,e)}addTab(e){return Je(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof We))throw Y.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new L(t,s.target.read(),s.target.presetKey)})}}class Tt extends Ye{constructor(e,t){super(e,new _t(e.rackController,t)),this.emitter_=new W,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Dt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class $t{constructor(e,t){const s=N(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function qt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function nt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof We&&s.binding===e)return s}return null}function fn(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Wt(n){return n instanceof Xe?n.rack:n instanceof Dt?n.rackController.rack:null}function _n(n){const e=Wt(n);return e?e.bcSet_:null}class mn{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new W,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new ot(_n),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),X(e,"parent")?e.parent=this:(e.parent_=this,ke({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){X(e,"parent")?e.parent=null:(e.parent_=null,ke({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof We)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Wt(s);if(c){const C=c.emitter;C.on("layout",this.onDescendantLayout_),C.on("inputchange",this.onDescendantInputChange_),C.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof We)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Wt(s);if(c){const C=c.emitter;C.off("layout",this.onDescendantLayout_),C.off("inputchange",this.onDescendantInputChange_),C.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const C=[];c===t&&(C.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&C.push("veryfirst")),c===s&&(C.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&C.push("verylast")),c.blade.set("positions",C)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=qt(this.find(qe),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=nt(this.find(We),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=fn(this.find(Ie),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Xe extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new $t(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new mn({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&T(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const vn=N("cnt");class Kn{constructor(e,t){var s;this.className_=N((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),vn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ae(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ae(t.props,"title",De=>{q(De)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const C=e.createElement("div");C.classList.add(this.className_("i")),this.element.appendChild(C);const D=e.createElement("div");D.classList.add(this.className_("t")),ee(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const ne=e.createElement("div");ne.classList.add(this.className_("m")),this.buttonElement.appendChild(ne);const Be=t.containerElement;Be.classList.add(this.className_("c")),this.element.appendChild(Be),this.containerElement=Be}}class bn extends Dt{constructor(e,t){var s;const c=Oe.create((s=t.expanded)!==null&&s!==void 0?s:!0),C=new Xe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:C,view:new Kn(e,{containerElement:C.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,tt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Hn={id:"folder",type:"blade",accept(n){const e=le,t=Pe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new bn(n.document,{blade:n.blade,expanded:n.params.expanded,props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof bn?new Tt(n.controller,n.pool):null}};class zt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class gn extends w{}const Tn=N("spr");class wn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Tn("r")),this.element.appendChild(s)}}class Jt extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new wn(e,{viewProps:t.viewProps})}))}}const G={id:"separator",type:"blade",accept(n){const t=Pe(n,{view:le.required.constant("separator")});return t?{params:t}:null},controller(n){return new Jt(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Jt?new gn(n.controller):null}},H=N("tbi");class ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(H()),t.viewProps.bindClassModifiers(this.element),ae(t.props,"selected",C=>{C?this.element.classList.add(H(void 0,"sel")):this.element.classList.remove(H(void 0,"sel"))});const s=e.createElement("button");s.classList.add(H("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(H("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class de{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ie(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ee{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new de(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Xe(e,{blade:Re(),viewProps:f.create()}),this.props=t.props,ae(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class me{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class ve extends Ye{constructor(e,t){super(e,new _t(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new W,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Y.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ee(t,{itemProps:O.fromObject({selected:!1,title:e.title}),props:O.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Y.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Y.shouldNeverHappen();const s=new me(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Y.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new I(this,e.rawValue)})}}const Se=-1;class Ke{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=j(!0),this.selectedIndex=j(Se),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Se,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const at=N("tab");class gt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(at(),vn()),t.viewProps.bindClassModifiers(this.element),_e(t.empty,Te(this.element,at(void 0,"nop")));const s=e.createElement("div");s.classList.add(at("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(at("i")),this.element.appendChild(c);const C=t.contentsElement;C.classList.add(at("c")),this.element.appendChild(C),this.contentsElement=C}}class wt extends Dt{constructor(e,t){const s=new Xe(e,{blade:t.blade,viewProps:t.viewProps}),c=new Ke;super({blade:t.blade,rackController:s,view:new gt(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ot(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;T(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Et={id:"tab",type:"blade",accept(n){const e=le,t=Pe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new wt(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ee(n.document,{itemProps:O.fromObject({selected:!1,title:t.title}),props:O.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof wt?new ve(n.controller,n.pool):null}};function Lt(n,e){const t=n.accept(e.params);if(!t)return null;const s=le.optional.boolean(e.params.disabled).value,c=le.optional.boolean(e.params.hidden).value;return n.controller({blade:Re(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class ut{constructor(){this.disabled=!1,this.emitter=new W}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class en{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new W,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class vt{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new W,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function xn(n,e){for(;n.length<e;)n.push(void 0)}function tn(n){const e=[];return xn(e,n),j(e)}function ds(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Yn(n,e){const t=[...ds(n),e];return t.length>n.length?t.splice(0,t.length-n.length):xn(t,n.length),t}class bt{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new W,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Yn(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class At{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function xt(n,e){if(n instanceof e)return n;if(n instanceof At){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class yt{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class It{constructor(e){this.values=O.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class nn{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return q(s)||(c=Math.max(c,s)),q(t)||(c=Math.min(c,t)),c}}class yn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const sn=N("lst");class Ii{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(sn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(sn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(sn("m")),c.appendChild(g(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ae(this.props_,"options",C=>{F(this.selectElement),C.forEach(D=>{const ne=e.createElement("option");ne.textContent=D.text,this.selectElement.appendChild(ne)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class An{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ii(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ks=N("pop");class Ri{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ks()),t.viewProps.bindClassModifiers(this.element),_e(t.shows,Te(this.element,Ks(void 0,"v")))}}class Hs{constructor(e,t){this.shows=j(!1),this.viewProps=t.viewProps,this.view=new Ri(e,{shows:this.shows,viewProps:this.viewProps})}}const Ys=N("txt");class zi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ys("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Zn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new zi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=c),this.view.refresh()}}function Gi(n){return String(n)}function Zs(n){return n==="false"?!1:!!n}function Xs(n){return Gi(n)}class Ui{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Vi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Oi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Vi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Fi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ni{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Fi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ps(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Dn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Ln(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=Ln(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Ln(n,e);return c===""?"":s+c}function hs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=qi(n,e);return s===""?"":t+s}function Qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=$i(n,e);return e+=s.length,s===""?"":s+Ln(n,e)}function Wi(n,e){const t=Qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Ln(n,e);return e+=c.length,t+s+c+hs(n,e)}function ji(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Ln(n,e);return e+=s.length,s===""?"":t+s+hs(n,e)}function Ki(n,e){const t=Qs(n,e);return e+=t.length,t===""?"":t+hs(n,e)}const Hi=ps([Wi,ji,Ki]);function Yi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Yi(n,e);return s===""?"":t+s}function Xi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Xi(n,e);return s===""?"":t+s}function Ji(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function eo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Ji(n,e);return s===""?"":t+s}const to=ps([Zi,Qi,eo]),no=ps([to,Hi]);function so(n,e){const t=no(n,e);return e+=t.length,t===""?null:{evaluable:new Ui(t),cursor:e}}function ro(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=er(n,e);if(!s)return null;e=s.cursor,e+=Dn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function io(n,e){var t;return(t=so(n,e))!==null&&t!==void 0?t:ro(n,e)}function Js(n,e){const t=io(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Js(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ni(s,c.evaluable)}):null}function oo(n,e,t){t+=Dn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Dn(e,t).length,{cursor:t,operator:s}):null}function ao(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let C=c.evaluable;for(;;){const D=oo(e,t,s);if(!D)break;s=D.cursor;const ne=n(t,s);if(!ne)return null;s=ne.cursor,C=new Oi(D.operator,C,ne.evaluable)}return C?{cursor:s,evaluable:C}:null}}const lo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>ao(n,e),Js);function er(n,e){return e+=Dn(n,e).length,lo(n,e)}function co(n){const e=er(n,0);return!e||e.cursor+Dn(n,e.cursor).length!==n.length?null:e.evaluable}function Gt(n){var e;const t=co(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Gt(n);if(!q(e))return e}return 0}function uo(n){return String(n)}function ft(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const po=ft(0);function Xn(n){return po(n)+"%"}function nr(n){return String(n)}function fs(n){return n}function In({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function C(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{C(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{C(()=>{n.setRawValue(s(n,e),D.options)}),C(()=>{e.setRawValue(t(n,e),D.options)})}),C(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Pt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Rn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Ut(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ho(n){return n==="ArrowUp"||n==="ArrowDown"}function sr(n){return ho(n)||n==="ArrowLeft"||n==="ArrowRight"}function _s(n,e){var t,s;const c=e.ownerDocument.defaultView,C=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+C.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+C.top)}}class rn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new W,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(_s(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,c){const C=(n-e)/(t-e);return s+C*(c-s)}function rr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function dt(n,e,t){return Math.min(Math.max(n,e),t)}function ir(n,e){return(n%e+e)%e}const kt=N("txt");class fo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(kt(),kt(void 0,"num")),t.arrayPosition&&this.element.classList.add(kt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(kt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(kt()),this.inputElement.classList.add(kt("i"));const c=e.createElement("div");c.classList.add(kt("k")),this.element.appendChild(c),this.knobElement=c;const C=e.createElementNS(P,"svg");C.classList.add(kt("g")),this.knobElement.appendChild(C);const D=e.createElementNS(P,"path");D.classList.add(kt("gb")),C.appendChild(D),this.guideBodyElem_=D;const ne=e.createElementNS(P,"path");ne.classList.add(kt("gh")),C.appendChild(ne),this.guideHeadElem_=ne;const Be=e.createElement("div");Be.classList.add(N("tt")()),this.knobElement.appendChild(Be),this.tooltipElem_=Be,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(kt(void 0,"drg"));return}this.element.classList.add(kt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=dt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const C=this.props_.get("formatter");this.tooltipElem_.textContent=C(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class zn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=j(null),this.view=new fo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new rn(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),C=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),C!==void 0&&(D=Math.min(D,C)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=Pt(this.baseStep_,Rn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Pt(this.baseStep_,Rn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ms=N("sld");class _o{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ms("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(ms("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=dt(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class mo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new _o(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(dt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Pt(this.baseStep_,Ut(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Pt(this.baseStep_,Ut(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vs=N("sldtxt");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vs());const s=e.createElement("div");s.classList.add(vs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(vs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class bs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new mo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new zn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new vo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Gn(n,e){n.write(e)}function Qn(n){const e=le;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function or(n){if(n==="inline"||n==="popup")return n}function jt(n){const e=le;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ar(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function gs(n){return q(n)?null:new It(ar(n))}function bo(n){const e=n?xt(n,yn):null;return e?e.step:null}function Jn(n,e){const t=n&&xt(n,yn);return t?rr(t.step):Math.max(rr(e),2)}function Pn(n){const e=bo(n);return e??1}function Sn(n,e){var t;const s=n&&xt(n,yn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const es=N("ckb");class go{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(es()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(es("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(es("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const C=e.createElement("div");C.classList.add(es("w")),s.appendChild(C);const D=g(e,"check");C.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class wo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new go(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function xo(n){const e=[],t=gs(n.options);return t&&e.push(t),new At(e)}const yo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Pe(e,{options:le.optional.custom(Qn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs,constraint:n=>xo(n.params),writer:n=>Gn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&xt(s,It);return c?new An(e,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new wo(e,{value:t,viewProps:n.viewProps})}},on=N("col");class Po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on()),t.foldable.bindExpandedClass(this.element,on(void 0,"expanded")),ae(t.foldable,"completed",Te(this.element,on(void 0,"cpl")));const s=e.createElement("div");s.classList.add(on("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(on("s")),s.appendChild(c),this.swatchElement=c;const C=e.createElement("div");if(C.classList.add(on("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(on("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function So(n,e,t){const s=dt(n/255,0,1),c=dt(e/255,0,1),C=dt(t/255,0,1),D=Math.max(s,c,C),ne=Math.min(s,c,C),Be=D-ne;let De=0,Fe=0;const $e=(ne+D)/2;return Be!==0&&(Fe=Be/(1-Math.abs(D+ne-1)),s===D?De=(c-C)/Be:c===D?De=2+(C-s)/Be:De=4+(s-c)/Be,De=De/6+(De<0?1:0)),[De*360,Fe*100,$e*100]}function Co(n,e,t){const s=(n%360+360)%360,c=dt(e/100,0,1),C=dt(t/100,0,1),D=(1-Math.abs(2*C-1))*c,ne=D*(1-Math.abs(s/60%2-1)),Be=C-D/2;let De,Fe,$e;return s>=0&&s<60?[De,Fe,$e]=[D,ne,0]:s>=60&&s<120?[De,Fe,$e]=[ne,D,0]:s>=120&&s<180?[De,Fe,$e]=[0,D,ne]:s>=180&&s<240?[De,Fe,$e]=[0,ne,D]:s>=240&&s<300?[De,Fe,$e]=[ne,0,D]:[De,Fe,$e]=[D,0,ne],[(De+Be)*255,(Fe+Be)*255,($e+Be)*255]}function Eo(n,e,t){const s=dt(n/255,0,1),c=dt(e/255,0,1),C=dt(t/255,0,1),D=Math.max(s,c,C),ne=Math.min(s,c,C),Be=D-ne;let De;Be===0?De=0:D===s?De=60*(((c-C)/Be%6+6)%6):D===c?De=60*((C-s)/Be+2):De=60*((s-c)/Be+4);const Fe=D===0?0:Be/D,$e=D;return[De,Fe*100,$e*100]}function lr(n,e,t){const s=ir(n,360),c=dt(e/100,0,1),C=dt(t/100,0,1),D=C*c,ne=D*(1-Math.abs(s/60%2-1)),Be=C-D;let De,Fe,$e;return s>=0&&s<60?[De,Fe,$e]=[D,ne,0]:s>=60&&s<120?[De,Fe,$e]=[ne,D,0]:s>=120&&s<180?[De,Fe,$e]=[0,D,ne]:s>=180&&s<240?[De,Fe,$e]=[0,ne,D]:s>=240&&s<300?[De,Fe,$e]=[ne,0,D]:[De,Fe,$e]=[D,0,ne],[(De+Be)*255,(Fe+Be)*255,($e+Be)*255]}function ko(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Mo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function an(n){return[n[0],n[1],n[2]]}function cr(n,e){return[n[0],n[1],n[2],e]}const Bo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:ko,rgb:Co},hsv:{hsl:Mo,hsv:(n,e,t)=>[n,e,t],rgb:lr},rgb:{hsl:So,hsv:Eo,rgb:(n,e,t)=>[n,e,t]}};function ts(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function To(n,e){return n===e?e:ir(n,e)}function Ao(n,e,t){var s;const c=ts(e,t);return[e==="rgb"?dt(n[0],0,c[0]):To(n[0],c[0]),dt(n[1],0,c[1]),dt(n[2],0,c[2]),dt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function ur(n,e,t,s){const c=ts(e,t),C=ts(e,s);return n.map((D,ne)=>D/c[ne]*C[ne])}function Do(n,e,t){const s=ur(n,e.mode,e.type,"int"),c=Bo[e.mode][t.mode](...s);return ur(c,t.mode,"int",t.type)}function ns(n,e){return typeof n!="object"||q(n)?!1:e in n&&typeof n[e]=="number"}class Ue{static black(e="int"){return new Ue([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ue(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return ns(e,"r")&&ns(e,"g")&&ns(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&ns(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let C=0;C<s.length;C++)if(s[C]!==c[C])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Ao(e,t,s)}getComponents(e,t="int"){return cr(Do(an(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Kt=N("colp");class Lo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Kt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Kt("hsv"));const c=e.createElement("div");c.classList.add(Kt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const C=e.createElement("div");C.classList.add(Kt("h")),this.hPaletteView_=t.hPaletteView,C.appendChild(this.hPaletteView_.element),s.appendChild(C),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Kt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ne=e.createElement("div");ne.classList.add(Kt("a"));const Be=e.createElement("div");Be.classList.add(Kt("ap")),Be.appendChild(this.alphaViews_.palette.element),ne.appendChild(Be);const De=e.createElement("div");De.classList.add(Kt("at")),De.appendChild(this.alphaViews_.text.element),ne.appendChild(De),this.element.appendChild(ne)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Io(n){return n==="int"?"int":n==="float"?"float":void 0}function ws(n){const e=le;return Pe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Io)}),expanded:e.optional.boolean,picker:e.optional.custom(or)})}function ln(n){return n?.1:1}function cn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ro(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Mt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const zo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return zo[s](t)}function pr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Mt(e[1],255),Mt(e[2],255),Mt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ue(t,"rgb",n):null}}function fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Mt(e[1],255),Mt(e[2],255),Mt(e[3],255),Mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ue(t,"rgb",n):null}}function mr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),Mt(e[2],100),Mt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ue(t,"hsl",n):null}}function br(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),Mt(e[2],100),Mt(e[3],100),Mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function gr(n){return e=>{const t=br(e);return t?new Ue(t,"hsl",n):null}}function wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Go(n){const e=wr(n);return e?new Ue(e,"rgb","int"):null}function xr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function Uo(n){const e=xr(n);return e?new Ue(e,"rgb","int"):null}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Ue(t,"rgb",n):null}}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Cr(n){return e=>{const t=Sr(e);return t?new Ue(t,"rgb",n):null}}const Vo=[{parser:wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:pr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:yr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Oo(n){return Vo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function xs(n,e="int"){const t=Oo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Er={int:[Go,Uo,hr("int"),_r("int"),vr("int"),gr("int"),Pr("int"),Cr("int")],float:[hr("float"),_r("float"),vr("float"),gr("float"),Pr("float"),Cr("float")]};function Fo(n){const e=Er[n];return t=>{if(typeof t!="string")return Ue.black(n);const s=e.reduce((c,C)=>c||C(t),null);return s??Ue.black(n)}}function ys(n){const e=Er[n];return t=>e.reduce((s,c)=>s||c(t),null)}function kr(n){const e=dt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Mr(n,e="#"){const t=an(n.getComponents("rgb")).map(kr).join("");return`${e}${t}`}function Ps(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(kr).join("");return`${e}${s}`}function Br(n,e){const t=ft(e==="float"?2:0);return`rgb(${an(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function No(n){return e=>Br(e,n)}function ss(n,e){const t=ft(2),s=ft(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((C,D)=>(D===3?t:s)(C)).join(", ")})`}function $o(n){return e=>ss(e,n)}function qo(n){const e=[ft(0),Xn,Xn];return`hsl(${an(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Wo(n){const e=[ft(0),Xn,Xn,ft(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Tr(n,e){const t=ft(e==="float"?2:0),s=["r","g","b"];return`{${an(n.getComponents("rgb",e)).map((C,D)=>`${s[D]}: ${t(C)}`).join(", ")}}`}function jo(n){return e=>Tr(e,n)}function Ar(n,e){const t=ft(2),s=ft(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,ne)=>{const Be=ne===3?t:s;return`${c[ne]}: ${Be(D)}`}).join(", ")}}`}function Ko(n){return e=>Ar(e,n)}const Ho=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Mr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ps},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:qo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Wo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:$o(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:jo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Ko(e)}],[])];function Ss(n){return Ho.reduce((e,t)=>e||(Ro(t.format,n)?t.stringifier:null),null)}const Un=N("apl");class Yo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Un()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Un("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Un("c")),s.appendChild(c),this.colorElem_=c;const C=e.createElement("div");C.classList.add(Un("m")),this.element.appendChild(C),this.markerElem_=C;const D=e.createElement("div");D.classList.add(Un("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ue([t[0],t[1],t[2],0],"rgb"),c=new Ue([t[0],t[1],t[2],255],"rgb"),C=["to right",ss(s),ss(c)];this.colorElem_.style.background=`linear-gradient(${C.join(",")})`,this.previewElem_.style.backgroundColor=ss(e);const D=et(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Zo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[C,D,ne]=c.getComponents("hsv");this.value.setRawValue(new Ue([C,D,ne,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Pt(ln(!0),Ut(e));if(t===0)return;const s=this.value.rawValue,[c,C,D,ne]=s.getComponents("hsv");this.value.setRawValue(new Ue([c,C,D,ne+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Pt(ln(!0),Ut(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Cn=N("coltxt");function Xo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const C=n.createElement("option");return C.textContent=c.text,C.value=c.value,s.appendChild(C),s},n.createDocumentFragment())),e}class Qo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Cn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Cn("m")),this.modeElem_=Xo(e),this.modeElem_.classList.add(Cn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(Cn("mm")),c.appendChild(g(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const C=e.createElement("div");C.classList.add(Cn("w")),this.element.appendChild(C),this.textsElem_=C,this.textViews_=t.textViews,this.applyTextViews_(),_e(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){F(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Cn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Jo(n){return ft(n==="float"?2:0)}function ea(n,e,t){const s=ts(n,e)[t];return new yt({min:0,max:s})}function Cs(n,e,t){return new zn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:ln(!1),parser:e.parser,props:O.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Jo(e.colorType)}),value:j(0,{constraint:ea(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ta{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=j(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Qo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Cs(e,t,0),Cs(e,t,1),Cs(e,t,2)];return s.forEach((c,C)=>{In({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[C],backward:(D,ne)=>{const Be=this.colorMode.rawValue,De=D.rawValue.getComponents(Be,this.colorType_);return De[C]=ne.rawValue,new Ue(cr(an(De),De[3]),Be,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Es=N("hpl");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Es()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Es("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Es("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Br(new Ue([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(dt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,C,D,ne]=c.getComponents("hsv");this.value.setRawValue(new Ue([s,C,D,ne],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Pt(ln(!1),Ut(e));if(t===0)return;const s=this.value.rawValue,[c,C,D,ne]=s.getComponents("hsv");this.value.setRawValue(new Ue([c+t,C,D,ne],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Pt(ln(!1),Ut(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ks=N("svp"),Dr=64;class ra{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Dr,s.width=Dr,s.classList.add(ks("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(ks("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,C=this.canvasElement.height,D=e.getImageData(0,0,c,C),ne=D.data;for(let Fe=0;Fe<C;Fe++)for(let $e=0;$e<c;$e++){const un=et($e,0,c,0,100),On=et(Fe,0,C,100,0),Fn=lr(s[0],un,On),rs=(Fe*c+$e)*4;ne[rs]=Fn[0],ne[rs+1]=Fn[1],ne[rs+2]=Fn[2],ne[rs+3]=255}e.putImageData(D,0,0);const Be=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Be}%`;const De=et(s[2],0,100,100,0);this.markerElem_.style.top=`${De}%`}onValueChange_(){this.update_()}}class ia{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ra(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),c=et(e.point.y,0,e.bounds.height,100,0),[C,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([C,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s,c,C]=this.value.rawValue.getComponents("hsv"),D=ln(!1),ne=Pt(D,Ut(e)),Be=Pt(D,Rn(e));ne===0&&Be===0||this.value.setRawValue(new Ue([t,s+ne,c+Be,C],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=ln(!1),s=Pt(t,Ut(e)),c=Pt(t,Rn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class oa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new sa(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ia(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Zo(e,{value:this.value,viewProps:this.viewProps}),text:new zn(e,{parser:Gt,baseStep:.1,props:O.fromObject({draggingScale:.01,formatter:ft(2)}),value:j(0,{constraint:new yt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&In({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const C=s.rawValue.getComponents();return C[3]=c.rawValue,new Ue(C,s.rawValue.mode)}}),this.textC_=new ta(e,{colorType:t.colorType,parser:Gt,value:this.value,viewProps:this.viewProps}),this.view=new Lo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ms=N("colsw");class aa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ms("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Ms("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ps(e)}onValueChange_(){this.update_()}}class la{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new aa(e,{value:this.value,viewProps:this.viewProps})}}class Bs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Oe.create(t.expanded),this.swatchC_=new la(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Zn(e,{parser:t.parser,props:O.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Po(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const c=new oa(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(C=>{C.addEventListener("blur",this.onPopupChildBlur_),C.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),In({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:C=>C.rawValue,backward:(C,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),tt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ca(n,e){return Ue.isColorObject(n)?Ue.fromObject(n,e):Ue.black(e)}function ua(n){return an(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function da(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function pa(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function ha(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function fa(n){return typeof n!="number"?Ue.black():pa(n)}function _a(n){return typeof n!="number"?Ue.black():ha(n)}function ma(n){const e=Ss(n);return e?(t,s)=>{Gn(t,e(s))}:null}function va(n){const e=n?da:ua;return(t,s)=>{Gn(t,e(s))}}function ba(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ga(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function wa(n,e){return(t,s)=>{n?ba(t,s,e):ga(t,s,e)}}function Ts(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function xa(n){return n?e=>Ps(e,"0x"):e=>Mr(e,"0x")}function ya(n){return"color"in n||"view"in n&&n.view==="color"}const Pa={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ya(e))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ts(n.params)?_a:fa,equals:Ue.equals,writer:n=>va(Ts(n.params))},controller:n=>{const e=Ts(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Bs(n.document,{colorType:"int",expanded:t??!1,formatter:xa(e),parser:ys("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Sa(n){return Ue.isRgbaColorObject(n)}function Ca(n){return e=>ca(e,n)}function Ea(n,e){return t=>n?Ar(t,e):Tr(t,e)}const ka={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ue.isColorObject(n))return null;const t=ws(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ca(cn(n.params)),equals:Ue.equals,writer:n=>wa(Sa(n.initialValue),cn(n.params))},controller:n=>{var e;const t=Ue.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,C=(e=cn(n.params))!==null&&e!==void 0?e:"int";return new Bs(n.document,{colorType:C,expanded:s??!1,formatter:Ea(t,C),parser:ys(C),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ma={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=xs(n,cn(e));if(!t||!Ss(t))return null;const c=ws(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Fo((e=cn(n.params))!==null&&e!==void 0?e:"int")},equals:Ue.equals,writer:n=>{const e=xs(n.initialValue,cn(n.params));if(!e)throw Y.shouldNeverHappen();const t=ma(e);if(!t)throw Y.notBindable();return t}},controller:n=>{const e=xs(n.initialValue,cn(n.params));if(!e)throw Y.shouldNeverHappen();const t=Ss(e);if(!t)throw Y.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Bs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ys(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Ht{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var C,D;return(D=(C=this.components[c])===null||C===void 0?void 0:C.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const Lr=N("pndtxt");class Ba{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Lr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Lr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ta(n,e,t){return new zn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:j(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class As{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ta(e,t,c)),this.acs_.forEach((s,c)=>{In({primary:this.value,secondary:s.value,forward:C=>t.assembly.toComponents(C.rawValue)[c],backward:(C,D)=>{const ne=t.assembly.toComponents(C.rawValue);return ne[c]=D.rawValue,t.assembly.fromComponents(ne)}})}),this.view=new Ba(e,{textViews:this.acs_.map(s=>s.view)})}}function Ir(n,e){return"step"in n&&!q(n.step)?new yn(n.step,e):null}function Rr(n){return!q(n.max)&&!q(n.min)?new yt({max:n.max,min:n.min}):!q(n.max)||!q(n.min)?new nn({max:n.max,min:n.min}):null}function Aa(n){const e=xt(n,yt);if(e)return[e.values.get("min"),e.values.get("max")];const t=xt(n,nn);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Da(n,e){const t=[],s=Ir(n,e);s&&t.push(s);const c=Rr(n);c&&t.push(c);const C=gs(n.options);return C&&t.push(C),new At(t)}const La={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=le,s=Pe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Qn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Da(n.params,n.initialValue),writer:n=>Gn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&xt(s,It);if(c)return new An(n.document,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const C=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ft(Jn(s,t.rawValue)),D=s&&xt(s,yt);return D?new bs(n.document,{baseStep:Pn(s),parser:Gt,sliderProps:new O({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:O.fromObject({draggingScale:Sn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps}):new zn(n.document,{baseStep:Pn(s),parser:Gt,props:O.fromObject({draggingScale:Sn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps})}};class Yt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const zr={toComponents:n=>n.getComponents(),fromComponents:n=>new Yt(...n)},En=N("p2d");class Ia{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(En()),t.viewProps.bindClassModifiers(this.element),_e(t.expanded,Te(this.element,En(void 0,"expanded")));const s=e.createElement("div");s.classList.add(En("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(En("b")),c.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const C=e.createElement("div");if(C.classList.add(En("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(En("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Zt=N("p2dp");class Ra{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Zt()),t.layout==="popup"&&this.element.classList.add(Zt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Zt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(P,"svg");c.classList.add(Zt("g")),this.padElement.appendChild(c),this.svgElem_=c;const C=e.createElementNS(P,"line");C.classList.add(Zt("ax")),C.setAttributeNS(null,"x1","0"),C.setAttributeNS(null,"y1","50%"),C.setAttributeNS(null,"x2","100%"),C.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(C);const D=e.createElementNS(P,"line");D.classList.add(Zt("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const ne=e.createElementNS(P,"line");ne.classList.add(Zt("l")),ne.setAttributeNS(null,"x1","50%"),ne.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ne),this.lineElem_=ne;const Be=e.createElement("div");Be.classList.add(Zt("m")),this.padElement.appendChild(Be),this.markerElem_=Be,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=et(e,-s,+s,0,100),C=et(t,-s,+s,0,100),D=this.invertsY_?100-C:C;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Gr(n,e,t){return[Pt(e[0],Ut(n)),Pt(e[1],Rn(n))*(t?1:-1)]}class za{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ra(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=et(e.point.x,0,e.bounds.width,-s,+s),C=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Yt(c,C),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Yt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ga{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Oe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const C=new za(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});C.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=C,this.textC_=new As(e,{assembly:zr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ia(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),In({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,ne)=>ne.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),tt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class kn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new kn(...n)};function Ua(n){return kn.isObject(n)?new kn(n.x,n.y,n.z):new kn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Oa(n,e){return new Ht({assembly:Ur,components:[Vt("x"in n?n.x:void 0,e.x),Vt("y"in n?n.y:void 0,e.y),Vt("z"in n?n.z:void 0,e.z)]})}function Ds(n,e){return{baseStep:Pn(e),constraint:e,textProps:O.fromObject({draggingScale:Sn(e,n),formatter:ft(Jn(e,n))})}}const Fa={id:"input-point3d",type:"input",accept:(n,e)=>{if(!kn.isObject(n))return null;const t=le,s=Pe(e,{x:t.optional.custom(jt),y:t.optional.custom(jt),z:t.optional.custom(jt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:kn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ht))throw Y.shouldNeverHappen();return new As(n.document,{assembly:Ur,axes:[Ds(e.rawValue.x,t.components[0]),Ds(e.rawValue.y,t.components[1]),Ds(e.rawValue.z,t.components[2])],parser:Gt,value:e,viewProps:n.viewProps})}};class Mn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z,C=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof C!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Vr={toComponents:n=>n.getComponents(),fromComponents:n=>new Mn(...n)};function Na(n){return Mn.isObject(n)?new Mn(n.x,n.y,n.z,n.w):new Mn}function $a(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function qa(n,e){return new Ht({assembly:Vr,components:[Vt("x"in n?n.x:void 0,e.x),Vt("y"in n?n.y:void 0,e.y),Vt("z"in n?n.z:void 0,e.z),Vt("w"in n?n.w:void 0,e.w)]})}function Wa(n,e){return{baseStep:Pn(e),constraint:e,textProps:O.fromObject({draggingScale:Sn(e,n),formatter:ft(Jn(e,n))})}}const ja={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Mn.isObject(n))return null;const t=le,s=Pe(e,{x:t.optional.custom(jt),y:t.optional.custom(jt),z:t.optional.custom(jt),w:t.optional.custom(jt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Na,constraint:n=>qa(n.params,n.initialValue),equals:Mn.equals,writer:n=>$a},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ht))throw Y.shouldNeverHappen();return new As(n.document,{assembly:Vr,axes:e.rawValue.getComponents().map((s,c)=>Wa(s,t.components[c])),parser:Gt,value:e,viewProps:n.viewProps})}};function Ka(n){const e=[],t=gs(n.options);return t&&e.push(t),new At(e)}const Ha={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Pe(e,{options:le.optional.custom(Qn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr,constraint:n=>Ka(n.params),writer:n=>Gn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&xt(s,It);return c?new An(e,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Zn(e,{parser:C=>C,props:O.fromObject({formatter:fs}),value:t,viewProps:n.viewProps})}},Vn={monitor:{defaultInterval:200,defaultLineCount:3}},Or=N("mll");class Ya{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Or()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Or("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ya(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Fr=N("sgl");class Za{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Fr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Za(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Xa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Pe(e,{lineCount:le.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs},controller:n=>{var e;return n.value.rawValue.length===1?new Is(n.document,{formatter:Xs,value:n.value,viewProps:n.viewProps}):new Ls(n.document,{formatter:Xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Vn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Xt=N("grl");class Qa{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Xt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(P,"svg");s.classList.add(Xt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(P,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const C=e.createElement("div");C.classList.add(Xt("t"),N("tt")()),this.element.appendChild(C),this.tooltipElem_=C,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),C=[];this.value.rawValue.forEach((Fe,$e)=>{if(Fe===void 0)return;const un=et($e,0,t,0,e.width),On=et(Fe,s,c,e.height,0);C.push([un,On].join(","))}),this.lineElem_.setAttributeNS(null,"points",C.join(" "));const D=this.tooltipElem_,ne=this.value.rawValue[this.cursor_.rawValue];if(ne===void 0){D.classList.remove(Xt("t","a"));return}const Be=et(this.cursor_.rawValue,0,t,0,e.width),De=et(ne,s,c,e.height,0);D.style.left=`${Be}px`,D.style.top=`${De}px`,D.textContent=`${this.formatter_(ne)}`,D.classList.contains(Xt("t","a"))||(D.classList.add(Xt("t","a"),Xt("t","in")),r(D),D.classList.remove(Xt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ja{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=j(-1),this.view=new Qa(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new rn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Rs(n){return"format"in n&&!q(n.format)?n.format:ft(2)}function el(n){var e;return n.value.rawValue.length===1?new Is(n.document,{formatter:Rs(n.params),value:n.value,viewProps:n.viewProps}):new Ls(n.document,{formatter:Rs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Vn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function tl(n){var e,t,s;return new Ja(n.document,{formatter:Rs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Vn.monitor.defaultLineCount,props:O.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Nr(n){return"view"in n&&n.view==="graph"}const nl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=le,s=Pe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Nr(n)?64:1,reader:n=>tr},controller:n=>Nr(n.params)?tl(n):el(n)},sl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=le,s=Pe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ls(n.document,{formatter:fs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Vn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Is(n.document,{formatter:fs,value:t,viewProps:n.viewProps})}};function rl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(q(s))return null;const c=le,C={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(C),ne=n.binding.constraint?n.binding.constraint(C):void 0,Be=j(D(s.initialValue),{constraint:ne,equals:n.binding.equals}),De=new vt({reader:D,target:e.target,value:Be,writer:n.binding.writer(C)}),Fe=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,un=n.controller({constraint:ne,document:e.document,initialValue:s.initialValue,params:s.params,value:De.value,viewProps:f.create({disabled:Fe,hidden:$e})});return new qe(e.document,{binding:De,blade:Re(),props:O.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:un})}function il(n,e){return e===0?new ut:new en(n,e??Vn.monitor.defaultInterval)}function ol(n,e){var t,s,c;const C=le,D=n.accept(e.target.read(),e.params);if(q(D))return null;const ne={target:e.target,initialValue:D.initialValue,params:D.params},Be=n.binding.reader(ne),De=(s=(t=C.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Fe=C.optional.number(e.params.interval).value,$e=new bt({reader:Be,target:e.target,ticker:il(e.document,Fe),value:tn(De)}),un=C.optional.boolean(e.params.disabled).value,On=C.optional.boolean(e.params.hidden).value,Fn=n.controller({document:e.document,params:D.params,value:$e.value,viewProps:f.create({disabled:un,hidden:On})});return new We(e.document,{binding:$e,blade:Re(),props:O.fromObject({label:"label"in e.params?(c=C.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Fn})}class al{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(q(c))throw new Y({context:{key:t.key},type:"nomatchingcontroller"});const C=this.pluginsMap_.inputs.reduce((D,ne)=>D??rl(ne,{document:e,target:t,params:s}),null);if(C)return C;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((C,D)=>C??ol(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,C)=>c??Lt(C,{document:e,params:t}),null);if(!s)throw new Y({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new st(e);if(e instanceof We)return new rt(e);if(e instanceof Xe)return new _t(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Y.shouldNeverHappen();return t}}function ll(){const n=new al;return[fl,Fa,ja,Ha,La,Ma,ka,Pa,yo,Xa,sl,nl,ye,Hn,G,Et].forEach(e=>{n.register(e)}),n}function cl(n){return Yt.isObject(n)?new Yt(n.x,n.y):new Yt}function ul(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Vt(n,e){if(!n)return;const t=[],s=Ir(n,e);s&&t.push(s);const c=Rr(n);return c&&t.push(c),new At(t)}function dl(n,e){return new Ht({assembly:zr,components:[Vt("x"in n?n.x:void 0,e.x),Vt("y"in n?n.y:void 0,e.y)]})}function $r(n,e){const[t,s]=n?Aa(n):[];if(!q(t)||!q(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Pn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function pl(n,e){const t=e instanceof Ht?e.components[0]:void 0,s=e instanceof Ht?e.components[1]:void 0,c=$r(t,n.x),C=$r(s,n.y);return Math.max(c,C)}function qr(n,e){return{baseStep:Pn(e),constraint:e,textProps:O.fromObject({draggingScale:Sn(e,n),formatter:ft(Jn(e,n))})}}function hl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const fl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Yt.isObject(n))return null;const t=le,s=Pe(e,{expanded:t.optional.boolean,picker:t.optional.custom(or),x:t.optional.custom(jt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cl,constraint:n=>dl(n.params,n.initialValue),equals:Yt.equals,writer:n=>ul},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Ht))throw Y.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,C="picker"in n.params?n.params.picker:void 0;return new Ga(e,{axes:[qr(t.rawValue.x,s.components[0]),qr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:hl(n.params),maxValue:pl(t.rawValue,s),parser:Gt,pickerLayout:C??"popup",value:t,viewProps:n.viewProps})}};class Wr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class jr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Kr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const _l=function(){return{id:"list",type:"blade",accept(n){const e=le,t=Pe(n,{options:e.required.custom(Qn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new It(ar(n.params.options)),t=j(n.params.value,{constraint:e}),s=new An(n.document,{props:new O({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof An)?null:new Wr(n.controller)}}}();function ml(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function vl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class bl extends Tt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);vl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return ml(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(We).forEach(e=>{e.binding.read()})}}class gl extends bn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const wl={id:"slider",type:"blade",accept(n){const e=le,t=Pe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new yt({max:n.params.max,min:n.params.min}),C=new bs(n.document,{baseStep:1,parser:Gt,sliderProps:new O({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:O.fromObject({draggingScale:Sn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:uo}),value:j(s,{constraint:c}),viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:C})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof bs)?null:new jr(n.controller)}},xl=function(){return{id:"text",type:"blade",accept(n){const e=le,t=Pe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Zn(n.document,{parser:n.params.parse,props:O.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:j(n.params.value),viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof Zn)?null:new Kr(n.controller)}}}();function yl(n){const e=n.createElement("div");return e.classList.add(N("dfw")()),n.body&&n.body.appendChild(e),e}function Hr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Pl extends bl{constructor(e){var t,s;const c=e??{},C=(t=c.document)!==null&&t!==void 0?t:l(),D=ll(),ne=new gl(C,{expanded:c.expanded,blade:Re(),props:O.fromObject({title:c.title}),viewProps:f.create()});super(ne,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:yl(C),this.containerElem_.appendChild(this.element),this.doc_=C,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Y.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Y.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Hr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Hr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[wl,_l,Et,xl]})}}const Sl=new E("3.1.10");h.BladeApi=w,h.ButtonApi=se,h.FolderApi=Tt,h.InputBindingApi=st,h.ListApi=Wr,h.MonitorBindingApi=rt,h.Pane=Pl,h.SeparatorApi=gn,h.SliderApi=jr,h.TabApi=ve,h.TabPageApi=me,h.TextApi=Kr,h.TpChangeEvent=M,h.VERSION=Sl,Object.defineProperty(h,"__esModule",{value:!0})})})(Gs,Gs.exports);var Hl=Gs.exports;const Yl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,ai=`// 2DGS render — vertex+fragment.
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
}`,Ci=32,Us=1,Vs=2,li=4,ci=512,ui=1024,tc=0,Qt=new ArrayBuffer(Ci),mt={canvas_size:new Uint32Array(Qt,0,2),accel_flags:new Uint32Array(Qt,8,1),feature_mode:new Uint32Array(Qt,12,1),gaussian_scaling:new Float32Array(Qt,16,1),sh_bias:new Float32Array(Qt,20,1),color_K:new Uint32Array(Qt,24,1),walltime:new Float32Array(Qt,28,1)};function nc(o){mt.canvas_size[0]=o.width>>>0,mt.canvas_size[1]=o.height>>>0,mt.accel_flags[0]=(o.accel_flags??Us|Vs)>>>0,mt.feature_mode[0]=(o.feature_mode??tc)>>>0,mt.gaussian_scaling[0]=o.gaussian_scaling??1,mt.sh_bias[0]=o.sh_bias??.5,mt.color_K[0]=(o.color_K??0)>>>0,mt.walltime[0]=o.walltime??0}function Ei(o,a){o.queue.writeBuffer(a,0,Qt)}function us(o,a,h){h&&o&&a&&Ei(o,a)}function Bn(o,a,h,E,w=!0){mt.canvas_size[0]=o>>>0,mt.canvas_size[1]=a>>>0,us(h??null,E??null,w)}function di(o,a,h,E=!0){mt.gaussian_scaling[0]=o,us(a??null,h??null,E)}function pi(o,a,h,E=!0){mt.sh_bias[0]=o,us(a??null,h??null,E)}function Os(o,a,h,E=!0){let w=mt.accel_flags[0];o.oac!==void 0&&(w=o.oac?w|Us:w&~Us),o.spr!==void 0&&(w=o.spr?w|Vs:w&~Vs),o.bfc!==void 0&&(w=o.bfc?w|li:w&~li),o.hypLegacy!==void 0&&(w=o.hypLegacy?w|ci:w&~ci),o.legacyPos!==void 0&&(w=o.legacyPos?w|ui:w&~ui),mt.accel_flags[0]=w>>>0,us(a??null,h??null,E)}const sc=256;function hi(o,a){const h=[],E=[];let w=!0;for(const S of o.split(`
`)){const M=S.trim();let L;if((L=/^\/\/#if\s+(\w+)\s*$/.exec(M))!==null){const A=!!a[L[1]];E.push({parent:w,taken:A}),w=w&&A;continue}if(/^\/\/#else\s*$/.test(M)){const A=E[E.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");w=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(M)){const A=E.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");w=A.parent;continue}w&&h.push(S)}if(E.length!==0)throw new Error("preprocessWGSL: unterminated #if");return h.join(`
`)}const rc=Ci,ic=8,oc=96,ac=12,js=8,Ot=1<<js,pn=256,as=32/js,lc=0,fi=as&1;function _i(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function cc(o,a){const h=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[h]}),w=S=>o.createComputePipeline({layout:E,compute:{module:a,entryPoint:S,constants:{WG_SIZE:pn}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:h}}function uc(o,a,h){const E=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[E]}),M=o.createPipelineLayout({bindGroupLayouts:[w]}),L=[];for(let A=0;A<as;A++){const I={PASS_ID:A+lc,RS_RADIX_LOG2:js,RS_RADIX_SIZE:Ot};L.push({localHistogram:o.createComputePipeline({layout:S,compute:{module:a,entryPoint:"local_histogram_pass",constants:I}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:h,entryPoint:"scatter_elements",constants:I}})})}return{passes:L,localHistogramBindGroupLayout:E,scatterBindGroupLayout:w}}function dc(o){const a=o.createShaderModule({label:"local histogram",code:Jl}),h=o.createShaderModule({label:"scatter",code:Ql}),E=o.createShaderModule({label:"blelloch prefix",code:ec}),w=cc(o,E),S=uc(o,a,h);return{localHistogramBindGroupLayout:S.localHistogramBindGroupLayout,scatterBindGroupLayout:S.scatterBindGroupLayout,passes:S.passes,hierarchicalBlelloch:w}}function mi(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=a.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),S=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(S,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:h,sampler:E,rectsBuffer:w,texParamsBuffer:S,meta:M}}class pc{constructor(a,h,E,w,S,M=null,L={}){$(this,"device");$(this,"pc");$(this,"presentationFormat");$(this,"camera_buffer");$(this,"render_settings_buffer");$(this,"draw_indirect_buffer");$(this,"splat_2d_buffer");$(this,"querySet");$(this,"resolveBuffer");$(this,"resultBuffer");$(this,"queriesPerFrame",ic);$(this,"queryCapacityFrames",200);$(this,"sort_prefixBindGroup");$(this,"sort_pipelines");$(this,"sort_localHistogramBindGroups");$(this,"sort_scatterBindGroups");$(this,"lastFrame",0);$(this,"frameCount",0);$(this,"preprocessPipeline");$(this,"cullPipeline");$(this,"renderPipeline");$(this,"indirectPipeline");$(this,"renderShaderModule");$(this,"betaKernel",1);$(this,"fetchById");$(this,"octBound");$(this,"acc16");$(this,"accTexture",null);$(this,"accView",null);$(this,"accW",0);$(this,"accH",0);$(this,"legacyRenderPipeline",null);$(this,"varyingsPipeline",null);$(this,"legacyRenderer",!1);$(this,"accResolvePipeline",null);$(this,"accResolveBgl",null);$(this,"accResolveBindGroup",null);$(this,"renderSettingsBgl");$(this,"preprocessBgl2");$(this,"renderSplatsBgl");$(this,"atlasBgl");$(this,"sort_info_buffer");$(this,"sort_ping_pong");$(this,"crsBg");$(this,"gsBg");$(this,"cullBg2");$(this,"preprocessBg1");$(this,"renderSplatsBindGroup");$(this,"renderSettingsBindGroup");$(this,"atlasBindGroup");$(this,"indirectBindGroup");$(this,"sh_solvers_buffer");$(this,"bfcParamsBuffer");$(this,"bfcBindGroupLayout");$(this,"bfcBindGroup");$(this,"bgColor",[0,0,0,0]);$(this,"showPerfDialogNext",!1);$(this,"requestReorderNextFrame",!1);$(this,"reorderInFlight",!1);$(this,"downloadOnceNextRead",!1);$(this,"downloadOnceFileName","fps_metrics");$(this,"allFrameTimes",[]);$(this,"lastStageBreakdownMs",null);$(this,"timeQueryEnabled");$(this,"atlas");$(this,"atlasParamsBuffer");$(this,"_atlasEnabled",!0);$(this,"mipLodBias",1);$(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,Ct(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=S.includes("timestamp-query");this.timeQueryEnabled=A,A&&Ct("⏰ using timestamp-query"),this.pc=a,this.device=h,this.presentationFormat=E,this.camera_buffer=w,this.atlas=M??mi(h),this.atlasParamsBuffer=h.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),h.addEventListener("uncapturederror",Ce=>{console.error("A WebGPU error was not captured:",Ce.error)}),this._setupTimestampQueries(),this._setupBuffers();const I=(Math.floor((this.pc.num_points+pn-1)/pn)+1)*pn,K=Math.ceil(I/pn);console.log(`keys count adjusted: ${I}`),console.log(`key size: ${this.pc.num_points}`);const q=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=dc(h);const z=[_i(I,h),_i(I,h)],X=h.createBuffer({label:"workgroup histograms",size:K*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=h.createBuffer({label:"workgroup prefixes",size:K*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=h.createBuffer({label:"digit base",size:Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(K/pn),se=Math.ceil(Q/pn),W=h.createBuffer({label:"prefix l0 sums",size:Q*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=h.createBuffer({label:"prefix l0 offsets",size:Q*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=h.createBuffer({label:"prefix l1 sums",size:se*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),pe=h.createBuffer({label:"prefix l1 offsets",size:se*Ot*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:W}},{binding:4,resource:{buffer:J}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:pe}},{binding:7,resource:{buffer:Y}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:z[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:z[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:z[0].sort_depths_buffer}},{binding:3,resource:{buffer:z[1].sort_depths_buffer}},{binding:4,resource:{buffer:z[0].sort_indices_buffer}},{binding:5,resource:{buffer:z[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:z[1].sort_depths_buffer}},{binding:3,resource:{buffer:z[0].sort_depths_buffer}},{binding:4,resource:{buffer:z[1].sort_indices_buffer}},{binding:5,resource:{buffer:z[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=q,this.sort_ping_pong=z;const he=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),_e=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ae=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:he,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:_e,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ae,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=ue,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Te=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const ee=this.device.createShaderModule({code:Xl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,_e,ae,this.bfcBindGroupLayout]}),compute:{module:ee,entryPoint:"surfel_cull"}});const fe=this.device.createShaderModule({code:Yl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[he,ue]}),compute:{module:fe,entryPoint:"preprocess"}});const be=this.device.createShaderModule({label:"render_2dgs",code:hi(ai,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});be.getCompilationInfo().then(Ce=>{Ce.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ce.messages.forEach(Ve=>{(Ve.type==="error"?console.error:Ve.type==="warning"?console.warn:console.log)(`${Ve.type} (line ${Ve.lineNum}:${Ve.linePos}): ${Ve.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Le=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Ae=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,Z=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Ae,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),j=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),O=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Le,Z,j]}),vertex:{module:be,entryPoint:"vs_main"},fragment:{module:be,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const we=(Ce,Ve,Ge)=>{const Ne=this.device.createShaderModule({label:`render_2dgs (${Ce})`,code:hi(ai,{FETCH_BY_ID:Ve,OCT:Ge})});return this.device.createRenderPipeline({label:`render_2dgs_${Ce}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Le,Z,j]}),vertex:{module:Ne,entryPoint:"vs_main"},fragment:{module:Ne,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=we("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?we("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Ce=>{Ce?console.error("[render_2dgs] pipeline create validation error:",Ce.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Le,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:Z,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[fi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:j,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=be,this.betaKernel=O,this.renderSettingsBgl=Le,this.renderSplatsBgl=Z,this.atlasBgl=j}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,h){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,h[0],h[1],h[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var w;const a=new ArrayBuffer(32),h=new Uint32Array(a),E=new Float32Array(a);h[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,h[1]=this.atlas.meta.layer_h|0,E[2]=this.atlas.meta.uv_extent||0,h[3]=this.atlas.meta.probe_mode|0||0,h[4]=this._mipMode!==0?Math.max(1,((w=this.atlas.meta.mip_bytes)==null?void 0:w.length)??1):1,E[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,h){var E;if(this.accResolvePipeline===null){const w=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,S=this.device.createShaderModule({label:"acc16_resolve",code:w});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:S,entryPoint:"vs_main"},fragment:{module:S,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===h||((E=this.accTexture)==null||E.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,h),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=h)}setAtlas(a){this.atlas=a??mi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&is(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,is(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,Ct(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,Os({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const h=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([h])),Ct(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),is(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const h=Math.max(0,Math.min(a,this.pc.num_points)),E=h*Uint32Array.BYTES_PER_ELEMENT;if(E===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),S=this.device.createCommandEncoder();S.copyBufferToBuffer(this.sort_ping_pong[fi].sort_indices_buffer,0,w,0,E),this.device.queue.submit([S.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(M)),w.unmap()}frame(a,h,E=!0){const S=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=E&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const L={label:"cull"};M&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+0,endOfPassWriteIndex:S+1});const A=a.beginComputePass(L);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const I=Math.ceil(this.pc.num_points/sc);A.dispatchWorkgroups(I,1,1),A.end()}{const L=a.beginComputePass({label:"calculate indirect dispatch"});L.setPipeline(this.indirectPipeline),L.setBindGroup(0,this.indirectBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:"preprocess"};M&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+2,endOfPassWriteIndex:S+3});const A=a.beginComputePass(L);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let L=0;L<as;L++){const A=L&1,I=this.sort_pipelines.passes[L],K=this.sort_localHistogramBindGroups[A],q=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${L}`};M&&L==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+4});const X=a.beginComputePass(z);X.setPipeline(I.localHistogram),X.setBindGroup(0,K),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const z=a.beginComputePass({label:`prefix_round${L} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,Ot,1),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${L}`};M&&L==as-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+5});const X=a.beginComputePass(z);X.setPipeline(I.scatterElements),X.setBindGroup(0,q),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{let L=h;this.acc16&&(this.ensureAccResources(mt.canvas_size[0],mt.canvas_size[1]),L=this.accView);const A={label:"render",colorAttachments:[{view:L,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:S+6,...this.acc16?{}:{endOfPassWriteIndex:S+7}});const I=a.beginRenderPass(A);if(I.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),I.setBindGroup(0,this.renderSettingsBindGroup),I.setBindGroup(1,this.renderSplatsBindGroup),I.setBindGroup(2,this.atlasBindGroup),I.drawIndirect(this.draw_indirect_buffer,0),I.end(),this.acc16){const K={label:"acc16_resolve",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(K.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:S+7});const q=a.beginRenderPass(K);q.setPipeline(this.accResolvePipeline),q.setBindGroup(0,this.accResolveBindGroup),q.draw(3),q.end()}}this.frameCount++}async readPerfMetrics(a){const h=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const E=this.device.createCommandEncoder({label:"timestamp resolve encoder"});E.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),E.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([E.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const S=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),L=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:w.length},()=>[]);let I=0;for(let se=0;se<M;se++){const W=(L+se)%this.queryCapacityFrames,J=W*this.queriesPerFrame;let N=!0;for(let pe=0;pe<w.length;pe++){const[he,_e,ae]=w[pe];if(S[J+ae]===0n||S[J+_e]===0n||S[J+_e]<S[J+ae]){N=!1;break}}if(!N){!h&&W%60===0&&console.debug("[timestamp] frame slot",W,"contains unwritten (0) timestamps, skipped in stats");continue}I++;for(let pe=0;pe<w.length;pe++){const[he,_e,ae]=w[pe],ue=Number(S[J+ae]),Te=Number(S[J+_e]);A[pe].push((Te-ue)/1e6)}}if(I===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const K=[];let q=0,z=0,X=0;for(let se=0;se<w.length;se++){const W=w[se][0],J=A[se];let N=0;if(W==="Total"){const pe=this.allFrameTimes;N=pe.reduce((ae,ue)=>ae+ue,0)/pe.length;const he=[...pe].sort((ae,ue)=>ae-ue);q=he[Math.floor(he.length*.99)]||0;const _e=pe.reduce((ae,ue)=>ae+Math.pow(ue-N,2),0)/pe.length;z=Math.sqrt(_e),X=N}else N=J.reduce((pe,he)=>pe+he,0)/J.length;K.push([W,N])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(K);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+K.map(([se,W])=>`${se}: ${W.toFixed(3)}ms`).join(`
`)+`
Total P99: ${q.toFixed(3)}ms
Total STD: ${z.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const se=`Stage,ms
`,W=K.map(([pe,he])=>`${pe},${he.toFixed(3)}`).join(`
`),J="data:text/csv;charset=utf-8,"+encodeURIComponent(se+W),N=document.createElement("a");N.href=J,N.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(N),N.click(),N.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),h=a?a.width:1,E=a?a.height:1;nc({width:h,height:E,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Ei(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:qn(this.pc.num_points*oc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:qn(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const h=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,E=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${E}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function hc(o,a){return 2*Math.atan(a/(2*o))}function fc(o,a,h,E){const w=Math.tan(E/2),S=Math.tan(h/2),M=w*o,L=-M,A=S*o,I=-A,K=ht.create();return K[0]=2*o/(A-I),K[5]=-2*o/(M-L),K[2]=(A+I)/(A-I),K[6]=(M+L)/(M-L),K[14]=1,K[10]=a/(a-o),K[11]=-(a*o)/(a-o),ht.transpose(K,K),K}async function _c(o){Ct(`loading scene camera file... : ${o}`);const h=await(await fetch(o)).json();return Ct(`loaded cameras count: ${h.length}`),h.map(E=>{const w=R.clone(E.position),S=Bt.create(...E.rotation.flat()),M=S[0],L=S[4],A=S[8],I=S[1],K=S[5],q=S[9],z=S[2],X=S[6],oe=S[10];M*(K*oe-q*X)-L*(I*oe-q*z)+A*(I*X-K*z)<0&&(S[1]=-S[1],S[5]=-S[5],S[9]=-S[9]);const Q=ht.fromMat3(S);return{position:w,rotation:Q,img_name:E.img_name,id:E.id}})}const mc=4*2,vc=4*16,ki=4*vc+2*mc;function bc(o){return o.createBuffer({label:"camera uniform",size:ki,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const dn=new Float32Array(ki/Float32Array.BYTES_PER_ELEMENT),ls=class ls{constructor(a,h){$(this,"_renderSize",null);$(this,"uniform_buffer");$(this,"position",R.create());$(this,"rotation",ht.create());$(this,"fovY",45/180*Math.PI);$(this,"fovX");$(this,"focalRatioX",1);$(this,"focal",ti.create());$(this,"viewport",ti.create());$(this,"view_matrix",ht.identity());$(this,"view_inv_matrix",ht.identity());$(this,"proj_matrix",ht.identity());$(this,"proj_inv_matrix",ht.identity());$(this,"_negPos",R.create());$(this,"look",R.create(0,0,1));$(this,"up",R.create(0,1,0));$(this,"right",R.create(1,0,0));this.canvas=a,this.device=h,this.uniform_buffer=bc(h),this.on_update_canvas()}setRenderSize(a,h){this._renderSize=[a,h],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,h=this._renderSize?this._renderSize[1]:this.canvas.height,E=.5*h/Math.tan(this.fovY*.5);this.focal[0]=E*this.focalRatioX,this.focal[1]=E,this.fovX=hc(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=h,this.proj_matrix=fc(.01,100,this.fovX,this.fovY),ht.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ht.copy(this.rotation,this.view_matrix),ht.translate(this.view_matrix,this._negPos,this.view_matrix),ht.inverse(this.view_matrix,this.view_inv_matrix),R.transformMat4Upper3x3(ls.Z_AXIS,this.view_inv_matrix,this.look),R.normalize(this.look,this.look),R.cross(this.up,this.look,this.right),R.normalize(this.right,this.right);let a=0;dn.set(this.view_matrix,a),a+=16,dn.set(this.view_inv_matrix,a),a+=16,dn.set(this.proj_matrix,a),a+=16,dn.set(this.proj_inv_matrix,a),a+=16,dn.set(this.viewport,a),a+=2,dn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,dn)}set_preset(a){R.copy(a.position,this.position),ht.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};$(ls,"Z_AXIS",R.create(0,0,1));let Fs=ls;const gc=R.create(1,0,0),wc=R.create(0,1,0),xc=R.create(0,0,1);function yc(o,a){const h=o[0],E=o[4],w=o[8],S=o[1],M=o[5],L=o[9],A=o[2],I=o[6],K=o[10],q=h+M+K;let z,X,oe,Y;if(q>0){const Q=.5/Math.sqrt(q+1);z=.25/Q,X=(I-L)*Q,oe=(w-A)*Q,Y=(S-E)*Q}else if(h>M&&h>K){const Q=2*Math.sqrt(1+h-M-K);z=(I-L)/Q,X=.25*Q,oe=(E+S)/Q,Y=(w+A)/Q}else if(M>K){const Q=2*Math.sqrt(1+M-h-K);z=(w-A)/Q,X=(E+S)/Q,oe=.25*Q,Y=(L+I)/Q}else{const Q=2*Math.sqrt(1+K-h-M);z=(S-E)/Q,X=(w+A)/Q,oe=(L+I)/Q,Y=.25*Q}return a[0]=X,a[1]=oe,a[2]=Y,a[3]=z,a}class Pc{constructor(a){$(this,"element");$(this,"enabled",!0);$(this,"center",R.create(0,0,0));$(this,"up",R.create(0,1,0));$(this,"rotation",[0,0]);$(this,"shift",[0,0]);$(this,"scroll",0);$(this,"speed",.1);$(this,"sensitivity",.08);$(this,"leftPressed",!1);$(this,"rightPressed",!1);$(this,"leftDragPans",!1);$(this,"lastX",0);$(this,"lastY",0);$(this,"touches",new Map);$(this,"lastTouchCenter",null);$(this,"lastPinchDistance",null);$(this,"lastTwoFingerAngle",null);$(this,"lastTouchCount",0);$(this,"roll",0);$(this,"_dir",R.create());$(this,"_right",R.create());$(this,"_upCam",R.create());$(this,"_scratch",R.create());$(this,"_qY",pt.create());$(this,"_qX",pt.create());$(this,"_qRot",pt.create());$(this,"_qZ",pt.create());$(this,"_qLocal",pt.create());$(this,"_qWorldToCam",pt.create());$(this,"_scratchMat3",Bt.create());$(this,"bboxMin",null);$(this,"bboxMax",null);$(this,"anchor",R.create(0,0,0));$(this,"downCallback",a=>{var h,E,w,S;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(E=(h=a.target)==null?void 0:h.setPointerCapture)==null||E.call(h,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(S=(w=a.target)==null?void 0:w.setPointerCapture)==null||S.call(w,a.pointerId),a.preventDefault())}});$(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const h=a.pageX-this.lastX,E=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=E):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=E)});$(this,"upCallback",a=>{var h,E,w,S;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(E=(h=a.target)==null?void 0:h.releasePointerCapture)==null||E.call(h,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(S=(w=a.target)==null?void 0:w.releasePointerCapture)==null||S.call(w,a.pointerId),a.preventDefault()});$(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let h=a.deltaY;a.deltaMode===1?h*=16:a.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=a,this.registerElement(a.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const a=this.bboxMax[0]-this.bboxMin[0],h=this.bboxMax[1]-this.bboxMin[1],E=this.bboxMax[2]-this.bboxMin[2],w=.5*Math.sqrt(a*a+h*h+E*E);return w>1e-6?w:null}addRoll(a){this.roll+=a}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(a){R.copy(a,this.center),R.copy(a,this.anchor)}setOrbitPivot(a){R.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const h=this.camera.rotation;R.set(h[2],h[6],h[10],this._dir),R.normalize(this._dir,this._dir),R.scale(this._dir,a,this._dir),R.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(R.subtract(this.center,a.position,this._scratch),R.length(this._scratch)<1e-6)return;R.normalize(this._scratch,this._scratch),R.cross(this.up,this._scratch,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right),R.normalize(this._right,this._right),R.cross(this._scratch,this._right,this._upCam),R.normalize(this._upCam,this._upCam);const h=a.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,a.update_buffer()}setBbox(a,h){this.bboxMin=R.create(a[0],a[1],a[2]),this.bboxMax=R.create(h[0],h[1],h[2]);const E=(a[0]+h[0])*.5,w=(a[1]+h[1])*.5,S=(a[2]+h[2])*.5;R.set(E,w,S,this.center),R.set(E,w,S,this.anchor)}resetToCamera(){const a=this.camera.rotation;R.set(a[2],a[6],a[10],this._dir),R.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let E=-1/0,w=1/0,S=!1;for(let M=0;M<3;M++){const L=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],I=this.bboxMax[M]-this.camera.position[M];if(Math.abs(L)>1e-8){const K=A/L,q=I/L;E=Math.max(E,Math.min(K,q)),w=Math.min(w,Math.max(K,q))}else if(A>0||I<0){S=!0;break}}!S&&E<=w&&w>0&&(h=(Math.max(E,0)+w)*.5)}if(h===null||!isFinite(h)||h<.001){R.subtract(this.anchor,this.camera.position,this._scratch);const E=R.dot(this._scratch,this._dir);h=E>.001?E:R.length(this._scratch)}h=Math.max(.1,h),R.scale(this._dir,h,this._dir),R.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const E=h.x-this.lastTouchCenter[0],w=h.y-this.lastTouchCenter[1];this.rotation[0]+=E*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[h.x,h.y]}else if(a===2){const h=Array.from(this.touches.values()),E=(h[0].x+h[1].x)*.5,w=(h[0].y+h[1].y)*.5,S=h[1].x-h[0].x,M=h[1].y-h[0].y,L=Math.hypot(S,M),A=Math.atan2(M,S);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const I=E-this.lastTouchCenter[0],K=w-this.lastTouchCenter[1],q=Math.hypot(I,K),z=Math.abs(L-this.lastPinchDistance);let X=A-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),q>.5&&(this.shift[1]-=I,this.shift[0]+=K),z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(L/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=X)}this.lastTouchCenter=[E,w],this.lastPinchDistance=L,this.lastTwoFingerAngle=A}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const Q=h.rotation;this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],R.length(this.up)>1e-6?R.normalize(this.up,this.up):R.set(0,1,0,this.up)}let E=0,w=!1;Math.abs(this.roll)>1e-4&&(E=this.roll,this.roll=0,w=!0),R.subtract(h.position,this.center,this._dir);let S=R.length(this._dir);S<1e-6&&(S=1e-6);const M=Math.exp(Math.log(S)+this.scroll*a*10*this.speed);R.scale(this._dir,M/S,this._dir),S=M;const L=h.rotation;this._right[0]=L[0],this._right[1]=L[4],this._right[2]=L[8],R.normalize(this._right,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right);const A=R.create(L[1],L[5],L[9]);R.normalize(A,A),R.length(A)<1e-6&&R.set(0,1,0,A);const I=a*this.speed*.1*S,K=this.shift[1]*I,q=-this.shift[0]*I;R.scale(this._right,K,this._scratch),R.add(this.center,this._scratch,this.center),R.add(h.position,this._scratch,h.position),R.scale(A,q,this._scratch),R.add(this.center,this._scratch,this.center),R.add(h.position,this._scratch,h.position);const z=this.rotation[0]*a*this.sensitivity,X=this.rotation[1]*a*this.sensitivity;if(Math.abs(z)>1e-5||Math.abs(X)>1e-5||w){const Q=h.rotation;yc(Q,this._qWorldToCam),pt.fromAxisAngle(gc,-X,this._qX),pt.fromAxisAngle(wc,-z,this._qY),pt.multiply(this._qX,this._qY,this._qLocal),w&&(pt.fromAxisAngle(xc,1*E,this._qZ),pt.multiply(this._qZ,this._qLocal,this._qLocal)),pt.normalize(this._qLocal,this._qLocal),pt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),pt.normalize(this._qWorldToCam,this._qWorldToCam),Bt.fromQuat(this._qWorldToCam,this._scratchMat3),ht.fromMat3(this._scratchMat3,h.rotation);const se=h.rotation,W=se[2],J=se[6],N=se[10];h.position[0]=this.center[0]-W*S,h.position[1]=this.center[1]-J*S,h.position[2]=this.center[2]-N*S,this.up[0]=se[1],this.up[1]=se[5],this.up[2]=se[9],R.normalize(this.up,this.up)}else R.add(this.center,this._dir,h.position);h.update_buffer();const Y=Math.pow(.8,a*60);this.rotation[0]*=Y,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=Y,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=Y,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=Y,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=Y,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Mi(o){const a=R.create();for(const h of o)R.add(a,h,a);return R.scale(a,1/Math.max(o.length,1),a)}function Bi(o,a){const h=Bt.create();Bt.inverse(o,h);const E=R.create();return E[0]=h[0]*a[0]+h[4]*a[1]+h[8]*a[2],E[1]=h[1]*a[0]+h[5]*a[1]+h[9]*a[2],E[2]=h[2]*a[0]+h[6]*a[1]+h[10]*a[2],E}function Sc(o){const a=o.slice(),h=[1,0,0,0,1,0,0,0,1],E=(A,I)=>a[A*3+I],w=(A,I,K)=>{a[A*3+I]=K},S=(A,I)=>h[A*3+I],M=(A,I,K)=>{h[A*3+I]=K};for(let A=0;A<30;A++){let I=0,K=1,q=Math.abs(E(0,1));if(Math.abs(E(0,2))>q&&(I=0,K=2,q=Math.abs(E(0,2))),Math.abs(E(1,2))>q&&(I=1,K=2,q=Math.abs(E(1,2))),q<1e-12)break;const z=E(I,I),X=E(K,K),oe=E(I,K);let Y;Math.abs(z-X)<1e-30?Y=Math.PI/4*Math.sign(oe):Y=.5*Math.atan2(2*oe,z-X);const Q=Math.cos(Y),se=Math.sin(Y);for(let W=0;W<3;W++){const J=E(W,I),N=E(W,K);w(W,I,Q*J+se*N),w(W,K,-se*J+Q*N)}for(let W=0;W<3;W++){const J=E(I,W),N=E(K,W);w(I,W,Q*J+se*N),w(K,W,-se*J+Q*N)}for(let W=0;W<3;W++){const J=S(W,I),N=S(W,K);M(W,I,Q*J+se*N),M(W,K,-se*J+Q*N)}}const L=[];for(let A=0;A<3;A++)L.push({val:E(A,A),vec:R.create(S(0,A),S(1,A),S(2,A))});return L.sort((A,I)=>I.val-A.val),{vals:[L[0].val,L[1].val,L[2].val],vecs:[L[0].vec,L[1].vec,L[2].vec]}}function Cc(o,a){const h=Mi(o);let E=0,w=0,S=0,M=0,L=0,A=0;for(const oe of o){const Y=oe[0]-h[0],Q=oe[1]-h[1],se=oe[2]-h[2];E+=Y*Y,w+=Y*Q,S+=Y*se,M+=Q*Q,L+=Q*se,A+=se*se}const I=[E,w,S,w,M,L,S,L,A],{vecs:K}=Sc(I);let q=K[0],z=K[1],X=K[2];return R.dot(X,a)<0&&(R.scale(X,-1,X),R.scale(z,-1,z)),{centroid:h,normal:X,u:q,v:z}}function Ec(o){let a=0,h=0,E=0,w=0,S=0,M=0,L=0,A=0,I=0;for(const[Q,se]of o){const W=-2*Q,J=-2*se,N=1,pe=-(Q*Q+se*se);a+=W*W,h+=W*J,E+=W*N,w+=J*J,S+=J*N,M+=N*N,L+=W*pe,A+=J*pe,I+=N*pe}const K=Bt.create(a,h,E,h,w,S,E,S,M),q=Bi(K,R.create(L,A,I)),z=q[0],X=q[1],oe=q[2],Y=z*z+X*X-oe;return{center:[z,X],radius:Math.sqrt(Math.max(Y,1e-12))}}function kc(o,a){let h=0,E=0,w=0,S=0,M=0,L=0,A=0,I=0,K=0;for(let z=0;z<o.length;z++){const X=o[z],oe=R.normalize(a[z],R.create()),Y=1-oe[0]*oe[0],Q=-oe[0]*oe[1],se=-oe[0]*oe[2],W=1-oe[1]*oe[1],J=-oe[1]*oe[2],N=1-oe[2]*oe[2];h+=Y,E+=Q,w+=se,S+=W,M+=J,L+=N,A+=Y*X[0]+Q*X[1]+se*X[2],I+=Q*X[0]+W*X[1]+J*X[2],K+=se*X[0]+J*X[1]+N*X[2]}const q=Bt.create(h,E,w,E,S,M,w,M,L);return Bi(q,R.create(A,I,K))}function Ti(o,a={}){if(o.length===0)return null;const h=a.tiltDownDeg??8,E=a.radiusScale??1,w=a.alignFirst??!0,S=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(ae=>R.clone(ae.position)),L=o.map(ae=>{const ue=ae.rotation;return R.create(ue[8],ue[9],ue[10])}),A=o.map(ae=>{const ue=ae.rotation;return R.create(ue[4],ue[5],ue[6])}),I=Mi(A),K=R.normalize(R.scale(I,-1,R.create())),{centroid:q,normal:z,u:X,v:oe}=Cc(M,K),Y=M.map(ae=>{const ue=R.sub(ae,q,R.create());return[R.dot(ue,X),R.dot(ue,oe)]}),{center:Q,radius:se}=Ec(Y),W=se*E,J=R.add(q,R.add(R.scale(X,Q[0],R.create()),R.scale(oe,Q[1],R.create()),R.create()),R.create()),N=kc(M,L),pe=W*Math.tan(h*Math.PI/180),he=R.sub(N,R.scale(z,pe,R.create()),R.create());let _e=0;if(w){const ae=R.sub(M[0],J,R.create());_e=Math.atan2(R.dot(ae,oe),R.dot(ae,X))/(2*Math.PI)%1,_e<0&&(_e+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${W.toFixed(2)}, tilt=${h}°, normal=[${z[0].toFixed(2)}, ${z[1].toFixed(2)}, ${z[2].toFixed(2)}], startPhase=${_e.toFixed(3)}`),{center:J,radius:W,normal:z,u:X,v:oe,lookAt:he,startPhase:_e,direction:S}}function Ai(o,a){const h=(o.startPhase+a*o.direction)*2*Math.PI,E=Math.cos(h),w=Math.sin(h),S=R.add(o.center,R.add(R.scale(o.u,o.radius*E,R.create()),R.scale(o.v,o.radius*w,R.create()),R.create()),R.create()),M=R.normalize(R.sub(o.lookAt,S,R.create())),L=R.cross(M,o.normal,R.create());R.length(L)<1e-6&&R.copy(o.u,L),R.normalize(L,L);const A=R.cross(M,L,R.create());R.normalize(A,A);const I=ht.create();return I[0]=L[0],I[1]=A[0],I[2]=M[0],I[3]=0,I[4]=L[1],I[5]=A[1],I[6]=M[1],I[7]=0,I[8]=L[2],I[9]=A[2],I[10]=M[2],I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,{position:S,rotation:I,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Mc(o,a={}){const h=Ti(o,a);if(!h)return[];const E=a.numViews??120;return Array.from({length:E},(w,S)=>({...Ai(h,S/E),img_name:`circle_${S.toString().padStart(4,"0")}`,id:S}))}const Di="BITYMI01",Bc=0,Tc=1,Ac=2,Dc=3,Lc=4,Ic=5;function Ft(o){const a=(o&32768)>>15,h=(o&31744)>>10,E=o&1023;return h===0?(a?-1:1)*Math.pow(2,-14)*(E/1024):h===31?E?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,h-15)*(1+E/1024)}function Ns(o,a,h,E,w,S,M,L,A,I=.5){const K=A?A.length:M.length/8,q=[],z=[];for(let Y=0;Y<K;Y++){const se=(A?A[Y]:Y)*8,W=M[se]-o,J=M[se+1]-a,N=M[se+2]-h,pe=W*E+J*w+N*S;if(pe<=0||!(L[se+7]>>>16&1))continue;const he=L[se+4],_e=Ft(he&65535),ae=Ft(he>>>16&65535),ue=3*Math.max(_e,ae),Te=W-pe*E,ee=J-pe*w,fe=N-pe*S;if(Te*Te+ee*ee+fe*fe>ue*ue)continue;const be=Ft(L[se+3]&65535);if(be<1/255)continue;const Le=L[se+5],Ae=L[se+6];let Z=Ft(Le&65535),j=Ft(Le>>>16&65535),O=Ft(Ae&65535),we=Ft(Ae>>>16&65535);const Ce=Math.hypot(Z,j,O,we)||1;Z/=Ce,j/=Ce,O/=Ce,we/=Ce;const Ve=1-2*(O*O+we*we),Ge=2*(j*O+Z*we),Ne=2*(j*we-Z*O),le=2*(j*O-Z*we),Pe=1-2*(j*j+we*we),ke=2*(O*we+Z*j),B=2*(j*we+Z*O),V=2*(O*we-Z*j),v=1-2*(j*j+O*O),i=E*B+w*V+S*v;if(Math.abs(i)<1e-6)continue;const f=(W*B+J*V+N*v)/i;if(!(f>0))continue;const u=f*E-W,b=f*w-J,x=f*S-N,k=(u*Ve+b*Ge+x*Ne)/(_e||1e-6),P=(u*le+b*Pe+x*ke)/(ae||1e-6),r=k*k+P*P;if(r>9)continue;const m=Math.min(.99,be*Math.exp(-.5*r));m<1/255||(q.push(f),z.push(m))}if(q.length===0)return null;const X=q.map((Y,Q)=>Q).sort((Y,Q)=>q[Y]-q[Q]);let oe=1;for(const Y of X)if(oe*=1-z[Y],oe<I)return q[Y];return null}function $s(o,a,h){const E=(o-h.viewport[0]*.5)/h.focal[0],w=-((a-h.viewport[1]*.5)/h.focal[1]),S=h.rotation;let M=E*S[0]+w*S[1]+S[2],L=E*S[4]+w*S[5]+S[6],A=E*S[8]+w*S[9]+S[10];const I=Math.hypot(M,L,A)||1;return[M/I,L/I,A/I]}function Rc(o,a,h,E,w,S){const[M,L,A]=$s(o,a,E),I=E.position[0],K=E.position[1],q=E.position[2],z=new Uint32Array(w.buffer,w.byteOffset,w.length);let X=Ns(I,K,q,M,L,A,w,z,null,.5);return X===null&&(X=Ns(I,K,q,M,L,A,w,z,null,.8)),X===null?null:[I+X*M,K+X*L,q+X*A]}function zc(o,a){const h=o.viewport[0],E=o.viewport[1],w=new Uint32Array(a.buffer,a.byteOffset,a.length),S=o.position[0],M=o.position[1],L=o.position[2],[A,I,K]=$s(h*.5,E*.5,o),q=.06*Math.max(h,E),z=(q+2)/o.focal[0],X=a.length/8,oe=[];for(let W=0;W<X;W++){const J=W*8,N=a[J]-S,pe=a[J+1]-M,he=a[J+2]-L,_e=N*A+pe*I+he*K;if(_e<=0)continue;const ae=w[J+4],ue=3*Math.max(Ft(ae&65535),Ft(ae>>>16&65535)),Te=N-_e*A,ee=pe-_e*I,fe=he-_e*K,be=_e*z+ue;Te*Te+ee*ee+fe*fe<=be*be&&oe.push(W)}if(oe.length===0)return null;const Y=Int32Array.from(oe),Q=[],se=5;for(let W=0;W<se;W++)for(let J=0;J<se;J++){const N=h*.5+(J-(se-1)/2)/((se-1)/2)*q,pe=E*.5+(W-(se-1)/2)/((se-1)/2)*q,[he,_e,ae]=$s(N,pe,o),ue=Ns(S,M,L,he,_e,ae,a,w,Y,.5);ue!==null&&Q.push(ue*(he*A+_e*I+ae*K))}return Q.length<3?null:(Q.sort((W,J)=>W-J),Q[Q.length>>1])}function Li(o){const a=new Uint8Array(o),h=new TextDecoder().decode(a.subarray(0,8));if(h!==Di)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const E=new DataView(o),w=E.getUint32(8,!0),S=12,M=20;let L=null,A=null,I=null;for(let K=0;K<w;K++){const q=S+K*M,z=E.getUint32(q+0,!0),X=Number(E.getBigUint64(q+4,!0)),oe=Number(E.getBigUint64(q+12,!0)),Y=a.slice(X,X+oe).buffer;z===Bc||z===Tc||z===Ic?L=Y:z===Ac?A=Y:(z===Dc||z===Lc)&&(I=Y)}if(L===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:L,camerasBuffer:A,atlasBuffer:I}}async function vi(o,a){var M;const h=await fetch(o);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const E=(()=>{const L=h.headers.get("content-length");return L&&parseInt(L,10)||void 0})(),w=(M=h.body)==null?void 0:M.getReader();let S;if(!w)S=await h.arrayBuffer(),a&&a(S.byteLength,E,0);else{const L=[];let A=0,I=performance.now(),K=0;for(;;){const{done:X,value:oe}=await w.read();if(X)break;L.push(oe),A+=oe.byteLength;const Y=performance.now();if(Y-I>=150&&a){const Q=(A-K)/((Y-I)/1e3);a(A,E,Q),I=Y,K=A}}const q=new Uint8Array(A);let z=0;for(const X of L)q.set(X,z),z+=X.byteLength;S=q.buffer,a&&a(A,E,0)}return S.byteLength>=8&&new TextDecoder().decode(new Uint8Array(S,0,8))===Di?{bundle:Li(S),rawPly:null}:{bundle:null,rawPly:S}}function Gc(o){return new Promise(a=>{const h=document.createElement("input");h.type="file",h.accept=o,h.style.display="none",h.onchange=()=>{var E;return a(((E=h.files)==null?void 0:E[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function Uc(o,a,h){const E=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),S=document.getElementById("quick-links");w&&(w.onclick=async()=>{const I=await Gc(".ply,.bitymi");if(I)if(E&&(E.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const K=await I.arrayBuffer(),{pcBuffer:q}=Li(K),z=new File([q],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),X=await zs(z,o);a(X)}else{const K=await zs(I,o);a(K)}}),S&&(S.innerHTML="");const M=new URLSearchParams(window.location.search),L=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");L&&(E&&(E.style.display="none"),h(L,A))}async function Vc(o,a,h,E){const w=new Fs(o,h),S=new Pc(w);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const L=typeof window<"u"&&window.parent!==window,A={pos:new Float32Array(3),rot:new Float32Array(16)};if(L){window.addEventListener("message",Z=>{const j=Z.data;if(!(!j||j.type!=="halloumi_sync_pose")&&!(!Array.isArray(j.position)||j.position.length!==3)&&!(!Array.isArray(j.rotation)||j.rotation.length!==16)){for(let O=0;O<3;O++)w.position[O]=j.position[O];for(let O=0;O<16;O++)w.rotation[O]=j.rotation[O];w.update_buffer(),S.resetToCamera();for(let O=0;O<3;O++)A.pos[O]=w.position[O];for(let O=0;O<16;O++)A.rot[O]=w.rotation[O]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const I=()=>{if(!L)return;const Z=w.position,j=w.rotation;let O=!1;for(let we=0;we<3;we++)if(Math.abs(Z[we]-A.pos[we])>1e-6){O=!0;break}if(!O){for(let we=0;we<16;we++)if(Math.abs(j[we]-A.rot[we])>1e-6){O=!0;break}}if(O){for(let we=0;we<3;we++)A.pos[we]=Z[we];for(let we=0;we<16;we++)A.rot[we]=j[we];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Z[0],Z[1],Z[2]],rotation:Array.from(j)},"*")}catch{}}},K="rgba8unorm";a.configure({device:h,format:K,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let q=null,z=null;const X=()=>{w.on_update_canvas(),q!==null&&Bn(o.width,o.height,h,q.render_settings_buffer),z!==null&&z()};new ResizeObserver(()=>{const Z=Math.max(.25,fe.render_scale),j=Math.max(1,Math.ceil(Z*o.clientWidth)),O=Math.max(1,Math.ceil(Z*o.clientHeight));o.width===j&&o.height===O||(o.width=j,o.height=O,X())}).observe(o);let Y=0,Q=0;const se=()=>{(o.width!==Y||o.height!==Q)&&(Y=o.width,Q=o.height,X())},W=new URLSearchParams(window.location.search);let N=W.get("animation")==="1";S.enabled=!N;const pe=W.get("camera_url"),he=W.get("bfc"),_e=he==="1"||he==="true",ae=W.get("bfc_cos"),ue=ae!==null?Number(ae):NaN,Te=Number.isFinite(ue)?ue:2,ee=Math.max(1,window.devicePixelRatio||1),fe={gaussian_scaling:1,sh_bias:.5,animate:N,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:_e,bfc_cos:Te,legacy_renderer:!1,fetch_by_id:!0,render_scale:1},be=new Hl.Pane({title:"Config",expanded:!0});be.addInput(fe,"animate",{label:"Animate"}).on("change",Z=>{const j=N;N=Z.value,S.enabled=!Z.value,!j&&N&&Le.value&&Le.value.onAnimateStart(),j&&!N&&Le.value&&Le.value.onAnimateStop()}),be.addInput(fe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};Uc(h,Z=>Ae(Z,[],null),async(Z,j)=>{let O=j??pe,we,Ce=null;const Ve=Z.toLowerCase();if(Ve.endsWith(".bitymi")||Ve.includes(".bitymi?")){Ws("downloading bundle ...");try{const{bundle:ke}=await vi(Z,(V,v,i)=>{const f=V/1048576,u=v?v/(1024*1024):void 0,b=i/(1024*1024),x=v?Math.min(99,Math.floor(V/v*100)):void 0,k=u?`total ${u.toFixed(1)} MB`:"total -- MB",P=u&&x!==void 0?`${f.toFixed(1)} MB downloaded (${x}%)`:`${f.toFixed(1)} MB downloaded`,r=`${b.toFixed(2)} MB/s`;Nt(`downloading bundle ...
${k}, ${P}
${r}`)});if(!ke)throw new Error("Expected a .bitymi bundle");Nt("parsing PLY ...");const B=new File([ke.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(we=await zs(B,h),!O&&ke.camerasBuffer&&(O=URL.createObjectURL(new Blob([ke.camerasBuffer],{type:"application/json"}))),ke.atlasBuffer){const V=ke.atlasBuffer.byteLength/1048576;Nt(`uploading atlas ...
${V.toFixed(1)} MB BC7`);try{const v=ri(ke.atlasBuffer);Ce=ii(h,v,!0)}catch(v){console.warn("[atlas] failed to parse/upload atlas:",v)}}}catch(ke){throw Nn(),ke}}else we=await jl(Z,h);let Ge=null,Ne="";const le=W.get("atlas2");if(le)try{const{bundle:ke}=await vi(le,(B,V)=>{Nt(`downloading second atlas ...
${(B/1048576).toFixed(1)}${V?` / ${(V/1048576).toFixed(1)}`:""} MB`)});if(!(ke!=null&&ke.atlasBuffer))throw new Error("second bundle has no atlas chunk");Nt("uploading second atlas ..."),Ge=ii(h,ri(ke.atlasBuffer),!0),Ge||(Ne="second atlas: format unsupported on this device")}catch(ke){console.warn("[atlas2] failed:",ke),Ne=`second atlas failed: ${ke}`}const Pe=O?await _c(O):[];Pe.length>0&&w.set_preset(Pe[0]),Ae(we,Pe,Ce,Ge,Ne)});function Ae(Z,j=[],O=null,we=null,Ce=""){const Ve=[(Z.bbox.min[0]+Z.bbox.max[0])/2,(Z.bbox.min[1]+Z.bbox.max[1])/2,(Z.bbox.min[2]+Z.bbox.max[2])/2];S.setBbox(Z.bbox.min,Z.bbox.max),.5*Math.sqrt((Z.bbox.max[0]-Z.bbox.min[0])**2+(Z.bbox.max[1]-Z.bbox.min[1])**2+(Z.bbox.max[2]-Z.bbox.min[2])**2);function Ge(G,H){const ie=Rc(G,H,o,w,Z.surfel_data);ie&&(S.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function Ne(){const G=zc(w,Z.surfel_data);if(G!==null&&G>.001){S.setOrbitDepth(G);return}const H=w.rotation,ie=H[2],de=H[6],Ee=H[10],me=(Z.centroid[0]-w.position[0])*ie+(Z.centroid[1]-w.position[1])*de+(Z.centroid[2]-w.position[2])*Ee;me>.001&&S.setOrbitDepth(me)}if(j.length===0){const G=Z.bbox.max[0]-Z.bbox.min[0],H=Z.bbox.max[1]-Z.bbox.min[1],ie=Z.bbox.max[2]-Z.bbox.min[2],Ee=.5*Math.sqrt(G*G+H*H+ie*ie)*.5;R.set(Ve[0]-Ee,Ve[1]-Ee,Ve[2]-Ee,w.position);const me=R.create(Ee,Ee,Ee);R.normalize(me,me);const ve=R.create(0,1,0),Se=R.create();R.cross(ve,me,Se),R.normalize(Se,Se);const Ke=R.create();R.cross(me,Se,Ke);const at=Bt.create(Se[0],Ke[0],me[0],Se[1],Ke[1],me[1],Se[2],Ke[2],me[2]);ht.fromMat3(at,w.rotation),w.update_buffer()}S.setCenter(R.create(Z.centroid[0],Z.centroid[1],Z.centroid[2]));const le=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),Pe="halloumi.fetch_by_id";let ke=null;try{const G=localStorage.getItem(Pe);(G==="0"||G==="1")&&(ke=G==="1")}catch{}const B=W.get("byid"),V={fetchById:B!==null?B==="1":ke!==null?ke:!le,octBound:W.get("oct")==="1",acc16:W.get("acc16")==="1"},v=new pc(Z,h,K,w.uniform_buffer,E,O,V);Os({hypLegacy:W.get("hyp_legacy")==="1"},h,v.render_settings_buffer),fe.legacy_renderer=W.get("legacy")==="1",fe.legacy_renderer&&v.setLegacyRenderer(!0),fe.fetch_by_id=V.fetchById,console.log(`[render_2dgs] fetch_by_id=${V.fetchById} (source: ${B!==null?"?byid":ke!==null?"remembered":`handheld=${le}`})`),q=v,Bn(o.width,o.height,h,v.render_settings_buffer),fe.atlas_enabled=O!==null;{const G=Z.surfel_data,H=G.length/8;let ie=0,de=0,Ee=0;for(let ve=0;ve<H;ve++)ie+=G[ve*8],de+=G[ve*8+1],Ee+=G[ve*8+2];const me=H>0?[ie/H,de/H,Ee/H]:[0,0,0];v.setBfcParams(fe.bfc_cos,me),Os({bfc:fe.bfc},h,v.render_settings_buffer),console.log(`[bfc] flag=${fe.bfc} cos=${fe.bfc_cos} centroid=(${me[0].toFixed(3)}, ${me[1].toFixed(3)}, ${me[2].toFixed(3)})`)}let i=!1;const f=(()=>{if(O!==null)return`${O.meta.format===2?"BC7":O.meta.format===3?"ASTC 4×4":O.meta.format===7?"BC7 codebook gather (typeD)":`format=${O.meta.format}`} ${O.meta.width}×${O.meta.height}, ${O.meta.n_layers} layers`;const G=h.features.has("texture-compression-bc"),H=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(G?["BC7"]:[]).concat(H?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",f),pi(Z.sh_bias,h,v.render_settings_buffer),di(fe.gaussian_scaling,h,v.render_settings_buffer),fe.sh_bias=Z.sh_bias;const u=Z.num_points.toLocaleString(),b={stats:`${u} surfels · -- fps`};be.addMonitor(b,"stats",{label:"Stats",interval:200});const x=.4,k=3,P=.3;let r=null,m=0,d=0;const p=pt.create(),l=Bt.create();let _=j.length>0?0:-1;const y={view:j.length>0?`${_+1} / ${j.length}: ${j[_].img_name??_}`:"— no presets —"},g=document.createElement("span");function T(G){const H=Bt.create(G[0],G[1],G[2],G[4],G[5],G[6],G[8],G[9],G[10]);return pt.fromMat(H)}function U(G,H){r={fromPos:R.clone(w.position),toPos:R.clone(G.position),fromQuat:pt.normalize(T(w.rotation)),toQuat:pt.normalize(T(G.rotation)),target:G,t:0,duration:Math.max(.01,H)}}const F=(G,H=!0)=>{if(j.length===0)return;_=(G%j.length+j.length)%j.length;const ie=j[_];H?U(ie,x):(w.set_preset(ie),S.resetToCamera(),Ne()),y.view=`${_+1} / ${j.length}: ${j[_].img_name??_}`,g.textContent=y.view};if(j.length>0){const G=be.addSeparator(),H=document.createElement("div");H.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ie=(Ee,me,ve)=>{const Se=document.createElement("button");return Se.className="tp-btnv_b",Se.textContent=Ee,Se.title=me,Se.style.cssText="flex:0 0 34px;height:24px;padding:0;",Se.addEventListener("click",ve),Se};g.textContent=y.view,g.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",H.appendChild(ie("◀","previous view (←)",()=>F(_-1))),H.appendChild(g),H.appendChild(ie("▶","next view (→)",()=>F(_+1))),(be.element.querySelector(".tp-rotv_c")??be.element).insertBefore(H,G.element),G.dispose()}const ce=j.length>0?Ti(j,{tiltDownDeg:15,alignFirst:!0}):null,re=ce?Mc(j,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let te=0;const xe=12;Le.value={onAnimateStart:()=>{te=0},onAnimateStop:()=>{S.resetToCamera(),Ne()}},be.addInput(fe,"render_scale",{label:"Render scale",min:.25,max:ee,step:.25}).on("change",G=>{const H=Math.max(.25,G.value),ie=Math.max(1,Math.ceil(H*o.clientWidth)),de=Math.max(1,Math.ceil(H*o.clientHeight));(o.width!==ie||o.height!==de)&&(o.width=ie,o.height=de,X())});const Me={res:""},ge=()=>{const G=o.width*o.height/1e6;Me.res=`${o.width}×${o.height}  (${G.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${ee.toFixed(2)} · native ${Math.round(o.clientWidth*ee)}×${Math.round(o.clientHeight*ee)}`};ge(),z=ge,be.addMonitor(Me,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),be.addInput(fe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",G=>di(G.value,h,v.render_settings_buffer)),be.addInput(fe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",G=>pi(G.value,h,v.render_settings_buffer)),be.addInput(fe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",G=>{v.bgColor=[G.value.r,G.value.g,G.value.b,G.value.a]});const ye=G=>G===null?"":G.meta.format===3||G.meta.format===8||G.meta.format===10?" (ASTC)":" (BC7)";let Ie=ye(O);const Re=be.addInput(fe,"atlas_enabled",{label:`Texture${Ie}`}).on("change",G=>{v.setAtlasEnabled(G.value),je()}),Oe=document.createElement("button");Oe.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const je=()=>{Oe.textContent=`Texture${Ie}: ${fe.atlas_enabled?"ON":"OFF"}`,Oe.style.borderColor=fe.atlas_enabled?"#f0b060":"#444",Oe.style.color=fe.atlas_enabled?"#f0b060":"#bbb"},He=()=>{fe.atlas_enabled=!fe.atlas_enabled,v.setAtlasEnabled(fe.atlas_enabled),Re.refresh(),je()};if(Oe.title="toggle the baked texture (T)",Oe.addEventListener("click",He),O&&document.body.appendChild(Oe),je(),O&&(we||Ce))if(we){const G={};G[`A${ye(O)} · bundle`]="A",G[`B${ye(we)} · atlas2`]="B";const H={atlas:"A"};be.addInput(H,"atlas",{label:"Atlas source",options:G}).on("change",ie=>{const de=ie.value==="B"?we:O;v.setAtlas(de),Ie=ye(de),Re.label=`Texture${Ie}`,je(),console.log(`[atlas2] now sampling ${ie.value}${Ie}`)})}else{const G={note:Ce};be.addMonitor(G,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const tt=O!==null&&(O.meta.probe_mode|0)>0;if(v.hasMips&&tt)v.setMipMode(fe.mips),be.addInput(fe,"mips",{label:"Mips (trilinear)"}).on("change",G=>v.setMipMode(G.value));else if(v.hasMips){const G=W.get("mipbias"),H={mode:G==="0"||G==="1"||G==="2"?G:"off"},ie=de=>{de==="off"?v.setMipMode(!1):(v.setMipLodBias(Number(de)),v.setMipMode(!0)),console.log(`[mips] ${de==="off"?"off (level 0 only)":`on, bias ${de}`}`)};ie(H.mode),be.addInput(H,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",de=>ie(de.value))}be.addInput(fe,"legacy_renderer",{label:"Legacy renderer"}).on("change",G=>v.setLegacyRenderer(G.value)),be.addInput(fe,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",G=>{v.setFetchById(G.value);try{localStorage.setItem("halloumi.fetch_by_id",G.value?"1":"0")}catch{}});const Ye={aspect:"canvas"},Qe=be.addFolder({title:"📸 Screenshot",expanded:!1});Qe.addInput(Ye,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Ze={s:"pick a size to capture"};Qe.addMonitor(Ze,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const lt=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Je=null;function ot(G){let H;if(Ye.aspect==="canvas")H=o.width/o.height;else{const[ve,Se]=Ye.aspect.split(":").map(Number);H=ve/Se}const ie=h.limits.maxTextureDimension2D;let de,Ee;if(G==="canvas"&&Ye.aspect==="canvas")de=o.width,Ee=o.height;else{const ve=G==="canvas"?Math.max(o.width,o.height):G;H>=1?(de=ve,Ee=Math.round(ve/H)):(Ee=ve,de=Math.round(ve*H))}const me=Math.min(1,ie/Math.max(de,Ee));return de=Math.max(2,Math.round(de*me)&-2),Ee=Math.max(2,Math.round(Ee*me)&-2),[de,Ee]}function st(G,H){const ie=URL.createObjectURL(G),de=document.createElement("a");de.href=ie,de.download=H,document.body.appendChild(de),de.click(),de.remove(),setTimeout(()=>URL.revokeObjectURL(ie),1e4)}async function qe(G,H){var ve;const ie=(G.size/1048576).toFixed(1),de=window;if(typeof de.showSaveFilePicker=="function")try{const Se=await de.showSaveFilePicker({suggestedName:H,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Ke=await Se.createWritable();return await Ke.write(G),await Ke.close(),`saved ${Se.name??H} (${ie} MB) where you chose`}catch(Se){if((Se==null?void 0:Se.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ee=new File([G],H,{type:"image/png"}),me=navigator;if(me.share&&((ve=me.canShare)!=null&&ve.call(me,{files:[Ee]})))try{return await me.share({files:[Ee],title:H}),`shared ${H} (${ie} MB) via share sheet`}catch(Se){if((Se==null?void 0:Se.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return st(G,H),`downloaded ${H} (${ie} MB) to your browser's Downloads folder`}async function rt(G){if(i)return;const[H,ie]=ot(G);Ze.s=`rendering ${H}×${ie}…`;const de=o.width,Ee=o.height;w.setRenderSize(H,ie),Bn(H,ie,h,v.render_settings_buffer);const me=h.createTexture({size:[H,ie,1],format:K,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ve=Math.ceil(H*4/256)*256,Se=h.createBuffer({size:ve*ie,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Ke=h.createCommandEncoder({label:"screenshot"});v.frame(Ke,me.createView(),!1),Ke.copyTextureToBuffer({texture:me},{buffer:Se,bytesPerRow:ve,rowsPerImage:ie},[H,ie,1]),h.queue.submit([Ke.finish()]),w.clearRenderSize(),Bn(de,Ee,h,v.render_settings_buffer);try{await Se.mapAsync(GPUMapMode.READ);const at=new Uint8Array(Se.getMappedRange()),gt=new Uint8ClampedArray(H*ie*4);for(let vt=0;vt<ie;vt++)gt.set(at.subarray(vt*ve,vt*ve+H*4),vt*H*4);for(let vt=3;vt<gt.length;vt+=4)gt[vt]=255;Se.unmap();const wt=document.createElement("canvas");wt.width=H,wt.height=ie,wt.getContext("2d").putImageData(new ImageData(gt,H,ie),0,0);const Et=await new Promise((vt,xn)=>wt.toBlob(tn=>tn?vt(tn):xn(new Error("toBlob failed")),"image/png")),Lt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),ut=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),en=`${Lt}_${H}x${ie}_${ut}.png`;Je={blob:Et,name:en},Ze.s=await qe(Et,en)}catch(at){console.error("[screenshot]",at),Ze.s=`failed: ${at}`}finally{Se.destroy(),me.destroy()}}{const G=document.createElement("div");G.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const H=(de,Ee,me)=>{const ve=document.createElement("button");ve.className="tp-btnv_b",ve.textContent=de,ve.title=Ee,ve.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ve.addEventListener("click",me),G.appendChild(ve)};H("Canvas","current canvas size",()=>{rt("canvas")});for(const[de,Ee]of lt)H(de,`${Ee} px long edge`,()=>{rt(Ee)});(Qe.element.querySelector(".tp-fldv_c")??Qe.element).appendChild(G)}Qe.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Je){Ze.s="nothing captured yet";return}st(Je.blob,Je.name),Ze.s=`downloaded ${Je.name} to your browser's Downloads folder`}),be.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(j.length>0)w.set_preset(j[0]);else{const G=Z.bbox.max[0]-Z.bbox.min[0],H=Z.bbox.max[1]-Z.bbox.min[1],ie=Z.bbox.max[2]-Z.bbox.min[2],Ee=.5*Math.sqrt(G*G+H*H+ie*ie)*.5;R.set(Ve[0]-Ee,Ve[1]-Ee,Ve[2]-Ee,w.position);const me=R.create(Ee,Ee,Ee);R.normalize(me,me);const ve=R.create();R.cross(R.create(0,1,0),me,ve),R.normalize(ve,ve);const Se=R.create();R.cross(me,ve,Se);const Ke=Bt.create(ve[0],Se[0],me[0],ve[1],Se[1],me[1],ve[2],Se[2],me[2]);ht.fromMat3(Ke,w.rotation),w.update_buffer()}S.resetToCamera(),Ne()});const We={result:"— click Benchmark —"},ct=be.addMonitor(We,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});ct.hidden=!0;const it={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Rt(){const H=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(it))if(H.startsWith(ie))return ie;return null}const _t=document.createElement("div");_t.id="bench-overlay",_t.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(_t);function Tt(G,H,ie){const de=Math.floor(H/Math.max(1,ie)*100),Ee=32,me=Math.floor(H/Math.max(1,ie)*Ee),ve="█".repeat(me)+"░".repeat(Ee-me);_t.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${G}</div><div>[${ve}] ${de}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${H} / ${ie} frames · offscreen · pipelined · no vsync</div>`,_t.style.display="block"}function Dt(){_t.style.display="none"}async function $t(G=10,H=200){if(i)return;if(j.length===0){We.result="no cameras to benchmark";return}i=!0;const ie=N,de=fe.animate,Ee=new Float32Array(w.position),me=new Float32Array(w.rotation);N=!1,fe.animate=!1,be.refresh(),r=null,S.enabled=!1;const ve=Rt(),Se=ve?it[ve]:null,Ke=(Se==null?void 0:Se.w)??o.width,at=(Se==null?void 0:Se.h)??o.height,gt=(Se==null?void 0:Se.fovY)??w.getFov(),wt=ve?`${ve} · ${Ke>=4e3/4+500?"images_4":"images_2"}`:"custom",Et=o.width,Lt=o.height,ut=w.getFov();o.width=Ke,o.height=at,w.setFov(gt),Bn(Ke,at,h,v.render_settings_buffer);const en=h.createTexture({size:[Ke,at,1],format:K,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),vt=en.createView(),xn=()=>{const bt=h.createCommandEncoder();v.frame(bt,vt,!1),h.queue.submit([bt.finish()])},tn=()=>new Promise(bt=>setTimeout(bt,0)),ds=20,Yn=async(bt,At)=>{let xt=0,yt=0;for(Tt(At,0,bt),await tn();yt<bt;){const It=Math.min(ds,bt-yt),nn=performance.now();for(let sn=0;sn<It;sn++)w.set_preset(j[(yt+sn)%j.length]),xn();await h.queue.onSubmittedWorkDone();const yn=performance.now();xt+=yn-nn,yt+=It,Tt(At,yt,bt),await tn()}return xt};try{await Yn(G,"Warming up");const At=await Yn(H,"Benchmarking")/H,xt=1e3/At,yt=Z.num_points??Z.surfel_data.length/8,It=(gt*180/Math.PI).toFixed(1),nn=`${xt.toFixed(1)} FPS  (${At.toFixed(2)} ms/frame)
${Ke}×${at} · fovY ${It}° · ${wt}
${yt.toLocaleString()} surfels · ${G}w+${H}b · pipelined`+(v.hasMips?` · ${v._mipMode?`mips bias ${v.mipLodBias}`:"mips off"}`:"");We.result=nn,ct.hidden=!1,console.log("[bench]",nn.replace(/\n/g,"  |  "))}catch(bt){console.error("[bench] failed:",bt),We.result=`bench failed: ${bt}`,ct.hidden=!1}finally{Dt(),en.destroy(),o.width=Et,o.height=Lt,w.setFov(ut),Bn(Et,Lt,h,v.render_settings_buffer),w.position.set(Ee),w.rotation.set(me),w.update_buffer(),S.enabled=!ie,N=ie,fe.animate=de,be.refresh(),i=!1}}be.addButton({title:"📊 Benchmark"}).on("click",()=>$t());const qt=Math.PI/2,nt=new Set,fn=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Wt=G=>{const H=G.target;return!!H&&(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)},_n=()=>nt.has("ShiftLeft")||nt.has("ShiftRight");document.addEventListener("keyup",G=>{nt.delete(G.code)}),window.addEventListener("blur",()=>nt.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&nt.clear()});const mn=G=>{if(nt.size===0||fe.animate)return;const H=_n()?3:1;let ie=0;nt.has("KeyX")&&(ie+=1),nt.has("KeyZ")&&(ie-=1),ie!==0&&(S.addRoll(ie*qt*H*G),r=null);const de=w.rotation,Ee=[de[0],de[4],de[8]],me=[de[1],de[5],de[9]],ve=[de[2],de[6],de[10]],Se=S.center,at=(S.sceneRadius??Math.max(.05,R.distance(w.position,Se)))*.5*H*G;let gt=0,wt=0,Et=0;if(nt.has("KeyW")&&(Et+=1),nt.has("KeyS")&&(Et-=1),nt.has("KeyD")&&(gt+=1),nt.has("KeyA")&&(gt-=1),nt.has("KeyE")&&(wt+=1),nt.has("KeyQ")&&(wt-=1),!gt&&!wt&&!Et)return;const Lt=[0,0,0];for(let ut=0;ut<3;ut++)Lt[ut]=(Ee[ut]*gt+me[ut]*wt+ve[ut]*Et)*at;for(let ut=0;ut<3;ut++)w.position[ut]+=Lt[ut],Se[ut]+=Lt[ut];w.update_buffer(),r=null};document.addEventListener("keydown",G=>{if(Wt(G))return;const H=G.key,ie=H.toLowerCase();if(G.ctrlKey||G.metaKey||G.altKey){nt.clear();return}if(fn.includes(G.code)&&!(G.shiftKey&&G.code==="KeyD")){nt.add(G.code),G.preventDefault();return}if(ie==="t"){He();return}if(H>="0"&&H<="9"&&j.length>0){const de=parseInt(H);de<j.length&&F(de)}else H==="ArrowLeft"||H==="PageUp"?(F(_-1),G.preventDefault()):H==="ArrowRight"||H==="PageDown"?(F(_+1),G.preventDefault()):G.shiftKey&&ie==="d"&&v.debugReadSortedIndices(30).catch(de=>console.error("[DEBUG] readback failed:",de))});function Xe(G,H){const ie=o.getBoundingClientRect(),de=window.devicePixelRatio||1;return[(G-ie.left)*de,(H-ie.top)*de]}o.addEventListener("dblclick",G=>{const[H,ie]=Xe(G.clientX,G.clientY);Ge(H,ie)});let vn=0,Kn=0,bn=0;o.addEventListener("pointerdown",G=>{if(G.pointerType!=="touch")return;const H=performance.now(),ie=H-vn,de=G.clientX-Kn,Ee=G.clientY-bn;if(ie>0&&ie<300&&de*de+Ee*Ee<40*40){const[me,ve]=Xe(G.clientX,G.clientY);Ge(me,ve),vn=0}else vn=H,Kn=G.clientX,bn=G.clientY});function Hn(){return M}let zt=performance.now(),gn=60,Tn=Promise.resolve(),wn=0;async function Jt(){var Ee;const G=performance.now(),H=Math.min((G-zt)/1e3,.1);if(zt=G,H>0){const me=((Ee=v.lastStageBreakdownMs)==null?void 0:Ee.total)??0,ve=me>.5?1e3/me:1/H;gn=gn*.9+ve*.1,b.stats=`${u} surfels · ${Math.round(gn)} fps`}if(i){requestAnimationFrame(Jt);return}if(Hn()&&(r||N)&&(r=null,S.resetToCamera(),Ne(),N&&(N=!1,fe.animate=!1,be.refresh())),N&&fe.animateMode==="circle"&&ce){te+=H/xe,te>=1&&(te-=1);const me=Ai(ce,te);w.set_preset(me),S.update(H);const ve=h.createCommandEncoder();v.frame(ve,a.getCurrentTexture().createView()),h.queue.submit([ve.finish()]),wn++,wn===2&&Nn(),requestAnimationFrame(Jt);return}if(r){r.t+=H/r.duration;const me=Math.min(1,r.t),ve=me*me*(3-2*me);R.lerp(r.fromPos,r.toPos,ve,w.position),pt.slerp(r.fromQuat,r.toQuat,ve,p),Bt.fromQuat(p,l),ht.fromMat3(l,w.rotation),w.update_buffer(),r.t>=1&&(w.set_preset(r.target),r=null,N?j.length>0&&(m=P):(S.resetToCamera(),Ne()))}else if(N&&!Hn()){const me=fe.animateMode==="circle"&&re.length>0,ve=me?re:j;if(ve.length!==0){if(m-=H,m<=0){const Ke=((me?d:_)+1)%ve.length;me?d=Ke:_=Ke;const at=me?k/8:k;U(ve[Ke],at),me||(y.view=`${_+1} / ${j.length}: ${j[_].img_name??_}`)}}}mn(H),S.update(H),I(),se(),await Tn;const ie=h.createCommandEncoder(),de=a.getCurrentTexture().createView();v.frame(ie,de),h.queue.submit([ie.finish()]),Tn=h.queue.onSubmittedWorkDone(),wn++,wn===2&&Nn(),requestAnimationFrame(Jt)}requestAnimationFrame(Jt)}}(function(){let a="dev";for(const E of Array.from(document.querySelectorAll('script[type="module"]'))){const S=E.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(S){a=S[1];break}}const h=document.createElement("div");h.textContent="v "+a,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();(async()=>{if(navigator.gpu===void 0){const S=document.querySelector("#title");S.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const S=document.querySelector("#title");S.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const h=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),E=document.querySelector("#webgpu-canvas");Ol(E!==null);const w=E.getContext("webgpu");Vc(E,w,h,a)})();
