var gl=Object.defineProperty;var wl=(r,l,_)=>l in r?gl(r,l,{enumerable:!0,configurable:!0,writable:!0,value:_}):r[l]=_;var H=(r,l,_)=>(wl(r,typeof l!="symbol"?l+"":l,_),_);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))S(w);new MutationObserver(w=>{for(const M of w)if(M.type==="childList")for(const B of M.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&S(B)}).observe(document,{childList:!0,subtree:!0});function _(w){const M={};return w.integrity&&(M.integrity=w.integrity),w.referrerPolicy&&(M.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?M.credentials="include":w.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function S(w){if(w.ep)return;w.ep=!0;const M=_(w);fetch(w.href,M)}})();function xl(r,l){return class extends r{constructor(..._){super(..._),l(this)}}}const yl=xl(Array,r=>r.fill(0));let Le=1e-6;function Pl(r){function l(y=0,C=0){const E=new r(2);return y!==void 0&&(E[0]=y,C!==void 0&&(E[1]=C)),E}const _=l;function S(y,C,E){const i=E??new r(2);return i[0]=y,i[1]=C,i}function w(y,C){const E=C??new r(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function M(y,C){const E=C??new r(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function B(y,C){const E=C??new r(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function N(y,C=0,E=1,i){const m=i??new r(2);return m[0]=Math.min(E,Math.max(C,y[0])),m[1]=Math.min(E,Math.max(C,y[1])),m}function T(y,C,E){const i=E??new r(2);return i[0]=y[0]+C[0],i[1]=y[1]+C[1],i}function A(y,C,E,i){const m=i??new r(2);return m[0]=y[0]+C[0]*E,m[1]=y[1]+C[1]*E,m}function F(y,C){const E=y[0],i=y[1],m=C[0],u=C[1],p=Math.sqrt(E*E+i*i),a=Math.sqrt(m*m+u*u),f=p*a,x=f&&pe(y,C)/f;return Math.acos(x)}function G(y,C,E){const i=E??new r(2);return i[0]=y[0]-C[0],i[1]=y[1]-C[1],i}const Z=G;function z(y,C){return Math.abs(y[0]-C[0])<Le&&Math.abs(y[1]-C[1])<Le}function K(y,C){return y[0]===C[0]&&y[1]===C[1]}function Y(y,C,E,i){const m=i??new r(2);return m[0]=y[0]+E*(C[0]-y[0]),m[1]=y[1]+E*(C[1]-y[1]),m}function q(y,C,E,i){const m=i??new r(2);return m[0]=y[0]+E[0]*(C[0]-y[0]),m[1]=y[1]+E[1]*(C[1]-y[1]),m}function ce(y,C,E){const i=E??new r(2);return i[0]=Math.max(y[0],C[0]),i[1]=Math.max(y[1],C[1]),i}function U(y,C,E){const i=E??new r(2);return i[0]=Math.min(y[0],C[0]),i[1]=Math.min(y[1],C[1]),i}function X(y,C,E){const i=E??new r(2);return i[0]=y[0]*C,i[1]=y[1]*C,i}const j=X;function ae(y,C,E){const i=E??new r(2);return i[0]=y[0]/C,i[1]=y[1]/C,i}function W(y,C){const E=C??new r(2);return E[0]=1/y[0],E[1]=1/y[1],E}const he=W;function ie(y,C,E){const i=E??new r(3),m=y[0]*C[1]-y[1]*C[0];return i[0]=0,i[1]=0,i[2]=m,i}function pe(y,C){return y[0]*C[0]+y[1]*C[1]}function we(y){const C=y[0],E=y[1];return Math.sqrt(C*C+E*E)}const Ue=we;function Me(y){const C=y[0],E=y[1];return C*C+E*E}const Ie=Me;function ze(y,C){const E=y[0]-C[0],i=y[1]-C[1];return Math.sqrt(E*E+i*i)}const oe=ze;function de(y,C){const E=y[0]-C[0],i=y[1]-C[1];return E*E+i*i}const J=de;function ee(y,C){const E=C??new r(2),i=y[0],m=y[1],u=Math.sqrt(i*i+m*m);return u>1e-5?(E[0]=i/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function R(y,C){const E=C??new r(2);return E[0]=-y[0],E[1]=-y[1],E}function Q(y,C){const E=C??new r(2);return E[0]=y[0],E[1]=y[1],E}const me=Q;function be(y,C,E){const i=E??new r(2);return i[0]=y[0]*C[0],i[1]=y[1]*C[1],i}const Se=be;function xe(y,C,E){const i=E??new r(2);return i[0]=y[0]/C[0],i[1]=y[1]/C[1],i}const Ce=xe;function Ve(y=1,C){const E=C??new r(2),i=Math.random()*2*Math.PI;return E[0]=Math.cos(i)*y,E[1]=Math.sin(i)*y,E}function k(y){const C=y??new r(2);return C[0]=0,C[1]=0,C}function V(y,C,E){const i=E??new r(2),m=y[0],u=y[1];return i[0]=m*C[0]+u*C[4]+C[12],i[1]=m*C[1]+u*C[5]+C[13],i}function g(y,C,E){const i=E??new r(2),m=y[0],u=y[1];return i[0]=C[0]*m+C[4]*u+C[8],i[1]=C[1]*m+C[5]*u+C[9],i}function o(y,C,E,i){const m=i??new r(2),u=y[0]-C[0],p=y[1]-C[1],a=Math.sin(E),f=Math.cos(E);return m[0]=u*f-p*a+C[0],m[1]=u*a+p*f+C[1],m}function h(y,C,E){const i=E??new r(2);return ee(y,i),X(i,C,i)}function d(y,C,E){const i=E??new r(2);return we(y)>C?h(y,C,i):Q(y,i)}function b(y,C,E){const i=E??new r(2);return Y(y,C,.5,i)}return{create:l,fromValues:_,set:S,ceil:w,floor:M,round:B,clamp:N,add:T,addScaled:A,angle:F,subtract:G,sub:Z,equalsApproximately:z,equals:K,lerp:Y,lerpV:q,max:ce,min:U,mulScalar:X,scale:j,divScalar:ae,inverse:W,invert:he,cross:ie,dot:pe,length:we,len:Ue,lengthSq:Me,lenSq:Ie,distance:ze,dist:oe,distanceSq:de,distSq:J,normalize:ee,negate:R,copy:Q,clone:me,multiply:be,mul:Se,divide:xe,div:Ce,random:Ve,zero:k,transformMat4:V,transformMat3:g,rotate:o,setLength:h,truncate:d,midpoint:b}}const Gi=new Map;function er(r){let l=Gi.get(r);return l||(l=Pl(r),Gi.set(r,l)),l}function Sl(r){function l(a,f,x){const v=new r(3);return a!==void 0&&(v[0]=a,f!==void 0&&(v[1]=f,x!==void 0&&(v[2]=x))),v}const _=l;function S(a,f,x,v){const L=v??new r(3);return L[0]=a,L[1]=f,L[2]=x,L}function w(a,f){const x=f??new r(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function M(a,f){const x=f??new r(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function B(a,f){const x=f??new r(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function N(a,f=0,x=1,v){const L=v??new r(3);return L[0]=Math.min(x,Math.max(f,a[0])),L[1]=Math.min(x,Math.max(f,a[1])),L[2]=Math.min(x,Math.max(f,a[2])),L}function T(a,f,x){const v=x??new r(3);return v[0]=a[0]+f[0],v[1]=a[1]+f[1],v[2]=a[2]+f[2],v}function A(a,f,x,v){const L=v??new r(3);return L[0]=a[0]+f[0]*x,L[1]=a[1]+f[1]*x,L[2]=a[2]+f[2]*x,L}function F(a,f){const x=a[0],v=a[1],L=a[2],O=f[0],$=f[1],le=f[2],ne=Math.sqrt(x*x+v*v+L*L),se=Math.sqrt(O*O+$*$+le*le),ve=ne*se,ye=ve&&pe(a,f)/ve;return Math.acos(ye)}function G(a,f,x){const v=x??new r(3);return v[0]=a[0]-f[0],v[1]=a[1]-f[1],v[2]=a[2]-f[2],v}const Z=G;function z(a,f){return Math.abs(a[0]-f[0])<Le&&Math.abs(a[1]-f[1])<Le&&Math.abs(a[2]-f[2])<Le}function K(a,f){return a[0]===f[0]&&a[1]===f[1]&&a[2]===f[2]}function Y(a,f,x,v){const L=v??new r(3);return L[0]=a[0]+x*(f[0]-a[0]),L[1]=a[1]+x*(f[1]-a[1]),L[2]=a[2]+x*(f[2]-a[2]),L}function q(a,f,x,v){const L=v??new r(3);return L[0]=a[0]+x[0]*(f[0]-a[0]),L[1]=a[1]+x[1]*(f[1]-a[1]),L[2]=a[2]+x[2]*(f[2]-a[2]),L}function ce(a,f,x){const v=x??new r(3);return v[0]=Math.max(a[0],f[0]),v[1]=Math.max(a[1],f[1]),v[2]=Math.max(a[2],f[2]),v}function U(a,f,x){const v=x??new r(3);return v[0]=Math.min(a[0],f[0]),v[1]=Math.min(a[1],f[1]),v[2]=Math.min(a[2],f[2]),v}function X(a,f,x){const v=x??new r(3);return v[0]=a[0]*f,v[1]=a[1]*f,v[2]=a[2]*f,v}const j=X;function ae(a,f,x){const v=x??new r(3);return v[0]=a[0]/f,v[1]=a[1]/f,v[2]=a[2]/f,v}function W(a,f){const x=f??new r(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const he=W;function ie(a,f,x){const v=x??new r(3),L=a[2]*f[0]-a[0]*f[2],O=a[0]*f[1]-a[1]*f[0];return v[0]=a[1]*f[2]-a[2]*f[1],v[1]=L,v[2]=O,v}function pe(a,f){return a[0]*f[0]+a[1]*f[1]+a[2]*f[2]}function we(a){const f=a[0],x=a[1],v=a[2];return Math.sqrt(f*f+x*x+v*v)}const Ue=we;function Me(a){const f=a[0],x=a[1],v=a[2];return f*f+x*x+v*v}const Ie=Me;function ze(a,f){const x=a[0]-f[0],v=a[1]-f[1],L=a[2]-f[2];return Math.sqrt(x*x+v*v+L*L)}const oe=ze;function de(a,f){const x=a[0]-f[0],v=a[1]-f[1],L=a[2]-f[2];return x*x+v*v+L*L}const J=de;function ee(a,f){const x=f??new r(3),v=a[0],L=a[1],O=a[2],$=Math.sqrt(v*v+L*L+O*O);return $>1e-5?(x[0]=v/$,x[1]=L/$,x[2]=O/$):(x[0]=0,x[1]=0,x[2]=0),x}function R(a,f){const x=f??new r(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function Q(a,f){const x=f??new r(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const me=Q;function be(a,f,x){const v=x??new r(3);return v[0]=a[0]*f[0],v[1]=a[1]*f[1],v[2]=a[2]*f[2],v}const Se=be;function xe(a,f,x){const v=x??new r(3);return v[0]=a[0]/f[0],v[1]=a[1]/f[1],v[2]=a[2]/f[2],v}const Ce=xe;function Ve(a=1,f){const x=f??new r(3),v=Math.random()*2*Math.PI,L=Math.random()*2-1,O=Math.sqrt(1-L*L)*a;return x[0]=Math.cos(v)*O,x[1]=Math.sin(v)*O,x[2]=L*a,x}function k(a){const f=a??new r(3);return f[0]=0,f[1]=0,f[2]=0,f}function V(a,f,x){const v=x??new r(3),L=a[0],O=a[1],$=a[2],le=f[3]*L+f[7]*O+f[11]*$+f[15]||1;return v[0]=(f[0]*L+f[4]*O+f[8]*$+f[12])/le,v[1]=(f[1]*L+f[5]*O+f[9]*$+f[13])/le,v[2]=(f[2]*L+f[6]*O+f[10]*$+f[14])/le,v}function g(a,f,x){const v=x??new r(3),L=a[0],O=a[1],$=a[2];return v[0]=L*f[0*4+0]+O*f[1*4+0]+$*f[2*4+0],v[1]=L*f[0*4+1]+O*f[1*4+1]+$*f[2*4+1],v[2]=L*f[0*4+2]+O*f[1*4+2]+$*f[2*4+2],v}function o(a,f,x){const v=x??new r(3),L=a[0],O=a[1],$=a[2];return v[0]=L*f[0]+O*f[4]+$*f[8],v[1]=L*f[1]+O*f[5]+$*f[9],v[2]=L*f[2]+O*f[6]+$*f[10],v}function h(a,f,x){const v=x??new r(3),L=f[0],O=f[1],$=f[2],le=f[3]*2,ne=a[0],se=a[1],ve=a[2],ye=O*ve-$*se,_e=$*ne-L*ve,ge=L*se-O*ne;return v[0]=ne+ye*le+(O*ge-$*_e)*2,v[1]=se+_e*le+($*ye-L*ge)*2,v[2]=ve+ge*le+(L*_e-O*ye)*2,v}function d(a,f){const x=f??new r(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function b(a,f,x){const v=x??new r(3),L=f*4;return v[0]=a[L+0],v[1]=a[L+1],v[2]=a[L+2],v}function y(a,f){const x=f??new r(3),v=a[0],L=a[1],O=a[2],$=a[4],le=a[5],ne=a[6],se=a[8],ve=a[9],ye=a[10];return x[0]=Math.sqrt(v*v+L*L+O*O),x[1]=Math.sqrt($*$+le*le+ne*ne),x[2]=Math.sqrt(se*se+ve*ve+ye*ye),x}function C(a,f,x,v){const L=v??new r(3),O=[],$=[];return O[0]=a[0]-f[0],O[1]=a[1]-f[1],O[2]=a[2]-f[2],$[0]=O[0],$[1]=O[1]*Math.cos(x)-O[2]*Math.sin(x),$[2]=O[1]*Math.sin(x)+O[2]*Math.cos(x),L[0]=$[0]+f[0],L[1]=$[1]+f[1],L[2]=$[2]+f[2],L}function E(a,f,x,v){const L=v??new r(3),O=[],$=[];return O[0]=a[0]-f[0],O[1]=a[1]-f[1],O[2]=a[2]-f[2],$[0]=O[2]*Math.sin(x)+O[0]*Math.cos(x),$[1]=O[1],$[2]=O[2]*Math.cos(x)-O[0]*Math.sin(x),L[0]=$[0]+f[0],L[1]=$[1]+f[1],L[2]=$[2]+f[2],L}function i(a,f,x,v){const L=v??new r(3),O=[],$=[];return O[0]=a[0]-f[0],O[1]=a[1]-f[1],O[2]=a[2]-f[2],$[0]=O[0]*Math.cos(x)-O[1]*Math.sin(x),$[1]=O[0]*Math.sin(x)+O[1]*Math.cos(x),$[2]=O[2],L[0]=$[0]+f[0],L[1]=$[1]+f[1],L[2]=$[2]+f[2],L}function m(a,f,x){const v=x??new r(3);return ee(a,v),X(v,f,v)}function u(a,f,x){const v=x??new r(3);return we(a)>f?m(a,f,v):Q(a,v)}function p(a,f,x){const v=x??new r(3);return Y(a,f,.5,v)}return{create:l,fromValues:_,set:S,ceil:w,floor:M,round:B,clamp:N,add:T,addScaled:A,angle:F,subtract:G,sub:Z,equalsApproximately:z,equals:K,lerp:Y,lerpV:q,max:ce,min:U,mulScalar:X,scale:j,divScalar:ae,inverse:W,invert:he,cross:ie,dot:pe,length:we,len:Ue,lengthSq:Me,lenSq:Ie,distance:ze,dist:oe,distanceSq:de,distSq:J,normalize:ee,negate:R,copy:Q,clone:me,multiply:be,mul:Se,divide:xe,div:Ce,random:Ve,zero:k,transformMat4:V,transformMat4Upper3x3:g,transformMat3:o,transformQuat:h,getTranslation:d,getAxis:b,getScaling:y,rotateX:C,rotateY:E,rotateZ:i,setLength:m,truncate:u,midpoint:p}}const Ri=new Map;function Hn(r){let l=Ri.get(r);return l||(l=Sl(r),Ri.set(r,l)),l}function Cl(r){const l=er(r),_=Hn(r);function S(o,h,d,b,y,C,E,i,m){const u=new r(12);return u[3]=0,u[7]=0,u[11]=0,o!==void 0&&(u[0]=o,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,b!==void 0&&(u[4]=b,y!==void 0&&(u[5]=y,C!==void 0&&(u[6]=C,E!==void 0&&(u[8]=E,i!==void 0&&(u[9]=i,m!==void 0&&(u[10]=m))))))))),u}function w(o,h,d,b,y,C,E,i,m,u){const p=u??new r(12);return p[0]=o,p[1]=h,p[2]=d,p[3]=0,p[4]=b,p[5]=y,p[6]=C,p[7]=0,p[8]=E,p[9]=i,p[10]=m,p[11]=0,p}function M(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[3]=0,d[4]=o[4],d[5]=o[5],d[6]=o[6],d[7]=0,d[8]=o[8],d[9]=o[9],d[10]=o[10],d[11]=0,d}function B(o,h){const d=h??new r(12),b=o[0],y=o[1],C=o[2],E=o[3],i=b+b,m=y+y,u=C+C,p=b*i,a=y*i,f=y*m,x=C*i,v=C*m,L=C*u,O=E*i,$=E*m,le=E*u;return d[0]=1-f-L,d[1]=a+le,d[2]=x-$,d[3]=0,d[4]=a-le,d[5]=1-p-L,d[6]=v+O,d[7]=0,d[8]=x+$,d[9]=v-O,d[10]=1-p-f,d[11]=0,d}function N(o,h){const d=h??new r(12);return d[0]=-o[0],d[1]=-o[1],d[2]=-o[2],d[4]=-o[4],d[5]=-o[5],d[6]=-o[6],d[8]=-o[8],d[9]=-o[9],d[10]=-o[10],d}function T(o,h,d){const b=d??new r(12);return b[0]=o[0]*h,b[1]=o[1]*h,b[2]=o[2]*h,b[4]=o[4]*h,b[5]=o[5]*h,b[6]=o[6]*h,b[8]=o[8]*h,b[9]=o[9]*h,b[10]=o[10]*h,b}const A=T;function F(o,h,d){const b=d??new r(12);return b[0]=o[0]+h[0],b[1]=o[1]+h[1],b[2]=o[2]+h[2],b[4]=o[4]+h[4],b[5]=o[5]+h[5],b[6]=o[6]+h[6],b[8]=o[8]+h[8],b[9]=o[9]+h[9],b[10]=o[10]+h[10],b}function G(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[4]=o[4],d[5]=o[5],d[6]=o[6],d[8]=o[8],d[9]=o[9],d[10]=o[10],d}const Z=G;function z(o,h){return Math.abs(o[0]-h[0])<Le&&Math.abs(o[1]-h[1])<Le&&Math.abs(o[2]-h[2])<Le&&Math.abs(o[4]-h[4])<Le&&Math.abs(o[5]-h[5])<Le&&Math.abs(o[6]-h[6])<Le&&Math.abs(o[8]-h[8])<Le&&Math.abs(o[9]-h[9])<Le&&Math.abs(o[10]-h[10])<Le}function K(o,h){return o[0]===h[0]&&o[1]===h[1]&&o[2]===h[2]&&o[4]===h[4]&&o[5]===h[5]&&o[6]===h[6]&&o[8]===h[8]&&o[9]===h[9]&&o[10]===h[10]}function Y(o){const h=o??new r(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function q(o,h){const d=h??new r(12);if(d===o){let f;return f=o[1],o[1]=o[4],o[4]=f,f=o[2],o[2]=o[8],o[8]=f,f=o[6],o[6]=o[9],o[9]=f,d}const b=o[0*4+0],y=o[0*4+1],C=o[0*4+2],E=o[1*4+0],i=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2];return d[0]=b,d[1]=E,d[2]=u,d[4]=y,d[5]=i,d[6]=p,d[8]=C,d[9]=m,d[10]=a,d}function ce(o,h){const d=h??new r(12),b=o[0*4+0],y=o[0*4+1],C=o[0*4+2],E=o[1*4+0],i=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2],f=a*i-m*p,x=-a*E+m*u,v=p*E-i*u,L=1/(b*f+y*x+C*v);return d[0]=f*L,d[1]=(-a*y+C*p)*L,d[2]=(m*y-C*i)*L,d[4]=x*L,d[5]=(a*b-C*u)*L,d[6]=(-m*b+C*E)*L,d[8]=v*L,d[9]=(-p*b+y*u)*L,d[10]=(i*b-y*E)*L,d}function U(o){const h=o[0],d=o[0*4+1],b=o[0*4+2],y=o[1*4+0],C=o[1*4+1],E=o[1*4+2],i=o[2*4+0],m=o[2*4+1],u=o[2*4+2];return h*(C*u-m*E)-y*(d*u-m*b)+i*(d*E-C*b)}const X=ce;function j(o,h,d){const b=d??new r(12),y=o[0],C=o[1],E=o[2],i=o[4+0],m=o[4+1],u=o[4+2],p=o[8+0],a=o[8+1],f=o[8+2],x=h[0],v=h[1],L=h[2],O=h[4+0],$=h[4+1],le=h[4+2],ne=h[8+0],se=h[8+1],ve=h[8+2];return b[0]=y*x+i*v+p*L,b[1]=C*x+m*v+a*L,b[2]=E*x+u*v+f*L,b[4]=y*O+i*$+p*le,b[5]=C*O+m*$+a*le,b[6]=E*O+u*$+f*le,b[8]=y*ne+i*se+p*ve,b[9]=C*ne+m*se+a*ve,b[10]=E*ne+u*se+f*ve,b}const ae=j;function W(o,h,d){const b=d??Y();return o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[4]=o[4],b[5]=o[5],b[6]=o[6]),b[8]=h[0],b[9]=h[1],b[10]=1,b}function he(o,h){const d=h??l.create();return d[0]=o[8],d[1]=o[9],d}function ie(o,h,d){const b=d??l.create(),y=h*4;return b[0]=o[y+0],b[1]=o[y+1],b}function pe(o,h,d,b){const y=b===o?o:G(o,b),C=d*4;return y[C+0]=h[0],y[C+1]=h[1],y}function we(o,h){const d=h??l.create(),b=o[0],y=o[1],C=o[4],E=o[5];return d[0]=Math.sqrt(b*b+y*y),d[1]=Math.sqrt(C*C+E*E),d}function Ue(o,h){const d=h??_.create(),b=o[0],y=o[1],C=o[2],E=o[4],i=o[5],m=o[6],u=o[8],p=o[9],a=o[10];return d[0]=Math.sqrt(b*b+y*y+C*C),d[1]=Math.sqrt(E*E+i*i+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Me(o,h){const d=h??new r(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=o[0],d[9]=o[1],d[10]=1,d}function Ie(o,h,d){const b=d??new r(12),y=h[0],C=h[1],E=o[0],i=o[1],m=o[2],u=o[1*4+0],p=o[1*4+1],a=o[1*4+2],f=o[2*4+0],x=o[2*4+1],v=o[2*4+2];return o!==b&&(b[0]=E,b[1]=i,b[2]=m,b[4]=u,b[5]=p,b[6]=a),b[8]=E*y+u*C+f,b[9]=i*y+p*C+x,b[10]=m*y+a*C+v,b}function ze(o,h){const d=h??new r(12),b=Math.cos(o),y=Math.sin(o);return d[0]=b,d[1]=y,d[2]=0,d[4]=-y,d[5]=b,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function oe(o,h,d){const b=d??new r(12),y=o[0*4+0],C=o[0*4+1],E=o[0*4+2],i=o[1*4+0],m=o[1*4+1],u=o[1*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y+a*i,b[1]=p*C+a*m,b[2]=p*E+a*u,b[4]=p*i-a*y,b[5]=p*m-a*C,b[6]=p*u-a*E,o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function de(o,h){const d=h??new r(12),b=Math.cos(o),y=Math.sin(o);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=b,d[6]=y,d[8]=0,d[9]=-y,d[10]=b,d}function J(o,h,d){const b=d??new r(12),y=o[4],C=o[5],E=o[6],i=o[8],m=o[9],u=o[10],p=Math.cos(h),a=Math.sin(h);return b[4]=p*y+a*i,b[5]=p*C+a*m,b[6]=p*E+a*u,b[8]=p*i-a*y,b[9]=p*m-a*C,b[10]=p*u-a*E,o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2]),b}function ee(o,h){const d=h??new r(12),b=Math.cos(o),y=Math.sin(o);return d[0]=b,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=b,d}function R(o,h,d){const b=d??new r(12),y=o[0*4+0],C=o[0*4+1],E=o[0*4+2],i=o[2*4+0],m=o[2*4+1],u=o[2*4+2],p=Math.cos(h),a=Math.sin(h);return b[0]=p*y-a*i,b[1]=p*C-a*m,b[2]=p*E-a*u,b[8]=p*i+a*y,b[9]=p*m+a*C,b[10]=p*u+a*E,o!==b&&(b[4]=o[4],b[5]=o[5],b[6]=o[6]),b}const Q=ze,me=oe;function be(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Se(o,h,d){const b=d??new r(12),y=h[0],C=h[1];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=C*o[1*4+0],b[5]=C*o[1*4+1],b[6]=C*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function xe(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=o[2],d}function Ce(o,h,d){const b=d??new r(12),y=h[0],C=h[1],E=h[2];return b[0]=y*o[0*4+0],b[1]=y*o[0*4+1],b[2]=y*o[0*4+2],b[4]=C*o[1*4+0],b[5]=C*o[1*4+1],b[6]=C*o[1*4+2],b[8]=E*o[2*4+0],b[9]=E*o[2*4+1],b[10]=E*o[2*4+2],b}function Ve(o,h){const d=h??new r(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function k(o,h,d){const b=d??new r(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10]),b}function V(o,h){const d=h??new r(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=o,d}function g(o,h,d){const b=d??new r(12);return b[0]=h*o[0*4+0],b[1]=h*o[0*4+1],b[2]=h*o[0*4+2],b[4]=h*o[1*4+0],b[5]=h*o[1*4+1],b[6]=h*o[1*4+2],b[8]=h*o[2*4+0],b[9]=h*o[2*4+1],b[10]=h*o[2*4+2],b}return{add:F,clone:Z,copy:G,create:S,determinant:U,equals:K,equalsApproximately:z,fromMat4:M,fromQuat:B,get3DScaling:Ue,getAxis:ie,getScaling:we,getTranslation:he,identity:Y,inverse:ce,invert:X,mul:ae,mulScalar:A,multiply:j,multiplyScalar:T,negate:N,rotate:oe,rotateX:J,rotateY:R,rotateZ:me,rotation:ze,rotationX:de,rotationY:ee,rotationZ:Q,scale:Se,scale3D:Ce,scaling:be,scaling3D:xe,set:w,setAxis:pe,setTranslation:W,translate:Ie,translation:Me,transpose:q,uniformScale:k,uniformScale3D:g,uniformScaling:Ve,uniformScaling3D:V}}const Vi=new Map;function El(r){let l=Vi.get(r);return l||(l=Cl(r),Vi.set(r,l)),l}function kl(r){const l=Hn(r);function _(i,m,u,p,a,f,x,v,L,O,$,le,ne,se,ve,ye){const _e=new r(16);return i!==void 0&&(_e[0]=i,m!==void 0&&(_e[1]=m,u!==void 0&&(_e[2]=u,p!==void 0&&(_e[3]=p,a!==void 0&&(_e[4]=a,f!==void 0&&(_e[5]=f,x!==void 0&&(_e[6]=x,v!==void 0&&(_e[7]=v,L!==void 0&&(_e[8]=L,O!==void 0&&(_e[9]=O,$!==void 0&&(_e[10]=$,le!==void 0&&(_e[11]=le,ne!==void 0&&(_e[12]=ne,se!==void 0&&(_e[13]=se,ve!==void 0&&(_e[14]=ve,ye!==void 0&&(_e[15]=ye)))))))))))))))),_e}function S(i,m,u,p,a,f,x,v,L,O,$,le,ne,se,ve,ye,_e){const ge=_e??new r(16);return ge[0]=i,ge[1]=m,ge[2]=u,ge[3]=p,ge[4]=a,ge[5]=f,ge[6]=x,ge[7]=v,ge[8]=L,ge[9]=O,ge[10]=$,ge[11]=le,ge[12]=ne,ge[13]=se,ge[14]=ve,ge[15]=ye,ge}function w(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(i,m){const u=m??new r(16),p=i[0],a=i[1],f=i[2],x=i[3],v=p+p,L=a+a,O=f+f,$=p*v,le=a*v,ne=a*L,se=f*v,ve=f*L,ye=f*O,_e=x*v,ge=x*L,Te=x*O;return u[0]=1-ne-ye,u[1]=le+Te,u[2]=se-ge,u[3]=0,u[4]=le-Te,u[5]=1-$-ye,u[6]=ve+_e,u[7]=0,u[8]=se+ge,u[9]=ve-_e,u[10]=1-$-ne,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function B(i,m){const u=m??new r(16);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[3]=-i[3],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[7]=-i[7],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u[11]=-i[11],u[12]=-i[12],u[13]=-i[13],u[14]=-i[14],u[15]=-i[15],u}function N(i,m,u){const p=u??new r(16);return p[0]=i[0]+m[0],p[1]=i[1]+m[1],p[2]=i[2]+m[2],p[3]=i[3]+m[3],p[4]=i[4]+m[4],p[5]=i[5]+m[5],p[6]=i[6]+m[6],p[7]=i[7]+m[7],p[8]=i[8]+m[8],p[9]=i[9]+m[9],p[10]=i[10]+m[10],p[11]=i[11]+m[11],p[12]=i[12]+m[12],p[13]=i[13]+m[13],p[14]=i[14]+m[14],p[15]=i[15]+m[15],p}function T(i,m,u){const p=u??new r(16);return p[0]=i[0]*m,p[1]=i[1]*m,p[2]=i[2]*m,p[3]=i[3]*m,p[4]=i[4]*m,p[5]=i[5]*m,p[6]=i[6]*m,p[7]=i[7]*m,p[8]=i[8]*m,p[9]=i[9]*m,p[10]=i[10]*m,p[11]=i[11]*m,p[12]=i[12]*m,p[13]=i[13]*m,p[14]=i[14]*m,p[15]=i[15]*m,p}const A=T;function F(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=i[3],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=i[7],u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=i[11],u[12]=i[12],u[13]=i[13],u[14]=i[14],u[15]=i[15],u}const G=F;function Z(i,m){return Math.abs(i[0]-m[0])<Le&&Math.abs(i[1]-m[1])<Le&&Math.abs(i[2]-m[2])<Le&&Math.abs(i[3]-m[3])<Le&&Math.abs(i[4]-m[4])<Le&&Math.abs(i[5]-m[5])<Le&&Math.abs(i[6]-m[6])<Le&&Math.abs(i[7]-m[7])<Le&&Math.abs(i[8]-m[8])<Le&&Math.abs(i[9]-m[9])<Le&&Math.abs(i[10]-m[10])<Le&&Math.abs(i[11]-m[11])<Le&&Math.abs(i[12]-m[12])<Le&&Math.abs(i[13]-m[13])<Le&&Math.abs(i[14]-m[14])<Le&&Math.abs(i[15]-m[15])<Le}function z(i,m){return i[0]===m[0]&&i[1]===m[1]&&i[2]===m[2]&&i[3]===m[3]&&i[4]===m[4]&&i[5]===m[5]&&i[6]===m[6]&&i[7]===m[7]&&i[8]===m[8]&&i[9]===m[9]&&i[10]===m[10]&&i[11]===m[11]&&i[12]===m[12]&&i[13]===m[13]&&i[14]===m[14]&&i[15]===m[15]}function K(i){const m=i??new r(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Y(i,m){const u=m??new r(16);if(u===i){let Be;return Be=i[1],i[1]=i[4],i[4]=Be,Be=i[2],i[2]=i[8],i[8]=Be,Be=i[3],i[3]=i[12],i[12]=Be,Be=i[6],i[6]=i[9],i[9]=Be,Be=i[7],i[7]=i[13],i[13]=Be,Be=i[11],i[11]=i[14],i[14]=Be,u}const p=i[0*4+0],a=i[0*4+1],f=i[0*4+2],x=i[0*4+3],v=i[1*4+0],L=i[1*4+1],O=i[1*4+2],$=i[1*4+3],le=i[2*4+0],ne=i[2*4+1],se=i[2*4+2],ve=i[2*4+3],ye=i[3*4+0],_e=i[3*4+1],ge=i[3*4+2],Te=i[3*4+3];return u[0]=p,u[1]=v,u[2]=le,u[3]=ye,u[4]=a,u[5]=L,u[6]=ne,u[7]=_e,u[8]=f,u[9]=O,u[10]=se,u[11]=ge,u[12]=x,u[13]=$,u[14]=ve,u[15]=Te,u}function q(i,m){const u=m??new r(16),p=i[0*4+0],a=i[0*4+1],f=i[0*4+2],x=i[0*4+3],v=i[1*4+0],L=i[1*4+1],O=i[1*4+2],$=i[1*4+3],le=i[2*4+0],ne=i[2*4+1],se=i[2*4+2],ve=i[2*4+3],ye=i[3*4+0],_e=i[3*4+1],ge=i[3*4+2],Te=i[3*4+3],Be=se*Te,$e=ge*ve,Ye=O*Te,Ze=ge*$,je=O*ve,Je=se*$,ot=f*Te,at=ge*x,rt=f*ve,et=se*x,tt=f*$,nt=O*x,We=le*_e,st=ye*ne,He=v*_e,ut=ye*L,Xe=v*ne,vt=le*L,re=p*_e,fe=ye*a,ue=p*ne,De=le*a,Re=p*L,Ee=v*a,Ae=Be*L+Ze*ne+je*_e-($e*L+Ye*ne+Je*_e),Oe=$e*a+ot*ne+et*_e-(Be*a+at*ne+rt*_e),Ke=Ye*a+at*L+tt*_e-(Ze*a+ot*L+nt*_e),it=Je*a+rt*L+nt*ne-(je*a+et*L+tt*ne),Fe=1/(p*Ae+v*Oe+le*Ke+ye*it);return u[0]=Fe*Ae,u[1]=Fe*Oe,u[2]=Fe*Ke,u[3]=Fe*it,u[4]=Fe*($e*v+Ye*le+Je*ye-(Be*v+Ze*le+je*ye)),u[5]=Fe*(Be*p+at*le+rt*ye-($e*p+ot*le+et*ye)),u[6]=Fe*(Ze*p+ot*v+nt*ye-(Ye*p+at*v+tt*ye)),u[7]=Fe*(je*p+et*v+tt*le-(Je*p+rt*v+nt*le)),u[8]=Fe*(We*$+ut*ve+Xe*Te-(st*$+He*ve+vt*Te)),u[9]=Fe*(st*x+re*ve+De*Te-(We*x+fe*ve+ue*Te)),u[10]=Fe*(He*x+fe*$+Re*Te-(ut*x+re*$+Ee*Te)),u[11]=Fe*(vt*x+ue*$+Ee*ve-(Xe*x+De*$+Re*ve)),u[12]=Fe*(He*se+vt*ge+st*O-(Xe*ge+We*O+ut*se)),u[13]=Fe*(ue*ge+We*f+fe*se-(re*se+De*ge+st*f)),u[14]=Fe*(re*O+Ee*ge+ut*f-(Re*ge+He*f+fe*O)),u[15]=Fe*(Re*se+Xe*f+De*O-(ue*O+Ee*se+vt*f)),u}function ce(i){const m=i[0],u=i[0*4+1],p=i[0*4+2],a=i[0*4+3],f=i[1*4+0],x=i[1*4+1],v=i[1*4+2],L=i[1*4+3],O=i[2*4+0],$=i[2*4+1],le=i[2*4+2],ne=i[2*4+3],se=i[3*4+0],ve=i[3*4+1],ye=i[3*4+2],_e=i[3*4+3],ge=le*_e,Te=ye*ne,Be=v*_e,$e=ye*L,Ye=v*ne,Ze=le*L,je=p*_e,Je=ye*a,ot=p*ne,at=le*a,rt=p*L,et=v*a,tt=ge*x+$e*$+Ye*ve-(Te*x+Be*$+Ze*ve),nt=Te*u+je*$+at*ve-(ge*u+Je*$+ot*ve),We=Be*u+Je*x+rt*ve-($e*u+je*x+et*ve),st=Ze*u+ot*x+et*$-(Ye*u+at*x+rt*$);return m*tt+f*nt+O*We+se*st}const U=q;function X(i,m,u){const p=u??new r(16),a=i[0],f=i[1],x=i[2],v=i[3],L=i[4+0],O=i[4+1],$=i[4+2],le=i[4+3],ne=i[8+0],se=i[8+1],ve=i[8+2],ye=i[8+3],_e=i[12+0],ge=i[12+1],Te=i[12+2],Be=i[12+3],$e=m[0],Ye=m[1],Ze=m[2],je=m[3],Je=m[4+0],ot=m[4+1],at=m[4+2],rt=m[4+3],et=m[8+0],tt=m[8+1],nt=m[8+2],We=m[8+3],st=m[12+0],He=m[12+1],ut=m[12+2],Xe=m[12+3];return p[0]=a*$e+L*Ye+ne*Ze+_e*je,p[1]=f*$e+O*Ye+se*Ze+ge*je,p[2]=x*$e+$*Ye+ve*Ze+Te*je,p[3]=v*$e+le*Ye+ye*Ze+Be*je,p[4]=a*Je+L*ot+ne*at+_e*rt,p[5]=f*Je+O*ot+se*at+ge*rt,p[6]=x*Je+$*ot+ve*at+Te*rt,p[7]=v*Je+le*ot+ye*at+Be*rt,p[8]=a*et+L*tt+ne*nt+_e*We,p[9]=f*et+O*tt+se*nt+ge*We,p[10]=x*et+$*tt+ve*nt+Te*We,p[11]=v*et+le*tt+ye*nt+Be*We,p[12]=a*st+L*He+ne*ut+_e*Xe,p[13]=f*st+O*He+se*ut+ge*Xe,p[14]=x*st+$*He+ve*ut+Te*Xe,p[15]=v*st+le*He+ye*ut+Be*Xe,p}const j=X;function ae(i,m,u){const p=u??K();return i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function W(i,m){const u=m??l.create();return u[0]=i[12],u[1]=i[13],u[2]=i[14],u}function he(i,m,u){const p=u??l.create(),a=m*4;return p[0]=i[a+0],p[1]=i[a+1],p[2]=i[a+2],p}function ie(i,m,u,p){const a=p===i?p:F(i,p),f=u*4;return a[f+0]=m[0],a[f+1]=m[1],a[f+2]=m[2],a}function pe(i,m){const u=m??l.create(),p=i[0],a=i[1],f=i[2],x=i[4],v=i[5],L=i[6],O=i[8],$=i[9],le=i[10];return u[0]=Math.sqrt(p*p+a*a+f*f),u[1]=Math.sqrt(x*x+v*v+L*L),u[2]=Math.sqrt(O*O+$*$+le*le),u}function we(i,m,u,p,a){const f=a??new r(16),x=Math.tan(Math.PI*.5-.5*i);if(f[0]=x/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=x,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,Number.isFinite(p)){const v=1/(u-p);f[10]=p*v,f[14]=p*u*v}else f[10]=-1,f[14]=-u;return f}function Ue(i,m,u,p=1/0,a){const f=a??new r(16),x=1/Math.tan(i*.5);if(f[0]=x/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=x,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,p===1/0)f[10]=0,f[14]=u;else{const v=1/(p-u);f[10]=u*v,f[14]=p*u*v}return f}function Me(i,m,u,p,a,f,x){const v=x??new r(16);return v[0]=2/(m-i),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(p-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(a-f),v[11]=0,v[12]=(m+i)/(i-m),v[13]=(p+u)/(u-p),v[14]=a/(a-f),v[15]=1,v}function Ie(i,m,u,p,a,f,x){const v=x??new r(16),L=m-i,O=p-u,$=a-f;return v[0]=2*a/L,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/O,v[6]=0,v[7]=0,v[8]=(i+m)/L,v[9]=(p+u)/O,v[10]=f/$,v[11]=-1,v[12]=0,v[13]=0,v[14]=a*f/$,v[15]=0,v}function ze(i,m,u,p,a,f=1/0,x){const v=x??new r(16),L=m-i,O=p-u;if(v[0]=2*a/L,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*a/O,v[6]=0,v[7]=0,v[8]=(i+m)/L,v[9]=(p+u)/O,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,f===1/0)v[10]=0,v[14]=a;else{const $=1/(f-a);v[10]=a*$,v[14]=f*a*$}return v}const oe=l.create(),de=l.create(),J=l.create();function ee(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(m,i,J),J),l.normalize(l.cross(u,J,oe),oe),l.normalize(l.cross(J,oe,de),de),a[0]=oe[0],a[1]=oe[1],a[2]=oe[2],a[3]=0,a[4]=de[0],a[5]=de[1],a[6]=de[2],a[7]=0,a[8]=J[0],a[9]=J[1],a[10]=J[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function R(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(i,m,J),J),l.normalize(l.cross(u,J,oe),oe),l.normalize(l.cross(J,oe,de),de),a[0]=oe[0],a[1]=oe[1],a[2]=oe[2],a[3]=0,a[4]=de[0],a[5]=de[1],a[6]=de[2],a[7]=0,a[8]=J[0],a[9]=J[1],a[10]=J[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function Q(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(i,m,J),J),l.normalize(l.cross(u,J,oe),oe),l.normalize(l.cross(J,oe,de),de),a[0]=oe[0],a[1]=de[0],a[2]=J[0],a[3]=0,a[4]=oe[1],a[5]=de[1],a[6]=J[1],a[7]=0,a[8]=oe[2],a[9]=de[2],a[10]=J[2],a[11]=0,a[12]=-(oe[0]*i[0]+oe[1]*i[1]+oe[2]*i[2]),a[13]=-(de[0]*i[0]+de[1]*i[1]+de[2]*i[2]),a[14]=-(J[0]*i[0]+J[1]*i[1]+J[2]*i[2]),a[15]=1,a}function me(i,m){const u=m??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=i[0],u[13]=i[1],u[14]=i[2],u[15]=1,u}function be(i,m,u){const p=u??new r(16),a=m[0],f=m[1],x=m[2],v=i[0],L=i[1],O=i[2],$=i[3],le=i[1*4+0],ne=i[1*4+1],se=i[1*4+2],ve=i[1*4+3],ye=i[2*4+0],_e=i[2*4+1],ge=i[2*4+2],Te=i[2*4+3],Be=i[3*4+0],$e=i[3*4+1],Ye=i[3*4+2],Ze=i[3*4+3];return i!==p&&(p[0]=v,p[1]=L,p[2]=O,p[3]=$,p[4]=le,p[5]=ne,p[6]=se,p[7]=ve,p[8]=ye,p[9]=_e,p[10]=ge,p[11]=Te),p[12]=v*a+le*f+ye*x+Be,p[13]=L*a+ne*f+_e*x+$e,p[14]=O*a+se*f+ge*x+Ye,p[15]=$*a+ve*f+Te*x+Ze,p}function Se(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function xe(i,m,u){const p=u??new r(16),a=i[4],f=i[5],x=i[6],v=i[7],L=i[8],O=i[9],$=i[10],le=i[11],ne=Math.cos(m),se=Math.sin(m);return p[4]=ne*a+se*L,p[5]=ne*f+se*O,p[6]=ne*x+se*$,p[7]=ne*v+se*le,p[8]=ne*L-se*a,p[9]=ne*O-se*f,p[10]=ne*$-se*x,p[11]=ne*le-se*v,i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function Ce(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Ve(i,m,u){const p=u??new r(16),a=i[0*4+0],f=i[0*4+1],x=i[0*4+2],v=i[0*4+3],L=i[2*4+0],O=i[2*4+1],$=i[2*4+2],le=i[2*4+3],ne=Math.cos(m),se=Math.sin(m);return p[0]=ne*a-se*L,p[1]=ne*f-se*O,p[2]=ne*x-se*$,p[3]=ne*v-se*le,p[8]=ne*L+se*a,p[9]=ne*O+se*f,p[10]=ne*$+se*x,p[11]=ne*le+se*v,i!==p&&(p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function k(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function V(i,m,u){const p=u??new r(16),a=i[0*4+0],f=i[0*4+1],x=i[0*4+2],v=i[0*4+3],L=i[1*4+0],O=i[1*4+1],$=i[1*4+2],le=i[1*4+3],ne=Math.cos(m),se=Math.sin(m);return p[0]=ne*a+se*L,p[1]=ne*f+se*O,p[2]=ne*x+se*$,p[3]=ne*v+se*le,p[4]=ne*L-se*a,p[5]=ne*O-se*f,p[6]=ne*$-se*x,p[7]=ne*le-se*v,i!==p&&(p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function g(i,m,u){const p=u??new r(16);let a=i[0],f=i[1],x=i[2];const v=Math.sqrt(a*a+f*f+x*x);a/=v,f/=v,x/=v;const L=a*a,O=f*f,$=x*x,le=Math.cos(m),ne=Math.sin(m),se=1-le;return p[0]=L+(1-L)*le,p[1]=a*f*se+x*ne,p[2]=a*x*se-f*ne,p[3]=0,p[4]=a*f*se-x*ne,p[5]=O+(1-O)*le,p[6]=f*x*se+a*ne,p[7]=0,p[8]=a*x*se+f*ne,p[9]=f*x*se-a*ne,p[10]=$+(1-$)*le,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const o=g;function h(i,m,u,p){const a=p??new r(16);let f=m[0],x=m[1],v=m[2];const L=Math.sqrt(f*f+x*x+v*v);f/=L,x/=L,v/=L;const O=f*f,$=x*x,le=v*v,ne=Math.cos(u),se=Math.sin(u),ve=1-ne,ye=O+(1-O)*ne,_e=f*x*ve+v*se,ge=f*v*ve-x*se,Te=f*x*ve-v*se,Be=$+(1-$)*ne,$e=x*v*ve+f*se,Ye=f*v*ve+x*se,Ze=x*v*ve-f*se,je=le+(1-le)*ne,Je=i[0],ot=i[1],at=i[2],rt=i[3],et=i[4],tt=i[5],nt=i[6],We=i[7],st=i[8],He=i[9],ut=i[10],Xe=i[11];return a[0]=ye*Je+_e*et+ge*st,a[1]=ye*ot+_e*tt+ge*He,a[2]=ye*at+_e*nt+ge*ut,a[3]=ye*rt+_e*We+ge*Xe,a[4]=Te*Je+Be*et+$e*st,a[5]=Te*ot+Be*tt+$e*He,a[6]=Te*at+Be*nt+$e*ut,a[7]=Te*rt+Be*We+$e*Xe,a[8]=Ye*Je+Ze*et+je*st,a[9]=Ye*ot+Ze*tt+je*He,a[10]=Ye*at+Ze*nt+je*ut,a[11]=Ye*rt+Ze*We+je*Xe,i!==a&&(a[12]=i[12],a[13]=i[13],a[14]=i[14],a[15]=i[15]),a}const d=h;function b(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(i,m,u){const p=u??new r(16),a=m[0],f=m[1],x=m[2];return p[0]=a*i[0*4+0],p[1]=a*i[0*4+1],p[2]=a*i[0*4+2],p[3]=a*i[0*4+3],p[4]=f*i[1*4+0],p[5]=f*i[1*4+1],p[6]=f*i[1*4+2],p[7]=f*i[1*4+3],p[8]=x*i[2*4+0],p[9]=x*i[2*4+1],p[10]=x*i[2*4+2],p[11]=x*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function C(i,m){const u=m??new r(16);return u[0]=i,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(i,m,u){const p=u??new r(16);return p[0]=m*i[0*4+0],p[1]=m*i[0*4+1],p[2]=m*i[0*4+2],p[3]=m*i[0*4+3],p[4]=m*i[1*4+0],p[5]=m*i[1*4+1],p[6]=m*i[1*4+2],p[7]=m*i[1*4+3],p[8]=m*i[2*4+0],p[9]=m*i[2*4+1],p[10]=m*i[2*4+2],p[11]=m*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}return{add:N,aim:ee,axisRotate:h,axisRotation:g,cameraAim:R,clone:G,copy:F,create:_,determinant:ce,equals:z,equalsApproximately:Z,fromMat3:w,fromQuat:M,frustum:Ie,frustumReverseZ:ze,getAxis:he,getScaling:pe,getTranslation:W,identity:K,inverse:q,invert:U,lookAt:Q,mul:j,mulScalar:A,multiply:X,multiplyScalar:T,negate:B,ortho:Me,perspective:we,perspectiveReverseZ:Ue,rotate:d,rotateX:xe,rotateY:Ve,rotateZ:V,rotation:o,rotationX:Se,rotationY:Ce,rotationZ:k,scale:y,scaling:b,set:S,setAxis:ie,setTranslation:ae,translate:be,translation:me,transpose:Y,uniformScale:E,uniformScaling:C}}const Oi=new Map;function Ml(r){let l=Oi.get(r);return l||(l=kl(r),Oi.set(r,l)),l}function Bl(r){const l=Hn(r);function _(k,V,g,o){const h=new r(4);return k!==void 0&&(h[0]=k,V!==void 0&&(h[1]=V,g!==void 0&&(h[2]=g,o!==void 0&&(h[3]=o)))),h}const S=_;function w(k,V,g,o,h){const d=h??new r(4);return d[0]=k,d[1]=V,d[2]=g,d[3]=o,d}function M(k,V,g){const o=g??new r(4),h=V*.5,d=Math.sin(h);return o[0]=d*k[0],o[1]=d*k[1],o[2]=d*k[2],o[3]=Math.cos(h),o}function B(k,V){const g=V??l.create(3),o=Math.acos(k[3])*2,h=Math.sin(o*.5);return h>Le?(g[0]=k[0]/h,g[1]=k[1]/h,g[2]=k[2]/h):(g[0]=1,g[1]=0,g[2]=0),{angle:o,axis:g}}function N(k,V){const g=we(k,V);return Math.acos(2*g*g-1)}function T(k,V,g){const o=g??new r(4),h=k[0],d=k[1],b=k[2],y=k[3],C=V[0],E=V[1],i=V[2],m=V[3];return o[0]=h*m+y*C+d*i-b*E,o[1]=d*m+y*E+b*C-h*i,o[2]=b*m+y*i+h*E-d*C,o[3]=y*m-h*C-d*E-b*i,o}const A=T;function F(k,V,g){const o=g??new r(4),h=V*.5,d=k[0],b=k[1],y=k[2],C=k[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i+C*E,o[1]=b*i+y*E,o[2]=y*i-b*E,o[3]=C*i-d*E,o}function G(k,V,g){const o=g??new r(4),h=V*.5,d=k[0],b=k[1],y=k[2],C=k[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i-y*E,o[1]=b*i+C*E,o[2]=y*i+d*E,o[3]=C*i-b*E,o}function Z(k,V,g){const o=g??new r(4),h=V*.5,d=k[0],b=k[1],y=k[2],C=k[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i+b*E,o[1]=b*i-d*E,o[2]=y*i+C*E,o[3]=C*i-y*E,o}function z(k,V,g,o){const h=o??new r(4),d=k[0],b=k[1],y=k[2],C=k[3];let E=V[0],i=V[1],m=V[2],u=V[3],p=d*E+b*i+y*m+C*u;p<0&&(p=-p,E=-E,i=-i,m=-m,u=-u);let a,f;if(1-p>Le){const x=Math.acos(p),v=Math.sin(x);a=Math.sin((1-g)*x)/v,f=Math.sin(g*x)/v}else a=1-g,f=g;return h[0]=a*d+f*E,h[1]=a*b+f*i,h[2]=a*y+f*m,h[3]=a*C+f*u,h}function K(k,V){const g=V??new r(4),o=k[0],h=k[1],d=k[2],b=k[3],y=o*o+h*h+d*d+b*b,C=y?1/y:0;return g[0]=-o*C,g[1]=-h*C,g[2]=-d*C,g[3]=b*C,g}function Y(k,V){const g=V??new r(4);return g[0]=-k[0],g[1]=-k[1],g[2]=-k[2],g[3]=k[3],g}function q(k,V){const g=V??new r(4),o=k[0]+k[5]+k[10];if(o>0){const h=Math.sqrt(o+1);g[3]=.5*h;const d=.5/h;g[0]=(k[6]-k[9])*d,g[1]=(k[8]-k[2])*d,g[2]=(k[1]-k[4])*d}else{let h=0;k[5]>k[0]&&(h=1),k[10]>k[h*4+h]&&(h=2);const d=(h+1)%3,b=(h+2)%3,y=Math.sqrt(k[h*4+h]-k[d*4+d]-k[b*4+b]+1);g[h]=.5*y;const C=.5/y;g[3]=(k[d*4+b]-k[b*4+d])*C,g[d]=(k[d*4+h]+k[h*4+d])*C,g[b]=(k[b*4+h]+k[h*4+b])*C}return g}function ce(k,V,g,o,h){const d=h??new r(4),b=k*.5,y=V*.5,C=g*.5,E=Math.sin(b),i=Math.cos(b),m=Math.sin(y),u=Math.cos(y),p=Math.sin(C),a=Math.cos(C);switch(o){case"xyz":d[0]=E*u*a+i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${o}`)}return d}function U(k,V){const g=V??new r(4);return g[0]=k[0],g[1]=k[1],g[2]=k[2],g[3]=k[3],g}const X=U;function j(k,V,g){const o=g??new r(4);return o[0]=k[0]+V[0],o[1]=k[1]+V[1],o[2]=k[2]+V[2],o[3]=k[3]+V[3],o}function ae(k,V,g){const o=g??new r(4);return o[0]=k[0]-V[0],o[1]=k[1]-V[1],o[2]=k[2]-V[2],o[3]=k[3]-V[3],o}const W=ae;function he(k,V,g){const o=g??new r(4);return o[0]=k[0]*V,o[1]=k[1]*V,o[2]=k[2]*V,o[3]=k[3]*V,o}const ie=he;function pe(k,V,g){const o=g??new r(4);return o[0]=k[0]/V,o[1]=k[1]/V,o[2]=k[2]/V,o[3]=k[3]/V,o}function we(k,V){return k[0]*V[0]+k[1]*V[1]+k[2]*V[2]+k[3]*V[3]}function Ue(k,V,g,o){const h=o??new r(4);return h[0]=k[0]+g*(V[0]-k[0]),h[1]=k[1]+g*(V[1]-k[1]),h[2]=k[2]+g*(V[2]-k[2]),h[3]=k[3]+g*(V[3]-k[3]),h}function Me(k){const V=k[0],g=k[1],o=k[2],h=k[3];return Math.sqrt(V*V+g*g+o*o+h*h)}const Ie=Me;function ze(k){const V=k[0],g=k[1],o=k[2],h=k[3];return V*V+g*g+o*o+h*h}const oe=ze;function de(k,V){const g=V??new r(4),o=k[0],h=k[1],d=k[2],b=k[3],y=Math.sqrt(o*o+h*h+d*d+b*b);return y>1e-5?(g[0]=o/y,g[1]=h/y,g[2]=d/y,g[3]=b/y):(g[0]=0,g[1]=0,g[2]=0,g[3]=1),g}function J(k,V){return Math.abs(k[0]-V[0])<Le&&Math.abs(k[1]-V[1])<Le&&Math.abs(k[2]-V[2])<Le&&Math.abs(k[3]-V[3])<Le}function ee(k,V){return k[0]===V[0]&&k[1]===V[1]&&k[2]===V[2]&&k[3]===V[3]}function R(k){const V=k??new r(4);return V[0]=0,V[1]=0,V[2]=0,V[3]=1,V}const Q=l.create(),me=l.create(),be=l.create();function Se(k,V,g){const o=g??new r(4),h=l.dot(k,V);return h<-.999999?(l.cross(me,k,Q),l.len(Q)<1e-6&&l.cross(be,k,Q),l.normalize(Q,Q),M(Q,Math.PI,o),o):h>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(l.cross(k,V,Q),o[0]=Q[0],o[1]=Q[1],o[2]=Q[2],o[3]=1+h,de(o,o))}const xe=new r(4),Ce=new r(4);function Ve(k,V,g,o,h,d){const b=d??new r(4);return z(k,o,h,xe),z(V,g,h,Ce),z(xe,Ce,2*h*(1-h),b),b}return{create:_,fromValues:S,set:w,fromAxisAngle:M,toAxisAngle:B,angle:N,multiply:T,mul:A,rotateX:F,rotateY:G,rotateZ:Z,slerp:z,inverse:K,conjugate:Y,fromMat:q,fromEuler:ce,copy:U,clone:X,add:j,subtract:ae,sub:W,mulScalar:he,scale:ie,divScalar:pe,dot:we,lerp:Ue,length:Me,len:Ie,lengthSq:ze,lenSq:oe,normalize:de,equalsApproximately:J,equals:ee,identity:R,rotationTo:Se,sqlerp:Ve}}const Fi=new Map;function Tl(r){let l=Fi.get(r);return l||(l=Bl(r),Fi.set(r,l)),l}function Dl(r){function l(g,o,h,d){const b=new r(4);return g!==void 0&&(b[0]=g,o!==void 0&&(b[1]=o,h!==void 0&&(b[2]=h,d!==void 0&&(b[3]=d)))),b}const _=l;function S(g,o,h,d,b){const y=b??new r(4);return y[0]=g,y[1]=o,y[2]=h,y[3]=d,y}function w(g,o){const h=o??new r(4);return h[0]=Math.ceil(g[0]),h[1]=Math.ceil(g[1]),h[2]=Math.ceil(g[2]),h[3]=Math.ceil(g[3]),h}function M(g,o){const h=o??new r(4);return h[0]=Math.floor(g[0]),h[1]=Math.floor(g[1]),h[2]=Math.floor(g[2]),h[3]=Math.floor(g[3]),h}function B(g,o){const h=o??new r(4);return h[0]=Math.round(g[0]),h[1]=Math.round(g[1]),h[2]=Math.round(g[2]),h[3]=Math.round(g[3]),h}function N(g,o=0,h=1,d){const b=d??new r(4);return b[0]=Math.min(h,Math.max(o,g[0])),b[1]=Math.min(h,Math.max(o,g[1])),b[2]=Math.min(h,Math.max(o,g[2])),b[3]=Math.min(h,Math.max(o,g[3])),b}function T(g,o,h){const d=h??new r(4);return d[0]=g[0]+o[0],d[1]=g[1]+o[1],d[2]=g[2]+o[2],d[3]=g[3]+o[3],d}function A(g,o,h,d){const b=d??new r(4);return b[0]=g[0]+o[0]*h,b[1]=g[1]+o[1]*h,b[2]=g[2]+o[2]*h,b[3]=g[3]+o[3]*h,b}function F(g,o,h){const d=h??new r(4);return d[0]=g[0]-o[0],d[1]=g[1]-o[1],d[2]=g[2]-o[2],d[3]=g[3]-o[3],d}const G=F;function Z(g,o){return Math.abs(g[0]-o[0])<Le&&Math.abs(g[1]-o[1])<Le&&Math.abs(g[2]-o[2])<Le&&Math.abs(g[3]-o[3])<Le}function z(g,o){return g[0]===o[0]&&g[1]===o[1]&&g[2]===o[2]&&g[3]===o[3]}function K(g,o,h,d){const b=d??new r(4);return b[0]=g[0]+h*(o[0]-g[0]),b[1]=g[1]+h*(o[1]-g[1]),b[2]=g[2]+h*(o[2]-g[2]),b[3]=g[3]+h*(o[3]-g[3]),b}function Y(g,o,h,d){const b=d??new r(4);return b[0]=g[0]+h[0]*(o[0]-g[0]),b[1]=g[1]+h[1]*(o[1]-g[1]),b[2]=g[2]+h[2]*(o[2]-g[2]),b[3]=g[3]+h[3]*(o[3]-g[3]),b}function q(g,o,h){const d=h??new r(4);return d[0]=Math.max(g[0],o[0]),d[1]=Math.max(g[1],o[1]),d[2]=Math.max(g[2],o[2]),d[3]=Math.max(g[3],o[3]),d}function ce(g,o,h){const d=h??new r(4);return d[0]=Math.min(g[0],o[0]),d[1]=Math.min(g[1],o[1]),d[2]=Math.min(g[2],o[2]),d[3]=Math.min(g[3],o[3]),d}function U(g,o,h){const d=h??new r(4);return d[0]=g[0]*o,d[1]=g[1]*o,d[2]=g[2]*o,d[3]=g[3]*o,d}const X=U;function j(g,o,h){const d=h??new r(4);return d[0]=g[0]/o,d[1]=g[1]/o,d[2]=g[2]/o,d[3]=g[3]/o,d}function ae(g,o){const h=o??new r(4);return h[0]=1/g[0],h[1]=1/g[1],h[2]=1/g[2],h[3]=1/g[3],h}const W=ae;function he(g,o){return g[0]*o[0]+g[1]*o[1]+g[2]*o[2]+g[3]*o[3]}function ie(g){const o=g[0],h=g[1],d=g[2],b=g[3];return Math.sqrt(o*o+h*h+d*d+b*b)}const pe=ie;function we(g){const o=g[0],h=g[1],d=g[2],b=g[3];return o*o+h*h+d*d+b*b}const Ue=we;function Me(g,o){const h=g[0]-o[0],d=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return Math.sqrt(h*h+d*d+b*b+y*y)}const Ie=Me;function ze(g,o){const h=g[0]-o[0],d=g[1]-o[1],b=g[2]-o[2],y=g[3]-o[3];return h*h+d*d+b*b+y*y}const oe=ze;function de(g,o){const h=o??new r(4),d=g[0],b=g[1],y=g[2],C=g[3],E=Math.sqrt(d*d+b*b+y*y+C*C);return E>1e-5?(h[0]=d/E,h[1]=b/E,h[2]=y/E,h[3]=C/E):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function J(g,o){const h=o??new r(4);return h[0]=-g[0],h[1]=-g[1],h[2]=-g[2],h[3]=-g[3],h}function ee(g,o){const h=o??new r(4);return h[0]=g[0],h[1]=g[1],h[2]=g[2],h[3]=g[3],h}const R=ee;function Q(g,o,h){const d=h??new r(4);return d[0]=g[0]*o[0],d[1]=g[1]*o[1],d[2]=g[2]*o[2],d[3]=g[3]*o[3],d}const me=Q;function be(g,o,h){const d=h??new r(4);return d[0]=g[0]/o[0],d[1]=g[1]/o[1],d[2]=g[2]/o[2],d[3]=g[3]/o[3],d}const Se=be;function xe(g){const o=g??new r(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function Ce(g,o,h){const d=h??new r(4),b=g[0],y=g[1],C=g[2],E=g[3];return d[0]=o[0]*b+o[4]*y+o[8]*C+o[12]*E,d[1]=o[1]*b+o[5]*y+o[9]*C+o[13]*E,d[2]=o[2]*b+o[6]*y+o[10]*C+o[14]*E,d[3]=o[3]*b+o[7]*y+o[11]*C+o[15]*E,d}function Ve(g,o,h){const d=h??new r(4);return de(g,d),U(d,o,d)}function k(g,o,h){const d=h??new r(4);return ie(g)>o?Ve(g,o,d):ee(g,d)}function V(g,o,h){const d=h??new r(4);return K(g,o,.5,d)}return{create:l,fromValues:_,set:S,ceil:w,floor:M,round:B,clamp:N,add:T,addScaled:A,subtract:F,sub:G,equalsApproximately:Z,equals:z,lerp:K,lerpV:Y,max:q,min:ce,mulScalar:U,scale:X,divScalar:j,inverse:ae,invert:W,dot:he,length:ie,len:pe,lengthSq:we,lenSq:Ue,distance:Me,dist:Ie,distanceSq:ze,distSq:oe,normalize:de,negate:J,copy:ee,clone:R,multiply:Q,mul:me,divide:be,div:Se,zero:xe,transformMat4:Ce,setLength:Ve,truncate:k,midpoint:V}}const Ni=new Map;function Al(r){let l=Ni.get(r);return l||(l=Dl(r),Ni.set(r,l)),l}function Ms(r,l,_,S,w,M){return{mat3:El(r),mat4:Ml(l),quat:Tl(_),vec2:er(S),vec3:Hn(w),vec4:Al(M)}}const{mat3:xt,mat4:dt,quat:ht,vec2:qi,vec3:I,vec4:Wc}=Ms(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ms(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ms(yl,Array,Array,Array,Array,Array);const $i=document.querySelector("#log");let bt=null,Yt=null;function tr(){if(bt)return bt;bt=document.createElement("div"),bt.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",bt.appendChild(r),Yt=document.createElement("div"),Yt.className="ply-spinner-label",bt.appendChild(Yt),bt.style.display="none",document.body.appendChild(bt),bt}function Bs(r){tr(),Yt&&r&&(Yt.textContent=r),bt&&(bt.style.opacity="1",bt.style.display="flex")}function Bt(r){tr(),Yt&&(Yt.textContent=r)}function Pn(){if(!bt)return;const r=bt;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function nr(r,l){if(!$i)return;const _=document.createElement("p");_.innerText=r,l&&Object.assign(_.style,l),$i.appendChild(_)}async function _t(r){console.log(r),nr(r)}async function Ll(r){console.error(r),nr(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let sr;function ir(){sr=performance.now()}function Wi(r){const l=performance.now()-sr;_t(`⏱️ ${r} Time: ${l.toFixed(0)} ms`)}function Il(r,l){if(!r)throw new Error(l&&(typeof l=="string"?l:l()))}function on(r){return r+3&-4}const zl=2,Ul=3,Sn=5,Ht=6,Cn=7;function Gl(r){const l=new TextDecoder("ascii"),_=l.decode(new Uint8Array(r,0,4));if(_!=="NAT2")throw new Error(`NAT2 bad magic: '${_}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const S=new DataView(r),w=4,M=S.getUint32(w+0,!0),B=S.getUint32(w+4,!0),N=S.getUint32(w+8,!0),T=S.getUint32(w+12,!0),A=S.getUint32(w+16,!0),F=S.getFloat32(w+20,!0),G=S.getUint32(w+24,!0),Z=S.getUint32(w+28,!0),z=S.getFloat32(w+32,!0),K=S.getFloat32(w+36,!0),Y=S.getFloat32(w+40,!0),q=S.getUint32(w+44,!0),ce=S.getFloat32(w+48,!0),U=S.getFloat32(w+52,!0),X=S.getUint32(w+56,!0),j=S.getUint32(w+60,!0),ae=j>0?j:1;if(Z!==zl&&Z!==Ul&&Z!==Sn&&Z!==Ht&&Z!==Cn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${Z}`);if(Z!==Sn&&Z!==Ht&&(M%4!==0||q%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${M} layer_h=${q}`);let W=w+64;const he=(X+1)*4,ie=new Uint32Array(r.slice(W,W+he));W+=he;let pe;if(ae>1){const J=(ae+1)*4;if(W+J>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${J} from ${W})`);pe=new Uint32Array(r.slice(W,W+J)),W+=J}else pe=new Uint32Array([0,M]);let we=0;for(let J=0;J<ae;J++){const ee=pe[J+1]-pe[J];ee>we&&(we=ee)}const Ue=A*4*4;if(W+Ue>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ue} more bytes from offset ${W}, have ${r.byteLength-W}`);const Me=new Float32Array(r.slice(W,W+Ue));W+=Ue;const Ie=new Float32Array(A*5);for(let J=0;J<A;J++){const ee=Me[J*4+0],R=Me[J*4+1],Q=Me[J*4+2],me=Me[J*4+3];let be=0;for(let k=1;k<=X&&ie[k]<=R;k++)be=k;let Se=0;for(let k=1;k<=ae&&pe[k]<=ee;k++)Se=k;const xe=R-ie[be],Ce=ee-pe[Se],Ve=Se*X+be;Ie[J*5+0]=Ce,Ie[J*5+1]=xe,Ie[J*5+2]=Q,Ie[J*5+3]=me,Ie[J*5+4]=Ve}if(Z===Sn||Z===Ht){if(W+24>r.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const J=l.decode(new Uint8Array(r,W,4));if(J!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${J}'`);const ee=S.getUint32(W+4,!0),R=S.getUint32(W+8,!0),Q=S.getUint32(W+12,!0),me=S.getUint32(W+16,!0),be=S.getUint32(W+20,!0);if(ee!==1)throw new Error(`NAT2 RVQP unsupported version ${ee}`);if(me!==A)throw new Error(`NAT2 RVQP num_rects ${me} != header num_rects ${A}`);if(W+=24,W+16>r.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const Se=new Float32Array(r.slice(W,W+8)),xe=new Float32Array(r.slice(W+8,W+16));W+=16;const Ce=R*Q,Ve=2*R*Q,k=Z===Ht?(Ce>>2)*(Ve>>2)*16:Ce*Ve*4;if(W+k>r.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${k}, have ${r.byteLength-W})`);const V=new Uint8Array(r.slice(W,W+k));W+=k;const g=be*4;if(W+g>r.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${g}, have ${r.byteLength-W})`);const o=new Uint32Array(r.slice(W,W+g));W+=g;const h=(A+1)*4;if(W+h>r.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${r.byteLength-W})`);const d=new Uint32Array(r.slice(W,W+h));return W+=h,{width:M,height:B,channels:N,kernel_type:T,num_rects:A,uv_extent:F,sb_number:G,format:Z,sh_bias:z,res_bias:K,compact_mult:Y,layer_h:q,atlas_scale:ce,atlas_offset:U,n_layers:X,n_cols:ae,layer_cuts:ie,column_cuts:pe,slice_width:we,rects_expanded:Ie,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:R,B:Q,N_used:be,pair_scale:Se,pair_offset:xe,codebook_image:V,packed_indices:o,surfel_offsets:d}}}let ze;const de=M/4*16;if(Z===Cn){if(W+24>r.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const J=l.decode(new Uint8Array(r,W,4));if(J!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${J}'`);const ee=S.getUint32(W+4,!0),R=S.getUint32(W+8,!0),Q=S.getUint32(W+12,!0),me=S.getUint32(W+16,!0),be=S.getUint32(W+20,!0);if(ee!==1)throw new Error(`NAT2 BCCB unsupported version ${ee}`);if(Q!==B/4||me!==M/4||be!==Q*me)throw new Error(`NAT2 BCCB block grid mismatch: header ${M}×${B}, sub-header ${me}×${Q} (${be} blocks)`);W+=24;const Se=R*16;if(W+Se>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${Se}, have ${r.byteLength-W})`);const xe=new Uint8Array(r,W,Se);W+=Se;const Ce=be*2;if(W+Ce>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${Ce}, have ${r.byteLength-W})`);const Ve=new Uint16Array(r.slice(W,W+Ce));W+=Ce;const k=new Uint8Array(be*16);for(let V=0;V<be;V++){const g=Ve[V]*16;k.set(xe.subarray(g,g+16),V*16)}ze=k}else{let J=0;for(let ee=0;ee<X;ee++){const R=ie[ee+1]-ie[ee];if(R%4!==0)throw new Error(`NAT2 BC7 layer ${ee} rows ${R} not 4-aligned`);J+=R/4*de}if(W+J>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${J} more bytes from offset ${W}, have ${r.byteLength-W}`);ze=new Uint8Array(r.slice(W,W+J))}return{width:M,height:B,channels:N,kernel_type:T,num_rects:A,uv_extent:F,sb_number:G,format:Z,sh_bias:z,res_bias:K,compact_mult:Y,layer_h:q,atlas_scale:ce,atlas_offset:U,n_layers:X,n_cols:ae,layer_cuts:ie,column_cuts:pe,slice_width:we,rects_expanded:Ie,atlas_bytes:ze}}const Rl=32;function Vl(r){const l=r.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=l.createView({dimension:"2d-array"}),S=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:_,sampler:S}}function Ol(r){const l=r.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=l.createView({dimension:"2d"}),S=r.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),w=r.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),M=w.createView({dimension:"2d"}),B=r.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:_,cbSamp:S,packedTex:w,packedView:M,offsetsBuf:B}}function Fl(r,l,_){const S=l.format===Sn||l.format===Ht,w=l.format===Ht;let M,B,N,T;if(S){const U=Vl(r);M=U.tex,B=U.view,N=U.sampler,T="RVQ-paired atlas"}else if(l.format===2||l.format===Cn){if(!r.features.has("texture-compression-bc"))return _t(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;T=l.format===Cn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:M,view:B,sampler:N}=ji(r,l,"bc7-rgba-unorm",T)}else if(l.format===3){if(!r.features.has("texture-compression-astc"))return _t("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;T="ASTC 4x4 atlas",{texture:M,view:B,sampler:N}=ji(r,l,"astc-4x4-unorm",T)}else return _t(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:A}=l,F=r.createBuffer({label:"atlas rects (5-stride)",size:on(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(F,0,A);let G,Z,z,K,Y,q;if(S){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const U=l.rvq_paired,X=U.K_orig*U.B,j=2*U.K_orig*U.B;if(X>r.limits.maxTextureDimension2D||j>r.limits.maxTextureDimension2D)return _t(`⚠️  RVQ codebook ${X}x${j} exceeds maxTextureDimension2D=${r.limits.maxTextureDimension2D} — atlas disabled`),null;let ae,W;if(w){if(!r.features.has("texture-compression-bc"))return _t("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;ae="bc7-rgba-unorm",W=(X>>2)*16}else ae="rgba8unorm",W=X*4;const he=r.createTexture({label:w?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:X,height:j,depthOrArrayLayers:1},format:ae,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});r.queue.writeTexture({texture:he},U.codebook_image,{offset:0,bytesPerRow:W,rowsPerImage:j},{width:X,height:j,depthOrArrayLayers:1}),G=he,Z=he.createView({dimension:"2d"}),z=r.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const ie=8192,pe=U.N_used,we=Math.ceil(pe/ie);if(we>r.limits.maxTextureDimension2D||ie>r.limits.maxTextureDimension2D)return _t(`⚠️  RVQ packed_indices texture ${ie}x${we} exceeds maxTextureDimension2D=${r.limits.maxTextureDimension2D} — atlas disabled`),null;K=r.createTexture({label:"rvq packed_indices (r32uint)",size:{width:ie,height:we,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Ue=ie*we;let Me;if(Ue===pe)Me=new Uint8Array(U.packed_indices.buffer,U.packed_indices.byteOffset,U.packed_indices.byteLength);else{const Ie=new Uint32Array(Ue);Ie.set(U.packed_indices),Me=new Uint8Array(Ie.buffer)}r.queue.writeTexture({texture:K},Me,{offset:0,bytesPerRow:ie*4,rowsPerImage:we},{width:ie,height:we,depthOrArrayLayers:1}),Y=K.createView({dimension:"2d"}),q=r.createBuffer({label:"rvq surfel_offsets",size:on(U.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),r.queue.writeBuffer(q,0,U.surfel_offsets),_t(`🪡 RVQ-paired atlas wired: codebook ${X}x${j} (${(U.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${pe.toLocaleString()} packed indices as r32uint ${ie}x${we} (${(U.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${U.surfel_offsets.length} surfel_offsets`)}else{const U=Ol(r);G=U.cbTex,Z=U.cbView,z=U.cbSamp,K=U.packedTex,Y=U.packedView,q=U.offsetsBuf}const ce=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return rr(r,ce,l,_),{texture:M,view:B,sampler:N,rectsBuffer:F,texParamsBuffer:ce,meta:l,rvqCodebookTexture:G,rvqCodebookView:Z,rvqCodebookSampler:z,rvqPackedIndicesTexture:K,rvqPackedIndicesView:Y,rvqSurfelOffsetsBuffer:q}}function ji(r,l,_,S){const{width:w,layer_h:M,n_layers:B,n_cols:N,layer_cuts:T,column_cuts:A,slice_width:F,atlas_bytes:G}=l,z=w/4*16,K=r.limits.maxTextureDimension2D;if(M>K||F>K)throw new Error(`⚠️  atlas slice dims ${F}x${M} exceed maxTextureDimension2D=${K}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Y=N*B;if(Y>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${N} cols × ${B} layers = ${Y} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const q=r.createTexture({label:S,size:{width:F,height:M,depthOrArrayLayers:Y},mipLevelCount:1,sampleCount:1,dimension:"2d",format:_,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let X=0;X<N;X++){const j=A[X]/4,ae=(A[X+1]-A[X])/4;for(let W=0;W<B;W++){const he=T[W]/4,ie=(T[W+1]-T[W])/4,pe=X*B+W,we=he*z+j*16;r.queue.writeTexture({texture:q,mipLevel:0,origin:{x:0,y:0,z:pe},aspect:"all"},G,{offset:we,bytesPerRow:z,rowsPerImage:ie},{width:ae*4,height:ie*4,depthOrArrayLayers:1})}}const ce=q.createView({label:`${S} view`,dimension:"2d-array"}),U=r.createSampler({label:`${S} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:q,view:ce,sampler:U}}function rr(r,l,_,S){const w=new ArrayBuffer(48),M=new Uint32Array(w),B=new Float32Array(w),N=_.slice_width||_.width;M[0]=S?N:0,M[1]=_.layer_h;let T=_.format;T===Ht&&(T=Sn),T===Cn&&(T=2),M[2]=T,B[3]=_.atlas_scale,B[4]=_.atlas_offset,B[5]=_.uv_extent,B[6]=_.res_bias,_.rvq_paired?(M[7]=_.rvq_paired.B,B[8]=_.rvq_paired.pair_scale[0],B[9]=_.rvq_paired.pair_scale[1],B[10]=_.rvq_paired.pair_offset[0],B[11]=_.rvq_paired.pair_offset[1]):(M[7]=0,B[8]=0,B[9]=0,B[10]=0,B[11]=0),r.queue.writeBuffer(l,0,w)}async function ys(r,l){_t(`loading ply file from File... : ${r.name}`),Bs("downloading PLY...");const _=await r.arrayBuffer();try{return await or(_,l)}finally{Pn()}}async function Nl(r,l){_t(`loading ply file from URL... : ${r}`),Bs("downloading PLY...");try{ir();const _=new URL(r,self.location.href).href;return await or({url:_},l)}finally{Pn()}}async function or(r,l){return new Promise((_,S)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=M=>{var N,T,A,F,G,Z,z,K,Y,q,ce,U;const B=M.data;if((B==null?void 0:B.type)==="error"){Ll(`PLY worker error: ${B.message??"unknown error"}`),w.terminate(),S(new Error(B.message??"Worker error"));return}else if((B==null?void 0:B.type)==="download_progress"){const X=B.totalBytes,j=B.loadedBytes/(1024*1024),ae=X?X/(1024*1024):void 0,W=(B.speedBps??0)/(1024*1024),he=X?Math.min(99,Math.floor(B.loadedBytes/X*100)):void 0,ie=ae?`total ${ae.toFixed(1)} MB`:"total -- MB",pe=ae&&he!==void 0?`${j.toFixed(1)} MB downloaded (${he}%)`:`${j.toFixed(1)} MB downloaded`,we=`${W.toFixed(2)} MB/s`;Bt(`downloading PLY ...
${ie}, ${pe}
${we}`);return}else if((B==null?void 0:B.type)==="fetched"){_t(`💾 Fetched (${B.byteLength} bytes)`),Wi("Download"),Bt("parsing PLY..."),ir();return}else if((B==null?void 0:B.type)==="parse_progress"){const X=B.total??0,j=B.read??0,ae=X>0?Math.floor(j/X*100):0;Bt(`parsing PLY ...
${j}/${X} surfels (${ae}%)`);return}else if((B==null?void 0:B.type)==="done"){const X=B.num_points,j=B.K,ae=B.feature_mode??0,W=B.sh_bias,he=B.kernel_type,ie=B.surfelBuffer,pe=B.svParamsBuffer;_t(`🪐 Total surfels: ${X}, mode=${ae===1?"SB":"SV"}, K=${j}, sh_bias=${W}, kernel_type=${he}`);const Ue=l.createBuffer({label:"surfel input buffer",size:on(X*Rl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ue,0,ie);const Me=pe.byteLength>0?pe.byteLength:16,Ie=l.createBuffer({label:ae===1?"color_params buffer (SB)":"color_params buffer (SV)",size:on(Me),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});pe.byteLength>0&&l.queue.writeBuffer(Ie,0,pe),w.terminate(),Wi("Parse"),_({num_points:X,K:j,feature_mode:ae,sh_bias:W,kernel_type:he,surfel_buffer:Ue,surfel_data:new Float32Array(ie),sv_params_buffer:Ie,bbox:B.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:B.centroid??[((((T=(N=B.bbox)==null?void 0:N.min)==null?void 0:T[0])??-1)+(((F=(A=B.bbox)==null?void 0:A.max)==null?void 0:F[0])??1))/2,((((Z=(G=B.bbox)==null?void 0:G.min)==null?void 0:Z[1])??-1)+(((K=(z=B.bbox)==null?void 0:z.max)==null?void 0:K[1])??1))/2,((((q=(Y=B.bbox)==null?void 0:Y.min)==null?void 0:q[2])??-1)+(((U=(ce=B.bbox)==null?void 0:ce.max)==null?void 0:U[2])??1))/2]})}},w.onerror=M=>{w.terminate(),S(M)},r instanceof ArrayBuffer?(Bt("parsing PLY..."),w.postMessage({type:"start",plyBuffer:r},[r])):w.postMessage({type:"start_url",url:r.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(r,l){(function(_,S){S(l)})(ql,function(_){class S{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class M{constructor(e){this.target=e}}class B extends M{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class N extends M{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends M{constructor(e,t){super(e),this.expanded=t}}class A extends M{constructor(e,t){super(e),this.index=t}}function F(n){return n}function G(n){return n==null}function Z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const K={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Y{static alreadyDisposed(){return new Y({type:"alreadydisposed"})}static notBindable(){return new Y({type:"notbindable"})}static propertyNotFound(e){return new Y({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Y({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=K[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!q.isBindable(s))throw Y.notBindable();if(!(e in s))throw Y.propertyNotFound(e);s[e]=t}}class ce extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new M(this))}),this}}class U{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const X="tp";function j(n){return(t,s)=>[X,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ae(n,e){return t=>e(n(t))}function W(n){return n.rawValue}function he(n,e){n.emitter.on("change",ae(W,e)),e(n.rawValue)}function ie(n,e,t){he(n.value(e),t)}function pe(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function we(n,e){return t=>{pe(n,e,t)}}function Ue(n,e){he(n,t=>{e.textContent=t??""})}const Me=j("btn");class Ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Me()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Me("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Me("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class ze{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class oe{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new U,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class de{constructor(e){this.emitter=new U,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function J(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new de(n):new oe(n,e)}class ee{constructor(e){this.emitter=new U,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:J(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new ee(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function R(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const D=e[P],te=D(n[P]);return te.succeeded?Object.assign(Object.assign({},c),{[P]:te.value}):void 0},{});return s}function Q(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function me(n){return n===null?!1:typeof n=="object"}function be(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Se(n){return{custom:e=>be(e)(n),boolean:be(e=>typeof e=="boolean"?e:void 0)(n),number:be(e=>typeof e=="number"?e:void 0)(n),string:be(e=>typeof e=="string"?e:void 0)(n),function:be(e=>typeof e=="function"?e:void 0)(n),constant:e=>be(t=>t===e?e:void 0)(n),raw:be(e=>e)(n),object:e=>be(t=>{if(me(t))return R(t,e)})(n),array:e=>be(t=>{if(Array.isArray(t))return Q(t,e)})(n)}}const xe={optional:Se(!0),required:Se(!1)};function Ce(n,e){const t=xe.required.object(e)(n);return t.succeeded?t.value:void 0}function Ve(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function k(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class V{constructor(e){this.value_=e}static create(e){return[new V(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const g=j("");function o(n,e){return we(n,g(void 0,e))}class h extends ee{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=V.create(J(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new h(ee.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,o(e,"disabled")),ie(this,"hidden",o(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const b=j(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class C{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(b(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(b(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{k(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Ve({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function f(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function v(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function L(n,e,t){n.insertBefore(e,n.children[t])}function O(n){n.parentElement&&n.parentElement.removeChild(n)}function $(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function le(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ne(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const se=j("lbl");function ve(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class ye{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(se()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(se("l")),ie(t.props,"label",P=>{G(P)?this.element.classList.add(se(void 0,"nol")):(this.element.classList.remove(se(void 0,"nol")),le(s),s.appendChild(ve(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(se("v")),this.element.appendChild(c),this.valueElement=c}}class _e extends C{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new ye(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ge={id:"button",type:"blade",accept(n){const e=xe,t=Ce(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new _e(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:new ze(n.document,{props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof _e)||!(n.controller.valueController instanceof ze)?null:new ce(n.controller)}};class Te extends C{constructor(e){super(e),this.value=e.value}}function Be(){return new ee({positions:J([],{equals:Z})})}class $e extends ee{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=ee.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ie(this,"expanded",s),ie(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ye(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function Ze(n,e){e.style.height=n.styleHeight}function je(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ye(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{Ze(n,e)}),Ze(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Je extends w{constructor(e,t){super(e),this.rackApi_=t}}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function at(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function rt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class tt{constructor(e){this.emitter=new U,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Y.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class nt extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class We extends _e{constructor(e,t){super(e,t),this.binding=t.binding}}class st extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new N(this,t,this.controller_.binding.target.presetKey)})}}class He extends _e{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ut(n){return n instanceof re?n.apiSet_:n instanceof Je?n.rackApi_.apiSet_:null}function Xe(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Y.shouldNeverHappen();return t}function vt(n,e,t){if(!q.isBindable(n))throw Y.notBindable();return new q(n,e,t)}class re extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new U,this.apiSet_=new tt(ut),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>Xe(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(P,vt(e,t,c.presetKey),c),te=new nt(D);return this.add(te,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(P,vt(e,t),c),te=new st(D);return this.add(te,c.index)}addFolder(e){return at(this,e)}addButton(e){return ot(this,e)}addSeparator(e){return rt(this,e)}addTab(e){return et(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Xe(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof We){const s=Xe(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new B(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Te){const s=Xe(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof He))throw Y.shouldNeverHappen();const t=Xe(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new N(t,s.target.read(),s.target.presetKey)})}}class fe extends Je{constructor(e,t){super(e,new re(e.rackController,t)),this.emitter_=new U,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class ue extends C{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class De{constructor(e,t){const s=j(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Re(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof We&&s.binding===e)return s}return null}function Ee(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof He&&s.binding===e)return s}return null}function Ae(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Te&&s.value===e)return s}return null}function Oe(n){return n instanceof Fe?n.rack:n instanceof ue?n.rackController.rack:null}function Ke(n){const e=Oe(n);return e?e.bcSet_:null}class it{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new U,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new tt(Ke),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),z(e,"parent")?e.parent=this:(e.parent_=this,Ve({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){z(e,"parent")?e.parent=null:(e.parent_=null,Ve({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof We)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Te)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Oe(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof We)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Te)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Oe(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Re(this.find(We),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ee(this.find(He),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ae(this.find(Te),e.sender);if(!t)throw Y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Fe extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new De(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new it({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&L(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&O(e.bladeController.view.element)}}const En=j("cnt");class kn{constructor(e,t){var s;this.className_=j((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),En()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ie(this.foldable_,"completed",we(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ie(t.props,"title",ke=>{G(ke)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const D=e.createElement("div");D.classList.add(this.className_("t")),Ue(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const te=e.createElement("div");te.classList.add(this.className_("m")),this.buttonElement.appendChild(te);const Pe=t.containerElement;Pe.classList.add(this.className_("c")),this.element.appendChild(Pe),this.containerElement=Pe}}class Zt extends ue{constructor(e,t){var s;const c=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new Fe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new kn(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,je(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Zn={id:"folder",type:"blade",accept(n){const e=xe,t=Ce(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Zt(n.document,{blade:n.blade,expanded:n.params.expanded,props:ee.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Zt?new fe(n.controller,n.pool):null}};class Pt extends Te{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new ye(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Mn extends w{}const Bn=j("spr");class Tn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Bn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Bn("r")),this.element.appendChild(s)}}class Dn extends C{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Tn(e,{viewProps:t.viewProps})}))}}const An={id:"separator",type:"blade",accept(n){const t=Ce(n,{view:xe.required.constant("separator")});return t?{params:t}:null},controller(n){return new Dn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Dn?new Mn(n.controller):null}},lt=j("tbi");class Gt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(lt()),t.viewProps.bindClassModifiers(this.element),ie(t.props,"selected",P=>{P?this.element.classList.add(lt(void 0,"sel")):this.element.classList.remove(lt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(lt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(lt("t")),Ue(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class Xt{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Gt(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class yt{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Xt(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Fe(e,{blade:Be(),viewProps:h.create()}),this.props=t.props,ie(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Rt{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Vt extends Je{constructor(e,t){super(e,new re(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new U,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Y.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new yt(t,{itemProps:ee.fromObject({selected:!1,title:e.title}),props:ee.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Y.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Y.shouldNeverHappen();const s=new Rt(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Y.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const Ln=-1;class an{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=J(!0),this.selectedIndex=J(Ln),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ln,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const ln=j("tab");class gr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ln(),En()),t.viewProps.bindClassModifiers(this.element),he(t.empty,we(this.element,ln(void 0,"nop")));const s=e.createElement("div");s.classList.add(ln("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(ln("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(ln("c")),this.element.appendChild(P),this.contentsElement=P}}class Ds extends ue{constructor(e,t){const s=new Fe(e,{blade:t.blade,viewProps:t.viewProps}),c=new an;super({blade:t.blade,rackController:s,view:new gr(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new tt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;L(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;O(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const As={id:"tab",type:"blade",accept(n){const e=xe,t=Ce(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new Ds(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new yt(n.document,{itemProps:ee.fromObject({selected:!1,title:t.title}),props:ee.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof Ds?new Vt(n.controller,n.pool):null}};function wr(n,e){const t=n.accept(e.params);if(!t)return null;const s=xe.optional.boolean(e.params.disabled).value,c=xe.optional.boolean(e.params.hidden).value;return n.controller({blade:Be(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class xr{constructor(){this.disabled=!1,this.emitter=new U}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class yr{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new U,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Pr{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new U,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Ls(n,e){for(;n.length<e;)n.push(void 0)}function Sr(n){const e=[];return Ls(e,n),J(e)}function Cr(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Er(n,e){const t=[...Cr(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Ls(t,n.length),t}class kr{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new U,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Er(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class cn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function St(n,e){if(n instanceof e)return n;if(n instanceof cn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class Qt{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class un{constructor(e){this.values=ee.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Is{constructor(e){this.values=ee.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class In{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Xn=j("lst");class Mr{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Xn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Xn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Xn("m")),c.appendChild(v(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ie(this.props_,"options",P=>{$(this.selectElement),P.forEach(D=>{const te=e.createElement("option");te.textContent=D.text,this.selectElement.appendChild(te)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class dn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Mr(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const zs=j("pop");class Br{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(zs()),t.viewProps.bindClassModifiers(this.element),he(t.shows,we(this.element,zs(void 0,"v")))}}class Us{constructor(e,t){this.shows=J(!1),this.viewProps=t.viewProps,this.view=new Br(e,{shows:this.shows,viewProps:this.viewProps})}}const Gs=j("txt");class Tr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Gs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Gs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class zn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Tr(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Dr(n){return String(n)}function Rs(n){return n==="false"?!1:!!n}function Vs(n){return Dr(n)}class Ar{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Lr={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ir{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Lr[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const zr={"+":n=>n,"-":n=>-n,"~":n=>~n};class Ur{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=zr[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Qn(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function pn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Gr(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function hn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Rr(n,e){const t=hn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=hn(n,e);return c===""?"":s+c}function Jn(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Rr(n,e);return s===""?"":t+s}function Os(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Gr(n,e);return e+=s.length,s===""?"":s+hn(n,e)}function Vr(n,e){const t=Os(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=hn(n,e);return e+=c.length,t+s+c+Jn(n,e)}function Or(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=hn(n,e);return e+=s.length,s===""?"":t+s+Jn(n,e)}function Fr(n,e){const t=Os(n,e);return e+=t.length,t===""?"":t+Jn(n,e)}const Nr=Qn([Vr,Or,Fr]);function qr(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function $r(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qr(n,e);return s===""?"":t+s}function Wr(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function jr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Wr(n,e);return s===""?"":t+s}function Kr(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Hr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Kr(n,e);return s===""?"":t+s}const Yr=Qn([$r,jr,Hr]),Zr=Qn([Yr,Nr]);function Xr(n,e){const t=Zr(n,e);return e+=t.length,t===""?null:{evaluable:new Ar(t),cursor:e}}function Qr(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Ns(n,e);if(!s)return null;e=s.cursor,e+=pn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function Jr(n,e){var t;return(t=Xr(n,e))!==null&&t!==void 0?t:Qr(n,e)}function Fs(n,e){const t=Jr(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Fs(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Ur(s,c.evaluable)}):null}function eo(n,e,t){t+=pn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=pn(e,t).length,{cursor:t,operator:s}):null}function to(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const D=eo(e,t,s);if(!D)break;s=D.cursor;const te=n(t,s);if(!te)return null;s=te.cursor,P=new Ir(D.operator,P,te.evaluable)}return P?{cursor:s,evaluable:P}:null}}const no=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>to(n,e),Fs);function Ns(n,e){return e+=pn(n,e).length,no(n,e)}function so(n){const e=Ns(n,0);return!e||e.cursor+pn(n,e.cursor).length!==n.length?null:e.evaluable}function Ct(n){var e;const t=so(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function qs(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Ct(n);if(!G(e))return e}return 0}function io(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const ro=pt(0);function Un(n){return ro(n)+"%"}function $s(n){return String(n)}function es(n){return n}function fn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{P(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{P(()=>{n.setRawValue(s(n,e),D.options)}),P(()=>{e.setRawValue(t(n,e),D.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function _n(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Et(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function oo(n){return n==="ArrowUp"||n==="ArrowDown"}function Ws(n){return oo(n)||n==="ArrowLeft"||n==="ArrowRight"}function ts(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Ot{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new U,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ts(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ts(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ts(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Qe(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function js(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ct(n,e,t){return Math.min(Math.max(n,e),t)}function Ks(n,e){return(n%e+e)%e}const gt=j("txt");class ao{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(gt(),gt(void 0,"num")),t.arrayPosition&&this.element.classList.add(gt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(gt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(gt()),this.inputElement.classList.add(gt("i"));const c=e.createElement("div");c.classList.add(gt("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(E,"svg");P.classList.add(gt("g")),this.knobElement.appendChild(P);const D=e.createElementNS(E,"path");D.classList.add(gt("gb")),P.appendChild(D),this.guideBodyElem_=D;const te=e.createElementNS(E,"path");te.classList.add(gt("gh")),P.appendChild(te),this.guideHeadElem_=te;const Pe=e.createElement("div");Pe.classList.add(j("tt")()),this.knobElement.appendChild(Pe),this.tooltipElem_=Pe,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(gt(void 0,"drg"));return}this.element.classList.add(gt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=ct(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class mn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=J(null),this.view=new ao(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Ot(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),P!==void 0&&(D=Math.min(D,P)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,_n(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,_n(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ns=j("sld");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ns()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ns("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(ns("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=ct(Qe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new lo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ot(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Qe(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,Et(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,Et(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ss=j("sldtxt");class uo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ss());const s=e.createElement("div");s.classList.add(ss("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ss("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class is{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new mn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new uo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function bn(n,e){n.write(e)}function Gn(n){const e=xe;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Hs(n){if(n==="inline"||n==="popup")return n}function Tt(n){const e=xe;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Ys(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function rs(n){return G(n)?null:new un(Ys(n))}function po(n){const e=n?St(n,In):null;return e?e.step:null}function Rn(n,e){const t=n&&St(n,In);return t?js(t.step):Math.max(js(e),2)}function Jt(n){const e=po(n);return e??1}function en(n,e){var t;const s=n&&St(n,In),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Vn=j("ckb");class ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Vn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Vn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Vn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Vn("w")),s.appendChild(P);const D=v(e,"check");P.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function _o(n){const e=[],t=rs(n.options);return t&&e.push(t),new cn(e)}const mo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ce(e,{options:xe.optional.custom(Gn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs,constraint:n=>_o(n.params),writer:n=>bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&St(s,un);return c?new dn(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new fo(e,{value:t,viewProps:n.viewProps})}},Ft=j("col");class bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ft()),t.foldable.bindExpandedClass(this.element,Ft(void 0,"expanded")),ie(t.foldable,"completed",we(this.element,Ft(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Ft("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Ft("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(Ft("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Ft("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function vo(n,e,t){const s=ct(n/255,0,1),c=ct(e/255,0,1),P=ct(t/255,0,1),D=Math.max(s,c,P),te=Math.min(s,c,P),Pe=D-te;let ke=0,Ne=0;const qe=(te+D)/2;return Pe!==0&&(Ne=Pe/(1-Math.abs(D+te-1)),s===D?ke=(c-P)/Pe:c===D?ke=2+(P-s)/Pe:ke=4+(s-c)/Pe,ke=ke/6+(ke<0?1:0)),[ke*360,Ne*100,qe*100]}function go(n,e,t){const s=(n%360+360)%360,c=ct(e/100,0,1),P=ct(t/100,0,1),D=(1-Math.abs(2*P-1))*c,te=D*(1-Math.abs(s/60%2-1)),Pe=P-D/2;let ke,Ne,qe;return s>=0&&s<60?[ke,Ne,qe]=[D,te,0]:s>=60&&s<120?[ke,Ne,qe]=[te,D,0]:s>=120&&s<180?[ke,Ne,qe]=[0,D,te]:s>=180&&s<240?[ke,Ne,qe]=[0,te,D]:s>=240&&s<300?[ke,Ne,qe]=[te,0,D]:[ke,Ne,qe]=[D,0,te],[(ke+Pe)*255,(Ne+Pe)*255,(qe+Pe)*255]}function wo(n,e,t){const s=ct(n/255,0,1),c=ct(e/255,0,1),P=ct(t/255,0,1),D=Math.max(s,c,P),te=Math.min(s,c,P),Pe=D-te;let ke;Pe===0?ke=0:D===s?ke=60*(((c-P)/Pe%6+6)%6):D===c?ke=60*((P-s)/Pe+2):ke=60*((s-c)/Pe+4);const Ne=D===0?0:Pe/D,qe=D;return[ke,Ne*100,qe*100]}function Zs(n,e,t){const s=Ks(n,360),c=ct(e/100,0,1),P=ct(t/100,0,1),D=P*c,te=D*(1-Math.abs(s/60%2-1)),Pe=P-D;let ke,Ne,qe;return s>=0&&s<60?[ke,Ne,qe]=[D,te,0]:s>=60&&s<120?[ke,Ne,qe]=[te,D,0]:s>=120&&s<180?[ke,Ne,qe]=[0,D,te]:s>=180&&s<240?[ke,Ne,qe]=[0,te,D]:s>=240&&s<300?[ke,Ne,qe]=[te,0,D]:[ke,Ne,qe]=[D,0,te],[(ke+Pe)*255,(Ne+Pe)*255,(qe+Pe)*255]}function xo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function yo(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Nt(n){return[n[0],n[1],n[2]]}function Xs(n,e){return[n[0],n[1],n[2],e]}const Po={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:xo,rgb:go},hsv:{hsl:yo,hsv:(n,e,t)=>[n,e,t],rgb:Zs},rgb:{hsl:vo,hsv:wo,rgb:(n,e,t)=>[n,e,t]}};function On(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function So(n,e){return n===e?e:Ks(n,e)}function Co(n,e,t){var s;const c=On(e,t);return[e==="rgb"?ct(n[0],0,c[0]):So(n[0],c[0]),ct(n[1],0,c[1]),ct(n[2],0,c[2]),ct((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Qs(n,e,t,s){const c=On(e,t),P=On(e,s);return n.map((D,te)=>D/c[te]*P[te])}function Eo(n,e,t){const s=Qs(n,e.mode,e.type,"int"),c=Po[e.mode][t.mode](...s);return Qs(c,t.mode,"int",t.type)}function Fn(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Ge{static black(e="int"){return new Ge([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ge(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Fn(e,"r")&&Fn(e,"g")&&Fn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Fn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Co(e,t,s)}getComponents(e,t="int"){return Xs(Eo(Nt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Dt=j("colp");class ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Dt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Dt("hsv"));const c=e.createElement("div");c.classList.add(Dt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Dt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Dt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const te=e.createElement("div");te.classList.add(Dt("a"));const Pe=e.createElement("div");Pe.classList.add(Dt("ap")),Pe.appendChild(this.alphaViews_.palette.element),te.appendChild(Pe);const ke=e.createElement("div");ke.classList.add(Dt("at")),ke.appendChild(this.alphaViews_.text.element),te.appendChild(ke),this.element.appendChild(te)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Mo(n){return n==="int"?"int":n==="float"?"float":void 0}function os(n){const e=xe;return Ce(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Mo)}),expanded:e.optional.boolean,picker:e.optional.custom(Hs)})}function qt(n){return n?.1:1}function $t(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function Bo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function wt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const To={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Js(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return To[s](t)}function ei(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[wt(e[1],255),wt(e[2],255),wt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ti(n){return e=>{const t=ei(e);return t?new Ge(t,"rgb",n):null}}function ni(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[wt(e[1],255),wt(e[2],255),wt(e[3],255),wt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function si(n){return e=>{const t=ni(e);return t?new Ge(t,"rgb",n):null}}function ii(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Js(e[1]),wt(e[2],100),wt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ri(n){return e=>{const t=ii(e);return t?new Ge(t,"hsl",n):null}}function oi(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Js(e[1]),wt(e[2],100),wt(e[3],100),wt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ai(n){return e=>{const t=oi(e);return t?new Ge(t,"hsl",n):null}}function li(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=li(n);return e?new Ge(e,"rgb","int"):null}function ci(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Qe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Qe(parseInt(t[4],16),0,255,0,1)]:null}function Ao(n){const e=ci(n);return e?new Ge(e,"rgb","int"):null}function ui(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function di(n){return e=>{const t=ui(e);return t?new Ge(t,"rgb",n):null}}function pi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function hi(n){return e=>{const t=pi(e);return t?new Ge(t,"rgb",n):null}}const Lo=[{parser:li,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ci,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ei,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ni,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ii,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:oi,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ui,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:pi,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Io(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function as(n,e="int"){const t=Io(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const fi={int:[Do,Ao,ti("int"),si("int"),ri("int"),ai("int"),di("int"),hi("int")],float:[ti("float"),si("float"),ri("float"),ai("float"),di("float"),hi("float")]};function zo(n){const e=fi[n];return t=>{if(typeof t!="string")return Ge.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Ge.black(n)}}function ls(n){const e=fi[n];return t=>e.reduce((s,c)=>s||c(t),null)}function _i(n){const e=ct(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function mi(n,e="#"){const t=Nt(n.getComponents("rgb")).map(_i).join("");return`${e}${t}`}function cs(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(_i).join("");return`${e}${s}`}function bi(n,e){const t=pt(e==="float"?2:0);return`rgb(${Nt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Uo(n){return e=>bi(e,n)}function Nn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,D)=>(D===3?t:s)(P)).join(", ")})`}function Go(n){return e=>Nn(e,n)}function Ro(n){const e=[pt(0),Un,Un];return`hsl(${Nt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Vo(n){const e=[pt(0),Un,Un,pt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function vi(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${Nt(n.getComponents("rgb",e)).map((P,D)=>`${s[D]}: ${t(P)}`).join(", ")}}`}function Oo(n){return e=>vi(e,n)}function gi(n,e){const t=pt(2),s=pt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,te)=>{const Pe=te===3?t:s;return`${c[te]}: ${Pe(D)}`}).join(", ")}}`}function Fo(n){return e=>gi(e,n)}const No=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:mi},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:cs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ro},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Oo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)}],[])];function us(n){return No.reduce((e,t)=>e||(Bo(t.format,n)?t.stringifier:null),null)}const vn=j("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(vn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(vn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(vn("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(vn("m")),this.element.appendChild(P),this.markerElem_=P;const D=e.createElement("div");D.classList.add(vn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ge([t[0],t[1],t[2],0],"rgb"),c=new Ge([t[0],t[1],t[2],255],"rgb"),P=["to right",Nn(s),Nn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Nn(e);const D=Qe(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class $o{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ot(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,D,te]=c.getComponents("hsv");this.value.setRawValue(new Ge([P,D,te,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(qt(!0),Et(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,te]=s.getComponents("hsv");this.value.setRawValue(new Ge([c,P,D,te+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(qt(!0),Et(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const tn=j("coltxt");function Wo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(tn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(tn("m")),this.modeElem_=Wo(e),this.modeElem_.classList.add(tn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(tn("mm")),c.appendChild(v(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(tn("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){$(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(tn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ko(n){return pt(n==="float"?2:0)}function Ho(n,e,t){const s=On(n,e)[t];return new Qt({min:0,max:s})}function ds(n,e,t){return new mn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:qt(!1),parser:e.parser,props:ee.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ko(e.colorType)}),value:J(0,{constraint:Ho(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Yo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=J(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new jo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[ds(e,t,0),ds(e,t,1),ds(e,t,2)];return s.forEach((c,P)=>{fn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(D,te)=>{const Pe=this.colorMode.rawValue,ke=D.rawValue.getComponents(Pe,this.colorType_);return ke[P]=te.rawValue,new Ge(Xs(Nt(ke),ke[3]),Pe,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const ps=j("hpl");class Zo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ps()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(ps("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(ps("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=bi(new Ge([t,100,100],"hsv"));const s=Qe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Xo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Zo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ot(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Qe(ct(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,D,te]=c.getComponents("hsv");this.value.setRawValue(new Ge([s,P,D,te],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(qt(!1),Et(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,te]=s.getComponents("hsv");this.value.setRawValue(new Ge([c+t,P,D,te],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(qt(!1),Et(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const hs=j("svp"),wi=64;class Qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(hs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=wi,s.width=wi,s.classList.add(hs("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(hs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=f(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,D=e.getImageData(0,0,c,P),te=D.data;for(let Ne=0;Ne<P;Ne++)for(let qe=0;qe<c;qe++){const Wt=Qe(qe,0,c,0,100),wn=Qe(Ne,0,P,100,0),xn=Zs(s[0],Wt,wn),qn=(Ne*c+qe)*4;te[qn]=xn[0],te[qn+1]=xn[1],te[qn+2]=xn[2],te[qn+3]=255}e.putImageData(D,0,0);const Pe=Qe(s[1],0,100,0,100);this.markerElem_.style.left=`${Pe}%`;const ke=Qe(s[2],0,100,100,0);this.markerElem_.style.top=`${ke}%`}onValueChange_(){this.update_()}}class Jo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ot(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Qe(e.point.x,0,e.bounds.width,0,100),c=Qe(e.point.y,0,e.bounds.height,100,0),[P,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ge([P,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ws(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),D=qt(!1),te=mt(D,Et(e)),Pe=mt(D,_n(e));te===0&&Pe===0||this.value.setRawValue(new Ge([t,s+te,c+Pe,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=qt(!1),s=mt(t,Et(e)),c=mt(t,_n(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ea{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new $o(e,{value:this.value,viewProps:this.viewProps}),text:new mn(e,{parser:Ct,baseStep:.1,props:ee.fromObject({draggingScale:.01,formatter:pt(2)}),value:J(0,{constraint:new Qt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&fn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Ge(P,s.rawValue.mode)}}),this.textC_=new Yo(e,{colorType:t.colorType,parser:Ct,value:this.value,viewProps:this.viewProps}),this.view=new ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const fs=j("colsw");class ta{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(fs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(fs("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(fs("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=cs(e)}onValueChange_(){this.update_()}}class na{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new ta(e,{value:this.value,viewProps:this.viewProps})}}class _s{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new na(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new zn(e,{parser:t.parser,props:ee.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new bo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Us(e,{viewProps:this.viewProps}):null;const c=new ea(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),fn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sa(n,e){return Ge.isColorObject(n)?Ge.fromObject(n,e):Ge.black(e)}function ia(n){return Nt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function ra(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function oa(n){return new Ge([n>>16&255,n>>8&255,n&255],"rgb")}function aa(n){return new Ge([n>>24&255,n>>16&255,n>>8&255,Qe(n&255,0,255,0,1)],"rgb")}function la(n){return typeof n!="number"?Ge.black():oa(n)}function ca(n){return typeof n!="number"?Ge.black():aa(n)}function ua(n){const e=us(n);return e?(t,s)=>{bn(t,e(s))}:null}function da(n){const e=n?ra:ia;return(t,s)=>{bn(t,e(s))}}function pa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function fa(n,e){return(t,s)=>{n?pa(t,s,e):ha(t,s,e)}}function ms(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function _a(n){return n?e=>cs(e,"0x"):e=>mi(e,"0x")}function ma(n){return"color"in n||"view"in n&&n.view==="color"}const ba={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!ma(e))return null;const t=os(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ms(n.params)?ca:la,equals:Ge.equals,writer:n=>da(ms(n.params))},controller:n=>{const e=ms(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new _s(n.document,{colorType:"int",expanded:t??!1,formatter:_a(e),parser:ls("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function va(n){return Ge.isRgbaColorObject(n)}function ga(n){return e=>sa(e,n)}function wa(n,e){return t=>n?gi(t,e):vi(t,e)}const xa={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ge.isColorObject(n))return null;const t=os(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ga($t(n.params)),equals:Ge.equals,writer:n=>fa(va(n.initialValue),$t(n.params))},controller:n=>{var e;const t=Ge.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=$t(n.params))!==null&&e!==void 0?e:"int";return new _s(n.document,{colorType:P,expanded:s??!1,formatter:wa(t,P),parser:ls(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},ya={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=as(n,$t(e));if(!t||!us(t))return null;const c=os(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return zo((e=$t(n.params))!==null&&e!==void 0?e:"int")},equals:Ge.equals,writer:n=>{const e=as(n.initialValue,$t(n.params));if(!e)throw Y.shouldNeverHappen();const t=ua(e);if(!t)throw Y.notBindable();return t}},controller:n=>{const e=as(n.initialValue,$t(n.params));if(!e)throw Y.shouldNeverHappen();const t=us(e);if(!t)throw Y.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new _s(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ls(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class At{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,D;return(D=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const xi=j("pndtxt");class Pa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(xi()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(xi("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Sa(n,e,t){return new mn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:J(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class bs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Sa(e,t,c)),this.acs_.forEach((s,c)=>{fn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,D)=>{const te=t.assembly.toComponents(P.rawValue);return te[c]=D.rawValue,t.assembly.fromComponents(te)}})}),this.view=new Pa(e,{textViews:this.acs_.map(s=>s.view)})}}function yi(n,e){return"step"in n&&!G(n.step)?new In(n.step,e):null}function Pi(n){return!G(n.max)&&!G(n.min)?new Qt({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new Is({max:n.max,min:n.min}):null}function Ca(n){const e=St(n,Qt);if(e)return[e.values.get("min"),e.values.get("max")];const t=St(n,Is);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function Ea(n,e){const t=[],s=yi(n,e);s&&t.push(s);const c=Pi(n);c&&t.push(c);const P=rs(n.options);return P&&t.push(P),new cn(t)}const ka={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=Ce(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Gn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>qs,constraint:n=>Ea(n.params,n.initialValue),writer:n=>bn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&St(s,un);if(c)return new dn(n.document,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(Rn(s,t.rawValue)),D=s&&St(s,Qt);return D?new is(n.document,{baseStep:Jt(s),parser:Ct,sliderProps:new ee({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:ee.fromObject({draggingScale:en(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new mn(n.document,{baseStep:Jt(s),parser:Ct,props:ee.fromObject({draggingScale:en(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Lt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Si={toComponents:n=>n.getComponents(),fromComponents:n=>new Lt(...n)},nn=j("p2d");class Ma{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,we(this.element,nn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(nn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(nn("b")),c.appendChild(v(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(nn("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(nn("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const It=j("p2dp");class Ba{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(It()),t.layout==="popup"&&this.element.classList.add(It(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(It("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(It("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(E,"line");P.classList.add(It("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const D=e.createElementNS(E,"line");D.classList.add(It("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const te=e.createElementNS(E,"line");te.classList.add(It("l")),te.setAttributeNS(null,"x1","50%"),te.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(te),this.lineElem_=te;const Pe=e.createElement("div");Pe.classList.add(It("m")),this.padElement.appendChild(Pe),this.markerElem_=Pe,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Qe(e,-s,+s,0,100),P=Qe(t,-s,+s,0,100),D=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Ci(n,e,t){return[mt(e[0],Et(n)),mt(e[1],_n(n))*(t?1:-1)]}class Ta{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ba(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ot(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Qe(e.point.x,0,e.bounds.width,-s,+s),P=Qe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Lt(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ws(e.key)&&e.preventDefault();const[t,s]=Ci(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Lt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Ci(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Us(e,{viewProps:this.viewProps}):null;const P=new Ta(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new bs(e,{assembly:Si,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ma(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),fn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,te)=>te.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class sn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ei={toComponents:n=>n.getComponents(),fromComponents:n=>new sn(...n)};function Aa(n){return sn.isObject(n)?new sn(n.x,n.y,n.z):new sn}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ia(n,e){return new At({assembly:Ei,components:[kt("x"in n?n.x:void 0,e.x),kt("y"in n?n.y:void 0,e.y),kt("z"in n?n.z:void 0,e.z)]})}function vs(n,e){return{baseStep:Jt(e),constraint:e,textProps:ee.fromObject({draggingScale:en(e,n),formatter:pt(Rn(e,n))})}}const za={id:"input-point3d",type:"input",accept:(n,e)=>{if(!sn.isObject(n))return null;const t=xe,s=Ce(e,{x:t.optional.custom(Tt),y:t.optional.custom(Tt),z:t.optional.custom(Tt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Aa,constraint:n=>Ia(n.params,n.initialValue),equals:sn.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof At))throw Y.shouldNeverHappen();return new bs(n.document,{assembly:Ei,axes:[vs(e.rawValue.x,t.components[0]),vs(e.rawValue.y,t.components[1]),vs(e.rawValue.z,t.components[2])],parser:Ct,value:e,viewProps:n.viewProps})}};class rn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ki={toComponents:n=>n.getComponents(),fromComponents:n=>new rn(...n)};function Ua(n){return rn.isObject(n)?new rn(n.x,n.y,n.z,n.w):new rn}function Ga(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Ra(n,e){return new At({assembly:ki,components:[kt("x"in n?n.x:void 0,e.x),kt("y"in n?n.y:void 0,e.y),kt("z"in n?n.z:void 0,e.z),kt("w"in n?n.w:void 0,e.w)]})}function Va(n,e){return{baseStep:Jt(e),constraint:e,textProps:ee.fromObject({draggingScale:en(e,n),formatter:pt(Rn(e,n))})}}const Oa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!rn.isObject(n))return null;const t=xe,s=Ce(e,{x:t.optional.custom(Tt),y:t.optional.custom(Tt),z:t.optional.custom(Tt),w:t.optional.custom(Tt)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ua,constraint:n=>Ra(n.params,n.initialValue),equals:rn.equals,writer:n=>Ga},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof At))throw Y.shouldNeverHappen();return new bs(n.document,{assembly:ki,axes:e.rawValue.getComponents().map((s,c)=>Va(s,t.components[c])),parser:Ct,value:e,viewProps:n.viewProps})}};function Fa(n){const e=[],t=rs(n.options);return t&&e.push(t),new cn(e)}const Na={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Ce(e,{options:xe.optional.custom(Gn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s,constraint:n=>Fa(n.params),writer:n=>bn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&St(s,un);return c?new dn(e,{props:new ee({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new zn(e,{parser:P=>P,props:ee.fromObject({formatter:es}),value:t,viewProps:n.viewProps})}},gn={monitor:{defaultInterval:200,defaultLineCount:3}},Mi=j("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Mi()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Mi("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Bi=j("sgl");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Bi()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Bi("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ws{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Wa={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Ce(e,{lineCount:xe.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Rs},controller:n=>{var e;return n.value.rawValue.length===1?new ws(n.document,{formatter:Vs,value:n.value,viewProps:n.viewProps}):new gs(n.document,{formatter:Vs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},zt=j("grl");class ja{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(zt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(zt("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(zt("t"),j("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Ne,qe)=>{if(Ne===void 0)return;const Wt=Qe(qe,0,t,0,e.width),wn=Qe(Ne,s,c,e.height,0);P.push([Wt,wn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const D=this.tooltipElem_,te=this.value.rawValue[this.cursor_.rawValue];if(te===void 0){D.classList.remove(zt("t","a"));return}const Pe=Qe(this.cursor_.rawValue,0,t,0,e.width),ke=Qe(te,s,c,e.height,0);D.style.left=`${Pe}px`,D.style.top=`${ke}px`,D.textContent=`${this.formatter_(te)}`,D.classList.contains(zt("t","a"))||(D.classList.add(zt("t","a"),zt("t","in")),i(D),D.classList.remove(zt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ka{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=J(-1),this.view=new ja(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Ot(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Qe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Qe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function xs(n){return"format"in n&&!G(n.format)?n.format:pt(2)}function Ha(n){var e;return n.value.rawValue.length===1?new ws(n.document,{formatter:xs(n.params),value:n.value,viewProps:n.viewProps}):new gs(n.document,{formatter:xs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ya(n){var e,t,s;return new Ka(n.document,{formatter:xs(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,props:ee.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Ti(n){return"view"in n&&n.view==="graph"}const Za={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=xe,s=Ce(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Ti(n)?64:1,reader:n=>qs},controller:n=>Ti(n.params)?Ya(n):Ha(n)},Xa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=xe,s=Ce(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new gs(n.document,{formatter:es,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:gn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ws(n.document,{formatter:es,value:t,viewProps:n.viewProps})}};function Qa(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=xe,P={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(P),te=n.binding.constraint?n.binding.constraint(P):void 0,Pe=J(D(s.initialValue),{constraint:te,equals:n.binding.equals}),ke=new Pr({reader:D,target:e.target,value:Pe,writer:n.binding.writer(P)}),Ne=c.optional.boolean(e.params.disabled).value,qe=c.optional.boolean(e.params.hidden).value,Wt=n.controller({constraint:te,document:e.document,initialValue:s.initialValue,params:s.params,value:ke.value,viewProps:h.create({disabled:Ne,hidden:qe})});return new We(e.document,{binding:ke,blade:Be(),props:ee.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Wt})}function Ja(n,e){return e===0?new xr:new yr(n,e??gn.monitor.defaultInterval)}function el(n,e){var t,s,c;const P=xe,D=n.accept(e.target.read(),e.params);if(G(D))return null;const te={target:e.target,initialValue:D.initialValue,params:D.params},Pe=n.binding.reader(te),ke=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Ne=P.optional.number(e.params.interval).value,qe=new kr({reader:Pe,target:e.target,ticker:Ja(e.document,Ne),value:Sr(ke)}),Wt=P.optional.boolean(e.params.disabled).value,wn=P.optional.boolean(e.params.hidden).value,xn=n.controller({document:e.document,params:D.params,value:qe.value,viewProps:h.create({disabled:Wt,hidden:wn})});return new He(e.document,{binding:qe,blade:Be(),props:ee.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:xn})}class tl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new Y({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((D,te)=>D??Qa(te,{document:e,target:t,params:s}),null);if(P)return P;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,D)=>P??el(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Y({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??wr(P,{document:e,params:t}),null);if(!s)throw new Y({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof We)return new nt(e);if(e instanceof He)return new st(e);if(e instanceof Fe)return new re(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Y.shouldNeverHappen();return t}}function nl(){const n=new tl;return[ll,za,Oa,Na,ka,ya,xa,ba,mo,Wa,Xa,Za,ge,Zn,An,As].forEach(e=>{n.register(e)}),n}function sl(n){return Lt.isObject(n)?new Lt(n.x,n.y):new Lt}function il(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function kt(n,e){if(!n)return;const t=[],s=yi(n,e);s&&t.push(s);const c=Pi(n);return c&&t.push(c),new cn(t)}function rl(n,e){return new At({assembly:Si,components:[kt("x"in n?n.x:void 0,e.x),kt("y"in n?n.y:void 0,e.y)]})}function Di(n,e){const[t,s]=n?Ca(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=Jt(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function ol(n,e){const t=e instanceof At?e.components[0]:void 0,s=e instanceof At?e.components[1]:void 0,c=Di(t,n.x),P=Di(s,n.y);return Math.max(c,P)}function Ai(n,e){return{baseStep:Jt(e),constraint:e,textProps:ee.fromObject({draggingScale:en(e,n),formatter:pt(Rn(e,n))})}}function al(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const ll={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Lt.isObject(n))return null;const t=xe,s=Ce(e,{expanded:t.optional.boolean,picker:t.optional.custom(Hs),x:t.optional.custom(Tt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>sl,constraint:n=>rl(n.params,n.initialValue),equals:Lt.equals,writer:n=>il},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof At))throw Y.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[Ai(t.rawValue.x,s.components[0]),Ai(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:al(n.params),maxValue:ol(t.rawValue,s),parser:Ct,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class Li extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ii extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class zi extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const cl=function(){return{id:"list",type:"blade",accept(n){const e=xe,t=Ce(n,{options:e.required.custom(Gn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new un(Ys(n.params.options)),t=J(n.params.value,{constraint:e}),s=new dn(n.document,{props:new ee({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Pt(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Pt)||!(n.controller.valueController instanceof dn)?null:new Li(n.controller)}}}();function ul(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function dl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class pl extends fe{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(We).map(s=>s.binding);dl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(We).map(t=>t.binding.target);return ul(e)}refresh(){this.controller_.rackController.rack.find(We).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()})}}class hl extends Zt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const fl={id:"slider",type:"blade",accept(n){const e=xe,t=Ce(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new Qt({max:n.params.max,min:n.params.min}),P=new is(n.document,{baseStep:1,parser:Ct,sliderProps:new ee({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:ee.fromObject({draggingScale:en(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:io}),value:J(s,{constraint:c}),viewProps:n.viewProps});return new Pt(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof Pt)||!(n.controller.valueController instanceof is)?null:new Ii(n.controller)}},_l=function(){return{id:"text",type:"blade",accept(n){const e=xe,t=Ce(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new zn(n.document,{parser:n.params.parse,props:ee.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:J(n.params.value),viewProps:n.viewProps});return new Pt(n.document,{blade:n.blade,props:ee.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Pt)||!(n.controller.valueController instanceof zn)?null:new zi(n.controller)}}}();function ml(n){const e=n.createElement("div");return e.classList.add(j("dfw")()),n.body&&n.body.appendChild(e),e}function Ui(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class bl extends pl{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),D=nl(),te=new hl(P,{expanded:c.expanded,blade:Be(),props:ee.fromObject({title:c.title}),viewProps:h.create()});super(te,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:ml(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Y.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Y.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Ui(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Ui(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[fl,cl,As,_l]})}}const vl=new S("3.1.10");_.BladeApi=w,_.ButtonApi=ce,_.FolderApi=fe,_.InputBindingApi=nt,_.ListApi=Li,_.MonitorBindingApi=st,_.Pane=bl,_.SeparatorApi=Mn,_.SliderApi=Ii,_.TabApi=Vt,_.TabPageApi=Rt,_.TextApi=zi,_.TpChangeEvent=B,_.VERSION=vl,Object.defineProperty(_,"__esModule",{value:!0})})})(Ps,Ps.exports);var $l=Ps.exports;const Wl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,jl=`// 2DGS render — vertex+fragment.
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
`,Kl=`const WG_SIZE = 256u;
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
}`,Hl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
                    if silhouette_cull {
                        if mesh_z < 0.999 {
                            mesh_occluded = true;
                        }
                    } else {
                        // Small margin absorbs the half-pixel offset between
                        // sample point and rasterized triangle center + fp32
                        // fighting on grazing planes.
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
`,Zl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
}`,ar=32,Ss=1,Cs=2,Ki=4,Es=8,lr=4,ec=7<<lr,Hi=128,tc=0,Ut=new ArrayBuffer(ar),ft={canvas_size:new Uint32Array(Ut,0,2),accel_flags:new Uint32Array(Ut,8,1),feature_mode:new Uint32Array(Ut,12,1),gaussian_scaling:new Float32Array(Ut,16,1),sh_bias:new Float32Array(Ut,20,1),color_K:new Uint32Array(Ut,24,1),walltime:new Float32Array(Ut,28,1)};function nc(r){ft.canvas_size[0]=r.width>>>0,ft.canvas_size[1]=r.height>>>0,ft.accel_flags[0]=(r.accel_flags??Ss|Cs)>>>0,ft.feature_mode[0]=(r.feature_mode??tc)>>>0,ft.gaussian_scaling[0]=r.gaussian_scaling??1,ft.sh_bias[0]=r.sh_bias??.5,ft.color_K[0]=(r.color_K??0)>>>0,ft.walltime[0]=r.walltime??0}function cr(r,l){r.queue.writeBuffer(l,0,Ut)}function Yn(r,l,_){_&&r&&l&&cr(r,l)}function $n(r,l,_,S,w=!0){ft.canvas_size[0]=r>>>0,ft.canvas_size[1]=l>>>0,Yn(_??null,S??null,w)}function Yi(r,l,_,S=!0){ft.gaussian_scaling[0]=r,Yn(l??null,_??null,S)}function Zi(r,l,_,S=!0){ft.sh_bias[0]=r,Yn(l??null,_??null,S)}function yn(r,l,_,S=!0){let w=ft.accel_flags[0];if(r.oac!==void 0&&(w=r.oac?w|Ss:w&~Ss),r.spr!==void 0&&(w=r.spr?w|Cs:w&~Cs),r.bfc!==void 0&&(w=r.bfc?w|Ki:w&~Ki),r.meshCull!==void 0&&(w=r.meshCull?w|Es:w&~Es),r.meshSampleMode!==void 0){const M=(r.meshSampleMode&7)<<lr;w=w&~ec|M}r.meshSilhouetteCull!==void 0&&(w=r.meshSilhouetteCull?w|Hi:w&~Hi),ft.accel_flags[0]=w>>>0,Yn(l??null,_??null,S)}const sc=256,ic=ar,rc=8,oc=80,ac=12,Ts=8,Mt=1<<Ts,Kt=256,jn=32/Ts,lc=0,Xi=jn&1;function Qi(r,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function cc(r,l){const _=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=r.createPipelineLayout({bindGroupLayouts:[_]}),w=M=>r.createComputePipeline({layout:S,compute:{module:l,entryPoint:M,constants:{WG_SIZE:Kt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:_}}function uc(r,l,_){const S=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),M=r.createPipelineLayout({bindGroupLayouts:[S]}),B=r.createPipelineLayout({bindGroupLayouts:[w]}),N=[];for(let T=0;T<jn;T++){const A={PASS_ID:T+lc,RS_RADIX_LOG2:Ts,RS_RADIX_SIZE:Mt};N.push({localHistogram:r.createComputePipeline({layout:M,compute:{module:l,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:r.createComputePipeline({layout:B,compute:{module:_,entryPoint:"scatter_elements",constants:A}})})}return{passes:N,localHistogramBindGroupLayout:S,scatterBindGroupLayout:w}}function dc(r){const l=r.createShaderModule({label:"local histogram",code:Ql}),_=r.createShaderModule({label:"scatter",code:Xl}),S=r.createShaderModule({label:"blelloch prefix",code:Jl}),w=cc(r,S),M=uc(r,l,_);return{localHistogramBindGroupLayout:M.localHistogramBindGroupLayout,scatterBindGroupLayout:M.scatterBindGroupLayout,passes:M.passes,hierarchicalBlelloch:w}}function pc(r){const l=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),_=l.createView({dimension:"2d-array"}),S=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),M=r.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(M,0,new ArrayBuffer(48));const B=r.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),N=B.createView({dimension:"2d"}),T=r.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),A=r.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),F=A.createView({dimension:"2d"}),G=r.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Z={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:_,sampler:S,rectsBuffer:w,texParamsBuffer:M,meta:Z,rvqCodebookTexture:B,rvqCodebookView:N,rvqCodebookSampler:T,rvqPackedIndicesTexture:A,rvqPackedIndicesView:F,rvqSurfelOffsetsBuffer:G}}class hc{constructor(l,_,S,w,M,B=null,N=null){H(this,"device");H(this,"pc");H(this,"presentationFormat");H(this,"camera_buffer");H(this,"render_settings_buffer");H(this,"draw_indirect_buffer");H(this,"splat_2d_buffer");H(this,"querySet");H(this,"resolveBuffer");H(this,"resultBuffer");H(this,"queriesPerFrame",rc);H(this,"queryCapacityFrames",200);H(this,"sort_prefixBindGroup");H(this,"sort_pipelines");H(this,"sort_localHistogramBindGroups");H(this,"sort_scatterBindGroups");H(this,"lastFrame",0);H(this,"frameCount",0);H(this,"preprocessPipeline");H(this,"cullPipeline");H(this,"renderPipeline");H(this,"indirectPipeline");H(this,"sort_info_buffer");H(this,"sort_ping_pong");H(this,"crsBg");H(this,"gsBg");H(this,"cullBg2");H(this,"preprocessBg1");H(this,"renderSplatsBindGroup");H(this,"renderSettingsBindGroup");H(this,"atlasBindGroup");H(this,"indirectBindGroup");H(this,"sh_solvers_buffer");H(this,"mesh");H(this,"meshDepthPipeline",null);H(this,"meshDepthCameraBindGroup",null);H(this,"meshDepthMarginBindGroup",null);H(this,"meshMarginBuffer",null);H(this,"meshDepthTexture",null);H(this,"meshDepthView",null);H(this,"meshCullBindGroupLayout");H(this,"meshCullBindGroup");H(this,"meshCullWidth",0);H(this,"meshCullHeight",0);H(this,"meshStubTexture");H(this,"meshStubView");H(this,"meshOverlayPipeline",null);H(this,"meshOverlayEnabled",!1);H(this,"bgColor",[0,0,0,0]);H(this,"showPerfDialogNext",!1);H(this,"requestReorderNextFrame",!1);H(this,"reorderInFlight",!1);H(this,"downloadOnceNextRead",!1);H(this,"downloadOnceFileName","fps_metrics");H(this,"allFrameTimes",[]);H(this,"lastStageBreakdownMs",null);H(this,"timeQueryEnabled");H(this,"atlas");this.mesh=N;const T=M.includes("timestamp-query");this.timeQueryEnabled=T,T&&_t("⏰ using timestamp-query"),this.pc=l,this.device=_,this.presentationFormat=S,this.camera_buffer=w,this.atlas=B??pc(_),_.addEventListener("uncapturederror",ee=>{console.error("A WebGPU error was not captured:",ee.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Kt-1)/Kt)+1)*Kt,F=Math.ceil(A/Kt);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const G=_.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=dc(_);const Z=[Qi(A,_),Qi(A,_)],z=_.createBuffer({label:"workgroup histograms",size:F*Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=_.createBuffer({label:"workgroup prefixes",size:F*Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=_.createBuffer({label:"digit base",size:Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=Math.ceil(F/Kt),ce=Math.ceil(q/Kt),U=_.createBuffer({label:"prefix l0 sums",size:q*Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),X=_.createBuffer({label:"prefix l0 offsets",size:q*Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),j=_.createBuffer({label:"prefix l1 sums",size:ce*Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ae=_.createBuffer({label:"prefix l1 offsets",size:ce*Mt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=_.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:K}},{binding:3,resource:{buffer:U}},{binding:4,resource:{buffer:X}},{binding:5,resource:{buffer:j}},{binding:6,resource:{buffer:ae}},{binding:7,resource:{buffer:Y}}]}),this.sort_localHistogramBindGroups=[_.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z[0].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]}),_.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z[1].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]})],this.sort_scatterBindGroups=[_.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:Z[0].sort_depths_buffer}},{binding:3,resource:{buffer:Z[1].sort_depths_buffer}},{binding:4,resource:{buffer:Z[0].sort_indices_buffer}},{binding:5,resource:{buffer:Z[1].sort_indices_buffer}},{binding:6,resource:{buffer:K}}]}),_.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Y}},{binding:2,resource:{buffer:Z[1].sort_depths_buffer}},{binding:3,resource:{buffer:Z[0].sort_depths_buffer}},{binding:4,resource:{buffer:Z[1].sort_indices_buffer}},{binding:5,resource:{buffer:Z[0].sort_indices_buffer}},{binding:6,resource:{buffer:K}}]})],this.sort_info_buffer=G,this.sort_ping_pong=Z;const W=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ie=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),pe=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:W,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ie,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:pe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const we=this.device.createShaderModule({code:Kl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:we,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const Ue=this.device.createShaderModule({code:Hl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[W,he,ie,this.meshCullBindGroupLayout]}),compute:{module:Ue,entryPoint:"surfel_cull"}}),this.mesh!==null){const ee=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:ee,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const R=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([.03,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:R,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const Q=this.device.createShaderModule({code:Yl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[ee,R]}),vertex:{module:Q,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Me=this.device.createShaderModule({code:Wl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[W,pe]}),compute:{module:Me,entryPoint:"preprocess"}});const Ie=this.device.createShaderModule({code:jl});Ie.getCompilationInfo().then(ee=>{ee.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ee.messages.forEach(R=>{(R.type==="error"?console.error:R.type==="warning"?console.warn:console.log)(`${R.type} (line ${R.lineNum}:${R.linePos}): ${R.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const ze=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),oe=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),de=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),J=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ze,oe,de]}),vertex:{module:Ie,entryPoint:"vs_main"},fragment:{module:Ie,entryPoint:"fs_main",constants:{BETA_KERNEL:J},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(ee=>{ee?console.error("[render_2dgs] pipeline create validation error:",ee.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:ze,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:oe,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Xi].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:de,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){yn({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}ensureMeshDepthTexture(l,_){var S;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===_||((S=this.meshDepthTexture)==null||S.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,_),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=_))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&rr(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const _=Math.max(0,Math.min(l,this.pc.num_points)),S=_*Uint32Array.BYTES_PER_ELEMENT;if(S===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:S,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),M=this.device.createCommandEncoder();M.copyBufferToBuffer(this.sort_ping_pong[Xi].sort_indices_buffer,0,w,0,S),this.device.queue.submit([M.finish()]),await w.mapAsync(GPUMapMode.READ);const B=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",_,"):",Array.from(B)),w.unmap()}frame(l,_,S=!0){const M=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=S&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(ft.accel_flags[0]&Es)!==0){const T=ft.canvas_size[0],A=ft.canvas_size[1];this.ensureMeshDepthTexture(T,A);const F={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(F);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:M+0,endOfPassWriteIndex:M+1});const A=l.beginComputePass(T);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.meshCullBindGroup);const F=Math.ceil(this.pc.num_points/sc);A.dispatchWorkgroups(F,1,1),A.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:M+2,endOfPassWriteIndex:M+3});const A=l.beginComputePass(T);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let T=0;T<jn;T++){const A=T&1,F=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[A],Z=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${T}`};B&&T==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:M+4});const K=l.beginComputePass(z);K.setPipeline(F.localHistogram),K.setBindGroup(0,G),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,Mt,1),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${T}`};B&&T==jn-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:M+5});const K=l.beginComputePass(z);K.setPipeline(F.scatterElements),K.setBindGroup(0,Z),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}{const T={label:"render",colorAttachments:[{view:_,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:M+6,endOfPassWriteIndex:M+7});const A=l.beginRenderPass(T);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const F=this.device.createShaderModule({code:Zl}),G=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[G]}),vertex:{module:F,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:F,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:_,loadOp:"load",storeOp:"store"}]},A=l.beginRenderPass(T);A.setPipeline(this.meshOverlayPipeline),A.setBindGroup(0,this.meshDepthCameraBindGroup),A.setVertexBuffer(0,this.mesh.vertexBuffer),A.setIndexBuffer(this.mesh.indexBuffer,"uint32"),A.drawIndexed(this.mesh.numIndices),A.end()}this.frameCount++}async readPerfMetrics(l){const _=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const S=this.device.createCommandEncoder({label:"timestamp resolve encoder"});S.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),S.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([S.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const M=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),N=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let A=0;for(let ce=0;ce<B;ce++){const U=(N+ce)%this.queryCapacityFrames,X=U*this.queriesPerFrame;let j=!0;for(let ae=0;ae<w.length;ae++){const[W,he,ie]=w[ae];if(M[X+ie]===0n||M[X+he]===0n||M[X+he]<M[X+ie]){j=!1;break}}if(!j){!_&&U%60===0&&console.debug("[timestamp] frame slot",U,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let ae=0;ae<w.length;ae++){const[W,he,ie]=w[ae],pe=Number(M[X+ie]),we=Number(M[X+he]);T[ae].push((we-pe)/1e6)}}if(A===0){this.resultBuffer.unmap(),_||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const F=[];let G=0,Z=0,z=0;for(let ce=0;ce<w.length;ce++){const U=w[ce][0],X=T[ce];let j=0;if(U==="Total"){const ae=this.allFrameTimes;j=ae.reduce((ie,pe)=>ie+pe,0)/ae.length;const W=[...ae].sort((ie,pe)=>ie-pe);G=W[Math.floor(W.length*.99)]||0;const he=ae.reduce((ie,pe)=>ie+Math.pow(pe-j,2),0)/ae.length;Z=Math.sqrt(he),z=j}else j=X.reduce((ae,W)=>ae+W,0)/X.length;F.push([U,j])}this.lastFrame+=this.frameCount,this.frameCount=0;const K=Object.fromEntries(F);this.lastStageBreakdownMs={cull:K.Culling??0,preprocess:K.Preprocess??0,sort:K.Sort??0,render:K.Render??0,total:K.Total??0};const q=`[TIMESTAMP - ${this.constructor.name}]
`+F.map(([ce,U])=>`${ce}: ${U.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${Z.toFixed(3)}ms
Total AVG: ${z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(_||(console.log(q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ce=`Stage,ms
`,U=F.map(([ae,W])=>`${ae},${W.toFixed(3)}`).join(`
`),X="data:text/csv;charset=utf-8,"+encodeURIComponent(ce+U),j=document.createElement("a");j.href=X,j.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(j),j.click(),j.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ic,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),_=l?l.width:1,S=l?l.height:1;nc({width:_,height:S,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),cr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:on(this.pc.num_points*oc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:on(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const _=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=_.length>0?_:this.downloadOnceFileName}else{const _=new Date,S=`${_.getFullYear()}${String(_.getMonth()+1).padStart(2,"0")}${String(_.getDate()).padStart(2,"0")}_${String(_.getHours()).padStart(2,"0")}${String(_.getMinutes()).padStart(2,"0")}${String(_.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${S}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function fc(r,l){return 2*Math.atan(l/(2*r))}function _c(r,l,_,S){const w=Math.tan(S/2),M=Math.tan(_/2),B=w*r,N=-B,T=M*r,A=-T,F=dt.create();return F[0]=2*r/(T-A),F[5]=-2*r/(B-N),F[2]=(T+A)/(T-A),F[6]=(B+N)/(B-N),F[14]=1,F[10]=l/(l-r),F[11]=-(l*r)/(l-r),dt.transpose(F,F),F}async function mc(r){_t(`loading scene camera file... : ${r}`);const _=await(await fetch(r)).json();return _t(`loaded cameras count: ${_.length}`),_.map(S=>{const w=I.clone(S.position),M=xt.create(...S.rotation.flat()),B=M[0],N=M[4],T=M[8],A=M[1],F=M[5],G=M[9],Z=M[2],z=M[6],K=M[10];B*(F*K-G*z)-N*(A*K-G*Z)+T*(A*z-F*Z)<0&&(M[1]=-M[1],M[5]=-M[5],M[9]=-M[9]);const q=dt.fromMat3(M);return{position:w,rotation:q,img_name:S.img_name,id:S.id}})}const bc=4*2,vc=4*16,ur=4*vc+2*bc;function gc(r){return r.createBuffer({label:"camera uniform",size:ur,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const jt=new Float32Array(ur/Float32Array.BYTES_PER_ELEMENT),Kn=class Kn{constructor(l,_){H(this,"uniform_buffer");H(this,"position",I.create());H(this,"rotation",dt.create());H(this,"fovY",45/180*Math.PI);H(this,"fovX");H(this,"focal",qi.create());H(this,"viewport",qi.create());H(this,"view_matrix",dt.identity());H(this,"view_inv_matrix",dt.identity());H(this,"proj_matrix",dt.identity());H(this,"proj_inv_matrix",dt.identity());H(this,"_negPos",I.create());H(this,"look",I.create(0,0,1));H(this,"up",I.create(0,1,0));H(this,"right",I.create(1,0,0));this.canvas=l,this.device=_,this.uniform_buffer=gc(_),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=fc(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=_c(.01,100,this.fovX,this.fovY),dt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],dt.copy(this.rotation,this.view_matrix),dt.translate(this.view_matrix,this._negPos,this.view_matrix),dt.inverse(this.view_matrix,this.view_inv_matrix),I.transformMat4Upper3x3(Kn.Z_AXIS,this.view_inv_matrix,this.look),I.normalize(this.look,this.look),I.cross(this.up,this.look,this.right),I.normalize(this.right,this.right);let l=0;jt.set(this.view_matrix,l),l+=16,jt.set(this.view_inv_matrix,l),l+=16,jt.set(this.proj_matrix,l),l+=16,jt.set(this.proj_inv_matrix,l),l+=16,jt.set(this.viewport,l),l+=2,jt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,jt)}set_preset(l){I.copy(l.position,this.position),dt.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};H(Kn,"Z_AXIS",I.create(0,0,1));let ks=Kn;const wc=I.create(1,0,0),xc=I.create(0,1,0);function yc(r,l){const _=r[0],S=r[4],w=r[8],M=r[1],B=r[5],N=r[9],T=r[2],A=r[6],F=r[10],G=_+B+F;let Z,z,K,Y;if(G>0){const q=.5/Math.sqrt(G+1);Z=.25/q,z=(A-N)*q,K=(w-T)*q,Y=(M-S)*q}else if(_>B&&_>F){const q=2*Math.sqrt(1+_-B-F);Z=(A-N)/q,z=.25*q,K=(S+M)/q,Y=(w+T)/q}else if(B>F){const q=2*Math.sqrt(1+B-_-F);Z=(w-T)/q,z=(S+M)/q,K=.25*q,Y=(N+A)/q}else{const q=2*Math.sqrt(1+F-_-B);Z=(M-S)/q,z=(w+T)/q,K=(N+A)/q,Y=.25*q}return l[0]=z,l[1]=K,l[2]=Y,l[3]=Z,l}class Pc{constructor(l){H(this,"element");H(this,"enabled",!0);H(this,"center",I.create(0,0,0));H(this,"up",I.create(0,1,0));H(this,"rotation",[0,0]);H(this,"shift",[0,0]);H(this,"scroll",0);H(this,"speed",.1);H(this,"sensitivity",.08);H(this,"leftPressed",!1);H(this,"rightPressed",!1);H(this,"leftDragPans",!1);H(this,"lastX",0);H(this,"lastY",0);H(this,"touches",new Map);H(this,"lastTouchCenter",null);H(this,"lastPinchDistance",null);H(this,"lastTwoFingerAngle",null);H(this,"lastTouchCount",0);H(this,"roll",0);H(this,"_dir",I.create());H(this,"_right",I.create());H(this,"_upCam",I.create());H(this,"_scratch",I.create());H(this,"_qY",ht.create());H(this,"_qX",ht.create());H(this,"_qRot",ht.create());H(this,"_qLocal",ht.create());H(this,"_qWorldToCam",ht.create());H(this,"_scratchMat3",xt.create());H(this,"bboxMin",null);H(this,"bboxMax",null);H(this,"anchor",I.create(0,0,0));H(this,"downCallback",l=>{var _,S,w,M;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(S=(_=l.target)==null?void 0:_.setPointerCapture)==null||S.call(_,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(M=(w=l.target)==null?void 0:w.setPointerCapture)==null||M.call(w,l.pointerId),l.preventDefault())}});H(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const _=l.pageX-this.lastX,S=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=_,this.rotation[1]-=S):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=_,this.shift[0]+=S)});H(this,"upCallback",l=>{var _,S,w,M;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(S=(_=l.target)==null?void 0:_.releasePointerCapture)==null||S.call(_,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(M=(w=l.target)==null?void 0:w.releasePointerCapture)==null||M.call(w,l.pointerId),l.preventDefault()});H(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let _=l.deltaY;l.deltaMode===1?_*=16:l.deltaMode===2&&(_*=100),this.scroll+=_*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",_=>_.preventDefault())}setCenter(l){I.copy(l,this.center),I.copy(l,this.anchor)}setOrbitPivot(l){I.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const _=this.camera.rotation;I.set(_[2],_[6],_[10],this._dir),I.normalize(this._dir,this._dir),I.scale(this._dir,l,this._dir),I.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(I.subtract(this.center,l.position,this._scratch),I.length(this._scratch)<1e-6)return;I.normalize(this._scratch,this._scratch),I.cross(this.up,this._scratch,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right),I.normalize(this._right,this._right),I.cross(this._scratch,this._right,this._upCam),I.normalize(this._upCam,this._upCam);const _=l.rotation;_[0]=this._right[0],_[1]=this._upCam[0],_[2]=this._scratch[0],_[3]=0,_[4]=this._right[1],_[5]=this._upCam[1],_[6]=this._scratch[1],_[7]=0,_[8]=this._right[2],_[9]=this._upCam[2],_[10]=this._scratch[2],_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,l.update_buffer()}setBbox(l,_){this.bboxMin=I.create(l[0],l[1],l[2]),this.bboxMax=I.create(_[0],_[1],_[2]);const S=(l[0]+_[0])*.5,w=(l[1]+_[1])*.5,M=(l[2]+_[2])*.5;I.set(S,w,M,this.center),I.set(S,w,M,this.anchor)}resetToCamera(){const l=this.camera.rotation;I.set(l[2],l[6],l[10],this._dir),I.normalize(this._dir,this._dir);let _=null;if(this.bboxMin&&this.bboxMax){let S=-1/0,w=1/0,M=!1;for(let B=0;B<3;B++){const N=this._dir[B],T=this.bboxMin[B]-this.camera.position[B],A=this.bboxMax[B]-this.camera.position[B];if(Math.abs(N)>1e-8){const F=T/N,G=A/N;S=Math.max(S,Math.min(F,G)),w=Math.min(w,Math.max(F,G))}else if(T>0||A<0){M=!0;break}}!M&&S<=w&&w>0&&(_=(Math.max(S,0)+w)*.5)}if(_===null||!isFinite(_)||_<.001){I.subtract(this.anchor,this.camera.position,this._scratch);const S=I.dot(this._scratch,this._dir);_=S>.001?S:I.length(this._scratch)}_=Math.max(.1,_),I.scale(this._dir,_,this._dir),I.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const _=this.touches.values().next().value;if(this.lastTouchCenter){const S=_.x-this.lastTouchCenter[0],w=_.y-this.lastTouchCenter[1];this.rotation[0]+=S*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[_.x,_.y]}else if(l===2){const _=Array.from(this.touches.values()),S=(_[0].x+_[1].x)*.5,w=(_[0].y+_[1].y)*.5,M=_[1].x-_[0].x,B=_[1].y-_[0].y,N=Math.hypot(M,B),T=Math.atan2(B,M);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=S-this.lastTouchCenter[0],F=w-this.lastTouchCenter[1],G=Math.hypot(A,F),Z=Math.abs(N-this.lastPinchDistance);let z=T-this.lastTwoFingerAngle;z>Math.PI&&(z-=2*Math.PI),z<-Math.PI&&(z+=2*Math.PI),G>.5&&(this.shift[1]-=A,this.shift[0]+=F),Z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(N/this.lastPinchDistance)*10),Math.abs(z)>.0087&&(this.roll+=-z)}this.lastTouchCenter=[S,w],this.lastPinchDistance=N,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const _=this.camera;{const Y=_.rotation;this.up[0]=Y[1],this.up[1]=Y[5],this.up[2]=Y[9],I.length(this.up)>1e-6?I.normalize(this.up,this.up):I.set(0,1,0,this.up)}let S=!1;if(Math.abs(this.roll)>1e-4){const Y=_.rotation;I.set(Y[2],Y[6],Y[10],this._scratch),I.normalize(this._scratch,this._scratch),ht.fromAxisAngle(this._scratch,this.roll,this._qRot),I.transformQuat(this.up,this._qRot,this.up),I.normalize(this.up,this.up),this.roll=0,S=!0}I.subtract(_.position,this.center,this._dir);let w=I.length(this._dir);w<1e-6&&(w=1e-6);const M=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);I.scale(this._dir,M/w,this._dir),w=M;const B=_.rotation;this._right[0]=B[0],this._right[1]=B[4],this._right[2]=B[8],I.normalize(this._right,this._right),I.length(this._right)<1e-6&&I.set(1,0,0,this._right);const N=I.create(B[1],B[5],B[9]);I.normalize(N,N),I.length(N)<1e-6&&I.set(0,1,0,N);const T=l*this.speed*.1*w,A=this.shift[1]*T,F=-this.shift[0]*T;I.scale(this._right,A,this._scratch),I.add(this.center,this._scratch,this.center),I.add(_.position,this._scratch,_.position),I.scale(N,F,this._scratch),I.add(this.center,this._scratch,this.center),I.add(_.position,this._scratch,_.position);const G=this.rotation[0]*l*this.sensitivity,Z=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(Z)>1e-5||S){const Y=_.rotation;yc(Y,this._qWorldToCam),ht.fromAxisAngle(wc,-Z,this._qX),ht.fromAxisAngle(xc,-G,this._qY),ht.multiply(this._qX,this._qY,this._qLocal),ht.normalize(this._qLocal,this._qLocal),ht.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),ht.normalize(this._qWorldToCam,this._qWorldToCam),xt.fromQuat(this._qWorldToCam,this._scratchMat3),dt.fromMat3(this._scratchMat3,_.rotation);const q=_.rotation,ce=q[2],U=q[6],X=q[10];_.position[0]=this.center[0]-ce*w,_.position[1]=this.center[1]-U*w,_.position[2]=this.center[2]-X*w,this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],I.normalize(this.up,this.up)}else I.add(this.center,this._dir,_.position);_.update_buffer();const K=Math.pow(.8,l*60);this.rotation[0]*=K,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=K,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=K,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=K,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=K,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function dr(r){const l=I.create();for(const _ of r)I.add(l,_,l);return I.scale(l,1/Math.max(r.length,1),l)}function pr(r,l){const _=xt.create();xt.inverse(r,_);const S=I.create();return S[0]=_[0]*l[0]+_[4]*l[1]+_[8]*l[2],S[1]=_[1]*l[0]+_[5]*l[1]+_[9]*l[2],S[2]=_[2]*l[0]+_[6]*l[1]+_[10]*l[2],S}function Sc(r){const l=r.slice(),_=[1,0,0,0,1,0,0,0,1],S=(T,A)=>l[T*3+A],w=(T,A,F)=>{l[T*3+A]=F},M=(T,A)=>_[T*3+A],B=(T,A,F)=>{_[T*3+A]=F};for(let T=0;T<30;T++){let A=0,F=1,G=Math.abs(S(0,1));if(Math.abs(S(0,2))>G&&(A=0,F=2,G=Math.abs(S(0,2))),Math.abs(S(1,2))>G&&(A=1,F=2,G=Math.abs(S(1,2))),G<1e-12)break;const Z=S(A,A),z=S(F,F),K=S(A,F);let Y;Math.abs(Z-z)<1e-30?Y=Math.PI/4*Math.sign(K):Y=.5*Math.atan2(2*K,Z-z);const q=Math.cos(Y),ce=Math.sin(Y);for(let U=0;U<3;U++){const X=S(U,A),j=S(U,F);w(U,A,q*X+ce*j),w(U,F,-ce*X+q*j)}for(let U=0;U<3;U++){const X=S(A,U),j=S(F,U);w(A,U,q*X+ce*j),w(F,U,-ce*X+q*j)}for(let U=0;U<3;U++){const X=M(U,A),j=M(U,F);B(U,A,q*X+ce*j),B(U,F,-ce*X+q*j)}}const N=[];for(let T=0;T<3;T++)N.push({val:S(T,T),vec:I.create(M(0,T),M(1,T),M(2,T))});return N.sort((T,A)=>A.val-T.val),{vals:[N[0].val,N[1].val,N[2].val],vecs:[N[0].vec,N[1].vec,N[2].vec]}}function Cc(r,l){const _=dr(r);let S=0,w=0,M=0,B=0,N=0,T=0;for(const K of r){const Y=K[0]-_[0],q=K[1]-_[1],ce=K[2]-_[2];S+=Y*Y,w+=Y*q,M+=Y*ce,B+=q*q,N+=q*ce,T+=ce*ce}const A=[S,w,M,w,B,N,M,N,T],{vecs:F}=Sc(A);let G=F[0],Z=F[1],z=F[2];return I.dot(z,l)<0&&(I.scale(z,-1,z),I.scale(Z,-1,Z)),{centroid:_,normal:z,u:G,v:Z}}function Ec(r){let l=0,_=0,S=0,w=0,M=0,B=0,N=0,T=0,A=0;for(const[q,ce]of r){const U=-2*q,X=-2*ce,j=1,ae=-(q*q+ce*ce);l+=U*U,_+=U*X,S+=U*j,w+=X*X,M+=X*j,B+=j*j,N+=U*ae,T+=X*ae,A+=j*ae}const F=xt.create(l,_,S,_,w,M,S,M,B),G=pr(F,I.create(N,T,A)),Z=G[0],z=G[1],K=G[2],Y=Z*Z+z*z-K;return{center:[Z,z],radius:Math.sqrt(Math.max(Y,1e-12))}}function kc(r,l){let _=0,S=0,w=0,M=0,B=0,N=0,T=0,A=0,F=0;for(let Z=0;Z<r.length;Z++){const z=r[Z],K=I.normalize(l[Z],I.create()),Y=1-K[0]*K[0],q=-K[0]*K[1],ce=-K[0]*K[2],U=1-K[1]*K[1],X=-K[1]*K[2],j=1-K[2]*K[2];_+=Y,S+=q,w+=ce,M+=U,B+=X,N+=j,T+=Y*z[0]+q*z[1]+ce*z[2],A+=q*z[0]+U*z[1]+X*z[2],F+=ce*z[0]+X*z[1]+j*z[2]}const G=xt.create(_,S,w,S,M,B,w,B,N);return pr(G,I.create(T,A,F))}function hr(r,l={}){if(r.length===0)return null;const _=l.tiltDownDeg??8,S=l.radiusScale??1,w=l.alignFirst??!0,M=(l.direction??"ccw")==="ccw"?1:-1,B=r.map(ie=>I.clone(ie.position)),N=r.map(ie=>{const pe=ie.rotation;return I.create(pe[8],pe[9],pe[10])}),T=r.map(ie=>{const pe=ie.rotation;return I.create(pe[4],pe[5],pe[6])}),A=dr(T),F=I.normalize(I.scale(A,-1,I.create())),{centroid:G,normal:Z,u:z,v:K}=Cc(B,F),Y=B.map(ie=>{const pe=I.sub(ie,G,I.create());return[I.dot(pe,z),I.dot(pe,K)]}),{center:q,radius:ce}=Ec(Y),U=ce*S,X=I.add(G,I.add(I.scale(z,q[0],I.create()),I.scale(K,q[1],I.create()),I.create()),I.create()),j=kc(B,N),ae=U*Math.tan(_*Math.PI/180),W=I.sub(j,I.scale(Z,ae,I.create()),I.create());let he=0;if(w){const ie=I.sub(B[0],X,I.create());he=Math.atan2(I.dot(ie,K),I.dot(ie,z))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${r.length} train cams: radius=${U.toFixed(2)}, tilt=${_}°, normal=[${Z[0].toFixed(2)}, ${Z[1].toFixed(2)}, ${Z[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:X,radius:U,normal:Z,u:z,v:K,lookAt:W,startPhase:he,direction:M}}function fr(r,l){const _=(r.startPhase+l*r.direction)*2*Math.PI,S=Math.cos(_),w=Math.sin(_),M=I.add(r.center,I.add(I.scale(r.u,r.radius*S,I.create()),I.scale(r.v,r.radius*w,I.create()),I.create()),I.create()),B=I.normalize(I.sub(r.lookAt,M,I.create())),N=I.cross(B,r.normal,I.create());I.length(N)<1e-6&&I.copy(r.u,N),I.normalize(N,N);const T=I.cross(B,N,I.create());I.normalize(T,T);const A=dt.create();return A[0]=N[0],A[1]=T[0],A[2]=B[0],A[3]=0,A[4]=N[1],A[5]=T[1],A[6]=B[1],A[7]=0,A[8]=N[2],A[9]=T[2],A[10]=B[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:M,rotation:A,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Mc(r,l={}){const _=hr(r,l);if(!_)return[];const S=l.numViews??120;return Array.from({length:S},(w,M)=>({...fr(_,M/S),img_name:`circle_${M.toString().padStart(4,"0")}`,id:M}))}function Bc(r){const l=new Uint8Array(r),_=Math.min(l.byteLength,65536),S=new TextDecoder("ascii").decode(l.subarray(0,_)),w=S.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const M=w+10+1,B=S.slice(0,w).split(/\r?\n/).map(R=>R.trim()).filter(Boolean);if(B[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const N=B.find(R=>R.startsWith("format"));if(!N||!N.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${N??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},A=[];let F=null;for(const R of B)if(R.startsWith("element ")){const[,Q,me]=R.split(/\s+/);F={name:Q,count:parseInt(me,10),props:[],bytesPerRecord:0,hasList:!1},A.push(F)}else if(R.startsWith("property ")&&F){const Q=R.split(/\s+/);if(Q[1]==="list"){const me=Q[2],be=Q[3],Se=Q[4];F.props.push({name:Se,type:be,isList:!0,listCountType:me,listItemType:be}),F.hasList=!0}else{const me=Q[1],be=Q[2];if(F.props.push({name:be,type:me,isList:!1}),T[me]===void 0)throw new Error(`mesh PLY: unsupported prop type '${me}'`);F.bytesPerRecord+=T[me]}}const G=A.find(R=>R.name==="vertex"),Z=A.find(R=>R.name==="face"||R.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!Z)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const z=G.props.find(R=>R.name==="x"),K=G.props.find(R=>R.name==="y"),Y=G.props.find(R=>R.name==="z");if(!z||!K||!Y)throw new Error("mesh PLY: vertex must have x/y/z");let q=0;const ce=new Map;for(const R of G.props)ce.set(R.name,{off:q,type:R.type}),q+=T[R.type];const U=ce.get("x"),X=ce.get("y"),j=ce.get("z");if(U.type!==X.type||U.type!==j.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${U.type}/${X.type}/${j.type})`);const ae=U.type,W=ae==="double"||ae==="float64";if(!W&&ae!=="float"&&ae!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${ae}')`);const he=new Float32Array(G.count*3),ie=new DataView(r),pe=M,we=G.bytesPerRecord;for(let R=0;R<G.count;R++){const Q=pe+R*we;W?(he[R*3+0]=ie.getFloat64(Q+U.off,!0),he[R*3+1]=ie.getFloat64(Q+X.off,!0),he[R*3+2]=ie.getFloat64(Q+j.off,!0)):(he[R*3+0]=ie.getFloat32(Q+U.off,!0),he[R*3+1]=ie.getFloat32(Q+X.off,!0),he[R*3+2]=ie.getFloat32(Q+j.off,!0))}const Ue=pe+G.count*we,Me=Z.props.find(R=>R.isList);if(!Me)throw new Error("mesh PLY: face element has no list property");const Ie=T[Me.listCountType],ze=T[Me.listItemType];if(Ie!==1)throw new Error(`mesh PLY: unsupported face list count size ${Ie}`);let oe=Ue,de=0;for(let R=0;R<Z.count;R++){const Q=ie.getUint8(oe);Q===3&&de++,oe+=1+Q*ze}const J=new Uint32Array(de*3);oe=Ue;let ee=0;for(let R=0;R<Z.count;R++){const Q=ie.getUint8(oe);if(oe+=1,Q===3)for(let me=0;me<3;me++){const be=oe+me*ze;let Se;if(ze===4)Se=ie.getUint32(be,!0);else if(ze===2)Se=ie.getUint16(be,!0);else if(ze===1)Se=ie.getUint8(be);else throw new Error(`mesh PLY: unsupported face index size ${ze}`);J[ee++]=Se}oe+=Q*ze}return{positions:he,indices:J}}function Tc(r){const l=new DataView(r);if(r.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const _=l.getUint32(0,!0),S=l.getUint32(4,!0),w=_*12,M=S*4;if(r.byteLength<8+w+M)throw new Error(`mesh .bin: truncated (expected ${8+w+M} B, got ${r.byteLength} B)`);const B=new Float32Array(r.slice(8,8+w)),N=new Uint32Array(r.slice(8+w,8+w+M));return{positions:B,indices:N}}function _r(r,l){return(l??"").toLowerCase().endsWith(".ply")?Bc(r):Tc(r)}function mr(r,l){const _=r.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(_,0,l.positions);const S=r.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return r.queue.writeBuffer(S,0,l.indices),{vertexBuffer:_,indexBuffer:S,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function Dc(r,l){try{const _=await fetch(l);if(!_.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${_.status}`),null;const S=await _.arrayBuffer(),w=_r(S,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),mr(r,w)}catch(_){return console.warn(`[mesh-cull] load error for ${l}:`,_),null}}function Ac(r,l,_){try{const S=_r(l,_);return console.log(`[mesh-cull] loaded from bundle: ${S.positions.length/3} verts, ${S.indices.length/3} tris`),mr(r,S)}catch(S){return console.warn("[mesh-cull] parse error:",S),null}}const br="BITYMI01",Lc=0,Ic=1,zc=2,Uc=3,Gc=4,Rc=5,Vc=6;function Wn(r){const l=(r&32768)>>15,_=(r&31744)>>10,S=r&1023;return _===0?(l?-1:1)*Math.pow(2,-14)*(S/1024):_===31?S?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,_-15)*(1+S/1024)}function Ji(r,l,_,S,w,M){const B=(r-_.width*.5)/S.focal[0],N=-((l-_.height*.5)/S.focal[1]),T=S.rotation,A=T[0],F=T[4],G=T[8],Z=T[1],z=T[5],K=T[9],Y=T[2],q=T[6],ce=T[10];let U=B*A+N*Z+Y,X=B*F+N*z+q,j=B*G+N*K+ce;const ae=Math.hypot(U,X,j)||1;U/=ae,X/=ae,j/=ae;const W=S.position[0],he=S.position[1],ie=S.position[2],pe=M*.005,we=pe*pe,Ue=new Uint32Array(w.buffer,w.byteOffset,w.length),Me=w.length/8;let Ie=1/0,ze=0,oe=0,de=0,J=-1;for(let ee=0;ee<Me;ee++){const R=ee*8,Q=w[R+0]-W,me=w[R+1]-he,be=w[R+2]-ie,Se=Q*U+me*X+be*j;if(Se<=0)continue;const xe=Q-Se*U,Ce=me-Se*X,Ve=be-Se*j;if(xe*xe+Ce*Ce+Ve*Ve>=we||!(Ue[R+7]>>>16&1))continue;const g=Ue[R+5],o=Ue[R+6],h=Wn(g&65535),d=Wn(g>>>16&65535),b=Wn(o&65535),y=Wn(o>>>16&65535),C=Math.hypot(h,d,b,y)||1,E=h/C,i=d/C,m=b/C,u=y/C,p=2*(i*u+E*m),a=2*(m*u-E*i),f=1-2*(i*i+m*m),x=U*p+X*a+j*f;let v;Math.abs(x)>1e-6?(v=(Q*p+me*a+be*f)/x,(!isFinite(v)||v<=0)&&(v=Se)):v=Se,v<Ie&&(Ie=v,ze=W+v*U,oe=he+v*X,de=ie+v*j,J=ee)}return J<0?null:[ze,oe,de]}function vr(r){const l=new Uint8Array(r),_=new TextDecoder().decode(l.subarray(0,8));if(_!==br)throw new Error(`Not a BITYMI bundle (bad magic '${_}')`);const S=new DataView(r),w=S.getUint32(8,!0),M=12,B=20;let N=null,T=null,A=null,F=null;for(let G=0;G<w;G++){const Z=M+G*B,z=S.getUint32(Z+0,!0),K=Number(S.getBigUint64(Z+4,!0)),Y=Number(S.getBigUint64(Z+12,!0)),q=l.slice(K,K+Y).buffer;z===Lc||z===Ic||z===Rc?N=q:z===zc?T=q:z===Uc||z===Gc?A=q:z===Vc&&(F=q)}if(N===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:N,camerasBuffer:T,atlasBuffer:A,meshBuffer:F}}async function Oc(r,l){var B;const _=await fetch(r);if(!_.ok)throw new Error(`fetch failed: ${_.status} ${_.statusText}`);const S=(()=>{const N=_.headers.get("content-length");return N&&parseInt(N,10)||void 0})(),w=(B=_.body)==null?void 0:B.getReader();let M;if(!w)M=await _.arrayBuffer(),l&&l(M.byteLength,S,0);else{const N=[];let T=0,A=performance.now(),F=0;for(;;){const{done:z,value:K}=await w.read();if(z)break;N.push(K),T+=K.byteLength;const Y=performance.now();if(Y-A>=150&&l){const q=(T-F)/((Y-A)/1e3);l(T,S,q),A=Y,F=T}}const G=new Uint8Array(T);let Z=0;for(const z of N)G.set(z,Z),Z+=z.byteLength;M=G.buffer,l&&l(T,S,0)}return M.byteLength>=8&&new TextDecoder().decode(new Uint8Array(M,0,8))===br?{bundle:vr(M),rawPly:null}:{bundle:null,rawPly:M}}function Fc(r){return new Promise(l=>{const _=document.createElement("input");_.type="file",_.accept=r,_.style.display="none",_.onchange=()=>{var S;return l(((S=_.files)==null?void 0:S[0])??null)},document.body.appendChild(_),_.click(),setTimeout(()=>document.body.removeChild(_),1e3)})}function Nc(r,l,_){const S=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),M=document.getElementById("quick-links");w&&(w.onclick=async()=>{const F=await Fc(".ply,.bitymi");if(F)if(S&&(S.style.display="none"),F.name.toLowerCase().endsWith(".bitymi")){const G=await F.arrayBuffer(),{pcBuffer:Z}=vr(G),z=new File([Z],F.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),K=await ys(z,r);l(K)}else{const G=await ys(F,r);l(G)}}),M&&(M.innerHTML="");const B=new URLSearchParams(window.location.search),N=B.get("bundle")??B.get("model_url"),T=B.get("camera_url"),A=B.get("mesh_url");N&&(S&&(S.style.display="none"),_(N,T,A))}async function qc(r,l,_,S){const w=new ks(r,_),M=new Pc(w);let B=!1;r.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const N="rgba8unorm";l.configure({device:_,format:N,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const A=()=>{w.on_update_canvas(),T!==null&&$n(r.width,r.height,_,T.render_settings_buffer)};new ResizeObserver(()=>{const R=Math.max(.25,oe.render_scale),Q=Math.max(1,Math.ceil(R*r.clientWidth)),me=Math.max(1,Math.ceil(R*r.clientHeight));r.width===Q&&r.height===me||(r.width=Q,r.height=me,A())}).observe(r);let G=0,Z=0;const z=()=>{(r.width!==G||r.height!==Z)&&(G=r.width,Z=r.height,A())},K=new URLSearchParams(window.location.search);let q=K.get("animation")==="1";M.enabled=!q;const ce=K.get("camera_url"),U=K.get("mesh_cull"),X=U==="1"||U==="true",j=K.get("mesh_margin"),ae=j!==null?Number(j):NaN,W=Number.isFinite(ae)?ae:.03,he=K.get("mesh_debug"),ie=he==="1"||he==="true",pe=K.get("mesh_sample_mode"),we=pe!==null?parseInt(pe,10):NaN,Ue=Number.isFinite(we)&&we>=0&&we<=7?we:0,Me=K.get("mesh_silhouette"),Ie=Me==="1"||Me==="true",ze=Math.max(1,window.devicePixelRatio||1),oe={gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:X,mesh_margin:W,mesh_debug:ie,mesh_sample_mode:Ue,mesh_silhouette:Ie,render_scale:1},de=new $l.Pane({title:"Config",expanded:!0});de.addInput(oe,"animate",{label:"Animate"}).on("change",R=>{const Q=q;q=R.value,M.enabled=!R.value,!Q&&q&&J.value&&J.value.onAnimateStart(),Q&&!q&&J.value&&J.value.onAnimateStop()}),de.addInput(oe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const J={value:null};Nc(_,R=>ee(R,[],null,null),async(R,Q,me)=>{let be=Q??ce,Se,xe=null,Ce=null;const Ve=R.toLowerCase();if(Ve.endsWith(".bitymi")||Ve.includes(".bitymi?")){Bs("downloading bundle ...");try{const{bundle:V}=await Oc(R,(o,h,d)=>{const b=o/1048576,y=h?h/(1024*1024):void 0,C=d/(1024*1024),E=h?Math.min(99,Math.floor(o/h*100)):void 0,i=y?`total ${y.toFixed(1)} MB`:"total -- MB",m=y&&E!==void 0?`${b.toFixed(1)} MB downloaded (${E}%)`:`${b.toFixed(1)} MB downloaded`,u=`${C.toFixed(2)} MB/s`;Bt(`downloading bundle ...
${i}, ${m}
${u}`)});if(!V)throw new Error("Expected a .bitymi bundle");Bt("parsing PLY ...");const g=new File([V.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(Se=await ys(g,_),!be&&V.camerasBuffer&&(be=URL.createObjectURL(new Blob([V.camerasBuffer],{type:"application/json"}))),V.atlasBuffer){const o=V.atlasBuffer.byteLength/1048576;Bt(`uploading atlas ...
${o.toFixed(1)} MB BC7`);try{const h=Gl(V.atlasBuffer);xe=Fl(_,h,!0)}catch(h){console.warn("[atlas] failed to parse/upload atlas:",h)}}V.meshBuffer&&!me&&(Bt("uploading mesh ..."),Ce=Ac(_,V.meshBuffer,"bundle.mesh"))}catch(V){throw Pn(),V}}else Se=await Nl(R,_);me&&(Bt("loading mesh ..."),Ce=await Dc(_,me));const k=be?await mc(be):[];k.length>0&&w.set_preset(k[0]),ee(Se,k,xe,Ce)});function ee(R,Q=[],me=null,be=null){const Se=[(R.bbox.min[0]+R.bbox.max[0])/2,(R.bbox.min[1]+R.bbox.max[1])/2,(R.bbox.min[2]+R.bbox.max[2])/2];M.setBbox(R.bbox.min,R.bbox.max);const xe=.5*Math.sqrt((R.bbox.max[0]-R.bbox.min[0])**2+(R.bbox.max[1]-R.bbox.min[1])**2+(R.bbox.max[2]-R.bbox.min[2])**2);function Ce(re,fe){const ue=Ji(re,fe,r,w,R.surfel_data,xe);ue&&(M.setOrbitPivot(ue),console.log(`[pick] orbit pivot → (${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)})`))}function Ve(){const re=r.width*.5,fe=r.height*.5,ue=Ji(re,fe,r,w,R.surfel_data,xe);if(!ue)return;const De=w.rotation,Re=De[2],Ee=De[6],Ae=De[10],Oe=ue[0]-w.position[0],Ke=ue[1]-w.position[1],it=ue[2]-w.position[2],Fe=Oe*Re+Ke*Ee+it*Ae;Fe>0&&M.setOrbitDepth(Fe)}if(Q.length===0){const re=R.bbox.max[0]-R.bbox.min[0],fe=R.bbox.max[1]-R.bbox.min[1],ue=R.bbox.max[2]-R.bbox.min[2],Re=.5*Math.sqrt(re*re+fe*fe+ue*ue)*.5;I.set(Se[0]-Re,Se[1]-Re,Se[2]-Re,w.position);const Ee=I.create(Re,Re,Re);I.normalize(Ee,Ee);const Ae=I.create(0,1,0),Oe=I.create();I.cross(Ae,Ee,Oe),I.normalize(Oe,Oe);const Ke=I.create();I.cross(Ee,Oe,Ke);const it=xt.create(Oe[0],Ke[0],Ee[0],Oe[1],Ke[1],Ee[1],Oe[2],Ke[2],Ee[2]);dt.fromMat3(it,w.rotation),w.update_buffer()}M.setCenter(I.create(R.centroid[0],R.centroid[1],R.centroid[2]));const k=new hc(R,_,N,w.uniform_buffer,S,me,be);T=k,$n(r.width,r.height,_,k.render_settings_buffer),oe.atlas_enabled=me!==null,be===null&&(oe.mesh_cull=!1),k.setMeshCullEnabled(oe.mesh_cull),k.setMeshMargin(oe.mesh_margin),be===null&&(oe.mesh_debug=!1),k.setMeshOverlayEnabled(oe.mesh_debug),yn({meshSampleMode:oe.mesh_sample_mode,meshSilhouetteCull:oe.mesh_silhouette},_,k.render_settings_buffer),console.log(`[mesh-cull] ${be!==null?"mesh loaded":"no mesh"} · toggle=${oe.mesh_cull} · margin=${oe.mesh_margin}m · debug=${oe.mesh_debug} · sample_mode=${oe.mesh_sample_mode} · silhouette=${oe.mesh_silhouette}`);let V=!1;const g=(()=>{if(me!==null)return`${me.meta.format===2?"BC7":me.meta.format===3?"ASTC 4×4":me.meta.format===5?"RVQ-paired (typeA)":me.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":me.meta.format===7?"BC7 codebook gather (typeD)":`format=${me.meta.format}`} ${me.meta.width}×${me.meta.height}, ${me.meta.n_layers} layers`;const re=_.features.has("texture-compression-bc"),fe=_.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(re?["BC7"]:[]).concat(fe?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",g),Zi(R.sh_bias,_,k.render_settings_buffer),Yi(oe.gaussian_scaling,_,k.render_settings_buffer),oe.sh_bias=R.sh_bias;const o=R.num_points.toLocaleString(),h={stats:`${o} surfels · -- fps`};de.addMonitor(h,"stats",{label:"Stats",interval:200}),de.addMonitor({atlas:g},"atlas",{label:"Atlas"});const d={stages:"— ms · awaiting timestamp data"};de.addMonitor(d,"stages",{label:"Stages",interval:500});let b=null;if(k.timeQueryEnabled){b=document.createElement("canvas"),b.width=280,b.height=24,b.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(b);const re=ue=>{const De=b.getContext("2d");if(!De)return;const Re=b.width,Ee=b.height;if(De.clearRect(0,0,Re,Ee),!ue||ue.total<=0){De.fillStyle="#888",De.font="11px ui-monospace,Menlo,monospace",De.fillText("awaiting GPU timestamps…",8,16);return}const Ae=[{label:"cull",ms:ue.cull,color:"#3aa3ff"},{label:"pre",ms:ue.preprocess,color:"#3ad27a"},{label:"sort",ms:ue.sort,color:"#ffa53a"},{label:"render",ms:ue.render,color:"#ff5566"}],Oe=Math.max(.001,Ae.reduce((it,Fe)=>it+Fe.ms,0));let Ke=0;De.font="10px ui-monospace,Menlo,monospace",De.textBaseline="middle";for(const it of Ae){const Fe=it.ms/Oe*Re;De.fillStyle=it.color,De.fillRect(Ke,0,Fe,Ee),Fe>=38&&(De.fillStyle="#000c",De.fillText(`${it.label} ${it.ms.toFixed(1)}`,Ke+4,Ee/2)),Ke+=Fe}};setInterval(()=>{V||k.readPerfMetrics({silent:!0}).then(()=>{const ue=k.lastStageBreakdownMs;re(ue),ue&&(d.stages=`${ue.total.toFixed(1)} ms · cull ${ue.cull.toFixed(1)} / pre ${ue.preprocess.toFixed(1)} / sort ${ue.sort.toFixed(1)} / render ${ue.render.toFixed(1)}`)}).catch(ue=>console.warn("[perf] readPerfMetrics failed:",ue))},500)}const y=.4,C=3,E=.3;let i=null,m=0,u=0;const p=ht.create(),a=xt.create();let f=Q.length>0?0:-1;const x={view:Q.length>0?`${f+1} / ${Q.length}: ${Q[f].img_name??f}`:"— no presets —"};de.addMonitor(x,"view",{label:"View",interval:100});function v(re){const fe=xt.create(re[0],re[1],re[2],re[4],re[5],re[6],re[8],re[9],re[10]);return ht.fromMat(fe)}function L(re,fe){i={fromPos:I.clone(w.position),toPos:I.clone(re.position),fromQuat:ht.normalize(v(w.rotation)),toQuat:ht.normalize(v(re.rotation)),target:re,t:0,duration:Math.max(.01,fe)}}const O=(re,fe=!0)=>{if(Q.length===0)return;f=(re%Q.length+Q.length)%Q.length;const ue=Q[f];fe?L(ue,y):(w.set_preset(ue),M.resetToCamera(),Ve()),x.view=`${f+1} / ${Q.length}: ${Q[f].img_name??f}`};Q.length>0&&(de.addButton({title:"◀ Prev view"}).on("click",()=>O(f-1)),de.addButton({title:"Next view ▶"}).on("click",()=>O(f+1)));const $=Q.length>0?hr(Q,{tiltDownDeg:15,alignFirst:!0}):null,le=$?Mc(Q,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ne=0;const se=12;J.value={onAnimateStart:()=>{ne=0},onAnimateStop:()=>{M.resetToCamera(),Ve()}},de.addInput(oe,"render_scale",{label:"Render scale",min:.25,max:ze,step:.25}).on("change",re=>{const fe=Math.max(.25,re.value),ue=Math.max(1,Math.ceil(fe*r.clientWidth)),De=Math.max(1,Math.ceil(fe*r.clientHeight));(r.width!==ue||r.height!==De)&&(r.width=ue,r.height=De,A())}),de.addInput(oe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",re=>Yi(re.value,_,k.render_settings_buffer)),de.addInput(oe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",re=>Zi(re.value,_,k.render_settings_buffer)),de.addInput(oe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",re=>{k.bgColor=[re.value.r,re.value.g,re.value.b,re.value.a]});const ve=me?me.meta.format===3?"Atlas (ASTC)":me.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";de.addInput(oe,"atlas_enabled",{label:ve}).on("change",re=>k.setAtlasEnabled(re.value)),de.addInput(oe,"bfc",{label:"Backface"}).on("change",re=>yn({bfc:re.value},_,k.render_settings_buffer));const ye=de.addInput(oe,"mesh_cull",{label:"Mesh cull"});ye.on("change",re=>k.setMeshCullEnabled(re.value)),k.hasMesh||(ye.disabled=!0);const _e=de.addInput(oe,"mesh_margin",{label:"Mesh margin (m)",min:-.5,max:.5,step:.005});_e.on("change",re=>k.setMeshMargin(re.value)),k.hasMesh||(_e.disabled=!0);const ge=de.addInput(oe,"mesh_debug",{label:"Mesh debug"});ge.on("change",re=>k.setMeshOverlayEnabled(re.value)),k.hasMesh||(ge.disabled=!0);const Te=de.addInput(oe,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});Te.on("change",re=>yn({meshSampleMode:re.value},_,k.render_settings_buffer)),k.hasMesh||(Te.disabled=!0);const Be=de.addInput(oe,"mesh_silhouette",{label:"Silhouette cull"});Be.on("change",re=>yn({meshSilhouetteCull:re.value},_,k.render_settings_buffer)),k.hasMesh||(Be.disabled=!0),de.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(Q.length>0)w.set_preset(Q[0]);else{const re=R.bbox.max[0]-R.bbox.min[0],fe=R.bbox.max[1]-R.bbox.min[1],ue=R.bbox.max[2]-R.bbox.min[2],Re=.5*Math.sqrt(re*re+fe*fe+ue*ue)*.5;I.set(Se[0]-Re,Se[1]-Re,Se[2]-Re,w.position);const Ee=I.create(Re,Re,Re);I.normalize(Ee,Ee);const Ae=I.create();I.cross(I.create(0,1,0),Ee,Ae),I.normalize(Ae,Ae);const Oe=I.create();I.cross(Ee,Ae,Oe);const Ke=xt.create(Ae[0],Oe[0],Ee[0],Ae[1],Oe[1],Ee[1],Ae[2],Oe[2],Ee[2]);dt.fromMat3(Ke,w.rotation),w.update_buffer()}M.resetToCamera(),Ve()});const $e={result:"— click Benchmark —"};de.addMonitor($e,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Ye={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function Ze(){const fe=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ue of Object.keys(Ye))if(fe.startsWith(ue))return ue;return null}const je=document.createElement("div");je.id="bench-overlay",je.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(je);function Je(re,fe,ue){const De=Math.floor(fe/Math.max(1,ue)*100),Re=32,Ee=Math.floor(fe/Math.max(1,ue)*Re),Ae="█".repeat(Ee)+"░".repeat(Re-Ee);je.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${re}</div><div>[${Ae}] ${De}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${fe} / ${ue} frames · offscreen · pipelined · no vsync</div>`,je.style.display="block"}function ot(){je.style.display="none"}async function at(re=10,fe=200){if(V)return;if(Q.length===0){$e.result="no cameras to benchmark";return}V=!0;const ue=q,De=oe.animate,Re=new Float32Array(w.position),Ee=new Float32Array(w.rotation);q=!1,oe.animate=!1,de.refresh(),i=null,M.enabled=!1;const Ae=Ze(),Oe=Ae?Ye[Ae]:null,Ke=(Oe==null?void 0:Oe.w)??r.width,it=(Oe==null?void 0:Oe.h)??r.height,Fe=(Oe==null?void 0:Oe.fovY)??w.getFov(),En=Ae?`${Ae} · ${Ke>=4e3/4+500?"images_4":"images_2"}`:"custom",kn=r.width,Zt=r.height,Zn=w.getFov();r.width=Ke,r.height=it,w.setFov(Fe),$n(Ke,it,_,k.render_settings_buffer);const Pt=_.createTexture({size:[Ke,it,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Mn=Pt.createView(),Bn=()=>{const lt=_.createCommandEncoder();k.frame(lt,Mn,!1),_.queue.submit([lt.finish()])},Tn=()=>new Promise(lt=>setTimeout(lt,0)),Dn=20,An=async(lt,Gt)=>{let Xt=0,yt=0;for(Je(Gt,0,lt),await Tn();yt<lt;){const Rt=Math.min(Dn,lt-yt),Vt=performance.now();for(let an=0;an<Rt;an++)w.set_preset(Q[(yt+an)%Q.length]),Bn();await _.queue.onSubmittedWorkDone();const Ln=performance.now();Xt+=Ln-Vt,yt+=Rt,Je(Gt,yt,lt),await Tn()}return Xt};try{await An(re,"Warming up");const Gt=await An(fe,"Benchmarking")/fe,Xt=1e3/Gt,yt=R.num_points??R.surfel_data.length/8,Rt=(Fe*180/Math.PI).toFixed(1),Vt=`${Xt.toFixed(1)} FPS  (${Gt.toFixed(2)} ms/frame)
${Ke}×${it} · fovY ${Rt}° · ${En}
${yt.toLocaleString()} surfels · ${re}w+${fe}b · pipelined`;$e.result=Vt,console.log("[bench]",Vt.replace(/\n/g,"  |  "))}catch(lt){console.error("[bench] failed:",lt),$e.result=`bench failed: ${lt}`}finally{ot(),Pt.destroy(),r.width=kn,r.height=Zt,w.setFov(Zn),$n(kn,Zt,_,k.render_settings_buffer),w.position.set(Re),w.rotation.set(Ee),w.update_buffer(),M.enabled=!ue,q=ue,oe.animate=De,de.refresh(),V=!1}}de.addButton({title:"📊 Benchmark"}).on("click",()=>at()),document.addEventListener("keydown",re=>{const fe=re.key;if(fe>="0"&&fe<="9"&&Q.length>0){const ue=parseInt(fe);ue<Q.length&&O(ue)}else fe==="ArrowLeft"||fe==="PageUp"?(O(f-1),re.preventDefault()):fe==="ArrowRight"||fe==="PageDown"?(O(f+1),re.preventDefault()):(fe==="d"||fe==="D")&&k.debugReadSortedIndices(30).catch(ue=>console.error("[DEBUG] readback failed:",ue))});function rt(re,fe){const ue=r.getBoundingClientRect(),De=window.devicePixelRatio||1;return[(re-ue.left)*De,(fe-ue.top)*De]}r.addEventListener("dblclick",re=>{const[fe,ue]=rt(re.clientX,re.clientY);Ce(fe,ue)});let et=0,tt=0,nt=0;r.addEventListener("pointerdown",re=>{if(re.pointerType!=="touch")return;const fe=performance.now(),ue=fe-et,De=re.clientX-tt,Re=re.clientY-nt;if(ue>0&&ue<300&&De*De+Re*Re<40*40){const[Ee,Ae]=rt(re.clientX,re.clientY);Ce(Ee,Ae),et=0}else et=fe,tt=re.clientX,nt=re.clientY});function We(){return B}let st=performance.now(),He=60,ut=Promise.resolve(),Xe=0;async function vt(){var Re;const re=performance.now(),fe=Math.min((re-st)/1e3,.1);if(st=re,fe>0){const Ee=((Re=k.lastStageBreakdownMs)==null?void 0:Re.total)??0,Ae=Ee>.5?1e3/Ee:1/fe;He=He*.9+Ae*.1,h.stats=`${o} surfels · ${Math.round(He)} fps`}if(V){requestAnimationFrame(vt);return}if(We()&&(i||q)&&(i=null,M.resetToCamera(),Ve(),q&&(q=!1,oe.animate=!1,de.refresh())),q&&oe.animateMode==="circle"&&$){ne+=fe/se,ne>=1&&(ne-=1);const Ee=fr($,ne);w.set_preset(Ee),M.update(fe);const Ae=_.createCommandEncoder();k.frame(Ae,l.getCurrentTexture().createView()),_.queue.submit([Ae.finish()]),Xe++,Xe===2&&Pn(),requestAnimationFrame(vt);return}if(i){i.t+=fe/i.duration;const Ee=Math.min(1,i.t),Ae=Ee*Ee*(3-2*Ee);I.lerp(i.fromPos,i.toPos,Ae,w.position),ht.slerp(i.fromQuat,i.toQuat,Ae,p),xt.fromQuat(p,a),dt.fromMat3(a,w.rotation),w.update_buffer(),i.t>=1&&(w.set_preset(i.target),i=null,q?Q.length>0&&(m=E):(M.resetToCamera(),Ve()))}else if(q&&!We()){const Ee=oe.animateMode==="circle"&&le.length>0,Ae=Ee?le:Q;if(Ae.length!==0){if(m-=fe,m<=0){const Ke=((Ee?u:f)+1)%Ae.length;Ee?u=Ke:f=Ke;const it=Ee?C/8:C;L(Ae[Ke],it),Ee||(x.view=`${f+1} / ${Q.length}: ${Q[f].img_name??f}`)}}}M.update(fe),z(),await ut;const ue=_.createCommandEncoder(),De=l.getCurrentTexture().createView();k.frame(ue,De),_.queue.submit([ue.finish()]),ut=_.queue.onSubmittedWorkDone(),Xe++,Xe===2&&Pn(),requestAnimationFrame(vt)}requestAnimationFrame(vt)}}(function(){let l="dev";for(const S of Array.from(document.querySelectorAll('script[type="module"]'))){const M=S.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(M){l=M[1];break}}const _=document.createElement("div");_.textContent="v "+l,_.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(_.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(_)})();(async()=>{if(navigator.gpu===void 0){const M=document.querySelector("#title");M.innerText="WebGPU is not supported in this browser.";return}const r=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(r===null){const M=document.querySelector("#title");M.innerText="No adapter is available for WebGPU.";return}const l=[];r.features.has("timestamp-query")&&l.push("timestamp-query"),r.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),r.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",r.info??"(unknown)"),console.log("[adapter] features:",Array.from(r.features)),console.log("[adapter] BC7:",r.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",r.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:r.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxTextureDimension2D:r.limits.maxTextureDimension2D});const _=await r.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize}}),S=document.querySelector("#webgpu-canvas");Il(S!==null);const w=S.getContext("webgpu");qc(S,w,_,l)})();
