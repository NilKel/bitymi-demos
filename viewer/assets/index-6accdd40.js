var Sl=Object.defineProperty;var Cl=(o,l,f)=>l in o?Sl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var N=(o,l,f)=>(Cl(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))E(w);new MutationObserver(w=>{for(const C of w)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&E(B)}).observe(document,{childList:!0,subtree:!0});function f(w){const C={};return w.integrity&&(C.integrity=w.integrity),w.referrerPolicy&&(C.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?C.credentials="include":w.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function E(w){if(w.ep)return;w.ep=!0;const C=f(w);fetch(w.href,C)}})();function El(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const kl=El(Array,o=>o.fill(0));let ze=1e-6;function Ml(o){function l(x=0,k=0){const P=new o(2);return x!==void 0&&(P[0]=x,k!==void 0&&(P[1]=k)),P}const f=l;function E(x,k,P){const r=P??new o(2);return r[0]=x,r[1]=k,r}function w(x,k){const P=k??new o(2);return P[0]=Math.ceil(x[0]),P[1]=Math.ceil(x[1]),P}function C(x,k){const P=k??new o(2);return P[0]=Math.floor(x[0]),P[1]=Math.floor(x[1]),P}function B(x,k){const P=k??new o(2);return P[0]=Math.round(x[0]),P[1]=Math.round(x[1]),P}function L(x,k=0,P=1,r){const m=r??new o(2);return m[0]=Math.min(P,Math.max(k,x[0])),m[1]=Math.min(P,Math.max(k,x[1])),m}function A(x,k,P){const r=P??new o(2);return r[0]=x[0]+k[0],r[1]=x[1]+k[1],r}function z(x,k,P,r){const m=r??new o(2);return m[0]=x[0]+k[0]*P,m[1]=x[1]+k[1]*P,m}function $(x,k){const P=x[0],r=x[1],m=k[0],d=k[1],h=Math.sqrt(P*P+r*r),a=Math.sqrt(m*m+d*d),_=h*a,y=_&&xe(x,k)/_;return Math.acos(y)}function F(x,k,P){const r=P??new o(2);return r[0]=x[0]-k[0],r[1]=x[1]-k[1],r}const G=F;function H(x,k){return Math.abs(x[0]-k[0])<ze&&Math.abs(x[1]-k[1])<ze}function oe(x,k){return x[0]===k[0]&&x[1]===k[1]}function j(x,k,P,r){const m=r??new o(2);return m[0]=x[0]+P*(k[0]-x[0]),m[1]=x[1]+P*(k[1]-x[1]),m}function J(x,k,P,r){const m=r??new o(2);return m[0]=x[0]+P[0]*(k[0]-x[0]),m[1]=x[1]+P[1]*(k[1]-x[1]),m}function te(x,k,P){const r=P??new o(2);return r[0]=Math.max(x[0],k[0]),r[1]=Math.max(x[1],k[1]),r}function K(x,k,P){const r=P??new o(2);return r[0]=Math.min(x[0],k[0]),r[1]=Math.min(x[1],k[1]),r}function Z(x,k,P){const r=P??new o(2);return r[0]=x[0]*k,r[1]=x[1]*k,r}const Y=Z;function le(x,k,P){const r=P??new o(2);return r[0]=x[0]/k,r[1]=x[1]/k,r}function Se(x,k){const P=k??new o(2);return P[0]=1/x[0],P[1]=1/x[1],P}const de=Se;function ce(x,k,P){const r=P??new o(3),m=x[0]*k[1]-x[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function xe(x,k){return x[0]*k[0]+x[1]*k[1]}function ae(x){const k=x[0],P=x[1];return Math.sqrt(k*k+P*P)}const pe=ae;function be(x){const k=x[0],P=x[1];return k*k+P*P}const De=be;function Oe(x,k){const P=x[0]-k[0],r=x[1]-k[1];return Math.sqrt(P*P+r*r)}const Q=Oe;function ee(x,k){const P=x[0]-k[0],r=x[1]-k[1];return P*P+r*r}const O=ee;function X(x,k){const P=k??new o(2),r=x[0],m=x[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(P[0]=r/d,P[1]=m/d):(P[0]=0,P[1]=0),P}function Ve(x,k){const P=k??new o(2);return P[0]=-x[0],P[1]=-x[1],P}function Ce(x,k){const P=k??new o(2);return P[0]=x[0],P[1]=x[1],P}const me=Ce;function ye(x,k,P){const r=P??new o(2);return r[0]=x[0]*k[0],r[1]=x[1]*k[1],r}const Ge=ye;function ke(x,k,P){const r=P??new o(2);return r[0]=x[0]/k[0],r[1]=x[1]/k[1],r}const fe=ke;function Re(x=1,k){const P=k??new o(2),r=Math.random()*2*Math.PI;return P[0]=Math.cos(r)*x,P[1]=Math.sin(r)*x,P}function M(x){const k=x??new o(2);return k[0]=0,k[1]=0,k}function I(x,k,P){const r=P??new o(2),m=x[0],d=x[1];return r[0]=m*k[0]+d*k[4]+k[12],r[1]=m*k[1]+d*k[5]+k[13],r}function b(x,k,P){const r=P??new o(2),m=x[0],d=x[1];return r[0]=k[0]*m+k[4]*d+k[8],r[1]=k[1]*m+k[5]*d+k[9],r}function i(x,k,P,r){const m=r??new o(2),d=x[0]-k[0],h=x[1]-k[1],a=Math.sin(P),_=Math.cos(P);return m[0]=d*_-h*a+k[0],m[1]=d*a+h*_+k[1],m}function p(x,k,P){const r=P??new o(2);return X(x,r),Z(r,k,r)}function u(x,k,P){const r=P??new o(2);return ae(x)>k?p(x,k,r):Ce(x,r)}function v(x,k,P){const r=P??new o(2);return j(x,k,.5,r)}return{create:l,fromValues:f,set:E,ceil:w,floor:C,round:B,clamp:L,add:A,addScaled:z,angle:$,subtract:F,sub:G,equalsApproximately:H,equals:oe,lerp:j,lerpV:J,max:te,min:K,mulScalar:Z,scale:Y,divScalar:le,inverse:Se,invert:de,cross:ce,dot:xe,length:ae,len:pe,lengthSq:be,lenSq:De,distance:Oe,dist:Q,distanceSq:ee,distSq:O,normalize:X,negate:Ve,copy:Ce,clone:me,multiply:ye,mul:Ge,divide:ke,div:fe,random:Re,zero:M,transformMat4:I,transformMat3:b,rotate:i,setLength:p,truncate:u,midpoint:v}}const Yr=new Map;function bi(o){let l=Yr.get(o);return l||(l=Ml(o),Yr.set(o,l)),l}function Bl(o){function l(a,_,y){const g=new o(3);return a!==void 0&&(g[0]=a,_!==void 0&&(g[1]=_,y!==void 0&&(g[2]=y))),g}const f=l;function E(a,_,y,g){const D=g??new o(3);return D[0]=a,D[1]=_,D[2]=y,D}function w(a,_){const y=_??new o(3);return y[0]=Math.ceil(a[0]),y[1]=Math.ceil(a[1]),y[2]=Math.ceil(a[2]),y}function C(a,_){const y=_??new o(3);return y[0]=Math.floor(a[0]),y[1]=Math.floor(a[1]),y[2]=Math.floor(a[2]),y}function B(a,_){const y=_??new o(3);return y[0]=Math.round(a[0]),y[1]=Math.round(a[1]),y[2]=Math.round(a[2]),y}function L(a,_=0,y=1,g){const D=g??new o(3);return D[0]=Math.min(y,Math.max(_,a[0])),D[1]=Math.min(y,Math.max(_,a[1])),D[2]=Math.min(y,Math.max(_,a[2])),D}function A(a,_,y){const g=y??new o(3);return g[0]=a[0]+_[0],g[1]=a[1]+_[1],g[2]=a[2]+_[2],g}function z(a,_,y,g){const D=g??new o(3);return D[0]=a[0]+_[0]*y,D[1]=a[1]+_[1]*y,D[2]=a[2]+_[2]*y,D}function $(a,_){const y=a[0],g=a[1],D=a[2],U=_[0],q=_[1],ue=_[2],se=Math.sqrt(y*y+g*g+D*D),re=Math.sqrt(U*U+q*q+ue*ue),ge=se*re,Ee=ge&&xe(a,_)/ge;return Math.acos(Ee)}function F(a,_,y){const g=y??new o(3);return g[0]=a[0]-_[0],g[1]=a[1]-_[1],g[2]=a[2]-_[2],g}const G=F;function H(a,_){return Math.abs(a[0]-_[0])<ze&&Math.abs(a[1]-_[1])<ze&&Math.abs(a[2]-_[2])<ze}function oe(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function j(a,_,y,g){const D=g??new o(3);return D[0]=a[0]+y*(_[0]-a[0]),D[1]=a[1]+y*(_[1]-a[1]),D[2]=a[2]+y*(_[2]-a[2]),D}function J(a,_,y,g){const D=g??new o(3);return D[0]=a[0]+y[0]*(_[0]-a[0]),D[1]=a[1]+y[1]*(_[1]-a[1]),D[2]=a[2]+y[2]*(_[2]-a[2]),D}function te(a,_,y){const g=y??new o(3);return g[0]=Math.max(a[0],_[0]),g[1]=Math.max(a[1],_[1]),g[2]=Math.max(a[2],_[2]),g}function K(a,_,y){const g=y??new o(3);return g[0]=Math.min(a[0],_[0]),g[1]=Math.min(a[1],_[1]),g[2]=Math.min(a[2],_[2]),g}function Z(a,_,y){const g=y??new o(3);return g[0]=a[0]*_,g[1]=a[1]*_,g[2]=a[2]*_,g}const Y=Z;function le(a,_,y){const g=y??new o(3);return g[0]=a[0]/_,g[1]=a[1]/_,g[2]=a[2]/_,g}function Se(a,_){const y=_??new o(3);return y[0]=1/a[0],y[1]=1/a[1],y[2]=1/a[2],y}const de=Se;function ce(a,_,y){const g=y??new o(3),D=a[2]*_[0]-a[0]*_[2],U=a[0]*_[1]-a[1]*_[0];return g[0]=a[1]*_[2]-a[2]*_[1],g[1]=D,g[2]=U,g}function xe(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function ae(a){const _=a[0],y=a[1],g=a[2];return Math.sqrt(_*_+y*y+g*g)}const pe=ae;function be(a){const _=a[0],y=a[1],g=a[2];return _*_+y*y+g*g}const De=be;function Oe(a,_){const y=a[0]-_[0],g=a[1]-_[1],D=a[2]-_[2];return Math.sqrt(y*y+g*g+D*D)}const Q=Oe;function ee(a,_){const y=a[0]-_[0],g=a[1]-_[1],D=a[2]-_[2];return y*y+g*g+D*D}const O=ee;function X(a,_){const y=_??new o(3),g=a[0],D=a[1],U=a[2],q=Math.sqrt(g*g+D*D+U*U);return q>1e-5?(y[0]=g/q,y[1]=D/q,y[2]=U/q):(y[0]=0,y[1]=0,y[2]=0),y}function Ve(a,_){const y=_??new o(3);return y[0]=-a[0],y[1]=-a[1],y[2]=-a[2],y}function Ce(a,_){const y=_??new o(3);return y[0]=a[0],y[1]=a[1],y[2]=a[2],y}const me=Ce;function ye(a,_,y){const g=y??new o(3);return g[0]=a[0]*_[0],g[1]=a[1]*_[1],g[2]=a[2]*_[2],g}const Ge=ye;function ke(a,_,y){const g=y??new o(3);return g[0]=a[0]/_[0],g[1]=a[1]/_[1],g[2]=a[2]/_[2],g}const fe=ke;function Re(a=1,_){const y=_??new o(3),g=Math.random()*2*Math.PI,D=Math.random()*2-1,U=Math.sqrt(1-D*D)*a;return y[0]=Math.cos(g)*U,y[1]=Math.sin(g)*U,y[2]=D*a,y}function M(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function I(a,_,y){const g=y??new o(3),D=a[0],U=a[1],q=a[2],ue=_[3]*D+_[7]*U+_[11]*q+_[15]||1;return g[0]=(_[0]*D+_[4]*U+_[8]*q+_[12])/ue,g[1]=(_[1]*D+_[5]*U+_[9]*q+_[13])/ue,g[2]=(_[2]*D+_[6]*U+_[10]*q+_[14])/ue,g}function b(a,_,y){const g=y??new o(3),D=a[0],U=a[1],q=a[2];return g[0]=D*_[0*4+0]+U*_[1*4+0]+q*_[2*4+0],g[1]=D*_[0*4+1]+U*_[1*4+1]+q*_[2*4+1],g[2]=D*_[0*4+2]+U*_[1*4+2]+q*_[2*4+2],g}function i(a,_,y){const g=y??new o(3),D=a[0],U=a[1],q=a[2];return g[0]=D*_[0]+U*_[4]+q*_[8],g[1]=D*_[1]+U*_[5]+q*_[9],g[2]=D*_[2]+U*_[6]+q*_[10],g}function p(a,_,y){const g=y??new o(3),D=_[0],U=_[1],q=_[2],ue=_[3]*2,se=a[0],re=a[1],ge=a[2],Ee=U*ge-q*re,ve=q*se-D*ge,we=D*re-U*se;return g[0]=se+Ee*ue+(U*we-q*ve)*2,g[1]=re+ve*ue+(q*Ee-D*we)*2,g[2]=ge+we*ue+(D*ve-U*Ee)*2,g}function u(a,_){const y=_??new o(3);return y[0]=a[12],y[1]=a[13],y[2]=a[14],y}function v(a,_,y){const g=y??new o(3),D=_*4;return g[0]=a[D+0],g[1]=a[D+1],g[2]=a[D+2],g}function x(a,_){const y=_??new o(3),g=a[0],D=a[1],U=a[2],q=a[4],ue=a[5],se=a[6],re=a[8],ge=a[9],Ee=a[10];return y[0]=Math.sqrt(g*g+D*D+U*U),y[1]=Math.sqrt(q*q+ue*ue+se*se),y[2]=Math.sqrt(re*re+ge*ge+Ee*Ee),y}function k(a,_,y,g){const D=g??new o(3),U=[],q=[];return U[0]=a[0]-_[0],U[1]=a[1]-_[1],U[2]=a[2]-_[2],q[0]=U[0],q[1]=U[1]*Math.cos(y)-U[2]*Math.sin(y),q[2]=U[1]*Math.sin(y)+U[2]*Math.cos(y),D[0]=q[0]+_[0],D[1]=q[1]+_[1],D[2]=q[2]+_[2],D}function P(a,_,y,g){const D=g??new o(3),U=[],q=[];return U[0]=a[0]-_[0],U[1]=a[1]-_[1],U[2]=a[2]-_[2],q[0]=U[2]*Math.sin(y)+U[0]*Math.cos(y),q[1]=U[1],q[2]=U[2]*Math.cos(y)-U[0]*Math.sin(y),D[0]=q[0]+_[0],D[1]=q[1]+_[1],D[2]=q[2]+_[2],D}function r(a,_,y,g){const D=g??new o(3),U=[],q=[];return U[0]=a[0]-_[0],U[1]=a[1]-_[1],U[2]=a[2]-_[2],q[0]=U[0]*Math.cos(y)-U[1]*Math.sin(y),q[1]=U[0]*Math.sin(y)+U[1]*Math.cos(y),q[2]=U[2],D[0]=q[0]+_[0],D[1]=q[1]+_[1],D[2]=q[2]+_[2],D}function m(a,_,y){const g=y??new o(3);return X(a,g),Z(g,_,g)}function d(a,_,y){const g=y??new o(3);return ae(a)>_?m(a,_,g):Ce(a,g)}function h(a,_,y){const g=y??new o(3);return j(a,_,.5,g)}return{create:l,fromValues:f,set:E,ceil:w,floor:C,round:B,clamp:L,add:A,addScaled:z,angle:$,subtract:F,sub:G,equalsApproximately:H,equals:oe,lerp:j,lerpV:J,max:te,min:K,mulScalar:Z,scale:Y,divScalar:le,inverse:Se,invert:de,cross:ce,dot:xe,length:ae,len:pe,lengthSq:be,lenSq:De,distance:Oe,dist:Q,distanceSq:ee,distSq:O,normalize:X,negate:Ve,copy:Ce,clone:me,multiply:ye,mul:Ge,divide:ke,div:fe,random:Re,zero:M,transformMat4:I,transformMat4Upper3x3:b,transformMat3:i,transformQuat:p,getTranslation:u,getAxis:v,getScaling:x,rotateX:k,rotateY:P,rotateZ:r,setLength:m,truncate:d,midpoint:h}}const Zr=new Map;function as(o){let l=Zr.get(o);return l||(l=Bl(o),Zr.set(o,l)),l}function Tl(o){const l=bi(o),f=as(o);function E(i,p,u,v,x,k,P,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,p!==void 0&&(d[1]=p,u!==void 0&&(d[2]=u,v!==void 0&&(d[4]=v,x!==void 0&&(d[5]=x,k!==void 0&&(d[6]=k,P!==void 0&&(d[8]=P,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(i,p,u,v,x,k,P,r,m,d){const h=d??new o(12);return h[0]=i,h[1]=p,h[2]=u,h[3]=0,h[4]=v,h[5]=x,h[6]=k,h[7]=0,h[8]=P,h[9]=r,h[10]=m,h[11]=0,h}function C(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function B(i,p){const u=p??new o(12),v=i[0],x=i[1],k=i[2],P=i[3],r=v+v,m=x+x,d=k+k,h=v*r,a=x*r,_=x*m,y=k*r,g=k*m,D=k*d,U=P*r,q=P*m,ue=P*d;return u[0]=1-_-D,u[1]=a+ue,u[2]=y-q,u[3]=0,u[4]=a-ue,u[5]=1-h-D,u[6]=g+U,u[7]=0,u[8]=y+q,u[9]=g-U,u[10]=1-h-_,u[11]=0,u}function L(i,p){const u=p??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function A(i,p,u){const v=u??new o(12);return v[0]=i[0]*p,v[1]=i[1]*p,v[2]=i[2]*p,v[4]=i[4]*p,v[5]=i[5]*p,v[6]=i[6]*p,v[8]=i[8]*p,v[9]=i[9]*p,v[10]=i[10]*p,v}const z=A;function $(i,p,u){const v=u??new o(12);return v[0]=i[0]+p[0],v[1]=i[1]+p[1],v[2]=i[2]+p[2],v[4]=i[4]+p[4],v[5]=i[5]+p[5],v[6]=i[6]+p[6],v[8]=i[8]+p[8],v[9]=i[9]+p[9],v[10]=i[10]+p[10],v}function F(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const G=F;function H(i,p){return Math.abs(i[0]-p[0])<ze&&Math.abs(i[1]-p[1])<ze&&Math.abs(i[2]-p[2])<ze&&Math.abs(i[4]-p[4])<ze&&Math.abs(i[5]-p[5])<ze&&Math.abs(i[6]-p[6])<ze&&Math.abs(i[8]-p[8])<ze&&Math.abs(i[9]-p[9])<ze&&Math.abs(i[10]-p[10])<ze}function oe(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[4]===p[4]&&i[5]===p[5]&&i[6]===p[6]&&i[8]===p[8]&&i[9]===p[9]&&i[10]===p[10]}function j(i){const p=i??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function J(i,p){const u=p??new o(12);if(u===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,u}const v=i[0*4+0],x=i[0*4+1],k=i[0*4+2],P=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],a=i[2*4+2];return u[0]=v,u[1]=P,u[2]=d,u[4]=x,u[5]=r,u[6]=h,u[8]=k,u[9]=m,u[10]=a,u}function te(i,p){const u=p??new o(12),v=i[0*4+0],x=i[0*4+1],k=i[0*4+2],P=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],a=i[2*4+2],_=a*r-m*h,y=-a*P+m*d,g=h*P-r*d,D=1/(v*_+x*y+k*g);return u[0]=_*D,u[1]=(-a*x+k*h)*D,u[2]=(m*x-k*r)*D,u[4]=y*D,u[5]=(a*v-k*d)*D,u[6]=(-m*v+k*P)*D,u[8]=g*D,u[9]=(-h*v+x*d)*D,u[10]=(r*v-x*P)*D,u}function K(i){const p=i[0],u=i[0*4+1],v=i[0*4+2],x=i[1*4+0],k=i[1*4+1],P=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return p*(k*d-m*P)-x*(u*d-m*v)+r*(u*P-k*v)}const Z=te;function Y(i,p,u){const v=u??new o(12),x=i[0],k=i[1],P=i[2],r=i[4+0],m=i[4+1],d=i[4+2],h=i[8+0],a=i[8+1],_=i[8+2],y=p[0],g=p[1],D=p[2],U=p[4+0],q=p[4+1],ue=p[4+2],se=p[8+0],re=p[8+1],ge=p[8+2];return v[0]=x*y+r*g+h*D,v[1]=k*y+m*g+a*D,v[2]=P*y+d*g+_*D,v[4]=x*U+r*q+h*ue,v[5]=k*U+m*q+a*ue,v[6]=P*U+d*q+_*ue,v[8]=x*se+r*re+h*ge,v[9]=k*se+m*re+a*ge,v[10]=P*se+d*re+_*ge,v}const le=Y;function Se(i,p,u){const v=u??j();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=p[0],v[9]=p[1],v[10]=1,v}function de(i,p){const u=p??l.create();return u[0]=i[8],u[1]=i[9],u}function ce(i,p,u){const v=u??l.create(),x=p*4;return v[0]=i[x+0],v[1]=i[x+1],v}function xe(i,p,u,v){const x=v===i?i:F(i,v),k=u*4;return x[k+0]=p[0],x[k+1]=p[1],x}function ae(i,p){const u=p??l.create(),v=i[0],x=i[1],k=i[4],P=i[5];return u[0]=Math.sqrt(v*v+x*x),u[1]=Math.sqrt(k*k+P*P),u}function pe(i,p){const u=p??f.create(),v=i[0],x=i[1],k=i[2],P=i[4],r=i[5],m=i[6],d=i[8],h=i[9],a=i[10];return u[0]=Math.sqrt(v*v+x*x+k*k),u[1]=Math.sqrt(P*P+r*r+m*m),u[2]=Math.sqrt(d*d+h*h+a*a),u}function be(i,p){const u=p??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function De(i,p,u){const v=u??new o(12),x=p[0],k=p[1],P=i[0],r=i[1],m=i[2],d=i[1*4+0],h=i[1*4+1],a=i[1*4+2],_=i[2*4+0],y=i[2*4+1],g=i[2*4+2];return i!==v&&(v[0]=P,v[1]=r,v[2]=m,v[4]=d,v[5]=h,v[6]=a),v[8]=P*x+d*k+_,v[9]=r*x+h*k+y,v[10]=m*x+a*k+g,v}function Oe(i,p){const u=p??new o(12),v=Math.cos(i),x=Math.sin(i);return u[0]=v,u[1]=x,u[2]=0,u[4]=-x,u[5]=v,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Q(i,p,u){const v=u??new o(12),x=i[0*4+0],k=i[0*4+1],P=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],h=Math.cos(p),a=Math.sin(p);return v[0]=h*x+a*r,v[1]=h*k+a*m,v[2]=h*P+a*d,v[4]=h*r-a*x,v[5]=h*m-a*k,v[6]=h*d-a*P,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ee(i,p){const u=p??new o(12),v=Math.cos(i),x=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=v,u[6]=x,u[8]=0,u[9]=-x,u[10]=v,u}function O(i,p,u){const v=u??new o(12),x=i[4],k=i[5],P=i[6],r=i[8],m=i[9],d=i[10],h=Math.cos(p),a=Math.sin(p);return v[4]=h*x+a*r,v[5]=h*k+a*m,v[6]=h*P+a*d,v[8]=h*r-a*x,v[9]=h*m-a*k,v[10]=h*d-a*P,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function X(i,p){const u=p??new o(12),v=Math.cos(i),x=Math.sin(i);return u[0]=v,u[1]=0,u[2]=-x,u[4]=0,u[5]=1,u[6]=0,u[8]=x,u[9]=0,u[10]=v,u}function Ve(i,p,u){const v=u??new o(12),x=i[0*4+0],k=i[0*4+1],P=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],h=Math.cos(p),a=Math.sin(p);return v[0]=h*x-a*r,v[1]=h*k-a*m,v[2]=h*P-a*d,v[8]=h*r+a*x,v[9]=h*m+a*k,v[10]=h*d+a*P,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const Ce=Oe,me=Q;function ye(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ge(i,p,u){const v=u??new o(12),x=p[0],k=p[1];return v[0]=x*i[0*4+0],v[1]=x*i[0*4+1],v[2]=x*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ke(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function fe(i,p,u){const v=u??new o(12),x=p[0],k=p[1],P=p[2];return v[0]=x*i[0*4+0],v[1]=x*i[0*4+1],v[2]=x*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],v[8]=P*i[2*4+0],v[9]=P*i[2*4+1],v[10]=P*i[2*4+2],v}function Re(i,p){const u=p??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function M(i,p,u){const v=u??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function I(i,p){const u=p??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function b(i,p,u){const v=u??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],v[8]=p*i[2*4+0],v[9]=p*i[2*4+1],v[10]=p*i[2*4+2],v}return{add:$,clone:G,copy:F,create:E,determinant:K,equals:oe,equalsApproximately:H,fromMat4:C,fromQuat:B,get3DScaling:pe,getAxis:ce,getScaling:ae,getTranslation:de,identity:j,inverse:te,invert:Z,mul:le,mulScalar:z,multiply:Y,multiplyScalar:A,negate:L,rotate:Q,rotateX:O,rotateY:Ve,rotateZ:me,rotation:Oe,rotationX:ee,rotationY:X,rotationZ:Ce,scale:Ge,scale3D:fe,scaling:ye,scaling3D:ke,set:w,setAxis:xe,setTranslation:Se,translate:De,translation:be,transpose:J,uniformScale:M,uniformScale3D:b,uniformScaling:Re,uniformScaling3D:I}}const Xr=new Map;function Al(o){let l=Xr.get(o);return l||(l=Tl(o),Xr.set(o,l)),l}function Dl(o){const l=as(o);function f(r,m,d,h,a,_,y,g,D,U,q,ue,se,re,ge,Ee){const ve=new o(16);return r!==void 0&&(ve[0]=r,m!==void 0&&(ve[1]=m,d!==void 0&&(ve[2]=d,h!==void 0&&(ve[3]=h,a!==void 0&&(ve[4]=a,_!==void 0&&(ve[5]=_,y!==void 0&&(ve[6]=y,g!==void 0&&(ve[7]=g,D!==void 0&&(ve[8]=D,U!==void 0&&(ve[9]=U,q!==void 0&&(ve[10]=q,ue!==void 0&&(ve[11]=ue,se!==void 0&&(ve[12]=se,re!==void 0&&(ve[13]=re,ge!==void 0&&(ve[14]=ge,Ee!==void 0&&(ve[15]=Ee)))))))))))))))),ve}function E(r,m,d,h,a,_,y,g,D,U,q,ue,se,re,ge,Ee,ve){const we=ve??new o(16);return we[0]=r,we[1]=m,we[2]=d,we[3]=h,we[4]=a,we[5]=_,we[6]=y,we[7]=g,we[8]=D,we[9]=U,we[10]=q,we[11]=ue,we[12]=se,we[13]=re,we[14]=ge,we[15]=Ee,we}function w(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,m){const d=m??new o(16),h=r[0],a=r[1],_=r[2],y=r[3],g=h+h,D=a+a,U=_+_,q=h*g,ue=a*g,se=a*D,re=_*g,ge=_*D,Ee=_*U,ve=y*g,we=y*D,Ie=y*U;return d[0]=1-se-Ee,d[1]=ue+Ie,d[2]=re-we,d[3]=0,d[4]=ue-Ie,d[5]=1-q-Ee,d[6]=ge+ve,d[7]=0,d[8]=re+we,d[9]=ge-ve,d[10]=1-q-se,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function B(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function L(r,m,d){const h=d??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function A(r,m,d){const h=d??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const z=A;function $(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const F=$;function G(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function H(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function oe(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function j(r,m){const d=m??new o(16);if(d===r){let Le;return Le=r[1],r[1]=r[4],r[4]=Le,Le=r[2],r[2]=r[8],r[8]=Le,Le=r[3],r[3]=r[12],r[12]=Le,Le=r[6],r[6]=r[9],r[9]=Le,Le=r[7],r[7]=r[13],r[13]=Le,Le=r[11],r[11]=r[14],r[14]=Le,d}const h=r[0*4+0],a=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],D=r[1*4+1],U=r[1*4+2],q=r[1*4+3],ue=r[2*4+0],se=r[2*4+1],re=r[2*4+2],ge=r[2*4+3],Ee=r[3*4+0],ve=r[3*4+1],we=r[3*4+2],Ie=r[3*4+3];return d[0]=h,d[1]=g,d[2]=ue,d[3]=Ee,d[4]=a,d[5]=D,d[6]=se,d[7]=ve,d[8]=_,d[9]=U,d[10]=re,d[11]=we,d[12]=y,d[13]=q,d[14]=ge,d[15]=Ie,d}function J(r,m){const d=m??new o(16),h=r[0*4+0],a=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],D=r[1*4+1],U=r[1*4+2],q=r[1*4+3],ue=r[2*4+0],se=r[2*4+1],re=r[2*4+2],ge=r[2*4+3],Ee=r[3*4+0],ve=r[3*4+1],we=r[3*4+2],Ie=r[3*4+3],Le=re*Ie,qe=we*ge,He=U*Ie,We=we*q,Je=U*ge,Ye=re*q,at=_*Ie,nt=we*y,lt=_*ge,st=re*y,Xe=_*q,et=U*y,je=ue*ve,rt=Ee*se,Ke=g*ve,ht=Ee*D,it=g*se,Tt=ue*D,ot=h*ve,Et=Ee*a,kt=h*se,At=ue*a,Mt=h*D,Dt=g*a,Zt=Le*D+We*se+Je*ve-(qe*D+He*se+Ye*ve),It=qe*a+at*se+st*ve-(Le*a+nt*se+lt*ve),Xt=He*a+nt*D+Xe*ve-(We*a+at*D+et*ve),Ft=Ye*a+lt*D+et*se-(Je*a+st*D+Xe*se),Ze=1/(h*Zt+g*It+ue*Xt+Ee*Ft);return d[0]=Ze*Zt,d[1]=Ze*It,d[2]=Ze*Xt,d[3]=Ze*Ft,d[4]=Ze*(qe*g+He*ue+Ye*Ee-(Le*g+We*ue+Je*Ee)),d[5]=Ze*(Le*h+nt*ue+lt*Ee-(qe*h+at*ue+st*Ee)),d[6]=Ze*(We*h+at*g+et*Ee-(He*h+nt*g+Xe*Ee)),d[7]=Ze*(Je*h+st*g+Xe*ue-(Ye*h+lt*g+et*ue)),d[8]=Ze*(je*q+ht*ge+it*Ie-(rt*q+Ke*ge+Tt*Ie)),d[9]=Ze*(rt*y+ot*ge+At*Ie-(je*y+Et*ge+kt*Ie)),d[10]=Ze*(Ke*y+Et*q+Mt*Ie-(ht*y+ot*q+Dt*Ie)),d[11]=Ze*(Tt*y+kt*q+Dt*ge-(it*y+At*q+Mt*ge)),d[12]=Ze*(Ke*re+Tt*we+rt*U-(it*we+je*U+ht*re)),d[13]=Ze*(kt*we+je*_+Et*re-(ot*re+At*we+rt*_)),d[14]=Ze*(ot*U+Dt*we+ht*_-(Mt*we+Ke*_+Et*U)),d[15]=Ze*(Mt*re+it*_+At*U-(kt*U+Dt*re+Tt*_)),d}function te(r){const m=r[0],d=r[0*4+1],h=r[0*4+2],a=r[0*4+3],_=r[1*4+0],y=r[1*4+1],g=r[1*4+2],D=r[1*4+3],U=r[2*4+0],q=r[2*4+1],ue=r[2*4+2],se=r[2*4+3],re=r[3*4+0],ge=r[3*4+1],Ee=r[3*4+2],ve=r[3*4+3],we=ue*ve,Ie=Ee*se,Le=g*ve,qe=Ee*D,He=g*se,We=ue*D,Je=h*ve,Ye=Ee*a,at=h*se,nt=ue*a,lt=h*D,st=g*a,Xe=we*y+qe*q+He*ge-(Ie*y+Le*q+We*ge),et=Ie*d+Je*q+nt*ge-(we*d+Ye*q+at*ge),je=Le*d+Ye*y+lt*ge-(qe*d+Je*y+st*ge),rt=We*d+at*y+st*q-(He*d+nt*y+lt*q);return m*Xe+_*et+U*je+re*rt}const K=J;function Z(r,m,d){const h=d??new o(16),a=r[0],_=r[1],y=r[2],g=r[3],D=r[4+0],U=r[4+1],q=r[4+2],ue=r[4+3],se=r[8+0],re=r[8+1],ge=r[8+2],Ee=r[8+3],ve=r[12+0],we=r[12+1],Ie=r[12+2],Le=r[12+3],qe=m[0],He=m[1],We=m[2],Je=m[3],Ye=m[4+0],at=m[4+1],nt=m[4+2],lt=m[4+3],st=m[8+0],Xe=m[8+1],et=m[8+2],je=m[8+3],rt=m[12+0],Ke=m[12+1],ht=m[12+2],it=m[12+3];return h[0]=a*qe+D*He+se*We+ve*Je,h[1]=_*qe+U*He+re*We+we*Je,h[2]=y*qe+q*He+ge*We+Ie*Je,h[3]=g*qe+ue*He+Ee*We+Le*Je,h[4]=a*Ye+D*at+se*nt+ve*lt,h[5]=_*Ye+U*at+re*nt+we*lt,h[6]=y*Ye+q*at+ge*nt+Ie*lt,h[7]=g*Ye+ue*at+Ee*nt+Le*lt,h[8]=a*st+D*Xe+se*et+ve*je,h[9]=_*st+U*Xe+re*et+we*je,h[10]=y*st+q*Xe+ge*et+Ie*je,h[11]=g*st+ue*Xe+Ee*et+Le*je,h[12]=a*rt+D*Ke+se*ht+ve*it,h[13]=_*rt+U*Ke+re*ht+we*it,h[14]=y*rt+q*Ke+ge*ht+Ie*it,h[15]=g*rt+ue*Ke+Ee*ht+Le*it,h}const Y=Z;function le(r,m,d){const h=d??oe();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function Se(r,m){const d=m??l.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function de(r,m,d){const h=d??l.create(),a=m*4;return h[0]=r[a+0],h[1]=r[a+1],h[2]=r[a+2],h}function ce(r,m,d,h){const a=h===r?h:$(r,h),_=d*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function xe(r,m){const d=m??l.create(),h=r[0],a=r[1],_=r[2],y=r[4],g=r[5],D=r[6],U=r[8],q=r[9],ue=r[10];return d[0]=Math.sqrt(h*h+a*a+_*_),d[1]=Math.sqrt(y*y+g*g+D*D),d[2]=Math.sqrt(U*U+q*q+ue*ue),d}function ae(r,m,d,h,a){const _=a??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const g=1/(d-h);_[10]=h*g,_[14]=h*d*g}else _[10]=-1,_[14]=-d;return _}function pe(r,m,d,h=1/0,a){const _=a??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=d;else{const g=1/(h-d);_[10]=d*g,_[14]=h*d*g}return _}function be(r,m,d,h,a,_,y){const g=y??new o(16);return g[0]=2/(m-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(h-d),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(a-_),g[11]=0,g[12]=(m+r)/(r-m),g[13]=(h+d)/(d-h),g[14]=a/(a-_),g[15]=1,g}function De(r,m,d,h,a,_,y){const g=y??new o(16),D=m-r,U=h-d,q=a-_;return g[0]=2*a/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*a/U,g[6]=0,g[7]=0,g[8]=(r+m)/D,g[9]=(h+d)/U,g[10]=_/q,g[11]=-1,g[12]=0,g[13]=0,g[14]=a*_/q,g[15]=0,g}function Oe(r,m,d,h,a,_=1/0,y){const g=y??new o(16),D=m-r,U=h-d;if(g[0]=2*a/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*a/U,g[6]=0,g[7]=0,g[8]=(r+m)/D,g[9]=(h+d)/U,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,_===1/0)g[10]=0,g[14]=a;else{const q=1/(_-a);g[10]=a*q,g[14]=_*a*q}return g}const Q=l.create(),ee=l.create(),O=l.create();function X(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(m,r,O),O),l.normalize(l.cross(d,O,Q),Q),l.normalize(l.cross(O,Q,ee),ee),a[0]=Q[0],a[1]=Q[1],a[2]=Q[2],a[3]=0,a[4]=ee[0],a[5]=ee[1],a[6]=ee[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Ve(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(r,m,O),O),l.normalize(l.cross(d,O,Q),Q),l.normalize(l.cross(O,Q,ee),ee),a[0]=Q[0],a[1]=Q[1],a[2]=Q[2],a[3]=0,a[4]=ee[0],a[5]=ee[1],a[6]=ee[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Ce(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(r,m,O),O),l.normalize(l.cross(d,O,Q),Q),l.normalize(l.cross(O,Q,ee),ee),a[0]=Q[0],a[1]=ee[0],a[2]=O[0],a[3]=0,a[4]=Q[1],a[5]=ee[1],a[6]=O[1],a[7]=0,a[8]=Q[2],a[9]=ee[2],a[10]=O[2],a[11]=0,a[12]=-(Q[0]*r[0]+Q[1]*r[1]+Q[2]*r[2]),a[13]=-(ee[0]*r[0]+ee[1]*r[1]+ee[2]*r[2]),a[14]=-(O[0]*r[0]+O[1]*r[1]+O[2]*r[2]),a[15]=1,a}function me(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function ye(r,m,d){const h=d??new o(16),a=m[0],_=m[1],y=m[2],g=r[0],D=r[1],U=r[2],q=r[3],ue=r[1*4+0],se=r[1*4+1],re=r[1*4+2],ge=r[1*4+3],Ee=r[2*4+0],ve=r[2*4+1],we=r[2*4+2],Ie=r[2*4+3],Le=r[3*4+0],qe=r[3*4+1],He=r[3*4+2],We=r[3*4+3];return r!==h&&(h[0]=g,h[1]=D,h[2]=U,h[3]=q,h[4]=ue,h[5]=se,h[6]=re,h[7]=ge,h[8]=Ee,h[9]=ve,h[10]=we,h[11]=Ie),h[12]=g*a+ue*_+Ee*y+Le,h[13]=D*a+se*_+ve*y+qe,h[14]=U*a+re*_+we*y+He,h[15]=q*a+ge*_+Ie*y+We,h}function Ge(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=h,d[6]=a,d[7]=0,d[8]=0,d[9]=-a,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ke(r,m,d){const h=d??new o(16),a=r[4],_=r[5],y=r[6],g=r[7],D=r[8],U=r[9],q=r[10],ue=r[11],se=Math.cos(m),re=Math.sin(m);return h[4]=se*a+re*D,h[5]=se*_+re*U,h[6]=se*y+re*q,h[7]=se*g+re*ue,h[8]=se*D-re*a,h[9]=se*U-re*_,h[10]=se*q-re*y,h[11]=se*ue-re*g,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function fe(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=h,d[1]=0,d[2]=-a,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=a,d[9]=0,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Re(r,m,d){const h=d??new o(16),a=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],D=r[2*4+0],U=r[2*4+1],q=r[2*4+2],ue=r[2*4+3],se=Math.cos(m),re=Math.sin(m);return h[0]=se*a-re*D,h[1]=se*_-re*U,h[2]=se*y-re*q,h[3]=se*g-re*ue,h[8]=se*D+re*a,h[9]=se*U+re*_,h[10]=se*q+re*y,h[11]=se*ue+re*g,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function M(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=h,d[1]=a,d[2]=0,d[3]=0,d[4]=-a,d[5]=h,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function I(r,m,d){const h=d??new o(16),a=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],D=r[1*4+0],U=r[1*4+1],q=r[1*4+2],ue=r[1*4+3],se=Math.cos(m),re=Math.sin(m);return h[0]=se*a+re*D,h[1]=se*_+re*U,h[2]=se*y+re*q,h[3]=se*g+re*ue,h[4]=se*D-re*a,h[5]=se*U-re*_,h[6]=se*q-re*y,h[7]=se*ue-re*g,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function b(r,m,d){const h=d??new o(16);let a=r[0],_=r[1],y=r[2];const g=Math.sqrt(a*a+_*_+y*y);a/=g,_/=g,y/=g;const D=a*a,U=_*_,q=y*y,ue=Math.cos(m),se=Math.sin(m),re=1-ue;return h[0]=D+(1-D)*ue,h[1]=a*_*re+y*se,h[2]=a*y*re-_*se,h[3]=0,h[4]=a*_*re-y*se,h[5]=U+(1-U)*ue,h[6]=_*y*re+a*se,h[7]=0,h[8]=a*y*re+_*se,h[9]=_*y*re-a*se,h[10]=q+(1-q)*ue,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=b;function p(r,m,d,h){const a=h??new o(16);let _=m[0],y=m[1],g=m[2];const D=Math.sqrt(_*_+y*y+g*g);_/=D,y/=D,g/=D;const U=_*_,q=y*y,ue=g*g,se=Math.cos(d),re=Math.sin(d),ge=1-se,Ee=U+(1-U)*se,ve=_*y*ge+g*re,we=_*g*ge-y*re,Ie=_*y*ge-g*re,Le=q+(1-q)*se,qe=y*g*ge+_*re,He=_*g*ge+y*re,We=y*g*ge-_*re,Je=ue+(1-ue)*se,Ye=r[0],at=r[1],nt=r[2],lt=r[3],st=r[4],Xe=r[5],et=r[6],je=r[7],rt=r[8],Ke=r[9],ht=r[10],it=r[11];return a[0]=Ee*Ye+ve*st+we*rt,a[1]=Ee*at+ve*Xe+we*Ke,a[2]=Ee*nt+ve*et+we*ht,a[3]=Ee*lt+ve*je+we*it,a[4]=Ie*Ye+Le*st+qe*rt,a[5]=Ie*at+Le*Xe+qe*Ke,a[6]=Ie*nt+Le*et+qe*ht,a[7]=Ie*lt+Le*je+qe*it,a[8]=He*Ye+We*st+Je*rt,a[9]=He*at+We*Xe+Je*Ke,a[10]=He*nt+We*et+Je*ht,a[11]=He*lt+We*je+Je*it,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const u=p;function v(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function x(r,m,d){const h=d??new o(16),a=m[0],_=m[1],y=m[2];return h[0]=a*r[0*4+0],h[1]=a*r[0*4+1],h[2]=a*r[0*4+2],h[3]=a*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=y*r[2*4+0],h[9]=y*r[2*4+1],h[10]=y*r[2*4+2],h[11]=y*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function k(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function P(r,m,d){const h=d??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:L,aim:X,axisRotate:p,axisRotation:b,cameraAim:Ve,clone:F,copy:$,create:f,determinant:te,equals:H,equalsApproximately:G,fromMat3:w,fromQuat:C,frustum:De,frustumReverseZ:Oe,getAxis:de,getScaling:xe,getTranslation:Se,identity:oe,inverse:J,invert:K,lookAt:Ce,mul:Y,mulScalar:z,multiply:Z,multiplyScalar:A,negate:B,ortho:be,perspective:ae,perspectiveReverseZ:pe,rotate:u,rotateX:ke,rotateY:Re,rotateZ:I,rotation:i,rotationX:Ge,rotationY:fe,rotationZ:M,scale:x,scaling:v,set:E,setAxis:ce,setTranslation:le,translate:ye,translation:me,transpose:j,uniformScale:P,uniformScaling:k}}const Qr=new Map;function Il(o){let l=Qr.get(o);return l||(l=Dl(o),Qr.set(o,l)),l}function Ll(o){const l=as(o);function f(M,I,b,i){const p=new o(4);return M!==void 0&&(p[0]=M,I!==void 0&&(p[1]=I,b!==void 0&&(p[2]=b,i!==void 0&&(p[3]=i)))),p}const E=f;function w(M,I,b,i,p){const u=p??new o(4);return u[0]=M,u[1]=I,u[2]=b,u[3]=i,u}function C(M,I,b){const i=b??new o(4),p=I*.5,u=Math.sin(p);return i[0]=u*M[0],i[1]=u*M[1],i[2]=u*M[2],i[3]=Math.cos(p),i}function B(M,I){const b=I??l.create(3),i=Math.acos(M[3])*2,p=Math.sin(i*.5);return p>ze?(b[0]=M[0]/p,b[1]=M[1]/p,b[2]=M[2]/p):(b[0]=1,b[1]=0,b[2]=0),{angle:i,axis:b}}function L(M,I){const b=ae(M,I);return Math.acos(2*b*b-1)}function A(M,I,b){const i=b??new o(4),p=M[0],u=M[1],v=M[2],x=M[3],k=I[0],P=I[1],r=I[2],m=I[3];return i[0]=p*m+x*k+u*r-v*P,i[1]=u*m+x*P+v*k-p*r,i[2]=v*m+x*r+p*P-u*k,i[3]=x*m-p*k-u*P-v*r,i}const z=A;function $(M,I,b){const i=b??new o(4),p=I*.5,u=M[0],v=M[1],x=M[2],k=M[3],P=Math.sin(p),r=Math.cos(p);return i[0]=u*r+k*P,i[1]=v*r+x*P,i[2]=x*r-v*P,i[3]=k*r-u*P,i}function F(M,I,b){const i=b??new o(4),p=I*.5,u=M[0],v=M[1],x=M[2],k=M[3],P=Math.sin(p),r=Math.cos(p);return i[0]=u*r-x*P,i[1]=v*r+k*P,i[2]=x*r+u*P,i[3]=k*r-v*P,i}function G(M,I,b){const i=b??new o(4),p=I*.5,u=M[0],v=M[1],x=M[2],k=M[3],P=Math.sin(p),r=Math.cos(p);return i[0]=u*r+v*P,i[1]=v*r-u*P,i[2]=x*r+k*P,i[3]=k*r-x*P,i}function H(M,I,b,i){const p=i??new o(4),u=M[0],v=M[1],x=M[2],k=M[3];let P=I[0],r=I[1],m=I[2],d=I[3],h=u*P+v*r+x*m+k*d;h<0&&(h=-h,P=-P,r=-r,m=-m,d=-d);let a,_;if(1-h>ze){const y=Math.acos(h),g=Math.sin(y);a=Math.sin((1-b)*y)/g,_=Math.sin(b*y)/g}else a=1-b,_=b;return p[0]=a*u+_*P,p[1]=a*v+_*r,p[2]=a*x+_*m,p[3]=a*k+_*d,p}function oe(M,I){const b=I??new o(4),i=M[0],p=M[1],u=M[2],v=M[3],x=i*i+p*p+u*u+v*v,k=x?1/x:0;return b[0]=-i*k,b[1]=-p*k,b[2]=-u*k,b[3]=v*k,b}function j(M,I){const b=I??new o(4);return b[0]=-M[0],b[1]=-M[1],b[2]=-M[2],b[3]=M[3],b}function J(M,I){const b=I??new o(4),i=M[0]+M[5]+M[10];if(i>0){const p=Math.sqrt(i+1);b[3]=.5*p;const u=.5/p;b[0]=(M[6]-M[9])*u,b[1]=(M[8]-M[2])*u,b[2]=(M[1]-M[4])*u}else{let p=0;M[5]>M[0]&&(p=1),M[10]>M[p*4+p]&&(p=2);const u=(p+1)%3,v=(p+2)%3,x=Math.sqrt(M[p*4+p]-M[u*4+u]-M[v*4+v]+1);b[p]=.5*x;const k=.5/x;b[3]=(M[u*4+v]-M[v*4+u])*k,b[u]=(M[u*4+p]+M[p*4+u])*k,b[v]=(M[v*4+p]+M[p*4+v])*k}return b}function te(M,I,b,i,p){const u=p??new o(4),v=M*.5,x=I*.5,k=b*.5,P=Math.sin(v),r=Math.cos(v),m=Math.sin(x),d=Math.cos(x),h=Math.sin(k),a=Math.cos(k);switch(i){case"xyz":u[0]=P*d*a+r*m*h,u[1]=r*m*a-P*d*h,u[2]=r*d*h+P*m*a,u[3]=r*d*a-P*m*h;break;case"xzy":u[0]=P*d*a-r*m*h,u[1]=r*m*a-P*d*h,u[2]=r*d*h+P*m*a,u[3]=r*d*a+P*m*h;break;case"yxz":u[0]=P*d*a+r*m*h,u[1]=r*m*a-P*d*h,u[2]=r*d*h-P*m*a,u[3]=r*d*a+P*m*h;break;case"yzx":u[0]=P*d*a+r*m*h,u[1]=r*m*a+P*d*h,u[2]=r*d*h-P*m*a,u[3]=r*d*a-P*m*h;break;case"zxy":u[0]=P*d*a-r*m*h,u[1]=r*m*a+P*d*h,u[2]=r*d*h+P*m*a,u[3]=r*d*a-P*m*h;break;case"zyx":u[0]=P*d*a-r*m*h,u[1]=r*m*a+P*d*h,u[2]=r*d*h-P*m*a,u[3]=r*d*a+P*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function K(M,I){const b=I??new o(4);return b[0]=M[0],b[1]=M[1],b[2]=M[2],b[3]=M[3],b}const Z=K;function Y(M,I,b){const i=b??new o(4);return i[0]=M[0]+I[0],i[1]=M[1]+I[1],i[2]=M[2]+I[2],i[3]=M[3]+I[3],i}function le(M,I,b){const i=b??new o(4);return i[0]=M[0]-I[0],i[1]=M[1]-I[1],i[2]=M[2]-I[2],i[3]=M[3]-I[3],i}const Se=le;function de(M,I,b){const i=b??new o(4);return i[0]=M[0]*I,i[1]=M[1]*I,i[2]=M[2]*I,i[3]=M[3]*I,i}const ce=de;function xe(M,I,b){const i=b??new o(4);return i[0]=M[0]/I,i[1]=M[1]/I,i[2]=M[2]/I,i[3]=M[3]/I,i}function ae(M,I){return M[0]*I[0]+M[1]*I[1]+M[2]*I[2]+M[3]*I[3]}function pe(M,I,b,i){const p=i??new o(4);return p[0]=M[0]+b*(I[0]-M[0]),p[1]=M[1]+b*(I[1]-M[1]),p[2]=M[2]+b*(I[2]-M[2]),p[3]=M[3]+b*(I[3]-M[3]),p}function be(M){const I=M[0],b=M[1],i=M[2],p=M[3];return Math.sqrt(I*I+b*b+i*i+p*p)}const De=be;function Oe(M){const I=M[0],b=M[1],i=M[2],p=M[3];return I*I+b*b+i*i+p*p}const Q=Oe;function ee(M,I){const b=I??new o(4),i=M[0],p=M[1],u=M[2],v=M[3],x=Math.sqrt(i*i+p*p+u*u+v*v);return x>1e-5?(b[0]=i/x,b[1]=p/x,b[2]=u/x,b[3]=v/x):(b[0]=0,b[1]=0,b[2]=0,b[3]=1),b}function O(M,I){return Math.abs(M[0]-I[0])<ze&&Math.abs(M[1]-I[1])<ze&&Math.abs(M[2]-I[2])<ze&&Math.abs(M[3]-I[3])<ze}function X(M,I){return M[0]===I[0]&&M[1]===I[1]&&M[2]===I[2]&&M[3]===I[3]}function Ve(M){const I=M??new o(4);return I[0]=0,I[1]=0,I[2]=0,I[3]=1,I}const Ce=l.create(),me=l.create(),ye=l.create();function Ge(M,I,b){const i=b??new o(4),p=l.dot(M,I);return p<-.999999?(l.cross(me,M,Ce),l.len(Ce)<1e-6&&l.cross(ye,M,Ce),l.normalize(Ce,Ce),C(Ce,Math.PI,i),i):p>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(M,I,Ce),i[0]=Ce[0],i[1]=Ce[1],i[2]=Ce[2],i[3]=1+p,ee(i,i))}const ke=new o(4),fe=new o(4);function Re(M,I,b,i,p,u){const v=u??new o(4);return H(M,i,p,ke),H(I,b,p,fe),H(ke,fe,2*p*(1-p),v),v}return{create:f,fromValues:E,set:w,fromAxisAngle:C,toAxisAngle:B,angle:L,multiply:A,mul:z,rotateX:$,rotateY:F,rotateZ:G,slerp:H,inverse:oe,conjugate:j,fromMat:J,fromEuler:te,copy:K,clone:Z,add:Y,subtract:le,sub:Se,mulScalar:de,scale:ce,divScalar:xe,dot:ae,lerp:pe,length:be,len:De,lengthSq:Oe,lenSq:Q,normalize:ee,equalsApproximately:O,equals:X,identity:Ve,rotationTo:Ge,sqlerp:Re}}const Jr=new Map;function zl(o){let l=Jr.get(o);return l||(l=Ll(o),Jr.set(o,l)),l}function Rl(o){function l(b,i,p,u){const v=new o(4);return b!==void 0&&(v[0]=b,i!==void 0&&(v[1]=i,p!==void 0&&(v[2]=p,u!==void 0&&(v[3]=u)))),v}const f=l;function E(b,i,p,u,v){const x=v??new o(4);return x[0]=b,x[1]=i,x[2]=p,x[3]=u,x}function w(b,i){const p=i??new o(4);return p[0]=Math.ceil(b[0]),p[1]=Math.ceil(b[1]),p[2]=Math.ceil(b[2]),p[3]=Math.ceil(b[3]),p}function C(b,i){const p=i??new o(4);return p[0]=Math.floor(b[0]),p[1]=Math.floor(b[1]),p[2]=Math.floor(b[2]),p[3]=Math.floor(b[3]),p}function B(b,i){const p=i??new o(4);return p[0]=Math.round(b[0]),p[1]=Math.round(b[1]),p[2]=Math.round(b[2]),p[3]=Math.round(b[3]),p}function L(b,i=0,p=1,u){const v=u??new o(4);return v[0]=Math.min(p,Math.max(i,b[0])),v[1]=Math.min(p,Math.max(i,b[1])),v[2]=Math.min(p,Math.max(i,b[2])),v[3]=Math.min(p,Math.max(i,b[3])),v}function A(b,i,p){const u=p??new o(4);return u[0]=b[0]+i[0],u[1]=b[1]+i[1],u[2]=b[2]+i[2],u[3]=b[3]+i[3],u}function z(b,i,p,u){const v=u??new o(4);return v[0]=b[0]+i[0]*p,v[1]=b[1]+i[1]*p,v[2]=b[2]+i[2]*p,v[3]=b[3]+i[3]*p,v}function $(b,i,p){const u=p??new o(4);return u[0]=b[0]-i[0],u[1]=b[1]-i[1],u[2]=b[2]-i[2],u[3]=b[3]-i[3],u}const F=$;function G(b,i){return Math.abs(b[0]-i[0])<ze&&Math.abs(b[1]-i[1])<ze&&Math.abs(b[2]-i[2])<ze&&Math.abs(b[3]-i[3])<ze}function H(b,i){return b[0]===i[0]&&b[1]===i[1]&&b[2]===i[2]&&b[3]===i[3]}function oe(b,i,p,u){const v=u??new o(4);return v[0]=b[0]+p*(i[0]-b[0]),v[1]=b[1]+p*(i[1]-b[1]),v[2]=b[2]+p*(i[2]-b[2]),v[3]=b[3]+p*(i[3]-b[3]),v}function j(b,i,p,u){const v=u??new o(4);return v[0]=b[0]+p[0]*(i[0]-b[0]),v[1]=b[1]+p[1]*(i[1]-b[1]),v[2]=b[2]+p[2]*(i[2]-b[2]),v[3]=b[3]+p[3]*(i[3]-b[3]),v}function J(b,i,p){const u=p??new o(4);return u[0]=Math.max(b[0],i[0]),u[1]=Math.max(b[1],i[1]),u[2]=Math.max(b[2],i[2]),u[3]=Math.max(b[3],i[3]),u}function te(b,i,p){const u=p??new o(4);return u[0]=Math.min(b[0],i[0]),u[1]=Math.min(b[1],i[1]),u[2]=Math.min(b[2],i[2]),u[3]=Math.min(b[3],i[3]),u}function K(b,i,p){const u=p??new o(4);return u[0]=b[0]*i,u[1]=b[1]*i,u[2]=b[2]*i,u[3]=b[3]*i,u}const Z=K;function Y(b,i,p){const u=p??new o(4);return u[0]=b[0]/i,u[1]=b[1]/i,u[2]=b[2]/i,u[3]=b[3]/i,u}function le(b,i){const p=i??new o(4);return p[0]=1/b[0],p[1]=1/b[1],p[2]=1/b[2],p[3]=1/b[3],p}const Se=le;function de(b,i){return b[0]*i[0]+b[1]*i[1]+b[2]*i[2]+b[3]*i[3]}function ce(b){const i=b[0],p=b[1],u=b[2],v=b[3];return Math.sqrt(i*i+p*p+u*u+v*v)}const xe=ce;function ae(b){const i=b[0],p=b[1],u=b[2],v=b[3];return i*i+p*p+u*u+v*v}const pe=ae;function be(b,i){const p=b[0]-i[0],u=b[1]-i[1],v=b[2]-i[2],x=b[3]-i[3];return Math.sqrt(p*p+u*u+v*v+x*x)}const De=be;function Oe(b,i){const p=b[0]-i[0],u=b[1]-i[1],v=b[2]-i[2],x=b[3]-i[3];return p*p+u*u+v*v+x*x}const Q=Oe;function ee(b,i){const p=i??new o(4),u=b[0],v=b[1],x=b[2],k=b[3],P=Math.sqrt(u*u+v*v+x*x+k*k);return P>1e-5?(p[0]=u/P,p[1]=v/P,p[2]=x/P,p[3]=k/P):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function O(b,i){const p=i??new o(4);return p[0]=-b[0],p[1]=-b[1],p[2]=-b[2],p[3]=-b[3],p}function X(b,i){const p=i??new o(4);return p[0]=b[0],p[1]=b[1],p[2]=b[2],p[3]=b[3],p}const Ve=X;function Ce(b,i,p){const u=p??new o(4);return u[0]=b[0]*i[0],u[1]=b[1]*i[1],u[2]=b[2]*i[2],u[3]=b[3]*i[3],u}const me=Ce;function ye(b,i,p){const u=p??new o(4);return u[0]=b[0]/i[0],u[1]=b[1]/i[1],u[2]=b[2]/i[2],u[3]=b[3]/i[3],u}const Ge=ye;function ke(b){const i=b??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function fe(b,i,p){const u=p??new o(4),v=b[0],x=b[1],k=b[2],P=b[3];return u[0]=i[0]*v+i[4]*x+i[8]*k+i[12]*P,u[1]=i[1]*v+i[5]*x+i[9]*k+i[13]*P,u[2]=i[2]*v+i[6]*x+i[10]*k+i[14]*P,u[3]=i[3]*v+i[7]*x+i[11]*k+i[15]*P,u}function Re(b,i,p){const u=p??new o(4);return ee(b,u),K(u,i,u)}function M(b,i,p){const u=p??new o(4);return ce(b)>i?Re(b,i,u):X(b,u)}function I(b,i,p){const u=p??new o(4);return oe(b,i,.5,u)}return{create:l,fromValues:f,set:E,ceil:w,floor:C,round:B,clamp:L,add:A,addScaled:z,subtract:$,sub:F,equalsApproximately:G,equals:H,lerp:oe,lerpV:j,max:J,min:te,mulScalar:K,scale:Z,divScalar:Y,inverse:le,invert:Se,dot:de,length:ce,len:xe,lengthSq:ae,lenSq:pe,distance:be,dist:De,distanceSq:Oe,distSq:Q,normalize:ee,negate:O,copy:X,clone:Ve,multiply:Ce,mul:me,divide:ye,div:Ge,zero:ke,transformMat4:fe,setLength:Re,truncate:M,midpoint:I}}const ei=new Map;function Gl(o){let l=ei.get(o);return l||(l=Rl(o),ei.set(o,l)),l}function $s(o,l,f,E,w,C){return{mat3:Al(o),mat4:Il(l),quat:zl(f),vec2:bi(E),vec3:as(w),vec4:Gl(C)}}const{mat3:Ct,mat4:ft,quat:pt,vec2:ti,vec3:R,vec4:Oc}=$s(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);$s(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);$s(kl,Array,Array,Array,Array,Array);const ni=document.querySelector("#log");let wt=null,dn=null;function gi(){if(wt)return wt;wt=document.createElement("div"),wt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",wt.appendChild(o),dn=document.createElement("div"),dn.className="ply-spinner-label",wt.appendChild(dn),wt.style.display="none",document.body.appendChild(wt),wt}function qs(o){gi(),dn&&o&&(dn.textContent=o),wt&&(wt.style.opacity="1",wt.style.display="flex")}function Ot(o){gi(),dn&&(dn.textContent=o)}function On(){if(!wt)return;const o=wt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function wi(o,l){if(!ni)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),ni.appendChild(f)}async function xt(o){console.log(o),wi(o)}async function Ul(o){console.error(o),wi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let xi;function yi(){xi=performance.now()}function si(o){const l=performance.now()-xi;xt(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Vl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function Nn(o){return o+3&-4}const Ol=2,Fl=3,Nl=5,$l=6,Fn=7,ns=8,ss=9,rs=10;function ri(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const E=new DataView(o),w=4,C=E.getUint32(w+0,!0),B=E.getUint32(w+4,!0),L=E.getUint32(w+8,!0),A=E.getUint32(w+12,!0),z=E.getUint32(w+16,!0),$=E.getFloat32(w+20,!0),F=E.getUint32(w+24,!0),G=E.getUint32(w+28,!0),H=E.getFloat32(w+32,!0),oe=E.getFloat32(w+36,!0),j=E.getFloat32(w+40,!0),J=E.getUint32(w+44,!0),te=E.getFloat32(w+48,!0),K=E.getFloat32(w+52,!0),Z=E.getUint32(w+56,!0),Y=E.getUint32(w+60,!0),le=G===ss||G===rs,Se=le?Y:0,de=le?0:Y,ce=de>0?de:1;if(G===Nl||G===$l)throw new Error(`NAT2: paired-RVQ format=${G} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const xe=G===ss||G===rs;if(G!==Ol&&G!==Fl&&G!==Fn&&G!==ns&&!xe)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${G}`);if(C%4!==0||J%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${J}`);let ae=w+64;const pe=(Z+1)*4,be=new Uint32Array(o.slice(ae,ae+pe));ae+=pe;let De;if(ce>1){const me=(ce+1)*4;if(ae+me>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${me} from ${ae})`);De=new Uint32Array(o.slice(ae,ae+me)),ae+=me}else De=new Uint32Array([0,C]);let Oe=0;for(let me=0;me<ce;me++){const ye=De[me+1]-De[me];ye>Oe&&(Oe=ye)}if(xe){const me=Se&1?7:6,ye=z*me*4;if(ae+ye>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ye} more bytes from offset ${ae}, have ${o.byteLength-ae}`);const Ge=new Float32Array(o.slice(ae,ae+ye));ae+=ye;const ke=Math.max(1,Se>>8&255),fe=[];let Re=0;for(let p=0,u=C,v=J;p<ke;p++,u>>=1,v>>=1){const x=Math.max(1,u>>2)*Math.max(1,v>>2)*16;fe.push(x),Re+=x}const M=o.byteLength-ae;if(M<Re)throw new Error(`NAT2 probe atlas truncated: need ${Re} bytes for ${C}x${J} x${ke} mips, have ${M}`);const I=[];let b=ae;for(const p of fe)I.push(new Uint8Array(o.slice(b,b+p))),b+=p;const i=I[0];return{width:C,height:B,channels:L,kernel_type:A,num_rects:z,uv_extent:$,sb_number:F,format:G,sh_bias:H,res_bias:oe,compact_mult:j,layer_h:J,atlas_scale:te,atlas_offset:K,n_layers:Z,n_cols:ce,layer_cuts:be,column_cuts:De,slice_width:Oe,rects_expanded:Ge,atlas_bytes:i,mip_bytes:I,probe_mode:Se&1?2:1}}const Q=z*4*4;if(ae+Q>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Q} more bytes from offset ${ae}, have ${o.byteLength-ae}`);const ee=new Float32Array(o.slice(ae,ae+Q));ae+=Q;const O=new Float32Array(z*5);for(let me=0;me<z;me++){const ye=ee[me*4+0],Ge=ee[me*4+1],ke=ee[me*4+2],fe=ee[me*4+3];let Re=0;for(let p=1;p<=Z&&be[p]<=Ge;p++)Re=p;let M=0;for(let p=1;p<=ce&&De[p]<=ye;p++)M=p;const I=Ge-be[Re],b=ye-De[M],i=M*Z+Re;O[me*5+0]=b,O[me*5+1]=I,O[me*5+2]=ke,O[me*5+3]=fe,O[me*5+4]=i}let X;const Ce=C/4*16;if(G===Fn||G===ns){if(ae+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const me=G===Fn?"BCCB":"ACCB",ye=l.decode(new Uint8Array(o,ae,4));if(ye!==me)throw new Error(`NAT2 typeD bad sub-magic: expected '${me}' got '${ye}'`);const Ge=E.getUint32(ae+4,!0),ke=E.getUint32(ae+8,!0),fe=E.getUint32(ae+12,!0),Re=E.getUint32(ae+16,!0),M=E.getUint32(ae+20,!0);if(Ge!==1)throw new Error(`NAT2 BCCB unsupported version ${Ge}`);if(fe!==B/4||Re!==C/4||M!==fe*Re)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${B}, sub-header ${Re}×${fe} (${M} blocks)`);ae+=24;const I=ke*16;if(ae+I>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${I}, have ${o.byteLength-ae})`);const b=new Uint8Array(o,ae,I);ae+=I;const i=M*2;if(ae+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-ae})`);const p=new Uint16Array(o.slice(ae,ae+i));ae+=i;const u=new Uint8Array(M*16);for(let v=0;v<M;v++){const x=p[v]*16;u.set(b.subarray(x,x+16),v*16)}X=u}else{let me=0;for(let ye=0;ye<Z;ye++){const Ge=be[ye+1]-be[ye];if(Ge%4!==0)throw new Error(`NAT2 BC7 layer ${ye} rows ${Ge} not 4-aligned`);me+=Ge/4*Ce}if(ae+me>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${me} more bytes from offset ${ae}, have ${o.byteLength-ae}`);X=new Uint8Array(o.slice(ae,ae+me))}return{width:C,height:B,channels:L,kernel_type:A,num_rects:z,uv_extent:$,sb_number:F,format:G,sh_bias:H,res_bias:oe,compact_mult:j,layer_h:J,atlas_scale:te,atlas_offset:K,n_layers:Z,n_cols:ce,layer_cuts:be,column_cuts:De,slice_width:Oe,rects_expanded:O,atlas_bytes:X}}const ql=32;function ii(o,l,f){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let E,w,C,B;if(l.format===2||l.format===Fn||l.format===ss){if(!o.features.has("texture-compression-bc"))return xt(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===ss?"BC7 atlas (proberes: shared probe texture)":l.format===Fn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:w,sampler:C}=oi(o,l,"bc7-rgba-unorm",B)}else if(l.format===3||l.format===ns||l.format===rs){if(!o.features.has("texture-compression-astc"))return xt(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;B=l.format===rs?"ASTC 4x4 atlas (proberes: shared probe texture)":l.format===ns?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:E,view:w,sampler:C}=oi(o,l,"astc-4x4-unorm",B)}else return xt(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:L}=l,A=o.createBuffer({label:"atlas rects (5-stride)",size:Nn(L.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(A,0,L);const z=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ts(o,z,l,f),{texture:E,view:w,sampler:C,rectsBuffer:A,texParamsBuffer:z,meta:l}}function oi(o,l,f,E){const{width:w,layer_h:C,n_layers:B,n_cols:L,layer_cuts:A,column_cuts:z,slice_width:$,atlas_bytes:F}=l,H=w/4*16,oe=o.limits.maxTextureDimension2D;if(C>oe||$>oe)throw new Error(`⚠️  atlas slice dims ${$}x${C} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const j=L*B;if(j>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${L} cols × ${B} layers = ${j} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const J=l.mip_bytes??[F],te=J.length,K=o.createTexture({label:E,size:{width:$,height:C,depthOrArrayLayers:j},mipLevelCount:te,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let le=0;le<L;le++){const Se=z[le]/4,de=(z[le+1]-z[le])/4;for(let ce=0;ce<B;ce++){const xe=A[ce]/4,ae=(A[ce+1]-A[ce])/4,pe=le*B+ce,be=xe*H+Se*16;o.queue.writeTexture({texture:K,mipLevel:0,origin:{x:0,y:0,z:pe},aspect:"all"},F,{offset:be,bytesPerRow:H,rowsPerImage:ae},{width:de*4,height:ae*4,depthOrArrayLayers:1})}}for(let le=1;le<te;le++){const Se=Math.max(1,$>>le),de=Math.max(1,C>>le);o.queue.writeTexture({texture:K,mipLevel:le,origin:{x:0,y:0,z:0},aspect:"all"},J[le],{offset:0,bytesPerRow:Math.max(1,Se>>2)*16,rowsPerImage:Math.max(1,de>>2)},{width:Se,height:de,depthOrArrayLayers:1})}te>1&&console.log(`[atlas] ${te} mip levels uploaded (trilinear minification)`);const Z=K.createView({label:`${E} view`,dimension:"2d-array"}),Y=o.createSampler({label:`${E} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1?"linear":"nearest"});return{texture:K,view:Z,sampler:Y}}function ts(o,l,f,E,w=1){var z;const C=new ArrayBuffer(32),B=new Uint32Array(C),L=new Float32Array(C);B[0]=E?1:0,L[1]=f.atlas_scale,L[2]=f.atlas_offset,L[3]=f.res_bias,B[4]=f.probe_mode?f.probe_mode|0:0,B[5]=f.width|0;const A=(((z=f.mip_bytes)==null?void 0:z.length)??1)>1;B[6]=A&&w!==0?1:0,o.queue.writeBuffer(l,0,C)}async function zs(o,l){xt(`loading ply file from File... : ${o.name}`),qs("downloading PLY...");const f=await o.arrayBuffer();try{return await Pi(f,l)}finally{On()}}async function Wl(o,l){xt(`loading ply file from URL... : ${o}`),qs("downloading PLY...");try{yi();const f=new URL(o,self.location.href).href;return await Pi({url:f},l)}finally{On()}}async function Pi(o,l){return new Promise((f,E)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=C=>{var L,A,z,$,F,G,H,oe,j,J,te,K;const B=C.data;if((B==null?void 0:B.type)==="error"){Ul(`PLY worker error: ${B.message??"unknown error"}`),w.terminate(),E(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const Z=B.totalBytes,Y=B.loadedBytes/(1024*1024),le=Z?Z/(1024*1024):void 0,Se=(B.speedBps??0)/(1024*1024),de=Z?Math.min(99,Math.floor(B.loadedBytes/Z*100)):void 0,ce=le?`total ${le.toFixed(1)} MB`:"total -- MB",xe=le&&de!==void 0?`${Y.toFixed(1)} MB downloaded (${de}%)`:`${Y.toFixed(1)} MB downloaded`,ae=`${Se.toFixed(2)} MB/s`;Ot(`downloading PLY ...
${ce}, ${xe}
${ae}`);return}else if((B==null?void 0:B.type)==="fetched"){xt(`💾 Fetched (${B.byteLength} bytes)`),si("Download"),Ot("parsing PLY..."),yi();return}else if((B==null?void 0:B.type)==="parse_progress"){const Z=B.total??0,Y=B.read??0,le=Z>0?Math.floor(Y/Z*100):0;Ot(`parsing PLY ...
${Y}/${Z} surfels (${le}%)`);return}else if((B==null?void 0:B.type)==="done"){const Z=B.num_points,Y=B.K,le=B.feature_mode??0,Se=B.sh_bias,de=B.kernel_type,ce=B.surfelBuffer,xe=B.svParamsBuffer;xt(`🪐 Total surfels: ${Z}, mode=${le===1?"SB":"SV"}, K=${Y}, sh_bias=${Se}, kernel_type=${de}`);const pe=l.createBuffer({label:"surfel input buffer",size:Nn(Z*ql),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(pe,0,ce);const be=xe.byteLength>0?xe.byteLength:16,De=l.createBuffer({label:le===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Nn(be),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});xe.byteLength>0&&l.queue.writeBuffer(De,0,xe),w.terminate(),si("Parse"),f({num_points:Z,K:Y,feature_mode:le,sh_bias:Se,kernel_type:de,surfel_buffer:pe,surfel_data:new Float32Array(ce),sv_params_buffer:De,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((A=(L=B.bbox)==null?void 0:L.min)==null?void 0:A[0])??-1)+((($=(z=B.bbox)==null?void 0:z.max)==null?void 0:$[0])??1))/2,((((G=(F=B.bbox)==null?void 0:F.min)==null?void 0:G[1])??-1)+(((oe=(H=B.bbox)==null?void 0:H.max)==null?void 0:oe[1])??1))/2,((((J=(j=B.bbox)==null?void 0:j.min)==null?void 0:J[2])??-1)+(((K=(te=B.bbox)==null?void 0:te.max)==null?void 0:K[2])??1))/2]})}},w.onerror=C=>{w.terminate(),E(C)},o instanceof ArrayBuffer?(Ot("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,E){E(l)})(jl,function(f){class E{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class B extends C{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class L extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends C{constructor(e,t){super(e),this.expanded=t}}class z extends C{constructor(e,t){super(e),this.index=t}}function $(n){return n}function F(n){return n==null}function G(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function H(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class j{static alreadyDisposed(){return new j({type:"alreadydisposed"})}static notBindable(){return new j({type:"notbindable"})}static propertyNotFound(e){return new j({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new j({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class J{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!J.isBindable(s))throw j.notBindable();if(!(e in s))throw j.propertyNotFound(e);s[e]=t}}class te extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class K{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Z="tp";function Y(n){return(t,s)=>[Z,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function le(n,e){return t=>e(n(t))}function Se(n){return n.rawValue}function de(n,e){n.emitter.on("change",le(Se,e)),e(n.rawValue)}function ce(n,e,t){de(n.value(e),t)}function xe(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ae(n,e){return t=>{xe(n,e,t)}}function pe(n,e){de(n,t=>{e.textContent=t??""})}const be=Y("btn");class De{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(be()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(be("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(be("t")),pe(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Oe{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new De(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Q{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,S)=>c===S,this.emitter=new K,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:c,sender:this}))}}class ee{constructor(e){this.emitter=new K,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function O(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ee(n):new Q(n,e)}class X{constructor(e){this.emitter=new K,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:O(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new X(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function Ve(n,e){const s=Object.keys(e).reduce((c,S)=>{if(c===void 0)return;const T=e[S],ne=T(n[S]);return ne.succeeded?Object.assign(Object.assign({},c),{[S]:ne.value}):void 0},{});return s}function Ce(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function me(n){return n===null?!1:typeof n=="object"}function ye(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ge(n){return{custom:e=>ye(e)(n),boolean:ye(e=>typeof e=="boolean"?e:void 0)(n),number:ye(e=>typeof e=="number"?e:void 0)(n),string:ye(e=>typeof e=="string"?e:void 0)(n),function:ye(e=>typeof e=="function"?e:void 0)(n),constant:e=>ye(t=>t===e?e:void 0)(n),raw:ye(e=>e)(n),object:e=>ye(t=>{if(me(t))return Ve(t,e)})(n),array:e=>ye(t=>{if(Array.isArray(t))return Ce(t,e)})(n)}}const ke={optional:Ge(!0),required:Ge(!1)};function fe(n,e){const t=ke.required.object(e)(n);return t.succeeded?t.value:void 0}function Re(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class I{constructor(e){this.value_=e}static create(e){return[new I(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const b=Y("");function i(n,e){return ae(n,b(void 0,e))}class p extends X{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=I.create(O(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const S=e??{};return new p(X.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(c=S.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,i(e,"disabled")),ce(this,"hidden",i(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const v=Y(""),x={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(v(void 0,x[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,x[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Re({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const P="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function h(){return globalThis}function a(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(P,"svg");return t.innerHTML=y[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function q(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ue(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const re=Y("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Ee{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(re()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(re("l")),ce(t.props,"label",S=>{F(S)?this.element.classList.add(re(void 0,"nol")):(this.element.classList.remove(re(void 0,"nol")),ue(s),s.appendChild(ge(e,S)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(re("v")),this.element.appendChild(c),this.valueElement=c}}class ve extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Ee(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const we={id:"button",type:"blade",accept(n){const e=ke,t=fe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ve(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:new Oe(n.document,{props:X.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ve)||!(n.controller.valueController instanceof Oe)?null:new te(n.controller)}};class Ie extends k{constructor(e){super(e),this.value=e.value}}function Le(){return new X({positions:O([],{equals:G})})}class qe extends X{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=X.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!F(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ce(this,"expanded",s),ce(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function He(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function We(n,e){e.style.height=n.styleHeight}function Je(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),F(n.get("expandedHeight"))){const t=He(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{We(n,e)}),We(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Ye extends w{constructor(e,t){super(e),this.rackApi_=t}}function at(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function lt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Xe{constructor(e){this.emitter=new K,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw j.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class et extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class je extends ve{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new K,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new L(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends ve{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ht(n){return n instanceof ot?n.apiSet_:n instanceof Ye?n.rackApi_.apiSet_:null}function it(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw j.shouldNeverHappen();return t}function Tt(n,e,t){if(!J.isBindable(n))throw j.notBindable();return new J(n,e,t)}class ot extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new K,this.apiSet_=new Xe(ht),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>it(this.apiSet_,e))}addInput(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,T=this.pool_.createInput(S,Tt(e,t,c.presetKey),c),ne=new et(T);return this.add(ne,c.index)}addMonitor(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,T=this.pool_.createMonitor(S,Tt(e,t),c),ne=new rt(T);return this.add(ne,c.index)}addFolder(e){return nt(this,e)}addButton(e){return at(this,e)}addSeparator(e){return lt(this,e)}addTab(e){return st(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=it(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof je){const s=it(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new B(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=it(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw j.shouldNeverHappen();const t=it(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new L(t,s.target.read(),s.target.presetKey)})}}class Et extends Ye{constructor(e,t){super(e,new ot(e.rackController,t)),this.emitter_=new K,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class kt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class At{constructor(e,t){const s=Y(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Mt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof je&&s.binding===e)return s}return null}function Dt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function Zt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function It(n){return n instanceof Ze?n.rack:n instanceof kt?n.rackController.rack:null}function Xt(n){const e=It(n);return e?e.bcSet_:null}class Ft{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new K,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Xe(Xt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),H(e,"parent")?e.parent=this:(e.parent_=this,Re({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){H(e,"parent")?e.parent=null:(e.parent_=null,Re({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof je)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=It(s);if(c){const S=c.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof je)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=It(s);if(c){const S=c.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const S=[];c===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),c===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),c.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Mt(this.find(je),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Dt(this.find(Ke),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Zt(this.find(Ie),e.sender);if(!t)throw j.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ze extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new At(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Ft({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const Qt=Y("cnt");class pn{constructor(e,t){var s;this.className_=Y((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Qt()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ce(this.foldable_,"completed",ae(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ce(t.props,"title",Ae=>{F(Ae)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const T=e.createElement("div");T.classList.add(this.className_("t")),pe(t.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T;const ne=e.createElement("div");ne.classList.add(this.className_("m")),this.buttonElement.appendChild(ne);const Te=t.containerElement;Te.classList.add(this.className_("c")),this.element.appendChild(Te),this.containerElement=Te}}class V extends kt{constructor(e,t){var s;const c=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new Ze(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new pn(e,{containerElement:S.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,Je(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const W={id:"folder",type:"blade",accept(n){const e=ke,t=fe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new V(n.document,{blade:n.blade,expanded:n.params.expanded,props:X.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof V?new Et(n.controller,n.pool):null}};class ie extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Ee(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Pe extends w{}const Me=Y("spr");class he{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Me()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Me("r")),this.element.appendChild(s)}}class _e extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new he(e,{viewProps:t.viewProps})}))}}const Be={id:"separator",type:"blade",accept(n){const t=fe(n,{view:ke.required.constant("separator")});return t?{params:t}:null},controller(n){return new _e(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof _e?new Pe(n.controller):null}},Fe=Y("tbi");class ct{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Fe()),t.viewProps.bindClassModifiers(this.element),ce(t.props,"selected",S=>{S?this.element.classList.add(Fe(void 0,"sel")):this.element.classList.remove(Fe(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Fe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Fe("t")),pe(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class bt{constructor(e,t){this.emitter=new K,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ct(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class yt{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new bt(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ze(e,{blade:Le(),viewProps:p.create()}),this.props=t.props,ce(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class tt{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Jt extends Ye{constructor(e,t){super(e,new ot(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new K,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw j.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new yt(t,{itemProps:X.fromObject({selected:!1,title:e.title}),props:X.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw j.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw j.shouldNeverHappen();const s=new tt(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw j.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new z(this,e.rawValue)})}}const hn=-1;class en{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=O(!0),this.selectedIndex=O(hn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=hn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const ut=Y("tab");class Cn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ut(),Qt()),t.viewProps.bindClassModifiers(this.element),de(t.empty,ae(this.element,ut(void 0,"nop")));const s=e.createElement("div");s.classList.add(ut("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(ut("i")),this.element.appendChild(c);const S=t.contentsElement;S.classList.add(ut("c")),this.element.appendChild(S),this.contentsElement=S}}class Nt extends kt{constructor(e,t){const s=new Ze(e,{blade:t.blade,viewProps:t.viewProps}),c=new en;super({blade:t.blade,rackController:s,view:new Cn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Xe(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const $n={id:"tab",type:"blade",accept(n){const e=ke,t=fe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Nt(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new yt(n.document,{itemProps:X.fromObject({selected:!1,title:t.title}),props:X.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Nt?new Jt(n.controller,n.pool):null}};function qn(n,e){const t=n.accept(e.params);if(!t)return null;const s=ke.optional.boolean(e.params.disabled).value,c=ke.optional.boolean(e.params.hidden).value;return n.controller({blade:Le(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:p.create({disabled:s,hidden:c})})}class vt{constructor(){this.disabled=!1,this.emitter=new K}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class tn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new K,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class fn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new K,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Bt(n,e){for(;n.length<e;)n.push(void 0)}function _n(n){const e=[];return Bt(e,n),O(e)}function mn(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function cs(n,e){const t=[...mn(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Bt(t,n.length),t}class En{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new K,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=cs(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class kn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Lt(n,e){if(n instanceof e)return n;if(n instanceof kn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class vn{constructor(e){this.values=X.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class Mn{constructor(e){this.values=X.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class js{constructor(e){this.values=X.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return F(s)||(c=Math.max(c,s)),F(t)||(c=Math.min(c,t)),c}}class Wn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const us=Y("lst");class Ii{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(us()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(us("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(us("m")),c.appendChild(g(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ce(this.props_,"options",S=>{q(this.selectElement),S.forEach(T=>{const ne=e.createElement("option");ne.textContent=T.text,this.selectElement.appendChild(ne)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Bn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ii(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ks=Y("pop");class Li{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ks()),t.viewProps.bindClassModifiers(this.element),de(t.shows,ae(this.element,Ks(void 0,"v")))}}class Hs{constructor(e,t){this.shows=O(!1),this.viewProps=t.viewProps,this.view=new Li(e,{shows:this.shows,viewProps:this.viewProps})}}const Ys=Y("txt");class zi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ys("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class jn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new zi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);F(c)||(this.value.rawValue=c),this.view.refresh()}}function Ri(n){return String(n)}function Zs(n){return n==="false"?!1:!!n}function Xs(n){return Ri(n)}class Gi{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Ui={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Vi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Ui[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Oi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Fi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Oi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ds(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function Tn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ni(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function An(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=An(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=An(n,e);return c===""?"":s+c}function ps(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=$i(n,e);return s===""?"":t+s}function Qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ni(n,e);return e+=s.length,s===""?"":s+An(n,e)}function qi(n,e){const t=Qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=An(n,e);return e+=c.length,t+s+c+ps(n,e)}function Wi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=An(n,e);return e+=s.length,s===""?"":t+s+ps(n,e)}function ji(n,e){const t=Qs(n,e);return e+=t.length,t===""?"":t+ps(n,e)}const Ki=ds([qi,Wi,ji]);function Hi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Yi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Hi(n,e);return s===""?"":t+s}function Zi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Xi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Zi(n,e);return s===""?"":t+s}function Qi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Qi(n,e);return s===""?"":t+s}const eo=ds([Yi,Xi,Ji]),to=ds([eo,Ki]);function no(n,e){const t=to(n,e);return e+=t.length,t===""?null:{evaluable:new Gi(t),cursor:e}}function so(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=er(n,e);if(!s)return null;e=s.cursor,e+=Tn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function ro(n,e){var t;return(t=no(n,e))!==null&&t!==void 0?t:so(n,e)}function Js(n,e){const t=ro(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Js(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Fi(s,c.evaluable)}):null}function io(n,e,t){t+=Tn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=Tn(e,t).length,{cursor:t,operator:s}):null}function oo(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let S=c.evaluable;for(;;){const T=io(e,t,s);if(!T)break;s=T.cursor;const ne=n(t,s);if(!ne)return null;s=ne.cursor,S=new Vi(T.operator,S,ne.evaluable)}return S?{cursor:s,evaluable:S}:null}}const ao=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>oo(n,e),Js);function er(n,e){return e+=Tn(n,e).length,ao(n,e)}function lo(n){const e=er(n,0);return!e||e.cursor+Tn(n,e.cursor).length!==n.length?null:e.evaluable}function zt(n){var e;const t=lo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tr(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=zt(n);if(!F(e))return e}return 0}function co(n){return String(n)}function _t(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const uo=_t(0);function Kn(n){return uo(n)+"%"}function nr(n){return String(n)}function hs(n){return n}function Dn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function S(T){c||(c=!0,T(),c=!1)}n.emitter.on("change",T=>{S(()=>{e.setRawValue(t(n,e),T.options)})}),e.emitter.on("change",T=>{S(()=>{n.setRawValue(s(n,e),T.options)}),S(()=>{e.setRawValue(t(n,e),T.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function gt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function In(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Rt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function po(n){return n==="ArrowUp"||n==="ArrowDown"}function sr(n){return po(n)||n==="ArrowLeft"||n==="ArrowRight"}function fs(n,e){var t,s;const c=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class nn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new K,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(fs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Qe(n,e,t,s,c){const S=(n-e)/(t-e);return s+S*(c-s)}function rr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function dt(n,e,t){return Math.min(Math.max(n,e),t)}function ir(n,e){return(n%e+e)%e}const Pt=Y("txt");class ho{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Pt(),Pt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Pt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Pt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Pt()),this.inputElement.classList.add(Pt("i"));const c=e.createElement("div");c.classList.add(Pt("k")),this.element.appendChild(c),this.knobElement=c;const S=e.createElementNS(P,"svg");S.classList.add(Pt("g")),this.knobElement.appendChild(S);const T=e.createElementNS(P,"path");T.classList.add(Pt("gb")),S.appendChild(T),this.guideBodyElem_=T;const ne=e.createElementNS(P,"path");ne.classList.add(Pt("gh")),S.appendChild(ne),this.guideHeadElem_=ne;const Te=e.createElement("div");Te.classList.add(Y("tt")()),this.knobElement.appendChild(Te),this.tooltipElem_=Te,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Pt(void 0,"drg"));return}this.element.classList.add(Pt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=dt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Ln{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=O(null),this.view=new ho(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new nn(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let T=e;return c!==void 0&&(T=Math.max(T,c)),S!==void 0&&(T=Math.min(T,S)),T}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);F(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=gt(this.baseStep_,In(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){gt(this.baseStep_,In(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const _s=Y("sld");class fo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(_s("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(_s("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=dt(Qe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class _o{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new fo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Qe(dt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=gt(this.baseStep_,Rt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){gt(this.baseStep_,Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ms=Y("sldtxt");class mo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ms());const s=e.createElement("div");s.classList.add(ms("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ms("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new _o(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Ln(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new mo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function zn(n,e){n.write(e)}function Hn(n){const e=ke;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function or(n){if(n==="inline"||n==="popup")return n}function $t(n){const e=ke;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function ar(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function bs(n){return F(n)?null:new Mn(ar(n))}function vo(n){const e=n?Lt(n,Wn):null;return e?e.step:null}function Yn(n,e){const t=n&&Lt(n,Wn);return t?rr(t.step):Math.max(rr(e),2)}function bn(n){const e=vo(n);return e??1}function gn(n,e){var t;const s=n&&Lt(n,Wn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Zn=Y("ckb");class bo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Zn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Zn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Zn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Zn("w")),s.appendChild(S);const T=g(e,"check");S.appendChild(T),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class go{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new bo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function wo(n){const e=[],t=bs(n.options);return t&&e.push(t),new kn(e)}const xo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=fe(e,{options:ke.optional.custom(Hn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs,constraint:n=>wo(n.params),writer:n=>zn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Lt(s,Mn);return c?new Bn(e,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new go(e,{value:t,viewProps:n.viewProps})}},sn=Y("col");class yo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn()),t.foldable.bindExpandedClass(this.element,sn(void 0,"expanded")),ce(t.foldable,"completed",ae(this.element,sn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(sn("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(sn("s")),s.appendChild(c),this.swatchElement=c;const S=e.createElement("div");if(S.classList.add(sn("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(sn("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}function Po(n,e,t){const s=dt(n/255,0,1),c=dt(e/255,0,1),S=dt(t/255,0,1),T=Math.max(s,c,S),ne=Math.min(s,c,S),Te=T-ne;let Ae=0,Ne=0;const $e=(ne+T)/2;return Te!==0&&(Ne=Te/(1-Math.abs(T+ne-1)),s===T?Ae=(c-S)/Te:c===T?Ae=2+(S-s)/Te:Ae=4+(s-c)/Te,Ae=Ae/6+(Ae<0?1:0)),[Ae*360,Ne*100,$e*100]}function So(n,e,t){const s=(n%360+360)%360,c=dt(e/100,0,1),S=dt(t/100,0,1),T=(1-Math.abs(2*S-1))*c,ne=T*(1-Math.abs(s/60%2-1)),Te=S-T/2;let Ae,Ne,$e;return s>=0&&s<60?[Ae,Ne,$e]=[T,ne,0]:s>=60&&s<120?[Ae,Ne,$e]=[ne,T,0]:s>=120&&s<180?[Ae,Ne,$e]=[0,T,ne]:s>=180&&s<240?[Ae,Ne,$e]=[0,ne,T]:s>=240&&s<300?[Ae,Ne,$e]=[ne,0,T]:[Ae,Ne,$e]=[T,0,ne],[(Ae+Te)*255,(Ne+Te)*255,($e+Te)*255]}function Co(n,e,t){const s=dt(n/255,0,1),c=dt(e/255,0,1),S=dt(t/255,0,1),T=Math.max(s,c,S),ne=Math.min(s,c,S),Te=T-ne;let Ae;Te===0?Ae=0:T===s?Ae=60*(((c-S)/Te%6+6)%6):T===c?Ae=60*((S-s)/Te+2):Ae=60*((s-c)/Te+4);const Ne=T===0?0:Te/T,$e=T;return[Ae,Ne*100,$e*100]}function lr(n,e,t){const s=ir(n,360),c=dt(e/100,0,1),S=dt(t/100,0,1),T=S*c,ne=T*(1-Math.abs(s/60%2-1)),Te=S-T;let Ae,Ne,$e;return s>=0&&s<60?[Ae,Ne,$e]=[T,ne,0]:s>=60&&s<120?[Ae,Ne,$e]=[ne,T,0]:s>=120&&s<180?[Ae,Ne,$e]=[0,T,ne]:s>=180&&s<240?[Ae,Ne,$e]=[0,ne,T]:s>=240&&s<300?[Ae,Ne,$e]=[ne,0,T]:[Ae,Ne,$e]=[T,0,ne],[(Ae+Te)*255,(Ne+Te)*255,($e+Te)*255]}function Eo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function ko(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function rn(n){return[n[0],n[1],n[2]]}function cr(n,e){return[n[0],n[1],n[2],e]}const Mo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Eo,rgb:So},hsv:{hsl:ko,hsv:(n,e,t)=>[n,e,t],rgb:lr},rgb:{hsl:Po,hsv:Co,rgb:(n,e,t)=>[n,e,t]}};function Xn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Bo(n,e){return n===e?e:ir(n,e)}function To(n,e,t){var s;const c=Xn(e,t);return[e==="rgb"?dt(n[0],0,c[0]):Bo(n[0],c[0]),dt(n[1],0,c[1]),dt(n[2],0,c[2]),dt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function ur(n,e,t,s){const c=Xn(e,t),S=Xn(e,s);return n.map((T,ne)=>T/c[ne]*S[ne])}function Ao(n,e,t){const s=ur(n,e.mode,e.type,"int"),c=Mo[e.mode][t.mode](...s);return ur(c,t.mode,"int",t.type)}function Qn(n,e){return typeof n!="object"||F(n)?!1:e in n&&typeof n[e]=="number"}class Ue{static black(e="int"){return new Ue([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ue(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Qn(e,"r")&&Qn(e,"g")&&Qn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Qn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==c[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=To(e,t,s)}getComponents(e,t="int"){return cr(Ao(rn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const qt=Y("colp");class Do{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(qt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(qt("hsv"));const c=e.createElement("div");c.classList.add(qt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const S=e.createElement("div");S.classList.add(qt("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const T=e.createElement("div");if(T.classList.add(qt("rgb")),this.textView_=t.textView,T.appendChild(this.textView_.element),this.element.appendChild(T),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const ne=e.createElement("div");ne.classList.add(qt("a"));const Te=e.createElement("div");Te.classList.add(qt("ap")),Te.appendChild(this.alphaViews_.palette.element),ne.appendChild(Te);const Ae=e.createElement("div");Ae.classList.add(qt("at")),Ae.appendChild(this.alphaViews_.text.element),ne.appendChild(Ae),this.element.appendChild(ne)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Io(n){return n==="int"?"int":n==="float"?"float":void 0}function gs(n){const e=ke;return fe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Io)}),expanded:e.optional.boolean,picker:e.optional.custom(or)})}function on(n){return n?.1:1}function an(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Lo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function St(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const zo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function dr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return zo[s](t)}function pr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function hr(n){return e=>{const t=pr(e);return t?new Ue(t,"rgb",n):null}}function fr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ue(t,"rgb",n):null}}function mr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),St(e[2],100),St(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ue(t,"hsl",n):null}}function br(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dr(e[1]),St(e[2],100),St(e[3],100),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function gr(n){return e=>{const t=br(e);return t?new Ue(t,"hsl",n):null}}function wr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Ro(n){const e=wr(n);return e?new Ue(e,"rgb","int"):null}function xr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Qe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Qe(parseInt(t[4],16),0,255,0,1)]:null}function Go(n){const e=xr(n);return e?new Ue(e,"rgb","int"):null}function yr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Pr(n){return e=>{const t=yr(e);return t?new Ue(t,"rgb",n):null}}function Sr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Cr(n){return e=>{const t=Sr(e);return t?new Ue(t,"rgb",n):null}}const Uo=[{parser:wr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:pr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:fr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:mr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:br,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:yr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Sr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Vo(n){return Uo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function ws(n,e="int"){const t=Vo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Er={int:[Ro,Go,hr("int"),_r("int"),vr("int"),gr("int"),Pr("int"),Cr("int")],float:[hr("float"),_r("float"),vr("float"),gr("float"),Pr("float"),Cr("float")]};function Oo(n){const e=Er[n];return t=>{if(typeof t!="string")return Ue.black(n);const s=e.reduce((c,S)=>c||S(t),null);return s??Ue.black(n)}}function xs(n){const e=Er[n];return t=>e.reduce((s,c)=>s||c(t),null)}function kr(n){const e=dt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Mr(n,e="#"){const t=rn(n.getComponents("rgb")).map(kr).join("");return`${e}${t}`}function ys(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(kr).join("");return`${e}${s}`}function Br(n,e){const t=_t(e==="float"?2:0);return`rgb(${rn(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Fo(n){return e=>Br(e,n)}function Jn(n,e){const t=_t(2),s=_t(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,T)=>(T===3?t:s)(S)).join(", ")})`}function No(n){return e=>Jn(e,n)}function $o(n){const e=[_t(0),Kn,Kn];return`hsl(${rn(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function qo(n){const e=[_t(0),Kn,Kn,_t(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function Tr(n,e){const t=_t(e==="float"?2:0),s=["r","g","b"];return`{${rn(n.getComponents("rgb",e)).map((S,T)=>`${s[T]}: ${t(S)}`).join(", ")}}`}function Wo(n){return e=>Tr(e,n)}function Ar(n,e){const t=_t(2),s=_t(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((T,ne)=>{const Te=ne===3?t:s;return`${c[ne]}: ${Te(T)}`}).join(", ")}}`}function jo(n){return e=>Ar(e,n)}const Ko=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Mr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ys},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:$o},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:qo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Fo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:No(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Wo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:jo(e)}],[])];function Ps(n){return Ko.reduce((e,t)=>e||(Lo(t.format,n)?t.stringifier:null),null)}const Rn=Y("apl");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Rn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Rn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Rn("c")),s.appendChild(c),this.colorElem_=c;const S=e.createElement("div");S.classList.add(Rn("m")),this.element.appendChild(S),this.markerElem_=S;const T=e.createElement("div");T.classList.add(Rn("p")),this.markerElem_.appendChild(T),this.previewElem_=T,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ue([t[0],t[1],t[2],0],"rgb"),c=new Ue([t[0],t[1],t[2],255],"rgb"),S=["to right",Jn(s),Jn(c)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=Jn(e);const T=Qe(t[3],0,1,0,100);this.markerElem_.style.left=`${T}%`}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[S,T,ne]=c.getComponents("hsv");this.value.setRawValue(new Ue([S,T,ne,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=gt(on(!0),Rt(e));if(t===0)return;const s=this.value.rawValue,[c,S,T,ne]=s.getComponents("hsv");this.value.setRawValue(new Ue([c,S,T,ne+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){gt(on(!0),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const wn=Y("coltxt");function Zo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const S=n.createElement("option");return S.textContent=c.text,S.value=c.value,s.appendChild(S),s},n.createDocumentFragment())),e}class Xo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(wn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(wn("m")),this.modeElem_=Zo(e),this.modeElem_.classList.add(wn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(wn("mm")),c.appendChild(g(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(wn("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,T=>{this.modeElem_.value=T})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){q(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(wn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Qo(n){return _t(n==="float"?2:0)}function Jo(n,e,t){const s=Xn(n,e)[t];return new vn({min:0,max:s})}function Ss(n,e,t){return new Ln(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:on(!1),parser:e.parser,props:X.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Qo(e.colorType)}),value:O(0,{constraint:Jo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class ea{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=O(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Xo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Ss(e,t,0),Ss(e,t,1),Ss(e,t,2)];return s.forEach((c,S)=>{Dn({primary:this.value,secondary:c.value,forward:T=>T.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(T,ne)=>{const Te=this.colorMode.rawValue,Ae=T.rawValue.getComponents(Te,this.colorType_);return Ae[S]=ne.rawValue,new Ue(cr(rn(Ae),Ae[3]),Te,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Cs=Y("hpl");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Cs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Cs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Cs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Br(new Ue([t,100,100],"hsv"));const s=Qe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class na{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Qe(dt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,S,T,ne]=c.getComponents("hsv");this.value.setRawValue(new Ue([s,S,T,ne],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=gt(on(!1),Rt(e));if(t===0)return;const s=this.value.rawValue,[c,S,T,ne]=s.getComponents("hsv");this.value.setRawValue(new Ue([c+t,S,T,ne],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){gt(on(!1),Rt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Es=Y("svp"),Dr=64;class sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Es()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Dr,s.width=Dr,s.classList.add(Es("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(Es("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,S=this.canvasElement.height,T=e.getImageData(0,0,c,S),ne=T.data;for(let Ne=0;Ne<S;Ne++)for(let $e=0;$e<c;$e++){const ln=Qe($e,0,c,0,100),Un=Qe(Ne,0,S,100,0),Vn=lr(s[0],ln,Un),es=(Ne*c+$e)*4;ne[es]=Vn[0],ne[es+1]=Vn[1],ne[es+2]=Vn[2],ne[es+3]=255}e.putImageData(T,0,0);const Te=Qe(s[1],0,100,0,100);this.markerElem_.style.left=`${Te}%`;const Ae=Qe(s[2],0,100,100,0);this.markerElem_.style.top=`${Ae}%`}onValueChange_(){this.update_()}}class ra{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new sa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Qe(e.point.x,0,e.bounds.width,0,100),c=Qe(e.point.y,0,e.bounds.height,100,0),[S,,,T]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([S,s,c,T],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s,c,S]=this.value.rawValue.getComponents("hsv"),T=on(!1),ne=gt(T,Rt(e)),Te=gt(T,In(e));ne===0&&Te===0||this.value.setRawValue(new Ue([t,s+ne,c+Te,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=on(!1),s=gt(t,Rt(e)),c=gt(t,In(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ia{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new na(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ra(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Yo(e,{value:this.value,viewProps:this.viewProps}),text:new Ln(e,{parser:zt,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:_t(2)}),value:O(0,{constraint:new vn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Dn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const S=s.rawValue.getComponents();return S[3]=c.rawValue,new Ue(S,s.rawValue.mode)}}),this.textC_=new ea(e,{colorType:t.colorType,parser:zt,value:this.value,viewProps:this.viewProps}),this.view=new Do(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ks=Y("colsw");class oa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ks()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ks("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ks("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ys(e)}onValueChange_(){this.update_()}}class aa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new oa(e,{value:this.value,viewProps:this.viewProps})}}class Ms{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new aa(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new jn(e,{parser:t.parser,props:X.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new yo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const c=new ia(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),Dn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,T)=>T.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Je(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function la(n,e){return Ue.isColorObject(n)?Ue.fromObject(n,e):Ue.black(e)}function ca(n){return rn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ua(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function da(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function pa(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,Qe(n&255,0,255,0,1)],"rgb")}function ha(n){return typeof n!="number"?Ue.black():da(n)}function fa(n){return typeof n!="number"?Ue.black():pa(n)}function _a(n){const e=Ps(n);return e?(t,s)=>{zn(t,e(s))}:null}function ma(n){const e=n?ua:ca;return(t,s)=>{zn(t,e(s))}}function va(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ba(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function ga(n,e){return(t,s)=>{n?va(t,s,e):ba(t,s,e)}}function Bs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function wa(n){return n?e=>ys(e,"0x"):e=>Mr(e,"0x")}function xa(n){return"color"in n||"view"in n&&n.view==="color"}const ya={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!xa(e))return null;const t=gs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Bs(n.params)?fa:ha,equals:Ue.equals,writer:n=>ma(Bs(n.params))},controller:n=>{const e=Bs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:"int",expanded:t??!1,formatter:wa(e),parser:xs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Pa(n){return Ue.isRgbaColorObject(n)}function Sa(n){return e=>la(e,n)}function Ca(n,e){return t=>n?Ar(t,e):Tr(t,e)}const Ea={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ue.isColorObject(n))return null;const t=gs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Sa(an(n.params)),equals:Ue.equals,writer:n=>ga(Pa(n.initialValue),an(n.params))},controller:n=>{var e;const t=Ue.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,S=(e=an(n.params))!==null&&e!==void 0?e:"int";return new Ms(n.document,{colorType:S,expanded:s??!1,formatter:Ca(t,S),parser:xs(S),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ka={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=ws(n,an(e));if(!t||!Ps(t))return null;const c=gs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Oo((e=an(n.params))!==null&&e!==void 0?e:"int")},equals:Ue.equals,writer:n=>{const e=ws(n.initialValue,an(n.params));if(!e)throw j.shouldNeverHappen();const t=_a(e);if(!t)throw j.notBindable();return t}},controller:n=>{const e=ws(n.initialValue,an(n.params));if(!e)throw j.shouldNeverHappen();const t=Ps(e);if(!t)throw j.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new Ms(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:xs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Wt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var S,T;return(T=(S=this.components[c])===null||S===void 0?void 0:S.constrain(s))!==null&&T!==void 0?T:s});return this.asm_.fromComponents(t)}}const Ir=Y("pndtxt");class Ma{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ir()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Ir("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ba(n,e,t){return new Ln(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:O(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ts{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ba(e,t,c)),this.acs_.forEach((s,c)=>{Dn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[c],backward:(S,T)=>{const ne=t.assembly.toComponents(S.rawValue);return ne[c]=T.rawValue,t.assembly.fromComponents(ne)}})}),this.view=new Ma(e,{textViews:this.acs_.map(s=>s.view)})}}function Lr(n,e){return"step"in n&&!F(n.step)?new Wn(n.step,e):null}function zr(n){return!F(n.max)&&!F(n.min)?new vn({max:n.max,min:n.min}):!F(n.max)||!F(n.min)?new js({max:n.max,min:n.min}):null}function Ta(n){const e=Lt(n,vn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Lt(n,js);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Aa(n,e){const t=[],s=Lr(n,e);s&&t.push(s);const c=zr(n);c&&t.push(c);const S=bs(n.options);return S&&t.push(S),new kn(t)}const Da={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ke,s=fe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Hn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tr,constraint:n=>Aa(n.params,n.initialValue),writer:n=>zn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Lt(s,Mn);if(c)return new Bn(n.document,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:_t(Yn(s,t.rawValue)),T=s&&Lt(s,vn);return T?new vs(n.document,{baseStep:bn(s),parser:zt,sliderProps:new X({maxValue:T.values.value("max"),minValue:T.values.value("min")}),textProps:X.fromObject({draggingScale:gn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new Ln(n.document,{baseStep:bn(s),parser:zt,props:X.fromObject({draggingScale:gn(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class jt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Rr={toComponents:n=>n.getComponents(),fromComponents:n=>new jt(...n)},xn=Y("p2d");class Ia{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xn()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,ae(this.element,xn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(xn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(xn("b")),c.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const S=e.createElement("div");if(S.classList.add(xn("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(xn("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}const Kt=Y("p2dp");class La{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Kt()),t.layout==="popup"&&this.element.classList.add(Kt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Kt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(P,"svg");c.classList.add(Kt("g")),this.padElement.appendChild(c),this.svgElem_=c;const S=e.createElementNS(P,"line");S.classList.add(Kt("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const T=e.createElementNS(P,"line");T.classList.add(Kt("ax")),T.setAttributeNS(null,"x1","50%"),T.setAttributeNS(null,"y1","0"),T.setAttributeNS(null,"x2","50%"),T.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(T);const ne=e.createElementNS(P,"line");ne.classList.add(Kt("l")),ne.setAttributeNS(null,"x1","50%"),ne.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ne),this.lineElem_=ne;const Te=e.createElement("div");Te.classList.add(Kt("m")),this.padElement.appendChild(Te),this.markerElem_=Te,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Qe(e,-s,+s,0,100),S=Qe(t,-s,+s,0,100),T=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${T}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${T}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Gr(n,e,t){return[gt(e[0],Rt(n)),gt(e[1],In(n))*(t?1:-1)]}class za{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new La(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new nn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Qe(e.point.x,0,e.bounds.width,-s,+s),S=Qe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new jt(c,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){sr(e.key)&&e.preventDefault();const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new jt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Gr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ra{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Hs(e,{viewProps:this.viewProps}):null;const S=new za(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new Ts(e,{assembly:Rr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ia(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Dn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,ne)=>ne.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Je(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class yn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ur={toComponents:n=>n.getComponents(),fromComponents:n=>new yn(...n)};function Ga(n){return yn.isObject(n)?new yn(n.x,n.y,n.z):new yn}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Va(n,e){return new Wt({assembly:Ur,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y),Gt("z"in n?n.z:void 0,e.z)]})}function As(n,e){return{baseStep:bn(e),constraint:e,textProps:X.fromObject({draggingScale:gn(e,n),formatter:_t(Yn(e,n))})}}const Oa={id:"input-point3d",type:"input",accept:(n,e)=>{if(!yn.isObject(n))return null;const t=ke,s=fe(e,{x:t.optional.custom($t),y:t.optional.custom($t),z:t.optional.custom($t)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Va(n.params,n.initialValue),equals:yn.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Wt))throw j.shouldNeverHappen();return new Ts(n.document,{assembly:Ur,axes:[As(e.rawValue.x,t.components[0]),As(e.rawValue.y,t.components[1]),As(e.rawValue.z,t.components[2])],parser:zt,value:e,viewProps:n.viewProps})}};class Pn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,c=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Vr={toComponents:n=>n.getComponents(),fromComponents:n=>new Pn(...n)};function Fa(n){return Pn.isObject(n)?new Pn(n.x,n.y,n.z,n.w):new Pn}function Na(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function $a(n,e){return new Wt({assembly:Vr,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y),Gt("z"in n?n.z:void 0,e.z),Gt("w"in n?n.w:void 0,e.w)]})}function qa(n,e){return{baseStep:bn(e),constraint:e,textProps:X.fromObject({draggingScale:gn(e,n),formatter:_t(Yn(e,n))})}}const Wa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Pn.isObject(n))return null;const t=ke,s=fe(e,{x:t.optional.custom($t),y:t.optional.custom($t),z:t.optional.custom($t),w:t.optional.custom($t)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Fa,constraint:n=>$a(n.params,n.initialValue),equals:Pn.equals,writer:n=>Na},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Wt))throw j.shouldNeverHappen();return new Ts(n.document,{assembly:Vr,axes:e.rawValue.getComponents().map((s,c)=>qa(s,t.components[c])),parser:zt,value:e,viewProps:n.viewProps})}};function ja(n){const e=[],t=bs(n.options);return t&&e.push(t),new kn(e)}const Ka={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=fe(e,{options:ke.optional.custom(Hn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr,constraint:n=>ja(n.params),writer:n=>zn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Lt(s,Mn);return c?new Bn(e,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new jn(e,{parser:S=>S,props:X.fromObject({formatter:hs}),value:t,viewProps:n.viewProps})}},Gn={monitor:{defaultInterval:200,defaultLineCount:3}},Or=Y("mll");class Ha{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Or()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Or("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Ds{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ha(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Fr=Y("sgl");class Ya{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Fr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ya(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Za={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=fe(e,{lineCount:ke.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Zs},controller:n=>{var e;return n.value.rawValue.length===1?new Is(n.document,{formatter:Xs,value:n.value,viewProps:n.viewProps}):new Ds(n.document,{formatter:Xs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ht=Y("grl");class Xa{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ht()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(P,"svg");s.classList.add(Ht("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(P,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const S=e.createElement("div");S.classList.add(Ht("t"),Y("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Ne,$e)=>{if(Ne===void 0)return;const ln=Qe($e,0,t,0,e.width),Un=Qe(Ne,s,c,e.height,0);S.push([ln,Un].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const T=this.tooltipElem_,ne=this.value.rawValue[this.cursor_.rawValue];if(ne===void 0){T.classList.remove(Ht("t","a"));return}const Te=Qe(this.cursor_.rawValue,0,t,0,e.width),Ae=Qe(ne,s,c,e.height,0);T.style.left=`${Te}px`,T.style.top=`${Ae}px`,T.textContent=`${this.formatter_(ne)}`,T.classList.contains(Ht("t","a"))||(T.classList.add(Ht("t","a"),Ht("t","in")),r(T),T.classList.remove(Ht("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Qa{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=O(-1),this.view=new Xa(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new nn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Qe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Qe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ls(n){return"format"in n&&!F(n.format)?n.format:_t(2)}function Ja(n){var e;return n.value.rawValue.length===1?new Is(n.document,{formatter:Ls(n.params),value:n.value,viewProps:n.viewProps}):new Ds(n.document,{formatter:Ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function el(n){var e,t,s;return new Qa(n.document,{formatter:Ls(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,props:X.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Nr(n){return"view"in n&&n.view==="graph"}const tl={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ke,s=fe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Nr(n)?64:1,reader:n=>tr},controller:n=>Nr(n.params)?el(n):Ja(n)},nl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ke,s=fe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>nr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Ds(n.document,{formatter:hs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Gn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Is(n.document,{formatter:hs,value:t,viewProps:n.viewProps})}};function sl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(F(s))return null;const c=ke,S={target:e.target,initialValue:s.initialValue,params:s.params},T=n.binding.reader(S),ne=n.binding.constraint?n.binding.constraint(S):void 0,Te=O(T(s.initialValue),{constraint:ne,equals:n.binding.equals}),Ae=new fn({reader:T,target:e.target,value:Te,writer:n.binding.writer(S)}),Ne=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,ln=n.controller({constraint:ne,document:e.document,initialValue:s.initialValue,params:s.params,value:Ae.value,viewProps:p.create({disabled:Ne,hidden:$e})});return new je(e.document,{binding:Ae,blade:Le(),props:X.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:ln})}function rl(n,e){return e===0?new vt:new tn(n,e??Gn.monitor.defaultInterval)}function il(n,e){var t,s,c;const S=ke,T=n.accept(e.target.read(),e.params);if(F(T))return null;const ne={target:e.target,initialValue:T.initialValue,params:T.params},Te=n.binding.reader(ne),Ae=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(T.params))!==null&&s!==void 0?s:1,Ne=S.optional.number(e.params.interval).value,$e=new En({reader:Te,target:e.target,ticker:rl(e.document,Ne),value:_n(Ae)}),ln=S.optional.boolean(e.params.disabled).value,Un=S.optional.boolean(e.params.hidden).value,Vn=n.controller({document:e.document,params:T.params,value:$e.value,viewProps:p.create({disabled:ln,hidden:Un})});return new Ke(e.document,{binding:$e,blade:Le(),props:X.fromObject({label:"label"in e.params?(c=S.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Vn})}class ol{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(F(c))throw new j({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((T,ne)=>T??sl(ne,{document:e,target:t,params:s}),null);if(S)return S;throw new j({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((S,T)=>S??il(T,{document:e,params:s,target:t}),null);if(c)return c;throw new j({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,S)=>c??qn(S,{document:e,params:t}),null);if(!s)throw new j({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof je)return new et(e);if(e instanceof Ke)return new rt(e);if(e instanceof Ze)return new ot(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw j.shouldNeverHappen();return t}}function al(){const n=new ol;return[hl,Oa,Wa,Ka,Da,ka,Ea,ya,xo,Za,nl,tl,we,W,Be,$n].forEach(e=>{n.register(e)}),n}function ll(n){return jt.isObject(n)?new jt(n.x,n.y):new jt}function cl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Gt(n,e){if(!n)return;const t=[],s=Lr(n,e);s&&t.push(s);const c=zr(n);return c&&t.push(c),new kn(t)}function ul(n,e){return new Wt({assembly:Rr,components:[Gt("x"in n?n.x:void 0,e.x),Gt("y"in n?n.y:void 0,e.y)]})}function $r(n,e){const[t,s]=n?Ta(n):[];if(!F(t)||!F(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=bn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function dl(n,e){const t=e instanceof Wt?e.components[0]:void 0,s=e instanceof Wt?e.components[1]:void 0,c=$r(t,n.x),S=$r(s,n.y);return Math.max(c,S)}function qr(n,e){return{baseStep:bn(e),constraint:e,textProps:X.fromObject({draggingScale:gn(e,n),formatter:_t(Yn(e,n))})}}function pl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const hl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!jt.isObject(n))return null;const t=ke,s=fe(e,{expanded:t.optional.boolean,picker:t.optional.custom(or),x:t.optional.custom($t),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>ll,constraint:n=>ul(n.params,n.initialValue),equals:jt.equals,writer:n=>cl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Wt))throw j.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Ra(e,{axes:[qr(t.rawValue.x,s.components[0]),qr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:pl(n.params),maxValue:dl(t.rawValue,s),parser:zt,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class Wr extends w{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class jr extends w{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Kr extends w{constructor(e){super(e),this.emitter_=new K,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const fl=function(){return{id:"list",type:"blade",accept(n){const e=ke,t=fe(n,{options:e.required.custom(Hn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Mn(ar(n.params.options)),t=O(n.params.value,{constraint:e}),s=new Bn(n.document,{props:new X({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new ie(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof ie)||!(n.controller.valueController instanceof Bn)?null:new Wr(n.controller)}}}();function _l(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function ml(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class vl extends Et{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(je).map(s=>s.binding);ml(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(je).map(t=>t.binding.target);return _l(e)}refresh(){this.controller_.rackController.rack.find(je).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class bl extends V{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const gl={id:"slider",type:"blade",accept(n){const e=ke,t=fe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new vn({max:n.params.max,min:n.params.min}),S=new vs(n.document,{baseStep:1,parser:zt,sliderProps:new X({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:X.fromObject({draggingScale:gn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:co}),value:O(s,{constraint:c}),viewProps:n.viewProps});return new ie(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof ie)||!(n.controller.valueController instanceof vs)?null:new jr(n.controller)}},wl=function(){return{id:"text",type:"blade",accept(n){const e=ke,t=fe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new jn(n.document,{parser:n.params.parse,props:X.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:O(n.params.value),viewProps:n.viewProps});return new ie(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof ie)||!(n.controller.valueController instanceof jn)?null:new Kr(n.controller)}}}();function xl(n){const e=n.createElement("div");return e.classList.add(Y("dfw")()),n.body&&n.body.appendChild(e),e}function Hr(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class yl extends vl{constructor(e){var t,s;const c=e??{},S=(t=c.document)!==null&&t!==void 0?t:a(),T=al(),ne=new bl(S,{expanded:c.expanded,blade:Le(),props:X.fromObject({title:c.title}),viewProps:p.create()});super(ne,T),this.pool_=T,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:xl(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw j.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw j.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Hr(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Hr(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[gl,fl,$n,wl]})}}const Pl=new E("3.1.10");f.BladeApi=w,f.ButtonApi=te,f.FolderApi=Et,f.InputBindingApi=et,f.ListApi=Wr,f.MonitorBindingApi=rt,f.Pane=yl,f.SeparatorApi=Pe,f.SliderApi=jr,f.TabApi=Jt,f.TabPageApi=tt,f.TextApi=Kr,f.TpChangeEvent=B,f.VERSION=Pl,Object.defineProperty(f,"__esModule",{value:!0})})})(Rs,Rs.exports);var Kl=Rs.exports;const Hl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Yl=`const WG_SIZE = 256u;
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
}`,Zl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Xl=`// shader implementing gpu radix sort.

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
`,Ql=`// shader implementing gpu radix sort.

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
`,Jl=`// ============================================================================
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
}`,Si=32,Gs=1,Us=2,li=4,ci=512,ui=1024,ec=0,Yt=new ArrayBuffer(Si),mt={canvas_size:new Uint32Array(Yt,0,2),accel_flags:new Uint32Array(Yt,8,1),feature_mode:new Uint32Array(Yt,12,1),gaussian_scaling:new Float32Array(Yt,16,1),sh_bias:new Float32Array(Yt,20,1),color_K:new Uint32Array(Yt,24,1),walltime:new Float32Array(Yt,28,1)};function tc(o){mt.canvas_size[0]=o.width>>>0,mt.canvas_size[1]=o.height>>>0,mt.accel_flags[0]=(o.accel_flags??Gs|Us)>>>0,mt.feature_mode[0]=(o.feature_mode??ec)>>>0,mt.gaussian_scaling[0]=o.gaussian_scaling??1,mt.sh_bias[0]=o.sh_bias??.5,mt.color_K[0]=(o.color_K??0)>>>0,mt.walltime[0]=o.walltime??0}function Ci(o,l){o.queue.writeBuffer(l,0,Yt)}function ls(o,l,f){f&&o&&l&&Ci(o,l)}function Sn(o,l,f,E,w=!0){mt.canvas_size[0]=o>>>0,mt.canvas_size[1]=l>>>0,ls(f??null,E??null,w)}function di(o,l,f,E=!0){mt.gaussian_scaling[0]=o,ls(l??null,f??null,E)}function pi(o,l,f,E=!0){mt.sh_bias[0]=o,ls(l??null,f??null,E)}function Vs(o,l,f,E=!0){let w=mt.accel_flags[0];o.oac!==void 0&&(w=o.oac?w|Gs:w&~Gs),o.spr!==void 0&&(w=o.spr?w|Us:w&~Us),o.bfc!==void 0&&(w=o.bfc?w|li:w&~li),o.hypLegacy!==void 0&&(w=o.hypLegacy?w|ci:w&~ci),o.legacyPos!==void 0&&(w=o.legacyPos?w|ui:w&~ui),mt.accel_flags[0]=w>>>0,ls(l??null,f??null,E)}const nc=256;function hi(o,l){const f=[],E=[];let w=!0;for(const C of o.split(`
`)){const B=C.trim();let L;if((L=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const A=!!l[L[1]];E.push({parent:w,taken:A}),w=w&&A;continue}if(/^\/\/#else\s*$/.test(B)){const A=E[E.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");w=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const A=E.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");w=A.parent;continue}w&&f.push(C)}if(E.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const sc=Si,rc=8,ic=96,oc=12,Ws=8,Ut=1<<Ws,un=256,is=32/Ws,ac=0,fi=is&1;function _i(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function lc(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[f]}),w=C=>o.createComputePipeline({layout:E,compute:{module:l,entryPoint:C,constants:{WG_SIZE:un}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function cc(o,l,f){const E=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[E]}),B=o.createPipelineLayout({bindGroupLayouts:[w]}),L=[];for(let A=0;A<is;A++){const z={PASS_ID:A+ac,RS_RADIX_LOG2:Ws,RS_RADIX_SIZE:Ut};L.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:l,entryPoint:"local_histogram_pass",constants:z}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:f,entryPoint:"scatter_elements",constants:z}})})}return{passes:L,localHistogramBindGroupLayout:E,scatterBindGroupLayout:w}}function uc(o){const l=o.createShaderModule({label:"local histogram",code:Ql}),f=o.createShaderModule({label:"scatter",code:Xl}),E=o.createShaderModule({label:"blelloch prefix",code:Jl}),w=lc(o,E),C=cc(o,l,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:w}}function mi(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:E,rectsBuffer:w,texParamsBuffer:C,meta:B}}class dc{constructor(l,f,E,w,C,B=null,L={}){N(this,"device");N(this,"pc");N(this,"presentationFormat");N(this,"camera_buffer");N(this,"render_settings_buffer");N(this,"draw_indirect_buffer");N(this,"splat_2d_buffer");N(this,"querySet");N(this,"resolveBuffer");N(this,"resultBuffer");N(this,"queriesPerFrame",rc);N(this,"queryCapacityFrames",200);N(this,"sort_prefixBindGroup");N(this,"sort_pipelines");N(this,"sort_localHistogramBindGroups");N(this,"sort_scatterBindGroups");N(this,"lastFrame",0);N(this,"frameCount",0);N(this,"preprocessPipeline");N(this,"cullPipeline");N(this,"renderPipeline");N(this,"indirectPipeline");N(this,"renderShaderModule");N(this,"betaKernel",1);N(this,"fetchById");N(this,"octBound");N(this,"acc16");N(this,"accTexture",null);N(this,"accView",null);N(this,"accW",0);N(this,"accH",0);N(this,"legacyRenderPipeline",null);N(this,"varyingsPipeline",null);N(this,"legacyRenderer",!1);N(this,"accResolvePipeline",null);N(this,"accResolveBgl",null);N(this,"accResolveBindGroup",null);N(this,"renderSettingsBgl");N(this,"preprocessBgl2");N(this,"renderSplatsBgl");N(this,"atlasBgl");N(this,"sort_info_buffer");N(this,"sort_ping_pong");N(this,"crsBg");N(this,"gsBg");N(this,"cullBg2");N(this,"preprocessBg1");N(this,"renderSplatsBindGroup");N(this,"renderSettingsBindGroup");N(this,"atlasBindGroup");N(this,"indirectBindGroup");N(this,"sh_solvers_buffer");N(this,"bfcParamsBuffer");N(this,"bfcBindGroupLayout");N(this,"bfcBindGroup");N(this,"bgColor",[0,0,0,0]);N(this,"showPerfDialogNext",!1);N(this,"requestReorderNextFrame",!1);N(this,"reorderInFlight",!1);N(this,"downloadOnceNextRead",!1);N(this,"downloadOnceFileName","fps_metrics");N(this,"allFrameTimes",[]);N(this,"lastStageBreakdownMs",null);N(this,"timeQueryEnabled");N(this,"atlas");N(this,"atlasParamsBuffer");N(this,"_atlasEnabled",!0);N(this,"_mipMode",1);this.fetchById=L.fetchById??!0,this.octBound=L.octBound??!1,this.acc16=L.acc16??!1,xt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=C.includes("timestamp-query");this.timeQueryEnabled=A,A&&xt("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=E,this.camera_buffer=w,this.atlas=B??mi(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",Ce=>{console.error("A WebGPU error was not captured:",Ce.error)}),this._setupTimestampQueries(),this._setupBuffers();const z=(Math.floor((this.pc.num_points+un-1)/un)+1)*un,$=Math.ceil(z/un);console.log(`keys count adjusted: ${z}`),console.log(`key size: ${this.pc.num_points}`);const F=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=uc(f);const G=[_i(z,f),_i(z,f)],H=f.createBuffer({label:"workgroup histograms",size:$*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"workgroup prefixes",size:$*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=f.createBuffer({label:"digit base",size:Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=Math.ceil($/un),te=Math.ceil(J/un),K=f.createBuffer({label:"prefix l0 sums",size:J*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=f.createBuffer({label:"prefix l0 offsets",size:J*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"prefix l1 sums",size:te*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),le=f.createBuffer({label:"prefix l1 offsets",size:te*Ut*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:K}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:Y}},{binding:6,resource:{buffer:le}},{binding:7,resource:{buffer:j}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:G[0].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:G[1].sort_depths_buffer}},{binding:2,resource:{buffer:H}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:G[0].sort_depths_buffer}},{binding:3,resource:{buffer:G[1].sort_depths_buffer}},{binding:4,resource:{buffer:G[0].sort_indices_buffer}},{binding:5,resource:{buffer:G[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:G[1].sort_depths_buffer}},{binding:3,resource:{buffer:G[0].sort_depths_buffer}},{binding:4,resource:{buffer:G[1].sort_indices_buffer}},{binding:5,resource:{buffer:G[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=F,this.sort_ping_pong=G;const Se=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),de=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ce=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),xe=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:Se,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:de,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ce,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=xe,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:xe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const ae=this.device.createShaderModule({code:Yl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ae,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const pe=this.device.createShaderModule({code:Zl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[Se,de,ce,this.bfcBindGroupLayout]}),compute:{module:pe,entryPoint:"surfel_cull"}});const be=this.device.createShaderModule({code:Hl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Se,xe]}),compute:{module:be,entryPoint:"preprocess"}});const De=this.device.createShaderModule({label:"render_2dgs",code:hi(ai,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});De.getCompilationInfo().then(Ce=>{Ce.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ce.messages.forEach(me=>{(me.type==="error"?console.error:me.type==="warning"?console.warn:console.log)(`${me.type} (line ${me.lineNum}:${me.linePos}): ${me.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Oe=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Q=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ee=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:Q,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),O=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),X=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Oe,ee,O]}),vertex:{module:De,entryPoint:"vs_main"},fragment:{module:De,entryPoint:"fs_main",constants:{BETA_KERNEL:X},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ve=(Ce,me,ye)=>{const Ge=this.device.createShaderModule({label:`render_2dgs (${Ce})`,code:hi(ai,{FETCH_BY_ID:me,OCT:ye})});return this.device.createRenderPipeline({label:`render_2dgs_${Ce}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Oe,ee,O]}),vertex:{module:Ge,entryPoint:"vs_main"},fragment:{module:Ge,entryPoint:"fs_main",constants:{BETA_KERNEL:X},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=Ve("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ve("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Ce=>{Ce?console.error("[render_2dgs] pipeline create validation error:",Ce.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Oe,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ee,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[fi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:O,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=De,this.betaKernel=X,this.renderSettingsBgl=Oe,this.renderSplatsBgl=ee,this.atlasBgl=O}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(l,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),f=new Uint32Array(l),E=new Float32Array(l);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,E[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureAccResources(l,f){var E;if(this.accResolvePipeline===null){const w=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,C=this.device.createShaderModule({label:"acc16_resolve",code:w});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:C,entryPoint:"vs_main"},fragment:{module:C,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===l&&this.accH===f||((E=this.accTexture)==null||E.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=l,this.accH=f)}setAtlas(l){this.atlas=l??mi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&ts(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=l,ts(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l,this._mipMode))}setFetchById(l){l!==this.fetchById&&(this.fetchById=l,xt(`[render_2dgs] fragment inputs: ${l?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(l){if(l===this.legacyRenderer)return;this.legacyRenderer=l,Vs({legacyPos:l,hypLegacy:l},this.device,this.render_settings_buffer);const f=!l&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),xt(`[render_2dgs] renderer: ${l?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(l){this.atlas.meta.format!==4294967295&&(this._mipMode=l?1:0,ts(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var l;return(((l=this.atlas.meta.mip_bytes)==null?void 0:l.length)??1)>1}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),E=f*Uint32Array.BYTES_PER_ELEMENT;if(E===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[fi].sort_indices_buffer,0,w,0,E),this.device.queue.submit([C.finish()]),await w.mapAsync(GPUMapMode.READ);const B=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(B)),w.unmap()}frame(l,f,E=!0){const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=E&&this.timeQueryEnabled;{l.clearBuffer(this.sort_info_buffer,0,4);const L={label:"cull"};B&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const A=l.beginComputePass(L);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const z=Math.ceil(this.pc.num_points/nc);A.dispatchWorkgroups(z,1,1),A.end()}{const L=l.beginComputePass({label:"calculate indirect dispatch"});L.setPipeline(this.indirectPipeline),L.setBindGroup(0,this.indirectBindGroup),L.dispatchWorkgroups(1,1,1),L.end()}{const L={label:"preprocess"};B&&(L.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const A=l.beginComputePass(L);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let L=0;L<is;L++){const A=L&1,z=this.sort_pipelines.passes[L],$=this.sort_localHistogramBindGroups[A],F=this.sort_scatterBindGroups[A];{const G={label:`upsweep_round${L}`};B&&L==0&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const H=l.beginComputePass(G);H.setPipeline(z.localHistogram),H.setBindGroup(0,$),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const G=l.beginComputePass({label:`prefix_round${L} - l0TileScan`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=l.beginComputePass({label:`prefix_round${L} - l1TileScanOnL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=l.beginComputePass({label:`prefix_round${L} - l1ScanSums`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,Ut,1),G.end()}{const G=l.beginComputePass({label:`prefix_round${L} - addL1ToL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=l.beginComputePass({label:`prefix_round${L} - addL0ToElems`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=l.beginComputePass({label:`prefix_round${L} - computeDigitBase`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,1,1),G.end()}{const G={label:`scatter_round${L}`};B&&L==is-1&&(G.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const H=l.beginComputePass(G);H.setPipeline(z.scatterElements),H.setBindGroup(0,F),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}{let L=f;this.acc16&&(this.ensureAccResources(mt.canvas_size[0],mt.canvas_size[1]),L=this.accView);const A={label:"render",colorAttachments:[{view:L,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,...this.acc16?{}:{endOfPassWriteIndex:C+7}});const z=l.beginRenderPass(A);if(z.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end(),this.acc16){const $={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&($.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const F=l.beginRenderPass($);F.setPipeline(this.accResolvePipeline),F.setBindGroup(0,this.accResolveBindGroup),F.draw(3),F.end()}}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const E=this.device.createCommandEncoder({label:"timestamp resolve encoder"});E.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),E.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([E.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),L=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,A=Array.from({length:w.length},()=>[]);let z=0;for(let te=0;te<B;te++){const K=(L+te)%this.queryCapacityFrames,Z=K*this.queriesPerFrame;let Y=!0;for(let le=0;le<w.length;le++){const[Se,de,ce]=w[le];if(C[Z+ce]===0n||C[Z+de]===0n||C[Z+de]<C[Z+ce]){Y=!1;break}}if(!Y){!f&&K%60===0&&console.debug("[timestamp] frame slot",K,"contains unwritten (0) timestamps, skipped in stats");continue}z++;for(let le=0;le<w.length;le++){const[Se,de,ce]=w[le],xe=Number(C[Z+ce]),ae=Number(C[Z+de]);A[le].push((ae-xe)/1e6)}}if(z===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const $=[];let F=0,G=0,H=0;for(let te=0;te<w.length;te++){const K=w[te][0],Z=A[te];let Y=0;if(K==="Total"){const le=this.allFrameTimes;Y=le.reduce((ce,xe)=>ce+xe,0)/le.length;const Se=[...le].sort((ce,xe)=>ce-xe);F=Se[Math.floor(Se.length*.99)]||0;const de=le.reduce((ce,xe)=>ce+Math.pow(xe-Y,2),0)/le.length;G=Math.sqrt(de),H=Y}else Y=Z.reduce((le,Se)=>le+Se,0)/Z.length;$.push([K,Y])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries($);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const J=`[TIMESTAMP - ${this.constructor.name}]
`+$.map(([te,K])=>`${te}: ${K.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${G.toFixed(3)}ms
Total AVG: ${H.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(J),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const te=`Stage,ms
`,K=$.map(([le,Se])=>`${le},${Se.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(te+K),Y=document.createElement("a");Y.href=Z,Y.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(Y),Y.click(),Y.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(J)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:sc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,E=l?l.height:1;tc({width:f,height:E,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),Ci(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Nn(this.pc.num_points*ic),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Nn(this.pc.num_points*oc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,E=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${E}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function pc(o,l){return 2*Math.atan(l/(2*o))}function hc(o,l,f,E){const w=Math.tan(E/2),C=Math.tan(f/2),B=w*o,L=-B,A=C*o,z=-A,$=ft.create();return $[0]=2*o/(A-z),$[5]=-2*o/(B-L),$[2]=(A+z)/(A-z),$[6]=(B+L)/(B-L),$[14]=1,$[10]=l/(l-o),$[11]=-(l*o)/(l-o),ft.transpose($,$),$}async function fc(o){xt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return xt(`loaded cameras count: ${f.length}`),f.map(E=>{const w=R.clone(E.position),C=Ct.create(...E.rotation.flat()),B=C[0],L=C[4],A=C[8],z=C[1],$=C[5],F=C[9],G=C[2],H=C[6],oe=C[10];B*($*oe-F*H)-L*(z*oe-F*G)+A*(z*H-$*G)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const J=ft.fromMat3(C);return{position:w,rotation:J,img_name:E.img_name,id:E.id}})}const _c=4*2,mc=4*16,Ei=4*mc+2*_c;function vc(o){return o.createBuffer({label:"camera uniform",size:Ei,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const cn=new Float32Array(Ei/Float32Array.BYTES_PER_ELEMENT),os=class os{constructor(l,f){N(this,"_renderSize",null);N(this,"uniform_buffer");N(this,"position",R.create());N(this,"rotation",ft.create());N(this,"fovY",45/180*Math.PI);N(this,"fovX");N(this,"focal",ti.create());N(this,"viewport",ti.create());N(this,"view_matrix",ft.identity());N(this,"view_inv_matrix",ft.identity());N(this,"proj_matrix",ft.identity());N(this,"proj_inv_matrix",ft.identity());N(this,"_negPos",R.create());N(this,"look",R.create(0,0,1));N(this,"up",R.create(0,1,0));N(this,"right",R.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=vc(f),this.on_update_canvas()}setRenderSize(l,f){this._renderSize=[l,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const l=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,E=.5*f/Math.tan(this.fovY*.5);this.focal[0]=E,this.focal[1]=E,this.fovX=pc(E,l),this.viewport[0]=l,this.viewport[1]=f,this.proj_matrix=hc(.01,100,this.fovX,this.fovY),ft.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ft.copy(this.rotation,this.view_matrix),ft.translate(this.view_matrix,this._negPos,this.view_matrix),ft.inverse(this.view_matrix,this.view_inv_matrix),R.transformMat4Upper3x3(os.Z_AXIS,this.view_inv_matrix,this.look),R.normalize(this.look,this.look),R.cross(this.up,this.look,this.right),R.normalize(this.right,this.right);let l=0;cn.set(this.view_matrix,l),l+=16,cn.set(this.view_inv_matrix,l),l+=16,cn.set(this.proj_matrix,l),l+=16,cn.set(this.proj_inv_matrix,l),l+=16,cn.set(this.viewport,l),l+=2,cn.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,cn)}set_preset(l){R.copy(l.position,this.position),ft.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};N(os,"Z_AXIS",R.create(0,0,1));let Os=os;const bc=R.create(1,0,0),gc=R.create(0,1,0),wc=R.create(0,0,1);function xc(o,l){const f=o[0],E=o[4],w=o[8],C=o[1],B=o[5],L=o[9],A=o[2],z=o[6],$=o[10],F=f+B+$;let G,H,oe,j;if(F>0){const J=.5/Math.sqrt(F+1);G=.25/J,H=(z-L)*J,oe=(w-A)*J,j=(C-E)*J}else if(f>B&&f>$){const J=2*Math.sqrt(1+f-B-$);G=(z-L)/J,H=.25*J,oe=(E+C)/J,j=(w+A)/J}else if(B>$){const J=2*Math.sqrt(1+B-f-$);G=(w-A)/J,H=(E+C)/J,oe=.25*J,j=(L+z)/J}else{const J=2*Math.sqrt(1+$-f-B);G=(C-E)/J,H=(w+A)/J,oe=(L+z)/J,j=.25*J}return l[0]=H,l[1]=oe,l[2]=j,l[3]=G,l}class yc{constructor(l){N(this,"element");N(this,"enabled",!0);N(this,"center",R.create(0,0,0));N(this,"up",R.create(0,1,0));N(this,"rotation",[0,0]);N(this,"shift",[0,0]);N(this,"scroll",0);N(this,"speed",.1);N(this,"sensitivity",.08);N(this,"leftPressed",!1);N(this,"rightPressed",!1);N(this,"leftDragPans",!1);N(this,"lastX",0);N(this,"lastY",0);N(this,"touches",new Map);N(this,"lastTouchCenter",null);N(this,"lastPinchDistance",null);N(this,"lastTwoFingerAngle",null);N(this,"lastTouchCount",0);N(this,"roll",0);N(this,"_dir",R.create());N(this,"_right",R.create());N(this,"_upCam",R.create());N(this,"_scratch",R.create());N(this,"_qY",pt.create());N(this,"_qX",pt.create());N(this,"_qRot",pt.create());N(this,"_qZ",pt.create());N(this,"_qLocal",pt.create());N(this,"_qWorldToCam",pt.create());N(this,"_scratchMat3",Ct.create());N(this,"bboxMin",null);N(this,"bboxMax",null);N(this,"anchor",R.create(0,0,0));N(this,"downCallback",l=>{var f,E,w,C;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(E=(f=l.target)==null?void 0:f.setPointerCapture)==null||E.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(C=(w=l.target)==null?void 0:w.setPointerCapture)==null||C.call(w,l.pointerId),l.preventDefault())}});N(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,E=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=E):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=E)});N(this,"upCallback",l=>{var f,E,w,C;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(E=(f=l.target)==null?void 0:f.releasePointerCapture)==null||E.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(w=l.target)==null?void 0:w.releasePointerCapture)==null||C.call(w,l.pointerId),l.preventDefault()});N(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){R.copy(l,this.center),R.copy(l,this.anchor)}setOrbitPivot(l){R.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;R.set(f[2],f[6],f[10],this._dir),R.normalize(this._dir,this._dir),R.scale(this._dir,l,this._dir),R.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(R.subtract(this.center,l.position,this._scratch),R.length(this._scratch)<1e-6)return;R.normalize(this._scratch,this._scratch),R.cross(this.up,this._scratch,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right),R.normalize(this._right,this._right),R.cross(this._scratch,this._right,this._upCam),R.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=R.create(l[0],l[1],l[2]),this.bboxMax=R.create(f[0],f[1],f[2]);const E=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,C=(l[2]+f[2])*.5;R.set(E,w,C,this.center),R.set(E,w,C,this.anchor)}resetToCamera(){const l=this.camera.rotation;R.set(l[2],l[6],l[10],this._dir),R.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let E=-1/0,w=1/0,C=!1;for(let B=0;B<3;B++){const L=this._dir[B],A=this.bboxMin[B]-this.camera.position[B],z=this.bboxMax[B]-this.camera.position[B];if(Math.abs(L)>1e-8){const $=A/L,F=z/L;E=Math.max(E,Math.min($,F)),w=Math.min(w,Math.max($,F))}else if(A>0||z<0){C=!0;break}}!C&&E<=w&&w>0&&(f=(Math.max(E,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){R.subtract(this.anchor,this.camera.position,this._scratch);const E=R.dot(this._scratch,this._dir);f=E>.001?E:R.length(this._scratch)}f=Math.max(.1,f),R.scale(this._dir,f,this._dir),R.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const E=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=E*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),E=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,B=f[1].y-f[0].y,L=Math.hypot(C,B),A=Math.atan2(B,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const z=E-this.lastTouchCenter[0],$=w-this.lastTouchCenter[1],F=Math.hypot(z,$),G=Math.abs(L-this.lastPinchDistance);let H=A-this.lastTwoFingerAngle;H>Math.PI&&(H-=2*Math.PI),H<-Math.PI&&(H+=2*Math.PI),F>.5&&(this.shift[1]-=z,this.shift[0]+=$),G>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(L/this.lastPinchDistance)*10),Math.abs(H)>.0087&&(this.roll+=H)}this.lastTouchCenter=[E,w],this.lastPinchDistance=L,this.lastTwoFingerAngle=A}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const J=f.rotation;this.up[0]=J[1],this.up[1]=J[5],this.up[2]=J[9],R.length(this.up)>1e-6?R.normalize(this.up,this.up):R.set(0,1,0,this.up)}let E=0,w=!1;Math.abs(this.roll)>1e-4&&(E=this.roll,this.roll=0,w=!0),R.subtract(f.position,this.center,this._dir);let C=R.length(this._dir);C<1e-6&&(C=1e-6);const B=Math.exp(Math.log(C)+this.scroll*l*10*this.speed);R.scale(this._dir,B/C,this._dir),C=B;const L=f.rotation;this._right[0]=L[0],this._right[1]=L[4],this._right[2]=L[8],R.normalize(this._right,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right);const A=R.create(L[1],L[5],L[9]);R.normalize(A,A),R.length(A)<1e-6&&R.set(0,1,0,A);const z=l*this.speed*.1*C,$=this.shift[1]*z,F=-this.shift[0]*z;R.scale(this._right,$,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position),R.scale(A,F,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position);const G=this.rotation[0]*l*this.sensitivity,H=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(H)>1e-5||w){const J=f.rotation;xc(J,this._qWorldToCam),pt.fromAxisAngle(bc,-H,this._qX),pt.fromAxisAngle(gc,-G,this._qY),pt.multiply(this._qX,this._qY,this._qLocal),w&&(pt.fromAxisAngle(wc,1*E,this._qZ),pt.multiply(this._qZ,this._qLocal,this._qLocal)),pt.normalize(this._qLocal,this._qLocal),pt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),pt.normalize(this._qWorldToCam,this._qWorldToCam),Ct.fromQuat(this._qWorldToCam,this._scratchMat3),ft.fromMat3(this._scratchMat3,f.rotation);const te=f.rotation,K=te[2],Z=te[6],Y=te[10];f.position[0]=this.center[0]-K*C,f.position[1]=this.center[1]-Z*C,f.position[2]=this.center[2]-Y*C,this.up[0]=te[1],this.up[1]=te[5],this.up[2]=te[9],R.normalize(this.up,this.up)}else R.add(this.center,this._dir,f.position);f.update_buffer();const j=Math.pow(.8,l*60);this.rotation[0]*=j,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=j,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=j,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=j,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=j,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ki(o){const l=R.create();for(const f of o)R.add(l,f,l);return R.scale(l,1/Math.max(o.length,1),l)}function Mi(o,l){const f=Ct.create();Ct.inverse(o,f);const E=R.create();return E[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],E[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],E[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],E}function Pc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],E=(A,z)=>l[A*3+z],w=(A,z,$)=>{l[A*3+z]=$},C=(A,z)=>f[A*3+z],B=(A,z,$)=>{f[A*3+z]=$};for(let A=0;A<30;A++){let z=0,$=1,F=Math.abs(E(0,1));if(Math.abs(E(0,2))>F&&(z=0,$=2,F=Math.abs(E(0,2))),Math.abs(E(1,2))>F&&(z=1,$=2,F=Math.abs(E(1,2))),F<1e-12)break;const G=E(z,z),H=E($,$),oe=E(z,$);let j;Math.abs(G-H)<1e-30?j=Math.PI/4*Math.sign(oe):j=.5*Math.atan2(2*oe,G-H);const J=Math.cos(j),te=Math.sin(j);for(let K=0;K<3;K++){const Z=E(K,z),Y=E(K,$);w(K,z,J*Z+te*Y),w(K,$,-te*Z+J*Y)}for(let K=0;K<3;K++){const Z=E(z,K),Y=E($,K);w(z,K,J*Z+te*Y),w($,K,-te*Z+J*Y)}for(let K=0;K<3;K++){const Z=C(K,z),Y=C(K,$);B(K,z,J*Z+te*Y),B(K,$,-te*Z+J*Y)}}const L=[];for(let A=0;A<3;A++)L.push({val:E(A,A),vec:R.create(C(0,A),C(1,A),C(2,A))});return L.sort((A,z)=>z.val-A.val),{vals:[L[0].val,L[1].val,L[2].val],vecs:[L[0].vec,L[1].vec,L[2].vec]}}function Sc(o,l){const f=ki(o);let E=0,w=0,C=0,B=0,L=0,A=0;for(const oe of o){const j=oe[0]-f[0],J=oe[1]-f[1],te=oe[2]-f[2];E+=j*j,w+=j*J,C+=j*te,B+=J*J,L+=J*te,A+=te*te}const z=[E,w,C,w,B,L,C,L,A],{vecs:$}=Pc(z);let F=$[0],G=$[1],H=$[2];return R.dot(H,l)<0&&(R.scale(H,-1,H),R.scale(G,-1,G)),{centroid:f,normal:H,u:F,v:G}}function Cc(o){let l=0,f=0,E=0,w=0,C=0,B=0,L=0,A=0,z=0;for(const[J,te]of o){const K=-2*J,Z=-2*te,Y=1,le=-(J*J+te*te);l+=K*K,f+=K*Z,E+=K*Y,w+=Z*Z,C+=Z*Y,B+=Y*Y,L+=K*le,A+=Z*le,z+=Y*le}const $=Ct.create(l,f,E,f,w,C,E,C,B),F=Mi($,R.create(L,A,z)),G=F[0],H=F[1],oe=F[2],j=G*G+H*H-oe;return{center:[G,H],radius:Math.sqrt(Math.max(j,1e-12))}}function Ec(o,l){let f=0,E=0,w=0,C=0,B=0,L=0,A=0,z=0,$=0;for(let G=0;G<o.length;G++){const H=o[G],oe=R.normalize(l[G],R.create()),j=1-oe[0]*oe[0],J=-oe[0]*oe[1],te=-oe[0]*oe[2],K=1-oe[1]*oe[1],Z=-oe[1]*oe[2],Y=1-oe[2]*oe[2];f+=j,E+=J,w+=te,C+=K,B+=Z,L+=Y,A+=j*H[0]+J*H[1]+te*H[2],z+=J*H[0]+K*H[1]+Z*H[2],$+=te*H[0]+Z*H[1]+Y*H[2]}const F=Ct.create(f,E,w,E,C,B,w,B,L);return Mi(F,R.create(A,z,$))}function Bi(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,E=l.radiusScale??1,w=l.alignFirst??!0,C=(l.direction??"ccw")==="ccw"?1:-1,B=o.map(ce=>R.clone(ce.position)),L=o.map(ce=>{const xe=ce.rotation;return R.create(xe[8],xe[9],xe[10])}),A=o.map(ce=>{const xe=ce.rotation;return R.create(xe[4],xe[5],xe[6])}),z=ki(A),$=R.normalize(R.scale(z,-1,R.create())),{centroid:F,normal:G,u:H,v:oe}=Sc(B,$),j=B.map(ce=>{const xe=R.sub(ce,F,R.create());return[R.dot(xe,H),R.dot(xe,oe)]}),{center:J,radius:te}=Cc(j),K=te*E,Z=R.add(F,R.add(R.scale(H,J[0],R.create()),R.scale(oe,J[1],R.create()),R.create()),R.create()),Y=Ec(B,L),le=K*Math.tan(f*Math.PI/180),Se=R.sub(Y,R.scale(G,le,R.create()),R.create());let de=0;if(w){const ce=R.sub(B[0],Z,R.create());de=Math.atan2(R.dot(ce,oe),R.dot(ce,H))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${K.toFixed(2)}, tilt=${f}°, normal=[${G[0].toFixed(2)}, ${G[1].toFixed(2)}, ${G[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:Z,radius:K,normal:G,u:H,v:oe,lookAt:Se,startPhase:de,direction:C}}function Ti(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,E=Math.cos(f),w=Math.sin(f),C=R.add(o.center,R.add(R.scale(o.u,o.radius*E,R.create()),R.scale(o.v,o.radius*w,R.create()),R.create()),R.create()),B=R.normalize(R.sub(o.lookAt,C,R.create())),L=R.cross(B,o.normal,R.create());R.length(L)<1e-6&&R.copy(o.u,L),R.normalize(L,L);const A=R.cross(B,L,R.create());R.normalize(A,A);const z=ft.create();return z[0]=L[0],z[1]=A[0],z[2]=B[0],z[3]=0,z[4]=L[1],z[5]=A[1],z[6]=B[1],z[7]=0,z[8]=L[2],z[9]=A[2],z[10]=B[2],z[11]=0,z[12]=0,z[13]=0,z[14]=0,z[15]=1,{position:C,rotation:z,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function kc(o,l={}){const f=Bi(o,l);if(!f)return[];const E=l.numViews??120;return Array.from({length:E},(w,C)=>({...Ti(f,C/E),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}const Ai="BITYMI01",Mc=0,Bc=1,Tc=2,Ac=3,Dc=4,Ic=5;function Vt(o){const l=(o&32768)>>15,f=(o&31744)>>10,E=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(E/1024):f===31?E?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+E/1024)}function Fs(o,l,f,E,w,C,B,L,A,z=.5){const $=A?A.length:B.length/8,F=[],G=[];for(let j=0;j<$;j++){const te=(A?A[j]:j)*8,K=B[te]-o,Z=B[te+1]-l,Y=B[te+2]-f,le=K*E+Z*w+Y*C;if(le<=0||!(L[te+7]>>>16&1))continue;const Se=L[te+4],de=Vt(Se&65535),ce=Vt(Se>>>16&65535),xe=3*Math.max(de,ce),ae=K-le*E,pe=Z-le*w,be=Y-le*C;if(ae*ae+pe*pe+be*be>xe*xe)continue;const De=Vt(L[te+3]&65535);if(De<1/255)continue;const Oe=L[te+5],Q=L[te+6];let ee=Vt(Oe&65535),O=Vt(Oe>>>16&65535),X=Vt(Q&65535),Ve=Vt(Q>>>16&65535);const Ce=Math.hypot(ee,O,X,Ve)||1;ee/=Ce,O/=Ce,X/=Ce,Ve/=Ce;const me=1-2*(X*X+Ve*Ve),ye=2*(O*X+ee*Ve),Ge=2*(O*Ve-ee*X),ke=2*(O*X-ee*Ve),fe=1-2*(O*O+Ve*Ve),Re=2*(X*Ve+ee*O),M=2*(O*Ve+ee*X),I=2*(X*Ve-ee*O),b=1-2*(O*O+X*X),i=E*M+w*I+C*b;if(Math.abs(i)<1e-6)continue;const p=(K*M+Z*I+Y*b)/i;if(!(p>0))continue;const u=p*E-K,v=p*w-Z,x=p*C-Y,k=(u*me+v*ye+x*Ge)/(de||1e-6),P=(u*ke+v*fe+x*Re)/(ce||1e-6),r=k*k+P*P;if(r>9)continue;const m=Math.min(.99,De*Math.exp(-.5*r));m<1/255||(F.push(p),G.push(m))}if(F.length===0)return null;const H=F.map((j,J)=>J).sort((j,J)=>F[j]-F[J]);let oe=1;for(const j of H)if(oe*=1-G[j],oe<z)return F[j];return null}function Ns(o,l,f){const E=(o-f.viewport[0]*.5)/f.focal[0],w=-((l-f.viewport[1]*.5)/f.focal[1]),C=f.rotation;let B=E*C[0]+w*C[1]+C[2],L=E*C[4]+w*C[5]+C[6],A=E*C[8]+w*C[9]+C[10];const z=Math.hypot(B,L,A)||1;return[B/z,L/z,A/z]}function Lc(o,l,f,E,w,C){const[B,L,A]=Ns(o,l,E),z=E.position[0],$=E.position[1],F=E.position[2],G=new Uint32Array(w.buffer,w.byteOffset,w.length);let H=Fs(z,$,F,B,L,A,w,G,null,.5);return H===null&&(H=Fs(z,$,F,B,L,A,w,G,null,.8)),H===null?null:[z+H*B,$+H*L,F+H*A]}function zc(o,l){const f=o.viewport[0],E=o.viewport[1],w=new Uint32Array(l.buffer,l.byteOffset,l.length),C=o.position[0],B=o.position[1],L=o.position[2],[A,z,$]=Ns(f*.5,E*.5,o),F=.06*Math.max(f,E),G=(F+2)/o.focal[0],H=l.length/8,oe=[];for(let K=0;K<H;K++){const Z=K*8,Y=l[Z]-C,le=l[Z+1]-B,Se=l[Z+2]-L,de=Y*A+le*z+Se*$;if(de<=0)continue;const ce=w[Z+4],xe=3*Math.max(Vt(ce&65535),Vt(ce>>>16&65535)),ae=Y-de*A,pe=le-de*z,be=Se-de*$,De=de*G+xe;ae*ae+pe*pe+be*be<=De*De&&oe.push(K)}if(oe.length===0)return null;const j=Int32Array.from(oe),J=[],te=5;for(let K=0;K<te;K++)for(let Z=0;Z<te;Z++){const Y=f*.5+(Z-(te-1)/2)/((te-1)/2)*F,le=E*.5+(K-(te-1)/2)/((te-1)/2)*F,[Se,de,ce]=Ns(Y,le,o),xe=Fs(C,B,L,Se,de,ce,l,w,j,.5);xe!==null&&J.push(xe*(Se*A+de*z+ce*$))}return J.length<3?null:(J.sort((K,Z)=>K-Z),J[J.length>>1])}function Di(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==Ai)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const E=new DataView(o),w=E.getUint32(8,!0),C=12,B=20;let L=null,A=null,z=null;for(let $=0;$<w;$++){const F=C+$*B,G=E.getUint32(F+0,!0),H=Number(E.getBigUint64(F+4,!0)),oe=Number(E.getBigUint64(F+12,!0)),j=l.slice(H,H+oe).buffer;G===Mc||G===Bc||G===Ic?L=j:G===Tc?A=j:(G===Ac||G===Dc)&&(z=j)}if(L===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:L,camerasBuffer:A,atlasBuffer:z}}async function vi(o,l){var B;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const E=(()=>{const L=f.headers.get("content-length");return L&&parseInt(L,10)||void 0})(),w=(B=f.body)==null?void 0:B.getReader();let C;if(!w)C=await f.arrayBuffer(),l&&l(C.byteLength,E,0);else{const L=[];let A=0,z=performance.now(),$=0;for(;;){const{done:H,value:oe}=await w.read();if(H)break;L.push(oe),A+=oe.byteLength;const j=performance.now();if(j-z>=150&&l){const J=(A-$)/((j-z)/1e3);l(A,E,J),z=j,$=A}}const F=new Uint8Array(A);let G=0;for(const H of L)F.set(H,G),G+=H.byteLength;C=F.buffer,l&&l(A,E,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===Ai?{bundle:Di(C),rawPly:null}:{bundle:null,rawPly:C}}function Rc(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var E;return l(((E=f.files)==null?void 0:E[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Gc(o,l,f){const E=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),C=document.getElementById("quick-links");w&&(w.onclick=async()=>{const z=await Rc(".ply,.bitymi");if(z)if(E&&(E.style.display="none"),z.name.toLowerCase().endsWith(".bitymi")){const $=await z.arrayBuffer(),{pcBuffer:F}=Di($),G=new File([F],z.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),H=await zs(G,o);l(H)}else{const $=await zs(z,o);l($)}}),C&&(C.innerHTML="");const B=new URLSearchParams(window.location.search),L=B.get("bundle")??B.get("model_url"),A=B.get("camera_url");L&&(E&&(E.style.display="none"),f(L,A))}async function Uc(o,l,f,E){const w=new Os(o,f),C=new yc(w);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const L=typeof window<"u"&&window.parent!==window,A={pos:new Float32Array(3),rot:new Float32Array(16)};if(L){window.addEventListener("message",Q=>{const ee=Q.data;if(!(!ee||ee.type!=="halloumi_sync_pose")&&!(!Array.isArray(ee.position)||ee.position.length!==3)&&!(!Array.isArray(ee.rotation)||ee.rotation.length!==16)){for(let O=0;O<3;O++)w.position[O]=ee.position[O];for(let O=0;O<16;O++)w.rotation[O]=ee.rotation[O];w.update_buffer(),C.resetToCamera();for(let O=0;O<3;O++)A.pos[O]=w.position[O];for(let O=0;O<16;O++)A.rot[O]=w.rotation[O]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const z=()=>{if(!L)return;const Q=w.position,ee=w.rotation;let O=!1;for(let X=0;X<3;X++)if(Math.abs(Q[X]-A.pos[X])>1e-6){O=!0;break}if(!O){for(let X=0;X<16;X++)if(Math.abs(ee[X]-A.rot[X])>1e-6){O=!0;break}}if(O){for(let X=0;X<3;X++)A.pos[X]=Q[X];for(let X=0;X<16;X++)A.rot[X]=ee[X];try{window.parent.postMessage({type:"halloumi_camera_state",position:[Q[0],Q[1],Q[2]],rotation:Array.from(ee)},"*")}catch{}}},$="rgba8unorm";l.configure({device:f,format:$,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let F=null;const G=()=>{w.on_update_canvas(),F!==null&&Sn(o.width,o.height,f,F.render_settings_buffer)};new ResizeObserver(()=>{const Q=Math.max(.25,pe.render_scale),ee=Math.max(1,Math.ceil(Q*o.clientWidth)),O=Math.max(1,Math.ceil(Q*o.clientHeight));o.width===ee&&o.height===O||(o.width=ee,o.height=O,G())}).observe(o);let oe=0,j=0;const J=()=>{(o.width!==oe||o.height!==j)&&(oe=o.width,j=o.height,G())},te=new URLSearchParams(window.location.search);let Z=te.get("animation")==="1";C.enabled=!Z;const Y=te.get("camera_url"),le=te.get("bfc"),Se=le==="1"||le==="true",de=te.get("bfc_cos"),ce=de!==null?Number(de):NaN,xe=Number.isFinite(ce)?ce:2,ae=Math.max(1,window.devicePixelRatio||1),pe={gaussian_scaling:1,sh_bias:.5,animate:Z,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Se,bfc_cos:xe,legacy_renderer:!1,fetch_by_id:!0,render_scale:1},be=new Kl.Pane({title:"Config",expanded:!0});be.addInput(pe,"animate",{label:"Animate"}).on("change",Q=>{const ee=Z;Z=Q.value,C.enabled=!Q.value,!ee&&Z&&De.value&&De.value.onAnimateStart(),ee&&!Z&&De.value&&De.value.onAnimateStop()}),be.addInput(pe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const De={value:null};Gc(f,Q=>Oe(Q,[],null),async(Q,ee)=>{let O=ee??Y,X,Ve=null;const Ce=Q.toLowerCase();if(Ce.endsWith(".bitymi")||Ce.includes(".bitymi?")){qs("downloading bundle ...");try{const{bundle:fe}=await vi(Q,(M,I,b)=>{const i=M/1048576,p=I?I/(1024*1024):void 0,u=b/(1024*1024),v=I?Math.min(99,Math.floor(M/I*100)):void 0,x=p?`total ${p.toFixed(1)} MB`:"total -- MB",k=p&&v!==void 0?`${i.toFixed(1)} MB downloaded (${v}%)`:`${i.toFixed(1)} MB downloaded`,P=`${u.toFixed(2)} MB/s`;Ot(`downloading bundle ...
${x}, ${k}
${P}`)});if(!fe)throw new Error("Expected a .bitymi bundle");Ot("parsing PLY ...");const Re=new File([fe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(X=await zs(Re,f),!O&&fe.camerasBuffer&&(O=URL.createObjectURL(new Blob([fe.camerasBuffer],{type:"application/json"}))),fe.atlasBuffer){const M=fe.atlasBuffer.byteLength/1048576;Ot(`uploading atlas ...
${M.toFixed(1)} MB BC7`);try{const I=ri(fe.atlasBuffer);Ve=ii(f,I,!0)}catch(I){console.warn("[atlas] failed to parse/upload atlas:",I)}}}catch(fe){throw On(),fe}}else X=await Wl(Q,f);let me=null,ye="";const Ge=te.get("atlas2");if(Ge)try{const{bundle:fe}=await vi(Ge,(Re,M)=>{Ot(`downloading second atlas ...
${(Re/1048576).toFixed(1)}${M?` / ${(M/1048576).toFixed(1)}`:""} MB`)});if(!(fe!=null&&fe.atlasBuffer))throw new Error("second bundle has no atlas chunk");Ot("uploading second atlas ..."),me=ii(f,ri(fe.atlasBuffer),!0),me||(ye="second atlas: format unsupported on this device")}catch(fe){console.warn("[atlas2] failed:",fe),ye=`second atlas failed: ${fe}`}const ke=O?await fc(O):[];ke.length>0&&w.set_preset(ke[0]),Oe(X,ke,Ve,me,ye)});function Oe(Q,ee=[],O=null,X=null,Ve=""){const Ce=[(Q.bbox.min[0]+Q.bbox.max[0])/2,(Q.bbox.min[1]+Q.bbox.max[1])/2,(Q.bbox.min[2]+Q.bbox.max[2])/2];C.setBbox(Q.bbox.min,Q.bbox.max),.5*Math.sqrt((Q.bbox.max[0]-Q.bbox.min[0])**2+(Q.bbox.max[1]-Q.bbox.min[1])**2+(Q.bbox.max[2]-Q.bbox.min[2])**2);function me(V,W){const ie=Lc(V,W,o,w,Q.surfel_data);ie&&(C.setOrbitPivot(ie),console.log(`[pick] orbit pivot → (${ie[0].toFixed(3)}, ${ie[1].toFixed(3)}, ${ie[2].toFixed(3)})`))}function ye(){const V=zc(w,Q.surfel_data);if(V!==null&&V>.001){C.setOrbitDepth(V);return}const W=w.rotation,ie=W[2],Pe=W[6],Me=W[10],he=(Q.centroid[0]-w.position[0])*ie+(Q.centroid[1]-w.position[1])*Pe+(Q.centroid[2]-w.position[2])*Me;he>.001&&C.setOrbitDepth(he)}if(ee.length===0){const V=Q.bbox.max[0]-Q.bbox.min[0],W=Q.bbox.max[1]-Q.bbox.min[1],ie=Q.bbox.max[2]-Q.bbox.min[2],Me=.5*Math.sqrt(V*V+W*W+ie*ie)*.5;R.set(Ce[0]-Me,Ce[1]-Me,Ce[2]-Me,w.position);const he=R.create(Me,Me,Me);R.normalize(he,he);const _e=R.create(0,1,0),Be=R.create();R.cross(_e,he,Be),R.normalize(Be,Be);const Fe=R.create();R.cross(he,Be,Fe);const ct=Ct.create(Be[0],Fe[0],he[0],Be[1],Fe[1],he[1],Be[2],Fe[2],he[2]);ft.fromMat3(ct,w.rotation),w.update_buffer()}C.setCenter(R.create(Q.centroid[0],Q.centroid[1],Q.centroid[2]));const Ge=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),ke="halloumi.fetch_by_id";let fe=null;try{const V=localStorage.getItem(ke);(V==="0"||V==="1")&&(fe=V==="1")}catch{}const Re=te.get("byid"),M={fetchById:Re!==null?Re==="1":fe!==null?fe:!Ge,octBound:te.get("oct")==="1",acc16:te.get("acc16")==="1"},I=new dc(Q,f,$,w.uniform_buffer,E,O,M);Vs({hypLegacy:te.get("hyp_legacy")==="1"},f,I.render_settings_buffer),pe.legacy_renderer=te.get("legacy")==="1",pe.legacy_renderer&&I.setLegacyRenderer(!0),pe.fetch_by_id=M.fetchById,console.log(`[render_2dgs] fetch_by_id=${M.fetchById} (source: ${Re!==null?"?byid":fe!==null?"remembered":`handheld=${Ge}`})`),F=I,Sn(o.width,o.height,f,I.render_settings_buffer),pe.atlas_enabled=O!==null;{const V=Q.surfel_data,W=V.length/8;let ie=0,Pe=0,Me=0;for(let _e=0;_e<W;_e++)ie+=V[_e*8],Pe+=V[_e*8+1],Me+=V[_e*8+2];const he=W>0?[ie/W,Pe/W,Me/W]:[0,0,0];I.setBfcParams(pe.bfc_cos,he),Vs({bfc:pe.bfc},f,I.render_settings_buffer),console.log(`[bfc] flag=${pe.bfc} cos=${pe.bfc_cos} centroid=(${he[0].toFixed(3)}, ${he[1].toFixed(3)}, ${he[2].toFixed(3)})`)}let b=!1;const i=(()=>{if(O!==null)return`${O.meta.format===2?"BC7":O.meta.format===3?"ASTC 4×4":O.meta.format===7?"BC7 codebook gather (typeD)":`format=${O.meta.format}`} ${O.meta.width}×${O.meta.height}, ${O.meta.n_layers} layers`;const V=f.features.has("texture-compression-bc"),W=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(V?["BC7"]:[]).concat(W?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",i),pi(Q.sh_bias,f,I.render_settings_buffer),di(pe.gaussian_scaling,f,I.render_settings_buffer),pe.sh_bias=Q.sh_bias;const p=Q.num_points.toLocaleString(),u={stats:`${p} surfels · -- fps`};be.addMonitor(u,"stats",{label:"Stats",interval:200});const v=.4,x=3,k=.3;let P=null,r=0,m=0;const d=pt.create(),h=Ct.create();let a=ee.length>0?0:-1;const _={view:ee.length>0?`${a+1} / ${ee.length}: ${ee[a].img_name??a}`:"— no presets —"},y=document.createElement("span");function g(V){const W=Ct.create(V[0],V[1],V[2],V[4],V[5],V[6],V[8],V[9],V[10]);return pt.fromMat(W)}function D(V,W){P={fromPos:R.clone(w.position),toPos:R.clone(V.position),fromQuat:pt.normalize(g(w.rotation)),toQuat:pt.normalize(g(V.rotation)),target:V,t:0,duration:Math.max(.01,W)}}const U=(V,W=!0)=>{if(ee.length===0)return;a=(V%ee.length+ee.length)%ee.length;const ie=ee[a];W?D(ie,v):(w.set_preset(ie),C.resetToCamera(),ye()),_.view=`${a+1} / ${ee.length}: ${ee[a].img_name??a}`,y.textContent=_.view};if(ee.length>0){const V=be.addSeparator(),W=document.createElement("div");W.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ie=(Me,he,_e)=>{const Be=document.createElement("button");return Be.className="tp-btnv_b",Be.textContent=Me,Be.title=he,Be.style.cssText="flex:0 0 34px;height:24px;padding:0;",Be.addEventListener("click",_e),Be};y.textContent=_.view,y.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",W.appendChild(ie("◀","previous view (←)",()=>U(a-1))),W.appendChild(y),W.appendChild(ie("▶","next view (→)",()=>U(a+1))),(be.element.querySelector(".tp-rotv_c")??be.element).insertBefore(W,V.element),V.dispose()}const q=ee.length>0?Bi(ee,{tiltDownDeg:15,alignFirst:!0}):null,ue=q?kc(ee,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let se=0;const re=12;De.value={onAnimateStart:()=>{se=0},onAnimateStop:()=>{C.resetToCamera(),ye()}},be.addInput(pe,"render_scale",{label:"Render scale",min:.25,max:ae,step:.25}).on("change",V=>{const W=Math.max(.25,V.value),ie=Math.max(1,Math.ceil(W*o.clientWidth)),Pe=Math.max(1,Math.ceil(W*o.clientHeight));(o.width!==ie||o.height!==Pe)&&(o.width=ie,o.height=Pe,G())}),be.addInput(pe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",V=>di(V.value,f,I.render_settings_buffer)),be.addInput(pe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",V=>pi(V.value,f,I.render_settings_buffer)),be.addInput(pe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",V=>{I.bgColor=[V.value.r,V.value.g,V.value.b,V.value.a]});const ge=V=>V===null?"":V.meta.format===3||V.meta.format===8||V.meta.format===10?" (ASTC)":" (BC7)";let Ee=ge(O);const ve=be.addInput(pe,"atlas_enabled",{label:`Texture${Ee}`}).on("change",V=>{I.setAtlasEnabled(V.value),Ie()}),we=document.createElement("button");we.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Ie=()=>{we.textContent=`Texture${Ee}: ${pe.atlas_enabled?"ON":"OFF"}`,we.style.borderColor=pe.atlas_enabled?"#f0b060":"#444",we.style.color=pe.atlas_enabled?"#f0b060":"#bbb"},Le=()=>{pe.atlas_enabled=!pe.atlas_enabled,I.setAtlasEnabled(pe.atlas_enabled),ve.refresh(),Ie()};if(we.title="toggle the baked texture (T)",we.addEventListener("click",Le),O&&document.body.appendChild(we),Ie(),O&&(X||Ve))if(X){const V={};V[`A${ge(O)} · bundle`]="A",V[`B${ge(X)} · atlas2`]="B";const W={atlas:"A"};be.addInput(W,"atlas",{label:"Atlas source",options:V}).on("change",ie=>{const Pe=ie.value==="B"?X:O;I.setAtlas(Pe),Ee=ge(Pe),ve.label=`Texture${Ee}`,Ie(),console.log(`[atlas2] now sampling ${ie.value}${Ee}`)})}else{const V={note:Ve};be.addMonitor(V,"note",{label:"Atlas B",multiline:!0,lineCount:2})}I.hasMips&&(I.setMipMode(pe.mips),be.addInput(pe,"mips",{label:"Mips (trilinear)"}).on("change",V=>I.setMipMode(V.value))),be.addInput(pe,"legacy_renderer",{label:"Legacy renderer"}).on("change",V=>I.setLegacyRenderer(V.value)),be.addInput(pe,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",V=>{I.setFetchById(V.value);try{localStorage.setItem("halloumi.fetch_by_id",V.value?"1":"0")}catch{}});const qe={aspect:"canvas"},He=be.addFolder({title:"📸 Screenshot",expanded:!1});He.addInput(qe,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const We={s:"pick a size to capture"};He.addMonitor(We,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Je=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Ye=null;function at(V){let W;if(qe.aspect==="canvas")W=o.width/o.height;else{const[_e,Be]=qe.aspect.split(":").map(Number);W=_e/Be}const ie=f.limits.maxTextureDimension2D;let Pe,Me;if(V==="canvas"&&qe.aspect==="canvas")Pe=o.width,Me=o.height;else{const _e=V==="canvas"?Math.max(o.width,o.height):V;W>=1?(Pe=_e,Me=Math.round(_e/W)):(Me=_e,Pe=Math.round(_e*W))}const he=Math.min(1,ie/Math.max(Pe,Me));return Pe=Math.max(2,Math.round(Pe*he)&-2),Me=Math.max(2,Math.round(Me*he)&-2),[Pe,Me]}function nt(V,W){const ie=URL.createObjectURL(V),Pe=document.createElement("a");Pe.href=ie,Pe.download=W,document.body.appendChild(Pe),Pe.click(),Pe.remove(),setTimeout(()=>URL.revokeObjectURL(ie),1e4)}async function lt(V,W){var _e;const ie=(V.size/1048576).toFixed(1),Pe=window;if(typeof Pe.showSaveFilePicker=="function")try{const Be=await Pe.showSaveFilePicker({suggestedName:W,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Fe=await Be.createWritable();return await Fe.write(V),await Fe.close(),`saved ${Be.name??W} (${ie} MB) where you chose`}catch(Be){if((Be==null?void 0:Be.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Me=new File([V],W,{type:"image/png"}),he=navigator;if(he.share&&((_e=he.canShare)!=null&&_e.call(he,{files:[Me]})))try{return await he.share({files:[Me],title:W}),`shared ${W} (${ie} MB) via share sheet`}catch(Be){if((Be==null?void 0:Be.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return nt(V,W),`downloaded ${W} (${ie} MB) to your browser's Downloads folder`}async function st(V){if(b)return;const[W,ie]=at(V);We.s=`rendering ${W}×${ie}…`;const Pe=o.width,Me=o.height;w.setRenderSize(W,ie),Sn(W,ie,f,I.render_settings_buffer);const he=f.createTexture({size:[W,ie,1],format:$,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),_e=Math.ceil(W*4/256)*256,Be=f.createBuffer({size:_e*ie,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Fe=f.createCommandEncoder({label:"screenshot"});I.frame(Fe,he.createView(),!1),Fe.copyTextureToBuffer({texture:he},{buffer:Be,bytesPerRow:_e,rowsPerImage:ie},[W,ie,1]),f.queue.submit([Fe.finish()]),w.clearRenderSize(),Sn(Pe,Me,f,I.render_settings_buffer);try{await Be.mapAsync(GPUMapMode.READ);const ct=new Uint8Array(Be.getMappedRange()),bt=new Uint8ClampedArray(W*ie*4);for(let ut=0;ut<ie;ut++)bt.set(ct.subarray(ut*_e,ut*_e+W*4),ut*W*4);for(let ut=3;ut<bt.length;ut+=4)bt[ut]=255;Be.unmap();const yt=document.createElement("canvas");yt.width=W,yt.height=ie,yt.getContext("2d").putImageData(new ImageData(bt,W,ie),0,0);const tt=await new Promise((ut,Cn)=>yt.toBlob(Nt=>Nt?ut(Nt):Cn(new Error("toBlob failed")),"image/png")),Jt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),hn=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),en=`${Jt}_${W}x${ie}_${hn}.png`;Ye={blob:tt,name:en},We.s=await lt(tt,en)}catch(ct){console.error("[screenshot]",ct),We.s=`failed: ${ct}`}finally{Be.destroy(),he.destroy()}}{const V=document.createElement("div");V.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const W=(Pe,Me,he)=>{const _e=document.createElement("button");_e.className="tp-btnv_b",_e.textContent=Pe,_e.title=Me,_e.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",_e.addEventListener("click",he),V.appendChild(_e)};W("Canvas","current canvas size",()=>{st("canvas")});for(const[Pe,Me]of Je)W(Pe,`${Me} px long edge`,()=>{st(Me)});(He.element.querySelector(".tp-fldv_c")??He.element).appendChild(V)}He.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Ye){We.s="nothing captured yet";return}nt(Ye.blob,Ye.name),We.s=`downloaded ${Ye.name} to your browser's Downloads folder`}),be.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(ee.length>0)w.set_preset(ee[0]);else{const V=Q.bbox.max[0]-Q.bbox.min[0],W=Q.bbox.max[1]-Q.bbox.min[1],ie=Q.bbox.max[2]-Q.bbox.min[2],Me=.5*Math.sqrt(V*V+W*W+ie*ie)*.5;R.set(Ce[0]-Me,Ce[1]-Me,Ce[2]-Me,w.position);const he=R.create(Me,Me,Me);R.normalize(he,he);const _e=R.create();R.cross(R.create(0,1,0),he,_e),R.normalize(_e,_e);const Be=R.create();R.cross(he,_e,Be);const Fe=Ct.create(_e[0],Be[0],he[0],_e[1],Be[1],he[1],_e[2],Be[2],he[2]);ft.fromMat3(Fe,w.rotation),w.update_buffer()}C.resetToCamera(),ye()});const Xe={result:"— click Benchmark —"},et=be.addMonitor(Xe,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});et.hidden=!0;const je={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function rt(){const W=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ie of Object.keys(je))if(W.startsWith(ie))return ie;return null}const Ke=document.createElement("div");Ke.id="bench-overlay",Ke.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ke);function ht(V,W,ie){const Pe=Math.floor(W/Math.max(1,ie)*100),Me=32,he=Math.floor(W/Math.max(1,ie)*Me),_e="█".repeat(he)+"░".repeat(Me-he);Ke.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${V}</div><div>[${_e}] ${Pe}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${W} / ${ie} frames · offscreen · pipelined · no vsync</div>`,Ke.style.display="block"}function it(){Ke.style.display="none"}async function Tt(V=10,W=200){if(b)return;if(ee.length===0){Xe.result="no cameras to benchmark";return}b=!0;const ie=Z,Pe=pe.animate,Me=new Float32Array(w.position),he=new Float32Array(w.rotation);Z=!1,pe.animate=!1,be.refresh(),P=null,C.enabled=!1;const _e=rt(),Be=_e?je[_e]:null,Fe=(Be==null?void 0:Be.w)??o.width,ct=(Be==null?void 0:Be.h)??o.height,bt=(Be==null?void 0:Be.fovY)??w.getFov(),yt=_e?`${_e} · ${Fe>=4e3/4+500?"images_4":"images_2"}`:"custom",tt=o.width,Jt=o.height,hn=w.getFov();o.width=Fe,o.height=ct,w.setFov(bt),Sn(Fe,ct,f,I.render_settings_buffer);const en=f.createTexture({size:[Fe,ct,1],format:$,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ut=en.createView(),Cn=()=>{const vt=f.createCommandEncoder();I.frame(vt,ut,!1),f.queue.submit([vt.finish()])},Nt=()=>new Promise(vt=>setTimeout(vt,0)),$n=20,qn=async(vt,tn)=>{let fn=0,Bt=0;for(ht(tn,0,vt),await Nt();Bt<vt;){const _n=Math.min($n,vt-Bt),mn=performance.now();for(let En=0;En<_n;En++)w.set_preset(ee[(Bt+En)%ee.length]),Cn();await f.queue.onSubmittedWorkDone();const cs=performance.now();fn+=cs-mn,Bt+=_n,ht(tn,Bt,vt),await Nt()}return fn};try{await qn(V,"Warming up");const tn=await qn(W,"Benchmarking")/W,fn=1e3/tn,Bt=Q.num_points??Q.surfel_data.length/8,_n=(bt*180/Math.PI).toFixed(1),mn=`${fn.toFixed(1)} FPS  (${tn.toFixed(2)} ms/frame)
${Fe}×${ct} · fovY ${_n}° · ${yt}
${Bt.toLocaleString()} surfels · ${V}w+${W}b · pipelined`;Xe.result=mn,et.hidden=!1,console.log("[bench]",mn.replace(/\n/g,"  |  "))}catch(vt){console.error("[bench] failed:",vt),Xe.result=`bench failed: ${vt}`,et.hidden=!1}finally{it(),en.destroy(),o.width=tt,o.height=Jt,w.setFov(hn),Sn(tt,Jt,f,I.render_settings_buffer),w.position.set(Me),w.rotation.set(he),w.update_buffer(),C.enabled=!ie,Z=ie,pe.animate=Pe,be.refresh(),b=!1}}be.addButton({title:"📊 Benchmark"}).on("click",()=>Tt());const ot=new Set,Et=V=>{const W=V.target;return!!W&&(W.tagName==="INPUT"||W.tagName==="TEXTAREA"||W.isContentEditable)};document.addEventListener("keyup",V=>{ot.delete(V.key.toLowerCase())}),window.addEventListener("blur",()=>ot.clear());const kt=V=>{if(ot.size===0||pe.animate)return;const W=w.rotation,ie=[W[0],W[4],W[8]],Pe=[W[1],W[5],W[9]],Me=[W[2],W[6],W[10]],he=C.center,Be=Math.max(.05,R.distance(w.position,he))*(ot.has("shift")?3:1.2)*V;let Fe=0,ct=0,bt=0;if(ot.has("w")&&(bt+=1),ot.has("s")&&(bt-=1),ot.has("d")&&(Fe+=1),ot.has("a")&&(Fe-=1),ot.has("e")&&(ct+=1),ot.has("q")&&(ct-=1),!Fe&&!ct&&!bt)return;const yt=[0,0,0];for(let tt=0;tt<3;tt++)yt[tt]=(ie[tt]*Fe+Pe[tt]*ct+Me[tt]*bt)*Be;for(let tt=0;tt<3;tt++)w.position[tt]+=yt[tt],he[tt]+=yt[tt];P=null};document.addEventListener("keydown",V=>{if(Et(V))return;const W=V.key,ie=W.toLowerCase();if(["w","a","s","d","q","e","shift"].includes(ie)&&!(V.shiftKey&&ie==="d")){ot.add(ie),V.preventDefault();return}if(ie==="t"){Le();return}if(W>="0"&&W<="9"&&ee.length>0){const Pe=parseInt(W);Pe<ee.length&&U(Pe)}else W==="ArrowLeft"||W==="PageUp"?(U(a-1),V.preventDefault()):W==="ArrowRight"||W==="PageDown"?(U(a+1),V.preventDefault()):V.shiftKey&&ie==="d"&&I.debugReadSortedIndices(30).catch(Pe=>console.error("[DEBUG] readback failed:",Pe))});function At(V,W){const ie=o.getBoundingClientRect(),Pe=window.devicePixelRatio||1;return[(V-ie.left)*Pe,(W-ie.top)*Pe]}o.addEventListener("dblclick",V=>{const[W,ie]=At(V.clientX,V.clientY);me(W,ie)});let Mt=0,Dt=0,Zt=0;o.addEventListener("pointerdown",V=>{if(V.pointerType!=="touch")return;const W=performance.now(),ie=W-Mt,Pe=V.clientX-Dt,Me=V.clientY-Zt;if(ie>0&&ie<300&&Pe*Pe+Me*Me<40*40){const[he,_e]=At(V.clientX,V.clientY);me(he,_e),Mt=0}else Mt=W,Dt=V.clientX,Zt=V.clientY});function It(){return B}let Xt=performance.now(),Ft=60,Ze=Promise.resolve(),Qt=0;async function pn(){var Me;const V=performance.now(),W=Math.min((V-Xt)/1e3,.1);if(Xt=V,W>0){const he=((Me=I.lastStageBreakdownMs)==null?void 0:Me.total)??0,_e=he>.5?1e3/he:1/W;Ft=Ft*.9+_e*.1,u.stats=`${p} surfels · ${Math.round(Ft)} fps`}if(b){requestAnimationFrame(pn);return}if(It()&&(P||Z)&&(P=null,C.resetToCamera(),ye(),Z&&(Z=!1,pe.animate=!1,be.refresh())),Z&&pe.animateMode==="circle"&&q){se+=W/re,se>=1&&(se-=1);const he=Ti(q,se);w.set_preset(he),C.update(W);const _e=f.createCommandEncoder();I.frame(_e,l.getCurrentTexture().createView()),f.queue.submit([_e.finish()]),Qt++,Qt===2&&On(),requestAnimationFrame(pn);return}if(P){P.t+=W/P.duration;const he=Math.min(1,P.t),_e=he*he*(3-2*he);R.lerp(P.fromPos,P.toPos,_e,w.position),pt.slerp(P.fromQuat,P.toQuat,_e,d),Ct.fromQuat(d,h),ft.fromMat3(h,w.rotation),w.update_buffer(),P.t>=1&&(w.set_preset(P.target),P=null,Z?ee.length>0&&(r=k):(C.resetToCamera(),ye()))}else if(Z&&!It()){const he=pe.animateMode==="circle"&&ue.length>0,_e=he?ue:ee;if(_e.length!==0){if(r-=W,r<=0){const Fe=((he?m:a)+1)%_e.length;he?m=Fe:a=Fe;const ct=he?x/8:x;D(_e[Fe],ct),he||(_.view=`${a+1} / ${ee.length}: ${ee[a].img_name??a}`)}}}kt(W),C.update(W),z(),J(),await Ze;const ie=f.createCommandEncoder(),Pe=l.getCurrentTexture().createView();I.frame(ie,Pe),f.queue.submit([ie.finish()]),Ze=f.queue.onSubmittedWorkDone(),Qt++,Qt===2&&On(),requestAnimationFrame(pn)}requestAnimationFrame(pn)}}(function(){let l="dev";for(const E of Array.from(document.querySelectorAll('script[type="module"]'))){const C=E.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){l=C[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),E=document.querySelector("#webgpu-canvas");Vl(E!==null);const w=E.getContext("webgpu");Uc(E,w,f,l)})();
