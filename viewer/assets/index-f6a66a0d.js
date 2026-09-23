var kl=Object.defineProperty;var Ml=(o,a,f)=>a in o?kl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f;var $=(o,a,f)=>(Ml(o,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))E(g);new MutationObserver(g=>{for(const P of g)if(P.type==="childList")for(const M of P.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&E(M)}).observe(document,{childList:!0,subtree:!0});function f(g){const P={};return g.integrity&&(P.integrity=g.integrity),g.referrerPolicy&&(P.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?P.credentials="include":g.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function E(g){if(g.ep)return;g.ep=!0;const P=f(g);fetch(g.href,P)}})();function Tl(o,a){return class extends o{constructor(...f){super(...f),a(this)}}}const Bl=Tl(Array,o=>o.fill(0));let ze=1e-6;function Al(o){function a(x=0,k=0){const S=new o(2);return x!==void 0&&(S[0]=x,k!==void 0&&(S[1]=k)),S}const f=a;function E(x,k,S){const r=S??new o(2);return r[0]=x,r[1]=k,r}function g(x,k){const S=k??new o(2);return S[0]=Math.ceil(x[0]),S[1]=Math.ceil(x[1]),S}function P(x,k){const S=k??new o(2);return S[0]=Math.floor(x[0]),S[1]=Math.floor(x[1]),S}function M(x,k){const S=k??new o(2);return S[0]=Math.round(x[0]),S[1]=Math.round(x[1]),S}function L(x,k=0,S=1,r){const m=r??new o(2);return m[0]=Math.min(S,Math.max(k,x[0])),m[1]=Math.min(S,Math.max(k,x[1])),m}function A(x,k,S){const r=S??new o(2);return r[0]=x[0]+k[0],r[1]=x[1]+k[1],r}function I(x,k,S,r){const m=r??new o(2);return m[0]=x[0]+k[0]*S,m[1]=x[1]+k[1]*S,m}function K(x,k){const S=x[0],r=x[1],m=k[0],d=k[1],p=Math.sqrt(S*S+r*r),l=Math.sqrt(m*m+d*d),_=p*l,y=_&&ue(x,k)/_;return Math.acos(y)}function q(x,k,S){const r=S??new o(2);return r[0]=x[0]-k[0],r[1]=x[1]-k[1],r}const G=q;function X(x,k){return Math.abs(x[0]-k[0])<ze&&Math.abs(x[1]-k[1])<ze}function oe(x,k){return x[0]===k[0]&&x[1]===k[1]}function Y(x,k,S,r){const m=r??new o(2);return m[0]=x[0]+S*(k[0]-x[0]),m[1]=x[1]+S*(k[1]-x[1]),m}function Q(x,k,S,r){const m=r??new o(2);return m[0]=x[0]+S[0]*(k[0]-x[0]),m[1]=x[1]+S[1]*(k[1]-x[1]),m}function ne(x,k,S){const r=S??new o(2);return r[0]=Math.max(x[0],k[0]),r[1]=Math.max(x[1],k[1]),r}function F(x,k,S){const r=S??new o(2);return r[0]=Math.min(x[0],k[0]),r[1]=Math.min(x[1],k[1]),r}function J(x,k,S){const r=S??new o(2);return r[0]=x[0]*k,r[1]=x[1]*k,r}const N=J;function he(x,k,S){const r=S??new o(2);return r[0]=x[0]/k,r[1]=x[1]/k,r}function fe(x,k){const S=k??new o(2);return S[0]=1/x[0],S[1]=1/x[1],S}const me=fe;function le(x,k,S){const r=S??new o(3),m=x[0]*k[1]-x[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function ue(x,k){return x[0]*k[0]+x[1]*k[1]}function Be(x){const k=x[0],S=x[1];return Math.sqrt(k*k+S*S)}const ee=Be;function de(x){const k=x[0],S=x[1];return k*k+S*S}const ve=de;function Le(x,k){const S=x[0]-k[0],r=x[1]-k[1];return Math.sqrt(S*S+r*r)}const Ae=Le;function Z(x,k){const S=x[0]-k[0],r=x[1]-k[1];return S*S+r*r}const W=Z;function O(x,k){const S=k??new o(2),r=x[0],m=x[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(S[0]=r/d,S[1]=m/d):(S[0]=0,S[1]=0),S}function xe(x,k){const S=k??new o(2);return S[0]=-x[0],S[1]=-x[1],S}function Ce(x,k){const S=k??new o(2);return S[0]=x[0],S[1]=x[1],S}const Ve=Ce;function Ge(x,k,S){const r=S??new o(2);return r[0]=x[0]*k[0],r[1]=x[1]*k[1],r}const Fe=Ge;function ce(x,k,S){const r=S??new o(2);return r[0]=x[0]/k[0],r[1]=x[1]/k[1],r}const ye=ce;function Ee(x=1,k){const S=k??new o(2),r=Math.random()*2*Math.PI;return S[0]=Math.cos(r)*x,S[1]=Math.sin(r)*x,S}function T(x){const k=x??new o(2);return k[0]=0,k[1]=0,k}function V(x,k,S){const r=S??new o(2),m=x[0],d=x[1];return r[0]=m*k[0]+d*k[4]+k[12],r[1]=m*k[1]+d*k[5]+k[13],r}function v(x,k,S){const r=S??new o(2),m=x[0],d=x[1];return r[0]=k[0]*m+k[4]*d+k[8],r[1]=k[1]*m+k[5]*d+k[9],r}function i(x,k,S,r){const m=r??new o(2),d=x[0]-k[0],p=x[1]-k[1],l=Math.sin(S),_=Math.cos(S);return m[0]=d*_-p*l+k[0],m[1]=d*l+p*_+k[1],m}function h(x,k,S){const r=S??new o(2);return O(x,r),J(r,k,r)}function u(x,k,S){const r=S??new o(2);return Be(x)>k?h(x,k,r):Ce(x,r)}function b(x,k,S){const r=S??new o(2);return Y(x,k,.5,r)}return{create:a,fromValues:f,set:E,ceil:g,floor:P,round:M,clamp:L,add:A,addScaled:I,angle:K,subtract:q,sub:G,equalsApproximately:X,equals:oe,lerp:Y,lerpV:Q,max:ne,min:F,mulScalar:J,scale:N,divScalar:he,inverse:fe,invert:me,cross:le,dot:ue,length:Be,len:ee,lengthSq:de,lenSq:ve,distance:Le,dist:Ae,distanceSq:Z,distSq:W,normalize:O,negate:xe,copy:Ce,clone:Ve,multiply:Ge,mul:Fe,divide:ce,div:ye,random:Ee,zero:T,transformMat4:V,transformMat3:v,rotate:i,setLength:h,truncate:u,midpoint:b}}const Xr=new Map;function yi(o){let a=Xr.get(o);return a||(a=Al(o),Xr.set(o,a)),a}function Dl(o){function a(l,_,y){const w=new o(3);return l!==void 0&&(w[0]=l,_!==void 0&&(w[1]=_,y!==void 0&&(w[2]=y))),w}const f=a;function E(l,_,y,w){const B=w??new o(3);return B[0]=l,B[1]=_,B[2]=y,B}function g(l,_){const y=_??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function P(l,_){const y=_??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function M(l,_){const y=_??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function L(l,_=0,y=1,w){const B=w??new o(3);return B[0]=Math.min(y,Math.max(_,l[0])),B[1]=Math.min(y,Math.max(_,l[1])),B[2]=Math.min(y,Math.max(_,l[2])),B}function A(l,_,y){const w=y??new o(3);return w[0]=l[0]+_[0],w[1]=l[1]+_[1],w[2]=l[2]+_[2],w}function I(l,_,y,w){const B=w??new o(3);return B[0]=l[0]+_[0]*y,B[1]=l[1]+_[1]*y,B[2]=l[2]+_[2]*y,B}function K(l,_){const y=l[0],w=l[1],B=l[2],U=_[0],j=_[1],ae=_[2],re=Math.sqrt(y*y+w*w+B*B),se=Math.sqrt(U*U+j*j+ae*ae),ge=re*se,Me=ge&&ue(l,_)/ge;return Math.acos(Me)}function q(l,_,y){const w=y??new o(3);return w[0]=l[0]-_[0],w[1]=l[1]-_[1],w[2]=l[2]-_[2],w}const G=q;function X(l,_){return Math.abs(l[0]-_[0])<ze&&Math.abs(l[1]-_[1])<ze&&Math.abs(l[2]-_[2])<ze}function oe(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function Y(l,_,y,w){const B=w??new o(3);return B[0]=l[0]+y*(_[0]-l[0]),B[1]=l[1]+y*(_[1]-l[1]),B[2]=l[2]+y*(_[2]-l[2]),B}function Q(l,_,y,w){const B=w??new o(3);return B[0]=l[0]+y[0]*(_[0]-l[0]),B[1]=l[1]+y[1]*(_[1]-l[1]),B[2]=l[2]+y[2]*(_[2]-l[2]),B}function ne(l,_,y){const w=y??new o(3);return w[0]=Math.max(l[0],_[0]),w[1]=Math.max(l[1],_[1]),w[2]=Math.max(l[2],_[2]),w}function F(l,_,y){const w=y??new o(3);return w[0]=Math.min(l[0],_[0]),w[1]=Math.min(l[1],_[1]),w[2]=Math.min(l[2],_[2]),w}function J(l,_,y){const w=y??new o(3);return w[0]=l[0]*_,w[1]=l[1]*_,w[2]=l[2]*_,w}const N=J;function he(l,_,y){const w=y??new o(3);return w[0]=l[0]/_,w[1]=l[1]/_,w[2]=l[2]/_,w}function fe(l,_){const y=_??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const me=fe;function le(l,_,y){const w=y??new o(3),B=l[2]*_[0]-l[0]*_[2],U=l[0]*_[1]-l[1]*_[0];return w[0]=l[1]*_[2]-l[2]*_[1],w[1]=B,w[2]=U,w}function ue(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function Be(l){const _=l[0],y=l[1],w=l[2];return Math.sqrt(_*_+y*y+w*w)}const ee=Be;function de(l){const _=l[0],y=l[1],w=l[2];return _*_+y*y+w*w}const ve=de;function Le(l,_){const y=l[0]-_[0],w=l[1]-_[1],B=l[2]-_[2];return Math.sqrt(y*y+w*w+B*B)}const Ae=Le;function Z(l,_){const y=l[0]-_[0],w=l[1]-_[1],B=l[2]-_[2];return y*y+w*w+B*B}const W=Z;function O(l,_){const y=_??new o(3),w=l[0],B=l[1],U=l[2],j=Math.sqrt(w*w+B*B+U*U);return j>1e-5?(y[0]=w/j,y[1]=B/j,y[2]=U/j):(y[0]=0,y[1]=0,y[2]=0),y}function xe(l,_){const y=_??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function Ce(l,_){const y=_??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const Ve=Ce;function Ge(l,_,y){const w=y??new o(3);return w[0]=l[0]*_[0],w[1]=l[1]*_[1],w[2]=l[2]*_[2],w}const Fe=Ge;function ce(l,_,y){const w=y??new o(3);return w[0]=l[0]/_[0],w[1]=l[1]/_[1],w[2]=l[2]/_[2],w}const ye=ce;function Ee(l=1,_){const y=_??new o(3),w=Math.random()*2*Math.PI,B=Math.random()*2-1,U=Math.sqrt(1-B*B)*l;return y[0]=Math.cos(w)*U,y[1]=Math.sin(w)*U,y[2]=B*l,y}function T(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function V(l,_,y){const w=y??new o(3),B=l[0],U=l[1],j=l[2],ae=_[3]*B+_[7]*U+_[11]*j+_[15]||1;return w[0]=(_[0]*B+_[4]*U+_[8]*j+_[12])/ae,w[1]=(_[1]*B+_[5]*U+_[9]*j+_[13])/ae,w[2]=(_[2]*B+_[6]*U+_[10]*j+_[14])/ae,w}function v(l,_,y){const w=y??new o(3),B=l[0],U=l[1],j=l[2];return w[0]=B*_[0*4+0]+U*_[1*4+0]+j*_[2*4+0],w[1]=B*_[0*4+1]+U*_[1*4+1]+j*_[2*4+1],w[2]=B*_[0*4+2]+U*_[1*4+2]+j*_[2*4+2],w}function i(l,_,y){const w=y??new o(3),B=l[0],U=l[1],j=l[2];return w[0]=B*_[0]+U*_[4]+j*_[8],w[1]=B*_[1]+U*_[5]+j*_[9],w[2]=B*_[2]+U*_[6]+j*_[10],w}function h(l,_,y){const w=y??new o(3),B=_[0],U=_[1],j=_[2],ae=_[3]*2,re=l[0],se=l[1],ge=l[2],Me=U*ge-j*se,we=j*re-B*ge,Pe=B*se-U*re;return w[0]=re+Me*ae+(U*Pe-j*we)*2,w[1]=se+we*ae+(j*Me-B*Pe)*2,w[2]=ge+Pe*ae+(B*we-U*Me)*2,w}function u(l,_){const y=_??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function b(l,_,y){const w=y??new o(3),B=_*4;return w[0]=l[B+0],w[1]=l[B+1],w[2]=l[B+2],w}function x(l,_){const y=_??new o(3),w=l[0],B=l[1],U=l[2],j=l[4],ae=l[5],re=l[6],se=l[8],ge=l[9],Me=l[10];return y[0]=Math.sqrt(w*w+B*B+U*U),y[1]=Math.sqrt(j*j+ae*ae+re*re),y[2]=Math.sqrt(se*se+ge*ge+Me*Me),y}function k(l,_,y,w){const B=w??new o(3),U=[],j=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],j[0]=U[0],j[1]=U[1]*Math.cos(y)-U[2]*Math.sin(y),j[2]=U[1]*Math.sin(y)+U[2]*Math.cos(y),B[0]=j[0]+_[0],B[1]=j[1]+_[1],B[2]=j[2]+_[2],B}function S(l,_,y,w){const B=w??new o(3),U=[],j=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],j[0]=U[2]*Math.sin(y)+U[0]*Math.cos(y),j[1]=U[1],j[2]=U[2]*Math.cos(y)-U[0]*Math.sin(y),B[0]=j[0]+_[0],B[1]=j[1]+_[1],B[2]=j[2]+_[2],B}function r(l,_,y,w){const B=w??new o(3),U=[],j=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],j[0]=U[0]*Math.cos(y)-U[1]*Math.sin(y),j[1]=U[0]*Math.sin(y)+U[1]*Math.cos(y),j[2]=U[2],B[0]=j[0]+_[0],B[1]=j[1]+_[1],B[2]=j[2]+_[2],B}function m(l,_,y){const w=y??new o(3);return O(l,w),J(w,_,w)}function d(l,_,y){const w=y??new o(3);return Be(l)>_?m(l,_,w):Ce(l,w)}function p(l,_,y){const w=y??new o(3);return Y(l,_,.5,w)}return{create:a,fromValues:f,set:E,ceil:g,floor:P,round:M,clamp:L,add:A,addScaled:I,angle:K,subtract:q,sub:G,equalsApproximately:X,equals:oe,lerp:Y,lerpV:Q,max:ne,min:F,mulScalar:J,scale:N,divScalar:he,inverse:fe,invert:me,cross:le,dot:ue,length:Be,len:ee,lengthSq:de,lenSq:ve,distance:Le,dist:Ae,distanceSq:Z,distSq:W,normalize:O,negate:xe,copy:Ce,clone:Ve,multiply:Ge,mul:Fe,divide:ce,div:ye,random:Ee,zero:T,transformMat4:V,transformMat4Upper3x3:v,transformMat3:i,transformQuat:h,getTranslation:u,getAxis:b,getScaling:x,rotateX:k,rotateY:S,rotateZ:r,setLength:m,truncate:d,midpoint:p}}const Qr=new Map;function hs(o){let a=Qr.get(o);return a||(a=Dl(o),Qr.set(o,a)),a}function Ll(o){const a=yi(o),f=hs(o);function E(i,h,u,b,x,k,S,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,h!==void 0&&(d[1]=h,u!==void 0&&(d[2]=u,b!==void 0&&(d[4]=b,x!==void 0&&(d[5]=x,k!==void 0&&(d[6]=k,S!==void 0&&(d[8]=S,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function g(i,h,u,b,x,k,S,r,m,d){const p=d??new o(12);return p[0]=i,p[1]=h,p[2]=u,p[3]=0,p[4]=b,p[5]=x,p[6]=k,p[7]=0,p[8]=S,p[9]=r,p[10]=m,p[11]=0,p}function P(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function M(i,h){const u=h??new o(12),b=i[0],x=i[1],k=i[2],S=i[3],r=b+b,m=x+x,d=k+k,p=b*r,l=x*r,_=x*m,y=k*r,w=k*m,B=k*d,U=S*r,j=S*m,ae=S*d;return u[0]=1-_-B,u[1]=l+ae,u[2]=y-j,u[3]=0,u[4]=l-ae,u[5]=1-p-B,u[6]=w+U,u[7]=0,u[8]=y+j,u[9]=w-U,u[10]=1-p-_,u[11]=0,u}function L(i,h){const u=h??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function A(i,h,u){const b=u??new o(12);return b[0]=i[0]*h,b[1]=i[1]*h,b[2]=i[2]*h,b[4]=i[4]*h,b[5]=i[5]*h,b[6]=i[6]*h,b[8]=i[8]*h,b[9]=i[9]*h,b[10]=i[10]*h,b}const I=A;function K(i,h,u){const b=u??new o(12);return b[0]=i[0]+h[0],b[1]=i[1]+h[1],b[2]=i[2]+h[2],b[4]=i[4]+h[4],b[5]=i[5]+h[5],b[6]=i[6]+h[6],b[8]=i[8]+h[8],b[9]=i[9]+h[9],b[10]=i[10]+h[10],b}function q(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const G=q;function X(i,h){return Math.abs(i[0]-h[0])<ze&&Math.abs(i[1]-h[1])<ze&&Math.abs(i[2]-h[2])<ze&&Math.abs(i[4]-h[4])<ze&&Math.abs(i[5]-h[5])<ze&&Math.abs(i[6]-h[6])<ze&&Math.abs(i[8]-h[8])<ze&&Math.abs(i[9]-h[9])<ze&&Math.abs(i[10]-h[10])<ze}function oe(i,h){return i[0]===h[0]&&i[1]===h[1]&&i[2]===h[2]&&i[4]===h[4]&&i[5]===h[5]&&i[6]===h[6]&&i[8]===h[8]&&i[9]===h[9]&&i[10]===h[10]}function Y(i){const h=i??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function Q(i,h){const u=h??new o(12);if(u===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,u}const b=i[0*4+0],x=i[0*4+1],k=i[0*4+2],S=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2];return u[0]=b,u[1]=S,u[2]=d,u[4]=x,u[5]=r,u[6]=p,u[8]=k,u[9]=m,u[10]=l,u}function ne(i,h){const u=h??new o(12),b=i[0*4+0],x=i[0*4+1],k=i[0*4+2],S=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2],_=l*r-m*p,y=-l*S+m*d,w=p*S-r*d,B=1/(b*_+x*y+k*w);return u[0]=_*B,u[1]=(-l*x+k*p)*B,u[2]=(m*x-k*r)*B,u[4]=y*B,u[5]=(l*b-k*d)*B,u[6]=(-m*b+k*S)*B,u[8]=w*B,u[9]=(-p*b+x*d)*B,u[10]=(r*b-x*S)*B,u}function F(i){const h=i[0],u=i[0*4+1],b=i[0*4+2],x=i[1*4+0],k=i[1*4+1],S=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return h*(k*d-m*S)-x*(u*d-m*b)+r*(u*S-k*b)}const J=ne;function N(i,h,u){const b=u??new o(12),x=i[0],k=i[1],S=i[2],r=i[4+0],m=i[4+1],d=i[4+2],p=i[8+0],l=i[8+1],_=i[8+2],y=h[0],w=h[1],B=h[2],U=h[4+0],j=h[4+1],ae=h[4+2],re=h[8+0],se=h[8+1],ge=h[8+2];return b[0]=x*y+r*w+p*B,b[1]=k*y+m*w+l*B,b[2]=S*y+d*w+_*B,b[4]=x*U+r*j+p*ae,b[5]=k*U+m*j+l*ae,b[6]=S*U+d*j+_*ae,b[8]=x*re+r*se+p*ge,b[9]=k*re+m*se+l*ge,b[10]=S*re+d*se+_*ge,b}const he=N;function fe(i,h,u){const b=u??Y();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function me(i,h){const u=h??a.create();return u[0]=i[8],u[1]=i[9],u}function le(i,h,u){const b=u??a.create(),x=h*4;return b[0]=i[x+0],b[1]=i[x+1],b}function ue(i,h,u,b){const x=b===i?i:q(i,b),k=u*4;return x[k+0]=h[0],x[k+1]=h[1],x}function Be(i,h){const u=h??a.create(),b=i[0],x=i[1],k=i[4],S=i[5];return u[0]=Math.sqrt(b*b+x*x),u[1]=Math.sqrt(k*k+S*S),u}function ee(i,h){const u=h??f.create(),b=i[0],x=i[1],k=i[2],S=i[4],r=i[5],m=i[6],d=i[8],p=i[9],l=i[10];return u[0]=Math.sqrt(b*b+x*x+k*k),u[1]=Math.sqrt(S*S+r*r+m*m),u[2]=Math.sqrt(d*d+p*p+l*l),u}function de(i,h){const u=h??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function ve(i,h,u){const b=u??new o(12),x=h[0],k=h[1],S=i[0],r=i[1],m=i[2],d=i[1*4+0],p=i[1*4+1],l=i[1*4+2],_=i[2*4+0],y=i[2*4+1],w=i[2*4+2];return i!==b&&(b[0]=S,b[1]=r,b[2]=m,b[4]=d,b[5]=p,b[6]=l),b[8]=S*x+d*k+_,b[9]=r*x+p*k+y,b[10]=m*x+l*k+w,b}function Le(i,h){const u=h??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=b,u[1]=x,u[2]=0,u[4]=-x,u[5]=b,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ae(i,h,u){const b=u??new o(12),x=i[0*4+0],k=i[0*4+1],S=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],p=Math.cos(h),l=Math.sin(h);return b[0]=p*x+l*r,b[1]=p*k+l*m,b[2]=p*S+l*d,b[4]=p*r-l*x,b[5]=p*m-l*k,b[6]=p*d-l*S,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Z(i,h){const u=h??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=b,u[6]=x,u[8]=0,u[9]=-x,u[10]=b,u}function W(i,h,u){const b=u??new o(12),x=i[4],k=i[5],S=i[6],r=i[8],m=i[9],d=i[10],p=Math.cos(h),l=Math.sin(h);return b[4]=p*x+l*r,b[5]=p*k+l*m,b[6]=p*S+l*d,b[8]=p*r-l*x,b[9]=p*m-l*k,b[10]=p*d-l*S,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function O(i,h){const u=h??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=b,u[1]=0,u[2]=-x,u[4]=0,u[5]=1,u[6]=0,u[8]=x,u[9]=0,u[10]=b,u}function xe(i,h,u){const b=u??new o(12),x=i[0*4+0],k=i[0*4+1],S=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],p=Math.cos(h),l=Math.sin(h);return b[0]=p*x-l*r,b[1]=p*k-l*m,b[2]=p*S-l*d,b[8]=p*r+l*x,b[9]=p*m+l*k,b[10]=p*d+l*S,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Ce=Le,Ve=Ae;function Ge(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Fe(i,h,u){const b=u??new o(12),x=h[0],k=h[1];return b[0]=x*i[0*4+0],b[1]=x*i[0*4+1],b[2]=x*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ce(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function ye(i,h,u){const b=u??new o(12),x=h[0],k=h[1],S=h[2];return b[0]=x*i[0*4+0],b[1]=x*i[0*4+1],b[2]=x*i[0*4+2],b[4]=k*i[1*4+0],b[5]=k*i[1*4+1],b[6]=k*i[1*4+2],b[8]=S*i[2*4+0],b[9]=S*i[2*4+1],b[10]=S*i[2*4+2],b}function Ee(i,h){const u=h??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function T(i,h,u){const b=u??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function V(i,h){const u=h??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function v(i,h,u){const b=u??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],b[8]=h*i[2*4+0],b[9]=h*i[2*4+1],b[10]=h*i[2*4+2],b}return{add:K,clone:G,copy:q,create:E,determinant:F,equals:oe,equalsApproximately:X,fromMat4:P,fromQuat:M,get3DScaling:ee,getAxis:le,getScaling:Be,getTranslation:me,identity:Y,inverse:ne,invert:J,mul:he,mulScalar:I,multiply:N,multiplyScalar:A,negate:L,rotate:Ae,rotateX:W,rotateY:xe,rotateZ:Ve,rotation:Le,rotationX:Z,rotationY:O,rotationZ:Ce,scale:Fe,scale3D:ye,scaling:Ge,scaling3D:ce,set:g,setAxis:ue,setTranslation:fe,translate:ve,translation:de,transpose:Q,uniformScale:T,uniformScale3D:v,uniformScaling:Ee,uniformScaling3D:V}}const Jr=new Map;function Il(o){let a=Jr.get(o);return a||(a=Ll(o),Jr.set(o,a)),a}function Rl(o){const a=hs(o);function f(r,m,d,p,l,_,y,w,B,U,j,ae,re,se,ge,Me){const we=new o(16);return r!==void 0&&(we[0]=r,m!==void 0&&(we[1]=m,d!==void 0&&(we[2]=d,p!==void 0&&(we[3]=p,l!==void 0&&(we[4]=l,_!==void 0&&(we[5]=_,y!==void 0&&(we[6]=y,w!==void 0&&(we[7]=w,B!==void 0&&(we[8]=B,U!==void 0&&(we[9]=U,j!==void 0&&(we[10]=j,ae!==void 0&&(we[11]=ae,re!==void 0&&(we[12]=re,se!==void 0&&(we[13]=se,ge!==void 0&&(we[14]=ge,Me!==void 0&&(we[15]=Me)))))))))))))))),we}function E(r,m,d,p,l,_,y,w,B,U,j,ae,re,se,ge,Me,we){const Pe=we??new o(16);return Pe[0]=r,Pe[1]=m,Pe[2]=d,Pe[3]=p,Pe[4]=l,Pe[5]=_,Pe[6]=y,Pe[7]=w,Pe[8]=B,Pe[9]=U,Pe[10]=j,Pe[11]=ae,Pe[12]=re,Pe[13]=se,Pe[14]=ge,Pe[15]=Me,Pe}function g(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function P(r,m){const d=m??new o(16),p=r[0],l=r[1],_=r[2],y=r[3],w=p+p,B=l+l,U=_+_,j=p*w,ae=l*w,re=l*B,se=_*w,ge=_*B,Me=_*U,we=y*w,Pe=y*B,Re=y*U;return d[0]=1-re-Me,d[1]=ae+Re,d[2]=se-Pe,d[3]=0,d[4]=ae-Re,d[5]=1-j-Me,d[6]=ge+we,d[7]=0,d[8]=se+Pe,d[9]=ge-we,d[10]=1-j-re,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function L(r,m,d){const p=d??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function A(r,m,d){const p=d??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const I=A;function K(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const q=K;function G(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function X(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function oe(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Y(r,m){const d=m??new o(16);if(d===r){let Ie;return Ie=r[1],r[1]=r[4],r[4]=Ie,Ie=r[2],r[2]=r[8],r[8]=Ie,Ie=r[3],r[3]=r[12],r[12]=Ie,Ie=r[6],r[6]=r[9],r[9]=Ie,Ie=r[7],r[7]=r[13],r[13]=Ie,Ie=r[11],r[11]=r[14],r[14]=Ie,d}const p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],w=r[1*4+0],B=r[1*4+1],U=r[1*4+2],j=r[1*4+3],ae=r[2*4+0],re=r[2*4+1],se=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Pe=r[3*4+2],Re=r[3*4+3];return d[0]=p,d[1]=w,d[2]=ae,d[3]=Me,d[4]=l,d[5]=B,d[6]=re,d[7]=we,d[8]=_,d[9]=U,d[10]=se,d[11]=Pe,d[12]=y,d[13]=j,d[14]=ge,d[15]=Re,d}function Q(r,m){const d=m??new o(16),p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],w=r[1*4+0],B=r[1*4+1],U=r[1*4+2],j=r[1*4+3],ae=r[2*4+0],re=r[2*4+1],se=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],we=r[3*4+1],Pe=r[3*4+2],Re=r[3*4+3],Ie=se*Re,qe=Pe*ge,$e=U*Re,je=Pe*j,Xe=U*ge,st=se*j,rt=_*Re,tt=Pe*y,at=_*ge,nt=se*y,Ye=_*j,He=U*y,We=ae*we,Ze=Me*re,Qe=w*we,pt=Me*B,it=w*re,Rt=ae*B,bt=p*we,Ct=Me*l,Bt=p*re,Kt=ae*l,Pt=p*B,Ut=w*l,_n=Ie*B+je*re+Xe*we-(qe*B+$e*re+st*we),Ht=qe*l+rt*re+nt*we-(Ie*l+tt*re+at*we),mn=$e*l+tt*B+Ye*we-(je*l+rt*B+He*we),ot=st*l+at*B+He*re-(Xe*l+nt*B+Ye*re),Je=1/(p*_n+w*Ht+ae*mn+Me*ot);return d[0]=Je*_n,d[1]=Je*Ht,d[2]=Je*mn,d[3]=Je*ot,d[4]=Je*(qe*w+$e*ae+st*Me-(Ie*w+je*ae+Xe*Me)),d[5]=Je*(Ie*p+tt*ae+at*Me-(qe*p+rt*ae+nt*Me)),d[6]=Je*(je*p+rt*w+He*Me-($e*p+tt*w+Ye*Me)),d[7]=Je*(Xe*p+nt*w+Ye*ae-(st*p+at*w+He*ae)),d[8]=Je*(We*j+pt*ge+it*Re-(Ze*j+Qe*ge+Rt*Re)),d[9]=Je*(Ze*y+bt*ge+Kt*Re-(We*y+Ct*ge+Bt*Re)),d[10]=Je*(Qe*y+Ct*j+Pt*Re-(pt*y+bt*j+Ut*Re)),d[11]=Je*(Rt*y+Bt*j+Ut*ge-(it*y+Kt*j+Pt*ge)),d[12]=Je*(Qe*se+Rt*Pe+Ze*U-(it*Pe+We*U+pt*se)),d[13]=Je*(Bt*Pe+We*_+Ct*se-(bt*se+Kt*Pe+Ze*_)),d[14]=Je*(bt*U+Ut*Pe+pt*_-(Pt*Pe+Qe*_+Ct*U)),d[15]=Je*(Pt*se+it*_+Kt*U-(Bt*U+Ut*se+Rt*_)),d}function ne(r){const m=r[0],d=r[0*4+1],p=r[0*4+2],l=r[0*4+3],_=r[1*4+0],y=r[1*4+1],w=r[1*4+2],B=r[1*4+3],U=r[2*4+0],j=r[2*4+1],ae=r[2*4+2],re=r[2*4+3],se=r[3*4+0],ge=r[3*4+1],Me=r[3*4+2],we=r[3*4+3],Pe=ae*we,Re=Me*re,Ie=w*we,qe=Me*B,$e=w*re,je=ae*B,Xe=p*we,st=Me*l,rt=p*re,tt=ae*l,at=p*B,nt=w*l,Ye=Pe*y+qe*j+$e*ge-(Re*y+Ie*j+je*ge),He=Re*d+Xe*j+tt*ge-(Pe*d+st*j+rt*ge),We=Ie*d+st*y+at*ge-(qe*d+Xe*y+nt*ge),Ze=je*d+rt*y+nt*j-($e*d+tt*y+at*j);return m*Ye+_*He+U*We+se*Ze}const F=Q;function J(r,m,d){const p=d??new o(16),l=r[0],_=r[1],y=r[2],w=r[3],B=r[4+0],U=r[4+1],j=r[4+2],ae=r[4+3],re=r[8+0],se=r[8+1],ge=r[8+2],Me=r[8+3],we=r[12+0],Pe=r[12+1],Re=r[12+2],Ie=r[12+3],qe=m[0],$e=m[1],je=m[2],Xe=m[3],st=m[4+0],rt=m[4+1],tt=m[4+2],at=m[4+3],nt=m[8+0],Ye=m[8+1],He=m[8+2],We=m[8+3],Ze=m[12+0],Qe=m[12+1],pt=m[12+2],it=m[12+3];return p[0]=l*qe+B*$e+re*je+we*Xe,p[1]=_*qe+U*$e+se*je+Pe*Xe,p[2]=y*qe+j*$e+ge*je+Re*Xe,p[3]=w*qe+ae*$e+Me*je+Ie*Xe,p[4]=l*st+B*rt+re*tt+we*at,p[5]=_*st+U*rt+se*tt+Pe*at,p[6]=y*st+j*rt+ge*tt+Re*at,p[7]=w*st+ae*rt+Me*tt+Ie*at,p[8]=l*nt+B*Ye+re*He+we*We,p[9]=_*nt+U*Ye+se*He+Pe*We,p[10]=y*nt+j*Ye+ge*He+Re*We,p[11]=w*nt+ae*Ye+Me*He+Ie*We,p[12]=l*Ze+B*Qe+re*pt+we*it,p[13]=_*Ze+U*Qe+se*pt+Pe*it,p[14]=y*Ze+j*Qe+ge*pt+Re*it,p[15]=w*Ze+ae*Qe+Me*pt+Ie*it,p}const N=J;function he(r,m,d){const p=d??oe();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function fe(r,m){const d=m??a.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function me(r,m,d){const p=d??a.create(),l=m*4;return p[0]=r[l+0],p[1]=r[l+1],p[2]=r[l+2],p}function le(r,m,d,p){const l=p===r?p:K(r,p),_=d*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function ue(r,m){const d=m??a.create(),p=r[0],l=r[1],_=r[2],y=r[4],w=r[5],B=r[6],U=r[8],j=r[9],ae=r[10];return d[0]=Math.sqrt(p*p+l*l+_*_),d[1]=Math.sqrt(y*y+w*w+B*B),d[2]=Math.sqrt(U*U+j*j+ae*ae),d}function Be(r,m,d,p,l){const _=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const w=1/(d-p);_[10]=p*w,_[14]=p*d*w}else _[10]=-1,_[14]=-d;return _}function ee(r,m,d,p=1/0,l){const _=l??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=d;else{const w=1/(p-d);_[10]=d*w,_[14]=p*d*w}return _}function de(r,m,d,p,l,_,y){const w=y??new o(16);return w[0]=2/(m-r),w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2/(p-d),w[6]=0,w[7]=0,w[8]=0,w[9]=0,w[10]=1/(l-_),w[11]=0,w[12]=(m+r)/(r-m),w[13]=(p+d)/(d-p),w[14]=l/(l-_),w[15]=1,w}function ve(r,m,d,p,l,_,y){const w=y??new o(16),B=m-r,U=p-d,j=l-_;return w[0]=2*l/B,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*l/U,w[6]=0,w[7]=0,w[8]=(r+m)/B,w[9]=(p+d)/U,w[10]=_/j,w[11]=-1,w[12]=0,w[13]=0,w[14]=l*_/j,w[15]=0,w}function Le(r,m,d,p,l,_=1/0,y){const w=y??new o(16),B=m-r,U=p-d;if(w[0]=2*l/B,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=2*l/U,w[6]=0,w[7]=0,w[8]=(r+m)/B,w[9]=(p+d)/U,w[11]=-1,w[12]=0,w[13]=0,w[15]=0,_===1/0)w[10]=0,w[14]=l;else{const j=1/(_-l);w[10]=l*j,w[14]=_*l*j}return w}const Ae=a.create(),Z=a.create(),W=a.create();function O(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(m,r,W),W),a.normalize(a.cross(d,W,Ae),Ae),a.normalize(a.cross(W,Ae,Z),Z),l[0]=Ae[0],l[1]=Ae[1],l[2]=Ae[2],l[3]=0,l[4]=Z[0],l[5]=Z[1],l[6]=Z[2],l[7]=0,l[8]=W[0],l[9]=W[1],l[10]=W[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function xe(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,W),W),a.normalize(a.cross(d,W,Ae),Ae),a.normalize(a.cross(W,Ae,Z),Z),l[0]=Ae[0],l[1]=Ae[1],l[2]=Ae[2],l[3]=0,l[4]=Z[0],l[5]=Z[1],l[6]=Z[2],l[7]=0,l[8]=W[0],l[9]=W[1],l[10]=W[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ce(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,W),W),a.normalize(a.cross(d,W,Ae),Ae),a.normalize(a.cross(W,Ae,Z),Z),l[0]=Ae[0],l[1]=Z[0],l[2]=W[0],l[3]=0,l[4]=Ae[1],l[5]=Z[1],l[6]=W[1],l[7]=0,l[8]=Ae[2],l[9]=Z[2],l[10]=W[2],l[11]=0,l[12]=-(Ae[0]*r[0]+Ae[1]*r[1]+Ae[2]*r[2]),l[13]=-(Z[0]*r[0]+Z[1]*r[1]+Z[2]*r[2]),l[14]=-(W[0]*r[0]+W[1]*r[1]+W[2]*r[2]),l[15]=1,l}function Ve(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function Ge(r,m,d){const p=d??new o(16),l=m[0],_=m[1],y=m[2],w=r[0],B=r[1],U=r[2],j=r[3],ae=r[1*4+0],re=r[1*4+1],se=r[1*4+2],ge=r[1*4+3],Me=r[2*4+0],we=r[2*4+1],Pe=r[2*4+2],Re=r[2*4+3],Ie=r[3*4+0],qe=r[3*4+1],$e=r[3*4+2],je=r[3*4+3];return r!==p&&(p[0]=w,p[1]=B,p[2]=U,p[3]=j,p[4]=ae,p[5]=re,p[6]=se,p[7]=ge,p[8]=Me,p[9]=we,p[10]=Pe,p[11]=Re),p[12]=w*l+ae*_+Me*y+Ie,p[13]=B*l+re*_+we*y+qe,p[14]=U*l+se*_+Pe*y+$e,p[15]=j*l+ge*_+Re*y+je,p}function Fe(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=l,d[7]=0,d[8]=0,d[9]=-l,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ce(r,m,d){const p=d??new o(16),l=r[4],_=r[5],y=r[6],w=r[7],B=r[8],U=r[9],j=r[10],ae=r[11],re=Math.cos(m),se=Math.sin(m);return p[4]=re*l+se*B,p[5]=re*_+se*U,p[6]=re*y+se*j,p[7]=re*w+se*ae,p[8]=re*B-se*l,p[9]=re*U-se*_,p[10]=re*j-se*y,p[11]=re*ae-se*w,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function ye(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=0,d[2]=-l,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=l,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Ee(r,m,d){const p=d??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],w=r[0*4+3],B=r[2*4+0],U=r[2*4+1],j=r[2*4+2],ae=r[2*4+3],re=Math.cos(m),se=Math.sin(m);return p[0]=re*l-se*B,p[1]=re*_-se*U,p[2]=re*y-se*j,p[3]=re*w-se*ae,p[8]=re*B+se*l,p[9]=re*U+se*_,p[10]=re*j+se*y,p[11]=re*ae+se*w,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function T(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=l,d[2]=0,d[3]=0,d[4]=-l,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function V(r,m,d){const p=d??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],w=r[0*4+3],B=r[1*4+0],U=r[1*4+1],j=r[1*4+2],ae=r[1*4+3],re=Math.cos(m),se=Math.sin(m);return p[0]=re*l+se*B,p[1]=re*_+se*U,p[2]=re*y+se*j,p[3]=re*w+se*ae,p[4]=re*B-se*l,p[5]=re*U-se*_,p[6]=re*j-se*y,p[7]=re*ae-se*w,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function v(r,m,d){const p=d??new o(16);let l=r[0],_=r[1],y=r[2];const w=Math.sqrt(l*l+_*_+y*y);l/=w,_/=w,y/=w;const B=l*l,U=_*_,j=y*y,ae=Math.cos(m),re=Math.sin(m),se=1-ae;return p[0]=B+(1-B)*ae,p[1]=l*_*se+y*re,p[2]=l*y*se-_*re,p[3]=0,p[4]=l*_*se-y*re,p[5]=U+(1-U)*ae,p[6]=_*y*se+l*re,p[7]=0,p[8]=l*y*se+_*re,p[9]=_*y*se-l*re,p[10]=j+(1-j)*ae,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=v;function h(r,m,d,p){const l=p??new o(16);let _=m[0],y=m[1],w=m[2];const B=Math.sqrt(_*_+y*y+w*w);_/=B,y/=B,w/=B;const U=_*_,j=y*y,ae=w*w,re=Math.cos(d),se=Math.sin(d),ge=1-re,Me=U+(1-U)*re,we=_*y*ge+w*se,Pe=_*w*ge-y*se,Re=_*y*ge-w*se,Ie=j+(1-j)*re,qe=y*w*ge+_*se,$e=_*w*ge+y*se,je=y*w*ge-_*se,Xe=ae+(1-ae)*re,st=r[0],rt=r[1],tt=r[2],at=r[3],nt=r[4],Ye=r[5],He=r[6],We=r[7],Ze=r[8],Qe=r[9],pt=r[10],it=r[11];return l[0]=Me*st+we*nt+Pe*Ze,l[1]=Me*rt+we*Ye+Pe*Qe,l[2]=Me*tt+we*He+Pe*pt,l[3]=Me*at+we*We+Pe*it,l[4]=Re*st+Ie*nt+qe*Ze,l[5]=Re*rt+Ie*Ye+qe*Qe,l[6]=Re*tt+Ie*He+qe*pt,l[7]=Re*at+Ie*We+qe*it,l[8]=$e*st+je*nt+Xe*Ze,l[9]=$e*rt+je*Ye+Xe*Qe,l[10]=$e*tt+je*He+Xe*pt,l[11]=$e*at+je*We+Xe*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const u=h;function b(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function x(r,m,d){const p=d??new o(16),l=m[0],_=m[1],y=m[2];return p[0]=l*r[0*4+0],p[1]=l*r[0*4+1],p[2]=l*r[0*4+2],p[3]=l*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=y*r[2*4+0],p[9]=y*r[2*4+1],p[10]=y*r[2*4+2],p[11]=y*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function k(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function S(r,m,d){const p=d??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:L,aim:O,axisRotate:h,axisRotation:v,cameraAim:xe,clone:q,copy:K,create:f,determinant:ne,equals:X,equalsApproximately:G,fromMat3:g,fromQuat:P,frustum:ve,frustumReverseZ:Le,getAxis:me,getScaling:ue,getTranslation:fe,identity:oe,inverse:Q,invert:F,lookAt:Ce,mul:N,mulScalar:I,multiply:J,multiplyScalar:A,negate:M,ortho:de,perspective:Be,perspectiveReverseZ:ee,rotate:u,rotateX:ce,rotateY:Ee,rotateZ:V,rotation:i,rotationX:Fe,rotationY:ye,rotationZ:T,scale:x,scaling:b,set:E,setAxis:le,setTranslation:he,translate:Ge,translation:Ve,transpose:Y,uniformScale:S,uniformScaling:k}}const ei=new Map;function zl(o){let a=ei.get(o);return a||(a=Rl(o),ei.set(o,a)),a}function Gl(o){const a=hs(o);function f(T,V,v,i){const h=new o(4);return T!==void 0&&(h[0]=T,V!==void 0&&(h[1]=V,v!==void 0&&(h[2]=v,i!==void 0&&(h[3]=i)))),h}const E=f;function g(T,V,v,i,h){const u=h??new o(4);return u[0]=T,u[1]=V,u[2]=v,u[3]=i,u}function P(T,V,v){const i=v??new o(4),h=V*.5,u=Math.sin(h);return i[0]=u*T[0],i[1]=u*T[1],i[2]=u*T[2],i[3]=Math.cos(h),i}function M(T,V){const v=V??a.create(3),i=Math.acos(T[3])*2,h=Math.sin(i*.5);return h>ze?(v[0]=T[0]/h,v[1]=T[1]/h,v[2]=T[2]/h):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function L(T,V){const v=Be(T,V);return Math.acos(2*v*v-1)}function A(T,V,v){const i=v??new o(4),h=T[0],u=T[1],b=T[2],x=T[3],k=V[0],S=V[1],r=V[2],m=V[3];return i[0]=h*m+x*k+u*r-b*S,i[1]=u*m+x*S+b*k-h*r,i[2]=b*m+x*r+h*S-u*k,i[3]=x*m-h*k-u*S-b*r,i}const I=A;function K(T,V,v){const i=v??new o(4),h=V*.5,u=T[0],b=T[1],x=T[2],k=T[3],S=Math.sin(h),r=Math.cos(h);return i[0]=u*r+k*S,i[1]=b*r+x*S,i[2]=x*r-b*S,i[3]=k*r-u*S,i}function q(T,V,v){const i=v??new o(4),h=V*.5,u=T[0],b=T[1],x=T[2],k=T[3],S=Math.sin(h),r=Math.cos(h);return i[0]=u*r-x*S,i[1]=b*r+k*S,i[2]=x*r+u*S,i[3]=k*r-b*S,i}function G(T,V,v){const i=v??new o(4),h=V*.5,u=T[0],b=T[1],x=T[2],k=T[3],S=Math.sin(h),r=Math.cos(h);return i[0]=u*r+b*S,i[1]=b*r-u*S,i[2]=x*r+k*S,i[3]=k*r-x*S,i}function X(T,V,v,i){const h=i??new o(4),u=T[0],b=T[1],x=T[2],k=T[3];let S=V[0],r=V[1],m=V[2],d=V[3],p=u*S+b*r+x*m+k*d;p<0&&(p=-p,S=-S,r=-r,m=-m,d=-d);let l,_;if(1-p>ze){const y=Math.acos(p),w=Math.sin(y);l=Math.sin((1-v)*y)/w,_=Math.sin(v*y)/w}else l=1-v,_=v;return h[0]=l*u+_*S,h[1]=l*b+_*r,h[2]=l*x+_*m,h[3]=l*k+_*d,h}function oe(T,V){const v=V??new o(4),i=T[0],h=T[1],u=T[2],b=T[3],x=i*i+h*h+u*u+b*b,k=x?1/x:0;return v[0]=-i*k,v[1]=-h*k,v[2]=-u*k,v[3]=b*k,v}function Y(T,V){const v=V??new o(4);return v[0]=-T[0],v[1]=-T[1],v[2]=-T[2],v[3]=T[3],v}function Q(T,V){const v=V??new o(4),i=T[0]+T[5]+T[10];if(i>0){const h=Math.sqrt(i+1);v[3]=.5*h;const u=.5/h;v[0]=(T[6]-T[9])*u,v[1]=(T[8]-T[2])*u,v[2]=(T[1]-T[4])*u}else{let h=0;T[5]>T[0]&&(h=1),T[10]>T[h*4+h]&&(h=2);const u=(h+1)%3,b=(h+2)%3,x=Math.sqrt(T[h*4+h]-T[u*4+u]-T[b*4+b]+1);v[h]=.5*x;const k=.5/x;v[3]=(T[u*4+b]-T[b*4+u])*k,v[u]=(T[u*4+h]+T[h*4+u])*k,v[b]=(T[b*4+h]+T[h*4+b])*k}return v}function ne(T,V,v,i,h){const u=h??new o(4),b=T*.5,x=V*.5,k=v*.5,S=Math.sin(b),r=Math.cos(b),m=Math.sin(x),d=Math.cos(x),p=Math.sin(k),l=Math.cos(k);switch(i){case"xyz":u[0]=S*d*l+r*m*p,u[1]=r*m*l-S*d*p,u[2]=r*d*p+S*m*l,u[3]=r*d*l-S*m*p;break;case"xzy":u[0]=S*d*l-r*m*p,u[1]=r*m*l-S*d*p,u[2]=r*d*p+S*m*l,u[3]=r*d*l+S*m*p;break;case"yxz":u[0]=S*d*l+r*m*p,u[1]=r*m*l-S*d*p,u[2]=r*d*p-S*m*l,u[3]=r*d*l+S*m*p;break;case"yzx":u[0]=S*d*l+r*m*p,u[1]=r*m*l+S*d*p,u[2]=r*d*p-S*m*l,u[3]=r*d*l-S*m*p;break;case"zxy":u[0]=S*d*l-r*m*p,u[1]=r*m*l+S*d*p,u[2]=r*d*p+S*m*l,u[3]=r*d*l-S*m*p;break;case"zyx":u[0]=S*d*l-r*m*p,u[1]=r*m*l+S*d*p,u[2]=r*d*p-S*m*l,u[3]=r*d*l+S*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function F(T,V){const v=V??new o(4);return v[0]=T[0],v[1]=T[1],v[2]=T[2],v[3]=T[3],v}const J=F;function N(T,V,v){const i=v??new o(4);return i[0]=T[0]+V[0],i[1]=T[1]+V[1],i[2]=T[2]+V[2],i[3]=T[3]+V[3],i}function he(T,V,v){const i=v??new o(4);return i[0]=T[0]-V[0],i[1]=T[1]-V[1],i[2]=T[2]-V[2],i[3]=T[3]-V[3],i}const fe=he;function me(T,V,v){const i=v??new o(4);return i[0]=T[0]*V,i[1]=T[1]*V,i[2]=T[2]*V,i[3]=T[3]*V,i}const le=me;function ue(T,V,v){const i=v??new o(4);return i[0]=T[0]/V,i[1]=T[1]/V,i[2]=T[2]/V,i[3]=T[3]/V,i}function Be(T,V){return T[0]*V[0]+T[1]*V[1]+T[2]*V[2]+T[3]*V[3]}function ee(T,V,v,i){const h=i??new o(4);return h[0]=T[0]+v*(V[0]-T[0]),h[1]=T[1]+v*(V[1]-T[1]),h[2]=T[2]+v*(V[2]-T[2]),h[3]=T[3]+v*(V[3]-T[3]),h}function de(T){const V=T[0],v=T[1],i=T[2],h=T[3];return Math.sqrt(V*V+v*v+i*i+h*h)}const ve=de;function Le(T){const V=T[0],v=T[1],i=T[2],h=T[3];return V*V+v*v+i*i+h*h}const Ae=Le;function Z(T,V){const v=V??new o(4),i=T[0],h=T[1],u=T[2],b=T[3],x=Math.sqrt(i*i+h*h+u*u+b*b);return x>1e-5?(v[0]=i/x,v[1]=h/x,v[2]=u/x,v[3]=b/x):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function W(T,V){return Math.abs(T[0]-V[0])<ze&&Math.abs(T[1]-V[1])<ze&&Math.abs(T[2]-V[2])<ze&&Math.abs(T[3]-V[3])<ze}function O(T,V){return T[0]===V[0]&&T[1]===V[1]&&T[2]===V[2]&&T[3]===V[3]}function xe(T){const V=T??new o(4);return V[0]=0,V[1]=0,V[2]=0,V[3]=1,V}const Ce=a.create(),Ve=a.create(),Ge=a.create();function Fe(T,V,v){const i=v??new o(4),h=a.dot(T,V);return h<-.999999?(a.cross(Ve,T,Ce),a.len(Ce)<1e-6&&a.cross(Ge,T,Ce),a.normalize(Ce,Ce),P(Ce,Math.PI,i),i):h>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(T,V,Ce),i[0]=Ce[0],i[1]=Ce[1],i[2]=Ce[2],i[3]=1+h,Z(i,i))}const ce=new o(4),ye=new o(4);function Ee(T,V,v,i,h,u){const b=u??new o(4);return X(T,i,h,ce),X(V,v,h,ye),X(ce,ye,2*h*(1-h),b),b}return{create:f,fromValues:E,set:g,fromAxisAngle:P,toAxisAngle:M,angle:L,multiply:A,mul:I,rotateX:K,rotateY:q,rotateZ:G,slerp:X,inverse:oe,conjugate:Y,fromMat:Q,fromEuler:ne,copy:F,clone:J,add:N,subtract:he,sub:fe,mulScalar:me,scale:le,divScalar:ue,dot:Be,lerp:ee,length:de,len:ve,lengthSq:Le,lenSq:Ae,normalize:Z,equalsApproximately:W,equals:O,identity:xe,rotationTo:Fe,sqlerp:Ee}}const ti=new Map;function Ul(o){let a=ti.get(o);return a||(a=Gl(o),ti.set(o,a)),a}function Vl(o){function a(v,i,h,u){const b=new o(4);return v!==void 0&&(b[0]=v,i!==void 0&&(b[1]=i,h!==void 0&&(b[2]=h,u!==void 0&&(b[3]=u)))),b}const f=a;function E(v,i,h,u,b){const x=b??new o(4);return x[0]=v,x[1]=i,x[2]=h,x[3]=u,x}function g(v,i){const h=i??new o(4);return h[0]=Math.ceil(v[0]),h[1]=Math.ceil(v[1]),h[2]=Math.ceil(v[2]),h[3]=Math.ceil(v[3]),h}function P(v,i){const h=i??new o(4);return h[0]=Math.floor(v[0]),h[1]=Math.floor(v[1]),h[2]=Math.floor(v[2]),h[3]=Math.floor(v[3]),h}function M(v,i){const h=i??new o(4);return h[0]=Math.round(v[0]),h[1]=Math.round(v[1]),h[2]=Math.round(v[2]),h[3]=Math.round(v[3]),h}function L(v,i=0,h=1,u){const b=u??new o(4);return b[0]=Math.min(h,Math.max(i,v[0])),b[1]=Math.min(h,Math.max(i,v[1])),b[2]=Math.min(h,Math.max(i,v[2])),b[3]=Math.min(h,Math.max(i,v[3])),b}function A(v,i,h){const u=h??new o(4);return u[0]=v[0]+i[0],u[1]=v[1]+i[1],u[2]=v[2]+i[2],u[3]=v[3]+i[3],u}function I(v,i,h,u){const b=u??new o(4);return b[0]=v[0]+i[0]*h,b[1]=v[1]+i[1]*h,b[2]=v[2]+i[2]*h,b[3]=v[3]+i[3]*h,b}function K(v,i,h){const u=h??new o(4);return u[0]=v[0]-i[0],u[1]=v[1]-i[1],u[2]=v[2]-i[2],u[3]=v[3]-i[3],u}const q=K;function G(v,i){return Math.abs(v[0]-i[0])<ze&&Math.abs(v[1]-i[1])<ze&&Math.abs(v[2]-i[2])<ze&&Math.abs(v[3]-i[3])<ze}function X(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function oe(v,i,h,u){const b=u??new o(4);return b[0]=v[0]+h*(i[0]-v[0]),b[1]=v[1]+h*(i[1]-v[1]),b[2]=v[2]+h*(i[2]-v[2]),b[3]=v[3]+h*(i[3]-v[3]),b}function Y(v,i,h,u){const b=u??new o(4);return b[0]=v[0]+h[0]*(i[0]-v[0]),b[1]=v[1]+h[1]*(i[1]-v[1]),b[2]=v[2]+h[2]*(i[2]-v[2]),b[3]=v[3]+h[3]*(i[3]-v[3]),b}function Q(v,i,h){const u=h??new o(4);return u[0]=Math.max(v[0],i[0]),u[1]=Math.max(v[1],i[1]),u[2]=Math.max(v[2],i[2]),u[3]=Math.max(v[3],i[3]),u}function ne(v,i,h){const u=h??new o(4);return u[0]=Math.min(v[0],i[0]),u[1]=Math.min(v[1],i[1]),u[2]=Math.min(v[2],i[2]),u[3]=Math.min(v[3],i[3]),u}function F(v,i,h){const u=h??new o(4);return u[0]=v[0]*i,u[1]=v[1]*i,u[2]=v[2]*i,u[3]=v[3]*i,u}const J=F;function N(v,i,h){const u=h??new o(4);return u[0]=v[0]/i,u[1]=v[1]/i,u[2]=v[2]/i,u[3]=v[3]/i,u}function he(v,i){const h=i??new o(4);return h[0]=1/v[0],h[1]=1/v[1],h[2]=1/v[2],h[3]=1/v[3],h}const fe=he;function me(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function le(v){const i=v[0],h=v[1],u=v[2],b=v[3];return Math.sqrt(i*i+h*h+u*u+b*b)}const ue=le;function Be(v){const i=v[0],h=v[1],u=v[2],b=v[3];return i*i+h*h+u*u+b*b}const ee=Be;function de(v,i){const h=v[0]-i[0],u=v[1]-i[1],b=v[2]-i[2],x=v[3]-i[3];return Math.sqrt(h*h+u*u+b*b+x*x)}const ve=de;function Le(v,i){const h=v[0]-i[0],u=v[1]-i[1],b=v[2]-i[2],x=v[3]-i[3];return h*h+u*u+b*b+x*x}const Ae=Le;function Z(v,i){const h=i??new o(4),u=v[0],b=v[1],x=v[2],k=v[3],S=Math.sqrt(u*u+b*b+x*x+k*k);return S>1e-5?(h[0]=u/S,h[1]=b/S,h[2]=x/S,h[3]=k/S):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function W(v,i){const h=i??new o(4);return h[0]=-v[0],h[1]=-v[1],h[2]=-v[2],h[3]=-v[3],h}function O(v,i){const h=i??new o(4);return h[0]=v[0],h[1]=v[1],h[2]=v[2],h[3]=v[3],h}const xe=O;function Ce(v,i,h){const u=h??new o(4);return u[0]=v[0]*i[0],u[1]=v[1]*i[1],u[2]=v[2]*i[2],u[3]=v[3]*i[3],u}const Ve=Ce;function Ge(v,i,h){const u=h??new o(4);return u[0]=v[0]/i[0],u[1]=v[1]/i[1],u[2]=v[2]/i[2],u[3]=v[3]/i[3],u}const Fe=Ge;function ce(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function ye(v,i,h){const u=h??new o(4),b=v[0],x=v[1],k=v[2],S=v[3];return u[0]=i[0]*b+i[4]*x+i[8]*k+i[12]*S,u[1]=i[1]*b+i[5]*x+i[9]*k+i[13]*S,u[2]=i[2]*b+i[6]*x+i[10]*k+i[14]*S,u[3]=i[3]*b+i[7]*x+i[11]*k+i[15]*S,u}function Ee(v,i,h){const u=h??new o(4);return Z(v,u),F(u,i,u)}function T(v,i,h){const u=h??new o(4);return le(v)>i?Ee(v,i,u):O(v,u)}function V(v,i,h){const u=h??new o(4);return oe(v,i,.5,u)}return{create:a,fromValues:f,set:E,ceil:g,floor:P,round:M,clamp:L,add:A,addScaled:I,subtract:K,sub:q,equalsApproximately:G,equals:X,lerp:oe,lerpV:Y,max:Q,min:ne,mulScalar:F,scale:J,divScalar:N,inverse:he,invert:fe,dot:me,length:le,len:ue,lengthSq:Be,lenSq:ee,distance:de,dist:ve,distanceSq:Le,distSq:Ae,normalize:Z,negate:W,copy:O,clone:xe,multiply:Ce,mul:Ve,divide:Ge,div:Fe,zero:ce,transformMat4:ye,setLength:Ee,truncate:T,midpoint:V}}const ni=new Map;function Ol(o){let a=ni.get(o);return a||(a=Vl(o),ni.set(o,a)),a}function Ks(o,a,f,E,g,P){return{mat3:Il(o),mat4:zl(a),quat:Ul(f),vec2:yi(E),vec3:hs(g),vec4:Ol(P)}}const{mat3:Tt,mat4:ht,quat:dt,vec2:si,vec3:R,vec4:$c}=Ks(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ks(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ks(Bl,Array,Array,Array,Array,Array);const ri=document.querySelector("#log");let xt=null,fn=null;function Pi(){if(xt)return xt;xt=document.createElement("div"),xt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",xt.appendChild(o),fn=document.createElement("div"),fn.className="ply-spinner-label",xt.appendChild(fn),xt.style.display="none",document.body.appendChild(xt),xt}function Hs(o){Pi(),fn&&o&&(fn.textContent=o),xt&&(xt.style.opacity="1",xt.style.display="flex")}function jt(o){Pi(),fn&&(fn.textContent=o)}function Wn(){if(!xt)return;const o=xt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Si(o,a){if(!ri)return;const f=document.createElement("p");f.innerText=o,a&&Object.assign(f.style,a),ri.appendChild(f)}async function yt(o){console.log(o),Si(o)}async function Fl(o){console.error(o),Si(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Ci;function Ei(){Ci=performance.now()}function ii(o){const a=performance.now()-Ci;yt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Nl(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function Kn(o){return o+3&-4}const $l=2,ql=3,Wl=5,jl=6,jn=7,us=8,Hn=9,Yn=10;function oi(o){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const E=new DataView(o),g=4,P=E.getUint32(g+0,!0),M=E.getUint32(g+4,!0),L=E.getUint32(g+8,!0),A=E.getUint32(g+12,!0),I=E.getUint32(g+16,!0),K=E.getFloat32(g+20,!0),q=E.getUint32(g+24,!0),G=E.getUint32(g+28,!0),X=E.getFloat32(g+32,!0),oe=E.getFloat32(g+36,!0),Y=E.getFloat32(g+40,!0),Q=E.getUint32(g+44,!0),ne=E.getFloat32(g+48,!0),F=E.getFloat32(g+52,!0),J=E.getUint32(g+56,!0),N=E.getUint32(g+60,!0),he=G===Hn||G===Yn,fe=he?N:0,me=he?0:N&255,le=he?0:N>>8&255,ue=me>0?me:1;if(G===Wl||G===jl)throw new Error(`NAT2: paired-RVQ format=${G} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Be=G===Hn||G===Yn;if(G!==$l&&G!==ql&&G!==jn&&G!==us&&!Be)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${G}`);if(P%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${P} layer_h=${Q}`);let ee=g+64;const de=(J+1)*4,ve=new Uint32Array(o.slice(ee,ee+de));ee+=de;let Le;if(ue>1){const ce=(ue+1)*4;if(ee+ce>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${ce} from ${ee})`);Le=new Uint32Array(o.slice(ee,ee+ce)),ee+=ce}else Le=new Uint32Array([0,P]);let Ae=0;for(let ce=0;ce<ue;ce++){const ye=Le[ce+1]-Le[ce];ye>Ae&&(Ae=ye)}if(Be){const ce=fe&1?7:6,ye=I*ce*4;if(ee+ye>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ye} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const Ee=new Float32Array(o.slice(ee,ee+ye));ee+=ye;const T=Math.max(1,fe>>8&255),V=[];let v=0;for(let x=0,k=P,S=Q;x<T;x++,k>>=1,S>>=1){const r=Math.max(1,k>>2)*Math.max(1,S>>2)*16;V.push(r),v+=r}const i=o.byteLength-ee;if(i<v)throw new Error(`NAT2 probe atlas truncated: need ${v} bytes for ${P}x${Q} x${T} mips, have ${i}`);const h=[];let u=ee;for(const x of V)h.push(new Uint8Array(o.slice(u,u+x))),u+=x;const b=h[0];return{width:P,height:M,channels:L,kernel_type:A,num_rects:I,uv_extent:K,sb_number:q,format:G,sh_bias:X,res_bias:oe,compact_mult:Y,layer_h:Q,atlas_scale:ne,atlas_offset:F,n_layers:J,n_cols:ue,layer_cuts:ve,column_cuts:Le,slice_width:Ae,rects_expanded:Ee,atlas_bytes:b,mip_bytes:h,probe_mode:fe&1?2:1}}const Z=I*4*4;if(ee+Z>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Z} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const W=new Float32Array(o.slice(ee,ee+Z));ee+=Z;const O=new Float32Array(I*5);for(let ce=0;ce<I;ce++){const ye=W[ce*4+0],Ee=W[ce*4+1],T=W[ce*4+2],V=W[ce*4+3];let v=0;for(let x=1;x<=J&&ve[x]<=Ee;x++)v=x;let i=0;for(let x=1;x<=ue&&Le[x]<=ye;x++)i=x;const h=Ee-ve[v],u=ye-Le[i],b=i*J+v;O[ce*5+0]=u,O[ce*5+1]=h,O[ce*5+2]=T,O[ce*5+3]=V,O[ce*5+4]=b}let xe,Ce;const Ve=ue,Fe=P/4*16;if(G===jn||G===us){if(ee+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const ce=G===jn?"BCCB":"ACCB",ye=a.decode(new Uint8Array(o,ee,4));if(ye!==ce)throw new Error(`NAT2 typeD bad sub-magic: expected '${ce}' got '${ye}'`);const Ee=E.getUint32(ee+4,!0),T=E.getUint32(ee+8,!0),V=E.getUint32(ee+12,!0),v=E.getUint32(ee+16,!0),i=E.getUint32(ee+20,!0);if(Ee!==1)throw new Error(`NAT2 BCCB unsupported version ${Ee}`);if(V!==M/4||v!==P/4||i!==V*v)throw new Error(`NAT2 BCCB block grid mismatch: header ${P}×${M}, sub-header ${v}×${V} (${i} blocks)`);ee+=24;const h=T*16;if(ee+h>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${h}, have ${o.byteLength-ee})`);const u=new Uint8Array(o,ee,h);ee+=h;const b=i*2;if(ee+b>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${b}, have ${o.byteLength-ee})`);const x=new Uint16Array(o.slice(ee,ee+b));ee+=b;const k=new Uint8Array(i*16);for(let S=0;S<i;S++){const r=x[S]*16;k.set(u.subarray(r,r+16),S*16)}if(xe=k,le>1){Ce=[k];for(let S=1;S<le;S++){if(ee+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${S} sub-header`);const r=a.decode(new Uint8Array(o,ee,4));if(r!==ce)throw new Error(`NAT2 mip ${S}: bad sub-magic '${r}'`);const m=E.getUint32(ee+8,!0),d=E.getUint32(ee+16,!0),p=E.getUint32(ee+20,!0);if(d!==S)throw new Error(`NAT2 mip section order: expected level ${S}, got ${d}`);ee+=24;let l=0;for(let B=0;B<Ve;B++)for(let U=0;U<J;U++){const j=ki(S,Le[B+1]-Le[B],ve[U+1]-ve[U],Ae,Q);l+=(j.cw>>2)*(j.ch>>2)}if(l!==p)throw new Error(`NAT2 mip ${S}: ${p} blocks, loader expects ${l}`);if(ee+m*16+p*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${S}`);const _=new Uint8Array(o,ee,m*16);ee+=m*16;const y=new Uint16Array(o.slice(ee,ee+p*2));ee+=p*2;const w=new Uint8Array(p*16);for(let B=0;B<p;B++){const U=y[B]*16;w.set(_.subarray(U,U+16),B*16)}Ce.push(w)}}}else{let ce=0;for(let ye=0;ye<J;ye++){const Ee=ve[ye+1]-ve[ye];if(Ee%4!==0)throw new Error(`NAT2 BC7 layer ${ye} rows ${Ee} not 4-aligned`);ce+=Ee/4*Fe}if(ee+ce>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${ce} more bytes from offset ${ee}, have ${o.byteLength-ee}`);xe=new Uint8Array(o.slice(ee,ee+ce))}return{width:P,height:M,channels:L,kernel_type:A,num_rects:I,uv_extent:K,sb_number:q,format:G,sh_bias:X,res_bias:oe,compact_mult:Y,layer_h:Q,atlas_scale:ne,atlas_offset:F,n_layers:J,n_cols:ue,layer_cuts:ve,column_cuts:Le,slice_width:Ae,rects_expanded:O,atlas_bytes:xe,...Ce?{mip_bytes:Ce}:{}}}function ki(o,a,f,E,g){const P=L=>L+3>>2<<2,M=1<<o;return{cw:Math.min(P(Math.max(1,E>>o)),P(Math.ceil(a/M))),ch:Math.min(P(Math.max(1,g>>o)),P(Math.ceil(f/M)))}}const Kl=32;function ai(o,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let E,g,P,M;if(a.format===2||a.format===jn||a.format===Hn){if(!o.features.has("texture-compression-bc"))return yt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===Hn?"BC7 atlas (proberes: shared probe texture)":a.format===jn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:g,sampler:P}=li(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===us||a.format===Yn){if(!o.features.has("texture-compression-astc"))return yt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===Yn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===us?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:E,view:g,sampler:P}=li(o,a,"astc-4x4-unorm",M)}else return yt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:L}=a,A=o.createBuffer({label:"atlas rects (5-stride)",size:Kn(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(A,0,L);const I=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return cs(o,I,a,f),{texture:E,view:g,sampler:P,rectsBuffer:A,texParamsBuffer:I,meta:a}}function li(o,a,f,E){const{width:g,layer_h:P,n_layers:M,n_cols:L,layer_cuts:A,column_cuts:I,slice_width:K,atlas_bytes:q}=a,X=g/4*16,oe=o.limits.maxTextureDimension2D;if(P>oe||K>oe)throw new Error(`⚠️  atlas slice dims ${K}x${P} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Y=L*M;if(Y>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${L} cols × ${M} layers = ${Y} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=a.mip_bytes??[q],ne=Q.length,F=o.createTexture({label:E,size:{width:K,height:P,depthOrArrayLayers:Y},mipLevelCount:ne,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let fe=0;fe<L;fe++){const me=I[fe]/4,le=(I[fe+1]-I[fe])/4;for(let ue=0;ue<M;ue++){const Be=A[ue]/4,ee=(A[ue+1]-A[ue])/4,de=fe*M+ue,ve=Be*X+me*16;o.queue.writeTexture({texture:F,mipLevel:0,origin:{x:0,y:0,z:de},aspect:"all"},q,{offset:ve,bytesPerRow:X,rowsPerImage:ee},{width:le*4,height:ee*4,depthOrArrayLayers:1})}}const J=a.format===Hn||a.format===Yn;for(let fe=1;fe<ne&&!J;fe++){let me=0;for(let le=0;le<L;le++)for(let ue=0;ue<M;ue++){const{cw:Be,ch:ee}=ki(fe,I[le+1]-I[le],A[ue+1]-A[ue],K,P);o.queue.writeTexture({texture:F,mipLevel:fe,origin:{x:0,y:0,z:le*M+ue},aspect:"all"},Q[fe],{offset:me,bytesPerRow:(Be>>2)*16,rowsPerImage:ee>>2},{width:Be,height:ee,depthOrArrayLayers:1}),me+=(Be>>2)*(ee>>2)*16}}for(let fe=1;fe<ne&&J;fe++){const me=Math.max(1,K>>fe),le=Math.max(1,P>>fe);o.queue.writeTexture({texture:F,mipLevel:fe,origin:{x:0,y:0,z:0},aspect:"all"},Q[fe],{offset:0,bytesPerRow:Math.max(1,me>>2)*16,rowsPerImage:Math.max(1,le>>2)},{width:me,height:le,depthOrArrayLayers:1})}ne>1&&console.log(`[atlas] ${ne} mip levels uploaded (${J?"trilinear":"per-surfel integer level"})`);const N=F.createView({label:`${E} view`,dimension:"2d-array"}),he=o.createSampler({label:`${E} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:ne>1&&J?"linear":"nearest"});return{texture:F,view:N,sampler:he}}function cs(o,a,f,E,g=1){var I;const P=new ArrayBuffer(32),M=new Uint32Array(P),L=new Float32Array(P);M[0]=E?1:0,L[1]=f.atlas_scale,L[2]=f.atlas_offset,L[3]=f.res_bias,M[4]=f.probe_mode?f.probe_mode|0:0,M[5]=f.width|0;const A=(((I=f.mip_bytes)==null?void 0:I.length)??1)>1;M[6]=A&&g!==0?1:0,L[7]=f.uv_extent,o.queue.writeBuffer(a,0,P)}async function Os(o,a){yt(`loading ply file from File... : ${o.name}`),Hs("downloading PLY...");const f=await o.arrayBuffer();try{return await Mi(f,a)}finally{Wn()}}async function Hl(o,a){yt(`loading ply file from URL... : ${o}`),Hs("downloading PLY...");try{Ei();const f=new URL(o,self.location.href).href;return await Mi({url:f},a)}finally{Wn()}}async function Mi(o,a){return new Promise((f,E)=>{const g=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});g.onmessage=P=>{var L,A,I,K,q,G,X,oe,Y,Q,ne,F;const M=P.data;if((M==null?void 0:M.type)==="error"){Fl(`PLY worker error: ${M.message??"unknown error"}`),g.terminate(),E(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const J=M.totalBytes,N=M.loadedBytes/(1024*1024),he=J?J/(1024*1024):void 0,fe=(M.speedBps??0)/(1024*1024),me=J?Math.min(99,Math.floor(M.loadedBytes/J*100)):void 0,le=he?`total ${he.toFixed(1)} MB`:"total -- MB",ue=he&&me!==void 0?`${N.toFixed(1)} MB downloaded (${me}%)`:`${N.toFixed(1)} MB downloaded`,Be=`${fe.toFixed(2)} MB/s`;jt(`downloading PLY ...
${le}, ${ue}
${Be}`);return}else if((M==null?void 0:M.type)==="fetched"){yt(`💾 Fetched (${M.byteLength} bytes)`),ii("Download"),jt("parsing PLY..."),Ei();return}else if((M==null?void 0:M.type)==="parse_progress"){const J=M.total??0,N=M.read??0,he=J>0?Math.floor(N/J*100):0;jt(`parsing PLY ...
${N}/${J} surfels (${he}%)`);return}else if((M==null?void 0:M.type)==="done"){const J=M.num_points,N=M.K,he=M.feature_mode??0,fe=M.sh_bias,me=M.kernel_type,le=M.surfelBuffer,ue=M.svParamsBuffer;yt(`🪐 Total surfels: ${J}, mode=${he===1?"SB":"SV"}, K=${N}, sh_bias=${fe}, kernel_type=${me}`);const ee=a.createBuffer({label:"surfel input buffer",size:Kn(J*Kl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(ee,0,le);const de=ue.byteLength>0?ue.byteLength:16,ve=a.createBuffer({label:he===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Kn(de),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ue.byteLength>0&&a.queue.writeBuffer(ve,0,ue),g.terminate(),ii("Parse"),f({num_points:J,K:N,feature_mode:he,sh_bias:fe,kernel_type:me,surfel_buffer:ee,surfel_data:new Float32Array(le),sv_params_buffer:ve,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(L=M.bbox)==null?void 0:L.min)==null?void 0:A[0])??-1)+(((K=(I=M.bbox)==null?void 0:I.max)==null?void 0:K[0])??1))/2,((((G=(q=M.bbox)==null?void 0:q.min)==null?void 0:G[1])??-1)+(((oe=(X=M.bbox)==null?void 0:X.max)==null?void 0:oe[1])??1))/2,((((Q=(Y=M.bbox)==null?void 0:Y.min)==null?void 0:Q[2])??-1)+(((F=(ne=M.bbox)==null?void 0:ne.max)==null?void 0:F[2])??1))/2]})}},g.onerror=P=>{g.terminate(),E(P)},o instanceof ArrayBuffer?(jt("parsing PLY..."),g.postMessage({type:"start",plyBuffer:o},[o])):g.postMessage({type:"start_url",url:o.url})})}var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(f,E){E(a)})(Yl,function(f){class E{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class g{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class P{constructor(e){this.target=e}}class M extends P{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class L extends P{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends P{constructor(e,t){super(e),this.expanded=t}}class I extends P{constructor(e,t){super(e),this.index=t}}function K(n){return n}function q(n){return n==null}function G(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function X(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Y{static alreadyDisposed(){return new Y({type:"alreadydisposed"})}static notBindable(){return new Y({type:"notbindable"})}static propertyNotFound(e){return new Y({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Y({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw Y.notBindable();if(!(e in s))throw Y.propertyNotFound(e);s[e]=t}}class ne extends g{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new P(this))}),this}}class F{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const J="tp";function N(n){return(t,s)=>[J,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function he(n,e){return t=>e(n(t))}function fe(n){return n.rawValue}function me(n,e){n.emitter.on("change",he(fe,e)),e(n.rawValue)}function le(n,e,t){me(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Be(n,e){return t=>{ue(n,e,t)}}function ee(n,e){me(n,t=>{e.textContent=t??""})}const de=N("btn");class ve{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(de()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(de("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(de("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Le{constructor(e,t){this.emitter=new F,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ve(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ae{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,C)=>c===C,this.emitter=new F,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,C=this.rawValue_;this.equals_(C,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:C,rawValue:c,sender:this}))}}class Z{constructor(e){this.emitter=new F,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function W(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Z(n):new Ae(n,e)}class O{constructor(e){this.emitter=new F,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:W(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new O(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function xe(n,e){const s=Object.keys(e).reduce((c,C)=>{if(c===void 0)return;const D=e[C],te=D(n[C]);return te.succeeded?Object.assign(Object.assign({},c),{[C]:te.value}):void 0},{});return s}function Ce(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Ve(n){return n===null?!1:typeof n=="object"}function Ge(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Fe(n){return{custom:e=>Ge(e)(n),boolean:Ge(e=>typeof e=="boolean"?e:void 0)(n),number:Ge(e=>typeof e=="number"?e:void 0)(n),string:Ge(e=>typeof e=="string"?e:void 0)(n),function:Ge(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ge(t=>t===e?e:void 0)(n),raw:Ge(e=>e)(n),object:e=>Ge(t=>{if(Ve(t))return xe(t,e)})(n),array:e=>Ge(t=>{if(Array.isArray(t))return Ce(t,e)})(n)}}const ce={optional:Fe(!0),required:Fe(!1)};function ye(n,e){const t=ce.required.object(e)(n);return t.succeeded?t.value:void 0}function Ee(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function T(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class V{constructor(e){this.value_=e}static create(e){return[new V(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=N("");function i(n,e){return Be(n,v(void 0,e))}class h extends O{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=V.create(W(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const C=e??{};return new h(O.createCore({disabled:(t=C.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=C.hidden)!==null&&s!==void 0?s:!1,parent:(c=C.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){me(this.globalDisabled_,i(e,"disabled")),le(this,"hidden",i(e,"hidden"))}bindDisabled(e){me(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){me(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const b=N(""),x={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(b(void 0,x[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,x[s]))})}),this.viewProps.handleDispose(()=>{T(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ee({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function l(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function w(n,e){const t=n.createElementNS(S,"svg");return t.innerHTML=y[e],t}function B(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function j(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ae(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function re(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=N("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,C)=>{C>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(se("l")),le(t.props,"label",C=>{q(C)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),ae(s),s.appendChild(ge(e,C)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(se("v")),this.element.appendChild(c),this.valueElement=c}}class we extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Pe={id:"button",type:"blade",accept(n){const e=ce,t=ye(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new we(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:new Le(n.document,{props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof we)||!(n.controller.valueController instanceof Le)?null:new ne(n.controller)}};class Re extends k{constructor(e){super(e),this.value=e.value}}function Ie(){return new O({positions:W([],{equals:G})})}class qe extends O{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=O.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!q(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};le(this,"expanded",s),le(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function $e(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function je(n,e){e.style.height=n.styleHeight}function Xe(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),q(n.get("expandedHeight"))){const t=$e(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class st extends g{constructor(e,t){super(e),this.rackApi_=t}}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function at(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ye{constructor(e){this.emitter=new F,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Y.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(C=>{this.cache_.add(C)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class He extends g{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new F,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class We extends we{constructor(e,t){super(e,t),this.binding=t.binding}}class Ze extends g{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new F,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new L(this,t,this.controller_.binding.target.presetKey)})}}class Qe extends we{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function pt(n){return n instanceof bt?n.apiSet_:n instanceof st?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Y.shouldNeverHappen();return t}function Rt(n,e,t){if(!Q.isBindable(n))throw Y.notBindable();return new Q(n,e,t)}class bt extends g{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new F,this.apiSet_=new Ye(pt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(C,Rt(e,t,c.presetKey),c),te=new He(D);return this.add(te,c.index)}addMonitor(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(C,Rt(e,t),c),te=new Ze(D);return this.add(te,c.index)}addFolder(e){return tt(this,e)}addButton(e){return rt(this,e)}addSeparator(e){return at(this,e)}addTab(e){return nt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof We){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Re){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Qe))throw Y.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new L(t,s.target.read(),s.target.presetKey)})}}class Ct extends st{constructor(e,t){super(e,new bt(e.rackController,t)),this.emitter_=new F,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Bt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Kt{constructor(e,t){const s=N(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Pt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof We&&s.binding===e)return s}return null}function Ut(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Qe&&s.binding===e)return s}return null}function _n(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Re&&s.value===e)return s}return null}function Ht(n){return n instanceof Je?n.rack:n instanceof Bt?n.rackController.rack:null}function mn(n){const e=Ht(n);return e?e.bcSet_:null}class ot{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new F,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ye(mn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),X(e,"parent")?e.parent=this:(e.parent_=this,Ee({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){X(e,"parent")?e.parent=null:(e.parent_=null,Ee({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof We)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Qe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Re)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Ht(s);if(c){const C=c.emitter;C.on("layout",this.onDescendantLayout_),C.on("inputchange",this.onDescendantInputChange_),C.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof We)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Qe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Re)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Ht(s);if(c){const C=c.emitter;C.off("layout",this.onDescendantLayout_),C.off("inputchange",this.onDescendantInputChange_),C.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const C=[];c===t&&(C.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&C.push("veryfirst")),c===s&&(C.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&C.push("verylast")),c.blade.set("positions",C)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Pt(this.find(We),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ut(this.find(Qe),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=_n(this.find(Re),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Je extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Kt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new ot({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&B(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const Zn=N("cnt");class _s{constructor(e,t){var s;this.className_=N((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Zn()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),le(this.foldable_,"completed",Be(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),le(t.props,"title",De=>{q(De)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const C=e.createElement("div");C.classList.add(this.className_("i")),this.element.appendChild(C);const D=e.createElement("div");D.classList.add(this.className_("t")),ee(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const te=e.createElement("div");te.classList.add(this.className_("m")),this.buttonElement.appendChild(te);const Te=t.containerElement;Te.classList.add(this.className_("c")),this.element.appendChild(Te),this.containerElement=Te}}class kn extends Bt{constructor(e,t){var s;const c=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),C=new Je(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:C,view:new _s(e,{containerElement:C.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Xn={id:"folder",type:"blade",accept(n){const e=ce,t=ye(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new kn(n.document,{blade:n.blade,expanded:n.params.expanded,props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof kn?new Ct(n.controller,n.pool):null}};class zt extends Re{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Mn extends g{}const Tn=N("spr");class Qn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Tn("r")),this.element.appendChild(s)}}class Bn extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Qn(e,{viewProps:t.viewProps})}))}}const An={id:"separator",type:"blade",accept(n){const t=ye(n,{view:ce.required.constant("separator")});return t?{params:t}:null},controller(n){return new Bn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Bn?new Mn(n.controller):null}},Yt=N("tbi");class vn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yt()),t.viewProps.bindClassModifiers(this.element),le(t.props,"selected",C=>{C?this.element.classList.add(Yt(void 0,"sel")):this.element.classList.remove(Yt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Yt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Yt("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class bn{constructor(e,t){this.emitter=new F,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new vn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class z{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new bn(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Je(e,{blade:Ie(),viewProps:h.create()}),this.props=t.props,le(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class H{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class ie extends st{constructor(e,t){super(e,new bt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new F,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Y.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new z(t,{itemProps:O.fromObject({selected:!1,title:e.title}),props:O.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Y.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Y.shouldNeverHappen();const s=new H(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Y.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new I(this,e.rawValue)})}}const pe=-1;class ke{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=W(!0),this.selectedIndex=W(pe),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=pe,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const _e=N("tab");class be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_e(),Zn()),t.viewProps.bindClassModifiers(this.element),me(t.empty,Be(this.element,_e(void 0,"nop")));const s=e.createElement("div");s.classList.add(_e("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(_e("i")),this.element.appendChild(c);const C=t.contentsElement;C.classList.add(_e("c")),this.element.appendChild(C),this.contentsElement=C}}class Se extends Bt{constructor(e,t){const s=new Je(e,{blade:t.blade,viewProps:t.viewProps}),c=new ke;super({blade:t.blade,rackController:s,view:new be(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ye(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;B(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Ke={id:"tab",type:"blade",accept(n){const e=ce,t=ye(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Se(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new z(n.document,{itemProps:O.fromObject({selected:!1,title:t.title}),props:O.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Se?new ie(n.controller,n.pool):null}};function ft(n,e){const t=n.accept(e.params);if(!t)return null;const s=ce.optional.boolean(e.params.disabled).value,c=ce.optional.boolean(e.params.hidden).value;return n.controller({blade:Ie(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class gt{constructor(){this.disabled=!1,this.emitter=new F}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class St{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new F,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Et{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new F,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function At(n,e){for(;n.length<e;)n.push(void 0)}function lt(n){const e=[];return At(e,n),W(e)}function rn(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function vt(n,e){const t=[...rn(n),e];return t.length>n.length?t.splice(0,t.length-n.length):At(t,n.length),t}class Dn{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new F,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=vt(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class Dt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Lt(n,e){if(n instanceof e)return n;if(n instanceof Dt){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Vt{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class ct{constructor(e){this.values=O.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Zt{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return q(s)||(c=Math.max(c,s)),q(t)||(c=Math.min(c,t)),c}}class Ot{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const It=N("lst");class gn{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(It()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(It("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(It("m")),c.appendChild(w(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,le(this.props_,"options",C=>{j(this.selectElement),C.forEach(D=>{const te=e.createElement("option");te.textContent=D.text,this.selectElement.appendChild(te)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Gt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new gn(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Jn=N("pop");class Ln{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element),me(t.shows,Be(this.element,Jn(void 0,"v")))}}class Zs{constructor(e,t){this.shows=W(!1),this.viewProps=t.viewProps,this.view=new Ln(e,{shows:this.shows,viewProps:this.viewProps})}}const Xs=N("txt");class Ui{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Xs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Xs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class es{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ui(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=c),this.view.refresh()}}function Vi(n){return String(n)}function Qs(n){return n==="false"?!1:!!n}function Js(n){return Vi(n)}class Oi{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Fi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ni{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Fi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const $i={"+":n=>n,"-":n=>-n,"~":n=>~n};class qi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=$i[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ms(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function In(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Rn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=Rn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=Rn(n,e);return c===""?"":s+c}function vs(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=ji(n,e);return s===""?"":t+s}function er(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Wi(n,e);return e+=s.length,s===""?"":s+Rn(n,e)}function Ki(n,e){const t=er(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=Rn(n,e);return e+=c.length,t+s+c+vs(n,e)}function Hi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=Rn(n,e);return e+=s.length,s===""?"":t+s+vs(n,e)}function Yi(n,e){const t=er(n,e);return e+=t.length,t===""?"":t+vs(n,e)}const Zi=ms([Ki,Hi,Yi]);function Xi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Xi(n,e);return s===""?"":t+s}function Ji(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function eo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Ji(n,e);return s===""?"":t+s}function to(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function no(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=to(n,e);return s===""?"":t+s}const so=ms([Qi,eo,no]),ro=ms([so,Zi]);function io(n,e){const t=ro(n,e);return e+=t.length,t===""?null:{evaluable:new Oi(t),cursor:e}}function oo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=nr(n,e);if(!s)return null;e=s.cursor,e+=In(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function ao(n,e){var t;return(t=io(n,e))!==null&&t!==void 0?t:oo(n,e)}function tr(n,e){const t=ao(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=tr(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new qi(s,c.evaluable)}):null}function lo(n,e,t){t+=In(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=In(e,t).length,{cursor:t,operator:s}):null}function co(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let C=c.evaluable;for(;;){const D=lo(e,t,s);if(!D)break;s=D.cursor;const te=n(t,s);if(!te)return null;s=te.cursor,C=new Ni(D.operator,C,te.evaluable)}return C?{cursor:s,evaluable:C}:null}}const uo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>co(n,e),tr);function nr(n,e){return e+=In(n,e).length,uo(n,e)}function po(n){const e=nr(n,0);return!e||e.cursor+In(n,e.cursor).length!==n.length?null:e.evaluable}function Ft(n){var e;const t=po(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function sr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Ft(n);if(!q(e))return e}return 0}function ho(n){return String(n)}function _t(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const fo=_t(0);function ts(n){return fo(n)+"%"}function rr(n){return String(n)}function bs(n){return n}function zn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function C(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{C(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{C(()=>{n.setRawValue(s(n,e),D.options)}),C(()=>{e.setRawValue(t(n,e),D.options)})}),C(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function wt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Gn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Nt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function _o(n){return n==="ArrowUp"||n==="ArrowDown"}function ir(n){return _o(n)||n==="ArrowLeft"||n==="ArrowRight"}function gs(n,e){var t,s;const c=e.ownerDocument.defaultView,C=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+C.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+C.top)}}class on{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new F,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function et(n,e,t,s,c){const C=(n-e)/(t-e);return s+C*(c-s)}function or(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function ar(n,e){return(n%e+e)%e}const kt=N("txt");class mo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(kt(),kt(void 0,"num")),t.arrayPosition&&this.element.classList.add(kt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(kt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(kt()),this.inputElement.classList.add(kt("i"));const c=e.createElement("div");c.classList.add(kt("k")),this.element.appendChild(c),this.knobElement=c;const C=e.createElementNS(S,"svg");C.classList.add(kt("g")),this.knobElement.appendChild(C);const D=e.createElementNS(S,"path");D.classList.add(kt("gb")),C.appendChild(D),this.guideBodyElem_=D;const te=e.createElementNS(S,"path");te.classList.add(kt("gh")),C.appendChild(te),this.guideHeadElem_=te;const Te=e.createElement("div");Te.classList.add(N("tt")()),this.knobElement.appendChild(Te),this.tooltipElem_=Te,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(kt(void 0,"drg"));return}this.element.classList.add(kt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const C=this.props_.get("formatter");this.tooltipElem_.textContent=C(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Un{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=W(null),this.view=new mo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new on(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),C=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),C!==void 0&&(D=Math.min(D,C)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=wt(this.baseStep_,Gn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){wt(this.baseStep_,Gn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ws=N("sld");class vo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ws()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ws("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(ws("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(et(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class bo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new vo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(et(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=wt(this.baseStep_,Nt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){wt(this.baseStep_,Nt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const xs=N("sldtxt");class go{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xs());const s=e.createElement("div");s.classList.add(xs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(xs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class ys{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new bo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Un(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new go(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Vn(n,e){n.write(e)}function ns(n){const e=ce;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function lr(n){if(n==="inline"||n==="popup")return n}function Xt(n){const e=ce;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function cr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Ps(n){return q(n)?null:new ct(cr(n))}function wo(n){const e=n?Lt(n,Ot):null;return e?e.step:null}function ss(n,e){const t=n&&Lt(n,Ot);return t?or(t.step):Math.max(or(e),2)}function wn(n){const e=wo(n);return e??1}function xn(n,e){var t;const s=n&&Lt(n,Ot),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const rs=N("ckb");class xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(rs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(rs("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(rs("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const C=e.createElement("div");C.classList.add(rs("w")),s.appendChild(C);const D=w(e,"check");C.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class yo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new xo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Po(n){const e=[],t=Ps(n.options);return t&&e.push(t),new Dt(e)}const So={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ye(e,{options:ce.optional.custom(ns)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Qs,constraint:n=>Po(n.params),writer:n=>Vn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Lt(s,ct);return c?new Gt(e,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new yo(e,{value:t,viewProps:n.viewProps})}},an=N("col");class Co{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(an()),t.foldable.bindExpandedClass(this.element,an(void 0,"expanded")),le(t.foldable,"completed",Be(this.element,an(void 0,"cpl")));const s=e.createElement("div");s.classList.add(an("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(an("s")),s.appendChild(c),this.swatchElement=c;const C=e.createElement("div");if(C.classList.add(an("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(an("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function Eo(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),C=ut(t/255,0,1),D=Math.max(s,c,C),te=Math.min(s,c,C),Te=D-te;let De=0,Oe=0;const Ne=(te+D)/2;return Te!==0&&(Oe=Te/(1-Math.abs(D+te-1)),s===D?De=(c-C)/Te:c===D?De=2+(C-s)/Te:De=4+(s-c)/Te,De=De/6+(De<0?1:0)),[De*360,Oe*100,Ne*100]}function ko(n,e,t){const s=(n%360+360)%360,c=ut(e/100,0,1),C=ut(t/100,0,1),D=(1-Math.abs(2*C-1))*c,te=D*(1-Math.abs(s/60%2-1)),Te=C-D/2;let De,Oe,Ne;return s>=0&&s<60?[De,Oe,Ne]=[D,te,0]:s>=60&&s<120?[De,Oe,Ne]=[te,D,0]:s>=120&&s<180?[De,Oe,Ne]=[0,D,te]:s>=180&&s<240?[De,Oe,Ne]=[0,te,D]:s>=240&&s<300?[De,Oe,Ne]=[te,0,D]:[De,Oe,Ne]=[D,0,te],[(De+Te)*255,(Oe+Te)*255,(Ne+Te)*255]}function Mo(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),C=ut(t/255,0,1),D=Math.max(s,c,C),te=Math.min(s,c,C),Te=D-te;let De;Te===0?De=0:D===s?De=60*(((c-C)/Te%6+6)%6):D===c?De=60*((C-s)/Te+2):De=60*((s-c)/Te+4);const Oe=D===0?0:Te/D,Ne=D;return[De,Oe*100,Ne*100]}function ur(n,e,t){const s=ar(n,360),c=ut(e/100,0,1),C=ut(t/100,0,1),D=C*c,te=D*(1-Math.abs(s/60%2-1)),Te=C-D;let De,Oe,Ne;return s>=0&&s<60?[De,Oe,Ne]=[D,te,0]:s>=60&&s<120?[De,Oe,Ne]=[te,D,0]:s>=120&&s<180?[De,Oe,Ne]=[0,D,te]:s>=180&&s<240?[De,Oe,Ne]=[0,te,D]:s>=240&&s<300?[De,Oe,Ne]=[te,0,D]:[De,Oe,Ne]=[D,0,te],[(De+Te)*255,(Oe+Te)*255,(Ne+Te)*255]}function To(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Bo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function ln(n){return[n[0],n[1],n[2]]}function dr(n,e){return[n[0],n[1],n[2],e]}const Ao={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:To,rgb:ko},hsv:{hsl:Bo,hsv:(n,e,t)=>[n,e,t],rgb:ur},rgb:{hsl:Eo,hsv:Mo,rgb:(n,e,t)=>[n,e,t]}};function is(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Do(n,e){return n===e?e:ar(n,e)}function Lo(n,e,t){var s;const c=is(e,t);return[e==="rgb"?ut(n[0],0,c[0]):Do(n[0],c[0]),ut(n[1],0,c[1]),ut(n[2],0,c[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function pr(n,e,t,s){const c=is(e,t),C=is(e,s);return n.map((D,te)=>D/c[te]*C[te])}function Io(n,e,t){const s=pr(n,e.mode,e.type,"int"),c=Ao[e.mode][t.mode](...s);return pr(c,t.mode,"int",t.type)}function os(n,e){return typeof n!="object"||q(n)?!1:e in n&&typeof n[e]=="number"}class Ue{static black(e="int"){return new Ue([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ue(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return os(e,"r")&&os(e,"g")&&os(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&os(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let C=0;C<s.length;C++)if(s[C]!==c[C])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Lo(e,t,s)}getComponents(e,t="int"){return dr(Io(ln(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Qt=N("colp");class Ro{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Qt("hsv"));const c=e.createElement("div");c.classList.add(Qt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const C=e.createElement("div");C.classList.add(Qt("h")),this.hPaletteView_=t.hPaletteView,C.appendChild(this.hPaletteView_.element),s.appendChild(C),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Qt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const te=e.createElement("div");te.classList.add(Qt("a"));const Te=e.createElement("div");Te.classList.add(Qt("ap")),Te.appendChild(this.alphaViews_.palette.element),te.appendChild(Te);const De=e.createElement("div");De.classList.add(Qt("at")),De.appendChild(this.alphaViews_.text.element),te.appendChild(De),this.element.appendChild(te)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function zo(n){return n==="int"?"int":n==="float"?"float":void 0}function Ss(n){const e=ce;return ye(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(zo)}),expanded:e.optional.boolean,picker:e.optional.custom(lr)})}function cn(n){return n?.1:1}function un(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Go(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Mt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Uo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function hr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Uo[s](t)}function fr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Mt(e[1],255),Mt(e[2],255),Mt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ue(t,"rgb",n):null}}function mr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Mt(e[1],255),Mt(e[2],255),Mt(e[3],255),Mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ue(t,"rgb",n):null}}function br(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[hr(e[1]),Mt(e[2],100),Mt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function gr(n){return e=>{const t=br(e);return t?new Ue(t,"hsl",n):null}}function wr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[hr(e[1]),Mt(e[2],100),Mt(e[3],100),Mt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function xr(n){return e=>{const t=wr(e);return t?new Ue(t,"hsl",n):null}}function yr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Vo(n){const e=yr(n);return e?new Ue(e,"rgb","int"):null}function Pr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),et(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),et(parseInt(t[4],16),0,255,0,1)]:null}function Oo(n){const e=Pr(n);return e?new Ue(e,"rgb","int"):null}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Cr(n){return e=>{const t=Sr(e);return t?new Ue(t,"rgb",n):null}}function Er(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function kr(n){return e=>{const t=Er(e);return t?new Ue(t,"rgb",n):null}}const Fo=[{parser:yr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Pr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:fr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:br,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:wr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Sr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Er,result:{alpha:!0,mode:"rgb",notation:"object"}}];function No(n){return Fo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Cs(n,e="int"){const t=No(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Mr={int:[Vo,Oo,_r("int"),vr("int"),gr("int"),xr("int"),Cr("int"),kr("int")],float:[_r("float"),vr("float"),gr("float"),xr("float"),Cr("float"),kr("float")]};function $o(n){const e=Mr[n];return t=>{if(typeof t!="string")return Ue.black(n);const s=e.reduce((c,C)=>c||C(t),null);return s??Ue.black(n)}}function Es(n){const e=Mr[n];return t=>e.reduce((s,c)=>s||c(t),null)}function Tr(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Br(n,e="#"){const t=ln(n.getComponents("rgb")).map(Tr).join("");return`${e}${t}`}function ks(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Tr).join("");return`${e}${s}`}function Ar(n,e){const t=_t(e==="float"?2:0);return`rgb(${ln(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function qo(n){return e=>Ar(e,n)}function as(n,e){const t=_t(2),s=_t(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((C,D)=>(D===3?t:s)(C)).join(", ")})`}function Wo(n){return e=>as(e,n)}function jo(n){const e=[_t(0),ts,ts];return`hsl(${ln(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Ko(n){const e=[_t(0),ts,ts,_t(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Dr(n,e){const t=_t(e==="float"?2:0),s=["r","g","b"];return`{${ln(n.getComponents("rgb",e)).map((C,D)=>`${s[D]}: ${t(C)}`).join(", ")}}`}function Ho(n){return e=>Dr(e,n)}function Lr(n,e){const t=_t(2),s=_t(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,te)=>{const Te=te===3?t:s;return`${c[te]}: ${Te(D)}`}).join(", ")}}`}function Yo(n){return e=>Lr(e,n)}const Zo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Br},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ks},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:jo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ko},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:qo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Wo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ho(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Yo(e)}],[])];function Ms(n){return Zo.reduce((e,t)=>e||(Go(t.format,n)?t.stringifier:null),null)}const On=N("apl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(On()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(On("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(On("c")),s.appendChild(c),this.colorElem_=c;const C=e.createElement("div");C.classList.add(On("m")),this.element.appendChild(C),this.markerElem_=C;const D=e.createElement("div");D.classList.add(On("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ue([t[0],t[1],t[2],0],"rgb"),c=new Ue([t[0],t[1],t[2],255],"rgb"),C=["to right",as(s),as(c)];this.colorElem_.style.background=`linear-gradient(${C.join(",")})`,this.previewElem_.style.backgroundColor=as(e);const D=et(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[C,D,te]=c.getComponents("hsv");this.value.setRawValue(new Ue([C,D,te,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=wt(cn(!0),Nt(e));if(t===0)return;const s=this.value.rawValue,[c,C,D,te]=s.getComponents("hsv");this.value.setRawValue(new Ue([c,C,D,te+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){wt(cn(!0),Nt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const yn=N("coltxt");function Jo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const C=n.createElement("option");return C.textContent=c.text,C.value=c.value,s.appendChild(C),s},n.createDocumentFragment())),e}class ea{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(yn("m")),this.modeElem_=Jo(e),this.modeElem_.classList.add(yn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(yn("mm")),c.appendChild(w(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const C=e.createElement("div");C.classList.add(yn("w")),this.element.appendChild(C),this.textsElem_=C,this.textViews_=t.textViews,this.applyTextViews_(),me(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){j(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(yn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function ta(n){return _t(n==="float"?2:0)}function na(n,e,t){const s=is(n,e)[t];return new Vt({min:0,max:s})}function Ts(n,e,t){return new Un(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:cn(!1),parser:e.parser,props:O.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:ta(e.colorType)}),value:W(0,{constraint:na(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class sa{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=W(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new ea(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Ts(e,t,0),Ts(e,t,1),Ts(e,t,2)];return s.forEach((c,C)=>{zn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[C],backward:(D,te)=>{const Te=this.colorMode.rawValue,De=D.rawValue.getComponents(Te,this.colorType_);return De[C]=te.rawValue,new Ue(dr(ln(De),De[3]),Te,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Bs=N("hpl");class ra{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Bs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Bs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Bs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Ar(new Ue([t,100,100],"hsv"));const s=et(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class ia{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ra(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,C,D,te]=c.getComponents("hsv");this.value.setRawValue(new Ue([s,C,D,te],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=wt(cn(!1),Nt(e));if(t===0)return;const s=this.value.rawValue,[c,C,D,te]=s.getComponents("hsv");this.value.setRawValue(new Ue([c+t,C,D,te],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){wt(cn(!1),Nt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const As=N("svp"),Ir=64;class oa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(As()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Ir,s.width=Ir,s.classList.add(As("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(As("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,C=this.canvasElement.height,D=e.getImageData(0,0,c,C),te=D.data;for(let Oe=0;Oe<C;Oe++)for(let Ne=0;Ne<c;Ne++){const dn=et(Ne,0,c,0,100),Nn=et(Oe,0,C,100,0),$n=ur(s[0],dn,Nn),ls=(Oe*c+Ne)*4;te[ls]=$n[0],te[ls+1]=$n[1],te[ls+2]=$n[2],te[ls+3]=255}e.putImageData(D,0,0);const Te=et(s[1],0,100,0,100);this.markerElem_.style.left=`${Te}%`;const De=et(s[2],0,100,100,0);this.markerElem_.style.top=`${De}%`}onValueChange_(){this.update_()}}class aa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new oa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=et(e.point.x,0,e.bounds.width,0,100),c=et(e.point.y,0,e.bounds.height,100,0),[C,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([C,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){ir(e.key)&&e.preventDefault();const[t,s,c,C]=this.value.rawValue.getComponents("hsv"),D=cn(!1),te=wt(D,Nt(e)),Te=wt(D,Gn(e));te===0&&Te===0||this.value.setRawValue(new Ue([t,s+te,c+Te,C],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=cn(!1),s=wt(t,Nt(e)),c=wt(t,Gn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class la{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new ia(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new aa(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Qo(e,{value:this.value,viewProps:this.viewProps}),text:new Un(e,{parser:Ft,baseStep:.1,props:O.fromObject({draggingScale:.01,formatter:_t(2)}),value:W(0,{constraint:new Vt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&zn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const C=s.rawValue.getComponents();return C[3]=c.rawValue,new Ue(C,s.rawValue.mode)}}),this.textC_=new sa(e,{colorType:t.colorType,parser:Ft,value:this.value,viewProps:this.viewProps}),this.view=new Ro(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ds=N("colsw");class ca{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ds()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ds("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(Ds("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ks(e)}onValueChange_(){this.update_()}}class ua{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ca(e,{value:this.value,viewProps:this.viewProps})}}class Ls{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new ua(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new es(e,{parser:t.parser,props:O.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Co(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Zs(e,{viewProps:this.viewProps}):null;const c=new la(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(C=>{C.addEventListener("blur",this.onPopupChildBlur_),C.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),zn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:C=>C.rawValue,backward:(C,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function da(n,e){return Ue.isColorObject(n)?Ue.fromObject(n,e):Ue.black(e)}function pa(n){return ln(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ha(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function fa(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function _a(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,et(n&255,0,255,0,1)],"rgb")}function ma(n){return typeof n!="number"?Ue.black():fa(n)}function va(n){return typeof n!="number"?Ue.black():_a(n)}function ba(n){const e=Ms(n);return e?(t,s)=>{Vn(t,e(s))}:null}function ga(n){const e=n?ha:pa;return(t,s)=>{Vn(t,e(s))}}function wa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function xa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ya(n,e){return(t,s)=>{n?wa(t,s,e):xa(t,s,e)}}function Is(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Pa(n){return n?e=>ks(e,"0x"):e=>Br(e,"0x")}function Sa(n){return"color"in n||"view"in n&&n.view==="color"}const Ca={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Sa(e))return null;const t=Ss(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Is(n.params)?va:ma,equals:Ue.equals,writer:n=>ga(Is(n.params))},controller:n=>{const e=Is(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ls(n.document,{colorType:"int",expanded:t??!1,formatter:Pa(e),parser:Es("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Ea(n){return Ue.isRgbaColorObject(n)}function ka(n){return e=>da(e,n)}function Ma(n,e){return t=>n?Lr(t,e):Dr(t,e)}const Ta={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ue.isColorObject(n))return null;const t=Ss(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ka(un(n.params)),equals:Ue.equals,writer:n=>ya(Ea(n.initialValue),un(n.params))},controller:n=>{var e;const t=Ue.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,C=(e=un(n.params))!==null&&e!==void 0?e:"int";return new Ls(n.document,{colorType:C,expanded:s??!1,formatter:Ma(t,C),parser:Es(C),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ba={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Cs(n,un(e));if(!t||!Ms(t))return null;const c=Ss(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return $o((e=un(n.params))!==null&&e!==void 0?e:"int")},equals:Ue.equals,writer:n=>{const e=Cs(n.initialValue,un(n.params));if(!e)throw Y.shouldNeverHappen();const t=ba(e);if(!t)throw Y.notBindable();return t}},controller:n=>{const e=Cs(n.initialValue,un(n.params));if(!e)throw Y.shouldNeverHappen();const t=Ms(e);if(!t)throw Y.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ls(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Es(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Jt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var C,D;return(D=(C=this.components[c])===null||C===void 0?void 0:C.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const Rr=N("pndtxt");class Aa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Rr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Rr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Da(n,e,t){return new Un(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:W(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Rs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Da(e,t,c)),this.acs_.forEach((s,c)=>{zn({primary:this.value,secondary:s.value,forward:C=>t.assembly.toComponents(C.rawValue)[c],backward:(C,D)=>{const te=t.assembly.toComponents(C.rawValue);return te[c]=D.rawValue,t.assembly.fromComponents(te)}})}),this.view=new Aa(e,{textViews:this.acs_.map(s=>s.view)})}}function zr(n,e){return"step"in n&&!q(n.step)?new Ot(n.step,e):null}function Gr(n){return!q(n.max)&&!q(n.min)?new Vt({max:n.max,min:n.min}):!q(n.max)||!q(n.min)?new Zt({max:n.max,min:n.min}):null}function La(n){const e=Lt(n,Vt);if(e)return[e.values.get("min"),e.values.get("max")];const t=Lt(n,Zt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ia(n,e){const t=[],s=zr(n,e);s&&t.push(s);const c=Gr(n);c&&t.push(c);const C=Ps(n.options);return C&&t.push(C),new Dt(t)}const Ra={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ce,s=ye(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(ns),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sr,constraint:n=>Ia(n.params,n.initialValue),writer:n=>Vn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Lt(s,ct);if(c)return new Gt(n.document,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const C=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:_t(ss(s,t.rawValue)),D=s&&Lt(s,Vt);return D?new ys(n.document,{baseStep:wn(s),parser:Ft,sliderProps:new O({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:O.fromObject({draggingScale:xn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps}):new Un(n.document,{baseStep:wn(s),parser:Ft,props:O.fromObject({draggingScale:xn(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps})}};class en{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new en(...n)},Pn=N("p2d");class za{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Pn()),t.viewProps.bindClassModifiers(this.element),me(t.expanded,Be(this.element,Pn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Pn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(Pn("b")),c.appendChild(w(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const C=e.createElement("div");if(C.classList.add(Pn("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Pn("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const tn=N("p2dp");class Ga{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(tn()),t.layout==="popup"&&this.element.classList.add(tn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(tn("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(S,"svg");c.classList.add(tn("g")),this.padElement.appendChild(c),this.svgElem_=c;const C=e.createElementNS(S,"line");C.classList.add(tn("ax")),C.setAttributeNS(null,"x1","0"),C.setAttributeNS(null,"y1","50%"),C.setAttributeNS(null,"x2","100%"),C.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(C);const D=e.createElementNS(S,"line");D.classList.add(tn("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const te=e.createElementNS(S,"line");te.classList.add(tn("l")),te.setAttributeNS(null,"x1","50%"),te.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(te),this.lineElem_=te;const Te=e.createElement("div");Te.classList.add(tn("m")),this.padElement.appendChild(Te),this.markerElem_=Te,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=et(e,-s,+s,0,100),C=et(t,-s,+s,0,100),D=this.invertsY_?100-C:C;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Vr(n,e,t){return[wt(e[0],Nt(n)),wt(e[1],Gn(n))*(t?1:-1)]}class Ua{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ga(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=et(e.point.x,0,e.bounds.width,-s,+s),C=et(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new en(c,C),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){ir(e.key)&&e.preventDefault();const[t,s]=Vr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new en(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Vr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Va{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Zs(e,{viewProps:this.viewProps}):null;const C=new Ua(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});C.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=C,this.textC_=new Rs(e,{assembly:Ur,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new za(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),zn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,te)=>te.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Sn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Or={toComponents:n=>n.getComponents(),fromComponents:n=>new Sn(...n)};function Oa(n){return Sn.isObject(n)?new Sn(n.x,n.y,n.z):new Sn}function Fa(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Na(n,e){return new Jt({assembly:Or,components:[$t("x"in n?n.x:void 0,e.x),$t("y"in n?n.y:void 0,e.y),$t("z"in n?n.z:void 0,e.z)]})}function zs(n,e){return{baseStep:wn(e),constraint:e,textProps:O.fromObject({draggingScale:xn(e,n),formatter:_t(ss(e,n))})}}const $a={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Sn.isObject(n))return null;const t=ce,s=ye(e,{x:t.optional.custom(Xt),y:t.optional.custom(Xt),z:t.optional.custom(Xt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Oa,constraint:n=>Na(n.params,n.initialValue),equals:Sn.equals,writer:n=>Fa},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Jt))throw Y.shouldNeverHappen();return new Rs(n.document,{assembly:Or,axes:[zs(e.rawValue.x,t.components[0]),zs(e.rawValue.y,t.components[1]),zs(e.rawValue.z,t.components[2])],parser:Ft,value:e,viewProps:n.viewProps})}};class Cn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z,C=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof C!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Fr={toComponents:n=>n.getComponents(),fromComponents:n=>new Cn(...n)};function qa(n){return Cn.isObject(n)?new Cn(n.x,n.y,n.z,n.w):new Cn}function Wa(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function ja(n,e){return new Jt({assembly:Fr,components:[$t("x"in n?n.x:void 0,e.x),$t("y"in n?n.y:void 0,e.y),$t("z"in n?n.z:void 0,e.z),$t("w"in n?n.w:void 0,e.w)]})}function Ka(n,e){return{baseStep:wn(e),constraint:e,textProps:O.fromObject({draggingScale:xn(e,n),formatter:_t(ss(e,n))})}}const Ha={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Cn.isObject(n))return null;const t=ce,s=ye(e,{x:t.optional.custom(Xt),y:t.optional.custom(Xt),z:t.optional.custom(Xt),w:t.optional.custom(Xt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qa,constraint:n=>ja(n.params,n.initialValue),equals:Cn.equals,writer:n=>Wa},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Jt))throw Y.shouldNeverHappen();return new Rs(n.document,{assembly:Fr,axes:e.rawValue.getComponents().map((s,c)=>Ka(s,t.components[c])),parser:Ft,value:e,viewProps:n.viewProps})}};function Ya(n){const e=[],t=Ps(n.options);return t&&e.push(t),new Dt(e)}const Za={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=ye(e,{options:ce.optional.custom(ns)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>rr,constraint:n=>Ya(n.params),writer:n=>Vn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Lt(s,ct);return c?new Gt(e,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new es(e,{parser:C=>C,props:O.fromObject({formatter:bs}),value:t,viewProps:n.viewProps})}},Fn={monitor:{defaultInterval:200,defaultLineCount:3}},Nr=N("mll");class Xa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Nr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Nr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Xa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const $r=N("sgl");class Qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add($r()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add($r("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Us{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Ja={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ye(e,{lineCount:ce.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Qs},controller:n=>{var e;return n.value.rawValue.length===1?new Us(n.document,{formatter:Js,value:n.value,viewProps:n.viewProps}):new Gs(n.document,{formatter:Js,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Fn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},nn=N("grl");class el{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(S,"svg");s.classList.add(nn("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(S,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const C=e.createElement("div");C.classList.add(nn("t"),N("tt")()),this.element.appendChild(C),this.tooltipElem_=C,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),C=[];this.value.rawValue.forEach((Oe,Ne)=>{if(Oe===void 0)return;const dn=et(Ne,0,t,0,e.width),Nn=et(Oe,s,c,e.height,0);C.push([dn,Nn].join(","))}),this.lineElem_.setAttributeNS(null,"points",C.join(" "));const D=this.tooltipElem_,te=this.value.rawValue[this.cursor_.rawValue];if(te===void 0){D.classList.remove(nn("t","a"));return}const Te=et(this.cursor_.rawValue,0,t,0,e.width),De=et(te,s,c,e.height,0);D.style.left=`${Te}px`,D.style.top=`${De}px`,D.textContent=`${this.formatter_(te)}`,D.classList.contains(nn("t","a"))||(D.classList.add(nn("t","a"),nn("t","in")),r(D),D.classList.remove(nn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class tl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=W(-1),this.view=new el(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new on(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(et(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(et(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vs(n){return"format"in n&&!q(n.format)?n.format:_t(2)}function nl(n){var e;return n.value.rawValue.length===1?new Us(n.document,{formatter:Vs(n.params),value:n.value,viewProps:n.viewProps}):new Gs(n.document,{formatter:Vs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Fn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function sl(n){var e,t,s;return new tl(n.document,{formatter:Vs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Fn.monitor.defaultLineCount,props:O.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function qr(n){return"view"in n&&n.view==="graph"}const rl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ce,s=ye(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>qr(n)?64:1,reader:n=>sr},controller:n=>qr(n.params)?sl(n):nl(n)},il={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ce,s=ye(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>rr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Gs(n.document,{formatter:bs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Fn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Us(n.document,{formatter:bs,value:t,viewProps:n.viewProps})}};function ol(n,e){var t;const s=n.accept(e.target.read(),e.params);if(q(s))return null;const c=ce,C={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(C),te=n.binding.constraint?n.binding.constraint(C):void 0,Te=W(D(s.initialValue),{constraint:te,equals:n.binding.equals}),De=new Et({reader:D,target:e.target,value:Te,writer:n.binding.writer(C)}),Oe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,dn=n.controller({constraint:te,document:e.document,initialValue:s.initialValue,params:s.params,value:De.value,viewProps:h.create({disabled:Oe,hidden:Ne})});return new We(e.document,{binding:De,blade:Ie(),props:O.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:dn})}function al(n,e){return e===0?new gt:new St(n,e??Fn.monitor.defaultInterval)}function ll(n,e){var t,s,c;const C=ce,D=n.accept(e.target.read(),e.params);if(q(D))return null;const te={target:e.target,initialValue:D.initialValue,params:D.params},Te=n.binding.reader(te),De=(s=(t=C.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Oe=C.optional.number(e.params.interval).value,Ne=new Dn({reader:Te,target:e.target,ticker:al(e.document,Oe),value:lt(De)}),dn=C.optional.boolean(e.params.disabled).value,Nn=C.optional.boolean(e.params.hidden).value,$n=n.controller({document:e.document,params:D.params,value:Ne.value,viewProps:h.create({disabled:dn,hidden:Nn})});return new Qe(e.document,{binding:Ne,blade:Ie(),props:O.fromObject({label:"label"in e.params?(c=C.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:$n})}class cl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(q(c))throw new Y({context:{key:t.key},type:"nomatchingcontroller"});const C=this.pluginsMap_.inputs.reduce((D,te)=>D??ol(te,{document:e,target:t,params:s}),null);if(C)return C;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((C,D)=>C??ll(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,C)=>c??ft(C,{document:e,params:t}),null);if(!s)throw new Y({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof We)return new He(e);if(e instanceof Qe)return new Ze(e);if(e instanceof Je)return new bt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Y.shouldNeverHappen();return t}}function ul(){const n=new cl;return[ml,$a,Ha,Za,Ra,Ba,Ta,Ca,So,Ja,il,rl,Pe,Xn,An,Ke].forEach(e=>{n.register(e)}),n}function dl(n){return en.isObject(n)?new en(n.x,n.y):new en}function pl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function $t(n,e){if(!n)return;const t=[],s=zr(n,e);s&&t.push(s);const c=Gr(n);return c&&t.push(c),new Dt(t)}function hl(n,e){return new Jt({assembly:Ur,components:[$t("x"in n?n.x:void 0,e.x),$t("y"in n?n.y:void 0,e.y)]})}function Wr(n,e){const[t,s]=n?La(n):[];if(!q(t)||!q(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=wn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function fl(n,e){const t=e instanceof Jt?e.components[0]:void 0,s=e instanceof Jt?e.components[1]:void 0,c=Wr(t,n.x),C=Wr(s,n.y);return Math.max(c,C)}function jr(n,e){return{baseStep:wn(e),constraint:e,textProps:O.fromObject({draggingScale:xn(e,n),formatter:_t(ss(e,n))})}}function _l(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ml={id:"input-point2d",type:"input",accept:(n,e)=>{if(!en.isObject(n))return null;const t=ce,s=ye(e,{expanded:t.optional.boolean,picker:t.optional.custom(lr),x:t.optional.custom(Xt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>dl,constraint:n=>hl(n.params,n.initialValue),equals:en.equals,writer:n=>pl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Jt))throw Y.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,C="picker"in n.params?n.params.picker:void 0;return new Va(e,{axes:[jr(t.rawValue.x,s.components[0]),jr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:_l(n.params),maxValue:fl(t.rawValue,s),parser:Ft,pickerLayout:C??"popup",value:t,viewProps:n.viewProps})}};class Kr extends g{constructor(e){super(e),this.emitter_=new F,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Hr extends g{constructor(e){super(e),this.emitter_=new F,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Yr extends g{constructor(e){super(e),this.emitter_=new F,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const vl=function(){return{id:"list",type:"blade",accept(n){const e=ce,t=ye(n,{options:e.required.custom(ns),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new ct(cr(n.params.options)),t=W(n.params.value,{constraint:e}),s=new Gt(n.document,{props:new O({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof Gt)?null:new Kr(n.controller)}}}();function bl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function gl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class wl extends Ct{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(We).map(s=>s.binding);gl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(We).map(t=>t.binding.target);return bl(e)}refresh(){this.controller_.rackController.rack.find(We).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Qe).forEach(e=>{e.binding.read()})}}class xl extends kn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const yl={id:"slider",type:"blade",accept(n){const e=ce,t=ye(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Vt({max:n.params.max,min:n.params.min}),C=new ys(n.document,{baseStep:1,parser:Ft,sliderProps:new O({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:O.fromObject({draggingScale:xn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ho}),value:W(s,{constraint:c}),viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:C})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof ys)?null:new Hr(n.controller)}},Pl=function(){return{id:"text",type:"blade",accept(n){const e=ce,t=ye(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new es(n.document,{parser:n.params.parse,props:O.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:W(n.params.value),viewProps:n.viewProps});return new zt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof zt)||!(n.controller.valueController instanceof es)?null:new Yr(n.controller)}}}();function Sl(n){const e=n.createElement("div");return e.classList.add(N("dfw")()),n.body&&n.body.appendChild(e),e}function Zr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Cl extends wl{constructor(e){var t,s;const c=e??{},C=(t=c.document)!==null&&t!==void 0?t:l(),D=ul(),te=new xl(C,{expanded:c.expanded,blade:Ie(),props:O.fromObject({title:c.title}),viewProps:h.create()});super(te,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:Sl(C),this.containerElem_.appendChild(this.element),this.doc_=C,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Y.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Y.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Zr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Zr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[yl,vl,Ke,Pl]})}}const El=new E("3.1.10");f.BladeApi=g,f.ButtonApi=ne,f.FolderApi=Ct,f.InputBindingApi=He,f.ListApi=Kr,f.MonitorBindingApi=Ze,f.Pane=Cl,f.SeparatorApi=Mn,f.SliderApi=Hr,f.TabApi=ie,f.TabPageApi=H,f.TextApi=Yr,f.TpChangeEvent=M,f.VERSION=El,Object.defineProperty(f,"__esModule",{value:!0})})})(Fs,Fs.exports);var Zl=Fs.exports;const Xl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,ci=`// 2DGS render — vertex+fragment.
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
`,Ql=`const WG_SIZE = 256u;
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
}`,Jl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
        sort_depths[store_idx]  = bitcast<u32>(depth);
        sort_indices[store_idx] = store_idx;
    }
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
}`,Ti=32,Ns=1,$s=2,ui=4,di=512,pi=1024,hi=2048,fi=4096,sc=0,sn=new ArrayBuffer(Ti),mt={canvas_size:new Uint32Array(sn,0,2),accel_flags:new Uint32Array(sn,8,1),feature_mode:new Uint32Array(sn,12,1),gaussian_scaling:new Float32Array(sn,16,1),sh_bias:new Float32Array(sn,20,1),color_K:new Uint32Array(sn,24,1),walltime:new Float32Array(sn,28,1)};function rc(o){mt.canvas_size[0]=o.width>>>0,mt.canvas_size[1]=o.height>>>0,mt.accel_flags[0]=(o.accel_flags??Ns|$s)>>>0,mt.feature_mode[0]=(o.feature_mode??sc)>>>0,mt.gaussian_scaling[0]=o.gaussian_scaling??1,mt.sh_bias[0]=o.sh_bias??.5,mt.color_K[0]=(o.color_K??0)>>>0,mt.walltime[0]=o.walltime??0}function Bi(o,a){o.queue.writeBuffer(a,0,sn)}function fs(o,a,f){f&&o&&a&&Bi(o,a)}function En(o,a,f,E,g=!0){mt.canvas_size[0]=o>>>0,mt.canvas_size[1]=a>>>0,fs(f??null,E??null,g)}function _i(o,a,f,E=!0){mt.gaussian_scaling[0]=o,fs(a??null,f??null,E)}function mi(o,a,f,E=!0){mt.sh_bias[0]=o,fs(a??null,f??null,E)}function qn(o,a,f,E=!0){let g=mt.accel_flags[0];o.oac!==void 0&&(g=o.oac?g|Ns:g&~Ns),o.spr!==void 0&&(g=o.spr?g|$s:g&~$s),o.bfc!==void 0&&(g=o.bfc?g|ui:g&~ui),o.hypLegacy!==void 0&&(g=o.hypLegacy?g|di:g&~di),o.centred!==void 0&&(g=o.centred?g|fi:g&~fi),o.raysplat!==void 0&&(g=o.raysplat?g|hi:g&~hi),o.legacyPos!==void 0&&(g=o.legacyPos?g|pi:g&~pi),mt.accel_flags[0]=g>>>0,fs(a??null,f??null,E)}const ic=256;function vi(o,a){const f=[],E=[];let g=!0;for(const P of o.split(`
`)){const M=P.trim();let L;if((L=/^\/\/#if\s+(\w+)\s*$/.exec(M))!==null){const A=!!a[L[1]];E.push({parent:g,taken:A}),g=g&&A;continue}if(/^\/\/#else\s*$/.test(M)){const A=E[E.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");g=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(M)){const A=E.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");g=A.parent;continue}g&&f.push(P)}if(E.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const oc=Ti,ac=8,lc=96,cc=12,Ys=8,qt=1<<Ys,hn=256,ds=32/Ys,uc=0,bi=ds&1;function gi(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function dc(o,a){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[f]}),g=P=>o.createComputePipeline({layout:E,compute:{module:a,entryPoint:P,constants:{WG_SIZE:hn}}});return{l0TileScan:g("prefix_l0_tile_scan"),l1TileScanOnL0:g("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:g("prefix_scan_l1_sums"),addL1ToL0:g("prefix_add_l1_to_l0_offsets"),addL0ToElems:g("prefix_add_l0_to_elements"),computeDigitBase:g("compute_digit_base"),prefixBindGroupLayout:f}}function pc(o,a,f){const E=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),g=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),P=o.createPipelineLayout({bindGroupLayouts:[E]}),M=o.createPipelineLayout({bindGroupLayouts:[g]}),L=[];for(let A=0;A<ds;A++){const I={PASS_ID:A+uc,RS_RADIX_LOG2:Ys,RS_RADIX_SIZE:qt};L.push({localHistogram:o.createComputePipeline({layout:P,compute:{module:a,entryPoint:"local_histogram_pass",constants:I}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:I}})})}return{passes:L,localHistogramBindGroupLayout:E,scatterBindGroupLayout:g}}function hc(o){const a=o.createShaderModule({label:"local histogram",code:tc}),f=o.createShaderModule({label:"scatter",code:ec}),E=o.createShaderModule({label:"blelloch prefix",code:nc}),g=dc(o,E),P=pc(o,a,f);return{localHistogramBindGroupLayout:P.localHistogramBindGroupLayout,scatterBindGroupLayout:P.scatterBindGroupLayout,passes:P.passes,hierarchicalBlelloch:g}}function wi(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),g=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),P=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(P,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:E,rectsBuffer:g,texParamsBuffer:P,meta:M}}class fc{constructor(a,f,E,g,P,M=null,L={}){$(this,"device");$(this,"pc");$(this,"presentationFormat");$(this,"camera_buffer");$(this,"render_settings_buffer");$(this,"draw_indirect_buffer");$(this,"splat_2d_buffer");$(this,"querySet");$(this,"resolveBuffer");$(this,"resultBuffer");$(this,"queriesPerFrame",ac);$(this,"queryCapacityFrames",200);$(this,"sort_prefixBindGroup");$(this,"sort_pipelines");$(this,"sort_localHistogramBindGroups");$(this,"sort_scatterBindGroups");$(this,"lastFrame",0);$(this,"frameCount",0);$(this,"preprocessPipeline");$(this,"cullPipeline");$(this,"renderPipeline");$(this,"indirectPipeline");$(this,"renderShaderModule");$(this,"betaKernel",1);$(this,"fetchById");$(this,"octBound");$(this,"acc16");$(this,"accTexture",null);$(this,"accView",null);$(this,"accW",0);$(this,"accH",0);$(this,"legacyRenderPipeline",null);$(this,"varyingsPipeline",null);$(this,"legacyRenderer",!1);$(this,"accResolvePipeline",null);$(this,"accResolveBgl",null);$(this,"accResolveBindGroup",null);$(this,"renderSettingsBgl");$(this,"preprocessBgl2");$(this,"renderSplatsBgl");$(this,"atlasBgl");$(this,"sort_info_buffer");$(this,"sort_ping_pong");$(this,"crsBg");$(this,"gsBg");$(this,"cullBg2");$(this,"preprocessBg1");$(this,"renderSplatsBindGroup");$(this,"renderSettingsBindGroup");$(this,"atlasBindGroup");$(this,"indirectBindGroup");$(this,"sh_solvers_buffer");$(this,"bfcParamsBuffer");$(this,"bfcBindGroupLayout");$(this,"bfcBindGroup");$(this,"bgColor",[0,0,0,0]);$(this,"showPerfDialogNext",!1);$(this,"requestReorderNextFrame",!1);$(this,"reorderInFlight",!1);$(this,"downloadOnceNextRead",!1);$(this,"downloadOnceFileName","fps_metrics");$(this,"allFrameTimes",[]);$(this,"lastStageBreakdownMs",null);$(this,"timeQueryEnabled");$(this,"atlas");$(this,"atlasParamsBuffer");$(this,"_atlasEnabled",!0);$(this,"mipLodBias",1);$(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,yt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=P.includes("timestamp-query");this.timeQueryEnabled=A,A&&yt("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=E,this.camera_buffer=g,this.atlas=M??wi(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",Ce=>{console.error("A WebGPU error was not captured:",Ce.error)}),this._setupTimestampQueries(),this._setupBuffers();const I=(Math.floor((this.pc.num_points+hn-1)/hn)+1)*hn,K=Math.ceil(I/hn);console.log(`keys count adjusted: ${I}`),console.log(`key size: ${this.pc.num_points}`);const q=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=hc(f);const G=[gi(I,f),gi(I,f)],X=f.createBuffer({label:"workgroup histograms",size:K*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"workgroup prefixes",size:K*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"digit base",size:qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(K/hn),ne=Math.ceil(Q/hn),F=f.createBuffer({label:"prefix l0 sums",size:Q*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=f.createBuffer({label:"prefix l0 offsets",size:Q*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=f.createBuffer({label:"prefix l1 sums",size:ne*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),he=f.createBuffer({label:"prefix l1 offsets",size:ne*qt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:F}},{binding:4,resource:{buffer:J}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:he}},{binding:7,resource:{buffer:Y}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:G[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:G[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:G[0].sort_depths_buffer}},{binding:3,resource:{buffer:G[1].sort_depths_buffer}},{binding:4,resource:{buffer:G[0].sort_indices_buffer}},{binding:5,resource:{buffer:G[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:G[1].sort_depths_buffer}},{binding:3,resource:{buffer:G[0].sort_depths_buffer}},{binding:4,resource:{buffer:G[1].sort_indices_buffer}},{binding:5,resource:{buffer:G[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=q,this.sort_ping_pong=G;const fe=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),me=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),le=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:fe,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:me,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:le,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=ue,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Be=this.device.createShaderModule({code:Ql});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Be,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const ee=this.device.createShaderModule({code:Jl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,me,le,this.bfcBindGroupLayout]}),compute:{module:ee,entryPoint:"surfel_cull"}});const de=this.device.createShaderModule({code:Xl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[fe,ue]}),compute:{module:de,entryPoint:"preprocess"}});const ve=this.device.createShaderModule({label:"render_2dgs",code:vi(ci,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ve.getCompilationInfo().then(Ce=>{Ce.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ce.messages.forEach(Ve=>{(Ve.type==="error"?console.error:Ve.type==="warning"?console.warn:console.log)(`${Ve.type} (line ${Ve.lineNum}:${Ve.linePos}): ${Ve.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Le=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Ae=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,Z=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Ae,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),W=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),O=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Le,Z,W]}),vertex:{module:ve,entryPoint:"vs_main"},fragment:{module:ve,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const xe=(Ce,Ve,Ge)=>{const Fe=this.device.createShaderModule({label:`render_2dgs (${Ce})`,code:vi(ci,{FETCH_BY_ID:Ve,OCT:Ge})});return this.device.createRenderPipeline({label:`render_2dgs_${Ce}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Le,Z,W]}),vertex:{module:Fe,entryPoint:"vs_main"},fragment:{module:Fe,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=xe("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?xe("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Ce=>{Ce?console.error("[render_2dgs] pipeline create validation error:",Ce.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Le,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:Z,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[bi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:W,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ve,this.betaKernel=O,this.renderSettingsBgl=Le,this.renderSplatsBgl=Z,this.atlasBgl=W}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var g;const a=new ArrayBuffer(32),f=new Uint32Array(a),E=new Float32Array(a);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,E[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,f[4]=this._mipMode!==0?Math.max(1,((g=this.atlas.meta.mip_bytes)==null?void 0:g.length)??1):1,E[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,f){var E;if(this.accResolvePipeline===null){const g=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,P=this.device.createShaderModule({label:"acc16_resolve",code:g});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:P,entryPoint:"vs_main"},fragment:{module:P,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===f||((E=this.accTexture)==null||E.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=f)}setAtlas(a){this.atlas=a??wi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&cs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,cs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,yt(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,qn({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const f=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),yt(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),cs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),E=f*Uint32Array.BYTES_PER_ELEMENT;if(E===0){console.log("[DEBUG] No indices to read.");return}const g=this.device.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),P=this.device.createCommandEncoder();P.copyBufferToBuffer(this.sort_ping_pong[bi].sort_indices_buffer,0,g,0,E),this.device.queue.submit([P.finish()]),await g.mapAsync(GPUMapMode.READ);const M=new Uint32Array(g.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),g.unmap()}frame(a,f,E=!0){const P=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=E&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const L={label:"cull"};M&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:P+0,endOfPassWriteIndex:P+1});const A=a.beginComputePass(L);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const I=Math.ceil(this.pc.num_points/ic);A.dispatchWorkgroups(I,1,1),A.end()}{const L=a.beginComputePass({label:"calculate indirect dispatch"});L.setPipeline(this.indirectPipeline),L.setBindGroup(0,this.indirectBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:"preprocess"};M&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:P+2,endOfPassWriteIndex:P+3});const A=a.beginComputePass(L);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let L=0;L<ds;L++){const A=L&1,I=this.sort_pipelines.passes[L],K=this.sort_localHistogramBindGroups[A],q=this.sort_scatterBindGroups[A];{const G={label:`upsweep_round${L}`};M&&L==0&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:P+4});const X=a.beginComputePass(G);X.setPipeline(I.localHistogram),X.setBindGroup(0,K),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const G=a.beginComputePass({label:`prefix_round${L} - l0TileScan`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=a.beginComputePass({label:`prefix_round${L} - l1TileScanOnL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=a.beginComputePass({label:`prefix_round${L} - l1ScanSums`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,qt,1),G.end()}{const G=a.beginComputePass({label:`prefix_round${L} - addL1ToL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=a.beginComputePass({label:`prefix_round${L} - addL0ToElems`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=a.beginComputePass({label:`prefix_round${L} - computeDigitBase`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,1,1),G.end()}{const G={label:`scatter_round${L}`};M&&L==ds-1&&(G.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:P+5});const X=a.beginComputePass(G);X.setPipeline(I.scatterElements),X.setBindGroup(0,q),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{let L=f;this.acc16&&(this.ensureAccResources(mt.canvas_size[0],mt.canvas_size[1]),L=this.accView);const A={label:"render",colorAttachments:[{view:L,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:P+6,...this.acc16?{}:{endOfPassWriteIndex:P+7}});const I=a.beginRenderPass(A);if(I.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),I.setBindGroup(0,this.renderSettingsBindGroup),I.setBindGroup(1,this.renderSplatsBindGroup),I.setBindGroup(2,this.atlasBindGroup),I.drawIndirect(this.draw_indirect_buffer,0),I.end(),this.acc16){const K={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(K.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:P+7});const q=a.beginRenderPass(K);q.setPipeline(this.accResolvePipeline),q.setBindGroup(0,this.accResolveBindGroup),q.draw(3),q.end()}}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const E=this.device.createCommandEncoder({label:"timestamp resolve encoder"});E.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),E.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([E.finish()]),await this.device.queue.onSubmittedWorkDone();const g=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const P=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),L=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:g.length},()=>[]);let I=0;for(let ne=0;ne<M;ne++){const F=(L+ne)%this.queryCapacityFrames,J=F*this.queriesPerFrame;let N=!0;for(let he=0;he<g.length;he++){const[fe,me,le]=g[he];if(P[J+le]===0n||P[J+me]===0n||P[J+me]<P[J+le]){N=!1;break}}if(!N){!f&&F%60===0&&console.debug("[timestamp] frame slot",F,"contains unwritten (0) timestamps, skipped in stats");continue}I++;for(let he=0;he<g.length;he++){const[fe,me,le]=g[he],ue=Number(P[J+le]),Be=Number(P[J+me]);A[he].push((Be-ue)/1e6)}}if(I===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const K=[];let q=0,G=0,X=0;for(let ne=0;ne<g.length;ne++){const F=g[ne][0],J=A[ne];let N=0;if(F==="Total"){const he=this.allFrameTimes;N=he.reduce((le,ue)=>le+ue,0)/he.length;const fe=[...he].sort((le,ue)=>le-ue);q=fe[Math.floor(fe.length*.99)]||0;const me=he.reduce((le,ue)=>le+Math.pow(ue-N,2),0)/he.length;G=Math.sqrt(me),X=N}else N=J.reduce((he,fe)=>he+fe,0)/J.length;K.push([F,N])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(K);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+K.map(([ne,F])=>`${ne}: ${F.toFixed(3)}ms`).join(`
`)+`
Total P99: ${q.toFixed(3)}ms
Total STD: ${G.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ne=`Stage,ms
`,F=K.map(([he,fe])=>`${he},${fe.toFixed(3)}`).join(`
`),J="data:text/csv;charset=utf-8,"+encodeURIComponent(ne+F),N=document.createElement("a");N.href=J,N.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(N),N.click(),N.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:oc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,E=a?a.height:1;rc({width:f,height:E,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Bi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Kn(this.pc.num_points*lc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Kn(this.pc.num_points*cc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,E=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${E}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function _c(o,a){return 2*Math.atan(a/(2*o))}function mc(o,a,f,E){const g=Math.tan(E/2),P=Math.tan(f/2),M=g*o,L=-M,A=P*o,I=-A,K=ht.create();return K[0]=2*o/(A-I),K[5]=-2*o/(M-L),K[2]=(A+I)/(A-I),K[6]=(M+L)/(M-L),K[14]=1,K[10]=a/(a-o),K[11]=-(a*o)/(a-o),ht.transpose(K,K),K}async function vc(o){yt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return yt(`loaded cameras count: ${f.length}`),f.map(E=>{const g=R.clone(E.position),P=Tt.create(...E.rotation.flat()),M=P[0],L=P[4],A=P[8],I=P[1],K=P[5],q=P[9],G=P[2],X=P[6],oe=P[10];M*(K*oe-q*X)-L*(I*oe-q*G)+A*(I*X-K*G)<0&&(P[1]=-P[1],P[5]=-P[5],P[9]=-P[9]);const Q=ht.fromMat3(P);return{position:g,rotation:Q,img_name:E.img_name,id:E.id}})}const bc=4*2,gc=4*16,Ai=4*gc+2*bc;function wc(o){return o.createBuffer({label:"camera uniform",size:Ai,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const pn=new Float32Array(Ai/Float32Array.BYTES_PER_ELEMENT),ps=class ps{constructor(a,f){$(this,"_renderSize",null);$(this,"uniform_buffer");$(this,"position",R.create());$(this,"rotation",ht.create());$(this,"fovY",45/180*Math.PI);$(this,"fovX");$(this,"focalRatioX",1);$(this,"focal",si.create());$(this,"viewport",si.create());$(this,"view_matrix",ht.identity());$(this,"view_inv_matrix",ht.identity());$(this,"proj_matrix",ht.identity());$(this,"proj_inv_matrix",ht.identity());$(this,"_negPos",R.create());$(this,"look",R.create(0,0,1));$(this,"up",R.create(0,1,0));$(this,"right",R.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=wc(f),this.on_update_canvas()}setRenderSize(a,f){this._renderSize=[a,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,E=.5*f/Math.tan(this.fovY*.5);this.focal[0]=E*this.focalRatioX,this.focal[1]=E,this.fovX=_c(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=f,this.proj_matrix=mc(.01,100,this.fovX,this.fovY),ht.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ht.copy(this.rotation,this.view_matrix),ht.translate(this.view_matrix,this._negPos,this.view_matrix),ht.inverse(this.view_matrix,this.view_inv_matrix),R.transformMat4Upper3x3(ps.Z_AXIS,this.view_inv_matrix,this.look),R.normalize(this.look,this.look),R.cross(this.up,this.look,this.right),R.normalize(this.right,this.right);let a=0;pn.set(this.view_matrix,a),a+=16,pn.set(this.view_inv_matrix,a),a+=16,pn.set(this.proj_matrix,a),a+=16,pn.set(this.proj_inv_matrix,a),a+=16,pn.set(this.viewport,a),a+=2,pn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,pn)}set_preset(a){R.copy(a.position,this.position),ht.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};$(ps,"Z_AXIS",R.create(0,0,1));let qs=ps;const xc=R.create(1,0,0),yc=R.create(0,1,0),Pc=R.create(0,0,1);function Sc(o,a){const f=o[0],E=o[4],g=o[8],P=o[1],M=o[5],L=o[9],A=o[2],I=o[6],K=o[10],q=f+M+K;let G,X,oe,Y;if(q>0){const Q=.5/Math.sqrt(q+1);G=.25/Q,X=(I-L)*Q,oe=(g-A)*Q,Y=(P-E)*Q}else if(f>M&&f>K){const Q=2*Math.sqrt(1+f-M-K);G=(I-L)/Q,X=.25*Q,oe=(E+P)/Q,Y=(g+A)/Q}else if(M>K){const Q=2*Math.sqrt(1+M-f-K);G=(g-A)/Q,X=(E+P)/Q,oe=.25*Q,Y=(L+I)/Q}else{const Q=2*Math.sqrt(1+K-f-M);G=(P-E)/Q,X=(g+A)/Q,oe=(L+I)/Q,Y=.25*Q}return a[0]=X,a[1]=oe,a[2]=Y,a[3]=G,a}class Cc{constructor(a){$(this,"element");$(this,"enabled",!0);$(this,"center",R.create(0,0,0));$(this,"up",R.create(0,1,0));$(this,"rotation",[0,0]);$(this,"shift",[0,0]);$(this,"scroll",0);$(this,"speed",.1);$(this,"sensitivity",.08);$(this,"leftPressed",!1);$(this,"rightPressed",!1);$(this,"leftDragPans",!1);$(this,"lastX",0);$(this,"lastY",0);$(this,"touches",new Map);$(this,"lastTouchCenter",null);$(this,"lastPinchDistance",null);$(this,"lastTwoFingerAngle",null);$(this,"lastTouchCount",0);$(this,"roll",0);$(this,"_dir",R.create());$(this,"_right",R.create());$(this,"_upCam",R.create());$(this,"_scratch",R.create());$(this,"_qY",dt.create());$(this,"_qX",dt.create());$(this,"_qRot",dt.create());$(this,"_qZ",dt.create());$(this,"_qLocal",dt.create());$(this,"_qWorldToCam",dt.create());$(this,"_scratchMat3",Tt.create());$(this,"bboxMin",null);$(this,"bboxMax",null);$(this,"anchor",R.create(0,0,0));$(this,"downCallback",a=>{var f,E,g,P;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(E=(f=a.target)==null?void 0:f.setPointerCapture)==null||E.call(f,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(P=(g=a.target)==null?void 0:g.setPointerCapture)==null||P.call(g,a.pointerId),a.preventDefault())}});$(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const f=a.pageX-this.lastX,E=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=E):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=E)});$(this,"upCallback",a=>{var f,E,g,P;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(E=(f=a.target)==null?void 0:f.releasePointerCapture)==null||E.call(f,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(P=(g=a.target)==null?void 0:g.releasePointerCapture)==null||P.call(g,a.pointerId),a.preventDefault()});$(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let f=a.deltaY;a.deltaMode===1?f*=16:a.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=a,this.registerElement(a.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const a=this.bboxMax[0]-this.bboxMin[0],f=this.bboxMax[1]-this.bboxMin[1],E=this.bboxMax[2]-this.bboxMin[2],g=.5*Math.sqrt(a*a+f*f+E*E);return g>1e-6?g:null}addRoll(a){this.roll+=a}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(a){R.copy(a,this.center),R.copy(a,this.anchor)}setOrbitPivot(a){R.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const f=this.camera.rotation;R.set(f[2],f[6],f[10],this._dir),R.normalize(this._dir,this._dir),R.scale(this._dir,a,this._dir),R.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(R.subtract(this.center,a.position,this._scratch),R.length(this._scratch)<1e-6)return;R.normalize(this._scratch,this._scratch),R.cross(this.up,this._scratch,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right),R.normalize(this._right,this._right),R.cross(this._scratch,this._right,this._upCam),R.normalize(this._upCam,this._upCam);const f=a.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,a.update_buffer()}setBbox(a,f){this.bboxMin=R.create(a[0],a[1],a[2]),this.bboxMax=R.create(f[0],f[1],f[2]);const E=(a[0]+f[0])*.5,g=(a[1]+f[1])*.5,P=(a[2]+f[2])*.5;R.set(E,g,P,this.center),R.set(E,g,P,this.anchor)}resetToCamera(){const a=this.camera.rotation;R.set(a[2],a[6],a[10],this._dir),R.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let E=-1/0,g=1/0,P=!1;for(let M=0;M<3;M++){const L=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],I=this.bboxMax[M]-this.camera.position[M];if(Math.abs(L)>1e-8){const K=A/L,q=I/L;E=Math.max(E,Math.min(K,q)),g=Math.min(g,Math.max(K,q))}else if(A>0||I<0){P=!0;break}}!P&&E<=g&&g>0&&(f=(Math.max(E,0)+g)*.5)}if(f===null||!isFinite(f)||f<.001){R.subtract(this.anchor,this.camera.position,this._scratch);const E=R.dot(this._scratch,this._dir);f=E>.001?E:R.length(this._scratch)}f=Math.max(.1,f),R.scale(this._dir,f,this._dir),R.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const E=f.x-this.lastTouchCenter[0],g=f.y-this.lastTouchCenter[1];this.rotation[0]+=E*.3,this.rotation[1]-=g*.3}this.lastTouchCenter=[f.x,f.y]}else if(a===2){const f=Array.from(this.touches.values()),E=(f[0].x+f[1].x)*.5,g=(f[0].y+f[1].y)*.5,P=f[1].x-f[0].x,M=f[1].y-f[0].y,L=Math.hypot(P,M),A=Math.atan2(M,P);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const I=E-this.lastTouchCenter[0],K=g-this.lastTouchCenter[1],q=Math.hypot(I,K),G=Math.abs(L-this.lastPinchDistance);let X=A-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),q>.5&&(this.shift[1]-=I,this.shift[0]+=K),G>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(L/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=X)}this.lastTouchCenter=[E,g],this.lastPinchDistance=L,this.lastTwoFingerAngle=A}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const Q=f.rotation;this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],R.length(this.up)>1e-6?R.normalize(this.up,this.up):R.set(0,1,0,this.up)}let E=0,g=!1;Math.abs(this.roll)>1e-4&&(E=this.roll,this.roll=0,g=!0),R.subtract(f.position,this.center,this._dir);let P=R.length(this._dir);P<1e-6&&(P=1e-6);const M=Math.exp(Math.log(P)+this.scroll*a*10*this.speed);R.scale(this._dir,M/P,this._dir),P=M;const L=f.rotation;this._right[0]=L[0],this._right[1]=L[4],this._right[2]=L[8],R.normalize(this._right,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right);const A=R.create(L[1],L[5],L[9]);R.normalize(A,A),R.length(A)<1e-6&&R.set(0,1,0,A);const I=a*this.speed*.1*P,K=this.shift[1]*I,q=-this.shift[0]*I;R.scale(this._right,K,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position),R.scale(A,q,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position);const G=this.rotation[0]*a*this.sensitivity,X=this.rotation[1]*a*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(X)>1e-5||g){const Q=f.rotation;Sc(Q,this._qWorldToCam),dt.fromAxisAngle(xc,-X,this._qX),dt.fromAxisAngle(yc,-G,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),g&&(dt.fromAxisAngle(Pc,1*E,this._qZ),dt.multiply(this._qZ,this._qLocal,this._qLocal)),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),Tt.fromQuat(this._qWorldToCam,this._scratchMat3),ht.fromMat3(this._scratchMat3,f.rotation);const ne=f.rotation,F=ne[2],J=ne[6],N=ne[10];f.position[0]=this.center[0]-F*P,f.position[1]=this.center[1]-J*P,f.position[2]=this.center[2]-N*P,this.up[0]=ne[1],this.up[1]=ne[5],this.up[2]=ne[9],R.normalize(this.up,this.up)}else R.add(this.center,this._dir,f.position);f.update_buffer();const Y=Math.pow(.8,a*60);this.rotation[0]*=Y,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=Y,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=Y,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=Y,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=Y,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Di(o){const a=R.create();for(const f of o)R.add(a,f,a);return R.scale(a,1/Math.max(o.length,1),a)}function Li(o,a){const f=Tt.create();Tt.inverse(o,f);const E=R.create();return E[0]=f[0]*a[0]+f[4]*a[1]+f[8]*a[2],E[1]=f[1]*a[0]+f[5]*a[1]+f[9]*a[2],E[2]=f[2]*a[0]+f[6]*a[1]+f[10]*a[2],E}function Ec(o){const a=o.slice(),f=[1,0,0,0,1,0,0,0,1],E=(A,I)=>a[A*3+I],g=(A,I,K)=>{a[A*3+I]=K},P=(A,I)=>f[A*3+I],M=(A,I,K)=>{f[A*3+I]=K};for(let A=0;A<30;A++){let I=0,K=1,q=Math.abs(E(0,1));if(Math.abs(E(0,2))>q&&(I=0,K=2,q=Math.abs(E(0,2))),Math.abs(E(1,2))>q&&(I=1,K=2,q=Math.abs(E(1,2))),q<1e-12)break;const G=E(I,I),X=E(K,K),oe=E(I,K);let Y;Math.abs(G-X)<1e-30?Y=Math.PI/4*Math.sign(oe):Y=.5*Math.atan2(2*oe,G-X);const Q=Math.cos(Y),ne=Math.sin(Y);for(let F=0;F<3;F++){const J=E(F,I),N=E(F,K);g(F,I,Q*J+ne*N),g(F,K,-ne*J+Q*N)}for(let F=0;F<3;F++){const J=E(I,F),N=E(K,F);g(I,F,Q*J+ne*N),g(K,F,-ne*J+Q*N)}for(let F=0;F<3;F++){const J=P(F,I),N=P(F,K);M(F,I,Q*J+ne*N),M(F,K,-ne*J+Q*N)}}const L=[];for(let A=0;A<3;A++)L.push({val:E(A,A),vec:R.create(P(0,A),P(1,A),P(2,A))});return L.sort((A,I)=>I.val-A.val),{vals:[L[0].val,L[1].val,L[2].val],vecs:[L[0].vec,L[1].vec,L[2].vec]}}function kc(o,a){const f=Di(o);let E=0,g=0,P=0,M=0,L=0,A=0;for(const oe of o){const Y=oe[0]-f[0],Q=oe[1]-f[1],ne=oe[2]-f[2];E+=Y*Y,g+=Y*Q,P+=Y*ne,M+=Q*Q,L+=Q*ne,A+=ne*ne}const I=[E,g,P,g,M,L,P,L,A],{vecs:K}=Ec(I);let q=K[0],G=K[1],X=K[2];return R.dot(X,a)<0&&(R.scale(X,-1,X),R.scale(G,-1,G)),{centroid:f,normal:X,u:q,v:G}}function Mc(o){let a=0,f=0,E=0,g=0,P=0,M=0,L=0,A=0,I=0;for(const[Q,ne]of o){const F=-2*Q,J=-2*ne,N=1,he=-(Q*Q+ne*ne);a+=F*F,f+=F*J,E+=F*N,g+=J*J,P+=J*N,M+=N*N,L+=F*he,A+=J*he,I+=N*he}const K=Tt.create(a,f,E,f,g,P,E,P,M),q=Li(K,R.create(L,A,I)),G=q[0],X=q[1],oe=q[2],Y=G*G+X*X-oe;return{center:[G,X],radius:Math.sqrt(Math.max(Y,1e-12))}}function Tc(o,a){let f=0,E=0,g=0,P=0,M=0,L=0,A=0,I=0,K=0;for(let G=0;G<o.length;G++){const X=o[G],oe=R.normalize(a[G],R.create()),Y=1-oe[0]*oe[0],Q=-oe[0]*oe[1],ne=-oe[0]*oe[2],F=1-oe[1]*oe[1],J=-oe[1]*oe[2],N=1-oe[2]*oe[2];f+=Y,E+=Q,g+=ne,P+=F,M+=J,L+=N,A+=Y*X[0]+Q*X[1]+ne*X[2],I+=Q*X[0]+F*X[1]+J*X[2],K+=ne*X[0]+J*X[1]+N*X[2]}const q=Tt.create(f,E,g,E,P,M,g,M,L);return Li(q,R.create(A,I,K))}function Ii(o,a={}){if(o.length===0)return null;const f=a.tiltDownDeg??8,E=a.radiusScale??1,g=a.alignFirst??!0,P=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(le=>R.clone(le.position)),L=o.map(le=>{const ue=le.rotation;return R.create(ue[8],ue[9],ue[10])}),A=o.map(le=>{const ue=le.rotation;return R.create(ue[4],ue[5],ue[6])}),I=Di(A),K=R.normalize(R.scale(I,-1,R.create())),{centroid:q,normal:G,u:X,v:oe}=kc(M,K),Y=M.map(le=>{const ue=R.sub(le,q,R.create());return[R.dot(ue,X),R.dot(ue,oe)]}),{center:Q,radius:ne}=Mc(Y),F=ne*E,J=R.add(q,R.add(R.scale(X,Q[0],R.create()),R.scale(oe,Q[1],R.create()),R.create()),R.create()),N=Tc(M,L),he=F*Math.tan(f*Math.PI/180),fe=R.sub(N,R.scale(G,he,R.create()),R.create());let me=0;if(g){const le=R.sub(M[0],J,R.create());me=Math.atan2(R.dot(le,oe),R.dot(le,X))/(2*Math.PI)%1,me<0&&(me+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${F.toFixed(2)}, tilt=${f}°, normal=[${G[0].toFixed(2)}, ${G[1].toFixed(2)}, ${G[2].toFixed(2)}], startPhase=${me.toFixed(3)}`),{center:J,radius:F,normal:G,u:X,v:oe,lookAt:fe,startPhase:me,direction:P}}function Ri(o,a){const f=(o.startPhase+a*o.direction)*2*Math.PI,E=Math.cos(f),g=Math.sin(f),P=R.add(o.center,R.add(R.scale(o.u,o.radius*E,R.create()),R.scale(o.v,o.radius*g,R.create()),R.create()),R.create()),M=R.normalize(R.sub(o.lookAt,P,R.create())),L=R.cross(M,o.normal,R.create());R.length(L)<1e-6&&R.copy(o.u,L),R.normalize(L,L);const A=R.cross(M,L,R.create());R.normalize(A,A);const I=ht.create();return I[0]=L[0],I[1]=A[0],I[2]=M[0],I[3]=0,I[4]=L[1],I[5]=A[1],I[6]=M[1],I[7]=0,I[8]=L[2],I[9]=A[2],I[10]=M[2],I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,{position:P,rotation:I,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Bc(o,a={}){const f=Ii(o,a);if(!f)return[];const E=a.numViews??120;return Array.from({length:E},(g,P)=>({...Ri(f,P/E),img_name:`circle_${P.toString().padStart(4,"0")}`,id:P}))}const zi="BITYMI01",Ac=0,Dc=1,Lc=2,Ic=3,Rc=4,zc=5;function Wt(o){const a=(o&32768)>>15,f=(o&31744)>>10,E=o&1023;return f===0?(a?-1:1)*Math.pow(2,-14)*(E/1024):f===31?E?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,f-15)*(1+E/1024)}function Ws(o,a,f,E,g,P,M,L,A,I=.5){const K=A?A.length:M.length/8,q=[],G=[];for(let Y=0;Y<K;Y++){const ne=(A?A[Y]:Y)*8,F=M[ne]-o,J=M[ne+1]-a,N=M[ne+2]-f,he=F*E+J*g+N*P;if(he<=0||!(L[ne+7]>>>16&1))continue;const fe=L[ne+4],me=Wt(fe&65535),le=Wt(fe>>>16&65535),ue=3*Math.max(me,le),Be=F-he*E,ee=J-he*g,de=N-he*P;if(Be*Be+ee*ee+de*de>ue*ue)continue;const ve=Wt(L[ne+3]&65535);if(ve<1/255)continue;const Le=L[ne+5],Ae=L[ne+6];let Z=Wt(Le&65535),W=Wt(Le>>>16&65535),O=Wt(Ae&65535),xe=Wt(Ae>>>16&65535);const Ce=Math.hypot(Z,W,O,xe)||1;Z/=Ce,W/=Ce,O/=Ce,xe/=Ce;const Ve=1-2*(O*O+xe*xe),Ge=2*(W*O+Z*xe),Fe=2*(W*xe-Z*O),ce=2*(W*O-Z*xe),ye=1-2*(W*W+xe*xe),Ee=2*(O*xe+Z*W),T=2*(W*xe+Z*O),V=2*(O*xe-Z*W),v=1-2*(W*W+O*O),i=E*T+g*V+P*v;if(Math.abs(i)<1e-6)continue;const h=(F*T+J*V+N*v)/i;if(!(h>0))continue;const u=h*E-F,b=h*g-J,x=h*P-N,k=(u*Ve+b*Ge+x*Fe)/(me||1e-6),S=(u*ce+b*ye+x*Ee)/(le||1e-6),r=k*k+S*S;if(r>9)continue;const m=Math.min(.99,ve*Math.exp(-.5*r));m<1/255||(q.push(h),G.push(m))}if(q.length===0)return null;const X=q.map((Y,Q)=>Q).sort((Y,Q)=>q[Y]-q[Q]);let oe=1;for(const Y of X)if(oe*=1-G[Y],oe<I)return q[Y];return null}function js(o,a,f){const E=(o-f.viewport[0]*.5)/f.focal[0],g=-((a-f.viewport[1]*.5)/f.focal[1]),P=f.rotation;let M=E*P[0]+g*P[1]+P[2],L=E*P[4]+g*P[5]+P[6],A=E*P[8]+g*P[9]+P[10];const I=Math.hypot(M,L,A)||1;return[M/I,L/I,A/I]}function Gc(o,a,f,E,g,P){const[M,L,A]=js(o,a,E),I=E.position[0],K=E.position[1],q=E.position[2],G=new Uint32Array(g.buffer,g.byteOffset,g.length);let X=Ws(I,K,q,M,L,A,g,G,null,.5);return X===null&&(X=Ws(I,K,q,M,L,A,g,G,null,.8)),X===null?null:[I+X*M,K+X*L,q+X*A]}function Uc(o,a){const f=o.viewport[0],E=o.viewport[1],g=new Uint32Array(a.buffer,a.byteOffset,a.length),P=o.position[0],M=o.position[1],L=o.position[2],[A,I,K]=js(f*.5,E*.5,o),q=.06*Math.max(f,E),G=(q+2)/o.focal[0],X=a.length/8,oe=[];for(let F=0;F<X;F++){const J=F*8,N=a[J]-P,he=a[J+1]-M,fe=a[J+2]-L,me=N*A+he*I+fe*K;if(me<=0)continue;const le=g[J+4],ue=3*Math.max(Wt(le&65535),Wt(le>>>16&65535)),Be=N-me*A,ee=he-me*I,de=fe-me*K,ve=me*G+ue;Be*Be+ee*ee+de*de<=ve*ve&&oe.push(F)}if(oe.length===0)return null;const Y=Int32Array.from(oe),Q=[],ne=5;for(let F=0;F<ne;F++)for(let J=0;J<ne;J++){const N=f*.5+(J-(ne-1)/2)/((ne-1)/2)*q,he=E*.5+(F-(ne-1)/2)/((ne-1)/2)*q,[fe,me,le]=js(N,he,o),ue=Ws(P,M,L,fe,me,le,a,g,Y,.5);ue!==null&&Q.push(ue*(fe*A+me*I+le*K))}return Q.length<3?null:(Q.sort((F,J)=>F-J),Q[Q.length>>1])}function Gi(o){const a=new Uint8Array(o),f=new TextDecoder().decode(a.subarray(0,8));if(f!==zi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const E=new DataView(o),g=E.getUint32(8,!0),P=12,M=20;let L=null,A=null,I=null;for(let K=0;K<g;K++){const q=P+K*M,G=E.getUint32(q+0,!0),X=Number(E.getBigUint64(q+4,!0)),oe=Number(E.getBigUint64(q+12,!0)),Y=a.slice(X,X+oe).buffer;G===Ac||G===Dc||G===zc?L=Y:G===Lc?A=Y:(G===Ic||G===Rc)&&(I=Y)}if(L===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:L,camerasBuffer:A,atlasBuffer:I}}async function xi(o,a){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const E=(()=>{const L=f.headers.get("content-length");return L&&parseInt(L,10)||void 0})(),g=(M=f.body)==null?void 0:M.getReader();let P;if(!g)P=await f.arrayBuffer(),a&&a(P.byteLength,E,0);else{const L=[];let A=0,I=performance.now(),K=0;for(;;){const{done:X,value:oe}=await g.read();if(X)break;L.push(oe),A+=oe.byteLength;const Y=performance.now();if(Y-I>=150&&a){const Q=(A-K)/((Y-I)/1e3);a(A,E,Q),I=Y,K=A}}const q=new Uint8Array(A);let G=0;for(const X of L)q.set(X,G),G+=X.byteLength;P=q.buffer,a&&a(A,E,0)}return P.byteLength>=8&&new TextDecoder().decode(new Uint8Array(P,0,8))===zi?{bundle:Gi(P),rawPly:null}:{bundle:null,rawPly:P}}function Vc(o){return new Promise(a=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var E;return a(((E=f.files)==null?void 0:E[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Oc(o,a,f){const E=document.getElementById("ui-panel-container"),g=document.getElementById("load-button"),P=document.getElementById("quick-links");g&&(g.onclick=async()=>{const I=await Vc(".ply,.bitymi");if(I)if(E&&(E.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const K=await I.arrayBuffer(),{pcBuffer:q}=Gi(K),G=new File([q],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),X=await Os(G,o);a(X)}else{const K=await Os(I,o);a(K)}}),P&&(P.innerHTML="");const M=new URLSearchParams(window.location.search),L=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");L&&(E&&(E.style.display="none"),f(L,A))}async function Fc(o,a,f,E){const g=new qs(o,f),P=new Cc(g);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const L=typeof window<"u"&&window.parent!==window,A={pos:new Float32Array(3),rot:new Float32Array(16)};if(L){window.addEventListener("message",Z=>{const W=Z.data;if(!(!W||W.type!=="halloumi_sync_pose")&&!(!Array.isArray(W.position)||W.position.length!==3)&&!(!Array.isArray(W.rotation)||W.rotation.length!==16)){for(let O=0;O<3;O++)g.position[O]=W.position[O];for(let O=0;O<16;O++)g.rotation[O]=W.rotation[O];g.update_buffer(),P.resetToCamera();for(let O=0;O<3;O++)A.pos[O]=g.position[O];for(let O=0;O<16;O++)A.rot[O]=g.rotation[O]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const I=()=>{if(!L)return;const Z=g.position,W=g.rotation;let O=!1;for(let xe=0;xe<3;xe++)if(Math.abs(Z[xe]-A.pos[xe])>1e-6){O=!0;break}if(!O){for(let xe=0;xe<16;xe++)if(Math.abs(W[xe]-A.rot[xe])>1e-6){O=!0;break}}if(O){for(let xe=0;xe<3;xe++)A.pos[xe]=Z[xe];for(let xe=0;xe<16;xe++)A.rot[xe]=W[xe];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Z[0],Z[1],Z[2]],rotation:Array.from(W)},"*")}catch{}}},K="rgba8unorm";a.configure({device:f,format:K,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let q=null,G=null;const X=()=>{g.on_update_canvas(),q!==null&&En(o.width,o.height,f,q.render_settings_buffer),G!==null&&G()};new ResizeObserver(()=>{const Z=Math.max(.25,de.render_scale),W=Math.max(1,Math.ceil(Z*o.clientWidth)),O=Math.max(1,Math.ceil(Z*o.clientHeight));o.width===W&&o.height===O||(o.width=W,o.height=O,X())}).observe(o);let Y=0,Q=0;const ne=()=>{(o.width!==Y||o.height!==Q)&&(Y=o.width,Q=o.height,X())},F=new URLSearchParams(window.location.search);let N=F.get("animation")==="1";P.enabled=!N;const he=F.get("camera_url"),fe=F.get("bfc"),me=fe==="1"||fe==="true",le=F.get("bfc_cos"),ue=le!==null?Number(le):NaN,Be=Number.isFinite(ue)?ue:2,ee=Math.max(1,window.devicePixelRatio||1),de={gaussian_scaling:1,sh_bias:.5,animate:N,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:me,bfc_cos:Be,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,fetch_by_id:!0,render_scale:1},ve=new Zl.Pane({title:"Config",expanded:!0});ve.addInput(de,"animate",{label:"Animate"}).on("change",Z=>{const W=N;N=Z.value,P.enabled=!Z.value,!W&&N&&Le.value&&Le.value.onAnimateStart(),W&&!N&&Le.value&&Le.value.onAnimateStop()}),ve.addInput(de,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};Oc(f,Z=>Ae(Z,[],null),async(Z,W)=>{let O=W??he,xe,Ce=null;const Ve=Z.toLowerCase();if(Ve.endsWith(".bitymi")||Ve.includes(".bitymi?")){Hs("downloading bundle ...");try{const{bundle:Ee}=await xi(Z,(V,v,i)=>{const h=V/1048576,u=v?v/(1024*1024):void 0,b=i/(1024*1024),x=v?Math.min(99,Math.floor(V/v*100)):void 0,k=u?`total ${u.toFixed(1)} MB`:"total -- MB",S=u&&x!==void 0?`${h.toFixed(1)} MB downloaded (${x}%)`:`${h.toFixed(1)} MB downloaded`,r=`${b.toFixed(2)} MB/s`;jt(`downloading bundle ...
${k}, ${S}
${r}`)});if(!Ee)throw new Error("Expected a .bitymi bundle");jt("parsing PLY ...");const T=new File([Ee.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(xe=await Os(T,f),!O&&Ee.camerasBuffer&&(O=URL.createObjectURL(new Blob([Ee.camerasBuffer],{type:"application/json"}))),Ee.atlasBuffer){const V=Ee.atlasBuffer.byteLength/1048576;jt(`uploading atlas ...
${V.toFixed(1)} MB BC7`);try{const v=oi(Ee.atlasBuffer);Ce=ai(f,v,!0)}catch(v){console.warn("[atlas] failed to parse/upload atlas:",v)}}}catch(Ee){throw Wn(),Ee}}else xe=await Hl(Z,f);let Ge=null,Fe="";const ce=F.get("atlas2");if(ce)try{const{bundle:Ee}=await xi(ce,(T,V)=>{jt(`downloading second atlas ...
${(T/1048576).toFixed(1)}${V?` / ${(V/1048576).toFixed(1)}`:""} MB`)});if(!(Ee!=null&&Ee.atlasBuffer))throw new Error("second bundle has no atlas chunk");jt("uploading second atlas ..."),Ge=ai(f,oi(Ee.atlasBuffer),!0),Ge||(Fe="second atlas: format unsupported on this device")}catch(Ee){console.warn("[atlas2] failed:",Ee),Fe=`second atlas failed: ${Ee}`}const ye=O?await vc(O):[];ye.length>0&&g.set_preset(ye[0]),Ae(xe,ye,Ce,Ge,Fe)});function Ae(Z,W=[],O=null,xe=null,Ce=""){const Ve=[(Z.bbox.min[0]+Z.bbox.max[0])/2,(Z.bbox.min[1]+Z.bbox.max[1])/2,(Z.bbox.min[2]+Z.bbox.max[2])/2];P.setBbox(Z.bbox.min,Z.bbox.max),.5*Math.sqrt((Z.bbox.max[0]-Z.bbox.min[0])**2+(Z.bbox.max[1]-Z.bbox.min[1])**2+(Z.bbox.max[2]-Z.bbox.min[2])**2);function Ge(z,H){const ie=Gc(z,H,o,g,Z.surfel_data);ie&&(P.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function Fe(){const z=Uc(g,Z.surfel_data);if(z!==null&&z>.001){P.setOrbitDepth(z);return}const H=g.rotation,ie=H[2],pe=H[6],ke=H[10],_e=(Z.centroid[0]-g.position[0])*ie+(Z.centroid[1]-g.position[1])*pe+(Z.centroid[2]-g.position[2])*ke;_e>.001&&P.setOrbitDepth(_e)}if(W.length===0){const z=Z.bbox.max[0]-Z.bbox.min[0],H=Z.bbox.max[1]-Z.bbox.min[1],ie=Z.bbox.max[2]-Z.bbox.min[2],ke=.5*Math.sqrt(z*z+H*H+ie*ie)*.5;R.set(Ve[0]-ke,Ve[1]-ke,Ve[2]-ke,g.position);const _e=R.create(ke,ke,ke);R.normalize(_e,_e);const be=R.create(0,1,0),Se=R.create();R.cross(be,_e,Se),R.normalize(Se,Se);const Ke=R.create();R.cross(_e,Se,Ke);const ft=Tt.create(Se[0],Ke[0],_e[0],Se[1],Ke[1],_e[1],Se[2],Ke[2],_e[2]);ht.fromMat3(ft,g.rotation),g.update_buffer()}P.setCenter(R.create(Z.centroid[0],Z.centroid[1],Z.centroid[2]));const ce=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),ye="halloumi.fetch_by_id";let Ee=null;try{const z=localStorage.getItem(ye);(z==="0"||z==="1")&&(Ee=z==="1")}catch{}const T=F.get("byid"),V={fetchById:T!==null?T==="1":Ee!==null?Ee:!ce,octBound:F.get("oct")==="1",acc16:F.get("acc16")==="1"},v=new fc(Z,f,K,g.uniform_buffer,E,O,V),i=F.get("surfel_math");de.surfel_math=i==="raysplat"||i==="centred"?i:F.get("raysplat")==="1"?"raysplat":"conic",de.hyp_legacy=F.get("hyp_legacy")==="1",qn({hypLegacy:de.hyp_legacy,raysplat:de.surfel_math==="raysplat",centred:de.surfel_math==="centred"},f,v.render_settings_buffer),de.legacy_renderer=F.get("legacy")==="1",de.legacy_renderer&&v.setLegacyRenderer(!0),de.fetch_by_id=V.fetchById,console.log(`[render_2dgs] fetch_by_id=${V.fetchById} (source: ${T!==null?"?byid":Ee!==null?"remembered":`handheld=${ce}`})`),q=v,En(o.width,o.height,f,v.render_settings_buffer),de.atlas_enabled=O!==null;{const z=Z.surfel_data,H=z.length/8;let ie=0,pe=0,ke=0;for(let be=0;be<H;be++)ie+=z[be*8],pe+=z[be*8+1],ke+=z[be*8+2];const _e=H>0?[ie/H,pe/H,ke/H]:[0,0,0];v.setBfcParams(de.bfc_cos,_e),qn({bfc:de.bfc},f,v.render_settings_buffer),console.log(`[bfc] flag=${de.bfc} cos=${de.bfc_cos} centroid=(${_e[0].toFixed(3)}, ${_e[1].toFixed(3)}, ${_e[2].toFixed(3)})`)}let h=!1;const u=(()=>{if(O!==null)return`${O.meta.format===2?"BC7":O.meta.format===3?"ASTC 4×4":O.meta.format===7?"BC7 codebook gather (typeD)":`format=${O.meta.format}`} ${O.meta.width}×${O.meta.height}, ${O.meta.n_layers} layers`;const z=f.features.has("texture-compression-bc"),H=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(z?["BC7"]:[]).concat(H?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",u),mi(Z.sh_bias,f,v.render_settings_buffer),_i(de.gaussian_scaling,f,v.render_settings_buffer),de.sh_bias=Z.sh_bias;const b=Z.num_points.toLocaleString(),x={stats:`${b} surfels · -- fps`};ve.addMonitor(x,"stats",{label:"Stats",interval:200});const k=.4,S=3,r=.3;let m=null,d=0,p=0;const l=dt.create(),_=Tt.create();let y=W.length>0?0:-1;const w={view:W.length>0?`${y+1} / ${W.length}: ${W[y].img_name??y}`:"— no presets —"},B=document.createElement("span");function U(z){const H=Tt.create(z[0],z[1],z[2],z[4],z[5],z[6],z[8],z[9],z[10]);return dt.fromMat(H)}function j(z,H){m={fromPos:R.clone(g.position),toPos:R.clone(z.position),fromQuat:dt.normalize(U(g.rotation)),toQuat:dt.normalize(U(z.rotation)),target:z,t:0,duration:Math.max(.01,H)}}const ae=(z,H=!0)=>{if(W.length===0)return;y=(z%W.length+W.length)%W.length;const ie=W[y];H?j(ie,k):(g.set_preset(ie),P.resetToCamera(),Fe()),w.view=`${y+1} / ${W.length}: ${W[y].img_name??y}`,B.textContent=w.view};if(W.length>0){const z=ve.addSeparator(),H=document.createElement("div");H.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ie=(ke,_e,be)=>{const Se=document.createElement("button");return Se.className="tp-btnv_b",Se.textContent=ke,Se.title=_e,Se.style.cssText="flex:0 0 34px;height:24px;padding:0;",Se.addEventListener("click",be),Se};B.textContent=w.view,B.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",H.appendChild(ie("◀","previous view (←)",()=>ae(y-1))),H.appendChild(B),H.appendChild(ie("▶","next view (→)",()=>ae(y+1))),(ve.element.querySelector(".tp-rotv_c")??ve.element).insertBefore(H,z.element),z.dispose()}const re=W.length>0?Ii(W,{tiltDownDeg:15,alignFirst:!0}):null,se=re?Bc(W,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ge=0;const Me=12;Le.value={onAnimateStart:()=>{ge=0},onAnimateStop:()=>{P.resetToCamera(),Fe()}},ve.addInput(de,"render_scale",{label:"Render scale",min:.25,max:ee,step:.25}).on("change",z=>{const H=Math.max(.25,z.value),ie=Math.max(1,Math.ceil(H*o.clientWidth)),pe=Math.max(1,Math.ceil(H*o.clientHeight));(o.width!==ie||o.height!==pe)&&(o.width=ie,o.height=pe,X())});const we={res:""},Pe=()=>{const z=o.width*o.height/1e6;we.res=`${o.width}×${o.height}  (${z.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${ee.toFixed(2)} · native ${Math.round(o.clientWidth*ee)}×${Math.round(o.clientHeight*ee)}`};Pe(),G=Pe,ve.addMonitor(we,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ve.addInput(de,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",z=>_i(z.value,f,v.render_settings_buffer)),ve.addInput(de,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",z=>mi(z.value,f,v.render_settings_buffer)),ve.addInput(de,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",z=>{v.bgColor=[z.value.r,z.value.g,z.value.b,z.value.a]});const Re=z=>z===null?"":z.meta.format===3||z.meta.format===8||z.meta.format===10?" (ASTC)":" (BC7)";let Ie=Re(O);const qe=ve.addInput(de,"atlas_enabled",{label:`Texture${Ie}`}).on("change",z=>{v.setAtlasEnabled(z.value),je()}),$e=document.createElement("button");$e.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const je=()=>{$e.textContent=`Texture${Ie}: ${de.atlas_enabled?"ON":"OFF"}`,$e.style.borderColor=de.atlas_enabled?"#f0b060":"#444",$e.style.color=de.atlas_enabled?"#f0b060":"#bbb"},Xe=()=>{de.atlas_enabled=!de.atlas_enabled,v.setAtlasEnabled(de.atlas_enabled),qe.refresh(),je()};if($e.title="toggle the baked texture (T)",$e.addEventListener("click",Xe),O&&document.body.appendChild($e),je(),O&&(xe||Ce))if(xe){const z={};z[`A${Re(O)} · bundle`]="A",z[`B${Re(xe)} · atlas2`]="B";const H={atlas:"A"};ve.addInput(H,"atlas",{label:"Atlas source",options:z}).on("change",ie=>{const pe=ie.value==="B"?xe:O;v.setAtlas(pe),Ie=Re(pe),qe.label=`Texture${Ie}`,je(),console.log(`[atlas2] now sampling ${ie.value}${Ie}`)})}else{const z={note:Ce};ve.addMonitor(z,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const st=O!==null&&(O.meta.probe_mode|0)>0;if(v.hasMips&&st)v.setMipMode(de.mips),ve.addInput(de,"mips",{label:"Mips (trilinear)"}).on("change",z=>v.setMipMode(z.value));else if(v.hasMips){const z=F.get("mipbias"),H={mode:z==="0"||z==="1"||z==="2"?z:"off"},ie=pe=>{pe==="off"?v.setMipMode(!1):(v.setMipLodBias(Number(pe)),v.setMipMode(!0)),console.log(`[mips] ${pe==="off"?"off (level 0 only)":`on, bias ${pe}`}`)};ie(H.mode),ve.addInput(H,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",pe=>ie(pe.value))}const rt=ve.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});rt.addInput(de,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",z=>qn({raysplat:z.value==="raysplat",centred:z.value==="centred"},f,v.render_settings_buffer));const tt=globalThis.__gpuAdapterInfo??{},at={s:`${tt.vendor??"?"} / ${tt.architecture??"?"}
${tt.device||tt.description||"?"}`};rt.addMonitor(at,"s",{label:"GPU",multiline:!0,lineCount:2}),rt.addInput(de,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",z=>qn({hypLegacy:z.value},f,v.render_settings_buffer)),ve.addInput(de,"legacy_renderer",{label:"Legacy renderer"}).on("change",z=>v.setLegacyRenderer(z.value)),ve.addInput(de,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",z=>{v.setFetchById(z.value);try{localStorage.setItem("halloumi.fetch_by_id",z.value?"1":"0")}catch{}});const nt={aspect:"canvas"},Ye=ve.addFolder({title:"📸 Screenshot",expanded:!1});Ye.addInput(nt,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const He={s:"pick a size to capture"};Ye.addMonitor(He,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const We=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Ze=null;function Qe(z){let H;if(nt.aspect==="canvas")H=o.width/o.height;else{const[be,Se]=nt.aspect.split(":").map(Number);H=be/Se}const ie=f.limits.maxTextureDimension2D;let pe,ke;if(z==="canvas"&&nt.aspect==="canvas")pe=o.width,ke=o.height;else{const be=z==="canvas"?Math.max(o.width,o.height):z;H>=1?(pe=be,ke=Math.round(be/H)):(ke=be,pe=Math.round(be*H))}const _e=Math.min(1,ie/Math.max(pe,ke));return pe=Math.max(2,Math.round(pe*_e)&-2),ke=Math.max(2,Math.round(ke*_e)&-2),[pe,ke]}function pt(z,H){const ie=URL.createObjectURL(z),pe=document.createElement("a");pe.href=ie,pe.download=H,document.body.appendChild(pe),pe.click(),pe.remove(),setTimeout(()=>URL.revokeObjectURL(ie),1e4)}async function it(z,H){var be;const ie=(z.size/1048576).toFixed(1),pe=window;if(typeof pe.showSaveFilePicker=="function")try{const Se=await pe.showSaveFilePicker({suggestedName:H,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Ke=await Se.createWritable();return await Ke.write(z),await Ke.close(),`saved ${Se.name??H} (${ie} MB) where you chose`}catch(Se){if((Se==null?void 0:Se.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const ke=new File([z],H,{type:"image/png"}),_e=navigator;if(_e.share&&((be=_e.canShare)!=null&&be.call(_e,{files:[ke]})))try{return await _e.share({files:[ke],title:H}),`shared ${H} (${ie} MB) via share sheet`}catch(Se){if((Se==null?void 0:Se.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return pt(z,H),`downloaded ${H} (${ie} MB) to your browser's Downloads folder`}async function Rt(z){if(h)return;const[H,ie]=Qe(z);He.s=`rendering ${H}×${ie}…`;const pe=o.width,ke=o.height;g.setRenderSize(H,ie),En(H,ie,f,v.render_settings_buffer);const _e=f.createTexture({size:[H,ie,1],format:K,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),be=Math.ceil(H*4/256)*256,Se=f.createBuffer({size:be*ie,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Ke=f.createCommandEncoder({label:"screenshot"});v.frame(Ke,_e.createView(),!1),Ke.copyTextureToBuffer({texture:_e},{buffer:Se,bytesPerRow:be,rowsPerImage:ie},[H,ie,1]),f.queue.submit([Ke.finish()]),g.clearRenderSize(),En(pe,ke,f,v.render_settings_buffer);try{await Se.mapAsync(GPUMapMode.READ);const ft=new Uint8Array(Se.getMappedRange()),gt=new Uint8ClampedArray(H*ie*4);for(let vt=0;vt<ie;vt++)gt.set(ft.subarray(vt*be,vt*be+H*4),vt*H*4);for(let vt=3;vt<gt.length;vt+=4)gt[vt]=255;Se.unmap();const St=document.createElement("canvas");St.width=H,St.height=ie,St.getContext("2d").putImageData(new ImageData(gt,H,ie),0,0);const Et=await new Promise((vt,Dn)=>St.toBlob(Dt=>Dt?vt(Dt):Dn(new Error("toBlob failed")),"image/png")),At=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),lt=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),rn=`${At}_${H}x${ie}_${lt}.png`;Ze={blob:Et,name:rn},He.s=await it(Et,rn)}catch(ft){console.error("[screenshot]",ft),He.s=`failed: ${ft}`}finally{Se.destroy(),_e.destroy()}}{const z=document.createElement("div");z.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const H=(pe,ke,_e)=>{const be=document.createElement("button");be.className="tp-btnv_b",be.textContent=pe,be.title=ke,be.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",be.addEventListener("click",_e),z.appendChild(be)};H("Canvas","current canvas size",()=>{Rt("canvas")});for(const[pe,ke]of We)H(pe,`${ke} px long edge`,()=>{Rt(ke)});(Ye.element.querySelector(".tp-fldv_c")??Ye.element).appendChild(z)}Ye.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Ze){He.s="nothing captured yet";return}pt(Ze.blob,Ze.name),He.s=`downloaded ${Ze.name} to your browser's Downloads folder`}),ve.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(W.length>0)g.set_preset(W[0]);else{const z=Z.bbox.max[0]-Z.bbox.min[0],H=Z.bbox.max[1]-Z.bbox.min[1],ie=Z.bbox.max[2]-Z.bbox.min[2],ke=.5*Math.sqrt(z*z+H*H+ie*ie)*.5;R.set(Ve[0]-ke,Ve[1]-ke,Ve[2]-ke,g.position);const _e=R.create(ke,ke,ke);R.normalize(_e,_e);const be=R.create();R.cross(R.create(0,1,0),_e,be),R.normalize(be,be);const Se=R.create();R.cross(_e,be,Se);const Ke=Tt.create(be[0],Se[0],_e[0],be[1],Se[1],_e[1],be[2],Se[2],_e[2]);ht.fromMat3(Ke,g.rotation),g.update_buffer()}P.resetToCamera(),Fe()});const bt={result:"— click Benchmark —"},Ct=ve.addMonitor(bt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Ct.hidden=!0;const Bt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Kt(){const H=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(Bt))if(H.startsWith(ie))return ie;return null}const Pt=document.createElement("div");Pt.id="bench-overlay",Pt.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Pt);function Ut(z,H,ie){const pe=Math.floor(H/Math.max(1,ie)*100),ke=32,_e=Math.floor(H/Math.max(1,ie)*ke),be="█".repeat(_e)+"░".repeat(ke-_e);Pt.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${z}</div><div>[${be}] ${pe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${H} / ${ie} frames · offscreen · pipelined · no vsync</div>`,Pt.style.display="block"}function _n(){Pt.style.display="none"}async function Ht(z=10,H=200){if(h)return;if(W.length===0){bt.result="no cameras to benchmark";return}h=!0;const ie=N,pe=de.animate,ke=new Float32Array(g.position),_e=new Float32Array(g.rotation);N=!1,de.animate=!1,ve.refresh(),m=null,P.enabled=!1;const be=Kt(),Se=be?Bt[be]:null,Ke=(Se==null?void 0:Se.w)??o.width,ft=(Se==null?void 0:Se.h)??o.height,gt=(Se==null?void 0:Se.fovY)??g.getFov(),St=be?`${be} · ${Ke>=4e3/4+500?"images_4":"images_2"}`:"custom",Et=o.width,At=o.height,lt=g.getFov();o.width=Ke,o.height=ft,g.setFov(gt),En(Ke,ft,f,v.render_settings_buffer);const rn=f.createTexture({size:[Ke,ft,1],format:K,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),vt=rn.createView(),Dn=()=>{const ct=f.createCommandEncoder();v.frame(ct,vt,!1),f.queue.submit([ct.finish()])},Dt=()=>new Promise(ct=>setTimeout(ct,0)),Lt=20,Vt=async(ct,Zt)=>{let Ot=0,It=0;for(Ut(Zt,0,ct),await Dt();It<ct;){const gn=Math.min(Lt,ct-It),Gt=performance.now();for(let Ln=0;Ln<gn;Ln++)g.set_preset(W[(It+Ln)%W.length]),Dn();await f.queue.onSubmittedWorkDone();const Jn=performance.now();Ot+=Jn-Gt,It+=gn,Ut(Zt,It,ct),await Dt()}return Ot};try{await Vt(z,"Warming up");const Zt=await Vt(H,"Benchmarking")/H,Ot=1e3/Zt,It=Z.num_points??Z.surfel_data.length/8,gn=(gt*180/Math.PI).toFixed(1),Gt=`${Ot.toFixed(1)} FPS  (${Zt.toFixed(2)} ms/frame)
${Ke}×${ft} · fovY ${gn}° · ${St}
${It.toLocaleString()} surfels · ${z}w+${H}b · pipelined`+(v.hasMips?` · ${v._mipMode?`mips bias ${v.mipLodBias}`:"mips off"}`:"");bt.result=Gt,Ct.hidden=!1,console.log("[bench]",Gt.replace(/\n/g,"  |  "))}catch(ct){console.error("[bench] failed:",ct),bt.result=`bench failed: ${ct}`,Ct.hidden=!1}finally{_n(),rn.destroy(),o.width=Et,o.height=At,g.setFov(lt),En(Et,At,f,v.render_settings_buffer),g.position.set(ke),g.rotation.set(_e),g.update_buffer(),P.enabled=!ie,N=ie,de.animate=pe,ve.refresh(),h=!1}}ve.addButton({title:"📊 Benchmark"}).on("click",()=>Ht());const mn=Math.PI/2,ot=new Set,Je=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Zn=z=>{const H=z.target;return!!H&&(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)},_s=()=>ot.has("ShiftLeft")||ot.has("ShiftRight");document.addEventListener("keyup",z=>{ot.delete(z.code)}),window.addEventListener("blur",()=>ot.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&ot.clear()});const kn=z=>{if(ot.size===0||de.animate)return;const H=_s()?3:1;let ie=0;ot.has("KeyX")&&(ie+=1),ot.has("KeyZ")&&(ie-=1),ie!==0&&(P.addRoll(ie*mn*H*z),m=null);const pe=g.rotation,ke=[pe[0],pe[4],pe[8]],_e=[pe[1],pe[5],pe[9]],be=[pe[2],pe[6],pe[10]],Se=P.center,ft=(P.sceneRadius??Math.max(.05,R.distance(g.position,Se)))*.5*H*z;let gt=0,St=0,Et=0;if(ot.has("KeyW")&&(Et+=1),ot.has("KeyS")&&(Et-=1),ot.has("KeyD")&&(gt+=1),ot.has("KeyA")&&(gt-=1),ot.has("KeyE")&&(St+=1),ot.has("KeyQ")&&(St-=1),!gt&&!St&&!Et)return;const At=[0,0,0];for(let lt=0;lt<3;lt++)At[lt]=(ke[lt]*gt+_e[lt]*St+be[lt]*Et)*ft;for(let lt=0;lt<3;lt++)g.position[lt]+=At[lt],Se[lt]+=At[lt];g.update_buffer(),m=null};document.addEventListener("keydown",z=>{if(Zn(z))return;const H=z.key,ie=H.toLowerCase();if(z.ctrlKey||z.metaKey||z.altKey){ot.clear();return}if(Je.includes(z.code)&&!(z.shiftKey&&z.code==="KeyD")){ot.add(z.code),z.preventDefault();return}if(ie==="t"){Xe();return}if(H>="0"&&H<="9"&&W.length>0){const pe=parseInt(H);pe<W.length&&ae(pe)}else H==="ArrowLeft"||H==="PageUp"?(ae(y-1),z.preventDefault()):H==="ArrowRight"||H==="PageDown"?(ae(y+1),z.preventDefault()):z.shiftKey&&ie==="d"&&v.debugReadSortedIndices(30).catch(pe=>console.error("[DEBUG] readback failed:",pe))});function Xn(z,H){const ie=o.getBoundingClientRect(),pe=window.devicePixelRatio||1;return[(z-ie.left)*pe,(H-ie.top)*pe]}o.addEventListener("dblclick",z=>{const[H,ie]=Xn(z.clientX,z.clientY);Ge(H,ie)});let zt=0,Mn=0,Tn=0;o.addEventListener("pointerdown",z=>{if(z.pointerType!=="touch")return;const H=performance.now(),ie=H-zt,pe=z.clientX-Mn,ke=z.clientY-Tn;if(ie>0&&ie<300&&pe*pe+ke*ke<40*40){const[_e,be]=Xn(z.clientX,z.clientY);Ge(_e,be),zt=0}else zt=H,Mn=z.clientX,Tn=z.clientY});function Qn(){return M}let Bn=performance.now(),An=60,Yt=Promise.resolve(),vn=0;async function bn(){var ke;const z=performance.now(),H=Math.min((z-Bn)/1e3,.1);if(Bn=z,H>0){const _e=((ke=v.lastStageBreakdownMs)==null?void 0:ke.total)??0,be=_e>.5?1e3/_e:1/H;An=An*.9+be*.1,x.stats=`${b} surfels · ${Math.round(An)} fps`}if(h){requestAnimationFrame(bn);return}if(Qn()&&(m||N)&&(m=null,P.resetToCamera(),Fe(),N&&(N=!1,de.animate=!1,ve.refresh())),N&&de.animateMode==="circle"&&re){ge+=H/Me,ge>=1&&(ge-=1);const _e=Ri(re,ge);g.set_preset(_e),P.update(H);const be=f.createCommandEncoder();v.frame(be,a.getCurrentTexture().createView()),f.queue.submit([be.finish()]),vn++,vn===2&&Wn(),requestAnimationFrame(bn);return}if(m){m.t+=H/m.duration;const _e=Math.min(1,m.t),be=_e*_e*(3-2*_e);R.lerp(m.fromPos,m.toPos,be,g.position),dt.slerp(m.fromQuat,m.toQuat,be,l),Tt.fromQuat(l,_),ht.fromMat3(_,g.rotation),g.update_buffer(),m.t>=1&&(g.set_preset(m.target),m=null,N?W.length>0&&(d=r):(P.resetToCamera(),Fe()))}else if(N&&!Qn()){const _e=de.animateMode==="circle"&&se.length>0,be=_e?se:W;if(be.length!==0){if(d-=H,d<=0){const Ke=((_e?p:y)+1)%be.length;_e?p=Ke:y=Ke;const ft=_e?S/8:S;j(be[Ke],ft),_e||(w.view=`${y+1} / ${W.length}: ${W[y].img_name??y}`)}}}kn(H),P.update(H),I(),ne(),await Yt;const ie=f.createCommandEncoder(),pe=a.getCurrentTexture().createView();v.frame(ie,pe),f.queue.submit([ie.finish()]),Yt=f.queue.onSubmittedWorkDone(),vn++,vn===2&&Wn(),requestAnimationFrame(bn)}requestAnimationFrame(bn)}}(function(){let a="dev";for(const E of Array.from(document.querySelectorAll('script[type="module"]'))){const P=E.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(P){a=P[1];break}}const f=document.createElement("div");f.textContent="v "+a,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const P=document.querySelector("#title");P.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const P=document.querySelector("#title");P.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)");try{const P=o.info??{};globalThis.__gpuAdapterInfo={vendor:P.vendor??"?",architecture:P.architecture??"?",device:P.device??"?",description:P.description??"?",features:Array.from(o.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),E=document.querySelector("#webgpu-canvas");Nl(E!==null);const g=E.getContext("webgpu");Fc(E,g,f,a)})();
