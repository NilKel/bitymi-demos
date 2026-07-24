var bl=Object.defineProperty;var vl=(r,l,f)=>l in r?bl(r,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[l]=f;var Z=(r,l,f)=>(vl(r,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))C(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&C(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function C(w){if(w.ep)return;w.ep=!0;const k=f(w);fetch(w.href,k)}})();function gl(r,l){return class extends r{constructor(...f){super(...f),l(this)}}}const wl=gl(Array,r=>r.fill(0));let Re=1e-6;function xl(r){function l(y=0,P=0){const E=new r(2);return y!==void 0&&(E[0]=y,P!==void 0&&(E[1]=P)),E}const f=l;function C(y,P,E){const i=E??new r(2);return i[0]=y,i[1]=P,i}function w(y,P){const E=P??new r(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function k(y,P){const E=P??new r(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function M(y,P){const E=P??new r(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function O(y,P=0,E=1,i){const m=i??new r(2);return m[0]=Math.min(E,Math.max(P,y[0])),m[1]=Math.min(E,Math.max(P,y[1])),m}function T(y,P,E){const i=E??new r(2);return i[0]=y[0]+P[0],i[1]=y[1]+P[1],i}function z(y,P,E,i){const m=i??new r(2);return m[0]=y[0]+P[0]*E,m[1]=y[1]+P[1]*E,m}function V(y,P){const E=y[0],i=y[1],m=P[0],u=P[1],p=Math.sqrt(E*E+i*i),a=Math.sqrt(m*m+u*u),_=p*a,x=_&&re(y,P)/_;return Math.acos(x)}function G(y,P,E){const i=E??new r(2);return i[0]=y[0]-P[0],i[1]=y[1]-P[1],i}const H=G;function I(y,P){return Math.abs(y[0]-P[0])<Re&&Math.abs(y[1]-P[1])<Re}function Y(y,P){return y[0]===P[0]&&y[1]===P[1]}function K(y,P,E,i){const m=i??new r(2);return m[0]=y[0]+E*(P[0]-y[0]),m[1]=y[1]+E*(P[1]-y[1]),m}function N(y,P,E,i){const m=i??new r(2);return m[0]=y[0]+E[0]*(P[0]-y[0]),m[1]=y[1]+E[1]*(P[1]-y[1]),m}function de(y,P,E){const i=E??new r(2);return i[0]=Math.max(y[0],P[0]),i[1]=Math.max(y[1],P[1]),i}function U(y,P,E){const i=E??new r(2);return i[0]=Math.min(y[0],P[0]),i[1]=Math.min(y[1],P[1]),i}function X(y,P,E){const i=E??new r(2);return i[0]=y[0]*P,i[1]=y[1]*P,i}const W=X;function ce(y,P,E){const i=E??new r(2);return i[0]=y[0]/P,i[1]=y[1]/P,i}function $(y,P){const E=P??new r(2);return E[0]=1/y[0],E[1]=1/y[1],E}const fe=$;function j(y,P,E){const i=E??new r(3),m=y[0]*P[1]-y[1]*P[0];return i[0]=0,i[1]=0,i[2]=m,i}function re(y,P){return y[0]*P[0]+y[1]*P[1]}function ye(y){const P=y[0],E=y[1];return Math.sqrt(P*P+E*E)}const Ve=ye;function oe(y){const P=y[0],E=y[1];return P*P+E*E}const he=oe;function be(y,P){const E=y[0]-P[0],i=y[1]-P[1];return Math.sqrt(E*E+i*i)}const we=be;function Ce(y,P){const E=y[0]-P[0],i=y[1]-P[1];return E*E+i*i}const J=Ce;function Q(y,P){const E=P??new r(2),i=y[0],m=y[1],u=Math.sqrt(i*i+m*m);return u>1e-5?(E[0]=i/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function ne(y,P){const E=P??new r(2);return E[0]=-y[0],E[1]=-y[1],E}function ee(y,P){const E=P??new r(2);return E[0]=y[0],E[1]=y[1],E}const Pe=ee;function ke(y,P,E){const i=E??new r(2);return i[0]=y[0]*P[0],i[1]=y[1]*P[1],i}const ze=ke;function ve(y,P,E){const i=E??new r(2);return i[0]=y[0]/P[0],i[1]=y[1]/P[1],i}const De=ve;function Oe(y=1,P){const E=P??new r(2),i=Math.random()*2*Math.PI;return E[0]=Math.cos(i)*y,E[1]=Math.sin(i)*y,E}function B(y){const P=y??new r(2);return P[0]=0,P[1]=0,P}function q(y,P,E){const i=E??new r(2),m=y[0],u=y[1];return i[0]=m*P[0]+u*P[4]+P[12],i[1]=m*P[1]+u*P[5]+P[13],i}function g(y,P,E){const i=E??new r(2),m=y[0],u=y[1];return i[0]=P[0]*m+P[4]*u+P[8],i[1]=P[1]*m+P[5]*u+P[9],i}function o(y,P,E,i){const m=i??new r(2),u=y[0]-P[0],p=y[1]-P[1],a=Math.sin(E),_=Math.cos(E);return m[0]=u*_-p*a+P[0],m[1]=u*a+p*_+P[1],m}function h(y,P,E){const i=E??new r(2);return Q(y,i),X(i,P,i)}function d(y,P,E){const i=E??new r(2);return ye(y)>P?h(y,P,i):ee(y,i)}function b(y,P,E){const i=E??new r(2);return K(y,P,.5,i)}return{create:l,fromValues:f,set:C,ceil:w,floor:k,round:M,clamp:O,add:T,addScaled:z,angle:V,subtract:G,sub:H,equalsApproximately:I,equals:Y,lerp:K,lerpV:N,max:de,min:U,mulScalar:X,scale:W,divScalar:ce,inverse:$,invert:fe,cross:j,dot:re,length:ye,len:Ve,lengthSq:oe,lenSq:he,distance:be,dist:we,distanceSq:Ce,distSq:J,normalize:Q,negate:ne,copy:ee,clone:Pe,multiply:ke,mul:ze,divide:ve,div:De,random:Oe,zero:B,transformMat4:q,transformMat3:g,rotate:o,setLength:h,truncate:d,midpoint:b}}const Ai=new Map;function Hi(r){let l=Ai.get(r);return l||(l=xl(r),Ai.set(r,l)),l}function yl(r){function l(a,_,x){const v=new r(3);return a!==void 0&&(v[0]=a,_!==void 0&&(v[1]=_,x!==void 0&&(v[2]=x))),v}const f=l;function C(a,_,x,v){const A=v??new r(3);return A[0]=a,A[1]=_,A[2]=x,A}function w(a,_){const x=_??new r(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,_){const x=_??new r(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function M(a,_){const x=_??new r(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function O(a,_=0,x=1,v){const A=v??new r(3);return A[0]=Math.min(x,Math.max(_,a[0])),A[1]=Math.min(x,Math.max(_,a[1])),A[2]=Math.min(x,Math.max(_,a[2])),A}function T(a,_,x){const v=x??new r(3);return v[0]=a[0]+_[0],v[1]=a[1]+_[1],v[2]=a[2]+_[2],v}function z(a,_,x,v){const A=v??new r(3);return A[0]=a[0]+_[0]*x,A[1]=a[1]+_[1]*x,A[2]=a[2]+_[2]*x,A}function V(a,_){const x=a[0],v=a[1],A=a[2],R=_[0],F=_[1],ue=_[2],ae=Math.sqrt(x*x+v*v+A*A),te=Math.sqrt(R*R+F*F+ue*ue),ge=ae*te,Be=ge&&re(a,_)/ge;return Math.acos(Be)}function G(a,_,x){const v=x??new r(3);return v[0]=a[0]-_[0],v[1]=a[1]-_[1],v[2]=a[2]-_[2],v}const H=G;function I(a,_){return Math.abs(a[0]-_[0])<Re&&Math.abs(a[1]-_[1])<Re&&Math.abs(a[2]-_[2])<Re}function Y(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function K(a,_,x,v){const A=v??new r(3);return A[0]=a[0]+x*(_[0]-a[0]),A[1]=a[1]+x*(_[1]-a[1]),A[2]=a[2]+x*(_[2]-a[2]),A}function N(a,_,x,v){const A=v??new r(3);return A[0]=a[0]+x[0]*(_[0]-a[0]),A[1]=a[1]+x[1]*(_[1]-a[1]),A[2]=a[2]+x[2]*(_[2]-a[2]),A}function de(a,_,x){const v=x??new r(3);return v[0]=Math.max(a[0],_[0]),v[1]=Math.max(a[1],_[1]),v[2]=Math.max(a[2],_[2]),v}function U(a,_,x){const v=x??new r(3);return v[0]=Math.min(a[0],_[0]),v[1]=Math.min(a[1],_[1]),v[2]=Math.min(a[2],_[2]),v}function X(a,_,x){const v=x??new r(3);return v[0]=a[0]*_,v[1]=a[1]*_,v[2]=a[2]*_,v}const W=X;function ce(a,_,x){const v=x??new r(3);return v[0]=a[0]/_,v[1]=a[1]/_,v[2]=a[2]/_,v}function $(a,_){const x=_??new r(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const fe=$;function j(a,_,x){const v=x??new r(3),A=a[2]*_[0]-a[0]*_[2],R=a[0]*_[1]-a[1]*_[0];return v[0]=a[1]*_[2]-a[2]*_[1],v[1]=A,v[2]=R,v}function re(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function ye(a){const _=a[0],x=a[1],v=a[2];return Math.sqrt(_*_+x*x+v*v)}const Ve=ye;function oe(a){const _=a[0],x=a[1],v=a[2];return _*_+x*x+v*v}const he=oe;function be(a,_){const x=a[0]-_[0],v=a[1]-_[1],A=a[2]-_[2];return Math.sqrt(x*x+v*v+A*A)}const we=be;function Ce(a,_){const x=a[0]-_[0],v=a[1]-_[1],A=a[2]-_[2];return x*x+v*v+A*A}const J=Ce;function Q(a,_){const x=_??new r(3),v=a[0],A=a[1],R=a[2],F=Math.sqrt(v*v+A*A+R*R);return F>1e-5?(x[0]=v/F,x[1]=A/F,x[2]=R/F):(x[0]=0,x[1]=0,x[2]=0),x}function ne(a,_){const x=_??new r(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function ee(a,_){const x=_??new r(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const Pe=ee;function ke(a,_,x){const v=x??new r(3);return v[0]=a[0]*_[0],v[1]=a[1]*_[1],v[2]=a[2]*_[2],v}const ze=ke;function ve(a,_,x){const v=x??new r(3);return v[0]=a[0]/_[0],v[1]=a[1]/_[1],v[2]=a[2]/_[2],v}const De=ve;function Oe(a=1,_){const x=_??new r(3),v=Math.random()*2*Math.PI,A=Math.random()*2-1,R=Math.sqrt(1-A*A)*a;return x[0]=Math.cos(v)*R,x[1]=Math.sin(v)*R,x[2]=A*a,x}function B(a){const _=a??new r(3);return _[0]=0,_[1]=0,_[2]=0,_}function q(a,_,x){const v=x??new r(3),A=a[0],R=a[1],F=a[2],ue=_[3]*A+_[7]*R+_[11]*F+_[15]||1;return v[0]=(_[0]*A+_[4]*R+_[8]*F+_[12])/ue,v[1]=(_[1]*A+_[5]*R+_[9]*F+_[13])/ue,v[2]=(_[2]*A+_[6]*R+_[10]*F+_[14])/ue,v}function g(a,_,x){const v=x??new r(3),A=a[0],R=a[1],F=a[2];return v[0]=A*_[0*4+0]+R*_[1*4+0]+F*_[2*4+0],v[1]=A*_[0*4+1]+R*_[1*4+1]+F*_[2*4+1],v[2]=A*_[0*4+2]+R*_[1*4+2]+F*_[2*4+2],v}function o(a,_,x){const v=x??new r(3),A=a[0],R=a[1],F=a[2];return v[0]=A*_[0]+R*_[4]+F*_[8],v[1]=A*_[1]+R*_[5]+F*_[9],v[2]=A*_[2]+R*_[6]+F*_[10],v}function h(a,_,x){const v=x??new r(3),A=_[0],R=_[1],F=_[2],ue=_[3]*2,ae=a[0],te=a[1],ge=a[2],Be=R*ge-F*te,me=F*ae-A*ge,Se=A*te-R*ae;return v[0]=ae+Be*ue+(R*Se-F*me)*2,v[1]=te+me*ue+(F*Be-A*Se)*2,v[2]=ge+Se*ue+(A*me-R*Be)*2,v}function d(a,_){const x=_??new r(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function b(a,_,x){const v=x??new r(3),A=_*4;return v[0]=a[A+0],v[1]=a[A+1],v[2]=a[A+2],v}function y(a,_){const x=_??new r(3),v=a[0],A=a[1],R=a[2],F=a[4],ue=a[5],ae=a[6],te=a[8],ge=a[9],Be=a[10];return x[0]=Math.sqrt(v*v+A*A+R*R),x[1]=Math.sqrt(F*F+ue*ue+ae*ae),x[2]=Math.sqrt(te*te+ge*ge+Be*Be),x}function P(a,_,x,v){const A=v??new r(3),R=[],F=[];return R[0]=a[0]-_[0],R[1]=a[1]-_[1],R[2]=a[2]-_[2],F[0]=R[0],F[1]=R[1]*Math.cos(x)-R[2]*Math.sin(x),F[2]=R[1]*Math.sin(x)+R[2]*Math.cos(x),A[0]=F[0]+_[0],A[1]=F[1]+_[1],A[2]=F[2]+_[2],A}function E(a,_,x,v){const A=v??new r(3),R=[],F=[];return R[0]=a[0]-_[0],R[1]=a[1]-_[1],R[2]=a[2]-_[2],F[0]=R[2]*Math.sin(x)+R[0]*Math.cos(x),F[1]=R[1],F[2]=R[2]*Math.cos(x)-R[0]*Math.sin(x),A[0]=F[0]+_[0],A[1]=F[1]+_[1],A[2]=F[2]+_[2],A}function i(a,_,x,v){const A=v??new r(3),R=[],F=[];return R[0]=a[0]-_[0],R[1]=a[1]-_[1],R[2]=a[2]-_[2],F[0]=R[0]*Math.cos(x)-R[1]*Math.sin(x),F[1]=R[0]*Math.sin(x)+R[1]*Math.cos(x),F[2]=R[2],A[0]=F[0]+_[0],A[1]=F[1]+_[1],A[2]=F[2]+_[2],A}function m(a,_,x){const v=x??new r(3);return Q(a,v),X(v,_,v)}function u(a,_,x){const v=x??new r(3);return ye(a)>_?m(a,_,v):ee(a,v)}function p(a,_,x){const v=x??new r(3);return K(a,_,.5,v)}return{create:l,fromValues:f,set:C,ceil:w,floor:k,round:M,clamp:O,add:T,addScaled:z,angle:V,subtract:G,sub:H,equalsApproximately:I,equals:Y,lerp:K,lerpV:N,max:de,min:U,mulScalar:X,scale:W,divScalar:ce,inverse:$,invert:fe,cross:j,dot:re,length:ye,len:Ve,lengthSq:oe,lenSq:he,distance:be,dist:we,distanceSq:Ce,distSq:J,normalize:Q,negate:ne,copy:ee,clone:Pe,multiply:ke,mul:ze,divide:ve,div:De,random:Oe,zero:B,transformMat4:q,transformMat4Upper3x3:g,transformMat3:o,transformQuat:h,getTranslation:d,getAxis:b,getScaling:y,rotateX:P,rotateY:E,rotateZ:i,setLength:m,truncate:u,midpoint:p}}const zi=new Map;function Vn(r){let l=zi.get(r);return l||(l=yl(r),zi.set(r,l)),l}function Pl(r){const l=Hi(r),f=Vn(r);function C(o,h,d,b,y,P,E,i,m){const u=new r(12);return u[3]=0,u[7]=0,u[11]=0,o!==void 0&&(u[0]=o,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,y!==void 0&&(u[5]=y,P!==void 0&&(u[6]=P,E!==void 0&&(u[8]=E,i!==void 0&&(u[9]=i,m!==void 0&&(u[10]=m))))))))),u}function w(o,h,d,b,y,P,E,i,m,u){const p=u??new r(12);return p[0]=o,p[1]=h,p[2]=d,p[3]=0,p[4]=b,p[5]=y,p[6]=P,p[7]=0,p[8]=E,p[9]=i,p[10]=m,p[11]=0,p}function k(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[3]=0,d[4]=o[4],d[5]=o[5],d[6]=o[6],d[7]=0,d[8]=o[8],d[9]=o[9],d[10]=o[10],d[11]=0,d}function M(o,h){const d=h??new r(12),b=o[0],y=o[1],P=o[2],E=o[3],i=b+b,m=y+y,u=P+P,p=b*i,a=y*i,_=y*m,x=P*i,v=P*m,A=P*u,R=E*i,F=E*m,ue=E*u;return d[0]=1-_-A,d[1]=a+ue,d[2]=x-F,d[3]=0,d[4]=a-ue,d[5]=1-p-A,d[6]=v+R,d[7]=0,d[8]=x+F,d[9]=v-R,d[10]=1-p-_,d[11]=0,d}function O(o,h){const d=h??new r(12);return d[0]=-o[0],d[1]=-o[1],d[2]=-o[2],d[4]=-o[4],d[5]=-o[5],d[6]=-o[6],d[8]=-o[8],d[9]=-o[9],d[10]=-o[10],d}function T(o,h,d){const b=d??new r(12);return b[0]=o[0]*h,b[1]=o[1]*h,b[2]=o[2]*h,b[4]=o[4]*h,b[5]=o[5]*h,b[6]=o[6]*h,b[8]=o[8]*h,b[9]=o[9]*h,b[10]=o[10]*h,b}const z=T;function V(o,h,d){const b=d??new r(12);return b[0]=o[0]+h[0],b[1]=o[1]+h[1],b[2]=o[2]+h[2],b[4]=o[4]+h[4],b[5]=o[5]+h[5],b[6]=o[6]+h[6],b[8]=o[8]+h[8],b[9]=o[9]+h[9],b[10]=o[10]+h[10],b}function G(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[4]=o[4],d[5]=o[5],d[6]=o[6],d[8]=o[8],d[9]=o[9],d[10]=o[10],d}const H=G;function I(o,h){return Math.abs(o[0]-h[0])<Re&&Math.abs(o[1]-h[1])<Re&&Math.abs(o[2]-h[2])<Re&&Math.abs(o[4]-h[4])<Re&&Math.abs(o[5]-h[5])<Re&&Math.abs(o[6]-h[6])<Re&&Math.abs(o[8]-h[8])<Re&&Math.abs(o[9]-h[9])<Re&&Math.abs(o[10]-h[10])<Re}function Y(o,h){return o[0]===h[0]&&o[1]===h[1]&&o[2]===h[2]&&o[4]===h[4]&&o[5]===h[5]&&o[6]===h[6]&&o[8]===h[8]&&o[9]===h[9]&&o[10]===h[10]}function K(o){const h=o??new r(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function N(o,h){const d=h??new r(12);if(d===o){let _;return _=o[1],o[1]=o[4],o[4]=_,_=o[2],o[2]=o[8],o[8]=_,_=o[6],o[6]=o[9],o[9]=_,d}const b=o[0*4+0],y=o[0*4+1],P=o[0*4+2],E=o[1*4+0],i=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2];return d[0]=b,d[1]=E,d[2]=u,d[4]=y,d[5]=i,d[6]=p,d[8]=P,d[9]=m,d[10]=a,d}function de(o,h){const d=h??new r(12),b=o[0*4+0],y=o[0*4+1],P=o[0*4+2],E=o[1*4+0],i=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2],_=a*i-m*p,x=-a*E+m*u,v=p*E-i*u,A=1/(b*_+y*x+P*v);return d[0]=_*A,d[1]=(-a*y+P*p)*A,d[2]=(m*y-P*i)*A,d[4]=x*A,d[5]=(a*b-P*u)*A,d[6]=(-m*b+P*E)*A,d[8]=v*A,d[9]=(-p*b+y*u)*A,d[10]=(i*b-y*E)*A,d}function U(o){const h=o[0],d=o[0*4+1],b=o[0*4+2],y=o[1*4+0],P=o[1*4+1],E=o[1*4+2],i=o[2*4+0],m=o[2*4+1],u=o[2*4+2];return h*(P*u-m*E)-y*(d*u-m*b)+i*(d*E-P*b)}const X=de;function W(o,h,d){const b=d??new r(12),y=o[0],P=o[1],E=o[2],i=o[4+0],m=o[4+1],u=o[4+2],p=o[8+0],a=o[8+1],_=o[8+2],x=h[0],v=h[1],A=h[2],R=h[4+0],F=h[4+1],ue=h[4+2],ae=h[8+0],te=h[8+1],ge=h[8+2];return b[0]=y*x+i*v+p*A,b[1]=P*x+m*v+a*A,b[2]=E*x+u*v+_*A,b[4]=y*R+i*F+p*ue,b[5]=P*R+m*F+a*ue,b[6]=E*R+u*F+_*ue,b[8]=y*ae+i*te+p*ge,b[9]=P*ae+m*te+a*ge,b[10]=E*ae+u*te+_*ge,b}const ce=W;function $(o,h,d){const b=d??K();return o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[4]=o[4],b[5]=o[5],b[6]=o[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function fe(o,h){const d=h??l.create();return d[0]=o[8],d[1]=o[9],d}function j(o,h,d){const b=d??l.create(),y=h*4;return b[0]=o[y+0],b[1]=o[y+1],b}function re(o,h,d,b){const y=b===o?o:G(o,b),P=d*4;return y[P+0]=h[0],y[P+1]=h[1],y}function ye(o,h){const d=h??l.create(),b=o[0],y=o[1],P=o[4],E=o[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(P*P+E*E),d}function Ve(o,h){const d=h??f.create(),b=o[0],y=o[1],P=o[2],E=o[4],i=o[5],m=o[6],u=o[8],p=o[9],a=o[10];return d[0]=Math.sqrt(b*b+y*y+P*P),d[1]=Math.sqrt(E*E+i*i+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function oe(o,h){const d=h??new r(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=o[0],d[9]=o[1],d[10]=1,d}function he(o,h,d){const b=d??new r(12),y=h[0],P=h[1],E=o[0],i=o[1],m=o[2],u=o[1*4+0],p=o[1*4+1],a=o[1*4+2],_=o[2*4+0],x=o[2*4+1],v=o[2*4+2];return o!==b&&(b[0]=E,b[1]=i,b[2]=m,b[4]=u,b[5]=p,b[6]=a),b[8]=E*y+u*P+_,b[9]=i*y+p*P+x,b[10]=m*y+a*P+v,b}function be(o,h){const d=h??new r(12),b=Math.cos(o),y=Math.sin(o);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function we(o,h,d){const b=d??new r(12),y=o[0*4+0],P=o[0*4+1],E=o[0*4+2],i=o[1*4+0],m=o[1*4+1],u=o[1*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y+a*i,b[1]=p*P+a*m,b[2]=p*E+a*u,b[4]=p*i-a*y,b[5]=p*m-a*P,b[6]=p*u-a*E,o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function Ce(o,h){const d=h??new r(12),b=Math.cos(o),y=Math.sin(o);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function J(o,h,d){const b=d??new r(12),y=o[4],P=o[5],E=o[6],i=o[8],m=o[9],u=o[10],p=Math.cos(h),a=Math.sin(h);return b[4]=p*y+a*i,b[5]=p*P+a*m,b[6]=p*E+a*u,b[8]=p*i-a*y,b[9]=p*m-a*P,b[10]=p*u-a*E,o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2]),b}function Q(o,h){const d=h??new r(12),b=Math.cos(o),y=Math.sin(o);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function ne(o,h,d){const b=d??new r(12),y=o[0*4+0],P=o[0*4+1],E=o[0*4+2],i=o[2*4+0],m=o[2*4+1],u=o[2*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y-a*i,b[1]=p*P-a*m,b[2]=p*E-a*u,b[8]=p*i+a*y,b[9]=p*m+a*P,b[10]=p*u+a*E,o!==b&&(b[4]=o[4],b[5]=o[5],b[6]=o[6]),b}const ee=be,Pe=we;function ke(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ze(o,h,d){const b=d??new r(12),y=h[0],P=h[1];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=P*o[1*4+0],b[5]=P*o[1*4+1],b[6]=P*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function ve(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=o[2],d}function De(o,h,d){const b=d??new r(12),y=h[0],P=h[1],E=h[2];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=P*o[1*4+0],b[5]=P*o[1*4+1],b[6]=P*o[1*4+2],b[8]=E*o[2*4+0],b[9]=E*o[2*4+1],b[10]=E*o[2*4+2],b}function Oe(o,h){const d=h??new r(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(o,h,d){const b=d??new r(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function q(o,h){const d=h??new r(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=o,d}function g(o,h,d){const b=d??new r(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],b[8]=h*o[2*4+0],b[9]=h*o[2*4+1],b[10]=h*o[2*4+2],b}return{add:V,clone:H,copy:G,create:C,determinant:U,equals:Y,equalsApproximately:I,fromMat4:k,fromQuat:M,get3DScaling:Ve,getAxis:j,getScaling:ye,getTranslation:fe,identity:K,inverse:de,invert:X,mul:ce,mulScalar:z,multiply:W,multiplyScalar:T,negate:O,rotate:we,rotateX:J,rotateY:ne,rotateZ:Pe,rotation:be,rotationX:Ce,rotationY:Q,rotationZ:ee,scale:ze,scale3D:De,scaling:ke,scaling3D:ve,set:w,setAxis:re,setTranslation:$,translate:he,translation:oe,transpose:N,uniformScale:B,uniformScale3D:g,uniformScaling:Oe,uniformScaling3D:q}}const Li=new Map;function Sl(r){let l=Li.get(r);return l||(l=Pl(r),Li.set(r,l)),l}function Cl(r){const l=Vn(r);function f(i,m,u,p,a,_,x,v,A,R,F,ue,ae,te,ge,Be){const me=new r(16);return i!==void 0&&(me[0]=i,m!==void 0&&(me[1]=m,u!==void 0&&(me[2]=u,p!==void 0&&(me[3]=p,a!==void 0&&(me[4]=a,_!==void 0&&(me[5]=_,x!==void 0&&(me[6]=x,v!==void 0&&(me[7]=v,A!==void 0&&(me[8]=A,R!==void 0&&(me[9]=R,F!==void 0&&(me[10]=F,ue!==void 0&&(me[11]=ue,ae!==void 0&&(me[12]=ae,te!==void 0&&(me[13]=te,ge!==void 0&&(me[14]=ge,Be!==void 0&&(me[15]=Be)))))))))))))))),me}function C(i,m,u,p,a,_,x,v,A,R,F,ue,ae,te,ge,Be,me){const Se=me??new r(16);return Se[0]=i,Se[1]=m,Se[2]=u,Se[3]=p,Se[4]=a,Se[5]=_,Se[6]=x,Se[7]=v,Se[8]=A,Se[9]=R,Se[10]=F,Se[11]=ue,Se[12]=ae,Se[13]=te,Se[14]=ge,Se[15]=Be,Se}function w(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(i,m){const u=m??new r(16),p=i[0],a=i[1],_=i[2],x=i[3],v=p+p,A=a+a,R=_+_,F=p*v,ue=a*v,ae=a*A,te=_*v,ge=_*A,Be=_*R,me=x*v,Se=x*A,Ue=x*R;return u[0]=1-ae-Be,u[1]=ue+Ue,u[2]=te-Se,u[3]=0,u[4]=ue-Ue,u[5]=1-F-Be,u[6]=ge+me,u[7]=0,u[8]=te+Se,u[9]=ge-me,u[10]=1-F-ae,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(i,m){const u=m??new r(16);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[3]=-i[3],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[7]=-i[7],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u[11]=-i[11],u[12]=-i[12],u[13]=-i[13],u[14]=-i[14],u[15]=-i[15],u}function O(i,m,u){const p=u??new r(16);return p[0]=i[0]+m[0],p[1]=i[1]+m[1],p[2]=i[2]+m[2],p[3]=i[3]+m[3],p[4]=i[4]+m[4],p[5]=i[5]+m[5],p[6]=i[6]+m[6],p[7]=i[7]+m[7],p[8]=i[8]+m[8],p[9]=i[9]+m[9],p[10]=i[10]+m[10],p[11]=i[11]+m[11],p[12]=i[12]+m[12],p[13]=i[13]+m[13],p[14]=i[14]+m[14],p[15]=i[15]+m[15],p}function T(i,m,u){const p=u??new r(16);return p[0]=i[0]*m,p[1]=i[1]*m,p[2]=i[2]*m,p[3]=i[3]*m,p[4]=i[4]*m,p[5]=i[5]*m,p[6]=i[6]*m,p[7]=i[7]*m,p[8]=i[8]*m,p[9]=i[9]*m,p[10]=i[10]*m,p[11]=i[11]*m,p[12]=i[12]*m,p[13]=i[13]*m,p[14]=i[14]*m,p[15]=i[15]*m,p}const z=T;function V(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=i[3],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=i[7],u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=i[11],u[12]=i[12],u[13]=i[13],u[14]=i[14],u[15]=i[15],u}const G=V;function H(i,m){return Math.abs(i[0]-m[0])<Re&&Math.abs(i[1]-m[1])<Re&&Math.abs(i[2]-m[2])<Re&&Math.abs(i[3]-m[3])<Re&&Math.abs(i[4]-m[4])<Re&&Math.abs(i[5]-m[5])<Re&&Math.abs(i[6]-m[6])<Re&&Math.abs(i[7]-m[7])<Re&&Math.abs(i[8]-m[8])<Re&&Math.abs(i[9]-m[9])<Re&&Math.abs(i[10]-m[10])<Re&&Math.abs(i[11]-m[11])<Re&&Math.abs(i[12]-m[12])<Re&&Math.abs(i[13]-m[13])<Re&&Math.abs(i[14]-m[14])<Re&&Math.abs(i[15]-m[15])<Re}function I(i,m){return i[0]===m[0]&&i[1]===m[1]&&i[2]===m[2]&&i[3]===m[3]&&i[4]===m[4]&&i[5]===m[5]&&i[6]===m[6]&&i[7]===m[7]&&i[8]===m[8]&&i[9]===m[9]&&i[10]===m[10]&&i[11]===m[11]&&i[12]===m[12]&&i[13]===m[13]&&i[14]===m[14]&&i[15]===m[15]}function Y(i){const m=i??new r(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function K(i,m){const u=m??new r(16);if(u===i){let Ge;return Ge=i[1],i[1]=i[4],i[4]=Ge,Ge=i[2],i[2]=i[8],i[8]=Ge,Ge=i[3],i[3]=i[12],i[12]=Ge,Ge=i[6],i[6]=i[9],i[9]=Ge,Ge=i[7],i[7]=i[13],i[13]=Ge,Ge=i[11],i[11]=i[14],i[14]=Ge,u}const p=i[0*4+0],a=i[0*4+1],_=i[0*4+2],x=i[0*4+3],v=i[1*4+0],A=i[1*4+1],R=i[1*4+2],F=i[1*4+3],ue=i[2*4+0],ae=i[2*4+1],te=i[2*4+2],ge=i[2*4+3],Be=i[3*4+0],me=i[3*4+1],Se=i[3*4+2],Ue=i[3*4+3];return u[0]=p,u[1]=v,u[2]=ue,u[3]=Be,u[4]=a,u[5]=A,u[6]=ae,u[7]=me,u[8]=_,u[9]=R,u[10]=te,u[11]=Se,u[12]=x,u[13]=F,u[14]=ge,u[15]=Ue,u}function N(i,m){const u=m??new r(16),p=i[0*4+0],a=i[0*4+1],_=i[0*4+2],x=i[0*4+3],v=i[1*4+0],A=i[1*4+1],R=i[1*4+2],F=i[1*4+3],ue=i[2*4+0],ae=i[2*4+1],te=i[2*4+2],ge=i[2*4+3],Be=i[3*4+0],me=i[3*4+1],Se=i[3*4+2],Ue=i[3*4+3],Ge=te*Ue,$e=Se*ge,Ye=R*Ue,We=Se*F,je=R*ge,Xe=te*F,Qe=_*Ue,Je=Se*x,ie=_*ge,pe=te*x,le=_*F,Me=R*x,Ee=ue*me,_e=Be*ae,xe=v*me,Le=Be*A,Ie=v*ae,Ke=ue*A,et=p*me,_t=Be*a,ht=p*ae,mt=ue*a,Ct=p*A,bt=v*a,Ht=Ge*A+We*ae+je*me-($e*A+Ye*ae+Xe*me),Et=$e*a+Qe*ae+pe*me-(Ge*a+Je*ae+ie*me),It=Ye*a+Je*A+le*me-(We*a+Qe*A+Me*me),Yt=Xe*a+ie*A+Me*ae-(je*a+pe*A+le*ae),He=1/(p*Ht+v*Et+ue*It+Be*Yt);return u[0]=He*Ht,u[1]=He*Et,u[2]=He*It,u[3]=He*Yt,u[4]=He*($e*v+Ye*ue+Xe*Be-(Ge*v+We*ue+je*Be)),u[5]=He*(Ge*p+Je*ue+ie*Be-($e*p+Qe*ue+pe*Be)),u[6]=He*(We*p+Qe*v+Me*Be-(Ye*p+Je*v+le*Be)),u[7]=He*(je*p+pe*v+le*ue-(Xe*p+ie*v+Me*ue)),u[8]=He*(Ee*F+Le*ge+Ie*Ue-(_e*F+xe*ge+Ke*Ue)),u[9]=He*(_e*x+et*ge+mt*Ue-(Ee*x+_t*ge+ht*Ue)),u[10]=He*(xe*x+_t*F+Ct*Ue-(Le*x+et*F+bt*Ue)),u[11]=He*(Ke*x+ht*F+bt*ge-(Ie*x+mt*F+Ct*ge)),u[12]=He*(xe*te+Ke*Se+_e*R-(Ie*Se+Ee*R+Le*te)),u[13]=He*(ht*Se+Ee*_+_t*te-(et*te+mt*Se+_e*_)),u[14]=He*(et*R+bt*Se+Le*_-(Ct*Se+xe*_+_t*R)),u[15]=He*(Ct*te+Ie*_+mt*R-(ht*R+bt*te+Ke*_)),u}function de(i){const m=i[0],u=i[0*4+1],p=i[0*4+2],a=i[0*4+3],_=i[1*4+0],x=i[1*4+1],v=i[1*4+2],A=i[1*4+3],R=i[2*4+0],F=i[2*4+1],ue=i[2*4+2],ae=i[2*4+3],te=i[3*4+0],ge=i[3*4+1],Be=i[3*4+2],me=i[3*4+3],Se=ue*me,Ue=Be*ae,Ge=v*me,$e=Be*A,Ye=v*ae,We=ue*A,je=p*me,Xe=Be*a,Qe=p*ae,Je=ue*a,ie=p*A,pe=v*a,le=Se*x+$e*F+Ye*ge-(Ue*x+Ge*F+We*ge),Me=Ue*u+je*F+Je*ge-(Se*u+Xe*F+Qe*ge),Ee=Ge*u+Xe*x+ie*ge-($e*u+je*x+pe*ge),_e=We*u+Qe*x+pe*F-(Ye*u+Je*x+ie*F);return m*le+_*Me+R*Ee+te*_e}const U=N;function X(i,m,u){const p=u??new r(16),a=i[0],_=i[1],x=i[2],v=i[3],A=i[4+0],R=i[4+1],F=i[4+2],ue=i[4+3],ae=i[8+0],te=i[8+1],ge=i[8+2],Be=i[8+3],me=i[12+0],Se=i[12+1],Ue=i[12+2],Ge=i[12+3],$e=m[0],Ye=m[1],We=m[2],je=m[3],Xe=m[4+0],Qe=m[4+1],Je=m[4+2],ie=m[4+3],pe=m[8+0],le=m[8+1],Me=m[8+2],Ee=m[8+3],_e=m[12+0],xe=m[12+1],Le=m[12+2],Ie=m[12+3];return p[0]=a*$e+A*Ye+ae*We+me*je,p[1]=_*$e+R*Ye+te*We+Se*je,p[2]=x*$e+F*Ye+ge*We+Ue*je,p[3]=v*$e+ue*Ye+Be*We+Ge*je,p[4]=a*Xe+A*Qe+ae*Je+me*ie,p[5]=_*Xe+R*Qe+te*Je+Se*ie,p[6]=x*Xe+F*Qe+ge*Je+Ue*ie,p[7]=v*Xe+ue*Qe+Be*Je+Ge*ie,p[8]=a*pe+A*le+ae*Me+me*Ee,p[9]=_*pe+R*le+te*Me+Se*Ee,p[10]=x*pe+F*le+ge*Me+Ue*Ee,p[11]=v*pe+ue*le+Be*Me+Ge*Ee,p[12]=a*_e+A*xe+ae*Le+me*Ie,p[13]=_*_e+R*xe+te*Le+Se*Ie,p[14]=x*_e+F*xe+ge*Le+Ue*Ie,p[15]=v*_e+ue*xe+Be*Le+Ge*Ie,p}const W=X;function ce(i,m,u){const p=u??Y();return i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function $(i,m){const u=m??l.create();return u[0]=i[12],u[1]=i[13],u[2]=i[14],u}function fe(i,m,u){const p=u??l.create(),a=m*4;return p[0]=i[a+0],p[1]=i[a+1],p[2]=i[a+2],p}function j(i,m,u,p){const a=p===i?p:V(i,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function re(i,m){const u=m??l.create(),p=i[0],a=i[1],_=i[2],x=i[4],v=i[5],A=i[6],R=i[8],F=i[9],ue=i[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(x*x+v*v+A*A),u[2]=Math.sqrt(R*R+F*F+ue*ue),u}function ye(i,m,u,p,a){const _=a??new r(16),x=Math.tan(Math.PI*.5-.5*i);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const v=1/(u-p);_[10]=p*v,_[14]=p*u*v}else _[10]=-1,_[14]=-u;return _}function Ve(i,m,u,p=1/0,a){const _=a??new r(16),x=1/Math.tan(i*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const v=1/(p-u);_[10]=u*v,_[14]=p*u*v}return _}function oe(i,m,u,p,a,_,x){const v=x??new r(16);return v[0]=2/(m-i),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-_),v[11]=0,v[12]=(m+i)/(i-m),v[13]=(p+u)/(u-p),v[14]=a/(a-_),v[15]=1,v}function he(i,m,u,p,a,_,x){const v=x??new r(16),A=m-i,R=p-u,F=a-_;return v[0]=2*a/A,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/R,v[6]=0,v[7]=0,v[8]=(i+m)/A,v[9]=(p+u)/R,v[10]=_/F,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*_/F,v[15]=0,v}function be(i,m,u,p,a,_=1/0,x){const v=x??new r(16),A=m-i,R=p-u;if(v[0]=2*a/A,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/R,v[6]=0,v[7]=0,v[8]=(i+m)/A,v[9]=(p+u)/R,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,_===1/0)v[10]=0,v[14]=a;else{const F=1/(_-a);v[10]=a*F,v[14]=_*a*F}return v}const we=l.create(),Ce=l.create(),J=l.create();function Q(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(m,i,J),J),l.normalize(l.cross(u,J,we),we),l.normalize(l.cross(J,we,Ce),Ce),a[0]=we[0],a[1]=we[1],a[2]=we[2],a[3]=0,a[4]=Ce[0],a[5]=Ce[1],a[6]=Ce[2],a[7]=0,a[8]=J[0],a[9]=J[1],a[10]=J[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function ne(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(i,m,J),J),l.normalize(l.cross(u,J,we),we),l.normalize(l.cross(J,we,Ce),Ce),a[0]=we[0],a[1]=we[1],a[2]=we[2],a[3]=0,a[4]=Ce[0],a[5]=Ce[1],a[6]=Ce[2],a[7]=0,a[8]=J[0],a[9]=J[1],a[10]=J[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function ee(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(i,m,J),J),l.normalize(l.cross(u,J,we),we),l.normalize(l.cross(J,we,Ce),Ce),a[0]=we[0],a[1]=Ce[0],a[2]=J[0],a[3]=0,a[4]=we[1],a[5]=Ce[1],a[6]=J[1],a[7]=0,a[8]=we[2],a[9]=Ce[2],a[10]=J[2],a[11]=0,a[12]=-(we[0]*i[0]+we[1]*i[1]+we[2]*i[2]),a[13]=-(Ce[0]*i[0]+Ce[1]*i[1]+Ce[2]*i[2]),a[14]=-(J[0]*i[0]+J[1]*i[1]+J[2]*i[2]),a[15]=1,a}function Pe(i,m){const u=m??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=i[0],u[13]=i[1],u[14]=i[2],u[15]=1,u}function ke(i,m,u){const p=u??new r(16),a=m[0],_=m[1],x=m[2],v=i[0],A=i[1],R=i[2],F=i[3],ue=i[1*4+0],ae=i[1*4+1],te=i[1*4+2],ge=i[1*4+3],Be=i[2*4+0],me=i[2*4+1],Se=i[2*4+2],Ue=i[2*4+3],Ge=i[3*4+0],$e=i[3*4+1],Ye=i[3*4+2],We=i[3*4+3];return i!==p&&(p[0]=v,p[1]=A,p[2]=R,p[3]=F,p[4]=ue,p[5]=ae,p[6]=te,p[7]=ge,p[8]=Be,p[9]=me,p[10]=Se,p[11]=Ue),p[12]=v*a+ue*_+Be*x+Ge,p[13]=A*a+ae*_+me*x+$e,p[14]=R*a+te*_+Se*x+Ye,p[15]=F*a+ge*_+Ue*x+We,p}function ze(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function ve(i,m,u){const p=u??new r(16),a=i[4],_=i[5],x=i[6],v=i[7],A=i[8],R=i[9],F=i[10],ue=i[11],ae=Math.cos(m),te=Math.sin(m);return p[4]=ae*a+te*A,p[5]=ae*_+te*R,p[6]=ae*x+te*F,p[7]=ae*v+te*ue,p[8]=ae*A-te*a,p[9]=ae*R-te*_,p[10]=ae*F-te*x,p[11]=ae*ue-te*v,i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function De(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Oe(i,m,u){const p=u??new r(16),a=i[0*4+0],_=i[0*4+1],x=i[0*4+2],v=i[0*4+3],A=i[2*4+0],R=i[2*4+1],F=i[2*4+2],ue=i[2*4+3],ae=Math.cos(m),te=Math.sin(m);return p[0]=ae*a-te*A,p[1]=ae*_-te*R,p[2]=ae*x-te*F,p[3]=ae*v-te*ue,p[8]=ae*A+te*a,p[9]=ae*R+te*_,p[10]=ae*F+te*x,p[11]=ae*ue+te*v,i!==p&&(p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function B(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function q(i,m,u){const p=u??new r(16),a=i[0*4+0],_=i[0*4+1],x=i[0*4+2],v=i[0*4+3],A=i[1*4+0],R=i[1*4+1],F=i[1*4+2],ue=i[1*4+3],ae=Math.cos(m),te=Math.sin(m);return p[0]=ae*a+te*A,p[1]=ae*_+te*R,p[2]=ae*x+te*F,p[3]=ae*v+te*ue,p[4]=ae*A-te*a,p[5]=ae*R-te*_,p[6]=ae*F-te*x,p[7]=ae*ue-te*v,i!==p&&(p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function g(i,m,u){const p=u??new r(16);let a=i[0],_=i[1],x=i[2];const v=Math.sqrt(a*a+_*_+x*x);a/=v,_/=v,x/=v;const A=a*a,R=_*_,F=x*x,ue=Math.cos(m),ae=Math.sin(m),te=1-ue;return p[0]=A+(1-A)*ue,p[1]=a*_*te+x*ae,p[2]=a*x*te-_*ae,p[3]=0,p[4]=a*_*te-x*ae,p[5]=R+(1-R)*ue,p[6]=_*x*te+a*ae,p[7]=0,p[8]=a*x*te+_*ae,p[9]=_*x*te-a*ae,p[10]=F+(1-F)*ue,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const o=g;function h(i,m,u,p){const a=p??new r(16);let _=m[0],x=m[1],v=m[2];const A=Math.sqrt(_*_+x*x+v*v);_/=A,x/=A,v/=A;const R=_*_,F=x*x,ue=v*v,ae=Math.cos(u),te=Math.sin(u),ge=1-ae,Be=R+(1-R)*ae,me=_*x*ge+v*te,Se=_*v*ge-x*te,Ue=_*x*ge-v*te,Ge=F+(1-F)*ae,$e=x*v*ge+_*te,Ye=_*v*ge+x*te,We=x*v*ge-_*te,je=ue+(1-ue)*ae,Xe=i[0],Qe=i[1],Je=i[2],ie=i[3],pe=i[4],le=i[5],Me=i[6],Ee=i[7],_e=i[8],xe=i[9],Le=i[10],Ie=i[11];return a[0]=Be*Xe+me*pe+Se*_e,a[1]=Be*Qe+me*le+Se*xe,a[2]=Be*Je+me*Me+Se*Le,a[3]=Be*ie+me*Ee+Se*Ie,a[4]=Ue*Xe+Ge*pe+$e*_e,a[5]=Ue*Qe+Ge*le+$e*xe,a[6]=Ue*Je+Ge*Me+$e*Le,a[7]=Ue*ie+Ge*Ee+$e*Ie,a[8]=Ye*Xe+We*pe+je*_e,a[9]=Ye*Qe+We*le+je*xe,a[10]=Ye*Je+We*Me+je*Le,a[11]=Ye*ie+We*Ee+je*Ie,i!==a&&(a[12]=i[12],a[13]=i[13],a[14]=i[14],a[15]=i[15]),a}const d=h;function b(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(i,m,u){const p=u??new r(16),a=m[0],_=m[1],x=m[2];return p[0]=a*i[0*4+0],p[1]=a*i[0*4+1],p[2]=a*i[0*4+2],p[3]=a*i[0*4+3],p[4]=_*i[1*4+0],p[5]=_*i[1*4+1],p[6]=_*i[1*4+2],p[7]=_*i[1*4+3],p[8]=x*i[2*4+0],p[9]=x*i[2*4+1],p[10]=x*i[2*4+2],p[11]=x*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function P(i,m){const u=m??new r(16);return u[0]=i,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(i,m,u){const p=u??new r(16);return p[0]=m*i[0*4+0],p[1]=m*i[0*4+1],p[2]=m*i[0*4+2],p[3]=m*i[0*4+3],p[4]=m*i[1*4+0],p[5]=m*i[1*4+1],p[6]=m*i[1*4+2],p[7]=m*i[1*4+3],p[8]=m*i[2*4+0],p[9]=m*i[2*4+1],p[10]=m*i[2*4+2],p[11]=m*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}return{add:O,aim:Q,axisRotate:h,axisRotation:g,cameraAim:ne,clone:G,copy:V,create:f,determinant:de,equals:I,equalsApproximately:H,fromMat3:w,fromQuat:k,frustum:he,frustumReverseZ:be,getAxis:fe,getScaling:re,getTranslation:$,identity:Y,inverse:N,invert:U,lookAt:ee,mul:W,mulScalar:z,multiply:X,multiplyScalar:T,negate:M,ortho:oe,perspective:ye,perspectiveReverseZ:Ve,rotate:d,rotateX:ve,rotateY:Oe,rotateZ:q,rotation:o,rotationX:ze,rotationY:De,rotationZ:B,scale:y,scaling:b,set:C,setAxis:j,setTranslation:ce,translate:ke,translation:Pe,transpose:K,uniformScale:E,uniformScaling:P}}const Ii=new Map;function El(r){let l=Ii.get(r);return l||(l=Cl(r),Ii.set(r,l)),l}function kl(r){const l=Vn(r);function f(B,q,g,o){const h=new r(4);return B!==void 0&&(h[0]=B,q!==void 0&&(h[1]=q,g!==void 0&&(h[2]=g,o!==void 0&&(h[3]=o)))),h}const C=f;function w(B,q,g,o,h){const d=h??new r(4);return d[0]=B,d[1]=q,d[2]=g,d[3]=o,d}function k(B,q,g){const o=g??new r(4),h=q*.5,d=Math.sin(h);return o[0]=d*B[0],o[1]=d*B[1],o[2]=d*B[2],o[3]=Math.cos(h),o}function M(B,q){const g=q??l.create(3),o=Math.acos(B[3])*2,h=Math.sin(o*.5);return h>Re?(g[0]=B[0]/h,g[1]=B[1]/h,g[2]=B[2]/h):(g[0]=1,g[1]=0,g[2]=0),{angle:o,axis:g}}function O(B,q){const g=ye(B,q);return Math.acos(2*g*g-1)}function T(B,q,g){const o=g??new r(4),h=B[0],d=B[1],b=B[2],y=B[3],P=q[0],E=q[1],i=q[2],m=q[3];return o[0]=h*m+y*P+d*i-b*E,o[1]=d*m+y*E+b*P-h*i,o[2]=b*m+y*i+h*E-d*P,o[3]=y*m-h*P-d*E-b*i,o}const z=T;function V(B,q,g){const o=g??new r(4),h=q*.5,d=B[0],b=B[1],y=B[2],P=B[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i+P*E,o[1]=b*i+y*E,o[2]=y*i-b*E,o[3]=P*i-d*E,o}function G(B,q,g){const o=g??new r(4),h=q*.5,d=B[0],b=B[1],y=B[2],P=B[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i-y*E,o[1]=b*i+P*E,o[2]=y*i+d*E,o[3]=P*i-b*E,o}function H(B,q,g){const o=g??new r(4),h=q*.5,d=B[0],b=B[1],y=B[2],P=B[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i+b*E,o[1]=b*i-d*E,o[2]=y*i+P*E,o[3]=P*i-y*E,o}function I(B,q,g,o){const h=o??new r(4),d=B[0],b=B[1],y=B[2],P=B[3];let E=q[0],i=q[1],m=q[2],u=q[3],p=d*E+b*i+y*m+P*u;p<0&&(p=-p,E=-E,i=-i,m=-m,u=-u);let a,_;if(1-p>Re){const x=Math.acos(p),v=Math.sin(x);a=Math.sin((1-g)*x)/v,_=Math.sin(g*x)/v}else a=1-g,_=g;return h[0]=a*d+_*E,h[1]=a*b+_*i,h[2]=a*y+_*m,h[3]=a*P+_*u,h}function Y(B,q){const g=q??new r(4),o=B[0],h=B[1],d=B[2],b=B[3],y=o*o+h*h+d*d+b*b,P=y?1/y:0;return g[0]=-o*P,g[1]=-h*P,g[2]=-d*P,g[3]=b*P,g}function K(B,q){const g=q??new r(4);return g[0]=-B[0],g[1]=-B[1],g[2]=-B[2],g[3]=B[3],g}function N(B,q){const g=q??new r(4),o=B[0]+B[5]+B[10];if(o>0){const h=Math.sqrt(o+1);g[3]=.5*h;const d=.5/h;g[0]=(B[6]-B[9])*d,g[1]=(B[8]-B[2])*d,g[2]=(B[1]-B[4])*d}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const d=(h+1)%3,b=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[d*4+d]-B[b*4+b]+1);g[h]=.5*y;const P=.5/y;g[3]=(B[d*4+b]-B[b*4+d])*P,g[d]=(B[d*4+h]+B[h*4+d])*P,g[b]=(B[b*4+h]+B[h*4+b])*P}return g}function de(B,q,g,o,h){const d=h??new r(4),b=B*.5,y=q*.5,P=g*.5,E=Math.sin(b),i=Math.cos(b),m=Math.sin(y),u=Math.cos(y),p=Math.sin(P),a=Math.cos(P);switch(o){case"xyz":d[0]=E*u*a+i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${o}`)}return d}function U(B,q){const g=q??new r(4);return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g}const X=U;function W(B,q,g){const o=g??new r(4);return o[0]=B[0]+q[0],o[1]=B[1]+q[1],o[2]=B[2]+q[2],o[3]=B[3]+q[3],o}function ce(B,q,g){const o=g??new r(4);return o[0]=B[0]-q[0],o[1]=B[1]-q[1],o[2]=B[2]-q[2],o[3]=B[3]-q[3],o}const $=ce;function fe(B,q,g){const o=g??new r(4);return o[0]=B[0]*q,o[1]=B[1]*q,o[2]=B[2]*q,o[3]=B[3]*q,o}const j=fe;function re(B,q,g){const o=g??new r(4);return o[0]=B[0]/q,o[1]=B[1]/q,o[2]=B[2]/q,o[3]=B[3]/q,o}function ye(B,q){return B[0]*q[0]+B[1]*q[1]+B[2]*q[2]+B[3]*q[3]}function Ve(B,q,g,o){const h=o??new r(4);return h[0]=B[0]+g*(q[0]-B[0]),h[1]=B[1]+g*(q[1]-B[1]),h[2]=B[2]+g*(q[2]-B[2]),h[3]=B[3]+g*(q[3]-B[3]),h}function oe(B){const q=B[0],g=B[1],o=B[2],h=B[3];return Math.sqrt(q*q+g*g+o*o+h*h)}const he=oe;function be(B){const q=B[0],g=B[1],o=B[2],h=B[3];return q*q+g*g+o*o+h*h}const we=be;function Ce(B,q){const g=q??new r(4),o=B[0],h=B[1],d=B[2],b=B[3],y=Math.sqrt(o*o+h*h+d*d+b*b);return y>1e-5?(g[0]=o/y,g[1]=h/y,g[2]=d/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function J(B,q){return Math.abs(B[0]-q[0])<Re&&Math.abs(B[1]-q[1])<Re&&Math.abs(B[2]-q[2])<Re&&Math.abs(B[3]-q[3])<Re}function Q(B,q){return B[0]===q[0]&&B[1]===q[1]&&B[2]===q[2]&&B[3]===q[3]}function ne(B){const q=B??new r(4);return q[0]=0,q[1]=0,q[2]=0,q[3]=1,q}const ee=l.create(),Pe=l.create(),ke=l.create();function ze(B,q,g){const o=g??new r(4),h=l.dot(B,q);return h<-.999999?(l.cross(Pe,B,ee),l.len(ee)<1e-6&&l.cross(ke,B,ee),l.normalize(ee,ee),k(ee,Math.PI,o),o):h>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(l.cross(B,q,ee),o[0]=ee[0],o[1]=ee[1],o[2]=ee[2],o[3]=1+h,Ce(o,o))}const ve=new r(4),De=new r(4);function Oe(B,q,g,o,h,d){const b=d??new r(4);return I(B,o,h,ve),I(q,g,h,De),I(ve,De,2*h*(1-h),b),b}return{create:f,fromValues:C,set:w,fromAxisAngle:k,toAxisAngle:M,angle:O,multiply:T,mul:z,rotateX:V,rotateY:G,rotateZ:H,slerp:I,inverse:Y,conjugate:K,fromMat:N,fromEuler:de,copy:U,clone:X,add:W,subtract:ce,sub:$,mulScalar:fe,scale:j,divScalar:re,dot:ye,lerp:Ve,length:oe,len:he,lengthSq:be,lenSq:we,normalize:Ce,equalsApproximately:J,equals:Q,identity:ne,rotationTo:ze,sqlerp:Oe}}const Ui=new Map;function Ml(r){let l=Ui.get(r);return l||(l=kl(r),Ui.set(r,l)),l}function Bl(r){function l(g,o,h,d){const b=new r(4);return g!==void 0&&(b[0]=g,o!==void 0&&(b[1]=o,h!==void 0&&(b[2]=h,d!==void 0&&(b[3]=d)))),b}const f=l;function C(g,o,h,d,b){const y=b??new r(4);return y[0]=g,y[1]=o,y[2]=h,y[3]=d,y}function w(g,o){const h=o??new r(4);return h[0]=Math.ceil(g[0]),h[1]=Math.ceil(g[1]),h[2]=Math.ceil(g[2]),h[3]=Math.ceil(g[3]),h}function k(g,o){const h=o??new r(4);return h[0]=Math.floor(g[0]),h[1]=Math.floor(g[1]),h[2]=Math.floor(g[2]),h[3]=Math.floor(g[3]),h}function M(g,o){const h=o??new r(4);return h[0]=Math.round(g[0]),h[1]=Math.round(g[1]),h[2]=Math.round(g[2]),h[3]=Math.round(g[3]),h}function O(g,o=0,h=1,d){const b=d??new r(4);return b[0]=Math.min(h,Math.max(o,g[0])),b[1]=Math.min(h,Math.max(o,g[1])),b[2]=Math.min(h,Math.max(o,g[2])),b[3]=Math.min(h,Math.max(o,g[3])),b}function T(g,o,h){const d=h??new r(4);return d[0]=g[0]+o[0],d[1]=g[1]+o[1],d[2]=g[2]+o[2],d[3]=g[3]+o[3],d}function z(g,o,h,d){const b=d??new r(4);return b[0]=g[0]+o[0]*h,b[1]=g[1]+o[1]*h,b[2]=g[2]+o[2]*h,b[3]=g[3]+o[3]*h,b}function V(g,o,h){const d=h??new r(4);return d[0]=g[0]-o[0],d[1]=g[1]-o[1],d[2]=g[2]-o[2],d[3]=g[3]-o[3],d}const G=V;function H(g,o){return Math.abs(g[0]-o[0])<Re&&Math.abs(g[1]-o[1])<Re&&Math.abs(g[2]-o[2])<Re&&Math.abs(g[3]-o[3])<Re}function I(g,o){return g[0]===o[0]&&g[1]===o[1]&&g[2]===o[2]&&g[3]===o[3]}function Y(g,o,h,d){const b=d??new r(4);return b[0]=g[0]+h*(o[0]-g[0]),b[1]=g[1]+h*(o[1]-g[1]),b[2]=g[2]+h*(o[2]-g[2]),b[3]=g[3]+h*(o[3]-g[3]),b}function K(g,o,h,d){const b=d??new r(4);return b[0]=g[0]+h[0]*(o[0]-g[0]),b[1]=g[1]+h[1]*(o[1]-g[1]),b[2]=g[2]+h[2]*(o[2]-g[2]),b[3]=g[3]+h[3]*(o[3]-g[3]),b}function N(g,o,h){const d=h??new r(4);return d[0]=Math.max(g[0],o[0]),d[1]=Math.max(g[1],o[1]),d[2]=Math.max(g[2],o[2]),d[3]=Math.max(g[3],o[3]),d}function de(g,o,h){const d=h??new r(4);return d[0]=Math.min(g[0],o[0]),d[1]=Math.min(g[1],o[1]),d[2]=Math.min(g[2],o[2]),d[3]=Math.min(g[3],o[3]),d}function U(g,o,h){const d=h??new r(4);return d[0]=g[0]*o,d[1]=g[1]*o,d[2]=g[2]*o,d[3]=g[3]*o,d}const X=U;function W(g,o,h){const d=h??new r(4);return d[0]=g[0]/o,d[1]=g[1]/o,d[2]=g[2]/o,d[3]=g[3]/o,d}function ce(g,o){const h=o??new r(4);return h[0]=1/g[0],h[1]=1/g[1],h[2]=1/g[2],h[3]=1/g[3],h}const $=ce;function fe(g,o){return g[0]*o[0]+g[1]*o[1]+g[2]*o[2]+g[3]*o[3]}function j(g){const o=g[0],h=g[1],d=g[2],b=g[3];return Math.sqrt(o*o+h*h+d*d+b*b)}const re=j;function ye(g){const o=g[0],h=g[1],d=g[2],b=g[3];return o*o+h*h+d*d+b*b}const Ve=ye;function oe(g,o){const h=g[0]-o[0],d=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return Math.sqrt(h*h+d*d+b*b+y*y)}const he=oe;function be(g,o){const h=g[0]-o[0],d=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return h*h+d*d+b*b+y*y}const we=be;function Ce(g,o){const h=o??new r(4),d=g[0],b=g[1],y=g[2],P=g[3],E=Math.sqrt(d*d+b*b+y*y+P*P);return E>1e-5?(h[0]=d/E,h[1]=b/E,h[2]=y/E,h[3]=P/E):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function J(g,o){const h=o??new r(4);return h[0]=-g[0],h[1]=-g[1],h[2]=-g[2],h[3]=-g[3],h}function Q(g,o){const h=o??new r(4);return h[0]=g[0],h[1]=g[1],h[2]=g[2],h[3]=g[3],h}const ne=Q;function ee(g,o,h){const d=h??new r(4);return d[0]=g[0]*o[0],d[1]=g[1]*o[1],d[2]=g[2]*o[2],d[3]=g[3]*o[3],d}const Pe=ee;function ke(g,o,h){const d=h??new r(4);return d[0]=g[0]/o[0],d[1]=g[1]/o[1],d[2]=g[2]/o[2],d[3]=g[3]/o[3],d}const ze=ke;function ve(g){const o=g??new r(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function De(g,o,h){const d=h??new r(4),b=g[0],y=g[1],P=g[2],E=g[3];return d[0]=o[0]*b+o[4]*y+o[8]*P+o[12]*E,d[1]=o[1]*b+o[5]*y+o[9]*P+o[13]*E,d[2]=o[2]*b+o[6]*y+o[10]*P+o[14]*E,d[3]=o[3]*b+o[7]*y+o[11]*P+o[15]*E,d}function Oe(g,o,h){const d=h??new r(4);return Ce(g,d),U(d,o,d)}function B(g,o,h){const d=h??new r(4);return j(g)>o?Oe(g,o,d):Q(g,d)}function q(g,o,h){const d=h??new r(4);return Y(g,o,.5,d)}return{create:l,fromValues:f,set:C,ceil:w,floor:k,round:M,clamp:O,add:T,addScaled:z,subtract:V,sub:G,equalsApproximately:H,equals:I,lerp:Y,lerpV:K,max:N,min:de,mulScalar:U,scale:X,divScalar:W,inverse:ce,invert:$,dot:fe,length:j,len:re,lengthSq:ye,lenSq:Ve,distance:oe,dist:he,distanceSq:be,distSq:we,normalize:Ce,negate:J,copy:Q,clone:ne,multiply:ee,mul:Pe,divide:ke,div:ze,zero:ve,transformMat4:De,setLength:Oe,truncate:B,midpoint:q}}const Gi=new Map;function Tl(r){let l=Gi.get(r);return l||(l=Bl(r),Gi.set(r,l)),l}function vs(r,l,f,C,w,k){return{mat3:Sl(r),mat4:El(l),quat:Ml(f),vec2:Hi(C),vec3:Vn(w),vec4:Tl(k)}}const{mat3:pt,mat4:nt,quat:it,vec2:Ri,vec3:L,vec4:Fc}=vs(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);vs(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);vs(wl,Array,Array,Array,Array,Array);const Vi=document.querySelector("#log");let ct=null,Kt=null;function Yi(){if(ct)return ct;ct=document.createElement("div"),ct.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",ct.appendChild(r),Kt=document.createElement("div"),Kt.className="ply-spinner-label",ct.appendChild(Kt),ct.style.display="none",document.body.appendChild(ct),ct}function gs(r){Yi(),Kt&&r&&(Kt.textContent=r),ct&&(ct.style.opacity="1",ct.style.display="flex")}function St(r){Yi(),Kt&&(Kt.textContent=r)}function xn(){if(!ct)return;const r=ct;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function Zi(r,l){if(!Vi)return;const f=document.createElement("p");f.innerText=r,l&&Object.assign(f.style,l),Vi.appendChild(f)}async function at(r){console.log(r),Zi(r)}async function Dl(r){console.error(r),Zi(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Xi;function Qi(){Xi=performance.now()}function Oi(r){const l=performance.now()-Xi;at(`⏱️ ${r} Time: ${l.toFixed(0)} ms`)}function Al(r,l){if(!r)throw new Error(l&&(typeof l=="string"?l:l()))}function sn(r){return r+3&-4}const zl=2,Ll=3,yn=5,jt=6,Pn=7;function Il(r){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(r,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const C=new DataView(r),w=4,k=C.getUint32(w+0,!0),M=C.getUint32(w+4,!0),O=C.getUint32(w+8,!0),T=C.getUint32(w+12,!0),z=C.getUint32(w+16,!0),V=C.getFloat32(w+20,!0),G=C.getUint32(w+24,!0),H=C.getUint32(w+28,!0),I=C.getFloat32(w+32,!0),Y=C.getFloat32(w+36,!0),K=C.getFloat32(w+40,!0),N=C.getUint32(w+44,!0),de=C.getFloat32(w+48,!0),U=C.getFloat32(w+52,!0),X=C.getUint32(w+56,!0),W=C.getUint32(w+60,!0),ce=W>0?W:1;if(H!==zl&&H!==Ll&&H!==yn&&H!==jt&&H!==Pn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${H}`);if(H!==yn&&H!==jt&&(k%4!==0||N%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${N}`);let $=w+64;const fe=(X+1)*4,j=new Uint32Array(r.slice($,$+fe));$+=fe;let re;if(ce>1){const J=(ce+1)*4;if($+J>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${J} from ${$})`);re=new Uint32Array(r.slice($,$+J)),$+=J}else re=new Uint32Array([0,k]);let ye=0;for(let J=0;J<ce;J++){const Q=re[J+1]-re[J];Q>ye&&(ye=Q)}const Ve=z*4*4;if($+Ve>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ve} more bytes from offset ${$}, have ${r.byteLength-$}`);const oe=new Float32Array(r.slice($,$+Ve));$+=Ve;const he=new Float32Array(z*5);for(let J=0;J<z;J++){const Q=oe[J*4+0],ne=oe[J*4+1],ee=oe[J*4+2],Pe=oe[J*4+3];let ke=0;for(let B=1;B<=X&&j[B]<=ne;B++)ke=B;let ze=0;for(let B=1;B<=ce&&re[B]<=Q;B++)ze=B;const ve=ne-j[ke],De=Q-re[ze],Oe=ze*X+ke;he[J*5+0]=De,he[J*5+1]=ve,he[J*5+2]=ee,he[J*5+3]=Pe,he[J*5+4]=Oe}if(H===yn||H===jt){if($+24>r.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const J=l.decode(new Uint8Array(r,$,4));if(J!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${J}'`);const Q=C.getUint32($+4,!0),ne=C.getUint32($+8,!0),ee=C.getUint32($+12,!0),Pe=C.getUint32($+16,!0),ke=C.getUint32($+20,!0);if(Q!==1)throw new Error(`NAT2 RVQP unsupported version ${Q}`);if(Pe!==z)throw new Error(`NAT2 RVQP num_rects ${Pe} != header num_rects ${z}`);if($+=24,$+16>r.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const ze=new Float32Array(r.slice($,$+8)),ve=new Float32Array(r.slice($+8,$+16));$+=16;const De=ne*ee,Oe=2*ne*ee,B=H===jt?(De>>2)*(Oe>>2)*16:De*Oe*4;if($+B>r.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${r.byteLength-$})`);const q=new Uint8Array(r.slice($,$+B));$+=B;const g=ke*4;if($+g>r.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${r.byteLength-$})`);const o=new Uint32Array(r.slice($,$+g));$+=g;const h=(z+1)*4;if($+h>r.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${r.byteLength-$})`);const d=new Uint32Array(r.slice($,$+h));return $+=h,{width:k,height:M,channels:O,kernel_type:T,num_rects:z,uv_extent:V,sb_number:G,format:H,sh_bias:I,res_bias:Y,compact_mult:K,layer_h:N,atlas_scale:de,atlas_offset:U,n_layers:X,n_cols:ce,layer_cuts:j,column_cuts:re,slice_width:ye,rects_expanded:he,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:ne,B:ee,N_used:ke,pair_scale:ze,pair_offset:ve,codebook_image:q,packed_indices:o,surfel_offsets:d}}}let be;const Ce=k/4*16;if(H===Pn){if($+24>r.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const J=l.decode(new Uint8Array(r,$,4));if(J!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${J}'`);const Q=C.getUint32($+4,!0),ne=C.getUint32($+8,!0),ee=C.getUint32($+12,!0),Pe=C.getUint32($+16,!0),ke=C.getUint32($+20,!0);if(Q!==1)throw new Error(`NAT2 BCCB unsupported version ${Q}`);if(ee!==M/4||Pe!==k/4||ke!==ee*Pe)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${Pe}×${ee} (${ke} blocks)`);$+=24;const ze=ne*16;if($+ze>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${ze}, have ${r.byteLength-$})`);const ve=new Uint8Array(r,$,ze);$+=ze;const De=ke*2;if($+De>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${De}, have ${r.byteLength-$})`);const Oe=new Uint16Array(r.slice($,$+De));$+=De;const B=new Uint8Array(ke*16);for(let q=0;q<ke;q++){const g=Oe[q]*16;B.set(ve.subarray(g,g+16),q*16)}be=B}else{let J=0;for(let Q=0;Q<X;Q++){const ne=j[Q+1]-j[Q];if(ne%4!==0)throw new Error(`NAT2 BC7 layer ${Q} rows ${ne} not 4-aligned`);J+=ne/4*Ce}if($+J>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${J} more bytes from offset ${$}, have ${r.byteLength-$}`);be=new Uint8Array(r.slice($,$+J))}return{width:k,height:M,channels:O,kernel_type:T,num_rects:z,uv_extent:V,sb_number:G,format:H,sh_bias:I,res_bias:Y,compact_mult:K,layer_h:N,atlas_scale:de,atlas_offset:U,n_layers:X,n_cols:ce,layer_cuts:j,column_cuts:re,slice_width:ye,rects_expanded:he,atlas_bytes:be}}const Ul=32;function Gl(r){const l=r.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),C=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:f,sampler:C}}function Rl(r){const l=r.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d"}),C=r.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),w=r.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),k=w.createView({dimension:"2d"}),M=r.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:f,cbSamp:C,packedTex:w,packedView:k,offsetsBuf:M}}function Vl(r,l,f){const C=l.format===yn||l.format===jt,w=l.format===jt;let k,M,O,T;if(C){const U=Gl(r);k=U.tex,M=U.view,O=U.sampler,T="RVQ-paired atlas"}else if(l.format===2||l.format===Pn){if(!r.features.has("texture-compression-bc"))return at(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;T=l.format===Pn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:k,view:M,sampler:O}=Fi(r,l,"bc7-rgba-unorm",T)}else if(l.format===3){if(!r.features.has("texture-compression-astc"))return at("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;T="ASTC 4x4 atlas",{texture:k,view:M,sampler:O}=Fi(r,l,"astc-4x4-unorm",T)}else return at(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:z}=l,V=r.createBuffer({label:"atlas rects (5-stride)",size:sn(z.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(V,0,z);let G,H,I,Y,K,N;if(C){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const U=l.rvq_paired,X=U.K_orig*U.B,W=2*U.K_orig*U.B;if(X>r.limits.maxTextureDimension2D||W>r.limits.maxTextureDimension2D)return at(`⚠️  RVQ codebook ${X}x${W} exceeds maxTextureDimension2D=${r.limits.maxTextureDimension2D} — atlas disabled`),null;let ce,$;if(w){if(!r.features.has("texture-compression-bc"))return at("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ce="bc7-rgba-unorm",$=(X>>2)*16}else ce="rgba8unorm",$=X*4;const fe=r.createTexture({label:w?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:X,height:W,depthOrArrayLayers:1},format:ce,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});r.queue.writeTexture({texture:fe},U.codebook_image,{offset:0,bytesPerRow:$,rowsPerImage:W},{width:X,height:W,depthOrArrayLayers:1}),G=fe,H=fe.createView({dimension:"2d"}),I=r.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const j=8192,re=U.N_used,ye=Math.ceil(re/j);if(ye>r.limits.maxTextureDimension2D||j>r.limits.maxTextureDimension2D)return at(`⚠️  RVQ packed_indices texture ${j}x${ye} exceeds maxTextureDimension2D=${r.limits.maxTextureDimension2D} — atlas disabled`),null;Y=r.createTexture({label:"rvq packed_indices (r32uint)",size:{width:j,height:ye,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Ve=j*ye;let oe;if(Ve===re)oe=new Uint8Array(U.packed_indices.buffer,U.packed_indices.byteOffset,U.packed_indices.byteLength);else{const he=new Uint32Array(Ve);he.set(U.packed_indices),oe=new Uint8Array(he.buffer)}r.queue.writeTexture({texture:Y},oe,{offset:0,bytesPerRow:j*4,rowsPerImage:ye},{width:j,height:ye,depthOrArrayLayers:1}),K=Y.createView({dimension:"2d"}),N=r.createBuffer({label:"rvq surfel_offsets",size:sn(U.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),r.queue.writeBuffer(N,0,U.surfel_offsets),at(`🪡 RVQ-paired atlas wired: codebook ${X}x${W} (${(U.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${re.toLocaleString()} packed indices as r32uint ${j}x${ye} (${(U.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${U.surfel_offsets.length} surfel_offsets`)}else{const U=Rl(r);G=U.cbTex,H=U.cbView,I=U.cbSamp,Y=U.packedTex,K=U.packedView,N=U.offsetsBuf}const de=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Ji(r,de,l,f),{texture:k,view:M,sampler:O,rectsBuffer:V,texParamsBuffer:de,meta:l,rvqCodebookTexture:G,rvqCodebookView:H,rvqCodebookSampler:I,rvqPackedIndicesTexture:Y,rvqPackedIndicesView:K,rvqSurfelOffsetsBuffer:N}}function Fi(r,l,f,C){const{width:w,layer_h:k,n_layers:M,n_cols:O,layer_cuts:T,column_cuts:z,slice_width:V,atlas_bytes:G}=l,I=w/4*16,Y=r.limits.maxTextureDimension2D;if(k>Y||V>Y)throw new Error(`⚠️  atlas slice dims ${V}x${k} exceed maxTextureDimension2D=${Y}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const K=O*M;if(K>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${O} cols × ${M} layers = ${K} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const N=r.createTexture({label:C,size:{width:V,height:k,depthOrArrayLayers:K},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let X=0;X<O;X++){const W=z[X]/4,ce=(z[X+1]-z[X])/4;for(let $=0;$<M;$++){const fe=T[$]/4,j=(T[$+1]-T[$])/4,re=X*M+$,ye=fe*I+W*16;r.queue.writeTexture({texture:N,mipLevel:0,origin:{x:0,y:0,z:re},aspect:"all"},G,{offset:ye,bytesPerRow:I,rowsPerImage:j},{width:ce*4,height:j*4,depthOrArrayLayers:1})}}const de=N.createView({label:`${C} view`,dimension:"2d-array"}),U=r.createSampler({label:`${C} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:N,view:de,sampler:U}}function Ji(r,l,f,C){const w=new ArrayBuffer(48),k=new Uint32Array(w),M=new Float32Array(w),O=f.slice_width||f.width;k[0]=C?O:0,k[1]=f.layer_h;let T=f.format;T===jt&&(T=yn),T===Pn&&(T=2),k[2]=T,M[3]=f.atlas_scale,M[4]=f.atlas_offset,M[5]=f.uv_extent,M[6]=f.res_bias,f.rvq_paired?(k[7]=f.rvq_paired.B,M[8]=f.rvq_paired.pair_scale[0],M[9]=f.rvq_paired.pair_scale[1],M[10]=f.rvq_paired.pair_offset[0],M[11]=f.rvq_paired.pair_offset[1]):(k[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),r.queue.writeBuffer(l,0,w)}async function ps(r,l){at(`loading ply file from File... : ${r.name}`),gs("downloading PLY...");const f=await r.arrayBuffer();try{return await er(f,l)}finally{xn()}}async function Ol(r,l){at(`loading ply file from URL... : ${r}`),gs("downloading PLY...");try{Qi();const f=new URL(r,self.location.href).href;return await er({url:f},l)}finally{xn()}}async function er(r,l){return new Promise((f,C)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var O,T,z,V,G,H,I,Y,K,N,de,U;const M=k.data;if((M==null?void 0:M.type)==="error"){Dl(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const X=M.totalBytes,W=M.loadedBytes/(1024*1024),ce=X?X/(1024*1024):void 0,$=(M.speedBps??0)/(1024*1024),fe=X?Math.min(99,Math.floor(M.loadedBytes/X*100)):void 0,j=ce?`total ${ce.toFixed(1)} MB`:"total -- MB",re=ce&&fe!==void 0?`${W.toFixed(1)} MB downloaded (${fe}%)`:`${W.toFixed(1)} MB downloaded`,ye=`${$.toFixed(2)} MB/s`;St(`downloading PLY ...
${j}, ${re}
${ye}`);return}else if((M==null?void 0:M.type)==="fetched"){at(`💾 Fetched (${M.byteLength} bytes)`),Oi("Download"),St("parsing PLY..."),Qi();return}else if((M==null?void 0:M.type)==="parse_progress"){const X=M.total??0,W=M.read??0,ce=X>0?Math.floor(W/X*100):0;St(`parsing PLY ...
${W}/${X} surfels (${ce}%)`);return}else if((M==null?void 0:M.type)==="done"){const X=M.num_points,W=M.K,ce=M.feature_mode??0,$=M.sh_bias,fe=M.kernel_type,j=M.surfelBuffer,re=M.svParamsBuffer;at(`🪐 Total surfels: ${X}, mode=${ce===1?"SB":"SV"}, K=${W}, sh_bias=${$}, kernel_type=${fe}`);const Ve=l.createBuffer({label:"surfel input buffer",size:sn(X*Ul),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ve,0,j);const oe=re.byteLength>0?re.byteLength:16,he=l.createBuffer({label:ce===1?"color_params buffer (SB)":"color_params buffer (SV)",size:sn(oe),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});re.byteLength>0&&l.queue.writeBuffer(he,0,re),w.terminate(),Oi("Parse"),f({num_points:X,K:W,feature_mode:ce,sh_bias:$,kernel_type:fe,surfel_buffer:Ve,surfel_data:new Float32Array(j),sv_params_buffer:he,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(O=M.bbox)==null?void 0:O.min)==null?void 0:T[0])??-1)+(((V=(z=M.bbox)==null?void 0:z.max)==null?void 0:V[0])??1))/2,((((H=(G=M.bbox)==null?void 0:G.min)==null?void 0:H[1])??-1)+(((Y=(I=M.bbox)==null?void 0:I.max)==null?void 0:Y[1])??1))/2,((((N=(K=M.bbox)==null?void 0:K.min)==null?void 0:N[2])??-1)+(((U=(de=M.bbox)==null?void 0:de.max)==null?void 0:U[2])??1))/2]})}},w.onerror=k=>{w.terminate(),C(k)},r instanceof ArrayBuffer?(St("parsing PLY..."),w.postMessage({type:"start",plyBuffer:r},[r])):w.postMessage({type:"start_url",url:r.url})})}var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(r,l){(function(f,C){C(l)})(Fl,function(f){class C{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class O extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class z extends k{constructor(e,t){super(e),this.index=t}}function V(n){return n}function G(n){return n==null}function H(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function I(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const Y={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class K{static alreadyDisposed(){return new K({type:"alreadydisposed"})}static notBindable(){return new K({type:"notbindable"})}static propertyNotFound(e){return new K({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new K({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=Y[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class N{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!N.isBindable(s))throw K.notBindable();if(!(e in s))throw K.propertyNotFound(e);s[e]=t}}class de extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class U{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const X="tp";function W(n){return(t,s)=>[X,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ce(n,e){return t=>e(n(t))}function $(n){return n.rawValue}function fe(n,e){n.emitter.on("change",ce($,e)),e(n.rawValue)}function j(n,e,t){fe(n.value(e),t)}function re(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ye(n,e){return t=>{re(n,e,t)}}function Ve(n,e){fe(n,t=>{e.textContent=t??""})}const oe=W("btn");class he{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(oe()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(oe("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(oe("t")),Ve(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class be{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new he(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class we{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,S)=>c===S,this.emitter=new U,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,S=this.rawValue_;this.equals_(S,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:S,rawValue:c,sender:this}))}}class Ce{constructor(e){this.emitter=new U,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function J(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Ce(n):new we(n,e)}class Q{constructor(e){this.emitter=new U,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:J(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new Q(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function ne(n,e){const s=Object.keys(e).reduce((c,S)=>{if(c===void 0)return;const D=e[S],se=D(n[S]);return se.succeeded?Object.assign(Object.assign({},c),{[S]:se.value}):void 0},{});return s}function ee(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function Pe(n){return n===null?!1:typeof n=="object"}function ke(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function ze(n){return{custom:e=>ke(e)(n),boolean:ke(e=>typeof e=="boolean"?e:void 0)(n),number:ke(e=>typeof e=="number"?e:void 0)(n),string:ke(e=>typeof e=="string"?e:void 0)(n),function:ke(e=>typeof e=="function"?e:void 0)(n),constant:e=>ke(t=>t===e?e:void 0)(n),raw:ke(e=>e)(n),object:e=>ke(t=>{if(Pe(t))return ne(t,e)})(n),array:e=>ke(t=>{if(Array.isArray(t))return ee(t,e)})(n)}}const ve={optional:ze(!0),required:ze(!1)};function De(n,e){const t=ve.required.object(e)(n);return t.succeeded?t.value:void 0}function Oe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class q{constructor(e){this.value_=e}static create(e){return[new q(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=W("");function o(n,e){return ye(n,g(void 0,e))}class h extends Q{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=q.create(J(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const S=e??{};return new h(Q.createCore({disabled:(t=S.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=S.hidden)!==null&&s!==void 0?s:!1,parent:(c=S.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){fe(this.globalDisabled_,o(e,"disabled")),j(this,"hidden",o(e,"hidden"))}bindDisabled(e){fe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){fe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=W(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class P{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Oe({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function A(n,e,t){n.insertBefore(e,n.children[t])}function R(n){n.parentElement&&n.parentElement.removeChild(n)}function F(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ue(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ae(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const te=W("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,S)=>{S>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(te()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(te("l")),j(t.props,"label",S=>{G(S)?this.element.classList.add(te(void 0,"nol")):(this.element.classList.remove(te(void 0,"nol")),ue(s),s.appendChild(ge(e,S)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(te("v")),this.element.appendChild(c),this.valueElement=c}}class me extends P{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Se={id:"button",type:"blade",accept(n){const e=ve,t=De(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new me(n.document,{blade:n.blade,props:Q.fromObject({label:n.params.label}),valueController:new be(n.document,{props:Q.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof me)||!(n.controller.valueController instanceof be)?null:new de(n.controller)}};class Ue extends P{constructor(e){super(e),this.value=e.value}}function Ge(){return new Q({positions:J([],{equals:H})})}class $e extends Q{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=Q.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};j(this,"expanded",s),j(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ye(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function We(n,e){e.style.height=n.styleHeight}function je(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ye(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{We(n,e)}),We(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Xe extends w{constructor(e,t){super(e),this.rackApi_=t}}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function ie(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function pe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class le{constructor(e){this.emitter=new U,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw K.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(S=>{this.cache_.add(S)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Me extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Ee extends me{constructor(e,t){super(e,t),this.binding=t.binding}}class _e extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new O(this,t,this.controller_.binding.target.presetKey)})}}class xe extends me{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Le(n){return n instanceof et?n.apiSet_:n instanceof Xe?n.rackApi_.apiSet_:null}function Ie(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw K.shouldNeverHappen();return t}function Ke(n,e,t){if(!N.isBindable(n))throw K.notBindable();return new N(n,e,t)}class et extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new U,this.apiSet_=new le(Le),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>Ie(this.apiSet_,e))}addInput(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(S,Ke(e,t,c.presetKey),c),se=new Me(D);return this.add(se,c.index)}addMonitor(e,t,s){const c=s??{},S=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(S,Ke(e,t),c),se=new _e(D);return this.add(se,c.index)}addFolder(e){return Je(this,e)}addButton(e){return Qe(this,e)}addSeparator(e){return ie(this,e)}addTab(e){return pe(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Ie(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Ee){const s=Ie(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ue){const s=Ie(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof xe))throw K.shouldNeverHappen();const t=Ie(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new O(t,s.target.read(),s.target.presetKey)})}}class _t extends Xe{constructor(e,t){super(e,new et(e.rackController,t)),this.emitter_=new U,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class ht extends P{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class mt{constructor(e,t){const s=W(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Ct(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ee&&s.binding===e)return s}return null}function bt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof xe&&s.binding===e)return s}return null}function Ht(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ue&&s.value===e)return s}return null}function Et(n){return n instanceof He?n.rack:n instanceof ht?n.rackController.rack:null}function It(n){const e=Et(n);return e?e.bcSet_:null}class Yt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new U,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new le(It),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),I(e,"parent")?e.parent=this:(e.parent_=this,Oe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){I(e,"parent")?e.parent=null:(e.parent_=null,Oe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Ee)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof xe)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ue)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Et(s);if(c){const S=c.emitter;S.on("layout",this.onDescendantLayout_),S.on("inputchange",this.onDescendantInputChange_),S.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Ee)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof xe)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ue)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Et(s);if(c){const S=c.emitter;S.off("layout",this.onDescendantLayout_),S.off("inputchange",this.onDescendantInputChange_),S.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const S=[];c===t&&(S.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&S.push("veryfirst")),c===s&&(S.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&S.push("verylast")),c.blade.set("positions",S)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Ct(this.find(Ee),e.sender);if(!t)throw K.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=bt(this.find(xe),e.sender);if(!t)throw K.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ht(this.find(Ue),e.sender);if(!t)throw K.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class He extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new mt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Yt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&A(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&R(e.bladeController.view.element)}}const ot=W("cnt");class Ut{constructor(e,t){var s;this.className_=W((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),ot()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),j(this.foldable_,"completed",ye(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),j(t.props,"title",Ae=>{G(Ae)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const S=e.createElement("div");S.classList.add(this.className_("i")),this.element.appendChild(S);const D=e.createElement("div");D.classList.add(this.className_("t")),Ve(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const se=e.createElement("div");se.classList.add(this.className_("m")),this.buttonElement.appendChild(se);const Te=t.containerElement;Te.classList.add(this.className_("c")),this.element.appendChild(Te),this.containerElement=Te}}class kt extends ht{constructor(e,t){var s;const c=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),S=new He(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:S,view:new Ut(e,{containerElement:S.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,je(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const vt={id:"folder",type:"blade",accept(n){const e=ve,t=De(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new kt(n.document,{blade:n.blade,expanded:n.params.expanded,props:Q.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof kt?new _t(n.controller,n.pool):null}};class ft extends Ue{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Gt extends w{}const Sn=W("spr");class rn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Sn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Sn("r")),this.element.appendChild(s)}}class xs extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new rn(e,{viewProps:t.viewProps})}))}}const hr={id:"separator",type:"blade",accept(n){const t=De(n,{view:ve.required.constant("separator")});return t?{params:t}:null},controller(n){return new xs(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof xs?new Gt(n.controller):null}},on=W("tbi");class fr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element),j(t.props,"selected",S=>{S?this.element.classList.add(on(void 0,"sel")):this.element.classList.remove(on(void 0,"sel"))});const s=e.createElement("button");s.classList.add(on("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(on("t")),Ve(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class _r{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new fr(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ys{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new _r(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new He(e,{blade:Ge(),viewProps:h.create()}),this.props=t.props,j(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ps{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Ss extends Xe{constructor(e,t){super(e,new et(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new U,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw K.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ys(t,{itemProps:Q.fromObject({selected:!1,title:e.title}),props:Q.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw K.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw K.shouldNeverHappen();const s=new Ps(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw K.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new z(this,e.rawValue)})}}const Cs=-1;class mr{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=J(!0),this.selectedIndex=J(Cs),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Cs,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const an=W("tab");class br{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(an(),ot()),t.viewProps.bindClassModifiers(this.element),fe(t.empty,ye(this.element,an(void 0,"nop")));const s=e.createElement("div");s.classList.add(an("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(an("i")),this.element.appendChild(c);const S=t.contentsElement;S.classList.add(an("c")),this.element.appendChild(S),this.contentsElement=S}}class Es extends ht{constructor(e,t){const s=new He(e,{blade:t.blade,viewProps:t.viewProps}),c=new mr;super({blade:t.blade,rackController:s,view:new br(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new le(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;A(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;R(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const ks={id:"tab",type:"blade",accept(n){const e=ve,t=De(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Es(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ys(n.document,{itemProps:Q.fromObject({selected:!1,title:t.title}),props:Q.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Es?new Ss(n.controller,n.pool):null}};function vr(n,e){const t=n.accept(e.params);if(!t)return null;const s=ve.optional.boolean(e.params.disabled).value,c=ve.optional.boolean(e.params.hidden).value;return n.controller({blade:Ge(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class gr{constructor(){this.disabled=!1,this.emitter=new U}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class wr{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new U,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class xr{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new U,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Ms(n,e){for(;n.length<e;)n.push(void 0)}function yr(n){const e=[];return Ms(e,n),J(e)}function Pr(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Sr(n,e){const t=[...Pr(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Ms(t,n.length),t}class Cr{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new U,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Sr(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class ln{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function gt(n,e){if(n instanceof e)return n;if(n instanceof ln){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Zt{constructor(e){this.values=Q.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class cn{constructor(e){this.values=Q.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Bs{constructor(e){this.values=Q.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class Cn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Fn=W("lst");class Er{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Fn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Fn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Fn("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,j(this.props_,"options",S=>{F(this.selectElement),S.forEach(D=>{const se=e.createElement("option");se.textContent=D.text,this.selectElement.appendChild(se)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class un{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Er(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ts=W("pop");class kr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element),fe(t.shows,ye(this.element,Ts(void 0,"v")))}}class Ds{constructor(e,t){this.shows=J(!1),this.viewProps=t.viewProps,this.view=new kr(e,{shows:this.shows,viewProps:this.viewProps})}}const As=W("txt");class Mr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(As()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(As("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class En{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mr(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Br(n){return String(n)}function zs(n){return n==="false"?!1:!!n}function Ls(n){return Br(n)}class Tr{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Dr={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ar{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Dr[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const zr={"+":n=>n,"-":n=>-n,"~":n=>~n};class Lr{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=zr[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Nn(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function dn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ir(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function pn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ur(n,e){const t=pn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=pn(n,e);return c===""?"":s+c}function qn(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Ur(n,e);return s===""?"":t+s}function Is(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ir(n,e);return e+=s.length,s===""?"":s+pn(n,e)}function Gr(n,e){const t=Is(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=pn(n,e);return e+=c.length,t+s+c+qn(n,e)}function Rr(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=pn(n,e);return e+=s.length,s===""?"":t+s+qn(n,e)}function Vr(n,e){const t=Is(n,e);return e+=t.length,t===""?"":t+qn(n,e)}const Or=Nn([Gr,Rr,Vr]);function Fr(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Nr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Fr(n,e);return s===""?"":t+s}function qr(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $r(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=qr(n,e);return s===""?"":t+s}function Wr(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function jr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Wr(n,e);return s===""?"":t+s}const Kr=Nn([Nr,$r,jr]),Hr=Nn([Kr,Or]);function Yr(n,e){const t=Hr(n,e);return e+=t.length,t===""?null:{evaluable:new Tr(t),cursor:e}}function Zr(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Gs(n,e);if(!s)return null;e=s.cursor,e+=dn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Xr(n,e){var t;return(t=Yr(n,e))!==null&&t!==void 0?t:Zr(n,e)}function Us(n,e){const t=Xr(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Us(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Lr(s,c.evaluable)}):null}function Qr(n,e,t){t+=dn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=dn(e,t).length,{cursor:t,operator:s}):null}function Jr(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let S=c.evaluable;for(;;){const D=Qr(e,t,s);if(!D)break;s=D.cursor;const se=n(t,s);if(!se)return null;s=se.cursor,S=new Ar(D.operator,S,se.evaluable)}return S?{cursor:s,evaluable:S}:null}}const eo=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Jr(n,e),Us);function Gs(n,e){return e+=dn(n,e).length,eo(n,e)}function to(n){const e=Gs(n,0);return!e||e.cursor+dn(n,e.cursor).length!==n.length?null:e.evaluable}function wt(n){var e;const t=to(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Rs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=wt(n);if(!G(e))return e}return 0}function no(n){return String(n)}function st(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const so=st(0);function kn(n){return so(n)+"%"}function Vs(n){return String(n)}function $n(n){return n}function hn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function S(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{S(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{S(()=>{n.setRawValue(s(n,e),D.options)}),S(()=>{e.setRawValue(t(n,e),D.options)})}),S(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function lt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function fn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function xt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function io(n){return n==="ArrowUp"||n==="ArrowDown"}function Os(n){return io(n)||n==="ArrowLeft"||n==="ArrowRight"}function Wn(n,e){var t,s;const c=e.ownerDocument.defaultView,S=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+S.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+S.top)}}class Rt{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new U,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Wn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Wn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Wn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ze(n,e,t,s,c){const S=(n-e)/(t-e);return s+S*(c-s)}function Fs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function tt(n,e,t){return Math.min(Math.max(n,e),t)}function Ns(n,e){return(n%e+e)%e}const ut=W("txt");class ro{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ut(),ut(void 0,"num")),t.arrayPosition&&this.element.classList.add(ut(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(ut("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(ut()),this.inputElement.classList.add(ut("i"));const c=e.createElement("div");c.classList.add(ut("k")),this.element.appendChild(c),this.knobElement=c;const S=e.createElementNS(E,"svg");S.classList.add(ut("g")),this.knobElement.appendChild(S);const D=e.createElementNS(E,"path");D.classList.add(ut("gb")),S.appendChild(D),this.guideBodyElem_=D;const se=e.createElementNS(E,"path");se.classList.add(ut("gh")),S.appendChild(se),this.guideHeadElem_=se;const Te=e.createElement("div");Te.classList.add(W("tt")()),this.knobElement.appendChild(Te),this.tooltipElem_=Te,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(ut(void 0,"drg"));return}this.element.classList.add(ut(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=tt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const S=this.props_.get("formatter");this.tooltipElem_.textContent=S(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class _n{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=J(null),this.view=new ro(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Rt(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),S=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),S!==void 0&&(D=Math.min(D,S)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=lt(this.baseStep_,fn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){lt(this.baseStep_,fn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const jn=W("sld");class oo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(jn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(jn("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(jn("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=tt(Ze(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class ao{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new oo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(tt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=lt(this.baseStep_,xt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){lt(this.baseStep_,xt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Kn=W("sldtxt");class lo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Kn());const s=e.createElement("div");s.classList.add(Kn("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Kn("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class Hn{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new ao(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new _n(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new lo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function mn(n,e){n.write(e)}function Mn(n){const e=ve;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function qs(n){if(n==="inline"||n==="popup")return n}function Mt(n){const e=ve;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function $s(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Yn(n){return G(n)?null:new cn($s(n))}function co(n){const e=n?gt(n,Cn):null;return e?e.step:null}function Bn(n,e){const t=n&&gt(n,Cn);return t?Fs(t.step):Math.max(Fs(e),2)}function Xt(n){const e=co(n);return e??1}function Qt(n,e){var t;const s=n&&gt(n,Cn),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Tn=W("ckb");class uo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Tn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Tn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const S=e.createElement("div");S.classList.add(Tn("w")),s.appendChild(S);const D=v(e,"check");S.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class po{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new uo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function ho(n){const e=[],t=Yn(n.options);return t&&e.push(t),new ln(e)}const fo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=De(e,{options:ve.optional.custom(Mn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>zs,constraint:n=>ho(n.params),writer:n=>mn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&gt(s,cn);return c?new un(e,{props:new Q({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new po(e,{value:t,viewProps:n.viewProps})}},Vt=W("col");class _o{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Vt()),t.foldable.bindExpandedClass(this.element,Vt(void 0,"expanded")),j(t.foldable,"completed",ye(this.element,Vt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Vt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Vt("s")),s.appendChild(c),this.swatchElement=c;const S=e.createElement("div");if(S.classList.add(Vt("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Vt("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function mo(n,e,t){const s=tt(n/255,0,1),c=tt(e/255,0,1),S=tt(t/255,0,1),D=Math.max(s,c,S),se=Math.min(s,c,S),Te=D-se;let Ae=0,Ne=0;const qe=(se+D)/2;return Te!==0&&(Ne=Te/(1-Math.abs(D+se-1)),s===D?Ae=(c-S)/Te:c===D?Ae=2+(S-s)/Te:Ae=4+(s-c)/Te,Ae=Ae/6+(Ae<0?1:0)),[Ae*360,Ne*100,qe*100]}function bo(n,e,t){const s=(n%360+360)%360,c=tt(e/100,0,1),S=tt(t/100,0,1),D=(1-Math.abs(2*S-1))*c,se=D*(1-Math.abs(s/60%2-1)),Te=S-D/2;let Ae,Ne,qe;return s>=0&&s<60?[Ae,Ne,qe]=[D,se,0]:s>=60&&s<120?[Ae,Ne,qe]=[se,D,0]:s>=120&&s<180?[Ae,Ne,qe]=[0,D,se]:s>=180&&s<240?[Ae,Ne,qe]=[0,se,D]:s>=240&&s<300?[Ae,Ne,qe]=[se,0,D]:[Ae,Ne,qe]=[D,0,se],[(Ae+Te)*255,(Ne+Te)*255,(qe+Te)*255]}function vo(n,e,t){const s=tt(n/255,0,1),c=tt(e/255,0,1),S=tt(t/255,0,1),D=Math.max(s,c,S),se=Math.min(s,c,S),Te=D-se;let Ae;Te===0?Ae=0:D===s?Ae=60*(((c-S)/Te%6+6)%6):D===c?Ae=60*((S-s)/Te+2):Ae=60*((s-c)/Te+4);const Ne=D===0?0:Te/D,qe=D;return[Ae,Ne*100,qe*100]}function Ws(n,e,t){const s=Ns(n,360),c=tt(e/100,0,1),S=tt(t/100,0,1),D=S*c,se=D*(1-Math.abs(s/60%2-1)),Te=S-D;let Ae,Ne,qe;return s>=0&&s<60?[Ae,Ne,qe]=[D,se,0]:s>=60&&s<120?[Ae,Ne,qe]=[se,D,0]:s>=120&&s<180?[Ae,Ne,qe]=[0,D,se]:s>=180&&s<240?[Ae,Ne,qe]=[0,se,D]:s>=240&&s<300?[Ae,Ne,qe]=[se,0,D]:[Ae,Ne,qe]=[D,0,se],[(Ae+Te)*255,(Ne+Te)*255,(qe+Te)*255]}function go(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function wo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Ot(n){return[n[0],n[1],n[2]]}function js(n,e){return[n[0],n[1],n[2],e]}const xo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:go,rgb:bo},hsv:{hsl:wo,hsv:(n,e,t)=>[n,e,t],rgb:Ws},rgb:{hsl:mo,hsv:vo,rgb:(n,e,t)=>[n,e,t]}};function Dn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function yo(n,e){return n===e?e:Ns(n,e)}function Po(n,e,t){var s;const c=Dn(e,t);return[e==="rgb"?tt(n[0],0,c[0]):yo(n[0],c[0]),tt(n[1],0,c[1]),tt(n[2],0,c[2]),tt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Ks(n,e,t,s){const c=Dn(e,t),S=Dn(e,s);return n.map((D,se)=>D/c[se]*S[se])}function So(n,e,t){const s=Ks(n,e.mode,e.type,"int"),c=xo[e.mode][t.mode](...s);return Ks(c,t.mode,"int",t.type)}function An(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Fe{static black(e="int"){return new Fe([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Fe(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return An(e,"r")&&An(e,"g")&&An(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&An(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let S=0;S<s.length;S++)if(s[S]!==c[S])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Po(e,t,s)}getComponents(e,t="int"){return js(So(Ot(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Bt=W("colp");class Co{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Bt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Bt("hsv"));const c=e.createElement("div");c.classList.add(Bt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const S=e.createElement("div");S.classList.add(Bt("h")),this.hPaletteView_=t.hPaletteView,S.appendChild(this.hPaletteView_.element),s.appendChild(S),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Bt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const se=e.createElement("div");se.classList.add(Bt("a"));const Te=e.createElement("div");Te.classList.add(Bt("ap")),Te.appendChild(this.alphaViews_.palette.element),se.appendChild(Te);const Ae=e.createElement("div");Ae.classList.add(Bt("at")),Ae.appendChild(this.alphaViews_.text.element),se.appendChild(Ae),this.element.appendChild(se)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Eo(n){return n==="int"?"int":n==="float"?"float":void 0}function Zn(n){const e=ve;return De(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Eo)}),expanded:e.optional.boolean,picker:e.optional.custom(qs)})}function Ft(n){return n?.1:1}function Nt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function ko(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function dt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Mo={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Hs(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Mo[s](t)}function Ys(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dt(e[1],255),dt(e[2],255),dt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Zs(n){return e=>{const t=Ys(e);return t?new Fe(t,"rgb",n):null}}function Xs(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dt(e[1],255),dt(e[2],255),dt(e[3],255),dt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Qs(n){return e=>{const t=Xs(e);return t?new Fe(t,"rgb",n):null}}function Js(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Hs(e[1]),dt(e[2],100),dt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ei(n){return e=>{const t=Js(e);return t?new Fe(t,"hsl",n):null}}function ti(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Hs(e[1]),dt(e[2],100),dt(e[3],100),dt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ni(n){return e=>{const t=ti(e);return t?new Fe(t,"hsl",n):null}}function si(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Bo(n){const e=si(n);return e?new Fe(e,"rgb","int"):null}function ii(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function To(n){const e=ii(n);return e?new Fe(e,"rgb","int"):null}function ri(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function oi(n){return e=>{const t=ri(e);return t?new Fe(t,"rgb",n):null}}function ai(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function li(n){return e=>{const t=ai(e);return t?new Fe(t,"rgb",n):null}}const Do=[{parser:si,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ii,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ys,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Xs,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Js,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ti,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ri,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ai,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ao(n){return Do.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function Xn(n,e="int"){const t=Ao(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const ci={int:[Bo,To,Zs("int"),Qs("int"),ei("int"),ni("int"),oi("int"),li("int")],float:[Zs("float"),Qs("float"),ei("float"),ni("float"),oi("float"),li("float")]};function zo(n){const e=ci[n];return t=>{if(typeof t!="string")return Fe.black(n);const s=e.reduce((c,S)=>c||S(t),null);return s??Fe.black(n)}}function Qn(n){const e=ci[n];return t=>e.reduce((s,c)=>s||c(t),null)}function ui(n){const e=tt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function di(n,e="#"){const t=Ot(n.getComponents("rgb")).map(ui).join("");return`${e}${t}`}function Jn(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(ui).join("");return`${e}${s}`}function pi(n,e){const t=st(e==="float"?2:0);return`rgb(${Ot(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Lo(n){return e=>pi(e,n)}function zn(n,e){const t=st(2),s=st(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((S,D)=>(D===3?t:s)(S)).join(", ")})`}function Io(n){return e=>zn(e,n)}function Uo(n){const e=[st(0),kn,kn];return`hsl(${Ot(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Go(n){const e=[st(0),kn,kn,st(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function hi(n,e){const t=st(e==="float"?2:0),s=["r","g","b"];return`{${Ot(n.getComponents("rgb",e)).map((S,D)=>`${s[D]}: ${t(S)}`).join(", ")}}`}function Ro(n){return e=>hi(e,n)}function fi(n,e){const t=st(2),s=st(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,se)=>{const Te=se===3?t:s;return`${c[se]}: ${Te(D)}`}).join(", ")}}`}function Vo(n){return e=>fi(e,n)}const Oo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:di},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Jn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Uo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Go},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Lo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Io(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Ro(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Vo(e)}],[])];function es(n){return Oo.reduce((e,t)=>e||(ko(t.format,n)?t.stringifier:null),null)}const bn=W("apl");class Fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(bn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(bn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(bn("c")),s.appendChild(c),this.colorElem_=c;const S=e.createElement("div");S.classList.add(bn("m")),this.element.appendChild(S),this.markerElem_=S;const D=e.createElement("div");D.classList.add(bn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Fe([t[0],t[1],t[2],0],"rgb"),c=new Fe([t[0],t[1],t[2],255],"rgb"),S=["to right",zn(s),zn(c)];this.colorElem_.style.background=`linear-gradient(${S.join(",")})`,this.previewElem_.style.backgroundColor=zn(e);const D=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class No{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Fo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[S,D,se]=c.getComponents("hsv");this.value.setRawValue(new Fe([S,D,se,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=lt(Ft(!0),xt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,se]=s.getComponents("hsv");this.value.setRawValue(new Fe([c,S,D,se+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){lt(Ft(!0),xt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Jt=W("coltxt");function qo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const S=n.createElement("option");return S.textContent=c.text,S.value=c.value,s.appendChild(S),s},n.createDocumentFragment())),e}class $o{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Jt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Jt("m")),this.modeElem_=qo(e),this.modeElem_.classList.add(Jt("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(Jt("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const S=e.createElement("div");S.classList.add(Jt("w")),this.element.appendChild(S),this.textsElem_=S,this.textViews_=t.textViews,this.applyTextViews_(),fe(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){F(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Jt("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Wo(n){return st(n==="float"?2:0)}function jo(n,e,t){const s=Dn(n,e)[t];return new Zt({min:0,max:s})}function ts(n,e,t){return new _n(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Ft(!1),parser:e.parser,props:Q.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Wo(e.colorType)}),value:J(0,{constraint:jo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Ko{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=J(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new $o(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ts(e,t,0),ts(e,t,1),ts(e,t,2)];return s.forEach((c,S)=>{hn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[S],backward:(D,se)=>{const Te=this.colorMode.rawValue,Ae=D.rawValue.getComponents(Te,this.colorType_);return Ae[S]=se.rawValue,new Fe(js(Ot(Ae),Ae[3]),Te,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ns=W("hpl");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ns()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ns("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ns("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=pi(new Fe([t,100,100],"hsv"));const s=Ze(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(tt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,S,D,se]=c.getComponents("hsv");this.value.setRawValue(new Fe([s,S,D,se],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=lt(Ft(!1),xt(e));if(t===0)return;const s=this.value.rawValue,[c,S,D,se]=s.getComponents("hsv");this.value.setRawValue(new Fe([c+t,S,D,se],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){lt(Ft(!1),xt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ss=W("svp"),_i=64;class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ss()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=_i,s.width=_i,s.classList.add(ss("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(ss("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,S=this.canvasElement.height,D=e.getImageData(0,0,c,S),se=D.data;for(let Ne=0;Ne<S;Ne++)for(let qe=0;qe<c;qe++){const qt=Ze(qe,0,c,0,100),gn=Ze(Ne,0,S,100,0),wn=Ws(s[0],qt,gn),Ln=(Ne*c+qe)*4;se[Ln]=wn[0],se[Ln+1]=wn[1],se[Ln+2]=wn[2],se[Ln+3]=255}e.putImageData(D,0,0);const Te=Ze(s[1],0,100,0,100);this.markerElem_.style.left=`${Te}%`;const Ae=Ze(s[2],0,100,100,0);this.markerElem_.style.top=`${Ae}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(e.point.x,0,e.bounds.width,0,100),c=Ze(e.point.y,0,e.bounds.height,100,0),[S,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Fe([S,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Os(e.key)&&e.preventDefault();const[t,s,c,S]=this.value.rawValue.getComponents("hsv"),D=Ft(!1),se=lt(D,xt(e)),Te=lt(D,fn(e));se===0&&Te===0||this.value.setRawValue(new Fe([t,s+se,c+Te,S],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Ft(!1),s=lt(t,xt(e)),c=lt(t,fn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Qo{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Yo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new No(e,{value:this.value,viewProps:this.viewProps}),text:new _n(e,{parser:wt,baseStep:.1,props:Q.fromObject({draggingScale:.01,formatter:st(2)}),value:J(0,{constraint:new Zt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&hn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const S=s.rawValue.getComponents();return S[3]=c.rawValue,new Fe(S,s.rawValue.mode)}}),this.textC_=new Ko(e,{colorType:t.colorType,parser:wt,value:this.value,viewProps:this.viewProps}),this.view=new Co(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const is=W("colsw");class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(is("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(is("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Jn(e)}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps})}}class rs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new ea(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new En(e,{parser:t.parser,props:Q.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new _o(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ds(e,{viewProps:this.viewProps}):null;const c=new Qo(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(S=>{S.addEventListener("blur",this.onPopupChildBlur_),S.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),hn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:S=>S.rawValue,backward:(S,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ae(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ta(n,e){return Fe.isColorObject(n)?Fe.fromObject(n,e):Fe.black(e)}function na(n){return Ot(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function sa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function ia(n){return new Fe([n>>16&255,n>>8&255,n&255],"rgb")}function ra(n){return new Fe([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function oa(n){return typeof n!="number"?Fe.black():ia(n)}function aa(n){return typeof n!="number"?Fe.black():ra(n)}function la(n){const e=es(n);return e?(t,s)=>{mn(t,e(s))}:null}function ca(n){const e=n?sa:na;return(t,s)=>{mn(t,e(s))}}function ua(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function da(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function pa(n,e){return(t,s)=>{n?ua(t,s,e):da(t,s,e)}}function os(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ha(n){return n?e=>Jn(e,"0x"):e=>di(e,"0x")}function fa(n){return"color"in n||"view"in n&&n.view==="color"}const _a={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!fa(e))return null;const t=Zn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>os(n.params)?aa:oa,equals:Fe.equals,writer:n=>ca(os(n.params))},controller:n=>{const e=os(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new rs(n.document,{colorType:"int",expanded:t??!1,formatter:ha(e),parser:Qn("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ma(n){return Fe.isRgbaColorObject(n)}function ba(n){return e=>ta(e,n)}function va(n,e){return t=>n?fi(t,e):hi(t,e)}const ga={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Fe.isColorObject(n))return null;const t=Zn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ba(Nt(n.params)),equals:Fe.equals,writer:n=>pa(ma(n.initialValue),Nt(n.params))},controller:n=>{var e;const t=Fe.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,S=(e=Nt(n.params))!==null&&e!==void 0?e:"int";return new rs(n.document,{colorType:S,expanded:s??!1,formatter:va(t,S),parser:Qn(S),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},wa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Xn(n,Nt(e));if(!t||!es(t))return null;const c=Zn(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return zo((e=Nt(n.params))!==null&&e!==void 0?e:"int")},equals:Fe.equals,writer:n=>{const e=Xn(n.initialValue,Nt(n.params));if(!e)throw K.shouldNeverHappen();const t=la(e);if(!t)throw K.notBindable();return t}},controller:n=>{const e=Xn(n.initialValue,Nt(n.params));if(!e)throw K.shouldNeverHappen();const t=es(e);if(!t)throw K.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new rs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Qn(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Tt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var S,D;return(D=(S=this.components[c])===null||S===void 0?void 0:S.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const mi=W("pndtxt");class xa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(mi()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(mi("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function ya(n,e,t){return new _n(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:J(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class as{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>ya(e,t,c)),this.acs_.forEach((s,c)=>{hn({primary:this.value,secondary:s.value,forward:S=>t.assembly.toComponents(S.rawValue)[c],backward:(S,D)=>{const se=t.assembly.toComponents(S.rawValue);return se[c]=D.rawValue,t.assembly.fromComponents(se)}})}),this.view=new xa(e,{textViews:this.acs_.map(s=>s.view)})}}function bi(n,e){return"step"in n&&!G(n.step)?new Cn(n.step,e):null}function vi(n){return!G(n.max)&&!G(n.min)?new Zt({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Bs({max:n.max,min:n.min}):null}function Pa(n){const e=gt(n,Zt);if(e)return[e.values.get("min"),e.values.get("max")];const t=gt(n,Bs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Sa(n,e){const t=[],s=bi(n,e);s&&t.push(s);const c=vi(n);c&&t.push(c);const S=Yn(n.options);return S&&t.push(S),new ln(t)}const Ca={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=De(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Mn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs,constraint:n=>Sa(n.params,n.initialValue),writer:n=>mn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&gt(s,cn);if(c)return new un(n.document,{props:new Q({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const S=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:st(Bn(s,t.rawValue)),D=s&&gt(s,Zt);return D?new Hn(n.document,{baseStep:Xt(s),parser:wt,sliderProps:new Q({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:Q.fromObject({draggingScale:Qt(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps}):new _n(n.document,{baseStep:Xt(s),parser:wt,props:Q.fromObject({draggingScale:Qt(s,t.rawValue),formatter:S}),value:t,viewProps:n.viewProps})}};class Dt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const gi={toComponents:n=>n.getComponents(),fromComponents:n=>new Dt(...n)},en=W("p2d");class Ea{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(en()),t.viewProps.bindClassModifiers(this.element),fe(t.expanded,ye(this.element,en(void 0,"expanded")));const s=e.createElement("div");s.classList.add(en("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(en("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const S=e.createElement("div");if(S.classList.add(en("t")),s.appendChild(S),this.textElement=S,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(en("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const At=W("p2dp");class ka{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(At()),t.layout==="popup"&&this.element.classList.add(At(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(At("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(At("g")),this.padElement.appendChild(c),this.svgElem_=c;const S=e.createElementNS(E,"line");S.classList.add(At("ax")),S.setAttributeNS(null,"x1","0"),S.setAttributeNS(null,"y1","50%"),S.setAttributeNS(null,"x2","100%"),S.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(S);const D=e.createElementNS(E,"line");D.classList.add(At("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const se=e.createElementNS(E,"line");se.classList.add(At("l")),se.setAttributeNS(null,"x1","50%"),se.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(se),this.lineElem_=se;const Te=e.createElement("div");Te.classList.add(At("m")),this.padElement.appendChild(Te),this.markerElem_=Te,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ze(e,-s,+s,0,100),S=Ze(t,-s,+s,0,100),D=this.invertsY_?100-S:S;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function wi(n,e,t){return[lt(e[0],xt(n)),lt(e[1],fn(n))*(t?1:-1)]}class Ma{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new ka(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rt(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ze(e.point.x,0,e.bounds.width,-s,+s),S=Ze(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Dt(c,S),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Os(e.key)&&e.preventDefault();const[t,s]=wi(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Dt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=wi(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ba{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ds(e,{viewProps:this.viewProps}):null;const S=new Ma(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.textC_=new as(e,{assembly:gi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ea(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),hn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,se)=>se.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ae(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class tn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const xi={toComponents:n=>n.getComponents(),fromComponents:n=>new tn(...n)};function Ta(n){return tn.isObject(n)?new tn(n.x,n.y,n.z):new tn}function Da(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Aa(n,e){return new Tt({assembly:xi,components:[yt("x"in n?n.x:void 0,e.x),yt("y"in n?n.y:void 0,e.y),yt("z"in n?n.z:void 0,e.z)]})}function ls(n,e){return{baseStep:Xt(e),constraint:e,textProps:Q.fromObject({draggingScale:Qt(e,n),formatter:st(Bn(e,n))})}}const za={id:"input-point3d",type:"input",accept:(n,e)=>{if(!tn.isObject(n))return null;const t=ve,s=De(e,{x:t.optional.custom(Mt),y:t.optional.custom(Mt),z:t.optional.custom(Mt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ta,constraint:n=>Aa(n.params,n.initialValue),equals:tn.equals,writer:n=>Da},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Tt))throw K.shouldNeverHappen();return new as(n.document,{assembly:xi,axes:[ls(e.rawValue.x,t.components[0]),ls(e.rawValue.y,t.components[1]),ls(e.rawValue.z,t.components[2])],parser:wt,value:e,viewProps:n.viewProps})}};class nn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,S=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof S!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const yi={toComponents:n=>n.getComponents(),fromComponents:n=>new nn(...n)};function La(n){return nn.isObject(n)?new nn(n.x,n.y,n.z,n.w):new nn}function Ia(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ua(n,e){return new Tt({assembly:yi,components:[yt("x"in n?n.x:void 0,e.x),yt("y"in n?n.y:void 0,e.y),yt("z"in n?n.z:void 0,e.z),yt("w"in n?n.w:void 0,e.w)]})}function Ga(n,e){return{baseStep:Xt(e),constraint:e,textProps:Q.fromObject({draggingScale:Qt(e,n),formatter:st(Bn(e,n))})}}const Ra={id:"input-point4d",type:"input",accept:(n,e)=>{if(!nn.isObject(n))return null;const t=ve,s=De(e,{x:t.optional.custom(Mt),y:t.optional.custom(Mt),z:t.optional.custom(Mt),w:t.optional.custom(Mt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>La,constraint:n=>Ua(n.params,n.initialValue),equals:nn.equals,writer:n=>Ia},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Tt))throw K.shouldNeverHappen();return new as(n.document,{assembly:yi,axes:e.rawValue.getComponents().map((s,c)=>Ga(s,t.components[c])),parser:wt,value:e,viewProps:n.viewProps})}};function Va(n){const e=[],t=Yn(n.options);return t&&e.push(t),new ln(e)}const Oa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=De(e,{options:ve.optional.custom(Mn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs,constraint:n=>Va(n.params),writer:n=>mn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&gt(s,cn);return c?new un(e,{props:new Q({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new En(e,{parser:S=>S,props:Q.fromObject({formatter:$n}),value:t,viewProps:n.viewProps})}},vn={monitor:{defaultInterval:200,defaultLineCount:3}},Pi=W("mll");class Fa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Pi()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Pi("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class cs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Fa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Si=W("sgl");class Na{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Si()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Si("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class us{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Na(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const qa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=De(e,{lineCount:ve.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>zs},controller:n=>{var e;return n.value.rawValue.length===1?new us(n.document,{formatter:Ls,value:n.value,viewProps:n.viewProps}):new cs(n.document,{formatter:Ls,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},zt=W("grl");class $a{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(zt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(zt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const S=e.createElement("div");S.classList.add(zt("t"),W("tt")()),this.element.appendChild(S),this.tooltipElem_=S,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),S=[];this.value.rawValue.forEach((Ne,qe)=>{if(Ne===void 0)return;const qt=Ze(qe,0,t,0,e.width),gn=Ze(Ne,s,c,e.height,0);S.push([qt,gn].join(","))}),this.lineElem_.setAttributeNS(null,"points",S.join(" "));const D=this.tooltipElem_,se=this.value.rawValue[this.cursor_.rawValue];if(se===void 0){D.classList.remove(zt("t","a"));return}const Te=Ze(this.cursor_.rawValue,0,t,0,e.width),Ae=Ze(se,s,c,e.height,0);D.style.left=`${Te}px`,D.style.top=`${Ae}px`,D.textContent=`${this.formatter_(se)}`,D.classList.contains(zt("t","a"))||(D.classList.add(zt("t","a"),zt("t","in")),i(D),D.classList.remove(zt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Wa{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=J(-1),this.view=new $a(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Rt(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ds(n){return"format"in n&&!G(n.format)?n.format:st(2)}function ja(n){var e;return n.value.rawValue.length===1?new us(n.document,{formatter:ds(n.params),value:n.value,viewProps:n.viewProps}):new cs(n.document,{formatter:ds(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ka(n){var e,t,s;return new Wa(n.document,{formatter:ds(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,props:Q.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Ci(n){return"view"in n&&n.view==="graph"}const Ha={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ve,s=De(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Ci(n)?64:1,reader:n=>Rs},controller:n=>Ci(n.params)?Ka(n):ja(n)},Ya={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ve,s=De(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new cs(n.document,{formatter:$n,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:vn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new us(n.document,{formatter:$n,value:t,viewProps:n.viewProps})}};function Za(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=ve,S={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(S),se=n.binding.constraint?n.binding.constraint(S):void 0,Te=J(D(s.initialValue),{constraint:se,equals:n.binding.equals}),Ae=new xr({reader:D,target:e.target,value:Te,writer:n.binding.writer(S)}),Ne=c.optional.boolean(e.params.disabled).value,qe=c.optional.boolean(e.params.hidden).value,qt=n.controller({constraint:se,document:e.document,initialValue:s.initialValue,params:s.params,value:Ae.value,viewProps:h.create({disabled:Ne,hidden:qe})});return new Ee(e.document,{binding:Ae,blade:Ge(),props:Q.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:qt})}function Xa(n,e){return e===0?new gr:new wr(n,e??vn.monitor.defaultInterval)}function Qa(n,e){var t,s,c;const S=ve,D=n.accept(e.target.read(),e.params);if(G(D))return null;const se={target:e.target,initialValue:D.initialValue,params:D.params},Te=n.binding.reader(se),Ae=(s=(t=S.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Ne=S.optional.number(e.params.interval).value,qe=new Cr({reader:Te,target:e.target,ticker:Xa(e.document,Ne),value:yr(Ae)}),qt=S.optional.boolean(e.params.disabled).value,gn=S.optional.boolean(e.params.hidden).value,wn=n.controller({document:e.document,params:D.params,value:qe.value,viewProps:h.create({disabled:qt,hidden:gn})});return new xe(e.document,{binding:qe,blade:Ge(),props:Q.fromObject({label:"label"in e.params?(c=S.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:wn})}class Ja{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new K({context:{key:t.key},type:"nomatchingcontroller"});const S=this.pluginsMap_.inputs.reduce((D,se)=>D??Za(se,{document:e,target:t,params:s}),null);if(S)return S;throw new K({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((S,D)=>S??Qa(D,{document:e,params:s,target:t}),null);if(c)return c;throw new K({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,S)=>c??vr(S,{document:e,params:t}),null);if(!s)throw new K({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Ee)return new Me(e);if(e instanceof xe)return new _e(e);if(e instanceof He)return new et(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw K.shouldNeverHappen();return t}}function el(){const n=new Ja;return[ol,za,Ra,Oa,Ca,wa,ga,_a,fo,qa,Ya,Ha,Se,vt,hr,ks].forEach(e=>{n.register(e)}),n}function tl(n){return Dt.isObject(n)?new Dt(n.x,n.y):new Dt}function nl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function yt(n,e){if(!n)return;const t=[],s=bi(n,e);s&&t.push(s);const c=vi(n);return c&&t.push(c),new ln(t)}function sl(n,e){return new Tt({assembly:gi,components:[yt("x"in n?n.x:void 0,e.x),yt("y"in n?n.y:void 0,e.y)]})}function Ei(n,e){const[t,s]=n?Pa(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Xt(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function il(n,e){const t=e instanceof Tt?e.components[0]:void 0,s=e instanceof Tt?e.components[1]:void 0,c=Ei(t,n.x),S=Ei(s,n.y);return Math.max(c,S)}function ki(n,e){return{baseStep:Xt(e),constraint:e,textProps:Q.fromObject({draggingScale:Qt(e,n),formatter:st(Bn(e,n))})}}function rl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ol={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Dt.isObject(n))return null;const t=ve,s=De(e,{expanded:t.optional.boolean,picker:t.optional.custom(qs),x:t.optional.custom(Mt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>tl,constraint:n=>sl(n.params,n.initialValue),equals:Dt.equals,writer:n=>nl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Tt))throw K.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,S="picker"in n.params?n.params.picker:void 0;return new Ba(e,{axes:[ki(t.rawValue.x,s.components[0]),ki(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:rl(n.params),maxValue:il(t.rawValue,s),parser:wt,pickerLayout:S??"popup",value:t,viewProps:n.viewProps})}};class Mi extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Bi extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ti extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const al=function(){return{id:"list",type:"blade",accept(n){const e=ve,t=De(n,{options:e.required.custom(Mn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new cn($s(n.params.options)),t=J(n.params.value,{constraint:e}),s=new un(n.document,{props:new Q({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new ft(n.document,{blade:n.blade,props:Q.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof ft)||!(n.controller.valueController instanceof un)?null:new Mi(n.controller)}}}();function ll(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function cl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class ul extends _t{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Ee).map(s=>s.binding);cl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Ee).map(t=>t.binding.target);return ll(e)}refresh(){this.controller_.rackController.rack.find(Ee).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(xe).forEach(e=>{e.binding.read()})}}class dl extends kt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const pl={id:"slider",type:"blade",accept(n){const e=ve,t=De(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Zt({max:n.params.max,min:n.params.min}),S=new Hn(n.document,{baseStep:1,parser:wt,sliderProps:new Q({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:Q.fromObject({draggingScale:Qt(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:no}),value:J(s,{constraint:c}),viewProps:n.viewProps});return new ft(n.document,{blade:n.blade,props:Q.fromObject({label:n.params.label}),valueController:S})},api(n){return!(n.controller instanceof ft)||!(n.controller.valueController instanceof Hn)?null:new Bi(n.controller)}},hl=function(){return{id:"text",type:"blade",accept(n){const e=ve,t=De(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new En(n.document,{parser:n.params.parse,props:Q.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:J(n.params.value),viewProps:n.viewProps});return new ft(n.document,{blade:n.blade,props:Q.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof ft)||!(n.controller.valueController instanceof En)?null:new Ti(n.controller)}}}();function fl(n){const e=n.createElement("div");return e.classList.add(W("dfw")()),n.body&&n.body.appendChild(e),e}function Di(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class _l extends ul{constructor(e){var t,s;const c=e??{},S=(t=c.document)!==null&&t!==void 0?t:a(),D=el(),se=new dl(S,{expanded:c.expanded,blade:Ge(),props:Q.fromObject({title:c.title}),viewProps:h.create()});super(se,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:fl(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw K.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw K.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Di(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Di(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[pl,al,ks,hl]})}}const ml=new C("3.1.10");f.BladeApi=w,f.ButtonApi=de,f.FolderApi=_t,f.InputBindingApi=Me,f.ListApi=Mi,f.MonitorBindingApi=_e,f.Pane=_l,f.SeparatorApi=Gt,f.SliderApi=Bi,f.TabApi=Ss,f.TabPageApi=Ps,f.TextApi=Ti,f.TpChangeEvent=M,f.VERSION=ml,Object.defineProperty(f,"__esModule",{value:!0})})})(hs,hs.exports);var Nl=hs.exports;const ql=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
            // scan barrier with \`alive = 0\`. We compute pixel coords with the
            // wgpu framebuffer convention (ndc.xy·0.5 + 0.5)·(W,H) — camera.proj
            // has the y-flip baked in already (see camera.ts::get_projection_matrix)
            // so ndc.y is Y-down and matches the depth texture row-major layout.
            // The margin (1e-4 in NDC z) hides fp32 fighting between the
            // projected surfel center and the mesh's rasterized depth.
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
`,Hl=`// shader implementing gpu radix sort.

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
`,Yl=`// shader implementing gpu radix sort.

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
`,Zl=`// ============================================================================
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
}`,tr=32,fs=1,_s=2,Ni=4,ms=8,Xl=0,Lt=new ArrayBuffer(tr),rt={canvas_size:new Uint32Array(Lt,0,2),accel_flags:new Uint32Array(Lt,8,1),feature_mode:new Uint32Array(Lt,12,1),gaussian_scaling:new Float32Array(Lt,16,1),sh_bias:new Float32Array(Lt,20,1),color_K:new Uint32Array(Lt,24,1),walltime:new Float32Array(Lt,28,1)};function Ql(r){rt.canvas_size[0]=r.width>>>0,rt.canvas_size[1]=r.height>>>0,rt.accel_flags[0]=(r.accel_flags??fs|_s)>>>0,rt.feature_mode[0]=(r.feature_mode??Xl)>>>0,rt.gaussian_scaling[0]=r.gaussian_scaling??1,rt.sh_bias[0]=r.sh_bias??.5,rt.color_K[0]=(r.color_K??0)>>>0,rt.walltime[0]=r.walltime??0}function nr(r,l){r.queue.writeBuffer(l,0,Lt)}function On(r,l,f){f&&r&&l&&nr(r,l)}function In(r,l,f,C,w=!0){rt.canvas_size[0]=r>>>0,rt.canvas_size[1]=l>>>0,On(f??null,C??null,w)}function qi(r,l,f,C=!0){rt.gaussian_scaling[0]=r,On(l??null,f??null,C)}function $i(r,l,f,C=!0){rt.sh_bias[0]=r,On(l??null,f??null,C)}function sr(r,l,f,C=!0){let w=rt.accel_flags[0];r.oac!==void 0&&(w=r.oac?w|fs:w&~fs),r.spr!==void 0&&(w=r.spr?w|_s:w&~_s),r.bfc!==void 0&&(w=r.bfc?w|Ni:w&~Ni),r.meshCull!==void 0&&(w=r.meshCull?w|ms:w&~ms),rt.accel_flags[0]=w>>>0,On(l??null,f??null,C)}const Jl=256,ec=tr,tc=8,nc=80,sc=12,ws=8,Pt=1<<ws,Wt=256,Gn=32/ws,ic=0,Wi=Gn&1;function ji(r,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function rc(r,l){const f=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),C=r.createPipelineLayout({bindGroupLayouts:[f]}),w=k=>r.createComputePipeline({layout:C,compute:{module:l,entryPoint:k,constants:{WG_SIZE:Wt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function oc(r,l,f){const C=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=r.createPipelineLayout({bindGroupLayouts:[C]}),M=r.createPipelineLayout({bindGroupLayouts:[w]}),O=[];for(let T=0;T<Gn;T++){const z={PASS_ID:T+ic,RS_RADIX_LOG2:ws,RS_RADIX_SIZE:Pt};O.push({localHistogram:r.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:z}}),scatterElements:r.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:z}})})}return{passes:O,localHistogramBindGroupLayout:C,scatterBindGroupLayout:w}}function ac(r){const l=r.createShaderModule({label:"local histogram",code:Yl}),f=r.createShaderModule({label:"scatter",code:Hl}),C=r.createShaderModule({label:"blelloch prefix",code:Zl}),w=rc(r,C),k=oc(r,l,f);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function lc(r){const l=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),C=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=r.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(k,0,new ArrayBuffer(48));const M=r.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),O=M.createView({dimension:"2d"}),T=r.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),z=r.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),V=z.createView({dimension:"2d"}),G=r.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),H={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:C,rectsBuffer:w,texParamsBuffer:k,meta:H,rvqCodebookTexture:M,rvqCodebookView:O,rvqCodebookSampler:T,rvqPackedIndicesTexture:z,rvqPackedIndicesView:V,rvqSurfelOffsetsBuffer:G}}class cc{constructor(l,f,C,w,k,M=null,O=null){Z(this,"device");Z(this,"pc");Z(this,"presentationFormat");Z(this,"camera_buffer");Z(this,"render_settings_buffer");Z(this,"draw_indirect_buffer");Z(this,"splat_2d_buffer");Z(this,"querySet");Z(this,"resolveBuffer");Z(this,"resultBuffer");Z(this,"queriesPerFrame",tc);Z(this,"queryCapacityFrames",200);Z(this,"sort_prefixBindGroup");Z(this,"sort_pipelines");Z(this,"sort_localHistogramBindGroups");Z(this,"sort_scatterBindGroups");Z(this,"lastFrame",0);Z(this,"frameCount",0);Z(this,"preprocessPipeline");Z(this,"cullPipeline");Z(this,"renderPipeline");Z(this,"indirectPipeline");Z(this,"sort_info_buffer");Z(this,"sort_ping_pong");Z(this,"crsBg");Z(this,"gsBg");Z(this,"cullBg2");Z(this,"preprocessBg1");Z(this,"renderSplatsBindGroup");Z(this,"renderSettingsBindGroup");Z(this,"atlasBindGroup");Z(this,"indirectBindGroup");Z(this,"sh_solvers_buffer");Z(this,"mesh");Z(this,"meshDepthPipeline",null);Z(this,"meshDepthCameraBindGroup",null);Z(this,"meshDepthMarginBindGroup",null);Z(this,"meshMarginBuffer",null);Z(this,"meshDepthTexture",null);Z(this,"meshDepthView",null);Z(this,"meshCullBindGroupLayout");Z(this,"meshCullBindGroup");Z(this,"meshCullWidth",0);Z(this,"meshCullHeight",0);Z(this,"meshStubTexture");Z(this,"meshStubView");Z(this,"bgColor",[0,0,0,0]);Z(this,"showPerfDialogNext",!1);Z(this,"requestReorderNextFrame",!1);Z(this,"reorderInFlight",!1);Z(this,"downloadOnceNextRead",!1);Z(this,"downloadOnceFileName","fps_metrics");Z(this,"allFrameTimes",[]);Z(this,"lastStageBreakdownMs",null);Z(this,"timeQueryEnabled");Z(this,"atlas");this.mesh=O;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&at("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=C,this.camera_buffer=w,this.atlas=M??lc(f),f.addEventListener("uncapturederror",Q=>{console.error("A WebGPU error was not captured:",Q.error)}),this._setupTimestampQueries(),this._setupBuffers();const z=(Math.floor((this.pc.num_points+Wt-1)/Wt)+1)*Wt,V=Math.ceil(z/Wt);console.log(`keys count adjusted: ${z}`),console.log(`key size: ${this.pc.num_points}`);const G=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=ac(f);const H=[ji(z,f),ji(z,f)],I=f.createBuffer({label:"workgroup histograms",size:V*Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"workgroup prefixes",size:V*Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=f.createBuffer({label:"digit base",size:Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=Math.ceil(V/Wt),de=Math.ceil(N/Wt),U=f.createBuffer({label:"prefix l0 sums",size:N*Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=f.createBuffer({label:"prefix l0 offsets",size:N*Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),W=f.createBuffer({label:"prefix l1 sums",size:de*Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ce=f.createBuffer({label:"prefix l1 offsets",size:de*Pt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:I}},{binding:2,resource:{buffer:Y}},{binding:3,resource:{buffer:U}},{binding:4,resource:{buffer:X}},{binding:5,resource:{buffer:W}},{binding:6,resource:{buffer:ce}},{binding:7,resource:{buffer:K}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:H[0].sort_depths_buffer}},{binding:2,resource:{buffer:I}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:H[1].sort_depths_buffer}},{binding:2,resource:{buffer:I}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:H[0].sort_depths_buffer}},{binding:3,resource:{buffer:H[1].sort_depths_buffer}},{binding:4,resource:{buffer:H[0].sort_indices_buffer}},{binding:5,resource:{buffer:H[1].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:H[1].sort_depths_buffer}},{binding:3,resource:{buffer:H[0].sort_depths_buffer}},{binding:4,resource:{buffer:H[1].sort_indices_buffer}},{binding:5,resource:{buffer:H[0].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]})],this.sort_info_buffer=G,this.sort_ping_pong=H;const $=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),fe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),j=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),re=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:$,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:fe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:j,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:re,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const ye=this.device.createShaderModule({code:Wl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ye,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const Ve=this.device.createShaderModule({code:jl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,fe,j,this.meshCullBindGroupLayout]}),compute:{module:Ve,entryPoint:"surfel_cull"}}),this.mesh!==null){const Q=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:Q,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const ne=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([.03,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:ne,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const ee=this.device.createShaderModule({code:Kl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[Q,ne]}),vertex:{module:ee,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const oe=this.device.createShaderModule({code:ql});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[$,re]}),compute:{module:oe,entryPoint:"preprocess"}});const he=this.device.createShaderModule({code:$l});he.getCompilationInfo().then(Q=>{Q.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Q.messages.forEach(ne=>{(ne.type==="error"?console.error:ne.type==="warning"?console.warn:console.log)(`${ne.type} (line ${ne.lineNum}:${ne.linePos}): ${ne.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const be=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),we=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Ce=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),J=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[be,we,Ce]}),vertex:{module:he,entryPoint:"vs_main"},fragment:{module:he,entryPoint:"fs_main",constants:{BETA_KERNEL:J},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(Q=>{Q?console.error("[render_2dgs] pipeline create validation error:",Q.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:be,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Wi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Ce,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshCullEnabled(l){sr({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}ensureMeshDepthTexture(l,f){var C;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((C=this.meshDepthTexture)==null||C.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&Ji(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),C=f*Uint32Array.BYTES_PER_ELEMENT;if(C===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[Wi].sort_indices_buffer,0,w,0,C),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(l,f,C=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=C&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(rt.accel_flags[0]&ms)!==0){const T=rt.canvas_size[0],z=rt.canvas_size[1];this.ensureMeshDepthTexture(T,z);const V={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(V);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const z=l.beginComputePass(T);z.setPipeline(this.cullPipeline),z.setBindGroup(0,this.crsBg),z.setBindGroup(1,this.gsBg),z.setBindGroup(2,this.cullBg2),z.setBindGroup(3,this.meshCullBindGroup);const V=Math.ceil(this.pc.num_points/Jl);z.dispatchWorkgroups(V,1,1),z.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const z=l.beginComputePass(T);z.setPipeline(this.preprocessPipeline),z.setBindGroup(0,this.crsBg),z.setBindGroup(1,this.preprocessBg1),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),z.end()}for(let T=0;T<Gn;T++){const z=T&1,V=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[z],H=this.sort_scatterBindGroups[z];{const I={label:`upsweep_round${T}`};M&&T==0&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const Y=l.beginComputePass(I);Y.setPipeline(V.localHistogram),Y.setBindGroup(0,G),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}{const I=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,Pt,1),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),I.end()}{const I=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});I.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),I.setBindGroup(0,this.sort_prefixBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:`scatter_round${T}`};M&&T==Gn-1&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const Y=l.beginComputePass(I);Y.setPipeline(V.scatterElements),Y.setBindGroup(0,H),Y.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),Y.end()}}{const T={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const z=l.beginRenderPass(T);z.setPipeline(this.renderPipeline),z.setBindGroup(0,this.renderSettingsBindGroup),z.setBindGroup(1,this.renderSplatsBindGroup),z.setBindGroup(2,this.atlasBindGroup),z.drawIndirect(this.draw_indirect_buffer,0),z.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const C=this.device.createCommandEncoder({label:"timestamp resolve encoder"});C.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),C.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([C.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),O=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let z=0;for(let de=0;de<M;de++){const U=(O+de)%this.queryCapacityFrames,X=U*this.queriesPerFrame;let W=!0;for(let ce=0;ce<w.length;ce++){const[$,fe,j]=w[ce];if(k[X+j]===0n||k[X+fe]===0n||k[X+fe]<k[X+j]){W=!1;break}}if(!W){!f&&U%60===0&&console.debug("[timestamp] frame slot",U,"contains unwritten (0) timestamps, skipped in stats");continue}z++;for(let ce=0;ce<w.length;ce++){const[$,fe,j]=w[ce],re=Number(k[X+j]),ye=Number(k[X+fe]);T[ce].push((ye-re)/1e6)}}if(z===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const V=[];let G=0,H=0,I=0;for(let de=0;de<w.length;de++){const U=w[de][0],X=T[de];let W=0;if(U==="Total"){const ce=this.allFrameTimes;W=ce.reduce((j,re)=>j+re,0)/ce.length;const $=[...ce].sort((j,re)=>j-re);G=$[Math.floor($.length*.99)]||0;const fe=ce.reduce((j,re)=>j+Math.pow(re-W,2),0)/ce.length;H=Math.sqrt(fe),I=W}else W=X.reduce((ce,$)=>ce+$,0)/X.length;V.push([U,W])}this.lastFrame+=this.frameCount,this.frameCount=0;const Y=Object.fromEntries(V);this.lastStageBreakdownMs={cull:Y.Culling??0,preprocess:Y.Preprocess??0,sort:Y.Sort??0,render:Y.Render??0,total:Y.Total??0};const N=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([de,U])=>`${de}: ${U.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${H.toFixed(3)}ms
Total AVG: ${I.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(N),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const de=`Stage,ms
`,U=V.map(([ce,$])=>`${ce},${$.toFixed(3)}`).join(`
`),X="data:text/csv;charset=utf-8,"+encodeURIComponent(de+U),W=document.createElement("a");W.href=X,W.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(W),W.click(),W.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(N)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ec,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,C=l?l.height:1;Ql({width:f,height:C,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),nr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:sn(this.pc.num_points*nc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:sn(this.pc.num_points*sc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,C=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${C}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function uc(r,l){return 2*Math.atan(l/(2*r))}function dc(r,l,f,C){const w=Math.tan(C/2),k=Math.tan(f/2),M=w*r,O=-M,T=k*r,z=-T,V=nt.create();return V[0]=2*r/(T-z),V[5]=-2*r/(M-O),V[2]=(T+z)/(T-z),V[6]=(M+O)/(M-O),V[14]=1,V[10]=l/(l-r),V[11]=-(l*r)/(l-r),nt.transpose(V,V),V}async function pc(r){at(`loading scene camera file... : ${r}`);const f=await(await fetch(r)).json();return at(`loaded cameras count: ${f.length}`),f.map(C=>{const w=L.clone(C.position),k=pt.create(...C.rotation.flat()),M=k[0],O=k[4],T=k[8],z=k[1],V=k[5],G=k[9],H=k[2],I=k[6],Y=k[10];M*(V*Y-G*I)-O*(z*Y-G*H)+T*(z*I-V*H)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const N=nt.fromMat3(k);return{position:w,rotation:N,img_name:C.img_name,id:C.id}})}const hc=4*2,fc=4*16,ir=4*fc+2*hc;function _c(r){return r.createBuffer({label:"camera uniform",size:ir,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const $t=new Float32Array(ir/Float32Array.BYTES_PER_ELEMENT),Rn=class Rn{constructor(l,f){Z(this,"uniform_buffer");Z(this,"position",L.create());Z(this,"rotation",nt.create());Z(this,"fovY",45/180*Math.PI);Z(this,"fovX");Z(this,"focal",Ri.create());Z(this,"viewport",Ri.create());Z(this,"view_matrix",nt.identity());Z(this,"view_inv_matrix",nt.identity());Z(this,"proj_matrix",nt.identity());Z(this,"proj_inv_matrix",nt.identity());Z(this,"_negPos",L.create());Z(this,"look",L.create(0,0,1));Z(this,"up",L.create(0,1,0));Z(this,"right",L.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=_c(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=uc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=dc(.01,100,this.fovX,this.fovY),nt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],nt.copy(this.rotation,this.view_matrix),nt.translate(this.view_matrix,this._negPos,this.view_matrix),nt.inverse(this.view_matrix,this.view_inv_matrix),L.transformMat4Upper3x3(Rn.Z_AXIS,this.view_inv_matrix,this.look),L.normalize(this.look,this.look),L.cross(this.up,this.look,this.right),L.normalize(this.right,this.right);let l=0;$t.set(this.view_matrix,l),l+=16,$t.set(this.view_inv_matrix,l),l+=16,$t.set(this.proj_matrix,l),l+=16,$t.set(this.proj_inv_matrix,l),l+=16,$t.set(this.viewport,l),l+=2,$t.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,$t)}set_preset(l){L.copy(l.position,this.position),nt.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};Z(Rn,"Z_AXIS",L.create(0,0,1));let bs=Rn;const mc=L.create(1,0,0),bc=L.create(0,1,0);function vc(r,l){const f=r[0],C=r[4],w=r[8],k=r[1],M=r[5],O=r[9],T=r[2],z=r[6],V=r[10],G=f+M+V;let H,I,Y,K;if(G>0){const N=.5/Math.sqrt(G+1);H=.25/N,I=(z-O)*N,Y=(w-T)*N,K=(k-C)*N}else if(f>M&&f>V){const N=2*Math.sqrt(1+f-M-V);H=(z-O)/N,I=.25*N,Y=(C+k)/N,K=(w+T)/N}else if(M>V){const N=2*Math.sqrt(1+M-f-V);H=(w-T)/N,I=(C+k)/N,Y=.25*N,K=(O+z)/N}else{const N=2*Math.sqrt(1+V-f-M);H=(k-C)/N,I=(w+T)/N,Y=(O+z)/N,K=.25*N}return l[0]=I,l[1]=Y,l[2]=K,l[3]=H,l}class gc{constructor(l){Z(this,"element");Z(this,"enabled",!0);Z(this,"center",L.create(0,0,0));Z(this,"up",L.create(0,1,0));Z(this,"rotation",[0,0]);Z(this,"shift",[0,0]);Z(this,"scroll",0);Z(this,"speed",.1);Z(this,"sensitivity",.08);Z(this,"leftPressed",!1);Z(this,"rightPressed",!1);Z(this,"leftDragPans",!1);Z(this,"lastX",0);Z(this,"lastY",0);Z(this,"touches",new Map);Z(this,"lastTouchCenter",null);Z(this,"lastPinchDistance",null);Z(this,"lastTwoFingerAngle",null);Z(this,"lastTouchCount",0);Z(this,"roll",0);Z(this,"_dir",L.create());Z(this,"_right",L.create());Z(this,"_upCam",L.create());Z(this,"_scratch",L.create());Z(this,"_qY",it.create());Z(this,"_qX",it.create());Z(this,"_qRot",it.create());Z(this,"_qLocal",it.create());Z(this,"_qWorldToCam",it.create());Z(this,"_scratchMat3",pt.create());Z(this,"bboxMin",null);Z(this,"bboxMax",null);Z(this,"anchor",L.create(0,0,0));Z(this,"downCallback",l=>{var f,C,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(C=(f=l.target)==null?void 0:f.setPointerCapture)==null||C.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});Z(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,C=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=C):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=C)});Z(this,"upCallback",l=>{var f,C,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(C=(f=l.target)==null?void 0:f.releasePointerCapture)==null||C.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});Z(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){L.copy(l,this.center),L.copy(l,this.anchor)}setOrbitPivot(l){L.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;L.set(f[2],f[6],f[10],this._dir),L.normalize(this._dir,this._dir),L.scale(this._dir,l,this._dir),L.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(L.subtract(this.center,l.position,this._scratch),L.length(this._scratch)<1e-6)return;L.normalize(this._scratch,this._scratch),L.cross(this.up,this._scratch,this._right),L.length(this._right)<1e-6&&L.set(1,0,0,this._right),L.normalize(this._right,this._right),L.cross(this._scratch,this._right,this._upCam),L.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=L.create(l[0],l[1],l[2]),this.bboxMax=L.create(f[0],f[1],f[2]);const C=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,k=(l[2]+f[2])*.5;L.set(C,w,k,this.center),L.set(C,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;L.set(l[2],l[6],l[10],this._dir),L.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let C=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const O=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],z=this.bboxMax[M]-this.camera.position[M];if(Math.abs(O)>1e-8){const V=T/O,G=z/O;C=Math.max(C,Math.min(V,G)),w=Math.min(w,Math.max(V,G))}else if(T>0||z<0){k=!0;break}}!k&&C<=w&&w>0&&(f=(Math.max(C,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){L.subtract(this.anchor,this.camera.position,this._scratch);const C=L.dot(this._scratch,this._dir);f=C>.001?C:L.length(this._scratch)}f=Math.max(.1,f),L.scale(this._dir,f,this._dir),L.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const C=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=C*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),C=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,k=f[1].x-f[0].x,M=f[1].y-f[0].y,O=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const z=C-this.lastTouchCenter[0],V=w-this.lastTouchCenter[1],G=Math.hypot(z,V),H=Math.abs(O-this.lastPinchDistance);let I=T-this.lastTwoFingerAngle;I>Math.PI&&(I-=2*Math.PI),I<-Math.PI&&(I+=2*Math.PI),G>.5&&(this.shift[1]-=z,this.shift[0]+=V),H>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(O/this.lastPinchDistance)*10),Math.abs(I)>.0087&&(this.roll+=-I)}this.lastTouchCenter=[C,w],this.lastPinchDistance=O,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const K=f.rotation;this.up[0]=K[1],this.up[1]=K[5],this.up[2]=K[9],L.length(this.up)>1e-6?L.normalize(this.up,this.up):L.set(0,1,0,this.up)}let C=!1;if(Math.abs(this.roll)>1e-4){const K=f.rotation;L.set(K[2],K[6],K[10],this._scratch),L.normalize(this._scratch,this._scratch),it.fromAxisAngle(this._scratch,this.roll,this._qRot),L.transformQuat(this.up,this._qRot,this.up),L.normalize(this.up,this.up),this.roll=0,C=!0}L.subtract(f.position,this.center,this._dir);let w=L.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);L.scale(this._dir,k/w,this._dir),w=k;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],L.normalize(this._right,this._right),L.length(this._right)<1e-6&&L.set(1,0,0,this._right);const O=L.create(M[1],M[5],M[9]);L.normalize(O,O),L.length(O)<1e-6&&L.set(0,1,0,O);const T=l*this.speed*.1*w,z=this.shift[1]*T,V=-this.shift[0]*T;L.scale(this._right,z,this._scratch),L.add(this.center,this._scratch,this.center),L.add(f.position,this._scratch,f.position),L.scale(O,V,this._scratch),L.add(this.center,this._scratch,this.center),L.add(f.position,this._scratch,f.position);const G=this.rotation[0]*l*this.sensitivity,H=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(H)>1e-5||C){const K=f.rotation;vc(K,this._qWorldToCam),it.fromAxisAngle(mc,-H,this._qX),it.fromAxisAngle(bc,-G,this._qY),it.multiply(this._qX,this._qY,this._qLocal),it.normalize(this._qLocal,this._qLocal),it.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),it.normalize(this._qWorldToCam,this._qWorldToCam),pt.fromQuat(this._qWorldToCam,this._scratchMat3),nt.fromMat3(this._scratchMat3,f.rotation);const N=f.rotation,de=N[2],U=N[6],X=N[10];f.position[0]=this.center[0]-de*w,f.position[1]=this.center[1]-U*w,f.position[2]=this.center[2]-X*w,this.up[0]=N[1],this.up[1]=N[5],this.up[2]=N[9],L.normalize(this.up,this.up)}else L.add(this.center,this._dir,f.position);f.update_buffer();const Y=Math.pow(.8,l*60);this.rotation[0]*=Y,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=Y,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=Y,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=Y,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=Y,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function rr(r){const l=L.create();for(const f of r)L.add(l,f,l);return L.scale(l,1/Math.max(r.length,1),l)}function or(r,l){const f=pt.create();pt.inverse(r,f);const C=L.create();return C[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],C[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],C[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],C}function wc(r){const l=r.slice(),f=[1,0,0,0,1,0,0,0,1],C=(T,z)=>l[T*3+z],w=(T,z,V)=>{l[T*3+z]=V},k=(T,z)=>f[T*3+z],M=(T,z,V)=>{f[T*3+z]=V};for(let T=0;T<30;T++){let z=0,V=1,G=Math.abs(C(0,1));if(Math.abs(C(0,2))>G&&(z=0,V=2,G=Math.abs(C(0,2))),Math.abs(C(1,2))>G&&(z=1,V=2,G=Math.abs(C(1,2))),G<1e-12)break;const H=C(z,z),I=C(V,V),Y=C(z,V);let K;Math.abs(H-I)<1e-30?K=Math.PI/4*Math.sign(Y):K=.5*Math.atan2(2*Y,H-I);const N=Math.cos(K),de=Math.sin(K);for(let U=0;U<3;U++){const X=C(U,z),W=C(U,V);w(U,z,N*X+de*W),w(U,V,-de*X+N*W)}for(let U=0;U<3;U++){const X=C(z,U),W=C(V,U);w(z,U,N*X+de*W),w(V,U,-de*X+N*W)}for(let U=0;U<3;U++){const X=k(U,z),W=k(U,V);M(U,z,N*X+de*W),M(U,V,-de*X+N*W)}}const O=[];for(let T=0;T<3;T++)O.push({val:C(T,T),vec:L.create(k(0,T),k(1,T),k(2,T))});return O.sort((T,z)=>z.val-T.val),{vals:[O[0].val,O[1].val,O[2].val],vecs:[O[0].vec,O[1].vec,O[2].vec]}}function xc(r,l){const f=rr(r);let C=0,w=0,k=0,M=0,O=0,T=0;for(const Y of r){const K=Y[0]-f[0],N=Y[1]-f[1],de=Y[2]-f[2];C+=K*K,w+=K*N,k+=K*de,M+=N*N,O+=N*de,T+=de*de}const z=[C,w,k,w,M,O,k,O,T],{vecs:V}=wc(z);let G=V[0],H=V[1],I=V[2];return L.dot(I,l)<0&&(L.scale(I,-1,I),L.scale(H,-1,H)),{centroid:f,normal:I,u:G,v:H}}function yc(r){let l=0,f=0,C=0,w=0,k=0,M=0,O=0,T=0,z=0;for(const[N,de]of r){const U=-2*N,X=-2*de,W=1,ce=-(N*N+de*de);l+=U*U,f+=U*X,C+=U*W,w+=X*X,k+=X*W,M+=W*W,O+=U*ce,T+=X*ce,z+=W*ce}const V=pt.create(l,f,C,f,w,k,C,k,M),G=or(V,L.create(O,T,z)),H=G[0],I=G[1],Y=G[2],K=H*H+I*I-Y;return{center:[H,I],radius:Math.sqrt(Math.max(K,1e-12))}}function Pc(r,l){let f=0,C=0,w=0,k=0,M=0,O=0,T=0,z=0,V=0;for(let H=0;H<r.length;H++){const I=r[H],Y=L.normalize(l[H],L.create()),K=1-Y[0]*Y[0],N=-Y[0]*Y[1],de=-Y[0]*Y[2],U=1-Y[1]*Y[1],X=-Y[1]*Y[2],W=1-Y[2]*Y[2];f+=K,C+=N,w+=de,k+=U,M+=X,O+=W,T+=K*I[0]+N*I[1]+de*I[2],z+=N*I[0]+U*I[1]+X*I[2],V+=de*I[0]+X*I[1]+W*I[2]}const G=pt.create(f,C,w,C,k,M,w,M,O);return or(G,L.create(T,z,V))}function ar(r,l={}){if(r.length===0)return null;const f=l.tiltDownDeg??8,C=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,M=r.map(j=>L.clone(j.position)),O=r.map(j=>{const re=j.rotation;return L.create(re[8],re[9],re[10])}),T=r.map(j=>{const re=j.rotation;return L.create(re[4],re[5],re[6])}),z=rr(T),V=L.normalize(L.scale(z,-1,L.create())),{centroid:G,normal:H,u:I,v:Y}=xc(M,V),K=M.map(j=>{const re=L.sub(j,G,L.create());return[L.dot(re,I),L.dot(re,Y)]}),{center:N,radius:de}=yc(K),U=de*C,X=L.add(G,L.add(L.scale(I,N[0],L.create()),L.scale(Y,N[1],L.create()),L.create()),L.create()),W=Pc(M,O),ce=U*Math.tan(f*Math.PI/180),$=L.sub(W,L.scale(H,ce,L.create()),L.create());let fe=0;if(w){const j=L.sub(M[0],X,L.create());fe=Math.atan2(L.dot(j,Y),L.dot(j,I))/(2*Math.PI)%1,fe<0&&(fe+=1)}return console.log(`[orbit] fit ${r.length} train cams: radius=${U.toFixed(2)}, tilt=${f}°, normal=[${H[0].toFixed(2)}, ${H[1].toFixed(2)}, ${H[2].toFixed(2)}], startPhase=${fe.toFixed(3)}`),{center:X,radius:U,normal:H,u:I,v:Y,lookAt:$,startPhase:fe,direction:k}}function lr(r,l){const f=(r.startPhase+l*r.direction)*2*Math.PI,C=Math.cos(f),w=Math.sin(f),k=L.add(r.center,L.add(L.scale(r.u,r.radius*C,L.create()),L.scale(r.v,r.radius*w,L.create()),L.create()),L.create()),M=L.normalize(L.sub(r.lookAt,k,L.create())),O=L.cross(M,r.normal,L.create());L.length(O)<1e-6&&L.copy(r.u,O),L.normalize(O,O);const T=L.cross(M,O,L.create());L.normalize(T,T);const z=nt.create();return z[0]=O[0],z[1]=T[0],z[2]=M[0],z[3]=0,z[4]=O[1],z[5]=T[1],z[6]=M[1],z[7]=0,z[8]=O[2],z[9]=T[2],z[10]=M[2],z[11]=0,z[12]=0,z[13]=0,z[14]=0,z[15]=1,{position:k,rotation:z,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Sc(r,l={}){const f=ar(r,l);if(!f)return[];const C=l.numViews??120;return Array.from({length:C},(w,k)=>({...lr(f,k/C),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Cc(r){const l=new Uint8Array(r),f=Math.min(l.byteLength,65536),C=new TextDecoder("ascii").decode(l.subarray(0,f)),w=C.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=C.slice(0,w).split(/\r?\n/).map(ne=>ne.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const O=M.find(ne=>ne.startsWith("format"));if(!O||!O.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${O??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},z=[];let V=null;for(const ne of M)if(ne.startsWith("element ")){const[,ee,Pe]=ne.split(/\s+/);V={name:ee,count:parseInt(Pe,10),props:[],bytesPerRecord:0,hasList:!1},z.push(V)}else if(ne.startsWith("property ")&&V){const ee=ne.split(/\s+/);if(ee[1]==="list"){const Pe=ee[2],ke=ee[3],ze=ee[4];V.props.push({name:ze,type:ke,isList:!0,listCountType:Pe,listItemType:ke}),V.hasList=!0}else{const Pe=ee[1],ke=ee[2];if(V.props.push({name:ke,type:Pe,isList:!1}),T[Pe]===void 0)throw new Error(`mesh PLY: unsupported prop type '${Pe}'`);V.bytesPerRecord+=T[Pe]}}const G=z.find(ne=>ne.name==="vertex"),H=z.find(ne=>ne.name==="face"||ne.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!H)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const I=G.props.find(ne=>ne.name==="x"),Y=G.props.find(ne=>ne.name==="y"),K=G.props.find(ne=>ne.name==="z");if(!I||!Y||!K)throw new Error("mesh PLY: vertex must have x/y/z");let N=0;const de=new Map;for(const ne of G.props)de.set(ne.name,{off:N,type:ne.type}),N+=T[ne.type];const U=de.get("x"),X=de.get("y"),W=de.get("z");if(U.type!==X.type||U.type!==W.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${U.type}/${X.type}/${W.type})`);const ce=U.type,$=ce==="double"||ce==="float64";if(!$&&ce!=="float"&&ce!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ce}')`);const fe=new Float32Array(G.count*3),j=new DataView(r),re=k,ye=G.bytesPerRecord;for(let ne=0;ne<G.count;ne++){const ee=re+ne*ye;$?(fe[ne*3+0]=j.getFloat64(ee+U.off,!0),fe[ne*3+1]=j.getFloat64(ee+X.off,!0),fe[ne*3+2]=j.getFloat64(ee+W.off,!0)):(fe[ne*3+0]=j.getFloat32(ee+U.off,!0),fe[ne*3+1]=j.getFloat32(ee+X.off,!0),fe[ne*3+2]=j.getFloat32(ee+W.off,!0))}const Ve=re+G.count*ye,oe=H.props.find(ne=>ne.isList);if(!oe)throw new Error("mesh PLY: face element has no list property");const he=T[oe.listCountType],be=T[oe.listItemType];if(he!==1)throw new Error(`mesh PLY: unsupported face list count size ${he}`);let we=Ve,Ce=0;for(let ne=0;ne<H.count;ne++){const ee=j.getUint8(we);ee===3&&Ce++,we+=1+ee*be}const J=new Uint32Array(Ce*3);we=Ve;let Q=0;for(let ne=0;ne<H.count;ne++){const ee=j.getUint8(we);if(we+=1,ee===3)for(let Pe=0;Pe<3;Pe++){const ke=we+Pe*be;let ze;if(be===4)ze=j.getUint32(ke,!0);else if(be===2)ze=j.getUint16(ke,!0);else if(be===1)ze=j.getUint8(ke);else throw new Error(`mesh PLY: unsupported face index size ${be}`);J[Q++]=ze}we+=ee*be}return{positions:fe,indices:J}}function Ec(r){const l=new DataView(r);if(r.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),C=l.getUint32(4,!0),w=f*12,k=C*4;if(r.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${r.byteLength} B)`);const M=new Float32Array(r.slice(8,8+w)),O=new Uint32Array(r.slice(8+w,8+w+k));return{positions:M,indices:O}}function cr(r,l){return(l??"").toLowerCase().endsWith(".ply")?Cc(r):Ec(r)}function ur(r,l){const f=r.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(f,0,l.positions);const C=r.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return r.queue.writeBuffer(C,0,l.indices),{vertexBuffer:f,indexBuffer:C,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function kc(r,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const C=await f.arrayBuffer(),w=cr(C,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),ur(r,w)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Mc(r,l,f){try{const C=cr(l,f);return console.log(`[mesh-cull] loaded from bundle: ${C.positions.length/3} verts, ${C.indices.length/3} tris`),ur(r,C)}catch(C){return console.warn("[mesh-cull] parse error:",C),null}}const dr="BITYMI01",Bc=0,Tc=1,Dc=2,Ac=3,zc=4,Lc=5,Ic=6;function Un(r){const l=(r&32768)>>15,f=(r&31744)>>10,C=r&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(C/1024):f===31?C?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+C/1024)}function Ki(r,l,f,C,w,k){const M=(r-f.width*.5)/C.focal[0],O=-((l-f.height*.5)/C.focal[1]),T=C.rotation,z=T[0],V=T[4],G=T[8],H=T[1],I=T[5],Y=T[9],K=T[2],N=T[6],de=T[10];let U=M*z+O*H+K,X=M*V+O*I+N,W=M*G+O*Y+de;const ce=Math.hypot(U,X,W)||1;U/=ce,X/=ce,W/=ce;const $=C.position[0],fe=C.position[1],j=C.position[2],re=k*.005,ye=re*re,Ve=new Uint32Array(w.buffer,w.byteOffset,w.length),oe=w.length/8;let he=1/0,be=0,we=0,Ce=0,J=-1;for(let Q=0;Q<oe;Q++){const ne=Q*8,ee=w[ne+0]-$,Pe=w[ne+1]-fe,ke=w[ne+2]-j,ze=ee*U+Pe*X+ke*W;if(ze<=0)continue;const ve=ee-ze*U,De=Pe-ze*X,Oe=ke-ze*W;if(ve*ve+De*De+Oe*Oe>=ye||!(Ve[ne+7]>>>16&1))continue;const g=Ve[ne+5],o=Ve[ne+6],h=Un(g&65535),d=Un(g>>>16&65535),b=Un(o&65535),y=Un(o>>>16&65535),P=Math.hypot(h,d,b,y)||1,E=h/P,i=d/P,m=b/P,u=y/P,p=2*(i*u+E*m),a=2*(m*u-E*i),_=1-2*(i*i+m*m),x=U*p+X*a+W*_;let v;Math.abs(x)>1e-6?(v=(ee*p+Pe*a+ke*_)/x,(!isFinite(v)||v<=0)&&(v=ze)):v=ze,v<he&&(he=v,be=$+v*U,we=fe+v*X,Ce=j+v*W,J=Q)}return J<0?null:[be,we,Ce]}function pr(r){const l=new Uint8Array(r),f=new TextDecoder().decode(l.subarray(0,8));if(f!==dr)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const C=new DataView(r),w=C.getUint32(8,!0),k=12,M=20;let O=null,T=null,z=null,V=null;for(let G=0;G<w;G++){const H=k+G*M,I=C.getUint32(H+0,!0),Y=Number(C.getBigUint64(H+4,!0)),K=Number(C.getBigUint64(H+12,!0)),N=l.slice(Y,Y+K).buffer;I===Bc||I===Tc||I===Lc?O=N:I===Dc?T=N:I===Ac||I===zc?z=N:I===Ic&&(V=N)}if(O===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:O,camerasBuffer:T,atlasBuffer:z,meshBuffer:V}}async function Uc(r,l){var M;const f=await fetch(r);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const C=(()=>{const O=f.headers.get("content-length");return O&&parseInt(O,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let k;if(!w)k=await f.arrayBuffer(),l&&l(k.byteLength,C,0);else{const O=[];let T=0,z=performance.now(),V=0;for(;;){const{done:I,value:Y}=await w.read();if(I)break;O.push(Y),T+=Y.byteLength;const K=performance.now();if(K-z>=150&&l){const N=(T-V)/((K-z)/1e3);l(T,C,N),z=K,V=T}}const G=new Uint8Array(T);let H=0;for(const I of O)G.set(I,H),H+=I.byteLength;k=G.buffer,l&&l(T,C,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===dr?{bundle:pr(k),rawPly:null}:{bundle:null,rawPly:k}}function Gc(r){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=r,f.style.display="none",f.onchange=()=>{var C;return l(((C=f.files)==null?void 0:C[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Rc(r,l,f){const C=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const V=await Gc(".ply,.bitymi");if(V)if(C&&(C.style.display="none"),V.name.toLowerCase().endsWith(".bitymi")){const G=await V.arrayBuffer(),{pcBuffer:H}=pr(G),I=new File([H],V.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),Y=await ps(I,r);l(Y)}else{const G=await ps(V,r);l(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),O=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),z=M.get("mesh_url");O&&(C&&(C.style.display="none"),f(O,T,z))}async function Vc(r,l,f,C){const w=new bs(r,f),k=new gc(w);let M=!1;r.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const O="rgba8unorm";l.configure({device:f,format:O,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const z=()=>{w.on_update_canvas(),T!==null&&In(r.width,r.height,f,T.render_settings_buffer)};new ResizeObserver(()=>{const oe=Math.max(.25,j.render_scale),he=Math.max(1,Math.ceil(oe*r.clientWidth)),be=Math.max(1,Math.ceil(oe*r.clientHeight));r.width===he&&r.height===be||(r.width=he,r.height=be,z())}).observe(r);let G=0,H=0;const I=()=>{(r.width!==G||r.height!==H)&&(G=r.width,H=r.height,z())},Y=new URLSearchParams(window.location.search);let N=Y.get("animation")==="1";k.enabled=!N;const de=Y.get("camera_url"),U=Y.get("mesh_cull"),X=U==="1"||U==="true",W=Y.get("mesh_margin"),ce=W!==null?Number(W):NaN,$=Number.isFinite(ce)?ce:.03,fe=Math.max(1,window.devicePixelRatio||1),j={gaussian_scaling:1,sh_bias:.5,animate:N,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:X,mesh_margin:$,render_scale:1},re=new Nl.Pane({title:"Config",expanded:!0});re.addInput(j,"animate",{label:"Animate"}).on("change",oe=>{const he=N;N=oe.value,k.enabled=!oe.value,!he&&N&&ye.value&&ye.value.onAnimateStart(),he&&!N&&ye.value&&ye.value.onAnimateStop()}),re.addInput(j,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const ye={value:null};Rc(f,oe=>Ve(oe,[],null,null),async(oe,he,be)=>{let we=he??de,Ce,J=null,Q=null;const ne=oe.toLowerCase();if(ne.endsWith(".bitymi")||ne.includes(".bitymi?")){gs("downloading bundle ...");try{const{bundle:Pe}=await Uc(oe,(ze,ve,De)=>{const Oe=ze/1048576,B=ve?ve/(1024*1024):void 0,q=De/(1024*1024),g=ve?Math.min(99,Math.floor(ze/ve*100)):void 0,o=B?`total ${B.toFixed(1)} MB`:"total -- MB",h=B&&g!==void 0?`${Oe.toFixed(1)} MB downloaded (${g}%)`:`${Oe.toFixed(1)} MB downloaded`,d=`${q.toFixed(2)} MB/s`;St(`downloading bundle ...
${o}, ${h}
${d}`)});if(!Pe)throw new Error("Expected a .bitymi bundle");St("parsing PLY ...");const ke=new File([Pe.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(Ce=await ps(ke,f),!we&&Pe.camerasBuffer&&(we=URL.createObjectURL(new Blob([Pe.camerasBuffer],{type:"application/json"}))),Pe.atlasBuffer){const ze=Pe.atlasBuffer.byteLength/1048576;St(`uploading atlas ...
${ze.toFixed(1)} MB BC7`);try{const ve=Il(Pe.atlasBuffer);J=Vl(f,ve,!0)}catch(ve){console.warn("[atlas] failed to parse/upload atlas:",ve)}}Pe.meshBuffer&&!be&&(St("uploading mesh ..."),Q=Mc(f,Pe.meshBuffer,"bundle.mesh"))}catch(Pe){throw xn(),Pe}}else Ce=await Ol(oe,f);be&&(St("loading mesh ..."),Q=await kc(f,be));const ee=we?await pc(we):[];ee.length>0&&w.set_preset(ee[0]),Ve(Ce,ee,J,Q)});function Ve(oe,he=[],be=null,we=null){const Ce=[(oe.bbox.min[0]+oe.bbox.max[0])/2,(oe.bbox.min[1]+oe.bbox.max[1])/2,(oe.bbox.min[2]+oe.bbox.max[2])/2];k.setBbox(oe.bbox.min,oe.bbox.max);const J=.5*Math.sqrt((oe.bbox.max[0]-oe.bbox.min[0])**2+(oe.bbox.max[1]-oe.bbox.min[1])**2+(oe.bbox.max[2]-oe.bbox.min[2])**2);function Q(ie,pe){const le=Ki(ie,pe,r,w,oe.surfel_data,J);le&&(k.setOrbitPivot(le),console.log(`[pick] orbit pivot → (${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)})`))}function ne(){const ie=r.width*.5,pe=r.height*.5,le=Ki(ie,pe,r,w,oe.surfel_data,J);if(!le)return;const Me=w.rotation,Ee=Me[2],_e=Me[6],xe=Me[10],Le=le[0]-w.position[0],Ie=le[1]-w.position[1],Ke=le[2]-w.position[2],et=Le*Ee+Ie*_e+Ke*xe;et>0&&k.setOrbitDepth(et)}if(he.length===0){const ie=oe.bbox.max[0]-oe.bbox.min[0],pe=oe.bbox.max[1]-oe.bbox.min[1],le=oe.bbox.max[2]-oe.bbox.min[2],Ee=.5*Math.sqrt(ie*ie+pe*pe+le*le)*.5;L.set(Ce[0]-Ee,Ce[1]-Ee,Ce[2]-Ee,w.position);const _e=L.create(Ee,Ee,Ee);L.normalize(_e,_e);const xe=L.create(0,1,0),Le=L.create();L.cross(xe,_e,Le),L.normalize(Le,Le);const Ie=L.create();L.cross(_e,Le,Ie);const Ke=pt.create(Le[0],Ie[0],_e[0],Le[1],Ie[1],_e[1],Le[2],Ie[2],_e[2]);nt.fromMat3(Ke,w.rotation),w.update_buffer()}k.setCenter(L.create(oe.centroid[0],oe.centroid[1],oe.centroid[2]));const ee=new cc(oe,f,O,w.uniform_buffer,C,be,we);T=ee,In(r.width,r.height,f,ee.render_settings_buffer),j.atlas_enabled=be!==null,we===null&&(j.mesh_cull=!1),ee.setMeshCullEnabled(j.mesh_cull),ee.setMeshMargin(j.mesh_margin),console.log(`[mesh-cull] ${we!==null?"mesh loaded":"no mesh"} · toggle=${j.mesh_cull} · margin=${j.mesh_margin}m`);let Pe=!1;const ke=(()=>{if(be!==null)return`${be.meta.format===2?"BC7":be.meta.format===3?"ASTC 4×4":be.meta.format===5?"RVQ-paired (typeA)":be.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":be.meta.format===7?"BC7 codebook gather (typeD)":`format=${be.meta.format}`} ${be.meta.width}×${be.meta.height}, ${be.meta.n_layers} layers`;const ie=f.features.has("texture-compression-bc"),pe=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(ie?["BC7"]:[]).concat(pe?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",ke),$i(oe.sh_bias,f,ee.render_settings_buffer),qi(j.gaussian_scaling,f,ee.render_settings_buffer),j.sh_bias=oe.sh_bias;const ze=oe.num_points.toLocaleString(),ve={stats:`${ze} surfels · -- fps`};re.addMonitor(ve,"stats",{label:"Stats",interval:200}),re.addMonitor({atlas:ke},"atlas",{label:"Atlas"});const De={stages:"— ms · awaiting timestamp data"};re.addMonitor(De,"stages",{label:"Stages",interval:500});let Oe=null;if(ee.timeQueryEnabled){Oe=document.createElement("canvas"),Oe.width=280,Oe.height=24,Oe.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(Oe);const ie=le=>{const Me=Oe.getContext("2d");if(!Me)return;const Ee=Oe.width,_e=Oe.height;if(Me.clearRect(0,0,Ee,_e),!le||le.total<=0){Me.fillStyle="#888",Me.font="11px ui-monospace,Menlo,monospace",Me.fillText("awaiting GPU timestamps…",8,16);return}const xe=[{label:"cull",ms:le.cull,color:"#3aa3ff"},{label:"pre",ms:le.preprocess,color:"#3ad27a"},{label:"sort",ms:le.sort,color:"#ffa53a"},{label:"render",ms:le.render,color:"#ff5566"}],Le=Math.max(.001,xe.reduce((Ke,et)=>Ke+et.ms,0));let Ie=0;Me.font="10px ui-monospace,Menlo,monospace",Me.textBaseline="middle";for(const Ke of xe){const et=Ke.ms/Le*Ee;Me.fillStyle=Ke.color,Me.fillRect(Ie,0,et,_e),et>=38&&(Me.fillStyle="#000c",Me.fillText(`${Ke.label} ${Ke.ms.toFixed(1)}`,Ie+4,_e/2)),Ie+=et}};setInterval(()=>{Pe||ee.readPerfMetrics({silent:!0}).then(()=>{const le=ee.lastStageBreakdownMs;ie(le),le&&(De.stages=`${le.total.toFixed(1)} ms · cull ${le.cull.toFixed(1)} / pre ${le.preprocess.toFixed(1)} / sort ${le.sort.toFixed(1)} / render ${le.render.toFixed(1)}`)}).catch(le=>console.warn("[perf] readPerfMetrics failed:",le))},500)}const B=.4,q=3,g=.3;let o=null,h=0,d=0;const b=it.create(),y=pt.create();let P=he.length>0?0:-1;const E={view:he.length>0?`${P+1} / ${he.length}: ${he[P].img_name??P}`:"— no presets —"};re.addMonitor(E,"view",{label:"View",interval:100});function i(ie){const pe=pt.create(ie[0],ie[1],ie[2],ie[4],ie[5],ie[6],ie[8],ie[9],ie[10]);return it.fromMat(pe)}function m(ie,pe){o={fromPos:L.clone(w.position),toPos:L.clone(ie.position),fromQuat:it.normalize(i(w.rotation)),toQuat:it.normalize(i(ie.rotation)),target:ie,t:0,duration:Math.max(.01,pe)}}const u=(ie,pe=!0)=>{if(he.length===0)return;P=(ie%he.length+he.length)%he.length;const le=he[P];pe?m(le,B):(w.set_preset(le),k.resetToCamera(),ne()),E.view=`${P+1} / ${he.length}: ${he[P].img_name??P}`};he.length>0&&(re.addButton({title:"◀ Prev view"}).on("click",()=>u(P-1)),re.addButton({title:"Next view ▶"}).on("click",()=>u(P+1)));const p=he.length>0?ar(he,{tiltDownDeg:15,alignFirst:!0}):null,a=p?Sc(he,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let _=0;const x=12;ye.value={onAnimateStart:()=>{_=0},onAnimateStop:()=>{k.resetToCamera(),ne()}},re.addInput(j,"render_scale",{label:"Render scale",min:.25,max:fe,step:.25}).on("change",ie=>{const pe=Math.max(.25,ie.value),le=Math.max(1,Math.ceil(pe*r.clientWidth)),Me=Math.max(1,Math.ceil(pe*r.clientHeight));(r.width!==le||r.height!==Me)&&(r.width=le,r.height=Me,z())}),re.addInput(j,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",ie=>qi(ie.value,f,ee.render_settings_buffer)),re.addInput(j,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",ie=>$i(ie.value,f,ee.render_settings_buffer)),re.addInput(j,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",ie=>{ee.bgColor=[ie.value.r,ie.value.g,ie.value.b,ie.value.a]});const v=be?be.meta.format===3?"Atlas (ASTC)":be.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";re.addInput(j,"atlas_enabled",{label:v}).on("change",ie=>ee.setAtlasEnabled(ie.value)),re.addInput(j,"bfc",{label:"Backface"}).on("change",ie=>sr({bfc:ie.value},f,ee.render_settings_buffer));const A=re.addInput(j,"mesh_cull",{label:"Mesh cull"});A.on("change",ie=>ee.setMeshCullEnabled(ie.value)),ee.hasMesh||(A.disabled=!0);const R=re.addInput(j,"mesh_margin",{label:"Mesh margin (m)",min:-.5,max:.5,step:.005});R.on("change",ie=>ee.setMeshMargin(ie.value)),ee.hasMesh||(R.disabled=!0),re.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(he.length>0)w.set_preset(he[0]);else{const ie=oe.bbox.max[0]-oe.bbox.min[0],pe=oe.bbox.max[1]-oe.bbox.min[1],le=oe.bbox.max[2]-oe.bbox.min[2],Ee=.5*Math.sqrt(ie*ie+pe*pe+le*le)*.5;L.set(Ce[0]-Ee,Ce[1]-Ee,Ce[2]-Ee,w.position);const _e=L.create(Ee,Ee,Ee);L.normalize(_e,_e);const xe=L.create();L.cross(L.create(0,1,0),_e,xe),L.normalize(xe,xe);const Le=L.create();L.cross(_e,xe,Le);const Ie=pt.create(xe[0],Le[0],_e[0],xe[1],Le[1],_e[1],xe[2],Le[2],_e[2]);nt.fromMat3(Ie,w.rotation),w.update_buffer()}k.resetToCamera(),ne()});const F={result:"— click Benchmark —"};re.addMonitor(F,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const ue={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function ae(){const pe=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const le of Object.keys(ue))if(pe.startsWith(le))return le;return null}const te=document.createElement("div");te.id="bench-overlay",te.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(te);function ge(ie,pe,le){const Me=Math.floor(pe/Math.max(1,le)*100),Ee=32,_e=Math.floor(pe/Math.max(1,le)*Ee),xe="█".repeat(_e)+"░".repeat(Ee-_e);te.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${ie}</div><div>[${xe}] ${Me}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${pe} / ${le} frames · offscreen · pipelined · no vsync</div>`,te.style.display="block"}function Be(){te.style.display="none"}async function me(ie=10,pe=200){if(Pe)return;if(he.length===0){F.result="no cameras to benchmark";return}Pe=!0;const le=N,Me=j.animate,Ee=new Float32Array(w.position),_e=new Float32Array(w.rotation);N=!1,j.animate=!1,re.refresh(),o=null,k.enabled=!1;const xe=ae(),Le=xe?ue[xe]:null,Ie=(Le==null?void 0:Le.w)??r.width,Ke=(Le==null?void 0:Le.h)??r.height,et=(Le==null?void 0:Le.fovY)??w.getFov(),_t=xe?`${xe} · ${Ie>=4e3/4+500?"images_4":"images_2"}`:"custom",ht=r.width,mt=r.height,Ct=w.getFov();r.width=Ie,r.height=Ke,w.setFov(et),In(Ie,Ke,f,ee.render_settings_buffer);const bt=f.createTexture({size:[Ie,Ke,1],format:O,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Ht=bt.createView(),Et=()=>{const ot=f.createCommandEncoder();ee.frame(ot,Ht,!1),f.queue.submit([ot.finish()])},It=()=>new Promise(ot=>setTimeout(ot,0)),Yt=20,He=async(ot,Ut)=>{let kt=0,vt=0;for(ge(Ut,0,ot),await It();vt<ot;){const ft=Math.min(Yt,ot-vt),Gt=performance.now();for(let rn=0;rn<ft;rn++)w.set_preset(he[(vt+rn)%he.length]),Et();await f.queue.onSubmittedWorkDone();const Sn=performance.now();kt+=Sn-Gt,vt+=ft,ge(Ut,vt,ot),await It()}return kt};try{await He(ie,"Warming up");const Ut=await He(pe,"Benchmarking")/pe,kt=1e3/Ut,vt=oe.num_points??oe.surfel_data.length/8,ft=(et*180/Math.PI).toFixed(1),Gt=`${kt.toFixed(1)} FPS  (${Ut.toFixed(2)} ms/frame)
${Ie}×${Ke} · fovY ${ft}° · ${_t}
${vt.toLocaleString()} surfels · ${ie}w+${pe}b · pipelined`;F.result=Gt,console.log("[bench]",Gt.replace(/\n/g,"  |  "))}catch(ot){console.error("[bench] failed:",ot),F.result=`bench failed: ${ot}`}finally{Be(),bt.destroy(),r.width=ht,r.height=mt,w.setFov(Ct),In(ht,mt,f,ee.render_settings_buffer),w.position.set(Ee),w.rotation.set(_e),w.update_buffer(),k.enabled=!le,N=le,j.animate=Me,re.refresh(),Pe=!1}}re.addButton({title:"📊 Benchmark"}).on("click",()=>me()),document.addEventListener("keydown",ie=>{const pe=ie.key;if(pe>="0"&&pe<="9"&&he.length>0){const le=parseInt(pe);le<he.length&&u(le)}else pe==="ArrowLeft"||pe==="PageUp"?(u(P-1),ie.preventDefault()):pe==="ArrowRight"||pe==="PageDown"?(u(P+1),ie.preventDefault()):(pe==="d"||pe==="D")&&ee.debugReadSortedIndices(30).catch(le=>console.error("[DEBUG] readback failed:",le))});function Se(ie,pe){const le=r.getBoundingClientRect(),Me=window.devicePixelRatio||1;return[(ie-le.left)*Me,(pe-le.top)*Me]}r.addEventListener("dblclick",ie=>{const[pe,le]=Se(ie.clientX,ie.clientY);Q(pe,le)});let Ue=0,Ge=0,$e=0;r.addEventListener("pointerdown",ie=>{if(ie.pointerType!=="touch")return;const pe=performance.now(),le=pe-Ue,Me=ie.clientX-Ge,Ee=ie.clientY-$e;if(le>0&&le<300&&Me*Me+Ee*Ee<40*40){const[_e,xe]=Se(ie.clientX,ie.clientY);Q(_e,xe),Ue=0}else Ue=pe,Ge=ie.clientX,$e=ie.clientY});function Ye(){return M}let We=performance.now(),je=60,Xe=Promise.resolve(),Qe=0;async function Je(){var Ee;const ie=performance.now(),pe=Math.min((ie-We)/1e3,.1);if(We=ie,pe>0){const _e=((Ee=ee.lastStageBreakdownMs)==null?void 0:Ee.total)??0,xe=_e>.5?1e3/_e:1/pe;je=je*.9+xe*.1,ve.stats=`${ze} surfels · ${Math.round(je)} fps`}if(Pe){requestAnimationFrame(Je);return}if(Ye()&&(o||N)&&(o=null,k.resetToCamera(),ne(),N&&(N=!1,j.animate=!1,re.refresh())),N&&j.animateMode==="circle"&&p){_+=pe/x,_>=1&&(_-=1);const _e=lr(p,_);w.set_preset(_e),k.update(pe);const xe=f.createCommandEncoder();ee.frame(xe,l.getCurrentTexture().createView()),f.queue.submit([xe.finish()]),Qe++,Qe===2&&xn(),requestAnimationFrame(Je);return}if(o){o.t+=pe/o.duration;const _e=Math.min(1,o.t),xe=_e*_e*(3-2*_e);L.lerp(o.fromPos,o.toPos,xe,w.position),it.slerp(o.fromQuat,o.toQuat,xe,b),pt.fromQuat(b,y),nt.fromMat3(y,w.rotation),w.update_buffer(),o.t>=1&&(w.set_preset(o.target),o=null,N?he.length>0&&(h=g):(k.resetToCamera(),ne()))}else if(N&&!Ye()){const _e=j.animateMode==="circle"&&a.length>0,xe=_e?a:he;if(xe.length!==0){if(h-=pe,h<=0){const Ie=((_e?d:P)+1)%xe.length;_e?d=Ie:P=Ie;const Ke=_e?q/8:q;m(xe[Ie],Ke),_e||(E.view=`${P+1} / ${he.length}: ${he[P].img_name??P}`)}}}k.update(pe),I(),await Xe;const le=f.createCommandEncoder(),Me=l.getCurrentTexture().createView();ee.frame(le,Me),f.queue.submit([le.finish()]),Xe=f.queue.onSubmittedWorkDone(),Qe++,Qe===2&&xn(),requestAnimationFrame(Je)}requestAnimationFrame(Je)}}(function(){let l="dev";for(const C of Array.from(document.querySelectorAll('script[type="module"]'))){const k=C.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const r=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(r===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];r.features.has("timestamp-query")&&l.push("timestamp-query"),r.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),r.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",r.info??"(unknown)"),console.log("[adapter] features:",Array.from(r.features)),console.log("[adapter] BC7:",r.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",r.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:r.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxTextureDimension2D:r.limits.maxTextureDimension2D});const f=await r.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize}}),C=document.querySelector("#webgpu-canvas");Al(C!==null);const w=C.getContext("webgpu");Vc(C,w,f,l)})();
