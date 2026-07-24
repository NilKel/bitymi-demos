var bl=Object.defineProperty;var vl=(i,l,f)=>l in i?bl(i,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[l]=f;var j=(i,l,f)=>(vl(i,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))S(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&S(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function S(w){if(w.ep)return;w.ep=!0;const k=f(w);fetch(w.href,k)}})();function gl(i,l){return class extends i{constructor(...f){super(...f),l(this)}}}const wl=gl(Array,i=>i.fill(0));let Ue=1e-6;function xl(i){function l(y=0,C=0){const E=new i(2);return y!==void 0&&(E[0]=y,C!==void 0&&(E[1]=C)),E}const f=l;function S(y,C,E){const r=E??new i(2);return r[0]=y,r[1]=C,r}function w(y,C){const E=C??new i(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function k(y,C){const E=C??new i(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function M(y,C){const E=C??new i(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function F(y,C=0,E=1,r){const m=r??new i(2);return m[0]=Math.min(E,Math.max(C,y[0])),m[1]=Math.min(E,Math.max(C,y[1])),m}function T(y,C,E){const r=E??new i(2);return r[0]=y[0]+C[0],r[1]=y[1]+C[1],r}function A(y,C,E,r){const m=r??new i(2);return m[0]=y[0]+C[0]*E,m[1]=y[1]+C[1]*E,m}function V(y,C){const E=y[0],r=y[1],m=C[0],d=C[1],p=Math.sqrt(E*E+r*r),a=Math.sqrt(m*m+d*d),_=p*a,x=_&&_e(y,C)/_;return Math.acos(x)}function G(y,C,E){const r=E??new i(2);return r[0]=y[0]-C[0],r[1]=y[1]-C[1],r}const Y=G;function z(y,C){return Math.abs(y[0]-C[0])<Ue&&Math.abs(y[1]-C[1])<Ue}function K(y,C){return y[0]===C[0]&&y[1]===C[1]}function H(y,C,E,r){const m=r??new i(2);return m[0]=y[0]+E*(C[0]-y[0]),m[1]=y[1]+E*(C[1]-y[1]),m}function N(y,C,E,r){const m=r??new i(2);return m[0]=y[0]+E[0]*(C[0]-y[0]),m[1]=y[1]+E[1]*(C[1]-y[1]),m}function he(y,C,E){const r=E??new i(2);return r[0]=Math.max(y[0],C[0]),r[1]=Math.max(y[1],C[1]),r}function U(y,C,E){const r=E??new i(2);return r[0]=Math.min(y[0],C[0]),r[1]=Math.min(y[1],C[1]),r}function Z(y,C,E){const r=E??new i(2);return r[0]=y[0]*C,r[1]=y[1]*C,r}const W=Z;function de(y,C,E){const r=E??new i(2);return r[0]=y[0]/C,r[1]=y[1]/C,r}function $(y,C){const E=C??new i(2);return E[0]=1/y[0],E[1]=1/y[1],E}const be=$;function se(y,C,E){const r=E??new i(3),m=y[0]*C[1]-y[1]*C[0];return r[0]=0,r[1]=0,r[2]=m,r}function _e(y,C){return y[0]*C[0]+y[1]*C[1]}function ue(y){const C=y[0],E=y[1];return Math.sqrt(C*C+E*E)}const xe=ue;function Ae(y){const C=y[0],E=y[1];return C*C+E*E}const Ie=Ae;function ie(y,C){const E=y[0]-C[0],r=y[1]-C[1];return Math.sqrt(E*E+r*r)}const ae=ie;function me(y,C){const E=y[0]-C[0],r=y[1]-C[1];return E*E+r*r}const Q=me;function X(y,C){const E=C??new i(2),r=y[0],m=y[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(E[0]=r/d,E[1]=m/d):(E[0]=0,E[1]=0),E}function ne(y,C){const E=C??new i(2);return E[0]=-y[0],E[1]=-y[1],E}function fe(y,C){const E=C??new i(2);return E[0]=y[0],E[1]=y[1],E}const Be=fe;function le(y,C,E){const r=E??new i(2);return r[0]=y[0]*C[0],r[1]=y[1]*C[1],r}const ye=le;function Ce(y,C,E){const r=E??new i(2);return r[0]=y[0]/C[0],r[1]=y[1]/C[1],r}const Ee=Ce;function Re(y=1,C){const E=C??new i(2),r=Math.random()*2*Math.PI;return E[0]=Math.cos(r)*y,E[1]=Math.sin(r)*y,E}function B(y){const C=y??new i(2);return C[0]=0,C[1]=0,C}function R(y,C,E){const r=E??new i(2),m=y[0],d=y[1];return r[0]=m*C[0]+d*C[4]+C[12],r[1]=m*C[1]+d*C[5]+C[13],r}function g(y,C,E){const r=E??new i(2),m=y[0],d=y[1];return r[0]=C[0]*m+C[4]*d+C[8],r[1]=C[1]*m+C[5]*d+C[9],r}function o(y,C,E,r){const m=r??new i(2),d=y[0]-C[0],p=y[1]-C[1],a=Math.sin(E),_=Math.cos(E);return m[0]=d*_-p*a+C[0],m[1]=d*a+p*_+C[1],m}function h(y,C,E){const r=E??new i(2);return X(y,r),Z(r,C,r)}function u(y,C,E){const r=E??new i(2);return ue(y)>C?h(y,C,r):fe(y,r)}function b(y,C,E){const r=E??new i(2);return H(y,C,.5,r)}return{create:l,fromValues:f,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:A,angle:V,subtract:G,sub:Y,equalsApproximately:z,equals:K,lerp:H,lerpV:N,max:he,min:U,mulScalar:Z,scale:W,divScalar:de,inverse:$,invert:be,cross:se,dot:_e,length:ue,len:xe,lengthSq:Ae,lenSq:Ie,distance:ie,dist:ae,distanceSq:me,distSq:Q,normalize:X,negate:ne,copy:fe,clone:Be,multiply:le,mul:ye,divide:Ce,div:Ee,random:Re,zero:B,transformMat4:R,transformMat3:g,rotate:o,setLength:h,truncate:u,midpoint:b}}const Lr=new Map;function Yr(i){let l=Lr.get(i);return l||(l=xl(i),Lr.set(i,l)),l}function yl(i){function l(a,_,x){const v=new i(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,x!==void 0&&(v[2]=x))),v}const f=l;function S(a,_,x,v){const L=v??new i(3);return L[0]=a,L[1]=_,L[2]=x,L}function w(a,_){const x=_??new i(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,_){const x=_??new i(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function M(a,_){const x=_??new i(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function F(a,_=0,x=1,v){const L=v??new i(3);return L[0]=Math.min(x,Math.max(_,a[0])),L[1]=Math.min(x,Math.max(_,a[1])),L[2]=Math.min(x,Math.max(_,a[2])),L}function T(a,_,x){const v=x??new i(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function A(a,_,x,v){const L=v??new i(3);return L[0]=a[0]+_[0]*x,L[1]=a[1]+_[1]*x,L[2]=a[2]+_[2]*x,L}function V(a,_){const x=a[0],v=a[1],L=a[2],O=_[0],q=_[1],pe=_[2],re=Math.sqrt(x*x+v*v+L*L),ee=Math.sqrt(O*O+q*q+pe*pe),we=re*ee,ke=we&&_e(a,_)/we;return Math.acos(ke)}function G(a,_,x){const v=x??new i(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const Y=G;function z(a,_){return Math.abs(a[0]-_[0])<Ue&&Math.abs(a[1]-_[1])<Ue&&Math.abs(a[2]-_[2])<Ue}function K(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function H(a,_,x,v){const L=v??new i(3);return L[0]=a[0]+x*(_[0]-a[0]),L[1]=a[1]+x*(_[1]-a[1]),L[2]=a[2]+x*(_[2]-a[2]),L}function N(a,_,x,v){const L=v??new i(3);return L[0]=a[0]+x[0]*(_[0]-a[0]),L[1]=a[1]+x[1]*(_[1]-a[1]),L[2]=a[2]+x[2]*(_[2]-a[2]),L}function he(a,_,x){const v=x??new i(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function U(a,_,x){const v=x??new i(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function Z(a,_,x){const v=x??new i(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const W=Z;function de(a,_,x){const v=x??new i(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function $(a,_){const x=_??new i(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const be=$;function se(a,_,x){const v=x??new i(3),L=a[2]*_[0]-a[0]*_[2],O=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=L,v[2]=O,v}function _e(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function ue(a){const _=a[0],x=a[1],v=a[2];return Math.sqrt(_*_+x*x+v*v)}const xe=ue;function Ae(a){const _=a[0],x=a[1],v=a[2];return _*_+x*x+v*v}const Ie=Ae;function ie(a,_){const x=a[0]-_[0],v=a[1]-_[1],L=a[2]-_[2];return Math.sqrt(x*x+v*v+L*L)}const ae=ie;function me(a,_){const x=a[0]-_[0],v=a[1]-_[1],L=a[2]-_[2];return x*x+v*v+L*L}const Q=me;function X(a,_){const x=_??new i(3),v=a[0],L=a[1],O=a[2],q=Math.sqrt(v*v+L*L+O*O);return q>1e-5?(x[0]=v/q,x[1]=L/q,x[2]=O/q):(x[0]=0,x[1]=0,x[2]=0),x}function ne(a,_){const x=_??new i(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function fe(a,_){const x=_??new i(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const Be=fe;function le(a,_,x){const v=x??new i(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const ye=le;function Ce(a,_,x){const v=x??new i(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const Ee=Ce;function Re(a=1,_){const x=_??new i(3),v=Math.random()*2*Math.PI,L=Math.random()*2-1,O=Math.sqrt(1-L*L)*a;return x[0]=Math.cos(v)*O,x[1]=Math.sin(v)*O,x[2]=L*a,x}function B(a){const _=a??new i(3);return _[0]=0,_[1]=0,_[2]=0,_}function R(a,_,x){const v=x??new i(3),L=a[0],O=a[1],q=a[2],pe=_[3]*L+_[7]*O+_[11]*q+_[15]||1;return v[0]=(_[0]*L+_[4]*O+_[8]*q+_[12])/pe,v[1]=(_[1]*L+_[5]*O+_[9]*q+_[13])/pe,v[2]=(_[2]*L+_[6]*O+_[10]*q+_[14])/pe,v}function g(a,_,x){const v=x??new i(3),L=a[0],O=a[1],q=a[2];return v[0]=L*_[0*4+0]+O*_[1*4+0]+q*_[2*4+0],v[1]=L*_[0*4+1]+O*_[1*4+1]+q*_[2*4+1],v[2]=L*_[0*4+2]+O*_[1*4+2]+q*_[2*4+2],v}function o(a,_,x){const v=x??new i(3),L=a[0],O=a[1],q=a[2];return v[0]=L*_[0]+O*_[4]+q*_[8],v[1]=L*_[1]+O*_[5]+q*_[9],v[2]=L*_[2]+O*_[6]+q*_[10],v}function h(a,_,x){const v=x??new i(3),L=_[0],O=_[1],q=_[2],pe=_[3]*2,re=a[0],ee=a[1],we=a[2],ke=O*we-q*ee,ve=q*re-L*we,Pe=L*ee-O*re;return v[0]=re+ke*pe+(O*Pe-q*ve)*2,v[1]=ee+ve*pe+(q*ke-L*Pe)*2,v[2]=we+Pe*pe+(L*ve-O*ke)*2,v}function u(a,_){const x=_??new i(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function b(a,_,x){const v=x??new i(3),L=_*4;return v[0]=a[L+0],v[1]=a[L+1],v[2]=a[L+2],v}function y(a,_){const x=_??new i(3),v=a[0],L=a[1],O=a[2],q=a[4],pe=a[5],re=a[6],ee=a[8],we=a[9],ke=a[10];return x[0]=Math.sqrt(v*v+L*L+O*O),x[1]=Math.sqrt(q*q+pe*pe+re*re),x[2]=Math.sqrt(ee*ee+we*we+ke*ke),x}function C(a,_,x,v){const L=v??new i(3),O=[],q=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],q[0]=O[0],q[1]=O[1]*Math.cos(x)-O[2]*Math.sin(x),q[2]=O[1]*Math.sin(x)+O[2]*Math.cos(x),L[0]=q[0]+_[0],L[1]=q[1]+_[1],L[2]=q[2]+_[2],L}function E(a,_,x,v){const L=v??new i(3),O=[],q=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],q[0]=O[2]*Math.sin(x)+O[0]*Math.cos(x),q[1]=O[1],q[2]=O[2]*Math.cos(x)-O[0]*Math.sin(x),L[0]=q[0]+_[0],L[1]=q[1]+_[1],L[2]=q[2]+_[2],L}function r(a,_,x,v){const L=v??new i(3),O=[],q=[];return O[0]=a[0]-_[0],O[1]=a[1]-_[1],O[2]=a[2]-_[2],q[0]=O[0]*Math.cos(x)-O[1]*Math.sin(x),q[1]=O[0]*Math.sin(x)+O[1]*Math.cos(x),q[2]=O[2],L[0]=q[0]+_[0],L[1]=q[1]+_[1],L[2]=q[2]+_[2],L}function m(a,_,x){const v=x??new i(3);return X(a,v),Z(v,_,v)}function d(a,_,x){const v=x??new i(3);return ue(a)>_?m(a,_,v):fe(a,v)}function p(a,_,x){const v=x??new i(3);return H(a,_,.5,v)}return{create:l,fromValues:f,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:A,angle:V,subtract:G,sub:Y,equalsApproximately:z,equals:K,lerp:H,lerpV:N,max:he,min:U,mulScalar:Z,scale:W,divScalar:de,inverse:$,invert:be,cross:se,dot:_e,length:ue,len:xe,lengthSq:Ae,lenSq:Ie,distance:ie,dist:ae,distanceSq:me,distSq:Q,normalize:X,negate:ne,copy:fe,clone:Be,multiply:le,mul:ye,divide:Ce,div:Ee,random:Re,zero:B,transformMat4:R,transformMat4Upper3x3:g,transformMat3:o,transformQuat:h,getTranslation:u,getAxis:b,getScaling:y,rotateX:C,rotateY:E,rotateZ:r,setLength:m,truncate:d,midpoint:p}}const Ir=new Map;function Vn(i){let l=Ir.get(i);return l||(l=yl(i),Ir.set(i,l)),l}function Pl(i){const l=Yr(i),f=Vn(i);function S(o,h,u,b,y,C,E,r,m){const d=new i(12);return d[3]=0,d[7]=0,d[11]=0,o!==void 0&&(d[0]=o,h!==void 0&&(d[1]=h,u!==void 0&&(d[2]=u,b!==void 0&&(d[4]=b,y!==void 0&&(d[5]=y,C!==void 0&&(d[6]=C,E!==void 0&&(d[8]=E,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(o,h,u,b,y,C,E,r,m,d){const p=d??new i(12);return p[0]=o,p[1]=h,p[2]=u,p[3]=0,p[4]=b,p[5]=y,p[6]=C,p[7]=0,p[8]=E,p[9]=r,p[10]=m,p[11]=0,p}function k(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=o[1],u[2]=o[2],u[3]=0,u[4]=o[4],u[5]=o[5],u[6]=o[6],u[7]=0,u[8]=o[8],u[9]=o[9],u[10]=o[10],u[11]=0,u}function M(o,h){const u=h??new i(12),b=o[0],y=o[1],C=o[2],E=o[3],r=b+b,m=y+y,d=C+C,p=b*r,a=y*r,_=y*m,x=C*r,v=C*m,L=C*d,O=E*r,q=E*m,pe=E*d;return u[0]=1-_-L,u[1]=a+pe,u[2]=x-q,u[3]=0,u[4]=a-pe,u[5]=1-p-L,u[6]=v+O,u[7]=0,u[8]=x+q,u[9]=v-O,u[10]=1-p-_,u[11]=0,u}function F(o,h){const u=h??new i(12);return u[0]=-o[0],u[1]=-o[1],u[2]=-o[2],u[4]=-o[4],u[5]=-o[5],u[6]=-o[6],u[8]=-o[8],u[9]=-o[9],u[10]=-o[10],u}function T(o,h,u){const b=u??new i(12);return b[0]=o[0]*h,b[1]=o[1]*h,b[2]=o[2]*h,b[4]=o[4]*h,b[5]=o[5]*h,b[6]=o[6]*h,b[8]=o[8]*h,b[9]=o[9]*h,b[10]=o[10]*h,b}const A=T;function V(o,h,u){const b=u??new i(12);return b[0]=o[0]+h[0],b[1]=o[1]+h[1],b[2]=o[2]+h[2],b[4]=o[4]+h[4],b[5]=o[5]+h[5],b[6]=o[6]+h[6],b[8]=o[8]+h[8],b[9]=o[9]+h[9],b[10]=o[10]+h[10],b}function G(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=o[1],u[2]=o[2],u[4]=o[4],u[5]=o[5],u[6]=o[6],u[8]=o[8],u[9]=o[9],u[10]=o[10],u}const Y=G;function z(o,h){return Math.abs(o[0]-h[0])<Ue&&Math.abs(o[1]-h[1])<Ue&&Math.abs(o[2]-h[2])<Ue&&Math.abs(o[4]-h[4])<Ue&&Math.abs(o[5]-h[5])<Ue&&Math.abs(o[6]-h[6])<Ue&&Math.abs(o[8]-h[8])<Ue&&Math.abs(o[9]-h[9])<Ue&&Math.abs(o[10]-h[10])<Ue}function K(o,h){return o[0]===h[0]&&o[1]===h[1]&&o[2]===h[2]&&o[4]===h[4]&&o[5]===h[5]&&o[6]===h[6]&&o[8]===h[8]&&o[9]===h[9]&&o[10]===h[10]}function H(o){const h=o??new i(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function N(o,h){const u=h??new i(12);if(u===o){let _;return _=o[1],o[1]=o[4],o[4]=_,_=o[2],o[2]=o[8],o[8]=_,_=o[6],o[6]=o[9],o[9]=_,u}const b=o[0*4+0],y=o[0*4+1],C=o[0*4+2],E=o[1*4+0],r=o[1*4+1],m=o[1*4+2],d=o[2*4+0],p=o[2*4+1],a=o[2*4+2];return u[0]=b,u[1]=E,u[2]=d,u[4]=y,u[5]=r,u[6]=p,u[8]=C,u[9]=m,u[10]=a,u}function he(o,h){const u=h??new i(12),b=o[0*4+0],y=o[0*4+1],C=o[0*4+2],E=o[1*4+0],r=o[1*4+1],m=o[1*4+2],d=o[2*4+0],p=o[2*4+1],a=o[2*4+2],_=a*r-m*p,x=-a*E+m*d,v=p*E-r*d,L=1/(b*_+y*x+C*v);return u[0]=_*L,u[1]=(-a*y+C*p)*L,u[2]=(m*y-C*r)*L,u[4]=x*L,u[5]=(a*b-C*d)*L,u[6]=(-m*b+C*E)*L,u[8]=v*L,u[9]=(-p*b+y*d)*L,u[10]=(r*b-y*E)*L,u}function U(o){const h=o[0],u=o[0*4+1],b=o[0*4+2],y=o[1*4+0],C=o[1*4+1],E=o[1*4+2],r=o[2*4+0],m=o[2*4+1],d=o[2*4+2];return h*(C*d-m*E)-y*(u*d-m*b)+r*(u*E-C*b)}const Z=he;function W(o,h,u){const b=u??new i(12),y=o[0],C=o[1],E=o[2],r=o[4+0],m=o[4+1],d=o[4+2],p=o[8+0],a=o[8+1],_=o[8+2],x=h[0],v=h[1],L=h[2],O=h[4+0],q=h[4+1],pe=h[4+2],re=h[8+0],ee=h[8+1],we=h[8+2];return b[0]=y*x+r*v+p*L,b[1]=C*x+m*v+a*L,b[2]=E*x+d*v+_*L,b[4]=y*O+r*q+p*pe,b[5]=C*O+m*q+a*pe,b[6]=E*O+d*q+_*pe,b[8]=y*re+r*ee+p*we,b[9]=C*re+m*ee+a*we,b[10]=E*re+d*ee+_*we,b}const de=W;function $(o,h,u){const b=u??H();return o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[4]=o[4],b[5]=o[5],b[6]=o[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function be(o,h){const u=h??l.create();return u[0]=o[8],u[1]=o[9],u}function se(o,h,u){const b=u??l.create(),y=h*4;return b[0]=o[y+0],b[1]=o[y+1],b}function _e(o,h,u,b){const y=b===o?o:G(o,b),C=u*4;return y[C+0]=h[0],y[C+1]=h[1],y}function ue(o,h){const u=h??l.create(),b=o[0],y=o[1],C=o[4],E=o[5];return u[0]=Math.sqrt(b*b+y*y),u[1]=Math.sqrt(C*C+E*E),u}function xe(o,h){const u=h??f.create(),b=o[0],y=o[1],C=o[2],E=o[4],r=o[5],m=o[6],d=o[8],p=o[9],a=o[10];return u[0]=Math.sqrt(b*b+y*y+C*C),u[1]=Math.sqrt(E*E+r*r+m*m),u[2]=Math.sqrt(d*d+p*p+a*a),u}function Ae(o,h){const u=h??new i(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=o[0],u[9]=o[1],u[10]=1,u}function Ie(o,h,u){const b=u??new i(12),y=h[0],C=h[1],E=o[0],r=o[1],m=o[2],d=o[1*4+0],p=o[1*4+1],a=o[1*4+2],_=o[2*4+0],x=o[2*4+1],v=o[2*4+2];return o!==b&&(b[0]=E,b[1]=r,b[2]=m,b[4]=d,b[5]=p,b[6]=a),b[8]=E*y+d*C+_,b[9]=r*y+p*C+x,b[10]=m*y+a*C+v,b}function ie(o,h){const u=h??new i(12),b=Math.cos(o),y=Math.sin(o);return u[0]=b,u[1]=y,u[2]=0,u[4]=-y,u[5]=b,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ae(o,h,u){const b=u??new i(12),y=o[0*4+0],C=o[0*4+1],E=o[0*4+2],r=o[1*4+0],m=o[1*4+1],d=o[1*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y+a*r,b[1]=p*C+a*m,b[2]=p*E+a*d,b[4]=p*r-a*y,b[5]=p*m-a*C,b[6]=p*d-a*E,o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function me(o,h){const u=h??new i(12),b=Math.cos(o),y=Math.sin(o);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=b,u[6]=y,u[8]=0,u[9]=-y,u[10]=b,u}function Q(o,h,u){const b=u??new i(12),y=o[4],C=o[5],E=o[6],r=o[8],m=o[9],d=o[10],p=Math.cos(h),a=Math.sin(h);return b[4]=p*y+a*r,b[5]=p*C+a*m,b[6]=p*E+a*d,b[8]=p*r-a*y,b[9]=p*m-a*C,b[10]=p*d-a*E,o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2]),b}function X(o,h){const u=h??new i(12),b=Math.cos(o),y=Math.sin(o);return u[0]=b,u[1]=0,u[2]=-y,u[4]=0,u[5]=1,u[6]=0,u[8]=y,u[9]=0,u[10]=b,u}function ne(o,h,u){const b=u??new i(12),y=o[0*4+0],C=o[0*4+1],E=o[0*4+2],r=o[2*4+0],m=o[2*4+1],d=o[2*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y-a*r,b[1]=p*C-a*m,b[2]=p*E-a*d,b[8]=p*r+a*y,b[9]=p*m+a*C,b[10]=p*d+a*E,o!==b&&(b[4]=o[4],b[5]=o[5],b[6]=o[6]),b}const fe=ie,Be=ae;function le(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=0,u[2]=0,u[4]=0,u[5]=o[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ye(o,h,u){const b=u??new i(12),y=h[0],C=h[1];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=C*o[1*4+0],b[5]=C*o[1*4+1],b[6]=C*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function Ce(o,h){const u=h??new i(12);return u[0]=o[0],u[1]=0,u[2]=0,u[4]=0,u[5]=o[1],u[6]=0,u[8]=0,u[9]=0,u[10]=o[2],u}function Ee(o,h,u){const b=u??new i(12),y=h[0],C=h[1],E=h[2];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=C*o[1*4+0],b[5]=C*o[1*4+1],b[6]=C*o[1*4+2],b[8]=E*o[2*4+0],b[9]=E*o[2*4+1],b[10]=E*o[2*4+2],b}function Re(o,h){const u=h??new i(12);return u[0]=o,u[1]=0,u[2]=0,u[4]=0,u[5]=o,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function B(o,h,u){const b=u??new i(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function R(o,h){const u=h??new i(12);return u[0]=o,u[1]=0,u[2]=0,u[4]=0,u[5]=o,u[6]=0,u[8]=0,u[9]=0,u[10]=o,u}function g(o,h,u){const b=u??new i(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],b[8]=h*o[2*4+0],b[9]=h*o[2*4+1],b[10]=h*o[2*4+2],b}return{add:V,clone:Y,copy:G,create:S,determinant:U,equals:K,equalsApproximately:z,fromMat4:k,fromQuat:M,get3DScaling:xe,getAxis:se,getScaling:ue,getTranslation:be,identity:H,inverse:he,invert:Z,mul:de,mulScalar:A,multiply:W,multiplyScalar:T,negate:F,rotate:ae,rotateX:Q,rotateY:ne,rotateZ:Be,rotation:ie,rotationX:me,rotationY:X,rotationZ:fe,scale:ye,scale3D:Ee,scaling:le,scaling3D:Ce,set:w,setAxis:_e,setTranslation:$,translate:Ie,translation:Ae,transpose:N,uniformScale:B,uniformScale3D:g,uniformScaling:Re,uniformScaling3D:R}}const zr=new Map;function Sl(i){let l=zr.get(i);return l||(l=Pl(i),zr.set(i,l)),l}function Cl(i){const l=Vn(i);function f(r,m,d,p,a,_,x,v,L,O,q,pe,re,ee,we,ke){const ve=new i(16);return r!==void 0&&(ve[0]=r,m!==void 0&&(ve[1]=m,d!==void 0&&(ve[2]=d,p!==void 0&&(ve[3]=p,a!==void 0&&(ve[4]=a,_!==void 0&&(ve[5]=_,x!==void 0&&(ve[6]=x,v!==void 0&&(ve[7]=v,L!==void 0&&(ve[8]=L,O!==void 0&&(ve[9]=O,q!==void 0&&(ve[10]=q,pe!==void 0&&(ve[11]=pe,re!==void 0&&(ve[12]=re,ee!==void 0&&(ve[13]=ee,we!==void 0&&(ve[14]=we,ke!==void 0&&(ve[15]=ke)))))))))))))))),ve}function S(r,m,d,p,a,_,x,v,L,O,q,pe,re,ee,we,ke,ve){const Pe=ve??new i(16);return Pe[0]=r,Pe[1]=m,Pe[2]=d,Pe[3]=p,Pe[4]=a,Pe[5]=_,Pe[6]=x,Pe[7]=v,Pe[8]=L,Pe[9]=O,Pe[10]=q,Pe[11]=pe,Pe[12]=re,Pe[13]=ee,Pe[14]=we,Pe[15]=ke,Pe}function w(r,m){const d=m??new i(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function k(r,m){const d=m??new i(16),p=r[0],a=r[1],_=r[2],x=r[3],v=p+p,L=a+a,O=_+_,q=p*v,pe=a*v,re=a*L,ee=_*v,we=_*L,ke=_*O,ve=x*v,Pe=x*L,Ge=x*O;return d[0]=1-re-ke,d[1]=pe+Ge,d[2]=ee-Pe,d[3]=0,d[4]=pe-Ge,d[5]=1-q-ke,d[6]=we+ve,d[7]=0,d[8]=ee+Pe,d[9]=we-ve,d[10]=1-q-re,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new i(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function F(r,m,d){const p=d??new i(16);return p[0]=r[0]+m[0],p[1]=r[1]+m[1],p[2]=r[2]+m[2],p[3]=r[3]+m[3],p[4]=r[4]+m[4],p[5]=r[5]+m[5],p[6]=r[6]+m[6],p[7]=r[7]+m[7],p[8]=r[8]+m[8],p[9]=r[9]+m[9],p[10]=r[10]+m[10],p[11]=r[11]+m[11],p[12]=r[12]+m[12],p[13]=r[13]+m[13],p[14]=r[14]+m[14],p[15]=r[15]+m[15],p}function T(r,m,d){const p=d??new i(16);return p[0]=r[0]*m,p[1]=r[1]*m,p[2]=r[2]*m,p[3]=r[3]*m,p[4]=r[4]*m,p[5]=r[5]*m,p[6]=r[6]*m,p[7]=r[7]*m,p[8]=r[8]*m,p[9]=r[9]*m,p[10]=r[10]*m,p[11]=r[11]*m,p[12]=r[12]*m,p[13]=r[13]*m,p[14]=r[14]*m,p[15]=r[15]*m,p}const A=T;function V(r,m){const d=m??new i(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const G=V;function Y(r,m){return Math.abs(r[0]-m[0])<Ue&&Math.abs(r[1]-m[1])<Ue&&Math.abs(r[2]-m[2])<Ue&&Math.abs(r[3]-m[3])<Ue&&Math.abs(r[4]-m[4])<Ue&&Math.abs(r[5]-m[5])<Ue&&Math.abs(r[6]-m[6])<Ue&&Math.abs(r[7]-m[7])<Ue&&Math.abs(r[8]-m[8])<Ue&&Math.abs(r[9]-m[9])<Ue&&Math.abs(r[10]-m[10])<Ue&&Math.abs(r[11]-m[11])<Ue&&Math.abs(r[12]-m[12])<Ue&&Math.abs(r[13]-m[13])<Ue&&Math.abs(r[14]-m[14])<Ue&&Math.abs(r[15]-m[15])<Ue}function z(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function K(r){const m=r??new i(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function H(r,m){const d=m??new i(16);if(d===r){let ze;return ze=r[1],r[1]=r[4],r[4]=ze,ze=r[2],r[2]=r[8],r[8]=ze,ze=r[3],r[3]=r[12],r[12]=ze,ze=r[6],r[6]=r[9],r[9]=ze,ze=r[7],r[7]=r[13],r[13]=ze,ze=r[11],r[11]=r[14],r[14]=ze,d}const p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],v=r[1*4+0],L=r[1*4+1],O=r[1*4+2],q=r[1*4+3],pe=r[2*4+0],re=r[2*4+1],ee=r[2*4+2],we=r[2*4+3],ke=r[3*4+0],ve=r[3*4+1],Pe=r[3*4+2],Ge=r[3*4+3];return d[0]=p,d[1]=v,d[2]=pe,d[3]=ke,d[4]=a,d[5]=L,d[6]=re,d[7]=ve,d[8]=_,d[9]=O,d[10]=ee,d[11]=Pe,d[12]=x,d[13]=q,d[14]=we,d[15]=Ge,d}function N(r,m){const d=m??new i(16),p=r[0*4+0],a=r[0*4+1],_=r[0*4+2],x=r[0*4+3],v=r[1*4+0],L=r[1*4+1],O=r[1*4+2],q=r[1*4+3],pe=r[2*4+0],re=r[2*4+1],ee=r[2*4+2],we=r[2*4+3],ke=r[3*4+0],ve=r[3*4+1],Pe=r[3*4+2],Ge=r[3*4+3],ze=ee*Ge,$e=Pe*we,je=O*Ge,Ke=Pe*q,He=O*we,Qe=ee*q,tt=_*Ge,et=Pe*x,nt=_*we,Je=ee*x,Ye=_*q,J=O*x,ce=pe*ve,oe=ke*re,Se=v*ve,De=ke*L,ge=v*re,Le=pe*L,Ve=p*ve,Ne=ke*a,We=p*re,rt=pe*a,Et=p*L,vt=v*a,zt=ze*L+Ke*re+He*ve-($e*L+je*re+Qe*ve),kt=$e*a+tt*re+Je*ve-(ze*a+et*re+nt*ve),Ut=je*a+et*L+Ye*ve-(Ke*a+tt*L+J*ve),Yt=Qe*a+nt*L+J*re-(He*a+Je*L+Ye*re),Ze=1/(p*zt+v*kt+pe*Ut+ke*Yt);return d[0]=Ze*zt,d[1]=Ze*kt,d[2]=Ze*Ut,d[3]=Ze*Yt,d[4]=Ze*($e*v+je*pe+Qe*ke-(ze*v+Ke*pe+He*ke)),d[5]=Ze*(ze*p+et*pe+nt*ke-($e*p+tt*pe+Je*ke)),d[6]=Ze*(Ke*p+tt*v+J*ke-(je*p+et*v+Ye*ke)),d[7]=Ze*(He*p+Je*v+Ye*pe-(Qe*p+nt*v+J*pe)),d[8]=Ze*(ce*q+De*we+ge*Ge-(oe*q+Se*we+Le*Ge)),d[9]=Ze*(oe*x+Ve*we+rt*Ge-(ce*x+Ne*we+We*Ge)),d[10]=Ze*(Se*x+Ne*q+Et*Ge-(De*x+Ve*q+vt*Ge)),d[11]=Ze*(Le*x+We*q+vt*we-(ge*x+rt*q+Et*we)),d[12]=Ze*(Se*ee+Le*Pe+oe*O-(ge*Pe+ce*O+De*ee)),d[13]=Ze*(We*Pe+ce*_+Ne*ee-(Ve*ee+rt*Pe+oe*_)),d[14]=Ze*(Ve*O+vt*Pe+De*_-(Et*Pe+Se*_+Ne*O)),d[15]=Ze*(Et*ee+ge*_+rt*O-(We*O+vt*ee+Le*_)),d}function he(r){const m=r[0],d=r[0*4+1],p=r[0*4+2],a=r[0*4+3],_=r[1*4+0],x=r[1*4+1],v=r[1*4+2],L=r[1*4+3],O=r[2*4+0],q=r[2*4+1],pe=r[2*4+2],re=r[2*4+3],ee=r[3*4+0],we=r[3*4+1],ke=r[3*4+2],ve=r[3*4+3],Pe=pe*ve,Ge=ke*re,ze=v*ve,$e=ke*L,je=v*re,Ke=pe*L,He=p*ve,Qe=ke*a,tt=p*re,et=pe*a,nt=p*L,Je=v*a,Ye=Pe*x+$e*q+je*we-(Ge*x+ze*q+Ke*we),J=Ge*d+He*q+et*we-(Pe*d+Qe*q+tt*we),ce=ze*d+Qe*x+nt*we-($e*d+He*x+Je*we),oe=Ke*d+tt*x+Je*q-(je*d+et*x+nt*q);return m*Ye+_*J+O*ce+ee*oe}const U=N;function Z(r,m,d){const p=d??new i(16),a=r[0],_=r[1],x=r[2],v=r[3],L=r[4+0],O=r[4+1],q=r[4+2],pe=r[4+3],re=r[8+0],ee=r[8+1],we=r[8+2],ke=r[8+3],ve=r[12+0],Pe=r[12+1],Ge=r[12+2],ze=r[12+3],$e=m[0],je=m[1],Ke=m[2],He=m[3],Qe=m[4+0],tt=m[4+1],et=m[4+2],nt=m[4+3],Je=m[8+0],Ye=m[8+1],J=m[8+2],ce=m[8+3],oe=m[12+0],Se=m[12+1],De=m[12+2],ge=m[12+3];return p[0]=a*$e+L*je+re*Ke+ve*He,p[1]=_*$e+O*je+ee*Ke+Pe*He,p[2]=x*$e+q*je+we*Ke+Ge*He,p[3]=v*$e+pe*je+ke*Ke+ze*He,p[4]=a*Qe+L*tt+re*et+ve*nt,p[5]=_*Qe+O*tt+ee*et+Pe*nt,p[6]=x*Qe+q*tt+we*et+Ge*nt,p[7]=v*Qe+pe*tt+ke*et+ze*nt,p[8]=a*Je+L*Ye+re*J+ve*ce,p[9]=_*Je+O*Ye+ee*J+Pe*ce,p[10]=x*Je+q*Ye+we*J+Ge*ce,p[11]=v*Je+pe*Ye+ke*J+ze*ce,p[12]=a*oe+L*Se+re*De+ve*ge,p[13]=_*oe+O*Se+ee*De+Pe*ge,p[14]=x*oe+q*Se+we*De+Ge*ge,p[15]=v*oe+pe*Se+ke*De+ze*ge,p}const W=Z;function de(r,m,d){const p=d??K();return r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function $(r,m){const d=m??l.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function be(r,m,d){const p=d??l.create(),a=m*4;return p[0]=r[a+0],p[1]=r[a+1],p[2]=r[a+2],p}function se(r,m,d,p){const a=p===r?p:V(r,p),_=d*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function _e(r,m){const d=m??l.create(),p=r[0],a=r[1],_=r[2],x=r[4],v=r[5],L=r[6],O=r[8],q=r[9],pe=r[10];return d[0]=Math.sqrt(p*p+a*a+_*_),d[1]=Math.sqrt(x*x+v*v+L*L),d[2]=Math.sqrt(O*O+q*q+pe*pe),d}function ue(r,m,d,p,a){const _=a??new i(16),x=Math.tan(Math.PI*.5-.5*r);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(d-p);_[10]=p*v,_[14]=p*d*v}else _[10]=-1,_[14]=-d;return _}function xe(r,m,d,p=1/0,a){const _=a??new i(16),x=1/Math.tan(r*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=d;else{const v=1/(p-d);_[10]=d*v,_[14]=p*d*v}return _}function Ae(r,m,d,p,a,_,x){const v=x??new i(16);return v[0]=2/(m-r),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-d),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+r)/(r-m),v[13]=(p+d)/(d-p),v[14]=a/(a-_),v[15]=1,v}function Ie(r,m,d,p,a,_,x){const v=x??new i(16),L=m-r,O=p-d,q=a-_;return v[0]=2*a/L,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/O,v[6]=0,v[7]=0,v[8]=(r+m)/L,v[9]=(p+d)/O,v[10]=_/q,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/q,v[15]=0,v}function ie(r,m,d,p,a,_=1/0,x){const v=x??new i(16),L=m-r,O=p-d;if(v[0]=2*a/L,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/O,v[6]=0,v[7]=0,v[8]=(r+m)/L,v[9]=(p+d)/O,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const q=1/(_-a);v[10]=a*q,v[14]=_*a*q}return v}const ae=l.create(),me=l.create(),Q=l.create();function X(r,m,d,p){const a=p??new i(16);return l.normalize(l.subtract(m,r,Q),Q),l.normalize(l.cross(d,Q,ae),ae),l.normalize(l.cross(Q,ae,me),me),a[0]=ae[0],a[1]=ae[1],a[2]=ae[2],a[3]=0,a[4]=me[0],a[5]=me[1],a[6]=me[2],a[7]=0,a[8]=Q[0],a[9]=Q[1],a[10]=Q[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function ne(r,m,d,p){const a=p??new i(16);return l.normalize(l.subtract(r,m,Q),Q),l.normalize(l.cross(d,Q,ae),ae),l.normalize(l.cross(Q,ae,me),me),a[0]=ae[0],a[1]=ae[1],a[2]=ae[2],a[3]=0,a[4]=me[0],a[5]=me[1],a[6]=me[2],a[7]=0,a[8]=Q[0],a[9]=Q[1],a[10]=Q[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function fe(r,m,d,p){const a=p??new i(16);return l.normalize(l.subtract(r,m,Q),Q),l.normalize(l.cross(d,Q,ae),ae),l.normalize(l.cross(Q,ae,me),me),a[0]=ae[0],a[1]=me[0],a[2]=Q[0],a[3]=0,a[4]=ae[1],a[5]=me[1],a[6]=Q[1],a[7]=0,a[8]=ae[2],a[9]=me[2],a[10]=Q[2],a[11]=0,a[12]=-(ae[0]*r[0]+ae[1]*r[1]+ae[2]*r[2]),a[13]=-(me[0]*r[0]+me[1]*r[1]+me[2]*r[2]),a[14]=-(Q[0]*r[0]+Q[1]*r[1]+Q[2]*r[2]),a[15]=1,a}function Be(r,m){const d=m??new i(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function le(r,m,d){const p=d??new i(16),a=m[0],_=m[1],x=m[2],v=r[0],L=r[1],O=r[2],q=r[3],pe=r[1*4+0],re=r[1*4+1],ee=r[1*4+2],we=r[1*4+3],ke=r[2*4+0],ve=r[2*4+1],Pe=r[2*4+2],Ge=r[2*4+3],ze=r[3*4+0],$e=r[3*4+1],je=r[3*4+2],Ke=r[3*4+3];return r!==p&&(p[0]=v,p[1]=L,p[2]=O,p[3]=q,p[4]=pe,p[5]=re,p[6]=ee,p[7]=we,p[8]=ke,p[9]=ve,p[10]=Pe,p[11]=Ge),p[12]=v*a+pe*_+ke*x+ze,p[13]=L*a+re*_+ve*x+$e,p[14]=O*a+ee*_+Pe*x+je,p[15]=q*a+we*_+Ge*x+Ke,p}function ye(r,m){const d=m??new i(16),p=Math.cos(r),a=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=p,d[6]=a,d[7]=0,d[8]=0,d[9]=-a,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Ce(r,m,d){const p=d??new i(16),a=r[4],_=r[5],x=r[6],v=r[7],L=r[8],O=r[9],q=r[10],pe=r[11],re=Math.cos(m),ee=Math.sin(m);return p[4]=re*a+ee*L,p[5]=re*_+ee*O,p[6]=re*x+ee*q,p[7]=re*v+ee*pe,p[8]=re*L-ee*a,p[9]=re*O-ee*_,p[10]=re*q-ee*x,p[11]=re*pe-ee*v,r!==p&&(p[0]=r[0],p[1]=r[1],p[2]=r[2],p[3]=r[3],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function Ee(r,m){const d=m??new i(16),p=Math.cos(r),a=Math.sin(r);return d[0]=p,d[1]=0,d[2]=-a,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=a,d[9]=0,d[10]=p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Re(r,m,d){const p=d??new i(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],v=r[0*4+3],L=r[2*4+0],O=r[2*4+1],q=r[2*4+2],pe=r[2*4+3],re=Math.cos(m),ee=Math.sin(m);return p[0]=re*a-ee*L,p[1]=re*_-ee*O,p[2]=re*x-ee*q,p[3]=re*v-ee*pe,p[8]=re*L+ee*a,p[9]=re*O+ee*_,p[10]=re*q+ee*x,p[11]=re*pe+ee*v,r!==p&&(p[4]=r[4],p[5]=r[5],p[6]=r[6],p[7]=r[7],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function B(r,m){const d=m??new i(16),p=Math.cos(r),a=Math.sin(r);return d[0]=p,d[1]=a,d[2]=0,d[3]=0,d[4]=-a,d[5]=p,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function R(r,m,d){const p=d??new i(16),a=r[0*4+0],_=r[0*4+1],x=r[0*4+2],v=r[0*4+3],L=r[1*4+0],O=r[1*4+1],q=r[1*4+2],pe=r[1*4+3],re=Math.cos(m),ee=Math.sin(m);return p[0]=re*a+ee*L,p[1]=re*_+ee*O,p[2]=re*x+ee*q,p[3]=re*v+ee*pe,p[4]=re*L-ee*a,p[5]=re*O-ee*_,p[6]=re*q-ee*x,p[7]=re*pe-ee*v,r!==p&&(p[8]=r[8],p[9]=r[9],p[10]=r[10],p[11]=r[11],p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function g(r,m,d){const p=d??new i(16);let a=r[0],_=r[1],x=r[2];const v=Math.sqrt(a*a+_*_+x*x);a/=v,_/=v,x/=v;const L=a*a,O=_*_,q=x*x,pe=Math.cos(m),re=Math.sin(m),ee=1-pe;return p[0]=L+(1-L)*pe,p[1]=a*_*ee+x*re,p[2]=a*x*ee-_*re,p[3]=0,p[4]=a*_*ee-x*re,p[5]=O+(1-O)*pe,p[6]=_*x*ee+a*re,p[7]=0,p[8]=a*x*ee+_*re,p[9]=_*x*ee-a*re,p[10]=q+(1-q)*pe,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const o=g;function h(r,m,d,p){const a=p??new i(16);let _=m[0],x=m[1],v=m[2];const L=Math.sqrt(_*_+x*x+v*v);_/=L,x/=L,v/=L;const O=_*_,q=x*x,pe=v*v,re=Math.cos(d),ee=Math.sin(d),we=1-re,ke=O+(1-O)*re,ve=_*x*we+v*ee,Pe=_*v*we-x*ee,Ge=_*x*we-v*ee,ze=q+(1-q)*re,$e=x*v*we+_*ee,je=_*v*we+x*ee,Ke=x*v*we-_*ee,He=pe+(1-pe)*re,Qe=r[0],tt=r[1],et=r[2],nt=r[3],Je=r[4],Ye=r[5],J=r[6],ce=r[7],oe=r[8],Se=r[9],De=r[10],ge=r[11];return a[0]=ke*Qe+ve*Je+Pe*oe,a[1]=ke*tt+ve*Ye+Pe*Se,a[2]=ke*et+ve*J+Pe*De,a[3]=ke*nt+ve*ce+Pe*ge,a[4]=Ge*Qe+ze*Je+$e*oe,a[5]=Ge*tt+ze*Ye+$e*Se,a[6]=Ge*et+ze*J+$e*De,a[7]=Ge*nt+ze*ce+$e*ge,a[8]=je*Qe+Ke*Je+He*oe,a[9]=je*tt+Ke*Ye+He*Se,a[10]=je*et+Ke*J+He*De,a[11]=je*nt+Ke*ce+He*ge,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const u=h;function b(r,m){const d=m??new i(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function y(r,m,d){const p=d??new i(16),a=m[0],_=m[1],x=m[2];return p[0]=a*r[0*4+0],p[1]=a*r[0*4+1],p[2]=a*r[0*4+2],p[3]=a*r[0*4+3],p[4]=_*r[1*4+0],p[5]=_*r[1*4+1],p[6]=_*r[1*4+2],p[7]=_*r[1*4+3],p[8]=x*r[2*4+0],p[9]=x*r[2*4+1],p[10]=x*r[2*4+2],p[11]=x*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}function C(r,m){const d=m??new i(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function E(r,m,d){const p=d??new i(16);return p[0]=m*r[0*4+0],p[1]=m*r[0*4+1],p[2]=m*r[0*4+2],p[3]=m*r[0*4+3],p[4]=m*r[1*4+0],p[5]=m*r[1*4+1],p[6]=m*r[1*4+2],p[7]=m*r[1*4+3],p[8]=m*r[2*4+0],p[9]=m*r[2*4+1],p[10]=m*r[2*4+2],p[11]=m*r[2*4+3],r!==p&&(p[12]=r[12],p[13]=r[13],p[14]=r[14],p[15]=r[15]),p}return{add:F,aim:X,axisRotate:h,axisRotation:g,cameraAim:ne,clone:G,copy:V,create:f,determinant:he,equals:z,equalsApproximately:Y,fromMat3:w,fromQuat:k,frustum:Ie,frustumReverseZ:ie,getAxis:be,getScaling:_e,getTranslation:$,identity:K,inverse:N,invert:U,lookAt:fe,mul:W,mulScalar:A,multiply:Z,multiplyScalar:T,negate:M,ortho:Ae,perspective:ue,perspectiveReverseZ:xe,rotate:u,rotateX:Ce,rotateY:Re,rotateZ:R,rotation:o,rotationX:ye,rotationY:Ee,rotationZ:B,scale:y,scaling:b,set:S,setAxis:se,setTranslation:de,translate:le,translation:Be,transpose:H,uniformScale:E,uniformScaling:C}}const Ur=new Map;function El(i){let l=Ur.get(i);return l||(l=Cl(i),Ur.set(i,l)),l}function kl(i){const l=Vn(i);function f(B,R,g,o){const h=new i(4);return B!==void 0&&(h[0]=B,R!==void 0&&(h[1]=R,g!==void 0&&(h[2]=g,o!==void 0&&(h[3]=o)))),h}const S=f;function w(B,R,g,o,h){const u=h??new i(4);return u[0]=B,u[1]=R,u[2]=g,u[3]=o,u}function k(B,R,g){const o=g??new i(4),h=R*.5,u=Math.sin(h);return o[0]=u*B[0],o[1]=u*B[1],o[2]=u*B[2],o[3]=Math.cos(h),o}function M(B,R){const g=R??l.create(3),o=Math.acos(B[3])*2,h=Math.sin(o*.5);return h>Ue?(g[0]=B[0]/h,g[1]=B[1]/h,g[2]=B[2]/h):(g[0]=1,g[1]=0,g[2]=0),{angle:o,axis:g}}function F(B,R){const g=ue(B,R);return Math.acos(2*g*g-1)}function T(B,R,g){const o=g??new i(4),h=B[0],u=B[1],b=B[2],y=B[3],C=R[0],E=R[1],r=R[2],m=R[3];return o[0]=h*m+y*C+u*r-b*E,o[1]=u*m+y*E+b*C-h*r,o[2]=b*m+y*r+h*E-u*C,o[3]=y*m-h*C-u*E-b*r,o}const A=T;function V(B,R,g){const o=g??new i(4),h=R*.5,u=B[0],b=B[1],y=B[2],C=B[3],E=Math.sin(h),r=Math.cos(h);return o[0]=u*r+C*E,o[1]=b*r+y*E,o[2]=y*r-b*E,o[3]=C*r-u*E,o}function G(B,R,g){const o=g??new i(4),h=R*.5,u=B[0],b=B[1],y=B[2],C=B[3],E=Math.sin(h),r=Math.cos(h);return o[0]=u*r-y*E,o[1]=b*r+C*E,o[2]=y*r+u*E,o[3]=C*r-b*E,o}function Y(B,R,g){const o=g??new i(4),h=R*.5,u=B[0],b=B[1],y=B[2],C=B[3],E=Math.sin(h),r=Math.cos(h);return o[0]=u*r+b*E,o[1]=b*r-u*E,o[2]=y*r+C*E,o[3]=C*r-y*E,o}function z(B,R,g,o){const h=o??new i(4),u=B[0],b=B[1],y=B[2],C=B[3];let E=R[0],r=R[1],m=R[2],d=R[3],p=u*E+b*r+y*m+C*d;p<0&&(p=-p,E=-E,r=-r,m=-m,d=-d);let a,_;if(1-p>Ue){const x=Math.acos(p),v=Math.sin(x);a=Math.sin((1-g)*x)/v,_=Math.sin(g*x)/v}else a=1-g,_=g;return h[0]=a*u+_*E,h[1]=a*b+_*r,h[2]=a*y+_*m,h[3]=a*C+_*d,h}function K(B,R){const g=R??new i(4),o=B[0],h=B[1],u=B[2],b=B[3],y=o*o+h*h+u*u+b*b,C=y?1/y:0;return g[0]=-o*C,g[1]=-h*C,g[2]=-u*C,g[3]=b*C,g}function H(B,R){const g=R??new i(4);return g[0]=-B[0],g[1]=-B[1],g[2]=-B[2],g[3]=B[3],g}function N(B,R){const g=R??new i(4),o=B[0]+B[5]+B[10];if(o>0){const h=Math.sqrt(o+1);g[3]=.5*h;const u=.5/h;g[0]=(B[6]-B[9])*u,g[1]=(B[8]-B[2])*u,g[2]=(B[1]-B[4])*u}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const u=(h+1)%3,b=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[u*4+u]-B[b*4+b]+1);g[h]=.5*y;const C=.5/y;g[3]=(B[u*4+b]-B[b*4+u])*C,g[u]=(B[u*4+h]+B[h*4+u])*C,g[b]=(B[b*4+h]+B[h*4+b])*C}return g}function he(B,R,g,o,h){const u=h??new i(4),b=B*.5,y=R*.5,C=g*.5,E=Math.sin(b),r=Math.cos(b),m=Math.sin(y),d=Math.cos(y),p=Math.sin(C),a=Math.cos(C);switch(o){case"xyz":u[0]=E*d*a+r*m*p,u[1]=r*m*a-E*d*p,u[2]=r*d*p+E*m*a,u[3]=r*d*a-E*m*p;break;case"xzy":u[0]=E*d*a-r*m*p,u[1]=r*m*a-E*d*p,u[2]=r*d*p+E*m*a,u[3]=r*d*a+E*m*p;break;case"yxz":u[0]=E*d*a+r*m*p,u[1]=r*m*a-E*d*p,u[2]=r*d*p-E*m*a,u[3]=r*d*a+E*m*p;break;case"yzx":u[0]=E*d*a+r*m*p,u[1]=r*m*a+E*d*p,u[2]=r*d*p-E*m*a,u[3]=r*d*a-E*m*p;break;case"zxy":u[0]=E*d*a-r*m*p,u[1]=r*m*a+E*d*p,u[2]=r*d*p+E*m*a,u[3]=r*d*a-E*m*p;break;case"zyx":u[0]=E*d*a-r*m*p,u[1]=r*m*a+E*d*p,u[2]=r*d*p-E*m*a,u[3]=r*d*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${o}`)}return u}function U(B,R){const g=R??new i(4);return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g}const Z=U;function W(B,R,g){const o=g??new i(4);return o[0]=B[0]+R[0],o[1]=B[1]+R[1],o[2]=B[2]+R[2],o[3]=B[3]+R[3],o}function de(B,R,g){const o=g??new i(4);return o[0]=B[0]-R[0],o[1]=B[1]-R[1],o[2]=B[2]-R[2],o[3]=B[3]-R[3],o}const $=de;function be(B,R,g){const o=g??new i(4);return o[0]=B[0]*R,o[1]=B[1]*R,o[2]=B[2]*R,o[3]=B[3]*R,o}const se=be;function _e(B,R,g){const o=g??new i(4);return o[0]=B[0]/R,o[1]=B[1]/R,o[2]=B[2]/R,o[3]=B[3]/R,o}function ue(B,R){return B[0]*R[0]+B[1]*R[1]+B[2]*R[2]+B[3]*R[3]}function xe(B,R,g,o){const h=o??new i(4);return h[0]=B[0]+g*(R[0]-B[0]),h[1]=B[1]+g*(R[1]-B[1]),h[2]=B[2]+g*(R[2]-B[2]),h[3]=B[3]+g*(R[3]-B[3]),h}function Ae(B){const R=B[0],g=B[1],o=B[2],h=B[3];return Math.sqrt(R*R+g*g+o*o+h*h)}const Ie=Ae;function ie(B){const R=B[0],g=B[1],o=B[2],h=B[3];return R*R+g*g+o*o+h*h}const ae=ie;function me(B,R){const g=R??new i(4),o=B[0],h=B[1],u=B[2],b=B[3],y=Math.sqrt(o*o+h*h+u*u+b*b);return y>1e-5?(g[0]=o/y,g[1]=h/y,g[2]=u/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function Q(B,R){return Math.abs(B[0]-R[0])<Ue&&Math.abs(B[1]-R[1])<Ue&&Math.abs(B[2]-R[2])<Ue&&Math.abs(B[3]-R[3])<Ue}function X(B,R){return B[0]===R[0]&&B[1]===R[1]&&B[2]===R[2]&&B[3]===R[3]}function ne(B){const R=B??new i(4);return R[0]=0,R[1]=0,R[2]=0,R[3]=1,R}const fe=l.create(),Be=l.create(),le=l.create();function ye(B,R,g){const o=g??new i(4),h=l.dot(B,R);return h<-.999999?(l.cross(Be,B,fe),l.len(fe)<1e-6&&l.cross(le,B,fe),l.normalize(fe,fe),k(fe,Math.PI,o),o):h>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(l.cross(B,R,fe),o[0]=fe[0],o[1]=fe[1],o[2]=fe[2],o[3]=1+h,me(o,o))}const Ce=new i(4),Ee=new i(4);function Re(B,R,g,o,h,u){const b=u??new i(4);return z(B,o,h,Ce),z(R,g,h,Ee),z(Ce,Ee,2*h*(1-h),b),b}return{create:f,fromValues:S,set:w,fromAxisAngle:k,toAxisAngle:M,angle:F,multiply:T,mul:A,rotateX:V,rotateY:G,rotateZ:Y,slerp:z,inverse:K,conjugate:H,fromMat:N,fromEuler:he,copy:U,clone:Z,add:W,subtract:de,sub:$,mulScalar:be,scale:se,divScalar:_e,dot:ue,lerp:xe,length:Ae,len:Ie,lengthSq:ie,lenSq:ae,normalize:me,equalsApproximately:Q,equals:X,identity:ne,rotationTo:ye,sqlerp:Re}}const Gr=new Map;function Ml(i){let l=Gr.get(i);return l||(l=kl(i),Gr.set(i,l)),l}function Bl(i){function l(g,o,h,u){const b=new i(4);return g!==void 0&&(b[0]=g,o!==void 0&&(b[1]=o,h!==void 0&&(b[2]=h,u!==void 0&&(b[3]=u)))),b}const f=l;function S(g,o,h,u,b){const y=b??new i(4);return y[0]=g,y[1]=o,y[2]=h,y[3]=u,y}function w(g,o){const h=o??new i(4);return h[0]=Math.ceil(g[0]),h[1]=Math.ceil(g[1]),h[2]=Math.ceil(g[2]),h[3]=Math.ceil(g[3]),h}function k(g,o){const h=o??new i(4);return h[0]=Math.floor(g[0]),h[1]=Math.floor(g[1]),h[2]=Math.floor(g[2]),h[3]=Math.floor(g[3]),h}function M(g,o){const h=o??new i(4);return h[0]=Math.round(g[0]),h[1]=Math.round(g[1]),h[2]=Math.round(g[2]),h[3]=Math.round(g[3]),h}function F(g,o=0,h=1,u){const b=u??new i(4);return b[0]=Math.min(h,Math.max(o,g[0])),b[1]=Math.min(h,Math.max(o,g[1])),b[2]=Math.min(h,Math.max(o,g[2])),b[3]=Math.min(h,Math.max(o,g[3])),b}function T(g,o,h){const u=h??new i(4);return u[0]=g[0]+o[0],u[1]=g[1]+o[1],u[2]=g[2]+o[2],u[3]=g[3]+o[3],u}function A(g,o,h,u){const b=u??new i(4);return b[0]=g[0]+o[0]*h,b[1]=g[1]+o[1]*h,b[2]=g[2]+o[2]*h,b[3]=g[3]+o[3]*h,b}function V(g,o,h){const u=h??new i(4);return u[0]=g[0]-o[0],u[1]=g[1]-o[1],u[2]=g[2]-o[2],u[3]=g[3]-o[3],u}const G=V;function Y(g,o){return Math.abs(g[0]-o[0])<Ue&&Math.abs(g[1]-o[1])<Ue&&Math.abs(g[2]-o[2])<Ue&&Math.abs(g[3]-o[3])<Ue}function z(g,o){return g[0]===o[0]&&g[1]===o[1]&&g[2]===o[2]&&g[3]===o[3]}function K(g,o,h,u){const b=u??new i(4);return b[0]=g[0]+h*(o[0]-g[0]),b[1]=g[1]+h*(o[1]-g[1]),b[2]=g[2]+h*(o[2]-g[2]),b[3]=g[3]+h*(o[3]-g[3]),b}function H(g,o,h,u){const b=u??new i(4);return b[0]=g[0]+h[0]*(o[0]-g[0]),b[1]=g[1]+h[1]*(o[1]-g[1]),b[2]=g[2]+h[2]*(o[2]-g[2]),b[3]=g[3]+h[3]*(o[3]-g[3]),b}function N(g,o,h){const u=h??new i(4);return u[0]=Math.max(g[0],o[0]),u[1]=Math.max(g[1],o[1]),u[2]=Math.max(g[2],o[2]),u[3]=Math.max(g[3],o[3]),u}function he(g,o,h){const u=h??new i(4);return u[0]=Math.min(g[0],o[0]),u[1]=Math.min(g[1],o[1]),u[2]=Math.min(g[2],o[2]),u[3]=Math.min(g[3],o[3]),u}function U(g,o,h){const u=h??new i(4);return u[0]=g[0]*o,u[1]=g[1]*o,u[2]=g[2]*o,u[3]=g[3]*o,u}const Z=U;function W(g,o,h){const u=h??new i(4);return u[0]=g[0]/o,u[1]=g[1]/o,u[2]=g[2]/o,u[3]=g[3]/o,u}function de(g,o){const h=o??new i(4);return h[0]=1/g[0],h[1]=1/g[1],h[2]=1/g[2],h[3]=1/g[3],h}const $=de;function be(g,o){return g[0]*o[0]+g[1]*o[1]+g[2]*o[2]+g[3]*o[3]}function se(g){const o=g[0],h=g[1],u=g[2],b=g[3];return Math.sqrt(o*o+h*h+u*u+b*b)}const _e=se;function ue(g){const o=g[0],h=g[1],u=g[2],b=g[3];return o*o+h*h+u*u+b*b}const xe=ue;function Ae(g,o){const h=g[0]-o[0],u=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return Math.sqrt(h*h+u*u+b*b+y*y)}const Ie=Ae;function ie(g,o){const h=g[0]-o[0],u=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return h*h+u*u+b*b+y*y}const ae=ie;function me(g,o){const h=o??new i(4),u=g[0],b=g[1],y=g[2],C=g[3],E=Math.sqrt(u*u+b*b+y*y+C*C);return E>1e-5?(h[0]=u/E,h[1]=b/E,h[2]=y/E,h[3]=C/E):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function Q(g,o){const h=o??new i(4);return h[0]=-g[0],h[1]=-g[1],h[2]=-g[2],h[3]=-g[3],h}function X(g,o){const h=o??new i(4);return h[0]=g[0],h[1]=g[1],h[2]=g[2],h[3]=g[3],h}const ne=X;function fe(g,o,h){const u=h??new i(4);return u[0]=g[0]*o[0],u[1]=g[1]*o[1],u[2]=g[2]*o[2],u[3]=g[3]*o[3],u}const Be=fe;function le(g,o,h){const u=h??new i(4);return u[0]=g[0]/o[0],u[1]=g[1]/o[1],u[2]=g[2]/o[2],u[3]=g[3]/o[3],u}const ye=le;function Ce(g){const o=g??new i(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function Ee(g,o,h){const u=h??new i(4),b=g[0],y=g[1],C=g[2],E=g[3];return u[0]=o[0]*b+o[4]*y+o[8]*C+o[12]*E,u[1]=o[1]*b+o[5]*y+o[9]*C+o[13]*E,u[2]=o[2]*b+o[6]*y+o[10]*C+o[14]*E,u[3]=o[3]*b+o[7]*y+o[11]*C+o[15]*E,u}function Re(g,o,h){const u=h??new i(4);return me(g,u),U(u,o,u)}function B(g,o,h){const u=h??new i(4);return se(g)>o?Re(g,o,u):X(g,u)}function R(g,o,h){const u=h??new i(4);return K(g,o,.5,u)}return{create:l,fromValues:f,set:S,ceil:w,floor:k,round:M,clamp:F,add:T,addScaled:A,subtract:V,sub:G,equalsApproximately:Y,equals:z,lerp:K,lerpV:H,max:N,min:he,mulScalar:U,scale:Z,divScalar:W,inverse:de,invert:$,dot:be,length:se,len:_e,lengthSq:ue,lenSq:xe,distance:Ae,dist:Ie,distanceSq:ie,distSq:ae,normalize:me,negate:Q,copy:X,clone:ne,multiply:fe,mul:Be,divide:le,div:ye,zero:Ce,transformMat4:Ee,setLength:Re,truncate:B,midpoint:R}}const Rr=new Map;function Tl(i){let l=Rr.get(i);return l||(l=Bl(i),Rr.set(i,l)),l}function ws(i,l,f,S,w,k){return{mat3:Sl(i),mat4:El(l),quat:Ml(f),vec2:Yr(S),vec3:Vn(w),vec4:Tl(k)}}const{mat3:mt,mat4:it,quat:at,vec2:Vr,vec3:I,vec4:Nc}=ws(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ws(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ws(wl,Array,Array,Array,Array,Array);const Or=document.querySelector("#log");let pt=null,Ht=null;function Zr(){if(pt)return pt;pt=document.createElement("div"),pt.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",pt.appendChild(i),Ht=document.createElement("div"),Ht.className="ply-spinner-label",pt.appendChild(Ht),pt.style.display="none",document.body.appendChild(pt),pt}function xs(i){Zr(),Ht&&i&&(Ht.textContent=i),pt&&(pt.style.opacity="1",pt.style.display="flex")}function Ct(i){Zr(),Ht&&(Ht.textContent=i)}function yn(){if(!pt)return;const i=pt;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function Xr(i,l){if(!Or)return;const f=document.createElement("p");f.innerText=i,l&&Object.assign(f.style,l),Or.appendChild(f)}async function ut(i){console.log(i),Xr(i)}async function Dl(i){console.error(i),Xr(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Qr;function Jr(){Qr=performance.now()}function Fr(i){const l=performance.now()-Qr;ut(`⏱️ ${i} Time: ${l.toFixed(0)} ms`)}function Al(i,l){if(!i)throw new Error(l&&(typeof l=="string"?l:l()))}function on(i){return i+3&-4}const Ll=2,Il=3,Pn=5,Kt=6,Sn=7;function zl(i){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(i,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const S=new DataView(i),w=4,k=S.getUint32(w+0,!0),M=S.getUint32(w+4,!0),F=S.getUint32(w+8,!0),T=S.getUint32(w+12,!0),A=S.getUint32(w+16,!0),V=S.getFloat32(w+20,!0),G=S.getUint32(w+24,!0),Y=S.getUint32(w+28,!0),z=S.getFloat32(w+32,!0),K=S.getFloat32(w+36,!0),H=S.getFloat32(w+40,!0),N=S.getUint32(w+44,!0),he=S.getFloat32(w+48,!0),U=S.getFloat32(w+52,!0),Z=S.getUint32(w+56,!0),W=S.getUint32(w+60,!0),de=W>0?W:1;if(Y!==Ll&&Y!==Il&&Y!==Pn&&Y!==Kt&&Y!==Sn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Y}`);if(Y!==Pn&&Y!==Kt&&(k%4!==0||N%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${N}`);let $=w+64;const be=(Z+1)*4,se=new Uint32Array(i.slice($,$+be));$+=be;let _e;if(de>1){const Q=(de+1)*4;if($+Q>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Q} from ${$})`);_e=new Uint32Array(i.slice($,$+Q)),$+=Q}else _e=new Uint32Array([0,k]);let ue=0;for(let Q=0;Q<de;Q++){const X=_e[Q+1]-_e[Q];X>ue&&(ue=X)}const xe=A*4*4;if($+xe>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${xe} more bytes from offset ${$}, have ${i.byteLength-$}`);const Ae=new Float32Array(i.slice($,$+xe));$+=xe;const Ie=new Float32Array(A*5);for(let Q=0;Q<A;Q++){const X=Ae[Q*4+0],ne=Ae[Q*4+1],fe=Ae[Q*4+2],Be=Ae[Q*4+3];let le=0;for(let B=1;B<=Z&&se[B]<=ne;B++)le=B;let ye=0;for(let B=1;B<=de&&_e[B]<=X;B++)ye=B;const Ce=ne-se[le],Ee=X-_e[ye],Re=ye*Z+le;Ie[Q*5+0]=Ee,Ie[Q*5+1]=Ce,Ie[Q*5+2]=fe,Ie[Q*5+3]=Be,Ie[Q*5+4]=Re}if(Y===Pn||Y===Kt){if($+24>i.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const Q=l.decode(new Uint8Array(i,$,4));if(Q!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${Q}'`);const X=S.getUint32($+4,!0),ne=S.getUint32($+8,!0),fe=S.getUint32($+12,!0),Be=S.getUint32($+16,!0),le=S.getUint32($+20,!0);if(X!==1)throw new Error(`NAT2 RVQP unsupported version ${X}`);if(Be!==A)throw new Error(`NAT2 RVQP num_rects ${Be} != header num_rects ${A}`);if($+=24,$+16>i.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const ye=new Float32Array(i.slice($,$+8)),Ce=new Float32Array(i.slice($+8,$+16));$+=16;const Ee=ne*fe,Re=2*ne*fe,B=Y===Kt?(Ee>>2)*(Re>>2)*16:Ee*Re*4;if($+B>i.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${i.byteLength-$})`);const R=new Uint8Array(i.slice($,$+B));$+=B;const g=le*4;if($+g>i.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${i.byteLength-$})`);const o=new Uint32Array(i.slice($,$+g));$+=g;const h=(A+1)*4;if($+h>i.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${i.byteLength-$})`);const u=new Uint32Array(i.slice($,$+h));return $+=h,{width:k,height:M,channels:F,kernel_type:T,num_rects:A,uv_extent:V,sb_number:G,format:Y,sh_bias:z,res_bias:K,compact_mult:H,layer_h:N,atlas_scale:he,atlas_offset:U,n_layers:Z,n_cols:de,layer_cuts:se,column_cuts:_e,slice_width:ue,rects_expanded:Ie,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:ne,B:fe,N_used:le,pair_scale:ye,pair_offset:Ce,codebook_image:R,packed_indices:o,surfel_offsets:u}}}let ie;const me=k/4*16;if(Y===Sn){if($+24>i.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const Q=l.decode(new Uint8Array(i,$,4));if(Q!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${Q}'`);const X=S.getUint32($+4,!0),ne=S.getUint32($+8,!0),fe=S.getUint32($+12,!0),Be=S.getUint32($+16,!0),le=S.getUint32($+20,!0);if(X!==1)throw new Error(`NAT2 BCCB unsupported version ${X}`);if(fe!==M/4||Be!==k/4||le!==fe*Be)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${Be}×${fe} (${le} blocks)`);$+=24;const ye=ne*16;if($+ye>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${ye}, have ${i.byteLength-$})`);const Ce=new Uint8Array(i,$,ye);$+=ye;const Ee=le*2;if($+Ee>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${Ee}, have ${i.byteLength-$})`);const Re=new Uint16Array(i.slice($,$+Ee));$+=Ee;const B=new Uint8Array(le*16);for(let R=0;R<le;R++){const g=Re[R]*16;B.set(Ce.subarray(g,g+16),R*16)}ie=B}else{let Q=0;for(let X=0;X<Z;X++){const ne=se[X+1]-se[X];if(ne%4!==0)throw new Error(`NAT2 BC7 layer ${X} rows ${ne} not 4-aligned`);Q+=ne/4*me}if($+Q>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Q} more bytes from offset ${$}, have ${i.byteLength-$}`);ie=new Uint8Array(i.slice($,$+Q))}return{width:k,height:M,channels:F,kernel_type:T,num_rects:A,uv_extent:V,sb_number:G,format:Y,sh_bias:z,res_bias:K,compact_mult:H,layer_h:N,atlas_scale:he,atlas_offset:U,n_layers:Z,n_cols:de,layer_cuts:se,column_cuts:_e,slice_width:ue,rects_expanded:Ie,atlas_bytes:ie}}const Ul=32;function Gl(i){const l=i.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),S=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:f,sampler:S}}function Rl(i){const l=i.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d"}),S=i.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),w=i.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),k=w.createView({dimension:"2d"}),M=i.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:f,cbSamp:S,packedTex:w,packedView:k,offsetsBuf:M}}function Vl(i,l,f){const S=l.format===Pn||l.format===Kt,w=l.format===Kt;let k,M,F,T;if(S){const U=Gl(i);k=U.tex,M=U.view,F=U.sampler,T="RVQ-paired atlas"}else if(l.format===2||l.format===Sn){if(!i.features.has("texture-compression-bc"))return ut(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;T=l.format===Sn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:k,view:M,sampler:F}=Nr(i,l,"bc7-rgba-unorm",T)}else if(l.format===3){if(!i.features.has("texture-compression-astc"))return ut("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;T="ASTC 4x4 atlas",{texture:k,view:M,sampler:F}=Nr(i,l,"astc-4x4-unorm",T)}else return ut(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:A}=l,V=i.createBuffer({label:"atlas rects (5-stride)",size:on(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(V,0,A);let G,Y,z,K,H,N;if(S){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const U=l.rvq_paired,Z=U.K_orig*U.B,W=2*U.K_orig*U.B;if(Z>i.limits.maxTextureDimension2D||W>i.limits.maxTextureDimension2D)return ut(`⚠️  RVQ codebook ${Z}x${W} exceeds maxTextureDimension2D=${i.limits.maxTextureDimension2D} — atlas disabled`),null;let de,$;if(w){if(!i.features.has("texture-compression-bc"))return ut("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;de="bc7-rgba-unorm",$=(Z>>2)*16}else de="rgba8unorm",$=Z*4;const be=i.createTexture({label:w?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:Z,height:W,depthOrArrayLayers:1},format:de,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});i.queue.writeTexture({texture:be},U.codebook_image,{offset:0,bytesPerRow:$,rowsPerImage:W},{width:Z,height:W,depthOrArrayLayers:1}),G=be,Y=be.createView({dimension:"2d"}),z=i.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const se=8192,_e=U.N_used,ue=Math.ceil(_e/se);if(ue>i.limits.maxTextureDimension2D||se>i.limits.maxTextureDimension2D)return ut(`⚠️  RVQ packed_indices texture ${se}x${ue} exceeds maxTextureDimension2D=${i.limits.maxTextureDimension2D} — atlas disabled`),null;K=i.createTexture({label:"rvq packed_indices (r32uint)",size:{width:se,height:ue,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const xe=se*ue;let Ae;if(xe===_e)Ae=new Uint8Array(U.packed_indices.buffer,U.packed_indices.byteOffset,U.packed_indices.byteLength);else{const Ie=new Uint32Array(xe);Ie.set(U.packed_indices),Ae=new Uint8Array(Ie.buffer)}i.queue.writeTexture({texture:K},Ae,{offset:0,bytesPerRow:se*4,rowsPerImage:ue},{width:se,height:ue,depthOrArrayLayers:1}),H=K.createView({dimension:"2d"}),N=i.createBuffer({label:"rvq surfel_offsets",size:on(U.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(N,0,U.surfel_offsets),ut(`🪡 RVQ-paired atlas wired: codebook ${Z}x${W} (${(U.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${_e.toLocaleString()} packed indices as r32uint ${se}x${ue} (${(U.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${U.surfel_offsets.length} surfel_offsets`)}else{const U=Rl(i);G=U.cbTex,Y=U.cbView,z=U.cbSamp,K=U.packedTex,H=U.packedView,N=U.offsetsBuf}const he=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ei(i,he,l,f),{texture:k,view:M,sampler:F,rectsBuffer:V,texParamsBuffer:he,meta:l,rvqCodebookTexture:G,rvqCodebookView:Y,rvqCodebookSampler:z,rvqPackedIndicesTexture:K,rvqPackedIndicesView:H,rvqSurfelOffsetsBuffer:N}}function Nr(i,l,f,S){const{width:w,layer_h:k,n_layers:M,n_cols:F,layer_cuts:T,column_cuts:A,slice_width:V,atlas_bytes:G}=l,z=w/4*16,K=i.limits.maxTextureDimension2D;if(k>K||V>K)throw new Error(`⚠️  atlas slice dims ${V}x${k} exceed maxTextureDimension2D=${K}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const H=F*M;if(H>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${F} cols × ${M} layers = ${H} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const N=i.createTexture({label:S,size:{width:V,height:k,depthOrArrayLayers:H},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Z=0;Z<F;Z++){const W=A[Z]/4,de=(A[Z+1]-A[Z])/4;for(let $=0;$<M;$++){const be=T[$]/4,se=(T[$+1]-T[$])/4,_e=Z*M+$,ue=be*z+W*16;i.queue.writeTexture({texture:N,mipLevel:0,origin:{x:0,y:0,z:_e},aspect:"all"},G,{offset:ue,bytesPerRow:z,rowsPerImage:se},{width:de*4,height:se*4,depthOrArrayLayers:1})}}const he=N.createView({label:`${S} view`,dimension:"2d-array"}),U=i.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:N,view:he,sampler:U}}function ei(i,l,f,S){const w=new ArrayBuffer(48),k=new Uint32Array(w),M=new Float32Array(w),F=f.slice_width||f.width;k[0]=S?F:0,k[1]=f.layer_h;let T=f.format;T===Kt&&(T=Pn),T===Sn&&(T=2),k[2]=T,M[3]=f.atlas_scale,M[4]=f.atlas_offset,M[5]=f.uv_extent,M[6]=f.res_bias,f.rvq_paired?(k[7]=f.rvq_paired.B,M[8]=f.rvq_paired.pair_scale[0],M[9]=f.rvq_paired.pair_scale[1],M[10]=f.rvq_paired.pair_offset[0],M[11]=f.rvq_paired.pair_offset[1]):(k[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),i.queue.writeBuffer(l,0,w)}async function fs(i,l){ut(`loading ply file from File... : ${i.name}`),xs("downloading PLY...");const f=await i.arrayBuffer();try{return await ti(f,l)}finally{yn()}}async function Ol(i,l){ut(`loading ply file from URL... : ${i}`),xs("downloading PLY...");try{Jr();const f=new URL(i,self.location.href).href;return await ti({url:f},l)}finally{yn()}}async function ti(i,l){return new Promise((f,S)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var F,T,A,V,G,Y,z,K,H,N,he,U;const M=k.data;if((M==null?void 0:M.type)==="error"){Dl(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),S(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const Z=M.totalBytes,W=M.loadedBytes/(1024*1024),de=Z?Z/(1024*1024):void 0,$=(M.speedBps??0)/(1024*1024),be=Z?Math.min(99,Math.floor(M.loadedBytes/Z*100)):void 0,se=de?`total ${de.toFixed(1)} MB`:"total -- MB",_e=de&&be!==void 0?`${W.toFixed(1)} MB downloaded (${be}%)`:`${W.toFixed(1)} MB downloaded`,ue=`${$.toFixed(2)} MB/s`;Ct(`downloading PLY ...
${se}, ${_e}
${ue}`);return}else if((M==null?void 0:M.type)==="fetched"){ut(`💾 Fetched (${M.byteLength} bytes)`),Fr("Download"),Ct("parsing PLY..."),Jr();return}else if((M==null?void 0:M.type)==="parse_progress"){const Z=M.total??0,W=M.read??0,de=Z>0?Math.floor(W/Z*100):0;Ct(`parsing PLY ...
${W}/${Z} surfels (${de}%)`);return}else if((M==null?void 0:M.type)==="done"){const Z=M.num_points,W=M.K,de=M.feature_mode??0,$=M.sh_bias,be=M.kernel_type,se=M.surfelBuffer,_e=M.svParamsBuffer;ut(`🪐 Total surfels: ${Z}, mode=${de===1?"SB":"SV"}, K=${W}, sh_bias=${$}, kernel_type=${be}`);const xe=l.createBuffer({label:"surfel input buffer",size:on(Z*Ul),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(xe,0,se);const Ae=_e.byteLength>0?_e.byteLength:16,Ie=l.createBuffer({label:de===1?"color_params buffer (SB)":"color_params buffer (SV)",size:on(Ae),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});_e.byteLength>0&&l.queue.writeBuffer(Ie,0,_e),w.terminate(),Fr("Parse"),f({num_points:Z,K:W,feature_mode:de,sh_bias:$,kernel_type:be,surfel_buffer:xe,surfel_data:new Float32Array(se),sv_params_buffer:Ie,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(F=M.bbox)==null?void 0:F.min)==null?void 0:T[0])??-1)+(((V=(A=M.bbox)==null?void 0:A.max)==null?void 0:V[0])??1))/2,((((Y=(G=M.bbox)==null?void 0:G.min)==null?void 0:Y[1])??-1)+(((K=(z=M.bbox)==null?void 0:z.max)==null?void 0:K[1])??1))/2,((((N=(H=M.bbox)==null?void 0:H.min)==null?void 0:N[2])??-1)+(((U=(he=M.bbox)==null?void 0:he.max)==null?void 0:U[2])??1))/2]})}},w.onerror=k=>{w.terminate(),S(k)},i instanceof ArrayBuffer?(Ct("parsing PLY..."),w.postMessage({type:"start",plyBuffer:i},[i])):w.postMessage({type:"start_url",url:i.url})})}var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_s={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,l){(function(f,S){S(l)})(Fl,function(f){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class F extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class A extends k{constructor(e,t){super(e),this.index=t}}function V(n){return n}function G(n){return n==null}function Y(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const K={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class H{static alreadyDisposed(){return new H({type:"alreadydisposed"})}static notBindable(){return new H({type:"notbindable"})}static propertyNotFound(e){return new H({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new H({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=K[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class N{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!N.isBindable(s))throw H.notBindable();if(!(e in s))throw H.propertyNotFound(e);s[e]=t}}class he extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class U{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Z="tp";function W(n){return(t,s)=>[Z,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function de(n,e){return t=>e(n(t))}function $(n){return n.rawValue}function be(n,e){n.emitter.on("change",de($,e)),e(n.rawValue)}function se(n,e,t){be(n.value(e),t)}function _e(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ue(n,e){return t=>{_e(n,e,t)}}function xe(n,e){be(n,t=>{e.textContent=t??""})}const Ae=W("btn");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ae()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ae("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Ae("t")),xe(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class ie{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ae{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new U,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class me{constructor(e){this.emitter=new U,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function Q(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new me(n):new ae(n,e)}class X{constructor(e){this.emitter=new U,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:Q(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new X(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ne(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const D=e[P],te=D(n[P]);return te.succeeded?Object.assign(Object.assign({},c),{[P]:te.value}):void 0},{});return s}function fe(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Be(n){return n===null?!1:typeof n=="object"}function le(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function ye(n){return{custom:e=>le(e)(n),boolean:le(e=>typeof e=="boolean"?e:void 0)(n),number:le(e=>typeof e=="number"?e:void 0)(n),string:le(e=>typeof e=="string"?e:void 0)(n),function:le(e=>typeof e=="function"?e:void 0)(n),constant:e=>le(t=>t===e?e:void 0)(n),raw:le(e=>e)(n),object:e=>le(t=>{if(Be(t))return ne(t,e)})(n),array:e=>le(t=>{if(Array.isArray(t))return fe(t,e)})(n)}}const Ce={optional:ye(!0),required:ye(!1)};function Ee(n,e){const t=Ce.required.object(e)(n);return t.succeeded?t.value:void 0}function Re(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class R{constructor(e){this.value_=e}static create(e){return[new R(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=W("");function o(n,e){return ue(n,g(void 0,e))}class h extends X{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=R.create(Q(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new h(X.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){be(this.globalDisabled_,o(e,"disabled")),se(this,"hidden",o(e,"hidden"))}bindDisabled(e){be(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){be(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const b=W(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Re({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function L(n,e,t){n.insertBefore(e,n.children[t])}function O(n){n.parentElement&&n.parentElement.removeChild(n)}function q(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function pe(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function re(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ee=W("lbl");function we(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class ke{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ee()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ee("l")),se(t.props,"label",P=>{G(P)?this.element.classList.add(ee(void 0,"nol")):(this.element.classList.remove(ee(void 0,"nol")),pe(s),s.appendChild(we(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(ee("v")),this.element.appendChild(c),this.valueElement=c}}class ve extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new ke(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Pe={id:"button",type:"blade",accept(n){const e=Ce,t=Ee(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ve(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:new ie(n.document,{props:X.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ve)||!(n.controller.valueController instanceof ie)?null:new he(n.controller)}};class Ge extends C{constructor(e){super(e),this.value=e.value}}function ze(){return new X({positions:Q([],{equals:Y})})}class $e extends X{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=X.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};se(this,"expanded",s),se(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function je(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function He(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=je(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends w{constructor(e,t){super(e),this.rackApi_=t}}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ye{constructor(e){this.emitter=new U,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw H.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class J extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class ce extends ve{constructor(e,t){super(e,t),this.binding=t.binding}}class oe extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new F(this,t,this.controller_.binding.target.presetKey)})}}class Se extends ve{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function De(n){return n instanceof Ve?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function ge(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw H.shouldNeverHappen();return t}function Le(n,e,t){if(!N.isBindable(n))throw H.notBindable();return new N(n,e,t)}class Ve extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new U,this.apiSet_=new Ye(De),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>ge(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(P,Le(e,t,c.presetKey),c),te=new J(D);return this.add(te,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(P,Le(e,t),c),te=new oe(D);return this.add(te,c.index)}addFolder(e){return et(this,e)}addButton(e){return tt(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return Je(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=ge(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof ce){const s=ge(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ge){const s=ge(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Se))throw H.shouldNeverHappen();const t=ge(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new F(t,s.target.read(),s.target.presetKey)})}}class Ne extends Qe{constructor(e,t){super(e,new Ve(e.rackController,t)),this.emitter_=new U,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class We extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class rt{constructor(e,t){const s=W(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Et(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof ce&&s.binding===e)return s}return null}function vt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Se&&s.binding===e)return s}return null}function zt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ge&&s.value===e)return s}return null}function kt(n){return n instanceof Ze?n.rack:n instanceof We?n.rackController.rack:null}function Ut(n){const e=kt(n);return e?e.bcSet_:null}class Yt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new U,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ye(Ut),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),z(e,"parent")?e.parent=this:(e.parent_=this,Re({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){z(e,"parent")?e.parent=null:(e.parent_=null,Re({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof ce)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Se)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ge)s.value.emitter.on("change",this.onChildValueChange_);else{const c=kt(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof ce)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Se)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ge)s.value.emitter.off("change",this.onChildValueChange_);else{const c=kt(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Et(this.find(ce),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=vt(this.find(Se),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=zt(this.find(Ge),e.sender);if(!t)throw H.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ze extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new rt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Yt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&L(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&O(e.bladeController.view.element)}}const an=W("cnt");class Fn{constructor(e,t){var s;this.className_=W((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),an()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),se(this.foldable_,"completed",ue(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),se(t.props,"title",Te=>{G(Te)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const D=e.createElement("div");D.classList.add(this.className_("t")),xe(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const te=e.createElement("div");te.classList.add(this.className_("m")),this.buttonElement.appendChild(te);const Me=t.containerElement;Me.classList.add(this.className_("c")),this.element.appendChild(Me),this.containerElement=Me}}class Zt extends We{constructor(e,t){var s;const c=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new Ze(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new Fn(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,He(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ct={id:"folder",type:"blade",accept(n){const e=Ce,t=Ee(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Zt(n.document,{blade:n.blade,expanded:n.params.expanded,props:X.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Zt?new Ne(n.controller,n.pool):null}};class ht extends Ge{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new ke(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Gt extends w{}const bt=W("spr");class Xt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(bt("r")),this.element.appendChild(s)}}class Rt extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Xt(e,{viewProps:t.viewProps})}))}}const Nn={id:"separator",type:"blade",accept(n){const t=Ee(n,{view:Ce.required.constant("separator")});return t?{params:t}:null},controller(n){return new Rt(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Rt?new Gt(n.controller):null}},gt=W("tbi");class fi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gt()),t.viewProps.bindClassModifiers(this.element),se(t.props,"selected",P=>{P?this.element.classList.add(gt(void 0,"sel")):this.element.classList.remove(gt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(gt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(gt("t")),xe(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class _i{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new fi(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ps{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new _i(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ze(e,{blade:ze(),viewProps:h.create()}),this.props=t.props,se(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ss{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Cs extends Qe{constructor(e,t){super(e,new Ve(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new U,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw H.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Ps(t,{itemProps:X.fromObject({selected:!1,title:e.title}),props:X.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw H.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw H.shouldNeverHappen();const s=new Ss(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw H.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const Es=-1;class mi{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Q(!0),this.selectedIndex=Q(Es),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Es,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const ln=W("tab");class bi{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ln(),an()),t.viewProps.bindClassModifiers(this.element),be(t.empty,ue(this.element,ln(void 0,"nop")));const s=e.createElement("div");s.classList.add(ln("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(ln("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(ln("c")),this.element.appendChild(P),this.contentsElement=P}}class ks extends We{constructor(e,t){const s=new Ze(e,{blade:t.blade,viewProps:t.viewProps}),c=new mi;super({blade:t.blade,rackController:s,view:new bi(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ye(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;L(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;O(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Ms={id:"tab",type:"blade",accept(n){const e=Ce,t=Ee(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new ks(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Ps(n.document,{itemProps:X.fromObject({selected:!1,title:t.title}),props:X.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof ks?new Cs(n.controller,n.pool):null}};function vi(n,e){const t=n.accept(e.params);if(!t)return null;const s=Ce.optional.boolean(e.params.disabled).value,c=Ce.optional.boolean(e.params.hidden).value;return n.controller({blade:ze(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class gi{constructor(){this.disabled=!1,this.emitter=new U}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class wi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new U,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class xi{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new U,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Bs(n,e){for(;n.length<e;)n.push(void 0)}function yi(n){const e=[];return Bs(e,n),Q(e)}function Pi(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Si(n,e){const t=[...Pi(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Bs(t,n.length),t}class Ci{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new U,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Si(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class cn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function wt(n,e){if(n instanceof e)return n;if(n instanceof cn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Qt{constructor(e){this.values=X.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class un{constructor(e){this.values=X.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Ts{constructor(e){this.values=X.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class Cn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const qn=W("lst");class Ei{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(qn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(qn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(qn("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,se(this.props_,"options",P=>{q(this.selectElement),P.forEach(D=>{const te=e.createElement("option");te.textContent=D.text,this.selectElement.appendChild(te)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class dn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ei(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ds=W("pop");class ki{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ds()),t.viewProps.bindClassModifiers(this.element),be(t.shows,ue(this.element,Ds(void 0,"v")))}}class As{constructor(e,t){this.shows=Q(!1),this.viewProps=t.viewProps,this.view=new ki(e,{shows:this.shows,viewProps:this.viewProps})}}const Ls=W("txt");class Mi{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ls()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Ls("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class En{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mi(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Bi(n){return String(n)}function Is(n){return n==="false"?!1:!!n}function zs(n){return Bi(n)}class Ti{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Di={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ai{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Di[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Li={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ii{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function $n(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function pn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function zi(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function hn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=hn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=hn(n,e);return c===""?"":s+c}function Wn(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ui(n,e);return s===""?"":t+s}function Us(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=zi(n,e);return e+=s.length,s===""?"":s+hn(n,e)}function Gi(n,e){const t=Us(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=hn(n,e);return e+=c.length,t+s+c+Wn(n,e)}function Ri(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=hn(n,e);return e+=s.length,s===""?"":t+s+Wn(n,e)}function Vi(n,e){const t=Us(n,e);return e+=t.length,t===""?"":t+Wn(n,e)}const Oi=$n([Gi,Ri,Vi]);function Fi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ni(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Fi(n,e);return s===""?"":t+s}function qi(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $i(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=qi(n,e);return s===""?"":t+s}function Wi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ji(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Wi(n,e);return s===""?"":t+s}const Ki=$n([Ni,$i,ji]),Hi=$n([Ki,Oi]);function Yi(n,e){const t=Hi(n,e);return e+=t.length,t===""?null:{evaluable:new Ti(t),cursor:e}}function Zi(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Rs(n,e);if(!s)return null;e=s.cursor,e+=pn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Xi(n,e){var t;return(t=Yi(n,e))!==null&&t!==void 0?t:Zi(n,e)}function Gs(n,e){const t=Xi(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Gs(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ii(s,c.evaluable)}):null}function Qi(n,e,t){t+=pn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=pn(e,t).length,{cursor:t,operator:s}):null}function Ji(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const D=Qi(e,t,s);if(!D)break;s=D.cursor;const te=n(t,s);if(!te)return null;s=te.cursor,P=new Ai(D.operator,P,te.evaluable)}return P?{cursor:s,evaluable:P}:null}}const eo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Ji(n,e),Gs);function Rs(n,e){return e+=pn(n,e).length,eo(n,e)}function to(n){const e=Rs(n,0);return!e||e.cursor+pn(n,e.cursor).length!==n.length?null:e.evaluable}function xt(n){var e;const t=to(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Vs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=xt(n);if(!G(e))return e}return 0}function no(n){return String(n)}function ot(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const so=ot(0);function kn(n){return so(n)+"%"}function Os(n){return String(n)}function jn(n){return n}function fn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{P(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{P(()=>{n.setRawValue(s(n,e),D.options)}),P(()=>{e.setRawValue(t(n,e),D.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function dt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function _n(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function yt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ro(n){return n==="ArrowUp"||n==="ArrowDown"}function Fs(n){return ro(n)||n==="ArrowLeft"||n==="ArrowRight"}function Kn(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Vt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new U,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Kn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Kn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Kn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Xe(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function Ns(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function st(n,e,t){return Math.min(Math.max(n,e),t)}function qs(n,e){return(n%e+e)%e}const ft=W("txt");class io{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ft(),ft(void 0,"num")),t.arrayPosition&&this.element.classList.add(ft(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(ft("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(ft()),this.inputElement.classList.add(ft("i"));const c=e.createElement("div");c.classList.add(ft("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(E,"svg");P.classList.add(ft("g")),this.knobElement.appendChild(P);const D=e.createElementNS(E,"path");D.classList.add(ft("gb")),P.appendChild(D),this.guideBodyElem_=D;const te=e.createElementNS(E,"path");te.classList.add(ft("gh")),P.appendChild(te),this.guideHeadElem_=te;const Me=e.createElement("div");Me.classList.add(W("tt")()),this.knobElement.appendChild(Me),this.tooltipElem_=Me,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(ft(void 0,"drg"));return}this.element.classList.add(ft(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=st(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class mn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=Q(null),this.view=new io(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Vt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),P!==void 0&&(D=Math.min(D,P)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=dt(this.baseStep_,_n(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){dt(this.baseStep_,_n(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Hn=W("sld");class oo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Hn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Hn("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(Hn("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=st(Xe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class ao{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new oo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Vt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Xe(st(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=dt(this.baseStep_,yt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){dt(this.baseStep_,yt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Yn=W("sldtxt");class lo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yn());const s=e.createElement("div");s.classList.add(Yn("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Yn("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Zn{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new ao(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new mn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new lo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function bn(n,e){n.write(e)}function Mn(n){const e=Ce;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function $s(n){if(n==="inline"||n==="popup")return n}function Mt(n){const e=Ce;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Ws(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Xn(n){return G(n)?null:new un(Ws(n))}function co(n){const e=n?wt(n,Cn):null;return e?e.step:null}function Bn(n,e){const t=n&&wt(n,Cn);return t?Ns(t.step):Math.max(Ns(e),2)}function Jt(n){const e=co(n);return e??1}function en(n,e){var t;const s=n&&wt(n,Cn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Tn=W("ckb");class uo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Tn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Tn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Tn("w")),s.appendChild(P);const D=v(e,"check");P.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class po{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new uo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function ho(n){const e=[],t=Xn(n.options);return t&&e.push(t),new cn(e)}const fo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ee(e,{options:Ce.optional.custom(Mn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Is,constraint:n=>ho(n.params),writer:n=>bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&wt(s,un);return c?new dn(e,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new po(e,{value:t,viewProps:n.viewProps})}},Ot=W("col");class _o{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ot()),t.foldable.bindExpandedClass(this.element,Ot(void 0,"expanded")),se(t.foldable,"completed",ue(this.element,Ot(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Ot("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ot("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(Ot("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Ot("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function mo(n,e,t){const s=st(n/255,0,1),c=st(e/255,0,1),P=st(t/255,0,1),D=Math.max(s,c,P),te=Math.min(s,c,P),Me=D-te;let Te=0,Fe=0;const qe=(te+D)/2;return Me!==0&&(Fe=Me/(1-Math.abs(D+te-1)),s===D?Te=(c-P)/Me:c===D?Te=2+(P-s)/Me:Te=4+(s-c)/Me,Te=Te/6+(Te<0?1:0)),[Te*360,Fe*100,qe*100]}function bo(n,e,t){const s=(n%360+360)%360,c=st(e/100,0,1),P=st(t/100,0,1),D=(1-Math.abs(2*P-1))*c,te=D*(1-Math.abs(s/60%2-1)),Me=P-D/2;let Te,Fe,qe;return s>=0&&s<60?[Te,Fe,qe]=[D,te,0]:s>=60&&s<120?[Te,Fe,qe]=[te,D,0]:s>=120&&s<180?[Te,Fe,qe]=[0,D,te]:s>=180&&s<240?[Te,Fe,qe]=[0,te,D]:s>=240&&s<300?[Te,Fe,qe]=[te,0,D]:[Te,Fe,qe]=[D,0,te],[(Te+Me)*255,(Fe+Me)*255,(qe+Me)*255]}function vo(n,e,t){const s=st(n/255,0,1),c=st(e/255,0,1),P=st(t/255,0,1),D=Math.max(s,c,P),te=Math.min(s,c,P),Me=D-te;let Te;Me===0?Te=0:D===s?Te=60*(((c-P)/Me%6+6)%6):D===c?Te=60*((P-s)/Me+2):Te=60*((s-c)/Me+4);const Fe=D===0?0:Me/D,qe=D;return[Te,Fe*100,qe*100]}function js(n,e,t){const s=qs(n,360),c=st(e/100,0,1),P=st(t/100,0,1),D=P*c,te=D*(1-Math.abs(s/60%2-1)),Me=P-D;let Te,Fe,qe;return s>=0&&s<60?[Te,Fe,qe]=[D,te,0]:s>=60&&s<120?[Te,Fe,qe]=[te,D,0]:s>=120&&s<180?[Te,Fe,qe]=[0,D,te]:s>=180&&s<240?[Te,Fe,qe]=[0,te,D]:s>=240&&s<300?[Te,Fe,qe]=[te,0,D]:[Te,Fe,qe]=[D,0,te],[(Te+Me)*255,(Fe+Me)*255,(qe+Me)*255]}function go(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function wo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Ft(n){return[n[0],n[1],n[2]]}function Ks(n,e){return[n[0],n[1],n[2],e]}const xo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:go,rgb:bo},hsv:{hsl:wo,hsv:(n,e,t)=>[n,e,t],rgb:js},rgb:{hsl:mo,hsv:vo,rgb:(n,e,t)=>[n,e,t]}};function Dn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function yo(n,e){return n===e?e:qs(n,e)}function Po(n,e,t){var s;const c=Dn(e,t);return[e==="rgb"?st(n[0],0,c[0]):yo(n[0],c[0]),st(n[1],0,c[1]),st(n[2],0,c[2]),st((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Hs(n,e,t,s){const c=Dn(e,t),P=Dn(e,s);return n.map((D,te)=>D/c[te]*P[te])}function So(n,e,t){const s=Hs(n,e.mode,e.type,"int"),c=xo[e.mode][t.mode](...s);return Hs(c,t.mode,"int",t.type)}function An(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Oe{static black(e="int"){return new Oe([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Oe(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return An(e,"r")&&An(e,"g")&&An(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&An(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Po(e,t,s)}getComponents(e,t="int"){return Ks(So(Ft(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Bt=W("colp");class Co{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Bt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Bt("hsv"));const c=e.createElement("div");c.classList.add(Bt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Bt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Bt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const te=e.createElement("div");te.classList.add(Bt("a"));const Me=e.createElement("div");Me.classList.add(Bt("ap")),Me.appendChild(this.alphaViews_.palette.element),te.appendChild(Me);const Te=e.createElement("div");Te.classList.add(Bt("at")),Te.appendChild(this.alphaViews_.text.element),te.appendChild(Te),this.element.appendChild(te)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Eo(n){return n==="int"?"int":n==="float"?"float":void 0}function Qn(n){const e=Ce;return Ee(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Eo)}),expanded:e.optional.boolean,picker:e.optional.custom($s)})}function Nt(n){return n?.1:1}function qt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function ko(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function _t(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Mo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ys(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Mo[s](t)}function Zs(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[_t(e[1],255),_t(e[2],255),_t(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Xs(n){return e=>{const t=Zs(e);return t?new Oe(t,"rgb",n):null}}function Qs(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[_t(e[1],255),_t(e[2],255),_t(e[3],255),_t(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Js(n){return e=>{const t=Qs(e);return t?new Oe(t,"rgb",n):null}}function er(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ys(e[1]),_t(e[2],100),_t(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function tr(n){return e=>{const t=er(e);return t?new Oe(t,"hsl",n):null}}function nr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ys(e[1]),_t(e[2],100),_t(e[3],100),_t(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function sr(n){return e=>{const t=nr(e);return t?new Oe(t,"hsl",n):null}}function rr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Bo(n){const e=rr(n);return e?new Oe(e,"rgb","int"):null}function ir(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Xe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Xe(parseInt(t[4],16),0,255,0,1)]:null}function To(n){const e=ir(n);return e?new Oe(e,"rgb","int"):null}function or(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ar(n){return e=>{const t=or(e);return t?new Oe(t,"rgb",n):null}}function lr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function cr(n){return e=>{const t=lr(e);return t?new Oe(t,"rgb",n):null}}const Do=[{parser:rr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ir,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Zs,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Qs,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:er,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:nr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:or,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:lr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ao(n){return Do.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Jn(n,e="int"){const t=Ao(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const ur={int:[Bo,To,Xs("int"),Js("int"),tr("int"),sr("int"),ar("int"),cr("int")],float:[Xs("float"),Js("float"),tr("float"),sr("float"),ar("float"),cr("float")]};function Lo(n){const e=ur[n];return t=>{if(typeof t!="string")return Oe.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Oe.black(n)}}function es(n){const e=ur[n];return t=>e.reduce((s,c)=>s||c(t),null)}function dr(n){const e=st(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function pr(n,e="#"){const t=Ft(n.getComponents("rgb")).map(dr).join("");return`${e}${t}`}function ts(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(dr).join("");return`${e}${s}`}function hr(n,e){const t=ot(e==="float"?2:0);return`rgb(${Ft(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Io(n){return e=>hr(e,n)}function Ln(n,e){const t=ot(2),s=ot(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,D)=>(D===3?t:s)(P)).join(", ")})`}function zo(n){return e=>Ln(e,n)}function Uo(n){const e=[ot(0),kn,kn];return`hsl(${Ft(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Go(n){const e=[ot(0),kn,kn,ot(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function fr(n,e){const t=ot(e==="float"?2:0),s=["r","g","b"];return`{${Ft(n.getComponents("rgb",e)).map((P,D)=>`${s[D]}: ${t(P)}`).join(", ")}}`}function Ro(n){return e=>fr(e,n)}function _r(n,e){const t=ot(2),s=ot(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,te)=>{const Me=te===3?t:s;return`${c[te]}: ${Me(D)}`}).join(", ")}}`}function Vo(n){return e=>_r(e,n)}const Oo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:pr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ts},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Uo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Go},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Io(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:zo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ro(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Vo(e)}],[])];function ns(n){return Oo.reduce((e,t)=>e||(ko(t.format,n)?t.stringifier:null),null)}const vn=W("apl");class Fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(vn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(vn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(vn("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(vn("m")),this.element.appendChild(P),this.markerElem_=P;const D=e.createElement("div");D.classList.add(vn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Oe([t[0],t[1],t[2],0],"rgb"),c=new Oe([t[0],t[1],t[2],255],"rgb"),P=["to right",Ln(s),Ln(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Ln(e);const D=Xe(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class No{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Fo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Vt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,D,te]=c.getComponents("hsv");this.value.setRawValue(new Oe([P,D,te,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=dt(Nt(!0),yt(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,te]=s.getComponents("hsv");this.value.setRawValue(new Oe([c,P,D,te+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){dt(Nt(!0),yt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const tn=W("coltxt");function qo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class $o{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(tn("m")),this.modeElem_=qo(e),this.modeElem_.classList.add(tn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(tn("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(tn("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),be(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){q(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(tn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Wo(n){return ot(n==="float"?2:0)}function jo(n,e,t){const s=Dn(n,e)[t];return new Qt({min:0,max:s})}function ss(n,e,t){return new mn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Nt(!1),parser:e.parser,props:X.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Wo(e.colorType)}),value:Q(0,{constraint:jo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Ko{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=Q(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new $o(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ss(e,t,0),ss(e,t,1),ss(e,t,2)];return s.forEach((c,P)=>{fn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(D,te)=>{const Me=this.colorMode.rawValue,Te=D.rawValue.getComponents(Me,this.colorType_);return Te[P]=te.rawValue,new Oe(Ks(Ft(Te),Te[3]),Me,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const rs=W("hpl");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(rs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(rs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(rs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=hr(new Oe([t,100,100],"hsv"));const s=Xe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Vt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(st(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,D,te]=c.getComponents("hsv");this.value.setRawValue(new Oe([s,P,D,te],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=dt(Nt(!1),yt(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,te]=s.getComponents("hsv");this.value.setRawValue(new Oe([c+t,P,D,te],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){dt(Nt(!1),yt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const is=W("svp"),mr=64;class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=mr,s.width=mr,s.classList.add(is("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(is("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,D=e.getImageData(0,0,c,P),te=D.data;for(let Fe=0;Fe<P;Fe++)for(let qe=0;qe<c;qe++){const $t=Xe(qe,0,c,0,100),wn=Xe(Fe,0,P,100,0),xn=js(s[0],$t,wn),In=(Fe*c+qe)*4;te[In]=xn[0],te[In+1]=xn[1],te[In+2]=xn[2],te[In+3]=255}e.putImageData(D,0,0);const Me=Xe(s[1],0,100,0,100);this.markerElem_.style.left=`${Me}%`;const Te=Xe(s[2],0,100,100,0);this.markerElem_.style.top=`${Te}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Vt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(e.point.x,0,e.bounds.width,0,100),c=Xe(e.point.y,0,e.bounds.height,100,0),[P,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Oe([P,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Fs(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),D=Nt(!1),te=dt(D,yt(e)),Me=dt(D,_n(e));te===0&&Me===0||this.value.setRawValue(new Oe([t,s+te,c+Me,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Nt(!1),s=dt(t,yt(e)),c=dt(t,_n(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Qo{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new No(e,{value:this.value,viewProps:this.viewProps}),text:new mn(e,{parser:xt,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:ot(2)}),value:Q(0,{constraint:new Qt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&fn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Oe(P,s.rawValue.mode)}}),this.textC_=new Ko(e,{colorType:t.colorType,parser:xt,value:this.value,viewProps:this.viewProps}),this.view=new Co(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const os=W("colsw");class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(os()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(os("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(os("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ts(e)}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps})}}class as{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new ea(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new En(e,{parser:t.parser,props:X.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new _o(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new As(e,{viewProps:this.viewProps}):null;const c=new Qo(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),fn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),He(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ta(n,e){return Oe.isColorObject(n)?Oe.fromObject(n,e):Oe.black(e)}function na(n){return Ft(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function sa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function ra(n){return new Oe([n>>16&255,n>>8&255,n&255],"rgb")}function ia(n){return new Oe([n>>24&255,n>>16&255,n>>8&255,Xe(n&255,0,255,0,1)],"rgb")}function oa(n){return typeof n!="number"?Oe.black():ra(n)}function aa(n){return typeof n!="number"?Oe.black():ia(n)}function la(n){const e=ns(n);return e?(t,s)=>{bn(t,e(s))}:null}function ca(n){const e=n?sa:na;return(t,s)=>{bn(t,e(s))}}function ua(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function da(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function pa(n,e){return(t,s)=>{n?ua(t,s,e):da(t,s,e)}}function ls(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ha(n){return n?e=>ts(e,"0x"):e=>pr(e,"0x")}function fa(n){return"color"in n||"view"in n&&n.view==="color"}const _a={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!fa(e))return null;const t=Qn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ls(n.params)?aa:oa,equals:Oe.equals,writer:n=>ca(ls(n.params))},controller:n=>{const e=ls(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new as(n.document,{colorType:"int",expanded:t??!1,formatter:ha(e),parser:es("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ma(n){return Oe.isRgbaColorObject(n)}function ba(n){return e=>ta(e,n)}function va(n,e){return t=>n?_r(t,e):fr(t,e)}const ga={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Oe.isColorObject(n))return null;const t=Qn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ba(qt(n.params)),equals:Oe.equals,writer:n=>pa(ma(n.initialValue),qt(n.params))},controller:n=>{var e;const t=Oe.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=qt(n.params))!==null&&e!==void 0?e:"int";return new as(n.document,{colorType:P,expanded:s??!1,formatter:va(t,P),parser:es(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},wa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Jn(n,qt(e));if(!t||!ns(t))return null;const c=Qn(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Lo((e=qt(n.params))!==null&&e!==void 0?e:"int")},equals:Oe.equals,writer:n=>{const e=Jn(n.initialValue,qt(n.params));if(!e)throw H.shouldNeverHappen();const t=la(e);if(!t)throw H.notBindable();return t}},controller:n=>{const e=Jn(n.initialValue,qt(n.params));if(!e)throw H.shouldNeverHappen();const t=ns(e);if(!t)throw H.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new as(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:es(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Tt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,D;return(D=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const br=W("pndtxt");class xa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(br()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(br("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function ya(n,e,t){return new mn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:Q(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class cs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>ya(e,t,c)),this.acs_.forEach((s,c)=>{fn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,D)=>{const te=t.assembly.toComponents(P.rawValue);return te[c]=D.rawValue,t.assembly.fromComponents(te)}})}),this.view=new xa(e,{textViews:this.acs_.map(s=>s.view)})}}function vr(n,e){return"step"in n&&!G(n.step)?new Cn(n.step,e):null}function gr(n){return!G(n.max)&&!G(n.min)?new Qt({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Ts({max:n.max,min:n.min}):null}function Pa(n){const e=wt(n,Qt);if(e)return[e.values.get("min"),e.values.get("max")];const t=wt(n,Ts);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Sa(n,e){const t=[],s=vr(n,e);s&&t.push(s);const c=gr(n);c&&t.push(c);const P=Xn(n.options);return P&&t.push(P),new cn(t)}const Ca={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Ce,s=Ee(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Mn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs,constraint:n=>Sa(n.params,n.initialValue),writer:n=>bn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&wt(s,un);if(c)return new dn(n.document,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ot(Bn(s,t.rawValue)),D=s&&wt(s,Qt);return D?new Zn(n.document,{baseStep:Jt(s),parser:xt,sliderProps:new X({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:X.fromObject({draggingScale:en(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new mn(n.document,{baseStep:Jt(s),parser:xt,props:X.fromObject({draggingScale:en(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Dt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const wr={toComponents:n=>n.getComponents(),fromComponents:n=>new Dt(...n)},nn=W("p2d");class Ea{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),be(t.expanded,ue(this.element,nn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(nn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(nn("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(nn("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(nn("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const At=W("p2dp");class ka{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(At()),t.layout==="popup"&&this.element.classList.add(At(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(At("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(At("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(E,"line");P.classList.add(At("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const D=e.createElementNS(E,"line");D.classList.add(At("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const te=e.createElementNS(E,"line");te.classList.add(At("l")),te.setAttributeNS(null,"x1","50%"),te.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(te),this.lineElem_=te;const Me=e.createElement("div");Me.classList.add(At("m")),this.padElement.appendChild(Me),this.markerElem_=Me,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Xe(e,-s,+s,0,100),P=Xe(t,-s,+s,0,100),D=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function xr(n,e,t){return[dt(e[0],yt(n)),dt(e[1],_n(n))*(t?1:-1)]}class Ma{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new ka(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Vt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Xe(e.point.x,0,e.bounds.width,-s,+s),P=Xe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Dt(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Fs(e.key)&&e.preventDefault();const[t,s]=xr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Dt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=xr(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ba{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new As(e,{viewProps:this.viewProps}):null;const P=new Ma(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new cs(e,{assembly:wr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ea(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),fn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,te)=>te.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),He(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=re(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class sn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const yr={toComponents:n=>n.getComponents(),fromComponents:n=>new sn(...n)};function Ta(n){return sn.isObject(n)?new sn(n.x,n.y,n.z):new sn}function Da(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Aa(n,e){return new Tt({assembly:yr,components:[Pt("x"in n?n.x:void 0,e.x),Pt("y"in n?n.y:void 0,e.y),Pt("z"in n?n.z:void 0,e.z)]})}function us(n,e){return{baseStep:Jt(e),constraint:e,textProps:X.fromObject({draggingScale:en(e,n),formatter:ot(Bn(e,n))})}}const La={id:"input-point3d",type:"input",accept:(n,e)=>{if(!sn.isObject(n))return null;const t=Ce,s=Ee(e,{x:t.optional.custom(Mt),y:t.optional.custom(Mt),z:t.optional.custom(Mt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ta,constraint:n=>Aa(n.params,n.initialValue),equals:sn.equals,writer:n=>Da},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Tt))throw H.shouldNeverHappen();return new cs(n.document,{assembly:yr,axes:[us(e.rawValue.x,t.components[0]),us(e.rawValue.y,t.components[1]),us(e.rawValue.z,t.components[2])],parser:xt,value:e,viewProps:n.viewProps})}};class rn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Pr={toComponents:n=>n.getComponents(),fromComponents:n=>new rn(...n)};function Ia(n){return rn.isObject(n)?new rn(n.x,n.y,n.z,n.w):new rn}function za(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ua(n,e){return new Tt({assembly:Pr,components:[Pt("x"in n?n.x:void 0,e.x),Pt("y"in n?n.y:void 0,e.y),Pt("z"in n?n.z:void 0,e.z),Pt("w"in n?n.w:void 0,e.w)]})}function Ga(n,e){return{baseStep:Jt(e),constraint:e,textProps:X.fromObject({draggingScale:en(e,n),formatter:ot(Bn(e,n))})}}const Ra={id:"input-point4d",type:"input",accept:(n,e)=>{if(!rn.isObject(n))return null;const t=Ce,s=Ee(e,{x:t.optional.custom(Mt),y:t.optional.custom(Mt),z:t.optional.custom(Mt),w:t.optional.custom(Mt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>Ua(n.params,n.initialValue),equals:rn.equals,writer:n=>za},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Tt))throw H.shouldNeverHappen();return new cs(n.document,{assembly:Pr,axes:e.rawValue.getComponents().map((s,c)=>Ga(s,t.components[c])),parser:xt,value:e,viewProps:n.viewProps})}};function Va(n){const e=[],t=Xn(n.options);return t&&e.push(t),new cn(e)}const Oa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Ee(e,{options:Ce.optional.custom(Mn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Os,constraint:n=>Va(n.params),writer:n=>bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&wt(s,un);return c?new dn(e,{props:new X({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new En(e,{parser:P=>P,props:X.fromObject({formatter:jn}),value:t,viewProps:n.viewProps})}},gn={monitor:{defaultInterval:200,defaultLineCount:3}},Sr=W("mll");class Fa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Sr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Sr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class ds{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Fa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Cr=W("sgl");class Na{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Cr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Cr("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ps{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Na(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const qa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ee(e,{lineCount:Ce.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Is},controller:n=>{var e;return n.value.rawValue.length===1?new ps(n.document,{formatter:zs,value:n.value,viewProps:n.viewProps}):new ds(n.document,{formatter:zs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Lt=W("grl");class $a{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Lt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(Lt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(Lt("t"),W("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Fe,qe)=>{if(Fe===void 0)return;const $t=Xe(qe,0,t,0,e.width),wn=Xe(Fe,s,c,e.height,0);P.push([$t,wn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const D=this.tooltipElem_,te=this.value.rawValue[this.cursor_.rawValue];if(te===void 0){D.classList.remove(Lt("t","a"));return}const Me=Xe(this.cursor_.rawValue,0,t,0,e.width),Te=Xe(te,s,c,e.height,0);D.style.left=`${Me}px`,D.style.top=`${Te}px`,D.textContent=`${this.formatter_(te)}`,D.classList.contains(Lt("t","a"))||(D.classList.add(Lt("t","a"),Lt("t","in")),r(D),D.classList.remove(Lt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Wa{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=Q(-1),this.view=new $a(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Vt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Xe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Xe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function hs(n){return"format"in n&&!G(n.format)?n.format:ot(2)}function ja(n){var e;return n.value.rawValue.length===1?new ps(n.document,{formatter:hs(n.params),value:n.value,viewProps:n.viewProps}):new ds(n.document,{formatter:hs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ka(n){var e,t,s;return new Wa(n.document,{formatter:hs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,props:X.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Er(n){return"view"in n&&n.view==="graph"}const Ha={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Ce,s=Ee(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Er(n)?64:1,reader:n=>Vs},controller:n=>Er(n.params)?Ka(n):ja(n)},Ya={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Ce,s=Ee(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Os},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ds(n.document,{formatter:jn,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ps(n.document,{formatter:jn,value:t,viewProps:n.viewProps})}};function Za(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=Ce,P={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(P),te=n.binding.constraint?n.binding.constraint(P):void 0,Me=Q(D(s.initialValue),{constraint:te,equals:n.binding.equals}),Te=new xi({reader:D,target:e.target,value:Me,writer:n.binding.writer(P)}),Fe=c.optional.boolean(e.params.disabled).value,qe=c.optional.boolean(e.params.hidden).value,$t=n.controller({constraint:te,document:e.document,initialValue:s.initialValue,params:s.params,value:Te.value,viewProps:h.create({disabled:Fe,hidden:qe})});return new ce(e.document,{binding:Te,blade:ze(),props:X.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:$t})}function Xa(n,e){return e===0?new gi:new wi(n,e??gn.monitor.defaultInterval)}function Qa(n,e){var t,s,c;const P=Ce,D=n.accept(e.target.read(),e.params);if(G(D))return null;const te={target:e.target,initialValue:D.initialValue,params:D.params},Me=n.binding.reader(te),Te=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Fe=P.optional.number(e.params.interval).value,qe=new Ci({reader:Me,target:e.target,ticker:Xa(e.document,Fe),value:yi(Te)}),$t=P.optional.boolean(e.params.disabled).value,wn=P.optional.boolean(e.params.hidden).value,xn=n.controller({document:e.document,params:D.params,value:qe.value,viewProps:h.create({disabled:$t,hidden:wn})});return new Se(e.document,{binding:qe,blade:ze(),props:X.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:xn})}class Ja{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new H({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((D,te)=>D??Za(te,{document:e,target:t,params:s}),null);if(P)return P;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,D)=>P??Qa(D,{document:e,params:s,target:t}),null);if(c)return c;throw new H({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??vi(P,{document:e,params:t}),null);if(!s)throw new H({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof ce)return new J(e);if(e instanceof Se)return new oe(e);if(e instanceof Ze)return new Ve(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw H.shouldNeverHappen();return t}}function el(){const n=new Ja;return[ol,La,Ra,Oa,Ca,wa,ga,_a,fo,qa,Ya,Ha,Pe,ct,Nn,Ms].forEach(e=>{n.register(e)}),n}function tl(n){return Dt.isObject(n)?new Dt(n.x,n.y):new Dt}function nl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Pt(n,e){if(!n)return;const t=[],s=vr(n,e);s&&t.push(s);const c=gr(n);return c&&t.push(c),new cn(t)}function sl(n,e){return new Tt({assembly:wr,components:[Pt("x"in n?n.x:void 0,e.x),Pt("y"in n?n.y:void 0,e.y)]})}function kr(n,e){const[t,s]=n?Pa(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Jt(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function rl(n,e){const t=e instanceof Tt?e.components[0]:void 0,s=e instanceof Tt?e.components[1]:void 0,c=kr(t,n.x),P=kr(s,n.y);return Math.max(c,P)}function Mr(n,e){return{baseStep:Jt(e),constraint:e,textProps:X.fromObject({draggingScale:en(e,n),formatter:ot(Bn(e,n))})}}function il(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ol={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Dt.isObject(n))return null;const t=Ce,s=Ee(e,{expanded:t.optional.boolean,picker:t.optional.custom($s),x:t.optional.custom(Mt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tl,constraint:n=>sl(n.params,n.initialValue),equals:Dt.equals,writer:n=>nl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Tt))throw H.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Ba(e,{axes:[Mr(t.rawValue.x,s.components[0]),Mr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:il(n.params),maxValue:rl(t.rawValue,s),parser:xt,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class Br extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Tr extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Dr extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const al=function(){return{id:"list",type:"blade",accept(n){const e=Ce,t=Ee(n,{options:e.required.custom(Mn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new un(Ws(n.params.options)),t=Q(n.params.value,{constraint:e}),s=new dn(n.document,{props:new X({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new ht(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof ht)||!(n.controller.valueController instanceof dn)?null:new Br(n.controller)}}}();function ll(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function cl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class ul extends Ne{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(ce).map(s=>s.binding);cl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(ce).map(t=>t.binding.target);return ll(e)}refresh(){this.controller_.rackController.rack.find(ce).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Se).forEach(e=>{e.binding.read()})}}class dl extends Zt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const pl={id:"slider",type:"blade",accept(n){const e=Ce,t=Ee(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Qt({max:n.params.max,min:n.params.min}),P=new Zn(n.document,{baseStep:1,parser:xt,sliderProps:new X({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:X.fromObject({draggingScale:en(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:no}),value:Q(s,{constraint:c}),viewProps:n.viewProps});return new ht(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof ht)||!(n.controller.valueController instanceof Zn)?null:new Tr(n.controller)}},hl=function(){return{id:"text",type:"blade",accept(n){const e=Ce,t=Ee(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new En(n.document,{parser:n.params.parse,props:X.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:Q(n.params.value),viewProps:n.viewProps});return new ht(n.document,{blade:n.blade,props:X.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof ht)||!(n.controller.valueController instanceof En)?null:new Dr(n.controller)}}}();function fl(n){const e=n.createElement("div");return e.classList.add(W("dfw")()),n.body&&n.body.appendChild(e),e}function Ar(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class _l extends ul{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),D=el(),te=new dl(P,{expanded:c.expanded,blade:ze(),props:X.fromObject({title:c.title}),viewProps:h.create()});super(te,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:fl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw H.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw H.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Ar(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Ar(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[pl,al,Ms,hl]})}}const ml=new S("3.1.10");f.BladeApi=w,f.ButtonApi=he,f.FolderApi=Ne,f.InputBindingApi=J,f.ListApi=Br,f.MonitorBindingApi=oe,f.Pane=_l,f.SeparatorApi=Gt,f.SliderApi=Tr,f.TabApi=Cs,f.TabPageApi=Ss,f.TextApi=Dr,f.TpChangeEvent=M,f.VERSION=ml,Object.defineProperty(f,"__esModule",{value:!0})})})(_s,_s.exports);var Nl=_s.exports;const ql=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,$l=`// 2DGS render — vertex+fragment.
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
// branch. Saves one per-fragment compare + conditional branch that was
// really per-bake, not per-fragment.
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

    // Kernel dispatch — BETA_KERNEL is a compile-time constant set from
    // the bake's kernel field, so exactly one branch survives after
    // pipeline-constant folding:
    //   beta_scaled (BETA_KERNEL=1): (1 − ρ3d/9)^β, hard cutoff at ρ3d = 9.
    //   gaussian    (BETA_KERNEL=0): exp(-ρ3d / 2), unbounded analytically.
    // The previous per-fragment \`if sh < 1e-6\` was really a per-bake switch,
    // so this saves one predicate + conditional branch per pixel.
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
        // an integer power get the speedup naturally.
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
`,Wl=`const WG_SIZE = 256u;
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
}`,jl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
                let px_f = (ndc_c.x * 0.5 + 0.5) * W_c;
                let py_f = (ndc_c.y * 0.5 + 0.5) * H_c;
                // View-clip lets surfels project up to ±1.2× outside the
                // frame; textureLoad past texture bounds returns 0 (near),
                // which would false-cull edge surfels. Range-check first;
                // out-of-range → skip the cull (keep the surfel).
                if px_f >= 0.0 && py_f >= 0.0 && px_f < W_c && py_f < H_c {
                    let tex_dims = vec2<i32>(textureDimensions(mesh_depth_tex));
                    let tx = clamp(i32(px_f), 0, tex_dims.x - 1);
                    let ty = clamp(i32(py_f), 0, tex_dims.y - 1);
                    let mesh_z = textureLoad(mesh_depth_tex, vec2<i32>(tx, ty), 0);
                    // Small margin absorbs the half-pixel offset between
                    // sample point and rasterized triangle center + fp32
                    // fighting on grazing planes.
                    if z_ndc > mesh_z + 1e-4 {
                        mesh_occluded = true;
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
`,Kl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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

// World-space breathing-room margin applied by pushing each mesh vertex
// AWAY from the camera in view space before projection. Same idea as the
// CUDA-side \`mesh_depth += margin\` used at training (nest-splatting's
// finetune_mesh_cull.py --mesh_margin 0.03) — the rasterized depth ends up
// \`margin_m\` metres farther out along the view axis, so surfels within
// that margin of the true mesh surface (but on the camera side) stay
// visible. Without this the WebGPU cull is stricter than what the model
// was trained under and rim surfels near the frontier disappear.
//
// Held in a tiny dedicated uniform (group 1) rather than a shader
// constant so the host can dial it at runtime via the Tweakpane input —
// negative values PULL the mesh closer to the camera (more aggressive
// cull), positive PUSH it farther (more forgiving). The uniform buffer
// is 16 B (single-word f32 + std140 tail padding) so writeBuffer stays
// a single 4 B copy on the host side.
struct MeshCullParams {
  margin_m : f32,
  _pad0    : f32,
  _pad1    : f32,
  _pad2    : f32,
};
@group(1) @binding(0) var<uniform> mesh_cull_params : MeshCullParams;

@vertex
fn vs_main(@location(0) position : vec3<f32>) -> @builtin(position) vec4<f32> {
    // Same view*proj chain the surfel_cull shader uses for z_ndc — critical
    // so the depths are directly comparable without any rescaling. The
    // margin is applied in VIEW space (post-view, pre-proj) so it lives in
    // metric world units regardless of the projection's zNear/zFar.
    //
    // Convention in this codebase (see camera.ts::get_projection_matrix):
    // the projection matrix has p[14]=1, so w_clip = +z_view — meaning
    // camera looks down +Z in view space and objects farther from the
    // camera have LARGER z_view (COLMAP / CUDA convention, NOT OpenGL).
    // "Farther from camera" therefore means MORE POSITIVE z — ADD the
    // margin.
    let pos_view = camera.view * vec4<f32>(position, 1.0);
    let pos_view_shifted = vec4<f32>(pos_view.x, pos_view.y,
                                       pos_view.z + mesh_cull_params.margin_m,
                                       pos_view.w);
    return camera.proj * pos_view_shifted;
}
`,Hl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
// top of the finished splat render. Toggled by \`?mesh_debug=1\` URL param.
// Uses the exact same camera.proj·camera.view chain that mesh_depth uses,
// so the on-screen silhouette IS the depth silhouette that surfel_cull
// samples against — anything culled by the mesh should sit under the
// green overlay. If the green doesn't visually cover what it should, we
// have a geometry / world-space problem, not a sampling problem.

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

@group(0) @binding(0) var<uniform> camera : CameraUniforms;

@vertex
fn vs_main(@location(0) position : vec3<f32>) -> @builtin(position) vec4<f32> {
    return camera.proj * camera.view * vec4<f32>(position, 1.0);
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
    return vec4<f32>(0.0, 1.0, 0.0, 0.5);
}
`,Yl=`// shader implementing gpu radix sort.

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
`,Zl=`// shader implementing gpu radix sort.

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
`,Xl=`// ============================================================================
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
}`,ni=32,ms=1,bs=2,qr=4,vs=8,Ql=0,It=new ArrayBuffer(ni),lt={canvas_size:new Uint32Array(It,0,2),accel_flags:new Uint32Array(It,8,1),feature_mode:new Uint32Array(It,12,1),gaussian_scaling:new Float32Array(It,16,1),sh_bias:new Float32Array(It,20,1),color_K:new Uint32Array(It,24,1),walltime:new Float32Array(It,28,1)};function Jl(i){lt.canvas_size[0]=i.width>>>0,lt.canvas_size[1]=i.height>>>0,lt.accel_flags[0]=(i.accel_flags??ms|bs)>>>0,lt.feature_mode[0]=(i.feature_mode??Ql)>>>0,lt.gaussian_scaling[0]=i.gaussian_scaling??1,lt.sh_bias[0]=i.sh_bias??.5,lt.color_K[0]=(i.color_K??0)>>>0,lt.walltime[0]=i.walltime??0}function si(i,l){i.queue.writeBuffer(l,0,It)}function On(i,l,f){f&&i&&l&&si(i,l)}function zn(i,l,f,S,w=!0){lt.canvas_size[0]=i>>>0,lt.canvas_size[1]=l>>>0,On(f??null,S??null,w)}function $r(i,l,f,S=!0){lt.gaussian_scaling[0]=i,On(l??null,f??null,S)}function Wr(i,l,f,S=!0){lt.sh_bias[0]=i,On(l??null,f??null,S)}function ri(i,l,f,S=!0){let w=lt.accel_flags[0];i.oac!==void 0&&(w=i.oac?w|ms:w&~ms),i.spr!==void 0&&(w=i.spr?w|bs:w&~bs),i.bfc!==void 0&&(w=i.bfc?w|qr:w&~qr),i.meshCull!==void 0&&(w=i.meshCull?w|vs:w&~vs),lt.accel_flags[0]=w>>>0,On(l??null,f??null,S)}const ec=256,tc=ni,nc=8,sc=80,rc=12,ys=8,St=1<<ys,jt=256,Gn=32/ys,ic=0,jr=Gn&1;function Kr(i,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function oc(i,l){const f=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=i.createPipelineLayout({bindGroupLayouts:[f]}),w=k=>i.createComputePipeline({layout:S,compute:{module:l,entryPoint:k,constants:{WG_SIZE:jt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function ac(i,l,f){const S=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=i.createPipelineLayout({bindGroupLayouts:[S]}),M=i.createPipelineLayout({bindGroupLayouts:[w]}),F=[];for(let T=0;T<Gn;T++){const A={PASS_ID:T+ic,RS_RADIX_LOG2:ys,RS_RADIX_SIZE:St};F.push({localHistogram:i.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:i.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:A}})})}return{passes:F,localHistogramBindGroupLayout:S,scatterBindGroupLayout:w}}function lc(i){const l=i.createShaderModule({label:"local histogram",code:Zl}),f=i.createShaderModule({label:"scatter",code:Yl}),S=i.createShaderModule({label:"blelloch prefix",code:Xl}),w=oc(i,S),k=ac(i,l,f);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function cc(i){const l=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),S=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=i.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(k,0,new ArrayBuffer(48));const M=i.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),F=M.createView({dimension:"2d"}),T=i.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),A=i.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),V=A.createView({dimension:"2d"}),G=i.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Y={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:S,rectsBuffer:w,texParamsBuffer:k,meta:Y,rvqCodebookTexture:M,rvqCodebookView:F,rvqCodebookSampler:T,rvqPackedIndicesTexture:A,rvqPackedIndicesView:V,rvqSurfelOffsetsBuffer:G}}class uc{constructor(l,f,S,w,k,M=null,F=null){j(this,"device");j(this,"pc");j(this,"presentationFormat");j(this,"camera_buffer");j(this,"render_settings_buffer");j(this,"draw_indirect_buffer");j(this,"splat_2d_buffer");j(this,"querySet");j(this,"resolveBuffer");j(this,"resultBuffer");j(this,"queriesPerFrame",nc);j(this,"queryCapacityFrames",200);j(this,"sort_prefixBindGroup");j(this,"sort_pipelines");j(this,"sort_localHistogramBindGroups");j(this,"sort_scatterBindGroups");j(this,"lastFrame",0);j(this,"frameCount",0);j(this,"preprocessPipeline");j(this,"cullPipeline");j(this,"renderPipeline");j(this,"indirectPipeline");j(this,"sort_info_buffer");j(this,"sort_ping_pong");j(this,"crsBg");j(this,"gsBg");j(this,"cullBg2");j(this,"preprocessBg1");j(this,"renderSplatsBindGroup");j(this,"renderSettingsBindGroup");j(this,"atlasBindGroup");j(this,"indirectBindGroup");j(this,"sh_solvers_buffer");j(this,"mesh");j(this,"meshDepthPipeline",null);j(this,"meshDepthCameraBindGroup",null);j(this,"meshDepthMarginBindGroup",null);j(this,"meshMarginBuffer",null);j(this,"meshDepthTexture",null);j(this,"meshDepthView",null);j(this,"meshCullBindGroupLayout");j(this,"meshCullBindGroup");j(this,"meshCullWidth",0);j(this,"meshCullHeight",0);j(this,"meshStubTexture");j(this,"meshStubView");j(this,"meshOverlayPipeline",null);j(this,"meshOverlayEnabled",!1);j(this,"bgColor",[0,0,0,0]);j(this,"showPerfDialogNext",!1);j(this,"requestReorderNextFrame",!1);j(this,"reorderInFlight",!1);j(this,"downloadOnceNextRead",!1);j(this,"downloadOnceFileName","fps_metrics");j(this,"allFrameTimes",[]);j(this,"lastStageBreakdownMs",null);j(this,"timeQueryEnabled");j(this,"atlas");this.mesh=F;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&ut("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=S,this.camera_buffer=w,this.atlas=M??cc(f),f.addEventListener("uncapturederror",X=>{console.error("A WebGPU error was not captured:",X.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+jt-1)/jt)+1)*jt,V=Math.ceil(A/jt);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const G=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=lc(f);const Y=[Kr(A,f),Kr(A,f)],z=f.createBuffer({label:"workgroup histograms",size:V*St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=f.createBuffer({label:"workgroup prefixes",size:V*St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"digit base",size:St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=Math.ceil(V/jt),he=Math.ceil(N/jt),U=f.createBuffer({label:"prefix l0 sums",size:N*St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=f.createBuffer({label:"prefix l0 offsets",size:N*St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=f.createBuffer({label:"prefix l1 sums",size:he*St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),de=f.createBuffer({label:"prefix l1 offsets",size:he*St*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:K}},{binding:3,resource:{buffer:U}},{binding:4,resource:{buffer:Z}},{binding:5,resource:{buffer:W}},{binding:6,resource:{buffer:de}},{binding:7,resource:{buffer:H}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y[0].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y[1].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:Y[0].sort_depths_buffer}},{binding:3,resource:{buffer:Y[1].sort_depths_buffer}},{binding:4,resource:{buffer:Y[0].sort_indices_buffer}},{binding:5,resource:{buffer:Y[1].sort_indices_buffer}},{binding:6,resource:{buffer:K}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:Y[1].sort_depths_buffer}},{binding:3,resource:{buffer:Y[0].sort_depths_buffer}},{binding:4,resource:{buffer:Y[1].sort_indices_buffer}},{binding:5,resource:{buffer:Y[0].sort_indices_buffer}},{binding:6,resource:{buffer:K}}]})],this.sort_info_buffer=G,this.sort_ping_pong=Y;const $=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),be=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),se=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),_e=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:$,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:be,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:_e,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const ue=this.device.createShaderModule({code:Wl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ue,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const xe=this.device.createShaderModule({code:jl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,be,se,this.meshCullBindGroupLayout]}),compute:{module:xe,entryPoint:"surfel_cull"}}),this.mesh!==null){const X=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:X,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ne=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([.03,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ne,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const fe=this.device.createShaderModule({code:Kl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[X,ne]}),vertex:{module:fe,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Ae=this.device.createShaderModule({code:ql});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,_e]}),compute:{module:Ae,entryPoint:"preprocess"}});const Ie=this.device.createShaderModule({code:$l});Ie.getCompilationInfo().then(X=>{X.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),X.messages.forEach(ne=>{(ne.type==="error"?console.error:ne.type==="warning"?console.warn:console.log)(`${ne.type} (line ${ne.lineNum}:${ne.linePos}): ${ne.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ie=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ae=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),me=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Q=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ie,ae,me]}),vertex:{module:Ie,entryPoint:"vs_main"},fragment:{module:Ie,entryPoint:"fs_main",constants:{BETA_KERNEL:Q},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(X=>{X?console.error("[render_2dgs] pipeline create validation error:",X.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ie,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ae,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[jr].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:me,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){ri({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}ensureMeshDepthTexture(l,f){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&ei(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),S=f*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[jr].sort_indices_buffer,0,w,0,S),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(l,f,S=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(lt.accel_flags[0]&vs)!==0){const T=lt.canvas_size[0],A=lt.canvas_size[1];this.ensureMeshDepthTexture(T,A);const V={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(V);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const A=l.beginComputePass(T);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.meshCullBindGroup);const V=Math.ceil(this.pc.num_points/ec);A.dispatchWorkgroups(V,1,1),A.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const A=l.beginComputePass(T);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let T=0;T<Gn;T++){const A=T&1,V=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[A],Y=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${T}`};M&&T==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const K=l.beginComputePass(z);K.setPipeline(V.localHistogram),K.setBindGroup(0,G),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,St,1),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${T}`};M&&T==Gn-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const K=l.beginComputePass(z);K.setPipeline(V.scatterElements),K.setBindGroup(0,Y),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}{const T={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const A=l.beginRenderPass(T);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const V=this.device.createShaderModule({code:Hl}),G=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[G]}),vertex:{module:V,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:V,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},A=l.beginRenderPass(T);A.setPipeline(this.meshOverlayPipeline),A.setBindGroup(0,this.meshDepthCameraBindGroup),A.setVertexBuffer(0,this.mesh.vertexBuffer),A.setIndexBuffer(this.mesh.indexBuffer,"uint32"),A.drawIndexed(this.mesh.numIndices),A.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),F=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let A=0;for(let he=0;he<M;he++){const U=(F+he)%this.queryCapacityFrames,Z=U*this.queriesPerFrame;let W=!0;for(let de=0;de<w.length;de++){const[$,be,se]=w[de];if(k[Z+se]===0n||k[Z+be]===0n||k[Z+be]<k[Z+se]){W=!1;break}}if(!W){!f&&U%60===0&&console.debug("[timestamp] frame slot",U,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let de=0;de<w.length;de++){const[$,be,se]=w[de],_e=Number(k[Z+se]),ue=Number(k[Z+be]);T[de].push((ue-_e)/1e6)}}if(A===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const V=[];let G=0,Y=0,z=0;for(let he=0;he<w.length;he++){const U=w[he][0],Z=T[he];let W=0;if(U==="Total"){const de=this.allFrameTimes;W=de.reduce((se,_e)=>se+_e,0)/de.length;const $=[...de].sort((se,_e)=>se-_e);G=$[Math.floor($.length*.99)]||0;const be=de.reduce((se,_e)=>se+Math.pow(_e-W,2),0)/de.length;Y=Math.sqrt(be),z=W}else W=Z.reduce((de,$)=>de+$,0)/Z.length;V.push([U,W])}this.lastFrame+=this.frameCount,this.frameCount=0;const K=Object.fromEntries(V);this.lastStageBreakdownMs={cull:K.Culling??0,preprocess:K.Preprocess??0,sort:K.Sort??0,render:K.Render??0,total:K.Total??0};const N=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([he,U])=>`${he}: ${U.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${Y.toFixed(3)}ms
Total AVG: ${z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(N),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const he=`Stage,ms
`,U=V.map(([de,$])=>`${de},${$.toFixed(3)}`).join(`
`),Z="data:text/csv;charset=utf-8,"+encodeURIComponent(he+U),W=document.createElement("a");W.href=Z,W.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(W),W.click(),W.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(N)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:tc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,S=l?l.height:1;Jl({width:f,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),si(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:on(this.pc.num_points*sc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:on(this.pc.num_points*rc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,S=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function dc(i,l){return 2*Math.atan(l/(2*i))}function pc(i,l,f,S){const w=Math.tan(S/2),k=Math.tan(f/2),M=w*i,F=-M,T=k*i,A=-T,V=it.create();return V[0]=2*i/(T-A),V[5]=-2*i/(M-F),V[2]=(T+A)/(T-A),V[6]=(M+F)/(M-F),V[14]=1,V[10]=l/(l-i),V[11]=-(l*i)/(l-i),it.transpose(V,V),V}async function hc(i){ut(`loading scene camera file... : ${i}`);const f=await(await fetch(i)).json();return ut(`loaded cameras count: ${f.length}`),f.map(S=>{const w=I.clone(S.position),k=mt.create(...S.rotation.flat()),M=k[0],F=k[4],T=k[8],A=k[1],V=k[5],G=k[9],Y=k[2],z=k[6],K=k[10];M*(V*K-G*z)-F*(A*K-G*Y)+T*(A*z-V*Y)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const N=it.fromMat3(k);return{position:w,rotation:N,img_name:S.img_name,id:S.id}})}const fc=4*2,_c=4*16,ii=4*_c+2*fc;function mc(i){return i.createBuffer({label:"camera uniform",size:ii,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Wt=new Float32Array(ii/Float32Array.BYTES_PER_ELEMENT),Rn=class Rn{constructor(l,f){j(this,"uniform_buffer");j(this,"position",I.create());j(this,"rotation",it.create());j(this,"fovY",45/180*Math.PI);j(this,"fovX");j(this,"focal",Vr.create());j(this,"viewport",Vr.create());j(this,"view_matrix",it.identity());j(this,"view_inv_matrix",it.identity());j(this,"proj_matrix",it.identity());j(this,"proj_inv_matrix",it.identity());j(this,"_negPos",I.create());j(this,"look",I.create(0,0,1));j(this,"up",I.create(0,1,0));j(this,"right",I.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=mc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=dc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=pc(.01,100,this.fovX,this.fovY),it.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],it.copy(this.rotation,this.view_matrix),it.translate(this.view_matrix,this._negPos,this.view_matrix),it.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(Rn.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;Wt.set(this.view_matrix,l),l+=16,Wt.set(this.view_inv_matrix,l),l+=16,Wt.set(this.proj_matrix,l),l+=16,Wt.set(this.proj_inv_matrix,l),l+=16,Wt.set(this.viewport,l),l+=2,Wt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Wt)}set_preset(l){I.copy(l.position,this.position),it.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};j(Rn,"Z_AXIS",I.create(0,0,1));let gs=Rn;const bc=I.create(1,0,0),vc=I.create(0,1,0);function gc(i,l){const f=i[0],S=i[4],w=i[8],k=i[1],M=i[5],F=i[9],T=i[2],A=i[6],V=i[10],G=f+M+V;let Y,z,K,H;if(G>0){const N=.5/Math.sqrt(G+1);Y=.25/N,z=(A-F)*N,K=(w-T)*N,H=(k-S)*N}else if(f>M&&f>V){const N=2*Math.sqrt(1+f-M-V);Y=(A-F)/N,z=.25*N,K=(S+k)/N,H=(w+T)/N}else if(M>V){const N=2*Math.sqrt(1+M-f-V);Y=(w-T)/N,z=(S+k)/N,K=.25*N,H=(F+A)/N}else{const N=2*Math.sqrt(1+V-f-M);Y=(k-S)/N,z=(w+T)/N,K=(F+A)/N,H=.25*N}return l[0]=z,l[1]=K,l[2]=H,l[3]=Y,l}class wc{constructor(l){j(this,"element");j(this,"enabled",!0);j(this,"center",I.create(0,0,0));j(this,"up",I.create(0,1,0));j(this,"rotation",[0,0]);j(this,"shift",[0,0]);j(this,"scroll",0);j(this,"speed",.1);j(this,"sensitivity",.08);j(this,"leftPressed",!1);j(this,"rightPressed",!1);j(this,"leftDragPans",!1);j(this,"lastX",0);j(this,"lastY",0);j(this,"touches",new Map);j(this,"lastTouchCenter",null);j(this,"lastPinchDistance",null);j(this,"lastTwoFingerAngle",null);j(this,"lastTouchCount",0);j(this,"roll",0);j(this,"_dir",I.create());j(this,"_right",I.create());j(this,"_upCam",I.create());j(this,"_scratch",I.create());j(this,"_qY",at.create());j(this,"_qX",at.create());j(this,"_qRot",at.create());j(this,"_qLocal",at.create());j(this,"_qWorldToCam",at.create());j(this,"_scratchMat3",mt.create());j(this,"bboxMin",null);j(this,"bboxMax",null);j(this,"anchor",I.create(0,0,0));j(this,"downCallback",l=>{var f,S,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.setPointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});j(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,S=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=S)});j(this,"upCallback",l=>{var f,S,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(S=(f=l.target)==null?void 0:f.releasePointerCapture)==null||S.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});j(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;I.set(f[2],f[6],f[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(f[0],f[1],f[2]);const S=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,k=(l[2]+f[2])*.5;I.set(S,w,k,this.center),I.set(S,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const F=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],A=this.bboxMax[M]-this.camera.position[M];if(Math.abs(F)>1e-8){const V=T/F,G=A/F;S=Math.max(S,Math.min(V,G)),w=Math.min(w,Math.max(V,G))}else if(T>0||A<0){k=!0;break}}!k&&S<=w&&w>0&&(f=(Math.max(S,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const S=I.dot(this._scratch,this._dir);f=S>.001?S:I.length(this._scratch)}f=Math.max(.1,f),I.scale(this._dir,f,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const S=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),S=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,k=f[1].x-f[0].x,M=f[1].y-f[0].y,F=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=S-this.lastTouchCenter[0],V=w-this.lastTouchCenter[1],G=Math.hypot(A,V),Y=Math.abs(F-this.lastPinchDistance);let z=T-this.lastTwoFingerAngle;z>Math.PI&&(z-=2*Math.PI),z<-Math.PI&&(z+=2*Math.PI),G>.5&&(this.shift[1]-=A,this.shift[0]+=V),Y>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(F/this.lastPinchDistance)*10),Math.abs(z)>.0087&&(this.roll+=-z)}this.lastTouchCenter=[S,w],this.lastPinchDistance=F,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const H=f.rotation;this.up[0]=H[1],this.up[1]=H[5],this.up[2]=H[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const H=f.rotation;I.set(H[2],H[6],H[10],this._scratch),I.normalize(this._scratch,this._scratch),at.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,S=!0}I.subtract(f.position,this.center,this._dir);let w=I.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);I.scale(this._dir,k/w,this._dir),w=k;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const F=I.create(M[1],M[5],M[9]);I.normalize(F,F),I.length(F)<1e-6&&I.set(0,1,0,F);const T=l*this.speed*.1*w,A=this.shift[1]*T,V=-this.shift[0]*T;I.scale(this._right,A,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position),I.scale(F,V,this._scratch),I.add(this.center,this._scratch,this.center),I.add(f.position,this._scratch,f.position);const G=this.rotation[0]*l*this.sensitivity,Y=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Y)>1e-5||S){const H=f.rotation;gc(H,this._qWorldToCam),at.fromAxisAngle(bc,-Y,this._qX),at.fromAxisAngle(vc,-G,this._qY),at.multiply(this._qX,this._qY,this._qLocal),at.normalize(this._qLocal,this._qLocal),at.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),at.normalize(this._qWorldToCam,this._qWorldToCam),mt.fromQuat(this._qWorldToCam,this._scratchMat3),it.fromMat3(this._scratchMat3,f.rotation);const N=f.rotation,he=N[2],U=N[6],Z=N[10];f.position[0]=this.center[0]-he*w,f.position[1]=this.center[1]-U*w,f.position[2]=this.center[2]-Z*w,this.up[0]=N[1],this.up[1]=N[5],this.up[2]=N[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,f.position);f.update_buffer();const K=Math.pow(.8,l*60);this.rotation[0]*=K,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=K,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=K,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=K,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=K,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function oi(i){const l=I.create();for(const f of i)I.add(l,f,l);return I.scale(l,1/Math.max(i.length,1),l)}function ai(i,l){const f=mt.create();mt.inverse(i,f);const S=I.create();return S[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],S[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],S[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],S}function xc(i){const l=i.slice(),f=[1,0,0,0,1,0,0,0,1],S=(T,A)=>l[T*3+A],w=(T,A,V)=>{l[T*3+A]=V},k=(T,A)=>f[T*3+A],M=(T,A,V)=>{f[T*3+A]=V};for(let T=0;T<30;T++){let A=0,V=1,G=Math.abs(S(0,1));if(Math.abs(S(0,2))>G&&(A=0,V=2,G=Math.abs(S(0,2))),Math.abs(S(1,2))>G&&(A=1,V=2,G=Math.abs(S(1,2))),G<1e-12)break;const Y=S(A,A),z=S(V,V),K=S(A,V);let H;Math.abs(Y-z)<1e-30?H=Math.PI/4*Math.sign(K):H=.5*Math.atan2(2*K,Y-z);const N=Math.cos(H),he=Math.sin(H);for(let U=0;U<3;U++){const Z=S(U,A),W=S(U,V);w(U,A,N*Z+he*W),w(U,V,-he*Z+N*W)}for(let U=0;U<3;U++){const Z=S(A,U),W=S(V,U);w(A,U,N*Z+he*W),w(V,U,-he*Z+N*W)}for(let U=0;U<3;U++){const Z=k(U,A),W=k(U,V);M(U,A,N*Z+he*W),M(U,V,-he*Z+N*W)}}const F=[];for(let T=0;T<3;T++)F.push({val:S(T,T),vec:I.create(k(0,T),k(1,T),k(2,T))});return F.sort((T,A)=>A.val-T.val),{vals:[F[0].val,F[1].val,F[2].val],vecs:[F[0].vec,F[1].vec,F[2].vec]}}function yc(i,l){const f=oi(i);let S=0,w=0,k=0,M=0,F=0,T=0;for(const K of i){const H=K[0]-f[0],N=K[1]-f[1],he=K[2]-f[2];S+=H*H,w+=H*N,k+=H*he,M+=N*N,F+=N*he,T+=he*he}const A=[S,w,k,w,M,F,k,F,T],{vecs:V}=xc(A);let G=V[0],Y=V[1],z=V[2];return I.dot(z,l)<0&&(I.scale(z,-1,z),I.scale(Y,-1,Y)),{centroid:f,normal:z,u:G,v:Y}}function Pc(i){let l=0,f=0,S=0,w=0,k=0,M=0,F=0,T=0,A=0;for(const[N,he]of i){const U=-2*N,Z=-2*he,W=1,de=-(N*N+he*he);l+=U*U,f+=U*Z,S+=U*W,w+=Z*Z,k+=Z*W,M+=W*W,F+=U*de,T+=Z*de,A+=W*de}const V=mt.create(l,f,S,f,w,k,S,k,M),G=ai(V,I.create(F,T,A)),Y=G[0],z=G[1],K=G[2],H=Y*Y+z*z-K;return{center:[Y,z],radius:Math.sqrt(Math.max(H,1e-12))}}function Sc(i,l){let f=0,S=0,w=0,k=0,M=0,F=0,T=0,A=0,V=0;for(let Y=0;Y<i.length;Y++){const z=i[Y],K=I.normalize(l[Y],I.create()),H=1-K[0]*K[0],N=-K[0]*K[1],he=-K[0]*K[2],U=1-K[1]*K[1],Z=-K[1]*K[2],W=1-K[2]*K[2];f+=H,S+=N,w+=he,k+=U,M+=Z,F+=W,T+=H*z[0]+N*z[1]+he*z[2],A+=N*z[0]+U*z[1]+Z*z[2],V+=he*z[0]+Z*z[1]+W*z[2]}const G=mt.create(f,S,w,S,k,M,w,M,F);return ai(G,I.create(T,A,V))}function li(i,l={}){if(i.length===0)return null;const f=l.tiltDownDeg??8,S=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,M=i.map(se=>I.clone(se.position)),F=i.map(se=>{const _e=se.rotation;return I.create(_e[8],_e[9],_e[10])}),T=i.map(se=>{const _e=se.rotation;return I.create(_e[4],_e[5],_e[6])}),A=oi(T),V=I.normalize(I.scale(A,-1,I.create())),{centroid:G,normal:Y,u:z,v:K}=yc(M,V),H=M.map(se=>{const _e=I.sub(se,G,I.create());return[I.dot(_e,z),I.dot(_e,K)]}),{center:N,radius:he}=Pc(H),U=he*S,Z=I.add(G,I.add(I.scale(z,N[0],I.create()),I.scale(K,N[1],I.create()),I.create()),I.create()),W=Sc(M,F),de=U*Math.tan(f*Math.PI/180),$=I.sub(W,I.scale(Y,de,I.create()),I.create());let be=0;if(w){const se=I.sub(M[0],Z,I.create());be=Math.atan2(I.dot(se,K),I.dot(se,z))/(2*Math.PI)%1,be<0&&(be+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${U.toFixed(2)}, tilt=${f}°, normal=[${Y[0].toFixed(2)}, ${Y[1].toFixed(2)}, ${Y[2].toFixed(2)}], startPhase=${be.toFixed(3)}`),{center:Z,radius:U,normal:Y,u:z,v:K,lookAt:$,startPhase:be,direction:k}}function ci(i,l){const f=(i.startPhase+l*i.direction)*2*Math.PI,S=Math.cos(f),w=Math.sin(f),k=I.add(i.center,I.add(I.scale(i.u,i.radius*S,I.create()),I.scale(i.v,i.radius*w,I.create()),I.create()),I.create()),M=I.normalize(I.sub(i.lookAt,k,I.create())),F=I.cross(M,i.normal,I.create());I.length(F)<1e-6&&I.copy(i.u,F),I.normalize(F,F);const T=I.cross(M,F,I.create());I.normalize(T,T);const A=it.create();return A[0]=F[0],A[1]=T[0],A[2]=M[0],A[3]=0,A[4]=F[1],A[5]=T[1],A[6]=M[1],A[7]=0,A[8]=F[2],A[9]=T[2],A[10]=M[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:k,rotation:A,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Cc(i,l={}){const f=li(i,l);if(!f)return[];const S=l.numViews??120;return Array.from({length:S},(w,k)=>({...ci(f,k/S),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Ec(i){const l=new Uint8Array(i),f=Math.min(l.byteLength,65536),S=new TextDecoder("ascii").decode(l.subarray(0,f)),w=S.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=S.slice(0,w).split(/\r?\n/).map(ne=>ne.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const F=M.find(ne=>ne.startsWith("format"));if(!F||!F.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${F??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},A=[];let V=null;for(const ne of M)if(ne.startsWith("element ")){const[,fe,Be]=ne.split(/\s+/);V={name:fe,count:parseInt(Be,10),props:[],bytesPerRecord:0,hasList:!1},A.push(V)}else if(ne.startsWith("property ")&&V){const fe=ne.split(/\s+/);if(fe[1]==="list"){const Be=fe[2],le=fe[3],ye=fe[4];V.props.push({name:ye,type:le,isList:!0,listCountType:Be,listItemType:le}),V.hasList=!0}else{const Be=fe[1],le=fe[2];if(V.props.push({name:le,type:Be,isList:!1}),T[Be]===void 0)throw new Error(`mesh PLY: unsupported prop type '${Be}'`);V.bytesPerRecord+=T[Be]}}const G=A.find(ne=>ne.name==="vertex"),Y=A.find(ne=>ne.name==="face"||ne.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!Y)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const z=G.props.find(ne=>ne.name==="x"),K=G.props.find(ne=>ne.name==="y"),H=G.props.find(ne=>ne.name==="z");if(!z||!K||!H)throw new Error("mesh PLY: vertex must have x/y/z");let N=0;const he=new Map;for(const ne of G.props)he.set(ne.name,{off:N,type:ne.type}),N+=T[ne.type];const U=he.get("x"),Z=he.get("y"),W=he.get("z");if(U.type!==Z.type||U.type!==W.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${U.type}/${Z.type}/${W.type})`);const de=U.type,$=de==="double"||de==="float64";if(!$&&de!=="float"&&de!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${de}')`);const be=new Float32Array(G.count*3),se=new DataView(i),_e=k,ue=G.bytesPerRecord;for(let ne=0;ne<G.count;ne++){const fe=_e+ne*ue;$?(be[ne*3+0]=se.getFloat64(fe+U.off,!0),be[ne*3+1]=se.getFloat64(fe+Z.off,!0),be[ne*3+2]=se.getFloat64(fe+W.off,!0)):(be[ne*3+0]=se.getFloat32(fe+U.off,!0),be[ne*3+1]=se.getFloat32(fe+Z.off,!0),be[ne*3+2]=se.getFloat32(fe+W.off,!0))}const xe=_e+G.count*ue,Ae=Y.props.find(ne=>ne.isList);if(!Ae)throw new Error("mesh PLY: face element has no list property");const Ie=T[Ae.listCountType],ie=T[Ae.listItemType];if(Ie!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ie}`);let ae=xe,me=0;for(let ne=0;ne<Y.count;ne++){const fe=se.getUint8(ae);fe===3&&me++,ae+=1+fe*ie}const Q=new Uint32Array(me*3);ae=xe;let X=0;for(let ne=0;ne<Y.count;ne++){const fe=se.getUint8(ae);if(ae+=1,fe===3)for(let Be=0;Be<3;Be++){const le=ae+Be*ie;let ye;if(ie===4)ye=se.getUint32(le,!0);else if(ie===2)ye=se.getUint16(le,!0);else if(ie===1)ye=se.getUint8(le);else throw new Error(`mesh PLY: unsupported face index size ${ie}`);Q[X++]=ye}ae+=fe*ie}return{positions:be,indices:Q}}function kc(i){const l=new DataView(i);if(i.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),S=l.getUint32(4,!0),w=f*12,k=S*4;if(i.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${i.byteLength} B)`);const M=new Float32Array(i.slice(8,8+w)),F=new Uint32Array(i.slice(8+w,8+w+k));return{positions:M,indices:F}}function ui(i,l){return(l??"").toLowerCase().endsWith(".ply")?Ec(i):kc(i)}function di(i,l){const f=i.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(f,0,l.positions);const S=i.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return i.queue.writeBuffer(S,0,l.indices),{vertexBuffer:f,indexBuffer:S,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function Mc(i,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const S=await f.arrayBuffer(),w=ui(S,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),di(i,w)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Bc(i,l,f){try{const S=ui(l,f);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),di(i,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const pi="BITYMI01",Tc=0,Dc=1,Ac=2,Lc=3,Ic=4,zc=5,Uc=6;function Un(i){const l=(i&32768)>>15,f=(i&31744)>>10,S=i&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(S/1024):f===31?S?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+S/1024)}function Hr(i,l,f,S,w,k){const M=(i-f.width*.5)/S.focal[0],F=-((l-f.height*.5)/S.focal[1]),T=S.rotation,A=T[0],V=T[4],G=T[8],Y=T[1],z=T[5],K=T[9],H=T[2],N=T[6],he=T[10];let U=M*A+F*Y+H,Z=M*V+F*z+N,W=M*G+F*K+he;const de=Math.hypot(U,Z,W)||1;U/=de,Z/=de,W/=de;const $=S.position[0],be=S.position[1],se=S.position[2],_e=k*.005,ue=_e*_e,xe=new Uint32Array(w.buffer,w.byteOffset,w.length),Ae=w.length/8;let Ie=1/0,ie=0,ae=0,me=0,Q=-1;for(let X=0;X<Ae;X++){const ne=X*8,fe=w[ne+0]-$,Be=w[ne+1]-be,le=w[ne+2]-se,ye=fe*U+Be*Z+le*W;if(ye<=0)continue;const Ce=fe-ye*U,Ee=Be-ye*Z,Re=le-ye*W;if(Ce*Ce+Ee*Ee+Re*Re>=ue||!(xe[ne+7]>>>16&1))continue;const g=xe[ne+5],o=xe[ne+6],h=Un(g&65535),u=Un(g>>>16&65535),b=Un(o&65535),y=Un(o>>>16&65535),C=Math.hypot(h,u,b,y)||1,E=h/C,r=u/C,m=b/C,d=y/C,p=2*(r*d+E*m),a=2*(m*d-E*r),_=1-2*(r*r+m*m),x=U*p+Z*a+W*_;let v;Math.abs(x)>1e-6?(v=(fe*p+Be*a+le*_)/x,(!isFinite(v)||v<=0)&&(v=ye)):v=ye,v<Ie&&(Ie=v,ie=$+v*U,ae=be+v*Z,me=se+v*W,Q=X)}return Q<0?null:[ie,ae,me]}function hi(i){const l=new Uint8Array(i),f=new TextDecoder().decode(l.subarray(0,8));if(f!==pi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const S=new DataView(i),w=S.getUint32(8,!0),k=12,M=20;let F=null,T=null,A=null,V=null;for(let G=0;G<w;G++){const Y=k+G*M,z=S.getUint32(Y+0,!0),K=Number(S.getBigUint64(Y+4,!0)),H=Number(S.getBigUint64(Y+12,!0)),N=l.slice(K,K+H).buffer;z===Tc||z===Dc||z===zc?F=N:z===Ac?T=N:z===Lc||z===Ic?A=N:z===Uc&&(V=N)}if(F===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:F,camerasBuffer:T,atlasBuffer:A,meshBuffer:V}}async function Gc(i,l){var M;const f=await fetch(i);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const S=(()=>{const F=f.headers.get("content-length");return F&&parseInt(F,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let k;if(!w)k=await f.arrayBuffer(),l&&l(k.byteLength,S,0);else{const F=[];let T=0,A=performance.now(),V=0;for(;;){const{done:z,value:K}=await w.read();if(z)break;F.push(K),T+=K.byteLength;const H=performance.now();if(H-A>=150&&l){const N=(T-V)/((H-A)/1e3);l(T,S,N),A=H,V=T}}const G=new Uint8Array(T);let Y=0;for(const z of F)G.set(z,Y),Y+=z.byteLength;k=G.buffer,l&&l(T,S,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===pi?{bundle:hi(k),rawPly:null}:{bundle:null,rawPly:k}}function Rc(i){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=i,f.style.display="none",f.onchange=()=>{var S;return l(((S=f.files)==null?void 0:S[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Vc(i,l,f){const S=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const V=await Rc(".ply,.bitymi");if(V)if(S&&(S.style.display="none"),V.name.toLowerCase().endsWith(".bitymi")){const G=await V.arrayBuffer(),{pcBuffer:Y}=hi(G),z=new File([Y],V.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),K=await fs(z,i);l(K)}else{const G=await fs(V,i);l(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),F=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),A=M.get("mesh_url");F&&(S&&(S.style.display="none"),f(F,T,A))}async function Oc(i,l,f,S){const w=new gs(i,f),k=new wc(w);let M=!1;i.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const F="rgba8unorm";l.configure({device:f,format:F,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const A=()=>{w.on_update_canvas(),T!==null&&zn(i.width,i.height,f,T.render_settings_buffer)};new ResizeObserver(()=>{const ie=Math.max(.25,ue.render_scale),ae=Math.max(1,Math.ceil(ie*i.clientWidth)),me=Math.max(1,Math.ceil(ie*i.clientHeight));i.width===ae&&i.height===me||(i.width=ae,i.height=me,A())}).observe(i);let G=0,Y=0;const z=()=>{(i.width!==G||i.height!==Y)&&(G=i.width,Y=i.height,A())},K=new URLSearchParams(window.location.search);let N=K.get("animation")==="1";k.enabled=!N;const he=K.get("camera_url"),U=K.get("mesh_cull"),Z=U==="1"||U==="true",W=K.get("mesh_margin"),de=W!==null?Number(W):NaN,$=Number.isFinite(de)?de:.03,be=K.get("mesh_debug"),se=be==="1"||be==="true",_e=Math.max(1,window.devicePixelRatio||1),ue={gaussian_scaling:1,sh_bias:.5,animate:N,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:Z,mesh_margin:$,mesh_debug:se,render_scale:1},xe=new Nl.Pane({title:"Config",expanded:!0});xe.addInput(ue,"animate",{label:"Animate"}).on("change",ie=>{const ae=N;N=ie.value,k.enabled=!ie.value,!ae&&N&&Ae.value&&Ae.value.onAnimateStart(),ae&&!N&&Ae.value&&Ae.value.onAnimateStop()}),xe.addInput(ue,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Ae={value:null};Vc(f,ie=>Ie(ie,[],null,null),async(ie,ae,me)=>{let Q=ae??he,X,ne=null,fe=null;const Be=ie.toLowerCase();if(Be.endsWith(".bitymi")||Be.includes(".bitymi?")){xs("downloading bundle ...");try{const{bundle:ye}=await Gc(ie,(Ee,Re,B)=>{const R=Ee/1048576,g=Re?Re/(1024*1024):void 0,o=B/(1024*1024),h=Re?Math.min(99,Math.floor(Ee/Re*100)):void 0,u=g?`total ${g.toFixed(1)} MB`:"total -- MB",b=g&&h!==void 0?`${R.toFixed(1)} MB downloaded (${h}%)`:`${R.toFixed(1)} MB downloaded`,y=`${o.toFixed(2)} MB/s`;Ct(`downloading bundle ...
${u}, ${b}
${y}`)});if(!ye)throw new Error("Expected a .bitymi bundle");Ct("parsing PLY ...");const Ce=new File([ye.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(X=await fs(Ce,f),!Q&&ye.camerasBuffer&&(Q=URL.createObjectURL(new Blob([ye.camerasBuffer],{type:"application/json"}))),ye.atlasBuffer){const Ee=ye.atlasBuffer.byteLength/1048576;Ct(`uploading atlas ...
${Ee.toFixed(1)} MB BC7`);try{const Re=zl(ye.atlasBuffer);ne=Vl(f,Re,!0)}catch(Re){console.warn("[atlas] failed to parse/upload atlas:",Re)}}ye.meshBuffer&&!me&&(Ct("uploading mesh ..."),fe=Bc(f,ye.meshBuffer,"bundle.mesh"))}catch(ye){throw yn(),ye}}else X=await Ol(ie,f);me&&(Ct("loading mesh ..."),fe=await Mc(f,me));const le=Q?await hc(Q):[];le.length>0&&w.set_preset(le[0]),Ie(X,le,ne,fe)});function Ie(ie,ae=[],me=null,Q=null){const X=[(ie.bbox.min[0]+ie.bbox.max[0])/2,(ie.bbox.min[1]+ie.bbox.max[1])/2,(ie.bbox.min[2]+ie.bbox.max[2])/2];k.setBbox(ie.bbox.min,ie.bbox.max);const ne=.5*Math.sqrt((ie.bbox.max[0]-ie.bbox.min[0])**2+(ie.bbox.max[1]-ie.bbox.min[1])**2+(ie.bbox.max[2]-ie.bbox.min[2])**2);function fe(J,ce){const oe=Hr(J,ce,i,w,ie.surfel_data,ne);oe&&(k.setOrbitPivot(oe),console.log(`[pick] orbit pivot → (${oe[0].toFixed(3)}, ${oe[1].toFixed(3)}, ${oe[2].toFixed(3)})`))}function Be(){const J=i.width*.5,ce=i.height*.5,oe=Hr(J,ce,i,w,ie.surfel_data,ne);if(!oe)return;const Se=w.rotation,De=Se[2],ge=Se[6],Le=Se[10],Ve=oe[0]-w.position[0],Ne=oe[1]-w.position[1],We=oe[2]-w.position[2],rt=Ve*De+Ne*ge+We*Le;rt>0&&k.setOrbitDepth(rt)}if(ae.length===0){const J=ie.bbox.max[0]-ie.bbox.min[0],ce=ie.bbox.max[1]-ie.bbox.min[1],oe=ie.bbox.max[2]-ie.bbox.min[2],De=.5*Math.sqrt(J*J+ce*ce+oe*oe)*.5;I.set(X[0]-De,X[1]-De,X[2]-De,w.position);const ge=I.create(De,De,De);I.normalize(ge,ge);const Le=I.create(0,1,0),Ve=I.create();I.cross(Le,ge,Ve),I.normalize(Ve,Ve);const Ne=I.create();I.cross(ge,Ve,Ne);const We=mt.create(Ve[0],Ne[0],ge[0],Ve[1],Ne[1],ge[1],Ve[2],Ne[2],ge[2]);it.fromMat3(We,w.rotation),w.update_buffer()}k.setCenter(I.create(ie.centroid[0],ie.centroid[1],ie.centroid[2]));const le=new uc(ie,f,F,w.uniform_buffer,S,me,Q);T=le,zn(i.width,i.height,f,le.render_settings_buffer),ue.atlas_enabled=me!==null,Q===null&&(ue.mesh_cull=!1),le.setMeshCullEnabled(ue.mesh_cull),le.setMeshMargin(ue.mesh_margin),Q===null&&(ue.mesh_debug=!1),le.setMeshOverlayEnabled(ue.mesh_debug),console.log(`[mesh-cull] ${Q!==null?"mesh loaded":"no mesh"} · toggle=${ue.mesh_cull} · margin=${ue.mesh_margin}m · debug=${ue.mesh_debug}`);let ye=!1;const Ce=(()=>{if(me!==null)return`${me.meta.format===2?"BC7":me.meta.format===3?"ASTC 4×4":me.meta.format===5?"RVQ-paired (typeA)":me.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":me.meta.format===7?"BC7 codebook gather (typeD)":`format=${me.meta.format}`} ${me.meta.width}×${me.meta.height}, ${me.meta.n_layers} layers`;const J=f.features.has("texture-compression-bc"),ce=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(J?["BC7"]:[]).concat(ce?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",Ce),Wr(ie.sh_bias,f,le.render_settings_buffer),$r(ue.gaussian_scaling,f,le.render_settings_buffer),ue.sh_bias=ie.sh_bias;const Ee=ie.num_points.toLocaleString(),Re={stats:`${Ee} surfels · -- fps`};xe.addMonitor(Re,"stats",{label:"Stats",interval:200}),xe.addMonitor({atlas:Ce},"atlas",{label:"Atlas"});const B={stages:"— ms · awaiting timestamp data"};xe.addMonitor(B,"stages",{label:"Stages",interval:500});let R=null;if(le.timeQueryEnabled){R=document.createElement("canvas"),R.width=280,R.height=24,R.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(R);const J=oe=>{const Se=R.getContext("2d");if(!Se)return;const De=R.width,ge=R.height;if(Se.clearRect(0,0,De,ge),!oe||oe.total<=0){Se.fillStyle="#888",Se.font="11px ui-monospace,Menlo,monospace",Se.fillText("awaiting GPU timestamps…",8,16);return}const Le=[{label:"cull",ms:oe.cull,color:"#3aa3ff"},{label:"pre",ms:oe.preprocess,color:"#3ad27a"},{label:"sort",ms:oe.sort,color:"#ffa53a"},{label:"render",ms:oe.render,color:"#ff5566"}],Ve=Math.max(.001,Le.reduce((We,rt)=>We+rt.ms,0));let Ne=0;Se.font="10px ui-monospace,Menlo,monospace",Se.textBaseline="middle";for(const We of Le){const rt=We.ms/Ve*De;Se.fillStyle=We.color,Se.fillRect(Ne,0,rt,ge),rt>=38&&(Se.fillStyle="#000c",Se.fillText(`${We.label} ${We.ms.toFixed(1)}`,Ne+4,ge/2)),Ne+=rt}};setInterval(()=>{ye||le.readPerfMetrics({silent:!0}).then(()=>{const oe=le.lastStageBreakdownMs;J(oe),oe&&(B.stages=`${oe.total.toFixed(1)} ms · cull ${oe.cull.toFixed(1)} / pre ${oe.preprocess.toFixed(1)} / sort ${oe.sort.toFixed(1)} / render ${oe.render.toFixed(1)}`)}).catch(oe=>console.warn("[perf] readPerfMetrics failed:",oe))},500)}const g=.4,o=3,h=.3;let u=null,b=0,y=0;const C=at.create(),E=mt.create();let r=ae.length>0?0:-1;const m={view:ae.length>0?`${r+1} / ${ae.length}: ${ae[r].img_name??r}`:"— no presets —"};xe.addMonitor(m,"view",{label:"View",interval:100});function d(J){const ce=mt.create(J[0],J[1],J[2],J[4],J[5],J[6],J[8],J[9],J[10]);return at.fromMat(ce)}function p(J,ce){u={fromPos:I.clone(w.position),toPos:I.clone(J.position),fromQuat:at.normalize(d(w.rotation)),toQuat:at.normalize(d(J.rotation)),target:J,t:0,duration:Math.max(.01,ce)}}const a=(J,ce=!0)=>{if(ae.length===0)return;r=(J%ae.length+ae.length)%ae.length;const oe=ae[r];ce?p(oe,g):(w.set_preset(oe),k.resetToCamera(),Be()),m.view=`${r+1} / ${ae.length}: ${ae[r].img_name??r}`};ae.length>0&&(xe.addButton({title:"◀ Prev view"}).on("click",()=>a(r-1)),xe.addButton({title:"Next view ▶"}).on("click",()=>a(r+1)));const _=ae.length>0?li(ae,{tiltDownDeg:15,alignFirst:!0}):null,x=_?Cc(ae,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let v=0;const L=12;Ae.value={onAnimateStart:()=>{v=0},onAnimateStop:()=>{k.resetToCamera(),Be()}},xe.addInput(ue,"render_scale",{label:"Render scale",min:.25,max:_e,step:.25}).on("change",J=>{const ce=Math.max(.25,J.value),oe=Math.max(1,Math.ceil(ce*i.clientWidth)),Se=Math.max(1,Math.ceil(ce*i.clientHeight));(i.width!==oe||i.height!==Se)&&(i.width=oe,i.height=Se,A())}),xe.addInput(ue,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",J=>$r(J.value,f,le.render_settings_buffer)),xe.addInput(ue,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",J=>Wr(J.value,f,le.render_settings_buffer)),xe.addInput(ue,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",J=>{le.bgColor=[J.value.r,J.value.g,J.value.b,J.value.a]});const O=me?me.meta.format===3?"Atlas (ASTC)":me.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";xe.addInput(ue,"atlas_enabled",{label:O}).on("change",J=>le.setAtlasEnabled(J.value)),xe.addInput(ue,"bfc",{label:"Backface"}).on("change",J=>ri({bfc:J.value},f,le.render_settings_buffer));const q=xe.addInput(ue,"mesh_cull",{label:"Mesh cull"});q.on("change",J=>le.setMeshCullEnabled(J.value)),le.hasMesh||(q.disabled=!0);const pe=xe.addInput(ue,"mesh_margin",{label:"Mesh margin (m)",min:-.5,max:.5,step:.005});pe.on("change",J=>le.setMeshMargin(J.value)),le.hasMesh||(pe.disabled=!0);const re=xe.addInput(ue,"mesh_debug",{label:"Mesh debug"});re.on("change",J=>le.setMeshOverlayEnabled(J.value)),le.hasMesh||(re.disabled=!0),xe.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(ae.length>0)w.set_preset(ae[0]);else{const J=ie.bbox.max[0]-ie.bbox.min[0],ce=ie.bbox.max[1]-ie.bbox.min[1],oe=ie.bbox.max[2]-ie.bbox.min[2],De=.5*Math.sqrt(J*J+ce*ce+oe*oe)*.5;I.set(X[0]-De,X[1]-De,X[2]-De,w.position);const ge=I.create(De,De,De);I.normalize(ge,ge);const Le=I.create();I.cross(I.create(0,1,0),ge,Le),I.normalize(Le,Le);const Ve=I.create();I.cross(ge,Le,Ve);const Ne=mt.create(Le[0],Ve[0],ge[0],Le[1],Ve[1],ge[1],Le[2],Ve[2],ge[2]);it.fromMat3(Ne,w.rotation),w.update_buffer()}k.resetToCamera(),Be()});const ee={result:"— click Benchmark —"};xe.addMonitor(ee,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const we={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function ke(){const ce=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const oe of Object.keys(we))if(ce.startsWith(oe))return oe;return null}const ve=document.createElement("div");ve.id="bench-overlay",ve.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(ve);function Pe(J,ce,oe){const Se=Math.floor(ce/Math.max(1,oe)*100),De=32,ge=Math.floor(ce/Math.max(1,oe)*De),Le="█".repeat(ge)+"░".repeat(De-ge);ve.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${J}</div><div>[${Le}] ${Se}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ce} / ${oe} frames · offscreen · pipelined · no vsync</div>`,ve.style.display="block"}function Ge(){ve.style.display="none"}async function ze(J=10,ce=200){if(ye)return;if(ae.length===0){ee.result="no cameras to benchmark";return}ye=!0;const oe=N,Se=ue.animate,De=new Float32Array(w.position),ge=new Float32Array(w.rotation);N=!1,ue.animate=!1,xe.refresh(),u=null,k.enabled=!1;const Le=ke(),Ve=Le?we[Le]:null,Ne=(Ve==null?void 0:Ve.w)??i.width,We=(Ve==null?void 0:Ve.h)??i.height,rt=(Ve==null?void 0:Ve.fovY)??w.getFov(),Et=Le?`${Le} · ${Ne>=4e3/4+500?"images_4":"images_2"}`:"custom",vt=i.width,zt=i.height,kt=w.getFov();i.width=Ne,i.height=We,w.setFov(rt),zn(Ne,We,f,le.render_settings_buffer);const Ut=f.createTexture({size:[Ne,We,1],format:F,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Yt=Ut.createView(),Ze=()=>{const ct=f.createCommandEncoder();le.frame(ct,Yt,!1),f.queue.submit([ct.finish()])},an=()=>new Promise(ct=>setTimeout(ct,0)),Fn=20,Zt=async(ct,ht)=>{let Gt=0,bt=0;for(Pe(ht,0,ct),await an();bt<ct;){const Xt=Math.min(Fn,ct-bt),Rt=performance.now();for(let gt=0;gt<Xt;gt++)w.set_preset(ae[(bt+gt)%ae.length]),Ze();await f.queue.onSubmittedWorkDone();const Nn=performance.now();Gt+=Nn-Rt,bt+=Xt,Pe(ht,bt,ct),await an()}return Gt};try{await Zt(J,"Warming up");const ht=await Zt(ce,"Benchmarking")/ce,Gt=1e3/ht,bt=ie.num_points??ie.surfel_data.length/8,Xt=(rt*180/Math.PI).toFixed(1),Rt=`${Gt.toFixed(1)} FPS  (${ht.toFixed(2)} ms/frame)
${Ne}×${We} · fovY ${Xt}° · ${Et}
${bt.toLocaleString()} surfels · ${J}w+${ce}b · pipelined`;ee.result=Rt,console.log("[bench]",Rt.replace(/\n/g,"  |  "))}catch(ct){console.error("[bench] failed:",ct),ee.result=`bench failed: ${ct}`}finally{Ge(),Ut.destroy(),i.width=vt,i.height=zt,w.setFov(kt),zn(vt,zt,f,le.render_settings_buffer),w.position.set(De),w.rotation.set(ge),w.update_buffer(),k.enabled=!oe,N=oe,ue.animate=Se,xe.refresh(),ye=!1}}xe.addButton({title:"📊 Benchmark"}).on("click",()=>ze()),document.addEventListener("keydown",J=>{const ce=J.key;if(ce>="0"&&ce<="9"&&ae.length>0){const oe=parseInt(ce);oe<ae.length&&a(oe)}else ce==="ArrowLeft"||ce==="PageUp"?(a(r-1),J.preventDefault()):ce==="ArrowRight"||ce==="PageDown"?(a(r+1),J.preventDefault()):(ce==="d"||ce==="D")&&le.debugReadSortedIndices(30).catch(oe=>console.error("[DEBUG] readback failed:",oe))});function $e(J,ce){const oe=i.getBoundingClientRect(),Se=window.devicePixelRatio||1;return[(J-oe.left)*Se,(ce-oe.top)*Se]}i.addEventListener("dblclick",J=>{const[ce,oe]=$e(J.clientX,J.clientY);fe(ce,oe)});let je=0,Ke=0,He=0;i.addEventListener("pointerdown",J=>{if(J.pointerType!=="touch")return;const ce=performance.now(),oe=ce-je,Se=J.clientX-Ke,De=J.clientY-He;if(oe>0&&oe<300&&Se*Se+De*De<40*40){const[ge,Le]=$e(J.clientX,J.clientY);fe(ge,Le),je=0}else je=ce,Ke=J.clientX,He=J.clientY});function Qe(){return M}let tt=performance.now(),et=60,nt=Promise.resolve(),Je=0;async function Ye(){var De;const J=performance.now(),ce=Math.min((J-tt)/1e3,.1);if(tt=J,ce>0){const ge=((De=le.lastStageBreakdownMs)==null?void 0:De.total)??0,Le=ge>.5?1e3/ge:1/ce;et=et*.9+Le*.1,Re.stats=`${Ee} surfels · ${Math.round(et)} fps`}if(ye){requestAnimationFrame(Ye);return}if(Qe()&&(u||N)&&(u=null,k.resetToCamera(),Be(),N&&(N=!1,ue.animate=!1,xe.refresh())),N&&ue.animateMode==="circle"&&_){v+=ce/L,v>=1&&(v-=1);const ge=ci(_,v);w.set_preset(ge),k.update(ce);const Le=f.createCommandEncoder();le.frame(Le,l.getCurrentTexture().createView()),f.queue.submit([Le.finish()]),Je++,Je===2&&yn(),requestAnimationFrame(Ye);return}if(u){u.t+=ce/u.duration;const ge=Math.min(1,u.t),Le=ge*ge*(3-2*ge);I.lerp(u.fromPos,u.toPos,Le,w.position),at.slerp(u.fromQuat,u.toQuat,Le,C),mt.fromQuat(C,E),it.fromMat3(E,w.rotation),w.update_buffer(),u.t>=1&&(w.set_preset(u.target),u=null,N?ae.length>0&&(b=h):(k.resetToCamera(),Be()))}else if(N&&!Qe()){const ge=ue.animateMode==="circle"&&x.length>0,Le=ge?x:ae;if(Le.length!==0){if(b-=ce,b<=0){const Ne=((ge?y:r)+1)%Le.length;ge?y=Ne:r=Ne;const We=ge?o/8:o;p(Le[Ne],We),ge||(m.view=`${r+1} / ${ae.length}: ${ae[r].img_name??r}`)}}}k.update(ce),z(),await nt;const oe=f.createCommandEncoder(),Se=l.getCurrentTexture().createView();le.frame(oe,Se),f.queue.submit([oe.finish()]),nt=f.queue.onSubmittedWorkDone(),Je++,Je===2&&yn(),requestAnimationFrame(Ye)}requestAnimationFrame(Ye)}}(function(){let l="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const k=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const i=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(i===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];i.features.has("timestamp-query")&&l.push("timestamp-query"),i.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),i.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",i.info??"(unknown)"),console.log("[adapter] features:",Array.from(i.features)),console.log("[adapter] BC7:",i.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",i.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:i.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxTextureDimension2D:i.limits.maxTextureDimension2D});const f=await i.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxBufferSize:i.limits.maxBufferSize,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Al(S!==null);const w=S.getContext("webgpu");Oc(S,w,f,l)})();
