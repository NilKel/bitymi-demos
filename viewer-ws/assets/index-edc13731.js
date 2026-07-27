var gl=Object.defineProperty;var wl=(o,l,h)=>l in o?gl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[l]=h;var q=(o,l,h)=>(wl(o,typeof l!="symbol"?l+"":l,h),h);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))S(x);new MutationObserver(x=>{for(const k of x)if(k.type==="childList")for(const B of k.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&S(B)}).observe(document,{childList:!0,subtree:!0});function h(x){const k={};return x.integrity&&(k.integrity=x.integrity),x.referrerPolicy&&(k.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?k.credentials="include":x.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function S(x){if(x.ep)return;x.ep=!0;const k=h(x);fetch(x.href,k)}})();function xl(o,l){return class extends o{constructor(...h){super(...h),l(this)}}}const yl=xl(Array,o=>o.fill(0));let Ae=1e-6;function Pl(o){function l(g=0,P=0){const E=new o(2);return g!==void 0&&(E[0]=g,P!==void 0&&(E[1]=P)),E}const h=l;function S(g,P,E){const r=E??new o(2);return r[0]=g,r[1]=P,r}function x(g,P){const E=P??new o(2);return E[0]=Math.ceil(g[0]),E[1]=Math.ceil(g[1]),E}function k(g,P){const E=P??new o(2);return E[0]=Math.floor(g[0]),E[1]=Math.floor(g[1]),E}function B(g,P){const E=P??new o(2);return E[0]=Math.round(g[0]),E[1]=Math.round(g[1]),E}function V(g,P=0,E=1,r){const m=r??new o(2);return m[0]=Math.min(E,Math.max(P,g[0])),m[1]=Math.min(E,Math.max(P,g[1])),m}function T(g,P,E){const r=E??new o(2);return r[0]=g[0]+P[0],r[1]=g[1]+P[1],r}function A(g,P,E,r){const m=r??new o(2);return m[0]=g[0]+P[0]*E,m[1]=g[1]+P[1]*E,m}function R(g,P){const E=g[0],r=g[1],m=P[0],u=P[1],p=Math.sqrt(E*E+r*r),a=Math.sqrt(m*m+u*u),_=p*a,y=_&&de(g,P)/_;return Math.acos(y)}function U(g,P,E){const r=E??new o(2);return r[0]=g[0]-P[0],r[1]=g[1]-P[1],r}const K=U;function I(g,P){return Math.abs(g[0]-P[0])<Ae&&Math.abs(g[1]-P[1])<Ae}function W(g,P){return g[0]===P[0]&&g[1]===P[1]}function H(g,P,E,r){const m=r??new o(2);return m[0]=g[0]+E*(P[0]-g[0]),m[1]=g[1]+E*(P[1]-g[1]),m}function N(g,P,E,r){const m=r??new o(2);return m[0]=g[0]+E[0]*(P[0]-g[0]),m[1]=g[1]+E[1]*(P[1]-g[1]),m}function ue(g,P,E){const r=E??new o(2);return r[0]=Math.max(g[0],P[0]),r[1]=Math.max(g[1],P[1]),r}function j(g,P,E){const r=E??new o(2);return r[0]=Math.min(g[0],P[0]),r[1]=Math.min(g[1],P[1]),r}function Z(g,P,E){const r=E??new o(2);return r[0]=g[0]*P,r[1]=g[1]*P,r}const $=Z;function ce(g,P,E){const r=E??new o(2);return r[0]=g[0]/P,r[1]=g[1]/P,r}function se(g,P){const E=P??new o(2);return E[0]=1/g[0],E[1]=1/g[1],E}const pe=se;function oe(g,P,E){const r=E??new o(3),m=g[0]*P[1]-g[1]*P[0];return r[0]=0,r[1]=0,r[2]=m,r}function de(g,P){return g[0]*P[0]+g[1]*P[1]}function Ee(g){const P=g[0],E=g[1];return Math.sqrt(P*P+E*E)}const Ue=Ee;function Ie(g){const P=g[0],E=g[1];return P*P+E*E}const Re=Ie;function Be(g,P){const E=g[0]-P[0],r=g[1]-P[1];return Math.sqrt(E*E+r*r)}const we=Be;function Ce(g,P){const E=g[0]-P[0],r=g[1]-P[1];return E*E+r*r}const Q=Ce;function ee(g,P){const E=P??new o(2),r=g[0],m=g[1],u=Math.sqrt(r*r+m*m);return u>1e-5?(E[0]=r/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function ie(g,P){const E=P??new o(2);return E[0]=-g[0],E[1]=-g[1],E}function me(g,P){const E=P??new o(2);return E[0]=g[0],E[1]=g[1],E}const ze=me;function re(g,P,E){const r=E??new o(2);return r[0]=g[0]*P[0],r[1]=g[1]*P[1],r}const _e=re;function ge(g,P,E){const r=E??new o(2);return r[0]=g[0]/P[0],r[1]=g[1]/P[1],r}const Te=ge;function le(g=1,P){const E=P??new o(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*g,E[1]=Math.sin(r)*g,E}function M(g){const P=g??new o(2);return P[0]=0,P[1]=0,P}function G(g,P,E){const r=E??new o(2),m=g[0],u=g[1];return r[0]=m*P[0]+u*P[4]+P[12],r[1]=m*P[1]+u*P[5]+P[13],r}function w(g,P,E){const r=E??new o(2),m=g[0],u=g[1];return r[0]=P[0]*m+P[4]*u+P[8],r[1]=P[1]*m+P[5]*u+P[9],r}function i(g,P,E,r){const m=r??new o(2),u=g[0]-P[0],p=g[1]-P[1],a=Math.sin(E),_=Math.cos(E);return m[0]=u*_-p*a+P[0],m[1]=u*a+p*_+P[1],m}function f(g,P,E){const r=E??new o(2);return ee(g,r),Z(r,P,r)}function d(g,P,E){const r=E??new o(2);return Ee(g)>P?f(g,P,r):me(g,r)}function b(g,P,E){const r=E??new o(2);return H(g,P,.5,r)}return{create:l,fromValues:h,set:S,ceil:x,floor:k,round:B,clamp:V,add:T,addScaled:A,angle:R,subtract:U,sub:K,equalsApproximately:I,equals:W,lerp:H,lerpV:N,max:ue,min:j,mulScalar:Z,scale:$,divScalar:ce,inverse:se,invert:pe,cross:oe,dot:de,length:Ee,len:Ue,lengthSq:Ie,lenSq:Re,distance:Be,dist:we,distanceSq:Ce,distSq:Q,normalize:ee,negate:ie,copy:me,clone:ze,multiply:re,mul:_e,divide:ge,div:Te,random:le,zero:M,transformMat4:G,transformMat3:w,rotate:i,setLength:f,truncate:d,midpoint:b}}const Fr=new Map;function ii(o){let l=Fr.get(o);return l||(l=Pl(o),Fr.set(o,l)),l}function Sl(o){function l(a,_,y){const v=new o(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,y!==void 0&&(v[2]=y))),v}const h=l;function S(a,_,y,v){const L=v??new o(3);return L[0]=a,L[1]=_,L[2]=y,L}function x(a,_){const y=_??new o(3);return y[0]=Math.ceil(a[0]),y[1]=Math.ceil(a[1]),y[2]=Math.ceil(a[2]),y}function k(a,_){const y=_??new o(3);return y[0]=Math.floor(a[0]),y[1]=Math.floor(a[1]),y[2]=Math.floor(a[2]),y}function B(a,_){const y=_??new o(3);return y[0]=Math.round(a[0]),y[1]=Math.round(a[1]),y[2]=Math.round(a[2]),y}function V(a,_=0,y=1,v){const L=v??new o(3);return L[0]=Math.min(y,Math.max(_,a[0])),L[1]=Math.min(y,Math.max(_,a[1])),L[2]=Math.min(y,Math.max(_,a[2])),L}function T(a,_,y){const v=y??new o(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function A(a,_,y,v){const L=v??new o(3);return L[0]=a[0]+_[0]*y,L[1]=a[1]+_[1]*y,L[2]=a[2]+_[2]*y,L}function R(a,_){const y=a[0],v=a[1],L=a[2],O=_[0],F=_[1],ae=_[2],Y=Math.sqrt(y*y+v*v+L*L),J=Math.sqrt(O*O+F*F+ae*ae),ve=Y*J,xe=ve&&de(a,_)/ve;return Math.acos(xe)}function U(a,_,y){const v=y??new o(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const K=U;function I(a,_){return Math.abs(a[0]-_[0])<Ae&&Math.abs(a[1]-_[1])<Ae&&Math.abs(a[2]-_[2])<Ae}function W(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function H(a,_,y,v){const L=v??new o(3);return L[0]=a[0]+y*(_[0]-a[0]),L[1]=a[1]+y*(_[1]-a[1]),L[2]=a[2]+y*(_[2]-a[2]),L}function N(a,_,y,v){const L=v??new o(3);return L[0]=a[0]+y[0]*(_[0]-a[0]),L[1]=a[1]+y[1]*(_[1]-a[1]),L[2]=a[2]+y[2]*(_[2]-a[2]),L}function ue(a,_,y){const v=y??new o(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function j(a,_,y){const v=y??new o(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function Z(a,_,y){const v=y??new o(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const $=Z;function ce(a,_,y){const v=y??new o(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function se(a,_){const y=_??new o(3);return y[0]=1/a[0],y[1]=1/a[1],y[2]=1/a[2],y}const pe=se;function oe(a,_,y){const v=y??new o(3),L=a[2]*_[0]-a[0]*_[2],O=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=L,v[2]=O,v}function de(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function Ee(a){const _=a[0],y=a[1],v=a[2];return Math.sqrt(_*_+y*y+v*v)}const Ue=Ee;function Ie(a){const _=a[0],y=a[1],v=a[2];return _*_+y*y+v*v}const Re=Ie;function Be(a,_){const y=a[0]-_[0],v=a[1]-_[1],L=a[2]-_[2];return Math.sqrt(y*y+v*v+L*L)}const we=Be;function Ce(a,_){const y=a[0]-_[0],v=a[1]-_[1],L=a[2]-_[2];return y*y+v*v+L*L}const Q=Ce;function ee(a,_){const y=_??new o(3),v=a[0],L=a[1],O=a[2],F=Math.sqrt(v*v+L*L+O*O);return F>1e-5?(y[0]=v/F,y[1]=L/F,y[2]=O/F):(y[0]=0,y[1]=0,y[2]=0),y}function ie(a,_){const y=_??new o(3);return y[0]=-a[0],y[1]=-a[1],y[2]=-a[2],y}function me(a,_){const y=_??new o(3);return y[0]=a[0],y[1]=a[1],y[2]=a[2],y}const ze=me;function re(a,_,y){const v=y??new o(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const _e=re;function ge(a,_,y){const v=y??new o(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const Te=ge;function le(a=1,_){const y=_??new o(3),v=Math.random()*2*Math.PI,L=Math.random()*2-1,O=Math.sqrt(1-L*L)*a;return y[0]=Math.cos(v)*O,y[1]=Math.sin(v)*O,y[2]=L*a,y}function M(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function G(a,_,y){const v=y??new o(3),L=a[0],O=a[1],F=a[2],ae=_[3]*L+_[7]*O+_[11]*F+_[15]||1;return v[0]=(_[0]*L+_[4]*O+_[8]*F+_[12])/ae,v[1]=(_[1]*L+_[5]*O+_[9]*F+_[13])/ae,v[2]=(_[2]*L+_[6]*O+_[10]*F+_[14])/ae,v}function w(a,_,y){const v=y??new o(3),L=a[0],O=a[1],F=a[2];return v[0]=L*_[0*4+0]+O*_[1*4+0]+F*_[2*4+0],v[1]=L*_[0*4+1]+O*_[1*4+1]+F*_[2*4+1],v[2]=L*_[0*4+2]+O*_[1*4+2]+F*_[2*4+2],v}function i(a,_,y){const v=y??new o(3),L=a[0],O=a[1],F=a[2];return v[0]=L*_[0]+O*_[4]+F*_[8],v[1]=L*_[1]+O*_[5]+F*_[9],v[2]=L*_[2]+O*_[6]+F*_[10],v}function f(a,_,y){const v=y??new o(3),L=_[0],O=_[1],F=_[2],ae=_[3]*2,Y=a[0],J=a[1],ve=a[2],xe=O*ve-F*J,fe=F*Y-L*ve,be=L*J-O*Y;return v[0]=Y+xe*ae+(O*be-F*fe)*2,v[1]=J+fe*ae+(F*xe-L*be)*2,v[2]=ve+be*ae+(L*fe-O*xe)*2,v}function d(a,_){const y=_??new o(3);return y[0]=a[12],y[1]=a[13],y[2]=a[14],y}function b(a,_,y){const v=y??new o(3),L=_*4;return v[0]=a[L+0],v[1]=a[L+1],v[2]=a[L+2],v}function g(a,_){const y=_??new o(3),v=a[0],L=a[1],O=a[2],F=a[4],ae=a[5],Y=a[6],J=a[8],ve=a[9],xe=a[10];return y[0]=Math.sqrt(v*v+L*L+O*O),y[1]=Math.sqrt(F*F+ae*ae+Y*Y),y[2]=Math.sqrt(J*J+ve*ve+xe*xe),y}function P(a,_,y,v){const L=v??new o(3),O=[],F=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],F[0]=O[0],F[1]=O[1]*Math.cos(y)-O[2]*Math.sin(y),F[2]=O[1]*Math.sin(y)+O[2]*Math.cos(y),L[0]=F[0]+_[0],L[1]=F[1]+_[1],L[2]=F[2]+_[2],L}function E(a,_,y,v){const L=v??new o(3),O=[],F=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],F[0]=O[2]*Math.sin(y)+O[0]*Math.cos(y),F[1]=O[1],F[2]=O[2]*Math.cos(y)-O[0]*Math.sin(y),L[0]=F[0]+_[0],L[1]=F[1]+_[1],L[2]=F[2]+_[2],L}function r(a,_,y,v){const L=v??new o(3),O=[],F=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],F[0]=O[0]*Math.cos(y)-O[1]*Math.sin(y),F[1]=O[0]*Math.sin(y)+O[1]*Math.cos(y),F[2]=O[2],L[0]=F[0]+_[0],L[1]=F[1]+_[1],L[2]=F[2]+_[2],L}function m(a,_,y){const v=y??new o(3);return ee(a,v),Z(v,_,v)}function u(a,_,y){const v=y??new o(3);return Ee(a)>_?m(a,_,v):me(a,v)}function p(a,_,y){const v=y??new o(3);return H(a,_,.5,v)}return{create:l,fromValues:h,set:S,ceil:x,floor:k,round:B,clamp:V,add:T,addScaled:A,angle:R,subtract:U,sub:K,equalsApproximately:I,equals:W,lerp:H,lerpV:N,max:ue,min:j,mulScalar:Z,scale:$,divScalar:ce,inverse:se,invert:pe,cross:oe,dot:de,length:Ee,len:Ue,lengthSq:Ie,lenSq:Re,distance:Be,dist:we,distanceSq:Ce,distSq:Q,normalize:ee,negate:ie,copy:me,clone:ze,multiply:re,mul:_e,divide:ge,div:Te,random:le,zero:M,transformMat4:G,transformMat4Upper3x3:w,transformMat3:i,transformQuat:f,getTranslation:d,getAxis:b,getScaling:g,rotateX:P,rotateY:E,rotateZ:r,setLength:m,truncate:u,midpoint:p}}const Nr=new Map;function Jn(o){let l=Nr.get(o);return l||(l=Sl(o),Nr.set(o,l)),l}function Cl(o){const l=ii(o),h=Jn(o);function S(i,f,d,b,g,P,E,r,m){const u=new o(12);return u[3]=0,u[7]=0,u[11]=0,i!==void 0&&(u[0]=i,f!==void 0&&(u[1]=f,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,g!==void 0&&(u[5]=g,P!==void 0&&(u[6]=P,E!==void 0&&(u[8]=E,r!==void 0&&(u[9]=r,m!==void 0&&(u[10]=m))))))))),u}function x(i,f,d,b,g,P,E,r,m,u){const p=u??new o(12);return p[0]=i,p[1]=f,p[2]=d,p[3]=0,p[4]=b,p[5]=g,p[6]=P,p[7]=0,p[8]=E,p[9]=r,p[10]=m,p[11]=0,p}function k(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[3]=0,d[4]=i[4],d[5]=i[5],d[6]=i[6],d[7]=0,d[8]=i[8],d[9]=i[9],d[10]=i[10],d[11]=0,d}function B(i,f){const d=f??new o(12),b=i[0],g=i[1],P=i[2],E=i[3],r=b+b,m=g+g,u=P+P,p=b*r,a=g*r,_=g*m,y=P*r,v=P*m,L=P*u,O=E*r,F=E*m,ae=E*u;return d[0]=1-_-L,d[1]=a+ae,d[2]=y-F,d[3]=0,d[4]=a-ae,d[5]=1-p-L,d[6]=v+O,d[7]=0,d[8]=y+F,d[9]=v-O,d[10]=1-p-_,d[11]=0,d}function V(i,f){const d=f??new o(12);return d[0]=-i[0],d[1]=-i[1],d[2]=-i[2],d[4]=-i[4],d[5]=-i[5],d[6]=-i[6],d[8]=-i[8],d[9]=-i[9],d[10]=-i[10],d}function T(i,f,d){const b=d??new o(12);return b[0]=i[0]*f,b[1]=i[1]*f,b[2]=i[2]*f,b[4]=i[4]*f,b[5]=i[5]*f,b[6]=i[6]*f,b[8]=i[8]*f,b[9]=i[9]*f,b[10]=i[10]*f,b}const A=T;function R(i,f,d){const b=d??new o(12);return b[0]=i[0]+f[0],b[1]=i[1]+f[1],b[2]=i[2]+f[2],b[4]=i[4]+f[4],b[5]=i[5]+f[5],b[6]=i[6]+f[6],b[8]=i[8]+f[8],b[9]=i[9]+f[9],b[10]=i[10]+f[10],b}function U(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=i[1],d[2]=i[2],d[4]=i[4],d[5]=i[5],d[6]=i[6],d[8]=i[8],d[9]=i[9],d[10]=i[10],d}const K=U;function I(i,f){return Math.abs(i[0]-f[0])<Ae&&Math.abs(i[1]-f[1])<Ae&&Math.abs(i[2]-f[2])<Ae&&Math.abs(i[4]-f[4])<Ae&&Math.abs(i[5]-f[5])<Ae&&Math.abs(i[6]-f[6])<Ae&&Math.abs(i[8]-f[8])<Ae&&Math.abs(i[9]-f[9])<Ae&&Math.abs(i[10]-f[10])<Ae}function W(i,f){return i[0]===f[0]&&i[1]===f[1]&&i[2]===f[2]&&i[4]===f[4]&&i[5]===f[5]&&i[6]===f[6]&&i[8]===f[8]&&i[9]===f[9]&&i[10]===f[10]}function H(i){const f=i??new o(12);return f[0]=1,f[1]=0,f[2]=0,f[4]=0,f[5]=1,f[6]=0,f[8]=0,f[9]=0,f[10]=1,f}function N(i,f){const d=f??new o(12);if(d===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,d}const b=i[0*4+0],g=i[0*4+1],P=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2];return d[0]=b,d[1]=E,d[2]=u,d[4]=g,d[5]=r,d[6]=p,d[8]=P,d[9]=m,d[10]=a,d}function ue(i,f){const d=f??new o(12),b=i[0*4+0],g=i[0*4+1],P=i[0*4+2],E=i[1*4+0],r=i[1*4+1],m=i[1*4+2],u=i[2*4+0],p=i[2*4+1],a=i[2*4+2],_=a*r-m*p,y=-a*E+m*u,v=p*E-r*u,L=1/(b*_+g*y+P*v);return d[0]=_*L,d[1]=(-a*g+P*p)*L,d[2]=(m*g-P*r)*L,d[4]=y*L,d[5]=(a*b-P*u)*L,d[6]=(-m*b+P*E)*L,d[8]=v*L,d[9]=(-p*b+g*u)*L,d[10]=(r*b-g*E)*L,d}function j(i){const f=i[0],d=i[0*4+1],b=i[0*4+2],g=i[1*4+0],P=i[1*4+1],E=i[1*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2];return f*(P*u-m*E)-g*(d*u-m*b)+r*(d*E-P*b)}const Z=ue;function $(i,f,d){const b=d??new o(12),g=i[0],P=i[1],E=i[2],r=i[4+0],m=i[4+1],u=i[4+2],p=i[8+0],a=i[8+1],_=i[8+2],y=f[0],v=f[1],L=f[2],O=f[4+0],F=f[4+1],ae=f[4+2],Y=f[8+0],J=f[8+1],ve=f[8+2];return b[0]=g*y+r*v+p*L,b[1]=P*y+m*v+a*L,b[2]=E*y+u*v+_*L,b[4]=g*O+r*F+p*ae,b[5]=P*O+m*F+a*ae,b[6]=E*O+u*F+_*ae,b[8]=g*Y+r*J+p*ve,b[9]=P*Y+m*J+a*ve,b[10]=E*Y+u*J+_*ve,b}const ce=$;function se(i,f,d){const b=d??H();return i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2],b[4]=i[4],b[5]=i[5],b[6]=i[6]),b[8]=f[0],b[9]=f[1],b[10]=1,b}function pe(i,f){const d=f??l.create();return d[0]=i[8],d[1]=i[9],d}function oe(i,f,d){const b=d??l.create(),g=f*4;return b[0]=i[g+0],b[1]=i[g+1],b}function de(i,f,d,b){const g=b===i?i:U(i,b),P=d*4;return g[P+0]=f[0],g[P+1]=f[1],g}function Ee(i,f){const d=f??l.create(),b=i[0],g=i[1],P=i[4],E=i[5];return d[0]=Math.sqrt(b*b+g*g),d[1]=Math.sqrt(P*P+E*E),d}function Ue(i,f){const d=f??h.create(),b=i[0],g=i[1],P=i[2],E=i[4],r=i[5],m=i[6],u=i[8],p=i[9],a=i[10];return d[0]=Math.sqrt(b*b+g*g+P*P),d[1]=Math.sqrt(E*E+r*r+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Ie(i,f){const d=f??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=i[0],d[9]=i[1],d[10]=1,d}function Re(i,f,d){const b=d??new o(12),g=f[0],P=f[1],E=i[0],r=i[1],m=i[2],u=i[1*4+0],p=i[1*4+1],a=i[1*4+2],_=i[2*4+0],y=i[2*4+1],v=i[2*4+2];return i!==b&&(b[0]=E,b[1]=r,b[2]=m,b[4]=u,b[5]=p,b[6]=a),b[8]=E*g+u*P+_,b[9]=r*g+p*P+y,b[10]=m*g+a*P+v,b}function Be(i,f){const d=f??new o(12),b=Math.cos(i),g=Math.sin(i);return d[0]=b,d[1]=g,d[2]=0,d[4]=-g,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function we(i,f,d){const b=d??new o(12),g=i[0*4+0],P=i[0*4+1],E=i[0*4+2],r=i[1*4+0],m=i[1*4+1],u=i[1*4+2],p=Math.cos(f),a=Math.sin(f);return b[0]=p*g+a*r,b[1]=p*P+a*m,b[2]=p*E+a*u,b[4]=p*r-a*g,b[5]=p*m-a*P,b[6]=p*u-a*E,i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function Ce(i,f){const d=f??new o(12),b=Math.cos(i),g=Math.sin(i);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=g,d[8]=0,d[9]=-g,d[10]=b,d}function Q(i,f,d){const b=d??new o(12),g=i[4],P=i[5],E=i[6],r=i[8],m=i[9],u=i[10],p=Math.cos(f),a=Math.sin(f);return b[4]=p*g+a*r,b[5]=p*P+a*m,b[6]=p*E+a*u,b[8]=p*r-a*g,b[9]=p*m-a*P,b[10]=p*u-a*E,i!==b&&(b[0]=i[0],b[1]=i[1],b[2]=i[2]),b}function ee(i,f){const d=f??new o(12),b=Math.cos(i),g=Math.sin(i);return d[0]=b,d[1]=0,d[2]=-g,d[4]=0,d[5]=1,d[6]=0,d[8]=g,d[9]=0,d[10]=b,d}function ie(i,f,d){const b=d??new o(12),g=i[0*4+0],P=i[0*4+1],E=i[0*4+2],r=i[2*4+0],m=i[2*4+1],u=i[2*4+2],p=Math.cos(f),a=Math.sin(f);return b[0]=p*g-a*r,b[1]=p*P-a*m,b[2]=p*E-a*u,b[8]=p*r+a*g,b[9]=p*m+a*P,b[10]=p*u+a*E,i!==b&&(b[4]=i[4],b[5]=i[5],b[6]=i[6]),b}const me=Be,ze=we;function re(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function _e(i,f,d){const b=d??new o(12),g=f[0],P=f[1];return b[0]=g*i[0*4+0],b[1]=g*i[0*4+1],b[2]=g*i[0*4+2],b[4]=P*i[1*4+0],b[5]=P*i[1*4+1],b[6]=P*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function ge(i,f){const d=f??new o(12);return d[0]=i[0],d[1]=0,d[2]=0,d[4]=0,d[5]=i[1],d[6]=0,d[8]=0,d[9]=0,d[10]=i[2],d}function Te(i,f,d){const b=d??new o(12),g=f[0],P=f[1],E=f[2];return b[0]=g*i[0*4+0],b[1]=g*i[0*4+1],b[2]=g*i[0*4+2],b[4]=P*i[1*4+0],b[5]=P*i[1*4+1],b[6]=P*i[1*4+2],b[8]=E*i[2*4+0],b[9]=E*i[2*4+1],b[10]=E*i[2*4+2],b}function le(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function M(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],i!==b&&(b[8]=i[8],b[9]=i[9],b[10]=i[10]),b}function G(i,f){const d=f??new o(12);return d[0]=i,d[1]=0,d[2]=0,d[4]=0,d[5]=i,d[6]=0,d[8]=0,d[9]=0,d[10]=i,d}function w(i,f,d){const b=d??new o(12);return b[0]=f*i[0*4+0],b[1]=f*i[0*4+1],b[2]=f*i[0*4+2],b[4]=f*i[1*4+0],b[5]=f*i[1*4+1],b[6]=f*i[1*4+2],b[8]=f*i[2*4+0],b[9]=f*i[2*4+1],b[10]=f*i[2*4+2],b}return{add:R,clone:K,copy:U,create:S,determinant:j,equals:W,equalsApproximately:I,fromMat4:k,fromQuat:B,get3DScaling:Ue,getAxis:oe,getScaling:Ee,getTranslation:pe,identity:H,inverse:ue,invert:Z,mul:ce,mulScalar:A,multiply:$,multiplyScalar:T,negate:V,rotate:we,rotateX:Q,rotateY:ie,rotateZ:ze,rotation:Be,rotationX:Ce,rotationY:ee,rotationZ:me,scale:_e,scale3D:Te,scaling:re,scaling3D:ge,set:x,setAxis:de,setTranslation:se,translate:Re,translation:Ie,transpose:N,uniformScale:M,uniformScale3D:w,uniformScaling:le,uniformScaling3D:G}}const $r=new Map;function El(o){let l=$r.get(o);return l||(l=Cl(o),$r.set(o,l)),l}function kl(o){const l=Jn(o);function h(r,m,u,p,a,_,y,v,L,O,F,ae,Y,J,ve,xe){const fe=new o(16);return r!==void 0&&(fe[0]=r,m!==void 0&&(fe[1]=m,u!==void 0&&(fe[2]=u,p!==void 0&&(fe[3]=p,a!==void 0&&(fe[4]=a,_!==void 0&&(fe[5]=_,y!==void 0&&(fe[6]=y,v!==void 0&&(fe[7]=v,L!==void 0&&(fe[8]=L,O!==void 0&&(fe[9]=O,F!==void 0&&(fe[10]=F,ae!==void 0&&(fe[11]=ae,Y!==void 0&&(fe[12]=Y,J!==void 0&&(fe[13]=J,ve!==void 0&&(fe[14]=ve,xe!==void 0&&(fe[15]=xe)))))))))))))))),fe}function S(r,m,u,p,a,_,y,v,L,O,F,ae,Y,J,ve,xe,fe){const be=fe??new o(16);return be[0]=r,be[1]=m,be[2]=u,be[3]=p,be[4]=a,be[5]=_,be[6]=y,be[7]=v,be[8]=L,be[9]=O,be[10]=F,be[11]=ae,be[12]=Y,be[13]=J,be[14]=ve,be[15]=xe,be}function x(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(r,m){const u=m??new o(16),p=r[0],a=r[1],_=r[2],y=r[3],v=p+p,L=a+a,O=_+_,F=p*v,ae=a*v,Y=a*L,J=_*v,ve=_*L,xe=_*O,fe=y*v,be=y*L,De=y*O;return u[0]=1-Y-xe,u[1]=ae+De,u[2]=J-be,u[3]=0,u[4]=ae-De,u[5]=1-F-xe,u[6]=ve+fe,u[7]=0,u[8]=J+be,u[9]=ve-fe,u[10]=1-F-Y,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function B(r,m){const u=m??new o(16);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[3]=-r[3],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[7]=-r[7],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u[11]=-r[11],u[12]=-r[12],u[13]=-r[13],u[14]=-r[14],u[15]=-r[15],u}function V(r,m,u){const p=u??new o(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function T(r,m,u){const p=u??new o(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const A=T;function R(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=r[3],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=r[7],u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=r[11],u[12]=r[12],u[13]=r[13],u[14]=r[14],u[15]=r[15],u}const U=R;function K(r,m){return Math.abs(r[0]-m[0])<Ae&&Math.abs(r[1]-m[1])<Ae&&Math.abs(r[2]-m[2])<Ae&&Math.abs(r[3]-m[3])<Ae&&Math.abs(r[4]-m[4])<Ae&&Math.abs(r[5]-m[5])<Ae&&Math.abs(r[6]-m[6])<Ae&&Math.abs(r[7]-m[7])<Ae&&Math.abs(r[8]-m[8])<Ae&&Math.abs(r[9]-m[9])<Ae&&Math.abs(r[10]-m[10])<Ae&&Math.abs(r[11]-m[11])<Ae&&Math.abs(r[12]-m[12])<Ae&&Math.abs(r[13]-m[13])<Ae&&Math.abs(r[14]-m[14])<Ae&&Math.abs(r[15]-m[15])<Ae}function I(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function W(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function H(r,m){const u=m??new o(16);if(u===r){let ke;return ke=r[1],r[1]=r[4],r[4]=ke,ke=r[2],r[2]=r[8],r[8]=ke,ke=r[3],r[3]=r[12],r[12]=ke,ke=r[6],r[6]=r[9],r[9]=ke,ke=r[7],r[7]=r[13],r[13]=ke,ke=r[11],r[11]=r[14],r[14]=ke,u}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],y=r[0*4+3],v=r[1*4+0],L=r[1*4+1],O=r[1*4+2],F=r[1*4+3],ae=r[2*4+0],Y=r[2*4+1],J=r[2*4+2],ve=r[2*4+3],xe=r[3*4+0],fe=r[3*4+1],be=r[3*4+2],De=r[3*4+3];return u[0]=p,u[1]=v,u[2]=ae,u[3]=xe,u[4]=a,u[5]=L,u[6]=Y,u[7]=fe,u[8]=_,u[9]=O,u[10]=J,u[11]=be,u[12]=y,u[13]=F,u[14]=ve,u[15]=De,u}function N(r,m){const u=m??new o(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],y=r[0*4+3],v=r[1*4+0],L=r[1*4+1],O=r[1*4+2],F=r[1*4+3],ae=r[2*4+0],Y=r[2*4+1],J=r[2*4+2],ve=r[2*4+3],xe=r[3*4+0],fe=r[3*4+1],be=r[3*4+2],De=r[3*4+3],ke=J*De,qe=be*ve,Ze=O*De,We=be*F,He=O*ve,Xe=J*F,nt=_*De,st=be*y,rt=_*ve,Qe=J*y,Je=_*F,it=O*y,Fe=ae*fe,et=xe*Y,Ke=v*fe,ut=xe*L,tt=v*Y,xt=ae*L,vt=p*fe,yt=xe*a,Pt=p*Y,Mt=ae*a,Et=p*L,Bt=v*a,Tt=ke*L+We*Y+He*fe-(qe*L+Ze*Y+Xe*fe),St=qe*a+nt*Y+Qe*fe-(ke*a+st*Y+rt*fe),te=Ze*a+st*L+Je*fe-(We*a+nt*L+it*fe),he=Xe*a+rt*L+it*Y-(He*a+Qe*L+Je*Y),ne=1/(p*Tt+v*St+ae*te+xe*he);return u[0]=ne*Tt,u[1]=ne*St,u[2]=ne*te,u[3]=ne*he,u[4]=ne*(qe*v+Ze*ae+Xe*xe-(ke*v+We*ae+He*xe)),u[5]=ne*(ke*p+st*ae+rt*xe-(qe*p+nt*ae+Qe*xe)),u[6]=ne*(We*p+nt*v+it*xe-(Ze*p+st*v+Je*xe)),u[7]=ne*(He*p+Qe*v+Je*ae-(Xe*p+rt*v+it*ae)),u[8]=ne*(Fe*F+ut*ve+tt*De-(et*F+Ke*ve+xt*De)),u[9]=ne*(et*y+vt*ve+Mt*De-(Fe*y+yt*ve+Pt*De)),u[10]=ne*(Ke*y+yt*F+Et*De-(ut*y+vt*F+Bt*De)),u[11]=ne*(xt*y+Pt*F+Bt*ve-(tt*y+Mt*F+Et*ve)),u[12]=ne*(Ke*J+xt*be+et*O-(tt*be+Fe*O+ut*J)),u[13]=ne*(Pt*be+Fe*_+yt*J-(vt*J+Mt*be+et*_)),u[14]=ne*(vt*O+Bt*be+ut*_-(Et*be+Ke*_+yt*O)),u[15]=ne*(Et*J+tt*_+Mt*O-(Pt*O+Bt*J+xt*_)),u}function ue(r){const m=r[0],u=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],y=r[1*4+1],v=r[1*4+2],L=r[1*4+3],O=r[2*4+0],F=r[2*4+1],ae=r[2*4+2],Y=r[2*4+3],J=r[3*4+0],ve=r[3*4+1],xe=r[3*4+2],fe=r[3*4+3],be=ae*fe,De=xe*Y,ke=v*fe,qe=xe*L,Ze=v*Y,We=ae*L,He=p*fe,Xe=xe*a,nt=p*Y,st=ae*a,rt=p*L,Qe=v*a,Je=be*y+qe*F+Ze*ve-(De*y+ke*F+We*ve),it=De*u+He*F+st*ve-(be*u+Xe*F+nt*ve),Fe=ke*u+Xe*y+rt*ve-(qe*u+He*y+Qe*ve),et=We*u+nt*y+Qe*F-(Ze*u+st*y+rt*F);return m*Je+_*it+O*Fe+J*et}const j=N;function Z(r,m,u){const p=u??new o(16),a=r[0],_=r[1],y=r[2],v=r[3],L=r[4+0],O=r[4+1],F=r[4+2],ae=r[4+3],Y=r[8+0],J=r[8+1],ve=r[8+2],xe=r[8+3],fe=r[12+0],be=r[12+1],De=r[12+2],ke=r[12+3],qe=m[0],Ze=m[1],We=m[2],He=m[3],Xe=m[4+0],nt=m[4+1],st=m[4+2],rt=m[4+3],Qe=m[8+0],Je=m[8+1],it=m[8+2],Fe=m[8+3],et=m[12+0],Ke=m[12+1],ut=m[12+2],tt=m[12+3];return p[0]=a*qe+L*Ze+Y*We+fe*He,p[1]=_*qe+O*Ze+J*We+be*He,p[2]=y*qe+F*Ze+ve*We+De*He,p[3]=v*qe+ae*Ze+xe*We+ke*He,p[4]=a*Xe+L*nt+Y*st+fe*rt,p[5]=_*Xe+O*nt+J*st+be*rt,p[6]=y*Xe+F*nt+ve*st+De*rt,p[7]=v*Xe+ae*nt+xe*st+ke*rt,p[8]=a*Qe+L*Je+Y*it+fe*Fe,p[9]=_*Qe+O*Je+J*it+be*Fe,p[10]=y*Qe+F*Je+ve*it+De*Fe,p[11]=v*Qe+ae*Je+xe*it+ke*Fe,p[12]=a*et+L*Ke+Y*ut+fe*tt,p[13]=_*et+O*Ke+J*ut+be*tt,p[14]=y*et+F*Ke+ve*ut+De*tt,p[15]=v*et+ae*Ke+xe*ut+ke*tt,p}const $=Z;function ce(r,m,u){const p=u??W();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function se(r,m){const u=m??l.create();return u[0]=r[12],u[1]=r[13],u[2]=r[14],u}function pe(r,m,u){const p=u??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function oe(r,m,u,p){const a=p===r?p:R(r,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function de(r,m){const u=m??l.create(),p=r[0],a=r[1],_=r[2],y=r[4],v=r[5],L=r[6],O=r[8],F=r[9],ae=r[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(y*y+v*v+L*L),u[2]=Math.sqrt(O*O+F*F+ae*ae),u}function Ee(r,m,u,p,a){const _=a??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(u-p);_[10]=p*v,_[14]=p*u*v}else _[10]=-1,_[14]=-u;return _}function Ue(r,m,u,p=1/0,a){const _=a??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const v=1/(p-u);_[10]=u*v,_[14]=p*u*v}return _}function Ie(r,m,u,p,a,_,y){const v=y??new o(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(p+u)/(u-p),v[14]=a/(a-_),v[15]=1,v}function Re(r,m,u,p,a,_,y){const v=y??new o(16),L=m-r,O=p-u,F=a-_;return v[0]=2*a/L,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/O,v[6]=0,v[7]=0,v[8]=(r+m)/L,v[9]=(p+u)/O,v[10]=_/F,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/F,v[15]=0,v}function Be(r,m,u,p,a,_=1/0,y){const v=y??new o(16),L=m-r,O=p-u;if(v[0]=2*a/L,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/O,v[6]=0,v[7]=0,v[8]=(r+m)/L,v[9]=(p+u)/O,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const F=1/(_-a);v[10]=a*F,v[14]=_*a*F}return v}const we=l.create(),Ce=l.create(),Q=l.create();function ee(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(m,r,Q),Q),l.normalize(l.cross(u,Q,we),we),l.normalize(l.cross(Q,we,Ce),Ce),a[0]=we[0],a[1]=we[1],a[2]=we[2],a[3]=0,a[4]=Ce[0],a[5]=Ce[1],a[6]=Ce[2],a[7]=0,a[8]=Q[0],a[9]=Q[1],a[10]=Q[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function ie(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,Q),Q),l.normalize(l.cross(u,Q,we),we),l.normalize(l.cross(Q,we,Ce),Ce),a[0]=we[0],a[1]=we[1],a[2]=we[2],a[3]=0,a[4]=Ce[0],a[5]=Ce[1],a[6]=Ce[2],a[7]=0,a[8]=Q[0],a[9]=Q[1],a[10]=Q[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function me(r,m,u,p){const a=p??new o(16);return l.normalize(l.subtract(r,m,Q),Q),l.normalize(l.cross(u,Q,we),we),l.normalize(l.cross(Q,we,Ce),Ce),a[0]=we[0],a[1]=Ce[0],a[2]=Q[0],a[3]=0,a[4]=we[1],a[5]=Ce[1],a[6]=Q[1],a[7]=0,a[8]=we[2],a[9]=Ce[2],a[10]=Q[2],a[11]=0,a[12]=-(we[0]*r[0]+we[1]*r[1]+we[2]*r[2]),a[13]=-(Ce[0]*r[0]+Ce[1]*r[1]+Ce[2]*r[2]),a[14]=-(Q[0]*r[0]+Q[1]*r[1]+Q[2]*r[2]),a[15]=1,a}function ze(r,m){const u=m??new o(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=r[0],u[13]=r[1],u[14]=r[2],u[15]=1,u}function re(r,m,u){const p=u??new o(16),a=m[0],_=m[1],y=m[2],v=r[0],L=r[1],O=r[2],F=r[3],ae=r[1*4+0],Y=r[1*4+1],J=r[1*4+2],ve=r[1*4+3],xe=r[2*4+0],fe=r[2*4+1],be=r[2*4+2],De=r[2*4+3],ke=r[3*4+0],qe=r[3*4+1],Ze=r[3*4+2],We=r[3*4+3];return r!==p&&(p[0]=v,p[1]=L,p[2]=O,p[3]=F,p[4]=ae,p[5]=Y,p[6]=J,p[7]=ve,p[8]=xe,p[9]=fe,p[10]=be,p[11]=De),p[12]=v*a+ae*_+xe*y+ke,p[13]=L*a+Y*_+fe*y+qe,p[14]=O*a+J*_+be*y+Ze,p[15]=F*a+ve*_+De*y+We,p}function _e(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ge(r,m,u){const p=u??new o(16),a=r[4],_=r[5],y=r[6],v=r[7],L=r[8],O=r[9],F=r[10],ae=r[11],Y=Math.cos(m),J=Math.sin(m);return p[4]=Y*a+J*L,p[5]=Y*_+J*O,p[6]=Y*y+J*F,p[7]=Y*v+J*ae,p[8]=Y*L-J*a,p[9]=Y*O-J*_,p[10]=Y*F-J*y,p[11]=Y*ae-J*v,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function Te(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function le(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],y=r[0*4+2],v=r[0*4+3],L=r[2*4+0],O=r[2*4+1],F=r[2*4+2],ae=r[2*4+3],Y=Math.cos(m),J=Math.sin(m);return p[0]=Y*a-J*L,p[1]=Y*_-J*O,p[2]=Y*y-J*F,p[3]=Y*v-J*ae,p[8]=Y*L+J*a,p[9]=Y*O+J*_,p[10]=Y*F+J*y,p[11]=Y*ae+J*v,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function M(r,m){const u=m??new o(16),p=Math.cos(r),a=Math.sin(r);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function G(r,m,u){const p=u??new o(16),a=r[0*4+0],_=r[0*4+1],y=r[0*4+2],v=r[0*4+3],L=r[1*4+0],O=r[1*4+1],F=r[1*4+2],ae=r[1*4+3],Y=Math.cos(m),J=Math.sin(m);return p[0]=Y*a+J*L,p[1]=Y*_+J*O,p[2]=Y*y+J*F,p[3]=Y*v+J*ae,p[4]=Y*L-J*a,p[5]=Y*O-J*_,p[6]=Y*F-J*y,p[7]=Y*ae-J*v,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function w(r,m,u){const p=u??new o(16);let a=r[0],_=r[1],y=r[2];const v=Math.sqrt(a*a+_*_+y*y);a/=v,_/=v,y/=v;const L=a*a,O=_*_,F=y*y,ae=Math.cos(m),Y=Math.sin(m),J=1-ae;return p[0]=L+(1-L)*ae,p[1]=a*_*J+y*Y,p[2]=a*y*J-_*Y,p[3]=0,p[4]=a*_*J-y*Y,p[5]=O+(1-O)*ae,p[6]=_*y*J+a*Y,p[7]=0,p[8]=a*y*J+_*Y,p[9]=_*y*J-a*Y,p[10]=F+(1-F)*ae,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const i=w;function f(r,m,u,p){const a=p??new o(16);let _=m[0],y=m[1],v=m[2];const L=Math.sqrt(_*_+y*y+v*v);_/=L,y/=L,v/=L;const O=_*_,F=y*y,ae=v*v,Y=Math.cos(u),J=Math.sin(u),ve=1-Y,xe=O+(1-O)*Y,fe=_*y*ve+v*J,be=_*v*ve-y*J,De=_*y*ve-v*J,ke=F+(1-F)*Y,qe=y*v*ve+_*J,Ze=_*v*ve+y*J,We=y*v*ve-_*J,He=ae+(1-ae)*Y,Xe=r[0],nt=r[1],st=r[2],rt=r[3],Qe=r[4],Je=r[5],it=r[6],Fe=r[7],et=r[8],Ke=r[9],ut=r[10],tt=r[11];return a[0]=xe*Xe+fe*Qe+be*et,a[1]=xe*nt+fe*Je+be*Ke,a[2]=xe*st+fe*it+be*ut,a[3]=xe*rt+fe*Fe+be*tt,a[4]=De*Xe+ke*Qe+qe*et,a[5]=De*nt+ke*Je+qe*Ke,a[6]=De*st+ke*it+qe*ut,a[7]=De*rt+ke*Fe+qe*tt,a[8]=Ze*Xe+We*Qe+He*et,a[9]=Ze*nt+We*Je+He*Ke,a[10]=Ze*st+We*it+He*ut,a[11]=Ze*rt+We*Fe+He*tt,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const d=f;function b(r,m){const u=m??new o(16);return u[0]=r[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function g(r,m,u){const p=u??new o(16),a=m[0],_=m[1],y=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=y*r[2*4+0],p[9]=y*r[2*4+1],p[10]=y*r[2*4+2],p[11]=y*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function P(r,m){const u=m??new o(16);return u[0]=r,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=r,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(r,m,u){const p=u??new o(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:V,aim:ee,axisRotate:f,axisRotation:w,cameraAim:ie,clone:U,copy:R,create:h,determinant:ue,equals:I,equalsApproximately:K,fromMat3:x,fromQuat:k,frustum:Re,frustumReverseZ:Be,getAxis:pe,getScaling:de,getTranslation:se,identity:W,inverse:N,invert:j,lookAt:me,mul:$,mulScalar:A,multiply:Z,multiplyScalar:T,negate:B,ortho:Ie,perspective:Ee,perspectiveReverseZ:Ue,rotate:d,rotateX:ge,rotateY:le,rotateZ:G,rotation:i,rotationX:_e,rotationY:Te,rotationZ:M,scale:g,scaling:b,set:S,setAxis:oe,setTranslation:ce,translate:re,translation:ze,transpose:H,uniformScale:E,uniformScaling:P}}const qr=new Map;function Ml(o){let l=qr.get(o);return l||(l=kl(o),qr.set(o,l)),l}function Bl(o){const l=Jn(o);function h(M,G,w,i){const f=new o(4);return M!==void 0&&(f[0]=M,G!==void 0&&(f[1]=G,w!==void 0&&(f[2]=w,i!==void 0&&(f[3]=i)))),f}const S=h;function x(M,G,w,i,f){const d=f??new o(4);return d[0]=M,d[1]=G,d[2]=w,d[3]=i,d}function k(M,G,w){const i=w??new o(4),f=G*.5,d=Math.sin(f);return i[0]=d*M[0],i[1]=d*M[1],i[2]=d*M[2],i[3]=Math.cos(f),i}function B(M,G){const w=G??l.create(3),i=Math.acos(M[3])*2,f=Math.sin(i*.5);return f>Ae?(w[0]=M[0]/f,w[1]=M[1]/f,w[2]=M[2]/f):(w[0]=1,w[1]=0,w[2]=0),{angle:i,axis:w}}function V(M,G){const w=Ee(M,G);return Math.acos(2*w*w-1)}function T(M,G,w){const i=w??new o(4),f=M[0],d=M[1],b=M[2],g=M[3],P=G[0],E=G[1],r=G[2],m=G[3];return i[0]=f*m+g*P+d*r-b*E,i[1]=d*m+g*E+b*P-f*r,i[2]=b*m+g*r+f*E-d*P,i[3]=g*m-f*P-d*E-b*r,i}const A=T;function R(M,G,w){const i=w??new o(4),f=G*.5,d=M[0],b=M[1],g=M[2],P=M[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r+P*E,i[1]=b*r+g*E,i[2]=g*r-b*E,i[3]=P*r-d*E,i}function U(M,G,w){const i=w??new o(4),f=G*.5,d=M[0],b=M[1],g=M[2],P=M[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r-g*E,i[1]=b*r+P*E,i[2]=g*r+d*E,i[3]=P*r-b*E,i}function K(M,G,w){const i=w??new o(4),f=G*.5,d=M[0],b=M[1],g=M[2],P=M[3],E=Math.sin(f),r=Math.cos(f);return i[0]=d*r+b*E,i[1]=b*r-d*E,i[2]=g*r+P*E,i[3]=P*r-g*E,i}function I(M,G,w,i){const f=i??new o(4),d=M[0],b=M[1],g=M[2],P=M[3];let E=G[0],r=G[1],m=G[2],u=G[3],p=d*E+b*r+g*m+P*u;p<0&&(p=-p,E=-E,r=-r,m=-m,u=-u);let a,_;if(1-p>Ae){const y=Math.acos(p),v=Math.sin(y);a=Math.sin((1-w)*y)/v,_=Math.sin(w*y)/v}else a=1-w,_=w;return f[0]=a*d+_*E,f[1]=a*b+_*r,f[2]=a*g+_*m,f[3]=a*P+_*u,f}function W(M,G){const w=G??new o(4),i=M[0],f=M[1],d=M[2],b=M[3],g=i*i+f*f+d*d+b*b,P=g?1/g:0;return w[0]=-i*P,w[1]=-f*P,w[2]=-d*P,w[3]=b*P,w}function H(M,G){const w=G??new o(4);return w[0]=-M[0],w[1]=-M[1],w[2]=-M[2],w[3]=M[3],w}function N(M,G){const w=G??new o(4),i=M[0]+M[5]+M[10];if(i>0){const f=Math.sqrt(i+1);w[3]=.5*f;const d=.5/f;w[0]=(M[6]-M[9])*d,w[1]=(M[8]-M[2])*d,w[2]=(M[1]-M[4])*d}else{let f=0;M[5]>M[0]&&(f=1),M[10]>M[f*4+f]&&(f=2);const d=(f+1)%3,b=(f+2)%3,g=Math.sqrt(M[f*4+f]-M[d*4+d]-M[b*4+b]+1);w[f]=.5*g;const P=.5/g;w[3]=(M[d*4+b]-M[b*4+d])*P,w[d]=(M[d*4+f]+M[f*4+d])*P,w[b]=(M[b*4+f]+M[f*4+b])*P}return w}function ue(M,G,w,i,f){const d=f??new o(4),b=M*.5,g=G*.5,P=w*.5,E=Math.sin(b),r=Math.cos(b),m=Math.sin(g),u=Math.cos(g),p=Math.sin(P),a=Math.cos(P);switch(i){case"xyz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+r*m*p,d[1]=r*m*a-E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p+E*m*a,d[3]=r*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-r*m*p,d[1]=r*m*a+E*u*p,d[2]=r*u*p-E*m*a,d[3]=r*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${i}`)}return d}function j(M,G){const w=G??new o(4);return w[0]=M[0],w[1]=M[1],w[2]=M[2],w[3]=M[3],w}const Z=j;function $(M,G,w){const i=w??new o(4);return i[0]=M[0]+G[0],i[1]=M[1]+G[1],i[2]=M[2]+G[2],i[3]=M[3]+G[3],i}function ce(M,G,w){const i=w??new o(4);return i[0]=M[0]-G[0],i[1]=M[1]-G[1],i[2]=M[2]-G[2],i[3]=M[3]-G[3],i}const se=ce;function pe(M,G,w){const i=w??new o(4);return i[0]=M[0]*G,i[1]=M[1]*G,i[2]=M[2]*G,i[3]=M[3]*G,i}const oe=pe;function de(M,G,w){const i=w??new o(4);return i[0]=M[0]/G,i[1]=M[1]/G,i[2]=M[2]/G,i[3]=M[3]/G,i}function Ee(M,G){return M[0]*G[0]+M[1]*G[1]+M[2]*G[2]+M[3]*G[3]}function Ue(M,G,w,i){const f=i??new o(4);return f[0]=M[0]+w*(G[0]-M[0]),f[1]=M[1]+w*(G[1]-M[1]),f[2]=M[2]+w*(G[2]-M[2]),f[3]=M[3]+w*(G[3]-M[3]),f}function Ie(M){const G=M[0],w=M[1],i=M[2],f=M[3];return Math.sqrt(G*G+w*w+i*i+f*f)}const Re=Ie;function Be(M){const G=M[0],w=M[1],i=M[2],f=M[3];return G*G+w*w+i*i+f*f}const we=Be;function Ce(M,G){const w=G??new o(4),i=M[0],f=M[1],d=M[2],b=M[3],g=Math.sqrt(i*i+f*f+d*d+b*b);return g>1e-5?(w[0]=i/g,w[1]=f/g,w[2]=d/g,w[3]=b/g):(w[0]=0,w[1]=0,w[2]=0,w[3]=1),w}function Q(M,G){return Math.abs(M[0]-G[0])<Ae&&Math.abs(M[1]-G[1])<Ae&&Math.abs(M[2]-G[2])<Ae&&Math.abs(M[3]-G[3])<Ae}function ee(M,G){return M[0]===G[0]&&M[1]===G[1]&&M[2]===G[2]&&M[3]===G[3]}function ie(M){const G=M??new o(4);return G[0]=0,G[1]=0,G[2]=0,G[3]=1,G}const me=l.create(),ze=l.create(),re=l.create();function _e(M,G,w){const i=w??new o(4),f=l.dot(M,G);return f<-.999999?(l.cross(ze,M,me),l.len(me)<1e-6&&l.cross(re,M,me),l.normalize(me,me),k(me,Math.PI,i),i):f>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(M,G,me),i[0]=me[0],i[1]=me[1],i[2]=me[2],i[3]=1+f,Ce(i,i))}const ge=new o(4),Te=new o(4);function le(M,G,w,i,f,d){const b=d??new o(4);return I(M,i,f,ge),I(G,w,f,Te),I(ge,Te,2*f*(1-f),b),b}return{create:h,fromValues:S,set:x,fromAxisAngle:k,toAxisAngle:B,angle:V,multiply:T,mul:A,rotateX:R,rotateY:U,rotateZ:K,slerp:I,inverse:W,conjugate:H,fromMat:N,fromEuler:ue,copy:j,clone:Z,add:$,subtract:ce,sub:se,mulScalar:pe,scale:oe,divScalar:de,dot:Ee,lerp:Ue,length:Ie,len:Re,lengthSq:Be,lenSq:we,normalize:Ce,equalsApproximately:Q,equals:ee,identity:ie,rotationTo:_e,sqlerp:le}}const Wr=new Map;function Tl(o){let l=Wr.get(o);return l||(l=Bl(o),Wr.set(o,l)),l}function Dl(o){function l(w,i,f,d){const b=new o(4);return w!==void 0&&(b[0]=w,i!==void 0&&(b[1]=i,f!==void 0&&(b[2]=f,d!==void 0&&(b[3]=d)))),b}const h=l;function S(w,i,f,d,b){const g=b??new o(4);return g[0]=w,g[1]=i,g[2]=f,g[3]=d,g}function x(w,i){const f=i??new o(4);return f[0]=Math.ceil(w[0]),f[1]=Math.ceil(w[1]),f[2]=Math.ceil(w[2]),f[3]=Math.ceil(w[3]),f}function k(w,i){const f=i??new o(4);return f[0]=Math.floor(w[0]),f[1]=Math.floor(w[1]),f[2]=Math.floor(w[2]),f[3]=Math.floor(w[3]),f}function B(w,i){const f=i??new o(4);return f[0]=Math.round(w[0]),f[1]=Math.round(w[1]),f[2]=Math.round(w[2]),f[3]=Math.round(w[3]),f}function V(w,i=0,f=1,d){const b=d??new o(4);return b[0]=Math.min(f,Math.max(i,w[0])),b[1]=Math.min(f,Math.max(i,w[1])),b[2]=Math.min(f,Math.max(i,w[2])),b[3]=Math.min(f,Math.max(i,w[3])),b}function T(w,i,f){const d=f??new o(4);return d[0]=w[0]+i[0],d[1]=w[1]+i[1],d[2]=w[2]+i[2],d[3]=w[3]+i[3],d}function A(w,i,f,d){const b=d??new o(4);return b[0]=w[0]+i[0]*f,b[1]=w[1]+i[1]*f,b[2]=w[2]+i[2]*f,b[3]=w[3]+i[3]*f,b}function R(w,i,f){const d=f??new o(4);return d[0]=w[0]-i[0],d[1]=w[1]-i[1],d[2]=w[2]-i[2],d[3]=w[3]-i[3],d}const U=R;function K(w,i){return Math.abs(w[0]-i[0])<Ae&&Math.abs(w[1]-i[1])<Ae&&Math.abs(w[2]-i[2])<Ae&&Math.abs(w[3]-i[3])<Ae}function I(w,i){return w[0]===i[0]&&w[1]===i[1]&&w[2]===i[2]&&w[3]===i[3]}function W(w,i,f,d){const b=d??new o(4);return b[0]=w[0]+f*(i[0]-w[0]),b[1]=w[1]+f*(i[1]-w[1]),b[2]=w[2]+f*(i[2]-w[2]),b[3]=w[3]+f*(i[3]-w[3]),b}function H(w,i,f,d){const b=d??new o(4);return b[0]=w[0]+f[0]*(i[0]-w[0]),b[1]=w[1]+f[1]*(i[1]-w[1]),b[2]=w[2]+f[2]*(i[2]-w[2]),b[3]=w[3]+f[3]*(i[3]-w[3]),b}function N(w,i,f){const d=f??new o(4);return d[0]=Math.max(w[0],i[0]),d[1]=Math.max(w[1],i[1]),d[2]=Math.max(w[2],i[2]),d[3]=Math.max(w[3],i[3]),d}function ue(w,i,f){const d=f??new o(4);return d[0]=Math.min(w[0],i[0]),d[1]=Math.min(w[1],i[1]),d[2]=Math.min(w[2],i[2]),d[3]=Math.min(w[3],i[3]),d}function j(w,i,f){const d=f??new o(4);return d[0]=w[0]*i,d[1]=w[1]*i,d[2]=w[2]*i,d[3]=w[3]*i,d}const Z=j;function $(w,i,f){const d=f??new o(4);return d[0]=w[0]/i,d[1]=w[1]/i,d[2]=w[2]/i,d[3]=w[3]/i,d}function ce(w,i){const f=i??new o(4);return f[0]=1/w[0],f[1]=1/w[1],f[2]=1/w[2],f[3]=1/w[3],f}const se=ce;function pe(w,i){return w[0]*i[0]+w[1]*i[1]+w[2]*i[2]+w[3]*i[3]}function oe(w){const i=w[0],f=w[1],d=w[2],b=w[3];return Math.sqrt(i*i+f*f+d*d+b*b)}const de=oe;function Ee(w){const i=w[0],f=w[1],d=w[2],b=w[3];return i*i+f*f+d*d+b*b}const Ue=Ee;function Ie(w,i){const f=w[0]-i[0],d=w[1]-i[1],b=w[2]-i[2],g=w[3]-i[3];return Math.sqrt(f*f+d*d+b*b+g*g)}const Re=Ie;function Be(w,i){const f=w[0]-i[0],d=w[1]-i[1],b=w[2]-i[2],g=w[3]-i[3];return f*f+d*d+b*b+g*g}const we=Be;function Ce(w,i){const f=i??new o(4),d=w[0],b=w[1],g=w[2],P=w[3],E=Math.sqrt(d*d+b*b+g*g+P*P);return E>1e-5?(f[0]=d/E,f[1]=b/E,f[2]=g/E,f[3]=P/E):(f[0]=0,f[1]=0,f[2]=0,f[3]=0),f}function Q(w,i){const f=i??new o(4);return f[0]=-w[0],f[1]=-w[1],f[2]=-w[2],f[3]=-w[3],f}function ee(w,i){const f=i??new o(4);return f[0]=w[0],f[1]=w[1],f[2]=w[2],f[3]=w[3],f}const ie=ee;function me(w,i,f){const d=f??new o(4);return d[0]=w[0]*i[0],d[1]=w[1]*i[1],d[2]=w[2]*i[2],d[3]=w[3]*i[3],d}const ze=me;function re(w,i,f){const d=f??new o(4);return d[0]=w[0]/i[0],d[1]=w[1]/i[1],d[2]=w[2]/i[2],d[3]=w[3]/i[3],d}const _e=re;function ge(w){const i=w??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Te(w,i,f){const d=f??new o(4),b=w[0],g=w[1],P=w[2],E=w[3];return d[0]=i[0]*b+i[4]*g+i[8]*P+i[12]*E,d[1]=i[1]*b+i[5]*g+i[9]*P+i[13]*E,d[2]=i[2]*b+i[6]*g+i[10]*P+i[14]*E,d[3]=i[3]*b+i[7]*g+i[11]*P+i[15]*E,d}function le(w,i,f){const d=f??new o(4);return Ce(w,d),j(d,i,d)}function M(w,i,f){const d=f??new o(4);return oe(w)>i?le(w,i,d):ee(w,d)}function G(w,i,f){const d=f??new o(4);return W(w,i,.5,d)}return{create:l,fromValues:h,set:S,ceil:x,floor:k,round:B,clamp:V,add:T,addScaled:A,subtract:R,sub:U,equalsApproximately:K,equals:I,lerp:W,lerpV:H,max:N,min:ue,mulScalar:j,scale:Z,divScalar:$,inverse:ce,invert:se,dot:pe,length:oe,len:de,lengthSq:Ee,lenSq:Ue,distance:Ie,dist:Re,distanceSq:Be,distSq:we,normalize:Ce,negate:Q,copy:ee,clone:ie,multiply:me,mul:ze,divide:re,div:_e,zero:ge,transformMat4:Te,setLength:le,truncate:M,midpoint:G}}const jr=new Map;function Al(o){let l=jr.get(o);return l||(l=Dl(o),jr.set(o,l)),l}function zs(o,l,h,S,x,k){return{mat3:El(o),mat4:Ml(l),quat:Tl(h),vec2:ii(S),vec3:Jn(x),vec4:Al(k)}}const{mat3:wt,mat4:ct,quat:pt,vec2:Hr,vec3:z,vec4:jc}=zs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);zs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);zs(yl,Array,Array,Array,Array,Array);const Kr=document.querySelector("#log");let _t=null,nn=null;function oi(){if(_t)return _t;_t=document.createElement("div"),_t.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",_t.appendChild(o),nn=document.createElement("div"),nn.className="ply-spinner-label",_t.appendChild(nn),_t.style.display="none",document.body.appendChild(_t),_t}function Is(o){oi(),nn&&o&&(nn.textContent=o),_t&&(_t.style.opacity="1",_t.style.display="flex")}function Gt(o){oi(),nn&&(nn.textContent=o)}function Mn(){if(!_t)return;const o=_t;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function ai(o,l){if(!Kr)return;const h=document.createElement("p");h.innerText=o,l&&Object.assign(h.style,l),Kr.appendChild(h)}async function Ct(o){console.log(o),ai(o)}async function Ll(o){console.error(o),ai(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let li;function ci(){li=performance.now()}function Yr(o){const l=performance.now()-li;Ct(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function zl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function Tn(o){return o+3&-4}const Il=2,Gl=3,Ul=5,Rl=6,Bn=7,Zn=8;function Vl(o){const l=new TextDecoder("ascii"),h=l.decode(new Uint8Array(o,0,4));if(h!=="NAT2")throw new Error(`NAT2 bad magic: '${h}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const S=new DataView(o),x=4,k=S.getUint32(x+0,!0),B=S.getUint32(x+4,!0),V=S.getUint32(x+8,!0),T=S.getUint32(x+12,!0),A=S.getUint32(x+16,!0),R=S.getFloat32(x+20,!0),U=S.getUint32(x+24,!0),K=S.getUint32(x+28,!0),I=S.getFloat32(x+32,!0),W=S.getFloat32(x+36,!0),H=S.getFloat32(x+40,!0),N=S.getUint32(x+44,!0),ue=S.getFloat32(x+48,!0),j=S.getFloat32(x+52,!0),Z=S.getUint32(x+56,!0),$=S.getUint32(x+60,!0),ce=$>0?$:1;if(K===Ul||K===Rl)throw new Error(`NAT2: paired-RVQ format=${K} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);if(K!==Il&&K!==Gl&&K!==Bn&&K!==Zn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7) or ASTC-codebook (8); got format=${K}`);if(k%4!==0||N%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${N}`);let se=x+64;const pe=(Z+1)*4,oe=new Uint32Array(o.slice(se,se+pe));se+=pe;let de;if(ce>1){const Q=(ce+1)*4;if(se+Q>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Q} from ${se})`);de=new Uint32Array(o.slice(se,se+Q)),se+=Q}else de=new Uint32Array([0,k]);let Ee=0;for(let Q=0;Q<ce;Q++){const ee=de[Q+1]-de[Q];ee>Ee&&(Ee=ee)}const Ue=A*4*4;if(se+Ue>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ue} more bytes from offset ${se}, have ${o.byteLength-se}`);const Ie=new Float32Array(o.slice(se,se+Ue));se+=Ue;const Re=new Float32Array(A*5);for(let Q=0;Q<A;Q++){const ee=Ie[Q*4+0],ie=Ie[Q*4+1],me=Ie[Q*4+2],ze=Ie[Q*4+3];let re=0;for(let M=1;M<=Z&&oe[M]<=ie;M++)re=M;let _e=0;for(let M=1;M<=ce&&de[M]<=ee;M++)_e=M;const ge=ie-oe[re],Te=ee-de[_e],le=_e*Z+re;Re[Q*5+0]=Te,Re[Q*5+1]=ge,Re[Q*5+2]=me,Re[Q*5+3]=ze,Re[Q*5+4]=le}let Be;const Ce=k/4*16;if(K===Bn||K===Zn){if(se+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Q=K===Bn?"BCCB":"ACCB",ee=l.decode(new Uint8Array(o,se,4));if(ee!==Q)throw new Error(`NAT2 typeD bad sub-magic: expected '${Q}' got '${ee}'`);const ie=S.getUint32(se+4,!0),me=S.getUint32(se+8,!0),ze=S.getUint32(se+12,!0),re=S.getUint32(se+16,!0),_e=S.getUint32(se+20,!0);if(ie!==1)throw new Error(`NAT2 BCCB unsupported version ${ie}`);if(ze!==B/4||re!==k/4||_e!==ze*re)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${B}, sub-header ${re}×${ze} (${_e} blocks)`);se+=24;const ge=me*16;if(se+ge>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${ge}, have ${o.byteLength-se})`);const Te=new Uint8Array(o,se,ge);se+=ge;const le=_e*2;if(se+le>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${le}, have ${o.byteLength-se})`);const M=new Uint16Array(o.slice(se,se+le));se+=le;const G=new Uint8Array(_e*16);for(let w=0;w<_e;w++){const i=M[w]*16;G.set(Te.subarray(i,i+16),w*16)}Be=G}else{let Q=0;for(let ee=0;ee<Z;ee++){const ie=oe[ee+1]-oe[ee];if(ie%4!==0)throw new Error(`NAT2 BC7 layer ${ee} rows ${ie} not 4-aligned`);Q+=ie/4*Ce}if(se+Q>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Q} more bytes from offset ${se}, have ${o.byteLength-se}`);Be=new Uint8Array(o.slice(se,se+Q))}return{width:k,height:B,channels:V,kernel_type:T,num_rects:A,uv_extent:R,sb_number:U,format:K,sh_bias:I,res_bias:W,compact_mult:H,layer_h:N,atlas_scale:ue,atlas_offset:j,n_layers:Z,n_cols:ce,layer_cuts:oe,column_cuts:de,slice_width:Ee,rects_expanded:Re,atlas_bytes:Be}}const Ol=32;function Fl(o,l,h){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let S,x,k,B;if(l.format===2||l.format===Bn){if(!o.features.has("texture-compression-bc"))return Ct(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;B=l.format===Bn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:S,view:x,sampler:k}=Zr(o,l,"bc7-rgba-unorm",B)}else if(l.format===3||l.format===Zn){if(!o.features.has("texture-compression-astc"))return Ct(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;B=l.format===Zn?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:S,view:x,sampler:k}=Zr(o,l,"astc-4x4-unorm",B)}else return Ct(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:V}=l,T=o.createBuffer({label:"atlas rects (5-stride)",size:Tn(V.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(T,0,V);const A=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ui(o,A,l,h),{texture:S,view:x,sampler:k,rectsBuffer:T,texParamsBuffer:A,meta:l}}function Zr(o,l,h,S){const{width:x,layer_h:k,n_layers:B,n_cols:V,layer_cuts:T,column_cuts:A,slice_width:R,atlas_bytes:U}=l,I=x/4*16,W=o.limits.maxTextureDimension2D;if(k>W||R>W)throw new Error(`⚠️  atlas slice dims ${R}x${k} exceed maxTextureDimension2D=${W}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const H=V*B;if(H>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${V} cols × ${B} layers = ${H} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const N=o.createTexture({label:S,size:{width:R,height:k,depthOrArrayLayers:H},mipLevelCount:1,sampleCount:1,dimension:"2d",format:h,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Z=0;Z<V;Z++){const $=A[Z]/4,ce=(A[Z+1]-A[Z])/4;for(let se=0;se<B;se++){const pe=T[se]/4,oe=(T[se+1]-T[se])/4,de=Z*B+se,Ee=pe*I+$*16;o.queue.writeTexture({texture:N,mipLevel:0,origin:{x:0,y:0,z:de},aspect:"all"},U,{offset:Ee,bytesPerRow:I,rowsPerImage:oe},{width:ce*4,height:oe*4,depthOrArrayLayers:1})}}const ue=N.createView({label:`${S} view`,dimension:"2d-array"}),j=o.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:N,view:ue,sampler:j}}function ui(o,l,h,S){const x=new ArrayBuffer(32),k=new Uint32Array(x),B=new Float32Array(x);k[0]=S?1:0,B[1]=h.atlas_scale,B[2]=h.atlas_offset,B[3]=h.res_bias,o.queue.writeBuffer(l,0,x)}async function Ms(o,l){Ct(`loading ply file from File... : ${o.name}`),Is("downloading PLY...");const h=await o.arrayBuffer();try{return await di(h,l)}finally{Mn()}}async function Nl(o,l){Ct(`loading ply file from URL... : ${o}`),Is("downloading PLY...");try{ci();const h=new URL(o,self.location.href).href;return await di({url:h},l)}finally{Mn()}}async function di(o,l){return new Promise((h,S)=>{const x=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});x.onmessage=k=>{var V,T,A,R,U,K,I,W,H,N,ue,j;const B=k.data;if((B==null?void 0:B.type)==="error"){Ll(`PLY worker error: ${B.message??"unknown error"}`),x.terminate(),S(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const Z=B.totalBytes,$=B.loadedBytes/(1024*1024),ce=Z?Z/(1024*1024):void 0,se=(B.speedBps??0)/(1024*1024),pe=Z?Math.min(99,Math.floor(B.loadedBytes/Z*100)):void 0,oe=ce?`total ${ce.toFixed(1)} MB`:"total -- MB",de=ce&&pe!==void 0?`${$.toFixed(1)} MB downloaded (${pe}%)`:`${$.toFixed(1)} MB downloaded`,Ee=`${se.toFixed(2)} MB/s`;Gt(`downloading PLY ...
${oe}, ${de}
${Ee}`);return}else if((B==null?void 0:B.type)==="fetched"){Ct(`💾 Fetched (${B.byteLength} bytes)`),Yr("Download"),Gt("parsing PLY..."),ci();return}else if((B==null?void 0:B.type)==="parse_progress"){const Z=B.total??0,$=B.read??0,ce=Z>0?Math.floor($/Z*100):0;Gt(`parsing PLY ...
${$}/${Z} surfels (${ce}%)`);return}else if((B==null?void 0:B.type)==="done"){const Z=B.num_points,$=B.K,ce=B.feature_mode??0,se=B.sh_bias,pe=B.kernel_type,oe=B.surfelBuffer,de=B.svParamsBuffer;Ct(`🪐 Total surfels: ${Z}, mode=${ce===1?"SB":"SV"}, K=${$}, sh_bias=${se}, kernel_type=${pe}`);const Ue=l.createBuffer({label:"surfel input buffer",size:Tn(Z*Ol),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ue,0,oe);const Ie=de.byteLength>0?de.byteLength:16,Re=l.createBuffer({label:ce===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Tn(Ie),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});de.byteLength>0&&l.queue.writeBuffer(Re,0,de),x.terminate(),Yr("Parse"),h({num_points:Z,K:$,feature_mode:ce,sh_bias:se,kernel_type:pe,surfel_buffer:Ue,surfel_data:new Float32Array(oe),sv_params_buffer:Re,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((T=(V=B.bbox)==null?void 0:V.min)==null?void 0:T[0])??-1)+(((R=(A=B.bbox)==null?void 0:A.max)==null?void 0:R[0])??1))/2,((((K=(U=B.bbox)==null?void 0:U.min)==null?void 0:K[1])??-1)+(((W=(I=B.bbox)==null?void 0:I.max)==null?void 0:W[1])??1))/2,((((N=(H=B.bbox)==null?void 0:H.min)==null?void 0:N[2])??-1)+(((j=(ue=B.bbox)==null?void 0:ue.max)==null?void 0:j[2])??1))/2]})}},x.onerror=k=>{x.terminate(),S(k)},o instanceof ArrayBuffer?(Gt("parsing PLY..."),x.postMessage({type:"start",plyBuffer:o},[o])):x.postMessage({type:"start_url",url:o.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(h,S){S(l)})($l,function(h){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class x{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class B extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class V extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class A extends k{constructor(e,t){super(e),this.index=t}}function R(n){return n}function U(n){return n==null}function K(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function I(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const W={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class H{static alreadyDisposed(){return new H({type:"alreadydisposed"})}static notBindable(){return new H({type:"notbindable"})}static propertyNotFound(e){return new H({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new H({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=W[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class N{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!N.isBindable(s))throw H.notBindable();if(!(e in s))throw H.propertyNotFound(e);s[e]=t}}class ue extends x{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class j{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Z="tp";function $(n){return(t,s)=>[Z,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ce(n,e){return t=>e(n(t))}function se(n){return n.rawValue}function pe(n,e){n.emitter.on("change",ce(se,e)),e(n.rawValue)}function oe(n,e,t){pe(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Ee(n,e){return t=>{de(n,e,t)}}function Ue(n,e){pe(n,t=>{e.textContent=t??""})}const Ie=$("btn");class Re{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ie()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ie("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ie("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Be{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Re(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class we{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,C)=>c===C,this.emitter=new j,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,C=this.rawValue_;this.equals_(C,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:C,rawValue:c,sender:this}))}}class Ce{constructor(e){this.emitter=new j,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function Q(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Ce(n):new we(n,e)}class ee{constructor(e){this.emitter=new j,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:Q(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new ee(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ie(n,e){const s=Object.keys(e).reduce((c,C)=>{if(c===void 0)return;const D=e[C],X=D(n[C]);return X.succeeded?Object.assign(Object.assign({},c),{[C]:X.value}):void 0},{});return s}function me(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function ze(n){return n===null?!1:typeof n=="object"}function re(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function _e(n){return{custom:e=>re(e)(n),boolean:re(e=>typeof e=="boolean"?e:void 0)(n),number:re(e=>typeof e=="number"?e:void 0)(n),string:re(e=>typeof e=="string"?e:void 0)(n),function:re(e=>typeof e=="function"?e:void 0)(n),constant:e=>re(t=>t===e?e:void 0)(n),raw:re(e=>e)(n),object:e=>re(t=>{if(ze(t))return ie(t,e)})(n),array:e=>re(t=>{if(Array.isArray(t))return me(t,e)})(n)}}const ge={optional:_e(!0),required:_e(!1)};function Te(n,e){const t=ge.required.object(e)(n);return t.succeeded?t.value:void 0}function le(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function M(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class G{constructor(e){this.value_=e}static create(e){return[new G(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const w=$("");function i(n,e){return Ee(n,w(void 0,e))}class f extends ee{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=G.create(Q(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const C=e??{};return new f(ee.createCore({disabled:(t=C.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=C.hidden)!==null&&s!==void 0?s:!1,parent:(c=C.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){pe(this.globalDisabled_,i(e,"disabled")),oe(this,"hidden",i(e,"hidden"))}bindDisabled(e){pe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){pe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=$(""),g={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class P{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,g[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,g[s]))})}),this.viewProps.handleDispose(()=>{M(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){le({key:"parent",target:f.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=y[e],t}function L(n,e,t){n.insertBefore(e,n.children[t])}function O(n){n.parentElement&&n.parentElement.removeChild(n)}function F(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ae(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Y(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const J=$("lbl");function ve(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,C)=>{C>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class xe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(J()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(J("l")),oe(t.props,"label",C=>{U(C)?this.element.classList.add(J(void 0,"nol")):(this.element.classList.remove(J(void 0,"nol")),ae(s),s.appendChild(ve(e,C)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(J("v")),this.element.appendChild(c),this.valueElement=c}}class fe extends P{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new xe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const be={id:"button",type:"blade",accept(n){const e=ge,t=Te(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new fe(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:new Be(n.document,{props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof fe)||!(n.controller.valueController instanceof Be)?null:new ue(n.controller)}};class De extends P{constructor(e){super(e),this.value=e.value}}function ke(){return new ee({positions:Q([],{equals:K})})}class qe extends ee{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=ee.createCore(t);return new qe(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!U(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};oe(this,"expanded",s),oe(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ze(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function We(n,e){e.style.height=n.styleHeight}function He(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),U(n.get("expandedHeight"))){const t=Ze(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{We(n,e)}),We(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Xe extends x{constructor(e,t){super(e),this.rackApi_=t}}function nt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function st(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function rt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Je{constructor(e){this.emitter=new j,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw H.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(C=>{this.cache_.add(C)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class it extends x{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Fe extends fe{constructor(e,t){super(e,t),this.binding=t.binding}}class et extends x{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new j,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new V(this,t,this.controller_.binding.target.presetKey)})}}class Ke extends fe{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof vt?n.apiSet_:n instanceof Xe?n.rackApi_.apiSet_:null}function tt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw H.shouldNeverHappen();return t}function xt(n,e,t){if(!N.isBindable(n))throw H.notBindable();return new N(n,e,t)}class vt extends x{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new j,this.apiSet_=new Je(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>tt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(C,xt(e,t,c.presetKey),c),X=new it(D);return this.add(X,c.index)}addMonitor(e,t,s){const c=s??{},C=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(C,xt(e,t),c),X=new et(D);return this.add(X,c.index)}addFolder(e){return st(this,e)}addButton(e){return nt(this,e)}addSeparator(e){return rt(this,e)}addTab(e){return Qe(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=tt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Fe){const s=tt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new B(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof De){const s=tt(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ke))throw H.shouldNeverHappen();const t=tt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new V(t,s.target.read(),s.target.presetKey)})}}class yt extends Xe{constructor(e,t){super(e,new vt(e.rackController,t)),this.emitter_=new j,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Pt extends P{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Mt{constructor(e,t){const s=$(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Et(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.binding===e)return s}return null}function Bt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ke&&s.binding===e)return s}return null}function Tt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof De&&s.value===e)return s}return null}function St(n){return n instanceof ne?n.rack:n instanceof Pt?n.rackController.rack:null}function te(n){const e=St(n);return e?e.bcSet_:null}class he{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new j,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Je(te),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),I(e,"parent")?e.parent=this:(e.parent_=this,le({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){I(e,"parent")?e.parent=null:(e.parent_=null,le({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Fe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof De)s.value.emitter.on("change",this.onChildValueChange_);else{const c=St(s);if(c){const C=c.emitter;C.on("layout",this.onDescendantLayout_),C.on("inputchange",this.onDescendantInputChange_),C.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Fe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ke)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof De)s.value.emitter.off("change",this.onChildValueChange_);else{const c=St(s);if(c){const C=c.emitter;C.off("layout",this.onDescendantLayout_),C.off("inputchange",this.onDescendantInputChange_),C.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const C=[];c===t&&(C.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&C.push("veryfirst")),c===s&&(C.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&C.push("verylast")),c.blade.set("positions",C)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Et(this.find(Fe),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Bt(this.find(Ke),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Tt(this.find(De),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class ne extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Mt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new he({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&L(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&O(e.bladeController.view.element)}}const Le=$("cnt");class Ve{constructor(e,t){var s;this.className_=$((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Le()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),oe(this.foldable_,"completed",Ee(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),oe(t.props,"title",Se=>{U(Se)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const C=e.createElement("div");C.classList.add(this.className_("i")),this.element.appendChild(C);const D=e.createElement("div");D.classList.add(this.className_("t")),Ue(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const X=e.createElement("div");X.classList.add(this.className_("m")),this.buttonElement.appendChild(X);const Pe=t.containerElement;Pe.classList.add(this.className_("c")),this.element.appendChild(Pe),this.containerElement=Pe}}class ye extends Pt{constructor(e,t){var s;const c=qe.create((s=t.expanded)!==null&&s!==void 0?s:!0),C=new ne(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:C,view:new Ve(e,{containerElement:C.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,He(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Me={id:"folder",type:"blade",accept(n){const e=ge,t=Te(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new ye(n.document,{blade:n.blade,expanded:n.params.expanded,props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof ye?new yt(n.controller,n.pool):null}};class Oe extends De{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new xe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class je extends x{}const ot=$("spr");class mt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ot()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(ot("r")),this.element.appendChild(s)}}class Dn extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new mt(e,{viewProps:t.viewProps})}))}}const An={id:"separator",type:"blade",accept(n){const t=Te(n,{view:ge.required.constant("separator")});return t?{params:t}:null},controller(n){return new Dn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Dn?new je(n.controller):null}},Ut=$("tbi");class ts{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ut()),t.viewProps.bindClassModifiers(this.element),oe(t.props,"selected",C=>{C?this.element.classList.add(Ut(void 0,"sel")):this.element.classList.remove(Ut(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Ut("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ut("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class Ln{constructor(e,t){this.emitter=new j,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ts(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class zn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ln(e,{props:t.itemProps,viewProps:f.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new ne(e,{blade:ke(),viewProps:f.create()}),this.props=t.props,oe(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class In{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class hn extends Xe{constructor(e,t){super(e,new vt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new j,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw H.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new zn(t,{itemProps:ee.fromObject({selected:!1,title:e.title}),props:ee.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw H.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw H.shouldNeverHappen();const s=new In(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw H.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const Gn=-1;class Un{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Q(!0),this.selectedIndex=Q(Gn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Gn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const at=$("tab");class Wt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(at(),Le()),t.viewProps.bindClassModifiers(this.element),pe(t.empty,Ee(this.element,at(void 0,"nop")));const s=e.createElement("div");s.classList.add(at("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(at("i")),this.element.appendChild(c);const C=t.contentsElement;C.classList.add(at("c")),this.element.appendChild(C),this.contentsElement=C}}class jt extends Pt{constructor(e,t){const s=new ne(e,{blade:t.blade,viewProps:t.viewProps}),c=new Un;super({blade:t.blade,rackController:s,view:new Wt(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Je(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;L(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;O(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const kt={id:"tab",type:"blade",accept(n){const e=ge,t=Te(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new jt(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new zn(n.document,{itemProps:ee.fromObject({selected:!1,title:t.title}),props:ee.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof jt?new hn(n.controller,n.pool):null}};function sn(n,e){const t=n.accept(e.params);if(!t)return null;const s=ge.optional.boolean(e.params.disabled).value,c=ge.optional.boolean(e.params.hidden).value;return n.controller({blade:ke(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:f.create({disabled:s,hidden:c})})}class rn{constructor(){this.disabled=!1,this.emitter=new j}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ns{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new j,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class fn{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new j,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Us(n,e){for(;n.length<e;)n.push(void 0)}function Si(n){const e=[];return Us(e,n),Q(e)}function Ci(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Ei(n,e){const t=[...Ci(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Us(t,n.length),t}class ki{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new j,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Ei(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class _n{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Dt(n,e){if(n instanceof e)return n;if(n instanceof _n){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class on{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class mn{constructor(e){this.values=ee.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Rs{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return U(s)||(c=Math.max(c,s)),U(t)||(c=Math.min(c,t)),c}}class Rn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const ss=$("lst");class Mi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(ss()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(ss("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(ss("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,oe(this.props_,"options",C=>{F(this.selectElement),C.forEach(D=>{const X=e.createElement("option");X.textContent=D.text,this.selectElement.appendChild(X)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class vn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Vs=$("pop");class Bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element),pe(t.shows,Ee(this.element,Vs(void 0,"v")))}}class Os{constructor(e,t){this.shows=Q(!1),this.viewProps=t.viewProps,this.view=new Bi(e,{shows:this.shows,viewProps:this.viewProps})}}const Fs=$("txt");class Ti{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Fs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Fs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Vn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ti(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);U(c)||(this.value.rawValue=c),this.view.refresh()}}function Di(n){return String(n)}function Ns(n){return n==="false"?!1:!!n}function $s(n){return Di(n)}class Ai{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Li={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class zi{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ii={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ii[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function rs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function bn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function gn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ri(n,e){const t=gn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=gn(n,e);return c===""?"":s+c}function is(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ri(n,e);return s===""?"":t+s}function qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ui(n,e);return e+=s.length,s===""?"":s+gn(n,e)}function Vi(n,e){const t=qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=gn(n,e);return e+=c.length,t+s+c+is(n,e)}function Oi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=gn(n,e);return e+=s.length,s===""?"":t+s+is(n,e)}function Fi(n,e){const t=qs(n,e);return e+=t.length,t===""?"":t+is(n,e)}const Ni=rs([Vi,Oi,Fi]);function $i(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function qi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$i(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Wi(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Yi=rs([qi,ji,Ki]),Zi=rs([Yi,Ni]);function Xi(n,e){const t=Zi(n,e);return e+=t.length,t===""?null:{evaluable:new Ai(t),cursor:e}}function Qi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=js(n,e);if(!s)return null;e=s.cursor,e+=bn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Ji(n,e){var t;return(t=Xi(n,e))!==null&&t!==void 0?t:Qi(n,e)}function Ws(n,e){const t=Ji(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Ws(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gi(s,c.evaluable)}):null}function eo(n,e,t){t+=bn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=bn(e,t).length,{cursor:t,operator:s}):null}function to(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let C=c.evaluable;for(;;){const D=eo(e,t,s);if(!D)break;s=D.cursor;const X=n(t,s);if(!X)return null;s=X.cursor,C=new zi(D.operator,C,X.evaluable)}return C?{cursor:s,evaluable:C}:null}}const no=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>to(n,e),Ws);function js(n,e){return e+=bn(n,e).length,no(n,e)}function so(n){const e=js(n,0);return!e||e.cursor+bn(n,e.cursor).length!==n.length?null:e.evaluable}function At(n){var e;const t=so(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Hs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=At(n);if(!U(e))return e}return 0}function ro(n){return String(n)}function dt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const io=dt(0);function On(n){return io(n)+"%"}function Ks(n){return String(n)}function os(n){return n}function wn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function C(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{C(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{C(()=>{n.setRawValue(s(n,e),D.options)}),C(()=>{e.setRawValue(t(n,e),D.options)})}),C(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function ft(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function xn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Lt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function oo(n){return n==="ArrowUp"||n==="ArrowDown"}function Ys(n){return oo(n)||n==="ArrowLeft"||n==="ArrowRight"}function as(n,e){var t,s;const c=e.ownerDocument.defaultView,C=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+C.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+C.top)}}class Ht{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new j,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(as(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(as(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(as(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ye(n,e,t,s,c){const C=(n-e)/(t-e);return s+C*(c-s)}function Zs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function lt(n,e,t){return Math.min(Math.max(n,e),t)}function Xs(n,e){return(n%e+e)%e}const bt=$("txt");class ao{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(bt(),bt(void 0,"num")),t.arrayPosition&&this.element.classList.add(bt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(bt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(bt()),this.inputElement.classList.add(bt("i"));const c=e.createElement("div");c.classList.add(bt("k")),this.element.appendChild(c),this.knobElement=c;const C=e.createElementNS(E,"svg");C.classList.add(bt("g")),this.knobElement.appendChild(C);const D=e.createElementNS(E,"path");D.classList.add(bt("gb")),C.appendChild(D),this.guideBodyElem_=D;const X=e.createElementNS(E,"path");X.classList.add(bt("gh")),C.appendChild(X),this.guideHeadElem_=X;const Pe=e.createElement("div");Pe.classList.add($("tt")()),this.knobElement.appendChild(Pe),this.tooltipElem_=Pe,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(bt(void 0,"drg"));return}this.element.classList.add(bt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=lt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const C=this.props_.get("formatter");this.tooltipElem_.textContent=C(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class yn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=Q(null),this.view=new ao(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Ht(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),C=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),C!==void 0&&(D=Math.min(D,C)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);U(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=ft(this.baseStep_,xn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){ft(this.baseStep_,xn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ls=$("sld");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ls()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ls("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(ls("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=lt(Ye(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ye(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ft(this.baseStep_,Lt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){ft(this.baseStep_,Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const cs=$("sldtxt");class uo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(cs());const s=e.createElement("div");s.classList.add(cs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(cs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class us{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new yn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new uo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Pn(n,e){n.write(e)}function Fn(n){const e=ge;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Qs(n){if(n==="inline"||n==="popup")return n}function Rt(n){const e=ge;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Js(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ds(n){return U(n)?null:new mn(Js(n))}function po(n){const e=n?Dt(n,Rn):null;return e?e.step:null}function Nn(n,e){const t=n&&Dt(n,Rn);return t?Zs(t.step):Math.max(Zs(e),2)}function an(n){const e=po(n);return e??1}function ln(n,e){var t;const s=n&&Dt(n,Rn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const $n=$("ckb");class ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add($n()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add($n("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add($n("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const C=e.createElement("div");C.classList.add($n("w")),s.appendChild(C);const D=v(e,"check");C.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function _o(n){const e=[],t=ds(n.options);return t&&e.push(t),new _n(e)}const mo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{options:ge.optional.custom(Fn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ns,constraint:n=>_o(n.params),writer:n=>Pn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Dt(s,mn);return c?new vn(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new fo(e,{value:t,viewProps:n.viewProps})}},Kt=$("col");class vo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Kt()),t.foldable.bindExpandedClass(this.element,Kt(void 0,"expanded")),oe(t.foldable,"completed",Ee(this.element,Kt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Kt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Kt("s")),s.appendChild(c),this.swatchElement=c;const C=e.createElement("div");if(C.classList.add(Kt("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Kt("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function bo(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),C=lt(t/255,0,1),D=Math.max(s,c,C),X=Math.min(s,c,C),Pe=D-X;let Se=0,Ne=0;const $e=(X+D)/2;return Pe!==0&&(Ne=Pe/(1-Math.abs(D+X-1)),s===D?Se=(c-C)/Pe:c===D?Se=2+(C-s)/Pe:Se=4+(s-c)/Pe,Se=Se/6+(Se<0?1:0)),[Se*360,Ne*100,$e*100]}function go(n,e,t){const s=(n%360+360)%360,c=lt(e/100,0,1),C=lt(t/100,0,1),D=(1-Math.abs(2*C-1))*c,X=D*(1-Math.abs(s/60%2-1)),Pe=C-D/2;let Se,Ne,$e;return s>=0&&s<60?[Se,Ne,$e]=[D,X,0]:s>=60&&s<120?[Se,Ne,$e]=[X,D,0]:s>=120&&s<180?[Se,Ne,$e]=[0,D,X]:s>=180&&s<240?[Se,Ne,$e]=[0,X,D]:s>=240&&s<300?[Se,Ne,$e]=[X,0,D]:[Se,Ne,$e]=[D,0,X],[(Se+Pe)*255,(Ne+Pe)*255,($e+Pe)*255]}function wo(n,e,t){const s=lt(n/255,0,1),c=lt(e/255,0,1),C=lt(t/255,0,1),D=Math.max(s,c,C),X=Math.min(s,c,C),Pe=D-X;let Se;Pe===0?Se=0:D===s?Se=60*(((c-C)/Pe%6+6)%6):D===c?Se=60*((C-s)/Pe+2):Se=60*((s-c)/Pe+4);const Ne=D===0?0:Pe/D,$e=D;return[Se,Ne*100,$e*100]}function er(n,e,t){const s=Xs(n,360),c=lt(e/100,0,1),C=lt(t/100,0,1),D=C*c,X=D*(1-Math.abs(s/60%2-1)),Pe=C-D;let Se,Ne,$e;return s>=0&&s<60?[Se,Ne,$e]=[D,X,0]:s>=60&&s<120?[Se,Ne,$e]=[X,D,0]:s>=120&&s<180?[Se,Ne,$e]=[0,D,X]:s>=180&&s<240?[Se,Ne,$e]=[0,X,D]:s>=240&&s<300?[Se,Ne,$e]=[X,0,D]:[Se,Ne,$e]=[D,0,X],[(Se+Pe)*255,(Ne+Pe)*255,($e+Pe)*255]}function xo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Yt(n){return[n[0],n[1],n[2]]}function tr(n,e){return[n[0],n[1],n[2],e]}const Po={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:xo,rgb:go},hsv:{hsl:yo,hsv:(n,e,t)=>[n,e,t],rgb:er},rgb:{hsl:bo,hsv:wo,rgb:(n,e,t)=>[n,e,t]}};function qn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function So(n,e){return n===e?e:Xs(n,e)}function Co(n,e,t){var s;const c=qn(e,t);return[e==="rgb"?lt(n[0],0,c[0]):So(n[0],c[0]),lt(n[1],0,c[1]),lt(n[2],0,c[2]),lt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function nr(n,e,t,s){const c=qn(e,t),C=qn(e,s);return n.map((D,X)=>D/c[X]*C[X])}function Eo(n,e,t){const s=nr(n,e.mode,e.type,"int"),c=Po[e.mode][t.mode](...s);return nr(c,t.mode,"int",t.type)}function Wn(n,e){return typeof n!="object"||U(n)?!1:e in n&&typeof n[e]=="number"}class Ge{static black(e="int"){return new Ge([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ge(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Wn(e,"r")&&Wn(e,"g")&&Wn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Wn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let C=0;C<s.length;C++)if(s[C]!==c[C])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Co(e,t,s)}getComponents(e,t="int"){return tr(Eo(Yt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Vt=$("colp");class ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Vt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Vt("hsv"));const c=e.createElement("div");c.classList.add(Vt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const C=e.createElement("div");C.classList.add(Vt("h")),this.hPaletteView_=t.hPaletteView,C.appendChild(this.hPaletteView_.element),s.appendChild(C),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Vt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const X=e.createElement("div");X.classList.add(Vt("a"));const Pe=e.createElement("div");Pe.classList.add(Vt("ap")),Pe.appendChild(this.alphaViews_.palette.element),X.appendChild(Pe);const Se=e.createElement("div");Se.classList.add(Vt("at")),Se.appendChild(this.alphaViews_.text.element),X.appendChild(Se),this.element.appendChild(X)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function ps(n){const e=ge;return Te(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(Qs)})}function Zt(n){return n?.1:1}function Xt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Bo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function gt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const To={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function sr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return To[s](t)}function rr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[gt(e[1],255),gt(e[2],255),gt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ir(n){return e=>{const t=rr(e);return t?new Ge(t,"rgb",n):null}}function or(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[gt(e[1],255),gt(e[2],255),gt(e[3],255),gt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ar(n){return e=>{const t=or(e);return t?new Ge(t,"rgb",n):null}}function lr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[sr(e[1]),gt(e[2],100),gt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function cr(n){return e=>{const t=lr(e);return t?new Ge(t,"hsl",n):null}}function ur(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[sr(e[1]),gt(e[2],100),gt(e[3],100),gt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ge(t,"hsl",n):null}}function pr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=pr(n);return e?new Ge(e,"rgb","int"):null}function hr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ye(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ye(parseInt(t[4],16),0,255,0,1)]:null}function Ao(n){const e=hr(n);return e?new Ge(e,"rgb","int"):null}function fr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ge(t,"rgb",n):null}}function mr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ge(t,"rgb",n):null}}const Lo=[{parser:pr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:hr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:rr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:or,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:lr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ur,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:fr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:mr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function zo(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function hs(n,e="int"){const t=zo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const br={int:[Do,Ao,ir("int"),ar("int"),cr("int"),dr("int"),_r("int"),vr("int")],float:[ir("float"),ar("float"),cr("float"),dr("float"),_r("float"),vr("float")]};function Io(n){const e=br[n];return t=>{if(typeof t!="string")return Ge.black(n);const s=e.reduce((c,C)=>c||C(t),null);return s??Ge.black(n)}}function fs(n){const e=br[n];return t=>e.reduce((s,c)=>s||c(t),null)}function gr(n){const e=lt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function wr(n,e="#"){const t=Yt(n.getComponents("rgb")).map(gr).join("");return`${e}${t}`}function _s(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(gr).join("");return`${e}${s}`}function xr(n,e){const t=dt(e==="float"?2:0);return`rgb(${Yt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>xr(e,n)}function jn(n,e){const t=dt(2),s=dt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((C,D)=>(D===3?t:s)(C)).join(", ")})`}function Uo(n){return e=>jn(e,n)}function Ro(n){const e=[dt(0),On,On];return`hsl(${Yt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Vo(n){const e=[dt(0),On,On,dt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function yr(n,e){const t=dt(e==="float"?2:0),s=["r","g","b"];return`{${Yt(n.getComponents("rgb",e)).map((C,D)=>`${s[D]}: ${t(C)}`).join(", ")}}`}function Oo(n){return e=>yr(e,n)}function Pr(n,e){const t=dt(2),s=dt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,X)=>{const Pe=X===3?t:s;return`${c[X]}: ${Pe(D)}`}).join(", ")}}`}function Fo(n){return e=>Pr(e,n)}const No=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:wr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:_s},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ro},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)}],[])];function ms(n){return No.reduce((e,t)=>e||(Bo(t.format,n)?t.stringifier:null),null)}const Sn=$("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Sn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Sn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Sn("c")),s.appendChild(c),this.colorElem_=c;const C=e.createElement("div");C.classList.add(Sn("m")),this.element.appendChild(C),this.markerElem_=C;const D=e.createElement("div");D.classList.add(Sn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ge([t[0],t[1],t[2],0],"rgb"),c=new Ge([t[0],t[1],t[2],255],"rgb"),C=["to right",jn(s),jn(c)];this.colorElem_.style.background=`linear-gradient(${C.join(",")})`,this.previewElem_.style.backgroundColor=jn(e);const D=Ye(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[C,D,X]=c.getComponents("hsv");this.value.setRawValue(new Ge([C,D,X,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ft(Zt(!0),Lt(e));if(t===0)return;const s=this.value.rawValue,[c,C,D,X]=s.getComponents("hsv");this.value.setRawValue(new Ge([c,C,D,X+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){ft(Zt(!0),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const cn=$("coltxt");function Wo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const C=n.createElement("option");return C.textContent=c.text,C.value=c.value,s.appendChild(C),s},n.createDocumentFragment())),e}class jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(cn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(cn("m")),this.modeElem_=Wo(e),this.modeElem_.classList.add(cn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(cn("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const C=e.createElement("div");C.classList.add(cn("w")),this.element.appendChild(C),this.textsElem_=C,this.textViews_=t.textViews,this.applyTextViews_(),pe(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){F(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(cn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return dt(n==="float"?2:0)}function Ko(n,e,t){const s=qn(n,e)[t];return new on({min:0,max:s})}function vs(n,e,t){return new yn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Zt(!1),parser:e.parser,props:ee.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:Q(0,{constraint:Ko(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Yo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=Q(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new jo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[vs(e,t,0),vs(e,t,1),vs(e,t,2)];return s.forEach((c,C)=>{wn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[C],backward:(D,X)=>{const Pe=this.colorMode.rawValue,Se=D.rawValue.getComponents(Pe,this.colorType_);return Se[C]=X.rawValue,new Ge(tr(Yt(Se),Se[3]),Pe,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const bs=$("hpl");class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(bs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(bs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(bs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=xr(new Ge([t,100,100],"hsv"));const s=Ye(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ye(lt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,C,D,X]=c.getComponents("hsv");this.value.setRawValue(new Ge([s,C,D,X],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=ft(Zt(!1),Lt(e));if(t===0)return;const s=this.value.rawValue,[c,C,D,X]=s.getComponents("hsv");this.value.setRawValue(new Ge([c+t,C,D,X],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){ft(Zt(!1),Lt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const gs=$("svp"),Sr=64;class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(gs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Sr,s.width=Sr,s.classList.add(gs("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(gs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,C=this.canvasElement.height,D=e.getImageData(0,0,c,C),X=D.data;for(let Ne=0;Ne<C;Ne++)for(let $e=0;$e<c;$e++){const Qt=Ye($e,0,c,0,100),En=Ye(Ne,0,C,100,0),kn=er(s[0],Qt,En),Hn=(Ne*c+$e)*4;X[Hn]=kn[0],X[Hn+1]=kn[1],X[Hn+2]=kn[2],X[Hn+3]=255}e.putImageData(D,0,0);const Pe=Ye(s[1],0,100,0,100);this.markerElem_.style.left=`${Pe}%`;const Se=Ye(s[2],0,100,100,0);this.markerElem_.style.top=`${Se}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ye(e.point.x,0,e.bounds.width,0,100),c=Ye(e.point.y,0,e.bounds.height,100,0),[C,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ge([C,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ys(e.key)&&e.preventDefault();const[t,s,c,C]=this.value.rawValue.getComponents("hsv"),D=Zt(!1),X=ft(D,Lt(e)),Pe=ft(D,xn(e));X===0&&Pe===0||this.value.setRawValue(new Ge([t,s+X,c+Pe,C],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Zt(!1),s=ft(t,Lt(e)),c=ft(t,xn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new qo(e,{value:this.value,viewProps:this.viewProps}),text:new yn(e,{parser:At,baseStep:.1,props:ee.fromObject({draggingScale:.01,formatter:dt(2)}),value:Q(0,{constraint:new on({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&wn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const C=s.rawValue.getComponents();return C[3]=c.rawValue,new Ge(C,s.rawValue.mode)}}),this.textC_=new Yo(e,{colorType:t.colorType,parser:At,value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ws=$("colsw");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ws()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ws("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ws("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=_s(e)}onValueChange_(){this.update_()}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps})}}class xs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.swatchC_=new na(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Vn(e,{parser:t.parser,props:ee.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new vo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Os(e,{viewProps:this.viewProps}):null;const c=new ea(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(C=>{C.addEventListener("blur",this.onPopupChildBlur_),C.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),wn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:C=>C.rawValue,backward:(C,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),He(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Y(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sa(n,e){return Ge.isColorObject(n)?Ge.fromObject(n,e):Ge.black(e)}function ra(n){return Yt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ia(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function oa(n){return new Ge([n>>16&255,n>>8&255,n&255],"rgb")}function aa(n){return new Ge([n>>24&255,n>>16&255,n>>8&255,Ye(n&255,0,255,0,1)],"rgb")}function la(n){return typeof n!="number"?Ge.black():oa(n)}function ca(n){return typeof n!="number"?Ge.black():aa(n)}function ua(n){const e=ms(n);return e?(t,s)=>{Pn(t,e(s))}:null}function da(n){const e=n?ia:ra;return(t,s)=>{Pn(t,e(s))}}function pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function fa(n,e){return(t,s)=>{n?pa(t,s,e):ha(t,s,e)}}function ys(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function _a(n){return n?e=>_s(e,"0x"):e=>wr(e,"0x")}function ma(n){return"color"in n||"view"in n&&n.view==="color"}const va={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ma(e))return null;const t=ps(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ys(n.params)?ca:la,equals:Ge.equals,writer:n=>da(ys(n.params))},controller:n=>{const e=ys(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new xs(n.document,{colorType:"int",expanded:t??!1,formatter:_a(e),parser:fs("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ba(n){return Ge.isRgbaColorObject(n)}function ga(n){return e=>sa(e,n)}function wa(n,e){return t=>n?Pr(t,e):yr(t,e)}const xa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ge.isColorObject(n))return null;const t=ps(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ga(Xt(n.params)),equals:Ge.equals,writer:n=>fa(ba(n.initialValue),Xt(n.params))},controller:n=>{var e;const t=Ge.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,C=(e=Xt(n.params))!==null&&e!==void 0?e:"int";return new xs(n.document,{colorType:C,expanded:s??!1,formatter:wa(t,C),parser:fs(C),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=hs(n,Xt(e));if(!t||!ms(t))return null;const c=ps(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Io((e=Xt(n.params))!==null&&e!==void 0?e:"int")},equals:Ge.equals,writer:n=>{const e=hs(n.initialValue,Xt(n.params));if(!e)throw H.shouldNeverHappen();const t=ua(e);if(!t)throw H.notBindable();return t}},controller:n=>{const e=hs(n.initialValue,Xt(n.params));if(!e)throw H.shouldNeverHappen();const t=ms(e);if(!t)throw H.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new xs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:fs(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Ot{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var C,D;return(D=(C=this.components[c])===null||C===void 0?void 0:C.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const Cr=$("pndtxt");class Pa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Cr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Cr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Sa(n,e,t){return new yn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:Q(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Ps{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Sa(e,t,c)),this.acs_.forEach((s,c)=>{wn({primary:this.value,secondary:s.value,forward:C=>t.assembly.toComponents(C.rawValue)[c],backward:(C,D)=>{const X=t.assembly.toComponents(C.rawValue);return X[c]=D.rawValue,t.assembly.fromComponents(X)}})}),this.view=new Pa(e,{textViews:this.acs_.map(s=>s.view)})}}function Er(n,e){return"step"in n&&!U(n.step)?new Rn(n.step,e):null}function kr(n){return!U(n.max)&&!U(n.min)?new on({max:n.max,min:n.min}):!U(n.max)||!U(n.min)?new Rs({max:n.max,min:n.min}):null}function Ca(n){const e=Dt(n,on);if(e)return[e.values.get("min"),e.values.get("max")];const t=Dt(n,Rs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ea(n,e){const t=[],s=Er(n,e);s&&t.push(s);const c=kr(n);c&&t.push(c);const C=ds(n.options);return C&&t.push(C),new _n(t)}const ka={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ge,s=Te(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Fn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs,constraint:n=>Ea(n.params,n.initialValue),writer:n=>Pn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Dt(s,mn);if(c)return new vn(n.document,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const C=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:dt(Nn(s,t.rawValue)),D=s&&Dt(s,on);return D?new us(n.document,{baseStep:an(s),parser:At,sliderProps:new ee({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:ee.fromObject({draggingScale:ln(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps}):new yn(n.document,{baseStep:an(s),parser:At,props:ee.fromObject({draggingScale:ln(s,t.rawValue),formatter:C}),value:t,viewProps:n.viewProps})}};class Ft{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Mr={toComponents:n=>n.getComponents(),fromComponents:n=>new Ft(...n)},un=$("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(un()),t.viewProps.bindClassModifiers(this.element),pe(t.expanded,Ee(this.element,un(void 0,"expanded")));const s=e.createElement("div");s.classList.add(un("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(un("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const C=e.createElement("div");if(C.classList.add(un("t")),s.appendChild(C),this.textElement=C,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(un("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Nt=$("p2dp");class Ba{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.layout==="popup"&&this.element.classList.add(Nt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(Nt("g")),this.padElement.appendChild(c),this.svgElem_=c;const C=e.createElementNS(E,"line");C.classList.add(Nt("ax")),C.setAttributeNS(null,"x1","0"),C.setAttributeNS(null,"y1","50%"),C.setAttributeNS(null,"x2","100%"),C.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(C);const D=e.createElementNS(E,"line");D.classList.add(Nt("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const X=e.createElementNS(E,"line");X.classList.add(Nt("l")),X.setAttributeNS(null,"x1","50%"),X.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(X),this.lineElem_=X;const Pe=e.createElement("div");Pe.classList.add(Nt("m")),this.padElement.appendChild(Pe),this.markerElem_=Pe,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ye(e,-s,+s,0,100),C=Ye(t,-s,+s,0,100),D=this.invertsY_?100-C:C;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Br(n,e,t){return[ft(e[0],Lt(n)),ft(e[1],xn(n))*(t?1:-1)]}class Ta{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ba(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ye(e.point.x,0,e.bounds.width,-s,+s),C=Ye(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Ft(c,C),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ys(e.key)&&e.preventDefault();const[t,s]=Br(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Ft(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Br(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=qe.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Os(e,{viewProps:this.viewProps}):null;const C=new Ta(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});C.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=C,this.textC_=new Ps(e,{assembly:Mr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),wn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,X)=>X.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),He(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=Y(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class dn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Tr={toComponents:n=>n.getComponents(),fromComponents:n=>new dn(...n)};function Aa(n){return dn.isObject(n)?new dn(n.x,n.y,n.z):new dn}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function za(n,e){return new Ot({assembly:Tr,components:[zt("x"in n?n.x:void 0,e.x),zt("y"in n?n.y:void 0,e.y),zt("z"in n?n.z:void 0,e.z)]})}function Ss(n,e){return{baseStep:an(e),constraint:e,textProps:ee.fromObject({draggingScale:ln(e,n),formatter:dt(Nn(e,n))})}}const Ia={id:"input-point3d",type:"input",accept:(n,e)=>{if(!dn.isObject(n))return null;const t=ge,s=Te(e,{x:t.optional.custom(Rt),y:t.optional.custom(Rt),z:t.optional.custom(Rt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>za(n.params,n.initialValue),equals:dn.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ot))throw H.shouldNeverHappen();return new Ps(n.document,{assembly:Tr,axes:[Ss(e.rawValue.x,t.components[0]),Ss(e.rawValue.y,t.components[1]),Ss(e.rawValue.z,t.components[2])],parser:At,value:e,viewProps:n.viewProps})}};class pn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(U(e))return!1;const t=e.x,s=e.y,c=e.z,C=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof C!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Dr={toComponents:n=>n.getComponents(),fromComponents:n=>new pn(...n)};function Ga(n){return pn.isObject(n)?new pn(n.x,n.y,n.z,n.w):new pn}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ra(n,e){return new Ot({assembly:Dr,components:[zt("x"in n?n.x:void 0,e.x),zt("y"in n?n.y:void 0,e.y),zt("z"in n?n.z:void 0,e.z),zt("w"in n?n.w:void 0,e.w)]})}function Va(n,e){return{baseStep:an(e),constraint:e,textProps:ee.fromObject({draggingScale:ln(e,n),formatter:dt(Nn(e,n))})}}const Oa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!pn.isObject(n))return null;const t=ge,s=Te(e,{x:t.optional.custom(Rt),y:t.optional.custom(Rt),z:t.optional.custom(Rt),w:t.optional.custom(Rt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Ra(n.params,n.initialValue),equals:pn.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ot))throw H.shouldNeverHappen();return new Ps(n.document,{assembly:Dr,axes:e.rawValue.getComponents().map((s,c)=>Va(s,t.components[c])),parser:At,value:e,viewProps:n.viewProps})}};function Fa(n){const e=[],t=ds(n.options);return t&&e.push(t),new _n(e)}const Na={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Te(e,{options:ge.optional.custom(Fn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks,constraint:n=>Fa(n.params),writer:n=>Pn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Dt(s,mn);return c?new vn(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Vn(e,{parser:C=>C,props:ee.fromObject({formatter:os}),value:t,viewProps:n.viewProps})}},Cn={monitor:{defaultInterval:200,defaultLineCount:3}},Ar=$("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ar()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Ar("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Cs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Lr=$("sgl");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Lr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Lr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Es{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Wa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{lineCount:ge.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ns},controller:n=>{var e;return n.value.rawValue.length===1?new Es(n.document,{formatter:$s,value:n.value,viewProps:n.viewProps}):new Cs(n.document,{formatter:$s,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},$t=$("grl");class ja{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add($t()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add($t("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const C=e.createElement("div");C.classList.add($t("t"),$("tt")()),this.element.appendChild(C),this.tooltipElem_=C,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),C=[];this.value.rawValue.forEach((Ne,$e)=>{if(Ne===void 0)return;const Qt=Ye($e,0,t,0,e.width),En=Ye(Ne,s,c,e.height,0);C.push([Qt,En].join(","))}),this.lineElem_.setAttributeNS(null,"points",C.join(" "));const D=this.tooltipElem_,X=this.value.rawValue[this.cursor_.rawValue];if(X===void 0){D.classList.remove($t("t","a"));return}const Pe=Ye(this.cursor_.rawValue,0,t,0,e.width),Se=Ye(X,s,c,e.height,0);D.style.left=`${Pe}px`,D.style.top=`${Se}px`,D.textContent=`${this.formatter_(X)}`,D.classList.contains($t("t","a"))||(D.classList.add($t("t","a"),$t("t","in")),r(D),D.classList.remove($t("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=Q(-1),this.view=new ja(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Ht(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ye(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ye(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ks(n){return"format"in n&&!U(n.format)?n.format:dt(2)}function Ka(n){var e;return n.value.rawValue.length===1?new Es(n.document,{formatter:ks(n.params),value:n.value,viewProps:n.viewProps}):new Cs(n.document,{formatter:ks(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ya(n){var e,t,s;return new Ha(n.document,{formatter:ks(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cn.monitor.defaultLineCount,props:ee.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function zr(n){return"view"in n&&n.view==="graph"}const Za={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ge,s=Te(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>zr(n)?64:1,reader:n=>Hs},controller:n=>zr(n.params)?Ya(n):Ka(n)},Xa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ge,s=Te(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new Cs(n.document,{formatter:os,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Es(n.document,{formatter:os,value:t,viewProps:n.viewProps})}};function Qa(n,e){var t;const s=n.accept(e.target.read(),e.params);if(U(s))return null;const c=ge,C={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(C),X=n.binding.constraint?n.binding.constraint(C):void 0,Pe=Q(D(s.initialValue),{constraint:X,equals:n.binding.equals}),Se=new fn({reader:D,target:e.target,value:Pe,writer:n.binding.writer(C)}),Ne=c.optional.boolean(e.params.disabled).value,$e=c.optional.boolean(e.params.hidden).value,Qt=n.controller({constraint:X,document:e.document,initialValue:s.initialValue,params:s.params,value:Se.value,viewProps:f.create({disabled:Ne,hidden:$e})});return new Fe(e.document,{binding:Se,blade:ke(),props:ee.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Qt})}function Ja(n,e){return e===0?new rn:new ns(n,e??Cn.monitor.defaultInterval)}function el(n,e){var t,s,c;const C=ge,D=n.accept(e.target.read(),e.params);if(U(D))return null;const X={target:e.target,initialValue:D.initialValue,params:D.params},Pe=n.binding.reader(X),Se=(s=(t=C.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Ne=C.optional.number(e.params.interval).value,$e=new ki({reader:Pe,target:e.target,ticker:Ja(e.document,Ne),value:Si(Se)}),Qt=C.optional.boolean(e.params.disabled).value,En=C.optional.boolean(e.params.hidden).value,kn=n.controller({document:e.document,params:D.params,value:$e.value,viewProps:f.create({disabled:Qt,hidden:En})});return new Ke(e.document,{binding:$e,blade:ke(),props:ee.fromObject({label:"label"in e.params?(c=C.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:kn})}class tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(U(c))throw new H({context:{key:t.key},type:"nomatchingcontroller"});const C=this.pluginsMap_.inputs.reduce((D,X)=>D??Qa(X,{document:e,target:t,params:s}),null);if(C)return C;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((C,D)=>C??el(D,{document:e,params:s,target:t}),null);if(c)return c;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,C)=>c??sn(C,{document:e,params:t}),null);if(!s)throw new H({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Fe)return new it(e);if(e instanceof Ke)return new et(e);if(e instanceof ne)return new vt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw H.shouldNeverHappen();return t}}function nl(){const n=new tl;return[ll,Ia,Oa,Na,ka,ya,xa,va,mo,Wa,Xa,Za,be,Me,An,kt].forEach(e=>{n.register(e)}),n}function sl(n){return Ft.isObject(n)?new Ft(n.x,n.y):new Ft}function rl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function zt(n,e){if(!n)return;const t=[],s=Er(n,e);s&&t.push(s);const c=kr(n);return c&&t.push(c),new _n(t)}function il(n,e){return new Ot({assembly:Mr,components:[zt("x"in n?n.x:void 0,e.x),zt("y"in n?n.y:void 0,e.y)]})}function Ir(n,e){const[t,s]=n?Ca(n):[];if(!U(t)||!U(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=an(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ol(n,e){const t=e instanceof Ot?e.components[0]:void 0,s=e instanceof Ot?e.components[1]:void 0,c=Ir(t,n.x),C=Ir(s,n.y);return Math.max(c,C)}function Gr(n,e){return{baseStep:an(e),constraint:e,textProps:ee.fromObject({draggingScale:ln(e,n),formatter:dt(Nn(e,n))})}}function al(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ll={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Ft.isObject(n))return null;const t=ge,s=Te(e,{expanded:t.optional.boolean,picker:t.optional.custom(Qs),x:t.optional.custom(Rt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sl,constraint:n=>il(n.params,n.initialValue),equals:Ft.equals,writer:n=>rl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Ot))throw H.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,C="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[Gr(t.rawValue.x,s.components[0]),Gr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:al(n.params),maxValue:ol(t.rawValue,s),parser:At,pickerLayout:C??"popup",value:t,viewProps:n.viewProps})}};class Ur extends x{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Rr extends x{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Vr extends x{constructor(e){super(e),this.emitter_=new j,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const cl=function(){return{id:"list",type:"blade",accept(n){const e=ge,t=Te(n,{options:e.required.custom(Fn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new mn(Js(n.params.options)),t=Q(n.params.value,{constraint:e}),s=new vn(n.document,{props:new ee({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Oe(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Oe)||!(n.controller.valueController instanceof vn)?null:new Ur(n.controller)}}}();function ul(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function dl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class pl extends yt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Fe).map(s=>s.binding);dl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Fe).map(t=>t.binding.target);return ul(e)}refresh(){this.controller_.rackController.rack.find(Fe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ke).forEach(e=>{e.binding.read()})}}class hl extends ye{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const fl={id:"slider",type:"blade",accept(n){const e=ge,t=Te(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new on({max:n.params.max,min:n.params.min}),C=new us(n.document,{baseStep:1,parser:At,sliderProps:new ee({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:ee.fromObject({draggingScale:ln(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ro}),value:Q(s,{constraint:c}),viewProps:n.viewProps});return new Oe(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:C})},api(n){return!(n.controller instanceof Oe)||!(n.controller.valueController instanceof us)?null:new Rr(n.controller)}},_l=function(){return{id:"text",type:"blade",accept(n){const e=ge,t=Te(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Vn(n.document,{parser:n.params.parse,props:ee.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:Q(n.params.value),viewProps:n.viewProps});return new Oe(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Oe)||!(n.controller.valueController instanceof Vn)?null:new Vr(n.controller)}}}();function ml(n){const e=n.createElement("div");return e.classList.add($("dfw")()),n.body&&n.body.appendChild(e),e}function Or(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class vl extends pl{constructor(e){var t,s;const c=e??{},C=(t=c.document)!==null&&t!==void 0?t:a(),D=nl(),X=new hl(C,{expanded:c.expanded,blade:ke(),props:ee.fromObject({title:c.title}),viewProps:f.create()});super(X,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:ml(C),this.containerElem_.appendChild(this.element),this.doc_=C,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw H.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw H.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Or(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Or(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[fl,cl,kt,_l]})}}const bl=new S("3.1.10");h.BladeApi=x,h.ButtonApi=ue,h.FolderApi=yt,h.InputBindingApi=it,h.ListApi=Ur,h.MonitorBindingApi=et,h.Pane=vl,h.SeparatorApi=je,h.SliderApi=Rr,h.TabApi=hn,h.TabPageApi=In,h.TextApi=Vr,h.TpChangeEvent=B,h.VERSION=bl,Object.defineProperty(h,"__esModule",{value:!0})})})(Bs,Bs.exports);var ql=Bs.exports;const Wl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
  _pad          : f32,
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
    if is_texd && atlas_params.atlas_width > 0u {
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
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
    }
}
`,jl=`// 2DGS render — vertex+fragment.
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
  _pad0         : vec4<f32>,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;

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

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
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
        return vec4<f32>(color_e, 1.0) * alpha_e;
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
        let uv = in.uv_base + s * in.uv_scale;
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, i32(in.layer), 0.0);
        color = color + rgba.rgb * tex_params.atlas_scale + vec3<f32>(tex_params.atlas_offset);
    }
    color = max(vec3<f32>(0.0), color + vec3<f32>(tex_params.res_bias));

    return vec4<f32>(color, 1.0) * b;
}
`,Hl=`const WG_SIZE = 256u;
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
}`,Kl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
                    let tx = clamp(i32(px_f), 0, tex_dims.x - 1);
                    let ty = clamp(i32(py_f), 0, tex_dims.y - 1);
                    let mesh_z = textureLoad(mesh_depth_tex, vec2<i32>(tx, ty), 0);
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
                        // Standard: cull surfels BEHIND the mesh. Small margin
                        // absorbs the half-pixel offset between sample point
                        // and rasterized triangle center + fp32 fighting on
                        // grazing planes.
                        if z_ndc > mesh_z + 1e-4 {
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
                    // disc normal outward via the cloud centroid, cull when
                    // the surfel faces away past the cos threshold. Required
                    // for --backface_cull-trained checkpoints — their back
                    // shell is unsupervised and renders as garbage without it.
                    var n = R[2];
                    let rel = xyz - vec3<f32>(bfc_params.cx, bfc_params.cy, bfc_params.cz);
                    if dot(n, rel) < 0.0 { n = -n; }
                    let vd = xyz - camera_pos;
                    let inv_len = inverseSqrt(max(dot(vd, vd), 1e-24));
                    if dot(vd, n) * inv_len > bfc_params.cos_thr {
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
`,Yl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,Zl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
}`,pi=32,Ts=1,Ds=2,Xr=4,As=8,hi=4,ec=7<<hi,Qr=128,Jr=256,tc=0,qt=new ArrayBuffer(pi),ht={canvas_size:new Uint32Array(qt,0,2),accel_flags:new Uint32Array(qt,8,1),feature_mode:new Uint32Array(qt,12,1),gaussian_scaling:new Float32Array(qt,16,1),sh_bias:new Float32Array(qt,20,1),color_K:new Uint32Array(qt,24,1),walltime:new Float32Array(qt,28,1)};function nc(o){ht.canvas_size[0]=o.width>>>0,ht.canvas_size[1]=o.height>>>0,ht.accel_flags[0]=(o.accel_flags??Ts|Ds)>>>0,ht.feature_mode[0]=(o.feature_mode??tc)>>>0,ht.gaussian_scaling[0]=o.gaussian_scaling??1,ht.sh_bias[0]=o.sh_bias??.5,ht.color_K[0]=(o.color_K??0)>>>0,ht.walltime[0]=o.walltime??0}function fi(o,l){o.queue.writeBuffer(l,0,qt)}function es(o,l,h){h&&o&&l&&fi(o,l)}function Kn(o,l,h,S,x=!0){ht.canvas_size[0]=o>>>0,ht.canvas_size[1]=l>>>0,es(h??null,S??null,x)}function ei(o,l,h,S=!0){ht.gaussian_scaling[0]=o,es(l??null,h??null,S)}function ti(o,l,h,S=!0){ht.sh_bias[0]=o,es(l??null,h??null,S)}function en(o,l,h,S=!0){let x=ht.accel_flags[0];if(o.oac!==void 0&&(x=o.oac?x|Ts:x&~Ts),o.spr!==void 0&&(x=o.spr?x|Ds:x&~Ds),o.bfc!==void 0&&(x=o.bfc?x|Xr:x&~Xr),o.meshCull!==void 0&&(x=o.meshCull?x|As:x&~As),o.meshSampleMode!==void 0){const k=(o.meshSampleMode&7)<<hi;x=x&~ec|k}o.meshSilhouetteCull!==void 0&&(x=o.meshSilhouetteCull?x|Qr:x&~Qr),o.meshInvertDepth!==void 0&&(x=o.meshInvertDepth?x|Jr:x&~Jr),ht.accel_flags[0]=x>>>0,es(l??null,h??null,S)}const sc=256,rc=pi,ic=8,oc=96,ac=12,Gs=8,It=1<<Gs,tn=256,Xn=32/Gs,lc=0,ni=Xn&1;function si(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function cc(o,l){const h=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=o.createPipelineLayout({bindGroupLayouts:[h]}),x=k=>o.createComputePipeline({layout:S,compute:{module:l,entryPoint:k,constants:{WG_SIZE:tn}}});return{l0TileScan:x("prefix_l0_tile_scan"),l1TileScanOnL0:x("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:x("prefix_scan_l1_sums"),addL1ToL0:x("prefix_add_l1_to_l0_offsets"),addL0ToElems:x("prefix_add_l0_to_elements"),computeDigitBase:x("compute_digit_base"),prefixBindGroupLayout:h}}function uc(o,l,h){const S=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=o.createPipelineLayout({bindGroupLayouts:[S]}),B=o.createPipelineLayout({bindGroupLayouts:[x]}),V=[];for(let T=0;T<Xn;T++){const A={PASS_ID:T+lc,RS_RADIX_LOG2:Gs,RS_RADIX_SIZE:It};V.push({localHistogram:o.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:h,entryPoint:"scatter_elements",constants:A}})})}return{passes:V,localHistogramBindGroupLayout:S,scatterBindGroupLayout:x}}function dc(o){const l=o.createShaderModule({label:"local histogram",code:Ql}),h=o.createShaderModule({label:"scatter",code:Xl}),S=o.createShaderModule({label:"blelloch prefix",code:Jl}),x=cc(o,S),k=uc(o,l,h);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:x}}function pc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),h=l.createView({dimension:"2d-array"}),S=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),x=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(k,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:h,sampler:S,rectsBuffer:x,texParamsBuffer:k,meta:B}}class hc{constructor(l,h,S,x,k,B=null,V=null){q(this,"device");q(this,"pc");q(this,"presentationFormat");q(this,"camera_buffer");q(this,"render_settings_buffer");q(this,"draw_indirect_buffer");q(this,"splat_2d_buffer");q(this,"querySet");q(this,"resolveBuffer");q(this,"resultBuffer");q(this,"queriesPerFrame",ic);q(this,"queryCapacityFrames",200);q(this,"sort_prefixBindGroup");q(this,"sort_pipelines");q(this,"sort_localHistogramBindGroups");q(this,"sort_scatterBindGroups");q(this,"lastFrame",0);q(this,"frameCount",0);q(this,"preprocessPipeline");q(this,"cullPipeline");q(this,"renderPipeline");q(this,"indirectPipeline");q(this,"sort_info_buffer");q(this,"sort_ping_pong");q(this,"crsBg");q(this,"gsBg");q(this,"cullBg2");q(this,"preprocessBg1");q(this,"renderSplatsBindGroup");q(this,"renderSettingsBindGroup");q(this,"atlasBindGroup");q(this,"indirectBindGroup");q(this,"sh_solvers_buffer");q(this,"mesh");q(this,"meshDepthPipeline",null);q(this,"meshDepthCameraBindGroup",null);q(this,"meshDepthMarginBindGroup",null);q(this,"meshMarginBuffer",null);q(this,"meshDepthTexture",null);q(this,"meshDepthView",null);q(this,"meshCullBindGroupLayout");q(this,"meshCullBindGroup");q(this,"meshCullWidth",0);q(this,"meshCullHeight",0);q(this,"meshStubTexture");q(this,"meshStubView");q(this,"bfcParamsBuffer");q(this,"meshOverlayPipeline",null);q(this,"meshOverlayEnabled",!1);q(this,"bgColor",[0,0,0,0]);q(this,"showPerfDialogNext",!1);q(this,"requestReorderNextFrame",!1);q(this,"reorderInFlight",!1);q(this,"downloadOnceNextRead",!1);q(this,"downloadOnceFileName","fps_metrics");q(this,"allFrameTimes",[]);q(this,"lastStageBreakdownMs",null);q(this,"timeQueryEnabled");q(this,"atlas");q(this,"atlasParamsBuffer");this.mesh=V;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&Ct("⏰ using timestamp-query"),this.pc=l,this.device=h,this.presentationFormat=S,this.camera_buffer=x,this.atlas=B??pc(h),this.atlasParamsBuffer=h.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),h.addEventListener("uncapturederror",ee=>{console.error("A WebGPU error was not captured:",ee.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+tn-1)/tn)+1)*tn,R=Math.ceil(A/tn);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const U=h.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=dc(h);const K=[si(A,h),si(A,h)],I=h.createBuffer({label:"workgroup histograms",size:R*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=h.createBuffer({label:"workgroup prefixes",size:R*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=h.createBuffer({label:"digit base",size:It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=Math.ceil(R/tn),ue=Math.ceil(N/tn),j=h.createBuffer({label:"prefix l0 sums",size:N*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=h.createBuffer({label:"prefix l0 offsets",size:N*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=h.createBuffer({label:"prefix l1 sums",size:ue*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ce=h.createBuffer({label:"prefix l1 offsets",size:ue*It*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=h.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:I}},{binding:2,resource:{buffer:W}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:$}},{binding:6,resource:{buffer:ce}},{binding:7,resource:{buffer:H}}]}),this.sort_localHistogramBindGroups=[h.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:K[0].sort_depths_buffer}},{binding:2,resource:{buffer:I}}]}),h.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:K[1].sort_depths_buffer}},{binding:2,resource:{buffer:I}}]})],this.sort_scatterBindGroups=[h.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:K[0].sort_depths_buffer}},{binding:3,resource:{buffer:K[1].sort_depths_buffer}},{binding:4,resource:{buffer:K[0].sort_indices_buffer}},{binding:5,resource:{buffer:K[1].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]}),h.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:U}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:K[1].sort_depths_buffer}},{binding:3,resource:{buffer:K[0].sort_depths_buffer}},{binding:4,resource:{buffer:K[1].sort_indices_buffer}},{binding:5,resource:{buffer:K[0].sort_indices_buffer}},{binding:6,resource:{buffer:W}}]})],this.sort_info_buffer=U,this.sort_ping_pong=K;const se=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),pe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),oe=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:se,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:pe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:oe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const Ee=this.device.createShaderModule({code:Hl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Ee,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const Ue=this.device.createShaderModule({code:Kl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[se,pe,oe,this.meshCullBindGroupLayout]}),compute:{module:Ue,entryPoint:"surfel_cull"}}),this.mesh!==null){const ee=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:ee,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ie=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([0,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ie,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const me=this.device.createShaderModule({code:Yl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[ee,ie]}),vertex:{module:me,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ie=this.device.createShaderModule({code:Wl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[se,de]}),compute:{module:Ie,entryPoint:"preprocess"}});const Re=this.device.createShaderModule({code:jl});Re.getCompilationInfo().then(ee=>{ee.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ee.messages.forEach(ie=>{(ie.type==="error"?console.error:ie.type==="warning"?console.warn:console.log)(`${ie.type} (line ${ie.lineNum}:${ie.linePos}): ${ie.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Be=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),we=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Ce=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),Q=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Be,we,Ce]}),vertex:{module:Re,entryPoint:"vs_main"},fragment:{module:Re,entryPoint:"fs_main",constants:{BETA_KERNEL:Q},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(ee=>{ee?console.error("[render_2dgs] pipeline create validation error:",ee.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Be,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ni].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Ce,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){en({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}setBfcParams(l,h){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,h[0],h[1],h[2]]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),h=new Uint32Array(l),S=new Float32Array(l);h[0]=this.atlas.meta.width|0,h[1]=this.atlas.meta.layer_h|0,S[2]=this.atlas.meta.uv_extent||0,S[3]=0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureMeshDepthTexture(l,h){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===h||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,h),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView},{binding:1,resource:{buffer:this.bfcParamsBuffer}}]}),this.meshCullWidth=l,this.meshCullHeight=h))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&ui(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const h=Math.max(0,Math.min(l,this.pc.num_points)),S=h*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const x=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[ni].sort_indices_buffer,0,x,0,S),this.device.queue.submit([k.finish()]),await x.mapAsync(GPUMapMode.READ);const B=new Uint32Array(x.getMappedRange());console.log("[DEBUG] Sorted indices (first",h,"):",Array.from(B)),x.unmap()}frame(l,h,S=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(ht.accel_flags[0]&As)!==0){const T=ht.canvas_size[0],A=ht.canvas_size[1];this.ensureMeshDepthTexture(T,A);const R={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},U=l.beginRenderPass(R);U.setPipeline(this.meshDepthPipeline),U.setBindGroup(0,this.meshDepthCameraBindGroup),U.setBindGroup(1,this.meshDepthMarginBindGroup),U.setVertexBuffer(0,this.mesh.vertexBuffer),U.setVertexBuffer(1,this.mesh.normalBuffer),U.setIndexBuffer(this.mesh.indexBuffer,"uint32"),U.drawIndexed(this.mesh.numIndices),U.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const A=l.beginComputePass(T);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.meshCullBindGroup);const R=Math.ceil(this.pc.num_points/sc);A.dispatchWorkgroups(R,1,1),A.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const A=l.beginComputePass(T);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let T=0;T<Xn;T++){const A=T&1,R=this.sort_pipelines.passes[T],U=this.sort_localHistogramBindGroups[A],K=this.sort_scatterBindGroups[A];{const I={label:`upsweep_round${T}`};B&&T==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const W=l.beginComputePass(I);W.setPipeline(R.localHistogram),W.setBindGroup(0,U),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}{const I=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,It,1),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${T}`};B&&T==Xn-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const W=l.beginComputePass(I);W.setPipeline(R.scatterElements),W.setBindGroup(0,K),W.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),W.end()}}{const T={label:"render",colorAttachments:[{view:h,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const A=l.beginRenderPass(T);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const R=this.device.createShaderModule({code:Zl}),U=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),K=this.device.createBindGroupLayout({label:"mesh_overlay margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[U,K]}),vertex:{module:R,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:R,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:h,loadOp:"load",storeOp:"store"}]},A=l.beginRenderPass(T);A.setPipeline(this.meshOverlayPipeline),A.setBindGroup(0,this.meshDepthCameraBindGroup),A.setBindGroup(1,this.meshDepthMarginBindGroup),A.setVertexBuffer(0,this.mesh.vertexBuffer),A.setVertexBuffer(1,this.mesh.normalBuffer),A.setIndexBuffer(this.mesh.indexBuffer,"uint32"),A.drawIndexed(this.mesh.numIndices),A.end()}this.frameCount++}async readPerfMetrics(l){const h=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const x=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),V=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,T=Array.from({length:x.length},()=>[]);let A=0;for(let ue=0;ue<B;ue++){const j=(V+ue)%this.queryCapacityFrames,Z=j*this.queriesPerFrame;let $=!0;for(let ce=0;ce<x.length;ce++){const[se,pe,oe]=x[ce];if(k[Z+oe]===0n||k[Z+pe]===0n||k[Z+pe]<k[Z+oe]){$=!1;break}}if(!$){!h&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let ce=0;ce<x.length;ce++){const[se,pe,oe]=x[ce],de=Number(k[Z+oe]),Ee=Number(k[Z+pe]);T[ce].push((Ee-de)/1e6)}}if(A===0){this.resultBuffer.unmap(),h||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const R=[];let U=0,K=0,I=0;for(let ue=0;ue<x.length;ue++){const j=x[ue][0],Z=T[ue];let $=0;if(j==="Total"){const ce=this.allFrameTimes;$=ce.reduce((oe,de)=>oe+de,0)/ce.length;const se=[...ce].sort((oe,de)=>oe-de);U=se[Math.floor(se.length*.99)]||0;const pe=ce.reduce((oe,de)=>oe+Math.pow(de-$,2),0)/ce.length;K=Math.sqrt(pe),I=$}else $=Z.reduce((ce,se)=>ce+se,0)/Z.length;R.push([j,$])}this.lastFrame+=this.frameCount,this.frameCount=0;const W=Object.fromEntries(R);this.lastStageBreakdownMs={cull:W.Culling??0,preprocess:W.Preprocess??0,sort:W.Sort??0,render:W.Render??0,total:W.Total??0};const N=`[TIMESTAMP - ${this.constructor.name}]
`+R.map(([ue,j])=>`${ue}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${U.toFixed(3)}ms
Total STD: ${K.toFixed(3)}ms
Total AVG: ${I.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(h||(console.log(N),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ue=`Stage,ms
`,j=R.map(([ce,se])=>`${ce},${se.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(ue+j),$=document.createElement("a");$.href=Z,$.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild($),$.click(),$.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(N)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),h=l?l.width:1,S=l?l.height:1;nc({width:h,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),fi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Tn(this.pc.num_points*oc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Tn(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const h=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=h.length>0?h:this.downloadOnceFileName}else{const h=new Date,S=`${h.getFullYear()}${String(h.getMonth()+1).padStart(2,"0")}${String(h.getDate()).padStart(2,"0")}_${String(h.getHours()).padStart(2,"0")}${String(h.getMinutes()).padStart(2,"0")}${String(h.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function fc(o,l){return 2*Math.atan(l/(2*o))}function _c(o,l,h,S){const x=Math.tan(S/2),k=Math.tan(h/2),B=x*o,V=-B,T=k*o,A=-T,R=ct.create();return R[0]=2*o/(T-A),R[5]=-2*o/(B-V),R[2]=(T+A)/(T-A),R[6]=(B+V)/(B-V),R[14]=1,R[10]=l/(l-o),R[11]=-(l*o)/(l-o),ct.transpose(R,R),R}async function mc(o){Ct(`loading scene camera file... : ${o}`);const h=await(await fetch(o)).json();return Ct(`loaded cameras count: ${h.length}`),h.map(S=>{const x=z.clone(S.position),k=wt.create(...S.rotation.flat()),B=k[0],V=k[4],T=k[8],A=k[1],R=k[5],U=k[9],K=k[2],I=k[6],W=k[10];B*(R*W-U*I)-V*(A*W-U*K)+T*(A*I-R*K)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const N=ct.fromMat3(k);return{position:x,rotation:N,img_name:S.img_name,id:S.id}})}const vc=4*2,bc=4*16,_i=4*bc+2*vc;function gc(o){return o.createBuffer({label:"camera uniform",size:_i,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Jt=new Float32Array(_i/Float32Array.BYTES_PER_ELEMENT),Qn=class Qn{constructor(l,h){q(this,"uniform_buffer");q(this,"position",z.create());q(this,"rotation",ct.create());q(this,"fovY",45/180*Math.PI);q(this,"fovX");q(this,"focal",Hr.create());q(this,"viewport",Hr.create());q(this,"view_matrix",ct.identity());q(this,"view_inv_matrix",ct.identity());q(this,"proj_matrix",ct.identity());q(this,"proj_inv_matrix",ct.identity());q(this,"_negPos",z.create());q(this,"look",z.create(0,0,1));q(this,"up",z.create(0,1,0));q(this,"right",z.create(1,0,0));this.canvas=l,this.device=h,this.uniform_buffer=gc(h),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=fc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=_c(.01,100,this.fovX,this.fovY),ct.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ct.copy(this.rotation,this.view_matrix),ct.translate(this.view_matrix,this._negPos,this.view_matrix),ct.inverse(this.view_matrix,this.view_inv_matrix),z.transformMat4Upper3x3(Qn.Z_AXIS,this.view_inv_matrix,this.look),z.normalize(this.look,this.look),z.cross(this.up,this.look,this.right),z.normalize(this.right,this.right);let l=0;Jt.set(this.view_matrix,l),l+=16,Jt.set(this.view_inv_matrix,l),l+=16,Jt.set(this.proj_matrix,l),l+=16,Jt.set(this.proj_inv_matrix,l),l+=16,Jt.set(this.viewport,l),l+=2,Jt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Jt)}set_preset(l){z.copy(l.position,this.position),ct.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};q(Qn,"Z_AXIS",z.create(0,0,1));let Ls=Qn;const wc=z.create(1,0,0),xc=z.create(0,1,0);function yc(o,l){const h=o[0],S=o[4],x=o[8],k=o[1],B=o[5],V=o[9],T=o[2],A=o[6],R=o[10],U=h+B+R;let K,I,W,H;if(U>0){const N=.5/Math.sqrt(U+1);K=.25/N,I=(A-V)*N,W=(x-T)*N,H=(k-S)*N}else if(h>B&&h>R){const N=2*Math.sqrt(1+h-B-R);K=(A-V)/N,I=.25*N,W=(S+k)/N,H=(x+T)/N}else if(B>R){const N=2*Math.sqrt(1+B-h-R);K=(x-T)/N,I=(S+k)/N,W=.25*N,H=(V+A)/N}else{const N=2*Math.sqrt(1+R-h-B);K=(k-S)/N,I=(x+T)/N,W=(V+A)/N,H=.25*N}return l[0]=I,l[1]=W,l[2]=H,l[3]=K,l}class Pc{constructor(l){q(this,"element");q(this,"enabled",!0);q(this,"center",z.create(0,0,0));q(this,"up",z.create(0,1,0));q(this,"rotation",[0,0]);q(this,"shift",[0,0]);q(this,"scroll",0);q(this,"speed",.1);q(this,"sensitivity",.08);q(this,"leftPressed",!1);q(this,"rightPressed",!1);q(this,"leftDragPans",!1);q(this,"lastX",0);q(this,"lastY",0);q(this,"touches",new Map);q(this,"lastTouchCenter",null);q(this,"lastPinchDistance",null);q(this,"lastTwoFingerAngle",null);q(this,"lastTouchCount",0);q(this,"roll",0);q(this,"_dir",z.create());q(this,"_right",z.create());q(this,"_upCam",z.create());q(this,"_scratch",z.create());q(this,"_qY",pt.create());q(this,"_qX",pt.create());q(this,"_qRot",pt.create());q(this,"_qLocal",pt.create());q(this,"_qWorldToCam",pt.create());q(this,"_scratchMat3",wt.create());q(this,"bboxMin",null);q(this,"bboxMax",null);q(this,"anchor",z.create(0,0,0));q(this,"downCallback",l=>{var h,S,x,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(S=(h=l.target)==null?void 0:h.setPointerCapture)==null||S.call(h,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(x=l.target)==null?void 0:x.setPointerCapture)==null||k.call(x,l.pointerId),l.preventDefault())}});q(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const h=l.pageX-this.lastX,S=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=h,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=h,this.shift[0]+=S)});q(this,"upCallback",l=>{var h,S,x,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(S=(h=l.target)==null?void 0:h.releasePointerCapture)==null||S.call(h,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(x=l.target)==null?void 0:x.releasePointerCapture)==null||k.call(x,l.pointerId),l.preventDefault()});q(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let h=l.deltaY;l.deltaMode===1?h*=16:l.deltaMode===2&&(h*=100),this.scroll+=h*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",h=>h.preventDefault())}setCenter(l){z.copy(l,this.center),z.copy(l,this.anchor)}setOrbitPivot(l){z.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const h=this.camera.rotation;z.set(h[2],h[6],h[10],this._dir),z.normalize(this._dir,this._dir),z.scale(this._dir,l,this._dir),z.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(z.subtract(this.center,l.position,this._scratch),z.length(this._scratch)<1e-6)return;z.normalize(this._scratch,this._scratch),z.cross(this.up,this._scratch,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right),z.normalize(this._right,this._right),z.cross(this._scratch,this._right,this._upCam),z.normalize(this._upCam,this._upCam);const h=l.rotation;h[0]=this._right[0],h[1]=this._upCam[0],h[2]=this._scratch[0],h[3]=0,h[4]=this._right[1],h[5]=this._upCam[1],h[6]=this._scratch[1],h[7]=0,h[8]=this._right[2],h[9]=this._upCam[2],h[10]=this._scratch[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,l.update_buffer()}setBbox(l,h){this.bboxMin=z.create(l[0],l[1],l[2]),this.bboxMax=z.create(h[0],h[1],h[2]);const S=(l[0]+h[0])*.5,x=(l[1]+h[1])*.5,k=(l[2]+h[2])*.5;z.set(S,x,k,this.center),z.set(S,x,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;z.set(l[2],l[6],l[10],this._dir),z.normalize(this._dir,this._dir);let h=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,x=1/0,k=!1;for(let B=0;B<3;B++){const V=this._dir[B],T=this.bboxMin[B]-this.camera.position[B],A=this.bboxMax[B]-this.camera.position[B];if(Math.abs(V)>1e-8){const R=T/V,U=A/V;S=Math.max(S,Math.min(R,U)),x=Math.min(x,Math.max(R,U))}else if(T>0||A<0){k=!0;break}}!k&&S<=x&&x>0&&(h=(Math.max(S,0)+x)*.5)}if(h===null||!isFinite(h)||h<.001){z.subtract(this.anchor,this.camera.position,this._scratch);const S=z.dot(this._scratch,this._dir);h=S>.001?S:z.length(this._scratch)}h=Math.max(.1,h),z.scale(this._dir,h,this._dir),z.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const h=this.touches.values().next().value;if(this.lastTouchCenter){const S=h.x-this.lastTouchCenter[0],x=h.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=x*.3}this.lastTouchCenter=[h.x,h.y]}else if(l===2){const h=Array.from(this.touches.values()),S=(h[0].x+h[1].x)*.5,x=(h[0].y+h[1].y)*.5,k=h[1].x-h[0].x,B=h[1].y-h[0].y,V=Math.hypot(k,B),T=Math.atan2(B,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=S-this.lastTouchCenter[0],R=x-this.lastTouchCenter[1],U=Math.hypot(A,R),K=Math.abs(V-this.lastPinchDistance);let I=T-this.lastTwoFingerAngle;I>Math.PI&&(I-=2*Math.PI),I<-Math.PI&&(I+=2*Math.PI),U>.5&&(this.shift[1]-=A,this.shift[0]+=R),K>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(V/this.lastPinchDistance)*10),Math.abs(I)>.0087&&(this.roll+=-I)}this.lastTouchCenter=[S,x],this.lastPinchDistance=V,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const h=this.camera;{const H=h.rotation;this.up[0]=H[1],this.up[1]=H[5],this.up[2]=H[9],z.length(this.up)>1e-6?z.normalize(this.up,this.up):z.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const H=h.rotation;z.set(H[2],H[6],H[10],this._scratch),z.normalize(this._scratch,this._scratch),pt.fromAxisAngle(this._scratch,this.roll,this._qRot),z.transformQuat(this.up,this._qRot,this.up),z.normalize(this.up,this.up),this.roll=0,S=!0}z.subtract(h.position,this.center,this._dir);let x=z.length(this._dir);x<1e-6&&(x=1e-6);const k=Math.exp(Math.log(x)+this.scroll*l*10*this.speed);z.scale(this._dir,k/x,this._dir),x=k;const B=h.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],z.normalize(this._right,this._right),z.length(this._right)<1e-6&&z.set(1,0,0,this._right);const V=z.create(B[1],B[5],B[9]);z.normalize(V,V),z.length(V)<1e-6&&z.set(0,1,0,V);const T=l*this.speed*.1*x,A=this.shift[1]*T,R=-this.shift[0]*T;z.scale(this._right,A,this._scratch),z.add(this.center,this._scratch,this.center),z.add(h.position,this._scratch,h.position),z.scale(V,R,this._scratch),z.add(this.center,this._scratch,this.center),z.add(h.position,this._scratch,h.position);const U=this.rotation[0]*l*this.sensitivity,K=this.rotation[1]*l*this.sensitivity;if(Math.abs(U)>1e-5||Math.abs(K)>1e-5||S){const H=h.rotation;yc(H,this._qWorldToCam),pt.fromAxisAngle(wc,-K,this._qX),pt.fromAxisAngle(xc,-U,this._qY),pt.multiply(this._qX,this._qY,this._qLocal),pt.normalize(this._qLocal,this._qLocal),pt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),pt.normalize(this._qWorldToCam,this._qWorldToCam),wt.fromQuat(this._qWorldToCam,this._scratchMat3),ct.fromMat3(this._scratchMat3,h.rotation);const N=h.rotation,ue=N[2],j=N[6],Z=N[10];h.position[0]=this.center[0]-ue*x,h.position[1]=this.center[1]-j*x,h.position[2]=this.center[2]-Z*x,this.up[0]=N[1],this.up[1]=N[5],this.up[2]=N[9],z.normalize(this.up,this.up)}else z.add(this.center,this._dir,h.position);h.update_buffer();const W=Math.pow(.8,l*60);this.rotation[0]*=W,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=W,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=W,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=W,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=W,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function mi(o){const l=z.create();for(const h of o)z.add(l,h,l);return z.scale(l,1/Math.max(o.length,1),l)}function vi(o,l){const h=wt.create();wt.inverse(o,h);const S=z.create();return S[0]=h[0]*l[0]+h[4]*l[1]+h[8]*l[2],S[1]=h[1]*l[0]+h[5]*l[1]+h[9]*l[2],S[2]=h[2]*l[0]+h[6]*l[1]+h[10]*l[2],S}function Sc(o){const l=o.slice(),h=[1,0,0,0,1,0,0,0,1],S=(T,A)=>l[T*3+A],x=(T,A,R)=>{l[T*3+A]=R},k=(T,A)=>h[T*3+A],B=(T,A,R)=>{h[T*3+A]=R};for(let T=0;T<30;T++){let A=0,R=1,U=Math.abs(S(0,1));if(Math.abs(S(0,2))>U&&(A=0,R=2,U=Math.abs(S(0,2))),Math.abs(S(1,2))>U&&(A=1,R=2,U=Math.abs(S(1,2))),U<1e-12)break;const K=S(A,A),I=S(R,R),W=S(A,R);let H;Math.abs(K-I)<1e-30?H=Math.PI/4*Math.sign(W):H=.5*Math.atan2(2*W,K-I);const N=Math.cos(H),ue=Math.sin(H);for(let j=0;j<3;j++){const Z=S(j,A),$=S(j,R);x(j,A,N*Z+ue*$),x(j,R,-ue*Z+N*$)}for(let j=0;j<3;j++){const Z=S(A,j),$=S(R,j);x(A,j,N*Z+ue*$),x(R,j,-ue*Z+N*$)}for(let j=0;j<3;j++){const Z=k(j,A),$=k(j,R);B(j,A,N*Z+ue*$),B(j,R,-ue*Z+N*$)}}const V=[];for(let T=0;T<3;T++)V.push({val:S(T,T),vec:z.create(k(0,T),k(1,T),k(2,T))});return V.sort((T,A)=>A.val-T.val),{vals:[V[0].val,V[1].val,V[2].val],vecs:[V[0].vec,V[1].vec,V[2].vec]}}function Cc(o,l){const h=mi(o);let S=0,x=0,k=0,B=0,V=0,T=0;for(const W of o){const H=W[0]-h[0],N=W[1]-h[1],ue=W[2]-h[2];S+=H*H,x+=H*N,k+=H*ue,B+=N*N,V+=N*ue,T+=ue*ue}const A=[S,x,k,x,B,V,k,V,T],{vecs:R}=Sc(A);let U=R[0],K=R[1],I=R[2];return z.dot(I,l)<0&&(z.scale(I,-1,I),z.scale(K,-1,K)),{centroid:h,normal:I,u:U,v:K}}function Ec(o){let l=0,h=0,S=0,x=0,k=0,B=0,V=0,T=0,A=0;for(const[N,ue]of o){const j=-2*N,Z=-2*ue,$=1,ce=-(N*N+ue*ue);l+=j*j,h+=j*Z,S+=j*$,x+=Z*Z,k+=Z*$,B+=$*$,V+=j*ce,T+=Z*ce,A+=$*ce}const R=wt.create(l,h,S,h,x,k,S,k,B),U=vi(R,z.create(V,T,A)),K=U[0],I=U[1],W=U[2],H=K*K+I*I-W;return{center:[K,I],radius:Math.sqrt(Math.max(H,1e-12))}}function kc(o,l){let h=0,S=0,x=0,k=0,B=0,V=0,T=0,A=0,R=0;for(let K=0;K<o.length;K++){const I=o[K],W=z.normalize(l[K],z.create()),H=1-W[0]*W[0],N=-W[0]*W[1],ue=-W[0]*W[2],j=1-W[1]*W[1],Z=-W[1]*W[2],$=1-W[2]*W[2];h+=H,S+=N,x+=ue,k+=j,B+=Z,V+=$,T+=H*I[0]+N*I[1]+ue*I[2],A+=N*I[0]+j*I[1]+Z*I[2],R+=ue*I[0]+Z*I[1]+$*I[2]}const U=wt.create(h,S,x,S,k,B,x,B,V);return vi(U,z.create(T,A,R))}function bi(o,l={}){if(o.length===0)return null;const h=l.tiltDownDeg??8,S=l.radiusScale??1,x=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,B=o.map(oe=>z.clone(oe.position)),V=o.map(oe=>{const de=oe.rotation;return z.create(de[8],de[9],de[10])}),T=o.map(oe=>{const de=oe.rotation;return z.create(de[4],de[5],de[6])}),A=mi(T),R=z.normalize(z.scale(A,-1,z.create())),{centroid:U,normal:K,u:I,v:W}=Cc(B,R),H=B.map(oe=>{const de=z.sub(oe,U,z.create());return[z.dot(de,I),z.dot(de,W)]}),{center:N,radius:ue}=Ec(H),j=ue*S,Z=z.add(U,z.add(z.scale(I,N[0],z.create()),z.scale(W,N[1],z.create()),z.create()),z.create()),$=kc(B,V),ce=j*Math.tan(h*Math.PI/180),se=z.sub($,z.scale(K,ce,z.create()),z.create());let pe=0;if(x){const oe=z.sub(B[0],Z,z.create());pe=Math.atan2(z.dot(oe,W),z.dot(oe,I))/(2*Math.PI)%1,pe<0&&(pe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${j.toFixed(2)}, tilt=${h}°, normal=[${K[0].toFixed(2)}, ${K[1].toFixed(2)}, ${K[2].toFixed(2)}], startPhase=${pe.toFixed(3)}`),{center:Z,radius:j,normal:K,u:I,v:W,lookAt:se,startPhase:pe,direction:k}}function gi(o,l){const h=(o.startPhase+l*o.direction)*2*Math.PI,S=Math.cos(h),x=Math.sin(h),k=z.add(o.center,z.add(z.scale(o.u,o.radius*S,z.create()),z.scale(o.v,o.radius*x,z.create()),z.create()),z.create()),B=z.normalize(z.sub(o.lookAt,k,z.create())),V=z.cross(B,o.normal,z.create());z.length(V)<1e-6&&z.copy(o.u,V),z.normalize(V,V);const T=z.cross(B,V,z.create());z.normalize(T,T);const A=ct.create();return A[0]=V[0],A[1]=T[0],A[2]=B[0],A[3]=0,A[4]=V[1],A[5]=T[1],A[6]=B[1],A[7]=0,A[8]=V[2],A[9]=T[2],A[10]=B[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:k,rotation:A,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Mc(o,l={}){const h=bi(o,l);if(!h)return[];const S=l.numViews??120;return Array.from({length:S},(x,k)=>({...gi(h,k/S),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Bc(o){const l=new Uint8Array(o),h=Math.min(l.byteLength,65536),S=new TextDecoder("ascii").decode(l.subarray(0,h)),x=S.indexOf("end_header");if(x<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=x+10+1,B=S.slice(0,x).split(/\r?\n/).map(ie=>ie.trim()).filter(Boolean);if(B[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const V=B.find(ie=>ie.startsWith("format"));if(!V||!V.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${V??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},A=[];let R=null;for(const ie of B)if(ie.startsWith("element ")){const[,me,ze]=ie.split(/\s+/);R={name:me,count:parseInt(ze,10),props:[],bytesPerRecord:0,hasList:!1},A.push(R)}else if(ie.startsWith("property ")&&R){const me=ie.split(/\s+/);if(me[1]==="list"){const ze=me[2],re=me[3],_e=me[4];R.props.push({name:_e,type:re,isList:!0,listCountType:ze,listItemType:re}),R.hasList=!0}else{const ze=me[1],re=me[2];if(R.props.push({name:re,type:ze,isList:!1}),T[ze]===void 0)throw new Error(`mesh PLY: unsupported prop type '${ze}'`);R.bytesPerRecord+=T[ze]}}const U=A.find(ie=>ie.name==="vertex"),K=A.find(ie=>ie.name==="face"||ie.name==="faces");if(!U)throw new Error("mesh PLY: missing 'element vertex'");if(!K)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(U.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const I=U.props.find(ie=>ie.name==="x"),W=U.props.find(ie=>ie.name==="y"),H=U.props.find(ie=>ie.name==="z");if(!I||!W||!H)throw new Error("mesh PLY: vertex must have x/y/z");let N=0;const ue=new Map;for(const ie of U.props)ue.set(ie.name,{off:N,type:ie.type}),N+=T[ie.type];const j=ue.get("x"),Z=ue.get("y"),$=ue.get("z");if(j.type!==Z.type||j.type!==$.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${j.type}/${Z.type}/${$.type})`);const ce=j.type,se=ce==="double"||ce==="float64";if(!se&&ce!=="float"&&ce!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ce}')`);const pe=new Float32Array(U.count*3),oe=new DataView(o),de=k,Ee=U.bytesPerRecord;for(let ie=0;ie<U.count;ie++){const me=de+ie*Ee;se?(pe[ie*3+0]=oe.getFloat64(me+j.off,!0),pe[ie*3+1]=oe.getFloat64(me+Z.off,!0),pe[ie*3+2]=oe.getFloat64(me+$.off,!0)):(pe[ie*3+0]=oe.getFloat32(me+j.off,!0),pe[ie*3+1]=oe.getFloat32(me+Z.off,!0),pe[ie*3+2]=oe.getFloat32(me+$.off,!0))}const Ue=de+U.count*Ee,Ie=K.props.find(ie=>ie.isList);if(!Ie)throw new Error("mesh PLY: face element has no list property");const Re=T[Ie.listCountType],Be=T[Ie.listItemType];if(Re!==1)throw new Error(`mesh PLY: unsupported face list count size ${Re}`);let we=Ue,Ce=0;for(let ie=0;ie<K.count;ie++){const me=oe.getUint8(we);me===3&&Ce++,we+=1+me*Be}const Q=new Uint32Array(Ce*3);we=Ue;let ee=0;for(let ie=0;ie<K.count;ie++){const me=oe.getUint8(we);if(we+=1,me===3)for(let ze=0;ze<3;ze++){const re=we+ze*Be;let _e;if(Be===4)_e=oe.getUint32(re,!0);else if(Be===2)_e=oe.getUint16(re,!0);else if(Be===1)_e=oe.getUint8(re);else throw new Error(`mesh PLY: unsupported face index size ${Be}`);Q[ee++]=_e}we+=me*Be}return{positions:pe,indices:Q}}function Tc(o){const l=new DataView(o);if(o.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const h=l.getUint32(0,!0),S=l.getUint32(4,!0),x=h*12,k=S*4;if(o.byteLength<8+x+k)throw new Error(`mesh .bin: truncated (expected ${8+x+k} B, got ${o.byteLength} B)`);const B=new Float32Array(o.slice(8,8+x)),V=new Uint32Array(o.slice(8+x,8+x+k));return{positions:B,indices:V}}function wi(o,l){return(l??"").toLowerCase().endsWith(".ply")?Bc(o):Tc(o)}function Dc(o,l){const h=o.length/3,S=new Float32Array(h*3);for(let x=0;x<l.length;x+=3){const k=l[x]*3,B=l[x+1]*3,V=l[x+2]*3,T=o[k],A=o[k+1],R=o[k+2],U=o[B],K=o[B+1],I=o[B+2],W=o[V],H=o[V+1],N=o[V+2],ue=U-T,j=K-A,Z=I-R,$=W-T,ce=H-A,se=N-R,pe=j*se-Z*ce,oe=Z*$-ue*se,de=ue*ce-j*$;S[k]+=pe,S[k+1]+=oe,S[k+2]+=de,S[B]+=pe,S[B+1]+=oe,S[B+2]+=de,S[V]+=pe,S[V+1]+=oe,S[V+2]+=de}for(let x=0;x<h;x++){const k=x*3,B=S[k],V=S[k+1],T=S[k+2],A=Math.sqrt(B*B+V*V+T*T);if(A>1e-12){const R=1/A;S[k]=B*R,S[k+1]=V*R,S[k+2]=T*R}}return S}function xi(o,l){const h=o.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(h,0,l.positions);const S=Dc(l.positions,l.indices),x=o.createBuffer({label:"mesh-cull normal buffer",size:S.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(x,0,S);const k=o.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return o.queue.writeBuffer(k,0,l.indices),{vertexBuffer:h,normalBuffer:x,indexBuffer:k,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function Ac(o,l){try{const h=await fetch(l);if(!h.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${h.status}`),null;const S=await h.arrayBuffer(),x=wi(S,l);return console.log(`[mesh-cull] loaded ${l}: ${x.positions.length/3} verts, ${x.indices.length/3} tris`),xi(o,x)}catch(h){return console.warn(`[mesh-cull] load error for ${l}:`,h),null}}function Lc(o,l,h){try{const S=wi(l,h);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),xi(o,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const yi="BITYMI01",zc=0,Ic=1,Gc=2,Uc=3,Rc=4,Vc=5,Oc=6;function Yn(o){const l=(o&32768)>>15,h=(o&31744)>>10,S=o&1023;return h===0?(l?-1:1)*Math.pow(2,-14)*(S/1024):h===31?S?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,h-15)*(1+S/1024)}function ri(o,l,h,S,x,k){const B=(o-h.width*.5)/S.focal[0],V=-((l-h.height*.5)/S.focal[1]),T=S.rotation,A=T[0],R=T[4],U=T[8],K=T[1],I=T[5],W=T[9],H=T[2],N=T[6],ue=T[10];let j=B*A+V*K+H,Z=B*R+V*I+N,$=B*U+V*W+ue;const ce=Math.hypot(j,Z,$)||1;j/=ce,Z/=ce,$/=ce;const se=S.position[0],pe=S.position[1],oe=S.position[2],de=k*.005,Ee=de*de,Ue=new Uint32Array(x.buffer,x.byteOffset,x.length),Ie=x.length/8;let Re=1/0,Be=0,we=0,Ce=0,Q=-1;for(let ee=0;ee<Ie;ee++){const ie=ee*8,me=x[ie+0]-se,ze=x[ie+1]-pe,re=x[ie+2]-oe,_e=me*j+ze*Z+re*$;if(_e<=0)continue;const ge=me-_e*j,Te=ze-_e*Z,le=re-_e*$;if(ge*ge+Te*Te+le*le>=Ee||!(Ue[ie+7]>>>16&1))continue;const w=Ue[ie+5],i=Ue[ie+6],f=Yn(w&65535),d=Yn(w>>>16&65535),b=Yn(i&65535),g=Yn(i>>>16&65535),P=Math.hypot(f,d,b,g)||1,E=f/P,r=d/P,m=b/P,u=g/P,p=2*(r*u+E*m),a=2*(m*u-E*r),_=1-2*(r*r+m*m),y=j*p+Z*a+$*_;let v;Math.abs(y)>1e-6?(v=(me*p+ze*a+re*_)/y,(!isFinite(v)||v<=0)&&(v=_e)):v=_e,v<Re&&(Re=v,Be=se+v*j,we=pe+v*Z,Ce=oe+v*$,Q=ee)}return Q<0?null:[Be,we,Ce]}function Pi(o){const l=new Uint8Array(o),h=new TextDecoder().decode(l.subarray(0,8));if(h!==yi)throw new Error(`Not a BITYMI bundle (bad magic '${h}')`);const S=new DataView(o),x=S.getUint32(8,!0),k=12,B=20;let V=null,T=null,A=null,R=null;for(let U=0;U<x;U++){const K=k+U*B,I=S.getUint32(K+0,!0),W=Number(S.getBigUint64(K+4,!0)),H=Number(S.getBigUint64(K+12,!0)),N=l.slice(W,W+H).buffer;I===zc||I===Ic||I===Vc?V=N:I===Gc?T=N:I===Uc||I===Rc?A=N:I===Oc&&(R=N)}if(V===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:V,camerasBuffer:T,atlasBuffer:A,meshBuffer:R}}async function Fc(o,l){var B;const h=await fetch(o);if(!h.ok)throw new Error(`fetch failed: ${h.status} ${h.statusText}`);const S=(()=>{const V=h.headers.get("content-length");return V&&parseInt(V,10)||void 0})(),x=(B=h.body)==null?void 0:B.getReader();let k;if(!x)k=await h.arrayBuffer(),l&&l(k.byteLength,S,0);else{const V=[];let T=0,A=performance.now(),R=0;for(;;){const{done:I,value:W}=await x.read();if(I)break;V.push(W),T+=W.byteLength;const H=performance.now();if(H-A>=150&&l){const N=(T-R)/((H-A)/1e3);l(T,S,N),A=H,R=T}}const U=new Uint8Array(T);let K=0;for(const I of V)U.set(I,K),K+=I.byteLength;k=U.buffer,l&&l(T,S,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===yi?{bundle:Pi(k),rawPly:null}:{bundle:null,rawPly:k}}function Nc(o){return new Promise(l=>{const h=document.createElement("input");h.type="file",h.accept=o,h.style.display="none",h.onchange=()=>{var S;return l(((S=h.files)==null?void 0:S[0])??null)},document.body.appendChild(h),h.click(),setTimeout(()=>document.body.removeChild(h),1e3)})}function $c(o,l,h){const S=document.getElementById("ui-panel-container"),x=document.getElementById("load-button"),k=document.getElementById("quick-links");x&&(x.onclick=async()=>{const R=await Nc(".ply,.bitymi");if(R)if(S&&(S.style.display="none"),R.name.toLowerCase().endsWith(".bitymi")){const U=await R.arrayBuffer(),{pcBuffer:K}=Pi(U),I=new File([K],R.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),W=await Ms(I,o);l(W)}else{const U=await Ms(R,o);l(U)}}),k&&(k.innerHTML="");const B=new URLSearchParams(window.location.search),V=B.get("bundle")??B.get("model_url"),T=B.get("camera_url"),A=B.get("mesh_url");V&&(S&&(S.style.display="none"),h(V,T,A))}async function qc(o,l,h,S){const x=new Ls(o,h),k=new Pc(x);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const V="rgba8unorm";l.configure({device:h,format:V,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const A=()=>{x.on_update_canvas(),T!==null&&Kn(o.width,o.height,h,T.render_settings_buffer)};new ResizeObserver(()=>{const le=Math.max(.25,re.render_scale),M=Math.max(1,Math.ceil(le*o.clientWidth)),G=Math.max(1,Math.ceil(le*o.clientHeight));o.width===M&&o.height===G||(o.width=M,o.height=G,A())}).observe(o);let U=0,K=0;const I=()=>{(o.width!==U||o.height!==K)&&(U=o.width,K=o.height,A())},W=new URLSearchParams(window.location.search);let N=W.get("animation")==="1";k.enabled=!N;const ue=W.get("camera_url"),j=W.get("mesh_cull"),Z=j==="1"||j==="true",$=W.get("mesh_normal_margin")??W.get("mesh_margin"),ce=$!==null?Number($):NaN,se=Number.isFinite(ce)?ce:0,pe=W.get("mesh_debug"),oe=pe==="1"||pe==="true",de=W.get("bfc"),Ee=de==="1"||de==="true",Ue=W.get("bfc_cos"),Ie=Ue!==null?Number(Ue):NaN,Re=Number.isFinite(Ie)?Ie:2,Be=W.get("mesh_sample_mode"),we=Be!==null?parseInt(Be,10):NaN,Ce=Number.isFinite(we)&&we>=0&&we<=7?we:1,Q=W.get("mesh_silhouette"),ee=Q==="1"||Q==="true",ie=W.get("mesh_invert_depth"),me=ie==="1"||ie==="true",ze=Math.max(1,window.devicePixelRatio||1),re={gaussian_scaling:1,sh_bias:.5,animate:N,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:Ee,bfc_cos:Re,mesh_cull:Z,mesh_margin:se,mesh_debug:oe,mesh_sample_mode:Ce,mesh_silhouette:ee,mesh_invert_depth:me,render_scale:1},_e=new ql.Pane({title:"Config",expanded:!0});_e.addInput(re,"animate",{label:"Animate"}).on("change",le=>{const M=N;N=le.value,k.enabled=!le.value,!M&&N&&ge.value&&ge.value.onAnimateStart(),M&&!N&&ge.value&&ge.value.onAnimateStop()}),_e.addInput(re,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ge={value:null};$c(h,le=>Te(le,[],null,null),async(le,M,G)=>{let w=M??ue,i,f=null,d=null;const b=le.toLowerCase();if(b.endsWith(".bitymi")||b.includes(".bitymi?")){Is("downloading bundle ...");try{const{bundle:P}=await Fc(le,(r,m,u)=>{const p=r/1048576,a=m?m/(1024*1024):void 0,_=u/(1024*1024),y=m?Math.min(99,Math.floor(r/m*100)):void 0,v=a?`total ${a.toFixed(1)} MB`:"total -- MB",L=a&&y!==void 0?`${p.toFixed(1)} MB downloaded (${y}%)`:`${p.toFixed(1)} MB downloaded`,O=`${_.toFixed(2)} MB/s`;Gt(`downloading bundle ...
${v}, ${L}
${O}`)});if(!P)throw new Error("Expected a .bitymi bundle");Gt("parsing PLY ...");const E=new File([P.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(i=await Ms(E,h),!w&&P.camerasBuffer&&(w=URL.createObjectURL(new Blob([P.camerasBuffer],{type:"application/json"}))),P.atlasBuffer){const r=P.atlasBuffer.byteLength/1048576;Gt(`uploading atlas ...
${r.toFixed(1)} MB BC7`);try{const m=Vl(P.atlasBuffer);f=Fl(h,m,!0)}catch(m){console.warn("[atlas] failed to parse/upload atlas:",m)}}P.meshBuffer&&!G&&(Gt("uploading mesh ..."),d=Lc(h,P.meshBuffer,"bundle.mesh"))}catch(P){throw Mn(),P}}else i=await Nl(le,h);G&&(Gt("loading mesh ..."),d=await Ac(h,G));const g=w?await mc(w):[];g.length>0&&x.set_preset(g[0]),Te(i,g,f,d)});function Te(le,M=[],G=null,w=null){const i=[(le.bbox.min[0]+le.bbox.max[0])/2,(le.bbox.min[1]+le.bbox.max[1])/2,(le.bbox.min[2]+le.bbox.max[2])/2];k.setBbox(le.bbox.min,le.bbox.max);const f=.5*Math.sqrt((le.bbox.max[0]-le.bbox.min[0])**2+(le.bbox.max[1]-le.bbox.min[1])**2+(le.bbox.max[2]-le.bbox.min[2])**2);function d(te,he){const ne=ri(te,he,o,x,le.surfel_data,f);ne&&(k.setOrbitPivot(ne),console.log(`[pick] orbit pivot → (${ne[0].toFixed(3)}, ${ne[1].toFixed(3)}, ${ne[2].toFixed(3)})`))}function b(){const te=o.width*.5,he=o.height*.5,ne=ri(te,he,o,x,le.surfel_data,f);if(!ne)return;const Le=x.rotation,Ve=Le[2],ye=Le[6],Me=Le[10],Oe=ne[0]-x.position[0],je=ne[1]-x.position[1],ot=ne[2]-x.position[2],mt=Oe*Ve+je*ye+ot*Me;mt>0&&k.setOrbitDepth(mt)}if(M.length===0){const te=le.bbox.max[0]-le.bbox.min[0],he=le.bbox.max[1]-le.bbox.min[1],ne=le.bbox.max[2]-le.bbox.min[2],Ve=.5*Math.sqrt(te*te+he*he+ne*ne)*.5;z.set(i[0]-Ve,i[1]-Ve,i[2]-Ve,x.position);const ye=z.create(Ve,Ve,Ve);z.normalize(ye,ye);const Me=z.create(0,1,0),Oe=z.create();z.cross(Me,ye,Oe),z.normalize(Oe,Oe);const je=z.create();z.cross(ye,Oe,je);const ot=wt.create(Oe[0],je[0],ye[0],Oe[1],je[1],ye[1],Oe[2],je[2],ye[2]);ct.fromMat3(ot,x.rotation),x.update_buffer()}k.setCenter(z.create(le.centroid[0],le.centroid[1],le.centroid[2]));const g=new hc(le,h,V,x.uniform_buffer,S,G,w);T=g,Kn(o.width,o.height,h,g.render_settings_buffer),re.atlas_enabled=G!==null,w===null&&(re.mesh_cull=!1),g.setMeshCullEnabled(re.mesh_cull),g.setMeshMargin(re.mesh_margin),w===null&&(re.mesh_debug=!1),g.setMeshOverlayEnabled(re.mesh_debug);{const te=le.surfel_data,he=te.length/8;let ne=0,Le=0,Ve=0;for(let Me=0;Me<he;Me++)ne+=te[Me*8],Le+=te[Me*8+1],Ve+=te[Me*8+2];const ye=he>0?[ne/he,Le/he,Ve/he]:[0,0,0];g.setBfcParams(re.bfc_cos,ye),en({bfc:re.bfc},h,g.render_settings_buffer),console.log(`[bfc] flag=${re.bfc} cos=${re.bfc_cos} centroid=(${ye[0].toFixed(3)}, ${ye[1].toFixed(3)}, ${ye[2].toFixed(3)})`)}en({meshSampleMode:re.mesh_sample_mode,meshSilhouetteCull:re.mesh_silhouette,meshInvertDepth:re.mesh_invert_depth},h,g.render_settings_buffer),console.log(`[mesh-cull] ${w!==null?"mesh loaded":"no mesh"} · toggle=${re.mesh_cull} · margin=${re.mesh_margin}m · debug=${re.mesh_debug} · sample_mode=${re.mesh_sample_mode} · silhouette=${re.mesh_silhouette} · invert=${re.mesh_invert_depth}`);let P=!1;const E=(()=>{if(G!==null)return`${G.meta.format===2?"BC7":G.meta.format===3?"ASTC 4×4":G.meta.format===7?"BC7 codebook gather (typeD)":`format=${G.meta.format}`} ${G.meta.width}×${G.meta.height}, ${G.meta.n_layers} layers`;const te=h.features.has("texture-compression-bc"),he=h.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(te?["BC7"]:[]).concat(he?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",E),ti(le.sh_bias,h,g.render_settings_buffer),ei(re.gaussian_scaling,h,g.render_settings_buffer),re.sh_bias=le.sh_bias;const r=le.num_points.toLocaleString(),m={stats:`${r} surfels · -- fps`};_e.addMonitor(m,"stats",{label:"Stats",interval:200}),_e.addMonitor({atlas:E},"atlas",{label:"Atlas"});const u={stages:"— ms · awaiting timestamp data"};_e.addMonitor(u,"stages",{label:"Stages",interval:500});let p=null;if(g.timeQueryEnabled){p=document.createElement("canvas"),p.width=280,p.height=24,p.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(p);const te=ne=>{const Le=p.getContext("2d");if(!Le)return;const Ve=p.width,ye=p.height;if(Le.clearRect(0,0,Ve,ye),!ne||ne.total<=0){Le.fillStyle="#888",Le.font="11px ui-monospace,Menlo,monospace",Le.fillText("awaiting GPU timestamps…",8,16);return}const Me=[{label:"cull",ms:ne.cull,color:"#3aa3ff"},{label:"pre",ms:ne.preprocess,color:"#3ad27a"},{label:"sort",ms:ne.sort,color:"#ffa53a"},{label:"render",ms:ne.render,color:"#ff5566"}],Oe=Math.max(.001,Me.reduce((ot,mt)=>ot+mt.ms,0));let je=0;Le.font="10px ui-monospace,Menlo,monospace",Le.textBaseline="middle";for(const ot of Me){const mt=ot.ms/Oe*Ve;Le.fillStyle=ot.color,Le.fillRect(je,0,mt,ye),mt>=38&&(Le.fillStyle="#000c",Le.fillText(`${ot.label} ${ot.ms.toFixed(1)}`,je+4,ye/2)),je+=mt}};setInterval(()=>{P||g.readPerfMetrics({silent:!0}).then(()=>{const ne=g.lastStageBreakdownMs;te(ne),ne&&(u.stages=`${ne.total.toFixed(1)} ms · cull ${ne.cull.toFixed(1)} / pre ${ne.preprocess.toFixed(1)} / sort ${ne.sort.toFixed(1)} / render ${ne.render.toFixed(1)}`)}).catch(ne=>console.warn("[perf] readPerfMetrics failed:",ne))},500)}const a=.4,_=3,y=.3;let v=null,L=0,O=0;const F=pt.create(),ae=wt.create();let Y=M.length>0?0:-1;const J={view:M.length>0?`${Y+1} / ${M.length}: ${M[Y].img_name??Y}`:"— no presets —"};_e.addMonitor(J,"view",{label:"View",interval:100});function ve(te){const he=wt.create(te[0],te[1],te[2],te[4],te[5],te[6],te[8],te[9],te[10]);return pt.fromMat(he)}function xe(te,he){v={fromPos:z.clone(x.position),toPos:z.clone(te.position),fromQuat:pt.normalize(ve(x.rotation)),toQuat:pt.normalize(ve(te.rotation)),target:te,t:0,duration:Math.max(.01,he)}}const fe=(te,he=!0)=>{if(M.length===0)return;Y=(te%M.length+M.length)%M.length;const ne=M[Y];he?xe(ne,a):(x.set_preset(ne),k.resetToCamera(),b()),J.view=`${Y+1} / ${M.length}: ${M[Y].img_name??Y}`};M.length>0&&(_e.addButton({title:"◀ Prev view"}).on("click",()=>fe(Y-1)),_e.addButton({title:"Next view ▶"}).on("click",()=>fe(Y+1)));const be=M.length>0?bi(M,{tiltDownDeg:15,alignFirst:!0}):null,De=be?Mc(M,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ke=0;const qe=12;ge.value={onAnimateStart:()=>{ke=0},onAnimateStop:()=>{k.resetToCamera(),b()}},_e.addInput(re,"render_scale",{label:"Render scale",min:.25,max:ze,step:.25}).on("change",te=>{const he=Math.max(.25,te.value),ne=Math.max(1,Math.ceil(he*o.clientWidth)),Le=Math.max(1,Math.ceil(he*o.clientHeight));(o.width!==ne||o.height!==Le)&&(o.width=ne,o.height=Le,A())}),_e.addInput(re,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",te=>ei(te.value,h,g.render_settings_buffer)),_e.addInput(re,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",te=>ti(te.value,h,g.render_settings_buffer)),_e.addInput(re,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",te=>{g.bgColor=[te.value.r,te.value.g,te.value.b,te.value.a]});const Ze=G?G.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";_e.addInput(re,"atlas_enabled",{label:Ze}).on("change",te=>g.setAtlasEnabled(te.value)),_e.addInput(re,"bfc",{label:"Backface"}).on("change",te=>en({bfc:te.value},h,g.render_settings_buffer));const We=_e.addInput(re,"mesh_cull",{label:"Mesh cull"});We.on("change",te=>g.setMeshCullEnabled(te.value)),g.hasMesh||(We.disabled=!0);const He=_e.addInput(re,"mesh_margin",{label:"Mesh normal margin (m)",min:-.5,max:.5,step:.005});He.on("change",te=>g.setMeshMargin(te.value)),g.hasMesh||(He.disabled=!0);const Xe=_e.addInput(re,"mesh_debug",{label:"Mesh debug"});Xe.on("change",te=>g.setMeshOverlayEnabled(te.value)),g.hasMesh||(Xe.disabled=!0);const nt=_e.addInput(re,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});nt.on("change",te=>en({meshSampleMode:te.value},h,g.render_settings_buffer)),g.hasMesh||(nt.disabled=!0);const st=_e.addInput(re,"mesh_silhouette",{label:"Silhouette cull"});st.on("change",te=>en({meshSilhouetteCull:te.value},h,g.render_settings_buffer)),g.hasMesh||(st.disabled=!0);const rt=_e.addInput(re,"mesh_invert_depth",{label:"Invert depth cull"});rt.on("change",te=>en({meshInvertDepth:te.value},h,g.render_settings_buffer)),g.hasMesh||(rt.disabled=!0),_e.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(M.length>0)x.set_preset(M[0]);else{const te=le.bbox.max[0]-le.bbox.min[0],he=le.bbox.max[1]-le.bbox.min[1],ne=le.bbox.max[2]-le.bbox.min[2],Ve=.5*Math.sqrt(te*te+he*he+ne*ne)*.5;z.set(i[0]-Ve,i[1]-Ve,i[2]-Ve,x.position);const ye=z.create(Ve,Ve,Ve);z.normalize(ye,ye);const Me=z.create();z.cross(z.create(0,1,0),ye,Me),z.normalize(Me,Me);const Oe=z.create();z.cross(ye,Me,Oe);const je=wt.create(Me[0],Oe[0],ye[0],Me[1],Oe[1],ye[1],Me[2],Oe[2],ye[2]);ct.fromMat3(je,x.rotation),x.update_buffer()}k.resetToCamera(),b()});const Qe={result:"— click Benchmark —"};_e.addMonitor(Qe,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Je={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function it(){const he=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ne of Object.keys(Je))if(he.startsWith(ne))return ne;return null}const Fe=document.createElement("div");Fe.id="bench-overlay",Fe.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Fe);function et(te,he,ne){const Le=Math.floor(he/Math.max(1,ne)*100),Ve=32,ye=Math.floor(he/Math.max(1,ne)*Ve),Me="█".repeat(ye)+"░".repeat(Ve-ye);Fe.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${te}</div><div>[${Me}] ${Le}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${he} / ${ne} frames · offscreen · pipelined · no vsync</div>`,Fe.style.display="block"}function Ke(){Fe.style.display="none"}async function ut(te=10,he=200){if(P)return;if(M.length===0){Qe.result="no cameras to benchmark";return}P=!0;const ne=N,Le=re.animate,Ve=new Float32Array(x.position),ye=new Float32Array(x.rotation);N=!1,re.animate=!1,_e.refresh(),v=null,k.enabled=!1;const Me=it(),Oe=Me?Je[Me]:null,je=(Oe==null?void 0:Oe.w)??o.width,ot=(Oe==null?void 0:Oe.h)??o.height,mt=(Oe==null?void 0:Oe.fovY)??x.getFov(),Dn=Me?`${Me} · ${je>=4e3/4+500?"images_4":"images_2"}`:"custom",An=o.width,Ut=o.height,ts=x.getFov();o.width=je,o.height=ot,x.setFov(mt),Kn(je,ot,h,g.render_settings_buffer);const Ln=h.createTexture({size:[je,ot,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),zn=Ln.createView(),In=()=>{const at=h.createCommandEncoder();g.frame(at,zn,!1),h.queue.submit([at.finish()])},hn=()=>new Promise(at=>setTimeout(at,0)),Gn=20,Un=async(at,Wt)=>{let jt=0,kt=0;for(et(Wt,0,at),await hn();kt<at;){const sn=Math.min(Gn,at-kt),rn=performance.now();for(let fn=0;fn<sn;fn++)x.set_preset(M[(kt+fn)%M.length]),In();await h.queue.onSubmittedWorkDone();const ns=performance.now();jt+=ns-rn,kt+=sn,et(Wt,kt,at),await hn()}return jt};try{await Un(te,"Warming up");const Wt=await Un(he,"Benchmarking")/he,jt=1e3/Wt,kt=le.num_points??le.surfel_data.length/8,sn=(mt*180/Math.PI).toFixed(1),rn=`${jt.toFixed(1)} FPS  (${Wt.toFixed(2)} ms/frame)
${je}×${ot} · fovY ${sn}° · ${Dn}
${kt.toLocaleString()} surfels · ${te}w+${he}b · pipelined`;Qe.result=rn,console.log("[bench]",rn.replace(/\n/g,"  |  "))}catch(at){console.error("[bench] failed:",at),Qe.result=`bench failed: ${at}`}finally{Ke(),Ln.destroy(),o.width=An,o.height=Ut,x.setFov(ts),Kn(An,Ut,h,g.render_settings_buffer),x.position.set(Ve),x.rotation.set(ye),x.update_buffer(),k.enabled=!ne,N=ne,re.animate=Le,_e.refresh(),P=!1}}_e.addButton({title:"📊 Benchmark"}).on("click",()=>ut()),document.addEventListener("keydown",te=>{const he=te.key;if(he>="0"&&he<="9"&&M.length>0){const ne=parseInt(he);ne<M.length&&fe(ne)}else he==="ArrowLeft"||he==="PageUp"?(fe(Y-1),te.preventDefault()):he==="ArrowRight"||he==="PageDown"?(fe(Y+1),te.preventDefault()):(he==="d"||he==="D")&&g.debugReadSortedIndices(30).catch(ne=>console.error("[DEBUG] readback failed:",ne))});function tt(te,he){const ne=o.getBoundingClientRect(),Le=window.devicePixelRatio||1;return[(te-ne.left)*Le,(he-ne.top)*Le]}o.addEventListener("dblclick",te=>{const[he,ne]=tt(te.clientX,te.clientY);d(he,ne)});let xt=0,vt=0,yt=0;o.addEventListener("pointerdown",te=>{if(te.pointerType!=="touch")return;const he=performance.now(),ne=he-xt,Le=te.clientX-vt,Ve=te.clientY-yt;if(ne>0&&ne<300&&Le*Le+Ve*Ve<40*40){const[ye,Me]=tt(te.clientX,te.clientY);d(ye,Me),xt=0}else xt=he,vt=te.clientX,yt=te.clientY});function Pt(){return B}let Mt=performance.now(),Et=60,Bt=Promise.resolve(),Tt=0;async function St(){var Ve;const te=performance.now(),he=Math.min((te-Mt)/1e3,.1);if(Mt=te,he>0){const ye=((Ve=g.lastStageBreakdownMs)==null?void 0:Ve.total)??0,Me=ye>.5?1e3/ye:1/he;Et=Et*.9+Me*.1,m.stats=`${r} surfels · ${Math.round(Et)} fps`}if(P){requestAnimationFrame(St);return}if(Pt()&&(v||N)&&(v=null,k.resetToCamera(),b(),N&&(N=!1,re.animate=!1,_e.refresh())),N&&re.animateMode==="circle"&&be){ke+=he/qe,ke>=1&&(ke-=1);const ye=gi(be,ke);x.set_preset(ye),k.update(he);const Me=h.createCommandEncoder();g.frame(Me,l.getCurrentTexture().createView()),h.queue.submit([Me.finish()]),Tt++,Tt===2&&Mn(),requestAnimationFrame(St);return}if(v){v.t+=he/v.duration;const ye=Math.min(1,v.t),Me=ye*ye*(3-2*ye);z.lerp(v.fromPos,v.toPos,Me,x.position),pt.slerp(v.fromQuat,v.toQuat,Me,F),wt.fromQuat(F,ae),ct.fromMat3(ae,x.rotation),x.update_buffer(),v.t>=1&&(x.set_preset(v.target),v=null,N?M.length>0&&(L=y):(k.resetToCamera(),b()))}else if(N&&!Pt()){const ye=re.animateMode==="circle"&&De.length>0,Me=ye?De:M;if(Me.length!==0){if(L-=he,L<=0){const je=((ye?O:Y)+1)%Me.length;ye?O=je:Y=je;const ot=ye?_/8:_;xe(Me[je],ot),ye||(J.view=`${Y+1} / ${M.length}: ${M[Y].img_name??Y}`)}}}k.update(he),I(),await Bt;const ne=h.createCommandEncoder(),Le=l.getCurrentTexture().createView();g.frame(ne,Le),h.queue.submit([ne.finish()]),Bt=h.queue.onSubmittedWorkDone(),Tt++,Tt===2&&Mn(),requestAnimationFrame(St)}requestAnimationFrame(St)}}(function(){let l="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const k=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const h=document.createElement("div");h.textContent="v "+l,h.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(h.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(h)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const h=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");zl(S!==null);const x=S.getContext("webgpu");qc(S,x,h,l)})();
