var wl=Object.defineProperty;var xl=(r,l,f)=>l in r?wl(r,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[l]=f;var Y=(r,l,f)=>(xl(r,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))C(w);new MutationObserver(w=>{for(const k of w)if(k.type==="childList")for(const M of k.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&C(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const k={};return w.integrity&&(k.integrity=w.integrity),w.referrerPolicy&&(k.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?k.credentials="include":w.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function C(w){if(w.ep)return;w.ep=!0;const k=f(w);fetch(w.href,k)}})();function yl(r,l){return class extends r{constructor(...f){super(...f),l(this)}}}const Pl=yl(Array,r=>r.fill(0));let Le=1e-6;function Sl(r){function l(y=0,S=0){const E=new r(2);return y!==void 0&&(E[0]=y,S!==void 0&&(E[1]=S)),E}const f=l;function C(y,S,E){const i=E??new r(2);return i[0]=y,i[1]=S,i}function w(y,S){const E=S??new r(2);return E[0]=Math.ceil(y[0]),E[1]=Math.ceil(y[1]),E}function k(y,S){const E=S??new r(2);return E[0]=Math.floor(y[0]),E[1]=Math.floor(y[1]),E}function M(y,S){const E=S??new r(2);return E[0]=Math.round(y[0]),E[1]=Math.round(y[1]),E}function N(y,S=0,E=1,i){const m=i??new r(2);return m[0]=Math.min(E,Math.max(S,y[0])),m[1]=Math.min(E,Math.max(S,y[1])),m}function T(y,S,E){const i=E??new r(2);return i[0]=y[0]+S[0],i[1]=y[1]+S[1],i}function A(y,S,E,i){const m=i??new r(2);return m[0]=y[0]+S[0]*E,m[1]=y[1]+S[1]*E,m}function V(y,S){const E=y[0],i=y[1],m=S[0],u=S[1],p=Math.sqrt(E*E+i*i),a=Math.sqrt(m*m+u*u),_=p*a,x=_&&de(y,S)/_;return Math.acos(x)}function G(y,S,E){const i=E??new r(2);return i[0]=y[0]-S[0],i[1]=y[1]-S[1],i}const X=G;function z(y,S){return Math.abs(y[0]-S[0])<Le&&Math.abs(y[1]-S[1])<Le}function H(y,S){return y[0]===S[0]&&y[1]===S[1]}function Z(y,S,E,i){const m=i??new r(2);return m[0]=y[0]+E*(S[0]-y[0]),m[1]=y[1]+E*(S[1]-y[1]),m}function q(y,S,E,i){const m=i??new r(2);return m[0]=y[0]+E[0]*(S[0]-y[0]),m[1]=y[1]+E[1]*(S[1]-y[1]),m}function ce(y,S,E){const i=E??new r(2);return i[0]=Math.max(y[0],S[0]),i[1]=Math.max(y[1],S[1]),i}function U(y,S,E){const i=E??new r(2);return i[0]=Math.min(y[0],S[0]),i[1]=Math.min(y[1],S[1]),i}function Q(y,S,E){const i=E??new r(2);return i[0]=y[0]*S,i[1]=y[1]*S,i}const K=Q;function le(y,S,E){const i=E??new r(2);return i[0]=y[0]/S,i[1]=y[1]/S,i}function W(y,S){const E=S??new r(2);return E[0]=1/y[0],E[1]=1/y[1],E}const he=W;function ne(y,S,E){const i=E??new r(3),m=y[0]*S[1]-y[1]*S[0];return i[0]=0,i[1]=0,i[2]=m,i}function de(y,S){return y[0]*S[0]+y[1]*S[1]}function we(y){const S=y[0],E=y[1];return Math.sqrt(S*S+E*E)}const Ge=we;function Be(y){const S=y[0],E=y[1];return S*S+E*E}const ze=Be;function De(y,S){const E=y[0]-S[0],i=y[1]-S[1];return Math.sqrt(E*E+i*i)}const ye=De;function Me(y,S){const E=y[0]-S[0],i=y[1]-S[1];return E*E+i*i}const R=Me;function j(y,S){const E=S??new r(2),i=y[0],m=y[1],u=Math.sqrt(i*i+m*m);return u>1e-5?(E[0]=i/u,E[1]=m/u):(E[0]=0,E[1]=0),E}function te(y,S){const E=S??new r(2);return E[0]=-y[0],E[1]=-y[1],E}function pe(y,S){const E=S??new r(2);return E[0]=y[0],E[1]=y[1],E}const ie=pe;function oe(y,S,E){const i=E??new r(2);return i[0]=y[0]*S[0],i[1]=y[1]*S[1],i}const me=oe;function be(y,S,E){const i=E??new r(2);return i[0]=y[0]/S[0],i[1]=y[1]/S[1],i}const xe=be;function Oe(y=1,S){const E=S??new r(2),i=Math.random()*2*Math.PI;return E[0]=Math.cos(i)*y,E[1]=Math.sin(i)*y,E}function B(y){const S=y??new r(2);return S[0]=0,S[1]=0,S}function O(y,S,E){const i=E??new r(2),m=y[0],u=y[1];return i[0]=m*S[0]+u*S[4]+S[12],i[1]=m*S[1]+u*S[5]+S[13],i}function v(y,S,E){const i=E??new r(2),m=y[0],u=y[1];return i[0]=S[0]*m+S[4]*u+S[8],i[1]=S[1]*m+S[5]*u+S[9],i}function o(y,S,E,i){const m=i??new r(2),u=y[0]-S[0],p=y[1]-S[1],a=Math.sin(E),_=Math.cos(E);return m[0]=u*_-p*a+S[0],m[1]=u*a+p*_+S[1],m}function h(y,S,E){const i=E??new r(2);return j(y,i),Q(i,S,i)}function d(y,S,E){const i=E??new r(2);return we(y)>S?h(y,S,i):pe(y,i)}function g(y,S,E){const i=E??new r(2);return Z(y,S,.5,i)}return{create:l,fromValues:f,set:C,ceil:w,floor:k,round:M,clamp:N,add:T,addScaled:A,angle:V,subtract:G,sub:X,equalsApproximately:z,equals:H,lerp:Z,lerpV:q,max:ce,min:U,mulScalar:Q,scale:K,divScalar:le,inverse:W,invert:he,cross:ne,dot:de,length:we,len:Ge,lengthSq:Be,lenSq:ze,distance:De,dist:ye,distanceSq:Me,distSq:R,normalize:j,negate:te,copy:pe,clone:ie,multiply:oe,mul:me,divide:be,div:xe,random:Oe,zero:B,transformMat4:O,transformMat3:v,rotate:o,setLength:h,truncate:d,midpoint:g}}const Ri=new Map;function nr(r){let l=Ri.get(r);return l||(l=Sl(r),Ri.set(r,l)),l}function Cl(r){function l(a,_,x){const b=new r(3);return a!==void 0&&(b[0]=a,_!==void 0&&(b[1]=_,x!==void 0&&(b[2]=x))),b}const f=l;function C(a,_,x,b){const I=b??new r(3);return I[0]=a,I[1]=_,I[2]=x,I}function w(a,_){const x=_??new r(3);return x[0]=Math.ceil(a[0]),x[1]=Math.ceil(a[1]),x[2]=Math.ceil(a[2]),x}function k(a,_){const x=_??new r(3);return x[0]=Math.floor(a[0]),x[1]=Math.floor(a[1]),x[2]=Math.floor(a[2]),x}function M(a,_){const x=_??new r(3);return x[0]=Math.round(a[0]),x[1]=Math.round(a[1]),x[2]=Math.round(a[2]),x}function N(a,_=0,x=1,b){const I=b??new r(3);return I[0]=Math.min(x,Math.max(_,a[0])),I[1]=Math.min(x,Math.max(_,a[1])),I[2]=Math.min(x,Math.max(_,a[2])),I}function T(a,_,x){const b=x??new r(3);return b[0]=a[0]+_[0],b[1]=a[1]+_[1],b[2]=a[2]+_[2],b}function A(a,_,x,b){const I=b??new r(3);return I[0]=a[0]+_[0]*x,I[1]=a[1]+_[1]*x,I[2]=a[2]+_[2]*x,I}function V(a,_){const x=a[0],b=a[1],I=a[2],F=_[0],$=_[1],ae=_[2],se=Math.sqrt(x*x+b*b+I*I),ee=Math.sqrt(F*F+$*$+ae*ae),fe=se*ee,Pe=fe&&de(a,_)/fe;return Math.acos(Pe)}function G(a,_,x){const b=x??new r(3);return b[0]=a[0]-_[0],b[1]=a[1]-_[1],b[2]=a[2]-_[2],b}const X=G;function z(a,_){return Math.abs(a[0]-_[0])<Le&&Math.abs(a[1]-_[1])<Le&&Math.abs(a[2]-_[2])<Le}function H(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function Z(a,_,x,b){const I=b??new r(3);return I[0]=a[0]+x*(_[0]-a[0]),I[1]=a[1]+x*(_[1]-a[1]),I[2]=a[2]+x*(_[2]-a[2]),I}function q(a,_,x,b){const I=b??new r(3);return I[0]=a[0]+x[0]*(_[0]-a[0]),I[1]=a[1]+x[1]*(_[1]-a[1]),I[2]=a[2]+x[2]*(_[2]-a[2]),I}function ce(a,_,x){const b=x??new r(3);return b[0]=Math.max(a[0],_[0]),b[1]=Math.max(a[1],_[1]),b[2]=Math.max(a[2],_[2]),b}function U(a,_,x){const b=x??new r(3);return b[0]=Math.min(a[0],_[0]),b[1]=Math.min(a[1],_[1]),b[2]=Math.min(a[2],_[2]),b}function Q(a,_,x){const b=x??new r(3);return b[0]=a[0]*_,b[1]=a[1]*_,b[2]=a[2]*_,b}const K=Q;function le(a,_,x){const b=x??new r(3);return b[0]=a[0]/_,b[1]=a[1]/_,b[2]=a[2]/_,b}function W(a,_){const x=_??new r(3);return x[0]=1/a[0],x[1]=1/a[1],x[2]=1/a[2],x}const he=W;function ne(a,_,x){const b=x??new r(3),I=a[2]*_[0]-a[0]*_[2],F=a[0]*_[1]-a[1]*_[0];return b[0]=a[1]*_[2]-a[2]*_[1],b[1]=I,b[2]=F,b}function de(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function we(a){const _=a[0],x=a[1],b=a[2];return Math.sqrt(_*_+x*x+b*b)}const Ge=we;function Be(a){const _=a[0],x=a[1],b=a[2];return _*_+x*x+b*b}const ze=Be;function De(a,_){const x=a[0]-_[0],b=a[1]-_[1],I=a[2]-_[2];return Math.sqrt(x*x+b*b+I*I)}const ye=De;function Me(a,_){const x=a[0]-_[0],b=a[1]-_[1],I=a[2]-_[2];return x*x+b*b+I*I}const R=Me;function j(a,_){const x=_??new r(3),b=a[0],I=a[1],F=a[2],$=Math.sqrt(b*b+I*I+F*F);return $>1e-5?(x[0]=b/$,x[1]=I/$,x[2]=F/$):(x[0]=0,x[1]=0,x[2]=0),x}function te(a,_){const x=_??new r(3);return x[0]=-a[0],x[1]=-a[1],x[2]=-a[2],x}function pe(a,_){const x=_??new r(3);return x[0]=a[0],x[1]=a[1],x[2]=a[2],x}const ie=pe;function oe(a,_,x){const b=x??new r(3);return b[0]=a[0]*_[0],b[1]=a[1]*_[1],b[2]=a[2]*_[2],b}const me=oe;function be(a,_,x){const b=x??new r(3);return b[0]=a[0]/_[0],b[1]=a[1]/_[1],b[2]=a[2]/_[2],b}const xe=be;function Oe(a=1,_){const x=_??new r(3),b=Math.random()*2*Math.PI,I=Math.random()*2-1,F=Math.sqrt(1-I*I)*a;return x[0]=Math.cos(b)*F,x[1]=Math.sin(b)*F,x[2]=I*a,x}function B(a){const _=a??new r(3);return _[0]=0,_[1]=0,_[2]=0,_}function O(a,_,x){const b=x??new r(3),I=a[0],F=a[1],$=a[2],ae=_[3]*I+_[7]*F+_[11]*$+_[15]||1;return b[0]=(_[0]*I+_[4]*F+_[8]*$+_[12])/ae,b[1]=(_[1]*I+_[5]*F+_[9]*$+_[13])/ae,b[2]=(_[2]*I+_[6]*F+_[10]*$+_[14])/ae,b}function v(a,_,x){const b=x??new r(3),I=a[0],F=a[1],$=a[2];return b[0]=I*_[0*4+0]+F*_[1*4+0]+$*_[2*4+0],b[1]=I*_[0*4+1]+F*_[1*4+1]+$*_[2*4+1],b[2]=I*_[0*4+2]+F*_[1*4+2]+$*_[2*4+2],b}function o(a,_,x){const b=x??new r(3),I=a[0],F=a[1],$=a[2];return b[0]=I*_[0]+F*_[4]+$*_[8],b[1]=I*_[1]+F*_[5]+$*_[9],b[2]=I*_[2]+F*_[6]+$*_[10],b}function h(a,_,x){const b=x??new r(3),I=_[0],F=_[1],$=_[2],ae=_[3]*2,se=a[0],ee=a[1],fe=a[2],Pe=F*fe-$*ee,ve=$*se-I*fe,ge=I*ee-F*se;return b[0]=se+Pe*ae+(F*ge-$*ve)*2,b[1]=ee+ve*ae+($*Pe-I*ge)*2,b[2]=fe+ge*ae+(I*ve-F*Pe)*2,b}function d(a,_){const x=_??new r(3);return x[0]=a[12],x[1]=a[13],x[2]=a[14],x}function g(a,_,x){const b=x??new r(3),I=_*4;return b[0]=a[I+0],b[1]=a[I+1],b[2]=a[I+2],b}function y(a,_){const x=_??new r(3),b=a[0],I=a[1],F=a[2],$=a[4],ae=a[5],se=a[6],ee=a[8],fe=a[9],Pe=a[10];return x[0]=Math.sqrt(b*b+I*I+F*F),x[1]=Math.sqrt($*$+ae*ae+se*se),x[2]=Math.sqrt(ee*ee+fe*fe+Pe*Pe),x}function S(a,_,x,b){const I=b??new r(3),F=[],$=[];return F[0]=a[0]-_[0],F[1]=a[1]-_[1],F[2]=a[2]-_[2],$[0]=F[0],$[1]=F[1]*Math.cos(x)-F[2]*Math.sin(x),$[2]=F[1]*Math.sin(x)+F[2]*Math.cos(x),I[0]=$[0]+_[0],I[1]=$[1]+_[1],I[2]=$[2]+_[2],I}function E(a,_,x,b){const I=b??new r(3),F=[],$=[];return F[0]=a[0]-_[0],F[1]=a[1]-_[1],F[2]=a[2]-_[2],$[0]=F[2]*Math.sin(x)+F[0]*Math.cos(x),$[1]=F[1],$[2]=F[2]*Math.cos(x)-F[0]*Math.sin(x),I[0]=$[0]+_[0],I[1]=$[1]+_[1],I[2]=$[2]+_[2],I}function i(a,_,x,b){const I=b??new r(3),F=[],$=[];return F[0]=a[0]-_[0],F[1]=a[1]-_[1],F[2]=a[2]-_[2],$[0]=F[0]*Math.cos(x)-F[1]*Math.sin(x),$[1]=F[0]*Math.sin(x)+F[1]*Math.cos(x),$[2]=F[2],I[0]=$[0]+_[0],I[1]=$[1]+_[1],I[2]=$[2]+_[2],I}function m(a,_,x){const b=x??new r(3);return j(a,b),Q(b,_,b)}function u(a,_,x){const b=x??new r(3);return we(a)>_?m(a,_,b):pe(a,b)}function p(a,_,x){const b=x??new r(3);return Z(a,_,.5,b)}return{create:l,fromValues:f,set:C,ceil:w,floor:k,round:M,clamp:N,add:T,addScaled:A,angle:V,subtract:G,sub:X,equalsApproximately:z,equals:H,lerp:Z,lerpV:q,max:ce,min:U,mulScalar:Q,scale:K,divScalar:le,inverse:W,invert:he,cross:ne,dot:de,length:we,len:Ge,lengthSq:Be,lenSq:ze,distance:De,dist:ye,distanceSq:Me,distSq:R,normalize:j,negate:te,copy:pe,clone:ie,multiply:oe,mul:me,divide:be,div:xe,random:Oe,zero:B,transformMat4:O,transformMat4Upper3x3:v,transformMat3:o,transformQuat:h,getTranslation:d,getAxis:g,getScaling:y,rotateX:S,rotateY:E,rotateZ:i,setLength:m,truncate:u,midpoint:p}}const Vi=new Map;function Kn(r){let l=Vi.get(r);return l||(l=Cl(r),Vi.set(r,l)),l}function El(r){const l=nr(r),f=Kn(r);function C(o,h,d,g,y,S,E,i,m){const u=new r(12);return u[3]=0,u[7]=0,u[11]=0,o!==void 0&&(u[0]=o,h!==void 0&&(u[1]=h,d!==void 0&&(u[2]=d,g!==void 0&&(u[4]=g,y!==void 0&&(u[5]=y,S!==void 0&&(u[6]=S,E!==void 0&&(u[8]=E,i!==void 0&&(u[9]=i,m!==void 0&&(u[10]=m))))))))),u}function w(o,h,d,g,y,S,E,i,m,u){const p=u??new r(12);return p[0]=o,p[1]=h,p[2]=d,p[3]=0,p[4]=g,p[5]=y,p[6]=S,p[7]=0,p[8]=E,p[9]=i,p[10]=m,p[11]=0,p}function k(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[3]=0,d[4]=o[4],d[5]=o[5],d[6]=o[6],d[7]=0,d[8]=o[8],d[9]=o[9],d[10]=o[10],d[11]=0,d}function M(o,h){const d=h??new r(12),g=o[0],y=o[1],S=o[2],E=o[3],i=g+g,m=y+y,u=S+S,p=g*i,a=y*i,_=y*m,x=S*i,b=S*m,I=S*u,F=E*i,$=E*m,ae=E*u;return d[0]=1-_-I,d[1]=a+ae,d[2]=x-$,d[3]=0,d[4]=a-ae,d[5]=1-p-I,d[6]=b+F,d[7]=0,d[8]=x+$,d[9]=b-F,d[10]=1-p-_,d[11]=0,d}function N(o,h){const d=h??new r(12);return d[0]=-o[0],d[1]=-o[1],d[2]=-o[2],d[4]=-o[4],d[5]=-o[5],d[6]=-o[6],d[8]=-o[8],d[9]=-o[9],d[10]=-o[10],d}function T(o,h,d){const g=d??new r(12);return g[0]=o[0]*h,g[1]=o[1]*h,g[2]=o[2]*h,g[4]=o[4]*h,g[5]=o[5]*h,g[6]=o[6]*h,g[8]=o[8]*h,g[9]=o[9]*h,g[10]=o[10]*h,g}const A=T;function V(o,h,d){const g=d??new r(12);return g[0]=o[0]+h[0],g[1]=o[1]+h[1],g[2]=o[2]+h[2],g[4]=o[4]+h[4],g[5]=o[5]+h[5],g[6]=o[6]+h[6],g[8]=o[8]+h[8],g[9]=o[9]+h[9],g[10]=o[10]+h[10],g}function G(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=o[1],d[2]=o[2],d[4]=o[4],d[5]=o[5],d[6]=o[6],d[8]=o[8],d[9]=o[9],d[10]=o[10],d}const X=G;function z(o,h){return Math.abs(o[0]-h[0])<Le&&Math.abs(o[1]-h[1])<Le&&Math.abs(o[2]-h[2])<Le&&Math.abs(o[4]-h[4])<Le&&Math.abs(o[5]-h[5])<Le&&Math.abs(o[6]-h[6])<Le&&Math.abs(o[8]-h[8])<Le&&Math.abs(o[9]-h[9])<Le&&Math.abs(o[10]-h[10])<Le}function H(o,h){return o[0]===h[0]&&o[1]===h[1]&&o[2]===h[2]&&o[4]===h[4]&&o[5]===h[5]&&o[6]===h[6]&&o[8]===h[8]&&o[9]===h[9]&&o[10]===h[10]}function Z(o){const h=o??new r(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function q(o,h){const d=h??new r(12);if(d===o){let _;return _=o[1],o[1]=o[4],o[4]=_,_=o[2],o[2]=o[8],o[8]=_,_=o[6],o[6]=o[9],o[9]=_,d}const g=o[0*4+0],y=o[0*4+1],S=o[0*4+2],E=o[1*4+0],i=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2];return d[0]=g,d[1]=E,d[2]=u,d[4]=y,d[5]=i,d[6]=p,d[8]=S,d[9]=m,d[10]=a,d}function ce(o,h){const d=h??new r(12),g=o[0*4+0],y=o[0*4+1],S=o[0*4+2],E=o[1*4+0],i=o[1*4+1],m=o[1*4+2],u=o[2*4+0],p=o[2*4+1],a=o[2*4+2],_=a*i-m*p,x=-a*E+m*u,b=p*E-i*u,I=1/(g*_+y*x+S*b);return d[0]=_*I,d[1]=(-a*y+S*p)*I,d[2]=(m*y-S*i)*I,d[4]=x*I,d[5]=(a*g-S*u)*I,d[6]=(-m*g+S*E)*I,d[8]=b*I,d[9]=(-p*g+y*u)*I,d[10]=(i*g-y*E)*I,d}function U(o){const h=o[0],d=o[0*4+1],g=o[0*4+2],y=o[1*4+0],S=o[1*4+1],E=o[1*4+2],i=o[2*4+0],m=o[2*4+1],u=o[2*4+2];return h*(S*u-m*E)-y*(d*u-m*g)+i*(d*E-S*g)}const Q=ce;function K(o,h,d){const g=d??new r(12),y=o[0],S=o[1],E=o[2],i=o[4+0],m=o[4+1],u=o[4+2],p=o[8+0],a=o[8+1],_=o[8+2],x=h[0],b=h[1],I=h[2],F=h[4+0],$=h[4+1],ae=h[4+2],se=h[8+0],ee=h[8+1],fe=h[8+2];return g[0]=y*x+i*b+p*I,g[1]=S*x+m*b+a*I,g[2]=E*x+u*b+_*I,g[4]=y*F+i*$+p*ae,g[5]=S*F+m*$+a*ae,g[6]=E*F+u*$+_*ae,g[8]=y*se+i*ee+p*fe,g[9]=S*se+m*ee+a*fe,g[10]=E*se+u*ee+_*fe,g}const le=K;function W(o,h,d){const g=d??Z();return o!==g&&(g[0]=o[0],g[1]=o[1],g[2]=o[2],g[4]=o[4],g[5]=o[5],g[6]=o[6]),g[8]=h[0],g[9]=h[1],g[10]=1,g}function he(o,h){const d=h??l.create();return d[0]=o[8],d[1]=o[9],d}function ne(o,h,d){const g=d??l.create(),y=h*4;return g[0]=o[y+0],g[1]=o[y+1],g}function de(o,h,d,g){const y=g===o?o:G(o,g),S=d*4;return y[S+0]=h[0],y[S+1]=h[1],y}function we(o,h){const d=h??l.create(),g=o[0],y=o[1],S=o[4],E=o[5];return d[0]=Math.sqrt(g*g+y*y),d[1]=Math.sqrt(S*S+E*E),d}function Ge(o,h){const d=h??f.create(),g=o[0],y=o[1],S=o[2],E=o[4],i=o[5],m=o[6],u=o[8],p=o[9],a=o[10];return d[0]=Math.sqrt(g*g+y*y+S*S),d[1]=Math.sqrt(E*E+i*i+m*m),d[2]=Math.sqrt(u*u+p*p+a*a),d}function Be(o,h){const d=h??new r(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=o[0],d[9]=o[1],d[10]=1,d}function ze(o,h,d){const g=d??new r(12),y=h[0],S=h[1],E=o[0],i=o[1],m=o[2],u=o[1*4+0],p=o[1*4+1],a=o[1*4+2],_=o[2*4+0],x=o[2*4+1],b=o[2*4+2];return o!==g&&(g[0]=E,g[1]=i,g[2]=m,g[4]=u,g[5]=p,g[6]=a),g[8]=E*y+u*S+_,g[9]=i*y+p*S+x,g[10]=m*y+a*S+b,g}function De(o,h){const d=h??new r(12),g=Math.cos(o),y=Math.sin(o);return d[0]=g,d[1]=y,d[2]=0,d[4]=-y,d[5]=g,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function ye(o,h,d){const g=d??new r(12),y=o[0*4+0],S=o[0*4+1],E=o[0*4+2],i=o[1*4+0],m=o[1*4+1],u=o[1*4+2],p=Math.cos(h),a=Math.sin(h);return g[0]=p*y+a*i,g[1]=p*S+a*m,g[2]=p*E+a*u,g[4]=p*i-a*y,g[5]=p*m-a*S,g[6]=p*u-a*E,o!==g&&(g[8]=o[8],g[9]=o[9],g[10]=o[10]),g}function Me(o,h){const d=h??new r(12),g=Math.cos(o),y=Math.sin(o);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=g,d[6]=y,d[8]=0,d[9]=-y,d[10]=g,d}function R(o,h,d){const g=d??new r(12),y=o[4],S=o[5],E=o[6],i=o[8],m=o[9],u=o[10],p=Math.cos(h),a=Math.sin(h);return g[4]=p*y+a*i,g[5]=p*S+a*m,g[6]=p*E+a*u,g[8]=p*i-a*y,g[9]=p*m-a*S,g[10]=p*u-a*E,o!==g&&(g[0]=o[0],g[1]=o[1],g[2]=o[2]),g}function j(o,h){const d=h??new r(12),g=Math.cos(o),y=Math.sin(o);return d[0]=g,d[1]=0,d[2]=-y,d[4]=0,d[5]=1,d[6]=0,d[8]=y,d[9]=0,d[10]=g,d}function te(o,h,d){const g=d??new r(12),y=o[0*4+0],S=o[0*4+1],E=o[0*4+2],i=o[2*4+0],m=o[2*4+1],u=o[2*4+2],p=Math.cos(h),a=Math.sin(h);return g[0]=p*y-a*i,g[1]=p*S-a*m,g[2]=p*E-a*u,g[8]=p*i+a*y,g[9]=p*m+a*S,g[10]=p*u+a*E,o!==g&&(g[4]=o[4],g[5]=o[5],g[6]=o[6]),g}const pe=De,ie=ye;function oe(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function me(o,h,d){const g=d??new r(12),y=h[0],S=h[1];return g[0]=y*o[0*4+0],g[1]=y*o[0*4+1],g[2]=y*o[0*4+2],g[4]=S*o[1*4+0],g[5]=S*o[1*4+1],g[6]=S*o[1*4+2],o!==g&&(g[8]=o[8],g[9]=o[9],g[10]=o[10]),g}function be(o,h){const d=h??new r(12);return d[0]=o[0],d[1]=0,d[2]=0,d[4]=0,d[5]=o[1],d[6]=0,d[8]=0,d[9]=0,d[10]=o[2],d}function xe(o,h,d){const g=d??new r(12),y=h[0],S=h[1],E=h[2];return g[0]=y*o[0*4+0],g[1]=y*o[0*4+1],g[2]=y*o[0*4+2],g[4]=S*o[1*4+0],g[5]=S*o[1*4+1],g[6]=S*o[1*4+2],g[8]=E*o[2*4+0],g[9]=E*o[2*4+1],g[10]=E*o[2*4+2],g}function Oe(o,h){const d=h??new r(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function B(o,h,d){const g=d??new r(12);return g[0]=h*o[0*4+0],g[1]=h*o[0*4+1],g[2]=h*o[0*4+2],g[4]=h*o[1*4+0],g[5]=h*o[1*4+1],g[6]=h*o[1*4+2],o!==g&&(g[8]=o[8],g[9]=o[9],g[10]=o[10]),g}function O(o,h){const d=h??new r(12);return d[0]=o,d[1]=0,d[2]=0,d[4]=0,d[5]=o,d[6]=0,d[8]=0,d[9]=0,d[10]=o,d}function v(o,h,d){const g=d??new r(12);return g[0]=h*o[0*4+0],g[1]=h*o[0*4+1],g[2]=h*o[0*4+2],g[4]=h*o[1*4+0],g[5]=h*o[1*4+1],g[6]=h*o[1*4+2],g[8]=h*o[2*4+0],g[9]=h*o[2*4+1],g[10]=h*o[2*4+2],g}return{add:V,clone:X,copy:G,create:C,determinant:U,equals:H,equalsApproximately:z,fromMat4:k,fromQuat:M,get3DScaling:Ge,getAxis:ne,getScaling:we,getTranslation:he,identity:Z,inverse:ce,invert:Q,mul:le,mulScalar:A,multiply:K,multiplyScalar:T,negate:N,rotate:ye,rotateX:R,rotateY:te,rotateZ:ie,rotation:De,rotationX:Me,rotationY:j,rotationZ:pe,scale:me,scale3D:xe,scaling:oe,scaling3D:be,set:w,setAxis:de,setTranslation:W,translate:ze,translation:Be,transpose:q,uniformScale:B,uniformScale3D:v,uniformScaling:Oe,uniformScaling3D:O}}const Oi=new Map;function kl(r){let l=Oi.get(r);return l||(l=El(r),Oi.set(r,l)),l}function Ml(r){const l=Kn(r);function f(i,m,u,p,a,_,x,b,I,F,$,ae,se,ee,fe,Pe){const ve=new r(16);return i!==void 0&&(ve[0]=i,m!==void 0&&(ve[1]=m,u!==void 0&&(ve[2]=u,p!==void 0&&(ve[3]=p,a!==void 0&&(ve[4]=a,_!==void 0&&(ve[5]=_,x!==void 0&&(ve[6]=x,b!==void 0&&(ve[7]=b,I!==void 0&&(ve[8]=I,F!==void 0&&(ve[9]=F,$!==void 0&&(ve[10]=$,ae!==void 0&&(ve[11]=ae,se!==void 0&&(ve[12]=se,ee!==void 0&&(ve[13]=ee,fe!==void 0&&(ve[14]=fe,Pe!==void 0&&(ve[15]=Pe)))))))))))))))),ve}function C(i,m,u,p,a,_,x,b,I,F,$,ae,se,ee,fe,Pe,ve){const ge=ve??new r(16);return ge[0]=i,ge[1]=m,ge[2]=u,ge[3]=p,ge[4]=a,ge[5]=_,ge[6]=x,ge[7]=b,ge[8]=I,ge[9]=F,ge[10]=$,ge[11]=ae,ge[12]=se,ge[13]=ee,ge[14]=fe,ge[15]=Pe,ge}function w(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k(i,m){const u=m??new r(16),p=i[0],a=i[1],_=i[2],x=i[3],b=p+p,I=a+a,F=_+_,$=p*b,ae=a*b,se=a*I,ee=_*b,fe=_*I,Pe=_*F,ve=x*b,ge=x*I,Ae=x*F;return u[0]=1-se-Pe,u[1]=ae+Ae,u[2]=ee-ge,u[3]=0,u[4]=ae-Ae,u[5]=1-$-Pe,u[6]=fe+ve,u[7]=0,u[8]=ee+ge,u[9]=fe-ve,u[10]=1-$-se,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function M(i,m){const u=m??new r(16);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[3]=-i[3],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[7]=-i[7],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u[11]=-i[11],u[12]=-i[12],u[13]=-i[13],u[14]=-i[14],u[15]=-i[15],u}function N(i,m,u){const p=u??new r(16);return p[0]=i[0]+m[0],p[1]=i[1]+m[1],p[2]=i[2]+m[2],p[3]=i[3]+m[3],p[4]=i[4]+m[4],p[5]=i[5]+m[5],p[6]=i[6]+m[6],p[7]=i[7]+m[7],p[8]=i[8]+m[8],p[9]=i[9]+m[9],p[10]=i[10]+m[10],p[11]=i[11]+m[11],p[12]=i[12]+m[12],p[13]=i[13]+m[13],p[14]=i[14]+m[14],p[15]=i[15]+m[15],p}function T(i,m,u){const p=u??new r(16);return p[0]=i[0]*m,p[1]=i[1]*m,p[2]=i[2]*m,p[3]=i[3]*m,p[4]=i[4]*m,p[5]=i[5]*m,p[6]=i[6]*m,p[7]=i[7]*m,p[8]=i[8]*m,p[9]=i[9]*m,p[10]=i[10]*m,p[11]=i[11]*m,p[12]=i[12]*m,p[13]=i[13]*m,p[14]=i[14]*m,p[15]=i[15]*m,p}const A=T;function V(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=i[3],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=i[7],u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=i[11],u[12]=i[12],u[13]=i[13],u[14]=i[14],u[15]=i[15],u}const G=V;function X(i,m){return Math.abs(i[0]-m[0])<Le&&Math.abs(i[1]-m[1])<Le&&Math.abs(i[2]-m[2])<Le&&Math.abs(i[3]-m[3])<Le&&Math.abs(i[4]-m[4])<Le&&Math.abs(i[5]-m[5])<Le&&Math.abs(i[6]-m[6])<Le&&Math.abs(i[7]-m[7])<Le&&Math.abs(i[8]-m[8])<Le&&Math.abs(i[9]-m[9])<Le&&Math.abs(i[10]-m[10])<Le&&Math.abs(i[11]-m[11])<Le&&Math.abs(i[12]-m[12])<Le&&Math.abs(i[13]-m[13])<Le&&Math.abs(i[14]-m[14])<Le&&Math.abs(i[15]-m[15])<Le}function z(i,m){return i[0]===m[0]&&i[1]===m[1]&&i[2]===m[2]&&i[3]===m[3]&&i[4]===m[4]&&i[5]===m[5]&&i[6]===m[6]&&i[7]===m[7]&&i[8]===m[8]&&i[9]===m[9]&&i[10]===m[10]&&i[11]===m[11]&&i[12]===m[12]&&i[13]===m[13]&&i[14]===m[14]&&i[15]===m[15]}function H(i){const m=i??new r(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function Z(i,m){const u=m??new r(16);if(u===i){let Te;return Te=i[1],i[1]=i[4],i[4]=Te,Te=i[2],i[2]=i[8],i[8]=Te,Te=i[3],i[3]=i[12],i[12]=Te,Te=i[6],i[6]=i[9],i[9]=Te,Te=i[7],i[7]=i[13],i[13]=Te,Te=i[11],i[11]=i[14],i[14]=Te,u}const p=i[0*4+0],a=i[0*4+1],_=i[0*4+2],x=i[0*4+3],b=i[1*4+0],I=i[1*4+1],F=i[1*4+2],$=i[1*4+3],ae=i[2*4+0],se=i[2*4+1],ee=i[2*4+2],fe=i[2*4+3],Pe=i[3*4+0],ve=i[3*4+1],ge=i[3*4+2],Ae=i[3*4+3];return u[0]=p,u[1]=b,u[2]=ae,u[3]=Pe,u[4]=a,u[5]=I,u[6]=se,u[7]=ve,u[8]=_,u[9]=F,u[10]=ee,u[11]=ge,u[12]=x,u[13]=$,u[14]=fe,u[15]=Ae,u}function q(i,m){const u=m??new r(16),p=i[0*4+0],a=i[0*4+1],_=i[0*4+2],x=i[0*4+3],b=i[1*4+0],I=i[1*4+1],F=i[1*4+2],$=i[1*4+3],ae=i[2*4+0],se=i[2*4+1],ee=i[2*4+2],fe=i[2*4+3],Pe=i[3*4+0],ve=i[3*4+1],ge=i[3*4+2],Ae=i[3*4+3],Te=ee*Ae,$e=ge*fe,Ze=F*Ae,je=ge*$,We=F*fe,Qe=ee*$,it=_*Ae,Ke=ge*x,nt=_*fe,rt=ee*x,st=_*$,Je=F*x,qe=ae*ve,et=Pe*se,He=b*ve,lt=Pe*I,tt=b*se,St=ae*I,wt=p*ve,bt=Pe*a,gt=p*se,re=ae*a,_e=p*I,ue=b*a,Ue=Te*I+je*se+We*ve-($e*I+Ze*se+Qe*ve),Ve=$e*a+it*se+rt*ve-(Te*a+Ke*se+nt*ve),Ee=Ze*a+Ke*I+st*ve-(je*a+it*I+Je*ve),Ie=Qe*a+nt*I+Je*se-(We*a+rt*I+st*se),Ce=1/(p*Ue+b*Ve+ae*Ee+Pe*Ie);return u[0]=Ce*Ue,u[1]=Ce*Ve,u[2]=Ce*Ee,u[3]=Ce*Ie,u[4]=Ce*($e*b+Ze*ae+Qe*Pe-(Te*b+je*ae+We*Pe)),u[5]=Ce*(Te*p+Ke*ae+nt*Pe-($e*p+it*ae+rt*Pe)),u[6]=Ce*(je*p+it*b+Je*Pe-(Ze*p+Ke*b+st*Pe)),u[7]=Ce*(We*p+rt*b+st*ae-(Qe*p+nt*b+Je*ae)),u[8]=Ce*(qe*$+lt*fe+tt*Ae-(et*$+He*fe+St*Ae)),u[9]=Ce*(et*x+wt*fe+re*Ae-(qe*x+bt*fe+gt*Ae)),u[10]=Ce*(He*x+bt*$+_e*Ae-(lt*x+wt*$+ue*Ae)),u[11]=Ce*(St*x+gt*$+ue*fe-(tt*x+re*$+_e*fe)),u[12]=Ce*(He*ee+St*ge+et*F-(tt*ge+qe*F+lt*ee)),u[13]=Ce*(gt*ge+qe*_+bt*ee-(wt*ee+re*ge+et*_)),u[14]=Ce*(wt*F+ue*ge+lt*_-(_e*ge+He*_+bt*F)),u[15]=Ce*(_e*ee+tt*_+re*F-(gt*F+ue*ee+St*_)),u}function ce(i){const m=i[0],u=i[0*4+1],p=i[0*4+2],a=i[0*4+3],_=i[1*4+0],x=i[1*4+1],b=i[1*4+2],I=i[1*4+3],F=i[2*4+0],$=i[2*4+1],ae=i[2*4+2],se=i[2*4+3],ee=i[3*4+0],fe=i[3*4+1],Pe=i[3*4+2],ve=i[3*4+3],ge=ae*ve,Ae=Pe*se,Te=b*ve,$e=Pe*I,Ze=b*se,je=ae*I,We=p*ve,Qe=Pe*a,it=p*se,Ke=ae*a,nt=p*I,rt=b*a,st=ge*x+$e*$+Ze*fe-(Ae*x+Te*$+je*fe),Je=Ae*u+We*$+Ke*fe-(ge*u+Qe*$+it*fe),qe=Te*u+Qe*x+nt*fe-($e*u+We*x+rt*fe),et=je*u+it*x+rt*$-(Ze*u+Ke*x+nt*$);return m*st+_*Je+F*qe+ee*et}const U=q;function Q(i,m,u){const p=u??new r(16),a=i[0],_=i[1],x=i[2],b=i[3],I=i[4+0],F=i[4+1],$=i[4+2],ae=i[4+3],se=i[8+0],ee=i[8+1],fe=i[8+2],Pe=i[8+3],ve=i[12+0],ge=i[12+1],Ae=i[12+2],Te=i[12+3],$e=m[0],Ze=m[1],je=m[2],We=m[3],Qe=m[4+0],it=m[4+1],Ke=m[4+2],nt=m[4+3],rt=m[8+0],st=m[8+1],Je=m[8+2],qe=m[8+3],et=m[12+0],He=m[12+1],lt=m[12+2],tt=m[12+3];return p[0]=a*$e+I*Ze+se*je+ve*We,p[1]=_*$e+F*Ze+ee*je+ge*We,p[2]=x*$e+$*Ze+fe*je+Ae*We,p[3]=b*$e+ae*Ze+Pe*je+Te*We,p[4]=a*Qe+I*it+se*Ke+ve*nt,p[5]=_*Qe+F*it+ee*Ke+ge*nt,p[6]=x*Qe+$*it+fe*Ke+Ae*nt,p[7]=b*Qe+ae*it+Pe*Ke+Te*nt,p[8]=a*rt+I*st+se*Je+ve*qe,p[9]=_*rt+F*st+ee*Je+ge*qe,p[10]=x*rt+$*st+fe*Je+Ae*qe,p[11]=b*rt+ae*st+Pe*Je+Te*qe,p[12]=a*et+I*He+se*lt+ve*tt,p[13]=_*et+F*He+ee*lt+ge*tt,p[14]=x*et+$*He+fe*lt+Ae*tt,p[15]=b*et+ae*He+Pe*lt+Te*tt,p}const K=Q;function le(i,m,u){const p=u??H();return i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11]),p[12]=m[0],p[13]=m[1],p[14]=m[2],p[15]=1,p}function W(i,m){const u=m??l.create();return u[0]=i[12],u[1]=i[13],u[2]=i[14],u}function he(i,m,u){const p=u??l.create(),a=m*4;return p[0]=i[a+0],p[1]=i[a+1],p[2]=i[a+2],p}function ne(i,m,u,p){const a=p===i?p:V(i,p),_=u*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function de(i,m){const u=m??l.create(),p=i[0],a=i[1],_=i[2],x=i[4],b=i[5],I=i[6],F=i[8],$=i[9],ae=i[10];return u[0]=Math.sqrt(p*p+a*a+_*_),u[1]=Math.sqrt(x*x+b*b+I*I),u[2]=Math.sqrt(F*F+$*$+ae*ae),u}function we(i,m,u,p,a){const _=a??new r(16),x=Math.tan(Math.PI*.5-.5*i);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(p)){const b=1/(u-p);_[10]=p*b,_[14]=p*u*b}else _[10]=-1,_[14]=-u;return _}function Ge(i,m,u,p=1/0,a){const _=a??new r(16),x=1/Math.tan(i*.5);if(_[0]=x/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=x,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,p===1/0)_[10]=0,_[14]=u;else{const b=1/(p-u);_[10]=u*b,_[14]=p*u*b}return _}function Be(i,m,u,p,a,_,x){const b=x??new r(16);return b[0]=2/(m-i),b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2/(p-u),b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1/(a-_),b[11]=0,b[12]=(m+i)/(i-m),b[13]=(p+u)/(u-p),b[14]=a/(a-_),b[15]=1,b}function ze(i,m,u,p,a,_,x){const b=x??new r(16),I=m-i,F=p-u,$=a-_;return b[0]=2*a/I,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*a/F,b[6]=0,b[7]=0,b[8]=(i+m)/I,b[9]=(p+u)/F,b[10]=_/$,b[11]=-1,b[12]=0,b[13]=0,b[14]=a*_/$,b[15]=0,b}function De(i,m,u,p,a,_=1/0,x){const b=x??new r(16),I=m-i,F=p-u;if(b[0]=2*a/I,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=2*a/F,b[6]=0,b[7]=0,b[8]=(i+m)/I,b[9]=(p+u)/F,b[11]=-1,b[12]=0,b[13]=0,b[15]=0,_===1/0)b[10]=0,b[14]=a;else{const $=1/(_-a);b[10]=a*$,b[14]=_*a*$}return b}const ye=l.create(),Me=l.create(),R=l.create();function j(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(m,i,R),R),l.normalize(l.cross(u,R,ye),ye),l.normalize(l.cross(R,ye,Me),Me),a[0]=ye[0],a[1]=ye[1],a[2]=ye[2],a[3]=0,a[4]=Me[0],a[5]=Me[1],a[6]=Me[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function te(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(i,m,R),R),l.normalize(l.cross(u,R,ye),ye),l.normalize(l.cross(R,ye,Me),Me),a[0]=ye[0],a[1]=ye[1],a[2]=ye[2],a[3]=0,a[4]=Me[0],a[5]=Me[1],a[6]=Me[2],a[7]=0,a[8]=R[0],a[9]=R[1],a[10]=R[2],a[11]=0,a[12]=i[0],a[13]=i[1],a[14]=i[2],a[15]=1,a}function pe(i,m,u,p){const a=p??new r(16);return l.normalize(l.subtract(i,m,R),R),l.normalize(l.cross(u,R,ye),ye),l.normalize(l.cross(R,ye,Me),Me),a[0]=ye[0],a[1]=Me[0],a[2]=R[0],a[3]=0,a[4]=ye[1],a[5]=Me[1],a[6]=R[1],a[7]=0,a[8]=ye[2],a[9]=Me[2],a[10]=R[2],a[11]=0,a[12]=-(ye[0]*i[0]+ye[1]*i[1]+ye[2]*i[2]),a[13]=-(Me[0]*i[0]+Me[1]*i[1]+Me[2]*i[2]),a[14]=-(R[0]*i[0]+R[1]*i[1]+R[2]*i[2]),a[15]=1,a}function ie(i,m){const u=m??new r(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=i[0],u[13]=i[1],u[14]=i[2],u[15]=1,u}function oe(i,m,u){const p=u??new r(16),a=m[0],_=m[1],x=m[2],b=i[0],I=i[1],F=i[2],$=i[3],ae=i[1*4+0],se=i[1*4+1],ee=i[1*4+2],fe=i[1*4+3],Pe=i[2*4+0],ve=i[2*4+1],ge=i[2*4+2],Ae=i[2*4+3],Te=i[3*4+0],$e=i[3*4+1],Ze=i[3*4+2],je=i[3*4+3];return i!==p&&(p[0]=b,p[1]=I,p[2]=F,p[3]=$,p[4]=ae,p[5]=se,p[6]=ee,p[7]=fe,p[8]=Pe,p[9]=ve,p[10]=ge,p[11]=Ae),p[12]=b*a+ae*_+Pe*x+Te,p[13]=I*a+se*_+ve*x+$e,p[14]=F*a+ee*_+ge*x+Ze,p[15]=$*a+fe*_+Ae*x+je,p}function me(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=p,u[6]=a,u[7]=0,u[8]=0,u[9]=-a,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function be(i,m,u){const p=u??new r(16),a=i[4],_=i[5],x=i[6],b=i[7],I=i[8],F=i[9],$=i[10],ae=i[11],se=Math.cos(m),ee=Math.sin(m);return p[4]=se*a+ee*I,p[5]=se*_+ee*F,p[6]=se*x+ee*$,p[7]=se*b+ee*ae,p[8]=se*I-ee*a,p[9]=se*F-ee*_,p[10]=se*$-ee*x,p[11]=se*ae-ee*b,i!==p&&(p[0]=i[0],p[1]=i[1],p[2]=i[2],p[3]=i[3],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function xe(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=0,u[2]=-a,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=a,u[9]=0,u[10]=p,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Oe(i,m,u){const p=u??new r(16),a=i[0*4+0],_=i[0*4+1],x=i[0*4+2],b=i[0*4+3],I=i[2*4+0],F=i[2*4+1],$=i[2*4+2],ae=i[2*4+3],se=Math.cos(m),ee=Math.sin(m);return p[0]=se*a-ee*I,p[1]=se*_-ee*F,p[2]=se*x-ee*$,p[3]=se*b-ee*ae,p[8]=se*I+ee*a,p[9]=se*F+ee*_,p[10]=se*$+ee*x,p[11]=se*ae+ee*b,i!==p&&(p[4]=i[4],p[5]=i[5],p[6]=i[6],p[7]=i[7],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function B(i,m){const u=m??new r(16),p=Math.cos(i),a=Math.sin(i);return u[0]=p,u[1]=a,u[2]=0,u[3]=0,u[4]=-a,u[5]=p,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function O(i,m,u){const p=u??new r(16),a=i[0*4+0],_=i[0*4+1],x=i[0*4+2],b=i[0*4+3],I=i[1*4+0],F=i[1*4+1],$=i[1*4+2],ae=i[1*4+3],se=Math.cos(m),ee=Math.sin(m);return p[0]=se*a+ee*I,p[1]=se*_+ee*F,p[2]=se*x+ee*$,p[3]=se*b+ee*ae,p[4]=se*I-ee*a,p[5]=se*F-ee*_,p[6]=se*$-ee*x,p[7]=se*ae-ee*b,i!==p&&(p[8]=i[8],p[9]=i[9],p[10]=i[10],p[11]=i[11],p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function v(i,m,u){const p=u??new r(16);let a=i[0],_=i[1],x=i[2];const b=Math.sqrt(a*a+_*_+x*x);a/=b,_/=b,x/=b;const I=a*a,F=_*_,$=x*x,ae=Math.cos(m),se=Math.sin(m),ee=1-ae;return p[0]=I+(1-I)*ae,p[1]=a*_*ee+x*se,p[2]=a*x*ee-_*se,p[3]=0,p[4]=a*_*ee-x*se,p[5]=F+(1-F)*ae,p[6]=_*x*ee+a*se,p[7]=0,p[8]=a*x*ee+_*se,p[9]=_*x*ee-a*se,p[10]=$+(1-$)*ae,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const o=v;function h(i,m,u,p){const a=p??new r(16);let _=m[0],x=m[1],b=m[2];const I=Math.sqrt(_*_+x*x+b*b);_/=I,x/=I,b/=I;const F=_*_,$=x*x,ae=b*b,se=Math.cos(u),ee=Math.sin(u),fe=1-se,Pe=F+(1-F)*se,ve=_*x*fe+b*ee,ge=_*b*fe-x*ee,Ae=_*x*fe-b*ee,Te=$+(1-$)*se,$e=x*b*fe+_*ee,Ze=_*b*fe+x*ee,je=x*b*fe-_*ee,We=ae+(1-ae)*se,Qe=i[0],it=i[1],Ke=i[2],nt=i[3],rt=i[4],st=i[5],Je=i[6],qe=i[7],et=i[8],He=i[9],lt=i[10],tt=i[11];return a[0]=Pe*Qe+ve*rt+ge*et,a[1]=Pe*it+ve*st+ge*He,a[2]=Pe*Ke+ve*Je+ge*lt,a[3]=Pe*nt+ve*qe+ge*tt,a[4]=Ae*Qe+Te*rt+$e*et,a[5]=Ae*it+Te*st+$e*He,a[6]=Ae*Ke+Te*Je+$e*lt,a[7]=Ae*nt+Te*qe+$e*tt,a[8]=Ze*Qe+je*rt+We*et,a[9]=Ze*it+je*st+We*He,a[10]=Ze*Ke+je*Je+We*lt,a[11]=Ze*nt+je*qe+We*tt,i!==a&&(a[12]=i[12],a[13]=i[13],a[14]=i[14],a[15]=i[15]),a}const d=h;function g(i,m){const u=m??new r(16);return u[0]=i[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function y(i,m,u){const p=u??new r(16),a=m[0],_=m[1],x=m[2];return p[0]=a*i[0*4+0],p[1]=a*i[0*4+1],p[2]=a*i[0*4+2],p[3]=a*i[0*4+3],p[4]=_*i[1*4+0],p[5]=_*i[1*4+1],p[6]=_*i[1*4+2],p[7]=_*i[1*4+3],p[8]=x*i[2*4+0],p[9]=x*i[2*4+1],p[10]=x*i[2*4+2],p[11]=x*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}function S(i,m){const u=m??new r(16);return u[0]=i,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=i,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=i,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function E(i,m,u){const p=u??new r(16);return p[0]=m*i[0*4+0],p[1]=m*i[0*4+1],p[2]=m*i[0*4+2],p[3]=m*i[0*4+3],p[4]=m*i[1*4+0],p[5]=m*i[1*4+1],p[6]=m*i[1*4+2],p[7]=m*i[1*4+3],p[8]=m*i[2*4+0],p[9]=m*i[2*4+1],p[10]=m*i[2*4+2],p[11]=m*i[2*4+3],i!==p&&(p[12]=i[12],p[13]=i[13],p[14]=i[14],p[15]=i[15]),p}return{add:N,aim:j,axisRotate:h,axisRotation:v,cameraAim:te,clone:G,copy:V,create:f,determinant:ce,equals:z,equalsApproximately:X,fromMat3:w,fromQuat:k,frustum:ze,frustumReverseZ:De,getAxis:he,getScaling:de,getTranslation:W,identity:H,inverse:q,invert:U,lookAt:pe,mul:K,mulScalar:A,multiply:Q,multiplyScalar:T,negate:M,ortho:Be,perspective:we,perspectiveReverseZ:Ge,rotate:d,rotateX:be,rotateY:Oe,rotateZ:O,rotation:o,rotationX:me,rotationY:xe,rotationZ:B,scale:y,scaling:g,set:C,setAxis:ne,setTranslation:le,translate:oe,translation:ie,transpose:Z,uniformScale:E,uniformScaling:S}}const Fi=new Map;function Bl(r){let l=Fi.get(r);return l||(l=Ml(r),Fi.set(r,l)),l}function Tl(r){const l=Kn(r);function f(B,O,v,o){const h=new r(4);return B!==void 0&&(h[0]=B,O!==void 0&&(h[1]=O,v!==void 0&&(h[2]=v,o!==void 0&&(h[3]=o)))),h}const C=f;function w(B,O,v,o,h){const d=h??new r(4);return d[0]=B,d[1]=O,d[2]=v,d[3]=o,d}function k(B,O,v){const o=v??new r(4),h=O*.5,d=Math.sin(h);return o[0]=d*B[0],o[1]=d*B[1],o[2]=d*B[2],o[3]=Math.cos(h),o}function M(B,O){const v=O??l.create(3),o=Math.acos(B[3])*2,h=Math.sin(o*.5);return h>Le?(v[0]=B[0]/h,v[1]=B[1]/h,v[2]=B[2]/h):(v[0]=1,v[1]=0,v[2]=0),{angle:o,axis:v}}function N(B,O){const v=we(B,O);return Math.acos(2*v*v-1)}function T(B,O,v){const o=v??new r(4),h=B[0],d=B[1],g=B[2],y=B[3],S=O[0],E=O[1],i=O[2],m=O[3];return o[0]=h*m+y*S+d*i-g*E,o[1]=d*m+y*E+g*S-h*i,o[2]=g*m+y*i+h*E-d*S,o[3]=y*m-h*S-d*E-g*i,o}const A=T;function V(B,O,v){const o=v??new r(4),h=O*.5,d=B[0],g=B[1],y=B[2],S=B[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i+S*E,o[1]=g*i+y*E,o[2]=y*i-g*E,o[3]=S*i-d*E,o}function G(B,O,v){const o=v??new r(4),h=O*.5,d=B[0],g=B[1],y=B[2],S=B[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i-y*E,o[1]=g*i+S*E,o[2]=y*i+d*E,o[3]=S*i-g*E,o}function X(B,O,v){const o=v??new r(4),h=O*.5,d=B[0],g=B[1],y=B[2],S=B[3],E=Math.sin(h),i=Math.cos(h);return o[0]=d*i+g*E,o[1]=g*i-d*E,o[2]=y*i+S*E,o[3]=S*i-y*E,o}function z(B,O,v,o){const h=o??new r(4),d=B[0],g=B[1],y=B[2],S=B[3];let E=O[0],i=O[1],m=O[2],u=O[3],p=d*E+g*i+y*m+S*u;p<0&&(p=-p,E=-E,i=-i,m=-m,u=-u);let a,_;if(1-p>Le){const x=Math.acos(p),b=Math.sin(x);a=Math.sin((1-v)*x)/b,_=Math.sin(v*x)/b}else a=1-v,_=v;return h[0]=a*d+_*E,h[1]=a*g+_*i,h[2]=a*y+_*m,h[3]=a*S+_*u,h}function H(B,O){const v=O??new r(4),o=B[0],h=B[1],d=B[2],g=B[3],y=o*o+h*h+d*d+g*g,S=y?1/y:0;return v[0]=-o*S,v[1]=-h*S,v[2]=-d*S,v[3]=g*S,v}function Z(B,O){const v=O??new r(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function q(B,O){const v=O??new r(4),o=B[0]+B[5]+B[10];if(o>0){const h=Math.sqrt(o+1);v[3]=.5*h;const d=.5/h;v[0]=(B[6]-B[9])*d,v[1]=(B[8]-B[2])*d,v[2]=(B[1]-B[4])*d}else{let h=0;B[5]>B[0]&&(h=1),B[10]>B[h*4+h]&&(h=2);const d=(h+1)%3,g=(h+2)%3,y=Math.sqrt(B[h*4+h]-B[d*4+d]-B[g*4+g]+1);v[h]=.5*y;const S=.5/y;v[3]=(B[d*4+g]-B[g*4+d])*S,v[d]=(B[d*4+h]+B[h*4+d])*S,v[g]=(B[g*4+h]+B[h*4+g])*S}return v}function ce(B,O,v,o,h){const d=h??new r(4),g=B*.5,y=O*.5,S=v*.5,E=Math.sin(g),i=Math.cos(g),m=Math.sin(y),u=Math.cos(y),p=Math.sin(S),a=Math.cos(S);switch(o){case"xyz":d[0]=E*u*a+i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a-E*m*p;break;case"xzy":d[0]=E*u*a-i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a+E*m*p;break;case"yxz":d[0]=E*u*a+i*m*p,d[1]=i*m*a-E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a+E*m*p;break;case"yzx":d[0]=E*u*a+i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a-E*m*p;break;case"zxy":d[0]=E*u*a-i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p+E*m*a,d[3]=i*u*a-E*m*p;break;case"zyx":d[0]=E*u*a-i*m*p,d[1]=i*m*a+E*u*p,d[2]=i*u*p-E*m*a,d[3]=i*u*a+E*m*p;break;default:throw new Error(`Unknown rotation order: ${o}`)}return d}function U(B,O){const v=O??new r(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const Q=U;function K(B,O,v){const o=v??new r(4);return o[0]=B[0]+O[0],o[1]=B[1]+O[1],o[2]=B[2]+O[2],o[3]=B[3]+O[3],o}function le(B,O,v){const o=v??new r(4);return o[0]=B[0]-O[0],o[1]=B[1]-O[1],o[2]=B[2]-O[2],o[3]=B[3]-O[3],o}const W=le;function he(B,O,v){const o=v??new r(4);return o[0]=B[0]*O,o[1]=B[1]*O,o[2]=B[2]*O,o[3]=B[3]*O,o}const ne=he;function de(B,O,v){const o=v??new r(4);return o[0]=B[0]/O,o[1]=B[1]/O,o[2]=B[2]/O,o[3]=B[3]/O,o}function we(B,O){return B[0]*O[0]+B[1]*O[1]+B[2]*O[2]+B[3]*O[3]}function Ge(B,O,v,o){const h=o??new r(4);return h[0]=B[0]+v*(O[0]-B[0]),h[1]=B[1]+v*(O[1]-B[1]),h[2]=B[2]+v*(O[2]-B[2]),h[3]=B[3]+v*(O[3]-B[3]),h}function Be(B){const O=B[0],v=B[1],o=B[2],h=B[3];return Math.sqrt(O*O+v*v+o*o+h*h)}const ze=Be;function De(B){const O=B[0],v=B[1],o=B[2],h=B[3];return O*O+v*v+o*o+h*h}const ye=De;function Me(B,O){const v=O??new r(4),o=B[0],h=B[1],d=B[2],g=B[3],y=Math.sqrt(o*o+h*h+d*d+g*g);return y>1e-5?(v[0]=o/y,v[1]=h/y,v[2]=d/y,v[3]=g/y):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function R(B,O){return Math.abs(B[0]-O[0])<Le&&Math.abs(B[1]-O[1])<Le&&Math.abs(B[2]-O[2])<Le&&Math.abs(B[3]-O[3])<Le}function j(B,O){return B[0]===O[0]&&B[1]===O[1]&&B[2]===O[2]&&B[3]===O[3]}function te(B){const O=B??new r(4);return O[0]=0,O[1]=0,O[2]=0,O[3]=1,O}const pe=l.create(),ie=l.create(),oe=l.create();function me(B,O,v){const o=v??new r(4),h=l.dot(B,O);return h<-.999999?(l.cross(ie,B,pe),l.len(pe)<1e-6&&l.cross(oe,B,pe),l.normalize(pe,pe),k(pe,Math.PI,o),o):h>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(l.cross(B,O,pe),o[0]=pe[0],o[1]=pe[1],o[2]=pe[2],o[3]=1+h,Me(o,o))}const be=new r(4),xe=new r(4);function Oe(B,O,v,o,h,d){const g=d??new r(4);return z(B,o,h,be),z(O,v,h,xe),z(be,xe,2*h*(1-h),g),g}return{create:f,fromValues:C,set:w,fromAxisAngle:k,toAxisAngle:M,angle:N,multiply:T,mul:A,rotateX:V,rotateY:G,rotateZ:X,slerp:z,inverse:H,conjugate:Z,fromMat:q,fromEuler:ce,copy:U,clone:Q,add:K,subtract:le,sub:W,mulScalar:he,scale:ne,divScalar:de,dot:we,lerp:Ge,length:Be,len:ze,lengthSq:De,lenSq:ye,normalize:Me,equalsApproximately:R,equals:j,identity:te,rotationTo:me,sqlerp:Oe}}const Ni=new Map;function Dl(r){let l=Ni.get(r);return l||(l=Tl(r),Ni.set(r,l)),l}function Al(r){function l(v,o,h,d){const g=new r(4);return v!==void 0&&(g[0]=v,o!==void 0&&(g[1]=o,h!==void 0&&(g[2]=h,d!==void 0&&(g[3]=d)))),g}const f=l;function C(v,o,h,d,g){const y=g??new r(4);return y[0]=v,y[1]=o,y[2]=h,y[3]=d,y}function w(v,o){const h=o??new r(4);return h[0]=Math.ceil(v[0]),h[1]=Math.ceil(v[1]),h[2]=Math.ceil(v[2]),h[3]=Math.ceil(v[3]),h}function k(v,o){const h=o??new r(4);return h[0]=Math.floor(v[0]),h[1]=Math.floor(v[1]),h[2]=Math.floor(v[2]),h[3]=Math.floor(v[3]),h}function M(v,o){const h=o??new r(4);return h[0]=Math.round(v[0]),h[1]=Math.round(v[1]),h[2]=Math.round(v[2]),h[3]=Math.round(v[3]),h}function N(v,o=0,h=1,d){const g=d??new r(4);return g[0]=Math.min(h,Math.max(o,v[0])),g[1]=Math.min(h,Math.max(o,v[1])),g[2]=Math.min(h,Math.max(o,v[2])),g[3]=Math.min(h,Math.max(o,v[3])),g}function T(v,o,h){const d=h??new r(4);return d[0]=v[0]+o[0],d[1]=v[1]+o[1],d[2]=v[2]+o[2],d[3]=v[3]+o[3],d}function A(v,o,h,d){const g=d??new r(4);return g[0]=v[0]+o[0]*h,g[1]=v[1]+o[1]*h,g[2]=v[2]+o[2]*h,g[3]=v[3]+o[3]*h,g}function V(v,o,h){const d=h??new r(4);return d[0]=v[0]-o[0],d[1]=v[1]-o[1],d[2]=v[2]-o[2],d[3]=v[3]-o[3],d}const G=V;function X(v,o){return Math.abs(v[0]-o[0])<Le&&Math.abs(v[1]-o[1])<Le&&Math.abs(v[2]-o[2])<Le&&Math.abs(v[3]-o[3])<Le}function z(v,o){return v[0]===o[0]&&v[1]===o[1]&&v[2]===o[2]&&v[3]===o[3]}function H(v,o,h,d){const g=d??new r(4);return g[0]=v[0]+h*(o[0]-v[0]),g[1]=v[1]+h*(o[1]-v[1]),g[2]=v[2]+h*(o[2]-v[2]),g[3]=v[3]+h*(o[3]-v[3]),g}function Z(v,o,h,d){const g=d??new r(4);return g[0]=v[0]+h[0]*(o[0]-v[0]),g[1]=v[1]+h[1]*(o[1]-v[1]),g[2]=v[2]+h[2]*(o[2]-v[2]),g[3]=v[3]+h[3]*(o[3]-v[3]),g}function q(v,o,h){const d=h??new r(4);return d[0]=Math.max(v[0],o[0]),d[1]=Math.max(v[1],o[1]),d[2]=Math.max(v[2],o[2]),d[3]=Math.max(v[3],o[3]),d}function ce(v,o,h){const d=h??new r(4);return d[0]=Math.min(v[0],o[0]),d[1]=Math.min(v[1],o[1]),d[2]=Math.min(v[2],o[2]),d[3]=Math.min(v[3],o[3]),d}function U(v,o,h){const d=h??new r(4);return d[0]=v[0]*o,d[1]=v[1]*o,d[2]=v[2]*o,d[3]=v[3]*o,d}const Q=U;function K(v,o,h){const d=h??new r(4);return d[0]=v[0]/o,d[1]=v[1]/o,d[2]=v[2]/o,d[3]=v[3]/o,d}function le(v,o){const h=o??new r(4);return h[0]=1/v[0],h[1]=1/v[1],h[2]=1/v[2],h[3]=1/v[3],h}const W=le;function he(v,o){return v[0]*o[0]+v[1]*o[1]+v[2]*o[2]+v[3]*o[3]}function ne(v){const o=v[0],h=v[1],d=v[2],g=v[3];return Math.sqrt(o*o+h*h+d*d+g*g)}const de=ne;function we(v){const o=v[0],h=v[1],d=v[2],g=v[3];return o*o+h*h+d*d+g*g}const Ge=we;function Be(v,o){const h=v[0]-o[0],d=v[1]-o[1],g=v[2]-o[2],y=v[3]-o[3];return Math.sqrt(h*h+d*d+g*g+y*y)}const ze=Be;function De(v,o){const h=v[0]-o[0],d=v[1]-o[1],g=v[2]-o[2],y=v[3]-o[3];return h*h+d*d+g*g+y*y}const ye=De;function Me(v,o){const h=o??new r(4),d=v[0],g=v[1],y=v[2],S=v[3],E=Math.sqrt(d*d+g*g+y*y+S*S);return E>1e-5?(h[0]=d/E,h[1]=g/E,h[2]=y/E,h[3]=S/E):(h[0]=0,h[1]=0,h[2]=0,h[3]=0),h}function R(v,o){const h=o??new r(4);return h[0]=-v[0],h[1]=-v[1],h[2]=-v[2],h[3]=-v[3],h}function j(v,o){const h=o??new r(4);return h[0]=v[0],h[1]=v[1],h[2]=v[2],h[3]=v[3],h}const te=j;function pe(v,o,h){const d=h??new r(4);return d[0]=v[0]*o[0],d[1]=v[1]*o[1],d[2]=v[2]*o[2],d[3]=v[3]*o[3],d}const ie=pe;function oe(v,o,h){const d=h??new r(4);return d[0]=v[0]/o[0],d[1]=v[1]/o[1],d[2]=v[2]/o[2],d[3]=v[3]/o[3],d}const me=oe;function be(v){const o=v??new r(4);return o[0]=0,o[1]=0,o[2]=0,o[3]=0,o}function xe(v,o,h){const d=h??new r(4),g=v[0],y=v[1],S=v[2],E=v[3];return d[0]=o[0]*g+o[4]*y+o[8]*S+o[12]*E,d[1]=o[1]*g+o[5]*y+o[9]*S+o[13]*E,d[2]=o[2]*g+o[6]*y+o[10]*S+o[14]*E,d[3]=o[3]*g+o[7]*y+o[11]*S+o[15]*E,d}function Oe(v,o,h){const d=h??new r(4);return Me(v,d),U(d,o,d)}function B(v,o,h){const d=h??new r(4);return ne(v)>o?Oe(v,o,d):j(v,d)}function O(v,o,h){const d=h??new r(4);return H(v,o,.5,d)}return{create:l,fromValues:f,set:C,ceil:w,floor:k,round:M,clamp:N,add:T,addScaled:A,subtract:V,sub:G,equalsApproximately:X,equals:z,lerp:H,lerpV:Z,max:q,min:ce,mulScalar:U,scale:Q,divScalar:K,inverse:le,invert:W,dot:he,length:ne,len:de,lengthSq:we,lenSq:Ge,distance:Be,dist:ze,distanceSq:De,distSq:ye,normalize:Me,negate:R,copy:j,clone:te,multiply:pe,mul:ie,divide:oe,div:me,zero:be,transformMat4:xe,setLength:Oe,truncate:B,midpoint:O}}const qi=new Map;function Il(r){let l=qi.get(r);return l||(l=Al(r),qi.set(r,l)),l}function Ts(r,l,f,C,w,k){return{mat3:kl(r),mat4:Bl(l),quat:Dl(f),vec2:nr(C),vec3:Kn(w),vec4:Il(k)}}const{mat3:Pt,mat4:ct,quat:dt,vec2:$i,vec3:L,vec4:jc}=Ts(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ts(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ts(Pl,Array,Array,Array,Array,Array);const Wi=document.querySelector("#log");let vt=null,Jt=null;function sr(){if(vt)return vt;vt=document.createElement("div"),vt.className="ply-spinner-overlay";const r=document.createElement("div");return r.className="ply-spinner",vt.appendChild(r),Jt=document.createElement("div"),Jt.className="ply-spinner-label",vt.appendChild(Jt),vt.style.display="none",document.body.appendChild(vt),vt}function Ds(r){sr(),Jt&&r&&(Jt.textContent=r),vt&&(vt.style.opacity="1",vt.style.display="flex")}function It(r){sr(),Jt&&(Jt.textContent=r)}function En(){if(!vt)return;const r=vt;r.style.opacity="0",setTimeout(()=>{r.style.opacity==="0"&&(r.style.display="none")},220)}function ir(r,l){if(!Wi)return;const f=document.createElement("p");f.innerText=r,l&&Object.assign(f.style,l),Wi.appendChild(f)}async function _t(r){console.log(r),ir(r)}async function Ll(r){console.error(r),ir(r,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let rr;function or(){rr=performance.now()}function ji(r){const l=performance.now()-rr;_t(`⏱️ ${r} Time: ${l.toFixed(0)} ms`)}function zl(r,l){if(!r)throw new Error(l&&(typeof l=="string"?l:l()))}function dn(r){return r+3&-4}const Ul=2,Gl=3,kn=5,Qt=6,Mn=7;function Rl(r){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(r,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(r.byteLength<4+64)throw new Error(`NAT2 truncated (${r.byteLength} bytes < 4 + 64)`);const C=new DataView(r),w=4,k=C.getUint32(w+0,!0),M=C.getUint32(w+4,!0),N=C.getUint32(w+8,!0),T=C.getUint32(w+12,!0),A=C.getUint32(w+16,!0),V=C.getFloat32(w+20,!0),G=C.getUint32(w+24,!0),X=C.getUint32(w+28,!0),z=C.getFloat32(w+32,!0),H=C.getFloat32(w+36,!0),Z=C.getFloat32(w+40,!0),q=C.getUint32(w+44,!0),ce=C.getFloat32(w+48,!0),U=C.getFloat32(w+52,!0),Q=C.getUint32(w+56,!0),K=C.getUint32(w+60,!0),le=K>0?K:1;if(X!==Ul&&X!==Gl&&X!==kn&&X!==Qt&&X!==Mn)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), RVQ-paired (5), RVQ-paired+BC7-codebook (6), or BC7-codebook (7); got format=${X}`);if(X!==kn&&X!==Qt&&(k%4!==0||q%4!==0))throw new Error(`NAT2 block-format dims must be 4-aligned: width=${k} layer_h=${q}`);let W=w+64;const he=(Q+1)*4,ne=new Uint32Array(r.slice(W,W+he));W+=he;let de;if(le>1){const R=(le+1)*4;if(W+R>r.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${R} from ${W})`);de=new Uint32Array(r.slice(W,W+R)),W+=R}else de=new Uint32Array([0,k]);let we=0;for(let R=0;R<le;R++){const j=de[R+1]-de[R];j>we&&(we=j)}const Ge=A*4*4;if(W+Ge>r.byteLength)throw new Error(`NAT2 truncated at rects: need ${Ge} more bytes from offset ${W}, have ${r.byteLength-W}`);const Be=new Float32Array(r.slice(W,W+Ge));W+=Ge;const ze=new Float32Array(A*5);for(let R=0;R<A;R++){const j=Be[R*4+0],te=Be[R*4+1],pe=Be[R*4+2],ie=Be[R*4+3];let oe=0;for(let B=1;B<=Q&&ne[B]<=te;B++)oe=B;let me=0;for(let B=1;B<=le&&de[B]<=j;B++)me=B;const be=te-ne[oe],xe=j-de[me],Oe=me*Q+oe;ze[R*5+0]=xe,ze[R*5+1]=be,ze[R*5+2]=pe,ze[R*5+3]=ie,ze[R*5+4]=Oe}if(X===kn||X===Qt){if(W+24>r.byteLength)throw new Error("NAT2 truncated at RVQP sub-header");const R=l.decode(new Uint8Array(r,W,4));if(R!=="RVQP")throw new Error(`NAT2 RVQP bad sub-magic: '${R}'`);const j=C.getUint32(W+4,!0),te=C.getUint32(W+8,!0),pe=C.getUint32(W+12,!0),ie=C.getUint32(W+16,!0),oe=C.getUint32(W+20,!0);if(j!==1)throw new Error(`NAT2 RVQP unsupported version ${j}`);if(ie!==A)throw new Error(`NAT2 RVQP num_rects ${ie} != header num_rects ${A}`);if(W+=24,W+16>r.byteLength)throw new Error("NAT2 truncated at RVQP dequant");const me=new Float32Array(r.slice(W,W+8)),be=new Float32Array(r.slice(W+8,W+16));W+=16;const xe=te*pe,Oe=2*te*pe,B=X===Qt?(xe>>2)*(Oe>>2)*16:xe*Oe*4;if(W+B>r.byteLength)throw new Error(`NAT2 RVQP truncated at codebook (need ${B}, have ${r.byteLength-W})`);const O=new Uint8Array(r.slice(W,W+B));W+=B;const v=oe*4;if(W+v>r.byteLength)throw new Error(`NAT2 RVQP truncated at indices (need ${v}, have ${r.byteLength-W})`);const o=new Uint32Array(r.slice(W,W+v));W+=v;const h=(A+1)*4;if(W+h>r.byteLength)throw new Error(`NAT2 RVQP truncated at surfel_offsets (need ${h}, have ${r.byteLength-W})`);const d=new Uint32Array(r.slice(W,W+h));return W+=h,{width:k,height:M,channels:N,kernel_type:T,num_rects:A,uv_extent:V,sb_number:G,format:X,sh_bias:z,res_bias:H,compact_mult:Z,layer_h:q,atlas_scale:ce,atlas_offset:U,n_layers:Q,n_cols:le,layer_cuts:ne,column_cuts:de,slice_width:we,rects_expanded:ze,atlas_bytes:new Uint8Array,rvq_paired:{K_orig:te,B:pe,N_used:oe,pair_scale:me,pair_offset:be,codebook_image:O,packed_indices:o,surfel_offsets:d}}}let De;const Me=k/4*16;if(X===Mn){if(W+24>r.byteLength)throw new Error("NAT2 truncated at BCCB sub-header");const R=l.decode(new Uint8Array(r,W,4));if(R!=="BCCB")throw new Error(`NAT2 BCCB bad sub-magic: '${R}'`);const j=C.getUint32(W+4,!0),te=C.getUint32(W+8,!0),pe=C.getUint32(W+12,!0),ie=C.getUint32(W+16,!0),oe=C.getUint32(W+20,!0);if(j!==1)throw new Error(`NAT2 BCCB unsupported version ${j}`);if(pe!==M/4||ie!==k/4||oe!==pe*ie)throw new Error(`NAT2 BCCB block grid mismatch: header ${k}×${M}, sub-header ${ie}×${pe} (${oe} blocks)`);W+=24;const me=te*16;if(W+me>r.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${me}, have ${r.byteLength-W})`);const be=new Uint8Array(r,W,me);W+=me;const xe=oe*2;if(W+xe>r.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${xe}, have ${r.byteLength-W})`);const Oe=new Uint16Array(r.slice(W,W+xe));W+=xe;const B=new Uint8Array(oe*16);for(let O=0;O<oe;O++){const v=Oe[O]*16;B.set(be.subarray(v,v+16),O*16)}De=B}else{let R=0;for(let j=0;j<Q;j++){const te=ne[j+1]-ne[j];if(te%4!==0)throw new Error(`NAT2 BC7 layer ${j} rows ${te} not 4-aligned`);R+=te/4*Me}if(W+R>r.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${R} more bytes from offset ${W}, have ${r.byteLength-W}`);De=new Uint8Array(r.slice(W,W+R))}return{width:k,height:M,channels:N,kernel_type:T,num_rects:A,uv_extent:V,sb_number:G,format:X,sh_bias:z,res_bias:H,compact_mult:Z,layer_h:q,atlas_scale:ce,atlas_offset:U,n_layers:Q,n_cols:le,layer_cuts:ne,column_cuts:de,slice_width:we,rects_expanded:ze,atlas_bytes:De}}const Vl=32;function Ol(r){const l=r.createTexture({label:"atlas_array stub (4x4x1 zero rgba8unorm)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),C=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"});return{tex:l,view:f,sampler:C}}function Fl(r){const l=r.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d"}),C=r.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),w=r.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),k=w.createView({dimension:"2d"}),M=r.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return{cbTex:l,cbView:f,cbSamp:C,packedTex:w,packedView:k,offsetsBuf:M}}function Nl(r,l,f){const C=l.format===kn||l.format===Qt,w=l.format===Qt;let k,M,N,T;if(C){const U=Ol(r);k=U.tex,M=U.view,N=U.sampler,T="RVQ-paired atlas"}else if(l.format===2||l.format===Mn){if(!r.features.has("texture-compression-bc"))return _t(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;T=l.format===Mn?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:k,view:M,sampler:N}=Ki(r,l,"bc7-rgba-unorm",T)}else if(l.format===3){if(!r.features.has("texture-compression-astc"))return _t("⚠️  bundle is ASTC 4x4 but texture-compression-astc not supported — atlas disabled"),null;T="ASTC 4x4 atlas",{texture:k,view:M,sampler:N}=Ki(r,l,"astc-4x4-unorm",T)}else return _t(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:A}=l,V=r.createBuffer({label:"atlas rects (5-stride)",size:dn(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(V,0,A);let G,X,z,H,Z,q;if(C){if(!l.rvq_paired)throw new Error("atlas.format = 5 but rvq_paired payload missing");const U=l.rvq_paired,Q=U.K_orig*U.B,K=2*U.K_orig*U.B;if(Q>r.limits.maxTextureDimension2D||K>r.limits.maxTextureDimension2D)return _t(`⚠️  RVQ codebook ${Q}x${K} exceeds maxTextureDimension2D=${r.limits.maxTextureDimension2D} — atlas disabled`),null;let le,W;if(w){if(!r.features.has("texture-compression-bc"))return _t("⚠️  bundle is RVQ-paired typeB (BC7 codebook) but texture-compression-bc unsupported — atlas disabled"),null;le="bc7-rgba-unorm",W=(Q>>2)*16}else le="rgba8unorm",W=Q*4;const he=r.createTexture({label:w?"rvq paired codebook (BC7)":"rvq paired codebook (rgba8)",size:{width:Q,height:K,depthOrArrayLayers:1},format:le,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});r.queue.writeTexture({texture:he},U.codebook_image,{offset:0,bytesPerRow:W,rowsPerImage:K},{width:Q,height:K,depthOrArrayLayers:1}),G=he,X=he.createView({dimension:"2d"}),z=r.createSampler({label:"rvq paired codebook sampler (linear)",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const ne=8192,de=U.N_used,we=Math.ceil(de/ne);if(we>r.limits.maxTextureDimension2D||ne>r.limits.maxTextureDimension2D)return _t(`⚠️  RVQ packed_indices texture ${ne}x${we} exceeds maxTextureDimension2D=${r.limits.maxTextureDimension2D} — atlas disabled`),null;H=r.createTexture({label:"rvq packed_indices (r32uint)",size:{width:ne,height:we,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const Ge=ne*we;let Be;if(Ge===de)Be=new Uint8Array(U.packed_indices.buffer,U.packed_indices.byteOffset,U.packed_indices.byteLength);else{const ze=new Uint32Array(Ge);ze.set(U.packed_indices),Be=new Uint8Array(ze.buffer)}r.queue.writeTexture({texture:H},Be,{offset:0,bytesPerRow:ne*4,rowsPerImage:we},{width:ne,height:we,depthOrArrayLayers:1}),Z=H.createView({dimension:"2d"}),q=r.createBuffer({label:"rvq surfel_offsets",size:dn(U.surfel_offsets.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),r.queue.writeBuffer(q,0,U.surfel_offsets),_t(`🪡 RVQ-paired atlas wired: codebook ${Q}x${K} (${(U.codebook_image.byteLength/1024/1024).toFixed(1)} MB), ${de.toLocaleString()} packed indices as r32uint ${ne}x${we} (${(U.packed_indices.byteLength/1024/1024).toFixed(1)} MB), ${U.surfel_offsets.length} surfel_offsets`)}else{const U=Fl(r);G=U.cbTex,X=U.cbView,z=U.cbSamp,H=U.packedTex,Z=U.packedView,q=U.offsetsBuf}const ce=r.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return ar(r,ce,l,f),{texture:k,view:M,sampler:N,rectsBuffer:V,texParamsBuffer:ce,meta:l,rvqCodebookTexture:G,rvqCodebookView:X,rvqCodebookSampler:z,rvqPackedIndicesTexture:H,rvqPackedIndicesView:Z,rvqSurfelOffsetsBuffer:q}}function Ki(r,l,f,C){const{width:w,layer_h:k,n_layers:M,n_cols:N,layer_cuts:T,column_cuts:A,slice_width:V,atlas_bytes:G}=l,z=w/4*16,H=r.limits.maxTextureDimension2D;if(k>H||V>H)throw new Error(`⚠️  atlas slice dims ${V}x${k} exceed maxTextureDimension2D=${H}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const Z=N*M;if(Z>r.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${N} cols × ${M} layers = ${Z} slices > maxTextureArrayLayers=${r.limits.maxTextureArrayLayers}.`);const q=r.createTexture({label:C,size:{width:V,height:k,depthOrArrayLayers:Z},mipLevelCount:1,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let Q=0;Q<N;Q++){const K=A[Q]/4,le=(A[Q+1]-A[Q])/4;for(let W=0;W<M;W++){const he=T[W]/4,ne=(T[W+1]-T[W])/4,de=Q*M+W,we=he*z+K*16;r.queue.writeTexture({texture:q,mipLevel:0,origin:{x:0,y:0,z:de},aspect:"all"},G,{offset:we,bytesPerRow:z,rowsPerImage:ne},{width:le*4,height:ne*4,depthOrArrayLayers:1})}}const ce=q.createView({label:`${C} view`,dimension:"2d-array"}),U=r.createSampler({label:`${C} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest"});return{texture:q,view:ce,sampler:U}}function ar(r,l,f,C){const w=new ArrayBuffer(48),k=new Uint32Array(w),M=new Float32Array(w),N=f.slice_width||f.width;k[0]=C?N:0,k[1]=f.layer_h;let T=f.format;T===Qt&&(T=kn),T===Mn&&(T=2),k[2]=T,M[3]=f.atlas_scale,M[4]=f.atlas_offset,M[5]=f.uv_extent,M[6]=f.res_bias,f.rvq_paired?(k[7]=f.rvq_paired.B,M[8]=f.rvq_paired.pair_scale[0],M[9]=f.rvq_paired.pair_scale[1],M[10]=f.rvq_paired.pair_offset[0],M[11]=f.rvq_paired.pair_offset[1]):(k[7]=0,M[8]=0,M[9]=0,M[10]=0,M[11]=0),r.queue.writeBuffer(l,0,w)}async function Ss(r,l){_t(`loading ply file from File... : ${r.name}`),Ds("downloading PLY...");const f=await r.arrayBuffer();try{return await lr(f,l)}finally{En()}}async function ql(r,l){_t(`loading ply file from URL... : ${r}`),Ds("downloading PLY...");try{or();const f=new URL(r,self.location.href).href;return await lr({url:f},l)}finally{En()}}async function lr(r,l){return new Promise((f,C)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=k=>{var N,T,A,V,G,X,z,H,Z,q,ce,U;const M=k.data;if((M==null?void 0:M.type)==="error"){Ll(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const Q=M.totalBytes,K=M.loadedBytes/(1024*1024),le=Q?Q/(1024*1024):void 0,W=(M.speedBps??0)/(1024*1024),he=Q?Math.min(99,Math.floor(M.loadedBytes/Q*100)):void 0,ne=le?`total ${le.toFixed(1)} MB`:"total -- MB",de=le&&he!==void 0?`${K.toFixed(1)} MB downloaded (${he}%)`:`${K.toFixed(1)} MB downloaded`,we=`${W.toFixed(2)} MB/s`;It(`downloading PLY ...
${ne}, ${de}
${we}`);return}else if((M==null?void 0:M.type)==="fetched"){_t(`💾 Fetched (${M.byteLength} bytes)`),ji("Download"),It("parsing PLY..."),or();return}else if((M==null?void 0:M.type)==="parse_progress"){const Q=M.total??0,K=M.read??0,le=Q>0?Math.floor(K/Q*100):0;It(`parsing PLY ...
${K}/${Q} surfels (${le}%)`);return}else if((M==null?void 0:M.type)==="done"){const Q=M.num_points,K=M.K,le=M.feature_mode??0,W=M.sh_bias,he=M.kernel_type,ne=M.surfelBuffer,de=M.svParamsBuffer;_t(`🪐 Total surfels: ${Q}, mode=${le===1?"SB":"SV"}, K=${K}, sh_bias=${W}, kernel_type=${he}`);const Ge=l.createBuffer({label:"surfel input buffer",size:dn(Q*Vl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(Ge,0,ne);const Be=de.byteLength>0?de.byteLength:16,ze=l.createBuffer({label:le===1?"color_params buffer (SB)":"color_params buffer (SV)",size:dn(Be),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});de.byteLength>0&&l.queue.writeBuffer(ze,0,de),w.terminate(),ji("Parse"),f({num_points:Q,K,feature_mode:le,sh_bias:W,kernel_type:he,surfel_buffer:Ge,surfel_data:new Float32Array(ne),sv_params_buffer:ze,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((T=(N=M.bbox)==null?void 0:N.min)==null?void 0:T[0])??-1)+(((V=(A=M.bbox)==null?void 0:A.max)==null?void 0:V[0])??1))/2,((((X=(G=M.bbox)==null?void 0:G.min)==null?void 0:X[1])??-1)+(((H=(z=M.bbox)==null?void 0:z.max)==null?void 0:H[1])??1))/2,((((q=(Z=M.bbox)==null?void 0:Z.min)==null?void 0:q[2])??-1)+(((U=(ce=M.bbox)==null?void 0:ce.max)==null?void 0:U[2])??1))/2]})}},w.onerror=k=>{w.terminate(),C(k)},r instanceof ArrayBuffer?(It("parsing PLY..."),w.postMessage({type:"start",plyBuffer:r},[r])):w.postMessage({type:"start_url",url:r.url})})}var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cs={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(r,l){(function(f,C){C(l)})($l,function(f){class C{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class k{constructor(e){this.target=e}}class M extends k{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class N extends k{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends k{constructor(e,t){super(e),this.expanded=t}}class A extends k{constructor(e,t){super(e),this.index=t}}function V(n){return n}function G(n){return n==null}function X(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function z(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const H={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Z{static alreadyDisposed(){return new Z({type:"alreadydisposed"})}static notBindable(){return new Z({type:"notbindable"})}static propertyNotFound(e){return new Z({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new Z({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=H[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!q.isBindable(s))throw Z.notBindable();if(!(e in s))throw Z.propertyNotFound(e);s[e]=t}}class ce extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new k(this))}),this}}class U{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Q="tp";function K(n){return(t,s)=>[Q,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function le(n,e){return t=>e(n(t))}function W(n){return n.rawValue}function he(n,e){n.emitter.on("change",le(W,e)),e(n.rawValue)}function ne(n,e,t){he(n.value(e),t)}function de(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function we(n,e){return t=>{de(n,e,t)}}function Ge(n,e){he(n,t=>{e.textContent=t??""})}const Be=K("btn");class ze{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Be()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Be("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Be("t")),Ge(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class De{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ze(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ye{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new U,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class Me{constructor(e){this.emitter=new U,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function R(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new Me(n):new ye(n,e)}class j{constructor(e){this.emitter=new U,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:R(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new j(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function te(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const D=e[P],J=D(n[P]);return J.succeeded?Object.assign(Object.assign({},c),{[P]:J.value}):void 0},{});return s}function pe(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function ie(n){return n===null?!1:typeof n=="object"}function oe(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function me(n){return{custom:e=>oe(e)(n),boolean:oe(e=>typeof e=="boolean"?e:void 0)(n),number:oe(e=>typeof e=="number"?e:void 0)(n),string:oe(e=>typeof e=="string"?e:void 0)(n),function:oe(e=>typeof e=="function"?e:void 0)(n),constant:e=>oe(t=>t===e?e:void 0)(n),raw:oe(e=>e)(n),object:e=>oe(t=>{if(ie(t))return te(t,e)})(n),array:e=>oe(t=>{if(Array.isArray(t))return pe(t,e)})(n)}}const be={optional:me(!0),required:me(!1)};function xe(n,e){const t=be.required.object(e)(n);return t.succeeded?t.value:void 0}function Oe(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class O{constructor(e){this.value_=e}static create(e){return[new O(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=K("");function o(n,e){return we(n,v(void 0,e))}class h extends j{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=O.create(R(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new h(j.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,o(e,"disabled")),ne(this,"hidden",o(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function d(){return["veryfirst","first","last","verylast"]}const g=K(""),y={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class S{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{d().forEach(s=>{t.classList.remove(g(void 0,y[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(g(void 0,y[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Oe({key:"parent",target:h.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const E="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function u(n){return n.ontouchstart!==void 0}function p(){return globalThis}function a(){return p().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const x={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function b(n,e){const t=n.createElementNS(E,"svg");return t.innerHTML=x[e],t}function I(n,e,t){n.insertBefore(e,n.children[t])}function F(n){n.parentElement&&n.parentElement.removeChild(n)}function $(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ae(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function se(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ee=K("lbl");function fe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Pe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ee()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ee("l")),ne(t.props,"label",P=>{G(P)?this.element.classList.add(ee(void 0,"nol")):(this.element.classList.remove(ee(void 0,"nol")),ae(s),s.appendChild(fe(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(ee("v")),this.element.appendChild(c),this.valueElement=c}}class ve extends S{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Pe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ge={id:"button",type:"blade",accept(n){const e=be,t=xe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ve(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:new De(n.document,{props:j.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ve)||!(n.controller.valueController instanceof De)?null:new ce(n.controller)}};class Ae extends S{constructor(e){super(e),this.value=e.value}}function Te(){return new j({positions:R([],{equals:X})})}class $e extends j{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=j.createCore(t);return new $e(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!G(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ne(this,"expanded",s),ne(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ze(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function je(n,e){e.style.height=n.styleHeight}function We(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),G(n.get("expandedHeight"))){const t=Ze(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{je(n,e)}),je(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends w{constructor(e,t){super(e),this.rackApi_=t}}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ke(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function nt(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function rt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class st{constructor(e){this.emitter=new U,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw Z.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Je extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class qe extends ve{constructor(e,t){super(e,t),this.binding=t.binding}}class et extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new U,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new N(this,t,this.controller_.binding.target.presetKey)})}}class He extends ve{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function lt(n){return n instanceof wt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function tt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw Z.shouldNeverHappen();return t}function St(n,e,t){if(!q.isBindable(n))throw Z.notBindable();return new q(n,e,t)}class wt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new U,this.apiSet_=new st(lt),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>tt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createInput(P,St(e,t,c.presetKey),c),J=new Je(D);return this.add(J,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,D=this.pool_.createMonitor(P,St(e,t),c),J=new et(D);return this.add(J,c.index)}addFolder(e){return Ke(this,e)}addButton(e){return it(this,e)}addSeparator(e){return nt(this,e)}addTab(e){return rt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=tt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof qe){const s=tt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ae){const s=tt(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof He))throw Z.shouldNeverHappen();const t=tt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new N(t,s.target.read(),s.target.presetKey)})}}class bt extends Qe{constructor(e,t){super(e,new wt(e.rackController,t)),this.emitter_=new U,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class gt extends S{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class re{constructor(e,t){const s=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function _e(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof qe&&s.binding===e)return s}return null}function ue(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof He&&s.binding===e)return s}return null}function Ue(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ae&&s.value===e)return s}return null}function Ve(n){return n instanceof Ce?n.rack:n instanceof gt?n.rackController.rack:null}function Ee(n){const e=Ve(n);return e?e.bcSet_:null}class Ie{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new U,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new st(Ee),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),z(e,"parent")?e.parent=this:(e.parent_=this,Oe({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){z(e,"parent")?e.parent=null:(e.parent_=null,Oe({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof qe)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Ve(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof qe)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof He)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ae)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Ve(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=_e(this.find(qe),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=ue(this.find(He),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=Ue(this.find(Ae),e.sender);if(!t)throw Z.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ce extends S{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new re(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new Ie({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&I(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&F(e.bladeController.view.element)}}const Ye=K("cnt");class ot{constructor(e,t){var s;this.className_=K((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Ye()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ne(this.foldable_,"completed",we(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ne(t.props,"title",ke=>{G(ke)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const D=e.createElement("div");D.classList.add(this.className_("t")),Ge(t.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const J=e.createElement("div");J.classList.add(this.className_("m")),this.buttonElement.appendChild(J);const Se=t.containerElement;Se.classList.add(this.className_("c")),this.element.appendChild(Se),this.containerElement=Se}}class ft extends gt{constructor(e,t){var s;const c=$e.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new Ce(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new ot(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,We(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Yn={id:"folder",type:"blade",accept(n){const e=be,t=xe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new ft(n.document,{blade:n.blade,expanded:n.params.expanded,props:j.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof ft?new bt(n.controller,n.pool):null}};class kt extends Ae{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Pe(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class pn extends w{}const Bn=K("spr");class Tn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Bn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(Bn("r")),this.element.appendChild(s)}}class Dn extends S{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Tn(e,{viewProps:t.viewProps})}))}}const Zn={id:"separator",type:"blade",accept(n){const t=xe(n,{view:be.required.constant("separator")});return t?{params:t}:null},controller(n){return new Dn(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Dn?new pn(n.controller):null}},Lt=K("tbi");class Xn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Lt()),t.viewProps.bindClassModifiers(this.element),ne(t.props,"selected",P=>{P?this.element.classList.add(Lt(void 0,"sel")):this.element.classList.remove(Lt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(Lt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(Lt("t")),Ge(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class An{constructor(e,t){this.emitter=new U,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Xn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ht{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new An(e,{props:t.itemProps,viewProps:h.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ce(e,{blade:Te(),viewProps:h.create()}),this.props=t.props,ne(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class zt{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class qt extends Qe{constructor(e,t){super(e,new wt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new U,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw Z.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ht(t,{itemProps:j.fromObject({selected:!1,title:e.title}),props:j.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw Z.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw Z.shouldNeverHappen();const s=new zt(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw Z.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const Ct=-1;class en{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=R(!0),this.selectedIndex=R(Ct),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Ct,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Et=K("tab");class Qn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Et(),Ye()),t.viewProps.bindClassModifiers(this.element),he(t.empty,we(this.element,Et(void 0,"nop")));const s=e.createElement("div");s.classList.add(Et("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Et("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(Et("c")),this.element.appendChild(P),this.contentsElement=P}}class tn extends gt{constructor(e,t){const s=new Ce(e,{blade:t.blade,viewProps:t.viewProps}),c=new en;super({blade:t.blade,rackController:s,view:new Qn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new st(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;I(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;F(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const Is={id:"tab",type:"blade",accept(n){const e=be,t=xe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new tn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ht(n.document,{itemProps:j.fromObject({selected:!1,title:t.title}),props:j.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof tn?new qt(n.controller,n.pool):null}};function xr(n,e){const t=n.accept(e.params);if(!t)return null;const s=be.optional.boolean(e.params.disabled).value,c=be.optional.boolean(e.params.hidden).value;return n.controller({blade:Te(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:h.create({disabled:s,hidden:c})})}class yr{constructor(){this.disabled=!1,this.emitter=new U}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Pr{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new U,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Sr{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new U,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Ls(n,e){for(;n.length<e;)n.push(void 0)}function Cr(n){const e=[];return Ls(e,n),R(e)}function Er(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function kr(n,e){const t=[...Er(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Ls(t,n.length),t}class Mr{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new U,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=kr(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class hn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Mt(n,e){if(n instanceof e)return n;if(n instanceof hn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class nn{constructor(e){this.values=j.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class fn{constructor(e){this.values=j.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class zs{constructor(e){this.values=j.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return G(s)||(c=Math.max(c,s)),G(t)||(c=Math.min(c,t)),c}}class In{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Jn=K("lst");class Br{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Jn("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(Jn("m")),c.appendChild(b(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ne(this.props_,"options",P=>{$(this.selectElement),P.forEach(D=>{const J=e.createElement("option");J.textContent=D.text,this.selectElement.appendChild(J)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class _n{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Br(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Us=K("pop");class Tr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Us()),t.viewProps.bindClassModifiers(this.element),he(t.shows,we(this.element,Us(void 0,"v")))}}class Gs{constructor(e,t){this.shows=R(!1),this.viewProps=t.viewProps,this.view=new Tr(e,{shows:this.shows,viewProps:this.viewProps})}}const Rs=K("txt");class Dr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Rs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Rs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Ln{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Dr(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=c),this.view.refresh()}}function Ar(n){return String(n)}function Vs(n){return n==="false"?!1:!!n}function Os(n){return Ar(n)}class Ir{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Lr={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class zr{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Lr[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ur={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gr{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ur[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function es(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function mn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Rr(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function vn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vr(n,e){const t=vn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=vn(n,e);return c===""?"":s+c}function ts(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Vr(n,e);return s===""?"":t+s}function Fs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Rr(n,e);return e+=s.length,s===""?"":s+vn(n,e)}function Or(n,e){const t=Fs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=vn(n,e);return e+=c.length,t+s+c+ts(n,e)}function Fr(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=vn(n,e);return e+=s.length,s===""?"":t+s+ts(n,e)}function Nr(n,e){const t=Fs(n,e);return e+=t.length,t===""?"":t+ts(n,e)}const qr=es([Or,Fr,Nr]);function $r(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=$r(n,e);return s===""?"":t+s}function jr(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Kr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=jr(n,e);return s===""?"":t+s}function Hr(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Yr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hr(n,e);return s===""?"":t+s}const Zr=es([Wr,Kr,Yr]),Xr=es([Zr,qr]);function Qr(n,e){const t=Xr(n,e);return e+=t.length,t===""?null:{evaluable:new Ir(t),cursor:e}}function Jr(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=qs(n,e);if(!s)return null;e=s.cursor,e+=mn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function eo(n,e){var t;return(t=Qr(n,e))!==null&&t!==void 0?t:Jr(n,e)}function Ns(n,e){const t=eo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Ns(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gr(s,c.evaluable)}):null}function to(n,e,t){t+=mn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=mn(e,t).length,{cursor:t,operator:s}):null}function no(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const D=to(e,t,s);if(!D)break;s=D.cursor;const J=n(t,s);if(!J)return null;s=J.cursor,P=new zr(D.operator,P,J.evaluable)}return P?{cursor:s,evaluable:P}:null}}const so=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>no(n,e),Ns);function qs(n,e){return e+=mn(n,e).length,so(n,e)}function io(n){const e=qs(n,0);return!e||e.cursor+mn(n,e.cursor).length!==n.length?null:e.evaluable}function Bt(n){var e;const t=io(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function $s(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Bt(n);if(!G(e))return e}return 0}function ro(n){return String(n)}function ut(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const oo=ut(0);function zn(n){return oo(n)+"%"}function Ws(n){return String(n)}function ns(n){return n}function bn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(D){c||(c=!0,D(),c=!1)}n.emitter.on("change",D=>{P(()=>{e.setRawValue(t(n,e),D.options)})}),e.emitter.on("change",D=>{P(()=>{n.setRawValue(s(n,e),D.options)}),P(()=>{e.setRawValue(t(n,e),D.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function gn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Tt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ao(n){return n==="ArrowUp"||n==="ArrowDown"}function js(n){return ao(n)||n==="ArrowLeft"||n==="ArrowRight"}function ss(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class $t{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new U,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(ss(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(ss(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(ss(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Xe(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function Ks(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function at(n,e,t){return Math.min(Math.max(n,e),t)}function Hs(n,e){return(n%e+e)%e}const xt=K("txt");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(xt(),xt(void 0,"num")),t.arrayPosition&&this.element.classList.add(xt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(xt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xt()),this.inputElement.classList.add(xt("i"));const c=e.createElement("div");c.classList.add(xt("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(E,"svg");P.classList.add(xt("g")),this.knobElement.appendChild(P);const D=e.createElementNS(E,"path");D.classList.add(xt("gb")),P.appendChild(D),this.guideBodyElem_=D;const J=e.createElementNS(E,"path");J.classList.add(xt("gh")),P.appendChild(J),this.guideHeadElem_=J;const Se=e.createElement("div");Se.classList.add(K("tt")()),this.knobElement.appendChild(Se),this.tooltipElem_=Se,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(xt(void 0,"drg"));return}this.element.classList.add(xt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=at(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class wn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=R(null),this.view=new lo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new $t(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let D=e;return c!==void 0&&(D=Math.max(D,c)),P!==void 0&&(D=Math.min(D,P)),D}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);G(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,gn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,gn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const is=K("sld");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(is("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(is("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=at(Xe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class uo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new co(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Xe(at(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,Tt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const rs=K("sldtxt");class po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(rs());const s=e.createElement("div");s.classList.add(rs("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(rs("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class os{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new uo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new wn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new po(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function xn(n,e){n.write(e)}function Un(n){const e=be;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Ys(n){if(n==="inline"||n==="popup")return n}function Ut(n){const e=be;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Zs(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function as(n){return G(n)?null:new fn(Zs(n))}function ho(n){const e=n?Mt(n,In):null;return e?e.step:null}function Gn(n,e){const t=n&&Mt(n,In);return t?Ks(t.step):Math.max(Ks(e),2)}function sn(n){const e=ho(n);return e??1}function rn(n,e){var t;const s=n&&Mt(n,In),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Rn=K("ckb");class fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Rn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Rn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Rn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Rn("w")),s.appendChild(P);const D=b(e,"check");P.appendChild(D),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class _o{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new fo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function mo(n){const e=[],t=as(n.options);return t&&e.push(t),new hn(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{options:be.optional.custom(Un)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs,constraint:n=>mo(n.params),writer:n=>xn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Mt(s,fn);return c?new _n(e,{props:new j({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new _o(e,{value:t,viewProps:n.viewProps})}},Wt=K("col");class bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wt()),t.foldable.bindExpandedClass(this.element,Wt(void 0,"expanded")),ne(t.foldable,"completed",we(this.element,Wt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Wt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Wt("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(Wt("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(Wt("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}function go(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),P=at(t/255,0,1),D=Math.max(s,c,P),J=Math.min(s,c,P),Se=D-J;let ke=0,Fe=0;const Ne=(J+D)/2;return Se!==0&&(Fe=Se/(1-Math.abs(D+J-1)),s===D?ke=(c-P)/Se:c===D?ke=2+(P-s)/Se:ke=4+(s-c)/Se,ke=ke/6+(ke<0?1:0)),[ke*360,Fe*100,Ne*100]}function wo(n,e,t){const s=(n%360+360)%360,c=at(e/100,0,1),P=at(t/100,0,1),D=(1-Math.abs(2*P-1))*c,J=D*(1-Math.abs(s/60%2-1)),Se=P-D/2;let ke,Fe,Ne;return s>=0&&s<60?[ke,Fe,Ne]=[D,J,0]:s>=60&&s<120?[ke,Fe,Ne]=[J,D,0]:s>=120&&s<180?[ke,Fe,Ne]=[0,D,J]:s>=180&&s<240?[ke,Fe,Ne]=[0,J,D]:s>=240&&s<300?[ke,Fe,Ne]=[J,0,D]:[ke,Fe,Ne]=[D,0,J],[(ke+Se)*255,(Fe+Se)*255,(Ne+Se)*255]}function xo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),P=at(t/255,0,1),D=Math.max(s,c,P),J=Math.min(s,c,P),Se=D-J;let ke;Se===0?ke=0:D===s?ke=60*(((c-P)/Se%6+6)%6):D===c?ke=60*((P-s)/Se+2):ke=60*((s-c)/Se+4);const Fe=D===0?0:Se/D,Ne=D;return[ke,Fe*100,Ne*100]}function Xs(n,e,t){const s=Hs(n,360),c=at(e/100,0,1),P=at(t/100,0,1),D=P*c,J=D*(1-Math.abs(s/60%2-1)),Se=P-D;let ke,Fe,Ne;return s>=0&&s<60?[ke,Fe,Ne]=[D,J,0]:s>=60&&s<120?[ke,Fe,Ne]=[J,D,0]:s>=120&&s<180?[ke,Fe,Ne]=[0,D,J]:s>=180&&s<240?[ke,Fe,Ne]=[0,J,D]:s>=240&&s<300?[ke,Fe,Ne]=[J,0,D]:[ke,Fe,Ne]=[D,0,J],[(ke+Se)*255,(Fe+Se)*255,(Ne+Se)*255]}function yo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Po(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function jt(n){return[n[0],n[1],n[2]]}function Qs(n,e){return[n[0],n[1],n[2],e]}const So={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:yo,rgb:wo},hsv:{hsl:Po,hsv:(n,e,t)=>[n,e,t],rgb:Xs},rgb:{hsl:go,hsv:xo,rgb:(n,e,t)=>[n,e,t]}};function Vn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:Hs(n,e)}function Eo(n,e,t){var s;const c=Vn(e,t);return[e==="rgb"?at(n[0],0,c[0]):Co(n[0],c[0]),at(n[1],0,c[1]),at(n[2],0,c[2]),at((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Js(n,e,t,s){const c=Vn(e,t),P=Vn(e,s);return n.map((D,J)=>D/c[J]*P[J])}function ko(n,e,t){const s=Js(n,e.mode,e.type,"int"),c=So[e.mode][t.mode](...s);return Js(c,t.mode,"int",t.type)}function On(n,e){return typeof n!="object"||G(n)?!1:e in n&&typeof n[e]=="number"}class Re{static black(e="int"){return new Re([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Re(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return On(e,"r")&&On(e,"g")&&On(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&On(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Eo(e,t,s)}getComponents(e,t="int"){return Qs(ko(jt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Gt=K("colp");class Mo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Gt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Gt("hsv"));const c=e.createElement("div");c.classList.add(Gt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Gt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const D=e.createElement("div");if(D.classList.add(Gt("rgb")),this.textView_=t.textView,D.appendChild(this.textView_.element),this.element.appendChild(D),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const J=e.createElement("div");J.classList.add(Gt("a"));const Se=e.createElement("div");Se.classList.add(Gt("ap")),Se.appendChild(this.alphaViews_.palette.element),J.appendChild(Se);const ke=e.createElement("div");ke.classList.add(Gt("at")),ke.appendChild(this.alphaViews_.text.element),J.appendChild(ke),this.element.appendChild(J)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Bo(n){return n==="int"?"int":n==="float"?"float":void 0}function ls(n){const e=be;return xe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Bo)}),expanded:e.optional.boolean,picker:e.optional.custom(Ys)})}function Kt(n){return n?.1:1}function Ht(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function To(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function yt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Do={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function ei(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Do[s](t)}function ti(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ni(n){return e=>{const t=ti(e);return t?new Re(t,"rgb",n):null}}function si(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[yt(e[1],255),yt(e[2],255),yt(e[3],255),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ii(n){return e=>{const t=si(e);return t?new Re(t,"rgb",n):null}}function ri(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ei(e[1]),yt(e[2],100),yt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function oi(n){return e=>{const t=ri(e);return t?new Re(t,"hsl",n):null}}function ai(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ei(e[1]),yt(e[2],100),yt(e[3],100),yt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function li(n){return e=>{const t=ai(e);return t?new Re(t,"hsl",n):null}}function ci(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Ao(n){const e=ci(n);return e?new Re(e,"rgb","int"):null}function ui(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Xe(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Xe(parseInt(t[4],16),0,255,0,1)]:null}function Io(n){const e=ui(n);return e?new Re(e,"rgb","int"):null}function di(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function pi(n){return e=>{const t=di(e);return t?new Re(t,"rgb",n):null}}function hi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function fi(n){return e=>{const t=hi(e);return t?new Re(t,"rgb",n):null}}const Lo=[{parser:ci,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ui,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ti,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:si,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ri,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ai,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:di,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:hi,result:{alpha:!0,mode:"rgb",notation:"object"}}];function zo(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function cs(n,e="int"){const t=zo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const _i={int:[Ao,Io,ni("int"),ii("int"),oi("int"),li("int"),pi("int"),fi("int")],float:[ni("float"),ii("float"),oi("float"),li("float"),pi("float"),fi("float")]};function Uo(n){const e=_i[n];return t=>{if(typeof t!="string")return Re.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Re.black(n)}}function us(n){const e=_i[n];return t=>e.reduce((s,c)=>s||c(t),null)}function mi(n){const e=at(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function vi(n,e="#"){const t=jt(n.getComponents("rgb")).map(mi).join("");return`${e}${t}`}function ds(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(mi).join("");return`${e}${s}`}function bi(n,e){const t=ut(e==="float"?2:0);return`rgb(${jt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>bi(e,n)}function Fn(n,e){const t=ut(2),s=ut(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,D)=>(D===3?t:s)(P)).join(", ")})`}function Ro(n){return e=>Fn(e,n)}function Vo(n){const e=[ut(0),zn,zn];return`hsl(${jt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Oo(n){const e=[ut(0),zn,zn,ut(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function gi(n,e){const t=ut(e==="float"?2:0),s=["r","g","b"];return`{${jt(n.getComponents("rgb",e)).map((P,D)=>`${s[D]}: ${t(P)}`).join(", ")}}`}function Fo(n){return e=>gi(e,n)}function wi(n,e){const t=ut(2),s=ut(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((D,J)=>{const Se=J===3?t:s;return`${c[J]}: ${Se(D)}`}).join(", ")}}`}function No(n){return e=>wi(e,n)}const qo=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:vi},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ds},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Ro(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:No(e)}],[])];function ps(n){return qo.reduce((e,t)=>e||(To(t.format,n)?t.stringifier:null),null)}const yn=K("apl");class $o{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(yn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(yn("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(yn("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(yn("m")),this.element.appendChild(P),this.markerElem_=P;const D=e.createElement("div");D.classList.add(yn("p")),this.markerElem_.appendChild(D),this.previewElem_=D,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Re([t[0],t[1],t[2],0],"rgb"),c=new Re([t[0],t[1],t[2],255],"rgb"),P=["to right",Fn(s),Fn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Fn(e);const D=Xe(t[3],0,1,0,100);this.markerElem_.style.left=`${D}%`}onValueChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new $o(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,D,J]=c.getComponents("hsv");this.value.setRawValue(new Re([P,D,J,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Kt(!0),Tt(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,J]=s.getComponents("hsv");this.value.setRawValue(new Re([c,P,D,J+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Kt(!0),Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const on=K("coltxt");function jo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(on("m")),this.modeElem_=jo(e),this.modeElem_.classList.add(on("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(on("mm")),c.appendChild(b(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(on("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,D=>{this.modeElem_.value=D})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){$(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(on("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return ut(n==="float"?2:0)}function Yo(n,e,t){const s=Vn(n,e)[t];return new nn({min:0,max:s})}function hs(n,e,t){return new wn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Kt(!1),parser:e.parser,props:j.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:R(0,{constraint:Yo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Zo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=R(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ko(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[hs(e,t,0),hs(e,t,1),hs(e,t,2)];return s.forEach((c,P)=>{bn({primary:this.value,secondary:c.value,forward:D=>D.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(D,J)=>{const Se=this.colorMode.rawValue,ke=D.rawValue.getComponents(Se,this.colorType_);return ke[P]=J.rawValue,new Re(Qs(jt(ke),ke[3]),Se,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const fs=K("hpl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(fs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(fs("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(fs("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=bi(new Re([t,100,100],"hsv"));const s=Xe(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(at(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,D,J]=c.getComponents("hsv");this.value.setRawValue(new Re([s,P,D,J],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Kt(!1),Tt(e));if(t===0)return;const s=this.value.rawValue,[c,P,D,J]=s.getComponents("hsv");this.value.setRawValue(new Re([c+t,P,D,J],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Kt(!1),Tt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const _s=K("svp"),xi=64;class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=xi,s.width=xi,s.classList.add(_s("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(_s("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,D=e.getImageData(0,0,c,P),J=D.data;for(let Fe=0;Fe<P;Fe++)for(let Ne=0;Ne<c;Ne++){const Yt=Xe(Ne,0,c,0,100),Sn=Xe(Fe,0,P,100,0),Cn=Xs(s[0],Yt,Sn),Nn=(Fe*c+Ne)*4;J[Nn]=Cn[0],J[Nn+1]=Cn[1],J[Nn+2]=Cn[2],J[Nn+3]=255}e.putImageData(D,0,0);const Se=Xe(s[1],0,100,0,100);this.markerElem_.style.left=`${Se}%`;const ke=Xe(s[2],0,100,100,0);this.markerElem_.style.top=`${ke}%`}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Xe(e.point.x,0,e.bounds.width,0,100),c=Xe(e.point.y,0,e.bounds.height,100,0),[P,,,D]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Re([P,s,c,D],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){js(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),D=Kt(!1),J=mt(D,Tt(e)),Se=mt(D,gn(e));J===0&&Se===0||this.value.setRawValue(new Re([t,s+J,c+Se,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Kt(!1),s=mt(t,Tt(e)),c=mt(t,gn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ta{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ea(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Wo(e,{value:this.value,viewProps:this.viewProps}),text:new wn(e,{parser:Bt,baseStep:.1,props:j.fromObject({draggingScale:.01,formatter:ut(2)}),value:R(0,{constraint:new nn({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&bn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Re(P,s.rawValue.mode)}}),this.textC_=new Zo(e,{colorType:t.colorType,parser:Bt,value:this.value,viewProps:this.viewProps}),this.view=new Mo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const ms=K("colsw");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(ms("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(ms("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ds(e)}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps})}}class vs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.swatchC_=new sa(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Ln(e,{parser:t.parser,props:j.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new bo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Gs(e,{viewProps:this.viewProps}):null;const c=new ta(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),bn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,D)=>D.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),We(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ia(n,e){return Re.isColorObject(n)?Re.fromObject(n,e):Re.black(e)}function ra(n){return jt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function oa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function aa(n){return new Re([n>>16&255,n>>8&255,n&255],"rgb")}function la(n){return new Re([n>>24&255,n>>16&255,n>>8&255,Xe(n&255,0,255,0,1)],"rgb")}function ca(n){return typeof n!="number"?Re.black():aa(n)}function ua(n){return typeof n!="number"?Re.black():la(n)}function da(n){const e=ps(n);return e?(t,s)=>{xn(t,e(s))}:null}function pa(n){const e=n?oa:ra;return(t,s)=>{xn(t,e(s))}}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function _a(n,e){return(t,s)=>{n?ha(t,s,e):fa(t,s,e)}}function bs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ma(n){return n?e=>ds(e,"0x"):e=>vi(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ba={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=ls(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>bs(n.params)?ua:ca,equals:Re.equals,writer:n=>pa(bs(n.params))},controller:n=>{const e=bs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new vs(n.document,{colorType:"int",expanded:t??!1,formatter:ma(e),parser:us("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ga(n){return Re.isRgbaColorObject(n)}function wa(n){return e=>ia(e,n)}function xa(n,e){return t=>n?wi(t,e):gi(t,e)}const ya={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Re.isColorObject(n))return null;const t=ls(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>wa(Ht(n.params)),equals:Re.equals,writer:n=>_a(ga(n.initialValue),Ht(n.params))},controller:n=>{var e;const t=Re.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=Ht(n.params))!==null&&e!==void 0?e:"int";return new vs(n.document,{colorType:P,expanded:s??!1,formatter:xa(t,P),parser:us(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Pa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=cs(n,Ht(e));if(!t||!ps(t))return null;const c=ls(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return Uo((e=Ht(n.params))!==null&&e!==void 0?e:"int")},equals:Re.equals,writer:n=>{const e=cs(n.initialValue,Ht(n.params));if(!e)throw Z.shouldNeverHappen();const t=da(e);if(!t)throw Z.notBindable();return t}},controller:n=>{const e=cs(n.initialValue,Ht(n.params));if(!e)throw Z.shouldNeverHappen();const t=ps(e);if(!t)throw Z.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new vs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:us(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Rt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,D;return(D=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&D!==void 0?D:s});return this.asm_.fromComponents(t)}}const yi=K("pndtxt");class Sa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(yi()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(yi("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ca(n,e,t){return new wn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:R(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class gs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ca(e,t,c)),this.acs_.forEach((s,c)=>{bn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,D)=>{const J=t.assembly.toComponents(P.rawValue);return J[c]=D.rawValue,t.assembly.fromComponents(J)}})}),this.view=new Sa(e,{textViews:this.acs_.map(s=>s.view)})}}function Pi(n,e){return"step"in n&&!G(n.step)?new In(n.step,e):null}function Si(n){return!G(n.max)&&!G(n.min)?new nn({max:n.max,min:n.min}):!G(n.max)||!G(n.min)?new zs({max:n.max,min:n.min}):null}function Ea(n){const e=Mt(n,nn);if(e)return[e.values.get("min"),e.values.get("max")];const t=Mt(n,zs);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function ka(n,e){const t=[],s=Pi(n,e);s&&t.push(s);const c=Si(n);c&&t.push(c);const P=as(n.options);return P&&t.push(P),new hn(t)}const Ma={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=be,s=xe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Un),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>$s,constraint:n=>ka(n.params,n.initialValue),writer:n=>xn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Mt(s,fn);if(c)return new _n(n.document,{props:new j({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:ut(Gn(s,t.rawValue)),D=s&&Mt(s,nn);return D?new os(n.document,{baseStep:sn(s),parser:Bt,sliderProps:new j({maxValue:D.values.value("max"),minValue:D.values.value("min")}),textProps:j.fromObject({draggingScale:rn(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new wn(n.document,{baseStep:sn(s),parser:Bt,props:j.fromObject({draggingScale:rn(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Vt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Ci={toComponents:n=>n.getComponents(),fromComponents:n=>new Vt(...n)},an=K("p2d");class Ba{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(an()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,we(this.element,an(void 0,"expanded")));const s=e.createElement("div");s.classList.add(an("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(an("b")),c.appendChild(b(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(an("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const D=e.createElement("div");D.classList.add(an("p")),this.element.appendChild(D),this.pickerElement=D}else this.pickerElement=null}}const Ot=K("p2dp");class Ta{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Ot()),t.layout==="popup"&&this.element.classList.add(Ot(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Ot("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(E,"svg");c.classList.add(Ot("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(E,"line");P.classList.add(Ot("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const D=e.createElementNS(E,"line");D.classList.add(Ot("ax")),D.setAttributeNS(null,"x1","50%"),D.setAttributeNS(null,"y1","0"),D.setAttributeNS(null,"x2","50%"),D.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(D);const J=e.createElementNS(E,"line");J.classList.add(Ot("l")),J.setAttributeNS(null,"x1","50%"),J.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(J),this.lineElem_=J;const Se=e.createElement("div");Se.classList.add(Ot("m")),this.padElement.appendChild(Se),this.markerElem_=Se,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Xe(e,-s,+s,0,100),P=Xe(t,-s,+s,0,100),D=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${D}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${D}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Ei(n,e,t){return[mt(e[0],Tt(n)),mt(e[1],gn(n))*(t?1:-1)]}class Da{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ta(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new $t(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Xe(e.point.x,0,e.bounds.width,-s,+s),P=Xe(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Vt(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){js(e.key)&&e.preventDefault();const[t,s]=Ei(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Vt(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Ei(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Aa{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=$e.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Gs(e,{viewProps:this.viewProps}):null;const P=new Da(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new gs(e,{assembly:Ci,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ba(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),bn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,J)=>J.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),We(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=se(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!u(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class ln{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const ki={toComponents:n=>n.getComponents(),fromComponents:n=>new ln(...n)};function Ia(n){return ln.isObject(n)?new ln(n.x,n.y,n.z):new ln}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function za(n,e){return new Rt({assembly:ki,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y),Dt("z"in n?n.z:void 0,e.z)]})}function ws(n,e){return{baseStep:sn(e),constraint:e,textProps:j.fromObject({draggingScale:rn(e,n),formatter:ut(Gn(e,n))})}}const Ua={id:"input-point3d",type:"input",accept:(n,e)=>{if(!ln.isObject(n))return null;const t=be,s=xe(e,{x:t.optional.custom(Ut),y:t.optional.custom(Ut),z:t.optional.custom(Ut)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>za(n.params,n.initialValue),equals:ln.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Rt))throw Z.shouldNeverHappen();return new gs(n.document,{assembly:ki,axes:[ws(e.rawValue.x,t.components[0]),ws(e.rawValue.y,t.components[1]),ws(e.rawValue.z,t.components[2])],parser:Bt,value:e,viewProps:n.viewProps})}};class cn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(G(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Mi={toComponents:n=>n.getComponents(),fromComponents:n=>new cn(...n)};function Ga(n){return cn.isObject(n)?new cn(n.x,n.y,n.z,n.w):new cn}function Ra(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Va(n,e){return new Rt({assembly:Mi,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y),Dt("z"in n?n.z:void 0,e.z),Dt("w"in n?n.w:void 0,e.w)]})}function Oa(n,e){return{baseStep:sn(e),constraint:e,textProps:j.fromObject({draggingScale:rn(e,n),formatter:ut(Gn(e,n))})}}const Fa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!cn.isObject(n))return null;const t=be,s=xe(e,{x:t.optional.custom(Ut),y:t.optional.custom(Ut),z:t.optional.custom(Ut),w:t.optional.custom(Ut)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Va(n.params,n.initialValue),equals:cn.equals,writer:n=>Ra},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Rt))throw Z.shouldNeverHappen();return new gs(n.document,{assembly:Mi,axes:e.rawValue.getComponents().map((s,c)=>Oa(s,t.components[c])),parser:Bt,value:e,viewProps:n.viewProps})}};function Na(n){const e=[],t=as(n.options);return t&&e.push(t),new hn(e)}const qa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=xe(e,{options:be.optional.custom(Un)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ws,constraint:n=>Na(n.params),writer:n=>xn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Mt(s,fn);return c?new _n(e,{props:new j({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Ln(e,{parser:P=>P,props:j.fromObject({formatter:ns}),value:t,viewProps:n.viewProps})}},Pn={monitor:{defaultInterval:200,defaultLineCount:3}},Bi=K("mll");class $a{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Bi()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Bi("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class xs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new $a(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Ti=K("sgl");class Wa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ti()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Ti("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ys{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Wa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const ja={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=xe(e,{lineCount:be.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Vs},controller:n=>{var e;return n.value.rawValue.length===1?new ys(n.document,{formatter:Os,value:n.value,viewProps:n.viewProps}):new xs(n.document,{formatter:Os,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Ft=K("grl");class Ka{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(E,"svg");s.classList.add(Ft("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(E,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add(Ft("t"),K("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const Yt=Xe(Ne,0,t,0,e.width),Sn=Xe(Fe,s,c,e.height,0);P.push([Yt,Sn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const D=this.tooltipElem_,J=this.value.rawValue[this.cursor_.rawValue];if(J===void 0){D.classList.remove(Ft("t","a"));return}const Se=Xe(this.cursor_.rawValue,0,t,0,e.width),ke=Xe(J,s,c,e.height,0);D.style.left=`${Se}px`,D.style.top=`${ke}px`,D.textContent=`${this.formatter_(J)}`,D.classList.contains(Ft("t","a"))||(D.classList.add(Ft("t","a"),Ft("t","in")),i(D),D.classList.remove(Ft("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=R(-1),this.view=new Ka(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!u(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new $t(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Xe(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Xe(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ps(n){return"format"in n&&!G(n.format)?n.format:ut(2)}function Ya(n){var e;return n.value.rawValue.length===1?new ys(n.document,{formatter:Ps(n.params),value:n.value,viewProps:n.viewProps}):new xs(n.document,{formatter:Ps(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Za(n){var e,t,s;return new Ha(n.document,{formatter:Ps(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,props:j.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Di(n){return"view"in n&&n.view==="graph"}const Xa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=be,s=xe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Di(n)?64:1,reader:n=>$s},controller:n=>Di(n.params)?Za(n):Ya(n)},Qa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=be,s=xe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ws},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new xs(n.document,{formatter:ns,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Pn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ys(n.document,{formatter:ns,value:t,viewProps:n.viewProps})}};function Ja(n,e){var t;const s=n.accept(e.target.read(),e.params);if(G(s))return null;const c=be,P={target:e.target,initialValue:s.initialValue,params:s.params},D=n.binding.reader(P),J=n.binding.constraint?n.binding.constraint(P):void 0,Se=R(D(s.initialValue),{constraint:J,equals:n.binding.equals}),ke=new Sr({reader:D,target:e.target,value:Se,writer:n.binding.writer(P)}),Fe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,Yt=n.controller({constraint:J,document:e.document,initialValue:s.initialValue,params:s.params,value:ke.value,viewProps:h.create({disabled:Fe,hidden:Ne})});return new qe(e.document,{binding:ke,blade:Te(),props:j.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Yt})}function el(n,e){return e===0?new yr:new Pr(n,e??Pn.monitor.defaultInterval)}function tl(n,e){var t,s,c;const P=be,D=n.accept(e.target.read(),e.params);if(G(D))return null;const J={target:e.target,initialValue:D.initialValue,params:D.params},Se=n.binding.reader(J),ke=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(D.params))!==null&&s!==void 0?s:1,Fe=P.optional.number(e.params.interval).value,Ne=new Mr({reader:Se,target:e.target,ticker:el(e.document,Fe),value:Cr(ke)}),Yt=P.optional.boolean(e.params.disabled).value,Sn=P.optional.boolean(e.params.hidden).value,Cn=n.controller({document:e.document,params:D.params,value:Ne.value,viewProps:h.create({disabled:Yt,hidden:Sn})});return new He(e.document,{binding:Ne,blade:Te(),props:j.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Cn})}class nl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(G(c))throw new Z({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((D,J)=>D??Ja(J,{document:e,target:t,params:s}),null);if(P)return P;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,D)=>P??tl(D,{document:e,params:s,target:t}),null);if(c)return c;throw new Z({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??xr(P,{document:e,params:t}),null);if(!s)throw new Z({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof qe)return new Je(e);if(e instanceof He)return new et(e);if(e instanceof Ce)return new wt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw Z.shouldNeverHappen();return t}}function sl(){const n=new nl;return[cl,Ua,Fa,qa,Ma,Pa,ya,ba,vo,ja,Qa,Xa,ge,Yn,Zn,Is].forEach(e=>{n.register(e)}),n}function il(n){return Vt.isObject(n)?new Vt(n.x,n.y):new Vt}function rl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Dt(n,e){if(!n)return;const t=[],s=Pi(n,e);s&&t.push(s);const c=Si(n);return c&&t.push(c),new hn(t)}function ol(n,e){return new Rt({assembly:Ci,components:[Dt("x"in n?n.x:void 0,e.x),Dt("y"in n?n.y:void 0,e.y)]})}function Ai(n,e){const[t,s]=n?Ea(n):[];if(!G(t)||!G(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=sn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function al(n,e){const t=e instanceof Rt?e.components[0]:void 0,s=e instanceof Rt?e.components[1]:void 0,c=Ai(t,n.x),P=Ai(s,n.y);return Math.max(c,P)}function Ii(n,e){return{baseStep:sn(e),constraint:e,textProps:j.fromObject({draggingScale:rn(e,n),formatter:ut(Gn(e,n))})}}function ll(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const cl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Vt.isObject(n))return null;const t=be,s=xe(e,{expanded:t.optional.boolean,picker:t.optional.custom(Ys),x:t.optional.custom(Ut),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>il,constraint:n=>ol(n.params,n.initialValue),equals:Vt.equals,writer:n=>rl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Rt))throw Z.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Aa(e,{axes:[Ii(t.rawValue.x,s.components[0]),Ii(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:ll(n.params),maxValue:al(t.rawValue,s),parser:Bt,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class Li extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class zi extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ui extends w{constructor(e){super(e),this.emitter_=new U,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const ul=function(){return{id:"list",type:"blade",accept(n){const e=be,t=xe(n,{options:e.required.custom(Un),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new fn(Zs(n.params.options)),t=R(n.params.value,{constraint:e}),s=new _n(n.document,{props:new j({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof _n)?null:new Li(n.controller)}}}();function dl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function pl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class hl extends bt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(qe).map(s=>s.binding);pl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(qe).map(t=>t.binding.target);return dl(e)}refresh(){this.controller_.rackController.rack.find(qe).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(He).forEach(e=>{e.binding.read()})}}class fl extends ft{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const _l={id:"slider",type:"blade",accept(n){const e=be,t=xe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new nn({max:n.params.max,min:n.params.min}),P=new os(n.document,{baseStep:1,parser:Bt,sliderProps:new j({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:j.fromObject({draggingScale:rn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:ro}),value:R(s,{constraint:c}),viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof os)?null:new zi(n.controller)}},ml=function(){return{id:"text",type:"blade",accept(n){const e=be,t=xe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Ln(n.document,{parser:n.params.parse,props:j.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:R(n.params.value),viewProps:n.viewProps});return new kt(n.document,{blade:n.blade,props:j.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof kt)||!(n.controller.valueController instanceof Ln)?null:new Ui(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function Gi(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class bl extends hl{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),D=sl(),J=new fl(P,{expanded:c.expanded,blade:Te(),props:j.fromObject({title:c.title}),viewProps:h.create()});super(J,D),this.pool_=D,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:vl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Z.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw Z.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Gi(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Gi(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[_l,ul,Is,ml]})}}const gl=new C("3.1.10");f.BladeApi=w,f.ButtonApi=ce,f.FolderApi=bt,f.InputBindingApi=Je,f.ListApi=Li,f.MonitorBindingApi=et,f.Pane=bl,f.SeparatorApi=pn,f.SliderApi=zi,f.TabApi=qt,f.TabPageApi=zt,f.TextApi=Ui,f.TpChangeEvent=M,f.VERSION=gl,Object.defineProperty(f,"__esModule",{value:!0})})})(Cs,Cs.exports);var Wl=Cs.exports;const jl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Kl=`// 2DGS render — vertex+fragment.
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
}`,Yl=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Zl=`// Depth-only rasterization of a proxy triangle mesh — feeds the mesh Z-cull
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
`,Xl=`// Debug overlay — renders the proxy mesh as translucent green triangles on
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
}`,cr=32,Es=1,ks=2,Hi=4,Ms=8,ur=4,tc=7<<ur,Yi=128,Zi=256,nc=0,Nt=new ArrayBuffer(cr),pt={canvas_size:new Uint32Array(Nt,0,2),accel_flags:new Uint32Array(Nt,8,1),feature_mode:new Uint32Array(Nt,12,1),gaussian_scaling:new Float32Array(Nt,16,1),sh_bias:new Float32Array(Nt,20,1),color_K:new Uint32Array(Nt,24,1),walltime:new Float32Array(Nt,28,1)};function sc(r){pt.canvas_size[0]=r.width>>>0,pt.canvas_size[1]=r.height>>>0,pt.accel_flags[0]=(r.accel_flags??Es|ks)>>>0,pt.feature_mode[0]=(r.feature_mode??nc)>>>0,pt.gaussian_scaling[0]=r.gaussian_scaling??1,pt.sh_bias[0]=r.sh_bias??.5,pt.color_K[0]=(r.color_K??0)>>>0,pt.walltime[0]=r.walltime??0}function dr(r,l){r.queue.writeBuffer(l,0,Nt)}function Hn(r,l,f){f&&r&&l&&dr(r,l)}function qn(r,l,f,C,w=!0){pt.canvas_size[0]=r>>>0,pt.canvas_size[1]=l>>>0,Hn(f??null,C??null,w)}function Xi(r,l,f,C=!0){pt.gaussian_scaling[0]=r,Hn(l??null,f??null,C)}function Qi(r,l,f,C=!0){pt.sh_bias[0]=r,Hn(l??null,f??null,C)}function un(r,l,f,C=!0){let w=pt.accel_flags[0];if(r.oac!==void 0&&(w=r.oac?w|Es:w&~Es),r.spr!==void 0&&(w=r.spr?w|ks:w&~ks),r.bfc!==void 0&&(w=r.bfc?w|Hi:w&~Hi),r.meshCull!==void 0&&(w=r.meshCull?w|Ms:w&~Ms),r.meshSampleMode!==void 0){const k=(r.meshSampleMode&7)<<ur;w=w&~tc|k}r.meshSilhouetteCull!==void 0&&(w=r.meshSilhouetteCull?w|Yi:w&~Yi),r.meshInvertDepth!==void 0&&(w=r.meshInvertDepth?w|Zi:w&~Zi),pt.accel_flags[0]=w>>>0,Hn(l??null,f??null,C)}const ic=256,rc=cr,oc=8,ac=80,lc=12,As=8,At=1<<As,Xt=256,Wn=32/As,cc=0,Ji=Wn&1;function er(r,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:r*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function uc(r,l){const f=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),C=r.createPipelineLayout({bindGroupLayouts:[f]}),w=k=>r.createComputePipeline({layout:C,compute:{module:l,entryPoint:k,constants:{WG_SIZE:Xt}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function dc(r,l,f){const C=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=r.createPipelineLayout({bindGroupLayouts:[C]}),M=r.createPipelineLayout({bindGroupLayouts:[w]}),N=[];for(let T=0;T<Wn;T++){const A={PASS_ID:T+cc,RS_RADIX_LOG2:As,RS_RADIX_SIZE:At};N.push({localHistogram:r.createComputePipeline({layout:k,compute:{module:l,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:r.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:A}})})}return{passes:N,localHistogramBindGroupLayout:C,scatterBindGroupLayout:w}}function pc(r){const l=r.createShaderModule({label:"local histogram",code:Jl}),f=r.createShaderModule({label:"scatter",code:Ql}),C=r.createShaderModule({label:"blelloch prefix",code:ec}),w=uc(r,C),k=dc(r,l,f);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:w}}function hc(r){const l=r.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),C=r.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=r.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),k=r.createBuffer({label:"tex_params stub (atlas_width=0)",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(k,0,new ArrayBuffer(48));const M=r.createTexture({label:"rvq codebook stub (4x4 zero rgba8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),N=M.createView({dimension:"2d"}),T=r.createSampler({label:"rvq codebook stub sampler",magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),A=r.createTexture({label:"rvq packed_indices stub (1x1 r32uint zero)",size:{width:1,height:1,depthOrArrayLayers:1},format:"r32uint",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),V=A.createView({dimension:"2d"}),G=r.createBuffer({label:"rvq surfel_offsets stub",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),X={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:C,rectsBuffer:w,texParamsBuffer:k,meta:X,rvqCodebookTexture:M,rvqCodebookView:N,rvqCodebookSampler:T,rvqPackedIndicesTexture:A,rvqPackedIndicesView:V,rvqSurfelOffsetsBuffer:G}}class fc{constructor(l,f,C,w,k,M=null,N=null){Y(this,"device");Y(this,"pc");Y(this,"presentationFormat");Y(this,"camera_buffer");Y(this,"render_settings_buffer");Y(this,"draw_indirect_buffer");Y(this,"splat_2d_buffer");Y(this,"querySet");Y(this,"resolveBuffer");Y(this,"resultBuffer");Y(this,"queriesPerFrame",oc);Y(this,"queryCapacityFrames",200);Y(this,"sort_prefixBindGroup");Y(this,"sort_pipelines");Y(this,"sort_localHistogramBindGroups");Y(this,"sort_scatterBindGroups");Y(this,"lastFrame",0);Y(this,"frameCount",0);Y(this,"preprocessPipeline");Y(this,"cullPipeline");Y(this,"renderPipeline");Y(this,"indirectPipeline");Y(this,"sort_info_buffer");Y(this,"sort_ping_pong");Y(this,"crsBg");Y(this,"gsBg");Y(this,"cullBg2");Y(this,"preprocessBg1");Y(this,"renderSplatsBindGroup");Y(this,"renderSettingsBindGroup");Y(this,"atlasBindGroup");Y(this,"indirectBindGroup");Y(this,"sh_solvers_buffer");Y(this,"mesh");Y(this,"meshDepthPipeline",null);Y(this,"meshDepthCameraBindGroup",null);Y(this,"meshDepthMarginBindGroup",null);Y(this,"meshMarginBuffer",null);Y(this,"meshDepthTexture",null);Y(this,"meshDepthView",null);Y(this,"meshCullBindGroupLayout");Y(this,"meshCullBindGroup");Y(this,"meshCullWidth",0);Y(this,"meshCullHeight",0);Y(this,"meshStubTexture");Y(this,"meshStubView");Y(this,"meshOverlayPipeline",null);Y(this,"meshOverlayEnabled",!1);Y(this,"bgColor",[0,0,0,0]);Y(this,"showPerfDialogNext",!1);Y(this,"requestReorderNextFrame",!1);Y(this,"reorderInFlight",!1);Y(this,"downloadOnceNextRead",!1);Y(this,"downloadOnceFileName","fps_metrics");Y(this,"allFrameTimes",[]);Y(this,"lastStageBreakdownMs",null);Y(this,"timeQueryEnabled");Y(this,"atlas");this.mesh=N;const T=k.includes("timestamp-query");this.timeQueryEnabled=T,T&&_t("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=C,this.camera_buffer=w,this.atlas=M??hc(f),f.addEventListener("uncapturederror",j=>{console.error("A WebGPU error was not captured:",j.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Xt-1)/Xt)+1)*Xt,V=Math.ceil(A/Xt);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const G=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=pc(f);const X=[er(A,f),er(A,f)],z=f.createBuffer({label:"workgroup histograms",size:V*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"workgroup prefixes",size:V*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=f.createBuffer({label:"digit base",size:At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=Math.ceil(V/Xt),ce=Math.ceil(q/Xt),U=f.createBuffer({label:"prefix l0 sums",size:q*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=f.createBuffer({label:"prefix l0 offsets",size:q*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=f.createBuffer({label:"prefix l1 sums",size:ce*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),le=f.createBuffer({label:"prefix l1 offsets",size:ce*At*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:H}},{binding:3,resource:{buffer:U}},{binding:4,resource:{buffer:Q}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:le}},{binding:7,resource:{buffer:Z}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:X[0].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:X[1].sort_depths_buffer}},{binding:2,resource:{buffer:z}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:X[0].sort_depths_buffer}},{binding:3,resource:{buffer:X[1].sort_depths_buffer}},{binding:4,resource:{buffer:X[0].sort_indices_buffer}},{binding:5,resource:{buffer:X[1].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:X[1].sort_depths_buffer}},{binding:3,resource:{buffer:X[0].sort_depths_buffer}},{binding:4,resource:{buffer:X[1].sort_indices_buffer}},{binding:5,resource:{buffer:X[0].sort_indices_buffer}},{binding:6,resource:{buffer:H}}]})],this.sort_info_buffer=G,this.sort_ping_pong=X;const W=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ne=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),de=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:W,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ne,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:de,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}}]});const we=this.device.createShaderModule({code:Hl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:we,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.meshCullBindGroupLayout=this.device.createBindGroupLayout({label:"mesh cull (cull group 3)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"depth",viewDimension:"2d",multisampled:!1}}]}),this.meshStubTexture=this.device.createTexture({label:"mesh cull stub (1x1 depth32float)",size:{width:1,height:1,depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.meshStubView=this.meshStubTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (stub)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshStubView}]});const Ge=this.device.createShaderModule({code:Yl});if(this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[W,he,ne,this.meshCullBindGroupLayout]}),compute:{module:Ge,entryPoint:"surfel_cull"}}),this.mesh!==null){const j=this.device.createBindGroupLayout({label:"mesh_depth camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshDepthCameraBindGroup=this.device.createBindGroup({label:"mesh_depth camera bind",layout:j,entries:[{binding:0,resource:{buffer:this.camera_buffer}}]});const te=this.device.createBindGroupLayout({label:"mesh_depth margin (group 1)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshMarginBuffer=this.device.createBuffer({label:"mesh cull margin (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([.03,0,0,0])),this.meshDepthMarginBindGroup=this.device.createBindGroup({label:"mesh_depth margin bind",layout:te,entries:[{binding:0,resource:{buffer:this.meshMarginBuffer}}]});const pe=this.device.createShaderModule({code:Zl});this.meshDepthPipeline=this.device.createRenderPipeline({label:"mesh_depth",layout:this.device.createPipelineLayout({bindGroupLayouts:[j,te]}),vertex:{module:pe,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}})}const Be=this.device.createShaderModule({code:jl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[W,de]}),compute:{module:Be,entryPoint:"preprocess"}});const ze=this.device.createShaderModule({code:Kl});ze.getCompilationInfo().then(j=>{j.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),j.messages.forEach(te=>{(te.type==="error"?console.error:te.type==="warning"?console.warn:console.log)(`${te.type} (line ${te.lineNum}:${te.linePos}): ${te.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const De=this.device.createBindGroupLayout({label:"render_settings (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),ye=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),Me=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}},{binding:5,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d",multisampled:!1}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),R=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[De,ye,Me]}),vertex:{module:ze,entryPoint:"vs_main"},fragment:{module:ze,entryPoint:"fs_main",constants:{BETA_KERNEL:R},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.device.popErrorScope().then(j=>{j?console.error("[render_2dgs] pipeline create validation error:",j.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:De,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ye,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Ji].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:Me,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:{buffer:this.atlas.rectsBuffer}},{binding:2,resource:this.atlas.sampler},{binding:3,resource:{buffer:this.atlas.texParamsBuffer}},{binding:4,resource:this.atlas.rvqCodebookView},{binding:5,resource:this.atlas.rvqCodebookSampler},{binding:6,resource:this.atlas.rvqPackedIndicesView},{binding:7,resource:{buffer:this.atlas.rvqSurfelOffsetsBuffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setMeshOverlayEnabled(l){this.meshOverlayEnabled=l&&this.mesh!==null}setMeshCullEnabled(l){un({meshCull:l&&this.mesh!==null},this.device,this.render_settings_buffer)}setMeshMargin(l){this.meshMarginBuffer!==null&&this.device.queue.writeBuffer(this.meshMarginBuffer,0,new Float32Array([l]))}get hasMesh(){return this.mesh!==null}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}ensureMeshDepthTexture(l,f){var C;this.mesh!==null&&(this.meshDepthTexture!==null&&this.meshCullWidth===l&&this.meshCullHeight===f||((C=this.meshDepthTexture)==null||C.destroy(),this.meshDepthTexture=this.device.createTexture({label:"mesh_depth attachment",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.meshDepthView=this.meshDepthTexture.createView({dimension:"2d"}),this.meshCullBindGroup=this.device.createBindGroup({label:"mesh cull bind (live)",layout:this.meshCullBindGroupLayout,entries:[{binding:0,resource:this.meshDepthView}]}),this.meshCullWidth=l,this.meshCullHeight=f))}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&ar(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l)}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),C=f*Uint32Array.BYTES_PER_ELEMENT;if(C===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),k=this.device.createCommandEncoder();k.copyBufferToBuffer(this.sort_ping_pong[Ji].sort_indices_buffer,0,w,0,C),this.device.queue.submit([k.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(l,f,C=!0){const k=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=C&&this.timeQueryEnabled;if(this.mesh!==null&&this.meshDepthPipeline!==null&&(pt.accel_flags[0]&Ms)!==0){const T=pt.canvas_size[0],A=pt.canvas_size[1];this.ensureMeshDepthTexture(T,A);const V={label:"mesh_depth",colorAttachments:[],depthStencilAttachment:{view:this.meshDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}},G=l.beginRenderPass(V);G.setPipeline(this.meshDepthPipeline),G.setBindGroup(0,this.meshDepthCameraBindGroup),G.setBindGroup(1,this.meshDepthMarginBindGroup),G.setVertexBuffer(0,this.mesh.vertexBuffer),G.setIndexBuffer(this.mesh.indexBuffer,"uint32"),G.drawIndexed(this.mesh.numIndices),G.end()}{l.clearBuffer(this.sort_info_buffer,0,4);const T={label:"cull"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+0,endOfPassWriteIndex:k+1});const A=l.beginComputePass(T);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.meshCullBindGroup);const V=Math.ceil(this.pc.num_points/ic);A.dispatchWorkgroups(V,1,1),A.end()}{const T=l.beginComputePass({label:"calculate indirect dispatch"});T.setPipeline(this.indirectPipeline),T.setBindGroup(0,this.indirectBindGroup),T.dispatchWorkgroups(1,1,1),T.end()}{const T={label:"preprocess"};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+2,endOfPassWriteIndex:k+3});const A=l.beginComputePass(T);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let T=0;T<Wn;T++){const A=T&1,V=this.sort_pipelines.passes[T],G=this.sort_localHistogramBindGroups[A],X=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${T}`};M&&T==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+4});const H=l.beginComputePass(z);H.setPipeline(V.localHistogram),H.setBindGroup(0,G),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,At,1),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${T} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${T}`};M&&T==Wn-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:k+5});const H=l.beginComputePass(z);H.setPipeline(V.scatterElements),H.setBindGroup(0,X),H.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),H.end()}}{const T={label:"render",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(T.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:k+6,endOfPassWriteIndex:k+7});const A=l.beginRenderPass(T);A.setPipeline(this.renderPipeline),A.setBindGroup(0,this.renderSettingsBindGroup),A.setBindGroup(1,this.renderSplatsBindGroup),A.setBindGroup(2,this.atlasBindGroup),A.drawIndirect(this.draw_indirect_buffer,0),A.end()}if(this.meshOverlayEnabled&&this.mesh!==null){if(this.meshOverlayPipeline===null){const V=this.device.createShaderModule({code:Xl}),G=this.device.createBindGroupLayout({label:"mesh_overlay camera (group 0)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.meshOverlayPipeline=this.device.createRenderPipeline({label:"mesh_overlay",layout:this.device.createPipelineLayout({bindGroupLayouts:[G]}),vertex:{module:V,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:V,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"}})}const T={label:"mesh_overlay",colorAttachments:[{view:f,loadOp:"load",storeOp:"store"}]},A=l.beginRenderPass(T);A.setPipeline(this.meshOverlayPipeline),A.setBindGroup(0,this.meshDepthCameraBindGroup),A.setVertexBuffer(0,this.mesh.vertexBuffer),A.setIndexBuffer(this.mesh.indexBuffer,"uint32"),A.drawIndexed(this.mesh.numIndices),A.end()}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const C=this.device.createCommandEncoder({label:"timestamp resolve encoder"});C.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),C.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([C.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const k=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),N=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,T=Array.from({length:w.length},()=>[]);let A=0;for(let ce=0;ce<M;ce++){const U=(N+ce)%this.queryCapacityFrames,Q=U*this.queriesPerFrame;let K=!0;for(let le=0;le<w.length;le++){const[W,he,ne]=w[le];if(k[Q+ne]===0n||k[Q+he]===0n||k[Q+he]<k[Q+ne]){K=!1;break}}if(!K){!f&&U%60===0&&console.debug("[timestamp] frame slot",U,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let le=0;le<w.length;le++){const[W,he,ne]=w[le],de=Number(k[Q+ne]),we=Number(k[Q+he]);T[le].push((we-de)/1e6)}}if(A===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const V=[];let G=0,X=0,z=0;for(let ce=0;ce<w.length;ce++){const U=w[ce][0],Q=T[ce];let K=0;if(U==="Total"){const le=this.allFrameTimes;K=le.reduce((ne,de)=>ne+de,0)/le.length;const W=[...le].sort((ne,de)=>ne-de);G=W[Math.floor(W.length*.99)]||0;const he=le.reduce((ne,de)=>ne+Math.pow(de-K,2),0)/le.length;X=Math.sqrt(he),z=K}else K=Q.reduce((le,W)=>le+W,0)/Q.length;V.push([U,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const H=Object.fromEntries(V);this.lastStageBreakdownMs={cull:H.Culling??0,preprocess:H.Preprocess??0,sort:H.Sort??0,render:H.Render??0,total:H.Total??0};const q=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([ce,U])=>`${ce}: ${U.toFixed(3)}ms`).join(`
`)+`
Total P99: ${G.toFixed(3)}ms
Total STD: ${X.toFixed(3)}ms
Total AVG: ${z.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const ce=`Stage,ms
`,U=V.map(([le,W])=>`${le},${W.toFixed(3)}`).join(`
`),Q="data:text/csv;charset=utf-8,"+encodeURIComponent(ce+U),K=document.createElement("a");K.href=Q,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:rc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,C=l?l.height:1;sc({width:f,height:C,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),dr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:dn(this.pc.num_points*ac),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:dn(this.pc.num_points*lc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,C=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${C}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function _c(r,l){return 2*Math.atan(l/(2*r))}function mc(r,l,f,C){const w=Math.tan(C/2),k=Math.tan(f/2),M=w*r,N=-M,T=k*r,A=-T,V=ct.create();return V[0]=2*r/(T-A),V[5]=-2*r/(M-N),V[2]=(T+A)/(T-A),V[6]=(M+N)/(M-N),V[14]=1,V[10]=l/(l-r),V[11]=-(l*r)/(l-r),ct.transpose(V,V),V}async function vc(r){_t(`loading scene camera file... : ${r}`);const f=await(await fetch(r)).json();return _t(`loaded cameras count: ${f.length}`),f.map(C=>{const w=L.clone(C.position),k=Pt.create(...C.rotation.flat()),M=k[0],N=k[4],T=k[8],A=k[1],V=k[5],G=k[9],X=k[2],z=k[6],H=k[10];M*(V*H-G*z)-N*(A*H-G*X)+T*(A*z-V*X)<0&&(k[1]=-k[1],k[5]=-k[5],k[9]=-k[9]);const q=ct.fromMat3(k);return{position:w,rotation:q,img_name:C.img_name,id:C.id}})}const bc=4*2,gc=4*16,pr=4*gc+2*bc;function wc(r){return r.createBuffer({label:"camera uniform",size:pr,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Zt=new Float32Array(pr/Float32Array.BYTES_PER_ELEMENT),jn=class jn{constructor(l,f){Y(this,"uniform_buffer");Y(this,"position",L.create());Y(this,"rotation",ct.create());Y(this,"fovY",45/180*Math.PI);Y(this,"fovX");Y(this,"focal",$i.create());Y(this,"viewport",$i.create());Y(this,"view_matrix",ct.identity());Y(this,"view_inv_matrix",ct.identity());Y(this,"proj_matrix",ct.identity());Y(this,"proj_inv_matrix",ct.identity());Y(this,"_negPos",L.create());Y(this,"look",L.create(0,0,1));Y(this,"up",L.create(0,1,0));Y(this,"right",L.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=wc(f),this.on_update_canvas()}on_update_canvas(){const l=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=l,this.focal[1]=l,this.fovX=_c(l,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.proj_matrix=mc(.01,100,this.fovX,this.fovY),ct.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ct.copy(this.rotation,this.view_matrix),ct.translate(this.view_matrix,this._negPos,this.view_matrix),ct.inverse(this.view_matrix,this.view_inv_matrix),L.transformMat4Upper3x3(jn.Z_AXIS,this.view_inv_matrix,this.look),L.normalize(this.look,this.look),L.cross(this.up,this.look,this.right),L.normalize(this.right,this.right);let l=0;Zt.set(this.view_matrix,l),l+=16,Zt.set(this.view_inv_matrix,l),l+=16,Zt.set(this.proj_matrix,l),l+=16,Zt.set(this.proj_inv_matrix,l),l+=16,Zt.set(this.viewport,l),l+=2,Zt.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Zt)}set_preset(l){L.copy(l.position,this.position),ct.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};Y(jn,"Z_AXIS",L.create(0,0,1));let Bs=jn;const xc=L.create(1,0,0),yc=L.create(0,1,0);function Pc(r,l){const f=r[0],C=r[4],w=r[8],k=r[1],M=r[5],N=r[9],T=r[2],A=r[6],V=r[10],G=f+M+V;let X,z,H,Z;if(G>0){const q=.5/Math.sqrt(G+1);X=.25/q,z=(A-N)*q,H=(w-T)*q,Z=(k-C)*q}else if(f>M&&f>V){const q=2*Math.sqrt(1+f-M-V);X=(A-N)/q,z=.25*q,H=(C+k)/q,Z=(w+T)/q}else if(M>V){const q=2*Math.sqrt(1+M-f-V);X=(w-T)/q,z=(C+k)/q,H=.25*q,Z=(N+A)/q}else{const q=2*Math.sqrt(1+V-f-M);X=(k-C)/q,z=(w+T)/q,H=(N+A)/q,Z=.25*q}return l[0]=z,l[1]=H,l[2]=Z,l[3]=X,l}class Sc{constructor(l){Y(this,"element");Y(this,"enabled",!0);Y(this,"center",L.create(0,0,0));Y(this,"up",L.create(0,1,0));Y(this,"rotation",[0,0]);Y(this,"shift",[0,0]);Y(this,"scroll",0);Y(this,"speed",.1);Y(this,"sensitivity",.08);Y(this,"leftPressed",!1);Y(this,"rightPressed",!1);Y(this,"leftDragPans",!1);Y(this,"lastX",0);Y(this,"lastY",0);Y(this,"touches",new Map);Y(this,"lastTouchCenter",null);Y(this,"lastPinchDistance",null);Y(this,"lastTwoFingerAngle",null);Y(this,"lastTouchCount",0);Y(this,"roll",0);Y(this,"_dir",L.create());Y(this,"_right",L.create());Y(this,"_upCam",L.create());Y(this,"_scratch",L.create());Y(this,"_qY",dt.create());Y(this,"_qX",dt.create());Y(this,"_qRot",dt.create());Y(this,"_qLocal",dt.create());Y(this,"_qWorldToCam",dt.create());Y(this,"_scratchMat3",Pt.create());Y(this,"bboxMin",null);Y(this,"bboxMax",null);Y(this,"anchor",L.create(0,0,0));Y(this,"downCallback",l=>{var f,C,w,k;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(C=(f=l.target)==null?void 0:f.setPointerCapture)==null||C.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(k=(w=l.target)==null?void 0:w.setPointerCapture)==null||k.call(w,l.pointerId),l.preventDefault())}});Y(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,C=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=C):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=C)});Y(this,"upCallback",l=>{var f,C,w,k;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(C=(f=l.target)==null?void 0:f.releasePointerCapture)==null||C.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(k=(w=l.target)==null?void 0:w.releasePointerCapture)==null||k.call(w,l.pointerId),l.preventDefault()});Y(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){L.copy(l,this.center),L.copy(l,this.anchor)}setOrbitPivot(l){L.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;L.set(f[2],f[6],f[10],this._dir),L.normalize(this._dir,this._dir),L.scale(this._dir,l,this._dir),L.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(L.subtract(this.center,l.position,this._scratch),L.length(this._scratch)<1e-6)return;L.normalize(this._scratch,this._scratch),L.cross(this.up,this._scratch,this._right),L.length(this._right)<1e-6&&L.set(1,0,0,this._right),L.normalize(this._right,this._right),L.cross(this._scratch,this._right,this._upCam),L.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=L.create(l[0],l[1],l[2]),this.bboxMax=L.create(f[0],f[1],f[2]);const C=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,k=(l[2]+f[2])*.5;L.set(C,w,k,this.center),L.set(C,w,k,this.anchor)}resetToCamera(){const l=this.camera.rotation;L.set(l[2],l[6],l[10],this._dir),L.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let C=-1/0,w=1/0,k=!1;for(let M=0;M<3;M++){const N=this._dir[M],T=this.bboxMin[M]-this.camera.position[M],A=this.bboxMax[M]-this.camera.position[M];if(Math.abs(N)>1e-8){const V=T/N,G=A/N;C=Math.max(C,Math.min(V,G)),w=Math.min(w,Math.max(V,G))}else if(T>0||A<0){k=!0;break}}!k&&C<=w&&w>0&&(f=(Math.max(C,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){L.subtract(this.anchor,this.camera.position,this._scratch);const C=L.dot(this._scratch,this._dir);f=C>.001?C:L.length(this._scratch)}f=Math.max(.1,f),L.scale(this._dir,f,this._dir),L.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const C=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=C*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),C=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,k=f[1].x-f[0].x,M=f[1].y-f[0].y,N=Math.hypot(k,M),T=Math.atan2(M,k);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=C-this.lastTouchCenter[0],V=w-this.lastTouchCenter[1],G=Math.hypot(A,V),X=Math.abs(N-this.lastPinchDistance);let z=T-this.lastTwoFingerAngle;z>Math.PI&&(z-=2*Math.PI),z<-Math.PI&&(z+=2*Math.PI),G>.5&&(this.shift[1]-=A,this.shift[0]+=V),X>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(N/this.lastPinchDistance)*10),Math.abs(z)>.0087&&(this.roll+=-z)}this.lastTouchCenter=[C,w],this.lastPinchDistance=N,this.lastTwoFingerAngle=T}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const Z=f.rotation;this.up[0]=Z[1],this.up[1]=Z[5],this.up[2]=Z[9],L.length(this.up)>1e-6?L.normalize(this.up,this.up):L.set(0,1,0,this.up)}let C=!1;if(Math.abs(this.roll)>1e-4){const Z=f.rotation;L.set(Z[2],Z[6],Z[10],this._scratch),L.normalize(this._scratch,this._scratch),dt.fromAxisAngle(this._scratch,this.roll,this._qRot),L.transformQuat(this.up,this._qRot,this.up),L.normalize(this.up,this.up),this.roll=0,C=!0}L.subtract(f.position,this.center,this._dir);let w=L.length(this._dir);w<1e-6&&(w=1e-6);const k=Math.exp(Math.log(w)+this.scroll*l*10*this.speed);L.scale(this._dir,k/w,this._dir),w=k;const M=f.rotation;this._right[0]=M[0],this._right[1]=M[4],this._right[2]=M[8],L.normalize(this._right,this._right),L.length(this._right)<1e-6&&L.set(1,0,0,this._right);const N=L.create(M[1],M[5],M[9]);L.normalize(N,N),L.length(N)<1e-6&&L.set(0,1,0,N);const T=l*this.speed*.1*w,A=this.shift[1]*T,V=-this.shift[0]*T;L.scale(this._right,A,this._scratch),L.add(this.center,this._scratch,this.center),L.add(f.position,this._scratch,f.position),L.scale(N,V,this._scratch),L.add(this.center,this._scratch,this.center),L.add(f.position,this._scratch,f.position);const G=this.rotation[0]*l*this.sensitivity,X=this.rotation[1]*l*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(X)>1e-5||C){const Z=f.rotation;Pc(Z,this._qWorldToCam),dt.fromAxisAngle(xc,-X,this._qX),dt.fromAxisAngle(yc,-G,this._qY),dt.multiply(this._qX,this._qY,this._qLocal),dt.normalize(this._qLocal,this._qLocal),dt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),dt.normalize(this._qWorldToCam,this._qWorldToCam),Pt.fromQuat(this._qWorldToCam,this._scratchMat3),ct.fromMat3(this._scratchMat3,f.rotation);const q=f.rotation,ce=q[2],U=q[6],Q=q[10];f.position[0]=this.center[0]-ce*w,f.position[1]=this.center[1]-U*w,f.position[2]=this.center[2]-Q*w,this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],L.normalize(this.up,this.up)}else L.add(this.center,this._dir,f.position);f.update_buffer();const H=Math.pow(.8,l*60);this.rotation[0]*=H,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=H,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=H,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=H,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=H,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function hr(r){const l=L.create();for(const f of r)L.add(l,f,l);return L.scale(l,1/Math.max(r.length,1),l)}function fr(r,l){const f=Pt.create();Pt.inverse(r,f);const C=L.create();return C[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],C[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],C[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],C}function Cc(r){const l=r.slice(),f=[1,0,0,0,1,0,0,0,1],C=(T,A)=>l[T*3+A],w=(T,A,V)=>{l[T*3+A]=V},k=(T,A)=>f[T*3+A],M=(T,A,V)=>{f[T*3+A]=V};for(let T=0;T<30;T++){let A=0,V=1,G=Math.abs(C(0,1));if(Math.abs(C(0,2))>G&&(A=0,V=2,G=Math.abs(C(0,2))),Math.abs(C(1,2))>G&&(A=1,V=2,G=Math.abs(C(1,2))),G<1e-12)break;const X=C(A,A),z=C(V,V),H=C(A,V);let Z;Math.abs(X-z)<1e-30?Z=Math.PI/4*Math.sign(H):Z=.5*Math.atan2(2*H,X-z);const q=Math.cos(Z),ce=Math.sin(Z);for(let U=0;U<3;U++){const Q=C(U,A),K=C(U,V);w(U,A,q*Q+ce*K),w(U,V,-ce*Q+q*K)}for(let U=0;U<3;U++){const Q=C(A,U),K=C(V,U);w(A,U,q*Q+ce*K),w(V,U,-ce*Q+q*K)}for(let U=0;U<3;U++){const Q=k(U,A),K=k(U,V);M(U,A,q*Q+ce*K),M(U,V,-ce*Q+q*K)}}const N=[];for(let T=0;T<3;T++)N.push({val:C(T,T),vec:L.create(k(0,T),k(1,T),k(2,T))});return N.sort((T,A)=>A.val-T.val),{vals:[N[0].val,N[1].val,N[2].val],vecs:[N[0].vec,N[1].vec,N[2].vec]}}function Ec(r,l){const f=hr(r);let C=0,w=0,k=0,M=0,N=0,T=0;for(const H of r){const Z=H[0]-f[0],q=H[1]-f[1],ce=H[2]-f[2];C+=Z*Z,w+=Z*q,k+=Z*ce,M+=q*q,N+=q*ce,T+=ce*ce}const A=[C,w,k,w,M,N,k,N,T],{vecs:V}=Cc(A);let G=V[0],X=V[1],z=V[2];return L.dot(z,l)<0&&(L.scale(z,-1,z),L.scale(X,-1,X)),{centroid:f,normal:z,u:G,v:X}}function kc(r){let l=0,f=0,C=0,w=0,k=0,M=0,N=0,T=0,A=0;for(const[q,ce]of r){const U=-2*q,Q=-2*ce,K=1,le=-(q*q+ce*ce);l+=U*U,f+=U*Q,C+=U*K,w+=Q*Q,k+=Q*K,M+=K*K,N+=U*le,T+=Q*le,A+=K*le}const V=Pt.create(l,f,C,f,w,k,C,k,M),G=fr(V,L.create(N,T,A)),X=G[0],z=G[1],H=G[2],Z=X*X+z*z-H;return{center:[X,z],radius:Math.sqrt(Math.max(Z,1e-12))}}function Mc(r,l){let f=0,C=0,w=0,k=0,M=0,N=0,T=0,A=0,V=0;for(let X=0;X<r.length;X++){const z=r[X],H=L.normalize(l[X],L.create()),Z=1-H[0]*H[0],q=-H[0]*H[1],ce=-H[0]*H[2],U=1-H[1]*H[1],Q=-H[1]*H[2],K=1-H[2]*H[2];f+=Z,C+=q,w+=ce,k+=U,M+=Q,N+=K,T+=Z*z[0]+q*z[1]+ce*z[2],A+=q*z[0]+U*z[1]+Q*z[2],V+=ce*z[0]+Q*z[1]+K*z[2]}const G=Pt.create(f,C,w,C,k,M,w,M,N);return fr(G,L.create(T,A,V))}function _r(r,l={}){if(r.length===0)return null;const f=l.tiltDownDeg??8,C=l.radiusScale??1,w=l.alignFirst??!0,k=(l.direction??"ccw")==="ccw"?1:-1,M=r.map(ne=>L.clone(ne.position)),N=r.map(ne=>{const de=ne.rotation;return L.create(de[8],de[9],de[10])}),T=r.map(ne=>{const de=ne.rotation;return L.create(de[4],de[5],de[6])}),A=hr(T),V=L.normalize(L.scale(A,-1,L.create())),{centroid:G,normal:X,u:z,v:H}=Ec(M,V),Z=M.map(ne=>{const de=L.sub(ne,G,L.create());return[L.dot(de,z),L.dot(de,H)]}),{center:q,radius:ce}=kc(Z),U=ce*C,Q=L.add(G,L.add(L.scale(z,q[0],L.create()),L.scale(H,q[1],L.create()),L.create()),L.create()),K=Mc(M,N),le=U*Math.tan(f*Math.PI/180),W=L.sub(K,L.scale(X,le,L.create()),L.create());let he=0;if(w){const ne=L.sub(M[0],Q,L.create());he=Math.atan2(L.dot(ne,H),L.dot(ne,z))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${r.length} train cams: radius=${U.toFixed(2)}, tilt=${f}°, normal=[${X[0].toFixed(2)}, ${X[1].toFixed(2)}, ${X[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:Q,radius:U,normal:X,u:z,v:H,lookAt:W,startPhase:he,direction:k}}function mr(r,l){const f=(r.startPhase+l*r.direction)*2*Math.PI,C=Math.cos(f),w=Math.sin(f),k=L.add(r.center,L.add(L.scale(r.u,r.radius*C,L.create()),L.scale(r.v,r.radius*w,L.create()),L.create()),L.create()),M=L.normalize(L.sub(r.lookAt,k,L.create())),N=L.cross(M,r.normal,L.create());L.length(N)<1e-6&&L.copy(r.u,N),L.normalize(N,N);const T=L.cross(M,N,L.create());L.normalize(T,T);const A=ct.create();return A[0]=N[0],A[1]=T[0],A[2]=M[0],A[3]=0,A[4]=N[1],A[5]=T[1],A[6]=M[1],A[7]=0,A[8]=N[2],A[9]=T[2],A[10]=M[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:k,rotation:A,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Bc(r,l={}){const f=_r(r,l);if(!f)return[];const C=l.numViews??120;return Array.from({length:C},(w,k)=>({...mr(f,k/C),img_name:`circle_${k.toString().padStart(4,"0")}`,id:k}))}function Tc(r){const l=new Uint8Array(r),f=Math.min(l.byteLength,65536),C=new TextDecoder("ascii").decode(l.subarray(0,f)),w=C.indexOf("end_header");if(w<0)throw new Error("mesh PLY: 'end_header' not found in first 64KB");const k=w+10+1,M=C.slice(0,w).split(/\r?\n/).map(te=>te.trim()).filter(Boolean);if(M[0]!=="ply")throw new Error("mesh PLY: missing 'ply' magic");const N=M.find(te=>te.startsWith("format"));if(!N||!N.includes("binary_little_endian"))throw new Error(`mesh PLY: only binary_little_endian supported (got: ${N??"<none>"})`);const T={char:1,uchar:1,int8:1,uint8:1,short:2,ushort:2,int16:2,uint16:2,int:4,uint:4,int32:4,uint32:4,float:4,float32:4,double:8,float64:8},A=[];let V=null;for(const te of M)if(te.startsWith("element ")){const[,pe,ie]=te.split(/\s+/);V={name:pe,count:parseInt(ie,10),props:[],bytesPerRecord:0,hasList:!1},A.push(V)}else if(te.startsWith("property ")&&V){const pe=te.split(/\s+/);if(pe[1]==="list"){const ie=pe[2],oe=pe[3],me=pe[4];V.props.push({name:me,type:oe,isList:!0,listCountType:ie,listItemType:oe}),V.hasList=!0}else{const ie=pe[1],oe=pe[2];if(V.props.push({name:oe,type:ie,isList:!1}),T[ie]===void 0)throw new Error(`mesh PLY: unsupported prop type '${ie}'`);V.bytesPerRecord+=T[ie]}}const G=A.find(te=>te.name==="vertex"),X=A.find(te=>te.name==="face"||te.name==="faces");if(!G)throw new Error("mesh PLY: missing 'element vertex'");if(!X)throw new Error("mesh PLY: missing 'element face' (mesh has no triangles)");if(G.hasList)throw new Error("mesh PLY: unexpected list property on vertex element");const z=G.props.find(te=>te.name==="x"),H=G.props.find(te=>te.name==="y"),Z=G.props.find(te=>te.name==="z");if(!z||!H||!Z)throw new Error("mesh PLY: vertex must have x/y/z");let q=0;const ce=new Map;for(const te of G.props)ce.set(te.name,{off:q,type:te.type}),q+=T[te.type];const U=ce.get("x"),Q=ce.get("y"),K=ce.get("z");if(U.type!==Q.type||U.type!==K.type)throw new Error(`mesh PLY: x/y/z must share a type (got ${U.type}/${Q.type}/${K.type})`);const le=U.type,W=le==="double"||le==="float64";if(!W&&le!=="float"&&le!=="float32")throw new Error(`mesh PLY: x/y/z must be float or double (got '${le}')`);const he=new Float32Array(G.count*3),ne=new DataView(r),de=k,we=G.bytesPerRecord;for(let te=0;te<G.count;te++){const pe=de+te*we;W?(he[te*3+0]=ne.getFloat64(pe+U.off,!0),he[te*3+1]=ne.getFloat64(pe+Q.off,!0),he[te*3+2]=ne.getFloat64(pe+K.off,!0)):(he[te*3+0]=ne.getFloat32(pe+U.off,!0),he[te*3+1]=ne.getFloat32(pe+Q.off,!0),he[te*3+2]=ne.getFloat32(pe+K.off,!0))}const Ge=de+G.count*we,Be=X.props.find(te=>te.isList);if(!Be)throw new Error("mesh PLY: face element has no list property");const ze=T[Be.listCountType],De=T[Be.listItemType];if(ze!==1)throw new Error(`mesh PLY: unsupported face list count size ${ze}`);let ye=Ge,Me=0;for(let te=0;te<X.count;te++){const pe=ne.getUint8(ye);pe===3&&Me++,ye+=1+pe*De}const R=new Uint32Array(Me*3);ye=Ge;let j=0;for(let te=0;te<X.count;te++){const pe=ne.getUint8(ye);if(ye+=1,pe===3)for(let ie=0;ie<3;ie++){const oe=ye+ie*De;let me;if(De===4)me=ne.getUint32(oe,!0);else if(De===2)me=ne.getUint16(oe,!0);else if(De===1)me=ne.getUint8(oe);else throw new Error(`mesh PLY: unsupported face index size ${De}`);R[j++]=me}ye+=pe*De}return{positions:he,indices:R}}function Dc(r){const l=new DataView(r);if(r.byteLength<8)throw new Error("mesh .bin: too small (need at least 8-byte header)");const f=l.getUint32(0,!0),C=l.getUint32(4,!0),w=f*12,k=C*4;if(r.byteLength<8+w+k)throw new Error(`mesh .bin: truncated (expected ${8+w+k} B, got ${r.byteLength} B)`);const M=new Float32Array(r.slice(8,8+w)),N=new Uint32Array(r.slice(8+w,8+w+k));return{positions:M,indices:N}}function vr(r,l){return(l??"").toLowerCase().endsWith(".ply")?Tc(r):Dc(r)}function br(r,l){const f=r.createBuffer({label:"mesh-cull vertex buffer",size:l.positions.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(f,0,l.positions);const C=r.createBuffer({label:"mesh-cull index buffer",size:l.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});return r.queue.writeBuffer(C,0,l.indices),{vertexBuffer:f,indexBuffer:C,numVerts:l.positions.length/3,numIndices:l.indices.length}}async function Ac(r,l){try{const f=await fetch(l);if(!f.ok)return console.warn(`[mesh-cull] fetch failed for ${l}: ${f.status}`),null;const C=await f.arrayBuffer(),w=vr(C,l);return console.log(`[mesh-cull] loaded ${l}: ${w.positions.length/3} verts, ${w.indices.length/3} tris`),br(r,w)}catch(f){return console.warn(`[mesh-cull] load error for ${l}:`,f),null}}function Ic(r,l,f){try{const C=vr(l,f);return console.log(`[mesh-cull] loaded from bundle: ${C.positions.length/3} verts, ${C.indices.length/3} tris`),br(r,C)}catch(C){return console.warn("[mesh-cull] parse error:",C),null}}const gr="BITYMI01",Lc=0,zc=1,Uc=2,Gc=3,Rc=4,Vc=5,Oc=6;function $n(r){const l=(r&32768)>>15,f=(r&31744)>>10,C=r&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(C/1024):f===31?C?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+C/1024)}function tr(r,l,f,C,w,k){const M=(r-f.width*.5)/C.focal[0],N=-((l-f.height*.5)/C.focal[1]),T=C.rotation,A=T[0],V=T[4],G=T[8],X=T[1],z=T[5],H=T[9],Z=T[2],q=T[6],ce=T[10];let U=M*A+N*X+Z,Q=M*V+N*z+q,K=M*G+N*H+ce;const le=Math.hypot(U,Q,K)||1;U/=le,Q/=le,K/=le;const W=C.position[0],he=C.position[1],ne=C.position[2],de=k*.005,we=de*de,Ge=new Uint32Array(w.buffer,w.byteOffset,w.length),Be=w.length/8;let ze=1/0,De=0,ye=0,Me=0,R=-1;for(let j=0;j<Be;j++){const te=j*8,pe=w[te+0]-W,ie=w[te+1]-he,oe=w[te+2]-ne,me=pe*U+ie*Q+oe*K;if(me<=0)continue;const be=pe-me*U,xe=ie-me*Q,Oe=oe-me*K;if(be*be+xe*xe+Oe*Oe>=we||!(Ge[te+7]>>>16&1))continue;const v=Ge[te+5],o=Ge[te+6],h=$n(v&65535),d=$n(v>>>16&65535),g=$n(o&65535),y=$n(o>>>16&65535),S=Math.hypot(h,d,g,y)||1,E=h/S,i=d/S,m=g/S,u=y/S,p=2*(i*u+E*m),a=2*(m*u-E*i),_=1-2*(i*i+m*m),x=U*p+Q*a+K*_;let b;Math.abs(x)>1e-6?(b=(pe*p+ie*a+oe*_)/x,(!isFinite(b)||b<=0)&&(b=me)):b=me,b<ze&&(ze=b,De=W+b*U,ye=he+b*Q,Me=ne+b*K,R=j)}return R<0?null:[De,ye,Me]}function wr(r){const l=new Uint8Array(r),f=new TextDecoder().decode(l.subarray(0,8));if(f!==gr)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const C=new DataView(r),w=C.getUint32(8,!0),k=12,M=20;let N=null,T=null,A=null,V=null;for(let G=0;G<w;G++){const X=k+G*M,z=C.getUint32(X+0,!0),H=Number(C.getBigUint64(X+4,!0)),Z=Number(C.getBigUint64(X+12,!0)),q=l.slice(H,H+Z).buffer;z===Lc||z===zc||z===Vc?N=q:z===Uc?T=q:z===Gc||z===Rc?A=q:z===Oc&&(V=q)}if(N===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:N,camerasBuffer:T,atlasBuffer:A,meshBuffer:V}}async function Fc(r,l){var M;const f=await fetch(r);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const C=(()=>{const N=f.headers.get("content-length");return N&&parseInt(N,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let k;if(!w)k=await f.arrayBuffer(),l&&l(k.byteLength,C,0);else{const N=[];let T=0,A=performance.now(),V=0;for(;;){const{done:z,value:H}=await w.read();if(z)break;N.push(H),T+=H.byteLength;const Z=performance.now();if(Z-A>=150&&l){const q=(T-V)/((Z-A)/1e3);l(T,C,q),A=Z,V=T}}const G=new Uint8Array(T);let X=0;for(const z of N)G.set(z,X),X+=z.byteLength;k=G.buffer,l&&l(T,C,0)}return k.byteLength>=8&&new TextDecoder().decode(new Uint8Array(k,0,8))===gr?{bundle:wr(k),rawPly:null}:{bundle:null,rawPly:k}}function Nc(r){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=r,f.style.display="none",f.onchange=()=>{var C;return l(((C=f.files)==null?void 0:C[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function qc(r,l,f){const C=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),k=document.getElementById("quick-links");w&&(w.onclick=async()=>{const V=await Nc(".ply,.bitymi");if(V)if(C&&(C.style.display="none"),V.name.toLowerCase().endsWith(".bitymi")){const G=await V.arrayBuffer(),{pcBuffer:X}=wr(G),z=new File([X],V.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),H=await Ss(z,r);l(H)}else{const G=await Ss(V,r);l(G)}}),k&&(k.innerHTML="");const M=new URLSearchParams(window.location.search),N=M.get("bundle")??M.get("model_url"),T=M.get("camera_url"),A=M.get("mesh_url");N&&(C&&(C.style.display="none"),f(N,T,A))}async function $c(r,l,f,C){const w=new Bs(r,f),k=new Sc(w);let M=!1;r.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const N="rgba8unorm";l.configure({device:f,format:N,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let T=null;const A=()=>{w.on_update_canvas(),T!==null&&qn(r.width,r.height,f,T.render_settings_buffer)};new ResizeObserver(()=>{const ie=Math.max(.25,R.render_scale),oe=Math.max(1,Math.ceil(ie*r.clientWidth)),me=Math.max(1,Math.ceil(ie*r.clientHeight));r.width===oe&&r.height===me||(r.width=oe,r.height=me,A())}).observe(r);let G=0,X=0;const z=()=>{(r.width!==G||r.height!==X)&&(G=r.width,X=r.height,A())},H=new URLSearchParams(window.location.search);let q=H.get("animation")==="1";k.enabled=!q;const ce=H.get("camera_url"),U=H.get("mesh_cull"),Q=U==="1"||U==="true",K=H.get("mesh_margin"),le=K!==null?Number(K):NaN,W=Number.isFinite(le)?le:.03,he=H.get("mesh_debug"),ne=he==="1"||he==="true",de=H.get("mesh_sample_mode"),we=de!==null?parseInt(de,10):NaN,Ge=Number.isFinite(we)&&we>=0&&we<=7?we:1,Be=H.get("mesh_silhouette"),ze=Be==="1"||Be==="true",De=H.get("mesh_invert_depth"),ye=De==="1"||De==="true",Me=Math.max(1,window.devicePixelRatio||1),R={gaussian_scaling:1,sh_bias:.5,animate:q,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,bfc:!1,mesh_cull:Q,mesh_margin:W,mesh_debug:ne,mesh_sample_mode:Ge,mesh_silhouette:ze,mesh_invert_depth:ye,render_scale:1},j=new Wl.Pane({title:"Config",expanded:!0});j.addInput(R,"animate",{label:"Animate"}).on("change",ie=>{const oe=q;q=ie.value,k.enabled=!ie.value,!oe&&q&&te.value&&te.value.onAnimateStart(),oe&&!q&&te.value&&te.value.onAnimateStop()}),j.addInput(R,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const te={value:null};qc(f,ie=>pe(ie,[],null,null),async(ie,oe,me)=>{let be=oe??ce,xe,Oe=null,B=null;const O=ie.toLowerCase();if(O.endsWith(".bitymi")||O.includes(".bitymi?")){Ds("downloading bundle ...");try{const{bundle:o}=await Fc(ie,(d,g,y)=>{const S=d/1048576,E=g?g/(1024*1024):void 0,i=y/(1024*1024),m=g?Math.min(99,Math.floor(d/g*100)):void 0,u=E?`total ${E.toFixed(1)} MB`:"total -- MB",p=E&&m!==void 0?`${S.toFixed(1)} MB downloaded (${m}%)`:`${S.toFixed(1)} MB downloaded`,a=`${i.toFixed(2)} MB/s`;It(`downloading bundle ...
${u}, ${p}
${a}`)});if(!o)throw new Error("Expected a .bitymi bundle");It("parsing PLY ...");const h=new File([o.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(xe=await Ss(h,f),!be&&o.camerasBuffer&&(be=URL.createObjectURL(new Blob([o.camerasBuffer],{type:"application/json"}))),o.atlasBuffer){const d=o.atlasBuffer.byteLength/1048576;It(`uploading atlas ...
${d.toFixed(1)} MB BC7`);try{const g=Rl(o.atlasBuffer);Oe=Nl(f,g,!0)}catch(g){console.warn("[atlas] failed to parse/upload atlas:",g)}}o.meshBuffer&&!me&&(It("uploading mesh ..."),B=Ic(f,o.meshBuffer,"bundle.mesh"))}catch(o){throw En(),o}}else xe=await ql(ie,f);me&&(It("loading mesh ..."),B=await Ac(f,me));const v=be?await vc(be):[];v.length>0&&w.set_preset(v[0]),pe(xe,v,Oe,B)});function pe(ie,oe=[],me=null,be=null){const xe=[(ie.bbox.min[0]+ie.bbox.max[0])/2,(ie.bbox.min[1]+ie.bbox.max[1])/2,(ie.bbox.min[2]+ie.bbox.max[2])/2];k.setBbox(ie.bbox.min,ie.bbox.max);const Oe=.5*Math.sqrt((ie.bbox.max[0]-ie.bbox.min[0])**2+(ie.bbox.max[1]-ie.bbox.min[1])**2+(ie.bbox.max[2]-ie.bbox.min[2])**2);function B(re,_e){const ue=tr(re,_e,r,w,ie.surfel_data,Oe);ue&&(k.setOrbitPivot(ue),console.log(`[pick] orbit pivot → (${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)})`))}function O(){const re=r.width*.5,_e=r.height*.5,ue=tr(re,_e,r,w,ie.surfel_data,Oe);if(!ue)return;const Ue=w.rotation,Ve=Ue[2],Ee=Ue[6],Ie=Ue[10],Ce=ue[0]-w.position[0],Ye=ue[1]-w.position[1],ot=ue[2]-w.position[2],ft=Ce*Ve+Ye*Ee+ot*Ie;ft>0&&k.setOrbitDepth(ft)}if(oe.length===0){const re=ie.bbox.max[0]-ie.bbox.min[0],_e=ie.bbox.max[1]-ie.bbox.min[1],ue=ie.bbox.max[2]-ie.bbox.min[2],Ve=.5*Math.sqrt(re*re+_e*_e+ue*ue)*.5;L.set(xe[0]-Ve,xe[1]-Ve,xe[2]-Ve,w.position);const Ee=L.create(Ve,Ve,Ve);L.normalize(Ee,Ee);const Ie=L.create(0,1,0),Ce=L.create();L.cross(Ie,Ee,Ce),L.normalize(Ce,Ce);const Ye=L.create();L.cross(Ee,Ce,Ye);const ot=Pt.create(Ce[0],Ye[0],Ee[0],Ce[1],Ye[1],Ee[1],Ce[2],Ye[2],Ee[2]);ct.fromMat3(ot,w.rotation),w.update_buffer()}k.setCenter(L.create(ie.centroid[0],ie.centroid[1],ie.centroid[2]));const v=new fc(ie,f,N,w.uniform_buffer,C,me,be);T=v,qn(r.width,r.height,f,v.render_settings_buffer),R.atlas_enabled=me!==null,be===null&&(R.mesh_cull=!1),v.setMeshCullEnabled(R.mesh_cull),v.setMeshMargin(R.mesh_margin),be===null&&(R.mesh_debug=!1),v.setMeshOverlayEnabled(R.mesh_debug),un({meshSampleMode:R.mesh_sample_mode,meshSilhouetteCull:R.mesh_silhouette,meshInvertDepth:R.mesh_invert_depth},f,v.render_settings_buffer),console.log(`[mesh-cull] ${be!==null?"mesh loaded":"no mesh"} · toggle=${R.mesh_cull} · margin=${R.mesh_margin}m · debug=${R.mesh_debug} · sample_mode=${R.mesh_sample_mode} · silhouette=${R.mesh_silhouette} · invert=${R.mesh_invert_depth}`);let o=!1;const h=(()=>{if(me!==null)return`${me.meta.format===2?"BC7":me.meta.format===3?"ASTC 4×4":me.meta.format===5?"RVQ-paired (typeA)":me.meta.format===6?"RVQ-paired + BC7 codebook (typeB)":me.meta.format===7?"BC7 codebook gather (typeD)":`format=${me.meta.format}`} ${me.meta.width}×${me.meta.height}, ${me.meta.n_layers} layers`;const re=f.features.has("texture-compression-bc"),_e=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(re?["BC7"]:[]).concat(_e?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",h),Qi(ie.sh_bias,f,v.render_settings_buffer),Xi(R.gaussian_scaling,f,v.render_settings_buffer),R.sh_bias=ie.sh_bias;const d=ie.num_points.toLocaleString(),g={stats:`${d} surfels · -- fps`};j.addMonitor(g,"stats",{label:"Stats",interval:200}),j.addMonitor({atlas:h},"atlas",{label:"Atlas"});const y={stages:"— ms · awaiting timestamp data"};j.addMonitor(y,"stages",{label:"Stages",interval:500});let S=null;if(v.timeQueryEnabled){S=document.createElement("canvas"),S.width=280,S.height=24,S.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(S);const re=ue=>{const Ue=S.getContext("2d");if(!Ue)return;const Ve=S.width,Ee=S.height;if(Ue.clearRect(0,0,Ve,Ee),!ue||ue.total<=0){Ue.fillStyle="#888",Ue.font="11px ui-monospace,Menlo,monospace",Ue.fillText("awaiting GPU timestamps…",8,16);return}const Ie=[{label:"cull",ms:ue.cull,color:"#3aa3ff"},{label:"pre",ms:ue.preprocess,color:"#3ad27a"},{label:"sort",ms:ue.sort,color:"#ffa53a"},{label:"render",ms:ue.render,color:"#ff5566"}],Ce=Math.max(.001,Ie.reduce((ot,ft)=>ot+ft.ms,0));let Ye=0;Ue.font="10px ui-monospace,Menlo,monospace",Ue.textBaseline="middle";for(const ot of Ie){const ft=ot.ms/Ce*Ve;Ue.fillStyle=ot.color,Ue.fillRect(Ye,0,ft,Ee),ft>=38&&(Ue.fillStyle="#000c",Ue.fillText(`${ot.label} ${ot.ms.toFixed(1)}`,Ye+4,Ee/2)),Ye+=ft}};setInterval(()=>{o||v.readPerfMetrics({silent:!0}).then(()=>{const ue=v.lastStageBreakdownMs;re(ue),ue&&(y.stages=`${ue.total.toFixed(1)} ms · cull ${ue.cull.toFixed(1)} / pre ${ue.preprocess.toFixed(1)} / sort ${ue.sort.toFixed(1)} / render ${ue.render.toFixed(1)}`)}).catch(ue=>console.warn("[perf] readPerfMetrics failed:",ue))},500)}const E=.4,i=3,m=.3;let u=null,p=0,a=0;const _=dt.create(),x=Pt.create();let b=oe.length>0?0:-1;const I={view:oe.length>0?`${b+1} / ${oe.length}: ${oe[b].img_name??b}`:"— no presets —"};j.addMonitor(I,"view",{label:"View",interval:100});function F(re){const _e=Pt.create(re[0],re[1],re[2],re[4],re[5],re[6],re[8],re[9],re[10]);return dt.fromMat(_e)}function $(re,_e){u={fromPos:L.clone(w.position),toPos:L.clone(re.position),fromQuat:dt.normalize(F(w.rotation)),toQuat:dt.normalize(F(re.rotation)),target:re,t:0,duration:Math.max(.01,_e)}}const ae=(re,_e=!0)=>{if(oe.length===0)return;b=(re%oe.length+oe.length)%oe.length;const ue=oe[b];_e?$(ue,E):(w.set_preset(ue),k.resetToCamera(),O()),I.view=`${b+1} / ${oe.length}: ${oe[b].img_name??b}`};oe.length>0&&(j.addButton({title:"◀ Prev view"}).on("click",()=>ae(b-1)),j.addButton({title:"Next view ▶"}).on("click",()=>ae(b+1)));const se=oe.length>0?_r(oe,{tiltDownDeg:15,alignFirst:!0}):null,ee=se?Bc(oe,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let fe=0;const Pe=12;te.value={onAnimateStart:()=>{fe=0},onAnimateStop:()=>{k.resetToCamera(),O()}},j.addInput(R,"render_scale",{label:"Render scale",min:.25,max:Me,step:.25}).on("change",re=>{const _e=Math.max(.25,re.value),ue=Math.max(1,Math.ceil(_e*r.clientWidth)),Ue=Math.max(1,Math.ceil(_e*r.clientHeight));(r.width!==ue||r.height!==Ue)&&(r.width=ue,r.height=Ue,A())}),j.addInput(R,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",re=>Xi(re.value,f,v.render_settings_buffer)),j.addInput(R,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",re=>Qi(re.value,f,v.render_settings_buffer)),j.addInput(R,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",re=>{v.bgColor=[re.value.r,re.value.g,re.value.b,re.value.a]});const ve=me?me.meta.format===3?"Atlas (ASTC)":me.meta.format===5?"Atlas (RVQ)":"Atlas (BC7)":"Atlas";j.addInput(R,"atlas_enabled",{label:ve}).on("change",re=>v.setAtlasEnabled(re.value)),j.addInput(R,"bfc",{label:"Backface"}).on("change",re=>un({bfc:re.value},f,v.render_settings_buffer));const ge=j.addInput(R,"mesh_cull",{label:"Mesh cull"});ge.on("change",re=>v.setMeshCullEnabled(re.value)),v.hasMesh||(ge.disabled=!0);const Ae=j.addInput(R,"mesh_margin",{label:"Mesh margin (m)",min:-.5,max:.5,step:.005});Ae.on("change",re=>v.setMeshMargin(re.value)),v.hasMesh||(Ae.disabled=!0);const Te=j.addInput(R,"mesh_debug",{label:"Mesh debug"});Te.on("change",re=>v.setMeshOverlayEnabled(re.value)),v.hasMesh||(Te.disabled=!0);const $e=j.addInput(R,"mesh_sample_mode",{label:"MeshCull pixel formula",options:{"0: (ndc+1)/2 baseline":0,"1: y-flipped":1,"2: x-flipped":2,"3: both flipped":3,"4: swap axes":4,"5: swap + y-flip":5,"6: swap + x-flip":6,"7: swap + both flip":7}});$e.on("change",re=>un({meshSampleMode:re.value},f,v.render_settings_buffer)),v.hasMesh||($e.disabled=!0);const Ze=j.addInput(R,"mesh_silhouette",{label:"Silhouette cull"});Ze.on("change",re=>un({meshSilhouetteCull:re.value},f,v.render_settings_buffer)),v.hasMesh||(Ze.disabled=!0);const je=j.addInput(R,"mesh_invert_depth",{label:"Invert depth cull"});je.on("change",re=>un({meshInvertDepth:re.value},f,v.render_settings_buffer)),v.hasMesh||(je.disabled=!0),j.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(oe.length>0)w.set_preset(oe[0]);else{const re=ie.bbox.max[0]-ie.bbox.min[0],_e=ie.bbox.max[1]-ie.bbox.min[1],ue=ie.bbox.max[2]-ie.bbox.min[2],Ve=.5*Math.sqrt(re*re+_e*_e+ue*ue)*.5;L.set(xe[0]-Ve,xe[1]-Ve,xe[2]-Ve,w.position);const Ee=L.create(Ve,Ve,Ve);L.normalize(Ee,Ee);const Ie=L.create();L.cross(L.create(0,1,0),Ee,Ie),L.normalize(Ie,Ie);const Ce=L.create();L.cross(Ee,Ie,Ce);const Ye=Pt.create(Ie[0],Ce[0],Ee[0],Ie[1],Ce[1],Ee[1],Ie[2],Ce[2],Ee[2]);ct.fromMat3(Ye,w.rotation),w.update_buffer()}k.resetToCamera(),O()});const We={result:"— click Benchmark —"};j.addMonitor(We,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Qe={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function it(){const _e=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ue of Object.keys(Qe))if(_e.startsWith(ue))return ue;return null}const Ke=document.createElement("div");Ke.id="bench-overlay",Ke.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ke);function nt(re,_e,ue){const Ue=Math.floor(_e/Math.max(1,ue)*100),Ve=32,Ee=Math.floor(_e/Math.max(1,ue)*Ve),Ie="█".repeat(Ee)+"░".repeat(Ve-Ee);Ke.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${re}</div><div>[${Ie}] ${Ue}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${_e} / ${ue} frames · offscreen · pipelined · no vsync</div>`,Ke.style.display="block"}function rt(){Ke.style.display="none"}async function st(re=10,_e=200){if(o)return;if(oe.length===0){We.result="no cameras to benchmark";return}o=!0;const ue=q,Ue=R.animate,Ve=new Float32Array(w.position),Ee=new Float32Array(w.rotation);q=!1,R.animate=!1,j.refresh(),u=null,k.enabled=!1;const Ie=it(),Ce=Ie?Qe[Ie]:null,Ye=(Ce==null?void 0:Ce.w)??r.width,ot=(Ce==null?void 0:Ce.h)??r.height,ft=(Ce==null?void 0:Ce.fovY)??w.getFov(),Yn=Ie?`${Ie} · ${Ye>=4e3/4+500?"images_4":"images_2"}`:"custom",kt=r.width,pn=r.height,Bn=w.getFov();r.width=Ye,r.height=ot,w.setFov(ft),qn(Ye,ot,f,v.render_settings_buffer);const Tn=f.createTexture({size:[Ye,ot,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Dn=Tn.createView(),Zn=()=>{const ht=f.createCommandEncoder();v.frame(ht,Dn,!1),f.queue.submit([ht.finish()])},Lt=()=>new Promise(ht=>setTimeout(ht,0)),Xn=20,An=async(ht,zt)=>{let qt=0,Ct=0;for(nt(zt,0,ht),await Lt();Ct<ht;){const en=Math.min(Xn,ht-Ct),Et=performance.now();for(let tn=0;tn<en;tn++)w.set_preset(oe[(Ct+tn)%oe.length]),Zn();await f.queue.onSubmittedWorkDone();const Qn=performance.now();qt+=Qn-Et,Ct+=en,nt(zt,Ct,ht),await Lt()}return qt};try{await An(re,"Warming up");const zt=await An(_e,"Benchmarking")/_e,qt=1e3/zt,Ct=ie.num_points??ie.surfel_data.length/8,en=(ft*180/Math.PI).toFixed(1),Et=`${qt.toFixed(1)} FPS  (${zt.toFixed(2)} ms/frame)
${Ye}×${ot} · fovY ${en}° · ${Yn}
${Ct.toLocaleString()} surfels · ${re}w+${_e}b · pipelined`;We.result=Et,console.log("[bench]",Et.replace(/\n/g,"  |  "))}catch(ht){console.error("[bench] failed:",ht),We.result=`bench failed: ${ht}`}finally{rt(),Tn.destroy(),r.width=kt,r.height=pn,w.setFov(Bn),qn(kt,pn,f,v.render_settings_buffer),w.position.set(Ve),w.rotation.set(Ee),w.update_buffer(),k.enabled=!ue,q=ue,R.animate=Ue,j.refresh(),o=!1}}j.addButton({title:"📊 Benchmark"}).on("click",()=>st()),document.addEventListener("keydown",re=>{const _e=re.key;if(_e>="0"&&_e<="9"&&oe.length>0){const ue=parseInt(_e);ue<oe.length&&ae(ue)}else _e==="ArrowLeft"||_e==="PageUp"?(ae(b-1),re.preventDefault()):_e==="ArrowRight"||_e==="PageDown"?(ae(b+1),re.preventDefault()):(_e==="d"||_e==="D")&&v.debugReadSortedIndices(30).catch(ue=>console.error("[DEBUG] readback failed:",ue))});function Je(re,_e){const ue=r.getBoundingClientRect(),Ue=window.devicePixelRatio||1;return[(re-ue.left)*Ue,(_e-ue.top)*Ue]}r.addEventListener("dblclick",re=>{const[_e,ue]=Je(re.clientX,re.clientY);B(_e,ue)});let qe=0,et=0,He=0;r.addEventListener("pointerdown",re=>{if(re.pointerType!=="touch")return;const _e=performance.now(),ue=_e-qe,Ue=re.clientX-et,Ve=re.clientY-He;if(ue>0&&ue<300&&Ue*Ue+Ve*Ve<40*40){const[Ee,Ie]=Je(re.clientX,re.clientY);B(Ee,Ie),qe=0}else qe=_e,et=re.clientX,He=re.clientY});function lt(){return M}let tt=performance.now(),St=60,wt=Promise.resolve(),bt=0;async function gt(){var Ve;const re=performance.now(),_e=Math.min((re-tt)/1e3,.1);if(tt=re,_e>0){const Ee=((Ve=v.lastStageBreakdownMs)==null?void 0:Ve.total)??0,Ie=Ee>.5?1e3/Ee:1/_e;St=St*.9+Ie*.1,g.stats=`${d} surfels · ${Math.round(St)} fps`}if(o){requestAnimationFrame(gt);return}if(lt()&&(u||q)&&(u=null,k.resetToCamera(),O(),q&&(q=!1,R.animate=!1,j.refresh())),q&&R.animateMode==="circle"&&se){fe+=_e/Pe,fe>=1&&(fe-=1);const Ee=mr(se,fe);w.set_preset(Ee),k.update(_e);const Ie=f.createCommandEncoder();v.frame(Ie,l.getCurrentTexture().createView()),f.queue.submit([Ie.finish()]),bt++,bt===2&&En(),requestAnimationFrame(gt);return}if(u){u.t+=_e/u.duration;const Ee=Math.min(1,u.t),Ie=Ee*Ee*(3-2*Ee);L.lerp(u.fromPos,u.toPos,Ie,w.position),dt.slerp(u.fromQuat,u.toQuat,Ie,_),Pt.fromQuat(_,x),ct.fromMat3(x,w.rotation),w.update_buffer(),u.t>=1&&(w.set_preset(u.target),u=null,q?oe.length>0&&(p=m):(k.resetToCamera(),O()))}else if(q&&!lt()){const Ee=R.animateMode==="circle"&&ee.length>0,Ie=Ee?ee:oe;if(Ie.length!==0){if(p-=_e,p<=0){const Ye=((Ee?a:b)+1)%Ie.length;Ee?a=Ye:b=Ye;const ot=Ee?i/8:i;$(Ie[Ye],ot),Ee||(I.view=`${b+1} / ${oe.length}: ${oe[b].img_name??b}`)}}}k.update(_e),z(),await wt;const ue=f.createCommandEncoder(),Ue=l.getCurrentTexture().createView();v.frame(ue,Ue),f.queue.submit([ue.finish()]),wt=f.queue.onSubmittedWorkDone(),bt++,bt===2&&En(),requestAnimationFrame(gt)}requestAnimationFrame(gt)}}(function(){let l="dev";for(const C of Array.from(document.querySelectorAll('script[type="module"]'))){const k=C.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(k){l=k[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const k=document.querySelector("#title");k.innerText="WebGPU is not supported in this browser.";return}const r=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(r===null){const k=document.querySelector("#title");k.innerText="No adapter is available for WebGPU.";return}const l=[];r.features.has("timestamp-query")&&l.push("timestamp-query"),r.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),r.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",r.info??"(unknown)"),console.log("[adapter] features:",Array.from(r.features)),console.log("[adapter] BC7:",r.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",r.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:r.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxTextureDimension2D:r.limits.maxTextureDimension2D});const f=await r.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxBufferSize:r.limits.maxBufferSize,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize}}),C=document.querySelector("#webgpu-canvas");zl(C!==null);const w=C.getContext("webgpu");$c(C,w,f,l)})();
