var wl=Object.defineProperty;var xl=(o,l,f)=>l in o?wl(o,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[l]=f;var F=(o,l,f)=>(xl(o,typeof l!="symbol"?l+"":l,f),f);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))E(w);new MutationObserver(w=>{for(const C of w)if(C.type==="childList")for(const M of C.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&E(M)}).observe(document,{childList:!0,subtree:!0});function f(w){const C={};return w.integrity&&(C.integrity=w.integrity),w.referrerPolicy&&(C.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?C.credentials="include":w.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function E(w){if(w.ep)return;w.ep=!0;const C=f(w);fetch(w.href,C)}})();function yl(o,l){return class extends o{constructor(...f){super(...f),l(this)}}}const Pl=yl(Array,o=>o.fill(0));let ze=1e-6;function Sl(o){function l(x=0,k=0){const S=new o(2);return x!==void 0&&(S[0]=x,k!==void 0&&(S[1]=k)),S}const f=l;function E(x,k,S){const r=S??new o(2);return r[0]=x,r[1]=k,r}function w(x,k){const S=k??new o(2);return S[0]=Math.ceil(x[0]),S[1]=Math.ceil(x[1]),S}function C(x,k){const S=k??new o(2);return S[0]=Math.floor(x[0]),S[1]=Math.floor(x[1]),S}function M(x,k){const S=k??new o(2);return S[0]=Math.round(x[0]),S[1]=Math.round(x[1]),S}function I(x,k=0,S=1,r){const m=r??new o(2);return m[0]=Math.min(S,Math.max(k,x[0])),m[1]=Math.min(S,Math.max(k,x[1])),m}function A(x,k,S){const r=S??new o(2);return r[0]=x[0]+k[0],r[1]=x[1]+k[1],r}function L(x,k,S,r){const m=r??new o(2);return m[0]=x[0]+k[0]*S,m[1]=x[1]+k[1]*S,m}function N(x,k){const S=x[0],r=x[1],m=k[0],d=k[1],h=Math.sqrt(S*S+r*r),a=Math.sqrt(m*m+d*d),_=h*a,y=_&&Pe(x,k)/_;return Math.acos(y)}function V(x,k,S){const r=S??new o(2);return r[0]=x[0]-k[0],r[1]=x[1]-k[1],r}const z=V;function K(x,k){return Math.abs(x[0]-k[0])<ze&&Math.abs(x[1]-k[1])<ze}function oe(x,k){return x[0]===k[0]&&x[1]===k[1]}function q(x,k,S,r){const m=r??new o(2);return m[0]=x[0]+S*(k[0]-x[0]),m[1]=x[1]+S*(k[1]-x[1]),m}function Q(x,k,S,r){const m=r??new o(2);return m[0]=x[0]+S[0]*(k[0]-x[0]),m[1]=x[1]+S[1]*(k[1]-x[1]),m}function te(x,k,S){const r=S??new o(2);return r[0]=Math.max(x[0],k[0]),r[1]=Math.max(x[1],k[1]),r}function W(x,k,S){const r=S??new o(2);return r[0]=Math.min(x[0],k[0]),r[1]=Math.min(x[1],k[1]),r}function Y(x,k,S){const r=S??new o(2);return r[0]=x[0]*k,r[1]=x[1]*k,r}const H=Y;function le(x,k,S){const r=S??new o(2);return r[0]=x[0]/k,r[1]=x[1]/k,r}function ke(x,k){const S=k??new o(2);return S[0]=1/x[0],S[1]=1/x[1],S}const pe=ke;function ue(x,k,S){const r=S??new o(3),m=x[0]*k[1]-x[1]*k[0];return r[0]=0,r[1]=0,r[2]=m,r}function Pe(x,k){return x[0]*k[0]+x[1]*k[1]}function ae(x){const k=x[0],S=x[1];return Math.sqrt(k*k+S*S)}const xe=ae;function ve(x){const k=x[0],S=x[1];return k*k+S*S}const Le=ve;function Oe(x,k){const S=x[0]-k[0],r=x[1]-k[1];return Math.sqrt(S*S+r*r)}const X=Oe;function ee(x,k){const S=x[0]-k[0],r=x[1]-k[1];return S*S+r*r}const O=ee;function Z(x,k){const S=k??new o(2),r=x[0],m=x[1],d=Math.sqrt(r*r+m*m);return d>1e-5?(S[0]=r/d,S[1]=m/d):(S[0]=0,S[1]=0),S}function Ve(x,k){const S=k??new o(2);return S[0]=-x[0],S[1]=-x[1],S}function Be(x,k){const S=k??new o(2);return S[0]=x[0],S[1]=x[1],S}const be=Be;function ye(x,k,S){const r=S??new o(2);return r[0]=x[0]*k[0],r[1]=x[1]*k[1],r}const Ge=ye;function Se(x,k,S){const r=S??new o(2);return r[0]=x[0]/k[0],r[1]=x[1]/k[1],r}const Te=Se;function me(x=1,k){const S=k??new o(2),r=Math.random()*2*Math.PI;return S[0]=Math.cos(r)*x,S[1]=Math.sin(r)*x,S}function B(x){const k=x??new o(2);return k[0]=0,k[1]=0,k}function G(x,k,S){const r=S??new o(2),m=x[0],d=x[1];return r[0]=m*k[0]+d*k[4]+k[12],r[1]=m*k[1]+d*k[5]+k[13],r}function b(x,k,S){const r=S??new o(2),m=x[0],d=x[1];return r[0]=k[0]*m+k[4]*d+k[8],r[1]=k[1]*m+k[5]*d+k[9],r}function i(x,k,S,r){const m=r??new o(2),d=x[0]-k[0],h=x[1]-k[1],a=Math.sin(S),_=Math.cos(S);return m[0]=d*_-h*a+k[0],m[1]=d*a+h*_+k[1],m}function p(x,k,S){const r=S??new o(2);return Z(x,r),Y(r,k,r)}function u(x,k,S){const r=S??new o(2);return ae(x)>k?p(x,k,r):Be(x,r)}function v(x,k,S){const r=S??new o(2);return q(x,k,.5,r)}return{create:l,fromValues:f,set:E,ceil:w,floor:C,round:M,clamp:I,add:A,addScaled:L,angle:N,subtract:V,sub:z,equalsApproximately:K,equals:oe,lerp:q,lerpV:Q,max:te,min:W,mulScalar:Y,scale:H,divScalar:le,inverse:ke,invert:pe,cross:ue,dot:Pe,length:ae,len:xe,lengthSq:ve,lenSq:Le,distance:Oe,dist:X,distanceSq:ee,distSq:O,normalize:Z,negate:Ve,copy:Be,clone:be,multiply:ye,mul:Ge,divide:Se,div:Te,random:me,zero:B,transformMat4:G,transformMat3:b,rotate:i,setLength:p,truncate:u,midpoint:v}}const Fr=new Map;function oi(o){let l=Fr.get(o);return l||(l=Sl(o),Fr.set(o,l)),l}function Cl(o){function l(a,_,y){const g=new o(3);return a!==void 0&&(g[0]=a,_!==void 0&&(g[1]=_,y!==void 0&&(g[2]=y))),g}const f=l;function E(a,_,y,g){const D=g??new o(3);return D[0]=a,D[1]=_,D[2]=y,D}function w(a,_){const y=_??new o(3);return y[0]=Math.ceil(a[0]),y[1]=Math.ceil(a[1]),y[2]=Math.ceil(a[2]),y}function C(a,_){const y=_??new o(3);return y[0]=Math.floor(a[0]),y[1]=Math.floor(a[1]),y[2]=Math.floor(a[2]),y}function M(a,_){const y=_??new o(3);return y[0]=Math.round(a[0]),y[1]=Math.round(a[1]),y[2]=Math.round(a[2]),y}function I(a,_=0,y=1,g){const D=g??new o(3);return D[0]=Math.min(y,Math.max(_,a[0])),D[1]=Math.min(y,Math.max(_,a[1])),D[2]=Math.min(y,Math.max(_,a[2])),D}function A(a,_,y){const g=y??new o(3);return g[0]=a[0]+_[0],g[1]=a[1]+_[1],g[2]=a[2]+_[2],g}function L(a,_,y,g){const D=g??new o(3);return D[0]=a[0]+_[0]*y,D[1]=a[1]+_[1]*y,D[2]=a[2]+_[2]*y,D}function N(a,_){const y=a[0],g=a[1],D=a[2],U=_[0],$=_[1],ce=_[2],ie=Math.sqrt(y*y+g*g+D*D),re=Math.sqrt(U*U+$*$+ce*ce),ge=ie*re,Me=ge&&Pe(a,_)/ge;return Math.acos(Me)}function V(a,_,y){const g=y??new o(3);return g[0]=a[0]-_[0],g[1]=a[1]-_[1],g[2]=a[2]-_[2],g}const z=V;function K(a,_){return Math.abs(a[0]-_[0])<ze&&Math.abs(a[1]-_[1])<ze&&Math.abs(a[2]-_[2])<ze}function oe(a,_){return a[0]===_[0]&&a[1]===_[1]&&a[2]===_[2]}function q(a,_,y,g){const D=g??new o(3);return D[0]=a[0]+y*(_[0]-a[0]),D[1]=a[1]+y*(_[1]-a[1]),D[2]=a[2]+y*(_[2]-a[2]),D}function Q(a,_,y,g){const D=g??new o(3);return D[0]=a[0]+y[0]*(_[0]-a[0]),D[1]=a[1]+y[1]*(_[1]-a[1]),D[2]=a[2]+y[2]*(_[2]-a[2]),D}function te(a,_,y){const g=y??new o(3);return g[0]=Math.max(a[0],_[0]),g[1]=Math.max(a[1],_[1]),g[2]=Math.max(a[2],_[2]),g}function W(a,_,y){const g=y??new o(3);return g[0]=Math.min(a[0],_[0]),g[1]=Math.min(a[1],_[1]),g[2]=Math.min(a[2],_[2]),g}function Y(a,_,y){const g=y??new o(3);return g[0]=a[0]*_,g[1]=a[1]*_,g[2]=a[2]*_,g}const H=Y;function le(a,_,y){const g=y??new o(3);return g[0]=a[0]/_,g[1]=a[1]/_,g[2]=a[2]/_,g}function ke(a,_){const y=_??new o(3);return y[0]=1/a[0],y[1]=1/a[1],y[2]=1/a[2],y}const pe=ke;function ue(a,_,y){const g=y??new o(3),D=a[2]*_[0]-a[0]*_[2],U=a[0]*_[1]-a[1]*_[0];return g[0]=a[1]*_[2]-a[2]*_[1],g[1]=D,g[2]=U,g}function Pe(a,_){return a[0]*_[0]+a[1]*_[1]+a[2]*_[2]}function ae(a){const _=a[0],y=a[1],g=a[2];return Math.sqrt(_*_+y*y+g*g)}const xe=ae;function ve(a){const _=a[0],y=a[1],g=a[2];return _*_+y*y+g*g}const Le=ve;function Oe(a,_){const y=a[0]-_[0],g=a[1]-_[1],D=a[2]-_[2];return Math.sqrt(y*y+g*g+D*D)}const X=Oe;function ee(a,_){const y=a[0]-_[0],g=a[1]-_[1],D=a[2]-_[2];return y*y+g*g+D*D}const O=ee;function Z(a,_){const y=_??new o(3),g=a[0],D=a[1],U=a[2],$=Math.sqrt(g*g+D*D+U*U);return $>1e-5?(y[0]=g/$,y[1]=D/$,y[2]=U/$):(y[0]=0,y[1]=0,y[2]=0),y}function Ve(a,_){const y=_??new o(3);return y[0]=-a[0],y[1]=-a[1],y[2]=-a[2],y}function Be(a,_){const y=_??new o(3);return y[0]=a[0],y[1]=a[1],y[2]=a[2],y}const be=Be;function ye(a,_,y){const g=y??new o(3);return g[0]=a[0]*_[0],g[1]=a[1]*_[1],g[2]=a[2]*_[2],g}const Ge=ye;function Se(a,_,y){const g=y??new o(3);return g[0]=a[0]/_[0],g[1]=a[1]/_[1],g[2]=a[2]/_[2],g}const Te=Se;function me(a=1,_){const y=_??new o(3),g=Math.random()*2*Math.PI,D=Math.random()*2-1,U=Math.sqrt(1-D*D)*a;return y[0]=Math.cos(g)*U,y[1]=Math.sin(g)*U,y[2]=D*a,y}function B(a){const _=a??new o(3);return _[0]=0,_[1]=0,_[2]=0,_}function G(a,_,y){const g=y??new o(3),D=a[0],U=a[1],$=a[2],ce=_[3]*D+_[7]*U+_[11]*$+_[15]||1;return g[0]=(_[0]*D+_[4]*U+_[8]*$+_[12])/ce,g[1]=(_[1]*D+_[5]*U+_[9]*$+_[13])/ce,g[2]=(_[2]*D+_[6]*U+_[10]*$+_[14])/ce,g}function b(a,_,y){const g=y??new o(3),D=a[0],U=a[1],$=a[2];return g[0]=D*_[0*4+0]+U*_[1*4+0]+$*_[2*4+0],g[1]=D*_[0*4+1]+U*_[1*4+1]+$*_[2*4+1],g[2]=D*_[0*4+2]+U*_[1*4+2]+$*_[2*4+2],g}function i(a,_,y){const g=y??new o(3),D=a[0],U=a[1],$=a[2];return g[0]=D*_[0]+U*_[4]+$*_[8],g[1]=D*_[1]+U*_[5]+$*_[9],g[2]=D*_[2]+U*_[6]+$*_[10],g}function p(a,_,y){const g=y??new o(3),D=_[0],U=_[1],$=_[2],ce=_[3]*2,ie=a[0],re=a[1],ge=a[2],Me=U*ge-$*re,he=$*ie-D*ge,Ee=D*re-U*ie;return g[0]=ie+Me*ce+(U*Ee-$*he)*2,g[1]=re+he*ce+($*Me-D*Ee)*2,g[2]=ge+Ee*ce+(D*he-U*Me)*2,g}function u(a,_){const y=_??new o(3);return y[0]=a[12],y[1]=a[13],y[2]=a[14],y}function v(a,_,y){const g=y??new o(3),D=_*4;return g[0]=a[D+0],g[1]=a[D+1],g[2]=a[D+2],g}function x(a,_){const y=_??new o(3),g=a[0],D=a[1],U=a[2],$=a[4],ce=a[5],ie=a[6],re=a[8],ge=a[9],Me=a[10];return y[0]=Math.sqrt(g*g+D*D+U*U),y[1]=Math.sqrt($*$+ce*ce+ie*ie),y[2]=Math.sqrt(re*re+ge*ge+Me*Me),y}function k(a,_,y,g){const D=g??new o(3),U=[],$=[];return U[0]=a[0]-_[0],U[1]=a[1]-_[1],U[2]=a[2]-_[2],$[0]=U[0],$[1]=U[1]*Math.cos(y)-U[2]*Math.sin(y),$[2]=U[1]*Math.sin(y)+U[2]*Math.cos(y),D[0]=$[0]+_[0],D[1]=$[1]+_[1],D[2]=$[2]+_[2],D}function S(a,_,y,g){const D=g??new o(3),U=[],$=[];return U[0]=a[0]-_[0],U[1]=a[1]-_[1],U[2]=a[2]-_[2],$[0]=U[2]*Math.sin(y)+U[0]*Math.cos(y),$[1]=U[1],$[2]=U[2]*Math.cos(y)-U[0]*Math.sin(y),D[0]=$[0]+_[0],D[1]=$[1]+_[1],D[2]=$[2]+_[2],D}function r(a,_,y,g){const D=g??new o(3),U=[],$=[];return U[0]=a[0]-_[0],U[1]=a[1]-_[1],U[2]=a[2]-_[2],$[0]=U[0]*Math.cos(y)-U[1]*Math.sin(y),$[1]=U[0]*Math.sin(y)+U[1]*Math.cos(y),$[2]=U[2],D[0]=$[0]+_[0],D[1]=$[1]+_[1],D[2]=$[2]+_[2],D}function m(a,_,y){const g=y??new o(3);return Z(a,g),Y(g,_,g)}function d(a,_,y){const g=y??new o(3);return ae(a)>_?m(a,_,g):Be(a,g)}function h(a,_,y){const g=y??new o(3);return q(a,_,.5,g)}return{create:l,fromValues:f,set:E,ceil:w,floor:C,round:M,clamp:I,add:A,addScaled:L,angle:N,subtract:V,sub:z,equalsApproximately:K,equals:oe,lerp:q,lerpV:Q,max:te,min:W,mulScalar:Y,scale:H,divScalar:le,inverse:ke,invert:pe,cross:ue,dot:Pe,length:ae,len:xe,lengthSq:ve,lenSq:Le,distance:Oe,dist:X,distanceSq:ee,distSq:O,normalize:Z,negate:Ve,copy:Be,clone:be,multiply:ye,mul:Ge,divide:Se,div:Te,random:me,zero:B,transformMat4:G,transformMat4Upper3x3:b,transformMat3:i,transformQuat:p,getTranslation:u,getAxis:v,getScaling:x,rotateX:k,rotateY:S,rotateZ:r,setLength:m,truncate:d,midpoint:h}}const Nr=new Map;function Zn(o){let l=Nr.get(o);return l||(l=Cl(o),Nr.set(o,l)),l}function El(o){const l=oi(o),f=Zn(o);function E(i,p,u,v,x,k,S,r,m){const d=new o(12);return d[3]=0,d[7]=0,d[11]=0,i!==void 0&&(d[0]=i,p!==void 0&&(d[1]=p,u!==void 0&&(d[2]=u,v!==void 0&&(d[4]=v,x!==void 0&&(d[5]=x,k!==void 0&&(d[6]=k,S!==void 0&&(d[8]=S,r!==void 0&&(d[9]=r,m!==void 0&&(d[10]=m))))))))),d}function w(i,p,u,v,x,k,S,r,m,d){const h=d??new o(12);return h[0]=i,h[1]=p,h[2]=u,h[3]=0,h[4]=v,h[5]=x,h[6]=k,h[7]=0,h[8]=S,h[9]=r,h[10]=m,h[11]=0,h}function C(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[3]=0,u[4]=i[4],u[5]=i[5],u[6]=i[6],u[7]=0,u[8]=i[8],u[9]=i[9],u[10]=i[10],u[11]=0,u}function M(i,p){const u=p??new o(12),v=i[0],x=i[1],k=i[2],S=i[3],r=v+v,m=x+x,d=k+k,h=v*r,a=x*r,_=x*m,y=k*r,g=k*m,D=k*d,U=S*r,$=S*m,ce=S*d;return u[0]=1-_-D,u[1]=a+ce,u[2]=y-$,u[3]=0,u[4]=a-ce,u[5]=1-h-D,u[6]=g+U,u[7]=0,u[8]=y+$,u[9]=g-U,u[10]=1-h-_,u[11]=0,u}function I(i,p){const u=p??new o(12);return u[0]=-i[0],u[1]=-i[1],u[2]=-i[2],u[4]=-i[4],u[5]=-i[5],u[6]=-i[6],u[8]=-i[8],u[9]=-i[9],u[10]=-i[10],u}function A(i,p,u){const v=u??new o(12);return v[0]=i[0]*p,v[1]=i[1]*p,v[2]=i[2]*p,v[4]=i[4]*p,v[5]=i[5]*p,v[6]=i[6]*p,v[8]=i[8]*p,v[9]=i[9]*p,v[10]=i[10]*p,v}const L=A;function N(i,p,u){const v=u??new o(12);return v[0]=i[0]+p[0],v[1]=i[1]+p[1],v[2]=i[2]+p[2],v[4]=i[4]+p[4],v[5]=i[5]+p[5],v[6]=i[6]+p[6],v[8]=i[8]+p[8],v[9]=i[9]+p[9],v[10]=i[10]+p[10],v}function V(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=i[1],u[2]=i[2],u[4]=i[4],u[5]=i[5],u[6]=i[6],u[8]=i[8],u[9]=i[9],u[10]=i[10],u}const z=V;function K(i,p){return Math.abs(i[0]-p[0])<ze&&Math.abs(i[1]-p[1])<ze&&Math.abs(i[2]-p[2])<ze&&Math.abs(i[4]-p[4])<ze&&Math.abs(i[5]-p[5])<ze&&Math.abs(i[6]-p[6])<ze&&Math.abs(i[8]-p[8])<ze&&Math.abs(i[9]-p[9])<ze&&Math.abs(i[10]-p[10])<ze}function oe(i,p){return i[0]===p[0]&&i[1]===p[1]&&i[2]===p[2]&&i[4]===p[4]&&i[5]===p[5]&&i[6]===p[6]&&i[8]===p[8]&&i[9]===p[9]&&i[10]===p[10]}function q(i){const p=i??new o(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Q(i,p){const u=p??new o(12);if(u===i){let _;return _=i[1],i[1]=i[4],i[4]=_,_=i[2],i[2]=i[8],i[8]=_,_=i[6],i[6]=i[9],i[9]=_,u}const v=i[0*4+0],x=i[0*4+1],k=i[0*4+2],S=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],a=i[2*4+2];return u[0]=v,u[1]=S,u[2]=d,u[4]=x,u[5]=r,u[6]=h,u[8]=k,u[9]=m,u[10]=a,u}function te(i,p){const u=p??new o(12),v=i[0*4+0],x=i[0*4+1],k=i[0*4+2],S=i[1*4+0],r=i[1*4+1],m=i[1*4+2],d=i[2*4+0],h=i[2*4+1],a=i[2*4+2],_=a*r-m*h,y=-a*S+m*d,g=h*S-r*d,D=1/(v*_+x*y+k*g);return u[0]=_*D,u[1]=(-a*x+k*h)*D,u[2]=(m*x-k*r)*D,u[4]=y*D,u[5]=(a*v-k*d)*D,u[6]=(-m*v+k*S)*D,u[8]=g*D,u[9]=(-h*v+x*d)*D,u[10]=(r*v-x*S)*D,u}function W(i){const p=i[0],u=i[0*4+1],v=i[0*4+2],x=i[1*4+0],k=i[1*4+1],S=i[1*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2];return p*(k*d-m*S)-x*(u*d-m*v)+r*(u*S-k*v)}const Y=te;function H(i,p,u){const v=u??new o(12),x=i[0],k=i[1],S=i[2],r=i[4+0],m=i[4+1],d=i[4+2],h=i[8+0],a=i[8+1],_=i[8+2],y=p[0],g=p[1],D=p[2],U=p[4+0],$=p[4+1],ce=p[4+2],ie=p[8+0],re=p[8+1],ge=p[8+2];return v[0]=x*y+r*g+h*D,v[1]=k*y+m*g+a*D,v[2]=S*y+d*g+_*D,v[4]=x*U+r*$+h*ce,v[5]=k*U+m*$+a*ce,v[6]=S*U+d*$+_*ce,v[8]=x*ie+r*re+h*ge,v[9]=k*ie+m*re+a*ge,v[10]=S*ie+d*re+_*ge,v}const le=H;function ke(i,p,u){const v=u??q();return i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2],v[4]=i[4],v[5]=i[5],v[6]=i[6]),v[8]=p[0],v[9]=p[1],v[10]=1,v}function pe(i,p){const u=p??l.create();return u[0]=i[8],u[1]=i[9],u}function ue(i,p,u){const v=u??l.create(),x=p*4;return v[0]=i[x+0],v[1]=i[x+1],v}function Pe(i,p,u,v){const x=v===i?i:V(i,v),k=u*4;return x[k+0]=p[0],x[k+1]=p[1],x}function ae(i,p){const u=p??l.create(),v=i[0],x=i[1],k=i[4],S=i[5];return u[0]=Math.sqrt(v*v+x*x),u[1]=Math.sqrt(k*k+S*S),u}function xe(i,p){const u=p??f.create(),v=i[0],x=i[1],k=i[2],S=i[4],r=i[5],m=i[6],d=i[8],h=i[9],a=i[10];return u[0]=Math.sqrt(v*v+x*x+k*k),u[1]=Math.sqrt(S*S+r*r+m*m),u[2]=Math.sqrt(d*d+h*h+a*a),u}function ve(i,p){const u=p??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=i[0],u[9]=i[1],u[10]=1,u}function Le(i,p,u){const v=u??new o(12),x=p[0],k=p[1],S=i[0],r=i[1],m=i[2],d=i[1*4+0],h=i[1*4+1],a=i[1*4+2],_=i[2*4+0],y=i[2*4+1],g=i[2*4+2];return i!==v&&(v[0]=S,v[1]=r,v[2]=m,v[4]=d,v[5]=h,v[6]=a),v[8]=S*x+d*k+_,v[9]=r*x+h*k+y,v[10]=m*x+a*k+g,v}function Oe(i,p){const u=p??new o(12),v=Math.cos(i),x=Math.sin(i);return u[0]=v,u[1]=x,u[2]=0,u[4]=-x,u[5]=v,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function X(i,p,u){const v=u??new o(12),x=i[0*4+0],k=i[0*4+1],S=i[0*4+2],r=i[1*4+0],m=i[1*4+1],d=i[1*4+2],h=Math.cos(p),a=Math.sin(p);return v[0]=h*x+a*r,v[1]=h*k+a*m,v[2]=h*S+a*d,v[4]=h*r-a*x,v[5]=h*m-a*k,v[6]=h*d-a*S,i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function ee(i,p){const u=p??new o(12),v=Math.cos(i),x=Math.sin(i);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=v,u[6]=x,u[8]=0,u[9]=-x,u[10]=v,u}function O(i,p,u){const v=u??new o(12),x=i[4],k=i[5],S=i[6],r=i[8],m=i[9],d=i[10],h=Math.cos(p),a=Math.sin(p);return v[4]=h*x+a*r,v[5]=h*k+a*m,v[6]=h*S+a*d,v[8]=h*r-a*x,v[9]=h*m-a*k,v[10]=h*d-a*S,i!==v&&(v[0]=i[0],v[1]=i[1],v[2]=i[2]),v}function Z(i,p){const u=p??new o(12),v=Math.cos(i),x=Math.sin(i);return u[0]=v,u[1]=0,u[2]=-x,u[4]=0,u[5]=1,u[6]=0,u[8]=x,u[9]=0,u[10]=v,u}function Ve(i,p,u){const v=u??new o(12),x=i[0*4+0],k=i[0*4+1],S=i[0*4+2],r=i[2*4+0],m=i[2*4+1],d=i[2*4+2],h=Math.cos(p),a=Math.sin(p);return v[0]=h*x-a*r,v[1]=h*k-a*m,v[2]=h*S-a*d,v[8]=h*r+a*x,v[9]=h*m+a*k,v[10]=h*d+a*S,i!==v&&(v[4]=i[4],v[5]=i[5],v[6]=i[6]),v}const Be=Oe,be=X;function ye(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ge(i,p,u){const v=u??new o(12),x=p[0],k=p[1];return v[0]=x*i[0*4+0],v[1]=x*i[0*4+1],v[2]=x*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function Se(i,p){const u=p??new o(12);return u[0]=i[0],u[1]=0,u[2]=0,u[4]=0,u[5]=i[1],u[6]=0,u[8]=0,u[9]=0,u[10]=i[2],u}function Te(i,p,u){const v=u??new o(12),x=p[0],k=p[1],S=p[2];return v[0]=x*i[0*4+0],v[1]=x*i[0*4+1],v[2]=x*i[0*4+2],v[4]=k*i[1*4+0],v[5]=k*i[1*4+1],v[6]=k*i[1*4+2],v[8]=S*i[2*4+0],v[9]=S*i[2*4+1],v[10]=S*i[2*4+2],v}function me(i,p){const u=p??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function B(i,p,u){const v=u??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],i!==v&&(v[8]=i[8],v[9]=i[9],v[10]=i[10]),v}function G(i,p){const u=p??new o(12);return u[0]=i,u[1]=0,u[2]=0,u[4]=0,u[5]=i,u[6]=0,u[8]=0,u[9]=0,u[10]=i,u}function b(i,p,u){const v=u??new o(12);return v[0]=p*i[0*4+0],v[1]=p*i[0*4+1],v[2]=p*i[0*4+2],v[4]=p*i[1*4+0],v[5]=p*i[1*4+1],v[6]=p*i[1*4+2],v[8]=p*i[2*4+0],v[9]=p*i[2*4+1],v[10]=p*i[2*4+2],v}return{add:N,clone:z,copy:V,create:E,determinant:W,equals:oe,equalsApproximately:K,fromMat4:C,fromQuat:M,get3DScaling:xe,getAxis:ue,getScaling:ae,getTranslation:pe,identity:q,inverse:te,invert:Y,mul:le,mulScalar:L,multiply:H,multiplyScalar:A,negate:I,rotate:X,rotateX:O,rotateY:Ve,rotateZ:be,rotation:Oe,rotationX:ee,rotationY:Z,rotationZ:Be,scale:Ge,scale3D:Te,scaling:ye,scaling3D:Se,set:w,setAxis:Pe,setTranslation:ke,translate:Le,translation:ve,transpose:Q,uniformScale:B,uniformScale3D:b,uniformScaling:me,uniformScaling3D:G}}const $r=new Map;function kl(o){let l=$r.get(o);return l||(l=El(o),$r.set(o,l)),l}function Ml(o){const l=Zn(o);function f(r,m,d,h,a,_,y,g,D,U,$,ce,ie,re,ge,Me){const he=new o(16);return r!==void 0&&(he[0]=r,m!==void 0&&(he[1]=m,d!==void 0&&(he[2]=d,h!==void 0&&(he[3]=h,a!==void 0&&(he[4]=a,_!==void 0&&(he[5]=_,y!==void 0&&(he[6]=y,g!==void 0&&(he[7]=g,D!==void 0&&(he[8]=D,U!==void 0&&(he[9]=U,$!==void 0&&(he[10]=$,ce!==void 0&&(he[11]=ce,ie!==void 0&&(he[12]=ie,re!==void 0&&(he[13]=re,ge!==void 0&&(he[14]=ge,Me!==void 0&&(he[15]=Me)))))))))))))))),he}function E(r,m,d,h,a,_,y,g,D,U,$,ce,ie,re,ge,Me,he){const Ee=he??new o(16);return Ee[0]=r,Ee[1]=m,Ee[2]=d,Ee[3]=h,Ee[4]=a,Ee[5]=_,Ee[6]=y,Ee[7]=g,Ee[8]=D,Ee[9]=U,Ee[10]=$,Ee[11]=ce,Ee[12]=ie,Ee[13]=re,Ee[14]=ge,Ee[15]=Me,Ee}function w(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=0,d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=0,d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function C(r,m){const d=m??new o(16),h=r[0],a=r[1],_=r[2],y=r[3],g=h+h,D=a+a,U=_+_,$=h*g,ce=a*g,ie=a*D,re=_*g,ge=_*D,Me=_*U,he=y*g,Ee=y*D,Ie=y*U;return d[0]=1-ie-Me,d[1]=ce+Ie,d[2]=re-Ee,d[3]=0,d[4]=ce-Ie,d[5]=1-$-Me,d[6]=ge+he,d[7]=0,d[8]=re+Ee,d[9]=ge-he,d[10]=1-$-ie,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function M(r,m){const d=m??new o(16);return d[0]=-r[0],d[1]=-r[1],d[2]=-r[2],d[3]=-r[3],d[4]=-r[4],d[5]=-r[5],d[6]=-r[6],d[7]=-r[7],d[8]=-r[8],d[9]=-r[9],d[10]=-r[10],d[11]=-r[11],d[12]=-r[12],d[13]=-r[13],d[14]=-r[14],d[15]=-r[15],d}function I(r,m,d){const h=d??new o(16);return h[0]=r[0]+m[0],h[1]=r[1]+m[1],h[2]=r[2]+m[2],h[3]=r[3]+m[3],h[4]=r[4]+m[4],h[5]=r[5]+m[5],h[6]=r[6]+m[6],h[7]=r[7]+m[7],h[8]=r[8]+m[8],h[9]=r[9]+m[9],h[10]=r[10]+m[10],h[11]=r[11]+m[11],h[12]=r[12]+m[12],h[13]=r[13]+m[13],h[14]=r[14]+m[14],h[15]=r[15]+m[15],h}function A(r,m,d){const h=d??new o(16);return h[0]=r[0]*m,h[1]=r[1]*m,h[2]=r[2]*m,h[3]=r[3]*m,h[4]=r[4]*m,h[5]=r[5]*m,h[6]=r[6]*m,h[7]=r[7]*m,h[8]=r[8]*m,h[9]=r[9]*m,h[10]=r[10]*m,h[11]=r[11]*m,h[12]=r[12]*m,h[13]=r[13]*m,h[14]=r[14]*m,h[15]=r[15]*m,h}const L=A;function N(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=r[1],d[2]=r[2],d[3]=r[3],d[4]=r[4],d[5]=r[5],d[6]=r[6],d[7]=r[7],d[8]=r[8],d[9]=r[9],d[10]=r[10],d[11]=r[11],d[12]=r[12],d[13]=r[13],d[14]=r[14],d[15]=r[15],d}const V=N;function z(r,m){return Math.abs(r[0]-m[0])<ze&&Math.abs(r[1]-m[1])<ze&&Math.abs(r[2]-m[2])<ze&&Math.abs(r[3]-m[3])<ze&&Math.abs(r[4]-m[4])<ze&&Math.abs(r[5]-m[5])<ze&&Math.abs(r[6]-m[6])<ze&&Math.abs(r[7]-m[7])<ze&&Math.abs(r[8]-m[8])<ze&&Math.abs(r[9]-m[9])<ze&&Math.abs(r[10]-m[10])<ze&&Math.abs(r[11]-m[11])<ze&&Math.abs(r[12]-m[12])<ze&&Math.abs(r[13]-m[13])<ze&&Math.abs(r[14]-m[14])<ze&&Math.abs(r[15]-m[15])<ze}function K(r,m){return r[0]===m[0]&&r[1]===m[1]&&r[2]===m[2]&&r[3]===m[3]&&r[4]===m[4]&&r[5]===m[5]&&r[6]===m[6]&&r[7]===m[7]&&r[8]===m[8]&&r[9]===m[9]&&r[10]===m[10]&&r[11]===m[11]&&r[12]===m[12]&&r[13]===m[13]&&r[14]===m[14]&&r[15]===m[15]}function oe(r){const m=r??new o(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function q(r,m){const d=m??new o(16);if(d===r){let Re;return Re=r[1],r[1]=r[4],r[4]=Re,Re=r[2],r[2]=r[8],r[8]=Re,Re=r[3],r[3]=r[12],r[12]=Re,Re=r[6],r[6]=r[9],r[9]=Re,Re=r[7],r[7]=r[13],r[13]=Re,Re=r[11],r[11]=r[14],r[14]=Re,d}const h=r[0*4+0],a=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],D=r[1*4+1],U=r[1*4+2],$=r[1*4+3],ce=r[2*4+0],ie=r[2*4+1],re=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],he=r[3*4+1],Ee=r[3*4+2],Ie=r[3*4+3];return d[0]=h,d[1]=g,d[2]=ce,d[3]=Me,d[4]=a,d[5]=D,d[6]=ie,d[7]=he,d[8]=_,d[9]=U,d[10]=re,d[11]=Ee,d[12]=y,d[13]=$,d[14]=ge,d[15]=Ie,d}function Q(r,m){const d=m??new o(16),h=r[0*4+0],a=r[0*4+1],_=r[0*4+2],y=r[0*4+3],g=r[1*4+0],D=r[1*4+1],U=r[1*4+2],$=r[1*4+3],ce=r[2*4+0],ie=r[2*4+1],re=r[2*4+2],ge=r[2*4+3],Me=r[3*4+0],he=r[3*4+1],Ee=r[3*4+2],Ie=r[3*4+3],Re=re*Ie,We=Ee*ge,Xe=U*Ie,Ke=Ee*$,je=U*ge,Qe=re*$,it=_*Ie,He=Ee*y,st=_*ge,ot=re*y,rt=_*$,Je=U*y,$e=ce*he,et=Me*ie,Ye=g*he,ct=Me*D,tt=g*ie,Et=ce*D,xt=h*he,gt=Me*a,wt=h*ie,j=ce*a,J=h*D,ne=g*a,we=Re*D+Ke*ie+je*he-(We*D+Xe*ie+Qe*he),Ce=We*a+it*ie+ot*he-(Re*a+He*ie+st*he),de=Xe*a+He*D+rt*he-(Ke*a+it*D+Je*he),_e=Qe*a+st*D+Je*ie-(je*a+ot*D+rt*ie),fe=1/(h*we+g*Ce+ce*de+Me*_e);return d[0]=fe*we,d[1]=fe*Ce,d[2]=fe*de,d[3]=fe*_e,d[4]=fe*(We*g+Xe*ce+Qe*Me-(Re*g+Ke*ce+je*Me)),d[5]=fe*(Re*h+He*ce+st*Me-(We*h+it*ce+ot*Me)),d[6]=fe*(Ke*h+it*g+Je*Me-(Xe*h+He*g+rt*Me)),d[7]=fe*(je*h+ot*g+rt*ce-(Qe*h+st*g+Je*ce)),d[8]=fe*($e*$+ct*ge+tt*Ie-(et*$+Ye*ge+Et*Ie)),d[9]=fe*(et*y+xt*ge+j*Ie-($e*y+gt*ge+wt*Ie)),d[10]=fe*(Ye*y+gt*$+J*Ie-(ct*y+xt*$+ne*Ie)),d[11]=fe*(Et*y+wt*$+ne*ge-(tt*y+j*$+J*ge)),d[12]=fe*(Ye*re+Et*Ee+et*U-(tt*Ee+$e*U+ct*re)),d[13]=fe*(wt*Ee+$e*_+gt*re-(xt*re+j*Ee+et*_)),d[14]=fe*(xt*U+ne*Ee+ct*_-(J*Ee+Ye*_+gt*U)),d[15]=fe*(J*re+tt*_+j*U-(wt*U+ne*re+Et*_)),d}function te(r){const m=r[0],d=r[0*4+1],h=r[0*4+2],a=r[0*4+3],_=r[1*4+0],y=r[1*4+1],g=r[1*4+2],D=r[1*4+3],U=r[2*4+0],$=r[2*4+1],ce=r[2*4+2],ie=r[2*4+3],re=r[3*4+0],ge=r[3*4+1],Me=r[3*4+2],he=r[3*4+3],Ee=ce*he,Ie=Me*ie,Re=g*he,We=Me*D,Xe=g*ie,Ke=ce*D,je=h*he,Qe=Me*a,it=h*ie,He=ce*a,st=h*D,ot=g*a,rt=Ee*y+We*$+Xe*ge-(Ie*y+Re*$+Ke*ge),Je=Ie*d+je*$+He*ge-(Ee*d+Qe*$+it*ge),$e=Re*d+Qe*y+st*ge-(We*d+je*y+ot*ge),et=Ke*d+it*y+ot*$-(Xe*d+He*y+st*$);return m*rt+_*Je+U*$e+re*et}const W=Q;function Y(r,m,d){const h=d??new o(16),a=r[0],_=r[1],y=r[2],g=r[3],D=r[4+0],U=r[4+1],$=r[4+2],ce=r[4+3],ie=r[8+0],re=r[8+1],ge=r[8+2],Me=r[8+3],he=r[12+0],Ee=r[12+1],Ie=r[12+2],Re=r[12+3],We=m[0],Xe=m[1],Ke=m[2],je=m[3],Qe=m[4+0],it=m[4+1],He=m[4+2],st=m[4+3],ot=m[8+0],rt=m[8+1],Je=m[8+2],$e=m[8+3],et=m[12+0],Ye=m[12+1],ct=m[12+2],tt=m[12+3];return h[0]=a*We+D*Xe+ie*Ke+he*je,h[1]=_*We+U*Xe+re*Ke+Ee*je,h[2]=y*We+$*Xe+ge*Ke+Ie*je,h[3]=g*We+ce*Xe+Me*Ke+Re*je,h[4]=a*Qe+D*it+ie*He+he*st,h[5]=_*Qe+U*it+re*He+Ee*st,h[6]=y*Qe+$*it+ge*He+Ie*st,h[7]=g*Qe+ce*it+Me*He+Re*st,h[8]=a*ot+D*rt+ie*Je+he*$e,h[9]=_*ot+U*rt+re*Je+Ee*$e,h[10]=y*ot+$*rt+ge*Je+Ie*$e,h[11]=g*ot+ce*rt+Me*Je+Re*$e,h[12]=a*et+D*Ye+ie*ct+he*tt,h[13]=_*et+U*Ye+re*ct+Ee*tt,h[14]=y*et+$*Ye+ge*ct+Ie*tt,h[15]=g*et+ce*Ye+Me*ct+Re*tt,h}const H=Y;function le(r,m,d){const h=d??oe();return r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11]),h[12]=m[0],h[13]=m[1],h[14]=m[2],h[15]=1,h}function ke(r,m){const d=m??l.create();return d[0]=r[12],d[1]=r[13],d[2]=r[14],d}function pe(r,m,d){const h=d??l.create(),a=m*4;return h[0]=r[a+0],h[1]=r[a+1],h[2]=r[a+2],h}function ue(r,m,d,h){const a=h===r?h:N(r,h),_=d*4;return a[_+0]=m[0],a[_+1]=m[1],a[_+2]=m[2],a}function Pe(r,m){const d=m??l.create(),h=r[0],a=r[1],_=r[2],y=r[4],g=r[5],D=r[6],U=r[8],$=r[9],ce=r[10];return d[0]=Math.sqrt(h*h+a*a+_*_),d[1]=Math.sqrt(y*y+g*g+D*D),d[2]=Math.sqrt(U*U+$*$+ce*ce),d}function ae(r,m,d,h,a){const _=a??new o(16),y=Math.tan(Math.PI*.5-.5*r);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,Number.isFinite(h)){const g=1/(d-h);_[10]=h*g,_[14]=h*d*g}else _[10]=-1,_[14]=-d;return _}function xe(r,m,d,h=1/0,a){const _=a??new o(16),y=1/Math.tan(r*.5);if(_[0]=y/m,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=y,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[11]=-1,_[12]=0,_[13]=0,_[15]=0,h===1/0)_[10]=0,_[14]=d;else{const g=1/(h-d);_[10]=d*g,_[14]=h*d*g}return _}function ve(r,m,d,h,a,_,y){const g=y??new o(16);return g[0]=2/(m-r),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(h-d),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(a-_),g[11]=0,g[12]=(m+r)/(r-m),g[13]=(h+d)/(d-h),g[14]=a/(a-_),g[15]=1,g}function Le(r,m,d,h,a,_,y){const g=y??new o(16),D=m-r,U=h-d,$=a-_;return g[0]=2*a/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*a/U,g[6]=0,g[7]=0,g[8]=(r+m)/D,g[9]=(h+d)/U,g[10]=_/$,g[11]=-1,g[12]=0,g[13]=0,g[14]=a*_/$,g[15]=0,g}function Oe(r,m,d,h,a,_=1/0,y){const g=y??new o(16),D=m-r,U=h-d;if(g[0]=2*a/D,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*a/U,g[6]=0,g[7]=0,g[8]=(r+m)/D,g[9]=(h+d)/U,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,_===1/0)g[10]=0,g[14]=a;else{const $=1/(_-a);g[10]=a*$,g[14]=_*a*$}return g}const X=l.create(),ee=l.create(),O=l.create();function Z(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(m,r,O),O),l.normalize(l.cross(d,O,X),X),l.normalize(l.cross(O,X,ee),ee),a[0]=X[0],a[1]=X[1],a[2]=X[2],a[3]=0,a[4]=ee[0],a[5]=ee[1],a[6]=ee[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Ve(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(r,m,O),O),l.normalize(l.cross(d,O,X),X),l.normalize(l.cross(O,X,ee),ee),a[0]=X[0],a[1]=X[1],a[2]=X[2],a[3]=0,a[4]=ee[0],a[5]=ee[1],a[6]=ee[2],a[7]=0,a[8]=O[0],a[9]=O[1],a[10]=O[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function Be(r,m,d,h){const a=h??new o(16);return l.normalize(l.subtract(r,m,O),O),l.normalize(l.cross(d,O,X),X),l.normalize(l.cross(O,X,ee),ee),a[0]=X[0],a[1]=ee[0],a[2]=O[0],a[3]=0,a[4]=X[1],a[5]=ee[1],a[6]=O[1],a[7]=0,a[8]=X[2],a[9]=ee[2],a[10]=O[2],a[11]=0,a[12]=-(X[0]*r[0]+X[1]*r[1]+X[2]*r[2]),a[13]=-(ee[0]*r[0]+ee[1]*r[1]+ee[2]*r[2]),a[14]=-(O[0]*r[0]+O[1]*r[1]+O[2]*r[2]),a[15]=1,a}function be(r,m){const d=m??new o(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=r[0],d[13]=r[1],d[14]=r[2],d[15]=1,d}function ye(r,m,d){const h=d??new o(16),a=m[0],_=m[1],y=m[2],g=r[0],D=r[1],U=r[2],$=r[3],ce=r[1*4+0],ie=r[1*4+1],re=r[1*4+2],ge=r[1*4+3],Me=r[2*4+0],he=r[2*4+1],Ee=r[2*4+2],Ie=r[2*4+3],Re=r[3*4+0],We=r[3*4+1],Xe=r[3*4+2],Ke=r[3*4+3];return r!==h&&(h[0]=g,h[1]=D,h[2]=U,h[3]=$,h[4]=ce,h[5]=ie,h[6]=re,h[7]=ge,h[8]=Me,h[9]=he,h[10]=Ee,h[11]=Ie),h[12]=g*a+ce*_+Me*y+Re,h[13]=D*a+ie*_+he*y+We,h[14]=U*a+re*_+Ee*y+Xe,h[15]=$*a+ge*_+Ie*y+Ke,h}function Ge(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=h,d[6]=a,d[7]=0,d[8]=0,d[9]=-a,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function Se(r,m,d){const h=d??new o(16),a=r[4],_=r[5],y=r[6],g=r[7],D=r[8],U=r[9],$=r[10],ce=r[11],ie=Math.cos(m),re=Math.sin(m);return h[4]=ie*a+re*D,h[5]=ie*_+re*U,h[6]=ie*y+re*$,h[7]=ie*g+re*ce,h[8]=ie*D-re*a,h[9]=ie*U-re*_,h[10]=ie*$-re*y,h[11]=ie*ce-re*g,r!==h&&(h[0]=r[0],h[1]=r[1],h[2]=r[2],h[3]=r[3],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function Te(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=h,d[1]=0,d[2]=-a,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=a,d[9]=0,d[10]=h,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function me(r,m,d){const h=d??new o(16),a=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],D=r[2*4+0],U=r[2*4+1],$=r[2*4+2],ce=r[2*4+3],ie=Math.cos(m),re=Math.sin(m);return h[0]=ie*a-re*D,h[1]=ie*_-re*U,h[2]=ie*y-re*$,h[3]=ie*g-re*ce,h[8]=ie*D+re*a,h[9]=ie*U+re*_,h[10]=ie*$+re*y,h[11]=ie*ce+re*g,r!==h&&(h[4]=r[4],h[5]=r[5],h[6]=r[6],h[7]=r[7],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function B(r,m){const d=m??new o(16),h=Math.cos(r),a=Math.sin(r);return d[0]=h,d[1]=a,d[2]=0,d[3]=0,d[4]=-a,d[5]=h,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function G(r,m,d){const h=d??new o(16),a=r[0*4+0],_=r[0*4+1],y=r[0*4+2],g=r[0*4+3],D=r[1*4+0],U=r[1*4+1],$=r[1*4+2],ce=r[1*4+3],ie=Math.cos(m),re=Math.sin(m);return h[0]=ie*a+re*D,h[1]=ie*_+re*U,h[2]=ie*y+re*$,h[3]=ie*g+re*ce,h[4]=ie*D-re*a,h[5]=ie*U-re*_,h[6]=ie*$-re*y,h[7]=ie*ce-re*g,r!==h&&(h[8]=r[8],h[9]=r[9],h[10]=r[10],h[11]=r[11],h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function b(r,m,d){const h=d??new o(16);let a=r[0],_=r[1],y=r[2];const g=Math.sqrt(a*a+_*_+y*y);a/=g,_/=g,y/=g;const D=a*a,U=_*_,$=y*y,ce=Math.cos(m),ie=Math.sin(m),re=1-ce;return h[0]=D+(1-D)*ce,h[1]=a*_*re+y*ie,h[2]=a*y*re-_*ie,h[3]=0,h[4]=a*_*re-y*ie,h[5]=U+(1-U)*ce,h[6]=_*y*re+a*ie,h[7]=0,h[8]=a*y*re+_*ie,h[9]=_*y*re-a*ie,h[10]=$+(1-$)*ce,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const i=b;function p(r,m,d,h){const a=h??new o(16);let _=m[0],y=m[1],g=m[2];const D=Math.sqrt(_*_+y*y+g*g);_/=D,y/=D,g/=D;const U=_*_,$=y*y,ce=g*g,ie=Math.cos(d),re=Math.sin(d),ge=1-ie,Me=U+(1-U)*ie,he=_*y*ge+g*re,Ee=_*g*ge-y*re,Ie=_*y*ge-g*re,Re=$+(1-$)*ie,We=y*g*ge+_*re,Xe=_*g*ge+y*re,Ke=y*g*ge-_*re,je=ce+(1-ce)*ie,Qe=r[0],it=r[1],He=r[2],st=r[3],ot=r[4],rt=r[5],Je=r[6],$e=r[7],et=r[8],Ye=r[9],ct=r[10],tt=r[11];return a[0]=Me*Qe+he*ot+Ee*et,a[1]=Me*it+he*rt+Ee*Ye,a[2]=Me*He+he*Je+Ee*ct,a[3]=Me*st+he*$e+Ee*tt,a[4]=Ie*Qe+Re*ot+We*et,a[5]=Ie*it+Re*rt+We*Ye,a[6]=Ie*He+Re*Je+We*ct,a[7]=Ie*st+Re*$e+We*tt,a[8]=Xe*Qe+Ke*ot+je*et,a[9]=Xe*it+Ke*rt+je*Ye,a[10]=Xe*He+Ke*Je+je*ct,a[11]=Xe*st+Ke*$e+je*tt,r!==a&&(a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15]),a}const u=p;function v(r,m){const d=m??new o(16);return d[0]=r[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function x(r,m,d){const h=d??new o(16),a=m[0],_=m[1],y=m[2];return h[0]=a*r[0*4+0],h[1]=a*r[0*4+1],h[2]=a*r[0*4+2],h[3]=a*r[0*4+3],h[4]=_*r[1*4+0],h[5]=_*r[1*4+1],h[6]=_*r[1*4+2],h[7]=_*r[1*4+3],h[8]=y*r[2*4+0],h[9]=y*r[2*4+1],h[10]=y*r[2*4+2],h[11]=y*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}function k(r,m){const d=m??new o(16);return d[0]=r,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=r,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function S(r,m,d){const h=d??new o(16);return h[0]=m*r[0*4+0],h[1]=m*r[0*4+1],h[2]=m*r[0*4+2],h[3]=m*r[0*4+3],h[4]=m*r[1*4+0],h[5]=m*r[1*4+1],h[6]=m*r[1*4+2],h[7]=m*r[1*4+3],h[8]=m*r[2*4+0],h[9]=m*r[2*4+1],h[10]=m*r[2*4+2],h[11]=m*r[2*4+3],r!==h&&(h[12]=r[12],h[13]=r[13],h[14]=r[14],h[15]=r[15]),h}return{add:I,aim:Z,axisRotate:p,axisRotation:b,cameraAim:Ve,clone:V,copy:N,create:f,determinant:te,equals:K,equalsApproximately:z,fromMat3:w,fromQuat:C,frustum:Le,frustumReverseZ:Oe,getAxis:pe,getScaling:Pe,getTranslation:ke,identity:oe,inverse:Q,invert:W,lookAt:Be,mul:H,mulScalar:L,multiply:Y,multiplyScalar:A,negate:M,ortho:ve,perspective:ae,perspectiveReverseZ:xe,rotate:u,rotateX:Se,rotateY:me,rotateZ:G,rotation:i,rotationX:Ge,rotationY:Te,rotationZ:B,scale:x,scaling:v,set:E,setAxis:ue,setTranslation:le,translate:ye,translation:be,transpose:q,uniformScale:S,uniformScaling:k}}const qr=new Map;function Bl(o){let l=qr.get(o);return l||(l=Ml(o),qr.set(o,l)),l}function Tl(o){const l=Zn(o);function f(B,G,b,i){const p=new o(4);return B!==void 0&&(p[0]=B,G!==void 0&&(p[1]=G,b!==void 0&&(p[2]=b,i!==void 0&&(p[3]=i)))),p}const E=f;function w(B,G,b,i,p){const u=p??new o(4);return u[0]=B,u[1]=G,u[2]=b,u[3]=i,u}function C(B,G,b){const i=b??new o(4),p=G*.5,u=Math.sin(p);return i[0]=u*B[0],i[1]=u*B[1],i[2]=u*B[2],i[3]=Math.cos(p),i}function M(B,G){const b=G??l.create(3),i=Math.acos(B[3])*2,p=Math.sin(i*.5);return p>ze?(b[0]=B[0]/p,b[1]=B[1]/p,b[2]=B[2]/p):(b[0]=1,b[1]=0,b[2]=0),{angle:i,axis:b}}function I(B,G){const b=ae(B,G);return Math.acos(2*b*b-1)}function A(B,G,b){const i=b??new o(4),p=B[0],u=B[1],v=B[2],x=B[3],k=G[0],S=G[1],r=G[2],m=G[3];return i[0]=p*m+x*k+u*r-v*S,i[1]=u*m+x*S+v*k-p*r,i[2]=v*m+x*r+p*S-u*k,i[3]=x*m-p*k-u*S-v*r,i}const L=A;function N(B,G,b){const i=b??new o(4),p=G*.5,u=B[0],v=B[1],x=B[2],k=B[3],S=Math.sin(p),r=Math.cos(p);return i[0]=u*r+k*S,i[1]=v*r+x*S,i[2]=x*r-v*S,i[3]=k*r-u*S,i}function V(B,G,b){const i=b??new o(4),p=G*.5,u=B[0],v=B[1],x=B[2],k=B[3],S=Math.sin(p),r=Math.cos(p);return i[0]=u*r-x*S,i[1]=v*r+k*S,i[2]=x*r+u*S,i[3]=k*r-v*S,i}function z(B,G,b){const i=b??new o(4),p=G*.5,u=B[0],v=B[1],x=B[2],k=B[3],S=Math.sin(p),r=Math.cos(p);return i[0]=u*r+v*S,i[1]=v*r-u*S,i[2]=x*r+k*S,i[3]=k*r-x*S,i}function K(B,G,b,i){const p=i??new o(4),u=B[0],v=B[1],x=B[2],k=B[3];let S=G[0],r=G[1],m=G[2],d=G[3],h=u*S+v*r+x*m+k*d;h<0&&(h=-h,S=-S,r=-r,m=-m,d=-d);let a,_;if(1-h>ze){const y=Math.acos(h),g=Math.sin(y);a=Math.sin((1-b)*y)/g,_=Math.sin(b*y)/g}else a=1-b,_=b;return p[0]=a*u+_*S,p[1]=a*v+_*r,p[2]=a*x+_*m,p[3]=a*k+_*d,p}function oe(B,G){const b=G??new o(4),i=B[0],p=B[1],u=B[2],v=B[3],x=i*i+p*p+u*u+v*v,k=x?1/x:0;return b[0]=-i*k,b[1]=-p*k,b[2]=-u*k,b[3]=v*k,b}function q(B,G){const b=G??new o(4);return b[0]=-B[0],b[1]=-B[1],b[2]=-B[2],b[3]=B[3],b}function Q(B,G){const b=G??new o(4),i=B[0]+B[5]+B[10];if(i>0){const p=Math.sqrt(i+1);b[3]=.5*p;const u=.5/p;b[0]=(B[6]-B[9])*u,b[1]=(B[8]-B[2])*u,b[2]=(B[1]-B[4])*u}else{let p=0;B[5]>B[0]&&(p=1),B[10]>B[p*4+p]&&(p=2);const u=(p+1)%3,v=(p+2)%3,x=Math.sqrt(B[p*4+p]-B[u*4+u]-B[v*4+v]+1);b[p]=.5*x;const k=.5/x;b[3]=(B[u*4+v]-B[v*4+u])*k,b[u]=(B[u*4+p]+B[p*4+u])*k,b[v]=(B[v*4+p]+B[p*4+v])*k}return b}function te(B,G,b,i,p){const u=p??new o(4),v=B*.5,x=G*.5,k=b*.5,S=Math.sin(v),r=Math.cos(v),m=Math.sin(x),d=Math.cos(x),h=Math.sin(k),a=Math.cos(k);switch(i){case"xyz":u[0]=S*d*a+r*m*h,u[1]=r*m*a-S*d*h,u[2]=r*d*h+S*m*a,u[3]=r*d*a-S*m*h;break;case"xzy":u[0]=S*d*a-r*m*h,u[1]=r*m*a-S*d*h,u[2]=r*d*h+S*m*a,u[3]=r*d*a+S*m*h;break;case"yxz":u[0]=S*d*a+r*m*h,u[1]=r*m*a-S*d*h,u[2]=r*d*h-S*m*a,u[3]=r*d*a+S*m*h;break;case"yzx":u[0]=S*d*a+r*m*h,u[1]=r*m*a+S*d*h,u[2]=r*d*h-S*m*a,u[3]=r*d*a-S*m*h;break;case"zxy":u[0]=S*d*a-r*m*h,u[1]=r*m*a+S*d*h,u[2]=r*d*h+S*m*a,u[3]=r*d*a-S*m*h;break;case"zyx":u[0]=S*d*a-r*m*h,u[1]=r*m*a+S*d*h,u[2]=r*d*h-S*m*a,u[3]=r*d*a+S*m*h;break;default:throw new Error(`Unknown rotation order: ${i}`)}return u}function W(B,G){const b=G??new o(4);return b[0]=B[0],b[1]=B[1],b[2]=B[2],b[3]=B[3],b}const Y=W;function H(B,G,b){const i=b??new o(4);return i[0]=B[0]+G[0],i[1]=B[1]+G[1],i[2]=B[2]+G[2],i[3]=B[3]+G[3],i}function le(B,G,b){const i=b??new o(4);return i[0]=B[0]-G[0],i[1]=B[1]-G[1],i[2]=B[2]-G[2],i[3]=B[3]-G[3],i}const ke=le;function pe(B,G,b){const i=b??new o(4);return i[0]=B[0]*G,i[1]=B[1]*G,i[2]=B[2]*G,i[3]=B[3]*G,i}const ue=pe;function Pe(B,G,b){const i=b??new o(4);return i[0]=B[0]/G,i[1]=B[1]/G,i[2]=B[2]/G,i[3]=B[3]/G,i}function ae(B,G){return B[0]*G[0]+B[1]*G[1]+B[2]*G[2]+B[3]*G[3]}function xe(B,G,b,i){const p=i??new o(4);return p[0]=B[0]+b*(G[0]-B[0]),p[1]=B[1]+b*(G[1]-B[1]),p[2]=B[2]+b*(G[2]-B[2]),p[3]=B[3]+b*(G[3]-B[3]),p}function ve(B){const G=B[0],b=B[1],i=B[2],p=B[3];return Math.sqrt(G*G+b*b+i*i+p*p)}const Le=ve;function Oe(B){const G=B[0],b=B[1],i=B[2],p=B[3];return G*G+b*b+i*i+p*p}const X=Oe;function ee(B,G){const b=G??new o(4),i=B[0],p=B[1],u=B[2],v=B[3],x=Math.sqrt(i*i+p*p+u*u+v*v);return x>1e-5?(b[0]=i/x,b[1]=p/x,b[2]=u/x,b[3]=v/x):(b[0]=0,b[1]=0,b[2]=0,b[3]=1),b}function O(B,G){return Math.abs(B[0]-G[0])<ze&&Math.abs(B[1]-G[1])<ze&&Math.abs(B[2]-G[2])<ze&&Math.abs(B[3]-G[3])<ze}function Z(B,G){return B[0]===G[0]&&B[1]===G[1]&&B[2]===G[2]&&B[3]===G[3]}function Ve(B){const G=B??new o(4);return G[0]=0,G[1]=0,G[2]=0,G[3]=1,G}const Be=l.create(),be=l.create(),ye=l.create();function Ge(B,G,b){const i=b??new o(4),p=l.dot(B,G);return p<-.999999?(l.cross(be,B,Be),l.len(Be)<1e-6&&l.cross(ye,B,Be),l.normalize(Be,Be),C(Be,Math.PI,i),i):p>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(l.cross(B,G,Be),i[0]=Be[0],i[1]=Be[1],i[2]=Be[2],i[3]=1+p,ee(i,i))}const Se=new o(4),Te=new o(4);function me(B,G,b,i,p,u){const v=u??new o(4);return K(B,i,p,Se),K(G,b,p,Te),K(Se,Te,2*p*(1-p),v),v}return{create:f,fromValues:E,set:w,fromAxisAngle:C,toAxisAngle:M,angle:I,multiply:A,mul:L,rotateX:N,rotateY:V,rotateZ:z,slerp:K,inverse:oe,conjugate:q,fromMat:Q,fromEuler:te,copy:W,clone:Y,add:H,subtract:le,sub:ke,mulScalar:pe,scale:ue,divScalar:Pe,dot:ae,lerp:xe,length:ve,len:Le,lengthSq:Oe,lenSq:X,normalize:ee,equalsApproximately:O,equals:Z,identity:Ve,rotationTo:Ge,sqlerp:me}}const Wr=new Map;function Al(o){let l=Wr.get(o);return l||(l=Tl(o),Wr.set(o,l)),l}function Dl(o){function l(b,i,p,u){const v=new o(4);return b!==void 0&&(v[0]=b,i!==void 0&&(v[1]=i,p!==void 0&&(v[2]=p,u!==void 0&&(v[3]=u)))),v}const f=l;function E(b,i,p,u,v){const x=v??new o(4);return x[0]=b,x[1]=i,x[2]=p,x[3]=u,x}function w(b,i){const p=i??new o(4);return p[0]=Math.ceil(b[0]),p[1]=Math.ceil(b[1]),p[2]=Math.ceil(b[2]),p[3]=Math.ceil(b[3]),p}function C(b,i){const p=i??new o(4);return p[0]=Math.floor(b[0]),p[1]=Math.floor(b[1]),p[2]=Math.floor(b[2]),p[3]=Math.floor(b[3]),p}function M(b,i){const p=i??new o(4);return p[0]=Math.round(b[0]),p[1]=Math.round(b[1]),p[2]=Math.round(b[2]),p[3]=Math.round(b[3]),p}function I(b,i=0,p=1,u){const v=u??new o(4);return v[0]=Math.min(p,Math.max(i,b[0])),v[1]=Math.min(p,Math.max(i,b[1])),v[2]=Math.min(p,Math.max(i,b[2])),v[3]=Math.min(p,Math.max(i,b[3])),v}function A(b,i,p){const u=p??new o(4);return u[0]=b[0]+i[0],u[1]=b[1]+i[1],u[2]=b[2]+i[2],u[3]=b[3]+i[3],u}function L(b,i,p,u){const v=u??new o(4);return v[0]=b[0]+i[0]*p,v[1]=b[1]+i[1]*p,v[2]=b[2]+i[2]*p,v[3]=b[3]+i[3]*p,v}function N(b,i,p){const u=p??new o(4);return u[0]=b[0]-i[0],u[1]=b[1]-i[1],u[2]=b[2]-i[2],u[3]=b[3]-i[3],u}const V=N;function z(b,i){return Math.abs(b[0]-i[0])<ze&&Math.abs(b[1]-i[1])<ze&&Math.abs(b[2]-i[2])<ze&&Math.abs(b[3]-i[3])<ze}function K(b,i){return b[0]===i[0]&&b[1]===i[1]&&b[2]===i[2]&&b[3]===i[3]}function oe(b,i,p,u){const v=u??new o(4);return v[0]=b[0]+p*(i[0]-b[0]),v[1]=b[1]+p*(i[1]-b[1]),v[2]=b[2]+p*(i[2]-b[2]),v[3]=b[3]+p*(i[3]-b[3]),v}function q(b,i,p,u){const v=u??new o(4);return v[0]=b[0]+p[0]*(i[0]-b[0]),v[1]=b[1]+p[1]*(i[1]-b[1]),v[2]=b[2]+p[2]*(i[2]-b[2]),v[3]=b[3]+p[3]*(i[3]-b[3]),v}function Q(b,i,p){const u=p??new o(4);return u[0]=Math.max(b[0],i[0]),u[1]=Math.max(b[1],i[1]),u[2]=Math.max(b[2],i[2]),u[3]=Math.max(b[3],i[3]),u}function te(b,i,p){const u=p??new o(4);return u[0]=Math.min(b[0],i[0]),u[1]=Math.min(b[1],i[1]),u[2]=Math.min(b[2],i[2]),u[3]=Math.min(b[3],i[3]),u}function W(b,i,p){const u=p??new o(4);return u[0]=b[0]*i,u[1]=b[1]*i,u[2]=b[2]*i,u[3]=b[3]*i,u}const Y=W;function H(b,i,p){const u=p??new o(4);return u[0]=b[0]/i,u[1]=b[1]/i,u[2]=b[2]/i,u[3]=b[3]/i,u}function le(b,i){const p=i??new o(4);return p[0]=1/b[0],p[1]=1/b[1],p[2]=1/b[2],p[3]=1/b[3],p}const ke=le;function pe(b,i){return b[0]*i[0]+b[1]*i[1]+b[2]*i[2]+b[3]*i[3]}function ue(b){const i=b[0],p=b[1],u=b[2],v=b[3];return Math.sqrt(i*i+p*p+u*u+v*v)}const Pe=ue;function ae(b){const i=b[0],p=b[1],u=b[2],v=b[3];return i*i+p*p+u*u+v*v}const xe=ae;function ve(b,i){const p=b[0]-i[0],u=b[1]-i[1],v=b[2]-i[2],x=b[3]-i[3];return Math.sqrt(p*p+u*u+v*v+x*x)}const Le=ve;function Oe(b,i){const p=b[0]-i[0],u=b[1]-i[1],v=b[2]-i[2],x=b[3]-i[3];return p*p+u*u+v*v+x*x}const X=Oe;function ee(b,i){const p=i??new o(4),u=b[0],v=b[1],x=b[2],k=b[3],S=Math.sqrt(u*u+v*v+x*x+k*k);return S>1e-5?(p[0]=u/S,p[1]=v/S,p[2]=x/S,p[3]=k/S):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function O(b,i){const p=i??new o(4);return p[0]=-b[0],p[1]=-b[1],p[2]=-b[2],p[3]=-b[3],p}function Z(b,i){const p=i??new o(4);return p[0]=b[0],p[1]=b[1],p[2]=b[2],p[3]=b[3],p}const Ve=Z;function Be(b,i,p){const u=p??new o(4);return u[0]=b[0]*i[0],u[1]=b[1]*i[1],u[2]=b[2]*i[2],u[3]=b[3]*i[3],u}const be=Be;function ye(b,i,p){const u=p??new o(4);return u[0]=b[0]/i[0],u[1]=b[1]/i[1],u[2]=b[2]/i[2],u[3]=b[3]/i[3],u}const Ge=ye;function Se(b){const i=b??new o(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i}function Te(b,i,p){const u=p??new o(4),v=b[0],x=b[1],k=b[2],S=b[3];return u[0]=i[0]*v+i[4]*x+i[8]*k+i[12]*S,u[1]=i[1]*v+i[5]*x+i[9]*k+i[13]*S,u[2]=i[2]*v+i[6]*x+i[10]*k+i[14]*S,u[3]=i[3]*v+i[7]*x+i[11]*k+i[15]*S,u}function me(b,i,p){const u=p??new o(4);return ee(b,u),W(u,i,u)}function B(b,i,p){const u=p??new o(4);return ue(b)>i?me(b,i,u):Z(b,u)}function G(b,i,p){const u=p??new o(4);return oe(b,i,.5,u)}return{create:l,fromValues:f,set:E,ceil:w,floor:C,round:M,clamp:I,add:A,addScaled:L,subtract:N,sub:V,equalsApproximately:z,equals:K,lerp:oe,lerpV:q,max:Q,min:te,mulScalar:W,scale:Y,divScalar:H,inverse:le,invert:ke,dot:pe,length:ue,len:Pe,lengthSq:ae,lenSq:xe,distance:ve,dist:Le,distanceSq:Oe,distSq:X,normalize:ee,negate:O,copy:Z,clone:Ve,multiply:Be,mul:be,divide:ye,div:Ge,zero:Se,transformMat4:Te,setLength:me,truncate:B,midpoint:G}}const jr=new Map;function Il(o){let l=jr.get(o);return l||(l=Dl(o),jr.set(o,l)),l}function Is(o,l,f,E,w,C){return{mat3:kl(o),mat4:Bl(l),quat:Al(f),vec2:oi(E),vec3:Zn(w),vec4:Il(C)}}const{mat3:Ct,mat4:ut,quat:lt,vec2:Kr,vec3:R,vec4:Oc}=Is(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Is(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Is(Pl,Array,Array,Array,Array,Array);const Hr=document.querySelector("#log");let vt=null,sn=null;function ai(){if(vt)return vt;vt=document.createElement("div"),vt.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",vt.appendChild(o),sn=document.createElement("div"),sn.className="ply-spinner-label",vt.appendChild(sn),vt.style.display="none",document.body.appendChild(vt),vt}function Ls(o){ai(),sn&&o&&(sn.textContent=o),vt&&(vt.style.opacity="1",vt.style.display="flex")}function nn(o){ai(),sn&&(sn.textContent=o)}function Tn(){if(!vt)return;const o=vt;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function li(o,l){if(!Hr)return;const f=document.createElement("p");f.innerText=o,l&&Object.assign(f.style,l),Hr.appendChild(f)}async function bt(o){console.log(o),li(o)}async function Ll(o){console.error(o),li(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ci;function ui(){ci=performance.now()}function Yr(o){const l=performance.now()-ci;bt(`⏱️ ${o} Time: ${l.toFixed(0)} ms`)}function Rl(o,l){if(!o)throw new Error(l&&(typeof l=="string"?l:l()))}function Dn(o){return o+3&-4}const zl=2,Gl=3,Ul=5,Vl=6,An=7,Wn=8,jn=9,Kn=10;function Ol(o){const l=new TextDecoder("ascii"),f=l.decode(new Uint8Array(o,0,4));if(f!=="NAT2")throw new Error(`NAT2 bad magic: '${f}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const E=new DataView(o),w=4,C=E.getUint32(w+0,!0),M=E.getUint32(w+4,!0),I=E.getUint32(w+8,!0),A=E.getUint32(w+12,!0),L=E.getUint32(w+16,!0),N=E.getFloat32(w+20,!0),V=E.getUint32(w+24,!0),z=E.getUint32(w+28,!0),K=E.getFloat32(w+32,!0),oe=E.getFloat32(w+36,!0),q=E.getFloat32(w+40,!0),Q=E.getUint32(w+44,!0),te=E.getFloat32(w+48,!0),W=E.getFloat32(w+52,!0),Y=E.getUint32(w+56,!0),H=E.getUint32(w+60,!0),le=z===jn||z===Kn,ke=le?H:0,pe=le?0:H,ue=pe>0?pe:1;if(z===Ul||z===Vl)throw new Error(`NAT2: paired-RVQ format=${z} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Pe=z===jn||z===Kn;if(z!==zl&&z!==Gl&&z!==An&&z!==Wn&&!Pe)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${z}`);if(C%4!==0||Q%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${C} layer_h=${Q}`);let ae=w+64;const xe=(Y+1)*4,ve=new Uint32Array(o.slice(ae,ae+xe));ae+=xe;let Le;if(ue>1){const be=(ue+1)*4;if(ae+be>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${be} from ${ae})`);Le=new Uint32Array(o.slice(ae,ae+be)),ae+=be}else Le=new Uint32Array([0,C]);let Oe=0;for(let be=0;be<ue;be++){const ye=Le[be+1]-Le[be];ye>Oe&&(Oe=ye)}if(Pe){const be=ke&1?7:6,ye=L*be*4;if(ae+ye>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ye} more bytes from offset ${ae}, have ${o.byteLength-ae}`);const Ge=new Float32Array(o.slice(ae,ae+ye));ae+=ye;const Se=Math.max(1,ke>>8&255),Te=[];let me=0;for(let p=0,u=C,v=Q;p<Se;p++,u>>=1,v>>=1){const x=Math.max(1,u>>2)*Math.max(1,v>>2)*16;Te.push(x),me+=x}const B=o.byteLength-ae;if(B<me)throw new Error(`NAT2 probe atlas truncated: need ${me} bytes for ${C}x${Q} x${Se} mips, have ${B}`);const G=[];let b=ae;for(const p of Te)G.push(new Uint8Array(o.slice(b,b+p))),b+=p;const i=G[0];return{width:C,height:M,channels:I,kernel_type:A,num_rects:L,uv_extent:N,sb_number:V,format:z,sh_bias:K,res_bias:oe,compact_mult:q,layer_h:Q,atlas_scale:te,atlas_offset:W,n_layers:Y,n_cols:ue,layer_cuts:ve,column_cuts:Le,slice_width:Oe,rects_expanded:Ge,atlas_bytes:i,mip_bytes:G,probe_mode:ke&1?2:1}}const X=L*4*4;if(ae+X>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${X} more bytes from offset ${ae}, have ${o.byteLength-ae}`);const ee=new Float32Array(o.slice(ae,ae+X));ae+=X;const O=new Float32Array(L*5);for(let be=0;be<L;be++){const ye=ee[be*4+0],Ge=ee[be*4+1],Se=ee[be*4+2],Te=ee[be*4+3];let me=0;for(let p=1;p<=Y&&ve[p]<=Ge;p++)me=p;let B=0;for(let p=1;p<=ue&&Le[p]<=ye;p++)B=p;const G=Ge-ve[me],b=ye-Le[B],i=B*Y+me;O[be*5+0]=b,O[be*5+1]=G,O[be*5+2]=Se,O[be*5+3]=Te,O[be*5+4]=i}let Z;const Be=C/4*16;if(z===An||z===Wn){if(ae+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const be=z===An?"BCCB":"ACCB",ye=l.decode(new Uint8Array(o,ae,4));if(ye!==be)throw new Error(`NAT2 typeD bad sub-magic: expected '${be}' got '${ye}'`);const Ge=E.getUint32(ae+4,!0),Se=E.getUint32(ae+8,!0),Te=E.getUint32(ae+12,!0),me=E.getUint32(ae+16,!0),B=E.getUint32(ae+20,!0);if(Ge!==1)throw new Error(`NAT2 BCCB unsupported version ${Ge}`);if(Te!==M/4||me!==C/4||B!==Te*me)throw new Error(`NAT2 BCCB block grid mismatch: header ${C}×${M}, sub-header ${me}×${Te} (${B} blocks)`);ae+=24;const G=Se*16;if(ae+G>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${G}, have ${o.byteLength-ae})`);const b=new Uint8Array(o,ae,G);ae+=G;const i=B*2;if(ae+i>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${i}, have ${o.byteLength-ae})`);const p=new Uint16Array(o.slice(ae,ae+i));ae+=i;const u=new Uint8Array(B*16);for(let v=0;v<B;v++){const x=p[v]*16;u.set(b.subarray(x,x+16),v*16)}Z=u}else{let be=0;for(let ye=0;ye<Y;ye++){const Ge=ve[ye+1]-ve[ye];if(Ge%4!==0)throw new Error(`NAT2 BC7 layer ${ye} rows ${Ge} not 4-aligned`);be+=Ge/4*Be}if(ae+be>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${be} more bytes from offset ${ae}, have ${o.byteLength-ae}`);Z=new Uint8Array(o.slice(ae,ae+be))}return{width:C,height:M,channels:I,kernel_type:A,num_rects:L,uv_extent:N,sb_number:V,format:z,sh_bias:K,res_bias:oe,compact_mult:q,layer_h:Q,atlas_scale:te,atlas_offset:W,n_layers:Y,n_cols:ue,layer_cuts:ve,column_cuts:Le,slice_width:Oe,rects_expanded:O,atlas_bytes:Z}}const Fl=32;function Nl(o,l,f){if(l.format===5||l.format===6)throw new Error(`paired-RVQ format=${l.format} is retired; re-bake with typeD (--bc7-codebook)`);let E,w,C,M;if(l.format===2||l.format===An||l.format===jn){if(!o.features.has("texture-compression-bc"))return bt(`⚠️  bundle is BC7 (format=${l.format}) but texture-compression-bc not supported — atlas disabled`),null;M=l.format===jn?"BC7 atlas (proberes: shared probe texture)":l.format===An?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:E,view:w,sampler:C}=Zr(o,l,"bc7-rgba-unorm",M)}else if(l.format===3||l.format===Wn||l.format===Kn){if(!o.features.has("texture-compression-astc"))return bt(`⚠️  bundle is ASTC 4x4 (format=${l.format}) but texture-compression-astc not supported — atlas disabled`),null;M=l.format===Kn?"ASTC 4x4 atlas (proberes: shared probe texture)":l.format===Wn?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:E,view:w,sampler:C}=Zr(o,l,"astc-4x4-unorm",M)}else return bt(`⚠️  unsupported atlas format ${l.format} — atlas disabled`),null;const{rects_expanded:I}=l,A=o.createBuffer({label:"atlas rects (5-stride)",size:Dn(I.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(A,0,I);const L=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return Cs(o,L,l,f),{texture:E,view:w,sampler:C,rectsBuffer:A,texParamsBuffer:L,meta:l}}function Zr(o,l,f,E){const{width:w,layer_h:C,n_layers:M,n_cols:I,layer_cuts:A,column_cuts:L,slice_width:N,atlas_bytes:V}=l,K=w/4*16,oe=o.limits.maxTextureDimension2D;if(C>oe||N>oe)throw new Error(`⚠️  atlas slice dims ${N}x${C} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const q=I*M;if(q>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${I} cols × ${M} layers = ${q} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const Q=l.mip_bytes??[V],te=Q.length,W=o.createTexture({label:E,size:{width:N,height:C,depthOrArrayLayers:q},mipLevelCount:te,sampleCount:1,dimension:"2d",format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let le=0;le<I;le++){const ke=L[le]/4,pe=(L[le+1]-L[le])/4;for(let ue=0;ue<M;ue++){const Pe=A[ue]/4,ae=(A[ue+1]-A[ue])/4,xe=le*M+ue,ve=Pe*K+ke*16;o.queue.writeTexture({texture:W,mipLevel:0,origin:{x:0,y:0,z:xe},aspect:"all"},V,{offset:ve,bytesPerRow:K,rowsPerImage:ae},{width:pe*4,height:ae*4,depthOrArrayLayers:1})}}for(let le=1;le<te;le++){const ke=Math.max(1,N>>le),pe=Math.max(1,C>>le);o.queue.writeTexture({texture:W,mipLevel:le,origin:{x:0,y:0,z:0},aspect:"all"},Q[le],{offset:0,bytesPerRow:Math.max(1,ke>>2)*16,rowsPerImage:Math.max(1,pe>>2)},{width:ke,height:pe,depthOrArrayLayers:1})}te>1&&console.log(`[atlas] ${te} mip levels uploaded (trilinear minification)`);const Y=W.createView({label:`${E} view`,dimension:"2d-array"}),H=o.createSampler({label:`${E} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1?"linear":"nearest"});return{texture:W,view:Y,sampler:H}}function Cs(o,l,f,E,w=1){var L;const C=new ArrayBuffer(32),M=new Uint32Array(C),I=new Float32Array(C);M[0]=E?1:0,I[1]=f.atlas_scale,I[2]=f.atlas_offset,I[3]=f.res_bias,M[4]=f.probe_mode?f.probe_mode|0:0,M[5]=f.width|0;const A=(((L=f.mip_bytes)==null?void 0:L.length)??1)>1;M[6]=A&&w!==0?1:0,o.queue.writeBuffer(l,0,C)}async function Es(o,l){bt(`loading ply file from File... : ${o.name}`),Ls("downloading PLY...");const f=await o.arrayBuffer();try{return await di(f,l)}finally{Tn()}}async function $l(o,l){bt(`loading ply file from URL... : ${o}`),Ls("downloading PLY...");try{ui();const f=new URL(o,self.location.href).href;return await di({url:f},l)}finally{Tn()}}async function di(o,l){return new Promise((f,E)=>{const w=new Worker(new URL(""+new URL("ply-worker-621cb083.js",import.meta.url).href,self.location),{type:"module"});w.onmessage=C=>{var I,A,L,N,V,z,K,oe,q,Q,te,W;const M=C.data;if((M==null?void 0:M.type)==="error"){Ll(`PLY worker error: ${M.message??"unknown error"}`),w.terminate(),E(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const Y=M.totalBytes,H=M.loadedBytes/(1024*1024),le=Y?Y/(1024*1024):void 0,ke=(M.speedBps??0)/(1024*1024),pe=Y?Math.min(99,Math.floor(M.loadedBytes/Y*100)):void 0,ue=le?`total ${le.toFixed(1)} MB`:"total -- MB",Pe=le&&pe!==void 0?`${H.toFixed(1)} MB downloaded (${pe}%)`:`${H.toFixed(1)} MB downloaded`,ae=`${ke.toFixed(2)} MB/s`;nn(`downloading PLY ...
${ue}, ${Pe}
${ae}`);return}else if((M==null?void 0:M.type)==="fetched"){bt(`💾 Fetched (${M.byteLength} bytes)`),Yr("Download"),nn("parsing PLY..."),ui();return}else if((M==null?void 0:M.type)==="parse_progress"){const Y=M.total??0,H=M.read??0,le=Y>0?Math.floor(H/Y*100):0;nn(`parsing PLY ...
${H}/${Y} surfels (${le}%)`);return}else if((M==null?void 0:M.type)==="done"){const Y=M.num_points,H=M.K,le=M.feature_mode??0,ke=M.sh_bias,pe=M.kernel_type,ue=M.surfelBuffer,Pe=M.svParamsBuffer;bt(`🪐 Total surfels: ${Y}, mode=${le===1?"SB":"SV"}, K=${H}, sh_bias=${ke}, kernel_type=${pe}`);const xe=l.createBuffer({label:"surfel input buffer",size:Dn(Y*Fl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});l.queue.writeBuffer(xe,0,ue);const ve=Pe.byteLength>0?Pe.byteLength:16,Le=l.createBuffer({label:le===1?"color_params buffer (SB)":"color_params buffer (SV)",size:Dn(ve),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});Pe.byteLength>0&&l.queue.writeBuffer(Le,0,Pe),w.terminate(),Yr("Parse"),f({num_points:Y,K:H,feature_mode:le,sh_bias:ke,kernel_type:pe,surfel_buffer:xe,surfel_data:new Float32Array(ue),sv_params_buffer:Le,bbox:M.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:M.centroid??[((((A=(I=M.bbox)==null?void 0:I.min)==null?void 0:A[0])??-1)+(((N=(L=M.bbox)==null?void 0:L.max)==null?void 0:N[0])??1))/2,((((z=(V=M.bbox)==null?void 0:V.min)==null?void 0:z[1])??-1)+(((oe=(K=M.bbox)==null?void 0:K.max)==null?void 0:oe[1])??1))/2,((((Q=(q=M.bbox)==null?void 0:q.min)==null?void 0:Q[2])??-1)+(((W=(te=M.bbox)==null?void 0:te.max)==null?void 0:W[2])??1))/2]})}},w.onerror=C=>{w.terminate(),E(C)},o instanceof ArrayBuffer?(nn("parsing PLY..."),w.postMessage({type:"start",plyBuffer:o},[o])):w.postMessage({type:"start_url",url:o.url})})}var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ks={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,l){(function(f,E){E(l)})(ql,function(f){class E{constructor(e){const[t,s]=e.split("-"),c=t.split(".");this.major=parseInt(c[0],10),this.minor=parseInt(c[1],10),this.patch=parseInt(c[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class w{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class M extends C{constructor(e,t,s,c){super(e),this.value=t,this.presetKey=s,this.last=c??!0}}class I extends C{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class A extends C{constructor(e,t){super(e),this.expanded=t}}class L extends C{constructor(e,t){super(e),this.index=t}}function N(n){return n}function V(n){return n==null}function z(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function K(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class q{static alreadyDisposed(){return new q({type:"alreadydisposed"})}static notBindable(){return new q({type:"notbindable"})}static propertyNotFound(e){return new q({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new q({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Q{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!Q.isBindable(s))throw q.notBindable();if(!(e in s))throw q.propertyNotFound(e);s[e]=t}}class te extends w{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new C(this))}),this}}class W{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(c=>c.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(c=>{c.handler(t)})}}const Y="tp";function H(n){return(t,s)=>[Y,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function le(n,e){return t=>e(n(t))}function ke(n){return n.rawValue}function pe(n,e){n.emitter.on("change",le(ke,e)),e(n.rawValue)}function ue(n,e,t){pe(n.value(e),t)}function Pe(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function ae(n,e){return t=>{Pe(n,e,t)}}function xe(n,e){pe(n,t=>{e.textContent=t??""})}const ve=H("btn");class Le{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ve()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(ve("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(ve("t")),xe(t.props.value("title"),c),this.buttonElement.appendChild(c)}}class Oe{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Le(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class X{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(c,P)=>c===P,this.emitter=new W,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.constraint_?this.constraint_.constrain(e):e,P=this.rawValue_;this.equals_(P,c)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=c,this.emitter.emit("change",{options:s,previousRawValue:P,rawValue:c,sender:this}))}}class ee{constructor(e){this.emitter=new W,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},c=this.value_;c===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:c,rawValue:this.value_,sender:this}))}}function O(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new ee(n):new X(n,e)}class Z{constructor(e){this.emitter=new W,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,c)=>Object.assign(s,{[c]:O(e[c])}),{})}static fromObject(e){const t=this.createCore(e);return new Z(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function Ve(n,e){const s=Object.keys(e).reduce((c,P)=>{if(c===void 0)return;const T=e[P],se=T(n[P]);return se.succeeded?Object.assign(Object.assign({},c),{[P]:se.value}):void 0},{});return s}function Be(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const c=e(s);if(!(!c.succeeded||c.value===void 0))return[...t,c.value]},[])}function be(n){return n===null?!1:typeof n=="object"}function ye(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Ge(n){return{custom:e=>ye(e)(n),boolean:ye(e=>typeof e=="boolean"?e:void 0)(n),number:ye(e=>typeof e=="number"?e:void 0)(n),string:ye(e=>typeof e=="string"?e:void 0)(n),function:ye(e=>typeof e=="function"?e:void 0)(n),constant:e=>ye(t=>t===e?e:void 0)(n),raw:ye(e=>e)(n),object:e=>ye(t=>{if(be(t))return Ve(t,e)})(n),array:e=>ye(t=>{if(Array.isArray(t))return Be(t,e)})(n)}}const Se={optional:Ge(!0),required:Ge(!1)};function Te(n,e){const t=Se.required.object(e)(n);return t.succeeded?t.value:void 0}function me(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class G{constructor(e){this.value_=e}static create(e){return[new G(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const b=H("");function i(n,e){return ae(n,b(void 0,e))}class p extends Z{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=G.create(O(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,c;const P=e??{};return new p(Z.createCore({disabled:(t=P.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=P.hidden)!==null&&s!==void 0?s:!1,parent:(c=P.parent)!==null&&c!==void 0?c:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){pe(this.globalDisabled_,i(e,"disabled")),ue(this,"hidden",i(e,"hidden"))}bindDisabled(e){pe(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){pe(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const v=H(""),x={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class k{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(v(void 0,x[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(v(void 0,x[s]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){me({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function r(n){n.offsetHeight}function m(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function d(n){return n.ontouchstart!==void 0}function h(){return globalThis}function a(){return h().document}function _(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const y={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(S,"svg");return t.innerHTML=y[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function $(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ce(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ie(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const re=H("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(c=>n.createTextNode(c)).forEach((c,P)=>{P>0&&t.appendChild(n.createElement("br")),t.appendChild(c)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(re()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(re("l")),ue(t.props,"label",P=>{V(P)?this.element.classList.add(re(void 0,"nol")):(this.element.classList.remove(re(void 0,"nol")),ce(s),s.appendChild(ge(e,P)))}),this.element.appendChild(s),this.labelElement=s;const c=e.createElement("div");c.classList.add(re("v")),this.element.appendChild(c),this.valueElement=c}}class he extends k{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ee={id:"button",type:"blade",accept(n){const e=Se,t=Te(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new he(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:new Oe(n.document,{props:Z.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof he)||!(n.controller.valueController instanceof Oe)?null:new te(n.controller)}};class Ie extends k{constructor(e){super(e),this.value=e.value}}function Re(){return new Z({positions:O([],{equals:z})})}class We extends Z{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=Z.createCore(t);return new We(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!V(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ue(this,"expanded",s),ue(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Xe(n,e){let t=0;return m(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),r(e),t=e.clientHeight,n.set("temporaryExpanded",null),r(e)}),t}function Ke(n,e){e.style.height=n.styleHeight}function je(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),V(n.get("expandedHeight"))){const t=Xe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),r(e)}),n.emitter.on("change",()=>{Ke(n,e)}),Ke(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends w{constructor(e,t){super(e),this.rackApi_=t}}function it(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function He(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function st(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function ot(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class rt{constructor(e){this.emitter=new W,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw q.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const c=this.extract_(e);c&&(c.emitter.on("add",this.onSubListAdd_),c.emitter.on("remove",this.onSubListRemove_),c.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class Je extends w{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new M(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class $e extends he{constructor(e,t){super(e,t),this.binding=t.binding}}class et extends w{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new W,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new I(this,t,this.controller_.binding.target.presetKey)})}}class Ye extends he{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ct(n){return n instanceof xt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function tt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw q.shouldNeverHappen();return t}function Et(n,e,t){if(!Q.isBindable(n))throw q.notBindable();return new Q(n,e,t)}class xt extends w{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new W,this.apiSet_=new rt(ct),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(c=>{this.setUpApi_(c)})}get children(){return this.controller_.rack.children.map(e=>tt(this.apiSet_,e))}addInput(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createInput(P,Et(e,t,c.presetKey),c),se=new Je(T);return this.add(se,c.index)}addMonitor(e,t,s){const c=s??{},P=this.controller_.view.element.ownerDocument,T=this.pool_.createMonitor(P,Et(e,t),c),se=new et(T);return this.add(se,c.index)}addFolder(e){return He(this,e)}addButton(e){return it(this,e)}addSeparator(e){return st(this,e)}addTab(e){return ot(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(c=>c.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),c=this.pool_.createBladeApi(s);return this.add(c,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=tt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof $e){const s=tt(this.apiSet_,t),c=t.binding;this.emitter_.emit("change",{event:new M(s,c.target.read(),c.target.presetKey,e.options.last)})}else if(t instanceof Ie){const s=tt(this.apiSet_,t);this.emitter_.emit("change",{event:new M(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Ye))throw q.shouldNeverHappen();const t=tt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new I(t,s.target.read(),s.target.presetKey)})}}class gt extends Qe{constructor(e,t){super(e,new xt(e.rackController,t)),this.emitter_=new W,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new A(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class wt extends k{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class j{constructor(e,t){const s=H(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function J(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof $e&&s.binding===e)return s}return null}function ne(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ye&&s.binding===e)return s}return null}function we(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ie&&s.value===e)return s}return null}function Ce(n){return n instanceof fe?n.rack:n instanceof wt?n.rackController.rack:null}function de(n){const e=Ce(n);return e?e.bcSet_:null}class _e{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new W,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new rt(de),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),K(e,"parent")?e.parent=this:(e.parent_=this,me({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){K(e,"parent")?e.parent=null:(e.parent_=null,me({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof $e)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof Ye)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.on("change",this.onChildValueChange_);else{const c=Ce(s);if(c){const P=c.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof $e)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof Ye)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Ie)s.value.emitter.off("change",this.onChildValueChange_);else{const c=Ce(s);if(c){const P=c.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(c=>!c.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(c=>{const P=[];c===t&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),c===s&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),c.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=J(this.find($e),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=ne(this.find(Ye),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=we(this.find(Ie),e.sender);if(!t)throw q.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class fe extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new j(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new _e({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let c=this.rack.children.length-1;c>=0;c--)this.rack.children[c].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const qe=H("cnt");class nt{constructor(e,t){var s;this.className_=H((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),qe()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ue(this.foldable_,"completed",ae(this.element,this.className_(void 0,"cpl")));const c=e.createElement("button");c.classList.add(this.className_("b")),ue(t.props,"title",De=>{V(De)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const P=e.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const T=e.createElement("div");T.classList.add(this.className_("t")),xe(t.props.value("title"),T),this.buttonElement.appendChild(T),this.titleElement=T;const se=e.createElement("div");se.classList.add(this.className_("m")),this.buttonElement.appendChild(se);const Ae=t.containerElement;Ae.classList.add(this.className_("c")),this.element.appendChild(Ae),this.containerElement=Ae}}class dt extends wt{constructor(e,t){var s;const c=We.create((s=t.expanded)!==null&&s!==void 0?s:!0),P=new fe(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:P,view:new nt(e,{containerElement:P.view.element,foldable:c,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=c,je(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const zt={id:"folder",type:"blade",accept(n){const e=Se,t=Te(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new dt(n.document,{blade:n.blade,expanded:n.params.expanded,props:Z.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof dt?new gt(n.controller,n.pool):null}};class yt extends Ie{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Wt extends w{}const rn=H("spr");class jt{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(rn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(rn("r")),this.element.appendChild(s)}}class ht extends k{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new jt(e,{viewProps:t.viewProps})}))}}const mn={id:"separator",type:"blade",accept(n){const t=Te(n,{view:Se.required.constant("separator")});return t?{params:t}:null},controller(n){return new ht(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ht?new Wt(n.controller):null}},kt=H("tbi");class Qn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(kt()),t.viewProps.bindClassModifiers(this.element),ue(t.props,"selected",P=>{P?this.element.classList.add(kt(void 0,"sel")):this.element.classList.remove(kt(void 0,"sel"))});const s=e.createElement("button");s.classList.add(kt("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const c=e.createElement("div");c.classList.add(kt("t")),xe(t.props.value("title"),c),this.buttonElement.appendChild(c),this.titleElement=c}}class In{constructor(e,t){this.emitter=new W,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Qn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ft{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new In(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new fe(e,{blade:Re(),viewProps:p.create()}),this.props=t.props,ue(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Gt{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class Kt extends Qe{constructor(e,t){super(e,new xt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new W,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw q.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new ft(t,{itemProps:Z.fromObject({selected:!1,title:e.title}),props:Z.fromObject({selected:!1})});this.controller_.add(s,e.index);const c=this.pageApiMap_.get(s);if(!c)throw q.shouldNeverHappen();return c}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(c=>c.controller_===e.contentController);if(!t)throw q.shouldNeverHappen();const s=new Gt(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw q.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new L(this,e.rawValue)})}}const Mt=-1;class on{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=O(!0),this.selectedIndex=O(Mt),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Mt,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,c)=>{s.rawValue=c===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Bt=H("tab");class Jn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Bt(),qe()),t.viewProps.bindClassModifiers(this.element),pe(t.empty,ae(this.element,Bt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Bt("t")),this.element.appendChild(s),this.itemsElement=s;const c=e.createElement("div");c.classList.add(Bt("i")),this.element.appendChild(c);const P=t.contentsElement;P.classList.add(Bt("c")),this.element.appendChild(P),this.contentsElement=P}}class an extends wt{constructor(e,t){const s=new fe(e,{blade:t.blade,viewProps:t.viewProps}),c=new on;super({blade:t.blade,rackController:s,view:new Jn(e,{contentsElement:s.view.element,empty:c.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new rt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=c}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const zs={id:"tab",type:"blade",accept(n){const e=Se,t=Te(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new an(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new ft(n.document,{itemProps:Z.fromObject({selected:!1,title:t.title}),props:Z.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof an?new Kt(n.controller,n.pool):null}};function xi(n,e){const t=n.accept(e.params);if(!t)return null;const s=Se.optional.boolean(e.params.disabled).value,c=Se.optional.boolean(e.params.hidden).value;return n.controller({blade:Re(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:c}),viewProps:p.create({disabled:s,hidden:c})})}class yi{constructor(){this.disabled=!1,this.emitter=new W}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Pi{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new W,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Si{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new W,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Gs(n,e){for(;n.length<e;)n.push(void 0)}function Ci(n){const e=[];return Gs(e,n),O(e)}function Ei(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function ki(n,e){const t=[...Ei(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Gs(t,n.length),t}class Mi{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new W,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=ki(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class vn{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function Tt(n,e){if(n instanceof e)return n;if(n instanceof vn){const t=n.constraints.reduce((s,c)=>s||(c instanceof e?c:null),null);if(t)return t}return null}class ln{constructor(e){this.values=Z.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class bn{constructor(e){this.values=Z.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(c=>c.value===e).length>0?e:t[0].value}}class Us{constructor(e){this.values=Z.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let c=e;return V(s)||(c=Math.max(c,s)),V(t)||(c=Math.min(c,t)),c}}class Ln{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const es=H("lst");class Bi{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(es()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(es("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const c=e.createElement("div");c.classList.add(es("m")),c.appendChild(g(e,"dropdown")),this.element.appendChild(c),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ue(this.props_,"options",P=>{$(this.selectElement),P.forEach(T=>{const se=e.createElement("option");se.textContent=T.text,this.selectElement.appendChild(se)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class gn{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Bi(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Vs=H("pop");class Ti{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element),pe(t.shows,ae(this.element,Vs(void 0,"v")))}}class Os{constructor(e,t){this.shows=O(!1),this.viewProps=t.viewProps,this.view=new Ti(e,{shows:this.shows,viewProps:this.viewProps})}}const Fs=H("txt");class Ai{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Fs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Fs("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Rn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new Ai(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);V(c)||(this.value.rawValue=c),this.view.refresh()}}function Di(n){return String(n)}function Ns(n){return n==="false"?!1:!!n}function $s(n){return Di(n)}class Ii{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Li={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class Ri{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Li[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const zi={"+":n=>n,"-":n=>-n,"~":n=>~n};class Gi{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=zi[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ts(n){return(e,t)=>{for(let s=0;s<n.length;s++){const c=n[s](e,t);if(c!=="")return c}return""}}function wn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ui(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function xn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Vi(n,e){const t=xn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const c=xn(n,e);return c===""?"":s+c}function ns(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=Vi(n,e);return s===""?"":t+s}function qs(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=Ui(n,e);return e+=s.length,s===""?"":s+xn(n,e)}function Oi(n,e){const t=qs(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const c=xn(n,e);return e+=c.length,t+s+c+ns(n,e)}function Fi(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=xn(n,e);return e+=s.length,s===""?"":t+s+ns(n,e)}function Ni(n,e){const t=qs(n,e);return e+=t.length,t===""?"":t+ns(n,e)}const $i=ts([Oi,Fi,Ni]);function qi(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Wi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=qi(n,e);return s===""?"":t+s}function ji(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ki(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=ji(n,e);return s===""?"":t+s}function Hi(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Yi(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Hi(n,e);return s===""?"":t+s}const Zi=ts([Wi,Ki,Yi]),Xi=ts([Zi,$i]);function Qi(n,e){const t=Xi(n,e);return e+=t.length,t===""?null:{evaluable:new Ii(t),cursor:e}}function Ji(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=js(n,e);if(!s)return null;e=s.cursor,e+=wn(n,e).length;const c=n.substr(e,1);return e+=c.length,c!==")"?null:{evaluable:s.evaluable,cursor:e}}function eo(n,e){var t;return(t=Qi(n,e))!==null&&t!==void 0?t:Ji(n,e)}function Ws(n,e){const t=eo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const c=Ws(n,e);return c?(e=c.cursor,{cursor:e,evaluable:new Gi(s,c.evaluable)}):null}function to(n,e,t){t+=wn(e,t).length;const s=n.filter(c=>e.startsWith(c,t))[0];return s?(t+=s.length,t+=wn(e,t).length,{cursor:t,operator:s}):null}function no(n,e){return(t,s)=>{const c=n(t,s);if(!c)return null;s=c.cursor;let P=c.evaluable;for(;;){const T=to(e,t,s);if(!T)break;s=T.cursor;const se=n(t,s);if(!se)return null;s=se.cursor,P=new Ri(T.operator,P,se.evaluable)}return P?{cursor:s,evaluable:P}:null}}const so=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>no(n,e),Ws);function js(n,e){return e+=wn(n,e).length,so(n,e)}function ro(n){const e=js(n,0);return!e||e.cursor+wn(n,e.cursor).length!==n.length?null:e.evaluable}function At(n){var e;const t=ro(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Ks(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=At(n);if(!V(e))return e}return 0}function io(n){return String(n)}function pt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const oo=pt(0);function zn(n){return oo(n)+"%"}function Hs(n){return String(n)}function ss(n){return n}function yn({primary:n,secondary:e,forward:t,backward:s}){let c=!1;function P(T){c||(c=!0,T(),c=!1)}n.emitter.on("change",T=>{P(()=>{e.setRawValue(t(n,e),T.options)})}),e.emitter.on("change",T=>{P(()=>{n.setRawValue(s(n,e),T.options)}),P(()=>{e.setRawValue(t(n,e),T.options)})}),P(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function mt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Pn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Dt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function ao(n){return n==="ArrowUp"||n==="ArrowDown"}function Ys(n){return ao(n)||n==="ArrowLeft"||n==="ArrowRight"}function rs(n,e){var t,s;const c=e.ownerDocument.defaultView,P=e.getBoundingClientRect();return{x:n.pageX-(((t=c&&c.scrollX)!==null&&t!==void 0?t:0)+P.left),y:n.pageY-(((s=c&&c.scrollY)!==null&&s!==void 0?s:0)+P.top)}}class Ht{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new W,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(rs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(rs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(rs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,c=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-c.left,y:s.clientY-c.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Ze(n,e,t,s,c){const P=(n-e)/(t-e);return s+P*(c-s)}function Zs(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function at(n,e,t){return Math.min(Math.max(n,e),t)}function Xs(n,e){return(n%e+e)%e}const Pt=H("txt");class lo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Pt(),Pt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Pt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Pt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Pt()),this.inputElement.classList.add(Pt("i"));const c=e.createElement("div");c.classList.add(Pt("k")),this.element.appendChild(c),this.knobElement=c;const P=e.createElementNS(S,"svg");P.classList.add(Pt("g")),this.knobElement.appendChild(P);const T=e.createElementNS(S,"path");T.classList.add(Pt("gb")),P.appendChild(T),this.guideBodyElem_=T;const se=e.createElementNS(S,"path");se.classList.add(Pt("gh")),P.appendChild(se),this.guideHeadElem_=se;const Ae=e.createElement("div");Ae.classList.add(H("tt")()),this.knobElement.appendChild(Ae),this.tooltipElem_=Ae,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Pt(void 0,"drg"));return}this.element.classList.add(Pt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),c=at(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+c},0 L${s},4 L${s+c},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Sn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=O(null),this.view=new lo(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const c=new Ht(this.view.knobElement);c.emitter.on("down",this.onPointerDown_),c.emitter.on("move",this.onPointerMove_),c.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const c=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),P=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let T=e;return c!==void 0&&(T=Math.max(T,c)),P!==void 0&&(T=Math.min(T,P)),T}onInputChange_(e){const s=e.currentTarget.value,c=this.parser_(s);V(c)||(this.value.rawValue=this.constrainValue_(c)),this.view.refresh()}onInputKeyDown_(e){const t=mt(this.baseStep_,Pn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){mt(this.baseStep_,Pn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const is=H("sld");class co{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(is("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const c=e.createElement("div");c.classList.add(is("k")),this.trackElement.appendChild(c),this.knobElement=c,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=at(Ze(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class uo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new co(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(at(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(this.baseStep_,Dt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){mt(this.baseStep_,Dt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const os=H("sldtxt");class po{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(os());const s=e.createElement("div");s.classList.add(os("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(os("t")),this.textView_=t.textView,c.appendChild(this.textView_.element),this.element.appendChild(c)}}class as{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new uo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Sn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new po(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Cn(n,e){n.write(e)}function Gn(n){const e=Se;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Qs(n){if(n==="inline"||n==="popup")return n}function Ut(n){const e=Se;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Js(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function ls(n){return V(n)?null:new bn(Js(n))}function ho(n){const e=n?Tt(n,Ln):null;return e?e.step:null}function Un(n,e){const t=n&&Tt(n,Ln);return t?Zs(t.step):Math.max(Zs(e),2)}function cn(n){const e=ho(n);return e??1}function un(n,e){var t;const s=n&&Tt(n,Ln),c=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return c===0?.1:Math.pow(10,Math.floor(Math.log10(c))-1)}const Vn=H("ckb");class fo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Vn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(Vn("l")),this.element.appendChild(s);const c=e.createElement("input");c.classList.add(Vn("i")),c.type="checkbox",s.appendChild(c),this.inputElement=c,t.viewProps.bindDisabled(this.inputElement);const P=e.createElement("div");P.classList.add(Vn("w")),s.appendChild(P);const T=g(e,"check");P.appendChild(T),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class _o{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new fo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function mo(n){const e=[],t=ls(n.options);return t&&e.push(t),new vn(e)}const vo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{options:Se.optional.custom(Gn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ns,constraint:n=>mo(n.params),writer:n=>Cn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Tt(s,bn);return c?new gn(e,{props:new Z({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new _o(e,{value:t,viewProps:n.viewProps})}},Yt=H("col");class bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yt()),t.foldable.bindExpandedClass(this.element,Yt(void 0,"expanded")),ue(t.foldable,"completed",ae(this.element,Yt(void 0,"cpl")));const s=e.createElement("div");s.classList.add(Yt("h")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(Yt("s")),s.appendChild(c),this.swatchElement=c;const P=e.createElement("div");if(P.classList.add(Yt("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(Yt("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}function go(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),P=at(t/255,0,1),T=Math.max(s,c,P),se=Math.min(s,c,P),Ae=T-se;let De=0,Fe=0;const Ne=(se+T)/2;return Ae!==0&&(Fe=Ae/(1-Math.abs(T+se-1)),s===T?De=(c-P)/Ae:c===T?De=2+(P-s)/Ae:De=4+(s-c)/Ae,De=De/6+(De<0?1:0)),[De*360,Fe*100,Ne*100]}function wo(n,e,t){const s=(n%360+360)%360,c=at(e/100,0,1),P=at(t/100,0,1),T=(1-Math.abs(2*P-1))*c,se=T*(1-Math.abs(s/60%2-1)),Ae=P-T/2;let De,Fe,Ne;return s>=0&&s<60?[De,Fe,Ne]=[T,se,0]:s>=60&&s<120?[De,Fe,Ne]=[se,T,0]:s>=120&&s<180?[De,Fe,Ne]=[0,T,se]:s>=180&&s<240?[De,Fe,Ne]=[0,se,T]:s>=240&&s<300?[De,Fe,Ne]=[se,0,T]:[De,Fe,Ne]=[T,0,se],[(De+Ae)*255,(Fe+Ae)*255,(Ne+Ae)*255]}function xo(n,e,t){const s=at(n/255,0,1),c=at(e/255,0,1),P=at(t/255,0,1),T=Math.max(s,c,P),se=Math.min(s,c,P),Ae=T-se;let De;Ae===0?De=0:T===s?De=60*(((c-P)/Ae%6+6)%6):T===c?De=60*((P-s)/Ae+2):De=60*((s-c)/Ae+4);const Fe=T===0?0:Ae/T,Ne=T;return[De,Fe*100,Ne*100]}function er(n,e,t){const s=Xs(n,360),c=at(e/100,0,1),P=at(t/100,0,1),T=P*c,se=T*(1-Math.abs(s/60%2-1)),Ae=P-T;let De,Fe,Ne;return s>=0&&s<60?[De,Fe,Ne]=[T,se,0]:s>=60&&s<120?[De,Fe,Ne]=[se,T,0]:s>=120&&s<180?[De,Fe,Ne]=[0,T,se]:s>=180&&s<240?[De,Fe,Ne]=[0,se,T]:s>=240&&s<300?[De,Fe,Ne]=[se,0,T]:[De,Fe,Ne]=[T,0,se],[(De+Ae)*255,(Fe+Ae)*255,(Ne+Ae)*255]}function yo(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Po(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function Zt(n){return[n[0],n[1],n[2]]}function tr(n,e){return[n[0],n[1],n[2],e]}const So={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:yo,rgb:wo},hsv:{hsl:Po,hsv:(n,e,t)=>[n,e,t],rgb:er},rgb:{hsl:go,hsv:xo,rgb:(n,e,t)=>[n,e,t]}};function On(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Co(n,e){return n===e?e:Xs(n,e)}function Eo(n,e,t){var s;const c=On(e,t);return[e==="rgb"?at(n[0],0,c[0]):Co(n[0],c[0]),at(n[1],0,c[1]),at(n[2],0,c[2]),at((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function nr(n,e,t,s){const c=On(e,t),P=On(e,s);return n.map((T,se)=>T/c[se]*P[se])}function ko(n,e,t){const s=nr(n,e.mode,e.type,"int"),c=So[e.mode][t.mode](...s);return nr(c,t.mode,"int",t.type)}function Fn(n,e){return typeof n!="object"||V(n)?!1:e in n&&typeof n[e]=="number"}class Ue{static black(e="int"){return new Ue([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ue(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Fn(e,"r")&&Fn(e,"g")&&Fn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Fn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,c=t.comps_;for(let P=0;P<s.length;P++)if(s[P]!==c[P])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=Eo(e,t,s)}getComponents(e,t="int"){return tr(ko(Zt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Vt=H("colp");class Mo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Vt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Vt("hsv"));const c=e.createElement("div");c.classList.add(Vt("sv")),this.svPaletteView_=t.svPaletteView,c.appendChild(this.svPaletteView_.element),s.appendChild(c);const P=e.createElement("div");P.classList.add(Vt("h")),this.hPaletteView_=t.hPaletteView,P.appendChild(this.hPaletteView_.element),s.appendChild(P),this.element.appendChild(s);const T=e.createElement("div");if(T.classList.add(Vt("rgb")),this.textView_=t.textView,T.appendChild(this.textView_.element),this.element.appendChild(T),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const se=e.createElement("div");se.classList.add(Vt("a"));const Ae=e.createElement("div");Ae.classList.add(Vt("ap")),Ae.appendChild(this.alphaViews_.palette.element),se.appendChild(Ae);const De=e.createElement("div");De.classList.add(Vt("at")),De.appendChild(this.alphaViews_.text.element),se.appendChild(De),this.element.appendChild(se)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Bo(n){return n==="int"?"int":n==="float"?"float":void 0}function cs(n){const e=Se;return Te(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Bo)}),expanded:e.optional.boolean,picker:e.optional.custom(Qs)})}function Xt(n){return n?.1:1}function Qt(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function To(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function St(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Ao={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function sr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return Ao[s](t)}function rr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function ir(n){return e=>{const t=rr(e);return t?new Ue(t,"rgb",n):null}}function or(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[St(e[1],255),St(e[2],255),St(e[3],255),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ar(n){return e=>{const t=or(e);return t?new Ue(t,"rgb",n):null}}function lr(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[sr(e[1]),St(e[2],100),St(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function cr(n){return e=>{const t=lr(e);return t?new Ue(t,"hsl",n):null}}function ur(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[sr(e[1]),St(e[2],100),St(e[3],100),St(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function dr(n){return e=>{const t=ur(e);return t?new Ue(t,"hsl",n):null}}function pr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Do(n){const e=pr(n);return e?new Ue(e,"rgb","int"):null}function hr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function Io(n){const e=hr(n);return e?new Ue(e,"rgb","int"):null}function fr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function _r(n){return e=>{const t=fr(e);return t?new Ue(t,"rgb",n):null}}function mr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function vr(n){return e=>{const t=mr(e);return t?new Ue(t,"rgb",n):null}}const Lo=[{parser:pr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:hr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:rr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:or,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:lr,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ur,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:fr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:mr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ro(n){return Lo.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function us(n,e="int"){const t=Ro(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const br={int:[Do,Io,ir("int"),ar("int"),cr("int"),dr("int"),_r("int"),vr("int")],float:[ir("float"),ar("float"),cr("float"),dr("float"),_r("float"),vr("float")]};function zo(n){const e=br[n];return t=>{if(typeof t!="string")return Ue.black(n);const s=e.reduce((c,P)=>c||P(t),null);return s??Ue.black(n)}}function ds(n){const e=br[n];return t=>e.reduce((s,c)=>s||c(t),null)}function gr(n){const e=at(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function wr(n,e="#"){const t=Zt(n.getComponents("rgb")).map(gr).join("");return`${e}${t}`}function ps(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(gr).join("");return`${e}${s}`}function xr(n,e){const t=pt(e==="float"?2:0);return`rgb(${Zt(n.getComponents("rgb",e)).map(c=>t(c)).join(", ")})`}function Go(n){return e=>xr(e,n)}function Nn(n,e){const t=pt(2),s=pt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((P,T)=>(T===3?t:s)(P)).join(", ")})`}function Uo(n){return e=>Nn(e,n)}function Vo(n){const e=[pt(0),zn,zn];return`hsl(${Zt(n.getComponents("hsl")).map((s,c)=>e[c](s)).join(", ")})`}function Oo(n){const e=[pt(0),zn,zn,pt(2)];return`hsla(${n.getComponents("hsl").map((s,c)=>e[c](s)).join(", ")})`}function yr(n,e){const t=pt(e==="float"?2:0),s=["r","g","b"];return`{${Zt(n.getComponents("rgb",e)).map((P,T)=>`${s[T]}: ${t(P)}`).join(", ")}}`}function Fo(n){return e=>yr(e,n)}function Pr(n,e){const t=pt(2),s=pt(e==="float"?2:0),c=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((T,se)=>{const Ae=se===3?t:s;return`${c[se]}: ${Ae(T)}`}).join(", ")}}`}function No(n){return e=>Pr(e,n)}const $o=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:wr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ps},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Vo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Oo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:Go(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:Uo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Fo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:No(e)}],[])];function hs(n){return $o.reduce((e,t)=>e||(To(t.format,n)?t.stringifier:null),null)}const En=H("apl");class qo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(En()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(En("b")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(En("c")),s.appendChild(c),this.colorElem_=c;const P=e.createElement("div");P.classList.add(En("m")),this.element.appendChild(P),this.markerElem_=P;const T=e.createElement("div");T.classList.add(En("p")),this.markerElem_.appendChild(T),this.previewElem_=T,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new Ue([t[0],t[1],t[2],0],"rgb"),c=new Ue([t[0],t[1],t[2],255],"rgb"),P=["to right",Nn(s),Nn(c)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Nn(e);const T=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${T}%`}onValueChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new qo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,c=this.value.rawValue,[P,T,se]=c.getComponents("hsv");this.value.setRawValue(new Ue([P,T,se,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Xt(!0),Dt(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,se]=s.getComponents("hsv");this.value.setRawValue(new Ue([c,P,T,se+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Xt(!0),Dt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const dn=H("coltxt");function jo(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,c)=>{const P=n.createElement("option");return P.textContent=c.text,P.value=c.value,s.appendChild(P),s},n.createDocumentFragment())),e}class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(dn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(dn("m")),this.modeElem_=jo(e),this.modeElem_.classList.add(dn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const c=e.createElement("div");c.classList.add(dn("mm")),c.appendChild(g(e,"dropdown")),s.appendChild(c),this.element.appendChild(s);const P=e.createElement("div");P.classList.add(dn("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=t.textViews,this.applyTextViews_(),pe(t.colorMode,T=>{this.modeElem_.value=T})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){$(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(dn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ho(n){return pt(n==="float"?2:0)}function Yo(n,e,t){const s=On(n,e)[t];return new ln({min:0,max:s})}function fs(n,e,t){return new Sn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Xt(!1),parser:e.parser,props:Z.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ho(e.colorType)}),value:O(0,{constraint:Yo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Zo{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=O(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ko(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[fs(e,t,0),fs(e,t,1),fs(e,t,2)];return s.forEach((c,P)=>{yn({primary:this.value,secondary:c.value,forward:T=>T.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(T,se)=>{const Ae=this.colorMode.rawValue,De=T.rawValue.getComponents(Ae,this.colorType_);return De[P]=se.rawValue,new Ue(tr(Zt(De),De[3]),Ae,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const _s=H("hpl");class Xo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(_s("c")),this.element.appendChild(s);const c=e.createElement("div");c.classList.add(_s("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=xr(new Ue([t,100,100],"hsv"));const s=Ze(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Qo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Xo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(at(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),c=this.value.rawValue,[,P,T,se]=c.getComponents("hsv");this.value.setRawValue(new Ue([s,P,T,se],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=mt(Xt(!1),Dt(e));if(t===0)return;const s=this.value.rawValue,[c,P,T,se]=s.getComponents("hsv");this.value.setRawValue(new Ue([c+t,P,T,se],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){mt(Xt(!1),Dt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ms=H("svp"),Sr=64;class Jo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=Sr,s.width=Sr,s.classList.add(ms("c")),this.element.appendChild(s),this.canvasElement=s;const c=e.createElement("div");c.classList.add(ms("m")),this.element.appendChild(c),this.markerElem_=c,this.update_()}update_(){const e=_(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),c=this.canvasElement.width,P=this.canvasElement.height,T=e.getImageData(0,0,c,P),se=T.data;for(let Fe=0;Fe<P;Fe++)for(let Ne=0;Ne<c;Ne++){const Jt=Ze(Ne,0,c,0,100),Mn=Ze(Fe,0,P,100,0),Bn=er(s[0],Jt,Mn),$n=(Fe*c+Ne)*4;se[$n]=Bn[0],se[$n+1]=Bn[1],se[$n+2]=Bn[2],se[$n+3]=255}e.putImageData(T,0,0);const Ae=Ze(s[1],0,100,0,100);this.markerElem_.style.left=`${Ae}%`;const De=Ze(s[2],0,100,100,0);this.markerElem_.style.top=`${De}%`}onValueChange_(){this.update_()}}class ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Jo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=Ze(e.point.x,0,e.bounds.width,0,100),c=Ze(e.point.y,0,e.bounds.height,100,0),[P,,,T]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([P,s,c,T],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ys(e.key)&&e.preventDefault();const[t,s,c,P]=this.value.rawValue.getComponents("hsv"),T=Xt(!1),se=mt(T,Dt(e)),Ae=mt(T,Pn(e));se===0&&Ae===0||this.value.setRawValue(new Ue([t,s+se,c+Ae,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Xt(!1),s=mt(t,Dt(e)),c=mt(t,Pn(e));s===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ta{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Qo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ea(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Wo(e,{value:this.value,viewProps:this.viewProps}),text:new Sn(e,{parser:At,baseStep:.1,props:Z.fromObject({draggingScale:.01,formatter:pt(2)}),value:O(0,{constraint:new ln({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&yn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,c)=>{const P=s.rawValue.getComponents();return P[3]=c.rawValue,new Ue(P,s.rawValue.mode)}}),this.textC_=new Zo(e,{colorType:t.colorType,parser:At,value:this.value,viewProps:this.viewProps}),this.view=new Mo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const vs=H("colsw");class na{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(vs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(vs("sw")),this.element.appendChild(s),this.swatchElem_=s;const c=e.createElement("button");c.classList.add(vs("b")),t.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=ps(e)}onValueChange_(){this.update_()}}class sa{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new na(e,{value:this.value,viewProps:this.viewProps})}}class bs{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.swatchC_=new sa(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Rn(e,{parser:t.parser,props:Z.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new bo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Os(e,{viewProps:this.viewProps}):null;const c=new ta(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});c.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=c,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(c.view.element),yn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,T)=>T.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ie(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ra(n,e){return Ue.isColorObject(n)?Ue.fromObject(n,e):Ue.black(e)}function ia(n){return Zt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function oa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const c=Math.floor(s===3?t*255:t)&255;return e<<8|c},0)>>>0}function aa(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function la(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function ca(n){return typeof n!="number"?Ue.black():aa(n)}function ua(n){return typeof n!="number"?Ue.black():la(n)}function da(n){const e=hs(n);return e?(t,s)=>{Cn(t,e(s))}:null}function pa(n){const e=n?oa:ia;return(t,s)=>{Cn(t,e(s))}}function ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function fa(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function _a(n,e){return(t,s)=>{n?ha(t,s,e):fa(t,s,e)}}function gs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function ma(n){return n?e=>ps(e,"0x"):e=>wr(e,"0x")}function va(n){return"color"in n||"view"in n&&n.view==="color"}const ba={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!va(e))return null;const t=cs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>gs(n.params)?ua:ca,equals:Ue.equals,writer:n=>pa(gs(n.params))},controller:n=>{const e=gs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new bs(n.document,{colorType:"int",expanded:t??!1,formatter:ma(e),parser:ds("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ga(n){return Ue.isRgbaColorObject(n)}function wa(n){return e=>ra(e,n)}function xa(n,e){return t=>n?Pr(t,e):yr(t,e)}const ya={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ue.isColorObject(n))return null;const t=cs(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>wa(Qt(n.params)),equals:Ue.equals,writer:n=>_a(ga(n.initialValue),Qt(n.params))},controller:n=>{var e;const t=Ue.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0,P=(e=Qt(n.params))!==null&&e!==void 0?e:"int";return new bs(n.document,{colorType:P,expanded:s??!1,formatter:xa(t,P),parser:ds(P),pickerLayout:c??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Pa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=us(n,Qt(e));if(!t||!hs(t))return null;const c=cs(e);return c?{initialValue:n,params:c}:null},binding:{reader:n=>{var e;return zo((e=Qt(n.params))!==null&&e!==void 0?e:"int")},equals:Ue.equals,writer:n=>{const e=us(n.initialValue,Qt(n.params));if(!e)throw q.shouldNeverHappen();const t=da(e);if(!t)throw q.notBindable();return t}},controller:n=>{const e=us(n.initialValue,Qt(n.params));if(!e)throw q.shouldNeverHappen();const t=hs(e);if(!t)throw q.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,c="picker"in n.params?n.params.picker:void 0;return new bs(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:ds(e.type),pickerLayout:c??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class Ot{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,c)=>{var P,T;return(T=(P=this.components[c])===null||P===void 0?void 0:P.constrain(s))!==null&&T!==void 0?T:s});return this.asm_.fromComponents(t)}}const Cr=H("pndtxt");class Sa{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Cr()),this.textViews.forEach(s=>{const c=e.createElement("div");c.classList.add(Cr("a")),c.appendChild(s.element),this.element.appendChild(c)})}}function Ca(n,e,t){return new Sn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:O(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class ws{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,c)=>Ca(e,t,c)),this.acs_.forEach((s,c)=>{yn({primary:this.value,secondary:s.value,forward:P=>t.assembly.toComponents(P.rawValue)[c],backward:(P,T)=>{const se=t.assembly.toComponents(P.rawValue);return se[c]=T.rawValue,t.assembly.fromComponents(se)}})}),this.view=new Sa(e,{textViews:this.acs_.map(s=>s.view)})}}function Er(n,e){return"step"in n&&!V(n.step)?new Ln(n.step,e):null}function kr(n){return!V(n.max)&&!V(n.min)?new ln({max:n.max,min:n.min}):!V(n.max)||!V(n.min)?new Us({max:n.max,min:n.min}):null}function Ea(n){const e=Tt(n,ln);if(e)return[e.values.get("min"),e.values.get("max")];const t=Tt(n,Us);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function ka(n,e){const t=[],s=Er(n,e);s&&t.push(s);const c=kr(n);c&&t.push(c);const P=ls(n.options);return P&&t.push(P),new vn(t)}const Ma={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=Se,s=Te(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(Gn),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ks,constraint:n=>ka(n.params,n.initialValue),writer:n=>Cn},controller:n=>{var e;const t=n.value,s=n.constraint,c=s&&Tt(s,bn);if(c)return new gn(n.document,{props:new Z({options:c.values.value("options")}),value:t,viewProps:n.viewProps});const P=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:pt(Un(s,t.rawValue)),T=s&&Tt(s,ln);return T?new as(n.document,{baseStep:cn(s),parser:At,sliderProps:new Z({maxValue:T.values.value("max"),minValue:T.values.value("min")}),textProps:Z.fromObject({draggingScale:un(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps}):new Sn(n.document,{baseStep:cn(s),parser:At,props:Z.fromObject({draggingScale:un(s,t.rawValue),formatter:P}),value:t,viewProps:n.viewProps})}};class Ft{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(V(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Mr={toComponents:n=>n.getComponents(),fromComponents:n=>new Ft(...n)},pn=H("p2d");class Ba{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(pn()),t.viewProps.bindClassModifiers(this.element),pe(t.expanded,ae(this.element,pn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(pn("h")),this.element.appendChild(s);const c=e.createElement("button");c.classList.add(pn("b")),c.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(c),s.appendChild(c),this.buttonElement=c;const P=e.createElement("div");if(P.classList.add(pn("t")),s.appendChild(P),this.textElement=P,t.pickerLayout==="inline"){const T=e.createElement("div");T.classList.add(pn("p")),this.element.appendChild(T),this.pickerElement=T}else this.pickerElement=null}}const Nt=H("p2dp");class Ta{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Nt()),t.layout==="popup"&&this.element.classList.add(Nt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Nt("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const c=e.createElementNS(S,"svg");c.classList.add(Nt("g")),this.padElement.appendChild(c),this.svgElem_=c;const P=e.createElementNS(S,"line");P.classList.add(Nt("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const T=e.createElementNS(S,"line");T.classList.add(Nt("ax")),T.setAttributeNS(null,"x1","50%"),T.setAttributeNS(null,"y1","0"),T.setAttributeNS(null,"x2","50%"),T.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(T);const se=e.createElementNS(S,"line");se.classList.add(Nt("l")),se.setAttributeNS(null,"x1","50%"),se.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(se),this.lineElem_=se;const Ae=e.createElement("div");Ae.classList.add(Nt("m")),this.padElement.appendChild(Ae),this.markerElem_=Ae,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,c=Ze(e,-s,+s,0,100),P=Ze(t,-s,+s,0,100),T=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${c}%`),this.lineElem_.setAttributeNS(null,"y2",`${T}%`),this.markerElem_.style.left=`${c}%`,this.markerElem_.style.top=`${T}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Br(n,e,t){return[mt(e[0],Dt(n)),mt(e[1],Pn(n))*(t?1:-1)]}class Aa{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new Ta(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ht(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,c=Ze(e.point.x,0,e.bounds.width,-s,+s),P=Ze(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new Ft(c,P),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ys(e.key)&&e.preventDefault();const[t,s]=Br(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new Ft(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=Br(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Da{constructor(e,t){var s,c;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=We.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Os(e,{viewProps:this.viewProps}):null;const P=new Aa(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(T=>{T.addEventListener("blur",this.onPopupChildBlur_),T.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new ws(e,{assembly:Mr,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Ba(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),yn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:T=>T.rawValue,backward:(T,se)=>se.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),je(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ie(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!d(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class hn{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(V(e))return!1;const t=e.x,s=e.y,c=e.z;return!(typeof t!="number"||typeof s!="number"||typeof c!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Tr={toComponents:n=>n.getComponents(),fromComponents:n=>new hn(...n)};function Ia(n){return hn.isObject(n)?new hn(n.x,n.y,n.z):new hn}function La(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Ra(n,e){return new Ot({assembly:Tr,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z)]})}function xs(n,e){return{baseStep:cn(e),constraint:e,textProps:Z.fromObject({draggingScale:un(e,n),formatter:pt(Un(e,n))})}}const za={id:"input-point3d",type:"input",accept:(n,e)=>{if(!hn.isObject(n))return null;const t=Se,s=Te(e,{x:t.optional.custom(Ut),y:t.optional.custom(Ut),z:t.optional.custom(Ut)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ia,constraint:n=>Ra(n.params,n.initialValue),equals:hn.equals,writer:n=>La},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ot))throw q.shouldNeverHappen();return new ws(n.document,{assembly:Tr,axes:[xs(e.rawValue.x,t.components[0]),xs(e.rawValue.y,t.components[1]),xs(e.rawValue.z,t.components[2])],parser:At,value:e,viewProps:n.viewProps})}};class fn{constructor(e=0,t=0,s=0,c=0){this.x=e,this.y=t,this.z=s,this.w=c}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(V(e))return!1;const t=e.x,s=e.y,c=e.z,P=e.w;return!(typeof t!="number"||typeof s!="number"||typeof c!="number"||typeof P!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ar={toComponents:n=>n.getComponents(),fromComponents:n=>new fn(...n)};function Ga(n){return fn.isObject(n)?new fn(n.x,n.y,n.z,n.w):new fn}function Ua(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function Va(n,e){return new Ot({assembly:Ar,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y),It("z"in n?n.z:void 0,e.z),It("w"in n?n.w:void 0,e.w)]})}function Oa(n,e){return{baseStep:cn(e),constraint:e,textProps:Z.fromObject({draggingScale:un(e,n),formatter:pt(Un(e,n))})}}const Fa={id:"input-point4d",type:"input",accept:(n,e)=>{if(!fn.isObject(n))return null;const t=Se,s=Te(e,{x:t.optional.custom(Ut),y:t.optional.custom(Ut),z:t.optional.custom(Ut),w:t.optional.custom(Ut)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ga,constraint:n=>Va(n.params,n.initialValue),equals:fn.equals,writer:n=>Ua},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof Ot))throw q.shouldNeverHappen();return new ws(n.document,{assembly:Ar,axes:e.rawValue.getComponents().map((s,c)=>Oa(s,t.components[c])),parser:At,value:e,viewProps:n.viewProps})}};function Na(n){const e=[],t=ls(n.options);return t&&e.push(t),new vn(e)}const $a={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=Te(e,{options:Se.optional.custom(Gn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs,constraint:n=>Na(n.params),writer:n=>Cn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,c=s&&Tt(s,bn);return c?new gn(e,{props:new Z({options:c.values.value("options")}),value:t,viewProps:n.viewProps}):new Rn(e,{parser:P=>P,props:Z.fromObject({formatter:ss}),value:t,viewProps:n.viewProps})}},kn={monitor:{defaultInterval:200,defaultLineCount:3}},Dr=H("mll");class qa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Dr()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(Dr("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(c=>{c!==void 0&&s.push(this.formatter_(c))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class ys{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new qa(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const Ir=H("sgl");class Wa{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ir()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Ir("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Ps{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Wa(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const ja={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=Te(e,{lineCount:Se.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Ns},controller:n=>{var e;return n.value.rawValue.length===1?new Ps(n.document,{formatter:$s,value:n.value,viewProps:n.viewProps}):new ys(n.document,{formatter:$s,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:kn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},$t=H("grl");class Ka{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add($t()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(S,"svg");s.classList.add($t("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const c=e.createElementNS(S,"polyline");this.svgElem_.appendChild(c),this.lineElem_=c;const P=e.createElement("div");P.classList.add($t("t"),H("tt")()),this.element.appendChild(P),this.tooltipElem_=P,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),c=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Fe,Ne)=>{if(Fe===void 0)return;const Jt=Ze(Ne,0,t,0,e.width),Mn=Ze(Fe,s,c,e.height,0);P.push([Jt,Mn].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const T=this.tooltipElem_,se=this.value.rawValue[this.cursor_.rawValue];if(se===void 0){T.classList.remove($t("t","a"));return}const Ae=Ze(this.cursor_.rawValue,0,t,0,e.width),De=Ze(se,s,c,e.height,0);T.style.left=`${Ae}px`,T.style.top=`${De}px`,T.textContent=`${this.formatter_(se)}`,T.classList.contains($t("t","a"))||(T.classList.add($t("t","a"),$t("t","in")),r(T),T.classList.remove($t("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ha{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=O(-1),this.view=new Ka(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!d(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new Ht(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ss(n){return"format"in n&&!V(n.format)?n.format:pt(2)}function Ya(n){var e;return n.value.rawValue.length===1?new Ps(n.document,{formatter:Ss(n.params),value:n.value,viewProps:n.viewProps}):new ys(n.document,{formatter:Ss(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:kn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Za(n){var e,t,s;return new Ha(n.document,{formatter:Ss(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:kn.monitor.defaultLineCount,props:Z.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function Lr(n){return"view"in n&&n.view==="graph"}const Xa={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=Se,s=Te(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>Lr(n)?64:1,reader:n=>Ks},controller:n=>Lr(n.params)?Za(n):Ya(n)},Qa={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=Se,s=Te(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Hs},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ys(n.document,{formatter:ss,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:kn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Ps(n.document,{formatter:ss,value:t,viewProps:n.viewProps})}};function Ja(n,e){var t;const s=n.accept(e.target.read(),e.params);if(V(s))return null;const c=Se,P={target:e.target,initialValue:s.initialValue,params:s.params},T=n.binding.reader(P),se=n.binding.constraint?n.binding.constraint(P):void 0,Ae=O(T(s.initialValue),{constraint:se,equals:n.binding.equals}),De=new Si({reader:T,target:e.target,value:Ae,writer:n.binding.writer(P)}),Fe=c.optional.boolean(e.params.disabled).value,Ne=c.optional.boolean(e.params.hidden).value,Jt=n.controller({constraint:se,document:e.document,initialValue:s.initialValue,params:s.params,value:De.value,viewProps:p.create({disabled:Fe,hidden:Ne})});return new $e(e.document,{binding:De,blade:Re(),props:Z.fromObject({label:"label"in e.params?(t=c.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Jt})}function el(n,e){return e===0?new yi:new Pi(n,e??kn.monitor.defaultInterval)}function tl(n,e){var t,s,c;const P=Se,T=n.accept(e.target.read(),e.params);if(V(T))return null;const se={target:e.target,initialValue:T.initialValue,params:T.params},Ae=n.binding.reader(se),De=(s=(t=P.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(T.params))!==null&&s!==void 0?s:1,Fe=P.optional.number(e.params.interval).value,Ne=new Mi({reader:Ae,target:e.target,ticker:el(e.document,Fe),value:Ci(De)}),Jt=P.optional.boolean(e.params.disabled).value,Mn=P.optional.boolean(e.params.hidden).value,Bn=n.controller({document:e.document,params:T.params,value:Ne.value,viewProps:p.create({disabled:Jt,hidden:Mn})});return new Ye(e.document,{binding:Ne,blade:Re(),props:Z.fromObject({label:"label"in e.params?(c=P.optional.string(e.params.label).value)!==null&&c!==void 0?c:null:e.target.key}),valueController:Bn})}class nl{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const c=t.read();if(V(c))throw new q({context:{key:t.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((T,se)=>T??Ja(se,{document:e,target:t,params:s}),null);if(P)return P;throw new q({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const c=this.pluginsMap_.monitors.reduce((P,T)=>P??tl(T,{document:e,params:s,target:t}),null);if(c)return c;throw new q({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((c,P)=>c??xi(P,{document:e,params:t}),null);if(!s)throw new q({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof $e)return new Je(e);if(e instanceof Ye)return new et(e);if(e instanceof fe)return new xt(e,this);const t=this.pluginsMap_.blades.reduce((s,c)=>s??c.api({controller:e,pool:this}),null);if(!t)throw q.shouldNeverHappen();return t}}function sl(){const n=new nl;return[cl,za,Fa,$a,Ma,Pa,ya,ba,vo,ja,Qa,Xa,Ee,zt,mn,zs].forEach(e=>{n.register(e)}),n}function rl(n){return Ft.isObject(n)?new Ft(n.x,n.y):new Ft}function il(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function It(n,e){if(!n)return;const t=[],s=Er(n,e);s&&t.push(s);const c=kr(n);return c&&t.push(c),new vn(t)}function ol(n,e){return new Ot({assembly:Mr,components:[It("x"in n?n.x:void 0,e.x),It("y"in n?n.y:void 0,e.y)]})}function Rr(n,e){const[t,s]=n?Ea(n):[];if(!V(t)||!V(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const c=cn(n);return Math.max(Math.abs(c)*10,Math.abs(e)*10)}function al(n,e){const t=e instanceof Ot?e.components[0]:void 0,s=e instanceof Ot?e.components[1]:void 0,c=Rr(t,n.x),P=Rr(s,n.y);return Math.max(c,P)}function zr(n,e){return{baseStep:cn(e),constraint:e,textProps:Z.fromObject({draggingScale:un(e,n),formatter:pt(Un(e,n))})}}function ll(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const cl={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Ft.isObject(n))return null;const t=Se,s=Te(e,{expanded:t.optional.boolean,picker:t.optional.custom(Qs),x:t.optional.custom(Ut),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>rl,constraint:n=>ol(n.params,n.initialValue),equals:Ft.equals,writer:n=>il},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof Ot))throw q.shouldNeverHappen();const c="expanded"in n.params?n.params.expanded:void 0,P="picker"in n.params?n.params.picker:void 0;return new Da(e,{axes:[zr(t.rawValue.x,s.components[0]),zr(t.rawValue.y,s.components[1])],expanded:c??!1,invertsY:ll(n.params),maxValue:al(t.rawValue,s),parser:At,pickerLayout:P??"popup",value:t,viewProps:n.viewProps})}};class Gr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Ur extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}class Vr extends w{constructor(e){super(e),this.emitter_=new W,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new M(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,c=>{s(c.event)}),this}}const ul=function(){return{id:"list",type:"blade",accept(n){const e=Se,t=Te(n,{options:e.required.custom(Gn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new bn(Js(n.params.options)),t=O(n.params.value,{constraint:e}),s=new gn(n.document,{props:new Z({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new yt(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof yt)||!(n.controller.valueController instanceof gn)?null:new Gr(n.controller)}}}();function dl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function pl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class hl extends gt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find($e).map(s=>s.binding);pl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find($e).map(t=>t.binding.target);return dl(e)}refresh(){this.controller_.rackController.rack.find($e).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Ye).forEach(e=>{e.binding.read()})}}class fl extends dt{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const _l={id:"slider",type:"blade",accept(n){const e=Se,t=Te(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,c=new ln({max:n.params.max,min:n.params.min}),P=new as(n.document,{baseStep:1,parser:At,sliderProps:new Z({maxValue:c.values.value("max"),minValue:c.values.value("min")}),textProps:Z.fromObject({draggingScale:un(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:io}),value:O(s,{constraint:c}),viewProps:n.viewProps});return new yt(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:P})},api(n){return!(n.controller instanceof yt)||!(n.controller.valueController instanceof as)?null:new Ur(n.controller)}},ml=function(){return{id:"text",type:"blade",accept(n){const e=Se,t=Te(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Rn(n.document,{parser:n.params.parse,props:Z.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:O(n.params.value),viewProps:n.viewProps});return new yt(n.document,{blade:n.blade,props:Z.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof yt)||!(n.controller.valueController instanceof Rn)?null:new Vr(n.controller)}}}();function vl(n){const e=n.createElement("div");return e.classList.add(H("dfw")()),n.body&&n.body.appendChild(e),e}function Or(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class bl extends hl{constructor(e){var t,s;const c=e??{},P=(t=c.document)!==null&&t!==void 0?t:a(),T=sl(),se=new fl(P,{expanded:c.expanded,blade:Re(),props:Z.fromObject({title:c.title}),viewProps:p.create()});super(se,T),this.pool_=T,this.containerElem_=(s=c.container)!==null&&s!==void 0?s:vl(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!c.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw q.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw q.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&Or(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Or(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[_l,ul,zs,ml]})}}const gl=new E("3.1.10");f.BladeApi=w,f.ButtonApi=te,f.FolderApi=gt,f.InputBindingApi=Je,f.ListApi=Gr,f.MonitorBindingApi=et,f.Pane=bl,f.SeparatorApi=Wt,f.SliderApi=Ur,f.TabApi=Kt,f.TabPageApi=Gt,f.TextApi=Vr,f.TpChangeEvent=M,f.VERSION=gl,Object.defineProperty(f,"__esModule",{value:!0})})})(ks,ks.exports);var Wl=ks.exports;const jl=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,Xr=`// 2DGS render — vertex+fragment.
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
}`,pi=32,Ms=1,Bs=2,Qr=4,Jr=512,ei=1024,Ql=0,qt=new ArrayBuffer(pi),_t={canvas_size:new Uint32Array(qt,0,2),accel_flags:new Uint32Array(qt,8,1),feature_mode:new Uint32Array(qt,12,1),gaussian_scaling:new Float32Array(qt,16,1),sh_bias:new Float32Array(qt,20,1),color_K:new Uint32Array(qt,24,1),walltime:new Float32Array(qt,28,1)};function Jl(o){_t.canvas_size[0]=o.width>>>0,_t.canvas_size[1]=o.height>>>0,_t.accel_flags[0]=(o.accel_flags??Ms|Bs)>>>0,_t.feature_mode[0]=(o.feature_mode??Ql)>>>0,_t.gaussian_scaling[0]=o.gaussian_scaling??1,_t.sh_bias[0]=o.sh_bias??.5,_t.color_K[0]=(o.color_K??0)>>>0,_t.walltime[0]=o.walltime??0}function hi(o,l){o.queue.writeBuffer(l,0,qt)}function Xn(o,l,f){f&&o&&l&&hi(o,l)}function _n(o,l,f,E,w=!0){_t.canvas_size[0]=o>>>0,_t.canvas_size[1]=l>>>0,Xn(f??null,E??null,w)}function ti(o,l,f,E=!0){_t.gaussian_scaling[0]=o,Xn(l??null,f??null,E)}function ni(o,l,f,E=!0){_t.sh_bias[0]=o,Xn(l??null,f??null,E)}function qn(o,l,f,E=!0){let w=_t.accel_flags[0];o.oac!==void 0&&(w=o.oac?w|Ms:w&~Ms),o.spr!==void 0&&(w=o.spr?w|Bs:w&~Bs),o.bfc!==void 0&&(w=o.bfc?w|Qr:w&~Qr),o.hypLegacy!==void 0&&(w=o.hypLegacy?w|Jr:w&~Jr),o.legacyPos!==void 0&&(w=o.legacyPos?w|ei:w&~ei),_t.accel_flags[0]=w>>>0,Xn(l??null,f??null,E)}const ec=256;function si(o,l){const f=[],E=[];let w=!0;for(const C of o.split(`
`)){const M=C.trim();let I;if((I=/^\/\/#if\s+(\w+)\s*$/.exec(M))!==null){const A=!!l[I[1]];E.push({parent:w,taken:A}),w=w&&A;continue}if(/^\/\/#else\s*$/.test(M)){const A=E[E.length-1];if(A===void 0)throw new Error("preprocessWGSL: #else without #if");w=A.parent&&!A.taken;continue}if(/^\/\/#endif\s*$/.test(M)){const A=E.pop();if(A===void 0)throw new Error("preprocessWGSL: #endif without #if");w=A.parent;continue}w&&f.push(C)}if(E.length!==0)throw new Error("preprocessWGSL: unterminated #if");return f.join(`
`)}const tc=pi,nc=8,sc=96,rc=12,Rs=8,Lt=1<<Rs,tn=256,Hn=32/Rs,ic=0,ri=Hn&1;function ii(o,l){return{sort_indices_buffer:l.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:l.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function oc(o,l){const f=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),E=o.createPipelineLayout({bindGroupLayouts:[f]}),w=C=>o.createComputePipeline({layout:E,compute:{module:l,entryPoint:C,constants:{WG_SIZE:tn}}});return{l0TileScan:w("prefix_l0_tile_scan"),l1TileScanOnL0:w("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:w("prefix_scan_l1_sums"),addL1ToL0:w("prefix_add_l1_to_l0_offsets"),addL0ToElems:w("prefix_add_l0_to_elements"),computeDigitBase:w("compute_digit_base"),prefixBindGroupLayout:f}}function ac(o,l,f){const E=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=o.createPipelineLayout({bindGroupLayouts:[E]}),M=o.createPipelineLayout({bindGroupLayouts:[w]}),I=[];for(let A=0;A<Hn;A++){const L={PASS_ID:A+ic,RS_RADIX_LOG2:Rs,RS_RADIX_SIZE:Lt};I.push({localHistogram:o.createComputePipeline({layout:C,compute:{module:l,entryPoint:"local_histogram_pass",constants:L}}),scatterElements:o.createComputePipeline({layout:M,compute:{module:f,entryPoint:"scatter_elements",constants:L}})})}return{passes:I,localHistogramBindGroupLayout:E,scatterBindGroupLayout:w}}function lc(o){const l=o.createShaderModule({label:"local histogram",code:Zl}),f=o.createShaderModule({label:"scatter",code:Yl}),E=o.createShaderModule({label:"blelloch prefix",code:Xl}),w=oc(o,E),C=ac(o,l,f);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:w}}function cc(o){const l=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),f=l.createView({dimension:"2d-array"}),E=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),w=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),C=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(C,0,new ArrayBuffer(32));const M={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:l,view:f,sampler:E,rectsBuffer:w,texParamsBuffer:C,meta:M}}class uc{constructor(l,f,E,w,C,M=null,I={}){F(this,"device");F(this,"pc");F(this,"presentationFormat");F(this,"camera_buffer");F(this,"render_settings_buffer");F(this,"draw_indirect_buffer");F(this,"splat_2d_buffer");F(this,"querySet");F(this,"resolveBuffer");F(this,"resultBuffer");F(this,"queriesPerFrame",nc);F(this,"queryCapacityFrames",200);F(this,"sort_prefixBindGroup");F(this,"sort_pipelines");F(this,"sort_localHistogramBindGroups");F(this,"sort_scatterBindGroups");F(this,"lastFrame",0);F(this,"frameCount",0);F(this,"preprocessPipeline");F(this,"cullPipeline");F(this,"renderPipeline");F(this,"indirectPipeline");F(this,"renderShaderModule");F(this,"betaKernel",1);F(this,"fetchById");F(this,"octBound");F(this,"acc16");F(this,"accTexture",null);F(this,"accView",null);F(this,"accW",0);F(this,"accH",0);F(this,"legacyRenderPipeline",null);F(this,"varyingsPipeline",null);F(this,"legacyRenderer",!1);F(this,"accResolvePipeline",null);F(this,"accResolveBgl",null);F(this,"accResolveBindGroup",null);F(this,"renderSettingsBgl");F(this,"renderSplatsBgl");F(this,"atlasBgl");F(this,"sort_info_buffer");F(this,"sort_ping_pong");F(this,"crsBg");F(this,"gsBg");F(this,"cullBg2");F(this,"preprocessBg1");F(this,"renderSplatsBindGroup");F(this,"renderSettingsBindGroup");F(this,"atlasBindGroup");F(this,"indirectBindGroup");F(this,"sh_solvers_buffer");F(this,"bfcParamsBuffer");F(this,"bfcBindGroupLayout");F(this,"bfcBindGroup");F(this,"bgColor",[0,0,0,0]);F(this,"showPerfDialogNext",!1);F(this,"requestReorderNextFrame",!1);F(this,"reorderInFlight",!1);F(this,"downloadOnceNextRead",!1);F(this,"downloadOnceFileName","fps_metrics");F(this,"allFrameTimes",[]);F(this,"lastStageBreakdownMs",null);F(this,"timeQueryEnabled");F(this,"atlas");F(this,"atlasParamsBuffer");F(this,"_atlasEnabled",!0);F(this,"_mipMode",1);this.fetchById=I.fetchById??!0,this.octBound=I.octBound??!1,this.acc16=I.acc16??!1,bt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const A=C.includes("timestamp-query");this.timeQueryEnabled=A,A&&bt("⏰ using timestamp-query"),this.pc=l,this.device=f,this.presentationFormat=E,this.camera_buffer=w,this.atlas=M??cc(f),this.atlasParamsBuffer=f.createBuffer({label:"atlas_params UBO",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),f.addEventListener("uncapturederror",Be=>{console.error("A WebGPU error was not captured:",Be.error)}),this._setupTimestampQueries(),this._setupBuffers();const L=(Math.floor((this.pc.num_points+tn-1)/tn)+1)*tn,N=Math.ceil(L/tn);console.log(`keys count adjusted: ${L}`),console.log(`key size: ${this.pc.num_points}`);const V=f.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=lc(f);const z=[ii(L,f),ii(L,f)],K=f.createBuffer({label:"workgroup histograms",size:N*Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=f.createBuffer({label:"workgroup prefixes",size:N*Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=f.createBuffer({label:"digit base",size:Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=Math.ceil(N/tn),te=Math.ceil(Q/tn),W=f.createBuffer({label:"prefix l0 sums",size:Q*Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=f.createBuffer({label:"prefix l0 offsets",size:Q*Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=f.createBuffer({label:"prefix l1 sums",size:te*Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),le=f.createBuffer({label:"prefix l1 offsets",size:te*Lt*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=f.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:W}},{binding:4,resource:{buffer:Y}},{binding:5,resource:{buffer:H}},{binding:6,resource:{buffer:le}},{binding:7,resource:{buffer:q}}]}),this.sort_localHistogramBindGroups=[f.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:z[0].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]}),f.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:z[1].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]})],this.sort_scatterBindGroups=[f.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:z[0].sort_depths_buffer}},{binding:3,resource:{buffer:z[1].sort_depths_buffer}},{binding:4,resource:{buffer:z[0].sort_indices_buffer}},{binding:5,resource:{buffer:z[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),f.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:z[1].sort_depths_buffer}},{binding:3,resource:{buffer:z[0].sort_depths_buffer}},{binding:4,resource:{buffer:z[1].sort_indices_buffer}},{binding:5,resource:{buffer:z[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=V,this.sort_ping_pong=z;const ke=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),pe=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Pe=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ke,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:pe,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Pe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}}]});const ae=this.device.createShaderModule({code:Kl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ae,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0])),this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:[{binding:1,resource:{buffer:this.bfcParamsBuffer}}]});const xe=this.device.createShaderModule({code:Hl});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ke,pe,ue,this.bfcBindGroupLayout]}),compute:{module:xe,entryPoint:"surfel_cull"}});const ve=this.device.createShaderModule({code:jl});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ke,Pe]}),compute:{module:ve,entryPoint:"preprocess"}});const Le=this.device.createShaderModule({label:"render_2dgs",code:si(Xr,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Le.getCompilationInfo().then(Be=>{Be.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Be.messages.forEach(be=>{(be.type==="error"?console.error:be.type==="warning"?console.warn:console.log)(`${be.type} (line ${be.lineNum}:${be.linePos}): ${be.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const Oe=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),X=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,ee=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:X,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),O=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Z=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[Oe,ee,O]}),vertex:{module:Le,entryPoint:"vs_main"},fragment:{module:Le,entryPoint:"fs_main",constants:{BETA_KERNEL:Z},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ve=(Be,be,ye)=>{const Ge=this.device.createShaderModule({label:`render_2dgs (${Be})`,code:si(Xr,{FETCH_BY_ID:be,OCT:ye})});return this.device.createRenderPipeline({label:`render_2dgs_${Be}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[Oe,ee,O]}),vertex:{module:Ge,entryPoint:"vs_main"},fragment:{module:Ge,entryPoint:"fs_main",constants:{BETA_KERNEL:Z},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=Ve("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ve("legacy",!1,!1):this.varyingsPipeline,this.device.popErrorScope().then(Be=>{Be?console.error("[render_2dgs] pipeline create validation error:",Be.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:Oe,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:ee,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[ri].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:O,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Le,this.betaKernel=Z,this.renderSettingsBgl=Oe,this.renderSplatsBgl=ee,this.atlasBgl=O}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(l,f){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([l,f[0],f[1],f[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){const l=new ArrayBuffer(16),f=new Uint32Array(l),E=new Float32Array(l);f[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,f[1]=this.atlas.meta.layer_h|0,E[2]=this.atlas.meta.uv_extent||0,f[3]=this.atlas.meta.probe_mode|0||0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,l)}ensureAccResources(l,f){var E;if(this.accResolvePipeline===null){const w=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,C=this.device.createShaderModule({label:"acc16_resolve",code:w});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:C,entryPoint:"vs_main"},fragment:{module:C,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===l&&this.accH===f||((E=this.accTexture)==null||E.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,l),height:Math.max(1,f),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=l,this.accH=f)}setAtlasEnabled(l){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=l,Cs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,l,this._mipMode))}setFetchById(l){l!==this.fetchById&&(this.fetchById=l,bt(`[render_2dgs] fragment inputs: ${l?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(l){if(l===this.legacyRenderer)return;this.legacyRenderer=l,qn({legacyPos:l,hypLegacy:l},this.device,this.render_settings_buffer);const f=!l&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([f])),bt(`[render_2dgs] renderer: ${l?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(l){this.atlas.meta.format!==4294967295&&(this._mipMode=l?1:0,Cs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var l;return(((l=this.atlas.meta.mip_bytes)==null?void 0:l.length)??1)>1}async debugReadSortedIndices(l=30){const f=Math.max(0,Math.min(l,this.pc.num_points)),E=f*Uint32Array.BYTES_PER_ELEMENT;if(E===0){console.log("[DEBUG] No indices to read.");return}const w=this.device.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[ri].sort_indices_buffer,0,w,0,E),this.device.queue.submit([C.finish()]),await w.mapAsync(GPUMapMode.READ);const M=new Uint32Array(w.getMappedRange());console.log("[DEBUG] Sorted indices (first",f,"):",Array.from(M)),w.unmap()}frame(l,f,E=!0){const C=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,M=E&&this.timeQueryEnabled;{l.clearBuffer(this.sort_info_buffer,0,4);const I={label:"cull"};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+0,endOfPassWriteIndex:C+1});const A=l.beginComputePass(I);A.setPipeline(this.cullPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.gsBg),A.setBindGroup(2,this.cullBg2),A.setBindGroup(3,this.bfcBindGroup);const L=Math.ceil(this.pc.num_points/ec);A.dispatchWorkgroups(L,1,1),A.end()}{const I=l.beginComputePass({label:"calculate indirect dispatch"});I.setPipeline(this.indirectPipeline),I.setBindGroup(0,this.indirectBindGroup),I.dispatchWorkgroups(1,1,1),I.end()}{const I={label:"preprocess"};M&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+2,endOfPassWriteIndex:C+3});const A=l.beginComputePass(I);A.setPipeline(this.preprocessPipeline),A.setBindGroup(0,this.crsBg),A.setBindGroup(1,this.preprocessBg1),A.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),A.end()}for(let I=0;I<Hn;I++){const A=I&1,L=this.sort_pipelines.passes[I],N=this.sort_localHistogramBindGroups[A],V=this.sort_scatterBindGroups[A];{const z={label:`upsweep_round${I}`};M&&I==0&&(z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+4});const K=l.beginComputePass(z);K.setPipeline(L.localHistogram),K.setBindGroup(0,N),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}{const z=l.beginComputePass({label:`prefix_round${I} - l0TileScan`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${I} - l1TileScanOnL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${I} - l1ScanSums`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,Lt,1),z.end()}{const z=l.beginComputePass({label:`prefix_round${I} - addL1ToL0`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),z.end()}{const z=l.beginComputePass({label:`prefix_round${I} - addL0ToElems`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),z.end()}{const z=l.beginComputePass({label:`prefix_round${I} - computeDigitBase`});z.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),z.setBindGroup(0,this.sort_prefixBindGroup),z.dispatchWorkgroups(1,1,1),z.end()}{const z={label:`scatter_round${I}`};M&&I==Hn-1&&(z.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+5});const K=l.beginComputePass(z);K.setPipeline(L.scatterElements),K.setBindGroup(0,V),K.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),K.end()}}{let I=f;this.acc16&&(this.ensureAccResources(_t.canvas_size[0],_t.canvas_size[1]),I=this.accView);const A={label:"render",colorAttachments:[{view:I,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(A.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:C+6,...this.acc16?{}:{endOfPassWriteIndex:C+7}});const L=l.beginRenderPass(A);if(L.setPipeline(this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),L.setBindGroup(0,this.renderSettingsBindGroup),L.setBindGroup(1,this.renderSplatsBindGroup),L.setBindGroup(2,this.atlasBindGroup),L.drawIndirect(this.draw_indirect_buffer,0),L.end(),this.acc16){const N={label:"acc16_resolve",colorAttachments:[{view:f,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};M&&(N.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:C+7});const V=l.beginRenderPass(N);V.setPipeline(this.accResolvePipeline),V.setBindGroup(0,this.accResolveBindGroup),V.draw(3),V.end()}}this.frameCount++}async readPerfMetrics(l){const f=(l==null?void 0:l.silent)??!1;if(this.frameCount<=0)return;const E=this.device.createCommandEncoder({label:"timestamp resolve encoder"});E.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),E.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([E.finish()]),await this.device.queue.onSubmittedWorkDone();const w=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const C=new BigInt64Array(this.resultBuffer.getMappedRange()),M=Math.min(this.frameCount,this.queryCapacityFrames),I=(this.lastFrame+this.frameCount-M)%this.queryCapacityFrames,A=Array.from({length:w.length},()=>[]);let L=0;for(let te=0;te<M;te++){const W=(I+te)%this.queryCapacityFrames,Y=W*this.queriesPerFrame;let H=!0;for(let le=0;le<w.length;le++){const[ke,pe,ue]=w[le];if(C[Y+ue]===0n||C[Y+pe]===0n||C[Y+pe]<C[Y+ue]){H=!1;break}}if(!H){!f&&W%60===0&&console.debug("[timestamp] frame slot",W,"contains unwritten (0) timestamps, skipped in stats");continue}L++;for(let le=0;le<w.length;le++){const[ke,pe,ue]=w[le],Pe=Number(C[Y+ue]),ae=Number(C[Y+pe]);A[le].push((ae-Pe)/1e6)}}if(L===0){this.resultBuffer.unmap(),f||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...A[0]);const N=[];let V=0,z=0,K=0;for(let te=0;te<w.length;te++){const W=w[te][0],Y=A[te];let H=0;if(W==="Total"){const le=this.allFrameTimes;H=le.reduce((ue,Pe)=>ue+Pe,0)/le.length;const ke=[...le].sort((ue,Pe)=>ue-Pe);V=ke[Math.floor(ke.length*.99)]||0;const pe=le.reduce((ue,Pe)=>ue+Math.pow(Pe-H,2),0)/le.length;z=Math.sqrt(pe),K=H}else H=Y.reduce((le,ke)=>le+ke,0)/Y.length;N.push([W,H])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(N);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const Q=`[TIMESTAMP - ${this.constructor.name}]
`+N.map(([te,W])=>`${te}: ${W.toFixed(3)}ms`).join(`
`)+`
Total P99: ${V.toFixed(3)}ms
Total STD: ${z.toFixed(3)}ms
Total AVG: ${K.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(f||(console.log(Q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const te=`Stage,ms
`,W=N.map(([le,ke])=>`${le},${ke.toFixed(3)}`).join(`
`),Y="data:text/csv;charset=utf-8,"+encodeURIComponent(te+W),H=document.createElement("a");H.href=Y,H.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(H),H.click(),H.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(Q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const l=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:l,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:tc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=document.querySelector("canvas"),f=l?l.width:1,E=l?l.height:1;Jl({width:f,height:E,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),hi(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Dn(this.pc.num_points*sc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Dn(this.pc.num_points*rc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(l){if(l&&l.trim().length>0){const f=l.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=f.length>0?f:this.downloadOnceFileName}else{const f=new Date,E=`${f.getFullYear()}${String(f.getMonth()+1).padStart(2,"0")}${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}${String(f.getMinutes()).padStart(2,"0")}${String(f.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${E}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}}function dc(o,l){return 2*Math.atan(l/(2*o))}function pc(o,l,f,E){const w=Math.tan(E/2),C=Math.tan(f/2),M=w*o,I=-M,A=C*o,L=-A,N=ut.create();return N[0]=2*o/(A-L),N[5]=-2*o/(M-I),N[2]=(A+L)/(A-L),N[6]=(M+I)/(M-I),N[14]=1,N[10]=l/(l-o),N[11]=-(l*o)/(l-o),ut.transpose(N,N),N}async function hc(o){bt(`loading scene camera file... : ${o}`);const f=await(await fetch(o)).json();return bt(`loaded cameras count: ${f.length}`),f.map(E=>{const w=R.clone(E.position),C=Ct.create(...E.rotation.flat()),M=C[0],I=C[4],A=C[8],L=C[1],N=C[5],V=C[9],z=C[2],K=C[6],oe=C[10];M*(N*oe-V*K)-I*(L*oe-V*z)+A*(L*K-N*z)<0&&(C[1]=-C[1],C[5]=-C[5],C[9]=-C[9]);const Q=ut.fromMat3(C);return{position:w,rotation:Q,img_name:E.img_name,id:E.id}})}const fc=4*2,_c=4*16,fi=4*_c+2*fc;function mc(o){return o.createBuffer({label:"camera uniform",size:fi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const en=new Float32Array(fi/Float32Array.BYTES_PER_ELEMENT),Yn=class Yn{constructor(l,f){F(this,"_renderSize",null);F(this,"uniform_buffer");F(this,"position",R.create());F(this,"rotation",ut.create());F(this,"fovY",45/180*Math.PI);F(this,"fovX");F(this,"focal",Kr.create());F(this,"viewport",Kr.create());F(this,"view_matrix",ut.identity());F(this,"view_inv_matrix",ut.identity());F(this,"proj_matrix",ut.identity());F(this,"proj_inv_matrix",ut.identity());F(this,"_negPos",R.create());F(this,"look",R.create(0,0,1));F(this,"up",R.create(0,1,0));F(this,"right",R.create(1,0,0));this.canvas=l,this.device=f,this.uniform_buffer=mc(f),this.on_update_canvas()}setRenderSize(l,f){this._renderSize=[l,f],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const l=this._renderSize?this._renderSize[0]:this.canvas.width,f=this._renderSize?this._renderSize[1]:this.canvas.height,E=.5*f/Math.tan(this.fovY*.5);this.focal[0]=E,this.focal[1]=E,this.fovX=dc(E,l),this.viewport[0]=l,this.viewport[1]=f,this.proj_matrix=pc(.01,100,this.fovX,this.fovY),ut.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],ut.copy(this.rotation,this.view_matrix),ut.translate(this.view_matrix,this._negPos,this.view_matrix),ut.inverse(this.view_matrix,this.view_inv_matrix),R.transformMat4Upper3x3(Yn.Z_AXIS,this.view_inv_matrix,this.look),R.normalize(this.look,this.look),R.cross(this.up,this.look,this.right),R.normalize(this.right,this.right);let l=0;en.set(this.view_matrix,l),l+=16,en.set(this.view_inv_matrix,l),l+=16,en.set(this.proj_matrix,l),l+=16,en.set(this.proj_inv_matrix,l),l+=16,en.set(this.viewport,l),l+=2,en.set(this.focal,l),l+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,en)}set_preset(l){R.copy(l.position,this.position),ut.copy(l.rotation,this.rotation),this.update_buffer()}setFov(l){this.fovY=l,this.on_update_canvas()}getFov(){return this.fovY}};F(Yn,"Z_AXIS",R.create(0,0,1));let Ts=Yn;const vc=R.create(1,0,0),bc=R.create(0,1,0),gc=R.create(0,0,1);function wc(o,l){const f=o[0],E=o[4],w=o[8],C=o[1],M=o[5],I=o[9],A=o[2],L=o[6],N=o[10],V=f+M+N;let z,K,oe,q;if(V>0){const Q=.5/Math.sqrt(V+1);z=.25/Q,K=(L-I)*Q,oe=(w-A)*Q,q=(C-E)*Q}else if(f>M&&f>N){const Q=2*Math.sqrt(1+f-M-N);z=(L-I)/Q,K=.25*Q,oe=(E+C)/Q,q=(w+A)/Q}else if(M>N){const Q=2*Math.sqrt(1+M-f-N);z=(w-A)/Q,K=(E+C)/Q,oe=.25*Q,q=(I+L)/Q}else{const Q=2*Math.sqrt(1+N-f-M);z=(C-E)/Q,K=(w+A)/Q,oe=(I+L)/Q,q=.25*Q}return l[0]=K,l[1]=oe,l[2]=q,l[3]=z,l}class xc{constructor(l){F(this,"element");F(this,"enabled",!0);F(this,"center",R.create(0,0,0));F(this,"up",R.create(0,1,0));F(this,"rotation",[0,0]);F(this,"shift",[0,0]);F(this,"scroll",0);F(this,"speed",.1);F(this,"sensitivity",.08);F(this,"leftPressed",!1);F(this,"rightPressed",!1);F(this,"leftDragPans",!1);F(this,"lastX",0);F(this,"lastY",0);F(this,"touches",new Map);F(this,"lastTouchCenter",null);F(this,"lastPinchDistance",null);F(this,"lastTwoFingerAngle",null);F(this,"lastTouchCount",0);F(this,"roll",0);F(this,"_dir",R.create());F(this,"_right",R.create());F(this,"_upCam",R.create());F(this,"_scratch",R.create());F(this,"_qY",lt.create());F(this,"_qX",lt.create());F(this,"_qRot",lt.create());F(this,"_qZ",lt.create());F(this,"_qLocal",lt.create());F(this,"_qWorldToCam",lt.create());F(this,"_scratchMat3",Ct.create());F(this,"bboxMin",null);F(this,"bboxMax",null);F(this,"anchor",R.create(0,0,0));F(this,"downCallback",l=>{var f,E,w,C;if(this.enabled){if(l.pointerType==="touch"){this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),(E=(f=l.target)==null?void 0:f.setPointerCapture)==null||E.call(f,l.pointerId),l.preventDefault();return}l.isPrimary&&(l.button===0?(this.leftPressed=!0,this.leftDragPans=l.shiftKey):l.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=l.pageX,this.lastY=l.pageY,(C=(w=l.target)==null?void 0:w.setPointerCapture)==null||C.call(w,l.pointerId),l.preventDefault())}});F(this,"moveCallback",l=>{if(!this.enabled)return;if(l.pointerType==="touch"){if(!this.touches.has(l.pointerId))return;this.touches.set(l.pointerId,{x:l.pageX,y:l.pageY}),this.handleTouchGestures(),l.preventDefault();return}if(!l.isPrimary||!this.leftPressed&&!this.rightPressed)return;l.preventDefault();const f=l.pageX-this.lastX,E=l.pageY-this.lastY;this.lastX=l.pageX,this.lastY=l.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=f,this.rotation[1]-=E):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=f,this.shift[0]+=E)});F(this,"upCallback",l=>{var f,E,w,C;if(l.pointerType==="touch"){this.touches.delete(l.pointerId),this.handleTouchGestures(),(E=(f=l.target)==null?void 0:f.releasePointerCapture)==null||E.call(f,l.pointerId),l.preventDefault();return}l.button===0?this.leftPressed=!1:l.button===2?this.rightPressed=!1:this.rightPressed=!1,(C=(w=l.target)==null?void 0:w.releasePointerCapture)==null||C.call(w,l.pointerId),l.preventDefault()});F(this,"wheelCallback",l=>{if(!this.enabled||(l.preventDefault(),this.rightPressed))return;let f=l.deltaY;l.deltaMode===1?f*=16:l.deltaMode===2&&(f*=100),this.scroll+=f*.01});this.camera=l,this.registerElement(l.canvas)}registerElement(l){this.element&&this.element!==l&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=l,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",f=>f.preventDefault())}setCenter(l){R.copy(l,this.center),R.copy(l,this.anchor)}setOrbitPivot(l){R.set(l[0],l[1],l[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(l){if(!isFinite(l)||l<.001)return;const f=this.camera.rotation;R.set(f[2],f[6],f[10],this._dir),R.normalize(this._dir,this._dir),R.scale(this._dir,l,this._dir),R.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const l=this.camera;if(R.subtract(this.center,l.position,this._scratch),R.length(this._scratch)<1e-6)return;R.normalize(this._scratch,this._scratch),R.cross(this.up,this._scratch,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right),R.normalize(this._right,this._right),R.cross(this._scratch,this._right,this._upCam),R.normalize(this._upCam,this._upCam);const f=l.rotation;f[0]=this._right[0],f[1]=this._upCam[0],f[2]=this._scratch[0],f[3]=0,f[4]=this._right[1],f[5]=this._upCam[1],f[6]=this._scratch[1],f[7]=0,f[8]=this._right[2],f[9]=this._upCam[2],f[10]=this._scratch[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,l.update_buffer()}setBbox(l,f){this.bboxMin=R.create(l[0],l[1],l[2]),this.bboxMax=R.create(f[0],f[1],f[2]);const E=(l[0]+f[0])*.5,w=(l[1]+f[1])*.5,C=(l[2]+f[2])*.5;R.set(E,w,C,this.center),R.set(E,w,C,this.anchor)}resetToCamera(){const l=this.camera.rotation;R.set(l[2],l[6],l[10],this._dir),R.normalize(this._dir,this._dir);let f=null;if(this.bboxMin&&this.bboxMax){let E=-1/0,w=1/0,C=!1;for(let M=0;M<3;M++){const I=this._dir[M],A=this.bboxMin[M]-this.camera.position[M],L=this.bboxMax[M]-this.camera.position[M];if(Math.abs(I)>1e-8){const N=A/I,V=L/I;E=Math.max(E,Math.min(N,V)),w=Math.min(w,Math.max(N,V))}else if(A>0||L<0){C=!0;break}}!C&&E<=w&&w>0&&(f=(Math.max(E,0)+w)*.5)}if(f===null||!isFinite(f)||f<.001){R.subtract(this.anchor,this.camera.position,this._scratch);const E=R.dot(this._scratch,this._dir);f=E>.001?E:R.length(this._scratch)}f=Math.max(.1,f),R.scale(this._dir,f,this._dir),R.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const l=this.touches.size;if(l!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=l,l===1){const f=this.touches.values().next().value;if(this.lastTouchCenter){const E=f.x-this.lastTouchCenter[0],w=f.y-this.lastTouchCenter[1];this.rotation[0]+=E*.3,this.rotation[1]-=w*.3}this.lastTouchCenter=[f.x,f.y]}else if(l===2){const f=Array.from(this.touches.values()),E=(f[0].x+f[1].x)*.5,w=(f[0].y+f[1].y)*.5,C=f[1].x-f[0].x,M=f[1].y-f[0].y,I=Math.hypot(C,M),A=Math.atan2(M,C);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const L=E-this.lastTouchCenter[0],N=w-this.lastTouchCenter[1],V=Math.hypot(L,N),z=Math.abs(I-this.lastPinchDistance);let K=A-this.lastTwoFingerAngle;K>Math.PI&&(K-=2*Math.PI),K<-Math.PI&&(K+=2*Math.PI),V>.5&&(this.shift[1]-=L,this.shift[0]+=N),z>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(I/this.lastPinchDistance)*10),Math.abs(K)>.0087&&(this.roll+=K)}this.lastTouchCenter=[E,w],this.lastPinchDistance=I,this.lastTwoFingerAngle=A}}update(l){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const f=this.camera;{const Q=f.rotation;this.up[0]=Q[1],this.up[1]=Q[5],this.up[2]=Q[9],R.length(this.up)>1e-6?R.normalize(this.up,this.up):R.set(0,1,0,this.up)}let E=0,w=!1;Math.abs(this.roll)>1e-4&&(E=this.roll,this.roll=0,w=!0),R.subtract(f.position,this.center,this._dir);let C=R.length(this._dir);C<1e-6&&(C=1e-6);const M=Math.exp(Math.log(C)+this.scroll*l*10*this.speed);R.scale(this._dir,M/C,this._dir),C=M;const I=f.rotation;this._right[0]=I[0],this._right[1]=I[4],this._right[2]=I[8],R.normalize(this._right,this._right),R.length(this._right)<1e-6&&R.set(1,0,0,this._right);const A=R.create(I[1],I[5],I[9]);R.normalize(A,A),R.length(A)<1e-6&&R.set(0,1,0,A);const L=l*this.speed*.1*C,N=this.shift[1]*L,V=-this.shift[0]*L;R.scale(this._right,N,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position),R.scale(A,V,this._scratch),R.add(this.center,this._scratch,this.center),R.add(f.position,this._scratch,f.position);const z=this.rotation[0]*l*this.sensitivity,K=this.rotation[1]*l*this.sensitivity;if(Math.abs(z)>1e-5||Math.abs(K)>1e-5||w){const Q=f.rotation;wc(Q,this._qWorldToCam),lt.fromAxisAngle(vc,-K,this._qX),lt.fromAxisAngle(bc,-z,this._qY),lt.multiply(this._qX,this._qY,this._qLocal),w&&(lt.fromAxisAngle(gc,1*E,this._qZ),lt.multiply(this._qZ,this._qLocal,this._qLocal)),lt.normalize(this._qLocal,this._qLocal),lt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),lt.normalize(this._qWorldToCam,this._qWorldToCam),Ct.fromQuat(this._qWorldToCam,this._scratchMat3),ut.fromMat3(this._scratchMat3,f.rotation);const te=f.rotation,W=te[2],Y=te[6],H=te[10];f.position[0]=this.center[0]-W*C,f.position[1]=this.center[1]-Y*C,f.position[2]=this.center[2]-H*C,this.up[0]=te[1],this.up[1]=te[5],this.up[2]=te[9],R.normalize(this.up,this.up)}else R.add(this.center,this._dir,f.position);f.update_buffer();const q=Math.pow(.8,l*60);this.rotation[0]*=q,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=q,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=q,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=q,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=q,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function _i(o){const l=R.create();for(const f of o)R.add(l,f,l);return R.scale(l,1/Math.max(o.length,1),l)}function mi(o,l){const f=Ct.create();Ct.inverse(o,f);const E=R.create();return E[0]=f[0]*l[0]+f[4]*l[1]+f[8]*l[2],E[1]=f[1]*l[0]+f[5]*l[1]+f[9]*l[2],E[2]=f[2]*l[0]+f[6]*l[1]+f[10]*l[2],E}function yc(o){const l=o.slice(),f=[1,0,0,0,1,0,0,0,1],E=(A,L)=>l[A*3+L],w=(A,L,N)=>{l[A*3+L]=N},C=(A,L)=>f[A*3+L],M=(A,L,N)=>{f[A*3+L]=N};for(let A=0;A<30;A++){let L=0,N=1,V=Math.abs(E(0,1));if(Math.abs(E(0,2))>V&&(L=0,N=2,V=Math.abs(E(0,2))),Math.abs(E(1,2))>V&&(L=1,N=2,V=Math.abs(E(1,2))),V<1e-12)break;const z=E(L,L),K=E(N,N),oe=E(L,N);let q;Math.abs(z-K)<1e-30?q=Math.PI/4*Math.sign(oe):q=.5*Math.atan2(2*oe,z-K);const Q=Math.cos(q),te=Math.sin(q);for(let W=0;W<3;W++){const Y=E(W,L),H=E(W,N);w(W,L,Q*Y+te*H),w(W,N,-te*Y+Q*H)}for(let W=0;W<3;W++){const Y=E(L,W),H=E(N,W);w(L,W,Q*Y+te*H),w(N,W,-te*Y+Q*H)}for(let W=0;W<3;W++){const Y=C(W,L),H=C(W,N);M(W,L,Q*Y+te*H),M(W,N,-te*Y+Q*H)}}const I=[];for(let A=0;A<3;A++)I.push({val:E(A,A),vec:R.create(C(0,A),C(1,A),C(2,A))});return I.sort((A,L)=>L.val-A.val),{vals:[I[0].val,I[1].val,I[2].val],vecs:[I[0].vec,I[1].vec,I[2].vec]}}function Pc(o,l){const f=_i(o);let E=0,w=0,C=0,M=0,I=0,A=0;for(const oe of o){const q=oe[0]-f[0],Q=oe[1]-f[1],te=oe[2]-f[2];E+=q*q,w+=q*Q,C+=q*te,M+=Q*Q,I+=Q*te,A+=te*te}const L=[E,w,C,w,M,I,C,I,A],{vecs:N}=yc(L);let V=N[0],z=N[1],K=N[2];return R.dot(K,l)<0&&(R.scale(K,-1,K),R.scale(z,-1,z)),{centroid:f,normal:K,u:V,v:z}}function Sc(o){let l=0,f=0,E=0,w=0,C=0,M=0,I=0,A=0,L=0;for(const[Q,te]of o){const W=-2*Q,Y=-2*te,H=1,le=-(Q*Q+te*te);l+=W*W,f+=W*Y,E+=W*H,w+=Y*Y,C+=Y*H,M+=H*H,I+=W*le,A+=Y*le,L+=H*le}const N=Ct.create(l,f,E,f,w,C,E,C,M),V=mi(N,R.create(I,A,L)),z=V[0],K=V[1],oe=V[2],q=z*z+K*K-oe;return{center:[z,K],radius:Math.sqrt(Math.max(q,1e-12))}}function Cc(o,l){let f=0,E=0,w=0,C=0,M=0,I=0,A=0,L=0,N=0;for(let z=0;z<o.length;z++){const K=o[z],oe=R.normalize(l[z],R.create()),q=1-oe[0]*oe[0],Q=-oe[0]*oe[1],te=-oe[0]*oe[2],W=1-oe[1]*oe[1],Y=-oe[1]*oe[2],H=1-oe[2]*oe[2];f+=q,E+=Q,w+=te,C+=W,M+=Y,I+=H,A+=q*K[0]+Q*K[1]+te*K[2],L+=Q*K[0]+W*K[1]+Y*K[2],N+=te*K[0]+Y*K[1]+H*K[2]}const V=Ct.create(f,E,w,E,C,M,w,M,I);return mi(V,R.create(A,L,N))}function vi(o,l={}){if(o.length===0)return null;const f=l.tiltDownDeg??8,E=l.radiusScale??1,w=l.alignFirst??!0,C=(l.direction??"ccw")==="ccw"?1:-1,M=o.map(ue=>R.clone(ue.position)),I=o.map(ue=>{const Pe=ue.rotation;return R.create(Pe[8],Pe[9],Pe[10])}),A=o.map(ue=>{const Pe=ue.rotation;return R.create(Pe[4],Pe[5],Pe[6])}),L=_i(A),N=R.normalize(R.scale(L,-1,R.create())),{centroid:V,normal:z,u:K,v:oe}=Pc(M,N),q=M.map(ue=>{const Pe=R.sub(ue,V,R.create());return[R.dot(Pe,K),R.dot(Pe,oe)]}),{center:Q,radius:te}=Sc(q),W=te*E,Y=R.add(V,R.add(R.scale(K,Q[0],R.create()),R.scale(oe,Q[1],R.create()),R.create()),R.create()),H=Cc(M,I),le=W*Math.tan(f*Math.PI/180),ke=R.sub(H,R.scale(z,le,R.create()),R.create());let pe=0;if(w){const ue=R.sub(M[0],Y,R.create());pe=Math.atan2(R.dot(ue,oe),R.dot(ue,K))/(2*Math.PI)%1,pe<0&&(pe+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${W.toFixed(2)}, tilt=${f}°, normal=[${z[0].toFixed(2)}, ${z[1].toFixed(2)}, ${z[2].toFixed(2)}], startPhase=${pe.toFixed(3)}`),{center:Y,radius:W,normal:z,u:K,v:oe,lookAt:ke,startPhase:pe,direction:C}}function bi(o,l){const f=(o.startPhase+l*o.direction)*2*Math.PI,E=Math.cos(f),w=Math.sin(f),C=R.add(o.center,R.add(R.scale(o.u,o.radius*E,R.create()),R.scale(o.v,o.radius*w,R.create()),R.create()),R.create()),M=R.normalize(R.sub(o.lookAt,C,R.create())),I=R.cross(M,o.normal,R.create());R.length(I)<1e-6&&R.copy(o.u,I),R.normalize(I,I);const A=R.cross(M,I,R.create());R.normalize(A,A);const L=ut.create();return L[0]=I[0],L[1]=A[0],L[2]=M[0],L[3]=0,L[4]=I[1],L[5]=A[1],L[6]=M[1],L[7]=0,L[8]=I[2],L[9]=A[2],L[10]=M[2],L[11]=0,L[12]=0,L[13]=0,L[14]=0,L[15]=1,{position:C,rotation:L,img_name:`orbit_${(l*1e3).toFixed(0)}`,id:0}}function Ec(o,l={}){const f=vi(o,l);if(!f)return[];const E=l.numViews??120;return Array.from({length:E},(w,C)=>({...bi(f,C/E),img_name:`circle_${C.toString().padStart(4,"0")}`,id:C}))}const gi="BITYMI01",kc=0,Mc=1,Bc=2,Tc=3,Ac=4,Dc=5;function Rt(o){const l=(o&32768)>>15,f=(o&31744)>>10,E=o&1023;return f===0?(l?-1:1)*Math.pow(2,-14)*(E/1024):f===31?E?NaN:l?-1/0:1/0:(l?-1:1)*Math.pow(2,f-15)*(1+E/1024)}function As(o,l,f,E,w,C,M,I,A,L=.5){const N=A?A.length:M.length/8,V=[],z=[];for(let q=0;q<N;q++){const te=(A?A[q]:q)*8,W=M[te]-o,Y=M[te+1]-l,H=M[te+2]-f,le=W*E+Y*w+H*C;if(le<=0||!(I[te+7]>>>16&1))continue;const ke=I[te+4],pe=Rt(ke&65535),ue=Rt(ke>>>16&65535),Pe=3*Math.max(pe,ue),ae=W-le*E,xe=Y-le*w,ve=H-le*C;if(ae*ae+xe*xe+ve*ve>Pe*Pe)continue;const Le=Rt(I[te+3]&65535);if(Le<1/255)continue;const Oe=I[te+5],X=I[te+6];let ee=Rt(Oe&65535),O=Rt(Oe>>>16&65535),Z=Rt(X&65535),Ve=Rt(X>>>16&65535);const Be=Math.hypot(ee,O,Z,Ve)||1;ee/=Be,O/=Be,Z/=Be,Ve/=Be;const be=1-2*(Z*Z+Ve*Ve),ye=2*(O*Z+ee*Ve),Ge=2*(O*Ve-ee*Z),Se=2*(O*Z-ee*Ve),Te=1-2*(O*O+Ve*Ve),me=2*(Z*Ve+ee*O),B=2*(O*Ve+ee*Z),G=2*(Z*Ve-ee*O),b=1-2*(O*O+Z*Z),i=E*B+w*G+C*b;if(Math.abs(i)<1e-6)continue;const p=(W*B+Y*G+H*b)/i;if(!(p>0))continue;const u=p*E-W,v=p*w-Y,x=p*C-H,k=(u*be+v*ye+x*Ge)/(pe||1e-6),S=(u*Se+v*Te+x*me)/(ue||1e-6),r=k*k+S*S;if(r>9)continue;const m=Math.min(.99,Le*Math.exp(-.5*r));m<1/255||(V.push(p),z.push(m))}if(V.length===0)return null;const K=V.map((q,Q)=>Q).sort((q,Q)=>V[q]-V[Q]);let oe=1;for(const q of K)if(oe*=1-z[q],oe<L)return V[q];return null}function Ds(o,l,f){const E=(o-f.viewport[0]*.5)/f.focal[0],w=-((l-f.viewport[1]*.5)/f.focal[1]),C=f.rotation;let M=E*C[0]+w*C[1]+C[2],I=E*C[4]+w*C[5]+C[6],A=E*C[8]+w*C[9]+C[10];const L=Math.hypot(M,I,A)||1;return[M/L,I/L,A/L]}function Ic(o,l,f,E,w,C){const[M,I,A]=Ds(o,l,E),L=E.position[0],N=E.position[1],V=E.position[2],z=new Uint32Array(w.buffer,w.byteOffset,w.length);let K=As(L,N,V,M,I,A,w,z,null,.5);return K===null&&(K=As(L,N,V,M,I,A,w,z,null,.8)),K===null?null:[L+K*M,N+K*I,V+K*A]}function Lc(o,l){const f=o.viewport[0],E=o.viewport[1],w=new Uint32Array(l.buffer,l.byteOffset,l.length),C=o.position[0],M=o.position[1],I=o.position[2],[A,L,N]=Ds(f*.5,E*.5,o),V=.06*Math.max(f,E),z=(V+2)/o.focal[0],K=l.length/8,oe=[];for(let W=0;W<K;W++){const Y=W*8,H=l[Y]-C,le=l[Y+1]-M,ke=l[Y+2]-I,pe=H*A+le*L+ke*N;if(pe<=0)continue;const ue=w[Y+4],Pe=3*Math.max(Rt(ue&65535),Rt(ue>>>16&65535)),ae=H-pe*A,xe=le-pe*L,ve=ke-pe*N,Le=pe*z+Pe;ae*ae+xe*xe+ve*ve<=Le*Le&&oe.push(W)}if(oe.length===0)return null;const q=Int32Array.from(oe),Q=[],te=5;for(let W=0;W<te;W++)for(let Y=0;Y<te;Y++){const H=f*.5+(Y-(te-1)/2)/((te-1)/2)*V,le=E*.5+(W-(te-1)/2)/((te-1)/2)*V,[ke,pe,ue]=Ds(H,le,o),Pe=As(C,M,I,ke,pe,ue,l,w,q,.5);Pe!==null&&Q.push(Pe*(ke*A+pe*L+ue*N))}return Q.length<3?null:(Q.sort((W,Y)=>W-Y),Q[Q.length>>1])}function wi(o){const l=new Uint8Array(o),f=new TextDecoder().decode(l.subarray(0,8));if(f!==gi)throw new Error(`Not a BITYMI bundle (bad magic '${f}')`);const E=new DataView(o),w=E.getUint32(8,!0),C=12,M=20;let I=null,A=null,L=null;for(let N=0;N<w;N++){const V=C+N*M,z=E.getUint32(V+0,!0),K=Number(E.getBigUint64(V+4,!0)),oe=Number(E.getBigUint64(V+12,!0)),q=l.slice(K,K+oe).buffer;z===kc||z===Mc||z===Dc?I=q:z===Bc?A=q:(z===Tc||z===Ac)&&(L=q)}if(I===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:I,camerasBuffer:A,atlasBuffer:L}}async function Rc(o,l){var M;const f=await fetch(o);if(!f.ok)throw new Error(`fetch failed: ${f.status} ${f.statusText}`);const E=(()=>{const I=f.headers.get("content-length");return I&&parseInt(I,10)||void 0})(),w=(M=f.body)==null?void 0:M.getReader();let C;if(!w)C=await f.arrayBuffer(),l&&l(C.byteLength,E,0);else{const I=[];let A=0,L=performance.now(),N=0;for(;;){const{done:K,value:oe}=await w.read();if(K)break;I.push(oe),A+=oe.byteLength;const q=performance.now();if(q-L>=150&&l){const Q=(A-N)/((q-L)/1e3);l(A,E,Q),L=q,N=A}}const V=new Uint8Array(A);let z=0;for(const K of I)V.set(K,z),z+=K.byteLength;C=V.buffer,l&&l(A,E,0)}return C.byteLength>=8&&new TextDecoder().decode(new Uint8Array(C,0,8))===gi?{bundle:wi(C),rawPly:null}:{bundle:null,rawPly:C}}function zc(o){return new Promise(l=>{const f=document.createElement("input");f.type="file",f.accept=o,f.style.display="none",f.onchange=()=>{var E;return l(((E=f.files)==null?void 0:E[0])??null)},document.body.appendChild(f),f.click(),setTimeout(()=>document.body.removeChild(f),1e3)})}function Gc(o,l,f){const E=document.getElementById("ui-panel-container"),w=document.getElementById("load-button"),C=document.getElementById("quick-links");w&&(w.onclick=async()=>{const L=await zc(".ply,.bitymi");if(L)if(E&&(E.style.display="none"),L.name.toLowerCase().endsWith(".bitymi")){const N=await L.arrayBuffer(),{pcBuffer:V}=wi(N),z=new File([V],L.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),K=await Es(z,o);l(K)}else{const N=await Es(L,o);l(N)}}),C&&(C.innerHTML="");const M=new URLSearchParams(window.location.search),I=M.get("bundle")??M.get("model_url"),A=M.get("camera_url");I&&(E&&(E.style.display="none"),f(I,A))}async function Uc(o,l,f,E){const w=new Ts(o,f),C=new xc(w);let M=!1;o.addEventListener("pointerdown",()=>{M=!0}),window.addEventListener("pointerup",()=>{M=!1});const I=typeof window<"u"&&window.parent!==window,A={pos:new Float32Array(3),rot:new Float32Array(16)};if(I){window.addEventListener("message",X=>{const ee=X.data;if(!(!ee||ee.type!=="halloumi_sync_pose")&&!(!Array.isArray(ee.position)||ee.position.length!==3)&&!(!Array.isArray(ee.rotation)||ee.rotation.length!==16)){for(let O=0;O<3;O++)w.position[O]=ee.position[O];for(let O=0;O<16;O++)w.rotation[O]=ee.rotation[O];w.update_buffer(),C.resetToCamera();for(let O=0;O<3;O++)A.pos[O]=w.position[O];for(let O=0;O<16;O++)A.rot[O]=w.rotation[O]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const L=()=>{if(!I)return;const X=w.position,ee=w.rotation;let O=!1;for(let Z=0;Z<3;Z++)if(Math.abs(X[Z]-A.pos[Z])>1e-6){O=!0;break}if(!O){for(let Z=0;Z<16;Z++)if(Math.abs(ee[Z]-A.rot[Z])>1e-6){O=!0;break}}if(O){for(let Z=0;Z<3;Z++)A.pos[Z]=X[Z];for(let Z=0;Z<16;Z++)A.rot[Z]=ee[Z];try{window.parent.postMessage({type:"halloumi_camera_state",position:[X[0],X[1],X[2]],rotation:Array.from(ee)},"*")}catch{}}},N="rgba8unorm";l.configure({device:f,format:N,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let V=null;const z=()=>{w.on_update_canvas(),V!==null&&_n(o.width,o.height,f,V.render_settings_buffer)};new ResizeObserver(()=>{const X=Math.max(.25,xe.render_scale),ee=Math.max(1,Math.ceil(X*o.clientWidth)),O=Math.max(1,Math.ceil(X*o.clientHeight));o.width===ee&&o.height===O||(o.width=ee,o.height=O,z())}).observe(o);let oe=0,q=0;const Q=()=>{(o.width!==oe||o.height!==q)&&(oe=o.width,q=o.height,z())},te=new URLSearchParams(window.location.search);let Y=te.get("animation")==="1";C.enabled=!Y;const H=te.get("camera_url"),le=te.get("bfc"),ke=le==="1"||le==="true",pe=te.get("bfc_cos"),ue=pe!==null?Number(pe):NaN,Pe=Number.isFinite(ue)?ue:2,ae=Math.max(1,window.devicePixelRatio||1),xe={gaussian_scaling:1,sh_bias:.5,animate:Y,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:ke,bfc_cos:Pe,legacy_renderer:!1,fetch_by_id:!0,render_scale:1},ve=new Wl.Pane({title:"Config",expanded:!0});ve.addInput(xe,"animate",{label:"Animate"}).on("change",X=>{const ee=Y;Y=X.value,C.enabled=!X.value,!ee&&Y&&Le.value&&Le.value.onAnimateStart(),ee&&!Y&&Le.value&&Le.value.onAnimateStop()}),ve.addInput(xe,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Le={value:null};Gc(f,X=>Oe(X,[],null),async(X,ee)=>{let O=ee??H,Z,Ve=null;const Be=X.toLowerCase();if(Be.endsWith(".bitymi")||Be.includes(".bitymi?")){Ls("downloading bundle ...");try{const{bundle:ye}=await Rc(X,(Se,Te,me)=>{const B=Se/1048576,G=Te?Te/(1024*1024):void 0,b=me/(1024*1024),i=Te?Math.min(99,Math.floor(Se/Te*100)):void 0,p=G?`total ${G.toFixed(1)} MB`:"total -- MB",u=G&&i!==void 0?`${B.toFixed(1)} MB downloaded (${i}%)`:`${B.toFixed(1)} MB downloaded`,v=`${b.toFixed(2)} MB/s`;nn(`downloading bundle ...
${p}, ${u}
${v}`)});if(!ye)throw new Error("Expected a .bitymi bundle");nn("parsing PLY ...");const Ge=new File([ye.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(Z=await Es(Ge,f),!O&&ye.camerasBuffer&&(O=URL.createObjectURL(new Blob([ye.camerasBuffer],{type:"application/json"}))),ye.atlasBuffer){const Se=ye.atlasBuffer.byteLength/1048576;nn(`uploading atlas ...
${Se.toFixed(1)} MB BC7`);try{const Te=Ol(ye.atlasBuffer);Ve=Nl(f,Te,!0)}catch(Te){console.warn("[atlas] failed to parse/upload atlas:",Te)}}}catch(ye){throw Tn(),ye}}else Z=await $l(X,f);const be=O?await hc(O):[];be.length>0&&w.set_preset(be[0]),Oe(Z,be,Ve)});function Oe(X,ee=[],O=null){const Z=[(X.bbox.min[0]+X.bbox.max[0])/2,(X.bbox.min[1]+X.bbox.max[1])/2,(X.bbox.min[2]+X.bbox.max[2])/2];C.setBbox(X.bbox.min,X.bbox.max),.5*Math.sqrt((X.bbox.max[0]-X.bbox.min[0])**2+(X.bbox.max[1]-X.bbox.min[1])**2+(X.bbox.max[2]-X.bbox.min[2])**2);function Ve(j,J){const ne=Ic(j,J,o,w,X.surfel_data);ne&&(C.setOrbitPivot(ne),console.log(`[pick] orbit pivot → (${ne[0].toFixed(3)}, ${ne[1].toFixed(3)}, ${ne[2].toFixed(3)})`))}function Be(){const j=Lc(w,X.surfel_data);if(j!==null&&j>.001){C.setOrbitDepth(j);return}const J=w.rotation,ne=J[2],we=J[6],Ce=J[10],de=(X.centroid[0]-w.position[0])*ne+(X.centroid[1]-w.position[1])*we+(X.centroid[2]-w.position[2])*Ce;de>.001&&C.setOrbitDepth(de)}if(ee.length===0){const j=X.bbox.max[0]-X.bbox.min[0],J=X.bbox.max[1]-X.bbox.min[1],ne=X.bbox.max[2]-X.bbox.min[2],Ce=.5*Math.sqrt(j*j+J*J+ne*ne)*.5;R.set(Z[0]-Ce,Z[1]-Ce,Z[2]-Ce,w.position);const de=R.create(Ce,Ce,Ce);R.normalize(de,de);const _e=R.create(0,1,0),fe=R.create();R.cross(_e,de,fe),R.normalize(fe,fe);const qe=R.create();R.cross(de,fe,qe);const nt=Ct.create(fe[0],qe[0],de[0],fe[1],qe[1],de[1],fe[2],qe[2],de[2]);ut.fromMat3(nt,w.rotation),w.update_buffer()}C.setCenter(R.create(X.centroid[0],X.centroid[1],X.centroid[2]));const be=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),ye="halloumi.fetch_by_id";let Ge=null;try{const j=localStorage.getItem(ye);(j==="0"||j==="1")&&(Ge=j==="1")}catch{}const Se=te.get("byid"),Te={fetchById:Se!==null?Se==="1":Ge!==null?Ge:!be,octBound:te.get("oct")==="1",acc16:te.get("acc16")==="1"},me=new uc(X,f,N,w.uniform_buffer,E,O,Te);qn({hypLegacy:te.get("hyp_legacy")==="1"},f,me.render_settings_buffer),xe.legacy_renderer=te.get("legacy")==="1",xe.legacy_renderer&&me.setLegacyRenderer(!0),xe.fetch_by_id=Te.fetchById,console.log(`[render_2dgs] fetch_by_id=${Te.fetchById} (source: ${Se!==null?"?byid":Ge!==null?"remembered":`handheld=${be}`})`),V=me,_n(o.width,o.height,f,me.render_settings_buffer),xe.atlas_enabled=O!==null;{const j=X.surfel_data,J=j.length/8;let ne=0,we=0,Ce=0;for(let _e=0;_e<J;_e++)ne+=j[_e*8],we+=j[_e*8+1],Ce+=j[_e*8+2];const de=J>0?[ne/J,we/J,Ce/J]:[0,0,0];me.setBfcParams(xe.bfc_cos,de),qn({bfc:xe.bfc},f,me.render_settings_buffer),console.log(`[bfc] flag=${xe.bfc} cos=${xe.bfc_cos} centroid=(${de[0].toFixed(3)}, ${de[1].toFixed(3)}, ${de[2].toFixed(3)})`)}let B=!1;const G=(()=>{if(O!==null)return`${O.meta.format===2?"BC7":O.meta.format===3?"ASTC 4×4":O.meta.format===7?"BC7 codebook gather (typeD)":`format=${O.meta.format}`} ${O.meta.width}×${O.meta.height}, ${O.meta.n_layers} layers`;const j=f.features.has("texture-compression-bc"),J=f.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(j?["BC7"]:[]).concat(J?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",G),ni(X.sh_bias,f,me.render_settings_buffer),ti(xe.gaussian_scaling,f,me.render_settings_buffer),xe.sh_bias=X.sh_bias;const b=X.num_points.toLocaleString(),i={stats:`${b} surfels · -- fps`};ve.addMonitor(i,"stats",{label:"Stats",interval:200}),ve.addMonitor({atlas:G},"atlas",{label:"Atlas"});const p={stages:"— ms · awaiting timestamp data"};ve.addMonitor(p,"stages",{label:"Stages",interval:500});let u=null;if(me.timeQueryEnabled){u=document.createElement("canvas"),u.width=280,u.height=24,u.style.cssText="position:fixed;right:8px;bottom:8px;width:280px;height:24px;background:#0008;border:1px solid #2a2a2a;border-radius:4px;font-family:ui-monospace,Menlo,monospace;pointer-events:none;z-index:1000;",document.body.appendChild(u);const j=ne=>{const we=u.getContext("2d");if(!we)return;const Ce=u.width,de=u.height;if(we.clearRect(0,0,Ce,de),!ne||ne.total<=0){we.fillStyle="#888",we.font="11px ui-monospace,Menlo,monospace",we.fillText("awaiting GPU timestamps…",8,16);return}const _e=[{label:"cull",ms:ne.cull,color:"#3aa3ff"},{label:"pre",ms:ne.preprocess,color:"#3ad27a"},{label:"sort",ms:ne.sort,color:"#ffa53a"},{label:"render",ms:ne.render,color:"#ff5566"}],fe=Math.max(.001,_e.reduce((nt,dt)=>nt+dt.ms,0));let qe=0;we.font="10px ui-monospace,Menlo,monospace",we.textBaseline="middle";for(const nt of _e){const dt=nt.ms/fe*Ce;we.fillStyle=nt.color,we.fillRect(qe,0,dt,de),dt>=38&&(we.fillStyle="#000c",we.fillText(`${nt.label} ${nt.ms.toFixed(1)}`,qe+4,de/2)),qe+=dt}};setInterval(()=>{B||me.readPerfMetrics({silent:!0}).then(()=>{const ne=me.lastStageBreakdownMs;j(ne),ne&&(p.stages=`${ne.total.toFixed(1)} ms · cull ${ne.cull.toFixed(1)} / pre ${ne.preprocess.toFixed(1)} / sort ${ne.sort.toFixed(1)} / render ${ne.render.toFixed(1)}`)}).catch(ne=>console.warn("[perf] readPerfMetrics failed:",ne))},500)}const v=.4,x=3,k=.3;let S=null,r=0,m=0;const d=lt.create(),h=Ct.create();let a=ee.length>0?0:-1;const _={view:ee.length>0?`${a+1} / ${ee.length}: ${ee[a].img_name??a}`:"— no presets —"};ve.addMonitor(_,"view",{label:"View",interval:100});function y(j){const J=Ct.create(j[0],j[1],j[2],j[4],j[5],j[6],j[8],j[9],j[10]);return lt.fromMat(J)}function g(j,J){S={fromPos:R.clone(w.position),toPos:R.clone(j.position),fromQuat:lt.normalize(y(w.rotation)),toQuat:lt.normalize(y(j.rotation)),target:j,t:0,duration:Math.max(.01,J)}}const D=(j,J=!0)=>{if(ee.length===0)return;a=(j%ee.length+ee.length)%ee.length;const ne=ee[a];J?g(ne,v):(w.set_preset(ne),C.resetToCamera(),Be()),_.view=`${a+1} / ${ee.length}: ${ee[a].img_name??a}`};ee.length>0&&(ve.addButton({title:"◀ Prev view"}).on("click",()=>D(a-1)),ve.addButton({title:"Next view ▶"}).on("click",()=>D(a+1)));const U=ee.length>0?vi(ee,{tiltDownDeg:15,alignFirst:!0}):null,$=U?Ec(ee,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let ce=0;const ie=12;Le.value={onAnimateStart:()=>{ce=0},onAnimateStop:()=>{C.resetToCamera(),Be()}},ve.addInput(xe,"render_scale",{label:"Render scale",min:.25,max:ae,step:.25}).on("change",j=>{const J=Math.max(.25,j.value),ne=Math.max(1,Math.ceil(J*o.clientWidth)),we=Math.max(1,Math.ceil(J*o.clientHeight));(o.width!==ne||o.height!==we)&&(o.width=ne,o.height=we,z())}),ve.addInput(xe,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",j=>ti(j.value,f,me.render_settings_buffer)),ve.addInput(xe,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",j=>ni(j.value,f,me.render_settings_buffer)),ve.addInput(xe,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",j=>{me.bgColor=[j.value.r,j.value.g,j.value.b,j.value.a]});const re=O?O.meta.format===3?"Atlas (ASTC)":"Atlas (BC7)":"Atlas";ve.addInput(xe,"atlas_enabled",{label:re}).on("change",j=>me.setAtlasEnabled(j.value)),me.hasMips&&(me.setMipMode(xe.mips),ve.addInput(xe,"mips",{label:"Mips (trilinear)"}).on("change",j=>me.setMipMode(j.value))),ve.addInput(xe,"legacy_renderer",{label:"Legacy renderer"}).on("change",j=>me.setLegacyRenderer(j.value)),ve.addInput(xe,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",j=>{me.setFetchById(j.value);try{localStorage.setItem("halloumi.fetch_by_id",j.value?"1":"0")}catch{}}),ve.addInput(xe,"bfc",{label:"Backface"}).on("change",j=>qn({bfc:j.value},f,me.render_settings_buffer));const ge={aspect:"canvas"},Me=ve.addFolder({title:"📸 Screenshot",expanded:!1});Me.addInput(ge,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const he={s:"pick a size to capture"};Me.addMonitor(he,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const Ee=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let Ie=null;function Re(j){let J;if(ge.aspect==="canvas")J=o.width/o.height;else{const[_e,fe]=ge.aspect.split(":").map(Number);J=_e/fe}const ne=f.limits.maxTextureDimension2D;let we,Ce;if(j==="canvas"&&ge.aspect==="canvas")we=o.width,Ce=o.height;else{const _e=j==="canvas"?Math.max(o.width,o.height):j;J>=1?(we=_e,Ce=Math.round(_e/J)):(Ce=_e,we=Math.round(_e*J))}const de=Math.min(1,ne/Math.max(we,Ce));return we=Math.max(2,Math.round(we*de)&-2),Ce=Math.max(2,Math.round(Ce*de)&-2),[we,Ce]}function We(j,J){const ne=URL.createObjectURL(j),we=document.createElement("a");we.href=ne,we.download=J,document.body.appendChild(we),we.click(),we.remove(),setTimeout(()=>URL.revokeObjectURL(ne),1e4)}async function Xe(j,J){var _e;const ne=(j.size/1048576).toFixed(1),we=window;if(typeof we.showSaveFilePicker=="function")try{const fe=await we.showSaveFilePicker({suggestedName:J,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),qe=await fe.createWritable();return await qe.write(j),await qe.close(),`saved ${fe.name??J} (${ne} MB) where you chose`}catch(fe){if((fe==null?void 0:fe.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Ce=new File([j],J,{type:"image/png"}),de=navigator;if(de.share&&((_e=de.canShare)!=null&&_e.call(de,{files:[Ce]})))try{return await de.share({files:[Ce],title:J}),`shared ${J} (${ne} MB) via share sheet`}catch(fe){if((fe==null?void 0:fe.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return We(j,J),`downloaded ${J} (${ne} MB) to your browser's Downloads folder`}async function Ke(j){if(B)return;const[J,ne]=Re(j);he.s=`rendering ${J}×${ne}…`;const we=o.width,Ce=o.height;w.setRenderSize(J,ne),_n(J,ne,f,me.render_settings_buffer);const de=f.createTexture({size:[J,ne,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),_e=Math.ceil(J*4/256)*256,fe=f.createBuffer({size:_e*ne,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),qe=f.createCommandEncoder({label:"screenshot"});me.frame(qe,de.createView(),!1),qe.copyTextureToBuffer({texture:de},{buffer:fe,bytesPerRow:_e,rowsPerImage:ne},[J,ne,1]),f.queue.submit([qe.finish()]),w.clearRenderSize(),_n(we,Ce,f,me.render_settings_buffer);try{await fe.mapAsync(GPUMapMode.READ);const nt=new Uint8Array(fe.getMappedRange()),dt=new Uint8ClampedArray(J*ne*4);for(let ht=0;ht<ne;ht++)dt.set(nt.subarray(ht*_e,ht*_e+J*4),ht*J*4);for(let ht=3;ht<dt.length;ht+=4)dt[ht]=255;fe.unmap();const zt=document.createElement("canvas");zt.width=J,zt.height=ne,zt.getContext("2d").putImageData(new ImageData(dt,J,ne),0,0);const yt=await new Promise((ht,mn)=>zt.toBlob(kt=>kt?ht(kt):mn(new Error("toBlob failed")),"image/png")),Wt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),rn=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),jt=`${Wt}_${J}x${ne}_${rn}.png`;Ie={blob:yt,name:jt},he.s=await Xe(yt,jt)}catch(nt){console.error("[screenshot]",nt),he.s=`failed: ${nt}`}finally{fe.destroy(),de.destroy()}}{const j=document.createElement("div");j.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const J=(we,Ce,de)=>{const _e=document.createElement("button");_e.className="tp-btnv_b",_e.textContent=we,_e.title=Ce,_e.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",_e.addEventListener("click",de),j.appendChild(_e)};J("Canvas","current canvas size",()=>{Ke("canvas")});for(const[we,Ce]of Ee)J(we,`${Ce} px long edge`,()=>{Ke(Ce)});(Me.element.querySelector(".tp-fldv_c")??Me.element).appendChild(j)}Me.addButton({title:"⬇ Download last"}).on("click",()=>{if(!Ie){he.s="nothing captured yet";return}We(Ie.blob,Ie.name),he.s=`downloaded ${Ie.name} to your browser's Downloads folder`}),ve.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(ee.length>0)w.set_preset(ee[0]);else{const j=X.bbox.max[0]-X.bbox.min[0],J=X.bbox.max[1]-X.bbox.min[1],ne=X.bbox.max[2]-X.bbox.min[2],Ce=.5*Math.sqrt(j*j+J*J+ne*ne)*.5;R.set(Z[0]-Ce,Z[1]-Ce,Z[2]-Ce,w.position);const de=R.create(Ce,Ce,Ce);R.normalize(de,de);const _e=R.create();R.cross(R.create(0,1,0),de,_e),R.normalize(_e,_e);const fe=R.create();R.cross(de,_e,fe);const qe=Ct.create(_e[0],fe[0],de[0],_e[1],fe[1],de[1],_e[2],fe[2],de[2]);ut.fromMat3(qe,w.rotation),w.update_buffer()}C.resetToCamera(),Be()});const je={result:"— click Benchmark —"};ve.addMonitor(je,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});const Qe={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function it(){const J=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ne of Object.keys(Qe))if(J.startsWith(ne))return ne;return null}const He=document.createElement("div");He.id="bench-overlay",He.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(He);function st(j,J,ne){const we=Math.floor(J/Math.max(1,ne)*100),Ce=32,de=Math.floor(J/Math.max(1,ne)*Ce),_e="█".repeat(de)+"░".repeat(Ce-de);He.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${j}</div><div>[${_e}] ${we}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${J} / ${ne} frames · offscreen · pipelined · no vsync</div>`,He.style.display="block"}function ot(){He.style.display="none"}async function rt(j=10,J=200){if(B)return;if(ee.length===0){je.result="no cameras to benchmark";return}B=!0;const ne=Y,we=xe.animate,Ce=new Float32Array(w.position),de=new Float32Array(w.rotation);Y=!1,xe.animate=!1,ve.refresh(),S=null,C.enabled=!1;const _e=it(),fe=_e?Qe[_e]:null,qe=(fe==null?void 0:fe.w)??o.width,nt=(fe==null?void 0:fe.h)??o.height,dt=(fe==null?void 0:fe.fovY)??w.getFov(),zt=_e?`${_e} · ${qe>=4e3/4+500?"images_4":"images_2"}`:"custom",yt=o.width,Wt=o.height,rn=w.getFov();o.width=qe,o.height=nt,w.setFov(dt),_n(qe,nt,f,me.render_settings_buffer);const jt=f.createTexture({size:[qe,nt,1],format:N,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),ht=jt.createView(),mn=()=>{const ft=f.createCommandEncoder();me.frame(ft,ht,!1),f.queue.submit([ft.finish()])},kt=()=>new Promise(ft=>setTimeout(ft,0)),Qn=20,In=async(ft,Gt)=>{let Kt=0,Mt=0;for(st(Gt,0,ft),await kt();Mt<ft;){const on=Math.min(Qn,ft-Mt),Bt=performance.now();for(let an=0;an<on;an++)w.set_preset(ee[(Mt+an)%ee.length]),mn();await f.queue.onSubmittedWorkDone();const Jn=performance.now();Kt+=Jn-Bt,Mt+=on,st(Gt,Mt,ft),await kt()}return Kt};try{await In(j,"Warming up");const Gt=await In(J,"Benchmarking")/J,Kt=1e3/Gt,Mt=X.num_points??X.surfel_data.length/8,on=(dt*180/Math.PI).toFixed(1),Bt=`${Kt.toFixed(1)} FPS  (${Gt.toFixed(2)} ms/frame)
${qe}×${nt} · fovY ${on}° · ${zt}
${Mt.toLocaleString()} surfels · ${j}w+${J}b · pipelined`;je.result=Bt,console.log("[bench]",Bt.replace(/\n/g,"  |  "))}catch(ft){console.error("[bench] failed:",ft),je.result=`bench failed: ${ft}`}finally{ot(),jt.destroy(),o.width=yt,o.height=Wt,w.setFov(rn),_n(yt,Wt,f,me.render_settings_buffer),w.position.set(Ce),w.rotation.set(de),w.update_buffer(),C.enabled=!ne,Y=ne,xe.animate=we,ve.refresh(),B=!1}}ve.addButton({title:"📊 Benchmark"}).on("click",()=>rt()),document.addEventListener("keydown",j=>{const J=j.key;if(J>="0"&&J<="9"&&ee.length>0){const ne=parseInt(J);ne<ee.length&&D(ne)}else J==="ArrowLeft"||J==="PageUp"?(D(a-1),j.preventDefault()):J==="ArrowRight"||J==="PageDown"?(D(a+1),j.preventDefault()):(J==="d"||J==="D")&&me.debugReadSortedIndices(30).catch(ne=>console.error("[DEBUG] readback failed:",ne))});function Je(j,J){const ne=o.getBoundingClientRect(),we=window.devicePixelRatio||1;return[(j-ne.left)*we,(J-ne.top)*we]}o.addEventListener("dblclick",j=>{const[J,ne]=Je(j.clientX,j.clientY);Ve(J,ne)});let $e=0,et=0,Ye=0;o.addEventListener("pointerdown",j=>{if(j.pointerType!=="touch")return;const J=performance.now(),ne=J-$e,we=j.clientX-et,Ce=j.clientY-Ye;if(ne>0&&ne<300&&we*we+Ce*Ce<40*40){const[de,_e]=Je(j.clientX,j.clientY);Ve(de,_e),$e=0}else $e=J,et=j.clientX,Ye=j.clientY});function ct(){return M}let tt=performance.now(),Et=60,xt=Promise.resolve(),gt=0;async function wt(){var Ce;const j=performance.now(),J=Math.min((j-tt)/1e3,.1);if(tt=j,J>0){const de=((Ce=me.lastStageBreakdownMs)==null?void 0:Ce.total)??0,_e=de>.5?1e3/de:1/J;Et=Et*.9+_e*.1,i.stats=`${b} surfels · ${Math.round(Et)} fps`}if(B){requestAnimationFrame(wt);return}if(ct()&&(S||Y)&&(S=null,C.resetToCamera(),Be(),Y&&(Y=!1,xe.animate=!1,ve.refresh())),Y&&xe.animateMode==="circle"&&U){ce+=J/ie,ce>=1&&(ce-=1);const de=bi(U,ce);w.set_preset(de),C.update(J);const _e=f.createCommandEncoder();me.frame(_e,l.getCurrentTexture().createView()),f.queue.submit([_e.finish()]),gt++,gt===2&&Tn(),requestAnimationFrame(wt);return}if(S){S.t+=J/S.duration;const de=Math.min(1,S.t),_e=de*de*(3-2*de);R.lerp(S.fromPos,S.toPos,_e,w.position),lt.slerp(S.fromQuat,S.toQuat,_e,d),Ct.fromQuat(d,h),ut.fromMat3(h,w.rotation),w.update_buffer(),S.t>=1&&(w.set_preset(S.target),S=null,Y?ee.length>0&&(r=k):(C.resetToCamera(),Be()))}else if(Y&&!ct()){const de=xe.animateMode==="circle"&&$.length>0,_e=de?$:ee;if(_e.length!==0){if(r-=J,r<=0){const qe=((de?m:a)+1)%_e.length;de?m=qe:a=qe;const nt=de?x/8:x;g(_e[qe],nt),de||(_.view=`${a+1} / ${ee.length}: ${ee[a].img_name??a}`)}}}C.update(J),L(),Q(),await xt;const ne=f.createCommandEncoder(),we=l.getCurrentTexture().createView();me.frame(ne,we),f.queue.submit([ne.finish()]),xt=f.queue.onSubmittedWorkDone(),gt++,gt===2&&Tn(),requestAnimationFrame(wt)}requestAnimationFrame(wt)}}(function(){let l="dev";for(const E of Array.from(document.querySelectorAll('script[type="module"]'))){const C=E.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(C){l=C[1];break}}const f=document.createElement("div");f.textContent="v "+l,f.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(f.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(f)})();(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(o===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const l=[];o.features.has("timestamp-query")&&l.push("timestamp-query"),o.features.has("texture-compression-bc")&&l.push("texture-compression-bc"),o.features.has("texture-compression-astc")&&l.push("texture-compression-astc"),console.log("[adapter]",o.info??"(unknown)"),console.log("[adapter] features:",Array.from(o.features)),console.log("[adapter] BC7:",o.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",o.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:o.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxTextureDimension2D:o.limits.maxTextureDimension2D});const f=await o.requestDevice({requiredFeatures:l,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:o.limits.maxComputeWorkgroupStorageSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize}}),E=document.querySelector("#webgpu-canvas");Rl(E!==null);const w=E.getContext("webgpu");Uc(E,w,f,l)})();
