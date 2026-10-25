var xn=Object.defineProperty;var yn=(s,n,l)=>n in s?xn(s,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[n]=l;var S=(s,n,l)=>(yn(s,typeof n!="symbol"?n+"":n,l),l);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))w(x);new MutationObserver(x=>{for(const g of x)if(g.type==="childList")for(const B of g.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&w(B)}).observe(document,{childList:!0,subtree:!0});function l(x){const g={};return x.integrity&&(g.integrity=x.integrity),x.referrerPolicy&&(g.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?g.credentials="include":x.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function w(x){if(x.ep)return;x.ep=!0;const g=l(x);fetch(x.href,g)}})();function bn(s,n){return class extends s{constructor(...l){super(...l),n(this)}}}const wn=bn(Array,s=>s.fill(0));let ve=1e-6;function vn(s){function n(_=0,m=0){const v=new s(2);return _!==void 0&&(v[0]=_,m!==void 0&&(v[1]=m)),v}const l=n;function w(_,m,v){const e=v??new s(2);return e[0]=_,e[1]=m,e}function x(_,m){const v=m??new s(2);return v[0]=Math.ceil(_[0]),v[1]=Math.ceil(_[1]),v}function g(_,m){const v=m??new s(2);return v[0]=Math.floor(_[0]),v[1]=Math.floor(_[1]),v}function B(_,m){const v=m??new s(2);return v[0]=Math.round(_[0]),v[1]=Math.round(_[1]),v}function P(_,m=0,v=1,e){const d=e??new s(2);return d[0]=Math.min(v,Math.max(m,_[0])),d[1]=Math.min(v,Math.max(m,_[1])),d}function M(_,m,v){const e=v??new s(2);return e[0]=_[0]+m[0],e[1]=_[1]+m[1],e}function R(_,m,v,e){const d=e??new s(2);return d[0]=_[0]+m[0]*v,d[1]=_[1]+m[1]*v,d}function O(_,m){const v=_[0],e=_[1],d=m[0],a=m[1],o=Math.sqrt(v*v+e*e),r=Math.sqrt(d*d+a*a),u=o*r,y=u&&le(_,m)/u;return Math.acos(y)}function X(_,m,v){const e=v??new s(2);return e[0]=_[0]-m[0],e[1]=_[1]-m[1],e}const D=X;function Y(_,m){return Math.abs(_[0]-m[0])<ve&&Math.abs(_[1]-m[1])<ve}function ue(_,m){return _[0]===m[0]&&_[1]===m[1]}function ne(_,m,v,e){const d=e??new s(2);return d[0]=_[0]+v*(m[0]-_[0]),d[1]=_[1]+v*(m[1]-_[1]),d}function $(_,m,v,e){const d=e??new s(2);return d[0]=_[0]+v[0]*(m[0]-_[0]),d[1]=_[1]+v[1]*(m[1]-_[1]),d}function q(_,m,v){const e=v??new s(2);return e[0]=Math.max(_[0],m[0]),e[1]=Math.max(_[1],m[1]),e}function j(_,m,v){const e=v??new s(2);return e[0]=Math.min(_[0],m[0]),e[1]=Math.min(_[1],m[1]),e}function oe(_,m,v){const e=v??new s(2);return e[0]=_[0]*m,e[1]=_[1]*m,e}const fe=oe;function N(_,m,v){const e=v??new s(2);return e[0]=_[0]/m,e[1]=_[1]/m,e}function C(_,m){const v=m??new s(2);return v[0]=1/_[0],v[1]=1/_[1],v}const me=C;function re(_,m,v){const e=v??new s(3),d=_[0]*m[1]-_[1]*m[0];return e[0]=0,e[1]=0,e[2]=d,e}function le(_,m){return _[0]*m[0]+_[1]*m[1]}function ce(_){const m=_[0],v=_[1];return Math.sqrt(m*m+v*v)}const z=ce;function ae(_){const m=_[0],v=_[1];return m*m+v*v}const ye=ae;function pe(_,m){const v=_[0]-m[0],e=_[1]-m[1];return Math.sqrt(v*v+e*e)}const L=pe;function H(_,m){const v=_[0]-m[0],e=_[1]-m[1];return v*v+e*e}const se=H;function be(_,m){const v=m??new s(2),e=_[0],d=_[1],a=Math.sqrt(e*e+d*d);return a>1e-5?(v[0]=e/a,v[1]=d/a):(v[0]=0,v[1]=0),v}function ke(_,m){const v=m??new s(2);return v[0]=-_[0],v[1]=-_[1],v}function Se(_,m){const v=m??new s(2);return v[0]=_[0],v[1]=_[1],v}const De=Se;function Be(_,m,v){const e=v??new s(2);return e[0]=_[0]*m[0],e[1]=_[1]*m[1],e}const Me=Be;function he(_,m,v){const e=v??new s(2);return e[0]=_[0]/m[0],e[1]=_[1]/m[1],e}const we=he;function Pe(_=1,m){const v=m??new s(2),e=Math.random()*2*Math.PI;return v[0]=Math.cos(e)*_,v[1]=Math.sin(e)*_,v}function T(_){const m=_??new s(2);return m[0]=0,m[1]=0,m}function U(_,m,v){const e=v??new s(2),d=_[0],a=_[1];return e[0]=d*m[0]+a*m[4]+m[12],e[1]=d*m[1]+a*m[5]+m[13],e}function p(_,m,v){const e=v??new s(2),d=_[0],a=_[1];return e[0]=m[0]*d+m[4]*a+m[8],e[1]=m[1]*d+m[5]*a+m[9],e}function t(_,m,v,e){const d=e??new s(2),a=_[0]-m[0],o=_[1]-m[1],r=Math.sin(v),u=Math.cos(v);return d[0]=a*u-o*r+m[0],d[1]=a*r+o*u+m[1],d}function c(_,m,v){const e=v??new s(2);return be(_,e),oe(e,m,e)}function i(_,m,v){const e=v??new s(2);return ce(_)>m?c(_,m,e):Se(_,e)}function f(_,m,v){const e=v??new s(2);return ne(_,m,.5,e)}return{create:n,fromValues:l,set:w,ceil:x,floor:g,round:B,clamp:P,add:M,addScaled:R,angle:O,subtract:X,sub:D,equalsApproximately:Y,equals:ue,lerp:ne,lerpV:$,max:q,min:j,mulScalar:oe,scale:fe,divScalar:N,inverse:C,invert:me,cross:re,dot:le,length:ce,len:z,lengthSq:ae,lenSq:ye,distance:pe,dist:L,distanceSq:H,distSq:se,normalize:be,negate:ke,copy:Se,clone:De,multiply:Be,mul:Me,divide:he,div:we,random:Pe,zero:T,transformMat4:U,transformMat3:p,rotate:t,setLength:c,truncate:i,midpoint:f}}const Ot=new Map;function sn(s){let n=Ot.get(s);return n||(n=vn(s),Ot.set(s,n)),n}function Sn(s){function n(r,u,y){const h=new s(3);return r!==void 0&&(h[0]=r,u!==void 0&&(h[1]=u,y!==void 0&&(h[2]=y))),h}const l=n;function w(r,u,y,h){const k=h??new s(3);return k[0]=r,k[1]=u,k[2]=y,k}function x(r,u){const y=u??new s(3);return y[0]=Math.ceil(r[0]),y[1]=Math.ceil(r[1]),y[2]=Math.ceil(r[2]),y}function g(r,u){const y=u??new s(3);return y[0]=Math.floor(r[0]),y[1]=Math.floor(r[1]),y[2]=Math.floor(r[2]),y}function B(r,u){const y=u??new s(3);return y[0]=Math.round(r[0]),y[1]=Math.round(r[1]),y[2]=Math.round(r[2]),y}function P(r,u=0,y=1,h){const k=h??new s(3);return k[0]=Math.min(y,Math.max(u,r[0])),k[1]=Math.min(y,Math.max(u,r[1])),k[2]=Math.min(y,Math.max(u,r[2])),k}function M(r,u,y){const h=y??new s(3);return h[0]=r[0]+u[0],h[1]=r[1]+u[1],h[2]=r[2]+u[2],h}function R(r,u,y,h){const k=h??new s(3);return k[0]=r[0]+u[0]*y,k[1]=r[1]+u[1]*y,k[2]=r[2]+u[2]*y,k}function O(r,u){const y=r[0],h=r[1],k=r[2],G=u[0],b=u[1],I=u[2],A=Math.sqrt(y*y+h*h+k*k),E=Math.sqrt(G*G+b*b+I*I),F=A*E,W=F&&le(r,u)/F;return Math.acos(W)}function X(r,u,y){const h=y??new s(3);return h[0]=r[0]-u[0],h[1]=r[1]-u[1],h[2]=r[2]-u[2],h}const D=X;function Y(r,u){return Math.abs(r[0]-u[0])<ve&&Math.abs(r[1]-u[1])<ve&&Math.abs(r[2]-u[2])<ve}function ue(r,u){return r[0]===u[0]&&r[1]===u[1]&&r[2]===u[2]}function ne(r,u,y,h){const k=h??new s(3);return k[0]=r[0]+y*(u[0]-r[0]),k[1]=r[1]+y*(u[1]-r[1]),k[2]=r[2]+y*(u[2]-r[2]),k}function $(r,u,y,h){const k=h??new s(3);return k[0]=r[0]+y[0]*(u[0]-r[0]),k[1]=r[1]+y[1]*(u[1]-r[1]),k[2]=r[2]+y[2]*(u[2]-r[2]),k}function q(r,u,y){const h=y??new s(3);return h[0]=Math.max(r[0],u[0]),h[1]=Math.max(r[1],u[1]),h[2]=Math.max(r[2],u[2]),h}function j(r,u,y){const h=y??new s(3);return h[0]=Math.min(r[0],u[0]),h[1]=Math.min(r[1],u[1]),h[2]=Math.min(r[2],u[2]),h}function oe(r,u,y){const h=y??new s(3);return h[0]=r[0]*u,h[1]=r[1]*u,h[2]=r[2]*u,h}const fe=oe;function N(r,u,y){const h=y??new s(3);return h[0]=r[0]/u,h[1]=r[1]/u,h[2]=r[2]/u,h}function C(r,u){const y=u??new s(3);return y[0]=1/r[0],y[1]=1/r[1],y[2]=1/r[2],y}const me=C;function re(r,u,y){const h=y??new s(3),k=r[2]*u[0]-r[0]*u[2],G=r[0]*u[1]-r[1]*u[0];return h[0]=r[1]*u[2]-r[2]*u[1],h[1]=k,h[2]=G,h}function le(r,u){return r[0]*u[0]+r[1]*u[1]+r[2]*u[2]}function ce(r){const u=r[0],y=r[1],h=r[2];return Math.sqrt(u*u+y*y+h*h)}const z=ce;function ae(r){const u=r[0],y=r[1],h=r[2];return u*u+y*y+h*h}const ye=ae;function pe(r,u){const y=r[0]-u[0],h=r[1]-u[1],k=r[2]-u[2];return Math.sqrt(y*y+h*h+k*k)}const L=pe;function H(r,u){const y=r[0]-u[0],h=r[1]-u[1],k=r[2]-u[2];return y*y+h*h+k*k}const se=H;function be(r,u){const y=u??new s(3),h=r[0],k=r[1],G=r[2],b=Math.sqrt(h*h+k*k+G*G);return b>1e-5?(y[0]=h/b,y[1]=k/b,y[2]=G/b):(y[0]=0,y[1]=0,y[2]=0),y}function ke(r,u){const y=u??new s(3);return y[0]=-r[0],y[1]=-r[1],y[2]=-r[2],y}function Se(r,u){const y=u??new s(3);return y[0]=r[0],y[1]=r[1],y[2]=r[2],y}const De=Se;function Be(r,u,y){const h=y??new s(3);return h[0]=r[0]*u[0],h[1]=r[1]*u[1],h[2]=r[2]*u[2],h}const Me=Be;function he(r,u,y){const h=y??new s(3);return h[0]=r[0]/u[0],h[1]=r[1]/u[1],h[2]=r[2]/u[2],h}const we=he;function Pe(r=1,u){const y=u??new s(3),h=Math.random()*2*Math.PI,k=Math.random()*2-1,G=Math.sqrt(1-k*k)*r;return y[0]=Math.cos(h)*G,y[1]=Math.sin(h)*G,y[2]=k*r,y}function T(r){const u=r??new s(3);return u[0]=0,u[1]=0,u[2]=0,u}function U(r,u,y){const h=y??new s(3),k=r[0],G=r[1],b=r[2],I=u[3]*k+u[7]*G+u[11]*b+u[15]||1;return h[0]=(u[0]*k+u[4]*G+u[8]*b+u[12])/I,h[1]=(u[1]*k+u[5]*G+u[9]*b+u[13])/I,h[2]=(u[2]*k+u[6]*G+u[10]*b+u[14])/I,h}function p(r,u,y){const h=y??new s(3),k=r[0],G=r[1],b=r[2];return h[0]=k*u[0*4+0]+G*u[1*4+0]+b*u[2*4+0],h[1]=k*u[0*4+1]+G*u[1*4+1]+b*u[2*4+1],h[2]=k*u[0*4+2]+G*u[1*4+2]+b*u[2*4+2],h}function t(r,u,y){const h=y??new s(3),k=r[0],G=r[1],b=r[2];return h[0]=k*u[0]+G*u[4]+b*u[8],h[1]=k*u[1]+G*u[5]+b*u[9],h[2]=k*u[2]+G*u[6]+b*u[10],h}function c(r,u,y){const h=y??new s(3),k=u[0],G=u[1],b=u[2],I=u[3]*2,A=r[0],E=r[1],F=r[2],W=G*F-b*E,Z=b*A-k*F,V=k*E-G*A;return h[0]=A+W*I+(G*V-b*Z)*2,h[1]=E+Z*I+(b*W-k*V)*2,h[2]=F+V*I+(k*Z-G*W)*2,h}function i(r,u){const y=u??new s(3);return y[0]=r[12],y[1]=r[13],y[2]=r[14],y}function f(r,u,y){const h=y??new s(3),k=u*4;return h[0]=r[k+0],h[1]=r[k+1],h[2]=r[k+2],h}function _(r,u){const y=u??new s(3),h=r[0],k=r[1],G=r[2],b=r[4],I=r[5],A=r[6],E=r[8],F=r[9],W=r[10];return y[0]=Math.sqrt(h*h+k*k+G*G),y[1]=Math.sqrt(b*b+I*I+A*A),y[2]=Math.sqrt(E*E+F*F+W*W),y}function m(r,u,y,h){const k=h??new s(3),G=[],b=[];return G[0]=r[0]-u[0],G[1]=r[1]-u[1],G[2]=r[2]-u[2],b[0]=G[0],b[1]=G[1]*Math.cos(y)-G[2]*Math.sin(y),b[2]=G[1]*Math.sin(y)+G[2]*Math.cos(y),k[0]=b[0]+u[0],k[1]=b[1]+u[1],k[2]=b[2]+u[2],k}function v(r,u,y,h){const k=h??new s(3),G=[],b=[];return G[0]=r[0]-u[0],G[1]=r[1]-u[1],G[2]=r[2]-u[2],b[0]=G[2]*Math.sin(y)+G[0]*Math.cos(y),b[1]=G[1],b[2]=G[2]*Math.cos(y)-G[0]*Math.sin(y),k[0]=b[0]+u[0],k[1]=b[1]+u[1],k[2]=b[2]+u[2],k}function e(r,u,y,h){const k=h??new s(3),G=[],b=[];return G[0]=r[0]-u[0],G[1]=r[1]-u[1],G[2]=r[2]-u[2],b[0]=G[0]*Math.cos(y)-G[1]*Math.sin(y),b[1]=G[0]*Math.sin(y)+G[1]*Math.cos(y),b[2]=G[2],k[0]=b[0]+u[0],k[1]=b[1]+u[1],k[2]=b[2]+u[2],k}function d(r,u,y){const h=y??new s(3);return be(r,h),oe(h,u,h)}function a(r,u,y){const h=y??new s(3);return ce(r)>u?d(r,u,h):Se(r,h)}function o(r,u,y){const h=y??new s(3);return ne(r,u,.5,h)}return{create:n,fromValues:l,set:w,ceil:x,floor:g,round:B,clamp:P,add:M,addScaled:R,angle:O,subtract:X,sub:D,equalsApproximately:Y,equals:ue,lerp:ne,lerpV:$,max:q,min:j,mulScalar:oe,scale:fe,divScalar:N,inverse:C,invert:me,cross:re,dot:le,length:ce,len:z,lengthSq:ae,lenSq:ye,distance:pe,dist:L,distanceSq:H,distSq:se,normalize:be,negate:ke,copy:Se,clone:De,multiply:Be,mul:Me,divide:he,div:we,random:Pe,zero:T,transformMat4:U,transformMat4Upper3x3:p,transformMat3:t,transformQuat:c,getTranslation:i,getAxis:f,getScaling:_,rotateX:m,rotateY:v,rotateZ:e,setLength:d,truncate:a,midpoint:o}}const Lt=new Map;function bt(s){let n=Lt.get(s);return n||(n=Sn(s),Lt.set(s,n)),n}function Bn(s){const n=sn(s),l=bt(s);function w(t,c,i,f,_,m,v,e,d){const a=new s(12);return a[3]=0,a[7]=0,a[11]=0,t!==void 0&&(a[0]=t,c!==void 0&&(a[1]=c,i!==void 0&&(a[2]=i,f!==void 0&&(a[4]=f,_!==void 0&&(a[5]=_,m!==void 0&&(a[6]=m,v!==void 0&&(a[8]=v,e!==void 0&&(a[9]=e,d!==void 0&&(a[10]=d))))))))),a}function x(t,c,i,f,_,m,v,e,d,a){const o=a??new s(12);return o[0]=t,o[1]=c,o[2]=i,o[3]=0,o[4]=f,o[5]=_,o[6]=m,o[7]=0,o[8]=v,o[9]=e,o[10]=d,o[11]=0,o}function g(t,c){const i=c??new s(12);return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=0,i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=0,i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=0,i}function B(t,c){const i=c??new s(12),f=t[0],_=t[1],m=t[2],v=t[3],e=f+f,d=_+_,a=m+m,o=f*e,r=_*e,u=_*d,y=m*e,h=m*d,k=m*a,G=v*e,b=v*d,I=v*a;return i[0]=1-u-k,i[1]=r+I,i[2]=y-b,i[3]=0,i[4]=r-I,i[5]=1-o-k,i[6]=h+G,i[7]=0,i[8]=y+b,i[9]=h-G,i[10]=1-o-u,i[11]=0,i}function P(t,c){const i=c??new s(12);return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i[4]=-t[4],i[5]=-t[5],i[6]=-t[6],i[8]=-t[8],i[9]=-t[9],i[10]=-t[10],i}function M(t,c,i){const f=i??new s(12);return f[0]=t[0]*c,f[1]=t[1]*c,f[2]=t[2]*c,f[4]=t[4]*c,f[5]=t[5]*c,f[6]=t[6]*c,f[8]=t[8]*c,f[9]=t[9]*c,f[10]=t[10]*c,f}const R=M;function O(t,c,i){const f=i??new s(12);return f[0]=t[0]+c[0],f[1]=t[1]+c[1],f[2]=t[2]+c[2],f[4]=t[4]+c[4],f[5]=t[5]+c[5],f[6]=t[6]+c[6],f[8]=t[8]+c[8],f[9]=t[9]+c[9],f[10]=t[10]+c[10],f}function X(t,c){const i=c??new s(12);return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[8]=t[8],i[9]=t[9],i[10]=t[10],i}const D=X;function Y(t,c){return Math.abs(t[0]-c[0])<ve&&Math.abs(t[1]-c[1])<ve&&Math.abs(t[2]-c[2])<ve&&Math.abs(t[4]-c[4])<ve&&Math.abs(t[5]-c[5])<ve&&Math.abs(t[6]-c[6])<ve&&Math.abs(t[8]-c[8])<ve&&Math.abs(t[9]-c[9])<ve&&Math.abs(t[10]-c[10])<ve}function ue(t,c){return t[0]===c[0]&&t[1]===c[1]&&t[2]===c[2]&&t[4]===c[4]&&t[5]===c[5]&&t[6]===c[6]&&t[8]===c[8]&&t[9]===c[9]&&t[10]===c[10]}function ne(t){const c=t??new s(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function $(t,c){const i=c??new s(12);if(i===t){let u;return u=t[1],t[1]=t[4],t[4]=u,u=t[2],t[2]=t[8],t[8]=u,u=t[6],t[6]=t[9],t[9]=u,i}const f=t[0*4+0],_=t[0*4+1],m=t[0*4+2],v=t[1*4+0],e=t[1*4+1],d=t[1*4+2],a=t[2*4+0],o=t[2*4+1],r=t[2*4+2];return i[0]=f,i[1]=v,i[2]=a,i[4]=_,i[5]=e,i[6]=o,i[8]=m,i[9]=d,i[10]=r,i}function q(t,c){const i=c??new s(12),f=t[0*4+0],_=t[0*4+1],m=t[0*4+2],v=t[1*4+0],e=t[1*4+1],d=t[1*4+2],a=t[2*4+0],o=t[2*4+1],r=t[2*4+2],u=r*e-d*o,y=-r*v+d*a,h=o*v-e*a,k=1/(f*u+_*y+m*h);return i[0]=u*k,i[1]=(-r*_+m*o)*k,i[2]=(d*_-m*e)*k,i[4]=y*k,i[5]=(r*f-m*a)*k,i[6]=(-d*f+m*v)*k,i[8]=h*k,i[9]=(-o*f+_*a)*k,i[10]=(e*f-_*v)*k,i}function j(t){const c=t[0],i=t[0*4+1],f=t[0*4+2],_=t[1*4+0],m=t[1*4+1],v=t[1*4+2],e=t[2*4+0],d=t[2*4+1],a=t[2*4+2];return c*(m*a-d*v)-_*(i*a-d*f)+e*(i*v-m*f)}const oe=q;function fe(t,c,i){const f=i??new s(12),_=t[0],m=t[1],v=t[2],e=t[4+0],d=t[4+1],a=t[4+2],o=t[8+0],r=t[8+1],u=t[8+2],y=c[0],h=c[1],k=c[2],G=c[4+0],b=c[4+1],I=c[4+2],A=c[8+0],E=c[8+1],F=c[8+2];return f[0]=_*y+e*h+o*k,f[1]=m*y+d*h+r*k,f[2]=v*y+a*h+u*k,f[4]=_*G+e*b+o*I,f[5]=m*G+d*b+r*I,f[6]=v*G+a*b+u*I,f[8]=_*A+e*E+o*F,f[9]=m*A+d*E+r*F,f[10]=v*A+a*E+u*F,f}const N=fe;function C(t,c,i){const f=i??ne();return t!==f&&(f[0]=t[0],f[1]=t[1],f[2]=t[2],f[4]=t[4],f[5]=t[5],f[6]=t[6]),f[8]=c[0],f[9]=c[1],f[10]=1,f}function me(t,c){const i=c??n.create();return i[0]=t[8],i[1]=t[9],i}function re(t,c,i){const f=i??n.create(),_=c*4;return f[0]=t[_+0],f[1]=t[_+1],f}function le(t,c,i,f){const _=f===t?t:X(t,f),m=i*4;return _[m+0]=c[0],_[m+1]=c[1],_}function ce(t,c){const i=c??n.create(),f=t[0],_=t[1],m=t[4],v=t[5];return i[0]=Math.sqrt(f*f+_*_),i[1]=Math.sqrt(m*m+v*v),i}function z(t,c){const i=c??l.create(),f=t[0],_=t[1],m=t[2],v=t[4],e=t[5],d=t[6],a=t[8],o=t[9],r=t[10];return i[0]=Math.sqrt(f*f+_*_+m*m),i[1]=Math.sqrt(v*v+e*e+d*d),i[2]=Math.sqrt(a*a+o*o+r*r),i}function ae(t,c){const i=c??new s(12);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=1,i[6]=0,i[8]=t[0],i[9]=t[1],i[10]=1,i}function ye(t,c,i){const f=i??new s(12),_=c[0],m=c[1],v=t[0],e=t[1],d=t[2],a=t[1*4+0],o=t[1*4+1],r=t[1*4+2],u=t[2*4+0],y=t[2*4+1],h=t[2*4+2];return t!==f&&(f[0]=v,f[1]=e,f[2]=d,f[4]=a,f[5]=o,f[6]=r),f[8]=v*_+a*m+u,f[9]=e*_+o*m+y,f[10]=d*_+r*m+h,f}function pe(t,c){const i=c??new s(12),f=Math.cos(t),_=Math.sin(t);return i[0]=f,i[1]=_,i[2]=0,i[4]=-_,i[5]=f,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function L(t,c,i){const f=i??new s(12),_=t[0*4+0],m=t[0*4+1],v=t[0*4+2],e=t[1*4+0],d=t[1*4+1],a=t[1*4+2],o=Math.cos(c),r=Math.sin(c);return f[0]=o*_+r*e,f[1]=o*m+r*d,f[2]=o*v+r*a,f[4]=o*e-r*_,f[5]=o*d-r*m,f[6]=o*a-r*v,t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function H(t,c){const i=c??new s(12),f=Math.cos(t),_=Math.sin(t);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=f,i[6]=_,i[8]=0,i[9]=-_,i[10]=f,i}function se(t,c,i){const f=i??new s(12),_=t[4],m=t[5],v=t[6],e=t[8],d=t[9],a=t[10],o=Math.cos(c),r=Math.sin(c);return f[4]=o*_+r*e,f[5]=o*m+r*d,f[6]=o*v+r*a,f[8]=o*e-r*_,f[9]=o*d-r*m,f[10]=o*a-r*v,t!==f&&(f[0]=t[0],f[1]=t[1],f[2]=t[2]),f}function be(t,c){const i=c??new s(12),f=Math.cos(t),_=Math.sin(t);return i[0]=f,i[1]=0,i[2]=-_,i[4]=0,i[5]=1,i[6]=0,i[8]=_,i[9]=0,i[10]=f,i}function ke(t,c,i){const f=i??new s(12),_=t[0*4+0],m=t[0*4+1],v=t[0*4+2],e=t[2*4+0],d=t[2*4+1],a=t[2*4+2],o=Math.cos(c),r=Math.sin(c);return f[0]=o*_-r*e,f[1]=o*m-r*d,f[2]=o*v-r*a,f[8]=o*e+r*_,f[9]=o*d+r*m,f[10]=o*a+r*v,t!==f&&(f[4]=t[4],f[5]=t[5],f[6]=t[6]),f}const Se=pe,De=L;function Be(t,c){const i=c??new s(12);return i[0]=t[0],i[1]=0,i[2]=0,i[4]=0,i[5]=t[1],i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function Me(t,c,i){const f=i??new s(12),_=c[0],m=c[1];return f[0]=_*t[0*4+0],f[1]=_*t[0*4+1],f[2]=_*t[0*4+2],f[4]=m*t[1*4+0],f[5]=m*t[1*4+1],f[6]=m*t[1*4+2],t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function he(t,c){const i=c??new s(12);return i[0]=t[0],i[1]=0,i[2]=0,i[4]=0,i[5]=t[1],i[6]=0,i[8]=0,i[9]=0,i[10]=t[2],i}function we(t,c,i){const f=i??new s(12),_=c[0],m=c[1],v=c[2];return f[0]=_*t[0*4+0],f[1]=_*t[0*4+1],f[2]=_*t[0*4+2],f[4]=m*t[1*4+0],f[5]=m*t[1*4+1],f[6]=m*t[1*4+2],f[8]=v*t[2*4+0],f[9]=v*t[2*4+1],f[10]=v*t[2*4+2],f}function Pe(t,c){const i=c??new s(12);return i[0]=t,i[1]=0,i[2]=0,i[4]=0,i[5]=t,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function T(t,c,i){const f=i??new s(12);return f[0]=c*t[0*4+0],f[1]=c*t[0*4+1],f[2]=c*t[0*4+2],f[4]=c*t[1*4+0],f[5]=c*t[1*4+1],f[6]=c*t[1*4+2],t!==f&&(f[8]=t[8],f[9]=t[9],f[10]=t[10]),f}function U(t,c){const i=c??new s(12);return i[0]=t,i[1]=0,i[2]=0,i[4]=0,i[5]=t,i[6]=0,i[8]=0,i[9]=0,i[10]=t,i}function p(t,c,i){const f=i??new s(12);return f[0]=c*t[0*4+0],f[1]=c*t[0*4+1],f[2]=c*t[0*4+2],f[4]=c*t[1*4+0],f[5]=c*t[1*4+1],f[6]=c*t[1*4+2],f[8]=c*t[2*4+0],f[9]=c*t[2*4+1],f[10]=c*t[2*4+2],f}return{add:O,clone:D,copy:X,create:w,determinant:j,equals:ue,equalsApproximately:Y,fromMat4:g,fromQuat:B,get3DScaling:z,getAxis:re,getScaling:ce,getTranslation:me,identity:ne,inverse:q,invert:oe,mul:N,mulScalar:R,multiply:fe,multiplyScalar:M,negate:P,rotate:L,rotateX:se,rotateY:ke,rotateZ:De,rotation:pe,rotationX:H,rotationY:be,rotationZ:Se,scale:Me,scale3D:we,scaling:Be,scaling3D:he,set:x,setAxis:le,setTranslation:C,translate:ye,translation:ae,transpose:$,uniformScale:T,uniformScale3D:p,uniformScaling:Pe,uniformScaling3D:U}}const Ct=new Map;function Pn(s){let n=Ct.get(s);return n||(n=Bn(s),Ct.set(s,n)),n}function Tn(s){const n=bt(s);function l(e,d,a,o,r,u,y,h,k,G,b,I,A,E,F,W){const Z=new s(16);return e!==void 0&&(Z[0]=e,d!==void 0&&(Z[1]=d,a!==void 0&&(Z[2]=a,o!==void 0&&(Z[3]=o,r!==void 0&&(Z[4]=r,u!==void 0&&(Z[5]=u,y!==void 0&&(Z[6]=y,h!==void 0&&(Z[7]=h,k!==void 0&&(Z[8]=k,G!==void 0&&(Z[9]=G,b!==void 0&&(Z[10]=b,I!==void 0&&(Z[11]=I,A!==void 0&&(Z[12]=A,E!==void 0&&(Z[13]=E,F!==void 0&&(Z[14]=F,W!==void 0&&(Z[15]=W)))))))))))))))),Z}function w(e,d,a,o,r,u,y,h,k,G,b,I,A,E,F,W,Z){const V=Z??new s(16);return V[0]=e,V[1]=d,V[2]=a,V[3]=o,V[4]=r,V[5]=u,V[6]=y,V[7]=h,V[8]=k,V[9]=G,V[10]=b,V[11]=I,V[12]=A,V[13]=E,V[14]=F,V[15]=W,V}function x(e,d){const a=d??new s(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=0,a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function g(e,d){const a=d??new s(16),o=e[0],r=e[1],u=e[2],y=e[3],h=o+o,k=r+r,G=u+u,b=o*h,I=r*h,A=r*k,E=u*h,F=u*k,W=u*G,Z=y*h,V=y*k,J=y*G;return a[0]=1-A-W,a[1]=I+J,a[2]=E-V,a[3]=0,a[4]=I-J,a[5]=1-b-W,a[6]=F+Z,a[7]=0,a[8]=E+V,a[9]=F-Z,a[10]=1-b-A,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function B(e,d){const a=d??new s(16);return a[0]=-e[0],a[1]=-e[1],a[2]=-e[2],a[3]=-e[3],a[4]=-e[4],a[5]=-e[5],a[6]=-e[6],a[7]=-e[7],a[8]=-e[8],a[9]=-e[9],a[10]=-e[10],a[11]=-e[11],a[12]=-e[12],a[13]=-e[13],a[14]=-e[14],a[15]=-e[15],a}function P(e,d,a){const o=a??new s(16);return o[0]=e[0]+d[0],o[1]=e[1]+d[1],o[2]=e[2]+d[2],o[3]=e[3]+d[3],o[4]=e[4]+d[4],o[5]=e[5]+d[5],o[6]=e[6]+d[6],o[7]=e[7]+d[7],o[8]=e[8]+d[8],o[9]=e[9]+d[9],o[10]=e[10]+d[10],o[11]=e[11]+d[11],o[12]=e[12]+d[12],o[13]=e[13]+d[13],o[14]=e[14]+d[14],o[15]=e[15]+d[15],o}function M(e,d,a){const o=a??new s(16);return o[0]=e[0]*d,o[1]=e[1]*d,o[2]=e[2]*d,o[3]=e[3]*d,o[4]=e[4]*d,o[5]=e[5]*d,o[6]=e[6]*d,o[7]=e[7]*d,o[8]=e[8]*d,o[9]=e[9]*d,o[10]=e[10]*d,o[11]=e[11]*d,o[12]=e[12]*d,o[13]=e[13]*d,o[14]=e[14]*d,o[15]=e[15]*d,o}const R=M;function O(e,d){const a=d??new s(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=e[3],a[4]=e[4],a[5]=e[5],a[6]=e[6],a[7]=e[7],a[8]=e[8],a[9]=e[9],a[10]=e[10],a[11]=e[11],a[12]=e[12],a[13]=e[13],a[14]=e[14],a[15]=e[15],a}const X=O;function D(e,d){return Math.abs(e[0]-d[0])<ve&&Math.abs(e[1]-d[1])<ve&&Math.abs(e[2]-d[2])<ve&&Math.abs(e[3]-d[3])<ve&&Math.abs(e[4]-d[4])<ve&&Math.abs(e[5]-d[5])<ve&&Math.abs(e[6]-d[6])<ve&&Math.abs(e[7]-d[7])<ve&&Math.abs(e[8]-d[8])<ve&&Math.abs(e[9]-d[9])<ve&&Math.abs(e[10]-d[10])<ve&&Math.abs(e[11]-d[11])<ve&&Math.abs(e[12]-d[12])<ve&&Math.abs(e[13]-d[13])<ve&&Math.abs(e[14]-d[14])<ve&&Math.abs(e[15]-d[15])<ve}function Y(e,d){return e[0]===d[0]&&e[1]===d[1]&&e[2]===d[2]&&e[3]===d[3]&&e[4]===d[4]&&e[5]===d[5]&&e[6]===d[6]&&e[7]===d[7]&&e[8]===d[8]&&e[9]===d[9]&&e[10]===d[10]&&e[11]===d[11]&&e[12]===d[12]&&e[13]===d[13]&&e[14]===d[14]&&e[15]===d[15]}function ue(e){const d=e??new s(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ne(e,d){const a=d??new s(16);if(a===e){let ie;return ie=e[1],e[1]=e[4],e[4]=ie,ie=e[2],e[2]=e[8],e[8]=ie,ie=e[3],e[3]=e[12],e[12]=ie,ie=e[6],e[6]=e[9],e[9]=ie,ie=e[7],e[7]=e[13],e[13]=ie,ie=e[11],e[11]=e[14],e[14]=ie,a}const o=e[0*4+0],r=e[0*4+1],u=e[0*4+2],y=e[0*4+3],h=e[1*4+0],k=e[1*4+1],G=e[1*4+2],b=e[1*4+3],I=e[2*4+0],A=e[2*4+1],E=e[2*4+2],F=e[2*4+3],W=e[3*4+0],Z=e[3*4+1],V=e[3*4+2],J=e[3*4+3];return a[0]=o,a[1]=h,a[2]=I,a[3]=W,a[4]=r,a[5]=k,a[6]=A,a[7]=Z,a[8]=u,a[9]=G,a[10]=E,a[11]=V,a[12]=y,a[13]=b,a[14]=F,a[15]=J,a}function $(e,d){const a=d??new s(16),o=e[0*4+0],r=e[0*4+1],u=e[0*4+2],y=e[0*4+3],h=e[1*4+0],k=e[1*4+1],G=e[1*4+2],b=e[1*4+3],I=e[2*4+0],A=e[2*4+1],E=e[2*4+2],F=e[2*4+3],W=e[3*4+0],Z=e[3*4+1],V=e[3*4+2],J=e[3*4+3],ie=E*J,K=V*F,te=G*J,de=V*b,Q=G*F,_e=E*b,xe=u*J,Te=V*y,Ae=u*F,ze=E*y,Ue=u*b,Ee=G*y,Ie=I*Z,Oe=W*A,Le=h*Z,ge=W*k,Ge=h*A,$e=I*k,Re=o*Z,Ze=W*r,Ye=o*A,Ke=I*r,Ce=o*k,qe=h*r,Dt=ie*k+de*A+Q*Z-(K*k+te*A+_e*Z),Ut=K*r+xe*A+ze*Z-(ie*r+Te*A+Ae*Z),It=te*r+Te*k+Ue*Z-(de*r+xe*k+Ee*Z),Rt=_e*r+Ae*k+Ee*A-(Q*r+ze*k+Ue*A),Fe=1/(o*Dt+h*Ut+I*It+W*Rt);return a[0]=Fe*Dt,a[1]=Fe*Ut,a[2]=Fe*It,a[3]=Fe*Rt,a[4]=Fe*(K*h+te*I+_e*W-(ie*h+de*I+Q*W)),a[5]=Fe*(ie*o+Te*I+Ae*W-(K*o+xe*I+ze*W)),a[6]=Fe*(de*o+xe*h+Ee*W-(te*o+Te*h+Ue*W)),a[7]=Fe*(Q*o+ze*h+Ue*I-(_e*o+Ae*h+Ee*I)),a[8]=Fe*(Ie*b+ge*F+Ge*J-(Oe*b+Le*F+$e*J)),a[9]=Fe*(Oe*y+Re*F+Ke*J-(Ie*y+Ze*F+Ye*J)),a[10]=Fe*(Le*y+Ze*b+Ce*J-(ge*y+Re*b+qe*J)),a[11]=Fe*($e*y+Ye*b+qe*F-(Ge*y+Ke*b+Ce*F)),a[12]=Fe*(Le*E+$e*V+Oe*G-(Ge*V+Ie*G+ge*E)),a[13]=Fe*(Ye*V+Ie*u+Ze*E-(Re*E+Ke*V+Oe*u)),a[14]=Fe*(Re*G+qe*V+ge*u-(Ce*V+Le*u+Ze*G)),a[15]=Fe*(Ce*E+Ge*u+Ke*G-(Ye*G+qe*E+$e*u)),a}function q(e){const d=e[0],a=e[0*4+1],o=e[0*4+2],r=e[0*4+3],u=e[1*4+0],y=e[1*4+1],h=e[1*4+2],k=e[1*4+3],G=e[2*4+0],b=e[2*4+1],I=e[2*4+2],A=e[2*4+3],E=e[3*4+0],F=e[3*4+1],W=e[3*4+2],Z=e[3*4+3],V=I*Z,J=W*A,ie=h*Z,K=W*k,te=h*A,de=I*k,Q=o*Z,_e=W*r,xe=o*A,Te=I*r,Ae=o*k,ze=h*r,Ue=V*y+K*b+te*F-(J*y+ie*b+de*F),Ee=J*a+Q*b+Te*F-(V*a+_e*b+xe*F),Ie=ie*a+_e*y+Ae*F-(K*a+Q*y+ze*F),Oe=de*a+xe*y+ze*b-(te*a+Te*y+Ae*b);return d*Ue+u*Ee+G*Ie+E*Oe}const j=$;function oe(e,d,a){const o=a??new s(16),r=e[0],u=e[1],y=e[2],h=e[3],k=e[4+0],G=e[4+1],b=e[4+2],I=e[4+3],A=e[8+0],E=e[8+1],F=e[8+2],W=e[8+3],Z=e[12+0],V=e[12+1],J=e[12+2],ie=e[12+3],K=d[0],te=d[1],de=d[2],Q=d[3],_e=d[4+0],xe=d[4+1],Te=d[4+2],Ae=d[4+3],ze=d[8+0],Ue=d[8+1],Ee=d[8+2],Ie=d[8+3],Oe=d[12+0],Le=d[12+1],ge=d[12+2],Ge=d[12+3];return o[0]=r*K+k*te+A*de+Z*Q,o[1]=u*K+G*te+E*de+V*Q,o[2]=y*K+b*te+F*de+J*Q,o[3]=h*K+I*te+W*de+ie*Q,o[4]=r*_e+k*xe+A*Te+Z*Ae,o[5]=u*_e+G*xe+E*Te+V*Ae,o[6]=y*_e+b*xe+F*Te+J*Ae,o[7]=h*_e+I*xe+W*Te+ie*Ae,o[8]=r*ze+k*Ue+A*Ee+Z*Ie,o[9]=u*ze+G*Ue+E*Ee+V*Ie,o[10]=y*ze+b*Ue+F*Ee+J*Ie,o[11]=h*ze+I*Ue+W*Ee+ie*Ie,o[12]=r*Oe+k*Le+A*ge+Z*Ge,o[13]=u*Oe+G*Le+E*ge+V*Ge,o[14]=y*Oe+b*Le+F*ge+J*Ge,o[15]=h*Oe+I*Le+W*ge+ie*Ge,o}const fe=oe;function N(e,d,a){const o=a??ue();return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11]),o[12]=d[0],o[13]=d[1],o[14]=d[2],o[15]=1,o}function C(e,d){const a=d??n.create();return a[0]=e[12],a[1]=e[13],a[2]=e[14],a}function me(e,d,a){const o=a??n.create(),r=d*4;return o[0]=e[r+0],o[1]=e[r+1],o[2]=e[r+2],o}function re(e,d,a,o){const r=o===e?o:O(e,o),u=a*4;return r[u+0]=d[0],r[u+1]=d[1],r[u+2]=d[2],r}function le(e,d){const a=d??n.create(),o=e[0],r=e[1],u=e[2],y=e[4],h=e[5],k=e[6],G=e[8],b=e[9],I=e[10];return a[0]=Math.sqrt(o*o+r*r+u*u),a[1]=Math.sqrt(y*y+h*h+k*k),a[2]=Math.sqrt(G*G+b*b+I*I),a}function ce(e,d,a,o,r){const u=r??new s(16),y=Math.tan(Math.PI*.5-.5*e);if(u[0]=y/d,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=y,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,Number.isFinite(o)){const h=1/(a-o);u[10]=o*h,u[14]=o*a*h}else u[10]=-1,u[14]=-a;return u}function z(e,d,a,o=1/0,r){const u=r??new s(16),y=1/Math.tan(e*.5);if(u[0]=y/d,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=y,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,o===1/0)u[10]=0,u[14]=a;else{const h=1/(o-a);u[10]=a*h,u[14]=o*a*h}return u}function ae(e,d,a,o,r,u,y){const h=y??new s(16);return h[0]=2/(d-e),h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2/(o-a),h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1/(r-u),h[11]=0,h[12]=(d+e)/(e-d),h[13]=(o+a)/(a-o),h[14]=r/(r-u),h[15]=1,h}function ye(e,d,a,o,r,u,y){const h=y??new s(16),k=d-e,G=o-a,b=r-u;return h[0]=2*r/k,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*r/G,h[6]=0,h[7]=0,h[8]=(e+d)/k,h[9]=(o+a)/G,h[10]=u/b,h[11]=-1,h[12]=0,h[13]=0,h[14]=r*u/b,h[15]=0,h}function pe(e,d,a,o,r,u=1/0,y){const h=y??new s(16),k=d-e,G=o-a;if(h[0]=2*r/k,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*r/G,h[6]=0,h[7]=0,h[8]=(e+d)/k,h[9]=(o+a)/G,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,u===1/0)h[10]=0,h[14]=r;else{const b=1/(u-r);h[10]=r*b,h[14]=u*r*b}return h}const L=n.create(),H=n.create(),se=n.create();function be(e,d,a,o){const r=o??new s(16);return n.normalize(n.subtract(d,e,se),se),n.normalize(n.cross(a,se,L),L),n.normalize(n.cross(se,L,H),H),r[0]=L[0],r[1]=L[1],r[2]=L[2],r[3]=0,r[4]=H[0],r[5]=H[1],r[6]=H[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function ke(e,d,a,o){const r=o??new s(16);return n.normalize(n.subtract(e,d,se),se),n.normalize(n.cross(a,se,L),L),n.normalize(n.cross(se,L,H),H),r[0]=L[0],r[1]=L[1],r[2]=L[2],r[3]=0,r[4]=H[0],r[5]=H[1],r[6]=H[2],r[7]=0,r[8]=se[0],r[9]=se[1],r[10]=se[2],r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function Se(e,d,a,o){const r=o??new s(16);return n.normalize(n.subtract(e,d,se),se),n.normalize(n.cross(a,se,L),L),n.normalize(n.cross(se,L,H),H),r[0]=L[0],r[1]=H[0],r[2]=se[0],r[3]=0,r[4]=L[1],r[5]=H[1],r[6]=se[1],r[7]=0,r[8]=L[2],r[9]=H[2],r[10]=se[2],r[11]=0,r[12]=-(L[0]*e[0]+L[1]*e[1]+L[2]*e[2]),r[13]=-(H[0]*e[0]+H[1]*e[1]+H[2]*e[2]),r[14]=-(se[0]*e[0]+se[1]*e[1]+se[2]*e[2]),r[15]=1,r}function De(e,d){const a=d??new s(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e[0],a[13]=e[1],a[14]=e[2],a[15]=1,a}function Be(e,d,a){const o=a??new s(16),r=d[0],u=d[1],y=d[2],h=e[0],k=e[1],G=e[2],b=e[3],I=e[1*4+0],A=e[1*4+1],E=e[1*4+2],F=e[1*4+3],W=e[2*4+0],Z=e[2*4+1],V=e[2*4+2],J=e[2*4+3],ie=e[3*4+0],K=e[3*4+1],te=e[3*4+2],de=e[3*4+3];return e!==o&&(o[0]=h,o[1]=k,o[2]=G,o[3]=b,o[4]=I,o[5]=A,o[6]=E,o[7]=F,o[8]=W,o[9]=Z,o[10]=V,o[11]=J),o[12]=h*r+I*u+W*y+ie,o[13]=k*r+A*u+Z*y+K,o[14]=G*r+E*u+V*y+te,o[15]=b*r+F*u+J*y+de,o}function Me(e,d){const a=d??new s(16),o=Math.cos(e),r=Math.sin(e);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=o,a[6]=r,a[7]=0,a[8]=0,a[9]=-r,a[10]=o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function he(e,d,a){const o=a??new s(16),r=e[4],u=e[5],y=e[6],h=e[7],k=e[8],G=e[9],b=e[10],I=e[11],A=Math.cos(d),E=Math.sin(d);return o[4]=A*r+E*k,o[5]=A*u+E*G,o[6]=A*y+E*b,o[7]=A*h+E*I,o[8]=A*k-E*r,o[9]=A*G-E*u,o[10]=A*b-E*y,o[11]=A*I-E*h,e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function we(e,d){const a=d??new s(16),o=Math.cos(e),r=Math.sin(e);return a[0]=o,a[1]=0,a[2]=-r,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=r,a[9]=0,a[10]=o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function Pe(e,d,a){const o=a??new s(16),r=e[0*4+0],u=e[0*4+1],y=e[0*4+2],h=e[0*4+3],k=e[2*4+0],G=e[2*4+1],b=e[2*4+2],I=e[2*4+3],A=Math.cos(d),E=Math.sin(d);return o[0]=A*r-E*k,o[1]=A*u-E*G,o[2]=A*y-E*b,o[3]=A*h-E*I,o[8]=A*k+E*r,o[9]=A*G+E*u,o[10]=A*b+E*y,o[11]=A*I+E*h,e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function T(e,d){const a=d??new s(16),o=Math.cos(e),r=Math.sin(e);return a[0]=o,a[1]=r,a[2]=0,a[3]=0,a[4]=-r,a[5]=o,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function U(e,d,a){const o=a??new s(16),r=e[0*4+0],u=e[0*4+1],y=e[0*4+2],h=e[0*4+3],k=e[1*4+0],G=e[1*4+1],b=e[1*4+2],I=e[1*4+3],A=Math.cos(d),E=Math.sin(d);return o[0]=A*r+E*k,o[1]=A*u+E*G,o[2]=A*y+E*b,o[3]=A*h+E*I,o[4]=A*k-E*r,o[5]=A*G-E*u,o[6]=A*b-E*y,o[7]=A*I-E*h,e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function p(e,d,a){const o=a??new s(16);let r=e[0],u=e[1],y=e[2];const h=Math.sqrt(r*r+u*u+y*y);r/=h,u/=h,y/=h;const k=r*r,G=u*u,b=y*y,I=Math.cos(d),A=Math.sin(d),E=1-I;return o[0]=k+(1-k)*I,o[1]=r*u*E+y*A,o[2]=r*y*E-u*A,o[3]=0,o[4]=r*u*E-y*A,o[5]=G+(1-G)*I,o[6]=u*y*E+r*A,o[7]=0,o[8]=r*y*E+u*A,o[9]=u*y*E-r*A,o[10]=b+(1-b)*I,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const t=p;function c(e,d,a,o){const r=o??new s(16);let u=d[0],y=d[1],h=d[2];const k=Math.sqrt(u*u+y*y+h*h);u/=k,y/=k,h/=k;const G=u*u,b=y*y,I=h*h,A=Math.cos(a),E=Math.sin(a),F=1-A,W=G+(1-G)*A,Z=u*y*F+h*E,V=u*h*F-y*E,J=u*y*F-h*E,ie=b+(1-b)*A,K=y*h*F+u*E,te=u*h*F+y*E,de=y*h*F-u*E,Q=I+(1-I)*A,_e=e[0],xe=e[1],Te=e[2],Ae=e[3],ze=e[4],Ue=e[5],Ee=e[6],Ie=e[7],Oe=e[8],Le=e[9],ge=e[10],Ge=e[11];return r[0]=W*_e+Z*ze+V*Oe,r[1]=W*xe+Z*Ue+V*Le,r[2]=W*Te+Z*Ee+V*ge,r[3]=W*Ae+Z*Ie+V*Ge,r[4]=J*_e+ie*ze+K*Oe,r[5]=J*xe+ie*Ue+K*Le,r[6]=J*Te+ie*Ee+K*ge,r[7]=J*Ae+ie*Ie+K*Ge,r[8]=te*_e+de*ze+Q*Oe,r[9]=te*xe+de*Ue+Q*Le,r[10]=te*Te+de*Ee+Q*ge,r[11]=te*Ae+de*Ie+Q*Ge,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}const i=c;function f(e,d){const a=d??new s(16);return a[0]=e[0],a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e[1],a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function _(e,d,a){const o=a??new s(16),r=d[0],u=d[1],y=d[2];return o[0]=r*e[0*4+0],o[1]=r*e[0*4+1],o[2]=r*e[0*4+2],o[3]=r*e[0*4+3],o[4]=u*e[1*4+0],o[5]=u*e[1*4+1],o[6]=u*e[1*4+2],o[7]=u*e[1*4+3],o[8]=y*e[2*4+0],o[9]=y*e[2*4+1],o[10]=y*e[2*4+2],o[11]=y*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}function m(e,d){const a=d??new s(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=e,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function v(e,d,a){const o=a??new s(16);return o[0]=d*e[0*4+0],o[1]=d*e[0*4+1],o[2]=d*e[0*4+2],o[3]=d*e[0*4+3],o[4]=d*e[1*4+0],o[5]=d*e[1*4+1],o[6]=d*e[1*4+2],o[7]=d*e[1*4+3],o[8]=d*e[2*4+0],o[9]=d*e[2*4+1],o[10]=d*e[2*4+2],o[11]=d*e[2*4+3],e!==o&&(o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o}return{add:P,aim:be,axisRotate:c,axisRotation:p,cameraAim:ke,clone:X,copy:O,create:l,determinant:q,equals:Y,equalsApproximately:D,fromMat3:x,fromQuat:g,frustum:ye,frustumReverseZ:pe,getAxis:me,getScaling:le,getTranslation:C,identity:ue,inverse:$,invert:j,lookAt:Se,mul:fe,mulScalar:R,multiply:oe,multiplyScalar:M,negate:B,ortho:ae,perspective:ce,perspectiveReverseZ:z,rotate:i,rotateX:he,rotateY:Pe,rotateZ:U,rotation:t,rotationX:Me,rotationY:we,rotationZ:T,scale:_,scaling:f,set:w,setAxis:re,setTranslation:N,translate:Be,translation:De,transpose:ne,uniformScale:v,uniformScaling:m}}const Ft=new Map;function kn(s){let n=Ft.get(s);return n||(n=Tn(s),Ft.set(s,n)),n}function Mn(s){const n=bt(s);function l(T,U,p,t){const c=new s(4);return T!==void 0&&(c[0]=T,U!==void 0&&(c[1]=U,p!==void 0&&(c[2]=p,t!==void 0&&(c[3]=t)))),c}const w=l;function x(T,U,p,t,c){const i=c??new s(4);return i[0]=T,i[1]=U,i[2]=p,i[3]=t,i}function g(T,U,p){const t=p??new s(4),c=U*.5,i=Math.sin(c);return t[0]=i*T[0],t[1]=i*T[1],t[2]=i*T[2],t[3]=Math.cos(c),t}function B(T,U){const p=U??n.create(3),t=Math.acos(T[3])*2,c=Math.sin(t*.5);return c>ve?(p[0]=T[0]/c,p[1]=T[1]/c,p[2]=T[2]/c):(p[0]=1,p[1]=0,p[2]=0),{angle:t,axis:p}}function P(T,U){const p=ce(T,U);return Math.acos(2*p*p-1)}function M(T,U,p){const t=p??new s(4),c=T[0],i=T[1],f=T[2],_=T[3],m=U[0],v=U[1],e=U[2],d=U[3];return t[0]=c*d+_*m+i*e-f*v,t[1]=i*d+_*v+f*m-c*e,t[2]=f*d+_*e+c*v-i*m,t[3]=_*d-c*m-i*v-f*e,t}const R=M;function O(T,U,p){const t=p??new s(4),c=U*.5,i=T[0],f=T[1],_=T[2],m=T[3],v=Math.sin(c),e=Math.cos(c);return t[0]=i*e+m*v,t[1]=f*e+_*v,t[2]=_*e-f*v,t[3]=m*e-i*v,t}function X(T,U,p){const t=p??new s(4),c=U*.5,i=T[0],f=T[1],_=T[2],m=T[3],v=Math.sin(c),e=Math.cos(c);return t[0]=i*e-_*v,t[1]=f*e+m*v,t[2]=_*e+i*v,t[3]=m*e-f*v,t}function D(T,U,p){const t=p??new s(4),c=U*.5,i=T[0],f=T[1],_=T[2],m=T[3],v=Math.sin(c),e=Math.cos(c);return t[0]=i*e+f*v,t[1]=f*e-i*v,t[2]=_*e+m*v,t[3]=m*e-_*v,t}function Y(T,U,p,t){const c=t??new s(4),i=T[0],f=T[1],_=T[2],m=T[3];let v=U[0],e=U[1],d=U[2],a=U[3],o=i*v+f*e+_*d+m*a;o<0&&(o=-o,v=-v,e=-e,d=-d,a=-a);let r,u;if(1-o>ve){const y=Math.acos(o),h=Math.sin(y);r=Math.sin((1-p)*y)/h,u=Math.sin(p*y)/h}else r=1-p,u=p;return c[0]=r*i+u*v,c[1]=r*f+u*e,c[2]=r*_+u*d,c[3]=r*m+u*a,c}function ue(T,U){const p=U??new s(4),t=T[0],c=T[1],i=T[2],f=T[3],_=t*t+c*c+i*i+f*f,m=_?1/_:0;return p[0]=-t*m,p[1]=-c*m,p[2]=-i*m,p[3]=f*m,p}function ne(T,U){const p=U??new s(4);return p[0]=-T[0],p[1]=-T[1],p[2]=-T[2],p[3]=T[3],p}function $(T,U){const p=U??new s(4),t=T[0]+T[5]+T[10];if(t>0){const c=Math.sqrt(t+1);p[3]=.5*c;const i=.5/c;p[0]=(T[6]-T[9])*i,p[1]=(T[8]-T[2])*i,p[2]=(T[1]-T[4])*i}else{let c=0;T[5]>T[0]&&(c=1),T[10]>T[c*4+c]&&(c=2);const i=(c+1)%3,f=(c+2)%3,_=Math.sqrt(T[c*4+c]-T[i*4+i]-T[f*4+f]+1);p[c]=.5*_;const m=.5/_;p[3]=(T[i*4+f]-T[f*4+i])*m,p[i]=(T[i*4+c]+T[c*4+i])*m,p[f]=(T[f*4+c]+T[c*4+f])*m}return p}function q(T,U,p,t,c){const i=c??new s(4),f=T*.5,_=U*.5,m=p*.5,v=Math.sin(f),e=Math.cos(f),d=Math.sin(_),a=Math.cos(_),o=Math.sin(m),r=Math.cos(m);switch(t){case"xyz":i[0]=v*a*r+e*d*o,i[1]=e*d*r-v*a*o,i[2]=e*a*o+v*d*r,i[3]=e*a*r-v*d*o;break;case"xzy":i[0]=v*a*r-e*d*o,i[1]=e*d*r-v*a*o,i[2]=e*a*o+v*d*r,i[3]=e*a*r+v*d*o;break;case"yxz":i[0]=v*a*r+e*d*o,i[1]=e*d*r-v*a*o,i[2]=e*a*o-v*d*r,i[3]=e*a*r+v*d*o;break;case"yzx":i[0]=v*a*r+e*d*o,i[1]=e*d*r+v*a*o,i[2]=e*a*o-v*d*r,i[3]=e*a*r-v*d*o;break;case"zxy":i[0]=v*a*r-e*d*o,i[1]=e*d*r+v*a*o,i[2]=e*a*o+v*d*r,i[3]=e*a*r-v*d*o;break;case"zyx":i[0]=v*a*r-e*d*o,i[1]=e*d*r+v*a*o,i[2]=e*a*o-v*d*r,i[3]=e*a*r+v*d*o;break;default:throw new Error(`Unknown rotation order: ${t}`)}return i}function j(T,U){const p=U??new s(4);return p[0]=T[0],p[1]=T[1],p[2]=T[2],p[3]=T[3],p}const oe=j;function fe(T,U,p){const t=p??new s(4);return t[0]=T[0]+U[0],t[1]=T[1]+U[1],t[2]=T[2]+U[2],t[3]=T[3]+U[3],t}function N(T,U,p){const t=p??new s(4);return t[0]=T[0]-U[0],t[1]=T[1]-U[1],t[2]=T[2]-U[2],t[3]=T[3]-U[3],t}const C=N;function me(T,U,p){const t=p??new s(4);return t[0]=T[0]*U,t[1]=T[1]*U,t[2]=T[2]*U,t[3]=T[3]*U,t}const re=me;function le(T,U,p){const t=p??new s(4);return t[0]=T[0]/U,t[1]=T[1]/U,t[2]=T[2]/U,t[3]=T[3]/U,t}function ce(T,U){return T[0]*U[0]+T[1]*U[1]+T[2]*U[2]+T[3]*U[3]}function z(T,U,p,t){const c=t??new s(4);return c[0]=T[0]+p*(U[0]-T[0]),c[1]=T[1]+p*(U[1]-T[1]),c[2]=T[2]+p*(U[2]-T[2]),c[3]=T[3]+p*(U[3]-T[3]),c}function ae(T){const U=T[0],p=T[1],t=T[2],c=T[3];return Math.sqrt(U*U+p*p+t*t+c*c)}const ye=ae;function pe(T){const U=T[0],p=T[1],t=T[2],c=T[3];return U*U+p*p+t*t+c*c}const L=pe;function H(T,U){const p=U??new s(4),t=T[0],c=T[1],i=T[2],f=T[3],_=Math.sqrt(t*t+c*c+i*i+f*f);return _>1e-5?(p[0]=t/_,p[1]=c/_,p[2]=i/_,p[3]=f/_):(p[0]=0,p[1]=0,p[2]=0,p[3]=1),p}function se(T,U){return Math.abs(T[0]-U[0])<ve&&Math.abs(T[1]-U[1])<ve&&Math.abs(T[2]-U[2])<ve&&Math.abs(T[3]-U[3])<ve}function be(T,U){return T[0]===U[0]&&T[1]===U[1]&&T[2]===U[2]&&T[3]===U[3]}function ke(T){const U=T??new s(4);return U[0]=0,U[1]=0,U[2]=0,U[3]=1,U}const Se=n.create(),De=n.create(),Be=n.create();function Me(T,U,p){const t=p??new s(4),c=n.dot(T,U);return c<-.999999?(n.cross(De,T,Se),n.len(Se)<1e-6&&n.cross(Be,T,Se),n.normalize(Se,Se),g(Se,Math.PI,t),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(n.cross(T,U,Se),t[0]=Se[0],t[1]=Se[1],t[2]=Se[2],t[3]=1+c,H(t,t))}const he=new s(4),we=new s(4);function Pe(T,U,p,t,c,i){const f=i??new s(4);return Y(T,t,c,he),Y(U,p,c,we),Y(he,we,2*c*(1-c),f),f}return{create:l,fromValues:w,set:x,fromAxisAngle:g,toAxisAngle:B,angle:P,multiply:M,mul:R,rotateX:O,rotateY:X,rotateZ:D,slerp:Y,inverse:ue,conjugate:ne,fromMat:$,fromEuler:q,copy:j,clone:oe,add:fe,subtract:N,sub:C,mulScalar:me,scale:re,divScalar:le,dot:ce,lerp:z,length:ae,len:ye,lengthSq:pe,lenSq:L,normalize:H,equalsApproximately:se,equals:be,identity:ke,rotationTo:Me,sqlerp:Pe}}const Wt=new Map;function Gn(s){let n=Wt.get(s);return n||(n=Mn(s),Wt.set(s,n)),n}function An(s){function n(p,t,c,i){const f=new s(4);return p!==void 0&&(f[0]=p,t!==void 0&&(f[1]=t,c!==void 0&&(f[2]=c,i!==void 0&&(f[3]=i)))),f}const l=n;function w(p,t,c,i,f){const _=f??new s(4);return _[0]=p,_[1]=t,_[2]=c,_[3]=i,_}function x(p,t){const c=t??new s(4);return c[0]=Math.ceil(p[0]),c[1]=Math.ceil(p[1]),c[2]=Math.ceil(p[2]),c[3]=Math.ceil(p[3]),c}function g(p,t){const c=t??new s(4);return c[0]=Math.floor(p[0]),c[1]=Math.floor(p[1]),c[2]=Math.floor(p[2]),c[3]=Math.floor(p[3]),c}function B(p,t){const c=t??new s(4);return c[0]=Math.round(p[0]),c[1]=Math.round(p[1]),c[2]=Math.round(p[2]),c[3]=Math.round(p[3]),c}function P(p,t=0,c=1,i){const f=i??new s(4);return f[0]=Math.min(c,Math.max(t,p[0])),f[1]=Math.min(c,Math.max(t,p[1])),f[2]=Math.min(c,Math.max(t,p[2])),f[3]=Math.min(c,Math.max(t,p[3])),f}function M(p,t,c){const i=c??new s(4);return i[0]=p[0]+t[0],i[1]=p[1]+t[1],i[2]=p[2]+t[2],i[3]=p[3]+t[3],i}function R(p,t,c,i){const f=i??new s(4);return f[0]=p[0]+t[0]*c,f[1]=p[1]+t[1]*c,f[2]=p[2]+t[2]*c,f[3]=p[3]+t[3]*c,f}function O(p,t,c){const i=c??new s(4);return i[0]=p[0]-t[0],i[1]=p[1]-t[1],i[2]=p[2]-t[2],i[3]=p[3]-t[3],i}const X=O;function D(p,t){return Math.abs(p[0]-t[0])<ve&&Math.abs(p[1]-t[1])<ve&&Math.abs(p[2]-t[2])<ve&&Math.abs(p[3]-t[3])<ve}function Y(p,t){return p[0]===t[0]&&p[1]===t[1]&&p[2]===t[2]&&p[3]===t[3]}function ue(p,t,c,i){const f=i??new s(4);return f[0]=p[0]+c*(t[0]-p[0]),f[1]=p[1]+c*(t[1]-p[1]),f[2]=p[2]+c*(t[2]-p[2]),f[3]=p[3]+c*(t[3]-p[3]),f}function ne(p,t,c,i){const f=i??new s(4);return f[0]=p[0]+c[0]*(t[0]-p[0]),f[1]=p[1]+c[1]*(t[1]-p[1]),f[2]=p[2]+c[2]*(t[2]-p[2]),f[3]=p[3]+c[3]*(t[3]-p[3]),f}function $(p,t,c){const i=c??new s(4);return i[0]=Math.max(p[0],t[0]),i[1]=Math.max(p[1],t[1]),i[2]=Math.max(p[2],t[2]),i[3]=Math.max(p[3],t[3]),i}function q(p,t,c){const i=c??new s(4);return i[0]=Math.min(p[0],t[0]),i[1]=Math.min(p[1],t[1]),i[2]=Math.min(p[2],t[2]),i[3]=Math.min(p[3],t[3]),i}function j(p,t,c){const i=c??new s(4);return i[0]=p[0]*t,i[1]=p[1]*t,i[2]=p[2]*t,i[3]=p[3]*t,i}const oe=j;function fe(p,t,c){const i=c??new s(4);return i[0]=p[0]/t,i[1]=p[1]/t,i[2]=p[2]/t,i[3]=p[3]/t,i}function N(p,t){const c=t??new s(4);return c[0]=1/p[0],c[1]=1/p[1],c[2]=1/p[2],c[3]=1/p[3],c}const C=N;function me(p,t){return p[0]*t[0]+p[1]*t[1]+p[2]*t[2]+p[3]*t[3]}function re(p){const t=p[0],c=p[1],i=p[2],f=p[3];return Math.sqrt(t*t+c*c+i*i+f*f)}const le=re;function ce(p){const t=p[0],c=p[1],i=p[2],f=p[3];return t*t+c*c+i*i+f*f}const z=ce;function ae(p,t){const c=p[0]-t[0],i=p[1]-t[1],f=p[2]-t[2],_=p[3]-t[3];return Math.sqrt(c*c+i*i+f*f+_*_)}const ye=ae;function pe(p,t){const c=p[0]-t[0],i=p[1]-t[1],f=p[2]-t[2],_=p[3]-t[3];return c*c+i*i+f*f+_*_}const L=pe;function H(p,t){const c=t??new s(4),i=p[0],f=p[1],_=p[2],m=p[3],v=Math.sqrt(i*i+f*f+_*_+m*m);return v>1e-5?(c[0]=i/v,c[1]=f/v,c[2]=_/v,c[3]=m/v):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function se(p,t){const c=t??new s(4);return c[0]=-p[0],c[1]=-p[1],c[2]=-p[2],c[3]=-p[3],c}function be(p,t){const c=t??new s(4);return c[0]=p[0],c[1]=p[1],c[2]=p[2],c[3]=p[3],c}const ke=be;function Se(p,t,c){const i=c??new s(4);return i[0]=p[0]*t[0],i[1]=p[1]*t[1],i[2]=p[2]*t[2],i[3]=p[3]*t[3],i}const De=Se;function Be(p,t,c){const i=c??new s(4);return i[0]=p[0]/t[0],i[1]=p[1]/t[1],i[2]=p[2]/t[2],i[3]=p[3]/t[3],i}const Me=Be;function he(p){const t=p??new s(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function we(p,t,c){const i=c??new s(4),f=p[0],_=p[1],m=p[2],v=p[3];return i[0]=t[0]*f+t[4]*_+t[8]*m+t[12]*v,i[1]=t[1]*f+t[5]*_+t[9]*m+t[13]*v,i[2]=t[2]*f+t[6]*_+t[10]*m+t[14]*v,i[3]=t[3]*f+t[7]*_+t[11]*m+t[15]*v,i}function Pe(p,t,c){const i=c??new s(4);return H(p,i),j(i,t,i)}function T(p,t,c){const i=c??new s(4);return re(p)>t?Pe(p,t,i):be(p,i)}function U(p,t,c){const i=c??new s(4);return ue(p,t,.5,i)}return{create:n,fromValues:l,set:w,ceil:x,floor:g,round:B,clamp:P,add:M,addScaled:R,subtract:O,sub:X,equalsApproximately:D,equals:Y,lerp:ue,lerpV:ne,max:$,min:q,mulScalar:j,scale:oe,divScalar:fe,inverse:N,invert:C,dot:me,length:re,len:le,lengthSq:ce,lenSq:z,distance:ae,dist:ye,distanceSq:pe,distSq:L,normalize:H,negate:se,copy:be,clone:ke,multiply:Se,mul:De,divide:Be,div:Me,zero:he,transformMat4:we,setLength:Pe,truncate:T,midpoint:U}}const $t=new Map;function zn(s){let n=$t.get(s);return n||(n=An(s),$t.set(s,n)),n}function At(s,n,l,w,x,g){return{mat3:Pn(s),mat4:kn(n),quat:Gn(l),vec2:sn(w),vec3:bt(x),vec4:zn(g)}}const{mat3:Bt,mat4:He,quat:Ne,vec2:qt,vec3:ee,vec4:Ds}=At(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);At(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);At(wn,Array,Array,Array,Array,Array);const Nt=document.querySelector("#log");let je=null,it=null;function rn(){if(je)return je;je=document.createElement("div"),je.className="ply-spinner-overlay";const s=document.createElement("div");return s.className="ply-spinner",je.appendChild(s),it=document.createElement("div"),it.className="ply-spinner-label",je.appendChild(it),je.style.display="none",document.body.appendChild(je),je}function En(s){rn(),it&&s&&(it.textContent=s),je&&(je.style.opacity="1",je.style.display="flex")}function ft(s){rn(),it&&(it.textContent=s)}function Dn(){if(!je)return;const s=je;s.style.opacity="0",setTimeout(()=>{s.style.opacity==="0"&&(s.style.display="none")},220)}function an(s,n){if(!Nt)return;const l=document.createElement("p");l.innerText=s,n&&Object.assign(l.style,n),Nt.appendChild(l)}async function We(s){console.log(s),an(s)}async function Un(s){console.error(s),an(s,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let on;function In(){on=performance.now()}function Ht(s){const n=performance.now()-on;We(`⏱️ ${s} Time: ${n.toFixed(0)} ms`)}function Rn(s,n){return 2*Math.atan(n/(2*s))}function On(s,n,l,w){const x=Math.tan(w/2),g=Math.tan(l/2),B=x*s,P=-B,M=g*s,R=-M,O=He.create();return O[0]=2*s/(M-R),O[5]=-2*s/(B-P),O[2]=(M+R)/(M-R),O[6]=(B+P)/(B-P),O[14]=1,O[10]=n/(n-s),O[11]=-(n*s)/(n-s),He.transpose(O,O),O}async function Ln(s){We(`loading scene camera file... : ${s}`);const l=await(await fetch(s)).json();return We(`loaded cameras count: ${l.length}`),l.map(w=>{const x=ee.clone(w.position),g=Bt.create(...w.rotation.flat()),B=g[0],P=g[4],M=g[8],R=g[1],O=g[5],X=g[9],D=g[2],Y=g[6],ue=g[10];B*(O*ue-X*Y)-P*(R*ue-X*D)+M*(R*Y-O*D)<0&&(g[1]=-g[1],g[5]=-g[5],g[9]=-g[9]);const $=He.fromMat3(g);return{position:x,rotation:$,img_name:w.img_name,id:w.id}})}const Cn=4*2,Fn=4*16,ln=4*Fn+2*Cn;function Wn(s){return s.createBuffer({label:"camera uniform",size:ln,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const nt=new Float32Array(ln/Float32Array.BYTES_PER_ELEMENT),yt=class yt{constructor(n,l){S(this,"_renderSize",null);S(this,"uniform_buffer");S(this,"position",ee.create());S(this,"rotation",He.create());S(this,"zfar",100);S(this,"fovY",45/180*Math.PI);S(this,"fovX");S(this,"focalRatioX",1);S(this,"focal",qt.create());S(this,"viewport",qt.create());S(this,"view_matrix",He.identity());S(this,"view_inv_matrix",He.identity());S(this,"proj_matrix",He.identity());S(this,"proj_inv_matrix",He.identity());S(this,"_negPos",ee.create());S(this,"look",ee.create(0,0,1));S(this,"up",ee.create(0,1,0));S(this,"right",ee.create(1,0,0));this.canvas=n,this.device=l,this.uniform_buffer=l?Wn(l):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(n,l){this._renderSize=[n,l],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const n=this._renderSize?this._renderSize[0]:this.canvas.width,l=this._renderSize?this._renderSize[1]:this.canvas.height,w=.5*l/Math.tan(this.fovY*.5);this.focal[0]=w*this.focalRatioX,this.focal[1]=w,this.fovX=Rn(this.focal[0],n),this.viewport[0]=n,this.viewport[1]=l,this.proj_matrix=On(.01,this.zfar,this.fovX,this.fovY),He.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],He.copy(this.rotation,this.view_matrix),He.translate(this.view_matrix,this._negPos,this.view_matrix),He.inverse(this.view_matrix,this.view_inv_matrix),ee.transformMat4Upper3x3(yt.Z_AXIS,this.view_inv_matrix,this.look),ee.normalize(this.look,this.look),ee.cross(this.up,this.look,this.right),ee.normalize(this.right,this.right);let n=0;nt.set(this.view_matrix,n),n+=16,nt.set(this.view_inv_matrix,n),n+=16,nt.set(this.proj_matrix,n),n+=16,nt.set(this.proj_inv_matrix,n),n+=16,nt.set(this.viewport,n),n+=2,nt.set(this.focal,n),n+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,nt)}set_preset(n){ee.copy(n.position,this.position),He.copy(n.rotation,this.rotation),this.update_buffer()}setFov(n){this.fovY=n,this.on_update_canvas()}setFocalRatio(n){this.focalRatioX=n,this.on_update_canvas()}getFov(){return this.fovY}};S(yt,"Z_AXIS",ee.create(0,0,1));let Pt=yt;const $n=ee.create(1,0,0),qn=ee.create(0,1,0),Nn=ee.create(0,0,1);function Hn(s,n){const l=s[0],w=s[4],x=s[8],g=s[1],B=s[5],P=s[9],M=s[2],R=s[6],O=s[10],X=l+B+O;let D,Y,ue,ne;if(X>0){const $=.5/Math.sqrt(X+1);D=.25/$,Y=(R-P)*$,ue=(x-M)*$,ne=(g-w)*$}else if(l>B&&l>O){const $=2*Math.sqrt(1+l-B-O);D=(R-P)/$,Y=.25*$,ue=(w+g)/$,ne=(x+M)/$}else if(B>O){const $=2*Math.sqrt(1+B-l-O);D=(x-M)/$,Y=(w+g)/$,ue=.25*$,ne=(P+R)/$}else{const $=2*Math.sqrt(1+O-l-B);D=(g-w)/$,Y=(x+M)/$,ue=(P+R)/$,ne=.25*$}return n[0]=Y,n[1]=ue,n[2]=ne,n[3]=D,n}class jn{constructor(n){S(this,"element");S(this,"enabled",!0);S(this,"center",ee.create(0,0,0));S(this,"up",ee.create(0,1,0));S(this,"rotation",[0,0]);S(this,"shift",[0,0]);S(this,"scroll",0);S(this,"speed",.1);S(this,"sensitivity",.08);S(this,"leftPressed",!1);S(this,"rightPressed",!1);S(this,"leftDragPans",!1);S(this,"lastX",0);S(this,"lastY",0);S(this,"touches",new Map);S(this,"lastTouchCenter",null);S(this,"lastPinchDistance",null);S(this,"lastTwoFingerAngle",null);S(this,"lastTouchCount",0);S(this,"roll",0);S(this,"_dir",ee.create());S(this,"_right",ee.create());S(this,"_upCam",ee.create());S(this,"_scratch",ee.create());S(this,"_qY",Ne.create());S(this,"_qX",Ne.create());S(this,"_qRot",Ne.create());S(this,"_qZ",Ne.create());S(this,"_qLocal",Ne.create());S(this,"_qWorldToCam",Ne.create());S(this,"_scratchMat3",Bt.create());S(this,"bboxMin",null);S(this,"bboxMax",null);S(this,"anchor",ee.create(0,0,0));S(this,"downCallback",n=>{var l,w,x,g;if(this.enabled){if(n.pointerType==="touch"){this.touches.set(n.pointerId,{x:n.pageX,y:n.pageY}),this.handleTouchGestures(),(w=(l=n.target)==null?void 0:l.setPointerCapture)==null||w.call(l,n.pointerId),n.preventDefault();return}n.isPrimary&&(n.button===0?(this.leftPressed=!0,this.leftDragPans=n.shiftKey):n.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=n.pageX,this.lastY=n.pageY,(g=(x=n.target)==null?void 0:x.setPointerCapture)==null||g.call(x,n.pointerId),n.preventDefault())}});S(this,"moveCallback",n=>{if(!this.enabled)return;if(n.pointerType==="touch"){if(!this.touches.has(n.pointerId))return;this.touches.set(n.pointerId,{x:n.pageX,y:n.pageY}),this.handleTouchGestures(),n.preventDefault();return}if(!n.isPrimary||!this.leftPressed&&!this.rightPressed)return;n.preventDefault();const l=n.pageX-this.lastX,w=n.pageY-this.lastY;this.lastX=n.pageX,this.lastY=n.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=l,this.rotation[1]-=w):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=l,this.shift[0]+=w)});S(this,"upCallback",n=>{var l,w,x,g;if(n.pointerType==="touch"){this.touches.delete(n.pointerId),this.handleTouchGestures(),(w=(l=n.target)==null?void 0:l.releasePointerCapture)==null||w.call(l,n.pointerId),n.preventDefault();return}n.button===0?this.leftPressed=!1:n.button===2?this.rightPressed=!1:this.rightPressed=!1,(g=(x=n.target)==null?void 0:x.releasePointerCapture)==null||g.call(x,n.pointerId),n.preventDefault()});S(this,"wheelCallback",n=>{if(!this.enabled||(n.preventDefault(),this.rightPressed))return;let l=n.deltaY;n.deltaMode===1?l*=16:n.deltaMode===2&&(l*=100),this.scroll+=l*.01});this.camera=n,this.registerElement(n.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const n=this.bboxMax[0]-this.bboxMin[0],l=this.bboxMax[1]-this.bboxMin[1],w=this.bboxMax[2]-this.bboxMin[2],x=.5*Math.sqrt(n*n+l*l+w*w);return x>1e-6?x:null}addRoll(n){this.roll+=n}registerElement(n){this.element&&this.element!==n&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=n,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",l=>l.preventDefault())}setCenter(n){ee.copy(n,this.center),ee.copy(n,this.anchor)}setOrbitPivot(n){ee.set(n[0],n[1],n[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(n){if(!isFinite(n)||n<.001)return;const l=this.camera.rotation;ee.set(l[2],l[6],l[10],this._dir),ee.normalize(this._dir,this._dir),ee.scale(this._dir,n,this._dir),ee.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const n=this.camera;if(ee.subtract(this.center,n.position,this._scratch),ee.length(this._scratch)<1e-6)return;ee.normalize(this._scratch,this._scratch),ee.cross(this.up,this._scratch,this._right),ee.length(this._right)<1e-6&&ee.set(1,0,0,this._right),ee.normalize(this._right,this._right),ee.cross(this._scratch,this._right,this._upCam),ee.normalize(this._upCam,this._upCam);const l=n.rotation;l[0]=this._right[0],l[1]=this._upCam[0],l[2]=this._scratch[0],l[3]=0,l[4]=this._right[1],l[5]=this._upCam[1],l[6]=this._scratch[1],l[7]=0,l[8]=this._right[2],l[9]=this._upCam[2],l[10]=this._scratch[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,n.update_buffer()}setBbox(n,l){this.bboxMin=ee.create(n[0],n[1],n[2]),this.bboxMax=ee.create(l[0],l[1],l[2]);const w=(n[0]+l[0])*.5,x=(n[1]+l[1])*.5,g=(n[2]+l[2])*.5;ee.set(w,x,g,this.center),ee.set(w,x,g,this.anchor)}resetToCamera(){const n=this.camera.rotation;ee.set(n[2],n[6],n[10],this._dir),ee.normalize(this._dir,this._dir);let l=null;if(this.bboxMin&&this.bboxMax){let w=-1/0,x=1/0,g=!1;for(let B=0;B<3;B++){const P=this._dir[B],M=this.bboxMin[B]-this.camera.position[B],R=this.bboxMax[B]-this.camera.position[B];if(Math.abs(P)>1e-8){const O=M/P,X=R/P;w=Math.max(w,Math.min(O,X)),x=Math.min(x,Math.max(O,X))}else if(M>0||R<0){g=!0;break}}!g&&w<=x&&x>0&&(l=(Math.max(w,0)+x)*.5)}if(l===null||!isFinite(l)||l<.001){ee.subtract(this.anchor,this.camera.position,this._scratch);const w=ee.dot(this._scratch,this._dir);l=w>.001?w:ee.length(this._scratch)}l=Math.max(.1,l),ee.scale(this._dir,l,this._dir),ee.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const n=this.touches.size;if(n!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=n,n===1){const l=this.touches.values().next().value;if(this.lastTouchCenter){const w=l.x-this.lastTouchCenter[0],x=l.y-this.lastTouchCenter[1];this.rotation[0]+=w*.3,this.rotation[1]-=x*.3}this.lastTouchCenter=[l.x,l.y]}else if(n===2){const l=Array.from(this.touches.values()),w=(l[0].x+l[1].x)*.5,x=(l[0].y+l[1].y)*.5,g=l[1].x-l[0].x,B=l[1].y-l[0].y,P=Math.hypot(g,B),M=Math.atan2(B,g);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const R=w-this.lastTouchCenter[0],O=x-this.lastTouchCenter[1],X=Math.hypot(R,O),D=Math.abs(P-this.lastPinchDistance);let Y=M-this.lastTwoFingerAngle;Y>Math.PI&&(Y-=2*Math.PI),Y<-Math.PI&&(Y+=2*Math.PI),X>.5&&(this.shift[1]-=R,this.shift[0]+=O),D>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(P/this.lastPinchDistance)*10),Math.abs(Y)>.0087&&(this.roll+=Y)}this.lastTouchCenter=[w,x],this.lastPinchDistance=P,this.lastTwoFingerAngle=M}}update(n){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const l=this.camera;{const $=l.rotation;this.up[0]=$[1],this.up[1]=$[5],this.up[2]=$[9],ee.length(this.up)>1e-6?ee.normalize(this.up,this.up):ee.set(0,1,0,this.up)}let w=0,x=!1;Math.abs(this.roll)>1e-4&&(w=this.roll,this.roll=0,x=!0),ee.subtract(l.position,this.center,this._dir);let g=ee.length(this._dir);g<1e-6&&(g=1e-6);const B=Math.exp(Math.log(g)+this.scroll*n*10*this.speed);ee.scale(this._dir,B/g,this._dir),g=B;const P=l.rotation;this._right[0]=P[0],this._right[1]=P[4],this._right[2]=P[8],ee.normalize(this._right,this._right),ee.length(this._right)<1e-6&&ee.set(1,0,0,this._right);const M=ee.create(P[1],P[5],P[9]);ee.normalize(M,M),ee.length(M)<1e-6&&ee.set(0,1,0,M);const R=n*this.speed*.1*g,O=this.shift[1]*R,X=-this.shift[0]*R;ee.scale(this._right,O,this._scratch),ee.add(this.center,this._scratch,this.center),ee.add(l.position,this._scratch,l.position),ee.scale(M,X,this._scratch),ee.add(this.center,this._scratch,this.center),ee.add(l.position,this._scratch,l.position);const D=this.rotation[0]*n*this.sensitivity,Y=this.rotation[1]*n*this.sensitivity;if(Math.abs(D)>1e-5||Math.abs(Y)>1e-5||x){const $=l.rotation;Hn($,this._qWorldToCam),Ne.fromAxisAngle($n,-Y,this._qX),Ne.fromAxisAngle(qn,-D,this._qY),Ne.multiply(this._qX,this._qY,this._qLocal),x&&(Ne.fromAxisAngle(Nn,1*w,this._qZ),Ne.multiply(this._qZ,this._qLocal,this._qLocal)),Ne.normalize(this._qLocal,this._qLocal),Ne.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),Ne.normalize(this._qWorldToCam,this._qWorldToCam),Bt.fromQuat(this._qWorldToCam,this._scratchMat3),He.fromMat3(this._scratchMat3,l.rotation);const q=l.rotation,j=q[2],oe=q[6],fe=q[10];l.position[0]=this.center[0]-j*g,l.position[1]=this.center[1]-oe*g,l.position[2]=this.center[2]-fe*g,this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],ee.normalize(this.up,this.up)}else ee.add(this.center,this._dir,l.position);l.update_buffer();const ne=Math.pow(.8,n*60);this.rotation[0]*=ne,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=ne,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=ne,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=ne,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=ne,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function lt(s){return s+3&-4}const Vn=2,Zn=3,Yn=5,Kn=6,ct=7,mt=8,ut=9,dt=10;function Xn(s){const n=new TextDecoder("ascii"),l=n.decode(new Uint8Array(s,0,4));if(l!=="NAT2")throw new Error(`NAT2 bad magic: '${l}'`);if(s.byteLength<4+64)throw new Error(`NAT2 truncated (${s.byteLength} bytes < 4 + 64)`);const w=new DataView(s),x=4,g=w.getUint32(x+0,!0),B=w.getUint32(x+4,!0),P=w.getUint32(x+8,!0),M=w.getUint32(x+12,!0),R=w.getUint32(x+16,!0),O=w.getFloat32(x+20,!0),X=w.getUint32(x+24,!0),D=w.getUint32(x+28,!0),Y=w.getFloat32(x+32,!0),ue=w.getFloat32(x+36,!0),ne=w.getFloat32(x+40,!0),$=w.getUint32(x+44,!0),q=w.getFloat32(x+48,!0),j=w.getFloat32(x+52,!0),oe=w.getUint32(x+56,!0),fe=w.getUint32(x+60,!0),N=D===ut||D===dt,C=N?fe:0,me=N?0:fe&255,re=N?0:fe>>8&255,le=me>0?me:1;if(D===Yn||D===Kn)throw new Error(`NAT2: paired-RVQ format=${D} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const ce=D===ut||D===dt;if(D!==Vn&&D!==Zn&&D!==ct&&D!==mt&&!ce)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${D}`);if(g%4!==0||$%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${g} layer_h=${$}`);let z=x+64;const ae=(oe+1)*4,ye=new Uint32Array(s.slice(z,z+ae));z+=ae;let pe;if(le>1){const he=(le+1)*4;if(z+he>s.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${he} from ${z})`);pe=new Uint32Array(s.slice(z,z+he)),z+=he}else pe=new Uint32Array([0,g]);let L=0;for(let he=0;he<le;he++){const we=pe[he+1]-pe[he];we>L&&(L=we)}if(ce){const he=C&2?21:C&1?7:6,we=R*he*4;if(z+we>s.byteLength)throw new Error(`NAT2 truncated at probes: need ${we} more bytes from offset ${z}, have ${s.byteLength-z}`);const Pe=new Float32Array(s.slice(z,z+we));z+=we;const T=Math.max(1,C>>8&255),U=[];let p=0;for(let _=0,m=g,v=$;_<T;_++,m>>=1,v>>=1){const e=Math.max(1,m>>2)*Math.max(1,v>>2)*16;U.push(e),p+=e}const t=s.byteLength-z;if(t<p)throw new Error(`NAT2 probe atlas truncated: need ${p} bytes for ${g}x${$} x${T} mips, have ${t}`);const c=[];let i=z;for(const _ of U)c.push(new Uint8Array(s.slice(i,i+_))),i+=_;const f=c[0];return{width:g,height:B,channels:P,kernel_type:M,num_rects:R,uv_extent:O,sb_number:X,format:D,sh_bias:Y,res_bias:ue,compact_mult:ne,layer_h:$,atlas_scale:q,atlas_offset:j,n_layers:oe,n_cols:le,layer_cuts:ye,column_cuts:pe,slice_width:L,rects_expanded:Pe,atlas_bytes:f,mip_bytes:c,probe_mode:C&2?3:C&1?2:1}}const H=R*4*4;if(z+H>s.byteLength)throw new Error(`NAT2 truncated at rects: need ${H} more bytes from offset ${z}, have ${s.byteLength-z}`);const se=new Float32Array(s.slice(z,z+H));z+=H;const be=new Float32Array(R*5);for(let he=0;he<R;he++){const we=se[he*4+0],Pe=se[he*4+1],T=se[he*4+2],U=se[he*4+3];let p=0;for(let _=1;_<=oe&&ye[_]<=Pe;_++)p=_;let t=0;for(let _=1;_<=le&&pe[_]<=we;_++)t=_;const c=Pe-ye[p],i=we-pe[t],f=t*oe+p;be[he*5+0]=i,be[he*5+1]=c,be[he*5+2]=T,be[he*5+3]=U,be[he*5+4]=f}let ke,Se;const De=le,Me=g/4*16;if(D===ct||D===mt){if(z+24>s.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const he=D===ct?"BCCB":"ACCB",we=n.decode(new Uint8Array(s,z,4));if(we!==he)throw new Error(`NAT2 typeD bad sub-magic: expected '${he}' got '${we}'`);const Pe=w.getUint32(z+4,!0),T=w.getUint32(z+8,!0),U=w.getUint32(z+12,!0),p=w.getUint32(z+16,!0),t=w.getUint32(z+20,!0);if(Pe!==1)throw new Error(`NAT2 BCCB unsupported version ${Pe}`);if(U!==B/4||p!==g/4||t!==U*p)throw new Error(`NAT2 BCCB block grid mismatch: header ${g}×${B}, sub-header ${p}×${U} (${t} blocks)`);z+=24;const c=T*16;if(z+c>s.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${c}, have ${s.byteLength-z})`);const i=new Uint8Array(s,z,c);z+=c;const f=t*2;if(z+f>s.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${f}, have ${s.byteLength-z})`);const _=new Uint16Array(s.slice(z,z+f));z+=f;const m=new Uint8Array(t*16);for(let v=0;v<t;v++){const e=_[v]*16;m.set(i.subarray(e,e+16),v*16)}if(ke=m,re>1){Se=[m];for(let v=1;v<re;v++){if(z+24>s.byteLength)throw new Error(`NAT2 truncated at mip ${v} sub-header`);const e=n.decode(new Uint8Array(s,z,4));if(e!==he)throw new Error(`NAT2 mip ${v}: bad sub-magic '${e}'`);const d=w.getUint32(z+8,!0),a=w.getUint32(z+16,!0),o=w.getUint32(z+20,!0);if(a!==v)throw new Error(`NAT2 mip section order: expected level ${v}, got ${a}`);z+=24;let r=0;for(let k=0;k<De;k++)for(let G=0;G<oe;G++){const b=cn(v,pe[k+1]-pe[k],ye[G+1]-ye[G],L,$);r+=(b.cw>>2)*(b.ch>>2)}if(r!==o)throw new Error(`NAT2 mip ${v}: ${o} blocks, loader expects ${r}`);if(z+d*16+o*2>s.byteLength)throw new Error(`NAT2 truncated in mip ${v}`);const u=new Uint8Array(s,z,d*16);z+=d*16;const y=new Uint16Array(s.slice(z,z+o*2));z+=o*2;const h=new Uint8Array(o*16);for(let k=0;k<o;k++){const G=y[k]*16;h.set(u.subarray(G,G+16),k*16)}Se.push(h)}}}else{let he=0;for(let we=0;we<oe;we++){const Pe=ye[we+1]-ye[we];if(Pe%4!==0)throw new Error(`NAT2 BC7 layer ${we} rows ${Pe} not 4-aligned`);he+=Pe/4*Me}if(z+he>s.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${he} more bytes from offset ${z}, have ${s.byteLength-z}`);ke=new Uint8Array(s.slice(z,z+he))}return{width:g,height:B,channels:P,kernel_type:M,num_rects:R,uv_extent:O,sb_number:X,format:D,sh_bias:Y,res_bias:ue,compact_mult:ne,layer_h:$,atlas_scale:q,atlas_offset:j,n_layers:oe,n_cols:le,layer_cuts:ye,column_cuts:pe,slice_width:L,rects_expanded:be,atlas_bytes:ke,...Se?{mip_bytes:Se}:{}}}function cn(s,n,l,w,x){const g=P=>P+3>>2<<2,B=1<<s;return{cw:Math.min(g(Math.max(1,w>>s)),g(Math.ceil(n/B))),ch:Math.min(g(Math.max(1,x>>s)),g(Math.ceil(l/B)))}}const Jn=32;function Qn(s,n,l){if(n.format===5||n.format===6)throw new Error(`paired-RVQ format=${n.format} is retired; re-bake with typeD (--bc7-codebook)`);let w,x,g,B;if(n.format===2||n.format===ct||n.format===ut){if(!s.features.has("texture-compression-bc"))return We(`⚠️  bundle is BC7 (format=${n.format}) but texture-compression-bc not supported — atlas disabled`),null;B=n.format===ut?"BC7 atlas (proberes: shared probe texture)":n.format===ct?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:w,view:x,sampler:g}=jt(s,n,"bc7-rgba-unorm",B)}else if(n.format===3||n.format===mt||n.format===dt){if(!s.features.has("texture-compression-astc"))return We(`⚠️  bundle is ASTC 4x4 (format=${n.format}) but texture-compression-astc not supported — atlas disabled`),null;B=n.format===dt?"ASTC 4x4 atlas (proberes: shared probe texture)":n.format===mt?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:w,view:x,sampler:g}=jt(s,n,"astc-4x4-unorm",B)}else return We(`⚠️  unsupported atlas format ${n.format} — atlas disabled`),null;const{rects_expanded:P}=n,M=s.createBuffer({label:"atlas rects (5-stride)",size:lt(P.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});s.queue.writeBuffer(M,0,P);const R=s.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return gt(s,R,n,l),{texture:w,view:x,sampler:g,rectsBuffer:M,texParamsBuffer:R,meta:n}}function jt(s,n,l,w){const{width:x,layer_h:g,n_layers:B,n_cols:P,layer_cuts:M,column_cuts:R,slice_width:O,atlas_bytes:X}=n,Y=x/4*16,ue=s.limits.maxTextureDimension2D;if(g>ue||O>ue)throw new Error(`⚠️  atlas slice dims ${O}x${g} exceed maxTextureDimension2D=${ue}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const ne=P*B;if(ne>s.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${P} cols × ${B} layers = ${ne} slices > maxTextureArrayLayers=${s.limits.maxTextureArrayLayers}.`);const $=n.mip_bytes??[X],q=$.length,j=s.createTexture({label:w,size:{width:O,height:g,depthOrArrayLayers:ne},mipLevelCount:q,sampleCount:1,dimension:"2d",format:l,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let C=0;C<P;C++){const me=R[C]/4,re=(R[C+1]-R[C])/4;for(let le=0;le<B;le++){const ce=M[le]/4,z=(M[le+1]-M[le])/4,ae=C*B+le,ye=ce*Y+me*16;s.queue.writeTexture({texture:j,mipLevel:0,origin:{x:0,y:0,z:ae},aspect:"all"},X,{offset:ye,bytesPerRow:Y,rowsPerImage:z},{width:re*4,height:z*4,depthOrArrayLayers:1})}}const oe=n.format===ut||n.format===dt;for(let C=1;C<q&&!oe;C++){let me=0;for(let re=0;re<P;re++)for(let le=0;le<B;le++){const{cw:ce,ch:z}=cn(C,R[re+1]-R[re],M[le+1]-M[le],O,g);s.queue.writeTexture({texture:j,mipLevel:C,origin:{x:0,y:0,z:re*B+le},aspect:"all"},$[C],{offset:me,bytesPerRow:(ce>>2)*16,rowsPerImage:z>>2},{width:ce,height:z,depthOrArrayLayers:1}),me+=(ce>>2)*(z>>2)*16}}for(let C=1;C<q&&oe;C++){const me=Math.max(1,O>>C),re=Math.max(1,g>>C);s.queue.writeTexture({texture:j,mipLevel:C,origin:{x:0,y:0,z:0},aspect:"all"},$[C],{offset:0,bytesPerRow:Math.max(1,me>>2)*16,rowsPerImage:Math.max(1,re>>2)},{width:me,height:re,depthOrArrayLayers:1})}q>1&&console.log(`[atlas] ${q} mip levels uploaded (${oe?"trilinear":"per-surfel integer level"})`);const fe=j.createView({label:`${w} view`,dimension:"2d-array"}),N=s.createSampler({label:`${w} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:q>1&&oe?"linear":"nearest"});return{texture:j,view:fe,sampler:N}}function gt(s,n,l,w,x=1){var R;const g=new ArrayBuffer(32),B=new Uint32Array(g),P=new Float32Array(g);B[0]=w?1:0,P[1]=l.atlas_scale,P[2]=l.atlas_offset,P[3]=l.res_bias,B[4]=l.probe_mode?l.probe_mode|0:0,B[5]=l.width|0;const M=(((R=l.mip_bytes)==null?void 0:R.length)??1)>1;B[6]=M&&x!==0?1:0,P[7]=l.uv_extent,s.queue.writeBuffer(n,0,g)}async function es(s,n){We(`loading ply file from File... : ${s.name}`),En("downloading PLY...");const l=await s.arrayBuffer();try{return await ns(l,n)}finally{Dn()}}function ts(s){return new Promise((n,l)=>{const w=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=x=>{const g=x.data;if((g==null?void 0:g.type)==="error"){Un(`PLY worker error: ${g.message??"unknown error"}`),w.terminate(),l(new Error(g.message??"Worker error"));return}else if((g==null?void 0:g.type)==="download_progress"){const B=g.totalBytes,P=g.loadedBytes/(1024*1024),M=B?B/(1024*1024):void 0,R=(g.speedBps??0)/(1024*1024),O=B?Math.min(99,Math.floor(g.loadedBytes/B*100)):void 0,X=M?`total ${M.toFixed(1)} MB`:"total -- MB",D=M&&O!==void 0?`${P.toFixed(1)} MB downloaded (${O}%)`:`${P.toFixed(1)} MB downloaded`,Y=`${R.toFixed(2)} MB/s`;ft(`downloading PLY ...
${X}, ${D}
${Y}`);return}else if((g==null?void 0:g.type)==="fetched"){We(`💾 Fetched (${g.byteLength} bytes)`),Ht("Download"),ft("parsing PLY..."),In();return}else if((g==null?void 0:g.type)==="parse_progress"){const B=g.total??0,P=g.read??0,M=B>0?Math.floor(P/B*100):0;ft(`parsing PLY ...
${P}/${B} surfels (${M}%)`);return}else(g==null?void 0:g.type)==="done"&&(w.terminate(),Ht("Parse"),n(g))},w.onerror=x=>{w.terminate(),l(x)},s instanceof ArrayBuffer?(ft("parsing PLY..."),w.postMessage({type:"start",plyBuffer:s},[s])):w.postMessage({type:"start_url",url:s.url})})}async function ns(s,n){var ue,ne,$,q,j,oe,fe,N,C,me,re,le;const l=await ts(s),w=l.num_points,x=l.K,g=l.feature_mode??0,B=l.sh_bias,P=l.kernel_type,M=l.surfelBuffer,R=l.svParamsBuffer,O=g===2?"NASG":g===1?"SB":"SV";We(`🪐 Total surfels: ${w}, mode=${O}, K=${x}, sh_bias=${B}, kernel_type=${P}`);const X=n.createBuffer({label:"surfel input buffer",size:lt(w*Jn),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});n.queue.writeBuffer(X,0,M);const D=R.byteLength>0?R.byteLength:16,Y=n.createBuffer({label:`color_params buffer (${O})`,size:lt(D),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return R.byteLength>0&&n.queue.writeBuffer(Y,0,R),{num_points:w,K:x,feature_mode:g,sh_bias:B,kernel_type:P,surfel_buffer:X,surfel_data:new Float32Array(M),sv_params_buffer:Y,bbox:l.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:l.centroid??[((((ne=(ue=l.bbox)==null?void 0:ue.min)==null?void 0:ne[0])??-1)+(((q=($=l.bbox)==null?void 0:$.max)==null?void 0:q[0])??1))/2,((((oe=(j=l.bbox)==null?void 0:j.min)==null?void 0:oe[1])??-1)+(((N=(fe=l.bbox)==null?void 0:fe.max)==null?void 0:N[1])??1))/2,((((me=(C=l.bbox)==null?void 0:C.min)==null?void 0:me[2])??-1)+(((le=(re=l.bbox)==null?void 0:re.max)==null?void 0:le[2])??1))/2]}}const ss=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,wt=`// 2DGS render — vertex+fragment.
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
`,un=`const WG_SIZE = 256u;
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
}`,rs=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,dn=`// shader implementing gpu radix sort.

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
`,fn=`// shader implementing gpu radix sort.

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
`,pn=`// ============================================================================
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
}`,hn=32,Tt=1,kt=2,Vt=4,Zt=512,Yt=1024,Kt=2048,Xt=4096,as=0,tt=new ArrayBuffer(hn),Ve={canvas_size:new Uint32Array(tt,0,2),accel_flags:new Uint32Array(tt,8,1),feature_mode:new Uint32Array(tt,12,1),gaussian_scaling:new Float32Array(tt,16,1),sh_bias:new Float32Array(tt,20,1),color_K:new Uint32Array(tt,24,1),walltime:new Float32Array(tt,28,1)};function is(s){Ve.canvas_size[0]=s.width>>>0,Ve.canvas_size[1]=s.height>>>0,Ve.accel_flags[0]=(s.accel_flags??Tt|kt)>>>0,Ve.feature_mode[0]=(s.feature_mode??as)>>>0,Ve.gaussian_scaling[0]=s.gaussian_scaling??1,Ve.sh_bias[0]=s.sh_bias??.5,Ve.color_K[0]=(s.color_K??0)>>>0,Ve.walltime[0]=s.walltime??0}function _n(s,n){s.queue.writeBuffer(n,0,tt)}function gn(s,n,l){l&&s&&n&&_n(s,n)}function os(s,n,l,w,x=!0){Ve.canvas_size[0]=s>>>0,Ve.canvas_size[1]=n>>>0,gn(l??null,w??null,x)}function ls(s,n,l,w=!0){let x=Ve.accel_flags[0];s.oac!==void 0&&(x=s.oac?x|Tt:x&~Tt),s.spr!==void 0&&(x=s.spr?x|kt:x&~kt),s.bfc!==void 0&&(x=s.bfc?x|Vt:x&~Vt),s.hypLegacy!==void 0&&(x=s.hypLegacy?x|Zt:x&~Zt),s.centred!==void 0&&(x=s.centred?x|Xt:x&~Xt),s.raysplat!==void 0&&(x=s.raysplat?x|Kt:x&~Kt),s.legacyPos!==void 0&&(x=s.legacyPos?x|Yt:x&~Yt),Ve.accel_flags[0]=x>>>0,gn(n??null,l??null,w)}const cs=256;function pt(s,n){const l=[],w=[];let x=!0;for(const g of s.split(`
`)){const B=g.trim();let P;if((P=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const M=!!n[P[1]];w.push({parent:x,taken:M}),x=x&&M;continue}if(/^\/\/#else\s*$/.test(B)){const M=w[w.length-1];if(M===void 0)throw new Error("preprocessWGSL: #else without #if");x=M.parent&&!M.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const M=w.pop();if(M===void 0)throw new Error("preprocessWGSL: #endif without #if");x=M.parent;continue}x&&l.push(g)}if(w.length!==0)throw new Error("preprocessWGSL: unterminated #if");return l.join(`
`)}const us=hn,ds=8,fs=96,ps=12,zt=8,Je=1<<zt,at=256,xt=32/zt,hs=0,vt=xt&1;function Jt(s,n){return{sort_indices_buffer:n.createBuffer({label:"ping-pong payload (indices)",size:s*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:n.createBuffer({label:"ping-pong keys (depths)",size:s*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function _s(s,n){const l=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=s.createPipelineLayout({bindGroupLayouts:[l]}),x=g=>s.createComputePipeline({layout:w,compute:{module:n,entryPoint:g,constants:{WG_SIZE:at}}});return{l0TileScan:x("prefix_l0_tile_scan"),l1TileScanOnL0:x("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:x("prefix_scan_l1_sums"),addL1ToL0:x("prefix_add_l1_to_l0_offsets"),addL0ToElems:x("prefix_add_l0_to_elements"),computeDigitBase:x("compute_digit_base"),prefixBindGroupLayout:l}}function gs(s,n,l){const w=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),x=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),g=s.createPipelineLayout({bindGroupLayouts:[w]}),B=s.createPipelineLayout({bindGroupLayouts:[x]}),P=[];for(let M=0;M<xt;M++){const R={PASS_ID:M+hs,RS_RADIX_LOG2:zt,RS_RADIX_SIZE:Je};P.push({localHistogram:s.createComputePipeline({layout:g,compute:{module:n,entryPoint:"local_histogram_pass",constants:R}}),scatterElements:s.createComputePipeline({layout:B,compute:{module:l,entryPoint:"scatter_elements",constants:R}})})}return{passes:P,localHistogramBindGroupLayout:w,scatterBindGroupLayout:x}}function ms(s){const n=s.createShaderModule({label:"local histogram",code:fn}),l=s.createShaderModule({label:"scatter",code:dn}),w=s.createShaderModule({label:"blelloch prefix",code:pn}),x=_s(s,w),g=gs(s,n,l);return{localHistogramBindGroupLayout:g.localHistogramBindGroupLayout,scatterBindGroupLayout:g.scatterBindGroupLayout,passes:g.passes,hierarchicalBlelloch:x}}function Qt(s){const n=s.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),l=n.createView({dimension:"2d-array"}),w=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),x=s.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),g=s.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});s.queue.writeBuffer(g,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:n,view:l,sampler:w,rectsBuffer:x,texParamsBuffer:g,meta:B}}const ot=class ot{constructor(n,l,w,x,g,B=null,P={}){S(this,"device");S(this,"pc");S(this,"presentationFormat");S(this,"camera_buffer");S(this,"render_settings_buffer");S(this,"draw_indirect_buffer");S(this,"splat_2d_buffer");S(this,"querySet");S(this,"resolveBuffer");S(this,"resultBuffer");S(this,"queriesPerFrame",ds);S(this,"queryCapacityFrames",200);S(this,"sort_prefixBindGroup");S(this,"sort_pipelines");S(this,"sort_localHistogramBindGroups");S(this,"sort_scatterBindGroups");S(this,"lastFrame",0);S(this,"frameCount",0);S(this,"preprocessPipeline");S(this,"cullPipeline");S(this,"renderPipeline");S(this,"indirectPipeline");S(this,"renderShaderModule");S(this,"betaKernel",1);S(this,"fetchById");S(this,"octBound");S(this,"acc16");S(this,"accTexture",null);S(this,"accView",null);S(this,"accW",0);S(this,"accH",0);S(this,"legacyRenderPipeline",null);S(this,"varyingsPipeline",null);S(this,"msaa",!1);S(this,"msaaTexture",null);S(this,"msaaView",null);S(this,"msaaW",0);S(this,"msaaH",0);S(this,"msaaPipelines",new Map);S(this,"mkVariant",null);S(this,"legacyRenderer",!1);S(this,"accResolvePipeline",null);S(this,"accResolveBgl",null);S(this,"accResolveBindGroup",null);S(this,"twoPass",!1);S(this,"twoPassThresh",.5);S(this,"twoPassParamsBuffer",null);S(this,"twoPassBgl",null);S(this,"twoPassBg",null);S(this,"twoPassSplatsBgl",null);S(this,"twoPassSplatsBg",null);S(this,"twoPassModules",new Map);S(this,"twoPassPipelines",new Map);S(this,"twoPassDepth",null);S(this,"twoPassDepthView",null);S(this,"twoPassW",0);S(this,"twoPassH",0);S(this,"overdrawMode",0);S(this,"overdrawMax",48);S(this,"ovTexture",null);S(this,"ovView",null);S(this,"ovW",0);S(this,"ovH",0);S(this,"ovParamsBuffer",null);S(this,"ovResolvePipeline",null);S(this,"ovResolveBgl",null);S(this,"ovResolveBg",null);S(this,"ovStatsPipeline",null);S(this,"ovStatsBgl",null);S(this,"ovStatsBg",null);S(this,"ovStatsBuffer",null);S(this,"ovReadback",null);S(this,"ovReadState","idle");S(this,"ovLastStats",null);S(this,"ovPipelines",new Map);S(this,"renderSettingsBgl");S(this,"preprocessBgl2");S(this,"renderSplatsBgl");S(this,"atlasBgl");S(this,"sort_info_buffer");S(this,"sort_ping_pong");S(this,"crsBg");S(this,"gsBg");S(this,"cullBg2");S(this,"preprocessBg1");S(this,"renderSplatsBindGroup");S(this,"renderSettingsBindGroup");S(this,"atlasBindGroup");S(this,"indirectBindGroup");S(this,"sh_solvers_buffer");S(this,"bfcParamsBuffer");S(this,"bfcBindGroupLayout");S(this,"bfcBindGroup");S(this,"staticSortKeys",null);S(this,"wideFrustum",!1);S(this,"staticKeysBuffer",null);S(this,"bgColor",[0,0,0,0]);S(this,"showPerfDialogNext",!1);S(this,"requestReorderNextFrame",!1);S(this,"reorderInFlight",!1);S(this,"downloadOnceNextRead",!1);S(this,"downloadOnceFileName","fps_metrics");S(this,"allFrameTimes",[]);S(this,"lastStageBreakdownMs",null);S(this,"timeQueryEnabled");S(this,"atlas");S(this,"atlasParamsBuffer");S(this,"_atlasEnabled",!0);S(this,"mipLodBias",1);S(this,"_mipMode",1);S(this,"preFrame",null);this.fetchById=P.fetchById??!0,this.staticSortKeys=P.staticSortKeys??null,this.wideFrustum=P.wideFrustum??!1,this.octBound=P.octBound??!1,this.acc16=P.acc16??!1,We(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const M=g.includes("timestamp-query");this.timeQueryEnabled=M,M&&We("⏰ using timestamp-query"),this.pc=n,this.device=l,this.presentationFormat=w,this.camera_buffer=x,this.atlas=B??Qt(l),this.atlasParamsBuffer=l.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),l.addEventListener("uncapturederror",Be=>{console.error("A WebGPU error was not captured:",Be.error)}),this._setupTimestampQueries(),this._setupBuffers();const R=(Math.floor((this.pc.num_points+at-1)/at)+1)*at,O=Math.ceil(R/at);console.log(`keys count adjusted: ${R}`),console.log(`key size: ${this.pc.num_points}`);const X=l.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ms(l);const D=[Jt(R,l),Jt(R,l)],Y=l.createBuffer({label:"workgroup histograms",size:O*Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ue=l.createBuffer({label:"workgroup prefixes",size:O*Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=l.createBuffer({label:"digit base",size:Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),$=Math.ceil(O/at),q=Math.ceil($/at),j=l.createBuffer({label:"prefix l0 sums",size:$*Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=l.createBuffer({label:"prefix l0 offsets",size:$*Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),fe=l.createBuffer({label:"prefix l1 sums",size:q*Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=l.createBuffer({label:"prefix l1 offsets",size:q*Je*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=l.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:ue}},{binding:3,resource:{buffer:j}},{binding:4,resource:{buffer:oe}},{binding:5,resource:{buffer:fe}},{binding:6,resource:{buffer:N}},{binding:7,resource:{buffer:ne}}]}),this.sort_localHistogramBindGroups=[l.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:D[0].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]}),l.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:D[1].sort_depths_buffer}},{binding:2,resource:{buffer:Y}}]})],this.sort_scatterBindGroups=[l.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:ne}},{binding:2,resource:{buffer:D[0].sort_depths_buffer}},{binding:3,resource:{buffer:D[1].sort_depths_buffer}},{binding:4,resource:{buffer:D[0].sort_indices_buffer}},{binding:5,resource:{buffer:D[1].sort_indices_buffer}},{binding:6,resource:{buffer:ue}}]}),l.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:X}},{binding:1,resource:{buffer:ne}},{binding:2,resource:{buffer:D[1].sort_depths_buffer}},{binding:3,resource:{buffer:D[0].sort_depths_buffer}},{binding:4,resource:{buffer:D[1].sort_indices_buffer}},{binding:5,resource:{buffer:D[0].sort_indices_buffer}},{binding:6,resource:{buffer:ue}}]})],this.sort_info_buffer=X,this.sort_ping_pong=D;const C=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),me=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),re=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),le=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:C,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:me,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:re,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=le,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:le,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const ce=this.device.createShaderModule({code:un});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ce,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const z=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],ae=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:lt(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),z.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),ae.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:z}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:ae});const ye=this.device.createShaderModule({code:pt(rs,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[C,me,re,this.bfcBindGroupLayout]}),compute:{module:ye,entryPoint:"surfel_cull"}});const pe=this.device.createShaderModule({code:ss});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[C,le]}),compute:{module:pe,entryPoint:"preprocess"}});const L=this.device.createShaderModule({label:"render_2dgs",code:pt(wt,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});L.getCompilationInfo().then(Be=>{Be.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Be.messages.forEach(Me=>{(Me.type==="error"?console.error:Me.type==="warning"?console.warn:console.log)(`${Me.type} (line ${Me.lineNum}:${Me.linePos}): ${Me.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const H=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),se=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,be=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:se,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),ke=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Se=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[H,be,ke]}),vertex:{module:L,entryPoint:"vs_main"},fragment:{module:L,entryPoint:"fs_main",constants:{BETA_KERNEL:Se},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const De=(Be,Me,he,we=1)=>{const Pe=this.device.createShaderModule({label:`render_2dgs (${Be})`,code:pt(wt,{FETCH_BY_ID:Me,OCT:he})});return this.device.createRenderPipeline({label:`render_2dgs_${Be}`,multisample:{count:we},layout:this.device.createPipelineLayout({bindGroupLayouts:[H,be,ke]}),vertex:{module:Pe,entryPoint:"vs_main"},fragment:{module:Pe,entryPoint:"fs_main",constants:{BETA_KERNEL:Se},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=De("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?De("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=De,this.device.popErrorScope().then(Be=>{Be?console.error("[render_2dgs] pipeline create validation error:",Be.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:H,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:be,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[vt].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:ke,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=L,this.betaKernel=Se,this.renderSettingsBgl=H,this.renderSplatsBgl=be,this.atlasBgl=ke}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(n,l){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([n,l[0],l[1],l[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var x;const n=new ArrayBuffer(32),l=new Uint32Array(n),w=new Float32Array(n);l[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,l[1]=this.atlas.meta.layer_h|0,w[2]=this.atlas.meta.uv_extent||0,l[3]=this.atlas.meta.probe_mode|0||0,l[4]=this._mipMode!==0?Math.max(1,((x=this.atlas.meta.mip_bytes)==null?void 0:x.length)??1):1,w[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,n)}setMsaa(n){n!==this.msaa&&(this.msaa=n,We(`[render_2dgs] MSAA 4x: ${n?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(n,l){const w=`${n?"byid":"var"}_${l?"oct":"quad"}`;let x=this.msaaPipelines.get(w);return x||(x=this.mkVariant(`msaa4_${w}`,n,l,4),this.msaaPipelines.set(w,x)),x}ensureMsaaResources(n,l){var w;this.msaaTexture!==null&&this.msaaW===n&&this.msaaH===l||((w=this.msaaTexture)==null||w.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:n,height:l},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=n,this.msaaH=l)}setTwoPass(n){n!==this.twoPass&&(this.twoPass=n,We(`[render_2dgs] two-pass layer path: ${n?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(n){this.twoPassThresh=Math.min(.999,Math.max(.001,n)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[vt].sort_indices_buffer}}]}))}ensureTwoPassResources(n,l){var w;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===n&&this.twoPassH===l)&&((w=this.twoPassDepth)==null||w.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,n),height:Math.max(1,l),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=n,this.twoPassH=l)}renderModuleFor(n,l,w){const x=`${n?"byid":"vary"}_${l?"oct":"quad"}_${w?"hwz":"z0"}`,g=this.twoPassModules.get(x);if(g!==void 0)return g;const B=this.device.createShaderModule({label:`render_2dgs (${x})`,code:pt(wt,{FETCH_BY_ID:n,OCT:l,HW_DEPTH:w})});return B.getCompilationInfo().then(P=>{for(const M of P.messages)M.type==="error"&&console.error(`[render_2dgs ${x}] (line ${M.lineNum}:${M.linePos}): ${M.message}`)}),this.twoPassModules.set(x,B),B}twoPassPipelinesFor(n,l){const w=`${n?"byid":"vary"}_${l?"oct":"quad"}`,x=this.twoPassPipelines.get(w);if(x!==void 0)return x;const g=this.renderModuleFor(n,l,!0),B=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const P=this.device.createRenderPipeline({label:`render_2dgs_opaque_${w}`,layout:B,vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),M=this.device.createRenderPipeline({label:`render_2dgs_front_${w}`,layout:B,vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:ot.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(O=>{O?console.error(`[render_2dgs twopass ${w}] pipeline validation error:`,O.message):console.log(`[render_2dgs twopass ${w}] pipelines created OK`)});const R={opaque:P,front:M};return this.twoPassPipelines.set(w,R),R}setOverdrawMode(n){n!==this.overdrawMode&&(this.overdrawMode=n,this.ovLastStats=null,We(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][n]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(n){this.overdrawMax=Math.max(1,n),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(n,l){var w;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const x=`
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
}`,g=this.device.createShaderModule({label:"overdraw_resolve",code:x});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const B=`
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
}`,P=this.device.createShaderModule({label:"overdraw_stats",code:B});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:P,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===n&&this.ovH===l||((w=this.ovTexture)==null||w.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,n),height:Math.max(1,l),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=n,this.ovH=l)}ovPipelineFor(n,l,w){const x=`${n}_${l?"byid":"vary"}_${w?"oct":"quad"}`,g=this.ovPipelines.get(x);if(g!==void 0)return g;const B=n.startsWith("tp_"),P=this.renderModuleFor(l,w,B),M=this.device.createPipelineLayout({bindGroupLayouts:B?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),R={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[n];let O;n==="tp_raster"?O={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:n==="tp_opaque"?O={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:n==="tp_front"&&(O={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const X=this.device.createRenderPipeline({label:`render_2dgs_${x}`,layout:M,vertex:{module:P,entryPoint:"vs_main"},fragment:{module:P,entryPoint:R,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:ot.BLEND_ADD}]},depthStencil:O,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(D=>{D&&console.error(`[render_2dgs overdraw ${x}] pipeline validation error:`,D.message)}),this.ovPipelines.set(x,X),X}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const n=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const l=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:n[0]/l,meanCovered:n[2]>0?n[0]/n[2]:0,max:n[1],coveredFrac:n[2]/l}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(n,l){var w;if(this.accResolvePipeline===null){const x=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,g=this.device.createShaderModule({label:"acc16_resolve",code:x});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:g,entryPoint:"vs_main"},fragment:{module:g,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===n&&this.accH===l||((w=this.accTexture)==null||w.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,n),height:Math.max(1,l),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=n,this.accH=l)}setAtlas(n){this.atlas=n??Qt(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&gt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(n){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=n,gt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,n,this._mipMode))}setMipLodBias(n){this.mipLodBias=n,this.writeAtlasParams()}setFetchById(n){n!==this.fetchById&&(this.fetchById=n,We(`[render_2dgs] fragment inputs: ${n?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(n){if(n===this.legacyRenderer)return;this.legacyRenderer=n,ls({legacyPos:n,hypLegacy:n},this.device,this.render_settings_buffer);const l=!n&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([l])),We(`[render_2dgs] renderer: ${n?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(n){this.atlas.meta.format!==4294967295&&(this._mipMode=n?1:0,this.writeAtlasParams(),gt(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var n;return(((n=this.atlas.meta.mip_bytes)==null?void 0:n.length)??1)>1}async debugReadSortedIndices(n=30){const l=Math.max(0,Math.min(n,this.pc.num_points)),w=l*Uint32Array.BYTES_PER_ELEMENT;if(w===0){console.log("[DEBUG] No indices to read.");return}const x=this.device.createBuffer({size:w,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),g=this.device.createCommandEncoder();g.copyBufferToBuffer(this.sort_ping_pong[vt].sort_indices_buffer,0,x,0,w),this.device.queue.submit([g.finish()]),await x.mapAsync(GPUMapMode.READ);const B=new Uint32Array(x.getMappedRange());console.log("[DEBUG] Sorted indices (first",l,"):",Array.from(B)),x.unmap()}writeSortKeys(n){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,n)}frame(n,l,w=!0){this.preFrame&&this.preFrame();const g=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=w&&this.timeQueryEnabled;{n.clearBuffer(this.sort_info_buffer,0,4);const P={label:"cull"};B&&(P.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+0,endOfPassWriteIndex:g+1});const M=n.beginComputePass(P);M.setPipeline(this.cullPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.gsBg),M.setBindGroup(2,this.cullBg2),M.setBindGroup(3,this.bfcBindGroup);const R=Math.ceil(this.pc.num_points/cs);M.dispatchWorkgroups(R,1,1),M.end()}{const P=n.beginComputePass({label:"calculate indirect dispatch"});P.setPipeline(this.indirectPipeline),P.setBindGroup(0,this.indirectBindGroup),P.dispatchWorkgroups(1,1,1),P.end()}{const P={label:"preprocess"};B&&(P.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+2,endOfPassWriteIndex:g+3});const M=n.beginComputePass(P);M.setPipeline(this.preprocessPipeline),M.setBindGroup(0,this.crsBg),M.setBindGroup(1,this.preprocessBg1),M.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),M.end()}for(let P=0;P<xt;P++){const M=P&1,R=this.sort_pipelines.passes[P],O=this.sort_localHistogramBindGroups[M],X=this.sort_scatterBindGroups[M];{const D={label:`upsweep_round${P}`};B&&P==0&&(D.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+4});const Y=n.beginComputePass(D);Y.setPipeline(R.localHistogram),Y.setBindGroup(0,O),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}{const D=n.beginComputePass({label:`prefix_round${P} - l0TileScan`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=n.beginComputePass({label:`prefix_round${P} - l1TileScanOnL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=n.beginComputePass({label:`prefix_round${P} - l1ScanSums`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,Je,1),D.end()}{const D=n.beginComputePass({label:`prefix_round${P} - addL1ToL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=n.beginComputePass({label:`prefix_round${P} - addL0ToElems`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=n.beginComputePass({label:`prefix_round${P} - computeDigitBase`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,1,1),D.end()}{const D={label:`scatter_round${P}`};B&&P==xt-1&&(D.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+5});const Y=n.beginComputePass(D);Y.setPipeline(R.scatterElements),Y.setBindGroup(0,X),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}}{const P=Ve.canvas_size[0],M=Ve.canvas_size[1],R=this.overdrawMode!==0;let O=l;R?(this.ensureOverdrawResources(P,M),O=this.ovView):this.acc16&&(this.ensureAccResources(P,M),O=this.accView);const X=R?{r:0,g:0,b:0,a:0}:this.bgColor,D=R||this.acc16,Y=this.fetchById&&!this.legacyRenderer,ue=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(P,M);let ne,$;if(R)this.overdrawMode===1?(ne=this.ovPipelineFor("tp_opaque",Y,ue),$=this.ovPipelineFor("tp_front",Y,ue)):ne=$=this.ovPipelineFor("tp_raster",Y,ue);else{const N=this.twoPassPipelinesFor(Y,ue);ne=N.opaque,$=N.front}const q={label:"render_opaque_layer",colorAttachments:[{view:O,loadOp:"clear",storeOp:"store",clearValue:X}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};B&&(q.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+6});const j=n.beginRenderPass(q);j.setPipeline(ne),j.setBindGroup(0,this.renderSettingsBindGroup),j.setBindGroup(1,this.twoPassSplatsBg),j.setBindGroup(2,this.atlasBindGroup),j.setBindGroup(3,this.twoPassBg),j.drawIndirect(this.draw_indirect_buffer,0),j.end();const oe={label:"render_front",colorAttachments:[{view:O,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};B&&!D&&(oe.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+7});const fe=n.beginRenderPass(oe);fe.setPipeline($),fe.setBindGroup(0,this.renderSettingsBindGroup),fe.setBindGroup(1,this.twoPassSplatsBg),fe.setBindGroup(2,this.atlasBindGroup),fe.setBindGroup(3,this.twoPassBg),fe.drawIndirect(this.draw_indirect_buffer,0),fe.end()}else{const ne=this.msaa&&!R&&!this.acc16;ne&&this.ensureMsaaResources(P,M);const $={label:"render",colorAttachments:[ne?{view:this.msaaView,resolveTarget:O,loadOp:"clear",storeOp:"discard",clearValue:X}:{view:O,loadOp:"clear",storeOp:"store",clearValue:X}]};B&&($.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:g+6,...D?{}:{endOfPassWriteIndex:g+7}});const q=n.beginRenderPass($);R?(q.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",Y,ue)),q.setBindGroup(1,this.twoPassSplatsBg)):(q.setPipeline(ne?this.msaaPipelineFor(Y,ue):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),q.setBindGroup(1,this.renderSplatsBindGroup)),q.setBindGroup(0,this.renderSettingsBindGroup),q.setBindGroup(2,this.atlasBindGroup),q.drawIndirect(this.draw_indirect_buffer,0),q.end()}if(R){n.clearBuffer(this.ovStatsBuffer,0,16);const ne=n.beginComputePass({label:"overdraw_stats"});ne.setPipeline(this.ovStatsPipeline),ne.setBindGroup(0,this.ovStatsBg),ne.dispatchWorkgroups(Math.ceil(P/16),Math.ceil(M/16),1),ne.end();const $={label:"overdraw_resolve",colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};B&&($.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+7});const q=n.beginRenderPass($);q.setPipeline(this.ovResolvePipeline),q.setBindGroup(0,this.ovResolveBg),q.draw(3),q.end(),this.ovReadState==="idle"&&(n.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const ne={label:"acc16_resolve",colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(ne.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:g+7});const $=n.beginRenderPass(ne);$.setPipeline(this.accResolvePipeline),$.setBindGroup(0,this.accResolveBindGroup),$.draw(3),$.end()}}this.frameCount++}async readPerfMetrics(n){const l=(n==null?void 0:n.silent)??!1;if(this.frameCount<=0)return;const w=this.device.createCommandEncoder({label:"timestamp resolve encoder"});w.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),w.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([w.finish()]),await this.device.queue.onSubmittedWorkDone();const x=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const g=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),P=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,M=Array.from({length:x.length},()=>[]);let R=0;for(let q=0;q<B;q++){const j=(P+q)%this.queryCapacityFrames,oe=j*this.queriesPerFrame;let fe=!0;for(let N=0;N<x.length;N++){const[C,me,re]=x[N];if(g[oe+re]===0n||g[oe+me]===0n||g[oe+me]<g[oe+re]){fe=!1;break}}if(!fe){!l&&j%60===0&&console.debug("[timestamp] frame slot",j,"contains unwritten (0) timestamps, skipped in stats");continue}R++;for(let N=0;N<x.length;N++){const[C,me,re]=x[N],le=Number(g[oe+re]),ce=Number(g[oe+me]);M[N].push((ce-le)/1e6)}}if(R===0){this.resultBuffer.unmap(),l||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...M[0]);const O=[];let X=0,D=0,Y=0;for(let q=0;q<x.length;q++){const j=x[q][0],oe=M[q];let fe=0;if(j==="Total"){const N=this.allFrameTimes;fe=N.reduce((re,le)=>re+le,0)/N.length;const C=[...N].sort((re,le)=>re-le);X=C[Math.floor(C.length*.99)]||0;const me=N.reduce((re,le)=>re+Math.pow(le-fe,2),0)/N.length;D=Math.sqrt(me),Y=fe}else fe=oe.reduce((N,C)=>N+C,0)/oe.length;O.push([j,fe])}this.lastFrame+=this.frameCount,this.frameCount=0;const ue=Object.fromEntries(O);this.lastStageBreakdownMs={cull:ue.Culling??0,preprocess:ue.Preprocess??0,sort:ue.Sort??0,render:ue.Render??0,total:ue.Total??0};const $=`[TIMESTAMP - ${this.constructor.name}]
`+O.map(([q,j])=>`${q}: ${j.toFixed(3)}ms`).join(`
`)+`
Total P99: ${X.toFixed(3)}ms
Total STD: ${D.toFixed(3)}ms
Total AVG: ${Y.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(l||(console.log($),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const q=`Stage,ms
`,j=O.map(([N,C])=>`${N},${C.toFixed(3)}`).join(`
`),oe="data:text/csv;charset=utf-8,"+encodeURIComponent(q+j),fe=document.createElement("a");fe.href=oe,fe.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(fe),fe.click(),fe.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert($)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const n=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:n,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:us,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const n=document.querySelector("canvas"),l=n?n.width:1,w=n?n.height:1;is({width:l,height:w,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),_n(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:lt(this.pc.num_points*fs),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:lt(this.pc.num_points*ps),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(n){if(n&&n.trim().length>0){const l=n.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=l.length>0?l:this.downloadOnceFileName}else{const l=new Date,w=`${l.getFullYear()}${String(l.getMonth()+1).padStart(2,"0")}${String(l.getDate()).padStart(2,"0")}_${String(l.getHours()).padStart(2,"0")}${String(l.getMinutes()).padStart(2,"0")}${String(l.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${w}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};S(ot,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),S(ot,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let Mt=ot;function xs(s){const n=new TextDecoder().decode(new Uint8Array(s,0,4));if(n!=="GSB1")throw new Error(`not a GSB1 file (magic '${n}')`);const l=new DataView(s).getUint32(4,!0),w=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,l))),x=8+l;return{header:w,bytes:s.byteLength,block(g){const B=w.blocks.find(P=>P.name===g);if(!B)throw new Error(`GSB block '${g}' missing`);return s.slice(x+B.offset,x+B.offset+B.nbytes)}}}const en=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
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
`,ys=`// Sorted 3DGS path (FastGS, Speedy-Splat), pass 1 of 3: frustum cull + EWA projection +
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
`,bs=`// Mobile-GS (Du et al., ICLR'26) compute passes, a line-by-line port of their released
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
// offsets into \`mlp_w\`: W0 b0 W1 b1 W2 b2 Wphi bphi Wop bop. Weight matrices are uploaded
// TRANSPOSED to [in, out] so that in the cooperative path consecutive threads (= consecutive
// output neurons j) read consecutive addresses.
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

// Reference implementation: one Gaussian per invocation. Correct but it needs 1.5 KB of
// PRIVATE storage per thread for h1/h2, which spills to scratch memory — measured 190 ms/frame
// on a phone vs 4.6 ms for the same frame with the MLP frozen. \`mlp_coop\` below is the one the
// renderer uses; this stays as the numerical reference for the offline port check.
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
        for (var i = 0u; i < IN; i++) { s += mlp_w[i * H1 + j] * x[i]; }
        h1[j] = max(s, 0.0);
    }
    var h2: array<f32, 128>;
    for (var j = 0u; j < H2; j++) {
        var s = mlp_w[O_B1 + j];
        for (var i = 0u; i < H1; i++) { s += mlp_w[O_W1 + i * H2 + j] * h1[i]; }
        h2[j] = max(s, 0.0);
    }
    var sp = mlp_w[O_BP];
    var so = mlp_w[O_BO];
    for (var j = 0u; j < H3; j++) {
        var s = mlp_w[O_B2 + j];
        for (var i = 0u; i < H2; i++) { s += mlp_w[O_W2 + i * H3 + j] * h2[i]; }
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


// ---------------------------------------------------------------------------------------------
// Cooperative, batched MLP: a workgroup evaluates B = 8 Gaussians at once, one output neuron per
// thread, with the 8 accumulators in registers so every weight load feeds 8 MACs and all
// activations live in workgroup memory (15 KB, under the 16 KB WebGPU floor). Each workgroup
// walks TILE = 256 Gaussians (32 batches) so the dispatch matches the indirect triple.
// 5090, 467k visible: reference 44 ms → 1-Gaussian cooperative 32 ms → this version (see below).

const TILE = 256u;
const B = 8u;

var<workgroup> s_idx: array<u32, 8>;
var<workgroup> s_ok: array<u32, 8>;
var<workgroup> s_x: array<f32, 176>;     // [b*22 + i]
var<workgroup> s_h1: array<f32, 2048>;   // [b*256 + j]
var<workgroup> s_h2: array<f32, 1024>;   // [b*128 + j]
var<workgroup> s_h3: array<f32, 512>;    // [b*64 + j]

/** Evaluates the batch described by s_idx / s_ok. All 256 threads call it in lockstep. */
fn mlp_batch(lid: u32) {
    if lid < B {
        let idx = s_idx[lid];
        let o = lid * IN;
        var n2 = 0.0;
        let base = idx * 12u;
        for (var k = 0u; k < 12u; k++) {
            let i = base + k;
            let v = unpack2x16float(sh_coefs[i >> 1u])[i & 1u];
            s_x[o + k] = v;
            n2 += v * v;
        }
        let inv_sh = 1.0 / max(sqrt(n2), 1e-12);
        for (var k = 0u; k < 12u; k++) { s_x[o + k] = s_x[o + k] * inv_sh; }
        let dir = normalize(gpos(gauss[idx]) - camera.view_inv[3].xyz);
        s_x[o + 12u] = dir.x; s_x[o + 13u] = dir.y; s_x[o + 14u] = dir.z;
        let a = idx * 7u;
        let sc = vec3<f32>(attr[a], attr[a + 1u], attr[a + 2u]);
        let scn = sc / max(length(sc), 1e-12);
        s_x[o + 15u] = scn.x; s_x[o + 16u] = scn.y; s_x[o + 17u] = scn.z;
        s_x[o + 18u] = attr[a + 3u]; s_x[o + 19u] = attr[a + 4u]; s_x[o + 20u] = attr[a + 5u]; s_x[o + 21u] = attr[a + 6u];
    }
    workgroupBarrier();
    {   // layer 1: neuron lid, all 8 Gaussians
        let bias = mlp_w[O_B0 + lid];
        var acc = array<f32, 8>(bias, bias, bias, bias, bias, bias, bias, bias);
        for (var i = 0u; i < IN; i++) {
            let w = mlp_w[i * H1 + lid];
            for (var b = 0u; b < B; b++) { acc[b] += w * s_x[b * IN + i]; }
        }
        for (var b = 0u; b < B; b++) { s_h1[b * H1 + lid] = max(acc[b], 0.0); }
    }
    workgroupBarrier();
    {   // layer 2: 128 neurons × 2 halves of 4 Gaussians
        let j = lid & 127u;
        let g0 = (lid >> 7u) * 4u;
        let bias = mlp_w[O_B1 + j];
        var acc = array<f32, 4>(bias, bias, bias, bias);
        for (var i = 0u; i < H1; i++) {
            let w = mlp_w[O_W1 + i * H2 + j];
            for (var b = 0u; b < 4u; b++) { acc[b] += w * s_h1[(g0 + b) * H1 + i]; }
        }
        for (var b = 0u; b < 4u; b++) { s_h2[(g0 + b) * H2 + j] = max(acc[b], 0.0); }
    }
    workgroupBarrier();
    {   // layer 3 (no activation): 64 neurons × 4 groups of 2 Gaussians
        let j = lid & 63u;
        let g0 = (lid >> 6u) * 2u;
        let bias = mlp_w[O_B2 + j];
        var a0 = bias; var a1 = bias;
        for (var i = 0u; i < H2; i++) {
            let w = mlp_w[O_W2 + i * H3 + j];
            a0 += w * s_h2[g0 * H2 + i];
            a1 += w * s_h2[(g0 + 1u) * H2 + i];
        }
        s_h3[g0 * H3 + j] = a0;
        s_h3[(g0 + 1u) * H3 + j] = a1;
    }
    workgroupBarrier();
    if lid < B && s_ok[lid] != 0u {   // heads
        var sp = mlp_w[O_BP];
        var so = mlp_w[O_BO];
        for (var j = 0u; j < H3; j++) {
            let v = s_h3[lid * H3 + j];
            sp += mlp_w[O_WP + j] * v;
            so += mlp_w[O_WO + j] * v;
        }
        let idx = s_idx[lid];
        mlp_out[idx * 2u] = max(sp, 0.0);
        mlp_out[idx * 2u + 1u] = 1.0 / (1.0 + exp(-so));
    }
    workgroupBarrier();   // shared arrays are reused by the next batch
}

// Barriers may not sit in control flow that depends on a buffer value, so the tail workgroup
// evaluates clamped Gaussians instead of exiting early and just drops their writes (s_ok).
@compute @workgroup_size(WG_SIZE)
fn mlp_coop(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    let n = count.keys_size;
    let last = max(n, 1u) - 1u;
    for (var t = 0u; t < TILE; t += B) {
        if lid.x < B {
            let slot = wid.x * TILE + t + lid.x;
            s_idx[lid.x] = vis[min(slot, last)];
            s_ok[lid.x] = u32(slot < n);
        }
        mlp_batch(lid.x);
    }
}

@compute @workgroup_size(WG_SIZE)
fn mlp_all_coop(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    let n = params.n;
    let last = max(n, 1u) - 1u;
    for (var t = 0u; t < TILE; t += B) {
        if lid.x < B {
            let idx = params.mlp_base + wid.x * TILE + t + lid.x;
            s_idx[lid.x] = min(idx, last);
            s_ok[lid.x] = u32(idx < n);
        }
        mlp_batch(lid.x);
    }
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
`,ws=`// Raster pass shared by both bench baselines. One quad per splat, spanned by the 2D
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

`,vs=`// Mobile-GS fullscreen resolve of gs_raster.wgsl's fs_wsum targets: C = (Σcαw / max(Σαw, eps))·(1 - T) + T·bg  (bg = black).
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
`,Et=8,Xe=1<<Et,st=256,St=32/Et;class Ss{constructor(n,l,w){S(this,"depthsIn");S(this,"indicesIn");S(this,"indicesOut");S(this,"owned",[]);S(this,"passes",[]);S(this,"histBg");S(this,"scatterBg");S(this,"prefixBg");S(this,"prefix",{});this.device=n,this.info=w;const x=(Math.floor((l+st-1)/st)+1)*st,g=Math.ceil(x/st),B=(ae,ye)=>{const pe=n.createBuffer({label:ae,size:ye,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(pe),pe},P=[0,1].map(ae=>({d:B(`sort keys ${ae}`,x*4),p:B(`sort payload ${ae}`,x*4)})),M=B("wg histograms",g*Xe*4),R=B("wg prefixes",g*Xe*4),O=B("digit base",Xe*4),X=Math.ceil(g/st),D=Math.ceil(X/st),Y=B("l0 sums",X*Xe*4),ue=B("l0 offsets",X*Xe*4),ne=B("l1 sums",D*Xe*4),$=B("l1 offsets",D*Xe*4);this.depthsIn=P[0].d,this.indicesIn=P[0].p,this.indicesOut=P[St&1].p;const q=ae=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:ae}}),j=n.createBindGroupLayout({entries:[{binding:0,...q("read-only-storage")},{binding:1,...q("read-only-storage")},{binding:2,...q("storage")}]}),oe=n.createBindGroupLayout({entries:[{binding:0,...q("read-only-storage")},{binding:1,...q("read-only-storage")},{binding:2,...q("read-only-storage")},{binding:3,...q("storage")},{binding:4,...q("read-only-storage")},{binding:5,...q("storage")},{binding:6,...q("read-only-storage")}]}),fe=n.createBindGroupLayout({entries:[{binding:0,...q("read-only-storage")},{binding:1,...q("read-only-storage")},...[2,3,4,5,6,7].map(ae=>({binding:ae,...q("storage")}))]}),N=n.createShaderModule({label:"bench radix histogram",code:fn}),C=n.createShaderModule({label:"bench radix scatter",code:dn}),me=n.createShaderModule({label:"bench radix prefix",code:pn}),re=n.createPipelineLayout({bindGroupLayouts:[j]}),le=n.createPipelineLayout({bindGroupLayouts:[oe]});for(let ae=0;ae<St;ae++){const ye={PASS_ID:ae,RS_RADIX_LOG2:Et,RS_RADIX_SIZE:Xe};this.passes.push({hist:n.createComputePipeline({layout:re,compute:{module:N,entryPoint:"local_histogram_pass",constants:ye}}),scatter:n.createComputePipeline({layout:le,compute:{module:C,entryPoint:"scatter_elements",constants:ye}})})}const ce=n.createPipelineLayout({bindGroupLayouts:[fe]});for(const ae of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[ae]=n.createComputePipeline({layout:ce,compute:{module:me,entryPoint:ae,constants:{WG_SIZE:st}}});const z=(ae,ye)=>({binding:ae,resource:{buffer:ye}});this.prefixBg=n.createBindGroup({layout:fe,entries:[z(0,w),z(1,M),z(2,R),z(3,Y),z(4,ue),z(5,ne),z(6,$),z(7,O)]}),this.histBg=[0,1].map(ae=>n.createBindGroup({layout:j,entries:[z(0,w),z(1,P[ae].d),z(2,M)]})),this.scatterBg=[0,1].map(ae=>n.createBindGroup({layout:oe,entries:[z(0,w),z(1,O),z(2,P[ae].d),z(3,P[1-ae].d),z(4,P[ae].p),z(5,P[1-ae].p),z(6,R)]}))}encode(n){const l=(w,x,g,B)=>{const P=n.beginComputePass();P.setPipeline(w),P.setBindGroup(0,x),g!==null?P.dispatchWorkgroupsIndirect(this.info,g):P.dispatchWorkgroups(B[0],B[1],1),P.end()};for(let w=0;w<St;w++){const x=w&1;l(this.passes[w].hist,this.histBg[x],4),l(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),l(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),l(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,Xe]),l(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),l(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),l(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),l(this.passes[w].scatter,this.scatterBg[x],4)}}destroy(){for(const n of this.owned)n.destroy()}}const tn=256,Bs=64,rt=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class Ps{constructor(n,l,w,x,g){S(this,"n");S(this,"kind");S(this,"freezeMlp",!1);S(this,"owned",[]);S(this,"params",new ArrayBuffer(32));S(this,"paramsBuf");S(this,"info");S(this,"drawArgs");S(this,"vpBuf");S(this,"indirectPipe");S(this,"indirectBg");S(this,"computeBgs");S(this,"cullPipe");S(this,"mlpPipe",null);S(this,"mlpAllPipe",null);S(this,"prepPipe",null);S(this,"rasterPipe");S(this,"rasterBg");S(this,"sorter",null);S(this,"countCopy",null);S(this,"cullInfoBg",null);S(this,"accTex",null);S(this,"trTex",null);S(this,"resolvePipe",null);S(this,"resolveBgl",null);S(this,"resolveBg",null);S(this,"accFormat");S(this,"wScale");S(this,"eps",null);this.device=n,this.targetFormat=x;const B=l.header;this.n=B.n,this.kind=B.render;const P=B.n,M=(H,se,be=rt|GPUBufferUsage.COPY_SRC)=>{const ke=n.createBuffer({label:H,size:Math.max(16,se+(4-se%4)%4),usage:be});return this.owned.push(ke),ke},R=(H,se)=>{const be=se instanceof ArrayBuffer?new Uint8Array(se):new Uint8Array(se.buffer,se.byteOffset,se.byteLength),ke=M(H,be.byteLength,rt);return n.queue.writeBuffer(ke,0,be),ke},O=new Float32Array(l.block("pos")),X=new Float32Array(l.block("cov3d")),D=this.kind==="sorted_3dgs"?new Float32Array(l.block("opacity")):null,Y=new Float32Array(P*10);for(let H=0;H<P;H++)Y[H*10]=O[H*3],Y[H*10+1]=O[H*3+1],Y[H*10+2]=O[H*3+2],Y[H*10+3]=D?D[H]:1,Y.set(X.subarray(H*6,H*6+6),H*10+4);const ue=R("bench gauss",Y),ne=R("bench sh",l.block("sh"));this.paramsBuf=M("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=g.float32Blend?"rgba32float":"rgba16float",this.wScale=g.float32Blend?1:1/1024;const $=new Uint32Array(this.params),q=new Float32Array(this.params);$[0]=P,$[1]=B.sh_degree,q[2]=g.cutoffMult??B.cutoff_mult??1,q[3]=this.wScale,n.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=M("bench sort info",64,rt|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=M("bench draw args",16,rt|GPUBufferUsage.INDIRECT),n.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=M("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const j=M("bench splats",P*Bs),oe=n.createShaderModule({label:"bench indirect",code:un});this.indirectPipe=n.createComputePipeline({layout:"auto",compute:{module:oe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=n.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const fe=GPUShaderStage.COMPUTE,N=(H,se=fe)=>n.createBindGroupLayout({entries:H.map((be,ke)=>({binding:ke,visibility:se,buffer:{type:be}}))}),C=(H,se)=>({binding:H,resource:{buffer:se}}),me=N(["uniform","uniform"]),re=n.createBindGroup({layout:me,entries:[C(0,w),C(1,this.paramsBuf)]});let le,ce;if(this.kind==="sorted_3dgs"){this.sorter=new Ss(n,P,this.info);const H=N(["read-only-storage","read-only-storage","storage"]),se=N(["storage","storage","storage"]),be=n.createShaderModule({label:"gs3d_cull",code:en+ys});this.cullPipe=n.createComputePipeline({label:"gs3d_cull",layout:n.createPipelineLayout({bindGroupLayouts:[me,H,se]}),compute:{module:be,entryPoint:"cull"}}),this.computeBgs=[re,n.createBindGroup({layout:H,entries:[C(0,ue),C(1,ne),C(2,j)]}),n.createBindGroup({layout:se,entries:[C(0,this.info),C(1,this.sorter.depthsIn),C(2,this.sorter.indicesIn)]})],ce=this.sorter.indicesOut,le=M("bench weights stub",16,rt)}else{const H=new Float32Array(l.block("scale")),se=new Float32Array(l.block("rot")),be=new Float32Array(P*7);for(let m=0;m<P;m++)be.set(H.subarray(m*3,m*3+3),m*7),be.set(se.subarray(m*4,m*4+4),m*7+3);const ke=R("bench mgs attr",be),Se=(m,v,e)=>{const d=new Float32Array(m.length);for(let a=0;a<v;a++)for(let o=0;o<e;o++)d[o*v+a]=m[a*e+o];return d},De=B.mlp.flatMap(m=>[Se(new Float32Array(l.block(`${m.name}.weight`)),m.out_dim,m.in_dim),new Float32Array(l.block(`${m.name}.bias`))]),Be=B.mlp.map(m=>`${m.in_dim}>${m.out_dim}`).join(",");if(Be!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${Be}`);const Me=new Float32Array(De.reduce((m,v)=>m+v.length,0));let he=0;for(const m of De)Me.set(m,he),he+=m.length;const we=R("bench mgs mlp",Me),Pe=M("bench mgs vis",P*4),T=M("bench mgs mlp out",P*8);le=M("bench mgs weights",P*4),this.countCopy=M("bench mgs count",16,rt);const U=N(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),p=N(["read-only-storage","storage","storage","storage","storage"]),t=N(["storage"]),c=n.createShaderModule({label:"mgs_compute",code:en+bs}),i=n.createPipelineLayout({bindGroupLayouts:[me,U,p,t]}),f=n.createPipelineLayout({bindGroupLayouts:[me,U,p]}),_=(m,v)=>n.createComputePipeline({label:`mgs_${m}`,layout:v,compute:{module:c,entryPoint:m}});this.cullPipe=_("cull",i),this.mlpPipe=_("mlp_coop",f),this.mlpAllPipe=_("mlp_all_coop",f),this.prepPipe=_("prep",f),this.computeBgs=[re,n.createBindGroup({layout:U,entries:[C(0,ue),C(1,ne),C(2,ke),C(3,we)]}),n.createBindGroup({layout:p,entries:[C(0,this.countCopy),C(1,Pe),C(2,T),C(3,j),C(4,le)]})],this.cullInfoBg=n.createBindGroup({layout:t,entries:[C(0,this.info)]}),ce=M("bench order stub",16,rt)}const z=GPUShaderStage.VERTEX,ae=n.createBindGroupLayout({entries:[{binding:0,visibility:z,buffer:{type:"read-only-storage"}},{binding:1,visibility:z,buffer:{type:"read-only-storage"}},{binding:2,visibility:z,buffer:{type:"uniform"}},{binding:3,visibility:z,buffer:{type:"read-only-storage"}}]});this.rasterBg=n.createBindGroup({layout:ae,entries:[C(0,j),C(1,ce),C(2,this.vpBuf),C(3,le)]});const ye=n.createShaderModule({label:"gs_raster",code:ws}),pe=H=>({operation:"add",srcFactor:"one",dstFactor:H}),L=this.kind==="sorted_3dgs";if(this.rasterPipe=n.createRenderPipeline({label:L?"gs_raster over":"gs_raster wsum",layout:n.createPipelineLayout({bindGroupLayouts:[ae]}),vertex:{module:ye,entryPoint:L?"vs_main":"vs_wsum"},fragment:L?{module:ye,entryPoint:"fs_over",targets:[{format:x,blend:{color:pe("one-minus-src-alpha"),alpha:pe("one-minus-src-alpha")}}]}:{module:ye,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:pe("one"),alpha:pe("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!L){this.eps=M("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),n.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const H=GPUShaderStage.FRAGMENT;this.resolveBgl=n.createBindGroupLayout({entries:[{binding:0,visibility:H,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:H,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:H,buffer:{type:"uniform"}}]});const se=n.createShaderModule({label:"mgs_resolve",code:vs});this.resolvePipe=n.createRenderPipeline({layout:n.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:se,entryPoint:"vs_full"},fragment:{module:se,entryPoint:"fs_resolve",targets:[{format:x}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(n=32768){if(!this.mlpAllPipe)return;const l=new Uint32Array(this.params);for(let w=0;w<this.n;w+=n){l[4]=w,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const x=this.device.createCommandEncoder(),g=x.beginComputePass();g.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((B,P)=>g.setBindGroup(P,B)),g.dispatchWorkgroups(Math.ceil(Math.min(n,this.n-w)/tn)),g.end(),this.device.queue.submit([x.finish()]),await this.device.queue.onSubmittedWorkDone()}l[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(n,l){var x,g;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===n&&this.accTex.height===l)return;(x=this.accTex)==null||x.destroy(),(g=this.trTex)==null||g.destroy();const w=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[n,l],format:this.accFormat,usage:w}),this.trTex=this.device.createTexture({label:"mgs T",size:[n,l],format:"r16float",usage:w}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(n,l,w,x){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([w,x,0,0])),this.ensureTargets(w,x);const g=(M,R)=>{const O=n.beginComputePass();O.setPipeline(M),this.computeBgs.forEach((X,D)=>O.setBindGroup(D,X)),!R&&this.cullInfoBg&&O.setBindGroup(3,this.cullInfoBg),R?O.dispatchWorkgroupsIndirect(this.info,4):O.dispatchWorkgroups(Math.ceil(this.n/tn)),O.end()};n.clearBuffer(this.info,0,4),g(this.cullPipe,!1);{const M=n.beginComputePass();M.setPipeline(this.indirectPipe),M.setBindGroup(0,this.indirectBg),M.dispatchWorkgroups(1),M.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(n);const M=n.beginRenderPass({colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});M.setPipeline(this.rasterPipe),M.setBindGroup(0,this.rasterBg),M.drawIndirect(this.drawArgs,0),M.end();return}n.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||g(this.mlpPipe,!0),g(this.prepPipe,!0);const B=n.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});B.setPipeline(this.rasterPipe),B.setBindGroup(0,this.rasterBg),B.drawIndirect(this.drawArgs,0),B.end();const P=n.beginRenderPass({colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});P.setPipeline(this.resolvePipe),P.setBindGroup(0,this.resolveBg),P.draw(3),P.end()}destroy(){var n,l,w;for(const x of this.owned)x.destroy();(n=this.sorter)==null||n.destroy(),(l=this.accTex)==null||l.destroy(),(w=this.trTex)==null||w.destroy()}}const mn={bilinear:0,bicubic:1,hermite:2},Ts=`
struct P { wl: u32, hl: u32, w: u32, h: u32, mode: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var<uniform> p: P;

@vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn f(x: i32, y: i32) -> vec3<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(src, vec2<i32>(xc, yc), 0).rgb;
}
fn gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return f(1, y) - f(0, y); }
    if (x >= i32(p.wl) - 1) { return f(x, y) - f(x - 1, y); }
    return 0.5 * (f(x + 1, y) - f(x - 1, y));
}
fn gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return f(x, 1) - f(x, 0); }
    if (y >= i32(p.hl) - 1) { return f(x, y) - f(x, y - 1); }
    return 0.5 * (f(x, y + 1) - f(x, y - 1));
}
fn gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return gx(x, 1) - gx(x, 0); }
    if (y >= i32(p.hl) - 1) { return gx(x, y) - gx(x, y - 1); }
    return 0.5 * (gx(x, y + 1) - gx(x, y - 1));
}
fn keys(t0: f32) -> f32 {
    let a = -0.75; let t = abs(t0);
    if (t <= 1.0) { return ((a + 2.0) * t - (a + 3.0)) * t * t + 1.0; }
    if (t < 2.0) { return ((a * t - 5.0 * a) * t + 8.0 * a) * t - 4.0 * a; }
    return 0.0;
}
@fragment fn fs(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = i32(fc.x); let Y = i32(fc.y);
    let sx = clamp((f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5, 0.0, f32(p.wl) - 1.0);
    let sy = clamp((f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5, 0.0, f32(p.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(p.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(p.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    var c = vec3<f32>(0.0);
    if (p.mode == 0u) {
        c = mix(mix(f(i0, j0), f(i0 + 1, j0), tx), mix(f(i0, j0 + 1), f(i0 + 1, j0 + 1), tx), ty);
    } else if (p.mode == 1u) {
        for (var dy = -1; dy <= 2; dy++) {
            let wy = keys(f32(dy) - ty); var row = vec3<f32>(0.0);
            for (var dx = -1; dx <= 2; dx++) { row += keys(f32(dx) - tx) * f(i0 + dx, j0 + dy); }
            c += wy * row;
        }
    } else {
        let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
        let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
        let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let i = i0 + a; let j = j0 + b;
                c += f(i, j) * (Hx[a] * Hy[b]) + gx(i, j) * (Gx[a] * Hy[b]) + gy(i, j) * (Hx[a] * Gy[b]) + gxy(i, j) * (Gx[a] * Gy[b]);
            }
        }
    }
    return vec4<f32>(c, 1.0);
}`;class ks{constructor(n,l,w,x){S(this,"pipeline");S(this,"uni");S(this,"bgCache",new Map);S(this,"lowTex",null);S(this,"lowView",null);S(this,"lowSize",[0,0]);S(this,"last","");this.device=n,this.format=l,this.mode=w,this.scale=x;const g=n.createShaderModule({label:"upscaler",code:Ts});this.pipeline=n.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:g,entryPoint:"vs"},fragment:{module:g,entryPoint:"fs",targets:[{format:l}]},primitive:{topology:"triangle-list"}}),this.uni=n.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}lowTarget(n,l){var g;const w=Math.max(1,Math.round(n*this.scale)),x=Math.max(1,Math.round(l*this.scale));return(!this.lowTex||this.lowSize[0]!==w||this.lowSize[1]!==x)&&((g=this.lowTex)==null||g.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[w,x],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.lowSize=[w,x]),{view:this.lowView,w,h:x}}pass(n,l,w,x){const[g,B]=this.lowSize,P=`${g},${B},${w},${x}`;P!==this.last&&(this.device.queue.writeBuffer(this.uni,0,new Uint32Array([g,B,w,x,mn[this.mode],0,0,0])),this.last=P);let M=this.bgCache.get(this.lowView);M||(M=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}}]}),this.bgCache.set(this.lowView,M));const R=n.beginRenderPass({colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});R.setPipeline(this.pipeline),R.setBindGroup(0,M),R.draw(3),R.end()}destroy(){var n;(n=this.lowTex)==null||n.destroy(),this.uni.destroy()}}function Ms(s,n,l){const w=parseFloat(s.get("rs")??"1");if(!(w>0&&w<1))return null;const x=s.get("up")??"hermite";return new ks(n,l,x in mn?x:"hermite",w)}const Qe="rgba8unorm",nn="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",et=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"bitymi_mip0",label:"BITYMI (mips, bias 0)",asset:"bitymimip",note:"diagnostic: atlas mip chain, full per-surfel prefiltering"},{id:"bitymi_mip1",label:"BITYMI (mips, bias 1)",asset:"bitymimip",note:"diagnostic: atlas mip chain, one level less prefiltering"},{id:"bitymi_mipft0",label:"BITYMI (mip-aware ft, bias 0)",asset:"bitymimipft",note:"atlas finetuned with the bias-0 per-surfel mip rule"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],Gs=s=>new Promise(n=>setTimeout(n,s)),ht=()=>new Promise(s=>setTimeout(s,0));function As(s){const n=new TextDecoder().decode(new Uint8Array(s,0,8));if(n!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${n}')`);const l=new DataView(s);let w=null,x=null;for(let g=0;g<l.getUint32(8,!0);g++){const B=12+g*20,P=l.getUint32(B,!0),M=Number(l.getBigUint64(B+4,!0)),R=Number(l.getBigUint64(B+12,!0));P===0||P===1||P===5?w=s.slice(M,M+R):(P===3||P===4)&&(x=s.slice(M,M+R))}if(!w)throw new Error("bundle has no point cloud chunk");return{pc:w,atlas:x}}async function _t(s,n){var O;const l=await fetch(s);if(!l.ok)throw new Error(`${s}: HTTP ${l.status}`);const w=Number(l.headers.get("content-length"))||0,x=(O=l.body)==null?void 0:O.getReader();if(!x)return l.arrayBuffer();const g=[];let B=0,P=0;for(;;){const{done:X,value:D}=await x.read();if(X)break;g.push(D),B+=D.byteLength,B-P>2<<20&&(P=B,n(B/2**20,w?w/2**20:null))}const M=new Uint8Array(B);let R=0;for(const X of g)M.set(X,R),R+=X.byteLength;return M.buffer}function Gt(s,n,l=new Set,w=0){if(!(!s||typeof s!="object"||l.has(s)||w>2)){l.add(s);for(const x of Object.values(s))n.has(x)||(x instanceof GPUBuffer||x instanceof GPUTexture?x.destroy():Array.isArray(x)?x.forEach(g=>Gt(g,n,l,w+1)):x&&typeof x=="object"&&Object.getPrototypeOf(x)===Object.prototype&&Gt(x,n,l,w+1))}}async function zs(s,n,l,w,x){const g=new URLSearchParams(location.search),B=Ms(g,l,Qe),P=(b,I,A,E,F)=>{if(!B){b.render(I,A,E,F);return}const W=B.lowTarget(E,F);b.render(I,W.view,W.w,W.h),B.pass(I,A,E,F)},M=g.get("scene")??"garden",R=(g.get("assets")??`${nn}/bench/${M}`).replace(/\/$/,""),O=l.features.has("texture-compression-bc"),X=l.features.has("texture-compression-astc"),D=g.get("bitymi")??`${nn}/mip_360/${M}_e3rdraw${O||!X?"":"_astc"}.bitymi`,Y=l.features.has("float32-blendable"),ue=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),ne=g.get("byid");let $=ne!==null?ne==="1":!ue,q=g.get("legacy")==="1";n.configure({device:l,format:Qe,alphaMode:"opaque"});const j=new Pt(s,l),oe=new jn(j),fe=document.getElementById("bench-panel"),N=b=>document.getElementById(b),C=b=>{N("status").textContent=b},me=await(await fetch(`${R}/manifest.json`)).json(),re=await Ln(`${R}/${me.cameras}`),le=await(await fetch(`${R}/${me.cameras}`)).json(),[ce,z]=me.resolution,ae=2*Math.atan(z/(2*le[0].fy));j.setFov(ae),j.setFocalRatio(le[0].fx/le[0].fy),j.set_preset(re[0]),oe.resetToCamera();const ye=N("method");for(const b of et)ye.add(new Option(b.label,b.id));const pe=w.info;N("device").textContent=`${pe.vendor||"?"} ${pe.architecture||""} ${pe.device||pe.description||""}`.trim()+` · BC7 ${O?"✓":"✗"} ASTC ${X?"✓":"✗"} · float32-blend ${Y?"✓":"✗"}`;let L=null,H=!1,se=null,be=null,ke=null;const Se=g.get("bitymimip")??D.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmip$1.bitymi"),De=g.get("bitymimipft")??D.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmipft$1.bitymi"),Be=b=>b==="bitymimip"||b==="bitymimipft",Me=b=>["bitymi_mip0","bitymi_mipft0"].includes(b.base??b.id)?0:1;async function he(b){var Z,V;const I=performance.now(),A=(J,ie)=>C(`${b.label}: downloading ${J.toFixed(0)}${ie?` / ${ie.toFixed(0)}`:""} MB`);if(b.asset==="bitymi"||Be(b.asset)){const J=b.asset==="bitymi"?se??(se=await _t(D,A)):b.asset==="bitymimip"?be??(be=await _t(Se,A)):ke??(ke=await _t(De,A)),ie=(b.base??b.id)==="bitymi_oct";C(`${b.label}: parsing`);const{pc:K,atlas:te}=As(J),de=await es(new File([K],"bundle.ply"),l);let Q=null;te&&(Q=Qn(l,Xn(te),!0));const _e=new Mt(de,l,Qe,j.uniform_buffer,x,Q,{fetchById:b.byid??$,octBound:ie,acc16:!1});(b.legacy??q)&&_e.setLegacyRenderer(!0),_e.setAtlasEnabled((b.base??b.id)!=="bitymi_noatlas"),Be(b.asset)&&_e.setMipLodBias(Me(b));let xe=0,Te=0;const Ae=Q?Q.meta.format===3||Q.meta.format===8||Q.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:b,prims:de.num_points,downloadBytes:J.byteLength,gs:_e,oct:ie,atlasKind:Ae,detail:`atlas ${(b.base??b.id)==="bitymi_noatlas"?"OFF (diagnostic)":Ae} · fragment inputs ${b.byid??$?"fetch-by-id":"varyings"} · ${b.legacy??q?"LEGACY renderer":"current renderer"}${ie?" · octagon bound":""}${Be(b.asset)?` · atlas mips (${((V=(Z=Q==null?void 0:Q.meta)==null?void 0:Z.mip_bytes)==null?void 0:V.length)??1} levels)`:""} · ${(performance.now()-I).toFixed(0)} ms load`,render(ze,Ue,Ee,Ie){(Ee!==xe||Ie!==Te)&&(os(Ee,Ie,l,_e.render_settings_buffer),xe=Ee,Te=Ie),_e.frame(ze,Ue,!1)},destroy(){de.surfel_buffer.destroy(),de.sv_params_buffer.destroy(),Q&&(Q.texture.destroy(),Q.rectsBuffer.destroy(),Q.texParamsBuffer.destroy()),Gt(_e,new Set([j.uniform_buffer]))}}}const E=await _t(`${R}/${me.methods[b.asset].file}`,A);C(`${b.label}: uploading`);const F=new Ps(l,xs(E),j.uniform_buffer,Qe,{float32Blend:Y});return{def:b,prims:F.n,downloadBytes:E.byteLength,baseline:F,detail:`${F.label}${b.asset==="mobilegs"?` · shipped model ${(me.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(J,ie,K,te)=>F.frame(J,ie,K,te),destroy:()=>F.destroy()}}async function we(b){var A,E;const I=(L==null?void 0:L.gs)&&L.def.asset===b.asset&&L.oct===((b.base??b.id)==="bitymi_oct");if(L&&L.def.asset===b.asset&&(L.baseline||I)?(L={...L,def:b},(A=L.gs)==null||A.setAtlasEnabled((b.base??b.id)!=="bitymi_noatlas"),Be(b.asset)&&((E=L.gs)==null||E.setMipLodBias(Me(b))),L.gs&&(L.gs.setFetchById(b.byid??$),L.gs.setLegacyRenderer(b.legacy??q),L.detail=L.detail.replace(/^atlas [^·]+·/,`atlas ${(b.base??b.id)==="bitymi_noatlas"?"OFF (diagnostic)":L.atlasKind} ·`).replace(/fragment inputs [a-z-]+/,`fragment inputs ${b.byid??$?"fetch-by-id":"varyings"}`).replace(/(LEGACY|current) renderer/,b.legacy??q?"LEGACY renderer":"current renderer"))):(L==null||L.destroy(),L=null,await l.queue.onSubmittedWorkDone(),L=await he(b)),L.baseline&&L.baseline.kind==="sortfree_weighted"){const F=b.id==="mobilegs_frozen";F&&(j.set_preset(re[0]),C("Mobile-GS: evaluating the MLP once for all Gaussians"),await L.baseline.computeAllMlp()),L.baseline.freezeMlp=F}return N("info").textContent=`${L.def.label}: ${L.prims.toLocaleString()} primitives · ${(L.downloadBytes/2**20).toFixed(1)} MB download · ${L.detail}`,C("ready"),L}ye.onchange=async()=>{if(!(H||c)){H=!0;try{await we(et.find(b=>b.id===ye.value))}catch(b){C(`load failed: ${b}`),console.error(b)}finally{H=!1}}};const Pe=N("byid"),T=N("legacy");Pe.checked=$,T.checked=q;const U=async()=>{if(H||c){Pe.checked=$,T.checked=q;return}if($=Pe.checked,q=T.checked,(L==null?void 0:L.def.id)==="bitymi"){H=!0;try{L.destroy(),L=null,await l.queue.onSubmittedWorkDone(),await we(et[0])}catch(b){C(`load failed: ${b}`),console.error(b)}finally{H=!1}}};Pe.onchange=U,T.onchange=U;let p=0;const t=b=>{p=(b+re.length)%re.length,j.set_preset(re[p]),oe.resetToCamera(),N("view").textContent=`${p+1}/${re.length}`};N("prev").onclick=()=>t(p-1),N("next").onclick=()=>t(p+1);let c=!1,i=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(i=!0)});const f=()=>({warmupS:Number(N("warmup").value),measureS:Number(N("measure").value),minFrames:Number(N("minframes").value),maxS:Number(N("maxs").value),cooldownS:Number(N("cooldown").value),rounds:Number(N("rounds").value),frozen:N("frozen").checked,diag:N("diag").checked});window.__setMipBias=b=>{var I;(I=L==null?void 0:L.gs)==null||I.setMipLodBias(b)},window.__mipHistogram=async b=>{const I=L==null?void 0:L.gs;if(!I)throw new Error("BITYMI not loaded");const A=l.createTexture({size:[ce,z],format:Qe,usage:GPUTextureUsage.RENDER_ATTACHMENT});j.setRenderSize(ce,z),j.setFov(ae),j.set_preset(re[b]);const E=l.createCommandEncoder();P(L,E,A.createView(),ce,z);const F=I.splat_2d_buffer.size,W=l.createBuffer({size:F,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Z=l.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});E.copyBufferToBuffer(I.splat_2d_buffer,0,W,0,F),E.copyBufferToBuffer(I.sort_info_buffer,0,Z,0,16),l.queue.submit([E.finish()]),await Promise.all([W.mapAsync(GPUMapMode.READ),Z.mapAsync(GPUMapMode.READ)]);const V=new Uint32Array(Z.getMappedRange())[0],J=new Uint32Array(W.getMappedRange()),ie=new Float32Array(J.buffer),K=[0,0,0,0,0],te=[0,0,0,0,0],de=Q=>{const _e=Q>>10&31,xe=Q&1023;return _e===0?xe/1024*2**-14:2**(_e-15)*(1+xe/1024)};for(let Q=0;Q<V;Q++){const _e=Math.min(4,Math.round(ie[Q*24+23])),xe=J[Q*24+11],Te=4*de(xe&65535)*de(xe>>>16);K[_e]++,te[_e]+=Te}return W.unmap(),Z.unmap(),W.destroy(),Z.destroy(),A.destroy(),j.clearRenderSize(),j.setFov(ae),t(p),{n:V,cnt:K,area:te}},window.__setMipMode=b=>{var I;(I=L==null?void 0:L.gs)==null||I.setMipMode(b)},window.__benchRender=async b=>{if(!L)throw new Error("nothing loaded");const I=l.createTexture({size:[ce,z],format:Qe,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),A=Math.ceil(ce*4/256)*256,E=l.createBuffer({size:A*z,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});j.setRenderSize(ce,z),j.setFov(ae),j.set_preset(re[b]);const F=l.createCommandEncoder();P(L,F,I.createView(),ce,z),F.copyTextureToBuffer({texture:I},{buffer:E,bytesPerRow:A,rowsPerImage:z},[ce,z,1]),l.queue.submit([F.finish()]),await E.mapAsync(GPUMapMode.READ);const W=new Uint8Array(E.getMappedRange()),Z=new Uint8Array(ce*z*4);for(let J=0;J<z;J++)Z.set(W.subarray(J*A,J*A+ce*4),J*ce*4);E.unmap(),E.destroy(),I.destroy(),j.clearRenderSize(),j.setFov(ae),t(p);let V="";for(let J=0;J<Z.length;J+=32768)V+=String.fromCharCode(...Z.subarray(J,J+32768));return{w:ce,h:z,b64:btoa(V)}};async function _(b,I,A){const E=l.createTexture({size:[ce,z],format:Qe,usage:GPUTextureUsage.RENDER_ATTACHMENT}),F=E.createView();j.setRenderSize(ce,z),j.setFov(ae);let W=0;const Z=async K=>{const te=performance.now();for(let de=0;de<K;de++){j.set_preset(re[W++%re.length]);const Q=l.createCommandEncoder();P(b,Q,F,ce,z),l.queue.submit([Q.finish()])}return await l.queue.onSubmittedWorkDone(),performance.now()-te};let V=1;const J=(K,te)=>{V=Math.max(1,Math.min(60,Math.round(te*250/Math.max(K,1))))},ie=`${b.def.label} · round ${I+1}`;i=!1;try{let K=0,te=0;for(;K<A.warmupS*1e3||te<3;){const xe=V,Te=await Z(xe);K+=Te,te+=xe,J(Te,xe),C(`${ie}: warmup ${(K/1e3).toFixed(1)}/${A.warmupS} s`),await ht()}let de=0,Q=0;const _e=[];for(;(de<A.measureS*1e3||Q<A.minFrames)&&de<A.maxS*1e3;){const xe=V,Te=await Z(xe);de+=Te,Q+=xe,_e.push(+(Te/xe).toFixed(3)),J(Te,xe),C(`${ie}: ${(1e3*Q/de).toFixed(1)} FPS · ${Q} frames · ${(de/1e3).toFixed(1)} s`),await ht()}return{round:I,frames:Q,ms:de,fps:1e3*Q/de,chunkMsPerFrame:_e,interrupted:i}}finally{E.destroy(),j.clearRenderSize(),j.setFov(ae),t(p)}}let m=null,v=et;function e(b,I){var Z;const A=((Z=v.find(V=>(V.base??V.id)==="bitymi"))==null?void 0:Z.id)??"bitymi",E=b.get(A),F=E&&E.length?E.reduce((V,J)=>V+J.frames,0)/E.reduce((V,J)=>V+J.ms,0)*1e3:0,W=v.filter(V=>b.has(V.id)).map(V=>{const J=b.get(V.id),ie=J.length?J.reduce((te,de)=>te+de.frames,0)/J.reduce((te,de)=>te+de.ms,0)*1e3:0,K=I.get(V.id);return`<tr><td>${V.label}</td><td>${K?K.prims.toLocaleString():""}</td><td>${K?(K.bytes/2**20).toFixed(0):""}</td><td>${J.map(te=>te.fps.toFixed(1)+(te.interrupted?"⚠":"")).join(" / ")}</td><td><b>${ie?ie.toFixed(1):""}</b></td><td>${ie?(1e3/ie).toFixed(1):""}</td><td>${F&&ie&&!V.id.startsWith("bitymi")?(F/ie).toFixed(1)+"×":""}</td></tr>`}).join("");N("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${W}</table>`}async function d(){var J,ie;if(c||H)return;c=!0;const b=f(),I=N("benchall");I.disabled=!0,ye.disabled=!0;let A=null;try{A=await((J=navigator.wakeLock)==null?void 0:J.request("screen"))}catch{}const E=(ie=g.get("only"))==null?void 0:ie.split(",").map(K=>K.trim()).filter(Boolean);let F=E!=null&&E.length?et.filter(K=>E.includes(K.id)):et.filter(K=>(b.frozen||K.id!=="mobilegs_frozen")&&(b.diag||!K.id.startsWith("bitymi_")));g.get("combos")==="1"&&(F=F.flatMap(K=>K.asset.startsWith("bitymi")?[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([te,de])=>({...K,base:K.id,byid:te,legacy:de,id:`${K.id}@${te?"byid":"vary"}${de?"+legacy":""}`,label:`${K.label} · ${te?"byid":"varyings"}${de?" · legacy":""}`})):[K])),v=F;const W=new Map,Z=new Map,V=new Date().toISOString();try{let K=!0;for(let te=0;te<b.rounds;te++){const de=te%2===0?F:[...F].reverse();for(const Q of de){const _e=await we(Q);if(Z.set(Q.id,{prims:_e.prims,bytes:_e.downloadBytes,detail:_e.detail}),!K&&b.cooldownS>0)for(let Te=b.cooldownS;Te>0;Te--)C(`cooldown ${Te} s (next: ${Q.label})`),await Gs(1e3);K=!1;const xe=await _(_e,te,b);W.has(Q.id)||W.set(Q.id,[]),W.get(Q.id).push(xe),e(W,Z)}}m={kind:"bitymi-mobile-bench",version:1,scene:M,started:V,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:pe.vendor,architecture:pe.architecture,device:pe.device,description:pe.description},features:{bc:O,astc:X,float32Blendable:Y,timestampQuery:l.features.has("timestamp-query")},resolution:[ce,z],fovY:ae,cameras:re.length,assets:R,bitymiUrl:D,bitymiVariant:{fetchById:$,legacy:q},protocol:{...b,order:F.map(te=>te.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm",renderScale:B?B.scale:1,upscaler:B?B.mode:"none"},methods:F.map(te=>({id:te.id,base:te.base,byid:te.byid,legacy:te.legacy,label:te.label,note:te.note,...Z.get(te.id),fps:(()=>{const de=W.get(te.id)??[],Q=de.reduce((_e,xe)=>_e+xe.ms,0);return Q?1e3*de.reduce((_e,xe)=>_e+xe.frames,0)/Q:null})(),rounds:W.get(te.id)??[]}))},C(`done · ${F.length} methods × ${b.rounds} rounds`),N("summary").value=a(m),N("export").style.display=""}catch(K){C(`bench failed: ${K}`),console.error(K)}finally{try{await(A==null?void 0:A.release())}catch{}I.disabled=!1,ye.disabled=!1,c=!1,ye.value=(L==null?void 0:L.def.id)??"bitymi"}}function a(b){var V,J,ie;const I=b.methods.find(K=>(K.base??K.id)==="bitymi"),A=I==null?void 0:I.fps,E=[b.adapter.vendor,b.adapter.architecture,b.adapter.device||b.adapter.description].filter(Boolean).join(" ")||"unknown GPU",F=(((V=b.userAgent.match(/\(([^)]*)\)/))==null?void 0:V[1])??"")+" "+(((J=b.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:J[0])??""),W=b.protocol;return[...W.renderScale&&W.renderScale<1?[`UPSCALED: rendered at ${W.renderScale}x (${Math.round(b.resolution[0]*W.renderScale)}x${Math.round(b.resolution[1]*W.renderScale)}) + ${W.upscaler} upscale to ${b.resolution[0]}x${b.resolution[1]}`]:[],`**${b.scene} render benchmark** · ${E} · ${F.trim()}`,`${b.resolution[0]}×${b.resolution[1]}, ${b.cameras} test views · ${W.rounds} rounds mirrored · warmup ${W.warmupS} s · measure ≥${W.measureS} s / ${W.minFrames} frames · cooldown ${W.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...b.methods.map(K=>{var te;return`| ${K.label} | ${((te=K.prims)==null?void 0:te.toLocaleString())??""} | ${K.bytes?(K.bytes/2**20).toFixed(0):""} | ${K.rounds.map(de=>de.fps.toFixed(1)+(de.interrupted?" (tab hidden)":"")).join(" / ")} | ${K.fps?K.fps.toFixed(1):""} | ${K.fps?(1e3/K.fps).toFixed(1):""} | ${!K.id.startsWith("bitymi")&&A&&K.fps?(A/K.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${(I==null?void 0:I.detail)??((ie=b.methods.find(K=>K.id.startsWith("bitymi")))==null?void 0:ie.detail)??""}. Mobile-GS blend target: ${b.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}async function o(){var K,te,de;if(c||H)return;c=!0;const b=N("abrun");b.disabled=!0,N("benchall").disabled=!0,ye.disabled=!0;const I=Number(g.get("slice")??3),A=Number(g.get("cycles")??10),E=g.get("combos")==="1",F=[{id:"stock",label:"BITYMI (no mips)",atlas:!0,mips:!1,bias:1},{id:"noatlas",label:"BITYMI (atlas off)",atlas:!1,mips:!1,bias:1},{id:"mip0",label:"BITYMI (mips, bias 0)",atlas:!0,mips:!0,bias:0},{id:"mip1",label:"BITYMI (mips, bias 1)",atlas:!0,mips:!0,bias:1}],W=E?F.flatMap(Q=>[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([_e,xe])=>({...Q,byid:_e,legacy:xe,id:`${Q.id}@${_e?"byid":"vary"}${xe?"+legacy":""}`,label:`${Q.label} · ${_e?"byid":"varyings"}${xe?" · legacy":""}`}))):F.map(Q=>({...Q,byid:$,legacy:q}));let Z=null;try{Z=await((K=navigator.wakeLock)==null?void 0:K.request("screen"))}catch{}const V=new Date().toISOString(),J=l.createTexture({size:[ce,z],format:Qe,usage:GPUTextureUsage.RENDER_ATTACHMENT}),ie=J.createView();try{const Q=await we(et.find(ge=>ge.id==="bitymi_mip1")),_e=Q.gs,xe=ge=>{_e.setFetchById(ge.byid),_e.setLegacyRenderer(ge.legacy),_e.setMipLodBias(ge.bias),_e.setMipMode(ge.mips),_e.setAtlasEnabled(ge.atlas)};j.setRenderSize(ce,z),j.setFov(ae);let Te=0;const Ae=async ge=>{const Ge=performance.now();for(let $e=0;$e<ge;$e++){j.set_preset(re[Te++%re.length]);const Re=l.createCommandEncoder();P(Q,Re,ie,ce,z),l.queue.submit([Re.finish()])}return await l.queue.onSubmittedWorkDone(),performance.now()-Ge};for(const ge of W)xe(ge),C(`A/B warmup: ${ge.label}`),await ht(),await Ae(10);const ze={};for(const ge of W)ze[ge.id]=[];for(let ge=0;ge<A;ge++){const Ge=W.map(($e,Re)=>W[(Re+ge)%W.length]);for(const $e of Ge){xe($e),await Ae(3);let Re=0,Ze=0,Ye=4;for(;Re<I*1e3;){const Ke=await Ae(Ye);Re+=Ke,Ze+=Ye,Ye=Math.max(1,Math.min(60,Math.round(Ye*250/Math.max(Ke,1))))}ze[$e.id].push(1e3*Ze/Re),C(`A/B cycle ${ge+1}/${A} · ${$e.label}: ${(1e3*Ze/Re).toFixed(1)} FPS`),await ht()}}const Ue=W[0].id,Ee=W.map(ge=>{const Ge=ze[ge.id],$e=Ge.reduce((Ce,qe)=>Ce+qe,0)/Ge.length,Re=Ge.map((Ce,qe)=>Ce/ze[Ue][qe]),Ze=Re.reduce((Ce,qe)=>Ce+qe,0)/Re.length,Ye=Math.sqrt(Re.reduce((Ce,qe)=>Ce+(qe-Ze)**2,0)/Math.max(1,Re.length-1)/Re.length),Ke=Math.sqrt(Ge.reduce((Ce,qe)=>Ce+(qe-$e)**2,0)/Math.max(1,Ge.length-1));return{...ge,fps:$e,fpsSd:Ke,ratio:Ze,ratioSe:Ye,perCycle:Ge.map(Ce=>+Ce.toFixed(2))}}),Ie=[pe.vendor,pe.architecture,pe.device||pe.description].filter(Boolean).join(" ")||"unknown GPU",Oe=(((te=navigator.userAgent.match(/\(([^)]*)\)/))==null?void 0:te[1])??"")+" "+(((de=navigator.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:de[0])??""),Le=[`**${M} interleaved A/B (BITYMI variants)** · ${Ie} · ${Oe.trim()}`,`${ce}×${z}, ${re.length} test views · ${A} cycles × ${W.length} variants × ${I} s slices, rotating order · ratio = paired per-cycle FPS / stock ± s.e.`,"","| variant | FPS (mean ± sd over cycles) | ms/frame | vs stock (paired) |","|---|---:|---:|---:|",...Ee.map(ge=>`| ${ge.label} | ${ge.fps.toFixed(1)} ± ${ge.fpsSd.toFixed(1)} | ${(1e3/ge.fps).toFixed(2)} | ${ge.id===Ue?"1.00":`${ge.ratio.toFixed(3)} ± ${ge.ratioSe.toFixed(3)}`} |`),"",`bundle: ${Se.split("/").pop()} (mips off = the stock atlas: level 0 is identical) · ${Q.detail}`].join(`
`);m={kind:"bitymi-interleaved-ab",version:1,scene:M,started:V,finished:new Date().toISOString(),userAgent:navigator.userAgent,adapter:{vendor:pe.vendor,architecture:pe.architecture,device:pe.device,description:pe.description},resolution:[ce,z],slice_s:I,cycles:A,variants:Ee},N("summary").value=Le,N("results").innerHTML="<table><tr><th>variant</th><th>FPS</th><th>vs stock</th></tr>"+Ee.map(ge=>`<tr><td>${ge.label}</td><td>${ge.fps.toFixed(1)} ± ${ge.fpsSd.toFixed(1)}</td><td>${ge.id===Ue?"1.00":`${ge.ratio.toFixed(3)} ± ${ge.ratioSe.toFixed(3)}`}</td></tr>`).join("")+"</table>",N("export").style.display="",C(`A/B done · ${A} cycles × ${W.length} variants`),window.__abText=Le}catch(Q){C(`A/B failed: ${Q}`),console.error(Q)}finally{J.destroy(),j.clearRenderSize(),j.setFov(ae),t(p);try{await(Z==null?void 0:Z.release())}catch{}b.disabled=!1,N("benchall").disabled=!1,ye.disabled=!1,c=!1}}N("abrun").onclick=()=>o();const r=async(b,I)=>{try{await navigator.clipboard.writeText(b)}catch{const A=N("summary");A.value=b,A.select(),document.execCommand("copy")}C(`${I} copied`)};N("benchall").onclick=()=>d(),N("copytable").onclick=()=>{m&&r(m.kind==="bitymi-interleaved-ab"?window.__abText:a(m),"table")},N("copy").onclick=()=>{m&&r(JSON.stringify(m,null,1),"JSON")},N("download").onclick=()=>{if(!m)return;const b=document.createElement("a");b.href=URL.createObjectURL(new Blob([JSON.stringify(m,null,1)],{type:"application/json"})),b.download=`bench_${M}_${(pe.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,b.click()};const u=()=>{s.width=Math.max(1,Math.round(s.clientWidth)),s.height=Math.max(1,Math.round(s.clientHeight)),j.on_update_canvas()};new ResizeObserver(u).observe(s),u();let y=performance.now(),h=0,k=Promise.resolve();async function G(){const b=performance.now(),I=Math.min(.1,(b-y)/1e3);if(y=b,!c&&L&&!H){oe.update(I),await k;const A=L;if(!A||c||H){requestAnimationFrame(G);return}const E=performance.now(),F=l.createCommandEncoder();P(A,F,n.getCurrentTexture().createView(),s.width,s.height),l.queue.submit([F.finish()]),k=l.queue.onSubmittedWorkDone().then(()=>{const W=performance.now()-E;h=h?.9*h+.1*W:W,N("live").textContent=`${(1e3/h).toFixed(0)} FPS live (${s.width}×${s.height}, vsync-capped)`})}requestAnimationFrame(G)}requestAnimationFrame(G),fe.style.display="",ye.value="bitymi",H=!0;try{await we(et[0])}catch(b){C(`load failed: ${b}`),console.error(b)}finally{H=!1}}(async()=>{const s=g=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${g}</p>`)};if(navigator.gpu===void 0)return s("WebGPU is not supported in this browser.");const n=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(n===null)return s("No WebGPU adapter available.");const l=[];for(const g of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])n.features.has(g)&&l.push(g);if(n.limits.maxStorageBuffersPerShaderStage<10)return s(`This GPU exposes ${n.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const w=await n.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize}});w.lost.then(g=>s(`GPU device lost: ${g.message}`)),w.addEventListener("uncapturederror",g=>{var B;return console.error("[bench] WebGPU error:",((B=g.error)==null?void 0:B.message)??g.error)});const x=document.querySelector("#webgpu-canvas");await zs(x,x.getContext("webgpu"),w,n,l)})();
