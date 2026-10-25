var ec=Object.defineProperty;var tc=(o,r,a)=>r in o?ec(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a;var R=(o,r,a)=>(tc(o,typeof r!="symbol"?r+"":r,a),a);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))v(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const B of b.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&v(B)}).observe(document,{childList:!0,subtree:!0});function a(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function v(p){if(p.ep)return;p.ep=!0;const b=a(p);fetch(p.href,b)}})();function nc(o,r){return class extends o{constructor(...a){super(...a),r(this)}}}const sc=nc(Array,o=>o.fill(0));let Ne=1e-6;function rc(o){function r(k=0,w=0){const S=new o(2);return k!==void 0&&(S[0]=k,w!==void 0&&(S[1]=w)),S}const a=r;function v(k,w,S){const i=S??new o(2);return i[0]=k,i[1]=w,i}function p(k,w){const S=w??new o(2);return S[0]=Math.ceil(k[0]),S[1]=Math.ceil(k[1]),S}function b(k,w){const S=w??new o(2);return S[0]=Math.floor(k[0]),S[1]=Math.floor(k[1]),S}function B(k,w){const S=w??new o(2);return S[0]=Math.round(k[0]),S[1]=Math.round(k[1]),S}function C(k,w=0,S=1,i){const g=i??new o(2);return g[0]=Math.min(S,Math.max(w,k[0])),g[1]=Math.min(S,Math.max(w,k[1])),g}function T(k,w,S){const i=S??new o(2);return i[0]=k[0]+w[0],i[1]=k[1]+w[1],i}function M(k,w,S,i){const g=i??new o(2);return g[0]=k[0]+w[0]*S,g[1]=k[1]+w[1]*S,g}function V(k,w){const S=k[0],i=k[1],g=w[0],h=w[1],f=Math.sqrt(S*S+i*i),c=Math.sqrt(g*g+h*h),m=f*c,E=m&&ce(k,w)/m;return Math.acos(E)}function F(k,w,S){const i=S??new o(2);return i[0]=k[0]-w[0],i[1]=k[1]-w[1],i}const G=F;function q(k,w){return Math.abs(k[0]-w[0])<Ne&&Math.abs(k[1]-w[1])<Ne}function oe(k,w){return k[0]===w[0]&&k[1]===w[1]}function L(k,w,S,i){const g=i??new o(2);return g[0]=k[0]+S*(w[0]-k[0]),g[1]=k[1]+S*(w[1]-k[1]),g}function I(k,w,S,i){const g=i??new o(2);return g[0]=k[0]+S[0]*(w[0]-k[0]),g[1]=k[1]+S[1]*(w[1]-k[1]),g}function X(k,w,S){const i=S??new o(2);return i[0]=Math.max(k[0],w[0]),i[1]=Math.max(k[1],w[1]),i}function H(k,w,S){const i=S??new o(2);return i[0]=Math.min(k[0],w[0]),i[1]=Math.min(k[1],w[1]),i}function Y(k,w,S){const i=S??new o(2);return i[0]=k[0]*w,i[1]=k[1]*w,i}const Z=Y;function ie(k,w,S){const i=S??new o(2);return i[0]=k[0]/w,i[1]=k[1]/w,i}function _e(k,w){const S=w??new o(2);return S[0]=1/k[0],S[1]=1/k[1],S}const he=_e;function se(k,w,S){const i=S??new o(3),g=k[0]*w[1]-k[1]*w[0];return i[0]=0,i[1]=0,i[2]=g,i}function ce(k,w){return k[0]*w[0]+k[1]*w[1]}function Te(k){const w=k[0],S=k[1];return Math.sqrt(w*w+S*S)}const de=Te;function Ie(k){const w=k[0],S=k[1];return w*w+S*S}const te=Ie;function ge(k,w){const S=k[0]-w[0],i=k[1]-w[1];return Math.sqrt(S*S+i*i)}const Ee=ge;function we(k,w){const S=k[0]-w[0],i=k[1]-w[1];return S*S+i*i}const N=we;function J(k,w){const S=w??new o(2),i=k[0],g=k[1],h=Math.sqrt(i*i+g*g);return h>1e-5?(S[0]=i/h,S[1]=g/h):(S[0]=0,S[1]=0),S}function j(k,w){const S=w??new o(2);return S[0]=-k[0],S[1]=-k[1],S}function pe(k,w){const S=w??new o(2);return S[0]=k[0],S[1]=k[1],S}const ze=pe;function ye(k,w,S){const i=S??new o(2);return i[0]=k[0]*w[0],i[1]=k[1]*w[1],i}const Me=ye;function re(k,w,S){const i=S??new o(2);return i[0]=k[0]/w[0],i[1]=k[1]/w[1],i}const ve=re;function Re(k=1,w){const S=w??new o(2),i=Math.random()*2*Math.PI;return S[0]=Math.cos(i)*k,S[1]=Math.sin(i)*k,S}function z(k){const w=k??new o(2);return w[0]=0,w[1]=0,w}function Q(k,w,S){const i=S??new o(2),g=k[0],h=k[1];return i[0]=g*w[0]+h*w[4]+w[12],i[1]=g*w[1]+h*w[5]+w[13],i}function y(k,w,S){const i=S??new o(2),g=k[0],h=k[1];return i[0]=w[0]*g+w[4]*h+w[8],i[1]=w[1]*g+w[5]*h+w[9],i}function l(k,w,S,i){const g=i??new o(2),h=k[0]-w[0],f=k[1]-w[1],c=Math.sin(S),m=Math.cos(S);return g[0]=h*m-f*c+w[0],g[1]=h*c+f*m+w[1],g}function _(k,w,S){const i=S??new o(2);return J(k,i),Y(i,w,i)}function u(k,w,S){const i=S??new o(2);return Te(k)>w?_(k,w,i):pe(k,i)}function x(k,w,S){const i=S??new o(2);return L(k,w,.5,i)}return{create:r,fromValues:a,set:v,ceil:p,floor:b,round:B,clamp:C,add:T,addScaled:M,angle:V,subtract:F,sub:G,equalsApproximately:q,equals:oe,lerp:L,lerpV:I,max:X,min:H,mulScalar:Y,scale:Z,divScalar:ie,inverse:_e,invert:he,cross:se,dot:ce,length:Te,len:de,lengthSq:Ie,lenSq:te,distance:ge,dist:Ee,distanceSq:we,distSq:N,normalize:J,negate:j,copy:pe,clone:ze,multiply:ye,mul:Me,divide:re,div:ve,random:Re,zero:z,transformMat4:Q,transformMat3:y,rotate:l,setLength:_,truncate:u,midpoint:x}}const gi=new Map;function Yi(o){let r=gi.get(o);return r||(r=rc(o),gi.set(o,r)),r}function ic(o){function r(c,m,E){const P=new o(3);return c!==void 0&&(P[0]=c,m!==void 0&&(P[1]=m,E!==void 0&&(P[2]=E))),P}const a=r;function v(c,m,E,P){const D=P??new o(3);return D[0]=c,D[1]=m,D[2]=E,D}function p(c,m){const E=m??new o(3);return E[0]=Math.ceil(c[0]),E[1]=Math.ceil(c[1]),E[2]=Math.ceil(c[2]),E}function b(c,m){const E=m??new o(3);return E[0]=Math.floor(c[0]),E[1]=Math.floor(c[1]),E[2]=Math.floor(c[2]),E}function B(c,m){const E=m??new o(3);return E[0]=Math.round(c[0]),E[1]=Math.round(c[1]),E[2]=Math.round(c[2]),E}function C(c,m=0,E=1,P){const D=P??new o(3);return D[0]=Math.min(E,Math.max(m,c[0])),D[1]=Math.min(E,Math.max(m,c[1])),D[2]=Math.min(E,Math.max(m,c[2])),D}function T(c,m,E){const P=E??new o(3);return P[0]=c[0]+m[0],P[1]=c[1]+m[1],P[2]=c[2]+m[2],P}function M(c,m,E,P){const D=P??new o(3);return D[0]=c[0]+m[0]*E,D[1]=c[1]+m[1]*E,D[2]=c[2]+m[2]*E,D}function V(c,m){const E=c[0],P=c[1],D=c[2],O=m[0],K=m[1],ae=m[2],ne=Math.sqrt(E*E+P*P+D*D),le=Math.sqrt(O*O+K*K+ae*ae),Pe=ne*le,Be=Pe&&ce(c,m)/Pe;return Math.acos(Be)}function F(c,m,E){const P=E??new o(3);return P[0]=c[0]-m[0],P[1]=c[1]-m[1],P[2]=c[2]-m[2],P}const G=F;function q(c,m){return Math.abs(c[0]-m[0])<Ne&&Math.abs(c[1]-m[1])<Ne&&Math.abs(c[2]-m[2])<Ne}function oe(c,m){return c[0]===m[0]&&c[1]===m[1]&&c[2]===m[2]}function L(c,m,E,P){const D=P??new o(3);return D[0]=c[0]+E*(m[0]-c[0]),D[1]=c[1]+E*(m[1]-c[1]),D[2]=c[2]+E*(m[2]-c[2]),D}function I(c,m,E,P){const D=P??new o(3);return D[0]=c[0]+E[0]*(m[0]-c[0]),D[1]=c[1]+E[1]*(m[1]-c[1]),D[2]=c[2]+E[2]*(m[2]-c[2]),D}function X(c,m,E){const P=E??new o(3);return P[0]=Math.max(c[0],m[0]),P[1]=Math.max(c[1],m[1]),P[2]=Math.max(c[2],m[2]),P}function H(c,m,E){const P=E??new o(3);return P[0]=Math.min(c[0],m[0]),P[1]=Math.min(c[1],m[1]),P[2]=Math.min(c[2],m[2]),P}function Y(c,m,E){const P=E??new o(3);return P[0]=c[0]*m,P[1]=c[1]*m,P[2]=c[2]*m,P}const Z=Y;function ie(c,m,E){const P=E??new o(3);return P[0]=c[0]/m,P[1]=c[1]/m,P[2]=c[2]/m,P}function _e(c,m){const E=m??new o(3);return E[0]=1/c[0],E[1]=1/c[1],E[2]=1/c[2],E}const he=_e;function se(c,m,E){const P=E??new o(3),D=c[2]*m[0]-c[0]*m[2],O=c[0]*m[1]-c[1]*m[0];return P[0]=c[1]*m[2]-c[2]*m[1],P[1]=D,P[2]=O,P}function ce(c,m){return c[0]*m[0]+c[1]*m[1]+c[2]*m[2]}function Te(c){const m=c[0],E=c[1],P=c[2];return Math.sqrt(m*m+E*E+P*P)}const de=Te;function Ie(c){const m=c[0],E=c[1],P=c[2];return m*m+E*E+P*P}const te=Ie;function ge(c,m){const E=c[0]-m[0],P=c[1]-m[1],D=c[2]-m[2];return Math.sqrt(E*E+P*P+D*D)}const Ee=ge;function we(c,m){const E=c[0]-m[0],P=c[1]-m[1],D=c[2]-m[2];return E*E+P*P+D*D}const N=we;function J(c,m){const E=m??new o(3),P=c[0],D=c[1],O=c[2],K=Math.sqrt(P*P+D*D+O*O);return K>1e-5?(E[0]=P/K,E[1]=D/K,E[2]=O/K):(E[0]=0,E[1]=0,E[2]=0),E}function j(c,m){const E=m??new o(3);return E[0]=-c[0],E[1]=-c[1],E[2]=-c[2],E}function pe(c,m){const E=m??new o(3);return E[0]=c[0],E[1]=c[1],E[2]=c[2],E}const ze=pe;function ye(c,m,E){const P=E??new o(3);return P[0]=c[0]*m[0],P[1]=c[1]*m[1],P[2]=c[2]*m[2],P}const Me=ye;function re(c,m,E){const P=E??new o(3);return P[0]=c[0]/m[0],P[1]=c[1]/m[1],P[2]=c[2]/m[2],P}const ve=re;function Re(c=1,m){const E=m??new o(3),P=Math.random()*2*Math.PI,D=Math.random()*2-1,O=Math.sqrt(1-D*D)*c;return E[0]=Math.cos(P)*O,E[1]=Math.sin(P)*O,E[2]=D*c,E}function z(c){const m=c??new o(3);return m[0]=0,m[1]=0,m[2]=0,m}function Q(c,m,E){const P=E??new o(3),D=c[0],O=c[1],K=c[2],ae=m[3]*D+m[7]*O+m[11]*K+m[15]||1;return P[0]=(m[0]*D+m[4]*O+m[8]*K+m[12])/ae,P[1]=(m[1]*D+m[5]*O+m[9]*K+m[13])/ae,P[2]=(m[2]*D+m[6]*O+m[10]*K+m[14])/ae,P}function y(c,m,E){const P=E??new o(3),D=c[0],O=c[1],K=c[2];return P[0]=D*m[0*4+0]+O*m[1*4+0]+K*m[2*4+0],P[1]=D*m[0*4+1]+O*m[1*4+1]+K*m[2*4+1],P[2]=D*m[0*4+2]+O*m[1*4+2]+K*m[2*4+2],P}function l(c,m,E){const P=E??new o(3),D=c[0],O=c[1],K=c[2];return P[0]=D*m[0]+O*m[4]+K*m[8],P[1]=D*m[1]+O*m[5]+K*m[9],P[2]=D*m[2]+O*m[6]+K*m[10],P}function _(c,m,E){const P=E??new o(3),D=m[0],O=m[1],K=m[2],ae=m[3]*2,ne=c[0],le=c[1],Pe=c[2],Be=O*Pe-K*le,ke=K*ne-D*Pe,Ce=D*le-O*ne;return P[0]=ne+Be*ae+(O*Ce-K*ke)*2,P[1]=le+ke*ae+(K*Be-D*Ce)*2,P[2]=Pe+Ce*ae+(D*ke-O*Be)*2,P}function u(c,m){const E=m??new o(3);return E[0]=c[12],E[1]=c[13],E[2]=c[14],E}function x(c,m,E){const P=E??new o(3),D=m*4;return P[0]=c[D+0],P[1]=c[D+1],P[2]=c[D+2],P}function k(c,m){const E=m??new o(3),P=c[0],D=c[1],O=c[2],K=c[4],ae=c[5],ne=c[6],le=c[8],Pe=c[9],Be=c[10];return E[0]=Math.sqrt(P*P+D*D+O*O),E[1]=Math.sqrt(K*K+ae*ae+ne*ne),E[2]=Math.sqrt(le*le+Pe*Pe+Be*Be),E}function w(c,m,E,P){const D=P??new o(3),O=[],K=[];return O[0]=c[0]-m[0],O[1]=c[1]-m[1],O[2]=c[2]-m[2],K[0]=O[0],K[1]=O[1]*Math.cos(E)-O[2]*Math.sin(E),K[2]=O[1]*Math.sin(E)+O[2]*Math.cos(E),D[0]=K[0]+m[0],D[1]=K[1]+m[1],D[2]=K[2]+m[2],D}function S(c,m,E,P){const D=P??new o(3),O=[],K=[];return O[0]=c[0]-m[0],O[1]=c[1]-m[1],O[2]=c[2]-m[2],K[0]=O[2]*Math.sin(E)+O[0]*Math.cos(E),K[1]=O[1],K[2]=O[2]*Math.cos(E)-O[0]*Math.sin(E),D[0]=K[0]+m[0],D[1]=K[1]+m[1],D[2]=K[2]+m[2],D}function i(c,m,E,P){const D=P??new o(3),O=[],K=[];return O[0]=c[0]-m[0],O[1]=c[1]-m[1],O[2]=c[2]-m[2],K[0]=O[0]*Math.cos(E)-O[1]*Math.sin(E),K[1]=O[0]*Math.sin(E)+O[1]*Math.cos(E),K[2]=O[2],D[0]=K[0]+m[0],D[1]=K[1]+m[1],D[2]=K[2]+m[2],D}function g(c,m,E){const P=E??new o(3);return J(c,P),Y(P,m,P)}function h(c,m,E){const P=E??new o(3);return Te(c)>m?g(c,m,P):pe(c,P)}function f(c,m,E){const P=E??new o(3);return L(c,m,.5,P)}return{create:r,fromValues:a,set:v,ceil:p,floor:b,round:B,clamp:C,add:T,addScaled:M,angle:V,subtract:F,sub:G,equalsApproximately:q,equals:oe,lerp:L,lerpV:I,max:X,min:H,mulScalar:Y,scale:Z,divScalar:ie,inverse:_e,invert:he,cross:se,dot:ce,length:Te,len:de,lengthSq:Ie,lenSq:te,distance:ge,dist:Ee,distanceSq:we,distSq:N,normalize:J,negate:j,copy:pe,clone:ze,multiply:ye,mul:Me,divide:re,div:ve,random:Re,zero:z,transformMat4:Q,transformMat4Upper3x3:y,transformMat3:l,transformQuat:_,getTranslation:u,getAxis:x,getScaling:k,rotateX:w,rotateY:S,rotateZ:i,setLength:g,truncate:h,midpoint:f}}const wi=new Map;function As(o){let r=wi.get(o);return r||(r=ic(o),wi.set(o,r)),r}function oc(o){const r=Yi(o),a=As(o);function v(l,_,u,x,k,w,S,i,g){const h=new o(12);return h[3]=0,h[7]=0,h[11]=0,l!==void 0&&(h[0]=l,_!==void 0&&(h[1]=_,u!==void 0&&(h[2]=u,x!==void 0&&(h[4]=x,k!==void 0&&(h[5]=k,w!==void 0&&(h[6]=w,S!==void 0&&(h[8]=S,i!==void 0&&(h[9]=i,g!==void 0&&(h[10]=g))))))))),h}function p(l,_,u,x,k,w,S,i,g,h){const f=h??new o(12);return f[0]=l,f[1]=_,f[2]=u,f[3]=0,f[4]=x,f[5]=k,f[6]=w,f[7]=0,f[8]=S,f[9]=i,f[10]=g,f[11]=0,f}function b(l,_){const u=_??new o(12);return u[0]=l[0],u[1]=l[1],u[2]=l[2],u[3]=0,u[4]=l[4],u[5]=l[5],u[6]=l[6],u[7]=0,u[8]=l[8],u[9]=l[9],u[10]=l[10],u[11]=0,u}function B(l,_){const u=_??new o(12),x=l[0],k=l[1],w=l[2],S=l[3],i=x+x,g=k+k,h=w+w,f=x*i,c=k*i,m=k*g,E=w*i,P=w*g,D=w*h,O=S*i,K=S*g,ae=S*h;return u[0]=1-m-D,u[1]=c+ae,u[2]=E-K,u[3]=0,u[4]=c-ae,u[5]=1-f-D,u[6]=P+O,u[7]=0,u[8]=E+K,u[9]=P-O,u[10]=1-f-m,u[11]=0,u}function C(l,_){const u=_??new o(12);return u[0]=-l[0],u[1]=-l[1],u[2]=-l[2],u[4]=-l[4],u[5]=-l[5],u[6]=-l[6],u[8]=-l[8],u[9]=-l[9],u[10]=-l[10],u}function T(l,_,u){const x=u??new o(12);return x[0]=l[0]*_,x[1]=l[1]*_,x[2]=l[2]*_,x[4]=l[4]*_,x[5]=l[5]*_,x[6]=l[6]*_,x[8]=l[8]*_,x[9]=l[9]*_,x[10]=l[10]*_,x}const M=T;function V(l,_,u){const x=u??new o(12);return x[0]=l[0]+_[0],x[1]=l[1]+_[1],x[2]=l[2]+_[2],x[4]=l[4]+_[4],x[5]=l[5]+_[5],x[6]=l[6]+_[6],x[8]=l[8]+_[8],x[9]=l[9]+_[9],x[10]=l[10]+_[10],x}function F(l,_){const u=_??new o(12);return u[0]=l[0],u[1]=l[1],u[2]=l[2],u[4]=l[4],u[5]=l[5],u[6]=l[6],u[8]=l[8],u[9]=l[9],u[10]=l[10],u}const G=F;function q(l,_){return Math.abs(l[0]-_[0])<Ne&&Math.abs(l[1]-_[1])<Ne&&Math.abs(l[2]-_[2])<Ne&&Math.abs(l[4]-_[4])<Ne&&Math.abs(l[5]-_[5])<Ne&&Math.abs(l[6]-_[6])<Ne&&Math.abs(l[8]-_[8])<Ne&&Math.abs(l[9]-_[9])<Ne&&Math.abs(l[10]-_[10])<Ne}function oe(l,_){return l[0]===_[0]&&l[1]===_[1]&&l[2]===_[2]&&l[4]===_[4]&&l[5]===_[5]&&l[6]===_[6]&&l[8]===_[8]&&l[9]===_[9]&&l[10]===_[10]}function L(l){const _=l??new o(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function I(l,_){const u=_??new o(12);if(u===l){let m;return m=l[1],l[1]=l[4],l[4]=m,m=l[2],l[2]=l[8],l[8]=m,m=l[6],l[6]=l[9],l[9]=m,u}const x=l[0*4+0],k=l[0*4+1],w=l[0*4+2],S=l[1*4+0],i=l[1*4+1],g=l[1*4+2],h=l[2*4+0],f=l[2*4+1],c=l[2*4+2];return u[0]=x,u[1]=S,u[2]=h,u[4]=k,u[5]=i,u[6]=f,u[8]=w,u[9]=g,u[10]=c,u}function X(l,_){const u=_??new o(12),x=l[0*4+0],k=l[0*4+1],w=l[0*4+2],S=l[1*4+0],i=l[1*4+1],g=l[1*4+2],h=l[2*4+0],f=l[2*4+1],c=l[2*4+2],m=c*i-g*f,E=-c*S+g*h,P=f*S-i*h,D=1/(x*m+k*E+w*P);return u[0]=m*D,u[1]=(-c*k+w*f)*D,u[2]=(g*k-w*i)*D,u[4]=E*D,u[5]=(c*x-w*h)*D,u[6]=(-g*x+w*S)*D,u[8]=P*D,u[9]=(-f*x+k*h)*D,u[10]=(i*x-k*S)*D,u}function H(l){const _=l[0],u=l[0*4+1],x=l[0*4+2],k=l[1*4+0],w=l[1*4+1],S=l[1*4+2],i=l[2*4+0],g=l[2*4+1],h=l[2*4+2];return _*(w*h-g*S)-k*(u*h-g*x)+i*(u*S-w*x)}const Y=X;function Z(l,_,u){const x=u??new o(12),k=l[0],w=l[1],S=l[2],i=l[4+0],g=l[4+1],h=l[4+2],f=l[8+0],c=l[8+1],m=l[8+2],E=_[0],P=_[1],D=_[2],O=_[4+0],K=_[4+1],ae=_[4+2],ne=_[8+0],le=_[8+1],Pe=_[8+2];return x[0]=k*E+i*P+f*D,x[1]=w*E+g*P+c*D,x[2]=S*E+h*P+m*D,x[4]=k*O+i*K+f*ae,x[5]=w*O+g*K+c*ae,x[6]=S*O+h*K+m*ae,x[8]=k*ne+i*le+f*Pe,x[9]=w*ne+g*le+c*Pe,x[10]=S*ne+h*le+m*Pe,x}const ie=Z;function _e(l,_,u){const x=u??L();return l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2],x[4]=l[4],x[5]=l[5],x[6]=l[6]),x[8]=_[0],x[9]=_[1],x[10]=1,x}function he(l,_){const u=_??r.create();return u[0]=l[8],u[1]=l[9],u}function se(l,_,u){const x=u??r.create(),k=_*4;return x[0]=l[k+0],x[1]=l[k+1],x}function ce(l,_,u,x){const k=x===l?l:F(l,x),w=u*4;return k[w+0]=_[0],k[w+1]=_[1],k}function Te(l,_){const u=_??r.create(),x=l[0],k=l[1],w=l[4],S=l[5];return u[0]=Math.sqrt(x*x+k*k),u[1]=Math.sqrt(w*w+S*S),u}function de(l,_){const u=_??a.create(),x=l[0],k=l[1],w=l[2],S=l[4],i=l[5],g=l[6],h=l[8],f=l[9],c=l[10];return u[0]=Math.sqrt(x*x+k*k+w*w),u[1]=Math.sqrt(S*S+i*i+g*g),u[2]=Math.sqrt(h*h+f*f+c*c),u}function Ie(l,_){const u=_??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=l[0],u[9]=l[1],u[10]=1,u}function te(l,_,u){const x=u??new o(12),k=_[0],w=_[1],S=l[0],i=l[1],g=l[2],h=l[1*4+0],f=l[1*4+1],c=l[1*4+2],m=l[2*4+0],E=l[2*4+1],P=l[2*4+2];return l!==x&&(x[0]=S,x[1]=i,x[2]=g,x[4]=h,x[5]=f,x[6]=c),x[8]=S*k+h*w+m,x[9]=i*k+f*w+E,x[10]=g*k+c*w+P,x}function ge(l,_){const u=_??new o(12),x=Math.cos(l),k=Math.sin(l);return u[0]=x,u[1]=k,u[2]=0,u[4]=-k,u[5]=x,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ee(l,_,u){const x=u??new o(12),k=l[0*4+0],w=l[0*4+1],S=l[0*4+2],i=l[1*4+0],g=l[1*4+1],h=l[1*4+2],f=Math.cos(_),c=Math.sin(_);return x[0]=f*k+c*i,x[1]=f*w+c*g,x[2]=f*S+c*h,x[4]=f*i-c*k,x[5]=f*g-c*w,x[6]=f*h-c*S,l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function we(l,_){const u=_??new o(12),x=Math.cos(l),k=Math.sin(l);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=x,u[6]=k,u[8]=0,u[9]=-k,u[10]=x,u}function N(l,_,u){const x=u??new o(12),k=l[4],w=l[5],S=l[6],i=l[8],g=l[9],h=l[10],f=Math.cos(_),c=Math.sin(_);return x[4]=f*k+c*i,x[5]=f*w+c*g,x[6]=f*S+c*h,x[8]=f*i-c*k,x[9]=f*g-c*w,x[10]=f*h-c*S,l!==x&&(x[0]=l[0],x[1]=l[1],x[2]=l[2]),x}function J(l,_){const u=_??new o(12),x=Math.cos(l),k=Math.sin(l);return u[0]=x,u[1]=0,u[2]=-k,u[4]=0,u[5]=1,u[6]=0,u[8]=k,u[9]=0,u[10]=x,u}function j(l,_,u){const x=u??new o(12),k=l[0*4+0],w=l[0*4+1],S=l[0*4+2],i=l[2*4+0],g=l[2*4+1],h=l[2*4+2],f=Math.cos(_),c=Math.sin(_);return x[0]=f*k-c*i,x[1]=f*w-c*g,x[2]=f*S-c*h,x[8]=f*i+c*k,x[9]=f*g+c*w,x[10]=f*h+c*S,l!==x&&(x[4]=l[4],x[5]=l[5],x[6]=l[6]),x}const pe=ge,ze=Ee;function ye(l,_){const u=_??new o(12);return u[0]=l[0],u[1]=0,u[2]=0,u[4]=0,u[5]=l[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Me(l,_,u){const x=u??new o(12),k=_[0],w=_[1];return x[0]=k*l[0*4+0],x[1]=k*l[0*4+1],x[2]=k*l[0*4+2],x[4]=w*l[1*4+0],x[5]=w*l[1*4+1],x[6]=w*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function re(l,_){const u=_??new o(12);return u[0]=l[0],u[1]=0,u[2]=0,u[4]=0,u[5]=l[1],u[6]=0,u[8]=0,u[9]=0,u[10]=l[2],u}function ve(l,_,u){const x=u??new o(12),k=_[0],w=_[1],S=_[2];return x[0]=k*l[0*4+0],x[1]=k*l[0*4+1],x[2]=k*l[0*4+2],x[4]=w*l[1*4+0],x[5]=w*l[1*4+1],x[6]=w*l[1*4+2],x[8]=S*l[2*4+0],x[9]=S*l[2*4+1],x[10]=S*l[2*4+2],x}function Re(l,_){const u=_??new o(12);return u[0]=l,u[1]=0,u[2]=0,u[4]=0,u[5]=l,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function z(l,_,u){const x=u??new o(12);return x[0]=_*l[0*4+0],x[1]=_*l[0*4+1],x[2]=_*l[0*4+2],x[4]=_*l[1*4+0],x[5]=_*l[1*4+1],x[6]=_*l[1*4+2],l!==x&&(x[8]=l[8],x[9]=l[9],x[10]=l[10]),x}function Q(l,_){const u=_??new o(12);return u[0]=l,u[1]=0,u[2]=0,u[4]=0,u[5]=l,u[6]=0,u[8]=0,u[9]=0,u[10]=l,u}function y(l,_,u){const x=u??new o(12);return x[0]=_*l[0*4+0],x[1]=_*l[0*4+1],x[2]=_*l[0*4+2],x[4]=_*l[1*4+0],x[5]=_*l[1*4+1],x[6]=_*l[1*4+2],x[8]=_*l[2*4+0],x[9]=_*l[2*4+1],x[10]=_*l[2*4+2],x}return{add:V,clone:G,copy:F,create:v,determinant:H,equals:oe,equalsApproximately:q,fromMat4:b,fromQuat:B,get3DScaling:de,getAxis:se,getScaling:Te,getTranslation:he,identity:L,inverse:X,invert:Y,mul:ie,mulScalar:M,multiply:Z,multiplyScalar:T,negate:C,rotate:Ee,rotateX:N,rotateY:j,rotateZ:ze,rotation:ge,rotationX:we,rotationY:J,rotationZ:pe,scale:Me,scale3D:ve,scaling:ye,scaling3D:re,set:p,setAxis:ce,setTranslation:_e,translate:te,translation:Ie,transpose:I,uniformScale:z,uniformScale3D:y,uniformScaling:Re,uniformScaling3D:Q}}const xi=new Map;function ac(o){let r=xi.get(o);return r||(r=oc(o),xi.set(o,r)),r}function lc(o){const r=As(o);function a(i,g,h,f,c,m,E,P,D,O,K,ae,ne,le,Pe,Be){const ke=new o(16);return i!==void 0&&(ke[0]=i,g!==void 0&&(ke[1]=g,h!==void 0&&(ke[2]=h,f!==void 0&&(ke[3]=f,c!==void 0&&(ke[4]=c,m!==void 0&&(ke[5]=m,E!==void 0&&(ke[6]=E,P!==void 0&&(ke[7]=P,D!==void 0&&(ke[8]=D,O!==void 0&&(ke[9]=O,K!==void 0&&(ke[10]=K,ae!==void 0&&(ke[11]=ae,ne!==void 0&&(ke[12]=ne,le!==void 0&&(ke[13]=le,Pe!==void 0&&(ke[14]=Pe,Be!==void 0&&(ke[15]=Be)))))))))))))))),ke}function v(i,g,h,f,c,m,E,P,D,O,K,ae,ne,le,Pe,Be,ke){const Ce=ke??new o(16);return Ce[0]=i,Ce[1]=g,Ce[2]=h,Ce[3]=f,Ce[4]=c,Ce[5]=m,Ce[6]=E,Ce[7]=P,Ce[8]=D,Ce[9]=O,Ce[10]=K,Ce[11]=ae,Ce[12]=ne,Ce[13]=le,Ce[14]=Pe,Ce[15]=Be,Ce}function p(i,g){const h=g??new o(16);return h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=0,h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=0,h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function b(i,g){const h=g??new o(16),f=i[0],c=i[1],m=i[2],E=i[3],P=f+f,D=c+c,O=m+m,K=f*P,ae=c*P,ne=c*D,le=m*P,Pe=m*D,Be=m*O,ke=E*P,Ce=E*D,Fe=E*O;return h[0]=1-ne-Be,h[1]=ae+Fe,h[2]=le-Ce,h[3]=0,h[4]=ae-Fe,h[5]=1-K-Be,h[6]=Pe+ke,h[7]=0,h[8]=le+Ce,h[9]=Pe-ke,h[10]=1-K-ne,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function B(i,g){const h=g??new o(16);return h[0]=-i[0],h[1]=-i[1],h[2]=-i[2],h[3]=-i[3],h[4]=-i[4],h[5]=-i[5],h[6]=-i[6],h[7]=-i[7],h[8]=-i[8],h[9]=-i[9],h[10]=-i[10],h[11]=-i[11],h[12]=-i[12],h[13]=-i[13],h[14]=-i[14],h[15]=-i[15],h}function C(i,g,h){const f=h??new o(16);return f[0]=i[0]+g[0],f[1]=i[1]+g[1],f[2]=i[2]+g[2],f[3]=i[3]+g[3],f[4]=i[4]+g[4],f[5]=i[5]+g[5],f[6]=i[6]+g[6],f[7]=i[7]+g[7],f[8]=i[8]+g[8],f[9]=i[9]+g[9],f[10]=i[10]+g[10],f[11]=i[11]+g[11],f[12]=i[12]+g[12],f[13]=i[13]+g[13],f[14]=i[14]+g[14],f[15]=i[15]+g[15],f}function T(i,g,h){const f=h??new o(16);return f[0]=i[0]*g,f[1]=i[1]*g,f[2]=i[2]*g,f[3]=i[3]*g,f[4]=i[4]*g,f[5]=i[5]*g,f[6]=i[6]*g,f[7]=i[7]*g,f[8]=i[8]*g,f[9]=i[9]*g,f[10]=i[10]*g,f[11]=i[11]*g,f[12]=i[12]*g,f[13]=i[13]*g,f[14]=i[14]*g,f[15]=i[15]*g,f}const M=T;function V(i,g){const h=g??new o(16);return h[0]=i[0],h[1]=i[1],h[2]=i[2],h[3]=i[3],h[4]=i[4],h[5]=i[5],h[6]=i[6],h[7]=i[7],h[8]=i[8],h[9]=i[9],h[10]=i[10],h[11]=i[11],h[12]=i[12],h[13]=i[13],h[14]=i[14],h[15]=i[15],h}const F=V;function G(i,g){return Math.abs(i[0]-g[0])<Ne&&Math.abs(i[1]-g[1])<Ne&&Math.abs(i[2]-g[2])<Ne&&Math.abs(i[3]-g[3])<Ne&&Math.abs(i[4]-g[4])<Ne&&Math.abs(i[5]-g[5])<Ne&&Math.abs(i[6]-g[6])<Ne&&Math.abs(i[7]-g[7])<Ne&&Math.abs(i[8]-g[8])<Ne&&Math.abs(i[9]-g[9])<Ne&&Math.abs(i[10]-g[10])<Ne&&Math.abs(i[11]-g[11])<Ne&&Math.abs(i[12]-g[12])<Ne&&Math.abs(i[13]-g[13])<Ne&&Math.abs(i[14]-g[14])<Ne&&Math.abs(i[15]-g[15])<Ne}function q(i,g){return i[0]===g[0]&&i[1]===g[1]&&i[2]===g[2]&&i[3]===g[3]&&i[4]===g[4]&&i[5]===g[5]&&i[6]===g[6]&&i[7]===g[7]&&i[8]===g[8]&&i[9]===g[9]&&i[10]===g[10]&&i[11]===g[11]&&i[12]===g[12]&&i[13]===g[13]&&i[14]===g[14]&&i[15]===g[15]}function oe(i){const g=i??new o(16);return g[0]=1,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,g}function L(i,g){const h=g??new o(16);if(h===i){let Ge;return Ge=i[1],i[1]=i[4],i[4]=Ge,Ge=i[2],i[2]=i[8],i[8]=Ge,Ge=i[3],i[3]=i[12],i[12]=Ge,Ge=i[6],i[6]=i[9],i[9]=Ge,Ge=i[7],i[7]=i[13],i[13]=Ge,Ge=i[11],i[11]=i[14],i[14]=Ge,h}const f=i[0*4+0],c=i[0*4+1],m=i[0*4+2],E=i[0*4+3],P=i[1*4+0],D=i[1*4+1],O=i[1*4+2],K=i[1*4+3],ae=i[2*4+0],ne=i[2*4+1],le=i[2*4+2],Pe=i[2*4+3],Be=i[3*4+0],ke=i[3*4+1],Ce=i[3*4+2],Fe=i[3*4+3];return h[0]=f,h[1]=P,h[2]=ae,h[3]=Be,h[4]=c,h[5]=D,h[6]=ne,h[7]=ke,h[8]=m,h[9]=O,h[10]=le,h[11]=Ce,h[12]=E,h[13]=K,h[14]=Pe,h[15]=Fe,h}function I(i,g){const h=g??new o(16),f=i[0*4+0],c=i[0*4+1],m=i[0*4+2],E=i[0*4+3],P=i[1*4+0],D=i[1*4+1],O=i[1*4+2],K=i[1*4+3],ae=i[2*4+0],ne=i[2*4+1],le=i[2*4+2],Pe=i[2*4+3],Be=i[3*4+0],ke=i[3*4+1],Ce=i[3*4+2],Fe=i[3*4+3],Ge=le*Fe,Ze=Ce*Pe,Xe=O*Fe,We=Ce*K,Ke=O*Pe,Oe=le*K,je=m*Fe,ct=Ce*E,at=m*Pe,Qe=le*E,tt=m*K,st=O*E,Ve=ae*ke,rt=Be*ne,it=P*ke,ht=Be*D,nt=P*ne,Pt=ae*D,lt=f*ke,bt=Be*c,St=f*ne,Vt=ae*c,Dt=f*D,Nt=P*c,$t=Ge*D+We*ne+Ke*ke-(Ze*D+Xe*ne+Oe*ke),Ct=Ze*c+je*ne+Qe*ke-(Ge*c+ct*ne+at*ke),Gt=Xe*c+ct*D+tt*ke-(We*c+je*D+st*ke),qt=Oe*c+at*D+st*ne-(Ke*c+Qe*D+tt*ne),ot=1/(f*$t+P*Ct+ae*Gt+Be*qt);return h[0]=ot*$t,h[1]=ot*Ct,h[2]=ot*Gt,h[3]=ot*qt,h[4]=ot*(Ze*P+Xe*ae+Oe*Be-(Ge*P+We*ae+Ke*Be)),h[5]=ot*(Ge*f+ct*ae+at*Be-(Ze*f+je*ae+Qe*Be)),h[6]=ot*(We*f+je*P+st*Be-(Xe*f+ct*P+tt*Be)),h[7]=ot*(Ke*f+Qe*P+tt*ae-(Oe*f+at*P+st*ae)),h[8]=ot*(Ve*K+ht*Pe+nt*Fe-(rt*K+it*Pe+Pt*Fe)),h[9]=ot*(rt*E+lt*Pe+Vt*Fe-(Ve*E+bt*Pe+St*Fe)),h[10]=ot*(it*E+bt*K+Dt*Fe-(ht*E+lt*K+Nt*Fe)),h[11]=ot*(Pt*E+St*K+Nt*Pe-(nt*E+Vt*K+Dt*Pe)),h[12]=ot*(it*le+Pt*Ce+rt*O-(nt*Ce+Ve*O+ht*le)),h[13]=ot*(St*Ce+Ve*m+bt*le-(lt*le+Vt*Ce+rt*m)),h[14]=ot*(lt*O+Nt*Ce+ht*m-(Dt*Ce+it*m+bt*O)),h[15]=ot*(Dt*le+nt*m+Vt*O-(St*O+Nt*le+Pt*m)),h}function X(i){const g=i[0],h=i[0*4+1],f=i[0*4+2],c=i[0*4+3],m=i[1*4+0],E=i[1*4+1],P=i[1*4+2],D=i[1*4+3],O=i[2*4+0],K=i[2*4+1],ae=i[2*4+2],ne=i[2*4+3],le=i[3*4+0],Pe=i[3*4+1],Be=i[3*4+2],ke=i[3*4+3],Ce=ae*ke,Fe=Be*ne,Ge=P*ke,Ze=Be*D,Xe=P*ne,We=ae*D,Ke=f*ke,Oe=Be*c,je=f*ne,ct=ae*c,at=f*D,Qe=P*c,tt=Ce*E+Ze*K+Xe*Pe-(Fe*E+Ge*K+We*Pe),st=Fe*h+Ke*K+ct*Pe-(Ce*h+Oe*K+je*Pe),Ve=Ge*h+Oe*E+at*Pe-(Ze*h+Ke*E+Qe*Pe),rt=We*h+je*E+Qe*K-(Xe*h+ct*E+at*K);return g*tt+m*st+O*Ve+le*rt}const H=I;function Y(i,g,h){const f=h??new o(16),c=i[0],m=i[1],E=i[2],P=i[3],D=i[4+0],O=i[4+1],K=i[4+2],ae=i[4+3],ne=i[8+0],le=i[8+1],Pe=i[8+2],Be=i[8+3],ke=i[12+0],Ce=i[12+1],Fe=i[12+2],Ge=i[12+3],Ze=g[0],Xe=g[1],We=g[2],Ke=g[3],Oe=g[4+0],je=g[4+1],ct=g[4+2],at=g[4+3],Qe=g[8+0],tt=g[8+1],st=g[8+2],Ve=g[8+3],rt=g[12+0],it=g[12+1],ht=g[12+2],nt=g[12+3];return f[0]=c*Ze+D*Xe+ne*We+ke*Ke,f[1]=m*Ze+O*Xe+le*We+Ce*Ke,f[2]=E*Ze+K*Xe+Pe*We+Fe*Ke,f[3]=P*Ze+ae*Xe+Be*We+Ge*Ke,f[4]=c*Oe+D*je+ne*ct+ke*at,f[5]=m*Oe+O*je+le*ct+Ce*at,f[6]=E*Oe+K*je+Pe*ct+Fe*at,f[7]=P*Oe+ae*je+Be*ct+Ge*at,f[8]=c*Qe+D*tt+ne*st+ke*Ve,f[9]=m*Qe+O*tt+le*st+Ce*Ve,f[10]=E*Qe+K*tt+Pe*st+Fe*Ve,f[11]=P*Qe+ae*tt+Be*st+Ge*Ve,f[12]=c*rt+D*it+ne*ht+ke*nt,f[13]=m*rt+O*it+le*ht+Ce*nt,f[14]=E*rt+K*it+Pe*ht+Fe*nt,f[15]=P*rt+ae*it+Be*ht+Ge*nt,f}const Z=Y;function ie(i,g,h){const f=h??oe();return i!==f&&(f[0]=i[0],f[1]=i[1],f[2]=i[2],f[3]=i[3],f[4]=i[4],f[5]=i[5],f[6]=i[6],f[7]=i[7],f[8]=i[8],f[9]=i[9],f[10]=i[10],f[11]=i[11]),f[12]=g[0],f[13]=g[1],f[14]=g[2],f[15]=1,f}function _e(i,g){const h=g??r.create();return h[0]=i[12],h[1]=i[13],h[2]=i[14],h}function he(i,g,h){const f=h??r.create(),c=g*4;return f[0]=i[c+0],f[1]=i[c+1],f[2]=i[c+2],f}function se(i,g,h,f){const c=f===i?f:V(i,f),m=h*4;return c[m+0]=g[0],c[m+1]=g[1],c[m+2]=g[2],c}function ce(i,g){const h=g??r.create(),f=i[0],c=i[1],m=i[2],E=i[4],P=i[5],D=i[6],O=i[8],K=i[9],ae=i[10];return h[0]=Math.sqrt(f*f+c*c+m*m),h[1]=Math.sqrt(E*E+P*P+D*D),h[2]=Math.sqrt(O*O+K*K+ae*ae),h}function Te(i,g,h,f,c){const m=c??new o(16),E=Math.tan(Math.PI*.5-.5*i);if(m[0]=E/g,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=E,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,Number.isFinite(f)){const P=1/(h-f);m[10]=f*P,m[14]=f*h*P}else m[10]=-1,m[14]=-h;return m}function de(i,g,h,f=1/0,c){const m=c??new o(16),E=1/Math.tan(i*.5);if(m[0]=E/g,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=E,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[11]=-1,m[12]=0,m[13]=0,m[15]=0,f===1/0)m[10]=0,m[14]=h;else{const P=1/(f-h);m[10]=h*P,m[14]=f*h*P}return m}function Ie(i,g,h,f,c,m,E){const P=E??new o(16);return P[0]=2/(g-i),P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=2/(f-h),P[6]=0,P[7]=0,P[8]=0,P[9]=0,P[10]=1/(c-m),P[11]=0,P[12]=(g+i)/(i-g),P[13]=(f+h)/(h-f),P[14]=c/(c-m),P[15]=1,P}function te(i,g,h,f,c,m,E){const P=E??new o(16),D=g-i,O=f-h,K=c-m;return P[0]=2*c/D,P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=2*c/O,P[6]=0,P[7]=0,P[8]=(i+g)/D,P[9]=(f+h)/O,P[10]=m/K,P[11]=-1,P[12]=0,P[13]=0,P[14]=c*m/K,P[15]=0,P}function ge(i,g,h,f,c,m=1/0,E){const P=E??new o(16),D=g-i,O=f-h;if(P[0]=2*c/D,P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=2*c/O,P[6]=0,P[7]=0,P[8]=(i+g)/D,P[9]=(f+h)/O,P[11]=-1,P[12]=0,P[13]=0,P[15]=0,m===1/0)P[10]=0,P[14]=c;else{const K=1/(m-c);P[10]=c*K,P[14]=m*c*K}return P}const Ee=r.create(),we=r.create(),N=r.create();function J(i,g,h,f){const c=f??new o(16);return r.normalize(r.subtract(g,i,N),N),r.normalize(r.cross(h,N,Ee),Ee),r.normalize(r.cross(N,Ee,we),we),c[0]=Ee[0],c[1]=Ee[1],c[2]=Ee[2],c[3]=0,c[4]=we[0],c[5]=we[1],c[6]=we[2],c[7]=0,c[8]=N[0],c[9]=N[1],c[10]=N[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function j(i,g,h,f){const c=f??new o(16);return r.normalize(r.subtract(i,g,N),N),r.normalize(r.cross(h,N,Ee),Ee),r.normalize(r.cross(N,Ee,we),we),c[0]=Ee[0],c[1]=Ee[1],c[2]=Ee[2],c[3]=0,c[4]=we[0],c[5]=we[1],c[6]=we[2],c[7]=0,c[8]=N[0],c[9]=N[1],c[10]=N[2],c[11]=0,c[12]=i[0],c[13]=i[1],c[14]=i[2],c[15]=1,c}function pe(i,g,h,f){const c=f??new o(16);return r.normalize(r.subtract(i,g,N),N),r.normalize(r.cross(h,N,Ee),Ee),r.normalize(r.cross(N,Ee,we),we),c[0]=Ee[0],c[1]=we[0],c[2]=N[0],c[3]=0,c[4]=Ee[1],c[5]=we[1],c[6]=N[1],c[7]=0,c[8]=Ee[2],c[9]=we[2],c[10]=N[2],c[11]=0,c[12]=-(Ee[0]*i[0]+Ee[1]*i[1]+Ee[2]*i[2]),c[13]=-(we[0]*i[0]+we[1]*i[1]+we[2]*i[2]),c[14]=-(N[0]*i[0]+N[1]*i[1]+N[2]*i[2]),c[15]=1,c}function ze(i,g){const h=g??new o(16);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=i[0],h[13]=i[1],h[14]=i[2],h[15]=1,h}function ye(i,g,h){const f=h??new o(16),c=g[0],m=g[1],E=g[2],P=i[0],D=i[1],O=i[2],K=i[3],ae=i[1*4+0],ne=i[1*4+1],le=i[1*4+2],Pe=i[1*4+3],Be=i[2*4+0],ke=i[2*4+1],Ce=i[2*4+2],Fe=i[2*4+3],Ge=i[3*4+0],Ze=i[3*4+1],Xe=i[3*4+2],We=i[3*4+3];return i!==f&&(f[0]=P,f[1]=D,f[2]=O,f[3]=K,f[4]=ae,f[5]=ne,f[6]=le,f[7]=Pe,f[8]=Be,f[9]=ke,f[10]=Ce,f[11]=Fe),f[12]=P*c+ae*m+Be*E+Ge,f[13]=D*c+ne*m+ke*E+Ze,f[14]=O*c+le*m+Ce*E+Xe,f[15]=K*c+Pe*m+Fe*E+We,f}function Me(i,g){const h=g??new o(16),f=Math.cos(i),c=Math.sin(i);return h[0]=1,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=f,h[6]=c,h[7]=0,h[8]=0,h[9]=-c,h[10]=f,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function re(i,g,h){const f=h??new o(16),c=i[4],m=i[5],E=i[6],P=i[7],D=i[8],O=i[9],K=i[10],ae=i[11],ne=Math.cos(g),le=Math.sin(g);return f[4]=ne*c+le*D,f[5]=ne*m+le*O,f[6]=ne*E+le*K,f[7]=ne*P+le*ae,f[8]=ne*D-le*c,f[9]=ne*O-le*m,f[10]=ne*K-le*E,f[11]=ne*ae-le*P,i!==f&&(f[0]=i[0],f[1]=i[1],f[2]=i[2],f[3]=i[3],f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function ve(i,g){const h=g??new o(16),f=Math.cos(i),c=Math.sin(i);return h[0]=f,h[1]=0,h[2]=-c,h[3]=0,h[4]=0,h[5]=1,h[6]=0,h[7]=0,h[8]=c,h[9]=0,h[10]=f,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function Re(i,g,h){const f=h??new o(16),c=i[0*4+0],m=i[0*4+1],E=i[0*4+2],P=i[0*4+3],D=i[2*4+0],O=i[2*4+1],K=i[2*4+2],ae=i[2*4+3],ne=Math.cos(g),le=Math.sin(g);return f[0]=ne*c-le*D,f[1]=ne*m-le*O,f[2]=ne*E-le*K,f[3]=ne*P-le*ae,f[8]=ne*D+le*c,f[9]=ne*O+le*m,f[10]=ne*K+le*E,f[11]=ne*ae+le*P,i!==f&&(f[4]=i[4],f[5]=i[5],f[6]=i[6],f[7]=i[7],f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function z(i,g){const h=g??new o(16),f=Math.cos(i),c=Math.sin(i);return h[0]=f,h[1]=c,h[2]=0,h[3]=0,h[4]=-c,h[5]=f,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function Q(i,g,h){const f=h??new o(16),c=i[0*4+0],m=i[0*4+1],E=i[0*4+2],P=i[0*4+3],D=i[1*4+0],O=i[1*4+1],K=i[1*4+2],ae=i[1*4+3],ne=Math.cos(g),le=Math.sin(g);return f[0]=ne*c+le*D,f[1]=ne*m+le*O,f[2]=ne*E+le*K,f[3]=ne*P+le*ae,f[4]=ne*D-le*c,f[5]=ne*O-le*m,f[6]=ne*K-le*E,f[7]=ne*ae-le*P,i!==f&&(f[8]=i[8],f[9]=i[9],f[10]=i[10],f[11]=i[11],f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function y(i,g,h){const f=h??new o(16);let c=i[0],m=i[1],E=i[2];const P=Math.sqrt(c*c+m*m+E*E);c/=P,m/=P,E/=P;const D=c*c,O=m*m,K=E*E,ae=Math.cos(g),ne=Math.sin(g),le=1-ae;return f[0]=D+(1-D)*ae,f[1]=c*m*le+E*ne,f[2]=c*E*le-m*ne,f[3]=0,f[4]=c*m*le-E*ne,f[5]=O+(1-O)*ae,f[6]=m*E*le+c*ne,f[7]=0,f[8]=c*E*le+m*ne,f[9]=m*E*le-c*ne,f[10]=K+(1-K)*ae,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}const l=y;function _(i,g,h,f){const c=f??new o(16);let m=g[0],E=g[1],P=g[2];const D=Math.sqrt(m*m+E*E+P*P);m/=D,E/=D,P/=D;const O=m*m,K=E*E,ae=P*P,ne=Math.cos(h),le=Math.sin(h),Pe=1-ne,Be=O+(1-O)*ne,ke=m*E*Pe+P*le,Ce=m*P*Pe-E*le,Fe=m*E*Pe-P*le,Ge=K+(1-K)*ne,Ze=E*P*Pe+m*le,Xe=m*P*Pe+E*le,We=E*P*Pe-m*le,Ke=ae+(1-ae)*ne,Oe=i[0],je=i[1],ct=i[2],at=i[3],Qe=i[4],tt=i[5],st=i[6],Ve=i[7],rt=i[8],it=i[9],ht=i[10],nt=i[11];return c[0]=Be*Oe+ke*Qe+Ce*rt,c[1]=Be*je+ke*tt+Ce*it,c[2]=Be*ct+ke*st+Ce*ht,c[3]=Be*at+ke*Ve+Ce*nt,c[4]=Fe*Oe+Ge*Qe+Ze*rt,c[5]=Fe*je+Ge*tt+Ze*it,c[6]=Fe*ct+Ge*st+Ze*ht,c[7]=Fe*at+Ge*Ve+Ze*nt,c[8]=Xe*Oe+We*Qe+Ke*rt,c[9]=Xe*je+We*tt+Ke*it,c[10]=Xe*ct+We*st+Ke*ht,c[11]=Xe*at+We*Ve+Ke*nt,i!==c&&(c[12]=i[12],c[13]=i[13],c[14]=i[14],c[15]=i[15]),c}const u=_;function x(i,g){const h=g??new o(16);return h[0]=i[0],h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=i[1],h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=i[2],h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function k(i,g,h){const f=h??new o(16),c=g[0],m=g[1],E=g[2];return f[0]=c*i[0*4+0],f[1]=c*i[0*4+1],f[2]=c*i[0*4+2],f[3]=c*i[0*4+3],f[4]=m*i[1*4+0],f[5]=m*i[1*4+1],f[6]=m*i[1*4+2],f[7]=m*i[1*4+3],f[8]=E*i[2*4+0],f[9]=E*i[2*4+1],f[10]=E*i[2*4+2],f[11]=E*i[2*4+3],i!==f&&(f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}function w(i,g){const h=g??new o(16);return h[0]=i,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=i,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=i,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}function S(i,g,h){const f=h??new o(16);return f[0]=g*i[0*4+0],f[1]=g*i[0*4+1],f[2]=g*i[0*4+2],f[3]=g*i[0*4+3],f[4]=g*i[1*4+0],f[5]=g*i[1*4+1],f[6]=g*i[1*4+2],f[7]=g*i[1*4+3],f[8]=g*i[2*4+0],f[9]=g*i[2*4+1],f[10]=g*i[2*4+2],f[11]=g*i[2*4+3],i!==f&&(f[12]=i[12],f[13]=i[13],f[14]=i[14],f[15]=i[15]),f}return{add:C,aim:J,axisRotate:_,axisRotation:y,cameraAim:j,clone:F,copy:V,create:a,determinant:X,equals:q,equalsApproximately:G,fromMat3:p,fromQuat:b,frustum:te,frustumReverseZ:ge,getAxis:he,getScaling:ce,getTranslation:_e,identity:oe,inverse:I,invert:H,lookAt:pe,mul:Z,mulScalar:M,multiply:Y,multiplyScalar:T,negate:B,ortho:Ie,perspective:Te,perspectiveReverseZ:de,rotate:u,rotateX:re,rotateY:Re,rotateZ:Q,rotation:l,rotationX:Me,rotationY:ve,rotationZ:z,scale:k,scaling:x,set:v,setAxis:se,setTranslation:ie,translate:ye,translation:ze,transpose:L,uniformScale:S,uniformScaling:w}}const yi=new Map;function cc(o){let r=yi.get(o);return r||(r=lc(o),yi.set(o,r)),r}function uc(o){const r=As(o);function a(z,Q,y,l){const _=new o(4);return z!==void 0&&(_[0]=z,Q!==void 0&&(_[1]=Q,y!==void 0&&(_[2]=y,l!==void 0&&(_[3]=l)))),_}const v=a;function p(z,Q,y,l,_){const u=_??new o(4);return u[0]=z,u[1]=Q,u[2]=y,u[3]=l,u}function b(z,Q,y){const l=y??new o(4),_=Q*.5,u=Math.sin(_);return l[0]=u*z[0],l[1]=u*z[1],l[2]=u*z[2],l[3]=Math.cos(_),l}function B(z,Q){const y=Q??r.create(3),l=Math.acos(z[3])*2,_=Math.sin(l*.5);return _>Ne?(y[0]=z[0]/_,y[1]=z[1]/_,y[2]=z[2]/_):(y[0]=1,y[1]=0,y[2]=0),{angle:l,axis:y}}function C(z,Q){const y=Te(z,Q);return Math.acos(2*y*y-1)}function T(z,Q,y){const l=y??new o(4),_=z[0],u=z[1],x=z[2],k=z[3],w=Q[0],S=Q[1],i=Q[2],g=Q[3];return l[0]=_*g+k*w+u*i-x*S,l[1]=u*g+k*S+x*w-_*i,l[2]=x*g+k*i+_*S-u*w,l[3]=k*g-_*w-u*S-x*i,l}const M=T;function V(z,Q,y){const l=y??new o(4),_=Q*.5,u=z[0],x=z[1],k=z[2],w=z[3],S=Math.sin(_),i=Math.cos(_);return l[0]=u*i+w*S,l[1]=x*i+k*S,l[2]=k*i-x*S,l[3]=w*i-u*S,l}function F(z,Q,y){const l=y??new o(4),_=Q*.5,u=z[0],x=z[1],k=z[2],w=z[3],S=Math.sin(_),i=Math.cos(_);return l[0]=u*i-k*S,l[1]=x*i+w*S,l[2]=k*i+u*S,l[3]=w*i-x*S,l}function G(z,Q,y){const l=y??new o(4),_=Q*.5,u=z[0],x=z[1],k=z[2],w=z[3],S=Math.sin(_),i=Math.cos(_);return l[0]=u*i+x*S,l[1]=x*i-u*S,l[2]=k*i+w*S,l[3]=w*i-k*S,l}function q(z,Q,y,l){const _=l??new o(4),u=z[0],x=z[1],k=z[2],w=z[3];let S=Q[0],i=Q[1],g=Q[2],h=Q[3],f=u*S+x*i+k*g+w*h;f<0&&(f=-f,S=-S,i=-i,g=-g,h=-h);let c,m;if(1-f>Ne){const E=Math.acos(f),P=Math.sin(E);c=Math.sin((1-y)*E)/P,m=Math.sin(y*E)/P}else c=1-y,m=y;return _[0]=c*u+m*S,_[1]=c*x+m*i,_[2]=c*k+m*g,_[3]=c*w+m*h,_}function oe(z,Q){const y=Q??new o(4),l=z[0],_=z[1],u=z[2],x=z[3],k=l*l+_*_+u*u+x*x,w=k?1/k:0;return y[0]=-l*w,y[1]=-_*w,y[2]=-u*w,y[3]=x*w,y}function L(z,Q){const y=Q??new o(4);return y[0]=-z[0],y[1]=-z[1],y[2]=-z[2],y[3]=z[3],y}function I(z,Q){const y=Q??new o(4),l=z[0]+z[5]+z[10];if(l>0){const _=Math.sqrt(l+1);y[3]=.5*_;const u=.5/_;y[0]=(z[6]-z[9])*u,y[1]=(z[8]-z[2])*u,y[2]=(z[1]-z[4])*u}else{let _=0;z[5]>z[0]&&(_=1),z[10]>z[_*4+_]&&(_=2);const u=(_+1)%3,x=(_+2)%3,k=Math.sqrt(z[_*4+_]-z[u*4+u]-z[x*4+x]+1);y[_]=.5*k;const w=.5/k;y[3]=(z[u*4+x]-z[x*4+u])*w,y[u]=(z[u*4+_]+z[_*4+u])*w,y[x]=(z[x*4+_]+z[_*4+x])*w}return y}function X(z,Q,y,l,_){const u=_??new o(4),x=z*.5,k=Q*.5,w=y*.5,S=Math.sin(x),i=Math.cos(x),g=Math.sin(k),h=Math.cos(k),f=Math.sin(w),c=Math.cos(w);switch(l){case"xyz":u[0]=S*h*c+i*g*f,u[1]=i*g*c-S*h*f,u[2]=i*h*f+S*g*c,u[3]=i*h*c-S*g*f;break;case"xzy":u[0]=S*h*c-i*g*f,u[1]=i*g*c-S*h*f,u[2]=i*h*f+S*g*c,u[3]=i*h*c+S*g*f;break;case"yxz":u[0]=S*h*c+i*g*f,u[1]=i*g*c-S*h*f,u[2]=i*h*f-S*g*c,u[3]=i*h*c+S*g*f;break;case"yzx":u[0]=S*h*c+i*g*f,u[1]=i*g*c+S*h*f,u[2]=i*h*f-S*g*c,u[3]=i*h*c-S*g*f;break;case"zxy":u[0]=S*h*c-i*g*f,u[1]=i*g*c+S*h*f,u[2]=i*h*f+S*g*c,u[3]=i*h*c-S*g*f;break;case"zyx":u[0]=S*h*c-i*g*f,u[1]=i*g*c+S*h*f,u[2]=i*h*f-S*g*c,u[3]=i*h*c+S*g*f;break;default:throw new Error(`Unknown rotation order: ${l}`)}return u}function H(z,Q){const y=Q??new o(4);return y[0]=z[0],y[1]=z[1],y[2]=z[2],y[3]=z[3],y}const Y=H;function Z(z,Q,y){const l=y??new o(4);return l[0]=z[0]+Q[0],l[1]=z[1]+Q[1],l[2]=z[2]+Q[2],l[3]=z[3]+Q[3],l}function ie(z,Q,y){const l=y??new o(4);return l[0]=z[0]-Q[0],l[1]=z[1]-Q[1],l[2]=z[2]-Q[2],l[3]=z[3]-Q[3],l}const _e=ie;function he(z,Q,y){const l=y??new o(4);return l[0]=z[0]*Q,l[1]=z[1]*Q,l[2]=z[2]*Q,l[3]=z[3]*Q,l}const se=he;function ce(z,Q,y){const l=y??new o(4);return l[0]=z[0]/Q,l[1]=z[1]/Q,l[2]=z[2]/Q,l[3]=z[3]/Q,l}function Te(z,Q){return z[0]*Q[0]+z[1]*Q[1]+z[2]*Q[2]+z[3]*Q[3]}function de(z,Q,y,l){const _=l??new o(4);return _[0]=z[0]+y*(Q[0]-z[0]),_[1]=z[1]+y*(Q[1]-z[1]),_[2]=z[2]+y*(Q[2]-z[2]),_[3]=z[3]+y*(Q[3]-z[3]),_}function Ie(z){const Q=z[0],y=z[1],l=z[2],_=z[3];return Math.sqrt(Q*Q+y*y+l*l+_*_)}const te=Ie;function ge(z){const Q=z[0],y=z[1],l=z[2],_=z[3];return Q*Q+y*y+l*l+_*_}const Ee=ge;function we(z,Q){const y=Q??new o(4),l=z[0],_=z[1],u=z[2],x=z[3],k=Math.sqrt(l*l+_*_+u*u+x*x);return k>1e-5?(y[0]=l/k,y[1]=_/k,y[2]=u/k,y[3]=x/k):(y[0]=0,y[1]=0,y[2]=0,y[3]=1),y}function N(z,Q){return Math.abs(z[0]-Q[0])<Ne&&Math.abs(z[1]-Q[1])<Ne&&Math.abs(z[2]-Q[2])<Ne&&Math.abs(z[3]-Q[3])<Ne}function J(z,Q){return z[0]===Q[0]&&z[1]===Q[1]&&z[2]===Q[2]&&z[3]===Q[3]}function j(z){const Q=z??new o(4);return Q[0]=0,Q[1]=0,Q[2]=0,Q[3]=1,Q}const pe=r.create(),ze=r.create(),ye=r.create();function Me(z,Q,y){const l=y??new o(4),_=r.dot(z,Q);return _<-.999999?(r.cross(ze,z,pe),r.len(pe)<1e-6&&r.cross(ye,z,pe),r.normalize(pe,pe),b(pe,Math.PI,l),l):_>.999999?(l[0]=0,l[1]=0,l[2]=0,l[3]=1,l):(r.cross(z,Q,pe),l[0]=pe[0],l[1]=pe[1],l[2]=pe[2],l[3]=1+_,we(l,l))}const re=new o(4),ve=new o(4);function Re(z,Q,y,l,_,u){const x=u??new o(4);return q(z,l,_,re),q(Q,y,_,ve),q(re,ve,2*_*(1-_),x),x}return{create:a,fromValues:v,set:p,fromAxisAngle:b,toAxisAngle:B,angle:C,multiply:T,mul:M,rotateX:V,rotateY:F,rotateZ:G,slerp:q,inverse:oe,conjugate:L,fromMat:I,fromEuler:X,copy:H,clone:Y,add:Z,subtract:ie,sub:_e,mulScalar:he,scale:se,divScalar:ce,dot:Te,lerp:de,length:Ie,len:te,lengthSq:ge,lenSq:Ee,normalize:we,equalsApproximately:N,equals:J,identity:j,rotationTo:Me,sqlerp:Re}}const Pi=new Map;function dc(o){let r=Pi.get(o);return r||(r=uc(o),Pi.set(o,r)),r}function pc(o){function r(y,l,_,u){const x=new o(4);return y!==void 0&&(x[0]=y,l!==void 0&&(x[1]=l,_!==void 0&&(x[2]=_,u!==void 0&&(x[3]=u)))),x}const a=r;function v(y,l,_,u,x){const k=x??new o(4);return k[0]=y,k[1]=l,k[2]=_,k[3]=u,k}function p(y,l){const _=l??new o(4);return _[0]=Math.ceil(y[0]),_[1]=Math.ceil(y[1]),_[2]=Math.ceil(y[2]),_[3]=Math.ceil(y[3]),_}function b(y,l){const _=l??new o(4);return _[0]=Math.floor(y[0]),_[1]=Math.floor(y[1]),_[2]=Math.floor(y[2]),_[3]=Math.floor(y[3]),_}function B(y,l){const _=l??new o(4);return _[0]=Math.round(y[0]),_[1]=Math.round(y[1]),_[2]=Math.round(y[2]),_[3]=Math.round(y[3]),_}function C(y,l=0,_=1,u){const x=u??new o(4);return x[0]=Math.min(_,Math.max(l,y[0])),x[1]=Math.min(_,Math.max(l,y[1])),x[2]=Math.min(_,Math.max(l,y[2])),x[3]=Math.min(_,Math.max(l,y[3])),x}function T(y,l,_){const u=_??new o(4);return u[0]=y[0]+l[0],u[1]=y[1]+l[1],u[2]=y[2]+l[2],u[3]=y[3]+l[3],u}function M(y,l,_,u){const x=u??new o(4);return x[0]=y[0]+l[0]*_,x[1]=y[1]+l[1]*_,x[2]=y[2]+l[2]*_,x[3]=y[3]+l[3]*_,x}function V(y,l,_){const u=_??new o(4);return u[0]=y[0]-l[0],u[1]=y[1]-l[1],u[2]=y[2]-l[2],u[3]=y[3]-l[3],u}const F=V;function G(y,l){return Math.abs(y[0]-l[0])<Ne&&Math.abs(y[1]-l[1])<Ne&&Math.abs(y[2]-l[2])<Ne&&Math.abs(y[3]-l[3])<Ne}function q(y,l){return y[0]===l[0]&&y[1]===l[1]&&y[2]===l[2]&&y[3]===l[3]}function oe(y,l,_,u){const x=u??new o(4);return x[0]=y[0]+_*(l[0]-y[0]),x[1]=y[1]+_*(l[1]-y[1]),x[2]=y[2]+_*(l[2]-y[2]),x[3]=y[3]+_*(l[3]-y[3]),x}function L(y,l,_,u){const x=u??new o(4);return x[0]=y[0]+_[0]*(l[0]-y[0]),x[1]=y[1]+_[1]*(l[1]-y[1]),x[2]=y[2]+_[2]*(l[2]-y[2]),x[3]=y[3]+_[3]*(l[3]-y[3]),x}function I(y,l,_){const u=_??new o(4);return u[0]=Math.max(y[0],l[0]),u[1]=Math.max(y[1],l[1]),u[2]=Math.max(y[2],l[2]),u[3]=Math.max(y[3],l[3]),u}function X(y,l,_){const u=_??new o(4);return u[0]=Math.min(y[0],l[0]),u[1]=Math.min(y[1],l[1]),u[2]=Math.min(y[2],l[2]),u[3]=Math.min(y[3],l[3]),u}function H(y,l,_){const u=_??new o(4);return u[0]=y[0]*l,u[1]=y[1]*l,u[2]=y[2]*l,u[3]=y[3]*l,u}const Y=H;function Z(y,l,_){const u=_??new o(4);return u[0]=y[0]/l,u[1]=y[1]/l,u[2]=y[2]/l,u[3]=y[3]/l,u}function ie(y,l){const _=l??new o(4);return _[0]=1/y[0],_[1]=1/y[1],_[2]=1/y[2],_[3]=1/y[3],_}const _e=ie;function he(y,l){return y[0]*l[0]+y[1]*l[1]+y[2]*l[2]+y[3]*l[3]}function se(y){const l=y[0],_=y[1],u=y[2],x=y[3];return Math.sqrt(l*l+_*_+u*u+x*x)}const ce=se;function Te(y){const l=y[0],_=y[1],u=y[2],x=y[3];return l*l+_*_+u*u+x*x}const de=Te;function Ie(y,l){const _=y[0]-l[0],u=y[1]-l[1],x=y[2]-l[2],k=y[3]-l[3];return Math.sqrt(_*_+u*u+x*x+k*k)}const te=Ie;function ge(y,l){const _=y[0]-l[0],u=y[1]-l[1],x=y[2]-l[2],k=y[3]-l[3];return _*_+u*u+x*x+k*k}const Ee=ge;function we(y,l){const _=l??new o(4),u=y[0],x=y[1],k=y[2],w=y[3],S=Math.sqrt(u*u+x*x+k*k+w*w);return S>1e-5?(_[0]=u/S,_[1]=x/S,_[2]=k/S,_[3]=w/S):(_[0]=0,_[1]=0,_[2]=0,_[3]=0),_}function N(y,l){const _=l??new o(4);return _[0]=-y[0],_[1]=-y[1],_[2]=-y[2],_[3]=-y[3],_}function J(y,l){const _=l??new o(4);return _[0]=y[0],_[1]=y[1],_[2]=y[2],_[3]=y[3],_}const j=J;function pe(y,l,_){const u=_??new o(4);return u[0]=y[0]*l[0],u[1]=y[1]*l[1],u[2]=y[2]*l[2],u[3]=y[3]*l[3],u}const ze=pe;function ye(y,l,_){const u=_??new o(4);return u[0]=y[0]/l[0],u[1]=y[1]/l[1],u[2]=y[2]/l[2],u[3]=y[3]/l[3],u}const Me=ye;function re(y){const l=y??new o(4);return l[0]=0,l[1]=0,l[2]=0,l[3]=0,l}function ve(y,l,_){const u=_??new o(4),x=y[0],k=y[1],w=y[2],S=y[3];return u[0]=l[0]*x+l[4]*k+l[8]*w+l[12]*S,u[1]=l[1]*x+l[5]*k+l[9]*w+l[13]*S,u[2]=l[2]*x+l[6]*k+l[10]*w+l[14]*S,u[3]=l[3]*x+l[7]*k+l[11]*w+l[15]*S,u}function Re(y,l,_){const u=_??new o(4);return we(y,u),H(u,l,u)}function z(y,l,_){const u=_??new o(4);return se(y)>l?Re(y,l,u):J(y,u)}function Q(y,l,_){const u=_??new o(4);return oe(y,l,.5,u)}return{create:r,fromValues:a,set:v,ceil:p,floor:b,round:B,clamp:C,add:T,addScaled:M,subtract:V,sub:F,equalsApproximately:G,equals:q,lerp:oe,lerpV:L,max:I,min:X,mulScalar:H,scale:Y,divScalar:Z,inverse:ie,invert:_e,dot:he,length:se,len:ce,lengthSq:Te,lenSq:de,distance:Ie,dist:te,distanceSq:ge,distSq:Ee,normalize:we,negate:N,copy:J,clone:j,multiply:pe,mul:ze,divide:ye,div:Me,zero:re,transformMat4:ve,setLength:Re,truncate:z,midpoint:Q}}const Si=new Map;function hc(o){let r=Si.get(o);return r||(r=pc(o),Si.set(o,r)),r}function br(o,r,a,v,p,b){return{mat3:ac(o),mat4:cc(r),quat:dc(a),vec2:Yi(v),vec3:As(p),vec4:hc(b)}}const{mat3:kt,mat4:vt,quat:pt,vec2:Ei,vec3:W,vec4:Cu}=br(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);br(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);br(sc,Array,Array,Array,Array,Array);const ki=document.querySelector("#log");let At=null,En=null;function Zi(){if(At)return At;At=document.createElement("div"),At.className="ply-spinner-overlay";const o=document.createElement("div");return o.className="ply-spinner",At.appendChild(o),En=document.createElement("div"),En.className="ply-spinner-label",At.appendChild(En),At.style.display="none",document.body.appendChild(At),At}function On(o){Zi(),En&&o&&(En.textContent=o),At&&(At.style.opacity="1",At.style.display="flex")}function Mt(o){Zi(),En&&(En.textContent=o)}function Ht(){if(!At)return;const o=At;o.style.opacity="0",setTimeout(()=>{o.style.opacity==="0"&&(o.style.display="none")},220)}function Xi(o,r){if(!ki)return;const a=document.createElement("p");a.innerText=o,r&&Object.assign(a.style,r),ki.appendChild(a)}async function wt(o){console.log(o),Xi(o)}async function fc(o){console.error(o),Xi(o,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let Ji;function Qi(){Ji=performance.now()}function Ci(o){const r=performance.now()-Ji;wt(`⏱️ ${o} Time: ${r.toFixed(0)} ms`)}function _c(o,r){if(!o)throw new Error(r&&(typeof r=="string"?r:r()))}function In(o){return o+3&-4}const mc=2,vc=3,bc=5,gc=6,ss=7,ys=8,is=9,os=10;function Gn(o){const r=new TextDecoder("ascii"),a=r.decode(new Uint8Array(o,0,4));if(a!=="NAT2")throw new Error(`NAT2 bad magic: '${a}'`);if(o.byteLength<4+64)throw new Error(`NAT2 truncated (${o.byteLength} bytes < 4 + 64)`);const v=new DataView(o),p=4,b=v.getUint32(p+0,!0),B=v.getUint32(p+4,!0),C=v.getUint32(p+8,!0),T=v.getUint32(p+12,!0),M=v.getUint32(p+16,!0),V=v.getFloat32(p+20,!0),F=v.getUint32(p+24,!0),G=v.getUint32(p+28,!0),q=v.getFloat32(p+32,!0),oe=v.getFloat32(p+36,!0),L=v.getFloat32(p+40,!0),I=v.getUint32(p+44,!0),X=v.getFloat32(p+48,!0),H=v.getFloat32(p+52,!0),Y=v.getUint32(p+56,!0),Z=v.getUint32(p+60,!0),ie=G===is||G===os,_e=ie?Z:0,he=ie?0:Z&255,se=ie?0:Z>>8&255,ce=he>0?he:1;if(G===bc||G===gc)throw new Error(`NAT2: paired-RVQ format=${G} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Te=G===is||G===os;if(G!==mc&&G!==vc&&G!==ss&&G!==ys&&!Te)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${G}`);if(b%4!==0||I%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${b} layer_h=${I}`);let de=p+64;const Ie=(Y+1)*4,te=new Uint32Array(o.slice(de,de+Ie));de+=Ie;let ge;if(ce>1){const re=(ce+1)*4;if(de+re>o.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${re} from ${de})`);ge=new Uint32Array(o.slice(de,de+re)),de+=re}else ge=new Uint32Array([0,b]);let Ee=0;for(let re=0;re<ce;re++){const ve=ge[re+1]-ge[re];ve>Ee&&(Ee=ve)}if(Te){const re=_e&2?21:_e&1?7:6,ve=M*re*4;if(de+ve>o.byteLength)throw new Error(`NAT2 truncated at probes: need ${ve} more bytes from offset ${de}, have ${o.byteLength-de}`);const Re=new Float32Array(o.slice(de,de+ve));de+=ve;const z=Math.max(1,_e>>8&255),Q=[];let y=0;for(let k=0,w=b,S=I;k<z;k++,w>>=1,S>>=1){const i=Math.max(1,w>>2)*Math.max(1,S>>2)*16;Q.push(i),y+=i}const l=o.byteLength-de;if(l<y)throw new Error(`NAT2 probe atlas truncated: need ${y} bytes for ${b}x${I} x${z} mips, have ${l}`);const _=[];let u=de;for(const k of Q)_.push(new Uint8Array(o.slice(u,u+k))),u+=k;const x=_[0];return{width:b,height:B,channels:C,kernel_type:T,num_rects:M,uv_extent:V,sb_number:F,format:G,sh_bias:q,res_bias:oe,compact_mult:L,layer_h:I,atlas_scale:X,atlas_offset:H,n_layers:Y,n_cols:ce,layer_cuts:te,column_cuts:ge,slice_width:Ee,rects_expanded:Re,atlas_bytes:x,mip_bytes:_,probe_mode:_e&2?3:_e&1?2:1}}const we=M*4*4;if(de+we>o.byteLength)throw new Error(`NAT2 truncated at rects: need ${we} more bytes from offset ${de}, have ${o.byteLength-de}`);const N=new Float32Array(o.slice(de,de+we));de+=we;const J=new Float32Array(M*5);for(let re=0;re<M;re++){const ve=N[re*4+0],Re=N[re*4+1],z=N[re*4+2],Q=N[re*4+3];let y=0;for(let k=1;k<=Y&&te[k]<=Re;k++)y=k;let l=0;for(let k=1;k<=ce&&ge[k]<=ve;k++)l=k;const _=Re-te[y],u=ve-ge[l],x=l*Y+y;J[re*5+0]=u,J[re*5+1]=_,J[re*5+2]=z,J[re*5+3]=Q,J[re*5+4]=x}let j,pe;const ze=ce,Me=b/4*16;if(G===ss||G===ys){if(de+24>o.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const re=G===ss?"BCCB":"ACCB",ve=r.decode(new Uint8Array(o,de,4));if(ve!==re)throw new Error(`NAT2 typeD bad sub-magic: expected '${re}' got '${ve}'`);const Re=v.getUint32(de+4,!0),z=v.getUint32(de+8,!0),Q=v.getUint32(de+12,!0),y=v.getUint32(de+16,!0),l=v.getUint32(de+20,!0);if(Re!==1)throw new Error(`NAT2 BCCB unsupported version ${Re}`);if(Q!==B/4||y!==b/4||l!==Q*y)throw new Error(`NAT2 BCCB block grid mismatch: header ${b}×${B}, sub-header ${y}×${Q} (${l} blocks)`);de+=24;const _=z*16;if(de+_>o.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${_}, have ${o.byteLength-de})`);const u=new Uint8Array(o,de,_);de+=_;const x=l*2;if(de+x>o.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${x}, have ${o.byteLength-de})`);const k=new Uint16Array(o.slice(de,de+x));de+=x;const w=new Uint8Array(l*16);for(let S=0;S<l;S++){const i=k[S]*16;w.set(u.subarray(i,i+16),S*16)}if(j=w,se>1){pe=[w];for(let S=1;S<se;S++){if(de+24>o.byteLength)throw new Error(`NAT2 truncated at mip ${S} sub-header`);const i=r.decode(new Uint8Array(o,de,4));if(i!==re)throw new Error(`NAT2 mip ${S}: bad sub-magic '${i}'`);const g=v.getUint32(de+8,!0),h=v.getUint32(de+16,!0),f=v.getUint32(de+20,!0);if(h!==S)throw new Error(`NAT2 mip section order: expected level ${S}, got ${h}`);de+=24;let c=0;for(let D=0;D<ze;D++)for(let O=0;O<Y;O++){const K=eo(S,ge[D+1]-ge[D],te[O+1]-te[O],Ee,I);c+=(K.cw>>2)*(K.ch>>2)}if(c!==f)throw new Error(`NAT2 mip ${S}: ${f} blocks, loader expects ${c}`);if(de+g*16+f*2>o.byteLength)throw new Error(`NAT2 truncated in mip ${S}`);const m=new Uint8Array(o,de,g*16);de+=g*16;const E=new Uint16Array(o.slice(de,de+f*2));de+=f*2;const P=new Uint8Array(f*16);for(let D=0;D<f;D++){const O=E[D]*16;P.set(m.subarray(O,O+16),D*16)}pe.push(P)}}}else{let re=0;for(let ve=0;ve<Y;ve++){const Re=te[ve+1]-te[ve];if(Re%4!==0)throw new Error(`NAT2 BC7 layer ${ve} rows ${Re} not 4-aligned`);re+=Re/4*Me}if(de+re>o.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${re} more bytes from offset ${de}, have ${o.byteLength-de}`);j=new Uint8Array(o.slice(de,de+re))}return{width:b,height:B,channels:C,kernel_type:T,num_rects:M,uv_extent:V,sb_number:F,format:G,sh_bias:q,res_bias:oe,compact_mult:L,layer_h:I,atlas_scale:X,atlas_offset:H,n_layers:Y,n_cols:ce,layer_cuts:te,column_cuts:ge,slice_width:Ee,rects_expanded:J,atlas_bytes:j,...pe?{mip_bytes:pe}:{}}}function eo(o,r,a,v,p){const b=C=>C+3>>2<<2,B=1<<o;return{cw:Math.min(b(Math.max(1,v>>o)),b(Math.ceil(r/B))),ch:Math.min(b(Math.max(1,p>>o)),b(Math.ceil(a/B)))}}const wc=32;function ur(o,r,a){if(r.format===5||r.format===6)throw new Error(`paired-RVQ format=${r.format} is retired; re-bake with typeD (--bc7-codebook)`);let v,p,b,B;if(r.format===2||r.format===ss||r.format===is){if(!o.features.has("texture-compression-bc"))return wt(`⚠️  bundle is BC7 (format=${r.format}) but texture-compression-bc not supported — atlas disabled`),null;B=r.format===is?"BC7 atlas (proberes: shared probe texture)":r.format===ss?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:v,view:p,sampler:b}=Ti(o,r,"bc7-rgba-unorm",B)}else if(r.format===3||r.format===ys||r.format===os){if(!o.features.has("texture-compression-astc"))return wt(`⚠️  bundle is ASTC 4x4 (format=${r.format}) but texture-compression-astc not supported — atlas disabled`),null;B=r.format===os?"ASTC 4x4 atlas (proberes: shared probe texture)":r.format===ys?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:v,view:p,sampler:b}=Ti(o,r,"astc-4x4-unorm",B)}else return wt(`⚠️  unsupported atlas format ${r.format} — atlas disabled`),null;const{rects_expanded:C}=r,T=o.createBuffer({label:"atlas rects (5-stride)",size:In(C.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(T,0,C);const M=o.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return xs(o,M,r,a),{texture:v,view:p,sampler:b,rectsBuffer:T,texParamsBuffer:M,meta:r}}function Ti(o,r,a,v){const{width:p,layer_h:b,n_layers:B,n_cols:C,layer_cuts:T,column_cuts:M,slice_width:V,atlas_bytes:F}=r,q=p/4*16,oe=o.limits.maxTextureDimension2D;if(b>oe||V>oe)throw new Error(`⚠️  atlas slice dims ${V}x${b} exceed maxTextureDimension2D=${oe}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const L=C*B;if(L>o.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${C} cols × ${B} layers = ${L} slices > maxTextureArrayLayers=${o.limits.maxTextureArrayLayers}.`);const I=r.mip_bytes??[F],X=I.length,H=o.createTexture({label:v,size:{width:V,height:b,depthOrArrayLayers:L},mipLevelCount:X,sampleCount:1,dimension:"2d",format:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let _e=0;_e<C;_e++){const he=M[_e]/4,se=(M[_e+1]-M[_e])/4;for(let ce=0;ce<B;ce++){const Te=T[ce]/4,de=(T[ce+1]-T[ce])/4,Ie=_e*B+ce,te=Te*q+he*16;o.queue.writeTexture({texture:H,mipLevel:0,origin:{x:0,y:0,z:Ie},aspect:"all"},F,{offset:te,bytesPerRow:q,rowsPerImage:de},{width:se*4,height:de*4,depthOrArrayLayers:1})}}const Y=r.format===is||r.format===os;for(let _e=1;_e<X&&!Y;_e++){let he=0;for(let se=0;se<C;se++)for(let ce=0;ce<B;ce++){const{cw:Te,ch:de}=eo(_e,M[se+1]-M[se],T[ce+1]-T[ce],V,b);o.queue.writeTexture({texture:H,mipLevel:_e,origin:{x:0,y:0,z:se*B+ce},aspect:"all"},I[_e],{offset:he,bytesPerRow:(Te>>2)*16,rowsPerImage:de>>2},{width:Te,height:de,depthOrArrayLayers:1}),he+=(Te>>2)*(de>>2)*16}}for(let _e=1;_e<X&&Y;_e++){const he=Math.max(1,V>>_e),se=Math.max(1,b>>_e);o.queue.writeTexture({texture:H,mipLevel:_e,origin:{x:0,y:0,z:0},aspect:"all"},I[_e],{offset:0,bytesPerRow:Math.max(1,he>>2)*16,rowsPerImage:Math.max(1,se>>2)},{width:he,height:se,depthOrArrayLayers:1})}X>1&&console.log(`[atlas] ${X} mip levels uploaded (${Y?"trilinear":"per-surfel integer level"})`);const Z=H.createView({label:`${v} view`,dimension:"2d-array"}),ie=o.createSampler({label:`${v} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:X>1&&Y?"linear":"nearest"});return{texture:H,view:Z,sampler:ie}}function xs(o,r,a,v,p=1){var M;const b=new ArrayBuffer(32),B=new Uint32Array(b),C=new Float32Array(b);B[0]=v?1:0,C[1]=a.atlas_scale,C[2]=a.atlas_offset,C[3]=a.res_bias,B[4]=a.probe_mode?a.probe_mode|0:0,B[5]=a.width|0;const T=(((M=a.mip_bytes)==null?void 0:M.length)??1)>1;B[6]=T&&p!==0?1:0,C[7]=a.uv_extent,o.queue.writeBuffer(r,0,b)}async function Ps(o,r){wt(`loading ply file from File... : ${o.name}`),On("downloading PLY...");const a=await o.arrayBuffer();try{return await no(a,r)}finally{Ht()}}async function xc(o,r){wt(`loading ply file from URL... : ${o}`),On("downloading PLY...");try{Qi();const a=new URL(o,self.location.href).href;return await no({url:a},r)}finally{Ht()}}function to(o){return new Promise((r,a)=>{const v=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});v.onmessage=p=>{const b=p.data;if((b==null?void 0:b.type)==="error"){fc(`PLY worker error: ${b.message??"unknown error"}`),v.terminate(),a(new Error(b.message??"Worker error"));return}else if((b==null?void 0:b.type)==="download_progress"){const B=b.totalBytes,C=b.loadedBytes/(1024*1024),T=B?B/(1024*1024):void 0,M=(b.speedBps??0)/(1024*1024),V=B?Math.min(99,Math.floor(b.loadedBytes/B*100)):void 0,F=T?`total ${T.toFixed(1)} MB`:"total -- MB",G=T&&V!==void 0?`${C.toFixed(1)} MB downloaded (${V}%)`:`${C.toFixed(1)} MB downloaded`,q=`${M.toFixed(2)} MB/s`;Mt(`downloading PLY ...
${F}, ${G}
${q}`);return}else if((b==null?void 0:b.type)==="fetched"){wt(`💾 Fetched (${b.byteLength} bytes)`),Ci("Download"),Mt("parsing PLY..."),Qi();return}else if((b==null?void 0:b.type)==="parse_progress"){const B=b.total??0,C=b.read??0,T=B>0?Math.floor(C/B*100):0;Mt(`parsing PLY ...
${C}/${B} surfels (${T}%)`);return}else(b==null?void 0:b.type)==="done"&&(v.terminate(),Ci("Parse"),r(b))},v.onerror=p=>{v.terminate(),a(p)},o instanceof ArrayBuffer?(Mt("parsing PLY..."),v.postMessage({type:"start",plyBuffer:o},[o])):v.postMessage({type:"start_url",url:o.url})})}async function Bi(o){var a,v,p,b,B,C,T,M,V,F,G,q;const r=await to(await o.arrayBuffer());return{num_points:r.num_points,K:r.K,feature_mode:r.feature_mode??0,sh_bias:r.sh_bias,kernel_type:r.kernel_type,surfel_data:new Float32Array(r.surfelBuffer),sv_params:new Float32Array(r.svParamsBuffer),bbox:r.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:r.centroid??[((((v=(a=r.bbox)==null?void 0:a.min)==null?void 0:v[0])??-1)+(((b=(p=r.bbox)==null?void 0:p.max)==null?void 0:b[0])??1))/2,((((C=(B=r.bbox)==null?void 0:B.min)==null?void 0:C[1])??-1)+(((M=(T=r.bbox)==null?void 0:T.max)==null?void 0:M[1])??1))/2,((((F=(V=r.bbox)==null?void 0:V.min)==null?void 0:F[2])??-1)+(((q=(G=r.bbox)==null?void 0:G.max)==null?void 0:q[2])??1))/2]}}async function no(o,r){var oe,L,I,X,H,Y,Z,ie,_e,he,se,ce;const a=await to(o),v=a.num_points,p=a.K,b=a.feature_mode??0,B=a.sh_bias,C=a.kernel_type,T=a.surfelBuffer,M=a.svParamsBuffer,V=b===2?"NASG":b===1?"SB":"SV";wt(`🪐 Total surfels: ${v}, mode=${V}, K=${p}, sh_bias=${B}, kernel_type=${C}`);const F=r.createBuffer({label:"surfel input buffer",size:In(v*wc),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});r.queue.writeBuffer(F,0,T);const G=M.byteLength>0?M.byteLength:16,q=r.createBuffer({label:`color_params buffer (${V})`,size:In(G),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return M.byteLength>0&&r.queue.writeBuffer(q,0,M),{num_points:v,K:p,feature_mode:b,sh_bias:B,kernel_type:C,surfel_buffer:F,surfel_data:new Float32Array(T),sv_params_buffer:q,bbox:a.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:a.centroid??[((((L=(oe=a.bbox)==null?void 0:oe.min)==null?void 0:L[0])??-1)+(((X=(I=a.bbox)==null?void 0:I.max)==null?void 0:X[0])??1))/2,((((Y=(H=a.bbox)==null?void 0:H.min)==null?void 0:Y[1])??-1)+(((ie=(Z=a.bbox)==null?void 0:Z.max)==null?void 0:ie[1])??1))/2,((((he=(_e=a.bbox)==null?void 0:_e.min)==null?void 0:he[2])??-1)+(((ce=(se=a.bbox)==null?void 0:se.max)==null?void 0:ce[2])??1))/2]}}const Ss="BITYMI01",yc=0,Pc=1,Sc=2,Ec=3,kc=4,Cc=5;function gr(o){const r=new Uint8Array(o),a=new TextDecoder().decode(r.subarray(0,8));if(a!==Ss)throw new Error(`Not a BITYMI bundle (bad magic '${a}')`);const v=new DataView(o),p=v.getUint32(8,!0),b=12,B=20;let C=null,T=null,M=null;for(let V=0;V<p;V++){const F=b+V*B,G=v.getUint32(F+0,!0),q=Number(v.getBigUint64(F+4,!0)),oe=Number(v.getBigUint64(F+12,!0)),L=r.slice(q,q+oe).buffer;G===yc||G===Pc||G===Cc?C=L:G===Sc?T=L:(G===Ec||G===kc)&&(M=L)}if(C===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:C,camerasBuffer:T,atlasBuffer:M}}async function Fn(o,r){var B;const a=await fetch(o);if(!a.ok)throw new Error(`fetch failed: ${a.status} ${a.statusText}`);const v=(()=>{const C=a.headers.get("content-length");return C&&parseInt(C,10)||void 0})(),p=(B=a.body)==null?void 0:B.getReader();let b;if(!p)b=await a.arrayBuffer(),r&&r(b.byteLength,v,0);else{const C=[];let T=0,M=performance.now(),V=0;for(;;){const{done:q,value:oe}=await p.read();if(q)break;C.push(oe),T+=oe.byteLength;const L=performance.now();if(L-M>=150&&r){const I=(T-V)/((L-M)/1e3);r(T,v,I),M=L,V=T}}const F=new Uint8Array(T);let G=0;for(const q of C)F.set(q,G),G+=q.byteLength;b=F.buffer,r&&r(T,v,0)}return b.byteLength>=8&&new TextDecoder().decode(new Uint8Array(b,0,8))===Ss?{bundle:gr(b),rawPly:null}:{bundle:null,rawPly:b}}var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(o,r){(function(a,v){v(r)})(Tc,function(a){class v{constructor(e){const[t,s]=e.split("-"),d=t.split(".");this.major=parseInt(d[0],10),this.minor=parseInt(d[1],10),this.patch=parseInt(d[2],10),this.prerelease=s??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class p{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class b{constructor(e){this.target=e}}class B extends b{constructor(e,t,s,d){super(e),this.value=t,this.presetKey=s,this.last=d??!0}}class C extends b{constructor(e,t,s){super(e),this.value=t,this.presetKey=s}}class T extends b{constructor(e,t){super(e),this.expanded=t}}class M extends b{constructor(e,t){super(e),this.index=t}}function V(n){return n}function F(n){return n==null}function G(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function q(n,e){let t=n;do{const s=Object.getOwnPropertyDescriptor(t,e);if(s&&(s.set!==void 0||s.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const oe={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class L{static alreadyDisposed(){return new L({type:"alreadydisposed"})}static notBindable(){return new L({type:"notbindable"})}static propertyNotFound(e){return new L({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new L({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=oe[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class I{constructor(e,t,s){this.obj_=e,this.key_=t,this.presetKey_=s??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const s=this.read();if(!I.isBindable(s))throw L.notBindable();if(!(e in s))throw L.propertyNotFound(e);s[e]=t}}class X extends p{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const s=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{s(new b(this))}),this}}class H{constructor(){this.observers_={}}on(e,t){let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t}),this}off(e,t){const s=this.observers_[e];return s&&(this.observers_[e]=s.filter(d=>d.handler!==t)),this}emit(e,t){const s=this.observers_[e];s&&s.forEach(d=>{d.handler(t)})}}const Y="tp";function Z(n){return(t,s)=>[Y,"-",n,"v",t?`_${t}`:"",s?`-${s}`:""].join("")}function ie(n,e){return t=>e(n(t))}function _e(n){return n.rawValue}function he(n,e){n.emitter.on("change",ie(_e,e)),e(n.rawValue)}function se(n,e,t){he(n.value(e),t)}function ce(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{ce(n,e,t)}}function de(n,e){he(n,t=>{e.textContent=t??""})}const Ie=Z("btn");class te{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ie()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("button");s.classList.add(Ie("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const d=e.createElement("div");d.classList.add(Ie("t")),de(t.props.value("title"),d),this.buttonElement.appendChild(d)}}class ge{constructor(e,t){this.emitter=new H,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new te(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ee{constructor(e,t){var s;this.constraint_=t==null?void 0:t.constraint,this.equals_=(s=t==null?void 0:t.equals)!==null&&s!==void 0?s:(d,A)=>d===A,this.emitter=new H,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},d=this.constraint_?this.constraint_.constrain(e):e,A=this.rawValue_;this.equals_(A,d)&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=d,this.emitter.emit("change",{options:s,previousRawValue:A,rawValue:d,sender:this}))}}class we{constructor(e){this.emitter=new H,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const s=t??{forceEmit:!1,last:!0},d=this.value_;d===e&&!s.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:s,previousRawValue:d,rawValue:this.value_,sender:this}))}}function N(n,e){const t=e==null?void 0:e.constraint,s=e==null?void 0:e.equals;return!t&&!s?new we(n):new Ee(n,e)}class J{constructor(e){this.emitter=new H,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((s,d)=>Object.assign(s,{[d]:N(e[d])}),{})}static fromObject(e){const t=this.createCore(e);return new J(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function j(n,e){const s=Object.keys(e).reduce((d,A)=>{if(d===void 0)return;const $=e[A],fe=$(n[A]);return fe.succeeded?Object.assign(Object.assign({},d),{[A]:fe.value}):void 0},{});return s}function pe(n,e){return n.reduce((t,s)=>{if(t===void 0)return;const d=e(s);if(!(!d.succeeded||d.value===void 0))return[...t,d.value]},[])}function ze(n){return n===null?!1:typeof n=="object"}function ye(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const s=n(t);return s!==void 0?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function Me(n){return{custom:e=>ye(e)(n),boolean:ye(e=>typeof e=="boolean"?e:void 0)(n),number:ye(e=>typeof e=="number"?e:void 0)(n),string:ye(e=>typeof e=="string"?e:void 0)(n),function:ye(e=>typeof e=="function"?e:void 0)(n),constant:e=>ye(t=>t===e?e:void 0)(n),raw:ye(e=>e)(n),object:e=>ye(t=>{if(ze(t))return j(t,e)})(n),array:e=>ye(t=>{if(Array.isArray(t))return pe(t,e)})(n)}}const re={optional:Me(!0),required:Me(!1)};function ve(n,e){const t=re.required.object(e)(n);return t.succeeded?t.value:void 0}function Re(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function z(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Q{constructor(e){this.value_=e}static create(e){return[new Q(e),(t,s)=>{e.setRawValue(t,s)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const y=Z("");function l(n,e){return Te(n,y(void 0,e))}class _ extends J{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Q.create(N(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,s,d;const A=e??{};return new _(J.createCore({disabled:(t=A.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(s=A.hidden)!==null&&s!==void 0?s:!1,parent:(d=A.parent)!==null&&d!==void 0?d:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){he(this.globalDisabled_,l(e,"disabled")),se(this,"hidden",l(e,"hidden"))}bindDisabled(e){he(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){he(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const s=e.previousRawValue;s==null||s.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const x=Z(""),k={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class w{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(s=>{t.classList.remove(x(void 0,k[s]))}),this.blade.get("positions").forEach(s=>{t.classList.add(x(void 0,k[s]))})}),this.viewProps.handleDispose(()=>{z(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Re({key:"parent",target:_.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function i(n){n.offsetHeight}function g(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function h(n){return n.ontouchstart!==void 0}function f(){return globalThis}function c(){return f().document}function m(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const E={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function P(n,e){const t=n.createElementNS(S,"svg");return t.innerHTML=E[e],t}function D(n,e,t){n.insertBefore(e,n.children[t])}function O(n){n.parentElement&&n.parentElement.removeChild(n)}function K(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ae(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ne(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const le=Z("lbl");function Pe(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(d=>n.createTextNode(d)).forEach((d,A)=>{A>0&&t.appendChild(n.createElement("br")),t.appendChild(d)}),t}class Be{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(le()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(le("l")),se(t.props,"label",A=>{F(A)?this.element.classList.add(le(void 0,"nol")):(this.element.classList.remove(le(void 0,"nol")),ae(s),s.appendChild(Pe(e,A)))}),this.element.appendChild(s),this.labelElement=s;const d=e.createElement("div");d.classList.add(le("v")),this.element.appendChild(d),this.valueElement=d}}class ke extends w{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ce={id:"button",type:"blade",accept(n){const e=re,t=ve(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new ke(n.document,{blade:n.blade,props:J.fromObject({label:n.params.label}),valueController:new ge(n.document,{props:J.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof ke)||!(n.controller.valueController instanceof ge)?null:new X(n.controller)}};class Fe extends w{constructor(e){super(e),this.value=e.value}}function Ge(){return new J({positions:N([],{equals:G})})}class Ze extends J{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},s=J.createCore(t);return new Ze(s)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!F(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const s=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};se(this,"expanded",s),se(this,"temporaryExpanded",s)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Xe(n,e){let t=0;return g(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),i(e),t=e.clientHeight,n.set("temporaryExpanded",null),i(e)}),t}function We(n,e){e.style.height=n.styleHeight}function Ke(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),F(n.get("expandedHeight"))){const t=Xe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),i(e)}),n.emitter.on("change",()=>{We(n,e)}),We(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Oe extends p{constructor(e,t){super(e),this.rackApi_=t}}function je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function ct(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function at(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Qe(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class tt{constructor(e){this.emitter=new H,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw L.shouldNeverHappen();const s=t!==void 0?t:this.items_.length;this.items_.splice(s,0,e),this.cache_.add(e);const d=this.extract_(e);d&&(d.emitter.on("add",this.onSubListAdd_),d.emitter.on("remove",this.onSubListRemove_),d.allItems().forEach(A=>{this.cache_.add(A)})),this.emitter.emit("add",{index:s,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const s=this.extract_(e);s&&(s.emitter.off("add",this.onSubListAdd_),s.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class st extends p{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new H,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new B(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class Ve extends ke{constructor(e,t){super(e,t),this.binding=t.binding}}class rt extends p{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new H,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new C(this,t,this.controller_.binding.target.presetKey)})}}class it extends ke{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ht(n){return n instanceof lt?n.apiSet_:n instanceof Oe?n.rackApi_.apiSet_:null}function nt(n,e){const t=n.find(s=>s.controller_===e);if(!t)throw L.shouldNeverHappen();return t}function Pt(n,e,t){if(!I.isBindable(n))throw L.notBindable();return new I(n,e,t)}class lt extends p{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new H,this.apiSet_=new tt(ht),this.pool_=t;const s=this.controller_.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),s.emitter.on("inputchange",this.onRackInputChange_),s.emitter.on("monitorupdate",this.onRackMonitorUpdate_),s.children.forEach(d=>{this.setUpApi_(d)})}get children(){return this.controller_.rack.children.map(e=>nt(this.apiSet_,e))}addInput(e,t,s){const d=s??{},A=this.controller_.view.element.ownerDocument,$=this.pool_.createInput(A,Pt(e,t,d.presetKey),d),fe=new st($);return this.add(fe,d.index)}addMonitor(e,t,s){const d=s??{},A=this.controller_.view.element.ownerDocument,$=this.pool_.createMonitor(A,Pt(e,t),d),fe=new rt($);return this.add(fe,d.index)}addFolder(e){return ct(this,e)}addButton(e){return je(this,e)}addSeparator(e){return at(this,e)}addTab(e){return Qe(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const s=this.apiSet_.find(d=>d.controller_===e.controller_);return s&&this.apiSet_.remove(s),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,s=this.pool_.createBlade(t,e),d=this.pool_.createBladeApi(s);return this.add(d,e.index)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}setUpApi_(e){this.apiSet_.find(s=>s.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=nt(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof Ve){const s=nt(this.apiSet_,t),d=t.binding;this.emitter_.emit("change",{event:new B(s,d.target.read(),d.target.presetKey,e.options.last)})}else if(t instanceof Fe){const s=nt(this.apiSet_,t);this.emitter_.emit("change",{event:new B(s,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof it))throw L.shouldNeverHappen();const t=nt(this.apiSet_,e.bladeController),s=e.bladeController.binding;this.emitter_.emit("update",{event:new C(t,s.target.read(),s.target.presetKey)})}}class bt extends Oe{constructor(e,t){super(e,new lt(e.rackController,t)),this.emitter_=new H,this.controller_.foldable.value("expanded").emitter.on("change",s=>{this.emitter_.emit("fold",{event:new T(this,s.sender.rawValue)})}),this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}class St extends w{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Vt{constructor(e,t){const s=Z(t.viewName);this.element=e.createElement("div"),this.element.classList.add(s()),t.viewProps.bindClassModifiers(this.element)}}function Dt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Ve&&s.binding===e)return s}return null}function Nt(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof it&&s.binding===e)return s}return null}function $t(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(s instanceof Fe&&s.value===e)return s}return null}function Ct(n){return n instanceof ot?n.rack:n instanceof St?n.rackController.rack:null}function Gt(n){const e=Ct(n);return e?e.bcSet_:null}class qt{constructor(e){var t,s;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new H,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(s=this.blade_)===null||s===void 0||s.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new tt(Gt),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var s;(s=e.parent)===null||s===void 0||s.remove(e),q(e,"parent")?e.parent=this:(e.parent_=this,Re({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){q(e,"parent")?e.parent=null:(e.parent_=null,Re({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const s=e.item;if(s.viewProps.emitter.on("change",this.onChildViewPropsChange_),s.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),s.viewProps.handleDispose(this.onChildDispose_),s instanceof Ve)s.binding.emitter.on("change",this.onChildInputChange_);else if(s instanceof it)s.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(s instanceof Fe)s.value.emitter.on("change",this.onChildValueChange_);else{const d=Ct(s);if(d){const A=d.emitter;A.on("layout",this.onDescendantLayout_),A.on("inputchange",this.onDescendantInputChange_),A.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const s=e.item;if(s instanceof Ve)s.binding.emitter.off("change",this.onChildInputChange_);else if(s instanceof it)s.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(s instanceof Fe)s.value.emitter.off("change",this.onChildValueChange_);else{const d=Ct(s);if(d){const A=d.emitter;A.off("layout",this.onDescendantLayout_),A.off("inputchange",this.onDescendantInputChange_),A.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(d=>!d.viewProps.get("hidden")),t=e[0],s=e[e.length-1];this.bcSet_.items.forEach(d=>{const A=[];d===t&&(A.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&A.push("veryfirst")),d===s&&(A.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&A.push("verylast")),d.blade.set("positions",A)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=Dt(this.find(Ve),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Nt(this.find(it),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=$t(this.find(Fe),e.sender);if(!t)throw L.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class ot extends w{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Vt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=new qt({blade:t.root?void 0:t.blade,viewProps:t.viewProps});s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.rack=s,this.viewProps.handleDispose(()=>{for(let d=this.rack.children.length-1;d>=0;d--)this.rack.children[d].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&D(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&O(e.bladeController.view.element)}}const Ut=Z("cnt");class pn{constructor(e,t){var s;this.className_=Z((s=t.viewName)!==null&&s!==void 0?s:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),Ut()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),se(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const d=e.createElement("button");d.classList.add(this.className_("b")),se(t.props,"title",Le=>{F(Le)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d;const A=e.createElement("div");A.classList.add(this.className_("i")),this.element.appendChild(A);const $=e.createElement("div");$.classList.add(this.className_("t")),de(t.props.value("title"),$),this.buttonElement.appendChild($),this.titleElement=$;const fe=e.createElement("div");fe.classList.add(this.className_("m")),this.buttonElement.appendChild(fe);const De=t.containerElement;De.classList.add(this.className_("c")),this.element.appendChild(De),this.containerElement=De}}class hn extends St{constructor(e,t){var s;const d=Ze.create((s=t.expanded)!==null&&s!==void 0?s:!0),A=new ot(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:A,view:new pn(e,{containerElement:A.view.element,foldable:d,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=d,Ke(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Cn={id:"folder",type:"blade",accept(n){const e=re,t=ve(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new hn(n.document,{blade:n.blade,expanded:n.params.expanded,props:J.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof hn?new bt(n.controller,n.pool):null}};class Wt extends Fe{constructor(e,t){const s=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Be(e,{props:t.props,viewProps:s}),viewProps:s})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class _t extends p{}const as=Z("spr");class Ms{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(as()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("hr");s.classList.add(as("r")),this.element.appendChild(s)}}class ls extends w{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ms(e,{viewProps:t.viewProps})}))}}const Rs={id:"separator",type:"blade",accept(n){const t=ve(n,{view:re.required.constant("separator")});return t?{params:t}:null},controller(n){return new ls(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof ls?new _t(n.controller):null}},nn=Z("tbi");class Vn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(nn()),t.viewProps.bindClassModifiers(this.element),se(t.props,"selected",A=>{A?this.element.classList.add(nn(void 0,"sel")):this.element.classList.remove(nn(void 0,"sel"))});const s=e.createElement("button");s.classList.add(nn("b")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const d=e.createElement("div");d.classList.add(nn("t")),de(t.props.value("title"),d),this.buttonElement.appendChild(d),this.titleElement=d}}class cs{constructor(e,t){this.emitter=new H,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Vn(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Nn{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new cs(e,{props:t.itemProps,viewProps:_.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new ot(e,{blade:Ge(),viewProps:_.create()}),this.props=t.props,se(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.contentController.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class $n{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,s){return this.rackApi_.addInput(e,t,s)}addMonitor(e,t,s){return this.rackApi_.addMonitor(e,t,s)}addBlade(e){return this.rackApi_.addBlade(e)}}class qn extends Oe{constructor(e,t){super(e,new lt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new H,this.pageApiMap_=new Map,this.rackApi_.on("change",s=>{this.emitter_.emit("change",{event:s})}),this.rackApi_.on("update",s=>{this.emitter_.emit("update",{event:s})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(s=>{this.setUpPageApi_(s)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw L.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,s=new Nn(t,{itemProps:J.fromObject({selected:!1,title:e.title}),props:J.fromObject({selected:!1})});this.controller_.add(s,e.index);const d=this.pageApiMap_.get(s);if(!d)throw L.shouldNeverHappen();return d}removePage(e){this.controller_.remove(e)}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(d=>d.controller_===e.contentController);if(!t)throw L.shouldNeverHappen();const s=new $n(e,t);this.pageApiMap_.set(e,s)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw L.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new M(this,e.rawValue)})}}const Tn=-1;class us{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=N(!0),this.selectedIndex=N(Tn),this.items_=[]}add(e,t){const s=t??this.items_.length;this.items_.splice(s,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Tn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,s)=>{t.rawValue=s===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,s)=>{t.rawValue=s===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(s=>s===e.sender);this.items_.forEach((s,d)=>{s.rawValue=d===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Kt=Z("tab");class Ds{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Kt(),Ut()),t.viewProps.bindClassModifiers(this.element),he(t.empty,Te(this.element,Kt(void 0,"nop")));const s=e.createElement("div");s.classList.add(Kt("t")),this.element.appendChild(s),this.itemsElement=s;const d=e.createElement("div");d.classList.add(Kt("i")),this.element.appendChild(d);const A=t.contentsElement;A.classList.add(Kt("c")),this.element.appendChild(A),this.contentsElement=A}}class sn extends St{constructor(e,t){const s=new ot(e,{blade:t.blade,viewProps:t.viewProps}),d=new us;super({blade:t.blade,rackController:s,view:new Ds(e,{contentsElement:s.view.element,empty:d.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new tt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=d}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;D(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;O(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const ds={id:"tab",type:"blade",accept(n){const e=re,t=ve(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new sn(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const s=new Nn(n.document,{itemProps:J.fromObject({selected:!1,title:t.title}),props:J.fromObject({selected:!1})});e.add(s)}),e},api(n){return n.controller instanceof sn?new qn(n.controller,n.pool):null}};function U(n,e){const t=n.accept(e.params);if(!t)return null;const s=re.optional.boolean(e.params.disabled).value,d=re.optional.boolean(e.params.hidden).value;return n.controller({blade:Ge(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:s,hidden:d}),viewProps:_.create({disabled:s,hidden:d})})}class ee{constructor(){this.disabled=!1,this.emitter=new H}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ue{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new H,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class me{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new H,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function Se(n,e){for(;n.length<e;)n.push(void 0)}function be(n){const e=[];return Se(e,n),N(e)}function xe(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Ae(n,e){const t=[...xe(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Se(t,n.length),t}class et{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new H,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,s=this.reader_(e);this.value.rawValue=Ae(t,s),this.emitter.emit("update",{rawValue:s,sender:this})}onTick_(e){this.read()}}class ut{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,s)=>s.constrain(t),e)}}function ft(n,e){if(n instanceof e)return n;if(n instanceof ut){const t=n.constraints.reduce((s,d)=>s||(d instanceof e?d:null),null);if(t)return t}return null}class Ue{constructor(e){this.values=J.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),s=this.values.get("min");return Math.min(Math.max(e,s),t)}}class He{constructor(e){this.values=J.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(d=>d.value===e).length>0?e:t[0].value}}class Rt{constructor(e){this.values=J.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),s=this.values.get("min");let d=e;return F(s)||(d=Math.max(d,s)),F(t)||(d=Math.min(d,t)),d}}class qe{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,s=Math.round((e-t)/this.step);return t+s*this.step}}const Tt=Z("lst");class mt{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Tt()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("select");s.classList.add(Tt("s")),t.viewProps.bindDisabled(s),this.element.appendChild(s),this.selectElement=s;const d=e.createElement("div");d.classList.add(Tt("m")),d.appendChild(P(e,"dropdown")),this.element.appendChild(d),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,se(this.props_,"options",A=>{K(this.selectElement),A.forEach($=>{const fe=e.createElement("option");fe.textContent=$.text,this.selectElement.appendChild(fe)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class zt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new mt(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Ft=Z("pop");class Bn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ft()),t.viewProps.bindClassModifiers(this.element),he(t.shows,Te(this.element,Ft(void 0,"v")))}}class Ot{constructor(e,t){this.shows=N(!1),this.viewProps=t.viewProps,this.view=new Bn(e,{shows:this.shows,viewProps:this.viewProps})}}const Et=Z("txt");class fn{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Et()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const s=e.createElement("input");s.classList.add(Et("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Yt{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new fn(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const s=e.currentTarget.value,d=this.parser_(s);F(d)||(this.value.rawValue=d),this.view.refresh()}}function Zt(n){return String(n)}function _n(n){return n==="false"?!1:!!n}function mn(n){return Zt(n)}class Us{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Wn={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class mo{constructor(e,t,s){this.left=t,this.operator=e,this.right=s}evaluate(){const e=Wn[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const vo={"+":n=>n,"-":n=>-n,"~":n=>~n};class bo{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=vo[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function zs(n){return(e,t)=>{for(let s=0;s<n.length;s++){const d=n[s](e,t);if(d!=="")return d}return""}}function Kn(n,e){var t;const s=n.substr(e).match(/^\s+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function go(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function jn(n,e){var t;const s=n.substr(e).match(/^[0-9]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function wo(n,e){const t=jn(n,e);if(t!=="")return t;const s=n.substr(e,1);if(e+=1,s!=="-"&&s!=="+")return"";const d=jn(n,e);return d===""?"":s+d}function Ls(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const s=wo(n,e);return s===""?"":t+s}function yr(n,e){const t=n.substr(e,1);if(t==="0")return t;const s=go(n,e);return e+=s.length,s===""?"":s+jn(n,e)}function xo(n,e){const t=yr(n,e);if(e+=t.length,t==="")return"";const s=n.substr(e,1);if(e+=s.length,s!==".")return"";const d=jn(n,e);return e+=d.length,t+s+d+Ls(n,e)}function yo(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const s=jn(n,e);return e+=s.length,s===""?"":t+s+Ls(n,e)}function Po(n,e){const t=yr(n,e);return e+=t.length,t===""?"":t+Ls(n,e)}const So=zs([xo,yo,Po]);function Eo(n,e){var t;const s=n.substr(e).match(/^[01]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function ko(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const s=Eo(n,e);return s===""?"":t+s}function Co(n,e){var t;const s=n.substr(e).match(/^[0-7]+/);return(t=s&&s[0])!==null&&t!==void 0?t:""}function To(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const s=Co(n,e);return s===""?"":t+s}function Bo(n,e){var t;const s=n.substr(e).match(/^[0-9a-f]+/i);return(t=s&&s[0])!==null&&t!==void 0?t:""}function Ao(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const s=Bo(n,e);return s===""?"":t+s}const Mo=zs([ko,To,Ao]),Ro=zs([Mo,So]);function Do(n,e){const t=Ro(n,e);return e+=t.length,t===""?null:{evaluable:new Us(t),cursor:e}}function Uo(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const s=Sr(n,e);if(!s)return null;e=s.cursor,e+=Kn(n,e).length;const d=n.substr(e,1);return e+=d.length,d!==")"?null:{evaluable:s.evaluable,cursor:e}}function zo(n,e){var t;return(t=Do(n,e))!==null&&t!==void 0?t:Uo(n,e)}function Pr(n,e){const t=zo(n,e);if(t)return t;const s=n.substr(e,1);if(e+=s.length,s!=="+"&&s!=="-"&&s!=="~")return null;const d=Pr(n,e);return d?(e=d.cursor,{cursor:e,evaluable:new bo(s,d.evaluable)}):null}function Lo(n,e,t){t+=Kn(e,t).length;const s=n.filter(d=>e.startsWith(d,t))[0];return s?(t+=s.length,t+=Kn(e,t).length,{cursor:t,operator:s}):null}function Io(n,e){return(t,s)=>{const d=n(t,s);if(!d)return null;s=d.cursor;let A=d.evaluable;for(;;){const $=Lo(e,t,s);if(!$)break;s=$.cursor;const fe=n(t,s);if(!fe)return null;s=fe.cursor,A=new mo($.operator,A,fe.evaluable)}return A?{cursor:s,evaluable:A}:null}}const Go=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Io(n,e),Pr);function Sr(n,e){return e+=Kn(n,e).length,Go(n,e)}function Fo(n){const e=Sr(n,0);return!e||e.cursor+Kn(n,e.cursor).length!==n.length?null:e.evaluable}function Xt(n){var e;const t=Fo(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Er(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Xt(n);if(!F(e))return e}return 0}function Oo(n){return String(n)}function yt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Vo=yt(0);function ps(n){return Vo(n)+"%"}function kr(n){return String(n)}function Is(n){return n}function Hn({primary:n,secondary:e,forward:t,backward:s}){let d=!1;function A($){d||(d=!0,$(),d=!1)}n.emitter.on("change",$=>{A(()=>{e.setRawValue(t(n,e),$.options)})}),e.emitter.on("change",$=>{A(()=>{n.setRawValue(s(n,e),$.options)}),A(()=>{e.setRawValue(t(n,e),$.options)})}),A(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function Bt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Yn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Jt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function No(n){return n==="ArrowUp"||n==="ArrowDown"}function Cr(n){return No(n)||n==="ArrowLeft"||n==="ArrowRight"}function Gs(n,e){var t,s;const d=e.ownerDocument.defaultView,A=e.getBoundingClientRect();return{x:n.pageX-(((t=d&&d.scrollX)!==null&&t!==void 0?t:0)+A.left),y:n.pageY-(((s=d&&d.scrollY)!==null&&s!==void 0?s:0)+A.top)}}class vn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new H,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const s=this.elem_.ownerDocument;s.addEventListener("mousemove",this.onDocumentMouseMove_),s.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Gs(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),s=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-s.left,y:t.clientY-s.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const s=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,d=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(s?{x:s.clientX-d.left,y:s.clientY-d.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function dt(n,e,t,s,d){const A=(n-e)/(t-e);return s+A*(d-s)}function Tr(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function xt(n,e,t){return Math.min(Math.max(n,e),t)}function Br(n,e){return(n%e+e)%e}const Lt=Z("txt");class $o{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Lt(),Lt(void 0,"num")),t.arrayPosition&&this.element.classList.add(Lt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(Lt("i")),s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Lt()),this.inputElement.classList.add(Lt("i"));const d=e.createElement("div");d.classList.add(Lt("k")),this.element.appendChild(d),this.knobElement=d;const A=e.createElementNS(S,"svg");A.classList.add(Lt("g")),this.knobElement.appendChild(A);const $=e.createElementNS(S,"path");$.classList.add(Lt("gb")),A.appendChild($),this.guideBodyElem_=$;const fe=e.createElementNS(S,"path");fe.classList.add(Lt("gh")),A.appendChild(fe),this.guideHeadElem_=fe;const De=e.createElement("div");De.classList.add(Z("tt")()),this.knobElement.appendChild(De),this.tooltipElem_=De,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(Lt(void 0,"drg"));return}this.element.classList.add(Lt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),s=t+(t>0?-1:t<0?1:0),d=xt(-s,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${s+d},0 L${s},4 L${s+d},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const A=this.props_.get("formatter");this.tooltipElem_.textContent=A(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Zn{constructor(e,t){var s;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(s=t.sliderProps)!==null&&s!==void 0?s:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=N(null),this.view=new $o(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const d=new vn(this.view.knobElement);d.emitter.on("down",this.onPointerDown_),d.emitter.on("move",this.onPointerMove_),d.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,s;const d=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),A=(s=this.sliderProps_)===null||s===void 0?void 0:s.get("maxValue");let $=e;return d!==void 0&&($=Math.max($,d)),A!==void 0&&($=Math.min($,A)),$}onInputChange_(e){const s=e.currentTarget.value,d=this.parser_(s);F(d)||(this.value.rawValue=this.constrainValue_(d)),this.view.refresh()}onInputKeyDown_(e){const t=Bt(this.baseStep_,Yn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Bt(this.baseStep_,Yn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Fs=Z("sld");class qo{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Fs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Fs("t")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.trackElement=s;const d=e.createElement("div");d.classList.add(Fs("k")),this.trackElement.appendChild(d),this.knobElement=d,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=xt(dt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Wo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new qo(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(dt(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Bt(this.baseStep_,Jt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Bt(this.baseStep_,Jt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Os=Z("sldtxt");class Ko{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Os());const s=e.createElement("div");s.classList.add(Os("s")),this.sliderView_=t.sliderView,s.appendChild(this.sliderView_.element),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(Os("t")),this.textView_=t.textView,d.appendChild(this.textView_.element),this.element.appendChild(d)}}class Vs{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Wo(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Zn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Ko(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Xn(n,e){n.write(e)}function hs(n){const e=re;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Ar(n){if(n==="inline"||n==="popup")return n}function rn(n){const e=re;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Mr(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Ns(n){return F(n)?null:new He(Mr(n))}function jo(n){const e=n?ft(n,qe):null;return e?e.step:null}function fs(n,e){const t=n&&ft(n,qe);return t?Tr(t.step):Math.max(Tr(e),2)}function An(n){const e=jo(n);return e??1}function Mn(n,e){var t;const s=n&&ft(n,qe),d=Math.abs((t=s==null?void 0:s.step)!==null&&t!==void 0?t:e);return d===0?.1:Math.pow(10,Math.floor(Math.log10(d))-1)}const _s=Z("ckb");class Ho{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(_s()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("label");s.classList.add(_s("l")),this.element.appendChild(s);const d=e.createElement("input");d.classList.add(_s("i")),d.type="checkbox",s.appendChild(d),this.inputElement=d,t.viewProps.bindDisabled(this.inputElement);const A=e.createElement("div");A.classList.add(_s("w")),s.appendChild(A);const $=P(e,"check");A.appendChild($),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Yo{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ho(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Zo(n){const e=[],t=Ns(n.options);return t&&e.push(t),new ut(e)}const Xo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ve(e,{options:re.optional.custom(hs)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>_n,constraint:n=>Zo(n.params),writer:n=>Xn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,d=s&&ft(s,He);return d?new zt(e,{props:new J({options:d.values.value("options")}),value:t,viewProps:n.viewProps}):new Yo(e,{value:t,viewProps:n.viewProps})}},bn=Z("col");class Jo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(bn()),t.foldable.bindExpandedClass(this.element,bn(void 0,"expanded")),se(t.foldable,"completed",Te(this.element,bn(void 0,"cpl")));const s=e.createElement("div");s.classList.add(bn("h")),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(bn("s")),s.appendChild(d),this.swatchElement=d;const A=e.createElement("div");if(A.classList.add(bn("t")),s.appendChild(A),this.textElement=A,t.pickerLayout==="inline"){const $=e.createElement("div");$.classList.add(bn("p")),this.element.appendChild($),this.pickerElement=$}else this.pickerElement=null}}function Qo(n,e,t){const s=xt(n/255,0,1),d=xt(e/255,0,1),A=xt(t/255,0,1),$=Math.max(s,d,A),fe=Math.min(s,d,A),De=$-fe;let Le=0,Ye=0;const Je=(fe+$)/2;return De!==0&&(Ye=De/(1-Math.abs($+fe-1)),s===$?Le=(d-A)/De:d===$?Le=2+(A-s)/De:Le=4+(s-d)/De,Le=Le/6+(Le<0?1:0)),[Le*360,Ye*100,Je*100]}function ea(n,e,t){const s=(n%360+360)%360,d=xt(e/100,0,1),A=xt(t/100,0,1),$=(1-Math.abs(2*A-1))*d,fe=$*(1-Math.abs(s/60%2-1)),De=A-$/2;let Le,Ye,Je;return s>=0&&s<60?[Le,Ye,Je]=[$,fe,0]:s>=60&&s<120?[Le,Ye,Je]=[fe,$,0]:s>=120&&s<180?[Le,Ye,Je]=[0,$,fe]:s>=180&&s<240?[Le,Ye,Je]=[0,fe,$]:s>=240&&s<300?[Le,Ye,Je]=[fe,0,$]:[Le,Ye,Je]=[$,0,fe],[(Le+De)*255,(Ye+De)*255,(Je+De)*255]}function ta(n,e,t){const s=xt(n/255,0,1),d=xt(e/255,0,1),A=xt(t/255,0,1),$=Math.max(s,d,A),fe=Math.min(s,d,A),De=$-fe;let Le;De===0?Le=0:$===s?Le=60*(((d-A)/De%6+6)%6):$===d?Le=60*((A-s)/De+2):Le=60*((s-d)/De+4);const Ye=$===0?0:De/$,Je=$;return[Le,Ye*100,Je*100]}function Rr(n,e,t){const s=Br(n,360),d=xt(e/100,0,1),A=xt(t/100,0,1),$=A*d,fe=$*(1-Math.abs(s/60%2-1)),De=A-$;let Le,Ye,Je;return s>=0&&s<60?[Le,Ye,Je]=[$,fe,0]:s>=60&&s<120?[Le,Ye,Je]=[fe,$,0]:s>=120&&s<180?[Le,Ye,Je]=[0,$,fe]:s>=180&&s<240?[Le,Ye,Je]=[0,fe,$]:s>=240&&s<300?[Le,Ye,Je]=[fe,0,$]:[Le,Ye,Je]=[$,0,fe],[(Le+De)*255,(Ye+De)*255,(Je+De)*255]}function na(n,e,t){const s=t+e*(100-Math.abs(2*t-100))/200;return[n,s!==0?e*(100-Math.abs(2*t-100))/s:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function sa(n,e,t){const s=100-Math.abs(t*(200-e)/100-100);return[n,s!==0?e*t/s:0,t*(200-e)/(2*100)]}function gn(n){return[n[0],n[1],n[2]]}function Dr(n,e){return[n[0],n[1],n[2],e]}const ra={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:na,rgb:ea},hsv:{hsl:sa,hsv:(n,e,t)=>[n,e,t],rgb:Rr},rgb:{hsl:Qo,hsv:ta,rgb:(n,e,t)=>[n,e,t]}};function ms(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function ia(n,e){return n===e?e:Br(n,e)}function oa(n,e,t){var s;const d=ms(e,t);return[e==="rgb"?xt(n[0],0,d[0]):ia(n[0],d[0]),xt(n[1],0,d[1]),xt(n[2],0,d[2]),xt((s=n[3])!==null&&s!==void 0?s:1,0,1)]}function Ur(n,e,t,s){const d=ms(e,t),A=ms(e,s);return n.map(($,fe)=>$/d[fe]*A[fe])}function aa(n,e,t){const s=Ur(n,e.mode,e.type,"int"),d=ra[e.mode][t.mode](...s);return Ur(d,t.mode,"int",t.type)}function vs(n,e){return typeof n!="object"||F(n)?!1:e in n&&typeof n[e]=="number"}class $e{static black(e="int"){return new $e([0,0,0],"rgb",e)}static fromObject(e,t="int"){const s="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new $e(s,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return vs(e,"r")&&vs(e,"g")&&vs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&vs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const s=e.comps_,d=t.comps_;for(let A=0;A<s.length;A++)if(s[A]!==d[A])return!1;return!0}constructor(e,t,s="int"){this.mode=t,this.type=s,this.comps_=oa(e,t,s)}getComponents(e,t="int"){return Dr(aa(gn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const on=Z("colp");class la{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(on()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(on("hsv"));const d=e.createElement("div");d.classList.add(on("sv")),this.svPaletteView_=t.svPaletteView,d.appendChild(this.svPaletteView_.element),s.appendChild(d);const A=e.createElement("div");A.classList.add(on("h")),this.hPaletteView_=t.hPaletteView,A.appendChild(this.hPaletteView_.element),s.appendChild(A),this.element.appendChild(s);const $=e.createElement("div");if($.classList.add(on("rgb")),this.textView_=t.textView,$.appendChild(this.textView_.element),this.element.appendChild($),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const fe=e.createElement("div");fe.classList.add(on("a"));const De=e.createElement("div");De.classList.add(on("ap")),De.appendChild(this.alphaViews_.palette.element),fe.appendChild(De);const Le=e.createElement("div");Le.classList.add(on("at")),Le.appendChild(this.alphaViews_.text.element),fe.appendChild(Le),this.element.appendChild(fe)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function ca(n){return n==="int"?"int":n==="float"?"float":void 0}function $s(n){const e=re;return ve(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(ca)}),expanded:e.optional.boolean,picker:e.optional.custom(Ar)})}function wn(n){return n?.1:1}function xn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function ua(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function It(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const da={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function zr(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),s=e[2];return da[s](t)}function Lr(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[It(e[1],255),It(e[2],255),It(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ir(n){return e=>{const t=Lr(e);return t?new $e(t,"rgb",n):null}}function Gr(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[It(e[1],255),It(e[2],255),It(e[3],255),It(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Fr(n){return e=>{const t=Gr(e);return t?new $e(t,"rgb",n):null}}function Or(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[zr(e[1]),It(e[2],100),It(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Vr(n){return e=>{const t=Or(e);return t?new $e(t,"hsl",n):null}}function Nr(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[zr(e[1]),It(e[2],100),It(e[3],100),It(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function $r(n){return e=>{const t=Nr(e);return t?new $e(t,"hsl",n):null}}function qr(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function pa(n){const e=qr(n);return e?new $e(e,"rgb","int"):null}function Wr(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),dt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),dt(parseInt(t[4],16),0,255,0,1)]:null}function ha(n){const e=Wr(n);return e?new $e(e,"rgb","int"):null}function Kr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function jr(n){return e=>{const t=Kr(e);return t?new $e(t,"rgb",n):null}}function Hr(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Yr(n){return e=>{const t=Hr(e);return t?new $e(t,"rgb",n):null}}const fa=[{parser:qr,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Wr,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Lr,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Gr,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Or,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Nr,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Kr,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Hr,result:{alpha:!0,mode:"rgb",notation:"object"}}];function _a(n){return fa.reduce((e,{parser:t,result:s})=>e||(t(n)?s:null),null)}function qs(n,e="int"){const t=_a(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Zr={int:[pa,ha,Ir("int"),Fr("int"),Vr("int"),$r("int"),jr("int"),Yr("int")],float:[Ir("float"),Fr("float"),Vr("float"),$r("float"),jr("float"),Yr("float")]};function ma(n){const e=Zr[n];return t=>{if(typeof t!="string")return $e.black(n);const s=e.reduce((d,A)=>d||A(t),null);return s??$e.black(n)}}function Ws(n){const e=Zr[n];return t=>e.reduce((s,d)=>s||d(t),null)}function Xr(n){const e=xt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Jr(n,e="#"){const t=gn(n.getComponents("rgb")).map(Xr).join("");return`${e}${t}`}function Ks(n,e="#"){const t=n.getComponents("rgb"),s=[t[0],t[1],t[2],t[3]*255].map(Xr).join("");return`${e}${s}`}function Qr(n,e){const t=yt(e==="float"?2:0);return`rgb(${gn(n.getComponents("rgb",e)).map(d=>t(d)).join(", ")})`}function va(n){return e=>Qr(e,n)}function bs(n,e){const t=yt(2),s=yt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((A,$)=>($===3?t:s)(A)).join(", ")})`}function ba(n){return e=>bs(e,n)}function ga(n){const e=[yt(0),ps,ps];return`hsl(${gn(n.getComponents("hsl")).map((s,d)=>e[d](s)).join(", ")})`}function wa(n){const e=[yt(0),ps,ps,yt(2)];return`hsla(${n.getComponents("hsl").map((s,d)=>e[d](s)).join(", ")})`}function ei(n,e){const t=yt(e==="float"?2:0),s=["r","g","b"];return`{${gn(n.getComponents("rgb",e)).map((A,$)=>`${s[$]}: ${t(A)}`).join(", ")}}`}function xa(n){return e=>ei(e,n)}function ti(n,e){const t=yt(2),s=yt(e==="float"?2:0),d=["r","g","b","a"];return`{${n.getComponents("rgb",e).map(($,fe)=>{const De=fe===3?t:s;return`${d[fe]}: ${De($)}`}).join(", ")}}`}function ya(n){return e=>ti(e,n)}const Pa=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Jr},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ks},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:ga},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:wa},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:va(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:ba(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:xa(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:ya(e)}],[])];function js(n){return Pa.reduce((e,t)=>e||(ua(t.format,n)?t.stringifier:null),null)}const Jn=Z("apl");class Sa{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Jn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Jn("b")),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(Jn("c")),s.appendChild(d),this.colorElem_=d;const A=e.createElement("div");A.classList.add(Jn("m")),this.element.appendChild(A),this.markerElem_=A;const $=e.createElement("div");$.classList.add(Jn("p")),this.markerElem_.appendChild($),this.previewElem_=$,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),s=new $e([t[0],t[1],t[2],0],"rgb"),d=new $e([t[0],t[1],t[2],255],"rgb"),A=["to right",bs(s),bs(d)];this.colorElem_.style.background=`linear-gradient(${A.join(",")})`,this.previewElem_.style.backgroundColor=bs(e);const $=dt(t[3],0,1,0,100);this.markerElem_.style.left=`${$}%`}onValueChange_(){this.update_()}}class Ea{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Sa(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=e.point.x/e.bounds.width,d=this.value.rawValue,[A,$,fe]=d.getComponents("hsv");this.value.setRawValue(new $e([A,$,fe,s],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Bt(wn(!0),Jt(e));if(t===0)return;const s=this.value.rawValue,[d,A,$,fe]=s.getComponents("hsv");this.value.setRawValue(new $e([d,A,$,fe+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Bt(wn(!0),Jt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Rn=Z("coltxt");function ka(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((s,d)=>{const A=n.createElement("option");return A.textContent=d.text,A.value=d.value,s.appendChild(A),s},n.createDocumentFragment())),e}class Ca{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Rn()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Rn("m")),this.modeElem_=ka(e),this.modeElem_.classList.add(Rn("ms")),s.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const d=e.createElement("div");d.classList.add(Rn("mm")),d.appendChild(P(e,"dropdown")),s.appendChild(d),this.element.appendChild(s);const A=e.createElement("div");A.classList.add(Rn("w")),this.element.appendChild(A),this.textsElem_=A,this.textViews_=t.textViews,this.applyTextViews_(),he(t.colorMode,$=>{this.modeElem_.value=$})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){K(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const s=e.createElement("div");s.classList.add(Rn("c")),s.appendChild(t.element),this.textsElem_.appendChild(s)})}}function Ta(n){return yt(n==="float"?2:0)}function Ba(n,e,t){const s=ms(n,e)[t];return new Ue({min:0,max:s})}function Hs(n,e,t){return new Zn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:wn(!1),parser:e.parser,props:J.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Ta(e.colorType)}),value:N(0,{constraint:Ba(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Aa{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=N(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Ca(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},s=[Hs(e,t,0),Hs(e,t,1),Hs(e,t,2)];return s.forEach((d,A)=>{Hn({primary:this.value,secondary:d.value,forward:$=>$.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[A],backward:($,fe)=>{const De=this.colorMode.rawValue,Le=$.rawValue.getComponents(De,this.colorType_);return Le[A]=fe.rawValue,new $e(Dr(gn(Le),Le[3]),De,this.colorType_)}})}),s}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ys=Z("hpl");class Ma{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ys()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("div");s.classList.add(Ys("c")),this.element.appendChild(s);const d=e.createElement("div");d.classList.add(Ys("m")),this.element.appendChild(d),this.markerElem_=d,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Qr(new $e([t,100,100],"hsv"));const s=dt(t,0,360,0,100);this.markerElem_.style.left=`${s}%`}onValueChange_(){this.update_()}}class Ra{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ma(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=dt(xt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),d=this.value.rawValue,[,A,$,fe]=d.getComponents("hsv");this.value.setRawValue(new $e([s,A,$,fe],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Bt(wn(!1),Jt(e));if(t===0)return;const s=this.value.rawValue,[d,A,$,fe]=s.getComponents("hsv");this.value.setRawValue(new $e([d+t,A,$,fe],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Bt(wn(!1),Jt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Zs=Z("svp"),ni=64;class Da{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Zs()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const s=e.createElement("canvas");s.height=ni,s.width=ni,s.classList.add(Zs("c")),this.element.appendChild(s),this.canvasElement=s;const d=e.createElement("div");d.classList.add(Zs("m")),this.element.appendChild(d),this.markerElem_=d,this.update_()}update_(){const e=m(this.canvasElement);if(!e)return;const s=this.value.rawValue.getComponents("hsv"),d=this.canvasElement.width,A=this.canvasElement.height,$=e.getImageData(0,0,d,A),fe=$.data;for(let Ye=0;Ye<A;Ye++)for(let Je=0;Je<d;Je++){const yn=dt(Je,0,d,0,100),es=dt(Ye,0,A,100,0),ts=Rr(s[0],yn,es),gs=(Ye*d+Je)*4;fe[gs]=ts[0],fe[gs+1]=ts[1],fe[gs+2]=ts[2],fe[gs+3]=255}e.putImageData($,0,0);const De=dt(s[1],0,100,0,100);this.markerElem_.style.left=`${De}%`;const Le=dt(s[2],0,100,100,0);this.markerElem_.style.top=`${Le}%`}onValueChange_(){this.update_()}}class Ua{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Da(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=dt(e.point.x,0,e.bounds.width,0,100),d=dt(e.point.y,0,e.bounds.height,100,0),[A,,,$]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new $e([A,s,d,$],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Cr(e.key)&&e.preventDefault();const[t,s,d,A]=this.value.rawValue.getComponents("hsv"),$=wn(!1),fe=Bt($,Jt(e)),De=Bt($,Yn(e));fe===0&&De===0||this.value.setRawValue(new $e([t,s+fe,d+De,A],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=wn(!1),s=Bt(t,Jt(e)),d=Bt(t,Yn(e));s===0&&d===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class za{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Ra(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Ua(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Ea(e,{value:this.value,viewProps:this.viewProps}),text:new Zn(e,{parser:Xt,baseStep:.1,props:J.fromObject({draggingScale:.01,formatter:yt(2)}),value:N(0,{constraint:new Ue({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Hn({primary:this.value,secondary:this.alphaIcs_.text.value,forward:s=>s.rawValue.getComponents()[3],backward:(s,d)=>{const A=s.rawValue.getComponents();return A[3]=d.rawValue,new $e(A,s.rawValue.mode)}}),this.textC_=new Aa(e,{colorType:t.colorType,parser:Xt,value:this.value,viewProps:this.viewProps}),this.view=new la(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Xs=Z("colsw");class La{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Xs()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(Xs("sw")),this.element.appendChild(s),this.swatchElem_=s;const d=e.createElement("button");d.classList.add(Xs("b")),t.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ks(e)}onValueChange_(){this.update_()}}class Ia{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new La(e,{value:this.value,viewProps:this.viewProps})}}class Js{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ze.create(t.expanded),this.swatchC_=new Ia(e,{value:this.value,viewProps:this.viewProps});const s=this.swatchC_.view.buttonElement;s.addEventListener("blur",this.onButtonBlur_),s.addEventListener("click",this.onButtonClick_),this.textC_=new Yt(e,{parser:t.parser,props:J.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Jo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ot(e,{viewProps:this.viewProps}):null;const d=new za(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});d.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=d,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(d.view.element),Hn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,$)=>$.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ke(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.swatchC_.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Ga(n,e){return $e.isColorObject(n)?$e.fromObject(n,e):$e.black(e)}function Fa(n){return gn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Oa(n){return n.getComponents("rgb").reduce((e,t,s)=>{const d=Math.floor(s===3?t*255:t)&255;return e<<8|d},0)>>>0}function Va(n){return new $e([n>>16&255,n>>8&255,n&255],"rgb")}function Na(n){return new $e([n>>24&255,n>>16&255,n>>8&255,dt(n&255,0,255,0,1)],"rgb")}function $a(n){return typeof n!="number"?$e.black():Va(n)}function qa(n){return typeof n!="number"?$e.black():Na(n)}function Wa(n){const e=js(n);return e?(t,s)=>{Xn(t,e(s))}:null}function Ka(n){const e=n?Oa:Fa;return(t,s)=>{Xn(t,e(s))}}function ja(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function Ha(n,e,t){const s=e.toRgbaObject(t);n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Ya(n,e){return(t,s)=>{n?ja(t,s,e):Ha(t,s,e)}}function Qs(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Za(n){return n?e=>Ks(e,"0x"):e=>Jr(e,"0x")}function Xa(n){return"color"in n||"view"in n&&n.view==="color"}const Ja={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Xa(e))return null;const t=$s(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Qs(n.params)?qa:$a,equals:$e.equals,writer:n=>Ka(Qs(n.params))},controller:n=>{const e=Qs(n.params),t="expanded"in n.params?n.params.expanded:void 0,s="picker"in n.params?n.params.picker:void 0;return new Js(n.document,{colorType:"int",expanded:t??!1,formatter:Za(e),parser:Ws("int"),pickerLayout:s??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Qa(n){return $e.isRgbaColorObject(n)}function el(n){return e=>Ga(e,n)}function tl(n,e){return t=>n?ti(t,e):ei(t,e)}const nl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!$e.isColorObject(n))return null;const t=$s(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>el(xn(n.params)),equals:$e.equals,writer:n=>Ya(Qa(n.initialValue),xn(n.params))},controller:n=>{var e;const t=$e.isRgbaColorObject(n.initialValue),s="expanded"in n.params?n.params.expanded:void 0,d="picker"in n.params?n.params.picker:void 0,A=(e=xn(n.params))!==null&&e!==void 0?e:"int";return new Js(n.document,{colorType:A,expanded:s??!1,formatter:tl(t,A),parser:Ws(A),pickerLayout:d??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},sl={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=qs(n,xn(e));if(!t||!js(t))return null;const d=$s(e);return d?{initialValue:n,params:d}:null},binding:{reader:n=>{var e;return ma((e=xn(n.params))!==null&&e!==void 0?e:"int")},equals:$e.equals,writer:n=>{const e=qs(n.initialValue,xn(n.params));if(!e)throw L.shouldNeverHappen();const t=Wa(e);if(!t)throw L.notBindable();return t}},controller:n=>{const e=qs(n.initialValue,xn(n.params));if(!e)throw L.shouldNeverHappen();const t=js(e);if(!t)throw L.shouldNeverHappen();const s="expanded"in n.params?n.params.expanded:void 0,d="picker"in n.params?n.params.picker:void 0;return new Js(n.document,{colorType:e.type,expanded:s??!1,formatter:t,parser:Ws(e.type),pickerLayout:d??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class an{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((s,d)=>{var A,$;return($=(A=this.components[d])===null||A===void 0?void 0:A.constrain(s))!==null&&$!==void 0?$:s});return this.asm_.fromComponents(t)}}const si=Z("pndtxt");class rl{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(si()),this.textViews.forEach(s=>{const d=e.createElement("div");d.classList.add(si("a")),d.appendChild(s.element),this.element.appendChild(d)})}}function il(n,e,t){return new Zn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:N(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class er{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((s,d)=>il(e,t,d)),this.acs_.forEach((s,d)=>{Hn({primary:this.value,secondary:s.value,forward:A=>t.assembly.toComponents(A.rawValue)[d],backward:(A,$)=>{const fe=t.assembly.toComponents(A.rawValue);return fe[d]=$.rawValue,t.assembly.fromComponents(fe)}})}),this.view=new rl(e,{textViews:this.acs_.map(s=>s.view)})}}function ri(n,e){return"step"in n&&!F(n.step)?new qe(n.step,e):null}function ii(n){return!F(n.max)&&!F(n.min)?new Ue({max:n.max,min:n.min}):!F(n.max)||!F(n.min)?new Rt({max:n.max,min:n.min}):null}function ol(n){const e=ft(n,Ue);if(e)return[e.values.get("min"),e.values.get("max")];const t=ft(n,Rt);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function al(n,e){const t=[],s=ri(n,e);s&&t.push(s);const d=ii(n);d&&t.push(d);const A=Ns(n.options);return A&&t.push(A),new ut(t)}const ll={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=re,s=ve(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(hs),step:t.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Er,constraint:n=>al(n.params,n.initialValue),writer:n=>Xn},controller:n=>{var e;const t=n.value,s=n.constraint,d=s&&ft(s,He);if(d)return new zt(n.document,{props:new J({options:d.values.value("options")}),value:t,viewProps:n.viewProps});const A=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:yt(fs(s,t.rawValue)),$=s&&ft(s,Ue);return $?new Vs(n.document,{baseStep:An(s),parser:Xt,sliderProps:new J({maxValue:$.values.value("max"),minValue:$.values.value("min")}),textProps:J.fromObject({draggingScale:Mn(s,t.rawValue),formatter:A}),value:t,viewProps:n.viewProps}):new Zn(n.document,{baseStep:An(s),parser:Xt,props:J.fromObject({draggingScale:Mn(s,t.rawValue),formatter:A}),value:t,viewProps:n.viewProps})}};class ln{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y;return!(typeof t!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const oi={toComponents:n=>n.getComponents(),fromComponents:n=>new ln(...n)},Dn=Z("p2d");class cl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Dn()),t.viewProps.bindClassModifiers(this.element),he(t.expanded,Te(this.element,Dn(void 0,"expanded")));const s=e.createElement("div");s.classList.add(Dn("h")),this.element.appendChild(s);const d=e.createElement("button");d.classList.add(Dn("b")),d.appendChild(P(e,"p2dpad")),t.viewProps.bindDisabled(d),s.appendChild(d),this.buttonElement=d;const A=e.createElement("div");if(A.classList.add(Dn("t")),s.appendChild(A),this.textElement=A,t.pickerLayout==="inline"){const $=e.createElement("div");$.classList.add(Dn("p")),this.element.appendChild($),this.pickerElement=$}else this.pickerElement=null}}const cn=Z("p2dp");class ul{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(cn()),t.layout==="popup"&&this.element.classList.add(cn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("div");s.classList.add(cn("p")),t.viewProps.bindTabIndex(s),this.element.appendChild(s),this.padElement=s;const d=e.createElementNS(S,"svg");d.classList.add(cn("g")),this.padElement.appendChild(d),this.svgElem_=d;const A=e.createElementNS(S,"line");A.classList.add(cn("ax")),A.setAttributeNS(null,"x1","0"),A.setAttributeNS(null,"y1","50%"),A.setAttributeNS(null,"x2","100%"),A.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(A);const $=e.createElementNS(S,"line");$.classList.add(cn("ax")),$.setAttributeNS(null,"x1","50%"),$.setAttributeNS(null,"y1","0"),$.setAttributeNS(null,"x2","50%"),$.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild($);const fe=e.createElementNS(S,"line");fe.classList.add(cn("l")),fe.setAttributeNS(null,"x1","50%"),fe.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(fe),this.lineElem_=fe;const De=e.createElement("div");De.classList.add(cn("m")),this.padElement.appendChild(De),this.markerElem_=De,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),s=this.maxValue_,d=dt(e,-s,+s,0,100),A=dt(t,-s,+s,0,100),$=this.invertsY_?100-A:A;this.lineElem_.setAttributeNS(null,"x2",`${d}%`),this.lineElem_.setAttributeNS(null,"y2",`${$}%`),this.markerElem_.style.left=`${d}%`,this.markerElem_.style.top=`${$}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ai(n,e,t){return[Bt(e[0],Jt(n)),Bt(e[1],Yn(n))*(t?1:-1)]}class dl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new ul(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const s=this.maxValue_,d=dt(e.point.x,0,e.bounds.width,-s,+s),A=dt(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-s,+s);this.value.setRawValue(new ln(d,A),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Cr(e.key)&&e.preventDefault();const[t,s]=ai(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(new ln(this.value.rawValue.x+t,this.value.rawValue.y+s),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,s]=ai(e,this.baseSteps_,this.invertsY_);t===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class pl{constructor(e,t){var s,d;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ze.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ot(e,{viewProps:this.viewProps}):null;const A=new dl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});A.view.allFocusableElements.forEach($=>{$.addEventListener("blur",this.onPopupChildBlur_),$.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=A,this.textC_=new er(e,{assembly:oi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new cl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("blur",this.onPadButtonBlur_),(d=this.view.buttonElement)===null||d===void 0||d.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Hn({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:$=>$.rawValue,backward:($,fe)=>fe.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ke(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,s=e.relatedTarget;(!s||!t.contains(s))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,s=ne(e);s&&t.contains(s)||s&&s===this.view.buttonElement&&!h(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class Un{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,d=e.z;return!(typeof t!="number"||typeof s!="number"||typeof d!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const li={toComponents:n=>n.getComponents(),fromComponents:n=>new Un(...n)};function hl(n){return Un.isObject(n)?new Un(n.x,n.y,n.z):new Un}function fl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function _l(n,e){return new an({assembly:li,components:[Qt("x"in n?n.x:void 0,e.x),Qt("y"in n?n.y:void 0,e.y),Qt("z"in n?n.z:void 0,e.z)]})}function tr(n,e){return{baseStep:An(e),constraint:e,textProps:J.fromObject({draggingScale:Mn(e,n),formatter:yt(fs(e,n))})}}const ml={id:"input-point3d",type:"input",accept:(n,e)=>{if(!Un.isObject(n))return null;const t=re,s=ve(e,{x:t.optional.custom(rn),y:t.optional.custom(rn),z:t.optional.custom(rn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>hl,constraint:n=>_l(n.params,n.initialValue),equals:Un.equals,writer:n=>fl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof an))throw L.shouldNeverHappen();return new er(n.document,{assembly:li,axes:[tr(e.rawValue.x,t.components[0]),tr(e.rawValue.y,t.components[1]),tr(e.rawValue.z,t.components[2])],parser:Xt,value:e,viewProps:n.viewProps})}};class zn{constructor(e=0,t=0,s=0,d=0){this.x=e,this.y=t,this.z=s,this.w=d}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(F(e))return!1;const t=e.x,s=e.y,d=e.z,A=e.w;return!(typeof t!="number"||typeof s!="number"||typeof d!="number"||typeof A!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ci={toComponents:n=>n.getComponents(),fromComponents:n=>new zn(...n)};function vl(n){return zn.isObject(n)?new zn(n.x,n.y,n.z,n.w):new zn}function bl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function gl(n,e){return new an({assembly:ci,components:[Qt("x"in n?n.x:void 0,e.x),Qt("y"in n?n.y:void 0,e.y),Qt("z"in n?n.z:void 0,e.z),Qt("w"in n?n.w:void 0,e.w)]})}function wl(n,e){return{baseStep:An(e),constraint:e,textProps:J.fromObject({draggingScale:Mn(e,n),formatter:yt(fs(e,n))})}}const xl={id:"input-point4d",type:"input",accept:(n,e)=>{if(!zn.isObject(n))return null;const t=re,s=ve(e,{x:t.optional.custom(rn),y:t.optional.custom(rn),z:t.optional.custom(rn),w:t.optional.custom(rn)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>vl,constraint:n=>gl(n.params,n.initialValue),equals:zn.equals,writer:n=>bl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof an))throw L.shouldNeverHappen();return new er(n.document,{assembly:ci,axes:e.rawValue.getComponents().map((s,d)=>wl(s,t.components[d])),parser:Xt,value:e,viewProps:n.viewProps})}};function yl(n){const e=[],t=Ns(n.options);return t&&e.push(t),new ut(e)}const Pl={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const s=ve(e,{options:re.optional.custom(hs)});return s?{initialValue:n,params:s}:null},binding:{reader:n=>kr,constraint:n=>yl(n.params),writer:n=>Xn},controller:n=>{const e=n.document,t=n.value,s=n.constraint,d=s&&ft(s,He);return d?new zt(e,{props:new J({options:d.values.value("options")}),value:t,viewProps:n.viewProps}):new Yt(e,{parser:A=>A,props:J.fromObject({formatter:Is}),value:t,viewProps:n.viewProps})}},Qn={monitor:{defaultInterval:200,defaultLineCount:3}},ui=Z("mll");class Sl{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ui()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("textarea");s.classList.add(ui("i")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,s.readOnly=!0,t.viewProps.bindDisabled(s),this.element.appendChild(s),this.textareaElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,s=[];this.value.rawValue.forEach(d=>{d!==void 0&&s.push(this.formatter_(d))}),e.textContent=s.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class nr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Sl(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const di=Z("sgl");class El{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(di()),t.viewProps.bindClassModifiers(this.element);const s=e.createElement("input");s.classList.add(di("i")),s.readOnly=!0,s.type="text",t.viewProps.bindDisabled(s),this.element.appendChild(s),this.inputElement=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class sr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new El(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const kl={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const s=ve(e,{lineCount:re.optional.number});return s?{initialValue:n,params:s}:null},binding:{reader:n=>_n},controller:n=>{var e;return n.value.rawValue.length===1?new sr(n.document,{formatter:mn,value:n.value,viewProps:n.viewProps}):new nr(n.document,{formatter:mn,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Qn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},un=Z("grl");class Cl{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(un()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const s=e.createElementNS(S,"svg");s.classList.add(un("g")),s.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(s),this.svgElem_=s;const d=e.createElementNS(S,"polyline");this.svgElem_.appendChild(d),this.lineElem_=d;const A=e.createElement("div");A.classList.add(un("t"),Z("tt")()),this.element.appendChild(A),this.tooltipElem_=A,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,s=this.props_.get("minValue"),d=this.props_.get("maxValue"),A=[];this.value.rawValue.forEach((Ye,Je)=>{if(Ye===void 0)return;const yn=dt(Je,0,t,0,e.width),es=dt(Ye,s,d,e.height,0);A.push([yn,es].join(","))}),this.lineElem_.setAttributeNS(null,"points",A.join(" "));const $=this.tooltipElem_,fe=this.value.rawValue[this.cursor_.rawValue];if(fe===void 0){$.classList.remove(un("t","a"));return}const De=dt(this.cursor_.rawValue,0,t,0,e.width),Le=dt(fe,s,d,e.height,0);$.style.left=`${De}px`,$.style.top=`${Le}px`,$.textContent=`${this.formatter_(fe)}`,$.classList.contains(un("t","a"))||($.classList.add(un("t","a"),un("t","in")),i($),$.classList.remove(un("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Tl{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=N(-1),this.view=new Cl(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!h(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const s=new vn(this.view.element);s.emitter.on("down",this.onGraphPointerDown_),s.emitter.on("move",this.onGraphPointerMove_),s.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(dt(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(dt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function rr(n){return"format"in n&&!F(n.format)?n.format:yt(2)}function Bl(n){var e;return n.value.rawValue.length===1?new sr(n.document,{formatter:rr(n.params),value:n.value,viewProps:n.viewProps}):new nr(n.document,{formatter:rr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Qn.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Al(n){var e,t,s;return new Tl(n.document,{formatter:rr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Qn.monitor.defaultLineCount,props:J.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(s="min"in n.params?n.params.min:null)!==null&&s!==void 0?s:0}),value:n.value,viewProps:n.viewProps})}function pi(n){return"view"in n&&n.view==="graph"}const Ml={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=re,s=ve(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return s?{initialValue:n,params:s}:null},binding:{defaultBufferSize:n=>pi(n)?64:1,reader:n=>Er},controller:n=>pi(n.params)?Al(n):Bl(n)},Rl={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=re,s=ve(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return s?{initialValue:n,params:s}:null},binding:{reader:n=>kr},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new nr(n.document,{formatter:Is,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Qn.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new sr(n.document,{formatter:Is,value:t,viewProps:n.viewProps})}};function Dl(n,e){var t;const s=n.accept(e.target.read(),e.params);if(F(s))return null;const d=re,A={target:e.target,initialValue:s.initialValue,params:s.params},$=n.binding.reader(A),fe=n.binding.constraint?n.binding.constraint(A):void 0,De=N($(s.initialValue),{constraint:fe,equals:n.binding.equals}),Le=new me({reader:$,target:e.target,value:De,writer:n.binding.writer(A)}),Ye=d.optional.boolean(e.params.disabled).value,Je=d.optional.boolean(e.params.hidden).value,yn=n.controller({constraint:fe,document:e.document,initialValue:s.initialValue,params:s.params,value:Le.value,viewProps:_.create({disabled:Ye,hidden:Je})});return new Ve(e.document,{binding:Le,blade:Ge(),props:J.fromObject({label:"label"in e.params?(t=d.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:yn})}function Ul(n,e){return e===0?new ee:new ue(n,e??Qn.monitor.defaultInterval)}function zl(n,e){var t,s,d;const A=re,$=n.accept(e.target.read(),e.params);if(F($))return null;const fe={target:e.target,initialValue:$.initialValue,params:$.params},De=n.binding.reader(fe),Le=(s=(t=A.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize($.params))!==null&&s!==void 0?s:1,Ye=A.optional.number(e.params.interval).value,Je=new et({reader:De,target:e.target,ticker:Ul(e.document,Ye),value:be(Le)}),yn=A.optional.boolean(e.params.disabled).value,es=A.optional.boolean(e.params.hidden).value,ts=n.controller({document:e.document,params:$.params,value:Je.value,viewProps:_.create({disabled:yn,hidden:es})});return new it(e.document,{binding:Je,blade:Ge(),props:J.fromObject({label:"label"in e.params?(d=A.optional.string(e.params.label).value)!==null&&d!==void 0?d:null:e.target.key}),valueController:ts})}class Ll{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,s){const d=t.read();if(F(d))throw new L({context:{key:t.key},type:"nomatchingcontroller"});const A=this.pluginsMap_.inputs.reduce(($,fe)=>$??Dl(fe,{document:e,target:t,params:s}),null);if(A)return A;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,s){const d=this.pluginsMap_.monitors.reduce((A,$)=>A??zl($,{document:e,params:s,target:t}),null);if(d)return d;throw new L({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const s=this.pluginsMap_.blades.reduce((d,A)=>d??U(A,{document:e,params:t}),null);if(!s)throw new L({type:"nomatchingview",context:{params:t}});return s}createBladeApi(e){if(e instanceof Ve)return new st(e);if(e instanceof it)return new rt(e);if(e instanceof ot)return new lt(e,this);const t=this.pluginsMap_.blades.reduce((s,d)=>s??d.api({controller:e,pool:this}),null);if(!t)throw L.shouldNeverHappen();return t}}function Il(){const n=new Ll;return[$l,ml,xl,Pl,ll,sl,nl,Ja,Xo,kl,Rl,Ml,Ce,Cn,Rs,ds].forEach(e=>{n.register(e)}),n}function Gl(n){return ln.isObject(n)?new ln(n.x,n.y):new ln}function Fl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function Qt(n,e){if(!n)return;const t=[],s=ri(n,e);s&&t.push(s);const d=ii(n);return d&&t.push(d),new ut(t)}function Ol(n,e){return new an({assembly:oi,components:[Qt("x"in n?n.x:void 0,e.x),Qt("y"in n?n.y:void 0,e.y)]})}function hi(n,e){const[t,s]=n?ol(n):[];if(!F(t)||!F(s))return Math.max(Math.abs(t??0),Math.abs(s??0));const d=An(n);return Math.max(Math.abs(d)*10,Math.abs(e)*10)}function Vl(n,e){const t=e instanceof an?e.components[0]:void 0,s=e instanceof an?e.components[1]:void 0,d=hi(t,n.x),A=hi(s,n.y);return Math.max(d,A)}function fi(n,e){return{baseStep:An(e),constraint:e,textProps:J.fromObject({draggingScale:Mn(e,n),formatter:yt(fs(e,n))})}}function Nl(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const $l={id:"input-point2d",type:"input",accept:(n,e)=>{if(!ln.isObject(n))return null;const t=re,s=ve(e,{expanded:t.optional.boolean,picker:t.optional.custom(Ar),x:t.optional.custom(rn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return s?{initialValue:n,params:s}:null},binding:{reader:n=>Gl,constraint:n=>Ol(n.params,n.initialValue),equals:ln.equals,writer:n=>Fl},controller:n=>{const e=n.document,t=n.value,s=n.constraint;if(!(s instanceof an))throw L.shouldNeverHappen();const d="expanded"in n.params?n.params.expanded:void 0,A="picker"in n.params?n.params.picker:void 0;return new pl(e,{axes:[fi(t.rawValue.x,s.components[0]),fi(t.rawValue.y,s.components[1])],expanded:d??!1,invertsY:Nl(n.params),maxValue:Vl(t.rawValue,s),parser:Xt,pickerLayout:A??"popup",value:t,viewProps:n.viewProps})}};class _i extends p{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}class mi extends p{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}class vi extends p{constructor(e){super(e),this.emitter_=new H,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new B(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const s=t.bind(this);return this.emitter_.on(e,d=>{s(d.event)}),this}}const ql=function(){return{id:"list",type:"blade",accept(n){const e=re,t=ve(n,{options:e.required.custom(hs),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new He(Mr(n.params.options)),t=N(n.params.value,{constraint:e}),s=new zt(n.document,{props:new J({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Wt(n.document,{blade:n.blade,props:J.fromObject({label:n.params.label}),valueController:s})},api(n){return!(n.controller instanceof Wt)||!(n.controller.valueController instanceof zt)?null:new _i(n.controller)}}}();function Wl(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Kl(n,e){n.forEach(t=>{const s=e[t.target.presetKey];s!==void 0&&t.writer(t.target,t.reader(s))})}class jl extends bt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(Ve).map(s=>s.binding);Kl(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(Ve).map(t=>t.binding.target);return Wl(e)}refresh(){this.controller_.rackController.rack.find(Ve).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(it).forEach(e=>{e.binding.read()})}}class Hl extends hn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Yl={id:"slider",type:"blade",accept(n){const e=re,t=ve(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const s=(e=n.params.value)!==null&&e!==void 0?e:0,d=new Ue({max:n.params.max,min:n.params.min}),A=new Vs(n.document,{baseStep:1,parser:Xt,sliderProps:new J({maxValue:d.values.value("max"),minValue:d.values.value("min")}),textProps:J.fromObject({draggingScale:Mn(void 0,s),formatter:(t=n.params.format)!==null&&t!==void 0?t:Oo}),value:N(s,{constraint:d}),viewProps:n.viewProps});return new Wt(n.document,{blade:n.blade,props:J.fromObject({label:n.params.label}),valueController:A})},api(n){return!(n.controller instanceof Wt)||!(n.controller.valueController instanceof Vs)?null:new mi(n.controller)}},Zl=function(){return{id:"text",type:"blade",accept(n){const e=re,t=ve(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Yt(n.document,{parser:n.params.parse,props:J.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:s=>String(s)}),value:N(n.params.value),viewProps:n.viewProps});return new Wt(n.document,{blade:n.blade,props:J.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Wt)||!(n.controller.valueController instanceof Yt)?null:new vi(n.controller)}}}();function Xl(n){const e=n.createElement("div");return e.classList.add(Z("dfw")()),n.body&&n.body.appendChild(e),e}function bi(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const s=n.createElement("style");s.dataset.tpStyle=e,s.textContent=t,n.head.appendChild(s)}class Jl extends jl{constructor(e){var t,s;const d=e??{},A=(t=d.document)!==null&&t!==void 0?t:c(),$=Il(),fe=new Hl(A,{expanded:d.expanded,blade:Ge(),props:J.fromObject({title:d.title}),viewProps:_.create()});super(fe,$),this.pool_=$,this.containerElem_=(s=d.container)!==null&&s!==void 0?s:Xl(A),this.containerElem_.appendChild(this.element),this.doc_=A,this.usesDefaultWrapper_=!d.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw L.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw L.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(s=>{this.pool_.register(s),this.embedPluginStyle_(s)})}embedPluginStyle_(e){e.css&&bi(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){bi(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Yl,ql,ds,Zl]})}}const Ql=new v("3.1.10");a.BladeApi=p,a.ButtonApi=X,a.FolderApi=bt,a.InputBindingApi=st,a.ListApi=_i,a.MonitorBindingApi=rt,a.Pane=Jl,a.SeparatorApi=_t,a.SliderApi=mi,a.TabApi=qn,a.TabPageApi=$n,a.TextApi=vi,a.TpChangeEvent=B,a.VERSION=Ql,Object.defineProperty(a,"__esModule",{value:!0})})})(dr,dr.exports);var so=dr.exports;const Bc=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
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
`,ir=`// 2DGS render — vertex+fragment.
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
`,Ac=`const WG_SIZE = 256u;
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
}`,Mc=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
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
`,Rc=`// shader implementing gpu radix sort.

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
`,Dc=`// shader implementing gpu radix sort.

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
`,Uc=`// ============================================================================
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
}`,ro=32,pr=1,hr=2,Ai=4,Mi=512,Ri=1024,Di=2048,Ui=4096,zi=8192,zc=0,jt=new ArrayBuffer(ro),gt={canvas_size:new Uint32Array(jt,0,2),accel_flags:new Uint32Array(jt,8,1),feature_mode:new Uint32Array(jt,12,1),gaussian_scaling:new Float32Array(jt,16,1),sh_bias:new Float32Array(jt,20,1),color_K:new Uint32Array(jt,24,1),walltime:new Float32Array(jt,28,1)};function Lc(o){gt.canvas_size[0]=o.width>>>0,gt.canvas_size[1]=o.height>>>0,gt.accel_flags[0]=(o.accel_flags??pr|hr)>>>0,gt.feature_mode[0]=(o.feature_mode??zc)>>>0,gt.gaussian_scaling[0]=o.gaussian_scaling??1,gt.sh_bias[0]=o.sh_bias??.5,gt.color_K[0]=(o.color_K??0)>>>0,gt.walltime[0]=o.walltime??0}function wr(o,r){o.queue.writeBuffer(r,0,jt)}function kn(o,r,a){a&&o&&r&&wr(o,r)}function dn(o,r,a,v,p=!0){gt.canvas_size[0]=o>>>0,gt.canvas_size[1]=r>>>0,kn(a??null,v??null,p)}function Li(o,r,a,v=!0){gt.gaussian_scaling[0]=o,kn(r??null,a??null,v)}function Ii(o,r,a,v=!0){gt.sh_bias[0]=o,kn(r??null,a??null,v)}function Ic(o,r,a,v=!0){gt.color_K[0]=o>>>0,kn(r??null,a??null,v)}function Gc(o,r,a,v=!0){gt.feature_mode[0]=o>>>0,kn(r??null,a??null,v)}function Fc(o){const r=new Float32Array(1),a=new Uint32Array(r.buffer);r[0]=o;const v=a[0],p=v>>>16&32768,b=(v>>>23&255)-127+15;return b<=0?p:b>=31?p|31744:p|b<<10|v>>>13&1023}function Gi(o,r=.3,a,v,p=!0){let b=gt.accel_flags[0]&65535&~zi;o&&(b=b|zi|Fc(r)<<16),gt.accel_flags[0]=b>>>0,kn(a??null,v??null,p)}function ns(o,r,a,v=!0){let p=gt.accel_flags[0];o.oac!==void 0&&(p=o.oac?p|pr:p&~pr),o.spr!==void 0&&(p=o.spr?p|hr:p&~hr),o.bfc!==void 0&&(p=o.bfc?p|Ai:p&~Ai),o.hypLegacy!==void 0&&(p=o.hypLegacy?p|Mi:p&~Mi),o.centred!==void 0&&(p=o.centred?p|Ui:p&~Ui),o.raysplat!==void 0&&(p=o.raysplat?p|Di:p&~Di),o.legacyPos!==void 0&&(p=o.legacyPos?p|Ri:p&~Ri),gt.accel_flags[0]=p>>>0,kn(r??null,a??null,v)}const Oc=256;function ws(o,r){const a=[],v=[];let p=!0;for(const b of o.split(`
`)){const B=b.trim();let C;if((C=/^\/\/#if\s+(\w+)\s*$/.exec(B))!==null){const T=!!r[C[1]];v.push({parent:p,taken:T}),p=p&&T;continue}if(/^\/\/#else\s*$/.test(B)){const T=v[v.length-1];if(T===void 0)throw new Error("preprocessWGSL: #else without #if");p=T.parent&&!T.taken;continue}if(/^\/\/#endif\s*$/.test(B)){const T=v.pop();if(T===void 0)throw new Error("preprocessWGSL: #endif without #if");p=T.parent;continue}p&&a.push(b)}if(v.length!==0)throw new Error("preprocessWGSL: unterminated #if");return a.join(`
`)}const Vc=ro,Nc=8,$c=96,qc=12,xr=8,en=1<<xr,Sn=256,Es=32/xr,Wc=0,or=Es&1;function Fi(o,r){return{sort_indices_buffer:r.createBuffer({label:"ping-pong payload (indices)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:r.createBuffer({label:"ping-pong keys (depths)",size:o*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function Kc(o,r){const a=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),v=o.createPipelineLayout({bindGroupLayouts:[a]}),p=b=>o.createComputePipeline({layout:v,compute:{module:r,entryPoint:b,constants:{WG_SIZE:Sn}}});return{l0TileScan:p("prefix_l0_tile_scan"),l1TileScanOnL0:p("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:p("prefix_scan_l1_sums"),addL1ToL0:p("prefix_add_l1_to_l0_offsets"),addL0ToElems:p("prefix_add_l0_to_elements"),computeDigitBase:p("compute_digit_base"),prefixBindGroupLayout:a}}function jc(o,r,a){const v=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),p=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),b=o.createPipelineLayout({bindGroupLayouts:[v]}),B=o.createPipelineLayout({bindGroupLayouts:[p]}),C=[];for(let T=0;T<Es;T++){const M={PASS_ID:T+Wc,RS_RADIX_LOG2:xr,RS_RADIX_SIZE:en};C.push({localHistogram:o.createComputePipeline({layout:b,compute:{module:r,entryPoint:"local_histogram_pass",constants:M}}),scatterElements:o.createComputePipeline({layout:B,compute:{module:a,entryPoint:"scatter_elements",constants:M}})})}return{passes:C,localHistogramBindGroupLayout:v,scatterBindGroupLayout:p}}function Hc(o){const r=o.createShaderModule({label:"local histogram",code:Dc}),a=o.createShaderModule({label:"scatter",code:Rc}),v=o.createShaderModule({label:"blelloch prefix",code:Uc}),p=Kc(o,v),b=jc(o,r,a);return{localHistogramBindGroupLayout:b.localHistogramBindGroupLayout,scatterBindGroupLayout:b.scatterBindGroupLayout,passes:b.passes,hierarchicalBlelloch:p}}function Oi(o){const r=o.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),a=r.createView({dimension:"2d-array"}),v=o.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),p=o.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),b=o.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});o.queue.writeBuffer(b,0,new ArrayBuffer(32));const B={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:r,view:a,sampler:v,rectsBuffer:p,texParamsBuffer:b,meta:B}}const Ln=class Ln{constructor(r,a,v,p,b,B=null,C={}){R(this,"device");R(this,"pc");R(this,"presentationFormat");R(this,"camera_buffer");R(this,"render_settings_buffer");R(this,"draw_indirect_buffer");R(this,"splat_2d_buffer");R(this,"querySet");R(this,"resolveBuffer");R(this,"resultBuffer");R(this,"queriesPerFrame",Nc);R(this,"queryCapacityFrames",200);R(this,"sort_prefixBindGroup");R(this,"sort_pipelines");R(this,"sort_localHistogramBindGroups");R(this,"sort_scatterBindGroups");R(this,"lastFrame",0);R(this,"frameCount",0);R(this,"preprocessPipeline");R(this,"cullPipeline");R(this,"renderPipeline");R(this,"indirectPipeline");R(this,"renderShaderModule");R(this,"betaKernel",1);R(this,"fetchById");R(this,"octBound");R(this,"acc16");R(this,"accTexture",null);R(this,"accView",null);R(this,"accW",0);R(this,"accH",0);R(this,"legacyRenderPipeline",null);R(this,"varyingsPipeline",null);R(this,"msaa",!1);R(this,"msaaTexture",null);R(this,"msaaView",null);R(this,"msaaW",0);R(this,"msaaH",0);R(this,"msaaPipelines",new Map);R(this,"mkVariant",null);R(this,"legacyRenderer",!1);R(this,"accResolvePipeline",null);R(this,"accResolveBgl",null);R(this,"accResolveBindGroup",null);R(this,"twoPass",!1);R(this,"twoPassThresh",.5);R(this,"twoPassParamsBuffer",null);R(this,"twoPassBgl",null);R(this,"twoPassBg",null);R(this,"twoPassSplatsBgl",null);R(this,"twoPassSplatsBg",null);R(this,"twoPassModules",new Map);R(this,"twoPassPipelines",new Map);R(this,"twoPassDepth",null);R(this,"twoPassDepthView",null);R(this,"twoPassW",0);R(this,"twoPassH",0);R(this,"overdrawMode",0);R(this,"overdrawMax",48);R(this,"ovTexture",null);R(this,"ovView",null);R(this,"ovW",0);R(this,"ovH",0);R(this,"ovParamsBuffer",null);R(this,"ovResolvePipeline",null);R(this,"ovResolveBgl",null);R(this,"ovResolveBg",null);R(this,"ovStatsPipeline",null);R(this,"ovStatsBgl",null);R(this,"ovStatsBg",null);R(this,"ovStatsBuffer",null);R(this,"ovReadback",null);R(this,"ovReadState","idle");R(this,"ovLastStats",null);R(this,"ovPipelines",new Map);R(this,"renderSettingsBgl");R(this,"preprocessBgl2");R(this,"renderSplatsBgl");R(this,"atlasBgl");R(this,"sort_info_buffer");R(this,"sort_ping_pong");R(this,"crsBg");R(this,"gsBg");R(this,"cullBg2");R(this,"preprocessBg1");R(this,"renderSplatsBindGroup");R(this,"renderSettingsBindGroup");R(this,"atlasBindGroup");R(this,"indirectBindGroup");R(this,"sh_solvers_buffer");R(this,"bfcParamsBuffer");R(this,"bfcBindGroupLayout");R(this,"bfcBindGroup");R(this,"staticSortKeys",null);R(this,"wideFrustum",!1);R(this,"staticKeysBuffer",null);R(this,"bgColor",[0,0,0,0]);R(this,"showPerfDialogNext",!1);R(this,"requestReorderNextFrame",!1);R(this,"reorderInFlight",!1);R(this,"downloadOnceNextRead",!1);R(this,"downloadOnceFileName","fps_metrics");R(this,"allFrameTimes",[]);R(this,"lastStageBreakdownMs",null);R(this,"timeQueryEnabled");R(this,"atlas");R(this,"atlasParamsBuffer");R(this,"_atlasEnabled",!0);R(this,"mipLodBias",1);R(this,"_mipMode",1);R(this,"preFrame",null);this.fetchById=C.fetchById??!0,this.staticSortKeys=C.staticSortKeys??null,this.wideFrustum=C.wideFrustum??!1,this.octBound=C.octBound??!1,this.acc16=C.acc16??!1,wt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16}`);const T=b.includes("timestamp-query");this.timeQueryEnabled=T,T&&wt("⏰ using timestamp-query"),this.pc=r,this.device=a,this.presentationFormat=v,this.camera_buffer=p,this.atlas=B??Oi(a),this.atlasParamsBuffer=a.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),a.addEventListener("uncapturederror",ye=>{console.error("A WebGPU error was not captured:",ye.error)}),this._setupTimestampQueries(),this._setupBuffers();const M=(Math.floor((this.pc.num_points+Sn-1)/Sn)+1)*Sn,V=Math.ceil(M/Sn);console.log(`keys count adjusted: ${M}`),console.log(`key size: ${this.pc.num_points}`);const F=a.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=Hc(a);const G=[Fi(M,a),Fi(M,a)],q=a.createBuffer({label:"workgroup histograms",size:V*en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),oe=a.createBuffer({label:"workgroup prefixes",size:V*en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),L=a.createBuffer({label:"digit base",size:en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),I=Math.ceil(V/Sn),X=Math.ceil(I/Sn),H=a.createBuffer({label:"prefix l0 sums",size:I*en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=a.createBuffer({label:"prefix l0 offsets",size:I*en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=a.createBuffer({label:"prefix l1 sums",size:X*en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ie=a.createBuffer({label:"prefix l1 offsets",size:X*en*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=a.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:q}},{binding:2,resource:{buffer:oe}},{binding:3,resource:{buffer:H}},{binding:4,resource:{buffer:Y}},{binding:5,resource:{buffer:Z}},{binding:6,resource:{buffer:ie}},{binding:7,resource:{buffer:L}}]}),this.sort_localHistogramBindGroups=[a.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:G[0].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]}),a.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:G[1].sort_depths_buffer}},{binding:2,resource:{buffer:q}}]})],this.sort_scatterBindGroups=[a.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:G[0].sort_depths_buffer}},{binding:3,resource:{buffer:G[1].sort_depths_buffer}},{binding:4,resource:{buffer:G[0].sort_indices_buffer}},{binding:5,resource:{buffer:G[1].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]}),a.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:L}},{binding:2,resource:{buffer:G[1].sort_depths_buffer}},{binding:3,resource:{buffer:G[0].sort_depths_buffer}},{binding:4,resource:{buffer:G[1].sort_indices_buffer}},{binding:5,resource:{buffer:G[0].sort_indices_buffer}},{binding:6,resource:{buffer:oe}}]})],this.sort_info_buffer=F,this.sort_ping_pong=G;const _e=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),he=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),se=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ce=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:_e,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:he,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:se,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=ce,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:ce,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]});const Te=this.device.createShaderModule({code:Ac});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const de=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ie=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:In(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),de.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ie.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:de}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ie});const te=this.device.createShaderModule({code:ws(Mc,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[_e,he,se,this.bfcBindGroupLayout]}),compute:{module:te,entryPoint:"surfel_cull"}});const ge=this.device.createShaderModule({code:Bc});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[_e,ce]}),compute:{module:ge,entryPoint:"preprocess"}});const Ee=this.device.createShaderModule({label:"render_2dgs",code:ws(ir,{FETCH_BY_ID:this.fetchById,OCT:this.octBound})});Ee.getCompilationInfo().then(ye=>{ye.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),ye.messages.forEach(Me=>{(Me.type==="error"?console.error:Me.type==="warning"?console.warn:console.log)(`${Me.type} (line ${Me.lineNum}:${Me.linePos}): ${Me.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const we=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),N=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,J=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:N,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),j=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),pe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[we,J,j]}),vertex:{module:Ee,entryPoint:"vs_main"},fragment:{module:Ee,entryPoint:"fs_main",constants:{BETA_KERNEL:pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const ze=(ye,Me,re,ve=1)=>{const Re=this.device.createShaderModule({label:`render_2dgs (${ye})`,code:ws(ir,{FETCH_BY_ID:Me,OCT:re})});return this.device.createRenderPipeline({label:`render_2dgs_${ye}`,multisample:{count:ve},layout:this.device.createPipelineLayout({bindGroupLayouts:[we,J,j]}),vertex:{module:Re,entryPoint:"vs_main"},fragment:{module:Re,entryPoint:"fs_main",constants:{BETA_KERNEL:pe},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.varyingsPipeline=ze("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?ze("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=ze,this.device.popErrorScope().then(ye=>{ye?console.error("[render_2dgs] pipeline create validation error:",ye.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:we,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:J,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[or].sort_indices_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:j,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=Ee,this.betaKernel=pe,this.renderSettingsBgl=we,this.renderSplatsBgl=J,this.atlasBgl=j}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}setBfcParams(r,a){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([r,a[0],a[1],a[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var p;const r=new ArrayBuffer(32),a=new Uint32Array(r),v=new Float32Array(r);a[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,a[1]=this.atlas.meta.layer_h|0,v[2]=this.atlas.meta.uv_extent||0,a[3]=this.atlas.meta.probe_mode|0||0,a[4]=this._mipMode!==0?Math.max(1,((p=this.atlas.meta.mip_bytes)==null?void 0:p.length)??1):1,v[5]=this.mipLodBias,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,r)}setMsaa(r){r!==this.msaa&&(this.msaa=r,wt(`[render_2dgs] MSAA 4x: ${r?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(r,a){const v=`${r?"byid":"var"}_${a?"oct":"quad"}`;let p=this.msaaPipelines.get(v);return p||(p=this.mkVariant(`msaa4_${v}`,r,a,4),this.msaaPipelines.set(v,p)),p}ensureMsaaResources(r,a){var v;this.msaaTexture!==null&&this.msaaW===r&&this.msaaH===a||((v=this.msaaTexture)==null||v.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:r,height:a},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=r,this.msaaH=a)}setTwoPass(r){r!==this.twoPass&&(this.twoPass=r,wt(`[render_2dgs] two-pass layer path: ${r?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(r){this.twoPassThresh=Math.min(.999,Math.max(.001,r)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[or].sort_indices_buffer}}]}))}ensureTwoPassResources(r,a){var v;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===r&&this.twoPassH===a)&&((v=this.twoPassDepth)==null||v.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=r,this.twoPassH=a)}renderModuleFor(r,a,v){const p=`${r?"byid":"vary"}_${a?"oct":"quad"}_${v?"hwz":"z0"}`,b=this.twoPassModules.get(p);if(b!==void 0)return b;const B=this.device.createShaderModule({label:`render_2dgs (${p})`,code:ws(ir,{FETCH_BY_ID:r,OCT:a,HW_DEPTH:v})});return B.getCompilationInfo().then(C=>{for(const T of C.messages)T.type==="error"&&console.error(`[render_2dgs ${p}] (line ${T.lineNum}:${T.linePos}): ${T.message}`)}),this.twoPassModules.set(p,B),B}twoPassPipelinesFor(r,a){const v=`${r?"byid":"vary"}_${a?"oct":"quad"}`,p=this.twoPassPipelines.get(v);if(p!==void 0)return p;const b=this.renderModuleFor(r,a,!0),B=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const C=this.device.createRenderPipeline({label:`render_2dgs_opaque_${v}`,layout:B,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),T=this.device.createRenderPipeline({label:`render_2dgs_front_${v}`,layout:B,vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:Ln.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(V=>{V?console.error(`[render_2dgs twopass ${v}] pipeline validation error:`,V.message):console.log(`[render_2dgs twopass ${v}] pipelines created OK`)});const M={opaque:C,front:T};return this.twoPassPipelines.set(v,M),M}setOverdrawMode(r){r!==this.overdrawMode&&(this.overdrawMode=r,this.ovLastStats=null,wt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][r]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(r){this.overdrawMax=Math.max(1,r),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(r,a){var v;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const p=`
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
}`,b=this.device.createShaderModule({label:"overdraw_resolve",code:p});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const B=`
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
}`,C=this.device.createShaderModule({label:"overdraw_stats",code:B});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:C,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===r&&this.ovH===a||((v=this.ovTexture)==null||v.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=r,this.ovH=a)}ovPipelineFor(r,a,v){const p=`${r}_${a?"byid":"vary"}_${v?"oct":"quad"}`,b=this.ovPipelines.get(p);if(b!==void 0)return b;const B=r.startsWith("tp_"),C=this.renderModuleFor(a,v,B),T=this.device.createPipelineLayout({bindGroupLayouts:B?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),M={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[r];let V;r==="tp_raster"?V={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:r==="tp_opaque"?V={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:r==="tp_front"&&(V={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const F=this.device.createRenderPipeline({label:`render_2dgs_${p}`,layout:T,vertex:{module:C,entryPoint:"vs_main"},fragment:{module:C,entryPoint:M,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:Ln.BLEND_ADD}]},depthStencil:V,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(G=>{G&&console.error(`[render_2dgs overdraw ${p}] pipeline validation error:`,G.message)}),this.ovPipelines.set(p,F),F}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const r=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const a=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:r[0]/a,meanCovered:r[2]>0?r[0]/r[2]:0,max:r[1],coveredFrac:r[2]/a}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(r,a){var v;if(this.accResolvePipeline===null){const p=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,b=this.device.createShaderModule({label:"acc16_resolve",code:p});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===r&&this.accH===a||((v=this.accTexture)==null||v.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,r),height:Math.max(1,a),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=r,this.accH=a)}setAtlas(r){this.atlas=r??Oi(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlas.sampler},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&xs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(r){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=r,xs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,r,this._mipMode))}setMipLodBias(r){this.mipLodBias=r,this.writeAtlasParams()}setFetchById(r){r!==this.fetchById&&(this.fetchById=r,wt(`[render_2dgs] fragment inputs: ${r?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLegacyRenderer(r){if(r===this.legacyRenderer)return;this.legacyRenderer=r,ns({legacyPos:r,hypLegacy:r},this.device,this.render_settings_buffer);const a=!r&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([a])),wt(`[render_2dgs] renderer: ${r?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}setMipMode(r){this.atlas.meta.format!==4294967295&&(this._mipMode=r?1:0,this.writeAtlasParams(),xs(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode))}get hasMips(){var r;return(((r=this.atlas.meta.mip_bytes)==null?void 0:r.length)??1)>1}async debugReadSortedIndices(r=30){const a=Math.max(0,Math.min(r,this.pc.num_points)),v=a*Uint32Array.BYTES_PER_ELEMENT;if(v===0){console.log("[DEBUG] No indices to read.");return}const p=this.device.createBuffer({size:v,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),b=this.device.createCommandEncoder();b.copyBufferToBuffer(this.sort_ping_pong[or].sort_indices_buffer,0,p,0,v),this.device.queue.submit([b.finish()]),await p.mapAsync(GPUMapMode.READ);const B=new Uint32Array(p.getMappedRange());console.log("[DEBUG] Sorted indices (first",a,"):",Array.from(B)),p.unmap()}writeSortKeys(r){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,r)}frame(r,a,v=!0){this.preFrame&&this.preFrame();const b=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,B=v&&this.timeQueryEnabled;{r.clearBuffer(this.sort_info_buffer,0,4);const C={label:"cull"};B&&(C.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+0,endOfPassWriteIndex:b+1});const T=r.beginComputePass(C);T.setPipeline(this.cullPipeline),T.setBindGroup(0,this.crsBg),T.setBindGroup(1,this.gsBg),T.setBindGroup(2,this.cullBg2),T.setBindGroup(3,this.bfcBindGroup);const M=Math.ceil(this.pc.num_points/Oc);T.dispatchWorkgroups(M,1,1),T.end()}{const C=r.beginComputePass({label:"calculate indirect dispatch"});C.setPipeline(this.indirectPipeline),C.setBindGroup(0,this.indirectBindGroup),C.dispatchWorkgroups(1,1,1),C.end()}{const C={label:"preprocess"};B&&(C.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+2,endOfPassWriteIndex:b+3});const T=r.beginComputePass(C);T.setPipeline(this.preprocessPipeline),T.setBindGroup(0,this.crsBg),T.setBindGroup(1,this.preprocessBg1),T.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),T.end()}for(let C=0;C<Es;C++){const T=C&1,M=this.sort_pipelines.passes[C],V=this.sort_localHistogramBindGroups[T],F=this.sort_scatterBindGroups[T];{const G={label:`upsweep_round${C}`};B&&C==0&&(G.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+4});const q=r.beginComputePass(G);q.setPipeline(M.localHistogram),q.setBindGroup(0,V),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}{const G=r.beginComputePass({label:`prefix_round${C} - l0TileScan`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=r.beginComputePass({label:`prefix_round${C} - l1TileScanOnL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=r.beginComputePass({label:`prefix_round${C} - l1ScanSums`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,en,1),G.end()}{const G=r.beginComputePass({label:`prefix_round${C} - addL1ToL0`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),G.end()}{const G=r.beginComputePass({label:`prefix_round${C} - addL0ToElems`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),G.end()}{const G=r.beginComputePass({label:`prefix_round${C} - computeDigitBase`});G.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),G.setBindGroup(0,this.sort_prefixBindGroup),G.dispatchWorkgroups(1,1,1),G.end()}{const G={label:`scatter_round${C}`};B&&C==Es-1&&(G.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+5});const q=r.beginComputePass(G);q.setPipeline(M.scatterElements),q.setBindGroup(0,F),q.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),q.end()}}{const C=gt.canvas_size[0],T=gt.canvas_size[1],M=this.overdrawMode!==0;let V=a;M?(this.ensureOverdrawResources(C,T),V=this.ovView):this.acc16&&(this.ensureAccResources(C,T),V=this.accView);const F=M?{r:0,g:0,b:0,a:0}:this.bgColor,G=M||this.acc16,q=this.fetchById&&!this.legacyRenderer,oe=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(C,T);let L,I;if(M)this.overdrawMode===1?(L=this.ovPipelineFor("tp_opaque",q,oe),I=this.ovPipelineFor("tp_front",q,oe)):L=I=this.ovPipelineFor("tp_raster",q,oe);else{const ie=this.twoPassPipelinesFor(q,oe);L=ie.opaque,I=ie.front}const X={label:"render_opaque_layer",colorAttachments:[{view:V,loadOp:"clear",storeOp:"store",clearValue:F}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};B&&(X.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6});const H=r.beginRenderPass(X);H.setPipeline(L),H.setBindGroup(0,this.renderSettingsBindGroup),H.setBindGroup(1,this.twoPassSplatsBg),H.setBindGroup(2,this.atlasBindGroup),H.setBindGroup(3,this.twoPassBg),H.drawIndirect(this.draw_indirect_buffer,0),H.end();const Y={label:"render_front",colorAttachments:[{view:V,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};B&&!G&&(Y.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const Z=r.beginRenderPass(Y);Z.setPipeline(I),Z.setBindGroup(0,this.renderSettingsBindGroup),Z.setBindGroup(1,this.twoPassSplatsBg),Z.setBindGroup(2,this.atlasBindGroup),Z.setBindGroup(3,this.twoPassBg),Z.drawIndirect(this.draw_indirect_buffer,0),Z.end()}else{const L=this.msaa&&!M&&!this.acc16;L&&this.ensureMsaaResources(C,T);const I={label:"render",colorAttachments:[L?{view:this.msaaView,resolveTarget:V,loadOp:"clear",storeOp:"discard",clearValue:F}:{view:V,loadOp:"clear",storeOp:"store",clearValue:F}]};B&&(I.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:b+6,...G?{}:{endOfPassWriteIndex:b+7}});const X=r.beginRenderPass(I);M?(X.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",q,oe)),X.setBindGroup(1,this.twoPassSplatsBg)):(X.setPipeline(L?this.msaaPipelineFor(q,oe):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.renderPipeline:this.varyingsPipeline),X.setBindGroup(1,this.renderSplatsBindGroup)),X.setBindGroup(0,this.renderSettingsBindGroup),X.setBindGroup(2,this.atlasBindGroup),X.drawIndirect(this.draw_indirect_buffer,0),X.end()}if(M){r.clearBuffer(this.ovStatsBuffer,0,16);const L=r.beginComputePass({label:"overdraw_stats"});L.setPipeline(this.ovStatsPipeline),L.setBindGroup(0,this.ovStatsBg),L.dispatchWorkgroups(Math.ceil(C/16),Math.ceil(T/16),1),L.end();const I={label:"overdraw_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};B&&(I.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const X=r.beginRenderPass(I);X.setPipeline(this.ovResolvePipeline),X.setBindGroup(0,this.ovResolveBg),X.draw(3),X.end(),this.ovReadState==="idle"&&(r.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const L={label:"acc16_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};B&&(L.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:b+7});const I=r.beginRenderPass(L);I.setPipeline(this.accResolvePipeline),I.setBindGroup(0,this.accResolveBindGroup),I.draw(3),I.end()}}this.frameCount++}async readPerfMetrics(r){const a=(r==null?void 0:r.silent)??!1;if(this.frameCount<=0)return;const v=this.device.createCommandEncoder({label:"timestamp resolve encoder"});v.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),v.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([v.finish()]),await this.device.queue.onSubmittedWorkDone();const p=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const b=new BigInt64Array(this.resultBuffer.getMappedRange()),B=Math.min(this.frameCount,this.queryCapacityFrames),C=(this.lastFrame+this.frameCount-B)%this.queryCapacityFrames,T=Array.from({length:p.length},()=>[]);let M=0;for(let X=0;X<B;X++){const H=(C+X)%this.queryCapacityFrames,Y=H*this.queriesPerFrame;let Z=!0;for(let ie=0;ie<p.length;ie++){const[_e,he,se]=p[ie];if(b[Y+se]===0n||b[Y+he]===0n||b[Y+he]<b[Y+se]){Z=!1;break}}if(!Z){!a&&H%60===0&&console.debug("[timestamp] frame slot",H,"contains unwritten (0) timestamps, skipped in stats");continue}M++;for(let ie=0;ie<p.length;ie++){const[_e,he,se]=p[ie],ce=Number(b[Y+se]),Te=Number(b[Y+he]);T[ie].push((Te-ce)/1e6)}}if(M===0){this.resultBuffer.unmap(),a||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...T[0]);const V=[];let F=0,G=0,q=0;for(let X=0;X<p.length;X++){const H=p[X][0],Y=T[X];let Z=0;if(H==="Total"){const ie=this.allFrameTimes;Z=ie.reduce((se,ce)=>se+ce,0)/ie.length;const _e=[...ie].sort((se,ce)=>se-ce);F=_e[Math.floor(_e.length*.99)]||0;const he=ie.reduce((se,ce)=>se+Math.pow(ce-Z,2),0)/ie.length;G=Math.sqrt(he),q=Z}else Z=Y.reduce((ie,_e)=>ie+_e,0)/Y.length;V.push([H,Z])}this.lastFrame+=this.frameCount,this.frameCount=0;const oe=Object.fromEntries(V);this.lastStageBreakdownMs={cull:oe.Culling??0,preprocess:oe.Preprocess??0,sort:oe.Sort??0,render:oe.Render??0,total:oe.Total??0};const I=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([X,H])=>`${X}: ${H.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${G.toFixed(3)}ms
Total AVG: ${q.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(a||(console.log(I),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const X=`Stage,ms
`,H=V.map(([ie,_e])=>`${ie},${_e.toFixed(3)}`).join(`
`),Y="data:text/csv;charset=utf-8,"+encodeURIComponent(X+H),Z=document.createElement("a");Z.href=Y,Z.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(Z),Z.click(),Z.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(I)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const r=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Vc,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const r=document.querySelector("canvas"),a=r?r.width:1,v=r?r.height:1;Lc({width:a,height:v,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),wr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:In(this.pc.num_points*$c),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:In(this.pc.num_points*qc),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(r){if(r&&r.trim().length>0){const a=r.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=a.length>0?a:this.downloadOnceFileName}else{const a=new Date,v=`${a.getFullYear()}${String(a.getMonth()+1).padStart(2,"0")}${String(a.getDate()).padStart(2,"0")}_${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${v}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};R(Ln,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),R(Ln,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let ks=Ln;class Yc{constructor(r){R(this,"nSurfels");R(this,"nNodes");R(this,"planes");R(this,"front");R(this,"back");R(this,"copOff");R(this,"cop");R(this,"missing");R(this,"stackNode");R(this,"stackPhase");R(this,"keys");R(this,"lastMs",0);R(this,"lastEye",[NaN,NaN,NaN]);const a=new DataView(r),v=String.fromCharCode(a.getUint8(0),a.getUint8(1),a.getUint8(2),a.getUint8(3));if(v!=="BSP1")throw new Error(`not a BSP1 file (magic ${v})`);this.nSurfels=a.getUint32(4,!0),this.nNodes=a.getUint32(8,!0);const p=a.getUint32(12,!0),b=a.getUint32(16,!0);let B=20;const C=this.nNodes;if(this.planes=new Float32Array(r.slice(B,B+C*16)),B+=C*16,this.front=new Int32Array(r.slice(B,B+C*4)),B+=C*4,this.back=new Int32Array(r.slice(B,B+C*4)),B+=C*4,this.copOff=new Uint32Array(r.slice(B,B+(C+1)*4)),B+=(C+1)*4,this.cop=new Uint32Array(r.slice(B,B+p*4)),B+=p*4,this.missing=new Uint32Array(r.slice(B,B+b*4)),B+=b*4,B!==r.byteLength)throw new Error(`BSP1 size mismatch: parsed ${B} of ${r.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*C+2),this.stackPhase=new Uint8Array(2*C+2)}computeKeys(r){const a=r[0],v=r[1],p=r[2];if(a===this.lastEye[0]&&v===this.lastEye[1]&&p===this.lastEye[2])return!1;this.lastEye=[a,v,p];const b=performance.now(),B=this.planes,C=this.front,T=this.back,M=this.copOff,V=this.cop,F=this.keys;let G=1;for(let I=0;I<this.missing.length;I++)F[this.missing[I]]=G++;const q=this.stackNode,oe=this.stackPhase;let L=0;for(q[0]=0,oe[0]=0,L=1;L>0;){L--;const I=q[L],X=oe[L],H=B[4*I],Y=B[4*I+1],Z=B[4*I+2];if(H===0&&Y===0&&Z===0){for(let se=M[I];se<M[I+1];se++)F[V[se]]=G++;continue}const ie=H*a+Y*v+Z*p-B[4*I+3]>=0,_e=ie?C[I]:T[I],he=ie?T[I]:C[I];if(X===0)q[L]=I,oe[L]=1,L++,he>=0&&(q[L]=he,oe[L]=0,L++);else{for(let se=M[I];se<M[I+1];se++)F[V[se]]=G++;_e>=0&&(q[L]=_e,oe[L]=0,L++)}}return this.lastMs=performance.now()-b,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function Zc(o){const r=await fetch(o);if(!r.ok)throw new Error(`BSP fetch ${o}: HTTP ${r.status}`);return new Yc(await r.arrayBuffer())}function Xc(o,r){return 2*Math.atan(r/(2*o))}function Jc(o,r,a,v){const p=Math.tan(v/2),b=Math.tan(a/2),B=p*o,C=-B,T=b*o,M=-T,V=vt.create();return V[0]=2*o/(T-M),V[5]=-2*o/(B-C),V[2]=(T+M)/(T-M),V[6]=(B+C)/(B-C),V[14]=1,V[10]=r/(r-o),V[11]=-(r*o)/(r-o),vt.transpose(V,V),V}async function fr(o){wt(`loading scene camera file... : ${o}`);const a=await(await fetch(o)).json();return wt(`loaded cameras count: ${a.length}`),a.map(v=>{const p=W.clone(v.position),b=kt.create(...v.rotation.flat()),B=b[0],C=b[4],T=b[8],M=b[1],V=b[5],F=b[9],G=b[2],q=b[6],oe=b[10];B*(V*oe-F*q)-C*(M*oe-F*G)+T*(M*q-V*G)<0&&(b[1]=-b[1],b[5]=-b[5],b[9]=-b[9]);const I=vt.fromMat3(b);return{position:p,rotation:I,img_name:v.img_name,id:v.id}})}const Qc=4*2,eu=4*16,io=4*eu+2*Qc;function tu(o){return o.createBuffer({label:"camera uniform",size:io,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Pn=new Float32Array(io/Float32Array.BYTES_PER_ELEMENT),Bs=class Bs{constructor(r,a){R(this,"_renderSize",null);R(this,"uniform_buffer");R(this,"position",W.create());R(this,"rotation",vt.create());R(this,"zfar",100);R(this,"fovY",45/180*Math.PI);R(this,"fovX");R(this,"focalRatioX",1);R(this,"focal",Ei.create());R(this,"viewport",Ei.create());R(this,"view_matrix",vt.identity());R(this,"view_inv_matrix",vt.identity());R(this,"proj_matrix",vt.identity());R(this,"proj_inv_matrix",vt.identity());R(this,"_negPos",W.create());R(this,"look",W.create(0,0,1));R(this,"up",W.create(0,1,0));R(this,"right",W.create(1,0,0));this.canvas=r,this.device=a,this.uniform_buffer=a?tu(a):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(r,a){this._renderSize=[r,a],this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this.on_update_canvas()}on_update_canvas(){const r=this._renderSize?this._renderSize[0]:this.canvas.width,a=this._renderSize?this._renderSize[1]:this.canvas.height,v=.5*a/Math.tan(this.fovY*.5);this.focal[0]=v*this.focalRatioX,this.focal[1]=v,this.fovX=Xc(this.focal[0],r),this.viewport[0]=r,this.viewport[1]=a,this.proj_matrix=Jc(.01,this.zfar,this.fovX,this.fovY),vt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],vt.copy(this.rotation,this.view_matrix),vt.translate(this.view_matrix,this._negPos,this.view_matrix),vt.inverse(this.view_matrix,this.view_inv_matrix),W.transformMat4Upper3x3(Bs.Z_AXIS,this.view_inv_matrix,this.look),W.normalize(this.look,this.look),W.cross(this.up,this.look,this.right),W.normalize(this.right,this.right);let r=0;Pn.set(this.view_matrix,r),r+=16,Pn.set(this.view_inv_matrix,r),r+=16,Pn.set(this.proj_matrix,r),r+=16,Pn.set(this.proj_inv_matrix,r),r+=16,Pn.set(this.viewport,r),r+=2,Pn.set(this.focal,r),r+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,Pn)}set_preset(r){W.copy(r.position,this.position),vt.copy(r.rotation,this.rotation),this.update_buffer()}setFov(r){this.fovY=r,this.on_update_canvas()}setFocalRatio(r){this.focalRatioX=r,this.on_update_canvas()}getFov(){return this.fovY}};R(Bs,"Z_AXIS",W.create(0,0,1));let Cs=Bs;const nu={bilinear:0,bicubic:1,hermite:2},su=`
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
}`;class ru{constructor(r,a,v,p){R(this,"pipeline");R(this,"uni");R(this,"bgCache",new Map);R(this,"lowTex",null);R(this,"lowView",null);R(this,"lowSize",[0,0]);R(this,"last","");this.device=r,this.format=a,this.mode=v,this.scale=p;const b=r.createShaderModule({label:"upscaler",code:su});this.pipeline=r.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:b,entryPoint:"vs"},fragment:{module:b,entryPoint:"fs",targets:[{format:a}]},primitive:{topology:"triangle-list"}}),this.uni=r.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}lowTarget(r,a){var b;const v=Math.max(1,Math.round(r*this.scale)),p=Math.max(1,Math.round(a*this.scale));return(!this.lowTex||this.lowSize[0]!==v||this.lowSize[1]!==p)&&((b=this.lowTex)==null||b.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[v,p],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.lowSize=[v,p]),{view:this.lowView,w:v,h:p}}pass(r,a,v,p){const[b,B]=this.lowSize,C=`${b},${B},${v},${p}`;C!==this.last&&(this.device.queue.writeBuffer(this.uni,0,new Uint32Array([b,B,v,p,nu[this.mode],0,0,0])),this.last=C);let T=this.bgCache.get(this.lowView);T||(T=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}}]}),this.bgCache.set(this.lowView,T));const M=r.beginRenderPass({colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});M.setPipeline(this.pipeline),M.setBindGroup(0,T),M.draw(3),M.end()}destroy(){var r;(r=this.lowTex)==null||r.destroy(),this.uni.destroy()}}const iu=W.create(1,0,0),ou=W.create(0,1,0),au=W.create(0,0,1);function lu(o,r){const a=o[0],v=o[4],p=o[8],b=o[1],B=o[5],C=o[9],T=o[2],M=o[6],V=o[10],F=a+B+V;let G,q,oe,L;if(F>0){const I=.5/Math.sqrt(F+1);G=.25/I,q=(M-C)*I,oe=(p-T)*I,L=(b-v)*I}else if(a>B&&a>V){const I=2*Math.sqrt(1+a-B-V);G=(M-C)/I,q=.25*I,oe=(v+b)/I,L=(p+T)/I}else if(B>V){const I=2*Math.sqrt(1+B-a-V);G=(p-T)/I,q=(v+b)/I,oe=.25*I,L=(C+M)/I}else{const I=2*Math.sqrt(1+V-a-B);G=(b-v)/I,q=(p+T)/I,oe=(C+M)/I,L=.25*I}return r[0]=q,r[1]=oe,r[2]=L,r[3]=G,r}class oo{constructor(r){R(this,"element");R(this,"enabled",!0);R(this,"center",W.create(0,0,0));R(this,"up",W.create(0,1,0));R(this,"rotation",[0,0]);R(this,"shift",[0,0]);R(this,"scroll",0);R(this,"speed",.1);R(this,"sensitivity",.08);R(this,"leftPressed",!1);R(this,"rightPressed",!1);R(this,"leftDragPans",!1);R(this,"lastX",0);R(this,"lastY",0);R(this,"touches",new Map);R(this,"lastTouchCenter",null);R(this,"lastPinchDistance",null);R(this,"lastTwoFingerAngle",null);R(this,"lastTouchCount",0);R(this,"roll",0);R(this,"_dir",W.create());R(this,"_right",W.create());R(this,"_upCam",W.create());R(this,"_scratch",W.create());R(this,"_qY",pt.create());R(this,"_qX",pt.create());R(this,"_qRot",pt.create());R(this,"_qZ",pt.create());R(this,"_qLocal",pt.create());R(this,"_qWorldToCam",pt.create());R(this,"_scratchMat3",kt.create());R(this,"bboxMin",null);R(this,"bboxMax",null);R(this,"anchor",W.create(0,0,0));R(this,"downCallback",r=>{var a,v,p,b;if(this.enabled){if(r.pointerType==="touch"){this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),(v=(a=r.target)==null?void 0:a.setPointerCapture)==null||v.call(a,r.pointerId),r.preventDefault();return}r.isPrimary&&(r.button===0?(this.leftPressed=!0,this.leftDragPans=r.shiftKey):r.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=r.pageX,this.lastY=r.pageY,(b=(p=r.target)==null?void 0:p.setPointerCapture)==null||b.call(p,r.pointerId),r.preventDefault())}});R(this,"moveCallback",r=>{if(!this.enabled)return;if(r.pointerType==="touch"){if(!this.touches.has(r.pointerId))return;this.touches.set(r.pointerId,{x:r.pageX,y:r.pageY}),this.handleTouchGestures(),r.preventDefault();return}if(!r.isPrimary||!this.leftPressed&&!this.rightPressed)return;r.preventDefault();const a=r.pageX-this.lastX,v=r.pageY-this.lastY;this.lastX=r.pageX,this.lastY=r.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=a,this.rotation[1]-=v):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=a,this.shift[0]+=v)});R(this,"upCallback",r=>{var a,v,p,b;if(r.pointerType==="touch"){this.touches.delete(r.pointerId),this.handleTouchGestures(),(v=(a=r.target)==null?void 0:a.releasePointerCapture)==null||v.call(a,r.pointerId),r.preventDefault();return}r.button===0?this.leftPressed=!1:r.button===2?this.rightPressed=!1:this.rightPressed=!1,(b=(p=r.target)==null?void 0:p.releasePointerCapture)==null||b.call(p,r.pointerId),r.preventDefault()});R(this,"wheelCallback",r=>{if(!this.enabled||(r.preventDefault(),this.rightPressed))return;let a=r.deltaY;r.deltaMode===1?a*=16:r.deltaMode===2&&(a*=100),this.scroll+=a*.01});this.camera=r,this.registerElement(r.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const r=this.bboxMax[0]-this.bboxMin[0],a=this.bboxMax[1]-this.bboxMin[1],v=this.bboxMax[2]-this.bboxMin[2],p=.5*Math.sqrt(r*r+a*a+v*v);return p>1e-6?p:null}addRoll(r){this.roll+=r}registerElement(r){this.element&&this.element!==r&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=r,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",a=>a.preventDefault())}setCenter(r){W.copy(r,this.center),W.copy(r,this.anchor)}setOrbitPivot(r){W.set(r[0],r[1],r[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(r){if(!isFinite(r)||r<.001)return;const a=this.camera.rotation;W.set(a[2],a[6],a[10],this._dir),W.normalize(this._dir,this._dir),W.scale(this._dir,r,this._dir),W.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const r=this.camera;if(W.subtract(this.center,r.position,this._scratch),W.length(this._scratch)<1e-6)return;W.normalize(this._scratch,this._scratch),W.cross(this.up,this._scratch,this._right),W.length(this._right)<1e-6&&W.set(1,0,0,this._right),W.normalize(this._right,this._right),W.cross(this._scratch,this._right,this._upCam),W.normalize(this._upCam,this._upCam);const a=r.rotation;a[0]=this._right[0],a[1]=this._upCam[0],a[2]=this._scratch[0],a[3]=0,a[4]=this._right[1],a[5]=this._upCam[1],a[6]=this._scratch[1],a[7]=0,a[8]=this._right[2],a[9]=this._upCam[2],a[10]=this._scratch[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,r.update_buffer()}setBbox(r,a){this.bboxMin=W.create(r[0],r[1],r[2]),this.bboxMax=W.create(a[0],a[1],a[2]);const v=(r[0]+a[0])*.5,p=(r[1]+a[1])*.5,b=(r[2]+a[2])*.5;W.set(v,p,b,this.center),W.set(v,p,b,this.anchor)}resetToCamera(){const r=this.camera.rotation;W.set(r[2],r[6],r[10],this._dir),W.normalize(this._dir,this._dir);let a=null;if(this.bboxMin&&this.bboxMax){let v=-1/0,p=1/0,b=!1;for(let B=0;B<3;B++){const C=this._dir[B],T=this.bboxMin[B]-this.camera.position[B],M=this.bboxMax[B]-this.camera.position[B];if(Math.abs(C)>1e-8){const V=T/C,F=M/C;v=Math.max(v,Math.min(V,F)),p=Math.min(p,Math.max(V,F))}else if(T>0||M<0){b=!0;break}}!b&&v<=p&&p>0&&(a=(Math.max(v,0)+p)*.5)}if(a===null||!isFinite(a)||a<.001){W.subtract(this.anchor,this.camera.position,this._scratch);const v=W.dot(this._scratch,this._dir);a=v>.001?v:W.length(this._scratch)}a=Math.max(.1,a),W.scale(this._dir,a,this._dir),W.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const r=this.touches.size;if(r!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=r,r===1){const a=this.touches.values().next().value;if(this.lastTouchCenter){const v=a.x-this.lastTouchCenter[0],p=a.y-this.lastTouchCenter[1];this.rotation[0]+=v*.3,this.rotation[1]-=p*.3}this.lastTouchCenter=[a.x,a.y]}else if(r===2){const a=Array.from(this.touches.values()),v=(a[0].x+a[1].x)*.5,p=(a[0].y+a[1].y)*.5,b=a[1].x-a[0].x,B=a[1].y-a[0].y,C=Math.hypot(b,B),T=Math.atan2(B,b);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const M=v-this.lastTouchCenter[0],V=p-this.lastTouchCenter[1],F=Math.hypot(M,V),G=Math.abs(C-this.lastPinchDistance);let q=T-this.lastTwoFingerAngle;q>Math.PI&&(q-=2*Math.PI),q<-Math.PI&&(q+=2*Math.PI),F>.5&&(this.shift[1]-=M,this.shift[0]+=V),G>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(C/this.lastPinchDistance)*10),Math.abs(q)>.0087&&(this.roll+=q)}this.lastTouchCenter=[v,p],this.lastPinchDistance=C,this.lastTwoFingerAngle=T}}update(r){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const a=this.camera;{const I=a.rotation;this.up[0]=I[1],this.up[1]=I[5],this.up[2]=I[9],W.length(this.up)>1e-6?W.normalize(this.up,this.up):W.set(0,1,0,this.up)}let v=0,p=!1;Math.abs(this.roll)>1e-4&&(v=this.roll,this.roll=0,p=!0),W.subtract(a.position,this.center,this._dir);let b=W.length(this._dir);b<1e-6&&(b=1e-6);const B=Math.exp(Math.log(b)+this.scroll*r*10*this.speed);W.scale(this._dir,B/b,this._dir),b=B;const C=a.rotation;this._right[0]=C[0],this._right[1]=C[4],this._right[2]=C[8],W.normalize(this._right,this._right),W.length(this._right)<1e-6&&W.set(1,0,0,this._right);const T=W.create(C[1],C[5],C[9]);W.normalize(T,T),W.length(T)<1e-6&&W.set(0,1,0,T);const M=r*this.speed*.1*b,V=this.shift[1]*M,F=-this.shift[0]*M;W.scale(this._right,V,this._scratch),W.add(this.center,this._scratch,this.center),W.add(a.position,this._scratch,a.position),W.scale(T,F,this._scratch),W.add(this.center,this._scratch,this.center),W.add(a.position,this._scratch,a.position);const G=this.rotation[0]*r*this.sensitivity,q=this.rotation[1]*r*this.sensitivity;if(Math.abs(G)>1e-5||Math.abs(q)>1e-5||p){const I=a.rotation;lu(I,this._qWorldToCam),pt.fromAxisAngle(iu,-q,this._qX),pt.fromAxisAngle(ou,-G,this._qY),pt.multiply(this._qX,this._qY,this._qLocal),p&&(pt.fromAxisAngle(au,1*v,this._qZ),pt.multiply(this._qZ,this._qLocal,this._qLocal)),pt.normalize(this._qLocal,this._qLocal),pt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),pt.normalize(this._qWorldToCam,this._qWorldToCam),kt.fromQuat(this._qWorldToCam,this._scratchMat3),vt.fromMat3(this._scratchMat3,a.rotation);const X=a.rotation,H=X[2],Y=X[6],Z=X[10];a.position[0]=this.center[0]-H*b,a.position[1]=this.center[1]-Y*b,a.position[2]=this.center[2]-Z*b,this.up[0]=X[1],this.up[1]=X[5],this.up[2]=X[9],W.normalize(this.up,this.up)}else W.add(this.center,this._dir,a.position);a.update_buffer();const L=Math.pow(.8,r*60);this.rotation[0]*=L,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=L,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=L,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=L,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=L,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function ao(o){const r=W.create();for(const a of o)W.add(r,a,r);return W.scale(r,1/Math.max(o.length,1),r)}function lo(o,r){const a=kt.create();kt.inverse(o,a);const v=W.create();return v[0]=a[0]*r[0]+a[4]*r[1]+a[8]*r[2],v[1]=a[1]*r[0]+a[5]*r[1]+a[9]*r[2],v[2]=a[2]*r[0]+a[6]*r[1]+a[10]*r[2],v}function cu(o){const r=o.slice(),a=[1,0,0,0,1,0,0,0,1],v=(T,M)=>r[T*3+M],p=(T,M,V)=>{r[T*3+M]=V},b=(T,M)=>a[T*3+M],B=(T,M,V)=>{a[T*3+M]=V};for(let T=0;T<30;T++){let M=0,V=1,F=Math.abs(v(0,1));if(Math.abs(v(0,2))>F&&(M=0,V=2,F=Math.abs(v(0,2))),Math.abs(v(1,2))>F&&(M=1,V=2,F=Math.abs(v(1,2))),F<1e-12)break;const G=v(M,M),q=v(V,V),oe=v(M,V);let L;Math.abs(G-q)<1e-30?L=Math.PI/4*Math.sign(oe):L=.5*Math.atan2(2*oe,G-q);const I=Math.cos(L),X=Math.sin(L);for(let H=0;H<3;H++){const Y=v(H,M),Z=v(H,V);p(H,M,I*Y+X*Z),p(H,V,-X*Y+I*Z)}for(let H=0;H<3;H++){const Y=v(M,H),Z=v(V,H);p(M,H,I*Y+X*Z),p(V,H,-X*Y+I*Z)}for(let H=0;H<3;H++){const Y=b(H,M),Z=b(H,V);B(H,M,I*Y+X*Z),B(H,V,-X*Y+I*Z)}}const C=[];for(let T=0;T<3;T++)C.push({val:v(T,T),vec:W.create(b(0,T),b(1,T),b(2,T))});return C.sort((T,M)=>M.val-T.val),{vals:[C[0].val,C[1].val,C[2].val],vecs:[C[0].vec,C[1].vec,C[2].vec]}}function uu(o,r){const a=ao(o);let v=0,p=0,b=0,B=0,C=0,T=0;for(const oe of o){const L=oe[0]-a[0],I=oe[1]-a[1],X=oe[2]-a[2];v+=L*L,p+=L*I,b+=L*X,B+=I*I,C+=I*X,T+=X*X}const M=[v,p,b,p,B,C,b,C,T],{vecs:V}=cu(M);let F=V[0],G=V[1],q=V[2];return W.dot(q,r)<0&&(W.scale(q,-1,q),W.scale(G,-1,G)),{centroid:a,normal:q,u:F,v:G}}function du(o){let r=0,a=0,v=0,p=0,b=0,B=0,C=0,T=0,M=0;for(const[I,X]of o){const H=-2*I,Y=-2*X,Z=1,ie=-(I*I+X*X);r+=H*H,a+=H*Y,v+=H*Z,p+=Y*Y,b+=Y*Z,B+=Z*Z,C+=H*ie,T+=Y*ie,M+=Z*ie}const V=kt.create(r,a,v,a,p,b,v,b,B),F=lo(V,W.create(C,T,M)),G=F[0],q=F[1],oe=F[2],L=G*G+q*q-oe;return{center:[G,q],radius:Math.sqrt(Math.max(L,1e-12))}}function pu(o,r){let a=0,v=0,p=0,b=0,B=0,C=0,T=0,M=0,V=0;for(let G=0;G<o.length;G++){const q=o[G],oe=W.normalize(r[G],W.create()),L=1-oe[0]*oe[0],I=-oe[0]*oe[1],X=-oe[0]*oe[2],H=1-oe[1]*oe[1],Y=-oe[1]*oe[2],Z=1-oe[2]*oe[2];a+=L,v+=I,p+=X,b+=H,B+=Y,C+=Z,T+=L*q[0]+I*q[1]+X*q[2],M+=I*q[0]+H*q[1]+Y*q[2],V+=X*q[0]+Y*q[1]+Z*q[2]}const F=kt.create(a,v,p,v,b,B,p,B,C);return lo(F,W.create(T,M,V))}function co(o,r={}){if(o.length===0)return null;const a=r.tiltDownDeg??8,v=r.radiusScale??1,p=r.alignFirst??!0,b=(r.direction??"ccw")==="ccw"?1:-1,B=o.map(se=>W.clone(se.position)),C=o.map(se=>{const ce=se.rotation;return W.create(ce[8],ce[9],ce[10])}),T=o.map(se=>{const ce=se.rotation;return W.create(ce[4],ce[5],ce[6])}),M=ao(T),V=W.normalize(W.scale(M,-1,W.create())),{centroid:F,normal:G,u:q,v:oe}=uu(B,V),L=B.map(se=>{const ce=W.sub(se,F,W.create());return[W.dot(ce,q),W.dot(ce,oe)]}),{center:I,radius:X}=du(L),H=X*v,Y=W.add(F,W.add(W.scale(q,I[0],W.create()),W.scale(oe,I[1],W.create()),W.create()),W.create()),Z=pu(B,C),ie=H*Math.tan(a*Math.PI/180),_e=W.sub(Z,W.scale(G,ie,W.create()),W.create());let he=0;if(p){const se=W.sub(B[0],Y,W.create());he=Math.atan2(W.dot(se,oe),W.dot(se,q))/(2*Math.PI)%1,he<0&&(he+=1)}return console.log(`[orbit] fit ${o.length} train cams: radius=${H.toFixed(2)}, tilt=${a}°, normal=[${G[0].toFixed(2)}, ${G[1].toFixed(2)}, ${G[2].toFixed(2)}], startPhase=${he.toFixed(3)}`),{center:Y,radius:H,normal:G,u:q,v:oe,lookAt:_e,startPhase:he,direction:b}}function uo(o,r){const a=(o.startPhase+r*o.direction)*2*Math.PI,v=Math.cos(a),p=Math.sin(a),b=W.add(o.center,W.add(W.scale(o.u,o.radius*v,W.create()),W.scale(o.v,o.radius*p,W.create()),W.create()),W.create()),B=W.normalize(W.sub(o.lookAt,b,W.create())),C=W.cross(B,o.normal,W.create());W.length(C)<1e-6&&W.copy(o.u,C),W.normalize(C,C);const T=W.cross(B,C,W.create());W.normalize(T,T);const M=vt.create();return M[0]=C[0],M[1]=T[0],M[2]=B[0],M[3]=0,M[4]=C[1],M[5]=T[1],M[6]=B[1],M[7]=0,M[8]=C[2],M[9]=T[2],M[10]=B[2],M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,{position:b,rotation:M,img_name:`orbit_${(r*1e3).toFixed(0)}`,id:0}}function hu(o,r={}){const a=co(o,r);if(!a)return[];const v=r.numViews??120;return Array.from({length:v},(p,b)=>({...uo(a,b/v),img_name:`circle_${b.toString().padStart(4,"0")}`,id:b}))}const po="halloumi.renderer";function fu(){const o=new URLSearchParams(window.location.search).get("renderer"),r=o==="webgl"||o==="webgpu"?o:null;let a=null;try{const v=localStorage.getItem(po);(v==="webgl"||v==="webgpu")&&(a=v)}catch{}return{forced:r,stored:a}}function _r(o){try{localStorage.setItem(po,o)}catch{}const r=new URLSearchParams(window.location.search);r.set("renderer",o),window.location.search=r.toString()}function tn(o){const r=(o&32768)>>15,a=(o&31744)>>10,v=o&1023;return a===0?(r?-1:1)*Math.pow(2,-14)*(v/1024):a===31?v?NaN:r?-1/0:1/0:(r?-1:1)*Math.pow(2,a-15)*(1+v/1024)}function mr(o,r,a,v,p,b,B,C,T,M=.5){const V=T?T.length:B.length/8,F=[],G=[];for(let L=0;L<V;L++){const X=(T?T[L]:L)*8,H=B[X]-o,Y=B[X+1]-r,Z=B[X+2]-a,ie=H*v+Y*p+Z*b;if(ie<=0||!(C[X+7]>>>16&1))continue;const _e=C[X+4],he=tn(_e&65535),se=tn(_e>>>16&65535),ce=3*Math.max(he,se),Te=H-ie*v,de=Y-ie*p,Ie=Z-ie*b;if(Te*Te+de*de+Ie*Ie>ce*ce)continue;const te=tn(C[X+3]&65535);if(te<1/255)continue;const ge=C[X+5],Ee=C[X+6];let we=tn(ge&65535),N=tn(ge>>>16&65535),J=tn(Ee&65535),j=tn(Ee>>>16&65535);const pe=Math.hypot(we,N,J,j)||1;we/=pe,N/=pe,J/=pe,j/=pe;const ze=1-2*(J*J+j*j),ye=2*(N*J+we*j),Me=2*(N*j-we*J),re=2*(N*J-we*j),ve=1-2*(N*N+j*j),Re=2*(J*j+we*N),z=2*(N*j+we*J),Q=2*(J*j-we*N),y=1-2*(N*N+J*J),l=v*z+p*Q+b*y;if(Math.abs(l)<1e-6)continue;const _=(H*z+Y*Q+Z*y)/l;if(!(_>0))continue;const u=_*v-H,x=_*p-Y,k=_*b-Z,w=(u*ze+x*ye+k*Me)/(he||1e-6),S=(u*re+x*ve+k*Re)/(se||1e-6),i=w*w+S*S;if(i>9)continue;const g=Math.min(.99,te*Math.exp(-.5*i));g<1/255||(F.push(_),G.push(g))}if(F.length===0)return null;const q=F.map((L,I)=>I).sort((L,I)=>F[L]-F[I]);let oe=1;for(const L of q)if(oe*=1-G[L],oe<M)return F[L];return null}function Ts(o,r,a){const v=(o-a.viewport[0]*.5)/a.focal[0],p=-((r-a.viewport[1]*.5)/a.focal[1]),b=a.rotation;let B=v*b[0]+p*b[1]+b[2],C=v*b[4]+p*b[5]+b[6],T=v*b[8]+p*b[9]+b[10];const M=Math.hypot(B,C,T)||1;return[B/M,C/M,T/M]}function vr(o,r,a,v,p,b){const[B,C,T]=Ts(o,r,v),M=v.position[0],V=v.position[1],F=v.position[2],G=new Uint32Array(p.buffer,p.byteOffset,p.length);let q=mr(M,V,F,B,C,T,p,G,null,.5);return q===null&&(q=mr(M,V,F,B,C,T,p,G,null,.8)),q===null?null:[M+q*B,V+q*C,F+q*T]}function ho(o,r){const a=o.viewport[0],v=o.viewport[1],p=new Uint32Array(r.buffer,r.byteOffset,r.length),b=o.position[0],B=o.position[1],C=o.position[2],[T,M,V]=Ts(a*.5,v*.5,o),F=.06*Math.max(a,v),G=(F+2)/o.focal[0],q=r.length/8,oe=[];for(let H=0;H<q;H++){const Y=H*8,Z=r[Y]-b,ie=r[Y+1]-B,_e=r[Y+2]-C,he=Z*T+ie*M+_e*V;if(he<=0)continue;const se=p[Y+4],ce=3*Math.max(tn(se&65535),tn(se>>>16&65535)),Te=Z-he*T,de=ie-he*M,Ie=_e-he*V,te=he*G+ce;Te*Te+de*de+Ie*Ie<=te*te&&oe.push(H)}if(oe.length===0)return null;const L=Int32Array.from(oe),I=[],X=5;for(let H=0;H<X;H++)for(let Y=0;Y<X;Y++){const Z=a*.5+(Y-(X-1)/2)/((X-1)/2)*F,ie=v*.5+(H-(X-1)/2)/((X-1)/2)*F,[_e,he,se]=Ts(Z,ie,o),ce=mr(b,B,C,_e,he,se,r,p,L,.5);ce!==null&&I.push(ce*(_e*T+he*M+se*V))}return I.length<3?null:(I.sort((H,Y)=>H-Y),I[I.length>>1])}function _u(o){return new Promise(r=>{const a=document.createElement("input");a.type="file",a.accept=o,a.style.display="none",a.onchange=()=>{var v;return r(((v=a.files)==null?void 0:v[0])??null)},document.body.appendChild(a),a.click(),setTimeout(()=>document.body.removeChild(a),1e3)})}function mu(o,r,a){const v=document.getElementById("ui-panel-container"),p=document.getElementById("load-button"),b=document.getElementById("quick-links");p&&(p.onclick=async()=>{const M=await _u(".ply,.bitymi");if(M)if(v&&(v.style.display="none"),M.name.toLowerCase().endsWith(".bitymi")){const V=await M.arrayBuffer(),{pcBuffer:F}=gr(V),G=new File([F],M.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),q=await Ps(G,o);r(q)}else{const V=await Ps(M,o);r(V)}}),b&&(b.innerHTML="");const B=new URLSearchParams(window.location.search),C=B.get("bundle")??B.get("model_url"),T=B.get("camera_url");C&&(v&&(v.style.display="none"),a(C,T))}async function vu(o,r,a){const{bundle:v}=await Fn(o,(B,C)=>a(`downloading B ... ${(B/1048576).toFixed(1)}${C?` / ${(C/1048576).toFixed(1)}`:""} MB`));if(!v)throw new Error("bundle_b must be a .bitymi bundle");a("parsing B ...");const p=await Ps(new File([v.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),r);let b=null;if(v.atlasBuffer){a("uploading B atlas ...");try{b=ur(r,Gn(v.atlasBuffer),!0)}catch(B){console.warn("[A/B] B atlas failed:",B)}}return{pc:p,atlas:b}}function ar(o){const r=new Uint32Array(o.surfel_data.buffer,o.surfel_data.byteOffset,o.num_points*8);for(let a=0;a<o.num_points;a++){const v=r[a*8+7];if(!(v>>>16&1)||(v>>>17&1)===1)return!0}return!1}async function bu(o,r,a,v){const p=new Cs(o,a),b=new oo(p);let B=!1;o.addEventListener("pointerdown",()=>{B=!0}),window.addEventListener("pointerup",()=>{B=!1});const C=typeof window<"u"&&window.parent!==window,T={pos:new Float32Array(3),rot:new Float32Array(16)};if(C){window.addEventListener("message",N=>{const J=N.data;if(!(!J||J.type!=="halloumi_sync_pose")&&!(!Array.isArray(J.position)||J.position.length!==3)&&!(!Array.isArray(J.rotation)||J.rotation.length!==16)){for(let j=0;j<3;j++)p.position[j]=J.position[j];for(let j=0;j<16;j++)p.rotation[j]=J.rotation[j];p.update_buffer(),b.resetToCamera();for(let j=0;j<3;j++)T.pos[j]=p.position[j];for(let j=0;j<16;j++)T.rot[j]=p.rotation[j]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const M=()=>{if(!C)return;const N=p.position,J=p.rotation;let j=!1;for(let pe=0;pe<3;pe++)if(Math.abs(N[pe]-T.pos[pe])>1e-6){j=!0;break}if(!j){for(let pe=0;pe<16;pe++)if(Math.abs(J[pe]-T.rot[pe])>1e-6){j=!0;break}}if(j){for(let pe=0;pe<3;pe++)T.pos[pe]=N[pe];for(let pe=0;pe<16;pe++)T.rot[pe]=J[pe];try{window.parent.postMessage({type:"halloumi_camera_state",position:[N[0],N[1],N[2]],rotation:Array.from(J)},"*")}catch{}}},V="rgba8unorm";r.configure({device:a,format:V,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let F=null,G=null,q=null;const oe=()=>{p.on_update_canvas(),F!==null&&dn(o.width,o.height,a,F.render_settings_buffer),G!==null&&G()};new ResizeObserver(()=>{const N=Math.max(.25,te.render_scale),J=Math.max(1,Math.ceil(N*o.clientWidth)),j=Math.max(1,Math.ceil(N*o.clientHeight));o.width===J&&o.height===j||(o.width=J,o.height=j,oe())}).observe(o);let I=0,X=0;const H=()=>{(o.width!==I||o.height!==X)&&(I=o.width,X=o.height,oe())},Y=new URLSearchParams(window.location.search);let ie=Y.get("animation")==="1";b.enabled=!ie;const _e=Y.get("camera_url"),he=Y.get("bfc"),se=he==="1"||he==="true",ce=Y.get("bfc_cos"),Te=ce!==null?Number(ce):NaN,de=Number.isFinite(Te)?Te:2,Ie=Math.max(1,window.devicePixelRatio||1),te={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:ie,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:se,bfc_cos:de,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:(N=>N==="bilinear"||N==="bicubic"||N==="hermite"?N:"off")(new URLSearchParams(location.search).get("up")),upscale_factor:(N=>N>0&&N<1?Math.max(2,Math.min(8,Math.round(1/N))):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1"))},ge=new so.Pane({title:"Config",expanded:!0});ge.addInput(te,"animate",{label:"Animate"}).on("change",N=>{const J=ie;ie=N.value,b.enabled=!N.value,!J&&ie&&Ee.value&&Ee.value.onAnimateStart(),J&&!ie&&Ee.value&&Ee.value.onAnimateStop()}),ge.addInput(te,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const Ee={value:null};mu(a,N=>we(N,[],null),async(N,J)=>{let j=J??_e,pe,ze=null;const ye=N.toLowerCase();if(ye.endsWith(".bitymi")||ye.includes(".bitymi?")){On("downloading bundle ...");try{const{bundle:z}=await Fn(N,(y,l,_)=>{const u=y/1048576,x=l?l/(1024*1024):void 0,k=_/(1024*1024),w=l?Math.min(99,Math.floor(y/l*100)):void 0,S=x?`total ${x.toFixed(1)} MB`:"total -- MB",i=x&&w!==void 0?`${u.toFixed(1)} MB downloaded (${w}%)`:`${u.toFixed(1)} MB downloaded`,g=`${k.toFixed(2)} MB/s`;Mt(`downloading bundle ...
${S}, ${i}
${g}`)});if(!z)throw new Error("Expected a .bitymi bundle");Mt("parsing PLY ...");const Q=new File([z.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(pe=await Ps(Q,a),!j&&z.camerasBuffer&&(j=URL.createObjectURL(new Blob([z.camerasBuffer],{type:"application/json"}))),z.atlasBuffer){const y=z.atlasBuffer.byteLength/1048576;Mt(`uploading atlas ...
${y.toFixed(1)} MB BC7`);try{const l=Gn(z.atlasBuffer);ze=ur(a,l,!0)}catch(l){console.warn("[atlas] failed to parse/upload atlas:",l)}}}catch(z){throw Ht(),z}}else pe=await xc(N,a);let Me=null,re="";const ve=Y.get("atlas2");if(ve)try{const{bundle:z}=await Fn(ve,(Q,y)=>{Mt(`downloading second atlas ...
${(Q/1048576).toFixed(1)}${y?` / ${(y/1048576).toFixed(1)}`:""} MB`)});if(!(z!=null&&z.atlasBuffer))throw new Error("second bundle has no atlas chunk");Mt("uploading second atlas ..."),Me=ur(a,Gn(z.atlasBuffer),!0),Me||(re="second atlas: format unsupported on this device")}catch(z){console.warn("[atlas2] failed:",z),re=`second atlas failed: ${z}`}const Re=j?await fr(j):[];Re.length>0&&p.set_preset(Re[0]),we(pe,Re,ze,Me,re)});function we(N,J=[],j=null,pe=null,ze=""){const ye=[(N.bbox.min[0]+N.bbox.max[0])/2,(N.bbox.min[1]+N.bbox.max[1])/2,(N.bbox.min[2]+N.bbox.max[2])/2];b.setBbox(N.bbox.min,N.bbox.max),.5*Math.sqrt((N.bbox.max[0]-N.bbox.min[0])**2+(N.bbox.max[1]-N.bbox.min[1])**2+(N.bbox.max[2]-N.bbox.min[2])**2);function Me(U,ee){const ue=vr(U,ee,o,p,N.surfel_data);ue&&(b.setOrbitPivot(ue),console.log(`[pick] orbit pivot → (${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)})`))}function re(){const U=ho(p,N.surfel_data);if(U!==null&&U>.001){b.setOrbitDepth(U);return}const ee=p.rotation,ue=ee[2],me=ee[6],Se=ee[10],be=(N.centroid[0]-p.position[0])*ue+(N.centroid[1]-p.position[1])*me+(N.centroid[2]-p.position[2])*Se;be>.001&&b.setOrbitDepth(be)}if(J.length===0){const U=N.bbox.max[0]-N.bbox.min[0],ee=N.bbox.max[1]-N.bbox.min[1],ue=N.bbox.max[2]-N.bbox.min[2],Se=.5*Math.sqrt(U*U+ee*ee+ue*ue)*.5;W.set(ye[0]-Se,ye[1]-Se,ye[2]-Se,p.position);const be=W.create(Se,Se,Se);W.normalize(be,be);const xe=W.create(0,1,0),Ae=W.create();W.cross(xe,be,Ae),W.normalize(Ae,Ae);const et=W.create();W.cross(be,Ae,et);const ut=kt.create(Ae[0],et[0],be[0],Ae[1],et[1],be[1],Ae[2],et[2],be[2]);vt.fromMat3(ut,p.rotation),p.update_buffer()}b.setCenter(W.create(N.centroid[0],N.centroid[1],N.centroid[2]));const ve=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),Re="halloumi.fetch_by_id";let z=null;try{const U=localStorage.getItem(Re);(U==="0"||U==="1")&&(z=U==="1")}catch{}const Q=Y.get("byid"),y={fetchById:Q!==null?Q==="1":z!==null?z:!ve,octBound:Y.get("oct")==="1",acc16:Y.get("acc16")==="1",staticSortKeys:null},l=Y.get("bsp");let _=null;l&&(y.staticSortKeys=new Float32Array(N.num_points),_=Zc(l).then(U=>{if(U.nSurfels!==N.num_points)throw new Error(`BSP has ${U.nSurfels} surfels, scene has ${N.num_points}`);return console.log(`[bsp] loaded ${l}: ${U.nNodes} nodes over ${U.nSurfels} surfels`),U}));let u=new ks(N,a,V,p.uniform_buffer,v,j,y);const x=Y.get("surfel_math");te.surfel_math=x==="raysplat"||x==="centred"?x:Y.get("raysplat")==="1"?"raysplat":"conic",te.hyp_legacy=Y.get("hyp_legacy")==="1",te.mip2d=Y.get("mip2d")==="1";{const U=parseFloat(Y.get("mip2d_k")??"");Number.isFinite(U)&&U>0&&(te.mip2d_k=U)}Gi(te.mip2d,te.mip2d_k,a,u.render_settings_buffer),ns({hypLegacy:te.hyp_legacy,raysplat:te.surfel_math==="raysplat",centred:te.surfel_math==="centred"},a,u.render_settings_buffer),te.legacy_renderer=Y.get("legacy")==="1",te.legacy_renderer&&u.setLegacyRenderer(!0),te.two_pass=Y.get("twopass")==="1";{const U=parseFloat(Y.get("opaque_t")??"");Number.isFinite(U)&&(te.opaque_thresh=Math.min(.99,Math.max(.01,U)))}u.setOpaqueThresh(te.opaque_thresh),te.two_pass&&u.setTwoPass(!0);{const U=Y.get("overdraw");(U==="shaded"||U==="raster"||U==="1")&&(te.overdraw=U==="raster"?"raster":"shaded");const ee=parseInt(Y.get("overdraw_max")??"",10);Number.isFinite(ee)&&ee>0&&(te.overdraw_max=ee)}u.setOverdrawMax(te.overdraw_max),te.overdraw!=="off"&&u.setOverdrawMode(te.overdraw==="raster"?2:1),te.fetch_by_id=y.fetchById,console.log(`[render_2dgs] fetch_by_id=${y.fetchById} (source: ${Q!==null?"?byid":z!==null?"remembered":`handheld=${ve}`})`),F=u,dn(o.width,o.height,a,u.render_settings_buffer),te.atlas_enabled=j!==null;{const U=N.surfel_data,ee=U.length/8;let ue=0,me=0,Se=0;for(let xe=0;xe<ee;xe++)ue+=U[xe*8],me+=U[xe*8+1],Se+=U[xe*8+2];const be=ee>0?[ue/ee,me/ee,Se/ee]:[0,0,0];u.setBfcParams(te.bfc_cos,be),ns({bfc:te.bfc},a,u.render_settings_buffer),console.log(`[bfc] flag=${te.bfc} cos=${te.bfc_cos} centroid=(${be[0].toFixed(3)}, ${be[1].toFixed(3)}, ${be[2].toFixed(3)})`)}let k=!1;const w=(()=>{if(j!==null)return`${j.meta.format===2?"BC7":j.meta.format===3?"ASTC 4×4":j.meta.format===7?"BC7 codebook gather (typeD)":`format=${j.meta.format}`} ${j.meta.width}×${j.meta.height}, ${j.meta.n_layers} layers`;const U=a.features.has("texture-compression-bc"),ee=a.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(U?["BC7"]:[]).concat(ee?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",w),Ii(N.sh_bias,a,u.render_settings_buffer),Li(te.gaussian_scaling,a,u.render_settings_buffer),te.sh_bias=N.sh_bias;let S=N.num_points.toLocaleString();const i={stats:`${S} surfels · -- fps`};ge.addMonitor(i,"stats",{label:"Stats",interval:200});const g=.4,h=3,f=.3;let c=null,m=0,E=0;const P=pt.create(),D=kt.create();let O=J.length>0?0:-1;const K={view:J.length>0?`${O+1} / ${J.length}: ${J[O].img_name??O}`:"— no presets —"},ae=document.createElement("span");function ne(U){const ee=kt.create(U[0],U[1],U[2],U[4],U[5],U[6],U[8],U[9],U[10]);return pt.fromMat(ee)}function le(U,ee){c={fromPos:W.clone(p.position),toPos:W.clone(U.position),fromQuat:pt.normalize(ne(p.rotation)),toQuat:pt.normalize(ne(U.rotation)),target:U,t:0,duration:Math.max(.01,ee)}}const Pe=(U,ee=!0)=>{if(J.length===0)return;O=(U%J.length+J.length)%J.length;const ue=J[O];ee?le(ue,g):(p.set_preset(ue),b.resetToCamera(),re()),K.view=`${O+1} / ${J.length}: ${J[O].img_name??O}`,ae.textContent=K.view};if(J.length>0){const U=ge.addSeparator(),ee=document.createElement("div");ee.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const ue=(Se,be,xe)=>{const Ae=document.createElement("button");return Ae.className="tp-btnv_b",Ae.textContent=Se,Ae.title=be,Ae.style.cssText="flex:0 0 34px;height:24px;padding:0;",Ae.addEventListener("click",xe),Ae};ae.textContent=K.view,ae.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",ee.appendChild(ue("◀","previous view (←)",()=>Pe(O-1))),ee.appendChild(ae),ee.appendChild(ue("▶","next view (→)",()=>Pe(O+1))),(ge.element.querySelector(".tp-rotv_c")??ge.element).insertBefore(ee,U.element),U.dispose()}const Be=J.length>0?co(J,{tiltDownDeg:15,alignFirst:!0}):null,ke=Be?hu(J,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let Ce=0;const Fe=12;Ee.value={onAnimateStart:()=>{Ce=0},onAnimateStop:()=>{b.resetToCamera(),re()}},ge.addInput(te,"render_scale",{label:"Render scale",min:.25,max:Ie,step:.25}).on("change",U=>{const ee=Math.max(.25,U.value),ue=Math.max(1,Math.ceil(ee*o.clientWidth)),me=Math.max(1,Math.ceil(ee*o.clientHeight));(o.width!==ue||o.height!==me)&&(o.width=ue,o.height=me,oe())}),ge.addInput(te,"upscale",{label:"Upscale",options:{off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite"}}).on("change",()=>{te.upscale==="off"&&oe()}),ge.addInput(te,"upscale_factor",{label:"Upscale factor",options:{"2x (render at 1/2)":2,"4x (render at 1/4)":4}});const Ge={res:""},Ze=()=>{const U=o.width*o.height/1e6;Ge.res=`${o.width}×${o.height}  (${U.toFixed(2)} MP)
CSS ${o.clientWidth}×${o.clientHeight} · DPR ${Ie.toFixed(2)} · native ${Math.round(o.clientWidth*Ie)}×${Math.round(o.clientHeight*Ie)}`};Ze(),G=Ze,ge.addMonitor(Ge,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),ge.addInput(te,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",U=>Li(U.value,a,u.render_settings_buffer)),ge.addInput(te,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",U=>Ii(U.value,a,u.render_settings_buffer)),ge.addInput(te,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",U=>{u.bgColor=[U.value.r,U.value.g,U.value.b,U.value.a]});const Xe=U=>U===null?"":U.meta.format===3||U.meta.format===8||U.meta.format===10?" (ASTC)":" (BC7)";let We=Xe(j);const Ke=ge.addInput(te,"atlas_enabled",{label:`Texture${We}`}).on("change",U=>{u.setAtlasEnabled(U.value),je()}),Oe=document.createElement("button");Oe.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const je=()=>{Oe.textContent=`Texture${We}: ${te.atlas_enabled?"ON":"OFF"}`,Oe.style.borderColor=te.atlas_enabled?"#f0b060":"#444",Oe.style.color=te.atlas_enabled?"#f0b060":"#bbb"},ct=()=>{te.atlas_enabled=!te.atlas_enabled,u.setAtlasEnabled(te.atlas_enabled),Ke.refresh(),je()};Oe.title="toggle the baked texture (T)",Oe.addEventListener("click",ct),j&&document.body.appendChild(Oe),je();const at=Y.get("bundle_b");let Qe=()=>{};if({}.VITE_MIP2D_UI==="1"&&(ar(N)||at)){const U=document.createElement("button");U.style.cssText=Oe.style.cssText.replace("top:8px","top:42px"),U.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let ee=null;const ue=()=>{U.textContent=`Mip 2D filter: ${te.mip2d?"ON":"OFF"}`,U.style.borderColor=te.mip2d?"#f0b060":"#444",U.style.color=te.mip2d?"#f0b060":"#bbb";try{const Se=new URL(window.location.href);te.mip2d?Se.searchParams.set("mip2d","1"):Se.searchParams.delete("mip2d"),history.replaceState(history.state,"",Se.toString())}catch{}},me=()=>{Gi(te.mip2d,te.mip2d_k,a,u.render_settings_buffer),ee==null||ee.refresh(),ue()};U.addEventListener("click",()=>{te.mip2d=!te.mip2d,me()}),ee=ge.addInput(te,"mip2d",{label:"Mip 2D filter"}).on("change",()=>me()),document.body.appendChild(U),ue(),Qe=()=>{const Se=ar(N);U.style.display=Se?"":"none",ee&&(ee.hidden=!Se)},Qe(),window.__halloumiMip2D={get on(){return te.mip2d},toggle:()=>U.click()}}let tt=()=>{};if(at){const U=Y.get("label_a")??"A",ee=Y.get("label_b")??"B",ue={a:{pc:N,atlas:j,renderer:u},b:null};let me="a",Se=null;const be=document.createElement("button");be.style.cssText=Oe.style.cssText.replace("top:8px","top:76px"),be.title=`switch between the two bakes of this scene (B key): ${U} / ${ee}`;const xe=(Ue="")=>{be.textContent=Ue||`Scene: ${me==="a"?U:ee}  ⇄`,be.style.borderColor=me==="b"?"#60b0f0":"#f0b060",be.style.color=me==="b"?"#60b0f0":"#f0b060";try{const He=new URL(window.location.href);me==="b"?He.searchParams.set("side","b"):He.searchParams.delete("side"),history.replaceState(history.state,"",He.toString())}catch{}},Ae=()=>ue.b?Promise.resolve(ue.b):(Se||(Se=vu(at,a,Ue=>{me==="a"&&xe(Ue)}).then(Ue=>(ue.b={pc:Ue.pc,atlas:Ue.atlas,renderer:null},xe(),ue.b))),Se),et=Ue=>{const He=jt.slice(0);Ue.renderer=new ks(Ue.pc,a,V,p.uniform_buffer,v,Ue.atlas,Ue===ue.a?y:{...y,staticSortKeys:null}),new Uint8Array(jt).set(new Uint8Array(He))},ut=Ue=>{const He=ue[Ue];He.renderer||et(He);const Rt=u,qe=He.renderer;qe.bgColor=[...Rt.bgColor],qe.setAtlasEnabled(te.atlas_enabled&&He.atlas!==null),qe.setLegacyRenderer(te.legacy_renderer),qe.setOpaqueThresh(te.opaque_thresh),qe.setTwoPass(te.two_pass),qe.setOverdrawMax(te.overdraw_max),qe.setOverdrawMode(te.overdraw==="off"?0:te.overdraw==="raster"?2:1),qe.setMsaa(te.msaa),qe.setFetchById(te.fetch_by_id);{const Tt=He.pc.surfel_data,mt=Tt.length/8;let zt=0,Ft=0,Bn=0;for(let Ot=0;Ot<mt;Ot++)zt+=Tt[Ot*8],Ft+=Tt[Ot*8+1],Bn+=Tt[Ot*8+2];qe.setBfcParams(te.bfc_cos,mt>0?[zt/mt,Ft/mt,Bn/mt]:[0,0,0])}Gc(He.pc.feature_mode,void 0,void 0,!1),Ic(He.pc.K,void 0,void 0,!1),dn(o.width,o.height,void 0,void 0,!1),wr(a,qe.render_settings_buffer),u=qe,F=qe,N=He.pc,j=He.atlas,S=N.num_points.toLocaleString(),me=Ue,Qe(),xe(),console.log(`[A/B] active = ${Ue} (${Ue==="a"?U:ee}): ${N.num_points} surfels, feature_mode ${N.feature_mode}, EWA rows ${ar(N)}`)};tt=()=>{if(me==="a"){if(ue.b){ut("b");return}On(`loading ${ee} ...`),Ae().then(()=>{ut("b"),Ht()}).catch(Ue=>{Ht(),console.error("[A/B] B failed:",Ue),xe(`B failed: ${(Ue==null?void 0:Ue.message)??Ue}`)})}else ut("a")},be.addEventListener("click",()=>tt()),document.body.appendChild(be),xe(),Y.get("side")==="b"?tt():ve||setTimeout(()=>{Ae().then(Ue=>{Ue.renderer||et(Ue)}).catch(Ue=>console.warn("[A/B] preload failed:",Ue))},1500),window.__halloumiAB={get side(){return me},toggle:()=>tt(),get bReady(){var Ue;return!!((Ue=ue.b)!=null&&Ue.renderer)}}}if(j&&(pe||ze))if(pe){const U={};U[`A${Xe(j)} · bundle`]="A",U[`B${Xe(pe)} · atlas2`]="B";const ee={atlas:"A"};ge.addInput(ee,"atlas",{label:"Atlas source",options:U}).on("change",ue=>{const me=ue.value==="B"?pe:j;u.setAtlas(me),We=Xe(me),Ke.label=`Texture${We}`,je(),console.log(`[atlas2] now sampling ${ue.value}${We}`)})}else{const U={note:ze};ge.addMonitor(U,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const st=j!==null&&(j.meta.probe_mode|0)>0;if(u.hasMips&&st)u.setMipMode(te.mips),ge.addInput(te,"mips",{label:"Mips (trilinear)"}).on("change",U=>u.setMipMode(U.value));else if(u.hasMips){const U=Y.get("mipbias"),ee={mode:U==="0"||U==="1"||U==="2"?U:"off"},ue=me=>{me==="off"?u.setMipMode(!1):(u.setMipLodBias(Number(me)),u.setMipMode(!0)),console.log(`[mips] ${me==="off"?"off (level 0 only)":`on, bias ${me}`}`)};ue(ee.mode),ge.addInput(ee,"mode",{label:"Atlas mips",options:{"off (level 0)":"off","bias 0 (full)":"0","bias 1":"1","bias 2":"2"}}).on("change",me=>ue(me.value))}const Ve=ge.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});_&&_.then(U=>{const ee=u,ue=new Float32Array(U.nSurfels),me={cpu:"--"};let Se=null;ee.preFrame=()=>{u===ee&&(te.bsp_order?(Se!==!0&&U.invalidate(),U.computeKeys(p.position)&&(ee.writeSortKeys(U.keys),me.cpu=`${U.lastMs.toFixed(2)} ms / ${U.nNodes} nodes`)):Se!==!1&&ee.writeSortKeys(ue),Se=te.bsp_order)},Ve.addInput(te,"bsp_order",{label:"BSP order (vs depth sort)"}),Ve.addMonitor(me,"cpu",{label:"BSP traversal",interval:500})}).catch(U=>console.error("[bsp] disabled:",U)),Ve.addInput(te,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",U=>ns({raysplat:U.value==="raysplat",centred:U.value==="centred"},a,u.render_settings_buffer));const rt=globalThis.__gpuAdapterInfo??{},it={s:`${rt.vendor??"?"} / ${rt.architecture??"?"}
${rt.device||rt.description||"?"}`};Ve.addMonitor(it,"s",{label:"GPU",multiline:!0,lineCount:2}),Ve.addInput(te,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",U=>ns({hypLegacy:U.value},a,u.render_settings_buffer)),Ve.addInput(te,"two_pass",{label:"Two-pass (layer)"}).on("change",U=>u.setTwoPass(U.value)),Ve.addInput(te,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",U=>u.setOpaqueThresh(U.value)),Ve.addInput(te,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",U=>u.setOverdrawMode(U.value==="shaded"?1:U.value==="raster"?2:0)),Ve.addInput(te,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",U=>u.setOverdrawMax(U.value));const ht={s:"—"};Ve.addMonitor(ht,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(u.overdrawModeValue===0){ht.s="—";return}u.readOverdrawStats().then(U=>{U&&(ht.s=`mean ${U.mean.toFixed(1)} frag/px · ${U.meanCovered.toFixed(1)} on covered
max ${U.max} · covered ${(U.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(U=>console.warn("[overdraw] readback failed:",U))},500),ge.addInput(te,"legacy_renderer",{label:"Legacy renderer"}).on("change",U=>u.setLegacyRenderer(U.value)),ge.addInput(te,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",U=>{u.setFetchById(U.value);try{localStorage.setItem("halloumi.fetch_by_id",U.value?"1":"0")}catch{}}),ge.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>_r("webgl")),te.msaa=Y.get("msaa")==="1",te.msaa&&u.setMsaa(!0),ge.addInput(te,"msaa",{label:"MSAA 4×"}).on("change",U=>u.setMsaa(U.value));const nt={aspect:"canvas"},Pt=ge.addFolder({title:"📸 Screenshot",expanded:!1});Pt.addInput(nt,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const lt={s:"pick a size to capture"};Pt.addMonitor(lt,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const bt=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let St=null;function Vt(U){let ee;if(nt.aspect==="canvas")ee=o.width/o.height;else{const[xe,Ae]=nt.aspect.split(":").map(Number);ee=xe/Ae}const ue=a.limits.maxTextureDimension2D;let me,Se;if(U==="canvas"&&nt.aspect==="canvas")me=o.width,Se=o.height;else{const xe=U==="canvas"?Math.max(o.width,o.height):U;ee>=1?(me=xe,Se=Math.round(xe/ee)):(Se=xe,me=Math.round(xe*ee))}const be=Math.min(1,ue/Math.max(me,Se));return me=Math.max(2,Math.round(me*be)&-2),Se=Math.max(2,Math.round(Se*be)&-2),[me,Se]}function Dt(U,ee){const ue=URL.createObjectURL(U),me=document.createElement("a");me.href=ue,me.download=ee,document.body.appendChild(me),me.click(),me.remove(),setTimeout(()=>URL.revokeObjectURL(ue),1e4)}async function Nt(U,ee){var xe;const ue=(U.size/1048576).toFixed(1),me=window;if(typeof me.showSaveFilePicker=="function")try{const Ae=await me.showSaveFilePicker({suggestedName:ee,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),et=await Ae.createWritable();return await et.write(U),await et.close(),`saved ${Ae.name??ee} (${ue} MB) where you chose`}catch(Ae){if((Ae==null?void 0:Ae.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const Se=new File([U],ee,{type:"image/png"}),be=navigator;if(be.share&&((xe=be.canShare)!=null&&xe.call(be,{files:[Se]})))try{return await be.share({files:[Se],title:ee}),`shared ${ee} (${ue} MB) via share sheet`}catch(Ae){if((Ae==null?void 0:Ae.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return Dt(U,ee),`downloaded ${ee} (${ue} MB) to your browser's Downloads folder`}async function $t(U){if(k)return;const[ee,ue]=Vt(U);lt.s=`rendering ${ee}×${ue}…`;const me=o.width,Se=o.height;p.setRenderSize(ee,ue),dn(ee,ue,a,u.render_settings_buffer);const be=a.createTexture({size:[ee,ue,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),xe=Math.ceil(ee*4/256)*256,Ae=a.createBuffer({size:xe*ue,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),et=a.createCommandEncoder({label:"screenshot"});u.frame(et,be.createView(),!1),et.copyTextureToBuffer({texture:be},{buffer:Ae,bytesPerRow:xe,rowsPerImage:ue},[ee,ue,1]),a.queue.submit([et.finish()]),p.clearRenderSize(),dn(me,Se,a,u.render_settings_buffer);try{await Ae.mapAsync(GPUMapMode.READ);const ut=new Uint8Array(Ae.getMappedRange()),ft=new Uint8ClampedArray(ee*ue*4);for(let mt=0;mt<ue;mt++)ft.set(ut.subarray(mt*xe,mt*xe+ee*4),mt*ee*4);for(let mt=3;mt<ft.length;mt+=4)ft[mt]=255;Ae.unmap();const Ue=document.createElement("canvas");Ue.width=ee,Ue.height=ue,Ue.getContext("2d").putImageData(new ImageData(ft,ee,ue),0,0);const He=await new Promise((mt,zt)=>Ue.toBlob(Ft=>Ft?mt(Ft):zt(new Error("toBlob failed")),"image/png")),Rt=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),qe=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),Tt=`${Rt}_${ee}x${ue}_${qe}.png`;St={blob:He,name:Tt},lt.s=await Nt(He,Tt)}catch(ut){console.error("[screenshot]",ut),lt.s=`failed: ${ut}`}finally{Ae.destroy(),be.destroy()}}{const U=document.createElement("div");U.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const ee=(me,Se,be)=>{const xe=document.createElement("button");xe.className="tp-btnv_b",xe.textContent=me,xe.title=Se,xe.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",xe.addEventListener("click",be),U.appendChild(xe)};ee("Canvas","current canvas size",()=>{$t("canvas")});for(const[me,Se]of bt)ee(me,`${Se} px long edge`,()=>{$t(Se)});(Pt.element.querySelector(".tp-fldv_c")??Pt.element).appendChild(U)}Pt.addButton({title:"⬇ Download last"}).on("click",()=>{if(!St){lt.s="nothing captured yet";return}Dt(St.blob,St.name),lt.s=`downloaded ${St.name} to your browser's Downloads folder`}),ge.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(J.length>0)p.set_preset(J[0]);else{const U=N.bbox.max[0]-N.bbox.min[0],ee=N.bbox.max[1]-N.bbox.min[1],ue=N.bbox.max[2]-N.bbox.min[2],Se=.5*Math.sqrt(U*U+ee*ee+ue*ue)*.5;W.set(ye[0]-Se,ye[1]-Se,ye[2]-Se,p.position);const be=W.create(Se,Se,Se);W.normalize(be,be);const xe=W.create();W.cross(W.create(0,1,0),be,xe),W.normalize(xe,xe);const Ae=W.create();W.cross(be,xe,Ae);const et=kt.create(xe[0],Ae[0],be[0],xe[1],Ae[1],be[1],xe[2],Ae[2],be[2]);vt.fromMat3(et,p.rotation),p.update_buffer()}b.resetToCamera(),re()});const Ct={result:"— click Benchmark —"},Gt=ge.addMonitor(Ct,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Gt.hidden=!0;const qt={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))}};function ot(){const ee=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const ue of Object.keys(qt))if(ee.startsWith(ue))return ue;return null}const Ut=document.createElement("div");Ut.id="bench-overlay",Ut.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(Ut);function pn(U,ee,ue){const me=Math.floor(ee/Math.max(1,ue)*100),Se=32,be=Math.floor(ee/Math.max(1,ue)*Se),xe="█".repeat(be)+"░".repeat(Se-be);Ut.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${U}</div><div>[${xe}] ${me}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${ee} / ${ue} frames · offscreen · pipelined · no vsync</div>`,Ut.style.display="block"}function hn(){Ut.style.display="none"}async function Cn(U=10,ee=200){if(k)return;if(J.length===0){Ct.result="no cameras to benchmark";return}k=!0;const ue=ie,me=te.animate,Se=new Float32Array(p.position),be=new Float32Array(p.rotation);ie=!1,te.animate=!1,ge.refresh(),c=null,b.enabled=!1;const xe=ot(),Ae=xe?qt[xe]:null,et=(Ae==null?void 0:Ae.w)??o.width,ut=(Ae==null?void 0:Ae.h)??o.height,ft=(Ae==null?void 0:Ae.fovY)??p.getFov(),Ue=xe?`${xe} · ${et>=4e3/4+500?"images_4":"images_2"}`:"custom",He=o.width,Rt=o.height,qe=p.getFov();o.width=et,o.height=ut,p.setFov(ft),dn(et,ut,a,u.render_settings_buffer);const Tt=a.createTexture({size:[et,ut,1],format:V,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),mt=Tt.createView(),zt=()=>{const Et=a.createCommandEncoder();u.frame(Et,mt,!1),a.queue.submit([Et.finish()])},Ft=()=>new Promise(Et=>setTimeout(Et,0)),Bn=20,Ot=async(Et,fn)=>{let Yt=0,Zt=0;for(pn(fn,0,Et),await Ft();Zt<Et;){const _n=Math.min(Bn,Et-Zt),mn=performance.now();for(let Wn=0;Wn<_n;Wn++)p.set_preset(J[(Zt+Wn)%J.length]),zt();await a.queue.onSubmittedWorkDone();const Us=performance.now();Yt+=Us-mn,Zt+=_n,pn(fn,Zt,Et),await Ft()}return Yt};try{await Ot(U,"Warming up");const fn=await Ot(ee,"Benchmarking")/ee,Yt=1e3/fn,Zt=N.num_points??N.surfel_data.length/8,_n=(ft*180/Math.PI).toFixed(1),mn=`${Yt.toFixed(1)} FPS  (${fn.toFixed(2)} ms/frame)
${et}×${ut} · fovY ${_n}° · ${Ue}
${Zt.toLocaleString()} surfels · ${U}w+${ee}b · pipelined`+(u.hasMips?` · ${u._mipMode?`mips bias ${u.mipLodBias}`:"mips off"}`:"");Ct.result=mn,Gt.hidden=!1,console.log("[bench]",mn.replace(/\n/g,"  |  "))}catch(Et){console.error("[bench] failed:",Et),Ct.result=`bench failed: ${Et}`,Gt.hidden=!1}finally{hn(),Tt.destroy(),o.width=He,o.height=Rt,p.setFov(qe),dn(He,Rt,a,u.render_settings_buffer),p.position.set(Se),p.rotation.set(be),p.update_buffer(),b.enabled=!ue,ie=ue,te.animate=me,ge.refresh(),k=!1}}ge.addButton({title:"📊 Benchmark"}).on("click",()=>Cn());const Wt=Math.PI/2,_t=new Set,as=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Ms=U=>{const ee=U.target;return!!ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.isContentEditable)},ls=()=>_t.has("ShiftLeft")||_t.has("ShiftRight");document.addEventListener("keyup",U=>{_t.delete(U.code)}),window.addEventListener("blur",()=>_t.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&_t.clear()});const Rs=U=>{if(_t.size===0||te.animate)return;const ee=ls()?3:1;let ue=0;_t.has("KeyX")&&(ue+=1),_t.has("KeyZ")&&(ue-=1),ue!==0&&(b.addRoll(ue*Wt*ee*U),c=null);const me=p.rotation,Se=[me[0],me[4],me[8]],be=[me[1],me[5],me[9]],xe=[me[2],me[6],me[10]],Ae=b.center,ut=(b.sceneRadius??Math.max(.05,W.distance(p.position,Ae)))*.5*ee*U;let ft=0,Ue=0,He=0;if(_t.has("KeyW")&&(He+=1),_t.has("KeyS")&&(He-=1),_t.has("KeyD")&&(ft+=1),_t.has("KeyA")&&(ft-=1),_t.has("KeyE")&&(Ue+=1),_t.has("KeyQ")&&(Ue-=1),!ft&&!Ue&&!He)return;const Rt=[0,0,0];for(let qe=0;qe<3;qe++)Rt[qe]=(Se[qe]*ft+be[qe]*Ue+xe[qe]*He)*ut;for(let qe=0;qe<3;qe++)p.position[qe]+=Rt[qe],Ae[qe]+=Rt[qe];p.update_buffer(),c=null};document.addEventListener("keydown",U=>{if(Ms(U))return;const ee=U.key,ue=ee.toLowerCase();if(U.ctrlKey||U.metaKey||U.altKey){_t.clear();return}if(as.includes(U.code)&&!(U.shiftKey&&U.code==="KeyD")){_t.add(U.code),U.preventDefault();return}if(ue==="t"){ct();return}if(ue==="b"){tt();return}if(ee>="0"&&ee<="9"&&J.length>0){const me=parseInt(ee);me<J.length&&Pe(me)}else ee==="ArrowLeft"||ee==="PageUp"?(Pe(O-1),U.preventDefault()):ee==="ArrowRight"||ee==="PageDown"?(Pe(O+1),U.preventDefault()):U.shiftKey&&ue==="d"&&u.debugReadSortedIndices(30).catch(me=>console.error("[DEBUG] readback failed:",me))});function nn(U,ee){const ue=o.getBoundingClientRect(),me=window.devicePixelRatio||1;return[(U-ue.left)*me,(ee-ue.top)*me]}o.addEventListener("dblclick",U=>{const[ee,ue]=nn(U.clientX,U.clientY);Me(ee,ue)});let Vn=0,cs=0,Nn=0;o.addEventListener("pointerdown",U=>{if(U.pointerType!=="touch")return;const ee=performance.now(),ue=ee-Vn,me=U.clientX-cs,Se=U.clientY-Nn;if(ue>0&&ue<300&&me*me+Se*Se<40*40){const[be,xe]=nn(U.clientX,U.clientY);Me(be,xe),Vn=0}else Vn=ee,cs=U.clientX,Nn=U.clientY});function $n(){return B}let qn=performance.now(),Tn=60,us=Promise.resolve(),Kt=0,Ds=0;function sn(){ds().catch(U=>{Ds++<5&&console.error("[frame] exception (render loop kept alive):",U),requestAnimationFrame(sn)})}async function ds(){var Se;const U=performance.now(),ee=Math.min((U-qn)/1e3,.1);if(qn=U,ee>0){const be=((Se=u.lastStageBreakdownMs)==null?void 0:Se.total)??0,xe=be>.5?1e3/be:1/ee;Tn=Tn*.9+xe*.1,i.stats=`${S} surfels · ${Math.round(Tn)} fps`}if(k){requestAnimationFrame(sn);return}if($n()&&(c||ie)&&(c=null,b.resetToCamera(),re(),ie&&(ie=!1,te.animate=!1,ge.refresh())),ie&&te.animateMode==="circle"&&Be){Ce+=ee/Fe,Ce>=1&&(Ce-=1);const be=uo(Be,Ce);p.set_preset(be),b.update(ee);const xe=a.createCommandEncoder();u.frame(xe,r.getCurrentTexture().createView()),a.queue.submit([xe.finish()]),Kt++,Kt===2&&Ht(),requestAnimationFrame(sn);return}if(c){c.t+=ee/c.duration;const be=Math.min(1,c.t),xe=be*be*(3-2*be);W.lerp(c.fromPos,c.toPos,xe,p.position),pt.slerp(c.fromQuat,c.toQuat,xe,P),kt.fromQuat(P,D),vt.fromMat3(D,p.rotation),p.update_buffer(),c.t>=1&&(p.set_preset(c.target),c=null,ie?J.length>0&&(m=f):(b.resetToCamera(),re()))}else if(ie&&!$n()){const be=te.animateMode==="circle"&&ke.length>0,xe=be?ke:J;if(xe.length!==0){if(m-=ee,m<=0){const et=((be?E:O)+1)%xe.length;be?E=et:O=et;const ut=be?h/8:h;le(xe[et],ut),be||(K.view=`${O+1} / ${J.length}: ${J[O].img_name??O}`)}}}Rs(ee),b.update(ee),M(),H(),await us;const ue=a.createCommandEncoder(),me=r.getCurrentTexture().createView();if(te.upscale!=="off"){const be=te.upscale_factor;(!q||q.mode!==te.upscale||q.scale!==1/be)&&(q==null||q.destroy(),q=new ru(a,V,te.upscale,1/be));const xe=q.lowTarget(o.width,o.height);dn(xe.w,xe.h,a,u.render_settings_buffer),u.frame(ue,xe.view),q.pass(ue,me,o.width,o.height)}else u.frame(ue,me);a.queue.submit([ue.finish()]),us=a.queue.onSubmittedWorkDone(),Kt++,Kt===2&&Ht(),requestAnimationFrame(sn)}requestAnimationFrame(sn)}}const gu=o=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
flat in vec4 v_tu_op; flat in vec4 v_tv_sh; flat in vec4 v_tw_ly; flat in vec4 v_col_dc;
flat in vec2 v_ctr; flat in vec4 v_uv; flat in vec2 v_dp;
uniform vec2 u_vp;
uniform sampler2DArray u_atlas;
uniform int u_atlas_on;
uniform vec4 u_tex;          // atlas_scale, atlas_offset, res_bias, uv_extent
uniform vec2 u_dims;         // atlas slice width, layer height
uniform int u_dbg;           // 0 normal; see the debug outputs below
out vec4 o;
void main() {
    const float FILTER_INV_SQUARE = 2.0;
    const float K_BETA_SQ = 9.0;
    vec2 pixf = floor(vec2(gl_FragCoord.x, u_vp.y - gl_FragCoord.y));   // top-left origin
    float u0 = v_tu_op.x, v0 = v_tu_op.y, J00 = v_tu_op.z;
    float J01 = v_tv_sh.x, J10 = v_tv_sh.y, J11 = v_tv_sh.z;
    vec2 d = pixf - v_ctr;
    float denom = 1.0 + v_tw_ly.x * d.x + v_tw_ly.y * d.y;
    if (denom < 0.1) discard;
    float inv_d = 1.0 / denom;
    vec2 s = vec2(u0 + (J00 * d.x + J01 * d.y) * inv_d, v0 + (J10 * d.x + J11 * d.y) * inv_d);
    float rho3d = dot(s, s);
    vec2 d_pix = v_ctr - pixf;
    float rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    float depth = rho3d <= rho2d ? dot(vec3(v_dp, v_col_dc.w), vec3(s, 1.0)) : v_col_dc.w;
    if (depth < 0.2) discard;
    float ab;
${o?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
    float base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
    float sh = v_tv_sh.w;
    if (sh >= 1.99 && sh <= 2.01) ab = base * base;
    else if (sh >= 0.99 && sh <= 1.01) ab = base;
    else if (sh >= 0.49 && sh <= 0.51) ab = sqrt(base);
    else if (sh >= 3.99 && sh <= 4.01) { float b2 = base * base; ab = b2 * b2; }
    else ab = pow(base, sh);`:"    ab = exp(-rho3d * 0.5);"}
    float alp = exp(-rho2d * 0.5);
    float b = min(0.99, v_tu_op.w * max(ab, alp));
    if (b < 1.0 / 255.0) discard;
    vec3 color = v_col_dc.rgb;
    // Skip-texture surfels carry a zero-area rect (uv_scale == 0) whose slice id points one past
    // the last layer: no residual, SV only — the CUDA bake-render semantics. Sampling it instead
    // reads texel (0,0) of whatever layer the index clamps to (a +0.3 brightness bug, found
    // 2026-10-13 via the re-shard A/B).
    if (u_atlas_on != 0 && v_uv.z != 0.0 && v_uv.w != 0.0) {
        vec2 hw = max(abs(v_uv.zw) * u_tex.w - 0.5 / u_dims, vec2(0.0));
        vec2 uv = clamp(v_uv.xy + s * v_uv.zw, v_uv.xy - hw, v_uv.xy + hw);
        vec4 t = textureLod(u_atlas, vec3(uv, v_tw_ly.w), 0.0);
        // debug (u_dbg): 1 = fetched texel rgb only, 2 = sample offset from the tile centre in texels/256 + layer/16
        if (u_dbg == 1) { o = vec4(t.rgb, 1.0); return; }
        if (u_dbg == 2) { o = vec4((uv - v_uv.xy) * u_dims / 256.0 + 0.5, v_tw_ly.w / 16.0, 1.0); return; }
        color = color + t.rgb * u_tex.x + vec3(u_tex.y);
    }
    color = max(vec3(0.0), color + vec3(u_tex.z));
    o = vec4(color, 1.0) * b;
}`;function fo(o){return{bc7:!!o.getExtension("EXT_texture_compression_bptc"),astc:!!o.getExtension("WEBGL_compressed_texture_astc")}}function wu(o,r){const a=fo(o),v=r.format===2||r.format===7,p=r.format===3||r.format===8;let b=0;v&&a.bc7?b=36492:p&&a.astc&&(b=37808);const B=j=>(console.warn("[gl]",j),{tex:null,status:j,slice_width:r.slice_width,layer_h:r.layer_h,n_slices:0,rects:r.rects_expanded});if(!b)return B(`atlas is ${v?"BC7":p?"ASTC":`format ${r.format}`}; this GPU has bc7=${a.bc7} astc=${a.astc}`);let C=o.getParameter(o.MAX_TEXTURE_SIZE);try{const j=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);j>=256&&(C=Math.min(C,j-j%4))}catch{}const T=o.getParameter(o.MAX_ARRAY_TEXTURE_LAYERS),{width:M,n_layers:V,n_cols:F,layer_cuts:G,column_cuts:q,atlas_bytes:oe}=r,L=M/4*16,I=r.rects_expanded,X=I.length/5,H=[];let Y=0,Z=0,ie=0,_e=!1;const he=Array.from({length:F*V},()=>[]);let se=0,ce=0;for(let j=0;j<X;j++){const pe=I[j*5+4]|0,ze=I[j*5+2],ye=I[j*5+3];pe>=0&&pe<he.length&&ze>0&&(he[pe].push(j),se=Math.max(se,ze),ce=Math.max(ce,ye))}se=Math.ceil(se/4)*4,ce=Math.ceil(ce/4)*4;const Te=(j,pe)=>{if(j<=C)return[0,j];const ze=C-pe;if(ze<64)throw new Error(`atlas re-shard: tiles up to ${pe} px do not fit MAX_TEXTURE_SIZE ${C}`);const ye=Math.ceil(j/ze),Me=[0];for(let re=1;re<ye;re++)Me.push(Math.round(j*re/ye/4)*4);return Me.push(j),Me},de=(j,pe,ze,ye)=>Math.min(j[pe+1]-j[pe]+ze,ye-j[pe]);try{for(let j=0;j<F;j++)for(let pe=0;pe<V;pe++){const ze=q[j+1]-q[j],ye=G[pe+1]-G[pe],Me=Te(ze,se),re=Te(ye,ce);(Me.length>2||re.length>2)&&(_e=!0);for(let ve=0;ve<Me.length-1;ve++)Z=Math.max(Z,de(Me,ve,se,ze));for(let ve=0;ve<re.length-1;ve++)ie=Math.max(ie,de(re,ve,ce,ye));H.push({c:j,l:pe,xcuts:Me,ycuts:re,base:Y}),Y+=(Me.length-1)*(re.length-1)}}catch(j){return B(String(j))}if(Z=Math.ceil(Z/4)*4,ie=Math.ceil(ie/4)*4,Y>T)return B(`atlas needs ${Y} array layers, GPU allows ${T}`);const Ie=Z/4*16,te=Ie*(ie/4);let ge;try{ge=new Uint8Array(te*Y)}catch(j){return B(`atlas staging buffer ${(te*Y/2**20).toFixed(0)} MB failed: ${j}`)}let Ee=I;_e&&(Ee=new Float32Array(I));for(const j of H){const pe=j.xcuts.length-1,ze=j.ycuts.length-1,ye=q[j.c+1]-q[j.c],Me=G[j.l+1]-G[j.l];for(let re=0;re<ze;re++)for(let ve=0;ve<pe;ve++){const Re=j.base+re*pe+ve,z=q[j.c]+j.xcuts[ve],Q=de(j.xcuts,ve,se,ye),y=G[j.l]+j.ycuts[re],l=de(j.ycuts,re,ce,Me),_=Re*te,u=z/4,x=Q/4;for(let k=0;k<l/4;k++){const w=(y/4+k)*L+u*16;ge.set(oe.subarray(w,w+x*16),_+k*Ie)}}if(_e)for(const re of he[j.c*V+j.l]){const ve=I[re*5],Re=I[re*5+1];let z=0;for(;z<pe-1&&ve>=j.xcuts[z+1];)z++;let Q=0;for(;Q<ze-1&&Re>=j.ycuts[Q+1];)Q++;Ee[re*5]=ve-j.xcuts[z],Ee[re*5+1]=Re-j.ycuts[Q],Ee[re*5+4]=j.base+Q*pe+z}}const we=o.createTexture();o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D_ARRAY,we),o.compressedTexImage3D(o.TEXTURE_2D_ARRAY,0,b,Z,ie,Y,0,ge),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D_ARRAY,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);const N=o.getError();if(N!==o.NO_ERROR){o.deleteTexture(we);const j=N===o.OUT_OF_MEMORY?"OUT_OF_MEMORY":N===o.INVALID_VALUE?"INVALID_VALUE":`0x${N.toString(16)}`;return B(`atlas upload failed: GL ${j} (${Z}x${ie}x${Y} ${b===36492?"BC7":"ASTC"}, ${(te*Y/2**20).toFixed(0)} MB, max tex ${C})`)}const J=`${b===36492?"BC7":"ASTC"} atlas ${Z}x${ie}x${Y}${_e?` (re-sharded for max tex ${C})`:""}`;return{tex:we,status:J,slice_width:Z,layer_h:ie,n_slices:Y,rects:Ee}}const Vi=28,rs=8,xu=o=>`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler2D;
layout(location=0) in uint a_id;          // surfel id, in sorted (back-to-front) order
uniform usampler2D u_surf;                // 2 texels / surfel: (x y z opa|shape) (sx|sy qw|qx qy|qz aux)
uniform sampler2D  u_sv;                  // 2K texels / surfel: K × (site.xyz, log tau), K × (rgb, 0)
uniform sampler2D  u_uv;                  // 2 texels / surfel: (uv_base.xy uv_scale.xy) (layer 0 0 0)
uniform mat3  u_R;                        // world -> camera rotation
uniform vec3  u_t;                        // camera-space translation (-R·eye)
uniform vec3  u_eye;
uniform vec2  u_vp;                       // drawing-buffer size
uniform float u_focal;                    // pixels (= 0.5 H / tan(fovY/2))
uniform float u_zfar;
uniform float u_scaling;                  // gaussian_scaling
uniform float u_sh_bias;
uniform int   u_K;
out vec4 v_tu_op; out vec4 v_tv_sh; out vec4 v_tw_ly; out vec4 v_col_dc;
out vec4 v_ctr_ext; out vec4 v_uv; out vec4 v_dp;

ivec2 tc(int l) { return ivec2(l & ${(1<<o)-1}, l >> ${o}); }
void cull() {
    v_tu_op = vec4(0.0); v_tv_sh = vec4(0.0); v_tw_ly = vec4(0.0); v_col_dc = vec4(0.0);
    v_ctr_ext = vec4(0.0); v_uv = vec4(0.0); v_dp = vec4(0.0);
}
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    int i = int(a_id);
    uvec4 s0 = texelFetch(u_surf, tc(i * 2), 0);
    uvec4 s1 = texelFetch(u_surf, tc(i * 2 + 1), 0);
    vec3 p = uintBitsToFloat(s0.xyz);
    vec2 os = unpackHalf2x16(s0.w);
    float opacity = os.x, shape = os.y;
    vec2 sc = unpackHalf2x16(s1.x) * u_scaling;
    vec2 qa = unpackHalf2x16(s1.y), qb = unpackHalf2x16(s1.z);
    bool textured = ((s1.w >> 16u) & 1u) == 1u;
    if (!(opacity > 1.0 / 255.0) || !textured) { cull(); return; }
    float qn = inversesqrt(max(dot(qa, qa) + dot(qb, qb), 1e-20));
    float w = qa.x * qn, x = qa.y * qn, y = qb.x * qn, z = qb.y * qn;
    // quat_to_rotmat columns 0 / 1 = the surfel's tangent axes, scaled
    vec3 L0 = vec3(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)) * sc.x;
    vec3 L1 = vec3(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)) * sc.y;
    vec3 c = u_R * p + u_t;
    float W = u_vp.x, H = u_vp.y;
    float zn = 0.01, zf = u_zfar, P22 = zf / (zf - zn), P23 = -(zf * zn) / (zf - zn);
    float P00 = 2.0 * u_focal / W, P11 = 2.0 * u_focal / H;
    float cw = c.z, clipZ = P22 * c.z + P23, zndc = clipZ / cw;
    float bnd = 1.2 * cw;
    if (!(zndc > 0.0 && zndc < 1.0) || abs(P00 * c.x) > bnd || abs(P11 * c.y) > bnd) { cull(); return; }
    vec3 l0 = u_R * L0, l1 = u_R * L1;
    float hw = W * 0.5, hwc = (W - 1.0) * 0.5, hh = H * 0.5, hhc = (H - 1.0) * 0.5;
    vec3 Tu = vec3(P00 * l0.x * hw + l0.z * hwc, P00 * l1.x * hw + l1.z * hwc, P00 * c.x * hw + cw * hwc);
    vec3 Tv = vec3(P11 * l0.y * hh + l0.z * hhc, P11 * l1.y * hh + l1.z * hhc, P11 * c.y * hh + cw * hhc);
    vec3 Tw = vec3(l0.z, l1.z, cw);
    // OAC cutoff
    float cutoff;
    if (shape > 1e-6) {
        float inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        cutoff = max(0.5, 3.0 * sqrt(max(0.0, 1.0 - pow(inv, 1.0 / max(shape, 1e-3)))));
    } else {
        cutoff = max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
    }
    float k2 = cutoff * cutoff;
    // SnugBox
    vec3 n0 = cross(Tv, Tw), n1 = cross(Tw, Tu), n2 = cross(Tu, Tv);
    float A = n0.x * n0.x + n0.y * n0.y - k2 * n0.z * n0.z;
    float B = n0.x * n1.x + n0.y * n1.y - k2 * n0.z * n1.z;
    float E = n1.x * n1.x + n1.y * n1.y - k2 * n1.z * n1.z;
    float D = n0.x * n2.x + n0.y * n2.y - k2 * n0.z * n2.z;
    float F = n1.x * n2.x + n1.y * n2.y - k2 * n1.z * n2.z;
    float det = A * E - B * B;
    float ax = 0.0, ay = 0.0, ex = -1.0, ey = -1.0;
    if (det > 0.0 && A > 0.0 && E > 0.0) {
        float qx = (B * F - E * D) / det, qy = (B * D - A * F) / det;
        vec3 cc = qx * n0 + qy * n1 + n2;
        float t = -(cc.x * cc.x + cc.y * cc.y - k2 * cc.z * cc.z);
        if (t > 0.0) { ax = qx; ay = qy; ex = sqrt(t * E / det); ey = sqrt(t * A / det); }
    }
    if (ex < 0.0) {                                   // compute_aabb fallback + garbage guard
        float dd = k2 * Tw.x * Tw.x + k2 * Tw.y * Tw.y - Tw.z * Tw.z;
        if (dd < 0.0) {
            float fx = k2 / dd, fy = k2 / dd, fz = -1.0 / dd;
            float pxx = fx * Tu.x * Tw.x + fy * Tu.y * Tw.y + fz * Tu.z * Tw.z;
            float pyy = fx * Tv.x * Tw.x + fy * Tv.y * Tw.y + fz * Tv.z * Tw.z;
            float h0x = pxx * pxx - (fx * Tu.x * Tu.x + fy * Tu.y * Tu.y + fz * Tu.z * Tu.z);
            float h0y = pyy * pyy - (fx * Tv.x * Tv.x + fy * Tv.y * Tv.y + fz * Tv.z * Tv.z);
            if (h0x >= 0.0 && h0y >= 0.0) {
                ax = pxx; ay = pyy; ex = sqrt(h0x); ey = sqrt(h0y);
                if (max(ex, ey) > 2.0 * max(W, H)) ex = -1.0;
            }
        }
    }
    if (ex < 0.0) { cull(); return; }
    if (max(ex, ey) < 0.25 && opacity < 0.5) { cull(); return; }        // SPR
    // CONIC expansion about the ¼-px quantised centre
    float cxc = floor(ax * 4.0 + 0.5) * 0.25, cyc = floor(ay * 4.0 + 0.5) * 0.25;
    vec3 kk = cxc * Tw - Tu, ll = cyc * Tw - Tv;
    vec3 pc = cross(kk, ll);
    float u0 = 1e10, v0 = 1e10, J00 = 0.0, J01 = 0.0, J10 = 0.0, J11 = 0.0, dwx = 0.0, dwy = 0.0;
    if (abs(pc.z) > 1e-12) {
        u0 = pc.x / pc.z; v0 = pc.y / pc.z;
        float wc = Tw.x * u0 + Tw.y * v0 + Tw.z;
        float detkl = kk.x * ll.y - kk.y * ll.x;
        if (abs(detkl) > 1e-12 && abs(wc) > 1e-8) {
            float scl = wc / detkl;
            J00 = -ll.y * scl; J01 = kk.y * scl; J10 = ll.x * scl; J11 = -kk.x * scl;
            dwx = (Tw.y * Tv.x - Tw.x * Tv.y) / pc.z;
            dwy = (Tu.y * Tw.x - Tu.x * Tw.y) / pc.z;
        } else { u0 = 1e10; v0 = 1e10; }
    }
    // SV colour (preprocess eval_sv): softmax over K sites of -tau·|site - view_dir|
    vec3 vd = normalize(p - u_eye);
    vec3 col = vec3(0.0);
    if (u_K > 0) {
        int base = i * 2 * u_K;
        float lg[${rs}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${rs}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${rs}; k++) {
            if (k >= u_K) break;
            float wk = exp(lg[k] - lmax);
            ws += wk;
            col += wk * texelFetch(u_sv, tc(base + u_K + k), 0).xyz;
        }
        col = max(vec3(0.0), col / max(ws, 1e-20) + vec3(u_sh_bias));
    }
    vec4 uvb = texelFetch(u_uv, tc(i * 2), 0);
    float layer = texelFetch(u_uv, tc(i * 2 + 1), 0).x;
    v_tu_op   = vec4(u0, v0, J00, opacity);
    v_tv_sh   = vec4(J01, J10, J11, shape);
    v_tw_ly   = vec4(dwx, dwy, 0.0, layer);
    v_col_dc  = vec4(col, c.z);
    v_ctr_ext = vec4(cxc, cyc, ex, ey);
    v_uv      = uvb;
    v_dp      = vec4(l0.z, l1.z, 0.0, 0.0);          // depth_u, depth_v = (view · L).z
}`,yu=`#version 300 es
precision highp float;
precision highp int;
layout(location=0) in vec4 a_tu_op;
layout(location=1) in vec4 a_tv_sh;
layout(location=2) in vec4 a_tw_ly;
layout(location=3) in vec4 a_col_dc;
layout(location=4) in vec4 a_ctr_ext;
layout(location=5) in vec4 a_uv;
layout(location=6) in vec4 a_dp;
uniform vec2 u_vp;
flat out vec4 v_tu_op; flat out vec4 v_tv_sh; flat out vec4 v_tw_ly; flat out vec4 v_col_dc;
flat out vec2 v_ctr; flat out vec4 v_uv; flat out vec2 v_dp;
void main() {
    v_tu_op = a_tu_op; v_tv_sh = a_tv_sh; v_tw_ly = a_tw_ly; v_col_dc = a_col_dc;
    v_ctr = a_ctr_ext.xy; v_uv = a_uv; v_dp = a_dp.xy;
    if (a_tu_op.w <= 0.0) { gl_Position = vec4(3.0, 3.0, 0.0, 1.0); return; }   // culled record: clipped away
    const float FILTER_R = 3.0 * 0.7071067811865476;
    int vid = gl_VertexID;
    vec2 ext_pad = a_ctr_ext.zw * 1.001 + vec2(0.25);
    vec2 hlf = max(ext_pad, vec2(FILTER_R));
    float ox = (vid & 1) == 0 ? 1.0 : -1.0;
    float oy = vid < 2 ? 1.0 : -1.0;
    vec2 corner = a_ctr_ext.xy + vec2(ox, oy) * hlf;
    gl_Position = vec4((corner.x * 2.0 - (u_vp.x - 1.0)) / u_vp.x,
                       -((corner.y * 2.0 - (u_vp.y - 1.0)) / u_vp.y), 0.0, 1.0);
}`;class Ni{constructor(r,a,v,p={}){R(this,"gl");R(this,"n");R(this,"K");R(this,"twLog2");R(this,"pre");R(this,"draw");R(this,"preU",{});R(this,"drawU",{});R(this,"texSurf");R(this,"texSv");R(this,"texUv");R(this,"idBuf");R(this,"recBuf");R(this,"preVao");R(this,"drawVao");R(this,"tf");R(this,"atlasTex",null);R(this,"atlasStatus","no atlas");R(this,"atlasUpload",null);R(this,"atlasOn",!1);R(this,"sd");R(this,"ok");R(this,"keyF");R(this,"keyU");R(this,"ids");R(this,"ids2");R(this,"keys2");R(this,"hist");R(this,"cnt",new Uint32Array(256));R(this,"bgColor",[0,0,0]);R(this,"scaling",1);R(this,"lastStats",{visible:0,cpuMs:0});R(this,"only",-1);R(this,"dbg",0);if(this.gl=r,a.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(a.K>rs)throw new Error(`WebGL2 backend supports K <= ${rs} SV sites (bundle has ${a.K})`);this.n=a.num_points,this.K=a.K,this.sd=a.surfel_data;const b=this.n,B=r.getParameter(r.MAX_TEXTURE_SIZE);this.twLog2=B>=4096?12:11;const C=1<<this.twLog2,T=new Uint32Array(a.surfel_data.buffer,a.surfel_data.byteOffset,b*8);for(let L=0;L<b;L++)if(T[L*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(b);for(let L=0;L<b;L++){const I=Pu(T[L*8+3]);this.ok[L]=I>1/255&&(T[L*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(b),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(b),this.ids2=new Uint32Array(b),this.keys2=new Uint32Array(b),this.hist=new Uint32Array(256*4);const M=L=>Math.max(1,Math.ceil(b*L/C)),V=(L,I,X,H,Y)=>{const Z=r.createTexture();return r.bindTexture(r.TEXTURE_2D,Z),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,L,C,M(H),0,I,X,Y),Z};{const L=M(2),I=new Uint32Array(C*L*4);I.set(T),this.texSurf=V(r.RGBA32UI,r.RGBA_INTEGER,r.UNSIGNED_INT,2,I)}{const L=this.K,I=M(2*L),X=new Float32Array(C*I*4),H=a.sv_params,Y=L*7;for(let Z=0;Z<b;Z++){const ie=Z*Y,_e=Z*2*L*4;for(let he=0;he<L;he++){X[_e+he*4]=H[ie+he*3],X[_e+he*4+1]=H[ie+he*3+1],X[_e+he*4+2]=H[ie+he*3+2],X[_e+he*4+3]=H[ie+L*6+he];const se=_e+(L+he)*4;X[se]=H[ie+L*3+he*3],X[se+1]=H[ie+L*3+he*3+1],X[se+2]=H[ie+L*3+he*3+2]}}this.texSv=V(r.RGBA32F,r.RGBA,r.FLOAT,2*L,X)}const F=v?wu(r,v):null;F&&(this.atlasStatus=F.status),this.atlasUpload=F;{const L=M(2),I=new Float32Array(C*L*4);if(v&&F&&F.tex){const X=F.slice_width,H=F.layer_h,Y=v.uv_extent,Z=F.rects;for(let ie=0;ie<b;ie++){if(!this.ok[ie])continue;const _e=Z[ie*5],he=Z[ie*5+1],se=Z[ie*5+2],ce=Z[ie*5+3],Te=ie*8;I[Te]=(_e+.5*Math.max(se,1))/X,I[Te+1]=(he+.5*Math.max(ce,1))/H,I[Te+2]=se/(2*Y)/X,I[Te+3]=ce/(2*Y)/H,I[Te+4]=Z[ie*5+4]}}this.texUv=V(r.RGBA32F,r.RGBA,r.FLOAT,2,I)}const G=(L,I)=>{const X=r.createShader(L);if(r.shaderSource(X,I),r.compileShader(X),!r.getShaderParameter(X,r.COMPILE_STATUS))throw new Error("GLSL: "+r.getShaderInfoLog(X));return X},q=L=>{if(r.linkProgram(L),!r.getProgramParameter(L,r.LINK_STATUS))throw new Error("GLSL link: "+r.getProgramInfoLog(L))};this.pre=r.createProgram(),r.attachShader(this.pre,G(r.VERTEX_SHADER,xu(this.twLog2))),r.attachShader(this.pre,G(r.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),r.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],r.INTERLEAVED_ATTRIBS),q(this.pre);for(const L of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[L]=r.getUniformLocation(this.pre,L);const oe=!(v&&v.kernel_type===0)&&a.kernel_type!==0;this.draw=r.createProgram(),r.attachShader(this.draw,G(r.VERTEX_SHADER,yu)),r.attachShader(this.draw,G(r.FRAGMENT_SHADER,gu(oe))),q(this.draw);for(const L of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[L]=r.getUniformLocation(this.draw,L);try{const L=new URLSearchParams(window.location.search);this.only=parseInt(L.get("only")??"-1",10),this.dbg=parseInt(L.get("dbg")??"0",10)|0}catch{}this.idBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.bufferData(r.ARRAY_BUFFER,b*4,r.DYNAMIC_DRAW),this.recBuf=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf),r.bufferData(r.ARRAY_BUFFER,b*Vi*4,r.STREAM_COPY),r.bindBuffer(r.ARRAY_BUFFER,null),this.preVao=r.createVertexArray(),r.bindVertexArray(this.preVao),r.bindBuffer(r.ARRAY_BUFFER,this.idBuf),r.enableVertexAttribArray(0),r.vertexAttribIPointer(0,1,r.UNSIGNED_INT,0,0),r.bindVertexArray(null),this.drawVao=r.createVertexArray(),r.bindVertexArray(this.drawVao),r.bindBuffer(r.ARRAY_BUFFER,this.recBuf);for(let L=0;L<7;L++)r.enableVertexAttribArray(L),r.vertexAttribPointer(L,4,r.FLOAT,!1,Vi*4,L*16),r.vertexAttribDivisor(L,1);r.bindVertexArray(null),r.bindBuffer(r.ARRAY_BUFFER,null),this.tf=r.createTransformFeedback(),r.useProgram(this.pre),r.uniform1i(this.preU.u_surf,1),r.uniform1i(this.preU.u_sv,2),r.uniform1i(this.preU.u_uv,3),r.uniform1i(this.preU.u_K,this.K),r.uniform1f(this.preU.u_sh_bias,p.shBias??a.sh_bias),r.uniform1f(this.preU.u_scaling,this.scaling),r.useProgram(this.draw),r.uniform1i(this.drawU.u_atlas,0),r.uniform1i(this.drawU.u_atlas_on,0),r.uniform4f(this.drawU.u_tex,0,0,v?v.res_bias:0,v?v.uv_extent:4),v&&F&&F.tex&&(this.atlasTex=F.tex,this.atlasOn=!0,r.uniform1i(this.drawU.u_atlas_on,1),r.uniform4f(this.drawU.u_tex,v.atlas_scale,v.atlas_offset,v.res_bias,v.uv_extent),r.uniform2f(this.drawU.u_dims,F.slice_width,F.layer_h)),r.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(r){this.atlasTex&&(this.atlasOn=r,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,r?1:0))}setGaussianScaling(r){this.scaling=r,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,r)}setShBias(r){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,r)}render(r){const a=this.gl,v=this.n,p=r.rotation,b=r.eye,B=this.sd,C=this.ok,T=r.width,M=r.height,V=performance.now(),F=.5*M/Math.tan(r.fovY*.5),G=-(p[0]*b[0]+p[4]*b[1]+p[8]*b[2]),q=-(p[1]*b[0]+p[5]*b[1]+p[9]*b[2]),oe=-(p[2]*b[0]+p[6]*b[1]+p[10]*b[2]),L=.01,I=r.zfar??100,X=I/(I-L),H=-(I*L)/(I-L),Y=2*F/T,Z=2*F/M,ie=p[0],_e=p[4],he=p[8],se=p[1],ce=p[5],Te=p[9],de=p[2],Ie=p[6],te=p[10],ge=this.keyF,Ee=this.ids;let we=0;for(let j=0;j<v;j++){if(C[j]===0||this.only>=0&&j!==this.only)continue;const pe=j*8,ze=B[pe],ye=B[pe+1],Me=B[pe+2],re=de*ze+Ie*ye+te*Me+oe;if(!(re>0))continue;const ve=X*re+H,Re=ve/re;if(!(Re>0&&Re<1))continue;const z=1.2*re,Q=ie*ze+_e*ye+he*Me+G;if(Math.abs(Y*Q)>z)continue;const y=se*ze+ce*ye+Te*Me+q;Math.abs(Z*y)>z||(ge[we]=I-ve,Ee[we]=j,we++)}const N=this.radixSort(we),J=performance.now()-V;return this.lastStats={visible:we,cpuMs:J},we===0?(a.viewport(0,0,T,M),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),0):(a.bindBuffer(a.ARRAY_BUFFER,this.idBuf),a.bufferSubData(a.ARRAY_BUFFER,0,N,0,we),a.bindBuffer(a.ARRAY_BUFFER,null),a.useProgram(this.pre),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.texSurf),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,this.texSv),a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,this.texUv),a.uniformMatrix3fv(this.preU.u_R,!1,[ie,se,de,_e,ce,Ie,he,Te,te]),a.uniform3f(this.preU.u_t,G,q,oe),a.uniform3f(this.preU.u_eye,b[0],b[1],b[2]),a.uniform2f(this.preU.u_vp,T,M),a.uniform1f(this.preU.u_focal,F),a.uniform1f(this.preU.u_zfar,I),a.bindVertexArray(this.preVao),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.tf),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),a.enable(a.RASTERIZER_DISCARD),a.beginTransformFeedback(a.POINTS),a.drawArrays(a.POINTS,0,we),a.endTransformFeedback(),a.disable(a.RASTERIZER_DISCARD),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,null),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindVertexArray(null),a.viewport(0,0,T,M),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.disable(a.DEPTH_TEST),a.useProgram(this.draw),a.uniform2f(this.drawU.u_vp,T,M),a.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D_ARRAY,this.atlasTex)),a.bindVertexArray(this.drawVao),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,we),a.bindVertexArray(null),we)}radixSort(r){const a=this.keyU,v=this.hist;v.fill(0);for(let M=0;M<r;M++){const V=a[M];v[V&255]++,v[256+(V>>>8&255)]++,v[512+(V>>>16&255)]++,v[768+(V>>>24)]++}let p=a,b=this.ids,B=this.keys2,C=this.ids2;const T=this.cnt;for(let M=0;M<4;M++){const V=M*8,F=M*256;let G=!1;for(let I=0;I<256;I++)if(v[F+I]===r){G=!0;break}if(G)continue;let q=0;for(let I=0;I<256;I++)T[I]=q,q+=v[F+I];for(let I=0;I<r;I++){const X=p[I],H=X>>>V&255,Y=T[H]++;B[Y]=X,C[Y]=b[I]}const oe=p;p=B,B=oe;const L=b;b=C,C=L}return b}}function Pu(o){const r=o&65535,a=r&32768?-1:1,v=r>>10&31,p=r&1023;return v===0?a*p*5960464477539063e-23:v===31?p?NaN:a*(1/0):a*(1+p/1024)*Math.pow(2,v-15)}const lr=o=>o.format===2||o.format===7,cr=o=>o.format===3||o.format===8;async function $i(o,r,a){const v=new URLSearchParams(window.location.search),p=new Cs(o,null),b=new oo(p),B=fo(r);wt(`[gl] WebGL2 backend · bc7=${B.bc7} astc=${B.astc} · ${r.getParameter(r.RENDERER)}`);let C=null,T=null,M=[],V=null;const F={animate:v.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},G=new so.Pane({title:"Config (WebGL2)",expanded:!0}),q={stats:"— loading —"};G.addMonitor(q,"stats",{label:"Stats",interval:200});const oe={s:a.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};G.addMonitor(oe,"s",{label:"Renderer"}),G.addButton({title:"🔁 Switch to WebGPU",disabled:!a.gpuAvailable}).on("click",()=>_r("webgpu"));let I=F.animate;b.enabled=!I,G.addInput(F,"animate",{label:"Animate"}).on("change",w=>{I=w.value,b.enabled=!I,I||(b.resetToCamera(),we())}),G.addInput(F,"atlas_enabled",{label:"Texture"}).on("change",w=>C==null?void 0:C.setAtlasEnabled(w.value)),G.addInput(F,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>Z()),G.addInput(F,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",w=>C==null?void 0:C.setGaussianScaling(w.value)),G.addInput(F,"bg",{label:"Background",color:{type:"float"}}).on("change",w=>{C&&(C.bgColor=[w.value.r,w.value.g,w.value.b])});const X={s:"—"};G.addMonitor(X,"s",{label:"Atlas"}),G.addButton({title:"🎯 Reset camera"}).on("click",()=>N(0,!1));const H=document.createElement("button");H.textContent="Texture: on",Object.assign(H.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(H);const Y=()=>{F.atlas_enabled=!F.atlas_enabled,C==null||C.setAtlasEnabled(F.atlas_enabled),H.textContent=`Texture: ${F.atlas_enabled?"on":"off"}`,G.refresh()};H.addEventListener("click",Y);const Z=()=>{const w=Math.max(.25,F.render_scale),S=Math.max(1,Math.ceil(w*o.clientWidth)),i=Math.max(1,Math.ceil(w*o.clientHeight));(o.width!==S||o.height!==i)&&(o.width=S,o.height=i),p.on_update_canvas()};new ResizeObserver(()=>Z()).observe(o),Z();const ie=.4,_e=3,he=.3;let se=-1,ce=null,Te=0;const de=pt.create(),Ie=kt.create(),te=w=>pt.fromMat(kt.create(w[0],w[1],w[2],w[4],w[5],w[6],w[8],w[9],w[10])),ge=(w,S)=>{ce={fromPos:W.clone(p.position),toPos:W.clone(w.position),fromQuat:pt.normalize(te(p.rotation)),toQuat:pt.normalize(te(w.rotation)),target:w,t:0,duration:Math.max(.01,S)}},Ee=document.createElement("span"),we=()=>{if(!T)return;const w=ho(p,T.surfel_data);w!==null&&b.setOrbitDepth(w)},N=(w,S=!0)=>{if(M.length===0)return;se=(w%M.length+M.length)%M.length;const i=M[se];S?ge(i,ie):(p.set_preset(i),b.resetToCamera(),we()),Ee.textContent=`${se+1} / ${M.length}: ${M[se].img_name??se}`};let J=null;const j=()=>{if(J||M.length===0)return;G.addSeparator(),J=document.createElement("div"),J.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const w=(S,i)=>{const g=document.createElement("button");return g.className="tp-btnv_b",g.textContent=S,g.style.cssText="flex:0 0 34px;height:24px;padding:0;",g.addEventListener("click",i),g};Ee.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",J.appendChild(w("◀",()=>N(se-1))),J.appendChild(Ee),J.appendChild(w("▶",()=>N(se+1))),G.element.appendChild(J)};window.addEventListener("keydown",w=>{var S;((S=w.target)==null?void 0:S.tagName)!=="INPUT"&&(w.key==="ArrowLeft"||w.key==="PageUp"?N(se-1):w.key==="ArrowRight"||w.key==="PageDown"?N(se+1):w.key==="t"||w.key==="T"?Y():w.key==="b"||w.key==="B"?Re():w.key>="1"&&w.key<="9"&&N(parseInt(w.key,10)-1))});let pe=0;const ze=(w,S)=>{if(!T)return;const i=o.getBoundingClientRect(),g=vr((w-i.left)*o.width/i.width,(S-i.top)*o.height/i.height,o,p,T.surfel_data);g&&b.setOrbitPivot(g)};o.addEventListener("dblclick",w=>ze(w.clientX,w.clientY)),o.addEventListener("pointerup",w=>{if(w.pointerType!=="touch")return;const S=performance.now();S-pe<300&&ze(w.clientX,w.clientY),pe=S});const ye=v.get("bundle")??v.get("model_url");async function Me(w,S){On(`parsing ${S} ...`);try{const i=new TextDecoder().decode(new Uint8Array(w,0,8));let g=w,h=null,f=null;i===Ss&&({pcBuffer:g,camerasBuffer:h,atlasBuffer:f}=gr(w)),Mt("parsing surfels ..."),T=await Bi(new File([g],S));let c=null;if(f&&v.get("notex")!=="1"){c=Gn(f);const E=lr(c)&&B.bc7||cr(c)&&B.astc;let P=v.get("atlas2");if(!E&&!P&&ye){const D=ye.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);D&&(P=D[2]?`${D[1]}.bitymi${D[3]??""}`:`${D[1]}_astc.bitymi${D[3]??""}`)}if(!E&&P){Mt("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:D}=await Fn(P,(O,K)=>Mt(`downloading twin atlas ...
${(O/1048576).toFixed(1)}${K?` / ${(K/1048576).toFixed(1)}`:""} MB`));if(D!=null&&D.atlasBuffer){const O=Gn(D.atlasBuffer);(lr(O)&&B.bc7||cr(O)&&B.astc)&&(c=O)}}catch(D){console.warn("[gl] atlas2 failed:",D)}}}Mt("building GPU resources ..."),V=c,C=new Ni(r,T,c),C.bgColor=[F.bg.r,F.bg.g,F.bg.b],C.setGaussianScaling(F.gaussian_scaling),C.setAtlasEnabled(F.atlas_enabled),X.s=C.atlasStatus,wt(`[gl] max tex ${r.getParameter(r.MAX_TEXTURE_SIZE)} · layers ${r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS)} · ${C.atlasStatus}`),wt(`[gl] ${T.num_points} surfels · ${C.atlasStatus}`),M=[];const m=v.get("camera_url");if(h){const E=URL.createObjectURL(new Blob([h],{type:"application/json"}));try{M=await fr(E)}finally{URL.revokeObjectURL(E)}}else if(m)try{M=await fr(m)}catch(E){console.warn("[gl] camera_url failed:",E)}if(b.setBbox(T.bbox.min,T.bbox.max),M.length>0)j(),N(0,!1);else{const E=T.centroid,P=.5*Math.hypot(T.bbox.max[0]-T.bbox.min[0],T.bbox.max[1]-T.bbox.min[1],T.bbox.max[2]-T.bbox.min[2]),D=W.create(E[0]-P,E[1]-P,E[2]-P),O=vt.lookAt(D,W.create(E[0],E[1],E[2]),W.create(0,1,0));vt.copy(O,p.rotation),p.rotation[12]=0,p.rotation[13]=0,p.rotation[14]=0,W.copy(D,p.position),p.update_buffer(),b.resetToCamera()}}catch(i){throw Ht(),i}}const re=document.getElementById("load-button");if(re==null||re.addEventListener("click",()=>{const w=document.createElement("input");w.type="file",w.accept=".ply,.bitymi",w.onchange=async()=>{var i;const S=(i=w.files)==null?void 0:i[0];S&&await Me(await S.arrayBuffer(),S.name)},w.click()}),ye)try{On("downloading ...");const{bundle:w,rawPly:S}=await Fn(ye,(i,g,h)=>Mt(`downloading ...
${(i/2**20).toFixed(1)}${g?` / ${(g/2**20).toFixed(1)}`:""} MB · ${(h/2**20).toFixed(1)} MB/s`));w?await ve(w.pcBuffer,w.camerasBuffer,w.atlasBuffer,ye.split("/").pop()??"bundle"):S&&await Me(S,ye.split("/").pop()??"scene.ply")}catch(w){Ht(),console.error("[gl] bundle load failed:",w),q.stats=`load failed: ${(w==null?void 0:w.message)??w}`;const S=document.createElement("div");S.textContent=`Could not load this bundle in the WebGL2 renderer: ${(w==null?void 0:w.message)??w}`,Object.assign(S.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(S)}else q.stats="no ?bundle= — use 📂 Load";async function ve(w,S,i,g){const h=new TextEncoder().encode(Ss),f=[w],c=[0];S&&(f.push(S),c.push(2)),i&&(f.push(i),c.push(3));const m=4+f.length*20,E=8+m,P=E+f.reduce((ae,ne)=>ae+ne.byteLength,0),D=new Uint8Array(P),O=new DataView(D.buffer);D.set(h,0),O.setUint32(8,f.length,!0);let K=E;f.forEach((ae,ne)=>{O.setUint32(12+ne*20,c[ne],!0),O.setBigUint64(16+ne*20,BigInt(K),!0),O.setBigUint64(24+ne*20,BigInt(ae.byteLength),!0),D.set(new Uint8Array(ae),K),K+=ae.byteLength}),await Me(D.buffer,g)}let Re=()=>{};const z=v.get("bundle_b");if(z&&C&&T){const w=v.get("label_a")??"A",S=v.get("label_b")??"B",i={a:{pc:T,renderer:C,atlas:V},b:null};let g="a",h=!1,f="";const c=document.createElement("button");Object.assign(c.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const m=(D="")=>{c.textContent=D||`Scene: ${g==="a"?w:S}  ⇄`;try{const O=new URL(window.location.href);g==="b"?O.searchParams.set("side","b"):O.searchParams.delete("side"),history.replaceState(history.state,"",O.toString())}catch{}},E=D=>{const O=document.createElement("div");Object.assign(O.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const K=document.createElement("div");K.textContent=D,O.appendChild(K);const ae=document.createElement("div");ae.style.marginTop="12px";const ne=(le,Pe)=>{const Be=document.createElement("button");Be.textContent=le,Object.assign(Be.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),Be.onclick=Pe,ae.appendChild(Be)};a.gpuAvailable&&ne("Switch to WebGPU",()=>_r("webgpu")),ne("OK",()=>O.remove()),O.appendChild(ae),document.body.appendChild(O)},P=D=>{const O=D==="a"?i.a:i.b;C=O.renderer,T=O.pc,V=O.atlas,C.bgColor=[F.bg.r,F.bg.g,F.bg.b],C.setGaussianScaling(F.gaussian_scaling),C.setAtlasEnabled(F.atlas_enabled),X.s=C.atlasStatus,g=D,m(),console.log(`[gl A/B] active = ${D}: ${T.num_points} surfels`)};Re=async()=>{if(!h){if(g==="b"){P("a");return}if(i.b){P("b");return}if(f){E(f);return}h=!0,m(`loading ${S} ...`);try{const{bundle:D}=await Fn(z,(ne,le)=>m(`loading ${S} ... ${(ne/1048576).toFixed(0)}${le?`/${(le/1048576).toFixed(0)}`:""} MB`));if(!D)throw new Error("bundle_b must be a .bitymi bundle");const O=await Bi(new File([D.pcBuffer],"bundle_b.ply"));let K=null;if(D.atlasBuffer&&v.get("notex")!=="1"){const ne=Gn(D.atlasBuffer);(lr(ne)&&B.bc7||cr(ne)&&B.astc)&&(K=ne)}let ae;try{ae=new Ni(r,O,K)}catch(ne){throw f=/tex3d/.test(String(ne==null?void 0:ne.message))?`“${S}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${w}”.`:`“${S}” cannot be shown in the WebGL2 renderer: ${(ne==null?void 0:ne.message)??ne}. Still showing “${w}”.`,new Error(f)}i.b={pc:O,renderer:ae,atlas:K},P("b")}catch(D){console.error("[gl A/B] B failed:",D),f||(f=`Could not load “${S}”: ${(D==null?void 0:D.message)??D}`),m(),E(f)}finally{h=!1}}},c.addEventListener("click",()=>Re()),document.body.appendChild(c),m(),v.get("side")==="b"&&Re()}let Q=performance.now(),y=0,l=0;const _=()=>{var w;return((w=b.isDragging)==null?void 0:w.call(b))??!1};let u=0;function x(){try{k()}catch(w){u++<5&&console.error("[gl frame] exception (render loop kept alive):",w)}requestAnimationFrame(x)}function k(){const w=performance.now(),S=Math.min((w-Q)/1e3,.1);if(Q=w,C&&T){if(ce){ce.t+=S/ce.duration;const h=Math.min(1,ce.t),f=h*h*(3-2*h);W.lerp(ce.fromPos,ce.toPos,f,p.position),pt.slerp(ce.fromQuat,ce.toQuat,f,de),kt.fromQuat(de,Ie),vt.fromMat3(Ie,p.rotation),p.update_buffer(),ce.t>=1&&(p.set_preset(ce.target),ce=null,I?Te=he:(b.resetToCamera(),we()))}else I&&M.length>0&&(Te-=S,Te<=0&&(se=(se+1)%M.length,ge(M[se],_e),Ee.textContent=`${se+1} / ${M.length}: ${M[se].img_name??se}`));_()&&ce&&(ce=null),b.update(S);const i=C.render({rotation:p.rotation,eye:p.position,fovY:p.getFovY(),width:o.width,height:o.height,zfar:p.zfar}),g=1/Math.max(S,.001);y=y===0?g:y*.9+g*.1,q.stats=`${i.toLocaleString()} / ${T.num_points.toLocaleString()} surfels · ${Math.round(y)} fps · cpu ${C.lastStats.cpuMs.toFixed(1)} ms`,l++,l===2&&Ht()}}requestAnimationFrame(x),window.__halloumiGL={stats:q,get renderer(){return C},get cameras(){return M},setPreset:N,get atlas(){return V},pick(w,S){return T?vr(w,S,o,p,T.surfel_data):null},pickIds(w,S){if(!T)return[];const[i,g,h]=Ts(w,S,p),f=p.position[0],c=p.position[1],m=p.position[2],E=T.surfel_data,P=new Uint32Array(E.buffer,E.byteOffset,E.length),D=K=>{const ae=K>>10&31,ne=K&1023,le=K&32768?-1:1;return ae===0?le*ne*596e-10:le*(1+ne/1024)*Math.pow(2,ae-15)},O=[];for(let K=0;K<T.num_points;K++){const ae=K*8,ne=E[ae],le=E[ae+1],Pe=E[ae+2],Be=D(P[ae+4]&65535),ke=D(P[ae+4]>>>16),Ce=D(P[ae+5]&65535),Fe=D(P[ae+5]>>>16),Ge=D(P[ae+6]&65535),Ze=D(P[ae+6]>>>16),Xe=1/Math.hypot(Ce,Fe,Ge,Ze),We=Ce*Xe,Ke=Fe*Xe,Oe=Ge*Xe,je=Ze*Xe,ct=[1-2*(Oe*Oe+je*je),2*(Ke*Oe+We*je),2*(Ke*je-We*Oe)],at=[2*(Ke*Oe-We*je),1-2*(Ke*Ke+je*je),2*(Oe*je+We*Ke)],Qe=[2*(Ke*je+We*Oe),2*(Oe*je-We*Ke),1-2*(Ke*Ke+Oe*Oe)],tt=i*Qe[0]+g*Qe[1]+h*Qe[2];if(Math.abs(tt)<1e-9)continue;const st=((ne-f)*Qe[0]+(le-c)*Qe[1]+(Pe-m)*Qe[2])/tt;if(st<=0)continue;const Ve=f+st*i-ne,rt=c+st*g-le,it=m+st*h-Pe,ht=(Ve*ct[0]+rt*ct[1]+it*ct[2])/Be,nt=(Ve*at[0]+rt*at[1]+it*at[2])/ke,Pt=ht*ht+nt*nt,lt=p.rotation,bt=p.position,St=lt[0]*(ne-bt[0])+lt[4]*(le-bt[1])+lt[8]*(Pe-bt[2]),Vt=lt[1]*(ne-bt[0])+lt[5]*(le-bt[1])+lt[9]*(Pe-bt[2]),Dt=lt[2]*(ne-bt[0])+lt[6]*(le-bt[1])+lt[10]*(Pe-bt[2]),Nt=o.width,$t=o.height,Ct=.5*$t/Math.tan(p.getFovY()*.5),Gt=Ct*St/Dt+(Nt-1)*.5,qt=Ct*Vt/Dt+($t-1)*.5,ot=2*((Gt-w)*(Gt-w)+(qt-S)*(qt-S)),Ut=D(P[ae+3]&65535),pn=D(P[ae+3]>>>16),hn=Pt>=9?0:Math.pow(Math.max(0,1-Pt/9),pn>1e-6?pn:1),Cn=Math.min(.99,Ut*Math.max(hn,Math.exp(-.5*ot)));if(Cn<1/255)continue;const Wt=V?Array.from(V.rects_expanded.subarray(K*5,K*5+5)):null,_t=C&&C.atlasUpload?Array.from(C.atlasUpload.rects.subarray(K*5,K*5+5)):null;O.push({id:K,t:+st.toFixed(3),u:+ht.toFixed(2),v:+nt.toFixed(2),rho2d:+ot.toFixed(2),alpha:+Cn.toFixed(3),opa:+Ut.toFixed(2),tex:P[ae+7]>>>16&1,rect:Wt,remap:_t})}return O.sort((K,ae)=>K.t-ae.t)}}}const qi="halloumi.gpuLossReload",Su=6e4;let Wi=!1;function Ki(o,r){const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const v=document.createElement("div");if(v.textContent=o,a.appendChild(v),r){const p=document.createElement("button");p.textContent="Reload",Object.assign(p.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),p.onclick=()=>window.location.reload(),a.appendChild(p)}document.body.appendChild(a)}function _o(o,r){if(Wi)return;Wi=!0,console.error(`[gpu-loss] ${o} lost: ${r}`);let a=0;try{a=parseInt(sessionStorage.getItem(qi)??"0",10)||0}catch{}const v=Date.now();if(v-a>Su){try{sessionStorage.setItem(qi,String(v))}catch{}Ki("The GPU device was lost — reloading the viewer…",!1),setTimeout(()=>window.location.reload(),400)}else Ki(`The GPU device was lost again (${o}: ${r}). Reload to try once more.`,!0)}function Eu(o){o.lost.then(a=>{a.reason!=="destroyed"&&_o("webgpu",`${a.reason}: ${a.message}`)});let r=0;o.addEventListener("uncapturederror",a=>{var v;r++<5&&console.error("[webgpu] uncaptured error:",((v=a==null?void 0:a.error)==null?void 0:v.message)??a)})}function ji(o){o.addEventListener("webglcontextlost",r=>{r.preventDefault(),_o("webgl","webglcontextlost")},!1)}(function(){let r="dev";for(const v of Array.from(document.querySelectorAll('script[type="module"]'))){const b=v.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(b){r=b[1];break}}const a=document.createElement("div");a.textContent="v "+r,a.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(a.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(a)})();function Hi(o){const r=document.createElement("div");r.textContent=o,Object.assign(r.style,{position:"fixed",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",color:"#eee",background:"#111",font:"16px system-ui, sans-serif",padding:"24px",textAlign:"center"}),document.body.appendChild(r)}(async()=>{const o=document.querySelector("#webgpu-canvas");_c(o!==null);const{forced:r,stored:a}=fu(),v=r??a??"webgpu";let p=null;if(navigator.gpu!==void 0)try{p=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(T){console.warn("[backend] requestAdapter failed:",T)}if(v==="webgl"||p===null){const T=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!T){Hi(p===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${v==="webgl"?r?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),ji(o),$i(o,T,{gpuAvailable:p!==null});return}const b=[];p.features.has("timestamp-query")&&b.push("timestamp-query"),p.features.has("texture-compression-bc")&&b.push("texture-compression-bc"),p.features.has("texture-compression-astc")&&b.push("texture-compression-astc"),console.log("[adapter]",p.info??"(unknown)");try{const T=p.info??{};globalThis.__gpuAdapterInfo={vendor:T.vendor??"?",architecture:T.architecture??"?",device:T.device??"?",description:T.description??"?",features:Array.from(p.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(p.features)),console.log("[adapter] BC7:",p.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",p.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:p.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:p.limits.maxComputeWorkgroupStorageSize,maxBufferSize:p.limits.maxBufferSize,maxStorageBufferBindingSize:p.limits.maxStorageBufferBindingSize,maxTextureDimension2D:p.limits.maxTextureDimension2D});let B;try{B=await p.requestDevice({requiredFeatures:b,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:p.limits.maxComputeWorkgroupStorageSize,maxBufferSize:p.limits.maxBufferSize,maxStorageBufferBindingSize:p.limits.maxStorageBufferBindingSize}})}catch(T){console.warn("[backend] requestDevice failed, falling back to WebGL2:",T);const M=o.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!M){Hi(`WebGPU device creation failed (${T}) and WebGL2 is not available.`);return}ji(o),$i(o,M,{gpuAvailable:!1});return}Eu(B);const C=o.getContext("webgpu");bu(o,C,B,b)})();
