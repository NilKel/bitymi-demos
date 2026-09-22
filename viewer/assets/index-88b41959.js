var Cl=Object.defineProperty;var El=(o,a,f)=>a in o?Cl(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f;var $=(o,a,f)=>(El(o,typeof a!="symbol"?a+"":a,f),f);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))k(w);new MutationObserver(w=>{for(const C of w)if(C.type==="childList")for(const M of C.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&k(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const C={};return w.integrity&&(C.integrity=w.integrity),w.referrerPolicy&&(C.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?C.credentials="include":w.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function k(w){if(w.ep)return;w.ep=!0;const C=f(w);fetch(w.href,C)}})();function kl(o,a){return class extends o{constructor(...f){super(...f),a(this)}}}const Ml=kl(Array,o=>o.fill(0));let ze=1e-6;function Bl(o){function a(x=0,E=0){const P=new o(2);return x!==void 0&&(P[0]=x,E!==void 0&&(P[1]=E)),P}const f=a;function k(x,E,P){const r=P??new o(2);return r[0]=x,r[1]=E,r}function w(x,E){const P=E??new o(2);return P[0]=Math.ceil(x[0]),P[1]=Math.ceil(x[1]),P}function C(x,E){const P=E??new o(2);return P[0]=Math.floor(x[0]),P[1]=Math.floor(x[1]),P}function M(x,E){const P=E??new o(2);return P[0]=Math.round(x[0]),P[1]=Math.round(x[1]),P}function L(x,E=0,P=1,r){const m=r??new o(2);return m[0]=Math.min(P,Math.max(E,x[0])),m[1]=Math.min(P,Math.max(E,x[1])),m}function A(x,E,P){const r=P??new o(2);return r[0]=x[0]+E[0],r[1]=x[1]+E[1],r}function I(x,E,P,r){const m=r??new o(2);return m[0]=x[0]+E[0]*P,m[1]=x[1]+E[1]*P,m}function K(x,E){const P=x[0],r=x[1],m=E[0],d=E[1],p=Math.sqrt(P*P+r*r),l=Math.sqrt(m*m+d*d),_=p*l,y=_&&ue(x,E)/_;return Math.acos(y)}function q(x,E,P){const r=P??new o(2);return r[0]=x[0]-E[0],r[1]=x[1]-E[1],r}const z=q;function X(x,E){return Math.abs(x[0]-E[0])<ze&&Math.abs(x[1]-E[1])<ze}function oe(x,E){return x[0]===E[0]&&x[1]===E[1]}function Y(x,E,P,r){const m=r??new o(2);return m[0]=x[0]+P*(E[0]-x[0]),m[1]=x[1]+P*(E[1]-x[1]),m}function Q(x,E,P,r){const m=r??new o(2);return m[0]=x[0]+P[0]*(E[0]-x[0]),m[1]=x[1]+P[1]*(E[1]-x[1]),m}function se(x,E,P){const r=P??new o(2);return r[0]=Math.max(x[0],E[0]),r[1]=Math.max(x[1],E[1]),r}function W(x,E,P){const r=P??new o(2);return r[0]=Math.min(x[0],E[0]),r[1]=Math.min(x[1],E[1]),r}function J(x,E,P){const r=P??new o(2);return r[0]=x[0]*E,r[1]=x[1]*E,r}const N=J;function de(x,E,P){const r=P??new o(2);return r[0]=x[0]/E,r[1]=x[1]/E,r}function pe(x,E){const P=E??new o(2);return P[0]=1/x[0],P[1]=1/x[1],P}const fe=pe;function ae(x,E,P){const r=P??new o(3),m=x[0]*E[1]-x[1]*E[0];return r[0]=0,r[1]=0,r[2]=m,r}function ue(x,E){return x[0]*E[0]+x[1]*E[1]}function Te(x){const E=x[0],P=x[1];return Math.sqrt(E*E+P*P)}const ee=Te;function he(x){const E=x[0],P=x[1];return E*E+P*P}const ve=he;function Le(x,E){const P=x[0]-E[0],r=x[1]-E[1];return Math.sqrt(P*P+r*r)}const Ae=Le;function Z(x,E){const P=x[0]-E[0],r=x[1]-E[1];return P*P+r*r}const j=Z;function O(x,E){const P=E??new o(2),r=x[0],m=x[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(P[0]=r/d,P[1]=m/d):(P[0]=0,P[1]=0),P}function we(x,E){const P=E??new o(2);return P[0]=-x[0],P[1]=-x[1],P}function Ce(x,E){const P=E??new o(2);return P[0]=x[0],P[1]=x[1],P}const Ve=Ce;function Ge(x,E,P){const r=P??new o(2);return r[0]=x[0]*E[0],r[1]=x[1]*E[1],r}const Ne=Ge;function le(x,E,P){const r=P??new o(2);return r[0]=x[0]/E[0],r[1]=x[1]/E[1],r}const Pe=le;function ke(x=1,E){const P=E??new o(2),r=Math.random()*2*Math.PI;return P[0]=Math.cos(r)*x,P[1]=Math.sin(r)*x,P}function B(x){const E=x??new o(2);return E[0]=0,E[1]=0,E}function V(x,E,P){const r=P??new o(2),m=x[0],d=x[1];return r[0]=m*E[0]+d*E[4]+E[12],r[1]=m*E[1]+d*E[5]+E[13],r}function v(x,E,P){const r=P??new o(2),m=x[0],d=x[1];return r[0]=E[0]*m+E[4]*d+E[8],r[1]=E[1]*m+E[5]*d+E[9],r}function i(x,E,P,r){const m=r??new o(2),d=x[0]-E[0],p=x[1]-E[1],l=Math.sin(P),_=Math.cos(P);return m[0]=d*_-p*l+E[0],m[1]=d*l+p*_+E[1],m}function h(x,E,P){const r=P??new o(2);return O(x,r),J(r,E,r)}function u(x,E,P){const r=P??new o(2);return Te(x)>E?h(x,E,r):Ce(x,r)}function b(x,E,P){const r=P??new o(2);return Y(x,E,.5,r)}return{create:a,fromValues:f,set:k,ceil:w,floor:C,round:M,clamp:L,add:A,addScaled:I,angle:K,subtract:q,sub:z,equalsApproximately:X,equals:oe,lerp:Y,lerpV:Q,max:se,min:W,mulScalar:J,scale:N,divScalar:de,inverse:pe,invert:fe,cross:ae,dot:ue,length:Te,len:ee,lengthSq:he,lenSq:ve,distance:Le,dist:Ae,distanceSq:Z,distSq:j,normalize:O,negate:we,copy:Ce,clone:Ve,multiply:Ge,mul:Ne,divide:le,div:Pe,random:ke,zero:B,transformMat4:V,transformMat3:v,rotate:i,setLength:h,truncate:u,midpoint:b}}const Yr=new Map;function bi(o){let a=Yr.get(o);return a||(a=Bl(o),Yr.set(o,a)),a}function Tl(o){function a(l,_,y){const g=new o(3);return l!==void 0&&(g[0]=l,_!==void 0&&(g[1]=_,y!==void 0&&(g[2]=y))),g}const f=a;function k(l,_,y,g){const T=g??new o(3);return T[0]=l,T[1]=_,T[2]=y,T}function w(l,_){const y=_??new o(3);return y[0]=Math.ceil(l[0]),y[1]=Math.ceil(l[1]),y[2]=Math.ceil(l[2]),y}function C(l,_){const y=_??new o(3);return y[0]=Math.floor(l[0]),y[1]=Math.floor(l[1]),y[2]=Math.floor(l[2]),y}function M(l,_){const y=_??new o(3);return y[0]=Math.round(l[0]),y[1]=Math.round(l[1]),y[2]=Math.round(l[2]),y}function L(l,_=0,y=1,g){const T=g??new o(3);return T[0]=Math.min(y,Math.max(_,l[0])),T[1]=Math.min(y,Math.max(_,l[1])),T[2]=Math.min(y,Math.max(_,l[2])),T}function A(l,_,y){const g=y??new o(3);return g[0]=l[0]+_[0],g[1]=l[1]+_[1],g[2]=l[2]+_[2],g}function I(l,_,y,g){const T=g??new o(3);return T[0]=l[0]+_[0]*y,T[1]=l[1]+_[1]*y,T[2]=l[2]+_[2]*y,T}function K(l,_){const y=l[0],g=l[1],T=l[2],U=_[0],F=_[1],ce=_[2],re=Math.sqrt(y*y+g*g+T*T),te=Math.sqrt(U*U+F*F+ce*ce),xe=re*te,Me=xe&&ue(l,_)/xe;return Math.acos(Me)}function q(l,_,y){const g=y??new o(3);return g[0]=l[0]-_[0],g[1]=l[1]-_[1],g[2]=l[2]-_[2],g}const z=q;function X(l,_){return Math.abs(l[0]-_[0])<ze&&Math.abs(l[1]-_[1])<ze&&Math.abs(l[2]-_[2])<ze}function oe(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]}function Y(l,_,y,g){const T=g??new o(3);return T[0]=l[0]+y*(_[0]-l[0]),T[1]=l[1]+y*(_[1]-l[1]),T[2]=l[2]+y*(_[2]-l[2]),T}function Q(l,_,y,g){const T=g??new o(3);return T[0]=l[0]+y[0]*(_[0]-l[0]),T[1]=l[1]+y[1]*(_[1]-l[1]),T[2]=l[2]+y[2]*(_[2]-l[2]),T}function se(l,_,y){const g=y??new o(3);return g[0]=Math.max(l[0],_[0]),g[1]=Math.max(l[1],_[1]),g[2]=Math.max(l[2],_[2]),g}function W(l,_,y){const g=y??new o(3);return g[0]=Math.min(l[0],_[0]),g[1]=Math.min(l[1],_[1]),g[2]=Math.min(l[2],_[2]),g}function J(l,_,y){const g=y??new o(3);return g[0]=l[0]*_,g[1]=l[1]*_,g[2]=l[2]*_,g}const N=J;function de(l,_,y){const g=y??new o(3);return g[0]=l[0]/_,g[1]=l[1]/_,g[2]=l[2]/_,g}function pe(l,_){const y=_??new o(3);return y[0]=1/l[0],y[1]=1/l[1],y[2]=1/l[2],y}const fe=pe;function ae(l,_,y){const g=y??new o(3),T=l[2]*_[0]-l[0]*_[2],U=l[0]*_[1]-l[1]*_[0];return g[0]=l[1]*_[2]-l[2]*_[1],g[1]=T,g[2]=U,g}function ue(l,_){return l[0]*_[0]+l[1]*_[1]+l[2]*_[2]}function Te(l){const _=l[0],y=l[1],g=l[2];return Math.sqrt(_*_+y*y+g*g)}const ee=Te;function he(l){const _=l[0],y=l[1],g=l[2];return _*_+y*y+g*g}const ve=he;function Le(l,_){const y=l[0]-_[0],g=l[1]-_[1],T=l[2]-_[2];return Math.sqrt(y*y+g*g+T*T)}const Ae=Le;function Z(l,_){const y=l[0]-_[0],g=l[1]-_[1],T=l[2]-_[2];return y*y+g*g+T*T}const j=Z;function O(l,_){const y=_??new o(3),g=l[0],T=l[1],U=l[2],F=Math.sqrt(g*g+T*T+U*U);return F>1e-5?(y[0]=g/F,y[1]=T/F,y[2]=U/F):(y[0]=0,y[1]=0,y[2]=0),y}function we(l,_){const y=_??new o(3);return y[0]=-l[0],y[1]=-l[1],y[2]=-l[2],y}function Ce(l,_){const y=_??new o(3);return y[0]=l[0],y[1]=l[1],y[2]=l[2],y}const Ve=Ce;function Ge(l,_,y){const g=y??new o(3);return g[0]=l[0]*_[0],g[1]=l[1]*_[1],g[2]=l[2]*_[2],g}const Ne=Ge;function le(l,_,y){const g=y??new o(3);return g[0]=l[0]/_[0],g[1]=l[1]/_[1],g[2]=l[2]/_[2],g}const Pe=le;function ke(l=1,_){const y=_??new o(3),g=Math.random()*2*Math.PI,T=Math.random()*2-1,U=Math.sqrt(1-T*T)*l;return y[0]=Math.cos(g)*U,y[1]=Math.sin(g)*U,y[2]=T*l,y}function B(l){const _=l??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function V(l,_,y){const g=y??new o(3),T=l[0],U=l[1],F=l[2],ce=_[3]*T+_[7]*U+_[11]*F+_[15]||1;return g[0]=(_[0]*T+_[4]*U+_[8]*F+_[12])/ce,g[1]=(_[1]*T+_[5]*U+_[9]*F+_[13])/ce,g[2]=(_[2]*T+_[6]*U+_[10]*F+_[14])/ce,g}function v(l,_,y){const g=y??new o(3),T=l[0],U=l[1],F=l[2];return g[0]=T*_[0*4+0]+U*_[1*4+0]+F*_[2*4+0],g[1]=T*_[0*4+1]+U*_[1*4+1]+F*_[2*4+1],g[2]=T*_[0*4+2]+U*_[1*4+2]+F*_[2*4+2],g}function i(l,_,y){const g=y??new o(3),T=l[0],U=l[1],F=l[2];return g[0]=T*_[0]+U*_[4]+F*_[8],g[1]=T*_[1]+U*_[5]+F*_[9],g[2]=T*_[2]+U*_[6]+F*_[10],g}function h(l,_,y){const g=y??new o(3),T=_[0],U=_[1],F=_[2],ce=_[3]*2,re=l[0],te=l[1],xe=l[2],Me=U*xe-F*te,be=F*re-T*xe,ye=T*te-U*re;return g[0]=re+Me*ce+(U*ye-F*be)*2,g[1]=te+be*ce+(F*Me-T*ye)*2,g[2]=xe+ye*ce+(T*be-U*Me)*2,g}function u(l,_){const y=_??new o(3);return y[0]=l[12],y[1]=l[13],y[2]=l[14],y}function b(l,_,y){const g=y??new o(3),T=_*4;return g[0]=l[T+0],g[1]=l[T+1],g[2]=l[T+2],g}function x(l,_){const y=_??new o(3),g=l[0],T=l[1],U=l[2],F=l[4],ce=l[5],re=l[6],te=l[8],xe=l[9],Me=l[10];return y[0]=Math.sqrt(g*g+T*T+U*U),y[1]=Math.sqrt(F*F+ce*ce+re*re),y[2]=Math.sqrt(te*te+xe*xe+Me*Me),y}function E(l,_,y,g){const T=g??new o(3),U=[],F=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],F[0]=U[0],F[1]=U[1]*Math.cos(y)-U[2]*Math.sin(y),F[2]=U[1]*Math.sin(y)+U[2]*Math.cos(y),T[0]=F[0]+_[0],T[1]=F[1]+_[1],T[2]=F[2]+_[2],T}function P(l,_,y,g){const T=g??new o(3),U=[],F=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],F[0]=U[2]*Math.sin(y)+U[0]*Math.cos(y),F[1]=U[1],F[2]=U[2]*Math.cos(y)-U[0]*Math.sin(y),T[0]=F[0]+_[0],T[1]=F[1]+_[1],T[2]=F[2]+_[2],T}function r(l,_,y,g){const T=g??new o(3),U=[],F=[];return U[0]=l[0]-_[0],U[1]=l[1]-_[1],U[2]=l[2]-_[2],F[0]=U[0]*Math.cos(y)-U[1]*Math.sin(y),F[1]=U[0]*Math.sin(y)+U[1]*Math.cos(y),F[2]=U[2],T[0]=F[0]+_[0],T[1]=F[1]+_[1],T[2]=F[2]+_[2],T}function m(l,_,y){const g=y??new o(3);return O(l,g),J(g,_,g)}function d(l,_,y){const g=y??new o(3);return Te(l)>_?m(l,_,g):Ce(l,g)}function p(l,_,y){const g=y??new o(3);return Y(l,_,.5,g)}return{create:a,fromValues:f,set:k,ceil:w,floor:C,round:M,clamp:L,add:A,addScaled:I,angle:K,subtract:q,sub:z,equalsApproximately:X,equals:oe,lerp:Y,lerpV:Q,max:se,min:W,mulScalar:J,scale:N,divScalar:de,inverse:pe,invert:fe,cross:ae,dot:ue,length:Te,len:ee,lengthSq:he,lenSq:ve,distance:Le,dist:Ae,distanceSq:Z,distSq:j,normalize:O,negate:we,copy:Ce,clone:Ve,multiply:Ge,mul:Ne,divide:le,div:Pe,random:ke,zero:B,transformMat4:V,transformMat4Upper3x3:v,transformMat3:i,transformQuat:h,getTranslation:u,getAxis:b,getScaling:x,rotateX:E,rotateY:P,rotateZ:r,setLength:m,truncate:d,midpoint:p}}const Zr=new Map;function as(o){let a=Zr.get(o);return a||(a=Tl(o),Zr.set(o,a)),a}function Al(o){const a=bi(o),f=as(o);function k(i,h,u,b,x,E,P,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,h!==void 0&&(d[1]=h,u!==void 0&&(d[2]=u,b!==void 0&&(d[4]=b,x!==void 0&&(d[5]=x,E!==void 0&&(d[6]=E,P!==void 0&&(d[8]=P,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(i,h,u,b,x,E,P,r,m,d){const p=d??new o(12);return p[0]=i,p[1]=h,p[2]=u,p[3]=0,p[4]=b,p[5]=x,p[6]=E,p[7]=0,p[8]=P,p[9]=r,p[10]=m,p[11]=0,p}function C(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function M(i,h){const u=h??new o(12),b=i[0],x=i[1],E=i[2],P=i[3],r=b+b,m=x+x,d=E+E,p=b*r,l=x*r,_=x*m,y=E*r,g=E*m,T=E*d,U=P*r,F=P*m,ce=P*d;return u[0]=1-_-T,u[1]=l+ce,u[2]=y-F,u[3]=0,u[4]=l-ce,u[5]=1-p-T,u[6]=g+U,u[7]=0,u[8]=y+F,u[9]=g-U,u[10]=1-p-_,u[11]=0,u}function L(i,h){const u=h??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function A(i,h,u){const b=u??new o(12);return b[0]=i[0]*h,b[1]=i[1]*h,b[2]=i[2]*h,b[4]=i[4]*h,b[5]=i[5]*h,b[6]=i[6]*h,b[8]=i[8]*h,b[9]=i[9]*h,b[10]=i[10]*h,b}const I=A;function K(i,h,u){const b=u??new o(12);return b[0]=i[0]+h[0],b[1]=i[1]+h[1],b[2]=i[2]+h[2],b[4]=i[4]+h[4],b[5]=i[5]+h[5],b[6]=i[6]+h[6],b[8]=i[8]+h[8],b[9]=i[9]+h[9],b[10]=i[10]+h[10],b}function q(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const z=q;function X(i,h){return Math.abs(i[0]-h[0])<ze&&Math.abs(i[1]-h[1])<ze&&Math.abs(i[2]-h[2])<ze&&Math.abs(i[4]-h[4])<ze&&Math.abs(i[5]-h[5])<ze&&Math.abs(i[6]-h[6])<ze&&Math.abs(i[8]-h[8])<ze&&Math.abs(i[9]-h[9])<ze&&Math.abs(i[10]-h[10])<ze}function oe(i,h){return i[0]===h[0]&&i[1]===h[1]&&i[2]===h[2]&&i[4]===h[4]&&i[5]===h[5]&&i[6]===h[6]&&i[8]===h[8]&&i[9]===h[9]&&i[10]===h[10]}function Y(i){const h=i??new o(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function Q(i,h){const u=h??new o(12);if(u===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,u}const b=i[0*4+0],x=i[0*4+1],E=i[0*4+2],P=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2];return u[0]=b,u[1]=P,u[2]=d,u[4]=x,u[5]=r,u[6]=p,u[8]=E,u[9]=m,u[10]=l,u}function se(i,h){const u=h??new o(12),b=i[0*4+0],x=i[0*4+1],E=i[0*4+2],P=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],p=i[2*4+1],l=i[2*4+2],_=l*r-m*p,y=-l*P+m*d,g=p*P-r*d,T=1/(b*_+x*y+E*g);return u[0]=_*T,u[1]=(-l*x+E*p)*T,u[2]=(m*x-E*r)*T,u[4]=y*T,u[5]=(l*b-E*d)*T,u[6]=(-m*b+E*P)*T,u[8]=g*T,u[9]=(-p*b+x*d)*T,u[10]=(r*b-x*P)*T,u}function W(i){const h=i[0],u=i[0*4+1],b=i[0*4+2],x=i[1*4+0],E=i[1*4+1],P=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return h*(E*d-m*P)-x*(u*d-m*b)+r*(u*P-E*b)}const J=se;function N(i,h,u){const b=u??new o(12),x=i[0],E=i[1],P=i[2],r=i[4+0],m=i[4+1],d=i[4+2],p=i[8+0],l=i[8+1],_=i[8+2],y=h[0],g=h[1],T=h[2],U=h[4+0],F=h[4+1],ce=h[4+2],re=h[8+0],te=h[8+1],xe=h[8+2];return b[0]=x*y+r*g+p*T,b[1]=E*y+m*g+l*T,b[2]=P*y+d*g+_*T,b[4]=x*U+r*F+p*ce,b[5]=E*U+m*F+l*ce,b[6]=P*U+d*F+_*ce,b[8]=x*re+r*te+p*xe,b[9]=E*re+m*te+l*xe,b[10]=P*re+d*te+_*xe,b}const de=N;function pe(i,h,u){const b=u??Y();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function fe(i,h){const u=h??a.create();return u[0]=i[8],u[1]=i[9],u}function ae(i,h,u){const b=u??a.create(),x=h*4;return b[0]=i[x+0],b[1]=i[x+1],b}function ue(i,h,u,b){const x=b===i?i:q(i,b),E=u*4;return x[E+0]=h[0],x[E+1]=h[1],x}function Te(i,h){const u=h??a.create(),b=i[0],x=i[1],E=i[4],P=i[5];return u[0]=Math.sqrt(b*b+x*x),u[1]=Math.sqrt(E*E+P*P),u}function ee(i,h){const u=h??f.create(),b=i[0],x=i[1],E=i[2],P=i[4],r=i[5],m=i[6],d=i[8],p=i[9],l=i[10];return u[0]=Math.sqrt(b*b+x*x+E*E),u[1]=Math.sqrt(P*P+r*r+m*m),u[2]=Math.sqrt(d*d+p*p+l*l),u}function he(i,h){const u=h??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function ve(i,h,u){const b=u??new o(12),x=h[0],E=h[1],P=i[0],r=i[1],m=i[2],d=i[1*4+0],p=i[1*4+1],l=i[1*4+2],_=i[2*4+0],y=i[2*4+1],g=i[2*4+2];return i!==b&&(b[0]=P,b[1]=r,b[2]=m,b[4]=d,b[5]=p,b[6]=l),b[8]=P*x+d*E+_,b[9]=r*x+p*E+y,b[10]=m*x+l*E+g,b}function Le(i,h){const u=h??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=b,u[1]=x,u[2]=0,u[4]=-x,u[5]=b,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ae(i,h,u){const b=u??new o(12),x=i[0*4+0],E=i[0*4+1],P=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],p=Math.cos(h),l=Math.sin(h);return b[0]=p*x+l*r,b[1]=p*E+l*m,b[2]=p*P+l*d,b[4]=p*r-l*x,b[5]=p*m-l*E,b[6]=p*d-l*P,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Z(i,h){const u=h??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=b,u[6]=x,u[8]=0,u[9]=-x,u[10]=b,u}function j(i,h,u){const b=u??new o(12),x=i[4],E=i[5],P=i[6],r=i[8],m=i[9],d=i[10],p=Math.cos(h),l=Math.sin(h);return b[4]=p*x+l*r,b[5]=p*E+l*m,b[6]=p*P+l*d,b[8]=p*r-l*x,b[9]=p*m-l*E,b[10]=p*d-l*P,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function O(i,h){const u=h??new o(12),b=Math.cos(i),x=Math.sin(i);return u[0]=b,u[1]=0,u[2]=-x,u[4]=0,u[5]=1,u[6]=0,u[8]=x,u[9]=0,u[10]=b,u}function we(i,h,u){const b=u??new o(12),x=i[0*4+0],E=i[0*4+1],P=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],p=Math.cos(h),l=Math.sin(h);return b[0]=p*x-l*r,b[1]=p*E-l*m,b[2]=p*P-l*d,b[8]=p*r+l*x,b[9]=p*m+l*E,b[10]=p*d+l*P,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const Ce=Le,Ve=Ae;function Ge(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ne(i,h,u){const b=u??new o(12),x=h[0],E=h[1];return b[0]=x*i[0*4+0],b[1]=x*i[0*4+1],b[2]=x*i[0*4+2],b[4]=E*i[1*4+0],b[5]=E*i[1*4+1],b[6]=E*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function le(i,h){const u=h??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function Pe(i,h,u){const b=u??new o(12),x=h[0],E=h[1],P=h[2];return b[0]=x*i[0*4+0],b[1]=x*i[0*4+1],b[2]=x*i[0*4+2],b[4]=E*i[1*4+0],b[5]=E*i[1*4+1],b[6]=E*i[1*4+2],b[8]=P*i[2*4+0],b[9]=P*i[2*4+1],b[10]=P*i[2*4+2],b}function ke(i,h){const u=h??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function B(i,h,u){const b=u??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function V(i,h){const u=h??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function v(i,h,u){const b=u??new o(12);return b[0]=h*i[0*4+0],b[1]=h*i[0*4+1],b[2]=h*i[0*4+2],b[4]=h*i[1*4+0],b[5]=h*i[1*4+1],b[6]=h*i[1*4+2],b[8]=h*i[2*4+0],b[9]=h*i[2*4+1],b[10]=h*i[2*4+2],b}return{add:K,clone:z,copy:q,create:k,determinant:W,equals:oe,equalsApproximately:X,fromMat4:C,fromQuat:M,get3DScaling:ee,getAxis:ae,getScaling:Te,getTranslation:fe,identity:Y,inverse:se,invert:J,mul:de,mulScalar:I,multiply:N,multiplyScalar:A,negate:L,rotate:Ae,rotateX:j,rotateY:we,rotateZ:Ve,rotation:Le,rotationX:Z,rotationY:O,rotationZ:Ce,scale:Ne,scale3D:Pe,scaling:Ge,scaling3D:le,set:w,setAxis:ue,setTranslation:pe,translate:ve,translation:he,transpose:Q,uniformScale:B,uniformScale3D:v,uniformScaling:ke,uniformScaling3D:V}}const Xr=new Map;function Dl(o){let a=Xr.get(o);return a||(a=Al(o),Xr.set(o,a)),a}function Ll(o){const a=as(o);function f(r,m,d,p,l,_,y,g,T,U,F,ce,re,te,xe,Me){const be=new o(16);return r!==void 0&&(be[0]=r,m!==void 0&&(be[1]=m,d!==void 0&&(be[2]=d,p!==void 0&&(be[3]=p,l!==void 0&&(be[4]=l,_!==void 0&&(be[5]=_,y!==void 0&&(be[6]=y,g!==void 0&&(be[7]=g,T!==void 0&&(be[8]=T,U!==void 0&&(be[9]=U,F!==void 0&&(be[10]=F,ce!==void 0&&(be[11]=ce,re!==void 0&&(be[12]=re,te!==void 0&&(be[13]=te,xe!==void 0&&(be[14]=xe,Me!==void 0&&(be[15]=Me)))))))))))))))),be}function k(r,m,d,p,l,_,y,g,T,U,F,ce,re,te,xe,Me,be){const ye=be??new o(16);return ye[0]=r,ye[1]=m,ye[2]=d,ye[3]=p,ye[4]=l,ye[5]=_,ye[6]=y,ye[7]=g,ye[8]=T,ye[9]=U,ye[10]=F,ye[11]=ce,ye[12]=re,ye[13]=te,ye[14]=xe,ye[15]=Me,ye}function w(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,m){const d=m??new o(16),p=r[0],l=r[1],_=r[2],y=r[3],g=p+p,T=l+l,U=_+_,F=p*g,ce=l*g,re=l*T,te=_*g,xe=_*T,Me=_*U,be=y*g,ye=y*T,Ie=y*U;return d[0]=1-re-Me,d[1]=ce+Ie,d[2]=te-ye,d[3]=0,d[4]=ce-Ie,d[5]=1-F-Me,d[6]=xe+be,d[7]=0,d[8]=te+ye,d[9]=xe-be,d[10]=1-F-re,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function L(r,m,d){const p=d??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function A(r,m,d){const p=d??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const I=A;function K(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const q=K;function z(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function X(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function oe(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Y(r,m){const d=m??new o(16);if(d===r){let Re;return Re=r[1],r[1]=r[4],r[4]=Re,Re=r[2],r[2]=r[8],r[8]=Re,Re=r[3],r[3]=r[12],r[12]=Re,Re=r[6],r[6]=r[9],r[9]=Re,Re=r[7],r[7]=r[13],r[13]=Re,Re=r[11],r[11]=r[14],r[14]=Re,d}const p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],T=r[1*4+1],U=r[1*4+2],F=r[1*4+3],ce=r[2*4+0],re=r[2*4+1],te=r[2*4+2],xe=r[2*4+3],Me=r[3*4+0],be=r[3*4+1],ye=r[3*4+2],Ie=r[3*4+3];return d[0]=p,d[1]=g,d[2]=ce,d[3]=Me,d[4]=l,d[5]=T,d[6]=re,d[7]=be,d[8]=_,d[9]=U,d[10]=te,d[11]=ye,d[12]=y,d[13]=F,d[14]=xe,d[15]=Ie,d}function Q(r,m){const d=m??new o(16),p=r[0*4+0],l=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],T=r[1*4+1],U=r[1*4+2],F=r[1*4+3],ce=r[2*4+0],re=r[2*4+1],te=r[2*4+2],xe=r[2*4+3],Me=r[3*4+0],be=r[3*4+1],ye=r[3*4+2],Ie=r[3*4+3],Re=te*Ie,Oe=ye*xe,Ke=U*Ie,He=ye*F,nt=U*xe,Ye=te*F,Je=_*Ie,Ze=ye*y,lt=_*xe,et=te*y,ot=_*F,st=U*y,We=ce*be,rt=Me*re,je=g*be,ct=Me*T,it=g*re,Dt=ce*T,_t=p*be,Mt=Me*l,Tt=p*re,Nt=ce*l,pt=p*T,$t=g*l,_n=Re*T+He*re+nt*be-(Oe*T+Ke*re+Ye*be),Lt=Oe*l+Je*re+et*be-(Re*l+Ze*re+lt*be),qt=Ke*l+Ze*T+ot*be-(He*l+Je*T+st*be),en=Ye*l+lt*T+st*re-(nt*l+et*T+ot*re),Xe=1/(p*_n+g*Lt+ce*qt+Me*en);return d[0]=Xe*_n,d[1]=Xe*Lt,d[2]=Xe*qt,d[3]=Xe*en,d[4]=Xe*(Oe*g+Ke*ce+Ye*Me-(Re*g+He*ce+nt*Me)),d[5]=Xe*(Re*p+Ze*ce+lt*Me-(Oe*p+Je*ce+et*Me)),d[6]=Xe*(He*p+Je*g+st*Me-(Ke*p+Ze*g+ot*Me)),d[7]=Xe*(nt*p+et*g+ot*ce-(Ye*p+lt*g+st*ce)),d[8]=Xe*(We*F+ct*xe+it*Ie-(rt*F+je*xe+Dt*Ie)),d[9]=Xe*(rt*y+_t*xe+Nt*Ie-(We*y+Mt*xe+Tt*Ie)),d[10]=Xe*(je*y+Mt*F+pt*Ie-(ct*y+_t*F+$t*Ie)),d[11]=Xe*(Dt*y+Tt*F+$t*xe-(it*y+Nt*F+pt*xe)),d[12]=Xe*(je*te+Dt*ye+rt*U-(it*ye+We*U+ct*te)),d[13]=Xe*(Tt*ye+We*_+Mt*te-(_t*te+Nt*ye+rt*_)),d[14]=Xe*(_t*U+$t*ye+ct*_-(pt*ye+je*_+Mt*U)),d[15]=Xe*(pt*te+it*_+Nt*U-(Tt*U+$t*te+Dt*_)),d}function se(r){const m=r[0],d=r[0*4+1],p=r[0*4+2],l=r[0*4+3],_=r[1*4+0],y=r[1*4+1],g=r[1*4+2],T=r[1*4+3],U=r[2*4+0],F=r[2*4+1],ce=r[2*4+2],re=r[2*4+3],te=r[3*4+0],xe=r[3*4+1],Me=r[3*4+2],be=r[3*4+3],ye=ce*be,Ie=Me*re,Re=g*be,Oe=Me*T,Ke=g*re,He=ce*T,nt=p*be,Ye=Me*l,Je=p*re,Ze=ce*l,lt=p*T,et=g*l,ot=ye*y+Oe*F+Ke*xe-(Ie*y+Re*F+He*xe),st=Ie*d+nt*F+Ze*xe-(ye*d+Ye*F+Je*xe),We=Re*d+Ye*y+lt*xe-(Oe*d+nt*y+et*xe),rt=He*d+Je*y+et*F-(Ke*d+Ze*y+lt*F);return m*ot+_*st+U*We+te*rt}const W=Q;function J(r,m,d){const p=d??new o(16),l=r[0],_=r[1],y=r[2],g=r[3],T=r[4+0],U=r[4+1],F=r[4+2],ce=r[4+3],re=r[8+0],te=r[8+1],xe=r[8+2],Me=r[8+3],be=r[12+0],ye=r[12+1],Ie=r[12+2],Re=r[12+3],Oe=m[0],Ke=m[1],He=m[2],nt=m[3],Ye=m[4+0],Je=m[4+1],Ze=m[4+2],lt=m[4+3],et=m[8+0],ot=m[8+1],st=m[8+2],We=m[8+3],rt=m[12+0],je=m[12+1],ct=m[12+2],it=m[12+3];return p[0]=l*Oe+T*Ke+re*He+be*nt,p[1]=_*Oe+U*Ke+te*He+ye*nt,p[2]=y*Oe+F*Ke+xe*He+Ie*nt,p[3]=g*Oe+ce*Ke+Me*He+Re*nt,p[4]=l*Ye+T*Je+re*Ze+be*lt,p[5]=_*Ye+U*Je+te*Ze+ye*lt,p[6]=y*Ye+F*Je+xe*Ze+Ie*lt,p[7]=g*Ye+ce*Je+Me*Ze+Re*lt,p[8]=l*et+T*ot+re*st+be*We,p[9]=_*et+U*ot+te*st+ye*We,p[10]=y*et+F*ot+xe*st+Ie*We,p[11]=g*et+ce*ot+Me*st+Re*We,p[12]=l*rt+T*je+re*ct+be*it,p[13]=_*rt+U*je+te*ct+ye*it,p[14]=y*rt+F*je+xe*ct+Ie*it,p[15]=g*rt+ce*je+Me*ct+Re*it,p}const N=J;function de(r,m,d){const p=d??oe();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function pe(r,m){const d=m??a.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function fe(r,m,d){const p=d??a.create(),l=m*4;return p[0]=r[l+0],p[1]=r[l+1],p[2]=r[l+2],p}function ae(r,m,d,p){const l=p===r?p:K(r,p),_=d*4;return l[_+0]=m[0],l[_+1]=m[1],l[_+2]=m[2],l}function ue(r,m){const d=m??a.create(),p=r[0],l=r[1],_=r[2],y=r[4],g=r[5],T=r[6],U=r[8],F=r[9],ce=r[10];return d[0]=Math.sqrt(p*p+l*l+_*_),d[1]=Math.sqrt(y*y+g*g+T*T),d[2]=Math.sqrt(U*U+F*F+ce*ce),d}function Te(r,m,d,p,l){const _=l??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const g=1/(d-p);_[10]=p*g,_[14]=p*d*g}else _[10]=-1,_[14]=-d;return _}function ee(r,m,d,p=1/0,l){const _=l??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=d;else{const g=1/(p-d);_[10]=d*g,_[14]=p*d*g}return _}function he(r,m,d,p,l,_,y){const g=y??new o(16);return g[0]=2/(m-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(p-d),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(l-_),g[11]=0,g[12]=(m+r)/(r-m),g[13]=(p+d)/(d-p),g[14]=l/(l-_),g[15]=1,g}function ve(r,m,d,p,l,_,y){const g=y??new o(16),T=m-r,U=p-d,F=l-_;return g[0]=2*l/T,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/U,g[6]=0,g[7]=0,g[8]=(r+m)/T,g[9]=(p+d)/U,g[10]=_/F,g[11]=-1,g[12]=0,g[13]=0,g[14]=l*_/F,g[15]=0,g}function Le(r,m,d,p,l,_=1/0,y){const g=y??new o(16),T=m-r,U=p-d;if(g[0]=2*l/T,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*l/U,g[6]=0,g[7]=0,g[8]=(r+m)/T,g[9]=(p+d)/U,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,_===1/0)g[10]=0,g[14]=l;else{const F=1/(_-l);g[10]=l*F,g[14]=_*l*F}return g}const Ae=a.create(),Z=a.create(),j=a.create();function O(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(m,r,j),j),a.normalize(a.cross(d,j,Ae),Ae),a.normalize(a.cross(j,Ae,Z),Z),l[0]=Ae[0],l[1]=Ae[1],l[2]=Ae[2],l[3]=0,l[4]=Z[0],l[5]=Z[1],l[6]=Z[2],l[7]=0,l[8]=j[0],l[9]=j[1],l[10]=j[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function we(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,j),j),a.normalize(a.cross(d,j,Ae),Ae),a.normalize(a.cross(j,Ae,Z),Z),l[0]=Ae[0],l[1]=Ae[1],l[2]=Ae[2],l[3]=0,l[4]=Z[0],l[5]=Z[1],l[6]=Z[2],l[7]=0,l[8]=j[0],l[9]=j[1],l[10]=j[2],l[11]=0,l[12]=r[0],l[13]=r[1],l[14]=r[2],l[15]=1,l}function Ce(r,m,d,p){const l=p??new o(16);return a.normalize(a.subtract(r,m,j),j),a.normalize(a.cross(d,j,Ae),Ae),a.normalize(a.cross(j,Ae,Z),Z),l[0]=Ae[0],l[1]=Z[0],l[2]=j[0],l[3]=0,l[4]=Ae[1],l[5]=Z[1],l[6]=j[1],l[7]=0,l[8]=Ae[2],l[9]=Z[2],l[10]=j[2],l[11]=0,l[12]=-(Ae[0]*r[0]+Ae[1]*r[1]+Ae[2]*r[2]),l[13]=-(Z[0]*r[0]+Z[1]*r[1]+Z[2]*r[2]),l[14]=-(j[0]*r[0]+j[1]*r[1]+j[2]*r[2]),l[15]=1,l}function Ve(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function Ge(r,m,d){const p=d??new o(16),l=m[0],_=m[1],y=m[2],g=r[0],T=r[1],U=r[2],F=r[3],ce=r[1*4+0],re=r[1*4+1],te=r[1*4+2],xe=r[1*4+3],Me=r[2*4+0],be=r[2*4+1],ye=r[2*4+2],Ie=r[2*4+3],Re=r[3*4+0],Oe=r[3*4+1],Ke=r[3*4+2],He=r[3*4+3];return r!==p&&(p[0]=g,p[1]=T,p[2]=U,p[3]=F,p[4]=ce,p[5]=re,p[6]=te,p[7]=xe,p[8]=Me,p[9]=be,p[10]=ye,p[11]=Ie),p[12]=g*l+ce*_+Me*y+Re,p[13]=T*l+re*_+be*y+Oe,p[14]=U*l+te*_+ye*y+Ke,p[15]=F*l+xe*_+Ie*y+He,p}function Ne(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=l,d[7]=0,d[8]=0,d[9]=-l,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function le(r,m,d){const p=d??new o(16),l=r[4],_=r[5],y=r[6],g=r[7],T=r[8],U=r[9],F=r[10],ce=r[11],re=Math.cos(m),te=Math.sin(m);return p[4]=re*l+te*T,p[5]=re*_+te*U,p[6]=re*y+te*F,p[7]=re*g+te*ce,p[8]=re*T-te*l,p[9]=re*U-te*_,p[10]=re*F-te*y,p[11]=re*ce-te*g,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function Pe(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=0,d[2]=-l,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=l,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ke(r,m,d){const p=d??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],T=r[2*4+0],U=r[2*4+1],F=r[2*4+2],ce=r[2*4+3],re=Math.cos(m),te=Math.sin(m);return p[0]=re*l-te*T,p[1]=re*_-te*U,p[2]=re*y-te*F,p[3]=re*g-te*ce,p[8]=re*T+te*l,p[9]=re*U+te*_,p[10]=re*F+te*y,p[11]=re*ce+te*g,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const d=m??new o(16),p=Math.cos(r),l=Math.sin(r);return d[0]=p,d[1]=l,d[2]=0,d[3]=0,d[4]=-l,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function V(r,m,d){const p=d??new o(16),l=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],T=r[1*4+0],U=r[1*4+1],F=r[1*4+2],ce=r[1*4+3],re=Math.cos(m),te=Math.sin(m);return p[0]=re*l+te*T,p[1]=re*_+te*U,p[2]=re*y+te*F,p[3]=re*g+te*ce,p[4]=re*T-te*l,p[5]=re*U-te*_,p[6]=re*F-te*y,p[7]=re*ce-te*g,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function v(r,m,d){const p=d??new o(16);let l=r[0],_=r[1],y=r[2];const g=Math.sqrt(l*l+_*_+y*y);l/=g,_/=g,y/=g;const T=l*l,U=_*_,F=y*y,ce=Math.cos(m),re=Math.sin(m),te=1-ce;return p[0]=T+(1-T)*ce,p[1]=l*_*te+y*re,p[2]=l*y*te-_*re,p[3]=0,p[4]=l*_*te-y*re,p[5]=U+(1-U)*ce,p[6]=_*y*te+l*re,p[7]=0,p[8]=l*y*te+_*re,p[9]=_*y*te-l*re,p[10]=F+(1-F)*ce,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=v;function h(r,m,d,p){const l=p??new o(16);let _=m[0],y=m[1],g=m[2];const T=Math.sqrt(_*_+y*y+g*g);_/=T,y/=T,g/=T;const U=_*_,F=y*y,ce=g*g,re=Math.cos(d),te=Math.sin(d),xe=1-re,Me=U+(1-U)*re,be=_*y*xe+g*te,ye=_*g*xe-y*te,Ie=_*y*xe-g*te,Re=F+(1-F)*re,Oe=y*g*xe+_*te,Ke=_*g*xe+y*te,He=y*g*xe-_*te,nt=ce+(1-ce)*re,Ye=r[0],Je=r[1],Ze=r[2],lt=r[3],et=r[4],ot=r[5],st=r[6],We=r[7],rt=r[8],je=r[9],ct=r[10],it=r[11];return l[0]=Me*Ye+be*et+ye*rt,l[1]=Me*Je+be*ot+ye*je,l[2]=Me*Ze+be*st+ye*ct,l[3]=Me*lt+be*We+ye*it,l[4]=Ie*Ye+Re*et+Oe*rt,l[5]=Ie*Je+Re*ot+Oe*je,l[6]=Ie*Ze+Re*st+Oe*ct,l[7]=Ie*lt+Re*We+Oe*it,l[8]=Ke*Ye+He*et+nt*rt,l[9]=Ke*Je+He*ot+nt*je,l[10]=Ke*Ze+He*st+nt*ct,l[11]=Ke*lt+He*We+nt*it,r!==l&&(l[12]=r[12],l[13]=r[13],l[14]=r[14],l[15]=r[15]),l}const u=h;function b(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function x(r,m,d){const p=d??new o(16),l=m[0],_=m[1],y=m[2];return p[0]=l*r[0*4+0],p[1]=l*r[0*4+1],p[2]=l*r[0*4+2],p[3]=l*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=y*r[2*4+0],p[9]=y*r[2*4+1],p[10]=y*r[2*4+2],p[11]=y*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function E(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function P(r,m,d){const p=d??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:L,aim:O,axisRotate:h,axisRotation:v,cameraAim:we,clone:q,copy:K,create:f,determinant:se,equals:X,equalsApproximately:z,fromMat3:w,fromQuat:C,frustum:ve,frustumReverseZ:Le,getAxis:fe,getScaling:ue,getTranslation:pe,identity:oe,inverse:Q,invert:W,lookAt:Ce,mul:N,mulScalar:I,multiply:J,multiplyScalar:A,negate:M,ortho:he,perspective:Te,perspectiveReverseZ:ee,rotate:u,rotateX:le,rotateY:ke,rotateZ:V,rotation:i,rotationX:Ne,rotationY:Pe,rotationZ:B,scale:x,scaling:b,set:k,setAxis:ae,setTranslation:de,translate:Ge,translation:Ve,transpose:Y,uniformScale:P,uniformScaling:E}}const Qr=new Map;function Il(o){let a=Qr.get(o);return a||(a=Ll(o),Qr.set(o,a)),a}function Rl(o){const a=as(o);function f(B,V,v,i){const h=new o(4);return B!==void 0&&(h[0]=B,V!==void 0&&(h[1]=V,v!==void 0&&(h[2]=v,i!==void 0&&(h[3]=i)))),h}const k=f;function w(B,V,v,i,h){const u=h??new o(4);return u[0]=B,u[1]=V,u[2]=v,u[3]=i,u}function C(B,V,v){const i=v??new o(4),h=V*.5,u=Math.sin(h);return i[0]=u*B[0],i[1]=u*B[1],i[2]=u*B[2],i[3]=Math.cos(h),i}function M(B,V){const v=V??a.create(3),i=Math.acos(B[3])*2,h=Math.sin(i*.5);return h>ze?(v[0]=B[0]/h,v[1]=B[1]/h,v[2]=B[2]/h):(v[0]=1,v[1]=0,v[2]=0),{angle:i,axis:v}}function L(B,V){const v=Te(B,V);return Math.acos(2*v*v-1)}function A(B,V,v){const i=v??new o(4),h=B[0],u=B[1],b=B[2],x=B[3],E=V[0],P=V[1],r=V[2],m=V[3];return i[0]=h*m+x*E+u*r-b*P,i[1]=u*m+x*P+b*E-h*r,i[2]=b*m+x*r+h*P-u*E,i[3]=x*m-h*E-u*P-b*r,i}const I=A;function K(B,V,v){const i=v??new o(4),h=V*.5,u=B[0],b=B[1],x=B[2],E=B[3],P=Math.sin(h),r=Math.cos(h);return i[0]=u*r+E*P,i[1]=b*r+x*P,i[2]=x*r-b*P,i[3]=E*r-u*P,i}function q(B,V,v){const i=v??new o(4),h=V*.5,u=B[0],b=B[1],x=B[2],E=B[3],P=Math.sin(h),r=Math.cos(h);return i[0]=u*r-x*P,i[1]=b*r+E*P,i[2]=x*r+u*P,i[3]=E*r-b*P,i}function z(B,V,v){const i=v??new o(4),h=V*.5,u=B[0],b=B[1],x=B[2],E=B[3],P=Math.sin(h),r=Math.cos(h);return i[0]=u*r+b*P,i[1]=b*r-u*P,i[2]=x*r+E*P,i[3]=E*r-x*P,i}function X(B,V,v,i){const h=i??new o(4),u=B[0],b=B[1],x=B[2],E=B[3];let P=V[0],r=V[1],m=V[2],d=V[3],p=u*P+b*r+x*m+E*d;p<0&&(p=-p,P=-P,r=-r,m=-m,d=-d);let l,_;if(1-p>ze){const y=Math.acos(p),g=Math.sin(y);l=Math.sin((1-v)*y)/g,_=Math.sin(v*y)/g}else l=1-v,_=v;return h[0]=l*u+_*P,h[1]=l*b+_*r,h[2]=l*x+_*m,h[3]=l*E+_*d,h}function oe(B,V){const v=V??new o(4),i=B[0],h=B[1],u=B[2],b=B[3],x=i*i+h*h+u*u+b*b,E=x?1/x:0;return v[0]=-i*E,v[1]=-h*E,v[2]=-u*E,v[3]=b*E,v}function Y(B,V){const v=V??new o(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function Q(B,V){const v=V??new o(4),i=B[0]+B[5]+B[10];if(i>0){const h=Math.sqrt(i+1);v[3]=.5*h;const u=.5/h;v[0]=(B[6]-B[9])*u,v[1]=(B[8]-B[2])*u,v[2]=(B[1]-B[4])*u}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const u=(h+1)%3,b=(h+2)%3,x=Math.sqrt(B[h*4+h]-B[u*4+u]-B[b*4+b]+1);v[h]=.5*x;const E=.5/x;v[3]=(B[u*4+b]-B[b*4+u])*E,v[u]=(B[u*4+h]+B[h*4+u])*E,v[b]=(B[b*4+h]+B[h*4+b])*E}return v}function se(B,V,v,i,h){const u=h??new o(4),b=B*.5,x=V*.5,E=v*.5,P=Math.sin(b),r=Math.cos(b),m=Math.sin(x),d=Math.cos(x),p=Math.sin(E),l=Math.cos(E);switch(i){case"xyz":u[0]=P*d*l+r*m*p,u[1]=r*m*l-P*d*p,u[2]=r*d*p+P*m*l,u[3]=r*d*l-P*m*p;break;case"xzy":u[0]=P*d*l-r*m*p,u[1]=r*m*l-P*d*p,u[2]=r*d*p+P*m*l,u[3]=r*d*l+P*m*p;break;case"yxz":u[0]=P*d*l+r*m*p,u[1]=r*m*l-P*d*p,u[2]=r*d*p-P*m*l,u[3]=r*d*l+P*m*p;break;case"yzx":u[0]=P*d*l+r*m*p,u[1]=r*m*l+P*d*p,u[2]=r*d*p-P*m*l,u[3]=r*d*l-P*m*p;break;case"zxy":u[0]=P*d*l-r*m*p,u[1]=r*m*l+P*d*p,u[2]=r*d*p+P*m*l,u[3]=r*d*l-P*m*p;break;case"zyx":u[0]=P*d*l-r*m*p,u[1]=r*m*l+P*d*p,u[2]=r*d*p-P*m*l,u[3]=r*d*l+P*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function W(B,V){const v=V??new o(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const J=W;function N(B,V,v){const i=v??new o(4);return i[0]=B[0]+V[0],i[1]=B[1]+V[1],i[2]=B[2]+V[2],i[3]=B[3]+V[3],i}function de(B,V,v){const i=v??new o(4);return i[0]=B[0]-V[0],i[1]=B[1]-V[1],i[2]=B[2]-V[2],i[3]=B[3]-V[3],i}const pe=de;function fe(B,V,v){const i=v??new o(4);return i[0]=B[0]*V,i[1]=B[1]*V,i[2]=B[2]*V,i[3]=B[3]*V,i}const ae=fe;function ue(B,V,v){const i=v??new o(4);return i[0]=B[0]/V,i[1]=B[1]/V,i[2]=B[2]/V,i[3]=B[3]/V,i}function Te(B,V){return B[0]*V[0]+B[1]*V[1]+B[2]*V[2]+B[3]*V[3]}function ee(B,V,v,i){const h=i??new o(4);return h[0]=B[0]+v*(V[0]-B[0]),h[1]=B[1]+v*(V[1]-B[1]),h[2]=B[2]+v*(V[2]-B[2]),h[3]=B[3]+v*(V[3]-B[3]),h}function he(B){const V=B[0],v=B[1],i=B[2],h=B[3];return Math.sqrt(V*V+v*v+i*i+h*h)}const ve=he;function Le(B){const V=B[0],v=B[1],i=B[2],h=B[3];return V*V+v*v+i*i+h*h}const Ae=Le;function Z(B,V){const v=V??new o(4),i=B[0],h=B[1],u=B[2],b=B[3],x=Math.sqrt(i*i+h*h+u*u+b*b);return x>1e-5?(v[0]=i/x,v[1]=h/x,v[2]=u/x,v[3]=b/x):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function j(B,V){return Math.abs(B[0]-V[0])<ze&&Math.abs(B[1]-V[1])<ze&&Math.abs(B[2]-V[2])<ze&&Math.abs(B[3]-V[3])<ze}function O(B,V){return B[0]===V[0]&&B[1]===V[1]&&B[2]===V[2]&&B[3]===V[3]}function we(B){const V=B??new o(4);return V[0]=0,V[1]=0,V[2]=0,V[3]=1,V}const Ce=a.create(),Ve=a.create(),Ge=a.create();function Ne(B,V,v){const i=v??new o(4),h=a.dot(B,V);return h<-.999999?(a.cross(Ve,B,Ce),a.len(Ce)<1e-6&&a.cross(Ge,B,Ce),a.normalize(Ce,Ce),C(Ce,Math.PI,i),i):h>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(a.cross(B,V,Ce),i[0]=Ce[0],i[1]=Ce[1],i[2]=Ce[2],i[3]=1+h,Z(i,i))}const le=new o(4),Pe=new o(4);function ke(B,V,v,i,h,u){const b=u??new o(4);return X(B,i,h,le),X(V,v,h,Pe),X(le,Pe,2*h*(1-h),b),b}return{create:f,fromValues:k,set:w,fromAxisAngle:C,toAxisAngle:M,angle:L,multiply:A,mul:I,rotateX:K,rotateY:q,rotateZ:z,slerp:X,inverse:oe,conjugate:Y,fromMat:Q,fromEuler:se,copy:W,clone:J,add:N,subtract:de,sub:pe,mulScalar:fe,scale:ae,divScalar:ue,dot:Te,lerp:ee,length:he,len:ve,lengthSq:Le,lenSq:Ae,normalize:Z,equalsApproximately:j,equals:O,identity:we,rotationTo:Ne,sqlerp:ke}}const Jr=new Map;function zl(o){let a=Jr.get(o);return a||(a=Rl(o),Jr.set(o,a)),a}function Gl(o){function a(v,i,h,u){const b=new o(4);return v!==void 0&&(b[0]=v,i!==void 0&&(b[1]=i,h!==void 0&&(b[2]=h,u!==void 0&&(b[3]=u)))),b}const f=a;function k(v,i,h,u,b){const x=b??new o(4);return x[0]=v,x[1]=i,x[2]=h,x[3]=u,x}function w(v,i){const h=i??new o(4);return h[0]=Math.ceil(v[0]),h[1]=Math.ceil(v[1]),h[2]=Math.ceil(v[2]),h[3]=Math.ceil(v[3]),h}function C(v,i){const h=i??new o(4);return h[0]=Math.floor(v[0]),h[1]=Math.floor(v[1]),h[2]=Math.floor(v[2]),h[3]=Math.floor(v[3]),h}function M(v,i){const h=i??new o(4);return h[0]=Math.round(v[0]),h[1]=Math.round(v[1]),h[2]=Math.round(v[2]),h[3]=Math.round(v[3]),h}function L(v,i=0,h=1,u){const b=u??new o(4);return b[0]=Math.min(h,Math.max(i,v[0])),b[1]=Math.min(h,Math.max(i,v[1])),b[2]=Math.min(h,Math.max(i,v[2])),b[3]=Math.min(h,Math.max(i,v[3])),b}function A(v,i,h){const u=h??new o(4);return u[0]=v[0]+i[0],u[1]=v[1]+i[1],u[2]=v[2]+i[2],u[3]=v[3]+i[3],u}function I(v,i,h,u){const b=u??new o(4);return b[0]=v[0]+i[0]*h,b[1]=v[1]+i[1]*h,b[2]=v[2]+i[2]*h,b[3]=v[3]+i[3]*h,b}function K(v,i,h){const u=h??new o(4);return u[0]=v[0]-i[0],u[1]=v[1]-i[1],u[2]=v[2]-i[2],u[3]=v[3]-i[3],u}const q=K;function z(v,i){return Math.abs(v[0]-i[0])<ze&&Math.abs(v[1]-i[1])<ze&&Math.abs(v[2]-i[2])<ze&&Math.abs(v[3]-i[3])<ze}function X(v,i){return v[0]===i[0]&&v[1]===i[1]&&v[2]===i[2]&&v[3]===i[3]}function oe(v,i,h,u){const b=u??new o(4);return b[0]=v[0]+h*(i[0]-v[0]),b[1]=v[1]+h*(i[1]-v[1]),b[2]=v[2]+h*(i[2]-v[2]),b[3]=v[3]+h*(i[3]-v[3]),b}function Y(v,i,h,u){const b=u??new o(4);return b[0]=v[0]+h[0]*(i[0]-v[0]),b[1]=v[1]+h[1]*(i[1]-v[1]),b[2]=v[2]+h[2]*(i[2]-v[2]),b[3]=v[3]+h[3]*(i[3]-v[3]),b}function Q(v,i,h){const u=h??new o(4);return u[0]=Math.max(v[0],i[0]),u[1]=Math.max(v[1],i[1]),u[2]=Math.max(v[2],i[2]),u[3]=Math.max(v[3],i[3]),u}function se(v,i,h){const u=h??new o(4);return u[0]=Math.min(v[0],i[0]),u[1]=Math.min(v[1],i[1]),u[2]=Math.min(v[2],i[2]),u[3]=Math.min(v[3],i[3]),u}function W(v,i,h){const u=h??new o(4);return u[0]=v[0]*i,u[1]=v[1]*i,u[2]=v[2]*i,u[3]=v[3]*i,u}const J=W;function N(v,i,h){const u=h??new o(4);return u[0]=v[0]/i,u[1]=v[1]/i,u[2]=v[2]/i,u[3]=v[3]/i,u}function de(v,i){const h=i??new o(4);return h[0]=1/v[0],h[1]=1/v[1],h[2]=1/v[2],h[3]=1/v[3],h}const pe=de;function fe(v,i){return v[0]*i[0]+v[1]*i[1]+v[2]*i[2]+v[3]*i[3]}function ae(v){const i=v[0],h=v[1],u=v[2],b=v[3];return Math.sqrt(i*i+h*h+u*u+b*b)}const ue=ae;function Te(v){const i=v[0],h=v[1],u=v[2],b=v[3];return i*i+h*h+u*u+b*b}const ee=Te;function he(v,i){const h=v[0]-i[0],u=v[1]-i[1],b=v[2]-i[2],x=v[3]-i[3];return Math.sqrt(h*h+u*u+b*b+x*x)}const ve=he;function Le(v,i){const h=v[0]-i[0],u=v[1]-i[1],b=v[2]-i[2],x=v[3]-i[3];return h*h+u*u+b*b+x*x}const Ae=Le;function Z(v,i){const h=i??new o(4),u=v[0],b=v[1],x=v[2],E=v[3],P=Math.sqrt(u*u+b*b+x*x+E*E);return P>1e-5?(h[0]=u/P,h[1]=b/P,h[2]=x/P,h[3]=E/P):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function j(v,i){const h=i??new o(4);return h[0]=-v[0],h[1]=-v[1],h[2]=-v[2],h[3]=-v[3],h}function O(v,i){const h=i??new o(4);return h[0]=v[0],h[1]=v[1],h[2]=v[2],h[3]=v[3],h}const we=O;function Ce(v,i,h){const u=h??new o(4);return u[0]=v[0]*i[0],u[1]=v[1]*i[1],u[2]=v[2]*i[2],u[3]=v[3]*i[3],u}const Ve=Ce;function Ge(v,i,h){const u=h??new o(4);return u[0]=v[0]/i[0],u[1]=v[1]/i[1],u[2]=v[2]/i[2],u[3]=v[3]/i[3],u}const Ne=Ge;function le(v){const i=v??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Pe(v,i,h){const u=h??new o(4),b=v[0],x=v[1],E=v[2],P=v[3];return u[0]=i[0]*b+i[4]*x+i[8]*E+i[12]*P,u[1]=i[1]*b+i[5]*x+i[9]*E+i[13]*P,u[2]=i[2]*b+i[6]*x+i[10]*E+i[14]*P,u[3]=i[3]*b+i[7]*x+i[11]*E+i[15]*P,u}function ke(v,i,h){const u=h??new o(4);return Z(v,u),W(u,i,u)}function B(v,i,h){const u=h??new o(4);return ae(v)>i?ke(v,i,u):O(v,u)}function V(v,i,h){const u=h??new o(4);return oe(v,i,.5,u)}return{create:a,fromValues:f,set:k,ceil:w,floor:C,round:M,clamp:L,add:A,addScaled:I,subtract:K,sub:q,equalsApproximately:z,equals:X,lerp:oe,lerpV:Y,max:Q,min:se,mulScalar:W,scale:J,divScalar:N,inverse:de,invert:pe,dot:fe,length:ae,len:ue,lengthSq:Te,lenSq:ee,distance:he,dist:ve,distanceSq:Le,distSq:Ae,normalize:Z,negate:j,copy:O,clone:we,multiply:Ce,mul:Ve,divide:Ge,div:Ne,zero:le,transformMat4:Pe,setLength:ke,truncate:B,midpoint:V}}const ei=new Map;function Ul(o){let a=ei.get(o);return a||(a=Gl(o),ei.set(o,a)),a}function $s(o,a,f,k,w,C){return{mat3:Dl(o),mat4:Il(a),quat:zl(f),vec2:bi(k),vec3:as(w),vec4:Ul(C)}}const{mat3:kt,mat4:ht,quat:dt,vec2:ti,vec3:R,vec4:Fc}=$s(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);$s(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);$s(Ml,Array,Array,Array,Array,Array);const ni=document.querySelector("#log");let yt=null,fn=null;function gi(){if(yt)return yt;yt=document.createElement("div"),yt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",yt.appendChild(o),fn=document.createElement("div"),fn.className="ply-spinner-label",yt.appendChild(fn),yt.style.display="none",document.body.appendChild(yt),yt}function qs(o){gi(),fn&&o&&(fn.textContent=o),yt&&(yt.style.opacity="1",yt.style.display="flex")}function Ft(o){gi(),fn&&(fn.textContent=o)}function On(){if(!yt)return;const o=yt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function wi(o,a){if(!ni)return;const f=document.createElement("p");f.innerText=o,a&&Object.assign(f.style,a),ni.appendChild(f)}async function Pt(o){console.log(o),wi(o)}async function Vl(o){console.error(o),wi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let xi;function yi(){xi=performance.now()}function si(o){const a=performance.now()-xi;Pt(`⏱️ ${o} Time: ${a.toFixed(0)} ms`)}function Ol(o,a){if(!o)throw new Error(a&&(typeof a=="string"?a:a()))}function Nn(o){return o+3&-4}const Fl=2,Nl=3,$l=5,ql=6,Fn=7,rs=8,$n=9,qn=10;function ri(o){const a=new TextDecoder("ascii"),f=a.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const k=new DataView(o),w=4,C=k.getUint32(w+0,!0),M=k.getUint32(w+4,!0),L=k.getUint32(w+8,!0),A=k.getUint32(w+12,!0),I=k.getUint32(w+16,!0),K=k.getFloat32(w+20,!0),q=k.getUint32(w+24,!0),z=k.getUint32(w+28,!0),X=k.getFloat32(w+32,!0),oe=k.getFloat32(w+36,!0),Y=k.getFloat32(w+40,!0),Q=k.getUint32(w+44,!0),se=k.getFloat32(w+48,!0),W=k.getFloat32(w+52,!0),J=k.getUint32(w+56,!0),N=k.getUint32(w+60,!0),de=z===$n||z===qn,pe=de?N:0,fe=de?0:N&255,ae=de?0:N>>8&255,ue=fe>0?fe:1;if(z===$l||z===ql)throw new Error(`NAT2: paired-RVQ format=${z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Te=z===$n||z===qn;if(z!==Fl&&z!==Nl&&z!==Fn&&z!==rs&&!Te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${z}`);if(C%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${Q}`);let ee=w+64;const he=(J+1)*4,ve=new Uint32Array(o.slice(ee,ee+he));ee+=he;let Le;if(ue>1){const le=(ue+1)*4;if(ee+le>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${le} from ${ee})`);Le=new Uint32Array(o.slice(ee,ee+le)),ee+=le}else Le=new Uint32Array([0,C]);let Ae=0;for(let le=0;le<ue;le++){const Pe=Le[le+1]-Le[le];Pe>Ae&&(Ae=Pe)}if(Te){const le=pe&1?7:6,Pe=I*le*4;if(ee+Pe>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${Pe} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const ke=new Float32Array(o.slice(ee,ee+Pe));ee+=Pe;const B=Math.max(1,pe>>8&255),V=[];let v=0;for(let x=0,E=C,P=Q;x<B;x++,E>>=1,P>>=1){const r=Math.max(1,E>>2)*Math.max(1,P>>2)*16;V.push(r),v+=r}const i=o.byteLength-ee;if(i<v)throw new Error(`NAT2 probe atlas truncated: need ${v} bytes for ${C}x${Q} x${B} mips, have ${i}`);const h=[];let u=ee;for(const x of V)h.push(new Uint8Array(o.slice(u,u+x))),u+=x;const b=h[0];return{width:C,height:M,channels:L,kernel_type:A,num_rects:I,uv_extent:K,sb_number:q,format:z,sh_bias:X,res_bias:oe,compact_mult:Y,layer_h:Q,atlas_scale:se,atlas_offset:W,n_layers:J,n_cols:ue,layer_cuts:ve,column_cuts:Le,slice_width:Ae,rects_expanded:ke,atlas_bytes:b,mip_bytes:h,probe_mode:pe&1?2:1}}const Z=I*4*4;if(ee+Z>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Z} more bytes from offset ${ee}, have ${o.byteLength-ee}`);const j=new Float32Array(o.slice(ee,ee+Z));ee+=Z;const O=new Float32Array(I*5);for(let le=0;le<I;le++){const Pe=j[le*4+0],ke=j[le*4+1],B=j[le*4+2],V=j[le*4+3];let v=0;for(let x=1;x<=J&&ve[x]<=ke;x++)v=x;let i=0;for(let x=1;x<=ue&&Le[x]<=Pe;x++)i=x;const h=ke-ve[v],u=Pe-Le[i],b=i*J+v;O[le*5+0]=u,O[le*5+1]=h,O[le*5+2]=B,O[le*5+3]=V,O[le*5+4]=b}let we,Ce;const Ve=ue,Ne=C/4*16;if(z===Fn||z===rs){if(ee+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const le=z===Fn?"BCCB":"ACCB",Pe=a.decode(new Uint8Array(o,ee,4));if(Pe!==le)throw new Error(`NAT2 typeD bad sub-magic: expected '${le}' got '${Pe}'`);const ke=k.getUint32(ee+4,!0),B=k.getUint32(ee+8,!0),V=k.getUint32(ee+12,!0),v=k.getUint32(ee+16,!0),i=k.getUint32(ee+20,!0);if(ke!==1)throw new Error(`NAT2 BCCB unsupported version ${ke}`);if(V!==M/4||v!==C/4||i!==V*v)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${M}, sub-header ${v}×${V} (${i} blocks)`);ee+=24;const h=B*16;if(ee+h>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${h}, have ${o.byteLength-ee})`);const u=new Uint8Array(o,ee,h);ee+=h;const b=i*2;if(ee+b>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${b}, have ${o.byteLength-ee})`);const x=new Uint16Array(o.slice(ee,ee+b));ee+=b;const E=new Uint8Array(i*16);for(let P=0;P<i;P++){const r=x[P]*16;E.set(u.subarray(r,r+16),P*16)}if(we=E,ae>1){Ce=[E];for(let P=1;P<ae;P++){if(ee+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${P} sub-header`);const r=a.decode(new Uint8Array(o,ee,4));if(r!==le)throw new Error(`NAT2 mip ${P}: bad sub-magic '${r}'`);const m=k.getUint32(ee+8,!0),d=k.getUint32(ee+16,!0),p=k.getUint32(ee+20,!0);if(d!==P)throw new Error(`NAT2 mip section order: expected level ${P}, got ${d}`);ee+=24;let l=0;for(let T=0;T<Ve;T++)for(let U=0;U<J;U++){const F=Pi(P,Le[T+1]-Le[T],ve[U+1]-ve[U],Ae,Q);l+=(F.cw>>2)*(F.ch>>2)}if(l!==p)throw new Error(`NAT2 mip ${P}: ${p} blocks, loader expects ${l}`);if(ee+m*16+p*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${P}`);const _=new Uint8Array(o,ee,m*16);ee+=m*16;const y=new Uint16Array(o.slice(ee,ee+p*2));ee+=p*2;const g=new Uint8Array(p*16);for(let T=0;T<p;T++){const U=y[T]*16;g.set(_.subarray(U,U+16),T*16)}Ce.push(g)}}}else{let le=0;for(let Pe=0;Pe<J;Pe++){const ke=ve[Pe+1]-ve[Pe];if(ke%4!==0)throw new Error(`NAT2 BC7 layer ${Pe} rows ${ke} not 4-aligned`);le+=ke/4*Ne}if(ee+le>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${le} more bytes from offset ${ee}, have ${o.byteLength-ee}`);we=new Uint8Array(o.slice(ee,ee+le))}return{width:C,height:M,channels:L,kernel_type:A,num_rects:I,uv_extent:K,sb_number:q,format:z,sh_bias:X,res_bias:oe,compact_mult:Y,layer_h:Q,atlas_scale:se,atlas_offset:W,n_layers:J,n_cols:ue,layer_cuts:ve,column_cuts:Le,slice_width:Ae,rects_expanded:O,atlas_bytes:we,...Ce?{mip_bytes:Ce}:{}}}function Pi(o,a,f,k,w){const C=L=>L+3>>2<<2,M=1<<o;return{cw:Math.min(C(Math.max(1,k>>o)),C(Math.ceil(a/M))),ch:Math.min(C(Math.max(1,w>>o)),C(Math.ceil(f/M)))}}const Wl=32;function ii(o,a,f){if(a.format===5||a.format===6)throw new Error(`paired-RVQ format=${a.format} is retired; re-bake with typeD (--bc7-codebook)`);let k,w,C,M;if(a.format===2||a.format===Fn||a.format===$n){if(!o.features.has("texture-compression-bc"))return Pt(`⚠️  bundle is BC7 (format=${a.format}) but texture-compression-bc not supported — atlas disabled`),null;M=a.format===$n?"BC7 atlas (proberes: shared probe texture)":a.format===Fn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:k,view:w,sampler:C}=oi(o,a,"bc7-rgba-unorm",M)}else if(a.format===3||a.format===rs||a.format===qn){if(!o.features.has("texture-compression-astc"))return Pt(`⚠️  bundle is ASTC 4x4 (format=${a.format}) but texture-compression-astc not supported — atlas disabled`),null;M=a.format===qn?"ASTC 4x4 atlas (proberes: shared probe texture)":a.format===rs?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:k,view:w,sampler:C}=oi(o,a,"astc-4x4-unorm",M)}else return Pt(`⚠️  unsupported atlas format ${a.format} — atlas disabled`),null;const{rects_expanded:L}=a,A=o.createBuffer({label:"atlas rects (5-stride)",size:Nn(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(A,0,L);const I=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ss(o,I,a,f),{texture:k,view:w,sampler:C,rectsBuffer:A,texParamsBuffer:I,meta:a}}function oi(o,a,f,k){const{width:w,layer_h:C,n_layers:M,n_cols:L,layer_cuts:A,column_cuts:I,slice_width:K,atlas_bytes:q}=a,X=w/4*16,oe=o.limits.maxTextureDimension2D;if(C>oe||K>oe)throw new Error(`⚠️  atlas slice dims ${K}x${C} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Y=L*M;if(Y>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${L} cols × ${M} layers = ${Y} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=a.mip_bytes??[q],se=Q.length,W=o.createTexture({label:k,size:{width:K,height:C,depthOrArrayLayers:Y},mipLevelCount:se,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let pe=0;pe<L;pe++){const fe=I[pe]/4,ae=(I[pe+1]-I[pe])/4;for(let ue=0;ue<M;ue++){const Te=A[ue]/4,ee=(A[ue+1]-A[ue])/4,he=pe*M+ue,ve=Te*X+fe*16;o.queue.writeTexture({texture:W,mipLevel:0,origin:{x:0,y:0,z:he},aspect:"all"},q,{offset:ve,bytesPerRow:X,rowsPerImage:ee},{width:ae*4,height:ee*4,depthOrArrayLayers:1})}}const J=a.format===$n||a.format===qn;for(let pe=1;pe<se&&!J;pe++){let fe=0;for(let ae=0;ae<L;ae++)for(let ue=0;ue<M;ue++){const{cw:Te,ch:ee}=Pi(pe,I[ae+1]-I[ae],A[ue+1]-A[ue],K,C);o.queue.writeTexture({texture:W,mipLevel:pe,origin:{x:0,y:0,z:ae*M+ue},aspect:"all"},Q[pe],{offset:fe,bytesPerRow:(Te>>2)*16,rowsPerImage:ee>>2},{width:Te,height:ee,depthOrArrayLayers:1}),fe+=(Te>>2)*(ee>>2)*16}}for(let pe=1;pe<se&&J;pe++){const fe=Math.max(1,K>>pe),ae=Math.max(1,C>>pe);o.queue.writeTexture({texture:W,mipLevel:pe,origin:{x:0,y:0,z:0},aspect:"all"},Q[pe],{offset:0,bytesPerRow:Math.max(1,fe>>2)*16,rowsPerImage:Math.max(1,ae>>2)},{width:fe,height:ae,depthOrArrayLayers:1})}se>1&&console.log(`[atlas] ${se} mip levels uploaded (${J?"trilinear":"per-surfel integer level"})`);const N=W.createView({label:`${k} view`,dimension:"2d-array"}),de=o.createSampler({label:`${k} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:se>1&&J?"linear":"nearest"});return{texture:W,view:N,sampler:de}}function ss(o,a,f,k,w=1){var I;const C=new ArrayBuffer(32),M=new Uint32Array(C),L=new Float32Array(C);M[0]=k?1:0,L[1]=f.atlas_scale,L[2]=f.atlas_offset,L[3]=f.res_bias,M[4]=f.probe_mode?f.probe_mode|0:0,M[5]=f.width|0;const A=(((I=f.mip_bytes)==null?void 0:I.length)??1)>1;M[6]=A&&w!==0?1:0,L[7]=f.uv_extent,o.queue.writeBuffer(a,0,C)}async function Rs(o,a){Pt(`loading ply file from File... : ${o.name}`),qs("downloading PLY...");const f=await o.arrayBuffer();try{return await Si(f,a)}finally{On()}}async function jl(o,a){Pt(`loading ply file from URL... : ${o}`),qs("downloading PLY...");try{yi();const f=new URL(o,self.location.href).href;return await Si({url:f},a)}finally{On()}}async function Si(o,a){return new Promise((f,k)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=C=>{var L,A,I,K,q,z,X,oe,Y,Q,se,W;const M=C.data;if((M==null?void 0:M.type)==="error"){Vl(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),k(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const J=M.totalBytes,N=M.loadedBytes/(1024*1024),de=J?J/(1024*1024):void 0,pe=(M.speedBps??0)/(1024*1024),fe=J?Math.min(99,Math.floor(M.loadedBytes/J*100)):void 0,ae=de?`total ${de.toFixed(1)} MB`:"total -- MB",ue=de&&fe!==void 0?`${N.toFixed(1)} MB downloaded (${fe}%)`:`${N.toFixed(1)} MB downloaded`,Te=`${pe.toFixed(2)} MB/s`;Ft(`downloading PLY ...
${ae}, ${ue}
${Te}`);return}else if((M==null?void 0:M.type)==="fetched"){Pt(`💾 Fetched (${M.byteLength} bytes)`),si("Download"),Ft("parsing PLY..."),yi();return}else if((M==null?void 0:M.type)==="parse_progress"){const J=M.total??0,N=M.read??0,de=J>0?Math.floor(N/J*100):0;Ft(`parsing PLY ...
${N}/${J} surfels (${de}%)`);return}else if((M==null?void 0:M.type)==="done"){const J=M.num_points,N=M.K,de=M.feature_mode??0,pe=M.sh_bias,fe=M.kernel_type,ae=M.surfelBuffer,ue=M.svParamsBuffer;Pt(`🪐 Total surfels: ${J}, mode=${de===1?"SB":"SV"}, K=${N}, sh_bias=${pe}, kernel_type=${fe}`);const ee=a.createBuffer({label:"surfel input buffer",size:Nn(J*Wl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});a.queue.writeBuffer(ee,0,ae);const he=ue.byteLength>0?ue.byteLength:16,ve=a.createBuffer({label:de===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Nn(he),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});ue.byteLength>0&&a.queue.writeBuffer(ve,0,ue),w.terminate(),si("Parse"),f({num_points:J,K:N,feature_mode:de,sh_bias:pe,kernel_type:fe,surfel_buffer:ee,surfel_data:new Float32Array(ae),sv_params_buffer:ve,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(L=M.bbox)==null?void 0:L.min)==null?void 0:A[0])??-1)+(((K=(I=M.bbox)==null?void 0:I.max)==null?void 0:K[0])??1))/2,((((z=(q=M.bbox)==null?void 0:q.min)==null?void 0:z[1])??-1)+(((oe=(X=M.bbox)==null?void 0:X.max)==null?void 0:oe[1])??1))/2,((((Q=(Y=M.bbox)==null?void 0:Y.min)==null?void 0:Q[2])??-1)+(((W=(se=M.bbox)==null?void 0:se.max)==null?void 0:W[2])??1))/2]})}},w.onerror=C=>{w.terminate(),k(C)},o instanceof ArrayBuffer?(Ft("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,a){(function(f,k){k(a)})(Kl,function(f){class k{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class M extends C{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class L extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends C{constructor(e,t){super(e),this.expanded=t}}class I extends C{constructor(e,t){super(e),this.index=t}}function K(n){return n}function q(n){return n==null}function z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function X(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Y{static alreadyDisposed(){return new Y({type:"alreadydisposed"})}static notBindable(){return new Y({type:"notbindable"})}static propertyNotFound(e){return new Y({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Y({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw Y.notBindable();if(!(e in s))throw Y.propertyNotFound(e);s[e]=t}}class se extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class W{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const J="tp";function N(n){return(t,s)=>[J,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function de(n,e){return t=>e(n(t))}function pe(n){return n.rawValue}function fe(n,e){n.emitter.on("change",de(pe,e)),e(n.rawValue)}function ae(n,e,t){fe(n.value(e),t)}function ue(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{ue(n,e,t)}}function ee(n,e){fe(n,t=>{e.textContent=t??""})}const he=N("btn");class ve{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(he()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(he("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(he("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Le{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ve(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ae{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,S)=>c===S,this.emitter=new W,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:c,sender:this}))}}class Z{constructor(e){this.emitter=new W,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function j(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Z(n):new Ae(n,e)}class O{constructor(e){this.emitter=new W,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:j(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new O(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function we(n,e){const s=Object.keys(e).reduce((c,S)=>{if(c===void 0)return;const D=e[S],ne=D(n[S]);return ne.succeeded?Object.assign(Object.assign({},c),{[S]:ne.value}):void 0},{});return s}function Ce(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Ve(n){return n===null?!1:typeof n=="object"}function Ge(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ne(n){return{custom:e=>Ge(e)(n),boolean:Ge(e=>typeof e=="boolean"?e:void 0)(n),number:Ge(e=>typeof e=="number"?e:void 0)(n),string:Ge(e=>typeof e=="string"?e:void 0)(n),function:Ge(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ge(t=>t===e?e:void 0)(n),raw:Ge(e=>e)(n),object:e=>Ge(t=>{if(Ve(t))return we(t,e)})(n),array:e=>Ge(t=>{if(Array.isArray(t))return Ce(t,e)})(n)}}const le={optional:Ne(!0),required:Ne(!1)};function Pe(n,e){const t=le.required.object(e)(n);return t.succeeded?t.value:void 0}function ke(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class V{constructor(e){this.value_=e}static create(e){return[new V(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=N("");function i(n,e){return Te(n,v(void 0,e))}class h extends O{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=V.create(j(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const S=e??{};return new h(O.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(c=S.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){fe(this.globalDisabled_,i(e,"disabled")),ae(this,"hidden",i(e,"hidden"))}bindDisabled(e){fe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){fe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const b=N(""),x={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class E{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(b(void 0,x[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,x[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){ke({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const P="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function l(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(P,"svg");return t.innerHTML=y[e],t}function T(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function F(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ce(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function re(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const te=N("lbl");function xe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(te()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(te("l")),ae(t.props,"label",S=>{q(S)?this.element.classList.add(te(void 0,"nol")):(this.element.classList.remove(te(void 0,"nol")),ce(s),s.appendChild(xe(e,S)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(te("v")),this.element.appendChild(c),this.valueElement=c}}class be extends E{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ye={id:"button",type:"blade",accept(n){const e=le,t=Pe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new be(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:new Le(n.document,{props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof be)||!(n.controller.valueController instanceof Le)?null:new se(n.controller)}};class Ie extends E{constructor(e){super(e),this.value=e.value}}function Re(){return new O({positions:j([],{equals:z})})}class Oe extends O{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=O.createCore(t);return new Oe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!q(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ae(this,"expanded",s),ae(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ke(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function He(n,e){e.style.height=n.styleHeight}function nt(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),q(n.get("expandedHeight"))){const t=Ke(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{He(n,e)}),He(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ye extends w{constructor(e,t){super(e),this.rackApi_=t}}function Je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ze(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function lt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class ot{constructor(e){this.emitter=new W,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Y.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class st extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class We extends be{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new L(this,t,this.controller_.binding.target.presetKey)})}}class je extends be{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ct(n){return n instanceof _t?n.apiSet_:n instanceof Ye?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Y.shouldNeverHappen();return t}function Dt(n,e,t){if(!Q.isBindable(n))throw Y.notBindable();return new Q(n,e,t)}class _t extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new W,this.apiSet_=new ot(ct),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(S,Dt(e,t,c.presetKey),c),ne=new st(D);return this.add(ne,c.index)}addMonitor(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(S,Dt(e,t),c),ne=new rt(D);return this.add(ne,c.index)}addFolder(e){return Ze(this,e)}addButton(e){return Je(this,e)}addSeparator(e){return lt(this,e)}addTab(e){return et(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof We){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof je))throw Y.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new L(t,s.target.read(),s.target.presetKey)})}}class Mt extends Ye{constructor(e,t){super(e,new _t(e.rackController,t)),this.emitter_=new W,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Tt extends E{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Nt{constructor(e,t){const s=N(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function pt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof We&&s.binding===e)return s}return null}function $t(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof je&&s.binding===e)return s}return null}function _n(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Lt(n){return n instanceof Xe?n.rack:n instanceof Tt?n.rackController.rack:null}function qt(n){const e=Lt(n);return e?e.bcSet_:null}class en{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new W,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new ot(qt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),X(e,"parent")?e.parent=this:(e.parent_=this,ke({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){X(e,"parent")?e.parent=null:(e.parent_=null,ke({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof We)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof je)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Lt(s);if(c){const S=c.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof We)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof je)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Lt(s);if(c){const S=c.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const S=[];c===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),c===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),c.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=pt(this.find(We),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=$t(this.find(je),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=_n(this.find(Ie),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Xe extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Nt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new en({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&T(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const En=N("cnt");class Wn{constructor(e,t){var s;this.className_=N((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),En()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ae(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ae(t.props,"title",De=>{q(De)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const D=e.createElement("div");D.classList.add(this.className_("t")),ee(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const ne=e.createElement("div");ne.classList.add(this.className_("m")),this.buttonElement.appendChild(ne);const Be=t.containerElement;Be.classList.add(this.className_("c")),this.element.appendChild(Be),this.containerElement=Be}}class tn extends Tt{constructor(e,t){var s;const c=Oe.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new Xe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new Wn(e,{containerElement:S.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,nt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const jn={id:"folder",type:"blade",accept(n){const e=le,t=Pe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new tn(n.document,{blade:n.blade,expanded:n.params.expanded,props:O.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof tn?new Mt(n.controller,n.pool):null}};class Bt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class nn extends w{}const G=N("spr");class H{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(G()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(G("r")),this.element.appendChild(s)}}class ie extends E{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new H(e,{viewProps:t.viewProps})}))}}const me={id:"separator",type:"blade",accept(n){const t=Pe(n,{view:le.required.constant("separator")});return t?{params:t}:null},controller(n){return new ie(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ie?new nn(n.controller):null}},Se=N("tbi");class _e{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Se()),t.viewProps.bindClassModifiers(this.element),ae(t.props,"selected",S=>{S?this.element.classList.add(Se(void 0,"sel")):this.element.classList.remove(Se(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Se("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Se("t")),ee(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class ge{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new _e(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ee{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new ge(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Xe(e,{blade:Re(),viewProps:h.create()}),this.props=t.props,ae(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class $e{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class at extends Ye{constructor(e,t){super(e,new _t(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new W,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Y.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ee(t,{itemProps:O.fromObject({selected:!1,title:e.title}),props:O.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Y.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Y.shouldNeverHappen();const s=new $e(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Y.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new I(this,e.rawValue)})}}const vt=-1;class St{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=j(!0),this.selectedIndex=j(vt),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=vt,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Qe=N("tab");class mn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Qe(),En()),t.viewProps.bindClassModifiers(this.element),fe(t.empty,Te(this.element,Qe(void 0,"nop")));const s=e.createElement("div");s.classList.add(Qe("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Qe("i")),this.element.appendChild(c);const S=t.contentsElement;S.classList.add(Qe("c")),this.element.appendChild(S),this.contentsElement=S}}class vn extends Tt{constructor(e,t){const s=new Xe(e,{blade:t.blade,viewProps:t.viewProps}),c=new St;super({blade:t.blade,rackController:s,view:new mn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ot(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;T(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Wt={id:"tab",type:"blade",accept(n){const e=le,t=Pe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new vn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ee(n.document,{itemProps:O.fromObject({selected:!1,title:t.title}),props:O.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof vn?new at(n.controller,n.pool):null}};function bt(n,e){const t=n.accept(e.params);if(!t)return null;const s=le.optional.boolean(e.params.disabled).value,c=le.optional.boolean(e.params.hidden).value;return n.controller({blade:Re(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class kn{constructor(){this.disabled=!1,this.emitter=new W}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class sn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new W,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class cs{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new W,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Mn(n,e){for(;n.length<e;)n.push(void 0)}function gt(n){const e=[];return Mn(e,n),j(e)}function rn(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function bn(n,e){const t=[...rn(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Mn(t,n.length),t}class It{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new W,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=bn(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class At{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function wt(n,e){if(n instanceof e)return n;if(n instanceof At){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class jt{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Rt{constructor(e){this.values=O.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class js{constructor(e){this.values=O.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return q(s)||(c=Math.max(c,s)),q(t)||(c=Math.min(c,t)),c}}class Kn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const us=N("lst");class Ii{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(us()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(us("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(us("m")),c.appendChild(g(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ae(this.props_,"options",S=>{F(this.selectElement),S.forEach(D=>{const ne=e.createElement("option");ne.textContent=D.text,this.selectElement.appendChild(ne)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Bn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ii(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ks=N("pop");class Ri{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ks()),t.viewProps.bindClassModifiers(this.element),fe(t.shows,Te(this.element,Ks(void 0,"v")))}}class Hs{constructor(e,t){this.shows=j(!1),this.viewProps=t.viewProps,this.view=new Ri(e,{shows:this.shows,viewProps:this.viewProps})}}const Ys=N("txt");class zi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ys("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Hn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new zi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=c),this.view.refresh()}}function Gi(n){return String(n)}function Zs(n){return n==="false"?!1:!!n}function Xs(n){return Gi(n)}class Ui{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Vi={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Oi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Vi[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Fi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ni{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Fi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ds(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Tn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function An(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=An(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=An(n,e);return c===""?"":s+c}function ps(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=qi(n,e);return s===""?"":t+s}function Qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=$i(n,e);return e+=s.length,s===""?"":s+An(n,e)}function Wi(n,e){const t=Qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=An(n,e);return e+=c.length,t+s+c+ps(n,e)}function ji(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=An(n,e);return e+=s.length,s===""?"":t+s+ps(n,e)}function Ki(n,e){const t=Qs(n,e);return e+=t.length,t===""?"":t+ps(n,e)}const Hi=ds([Wi,ji,Ki]);function Yi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Zi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Yi(n,e);return s===""?"":t+s}function Xi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Xi(n,e);return s===""?"":t+s}function Ji(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function eo(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Ji(n,e);return s===""?"":t+s}const to=ds([Zi,Qi,eo]),no=ds([to,Hi]);function so(n,e){const t=no(n,e);return e+=t.length,t===""?null:{evaluable:new Ui(t),cursor:e}}function ro(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=er(n,e);if(!s)return null;e=s.cursor,e+=Tn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function io(n,e){var t;return(t=so(n,e))!==null&&t!==void 0?t:ro(n,e)}function Js(n,e){const t=io(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Js(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ni(s,c.evaluable)}):null}function oo(n,e,t){t+=Tn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Tn(e,t).length,{cursor:t,operator:s}):null}function ao(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let S=c.evaluable;for(;;){const D=oo(e,t,s);if(!D)break;s=D.cursor;const ne=n(t,s);if(!ne)return null;s=ne.cursor,S=new Oi(D.operator,S,ne.evaluable)}return S?{cursor:s,evaluable:S}:null}}const lo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>ao(n,e),Js);function er(n,e){return e+=Tn(n,e).length,lo(n,e)}function co(n){const e=er(n,0);return!e||e.cursor+Tn(n,e.cursor).length!==n.length?null:e.evaluable}function zt(n){var e;const t=co(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=zt(n);if(!q(e))return e}return 0}function uo(n){return String(n)}function ft(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const po=ft(0);function Yn(n){return po(n)+"%"}function nr(n){return String(n)}function hs(n){return n}function Dn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function S(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{S(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{S(()=>{n.setRawValue(s(n,e),D.options)}),S(()=>{e.setRawValue(t(n,e),D.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function xt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Ln(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Gt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ho(n){return n==="ArrowUp"||n==="ArrowDown"}function sr(n){return ho(n)||n==="ArrowLeft"||n==="ArrowRight"}function fs(n,e){var t,s;const c=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class on{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new W,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function tt(n,e,t,s,c){const S=(n-e)/(t-e);return s+S*(c-s)}function rr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ut(n,e,t){return Math.min(Math.max(n,e),t)}function ir(n,e){return(n%e+e)%e}const Ct=N("txt");class fo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Ct(),Ct(void 0,"num")),t.arrayPosition&&this.element.classList.add(Ct(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Ct("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ct()),this.inputElement.classList.add(Ct("i"));const c=e.createElement("div");c.classList.add(Ct("k")),this.element.appendChild(c),this.knobElement=c;const S=e.createElementNS(P,"svg");S.classList.add(Ct("g")),this.knobElement.appendChild(S);const D=e.createElementNS(P,"path");D.classList.add(Ct("gb")),S.appendChild(D),this.guideBodyElem_=D;const ne=e.createElementNS(P,"path");ne.classList.add(Ct("gh")),S.appendChild(ne),this.guideHeadElem_=ne;const Be=e.createElement("div");Be.classList.add(N("tt")()),this.knobElement.appendChild(Be),this.tooltipElem_=Be,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Ct(void 0,"drg"));return}this.element.classList.add(Ct(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=ut(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class In{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=j(null),this.view=new fo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new on(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),S!==void 0&&(D=Math.min(D,S)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);q(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=xt(this.baseStep_,Ln(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){xt(this.baseStep_,Ln(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const _s=N("sld");class _o{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(_s("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(_s("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ut(tt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class mo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new _o(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(tt(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=xt(this.baseStep_,Gt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){xt(this.baseStep_,Gt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ms=N("sldtxt");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ms());const s=e.createElement("div");s.classList.add(ms("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ms("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new mo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new In(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new vo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Rn(n,e){n.write(e)}function Zn(n){const e=le;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function or(n){if(n==="inline"||n==="popup")return n}function Kt(n){const e=le;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ar(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function bs(n){return q(n)?null:new Rt(ar(n))}function bo(n){const e=n?wt(n,Kn):null;return e?e.step:null}function Xn(n,e){const t=n&&wt(n,Kn);return t?rr(t.step):Math.max(rr(e),2)}function gn(n){const e=bo(n);return e??1}function wn(n,e){var t;const s=n&&wt(n,Kn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Qn=N("ckb");class go{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Qn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Qn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Qn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Qn("w")),s.appendChild(S);const D=g(e,"check");S.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class wo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new go(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function xo(n){const e=[],t=bs(n.options);return t&&e.push(t),new At(e)}const yo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Pe(e,{options:le.optional.custom(Zn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs,constraint:n=>xo(n.params),writer:n=>Rn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&wt(s,Rt);return c?new Bn(e,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new wo(e,{value:t,viewProps:n.viewProps})}},an=N("col");class Po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(an()),t.foldable.bindExpandedClass(this.element,an(void 0,"expanded")),ae(t.foldable,"completed",Te(this.element,an(void 0,"cpl")));const s=e.createElement("div");s.classList.add(an("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(an("s")),s.appendChild(c),this.swatchElement=c;const S=e.createElement("div");if(S.classList.add(an("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(an("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function So(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),S=ut(t/255,0,1),D=Math.max(s,c,S),ne=Math.min(s,c,S),Be=D-ne;let De=0,Fe=0;const qe=(ne+D)/2;return Be!==0&&(Fe=Be/(1-Math.abs(D+ne-1)),s===D?De=(c-S)/Be:c===D?De=2+(S-s)/Be:De=4+(s-c)/Be,De=De/6+(De<0?1:0)),[De*360,Fe*100,qe*100]}function Co(n,e,t){const s=(n%360+360)%360,c=ut(e/100,0,1),S=ut(t/100,0,1),D=(1-Math.abs(2*S-1))*c,ne=D*(1-Math.abs(s/60%2-1)),Be=S-D/2;let De,Fe,qe;return s>=0&&s<60?[De,Fe,qe]=[D,ne,0]:s>=60&&s<120?[De,Fe,qe]=[ne,D,0]:s>=120&&s<180?[De,Fe,qe]=[0,D,ne]:s>=180&&s<240?[De,Fe,qe]=[0,ne,D]:s>=240&&s<300?[De,Fe,qe]=[ne,0,D]:[De,Fe,qe]=[D,0,ne],[(De+Be)*255,(Fe+Be)*255,(qe+Be)*255]}function Eo(n,e,t){const s=ut(n/255,0,1),c=ut(e/255,0,1),S=ut(t/255,0,1),D=Math.max(s,c,S),ne=Math.min(s,c,S),Be=D-ne;let De;Be===0?De=0:D===s?De=60*(((c-S)/Be%6+6)%6):D===c?De=60*((S-s)/Be+2):De=60*((s-c)/Be+4);const Fe=D===0?0:Be/D,qe=D;return[De,Fe*100,qe*100]}function lr(n,e,t){const s=ir(n,360),c=ut(e/100,0,1),S=ut(t/100,0,1),D=S*c,ne=D*(1-Math.abs(s/60%2-1)),Be=S-D;let De,Fe,qe;return s>=0&&s<60?[De,Fe,qe]=[D,ne,0]:s>=60&&s<120?[De,Fe,qe]=[ne,D,0]:s>=120&&s<180?[De,Fe,qe]=[0,D,ne]:s>=180&&s<240?[De,Fe,qe]=[0,ne,D]:s>=240&&s<300?[De,Fe,qe]=[ne,0,D]:[De,Fe,qe]=[D,0,ne],[(De+Be)*255,(Fe+Be)*255,(qe+Be)*255]}function ko(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Mo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function ln(n){return[n[0],n[1],n[2]]}function cr(n,e){return[n[0],n[1],n[2],e]}const Bo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:ko,rgb:Co},hsv:{hsl:Mo,hsv:(n,e,t)=>[n,e,t],rgb:lr},rgb:{hsl:So,hsv:Eo,rgb:(n,e,t)=>[n,e,t]}};function Jn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function To(n,e){return n===e?e:ir(n,e)}function Ao(n,e,t){var s;const c=Jn(e,t);return[e==="rgb"?ut(n[0],0,c[0]):To(n[0],c[0]),ut(n[1],0,c[1]),ut(n[2],0,c[2]),ut((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function ur(n,e,t,s){const c=Jn(e,t),S=Jn(e,s);return n.map((D,ne)=>D/c[ne]*S[ne])}function Do(n,e,t){const s=ur(n,e.mode,e.type,"int"),c=Bo[e.mode][t.mode](...s);return ur(c,t.mode,"int",t.type)}function es(n,e){return typeof n!="object"||q(n)?!1:e in n&&typeof n[e]=="number"}class Ue{static black(e="int"){return new Ue([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ue(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return es(e,"r")&&es(e,"g")&&es(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&es(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==c[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Ao(e,t,s)}getComponents(e,t="int"){return cr(Do(ln(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ht=N("colp");class Lo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Ht()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ht("hsv"));const c=e.createElement("div");c.classList.add(Ht("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const S=e.createElement("div");S.classList.add(Ht("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Ht("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ne=e.createElement("div");ne.classList.add(Ht("a"));const Be=e.createElement("div");Be.classList.add(Ht("ap")),Be.appendChild(this.alphaViews_.palette.element),ne.appendChild(Be);const De=e.createElement("div");De.classList.add(Ht("at")),De.appendChild(this.alphaViews_.text.element),ne.appendChild(De),this.element.appendChild(ne)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Io(n){return n==="int"?"int":n==="float"?"float":void 0}function gs(n){const e=le;return Pe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Io)}),expanded:e.optional.boolean,picker:e.optional.custom(or)})}function cn(n){return n?.1:1}function un(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Ro(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Et(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const zo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return zo[s](t)}function pr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Et(e[1],255),Et(e[2],255),Et(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ue(t,"rgb",n):null}}function fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Et(e[1],255),Et(e[2],255),Et(e[3],255),Et(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ue(t,"rgb",n):null}}function mr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),Et(e[2],100),Et(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ue(t,"hsl",n):null}}function br(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),Et(e[2],100),Et(e[3],100),Et(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function gr(n){return e=>{const t=br(e);return t?new Ue(t,"hsl",n):null}}function wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Go(n){const e=wr(n);return e?new Ue(e,"rgb","int"):null}function xr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),tt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),tt(parseInt(t[4],16),0,255,0,1)]:null}function Uo(n){const e=xr(n);return e?new Ue(e,"rgb","int"):null}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Ue(t,"rgb",n):null}}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Cr(n){return e=>{const t=Sr(e);return t?new Ue(t,"rgb",n):null}}const Vo=[{parser:wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:pr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:yr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Oo(n){return Vo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function ws(n,e="int"){const t=Oo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Er={int:[Go,Uo,hr("int"),_r("int"),vr("int"),gr("int"),Pr("int"),Cr("int")],float:[hr("float"),_r("float"),vr("float"),gr("float"),Pr("float"),Cr("float")]};function Fo(n){const e=Er[n];return t=>{if(typeof t!="string")return Ue.black(n);const s=e.reduce((c,S)=>c||S(t),null);return s??Ue.black(n)}}function xs(n){const e=Er[n];return t=>e.reduce((s,c)=>s||c(t),null)}function kr(n){const e=ut(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Mr(n,e="#"){const t=ln(n.getComponents("rgb")).map(kr).join("");return`${e}${t}`}function ys(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(kr).join("");return`${e}${s}`}function Br(n,e){const t=ft(e==="float"?2:0);return`rgb(${ln(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function No(n){return e=>Br(e,n)}function ts(n,e){const t=ft(2),s=ft(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,D)=>(D===3?t:s)(S)).join(", ")})`}function $o(n){return e=>ts(e,n)}function qo(n){const e=[ft(0),Yn,Yn];return`hsl(${ln(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Wo(n){const e=[ft(0),Yn,Yn,ft(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Tr(n,e){const t=ft(e==="float"?2:0),s=["r","g","b"];return`{${ln(n.getComponents("rgb",e)).map((S,D)=>`${s[D]}: ${t(S)}`).join(", ")}}`}function jo(n){return e=>Tr(e,n)}function Ar(n,e){const t=ft(2),s=ft(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,ne)=>{const Be=ne===3?t:s;return`${c[ne]}: ${Be(D)}`}).join(", ")}}`}function Ko(n){return e=>Ar(e,n)}const Ho=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Mr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ys},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:qo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Wo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:No(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:$o(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:jo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Ko(e)}],[])];function Ps(n){return Ho.reduce((e,t)=>e||(Ro(t.format,n)?t.stringifier:null),null)}const zn=N("apl");class Yo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(zn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(zn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(zn("c")),s.appendChild(c),this.colorElem_=c;const S=e.createElement("div");S.classList.add(zn("m")),this.element.appendChild(S),this.markerElem_=S;const D=e.createElement("div");D.classList.add(zn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ue([t[0],t[1],t[2],0],"rgb"),c=new Ue([t[0],t[1],t[2],255],"rgb"),S=["to right",ts(s),ts(c)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=ts(e);const D=tt(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Zo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[S,D,ne]=c.getComponents("hsv");this.value.setRawValue(new Ue([S,D,ne,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=xt(cn(!0),Gt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,ne]=s.getComponents("hsv");this.value.setRawValue(new Ue([c,S,D,ne+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){xt(cn(!0),Gt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const xn=N("coltxt");function Xo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const S=n.createElement("option");return S.textContent=c.text,S.value=c.value,s.appendChild(S),s},n.createDocumentFragment())),e}class Qo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(xn("m")),this.modeElem_=Xo(e),this.modeElem_.classList.add(xn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(xn("mm")),c.appendChild(g(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(xn("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),fe(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){F(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(xn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Jo(n){return ft(n==="float"?2:0)}function ea(n,e,t){const s=Jn(n,e)[t];return new jt({min:0,max:s})}function Ss(n,e,t){return new In(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:cn(!1),parser:e.parser,props:O.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Jo(e.colorType)}),value:j(0,{constraint:ea(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ta{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=j(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Qo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Ss(e,t,0),Ss(e,t,1),Ss(e,t,2)];return s.forEach((c,S)=>{Dn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(D,ne)=>{const Be=this.colorMode.rawValue,De=D.rawValue.getComponents(Be,this.colorType_);return De[S]=ne.rawValue,new Ue(cr(ln(De),De[3]),Be,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Cs=N("hpl");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Cs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Cs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Br(new Ue([t,100,100],"hsv"));const s=tt(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=tt(ut(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,S,D,ne]=c.getComponents("hsv");this.value.setRawValue(new Ue([s,S,D,ne],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=xt(cn(!1),Gt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,ne]=s.getComponents("hsv");this.value.setRawValue(new Ue([c+t,S,D,ne],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){xt(cn(!1),Gt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Es=N("svp"),Dr=64;class ra{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Es()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Dr,s.width=Dr,s.classList.add(Es("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Es("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,S=this.canvasElement.height,D=e.getImageData(0,0,c,S),ne=D.data;for(let Fe=0;Fe<S;Fe++)for(let qe=0;qe<c;qe++){const dn=tt(qe,0,c,0,100),Un=tt(Fe,0,S,100,0),Vn=lr(s[0],dn,Un),ns=(Fe*c+qe)*4;ne[ns]=Vn[0],ne[ns+1]=Vn[1],ne[ns+2]=Vn[2],ne[ns+3]=255}e.putImageData(D,0,0);const Be=tt(s[1],0,100,0,100);this.markerElem_.style.left=`${Be}%`;const De=tt(s[2],0,100,100,0);this.markerElem_.style.top=`${De}%`}onValueChange_(){this.update_()}}class ia{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ra(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=tt(e.point.x,0,e.bounds.width,0,100),c=tt(e.point.y,0,e.bounds.height,100,0),[S,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([S,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s,c,S]=this.value.rawValue.getComponents("hsv"),D=cn(!1),ne=xt(D,Gt(e)),Be=xt(D,Ln(e));ne===0&&Be===0||this.value.setRawValue(new Ue([t,s+ne,c+Be,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=cn(!1),s=xt(t,Gt(e)),c=xt(t,Ln(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class oa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new sa(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ia(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Zo(e,{value:this.value,viewProps:this.viewProps}),text:new In(e,{parser:zt,baseStep:.1,props:O.fromObject({draggingScale:.01,formatter:ft(2)}),value:j(0,{constraint:new jt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Dn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const S=s.rawValue.getComponents();return S[3]=c.rawValue,new Ue(S,s.rawValue.mode)}}),this.textC_=new ta(e,{colorType:t.colorType,parser:zt,value:this.value,viewProps:this.viewProps}),this.view=new Lo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ks=N("colsw");class aa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ks("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ks("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ys(e)}onValueChange_(){this.update_()}}class la{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new aa(e,{value:this.value,viewProps:this.viewProps})}}class Ms{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Oe.create(t.expanded),this.swatchC_=new la(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Hn(e,{parser:t.parser,props:O.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Po(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const c=new oa(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),Dn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),nt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ca(n,e){return Ue.isColorObject(n)?Ue.fromObject(n,e):Ue.black(e)}function ua(n){return ln(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function da(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function pa(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function ha(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,tt(n&255,0,255,0,1)],"rgb")}function fa(n){return typeof n!="number"?Ue.black():pa(n)}function _a(n){return typeof n!="number"?Ue.black():ha(n)}function ma(n){const e=Ps(n);return e?(t,s)=>{Rn(t,e(s))}:null}function va(n){const e=n?da:ua;return(t,s)=>{Rn(t,e(s))}}function ba(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ga(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function wa(n,e){return(t,s)=>{n?ba(t,s,e):ga(t,s,e)}}function Bs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function xa(n){return n?e=>ys(e,"0x"):e=>Mr(e,"0x")}function ya(n){return"color"in n||"view"in n&&n.view==="color"}const Pa={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ya(e))return null;const t=gs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Bs(n.params)?_a:fa,equals:Ue.equals,writer:n=>va(Bs(n.params))},controller:n=>{const e=Bs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:"int",expanded:t??!1,formatter:xa(e),parser:xs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Sa(n){return Ue.isRgbaColorObject(n)}function Ca(n){return e=>ca(e,n)}function Ea(n,e){return t=>n?Ar(t,e):Tr(t,e)}const ka={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ue.isColorObject(n))return null;const t=gs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Ca(un(n.params)),equals:Ue.equals,writer:n=>wa(Sa(n.initialValue),un(n.params))},controller:n=>{var e;const t=Ue.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,S=(e=un(n.params))!==null&&e!==void 0?e:"int";return new Ms(n.document,{colorType:S,expanded:s??!1,formatter:Ea(t,S),parser:xs(S),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ma={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ws(n,un(e));if(!t||!Ps(t))return null;const c=gs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Fo((e=un(n.params))!==null&&e!==void 0?e:"int")},equals:Ue.equals,writer:n=>{const e=ws(n.initialValue,un(n.params));if(!e)throw Y.shouldNeverHappen();const t=ma(e);if(!t)throw Y.notBindable();return t}},controller:n=>{const e=ws(n.initialValue,un(n.params));if(!e)throw Y.shouldNeverHappen();const t=Ps(e);if(!t)throw Y.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:xs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Yt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var S,D;return(D=(S=this.components[c])===null||S===void 0?void 0:S.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const Lr=N("pndtxt");class Ba{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Lr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Lr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ta(n,e,t){return new In(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:j(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ts{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ta(e,t,c)),this.acs_.forEach((s,c)=>{Dn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[c],backward:(S,D)=>{const ne=t.assembly.toComponents(S.rawValue);return ne[c]=D.rawValue,t.assembly.fromComponents(ne)}})}),this.view=new Ba(e,{textViews:this.acs_.map(s=>s.view)})}}function Ir(n,e){return"step"in n&&!q(n.step)?new Kn(n.step,e):null}function Rr(n){return!q(n.max)&&!q(n.min)?new jt({max:n.max,min:n.min}):!q(n.max)||!q(n.min)?new js({max:n.max,min:n.min}):null}function Aa(n){const e=wt(n,jt);if(e)return[e.values.get("min"),e.values.get("max")];const t=wt(n,js);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Da(n,e){const t=[],s=Ir(n,e);s&&t.push(s);const c=Rr(n);c&&t.push(c);const S=bs(n.options);return S&&t.push(S),new At(t)}const La={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=le,s=Pe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Zn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Da(n.params,n.initialValue),writer:n=>Rn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&wt(s,Rt);if(c)return new Bn(n.document,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ft(Xn(s,t.rawValue)),D=s&&wt(s,jt);return D?new vs(n.document,{baseStep:gn(s),parser:zt,sliderProps:new O({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:O.fromObject({draggingScale:wn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new In(n.document,{baseStep:gn(s),parser:zt,props:O.fromObject({draggingScale:wn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Zt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const zr={toComponents:n=>n.getComponents(),fromComponents:n=>new Zt(...n)},yn=N("p2d");class Ia{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element),fe(t.expanded,Te(this.element,yn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(yn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(yn("b")),c.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const S=e.createElement("div");if(S.classList.add(yn("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(yn("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Xt=N("p2dp");class Ra{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Xt()),t.layout==="popup"&&this.element.classList.add(Xt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Xt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(P,"svg");c.classList.add(Xt("g")),this.padElement.appendChild(c),this.svgElem_=c;const S=e.createElementNS(P,"line");S.classList.add(Xt("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const D=e.createElementNS(P,"line");D.classList.add(Xt("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const ne=e.createElementNS(P,"line");ne.classList.add(Xt("l")),ne.setAttributeNS(null,"x1","50%"),ne.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ne),this.lineElem_=ne;const Be=e.createElement("div");Be.classList.add(Xt("m")),this.padElement.appendChild(Be),this.markerElem_=Be,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=tt(e,-s,+s,0,100),S=tt(t,-s,+s,0,100),D=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Gr(n,e,t){return[xt(e[0],Gt(n)),xt(e[1],Ln(n))*(t?1:-1)]}class za{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ra(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new on(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=tt(e.point.x,0,e.bounds.width,-s,+s),S=tt(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Zt(c,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Zt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ga{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Oe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const S=new za(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new Ts(e,{assembly:zr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ia(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Dn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,ne)=>ne.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),nt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Pn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new Pn(...n)};function Ua(n){return Pn.isObject(n)?new Pn(n.x,n.y,n.z):new Pn}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Oa(n,e){return new Yt({assembly:Ur,components:[Ut("x"in n?n.x:void 0,e.x),Ut("y"in n?n.y:void 0,e.y),Ut("z"in n?n.z:void 0,e.z)]})}function As(n,e){return{baseStep:gn(e),constraint:e,textProps:O.fromObject({draggingScale:wn(e,n),formatter:ft(Xn(e,n))})}}const Fa={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Pn.isObject(n))return null;const t=le,s=Pe(e,{x:t.optional.custom(Kt),y:t.optional.custom(Kt),z:t.optional.custom(Kt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Oa(n.params,n.initialValue),equals:Pn.equals,writer:n=>Va},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Yt))throw Y.shouldNeverHappen();return new Ts(n.document,{assembly:Ur,axes:[As(e.rawValue.x,t.components[0]),As(e.rawValue.y,t.components[1]),As(e.rawValue.z,t.components[2])],parser:zt,value:e,viewProps:n.viewProps})}};class Sn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(q(e))return!1;const t=e.x,s=e.y,c=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Vr={toComponents:n=>n.getComponents(),fromComponents:n=>new Sn(...n)};function Na(n){return Sn.isObject(n)?new Sn(n.x,n.y,n.z,n.w):new Sn}function $a(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function qa(n,e){return new Yt({assembly:Vr,components:[Ut("x"in n?n.x:void 0,e.x),Ut("y"in n?n.y:void 0,e.y),Ut("z"in n?n.z:void 0,e.z),Ut("w"in n?n.w:void 0,e.w)]})}function Wa(n,e){return{baseStep:gn(e),constraint:e,textProps:O.fromObject({draggingScale:wn(e,n),formatter:ft(Xn(e,n))})}}const ja={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Sn.isObject(n))return null;const t=le,s=Pe(e,{x:t.optional.custom(Kt),y:t.optional.custom(Kt),z:t.optional.custom(Kt),w:t.optional.custom(Kt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Na,constraint:n=>qa(n.params,n.initialValue),equals:Sn.equals,writer:n=>$a},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Yt))throw Y.shouldNeverHappen();return new Ts(n.document,{assembly:Vr,axes:e.rawValue.getComponents().map((s,c)=>Wa(s,t.components[c])),parser:zt,value:e,viewProps:n.viewProps})}};function Ka(n){const e=[],t=bs(n.options);return t&&e.push(t),new At(e)}const Ha={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Pe(e,{options:le.optional.custom(Zn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr,constraint:n=>Ka(n.params),writer:n=>Rn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&wt(s,Rt);return c?new Bn(e,{props:new O({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Hn(e,{parser:S=>S,props:O.fromObject({formatter:hs}),value:t,viewProps:n.viewProps})}},Gn={monitor:{defaultInterval:200,defaultLineCount:3}},Or=N("mll");class Ya{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Or()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Or("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ds{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ya(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Fr=N("sgl");class Za{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Fr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ls{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Za(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Xa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Pe(e,{lineCount:le.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs},controller:n=>{var e;return n.value.rawValue.length===1?new Ls(n.document,{formatter:Xs,value:n.value,viewProps:n.viewProps}):new Ds(n.document,{formatter:Xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Qt=N("grl");class Qa{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Qt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(P,"svg");s.classList.add(Qt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(P,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const S=e.createElement("div");S.classList.add(Qt("t"),N("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Fe,qe)=>{if(Fe===void 0)return;const dn=tt(qe,0,t,0,e.width),Un=tt(Fe,s,c,e.height,0);S.push([dn,Un].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const D=this.tooltipElem_,ne=this.value.rawValue[this.cursor_.rawValue];if(ne===void 0){D.classList.remove(Qt("t","a"));return}const Be=tt(this.cursor_.rawValue,0,t,0,e.width),De=tt(ne,s,c,e.height,0);D.style.left=`${Be}px`,D.style.top=`${De}px`,D.textContent=`${this.formatter_(ne)}`,D.classList.contains(Qt("t","a"))||(D.classList.add(Qt("t","a"),Qt("t","in")),r(D),D.classList.remove(Qt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ja{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=j(-1),this.view=new Qa(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new on(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(tt(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(tt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Is(n){return"format"in n&&!q(n.format)?n.format:ft(2)}function el(n){var e;return n.value.rawValue.length===1?new Ls(n.document,{formatter:Is(n.params),value:n.value,viewProps:n.viewProps}):new Ds(n.document,{formatter:Is(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function tl(n){var e,t,s;return new Ja(n.document,{formatter:Is(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,props:O.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Nr(n){return"view"in n&&n.view==="graph"}const nl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=le,s=Pe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Nr(n)?64:1,reader:n=>tr},controller:n=>Nr(n.params)?tl(n):el(n)},sl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=le,s=Pe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ds(n.document,{formatter:hs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ls(n.document,{formatter:hs,value:t,viewProps:n.viewProps})}};function rl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(q(s))return null;const c=le,S={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(S),ne=n.binding.constraint?n.binding.constraint(S):void 0,Be=j(D(s.initialValue),{constraint:ne,equals:n.binding.equals}),De=new cs({reader:D,target:e.target,value:Be,writer:n.binding.writer(S)}),Fe=c.optional.boolean(e.params.disabled).value,qe=c.optional.boolean(e.params.hidden).value,dn=n.controller({constraint:ne,document:e.document,initialValue:s.initialValue,params:s.params,value:De.value,viewProps:h.create({disabled:Fe,hidden:qe})});return new We(e.document,{binding:De,blade:Re(),props:O.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:dn})}function il(n,e){return e===0?new kn:new sn(n,e??Gn.monitor.defaultInterval)}function ol(n,e){var t,s,c;const S=le,D=n.accept(e.target.read(),e.params);if(q(D))return null;const ne={target:e.target,initialValue:D.initialValue,params:D.params},Be=n.binding.reader(ne),De=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Fe=S.optional.number(e.params.interval).value,qe=new It({reader:Be,target:e.target,ticker:il(e.document,Fe),value:gt(De)}),dn=S.optional.boolean(e.params.disabled).value,Un=S.optional.boolean(e.params.hidden).value,Vn=n.controller({document:e.document,params:D.params,value:qe.value,viewProps:h.create({disabled:dn,hidden:Un})});return new je(e.document,{binding:qe,blade:Re(),props:O.fromObject({label:"label"in e.params?(c=S.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Vn})}class al{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(q(c))throw new Y({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((D,ne)=>D??rl(ne,{document:e,target:t,params:s}),null);if(S)return S;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((S,D)=>S??ol(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,S)=>c??bt(S,{document:e,params:t}),null);if(!s)throw new Y({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof We)return new st(e);if(e instanceof je)return new rt(e);if(e instanceof Xe)return new _t(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Y.shouldNeverHappen();return t}}function ll(){const n=new al;return[fl,Fa,ja,Ha,La,Ma,ka,Pa,yo,Xa,sl,nl,ye,jn,me,Wt].forEach(e=>{n.register(e)}),n}function cl(n){return Zt.isObject(n)?new Zt(n.x,n.y):new Zt}function ul(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Ut(n,e){if(!n)return;const t=[],s=Ir(n,e);s&&t.push(s);const c=Rr(n);return c&&t.push(c),new At(t)}function dl(n,e){return new Yt({assembly:zr,components:[Ut("x"in n?n.x:void 0,e.x),Ut("y"in n?n.y:void 0,e.y)]})}function $r(n,e){const[t,s]=n?Aa(n):[];if(!q(t)||!q(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=gn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function pl(n,e){const t=e instanceof Yt?e.components[0]:void 0,s=e instanceof Yt?e.components[1]:void 0,c=$r(t,n.x),S=$r(s,n.y);return Math.max(c,S)}function qr(n,e){return{baseStep:gn(e),constraint:e,textProps:O.fromObject({draggingScale:wn(e,n),formatter:ft(Xn(e,n))})}}function hl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const fl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Zt.isObject(n))return null;const t=le,s=Pe(e,{expanded:t.optional.boolean,picker:t.optional.custom(or),x:t.optional.custom(Kt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>cl,constraint:n=>dl(n.params,n.initialValue),equals:Zt.equals,writer:n=>ul},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Yt))throw Y.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Ga(e,{axes:[qr(t.rawValue.x,s.components[0]),qr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:hl(n.params),maxValue:pl(t.rawValue,s),parser:zt,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class Wr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class jr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Kr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const _l=function(){return{id:"list",type:"blade",accept(n){const e=le,t=Pe(n,{options:e.required.custom(Zn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Rt(ar(n.params.options)),t=j(n.params.value,{constraint:e}),s=new Bn(n.document,{props:new O({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Bt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Bt)||!(n.controller.valueController instanceof Bn)?null:new Wr(n.controller)}}}();function ml(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function vl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class bl extends Mt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(We).map(s=>s.binding);vl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(We).map(t=>t.binding.target);return ml(e)}refresh(){this.controller_.rackController.rack.find(We).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(je).forEach(e=>{e.binding.read()})}}class gl extends tn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const wl={id:"slider",type:"blade",accept(n){const e=le,t=Pe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new jt({max:n.params.max,min:n.params.min}),S=new vs(n.document,{baseStep:1,parser:zt,sliderProps:new O({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:O.fromObject({draggingScale:wn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:uo}),value:j(s,{constraint:c}),viewProps:n.viewProps});return new Bt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof Bt)||!(n.controller.valueController instanceof vs)?null:new jr(n.controller)}},xl=function(){return{id:"text",type:"blade",accept(n){const e=le,t=Pe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Hn(n.document,{parser:n.params.parse,props:O.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:j(n.params.value),viewProps:n.viewProps});return new Bt(n.document,{blade:n.blade,props:O.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Bt)||!(n.controller.valueController instanceof Hn)?null:new Kr(n.controller)}}}();function yl(n){const e=n.createElement("div");return e.classList.add(N("dfw")()),n.body&&n.body.appendChild(e),e}function Hr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Pl extends bl{constructor(e){var t,s;const c=e??{},S=(t=c.document)!==null&&t!==void 0?t:l(),D=ll(),ne=new gl(S,{expanded:c.expanded,blade:Re(),props:O.fromObject({title:c.title}),viewProps:h.create()});super(ne,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:yl(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Y.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Y.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Hr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Hr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[wl,_l,Wt,xl]})}}const Sl=new k("3.1.10");f.BladeApi=w,f.ButtonApi=se,f.FolderApi=Mt,f.InputBindingApi=st,f.ListApi=Wr,f.MonitorBindingApi=rt,f.Pane=Pl,f.SeparatorApi=nn,f.SliderApi=jr,f.TabApi=at,f.TabPageApi=$e,f.TextApi=Kr,f.TpChangeEvent=M,f.VERSION=Sl,Object.defineProperty(f,"__esModule",{value:!0})})})(zs,zs.exports);var Hl=zs.exports;const Yl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
}`,Ci=32,Gs=1,Us=2,li=4,ci=512,ui=1024,tc=0,Jt=new ArrayBuffer(Ci),mt={canvas_size:new Uint32Array(Jt,0,2),accel_flags:new Uint32Array(Jt,8,1),feature_mode:new Uint32Array(Jt,12,1),gaussian_scaling:new Float32Array(Jt,16,1),sh_bias:new Float32Array(Jt,20,1),color_K:new Uint32Array(Jt,24,1),walltime:new Float32Array(Jt,28,1)};function nc(o){mt.canvas_size[0]=o.width>>>0,mt.canvas_size[1]=o.height>>>0,mt.accel_flags[0]=(o.accel_flags??Gs|Us)>>>0,mt.feature_mode[0]=(o.feature_mode??tc)>>>0,mt.gaussian_scaling[0]=o.gaussian_scaling??1,mt.sh_bias[0]=o.sh_bias??.5,mt.color_K[0]=(o.color_K??0)>>>0,mt.walltime[0]=o.walltime??0}function Ei(o,a){o.queue.writeBuffer(a,0,Jt)}function ls(o,a,f){f&&o&&a&&Ei(o,a)}function Cn(o,a,f,k,w=!0){mt.canvas_size[0]=o>>>0,mt.canvas_size[1]=a>>>0,ls(f??null,k??null,w)}function di(o,a,f,k=!0){mt.gaussian_scaling[0]=o,ls(a??null,f??null,k)}function pi(o,a,f,k=!0){mt.sh_bias[0]=o,ls(a??null,f??null,k)}function Vs(o,a,f,k=!0){let w=mt.accel_flags[0];o.oac!==void 0&&(w=o.oac?w|Gs:w&~Gs),o.spr!==void 0&&(w=o.spr?w|Us:w&~Us),o.bfc!==void 0&&(w=o.bfc?w|li:w&~li),o.hypLegacy!==void 0&&(w=o.hypLegacy?w|ci:w&~ci),o.legacyPos!==void 0&&(w=o.legacyPos?w|ui:w&~ui),mt.accel_flags[0]=w>>>0,ls(a??null,f??null,k)}const sc=256;function hi(o,a){const f=[],k=[];let w=!0;for(const C of o.split(`
`)){const M=C.trim();let L;if((L=/^\/\/#if\s+(\w+)\s*$/.exec(M))!==null){const A=!!a[L[1]];k.push({parent:w,taken:A}),w=w&&A;continue}if(/^\/\/#else\s*$/.test(M)){const A=k[k.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");w=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(M)){const A=k.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");w=A.parent;continue}w&&f.push(C)}if(k.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const rc=Ci,ic=8,oc=96,ac=12,Ws=8,Vt=1<<Ws,hn=256,is=32/Ws,lc=0,fi=is&1;function _i(o,a){return{sort_indices_buffer:a.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:a.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function cc(o,a){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[f]}),w=C=>o.createComputePipeline({layout:k,compute:{module:a,entryPoint:C,constants:{WG_SIZE:hn}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function uc(o,a,f){const k=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[k]}),M=o.createPipelineLayout({bindGroupLayouts:[w]}),L=[];for(let A=0;A<is;A++){const I={PASS_ID:A+lc,RS_RADIX_LOG2:Ws,RS_RADIX_SIZE:Vt};L.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:a,entryPoint:"local_histogram_pass",constants:I}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:I}})})}return{passes:L,localHistogramBindGroupLayout:k,scatterBindGroupLayout:w}}function dc(o){const a=o.createShaderModule({label:"local histogram",code:Jl}),f=o.createShaderModule({label:"scatter",code:Ql}),k=o.createShaderModule({label:"blelloch prefix",code:ec}),w=cc(o,k),C=uc(o,a,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:w}}function mi(o){const a=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=a.createView({dimension:"2d-array"}),k=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:a,view:f,sampler:k,rectsBuffer:w,texParamsBuffer:C,meta:M}}class pc{constructor(a,f,k,w,C,M=null,L={}){$(this,"device");$(this,"pc");$(this,"presentationFormat");$(this,"camera_buffer");$(this,"render_settings_buffer");$(this,"draw_indirect_buffer");$(this,"splat_2d_buffer");$(this,"querySet");$(this,"resolveBuffer");$(this,"resultBuffer");$(this,"queriesPerFrame",ic);$(this,"queryCapacityFrames",200);$(this,"sort_prefixBindGroup");$(this,"sort_pipelines");$(this,"sort_localHistogramBindGroups");$(this,"sort_scatterBindGroups");$(this,"lastFrame",0);$(this,"frameCount",0);$(this,"preprocessPipeline");$(this,"cullPipeline");$(this,"renderPipeline");$(this,"indirectPipeline");$(this,"renderShaderModule");$(this,"betaKernel",1);$(this,"fetchById");$(this,"octBound");$(this,"acc16");$(this,"accTexture",null);$(this,"accView",null);$(this,"accW",0);$(this,"accH",0);$(this,"legacyRenderPipeline",null);$(this,"varyingsPipeline",null);$(this,"legacyRenderer",!1);$(this,"accResolvePipeline",null);$(this,"accResolveBgl",null);$(this,"accResolveBindGroup",null);$(this,"renderSettingsBgl");$(this,"preprocessBgl2");$(this,"renderSplatsBgl");$(this,"atlasBgl");$(this,"sort_info_buffer");$(this,"sort_ping_pong");$(this,"crsBg");$(this,"gsBg");$(this,"cullBg2");$(this,"preprocessBg1");$(this,"renderSplatsBindGroup");$(this,"renderSettingsBindGroup");$(this,"atlasBindGroup");$(this,"indirectBindGroup");$(this,"sh_solvers_buffer");$(this,"bfcParamsBuffer");$(this,"bfcBindGroupLayout");$(this,"bfcBindGroup");$(this,"bgColor",[0,0,0,0]);$(this,"showPerfDialogNext",!1);$(this,"requestReorderNextFrame",!1);$(this,"reorderInFlight",!1);$(this,"downloadOnceNextRead",!1);$(this,"downloadOnceFileName","fps_metrics");$(this,"allFrameTimes",[]);$(this,"lastStageBreakdownMs",null);$(this,"timeQueryEnabled");$(this,"atlas");$(this,"atlasParamsBuffer");$(this,"_atlasEnabled",!0);$(this,"mipLodBias",1);$(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,Pt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=C.includes("timestamp-query");this.timeQueryEnabled=A,A&&Pt("⏰ using timestamp-query"),this.pc=a,this.device=f,this.presentationFormat=k,this.camera_buffer=w,this.atlas=M??mi(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",Ce=>{console.error("A WebGPU error was not captured:",Ce.error)}),this._setupTimestampQueries(),this._setupBuffers();const I=(Math.floor((this.pc.num_points+hn-1)/hn)+1)*hn,K=Math.ceil(I/hn);console.log(`keys count adjusted: ${I}`),console.log(`key size: ${this.pc.num_points}`);const q=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=dc(f);const z=[_i(I,f),_i(I,f)],X=f.createBuffer({label:"workgroup histograms",size:K*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"workgroup prefixes",size:K*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"digit base",size:Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(K/hn),se=Math.ceil(Q/hn),W=f.createBuffer({label:"prefix l0 sums",size:Q*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=f.createBuffer({label:"prefix l0 offsets",size:Q*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=f.createBuffer({label:"prefix l1 sums",size:se*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),de=f.createBuffer({label:"prefix l1 offsets",size:se*Vt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:W}},{binding:4,resource:{buffer:J}},{binding:5,resource:{buffer:N}},{binding:6,resource:{buffer:de}},{binding:7,resource:{buffer:Y}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:z[0].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:z[1].sort_depths_buffer}},{binding:2,resource:{buffer:X}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:z[0].sort_depths_buffer}},{binding:3,resource:{buffer:z[1].sort_depths_buffer}},{binding:4,resource:{buffer:z[0].sort_indices_buffer}},{binding:5,resource:{buffer:z[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:z[1].sort_depths_buffer}},{binding:3,resource:{buffer:z[0].sort_depths_buffer}},{binding:4,resource:{buffer:z[1].sort_indices_buffer}},{binding:5,resource:{buffer:z[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=q,this.sort_ping_pong=z;const pe=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),fe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ae=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:pe,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:fe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ae,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=ue,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Te=this.device.createShaderModule({code:Zl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const ee=this.device.createShaderModule({code:Xl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[pe,fe,ae,this.bfcBindGroupLayout]}),compute:{module:ee,entryPoint:"surfel_cull"}});const he=this.device.createShaderModule({code:Yl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[pe,ue]}),compute:{module:he,entryPoint:"preprocess"}});const ve=this.device.createShaderModule({label:"render_2dgs",code:hi(ai,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});ve.getCompilationInfo().then(Ce=>{Ce.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ce.messages.forEach(Ve=>{(Ve.type==="error"?console.error:Ve.type==="warning"?console.warn:console.log)(`${Ve.type} (line ${Ve.lineNum}:${Ve.linePos}): ${Ve.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Le=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Ae=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,Z=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Ae,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),j=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),O=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Le,Z,j]}),vertex:{module:ve,entryPoint:"vs_main"},fragment:{module:ve,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const we=(Ce,Ve,Ge)=>{const Ne=this.device.createShaderModule({label:`render_2dgs (${Ce})`,code:hi(ai,{FETCH_BY_ID:Ve,OCT:Ge})});return this.device.createRenderPipeline({label:`render_2dgs_${Ce}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Le,Z,j]}),vertex:{module:Ne,entryPoint:"vs_main"},fragment:{module:Ne,entryPoint:"fs_main",constants:{BETA_KERNEL:O},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=we("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?we("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Ce=>{Ce?console.error("[render_2dgs] pipeline create validation error:",Ce.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Le,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:Z,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[fi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:j,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=ve,this.betaKernel=O,this.renderSettingsBgl=Le,this.renderSplatsBgl=Z,this.atlasBgl=j}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(a,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([a,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var w;const a=new ArrayBuffer(32),f=new Uint32Array(a),k=new Float32Array(a);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,k[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,f[4]=this._mipMode!==0?Math.max(1,((w=this.atlas.meta.mip_bytes)==null?void 0:w.length)??1):1,k[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,a)}ensureAccResources(a,f){var k;if(this.accResolvePipeline===null){const w=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,C=this.device.createShaderModule({label:"acc16_resolve",code:w});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:C,entryPoint:"vs_main"},fragment:{module:C,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===a&&this.accH===f||((k=this.accTexture)==null||k.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,a),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=a,this.accH=f)}setAtlas(a){this.atlas=a??mi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&ss(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(a){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=a,ss(this.device,this.atlas.texParamsBuffer,this.atlas.meta,a,this._mipMode))}setMipLodBias(a){this.mipLodBias=a,this.writeAtlasParams()}setFetchById(a){a!==this.fetchById&&(this.fetchById=a,Pt(`[render_2dgs] fragment inputs: ${a?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(a){if(a===this.legacyRenderer)return;this.legacyRenderer=a,Vs({legacyPos:a,hypLegacy:a},this.device,this.render_settings_buffer);const f=!a&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),Pt(`[render_2dgs] renderer: ${a?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(a){this.atlas.meta.format!==4294967295&&(this._mipMode=a?1:0,this.writeAtlasParams(),ss(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var a;return(((a=this.atlas.meta.mip_bytes)==null?void 0:a.length)??1)>1}async debugReadSortedIndices(a=30){const f=Math.max(0,Math.min(a,this.pc.num_points)),k=f*Uint32Array.BYTES_PER_ELEMENT;if(k===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:k,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[fi].sort_indices_buffer,0,w,0,k),this.device.queue.submit([C.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(a,f,k=!0){const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=k&&this.timeQueryEnabled;{a.clearBuffer(this.sort_info_buffer,0,4);const L={label:"cull"};M&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const A=a.beginComputePass(L);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const I=Math.ceil(this.pc.num_points/sc);A.dispatchWorkgroups(I,1,1),A.end()}{const L=a.beginComputePass({label:"calculate indirect dispatch"});L.setPipeline(this.indirectPipeline),L.setBindGroup(0,this.indirectBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:"preprocess"};M&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const A=a.beginComputePass(L);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let L=0;L<is;L++){const A=L&1,I=this.sort_pipelines.passes[L],K=this.sort_localHistogramBindGroups[A],q=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${L}`};M&&L==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const X=a.beginComputePass(z);X.setPipeline(I.localHistogram),X.setBindGroup(0,K),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}{const z=a.beginComputePass({label:`prefix_round${L} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,Vt,1),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=a.beginComputePass({label:`prefix_round${L} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${L}`};M&&L==is-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const X=a.beginComputePass(z);X.setPipeline(I.scatterElements),X.setBindGroup(0,q),X.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),X.end()}}{let L=f;this.acc16&&(this.ensureAccResources(mt.canvas_size[0],mt.canvas_size[1]),L=this.accView);const A={label:"render",colorAttachments:[{view:L,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,...this.acc16?{}:{endOfPassWriteIndex:C+7}});const I=a.beginRenderPass(A);if(I.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),I.setBindGroup(0,this.renderSettingsBindGroup),I.setBindGroup(1,this.renderSplatsBindGroup),I.setBindGroup(2,this.atlasBindGroup),I.drawIndirect(this.draw_indirect_buffer,0),I.end(),this.acc16){const K={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(K.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const q=a.beginRenderPass(K);q.setPipeline(this.accResolvePipeline),q.setBindGroup(0,this.accResolveBindGroup),q.draw(3),q.end()}}this.frameCount++}async readPerfMetrics(a){const f=(a==null?void 0:a.silent)??!1;if(this.frameCount<=0)return;const k=this.device.createCommandEncoder({label:"timestamp resolve encoder"});k.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),k.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([k.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),L=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:w.length},()=>[]);let I=0;for(let se=0;se<M;se++){const W=(L+se)%this.queryCapacityFrames,J=W*this.queriesPerFrame;let N=!0;for(let de=0;de<w.length;de++){const[pe,fe,ae]=w[de];if(C[J+ae]===0n||C[J+fe]===0n||C[J+fe]<C[J+ae]){N=!1;break}}if(!N){!f&&W%60===0&&console.debug("[timestamp] frame slot",W,"contains unwritten (0) timestamps, skipped in stats");continue}I++;for(let de=0;de<w.length;de++){const[pe,fe,ae]=w[de],ue=Number(C[J+ae]),Te=Number(C[J+fe]);A[de].push((Te-ue)/1e6)}}if(I===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const K=[];let q=0,z=0,X=0;for(let se=0;se<w.length;se++){const W=w[se][0],J=A[se];let N=0;if(W==="Total"){const de=this.allFrameTimes;N=de.reduce((ae,ue)=>ae+ue,0)/de.length;const pe=[...de].sort((ae,ue)=>ae-ue);q=pe[Math.floor(pe.length*.99)]||0;const fe=de.reduce((ae,ue)=>ae+Math.pow(ue-N,2),0)/de.length;z=Math.sqrt(fe),X=N}else N=J.reduce((de,pe)=>de+pe,0)/J.length;K.push([W,N])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(K);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+K.map(([se,W])=>`${se}: ${W.toFixed(3)}ms`).join(`
`)+`
Total P99: ${q.toFixed(3)}ms
Total STD: ${z.toFixed(3)}ms
Total AVG: ${X.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const se=`Stage,ms
`,W=K.map(([de,pe])=>`${de},${pe.toFixed(3)}`).join(`
`),J="data:text/csv;charset=utf-8,"+encodeURIComponent(se+W),N=document.createElement("a");N.href=J,N.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(N),N.click(),N.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const a=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=document.querySelector("canvas"),f=a?a.width:1,k=a?a.height:1;nc({width:f,height:k,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Ei(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Nn(this.pc.num_points*oc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Nn(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(a){if(a&&a.trim().length>0){const f=a.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,k=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${k}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function hc(o,a){return 2*Math.atan(a/(2*o))}function fc(o,a,f,k){const w=Math.tan(k/2),C=Math.tan(f/2),M=w*o,L=-M,A=C*o,I=-A,K=ht.create();return K[0]=2*o/(A-I),K[5]=-2*o/(M-L),K[2]=(A+I)/(A-I),K[6]=(M+L)/(M-L),K[14]=1,K[10]=a/(a-o),K[11]=-(a*o)/(a-o),ht.transpose(K,K),K}async function _c(o){Pt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return Pt(`loaded cameras count: ${f.length}`),f.map(k=>{const w=R.clone(k.position),C=kt.create(...k.rotation.flat()),M=C[0],L=C[4],A=C[8],I=C[1],K=C[5],q=C[9],z=C[2],X=C[6],oe=C[10];M*(K*oe-q*X)-L*(I*oe-q*z)+A*(I*X-K*z)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const Q=ht.fromMat3(C);return{position:w,rotation:Q,img_name:k.img_name,id:k.id}})}const mc=4*2,vc=4*16,ki=4*vc+2*mc;function bc(o){return o.createBuffer({label:"camera uniform",size:ki,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const pn=new Float32Array(ki/Float32Array.BYTES_PER_ELEMENT),os=class os{constructor(a,f){$(this,"_renderSize",null);$(this,"uniform_buffer");$(this,"position",R.create());$(this,"rotation",ht.create());$(this,"fovY",45/180*Math.PI);$(this,"fovX");$(this,"focalRatioX",1);$(this,"focal",ti.create());$(this,"viewport",ti.create());$(this,"view_matrix",ht.identity());$(this,"view_inv_matrix",ht.identity());$(this,"proj_matrix",ht.identity());$(this,"proj_inv_matrix",ht.identity());$(this,"_negPos",R.create());$(this,"look",R.create(0,0,1));$(this,"up",R.create(0,1,0));$(this,"right",R.create(1,0,0));this.canvas=a,this.device=f,this.uniform_buffer=bc(f),this.on_update_canvas()}setRenderSize(a,f){this._renderSize=[a,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const a=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,k=.5*f/Math.tan(this.fovY*.5);this.focal[0]=k*this.focalRatioX,this.focal[1]=k,this.fovX=hc(this.focal[0],a),this.viewport[0]=a,this.viewport[1]=f,this.proj_matrix=fc(.01,100,this.fovX,this.fovY),ht.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ht.copy(this.rotation,this.view_matrix),ht.translate(this.view_matrix,this._negPos,this.view_matrix),ht.inverse(this.view_matrix,this.view_inv_matrix),R.transformMat4Upper3x3(os.Z_AXIS,this.view_inv_matrix,this.look),R.normalize(this.look,this.look),R.cross(this.up,this.look,this.right),R.normalize(this.right,this.right);let a=0;pn.set(this.view_matrix,a),a+=16,pn.set(this.view_inv_matrix,a),a+=16,pn.set(this.proj_matrix,a),a+=16,pn.set(this.proj_inv_matrix,a),a+=16,pn.set(this.viewport,a),a+=2,pn.set(this.focal,a),a+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,pn)}set_preset(a){R.copy(a.position,this.position),ht.copy(a.rotation,this.rotation),this.update_buffer()}setFov(a){this.fovY=a,this.on_update_canvas()}setFocalRatio(a){this.focalRatioX=a,this.on_update_canvas()}getFov(){return this.fovY}};$(os,"Z_AXIS",R.create(0,0,1));let Os=os;const gc=R.create(1,0,0),wc=R.create(0,1,0),xc=R.create(0,0,1);function yc(o,a){const f=o[0],k=o[4],w=o[8],C=o[1],M=o[5],L=o[9],A=o[2],I=o[6],K=o[10],q=f+M+K;let z,X,oe,Y;if(q>0){const Q=.5/Math.sqrt(q+1);z=.25/Q,X=(I-L)*Q,oe=(w-A)*Q,Y=(C-k)*Q}else if(f>M&&f>K){const Q=2*Math.sqrt(1+f-M-K);z=(I-L)/Q,X=.25*Q,oe=(k+C)/Q,Y=(w+A)/Q}else if(M>K){const Q=2*Math.sqrt(1+M-f-K);z=(w-A)/Q,X=(k+C)/Q,oe=.25*Q,Y=(L+I)/Q}else{const Q=2*Math.sqrt(1+K-f-M);z=(C-k)/Q,X=(w+A)/Q,oe=(L+I)/Q,Y=.25*Q}return a[0]=X,a[1]=oe,a[2]=Y,a[3]=z,a}class Pc{constructor(a){$(this,"element");$(this,"enabled",!0);$(this,"center",R.create(0,0,0));$(this,"up",R.create(0,1,0));$(this,"rotation",[0,0]);$(this,"shift",[0,0]);$(this,"scroll",0);$(this,"speed",.1);$(this,"sensitivity",.08);$(this,"leftPressed",!1);$(this,"rightPressed",!1);$(this,"leftDragPans",!1);$(this,"lastX",0);$(this,"lastY",0);$(this,"touches",new Map);$(this,"lastTouchCenter",null);$(this,"lastPinchDistance",null);$(this,"lastTwoFingerAngle",null);$(this,"lastTouchCount",0);$(this,"roll",0);$(this,"_dir",R.create());$(this,"_right",R.create());$(this,"_upCam",R.create());$(this,"_scratch",R.create());$(this,"_qY",dt.create());$(this,"_qX",dt.create());$(this,"_qRot",dt.create());$(this,"_qZ",dt.create());$(this,"_qLocal",dt.create());$(this,"_qWorldToCam",dt.create());$(this,"_scratchMat3",kt.create());$(this,"bboxMin",null);$(this,"bboxMax",null);$(this,"anchor",R.create(0,0,0));$(this,"downCallback",a=>{var f,k,w,C;if(this.enabled){if(a.pointerType==="touch"){this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),(k=(f=a.target)==null?void 0:f.setPointerCapture)==null||k.call(f,a.pointerId),a.preventDefault();return}a.isPrimary&&(a.button===0?(this.leftPressed=!0,this.leftDragPans=a.shiftKey):a.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=a.pageX,this.lastY=a.pageY,(C=(w=a.target)==null?void 0:w.setPointerCapture)==null||C.call(w,a.pointerId),a.preventDefault())}});$(this,"moveCallback",a=>{if(!this.enabled)return;if(a.pointerType==="touch"){if(!this.touches.has(a.pointerId))return;this.touches.set(a.pointerId,{x:a.pageX,y:a.pageY}),this.handleTouchGestures(),a.preventDefault();return}if(!a.isPrimary||!this.leftPressed&&!this.rightPressed)return;a.preventDefault();const f=a.pageX-this.lastX,k=a.pageY-this.lastY;this.lastX=a.pageX,this.lastY=a.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=k):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=k)});$(this,"upCallback",a=>{var f,k,w,C;if(a.pointerType==="touch"){this.touches.delete(a.pointerId),this.handleTouchGestures(),(k=(f=a.target)==null?void 0:f.releasePointerCapture)==null||k.call(f,a.pointerId),a.preventDefault();return}a.button===0?this.leftPressed=!1:a.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(w=a.target)==null?void 0:w.releasePointerCapture)==null||C.call(w,a.pointerId),a.preventDefault()});$(this,"wheelCallback",a=>{if(!this.enabled||(a.preventDefault(),this.rightPressed))return;let f=a.deltaY;a.deltaMode===1?f*=16:a.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=a,this.registerElement(a.canvas)}registerElement(a){this.element&&this.element!==a&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=a,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(a){R.copy(a,this.center),R.copy(a,this.anchor)}setOrbitPivot(a){R.set(a[0],a[1],a[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(a){if(!isFinite(a)||a<.001)return;const f=this.camera.rotation;R.set(f[2],f[6],f[10],this._dir),R.normalize(this._dir,this._dir),R.scale(this._dir,a,this._dir),R.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const a=this.camera;if(R.subtract(this.center,a.position,this._scratch),R.length(this._scratch)<1e-6)return;R.normalize(this._scratch,this._scratch),R.cross(this.up,this._scratch,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right),R.normalize(this._right,this._right),R.cross(this._scratch,this._right,this._upCam),R.normalize(this._upCam,this._upCam);const f=a.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,a.update_buffer()}setBbox(a,f){this.bboxMin=R.create(a[0],a[1],a[2]),this.bboxMax=R.create(f[0],f[1],f[2]);const k=(a[0]+f[0])*.5,w=(a[1]+f[1])*.5,C=(a[2]+f[2])*.5;R.set(k,w,C,this.center),R.set(k,w,C,this.anchor)}resetToCamera(){const a=this.camera.rotation;R.set(a[2],a[6],a[10],this._dir),R.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let k=-1/0,w=1/0,C=!1;for(let M=0;M<3;M++){const L=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],I=this.bboxMax[M]-this.camera.position[M];if(Math.abs(L)>1e-8){const K=A/L,q=I/L;k=Math.max(k,Math.min(K,q)),w=Math.min(w,Math.max(K,q))}else if(A>0||I<0){C=!0;break}}!C&&k<=w&&w>0&&(f=(Math.max(k,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){R.subtract(this.anchor,this.camera.position,this._scratch);const k=R.dot(this._scratch,this._dir);f=k>.001?k:R.length(this._scratch)}f=Math.max(.1,f),R.scale(this._dir,f,this._dir),R.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const a=this.touches.size;if(a!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=a,a===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const k=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=k*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(a===2){const f=Array.from(this.touches.values()),k=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,M=f[1].y-f[0].y,L=Math.hypot(C,M),A=Math.atan2(M,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const I=k-this.lastTouchCenter[0],K=w-this.lastTouchCenter[1],q=Math.hypot(I,K),z=Math.abs(L-this.lastPinchDistance);let X=A-this.lastTwoFingerAngle;X>Math.PI&&(X-=2*Math.PI),X<-Math.PI&&(X+=2*Math.PI),q>.5&&(this.shift[1]-=I,this.shift[0]+=K),z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(L/this.lastPinchDistance)*10),Math.abs(X)>.0087&&(this.roll+=X)}this.lastTouchCenter=[k,w],this.lastPinchDistance=L,this.lastTwoFingerAngle=A}}update(a){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const Q=f.rotation;this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],R.length(this.up)>1e-6?R.normalize(this.up,this.up):R.set(0,1,0,this.up)}let k=0,w=!1;Math.abs(this.roll)>1e-4&&(k=this.roll,this.roll=0,w=!0),R.subtract(f.position,this.center,this._dir);let C=R.length(this._dir);C<1e-6&&(C=1e-6);const M=Math.exp(Math.log(C)+this.scroll*a*10*this.speed);R.scale(this._dir,M/C,this._dir),C=M;const L=f.rotation;this._right[0]=L[0],this._right[1]=L[4],this._right[2]=L[8],R.normalize(this._right,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right);const A=R.create(L[1],L[5],L[9]);R.normalize(A,A),R.length(A)<1e-6&&R.set(0,1,0,A);const I=a*this.speed*.1*C,K=this.shift[1]*I,q=-this.shift[0]*I;R.scale(this._right,K,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position),R.scale(A,q,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position);const z=this.rotation[0]*a*this.sensitivity,X=this.rotation[1]*a*this.sensitivity;if(Math.abs(z)>1e-5||Math.abs(X)>1e-5||w){const Q=f.rotation;yc(Q,this._qWorldToCam),dt.fromAxisAngle(gc,-X,this._qX),dt.fromAxisAngle(wc,-z,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),w&&(dt.fromAxisAngle(xc,1*k,this._qZ),dt.multiply(this._qZ,this._qLocal,this._qLocal)),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),kt.fromQuat(this._qWorldToCam,this._scratchMat3),ht.fromMat3(this._scratchMat3,f.rotation);const se=f.rotation,W=se[2],J=se[6],N=se[10];f.position[0]=this.center[0]-W*C,f.position[1]=this.center[1]-J*C,f.position[2]=this.center[2]-N*C,this.up[0]=se[1],this.up[1]=se[5],this.up[2]=se[9],R.normalize(this.up,this.up)}else R.add(this.center,this._dir,f.position);f.update_buffer();const Y=Math.pow(.8,a*60);this.rotation[0]*=Y,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=Y,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=Y,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=Y,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=Y,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function Mi(o){const a=R.create();for(const f of o)R.add(a,f,a);return R.scale(a,1/Math.max(o.length,1),a)}function Bi(o,a){const f=kt.create();kt.inverse(o,f);const k=R.create();return k[0]=f[0]*a[0]+f[4]*a[1]+f[8]*a[2],k[1]=f[1]*a[0]+f[5]*a[1]+f[9]*a[2],k[2]=f[2]*a[0]+f[6]*a[1]+f[10]*a[2],k}function Sc(o){const a=o.slice(),f=[1,0,0,0,1,0,0,0,1],k=(A,I)=>a[A*3+I],w=(A,I,K)=>{a[A*3+I]=K},C=(A,I)=>f[A*3+I],M=(A,I,K)=>{f[A*3+I]=K};for(let A=0;A<30;A++){let I=0,K=1,q=Math.abs(k(0,1));if(Math.abs(k(0,2))>q&&(I=0,K=2,q=Math.abs(k(0,2))),Math.abs(k(1,2))>q&&(I=1,K=2,q=Math.abs(k(1,2))),q<1e-12)break;const z=k(I,I),X=k(K,K),oe=k(I,K);let Y;Math.abs(z-X)<1e-30?Y=Math.PI/4*Math.sign(oe):Y=.5*Math.atan2(2*oe,z-X);const Q=Math.cos(Y),se=Math.sin(Y);for(let W=0;W<3;W++){const J=k(W,I),N=k(W,K);w(W,I,Q*J+se*N),w(W,K,-se*J+Q*N)}for(let W=0;W<3;W++){const J=k(I,W),N=k(K,W);w(I,W,Q*J+se*N),w(K,W,-se*J+Q*N)}for(let W=0;W<3;W++){const J=C(W,I),N=C(W,K);M(W,I,Q*J+se*N),M(W,K,-se*J+Q*N)}}const L=[];for(let A=0;A<3;A++)L.push({val:k(A,A),vec:R.create(C(0,A),C(1,A),C(2,A))});return L.sort((A,I)=>I.val-A.val),{vals:[L[0].val,L[1].val,L[2].val],vecs:[L[0].vec,L[1].vec,L[2].vec]}}function Cc(o,a){const f=Mi(o);let k=0,w=0,C=0,M=0,L=0,A=0;for(const oe of o){const Y=oe[0]-f[0],Q=oe[1]-f[1],se=oe[2]-f[2];k+=Y*Y,w+=Y*Q,C+=Y*se,M+=Q*Q,L+=Q*se,A+=se*se}const I=[k,w,C,w,M,L,C,L,A],{vecs:K}=Sc(I);let q=K[0],z=K[1],X=K[2];return R.dot(X,a)<0&&(R.scale(X,-1,X),R.scale(z,-1,z)),{centroid:f,normal:X,u:q,v:z}}function Ec(o){let a=0,f=0,k=0,w=0,C=0,M=0,L=0,A=0,I=0;for(const[Q,se]of o){const W=-2*Q,J=-2*se,N=1,de=-(Q*Q+se*se);a+=W*W,f+=W*J,k+=W*N,w+=J*J,C+=J*N,M+=N*N,L+=W*de,A+=J*de,I+=N*de}const K=kt.create(a,f,k,f,w,C,k,C,M),q=Bi(K,R.create(L,A,I)),z=q[0],X=q[1],oe=q[2],Y=z*z+X*X-oe;return{center:[z,X],radius:Math.sqrt(Math.max(Y,1e-12))}}function kc(o,a){let f=0,k=0,w=0,C=0,M=0,L=0,A=0,I=0,K=0;for(let z=0;z<o.length;z++){const X=o[z],oe=R.normalize(a[z],R.create()),Y=1-oe[0]*oe[0],Q=-oe[0]*oe[1],se=-oe[0]*oe[2],W=1-oe[1]*oe[1],J=-oe[1]*oe[2],N=1-oe[2]*oe[2];f+=Y,k+=Q,w+=se,C+=W,M+=J,L+=N,A+=Y*X[0]+Q*X[1]+se*X[2],I+=Q*X[0]+W*X[1]+J*X[2],K+=se*X[0]+J*X[1]+N*X[2]}const q=kt.create(f,k,w,k,C,M,w,M,L);return Bi(q,R.create(A,I,K))}function Ti(o,a={}){if(o.length===0)return null;const f=a.tiltDownDeg??8,k=a.radiusScale??1,w=a.alignFirst??!0,C=(a.direction??"ccw")==="ccw"?1:-1,M=o.map(ae=>R.clone(ae.position)),L=o.map(ae=>{const ue=ae.rotation;return R.create(ue[8],ue[9],ue[10])}),A=o.map(ae=>{const ue=ae.rotation;return R.create(ue[4],ue[5],ue[6])}),I=Mi(A),K=R.normalize(R.scale(I,-1,R.create())),{centroid:q,normal:z,u:X,v:oe}=Cc(M,K),Y=M.map(ae=>{const ue=R.sub(ae,q,R.create());return[R.dot(ue,X),R.dot(ue,oe)]}),{center:Q,radius:se}=Ec(Y),W=se*k,J=R.add(q,R.add(R.scale(X,Q[0],R.create()),R.scale(oe,Q[1],R.create()),R.create()),R.create()),N=kc(M,L),de=W*Math.tan(f*Math.PI/180),pe=R.sub(N,R.scale(z,de,R.create()),R.create());let fe=0;if(w){const ae=R.sub(M[0],J,R.create());fe=Math.atan2(R.dot(ae,oe),R.dot(ae,X))/(2*Math.PI)%1,fe<0&&(fe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${W.toFixed(2)}, tilt=${f}°, normal=[${z[0].toFixed(2)}, ${z[1].toFixed(2)}, ${z[2].toFixed(2)}], startPhase=${fe.toFixed(3)}`),{center:J,radius:W,normal:z,u:X,v:oe,lookAt:pe,startPhase:fe,direction:C}}function Ai(o,a){const f=(o.startPhase+a*o.direction)*2*Math.PI,k=Math.cos(f),w=Math.sin(f),C=R.add(o.center,R.add(R.scale(o.u,o.radius*k,R.create()),R.scale(o.v,o.radius*w,R.create()),R.create()),R.create()),M=R.normalize(R.sub(o.lookAt,C,R.create())),L=R.cross(M,o.normal,R.create());R.length(L)<1e-6&&R.copy(o.u,L),R.normalize(L,L);const A=R.cross(M,L,R.create());R.normalize(A,A);const I=ht.create();return I[0]=L[0],I[1]=A[0],I[2]=M[0],I[3]=0,I[4]=L[1],I[5]=A[1],I[6]=M[1],I[7]=0,I[8]=L[2],I[9]=A[2],I[10]=M[2],I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,{position:C,rotation:I,img_name:`orbit_${(a*1e3).toFixed(0)}`,id:0}}function Mc(o,a={}){const f=Ti(o,a);if(!f)return[];const k=a.numViews??120;return Array.from({length:k},(w,C)=>({...Ai(f,C/k),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}const Di="BITYMI01",Bc=0,Tc=1,Ac=2,Dc=3,Lc=4,Ic=5;function Ot(o){const a=(o&32768)>>15,f=(o&31744)>>10,k=o&1023;return f===0?(a?-1:1)*Math.pow(2,-14)*(k/1024):f===31?k?NaN:a?-1/0:1/0:(a?-1:1)*Math.pow(2,f-15)*(1+k/1024)}function Fs(o,a,f,k,w,C,M,L,A,I=.5){const K=A?A.length:M.length/8,q=[],z=[];for(let Y=0;Y<K;Y++){const se=(A?A[Y]:Y)*8,W=M[se]-o,J=M[se+1]-a,N=M[se+2]-f,de=W*k+J*w+N*C;if(de<=0||!(L[se+7]>>>16&1))continue;const pe=L[se+4],fe=Ot(pe&65535),ae=Ot(pe>>>16&65535),ue=3*Math.max(fe,ae),Te=W-de*k,ee=J-de*w,he=N-de*C;if(Te*Te+ee*ee+he*he>ue*ue)continue;const ve=Ot(L[se+3]&65535);if(ve<1/255)continue;const Le=L[se+5],Ae=L[se+6];let Z=Ot(Le&65535),j=Ot(Le>>>16&65535),O=Ot(Ae&65535),we=Ot(Ae>>>16&65535);const Ce=Math.hypot(Z,j,O,we)||1;Z/=Ce,j/=Ce,O/=Ce,we/=Ce;const Ve=1-2*(O*O+we*we),Ge=2*(j*O+Z*we),Ne=2*(j*we-Z*O),le=2*(j*O-Z*we),Pe=1-2*(j*j+we*we),ke=2*(O*we+Z*j),B=2*(j*we+Z*O),V=2*(O*we-Z*j),v=1-2*(j*j+O*O),i=k*B+w*V+C*v;if(Math.abs(i)<1e-6)continue;const h=(W*B+J*V+N*v)/i;if(!(h>0))continue;const u=h*k-W,b=h*w-J,x=h*C-N,E=(u*Ve+b*Ge+x*Ne)/(fe||1e-6),P=(u*le+b*Pe+x*ke)/(ae||1e-6),r=E*E+P*P;if(r>9)continue;const m=Math.min(.99,ve*Math.exp(-.5*r));m<1/255||(q.push(h),z.push(m))}if(q.length===0)return null;const X=q.map((Y,Q)=>Q).sort((Y,Q)=>q[Y]-q[Q]);let oe=1;for(const Y of X)if(oe*=1-z[Y],oe<I)return q[Y];return null}function Ns(o,a,f){const k=(o-f.viewport[0]*.5)/f.focal[0],w=-((a-f.viewport[1]*.5)/f.focal[1]),C=f.rotation;let M=k*C[0]+w*C[1]+C[2],L=k*C[4]+w*C[5]+C[6],A=k*C[8]+w*C[9]+C[10];const I=Math.hypot(M,L,A)||1;return[M/I,L/I,A/I]}function Rc(o,a,f,k,w,C){const[M,L,A]=Ns(o,a,k),I=k.position[0],K=k.position[1],q=k.position[2],z=new Uint32Array(w.buffer,w.byteOffset,w.length);let X=Fs(I,K,q,M,L,A,w,z,null,.5);return X===null&&(X=Fs(I,K,q,M,L,A,w,z,null,.8)),X===null?null:[I+X*M,K+X*L,q+X*A]}function zc(o,a){const f=o.viewport[0],k=o.viewport[1],w=new Uint32Array(a.buffer,a.byteOffset,a.length),C=o.position[0],M=o.position[1],L=o.position[2],[A,I,K]=Ns(f*.5,k*.5,o),q=.06*Math.max(f,k),z=(q+2)/o.focal[0],X=a.length/8,oe=[];for(let W=0;W<X;W++){const J=W*8,N=a[J]-C,de=a[J+1]-M,pe=a[J+2]-L,fe=N*A+de*I+pe*K;if(fe<=0)continue;const ae=w[J+4],ue=3*Math.max(Ot(ae&65535),Ot(ae>>>16&65535)),Te=N-fe*A,ee=de-fe*I,he=pe-fe*K,ve=fe*z+ue;Te*Te+ee*ee+he*he<=ve*ve&&oe.push(W)}if(oe.length===0)return null;const Y=Int32Array.from(oe),Q=[],se=5;for(let W=0;W<se;W++)for(let J=0;J<se;J++){const N=f*.5+(J-(se-1)/2)/((se-1)/2)*q,de=k*.5+(W-(se-1)/2)/((se-1)/2)*q,[pe,fe,ae]=Ns(N,de,o),ue=Fs(C,M,L,pe,fe,ae,a,w,Y,.5);ue!==null&&Q.push(ue*(pe*A+fe*I+ae*K))}return Q.length<3?null:(Q.sort((W,J)=>W-J),Q[Q.length>>1])}function Li(o){const a=new Uint8Array(o),f=new TextDecoder().decode(a.subarray(0,8));if(f!==Di)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const k=new DataView(o),w=k.getUint32(8,!0),C=12,M=20;let L=null,A=null,I=null;for(let K=0;K<w;K++){const q=C+K*M,z=k.getUint32(q+0,!0),X=Number(k.getBigUint64(q+4,!0)),oe=Number(k.getBigUint64(q+12,!0)),Y=a.slice(X,X+oe).buffer;z===Bc||z===Tc||z===Ic?L=Y:z===Ac?A=Y:(z===Dc||z===Lc)&&(I=Y)}if(L===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:L,camerasBuffer:A,atlasBuffer:I}}async function vi(o,a){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const k=(()=>{const L=f.headers.get("content-length");return L&&parseInt(L,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let C;if(!w)C=await f.arrayBuffer(),a&&a(C.byteLength,k,0);else{const L=[];let A=0,I=performance.now(),K=0;for(;;){const{done:X,value:oe}=await w.read();if(X)break;L.push(oe),A+=oe.byteLength;const Y=performance.now();if(Y-I>=150&&a){const Q=(A-K)/((Y-I)/1e3);a(A,k,Q),I=Y,K=A}}const q=new Uint8Array(A);let z=0;for(const X of L)q.set(X,z),z+=X.byteLength;C=q.buffer,a&&a(A,k,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===Di?{bundle:Li(C),rawPly:null}:{bundle:null,rawPly:C}}function Gc(o){return new Promise(a=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var k;return a(((k=f.files)==null?void 0:k[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Uc(o,a,f){const k=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),C=document.getElementById("quick-links");w&&(w.onclick=async()=>{const I=await Gc(".ply,.bitymi");if(I)if(k&&(k.style.display="none"),I.name.toLowerCase().endsWith(".bitymi")){const K=await I.arrayBuffer(),{pcBuffer:q}=Li(K),z=new File([q],I.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),X=await Rs(z,o);a(X)}else{const K=await Rs(I,o);a(K)}}),C&&(C.innerHTML="");const M=new URLSearchParams(window.location.search),L=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");L&&(k&&(k.style.display="none"),f(L,A))}async function Vc(o,a,f,k){const w=new Os(o,f),C=new Pc(w);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const L=typeof window<"u"&&window.parent!==window,A={pos:new Float32Array(3),rot:new Float32Array(16)};if(L){window.addEventListener("message",Z=>{const j=Z.data;if(!(!j||j.type!=="halloumi_sync_pose")&&!(!Array.isArray(j.position)||j.position.length!==3)&&!(!Array.isArray(j.rotation)||j.rotation.length!==16)){for(let O=0;O<3;O++)w.position[O]=j.position[O];for(let O=0;O<16;O++)w.rotation[O]=j.rotation[O];w.update_buffer(),C.resetToCamera();for(let O=0;O<3;O++)A.pos[O]=w.position[O];for(let O=0;O<16;O++)A.rot[O]=w.rotation[O]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const I=()=>{if(!L)return;const Z=w.position,j=w.rotation;let O=!1;for(let we=0;we<3;we++)if(Math.abs(Z[we]-A.pos[we])>1e-6){O=!0;break}if(!O){for(let we=0;we<16;we++)if(Math.abs(j[we]-A.rot[we])>1e-6){O=!0;break}}if(O){for(let we=0;we<3;we++)A.pos[we]=Z[we];for(let we=0;we<16;we++)A.rot[we]=j[we];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Z[0],Z[1],Z[2]],rotation:Array.from(j)},"*")}catch{}}},K="rgba8unorm";a.configure({device:f,format:K,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let q=null,z=null;const X=()=>{w.on_update_canvas(),q!==null&&Cn(o.width,o.height,f,q.render_settings_buffer),z!==null&&z()};new ResizeObserver(()=>{const Z=Math.max(.25,he.render_scale),j=Math.max(1,Math.ceil(Z*o.clientWidth)),O=Math.max(1,Math.ceil(Z*o.clientHeight));o.width===j&&o.height===O||(o.width=j,o.height=O,X())}).observe(o);let Y=0,Q=0;const se=()=>{(o.width!==Y||o.height!==Q)&&(Y=o.width,Q=o.height,X())},W=new URLSearchParams(window.location.search);let N=W.get("animation")==="1";C.enabled=!N;const de=W.get("camera_url"),pe=W.get("bfc"),fe=pe==="1"||pe==="true",ae=W.get("bfc_cos"),ue=ae!==null?Number(ae):NaN,Te=Number.isFinite(ue)?ue:2,ee=Math.max(1,window.devicePixelRatio||1),he={gaussian_scaling:1,sh_bias:.5,animate:N,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:fe,bfc_cos:Te,legacy_renderer:!1,fetch_by_id:!0,render_scale:1},ve=new Hl.Pane({title:"Config",expanded:!0});ve.addInput(he,"animate",{label:"Animate"}).on("change",Z=>{const j=N;N=Z.value,C.enabled=!Z.value,!j&&N&&Le.value&&Le.value.onAnimateStart(),j&&!N&&Le.value&&Le.value.onAnimateStop()}),ve.addInput(he,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};Uc(f,Z=>Ae(Z,[],null),async(Z,j)=>{let O=j??de,we,Ce=null;const Ve=Z.toLowerCase();if(Ve.endsWith(".bitymi")||Ve.includes(".bitymi?")){qs("downloading bundle ...");try{const{bundle:ke}=await vi(Z,(V,v,i)=>{const h=V/1048576,u=v?v/(1024*1024):void 0,b=i/(1024*1024),x=v?Math.min(99,Math.floor(V/v*100)):void 0,E=u?`total ${u.toFixed(1)} MB`:"total -- MB",P=u&&x!==void 0?`${h.toFixed(1)} MB downloaded (${x}%)`:`${h.toFixed(1)} MB downloaded`,r=`${b.toFixed(2)} MB/s`;Ft(`downloading bundle ...
${E}, ${P}
${r}`)});if(!ke)throw new Error("Expected a .bitymi bundle");Ft("parsing PLY ...");const B=new File([ke.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(we=await Rs(B,f),!O&&ke.camerasBuffer&&(O=URL.createObjectURL(new Blob([ke.camerasBuffer],{type:"application/json"}))),ke.atlasBuffer){const V=ke.atlasBuffer.byteLength/1048576;Ft(`uploading atlas ...
${V.toFixed(1)} MB BC7`);try{const v=ri(ke.atlasBuffer);Ce=ii(f,v,!0)}catch(v){console.warn("[atlas] failed to parse/upload atlas:",v)}}}catch(ke){throw On(),ke}}else we=await jl(Z,f);let Ge=null,Ne="";const le=W.get("atlas2");if(le)try{const{bundle:ke}=await vi(le,(B,V)=>{Ft(`downloading second atlas ...
${(B/1048576).toFixed(1)}${V?` / ${(V/1048576).toFixed(1)}`:""} MB`)});if(!(ke!=null&&ke.atlasBuffer))throw new Error("second bundle has no atlas chunk");Ft("uploading second atlas ..."),Ge=ii(f,ri(ke.atlasBuffer),!0),Ge||(Ne="second atlas: format unsupported on this device")}catch(ke){console.warn("[atlas2] failed:",ke),Ne=`second atlas failed: ${ke}`}const Pe=O?await _c(O):[];Pe.length>0&&w.set_preset(Pe[0]),Ae(we,Pe,Ce,Ge,Ne)});function Ae(Z,j=[],O=null,we=null,Ce=""){const Ve=[(Z.bbox.min[0]+Z.bbox.max[0])/2,(Z.bbox.min[1]+Z.bbox.max[1])/2,(Z.bbox.min[2]+Z.bbox.max[2])/2];C.setBbox(Z.bbox.min,Z.bbox.max),.5*Math.sqrt((Z.bbox.max[0]-Z.bbox.min[0])**2+(Z.bbox.max[1]-Z.bbox.min[1])**2+(Z.bbox.max[2]-Z.bbox.min[2])**2);function Ge(G,H){const ie=Rc(G,H,o,w,Z.surfel_data);ie&&(C.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function Ne(){const G=zc(w,Z.surfel_data);if(G!==null&&G>.001){C.setOrbitDepth(G);return}const H=w.rotation,ie=H[2],me=H[6],Se=H[10],_e=(Z.centroid[0]-w.position[0])*ie+(Z.centroid[1]-w.position[1])*me+(Z.centroid[2]-w.position[2])*Se;_e>.001&&C.setOrbitDepth(_e)}if(j.length===0){const G=Z.bbox.max[0]-Z.bbox.min[0],H=Z.bbox.max[1]-Z.bbox.min[1],ie=Z.bbox.max[2]-Z.bbox.min[2],Se=.5*Math.sqrt(G*G+H*H+ie*ie)*.5;R.set(Ve[0]-Se,Ve[1]-Se,Ve[2]-Se,w.position);const _e=R.create(Se,Se,Se);R.normalize(_e,_e);const ge=R.create(0,1,0),Ee=R.create();R.cross(ge,_e,Ee),R.normalize(Ee,Ee);const $e=R.create();R.cross(_e,Ee,$e);const at=kt.create(Ee[0],$e[0],_e[0],Ee[1],$e[1],_e[1],Ee[2],$e[2],_e[2]);ht.fromMat3(at,w.rotation),w.update_buffer()}C.setCenter(R.create(Z.centroid[0],Z.centroid[1],Z.centroid[2]));const le=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),Pe="halloumi.fetch_by_id";let ke=null;try{const G=localStorage.getItem(Pe);(G==="0"||G==="1")&&(ke=G==="1")}catch{}const B=W.get("byid"),V={fetchById:B!==null?B==="1":ke!==null?ke:!le,octBound:W.get("oct")==="1",acc16:W.get("acc16")==="1"},v=new pc(Z,f,K,w.uniform_buffer,k,O,V);Vs({hypLegacy:W.get("hyp_legacy")==="1"},f,v.render_settings_buffer),he.legacy_renderer=W.get("legacy")==="1",he.legacy_renderer&&v.setLegacyRenderer(!0),he.fetch_by_id=V.fetchById,console.log(`[render_2dgs] fetch_by_id=${V.fetchById} (source: ${B!==null?"?byid":ke!==null?"remembered":`handheld=${le}`})`),q=v,Cn(o.width,o.height,f,v.render_settings_buffer),he.atlas_enabled=O!==null;{const G=Z.surfel_data,H=G.length/8;let ie=0,me=0,Se=0;for(let ge=0;ge<H;ge++)ie+=G[ge*8],me+=G[ge*8+1],Se+=G[ge*8+2];const _e=H>0?[ie/H,me/H,Se/H]:[0,0,0];v.setBfcParams(he.bfc_cos,_e),Vs({bfc:he.bfc},f,v.render_settings_buffer),console.log(`[bfc] flag=${he.bfc} cos=${he.bfc_cos} centroid=(${_e[0].toFixed(3)}, ${_e[1].toFixed(3)}, ${_e[2].toFixed(3)})`)}let i=!1;const h=(()=>{if(O!==null)return`${O.meta.format===2?"BC7":O.meta.format===3?"ASTC 4×4":O.meta.format===7?"BC7 codebook gather (typeD)":`format=${O.meta.format}`} ${O.meta.width}×${O.meta.height}, ${O.meta.n_layers} layers`;const G=f.features.has("texture-compression-bc"),H=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(G?["BC7"]:[]).concat(H?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",h),pi(Z.sh_bias,f,v.render_settings_buffer),di(he.gaussian_scaling,f,v.render_settings_buffer),he.sh_bias=Z.sh_bias;const u=Z.num_points.toLocaleString(),b={stats:`${u} surfels · -- fps`};ve.addMonitor(b,"stats",{label:"Stats",interval:200});const x=.4,E=3,P=.3;let r=null,m=0,d=0;const p=dt.create(),l=kt.create();let _=j.length>0?0:-1;const y={view:j.length>0?`${_+1} / ${j.length}: ${j[_].img_name??_}`:"— no presets —"},g=document.createElement("span");function T(G){const H=kt.create(G[0],G[1],G[2],G[4],G[5],G[6],G[8],G[9],G[10]);return dt.fromMat(H)}function U(G,H){r={fromPos:R.clone(w.position),toPos:R.clone(G.position),fromQuat:dt.normalize(T(w.rotation)),toQuat:dt.normalize(T(G.rotation)),target:G,t:0,duration:Math.max(.01,H)}}const F=(G,H=!0)=>{if(j.length===0)return;_=(G%j.length+j.length)%j.length;const ie=j[_];H?U(ie,x):(w.set_preset(ie),C.resetToCamera(),Ne()),y.view=`${_+1} / ${j.length}: ${j[_].img_name??_}`,g.textContent=y.view};if(j.length>0){const G=ve.addSeparator(),H=document.createElement("div");H.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ie=(Se,_e,ge)=>{const Ee=document.createElement("button");return Ee.className="tp-btnv_b",Ee.textContent=Se,Ee.title=_e,Ee.style.cssText="flex:0 0 34px;height:24px;padding:0;",Ee.addEventListener("click",ge),Ee};g.textContent=y.view,g.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",H.appendChild(ie("◀","previous view (←)",()=>F(_-1))),H.appendChild(g),H.appendChild(ie("▶","next view (→)",()=>F(_+1))),(ve.element.querySelector(".tp-rotv_c")??ve.element).insertBefore(H,G.element),G.dispose()}const ce=j.length>0?Ti(j,{tiltDownDeg:15,alignFirst:!0}):null,re=ce?Mc(j,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let te=0;const xe=12;Le.value={onAnimateStart:()=>{te=0},onAnimateStop:()=>{C.resetToCamera(),Ne()}},ve.addInput(he,"render_scale",{label:"Render scale",min:.25,max:ee,step:.25}).on("change",G=>{const H=Math.max(.25,G.value),ie=Math.max(1,Math.ceil(H*o.clientWidth)),me=Math.max(1,Math.ceil(H*o.clientHeight));(o.width!==ie||o.height!==me)&&(o.width=ie,o.height=me,X())});const Me={res:""},be=()=>{const G=o.width*o.height/1e6;Me.res=`${o.width}×${o.height}  (${G.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${ee.toFixed(2)} · native ${Math.round(o.clientWidth*ee)}×${Math.round(o.clientHeight*ee)}`};be(),z=be,ve.addMonitor(Me,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ve.addInput(he,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",G=>di(G.value,f,v.render_settings_buffer)),ve.addInput(he,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",G=>pi(G.value,f,v.render_settings_buffer)),ve.addInput(he,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",G=>{v.bgColor=[G.value.r,G.value.g,G.value.b,G.value.a]});const ye=G=>G===null?"":G.meta.format===3||G.meta.format===8||G.meta.format===10?" (ASTC)":" (BC7)";let Ie=ye(O);const Re=ve.addInput(he,"atlas_enabled",{label:`Texture${Ie}`}).on("change",G=>{v.setAtlasEnabled(G.value),Ke()}),Oe=document.createElement("button");Oe.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Ke=()=>{Oe.textContent=`Texture${Ie}: ${he.atlas_enabled?"ON":"OFF"}`,Oe.style.borderColor=he.atlas_enabled?"#f0b060":"#444",Oe.style.color=he.atlas_enabled?"#f0b060":"#bbb"},He=()=>{he.atlas_enabled=!he.atlas_enabled,v.setAtlasEnabled(he.atlas_enabled),Re.refresh(),Ke()};if(Oe.title="toggle the baked texture (T)",Oe.addEventListener("click",He),O&&document.body.appendChild(Oe),Ke(),O&&(we||Ce))if(we){const G={};G[`A${ye(O)} · bundle`]="A",G[`B${ye(we)} · atlas2`]="B";const H={atlas:"A"};ve.addInput(H,"atlas",{label:"Atlas source",options:G}).on("change",ie=>{const me=ie.value==="B"?we:O;v.setAtlas(me),Ie=ye(me),Re.label=`Texture${Ie}`,Ke(),console.log(`[atlas2] now sampling ${ie.value}${Ie}`)})}else{const G={note:Ce};ve.addMonitor(G,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const nt=O!==null&&(O.meta.probe_mode|0)>0;if(v.hasMips&&nt)v.setMipMode(he.mips),ve.addInput(he,"mips",{label:"Mips (trilinear)"}).on("change",G=>v.setMipMode(G.value));else if(v.hasMips){const G=W.get("mipbias"),H={mode:G==="0"||G==="1"||G==="2"?G:"off"},ie=me=>{me==="off"?v.setMipMode(!1):(v.setMipLodBias(Number(me)),v.setMipMode(!0)),console.log(`[mips] ${me==="off"?"off (level 0 only)":`on, bias ${me}`}`)};ie(H.mode),ve.addInput(H,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",me=>ie(me.value))}ve.addInput(he,"legacy_renderer",{label:"Legacy renderer"}).on("change",G=>v.setLegacyRenderer(G.value)),ve.addInput(he,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",G=>{v.setFetchById(G.value);try{localStorage.setItem("halloumi.fetch_by_id",G.value?"1":"0")}catch{}});const Ye={aspect:"canvas"},Je=ve.addFolder({title:"📸 Screenshot",expanded:!1});Je.addInput(Ye,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const Ze={s:"pick a size to capture"};Je.addMonitor(Ze,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const lt=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let et=null;function ot(G){let H;if(Ye.aspect==="canvas")H=o.width/o.height;else{const[ge,Ee]=Ye.aspect.split(":").map(Number);H=ge/Ee}const ie=f.limits.maxTextureDimension2D;let me,Se;if(G==="canvas"&&Ye.aspect==="canvas")me=o.width,Se=o.height;else{const ge=G==="canvas"?Math.max(o.width,o.height):G;H>=1?(me=ge,Se=Math.round(ge/H)):(Se=ge,me=Math.round(ge*H))}const _e=Math.min(1,ie/Math.max(me,Se));return me=Math.max(2,Math.round(me*_e)&-2),Se=Math.max(2,Math.round(Se*_e)&-2),[me,Se]}function st(G,H){const ie=URL.createObjectURL(G),me=document.createElement("a");me.href=ie,me.download=H,document.body.appendChild(me),me.click(),me.remove(),setTimeout(()=>URL.revokeObjectURL(ie),1e4)}async function We(G,H){var ge;const ie=(G.size/1048576).toFixed(1),me=window;if(typeof me.showSaveFilePicker=="function")try{const Ee=await me.showSaveFilePicker({suggestedName:H,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),$e=await Ee.createWritable();return await $e.write(G),await $e.close(),`saved ${Ee.name??H} (${ie} MB) where you chose`}catch(Ee){if((Ee==null?void 0:Ee.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Se=new File([G],H,{type:"image/png"}),_e=navigator;if(_e.share&&((ge=_e.canShare)!=null&&ge.call(_e,{files:[Se]})))try{return await _e.share({files:[Se],title:H}),`shared ${H} (${ie} MB) via share sheet`}catch(Ee){if((Ee==null?void 0:Ee.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return st(G,H),`downloaded ${H} (${ie} MB) to your browser's Downloads folder`}async function rt(G){if(i)return;const[H,ie]=ot(G);Ze.s=`rendering ${H}×${ie}…`;const me=o.width,Se=o.height;w.setRenderSize(H,ie),Cn(H,ie,f,v.render_settings_buffer);const _e=f.createTexture({size:[H,ie,1],format:K,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),ge=Math.ceil(H*4/256)*256,Ee=f.createBuffer({size:ge*ie,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),$e=f.createCommandEncoder({label:"screenshot"});v.frame($e,_e.createView(),!1),$e.copyTextureToBuffer({texture:_e},{buffer:Ee,bytesPerRow:ge,rowsPerImage:ie},[H,ie,1]),f.queue.submit([$e.finish()]),w.clearRenderSize(),Cn(me,Se,f,v.render_settings_buffer);try{await Ee.mapAsync(GPUMapMode.READ);const at=new Uint8Array(Ee.getMappedRange()),vt=new Uint8ClampedArray(H*ie*4);for(let bt=0;bt<ie;bt++)vt.set(at.subarray(bt*ge,bt*ge+H*4),bt*H*4);for(let bt=3;bt<vt.length;bt+=4)vt[bt]=255;Ee.unmap();const St=document.createElement("canvas");St.width=H,St.height=ie,St.getContext("2d").putImageData(new ImageData(vt,H,ie),0,0);const Qe=await new Promise((bt,kn)=>St.toBlob(sn=>sn?bt(sn):kn(new Error("toBlob failed")),"image/png")),mn=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),vn=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),Wt=`${mn}_${H}x${ie}_${vn}.png`;et={blob:Qe,name:Wt},Ze.s=await We(Qe,Wt)}catch(at){console.error("[screenshot]",at),Ze.s=`failed: ${at}`}finally{Ee.destroy(),_e.destroy()}}{const G=document.createElement("div");G.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const H=(me,Se,_e)=>{const ge=document.createElement("button");ge.className="tp-btnv_b",ge.textContent=me,ge.title=Se,ge.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",ge.addEventListener("click",_e),G.appendChild(ge)};H("Canvas","current canvas size",()=>{rt("canvas")});for(const[me,Se]of lt)H(me,`${Se} px long edge`,()=>{rt(Se)});(Je.element.querySelector(".tp-fldv_c")??Je.element).appendChild(G)}Je.addButton({title:"⬇ Download last"}).on("click",()=>{if(!et){Ze.s="nothing captured yet";return}st(et.blob,et.name),Ze.s=`downloaded ${et.name} to your browser's Downloads folder`}),ve.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(j.length>0)w.set_preset(j[0]);else{const G=Z.bbox.max[0]-Z.bbox.min[0],H=Z.bbox.max[1]-Z.bbox.min[1],ie=Z.bbox.max[2]-Z.bbox.min[2],Se=.5*Math.sqrt(G*G+H*H+ie*ie)*.5;R.set(Ve[0]-Se,Ve[1]-Se,Ve[2]-Se,w.position);const _e=R.create(Se,Se,Se);R.normalize(_e,_e);const ge=R.create();R.cross(R.create(0,1,0),_e,ge),R.normalize(ge,ge);const Ee=R.create();R.cross(_e,ge,Ee);const $e=kt.create(ge[0],Ee[0],_e[0],ge[1],Ee[1],_e[1],ge[2],Ee[2],_e[2]);ht.fromMat3($e,w.rotation),w.update_buffer()}C.resetToCamera(),Ne()});const je={result:"— click Benchmark —"},ct=ve.addMonitor(je,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});ct.hidden=!0;const it={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Dt(){const H=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(it))if(H.startsWith(ie))return ie;return null}const _t=document.createElement("div");_t.id="bench-overlay",_t.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(_t);function Mt(G,H,ie){const me=Math.floor(H/Math.max(1,ie)*100),Se=32,_e=Math.floor(H/Math.max(1,ie)*Se),ge="█".repeat(_e)+"░".repeat(Se-_e);_t.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${G}</div><div>[${ge}] ${me}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${H} / ${ie} frames · offscreen · pipelined · no vsync</div>`,_t.style.display="block"}function Tt(){_t.style.display="none"}async function Nt(G=10,H=200){if(i)return;if(j.length===0){je.result="no cameras to benchmark";return}i=!0;const ie=N,me=he.animate,Se=new Float32Array(w.position),_e=new Float32Array(w.rotation);N=!1,he.animate=!1,ve.refresh(),r=null,C.enabled=!1;const ge=Dt(),Ee=ge?it[ge]:null,$e=(Ee==null?void 0:Ee.w)??o.width,at=(Ee==null?void 0:Ee.h)??o.height,vt=(Ee==null?void 0:Ee.fovY)??w.getFov(),St=ge?`${ge} · ${$e>=4e3/4+500?"images_4":"images_2"}`:"custom",Qe=o.width,mn=o.height,vn=w.getFov();o.width=$e,o.height=at,w.setFov(vt),Cn($e,at,f,v.render_settings_buffer);const Wt=f.createTexture({size:[$e,at,1],format:K,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),bt=Wt.createView(),kn=()=>{const gt=f.createCommandEncoder();v.frame(gt,bt,!1),f.queue.submit([gt.finish()])},sn=()=>new Promise(gt=>setTimeout(gt,0)),cs=20,Mn=async(gt,rn)=>{let bn=0,It=0;for(Mt(rn,0,gt),await sn();It<gt;){const At=Math.min(cs,gt-It),wt=performance.now();for(let Rt=0;Rt<At;Rt++)w.set_preset(j[(It+Rt)%j.length]),kn();await f.queue.onSubmittedWorkDone();const jt=performance.now();bn+=jt-wt,It+=At,Mt(rn,It,gt),await sn()}return bn};try{await Mn(G,"Warming up");const rn=await Mn(H,"Benchmarking")/H,bn=1e3/rn,It=Z.num_points??Z.surfel_data.length/8,At=(vt*180/Math.PI).toFixed(1),wt=`${bn.toFixed(1)} FPS  (${rn.toFixed(2)} ms/frame)
${$e}×${at} · fovY ${At}° · ${St}
${It.toLocaleString()} surfels · ${G}w+${H}b · pipelined`+(v.hasMips?` · ${v._mipMode?`mips bias ${v.mipLodBias}`:"mips off"}`:"");je.result=wt,ct.hidden=!1,console.log("[bench]",wt.replace(/\n/g,"  |  "))}catch(gt){console.error("[bench] failed:",gt),je.result=`bench failed: ${gt}`,ct.hidden=!1}finally{Tt(),Wt.destroy(),o.width=Qe,o.height=mn,w.setFov(vn),Cn(Qe,mn,f,v.render_settings_buffer),w.position.set(Se),w.rotation.set(_e),w.update_buffer(),C.enabled=!ie,N=ie,he.animate=me,ve.refresh(),i=!1}}ve.addButton({title:"📊 Benchmark"}).on("click",()=>Nt());const pt=new Set,$t=G=>{const H=G.target;return!!H&&(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)};document.addEventListener("keyup",G=>{pt.delete(G.key.toLowerCase())}),window.addEventListener("blur",()=>pt.clear());const _n=G=>{if(pt.size===0||he.animate)return;const H=w.rotation,ie=[H[0],H[4],H[8]],me=[H[1],H[5],H[9]],Se=[H[2],H[6],H[10]],_e=C.center,Ee=Math.max(.05,R.distance(w.position,_e))*(pt.has("shift")?3:1.2)*G;let $e=0,at=0,vt=0;if(pt.has("w")&&(vt+=1),pt.has("s")&&(vt-=1),pt.has("d")&&($e+=1),pt.has("a")&&($e-=1),pt.has("e")&&(at+=1),pt.has("q")&&(at-=1),!$e&&!at&&!vt)return;const St=[0,0,0];for(let Qe=0;Qe<3;Qe++)St[Qe]=(ie[Qe]*$e+me[Qe]*at+Se[Qe]*vt)*Ee;for(let Qe=0;Qe<3;Qe++)w.position[Qe]+=St[Qe],_e[Qe]+=St[Qe];r=null};document.addEventListener("keydown",G=>{if($t(G))return;const H=G.key,ie=H.toLowerCase();if(["w","a","s","d","q","e","shift"].includes(ie)&&!(G.shiftKey&&ie==="d")){pt.add(ie),G.preventDefault();return}if(ie==="t"){He();return}if(H>="0"&&H<="9"&&j.length>0){const me=parseInt(H);me<j.length&&F(me)}else H==="ArrowLeft"||H==="PageUp"?(F(_-1),G.preventDefault()):H==="ArrowRight"||H==="PageDown"?(F(_+1),G.preventDefault()):G.shiftKey&&ie==="d"&&v.debugReadSortedIndices(30).catch(me=>console.error("[DEBUG] readback failed:",me))});function Lt(G,H){const ie=o.getBoundingClientRect(),me=window.devicePixelRatio||1;return[(G-ie.left)*me,(H-ie.top)*me]}o.addEventListener("dblclick",G=>{const[H,ie]=Lt(G.clientX,G.clientY);Ge(H,ie)});let qt=0,en=0,Xe=0;o.addEventListener("pointerdown",G=>{if(G.pointerType!=="touch")return;const H=performance.now(),ie=H-qt,me=G.clientX-en,Se=G.clientY-Xe;if(ie>0&&ie<300&&me*me+Se*Se<40*40){const[_e,ge]=Lt(G.clientX,G.clientY);Ge(_e,ge),qt=0}else qt=H,en=G.clientX,Xe=G.clientY});function En(){return M}let Wn=performance.now(),tn=60,jn=Promise.resolve(),Bt=0;async function nn(){var Se;const G=performance.now(),H=Math.min((G-Wn)/1e3,.1);if(Wn=G,H>0){const _e=((Se=v.lastStageBreakdownMs)==null?void 0:Se.total)??0,ge=_e>.5?1e3/_e:1/H;tn=tn*.9+ge*.1,b.stats=`${u} surfels · ${Math.round(tn)} fps`}if(i){requestAnimationFrame(nn);return}if(En()&&(r||N)&&(r=null,C.resetToCamera(),Ne(),N&&(N=!1,he.animate=!1,ve.refresh())),N&&he.animateMode==="circle"&&ce){te+=H/xe,te>=1&&(te-=1);const _e=Ai(ce,te);w.set_preset(_e),C.update(H);const ge=f.createCommandEncoder();v.frame(ge,a.getCurrentTexture().createView()),f.queue.submit([ge.finish()]),Bt++,Bt===2&&On(),requestAnimationFrame(nn);return}if(r){r.t+=H/r.duration;const _e=Math.min(1,r.t),ge=_e*_e*(3-2*_e);R.lerp(r.fromPos,r.toPos,ge,w.position),dt.slerp(r.fromQuat,r.toQuat,ge,p),kt.fromQuat(p,l),ht.fromMat3(l,w.rotation),w.update_buffer(),r.t>=1&&(w.set_preset(r.target),r=null,N?j.length>0&&(m=P):(C.resetToCamera(),Ne()))}else if(N&&!En()){const _e=he.animateMode==="circle"&&re.length>0,ge=_e?re:j;if(ge.length!==0){if(m-=H,m<=0){const $e=((_e?d:_)+1)%ge.length;_e?d=$e:_=$e;const at=_e?E/8:E;U(ge[$e],at),_e||(y.view=`${_+1} / ${j.length}: ${j[_].img_name??_}`)}}}_n(H),C.update(H),I(),se(),await jn;const ie=f.createCommandEncoder(),me=a.getCurrentTexture().createView();v.frame(ie,me),f.queue.submit([ie.finish()]),jn=f.queue.onSubmittedWorkDone(),Bt++,Bt===2&&On(),requestAnimationFrame(nn)}requestAnimationFrame(nn)}}(function(){let a="dev";for(const k of Array.from(document.querySelectorAll('script[type="module"]'))){const C=k.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){a=C[1];break}}const f=document.createElement("div");f.textContent="v "+a,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const a=[];o.features.has("timestamp-query")&&a.push("timestamp-query"),o.features.has("texture-compression-bc")&&a.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&a.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:a,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),k=document.querySelector("#webgpu-canvas");Ol(k!==null);const w=k.getContext("webgpu");Vc(k,w,f,a)})();
